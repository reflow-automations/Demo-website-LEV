/**
 * Per-page SEO registry + helper.
 *
 * Every "use client" route gets a co-located server `layout.tsx` that calls
 * `metaFor("/route")`. Titles flow through the root layout's title template
 * ("%s | Digital Concepts Factory"); og:title/og:description fall back to the
 * page title/description, og:image + locale/siteName are inherited from the
 * root layout, so per-route metadata stays minimal and avoids the nested
 * openGraph "wholesale replace" pitfall.
 *
 * Descriptions: Nederlands, u-vorm, ~150-160 tekens, geen em-dashes.
 */

import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, OG_IMAGE, OG_IMAGE_ALT } from "./site";

export type SeoEntry = { title: string; description: string };

/** Shared Open Graph fields, spread per route so nesting never drops them. */
const OG_BASE = {
  type: "website" as const,
  locale: "nl_NL",
  siteName: SITE_NAME,
};

export const pageSeo: Record<string, SeoEntry> = {
  // --- Talent aantrekken ---
  "/talent-aantrekken": {
    title: "Talent aantrekken",
    description:
      "Trek in een krappe arbeidsmarkt de juiste mensen aan. DCF combineert employer branding, Digital Out of Home en slimme retargeting om talent online en offline te bereiken.",
  },
  "/talent-aantrekken/innovatie": {
    title: "Innovatie talent aantrekken",
    description:
      "Hoe Digital Concepts Factory werkgevers op het juiste moment bij de juiste kandidaten in beeld brengt, online en offline, van branding tot conversie.",
  },
  "/talent-aantrekken/employer-branding": {
    title: "Employer Branding",
    description:
      "Onderscheidende employer branding-campagnes die werkgevers een voorkeurspositie geven bij talent, met meer herkenning en sterkere conversie.",
  },
  "/talent-aantrekken/waarom-werkgevers": {
    title: "Waarom werkgevers gekozen worden",
    description:
      "Waarom kandidaten voor een werkgever kiezen: van offline branding via DOOH tot online conversie met slimme retargeting op de smartphone.",
  },
  "/talent-aantrekken/dooh-effectief": {
    title: "Waarom DOOH effectief is",
    description:
      "Acht concrete redenen waarom Digital Out of Home werkt voor werving: groot bereik, lange aandacht en zichtbaarheid buiten de online massa.",
  },

  // --- Talent behouden ---
  "/talent-behouden": {
    title: "Talent behouden",
    description:
      "Behoud uw beste mensen en bespaar vanaf 19.200 euro per behouden medewerker. DCF maakt maatwerk in arbeidsvoorwaarden eindelijk schaalbaar en betaalbaar.",
  },
  "/talent-behouden/innovatie": {
    title: "Innovatie talentbehoud",
    description:
      "Maatwerk in arbeidsvoorwaarden dat meebeweegt met uw mensen. Meer loyaliteit en lagere vervangingskosten, zonder complexiteit of oncontroleerbare kosten.",
  },
  "/talent-behouden/arbeidsvoorwaarden": {
    title: "Arbeidsvoorwaarden op maat",
    description:
      "Standaard arbeidsvoorwaarden passen niet meer. Bied schaalbaar maatwerk waarbij medewerkers zelf kiezen, binnen duidelijke kaders voor de organisatie.",
  },
  "/talent-behouden/vervangingskosten": {
    title: "Vervangingskosten",
    description:
      "Eén vertrek, tien soorten kosten. Ontdek waaruit vervangingskosten bestaan: 40 tot 200 procent van het bruto jaarsalaris, vaak grotendeels onzichtbaar.",
  },
  "/talent-behouden/bereken": {
    title: "Vervangingskosten berekenen",
    description:
      "Bereken wat personeelsverloop uw organisatie kost op basis van salaris, functietype en aantal vertrekkers, en zie direct het besparingspotentieel.",
  },

  // --- Ziekteverzuim ---
  "/ziekteverzuim": {
    title: "Ziekteverzuim terugdringen",
    description:
      "Verzuim raakt direct uw kosten en continuïteit. DCF biedt een betaalbare digitale oplossing die onnodige ziekmeldingen voorkomt en teams rust geeft.",
  },
  "/ziekteverzuim/innovatie": {
    title: "Innovatie ziekteverzuim",
    description:
      "Een betaalbare, toegankelijke oplossing die medewerkers gemotiveerd houdt om zich niet onnodig ziek te melden. Meer grip op kosten en continuïteit.",
  },
  "/ziekteverzuim/gevolgen": {
    title: "Gevolgen van ziekteverzuim",
    description:
      "Achter elke ziekmelding schuilt een kettingreactie. De geldelijke en niet-geldelijke gevolgen van verzuim, goed voor 8,3 miljard euro per jaar in Nederland.",
  },

  // --- Inkoop ---
  "/inkoop": {
    title: "Inkoop en aanbesteden",
    description:
      "Aanbesteden vraagt om grip, structuur en kennis. DCF brengt interne kosten en doorlooptijden van aanbestedingen en contractmanagement tot 50 procent terug.",
  },
  "/inkoop/innovatie": {
    title: "Innovatie inkoop",
    description:
      "Digitale oplossingen die inkoop, aanbestedingen en contractmanagement slimmer en beter beheersbaar maken, betaalbaar voor iedere organisatie.",
  },
  "/inkoop/aanbesteden": {
    title: "(Europees) aanbesteden",
    description:
      "Maak (Europese) aanbestedingen overzichtelijker, transparanter en goedkoper. Tot 50 procent minder interne kosten en kortere doorlooptijden.",
  },
  "/inkoop/contractmanagement": {
    title: "Contractmanagement",
    description:
      "Grip op contracten begint met inzicht en overzicht. Centraal beheer, tijdige signalering van verlengingen en minder afhankelijkheid van losse bestanden.",
  },

  // --- Marketing ---
  "/marketing": {
    title: "Marketing",
    description:
      "Als iedereen zichtbaar is, moet u anders zijn. DCF ontwikkelt verrassende marketingconcepten die online en offline combineren, gericht op resultaat.",
  },
  "/marketing/innovatie": {
    title: "Innovatie marketing",
    description:
      "Marketing die niet alleen opvalt maar ook oplevert. Wij combineren slimme online activaties met sterke offline toepassingen, van concept tot uitvoering.",
  },

  // --- Over ons ---
  "/over-ons": {
    title: "Over ons",
    description:
      "Digital Concepts Factory ontwikkelt digitale innovaties voor HR, Inkoop en Marketing. Eerst begrijpen, dan bouwen, altijd gericht op resultaat.",
  },
  "/over-ons/visie": {
    title: "Visie en kernwaarden",
    description:
      "Vijf kernwaarden sturen ons werk: innovatie die vooruithelpt, praktisch en betaalbaar, eerst begrijpen dan ontwikkelen, verrassend en resultaatgericht.",
  },
  "/over-ons/team": {
    title: "Het team",
    description:
      "Een veelzijdig team van software developers, UX-designers en strategen dat techniek, business en gebruiker met elkaar verbindt.",
  },

  // --- Contact ---
  "/contact": {
    title: "Contact",
    description:
      "Plan een vrijblijvend gesprek met Digital Concepts Factory of laat een bericht achter. Wij reageren binnen 24 uur.",
  },
};

/**
 * Build per-page Metadata. Provides a COMPLETE openGraph/twitter block so the
 * page-specific title/description/url survive (nested openGraph is replaced
 * wholesale, not merged). The og:image comes from app/opengraph-image.tsx.
 */
export function metaFor(path: string): Metadata {
  const entry = pageSeo[path];
  if (!entry) {
    throw new Error(`metaFor: geen SEO-entry voor "${path}"`);
  }
  const fullTitle = `${entry.title} | ${SITE_NAME}`;
  return {
    // Absolute title: the root template only reaches direct children, and the
    // intermediate pillar layouts set a plain string title, so deeper subpages
    // would otherwise lose the brand suffix. Absolute guarantees consistency.
    title: { absolute: fullTitle },
    description: entry.description,
    alternates: { canonical: path },
    openGraph: {
      ...OG_BASE,
      title: fullTitle,
      description: entry.description,
      url: `${SITE_URL}${path}`,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: entry.description,
      images: [OG_IMAGE],
    },
  };
}
