import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// --- config ---
const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = join(__dirname, ".."); // project root (site/)
const NEXT_BIN = join(SITE, "node_modules", "next", "dist", "bin", "next");
const PORT = 3737;
const BASE = `http://localhost:${PORT}`;
const OUT = "D:/dcf-screens";
const SKIP_BUILD = process.argv.includes("--no-build");

const PAGES = [
  { slug: "home", path: "/" },
  { slug: "talent-behouden", path: "/talent-behouden" },
  { slug: "inkoop", path: "/inkoop" },
  { slug: "over-ons", path: "/over-ons" },
  { slug: "talent-aantrekken", path: "/talent-aantrekken" },
  { slug: "ziekteverzuim", path: "/ziekteverzuim" },
  { slug: "marketing", path: "/marketing" },
  { slug: "contact", path: "/contact" },
];

const VIEWPORTS = [{ name: "desktop", width: 1440, height: 900 }];

// --- production server management (geen `next dev`/Turbopack -> geen dev-crashes) ---
let server = null;
let stopped = false;

function stopServer() {
  if (stopped || !server || !server.pid) return;
  stopped = true;
  if (process.platform === "win32") {
    // kill de hele proces-tree van next start
    try {
      spawnSync("taskkill", ["/PID", String(server.pid), "/T", "/F"], { stdio: "ignore" });
    } catch {}
  } else {
    try {
      server.kill("SIGKILL");
    } catch {}
  }
}

process.on("exit", stopServer);
process.on("SIGINT", () => {
  stopServer();
  process.exit(1);
});

async function waitForServer(url, timeoutMs = 60000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(2000) });
      if (r.status < 500) return true;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  return false;
}

// 0) poort vrij? Zo niet: stop, want we willen niet per ongeluk een vreemde server screenshotten.
try {
  await fetch(BASE + "/", { signal: AbortSignal.timeout(800) });
  console.error(`✗ Er draait al iets op :${PORT}. Stop dat eerst (of pas PORT aan) en probeer opnieuw.`);
  process.exit(1);
} catch {
  /* poort vrij -> door */
}

// 1) productie-build (sla over met --no-build voor een snelle herhaling op bestaande build)
if (!SKIP_BUILD) {
  console.log("→ next build …");
  const build = spawnSync(process.execPath, [NEXT_BIN, "build"], { cwd: SITE, stdio: "inherit" });
  if (build.status !== 0) {
    console.error("✗ Build mislukt — geen screenshots gemaakt.");
    process.exit(1);
  }
}

// 2) productie-server starten
console.log(`→ next start op :${PORT} …`);
server = spawn(process.execPath, [NEXT_BIN, "start", "-p", String(PORT)], {
  cwd: SITE,
  stdio: ["ignore", "pipe", "pipe"],
});
server.stdout.on("data", (d) => process.stdout.write(`[next] ${d}`));
server.stderr.on("data", (d) => process.stderr.write(`[next] ${d}`));

// 3) wachten tot de server antwoordt
const up = await waitForServer(BASE + "/");
if (!up) {
  console.error("✗ Server kwam niet online binnen 60s.");
  stopServer();
  process.exit(1);
}
console.log("✓ Server online.");

// 4) screenshots (ongewijzigde logica)
await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();

try {
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
    const page = await ctx.newPage();

    for (const p of PAGES) {
      const url = BASE + p.path;
      console.log(`→ ${vp.name} ${p.slug}`);
      try {
        await page.goto(url, { waitUntil: "load", timeout: 30000 });

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
} finally {
  await browser.close();
  stopServer();
}

console.log("Done.");
process.exit(0);
