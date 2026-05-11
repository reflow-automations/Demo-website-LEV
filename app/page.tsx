import Hero from "@/components/home/Hero";
import Pillars from "@/components/home/Pillars";
import StatBlock from "@/components/home/StatBlock";
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
