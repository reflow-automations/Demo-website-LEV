/**
 * Kleine GA4-event-helper.
 *
 * Vuurt een event ALLEEN als Google Analytics daadwerkelijk geladen is.
 * GA laadt pas nadat de bezoeker de cookies accepteert (zie CookieConsent),
 * dus zonder toestemming is dit een no-op en wordt er niets getrackt.
 * Daarmee blijft de tracking AVG-conform: geen consent = geen events.
 */

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

export function trackEvent(
  name: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", name, params ?? {});
}
