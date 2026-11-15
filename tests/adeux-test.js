"use strict";
// Checks the engine of « À deux » (8.4) on a small story, then on « Le Pli de Brumefond »: secrets held, overheard and
// told on an aparte, the confession that reaches the other player at the next rendezvous, interludes told from another
// point of view at the start of an act (a different one for each role, the clock still, back to the hero), the text
// agreed with the other player's hero ({autre:e}, {autre:il}), and the validator's checks.
// Usage: node tests/adeux-test.js
var M = require("../src/moteur.js"), MU = require("../src/multi.js"), V = require("../src/validateur.js"), assert = require("assert");
function story() {
  return {
    id: "ad", title: "À deux", start: "P", multi: { min: 2, max: 2 },
    acts: [{ id: "I", title: "I", levels: [1, 1], start: "P" }, { id: "II", title: "II", levels: [1, 1], start: "Q" }],
    world: { start: { place: "salle", hour: 8, gold: 0 }, places: { salle: { name: "La salle", arrive: "P" } } },
    people: { hesme: { name: "Dame Hesmé", f: true } },
    secrets: {
      s_a: { title: "SECRET_A", text: "Le secret de A.", aveu: "AV_A" },
      s_b: { title: "SECRET_B", text: "Le secret de B.", aveu: "AV_B" },
    },
    interludes: [{ act: "II", to: "I_A", if: { has: "role:a" } }, { act: "II", to: "I_B", if: { has: "role:b" } }],
    passages: {
      P: { act: "I", title: "Le choix", place: "salle", text: ["{autre} est arrivé{autre:e}. {autre:Il} attend."],
        choices: [{ label: "Être A", role: "qui", option: "a", fx: { flag: "role:a", secret: "s_a" }, to: "N" }, { label: "Être B", role: "qui", option: "b", fx: { flag: "role:b", secret: "s_b" }, to: "N" }] },
      N: { act: "I", title: "La nuit", place: "salle", aparte: true, text: ["NUIT"], choices: [{ label: "Dormir", takes: "morning", to: "Q" }] },
      AV_A: { title: "Aveu A", back: true, text: ["AVEU_A"] },
      AV_B: { title: "Aveu B", back: true, text: ["AVEU_B"] },
      I_A: { title: "Ailleurs", interlude: { who: "hesme", where: "Vérenne" }, back: true, text: ["INTERLUDE_A"] },
      I_B: { title: "Ailleurs", interlude: "Le chancelier", back: true, text: ["INTERLUDE_B"] },
      Q: { act: "II", title: "Le matin", place: "salle", text: ["MATIN", { if: { confie: "s_b" }, text: "B_A_PARLE" }],
        choices: [{ label: "Finir", to: "F" }] },
      F: { act: "II", title: "Fin", end: true, text: ["FIN"] },
    },
  };
}
var st = story(); M.prepare(st);
function pick(v, label) { var c = v.choices.filter(function (x) { return x.label.indexOf(label) === 0; })[0]; assert.ok(c, "choix « " + label + " » absent : " + v.choices.map(function (x) { return x.label; }).join(" | ")); return c; }
function texts(v) { return v.text.join("\n"); }

