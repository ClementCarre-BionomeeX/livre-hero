// Merges the story base with the fever dream (reve.js) and the waking morning (reveil.js).
var base = require("./base.js");
["reve.js", "reveil.js", "etoffe.js", "etoffe2.js"].forEach(function (f) {
  var ps = require("./" + f);
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
});
module.exports = base;
