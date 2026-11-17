"use strict";
// Checks the engine of the books read twice (12.1) on a small story: the first reading starts on the start and ends on
// its own ending, the second (an ending already found) starts on start2 and ends on the other; a riddle with two right
// answers (alt), the hidden one counted only in the second reading; a puzzle carried in the pocket and solved from
// another page when its key comes; an answer found in an earlier game offered again.
// Usage: node tests/deuxfois-test.js
var M = require("../src/moteur.js"), V = require("../src/validateur.js"), assert = require("assert");
function story() {
  return {
    id: "df", title: "Deux fois", start: "P", acts: [{ id: "I", title: "I", levels: [1, 1], start: "P" }],
    world: { start: { place: "cour", hour: 8 }, places: { cour: { name: "La cour", arrive: "P" } } },
    twice: { first: "voile", second: "verite", start2: "P2", say2: "SECONDE" },
    puzzles: {
      quatrain: { kind: "chiffre", title: "Le quatrain", text: "QUATRAIN", answer: ["horloge"], win: { to: "Q1" },
        alt: [{ id: "cache", answer: ["tombe"], if: { second: true }, to: "Q2", say: "DOUBLE SENS" }] },
      tablette: { kind: "chiffre", title: "La tablette", text: "TABLETTE", cipher: "XYZ", answer: "lune", carry: true, win: { fx: { flag: "porte" } } },
    },
    passages: {
      P: { act: "I", title: "La cour", text: ["COUR", { second: true, text: "DEJA_VU" }],
        choices: [{ label: "Le quatrain", to: "Z" }, { label: "La tablette", to: "T" }, { label: "La clef", to: "K" }, { label: "Finir", to: "F1", second: false }] },
      P2: { act: "I", title: "La cour, encore", text: ["COUR2"], choices: [{ label: "Le quatrain", to: "Z" }, { label: "Finir", to: "F2" }] },
      Z: { act: "I", title: "Le mur", text: ["MUR"], puzzle: "quatrain", choices: [{ back: "P" }] },
      T: { act: "I", title: "La tablette", text: ["TAB"], puzzle: "tablette", choices: [{ back: "P" }] },
      K: { act: "I", title: "La clef", text: ["CLEF"], choices: [{ label: "Passer la porte", if: "porte", to: "F1", second: false }, { label: "Passer la porte", if: "porte", to: "F2", second: true }, { back: "P" }] },
      Q1: { act: "I", title: "L'horloge", text: ["HORLOGE"], choices: [{ label: "Finir", to: "F1", second: false }, { label: "Finir", to: "F2", second: true }] },
      Q2: { act: "I", title: "La tombe", text: ["TOMBE"], choices: [{ label: "Finir", to: "F2" }] },
      F1: { act: "I", title: "Le voile", end: true, fx: { flag: "fin:voile" }, text: ["FIN1"] },
      F2: { act: "I", title: "La vérité", end: true, fx: { flag: "fin:verite" }, text: ["FIN2"] },
    },
  };
}
function fresh(st, second, answers) { M.setRng(function () { return 0.01; }); var s = M.freshState(st); s.name = "A"; s.arch = "guerrier"; if (second) s.second = { "fin:voile": 1 }; if (answers) s.answers = answers; M.start(st, s); return s; }
function view(st, s) { return M.view(st, s); }
function sys(st, s, k, more) { var c = view(st, s).choices.filter(function (x) { return x.sys === k && (!more || !more.puzzle || x.puzzle === more.puzzle); })[0]; assert(c, "choix système « " + k + " » absent : " + view(st, s).choices.map(function (x) { return x.sys || x.label; }).join(" / ")); M.choose(st, s, Object.assign({}, c, more || {})); }
function pick(st, s, l) { var c = view(st, s).choices.filter(function (x) { return x.label.indexOf(l) === 0 && x.ok; })[0]; assert(c, "choix « " + l + " » absent : " + view(st, s).choices.map(function (x) { return x.label; }).join(" / ")); M.choose(st, s, c); return c; }

var st = story();
var rep = V.validate(JSON.parse(JSON.stringify(story())), { games: 60 });
assert.deepStrictEqual(rep.errors, [], rep.errors.join("\n"));

