// Merges the story base with the night of each of the seven people.
var base = require("./base.js");
["./nuit.js", "./maelle.js", "./odon.js", "./ilde.js", "./bastien.js", "./jacquette.js", "./corlay.js", "./anselme.js"].forEach(function (f) {
  var ps = require(f);
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
});
module.exports = base;
