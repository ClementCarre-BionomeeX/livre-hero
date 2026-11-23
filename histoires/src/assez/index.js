// Merges the story base with the round house and the endings.
var base = require("./base.js");
[require("./maison.js"), require("./fins.js")].forEach(function (ps) {
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
});
module.exports = base;
