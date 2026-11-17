"use strict";
// Checks the engine of « L'Île Folle-Aiguille » (10.9) on a small story: a port of call that opens on arrival and closes
// its quests when the ship weighs anchor (with the button saying what is left undone), the named crew and its leanings
// (recruited, lost, guessed, counted), and the line that says what a quest owes to another book.
// Usage: node tests/escales-test.js
var M = require("../src/moteur.js"), V = require("../src/validateur.js"), assert = require("assert");
function story() {
  return {
    id: "es", title: "Escales", start: "PONT", acts: [{ id: "I", title: "I", levels: [1, 1], start: "PONT" }],
    world: { start: { place: "pont", hour: 8, gold: 10 }, places: { pont: { name: "Le pont", arrive: "PONT" }, rade: { name: "La rade de Brise", arrive: "MOUILLAGE" } } },
    people: {
      gobert: { name: "Maître Gobert", f: false, desc: "Le bosco." },
      lagadec: { name: "Isidore Lagadec", f: false, desc: "Un matelot." },
      tarlet: { name: "Simon Tarlet", f: false, desc: "Un matelot." },
    },
    equipage: { title: "L'équipage", marins: { gobert: { poste: "bosco", penchant: 3, abord: true }, lagadec: { poste: "matelot", penchant: -3, abord: true }, tarlet: { poste: "matelot", penchant: 0 } } },
    escales: { brise: { name: "Brise", at: "rade", quests: ["q_puits"], depart: { label: "Lever l'ancre pour le large", to: "LARGE" } } },
    sources: { mondeperdu: { title: "Le Monde perdu", author: "Arthur Conan Doyle" } },
    quests: [{ id: "q_puits", act: "I", title: "Le puits de Brise", start: "PUITS", doit: "mondeperdu" }],
    passages: {
      PONT: { act: "I", title: "Le pont", place: "pont", hub: true, text: ["PONT", { if: { equipage: "complot", min: 1 }, text: "UN_TRAITRE" }, { if: { marin: "tarlet", is: "abord" }, text: "TARLET_ABORD" }],
        choices: [{ label: "Engager Tarlet", hide: { marin: "tarlet" }, fx: { recrue: "tarlet" }, to: "PONT" },
          { label: "Parler à Tarlet", if: { marin: "tarlet" }, fx: { penche: { tarlet: 2 }, devine: "tarlet" }, to: "PONT" },
          { label: "Gagner Lagadec", fx: { penche: { lagadec: 5 } }, to: "PONT" },
          { label: "Jeter Lagadec à l'eau", fx: { perte: "lagadec" }, to: "PONT" },
          { label: "Mouiller à Brise", to: "MOUILLAGE" }] },
      MOUILLAGE: { act: "I", title: "La rade de Brise", place: "rade", escale: "brise", hub: true, text: ["RADE", { if: { escale: "brise" }, text: "AU_MOUILLAGE" }],
        choices: [{ label: "Aller au puits", to: "PUITS" }] },
      PUITS: { act: "I", title: "Le puits", text: ["PUITS"], choices: [{ label: "Descendre", fx: { quest: "q_puits" }, to: "MOUILLAGE" }, { back: "MOUILLAGE" }] },
      LARGE: { act: "I", title: "Le large", end: true, text: ["LARGE", { if: { escale: "brise", is: "quittee" }, text: "BRISE_QUITTEE" }] },
    },
  };
}
function fresh(st) { M.setRng(function () { return 0.01; }); var s = M.freshState(st); s.name = "A"; s.arch = "guerrier"; M.start(st, s); return s; }
function txt(st, s) { return M.view(st, s).text.join("|"); }
function labels(st, s) { return M.view(st, s).choices.map(function (x) { return x.label; }); }
function pick(st, s, l) { var v = M.view(st, s), c = v.choices.filter(function (x) { return x.label.indexOf(l) === 0; })[0]; assert(c, "choix « " + l + " » absent : " + labels(st, s).join(" / ")); M.choose(st, s, c); }
function evs(s) { return s.events.map(function (e) { return e.text; }).join("|"); }

var rep = V.validate(JSON.parse(JSON.stringify(story())), { games: 60 });
assert.deepStrictEqual(rep.errors, [], rep.errors.join("\n"));

