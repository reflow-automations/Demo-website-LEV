"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <ChapterMark
            number="05"
            label="Nieuwsbrief"
            className="text-muted mb-10 justify-center"
          />
          <h2 className="display-hero text-[clamp(2rem,4vw,3.5rem)] text-ink text-center max-w-3xl mx-auto mb-6">
            Ontvang als eerste de innovaties die het{" "}
            <em className="italic font-light text-cobalt">verschil maken</em>.
          </h2>
          <p className="text-text text-[16px] leading-[1.6] text-center max-w-xl mx-auto mb-12">
            Eén editie per maand, met de nieuwste digitale innovaties die de
            verbindende schakel vormen tussen de oude en de nieuwe wereld.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="naam@organisatie.nl"
              className="flex-1 px-5 py-4 bg-paper-deep border border-mist text-text placeholder-muted text-[15px] focus:outline-none focus:border-ink transition-colors"
            />
            <button
              type="submit"
              disabled={submitted}
              className="px-7 py-4 bg-cobalt text-paper text-[13px] tracking-tight hover:bg-cobalt-bright transition-colors duration-300 disabled:bg-cobalt"
            >
              {submitted ? "Bedankt, u staat op de lijst" : "Aanmelden"}
            </button>
          </form>
          <p className="text-[12px] text-muted text-center mt-6">
            Uitschrijven altijd mogelijk.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
