// Merges the story base (base.js) with the writing lots. Each lot exports { passages: {...}, extras: {...} }; extras
// may add people, items, enemies, clues, quests, places, routes, regions, events, shops, banter, achievements,
// glossary. A key declared twice is an error, so lots written side by side cannot overwrite each other.
var base = require("./base.js");
var LOTS = ["p1_bornes", "p2_chateau", "i1_brumefeuille", "i2_rouvre", "i3_moulin",
  "ii1_ferrance", "ii2_chapelle", "ii3_thavar", "iii1_aldaran", "iii2_velorin", "iii3_gue",
  "iv1_tour", "iv2_temple", "iv3_dragon", "v1_descente", "v2_fins", "divers"];
var DICTS = ["people", "items", "enemies", "clues", "mysteries", "shops", "achievements"];
var WORLD_DICTS = ["places", "regions", "events"];
LOTS.forEach(function (f) {
  var m;
  try { m = require("./" + f + ".js"); } catch (e) {
    if (e.code === "MODULE_NOT_FOUND" && e.message.indexOf(f + ".js") >= 0) return;
    // While lots are written side by side (verifier-lot.js), a lot still being written may not load yet: skip it.
    if (process.env.MALVORAN_LOT && process.env.MALVORAN_LOT !== f) { console.error("(lot " + f + " ignoré : " + e.message.split("\n")[0] + ")"); return; }
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
  Object.keys(ex.glossary || {}).forEach(function (k) { base.glossary[k] = ex.glossary[k]; });
});
// Level curve (acts' `levels` in base.js): the lots were written side by side and give more EP than their act's span
// asks for, more so late in the story. One factor per act brings every `ep` effect back to the curve.
var EP_SCALE = { I: 0.85, II: 0.9, III: 0.55, IV: 0.38, V: 0.5 };
function scaleEp(o, f) {
  if (!o || typeof o !== "object") return;
  if (Array.isArray(o)) { o.forEach(function (x) { scaleEp(x, f); }); return; }
  Object.keys(o).forEach(function (k) {
    if (k === "ep" && o.fx !== o) {
      if (Array.isArray(o.ep)) o.ep = [o.ep[0], Math.max(10, Math.round(o.ep[1] * f / 50) * 50)];
      else if (typeof o.ep === "number") o.ep = Math.max(10, Math.round(o.ep * f / 50) * 50);
    } else scaleEp(o[k], f);
  });
}
Object.keys(base.passages).forEach(function (id) { var f = EP_SCALE[base.passages[id].act]; if (f) scaleEp(base.passages[id], f); });
module.exports = base;
