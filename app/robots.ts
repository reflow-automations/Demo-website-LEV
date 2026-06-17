import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site";

/**
 * Served at /robots.txt. Allows classic crawlers and explicitly welcomes the
 * major AI crawlers (GEO) so ChatGPT, Claude, Perplexity, Google AI Overviews
 * and others may read and cite the site. Only /api/ is disallowed.
 *
 * NB: gebruik OF dit bestand OF een static public/robots.txt, niet beide.
 */
export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    "GPTBot", // OpenAI / ChatGPT
    "OAI-SearchBot", // OpenAI search
    "ChatGPT-User", // ChatGPT browsing
    "ClaudeBot", // Anthropic
    "Claude-Web", // Anthropic
    "PerplexityBot", // Perplexity
    "Google-Extended", // Google AI Overviews / Gemini
    "Meta-ExternalAgent", // Meta AI
    "Applebot-Extended", // Apple Intelligence
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: aiCrawlers,
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
