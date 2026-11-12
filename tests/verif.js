"use strict";
// Lists what the strict reading finds in a built story: tags set but never read, clues and items nobody can get,
// companions acting in a paragraph that does not say they are there.
// Usage: node tests/verif.js <id> [sorte]   (sorte : "tag", "indice", "objet", "compagnon")
var path = require("path"), V = require(path.join(__dirname, "../src/validateur.js"));
var id = process.argv[2], kind = process.argv[3];
if (!id) { console.log("Usage : node tests/verif.js <id> [tag|indice|objet|compagnon]"); process.exit(1); }
var story = require(path.join(__dirname, "../histoires", id + ".json"));
var list = V.strictCheck(story).filter(function (x) { return !kind || x.kind.indexOf(kind) >= 0; });
list.forEach(function (x) { console.log("[" + x.kind + "] " + x.msg); });
console.log(list.length + " remarque(s).");
