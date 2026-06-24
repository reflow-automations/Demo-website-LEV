/**
 * Juridische documenten van Digital Concepts Factory B.V. als gestructureerde
 * data, zodat één render-component (`components/LegalPage.tsx`) ze consistent
 * toont. NL-only: de teksten zijn juridisch bindend in het Nederlands.
 *
 * Bron: de door DCF aangeleverde docx-bestanden (versie 1.0, juni 2026).
 * Tekst is verbatim overgenomen; alleen en-dashes zijn vervangen door gewone
 * koppeltekens en tab-gescheiden adresregels zijn netjes uitgeschreven.
 */

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: [string, string]; rows: [string, string][] };

export type LegalSection = {
  heading?: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  version: string;
  intro?: string;
  sections: LegalSection[];
};

const VERSION = "Versie 1.0, juni 2026";

export const privacyDoc: LegalDoc = {
  title: "Privacyverklaring",
  version: VERSION,
  sections: [
    {
      heading: "1. Wie zijn wij?",
      blocks: [
        {
          type: "p",
          text: "Digital Concepts Factory B.V. (“DCF”) ontwikkelt en levert innovatieve oplossingen op het gebied van Human Resources, Inkoop, Marketing, Software, Artificial Intelligence (AI), Websites, SaaS-oplossingen en digitale platformen.",
        },
        {
          type: "p",
          text: "DCF respecteert uw privacy en verwerkt persoonsgegevens zorgvuldig, vertrouwelijk en in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).",
        },
        {
          type: "p",
          text: "Verantwoordelijke voor de verwerking van persoonsgegevens:",
        },
        {
          type: "ul",
          items: [
            "Digital Concepts Factory B.V.",
            "KvK-nummer: 55540325",
            "Vestigingsadres: Stationsplein 45 te Rotterdam",
            "E-mailadres: info@digitalconceptsfactory.nl",
            "Telefoonnummer: +31 (0)10 786 56 84",
          ],
        },
      ],
    },
    {
      heading: "2. Welke persoonsgegevens verwerken wij?",
      blocks: [
        {
          type: "p",
          text: "Afhankelijk van uw contact met DCF kunnen wij de volgende persoonsgegevens verwerken:",
        },
        { type: "h3", text: "Contactgegevens" },
        {
          type: "ul",
          items: [
            "Voor- en achternaam",
            "Bedrijfsnaam",
            "Functie",
            "E-mailadres",
            "Telefoonnummer",
            "Adresgegevens",
          ],
        },
        { type: "h3", text: "Websitegegevens" },
        {
          type: "ul",
          items: [
            "IP-adres",
            "Browsergegevens",
            "Apparaatgegevens",
            "Cookies",
            "Websitegedrag",
            "Klikgedrag",
          ],
        },
        { type: "h3", text: "Nieuwsbriefgegevens" },
        { type: "ul", items: ["Naam", "E-mailadres", "Open- en klikgedrag"] },
        { type: "h3", text: "Klantgegevens" },
        {
          type: "ul",
          items: [
            "Factuurgegevens",
            "Betalingsgegevens",
            "Correspondentie",
            "Contractgegevens",
          ],
        },
        { type: "h3", text: "Sollicitatie- en recruitmentgegevens" },
        {
          type: "ul",
          items: [
            "CV",
            "Motivatiebrief",
            "Opleidingen",
            "Werkervaring",
            "Referenties (indien verstrekt)",
          ],
        },
        { type: "h3", text: "SaaS- en softwaregegevens" },
        {
          type: "ul",
          items: [
            "Gebruikersnaam",
            "Login-gegevens",
            "Activiteiten binnen applicaties",
            "Gebruiksstatistieken",
            "Logbestanden",
          ],
        },
      ],
    },
    {
      heading: "3. Waarom verwerken wij persoonsgegevens?",
      blocks: [
        {
          type: "p",
          text: "DCF verwerkt persoonsgegevens uitsluitend voor legitieme doeleinden.",
        },
        { type: "h3", text: "Uitvoering van overeenkomsten" },
        {
          type: "ul",
          items: [
            "Leveren van diensten",
            "Uitvoeren van opdrachten",
            "Klantenondersteuning",
            "Facturatie",
          ],
        },
        { type: "h3", text: "Communicatie" },
        {
          type: "ul",
          items: [
            "Beantwoorden van vragen",
            "Verzenden van offertes",
            "Verzenden van informatie",
            "Klantcontact",
          ],
        },
        { type: "h3", text: "Marketing" },
        {
          type: "ul",
          items: [
            "Nieuwsbrieven",
            "Evenementen",
            "Productinformatie",
            "Dienstverlening",
          ],
        },
        { type: "h3", text: "Recruitment" },
        {
          type: "ul",
          items: [
            "Beoordelen van kandidaten",
            "Contact onderhouden met kandidaten",
            "Werving- en selectieactiviteiten",
          ],
        },
        { type: "h3", text: "Software en SaaS" },
        {
          type: "ul",
          items: [
            "Gebruikersbeheer",
            "Authenticatie",
            "Beveiliging",
            "Analyse van gebruik",
          ],
        },
        { type: "h3", text: "Wettelijke verplichtingen" },
        {
          type: "ul",
          items: [
            "Belastingwetgeving",
            "Boekhoudkundige verplichtingen",
            "Wettelijke verzoeken van overheidsinstanties",
          ],
        },
      ],
    },
    {
      heading: "4. Op welke grondslag verwerken wij persoonsgegevens?",
      blocks: [
        {
          type: "p",
          text: "DCF verwerkt persoonsgegevens op basis van één of meer van de volgende grondslagen:",
        },
        {
          type: "ul",
          items: [
            "Uitvoering van een overeenkomst;",
            "Wettelijke verplichting;",
            "Toestemming;",
            "Gerechtvaardigd belang.",
          ],
        },
        { type: "p", text: "Onder gerechtvaardigd belang verstaan wij onder meer:" },
        {
          type: "ul",
          items: [
            "Marketingactiviteiten richting zakelijke relaties;",
            "Verbetering van dienstverlening;",
            "Beveiliging van systemen;",
            "Fraudepreventie;",
            "Bedrijfsvoering.",
          ],
        },
      ],
    },
    {
      heading: "5. Nieuwsbrieven en marketing",
      blocks: [
        {
          type: "p",
          text: "Wanneer u zich aanmeldt voor onze nieuwsbrief gebruiken wij uw gegevens uitsluitend om u informatie te sturen over:",
        },
        {
          type: "ul",
          items: [
            "Innovaties;",
            "Productontwikkelingen;",
            "Diensten;",
            "Evenementen;",
            "Artikelen;",
            "Nieuws.",
          ],
        },
        {
          type: "p",
          text: "U kunt zich op ieder moment uitschrijven via de afmeldlink onderaan iedere nieuwsbrief.",
        },
      ],
    },
    {
      heading: "6. Contactformulier",
      blocks: [
        {
          type: "p",
          text: "Wanneer u een contactformulier invult, gebruiken wij uw gegevens uitsluitend om contact met u op te nemen en uw aanvraag af te handelen.",
        },
        { type: "p", text: "Deze gegevens worden niet verkocht aan derden." },
      ],
    },
    {
      heading: "7. Afspraakplanning",
      blocks: [
        {
          type: "p",
          text: "DCF kan gebruikmaken van externe afspraaksoftware zoals Calendly of Cal.com.",
        },
        {
          type: "p",
          text: "Wanneer u een afspraak plant, worden persoonsgegevens verwerkt zoals:",
        },
        {
          type: "ul",
          items: [
            "Naam;",
            "E-mailadres;",
            "Organisatie;",
            "Telefoonnummer;",
            "Afspraakinformatie.",
          ],
        },
        {
          type: "p",
          text: "Deze verwerking vindt plaats op basis van uw verzoek om een afspraak te maken.",
        },
      ],
    },
    {
      heading: "8. AI-toepassingen",
      blocks: [
        {
          type: "p",
          text: "DCF maakt gebruik van Artificial Intelligence (AI) binnen haar dienstverlening en softwareoplossingen.",
        },
        { type: "p", text: "AI-systemen kunnen gegevens verwerken om:" },
        {
          type: "ul",
          items: [
            "Antwoorden te genereren;",
            "Analyses uit te voeren;",
            "Processen te automatiseren;",
            "Gebruikerservaringen te verbeteren.",
          ],
        },
        {
          type: "p",
          text: "DCF streeft ernaar om AI-systemen zorgvuldig, transparant en verantwoord in te zetten.",
        },
        {
          type: "p",
          text: "Hoewel wij passende maatregelen nemen, kunnen AI-uitkomsten onjuist, onvolledig of verouderd zijn. Gebruikers blijven verantwoordelijk voor het controleren van AI-uitkomsten.",
        },
      ],
    },
    {
      heading: "9. Cookies",
      blocks: [
        { type: "p", text: "Onze website maakt gebruik van cookies." },
        { type: "h3", text: "Functionele cookies" },
        { type: "p", text: "Noodzakelijk voor het functioneren van de website." },
        { type: "h3", text: "Analytische cookies" },
        { type: "p", text: "Voor het verbeteren van de website." },
        { type: "h3", text: "Marketingcookies" },
        { type: "p", text: "Voor marketing- en advertentiedoeleinden." },
        {
          type: "p",
          text: "Indien wettelijk vereist vragen wij vooraf toestemming voor het plaatsen van cookies. Een aparte Cookieverklaring kan aanvullende informatie bevatten.",
        },
      ],
    },
    {
      heading: "10. Met wie delen wij persoonsgegevens?",
      blocks: [
        { type: "p", text: "DCF verkoopt geen persoonsgegevens." },
        { type: "p", text: "Gegevens kunnen uitsluitend worden gedeeld met:" },
        {
          type: "ul",
          items: [
            "Hostingproviders;",
            "Cloudleveranciers;",
            "E-mailproviders;",
            "Nieuwsbriefsoftware;",
            "CRM-systemen;",
            "Betaaldienstverleners;",
            "IT-leveranciers;",
            "Boekhoudsoftware;",
            "Juridische adviseurs;",
            "Overheidsinstanties indien wettelijk verplicht.",
          ],
        },
        { type: "p", text: "Wij sluiten waar nodig verwerkersovereenkomsten af." },
      ],
    },
    {
      heading: "11. Internationale doorgifte",
      blocks: [
        {
          type: "p",
          text: "Sommige leveranciers kunnen gevestigd zijn buiten de Europese Economische Ruimte (EER).",
        },
        {
          type: "p",
          text: "Wanneer persoonsgegevens buiten de EER worden verwerkt, zorgen wij voor passende waarborgen conform de AVG, waaronder:",
        },
        {
          type: "ul",
          items: [
            "Europese Model Clauses (SCC’s);",
            "Adequaatheidsbesluiten;",
            "Andere wettelijk toegestane mechanismen.",
          ],
        },
      ],
    },
    {
      heading: "12. Beveiliging",
      blocks: [
        {
          type: "p",
          text: "DCF neemt passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen:",
        },
        {
          type: "ul",
          items: [
            "Verlies;",
            "Diefstal;",
            "Onbevoegde toegang;",
            "Misbruik;",
            "Onrechtmatige verwerking.",
          ],
        },
        { type: "p", text: "Voorbeelden van maatregelen:" },
        {
          type: "ul",
          items: [
            "SSL/TLS-versleuteling;",
            "Toegangsbeveiliging;",
            "Tweefactorauthenticatie waar mogelijk;",
            "Logging;",
            "Back-ups;",
            "Antivirus- en beveiligingssoftware.",
          ],
        },
      ],
    },
    {
      heading: "13. Bewaartermijnen",
      blocks: [
        {
          type: "p",
          text: "DCF bewaart persoonsgegevens niet langer dan noodzakelijk. Indicatieve bewaartermijnen:",
        },
        {
          type: "table",
          head: ["Gegevenstype", "Bewaartermijn"],
          rows: [
            ["Contactaanvragen", "2 jaar"],
            ["Offertes", "7 jaar"],
            ["Facturen", "7 jaar"],
            ["Klantdossiers", "7 jaar na einde overeenkomst"],
            ["Nieuwsbriefgegevens", "Tot uitschrijving"],
            [
              "Sollicitatiegegevens",
              "Maximaal 4 weken na afronding procedure, tenzij toestemming voor 1 jaar wordt gegeven",
            ],
          ],
        },
        {
          type: "p",
          text: "Indien wettelijke verplichtingen langere bewaartermijnen voorschrijven, gelden deze wettelijke termijnen.",
        },
      ],
    },
    {
      heading: "14. Uw rechten",
      blocks: [
        { type: "p", text: "U heeft het recht om:" },
        {
          type: "ul",
          items: [
            "Uw gegevens in te zien;",
            "Uw gegevens te corrigeren;",
            "Uw gegevens te laten verwijderen;",
            "Verwerking te beperken;",
            "Bezwaar te maken;",
            "Uw gegevens over te dragen;",
            "Uw toestemming in te trekken.",
          ],
        },
        {
          type: "p",
          text: "Verzoeken kunnen worden ingediend via: info@digitalconceptsfactory.nl",
        },
        {
          type: "p",
          text: "DCF kan aanvullende verificatie vragen voordat een verzoek wordt behandeld.",
        },
      ],
    },
    {
      heading: "15. Klachten",
      blocks: [
        {
          type: "p",
          text: "Indien u niet tevreden bent over de verwerking van uw persoonsgegevens, kunt u contact met ons opnemen.",
        },
        {
          type: "p",
          text: "Daarnaast heeft u het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens, Postbus 93374, 2509 AJ Den Haag, www.autoriteitpersoonsgegevens.nl.",
        },
      ],
    },
    {
      heading: "16. Wijzigingen",
      blocks: [
        {
          type: "p",
          text: "DCF behoudt zich het recht voor deze Privacyverklaring te wijzigen. De meest actuele versie wordt gepubliceerd op de website van DCF.",
        },
        {
          type: "p",
          text: "Wij adviseren u deze Privacyverklaring regelmatig te raadplegen.",
        },
      ],
    },
    {
      heading: "17. Contact",
      blocks: [
        {
          type: "p",
          text: "Voor vragen over deze Privacyverklaring kunt u contact opnemen met:",
        },
        {
          type: "ul",
          items: [
            "Digital Concepts Factory B.V.",
            "E-mail: info@digitalconceptsfactory.nl",
            "Telefoon: +31 (0)10 786 56 84",
            "Website: www.digitalconceptsfactory.nl",
          ],
        },
      ],
    },
  ],
};

