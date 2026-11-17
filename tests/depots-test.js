"use strict";
// Two players apart (9.6): deposits one hero leaves for the other (story.depots, tag `depot`) and chronicles that
// say something else once the world has changed (story.chroniques). Played for real through src/multi.js.
// Usage: node tests/depots-test.js
var path = require("path"), assert = require("assert");
var ROOT = path.join(__dirname, ".."), M = require(path.join(ROOT, "src/moteur.js")), MU = require(path.join(ROOT, "src/multi.js")), V = require(path.join(ROOT, "src/validateur.js"));

var st = {
  id: "t", title: "t", start: "a", multi: { min: 2, max: 2 }, acts: [{ id: "I", title: "I", start: "a" }],
  companions: {}, factions: {}, relics: {}, mysteries: {}, clues: {}, quests: [], people: {}, enemies: {}, shops: {}, banter: [],
  items: {
    vin: { name: "Vin nouveau", kind: "divers", price: 1, aged: "vieux_vin", desc: "Une bouteille." },
    vieux_vin: { name: "Vin de soixante ans", kind: "divers", price: 60, desc: "Une bouteille poussiéreuse." },
    pain: { name: "Pain", kind: "divers", price: 1, rots: true, desc: "Une miche." },
    lettre: { name: "Lettre", kind: "divers", price: 0, flat: true, desc: "Une feuille pliée." },
    sablier: { name: "Sablier", kind: "divers", price: 0, nodepot: true, desc: "À ne jamais poser." },
  },
  depots: {
    borne: { name: "Le pied de la borne", from: { has: "role:passe" }, to: { has: "role:reste" }, ages: true, gold: 5, rate: 2, put: "Enterrer", take: "Déterrer", labelPut: "Enterrer quelque chose", labelTake: "Creuser au pied de la borne" },
    cahier: { name: "Entre les pages", from: { has: "role:reste" }, to: { has: "role:passe" }, flat: true },
  },
  chroniques: {
    chronique: { title: "La Chronique", for: { has: "role:reste" }, lines: [
      { id: "pont", head: "An 541", v: [{ if: { has: "monde:pont_sauve" }, text: "Le pont tint bon." }, { text: "Le pont tomba." }] },
      { id: "etranger", v: [{ if: { has: "monde:vu" }, text: "On vit un étranger." }] },
    ] },
  },
  world: { noFood: true, start: { place: "ici", gold: 12, food: 0, items: [] }, places: { ici: { name: "Ici", desc: "Ici.", arrive: "a" } }, routes: [], regions: {}, events: {} },
  passages: {
    a: { act: "I", title: "Le seuil", place: "ici", text: ["Qui es-tu ?"], choices: [
      { label: "Celui qui passe", role: "qui", option: "passe", fx: { flag: "role:passe", item: ["vin", "pain", "sablier"] }, to: "b" },
      { label: "Celui qui reste", role: "qui", option: "reste", fx: { flag: "role:reste", item: ["lettre"] }, to: "b" }] },
    b: { act: "I", title: "La première borne", place: "ici", charniere: true, depot: { put: ["borne", "cahier"], take: ["borne", "cahier"] }, text: ["Une borne."], choices: [
      { label: "Sauver le pont", if: { has: "role:passe" }, fx: { flag: ["monde:pont_sauve", "monde:vu"] }, to: "c" },
      { label: "Marcher", to: "c" }] },
    c: { act: "I", title: "La seconde borne", place: "ici", charniere: true, depot: { put: ["borne", "cahier"], take: ["borne", "cahier"] }, text: ["Une autre borne."], choices: [{ label: "Finir", to: "z" }] },
    z: { act: "I", title: "Fin", place: "ici", text: ["Fin."], end: true },
  },
};
var rep = V.staticCheck(JSON.parse(JSON.stringify(st)));
assert.deepStrictEqual(rep.errors, [], rep.errors.join("\n"));

function mk(name) { var s = M.freshState(st, { toutJouer: false }); s.name = name; s.arch = "guerrier"; M.start(st, s); return s; }
var g = MU.create(st, [{ id: "a", name: "Léo", s: mk("Léo") }, { id: "b", name: "Mila", s: mk("Mila") }]);
MU.refreshWaits(st, g);
function pick(pid, test) { var v = MU.view(st, g, pid), c = v.choices.filter(function (x) { return x.ok && test(x); })[0]; assert.ok(c, pid + " : choix introuvable parmi " + v.choices.map(function (x) { return x.label; }).join(" | ")); MU.choose(st, g, pid, c); return c; }
function labels(pid) { return MU.view(st, g, pid).choices.map(function (x) { return x.label; }); }
var A = MU.player(g, "a"), B = MU.player(g, "b");

