import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import Calculator from "@/components/Calculator";
import CTA from "@/components/CTA";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-10 pb-10 lg:pt-12 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              <Link href="/talent-behouden" className="text-cobalt hover:underline">
                03 · Talent behouden
              </Link>
              <span className="opacity-40">/</span>
              <span>3d · Bereken vervangingskosten</span>
            </div>
            <h1 className="display-hero text-ink text-[clamp(2.5rem,6vw,5.5rem)] max-w-5xl">
              Wat kost personeelsverloop{" "}
              <em className="italic font-light text-cobalt">u</em> precies?
            </h1>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-paper-deep border-y border-mist">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6">
                Vervangingskosten op basis van bruto salaris
              </p>
              <h2 className="display-section text-[clamp(1.75rem,3vw,2.75rem)] text-ink">
                Vul uw eigen situatie in en zie direct het besparingspotentieel.
              </h2>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-text text-[16px] leading-[1.65]">
              <Reveal delay={100}>
                <p>
                  De vervangingskosten van een vrijwillig vertrekkende medewerker
                  kunnen oplopen van 40% tot 200% van het bruto jaarsalaris,
                  afhankelijk van het type functie. Gallup noemt als vuistregel
                  ongeveer 40% voor frontline-medewerkers, 80% voor technische
                  en professionele functies en tot 200% voor leiders en
                  managers.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p>
                  In Nederland bedraagt het bruto modaal inkomen in 2026 €48.000
                  per jaar. Onderstaande calculator combineert deze cijfers
                  zodat u direct ziet wat verloop uw organisatie kost — en
                  hoeveel u kunt besparen door talent langer te behouden.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-[12px] text-muted pt-4 border-t border-mist">
                  Bronnen: Gallup · CPB Kerngegevens MEV 2026
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="01"
              label="Interactieve berekening"
              className="text-muted mb-8"
            />
            <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink mb-6 max-w-3xl">
              Sleep de schuifregelaars — de cijfers passen zich direct aan.
            </h2>
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

      {/* CONCLUSIE */}
      <section className="py-20 lg:py-28 bg-paper-deep">
        <div className="mx-auto max-w-5xl px-6 lg:px-20 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6">
              Conclusie
            </p>
            <h2 className="display-section text-[clamp(1.75rem,3vw,2.75rem)] text-ink mb-6">
              Hoe hoger het salaris, hoe groter de financiële impact van vertrek.
            </h2>
            <p className="text-text text-[16px] leading-[1.65] max-w-3xl mx-auto mb-8">
              Minimale vervangingskosten lopen al snel fors op, zelfs bij meer
              gangbare salarissen. Juist daarom loont het voor organisaties om
              talentvolle medewerkers zo lang mogelijk te behouden.
            </p>
            <CTA href="/talent-behouden/innovatie" variant="underline">
              Bekijk onze behoud-innovatie
            </CTA>
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
                  Wilt u weten wat personeelsverloop uw organisatie{" "}
                  <em className="italic font-light text-cobalt">werkelijk</em>{" "}
                  kost?
                </h2>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <CTA href="/contact" variant="primary">
                  Plan een vrijblijvend gesprek
                </CTA>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
