"use client";

import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import PillarCard from "@/components/home/PillarCard";
import Accent from "@/components/Accent";
import { useLang, usePick } from "@/lib/i18n/provider";
import { PILLAR_LINKS } from "@/content/ui";
import { home } from "@/content/home";

export default function Pillars() {
  const lang = useLang();
  const t = usePick(home).pillars;
  const PILLARS = PILLAR_LINKS.map((link, i) => ({
    no: String(i + 1).padStart(2, "0"),
    title: link.label[lang],
    href: link.href,
    summary: t.items[i].summary,
    bullets: t.items[i].bullets,
  }));
  return (
    <section id="innovaties" className="relative py-24 lg:py-32 bg-paper-deep">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6">
            <Reveal>
              <ChapterMark
                number="02"
                label={t.chapter}
                className="text-muted mb-8"
              />
              <h2 className="display-section text-[clamp(2rem,4vw,3.25rem)] text-ink">
                <Accent
                  text={t.heading}
                  accent={t.headingAccent}
                  className="font-display italic font-light text-cobalt"
                />
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <Reveal delay={120}>
              <p className="text-text text-[16px] leading-[1.6]">{t.intro}</p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-px bg-mist">
          {PILLARS.map((p, i) => {
            const isRow1 = i < 3;
            return (
              <Reveal
                key={p.no}
                delay={i * 70}
                className={isRow1 ? "lg:col-span-2" : "lg:col-span-3"}
              >
                <PillarCard
                  no={p.no}
                  title={p.title}
                  summary={p.summary}
                  bullets={p.bullets}
                  href={p.href}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
