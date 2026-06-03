import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import CTA from "@/components/CTA";
import Calculator from "@/components/Calculator";
import SubpagesNav from "@/components/SubpagesNav";

const COST_ITEMS = [
  {
    n: "01",
    title: "Vacature- en advertentiekosten",
    text:
      "Vacatureplaatsingen, jobboards, social advertising, employer branding en campagnekosten. Vaak de eerste zichtbare kosten, zeker niet de enige.",
  },
  {
    n: "02",
    title: "Tijd van HR en hiring managers",
    text:
      "Het opstellen van vacatures, beoordelen van cv's en voeren van gesprekken kost uren. Directe loonkosten plus opportuniteitsverlies.",
  },
  {
    n: "03",
    title: "Selectie, screening en assessment",
    text:
      "Extra kosten voor screening, referentiechecks, assessments en administratieve verwerking, zeker bij verantwoordelijke functies.",
  },
  {
    n: "04",
    title: "Externe recruitmentondersteuning",
    text:
      "Recruiters, bureaus of searchpartijen. Een vast bedrag, een percentage van het jaarsalaris, of een combinatie van beide.",
  },
  {
    n: "05",
    title: "Onboarding en inwerktijd",
    text:
      "Tijd van collega's, leidinggevenden en HR. Wordt zelden expliciet zichtbaar gemaakt, telt wel degelijk mee.",
  },
  {
    n: "06",
    title: "Opleiding en training",
    text:
      "Onboardingprogramma's, systeemtrainingen, vakinhoudelijke scholing, veiligheidsinstructies of certificeringen.",
  },
  {
    n: "07",
    title: "Lagere productiviteit",
    text:
      "Een nieuwe medewerker is zelden vanaf dag één volledig productief. De inwerk-dip is een belangrijke reden waarom kosten oplopen.",
  },
  {
    n: "08",
    title: "Extra belasting voor collega's",
    text:
      "Vragen beantwoorden, werk corrigeren, taken tijdelijk overnemen. Werkdruk stijgt, indirect leidt dit weer tot kosten.",
  },
  {
    n: "09",
    title: "Verlies van kennis en relaties",
    text:
      "Opgebouwde kennis, klantinzicht en interne samenwerking verdwijnen mee. Bij ervaren krachten of sleutelposities groot.",
  },
  {
    n: "10",
    title: "Vertraging en gemiste kansen",
    text:
      "Projecten vertragen, fouten ontstaan, klanten minder goed bediend, commerciële kansen blijven liggen.",
  },
];

const CALC_ROWS = [
  { salary: "€ 36.000", low: "€ 14.400", mid: "€ 28.800", high: "€ 72.000" },
  { salary: "€ 48.000", low: "€ 19.200", mid: "€ 38.400", high: "€ 96.000" },
  { salary: "€ 65.000", low: "€ 26.000", mid: "€ 52.000", high: "€ 130.000" },
  { salary: "€ 85.000", low: "€ 34.000", mid: "€ 68.000", high: "€ 170.000" },
  { salary: "€ 120.000", low: "€ 48.000", mid: "€ 96.000", high: "€ 240.000" },
];

