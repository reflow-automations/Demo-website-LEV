/**
 * JSON-LD schema builders (schema.org). Returned objects carry NO @context;
 * the <JsonLd> component wraps them in a single { @context, @graph } block.
 * Cross-references use @id so Organization/WebSite are defined once and reused.
 */

import {
  SITE_URL,
  SITE_NAME,
  SITE_LEGAL_NAME,
  DEFAULT_DESCRIPTION,
  CONTACT_EMAIL,
  ADDRESS_LOCALITY,
  ADDRESS_COUNTRY,
  AREA_SERVED,
  SAME_AS,
  LOGO_PATH,
} from "./site";
import { pageSeo } from "./meta";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

type Schema = Record<string, unknown>;

export const organizationSchema: Schema = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  legalName: SITE_LEGAL_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}${LOGO_PATH}`,
  },
  description: DEFAULT_DESCRIPTION,
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: ADDRESS_LOCALITY,
    addressCountry: ADDRESS_COUNTRY,
  },
  areaServed: { "@type": "Country", name: AREA_SERVED },
  knowsAbout: [
    "Talent aantrekken",
    "Talent behouden",
    "Ziekteverzuim",
    "Inkoop en aanbesteden",
    "Marketing",
    "Digitale innovatie",
  ],
  ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
};

export const websiteSchema: Schema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "nl-NL",
  publisher: { "@id": ORG_ID },
};

/** Service node, name + description pulled from the page registry. */
export function serviceSchemaFor(path: string, serviceType: string): Schema {
  const entry = pageSeo[path];
  return {
    "@type": "Service",
    name: entry?.title ?? SITE_NAME,
    description: entry?.description ?? DEFAULT_DESCRIPTION,
    url: `${SITE_URL}${path}`,
    serviceType,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: AREA_SERVED },
  };
}

export type FaqItem = { q: string; a: string };

export function faqSchema(items: FaqItem[]): Schema {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Schema {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

/** Auto-build a breadcrumb trail from a path using the page registry titles. */
export function breadcrumbFor(path: string): Schema {
  const items = [{ name: "Home", path: "/" }];
  let acc = "";
  for (const part of path.split("/").filter(Boolean)) {
    acc += `/${part}`;
    items.push({ name: pageSeo[acc]?.title ?? part, path: acc });
  }
  return breadcrumbSchema(items);
}

export function contactPageSchema(): Schema {
  return {
    "@type": "ContactPage",
    name: `Contact — ${SITE_NAME}`,
    url: `${SITE_URL}/contact`,
    description: pageSeo["/contact"]?.description ?? "",
    inLanguage: "nl-NL",
    mainEntity: { "@id": ORG_ID },
  };
}
