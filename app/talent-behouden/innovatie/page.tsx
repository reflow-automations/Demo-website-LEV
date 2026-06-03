import SubpageTemplate from "@/components/SubpageTemplate";

export default function Page() {
  return (
    <SubpageTemplate
      chapter="3a"
      parentChapter="03"
      parentLabel="Talent behouden"
      parentHref="/talent-behouden"
      label="Innovatie voor talentbehoud"
      h1="Wie beter aansluit, behoudt langer"
      h1Accent="beter aansluit"
      intro={{
        eyebrow: "Onze innovatie",
        headline:
          "Niet langer een vast pakket — maar een flexibel instrument dat meebeweegt met uw mensen.",
        paragraphs: [
          "Organisaties die talent willen behouden, moeten anders kijken naar arbeidsvoorwaarden. Niet als een vaststaand pakket, maar als een flexibel instrument dat meebeweegt met de behoeften van medewerkers.",
          "Wanneer medewerkers de ruimte krijgen om hun arbeidsvoorwaarden zelf samen te stellen, ontstaat er echte betrokkenheid. Mensen kiezen wat bij hen past en voelen zich daardoor meer gezien en gewaardeerd. Dat vertaalt zich direct naar loyaliteit.",
          "Medewerkers met arbeidsvoorwaarden die écht aansluiten op hun leven, hebben minder reden om verder te kijken. Ze blijven langer, zijn gemotiveerder en dragen actiever bij aan de organisatie.",
        ],
      }}
      sections={[
        {
          type: "text",
          eyebrow: "Maatwerk duur? Dat was zo.",
          heading:
            "Persoonlijke keuzevrijheid is normaal gesproken ondenkbaar en onbetaalbaar.",
          headingAccent: "onbetaalbaar",
          paragraphs: [
            "Voor veel organisaties voelt maatwerk in arbeidsvoorwaarden als iets dat in theorie aantrekkelijk is, maar in de praktijk onhaalbaar. De eerste gedachte is vaak: te complex, te duur en moeilijk te organiseren voor iedere individuele medewerker.",
            "En dat was lange tijd ook zo. Daarom bleven veel organisaties vasthouden aan standaardpakketten, terwijl medewerkers juist steeds meer behoefte kregen aan keuzevrijheid en persoonlijke relevantie.",
            "Met onze innovatie is dat fundamenteel veranderd. Wij maken het mogelijk om maatwerk in arbeidsvoorwaarden wél toegankelijk en betaalbaar te maken voor iedere organisatie — zonder complexiteit, zonder oncontroleerbare kosten, maar mét ruimte voor de individuele medewerker.",
          ],
        },
        {
          type: "callout",
          quote:
            "Persoonlijk waar het telt, beheersbaar voor de organisatie. Wat ooit een kostbare uitdaging was, is nu een slimme en haalbare oplossing.",
        },
        {
          type: "text",
          eyebrow: "Twee vliegen, één klap",
          heading: "Meer loyaliteit én lagere kosten.",
          headingAccent: "lagere kosten",
          paragraphs: [
            "Medewerkers krijgen de vrijheid om te kiezen wat bij hen past. Daardoor voelen zij zich meer betrokken en gewaardeerd, wat direct leidt tot een hogere loyaliteit en een sterkere binding met de organisatie.",
            "En dat heeft een concreet effect. Wanneer medewerkers langer blijven, dalen de vervangingskosten aanzienlijk. Minder uitstroom betekent minder werving, minder inwerktijd en minder verlies van kennis en ervaring.",
            "Een oplossing die niet alleen uw medewerkers sterker bindt, maar ook uw organisatie financieel gezonder maakt. Investeren in maatwerk is investeren in behoud — en dat betaalt zich terug.",
          ],
        },
      ]}
      closing={{
        headline:
          "Ontdek hoe onze innovatie u helpt talent te behouden en vervangingskosten te verlagen.",
        headlineAccent: "talent te behouden",
        ctaLabel: "Plan een vrijblijvend gesprek",
      }}
    />
  );
}
