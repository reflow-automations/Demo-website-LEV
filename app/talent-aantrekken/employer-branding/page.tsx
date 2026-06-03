import SubpageTemplate from "@/components/SubpageTemplate";

export default function Page() {
  return (
    <SubpageTemplate
      chapter="2b"
      parentChapter="02"
      parentLabel="Talent aantrekken"
      parentHref="/talent-aantrekken"
      label="Employer Branding"
      h1="Wij positioneren werkgevers op het juiste moment bij de gewenste doelgroep"
      h1Accent="juiste moment"
      intro={{
        eyebrow: "Waarom Employer Branding?",
        headline:
          "Een sterk werkgeversmerk is vandaag de dag onmisbaar — voor aantrekken én behouden.",
        paragraphs: [
          "Onderzoek laat zien dat werkgevers met een positieve reputatie aanzienlijk meer sollicitanten aantrekken dan organisaties met een zwakker of minder zichtbaar werkgeversimago. Employer Branding is daarom niet alleen belangrijk om talent aan te trekken, maar ook om talent duurzaam aan uw organisatie te binden.",
          "Steeds meer organisaties erkennen dat een sterke positie op de arbeidsmarkt niet vanzelf ontstaat. Daar moet structureel aan worden gebouwd. Een krachtig en onderscheidend werkgeversverhaal maakt het verschil.",
        ],
      }}
      sections={[
        {
          type: "text",
          eyebrow: "Wat kunnen wij voor u betekenen?",
          heading:
            "Recruitment en marketing raken steeds meer met elkaar verweven.",
          headingAccent: "verweven",
          paragraphs: [
            "Wij helpen werkgevers om met een onderscheidende Employer Branding-campagne een sterke voorkeurspositie op de arbeidsmarkt op te bouwen. Dat doen wij door uw werkgeversboodschap zichtbaar te maken op de plekken waar uw doelgroep zich daadwerkelijk bevindt — zowel online als offline.",
            "Naast online kanalen zetten wij ook Digital Out of Home in om werkgevers extra zichtbaar te maken in de echte wereld. Zo bouwen wij aan herkenning, vertrouwen en aantrekkingskracht bij de juiste doelgroep.",
          ],
        },
        {
          type: "numbered-list",
          eyebrow: "Waarom onze aanpak onderscheidend is",
          heading: "Drie principes die elke campagne krachtiger maken.",
          items: [
            {
              n: "01",
              title: "Online én offline zichtbaar bij de juiste doelgroep",
              text: "Uw werkgeversboodschap is niet alleen online zichtbaar, maar ook op locaties waar uw doelgroep dagelijks komt. LinkedIn en andere relevante online kanalen, gecombineerd met aanwezigheid in de fysieke leefwereld van kandidaten.",
            },
            {
              n: "02",
              title: "Slimme inzet van eigen mediakanalen en retargeting",
              text: "Wij beschikken over een krachtig Digital Out of Home netwerk waarmee wij maandelijks een grote groep potentiële kandidaten bereiken. Door deze zichtbaarheid te combineren met online retargeting, versterken wij niet alleen uw werkgeversmerk, maar vergroten wij ook de kans op concrete conversie.",
            },
            {
              n: "03",
              title: "Creatieve campagnes die blijven hangen",
              text: "Wij geloven niet in vlakke, inwisselbare Employer Branding-campagnes. Wij kiezen bewust voor innovatieve en onderscheidende vormen die de aandacht trekken en blijven hangen. Krachtige videocontent en trailer-achtige campagnes brengen werkgevers structureel op het netvlies van talent.",
            },
          ],
        },
        {
          type: "text",
          eyebrow: "Wat dit u oplevert",
          heading:
            "Sterkere zichtbaarheid, hogere aantrekkingskracht, betere positie op de arbeidsmarkt.",
          headingAccent: "Sterkere zichtbaarheid",
          paragraphs: [
            "Met onze Employer Branding-aanpak versterken werkgevers hun zichtbaarheid, aantrekkingskracht en positie op de arbeidsmarkt. Zo wordt uw organisatie herkenbaarder voor de juiste doelgroep en neemt de kans toe dat talent voor uw organisatie kiest.",
          ],
        },
      ]}
      closing={{
        headline:
          "Als werkgever ook zichtbaar en onderscheidend blijven voor talentvolle kandidaten?",
        headlineAccent: "zichtbaar en onderscheidend",
        ctaLabel: "Plan een vrijblijvend gesprek",
      }}
    />
  );
}
