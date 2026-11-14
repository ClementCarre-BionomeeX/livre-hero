// Merges the story base with the crossroads, the crew, the three acts, the encounters at sea and the epilogue.
var base = require("./base.js");
var gens = require("./gens.js");
var acte3 = require("./acte3.js");
base.passages = base.passages || {};
[require("./hubs.js").passages, gens.passages, require("./acte1.js"), require("./acte2.js"), require("./rencontres.js"), acte3.passages].forEach(function (ps) {
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
});
base.rumors = gens.rumors;
base.epilogue = acte3.epilogue;
module.exports = base;
