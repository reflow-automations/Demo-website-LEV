import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import CTA from "@/components/CTA";

const VALUES = [
  {
    n: "i.",
    title: "Digitale innovatie moet vooruit helpen",
    text:
      "Innovatie is geen modewoord of technisch speeltje, maar een middel om echte uitdagingen op te lossen. Bijdragen aan groei, continuïteit en resultaat.",
  },
  {
    n: "ii.",
    title: "Praktisch, betaalbaar en toepasbaar",
    text:
      "Wij geloven niet in indrukwekkende theorie. Onze oplossingen zijn toegankelijk en direct van waarde in de dagelijkse werkelijkheid.",
  },
  {
    n: "iii.",
    title: "Eerst begrijpen, dan ontwikkelen",
    text:
      "Elke organisatie is anders. Wij doorgronden de organisatie, markt en uitdaging zorgvuldig — pas daarna ontwikkelen wij een oplossing.",
  },
  {
    n: "iv.",
    title: "Verrassende oplossingen maken het verschil",
    text:
      "Niet om anders te zijn om het anders zijn. Maar omdat vernieuwing ontstaat waar creativiteit, technologie en lef samenkomen.",
  },
  {
    n: "v.",
    title: "Resultaat is altijd het einddoel",
    text:
      "Meer grip. Minder kosten. Betere processen. Sterkere positionering. Daarom staat resultaatgericht werken centraal in alles wat wij doen.",
  },
];

const TEAM_ROLES = [
  {
    role: "Software developers",
    text: "Bouwen oplossingen die betrouwbaar, schaalbaar en toekomstbestendig zijn.",
  },
  {
    role: "UX-designers",
    text: "Vertalen complexe vraagstukken naar gebruiksvriendelijke toepassingen die logisch aanvoelen.",
  },
  {
    role: "Strategen",
    text: "Zorgen dat iedere innovatie aansluit op de doelen, uitdagingen en ambities van de organisatie.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      {/* HERO ------------------------------------------------- */}
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="07"
              label="Over ons"
              className="text-muted mb-10"
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <h1 className="lg:col-span-9 display-hero text-ink text-[clamp(2.75rem,7vw,7rem)] leading-[0.9]">
                Digitale innovatie die organisaties{" "}
                <em className="italic font-light text-cobalt">
                  écht
                </em>{" "}
                verder helpt.
              </h1>
              <div className="lg:col-span-3 lg:pl-6 lg:border-l lg:border-mist">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted mb-3">
                  Vol. 07 · Manifest
                </p>
                <p className="text-charcoal text-[14px] leading-relaxed italic font-display">
                  &ldquo;Een sjiek advocatenkantoor met een vleug Silicon
                  Valley.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO ------------------------------------------------- */}
      <section className="py-20 bg-paper-deep border-y border-mist">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
                — Eerst begrijpen, dan bouwen
              </p>
              <h2 className="display-hero text-[clamp(1.75rem,3.5vw,3rem)] text-ink leading-[1]">
                Achter iedere organisatie zit een{" "}
                <em className="italic font-light text-cobalt">eigen verhaal</em>
                .
              </h2>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-charcoal text-[16px] leading-[1.65]">
              <Reveal delay={100}>
                <p>
                  Wij ontwikkelen digitale innovaties die organisaties helpen
                  slimmer, sterker en toekomstbestendiger te opereren — met
                  focus op drie domeinen waar vandaag de dag veel winst valt
                  te behalen: HR, Inkoop en Marketing.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p>
                  Daarom nemen wij de tijd om klanten goed te leren kennen.
                  We luisteren, analyseren en verdiepen ons in wat er speelt,
                  zodat we digitale concepten kunnen ontwikkelen die écht
                  aansluiten op de behoefte van de organisatie.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* VISIE & KERNWAARDEN ---------------------------------- */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <ChapterMark
                  number="I"
                  label="Visie & kernwaarden"
                  className="text-muted mb-8"
                />
                <h2 className="display-hero text-[clamp(2rem,4vw,3.5rem)] text-ink leading-[0.95] mb-8">
                  Waar wij voor{" "}
                  <em className="italic font-light text-cobalt">
                    staan
                  </em>
                  .
                </h2>
                <p className="text-charcoal text-[16px] leading-[1.6] max-w-md">
                  Slim bedacht, praktisch toepasbaar en gericht op resultaat.
                  Niet als los idee, maar als concrete oplossing waarmee
                  organisaties echt verder kunnen.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ol className="space-y-14">
                {VALUES.map((v, i) => (
                  <Reveal key={v.n} delay={i * 100}>
                    <li className="grid grid-cols-12 gap-6 border-t border-mist pt-7">
                      <span className="col-span-2 font-display italic text-cobalt text-2xl pt-1">
                        {v.n}
                      </span>
                      <div className="col-span-10">
                        <h3 className="font-display text-[clamp(1.3rem,1.8vw,1.65rem)] text-ink leading-tight mb-3">
                          {v.title}
                        </h3>
                        <p className="text-charcoal/80 text-[15px] leading-[1.65]">
                          {v.text}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM ------------------------------------------------- */}
      <section className="py-28 lg:py-36 bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%" aria-hidden>
            <defs>
              <pattern id="grid4" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M64 0H0V64" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid4)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <Reveal className="lg:col-span-7">
              <ChapterMark
                number="II"
                label="Het team"
                className="text-paper/50 mb-8"
              />
              <h2 className="display-hero text-paper text-[clamp(2rem,4.5vw,3.75rem)] leading-[0.95]">
                Techniek, business en{" "}
                <em className="italic font-light text-cobalt-bright">
                  gebruiker
                </em>{" "}
                verbonden.
              </h2>
            </Reveal>
            <div className="lg:col-span-5 flex items-end">
              <Reveal delay={150}>
                <p className="text-paper/70 text-[16px] leading-[1.6] max-w-md">
                  Een veelzijdig team van software developers, UX-designers en
                  strategen. Echte digitale innovatie ontstaat niet door alleen
                  naar techniek of strategie te kijken — maar wanneer alles
                  samenkomt.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/10">
            {TEAM_ROLES.map((t, i) => (
              <Reveal key={t.role} delay={i * 100}>
                <div className="bg-ink p-10 h-full hover:bg-ink-soft transition-colors duration-500">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/40 mb-8">
                    — {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-paper text-[clamp(1.5rem,2vw,2rem)] leading-tight mb-5">
                    {t.role}
                  </h3>
                  <p className="text-paper/70 text-[14px] leading-[1.6]">
                    {t.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <p className="font-display italic text-paper/85 text-[clamp(1.2rem,2vw,1.65rem)] leading-[1.5] max-w-3xl mt-20 mx-auto text-center">
              &ldquo;Voor klanten betekent dit dat zij samenwerken met een team
              dat verder kijkt dan alleen het idee. Wij begrijpen zowel de
              business als de gebruiker én de techniek.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* CLOSING CTA ------------------------------------------ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="border-t border-b border-ink/10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <h2 className="display-hero text-[clamp(2rem,4.5vw,3.75rem)] text-ink leading-[0.95]">
                  Bespreek uw uitdaging met onze{" "}
                  <em className="italic font-light text-cobalt">specialisten</em>.
                </h2>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 px-8 py-5 bg-ink text-paper text-[14px] tracking-tight hover:bg-cobalt transition-colors duration-500"
                >
                  <span>Plan vrijblijvend gesprek</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden>
                    <path d="M1 9h16M11 3l6 6-6 6" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="square" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
