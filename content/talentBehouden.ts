import type { Lang } from "@/lib/i18n/config";
import type { SubpageTemplateProps } from "@/components/SubpageTemplate";

export const talentBehouden = {
  nl: {
    hero: {
      chapter: "Talent behouden",
      h1: "Behouden is de nieuwe succesfactor.",
      h1Accent: "nieuwe",
      imageAlt: "Drie collega's juichend bij een resultaat-dashboard",
    },
    intro: {
      eyebrow: "Het vraagstuk",
      heading:
        "De tijd dat medewerkers jarenlang vanzelfsprekend blijven, ligt achter ons.",
      paragraphs: [
        "Medewerkers bepalen in grote mate het succes van een organisatie. Het is daarom niet alleen belangrijk om goede mensen aan te trekken, maar minstens zo belangrijk om hen ook te behouden. Talent behouden is uitgegroeid tot een strategische succesfactor.",
        "Juist op het moment dat een medewerker volledig is ingewerkt, kennis heeft opgebouwd en maximale waarde toevoegt, gebeurt het regelmatig dat deze overstapt, naar een andere werkgever of zelfs een concurrent.",
      ],
      source: "Bron: Berenschot, HR-Trendonderzoek 2024-2025",
    },
    bigNumber: {
      eyebrow: "Minimale besparing per behouden medewerker",
      value: "€19.200",
      detail:
        "Bij een modaal bruto jaarinkomen van €48.000 en een minimale vervangingsimpact van 40%, is dit het bedrag dat u bespaart wanneer u één onnodig vertrek voorkomt.",
      source: "Gallup · Randstad · CPB",
    },
    innovation: {
      chapter: "De innovatie",
      heading: "Maatwerk in arbeidsvoorwaarden, eindelijk betaalbaar.",
      headingAccent: "betaalbaar",
      lead: "Wanneer medewerkers de ruimte krijgen om hun arbeidsvoorwaarden zelf samen te stellen, ontstaat er echte betrokkenheid. Mensen kiezen wat bij hen past en voelen zich gezien. Dat vertaalt zich direct in loyaliteit.",
      cta: "Ontdek de innovatie",
      quote:
        "Wij draaien het uitgangspunt om: niet de werkgever bepaalt welke extra's worden aangeboden, maar de medewerker kiest zelf wat voor hem of haar waardevol is, binnen duidelijke kaders.",
      paragraphs: [
        "Voor veel organisaties voelde maatwerk lang als iets dat in theorie aantrekkelijk klinkt, maar in de praktijk onhaalbaar is. Te complex, te duur, moeilijk te organiseren per individuele medewerker.",
        "Met onze digitale innovatie is dat fundamenteel veranderd. Zonder complexiteit, zonder oncontroleerbare kosten, wél met ruimte voor de individuele medewerker en strakke kaders voor de organisatie.",
      ],
    },
    costs: {
      chapter: "Waar bestaan vervangingskosten uit?",
      heading: "Eén vertrek, tien soorten kosten.",
      intro:
        "De grootste kostenposten van een vertrekkende medewerker zijn vaak onzichtbaar. Onderzoek laat zien dat de werkelijke kosten kunnen oplopen van 40% tot 200% van het bruto jaarsalaris.",
      source:
        "Bron: Gallup · 42% of Employee Turnover Is Preventable but Often Ignored",
      items: [
        { title: "Vacature- en advertentiekosten", text: "Vacatureplaatsingen, jobboards, social advertising, employer branding en campagnekosten. Vaak de eerste zichtbare kosten, zeker niet de enige." },
        { title: "Tijd van HR en hiring managers", text: "Het opstellen van vacatures, beoordelen van cv's en voeren van gesprekken kost uren. Directe loonkosten plus opportuniteitsverlies." },
        { title: "Selectie, screening en assessment", text: "Extra kosten voor screening, referentiechecks, assessments en administratieve verwerking, zeker bij verantwoordelijke functies." },
        { title: "Externe recruitmentondersteuning", text: "Recruiters, bureaus of searchpartijen. Een vast bedrag, een percentage van het jaarsalaris, of een combinatie van beide." },
        { title: "Onboarding en inwerktijd", text: "Tijd van collega's, leidinggevenden en HR. Wordt zelden expliciet zichtbaar gemaakt, telt wel degelijk mee." },
        { title: "Opleiding en training", text: "Onboardingprogramma's, systeemtrainingen, vakinhoudelijke scholing, veiligheidsinstructies of certificeringen." },
        { title: "Lagere productiviteit", text: "Een nieuwe medewerker is zelden vanaf dag één volledig productief. De inwerk-dip is een belangrijke reden waarom kosten oplopen." },
        { title: "Extra belasting voor collega's", text: "Vragen beantwoorden, werk corrigeren, taken tijdelijk overnemen. Werkdruk stijgt, indirect leidt dit weer tot kosten." },
        { title: "Verlies van kennis en relaties", text: "Opgebouwde kennis, klantinzicht en interne samenwerking verdwijnen mee. Bij ervaren krachten of sleutelposities groot." },
        { title: "Vertraging en gemiste kansen", text: "Projecten vertragen, fouten ontstaan, klanten minder goed bediend, commerciële kansen blijven liggen." },
      ],
    },
    calculator: {
      chapter: "Bereken uw vervangingskosten",
      heading: "Wat kost personeelsverloop u precies?",
      headingAccent: "u",
      lead: "Vul uw eigen situatie in, salaris, type functie en jaarlijks aantal vertrekkers. U ziet direct uw vervangingskosten én het besparingspotentieel met DCF.",
      source:
        "Berekening volgens Gallup-vuistregels (40%/80%/200% van bruto jaarsalaris). Modaal NL: €48.000 (CPB 2026).",
    },
    table: {
      eyebrow: "Referentie, kosten per medewerker",
      colSalary: "Bruto jaarsalaris",
      colLow: "Frontline · 40%",
      colMid: "Professional · 80%",
      colHigh: "Manager · 200%",
      modaalTag: "← modaal",
      modaalSalary: "€ 48.000",
      source: "Bron: Gallup · CPB Kerngegevens MEV 2026",
      rows: [
        { salary: "€ 36.000", low: "€ 14.400", mid: "€ 28.800", high: "€ 72.000" },
        { salary: "€ 48.000", low: "€ 19.200", mid: "€ 38.400", high: "€ 96.000" },
        { salary: "€ 65.000", low: "€ 26.000", mid: "€ 52.000", high: "€ 130.000" },
        { salary: "€ 85.000", low: "€ 34.000", mid: "€ 68.000", high: "€ 170.000" },
        { salary: "€ 120.000", low: "€ 48.000", mid: "€ 96.000", high: "€ 240.000" },
      ],
    },
    subpages: [
      { no: "3a", title: "Innovatie voor talentbehoud", summary: "Maatwerk in arbeidsvoorwaarden, eindelijk schaalbaar en betaalbaar.", href: "/talent-behouden/innovatie" },
      { no: "3b", title: "Standaard verleden tijd", summary: "Waarom één pakket niet meer past, en wat in de plaats moet.", href: "/talent-behouden/arbeidsvoorwaarden" },
      { no: "3c", title: "Vervangingskosten uitgesplitst", summary: "Tien soorten kosten, vaak onzichtbaar, samen fors.", href: "/talent-behouden/vervangingskosten" },
      { no: "3d", title: "Bereken zelf", summary: "Interactieve calculator met uw eigen salaris en aantal vertrekkers.", href: "/talent-behouden/bereken" },
    ],
    closing: {
      heading: "Talent langer behouden én €19.200 per medewerker besparen?",
      headingAccent: "én",
    },
  },

  en: {
    hero: {
      chapter: "Retaining talent",
      h1: "Retention is the new success factor.",
      h1Accent: "new",
      imageAlt: "Three colleagues celebrating at a results dashboard",
    },
    intro: {
      eyebrow: "The challenge",
      heading:
        "The days when employees stayed for years as a matter of course are behind us.",
      paragraphs: [
        "Employees largely determine an organisation's success. So it is not only important to attract good people, but at least as important to retain them. Retaining talent has grown into a strategic success factor.",
        "Precisely when an employee is fully up to speed, has built up knowledge and adds maximum value, they often move on, to another employer or even a competitor.",
      ],
      source: "Source: Berenschot, HR Trends Survey 2024-2025",
    },
    bigNumber: {
      eyebrow: "Minimum saving per retained employee",
      value: "€19,200",
      detail:
        "With an average gross annual income of €48,000 and a minimum replacement impact of 40%, this is the amount you save when you prevent a single avoidable departure.",
      source: "Gallup · Randstad · CPB",
    },
    innovation: {
      chapter: "The innovation",
      heading: "Tailored employment terms, finally affordable.",
      headingAccent: "affordable",
      lead: "When employees are given the room to put together their own employment terms, real engagement follows. People choose what suits them and feel seen. That translates directly into loyalty.",
      cta: "Discover the innovation",
      quote:
        "We flip the starting point around: the employer no longer decides which extras are offered, the employee chooses what is valuable to them, within clear frameworks.",
      paragraphs: [
        "For many organisations, tailored terms long felt like something that sounds attractive in theory but is unworkable in practice. Too complex, too expensive, hard to organise per individual employee.",
        "Our digital innovation has changed that fundamentally. Without complexity, without uncontrollable costs, but with room for the individual employee and tight frameworks for the organisation.",
      ],
    },
    costs: {
      chapter: "What do replacement costs consist of?",
      heading: "One departure, ten types of cost.",
      intro:
        "The largest cost items of a departing employee are often invisible. Research shows that the real costs can run from 40% to 200% of gross annual salary.",
      source:
        "Source: Gallup · 42% of Employee Turnover Is Preventable but Often Ignored",
      items: [
        { title: "Vacancy and advertising costs", text: "Job postings, job boards, social advertising, employer branding and campaign costs. Often the first visible costs, certainly not the only ones." },
        { title: "Time of HR and hiring managers", text: "Drafting vacancies, reviewing CVs and holding interviews takes hours. Direct wage costs plus the opportunity lost elsewhere." },
        { title: "Selection, screening and assessment", text: "Extra costs for screening, reference checks, assessments and administrative processing, especially for positions of responsibility." },
        { title: "External recruitment support", text: "Recruiters, agencies or search firms. A fixed fee, a percentage of the annual salary, or a combination of both." },
        { title: "Onboarding and ramp-up time", text: "Time from colleagues, managers and HR. Rarely made explicit, yet it genuinely counts." },
        { title: "Education and training", text: "Onboarding programmes, system training, professional schooling, safety instructions or certifications." },
        { title: "Lower productivity", text: "A new employee is rarely fully productive from day one. The ramp-up dip is a key reason why costs add up." },
        { title: "Extra strain on colleagues", text: "Answering questions, correcting work, temporarily taking over tasks. Workload rises, which indirectly drives costs again." },
        { title: "Loss of knowledge and relationships", text: "Accumulated knowledge, customer insight and internal collaboration leave with them. Significant for experienced staff or key positions." },
        { title: "Delays and missed opportunities", text: "Projects slow down, mistakes occur, customers are served less well, commercial opportunities are left on the table." },
      ],
    },
    calculator: {
      chapter: "Calculate your replacement costs",
      heading: "What exactly does staff turnover cost you?",
      headingAccent: "you",
      lead: "Enter your own situation: salary, role type and the number of leavers per year. You instantly see your replacement costs and the savings potential with DCF.",
      source:
        "Calculated using Gallup rules of thumb (40%/80%/200% of gross annual salary). Average NL income: €48,000 (CPB 2026).",
    },
    table: {
      eyebrow: "Reference, cost per employee",
      colSalary: "Gross annual salary",
      colLow: "Frontline · 40%",
      colMid: "Professional · 80%",
      colHigh: "Manager · 200%",
      modaalTag: "← average",
      modaalSalary: "€ 48,000",
      source: "Source: Gallup · CPB Key Figures MEV 2026",
      rows: [
        { salary: "€ 36,000", low: "€ 14,400", mid: "€ 28,800", high: "€ 72,000" },
        { salary: "€ 48,000", low: "€ 19,200", mid: "€ 38,400", high: "€ 96,000" },
        { salary: "€ 65,000", low: "€ 26,000", mid: "€ 52,000", high: "€ 130,000" },
        { salary: "€ 85,000", low: "€ 34,000", mid: "€ 68,000", high: "€ 170,000" },
        { salary: "€ 120,000", low: "€ 48,000", mid: "€ 96,000", high: "€ 240,000" },
      ],
    },
    subpages: [
      { no: "3a", title: "Innovation for talent retention", summary: "Tailored employment terms, finally scalable and affordable.", href: "/talent-behouden/innovatie" },
      { no: "3b", title: "Standard is a thing of the past", summary: "Why one package no longer fits, and what should take its place.", href: "/talent-behouden/arbeidsvoorwaarden" },
      { no: "3c", title: "Replacement costs broken down", summary: "Ten types of cost, often invisible, together substantial.", href: "/talent-behouden/vervangingskosten" },
      { no: "3d", title: "Calculate it yourself", summary: "Interactive calculator with your own salary and number of leavers.", href: "/talent-behouden/bereken" },
    ],
    closing: {
      heading: "Retain talent longer and save €19,200 per employee?",
      headingAccent: "and",
    },
  },
} satisfies Record<Lang, unknown>;

