import SubpageTemplate from "@/components/SubpageTemplate";

export default function Page() {
  return (
    <SubpageTemplate
      chapter="2a"
      parentChapter="02"
      parentLabel="Talent aantrekken"
      parentHref="/talent-aantrekken"
      label="Innovatie talent aantrekken"
      h1="Talent in het hart raken"
      h1Accent="raken"
      intro={{
        eyebrow: "Onze innovatie",
        headline:
          "Op het juiste moment in beeld komen bij de juiste doelgroep — online én offline.",
        paragraphs: [
          "Wij helpen werkgevers met grensverleggende digitale innovaties om op het juiste moment in beeld te komen bij de juiste doelgroep. Dankzij onze ervaring in marketing en communicatie weten wij waar talent zich bevindt en hoe organisaties deze doelgroep online én offline kunnen bereiken.",
          "Zo zorgen wij ervoor dat werkgevers niet alleen zichtbaar zijn, maar ook echt raken.",
        ],
      }}
      sections={[
        {
          type: "text",
          eyebrow: "Wat dit organisaties oplevert",
          heading:
            "Sneller in contact, sterker neergezet, meer kwalitatieve instroom.",
          headingAccent: "Sneller",
          paragraphs: [
            "Met deze aanpak helpen wij organisaties om sneller in contact te komen met geschikte kandidaten, hun werkgeversverhaal krachtiger neer te zetten en meer kwalitatieve instroom te realiseren.",
            "Geen aandacht-vechten in de online massa — wel een gerichte combinatie van vertrouwde online kanalen en aanwezigheid in de echte leefwereld van talent.",
          ],
        },
        {
          type: "callout",
          quote:
            "Zichtbaar zijn is niet hetzelfde als raken. Wij brengen werkgevers tot daar waar talent zich werkelijk laat overtuigen.",
        },
      ]}
      closing={{
        headline:
          "Eerder dan uw concurrent in contact met de juiste kandidaten?",
        headlineAccent: "juiste kandidaten",
        ctaLabel: "Plan een vrijblijvend gesprek",
      }}
    />
  );
}
