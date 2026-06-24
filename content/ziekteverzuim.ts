import type { Lang } from "@/lib/i18n/config";
import type { SubpageTemplateProps } from "@/components/SubpageTemplate";

export const ziekteverzuim = {
  nl: {
    hero: {
      chapter: "Ziekteverzuim terugdringen",
      h1: "Verzuim raakt direct uw kosten en continuïteit",
      h1Accent: "kosten en continuïteit",
      imageAlt: "Zieke medewerker thuis met laptop en kosten-indicatie",
    },
    intro: {
      eyebrow: "Een hardnekkig probleem",
      heading: "Vooral kortdurend verzuim blijft een terugkerend probleem",
      paragraphs: [
        "Ziekteverzuim is voor veel organisaties al jaren een forse kostenpost. De gemiddelde kosten in Nederland liggen tussen €4.500 en €7.000 per medewerker per jaar, afhankelijk van sector, functie en verzuimduur.",
        "Vooral kortstondig ziekteverzuim is voor veel werkgevers een doorn in het oog. Juist omdat het onverwacht komt, lastig te plannen is en direct leidt tot verstoring van roosters, bezetting en dienstverlening.",
      ],
      source: "Bron: TNO, Arbobalans 2024 · ArboNed",
    },
    bigNumber: {
      eyebrow: "Verzuimkosten per medewerker per jaar",
      detailPre: "In 2023 ging het in totaal om ",
      detailStrong: "€8,3 miljard",
      detailPost: " aan loondoorbetalingskosten over verzuimde werkdagen, meer dan de helft daarvan komt voort uit psychosociale arbeidsbelasting.",
      source: "TNO · Arbobalans 2024 · ArboNed · AWVN",
    },
    innovation: {
      chapter: "De innovatie",
      heading: "Eindelijk een oplossing die werkt én betaalbaar is",
      headingAccent: "én betaalbaar is",
      lead: "Veel werkgevers willen ziekteverzuim terugdringen, maar lopen in de praktijk tegen dezelfde uitdaging aan: hoe beïnvloed je gedrag op een positieve manier, zonder dat het ingewikkeld, duur of moeilijk uitvoerbaar wordt?",
      cta: "Plan gesprek",
      quote: "Digital Concepts Factory ontwikkelde een betaalbare digitale oplossing waarmee organisaties medewerkers gemotiveerd houden om zich niet onnodig ziek te melden, zonder ingewikkelde trajecten of hoge drempels.",
      body1: "Minder onnodige ziekmeldingen betekent direct meer grip op kosten, meer rust in teams, minder druk op collega's en meer continuïteit in de dagelijkse operatie.",
      body2: "De kracht zit in de combinatie van betaalbaarheid, toegankelijkheid en praktische toepasbaarheid. Haalbaar voor grote organisaties én voor werkgevers die op zoek zijn naar een oplossing die financieel verantwoord is.",
      body2Strong: "betaalbaarheid",
    },
    secondaryImageAlt: "Kettingreactie van ziekmelding op het team",
    consequences: {
      chapter: "Gevolgen van ziekteverzuim",
      heading: "Achter elke ziekmelding schuilt een kettingreactie",
      intro: "De gevolgen zijn zowel financieel als organisatorisch groot, in euro's én in werkdruk en motivatie.",
      financialTitle: "Geldelijke gevolgen",
      financialItems: [
        "Loondoorbetaling bij ziekte",
        "Kosten voor vervanging of herverdeling van werk",
        "Verlies aan productiviteit",
        "Extra administratieve en begeleidingskosten",
        "Mogelijke omzet- of kwaliteitsverliezen",
      ],
      teamTitle: "Niet-geldelijke gevolgen",
      teamItems: [
        "Hogere werkdruk bij collega's",
        "Onrust en verminderde motivatie in teams",
        "Vertraging van projecten en processen",
        "Lagere klanttevredenheid",
        "Druk op leidinggevenden en continuïteit",
      ],
      sourceNote: "TNO: psychosociale arbeidsbelasting is verantwoordelijk voor meer dan de helft van de werkgerelateerde verzuimkosten, €4,9 miljard van €8,3 miljard in 2023.",
      cta: "Bespreek uw verzuimvraagstuk",
    },
    subpages: [
      {
        no: "4a",
        title: "Innovatie ziekteverzuim",
        summary: "Betaalbare digitale oplossing om onnodige ziekmeldingen te voorkomen.",
        href: "/ziekteverzuim/innovatie",
      },
      {
        no: "4b",
        title: "Gevolgen van verzuim",
        summary: "Geldelijke én niet-geldelijke impact — €8,3 miljard per jaar in NL.",
        href: "/ziekteverzuim/gevolgen",
      },
    ],
    closing: {
      heading: "Verzuim structureel verlagen én grip op uw kosten?",
      headingAccent: "én",
      cta: "Plan een vrijblijvend gesprek",
    },
  },

  en: {
    hero: {
      chapter: "Reducing sick leave",
      h1: "Absenteeism hits your costs and continuity directly",
      h1Accent: "costs and continuity",
      imageAlt: "Sick employee at home with laptop and cost indicator",
    },
    intro: {
      eyebrow: "A persistent problem",
      heading: "Short-term absenteeism in particular remains a recurring problem",
      paragraphs: [
        "Sick leave has been a significant cost item for many organisations for years. Average costs in the Netherlands run between €4,500 and €7,000 per employee per year, depending on sector, role and duration.",
        "Short-term sick leave is a particular thorn in the side of many employers — precisely because it arrives unexpectedly, is hard to plan for, and immediately disrupts rosters, staffing and service delivery.",
      ],
      source: "Source: TNO, Arbobalans 2024 · ArboNed",
    },
    bigNumber: {
      eyebrow: "Absenteeism costs per employee per year",
      detailPre: "In 2023, total continued-pay costs for sick days amounted to ",
      detailStrong: "€8.3 billion",
      detailPost: ", with more than half attributable to psychosocial work pressure.",
      source: "TNO · Arbobalans 2024 · ArboNed · AWVN",
    },
    innovation: {
      chapter: "The innovation",
      heading: "Finally a solution that works and is affordable",
      headingAccent: "and is affordable",
      lead: "Many employers want to reduce sick leave but run into the same challenge in practice: how do you positively influence behaviour without making it complicated, expensive or hard to implement?",
      cta: "Book a call",
      quote: "Digital Concepts Factory developed an affordable digital solution that keeps employees motivated not to call in sick unnecessarily, without complex programmes or high barriers.",
      body1: "Fewer unnecessary sick-day calls means immediate control over costs, calmer teams, less pressure on colleagues and greater continuity in day-to-day operations.",
      body2: "The strength lies in the combination of affordability, accessibility and practical applicability. Viable for large organisations and for employers looking for a solution that is financially responsible.",
      body2Strong: "affordability",
    },
    secondaryImageAlt: "Chain reaction triggered by a sick-day call on the team",
    consequences: {
      chapter: "Consequences of sick leave",
      heading: "Every sick-day call triggers a chain reaction",
      intro: "The consequences are both financial and organisational, in euros and in workload and motivation.",
      financialTitle: "Financial consequences",
      financialItems: [
        "Continued pay during illness",
        "Costs of replacement or redistribution of work",
        "Loss of productivity",
        "Extra administrative and guidance costs",
        "Possible revenue or quality losses",
      ],
      teamTitle: "Non-financial consequences",
      teamItems: [
        "Higher workload for colleagues",
        "Unrest and reduced motivation in teams",
        "Delays in projects and processes",
        "Lower customer satisfaction",
        "Pressure on managers and continuity",
      ],
      sourceNote: "TNO: psychosocial work pressure accounts for more than half of work-related absenteeism costs, €4.9 billion out of €8.3 billion in 2023.",
      cta: "Discuss your absenteeism challenge",
    },
    subpages: [
      {
        no: "4a",
        title: "Sick leave innovation",
        summary: "Affordable digital solution to prevent unnecessary sick-day calls.",
        href: "/ziekteverzuim/innovatie",
      },
      {
        no: "4b",
        title: "Consequences of absenteeism",
        summary: "Financial and non-financial impact — €8.3 billion per year in the Netherlands.",
        href: "/ziekteverzuim/gevolgen",
      },
    ],
    closing: {
      heading: "Structurally reduce absenteeism and take control of your costs?",
      headingAccent: "and take control",
      cta: "Book a no-obligation call",
    },
  },
} satisfies Record<Lang, unknown>;

