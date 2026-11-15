// Merges the story base with its passages: act I (Sévan, Jasse, Oriane), act II and act III (carrefours and the three
// books of each), the night, the dénouements, and the fates (8.8).
var base = require("./base.js");
var fs = require("fs"), path = require("path");
var parts = ["acte1_sevan", "acte1_jasse", "acte1_oriane", "acte2_carrefour", "acte2_sevan", "acte2_jasse", "acte2_oriane",
  "acte3_carrefour", "acte3_sevan", "acte3_jasse", "acte3_oriane", "minuit", "fins"];
base.passages = {};
parts.forEach(function (p) { if (fs.existsSync(path.join(__dirname, p + ".js"))) Object.assign(base.passages, require("./" + p + ".js")); });
if (fs.existsSync(path.join(__dirname, "destins.js"))) { var D = require("./destins.js"); base.fates = D.fates; base.epilogue = D.epilogue; base.endings = D.endings; }
// Who is who (aspect, qui, aka): on people and on the heroes' companion entries.
if (fs.existsSync(path.join(__dirname, "aspects.js"))) { var A = require("./aspects.js"); Object.keys(A).forEach(function (id) { var t = (base.people || {})[id] || (base.companions || {})[id]; if (t) Object.assign(t, A[id]); }); }
base.epilogueTitle = "Ce qu'il advint";
module.exports = base;
