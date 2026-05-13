import Hero from "@/components/home/Hero";
import Pillars from "@/components/home/Pillars";
// Stats: scroll-driven storyline. To revert to the original grid, swap with:
//   import StatBlock from "@/components/home/StatBlock";
import StatBlock from "@/components/home/StatBlockStoryline";
import ClientsMarquee from "@/components/home/ClientsMarquee";
import Manifesto from "@/components/home/Manifesto";
import Newsletter from "@/components/home/Newsletter";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <StatBlock />
      <Manifesto />
      <ClientsMarquee />
      <Newsletter />
      <FinalCTA />
    </>
  );
}