export const ziekteverzuimInnovatie = {
  nl: {
    chapter: "4a",
    parentChapter: "04",
    parentLabel: "Ziekteverzuim",
    parentHref: "/ziekteverzuim",
    label: "Innovatie ziekteverzuim",
    h1: "Werkgevers zoeken al jaren naar een oplossing die wél werkt",
    h1Accent: "wél werkt",
    intro: {
      eyebrow: "Het knelpunt",
      headline: "Hoe beïnvloed je gedrag op een positieve manier — zonder dat het ingewikkeld, duur of moeilijk uitvoerbaar wordt?",
      paragraphs: [
        "Veel werkgevers willen ziekteverzuim terugdringen, maar lopen in de praktijk tegen dezelfde uitdaging aan. Oplossingen zijn vaak te zwaar, te kostbaar of sluiten onvoldoende aan op de dagelijkse praktijk.",
        "Daardoor blijft kortdurend verzuim een terugkerend probleem waar organisaties jaar na jaar veel geld op verliezen.",
      ],
    },
    sections: [
      {
        type: "callout" as const,
        quote: "Een betaalbare digitale oplossing waarmee organisaties medewerkers gemotiveerd houden om zich niet onnodig ziek te melden — zonder ingewikkelde trajecten of hoge drempels.",
      },
      {
        type: "text" as const,
        eyebrow: "Wat dat oplevert",
        heading: "Meer grip op kosten, meer rust in teams, meer continuïteit",
        headingAccent: "rust in teams",
        paragraphs: [
          "Deze innovatie helpt organisaties om ziekteverzuim structureel terug te dringen. Minder onnodige ziekmeldingen betekent direct meer grip op kosten, meer rust in teams, minder druk op collega's en meer continuïteit in de dagelijkse operatie.",
          "De kracht van deze oplossing zit in de combinatie van betaalbaarheid, toegankelijkheid en praktische toepasbaarheid. Daarmee wordt het terugdringen van ziekteverzuim niet alleen haalbaar voor grote organisaties, maar juist ook voor werkgevers die op zoek zijn naar een oplossing die werkt én financieel verantwoord is.",
        ],
      },
      {
        type: "stat" as const,
        eyebrow: "Wat verzuim u kost",
        value: "€4.500 — €7.000",
        detail: "Per medewerker per jaar — gemiddelde verzuimkosten in Nederland. Een structurele reductie heeft directe financiële én organisatorische impact.",
        sourceNote: "TNO · ArboNed",
      },
    ],
    closing: {
      headline: "Ziekteverzuim structureel terugdringen én besparen op verzuimkosten?",
      headlineAccent: "structureel terugdringen",
      ctaLabel: "Plan een vrijblijvend gesprek",
    },
  } satisfies SubpageTemplateProps,

  en: {
    chapter: "4a",
    parentChapter: "04",
    parentLabel: "Sick leave",
    parentHref: "/ziekteverzuim",
    label: "Sick leave innovation",
    h1: "Employers have been searching for a solution that actually works",
    h1Accent: "actually works",
    intro: {
      eyebrow: "The bottleneck",
      headline: "How do you positively influence behaviour without making it complicated, expensive or hard to implement?",
      paragraphs: [
        "Many employers want to reduce sick leave but run into the same challenge in practice. Solutions are often too heavy, too costly or do not connect well enough to daily operations.",
        "As a result, short-term absenteeism remains a recurring problem on which organisations lose a great deal of money year after year.",
      ],
    },
    sections: [
      {
        type: "callout" as const,
        quote: "An affordable digital solution that keeps employees motivated not to call in sick unnecessarily, without complex programmes or high barriers.",
      },
      {
        type: "text" as const,
        eyebrow: "What this delivers",
        heading: "More cost control, calmer teams, greater continuity",
        headingAccent: "calmer teams",
        paragraphs: [
          "This innovation helps organisations structurally reduce sick leave. Fewer unnecessary sick-day calls means immediate control over costs, calmer teams, less pressure on colleagues and greater continuity in day-to-day operations.",
          "The strength of this solution lies in the combination of affordability, accessibility and practical applicability. That makes reducing sick leave achievable not only for large organisations but especially for employers looking for a solution that works and is financially responsible.",
        ],
      },
      {
        type: "stat" as const,
        eyebrow: "What absenteeism costs you",
        value: "€4,500 — €7,000",
        detail: "Per employee per year — average absenteeism costs in the Netherlands. A structural reduction has a direct financial and organisational impact.",
        sourceNote: "TNO · ArboNed",
      },
    ],
    closing: {
      headline: "Structurally reduce sick leave and save on absenteeism costs?",
      headlineAccent: "structurally reduce",
      ctaLabel: "Book a no-obligation call",
    },
  } satisfies SubpageTemplateProps,
} satisfies Record<Lang, SubpageTemplateProps>;

