import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-28 lg:pt-28 lg:pb-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-12 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span className="text-cobalt">01</span>
          <span className="w-6 h-px bg-current opacity-30" />
          <span>Digitale innovatie · HR · Inkoop · Marketing</span>
        </div>

        {/* Headline — single, no rotation */}
        <h1 className="display-hero text-ink mb-14 text-[clamp(2.75rem,7.5vw,7.5rem)] max-w-[18ch]">
          Grip op groei begint met{" "}
          <em className="italic font-light text-cobalt">
            digitale innovatie
          </em>
          .
        </h1>

        {/* Lead paragraph + CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="text-text text-[17px] lg:text-[19px] leading-[1.55] max-w-2xl">
              Digital Concepts Factory ontwikkelt innovatieve technologie waarmee
              organisaties hun grootste uitdagingen doelgericht aanpakken — van
              talent vinden en behouden tot inkoop slimmer organiseren en
              marketing onderscheidend inzetten.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-6 py-3.5 bg-ink text-paper text-[13px] tracking-tight hover:bg-cobalt transition-colors duration-300"
            >
              <span>Plan een vrijblijvend gesprek</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              >
                <path
                  d="M1 7h12M8 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  fill="none"
                  strokeLinecap="square"
                />
              </svg>
            </Link>
            <Link
              href="#innovaties"
              className="inline-flex items-center gap-3 px-6 py-3.5 border border-ink/15 text-ink text-[13px] tracking-tight hover:bg-ink hover:text-paper transition-colors duration-300"
            >
              Bekijk innovaties
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
