import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";

const POINTS = [
  {
    n: "i.",
    title: "Eerst begrijpen, dan bouwen",
    text:
      "Achter iedere organisatie zit een eigen verhaal. Wij nemen de tijd om klanten goed te leren kennen, voordat we ook maar een regel code schrijven.",
  },
  {
    n: "ii.",
    title: "Praktisch en betaalbaar",
    text:
      "Innovatie moet werken in de dagelijkse praktijk — niet alleen indrukwekkend zijn op papier. Daarom blijven onze oplossingen toegankelijk en uitvoerbaar.",
  },
  {
    n: "iii.",
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
                number="IV"
                label="Onze overtuiging"
                className="text-muted mb-8"
              />
              <h2 className="display-hero text-[clamp(2rem,4.5vw,3.75rem)] text-ink mb-8">
                Een sjiek{" "}
                <em className="italic font-light text-cobalt">
                  advocatenkantoor
                </em>
                {" "}met een vleug Silicon Valley.
              </h2>
              <p className="text-charcoal text-[16px] leading-[1.6] max-w-md">
                Wij bouwen aan de brug tussen traditionele organisaties en de
                digitale toekomst. Degelijk waar het moet, visionair waar het
                kan.
              </p>
            </Reveal>
          </div>

          {/* Right column — points */}
          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="space-y-16">
              {POINTS.map((p, i) => (
                <Reveal key={p.n} delay={i * 120}>
                  <li className="grid grid-cols-12 gap-6 border-t border-mist pt-8">
                    <span className="col-span-2 font-display italic text-cobalt text-2xl pt-1">
                      {p.n}
                    </span>
                    <div className="col-span-10">
                      <h3 className="font-display text-[clamp(1.4rem,2vw,1.85rem)] text-ink mb-3 leading-tight">
                        {p.title}
                      </h3>
                      <p className="text-charcoal/80 text-[16px] leading-[1.65]">
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
