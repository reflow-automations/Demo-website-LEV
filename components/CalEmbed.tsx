"use client";

/**
 * Cal.com booking embed — placeholder skeleton.
 *
 * ─────────────────────────────────────────────────────────────────────
 * WHEN THE REAL EMBED ARRIVES FROM CAL.COM:
 *
 * 1. Replace the contents of `loadCalEmbed()` below with the cal.com
 *    "init + inline" snippet they give you. It looks something like:
 *
 *      (function (C, A, L) { ... })(window, "https://app.cal.com/embed/embed.js", "init");
 *      Cal("init", "30min", { origin: "https://cal.com" });
 *      Cal.ns["30min"]("inline", {
 *        elementOrSelector: "#cal-inline",
 *        config: { layout: "month_view" },
 *      });
 *
 * 2. Make sure the target div keeps `id="cal-inline"` (or update the
 *    selector). Also keep `minHeight` so the page doesn't jump when
 *    cal.com renders.
 *
 * 3. If they give you an EMBED-CODE component instead (React/iframe),
 *    drop it in place of the `<div id="cal-inline" />` below.
 *
 * Until the real snippet arrives, this shows a friendly "embed komt
 * hier" placeholder so the layout/spacing is already finalized.
 * ─────────────────────────────────────────────────────────────────────
 */

import { useEffect, useState } from "react";

const CAL_PLACEHOLDER = true; // ← set to false once loadCalEmbed() has real code

function loadCalEmbed() {
  // TODO: paste cal.com init snippet here when received from Lev.
  // Example shape (do not enable until real script arrives):
  //
  //   (function (C, A, L) {
  //     let p = function (a, ar) { a.q.push(ar); };
  //     let d = C.document; C.Cal = C.Cal || function () {
  //       let cal = C.Cal, ar = arguments;
  //       if (!cal.loaded) {
  //         cal.ns = {}; cal.q = cal.q || [];
  //         d.head.appendChild(d.createElement("script")).src = A;
  //         cal.loaded = true;
  //       }
  //       if (ar[0] === L) { /* namespaced */ ... }
  //       else { p(cal, ar); }
  //     };
  //   })(window, "https://app.cal.com/embed/embed.js", "init");
  //
  //   (window as any).Cal("init", "30min", { origin: "https://cal.com" });
  //   (window as any).Cal.ns["30min"]("inline", {
  //     elementOrSelector: "#cal-inline",
  //     config: { layout: "month_view" },
  //   });
}

export default function CalEmbed() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (CAL_PLACEHOLDER) return;
    loadCalEmbed();
    setLoaded(true);
  }, []);

  return (
    <div className="relative w-full">
      <div
        id="cal-inline"
        className="w-full bg-paper-deep border border-mist rounded-3xl overflow-hidden"
        style={{ minHeight: 620 }}
      >
        {/* Placeholder content — visible until real cal.com embed initialises */}
        {CAL_PLACEHOLDER && (
          <div className="flex flex-col items-center justify-center h-[620px] text-center px-8">
            {/* Decorative calendar SVG */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="mb-6 text-cobalt"
              aria-hidden
            >
              <rect
                x="6"
                y="10"
                width="36"
                height="32"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line x1="6" y1="20" x2="42" y2="20" stroke="currentColor" strokeWidth="1.5" />
              <line x1="16" y1="6" x2="16" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="24" cy="30" r="2" fill="currentColor" />
            </svg>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt mb-3">
              Plan direct een gesprek
            </p>
            <h3 className="display-section text-[clamp(1.5rem,2vw,1.85rem)] text-ink mb-4 max-w-md">
              Onze agenda staat hier — kies een moment dat u uitkomt.
            </h3>
            <p className="text-text/70 text-[14px] leading-[1.6] max-w-md">
              Reserveer een vrijblijvend kennismakingsgesprek van 30 minuten.
              Wij nemen u mee door onze aanpak en kijken samen of er een match
              is.
            </p>
          </div>
        )}
      </div>
      {!CAL_PLACEHOLDER && !loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-muted text-[12px]">
          Agenda wordt geladen…
        </div>
      )}
    </div>
  );
}