export const talentBehoudenBereken = {
  nl: {
    parentChapter: "03",
    parentLabel: "Talent behouden",
    breadcrumb: "3d · Bereken vervangingskosten",
    h1Pre: "Wat kost personeelsverloop ",
    h1Accent: "u",
    h1Post: " precies?",
    intro: {
      eyebrow: "Vervangingskosten op basis van bruto salaris",
      heading: "Vul uw eigen situatie in en zie direct het besparingspotentieel.",
      paragraphs: [
        "De vervangingskosten van een vrijwillig vertrekkende medewerker kunnen oplopen van 40% tot 200% van het bruto jaarsalaris, afhankelijk van het type functie. Gallup noemt als vuistregel ongeveer 40% voor frontline-medewerkers, 80% voor technische en professionele functies en tot 200% voor leiders en managers.",
        "In Nederland bedraagt het bruto modaal inkomen in 2026 €48.000 per jaar. Onderstaande calculator combineert deze cijfers zodat u direct ziet wat verloop uw organisatie kost — en hoeveel u kunt besparen door talent langer te behouden.",
      ],
      source: "Bronnen: Gallup · CPB Kerngegevens MEV 2026",
    },
    calculator: {
      chapterLabel: "Interactieve berekening",
      heading: "Sleep de schuifregelaars — de cijfers passen zich direct aan.",
      source: "Berekening volgens Gallup-vuistregels (40%/80%/200% van bruto jaarsalaris). Modaal NL: €48.000 (CPB 2026).",
    },
    conclusion: {
      eyebrow: "Conclusie",
      heading: "Hoe hoger het salaris, hoe groter de financiële impact van vertrek.",
      body: "Minimale vervangingskosten lopen al snel fors op, zelfs bij meer gangbare salarissen. Juist daarom loont het voor organisaties om talentvolle medewerkers zo lang mogelijk te behouden.",
      cta: "Bekijk onze behoud-innovatie",
    },
    closing: {
      heading: "Wilt u weten wat personeelsverloop uw organisatie ",
      headingAccent: "werkelijk",
      headingPost: " kost?",
      cta: "Plan een vrijblijvend gesprek",
    },
  },
  en: {
    parentChapter: "03",
    parentLabel: "Retaining talent",
    breadcrumb: "3d · Calculate replacement costs",
    h1Pre: "What exactly does staff turnover cost ",
    h1Accent: "you",
    h1Post: "?",
    intro: {
      eyebrow: "Replacement costs based on gross salary",
      heading: "Enter your own situation and instantly see the savings potential.",
      paragraphs: [
        "The replacement costs of a voluntarily departing employee can run from 40% to 200% of gross annual salary, depending on the role. Gallup's rules of thumb are roughly 40% for frontline employees, 80% for technical and professional roles, and up to 200% for leaders and managers.",
        "In the Netherlands, the average gross income in 2026 is €48,000 per year. The calculator below combines these figures so you can instantly see what turnover costs your organisation, and how much you can save by retaining talent longer.",
      ],
      source: "Sources: Gallup · CPB Key Figures MEV 2026",
    },
    calculator: {
      chapterLabel: "Interactive calculation",
      heading: "Drag the sliders — the figures update instantly.",
      source: "Calculated using Gallup rules of thumb (40%/80%/200% of gross annual salary). Average NL income: €48,000 (CPB 2026).",
    },
    conclusion: {
      eyebrow: "Conclusion",
      heading: "The higher the salary, the greater the financial impact of departure.",
      body: "Minimum replacement costs add up quickly, even at more common salary levels. That is precisely why it pays for organisations to retain talented employees for as long as possible.",
      cta: "See our retention innovation",
    },
    closing: {
      heading: "Want to know what staff turnover ",
      headingAccent: "really",
      headingPost: " costs your organisation?",
      cta: "Book a no-obligation call",
    },
  },
} satisfies Record<Lang, unknown>;

