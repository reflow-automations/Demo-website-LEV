import type { Lang } from "@/lib/i18n/config";

/** All copy for the home page, per language. Structure must match across langs. */
export const home = {
  nl: {
    hero: {
      eyebrow: "Digitale innovatie · HR · Inkoop · Marketing",
      h1: "Grip op groei begint met digitale innovatie",
      h1Accent: "digitale innovatie",
      lead: "Digital Concepts Factory ontwikkelt innovatieve technologie waarmee organisaties hun grootste uitdagingen doelgericht aanpakken, van talent vinden en behouden tot inkoop slimmer organiseren en marketing onderscheidend inzetten.",
      ctaSecondary: "Bekijk innovaties",
    },
    pillars: {
      chapter: "Onze innovaties",
      heading: "Vijf domeinen, één vaste belofte.",
      headingAccent: "vaste belofte",
      intro:
        "Innovaties die organisaties praktisch helpen, geen losse tools of tijdelijke oplossingen, maar digitale verbeteringen met duurzame impact op groei, continuïteit en rendement.",
      items: [
        {
          summary:
            "Werkgevers op het netvlies van talent, online én offline zichtbaar via DOOH-netwerken en slimme retargeting.",
          bullets: ["Employer Branding", "DOOH-campagnes", "Retargeting"],
        },
        {
          summary:
            "Persoonlijke arbeidsvoorwaarden binnen heldere kaders. Minder verloop, lagere vervangingskosten, sterkere binding.",
          bullets: ["Maatwerk", "€19.200 p/p besparing", "Schaalbaar"],
        },
        {
          summary:
            "Een betaalbare digitale oplossing die medewerkers gemotiveerd houdt, gerichter, lichter en direct uitvoerbaar.",
          bullets: ["Kortdurend verzuim", "€4.5K, €7K p/p p/j", "Direct toepasbaar"],
        },
        {
          summary:
            "Aanbestedingen en contractmanagement overzichtelijker, transparanter en goedkoper, tot 50% kostenreductie.",
          bullets: ["(Europees) aanbesteden", "Contractmanagement", "Tot 50% besparing"],
        },
        {
          summary:
            "Geen campagnes voor zichtbaarheid alleen, maar concepten die online en offline samenbrengen voor maximale impact.",
          bullets: ["Onderscheidende concepten", "Online + offline", "Resultaatgericht"],
        },
      ],
    },
    stats: {
      chapter: "De cijfers",
      heading: "Innovatie die rekent.",
      headingAccent: "rekent",
      calcLink: "Bereken uw besparingspotentieel",
      items: [
        {
          label: "Minimale besparing per behouden medewerker",
          detail:
            "Vervangingskosten bedragen 40% tot 200% van het bruto jaarsalaris. Bij modaal inkomen (€48.000) ligt de ondergrens al op €19.200 per medewerker.",
          source: "Gallup · Randstad",
          prefix: "€",
        },
        {
          label: "Reductie aanbestedingskosten",
          detail:
            "Met onze digitale innovatie voor (Europees) aanbesteden kunnen interne kosten en doorlooptijden met de helft worden teruggebracht.",
          source: "DCF onderzoek",
          word: "tot",
          suffix: "%",
        },
        {
          label: "Verzuimkosten per medewerker per jaar",
          detail:
            "Gemiddelde kosten van ziekteverzuim in Nederland, exclusief de indirecte gevolgen voor productiviteit, teams en continuïteit.",
          source: "TNO · ArboNed",
          prefix: "€",
        },
        {
          label: "Bereik DOOH-netwerk per maand",
          detail:
            "Afhankelijk van locaties en campagne-opzet bereiken onze DOOH-schermen 250.000 tot 2 miljoen kandidaten per maand, vooral in de Randstad.",
          source: "DCF netwerk",
          suffix: " mln+",
        },
      ],
    },
    manifesto: {
      chapter: "Onze overtuiging",
      heading:
        "De brug tussen traditionele organisaties en de digitale toekomst.",
      headingAccent: "traditionele organisaties",
      intro:
        "Degelijk waar het moet, vernieuwend waar het kan. Drie principes die aan elke opdracht ten grondslag liggen.",
      points: [
        {
          title: "Eerst begrijpen, dan bouwen",
          text: "Achter iedere organisatie zit een eigen verhaal. Wij nemen de tijd om klanten goed te leren kennen, voordat we ook maar een regel code schrijven.",
        },
        {
          title: "Praktisch en betaalbaar",
          text: "Innovatie moet werken in de dagelijkse praktijk, niet alleen indrukwekkend zijn op papier. Daarom blijven onze oplossingen toegankelijk en uitvoerbaar.",
        },
        {
          title: "Resultaat is altijd het einddoel",
          text: "Meer grip. Minder kosten. Sterkere positionering. Betere processen. Concrete uitkomsten waaraan onze klanten ons mogen afrekenen.",
        },
      ],
    },
    clients: {
      eyebrow: "Wij zijn trots op onze samenwerkingen",
    },
    newsletter: {
      chapter: "Nieuwsbrief",
      heading: "Ontvang als eerste de innovaties die het verschil maken.",
      headingAccent: "verschil maken",
      intro:
        "Eén editie per maand, met de nieuwste digitale innovaties die de verbindende schakel vormen tussen de oude en de nieuwe wereld.",
      placeholder: "naam@organisatie.nl",
      submit: "Aanmelden",
      submitted: "Bedankt, u staat op de lijst",
      fineprint: "Uitschrijven altijd mogelijk.",
    },
    finalCta: {
      heading:
        "Wilt u ontdekken hoe digitale innovatie uw organisatie kan helpen groeien?",
      headingAccent: "uw organisatie",
    },
  },

  en: {
    hero: {
      eyebrow: "Digital innovation · HR · Procurement · Marketing",
      h1: "Control over growth starts with digital innovation",
      h1Accent: "digital innovation",
      lead: "Digital Concepts Factory builds innovative technology that helps organisations tackle their biggest challenges head-on, from finding and retaining talent to organising procurement more intelligently and deploying marketing that sets them apart.",
      ctaSecondary: "Explore innovations",
    },
    pillars: {
      chapter: "Our innovations",
      heading: "Five domains, one firm promise.",
      headingAccent: "firm promise",
      intro:
        "Innovations that help organisations in practice. Not isolated tools or temporary fixes, but digital improvements with lasting impact on growth, continuity and return.",
      items: [
        {
          summary:
            "Employers on talent's radar, visible online and offline through DOOH networks and smart retargeting.",
          bullets: ["Employer branding", "DOOH campaigns", "Retargeting"],
        },
        {
          summary:
            "Personalised employment terms within clear frameworks. Less turnover, lower replacement costs, stronger commitment.",
          bullets: ["Tailored", "€19,200 p/p saving", "Scalable"],
        },
        {
          summary:
            "An affordable digital solution that keeps employees motivated. More targeted, lighter and ready to apply right away.",
          bullets: ["Short-term absence", "€4.5K, €7K p/p p/y", "Immediately applicable"],
        },
        {
          summary:
            "Tendering and contract management made clearer, more transparent and more affordable, with up to 50% cost reduction.",
          bullets: ["(European) tendering", "Contract management", "Up to 50% saving"],
        },
        {
          summary:
            "Not campaigns for visibility alone, but concepts that bring online and offline together for maximum impact.",
          bullets: ["Distinctive concepts", "Online + offline", "Results-driven"],
        },
      ],
    },
    stats: {
      chapter: "The numbers",
      heading: "Innovation that adds up.",
      headingAccent: "adds up",
      calcLink: "Calculate your savings potential",
      items: [
        {
          label: "Minimum saving per retained employee",
          detail:
            "Replacement costs range from 40% to 200% of gross annual salary. At an average income (€48,000), the lower bound already sits at €19,200 per employee.",
          source: "Gallup · Randstad",
          prefix: "€",
        },
        {
          label: "Reduction in tendering costs",
          detail:
            "With our digital innovation for (European) tendering, internal costs and lead times can be cut in half.",
          source: "DCF research",
          word: "up to",
          suffix: "%",
        },
        {
          label: "Absence costs per employee per year",
          detail:
            "Average cost of absenteeism in the Netherlands, excluding the indirect impact on productivity, teams and continuity.",
          source: "TNO · ArboNed",
          prefix: "€",
        },
        {
          label: "DOOH network reach per month",
          detail:
            "Depending on locations and campaign setup, our DOOH screens reach 250,000 to 2 million candidates per month, mainly in the Randstad region.",
          source: "DCF network",
          suffix: " M+",
        },
      ],
    },
    manifesto: {
      chapter: "What we believe",
      heading:
        "The bridge between traditional organisations and the digital future.",
      headingAccent: "traditional organisations",
      intro:
        "Solid where it must be, innovative where it can be. Three principles that underpin every assignment.",
      points: [
        {
          title: "Understand first, then build",
          text: "Behind every organisation is a story of its own. We take the time to get to know our clients well, before we write a single line of code.",
        },
        {
          title: "Practical and affordable",
          text: "Innovation has to work in daily practice, not just look impressive on paper. That is why our solutions stay accessible and workable.",
        },
        {
          title: "Results are always the goal",
          text: "More control. Lower costs. Stronger positioning. Better processes. Concrete outcomes our clients can hold us to.",
        },
      ],
    },
    clients: {
      eyebrow: "We are proud of our collaborations",
    },
    newsletter: {
      chapter: "Newsletter",
      heading: "Be the first to receive the innovations that make the difference.",
      headingAccent: "make the difference",
      intro:
        "One edition a month, featuring the latest digital innovations that bridge the old world and the new.",
      placeholder: "name@organisation.com",
      submit: "Subscribe",
      submitted: "Thank you, you're on the list",
      fineprint: "Unsubscribe at any time.",
    },
    finalCta: {
      heading:
        "Want to discover how digital innovation can help your organisation grow?",
      headingAccent: "your organisation",
    },
  },
} satisfies Record<Lang, unknown>;
