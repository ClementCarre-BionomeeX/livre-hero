"use strict";
// The shop (14.7): what grows (gather), the reader's own answer (ask, {nom:id}), the counter and its clients (comptoir,
// clients, Lui vendre / T'excuser), recipes brewed many times (counts, verb, test). Played on « La Sorcière de
// Vergeronde » (histoires/potions.json, written by tests/build.js).
//   node tests/boutique-test.js
var path = require("path"), fs = require("fs"), assert = require("assert");
var ROOT = path.join(__dirname, ".."), M = require(path.join(ROOT, "src/moteur.js"));
var st = JSON.parse(fs.readFileSync(path.join(ROOT, "histoires/potions.json"), "utf8"));
var n = 0;
function it(name, f) { f(); n++; console.log("ok - " + name); }
function fresh() { M.setRng(function () { return 0.5; }); var s = M.freshState(st, {}); s.name = "Test"; s.arch = "rodeur"; M.start(st, s); return s; }
function cs(s) { return M.view(st, s).choices; }
function pick(s, f) { var c = cs(s).filter(f)[0]; assert.ok(c, "choix introuvable sur " + s.node + " : " + cs(s).map(function (x) { return x.label; }).join(" / ")); M.choose(st, s, c); return c; }
function walkTo(s, id) { for (var i = 0; i < 20 && s.node !== id; i++) pick(s, function (c) { return c.ok && !c.sys; }); assert.strictEqual(s.node, id); }

it("l'héroïne est imposée : la création ne demande pas le genre", function () {
  var s = fresh(); assert.strictEqual(st.heroFem, true); assert.strictEqual(s.fem, true);
});
it("l'enseigne : un champ à remplir, le texte nettoyé, la réponse relue dans le texte", function () {
  var s = fresh(); walkTo(s, "A_enseigne");
  var c = cs(s).filter(function (x) { return x.sys === "ask"; })[0];
  assert.ok(c && c.input && c.input.max === 36, "champ de saisie");
  assert.strictEqual(cs(s).length, 1, "le champ remplace le choix");
  M.choose(st, s, Object.assign({}, c, { answer: "  La <b>Marmite</b> {e} d'Ortie  " }));
  assert.strictEqual(M.answerOf(st, s, "boutique"), "La Marmite e d'Ortie");
  assert.ok(M.view(st, s).text.join(" ").indexOf("La Marmite e d'Ortie") >= 0 || JSON.stringify(s.events).indexOf("La Marmite e d'Ortie") >= 0, "la réponse est relue");
  assert.ok(!/[<>{}]/.test(M.answerOf(st, s, "boutique")), "ni balise ni accolade");
  assert.strictEqual(M.cleanAnswer("x".repeat(80), 36).length, 36);
});
it("sans rien écrire : le nom par défaut", function () {
  var s = fresh(); walkTo(s, "A_enseigne");
  var c = cs(s).filter(function (x) { return x.sys === "ask"; })[0];
  M.choose(st, s, Object.assign({}, c, { answer: "   " }));
  assert.strictEqual(M.answerOf(st, s, "boutique"), st.asks.boutique.def);
});
it("le jardin : on cueille, et la plante repousse le lendemain", function () {
  var s = fresh(); s.node = "H_jardin"; s.time = 8;
  var before = M.countOf(s, "bourrache");
  var g = cs(s).filter(function (x) { return x.sys === "gather" && x.gather === 0; })[0];
  assert.ok(g && g.ok, "bourrache à cueillir");
  M.choose(st, s, g);
  assert.strictEqual(M.countOf(s, "bourrache"), before + 2, "deux brins cueillis");
  var again = cs(s).filter(function (x) { return x.sys === "gather" && x.gather === 0; })[0];
  assert.ok(again && !again.ok, "grisée le même jour");
  s.time += 24;
  assert.ok(cs(s).filter(function (x) { return x.sys === "gather" && x.gather === 0; })[0].ok, "repoussée le lendemain");
});
it("le comptoir : fermé la nuit, un client le jour, Lui vendre paie et fait monter la renommée", function () {
  var s = fresh(); s.node = "H_boutique"; s.seen.A_enseigne = 1; s.time = 22;
  var shut = cs(s).filter(function (x) { return x.sys === "client"; })[0];
  assert.ok(shut && !shut.ok, "fermé à 22 h");
  s.time = 10;
  ["p_toux", "p_baume", "p_sommeil", "p_toux", "p_baume", "p_sommeil"].forEach(function (x) { s.items.push(x); });
  var open = cs(s).filter(function (x) { return x.sys === "client"; })[0];
  assert.ok(open && open.ok, "ouvert à 10 h");
  M.choose(st, s, open);
  assert.ok(s.client && s.client.id, "un client est entré");
  var sell = cs(s).filter(function (x) { return x.sys === "serve"; })[0], away = cs(s).filter(function (x) { return x.sys === "turnAway"; })[0];
  assert.ok(away, "T'excuser");
  assert.ok(sell && sell.ok, "Lui vendre"); {
    var gold = s.gold, rep = M.stockNow(st, s, "renommee");
    M.choose(st, s, sell);
    assert.ok(s.gold > gold, "payé");
    assert.ok(M.stockNow(st, s, "renommee") > rep, "renommée en hausse");
  }
});
it("les recettes : plusieurs flacons, le bouton dit Préparer et le pourcentage", function () {
  var s = fresh(); s.node = "H_atelier"; s.time = 10;
  s.items.push("miel", "plantain", "bourrache");
  var r = cs(s).filter(function (x) { return x.sys === "craft"; });
  assert.ok(r.length >= 3, "les recettes connues");
  assert.ok(r.every(function (x) { return /^Préparer/.test(x.label); }), "verbe Préparer");
});
console.log(n + " essais réussis.");
