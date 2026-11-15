// Merges the story base with the night of each of the seven people.
var base = require("./base.js");
["./nuit.js", "./maelle.js", "./maelle_plus.js", "./odon.js", "./odon_plus.js", "./ilde.js", "./ilde_plus.js", "./bastien.js", "./bastien_plus.js", "./jacquette.js", "./jacquette_plus.js", "./corlay.js", "./anselme.js"].forEach(function (f) {
  var ps = require(f);
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
});
module.exports = base;
