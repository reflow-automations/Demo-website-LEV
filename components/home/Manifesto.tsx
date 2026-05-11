import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";

const POINTS = [
  {
    n: "01",
    title: "Eerst begrijpen, dan bouwen",
    text:
      "Achter iedere organisatie zit een eigen verhaal. Wij nemen de tijd om klanten goed te leren kennen, voordat we ook maar een regel code schrijven.",
  },
  {
    n: "02",
    title: "Praktisch en betaalbaar",
    text:
      "Innovatie moet werken in de dagelijkse praktijk — niet alleen indrukwekkend zijn op papier. Daarom blijven onze oplossingen toegankelijk en uitvoerbaar.",
  },
  {
    n: "03",
    title: "Resultaat is altijd het einddoel",
    text:
      "Meer grip. Minder kosten. Sterkere positionering. Betere processen. Concrete uitkomsten waaraan onze klanten ons mogen afrekenen.",
  },
];

export default function Manifesto() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left column — title */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <ChapterMark
                number="04"
                label="Onze overtuiging"
                className="text-muted mb-8"
              />
              <h2 className="display-hero text-[clamp(2rem,4vw,3.5rem)] text-ink mb-8">
                De brug tussen{" "}
                <em className="italic font-light text-cobalt">
                  traditionele organisaties
                </em>{" "}
                en de digitale toekomst.
              </h2>
              <p className="text-text text-[16px] leading-[1.6] max-w-md">
                Degelijk waar het moet, vernieuwend waar het kan. Drie principes
                die aan elke opdracht ten grondslag liggen.
              </p>
            </Reveal>
          </div>

          {/* Right column — points */}
          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="space-y-12">
              {POINTS.map((p, i) => (
                <Reveal key={p.n} delay={i * 100}>
                  <li className="grid grid-cols-12 gap-6 border-t border-mist pt-8">
                    <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt pt-1">
                      {p.n}
                    </span>
                    <div className="col-span-10">
                      <h3 className="display-section text-[clamp(1.3rem,1.6vw,1.5rem)] text-ink mb-3">
                        {p.title}
                      </h3>
                      <p className="text-text/80 text-[16px] leading-[1.6]">
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
  );
}
