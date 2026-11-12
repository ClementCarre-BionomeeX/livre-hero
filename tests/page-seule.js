"use strict";
// Writes dist/index.html from the stories already built (histoires/<id>.json), without the long path test.
// Usage: node tests/page-seule.js   (after editing the app or the engine; tests/build.js stays the full check)
var fs = require("fs"), path = require("path"), P = require("./page.js");
var ROOT = path.join(__dirname, "..");
var stories = P.STORIES.map(function (id) { return JSON.stringify(JSON.parse(fs.readFileSync(path.join(ROOT, "histoires", id + ".json"), "utf8"))); });
fs.writeFileSync(path.join(ROOT, "dist/index.html"), P.assemble(stories));
console.log("dist/index.html réécrit (sans le test des chemins).");
