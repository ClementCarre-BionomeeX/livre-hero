"use strict";
// Checks reputation: what one does changes the trust and fear of companions who are not there, without telling it;
// they say a word when they are back at your side. Usage: node tests/reputation-test.js
var M = require("../src/moteur.js"), assert = require("assert");
var st = {
  id: "r", title: "Test réputation", start: "A", acts: [{ id: "I", title: "I", levels: [1, 3], start: "A" }],
  companions: { mara: { name: "Mara", bonus: {} }, tom: { name: "Tom", bonus: {}, rep: { down: "{n} crache par terre en te voyant." } } },
  passages: {
    A: { act: "I", title: "A", text: ["A."], choices: [{ label: "Rencontrer Mara", fx: { join: "mara" }, to: "B" }] },
    B: { act: "I", title: "B", text: ["B."], choices: [{ label: "Mara part en éclaireuse", fx: { leave: "mara" }, to: "C" }] },
    C: { act: "I", title: "C", text: ["C."], choices: [{ label: "Bien agir", fx: { conf: { mara: 10, tom: -5 } }, to: "D" }] },
    D: { act: "I", title: "D", text: ["D."], choices: [{ label: "Retrouver Mara et Tom", fx: { join: ["mara", "tom"] }, to: "E" }] },
    E: { act: "I", title: "E", end: true, text: ["Fin."] },
  },
};
var s = M.freshState(st); s.name = "R"; s.arch = "voleur"; M.start(st, s);
function go(l) { M.choose(st, s, M.view(st, s).choices.filter(function (c) { return c.label === l; })[0]); return s.events.map(function (e) { return e.text; }).join(" | "); }
go("Rencontrer Mara"); go("Mara part en éclaireuse");
var c0 = s.conf.mara, said = go("Bien agir");
assert(!/Mara|Tom/.test(said), "rien de montré pour les absents : " + said);
assert.strictEqual(s.conf.mara, c0 + 10, "la confiance de Mara a monté sans qu'on le dise");
said = go("Retrouver Mara et Tom");
assert(/Mara t'attendait/.test(said) && /Confiance \+10/.test(said), "Mara dit un mot : " + said);
assert(/Tom crache par terre/.test(said) && /Confiance −5/.test(said), "Tom, jamais rencontré, a entendu parler de toi : " + said);
assert.strictEqual(s.conf.tom, 30 - 5, "la réputation compte dès la rencontre");
console.log("reputation-test : OK");
