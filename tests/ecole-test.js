"use strict";
// Checks the engine of « L'école des arts » (8.2) on a small story: practice that raises a domain with use, traits of
// character that open or shut a reply, a ruled duel whose foe learns the hero's habit, puzzles handled on the page
// (wheels, a cipher, pieces to put in order, a roll instead, tries that run out), and dreams on waking.
// Usage: node tests/ecole-test.js
var M = require("../src/moteur.js"), V = require("../src/validateur.js"), assert = require("assert");
function story() {
  return {
    id: "ec", title: "École", start: "P", acts: [{ id: "I", title: "I", levels: [1, 1], start: "P" }],
    world: { start: { place: "cour", hour: 8, gold: 10 }, places: { cour: { name: "La cour", arrive: "P" } } },
    practice: { every: 2, step: 5, max: 10, say: "PRATIQUE {dom} {n}" },
    traits: { audace: { name: "L'audace", low: "Prudent{e}", high: "Téméraire" } },
    people: { val: { name: "Valérien" } },
    duels: { d1: { title: "Le duel", foe: "val", touches: 2, dom: "combat", rule: "PREMIER_SANG", style: { attaque: 100, parade: 0.001, feinte: 0.001 },
      tells: { attaque: ["IL_SE_FEND"] }, win: { to: "W", fx: { flag: "gagne" } }, lose: { to: "L" } } },
    puzzles: {
      cad: { kind: "molettes", title: "Le cadenas", text: "CADENAS", wheels: [["A", "B", "C"], ["X", "Y"]], answer: ["C", "Y"], tries: 2, win: { to: "W" }, lose: { to: "L" } },
      msg: { kind: "chiffre", title: "Le message", text: "MESSAGE", cipher: "URYYB", answer: ["hello", "Héllo"], hint: [{ if: { has: "clef" }, text: "INDICE" }], win: { to: "W" } },
      pag: { kind: "ordre", title: "La page", text: "PAGE", pieces: ["deux", "un", "trois"], answer: [1, 0, 2], force: { dom: "savoir", diff: 0, takes: 2, label: "Forcer" }, win: { to: "W" } },
    },
    dreams: [{ to: "R1", if: { has: "vu" } }],
    passages: {
      P: { act: "I", title: "La cour", place: "cour", hub: true, text: ["COUR", { if: { trait: "audace", min: 1 }, text: "AUDACIEUX" }],
        choices: [
          { label: "Oser", fx: { trait: { audace: 2 } }, to: "P" }, { label: "Reculer", fx: { trait: { audace: -3 } }, to: "P" },
          { label: "Défier le maître", if: { trait: "audace", min: 2 }, to: "P" },
          { label: "Leçon", fx: { pratique: { savoir: 2 } }, to: "P" }, { label: "Lire", test: { dom: "savoir", diff: 0 }, win: { to: "P" }, lose: { to: "P" } },
          { label: "Duel", to: "D" }, { label: "Cadenas", to: "Z1" }, { label: "Message", to: "Z2" }, { label: "Page", to: "Z3" },
          { label: "Voir", fx: { flag: "vu" }, to: "P" }, { label: "Clef", fx: { flag: "clef" }, to: "P" }, { label: "Dormir", takes: "morning", to: "N" }] },
      D: { act: "I", title: "La salle d'armes", text: ["SALLE"], duel: "d1" },
      Z1: { act: "I", title: "Le cabinet", text: ["CABINET"], puzzle: "cad", choices: [{ back: "P" }] },
      Z2: { act: "I", title: "Le carnet", text: ["CARNET"], puzzle: "msg", choices: [{ back: "P" }] },
      Z3: { act: "I", title: "La page", text: ["PAGE"], puzzle: "pag", choices: [{ back: "P" }] },
      N: { act: "I", title: "Le matin", reveil: true, text: ["MATIN"], choices: [{ label: "Descendre", to: "P" }] },
      R1: { act: "I", title: "Un rêve", back: true, text: ["REVE"] },
      W: { act: "I", title: "Gagné", end: true, text: ["GAGNE"] },
      L: { act: "I", title: "Perdu", end: true, text: ["PERDU"] },
    },
  };
}
function fresh(st) { M.setRng(function () { return 0.01; }); var s = M.freshState(st); s.name = "A"; s.arch = "guerrier"; M.start(st, s); return s; }
function txt(st, s) { return M.view(st, s).text.join("|"); }
function sys(st, s, k, more) { var c = M.view(st, s).choices.filter(function (x) { return x.sys === k; })[0]; assert(c, "choix système « " + k + " » absent"); M.choose(st, s, Object.assign({}, c, more || {})); }
function pick(st, s, l) { var c = M.view(st, s).choices.filter(function (x) { return x.label.indexOf(l) === 0; })[0]; assert(c, "choix « " + l + " » absent : " + M.view(st, s).choices.map(function (x) { return x.label; }).join(" / ")); M.choose(st, s, c); return c; }