export const disclaimerDoc: LegalDoc = {
  title: "Disclaimer",
  version: VERSION,
  intro:
    "Door deze website te bezoeken en/of de op deze website aangeboden informatie te gebruiken, verklaart u zich akkoord met de onderstaande voorwaarden.",
  sections: [
    {
      heading: "1. Algemeen",
      blocks: [
        { type: "p", text: "Deze website wordt beheerd door Digital Concepts Factory B.V. (hierna: “DCF”)." },
        {
          type: "p",
          text: "DCF spant zich in om de inhoud van deze website zorgvuldig samen te stellen en actueel te houden. Ondanks deze zorgvuldigheid kunnen onjuistheden, onvolledigheden of verouderde informatie voorkomen.",
        },
        {
          type: "p",
          text: "Aan de inhoud van deze website kunnen geen rechten worden ontleend.",
        },
      ],
    },
    {
      heading: "2. Informatief karakter",
      blocks: [
        {
          type: "p",
          text: "De informatie op deze website is uitsluitend bedoeld voor algemene informatiedoeleinden.",
        },
        { type: "p", text: "De informatie vormt nadrukkelijk geen:" },
        {
          type: "ul",
          items: [
            "juridisch advies;",
            "financieel advies;",
            "fiscaal advies;",
            "HR-advies;",
            "aanbestedingsadvies;",
            "inkoopadvies;",
            "arbeidsrechtelijk advies;",
            "medisch advies;",
            "bedrijfskundig advies.",
          ],
        },
        {
          type: "p",
          text: "Bezoekers dienen zich voor specifieke situaties altijd te laten adviseren door een gekwalificeerde deskundige.",
        },
      ],
    },
    {
      heading: "3. Resultaten en besparingen",
      blocks: [
        {
          type: "p",
          text: "Op deze website kunnen voorbeelden, berekeningen, praktijkvoorbeelden, prognoses, onderzoeken, statistieken, besparingen, rendementen en andere resultaten worden genoemd. Deze informatie is uitsluitend bedoeld ter illustratie.",
        },
        { type: "p", text: "DCF garandeert niet dat:" },
        {
          type: "ul",
          items: [
            "dezelfde resultaten worden behaald;",
            "genoemde besparingen daadwerkelijk worden gerealiseerd;",
            "personeelsverloop wordt verminderd;",
            "ziekteverzuim wordt verlaagd;",
            "kostenbesparingen worden gerealiseerd;",
            "aanbestedingskosten worden verminderd;",
            "contractmanagementresultaten verbeteren;",
            "marketingresultaten worden behaald.",
          ],
        },
        {
          type: "p",
          text: "Werkelijke resultaten zijn afhankelijk van diverse factoren, waaronder organisatiegrootte, marktomstandigheden, implementatie, gebruikersgedrag en overige omstandigheden buiten de invloedssfeer van DCF.",
        },
      ],
    },
    {
      heading: "4. AI en digitale innovaties",
      blocks: [
        {
          type: "p",
          text: "DCF ontwikkelt en gebruikt Artificial Intelligence (AI), algoritmen, automatiseringen en andere digitale innovaties binnen haar dienstverlening en softwareproducten.",
        },
        {
          type: "p",
          text: "Hoewel deze technologieën zorgvuldig worden ontwikkeld en getest, kunnen uitkomsten:",
        },
        {
          type: "ul",
          items: [
            "onjuist zijn;",
            "onvolledig zijn;",
            "verouderd zijn;",
            "niet aansluiten bij de specifieke situatie van de gebruiker.",
          ],
        },
        {
          type: "p",
          text: "DCF geeft geen garantie dat AI-uitkomsten foutloos, volledig of geschikt zijn voor een specifiek doel.",
        },
        {
          type: "p",
          text: "Gebruikers blijven altijd zelf verantwoordelijk voor het beoordelen, controleren en verifiëren van door AI of software gegenereerde informatie.",
        },
      ],
    },
    {
      heading: "5. Beschikbaarheid van de website",
      blocks: [
        { type: "p", text: "DCF streeft naar een optimale beschikbaarheid van de website." },
        { type: "p", text: "DCF garandeert echter niet dat de website:" },
        {
          type: "ul",
          items: [
            "zonder onderbreking beschikbaar is;",
            "foutloos functioneert;",
            "vrij is van virussen of andere schadelijke componenten;",
            "altijd toegankelijk blijft.",
          ],
        },
        {
          type: "p",
          text: "DCF behoudt zich het recht voor de website of onderdelen daarvan op ieder moment te wijzigen, te beperken of tijdelijk buiten gebruik te stellen.",
        },
      ],
    },
    {
      heading: "6. Externe links",
      blocks: [
        { type: "p", text: "Deze website kan links bevatten naar websites van derden." },
        {
          type: "p",
          text: "DCF heeft geen zeggenschap over de inhoud, beschikbaarheid, veiligheid of privacypraktijken van deze externe websites.",
        },
        { type: "p", text: "DCF aanvaardt geen aansprakelijkheid voor:" },
        {
          type: "ul",
          items: [
            "de inhoud van externe websites;",
            "de juistheid van informatie op externe websites;",
            "producten of diensten van derden;",
            "schade die voortvloeit uit het gebruik van externe websites.",
          ],
        },
        {
          type: "p",
          text: "Het bezoeken van externe websites gebeurt volledig op eigen risico.",
        },
      ],
    },
    {
      heading: "7. Intellectuele eigendomsrechten",
      blocks: [
        {
          type: "p",
          text: "Alle intellectuele eigendomsrechten met betrekking tot deze website berusten bij DCF of haar licentiegevers.",
        },
        { type: "p", text: "Hieronder vallen onder meer:" },
        {
          type: "ul",
          items: [
            "teksten;",
            "logo’s;",
            "handelsnamen;",
            "beeldmateriaal;",
            "ontwerpen;",
            "software;",
            "concepten;",
            "databases;",
            "broncodes;",
            "documentatie;",
            "modellen;",
            "AI-oplossingen;",
            "digitale innovaties.",
          ],
        },
        {
          type: "p",
          text: "Zonder voorafgaande schriftelijke toestemming van DCF is het niet toegestaan om materiaal van deze website geheel of gedeeltelijk te:",
        },
        {
          type: "ul",
          items: [
            "kopiëren;",
            "publiceren;",
            "verspreiden;",
            "bewerken;",
            "verveelvoudigen;",
            "exploiteren.",
          ],
        },
        {
          type: "p",
          text: "Dit geldt met uitzondering van situaties waarin dit wettelijk is toegestaan.",
        },
      ],
    },
    {
      heading: "8. Aansprakelijkheid",
      blocks: [
        {
          type: "p",
          text: "DCF is niet aansprakelijk voor enige directe of indirecte schade die voortvloeit uit:",
        },
        {
          type: "ul",
          items: [
            "het gebruik van deze website;",
            "het gebruik van informatie op deze website;",
            "het niet beschikbaar zijn van de website;",
            "onjuiste of onvolledige informatie;",
            "het gebruik van software, tools of digitale innovaties van DCF;",
            "beslissingen die worden genomen op basis van informatie van deze website.",
          ],
        },
        {
          type: "p",
          text: "Voor zover wettelijk toegestaan wordt iedere aansprakelijkheid uitgesloten.",
        },
        {
          type: "p",
          text: "Indien aansprakelijkheid toch wordt vastgesteld, is deze beperkt tot het bedrag dat in het betreffende geval door de aansprakelijkheidsverzekering van DCF wordt uitgekeerd.",
        },
      ],
    },
    {
      heading: "9. Geen garantie op dienstverlening",
      blocks: [
        {
          type: "p",
          text: "Informatie op deze website vormt geen aanbod of overeenkomst.",
        },
        { type: "p", text: "Een overeenkomst met DCF komt uitsluitend tot stand nadat:" },
        {
          type: "ul",
          items: [
            "partijen schriftelijk overeenstemming hebben bereikt; of",
            "een overeenkomst door beide partijen is ondertekend.",
          ],
        },
        {
          type: "p",
          text: "Aan beschrijvingen van producten, innovaties, software, functionaliteiten of toekomstige ontwikkelingen kunnen geen rechten worden ontleend.",
        },
        {
          type: "p",
          text: "DCF behoudt zich het recht voor producten, diensten en functionaliteiten op ieder moment te wijzigen of niet beschikbaar te stellen.",
        },
      ],
    },
    {
      heading: "10. Privacy",
      blocks: [
        {
          type: "p",
          text: "Op het gebruik van persoonsgegevens is de Privacyverklaring van Digital Concepts Factory B.V. van toepassing. Wij adviseren bezoekers deze Privacyverklaring zorgvuldig door te lezen.",
        },
      ],
    },
    {
      heading: "11. Toepasselijk recht",
      blocks: [
        {
          type: "p",
          text: "Op deze disclaimer is uitsluitend Nederlands recht van toepassing.",
        },
        {
          type: "p",
          text: "Geschillen die voortvloeien uit of verband houden met deze website worden voorgelegd aan de bevoegde rechter in Nederland.",
        },
      ],
    },
    {
      heading: "12. Wijzigingen",
      blocks: [
        {
          type: "p",
          text: "DCF behoudt zich het recht voor deze disclaimer op ieder moment te wijzigen. De meest actuele versie wordt gepubliceerd op deze website.",
        },
      ],
    },
    {
      heading: "Contact",
      blocks: [
        { type: "p", text: "Heeft u vragen over deze disclaimer?" },
        {
          type: "ul",
          items: [
            "Digital Concepts Factory B.V.",
            "E-mail: info@digitalconceptsfactory.nl",
            "Website: www.digitalconceptsfactory.nl",
          ],
        },
      ],
    },
  ],
};

