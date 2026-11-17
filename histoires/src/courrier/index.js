// Assemble « Le Courrier de Vèze » : la base, les deux actes, les résolutions par genre de carte, les scènes des cartes
// et des fils.
var base = require("./base.js");
["acte1.js", "acte2.js", "resolutions.js", "cartes.js"].forEach(function (f) {
  var ps = require("./" + f);
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
});
module.exports = base;
