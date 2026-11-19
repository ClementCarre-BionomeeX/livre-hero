// Merges the story base with the house and the woods, the counter's clients, the three acts, Ortie's evenings and
// mischief, and the endings with their epilogue and fates.
var base = require("./base.js");
var ortie = require("./ortie.js");
var fins = require("./fins.js");
base.passages = base.passages || {};
[require("./maison.js").passages, require("./clients.js"), require("./acte1.js"), ortie.passages, require("./acte2.js"), require("./acte3.js"), fins.passages].forEach(function (ps) {
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
});
base.vigils = ortie.vigils;
base.encounters = ortie.encounters;
base.epilogue = fins.epilogue;
base.fates = fins.fates;
module.exports = base;
