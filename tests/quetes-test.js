"use strict";
// Checks the quest rules of the engine: a quest left halfway can be taken up again, a refusal closes it for good
// (and says so on the button), and a quest is missed once its act is over or its `closes` condition holds.
// Usage: node tests/quetes-test.js
var M = require("../src/moteur.js"), assert = require("assert");
var st = {
  id: "q", title: "Test quêtes", start: "H",
  acts: [{ id: "I", title: "I", levels: [1, 3], start: "H" }, { id: "II", title: "II", levels: [1, 3], start: "Z" }],
  quests: [
    { id: "QA", act: "I", kind: "annexe", title: "La quête A", start: "A" },
    { id: "QB", act: "I", kind: "annexe", title: "La quête B", start: "B" },
    { id: "QC", act: "I", kind: "annexe", title: "La quête C", start: "C", closes: { has: "fin:ch1" } },
  ],
  passages: {
    H: { act: "I", title: "Carrefour", hub: true, text: ["La place."], choices: [
      { label: "Quête A", hide: { seen: "A" }, to: "A" },
      { label: "Quête B", hide: { seen: "B" }, to: "B" },
      { label: "Quête C", hide: { seen: "C" }, to: "C" },
      { label: "Finir le chapitre", fx: { flag: "fin:ch1" }, to: "H" },
      { label: "Acte II", to: "Z" }] },
    A: { act: "I", title: "A", text: ["A."], choices: [{ label: "Entrer", to: "A2" }, { label: "Non merci", refuse: true, to: "H" }] },
    A2: { act: "I", title: "A2", text: ["A2."], choices: [{ label: "Revenir plus tard", to: "H" }, { label: "Finir", fx: { quest: "QA" }, to: "H" }] },
    B: { act: "I", title: "B", text: ["B."], choices: [{ label: "Non", refuse: true, to: "H" }, { label: "Oui", fx: { quest: "QB" }, to: "H" }] },
    C: { act: "I", title: "C", text: ["C."], choices: [{ label: "Plus tard", to: "H" }] },
    Z: { act: "II", title: "Z", end: true, text: ["Fin."] },
  },
};
function labels(s) { return M.view(st, s).choices.map(function (c) { return c.label; }); }
function pick(s, l) { var c = M.view(st, s).choices.filter(function (c) { return c.label === l; })[0]; assert(c, "absent : " + l + " dans " + labels(s)); M.choose(st, s, c); return c; }
var s = M.freshState(st); s.name = "T"; s.arch = "voleur"; M.start(st, s);
// A left halfway: its door comes back.
pick(s, "Quête A"); pick(s, "Entrer"); pick(s, "Revenir plus tard");
assert(labels(s).indexOf("Quête A") >= 0, "la quête A, quittée en cours, doit rester proposée");
pick(s, "Quête A");
assert(s.events.some(function (e) { return /Tu reprends : La quête A/.test(e.text); }), "reprise annoncée");
pick(s, "Entrer"); pick(s, "Finir");
assert.strictEqual(M.questState(s, st.quests[0], st), "faite");
assert(labels(s).indexOf("Quête A") < 0, "quête finie : la porte se ferme");
// B refused: the button says it, the door closes, the journal says "refusée".
pick(s, "Quête B");
assert.strictEqual(M.view(st, s).choices.filter(function (c) { return c.label === "Non"; })[0].note, "refus définitif");
pick(s, "Non");
assert(labels(s).indexOf("Quête B") < 0, "quête refusée : la porte reste fermée");
assert.strictEqual(M.questState(s, st.quests[1], st), "refusée");
// C left, then its chapter closes: missed.
pick(s, "Quête C"); pick(s, "Plus tard");
assert(labels(s).indexOf("Quête C") >= 0, "C reste proposée");
assert.strictEqual(M.questState(s, st.quests[2], st), "en cours");
pick(s, "Finir le chapitre");
assert.strictEqual(M.questState(s, st.quests[2], st), "manquée");
assert(labels(s).indexOf("Quête C") < 0, "C manquée : la porte se ferme");
assert.deepStrictEqual(M.remaining(st, s, "I").map(function (q) { return q.id; }), [], "plus rien à faire à l'acte I");
console.log("quetes-test : OK");
