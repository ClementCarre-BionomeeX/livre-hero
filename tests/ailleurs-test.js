"use strict";
// The books remember the reader (25.8): a book leaves traces when a game ends, another book of the library reads
// them with the tag / condition `ailleurs`. Engine, validator, and the first echo of the Croûte 'n Chrome series.
// Usage: node tests/ailleurs-test.js
var assert = require("assert"), path = require("path");
var ROOT = path.join(__dirname, "..");
var M = require(path.join(ROOT, "src/moteur.js")), V = require(path.join(ROOT, "src/validateur.js"));

function source() {
  return { id: "source", title: "La source", start: "A", version: 1, acts: [{ id: "I", title: "I", levels: [1, 1], start: "A" }], quests: [], companions: {}, people: {}, items: {}, world: { places: { ici: { name: "Ici" } }, start: "ici" },
    traces: { "marchand-trahi": { if: { has: "trahi" }, axe: "marchand" }, "marchand-servi": { if: { has: "servi" }, axe: "marchand" }, "fini": {} },
    passages: {
      A: { act: "I", title: "Le marchand", place: "ici", text: ["Un marchand."], choices: [{ label: "Le trahir", fx: { flag: "trahi" }, to: "Z1" }, { label: "Le servir", fx: { flag: "servi" }, to: "Z2" }] },
      Z1: { act: "I", title: "Trahi", place: "ici", end: true, fx: { flag: "fin:trahi" }, text: ["Fin."] },
      Z2: { act: "I", title: "Servi", place: "ici", end: true, fx: { flag: "fin:servi" }, text: ["Fin."] },
    } };
}
function reader() {
  return { id: "lecteur", title: "Le lecteur", start: "A", version: 1, acts: [{ id: "I", title: "I", levels: [1, 1], start: "A" }], quests: [], companions: {}, people: {}, items: {}, world: { places: { ici: { name: "Ici" } }, start: "ici" },
    passages: {
      A: { act: "I", title: "La place", place: "ici", text: ["Une place.", { ailleurs: "source:marchand-trahi", text: "Il te regarde un peu trop longtemps.", else: "Il garde les yeux baissés." }],
        choices: [{ label: "Passer", to: "Z" }, { label: "Pousser la porte du fond", ailleurs: "source", to: "CACHE" }, { label: "Saluer", if: { ailleurs: "source:fin:servi" }, to: "Z" }] },
      CACHE: { act: "I", title: "La page cachée", place: "ici", ailleurs: "source", text: ["Une page de plus."], choices: [{ label: "Sortir", to: "Z" }] },
      Z: { act: "I", title: "Fin", place: "ici", end: true, fx: { flag: "fin:une" }, text: ["Fin."] },
    } };
}
function fresh(st, mem) { var s = M.freshState(st, {}); s.name = "Test"; if (mem) s.ailleurs = mem; M.start(st, s); return s; }
function labels(st, s) { return M.view(st, s).choices.map(function (c) { return c.label; }); }

// 1. The source: what a finished game leaves.
var src = source(); M.prepare(src);
var s1 = fresh(src); M.choose(src, s1, M.view(src, s1).choices[0]);
assert.deepStrictEqual(M.tracesOf(src, s1), [{ id: "marchand-trahi", axe: "marchand" }, { id: "fini", axe: null }]);

// 2. The reader, with nothing held: the book plays as it always did, and nothing announces what is closed.
var rd = reader(); M.prepare(rd);
assert.deepStrictEqual(M.elsewhereRefs(rd), ["source", "source:fin:servi", "source:marchand-trahi"]);
var e0 = fresh(rd), v0 = M.view(rd, e0);
assert(/yeux baissés/.test(v0.text.join(" ")) && !/trop longtemps/.test(v0.text.join(" ")), "sans mémoire : le texte « else »");
assert.deepStrictEqual(labels(rd, e0), ["Passer"], "sans mémoire : aucun choix fermé n'est annoncé");

