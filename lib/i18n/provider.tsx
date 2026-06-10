"use client";

/**
 * LanguageProvider — client-side language state for the whole site.
 *
 * Strategy (per project decision): client-side toggle, no URL change.
 *  - Server always renders the DEFAULT_LANG ("nl") so the primary language
 *    stays static and SEO-friendly, and the first client render matches the
 *    server (no hydration mismatch).
 *  - On mount we read the stored choice from localStorage; returning EN
 *    visitors get swapped to English right after hydration.
 *  - The choice persists in localStorage and updates <html lang>.
 *
 * Usage:
 *   const lang = useLang();                 // "nl" | "en"
 *   const { lang, setLang, toggle } = useLanguage();
 *   const copy = usePick({ nl: "Hallo", en: "Hello" });
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  type Bilingual,
  type Lang,
  DEFAULT_LANG,
  LANG_STORAGE_KEY,
  isLang,
} from "@/lib/i18n/config";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function persist(lang: Lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // ignore (private mode / storage disabled)
  }
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  // Read the stored preference after mount (server can't see localStorage).
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LANG_STORAGE_KEY);
      if (isLang(stored) && stored !== DEFAULT_LANG) {
        setLangState(stored);
        document.documentElement.lang = stored;
      }
    } catch {
      // ignore
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    persist(next);
  }, []);

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next: Lang = prev === "nl" ? "en" : "nl";
      persist(next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Full language controls. Throws if used outside the provider. */
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

/** Just the current language. Falls back to default outside the provider. */
export function useLang(): Lang {
  return useContext(LanguageContext)?.lang ?? DEFAULT_LANG;
}

/** Pick the variant for the current language from a bilingual value. */
export function usePick<T>(pair: Bilingual<T>): T {
  return pair[useLang()];
}
