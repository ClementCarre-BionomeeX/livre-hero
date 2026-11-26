"use strict";
// Plays a few games of a story in node, as a reader would, and gives what the reader's record keeps of them (the pages
// read, the choices taken, the endings found), for the map of the endings (« Carte des fins », 25.5).
// Usage: require("./cartefins-sim").record(story, games, seed) -> { pages, trail, endings }
//        node tests/cartefins-sim.js <id> [games]   prints the map's numbers
var M = require("../src/moteur.js");
function rng(seed) { var x = seed >>> 0 || 1; return function () { x ^= x << 13; x >>>= 0; x ^= x >> 17; x ^= x << 5; x >>>= 0; return x / 4294967296; }; }
function record(st, games, seed) {
  var r = { pages: {}, trail: {}, endings: {}, feats: {} }, P = st.passages;
  for (var g = 0; g < games; g++) {
    var rnd = rng((seed || 1) * 7919 + g * 104729); M.setRng(rnd);
    var s = M.freshState(st, {}); s.arch = (M.ARCHS ? Object.keys(M.ARCHS)[0] : "guerrier"); s.name = "Essai";
    (st.past || []).forEach(function (q) { var a = q.answers[Math.floor(rnd() * q.answers.length)]; try { M.apply(st, s, a.fx); } catch (e) {} });
    try { M.start(st, s); } catch (e) { continue; }
    for (var step = 0; step < 3000; step++) {
      var v; try { v = M.view(st, s); } catch (e) { break; }
      Object.keys(s.seen || {}).forEach(function (k) { if (P[k] && !r.pages[k]) r.pages[k] = 1; });
      if (v.kind === "end") { var e = M.endingOf(st, s); if (e) { r.endings[e.id] = 1; if (e.base) r.endings[e.base] = 1; } break; }
      var cs = v.choices.filter(function (c) { return c.ok && !c.restart; }); if (!cs.length) break;
      // a curious reader: what leads to a page not read yet, when there is one
      var fresh = cs.filter(function (c) { return !c.sys && typeof c.to === "string" && P[c.to] && !s.seen[c.to]; });
      var pool = fresh.length && rnd() < 0.8 ? fresh : cs, c = pool[Math.floor(rnd() * pool.length)];
      var raw = (v.passage && v.passage.choices) || [];
      if (!c.sys && s.node) for (var i = 0; i < raw.length; i++) if (raw[i].label === c.label) { var o = r.trail[s.node] = r.trail[s.node] || {}; o[i] = (o[i] || 0) + 1; break; }
      try { M.choose(st, s, c); } catch (e) { break; }
    }
  }
  M.setRng(null);
  return r;
}
module.exports = { record: record };
if (require.main === module) {
  var C = require("../src/cartefins.js"), st = require("../histoires/" + process.argv[2] + ".json");
  var r = record(st, +(process.argv[3] || 3), 1), m = C.map(st, r);
  console.log("pages lues " + m.pages.known + " sur " + m.pages.total + " · fins " + m.ends.found.length + " sur " + m.ends.total + " · chemins dans le brouillard " + m.stubs + " · actes cachés " + m.hiddenActs);
  m.acts.forEach(function (a) { console.log("  " + a.title + " : " + a.nodes.length + " points, " + a.stubs.length + " chemins, largeur " + a.width + ", profondeur " + a.depth); });
}
