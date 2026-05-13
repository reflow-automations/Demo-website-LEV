import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";

const VALUES = [
  {
    n: "01",
    title: "Digitale innovatie moet vooruit helpen",
    text:
      "Innovatie is geen modewoord of technisch speeltje, maar een middel om echte uitdagingen op te lossen. Bijdragen aan groei, continuïteit en resultaat.",
  },
  {
    n: "02",
    title: "Praktisch, betaalbaar en toepasbaar",
    text:
      "Wij geloven niet in indrukwekkende theorie. Onze oplossingen zijn toegankelijk en direct van waarde in de dagelijkse werkelijkheid.",
  },
  {
    n: "03",
    title: "Eerst begrijpen, dan ontwikkelen",
    text:
      "Elke organisatie is anders. Wij doorgronden de organisatie, markt en uitdaging zorgvuldig — pas daarna ontwikkelen wij een oplossing.",
  },
  {
    n: "04",
    title: "Verrassende oplossingen maken het verschil",
    text:
      "Niet om anders te zijn om het anders zijn. Maar omdat vernieuwing ontstaat waar creativiteit, technologie en lef samenkomen.",
  },
  {
    n: "05",
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
      {/* HERO */}
      <section className="relative pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="07"
              label="Over ons"
              className="text-muted mb-10"
            />
            <h1 className="display-hero text-ink text-[clamp(2.75rem,6.5vw,6rem)] max-w-5xl">
              Digitale innovatie die organisaties{" "}
              <em className="italic font-light text-cobalt">écht</em> verder
              helpt.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <div className="photo-treatment aspect-[16/9] lg:aspect-[21/9] relative overflow-hidden rounded-3xl bg-ink shadow-[0_28px_60px_-20px_rgba(45,31,20,0.28)]">
              <Image
                src="/photos/over-ons-hero.png"
                alt="Team rond laptop met HR, Inkoop en Marketing dashboards"
                fill
                className="object-cover"
                style={{ objectPosition: "78% center" }}
                sizes="100vw"
                priority
              />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-paper/85">
                  Het team — techniek, business en gebruiker verbonden
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-paper-deep border-y border-mist">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6">
                Eerst begrijpen, dan bouwen
              </p>
              <h2 className="display-section text-[clamp(1.75rem,3vw,2.75rem)] text-ink">
                Achter iedere organisatie zit een eigen verhaal.
              </h2>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-text text-[16px] leading-[1.65]">
              <Reveal delay={100}>
                <p>
                  Wij ontwikkelen digitale innovaties die organisaties helpen
                  slimmer, sterker en toekomstbestendiger te opereren — met
                  focus op drie domeinen waar vandaag de dag veel winst valt
                  te behalen: HR, Inkoop en Marketing.
                </p>
              </Reveal>
              <Reveal delay={160}>
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

      {/* VISIE & KERNWAARDEN */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <ChapterMark
                  number="01"
                  label="Visie & kernwaarden"
                  className="text-muted mb-8"
                />
                <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink mb-8">
                  Waar wij voor staan.
                </h2>
                <p className="text-text text-[16px] leading-[1.6] max-w-md">
                  Slim bedacht, praktisch toepasbaar en gericht op resultaat.
                  Niet als los idee, maar als concrete oplossing waarmee
                  organisaties echt verder kunnen.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ol className="space-y-12">
                {VALUES.map((v, i) => (
                  <Reveal key={v.n} delay={i * 80}>
                    <li className="grid grid-cols-12 gap-6 border-t border-mist pt-7">
                      <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt pt-1">
                        {v.n}
                      </span>
                      <div className="col-span-10">
                        <h3 className="display-section text-[clamp(1.2rem,1.5vw,1.4rem)] text-ink mb-3">
                          {v.title}
                        </h3>
                        <p className="text-text/80 text-[15px] leading-[1.65]">
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

      {/* TEAM */}
      <section className="py-28 lg:py-36 bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
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
                number="02"
                label="Het team"
                className="text-paper/50 mb-8"
              />
              <h2 className="display-section text-paper text-[clamp(2rem,3.5vw,3.25rem)]">
                Techniek, business en gebruiker verbonden.
              </h2>
            </Reveal>
            <div className="lg:col-span-5 flex items-end">
              <Reveal delay={140}>
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
              <Reveal key={t.role} delay={i * 80}>
                <div className="bg-ink p-10 h-full hover:bg-antraciet transition-colors duration-300">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/40 mb-8">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display-section text-paper text-[clamp(1.4rem,1.8vw,1.85rem)] mb-5">
                    {t.role}
                  </h3>
                  <p className="text-paper/70 text-[14px] leading-[1.6]">
                    {t.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="border-t border-b border-ink/10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <h2 className="display-hero text-[clamp(2rem,4vw,3.5rem)] text-ink">
                  Bespreek uw uitdaging met onze{" "}
                  <em className="italic font-light text-cobalt">specialisten</em>.
                </h2>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 px-8 py-5 bg-cobalt text-paper text-[14px] tracking-tight hover:bg-cobalt-bright transition-colors duration-300"
                >
                  <span>Plan vrijblijvend gesprek</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
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
