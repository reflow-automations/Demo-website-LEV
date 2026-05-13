"use client";

/**
 * Scroll-driven storytelling alternative to StatBlock.tsx.
 * Each stat is dramatically revealed as you scroll — sticky layout
 * with cross-fading panels, plus count-up animation on activation.
 *
 * To revert to the grid version, change the import in app/page.tsx:
 *   import StatBlock from "@/components/home/StatBlock";
 * back to the storyline version:
 *   import StatBlock from "@/components/home/StatBlockStoryline";
 */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ChapterMark from "@/components/ChapterMark";

type StatMarker = "bar" | "arc" | "dots" | "wave";

interface Stat {
  label: string;
  detail: string;
  source: string;
  marker: StatMarker;
  // Numeric value for count-up animation
  value: number;
  /** Optional second value (for ranges like €4.500 — €7.000) */
  secondValue?: number;
  prefix?: string;
  suffix?: string;
  word?: string;
  thousands?: boolean;
  separator?: string;
}

const STATS: Stat[] = [
  {
    label: "Minimale besparing per behouden medewerker",
    detail:
      "Vervangingskosten bedragen 40% tot 200% van het bruto jaarsalaris. Bij modaal inkomen (€48.000) ligt de ondergrens al op €19.200 per medewerker.",
    source: "Gallup · Randstad",
    marker: "bar",
    value: 19200,
    prefix: "€",
    thousands: true,
  },
  {
    label: "Reductie aanbestedingskosten",
    detail:
      "Met onze digitale innovatie voor (Europees) aanbesteden kunnen interne kosten en doorlooptijden met de helft worden teruggebracht.",
    source: "DCF onderzoek",
    marker: "arc",
    value: 50,
    word: "tot",
    suffix: "%",
  },
  {
    label: "Verzuimkosten per medewerker per jaar",
    detail:
      "Gemiddelde kosten van ziekteverzuim in Nederland — exclusief de indirecte gevolgen voor productiviteit, teams en continuïteit.",
    source: "TNO · ArboNed",
    marker: "wave",
    value: 4500,
    secondValue: 7000,
    prefix: "€",
    thousands: true,
    separator: "—",
  },
  {
    label: "Bereik DOOH-netwerk per maand",
    detail:
      "Afhankelijk van locaties en campagne-opzet bereiken onze DOOH-schermen 250.000 tot 2 miljoen kandidaten per maand, vooral in de Randstad.",
    source: "DCF netwerk",
    marker: "dots",
    value: 2,
    suffix: " mln+",
  },
];

// Section height is set via Tailwind classes on the <section> below so we can
// give mobile (smaller viewport) more scroll-room than desktop:
//   mobile:  h-[540vh]   → ~110vh of scroll per panel
//   desktop: h-[320vh]   → ~55vh of scroll per panel
// To re-tune: edit the className on the <section>.

function MarkerBar() {
  return (
    <svg width="64" height="84" viewBox="0 0 48 64" aria-hidden>
      <rect x="0" y="40" width="8" height="24" fill="#2A82AC" />
      <rect x="14" y="24" width="8" height="40" fill="#2A82AC" opacity="0.7" />
      <rect x="28" y="8" width="8" height="56" fill="#2A82AC" opacity="0.45" />
    </svg>
  );
}
function MarkerArc() {
  return (
    <svg width="84" height="84" viewBox="0 0 64 64" aria-hidden>
      <circle cx="32" cy="32" r="26" stroke="#F6F0E5" strokeOpacity="0.15" strokeWidth="2" fill="none" />
      <path d="M32 6 A26 26 0 0 1 32 58" stroke="#2A82AC" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="32" y="36" textAnchor="middle" fontSize="9" fill="#F6F0E5" letterSpacing="1" className="font-mono">50%</text>
    </svg>
  );
}
function MarkerDots() {
  return (
    <svg width="96" height="64" viewBox="0 0 72 48" aria-hidden>
      <g fill="#2A82AC">
        <circle cx="6" cy="40" r="3" opacity="0.4" />
        <circle cx="18" cy="32" r="3" opacity="0.55" />
        <circle cx="30" cy="24" r="3" opacity="0.7" />
        <circle cx="42" cy="16" r="3" opacity="0.85" />
        <circle cx="54" cy="10" r="3.5" />
        <circle cx="66" cy="6" r="4" />
      </g>
    </svg>
  );
}
function MarkerWave() {
  return (
    <svg width="104" height="60" viewBox="0 0 80 44" aria-hidden>
      <path d="M0 36 Q10 36 14 24 T28 12 T42 6 T56 14 T70 30 T80 36" stroke="#2A82AC" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="42" cy="6" r="3" fill="#2A82AC" />
    </svg>
  );
}
function renderMarker(m: StatMarker) {
  return m === "bar" ? <MarkerBar /> : m === "arc" ? <MarkerArc /> : m === "dots" ? <MarkerDots /> : <MarkerWave />;
}

// Inline count-up that animates when `trigger` increments.
function useCountUp(target: number, trigger: number, duration = 650) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (trigger === 0) {
      setCurrent(0);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setCurrent(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, trigger, duration]);
  return current;
}

