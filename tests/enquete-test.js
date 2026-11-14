"use strict";
// Checks the engine of « Enquête en ville » (7.9) on a small story: who is where at what hour (people.at), showing a
// clue to a witness (montrer / confront / shrug, a document shown through its clue), two statements that contradict
// each other, clues that fade (and a choice that takes time, read at the hour it ends), rumours of the inn, the
// accusation in three parts (the motive kept, a decoy never a proof), the deadline (and its hour) and back: true.
// Usage: node tests/enquete-test.js
var M = require("../src/moteur.js"), V = require("../src/validateur.js"), assert = require("assert");
function story() {
  return {
    id: "e", title: "Enquête", start: "H", acts: [{ id: "I", title: "I", levels: [1, 1], start: "H" }, { id: "II", title: "II", levels: [1, 1], start: "Z" }],
    world: { start: { place: "quai", hour: 8, clock: true }, places: { quai: { name: "Le quai", arrive: "H" } } },
    deadline: { day: 2, hour: 18, to: "Z", acts: ["I"] },
    clues: {
      a: { rev: "X", text: "Elle dit qu'il dormait.", short: "Elle : il dormait" }, b: { rev: "X", text: "Le lit n'était pas défait.", short: "Le lit intact" },
      ab: { rev: "X", text: "Elle ment sur la nuit.", short: "Elle ment" }, trace: { rev: "X", text: "Une trace dans la vase.", short: "La trace", fades: { day: 1, hour: 12 } },
      faux: { rev: "X", text: "On dit que c'est le batelier.", short: "On-dit", leurre: true }, lettre: { rev: "X", text: "Ce que dit la lettre.", short: "La lettre (indice)" },
    },
    items: { doc: { name: "La lettre", kind: "document", clue: "lettre", text: "*Adieu.*" } },
    contradictions: [{ a: "a", b: "b", clue: "ab" }],
    rumors: { pot: [{ id: "r1", true: true, text: "RUMEUR_UN" }, { id: "r2", true: false, text: "RUMEUR_DEUX", fx: { clue: "faux" } }] },
    mysteries: { X: { title: "Qui ?", act: "I", solved: "x:ok", suspects: ["veuve", "batelier"], motives: { argent: "Pour l'argent", peur: "Par peur" },
      answer: { person: "veuve", motive: "peur", proofs: ["ab"] } } },
    people: {
      veuve: { name: "La veuve Hautcourt", at: [{ when: "matin", place: "quai", talk: "P", label: "Parler à la veuve", see: "VEUVE_LA" }],
        confront: { b: "P_lit", lettre: "P_lettre" }, shrug: ["HAUSSE"] },
      batelier: { name: "Le batelier", at: [{ when: ["apresmidi"], place: "quai", talk: "P", label: "Parler au batelier", see: "BATELIER_LA" }] },
    },
    passages: {
      H: { act: "I", title: "Le quai", place: "quai", hub: true, text: ["Le quai."],
        choices: [{ label: "Regarder la vase", fresh: "trace", takes: 2, fx: { clue: "trace" }, to: "T" }, { label: "Boire", takes: 1, to: "I" },
          { label: "Lire la lettre", hide: { item: "doc" }, fx: { item: "doc", clue: ["lettre", "a", "b"] }, to: "H" }] },
      T: { act: "I", title: "Vase", back: true, text: ["La vase."] },
      I: { act: "I", title: "Auberge", rumeur: "pot", back: true, text: ["L'auberge."] },
      P: { act: "I", title: "La veuve", montrer: "veuve", back: true, text: ["Elle."] },
      P_lit: { act: "I", title: "Le lit", montrer: "veuve", back: true, text: ["LIT"] },
      P_lettre: { act: "I", title: "La lettre", montrer: "veuve", back: true, text: ["LETTRE"] },
      Z: { act: "II", title: "Audience", place: "quai", text: [{ if: { has: "echeance" }, text: "CLOCHE" }, "La salle."],
        accuse: { mystery: "X", to: [{ if: { all: [{ has: "accuse:X:qui" }, { has: "accuse:X:mobile" }, { has: "accuse:X:preuve" }] }, to: "F_ok" }, { to: "F_non" }] },
        choices: [{ label: "Se taire", to: "F_non" }] },
      F_ok: { act: "II", title: "Juste", end: true, fx: { flag: ["fin:ok", "x:ok"] }, text: ["OK"] },
      F_non: { act: "II", title: "Faux", end: true, fx: { flag: "fin:non" }, text: ["NON"] },
    },
  };
}
function fresh(st) { var s = M.freshState(st); s.name = "A"; s.arch = "voleur"; s.fem = true; M.start(st, s); return s; }
function txt(st, s) { return M.view(st, s).text.map(function (t) { return typeof t === "string" ? t : t.text; }).join("|"); }
function pick(st, s, label) { var c = M.view(st, s).choices.filter(function (c) { return c.label.indexOf(label) === 0; })[0]; assert(c, "choix absent : " + label + " dans " + M.view(st, s).choices.map(function (c) { return c.label; }).join(" / ")); M.choose(st, s, c); }
function labels(st, s) { return M.view(st, s).choices.map(function (c) { return c.label; }); }

