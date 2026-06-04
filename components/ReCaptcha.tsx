"use client";

/**
 * Google reCAPTCHA v2 (checkbox) — drop-in component.
 *
 * ─────────────────────────────────────────────────────────────────────
 * NU IN TEST-MODUS: gebruikt Google's officiële test-keys, die altijd
 * een geldig token retourneren en een gele "for testing only"-banner
 * tonen. Het is de échte Google-widget, alleen niet productie-secure.
 *
 * NAAR PRODUCTIE — zodra Lev / DCF de keys aanvraagt:
 *
 * 1. Ga naar https://www.google.com/recaptcha/admin/create
 *    - Type:    reCAPTCHA v2 → "Ik ben geen robot" Checkbox
 *    - Label:   Digital Concepts Factory
 *    - Domeinen: digitalconceptsfactory.nl, dcf-demo.vercel.app
 *    - Accept Terms of Service → Submit
 *    Je krijgt twee sleutels: SITE KEY (publiek) en SECRET KEY (server)
 *
 * 2. Voeg in Vercel toe (Project → Settings → Environment Variables):
 *    - NEXT_PUBLIC_RECAPTCHA_SITE_KEY = <publieke site key>
 *    - RECAPTCHA_SECRET_KEY            = <server-only secret>
 *    Beide environments: Production + Preview + Development
 *
 * 3. Trigger een redeploy. Klaar.
 *
 * 4. Verwijder eventueel de TEST_SITE_KEY-fallback hieronder voor extra
 *    duidelijkheid in de code.
 * ─────────────────────────────────────────────────────────────────────
 */

import Script from "next/script";
import { useEffect, useRef } from "react";

// Google's officiële test-keys (always-pass, toont "for testing only"-banner)
// Zie: https://developers.google.com/recaptcha/docs/faq#id-like-to-run-automated-tests-with-recaptcha
const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() || TEST_SITE_KEY;

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

  useEffect(() => {
    const w = window as GrecaptchaWindow;
    const renderWidget = () => {
      if (
        w.grecaptcha?.render &&
        containerRef.current &&
        widgetId.current === null
      ) {
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
      w.onRecaptchaLoad = renderWidget;
    }
  }, [onToken]);

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
