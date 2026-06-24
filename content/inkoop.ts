import type { Lang } from "@/lib/i18n/config";
import type { SubpageTemplateProps } from "@/components/SubpageTemplate";

export const inkoop = {
  nl: {
    hero: {
      chapter: "Inkoop",
      h1: "Aanbesteden is complexer dan ooit en vraagt om grip",
      h1Accent: "grip",
      imageAlt: "Inkoop & aanbesteden, werksessie",
    },
    context: {
      eyebrow: "Een breed en complex vakgebied",
      heading: "Inkoop gaat allang niet meer over alleen bestellen",
      paragraphs: [
        "Het omvat leveranciersselectie, aanbestedingen, contractmanagement, risicobeheersing, compliance, kostenbeheersing en interne afstemming. Juist doordat alles met elkaar samenhangt, vraagt inkoop om structuur, overzicht en specialistische kennis.",
        "De Europese Commissie geeft aan dat publieke inkoop in de EU goed is voor circa 14% van het bruto binnenlands product. In Nederland vertegenwoordigt het publieke inkoopvolume jaarlijks ruim €100 miljard.",
      ],
      source: "Bron: PIANOo · European Commission · Deloitte CPO Survey 2025",
    },
    bigNumber: {
      eyebrow: "Onze innovatie levert op",
      value: "−50%",
      detail: "Interne kosten en doorlooptijden van aanbestedingen worden tot de helft teruggebracht.",
    },
    benefits: [
      "Minder tijdverlies door versnipperde informatie",
      "Minder handmatig uitzoek- en afstemmingswerk",
      "Minder kans op fouten en herstelwerk",
      "Minder druk op schaarse interne capaciteit",
      "Meer transparantie en betere beheersbaarheid",
    ],
    depthChapter: {
      chapter: "02",
      label: "Drie diepteslagen",
      heading: "Van strategie tot uitvoering",
      readMore: "Lees meer →",
    },
    subpages: [
      {
        no: "5a",
        title: "Innovatie inkoop",
        summary: "Digitale oplossingen die inkoop, aanbestedingen en contractmanagement slimmer en beheersbaar maken.",
        href: "/inkoop/innovatie",
      },
      {
        no: "5b",
        title: "(Europees) aanbesteden",
        summary: "Aanbestedingstrajecten overzichtelijker, transparanter en goedkoper, tot 50% kostenreductie.",
        href: "/inkoop/aanbesteden",
      },
      {
        no: "5c",
        title: "Contractmanagement",
        summary: "Centraal overzicht, tijdige signalering, minder afhankelijkheid van losse bestanden of versnipperde kennis.",
        href: "/inkoop/contractmanagement",
      },
    ],
    secondarySection: {
      eyebrow: "Interne kosten lopen snel op",
      heading: "De werkelijke kosten zitten vaak niet in externe ondersteuning",
      body: "Maar in het opstellen van stukken, juridische controle, planning, beoordeling, motivering en dossiervorming. Daardoor vragen aanbestedingen vaak meer dan vooraf wordt ingeschat.",
      cta: "Bespreek uw inkoopvraagstuk",
      imageAlt: "Aanbestedingsteam met dossiers",
    },
    closing: {
      heading: "Tot 50% besparen op uw aanbestedingstrajecten?",
      headingAccent: "aanbestedingstrajecten",
      cta: "Plan een vrijblijvend gesprek",
    },
  },

  en: {
    hero: {
      chapter: "Procurement",
      h1: "Tendering is more complex than ever and demands control",
      h1Accent: "control",
      imageAlt: "Procurement and tendering workshop",
    },
    context: {
      eyebrow: "A broad and complex field",
      heading: "Procurement has long been about more than just ordering",
      paragraphs: [
        "It encompasses supplier selection, tenders, contract management, risk management, compliance, cost control and internal alignment. Precisely because everything is interconnected, procurement demands structure, oversight and specialist knowledge.",
        "The European Commission states that public procurement in the EU accounts for approximately 14% of gross domestic product. In the Netherlands, public procurement volume exceeds €100 billion per year.",
      ],
      source: "Source: PIANOo · European Commission · Deloitte CPO Survey 2025",
    },
    bigNumber: {
      eyebrow: "What our innovation delivers",
      value: "−50%",
      detail: "Internal costs and lead times for tenders are cut by up to half.",
    },
    benefits: [
      "Less time lost to fragmented information",
      "Less manual searching and coordination",
      "Fewer mistakes and rework",
      "Less pressure on scarce internal capacity",
      "Greater transparency and better manageability",
    ],
    depthChapter: {
      chapter: "02",
      label: "Three deep dives",
      heading: "From strategy to execution",
      readMore: "Read more →",
    },
    subpages: [
      {
        no: "5a",
        title: "Procurement innovation",
        summary: "Digital solutions that make procurement, tendering and contract management smarter and more manageable.",
        href: "/inkoop/innovatie",
      },
      {
        no: "5b",
        title: "(European) tendering",
        summary: "Tender processes made clearer, more transparent and less costly, up to 50% cost reduction.",
        href: "/inkoop/aanbesteden",
      },
      {
        no: "5c",
        title: "Contract management",
        summary: "Central overview, timely alerts, less dependence on scattered files or fragmented knowledge.",
        href: "/inkoop/contractmanagement",
      },
    ],
    secondarySection: {
      eyebrow: "Internal costs add up quickly",
      heading: "The real costs are often not in external support",
      body: "They are in drafting documents, legal review, planning, assessment, justification and file management. That is why tenders often demand more than initially estimated.",
      cta: "Discuss your procurement challenge",
      imageAlt: "Tendering team with dossiers",
    },
    closing: {
      heading: "Save up to 50% on your tendering processes?",
      headingAccent: "tendering processes",
      cta: "Book a no-obligation call",
    },
  },
} satisfies Record<Lang, unknown>;