export const voorwaardenDoc: LegalDoc = {
  title: "Algemene voorwaarden",
  version: VERSION,
  sections: [
    {
      heading: "Artikel 1 - Definities",
      blocks: [
        { type: "p", text: "In deze Algemene Voorwaarden wordt verstaan onder:" },
        {
          type: "ul",
          items: [
            "DCF: Digital Concepts Factory B.V., gevestigd te Rotterdam en ingeschreven bij de Kamer van Koophandel.",
            "Opdrachtgever: iedere natuurlijke persoon of rechtspersoon die met DCF een overeenkomst sluit of wenst te sluiten.",
            "Overeenkomst: iedere overeenkomst tussen DCF en Opdrachtgever.",
            "Diensten: alle door DCF aangeboden diensten, waaronder maar niet beperkt tot consultancy, advisering, recruitment, employer branding, marketing, inkoopadvies, aanbestedingsadvies, contractmanagement, softwareontwikkeling, SaaS-oplossingen, AI-oplossingen, websites, digitale platformen, trainingen en overige digitale innovaties.",
            "Software: alle software, applicaties, SaaS-oplossingen, AI-toepassingen, websites, dashboards, platformen en andere digitale producten die door DCF worden ontwikkeld, geleverd of beheerd.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 2 - Toepasselijkheid",
      blocks: [
        {
          type: "ul",
          items: [
            "2.1 Deze Algemene Voorwaarden zijn van toepassing op alle offertes, aanbiedingen, overeenkomsten, werkzaamheden en leveringen van DCF.",
            "2.2 Afwijkingen zijn uitsluitend geldig indien deze schriftelijk door DCF zijn bevestigd.",
            "2.3 Eventuele algemene voorwaarden van Opdrachtgever worden uitdrukkelijk van de hand gewezen.",
            "2.4 Indien een bepaling nietig blijkt te zijn, blijven de overige bepalingen volledig van kracht.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 3 - Offertes en aanbiedingen",
      blocks: [
        {
          type: "ul",
          items: [
            "3.1 Alle offertes van DCF zijn vrijblijvend tenzij uitdrukkelijk anders vermeld.",
            "3.2 Offertes zijn geldig gedurende 30 dagen.",
            "3.3 Kennelijke fouten of vergissingen in offertes binden DCF niet.",
            "3.4 DCF is gerechtigd haar tarieven tussentijds aan te passen indien sprake is van gewijzigde omstandigheden.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 4 - Totstandkoming overeenkomst",
      blocks: [
        { type: "p", text: "4.1 Een overeenkomst komt tot stand nadat:" },
        {
          type: "ul",
          items: [
            "de offerte schriftelijk is geaccepteerd;",
            "de overeenkomst digitaal is ondertekend;",
            "of DCF feitelijk met de werkzaamheden is gestart.",
          ],
        },
        { type: "p", text: "4.2 DCF mag opdrachten weigeren zonder opgaaf van redenen." },
      ],
    },
    {
      heading: "Artikel 5 - Uitvoering van de overeenkomst",
      blocks: [
        {
          type: "ul",
          items: [
            "5.1 DCF zal de overeenkomst naar beste inzicht en vermogen uitvoeren.",
            "5.2 Op DCF rust uitsluitend een inspanningsverplichting, tenzij schriftelijk uitdrukkelijk een resultaatsverplichting is overeengekomen.",
            "5.3 Door DCF genoemde resultaten, besparingen, rendementen, conversies, kostenreducties, verzuimreducties of andere prognoses gelden uitsluitend als indicaties.",
            "5.4 DCF garandeert niet dat specifieke commerciële, financiële of operationele resultaten worden gerealiseerd.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 6 - Medewerking opdrachtgever",
      blocks: [
        {
          type: "ul",
          items: [
            "6.1 Opdrachtgever verstrekt tijdig alle benodigde gegevens.",
            "6.2 Vertraging als gevolg van ontbrekende informatie komt voor rekening van Opdrachtgever.",
            "6.3 DCF is niet aansprakelijk voor schade als gevolg van onjuiste of onvolledige informatie van Opdrachtgever.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 7 - Recruitment, HR en Employer Branding",
      blocks: [
        {
          type: "ul",
          items: [
            "7.1 DCF verricht werkzaamheden op basis van een inspanningsverplichting.",
            "7.2 DCF garandeert niet dat kandidaten worden aangenomen.",
            "7.3 DCF garandeert niet dat medewerkers in dienst blijven.",
            "7.4 DCF is niet aansprakelijk voor gedragingen, prestaties of uitlatingen van kandidaten.",
            "7.5 Eventuele vervangingsgaranties gelden uitsluitend indien schriftelijk overeengekomen.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 8 - Marketingdiensten",
      blocks: [
        {
          type: "ul",
          items: [
            "8.1 DCF garandeert geen specifiek aantal leads, sollicitanten, klanten, omzetgroei of conversies.",
            "8.2 Resultaten van campagnes zijn mede afhankelijk van marktomstandigheden, concurrentie, doelgroepgedrag en factoren buiten de invloedssfeer van DCF.",
            "8.3 DCF mag gebruik maken van derden voor advertentieplaatsingen, media-inkoop en campagnebeheer.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 9 - Inkoop-, aanbestedings- en contractmanagementdiensten",
      blocks: [
        {
          type: "ul",
          items: [
            "9.1 DCF ondersteunt opdrachtgevers bij inkoop- en aanbestedingstrajecten.",
            "9.2 DCF verstrekt geen juridisch advies tenzij uitdrukkelijk schriftelijk overeengekomen.",
            "9.3 Opdrachtgever blijft zelf verantwoordelijk voor besluiten omtrent aanbestedingen, contracten en leveranciersselecties.",
            "9.4 DCF is niet aansprakelijk voor aanbestedingsgeschillen, bezwaarprocedures of gerechtelijke procedures.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 10 - Software en SaaS",
      blocks: [
        {
          type: "ul",
          items: [
            "10.1 DCF verleent uitsluitend een gebruiksrecht op software.",
            "10.2 Het intellectueel eigendom blijft volledig eigendom van DCF.",
            "10.3 DCF garandeert niet dat software foutloos of ononderbroken functioneert.",
            "10.4 Onderhoudswerkzaamheden mogen zonder voorafgaande aankondiging worden uitgevoerd.",
            "10.5 DCF mag functionaliteiten wijzigen, uitbreiden of verwijderen.",
            "10.6 Het is niet toegestaan software te kopiëren, reverse engineeren of te decompileren.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 11 - AI-oplossingen",
      blocks: [
        {
          type: "ul",
          items: [
            "11.1 AI-oplossingen van DCF genereren resultaten op basis van algoritmen en beschikbare data.",
            "11.2 DCF garandeert niet dat AI-uitkomsten volledig juist, actueel of foutloos zijn.",
            "11.3 Opdrachtgever blijft verantwoordelijk voor controle van AI-gegenereerde output.",
            "11.4 DCF is niet aansprakelijk voor beslissingen die worden genomen op basis van AI-output.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 12 - Websites en digitale platformen",
      blocks: [
        {
          type: "ul",
          items: [
            "12.1 DCF streeft naar optimale beschikbaarheid van websites en platformen.",
            "12.2 Tijdelijke storingen geven geen recht op schadevergoeding.",
            "12.3 Opdrachtgever is verantwoordelijk voor aangeleverde content.",
            "12.4 Opdrachtgever vrijwaart DCF voor claims van derden met betrekking tot aangeleverde content.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 13 - Abonnementen",
      blocks: [
        {
          type: "ul",
          items: [
            "13.1 Abonnementen worden aangegaan voor de overeengekomen periode.",
            "13.2 Abonnementen worden automatisch verlengd tenzij schriftelijk opgezegd.",
            "13.3 Opzegging dient uiterlijk één maand voor afloop plaats te vinden.",
            "13.4 Reeds betaalde bedragen worden niet gerestitueerd.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 14 - Tarieven en betalingen",
      blocks: [
        {
          type: "ul",
          items: [
            "14.1 Alle prijzen zijn exclusief BTW tenzij anders vermeld.",
            "14.2 Facturen dienen binnen 14 dagen te worden voldaan.",
            "14.3 Bij te late betaling is Opdrachtgever van rechtswege in verzuim.",
            "14.4 Vanaf de vervaldatum is wettelijke handelsrente verschuldigd.",
            "14.5 Alle incassokosten komen voor rekening van Opdrachtgever.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 15 - Intellectuele eigendomsrechten",
      blocks: [
        { type: "p", text: "15.1 Alle intellectuele eigendomsrechten blijven eigendom van DCF." },
        { type: "p", text: "15.2 Hieronder vallen onder meer:" },
        {
          type: "ul",
          items: [
            "software;",
            "websites;",
            "AI-modellen;",
            "broncode;",
            "ontwerpen;",
            "rapportages;",
            "methodieken;",
            "databases;",
            "documentatie;",
            "concepten;",
            "campagnes.",
          ],
        },
        {
          type: "p",
          text: "15.3 Zonder schriftelijke toestemming mogen deze niet worden gekopieerd, verspreid of aangepast.",
        },
      ],
    },
    {
      heading: "Artikel 16 - Geheimhouding",
      blocks: [
        {
          type: "ul",
          items: [
            "16.1 Partijen behandelen vertrouwelijke informatie strikt vertrouwelijk.",
            "16.2 Deze verplichting blijft ook na beëindiging van de overeenkomst bestaan.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 17 - Privacy en AVG",
      blocks: [
        {
          type: "ul",
          items: [
            "17.1 DCF verwerkt persoonsgegevens conform de AVG.",
            "17.2 Indien noodzakelijk sluiten partijen een verwerkersovereenkomst.",
            "17.3 Opdrachtgever garandeert dat verstrekte persoonsgegevens rechtmatig zijn verkregen.",
            "17.4 DCF is niet aansprakelijk voor overtredingen van privacywetgeving door Opdrachtgever.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 18 - Aansprakelijkheid",
      blocks: [
        {
          type: "ul",
          items: [
            "18.1 Iedere aansprakelijkheid van DCF is beperkt tot het bedrag dat door haar aansprakelijkheidsverzekering wordt uitgekeerd.",
            "18.2 Indien geen uitkering plaatsvindt, is de aansprakelijkheid beperkt tot maximaal het factuurbedrag van de betreffende opdracht.",
            "18.3 Bij duurovereenkomsten geldt een maximum van de in de laatste twaalf maanden gefactureerde bedragen.",
          ],
        },
        { type: "p", text: "18.4 DCF is nooit aansprakelijk voor:" },
        {
          type: "ul",
          items: [
            "gevolgschade;",
            "omzetverlies;",
            "winstderving;",
            "reputatieschade;",
            "gemiste besparingen;",
            "gemiste kansen;",
            "indirecte schade;",
            "dataverlies.",
          ],
        },
        {
          type: "p",
          text: "18.5 Iedere aanspraak vervalt twaalf maanden nadat de schade bekend is geworden.",
        },
      ],
    },
    {
      heading: "Artikel 19 - Overmacht",
      blocks: [
        {
          type: "p",
          text: "19.1 DCF is niet aansprakelijk voor tekortkomingen als gevolg van overmacht.",
        },
        { type: "p", text: "19.2 Onder overmacht wordt onder meer verstaan:" },
        {
          type: "ul",
          items: [
            "internetstoringen;",
            "cyberaanvallen;",
            "stroomuitval;",
            "ziekte;",
            "pandemieën;",
            "overheidsmaatregelen;",
            "stakingen;",
            "storingen bij leveranciers.",
          ],
        },
        { type: "p", text: "19.3 Tijdens overmacht worden verplichtingen opgeschort." },
      ],
    },
    {
      heading: "Artikel 20 - Opschorting en beëindiging",
      blocks: [
        { type: "p", text: "20.1 DCF mag werkzaamheden opschorten bij niet-betaling." },
        { type: "p", text: "20.2 DCF mag de overeenkomst direct beëindigen indien:" },
        {
          type: "ul",
          items: [
            "Opdrachtgever tekortschiet;",
            "faillissement wordt aangevraagd;",
            "surseance van betaling wordt verleend;",
            "bedrijfsactiviteiten worden beëindigd.",
          ],
        },
        { type: "p", text: "20.3 Reeds uitgevoerde werkzaamheden blijven verschuldigd." },
      ],
    },
    {
      heading: "Artikel 21 - Vrijwaring",
      blocks: [
        {
          type: "ul",
          items: [
            "21.1 Opdrachtgever vrijwaart DCF tegen aanspraken van derden die voortvloeien uit het gebruik van de geleverde diensten, software, websites, AI-oplossingen of content.",
            "21.2 Opdrachtgever vergoedt alle schade en kosten die hieruit voortvloeien.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 22 - Toepasselijk recht",
      blocks: [
        {
          type: "ul",
          items: [
            "22.1 Op alle overeenkomsten is uitsluitend Nederlands recht van toepassing.",
            "22.2 Het Weens Koopverdrag is uitgesloten.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 23 - Geschillen",
      blocks: [
        {
          type: "ul",
          items: [
            "23.1 Geschillen zullen in eerste instantie in onderling overleg worden opgelost.",
            "23.2 Indien dit niet mogelijk blijkt, worden geschillen exclusief voorgelegd aan de bevoegde rechter van de Rechtbank Rotterdam.",
          ],
        },
      ],
    },
    {
      heading: "Artikel 24 - Slotbepalingen",
      blocks: [
        {
          type: "ul",
          items: [
            "24.1 DCF mag deze Algemene Voorwaarden wijzigen.",
            "24.2 De meest recente versie wordt gepubliceerd op de website van DCF.",
            "24.3 Opdrachtgever wordt geacht met wijzigingen akkoord te zijn indien hij de dienstverlening blijft afnemen na bekendmaking van de gewijzigde voorwaarden.",
          ],
        },
      ],
    },
  ],
};
