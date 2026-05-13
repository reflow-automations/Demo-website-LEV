"use client";

import { useMemo, useState } from "react";

type Functietype = "frontline" | "professional" | "manager";

const FUNCTIE_OPTIONS: { value: Functietype; label: string; pct: number; hint: string }[] = [
  { value: "frontline", label: "Frontline", pct: 0.4, hint: "40% vuistregel" },
  { value: "professional", label: "Professional", pct: 0.8, hint: "80% vuistregel" },
  { value: "manager", label: "Manager / leider", pct: 2.0, hint: "tot 200%" },
];

const fmtEUR = (n: number) =>
  "€ " +
  Math.round(n).toLocaleString("nl-NL", { maximumFractionDigits: 0 });

export default function Calculator() {
  const [salary, setSalary] = useState(48000);
  const [functie, setFunctie] = useState<Functietype>("professional");
  const [vertrekkers, setVertrekkers] = useState(5);

  const pct = useMemo(
    () => FUNCTIE_OPTIONS.find((o) => o.value === functie)?.pct ?? 0.8,
    [functie],
  );

  const perPersoon = salary * pct;
  const totaalKosten = perPersoon * vertrekkers;
  const besparing50 = totaalKosten * 0.5;

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
      {/* LEFT, controls */}
      <div className="lg:col-span-7">
        {/* Salaris slider */}
        <div className="mb-10">
          <div className="flex items-baseline justify-between mb-4">
            <label
              htmlFor="salary"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
            >
              <span className="text-cobalt mr-2">01</span>
              Bruto jaarsalaris
            </label>
            <span className="display-numeric text-ink text-[1.5rem]">
              {fmtEUR(salary)}
            </span>
          </div>
          <input
            id="salary"
            type="range"
            min={30000}
            max={150000}
            step={1000}
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="w-full accent-cobalt"
          />
          <div className="flex justify-between mt-2 text-[10px] font-mono uppercase tracking-[0.14em] text-muted">
            <span>€ 30K</span>
            <span>€ 48K modaal</span>
            <span>€ 150K</span>
          </div>
        </div>

        {/* Functietype */}
        <div className="mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-4">
            <span className="text-cobalt mr-2">02</span>
            Type functie
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {FUNCTIE_OPTIONS.map((o) => {
              const active = functie === o.value;
              return (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => setFunctie(o.value)}
                  className={`text-left p-4 border transition-colors duration-200 ${
                    active
                      ? "border-cobalt bg-cobalt/[0.06]"
                      : "border-mist hover:border-ink/30"
                  }`}
                >
                  <div
                    className={`text-[14px] font-medium tracking-tight mb-1 ${
                      active ? "text-cobalt" : "text-ink"
                    }`}
                  >
                    {o.label}
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-muted">
                    {o.hint}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Vertrekkers */}
        <div className="mb-10">
          <div className="flex items-baseline justify-between mb-4">
            <label
              htmlFor="vertrekkers"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
            >
              <span className="text-cobalt mr-2">03</span>
              Vrijwillige vertrekkers per jaar
            </label>
            <span className="display-numeric text-ink text-[1.5rem]">
              {vertrekkers}
            </span>
          </div>
          <input
            id="vertrekkers"
            type="range"
            min={1}
            max={50}
            step={1}
            value={vertrekkers}
            onChange={(e) => setVertrekkers(Number(e.target.value))}
            className="w-full accent-cobalt"
          />
          <div className="flex justify-between mt-2 text-[10px] font-mono uppercase tracking-[0.14em] text-muted">
            <span>1</span>
            <span>25</span>
            <span>50</span>
          </div>
        </div>

        <p className="text-[11px] text-muted leading-[1.5] max-w-md">
          Vuistregels van <strong>Gallup</strong>: 40% bij frontline-rollen, 80%
          bij professionele functies en tot 200% bij leiders/managers.
        </p>
      </div>

      {/* RIGHT, output */}
      <div className="lg:col-span-5 bg-ink text-paper p-8 lg:p-10 flex flex-col justify-between rounded-3xl shadow-[0_28px_60px_-20px_rgba(45,31,20,0.32)]">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/45 mb-3">
            Per vertrekkende medewerker
          </p>
          <div className="display-numeric text-paper text-[clamp(2rem,4vw,3.25rem)] mb-1 leading-none">
            {fmtEUR(perPersoon)}
          </div>
          <p className="text-paper/65 text-[12px] leading-[1.5] mb-10">
            vervangingskosten, {Math.round(pct * 100)}% van {fmtEUR(salary)}
          </p>

          <div className="h-px bg-paper/15 mb-8" />

          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/45 mb-3">
            Totaal per jaar, uw situatie
          </p>
          <div className="display-numeric text-paper text-[clamp(2.5rem,5vw,4rem)] mb-1 leading-none">
            {fmtEUR(totaalKosten)}
          </div>
          <p className="text-paper/65 text-[12px] leading-[1.5]">
            {vertrekkers} medewerker{vertrekkers === 1 ? "" : "s"} × {fmtEUR(perPersoon)}
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-cobalt/30">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cobalt-bright mb-3">
            Besparingspotentieel met DCF
          </p>
          <div className="display-numeric text-cobalt-bright text-[clamp(2rem,4vw,3.25rem)] mb-2 leading-none">
            {fmtEUR(besparing50)}
          </div>
          <p className="text-paper/65 text-[12px] leading-[1.5]">
            Bij voorkomen van 50% van vrijwillig vertrek
          </p>
        </div>
      </div>

      {/* Slider track styling, minimal browser override */}
      <style jsx>{`
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          background: var(--mist);
          border-radius: 999px;
          outline: none;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--cobalt);
          cursor: grab;
          box-shadow: 0 0 0 4px rgba(21, 95, 125, 0.15);
          transition: transform 150ms;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        input[type="range"]::-webkit-slider-thumb:active {
          cursor: grabbing;
          transform: scale(1.15);
        }
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border: none;
          border-radius: 50%;
          background: var(--cobalt);
          cursor: grab;
          box-shadow: 0 0 0 4px rgba(21, 95, 125, 0.15);
        }
      `}</style>
    </div>
  );
}
