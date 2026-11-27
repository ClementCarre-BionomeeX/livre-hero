// A test game in a real browser (Playwright, headless): create a hero, play the book's prologue on the map, fight,
// and fail on any page error. Screenshots in captures/. Run: npm run build && npm run essai [-- steps]
import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";

const STEPS = +(process.argv[2] || 120);
mkdirSync("captures", { recursive: true });
const server = spawn("npx", ["vite", "preview", "--port", "4179", "--strictPort"], { stdio: "pipe" });
await new Promise((r) => server.stdout.on("data", (d) => /4179/.test(String(d)) && r()));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1180, height: 820 }, deviceScaleFactor: 1, hasTouch: true });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e.stack || e)));
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
let shot = 0;
const snap = async (name) => page.screenshot({ path: `captures/${String(++shot).padStart(3, "0")}-${name}.png` });
try {
  await page.goto("http://localhost:4179/?vite");
  await page.waitForSelector("#nouvelle", { timeout: 20000 });
  await snap("accueil");
  await page.click("#nouvelle");
  await page.fill("#nom", "Colin");
  await page.click("[data-arch=guerrier]");
  for (let q = 0; q < 3; q++) await page.click(`[data-q="${q}"][data-a="0"]`);
  await snap("creation");
  await page.click("#partir");
  const seen = new Set(), counts = { livre: 0, hub: 0, combat: 0, fights: 0 };
  for (let i = 0; i < STEPS; i++) {
    await page.waitForTimeout(60);
    const st = await page.evaluate(() => {
      const j = window.jeu, s = j.G.s, f = j.G.fight;
      return { node: s.node, place: s.place, hub: !!(j.G.story.passages[s.node] || {}).hub, livre: !document.getElementById("livre").hidden, fight: !!f, busy: j.G.busy, pv: s.pv };
    });
    if (!seen.has(st.node)) { seen.add(st.node); if (seen.size <= 40 || st.fight) await snap(st.node.replace(/[^\w]/g, "_")); }
    if (st.fight) {
      counts.combat++;
      const r = await page.evaluate(() => {
        const j = window.jeu, G = j.G, f = G.fight;
        if (f.over) { document.getElementById("suite").click(); return "suite"; }
        if (G.busy) return "busy";
        const C = f.units.find((u) => u.id === f.order[f.turn]);
        if (C.id !== "hero") return "ai";
        const foes = f.units.filter((u) => u.side === "foe" && !(G.s.combat.foes.find((x) => x.key === u.id) || {}).down);
        const near = foes.sort((a, b) => Math.abs(a.at.q - C.at.q) + Math.abs(a.at.r - C.at.r) - Math.abs(b.at.q - C.at.q) - Math.abs(b.at.r - C.at.r))[0];
        j.tap(near.at);
        return "tap";
      });
      if (r === "tap") await page.waitForTimeout(200);
      if (r === "busy" || r === "ai") await page.waitForTimeout(300);
      if (r === "tap") { const still = await page.evaluate(() => { const f = window.jeu.G.fight; return f && !f.over && f.order[f.turn] === "hero" && !window.jeu.G.busy; }); if (still) await page.evaluate(() => document.getElementById("fin") && document.getElementById("fin").click()); }
      continue;
    }
    if (st.busy) { await page.waitForTimeout(200); continue; }
    if (st.livre) {
      counts.livre++;
      const ok = await page.evaluate(() => {
        const b = [...document.querySelectorAll("#livre .choix button")].filter((x) => !x.disabled);
        if (!b.length) return false;
        // prefer a choice not taken yet: rotate by the number of times the page was seen
        const j = window.jeu, n = (j.G.s.seen[j.G.s.node] || 0);
        b[n % b.length].click(); return true;
      });
      if (!ok) { errors.push("page sans choix : " + st.node); break; }
      continue;
    }
    if (st.hub) {
      counts.hub++;
      // walk to a spot on the map (rotating), as a player would by touch
      await page.evaluate(() => {
        const j = window.jeu, P = j.G.place, s = j.G.s, n = (s._hubTurns = (s._hubTurns || 0) + 1);
        const sp = P.spots.filter((x) => !x.travel || n > 6);
        const pick = sp[n % sp.length];
        j.tap(pick.centre);
      });
      await page.waitForTimeout(400);
      for (let w = 0; w < 30; w++) { const b = await page.evaluate(() => window.jeu.G.busy); if (!b) break; await page.waitForTimeout(150); }
    }
  }
  await snap("fin");
  console.log("passages vus", seen.size, JSON.stringify(counts));
  console.log([...seen].slice(0, 60).join(" "));
} finally {
  await browser.close(); server.kill();
}
if (errors.length) { console.error("ERREURS\n" + errors.slice(0, 10).join("\n")); process.exit(1); }
console.log("aucune erreur de page");