var st = story();
var rep = V.validate(JSON.parse(JSON.stringify(story())), { games: 40 });
assert.deepStrictEqual(rep.errors, [], rep.errors.join("\n"));

// Practice: a lesson counts two uses; every two uses, +5, up to 10.
var s = fresh(st), b0 = M.bonus(st, s, "savoir");
pick(st, s, "Leçon"); assert.strictEqual(M.practiceOf(s, "savoir"), 5); assert.strictEqual(M.bonus(st, s, "savoir"), b0 + 5);
assert(s.events.some(function (e) { return /PRATIQUE Savoir 5/.test(e.text); }), s.events.map(function (e) { return e.text; }).join(" / "));
pick(st, s, "Lire"); pick(st, s, "Lire"); assert.strictEqual(M.practiceOf(s, "savoir"), 10);
pick(st, s, "Leçon"); assert.strictEqual(M.practiceOf(s, "savoir"), 10, "plafond");

// Traits: a choice greyed until the hero is bold enough; a paragraph that shows only then.
var dm = M.view(st, s).choices.filter(function (c) { return c.label === "Défier le maître"; })[0]; assert(dm && !dm.ok && /caractère/.test(dm.why));
pick(st, s, "Oser"); assert.strictEqual(M.traitOf(s, "audace"), 2); assert(txt(st, s).indexOf("AUDACIEUX") >= 0);
assert.strictEqual(M.traitWord(st, s, "audace"), "Téméraire");
assert(M.view(st, s).choices.filter(function (c) { return c.label === "Défier le maître"; })[0].ok);
pick(st, s, "Reculer"); assert.strictEqual(M.traitOf(s, "audace"), -1); assert.strictEqual(M.traitWord(st, s, "audace"), "Prudent");

// A ruled duel: the foe always attacks (style); parrying wins each pass, the tell gives the attack away.
var s2 = fresh(st); pick(st, s2, "Duel"); sys(st, s2, "duel");
assert.strictEqual(s2.node, "@duel"); assert(txt(st, s2).indexOf("PREMIER_SANG") >= 0);
sys(st, s2, "duelMove", { move: "parade" }); assert.strictEqual(s2.duel.me, 1);
sys(st, s2, "duelMove", { move: "parade" }); assert.strictEqual(s2.duel.over, "win");
sys(st, s2, "duelEnd"); assert.strictEqual(s2.node, "W"); assert(s2.flags.gagne && s2.flags["duel:d1"] && s2.flags["duel-d1=gagne"]);
assert(M.evalCond(st, s2, { duel: "d1", is: "win" }));
// The foe learns: after two parries, a foe with an even style leans to the feint that beats the parry.
var st3 = story(); st3.duels.d1.style = {}; st3.duels.d1.adaptWeight = 1000;
var s3 = fresh(st3); s3.duelMemo = { val: { parade: 2 } }; pick(st3, s3, "Duel"); sys(st3, s3, "duel");
assert.strictEqual(s3.duel.next, "feinte", "le rival a retenu l'habitude du héros");
// Losing: attacking an attacking foe goes to the roll (same move); with a bad roll, two touches lose.
var s4 = fresh(st); M.setRng(function () { return 0.5; }); pick(st, s4, "Duel"); sys(st, s4, "duel");
sys(st, s4, "duelMove", { move: "feinte" }); sys(st, s4, "duelMove", { move: "feinte" }); assert.strictEqual(s4.duel.over, "lose");
sys(st, s4, "duelEnd"); assert.strictEqual(s4.node, "L");

