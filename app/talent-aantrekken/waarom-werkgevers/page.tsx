import SubpageTemplate from "@/components/SubpageTemplate";

export default function Page() {
  return (
    <SubpageTemplate
      chapter="2c"
      parentChapter="02"
      parentLabel="Talent aantrekken"
      parentHref="/talent-aantrekken"
      label="Waarom werkgevers voor onze campagne kiezen"
      h1="Waarom alleen online, als u overal zichtbaar kunt zijn?"
      h1Accent="overal zichtbaar"
      intro={{
        eyebrow: "Onze positionering",
        headline:
          "Online zichtbaar is goed. Online én offline zichtbaar is sterker.",
        paragraphs: [
          "Wij geloven in de kracht van online zichtbaarheid, maar óók in de kracht van aanwezigheid in de echte wereld. Veel werkgevers richten zich vandaag de dag uitsluitend op online campagnes. Daarmee lopen zij het risico op te gaan in de online massa en onvoldoende op te vallen bij de kandidaten die zij juist willen bereiken.",
          "Wij kiezen daarom bewust voor een andere aanpak. Wij combineren online campagnes met krachtige offline zichtbaarheid via Digital Out of Home. Juist die combinatie maakt onze Employer Branding-campagnes onderscheidend en zorgt ervoor dat werkgevers beter worden gezien, herkend en onthouden.",
        ],
      }}
      sections={[
        {
          type: "text",
          eyebrow: "Online én offline op de radar",
          heading:
            "Bereik in de echte leefwereld van kandidaten — niet alleen op hun scherm.",
          headingAccent: "echte leefwereld",
          paragraphs: [
            "In tegenstelling tot veel andere partijen richten wij ons niet alleen op online kanalen zoals LinkedIn en andere digitale platformen, maar ook op de fysieke leefwereld van kandidaten. Met behulp van ultra moderne Digital Out of Home-schermen brengen wij de werkgeversboodschap zichtbaar onder de aandacht op strategische locaties waar studenten, young professionals en ervaren medewerkers dagelijks komen.",
            "Hiermee bereiken werkgevers een grote en relevante doelgroep in hun eigen vertrouwde omgeving. Afhankelijk van de campagne en de gekozen locaties kan dit bereik oplopen van 250.000 tot 2 miljoen contacten per maand.",
          ],
        },
        {
          type: "callout",
          eyebrow: "Branding offline, conversie online",
          quote:
            "Branding en beïnvloeding vinden offline plaats via DOOH-schermen. Conversie vindt vervolgens online plaats via gerichte retargeting op de smartphone.",
        },
        {
          type: "text",
          eyebrow: "Slimme retargeting zorgt voor conversie",
          heading:
            "Van merkbeleving naar concrete actie — exact op het juiste moment.",
          headingAccent: "concrete actie",
          paragraphs: [
            "Onze kracht zit niet alleen in zichtbaarheid, maar ook in slimme opvolging. De inzet van DOOH-schermen is bij uitstek geschikt voor branding en influencing. Werkgevers brengen offline hun boodschap onder de aandacht, bouwen herkenning op en blijven hangen in het geheugen van de doelgroep.",
            "Vervolgens wordt deze doelgroep op een later moment online opnieuw benaderd via hun smartphone. Door deze vorm van online retargeting komt dezelfde werkgeversboodschap opnieuw in beeld, precies op het moment dat de kans op interactie en conversie groter wordt.",
          ],
        },
        {
          type: "text",
          eyebrow: "Waarom werkgevers voor ons kiezen",
          heading: "In Nederland onderscheidend, voor talent top-of-mind.",
          headingAccent: "top-of-mind",
          paragraphs: [
            "Werkgevers kiezen voor de Digital Concepts Factory omdat onze campagnes verder gaan dan standaard online zichtbaarheid. Wij combineren online en offline op een manier die in Nederland onderscheidend is en zorgen ervoor dat werkgevers niet alleen zichtbaar zijn, maar ook daadwerkelijk top-of-mind worden bij talentvolle kandidaten.",
            "Met deze aanpak vergroten werkgevers hun bereik, versterken zij hun werkgeversmerk en verhogen zij de kans dat de juiste kandidaten op het juiste moment in actie komen.",
          ],
        },
      ]}
      closing={{
        headline: "Online én offline op de radar van talentvolle kandidaten?",
        headlineAccent: "Online én offline",
        ctaLabel: "Plan een vrijblijvend gesprek",
      }}
    />
  );
}
