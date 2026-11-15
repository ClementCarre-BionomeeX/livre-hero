// « Le Monde perdu » : the base (the book, its notice, chapters, people, places, words) and the passages of the sixteen
// chapters, in the order of the book. A book to read (lecture: true): the order of the passages is the reading order.
var base = require("./base.js");
for (var n = 1; n <= 16; n++) {
  var f = "./chapitre" + (n < 10 ? "0" : "") + n + ".js", ps;
  try { ps = require(f); } catch (e) { if (e.code === "MODULE_NOT_FOUND" && String(e.message).indexOf("chapitre") >= 0) continue; throw e; }
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
// While the translation goes on, only the chapters already written are offered.
base.acts = base.acts.filter(function (a) { return base.passages[a.start]; });
module.exports = base;
