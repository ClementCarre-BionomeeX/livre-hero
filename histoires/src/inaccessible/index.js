// Merges the story base with the night shift and the endings.
var base = require("./base.js");
[require("./salle.js"), require("./fins.js")].forEach(function (ps) {
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
});
module.exports = base;
