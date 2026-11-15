"use strict";
// Checks the words with effects (8.6): marks stripped from the text the reader hears or searches, kept for the page;
// hidden finds counted once; invisible ink shown only with its object; the page's mood; the validator's refusals.
// Usage: node tests/effets-test.js
var M = require("../src/moteur.js"), V = require("../src/validateur.js"), assert = require("assert");
function story() {
  return {
    id: "fx", title: "Effets", start: "P", acts: [{ id: "I", title: "I", levels: [1, 1], start: "P" }],
    world: { start: { place: "cour", hour: 8 }, places: { cour: { name: "La cour", arrive: "P" } } },
    items: { lampe: { name: "La lampe" } },
    keywords: { sceau: { forms: ["sceau"], def: "Le sceau du collège." } },
    trouvaillesName: "lettres d'or",
    trouvailles: { a: { title: "Un A", fx: { flag: "vuA" } }, b: { title: "Un B" } },
    moods: [{ if: { has: "ivre" }, mood: "ivre" }],
    passages: {
      P: { title: "P", text: ["Le mur {{fx:tremble|tremble}} sous le {{cle:sceau}}, une {{or:a|A}} brille.", "{{envers:Miroir}} et {{tache:Vernet}} ici.", { if: { item: "lampe" }, text: "{{encre:lampe|Écrit à la lampe.}}" }],
        choices: [{ label: "Prendre la lampe", fx: { item: "lampe" }, to: "Q" }, { label: "Boire", fx: { flag: "ivre" }, to: "Q" }] },
      Q: { title: "Q", text: ["Une {{or:b|B}} et {{encre:lampe|la trace}}."], choices: [{ label: "Finir", to: "F" }] },
      F: { title: "F", text: ["Fin."], end: true },
    },
  };
}
function fresh(st) { M.setRng(function () { return 0.01; }); var s = M.freshState(st); s.name = "A"; s.arch = "guerrier"; M.start(st, s); return s; }

var st = story(); M.prepare(st);
var s = fresh(st), v = M.view(st, s);
assert.strictEqual(v.text[0], "Le mur tremble sous le sceau, une A brille.");
assert.strictEqual(v.text[1], "Miroir et ici.");
assert.strictEqual(v.text.length, 2, "le paragraphe à la lampe reste caché sans la lampe");
assert(/\{\{fx:tremble\|tremble\}\}/.test(v.marked[0]), "la page garde les balises");
assert.strictEqual(M.keywordFor(st, "Sceau"), "sceau");
assert.strictEqual(M.keywordFor(st, "fatiguée"), "fatigue");

assert.strictEqual(M.trouve(st, s, "a"), true);
assert.strictEqual(M.trouve(st, s, "a"), false, "une trouvaille ne compte qu'une fois");
assert(s.flags.vuA, "la trouvaille applique ses effets");
assert(s.events.some(function (e) { return /Un A · Lettres d'or : 1 sur 2/.test(e.text); }), "l'événement compte les trouvailles");
assert(M.evalCond(st, s, { trouvaille: "a" }) && M.evalCond(st, s, { trouvailles: 1 }) && !M.evalCond(st, s, { trouvailles: 2 }));

M.choose(st, s, M.view(st, s).choices[0]);
assert.strictEqual(M.view(st, s).text[0], "Une B et la trace.", "l'encre se lit avec l'objet");
var s2 = fresh(st); M.choose(st, s2, M.view(st, s2).choices[1]);
assert.strictEqual(M.view(st, s2).text[0], "Une B et.", "sans l'objet, l'encre reste invisible");
assert.strictEqual(M.view(st, s2).mood, "ivre");
assert(!M.view(st, s).mood);

var rep = V.validate(JSON.parse(JSON.stringify(story())), { games: 40 });
assert.deepStrictEqual(rep.errors, [], rep.errors.join("\n"));
function errs(edit) { var x = story(); edit(x); return V.staticCheck(M.prepare(x) || x).errors.join("\n"); }
assert(/fx|effet/i.test(errs(function (x) { x.passages.F.text = ["{{fx:danse|non}}"]; })), "effet inconnu refusé");
assert(/trouvaille/i.test(errs(function (x) { x.passages.F.text = ["{{or:zz|Z}}"]; })), "trouvaille inconnue refusée");
assert(/objet|encre/i.test(errs(function (x) { x.passages.F.text = ["{{encre:rien|x}}"]; })), "objet inconnu refusé");
assert(/balise|fermée/i.test(errs(function (x) { x.passages.F.text = ["{{fx:tremble|non"]; })), "balise mal fermée refusée");
assert(/humeur|mood/i.test(errs(function (x) { x.moods = [{ if: {}, mood: "joie" }]; })), "humeur inconnue refusée");
console.log("effets-test : OK");
