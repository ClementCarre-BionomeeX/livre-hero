"use strict";
// Checks the engine of « En mer » (8.1) on a small story: the sky drawn by region and season (and forced by a scene,
// read by the tag `temps`, weighing on the rolls), the seasons, the fatigue of the watches, wounds that close and leave a
// scar on the face, encounters by region, season and sky, things put together at the workbench, vigils at night, a
// chart that reveals places.
// Usage: node tests/mer-test.js
var M = require("../src/moteur.js"), V = require("../src/validateur.js"), assert = require("assert");
function story() {
  return {
    id: "mr", title: "Mer", start: "P", acts: [{ id: "I", title: "I", levels: [1, 1], start: "P" }],
    world: { start: { place: "pont", hour: 8, gold: 100 }, places: { pont: { name: "Le pont", arrive: "P" }, cale: { name: "La cale", arrive: "C" }, ile: { name: "L'île", arrive: "P" } } },
    seasons: [{ id: "ete", name: "Fin d'été" }, { id: "equinoxe", name: "Équinoxe", from: { day: 2, hour: 0 } }],
    weather: { by: "mer", every: 6, start: "brise",
      kinds: { brise: { name: "Bonne brise" }, brume: { name: "Brume", mod: { discretion: 20 }, say: "LA_BRUME" }, tempete: { name: "Tempête", mod: { nature: -30 }, say: "LA_TEMPETE" } },
      regions: { large: { brume: 1 }, port: {} }, seasons: { equinoxe: { tempete: 1000 } } },
    wounds: { cotes: { name: "Côtes fêlées", mod: { combat: -10 }, days: 4, tended: 2, scar: "une ligne pâle", mark: "cicatrice" }, bleu: { name: "Un bleu", days: 1 } },
    encounters: { by: "mer", every: 6, chance: 1, list: [{ to: "E_dauphins", region: "large", saison: "ete" }, { to: "E_feu", region: "large", saison: "equinoxe", temps: "tempete" }] },
    recipes: { lanterne: { make: "sourde", of: ["lanterne", "drap"], label: "une lanterne sourde", say: "TU_ASSEMBLES" } },
    vigils: [{ to: "V_oriane", with: "oriane" }],
    companions: { oriane: { name: "Oriane", f: true, bonus: { combat: 20 }, pv: 10 } },
    items: { lanterne: { name: "Lanterne", price: 5 }, drap: { name: "Drap noir", price: 2 }, sourde: { name: "Lanterne sourde", bonus: { discretion: 10 } },
      carte: { name: "Carte des Brumes", price: 10, reveals: ["ile"] } },
    shops: { s: { sells: [{ item: "carte", price: 10 }, { item: "lanterne", price: 5 }] } },
    passages: {
      P: { act: "I", title: "Le pont", place: "pont", hub: true, veillee: true, shop: "s", text: ["PONT", { temps: "brume", text: "DANS_LA_BRUME" }, { temps: "tempete", text: "SOUS_LA_TEMPETE" }, { cicatrice: "cotes", text: "TA_CICATRICE" }, { blessure: "cotes", text: "TU_AS_MAL" }],
        choices: [{ label: "Prendre le large", hide: { is: { mer: "large" } }, fx: { set: { mer: "large" } }, to: "P" }, { label: "Attendre", takes: 6, to: "P" },
          { label: "Quart de nuit", fx: { fatigue: 1 }, to: "P" }, { label: "Dormir", fx: { rest: true }, to: "P" }, { label: "Tomber", fx: { blessure: "cotes" }, to: "P" },
          { label: "Panser", fx: { soigner: "cotes" }, to: "P" }, { label: "Tempête", fx: { meteo: "tempete" }, to: "P" }, { label: "Oriane", fx: { join: "oriane" }, to: "P" },
          { label: "Drap", fx: { item: "drap" }, to: "P" }, { label: "Descendre", to: "C" }, { label: "Accoster", to: "F" }] },
      F: { act: "I", title: "L'île", end: true, text: ["FIN"] },
      C: { act: "I", title: "La cale", place: "cale", atelier: true, text: ["CALE"], choices: [{ back: "P" }] },
      E_dauphins: { act: "I", title: "Dauphins", back: true, text: ["DAUPHINS"] },
      E_feu: { act: "I", title: "Feu", back: true, text: ["FEU"] },
      V_oriane: { act: "I", title: "Veillée", with: "oriane", back: true, text: ["VEILLEE"], fx: { conf: { oriane: 5 } } },
    },
  };
}
function fresh(st) { M.setRng(function () { return 0.01; }); var s = M.freshState(st); s.name = "A"; s.arch = "guerrier"; M.start(st, s); return s; }
function txt(st, s) { return M.view(st, s).text.join("|"); }
function pick(st, s, l) { var c = M.view(st, s).choices.filter(function (x) { return x.label.indexOf(l) === 0; })[0]; assert(c, "choix « " + l + " » absent : " + M.view(st, s).choices.map(function (x) { return x.label; }).join(" / ")); M.choose(st, s, c); return c; }

