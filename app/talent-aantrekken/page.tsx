import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import CTA from "@/components/CTA";

const DOOH_POINTS = [
  {
    n: "01",
    title: "Bereik tot 2 miljoen kandidaten per maand",
    text:
      "Afhankelijk van locaties en campagne-opzet kan het bereik oplopen van 250.000 tot 2 miljoen kandidaten per maand — vooral in de Randstad.",
  },
  {
    n: "02",
    title: "Missie, visie en cultuur worden zichtbaar",
    text:
      "DOOH is meer dan een scherm met een boodschap. Werkgevers laten ook hun missie, visie en cultuur zien — persoonlijker en geloofwaardiger.",
  },
  {
    n: "03",
    title: "Locaties waar de doelgroep echt komt",
    text:
      "De schermen staan op gunstig gelegen plekken die druk bezocht worden door studenten, young professionals en ervaren medewerkers.",
  },
  {
    n: "04",
    title: "Lange bezoektijd, meer aandacht",
    text:
      "De gemiddelde bezoektijd van kandidaten op deze locaties bedraagt twee uur per week. Meer kans dat een boodschap wordt opgemerkt en onthouden.",
  },
  {
    n: "05",
    title: "Flexibel inspelen op actualiteiten",
    text:
      "Verschillende uitingen, actuele boodschappen en full-motion video's. Campagnes worden snel afgestemd op nieuwe ontwikkelingen of vacatures.",
  },
  {
    n: "06",
    title: "Bewegend beeld trekt aantoonbaar aandacht",
    text:
      "Onderzoek laat zien dat 83% van de mensen DOOH-reclame opmerkt. Bewegend beeld toont werkvloer-sfeer, samenwerking en cultuur.",
  },
  {
    n: "07",
    title: "Werkgevers vallen op buiten de online massa",
    text:
      "Op social media en vacaturebanken vallen organisaties nauwelijks nog op. Met DOOH gebeurt juist het tegenovergestelde — zichtbaar in het straatbeeld.",
  },
  {
    n: "08",
    title: "DOOH maakt directe conversie mogelijk",
    text:
      "Door slimme koppelingen met digitale technologie wordt target advertising en directe conversie mogelijk — van branding naar resultaat.",
  },
];

