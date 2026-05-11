import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Top: tagline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-7">
            <p className="eyebrow text-paper/50 mb-6">— De brug</p>
            <h2 className="display-hero text-[clamp(2.5rem,5vw,4.5rem)] text-paper max-w-2xl">
              De brug tussen{" "}
              <em className="italic font-light">traditionele organisaties</em>{" "}
              en de digitale toekomst.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10 flex flex-col justify-end">
            <p className="text-paper/70 text-[15px] leading-relaxed max-w-md mb-6">
              Wilt u ontdekken hoe digitale innovatie uw organisatie kan helpen
              groeien? Neem contact met ons op voor een vrijblijvend gesprek.
            </p>
            <Link
              href="/contact"
              className="self-start px-6 py-3 bg-paper text-ink text-[13px] hover:bg-cobalt hover:text-paper transition-colors duration-500"
            >
              Plan een vrijblijvend gesprek
            </Link>
          </div>
        </div>

        {/* Rule */}
        <div className="h-px bg-paper/15 mb-12" />

        {/* Bottom: navigation grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-[13px]">
          <div>
            <p className="eyebrow text-paper/40 mb-4">— Innovaties</p>
            <ul className="space-y-2.5 text-paper/80">
              <li>
                <Link href="/talent-aantrekken" className="hover:text-paper">
                  Talent aantrekken
                </Link>
              </li>
              <li>
                <Link href="/talent-behouden" className="hover:text-paper">
                  Talent behouden
                </Link>
              </li>
              <li>
                <Link href="/ziekteverzuim" className="hover:text-paper">
                  Ziekteverzuim
                </Link>
              </li>
              <li>
                <Link href="/inkoop" className="hover:text-paper">
                  Inkoop
                </Link>
              </li>
              <li>
                <Link href="/marketing" className="hover:text-paper">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-paper/40 mb-4">— Organisatie</p>
            <ul className="space-y-2.5 text-paper/80">
              <li>
                <Link href="/over-ons" className="hover:text-paper">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/over-ons/visie" className="hover:text-paper">
                  Visie & kernwaarden
                </Link>
              </li>
              <li>
                <Link href="/over-ons/team" className="hover:text-paper">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-paper">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-paper/40 mb-4">— Kantoor</p>
            <address className="not-italic text-paper/80 leading-relaxed">
              Centraal Station
              <br />
              3013 AA Rotterdam
              <br />
              Nederland
            </address>
          </div>

          <div>
            <p className="eyebrow text-paper/40 mb-4">— Contact</p>
            <ul className="space-y-2.5 text-paper/80">
              <li>
                <a
                  href="mailto:info@digitalconceptsfactory.nl"
                  className="hover:text-paper"
                >
                  info@digitalconceptsfactory.nl
                </a>
              </li>
              <li>
                <a href="tel:+31102000000" className="hover:text-paper">
                  +31 (0)10 200 0000
                </a>
              </li>
              <li className="pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/40">
                KvK 12345678 · BTW NL00.00.00.000.B01
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-paper/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.18em] text-paper/40">
          <div>© 2026 Digital Concepts Factory B.V.</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-paper">
              Privacy
            </Link>
            <Link href="#" className="hover:text-paper">
              Cookies
            </Link>
            <Link href="#" className="hover:text-paper">
              Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