// ---- the static checks
var rep = V.staticCheck(JSON.parse(JSON.stringify(st)));
assert.deepStrictEqual(rep.errors, [], rep.errors.join("\n"));
var bad = JSON.parse(JSON.stringify(st));
bad.secrets.s_a.aveu = "NULLE_PART"; bad.interludes.push({ act: "I", to: "I_A" }); bad.passages.I_A.act = "II"; bad.passages.N.choices[0].fx = { confier: "s_z" };
var errs = V.staticCheck(bad).errors.join("\n");
assert.ok(/Secret « s_a » : aveu, passage « NULLE_PART » inconnu/.test(errs), errs);
assert.ok(/le premier acte n'a pas d'entrée d'acte/.test(errs), errs);
assert.ok(/un interlude n'est ni un carrefour/.test(errs), errs);
assert.ok(/secret « s_z » inconnu/.test(errs), errs);
console.log("contrôles statiques : ok");

// ---- two players: roles, the other's agreement, secrets, aparte, rendezvous, interludes
function mk(name, fem) { var s = M.freshState(st); s.name = name; s.fem = fem; s.arch = "guerrier"; M.start(st, s); return s; }
var g = MU.create(st, [{ id: "a", name: "Léo", s: mk("Léo", false) }, { id: "b", name: "Mila", s: mk("Mila", true) }]);
MU.refreshWaits(st, g);
assert.ok(/Mila est arrivée\. Elle attend\./.test(texts(MU.view(st, g, "a"))), texts(MU.view(st, g, "a")));
assert.ok(/Léo est arrivé\. Il attend\./.test(texts(MU.view(st, g, "b"))));
console.log("accord avec le héros de l'autre joueur : ok");

MU.choose(st, g, "a", pick(MU.view(st, g, "a"), "Être A"));
assert.strictEqual(MU.view(st, g, "b").choices[0].ok, false);   // the role is taken
MU.choose(st, g, "b", pick(MU.view(st, g, "b"), "Être B"));
var A = MU.player(g, "a"), B = MU.player(g, "b");
assert.strictEqual(M.secretsOf(st, A.s)[0].how, "own");
// on the aparte, each one may tell their own secret, and only theirs
var vb = MU.view(st, g, "b");
assert.ok(pick(vb, "Lui dire : SECRET_B"));
assert.ok(!vb.choices.some(function (c) { return /SECRET_A/.test(c.label); }));
MU.choose(st, g, "b", pick(vb, "Lui dire : SECRET_B"));
assert.strictEqual(B.s.node, "AV_B");
var back = MU.view(st, g, "b").choices.filter(function (c) { return c.auto === "back"; })[0];
assert.ok(back && back.label === "Revenir : La nuit", JSON.stringify(back));
MU.choose(st, g, "b", back);
assert.ok(!MU.view(st, g, "b").choices.some(function (c) { return /SECRET_B/.test(c.label); }), "un secret dit ne se redit pas");
assert.ok(!M.secretKnown(A.s, "s_b"), "A ne le sait pas avant le rendez-vous");
console.log("secrets et aparté : ok");

// A sleeps: entering act II, the interlude of A's role comes first, the clock still, then back to the act's first page
var t0 = A.s.time;
MU.choose(st, g, "a", pick(MU.view(st, g, "a"), "Dormir"));
assert.strictEqual(A.s.node, "I_A");
var va = MU.view(st, g, "a");
assert.ok(va.interlude && va.interlude.who === "Dame Hesmé" && va.interlude.where === "Vérenne", JSON.stringify(va.interlude));
assert.ok(!va.wait, "on lit l'interlude sans attendre l'autre");
assert.strictEqual(A.s.lastAct, "I");
var tIn = A.s.time;
MU.choose(st, g, "a", pick(va, "Revenir à Léo"));
assert.strictEqual(A.s.node, "Q"); assert.strictEqual(A.s.lastAct, "II"); assert.strictEqual(A.s.time, tIn);
assert.ok(MU.view(st, g, "a").wait, "A attend B au début de l'acte II");
MU.choose(st, g, "b", pick(MU.view(st, g, "b"), "Dormir"));
assert.strictEqual(B.s.node, "I_B");
assert.strictEqual(MU.view(st, g, "b").interlude.who, "Le chancelier");
MU.choose(st, g, "b", pick(MU.view(st, g, "b"), "Revenir à Mila"));
assert.ok(MU.allWaiting(g));
MU.sync(st, g);
assert.ok(M.secretKnown(A.s, "s_b"), "le secret de B arrive chez A au rendez-vous");
assert.ok(A.s.events.some(function (e) { return /Mila t'a confié : SECRET_B/.test(e.text); }), JSON.stringify(A.s.events));
assert.ok(/B_A_PARLE/.test(texts(MU.view(st, g, "a"))));
assert.deepStrictEqual(M.secretsOf(st, A.s).map(function (x) { return x.id + ":" + x.how; }).sort(), ["s_a:own", "s_b:confie"]);
assert.ok(t0 <= tIn);
console.log("interludes et rendez-vous : ok");

// ---- the story itself
var pli = require("../histoires/src/adeux/index.js");
var r = V.staticCheck(JSON.parse(JSON.stringify(pli)));
assert.deepStrictEqual(r.errors, [], r.errors.join("\n"));
Object.keys(pli.secrets).forEach(function (k) { assert.ok(pli.passages[pli.secrets[k].aveu], k); });
console.log("Le Pli de Brumefond : " + Object.keys(pli.passages).length + " passages, " + Object.keys(pli.secrets).length + " secrets, " + pli.interludes.length + " interludes");
console.log("adeux-test : OK");
