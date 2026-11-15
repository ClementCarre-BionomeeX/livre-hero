"use strict";
// Lists the tags set but never read in "Le Trésor des Taiseurs", built fresh from the sources.
// Usage: node histoires/src/taiseurs/tags-orphelins.js [PREFIX ...]   (passage prefixes, e.g. PQ PF IB)
var path = require("path"), V = require(path.join(__dirname, "../../../src/validateur.js"));
delete require.cache[require.resolve("./index.js")];
var story = JSON.parse(JSON.stringify(require("./index.js")));
var pre = process.argv.slice(2);
var list = V.strictCheck(story).filter(function (x) {
  if (!pre.length) return true;
  var m = x.msg.match(/§ ([A-Za-z]+)_/g) || []; // passages (IB_) and veils / documents (ib_)
  return m.some(function (s) { return pre.indexOf(s.slice(2, -1).toUpperCase()) >= 0; });
});
list.forEach(function (x) { console.log("[" + x.kind + "] " + x.msg); });
console.log(list.length + " remarque(s).");