export default function TalentBehoudenPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-10 pb-10 lg:pt-12 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="03"
              label="Talent behouden"
              className="text-muted mb-6"
            />
            <h1 className="display-hero text-ink text-[clamp(2.75rem,6.5vw,6rem)] max-w-5xl">
              Behouden is de{" "}
              <em className="italic font-light text-cobalt">nieuwe</em>{" "}
              succesfactor.
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
                src="/photos/talent-behouden-celebration.png"
                alt="Drie collega's juichend bij een resultaat-dashboard"
                fill
                className="object-cover"
                style={{ objectPosition: "center 35%" }}
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
                Het vraagstuk
              </p>
              <h2 className="display-section text-[clamp(1.75rem,3vw,2.75rem)] text-ink">
                De tijd dat medewerkers jarenlang vanzelfsprekend blijven,
                ligt achter ons.
              </h2>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-text text-[16px] leading-[1.65]">
              <Reveal delay={100}>
                <p>
                  Medewerkers bepalen in grote mate het succes van een
                  organisatie. Het is daarom niet alleen belangrijk om goede
                  mensen aan te trekken, maar minstens zo belangrijk om hen ook
                  te behouden. Talent behouden is uitgegroeid tot een
                  strategische succesfactor.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p>
                  Juist op het moment dat een medewerker volledig is ingewerkt,
                  kennis heeft opgebouwd en maximale waarde toevoegt, gebeurt
                  het regelmatig dat deze overstapt, naar een andere werkgever
                  of zelfs een concurrent.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-[12px] text-muted pt-4 border-t border-mist">
                  Bron: Berenschot, HR-Trendonderzoek 2024-2025
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
              <pattern id="grid2" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M64 0H0V64" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid2)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-20 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/45 mb-10">
              Minimale besparing per behouden medewerker
            </p>
            <div className="display-numeric text-paper text-[clamp(5rem,16vw,14rem)] mb-10">
              €19.200
            </div>
            <p className="text-paper/80 text-[clamp(1.05rem,1.5vw,1.35rem)] max-w-3xl mx-auto leading-[1.5]">
              Bij een modaal bruto jaarinkomen van €48.000 en een minimale
              vervangingsimpact van 40%, is dit het bedrag dat u bespaart wanneer u
              één onnodig vertrek voorkomt.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/45 mt-10">
              Gallup · Randstad · CPB
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
                Maatwerk in arbeidsvoorwaarden, eindelijk{" "}
                <em className="font-display italic font-light text-cobalt">
                  betaalbaar
                </em>.
              </h2>
              <p className="text-text text-[16px] leading-[1.65] mb-8">
                Wanneer medewerkers de ruimte krijgen om hun arbeidsvoorwaarden
                zelf samen te stellen, ontstaat er echte betrokkenheid. Mensen
                kiezen wat bij hen past en voelen zich gezien. Dat vertaalt
                zich direct in loyaliteit.
              </p>
              <CTA href="/contact" variant="primary">
                Ontdek de innovatie
              </CTA>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7 space-y-8 text-[16px] leading-[1.65] text-text">
              <Reveal delay={80}>
                <div className="bg-paper-deep p-8 lg:p-10 border-l-2 border-cobalt">
                  <p className="text-[clamp(1.1rem,1.5vw,1.3rem)] text-ink leading-[1.5]">
                    Wij draaien het uitgangspunt om: niet de werkgever bepaalt
                    welke extra&apos;s worden aangeboden, maar de medewerker
                    kiest zelf wat voor hem of haar waardevol is, binnen
                    duidelijke kaders.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <p>
                  Voor veel organisaties voelde maatwerk lang als iets dat in
                  theorie aantrekkelijk klinkt, maar in de praktijk onhaalbaar
                  is. Te complex, te duur, moeilijk te organiseren per
                  individuele medewerker.
                </p>
                <p className="mt-4">
                  Met onze digitale innovatie is dat fundamenteel veranderd.
                  Zonder complexiteit, zonder oncontroleerbare kosten, wél met
                  ruimte voor de individuele medewerker en strakke kaders voor
                  de organisatie.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TEN COST BUCKETS */}
      <section className="py-28 lg:py-36 bg-paper-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <Reveal className="lg:col-span-7">
              <ChapterMark
                number="02"
                label="Waar bestaan vervangingskosten uit?"
                className="text-muted mb-8"
              />
              <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink">
                Eén vertrek, tien soorten kosten.
              </h2>
            </Reveal>
            <div className="lg:col-span-5 flex items-end">
              <Reveal delay={120}>
                <p className="text-text text-[15px] leading-[1.6]">
                  De grootste kostenposten van een vertrekkende medewerker zijn
                  vaak onzichtbaar. Onderzoek laat zien dat de werkelijke kosten
                  kunnen oplopen van 40% tot 200% van het bruto jaarsalaris.
                </p>
              </Reveal>
            </div>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {COST_ITEMS.map((c, i) => (
              <Reveal key={c.n} delay={(i % 4) * 60}>
                <li className="grid grid-cols-12 gap-5 border-t border-mist pt-6">
                  <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt pt-1">
                    {c.n}
                  </span>
                  <div className="col-span-10">
                    <h3 className="display-section text-[1.1rem] text-ink mb-2">
                      {c.title}
                    </h3>
                    <p className="text-text/80 text-[14px] leading-[1.55]">
                      {c.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={200}>
            <p className="text-[12px] text-muted mt-12 pt-6 border-t border-mist">
              Bron: Gallup · 42% of Employee Turnover Is Preventable but Often Ignored
            </p>
          </Reveal>
        </div>
      </section>

      {/* CALCULATOR, interactive widget */}
      <section id="bereken" className="py-28 lg:py-36 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="03"
              label="Bereken uw vervangingskosten"
              className="text-muted mb-8"
            />
            <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink mb-6 max-w-3xl">
              Wat kost personeelsverloop{" "}
              <em className="font-display italic font-light text-cobalt">u</em>{" "}
              precies?
            </h2>
            <p className="text-text text-[16px] leading-[1.6] max-w-2xl mb-14">
              Vul uw eigen situatie in, salaris, type functie en jaarlijks
              aantal vertrekkers. U ziet direct uw vervangingskosten én het
              besparingspotentieel met DCF.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <Calculator />
          </Reveal>

          <Reveal delay={140}>
            <p className="text-[12px] text-muted mt-14 pt-6 border-t border-mist">
              Berekening volgens Gallup-vuistregels (40%/80%/200% van bruto
              jaarsalaris). Modaal NL: €48.000 (CPB 2026).
            </p>
          </Reveal>
        </div>
      </section>

      {/* REFERENCE TABLE, quick glance */}
      <section className="pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6">
              Referentie, kosten per medewerker
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="border border-mist overflow-x-auto">
              <table className="w-full">
                <thead className="bg-paper-deep">
                  <tr>
                    <th className="text-left p-5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      Bruto jaarsalaris
                    </th>
                    <th className="text-left p-5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      Frontline · 40%
                    </th>
                    <th className="text-left p-5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      Professional · 80%
                    </th>
                    <th className="text-left p-5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      Manager · 200%
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CALC_ROWS.map((r) => (
                    <tr
                      key={r.salary}
                      className={`border-t border-mist hover:bg-paper-deep/60 transition-colors ${
                        r.salary === "€ 48.000" ? "bg-cobalt/[0.04]" : ""
                      }`}
                    >
                      <td className="p-5 display-numeric text-[1.1rem] text-ink">
                        {r.salary}
                        {r.salary === "€ 48.000" && (
                          <span className="ml-3 font-mono text-[9px] uppercase tracking-[0.14em] text-cobalt font-medium">
                            ← modaal
                          </span>
                        )}
                      </td>
                      <td className="p-5 display-numeric text-[1.1rem] text-text">
                        {r.low}
                      </td>
                      <td className="p-5 display-numeric text-[1.1rem] text-text">
                        {r.mid}
                      </td>
                      <td className="p-5 display-numeric text-[1.1rem] text-text">
                        {r.high}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[12px] text-muted mt-5">
              Bron: Gallup · CPB Kerngegevens MEV 2026
            </p>
          </Reveal>
        </div>
      </section>

      <SubpagesNav
        chapter="04"
        items={[
          {
            no: "3a",
            title: "Innovatie voor talentbehoud",
            summary: "Maatwerk in arbeidsvoorwaarden, eindelijk schaalbaar en betaalbaar.",
            href: "/talent-behouden/innovatie",
          },
          {
            no: "3b",
            title: "Standaard verleden tijd",
            summary: "Waarom één pakket niet meer past — en wat in de plaats moet.",
            href: "/talent-behouden/arbeidsvoorwaarden",
          },
          {
            no: "3c",
            title: "Vervangingskosten uitgesplitst",
            summary: "Tien soorten kosten — vaak onzichtbaar, samen fors.",
            href: "/talent-behouden/vervangingskosten",
          },
          {
            no: "3d",
            title: "Bereken zelf",
            summary: "Interactieve calculator met uw eigen salaris en aantal vertrekkers.",
            href: "/talent-behouden/bereken",
          },
        ]}
      />

      {/* CLOSING CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="border-t border-b border-ink/10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <h2 className="display-hero text-[clamp(2rem,4vw,3.5rem)] text-ink">
                  Talent langer behouden{" "}
                  <em className="italic font-light text-cobalt">én</em> €19.200
                  per medewerker besparen?
                </h2>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 px-8 py-5 bg-cobalt text-paper text-[14px] tracking-tight hover:bg-cobalt-bright transition-colors duration-300"
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
