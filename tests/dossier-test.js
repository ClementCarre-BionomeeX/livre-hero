"use strict";
// The investigation notebook (25.5, Clément 26/11): the engine writes where and when each thing came to the hero
// (places, people met and seen again, clues, things), the notebook files them by place, by person and by day.
// Usage: node tests/site.js && node tests/dossier-test.js [dossier-de-captures]
var fs = require("fs"), path = require("path"), http = require("http"), assert = require("assert");
var ROOT = path.join(__dirname, ".."), SITE = path.join(ROOT, "site"), M = require(path.join(ROOT, "src/moteur.js"));
var openBook = require("./ouvrir-livre");
var bad = [];
function check(ok, what) { if (!ok) bad.push(what); }

// ---- the engine: provenance written without any tag in the story
var st = JSON.parse(fs.readFileSync(path.join(ROOT, "histoires/enquete.json"))); M.prepare(st);
var s = M.freshState(st, {}); s.name = "Ivo"; s.arch = Object.keys(M.ARCHS)[0]; M.start(st, s);
var first = s.place;
assert(s.placeAt && s.placeAt[first] && s.placeAt[first].d === 1, "le lieu du départ est noté");
var it0 = Object.keys(st.items).filter(function (k) { return s.items.indexOf(k) < 0; })[0];
M.apply(st, s, { clue: Object.keys(st.clues)[0], item: it0 });
var c0 = s.clueAt[Object.keys(st.clues)[0]], i0 = s.itemAt[it0];
assert(!(s.itemAt || {})[s.items[0]] || s.items[0] === it0, "le bagage du départ n'est pas une trouvaille");
assert(c0 && c0.p === first && c0.n === s.node && c0.d === 1, "un indice garde son lieu, sa page et son jour");
assert(i0 && i0.p === first, "un objet aussi");
M.apply(st, s, { clue: Object.keys(st.clues)[0] }); assert.strictEqual(s.clueAt[Object.keys(st.clues)[0]], c0, "retrouvé : la première fois reste");
var pid = Object.keys(st.people)[0], P = st.people[pid], name = String(P.name).split(",")[0];
assert.deepStrictEqual(M.namedIn(st, s, ["Voici " + name + "."]), [], "une personne pas encore rencontrée n'est jamais notée");
M.apply(st, s, { meet: pid });
assert.strictEqual(s.metAt[pid].n, s.node, "la rencontre garde sa page");
assert.deepStrictEqual(M.namedIn(st, s, ["Plus loin, " + name + " t'attend."]), [pid]);
assert.deepStrictEqual(M.namedIn(st, s, ["Plus loin, {{gens:aucun|" + name + "}} t'attend."]), [], "{{gens:aucun|…}} ne nomme personne");
assert.deepStrictEqual(M.namedIn(st, s, ["Plus loin, {{gens:" + pid + "|quelqu'un}} t'attend."]), [pid], "{{gens:id|…}} nomme");
M.dossierSee(st, s, [name + " passe."]); M.dossierSee(st, s, [name + " passe."]);
assert.strictEqual(s.vu[pid].c, 1, "une page lue deux fois sans tourner compte une fois");
s.turn++; s.node = Object.keys(st.passages).filter(function (k) { return k !== s.node; })[0]; M.dossierSee(st, s, [name + " revient."]);
assert.strictEqual(s.vu[pid].c, 2, "revue sur une autre page");
var nodes = Object.keys(st.passages); for (var k = 0; k < 40; k++) { s.turn++; s.node = nodes[k % 2 ? 2 : 3]; M.dossierSee(st, s, [name + "."]); }
assert(s.vu[pid].l.length <= 6 && s.vu[pid].c === 42, "les vues gardées sont bornées, le compte reste juste");
console.log("dossier-test (moteur) : OK");