export const talentBehoudenInnovatie = {
  nl: {
    chapter: "3a",
    parentChapter: "03",
    parentLabel: "Talent behouden",
    parentHref: "/talent-behouden",
    label: "Innovatie voor talentbehoud",
    h1: "Wie beter aansluit, behoudt langer",
    h1Accent: "beter aansluit",
    intro: {
      eyebrow: "Onze innovatie",
      headline: "Niet langer een vast pakket — maar een flexibel instrument dat meebeweegt met uw mensen.",
      paragraphs: [
        "Organisaties die talent willen behouden, moeten anders kijken naar arbeidsvoorwaarden. Niet als een vaststaand pakket, maar als een flexibel instrument dat meebeweegt met de behoeften van medewerkers.",
        "Wanneer medewerkers de ruimte krijgen om hun arbeidsvoorwaarden zelf samen te stellen, ontstaat er echte betrokkenheid. Mensen kiezen wat bij hen past en voelen zich daardoor meer gezien en gewaardeerd. Dat vertaalt zich direct naar loyaliteit.",
        "Medewerkers met arbeidsvoorwaarden die écht aansluiten op hun leven, hebben minder reden om verder te kijken. Ze blijven langer, zijn gemotiveerder en dragen actiever bij aan de organisatie.",
      ],
    },
    sections: [
      {
        type: "text" as const,
        eyebrow: "Maatwerk duur? Dat was zo.",
        heading: "Persoonlijke keuzevrijheid is normaal gesproken ondenkbaar en onbetaalbaar.",
        headingAccent: "onbetaalbaar",
        paragraphs: [
          "Voor veel organisaties voelt maatwerk in arbeidsvoorwaarden als iets dat in theorie aantrekkelijk is, maar in de praktijk onhaalbaar. De eerste gedachte is vaak: te complex, te duur en moeilijk te organiseren voor iedere individuele medewerker.",
          "En dat was lange tijd ook zo. Daarom bleven veel organisaties vasthouden aan standaardpakketten, terwijl medewerkers juist steeds meer behoefte kregen aan keuzevrijheid en persoonlijke relevantie.",
          "Met onze innovatie is dat fundamenteel veranderd. Wij maken het mogelijk om maatwerk in arbeidsvoorwaarden wél toegankelijk en betaalbaar te maken voor iedere organisatie — zonder complexiteit, zonder oncontroleerbare kosten, maar mét ruimte voor de individuele medewerker.",
        ],
      },
      {
        type: "callout" as const,
        quote: "Persoonlijk waar het telt, beheersbaar voor de organisatie. Wat ooit een kostbare uitdaging was, is nu een slimme en haalbare oplossing.",
      },
      {
        type: "text" as const,
        eyebrow: "Twee vliegen, één klap",
        heading: "Meer loyaliteit én lagere kosten.",
        headingAccent: "lagere kosten",
        paragraphs: [
          "Medewerkers krijgen de vrijheid om te kiezen wat bij hen past. Daardoor voelen zij zich meer betrokken en gewaardeerd, wat direct leidt tot een hogere loyaliteit en een sterkere binding met de organisatie.",
          "En dat heeft een concreet effect. Wanneer medewerkers langer blijven, dalen de vervangingskosten aanzienlijk. Minder uitstroom betekent minder werving, minder inwerktijd en minder verlies van kennis en ervaring.",
          "Een oplossing die niet alleen uw medewerkers sterker bindt, maar ook uw organisatie financieel gezonder maakt. Investeren in maatwerk is investeren in behoud — en dat betaalt zich terug.",
        ],
      },
    ],
    closing: {
      headline: "Ontdek hoe onze innovatie u helpt talent te behouden en vervangingskosten te verlagen.",
      headlineAccent: "talent te behouden",
      ctaLabel: "Plan een vrijblijvend gesprek",
    },
  },
  en: {
    chapter: "3a",
    parentChapter: "03",
    parentLabel: "Retaining talent",
    parentHref: "/talent-behouden",
    label: "Innovation for talent retention",
    h1: "The better you connect, the longer they stay",
    h1Accent: "better you connect",
    intro: {
      eyebrow: "Our innovation",
      headline: "No longer a fixed package, but a flexible tool that moves with your people.",
      paragraphs: [
        "Organisations that want to retain talent need to think differently about employment terms. Not as a fixed package, but as a flexible tool that moves with the needs of employees.",
        "When employees are given the room to put together their own employment terms, real engagement follows. People choose what suits them and feel more seen and appreciated as a result. That translates directly into loyalty.",
        "Employees whose terms genuinely fit their lives have less reason to look elsewhere. They stay longer, are more motivated and contribute more actively to the organisation.",
      ],
    },
    sections: [
      {
        type: "text" as const,
        eyebrow: "Tailored terms expensive? That was true.",
        heading: "Personal freedom of choice is normally unthinkable and unaffordable.",
        headingAccent: "unaffordable",
        paragraphs: [
          "For many organisations, tailored employment terms feel like something that sounds attractive in theory but is unworkable in practice. The first thought is often: too complex, too expensive and hard to organise for every individual employee.",
          "And for a long time that was indeed the case. That is why many organisations held on to standard packages, while employees were increasingly looking for freedom of choice and personal relevance.",
          "Our innovation has changed that fundamentally. We make it possible for tailored employment terms to be accessible and affordable for every organisation, without complexity, without uncontrollable costs, but with room for the individual employee.",
        ],
      },
      {
        type: "callout" as const,
        quote: "Personal where it counts, manageable for the organisation. What was once an expensive challenge is now a smart and achievable solution.",
      },
      {
        type: "text" as const,
        eyebrow: "Two birds, one stone",
        heading: "More loyalty and lower costs.",
        headingAccent: "lower costs",
        paragraphs: [
          "Employees get the freedom to choose what suits them. That makes them feel more engaged and appreciated, which directly leads to higher loyalty and a stronger bond with the organisation.",
          "And that has a concrete effect. When employees stay longer, replacement costs drop significantly. Less turnover means less recruitment, less ramp-up time and less loss of knowledge and experience.",
          "A solution that not only binds your employees more strongly, but also makes your organisation financially healthier. Investing in tailored terms is investing in retention, and it pays for itself.",
        ],
      },
    ],
    closing: {
      headline: "Discover how our innovation helps you retain talent and reduce replacement costs.",
      headlineAccent: "retain talent",
      ctaLabel: "Book a no-obligation call",
    },
  },
} satisfies Record<Lang, SubpageTemplateProps>;

