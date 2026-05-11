import { chromium } from "playwright";
import { mkdir } from "fs/promises";

const PAGES = [
  { slug: "home", path: "/" },
  { slug: "talent-behouden", path: "/talent-behouden" },
  { slug: "inkoop", path: "/inkoop" },
  { slug: "over-ons", path: "/over-ons" },
  { slug: "talent-aantrekken-placeholder", path: "/talent-aantrekken" },
  { slug: "contact", path: "/contact" },
];

const VIEWPORTS = [{ name: "desktop", width: 1440, height: 900 }];
const BASE = "http://localhost:3737";
const OUT = "D:/dcf-screens";

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();

for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
  const page = await ctx.newPage();

  for (const p of PAGES) {
    const url = BASE + p.path;
    console.log(`→ ${vp.name} ${p.slug}`);
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });

      // Above-the-fold screenshot before triggering reveals
      await page.screenshot({
        path: `${OUT}/${p.slug}-${vp.name}-fold.png`,
        fullPage: false,
      });

      // Progressive scroll to trigger all IntersectionObserver reveals
      const totalHeight = await page.evaluate(() => document.body.scrollHeight);
      const step = vp.height * 0.6;
      for (let y = 0; y < totalHeight; y += step) {
        await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
        await page.waitForTimeout(220);
      }
      // Scroll to absolute bottom once more
      await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight }));
      await page.waitForTimeout(400);
      // Back to top for full-page capture
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
      await page.waitForTimeout(300);

      // Full page
      await page.screenshot({
        path: `${OUT}/${p.slug}-${vp.name}-full.png`,
        fullPage: true,
      });
    } catch (e) {
      console.error(`  ✗ ${p.slug}: ${e.message}`);
    }
  }
  await ctx.close();
}

await browser.close();
console.log("Done.");
