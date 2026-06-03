import SubpageTemplate from "@/components/SubpageTemplate";

export default function Page() {
  return (
    <SubpageTemplate
      chapter="6a"
      parentChapter="06"
      parentLabel="Marketing"
      parentHref="/marketing"
      label="Innovatie Marketing"
      h1="Marketing die niet alleen opvalt, maar ook oplevert"
      h1Accent="oplevert"
      intro={{
        eyebrow: "Onze aanpak",
        headline:
          "Wij geloven niet in marketing op de automatische piloot.",
        paragraphs: [
          "Wij kijken verder dan de standaardmix van advertenties, posts en campagnes die op elkaar lijken. Juist door verrassende paden te bewandelen, ontstaan concepten die opvallen en beter blijven hangen.",
          "Soms zit die kracht in een slimme online activatie. Soms in een sterke offline toepassing. En vaak juist in de combinatie van beide. Want doelgroepen leven niet alleen op hun scherm, maar ook daarbuiten — in steden, op locaties, onderweg en in hun dagelijkse omgeving.",
        ],
      }}
      sections={[
        {
          type: "text",
          eyebrow: "Online én offline",
          heading:
            "Waar het verschil wordt gemaakt — in de combinatie.",
          headingAccent: "in de combinatie",
          paragraphs: [
            "Waar veel marketingpartijen zich vooral richten op online zichtbaarheid, kijkt Digital Concepts Factory bewust breder. Wij geloven dat de echte kracht vaak zit in de combinatie van online en offline marketing.",
            "Door die twee slim met elkaar te verbinden, helpen wij organisaties om niet alleen meer bereik te creëren, maar ook meer herkenning, meer impact en meer onderscheidend vermogen. Zo ontstaat marketing die niet alleen wordt gezien, maar ook blijft hangen.",
          ],
        },
        {
          type: "callout",
          quote:
            "Geen standaardaanpak. Wij nemen de tijd om een organisatie, merk, ambitie en marktomstandigheden echt te begrijpen — daarna pas bouwen.",
        },
        {
          type: "text",
          eyebrow: "Geen standaardaanpak",
          heading: "Marketing die past — niet één-maat-voor-iedereen.",
          headingAccent: "Marketing die past",
          paragraphs: [
            "Elke organisatie heeft andere doelen, een andere doelgroep en een andere markt. Daarom geloven wij niet in standaard formats of kant-en-klare campagnes die overal hetzelfde worden toegepast.",
            "Wij nemen de tijd om een organisatie, merk, ambitie en marktomstandigheden echt te begrijpen. Van daaruit ontwikkelen wij marketingconcepten op maat die aansluiten bij wat een organisatie wil bereiken — praktisch uitvoerbaar, creatief sterk en gericht op resultaat.",
          ],
        },
        {
          type: "text",
          eyebrow: "Van concept tot uitvoering",
          heading:
            "Onze kracht zit niet alleen in het bedenken — maar ook in het realiseren.",
          headingAccent: "realiseren",
          paragraphs: [
            "Digital Concepts Factory ondersteunt organisaties van strategie en conceptontwikkeling tot uitvoering, opvolging en evaluatie.",
            "Daardoor blijft het niet bij een goed idee, maar ontstaat marketing die daadwerkelijk werkt in de praktijk.",
          ],
        },
        {
          type: "text",
          eyebrow: "Marketing moet iets opleveren",
          heading:
            "Uiteindelijk draait marketing om resultaat — meer zichtbaarheid, sterker merk, meer klanten.",
          headingAccent: "resultaat",
          paragraphs: [
            "Daarom ontwikkelen wij geen campagnes om alleen maar aanwezig te zijn, maar marketingconcepten die organisaties echt vooruithelpen.",
            "Slimmer, frisser en onderscheidender dan de massa.",
          ],
        },
      ]}
      closing={{
        headline:
          "Ontdek wat een verrassende marketingaanpak voor u kan betekenen.",
        headlineAccent: "verrassende marketingaanpak",
        ctaLabel: "Plan een vrijblijvend gesprek",
      }}
    />
  );
}
