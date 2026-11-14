// Merges the story base with the crossroads, the people of Sarance, the three acts and the epilogue.
var base = require("./base.js");
var acte3 = require("./acte3.js");
[require("./hubs.js").passages, require("./gens.js"), require("./acte1.js"), require("./acte2.js"), acte3.passages].forEach(function (ps) {
  base.passages = base.passages || {};
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
});
base.epilogue = acte3.epilogue;
module.exports = base;