// ---- the notebook in the page
(async function () {
  var { chromium } = require("playwright");
  if (!fs.existsSync(path.join(SITE, "index.html"))) { console.log("dossier-test : lance d'abord node tests/site.js"); process.exit(2); }
  var shots = process.argv[2] || null; if (shots) fs.mkdirSync(shots, { recursive: true });
  var server = http.createServer(function (q, r) {
    var f = path.join(SITE, decodeURIComponent(q.url.split("?")[0]));
    if (f.indexOf(SITE) !== 0 || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; }
    r.writeHead(200, { "Content-Type": /\.json$/.test(f) ? "application/json" : /\.js$/.test(f) ? "text/javascript" : "text/html" }); fs.createReadStream(f).pipe(r);
  });
  await new Promise(function (ok) { server.listen(0, "127.0.0.1", ok); });
  var url = "http://127.0.0.1:" + server.address().port + "/index.html", b = await chromium.launch(), errors = [];
  try {
    var ctx = await b.newContext({ serviceWorkers: "block", locale: "fr-FR", viewport: { width: 390, height: 844 }, deviceScaleFactor: shots ? 2 : 1, reducedMotion: "reduce" }), pg = await ctx.newPage();
    await pg.addInitScript(function () { try { localStorage.setItem("livre-heros:nouveautes-vues", JSON.stringify("999")); } catch (e) {} });
    pg.on("pageerror", function (e) { errors.push(e.message); });
    await pg.goto(url); await pg.waitForSelector("section");
    await pg.fill('input[aria-label="Nom du nouveau lecteur"]', "Léa"); await pg.getByRole("button", { name: "Ajouter" }).first().click();
    await (await openBook(pg, "Écluse")).getByRole("button", { name: /Nouvelle partie/ }).click();
    await pg.fill('input[aria-label="Nom du héros"]', "Ivo"); await pg.locator("button.arch").first().click();
    for (var box of await pg.locator(".past").all()) await box.locator("button.answer").first().click();
    await pg.getByRole("button", { name: "Commencer la lecture" }).click();
    await pg.waitForSelector(".choices .choice:not([disabled])");
    for (var i = 0; i < 30; i++) {
      var cs = pg.locator(".choices .choice:not([disabled])"), n = await cs.count(); if (!n) break;
      await cs.nth(i % n).click(); await pg.waitForTimeout(30);
      if (await pg.locator(".modal .btn").count()) { await pg.keyboard.press("Escape"); }
    }
    await pg.getByRole("button", { name: "Carnet", exact: true }).click();
    var grp = pg.locator(".tab-groups .chip", { hasText: "L'enquête" }); if (await grp.count()) await grp.click();
    await pg.locator(".tabs .tab", { hasText: "Dossier" }).click();
    var lieu = await pg.evaluate(function () { return { blocks: document.querySelectorAll(".dossier-block h3").length, who: document.querySelectorAll(".dossier-who").length, on: (document.querySelector(".dossier-by .chip.on") || {}).textContent }; });
    check(lieu.on === "Par lieu" && lieu.blocks >= 2, "par lieu : les lieux traversés (" + JSON.stringify(lieu) + ")");
    check(lieu.who >= 1, "par lieu : les gens rencontrés, avec leur visage");
    if (shots) await pg.screenshot({ path: path.join(shots, "1-par-lieu.png") });
    await pg.locator(".dossier-by .chip", { hasText: "Par personne" }).click();
    var pers = await pg.evaluate(function () { return { blocks: document.querySelectorAll(".dossier-block").length, meet: [].filter.call(document.querySelectorAll(".dossier-block"), function (x) { return /Rencontre : jour 1/.test(x.textContent); }).length, seen: document.querySelectorAll(".dossier-seen li").length }; });
    check(pers.blocks >= 2 && pers.meet >= 2, "par personne : où et quand on les a rencontrés (" + JSON.stringify(pers) + ")");
    check(pers.seen >= 1, "par personne : où on les a revus");
    if (shots) await pg.screenshot({ path: path.join(shots, "2-par-personne.png") });
    await pg.locator(".dossier-who").first().click();
    check(await pg.locator(".pp-pop").count() === 1, "toucher un visage ouvre sa fiche");
    if (shots) await pg.screenshot({ path: path.join(shots, "2b-fiche.png") });
    await pg.locator(".drawer-head h2").click();
    await pg.locator(".dossier-by .chip", { hasText: "Par jour" }).click();
    var jour = await pg.evaluate(function () { return { days: document.querySelectorAll(".drawer-body .logday").length, places: document.querySelectorAll(".dossier-place").length, clues: document.querySelectorAll(".dossier-clue").length }; });
    check(jour.days >= 1 && jour.places >= 2, "par jour : dans l'ordre (" + JSON.stringify(jour) + ")");
    check(jour.clues >= 1, "par jour : les indices trouvés");
    if (shots) await pg.screenshot({ path: path.join(shots, "3-par-jour.png") });
    await pg.locator(".tabs .tab", { hasText: "Indices" }).click();
    check(await pg.locator(".dossier-at").count() >= 1, "l'onglet Indices dit où et quand chaque indice a été trouvé");
    if (shots) await pg.screenshot({ path: path.join(shots, "4-indices.png") });
    // a book with no clue at all still gets its notebook of places and people
    await ctx.close();
  } finally { await b.close(); server.close(); }
  if (errors.length) bad.push("erreurs de page : " + errors.join(" | "));
  if (bad.length) { console.log("dossier-test : ÉCHEC\n- " + bad.join("\n- ")); process.exit(1); }
  console.log("dossier-test : OK");
})().catch(function (e) { console.error(e); process.exit(1); });
