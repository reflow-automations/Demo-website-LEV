import SubpageTemplate from "@/components/SubpageTemplate";

export default function Page() {
  return (
    <SubpageTemplate
      chapter="5a"
      parentChapter="05"
      parentLabel="Inkoop"
      parentHref="/inkoop"
      label="Innovatie inkoop"
      h1="Digitale oplossingen die inkoop slimmer en beheersbaar maken"
      h1Accent="slimmer"
      intro={{
        eyebrow: "Onze innovatie",
        headline:
          "Grip op inkoop, aanbestedingen en contractmanagement — in één samenhangende oplossing.",
        paragraphs: [
          "Digital Concepts Factory ontwikkelt oplossingen waarmee organisaties grip krijgen op inkoop, aanbestedingen en contractmanagement. Onze innovaties helpen om processen te structureren, informatie inzichtelijk te maken, doorlooptijden te verkorten en de druk op interne capaciteit te verlagen.",
          "Zo wordt inkoop niet alleen overzichtelijker en efficiënter, maar ook beter beheersbaar.",
        ],
      }}
      sections={[
        {
          type: "text",
          eyebrow: "Betaalbaar voor iedere organisatie",
          heading: "Slimme innovatie is geen voorrecht van grote partijen.",
          headingAccent: "geen voorrecht",
          paragraphs: [
            "Veel organisaties denken dat innovatieve digitale oplossingen alleen zijn weggelegd voor grote partijen met grote budgetten. Wij laten zien dat dit anders kan. Onze oplossingen zijn juist ontwikkeld om betaalbaar en toegankelijk te zijn voor iedere organisatie.",
            "Daarmee maken wij moderne digitale innovatie in inkoop praktisch toepasbaar voor organisaties die slimmer willen werken, tijd willen besparen en meer grip willen krijgen op processen die nu vaak onnodig veel capaciteit vragen.",
          ],
        },
        {
          type: "callout",
          quote:
            "Inkoop gaat allang niet meer alleen over bestellen. Het vraagt om structuur, overzicht en specialistische kennis. Wij brengen die drie samen in één digitale werkomgeving.",
        },
      ]}
      closing={{
        headline:
          "Inkoop slimmer, efficiënter en beter beheersbaar organiseren?",
        headlineAccent: "slimmer",
        ctaLabel: "Plan een vrijblijvend gesprek",
      }}
    />
  );
}