// Puzzles. Wheels: a wrong answer counts a try; the right one wins.
var s5 = fresh(st); pick(st, s5, "Cadenas"); sys(st, s5, "puzzle");
var pv = M.view(st, s5); assert.strictEqual(pv.puzzle.kind, "molettes"); assert(pv.choices.some(function (c) { return c.sys === "puzzleTry" && c.ui; }));
sys(st, s5, "puzzleTry", { answer: [] }); assert.strictEqual(s5.puzzle.wrong, 0, "hésiter ne coûte rien");
sys(st, s5, "puzzleTry", { answer: ["A", "X"] }); assert.strictEqual(s5.puzzle.wrong, 1);
sys(st, s5, "puzzleTry", { answer: ["C", "Y"] }); assert.strictEqual(s5.node, "W"); assert(s5.flags["enigme:cad"]);
// Tries run out: the puzzle is lost.
var s6 = fresh(st); pick(st, s6, "Cadenas"); sys(st, s6, "puzzle");
sys(st, s6, "puzzleTry", { answer: ["A", "X"] }); sys(st, s6, "puzzleTry", { answer: ["B", "X"] }); assert.strictEqual(s6.node, "L");
// Cipher: accents and case do not count; the hint shows once its condition holds; leaving keeps the puzzle open.
var s7 = fresh(st); pick(st, s7, "Message"); sys(st, s7, "puzzle"); assert(txt(st, s7).indexOf("URYYB") >= 0 && txt(st, s7).indexOf("INDICE") < 0);
sys(st, s7, "puzzleLeave"); assert.strictEqual(s7.node, "Z2"); assert(M.view(st, s7).choices.some(function (c) { return c.sys === "puzzle"; }));
pick(st, s7, "Revenir"); pick(st, s7, "Clef"); pick(st, s7, "Message"); sys(st, s7, "puzzle"); assert(txt(st, s7).indexOf("INDICE") >= 0);
sys(st, s7, "puzzleTry", { answer: "  HÉLLO " }); assert.strictEqual(s7.node, "W");
// Order: the pieces' indices in the right order; a roll instead, once a visit.
var s8 = fresh(st); pick(st, s8, "Page"); sys(st, s8, "puzzle");
assert.deepStrictEqual(M.view(st, s8).puzzle.pieces, ["deux", "un", "trois"]);
M.setRng(function () { return 0.01; }); var t0 = s8.time; sys(st, s8, "puzzleForce"); assert.strictEqual(s8.time, t0 + 2); assert.strictEqual(s8.node, "@enigme");
assert(!M.view(st, s8).choices.some(function (c) { return c.sys === "puzzleForce"; }), "forcer une fois par visite");
sys(st, s8, "puzzleTry", { answer: [1, 0, 2] }); assert.strictEqual(s8.node, "W");

// Dreams: on waking, a dream whose condition holds comes first, once; then the morning.
var s9 = fresh(st); pick(st, s9, "Dormir"); assert.strictEqual(s9.node, "N", "pas de rêve sans ce qu'il reprend");
pick(st, s9, "Descendre"); pick(st, s9, "Voir"); pick(st, s9, "Dormir"); assert.strictEqual(s9.node, "R1");
pick(st, s9, "Revenir"); assert.strictEqual(s9.node, "N"); assert(txt(st, s9).indexOf("MATIN") >= 0);
pick(st, s9, "Descendre"); pick(st, s9, "Dormir"); assert.strictEqual(s9.node, "N", "chaque rêve une fois");

// The validator catches a wheel without its symbol and a duel nobody opens.
var bad = story(); bad.puzzles.cad.answer = ["Z", "Y"]; bad.duels.d2 = { title: "X", foe: "val", win: { to: "W" }, lose: { to: "L" } };
var r2 = V.validate(bad, { games: 5 }).errors.join("\n");
assert(/manque sur la molette 1/.test(r2), r2); assert(/aucun passage ne l'ouvre/.test(r2), r2);
console.log("ecole-test : OK");
