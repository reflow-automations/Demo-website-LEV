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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — photo, refined treatment */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            {/* Soft halo behind the image — subtle cobalt atmosphere */}
            <div
              aria-hidden
              className="absolute -inset-8 lg:-inset-12 -z-10 opacity-60"
              style={{
                background:
                  "radial-gradient(60% 50% at 50% 50%, rgba(45,79,229,0.08), transparent 70%)",
              }}
            />

            {/* Photo frame */}
            <div className="relative aspect-[5/6] w-full overflow-hidden rounded-3xl bg-ink shadow-[0_28px_60px_-20px_rgba(10,22,40,0.32),0_8px_24px_-12px_rgba(45,79,229,0.18)] ring-1 ring-ink/5">
              <Image
                src="/photos/home-hero.png"
                alt="Strategische sessie — drie professionals bij een digitale groei-grafiek met HR, Inkoop en Marketing"
                fill
                className="object-cover"
                style={{ objectPosition: "75% 50%" }}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              {/* Bottom-left dark gradient for caption legibility */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,22,40,0) 0%, rgba(10,22,40,0.55) 100%)",
                }}
              />

              {/* Caption */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-paper/90">
                  HR · Inkoop · Marketing
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-paper/60">
                  Rotterdam
                </span>
              </div>

              {/* Top-right subtle corner bracket — Silicon-Valley-style tech mark */}
              <svg
                aria-hidden
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="absolute top-4 right-4 text-paper/70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M5 1h-4v4" />
                <path d="M15 1h4v4" />
                <path d="M5 19h-4v-4" />
                <path d="M15 19h4v-4" />
              </svg>
            </div>

            {/* Decorative annotation — small tech-mark beside the photo */}
            <div className="hidden lg:flex absolute -bottom-4 -right-2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted bg-paper px-3 py-1.5 rounded-full border border-mist">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-pulse" />
              <span>Live · 2026</span>
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
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-ink text-paper text-[13px] tracking-tight hover:bg-cobalt transition-colors duration-300 rounded-full"
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
                className="inline-flex items-center gap-3 px-6 py-3.5 border border-ink/15 text-ink text-[13px] tracking-tight hover:bg-ink hover:text-paper transition-colors duration-300 rounded-full"
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
