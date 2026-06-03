import SubpageTemplate from "@/components/SubpageTemplate";

export default function Page() {
  return (
    <SubpageTemplate
      chapter="5b"
      parentChapter="05"
      parentLabel="Inkoop"
      parentHref="/inkoop"
      label="(Europees) aanbesteden"
      h1="Aanbesteden vraagt om grip, structuur en specialistische kennis"
      h1Accent="grip, structuur"
      intro={{
        eyebrow: "Het vraagstuk",
        headline:
          "Een aanbestedingstraject is complex, tijdrovend en kost al snel tienduizenden euro's.",
        paragraphs: [
          "Voor veel organisaties is een aanbestedingstraject een complex en tijdrovend proces. Stukken moeten zorgvuldig worden voorbereid, documenten moeten juridisch correct zijn, deadlines moeten worden bewaakt en het hele traject moet transparant en controleerbaar verlopen. Zeker bij Europese aanbestedingen vraagt dit om structuur, specialistische kennis en voldoende capaciteit.",
          "In de praktijk ontbreekt het daar juist vaak aan: beperkte tijd, beperkte capaciteit of onvoldoende kennis om aanbestedingen efficiënt en zorgvuldig te organiseren.",
        ],
        sourceNote:
          "Bronnen: European Commission · PIANOo · Deloitte CPO Survey 2025",
      }}
      sections={[
        {
          type: "text",
          eyebrow: "Schaal van publieke inkoop",
          heading: "Publieke inkoop in NL: ruim €100 miljard per jaar.",
          headingAccent: "€100 miljard",
          paragraphs: [
            "Voor één vast gemiddeld bedrag per aanbesteding bestaat geen eenduidige landelijke norm. Wel is duidelijk dat een aanbestedingstraject organisaties al snel tienduizenden euro's kost aan interne uren, voorbereiding, afstemming, documentatie en eventuele externe begeleiding.",
            "Publieke inkoop vertegenwoordigt in de EU ongeveer 14% tot 15% van het bruto binnenlands product. In Nederland gaat het volgens PIANOo om ruim €100 miljard per jaar.",
            "De werkelijke kosten zitten vaak niet alleen in externe ondersteuning, maar vooral in de interne organisatie: opstellen van stukken, afstemming, juridische controle, planning, beoordeling, motivering en dossiervorming.",
          ],
        },
        {
          type: "stat",
          eyebrow: "Onze innovatie levert op",
          value: "tot 50%",
          detail:
            "Doordat onze innovatie structuur, overzicht en procesbeheersing toevoegt, kunnen organisaties de interne kosten en doorlooptijden van aanbestedingstrajecten met tot 50% terugdringen.",
          sourceNote: "DCF onderzoek",
        },
        {
          type: "numbered-list",
          eyebrow: "Wat dit u oplevert",
          heading: "Wat de innovatie concreet verandert.",
          intro:
            "Geen losse tools en handmatig uitzoekwerk meer. Eén werkomgeving die het hele traject beheersbaar maakt.",
          items: [
            {
              n: "01",
              title: "Minder tijdverlies",
              text: "Geen versnipperde informatie meer over mailwisselingen, sharepoints en lokale bestanden — alles centraal.",
            },
            {
              n: "02",
              title: "Minder handmatig werk",
              text: "Uitzoek- en afstemmingswerk wordt drastisch teruggebracht door gestructureerde processtappen.",
            },
            {
              n: "03",
              title: "Minder fouten",
              text: "Door gestandaardiseerde stappen en checkpoints verkleint u de kans op herstelwerk en juridische missers.",
            },
            {
              n: "04",
              title: "Minder druk op capaciteit",
              text: "Schaarse interne professionals worden ontlast — meer doorlooptijd, dezelfde mensen.",
            },
            {
              n: "05",
              title: "Meer transparantie",
              text: "Het traject is voor alle betrokkenen helder, controleerbaar en aantoonbaar onderbouwd.",
            },
            {
              n: "06",
              title: "Betere beheersbaarheid",
              text: "Planning, voortgang en risico's worden continu inzichtelijk in plaats van per fase.",
            },
          ],
        },
        {
          type: "text",
          eyebrow: "Betaalbaar voor iedereen",
          heading:
            "Professioneel aanbesteden — geen privilege van grote partijen.",
          headingAccent: "geen privilege",
          paragraphs: [
            "Veel organisaties denken dat slimme digitale ondersteuning bij aanbestedingen alleen haalbaar is voor grote partijen met grote budgetten. Wij laten zien dat dit anders kan.",
            "Onze oplossing is ontwikkeld om betaalbaar en toegankelijk te zijn voor iedere organisatie. Zo wordt professioneel en efficiënter aanbesteden niet iets voor later, maar een direct toepasbare manier om tijd te besparen, kosten terug te dringen en meer grip te krijgen.",
          ],
        },
      ]}
      closing={{
        headline: "Tot 50% besparen op uw aanbestedingstrajecten?",
        headlineAccent: "Tot 50%",
        ctaLabel: "Plan een vrijblijvend gesprek",
      }}
    />
  );
}