export const inkoopInnovatie = {
  nl: {
    chapter: "5a",
    parentChapter: "05",
    parentLabel: "Inkoop",
    parentHref: "/inkoop",
    label: "Innovatie inkoop",
    h1: "Digitale oplossingen die inkoop slimmer en beheersbaar maken",
    h1Accent: "slimmer",
    intro: {
      eyebrow: "Onze innovatie",
      headline: "Grip op inkoop, aanbestedingen en contractmanagement — in één samenhangende oplossing",
      paragraphs: [
        "Digital Concepts Factory ontwikkelt oplossingen waarmee organisaties grip krijgen op inkoop, aanbestedingen en contractmanagement. Onze innovaties helpen om processen te structureren, informatie inzichtelijk te maken, doorlooptijden te verkorten en de druk op interne capaciteit te verlagen.",
        "Zo wordt inkoop niet alleen overzichtelijker en efficiënter, maar ook beter beheersbaar.",
      ],
    },
    sections: [
      {
        type: "text" as const,
        eyebrow: "Betaalbaar voor iedere organisatie",
        heading: "Slimme innovatie is geen voorrecht van grote partijen",
        headingAccent: "geen voorrecht",
        paragraphs: [
          "Veel organisaties denken dat innovatieve digitale oplossingen alleen zijn weggelegd voor grote partijen met grote budgetten. Wij laten zien dat dit anders kan. Onze oplossingen zijn juist ontwikkeld om betaalbaar en toegankelijk te zijn voor iedere organisatie.",
          "Daarmee maken wij moderne digitale innovatie in inkoop praktisch toepasbaar voor organisaties die slimmer willen werken, tijd willen besparen en meer grip willen krijgen op processen die nu vaak onnodig veel capaciteit vragen.",
        ],
      },
      {
        type: "callout" as const,
        quote: "Inkoop gaat allang niet meer alleen over bestellen. Het vraagt om structuur, overzicht en specialistische kennis. Wij brengen die drie samen in één digitale werkomgeving.",
      },
    ],
    closing: {
      headline: "Inkoop slimmer, efficiënter en beter beheersbaar organiseren?",
      headlineAccent: "slimmer",
      ctaLabel: "Plan een vrijblijvend gesprek",
    },
  } satisfies SubpageTemplateProps,

  en: {
    chapter: "5a",
    parentChapter: "05",
    parentLabel: "Procurement",
    parentHref: "/inkoop",
    label: "Procurement innovation",
    h1: "Digital solutions that make procurement smarter and more manageable",
    h1Accent: "smarter",
    intro: {
      eyebrow: "Our innovation",
      headline: "Control over procurement, tendering and contract management in one coherent solution",
      paragraphs: [
        "Digital Concepts Factory develops solutions that give organisations control over procurement, tendering and contract management. Our innovations help structure processes, make information transparent, shorten lead times and reduce pressure on internal capacity.",
        "That makes procurement not only clearer and more efficient, but also better managed.",
      ],
    },
    sections: [
      {
        type: "text" as const,
        eyebrow: "Affordable for every organisation",
        heading: "Smart innovation is not the privilege of large players",
        headingAccent: "not the privilege",
        paragraphs: [
          "Many organisations assume that innovative digital solutions are only available to large players with large budgets. We show that this can be different. Our solutions are specifically developed to be affordable and accessible for every organisation.",
          "That makes modern digital innovation in procurement practically applicable for organisations that want to work smarter, save time and gain more control over processes that currently demand unnecessary capacity.",
        ],
      },
      {
        type: "callout" as const,
        quote: "Procurement has long been about more than just ordering. It demands structure, overview and specialist knowledge. We bring those three together in one digital working environment.",
      },
    ],
    closing: {
      headline: "Organise procurement smarter, more efficiently and better managed?",
      headlineAccent: "smarter",
      ctaLabel: "Book a no-obligation call",
    },
  } satisfies SubpageTemplateProps,
} satisfies Record<Lang, SubpageTemplateProps>;

