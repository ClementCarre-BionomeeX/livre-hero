// Merges the story base with its cards and trials, the five crossroads, the chapters of Basile, Salée and the
// Enjambeur, the ten trials and their issues, dawn and the dénouements, and the fates.
var base = require("./base.js");
var fs = require("fs"), path = require("path");
var C = require("./cartes.js");
base.cartes = C.cartes;
base.epreuves = C.epreuves;
var parts = ["carrefours", "basile", "salee", "ange", "epreuves", "fins"];
base.passages = {};
parts.forEach(function (p) {
  if (!fs.existsSync(path.join(__dirname, p + ".js"))) return;
  var m = require("./" + p + ".js");
  Object.keys(m).forEach(function (k) { if (base.passages[k]) throw new Error("raccordement : passage en double " + k); });
  Object.assign(base.passages, m);
});
var D = require("./destins.js"); base.fates = D.fates; base.epilogue = D.epilogue; base.endings = D.endings;
base.epilogueTitle = "Ce qu'il advint";
module.exports = base;
