"use strict";
// Checks the puzzles of 21.0 on a small story (Clément, 23/11: « des textes à cliquer qui changent en fonction des
// objets, un texte avec changement de lettres et une clef à trouver ») : ciphers with a key that the engine writes
// itself (César, key word, Vigenère, a free substitution rebuilt letter by letter), words to look at with what one
// carries ({{examen:…}}), a sequence to tap, levers that move each other or lamps, a grid to mark, wheels with names.
// Usage: node tests/enigmes-test.js
var M = require("../src/moteur.js"), V = require("../src/validateur.js"), assert = require("assert");
function story() {
  return {
    id: "en", title: "Énigmes", start: "P", acts: [{ id: "I", title: "I", levels: [1, 1], start: "P" }],
    world: { start: { place: "salle", hour: 8, gold: 10 }, places: { salle: { name: "La salle", arrive: "P" } } },
    items: {
      loupe: { name: "La loupe", kind: "outil", desc: "Une loupe." },
      aimant: { name: "L'aimant", kind: "outil", desc: "Un aimant." },
      billet: { name: "Le billet", kind: "document", desc: "Un billet.", text: "Écrit dessus : {{chiffre:cesar}}." },
    },
    mysteries: { M: { title: "Qui a signé ?", act: "I", solved: "enigme:cesar", answer: { text: "B. C." } } },
    clues: { c_loupe: { rev: "M", text: "Sous la loupe, une signature." } },
    examens: {
      etiquette: { title: "L'étiquette", nu: "Une étiquette ordinaire.", avec: { loupe: { text: "Une signature minuscule : B. C.", fx: { clue: "c_loupe" } } }, autre: "Rien de ce côté." },
    },
    puzzles: {
      cesar: { kind: "clef", scheme: "cesar", key: 3, plain: "Le pain passe.", title: "César", text: "CESAR", win: { to: "W" } },
      mot: { kind: "clef", scheme: "mot", key: "Enjambeur", plain: "Le beurre fond, le chrome reste.", title: "Mot", text: "MOT", win: { to: "W" } },
      vig: { kind: "clef", scheme: "vigenere", key: "croute", plain: "Émotions vendues séparément.", title: "Vigenère", text: "VIG", win: { to: "W" } },
      libre: { kind: "clef", scheme: "libre", key: "chrome", plain: "Pain", title: "Libre", text: "LIBRE", win: { to: "W" } },
      code: { kind: "suite", title: "Le clavier", text: "CLAVIER", symbols: ["1", "2", "3"], answer: ["3", "1", "3"], tries: 2, win: { to: "W" }, lose: { to: "L" } },
      mots: { kind: "suite", title: "Les lettres", text: "LETTRES", symbols: ["E", "R", "U", "B", "R", "E"], once: true, answer: ["B", "E", "U", "R", "R", "E"], win: { to: "W" } },
      lev: { kind: "leviers", title: "Les leviers", text: "LEVIERS", levers: [{ name: "Gauche", flips: [1] }, { name: "Milieu", flips: [0, 2] }, { name: "Droite", flips: [1] }], answer: [1, 0, 1], win: { to: "W" } },
      lamp: { kind: "leviers", title: "Les lampes", text: "LAMPES", lamps: ["Rouge", "Verte"], levers: [{ name: "A", flips: [0] }, { name: "B", flips: [0, 1] }], answer: [0, 1], win: { to: "W" } },
      gr: { kind: "grille", title: "La grille", text: "GRILLE", cols: 3, cells: ["P", "X", "A", "Y", "I", "Z", "Q", "N", "W"], answer: [0, 2, 4, 7], readOut: true, win: { to: "W" } },
      table: { kind: "molettes", title: "La table", text: "TABLE", labels: ["Léa", "Basile"], wheels: [["nord", "sud"], ["nord", "sud"]], answer: ["sud", "nord"], win: { to: "W" } },
    },
    passages: {
      P: { act: "I", title: "La salle", place: "salle", hub: true, text: ["SALLE. Sur la bouteille, {{examen:etiquette|une étiquette}}.", { if: { examen: "etiquette:loupe" }, text: "VU_A_LA_LOUPE" }],
        choices: [
          { label: "Prendre la loupe", fx: { item: "loupe" }, once: true, to: "P" }, { label: "Prendre l'aimant", fx: { item: "aimant" }, once: true, to: "P" },
          { label: "Prendre le billet", fx: { item: "billet" }, once: true, to: "P" },
          { label: "Suivre la signature", if: { examen: "etiquette:loupe" }, to: "W" },
          { label: "César", to: "Z_cesar" }, { label: "Mot", to: "Z_mot" }, { label: "Vigenère", to: "Z_vig" }, { label: "Libre", to: "Z_libre" },
          { label: "Clavier", to: "Z_code" }, { label: "Lettres", to: "Z_mots" }, { label: "Leviers", to: "Z_lev" }, { label: "Lampes", to: "Z_lamp" }, { label: "Grille", to: "Z_gr" }, { label: "Table", to: "Z_table" }] },
      Z_cesar: { act: "I", title: "César", text: ["Le chiffre : {{chiffre:cesar}}."], puzzle: "cesar", choices: [{ back: "P" }] },
      Z_mot: { act: "I", title: "Mot", text: ["M"], puzzle: "mot", choices: [{ back: "P" }] },
      Z_vig: { act: "I", title: "Vigenère", text: ["V"], puzzle: "vig", choices: [{ back: "P" }] },
      Z_libre: { act: "I", title: "Libre", text: ["L"], puzzle: "libre", choices: [{ back: "P" }] },
      Z_code: { act: "I", title: "Clavier", text: ["C"], puzzle: "code", choices: [{ back: "P" }] },
      Z_mots: { act: "I", title: "Lettres", text: ["L"], puzzle: "mots", choices: [{ back: "P" }] },
      Z_lev: { act: "I", title: "Leviers", text: ["L"], puzzle: "lev", choices: [{ back: "P" }] },
      Z_lamp: { act: "I", title: "Lampes", text: ["L"], puzzle: "lamp", choices: [{ back: "P" }] },
      Z_gr: { act: "I", title: "Grille", text: ["G"], puzzle: "gr", choices: [{ back: "P" }] },
      Z_table: { act: "I", title: "Table", text: ["T"], puzzle: "table", choices: [{ back: "P" }] },
      W: { act: "I", title: "Gagné", end: true, text: ["GAGNE"] },
      L: { act: "I", title: "Perdu", end: true, text: ["PERDU"] },
    },
  };
}
function fresh(st) { M.setRng(function () { return 0.01; }); var s = M.freshState(st); s.name = "A"; s.arch = "guerrier"; M.start(st, s); return s; }
function txt(st, s) { return M.view(st, s).text.join("|"); }
function sys(st, s, k, more) { var c = M.view(st, s).choices.filter(function (x) { return x.sys === k; })[0]; assert(c, "choix système « " + k + " » absent"); M.choose(st, s, Object.assign({}, c, more || {})); }
function pick(st, s, l) { var c = M.view(st, s).choices.filter(function (x) { return x.label.indexOf(l) === 0; })[0]; assert(c, "choix « " + l + " » absent : " + M.view(st, s).choices.map(function (x) { return x.label; }).join(" / ")); M.choose(st, s, c); return c; }
function open(st, label) { var s = fresh(st); pick(st, s, label); sys(st, s, "puzzle"); return s; }

