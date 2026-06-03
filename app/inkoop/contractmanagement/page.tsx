import SubpageTemplate from "@/components/SubpageTemplate";

export default function Page() {
  return (
    <SubpageTemplate
      chapter="5c"
      parentChapter="05"
      parentLabel="Inkoop"
      parentHref="/inkoop"
      label="Contractmanagement"
      h1="Grip op contracten begint met inzicht en overzicht"
      h1Accent="inzicht en overzicht"
      intro={{
        eyebrow: "Na de handtekening begint het pas",
        headline:
          "Het werk stopt niet bij het afsluiten van een contract — juist daarna begint het bewaken.",
        paragraphs: [
          "Voor veel organisaties stopt het werk niet bij het afsluiten van een contract. Juist daarna begint een minstens zo belangrijke fase: het bewaken van afspraken, prestaties, termijnen, risico's en verplichtingen. Contractmanagement is daarmee een essentieel onderdeel van professioneel inkopen.",
          "Toch krijgt contractmanagement binnen veel organisaties onvoldoende aandacht. Het ontbreekt vaak aan tijd, capaciteit, structuur en specialistische kennis om contracten actief en zorgvuldig te beheren.",
        ],
        sourceNote: "Bron: PIANOo, Contractmanagement",
      }}
      sections={[
        {
          type: "text",
          eyebrow: "Wat er misgaat zonder grip",
          heading:
            "Versnipperde contracten kosten tijd, geld én kansen.",
          headingAccent: "tijd, geld",
          paragraphs: [
            "Wanneer contractmanagement niet goed is ingericht, raken afspraken versnipperd, worden deadlines gemist en ontbreekt inzicht in verplichtingen, verlengmomenten, prestaties en risico's. Dat leidt niet alleen tot onrust en extra werk, maar ook tot onnodige kosten en gemiste kansen.",
            "In veel organisaties ligt contractmanagement verspreid over meerdere afdelingen of personen. Informatie staat op verschillende plekken, eigenaarschap is niet altijd duidelijk en belangrijke signalen worden te laat opgemerkt. Daardoor kost het veel tijd om overzicht te houden en neemt de afhankelijkheid van individuele kennis toe.",
            "Juist daar ontstaan risico's: contracten die stilzwijgend doorlopen, afspraken die niet worden opgevolgd, leveranciersprestaties die onvoldoende worden bewaakt of verplichtingen die uit beeld raken. Zonder structuur wordt contractmanagement reactief in plaats van strategisch.",
          ],
        },
        {
          type: "callout",
          quote:
            "Contractmanagement draait om het bewaken van de naleving van afspraken — zowel door de leverancier als door de eigen organisatie. Zonder centrale grip wordt dat een illusie.",
        },
        {
          type: "text",
          eyebrow: "Onze innovatie",
          heading:
            "Centraal inzichtelijk, beter bewaakt, minder afhankelijk van losse bestanden.",
          headingAccent: "Centraal inzichtelijk",
          paragraphs: [
            "Wij hebben een innovatieve digitale oplossing ontwikkeld die contractmanagement overzichtelijker, transparanter en efficiënter maakt voor organisaties.",
            "Met onze innovatie wordt contractinformatie centraal inzichtelijk, worden belangrijke momenten beter bewaakt en krijgen organisaties meer grip op afspraken, verantwoordelijkheden en voortgang. Daardoor wordt contractmanagement minder afhankelijk van losse bestanden, handmatige controles en versnipperde kennis.",
          ],
        },
        {
          type: "numbered-list",
          eyebrow: "Wat dat oplevert",
          heading: "Meer grip, minder risico, lagere interne belasting.",
          items: [
            {
              n: "01",
              title: "Meer overzicht in lopende contracten",
              text: "Eén plek waar elk contract leeft — status, eigenaar, deadlines en geschiedenis.",
            },
            {
              n: "02",
              title: "Beter inzicht in verplichtingen",
              text: "Wie heeft beloofd wat, wanneer, en wat staat nog open?",
            },
            {
              n: "03",
              title: "Tijdige signalering van verlengingen",
              text: "Geen contracten die stilzwijgend doorlopen of net te laat worden opgezegd.",
            },
            {
              n: "04",
              title: "Minder afhankelijkheid van personen",
              text: "Vertrek van een sleutelfiguur is geen risico meer voor contractkennis.",
            },
            {
              n: "05",
              title: "Minder fouten, minder herstelwerk",
              text: "Standaardisatie en signaleringen voorkomen kostbare missers.",
            },
            {
              n: "06",
              title: "Minder onnodige kosten",
              text: "Verlengingen, dubbele afnames en niet-nagekomen afspraken komen in beeld voordat ze schade doen.",
            },
          ],
        },
        {
          type: "text",
          eyebrow: "Voor iedere organisatie",
          heading: "Betaalbaar, toegankelijk, direct toepasbaar.",
          headingAccent: "Betaalbaar",
          paragraphs: [
            "Veel organisaties denken dat professioneel contractmanagement alleen haalbaar is met grote systemen of hoge investeringen. Wij laten zien dat dit anders kan.",
            "Onze oplossing is ontwikkeld om betaalbaar en toegankelijk te zijn voor iedere organisatie. Zo maken wij moderne digitale ondersteuning bij contractmanagement praktisch toepasbaar voor organisaties die meer grip willen, risico's willen beperken en tijd willen besparen.",
          ],
        },
      ]}
      closing={{
        headline:
          "Contractmanagement overzichtelijker, transparanter en efficiënter organiseren?",
        headlineAccent: "overzichtelijker",
        ctaLabel: "Plan een vrijblijvend gesprek",
      }}
    />
  );
}
