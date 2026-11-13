// Author tool for the Malvoran lots: node histoires/src/malvoran/verifier-lot.js <lot>   (e.g. p1_bornes)
// Loads base.js + every lot already written, runs the static check, and prints the problems that concern <lot>.
// References to passages of lots not written yet (the seams of BIBLE.md 10.2) are listed apart, not as errors.
"use strict";
var path = require("path"), fs = require("fs");
var ROOT = path.join(__dirname, "..", "..", "..");
var V = require(path.join(ROOT, "src/validateur.js"));
var lot = process.argv[2];
if (!lot) { console.log("usage: node verifier-lot.js <lot>"); process.exit(2); }
process.env.MALVORAN_LOT = lot;
var story = JSON.parse(JSON.stringify(require("./index.js")));
var mine = require("./" + lot + ".js");
var myIds = Object.keys(mine.passages || {});
console.log(lot + " : " + myIds.length + " passages ; histoire entière : " + Object.keys(story.passages).length + " passages");
// Stub the passages that other lots will write, so the check runs.
var missing = {};
function want(id, from) { if (typeof id === "string" && id !== "@ret" && id !== "@route" && id[0] !== "@" && !story.passages[id]) (missing[id] = missing[id] || []).push(from); }
function targets(c, from) {
  [c.to, c.back, c.win && c.win.to, c.lose && c.lose.to].forEach(function (t) { if (Array.isArray(t)) t.forEach(function (x) { want(x.to, from); }); else if (typeof t === "string") want(t, from); });
  if (c.fight) ["win", "lose", "flee", "calm"].forEach(function (o) { if (c.fight[o]) want(c.fight[o].to, from); });
}
Object.keys(story.passages).forEach(function (id) {
  var p = story.passages[id];
  (Array.isArray(p.choices) ? p.choices : []).forEach(function (c) { targets(c, id); });
  if (p.combat) ["win", "lose", "flee", "calm"].forEach(function (o) { if (p.combat[o]) want(p.combat[o].to, id); });
});
Object.keys(story.world.places).forEach(function (k) { want(story.world.places[k].arrive, "lieu " + k); });
story.acts.forEach(function (a) { want(a.start, "acte " + a.act); });
(story.quests || []).forEach(function (q) { if (q.start) want(q.start, "quête " + q.id); });
Object.keys(missing).forEach(function (id) { story.passages[id] = { act: "P", title: "(à écrire)", text: ["…"], choices: [{ label: "…", to: story.start }] }; });
require(path.join(ROOT, "src/moteur.js")).prepare(story);
var rep = V.staticCheck(story);
var mineRe = new RegExp("(§ |« )(" + myIds.map(function (x) { return x.replace(/[$^.*+?()[\]{}|\\]/g, "\\$&"); }).join("|") + ")( |»|$)");
function concerns(e) { return myIds.length && mineRe.test(e); }
var errs = rep.errors.filter(concerns), others = rep.errors.filter(function (e) { return !concerns(e); });
console.log("\nERREURS de ce lot : " + errs.length); errs.forEach(function (e) { console.log("  " + e); });
var warns = rep.warnings.filter(concerns);
console.log("\nremarques de ce lot : " + warns.length); warns.forEach(function (e) { console.log("  " + e); });
console.log("\nautres erreurs (base ou autres lots) : " + others.length); others.slice(0, 30).forEach(function (e) { console.log("  " + e); });
var fromMe = Object.keys(missing).filter(function (id) { return missing[id].some(function (f) { return myIds.indexOf(f) >= 0; }); });
console.log("\npassages visés par ce lot et pas encore écrits (à vérifier contre BIBLE.md 10.2) : " + fromMe.length);
fromMe.forEach(function (id) { console.log("  " + id + " ← " + missing[id].filter(function (f) { return myIds.indexOf(f) >= 0; }).slice(0, 3).join(", ")); });
// Strict reading limited to this lot's passages
try {
  var strict = V.strictCheck(story).filter(function (x) { return x.where && myIds.indexOf(String(x.where).split(/[ :]/)[0]) >= 0 || concerns(JSON.stringify(x)); });
  console.log("\nlecture stricte (ce lot) : " + strict.length); strict.slice(0, 60).forEach(function (x) { console.log("  " + JSON.stringify(x).slice(0, 220)); });
} catch (e) { console.log("lecture stricte impossible : " + e.message); }
