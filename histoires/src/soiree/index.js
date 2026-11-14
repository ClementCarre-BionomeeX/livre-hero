// Merges the story base with the passages of its three acts.
var base = require("./base.js");
["acte1.js", "acte2.js", "acte3.js"].forEach(function (f) {
  var ps = require("./" + f);
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
});
module.exports = base;