var st = story(), s = fresh(st);
// people.at: the widow on the quay in the morning, with her line and her choice; the bargeman in the afternoon.
assert(/VEUVE_LA/.test(txt(st, s)) && !/BATELIER_LA/.test(txt(st, s)), "horaire : la veuve le matin");
assert(labels(st, s).indexOf("Parler à la veuve") >= 0 && labels(st, s).indexOf("Parler au batelier") < 0, "horaire : choix de la veuve seul");
// fresh + takes: at 10 h, two hours of looking end at noon, when the trace has faded: the choice is not offered.
s.time = 10; assert(labels(st, s).indexOf("Regarder la vase") < 0, "fresh lu à l'heure où le choix finit");
s.time = 8; assert(labels(st, s).indexOf("Regarder la vase") >= 0, "fresh : la trace est encore là à 8 h");
// A document carries its clue: shown once, through the clue, and the witness answers to it.
pick(st, s, "Lire la lettre"); pick(st, s, "Parler à la veuve");
pick(st, s, "Montrer quelque chose");
var shown = labels(st, s);
assert(shown.indexOf("La lettre") < 0 && shown.indexOf("La lettre (indice)") >= 0, "document montré par son indice, une seule ligne : " + shown.join(" / "));
assert(/sous les yeux de la veuve Hautcourt/.test(txt(st, s)), "article accordé après la préposition");
pick(st, s, "La lettre (indice)"); assert(/LETTRE/.test(txt(st, s)), "confront sur l'indice du document");
pick(st, s, "Montrer quelque chose"); pick(st, s, "Elle : il dormait"); assert(/HAUSSE/.test(txt(st, s)), "haussement d'épaules");
// back: true on a passage: the way back to the crossroads, written by the engine.
pick(st, s, "Revenir");
assert(labels(st, s).some(function (l) { return /^Revenir : Le quai/.test(l); }), "back: true → retour au carrefour");
// Contradictions: a wrong pair costs nothing; the right one gives its clue once.
assert.strictEqual(M.contradict(st, s, "a", "lettre").found, false, "fausse contradiction");
var c1 = M.contradict(st, s, "b", "a"); assert(c1.found && !c1.again && s.clues.ab, "contradiction trouvée (dans les deux sens)");
assert(M.contradict(st, s, "a", "b").again, "contradiction déjà trouvée");
// Rumours: one per visit, never twice, its fx applied.
pick(st, s, "Revenir"); pick(st, s, "Boire");
var t1 = txt(st, s); assert(/RUMEUR_UN|RUMEUR_DEUX/.test(t1), "une rumeur à l'auberge");
pick(st, s, "Revenir"); pick(st, s, "Boire"); var t2 = txt(st, s);
assert(/RUMEUR_UN|RUMEUR_DEUX/.test(t2) && t1.indexOf("RUMEUR_UN") >= 0 !== (t2.indexOf("RUMEUR_UN") >= 0), "l'autre rumeur ensuite");
assert(s.clues.faux, "fx de la rumeur");
pick(st, s, "Revenir"); pick(st, s, "Boire"); assert(!/RUMEUR/.test(txt(st, s)), "plus de rumeur");
// The deadline: past day 2, 18 h, the next page is the hearing, at the hour of the deadline.
pick(st, s, "Revenir"); s.time = 24 + 17; pick(st, s, "Boire");
assert.strictEqual(s.node, "Z", "échéance : l'audience"); assert.strictEqual(s.time, 24 + 18, "échéance : l'heure de la cloche");
assert(/CLOCHE/.test(txt(st, s)) && s.flags.echeance, "échéance : drapeau");
// The accusation: who, why, which proof; a decoy is never a proof, the motive is kept.
var acc = M.view(st, s).choices.filter(function (c) { return c.sys === "accuse"; })[0]; assert(acc, "choix d'accusation");
M.choose(st, s, acc); pick(st, s, "La veuve Hautcourt"); pick(st, s, "Par peur");
var proofs = labels(st, s); assert(proofs.indexOf("La lettre") < 0, "preuves : le document passe par son indice");
pick(st, s, "On-dit");
assert.strictEqual(s.node, "F_non", "un leurre n'est pas une preuve");
assert(s.flags["accuse:X:qui"] && s.flags["accuse:X:mobile"] && !s.flags["accuse:X:preuve"], "qui et mobile justes, preuve fausse");
assert(s.flags["accuse-X-mobile=peur"] && s.flags["accuse-X-qui=veuve"] && s.flags["accuse-X-preuve=faux"], "les trois réponses sont gardées");

var s2 = fresh(st); s2.clues.ab = true; s2.people.veuve = true; s2.time = 24 + 19; pick(st, s2, "Boire");
M.choose(st, s2, M.view(st, s2).choices.filter(function (c) { return c.sys === "accuse"; })[0]);
pick(st, s2, "La veuve Hautcourt"); pick(st, s2, "Par peur"); pick(st, s2, "Elle ment");
assert.strictEqual(s2.node, "F_ok", "accusation juste");

// The validator: no fault on this story; a document whose clue is unknown is one.
var rep = V.validate(story(), { games: 40 });
assert.deepStrictEqual(rep.errors, [], "validateur 7.9");
var bad = story(); bad.items.doc.clue = "inconnu";
assert(/clue « inconnu », indice inconnu/.test(V.staticCheck(bad).errors.join("\n")), "validateur : indice de document inconnu");
console.log("enquete-test : OK");