export default function TalentAantrekkenPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="02"
              label="Talent aantrekken"
              className="text-muted mb-10"
            />
            <h1 className="display-hero text-ink text-[clamp(2.75rem,6.5vw,6rem)] max-w-5xl">
              Wie talent begrijpt{" "}
              <em className="italic font-light text-cobalt">wordt gekozen</em>.
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
                src="/photos/talent-aantrekken-hero.png"
                alt="Voorbijganger bij DOOH-billboard in stadsstraat"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-paper/85">
                  DOOH-campagne · stadsstraat
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
                De arbeidsmarkt
              </p>
              <h2 className="display-section text-[clamp(1.75rem,3vw,2.75rem)] text-ink">
                Werkgevers op het netvlies van talent.
              </h2>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-text text-[16px] leading-[1.65]">
              <Reveal delay={100}>
                <p>
                  Steeds meer werkgevers benaderen ons met dezelfde vraag: hoe
                  trekken wij in deze krappe arbeidsmarkt de juiste mensen aan?
                  Kandidaten hebben veel te kiezen en vergelijken werkgevers
                  allang niet meer alleen op salaris of secundaire
                  arbeidsvoorwaarden.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p>
                  Steeds vaker kijken zij of een organisatie, cultuur en
                  arbeidsvoorwaarden passen bij hun identiteit, leefstijl,
                  waarden en toekomstbeeld.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="font-medium text-ink">
                  Jong talent verwacht dat werkgevers aansluiten bij de
                  tijdgeest. Organisaties die dat zichtbaar en geloofwaardig
                  weten te maken, hebben een duidelijke voorsprong.
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

      {/* THE INNOVATION */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <Reveal className="lg:col-span-5">
              <ChapterMark
                number="01"
                label="De innovatie"
                className="text-muted mb-8"
              />
              <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink mb-8">
                Talent in het hart raken — online{" "}
                <em className="font-display italic font-light text-cobalt">
                  én offline
                </em>
                .
              </h2>
              <p className="text-text text-[16px] leading-[1.65] mb-8">
                Wij helpen werkgevers met grensverleggende digitale innovaties
                om op het juiste moment in beeld te komen bij de juiste
                doelgroep. Dankzij onze ervaring in marketing en communicatie
                weten wij waar talent zich bevindt en hoe organisaties deze
                doelgroep online én offline kunnen bereiken.
              </p>
              <CTA href="/contact" variant="primary">
                Plan gesprek
              </CTA>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7 space-y-8 text-[16px] leading-[1.65] text-text">
              <Reveal delay={80}>
                <div className="bg-paper-deep p-8 lg:p-10 border-l-2 border-cobalt">
                  <p className="text-[clamp(1.1rem,1.5vw,1.3rem)] text-ink leading-[1.5]">
                    Veel werkgevers richten zich vandaag de dag uitsluitend op
                    online campagnes. Daarmee lopen zij het risico op te gaan in
                    de online massa. Wij geloven in de kracht van online
                    zichtbaarheid, maar óók in de kracht van aanwezigheid in de
                    echte wereld.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <p>
                  Met onze Employer Branding-campagnes komen werkgevers in
                  contact met de juiste kandidaten — sneller, met meer
                  herkenning en met sterkere conversie. Naast online kanalen
                  zetten wij <strong>Digital Out of Home</strong> in om
                  werkgevers extra zichtbaar te maken op locaties waar hun
                  doelgroep dagelijks komt.
                </p>
                <p className="mt-4">
                  Vervolgens wordt deze doelgroep online opnieuw benaderd via{" "}
                  <strong>slimme retargeting</strong> op de smartphone. Branding
                  vindt offline plaats, conversie vindt online plaats.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY IMAGE — full-width band */}
      <section className="py-0">
        <Reveal>
          <div className="relative aspect-[21/9] lg:aspect-[24/8] w-full overflow-hidden bg-ink">
            <Image
              src="/photos/talent-aantrekken-secondary.png"
              alt="DOOH-billboard in stadsplein met meerdere werkgevers"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
          </div>
        </Reveal>
      </section>

      {/* DOOH-EFFECTIEF — 8 redenen */}
      <section className="py-28 lg:py-36 bg-paper-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <Reveal className="lg:col-span-7">
              <ChapterMark
                number="02"
                label="Waarom DOOH effectief is"
                className="text-muted mb-8"
              />
              <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink">
                Zichtbaar waar het écht telt: in de echte wereld.
              </h2>
            </Reveal>
            <div className="lg:col-span-5 flex items-end">
              <Reveal delay={120}>
                <p className="text-text text-[15px] leading-[1.6]">
                  Acht redenen waarom Digital Out of Home werkgevers
                  onderscheidend en relevant maakt voor talentvolle kandidaten.
                </p>
              </Reveal>
            </div>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {DOOH_POINTS.map((p, i) => (
              <Reveal key={p.n} delay={(i % 4) * 60}>
                <li className="grid grid-cols-12 gap-5 border-t border-mist pt-6">
                  <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt pt-1">
                    {p.n}
                  </span>
                  <div className="col-span-10">
                    <h3 className="display-section text-[1.1rem] text-ink mb-2">
                      {p.title}
                    </h3>
                    <p className="text-text/80 text-[14px] leading-[1.55]">
                      {p.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={200}>
            <div className="mt-12 pt-6 border-t border-mist flex flex-wrap items-center justify-between gap-4">
              <p className="text-[12px] text-muted">
                Bronnen — DCF onderzoek · NL DOOH-netwerk
              </p>
              <CTA href="/contact" variant="underline">
                Ontdek wat DOOH voor u kan betekenen
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="border-t border-b border-ink/10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <h2 className="display-hero text-[clamp(2rem,4vw,3.5rem)] text-ink">
                  Eerder dan uw concurrent in contact met de{" "}
                  <em className="italic font-light text-cobalt">
                    juiste kandidaten
                  </em>
                  ?
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
