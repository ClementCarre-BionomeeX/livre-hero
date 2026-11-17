// Merges the story base with the passages of the morning (first reading) and of the night before (second reading).
var base = require("./base.js");
["matin.js", "nuit.js", "etoffe.js"].forEach(function (f) {
  var ps = require("./" + f);
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
});
module.exports = base;
