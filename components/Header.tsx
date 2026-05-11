"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Talent aantrekken", href: "/talent-aantrekken" },
  { label: "Talent behouden", href: "/talent-behouden" },
  { label: "Ziekteverzuim", href: "/ziekteverzuim" },
  { label: "Inkoop", href: "/inkoop" },
  { label: "Marketing", href: "/marketing" },
  { label: "Over ons", href: "/over-ons" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-mist"
          : "bg-paper border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className="text-ink"
            aria-hidden
          >
            <rect x="0" y="0" width="32" height="32" fill="currentColor" />
            <path
              d="M9 9h6a7 7 0 0 1 0 14H9V9z"
              fill="#FAFAF7"
            />
            <circle cx="22" cy="22" r="2.2" fill="#2D4FE5" />
          </svg>
          <div className="leading-tight">
            <div className="font-display text-[15px] tracking-tight text-ink">
              Digital Concepts Factory
            </div>
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
              Est. 2018 · Rotterdam
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-tight text-charcoal hover:text-ink transition-colors link-underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-ink text-paper text-[13px] tracking-tight hover:bg-cobalt transition-colors duration-500"
          >
            Plan gesprek
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2"
          aria-label="Menu"
        >
          <div className="w-6 h-[1px] bg-ink mb-1.5" />
          <div className="w-6 h-[1px] bg-ink mb-1.5" />
          <div className="w-4 h-[1px] bg-ink ml-auto" />
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t border-mist bg-paper">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[15px] text-charcoal py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 bg-ink text-paper text-center text-[14px]"
            >
              Plan een vrijblijvend gesprek
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
