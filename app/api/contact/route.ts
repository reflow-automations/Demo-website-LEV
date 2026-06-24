/**
 * POST /api/contact — verifieert het reCAPTCHA-token bij Google en
 * verwerkt de form-inzending (server-side verificatie + e-mail via Resend).
 *
 * ─────────────────────────────────────────────────────────────────────
 * GEDRAG, afhankelijk van welke env vars gezet zijn:
 *
 *  - Zonder RECAPTCHA_SECRET_KEY  → Google's officiële test-secret
 *    (always-pass). Bedoeld voor de demo / localhost.
 *  - Zonder RESEND_API_KEY        → er wordt GEEN mail verstuurd; de
 *    inzending wordt alleen naar de Vercel-logs geschreven. Zo kan deze
 *    route veilig live zonder dat e-mail al geconfigureerd is.
 *  - Met beide gezet               → echte verificatie + echte mail naar
 *    CONTACT_TO (default info@digitalconceptsfactory.nl).
 *
 * VOOR PRODUCTIE in Vercel env vars zetten (server-only, NOOIT NEXT_PUBLIC_):
 *    RECAPTCHA_SECRET_KEY = <secret van https://google.com/recaptcha/admin>
 *    RESEND_API_KEY       = <API-key uit het Resend-account van DCF>
 *
 * Optioneel te overschrijven (anders defaults hieronder):
 *    CONTACT_TO   = ontvanger van de aanvraag
 *    CONTACT_FROM = afzender (moet een adres op het in Resend geverifieerde
 *                   domein zijn, d.w.z. @digitalconceptsfactory.nl)
 *
 * De inzending wordt ALTIJD ook naar de Vercel-logs geschreven, zodat er
 * een vangnet is mocht de mailverzending ooit falen.
 * ─────────────────────────────────────────────────────────────────────
 */

import { NextResponse } from "next/server";

// Google's officiële test-secret (always-pass) zolang er geen echte staat.
const TEST_SECRET = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";

const SECRET = process.env.RECAPTCHA_SECRET_KEY?.trim() || TEST_SECRET;

const RESEND_API_KEY = process.env.RESEND_API_KEY?.trim() || "";
const CONTACT_TO =
  process.env.CONTACT_TO?.trim() || "info@digitalconceptsfactory.nl";
const CONTACT_FROM =
  process.env.CONTACT_FROM?.trim() ||
  "Digital Concepts Factory <noreply@digitalconceptsfactory.nl>";

// Pas gezet in productie. Zolang leeg wordt de hostname-check overgeslagen,
// zodat de demo / localhost niet breekt. In Vercel zetten op:
//   RECAPTCHA_EXPECTED_HOSTNAME = digitalconceptsfactory.nl
const EXPECTED_HOSTNAME = process.env.RECAPTCHA_EXPECTED_HOSTNAME?.trim() || "";

// Tweede, duurzame leverkanaal: een n8n-webhook die de lead naar Rogier mailt
// (workflow "DCF website - contact lead (backup)"). Server-only, GEEN
// NEXT_PUBLIC_. Het onraadbare webhook-pad is de bescherming; LEAD_WEBHOOK_SECRET
// is optioneel (de n8n-flow verifieert hem nu nog niet).
//   LEAD_WEBHOOK_URL    = https://n8n.reflowautomations.nl/webhook/dcf-website-lead-3f9a7c21e8
//   LEAD_WEBHOOK_SECRET = <optioneel, meegestuurd als x-lead-secret header>
const LEAD_WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL?.trim() || "";
const LEAD_WEBHOOK_SECRET = process.env.LEAD_WEBHOOK_SECRET?.trim() || "";

interface VerifyResponse {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
}

async function verifyToken(token: string): Promise<VerifyResponse> {
  const body = new URLSearchParams({ secret: SECRET, response: token });
  const r = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  return (await r.json()) as VerifyResponse;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

interface Submission {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  topics: string[];
  message: string;
}

/**
 * Verstuurt de aanvraag als e-mail via de Resend REST API.
 * Geen SDK nodig: één fetch naar https://api.resend.com/emails met de
 * server-only API-key als Bearer-token. Gooit bij een niet-2xx-respons.
 */
async function sendMail(sub: Submission): Promise<void> {
  const rows: Array<[string, string]> = [
    ["Naam", sub.name],
    ["Organisatie", sub.organisation || "—"],
    ["E-mail", sub.email],
    ["Telefoon", sub.phone || "—"],
    ["Onderwerpen", sub.topics.length ? sub.topics.join(", ") : "—"],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#2A1D14;line-height:1.5">
      <h2 style="margin:0 0 16px">Nieuwe contactaanvraag via de website</h2>
      <table style="border-collapse:collapse;margin-bottom:16px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding:4px 12px 4px 0;font-weight:bold;vertical-align:top">${escapeHtml(
                   k,
                 )}</td>
                 <td style="padding:4px 0">${escapeHtml(v)}</td>
               </tr>`,
          )
          .join("")}
      </table>
      <div style="padding-top:12px;border-top:1px solid #EEE6D5">
        <div style="font-weight:bold;margin-bottom:6px">Bericht</div>
        <div style="white-space:pre-wrap">${escapeHtml(sub.message || "—")}</div>
      </div>
    </div>`;

  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\nBericht:\n${sub.message || "—"}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      reply_to: sub.email,
      subject: `Contactaanvraag: ${sub.name}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend ${res.status}: ${detail}`);
  }
}

/**
 * Stuurt de lead naar de n8n-webhook (duurzame backup). Timeout van 8s via
 * AbortController zodat een trage/dode webhook de respons niet ophoudt.
 * Gooit bij timeout of een niet-2xx-respons.
 */
