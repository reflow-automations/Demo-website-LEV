/**
 * POST /api/chat — lichte proxy vóór de n8n-chatbot-webhook.
 *
 * Waarom een proxy: voorheen postte de browser rechtstreeks naar de publieke
 * n8n-webhook. Die triggert een (betaalde) LLM, dus een onbeschermd publiek
 * endpoint is een kosten-/misbruikrisico. Deze proxy voegt toe:
 *   - origin-check  → weert browser-calls vanaf vreemde domeinen
 *   - input-cap     → begrenst de berichtlengte
 *   - timeout       → laat een trage/dode webhook de respons niet ophouden
 *   - rate-limit    → best-effort drempel per IP (in-memory, per instance)
 * en haalt de webhook-URL uit de browser-bundle (server-only env var).
 *
 * RESTRISICO: zonder gedeeld geheim blijft de (al eerder publieke) n8n-URL
 * technisch met curl aanroepbaar. De echte kosten-backstop is een dag-quota-cap
 * op de AI-key in n8n (zie CLAUDE.md, twee-laags bescherming).
 *
 * Env (server-only, GEEN NEXT_PUBLIC_):
 *   CHAT_WEBHOOK_URL = https://n8n.reflowautomations.nl/webhook/dcf-chat
 */

import { NextResponse } from "next/server";

const CHAT_WEBHOOK_URL =
  process.env.CHAT_WEBHOOK_URL?.trim() ||
  "https://n8n.reflowautomations.nl/webhook/dcf-chat";

const MAX_MESSAGE_LENGTH = 2000;
const UPSTREAM_TIMEOUT_MS = 20000;

// Best-effort rate-limit per IP. In-memory, dus per serverless-instance en niet
// hard — een eerste drempel tegen hameren, geen sluitende garantie.
const RATE_LIMIT_MAX = 20; // requests
const RATE_LIMIT_WINDOW_MS = 60_000; // per 60s
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

/** Same-origin of toegestaan domein? Blokkeert alleen als Origin duidelijk
 *  cross-origin is; ontbreekt Origin, dan laten we door (rate-limit vangt af). */
function originAllowed(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true; // veel same-origin POSTs sturen geen Origin
  let host: string;
  try {
    host = new URL(origin).hostname;
  } catch {
    return false;
  }
  const requestHost = req.headers.get("host")?.split(":")[0] ?? "";
  return (
    host === requestHost ||
    host === "digitalconceptsfactory.nl" ||
    host.endsWith(".digitalconceptsfactory.nl") ||
    host.endsWith(".vercel.app") ||
    host === "localhost" ||
    host === "127.0.0.1"
  );
}

export async function POST(req: Request) {
  if (!originAllowed(req)) {
    return NextResponse.json({ error: "Origin niet toegestaan" }, { status: 403 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Te veel verzoeken. Probeer het zo opnieuw." },
      { status: 429 },
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige JSON" }, { status: 400 });
  }

  const message = String(payload.message ?? "").trim();
  const sessionId = String(payload.sessionId ?? "").slice(0, 100);

  if (!message) {
    return NextResponse.json({ error: "Leeg bericht" }, { status: 400 });
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: "Bericht te lang" }, { status: 400 });
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);
  try {
    const res = await fetch(CHAT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, sessionId }),
      signal: controller.signal,
    });
    if (!res.ok) {
      console.error("[chat] upstream-webhook fout", res.status);
      return NextResponse.json(
        { error: "Chatdienst momenteel niet bereikbaar" },
        { status: 502 },
      );
    }
    const data = (await res.json().catch(() => ({}))) as { reply?: unknown };
    const reply = typeof data.reply === "string" ? data.reply : "";
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[chat] upstream-webhook onbereikbaar of timeout", err);
    return NextResponse.json(
      { error: "Chatdienst momenteel niet bereikbaar" },
      { status: 502 },
    );
  } finally {
    clearTimeout(timer);
  }
}
