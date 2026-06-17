/**
 * Central SEO constants for Digital Concepts Factory.
 * Single source of truth for domain, brand, contact and address details
 * used across metadata, sitemap, robots, JSON-LD and the GEO files.
 */

/** Canonical production domain (no trailing slash). DNS koppeling volgt; canonicals wijzen hier al naar. */
export const SITE_URL = "https://digitalconceptsfactory.nl";

export const SITE_NAME = "Digital Concepts Factory";
export const SITE_LEGAL_NAME = "Digital Concepts Factory B.V.";

export const DEFAULT_TITLE =
  "Digital Concepts Factory — Grip op groei begint met digitale innovatie";

export const DEFAULT_DESCRIPTION =
  "Digital Concepts Factory ontwikkelt digitale innovaties voor HR, Inkoop en Marketing. Sneller talent vinden, langer behouden, ziekteverzuim verlagen en inkoop slimmer organiseren.";

export const CONTACT_EMAIL = "info@digitalconceptsfactory.nl";

/** Office (uit footer/contact). Geen straat/telefoon bekend in de codebase. */
export const ADDRESS_LOCALITY = "Rotterdam";
export const ADDRESS_COUNTRY = "NL";
export const AREA_SERVED = "Netherlands";

/** Social/LinkedIn profielen voor Organization.sameAs. Aanvullen zodra bekend. */
export const SAME_AS: string[] = [];

/** Logo met wordmark, gebruikt in Organization-schema. */
export const LOGO_PATH = "/logo-slogan.png";

/** Default OG-image (dynamisch gegenereerd door app/opengraph-image.tsx). */
export const OG_IMAGE = `${SITE_URL}/opengraph-image`;
export const OG_IMAGE_ALT =
  "Digital Concepts Factory — digitale innovatie voor HR, Inkoop en Marketing";
