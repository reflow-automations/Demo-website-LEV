import SubpageTemplate from "@/components/SubpageTemplate";

export default function Page() {
  return (
    <SubpageTemplate
      chapter="2d"
      parentChapter="02"
      parentLabel="Talent aantrekken"
      parentHref="/talent-aantrekken"
      label="Waarom DOOH effectief is"
      h1="Zichtbaar waar het écht telt: in de echte wereld"
      h1Accent="echte wereld"
      intro={{
        eyebrow: "Digital Out of Home",
        headline:
          "Een krachtig middel om werkgevers zichtbaar, onderscheidend en relevant te maken.",
        paragraphs: [
          "Digital Out of Home (DOOH) maakt werkgevers zichtbaar voor talentvolle kandidaten op een manier die online campagnes niet kunnen evenaren. Waar veel organisaties vooral inzetten op online, zorgt DOOH juist voor extra zichtbaarheid in de echte wereld.",
          "Dat maakt deze vorm van arbeidsmarktcommunicatie opvallend, herkenbaar en moeilijk te missen.",
        ],
      }}
      sections={[
        {
          type: "numbered-list",
          eyebrow: "Acht redenen",
          heading: "Waarom DOOH werkt — concreet.",
          intro:
            "Van bereik tot conversie: waarom DOOH meer is dan alleen een scherm met een boodschap.",
          items: [
            {
              n: "01",
              title: "Exclusieve zichtbaarheid bij grote groepen kandidaten",
              text: "Afhankelijk van locaties en campagne-opzet 250.000 tot 2 miljoen kandidaten per maand. Het grootste bereik ligt in de Randstad.",
            },
            {
              n: "02",
              title: "Missie, visie en cultuur worden zichtbaar",
              text: "DOOH is veel meer dan een scherm met een boodschap. Werkgevers laten ook hun missie, visie en cultuur zien — persoonlijker, geloofwaardiger, aantrekkelijker.",
            },
            {
              n: "03",
              title: "Bereik op locaties waar de doelgroep echt komt",
              text: "Schermen op gunstig gelegen plekken waar studenten, young professionals en ervaren medewerkers dagelijks komen.",
            },
            {
              n: "04",
              title: "Lange bezoektijd zorgt voor meer aandacht",
              text: "De gemiddelde bezoektijd van kandidaten op deze locaties bedraagt 2 uur per week. Dat vergroot de kans dat een boodschap wordt opgemerkt en onthouden.",
            },
            {
              n: "05",
              title: "Flexibel inspelen op actualiteiten",
              text: "Verschillende uitingen, actuele boodschappen en full-motion video's. Campagnes worden snel afgestemd op nieuwe ontwikkelingen of vacatures.",
            },
            {
              n: "06",
              title: "Bewegend beeld trekt aantoonbaar aandacht",
              text: "83% van de mensen merkt DOOH-reclame op. Bewegende beelden tonen werkvloer-sfeer, samenwerking en cultuur — levendig en overtuigend.",
            },
            {
              n: "07",
              title: "Werkgevers vallen op buiten de online massa",
              text: "Op social media en vacaturebanken vallen organisaties nauwelijks nog op. Met DOOH gebeurt het tegenovergestelde: zichtbaar in het straatbeeld.",
            },
            {
              n: "08",
              title: "DOOH maakt directe conversie mogelijk",
              text: "Door slimme koppelingen met digitale technologie wordt target advertising en directe conversie mogelijk — van branding-middel naar resultaat-driver.",
            },
          ],
          sourceNote: "Bronnen: DCF onderzoek · NL DOOH-netwerk",
        },
      ]}
      closing={{
        headline:
          "Ontdek hoe DOOH uw organisatie zichtbaar en aantrekkelijk maakt.",
        headlineAccent: "aantrekkelijk",
        ctaLabel: "Plan een vrijblijvend gesprek",
      }}
    />
  );
}
