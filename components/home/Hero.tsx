import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-28 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10 lg:mb-14 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span className="text-cobalt">01</span>
          <span className="w-6 h-px bg-current opacity-30" />
          <span>Digitale innovatie · HR · Inkoop · Marketing</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left — photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] lg:aspect-[4/5] w-full overflow-hidden bg-ink">
              <Image
                src="/photos/home-domains.png"
                alt="Team aan het werk met HR, Inkoop en Marketing dashboards"
                fill
                className="object-cover"
                style={{ objectPosition: "78% center" }}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Subtle bottom gradient for editorial finish */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-paper/80">
                  HR · Inkoop · Marketing
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-paper/50">
                  Rotterdam
                </span>
              </div>
            </div>
          </div>

          {/* Right — headline + lead + CTAs */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h1 className="display-hero text-ink mb-10 text-[clamp(2.5rem,6vw,5.75rem)]">
              Grip op groei begint met{" "}
              <em className="italic font-light text-cobalt">
                digitale innovatie
              </em>
              .
            </h1>

            <p className="text-text text-[17px] lg:text-[18px] leading-[1.55] max-w-xl mb-10">
              Digital Concepts Factory ontwikkelt innovatieve technologie waarmee
              organisaties hun grootste uitdagingen doelgericht aanpakken — van
              talent vinden en behouden tot inkoop slimmer organiseren en
              marketing onderscheidend inzetten.
            </p>

            <div className="flex flex-wrap gap-3">
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
      </div>
    </section>
  );
}
