/**
 * i18n configuration — language types and constants.
 * Kept free of "use client" so both server and client modules can import it.
 */

export type Lang = "nl" | "en";

export const LANGS: Lang[] = ["nl", "en"];

/** Primary language. Server-rendered HTML is always this language. */
export const DEFAULT_LANG: Lang = "nl";

/** localStorage key holding the visitor's chosen language. */
export const LANG_STORAGE_KEY = "dcf-lang";

/** A bilingual value: one variant per supported language. */
export type Bilingual<T> = { nl: T; en: T };

export function isLang(value: unknown): value is Lang {
  return value === "nl" || value === "en";
}
