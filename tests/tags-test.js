"use strict";
// Checks the tags the engine reads on paragraphs and choices: with / without (and "any"), after / before on a flag
// or on a passage, outcome of the test just before, and a thing handed over by the hero who carries it.
// Usage: node tests/tags-test.js
var M = require("../src/moteur.js"), V = require("../src/validateur.js"), assert = require("assert");
var st = {
  id: "t", title: "Test tags", start: "A", leadStart: "enfant",
  acts: [{ id: "I", title: "I", levels: [1, 3], start: "A" }],
  companions: { enfant: { name: "L'enfant", bonus: {} }, hylas: { name: "Hylas", bonus: {} } },
  heroes: { enfant: { player: true }, hylas: { name: "Maître Hylas", arch: "mage", items: ["canne"] } },
  items: { canne: { name: "Canne", kind: "arme", dmg: 3 } },
  passages: {
    A: { act: "I", title: "Départ", text: ["Tu pars.", { with: "any", text: "ACCOMPAGNE" }, { without: "any", text: "SEUL" }, { after: "B", text: "APRES_B" }, { before: "B", text: "AVANT_B" }],
      choices: [{ label: "Hylas te rejoint", once: true, fx: { join: "hylas" }, to: "A" }, { label: "Aller en B", to: "B" }] },
    B: { act: "I", title: "B", text: ["B."],
      choices: [
        { label: "Donner la canne", fx: { drop: "canne" }, to: "C" },
        { label: "Tenter", test: { dom: "social", label: "Parole" }, win: { to: "C" }, lose: { to: "C" } },
        { back: "A" }] },
    C: { act: "I", title: "C", end: true, text: ["C.", { outcome: "win", text: "GAGNE" }, { outcome: "lose", text: "PERDU" }, { without: "hylas", text: "SANS_HYLAS" }] },
  },
};
function txt(s) { return M.view(st, s).text.map(function (t) { return typeof t === "string" ? t : t.text; }).join("|"); }
function pick(s, label) { var c = M.view(st, s).choices.filter(function (c) { return c.label === label; })[0]; assert(c, "choix absent : " + label); M.choose(st, s, c); }
var s = M.freshState(st); s.name = "Aube"; s.arch = "voleur"; M.start(st, s);
assert(/SEUL/.test(txt(s)) && !/ACCOMPAGNE/.test(txt(s)), "without any, seul");
assert(/AVANT_B/.test(txt(s)) && !/APRES_B/.test(txt(s)), "before sur un passage");
// Alone, the cane is in nobody's pack: the choice is closed, since another way exists.
pick(s, "Aller en B");
assert.strictEqual(M.view(st, s).choices.filter(function (c) { return c.label === "Donner la canne"; })[0].ok, false, "canne : fermé sans porteur");
pick(s, "Revenir : Départ");
assert(/APRES_B/.test(txt(s)) && !/AVANT_B/.test(txt(s)), "after sur un passage");
pick(s, "Hylas te rejoint");
assert(/ACCOMPAGNE/.test(txt(s)) && !/SEUL/.test(txt(s)), "with any, accompagné");
pick(s, "Aller en B");
assert.strictEqual(M.view(st, s).choices.filter(function (c) { return c.label === "Donner la canne"; })[0].ok, true, "canne : ouverte, Hylas la porte");
var s2 = JSON.parse(JSON.stringify(s));
pick(s, "Donner la canne");
assert(s.heroes.hylas.items.indexOf("canne") < 0, "canne retirée du sac de Hylas");
assert(!/GAGNE|PERDU/.test(txt(s)), "outcome : rien après un choix simple");
M.setRng(function () { return 0.9; }); pick(s2, "Tenter");
var a = txt(s2); M.setRng(function () { return 0.1; });
var s3 = JSON.parse(JSON.stringify(s)); s3.node = "B"; pick(s3, "Tenter"); var b = txt(s3);
assert(/GAGNE|PERDU/.test(a) && /GAGNE|PERDU/.test(b) && (/GAGNE/.test(a)) !== (/GAGNE/.test(b)), "outcome suit le jet : " + a + " / " + b);
// takes: the scene moves the clock and says so in brackets; the button says it ahead.
var st2 = { id: "t2", title: "T2", start: "A", acts: [{ id: "I", title: "I", levels: [1, 3], start: "A" }], companions: {},
  passages: { A: { act: "I", title: "A", hub: true, text: ["Matin."], choices: [{ label: "Veiller", to: "B" }] },
    B: { act: "I", title: "B", takes: "night", text: ["Les étoiles."], choices: [{ back: "A" }] } } };
