import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site";

/**
 * Served at /sitemap.xml. Lists every real, indexable route.
 * Placeholder legal links (privacy/cookies/voorwaarden = href="#") zijn bewust
 * weggelaten tot er echte pagina's zijn.
 */

const LAST_MODIFIED = "2026-06-17";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const ENTRIES: Entry[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },

  // Hoofddiensten
  { path: "/talent-aantrekken", priority: 0.9, changeFrequency: "monthly" },
  { path: "/talent-behouden", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ziekteverzuim", priority: 0.9, changeFrequency: "monthly" },
  { path: "/inkoop", priority: 0.9, changeFrequency: "monthly" },
  { path: "/marketing", priority: 0.9, changeFrequency: "monthly" },

  // Talent aantrekken — verdieping
  { path: "/talent-aantrekken/innovatie", priority: 0.7, changeFrequency: "monthly" },
  { path: "/talent-aantrekken/employer-branding", priority: 0.7, changeFrequency: "monthly" },
  { path: "/talent-aantrekken/waarom-werkgevers", priority: 0.7, changeFrequency: "monthly" },
  { path: "/talent-aantrekken/dooh-effectief", priority: 0.7, changeFrequency: "monthly" },

  // Talent behouden — verdieping
  { path: "/talent-behouden/innovatie", priority: 0.7, changeFrequency: "monthly" },
  { path: "/talent-behouden/arbeidsvoorwaarden", priority: 0.7, changeFrequency: "monthly" },
  { path: "/talent-behouden/vervangingskosten", priority: 0.7, changeFrequency: "monthly" },
  { path: "/talent-behouden/bereken", priority: 0.7, changeFrequency: "monthly" },

  // Ziekteverzuim — verdieping
  { path: "/ziekteverzuim/innovatie", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ziekteverzuim/gevolgen", priority: 0.7, changeFrequency: "monthly" },

  // Inkoop — verdieping
  { path: "/inkoop/innovatie", priority: 0.7, changeFrequency: "monthly" },
  { path: "/inkoop/aanbesteden", priority: 0.7, changeFrequency: "monthly" },
  { path: "/inkoop/contractmanagement", priority: 0.7, changeFrequency: "monthly" },

  // Marketing — verdieping
  { path: "/marketing/innovatie", priority: 0.7, changeFrequency: "monthly" },

  // Over ons + contact
  { path: "/over-ons", priority: 0.6, changeFrequency: "monthly" },
  { path: "/over-ons/visie", priority: 0.5, changeFrequency: "yearly" },
  { path: "/over-ons/team", priority: 0.5, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ENTRIES.map((e) => ({
    url: `${SITE_URL}${e.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));
}
