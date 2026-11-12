"use strict";
// Plays the stories with several players (random choices), through the rendezvous and merges of src/multi.js.
// Usage: node tests/multi-test.js [--games N]
var path = require("path"), assert = require("assert");
var ROOT = path.join(__dirname, ".."), M = require(path.join(ROOT, "src/moteur.js")), MU = require(path.join(ROOT, "src/multi.js"));
var games = 40; var a = process.argv.indexOf("--games"); if (a > 0) games = +process.argv[a + 1];

// ---- merge3
assert.deepStrictEqual(MU.merge3({ a: 1, f: {} }, [{ a: 3, f: { x: true } }, { a: 2, f: { y: true } }]), { a: 4, f: { x: true, y: true } });
assert.deepStrictEqual(MU.merge3({ t: "b" }, [{ t: "x" }, { t: "y" }]), { t: "x" });            // first arrived wins
assert.deepStrictEqual(MU.merge3({ l: [1, 2] }, [{ l: [1, 2, 3] }, { l: [2, 4] }]), { l: [2, 3, 4] });
assert.deepStrictEqual(MU.merge3({ f: { a: true } }, [{ f: {} }, { f: { a: true } }]), { f: {} });  // a removal is a change

function seeded(n) { var x = n >>> 0 || 1; return function () { x ^= x << 13; x >>>= 0; x ^= x >>> 17; x ^= x << 5; x >>>= 0; return x / 4294967296; }; }

function newShared(st, rnd) {
  var s = M.freshState(st, { toutJouer: false }); s.name = "Aël"; s.arch = Object.keys(M.ARCHS)[Math.floor(rnd() * 6)];
  (st.past || []).forEach(function (q) { M.apply(st, s, q.answers[Math.floor(rnd() * q.answers.length)].fx); });
  M.start(st, s); return s;
}
// Intent: play(Story, Players, Seed) -> Report
function play(st, n, seed) {
  var rnd = seeded(seed); M.setRng(rnd);
  var players = [], deal = MU.deal(st, n);
  for (var i = 0; i < n; i++) players.push({ id: "j" + i, name: "Joueur " + (i + 1), heroes: st.heroes ? deal[i] : [], s: st.heroes ? null : newShared(st, rnd) });
  var g = MU.create(st, players, st.heroes ? newShared(st, rnd) : null);
  MU.refreshWaits(st, g);
  var steps = 0, syncs = 0, decisions = 0, rep = { stuck: false, over: false };
  while (steps < 20000) {
    var moved = false;
    g.players.forEach(function (p) {
      for (var k = 0; k < 400 && !p.wait; k++) {
        var v = MU.view(st, g, p.id), ok = v.choices.filter(function (c) { return c.ok && !c.restart; });
        if (!ok.length) break;
        var c = ok[Math.floor(rnd() * ok.length)];
        if (MU.choose(st, g, p.id, c)) decisions++;
        steps++; moved = true;
      }
    });
    if (MU.allWaiting(g)) { rep = MU.sync(st, g); syncs++; if (rep.stuck || rep.over) break; }
    else if (!moved) throw new Error("personne ne bouge et tout le monde n'attend pas");
  }
  M.setRng(null);
  return { steps: steps, syncs: syncs, decisions: decisions, stuck: rep.stuck, over: rep.over,
    where: g.players.map(function (p) { return p.name + " @" + p.s.node + (p.wait ? " (" + p.wait.kind + (p.wait.key ? " " + p.wait.key : "") + ")" : ""); }), g: g };
}

["vaudrenne", "pages"].forEach(function (id) {
  var st = require(path.join(ROOT, "histoires/src", id, "index.js"));
  (st.multi ? [st.multi.min || 2, st.multi.max || 2].filter(function (x, i, a) { return a.indexOf(x) === i; }) : [2, 3]).forEach(function (n) {
    var tally = { over: 0, stuck: 0, cap: 0 }, syncs = 0, stuckWhere = {};
    for (var gi = 0; gi < games; gi++) {
      var r = play(st, n, 1000 + gi * 7 + n);
      syncs += r.syncs;
      if (r.over) tally.over++; else if (r.stuck) { tally.stuck++; var w = r.where.join(" | "); stuckWhere[w] = (stuckWhere[w] || 0) + 1; } else tally.cap++;
    }
    console.log(id + " à " + n + " joueurs, " + games + " parties : finies " + tally.over + ", bloquées " + tally.stuck + ", plafond " + tally.cap + " · " + (syncs / games).toFixed(1) + " synchros en moyenne");
    Object.keys(stuckWhere).slice(0, 5).forEach(function (w) { console.log("   bloquée ×" + stuckWhere[w] + " : " + w); });
  });
});

// ---- world choices: the first to choose fixes it for the other
(function () {
  var st = { id: "t", title: "t", start: "a", acts: [{ id: "I" }], passages: {
    a: { act: "I", title: "A", text: ["?"], choices: [{ label: "Brûler le pont", monde: "pont", to: "b" }, { label: "Garder le pont", monde: "pont", to: "b" }] },
    b: { act: "I", title: "B", text: ["."], end: true } } };
  var mk = function () { var s = M.freshState(st); s.name = "x"; s.arch = "guerrier"; M.start(st, s); return s; };
  var g = MU.create(st, [{ id: "a", name: "Léo", s: mk() }, { id: "b", name: "Mila", s: mk() }]);
  MU.choose(st, g, "a", { label: "Garder le pont" });
  var v = MU.view(st, g, "b");
  assert.strictEqual(v.choices[0].ok, false); assert.ok(/Léo a déjà tranché/.test(v.choices[0].why));
  assert.strictEqual(v.choices[1].ok, true); assert.strictEqual(v.choices[1].decidedBy, "Léo");
  console.log("choix du monde : ok");
})();
