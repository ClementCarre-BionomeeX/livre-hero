// Merges the story base with the house (crossroads), the people, the remembrances and dreams, the three acts and the epilogue.
var base = require("./base.js");
var acte3 = require("./acte3.js");
base.passages = base.passages || {};
[require("./hubs.js"), require("./gens.js"), require("./souvenirs.js"), require("./acte1.js"), require("./acte2.js"), acte3.passages].forEach(function (ps) {
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
});
base.epilogue = acte3.epilogue;
module.exports = base;
