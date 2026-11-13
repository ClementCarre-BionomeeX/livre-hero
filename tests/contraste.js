// Contrast check (Clément, 13/11: brown text on brown wood in Enluminure): every skin × theme, with the device in light
// and dark mode, on the library, the hero creation and the first page. Lists each text under 3.8:1 (3:1 for big text).
// Usage: node tests/contraste.js [page]   (default dist/index.html; exit 1 when a text is too faint)
const { chromium } = require('playwright');
const SKINS = (process.env.SKINS || 'sobre,parchemin,givre,sable,enluminure').split(','), THEMES = ['clair', 'sombre', 'sepia', 'soir'];
const AUDIT = () => {
  function rgb(s) { const m = s.match(/[\d.]+/g); return m ? m.map(Number) : [0, 0, 0, 0]; }
  function lum(c) { const a = c.slice(0, 3).map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]; }
  function bgOf(el) { let stack = []; for (let e = el; e; e = e.parentElement) { const cs = getComputedStyle(e); const c = rgb(cs.backgroundColor); const a = c.length > 3 ? c[3] : 1; if (cs.backgroundImage !== 'none' && e !== document.documentElement) return null; if (a > 0) { stack.push([c, a]); if (a >= 1) break; } }
    let out = [255, 255, 255]; for (let i = stack.length - 1; i >= 0; i--) { const [c, a] = stack[i]; out = out.map((v, k) => v * (1 - a) + c[k] * a); } return out; }
  const bad = [];
  document.querySelectorAll('body *').forEach(el => {
    if (!el.childNodes.length || ![...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) return;
    const r = el.getBoundingClientRect(); if (!r.width || !r.height) return; const cs = getComputedStyle(el); if (cs.visibility === 'hidden' || +cs.opacity === 0) return;
    const bg = bgOf(el); if (!bg) return; const fg = rgb(cs.color); const L1 = lum(fg), L2 = lum(bg); const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
    const big = parseFloat(cs.fontSize) >= 24; if (ratio < (big ? 3 : 3.8)) bad.push(ratio.toFixed(1) + ' ' + el.tagName.toLowerCase() + '.' + [...el.classList].join('.') + ' «' + el.textContent.trim().slice(0, 30) + '»');
  });
  return bad;
};
let total = 0;
(async () => {
  const b = await chromium.launch(); const url = process.argv[2] || 'file://' + require('path').resolve(__dirname, '../dist/index.html');
  const pg = await b.newPage({ viewport: { width: 420, height: 900 } });
  await pg.goto(url); await pg.waitForSelector('section');
  await pg.fill('input[aria-label="Nom du nouveau lecteur"]', 'Léa'); await pg.getByRole('button', { name: 'Ajouter' }).first().click(); await pg.waitForTimeout(300);
  const themeMap = { clair: 'light', sombre: 'dark', sepia: 'sepia', soir: 'soir' };
  for (const os of ['light', 'dark']) for (const sk of SKINS) for (const th of ['auto', ...THEMES]) {
    if (os === 'dark' && th !== 'auto') continue;
    await pg.emulateMedia({ colorScheme: os });
    await pg.evaluate(([sk, th]) => { for (const k of Object.keys(localStorage)) if (/profils:/.test(k)) { const v = JSON.parse(localStorage.getItem(k)); v.prefs = Object.assign(v.prefs || {}, { skin: sk, theme: th }); localStorage.setItem(k, JSON.stringify(v)); } }, [sk, th === 'auto' ? 'auto' : themeMap[th]]);
    await pg.reload(); await pg.waitForSelector('section'); await pg.waitForTimeout(200);
    const out = {}; out.biblio = await pg.evaluate(AUDIT);
    await pg.locator('article.card').filter({ hasText: 'Kardan' }).first().getByRole('button', { name: /Nouvelle partie/ }).click(); await pg.waitForTimeout(200);
    out.creation = await pg.evaluate(AUDIT);
    await pg.fill('input[aria-label="Nom du héros"]', 'Ivo'); await pg.locator('button.arch').first().click();
    for (const box of await pg.locator('.past').all()) await box.locator('button.answer').first().click();
    await pg.getByRole('button', { name: 'Commencer la lecture' }).click(); await pg.waitForTimeout(300);
    out.page = await pg.evaluate(AUDIT);
    const n = Object.values(out).reduce((a, x) => a + x.length, 0); total += n;
    console.log(`${os}/${sk}/${th}: ${n}` + (n ? '\n  ' + Object.entries(out).flatMap(([k, v]) => v.slice(0, 5).map(x => k + ' ' + x)).join('\n  ') : ''));
    await pg.goto(url); await pg.waitForSelector('section');
  }
  await b.close();
  console.log(total ? total + ' texte(s) trop pâle(s)' : 'contraste : OK'); process.exit(total ? 1 : 0);
})();
