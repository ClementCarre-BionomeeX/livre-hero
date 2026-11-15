"use strict";
// Checks « Le monde de ce livre » (8.6): the validator accepts pages and names, refuses a page without title or text
// and a name without its sentence; the hero's sheet (usesOf) ignores the words of the world.
// Usage: node tests/monde-test.js
var M = require("../src/moteur.js"), V = require("../src/validateur.js"), assert = require("assert");
function story() {
  return {
    id: "monde", title: "Monde", start: "P", acts: [{ id: "I", title: "I", levels: [1, 1], start: "P" }],
    lore: {
      pages: [{ title: "Le pays", text: ["On y paie en sous de cuivre.", "Le duc gouverne depuis Ostre."] }],
      names: { "Ostre": "La ville du duc, sur le fleuve.", "la Saint-Givre|Saint-Givre": "La fête du premier gel, combat de boules de neige compris." },
    },
    passages: {
      P: { title: "P", text: ["Tu arrives à Ostre."], choices: [{ label: "Finir", to: "F" }] },
      F: { title: "F", text: ["Fin."], end: true },
    },
  };
}
function errs(edit) { var x = story(); edit(x); return V.staticCheck(M.prepare(x) || x).errors.join("\n"); }
assert.strictEqual(errs(function () {}), "", "un monde bien écrit passe");
assert(/Le monde, page 1/.test(errs(function (x) { x.lore.pages[0].title = ""; })), "page sans titre refusée");
assert(/Le monde, page 1/.test(errs(function (x) { delete x.lore.pages[0].text; })), "page sans texte refusée");
assert(/doit être une liste/.test(errs(function (x) { x.lore.pages = { a: 1 }; })), "pages hors liste refusées");
assert(/nom « Ostre »/.test(errs(function (x) { x.lore.names.Ostre = ""; })), "nom sans phrase refusé");
// "combat" in the words of the world does not give the hero hit points.
var st = story(); st.lore.names.Ostre = "Ville du \"combat\":{ ancien }"; st.lore.pages[0].text.push("\"gold\": 3");
var u = M.usesOf ? M.usesOf(st) : null;
if (u) { assert.strictEqual(u.combat, false); assert.strictEqual(u.gold, false); }
console.log("monde-test : OK");
