import Link from "next/link";
import ChapterMark from "@/components/ChapterMark";
import Reveal from "@/components/Reveal";

const PILLARS = [
  {
    no: "01",
    title: "Talent aantrekken",
    summary:
      "Werkgevers op het netvlies van talent — online én offline zichtbaar via DOOH-netwerken en slimme retargeting.",
    bullets: [
      "Employer Branding",
      "DOOH-campagnes",
      "Retargeting",
    ],
    href: "/talent-aantrekken",
  },
  {
    no: "02",
    title: "Talent behouden",
    summary:
      "Persoonlijke arbeidsvoorwaarden binnen heldere kaders. Minder verloop, lagere vervangingskosten, sterkere binding.",
    bullets: [
      "Maatwerk arbeidsvoorwaarden",
      "€19.200 besparing p/p",
      "Schaalbaar & beheersbaar",
    ],
    href: "/talent-behouden",
    featured: true,
  },
  {
    no: "03",
    title: "Ziekteverzuim terugdringen",
    summary:
      "Een betaalbare digitale oplossing die medewerkers gemotiveerd houdt — gerichter, lichter en uitvoerbaar voor elke organisatie.",
    bullets: [
      "Kortdurend verzuim",
      "€4.500 — €7.000 p/p p/j",
      "Direct toepasbaar",
    ],
    href: "/ziekteverzuim",
  },
  {
    no: "04",
    title: "Inkoop",
    summary:
      "Aanbestedingen en contractmanagement overzichtelijker, transparanter en goedkoper — tot 50% kostenreductie.",
    bullets: [
      "(Europees) aanbesteden",
      "Contractmanagement",
      "Tot 50% besparing",
    ],
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <ChapterMark
                number="II"
                label="Onze innovaties"
                className="text-muted mb-8"
              />
              <h2 className="display-hero text-[clamp(2rem,4.5vw,3.75rem)] text-ink">
                Vijf domeinen, één{" "}
                <em className="italic font-light text-cobalt">
                  vaste belofte
                </em>
                .
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <Reveal delay={150}>
              <p className="text-charcoal text-[16px] lg:text-[18px] leading-[1.6] max-w-xl">
                Innovaties die organisaties praktisch helpen — geen losse tools
                of tijdelijke oplossingen, maar digitale verbeteringen met
                duurzame impact op groei, continuïteit en rendement.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-px bg-mist">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.no}
              delay={i * 80}
              className={`lg:col-span-6 ${
                p.featured ? "lg:col-span-12 lg:row-span-1" : ""
              }`}
            >
              <Link
                href={p.href}
                className={`group relative block h-full p-10 lg:p-12 bg-paper-deep hover:bg-paper transition-colors duration-500 ${
                  p.featured ? "lg:p-16" : ""
                }`}
              >
                {/* Number */}
                <div className="flex items-start justify-between mb-12">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                    — {p.no}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Lees meer →
                  </span>
                </div>

                <h3
                  className={`font-display text-ink tracking-tight mb-5 ${
                    p.featured
                      ? "text-[clamp(2rem,4vw,3.25rem)]"
                      : "text-[clamp(1.6rem,2.5vw,2.25rem)]"
                  } leading-[1]`}
                >
                  {p.title}
                </h3>

                <p
                  className={`text-charcoal/80 leading-[1.55] mb-8 ${
                    p.featured ? "text-[17px] max-w-2xl" : "text-[15px]"
                  }`}
                >
                  {p.summary}
                </p>

                {/* Bullets */}
                <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cobalt" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-cobalt" aria-hidden>
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
