"use strict";
// Builds histoires/ecritures/<id>.json: the earlier writing styles of a book, taken from the git history.
// The books written before 16/11/2026 went through two style passes, each keeping the structure and changing only
// the prose: « sobre » (the first writing) → « doyle » (15/11 evening) → « mélange » (16/11 morning, the text of the
// books today). For each prose string of the book as it is now, this tool finds the same string (same place in the
// book) in the two earlier states and keeps it when it differs. A string corrected after the passes keeps its new text
// in every style (an earlier writing would bring back the fault). Tokens ({e}, {hero}, {{…}}) must be the same,
// else the string keeps today's text.
// Output: { doyle: { key: text }, sobre: { key: text } }, key = M.writingKey(today's string) (src/moteur.js).
// Usage: node outils/ecritures/extraire.js [id ...]   (needs the full git history: git fetch --unshallow)
var fs = require("fs"), path = require("path"), cp = require("child_process"), os = require("os");
var ROOT = path.join(__dirname, "../.."), M = require(path.join(ROOT, "src/moteur.js"));
// The moments between the passes (see the commits « style Doyle » of 15/11 and « Style mélange » of 16/11).
var CUTS = { sobre: "2026-11-15T18:50:00+01:00", doyle: "2026-11-16T08:25:00+01:00", melange: "2026-11-16T10:00:00+01:00" };
var BOOKS = ["kardan", "cendres", "vaudrenne", "pages", "quarante", "temoin", "malvoran", "soiree", "enquete", "siege", "mer", "ecole", "huisclos", "adeux", "maree", "retenue", "taiseurs"];
// Strings that are not prose: names of marks, conditions, targets. Their keys are skipped.
var NOT_PROSE = { id: 1, if: 1, set: 1, to: 1, back: 1, go: 1, need: 1, flag: 1, flags: 1, face: 1, skin: 1, motif: 1, color: 1, music: 1, voice: 1, tags: 1, genres: 1, kind: 1, cond: 1, unless: 1, img: 1, map: 1 };

function git(args) { return cp.execFileSync("git", args, { cwd: ROOT, encoding: "utf8", maxBuffer: 1 << 28 }); }
function stateAt(id, when) {
  var sha = git(["log", "-1", "--format=%H", "--before=" + when, "--", "histoires/src/" + id]).trim();
  if (!sha) return null;
  var dir = fs.mkdtempSync(path.join(os.tmpdir(), "ecr-" + id + "-"));
  // the book's folder and the files shared by all books (glossary, people) as they were then
  var shared = git(["ls-tree", "--name-only", sha, "histoires/src/"]).split("\n").filter(function (f) { return /\.js$/.test(f); });
  cp.execSync("git archive " + sha + " histoires/src/" + id + " " + shared.join(" ") + " | tar -x -C " + JSON.stringify(dir), { cwd: ROOT });
  var file = path.join(dir, "histoires/src", id, "index.js");
  var st = JSON.parse(JSON.stringify(require(file)));
  fs.rmSync(dir, { recursive: true, force: true });
  return st;
}
function tokens(s) { return (s.match(/\{[^{}]*\}|\{\{|\}\}|\*\*?/g) || []).sort().join(" "); }
function isProse(s) { return typeof s === "string" && s.length > 12 && / /.test(s); }
// Walks today's book; at each prose string, the strings at the same place in the earlier states.
function pairs(now, olds, out, key) {
  if (typeof now === "string") { if (isProse(now) && !NOT_PROSE[key]) out.push([now].concat(olds)); return; }
  if (!now || typeof now !== "object") return;
  if (Array.isArray(now)) {
    now.forEach(function (x, i) { pairs(x, olds.map(function (o) { return Array.isArray(o) && o.length === now.length ? o[i] : undefined; }), out, key); });
    return;
  }
  Object.keys(now).forEach(function (k) { if (!NOT_PROSE[k]) pairs(now[k], olds.map(function (o) { return o && typeof o === "object" && !Array.isArray(o) ? o[k] : undefined; }), out, k); });
}
// The shape of an entry without its prose: two states of a passage (a person, a clue…) are paired only when their
// shapes are the same, so that a passage rebuilt between two states never gives one paragraph the text of another.
function skel(x, key) {
  if (typeof x === "string") return isProse(x) && !NOT_PROSE[key] ? "§" : JSON.stringify(x);
  if (!x || typeof x !== "object") return JSON.stringify(x);
  if (Array.isArray(x)) return "[" + x.map(function (y) { return skel(y, key); }).join(",") + "]";
  return "{" + Object.keys(x).sort().map(function (k) { return k + ":" + skel(x[k], k); }).join(",") + "}";
}
function sameShapes(now, old, n) {
  if (!old) return old;
  var o = Object.assign({}, old);
  Object.keys(now).forEach(function (k) {
    var a = now[k], b = old[k];
    if (!a || !b || typeof a !== "object" || Array.isArray(a) || typeof b !== "object" || Array.isArray(b)) return;
    o[k] = {};
    Object.keys(a).forEach(function (id) { if (b[id] === undefined) return; if (skel(a[id], id) === skel(b[id], id)) o[k][id] = b[id]; else n.shape++; });
  });
  return o;
}
function build(id) {
  var now = JSON.parse(fs.readFileSync(path.join(ROOT, "histoires", id + ".json"), "utf8"));
  var S0 = stateAt(id, CUTS.sobre), S1 = stateAt(id, CUTS.doyle), S2 = stateAt(id, CUTS.melange);
  var n = { prose: 0, doyle: 0, sobre: 0, later: 0, tok: 0, shape: 0 };
  var list = []; pairs(now, [S0, S1, S2].map(function (S) { return sameShapes(now, S, n); }), list, "");
  var out = { doyle: {}, sobre: {} }; n.prose = list.length;
  list.forEach(function (r) {
    var c = r[0], s0 = r[1], s1 = r[2], s2 = r[3];
    if (typeof s2 !== "string") return;
    var touched = (typeof s1 === "string" && s1 !== s2) || (typeof s0 === "string" && s0 !== s2);
    if (c !== s2) { if (touched) n.later++; return; }       // corrected since: today's text in every style
    var k = M.writingKey(c);
    [["doyle", s1], ["sobre", s0]].forEach(function (x) {
      var v = x[1]; if (typeof v !== "string" || v === c) return;
      if (tokens(v) !== tokens(c)) { n.tok++; return; }
      out[x[0]][k] = v; n[x[0]]++;
    });
  });
  // « sobre » is the first writing: where Doyle left a string as it was, the first writing is that same string.
  var dir = path.join(ROOT, "histoires/ecritures");
  fs.mkdirSync(dir, { recursive: true });
  var json = JSON.stringify(out);
  fs.writeFileSync(path.join(dir, id + ".json"), json);
  console.log(id + " : " + n.prose + " textes, " + n.doyle + " en Doyle, " + n.sobre + " en sobre ; " + n.later + " corrigés depuis (texte d'aujourd'hui), " + n.tok + " écartés (jetons), " + n.shape + " entrées de forme différente · " + Math.round(json.length / 1024) + " Ko");
}
var ids = process.argv.slice(2); (ids.length ? ids : BOOKS).forEach(build);
