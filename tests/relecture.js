// Style review of every story (or one): node tests/relecture.js [id] [--all]
// Counts by kind, then the first lines of each kind (all with --all). Same rules as the editor's « Relecture » tab.
var fs = require("fs"), path = require("path"), R = require("../src/relecture.js");
var dir = path.join(__dirname, "..", "histoires"), args = process.argv.slice(2), all = args.indexOf("--all") >= 0, only = args.filter(function (a) { return a[0] !== "-"; })[0];
var SHOWN = 5;
fs.readdirSync(dir).filter(function (f) { return /\.json$/.test(f) && (!only || f === only + ".json"); }).forEach(function (f) {
  var st = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")), list = R.issues(st), by = {};
  list.forEach(function (x) { (by[x.kind] = by[x.kind] || []).push(x); });
  console.log("\n" + st.title + " : " + list.length + " remarque(s) · " + R.KINDS.filter(function (k) { return by[k]; }).map(function (k) { return k + " " + by[k].length; }).join(" · "));
  R.KINDS.forEach(function (k) { (by[k] || []).slice(0, all ? 1e9 : SHOWN).forEach(function (x) { console.log("  [" + k + "] " + x.id + " : " + x.msg + " — " + x.excerpt); }); });
});