pick("a", function (c) { return c.option === "passe"; });
pick("b", function (c) { return c.option === "reste"; });
assert.ok(MU.allWaiting(g)); MU.sync(st, g);

// At the first stone: the one who passes buries; the one who stays slips a letter between the pages.
assert.ok(labels("a").indexOf("Enterrer quelque chose") >= 0);
assert.ok(labels("a").indexOf("Laisser quelque chose") < 0, "le Cahier ne prend que de celui qui reste");
pick("a", function (c) { return c.sys === "depotOpen" && c.mode === "put"; });
var open = labels("a");
assert.ok(open.indexOf("Enterrer : Vin nouveau") >= 0 && open.indexOf("Enterrer : Pain") >= 0 && open.indexOf("Enterrer : 5 pièces") >= 0, open.join(" | "));
assert.ok(!open.some(function (l) { return /Sablier/.test(l); }), "un objet nodepot ne se dépose pas");
pick("a", function (c) { return c.sys === "depotPut" && c.item === "vin"; });
pick("a", function (c) { return c.sys === "depotPut" && c.item === "pain"; });
pick("a", function (c) { return c.sys === "depotPut" && c.item === "or:1"; });
assert.strictEqual(A.s.gold, 7); assert.deepStrictEqual(A.s.items, ["sablier"]);
pick("a", function (c) { return c.sys === "depotClose"; });
assert.strictEqual(A.s.node, "b");
// Nothing has crossed yet: the other digs and finds nothing.
pick("b", function (c) { return c.sys === "depotOpen" && c.mode === "take"; });
assert.ok(/rien/.test(MU.view(st, g, "b").text.join(" ")));
pick("b", function (c) { return c.sys === "depotClose"; });
pick("b", function (c) { return c.sys === "depotOpen" && c.mode === "put" && c.depot === "cahier"; });
pick("b", function (c) { return c.sys === "depotPut" && c.item === "lettre"; });
pick("b", function (c) { return c.sys === "depotClose"; });
// The chronicle read a first time says what it always said, silently.
assert.deepStrictEqual(M.chroniquesOf(st, B.s)[0].lines.map(function (l) { return l.text; }), ["Le pont tomba."]);
assert.strictEqual(M.chroniquesOf(st, A.s).length, 0, "la Chronique n'est lue que par celui qui reste");

pick("a", function (c) { return c.label === "Sauver le pont"; });
pick("b", function (c) { return c.label === "Marcher"; });
assert.ok(MU.allWaiting(g)); MU.sync(st, g);

// At the second stone, sixty years have passed over what was buried, and the book has changed.
var vb = MU.view(st, g, "b"), news = B.s.events.map(function (e) { return e.text; }).join(" | ");
assert.ok(/ne dit plus la même chose : Le pont tint bon\./.test(news), news);
assert.ok(/une ligne de plus : On vit un étranger\./.test(news), news);
assert.ok(vb.choices.some(function (c) { return c.sys === "depotOpen" && c.mode === "take"; }));
pick("b", function (c) { return c.sys === "depotOpen" && c.mode === "take" && c.depot === "borne"; });
var there = labels("b");
assert.ok(there.indexOf("Déterrer : Vin nouveau") >= 0 && there.indexOf("Déterrer : Pain") >= 0 && there.indexOf("Déterrer : 5 pièces") >= 0, there.join(" | "));
pick("b", function (c) { return c.sys === "depotTake" && c.item === "vin"; });
pick("b", function (c) { return c.sys === "depotTake" && c.item === "pain"; });
pick("b", function (c) { return c.sys === "depotTake" && c.item === "or:1"; });
assert.ok(B.s.items.indexOf("vieux_vin") >= 0 && B.s.items.indexOf("vin") < 0 && B.s.items.indexOf("pain") < 0, B.s.items.join(","));
assert.strictEqual(B.s.gold, 12 + 10, "le vieil or vaut double");
assert.strictEqual(labels("b").filter(function (l) { return /^Déterrer/.test(l); }).length, 0, "ce qui est pris ne s'offre plus");
pick("b", function (c) { return c.sys === "depotClose"; });
// The letter has gone the other way, unchanged.
pick("a", function (c) { return c.sys === "depotOpen" && c.mode === "take" && c.depot === "cahier"; });
pick("a", function (c) { return c.sys === "depotTake" && c.item === "lettre"; });
assert.ok(A.s.items.indexOf("lettre") >= 0);
assert.ok(M.evalCond(st, B.s, { not: { depot: "borne" } }) && M.evalCond(st, A.s, { not: { depot: "cahier" } }));
pick("a", function (c) { return c.sys === "depotClose"; });
// The news is told once.
MU.view(st, g, "b"); assert.ok(!B.s.events.some(function (e) { return /Chronique/.test(e.text) && e !== undefined && false; }));
console.log("dépôts et chroniques : ok");
