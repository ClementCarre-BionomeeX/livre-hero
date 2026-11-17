// « Le Douzième Coup ». Merges the story base (base.js) with the writing lots. Each lot exports
// { passages: {...}, extras: {...} }; extras may add people, items, enemies, clues, mysteries, shops, achievements,
// puzzles, duels, councils, motions, battles, quests, banter, epilogue lines, fates, interludes, glossary words, and
// lines of the two chronicles (extras.chronique, extras.avenir). A key declared twice is an error.
var base = require("./base.js");
var LOTS = ["bornes", "secrets", "c01", "c02a", "c02b", "c03",
  "c04j_a", "c04j_b", "c04r_a", "c04r_b", "c05j_a", "c05j_b", "c05r_a", "c05r_b",
  "c06j_a", "c06j_b", "c06r_a", "c06r_b", "c07j_a", "c07j_b", "c07r_a", "c07r_b",
  "c08j_a", "c08j_b", "c08j_c", "c08r_a", "c08r_b", "c09j_a", "c09j_b", "c09r_a", "c09r_b",
  "c10j_a", "c10j_b", "c10r_a", "c10r_b", "c11j_a", "c11j_b", "c11r_a", "c11r_b",
  "c12j_a", "c12j_b", "c12r_a", "c12r_b", "c13j_a", "c13j_b", "c13r_a", "c13r_b",
  "c14j", "c14r", "c15j", "c15r", "c15", "c16j", "c16r", "c16", "c17", "fins", "interludes"];
var DICTS = ["people", "items", "enemies", "clues", "mysteries", "shops", "achievements", "puzzles", "duels", "councils", "motions", "battles", "secrets", "companions"];
var LISTS = ["banter", "epilogue", "fates", "interludes"];
LOTS.forEach(function (f) {
  var m;
  try { m = require("./" + f + ".js"); } catch (e) {
    if (e.code === "MODULE_NOT_FOUND" && e.message.indexOf(f + ".js") >= 0) return;
    throw e;
  }
  var ps = m.passages || {}, ex = m.extras || {};
  Object.keys(ps).forEach(function (k) {
    if (base.passages[k]) throw new Error("passage en double : " + k + " (" + f + ")");
    base.passages[k] = ps[k];
  });
  DICTS.forEach(function (d) {
    Object.keys(ex[d] || {}).forEach(function (k) {
      base[d] = base[d] || {};
      if (base[d][k]) throw new Error(d + " en double : " + k + " (" + f + ")");
      base[d][k] = ex[d][k];
    });
  });
  LISTS.forEach(function (d) { (ex[d] || []).forEach(function (b) { base[d] = base[d] || []; base[d].push(b); }); });
  (ex.quests || []).forEach(function (q) {
    if (base.quests.some(function (x) { return x.id === q.id; })) throw new Error("quête en double : " + q.id + " (" + f + ")");
    base.quests.push(q);
  });
  ["chronique", "avenir"].forEach(function (c) {
    (ex[c] || []).forEach(function (l) {
      if (base.chroniques[c].lines.some(function (x) { return x.id === l.id; })) throw new Error(c + ", ligne en double : " + l.id + " (" + f + ")");
      base.chroniques[c].lines.push(l);
    });
  });
  Object.keys(ex.endings || {}).forEach(function (k) { base.endings[k] = ex.endings[k]; });
  Object.keys(ex.glossary || {}).forEach(function (k) { base.glossary[k] = ex.glossary[k]; });
  Object.keys(ex.names || {}).forEach(function (k) { base.lore.names[k] = ex.names[k]; });
});
module.exports = base;
