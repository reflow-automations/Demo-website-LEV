import SubpageTemplate from "@/components/SubpageTemplate";

export default function Page() {
  return (
    <SubpageTemplate
      chapter="4a"
      parentChapter="04"
      parentLabel="Ziekteverzuim"
      parentHref="/ziekteverzuim"
      label="Innovatie ziekteverzuim"
      h1="Werkgevers zoeken al jaren naar een oplossing die wél werkt"
      h1Accent="wél werkt"
      intro={{
        eyebrow: "Het knelpunt",
        headline:
          "Hoe beïnvloed je gedrag op een positieve manier — zonder dat het ingewikkeld, duur of moeilijk uitvoerbaar wordt?",
        paragraphs: [
          "Veel werkgevers willen ziekteverzuim terugdringen, maar lopen in de praktijk tegen dezelfde uitdaging aan. Oplossingen zijn vaak te zwaar, te kostbaar of sluiten onvoldoende aan op de dagelijkse praktijk.",
          "Daardoor blijft kortdurend verzuim een terugkerend probleem waar organisaties jaar na jaar veel geld op verliezen.",
        ],
      }}
      sections={[
        {
          type: "callout",
          quote:
            "Een betaalbare digitale oplossing waarmee organisaties medewerkers gemotiveerd houden om zich niet onnodig ziek te melden — zonder ingewikkelde trajecten of hoge drempels.",
        },
        {
          type: "text",
          eyebrow: "Wat dat oplevert",
          heading:
            "Meer grip op kosten, meer rust in teams, meer continuïteit.",
          headingAccent: "rust in teams",
          paragraphs: [
            "Deze innovatie helpt organisaties om ziekteverzuim structureel terug te dringen. Minder onnodige ziekmeldingen betekent direct meer grip op kosten, meer rust in teams, minder druk op collega's en meer continuïteit in de dagelijkse operatie.",
            "De kracht van deze oplossing zit in de combinatie van betaalbaarheid, toegankelijkheid en praktische toepasbaarheid. Daarmee wordt het terugdringen van ziekteverzuim niet alleen haalbaar voor grote organisaties, maar juist ook voor werkgevers die op zoek zijn naar een oplossing die werkt én financieel verantwoord is.",
          ],
        },
        {
          type: "stat",
          eyebrow: "Wat verzuim u kost",
          value: "€4.500 — €7.000",
          detail:
            "Per medewerker per jaar — gemiddelde verzuimkosten in Nederland. Een structurele reductie heeft directe financiële én organisatorische impact.",
          sourceNote: "TNO · ArboNed",
        },
      ]}
      closing={{
        headline:
          "Ziekteverzuim structureel terugdringen én besparen op verzuimkosten?",
        headlineAccent: "structureel terugdringen",
        ctaLabel: "Plan een vrijblijvend gesprek",
      }}
    />
  );
}
