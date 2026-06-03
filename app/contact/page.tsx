"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import CalEmbed from "@/components/CalEmbed";
import ReCaptcha from "@/components/ReCaptcha";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  return (
    <>
      <section className="relative pt-10 pb-10 lg:pt-12 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <ChapterMark
              number="08"
              label="Contact"
              className="text-muted mb-6"
            />
            <h1 className="display-hero text-ink text-[clamp(2.75rem,6.5vw,6rem)] max-w-5xl">
              Een vrijblijvend{" "}
              <em className="italic font-light text-cobalt">gesprek</em> begint
              hier.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* PRIMARY — direct booking via cal.com */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <Reveal>
            <CalEmbed />
          </Reveal>
        </div>
      </section>

      {/* DIVIDER */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="flex items-center gap-6">
            <div className="flex-1 h-px bg-mist" />
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Of laat een bericht achter
            </span>
            <div className="flex-1 h-px bg-mist" />
          </div>
        </div>
      </section>

      {/* SECONDARY — form */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left, form */}
            <div className="lg:col-span-7">
              <Reveal>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                        Naam
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border-b border-mist py-3 text-ink text-[16px] focus:outline-none focus:border-ink transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                        Organisatie
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-mist py-3 text-ink text-[16px] focus:outline-none focus:border-ink transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                        E-mail
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-transparent border-b border-mist py-3 text-ink text-[16px] focus:outline-none focus:border-ink transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-transparent border-b border-mist py-3 text-ink text-[16px] focus:outline-none focus:border-ink transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                      Waarover wilt u in gesprek?
                    </label>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {[
                        "Talent aantrekken",
                        "Talent behouden",
                        "Ziekteverzuim",
                        "Inkoop",
                        "Marketing",
                      ].map((t) => (
                        <label
                          key={t}
                          className="px-4 py-2 border border-mist text-[12px] text-text hover:border-ink cursor-pointer transition-colors"
                        >
                          <input type="checkbox" className="sr-only peer" />
                          <span className="peer-checked:text-cobalt">{t}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                      Uw bericht
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-transparent border-b border-mist py-3 text-ink text-[16px] focus:outline-none focus:border-ink transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <ReCaptcha onToken={setCaptchaToken} />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted || !captchaToken}
                    className="group inline-flex items-center gap-4 px-8 py-5 bg-cobalt text-paper text-[14px] tracking-tight hover:bg-cobalt-bright transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitted
                      ? "Bedankt, wij nemen binnen 24u contact op"
                      : !captchaToken
                        ? "Bevestig eerst de reCAPTCHA"
                        : "Verstuur aanvraag"}
                    {!submitted && captchaToken && (
                      <svg width="18" height="18" viewBox="0 0 18 18" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                        <path d="M1 9h16M11 3l6 6-6 6" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="square" />
                      </svg>
                    )}
                  </button>
                </form>
              </Reveal>
            </div>

            {/* Right, info */}
            <div className="lg:col-span-4 lg:col-start-9 space-y-12">
              <Reveal delay={100}>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-4">
                    Direct
                  </p>
                  <a
                    href="mailto:info@digitalconceptsfactory.nl"
                    className="block text-[clamp(1.05rem,1.4vw,1.25rem)] text-ink hover:text-cobalt transition-colors leading-tight"
                  >
                    info@digitalconceptsfactory.nl
                  </a>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-4">
                    Bezoekadres
                  </p>
                  <address className="not-italic text-ink text-[15px] leading-relaxed">
                    Digital Concepts Factory B.V.
                    <br />
                    Rotterdam Centraal
                    <br />
                    Rotterdam — Nederland
                  </address>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