// First reading: starts on P, the second-reading paragraph hidden; the reading is said; the ending is the first.
var s = fresh(st);
assert.strictEqual(M.readingOf(st, s), 1); assert.strictEqual(s.node, "P");
assert(s.events.some(function (e) { return /Première lecture/.test(e.text); }));
assert(view(st, s).text.join("|").indexOf("DEJA_VU") < 0);
// The riddle: the hidden answer does not count in the first reading.
pick(st, s, "Le quatrain"); sys(st, s, "puzzle"); sys(st, s, "puzzleTry", { answer: "tombe" }); assert.strictEqual(s.node, "@enigme");
sys(st, s, "puzzleTry", { answer: "Horloge" }); assert.strictEqual(s.node, "Q1"); assert(s.flags["enigme:quatrain"]); assert.deepStrictEqual(s.solved.quatrain, ["Horloge"]);
pick(st, s, "Finir"); var v = view(st, s); assert.strictEqual(v.kind, "end"); assert.strictEqual(s.node, "F1"); assert.strictEqual(v.twice.reading, 1);

// The pocket: a carried puzzle left open, taken up from another page once the key is known; the reader stays there.
s = fresh(st);
pick(st, s, "La tablette"); sys(st, s, "puzzle"); assert(/Garder/.test(view(st, s).choices.filter(function (c) { return c.sys === "puzzleLeave"; })[0].label));
sys(st, s, "puzzleLeave"); assert.deepStrictEqual(M.pocketOf(st, s), ["tablette"]);
// on its own page, no pocket choice (the puzzle's own choice is there)
assert(!view(st, s).choices.some(function (c) { return c.sys === "pocket"; }));
M.choose(st, s, view(st, s).choices.filter(function (c) { return c.auto === "back" || /Revenir/.test(c.label); })[0]);
pick(st, s, "La clef"); var kp = view(st, s).choices.filter(function (c) { return c.label === "Passer la porte"; })[0]; assert(!kp.ok);
var pc = view(st, s).choices.filter(function (c) { return c.sys === "pocket"; })[0]; assert(pc && /tablette/.test(pc.label), "choix des énigmes en suspens");
sys(st, s, "pocket"); assert.strictEqual(s.node, "@suspens");
sys(st, s, "pocketOpen", { puzzle: "tablette" }); assert.strictEqual(s.node, "@enigme");
var seenK = s.seen.K;
sys(st, s, "puzzleTry", { answer: "LUNE" }); assert.strictEqual(s.node, "K", "on reste sur la page"); assert.strictEqual(s.seen.K, seenK, "la page n'est pas relue");
assert(s.flags.porte); assert.deepStrictEqual(M.pocketOf(st, s), []); assert(view(st, s).choices.filter(function (c) { return c.label === "Passer la porte"; })[0].ok);
assert(!view(st, s).choices.some(function (c) { return c.sys === "pocket"; }));

// Second reading: starts on start2, said; the hidden answer counts; the answer found before is offered again.
s = fresh(st, true, { quatrain: ["Horloge"] });
assert.strictEqual(M.readingOf(st, s), 2); assert.strictEqual(s.node, "P2");
assert(s.events.some(function (e) { return e.text === "SECONDE"; }));
pick(st, s, "Le quatrain"); sys(st, s, "puzzle");
var rc = view(st, s).choices.filter(function (c) { return c.sys === "puzzleRecall"; }); assert.strictEqual(rc.length, 1); assert(/Horloge/.test(rc[0].label));
sys(st, s, "puzzleTry", { answer: "la tombe" }); assert.strictEqual(s.node, "@enigme", "la tombe ≠ tombe");
sys(st, s, "puzzleTry", { answer: "Tombe" }); assert.strictEqual(s.node, "Q2"); assert(s.flags["enigme:quatrain:cache"]);
assert(s.events.some(function (e) { return e.text === "DOUBLE SENS"; }));
pick(st, s, "Finir"); v = view(st, s); assert.strictEqual(s.node, "F2"); assert.strictEqual(v.twice.reading, 2);

// The validator holds each reading to its ending: a first reading that could end on the second ending is an error.
var bad = story(); bad.passages.P.choices[3] = { label: "Finir", to: "F2" };
var rb = V.validate(bad, { games: 60 });
assert(rb.errors.some(function (e) { return /première lecture finit sur « fin:verite »/.test(e); }), rb.errors.join("\n"));
// Static checks: a carried puzzle with tries, an alt without id, a twice ending unknown.
var bad2 = story(); bad2.puzzles.tablette.tries = 2; bad2.puzzles.quatrain.alt[0].id = ""; bad2.twice.second = "nulle";
var r2 = V.staticCheck(bad2).errors.join("\n");
assert(/carry/.test(r2) && /il faut un id/.test(r2) && /twice.second/.test(r2), r2);
console.log("deux lectures : ok");