export const inkoopAanbesteden = {
  nl: {
    chapter: "5b",
    parentChapter: "05",
    parentLabel: "Inkoop",
    parentHref: "/inkoop",
    label: "(Europees) aanbesteden",
    h1: "Aanbesteden vraagt om grip, structuur en specialistische kennis",
    h1Accent: "grip, structuur",
    intro: {
      eyebrow: "Het vraagstuk",
      headline: "Een aanbestedingstraject is complex, tijdrovend en kost al snel tienduizenden euro's",
      paragraphs: [
        "Voor veel organisaties is een aanbestedingstraject een complex en tijdrovend proces. Stukken moeten zorgvuldig worden voorbereid, documenten moeten juridisch correct zijn, deadlines moeten worden bewaakt en het hele traject moet transparant en controleerbaar verlopen. Zeker bij Europese aanbestedingen vraagt dit om structuur, specialistische kennis en voldoende capaciteit.",
        "In de praktijk ontbreekt het daar juist vaak aan: beperkte tijd, beperkte capaciteit of onvoldoende kennis om aanbestedingen efficiënt en zorgvuldig te organiseren.",
      ],
      sourceNote: "Bronnen: European Commission · PIANOo · Deloitte CPO Survey 2025",
    },
    sections: [
      {
        type: "text" as const,
        eyebrow: "Schaal van publieke inkoop",
        heading: "Publieke inkoop in NL: ruim €100 miljard per jaar",
        headingAccent: "€100 miljard",
        paragraphs: [
          "Voor één vast gemiddeld bedrag per aanbesteding bestaat geen eenduidige landelijke norm. Wel is duidelijk dat een aanbestedingstraject organisaties al snel tienduizenden euro's kost aan interne uren, voorbereiding, afstemming, documentatie en eventuele externe begeleiding.",
          "Publieke inkoop vertegenwoordigt in de EU ongeveer 14% tot 15% van het bruto binnenlands product. In Nederland gaat het volgens PIANOo om ruim €100 miljard per jaar.",
          "De werkelijke kosten zitten vaak niet alleen in externe ondersteuning, maar vooral in de interne organisatie: opstellen van stukken, afstemming, juridische controle, planning, beoordeling, motivering en dossiervorming.",
        ],
      },
      {
        type: "stat" as const,
        eyebrow: "Onze innovatie levert op",
        value: "tot 50%",
        detail: "Doordat onze innovatie structuur, overzicht en procesbeheersing toevoegt, kunnen organisaties de interne kosten en doorlooptijden van aanbestedingstrajecten met tot 50% terugdringen.",
        sourceNote: "DCF onderzoek",
      },
      {
        type: "numbered-list" as const,
        eyebrow: "Wat dit u oplevert",
        heading: "Wat de innovatie concreet verandert",
        intro: "Geen losse tools en handmatig uitzoekwerk meer. Eén werkomgeving die het hele traject beheersbaar maakt.",
        items: [
          { n: "01", title: "Minder tijdverlies", text: "Geen versnipperde informatie meer over mailwisselingen, sharepoints en lokale bestanden — alles centraal." },
          { n: "02", title: "Minder handmatig werk", text: "Uitzoek- en afstemmingswerk wordt drastisch teruggebracht door gestructureerde processtappen." },
          { n: "03", title: "Minder fouten", text: "Door gestandaardiseerde stappen en checkpoints verkleint u de kans op herstelwerk en juridische missers." },
          { n: "04", title: "Minder druk op capaciteit", text: "Schaarse interne professionals worden ontlast — meer doorlooptijd, dezelfde mensen." },
          { n: "05", title: "Meer transparantie", text: "Het traject is voor alle betrokkenen helder, controleerbaar en aantoonbaar onderbouwd." },
          { n: "06", title: "Betere beheersbaarheid", text: "Planning, voortgang en risico's worden continu inzichtelijk in plaats van per fase." },
        ],
      },
      {
        type: "text" as const,
        eyebrow: "Betaalbaar voor iedereen",
        heading: "Professioneel aanbesteden — geen privilege van grote partijen",
        headingAccent: "geen privilege",
        paragraphs: [
          "Veel organisaties denken dat slimme digitale ondersteuning bij aanbestedingen alleen haalbaar is voor grote partijen met grote budgetten. Wij laten zien dat dit anders kan.",
          "Onze oplossing is ontwikkeld om betaalbaar en toegankelijk te zijn voor iedere organisatie. Zo wordt professioneel en efficiënter aanbesteden niet iets voor later, maar een direct toepasbare manier om tijd te besparen, kosten terug te dringen en meer grip te krijgen.",
        ],
      },
    ],
    closing: {
      headline: "Tot 50% besparen op uw aanbestedingstrajecten?",
      headlineAccent: "Tot 50%",
      ctaLabel: "Plan een vrijblijvend gesprek",
    },
  } satisfies SubpageTemplateProps,

  en: {
    chapter: "5b",
    parentChapter: "05",
    parentLabel: "Procurement",
    parentHref: "/inkoop",
    label: "(European) tendering",
    h1: "Tendering demands control, structure and specialist knowledge",
    h1Accent: "control, structure",
    intro: {
      eyebrow: "The challenge",
      headline: "A tendering process is complex, time-consuming and quickly costs tens of thousands of euros",
      paragraphs: [
        "For many organisations a tendering process is a complex and time-consuming undertaking. Documents must be carefully prepared, papers must be legally sound, deadlines must be monitored and the entire process must run transparently and verifiably. European tenders in particular require structure, specialist knowledge and sufficient capacity.",
        "In practice, that is precisely what is often lacking: limited time, limited capacity or insufficient knowledge to organise tenders efficiently and carefully.",
      ],
      sourceNote: "Sources: European Commission · PIANOo · Deloitte CPO Survey 2025",
    },
    sections: [
      {
        type: "text" as const,
        eyebrow: "Scale of public procurement",
        heading: "Public procurement in the Netherlands: over €100 billion per year",
        headingAccent: "€100 billion",
        paragraphs: [
          "There is no single national average for the cost of a tender. What is clear is that a tendering process quickly costs organisations tens of thousands of euros in internal hours, preparation, coordination, documentation and any external support.",
          "Public procurement represents approximately 14 to 15% of gross domestic product in the EU. In the Netherlands, according to PIANOo, the figure exceeds €100 billion per year.",
          "The real costs are often not only in external support but mainly in internal organisation: drafting documents, coordination, legal review, planning, assessment, justification and file management.",
        ],
      },
      {
        type: "stat" as const,
        eyebrow: "What our innovation delivers",
        value: "up to 50%",
        detail: "By adding structure, oversight and process control, our innovation can reduce the internal costs and lead times of tendering processes by up to 50%.",
        sourceNote: "DCF research",
      },
      {
        type: "numbered-list" as const,
        eyebrow: "What this delivers for you",
        heading: "What the innovation concretely changes",
        intro: "No more scattered tools and manual searching. One working environment that makes the entire process manageable.",
        items: [
          { n: "01", title: "Less time lost", text: "No more fragmented information across email threads, SharePoints and local files — everything centralised." },
          { n: "02", title: "Less manual work", text: "Searching and coordination is drastically reduced through structured process steps." },
          { n: "03", title: "Fewer mistakes", text: "Standardised steps and checkpoints reduce the risk of rework and legal errors." },
          { n: "04", title: "Less pressure on capacity", text: "Scarce internal professionals are relieved — more throughput with the same people." },
          { n: "05", title: "Greater transparency", text: "The process is clear, verifiable and demonstrably substantiated for all parties involved." },
          { n: "06", title: "Better manageability", text: "Planning, progress and risks are continuously visible rather than assessed phase by phase." },
        ],
      },
      {
        type: "text" as const,
        eyebrow: "Affordable for everyone",
        heading: "Professional tendering is not the privilege of large players",
        headingAccent: "not the privilege",
        paragraphs: [
          "Many organisations assume that smart digital support for tendering is only feasible for large players with large budgets. We show that this can be different.",
          "Our solution is developed to be affordable and accessible for every organisation. That makes professional and more efficient tendering not something for later but a directly applicable way to save time, reduce costs and gain more control.",
        ],
      },
    ],
    closing: {
      headline: "Save up to 50% on your tendering processes?",
      headlineAccent: "up to 50%",
      ctaLabel: "Book a no-obligation call",
    },
  } satisfies SubpageTemplateProps,
} satisfies Record<Lang, SubpageTemplateProps>;