var st = story();
var rep = V.validate(JSON.parse(JSON.stringify(story())), { games: 60 });
assert.deepStrictEqual(rep.errors, [], rep.errors.join("\n"));

// Ciphers with a key: the engine writes the cipher from the clear text; the page and the {{chiffre:…}} mark show it.
assert.strictEqual(M.cipherOf(st.puzzles.cesar), "OH SDLQ SDVVH.");
var s = fresh(st); pick(st, s, "César"); assert(txt(st, s).indexOf("OH SDLQ SDVVH.") >= 0, txt(st, s));
sys(st, s, "puzzle"); assert(txt(st, s).indexOf("> OH SDLQ SDVVH.") >= 0); assert.strictEqual(M.view(st, s).puzzle.scheme, "cesar");
assert.strictEqual(M.decipher(st.puzzles.cesar, 3), "LE PAIN PASSE.");
sys(st, s, "puzzleTry", { answer: 4 }); assert.strictEqual(s.node, "@enigme");
sys(st, s, "puzzleTry", { answer: 3 }); assert.strictEqual(s.node, "W"); assert(s.flags["enigme:cesar"]);
// A key word: case and accents do not count; any key that gives the clear text back is right.
var s2 = open(st, "Mot"); assert.notStrictEqual(M.cipherOf(st.puzzles.mot).indexOf("CHROME"), 0);
assert.strictEqual(M.decipher(st.puzzles.mot, "ENJAMBEUR"), "LE BEURRE FOND, LE CHROME RESTE.");
sys(st, s2, "puzzleTry", { answer: "beurre" }); assert.strictEqual(s2.node, "@enigme");
sys(st, s2, "puzzleTry", { answer: " Enjambeur " }); assert.strictEqual(s2.node, "W");
var s3 = open(st, "Vigenère"); sys(st, s3, "puzzleTry", { answer: "CROÛTE" }); assert.strictEqual(s3.node, "W");
assert.strictEqual(M.decipher(st.puzzles.vig, "croute"), "EMOTIONS VENDUES SEPAREMENT.");
// A free substitution: the reader sets letters one by one; unknown letters stay as dots.
var cl = M.cipherOf(st.puzzles.libre); assert.strictEqual(M.decipher(st.puzzles.libre, {}), "····");
var map = {}; cl.toLowerCase().split("").forEach(function (c, i) { map[c] = "pain"[i]; });
var s4 = open(st, "Libre"); var half = {}; half[cl[0].toLowerCase()] = "p";
sys(st, s4, "puzzleTry", { answer: half }); assert.strictEqual(s4.node, "@enigme");
sys(st, s4, "puzzleTry", { answer: map }); assert.strictEqual(s4.node, "W");
// A document carries the cipher too (the mark is read for the voice and the search as the cipher itself).
assert.strictEqual(M.plainOf(st, fresh(st), st.items.billet.text), "Écrit dessus : OH SDLQ SDVVH..");