export const talentBehoudenArbeidsvoorwaarden = {
  nl: {
    chapter: "3b",
    parentChapter: "03",
    parentLabel: "Talent behouden",
    parentHref: "/talent-behouden",
    label: "Standaard arbeidsvoorwaarden verleden tijd",
    h1: "Standaard arbeidsvoorwaarden? Die tijd is voorbij",
    h1Accent: "voorbij",
    intro: {
      eyebrow: "De arbeidsmarkt verandert",
      headline: "Eén generiek pakket past simpelweg niet meer bij een diverse generatie medewerkers.",
      paragraphs: [
        "De arbeidsmarkt is veranderd. De bestaande en traditionele arbeidsvoorwaarden werken steeds minder effectief, omdat zij weinig differentiatie bieden. Medewerkers verwachten geen standaardpakket meer, maar arbeidsvoorwaarden die aansluiten bij wie zij zijn, afgestemd op hun situatie, hun levensfase en wat zij belangrijk vinden.",
        "Waar de één behoefte heeft aan flexibiliteit en balans, kiest de ander voor avontuur, mobiliteit, gezondheid of financiële ruimte. Wat medewerkers zoeken, is iets dat persoonlijk relevant voelt en hen daadwerkelijk motiveert.",
      ],
    },
    sections: [
      {
        type: "text" as const,
        eyebrow: "Het uitvoeringsprobleem",
        heading: "Veel organisaties herkennen dit, maar lopen vast op de uitvoering.",
        headingAccent: "uitvoering",
        paragraphs: [
          "Hoe biedt u maatwerk aan zonder dat het complex, tijdrovend en kostbaar wordt? Dat is precies waar wij het verschil maken.",
          "Wij draaien het uitgangspunt om: niet langer bepaalt de werkgever welke extra's worden aangeboden, maar de medewerker kiest zelf wat voor hem of haar waardevol is — binnen duidelijke en beheersbare kaders.",
        ],
      },
      {
        type: "callout" as const,
        quote: "Met onze digitale oplossing wordt persoonlijke keuzevrijheid eenvoudig te organiseren. Wat voorheen onhaalbaar leek, maken wij toegankelijk en betaalbaar voor iedere organisatie.",
      },
      {
        type: "text" as const,
        eyebrow: "Maatwerk dat wél schaalbaar is",
        heading: "Het resultaat is direct merkbaar.",
        headingAccent: "direct merkbaar",
        paragraphs: [
          "Medewerkers ervaren meer regie, voelen zich gezien en kiezen bewust voor wat hen motiveert. Dat vergroot niet alleen de betrokkenheid, maar ook de loyaliteit. Deze innovatie maakt van werken iets tastbaars. En juist daar zit de echte waarde.",
          "Organisaties die deze stap zetten, zien dat medewerkers langer blijven. Dat betekent minder verloop, minder wervingsdruk en aanzienlijk lagere vervangingskosten.",
        ],
      },
      {
        type: "stat" as const,
        eyebrow: "Minimale besparing op vervangingskosten",
        value: "€19.200",
        detail: "Per behouden medewerker — bij modaal inkomen en een minimale vervangingsimpact van 40%. Voor managers en specialisten loopt het bedrag fors verder op.",
        sourceNote: "Gallup · Randstad · CPB",
      },
      {
        type: "text" as const,
        eyebrow: "Een nieuwe balans",
        heading: "Vrijheid voor uw mensen, grip op uw kosten.",
        headingAccent: "Vrijheid voor uw mensen",
        paragraphs: [
          "Zo ontstaat een nieuwe balans in werkgeverschap: meer vrijheid en motivatie voor medewerkers, gecombineerd met flexibiliteit, controle en kostenbeheersing voor de organisatie.",
          "Organisaties die hierin investeren, maken het verschil. Niet door méér te bieden, maar door beter aan te sluiten — en daarmee duurzaam te bouwen aan betrokken en loyale medewerkers.",
          "Geen standaard arbeidsvoorwaarden meer, maar een aanbod dat meebeweegt met uw mensen én met uw organisatie.",
        ],
      },
    ],
    closing: {
      headline: "Benieuwd wat dit voor uw organisatie kan betekenen?",
      headlineAccent: "uw organisatie",
      ctaLabel: "Plan een vrijblijvend gesprek",
    },
  },
  en: {
    chapter: "3b",
    parentChapter: "03",
    parentLabel: "Retaining talent",
    parentHref: "/talent-behouden",
    label: "Standard benefits are a thing of the past",
    h1: "Standard employment terms? That era is over",
    h1Accent: "over",
    intro: {
      eyebrow: "The labour market is changing",
      headline: "A single generic package simply no longer fits a diverse generation of employees.",
      paragraphs: [
        "The labour market has changed. Existing and traditional employment terms are becoming less effective because they offer little differentiation. Employees no longer expect a standard package, but terms that fit who they are, tailored to their situation, life stage and what they value.",
        "Where one person needs flexibility and balance, another chooses adventure, mobility, health or financial room. What employees are looking for is something that feels personally relevant and genuinely motivates them.",
      ],
    },
    sections: [
      {
        type: "text" as const,
        eyebrow: "The execution problem",
        heading: "Many organisations recognise this, but get stuck on execution.",
        headingAccent: "execution",
        paragraphs: [
          "How do you offer tailored terms without it becoming complex, time-consuming and expensive? That is exactly where we make the difference.",
          "We flip the starting point: the employer no longer decides which extras are offered, the employee chooses what is valuable to them, within clear and manageable frameworks.",
        ],
      },
      {
        type: "callout" as const,
        quote: "With our digital solution, personal freedom of choice becomes easy to organise. What previously seemed unworkable, we make accessible and affordable for every organisation.",
      },
      {
        type: "text" as const,
        eyebrow: "Tailored terms that scale",
        heading: "The result is immediately noticeable.",
        headingAccent: "immediately noticeable",
        paragraphs: [
          "Employees experience more control, feel seen and consciously choose what motivates them. That increases not only engagement but also loyalty. This innovation makes work tangible. And that is where the real value lies.",
          "Organisations that take this step see employees staying longer. That means less turnover, less recruitment pressure and significantly lower replacement costs.",
        ],
      },
      {
        type: "stat" as const,
        eyebrow: "Minimum saving on replacement costs",
        value: "€19,200",
        detail: "Per retained employee, at average income and a minimum replacement impact of 40%. For managers and specialists the figure rises considerably.",
        sourceNote: "Gallup · Randstad · CPB",
      },
      {
        type: "text" as const,
        eyebrow: "A new balance",
        heading: "Freedom for your people, control over your costs.",
        headingAccent: "Freedom for your people",
        paragraphs: [
          "That creates a new balance in employment: more freedom and motivation for employees, combined with flexibility, control and cost management for the organisation.",
          "Organisations that invest in this make the difference. Not by offering more, but by connecting better, and in doing so building sustainably towards engaged and loyal employees.",
          "No more standard terms, but an offer that moves with your people and with your organisation.",
        ],
      },
    ],
    closing: {
      headline: "Curious what this could mean for your organisation?",
      headlineAccent: "your organisation",
      ctaLabel: "Book a no-obligation call",
    },
  },
} satisfies Record<Lang, SubpageTemplateProps>;

