// Merges the story base with its passages: the three crossroads, the chapters of Barnabé and Ernestine for each day,
// the confessions (secrets), midnight and its dénouements, and the fates.
var base = require("./base.js");
var fs = require("fs"), path = require("path");
var parts = ["carrefours", "acte1_barnabe", "acte1_ernestine", "acte2_barnabe", "acte2_ernestine", "acte3_barnabe", "acte3_ernestine", "aveux", "minuit"];
base.passages = {};
parts.forEach(function (p) {
  if (!fs.existsSync(path.join(__dirname, p + ".js"))) return;
  var m = require("./" + p + ".js");
  Object.keys(m).forEach(function (k) { if (base.passages[k]) throw new Error("retraite : passage en double " + k); });
  Object.assign(base.passages, m);
});
if (fs.existsSync(path.join(__dirname, "destins.js"))) { var D = require("./destins.js"); base.fates = D.fates; base.epilogue = D.epilogue; base.endings = D.endings; }
base.epilogueTitle = "Ce qu'il advint";
module.exports = base;
