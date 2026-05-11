"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SLOGANS = [
  ["Grip op groei", "begint met digitale", "innovatie."],
  ["HR, Inkoop en Marketing", "versterken met", "digitale innovatie."],
  ["Meer rendement uit", "HR, Inkoop en", "Marketing."],
  ["Innovatie die blijft werken,", "ook op de", "lange termijn."],
];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % SLOGANS.length);
    }, 5800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative pt-20 pb-32 lg:pt-28 lg:pb-40 overflow-hidden">
      {/* Background editorial frame */}
      <div className="absolute inset-x-0 top-0 h-px bg-mist" aria-hidden />
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cobalt/30 to-transparent"
        aria-hidden
      />

      {/* Decorative side rail */}
      <div className="absolute left-6 top-32 hidden lg:flex flex-col gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
        <span>— Vol. 01</span>
        <div className="w-px h-24 bg-mist ml-1" />
        <span>2026</span>
      </div>
      <div className="absolute right-6 top-32 hidden lg:flex flex-col gap-3 items-end font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
        <span>Rotterdam — NL</span>
        <div className="w-px h-24 bg-mist mr-1" />
        <span>Est. 2018</span>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-12 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          <span className="w-12 h-px bg-cobalt" />
          <span>Digitale innovatie</span>
          <span className="opacity-40">/</span>
          <span>HR · Inkoop · Marketing</span>
        </div>

        {/* Rotating display headline */}
        <h1
          key={idx}
          className="display-hero text-ink mb-12 text-[clamp(2.75rem,8.5vw,8.5rem)] max-w-[18ch]"
          style={{ animation: "fadeUp 1100ms cubic-bezier(0.16,1,0.3,1)" }}
        >
          {SLOGANS[idx].map((line, i) => (
            <span key={i} className="block">
              {line.includes("digitale") || line.includes("innovatie") ? (
                <em className="italic font-light text-cobalt">{line}</em>
              ) : (
                line
              )}
            </span>
          ))}
        </h1>

        {/* Slogan dots */}
        <div className="flex items-center gap-3 mb-16">
          {SLOGANS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-px transition-all duration-700 ${
                i === idx ? "w-12 bg-ink" : "w-6 bg-mist"
              }`}
              aria-label={`Slogan ${i + 1}`}
            />
          ))}
          <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            {String(idx + 1).padStart(2, "0")} / {String(SLOGANS.length).padStart(2, "0")}
          </span>
        </div>

        {/* Lead paragraph + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 lg:col-start-1">
            <p className="text-charcoal text-[17px] lg:text-[19px] leading-[1.55] max-w-2xl">
              Digital Concepts Factory ontwikkelt innovatieve technologie waarmee
              organisaties hun grootste uitdagingen doelgericht aanpakken — van
              talent vinden en behouden tot inkoop slimmer organiseren en
              marketing onderscheidend inzetten.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-4 lg:justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-ink text-paper text-[13px] tracking-tight hover:bg-cobalt transition-colors duration-500"
            >
              <span>Plan een vrijblijvend gesprek</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                className="transition-transform duration-500 group-hover:translate-x-1"
                aria-hidden
              >
                <path
                  d="M1 7h12M8 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  fill="none"
                  strokeLinecap="square"
                />
              </svg>
            </Link>
            <Link
              href="#innovaties"
              className="inline-flex items-center gap-3 px-7 py-4 border border-ink/15 text-ink text-[13px] tracking-tight hover:bg-ink hover:text-paper transition-colors duration-500"
            >
              Bekijk innovaties
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