export const ziekteverzuimGevolgen = {
  nl: {
    chapter: "4b",
    parentChapter: "04",
    parentLabel: "Ziekteverzuim",
    parentHref: "/ziekteverzuim",
    label: "Gevolgen ziekteverzuim",
    h1: "Achter elke ziekmelding schuilt een kettingreactie",
    h1Accent: "kettingreactie",
    intro: {
      eyebrow: "De impact gaat verder dan loondoorbetaling",
      headline: "De gevolgen van verzuim zijn zowel financieel als organisatorisch groot",
      paragraphs: [
        "Ziekteverzuim raakt meer dan alleen uw kosten. Vooral kortdurend verzuim leidt direct tot verstoring van roosters, bezetting en dienstverlening — en zet teams onder onverwachte druk.",
        "Op organisatieniveau ontstaat hierdoor niet alleen financiële schade, maar ook onrust, vertraging en verminderde motivatie.",
      ],
    },
    sections: [
      {
        type: "two-col" as const,
        eyebrow: "De gevolgen op een rij",
        heading: "Twee soorten impact, beide te voorkomen met de juiste innovatie",
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
        type: "stat" as const,
        eyebrow: "Schaal van het probleem in NL",
        value: "€8,3 mld",
        detail: "Totale loondoorbetalingskosten over verzuimde werkdagen in 2023. Meer dan de helft (€4,9 mld) komt voort uit psychosociale arbeidsbelasting, zoals werkdruk en ongewenste omgangsvormen.",
        sourceNote: "TNO Arbobalans 2024",
      },
      {
        type: "text" as const,
        eyebrow: "Waarom de impact onderschat wordt",
        heading: "Verzuim is meer dan loondoorbetaling — het zijn de indirecte kosten die echt schade doen",
        headingAccent: "indirecte kosten",
        paragraphs: [
          "Voor organisaties blijven de kosten van verzuim niet beperkt tot loondoorbetaling alleen. Vervanging, productiviteitsverlies, administratieve lasten en verstoring van de dagelijkse operatie zorgen ervoor dat de werkelijke impact vaak veel groter is dan zichtbaar op papier.",
          "AWVN benadrukt bovendien dat werkgevers tijdens ziekte te maken hebben met loondoorbetaling én re-integratieverplichtingen, wat de financiële druk verder vergroot.",
        ],
      },
    ],
    closing: {
      headline: "Verzuim structureel verlagen én grip krijgen op uw kosten?",
      headlineAccent: "grip krijgen",
      ctaLabel: "Plan een vrijblijvend gesprek",
    },
  } satisfies SubpageTemplateProps,

  en: {
    chapter: "4b",
    parentChapter: "04",
    parentLabel: "Sick leave",
    parentHref: "/ziekteverzuim",
    label: "Consequences of sick leave",
    h1: "Every sick-day call triggers a chain reaction",
    h1Accent: "chain reaction",
    intro: {
      eyebrow: "The impact goes beyond continued pay",
      headline: "The consequences of absenteeism are both financially and organisationally significant",
      paragraphs: [
        "Sick leave affects more than just your costs. Short-term absenteeism in particular leads directly to disruption of rosters, staffing and service delivery, putting teams under unexpected pressure.",
        "At an organisational level this creates not only financial damage but also unrest, delays and reduced motivation.",
      ],
    },
    sections: [
      {
        type: "two-col" as const,
        eyebrow: "Consequences at a glance",
        heading: "Two types of impact, both preventable with the right innovation",
        headingAccent: "both preventable",
        leftTitle: "Financial consequences",
        leftItems: [
          "Continued pay during illness",
          "Costs of replacement or redistribution of work",
          "Loss of productivity",
          "Extra administrative and guidance costs",
          "Possible revenue or quality losses",
        ],
        rightTitle: "Non-financial consequences",
        rightItems: [
          "Higher workload for colleagues",
          "Unrest and reduced motivation in teams",
          "Delays in projects and processes",
          "Lower customer satisfaction",
          "Pressure on managers and continuity",
        ],
      },
      {
        type: "stat" as const,
        eyebrow: "Scale of the problem in the Netherlands",
        value: "€8.3 bn",
        detail: "Total continued-pay costs for sick days in 2023. More than half (€4.9 bn) is attributable to psychosocial work pressure, such as workload and unwanted conduct.",
        sourceNote: "TNO Arbobalans 2024",
      },
      {
        type: "text" as const,
        eyebrow: "Why the impact is underestimated",
        heading: "Absenteeism is more than continued pay — it is the indirect costs that do real damage",
        headingAccent: "indirect costs",
        paragraphs: [
          "For organisations, the costs of absenteeism are not limited to continued pay alone. Replacement, productivity loss, administrative burden and disruption to daily operations mean the real impact is often much larger than what appears on paper.",
          "AWVN also emphasises that employers during illness face both continued pay and reintegration obligations, which increases the financial pressure further.",
        ],
      },
    ],
    closing: {
      headline: "Structurally reduce absenteeism and gain control of your costs?",
      headlineAccent: "gain control",
      ctaLabel: "Book a no-obligation call",
    },
  } satisfies SubpageTemplateProps,
} satisfies Record<Lang, SubpageTemplateProps>;