// 3. With a trace held: the line changes, the hidden page opens, and the choice is marked as unveiled.
var e1 = fresh(rd, { "source": 1, "source:marchand-trahi": 1 }), v1 = M.view(rd, e1);
assert(/trop longtemps/.test(v1.text.join(" ")) && !/yeux baissés/.test(v1.text.join(" ")));
assert.deepStrictEqual(labels(rd, e1), ["Passer", "Pousser la porte du fond"]);
assert(v1.choices[1].unveiled, "le choix ouvert par un autre livre est marqué");
M.choose(rd, e1, v1.choices[1]); assert.strictEqual(e1.node, "CACHE");
var e2 = fresh(rd, { "source": 1, "source:fin:servi": 1 });
assert.deepStrictEqual(labels(rd, e2), ["Passer", "Pousser la porte du fond", "Saluer"]);

// 4. The validator: both books hold, alone and with the library.
var LIB = { source: V.libraryCard(src), lecteur: V.libraryCard(rd) };
assert.deepStrictEqual(LIB.source.traces, { "marchand-trahi": "marchand", "marchand-servi": "marchand", "fini": null });
[source(), reader()].forEach(function (st) { var r = V.validate(st, { games: 120, library: LIB }); assert.deepStrictEqual(r.errors, [], st.id + " : " + r.errors.join("\n")); });
assert.deepStrictEqual(V.validate(reader(), { games: 120 }).errors, [], "un livre importé seul est vérifié sans la bibliothèque");

// 5. What the validator refuses.
function errs(st, lib) { return V.staticCheck(st, { library: lib || LIB }).errors.join("\n"); }
var b1 = reader(); b1.passages.A.text[1].ailleurs = "source:inconnue";
assert(/ne déclare pas la trace « inconnue »/.test(errs(b1)));
var b2 = reader(); b2.passages.A.choices[2].if = { ailleurs: "source:fin:nulle" };
assert(/n'est pas une fin de « source »/.test(errs(b2)));
var b3 = reader(); b3.passages.A.text[1].ailleurs = "absent:trace";
assert(/n'est pas dans la bibliothèque/.test(errs(b3)));
var b4 = reader(); b4.passages.A.text[1].ailleurs = "lecteur";
assert(/ne se cite pas lui-même/.test(errs(b4)));
var b5 = source(); b5.traces.fini.if = { ailleurs: "lecteur" };
assert(/ne lit jamais la mémoire/.test(errs(b5)));
var b6 = source(); b6.traces.jamais = { if: { has: "rien" } };
assert(/trace « jamais » : jamais laissée/.test(V.validate(b6, { games: 120, library: LIB }).errors.join("\n")));
// A page that only another book opens must be reached when that book's trace is given: a wrong key never opens it.
var b7 = reader(); b7.passages.A.choices[1].to = "Z";
assert(/§ CACHE : jamais atteint/.test(V.validate(b7, { games: 120, library: LIB }).errors.join("\n")));

// 6. The first echo of the series: the Catalogue of 1899 leaves where its last page went, La Grande Fonte reads it.
var cat = JSON.parse(JSON.stringify(require(path.join(ROOT, "histoires/src/catalogue/index.js")))); M.prepare(cat);
var cro = JSON.parse(JSON.stringify(require(path.join(ROOT, "histoires/src/croute/index.js")))); M.prepare(cro);
assert.deepStrictEqual(Object.keys(V.libraryCard(cat).traces).sort(), ["page-lue", "page-mentions", "page-tue", "page-vendue"]);
var refs = M.elsewhereRefs(cro); assert(refs.length >= 3 && refs.every(function (k) { return /^catalogue:page-/.test(k); }), refs.join(" "));
assert.strictEqual(V.staticCheck(cro, { library: { catalogue: V.libraryCard(cat), croute: V.libraryCard(cro) } }).errors.filter(function (e) { return /ailleurs|trace/.test(e); }).length, 0);
function office(mem) { var s = M.freshState(cro, {}); s.name = "Test"; if (mem) s.ailleurs = mem; M.start(cro, s); s.node = "O1_vernis"; return M.textList(cro, s, cro.passages.O1_vernis.text, "O1_vernis").join("\n"); }
if (M.textList) {
  assert(!/Cent pains ordinaires|arriérés|bon de livraison/.test(office(null)), "sans le Catalogue, le bureau est celui d'avant");
  assert(/Cent pains ordinaires offerts/.test(office({ "catalogue:page-mentions": 1 })));
  assert(/arriérés, 1899/.test(office({ "catalogue:page-lue": 1 })));
  assert(/bon de livraison/.test(office({ "catalogue:page-vendue": 1 })));
}
console.log("ailleurs-test : tout est bon");