// A sequence: wrong answers count tries; the right sequence wins. With once, each symbol is given once.
var s5 = open(st, "Clavier"); assert.deepStrictEqual(M.view(st, s5).puzzle.symbols, ["1", "2", "3"]);
sys(st, s5, "puzzleTry", { answer: ["3", "1"] }); assert.strictEqual(s5.puzzle.wrong, 1);
sys(st, s5, "puzzleTry", { answer: ["3", "1", "3"] }); assert.strictEqual(s5.node, "W");
var s5b = open(st, "Clavier"); sys(st, s5b, "puzzleTry", { answer: ["1"] }); sys(st, s5b, "puzzleTry", { answer: ["2"] }); assert.strictEqual(s5b.node, "L");
var s6 = open(st, "Lettres"); assert(M.view(st, s6).puzzle.once); sys(st, s6, "puzzleTry", { answer: ["B", "E", "U", "R", "R", "E"] }); assert.strictEqual(s6.node, "W");

// Levers: each pull flips the levers it is wired to; the engine says what a pull does, and checks the end state.
var L = st.puzzles.lev, ls = M.leverStart(L); assert.deepStrictEqual(ls.lamp, [0, 0, 0]);
ls = M.leverPress(L, ls, 0); assert.deepStrictEqual(ls.lamp, [1, 1, 0]); ls = M.leverPress(L, ls, 2); assert.deepStrictEqual(ls.lamp, [1, 0, 1]);
var s7 = open(st, "Leviers"); assert.deepStrictEqual(M.view(st, s7).puzzle.levers, ["Gauche", "Milieu", "Droite"]);
sys(st, s7, "puzzleTry", { answer: ls.lamp }); assert.strictEqual(s7.node, "W");
// With lamps: the lever turns, the lamps it is wired to flip.
var LP = st.puzzles.lamp, lp = M.leverPress(LP, M.leverStart(LP), 1); assert.deepStrictEqual(lp, { lev: [0, 1], lamp: [1, 1] });
lp = M.leverPress(LP, lp, 0); assert.deepStrictEqual(lp.lamp, [0, 1]); assert(M.puzzleRight(LP, lp.lamp));

