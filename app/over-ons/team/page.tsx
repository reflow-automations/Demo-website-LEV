import SubpageTemplate from "@/components/SubpageTemplate";

export default function Page() {
  return (
    <SubpageTemplate
      chapter="7b"
      parentChapter="07"
      parentLabel="Over ons"
      parentHref="/over-ons"
      label="Het team"
      h1="Een team dat techniek, business en gebruiker verbindt"
      h1Accent="techniek, business en gebruiker"
      intro={{
        eyebrow: "Achter onze innovaties",
        headline:
          "Een veelzijdig team van software developers, UX-designers en strategen.",
        paragraphs: [
          "Onze mensen hebben hun sporen verdiend in uiteenlopende sectoren en bedrijfstakken. Juist die combinatie van technische kennis, creatief denkvermogen en strategisch inzicht maakt het mogelijk om digitale innovaties te ontwikkelen die niet alleen slim bedacht zijn, maar ook daadwerkelijk werken in de praktijk.",
        ],
      }}
      sections={[
        {
          type: "numbered-list",
          eyebrow: "Drie disciplines, één team",
          heading: "Wat elke rol bijdraagt.",
          items: [
            {
              n: "01",
              title: "Software developers",
              text: "Zorgen voor de technische basis en bouwen oplossingen die betrouwbaar, schaalbaar en toekomstbestendig zijn.",
            },
            {
              n: "02",
              title: "UX-designers",
              text: "Vertalen complexe vraagstukken naar gebruiksvriendelijke toepassingen die logisch aanvoelen en prettig werken.",
            },
            {
              n: "03",
              title: "Strategen",
              text: "Zorgen ervoor dat iedere innovatie aansluit op de doelen, uitdagingen en ambities van de organisatie.",
            },
          ],
        },
        {
          type: "callout",
          quote:
            "Echte digitale innovatie ontstaat niet door alleen naar techniek te kijken, of alleen naar strategie. Het ontstaat juist wanneer inhoud, technologie, gebruiksgemak en marktinzicht samenkomen.",
        },
        {
          type: "text",
          eyebrow: "Wat dit voor klanten betekent",
          heading:
            "Een team dat verder kijkt dan alleen het idee.",
          headingAccent: "verder kijkt",
          paragraphs: [
            "Voor klanten betekent dit dat zij samenwerken met een team dat zowel de business als de gebruiker én de techniek begrijpt. Daardoor zijn wij in staat om oplossingen te ontwikkelen die niet alleen vernieuwend zijn, maar ook praktisch, doordacht en resultaatgericht.",
            "Zo bouwen wij met elkaar aan digitale innovaties die organisaties slimmer, sterker en toekomstbestendiger maken.",
          ],
        },
      ]}
      closing={{
        headline:
          "Bespreek uw uitdaging met onze specialisten.",
        headlineAccent: "uw uitdaging",
        ctaLabel: "Plan vrijblijvend gesprek",
      }}
    />
  );
}
