# DCF site — productie-setup

Korte handleiding voor wat er moet gebeuren wanneer DCF de site live wil zetten op het echte domein.

## 1. Hosting

De site draait op **Vercel** — niets te doen, automatische builds via GitHub.

`https://github.com/reflow-automations/Demo-website-LEV` push → Vercel build → live op `dcf-demo.vercel.app` + custom domein zodra gekoppeld.

## 2. Custom domein (DNS via Hostnet)

1. **Vercel**: ga naar Project → Settings → Domains → "Add" → `digitalconceptsfactory.nl`
2. **Vercel** toont de exacte records die in DNS gezet moeten worden — meestal:
   - `A` record op `@` (apex) → `76.76.21.21`
   - `CNAME` op `www` → `cname.vercel-dns-0.com`
3. **Hostnet**: log in op het DNS-beheer van het domein bij Hostnet en voeg precies die records toe
4. Wacht ~5-30 minuten op DNS-propagatie. Vercel verifieert automatisch.
5. SSL-certificaat wordt door Vercel automatisch aangevraagd (Let's Encrypt)

> Belangrijk: Hostnet is **alleen DNS-provider**. De site zelf draait op Vercel. Hostnet kan niet vanuit hun paneel naar Vercel doorlinken — DNS-records moeten handmatig in het Hostnet-paneel.

## 3. reCAPTCHA — echte keys

**Status (17 juni 2026):** DCF (Len) heeft de echte keys aangeleverd. Ze zijn in de reCAPTCHA-admin geregistreerd voor **alleen `digitalconceptsfactory.nl`**. De demo blijft bewust op de test-keys draaien (gele "for testing only"-banner).

> **Niet omzetten voordat `digitalconceptsfactory.nl` live op Vercel staat (zie stap 2 hierboven).** De keys zijn domein-gebonden: op `demo-website-lev.vercel.app` of op localhost faalt de verificatie. Tot het custom domein live is, de test-keys laten staan (die werken overal).

Zodra het custom domein live is, flip-the-switch (circa 2 minuten):

1. Vercel → Project → Settings → Environment Variables, voor **alle environments** (Production + Preview + Development):
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` = `6LeTfSQtAAAAAHe-o6mPuIgUBxSD8z3zAjHAWey0` (publieke sitesleutel, mag in code/HTML staan)
   - `RECAPTCHA_SECRET_KEY` = de **geheime sleutel uit de reCAPTCHA-admin / de aangeleverde PNG**. NOOIT in git en NOOIT achter een `NEXT_PUBLIC_`-prefix.
2. Trigger een Redeploy (Vercel → Deployments → laatste → ⋮ → Redeploy)
3. De gele test-banner verdwijnt; de widget verifieert nu echt
4. Verifieer: open de live contactpagina, vink reCAPTCHA aan, verstuur. Check daarna Vercel → Functions → /api/contact op `captchaHost: digitalconceptsfactory.nl`

De code in `components/ReCaptcha.tsx` en `app/api/contact/route.ts` switcht automatisch zodra deze env-vars gezet zijn, geen code-wijziging nodig.

> Tip: de tekens `I` en `l` in de sitesleutel (`...o6mPuIg...`) zijn lastig te onderscheiden. Gebruik bij twijfel de **KOPIËREN**-knop in de reCAPTCHA-admin in plaats van overtypen.

Nieuwe keys aanvragen (alleen indien nodig): https://www.google.com/recaptcha/admin/create → v2 Checkbox, label `Digital Concepts Factory`, domein `digitalconceptsfactory.nl` (eventueel `demo-website-lev.vercel.app` toevoegen als reCAPTCHA ook op de demo getest moet worden).

## 4. Cal.com booking embed

**Status: gereed.** De inline-embed staat live in `site/components/CalEmbed.tsx` (boekingslink `len-v-fiuafk/30min`). Wil je een andere kalender, pas de `calLink` in dat bestand aan.

## 5. E-mail bezorging vanuit contact-form

**Status: code gereed.** `app/api/contact/route.ts` levert de aanvraag via twee onafhankelijke kanalen af en geeft de bezoeker eerlijke feedback: alleen "verzonden" als er écht iets is afgeleverd, anders een nette fout met het directe e-mailadres. Elke inzending wordt daarnaast altijd naar de Vercel-logs geschreven als vangnet.

**Kanaal 1 — Resend (e-mailnotificatie naar DCF).** De Resend gratis tier staat één geverifieerd domein per account toe. Het Reflow-account is al voor een ander domein in gebruik, dus **DCF maakt een eigen (gratis) Resend-account aan**:

1. Account op resend.com (gratis, ruim voldoende voor contactaanvragen)
2. Domein `digitalconceptsfactory.nl` verifiëren: Resend toont 3 DNS-records die in het Hostnet-DNS-paneel gezet worden
3. API-key aanmaken en aan Rogier geven → komt in Vercel env: `RESEND_API_KEY` (server-only, niet in git). Optioneel `CONTACT_TO` / `CONTACT_FROM` overschrijven.

**Kanaal 2 — n8n-webhook (duurzame backup die Rogier monitort).** Workflow **DCF website - contact lead (backup)** (`kwDbB91h9tg6l1fh`), actief. Mailt elke lead via SMTP naar `rogier@reflowautomations.nl`. In Vercel env zetten:
- `LEAD_WEBHOOK_URL` = `https://n8n.reflowautomations.nl/webhook/dcf-website-lead-3f9a7c21e8`
- `LEAD_WEBHOOK_SECRET` (optioneel; wordt als `x-lead-secret` header meegestuurd, de n8n-flow verifieert hem nu nog niet — het onraadbare pad is de bescherming).

> Werkt minstens één kanaal, dan ziet de bezoeker succes. Valt Resend weg, dan komt de lead alsnog via n8n binnen (en andersom). Zijn in een omgeving géén van beide env-vars gezet (demo/localhost), dan toont het formulier succes en staat de lead in de Vercel-log.

## AVG: cookiebanner, analytics en juridische pagina's

**Status: grotendeels gereed.**

- **Juridische pagina's**: `/privacy`, `/disclaimer` en `/algemene-voorwaarden` zijn live (server-gerenderd, in de sitemap, footer-links wijzen ernaar). De teksten komen uit de door DCF aangeleverde documenten (versie 1.0, juni 2026) en staan als gestructureerde data in `content/legal.ts`. Bij een nieuwe versie: dat bestand bijwerken.
- **Cookiebanner + Google Analytics**: gebouwd in `components/CookieConsent.tsx`. GA4 (`G-FNBVMVJ5PB`) laadt pas ná akkoord en alleen op het echte domein; weigeren laadt niets. De keuze staat in `localStorage`; de footer-link "Cookievoorkeuren" reset hem.

## AI-chatbot (n8n backend gereed)

De chatbot-backend draait in n8n: workflow **DCF Chatbot (website)** (`A1sIoMtz6M0liUne`), actief. Model: Claude Haiku 4.5. Bevat een uitgebreide DCF-system-prompt (diensten, cijfers, grenzen, u-vorm, lead-gen-nudge) plus gespreksgeheugen per bezoeker (14 berichten).

**Endpoint** (POST): `https://n8n.reflowautomations.nl/webhook/dcf-chat`

Request body:

```json
{ "message": "vraag van de bezoeker", "sessionId": "unieke-id-per-bezoeker" }
```

Response:

```json
{ "reply": "antwoord van de bot" }
```

**Widget gebouwd:** `components/ChatWidget.tsx`, gemount in de root layout, dus rechtsonder op elke pagina. Tweetalig (NL/EN), met sessie-geheugen via `localStorage` (`dcf-chat-session`).

De widget post **niet** meer rechtstreeks naar n8n, maar naar de eigen proxy `app/api/chat/route.ts`. Die doet origin-check, rate-limit (best-effort per IP) en een timeout, en houdt de n8n-URL server-side. Env-var (server-only, GEEN `NEXT_PUBLIC_`):
- `CHAT_WEBHOOK_URL` = `https://n8n.reflowautomations.nl/webhook/dcf-chat` (productie-URL is ook de fallback, dus werkt direct).

> **Kosten-backstop (belangrijk):** de chat triggert een betaalde LLM in n8n. De proxy beperkt browser-misbruik, maar de echte rem is een **dag-quota-cap op de AI-key in n8n** (Cloud Console → Quotas, of de Anthropic-limiet). Zet die, conform de twee-laags bescherming in CLAUDE.md.

## 6. Logo

Plaatsvervangende logo's staan in `site/public/`:
- `logo.png` — icon-only
- `logo-slogan.png` — wordmark met slogan

Wil je een andere variant of een SVG? Vervang het bestand in `public/`, behoud de bestandsnaam, redeploy.

## 7. Lokaal draaien

```
cd site
npm install
npm run dev
```

Dan beschikbaar op `http://localhost:3000`. Hot reload werkt automatisch.

## 8. Belangrijke files voor content-aanpassingen

- `app/page.tsx` — Home (Hero, Pillars, Stats, Manifesto, Marquee, FinalCTA). Nieuwsbrief is tijdelijk verwijderd (juni 2026); de component staat nog in `components/home/Newsletter.tsx`.
- `app/<route>/page.tsx` — elke hoofdpagina (16 subpages gebruiken `SubpageTemplate`)
- `components/home/*` — homepage-secties
- `components/SubpageTemplate.tsx` — template voor subpages, data-driven
- `app/globals.css` — kleuren, fonts, design-tokens
- `components/Header.tsx` + `components/Footer.tsx` — navigatie & footer

Voor tekst-aanpassingen: open de relevante `page.tsx` en wijzig de strings — Next.js detecteert auto en herlaadt.

## Vragen?

Reflow Automations · `rogier@reflowautomations.nl`
