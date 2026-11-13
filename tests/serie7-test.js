"use strict";
// 7th series (Clément, 13/11): foes that run, the fight told at the end, consequences marked for « muettes ».
// Usage: node tests/serie7-test.js
var M = require("../src/moteur.js"), assert = require("assert");
function story(fearless) {
  return {
    id: "s7", title: "Série 7", start: "A", acts: [{ id: "I", title: "I", levels: [1, 3], start: "A" }],
    world: { start: { gold: 10 } },
    enemies: { rat: { name: "Rat", pv: 3, att: 0, def: 0, dmg: 1, fearless: !!fearless } },
    passages: {
      A: { act: "I", title: "La cave", text: ["Des rats."], combat: { enemies: [{ id: "rat", n: 4 }], win: { to: "B" }, lose: { to: "B" } } },
      B: { act: "I", title: "Fin", end: true, text: ["Fin."] },
    },
  };
}
function fight(st) {
  var s = M.freshState(st, {}); s.name = "T"; s.arch = "guerrier"; M.start(st, s);
  for (var g = 0; g < 200 && s.combat; g++) {
    var v = M.view(st, s), c = v.choices.filter(function (x) { return x.ok && !x.sys || x.sys === "attack" || /Attaquer|Frapper/.test(x.label); })[0] || v.choices.filter(function (x) { return x.ok && x.sys !== "flee" && x.sys !== "talk"; })[0];
    M.choose(st, s, c);
  }
  return s;
}
var ran = 0, tales = 0, lastStood = 0;
for (var i = 0; i < 60; i++) {
  var s = fight(story(false));
  var evs = s.events.map(function (e) { return e.text; }).join("\n");
  if (/prend la fuite/.test(evs) || /pris la fuite/.test(evs)) ran++;
  if (s.events.some(function (e) { return e.cls === "tale" && /Le combat a duré/.test(e.text); })) tales++;
  assert.strictEqual(s.node, "B", "le combat se termine");
}
assert(ran > 0, "des rats finissent par fuir");
assert.strictEqual(tales, 60, "chaque combat est raconté à la fin");
for (var j = 0; j < 30; j++) { var s2 = fight(story(true)); assert(!s2.events.some(function (e) { return /fuite/.test(e.text) && !/Le combat/.test(e.text); }), "un ennemi « fearless » ne fuit pas"); }
console.log("serie7-test : OK (" + ran + " combats sur 60 avec une fuite)");
