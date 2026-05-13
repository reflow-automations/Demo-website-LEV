import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import CTA from "@/components/CTA";

const SUBPAGES = [
  {
    no: "5a",
    title: "Innovatie inkoop",
    summary:
      "Digitale oplossingen die inkoop, aanbestedingen en contractmanagement slimmer en beheersbaar maken.",
    href: "/inkoop/innovatie",
  },
  {
    no: "5b",
    title: "(Europees) aanbesteden",
    summary:
      "Aanbestedingstrajecten overzichtelijker, transparanter en goedkoper, tot 50% kostenreductie.",
    href: "/inkoop/aanbesteden",
  },
  {
    no: "5c",
    title: "Contractmanagement",
    summary:
      "Centraal overzicht, tijdige signalering, minder afhankelijkheid van losse bestanden of versnipperde kennis.",
    href: "/inkoop/contractmanagement",
  },
];

const BENEFITS = [
  "Minder tijdverlies door versnipperde informatie",
  "Minder handmatig uitzoek- en afstemmingswerk",
  "Minder kans op fouten en herstelwerk",
  "Minder druk op schaarse interne capaciteit",
  "Meer transparantie en betere beheersbaarheid",
];

export default function InkoopPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="05"
              label="Inkoop"
              className="text-muted mb-6"
            />
            <h1 className="display-hero text-ink text-[clamp(2.75rem,7vw,6.5rem)] max-w-5xl">
              Aanbesteden is complexer dan ooit en vraagt om{" "}
              <em className="italic font-light text-cobalt">grip</em>.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="relative -mt-4 mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <div className="photo-treatment aspect-[16/9] lg:aspect-[7/3] relative overflow-hidden bg-ink">
              <Image
                src="/photos/inkoop-meeting.png"
                alt="Inkoop & aanbesteden, werksessie"
                fill
                className="object-cover duotone-blue"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6">
                Een breed en complex vakgebied
              </p>
              <h2 className="display-section text-[clamp(1.75rem,3vw,2.75rem)] text-ink">
                Inkoop gaat allang niet meer over alleen bestellen.
              </h2>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-text text-[16px] leading-[1.65]">
              <Reveal delay={100}>
                <p>
                  Het omvat leveranciersselectie, aanbestedingen,
                  contractmanagement, risicobeheersing, compliance,
                  kostenbeheersing en interne afstemming. Juist doordat alles
                  met elkaar samenhangt, vraagt inkoop om structuur, overzicht
                  en specialistische kennis.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p>
                  De Europese Commissie geeft aan dat publieke inkoop in de EU
                  goed is voor circa 14% van het bruto binnenlands product. In
                  Nederland vertegenwoordigt het publieke inkoopvolume jaarlijks{" "}
                  <strong>ruim €100 miljard</strong>.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-[12px] text-muted pt-4 border-t border-mist">
                  Bron: PIANOo · European Commission · Deloitte CPO Survey 2025
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* BIG NUMBER */}
      <section className="py-32 lg:py-40 bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
          <svg width="100%" height="100%" aria-hidden>
            <defs>
              <pattern id="grid3" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M64 0H0V64" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid3)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/45 mb-8">
                Onze innovatie levert op
              </p>
              <div className="display-numeric text-paper text-[clamp(5rem,14vw,12rem)] mb-6">
                −50%
              </div>
              <p className="text-paper/80 text-[clamp(1.05rem,1.5vw,1.35rem)] max-w-xl leading-[1.5]">
                Interne kosten en doorlooptijden van aanbestedingen worden tot de
                helft teruggebracht.
              </p>
            </Reveal>

            <Reveal delay={140} className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-paper/15">
              <ul className="space-y-5">
                {BENEFITS.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-4 text-paper/85 text-[15px] leading-[1.55]"
                  >
                    <span className="font-mono text-cobalt-bright text-[12px] pt-1 shrink-0">
                      ·
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SUBPAGES */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="02"
              label="Drie diepteslagen"
              className="text-muted mb-8"
            />
            <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink mb-14 max-w-3xl">
              Van strategie tot uitvoering.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-mist">
            {SUBPAGES.map((s, i) => (
              <Reveal key={s.no} delay={i * 80}>
                <Link
                  href={s.href}
                  className="group block h-full p-10 lg:p-12 bg-paper hover:bg-paper-deep transition-colors duration-300"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt mb-12">
                    {s.no}
                  </div>
                  <h3 className="display-section text-[clamp(1.5rem,1.9vw,1.85rem)] text-ink mb-4">
                    {s.title}
                  </h3>
                  <p className="text-text/80 text-[15px] leading-[1.6] mb-8">
                    {s.summary}
                  </p>
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-cobalt opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Lees meer →
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECONDARY IMAGE */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-7">
              <div className="photo-treatment aspect-[16/10] relative overflow-hidden bg-ink">
                <Image
                  src="/photos/inkoop-aanbesteden.png"
                  alt="Aanbestedingsteam met dossiers"
                  fill
                  className="object-cover duotone-blue"
                />
              </div>
            </Reveal>
            <div className="lg:col-span-5 lg:pl-6">
              <Reveal delay={100}>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6">
                  Interne kosten lopen snel op
                </p>
                <h3 className="display-section text-[clamp(1.5rem,2vw,2rem)] text-ink mb-6">
                  De werkelijke kosten zitten vaak niet in externe ondersteuning.
                </h3>
                <p className="text-text text-[15px] leading-[1.65] mb-6">
                  Maar in het opstellen van stukken, juridische controle,
                  planning, beoordeling, motivering en dossiervorming. Daardoor
                  vragen aanbestedingen vaak meer dan vooraf wordt ingeschat.
                </p>
                <CTA href="/contact" variant="underline">
                  Bespreek uw inkoopvraagstuk
                </CTA>
              </Reveal>
            </div>
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
                  Tot 50% besparen op uw{" "}
                  <em className="italic font-light text-cobalt">aanbestedings­</em>trajecten?
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
