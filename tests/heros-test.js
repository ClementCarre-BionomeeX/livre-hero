"use strict";
// Checks the multi-hero layer (several playable heroes, souvenirs, teams) on a tiny story, then that the validator
// plays it to the end. Usage: node tests/heros-test.js
var M = require("../src/moteur.js"), V = require("../src/validateur.js"), assert = require("assert");
function story() {
  return {
    id: "t", title: "Test héros", start: "A", leadStart: "enfant",
    acts: [{ id: "I", title: "I", levels: [1, 3], start: "A" }],
    companions: {
      enfant: { name: "L'enfant", bonus: {} }, ysolde: { name: "Ysolde", bonus: {} }, hylas: { name: "Hylas", bonus: {} },
      givre: { name: "Givre", pv: 2, def: 10, bonus: { combat: 20 } },
    },
    heroes: {
      enfant: { player: true, souvenirs: { mere: { label: "Le visage de ta mère" }, chanson: { label: "La chanson" } } },
      ysolde: { name: "Ysolde de Brenne", arch: "guerrier", items: ["epee"], souvenirs: { pont: { label: "Le pont de Lisse" } } },
      hylas: { name: "Maître Hylas", arch: "mage", level: 2 },
    },
    teams: { nord: { name: "l'équipe du Nord", start: "N1" }, sud: { name: "l'équipe du Sud", start: "S1" } },
    items: { epee: { name: "Épée", kind: "arme", dmg: 6 } },
    enemies: { loup: { name: "Loup", pv: 8, att: 20, def: 10, dmg: 3 } },
    passages: {
      A: { act: "I", title: "Départ", text: ["Tu pars.", { if: { souv: "mere" }, text: "Tu revois ta mère.", else: "Une femme que tu ne connais pas." }],
        choices: [{ label: "Ysolde et Hylas te rejoignent", fx: { join: ["ysolde", "hylas", "givre"] }, to: "H" }] },
      H: { act: "I", title: "Carrefour", hub: true, text: ["Le carrefour."],
        choices: [
          { label: "Donner le visage de ta mère", hide: { not: { souv: "enfant:mere" } }, if: { lead: "enfant" }, fx: { souv: "enfant:mere" }, to: "H" },
          { label: "Se battre", fight: { title: "Loup", enemies: ["loup"], win: { to: "H2" }, lose: { to: "H2" } } },
        ] },
      H2: { act: "I", title: "Séparation", text: ["On se sépare."],
        choices: [{ label: "Ysolde au Nord, Hylas et toi au Sud", fx: { assign: { ysolde: "nord", enfant: "sud", hylas: "sud", givre: "nord" }, team: "nord" }, to: "@team" }] },
      N1: { act: "I", title: "Nord", text: [{ if: { lead: "ysolde" }, text: "Ysolde mène.", else: "Erreur." }],
        choices: [{ label: "Passer au Sud", fx: { team: "sud" }, to: "@team" }] },
      S1: { act: "I", title: "Sud", text: ["Le Sud."], choices: [{ label: "Retour au Nord", fx: { team: "nord" }, to: "@team" }, { label: "Se retrouver", if: { seen: "N1" }, fx: { regroup: true }, to: "F" }] },
      F: { act: "I", title: "Fin", end: true, text: [{ if: { souvenirs: "enfant", max: 1 }, text: "Tu as donné.", else: "Tu as tout gardé." }] },
    },
  };
}
var st = story(), s = M.freshState(st); s.name = "Aube"; s.arch = "voleur";
var x = 7; M.setRng(function () { x = (x * 1103515245 + 12345) % 2147483648; return x / 2147483648; });
M.start(st, s);
assert.strictEqual(s.lead, "enfant"); assert.strictEqual(s.name, "Aube"); assert.ok(s.heroes.ysolde.items.indexOf("epee") >= 0);
assert.strictEqual(M.heroLevel(s, "hylas"), 2);
M.choose(st, s, M.view(st, s).choices[0]);
var v = M.view(st, s), lead = v.choices.filter(function (c) { return c.sys === "lead"; });
assert.strictEqual(lead.length, 2, "deux héros à mener");
M.choose(st, s, v.choices.filter(function (c) { return c.label.indexOf("Donner") === 0; })[0]);
assert.ok(!M.souvKept(st, s, "enfant", "mere"));
M.choose(st, s, lead[0]); assert.strictEqual(s.lead, "ysolde"); assert.strictEqual(s.name, "Ysolde de Brenne"); assert.ok(s.heroes.enfant);
assert.ok(M.present(s, "enfant") && M.present(s, "ysolde"));
M.choose(st, s, M.view(st, s).choices.filter(function (c) { return c.fight; })[0]);
assert.strictEqual(s.node, "@combat");
var pv = M.partyView(st, s); assert.ok(pv.some(function (m) { return m.who === "enfant"; }), "l'enfant combat à côté");
var guard = 0; while (s.node === "@combat" && guard++ < 200) M.choose(st, s, M.view(st, s).choices.filter(function (c) { return c.sys === "attack"; })[0] || M.view(st, s).choices.filter(function (c) { return c.ok; })[0]);
assert.strictEqual(s.node, "H2");
M.choose(st, s, M.view(st, s).choices[0]);
assert.strictEqual(s.node, "N1"); assert.strictEqual(s.lead, "ysolde"); assert.ok(!M.present(s, "hylas"));
M.choose(st, s, M.view(st, s).choices[0]);
assert.strictEqual(s.node, "S1"); assert.ok(s.lead === "enfant" || s.lead === "hylas"); assert.ok(!M.present(s, "ysolde"));
M.choose(st, s, M.view(st, s).choices.filter(function (c) { return c.label === "Retour au Nord"; })[0]);
assert.strictEqual(s.node, "N1", "le Nord reprend où il s'était arrêté");
M.choose(st, s, M.view(st, s).choices[0]);
M.choose(st, s, M.view(st, s).choices.filter(function (c) { return c.label === "Se retrouver"; })[0]);
assert.ok(M.present(s, "ysolde") && M.present(s, "hylas") && M.present(s, "givre"));
assert.deepStrictEqual(M.view(st, s).text, ["Tu as donné."]);
M.setRng(null);
var rep = V.validate(story(), { games: 400 });
rep.errors.forEach(function (e) { console.log("ERREUR " + e); });
assert.strictEqual(rep.errors.length, 0);
console.log("héros jouables : ok (" + rep.sim.games + " parties, fins " + JSON.stringify(rep.sim.endings) + ")");
