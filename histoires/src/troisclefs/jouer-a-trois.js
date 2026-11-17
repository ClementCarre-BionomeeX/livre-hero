// Author tool for the Trois Clefs: node histoires/src/troisclefs/jouer-a-trois.js [games]
// Plays the lots already written with three random players, through the rendezvous of src/multi.js. Passages that
// later lots will write are stubbed as endings. Prints the games that got stuck and the passages never reached.
"use strict";
var path = require("path");
var ROOT = path.join(__dirname, "..", "..", "..");
var M = require(path.join(ROOT, "src/moteur.js")), MU = require(path.join(ROOT, "src/multi.js"));
var games = +process.argv[2] || 60;
var st = JSON.parse(JSON.stringify(require("./index.js")));
var stubs = {};
function want(id) { if (typeof id === "string" && id[0] !== "@" && !st.passages[id]) stubs[id] = true; }
function targets(c) {
  [c.to, c.back, c.win && c.win.to, c.lose && c.lose.to].forEach(function (t) { if (Array.isArray(t)) t.forEach(function (x) { want(x.to); }); else want(t); });
  if (c.fight) ["win", "lose", "flee", "calm"].forEach(function (o) { if (c.fight[o]) want(c.fight[o].to); });
}
Object.keys(st.passages).forEach(function (id) {
  var p = st.passages[id];
  (Array.isArray(p.choices) ? p.choices : []).forEach(targets);
  (p.branch || []).forEach(function (b) { want(b.to); });
});
Object.keys(st.world.places).forEach(function (k) { want(st.world.places[k].arrive); });
st.acts.forEach(function (a) { want(a.start); });
Object.keys(stubs).forEach(function (id) { st.passages[id] = { act: "P", title: "(à écrire)", text: ["…"], end: true, ending: "stub", choices: [] }; });
st.endings = st.endings || {}; st.endings.stub = st.endings.stub || { title: "(à écrire)", text: "…" };
M.prepare(st);
function seeded(n) { var x = n >>> 0 || 1; return function () { x ^= x << 13; x >>>= 0; x ^= x >>> 17; x ^= x << 5; x >>>= 0; return x / 4294967296; }; }
function fresh(rnd) {
  var s = M.freshState(st, { toutJouer: false }); s.name = "Aël"; s.arch = Object.keys(M.ARCHS)[Math.floor(rnd() * 6)];
  (st.past || []).forEach(function (q) { M.apply(st, s, q.answers[Math.floor(rnd() * q.answers.length)].fx); });
  M.start(st, s); return s;
}
var seen = {}, tally = { over: 0, stuck: 0, cap: 0 }, stuckWhere = {}, errors = {};
for (var gi = 0; gi < games; gi++) {
  var rnd = seeded(4000 + gi * 13); M.setRng(rnd);
  var players = []; for (var i = 0; i < 3; i++) players.push({ id: "j" + i, name: "J" + (i + 1), heroes: [], s: fresh(rnd) });
  var g = MU.create(st, players, null); MU.refreshWaits(st, g);
  var steps = 0, rep = {};
  try {
    while (steps < 30000) {
      var moved = false;
      g.players.forEach(function (p) {
        for (var k = 0; k < 600 && !p.wait; k++) {
          seen[p.s.node] = true;
          var v = MU.view(st, g, p.id), ok = v.choices.filter(function (c) { return c.ok && !c.restart; });
          if (!ok.length) break;
          MU.choose(st, g, p.id, ok[Math.floor(rnd() * ok.length)]); steps++; moved = true;
        }
        seen[p.s.node] = true;
      });
      if (MU.allWaiting(g)) { rep = MU.sync(st, g); if (rep.stuck || rep.over) break; }
      else if (!moved) { rep = { stuck: true }; break; }
    }
  } catch (e) { errors[e.message.split("\n")[0]] = (errors[e.message.split("\n")[0]] || 0) + 1; rep = { stuck: true }; }
  if (rep.over) tally.over++; else if (rep.stuck) { tally.stuck++; var w = g.players.map(function (p) { return p.s.node + (p.wait ? "(" + p.wait.kind + ")" : ""); }).join(" | "); stuckWhere[w] = (stuckWhere[w] || 0) + 1; } else tally.cap++;
}
M.setRng(null);
console.log(games + " parties à trois : finies " + tally.over + ", bloquées " + tally.stuck + ", plafond " + tally.cap);
Object.keys(stuckWhere).slice(0, 12).forEach(function (w) { console.log("  bloquée ×" + stuckWhere[w] + " : " + w); });
Object.keys(errors).forEach(function (e) { console.log("  erreur ×" + errors[e] + " : " + e); });
var never = Object.keys(st.passages).filter(function (id) { return !seen[id] && !stubs[id]; });
console.log("passages jamais atteints : " + never.length + " / " + Object.keys(st.passages).length);
console.log("  " + never.join(" "));