// The crew: two aboard from the start, one who leans to the plot.
var st = story(), s = fresh(st);
assert(txt(st, s).indexOf("UN_TRAITRE") >= 0, "un marin au complot");
assert(txt(st, s).indexOf("TARLET_ABORD") < 0);
assert.strictEqual(M.crewCount(st, s, "abord"), 2);
pick(st, s, "Engager Tarlet");
assert(/Simon Tarlet embarque \(matelot\)/.test(evs(s)), evs(s));
assert.strictEqual(M.crewCount(st, s, "abord"), 3);
assert(txt(st, s).indexOf("TARLET_ABORD") >= 0);
// Guessing a leaning: the notebook shows what the hero believes, as it was then.
pick(st, s, "Parler à Tarlet");
var tv = M.crewView(st, s).filter(function (x) { return x.id === "tarlet"; })[0];
assert.strictEqual(tv.vu, "loyal"); assert.strictEqual(tv.word, "fidèle");
assert.strictEqual(M.crewView(st, s).filter(function (x) { return x.id === "lagadec"; })[0].word, null, "un penchant pas deviné reste inconnu");
// Leanings are bounded and move the counts.
pick(st, s, "Gagner Lagadec");
assert.strictEqual(M.crewCount(st, s, "complot"), 0);
assert.strictEqual(s.crew.lagadec.p, 2, "penchant borné à ±3");
assert(txt(st, s).indexOf("UN_TRAITRE") < 0);
// A lost sailor no longer counts aboard, and the notebook keeps him among the lost.
pick(st, s, "Jeter Lagadec");
assert.strictEqual(M.crewCount(st, s, "abord"), 2);
assert(M.crewView(st, s).some(function (x) { return x.id === "lagadec" && x.perdu; }));

// The port of call: arriving marks it, its quest begun and left undone shows on the button, leaving closes it.
pick(st, s, "Mouiller à Brise");
assert(txt(st, s).indexOf("AU_MOUILLAGE") >= 0);
assert(labels(st, s).indexOf("Lever l'ancre pour le large") >= 0, labels(st, s).join(" / "));
pick(st, s, "Aller au puits");
pick(st, s, "Revenir");
assert(labels(st, s).some(function (l) { return /Lever l'ancre pour le large · des affaires resteront en suspens/.test(l); }), labels(st, s).join(" / "));
pick(st, s, "Lever l'ancre");
assert.strictEqual(s.node, "LARGE");
assert(txt(st, s).indexOf("BRISE_QUITTEE") >= 0);
var Q = st.quests[0];
assert.strictEqual(M.questState(s, Q, st), "manquée", "la quête de l'escale est manquée une fois l'escale quittée");

// The quest done before leaving: the line that names the book it owes something to, once.
var st2 = story(), s2 = fresh(st2);
pick(st2, s2, "Mouiller à Brise"); pick(st2, s2, "Aller au puits"); pick(st2, s2, "Descendre");
var doit = s2.events.filter(function (e) { return e.cls === "doit"; });
assert.strictEqual(doit.length, 1);
assert.strictEqual(doit[0].book, "mondeperdu");
assert(/Cette histoire doit quelque chose à \*Le Monde perdu\*, de Arthur Conan Doyle\./.test(doit[0].text), doit[0].text);
assert(labels(st2, s2).indexOf("Lever l'ancre pour le large") >= 0, "rien en suspens : le bouton reste simple");

// The validator refuses an unknown sailor, port, or a debt to a book without its source.
var bad = story();
bad.passages.PONT.choices.push({ label: "X", fx: { recrue: "personne" }, to: "PONT" });
bad.passages.PONT.text.push({ if: { escale: "nulle" }, text: "X" });
bad.quests[0].doit = "inconnu";
var r2 = V.staticCheck(M.prepare(JSON.parse(JSON.stringify(bad))));
assert(r2.errors.some(function (e) { return /marin « personne » inconnu/.test(e); }), r2.errors.join("\n"));
assert(r2.errors.some(function (e) { return /escale « nulle » inconnue/.test(e); }), r2.errors.join("\n"));
assert(r2.errors.some(function (e) { return /doit « inconnu » sans sources/.test(e); }), r2.errors.join("\n"));
console.log("escales-test : ok");
