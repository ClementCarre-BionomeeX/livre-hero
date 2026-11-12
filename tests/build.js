"use strict";
// Builds each story in histoires/src/<id>/ (index.js merges its modules) into histoires/<id>.json, checks it with the
// validator (static checks, echoes, simulated games), then writes dist/index.html: the page with the engine, the
// validator, the app and the built stories inlined (the Artifact page loads nothing else but its fonts).
// Usage: node tests/build.js [--games N] [--only id]
var fs = require("fs"), path = require("path");
var ROOT = path.join(__dirname, ".."), V = require(path.join(ROOT, "src/validateur.js")), P = require("./page.js");
var args = process.argv.slice(2), games = 1200, only = null;
for (var i = 0; i < args.length; i++) { if (args[i] === "--games") games = +args[++i]; if (args[i] === "--only") only = args[++i]; }
var STORIES = P.STORIES;

var built = [], failed = false;
STORIES.forEach(function (id) {
  var story = require(path.join(ROOT, "histoires/src", id, "index.js"));
  var json = JSON.stringify(story);
  fs.writeFileSync(path.join(ROOT, "histoires", id + ".json"), JSON.stringify(story, null, 1));
  built.push(json);
  if (only && only !== id) return;
  var t0 = Date.now(), rep = V.validate(JSON.parse(json), { games: games });
  var sim = rep.sim;
  console.log("== " + story.title + " (" + Object.keys(story.passages).length + " passages, " + Math.round(json.length / 1024) + " Ko) en " + (Date.now() - t0) + " ms");
  if (sim) {
    console.log("fins : " + Object.keys(sim.endings).map(function (k) { return k + " ×" + sim.endings[k]; }).join(", "));
    console.log("niveaux à la fin : " + JSON.stringify(sim.levelAtEnd));
    console.log("quêtes faites : " + Object.keys(sim.questDone).map(function (k) { return k + " " + sim.questDone[k]; }).join(", "));
  }
  console.log(rep.errors.length + " erreur(s), " + rep.warnings.length + " remarque(s)");
  rep.errors.forEach(function (e) { console.log("  ERREUR " + e); });
  rep.warnings.forEach(function (e) { console.log("  remarque " + e); });
  if (rep.errors.length) failed = true;
  // The strict reading (src/validateur.js strictCheck): silent faults, counted here, listed by tests/verif.js.
  var strict = V.strictCheck(JSON.parse(json)), byKind = {};
  strict.forEach(function (x) { byKind[x.kind] = (byKind[x.kind] || 0) + 1; });
  console.log("vérificateur strict : " + (strict.length ? Object.keys(byKind).map(function (k) { return byKind[k] + " " + k; }).join(", ") + " (node tests/verif.js " + id + ")" : "rien à signaler"));
});

var page = P.assemble(built);
fs.mkdirSync(path.join(ROOT, "dist"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "dist/index.html"), page);
console.log("dist/index.html : " + Math.round(page.length / 1024) + " Ko");
process.exit(failed ? 1 : 0);
