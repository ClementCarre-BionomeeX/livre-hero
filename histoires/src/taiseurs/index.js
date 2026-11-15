// "Le Trésor des Taiseurs". Merges the story base (base.js) with the writing lots. Each lot exports { passages: {...}, extras: {...} }; extras
// may add people, items, enemies, clues, quests, places, routes, regions, events, shops, banter, achievements,
// glossary. A key declared twice is an error, so lots written side by side cannot overwrite each other.
var base = require("./base.js");
var LOTS = ["p1_quai", "p2_fete", "i1_beffroi", "i2_changeurs", "i3_gouttieres", "i4_fuite",
  "ii1_joncs", "ii2_saline", "ii3_mer", "ii4_ecueils", "ii5_tempete",
  "iii1_combes", "iii2_mont", "iii3_miroir", "iii4_descente",
  "iv1_ville", "iv2_conseil", "iv3_banque", "iv4_basse",
  "v1_noyee", "v2_tresor", "v3_fins", "divers"];
var DICTS = ["people", "items", "enemies", "clues", "mysteries", "shops", "achievements", "veils"];
var WORLD_DICTS = ["places", "regions", "events"];
LOTS.forEach(function (f) {
  var m;
  try { m = require("./" + f + ".js"); } catch (e) {
    if (e.code === "MODULE_NOT_FOUND" && e.message.indexOf(f + ".js") >= 0) return;
    // While lots are written side by side (verifier-lot.js), a lot still being written may not load yet: skip it.
    if (process.env.TAISEURS_LOT && process.env.TAISEURS_LOT !== f) { console.error("(lot " + f + " ignoré : " + e.message.split("\n")[0] + ")"); return; }
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
  Object.keys(ex.glossary || {}).forEach(function (k) { base.glossary[k] = ex.glossary[k]; });
});
// Level curve (acts' `levels` in base.js): the lots were written side by side and give more EP than their act's span
// asks for, more so late in the story. One factor per act brings every `ep` effect back to the curve.
var EP_SCALE = { P: 1, I: 1, II: 1, III: 1, IV: 1, V: 1 };   // recalibrated once every lot is written
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
