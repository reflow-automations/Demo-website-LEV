import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import CTA from "@/components/CTA";

const PRINCIPLES = [
  {
    n: "01",
    title: "Verrassende paden, geen standaardroutes",
    text:
      "Wij kijken verder dan de standaardmix van advertenties, posts en campagnes die op elkaar lijken. Juist door verrassende paden te bewandelen, ontstaan concepten die opvallen en blijven hangen.",
  },
  {
    n: "02",
    title: "Online én offline waar het verschil wordt gemaakt",
    text:
      "Waar veel marketingpartijen zich vooral richten op online zichtbaarheid, kijken wij bewust breder. De echte kracht zit vaak in de combinatie — meer bereik, meer herkenning, meer onderscheidend vermogen.",
  },
  {
    n: "03",
    title: "Geen standaardaanpak, marketing die past",
    text:
      "Elke organisatie heeft andere doelen, een andere doelgroep en een andere markt. Daarom geloven wij niet in standaardformats. Wij nemen de tijd om merk, ambitie en marktomstandigheden echt te begrijpen.",
  },
  {
    n: "04",
    title: "Van sterk concept tot volledige uitvoering",
    text:
      "Onze kracht zit niet alleen in het bedenken van onderscheidende ideeën, maar ook in het realiseren ervan — van strategie en conceptontwikkeling tot uitvoering, opvolging en evaluatie.",
  },
  {
    n: "05",
    title: "Marketing moet iets opleveren",
    text:
      "Uiteindelijk draait marketing om resultaat. Meer zichtbaarheid, een sterker merk, meer klanten. Geen campagnes om aanwezig te zijn — concepten die organisaties echt vooruithelpen.",
  },
];

export default function MarketingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="06"
              label="Marketing"
              className="text-muted mb-10"
            />
            <h1 className="display-hero text-ink text-[clamp(2.75rem,6.5vw,6rem)] max-w-5xl">
              Als iedereen zichtbaar is, moet u{" "}
              <em className="italic font-light text-cobalt">anders zijn</em>.
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
                src="/photos/marketing-hero.png"
                alt="Drukke stadsstraat met menigte — opvallen in de massa"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-paper/85">
                  Opvallen in de massa — stadsdrukte
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
                De marketing-realiteit
              </p>
              <h2 className="display-section text-[clamp(1.75rem,3vw,2.75rem)] text-ink">
                Opvallen lukt niet meer met standaardmarketing.
              </h2>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-text text-[16px] leading-[1.65]">
              <Reveal delay={100}>
                <p>
                  Veel organisaties worstelen met dezelfde vraag: hoe trek je
                  nog écht de aandacht in een markt waarin iedereen zichtbaar
                  wil zijn? De werkelijkheid is simpel: met standaardcampagnes
                  en voorspelbare communicatie red je het vaak niet meer.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="font-medium text-ink">
                  Wie impact wil maken, moet durven afwijken van de gebaande
                  paden.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p>
                  Precies daar maken wij het verschil. Wij ontwikkelen
                  marketingconcepten die niet saai, veilig of inwisselbaar zijn,
                  maar juist verrassend, slim en onderscheidend — concepten die
                  doelgroepen echt in beweging krijgen.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <CTA href="/contact" variant="underline">
                  Plan een vrijblijvend gesprek
                </CTA>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* THE INNOVATION — Marketing manifesto */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <ChapterMark
                  number="01"
                  label="Onze aanpak"
                  className="text-muted mb-8"
                />
                <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink mb-8">
                  Wij bewandelen{" "}
                  <em className="font-display italic font-light text-cobalt">
                    verrassende paden
                  </em>
                  .
                </h2>
                <p className="text-text text-[16px] leading-[1.6] max-w-md mb-8">
                  Vijf principes die aan elke marketingopdracht ten grondslag
                  liggen. Slimmer, frisser en onderscheidender dan de massa.
                </p>
                <CTA href="/contact" variant="primary">
                  Plan gesprek
                </CTA>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ol className="space-y-12">
                {PRINCIPLES.map((p, i) => (
                  <Reveal key={p.n} delay={i * 80}>
                    <li className="grid grid-cols-12 gap-6 border-t border-mist pt-8">
                      <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt pt-1">
                        {p.n}
                      </span>
                      <div className="col-span-10">
                        <h3 className="display-section text-[clamp(1.2rem,1.5vw,1.45rem)] text-ink mb-3">
                          {p.title}
                        </h3>
                        <p className="text-text/80 text-[15px] leading-[1.65]">
                          {p.text}
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

      {/* SECONDARY IMAGE BAND */}
      <section className="py-0">
        <Reveal>
          <div className="relative aspect-[21/9] lg:aspect-[24/8] w-full overflow-hidden bg-ink">
            <Image
              src="/photos/marketing-secondary.png"
              alt="Stadion DOOH — marketing met impact"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
          </div>
        </Reveal>
      </section>

      {/* RESULT-FOCUS BLOCK */}
      <section className="py-28 lg:py-36 bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
          <svg width="100%" height="100%" aria-hidden>
            <defs>
              <pattern id="mkt-grid" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M64 0H0V64" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mkt-grid)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-7">
              <ChapterMark
                number="02"
                label="Geen zichtbaarheid, maar resultaat"
                className="text-paper/50 mb-8"
              />
              <h2 className="display-hero text-paper text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] mb-6">
                Marketing die niet alleen opvalt,{" "}
                <em className="italic font-light text-cobalt-bright">
                  maar ook oplevert
                </em>
                .
              </h2>
              <p className="text-paper/75 text-[16px] leading-[1.6] max-w-2xl">
                Uiteindelijk draait marketing om resultaat. Meer zichtbaarheid,
                een sterker merk en meer klanten. Daarom ontwikkelen wij geen
                campagnes om alleen maar aanwezig te zijn, maar marketingconcepten
                die organisaties echt vooruithelpen.
              </p>
            </Reveal>
            <Reveal delay={140} className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-paper/15">
              <ul className="space-y-5 text-paper/85 text-[15px] leading-[1.55]">
                <li className="flex items-start gap-4">
                  <span className="font-mono text-cobalt-bright text-[12px] pt-1 shrink-0">—</span>
                  <span>Slimme online activaties</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-mono text-cobalt-bright text-[12px] pt-1 shrink-0">—</span>
                  <span>Sterke offline toepassingen</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-mono text-cobalt-bright text-[12px] pt-1 shrink-0">—</span>
                  <span>Onverwachte combinaties van beide</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-mono text-cobalt-bright text-[12px] pt-1 shrink-0">—</span>
                  <span>Maatwerk per organisatie, doelgroep en markt</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-mono text-cobalt-bright text-[12px] pt-1 shrink-0">—</span>
                  <span>Strategie, concept én uitvoering</span>
                </li>
              </ul>
            </Reveal>
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
                  Ontdek wat een verrassende{" "}
                  <em className="italic font-light text-cobalt">
                    marketing­aanpak
                  </em>{" "}
                  voor u kan betekenen.
                </h2>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 px-8 py-5 bg-cobalt text-paper text-[14px] tracking-tight hover:bg-cobalt-bright transition-colors duration-300 rounded-full"
                >
                  <span>Plan een vrijblijvend gesprek</span>
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