var t2 = M.freshState(st2); t2.name = "A"; t2.arch = "voleur"; M.start(st2, t2);
var c2 = M.view(st2, t2).choices[0]; assert.strictEqual(c2.note, "le temps passe : jusqu'à la nuit");
M.choose(st2, t2, c2); assert(M.isNight ? M.isNight(t2) : t2.time % 24 === 22, "nuit");
assert.strictEqual(M.view(st2, t2).text[0], "*(La nuit est tombée.)*");
M.choose(st2, t2, M.view(st2, t2).choices[0]); M.choose(st2, t2, M.view(st2, t2).choices[0]);
assert.notStrictEqual(M.view(st2, t2).text[0], "*(La nuit est tombée.)*", "déjà la nuit : rien ne passe");
// set / is / by: a state with one value at a time.
var s4 = M.freshState(st); M.apply(st, s4, { set: { "x:qui": "pie" } }); M.apply(st, s4, { set: { "x:qui": "hylas" } });
assert(!s4.flags["x:qui=pie"] && s4.flags["x:qui=hylas"], "set remplace la valeur");
assert(M.evalCond(st, s4, { is: { "x:qui": ["hylas", "corbe"] } }) && !M.evalCond(st, s4, { is: { "x:qui": null } }), "is");
var r = V.validate(st, { games: 50 });
assert.deepStrictEqual(r.errors || r.errs || [], [], "validateur");
// via (Clément, 13/11, « Une soirée »): a page opens otherwise according to the choice that led there (its `via`), or
// to the passage left; second: paragraphs, choices and scenes of a second reading (an ending already reached).
var st3 = { id: "v", title: "Via", start: "P", acts: [{ id: "I", title: "I", levels: [1, 1], start: "P" }], world: { start: { hour: 17 } },
  passages: {
    P: { act: "I", title: "Pont", text: ["Le pont.", { second: true, text: "RELU" }], choices: [{ label: "Par la route", via: "route", to: "C" }, { label: "Par le gué", via: "gue", to: "G" }, { label: "Assis{e}", second: true, to: "S" }] },
    G: { act: "I", title: "Gué", text: ["Le gué."], choices: [{ label: "Monter", to: "C" }] },
    C: { act: "I", title: "Cour", text: [{ via: "route", text: "PAR_ROUTE" }, { via: "G", text: "DEPUIS_GUE" }, "La cour."], choices: [{ label: "Attendre", to: "M" }] },
    S: { act: "I", title: "Secret", second: "fin", text: ["S."], choices: [{ label: "Attendre", to: "M" }] },
    M: { act: "I", title: "Minuit", takes: "midnight", end: true, fx: { flag: "fin:fin" }, text: ["Minuit."] },
  } };
var v3 = M.freshState(st3); v3.name = "A"; v3.arch = "voleur"; v3.fem = true; M.start(st3, v3);
assert.strictEqual(v3.time, 17, "world.start.hour");
var pv = M.view(st3, v3);
assert(!/RELU/.test(pv.text.join("|")) && !pv.second && pv.choices.length === 2, "première lecture : rien de la seconde");
M.choose(st3, v3, pv.choices[0]); assert(/PAR_ROUTE/.test(txt3(v3)) && !/DEPUIS_GUE/.test(txt3(v3)), "via d'un choix");
var w3 = M.freshState(st3); w3.name = "A"; w3.arch = "voleur"; M.start(st3, w3);
M.choose(st3, w3, M.view(st3, w3).choices[1]); M.choose(st3, w3, M.view(st3, w3).choices[0]);
assert(/DEPUIS_GUE/.test(txt3(w3)) && !/PAR_ROUTE/.test(txt3(w3)), "via du passage quitté");
assert.strictEqual(M.view(st3, w3).choices[0].note, "le temps passe : jusqu'à minuit");
M.choose(st3, w3, M.view(st3, w3).choices[0]); assert.strictEqual(w3.time % 24, 0, "minuit");
var x3 = M.freshState(st3); x3.name = "A"; x3.arch = "voleur"; x3.fem = true; x3.second = { "fin:fin": 1 }; M.start(st3, x3);
var px = M.view(st3, x3);
assert(/RELU/.test(px.text.join("|")) && px.second && px.second[0] === 1, "seconde lecture : paragraphe marqué");
assert(px.choices.some(function (c) { return c.label === "Assise"; }), "seconde lecture : choix, et accord du bouton");
function txt3(s) { return M.view(st3, s).text.join("|"); }
var r3 = V.validate(st3, { games: 30 });
assert.deepStrictEqual(r3.errors, [], "validateur via/second");
st3.passages.C.text.push({ via: "nulle-part", text: "X" }); st3.passages.G.text.push({ second: "inconnue", text: "X" });
var e3 = V.staticCheck(st3).errors.join("\n");
assert(/via, « nulle-part »/.test(e3) && /second, « inconnue »/.test(e3), "validateur : via et second inconnus");
console.log("tags-test : OK");
