"use strict";
// A saved game reopened: the story is read again from its JSON and never goes through freshState. Every choice the
// engine offers must still carry the words of its button (Clément, 13/11: « c.label is undefined » on a resumed game).
// Usage: node tests/reprise-test.js
var fs = require("fs"), path = require("path");
var M = require("../src/moteur.js"), P = require("./page.js");
var ROOT = path.join(__dirname, ".."), bad = [];
P.STORIES.forEach(function (id) {
  var raw = fs.readFileSync(path.join(ROOT, "histoires", id + ".json"), "utf8");
  for (var g = 1; g <= 20; g++) {
    var x = g * 7919, rnd = function () { x = (x * 16807) % 2147483647; return x / 2147483647; };
    M.setRng(rnd);
    var story = JSON.parse(raw), s = M.freshState(story, { toutJouer: false });
    s.arch = Object.keys(M.ARCHS)[g % Object.keys(M.ARCHS).length]; s.name = "Reprise";
    try { (story.past || []).forEach(function (q) { M.apply(story, s, q.answers[g % q.answers.length].fx); }); M.start(story, s); } catch (e) { continue; }
    for (var i = 0; i < 400; i++) {
      // Each step as if the game had just been reopened: a fresh copy of the story and of the save.
      story = JSON.parse(raw); s = JSON.parse(JSON.stringify(s));
      var v; try { v = M.view(story, s); } catch (e) { bad.push(id + " § " + s.node + " : " + e.message); break; }
      if (v.kind === "end") break;
      v.choices.forEach(function (c) { if (typeof c.label !== "string" || !c.label) bad.push(id + " § " + s.node + " : choix sans libellé " + JSON.stringify(c).slice(0, 80)); });
      var cs = v.choices.filter(function (c) { return c.ok && !c.restart; }); if (!cs.length) break;
      try { M.choose(story, s, cs[Math.floor(rnd() * cs.length)]); } catch (e) { bad.push(id + " § " + s.node + " choix : " + e.message); break; }
    }
  }
});
M.setRng(null);
if (bad.length) { console.log("reprise-test : " + bad.length + " problème(s)"); bad.slice(0, 20).forEach(function (b) { console.log("  " + b); }); process.exit(1); }
console.log("reprise-test : OK");
