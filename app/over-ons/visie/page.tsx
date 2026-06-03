import SubpageTemplate from "@/components/SubpageTemplate";

export default function Page() {
  return (
    <SubpageTemplate
      chapter="7a"
      parentChapter="07"
      parentLabel="Over ons"
      parentHref="/over-ons"
      label="Visie en kernwaarden"
      h1="Waar wij voor staan"
      h1Accent="staan"
      intro={{
        eyebrow: "Onze overtuiging",
        headline:
          "Digitale innovatie met impact — slim bedacht, praktisch toepasbaar en gericht op resultaat.",
        paragraphs: [
          "Wij staan voor digitale innovatie die organisaties echt verder helpt. Niet als los idee, maar als concrete oplossing waarmee organisaties duurzaam vooruit kunnen.",
          "Vijf principes liggen aan elke opdracht ten grondslag.",
        ],
      }}
      sections={[
        {
          type: "numbered-list",
          eyebrow: "Vijf kernwaarden",
          heading: "Wat ons werk altijd stuurt.",
          items: [
            {
              n: "01",
              title: "Digitale innovatie moet organisaties écht vooruithelpen",
              text: "Innovatie is voor ons geen modewoord of technisch speeltje, maar een middel om echte uitdagingen op te lossen — bij talent, verzuim, inkoop en marketing. Innovatie moet bijdragen aan groei, continuïteit en resultaat.",
            },
            {
              n: "02",
              title: "Praktisch, betaalbaar en toepasbaar",
              text: "Geen ingewikkelde oplossingen die in theorie indrukwekkend zijn maar in de praktijk nauwelijks werken. Digitale innovatie moet toegankelijk en betaalbaar zijn voor organisaties die vooruit willen.",
            },
            {
              n: "03",
              title: "Eerst begrijpen, dan ontwikkelen",
              text: "Elke organisatie is anders. Daarom begint alles met goed luisteren, doorvragen en begrijpen wat er echt speelt. Pas daarna ontwikkelen wij een concept of digitale oplossing.",
            },
            {
              n: "04",
              title: "Verrassende oplossingen maken het verschil",
              text: "Organisaties winnen vaak het meeste wanneer zij durven afwijken van de standaard. Wij bewandelen bewust verrassende paden — niet om anders te zijn, maar omdat vernieuwing ontstaat waar creativiteit, technologie en lef samenkomen.",
            },
            {
              n: "05",
              title: "Resultaat is altijd het einddoel",
              text: "Meer grip. Minder kosten. Betere processen. Sterkere positionering. Meer continuïteit. Wij ontwikkelen geen losse ideeën, maar oplossingen die organisaties daadwerkelijk vooruithelpen.",
            },
          ],
        },
        {
          type: "callout",
          quote:
            "Slim bedacht, sterk uitgevoerd en altijd gericht op duurzame impact.",
        },
      ]}
      closing={{
        headline:
          "Ontdek hoe wij uw organisatie helpen groeien met slimme digitale innovatie.",
        headlineAccent: "slimme digitale innovatie",
        ctaLabel: "Plan een vrijblijvend gesprek",
      }}
    />
  );
}
