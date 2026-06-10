"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import Accent from "@/components/Accent";
import { usePick } from "@/lib/i18n/provider";
import { cta } from "@/content/ui";
import { home } from "@/content/home";

export default function FinalCTA() {
  const t = usePick(home).finalCta;
  const ctaLong = usePick(cta.long);
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <Reveal>
          <div className="relative border-t border-b border-ink/10 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <h2 className="display-hero text-[clamp(2.25rem,4.5vw,4rem)] text-ink leading-[0.95]">
                  <Accent
                    text={t.heading}
                    accent={t.headingAccent}
                    className="italic font-light text-cobalt"
                  />
                </h2>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 px-8 py-5 bg-cobalt text-paper text-[14px] tracking-tight hover:bg-cobalt-bright transition-colors duration-300"
                >
                  <span>{ctaLong}</span>
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
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