async function sendToWebhook(sub: Submission): Promise<void> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(LEAD_WEBHOOK_SECRET ? { "x-lead-secret": LEAD_WEBHOOK_SECRET } : {}),
      },
      body: JSON.stringify({
        name: sub.name,
        organisation: sub.organisation,
        email: sub.email,
        phone: sub.phone,
        topics: sub.topics,
        message: sub.message,
      }),
      signal: controller.signal,
    });
    if (!res.ok) {
      throw new Error(`Lead-webhook ${res.status}`);
    }
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Ongeldige JSON" },
      { status: 400 },
    );
  }

  // 0) Honeypot — een onzichtbaar veld dat mensen nooit invullen. Vult een
  //    bot het toch, dan doen we alsof het gelukt is (ok:true) zodat de bot
  //    niets doorheeft, maar we versturen niets.
  const honeypot = String(payload.website ?? "").trim();
  if (honeypot) {
    console.warn("[contact] honeypot ingevuld — genegeerd als spam");
    return NextResponse.json({ ok: true });
  }

  const token =
    typeof payload.captchaToken === "string" ? payload.captchaToken : "";

  if (!token) {
    return NextResponse.json(
      { ok: false, error: "Geen reCAPTCHA-token meegestuurd" },
      { status: 400 },
    );
  }

  // 1) Server-side verificatie bij Google
  const verify = await verifyToken(token);
  if (!verify.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "reCAPTCHA-verificatie gefaald",
        details: verify["error-codes"] ?? [],
      },
      { status: 400 },
    );
  }

  // 1b) Hostname-check — het token moet op het eigen domein (of een
  //     subdomein zoals www) zijn opgelost. Alleen actief zodra
  //     RECAPTCHA_EXPECTED_HOSTNAME gezet is.
  if (EXPECTED_HOSTNAME && verify.hostname) {
    const host = verify.hostname;
    const hostOk =
      host === EXPECTED_HOSTNAME || host.endsWith(`.${EXPECTED_HOSTNAME}`);
    if (!hostOk) {
      console.warn("[contact] reCAPTCHA hostname-mismatch", host);
      return NextResponse.json(
        { ok: false, error: "reCAPTCHA-verificatie gefaald" },
        { status: 400 },
      );
    }
  }

  // 2) Velden uit form
  const sub: Submission = {
    name: String(payload.name ?? "").trim().slice(0, 200),
    organisation: String(payload.organisation ?? "").trim().slice(0, 200),
    email: String(payload.email ?? "").trim().slice(0, 200),
    phone: String(payload.phone ?? "").trim().slice(0, 50),
    topics: Array.isArray(payload.topics)
      ? payload.topics.map(String).slice(0, 10)
      : [],
    message: String(payload.message ?? "").trim().slice(0, 5000),
  };

  if (!sub.name || !sub.email) {
    return NextResponse.json(
      { ok: false, error: "Naam en e-mail zijn verplicht" },
      { status: 400 },
    );
  }

  // 3a) Altijd loggen naar Vercel — vangnet, ongeacht of mail lukt.
  console.log("[contact] new submission", {
    name: sub.name,
    organisation: sub.organisation,
    email: sub.email,
    phone: sub.phone,
    topics: sub.topics,
    messageLength: sub.message.length,
    captchaHost: verify.hostname,
    captchaTs: verify.challenge_ts,
  });

  // 3b) Aflevering via twee onafhankelijke kanalen:
  //       - Resend  → e-mailnotificatie naar DCF (CONTACT_TO)
  //       - n8n     → duurzame backup die Rogier monitort
  //     delivered = minstens één kanaal slaagde. Zo weet de bezoeker eerlijk
  //     of het verzenden écht is gelukt, en gaat een lead niet stilletjes
  //     verloren wanneer één kanaal plat ligt.
  let resendOk = false;
  let webhookOk = false;

  if (RESEND_API_KEY) {
    try {
      await sendMail(sub);
      resendOk = true;
    } catch (err) {
      console.error("[contact] Resend-mail mislukt", err);
    }
  }

  if (LEAD_WEBHOOK_URL) {
    try {
      await sendToWebhook(sub);
      webhookOk = true;
    } catch (err) {
      console.error("[contact] lead-webhook mislukt", err);
    }
  }

  // Geen enkel kanaal geconfigureerd → demo/preview/localhost. We doen alsof
  // het gelukt is (de inzending staat in de Vercel-log) zodat de demo niet
  // breekt. In productie hoort minstens één kanaal gezet te zijn.
  const noChannelConfigured = !RESEND_API_KEY && !LEAD_WEBHOOK_URL;
  if (noChannelConfigured) {
    console.warn(
      "[contact] geen leverkanaal geconfigureerd — alleen gelogd (demo-modus)",
    );
    return NextResponse.json({ ok: true });
  }

  // Minstens één kanaal is geconfigureerd: nu telt of er echt iets is
  // afgeleverd. Lukte niets, dan een eerlijke fout (de lead staat nog in de
  // Vercel-log als vangnet, maar de bezoeker krijgt geen valse bevestiging).
  if (!resendOk && !webhookOk) {
    console.error("[contact] aflevering via alle kanalen mislukt", {
      resendConfigured: Boolean(RESEND_API_KEY),
      webhookConfigured: Boolean(LEAD_WEBHOOK_URL),
    });
    return NextResponse.json(
      {
        ok: false,
        error:
          "Uw aanvraag kon op dit moment niet worden verzonden. Probeer het later opnieuw of mail ons direct op info@digitalconceptsfactory.nl.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
