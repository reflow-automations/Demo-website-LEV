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

## 3. reCAPTCHA — echte keys aanvragen

Nu draait reCAPTCHA op Google's officiële test-keys (gele "for testing only"-banner, werkt wel maar verifieert niets echts). Voor productie:

1. Ga naar https://www.google.com/recaptcha/admin/create
2. Log in met een Google-account (van DCF bij voorkeur, anders Reflow)
3. Vul in:
   - **Label**: `Digital Concepts Factory`
   - **reCAPTCHA type**: `Challenge (v2)` → `"Ik ben geen robot" Checkbox`
   - **Domains**:
     - `digitalconceptsfactory.nl`
     - `dcf-demo.vercel.app` (voor preview-deploys)
   - **Accept Terms of Service** + Submit
4. Je krijgt **SITE KEY** (publiek) en **SECRET KEY** (server)
5. In Vercel → Project → Settings → Environment Variables, voeg toe voor **alle environments** (Production + Preview + Development):
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` = de SITE KEY
   - `RECAPTCHA_SECRET_KEY` = de SECRET KEY
6. Trigger een Redeploy (Vercel → Deployments → laatste → ⋮ → Redeploy)
7. De gele test-banner verdwijnt en de widget werkt nu écht

## 4. Cal.com booking embed

Op de contactpagina staat nu een **placeholder** waar de cal.com inline-embed komt.

Wanneer Lev de embed-code stuurt:
1. Open `site/components/CalEmbed.tsx`
2. Volg de instructies in het JSDoc-comment bovenaan
3. Vervang de `loadCalEmbed()`-body met de cal.com snippet
4. Zet `CAL_PLACEHOLDER = false`
5. Commit + push → automatisch redeploy

## 5. E-mail bezorging vanuit contact-form

Nu logt het contact-form alleen naar Vercel-logs (Project → Deployments → laatste → Functions → /api/contact). Voor échte bezorging in `info@digitalconceptsfactory.nl`:

Opties (eenvoudig naar minder eenvoudig):

**Resend (aanbevolen)**:
1. Account op resend.com (gratis tot 100 mails/dag)
2. Domein `digitalconceptsfactory.nl` verifiëren (3 DNS-records in Hostnet)
3. API-key in Vercel env: `RESEND_API_KEY`
4. In `app/api/contact/route.ts` op de TODO-regel een paar regels code toevoegen — vraag mij het in te bouwen

**SMTP via Hostnet mail**:
- Werkt ook. Gebruik `nodemailer`. Hostnet SMTP-instellingen invoeren in env vars.

Niet doen: simpel `mailto:`-link op het form. Werkt onbetrouwbaar en triggert geen reCAPTCHA-flow.

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

- `app/page.tsx` — Home (Hero, Pillars, Stats, Manifesto, Marquee, Newsletter, FinalCTA)
- `app/<route>/page.tsx` — elke hoofdpagina (16 subpages gebruiken `SubpageTemplate`)
- `components/home/*` — homepage-secties
- `components/SubpageTemplate.tsx` — template voor subpages, data-driven
- `app/globals.css` — kleuren, fonts, design-tokens
- `components/Header.tsx` + `components/Footer.tsx` — navigatie & footer

Voor tekst-aanpassingen: open de relevante `page.tsx` en wijzig de strings — Next.js detecteert auto en herlaadt.

## Vragen?

Reflow Automations · `rogier@reflowautomations.nl`
