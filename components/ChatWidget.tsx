"use client";

/**
 * ChatWidget — zwevend chat-bolletje rechtsonder. Stuurt { message, sessionId }
 * naar de eigen /api/chat proxy (niet meer rechtstreeks naar n8n) en toont de
 * { reply }. De proxy doet origin-check, rate-limit en timeout, en houdt de
 * n8n-webhook-URL server-side. Bewaart een sessionId per bezoeker in
 * localStorage zodat de bot vervolgvragen begrijpt. Tweetalig via usePick.
 */

import { useEffect, useRef, useState } from "react";
import { usePick } from "@/lib/i18n/provider";

const CHAT_ENDPOINT = "/api/chat";

const SESSION_STORAGE_KEY = "dcf-chat-session";

type Msg = { role: "user" | "bot"; text: string };

function newSessionId(): string {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  } catch {
    // ignore
  }
  return `s-${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const sessionId = useRef<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const t = usePick({
    nl: {
      label: "Chat met ons",
      title: "DCF Assistent",
      subtitle: "Vragen over onze innovaties? Stel ze gerust.",
      greeting:
        "Hallo, ik help u graag met vragen over Digital Concepts Factory en onze innovaties in HR, Inkoop en Marketing. Waar kan ik u mee helpen?",
      placeholder: "Typ uw vraag…",
      send: "Versturen",
      error: "Er ging iets mis. Probeer het opnieuw of mail naar info@digitalconceptsfactory.nl.",
      close: "Sluiten",
    },
    en: {
      label: "Chat with us",
      title: "DCF Assistant",
      subtitle: "Questions about our innovations? Just ask.",
      greeting:
        "Hi, I'm happy to help with questions about Digital Concepts Factory and our innovations in HR, Procurement and Marketing. What can I help you with?",
      placeholder: "Type your question…",
      send: "Send",
      error: "Something went wrong. Please try again or email info@digitalconceptsfactory.nl.",
      close: "Close",
    },
  });

  useEffect(() => {
    try {
      let s = localStorage.getItem(SESSION_STORAGE_KEY);
      if (!s) {
        s = newSessionId();
        localStorage.setItem(SESSION_STORAGE_KEY, s);
      }
      sessionId.current = s;
    } catch {
      sessionId.current = newSessionId();
    }
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId: sessionId.current }),
      });
      const data = await res.json().catch(() => ({}));
      const reply =
        res.ok && typeof data?.reply === "string" && data.reply
          ? data.reply
          : t.error;
      setMessages((m) => [...m, { role: "bot", text: reply }]);
    } catch {
      setMessages((m) => [...m, { role: "bot", text: t.error }]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end">
      {open && (
        <div
          role="dialog"
          aria-label={t.title}
          className="mb-3 w-[360px] max-w-[calc(100vw-2.5rem)] h-[520px] max-h-[calc(100vh-7.5rem)] bg-paper border border-mist rounded-2xl shadow-[0_20px_60px_-15px_rgba(45,31,20,0.4)] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-ink text-paper px-5 py-4 flex items-start justify-between gap-3 shrink-0">
            <div>
              <p className="font-sans text-[14px] font-medium tracking-tight">{t.title}</p>
              <p className="text-paper/60 text-[12px] leading-snug mt-0.5">{t.subtitle}</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label={t.close}
              className="p-1 -mr-1 -mt-1 text-paper/70 hover:text-paper transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            <div className="bg-paper-deep text-text rounded-2xl rounded-tl-sm px-4 py-2.5 text-[14px] leading-[1.55] max-w-[88%] whitespace-pre-wrap">
              {t.greeting}
            </div>
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "bg-cobalt text-paper rounded-2xl rounded-tr-sm px-4 py-2.5 text-[14px] leading-[1.55] max-w-[88%] ml-auto whitespace-pre-wrap"
                    : "bg-paper-deep text-text rounded-2xl rounded-tl-sm px-4 py-2.5 text-[14px] leading-[1.55] max-w-[88%] whitespace-pre-wrap"
                }
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="bg-paper-deep rounded-2xl rounded-tl-sm px-4 py-3 max-w-[60%] flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" />
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-mist p-3 flex items-end gap-2 shrink-0 bg-paper">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
              placeholder={t.placeholder}
              className="flex-1 resize-none max-h-28 bg-paper-deep text-text text-[14px] rounded-xl px-3.5 py-2.5 outline-none focus:ring-2 focus:ring-cobalt/40 placeholder:text-muted"
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              aria-label={t.send}
              className="shrink-0 w-10 h-10 rounded-full bg-cobalt text-paper flex items-center justify-center hover:bg-cobalt-bright disabled:opacity-40 disabled:hover:bg-cobalt transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
                <path d="M2 9h12M9 4l5 5-5 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle bubble */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t.label}
        aria-expanded={open}
        className="w-14 h-14 rounded-full bg-cobalt text-paper shadow-[0_10px_30px_-8px_rgba(21,95,125,0.7)] flex items-center justify-center hover:bg-cobalt-bright transition-colors"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
            <path d="M6 6l10 10M16 6L6 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
            <path
              d="M4 5.5A1.5 1.5 0 015.5 4h13A1.5 1.5 0 0120 5.5v9a1.5 1.5 0 01-1.5 1.5H9l-4 3.5V16H5.5A1.5 1.5 0 014 14.5v-9z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
