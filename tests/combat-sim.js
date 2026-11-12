"use strict";
// Combat balance: plays each Kardan fight many times for each archetype at the act's level, with the companions the
// story usually gives there, and a player who uses the class's techniques sensibly. Prints win (and flee) rates.
// Usage: node tests/combat-sim.js [N]
var M = require("../src/moteur.js"), st = require("../histoires/kardan.json");
var N = +(process.argv[2] || 2000);
var FIGHTS = [
  { node: "K_ravine_chacals", lv: 1, party: [] }, { node: "K_ravine_chacals", lv: 1, party: ["odon"] },
  { node: "K_capture_assaut", lv: 2, party: [] },
  { node: "D_puits_fond", lv: 3, party: ["sidonie"] }, { node: "D_puits_fond", lv: 4, party: [] },
  { node: "E_rats", lv: 3, party: ["odon"] },
  { node: "D_coeur_combat", lv: 5, party: ["sidonie"] },
  { node: "O_milice", lv: 6, party: ["aurele", "sidonie"] },
];
function nodeOf(name) { var ks = Object.keys(st.passages).filter(function (k) { var p = st.passages[k]; return p.combat && (k === name || p.combat.title && k.indexOf(name) === 0); }); return ks[0] || null; }
function est(s, c) {
  var melee = s.arch === "guerrier" ? 8 : 5, w = 4;
  if (c.sys === "attack") w = melee; if (c.sys === "shoot") w = 4;
  if (c.tech) { var t = M.TECHS[s.arch].filter(function (x) { return x.id === c.tech; })[0]; if (t.kind === "power") w = 2 * melee; if (t.kind === "backstab") w = 3 * melee; if (t.kind === "bolt") w = t.dmg; }
  if (s.combat.hidden) w *= 2;
  return (c.chance || 50) / 100 * w;
}
function policy(s, v) {
  var c = s.combat, cs = v.choices.filter(function (x) { return x.ok; }), by = function (f) { return cs.filter(f)[0]; };
  var tk = function (kind) { return cs.filter(function (x) { if (!x.tech) return false; var t = M.TECHS[s.arch].filter(function (y) { return y.id === x.tech; })[0]; return t.kind === kind; }); };
  var low = s.pv < M.pvMax(s) * 0.35;
  if (low && tk("healAll").length) return tk("healAll")[0];
  if (low && tk("heal").length) return tk("heal")[0];
  if (low && by(function (x) { return x.sys === "use" && !x.on; })) return by(function (x) { return x.sys === "use" && !x.on; });
  if (s.arch === "voleur" && c.flee && s.pv < M.pvMax(s) * 0.6) { if (c.fleeBonus) return by(function (x) { return x.sys === "flee"; }); if (tk("feint").length) return tk("feint")[0]; return by(function (x) { return x.sys === "flee"; }); }
  if (tk("soothe").length) return tk("soothe")[0];
  if (tk("sleep").length) return tk("sleep")[0];
  if (tk("trap").length) return tk("trap").sort(function (a, b) { return b.chance - a.chance; })[0];
  if (tk("hide").length && !c.hidden) return tk("hide")[0];
  if (tk("line").length && M.partyView(st, s).length > 1) return tk("line")[0];
  if (tk("bless").length) return tk("bless")[0];
  if (s.arch === "voleur" && tk("backstab").length) return tk("backstab")[0];
  if (s.arch === "voleur" && tk("feint").length) return tk("feint")[0];
  var dmg = cs.filter(function (x) { return x.sys === "attack" || x.sys === "shoot" || (x.tech && ["power", "backstab", "bolt"].indexOf(M.TECHS[s.arch].filter(function (y) { return y.id === x.tech; })[0].kind) >= 0); });
  if (dmg.length) return dmg.sort(function (a, b) { return est(s, b) - est(s, a); })[0];
  var rank = by(function (x) { return x.sys === "rank"; }); if (rank) return rank;
  return by(function (x) { return x.sys === "defend"; });
}
var archs = Object.keys(M.ARCHS);
FIGHTS.forEach(function (F) {
  var node = nodeOf(F.node); if (!node) { console.log("?", F.node); return; }
  var row = [node + " niv " + F.lv + (F.party.length ? " + " + F.party.join(",") : "")];
  archs.forEach(function (a) {
    var win = 0, flee = 0, turns = 0;
    for (var i = 0; i < N; i++) {
      var s = M.freshState(st, {}); s.arch = a; s.name = "x"; s.ep = M.EP_PER_LEVEL * F.lv; M.start(st, s); s.events = [];
      F.party.forEach(function (k) { s.met[k] = "party"; s.conf[k] = 40; });
      if (a === "rodeur" && node === "K_ravine_chacals") s.flags["ravine:collet"] = i % 2 === 0;
      s.pv = M.pvMax(s); M.enter(st, s, node);
      var g = 0;
      while (s.node === "@combat" && g++ < 300) { var v = M.view(st, s), ch = policy(s, v); try { M.choose(st, s, ch); } catch (e) { if (!/@route/.test(e.message)) throw e; break; } }
      turns += g;
      if (s.flags["calme:chant"] || s.flags["calme:sommeil"] || s.events.some(function (e) { return e.text === "Victoire."; })) win++;
      else if (s.events.some(function (e) { return /tu t'échappes/.test(e.text); })) flee++;
    }
    row.push(a.slice(0, 5) + " " + Math.round(100 * win / N) + "%" + (flee ? "+" + Math.round(100 * flee / N) + "f" : ""));
  });
  console.log(row.join(" | "));
});
