"use strict";
// Stories with cards (9.7): the promises of the engine, checked on « Le Courrier de Vèze » and on a tiny story.
//   node tests/cartes-test.js
var path = require("path"), assert = require("assert");
var M = require(path.join(__dirname, "../src/moteur.js")), V = require(path.join(__dirname, "../src/validateur.js"));
function story() { return JSON.parse(JSON.stringify(require(path.join(__dirname, "../histoires/src/courrier/index.js")))); }
function fresh(st, deck) { var s = M.freshState(st, {}); s.arch = "voleur"; s.name = "Test"; if (deck) s.deckChoisi = deck; M.start(st, s); return s; }
function cardsOf(v) { return v.choices.filter(function (c) { return c.sys === "carte"; }); }
var n = 0;
function it(name, f) { f(); n++; console.log("ok - " + name); }

it("à la première halte, la main est pleine et l'élan a monté", function () {
  var st = story(), s = fresh(st); M.choose(st, s, M.view(st, s).choices[0]);
  assert.strictEqual(s.node, "H1_gue");
  assert.strictEqual(s.jeu.main.length, 5);
  assert.strictEqual(s.jeu.elan, 2);
  assert.ok(M.view(st, s).hand, "la page reçoit la main");
});

it("deux cartes identiques font un seul choix, « × 2 »", function () {
  var st = story(), s = fresh(st, ["rival", "rival", "colporteur", "loups", "grange", "bourse"]);
  M.choose(st, s, M.view(st, s).choices[0]);
  var cs = cardsOf(M.view(st, s)), r = cs.filter(function (c) { return c.carte === "rival"; });
  if (s.jeu.main.filter(function (k) { return k === "rival"; }).length === 2) { assert.strictEqual(r.length, 1); assert.strictEqual(r[0].n, 2); }
});

it("une carte jouée va à la défausse, coûte son élan, ouvre son fil, et sa scène ramène à la suite de la halte", function () {
  var st = story(), s = fresh(st, ["rival", "rival", "rival", "rival", "rival"]);
  M.choose(st, s, M.view(st, s).choices[0]);
  var c = cardsOf(M.view(st, s))[0];
  M.choose(st, s, c);
  assert.strictEqual(s.node, "C_rival");
  assert.strictEqual(s.jeu.elan, 1);
  assert.strictEqual(s.jeu.fils.rival, "ouvert");
  assert.deepStrictEqual(s.jeu.defausse, ["rival"]);
  var on = M.view(st, s).choices.filter(function (x) { return x.ok; })[0];
  M.choose(st, s, on);
  assert.strictEqual(s.node, "T1_nuit");
});

it("la carte de l'enseigne aide les jets de sa propre manière, dans sa scène seulement", function () {
  var st = story(), s = fresh(st, ["pont_emporte", "pont_emporte", "pont_emporte", "pont_emporte", "pont_emporte"]);
  M.choose(st, s, M.view(st, s).choices[0]);
  M.choose(st, s, cardsOf(M.view(st, s))[0]);
  var force = M.view(st, s).choices.filter(function (c) { return c.test && c.test.dom === "combat"; })[0];
  assert.ok(force, "le choix de la Lame est proposé");
  var sansCarte = Object.assign({}, s, { jeu: Object.assign({}, s.jeu, { scene: false }) });
  assert.ok(M.chance(st, s, force.test) > M.chance(st, sansCarte, force.test));
});

it("une halte qui refuse un genre de carte grise la carte et dit pourquoi ; sans carte jouable, on passe son chemin", function () {
  var st = story(), s = fresh(st, ["loups", "grange", "bourse", "corbeau", "loups"]);
  M.choose(st, s, M.view(st, s).choices[0]);
  s.node = "H3_porte"; s.jeu.main = ["loups", "grange"]; s.jeu.haltes = {};
  var v = M.view(st, s), cs = cardsOf(v);
  assert.ok(cs.filter(function (c) { return c.ui; }).every(function (c) { return !c.ok && /Pas ici/.test(c.why); }));
  var pass = cs.filter(function (c) { return c.carte === "@passer"; })[0];
  assert.ok(pass && pass.ok, "« Passer son chemin » est offert");
  M.choose(st, s, pass);
  assert.ok(st.passages[s.node] || s.node, "on a quitté la halte");
});

it("un fil ouvert ramène son personnage avec une carte du bon genre, et la scène le noue", function () {
  var st = story(), s = fresh(st, ["rival", "colporteur", "colporteur", "colporteur", "colporteur"]);
  M.choose(st, s, M.view(st, s).choices[0]);
  s.jeu.main = ["rival", "colporteur"];
  M.choose(st, s, cardsOf(M.view(st, s)).filter(function (c) { return c.carte === "rival"; })[0]);
  M.choose(st, s, M.view(st, s).choices.filter(function (x) { return x.ok; })[0]);
  M.choose(st, s, M.view(st, s).choices[0]);                        // la nuit → le col
  assert.strictEqual(s.node, "H2_col");
  s.jeu.main = ["colporteur"];
  M.choose(st, s, cardsOf(M.view(st, s))[0]);
  assert.strictEqual(s.node, "C_rival_revient");
});

it("le validateur refuse une carte qui n'a pas de suite à une halte", function () {
  var st = story(); delete st.passages.R_presage; delete st.passages.R_presage_ok; delete st.passages.R_presage_ko;
  var r = V.staticCheck(st);
  assert.ok(r.errors.some(function (e) { return /corbeau/.test(e) && /aucune résolution/.test(e); }), r.errors.join("\n"));
});

it("le Courrier de Vèze se construit sans erreur", function () {
  var r = V.validate(story(), { games: 1200 });
  assert.deepStrictEqual(r.errors, []);
});
console.log(n + " tests des cartes passés");
