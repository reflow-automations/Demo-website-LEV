import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";

const STATS = [
  {
    label: "Minimale besparing per behouden medewerker",
    value: "€19.200",
    detail:
      "Vervangingskosten bedragen 40% tot 200% van het bruto jaarsalaris. Bij modaal inkomen (€48.000) ligt de ondergrens al op €19.200 per medewerker.",
    source: "Gallup · Randstad",
  },
  {
    label: "Reductie aanbestedingskosten",
    value: "tot 50%",
    detail:
      "Met onze digitale innovatie voor (Europees) aanbesteden kunnen interne kosten en doorlooptijden met de helft worden teruggebracht.",
    source: "DCF onderzoek",
  },
  {
    label: "Verzuimkosten per medewerker per jaar",
    value: "€4.500 — €7.000",
    detail:
      "Gemiddelde kosten van ziekteverzuim in Nederland — exclusief de indirecte gevolgen voor productiviteit, teams en continuïteit.",
    source: "TNO · ArboNed",
  },
  {
    label: "Bereik DOOH-netwerk per maand",
    value: "2 mln+",
    detail:
      "Afhankelijk van locaties en campagne-opzet bereiken onze DOOH-schermen 250.000 tot 2 miljoen kandidaten per maand, vooral in de Randstad.",
    source: "DCF netwerk",
  },
];

export default function StatBlock() {
  return (
    <section className="relative py-28 lg:py-36 bg-ink text-paper overflow-hidden">
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
        <svg width="100%" height="100%" aria-hidden>
          <defs>
            <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M64 0H0V64" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-7">
            <Reveal>
              <ChapterMark
                number="03"
                label="De cijfers"
                className="text-paper/50 mb-8"
              />
              <h2 className="display-section text-[clamp(2rem,4vw,3.25rem)] text-paper">
                Innovatie die{" "}
                <em className="font-display italic font-light text-cobalt-bright">
                  rekent
                </em>
                .
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <Reveal delay={120}>
              <p className="text-paper/70 text-[16px] leading-[1.6] max-w-md">
                Strategisch HR, slimme inkoop en onderscheidende marketing
                drukken direct door in groei, continuïteit en rendement.
                Een aantal cijfers ter onderbouwing.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="bg-ink p-10 lg:p-12 h-full flex flex-col group hover:bg-antraciet transition-colors duration-300">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/40">
                    {s.source}
                  </span>
                </div>

                <div className="display-numeric text-paper text-[clamp(2.5rem,6vw,5rem)] mb-6">
                  {s.value}
                </div>

                <div className="text-paper text-[14px] font-medium tracking-tight mb-3">
                  {s.label}
                </div>

                <p className="text-paper/60 text-[14px] leading-[1.55] max-w-md">
                  {s.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
