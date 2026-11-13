// Merges the story base with the passages of each act.
var base = require("./base.js");
["acte1_a.js", "acte1_b.js", "acte2_a.js", "acte2_b.js", "acte3.js", "evenements.js"].forEach(function (f) {
  var ps; try { ps = require("./" + f); } catch (e) { if (e.code === "MODULE_NOT_FOUND" && e.message.indexOf(f) >= 0) return; throw e; }
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
});
module.exports = base;
