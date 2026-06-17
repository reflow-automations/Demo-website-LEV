import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { websiteSchema } from "@/lib/seo/schema";
import Hero from "@/components/home/Hero";
import Pillars from "@/components/home/Pillars";
// Stats: scroll-driven storyline. To revert to the original grid, swap with:
//   import StatBlock from "@/components/home/StatBlock";
import StatBlock from "@/components/home/StatBlockStoryline";
import ClientsMarquee from "@/components/home/ClientsMarquee";
import Manifesto from "@/components/home/Manifesto";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd schema={[websiteSchema]} />
      <Hero />
      <Pillars />
      <StatBlock />
      <Manifesto />
      <ClientsMarquee />
      {/* Nieuwsbrief tijdelijk verwijderd (juni 2026). Terugzetten = import van
          components/home/Newsletter.tsx herstellen en <Newsletter /> hier plaatsen. */}
      <FinalCTA />
    </>
  );
}