export const inkoopContractmanagement = {
  nl: {
    chapter: "5c",
    parentChapter: "05",
    parentLabel: "Inkoop",
    parentHref: "/inkoop",
    label: "Contractmanagement",
    h1: "Grip op contracten begint met inzicht en overzicht",
    h1Accent: "inzicht en overzicht",
    intro: {
      eyebrow: "Na de handtekening begint het pas",
      headline: "Het werk stopt niet bij het afsluiten van een contract — juist daarna begint het bewaken",
      paragraphs: [
        "Voor veel organisaties stopt het werk niet bij het afsluiten van een contract. Juist daarna begint een minstens zo belangrijke fase: het bewaken van afspraken, prestaties, termijnen, risico's en verplichtingen. Contractmanagement is daarmee een essentieel onderdeel van professioneel inkopen.",
        "Toch krijgt contractmanagement binnen veel organisaties onvoldoende aandacht. Het ontbreekt vaak aan tijd, capaciteit, structuur en specialistische kennis om contracten actief en zorgvuldig te beheren.",
      ],
      sourceNote: "Bron: PIANOo, Contractmanagement",
    },
    sections: [
      {
        type: "text" as const,
        eyebrow: "Wat er misgaat zonder grip",
        heading: "Versnipperde contracten kosten tijd, geld én kansen",
        headingAccent: "tijd, geld",
        paragraphs: [
          "Wanneer contractmanagement niet goed is ingericht, raken afspraken versnipperd, worden deadlines gemist en ontbreekt inzicht in verplichtingen, verlengmomenten, prestaties en risico's. Dat leidt niet alleen tot onrust en extra werk, maar ook tot onnodige kosten en gemiste kansen.",
          "In veel organisaties ligt contractmanagement verspreid over meerdere afdelingen of personen. Informatie staat op verschillende plekken, eigenaarschap is niet altijd duidelijk en belangrijke signalen worden te laat opgemerkt. Daardoor kost het veel tijd om overzicht te houden en neemt de afhankelijkheid van individuele kennis toe.",
          "Juist daar ontstaan risico's: contracten die stilzwijgend doorlopen, afspraken die niet worden opgevolgd, leveranciersprestaties die onvoldoende worden bewaakt of verplichtingen die uit beeld raken. Zonder structuur wordt contractmanagement reactief in plaats van strategisch.",
        ],
      },
      {
        type: "callout" as const,
        quote: "Contractmanagement draait om het bewaken van de naleving van afspraken — zowel door de leverancier als door de eigen organisatie. Zonder centrale grip wordt dat een illusie.",
      },
      {
        type: "text" as const,
        eyebrow: "Onze innovatie",
        heading: "Centraal inzichtelijk, beter bewaakt, minder afhankelijk van losse bestanden",
        headingAccent: "Centraal inzichtelijk",
        paragraphs: [
          "Wij hebben een innovatieve digitale oplossing ontwikkeld die contractmanagement overzichtelijker, transparanter en efficiënter maakt voor organisaties.",
          "Met onze innovatie wordt contractinformatie centraal inzichtelijk, worden belangrijke momenten beter bewaakt en krijgen organisaties meer grip op afspraken, verantwoordelijkheden en voortgang. Daardoor wordt contractmanagement minder afhankelijk van losse bestanden, handmatige controles en versnipperde kennis.",
        ],
      },
      {
        type: "numbered-list" as const,
        eyebrow: "Wat dat oplevert",
        heading: "Meer grip, minder risico, lagere interne belasting",
        items: [
          { n: "01", title: "Meer overzicht in lopende contracten", text: "Eén plek waar elk contract leeft — status, eigenaar, deadlines en geschiedenis." },
          { n: "02", title: "Beter inzicht in verplichtingen", text: "Wie heeft beloofd wat, wanneer, en wat staat nog open?" },
          { n: "03", title: "Tijdige signalering van verlengingen", text: "Geen contracten die stilzwijgend doorlopen of net te laat worden opgezegd." },
          { n: "04", title: "Minder afhankelijkheid van personen", text: "Vertrek van een sleutelfiguur is geen risico meer voor contractkennis." },
          { n: "05", title: "Minder fouten, minder herstelwerk", text: "Standaardisatie en signaleringen voorkomen kostbare missers." },
          { n: "06", title: "Minder onnodige kosten", text: "Verlengingen, dubbele afnames en niet-nagekomen afspraken komen in beeld voordat ze schade doen." },
        ],
      },
      {
        type: "text" as const,
        eyebrow: "Voor iedere organisatie",
        heading: "Betaalbaar, toegankelijk, direct toepasbaar",
        headingAccent: "Betaalbaar",
        paragraphs: [
          "Veel organisaties denken dat professioneel contractmanagement alleen haalbaar is met grote systemen of hoge investeringen. Wij laten zien dat dit anders kan.",
          "Onze oplossing is ontwikkeld om betaalbaar en toegankelijk te zijn voor iedere organisatie. Zo maken wij moderne digitale ondersteuning bij contractmanagement praktisch toepasbaar voor organisaties die meer grip willen, risico's willen beperken en tijd willen besparen.",
        ],
      },
    ],
    closing: {
      headline: "Contractmanagement overzichtelijker, transparanter en efficiënter organiseren?",
      headlineAccent: "overzichtelijker",
      ctaLabel: "Plan een vrijblijvend gesprek",
    },
  } satisfies SubpageTemplateProps,

  en: {
    chapter: "5c",
    parentChapter: "05",
    parentLabel: "Procurement",
    parentHref: "/inkoop",
    label: "Contract management",
    h1: "Control over contracts starts with insight and overview",
    h1Accent: "insight and overview",
    intro: {
      eyebrow: "The work starts after signing",
      headline: "The work does not stop when a contract is signed — that is precisely when monitoring begins",
      paragraphs: [
        "For many organisations the work does not stop at signing a contract. What follows is an equally important phase: monitoring agreements, performance, deadlines, risks and obligations. Contract management is therefore an essential part of professional procurement.",
        "Yet contract management receives insufficient attention in many organisations. There is often a lack of time, capacity, structure and specialist knowledge to actively and carefully manage contracts.",
      ],
      sourceNote: "Source: PIANOo, Contract management",
    },
    sections: [
      {
        type: "text" as const,
        eyebrow: "What goes wrong without control",
        heading: "Fragmented contracts cost time, money and opportunities",
        headingAccent: "time, money",
        paragraphs: [
          "When contract management is not properly set up, agreements become fragmented, deadlines are missed and there is no insight into obligations, renewal moments, performance and risks. This leads not only to unrest and extra work but also to unnecessary costs and missed opportunities.",
          "In many organisations contract management is spread across multiple departments or individuals. Information is stored in different places, ownership is not always clear and important signals are noticed too late. That makes it time-consuming to maintain an overview and increases dependence on individual knowledge.",
          "That is precisely where risks arise: contracts that roll on silently, agreements that are not followed up, supplier performance that is insufficiently monitored, or obligations that fall out of sight. Without structure, contract management becomes reactive rather than strategic.",
        ],
      },
      {
        type: "callout" as const,
        quote: "Contract management is about monitoring compliance with agreements — both by the supplier and by the organisation itself. Without central control that becomes an illusion.",
      },
      {
        type: "text" as const,
        eyebrow: "Our innovation",
        heading: "Centrally visible, better monitored, less dependent on scattered files",
        headingAccent: "Centrally visible",
        paragraphs: [
          "We have developed an innovative digital solution that makes contract management clearer, more transparent and more efficient for organisations.",
          "With our innovation, contract information becomes centrally visible, important moments are better monitored and organisations gain more control over agreements, responsibilities and progress. That makes contract management less dependent on scattered files, manual checks and fragmented knowledge.",
        ],
      },
      {
        type: "numbered-list" as const,
        eyebrow: "What this delivers",
        heading: "More control, less risk, lower internal burden",
        items: [
          { n: "01", title: "Better overview of active contracts", text: "One place where every contract lives — status, owner, deadlines and history." },
          { n: "02", title: "Better insight into obligations", text: "Who promised what, when, and what is still outstanding?" },
          { n: "03", title: "Timely renewal alerts", text: "No contracts that silently roll on or are cancelled just too late." },
          { n: "04", title: "Less dependence on individuals", text: "A key person leaving is no longer a risk to contract knowledge." },
          { n: "05", title: "Fewer mistakes and less rework", text: "Standardisation and alerts prevent costly errors." },
          { n: "06", title: "Fewer unnecessary costs", text: "Renewals, duplicate purchases and unfulfilled agreements become visible before they cause damage." },
        ],
      },
      {
        type: "text" as const,
        eyebrow: "For every organisation",
        heading: "Affordable, accessible, immediately applicable",
        headingAccent: "Affordable",
        paragraphs: [
          "Many organisations assume that professional contract management is only feasible with large systems or major investment. We show that this can be different.",
          "Our solution is developed to be affordable and accessible for every organisation. That makes modern digital support for contract management practically applicable for organisations that want more control, want to limit risks and want to save time.",
        ],
      },
    ],
    closing: {
      headline: "Organise contract management with more clarity, transparency and efficiency?",
      headlineAccent: "more clarity",
      ctaLabel: "Book a no-obligation call",
    },
  } satisfies SubpageTemplateProps,
} satisfies Record<Lang, SubpageTemplateProps>;
