/**
 * POST /api/contact — verifieert het reCAPTCHA-token bij Google en
 * verwerkt de form-inzending.
 *
 * ─────────────────────────────────────────────────────────────────────
 * NU IN TEST-MODUS: zonder RECAPTCHA_SECRET_KEY env var gebruikt deze
 * route Google's officiële test-secret die altijd "success" retourneert.
 * Bij elke échte inzending komt het bericht in de Vercel-logs terecht
 * (Project → Deployments → laatste → Functions → /api/contact).
 *
 * VOOR PRODUCTIE — twee dingen om toe te voegen:
 *
 * 1. Echte reCAPTCHA secret in Vercel env vars:
 *    RECAPTCHA_SECRET_KEY = <secret van https://google.com/recaptcha/admin>
 *
 * 2. Mail-handler invoegen op de plek `// TODO: hier mail versturen`
 *    Opties:
 *      - Resend (resend.com) — eenvoudig, paste je API key in env
 *      - SendGrid, Mailgun, Postmark — vergelijkbaar
 *      - SMTP via Hostnet mail — gebruik nodemailer
 *    Bij voorkeur: stuur naar info@digitalconceptsfactory.nl
 * ─────────────────────────────────────────────────────────────────────
 */

import { NextResponse } from "next/server";

// Google's officiële test-secret (always-pass)
const TEST_SECRET = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";

const SECRET =
  process.env.RECAPTCHA_SECRET_KEY?.trim() || TEST_SECRET;

interface VerifyResponse {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
}

async function verifyToken(token: string): Promise<VerifyResponse> {
  const body = new URLSearchParams({ secret: SECRET, response: token });
  const r = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    },
  );
  return (await r.json()) as VerifyResponse;
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

  const token = typeof payload.captchaToken === "string"
    ? payload.captchaToken
    : "";

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

  // 2) Velden uit form
  const name = String(payload.name ?? "").trim().slice(0, 200);
  const organisation = String(payload.organisation ?? "").trim().slice(0, 200);
  const email = String(payload.email ?? "").trim().slice(0, 200);
  const phone = String(payload.phone ?? "").trim().slice(0, 50);
  const topics = Array.isArray(payload.topics)
    ? payload.topics.map(String).slice(0, 10)
    : [];
  const message = String(payload.message ?? "").trim().slice(0, 5000);

  if (!name || !email) {
    return NextResponse.json(
      { ok: false, error: "Naam en e-mail zijn verplicht" },
      { status: 400 },
    );
  }

  // 3) Verwerking — voor nu loggen we de inzending naar Vercel logs.
  //    TODO: hier mail versturen via Resend / SendGrid / SMTP.
  console.log("[contact] new submission", {
    name,
    organisation,
    email,
    phone,
    topics,
    messageLength: message.length,
    captchaHost: verify.hostname,
    captchaTs: verify.challenge_ts,
  });

  return NextResponse.json({ ok: true });
}