// A grid: the marked cells count, in any order.
var s8 = open(st, "Grille"); assert.strictEqual(M.view(st, s8).puzzle.cols, 3);
sys(st, s8, "puzzleTry", { answer: [7, 4, 2, 0] }); assert.strictEqual(s8.node, "W");
// Wheels with names.
var s9 = open(st, "Table"); assert.deepStrictEqual(M.view(st, s9).puzzle.labels, ["Léa", "Basile"]);
sys(st, s9, "puzzleTry", { answer: ["sud", "nord"] }); assert.strictEqual(s9.node, "W");

// Looking closely: the naked eye, then each thing carried; the loupe tells more and gives its clue the first time.
var sx = fresh(st); assert.deepStrictEqual(M.examineWith(st, sx).map(function (w) { return w.label; }), ["À l'œil nu"]);
assert.strictEqual(M.plainOf(st, sx, st.passages.P.text[0]), "SALLE. Sur la bouteille, une étiquette.");
assert.strictEqual(M.examine(st, sx, "etiquette", null).text, "Une étiquette ordinaire.");
assert.strictEqual(M.examine(st, sx, "etiquette", "loupe"), null, "sans la loupe, pas de regard à la loupe");
pick(st, sx, "Prendre la loupe"); pick(st, sx, "Prendre l'aimant");
assert.deepStrictEqual(M.examineWith(st, sx).map(function (w) { return w.label; }), ["À l'œil nu", "Avec la loupe", "Avec l'aimant"]);
assert.strictEqual(M.examine(st, sx, "etiquette", "aimant").text, "Rien de ce côté.");
assert(!M.view(st, sx).choices.some(function (c) { return c.label === "Suivre la signature" && c.ok !== false; }));
var r1 = M.examine(st, sx, "etiquette", "loupe"); assert(r1.first && /B\. C\./.test(r1.text)); assert(sx.clues.c_loupe, "l'indice de la loupe");
assert(sx.events.some(function (e) { return /🔍 L'étiquette, avec la loupe/.test(e.text); }));
assert(!M.examine(st, sx, "etiquette", "loupe").first, "une fois");
assert(txt(st, sx).indexOf("VU_A_LA_LOUPE") >= 0); pick(st, sx, "Suivre la signature"); assert.strictEqual(sx.node, "W");

// The validator: a key that does not give the text back, levers that cannot reach the answer, an unknown examen,
// a cipher written by hand, a symbol missing from a sequence.
var bad = story();
bad.puzzles.cesar.key = 40; bad.puzzles.mot.cipher = "XYZ";
bad.puzzles.lev.levers = [{ name: "A", flips: [1] }, { name: "B", flips: [0] }]; bad.puzzles.lev.answer = [1, 0];
bad.puzzles.code.answer = ["4"]; bad.passages.P.text.push("{{examen:inconnu|ici}}");
var r2 = V.validate(bad, { games: 5 }).errors.join("\n");
assert(/nombre de 1 à 25/.test(r2), r2); assert(/retirer cipher/.test(r2), r2); assert(/impossible à atteindre/.test(r2), r2);
assert(/« 4 » manque dans symbols/.test(r2), r2); assert(/examen inconnu/.test(r2), r2);
console.log("enigmes-test : OK");