function StatValue({ stat, trigger }: { stat: Stat; trigger: number }) {
  const v1 = useCountUp(stat.value, trigger);
  const v2 = useCountUp(stat.secondValue ?? 0, trigger);

  const fmt = (n: number) => {
    const rounded = Math.round(n);
    return stat.thousands ? rounded.toLocaleString("nl-NL") : String(rounded);
  };

  return (
    <span>
      {stat.word ? `${stat.word} ` : ""}
      {stat.prefix ?? ""}
      {fmt(v1)}
      {stat.secondValue !== undefined && stat.separator
        ? ` ${stat.separator} ${stat.prefix ?? ""}${fmt(v2)}`
        : ""}
      {stat.suffix ?? ""}
    </span>
  );
}

export default function StatBlockStoryline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0); // 0..1 within section
  const [inView, setInView] = useState(false);
  // Trigger counter for each panel — increments when panel becomes active
  const [triggers, setTriggers] = useState<number[]>(() =>
    STATS.map(() => 0),
  );

  // Watch when the section actually enters the viewport, so the first
  // count-up doesn't fire before the user can see it.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const raw = -rect.top / total;
      const clamped = Math.max(0, Math.min(1, raw));
      setProgress(clamped);
      const idx = Math.min(STATS.length - 1, Math.floor(clamped * STATS.length));
      setActiveIdx(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When activeIdx changes (and section is in view), increment trigger.
  // This ensures the first panel's count-up fires when the user actually
  // scrolls into the section, not on initial page load.
  useEffect(() => {
    if (!inView) return;
    setTriggers((prev) => {
      const next = [...prev];
      next[activeIdx] = next[activeIdx] + 1;
      return next;
    });
  }, [activeIdx, inView]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-ink text-paper h-[540vh] lg:h-[320vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Grid backdrop */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
          <svg width="100%" height="100%" aria-hidden>
            <defs>
              <pattern id="story-grid" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M64 0H0V64" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#story-grid)" />
          </svg>
        </div>

        {/* Header — pinned top */}
        <div className="relative pt-16 lg:pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <ChapterMark
              number="03"
              label="De cijfers"
              className="text-paper/50 mb-6"
            />
            <h2 className="display-section text-[clamp(1.85rem,3.5vw,3rem)] text-paper">
              Innovatie die{" "}
              <em className="font-display italic font-light text-cobalt-bright">
                rekent
              </em>
              .
            </h2>
          </div>
        </div>

        {/* Stacked panels */}
        <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-20">
          <div className="mx-auto max-w-7xl w-full">
            {STATS.map((s, i) => {
              const isActive = i === activeIdx;
              return (
                <div
                  key={s.label}
                  className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-out"
                  style={{
                    opacity: isActive ? 1 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  aria-hidden={!isActive}
                >
                  <div className="mx-auto max-w-7xl w-full px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                      <div className="lg:col-span-8">
                        <div className="flex items-baseline gap-4 mb-6">
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/45">
                            {String(i + 1).padStart(2, "0")} / {String(STATS.length).padStart(2, "0")}
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/40">
                            {s.source}
                          </span>
                        </div>

                        <div className="flex items-end gap-6 mb-8">
                          <div
                            className="display-numeric text-paper leading-none"
                            style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
                          >
                            <StatValue stat={s} trigger={triggers[i]} />
                          </div>
                          <div className="shrink-0 pb-3">{renderMarker(s.marker)}</div>
                        </div>

                        <div className="text-paper text-[clamp(1rem,1.4vw,1.25rem)] font-medium tracking-tight mb-4 max-w-2xl">
                          {s.label}
                        </div>
                        <p className="text-paper/65 text-[15px] leading-[1.6] max-w-2xl">
                          {s.detail}
                        </p>
                      </div>

                      {/* Panel navigation rail */}
                      <div className="lg:col-span-3 lg:col-start-10 hidden lg:block">
                        <ol className="space-y-3">
                          {STATS.map((p, j) => (
                            <li key={p.label} className="flex items-center gap-3">
                              <span
                                className={`h-px transition-all duration-500 ${
                                  j === activeIdx ? "w-10 bg-cobalt-bright" : "w-4 bg-paper/20"
                                }`}
                              />
                              <span
                                className={`font-mono text-[10px] uppercase tracking-[0.14em] transition-colors ${
                                  j === activeIdx ? "text-paper" : "text-paper/40"
                                }`}
                              >
                                {String(j + 1).padStart(2, "0")} · {p.label.length > 30 ? p.label.slice(0, 28) + "…" : p.label}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom rail */}
        <div className="absolute bottom-0 inset-x-0 pb-8 pt-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <div className="flex items-center justify-between gap-6">
              <div className="flex-1 h-px bg-paper/15 relative">
                <div
                  className="absolute left-0 top-0 h-px bg-cobalt-bright transition-[width] duration-200"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
              <Link
                href="/talent-behouden"
                className="group inline-flex items-center gap-3 text-[13px] tracking-tight text-paper hover:text-cobalt-bright transition-colors shrink-0"
              >
                <span className="link-underline">Bereken uw besparingspotentieel</span>
                <svg width="14" height="14" viewBox="0 0 14 14" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="square" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
