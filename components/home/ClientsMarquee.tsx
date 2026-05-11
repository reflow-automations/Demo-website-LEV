import Reveal from "@/components/Reveal";

const CLIENTS = [
  "Coolblue",
  "ING",
  "IKEA",
  "MediaMarkt",
  "Fit For Free",
  "CBR",
  "OGER",
  "Club Med",
  "Douglas",
  "Volvo",
  "Audi",
  "Volkswagen",
  "SEAT",
  "Porsche",
];

export default function ClientsMarquee() {
  return (
    <section className="py-20 lg:py-24 bg-paper-deep border-y border-mist overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-20 mb-12">
        <Reveal>
          <div className="flex items-baseline justify-between gap-6 flex-wrap">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              — In vertrouwen samengewerkt met
            </p>
            <p className="text-charcoal text-[14px] italic font-display">
              Wij zijn trots op onze samenwerkingen.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex marquee-track" style={{ width: "fit-content" }}>
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <div
              key={`${c}-${i}`}
              className="flex items-center gap-12 px-12 shrink-0"
            >
              <span className="font-display text-[clamp(1.5rem,3vw,2.5rem)] tracking-tight text-ink/85 whitespace-nowrap">
                {c}
              </span>
              <span className="w-1 h-1 bg-cobalt rounded-full shrink-0" />
            </div>
          ))}
        </div>

        {/* Fade gradients */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-paper-deep to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-paper-deep to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
