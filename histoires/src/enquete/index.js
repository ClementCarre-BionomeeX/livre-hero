// Merges the story base with the passages of its three acts (act II is written in three parts: the bridge and the quai
// des Orfèvres, the Tanneurs and the Haute-Ville, the port of the Dyers and the evening bell).
var base = require("./base.js");
[require("./acte1.js"), require("./acte2_a.js").passages, require("./acte2_b.js"), require("./acte2_c.js"), require("./acte3.js")].forEach(function (ps) {
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
});
module.exports = base;
