import SubpageTemplate from "@/components/SubpageTemplate";

export default function Page() {
  return (
    <SubpageTemplate
      chapter="3c"
      parentChapter="03"
      parentLabel="Talent behouden"
      parentHref="/talent-behouden"
      label="Waar bestaan vervangingskosten uit?"
      h1="Eén vertrek, tien soorten kosten"
      h1Accent="tien soorten kosten"
      intro={{
        eyebrow: "Het verborgen prijskaartje",
        headline:
          "Het vervangen van een medewerker kost vaak veel meer dan organisaties denken.",
        paragraphs: [
          "Wanneer een medewerker vertrekt, kijken veel organisaties in eerste instantie vooral naar de zichtbare kosten van werving en selectie. Maar in werkelijkheid bestaat vervanging uit veel meer dan alleen een vacature plaatsen of een recruiter inschakelen.",
          "Juist de combinatie van directe én indirecte kosten zorgt ervoor dat vervangingskosten snel oplopen. Onderzoek laat zien dat de kosten van personeelsverloop kunnen oplopen van 40% tot 200% van het bruto jaarsalaris, afhankelijk van het type functie.",
        ],
        sourceNote:
          "Bron: Gallup, 42% of Employee Turnover Is Preventable but Often Ignored",
      }}
      sections={[
        {
          type: "numbered-list",
          eyebrow: "Waaruit bestaan die vervangingskosten?",
          heading: "Tien kostenposten — vaak onzichtbaar.",
          intro:
            "De grootste kostenposten van een vertrekkende medewerker zijn vaak onzichtbaar. Inzicht is de eerste stap naar besparing.",
          items: [
            {
              n: "01",
              title: "Vacature- en advertentiekosten",
              text: "Vacatureplaatsingen, jobboards, social advertising, employer branding. Vaak de eerste zichtbare kosten — zeker niet de enige.",
            },
            {
              n: "02",
              title: "Tijd van HR en hiring managers",
              text: "Vacatureteksten, cv's beoordelen, sollicitatiegesprekken. Directe loonkosten plus opportuniteitsverlies.",
            },
            {
              n: "03",
              title: "Selectie, screening en assessment",
              text: "Extra kosten voor screening, referentiechecks, assessments, testinstrumenten en administratie.",
            },
            {
              n: "04",
              title: "Externe recruitmentondersteuning",
              text: "Recruiters, bureaus of searchpartijen — vast bedrag, percentage van jaarsalaris, of combinatie.",
            },
            {
              n: "05",
              title: "Onboarding en inwerktijd",
              text: "Tijd van collega's, leidinggevenden en HR. Wordt zelden expliciet zichtbaar, telt wel mee.",
            },
            {
              n: "06",
              title: "Opleiding en training",
              text: "Onboarding-programma's, systeemtrainingen, vakinhoudelijke scholing, certificeringen.",
            },
            {
              n: "07",
              title: "Lagere productiviteit tijdens inwerken",
              text: "Een nieuwe medewerker is zelden vanaf dag één volledig productief. De dip is een belangrijke reden waarom kosten oplopen.",
            },
            {
              n: "08",
              title: "Herstelwerk en extra belasting collega's",
              text: "Fouten, vragen, taken tijdelijk overnemen. Werkdruk stijgt, indirect leidt dit weer tot kosten.",
            },
            {
              n: "09",
              title: "Verlies van kennis, ervaring en relaties",
              text: "Bij ervaren krachten en sleutelposities moeilijk in euro's uit te drukken — impact op continuïteit en kwaliteit is groot.",
            },
            {
              n: "10",
              title: "Vertraging en gemiste kansen",
              text: "Projecten vertragen, klanten worden minder goed bediend, commerciële kansen blijven liggen.",
            },
          ],
          sourceNote:
            "Bron: Gallup · 42% of Employee Turnover Is Preventable but Often Ignored",
        },
        {
          type: "stat",
          eyebrow: "Minimale ondergrens, modaal salaris",
          value: "€19.200",
          detail:
            "Bij een bruto modaal jaarinkomen van €48.000 ligt de ondergrens van 40% al op €19.200 per medewerker. Voor managers loopt het op tot 200% — €96.000 of meer.",
          sourceNote: "Gallup · Randstad · CPB Kerngegevens MEV 2026",
        },
        {
          type: "text",
          eyebrow: "Waarom inzicht loont",
          heading:
            "Vervangingskosten lopen op tot 40% tot 200% van het bruto jaarsalaris.",
          headingAccent: "40% tot 200%",
          paragraphs: [
            "Veel organisaties zien vooral de directe kosten van vertrek, maar juist de indirecte kosten maken personeelsverloop duur. Daarom is het goed verklaarbaar dat vervangingskosten kunnen oplopen van 40% tot 200% van het bruto jaarsalaris, afhankelijk van de functie en de complexiteit van de vervanging.",
            "Wie rekent, ziet waarom behouden loont. Bereken zelf wat dit voor uw organisatie kan betekenen — gebruik onze interactieve calculator op de pagina Talent behouden.",
          ],
        },
      ]}
      closing={{
        headline:
          "Inzicht in uw vervangingskosten — en hoeveel u kunt besparen?",
        headlineAccent: "kunt besparen",
        ctaLabel: "Plan een vrijblijvend gesprek",
      }}
    />
  );
}