export const talentBehoudenVervangingskosten = {
  nl: {
    chapter: "3c",
    parentChapter: "03",
    parentLabel: "Talent behouden",
    parentHref: "/talent-behouden",
    label: "Waar bestaan vervangingskosten uit?",
    h1: "Eén vertrek, tien soorten kosten",
    h1Accent: "tien soorten kosten",
    intro: {
      eyebrow: "Het verborgen prijskaartje",
      headline: "Het vervangen van een medewerker kost vaak veel meer dan organisaties denken.",
      paragraphs: [
        "Wanneer een medewerker vertrekt, kijken veel organisaties in eerste instantie vooral naar de zichtbare kosten van werving en selectie. Maar in werkelijkheid bestaat vervanging uit veel meer dan alleen een vacature plaatsen of een recruiter inschakelen.",
        "Juist de combinatie van directe én indirecte kosten zorgt ervoor dat vervangingskosten snel oplopen. Onderzoek laat zien dat de kosten van personeelsverloop kunnen oplopen van 40% tot 200% van het bruto jaarsalaris, afhankelijk van het type functie.",
      ],
      sourceNote: "Bron: Gallup, 42% of Employee Turnover Is Preventable but Often Ignored",
    },
    sections: [
      {
        type: "numbered-list" as const,
        eyebrow: "Waaruit bestaan die vervangingskosten?",
        heading: "Tien kostenposten — vaak onzichtbaar.",
        intro: "De grootste kostenposten van een vertrekkende medewerker zijn vaak onzichtbaar. Inzicht is de eerste stap naar besparing.",
        items: [
          { n: "01", title: "Vacature- en advertentiekosten", text: "Vacatureplaatsingen, jobboards, social advertising, employer branding. Vaak de eerste zichtbare kosten — zeker niet de enige." },
          { n: "02", title: "Tijd van HR en hiring managers", text: "Vacatureteksten, cv's beoordelen, sollicitatiegesprekken. Directe loonkosten plus opportuniteitsverlies." },
          { n: "03", title: "Selectie, screening en assessment", text: "Extra kosten voor screening, referentiechecks, assessments, testinstrumenten en administratie." },
          { n: "04", title: "Externe recruitmentondersteuning", text: "Recruiters, bureaus of searchpartijen — vast bedrag, percentage van jaarsalaris, of combinatie." },
          { n: "05", title: "Onboarding en inwerktijd", text: "Tijd van collega's, leidinggevenden en HR. Wordt zelden expliciet zichtbaar, telt wel mee." },
          { n: "06", title: "Opleiding en training", text: "Onboarding-programma's, systeemtrainingen, vakinhoudelijke scholing, certificeringen." },
          { n: "07", title: "Lagere productiviteit tijdens inwerken", text: "Een nieuwe medewerker is zelden vanaf dag één volledig productief. De dip is een belangrijke reden waarom kosten oplopen." },
          { n: "08", title: "Herstelwerk en extra belasting collega's", text: "Fouten, vragen, taken tijdelijk overnemen. Werkdruk stijgt, indirect leidt dit weer tot kosten." },
          { n: "09", title: "Verlies van kennis, ervaring en relaties", text: "Bij ervaren krachten en sleutelposities moeilijk in euro's uit te drukken — impact op continuïteit en kwaliteit is groot." },
          { n: "10", title: "Vertraging en gemiste kansen", text: "Projecten vertragen, klanten worden minder goed bediend, commerciële kansen blijven liggen." },
        ],
        sourceNote: "Bron: Gallup · 42% of Employee Turnover Is Preventable but Often Ignored",
      },
      {
        type: "stat" as const,
        eyebrow: "Minimale ondergrens, modaal salaris",
        value: "€19.200",
        detail: "Bij een bruto modaal jaarinkomen van €48.000 ligt de ondergrens van 40% al op €19.200 per medewerker. Voor managers loopt het op tot 200% — €96.000 of meer.",
        sourceNote: "Gallup · Randstad · CPB Kerngegevens MEV 2026",
      },
      {
        type: "text" as const,
        eyebrow: "Waarom inzicht loont",
        heading: "Vervangingskosten lopen op tot 40% tot 200% van het bruto jaarsalaris.",
        headingAccent: "40% tot 200%",
        paragraphs: [
          "Veel organisaties zien vooral de directe kosten van vertrek, maar juist de indirecte kosten maken personeelsverloop duur. Daarom is het goed verklaarbaar dat vervangingskosten kunnen oplopen van 40% tot 200% van het bruto jaarsalaris, afhankelijk van de functie en de complexiteit van de vervanging.",
          "Wie rekent, ziet waarom behouden loont. Bereken zelf wat dit voor uw organisatie kan betekenen — gebruik onze interactieve calculator op de pagina Talent behouden.",
        ],
      },
    ],
    closing: {
      headline: "Inzicht in uw vervangingskosten — en hoeveel u kunt besparen?",
      headlineAccent: "kunt besparen",
      ctaLabel: "Plan een vrijblijvend gesprek",
    },
  },
  en: {
    chapter: "3c",
    parentChapter: "03",
    parentLabel: "Retaining talent",
    parentHref: "/talent-behouden",
    label: "What do replacement costs consist of?",
    h1: "One departure, ten types of cost",
    h1Accent: "ten types of cost",
    intro: {
      eyebrow: "The hidden price tag",
      headline: "Replacing an employee often costs far more than organisations realise.",
      paragraphs: [
        "When an employee leaves, many organisations initially focus mainly on the visible costs of recruitment and selection. But in reality, replacement involves far more than just posting a vacancy or hiring a recruiter.",
        "It is precisely the combination of direct and indirect costs that makes replacement costs add up quickly. Research shows that the cost of staff turnover can run from 40% to 200% of gross annual salary, depending on the role.",
      ],
      sourceNote: "Source: Gallup, 42% of Employee Turnover Is Preventable but Often Ignored",
    },
    sections: [
      {
        type: "numbered-list" as const,
        eyebrow: "What do those replacement costs consist of?",
        heading: "Ten cost items, often invisible.",
        intro: "The largest cost items of a departing employee are often invisible. Insight is the first step towards saving.",
        items: [
          { n: "01", title: "Vacancy and advertising costs", text: "Job postings, job boards, social advertising, employer branding. Often the first visible costs, certainly not the only ones." },
          { n: "02", title: "Time of HR and hiring managers", text: "Drafting vacancies, reviewing CVs, holding interviews. Direct wage costs plus opportunity lost elsewhere." },
          { n: "03", title: "Selection, screening and assessment", text: "Extra costs for screening, reference checks, assessments, test instruments and administration." },
          { n: "04", title: "External recruitment support", text: "Recruiters, agencies or search firms: a fixed fee, a percentage of the annual salary, or a combination." },
          { n: "05", title: "Onboarding and ramp-up time", text: "Time from colleagues, managers and HR. Rarely made explicit, yet it genuinely counts." },
          { n: "06", title: "Education and training", text: "Onboarding programmes, system training, professional schooling, certifications." },
          { n: "07", title: "Lower productivity during onboarding", text: "A new employee is rarely fully productive from day one. The dip is a key reason why costs add up." },
          { n: "08", title: "Rework and extra strain on colleagues", text: "Mistakes, questions, temporarily taking over tasks. Workload rises, which indirectly drives costs again." },
          { n: "09", title: "Loss of knowledge, experience and relationships", text: "For experienced staff and key positions this is hard to express in euros, but the impact on continuity and quality is significant." },
          { n: "10", title: "Delays and missed opportunities", text: "Projects slow down, customers are served less well, commercial opportunities are left on the table." },
        ],
        sourceNote: "Source: Gallup · 42% of Employee Turnover Is Preventable but Often Ignored",
      },
      {
        type: "stat" as const,
        eyebrow: "Minimum floor, average salary",
        value: "€19,200",
        detail: "With a gross average annual income of €48,000, the 40% floor is already €19,200 per employee. For managers it runs up to 200%, €96,000 or more.",
        sourceNote: "Gallup · Randstad · CPB Key Figures MEV 2026",
      },
      {
        type: "text" as const,
        eyebrow: "Why insight pays",
        heading: "Replacement costs run from 40% to 200% of gross annual salary.",
        headingAccent: "40% to 200%",
        paragraphs: [
          "Many organisations see mainly the direct costs of departure, but it is precisely the indirect costs that make staff turnover expensive. That is why it is entirely understandable that replacement costs can run from 40% to 200% of gross annual salary, depending on the role and the complexity of the replacement.",
          "Those who do the maths see why retention pays. Calculate what this means for your organisation using our interactive calculator on the Retaining Talent page.",
        ],
      },
    ],
    closing: {
      headline: "Insight into your replacement costs, and how much you could save?",
      headlineAccent: "could save",
      ctaLabel: "Book a no-obligation call",
    },
  },
} satisfies Record<Lang, SubpageTemplateProps>;
