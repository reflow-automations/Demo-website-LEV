import SubpageTemplate from "@/components/SubpageTemplate";

export default function Page() {
  return (
    <SubpageTemplate
      chapter="4b"
      parentChapter="04"
      parentLabel="Ziekteverzuim"
      parentHref="/ziekteverzuim"
      label="Gevolgen ziekteverzuim"
      h1="Achter elke ziekmelding schuilt een kettingreactie"
      h1Accent="kettingreactie"
      intro={{
        eyebrow: "De impact gaat verder dan loondoorbetaling",
        headline:
          "De gevolgen van verzuim zijn zowel financieel als organisatorisch groot.",
        paragraphs: [
          "Ziekteverzuim raakt meer dan alleen uw kosten. Vooral kortdurend verzuim leidt direct tot verstoring van roosters, bezetting en dienstverlening — en zet teams onder onverwachte druk.",
          "Op organisatieniveau ontstaat hierdoor niet alleen financiële schade, maar ook onrust, vertraging en verminderde motivatie.",
        ],
      }}
      sections={[
        {
          type: "two-col",
          eyebrow: "De gevolgen op een rij",
          heading:
            "Twee soorten impact, beide te voorkomen met de juiste innovatie.",
          headingAccent: "te voorkomen",
          leftTitle: "Geldelijke gevolgen",
          leftItems: [
            "Loondoorbetaling bij ziekte",
            "Kosten voor vervanging of herverdeling van werk",
            "Verlies aan productiviteit",
            "Extra administratieve en begeleidingskosten",
            "Mogelijke omzet- of kwaliteitsverliezen",
          ],
          rightTitle: "Niet-geldelijke gevolgen",
          rightItems: [
            "Hogere werkdruk bij collega's",
            "Onrust en verminderde motivatie in teams",
            "Vertraging van projecten en processen",
            "Lagere klanttevredenheid",
            "Druk op leidinggevenden en continuïteit",
          ],
        },
        {
          type: "stat",
          eyebrow: "Schaal van het probleem in NL",
          value: "€8,3 mld",
          detail:
            "Totale loondoorbetalingskosten over verzuimde werkdagen in 2023. Meer dan de helft (€4,9 mld) komt voort uit psychosociale arbeidsbelasting, zoals werkdruk en ongewenste omgangsvormen.",
          sourceNote: "TNO Arbobalans 2024",
        },
        {
          type: "text",
          eyebrow: "Waarom de impact onderschat wordt",
          heading:
            "Verzuim is meer dan loondoorbetaling — het zijn de indirecte kosten die echt schade doen.",
          headingAccent: "indirecte kosten",
          paragraphs: [
            "Voor organisaties blijven de kosten van verzuim niet beperkt tot loondoorbetaling alleen. Vervanging, productiviteitsverlies, administratieve lasten en verstoring van de dagelijkse operatie zorgen ervoor dat de werkelijke impact vaak veel groter is dan zichtbaar op papier.",
            "AWVN benadrukt bovendien dat werkgevers tijdens ziekte te maken hebben met loondoorbetaling én re-integratieverplichtingen, wat de financiële druk verder vergroot.",
          ],
        },
      ]}
      closing={{
        headline:
          "Verzuim structureel verlagen én grip krijgen op uw kosten?",
        headlineAccent: "grip krijgen",
        ctaLabel: "Plan een vrijblijvend gesprek",
      }}
    />
  );
}
