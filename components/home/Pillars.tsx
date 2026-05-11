import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";

const PILLARS = [
  {
    no: "01",
    title: "Talent aantrekken",
    summary:
      "Werkgevers op het netvlies van talent — online én offline zichtbaar via DOOH-netwerken en slimme retargeting.",
    bullets: ["Employer Branding", "DOOH-campagnes", "Retargeting"],
    href: "/talent-aantrekken",
  },
  {
    no: "02",
    title: "Talent behouden",
    summary:
      "Persoonlijke arbeidsvoorwaarden binnen heldere kaders. Minder verloop, lagere vervangingskosten, sterkere binding.",
    bullets: ["Maatwerk arbeidsvoorwaarden", "€19.200 besparing p/p", "Schaalbaar"],
    href: "/talent-behouden",
  },
  {
    no: "03",
    title: "Ziekteverzuim",
    summary:
      "Een betaalbare digitale oplossing die medewerkers gemotiveerd houdt — gerichter, lichter en direct uitvoerbaar.",
    bullets: ["Kortdurend verzuim", "€4.500 — €7.000 p/p p/j", "Direct toepasbaar"],
    href: "/ziekteverzuim",
  },
  {
    no: "04",
    title: "Inkoop",
    summary:
      "Aanbestedingen en contractmanagement overzichtelijker, transparanter en goedkoper — tot 50% kostenreductie.",
    bullets: ["(Europees) aanbesteden", "Contractmanagement", "Tot 50% besparing"],
    href: "/inkoop",
  },
  {
    no: "05",
    title: "Marketing",
    summary:
      "Geen campagnes voor zichtbaarheid alleen, maar concepten die online en offline samenbrengen voor maximale impact.",
    bullets: ["Onderscheidende concepten", "Online + offline", "Resultaatgericht"],
    href: "/marketing",
  },
];

export default function Pillars() {
  return (
    <section id="innovaties" className="relative py-24 lg:py-32 bg-paper-deep">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6">
            <Reveal>
              <ChapterMark
                number="02"
                label="Onze innovaties"
                className="text-muted mb-8"
              />
              <h2 className="display-section text-[clamp(2rem,4vw,3.25rem)] text-ink">
                Vijf domeinen, één{" "}
                <em className="font-display italic font-light text-cobalt">
                  vaste belofte
                </em>
                .
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <Reveal delay={120}>
              <p className="text-text text-[16px] leading-[1.6]">
                Innovaties die organisaties praktisch helpen — geen losse tools
                of tijdelijke oplossingen, maar digitale verbeteringen met
                duurzame impact op groei, continuïteit en rendement.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 5 cards: row 1 = 3 cards, row 2 = 2 cards (centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-px bg-mist">
          {PILLARS.map((p, i) => {
            // Row 1: cards 1, 2, 3 → col-span-2 of 6 (each takes 2/6)
            // Row 2: cards 4, 5 → col-span-3 of 6 (each takes 3/6, but shifted to center)
            const isRow1 = i < 3;
            return (
              <Reveal
                key={p.no}
                delay={i * 70}
                className={`${
                  isRow1 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
              >
                <Link
                  href={p.href}
                  className="group relative block h-full p-10 lg:p-11 bg-paper hover:bg-paper-deep transition-colors duration-300"
                >
                  <div className="flex items-start justify-between mb-12">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt">
                      {p.no}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Lees meer →
                    </span>
                  </div>

                  <h3 className="display-section text-[clamp(1.5rem,1.9vw,1.85rem)] text-ink mb-4">
                    {p.title}
                  </h3>

                  <p className="text-text/80 text-[15px] leading-[1.55] mb-8">
                    {p.summary}
                  </p>

                  <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-cobalt" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
