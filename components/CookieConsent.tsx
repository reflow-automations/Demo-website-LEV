"use client";

/**
 * CookieConsent — AVG/GDPR-conforme cookiebanner + GA4-loader.
 *
 * Gedrag:
 *  - Google Analytics (gtag.js, G-FNBVMVJ5PB) wordt NIET geladen tot de
 *    bezoeker expliciet op "Accepteren" klikt. Weigeren laadt niks.
 *  - De keuze wordt opgeslagen in localStorage; bij een volgende bezoek
 *    laadt analytics automatisch (accepted) of blijft het uit (rejected).
 *  - Alleen actief op het echte domein, zodat demo/preview/localhost geen
 *    verkeer naar GA sturen.
 *  - `openCookieSettings()` reset de keuze en toont de banner opnieuw,
 *    aangeroepen vanuit de "Cookievoorkeuren"-link in de footer.
 */

import { useEffect, useState } from "react";
import { usePick } from "@/lib/i18n/provider";

const GA_ID = "G-FNBVMVJ5PB";
const STORAGE_KEY = "dcf-cookie-consent";

function isCanonicalHost(): boolean {
  if (typeof window === "undefined") return false;
  return /(^|\.)digitalconceptsfactory\.nl$/.test(window.location.hostname);
}

function loadGA() {
  if (typeof window === "undefined") return;
  if (document.getElementById("ga-src")) return; // al geladen

  const src = document.createElement("script");
  src.id = "ga-src";
  src.async = true;
  src.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(src);

  // Exacte Google-snippet als string, zodat gtag precies werkt zoals bedoeld.
  const init = document.createElement("script");
  init.id = "ga-init";
  init.textContent =
    `window.dataLayer = window.dataLayer || [];` +
    `function gtag(){dataLayer.push(arguments);}` +
    `gtag('js', new Date());` +
    `gtag('config', '${GA_ID}');`;
  document.head.appendChild(init);
}

/** Reset de cookiekeuze en toon de banner opnieuw (footer-link). */
export function openCookieSettings() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore (private mode)
  }
  window.location.reload();
}

const copy = {
  nl: {
    text: "We gebruiken alleen analytische cookies om de website te verbeteren. Die plaatsen we pas nadat u akkoord geeft. Weigeren kan ook.",
    accept: "Accepteren",
    reject: "Weigeren",
  },
  en: {
    text: "We only use analytics cookies to improve the website. We place them only after you agree. You can also decline.",
    accept: "Accept",
    reject: "Decline",
  },
};

export default function CookieConsent() {
  const t = usePick(copy);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isCanonicalHost()) return; // geen banner/GA op demo/preview/localhost

    let choice: string | null = null;
    try {
      choice = localStorage.getItem(STORAGE_KEY);
    } catch {
      // ignore
    }

    if (choice === "accepted") {
      loadGA();
    } else if (choice !== "rejected") {
      setShow(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // ignore
    }
    loadGA();
    setShow(false);
  };

  const reject = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "rejected");
    } catch {
      // ignore
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookies"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-3xl bg-ink text-paper rounded-2xl shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5">
        <p className="flex-1 text-[13px] leading-[1.6] text-paper/85">
          {t.text}
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={reject}
            className="px-5 py-2.5 text-[13px] rounded-full border border-paper/30 text-paper hover:bg-paper/10 transition-colors"
          >
            {t.reject}
          </button>
          <button
            type="button"
            onClick={accept}
            className="px-5 py-2.5 text-[13px] rounded-full bg-cobalt text-paper hover:bg-cobalt-bright transition-colors"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
