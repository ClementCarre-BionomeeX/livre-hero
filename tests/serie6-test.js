"use strict";
// 6th series (Clément, 13/11): the tavern game, pressing scenes, regards and mysteries the story solves.
// Usage: node tests/serie6-test.js
var M = require("../src/moteur.js"), assert = require("assert");
var st = {
  id: "s6", title: "Série 6", start: "A", acts: [{ id: "I", title: "I", levels: [1, 3], start: "A" }],
  world: { start: { gold: 10 } },
  people: { berthe: { name: "Berthe" } },
  mysteries: { Q: { title: "Qui ?", act: "I", answer: { person: "berthe", text: "Berthe." }, solved: "su" } },
  clues: { q1: { rev: "Q", text: "Un indice." } },
  passages: {
    A: { act: "I", title: "L'auberge", taverne: { mise: 2, adversaire: "un roulier" }, text: ["Auberge."], choices: [{ label: "Sortir", fx: { meet: "berthe", regard: { berthe: "mefiant" } }, to: "B" }] },
    B: { act: "I", title: "Vite", urgent: 15, text: ["Vite !"], choices: [{ label: "Sauter", to: "C" }, { label: "Rester figé", timeout: true, to: "C", fx: { flag: "su" } }] },
    C: { act: "I", title: "Fin", end: true, text: ["Fin."] },
  },
};
var s = M.freshState(st, { ironman: true }); s.name = "T"; s.arch = "voleur"; M.start(st, s);
assert.strictEqual(s.ironman, true, "sans retour gardé dans l'état");
var v = M.view(st, s), sit = v.choices.filter(function (c) { return c.sys === "jeu"; })[0];
assert(sit && sit.ok, "la table de Chandelle est proposée");
var seq = [0.99, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5], i = 0;   // their stop at 19, then 4s
M.setRng(function () { return seq[i++ % seq.length]; });
var g0 = s.gold; M.choose(st, s, sit);
assert.strictEqual(s.node, "@jeu"); assert.strictEqual(s.gold, g0 - 2, "la mise quitte la bourse");
var games = 1;
for (var guard = 0; guard < 50; guard++) {
  v = M.view(st, s);
  var roll = v.choices.filter(function (c) { return c.sys === "jeuRoll"; })[0], stop = v.choices.filter(function (c) { return c.sys === "jeuStop"; })[0];
  if (roll && s.jeu.me <= s.jeu.them) { M.choose(st, s, roll); continue; }
  if (stop) { M.choose(st, s, stop); continue; }
  var again = v.choices.filter(function (c) { return c.sys === "jeuAgain"; })[0];
  if (again && again.ok) { M.choose(st, s, again); games++; continue; }
  break;
}
assert.strictEqual(games, M.TAVERN_GAMES_PER_DAY, "trois parties par jour, pas plus");
v = M.view(st, s);
assert(!v.choices.filter(function (c) { return c.sys === "jeuAgain"; })[0].ok, "la quatrième est refusée");
M.choose(st, s, v.choices.filter(function (c) { return c.sys === "jeuLeave"; })[0]);
assert.strictEqual(s.node, "A", "on revient à l'auberge");
assert(!M.view(st, s).choices.filter(function (c) { return c.sys === "jeu"; })[0].ok, "la table reste fermée ce jour");
M.setRng(null);
M.choose(st, s, M.view(st, s).choices.filter(function (c) { return c.label === "Sortir"; })[0]);
assert.strictEqual(s.regard.berthe, "mefiant", "le regard est noté");
assert(!s.events.some(function (e) { return /méfian/i.test(e.text); }), "rien n'est dit sur la page");
v = M.view(st, s);
assert(v.urgent && v.urgent.sec === 15 && v.urgent.label === "Rester figé", "scène pressante, choix par défaut marqué");
assert(!M.mysterySolved(st, s, "Q"));
M.choose(st, s, v.choices.filter(function (c) { return c.label === "Rester figé"; })[0]);
assert(M.mysterySolved(st, s, "Q"), "le mystère est résolu par son drapeau");
console.log("serie6-test : OK");
