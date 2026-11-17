// "Les Trois Clefs d'Aiguemorne". Merges the story base (base.js) with the writing lots. Each lot exports { passages: {...}, extras: {...} }; extras
// may add people, items, enemies, clues, quests, places, routes, regions, events, shops, banter, achievements,
// scrutins, endings, epilogue, fates, glossary. A key declared twice is an error.
var base = require("./base.js");
var LOTS = require("./lots.js");
var DICTS = ["people", "companions", "items", "enemies", "clues", "mysteries", "shops", "achievements", "scrutins", "endings"];
var WORLD_DICTS = ["places", "regions", "events"];
LOTS.forEach(function (f) {
  var m;
  try { m = require("./" + f + ".js"); } catch (e) {
    if (e.code === "MODULE_NOT_FOUND" && e.message.indexOf(f + ".js") >= 0) return;
    // While lots are written side by side (verifier-lot.js), a lot still being written may not load yet: skip it.
    if (process.env.TROISCLEFS_LOT && process.env.TROISCLEFS_LOT !== f) { console.error("(lot " + f + " ignoré : " + e.message.split("\n")[0] + ")"); return; }
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
  WORLD_DICTS.forEach(function (d) {
    Object.keys(ex[d] || {}).forEach(function (k) {
      if (base.world[d][k]) throw new Error("world." + d + " en double : " + k + " (" + f + ")");
      base.world[d][k] = ex[d][k];
    });
  });
  (ex.routes || []).forEach(function (r) {
    if (base.world.routes.some(function (x) { return x.id === r.id; })) throw new Error("route en double : " + r.id + " (" + f + ")");
    base.world.routes.push(r);
  });
  (ex.quests || []).forEach(function (q) {
    if (base.quests.some(function (x) { return x.id === q.id; })) throw new Error("quête en double : " + q.id + " (" + f + ")");
    base.quests.push(q);
  });
  (ex.banter || []).forEach(function (b) { base.banter.push(b); });
  (ex.epilogue || []).forEach(function (b) { base.epilogue.push(b); });
  (ex.fates || []).forEach(function (b) { base.fates.push(b); });
  Object.keys((ex.lore || {}).names || {}).forEach(function (k) { base.lore.names[k] = ex.lore.names[k]; });
  Object.keys(ex.glossary || {}).forEach(function (k) { base.glossary[k] = ex.glossary[k]; });
});
module.exports = base;