var st = story(), s = fresh(st);
// The validator knows the new keys.
var rep = V.validate(JSON.parse(JSON.stringify(story())), { games: 40 });
assert.deepStrictEqual(rep.errors, [], rep.errors.join("\n"));
// Sky: the start, then the region's table every 6 hours.
assert.strictEqual(M.weatherOf(st, s), "brise");
assert(M.view(st, s).text.join("|").indexOf("DANS_LA_BRUME") < 0);
pick(st, s, "Prendre le large");
var b0 = M.bonus(st, s, "discretion");
pick(st, s, "Attendre");
// The encounter of the region and season comes first, then the scene ends on the way back.
assert.strictEqual(s.node, "E_dauphins", "rencontre attendue, page " + s.node);
assert(M.view(st, s).choices.some(function (c) { return /Revenir/.test(c.label); }));
pick(st, s, "Revenir");
assert.strictEqual(M.weatherOf(st, s), "brume");
assert(txt(st, s).indexOf("DANS_LA_BRUME") >= 0);
assert.strictEqual(M.bonus(st, s, "discretion"), b0 + 20, "la brume aide la discrétion");
// The season turns on day 2; the storm comes with it.
s.time = 24 + 7; M.tick(st, s);
assert.strictEqual(M.seasonOf(st, s).id, "equinoxe");
assert.strictEqual(M.weatherOf(st, s), "tempete");
// Forced by a scene and held.
var s2 = fresh(story()); pick(st, s2, "Tempête"); assert.strictEqual(M.weatherOf(st, s2), "tempete"); assert(s2.events.some(function (e) { return e.text === "LA_TEMPETE"; }));
// Fatigue: up to the cap, cleared by sleep.
var s3 = fresh(story()); for (var i = 0; i < 7; i++) pick(st, s3, "Quart de nuit");
assert.strictEqual(s3.fatigue, M.FATIGUE_MAX); pick(st, s3, "Dormir"); assert.strictEqual(s3.fatigue, 0);
// A wound: weighs on combat, is dressed, closes, leaves a scar on the face.
var s4 = fresh(story()), c0 = M.bonus(st, s4, "combat");
pick(st, s4, "Tomber"); assert.strictEqual(M.bonus(st, s4, "combat"), c0 - 10); assert(txt(st, s4).indexOf("TU_AS_MAL") >= 0);
pick(st, s4, "Panser"); s4.time += 24 * 2; M.tick(st, s4);
assert.deepStrictEqual(M.woundsOpen(st, s4), []); assert.strictEqual(M.bonus(st, s4, "combat"), c0);
assert(s4.face && s4.face.marks.indexOf("cicatrice") >= 0); assert(txt(st, s4).indexOf("TA_CICATRICE") >= 0 && txt(st, s4).indexOf("TU_AS_MAL") < 0);
// A chart reveals a place; things put together at the workbench, greyed until all parts are there.
var s5 = fresh(story());
var buy = M.view(st, s5).choices.filter(function (c) { return c.sys === "buy" && c.item === "carte"; })[0]; M.choose(st, s5, buy); assert(s5.known.ile);
M.choose(st, s5, M.view(st, s5).choices.filter(function (c) { return c.sys === "buy" && c.item === "lanterne"; })[0]);
pick(st, s5, "Descendre");
var cr = M.view(st, s5).choices.filter(function (c) { return c.sys === "craft"; })[0]; assert(cr && cr.ok === false && /Drap noir/.test(cr.why));
pick(st, s5, "Revenir"); pick(st, s5, "Drap"); pick(st, s5, "Descendre");
cr = M.view(st, s5).choices.filter(function (c) { return c.sys === "craft"; })[0]; assert(cr.ok); M.choose(st, s5, cr);
assert(s5.items.indexOf("sourde") >= 0 && s5.items.indexOf("lanterne") < 0 && s5.flags["fait:lanterne"]);
assert(!M.view(st, s5).choices.some(function (c) { return c.sys === "craft"; }));
// A vigil: at night only, with the companion there, once.
var s6 = fresh(story()); pick(st, s6, "Oriane");
assert(!M.view(st, s6).choices.some(function (c) { return c.sys === "vigil"; }), "pas de veillée le jour");
s6.time = 22; var vg = M.view(st, s6).choices.filter(function (c) { return c.sys === "vigil"; })[0]; assert(vg && /Oriane/.test(vg.label));
M.choose(st, s6, vg); assert.strictEqual(s6.node, "V_oriane");
pick(st, s6, "Revenir"); assert(!M.view(st, s6).choices.some(function (c) { return c.sys === "vigil"; }));
console.log("mer-test : OK");
