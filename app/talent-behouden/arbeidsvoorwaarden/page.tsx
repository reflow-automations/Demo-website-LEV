import SubpageTemplate from "@/components/SubpageTemplate";

export default function Page() {
  return (
    <SubpageTemplate
      chapter="3b"
      parentChapter="03"
      parentLabel="Talent behouden"
      parentHref="/talent-behouden"
      label="Standaard arbeidsvoorwaarden verleden tijd"
      h1="Standaard arbeidsvoorwaarden? Die tijd is voorbij"
      h1Accent="voorbij"
      intro={{
        eyebrow: "De arbeidsmarkt verandert",
        headline:
          "Eén generiek pakket past simpelweg niet meer bij een diverse generatie medewerkers.",
        paragraphs: [
          "De arbeidsmarkt is veranderd. De bestaande en traditionele arbeidsvoorwaarden werken steeds minder effectief, omdat zij weinig differentiatie bieden. Medewerkers verwachten geen standaardpakket meer, maar arbeidsvoorwaarden die aansluiten bij wie zij zijn, afgestemd op hun situatie, hun levensfase en wat zij belangrijk vinden.",
          "Waar de één behoefte heeft aan flexibiliteit en balans, kiest de ander voor avontuur, mobiliteit, gezondheid of financiële ruimte. Wat medewerkers zoeken, is iets dat persoonlijk relevant voelt en hen daadwerkelijk motiveert.",
        ],
      }}
      sections={[
        {
          type: "text",
          eyebrow: "Het uitvoeringsprobleem",
          heading:
            "Veel organisaties herkennen dit, maar lopen vast op de uitvoering.",
          headingAccent: "uitvoering",
          paragraphs: [
            "Hoe biedt u maatwerk aan zonder dat het complex, tijdrovend en kostbaar wordt? Dat is precies waar wij het verschil maken.",
            "Wij draaien het uitgangspunt om: niet langer bepaalt de werkgever welke extra's worden aangeboden, maar de medewerker kiest zelf wat voor hem of haar waardevol is — binnen duidelijke en beheersbare kaders.",
          ],
        },
        {
          type: "callout",
          quote:
            "Met onze digitale oplossing wordt persoonlijke keuzevrijheid eenvoudig te organiseren. Wat voorheen onhaalbaar leek, maken wij toegankelijk en betaalbaar voor iedere organisatie.",
        },
        {
          type: "text",
          eyebrow: "Maatwerk dat wél schaalbaar is",
          heading: "Het resultaat is direct merkbaar.",
          headingAccent: "direct merkbaar",
          paragraphs: [
            "Medewerkers ervaren meer regie, voelen zich gezien en kiezen bewust voor wat hen motiveert. Dat vergroot niet alleen de betrokkenheid, maar ook de loyaliteit. Deze innovatie maakt van werken iets tastbaars. En juist daar zit de echte waarde.",
            "Organisaties die deze stap zetten, zien dat medewerkers langer blijven. Dat betekent minder verloop, minder wervingsdruk en aanzienlijk lagere vervangingskosten.",
          ],
        },
        {
          type: "stat",
          eyebrow: "Minimale besparing op vervangingskosten",
          value: "€19.200",
          detail:
            "Per behouden medewerker — bij modaal inkomen en een minimale vervangingsimpact van 40%. Voor managers en specialisten loopt het bedrag fors verder op.",
          sourceNote: "Gallup · Randstad · CPB",
        },
        {
          type: "text",
          eyebrow: "Een nieuwe balans",
          heading: "Vrijheid voor uw mensen, grip op uw kosten.",
          headingAccent: "Vrijheid voor uw mensen",
          paragraphs: [
            "Zo ontstaat een nieuwe balans in werkgeverschap: meer vrijheid en motivatie voor medewerkers, gecombineerd met flexibiliteit, controle en kostenbeheersing voor de organisatie.",
            "Organisaties die hierin investeren, maken het verschil. Niet door méér te bieden, maar door beter aan te sluiten — en daarmee duurzaam te bouwen aan betrokken en loyale medewerkers.",
            "Geen standaard arbeidsvoorwaarden meer, maar een aanbod dat meebeweegt met uw mensen én met uw organisatie.",
          ],
        },
      ]}
      closing={{
        headline:
          "Benieuwd wat dit voor uw organisatie kan betekenen?",
        headlineAccent: "uw organisatie",
        ctaLabel: "Plan een vrijblijvend gesprek",
      }}
    />
  );
}
