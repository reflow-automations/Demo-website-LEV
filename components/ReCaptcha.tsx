"use client";

/**
 * Google reCAPTCHA v2 (checkbox) — drop-in component.
 *
 * ─────────────────────────────────────────────────────────────────────
 * TO ENABLE (zodra Lev de keys stuurt):
 *
 * 1. Maak een reCAPTCHA-site aan op https://www.google.com/recaptcha/admin
 *    Kies type "reCAPTCHA v2 — 'Ik ben geen robot' checkbox"
 *    Domein: digitalconceptsfactory.nl (+ vercel.app voor preview)
 *
 * 2. Voeg in Vercel (Project → Settings → Environment Variables) toe:
 *    - NEXT_PUBLIC_RECAPTCHA_SITE_KEY = <publieke site key>
 *    - RECAPTCHA_SECRET_KEY            = <server-only secret>
 *
 *    Lokaal in .env.local hetzelfde patroon.
 *    LET OP: alleen NEXT_PUBLIC_*-vars zijn zichtbaar in de browser.
 *    De secret blijft server-side voor /api/verify-recaptcha.
 *
 * 3. Bij redeploy detecteert dit component automatisch de site-key
 *    en wisselt van placeholder-modus naar echte widget.
 *
 * 4. Voor server-side verificatie: zie /api/contact/route.ts (nog te
 *    bouwen wanneer er een echte mail-handler komt). De flow:
 *      - browser krijgt token via deze widget
 *      - form-submit POST naar /api/contact met token in body
 *      - server roept https://www.google.com/recaptcha/api/siteverify
 *        aan met RECAPTCHA_SECRET_KEY + token
 *      - bij OK: verstuur mail / sla bericht op
 *      - bij FAIL: retourneer 400
 * ─────────────────────────────────────────────────────────────────────
 */

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
const PLACEHOLDER_MODE = !SITE_KEY;

type GrecaptchaWindow = Window & {
  grecaptcha?: {
    render: (
      el: HTMLElement,
      config: {
        sitekey: string;
        callback: (token: string) => void;
        "expired-callback"?: () => void;
        theme?: "light" | "dark";
      },
    ) => number;
    reset: (id?: number) => void;
  };
  onRecaptchaLoad?: () => void;
};

interface ReCaptchaProps {
  onToken: (token: string | null) => void;
  className?: string;
}

export default function ReCaptcha({ onToken, className = "" }: ReCaptchaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);
  const [checked, setChecked] = useState(false); // for placeholder UX

  useEffect(() => {
    if (PLACEHOLDER_MODE) return;

    const w = window as GrecaptchaWindow;
    const renderWidget = () => {
      if (w.grecaptcha?.render && containerRef.current && widgetId.current === null) {
        widgetId.current = w.grecaptcha.render(containerRef.current, {
          sitekey: SITE_KEY,
          callback: (token: string) => onToken(token),
          "expired-callback": () => onToken(null),
          theme: "light",
        });
      }
    };

    if (w.grecaptcha?.render) {
      renderWidget();
    } else {
      // Script will call this when loaded
      w.onRecaptchaLoad = renderWidget;
    }
  }, [onToken]);

  if (PLACEHOLDER_MODE) {
    // Visual placeholder while real keys are not yet configured.
    // Toggles a "valid" token so the form is usable for the demo.
    return (
      <div
        className={`border border-mist bg-paper-deep px-4 py-3.5 flex items-center gap-3 max-w-xs cursor-pointer transition-colors hover:border-ink/30 ${className}`}
        onClick={() => {
          const next = !checked;
          setChecked(next);
          onToken(next ? "DEMO-TOKEN-PLACEHOLDER" : null);
        }}
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            const next = !checked;
            setChecked(next);
            onToken(next ? "DEMO-TOKEN-PLACEHOLDER" : null);
          }
        }}
      >
        <div
          className={`w-6 h-6 border-2 rounded-sm flex items-center justify-center shrink-0 transition-colors ${
            checked ? "border-cobalt bg-cobalt" : "border-mist bg-paper"
          }`}
        >
          {checked && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="text-paper"
              aria-hidden
            >
              <path
                d="M3 8l3.5 3.5L13 4"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <div className="flex-1">
          <p className="text-[14px] text-text font-medium leading-tight">
            Ik ben geen robot
          </p>
          <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-muted mt-1">
            reCAPTCHA · placeholder
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
        strategy="afterInteractive"
      />
      <div ref={containerRef} />
    </div>
  );
}
