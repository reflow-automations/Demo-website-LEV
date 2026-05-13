import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import CTA from "@/components/CTA";
import CountUp from "@/components/CountUp";

const FINANCIAL_IMPACTS = [
  "Loondoorbetaling bij ziekte",
  "Kosten voor vervanging of herverdeling van werk",
  "Verlies aan productiviteit",
  "Extra administratieve en begeleidingskosten",
  "Mogelijke omzet- of kwaliteitsverliezen",
];

const TEAM_IMPACTS = [
  "Hogere werkdruk bij collega's",
  "Onrust en verminderde motivatie in teams",
  "Vertraging van projecten en processen",
  "Lagere klanttevredenheid",
  "Druk op leidinggevenden en continuïteit",
];

export default function ZiekteverzuimPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-10 pb-10 lg:pt-12 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="04"
              label="Ziekteverzuim terugdringen"
              className="text-muted mb-6"
            />
            <h1 className="display-hero text-ink text-[clamp(2.75rem,6.5vw,6rem)] max-w-5xl">
              Verzuim raakt direct uw{" "}
              <em className="italic font-light text-cobalt">
                kosten en continuïteit
              </em>
              .
            </h1>
          </Reveal>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <div className="photo-treatment aspect-[16/9] lg:aspect-[7/3] relative overflow-hidden rounded-3xl bg-ink shadow-[0_28px_60px_-20px_rgba(45,31,20,0.28)]">
              <Image
                src="/photos/ziekteverzuim-hero.png"
                alt="Zieke medewerker thuis met laptop en kosten-indicatie"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
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
                Een hardnekkig probleem
              </p>
              <h2 className="display-section text-[clamp(1.75rem,3vw,2.75rem)] text-ink">
                Vooral kortdurend verzuim blijft een terugkerend probleem.
              </h2>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-text text-[16px] leading-[1.65]">
              <Reveal delay={100}>
                <p>
                  Ziekteverzuim is voor veel organisaties al jaren een forse
                  kostenpost. De gemiddelde kosten in Nederland liggen tussen
                  €4.500 en €7.000 per medewerker per jaar, afhankelijk van
                  sector, functie en verzuimduur.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p>
                  Vooral kortstondig ziekteverzuim is voor veel werkgevers een
                  doorn in het oog. Juist omdat het onverwacht komt, lastig te
                  plannen is en direct leidt tot verstoring van roosters,
                  bezetting en dienstverlening.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-[12px] text-muted pt-4 border-t border-mist">
                  Bron: TNO, Arbobalans 2024 · ArboNed
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* THE BIG NUMBER */}
      <section className="py-32 lg:py-40 bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
          <svg width="100%" height="100%" aria-hidden>
            <defs>
              <pattern id="zv-grid" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M64 0H0V64" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#zv-grid)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-20 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/45 mb-10">
              Verzuimkosten per medewerker per jaar
            </p>
            <div className="display-numeric text-paper text-[clamp(4rem,12vw,10rem)] mb-10">
              <CountUp
                value={4500}
                secondValue={7000}
                prefix="€"
                thousands
                separator="—"
              />
            </div>
            <p className="text-paper/80 text-[clamp(1.05rem,1.5vw,1.35rem)] max-w-3xl mx-auto leading-[1.5]">
              In 2023 ging het in totaal om{" "}
              <strong className="text-paper">€8,3 miljard</strong> aan
              loondoorbetalingskosten over verzuimde werkdagen, meer dan de
              helft daarvan komt voort uit psychosociale arbeidsbelasting.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/45 mt-10">
              TNO · Arbobalans 2024 · ArboNed · AWVN
            </p>
          </Reveal>
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
                Eindelijk een oplossing die werkt{" "}
                <em className="font-display italic font-light text-cobalt">
                  én betaalbaar is
                </em>
                .
              </h2>
              <p className="text-text text-[16px] leading-[1.65] mb-8">
                Veel werkgevers willen ziekteverzuim terugdringen, maar lopen in
                de praktijk tegen dezelfde uitdaging aan: hoe beïnvloed je
                gedrag op een positieve manier, zonder dat het ingewikkeld, duur
                of moeilijk uitvoerbaar wordt?
              </p>
              <CTA href="/contact" variant="primary">
                Plan gesprek
              </CTA>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7 space-y-8 text-[16px] leading-[1.65] text-text">
              <Reveal delay={80}>
                <div className="bg-paper-deep p-8 lg:p-10 border-l-2 border-cobalt">
                  <p className="text-[clamp(1.1rem,1.5vw,1.3rem)] text-ink leading-[1.5]">
                    Digital Concepts Factory ontwikkelde een betaalbare digitale
                    oplossing waarmee organisaties medewerkers gemotiveerd
                    houden om zich niet onnodig ziek te melden, zonder
                    ingewikkelde trajecten of hoge drempels.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <p>
                  Minder onnodige ziekmeldingen betekent direct meer grip op
                  kosten, meer rust in teams, minder druk op collega's en meer
                  continuïteit in de dagelijkse operatie.
                </p>
                <p className="mt-4">
                  De kracht zit in de combinatie van{" "}
                  <strong>betaalbaarheid</strong>,{" "}
                  <strong>toegankelijkheid</strong> en{" "}
                  <strong>praktische toepasbaarheid</strong>. Haalbaar voor
                  grote organisaties én voor werkgevers die op zoek zijn naar
                  een oplossing die financieel verantwoord is.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY IMAGE BAND */}
      <section className="py-0">
        <Reveal>
          <div className="relative aspect-[21/9] lg:aspect-[24/8] w-full overflow-hidden bg-ink">
            <Image
              src="/photos/ziekteverzuim-secondary.png"
              alt="Kettingreactie van ziekmelding op het team"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
          </div>
        </Reveal>
      </section>

      {/* CONSEQUENCES, financial + team */}
      <section className="py-28 lg:py-36 bg-paper-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <Reveal className="lg:col-span-7">
              <ChapterMark
                number="02"
                label="Gevolgen van ziekteverzuim"
                className="text-muted mb-8"
              />
              <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink">
                Achter elke ziekmelding schuilt een kettingreactie.
              </h2>
            </Reveal>
            <div className="lg:col-span-5 flex items-end">
              <Reveal delay={120}>
                <p className="text-text text-[15px] leading-[1.6]">
                  De gevolgen zijn zowel financieel als organisatorisch groot,
                  in euro's én in werkdruk en motivatie.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-mist border border-mist">
            <Reveal>
              <div className="bg-paper p-10 h-full">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt mb-6">
                  Geldelijke gevolgen
                </p>
                <ul className="space-y-3">
                  {FINANCIAL_IMPACTS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-text text-[15px] leading-[1.55]"
                    >
                      <span className="mt-2 w-1.5 h-1.5 bg-cobalt shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="bg-paper p-10 h-full">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt mb-6">
                  Niet-geldelijke gevolgen
                </p>
                <ul className="space-y-3">
                  {TEAM_IMPACTS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-text text-[15px] leading-[1.55]"
                    >
                      <span className="mt-2 w-1.5 h-1.5 bg-cobalt shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="mt-12 pt-6 border-t border-mist flex flex-wrap items-center justify-between gap-4">
              <p className="text-[12px] text-muted leading-[1.5] max-w-xl">
                TNO: psychosociale arbeidsbelasting is verantwoordelijk voor
                meer dan de helft van de werkgerelateerde verzuimkosten, €4,9
                miljard van €8,3 miljard in 2023.
              </p>
              <CTA href="/contact" variant="underline">
                Bespreek uw verzuimvraagstuk
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
                  Verzuim structureel verlagen{" "}
                  <em className="italic font-light text-cobalt">én</em> grip op
                  uw kosten?
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
