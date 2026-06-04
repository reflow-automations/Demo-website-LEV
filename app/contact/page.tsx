"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import CalEmbed from "@/components/CalEmbed";
import ReCaptcha from "@/components/ReCaptcha";

const TOPICS = [
  "Talent aantrekken",
  "Talent behouden",
  "Ziekteverzuim",
  "Inkoop",
  "Marketing",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    topics: [] as string[],
    message: "",
  });

  const toggleTopic = (t: string) =>
    setForm((f) => ({
      ...f,
      topics: f.topics.includes(t)
        ? f.topics.filter((x) => x !== t)
        : [...f.topics, t],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) return;
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, captchaToken }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (res.ok && data.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Er ging iets mis. Probeer het opnieuw.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Verbinding mislukt. Probeer het opnieuw.");
    }
  };

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
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="f-name" className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                        Naam
                      </label>
                      <input
                        id="f-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-transparent border-b border-mist py-3 text-ink text-[16px] focus:outline-none focus:border-ink transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="f-org" className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                        Organisatie
                      </label>
                      <input
                        id="f-org"
                        type="text"
                        value={form.organisation}
                        onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                        className="w-full bg-transparent border-b border-mist py-3 text-ink text-[16px] focus:outline-none focus:border-ink transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="f-email" className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                        E-mail
                      </label>
                      <input
                        id="f-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-transparent border-b border-mist py-3 text-ink text-[16px] focus:outline-none focus:border-ink transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="f-phone" className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                        Telefoon
                      </label>
                      <input
                        id="f-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-mist py-3 text-ink text-[16px] focus:outline-none focus:border-ink transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                      Waarover wilt u in gesprek?
                    </label>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {TOPICS.map((t) => {
                        const active = form.topics.includes(t);
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => toggleTopic(t)}
                            className={`px-4 py-2 border text-[12px] transition-colors ${
                              active
                                ? "border-cobalt bg-cobalt/[0.06] text-cobalt"
                                : "border-mist text-text hover:border-ink"
                            }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="f-msg" className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted block mb-3">
                      Uw bericht
                    </label>
                    <textarea
                      id="f-msg"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent border-b border-mist py-3 text-ink text-[16px] focus:outline-none focus:border-ink transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <ReCaptcha onToken={setCaptchaToken} />
                  </div>

                  {status === "error" && (
                    <p className="text-[13px] text-cobalt bg-cobalt/[0.08] border border-cobalt/30 px-4 py-3">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={
                      status === "submitting" ||
                      status === "success" ||
                      !captchaToken
                    }
                    className="group inline-flex items-center gap-4 px-8 py-5 bg-cobalt text-paper text-[14px] tracking-tight hover:bg-cobalt-bright transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "success"
                      ? "Bedankt, wij nemen binnen 24u contact op"
                      : status === "submitting"
                        ? "Versturen…"
                        : !captchaToken
                          ? "Bevestig eerst de reCAPTCHA"
                          : "Verstuur aanvraag"}
                    {status === "idle" && captchaToken && (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden
                      >
                        <path
                          d="M1 9h16M11 3l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          fill="none"
                          strokeLinecap="square"
                        />
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
