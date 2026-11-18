// Merges the story base with its passages: act I (Ruines, Octave), the carrefours, acts II and III of both heroes,
// the sunset and its dénouements, and the fates.
var base = require("./base.js");
var fs = require("fs"), path = require("path");
var parts = ["acte1_ruines", "acte1_octave", "carrefours", "acte2_ruines", "acte2_octave", "acte3_ruines", "acte3_octave", "fins"];
base.passages = {};
parts.forEach(function (p) {
  var m = require("./" + p + ".js");
  Object.keys(m).forEach(function (k) { if (base.passages[k]) throw new Error("croute: passage en double " + k); });
  Object.assign(base.passages, m);
});
var D = require("./destins.js"); base.fates = D.fates; base.epilogue = D.epilogue; base.endings = D.endings;
base.epilogueTitle = "Ce qu'il advint";
module.exports = base;
