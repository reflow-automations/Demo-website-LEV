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

Op de contactpagina staat nu een **placeholder** waar de cal.com inline-embed komt.

Wanneer Lev de embed-code stuurt:
1. Open `site/components/CalEmbed.tsx`
2. Volg de instructies in het JSDoc-comment bovenaan
3. Vervang de `loadCalEmbed()`-body met de cal.com snippet
4. Zet `CAL_PLACEHOLDER = false`
5. Commit + push → automatisch redeploy

## 5. E-mail bezorging vanuit contact-form

**Gekozen: Resend.** Nu logt het contact-form alleen naar Vercel-logs (Project → Deployments → laatste → Functions → /api/contact); het mailt nog niet.

De Resend gratis tier staat één geverifieerd domein per account toe. Het Reflow-account is al voor een ander domein in gebruik, dus **DCF maakt een eigen (gratis) Resend-account aan**:

1. Account op resend.com (gratis, ruim voldoende voor contactaanvragen)
2. Domein `digitalconceptsfactory.nl` verifiëren: Resend toont 3 DNS-records die in het Hostnet-DNS-paneel gezet worden
3. API-key aanmaken en aan Rogier geven → komt in Vercel env: `RESEND_API_KEY` (server-only, niet in git)
4. Rogier bouwt de verzendcode in op de TODO-regel in `app/api/contact/route.ts`; bericht gaat naar `info@digitalconceptsfactory.nl`

> n8n-webhook is bewust niet gekozen: dan zou de mail via Reflow's eigen e-mail lopen in plaats van vanaf het DCF-domein. Een losse `mailto:`-link ook niet, die triggert de reCAPTCHA-flow niet.

## AVG: cookiebanner, analytics en juridische pagina's

Nog te bouwen zodra de input van DCF binnen is, bij voorkeur in één set live:

- **Privacy- en voorwaarden-pagina's**: DCF levert de juridische teksten aan (die staan niet in het content-document). Nu zijn de footer-links placeholders (`href="#"`).
- **Google Analytics**: alleen als DCF dat wil. Dan levert DCF een GA4 Measurement ID (`G-XXXXXXX`). Alternatief zonder cookie-gedoe: Plausible.
- **Cookiebanner met opslag van toestemming**: vereist zodra GA of andere niet-essentiële cookies actief zijn. De banner slaat de keuze (accepteren of weigeren) op in de browser en laadt analytics pas ná akkoord; weigeren blijft mogelijk. Reflow bouwt dit.

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

**Widget gebouwd:** `components/ChatWidget.tsx`, gemount in de root layout, dus rechtsonder op elke pagina. Tweetalig (NL/EN), met sessie-geheugen via `localStorage` (`dcf-chat-session`). De webhook-URL komt uit env-var `NEXT_PUBLIC_CHAT_WEBHOOK_URL` met de productie-URL als fallback, dus de widget werkt direct (ook lokaal en op de demo). Wil je een andere webhook, zet dan die env-var in Vercel.

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
