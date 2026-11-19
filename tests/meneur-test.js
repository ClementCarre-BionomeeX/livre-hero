"use strict";
// A game master's trials (14.6): one hero deals cards to the others, each lays one face down, the cards are turned
// over together. The promises of the engine, on a tiny story for three; then the same story played alone, and played
// at three through src/multi.js.
//   node tests/meneur-test.js
var path = require("path"), assert = require("assert");
var ROOT = path.join(__dirname, ".."), M = require(path.join(ROOT, "src/moteur.js")), MU = require(path.join(ROOT, "src/multi.js")), V = require(path.join(ROOT, "src/validateur.js"));
var n = 0;
function it(name, f) { f(); n++; console.log("ok - " + name); }

function card(titre, type, enseigne) { return { titre: titre, type: type, enseigne: enseigne, rarete: "commune", elan: 0, texte: titre + "." }; }
function story() {
  var hub = function (id, title, e, more) { return Object.assign({ act: "I", title: title, place: "cour", hub: true, noLead: true, epreuve: e, text: ["Devant " + title.toLowerCase() + "."] }, more || {}); };
  return { id: "meneur", title: "Le Meneur", start: "E1", multi: { min: 3, max: 3, meneur: "ange" }, leadStart: "ange",
    acts: [{ id: "I", title: "I", start: "E1" }], quests: [], companions: {
      basile: { name: "Basile", f: false }, salee: { name: "Salée", f: true }, ange: { name: "L'Ange", f: false } },
    heroes: { basile: { name: "Basile", arch: "guerrier", level: 1 }, salee: { name: "Salée", arch: "voleur", level: 1 }, ange: { name: "L'Ange", arch: "barde", level: 1 } },
    teams: { basile: { name: "Basile", start: "E1" }, salee: { name: "Salée", start: "E1" }, ange: { name: "L'Ange", start: "E1" } },
    people: {}, items: {}, enemies: {}, shops: {}, factions: {}, relics: {}, mysteries: {}, clues: {},
    world: { start: { place: "cour" }, places: { cour: { name: "La cour", arrive: "E1" } }, routes: [], regions: {}, events: {} },
    cartes: { cle: card("La Clé", "tresor", "masque"), lampe: card("La Lampe", "revelation", "lanterne"), biche: card("Le Pied-de-biche", "obstacle", "lame"),
      plume: card("La Plume", "presage", "lanterne"), caillou: card("Le Caillou", "obstacle", "racine"), foudre: card("La Foudre", "peril", "lame") },
    epreuves: {
      porte: { titre: "La porte", serrure: "Une porte à deux serrures.", reserve: ["cle", "lampe", "biche", "plume", "caillou", "caillou"], clefs: [["cle", "lampe"], "biche"] },
      grille: { titre: "La grille", serrure: "Une grille haute.", par_joueur: 2, reserve: ["plume", "caillou", "caillou", { carte: "foudre", ferveur: 2 }], clefs: ["foudre", ["plume", "caillou"]],
        signes: { brume: { titre: "La brume", ferveur: 1 } } } },
    passages: {
      E1: hub("E1", "La porte", "porte", { fx: { assign: { basile: "basile", salee: "salee", ange: "ange" }, ferveur: 1 } }),
      I_porte_deux: { act: "I", title: "Ouverte à deux", place: "cour", issue: { epreuve: "porte", paire: ["cle", "lampe"] }, text: ["La clé tourne à la lumière."], choices: [{ label: "Passer", to: "E2", fx: { ferveur: 2 } }] },
      I_porte_force: { act: "I", title: "Forcée", place: "cour", issue: { epreuve: "porte", carte: "biche" }, text: ["Le bois cède."], choices: [{ label: "Passer", to: "E2", fx: { ferveur: 1 } }] },
      I_porte_rate: { act: "I", title: "Fermée", place: "cour", issue: { epreuve: "porte" }, text: ["La porte tient bon. On fait le tour."], choices: [{ label: "Faire le tour", to: "E2" }] },
      E2: hub("E2", "La grille", "grille"),
      I_grille_foudre: { act: "I", title: "Foudroyée", place: "cour", issue: { epreuve: "grille", carte: "foudre" }, text: ["La foudre tombe sur la grille."], choices: [{ label: "Entrer", to: "F_fin" }] },
      I_grille_echelle: { act: "I", title: "Escaladée", place: "cour", issue: { epreuve: "grille", paire: ["plume", "caillou"] }, text: [{ if: { signe: "brume" }, text: "Dans la brume, personne ne voit." }, "On grimpe."], choices: [{ label: "Entrer", to: "F_fin" }] },
      I_grille_rate: { act: "I", title: "Close", place: "cour", issue: { epreuve: "grille" }, text: ["La grille reste close."], choices: [{ label: "Rester dehors", to: "F_dehors" }] },
      F_fin: { act: "I", title: "Dedans", place: "cour", text: ["Dedans."], end: true },
      F_dehors: { act: "I", title: "Dehors", place: "cour", text: ["Dehors."], end: true } } };
}
function solo(st) { var s = M.freshState(st, {}); s.name = "Test"; s.arch = "guerrier"; M.start(st, s); return s; }
function pick(st, s, f) { var c = M.view(st, s).choices.filter(f)[0]; assert.ok(c, "choix introuvable"); M.choose(st, s, c); return c; }
function deal(st, s, d) { pick(st, s, function (c) { return c.sys === "table"; }); Object.keys(d).forEach(function (h) { d[h].forEach(function (k) { pick(st, s, function (c) { return c.sys === "donner" && c.hero === h && c.carte === k; }); }); }); }

it("la petite histoire passe le validateur (épreuves, issues par défaut, réserves)", function () {
  var r = V.staticCheck(story());
  assert.deepStrictEqual(r.errors, []);
});

it("le validateur refuse une épreuve sans issue par défaut, une réserve qui ne peut ouvrir, un meneur inconnu", function () {
  var st = story(); delete st.passages.I_porte_rate; st.epreuves.grille.clefs = ["cle"]; st.multi.meneur = "personne";
  var e = V.staticCheck(st).errors.join("\n");
  assert.ok(/porte.*aucune issue par défaut/.test(e), e);
  assert.ok(/grille.*aucune clef ne peut être donnée/.test(e), e);
  assert.ok(/meneur.*n'est pas un héros/.test(e), e);
});

it("au carrefour d'une épreuve : la table du meneur ; poser et retourner attendent la donne", function () {
  var st = story(), s = solo(st), cs = M.view(st, s).choices;
  assert.ok(cs.some(function (c) { return c.sys === "table" && c.ok; }));
  assert.ok(cs.filter(function (c) { return c.sys === "poser"; }).every(function (c) { return !c.ok && /prépare encore/.test(c.why); }));
  assert.ok(cs.some(function (c) { return c.sys === "retourner" && !c.ok; }));
});

it("une donne que personne ne pourrait ouvrir est refusée, avec la raison ; une moitié de paire chez chacun passe", function () {
  var st = story(), s = solo(st);
  deal(st, s, { basile: ["cle", "lampe"], salee: ["plume"] });
  var v = M.view(st, s), val = v.choices.filter(function (c) { return c.sys === "donneValider"; })[0];
  assert.strictEqual(v.title, "La porte");
  assert.ok(!val.ok && /personne n'a de quoi ouvrir/.test(val.why), val.why);
  pick(st, s, function (c) { return c.sys === "reprendre" && c.carte === "lampe"; });
  pick(st, s, function (c) { return c.sys === "donner" && c.hero === "salee" && c.carte === "lampe"; });
  val = M.view(st, s).choices.filter(function (c) { return c.sys === "donneValider"; })[0];
  assert.ok(val.ok, val.why);
  M.choose(st, s, val);
  assert.strictEqual(s.node, "E1");
  assert.deepStrictEqual(M.jeuFor(st, s, "basile").main, ["cle"]);
  assert.deepStrictEqual(M.jeuFor(st, s, "salee").main, ["plume", "lampe"]);
  assert.ok(M.evalCond(st, s, { donne: "porte" }));
});

it("trop de cartes, ou personne sans carte : refusé ; la donne suggérée est toujours valable", function () {
  var st = story(), s = solo(st);
  deal(st, s, { basile: ["cle", "lampe", "biche"], salee: [] });
  var val = M.view(st, s).choices.filter(function (c) { return c.sys === "donneValider"; })[0];
  assert.ok(!val.ok && /Salée attend encore une carte/.test(val.why), val.why);
  for (var i = 0; i < 30; i++) {
    M.setRng(function () { return (i * 0.137) % 1; });
    pick(st, s, function (c) { return c.sys === "donneSuggeree"; });
    assert.strictEqual(M.dealCheck(st, s, "porte", s.table.d, []), "", JSON.stringify(s.table.d));
  }
  M.setRng(null);
});

it("chacun pose une carte face cachée ; la paire posée par deux l'emporte sur la carte seule", function () {
  var st = story(), s = solo(st);
  deal(st, s, { basile: ["cle", "biche"], salee: ["lampe"] });
  pick(st, s, function (c) { return c.sys === "donneValider"; });
  pick(st, s, function (c) { return c.sys === "poser" && c.hero === "basile"; });
  assert.strictEqual(s.node, "@pose"); assert.strictEqual(s.lead, "basile");
  var v = M.view(st, s); assert.ok(v.hand && v.hand.pose); assert.deepStrictEqual(v.hand.recus, ["cle", "biche"]);
  pick(st, s, function (c) { return c.sys === "carte" && c.carte === "cle"; });
  assert.strictEqual(s.node, "E1");
  assert.ok(!M.view(st, s).choices.filter(function (c) { return c.sys === "retourner"; })[0].ok);
  pick(st, s, function (c) { return c.sys === "poser" && c.hero === "salee"; });
  pick(st, s, function (c) { return c.sys === "carte" && c.carte === "lampe"; });
  pick(st, s, function (c) { return c.sys === "retourner"; });
  assert.strictEqual(s.node, "I_porte_deux");
  assert.ok(M.evalCond(st, s, { issue: "porte", is: "I_porte_deux" }));
});

it("rien de bon posé : l'issue par défaut ; la carte gardée reste en main pour la suite", function () {
  var st = story(), s = solo(st);
  deal(st, s, { basile: ["cle", "biche"], salee: ["lampe"] });
  pick(st, s, function (c) { return c.sys === "donneValider"; });
  pick(st, s, function (c) { return c.sys === "poser" && c.hero === "basile"; });
  pick(st, s, function (c) { return c.sys === "carte" && c.carte === "cle"; });
  pick(st, s, function (c) { return c.sys === "poser" && c.hero === "salee"; });
  pick(st, s, function (c) { return c.sys === "carte" && c.carte === "@passer"; });
  pick(st, s, function (c) { return c.sys === "retourner"; });
  assert.strictEqual(s.node, "I_porte_rate");
  assert.deepStrictEqual(M.jeuFor(st, s, "basile").main, ["biche"]);
});

it("la ferveur paie les cartes rares et les signes ; trop chères, la donne est refusée", function () {
  var st = story(), s = solo(st);
  assert.strictEqual(M.fervour(s), 1);
  deal(st, s, { basile: ["biche"], salee: ["plume"] });
  pick(st, s, function (c) { return c.sys === "donneValider"; });
  ["basile", "salee"].forEach(function (h) { pick(st, s, function (c) { return c.sys === "poser" && c.hero === h; }); pick(st, s, function (c) { return c.sys === "carte" && c.carte === "@passer"; }); });
  pick(st, s, function (c) { return c.sys === "retourner"; });
  pick(st, s, function (c) { return c.ok; });
  assert.strictEqual(s.node, "E2"); assert.strictEqual(M.fervour(s), 1);
  deal(st, s, { basile: ["foudre"], salee: ["caillou"] });
  var val = M.view(st, s).choices.filter(function (c) { return c.sys === "donneValider"; })[0];
  assert.ok(!val.ok && /2 de ferveur \(tu en as 1\)/.test(val.why), val.why);
  M.apply(st, s, { ferveur: 2 });
  pick(st, s, function (c) { return c.sys === "signe" && c.signe === "brume"; });
  assert.strictEqual(M.dealCheck(st, s, "grille", s.table.d, s.table.sg), "");
  pick(st, s, function (c) { return c.sys === "donneValider"; });
  assert.strictEqual(M.fervour(s), 0);
  assert.ok(M.evalCond(st, s, { signe: "brume" }));
  assert.ok(M.evalCond(st, s, { ferveur: true, max: 0 }));
});

it("seul, la partie va au bout à chaque fois (300 parties au hasard)", function () {
  var st = story();
  for (var g = 0; g < 300; g++) {
    var x = (g + 1) * 2654435761 % 4294967296; M.setRng(function () { x = (x * 1664525 + 1013904223) % 4294967296; return x / 4294967296; });
    var s = solo(st), steps = 0;
    while (!st.passages[s.node] || !st.passages[s.node].end) {
      var ok = M.view(st, s).choices.filter(function (c) { return c.ok; });
      assert.ok(ok.length, "bloqué en " + s.node);
      M.choose(st, s, ok[Math.floor(Math.random() * ok.length) % ok.length]);
      if (++steps > 2000) throw new Error("partie sans fin en " + s.node);
    }
  }
  M.setRng(null);
});

// ---- at three, through src/multi.js
function table(st, rnd) {
  M.setRng(rnd);
  var sh = M.freshState(st, {}); sh.name = "Test"; sh.arch = "guerrier"; M.start(st, sh);
  var g = MU.create(st, [{ id: "a", name: "Léo", heroes: ["basile"] }, { id: "b", name: "Mila", heroes: ["salee"] }, { id: "c", name: "Papa", heroes: ["ange"] }], sh);
  MU.refreshWaits(st, g); return g;
}
function choose(st, g, pid, f) { var c = MU.view(st, g, pid).choices.filter(function (x) { return x.ok && f(x); })[0]; assert.ok(c, pid + " : choix introuvable en " + MU.player(g, pid).s.node); MU.choose(st, g, pid, c); }

it("à trois : les enfants attendent la donne, la reçoivent à la synchro, posent, et retournent ensemble", function () {
  var st = story(), g = table(st, Math.random);
  assert.ok(MU.player(g, "a").wait && MU.player(g, "b").wait, "les enfants attendent");
  var cs = MU.view(st, g, "a").choices; assert.ok(cs.filter(function (c) { return c.sys === "table"; }).every(function (c) { return !c.ok; }), "la table est au meneur");
  choose(st, g, "c", function (c) { return c.sys === "table"; });
  ["cle", "biche"].forEach(function (k) { choose(st, g, "c", function (c) { return c.sys === "donner" && c.hero === "basile" && c.carte === k; }); });
  choose(st, g, "c", function (c) { return c.sys === "donner" && c.hero === "salee" && c.carte === "lampe"; });
  choose(st, g, "c", function (c) { return c.sys === "donneValider"; });
  assert.ok(MU.allWaiting(g));
  MU.sync(st, g);
  assert.deepStrictEqual(MU.player(g, "a").s.jeu.main, ["cle", "biche"]);
  assert.deepStrictEqual(MU.player(g, "b").s.jeu.main, ["lampe"]);
  assert.ok(MU.player(g, "c").wait, "le meneur attend les cartes posées");
  choose(st, g, "a", function (c) { return c.sys === "poser"; });
  choose(st, g, "a", function (c) { return c.sys === "carte" && c.carte === "cle"; });
  choose(st, g, "b", function (c) { return c.sys === "poser"; });
  choose(st, g, "b", function (c) { return c.sys === "carte" && c.carte === "lampe"; });
  assert.ok(MU.allWaiting(g));
  MU.sync(st, g);
  ["a", "b", "c"].forEach(function (pid) { choose(st, g, pid, function (c) { return c.sys === "retourner"; }); assert.strictEqual(MU.player(g, pid).s.node, "I_porte_deux"); });
  ["a", "b", "c"].forEach(function (pid) { choose(st, g, pid, function (c) { return c.label === "Passer"; }); });
  MU.sync(st, g);
  assert.strictEqual(M.fervour(MU.player(g, "c").s), 3, "la ferveur d'une page lue par trois joueurs ne compte qu'une fois");
  M.setRng(null);
});

it("à trois, au hasard : 200 parties vont au bout sans blocage", function () {
  var st = story();
  for (var k = 0; k < 200; k++) {
    var x = (k + 7) * 2246822519 % 4294967296, rnd = function () { x = (x * 1664525 + 1013904223) % 4294967296; return x / 4294967296; };
    var g = table(st, rnd), steps = 0, rep = {};
    while (steps < 5000) {
      var moved = false;
      g.players.forEach(function (p) {
        for (var i = 0; i < 300 && !p.wait; i++) {
          var ok = MU.view(st, g, p.id).choices.filter(function (c) { return c.ok && !c.restart; }); if (!ok.length) break;
          MU.choose(st, g, p.id, ok[Math.floor(rnd() * ok.length)]); steps++; moved = true;
        }
      });
      if (MU.allWaiting(g)) { rep = MU.sync(st, g); if (rep.stuck || rep.over) break; } else if (!moved) throw new Error("personne ne bouge");
    }
    assert.ok(rep.over, "partie " + k + " : " + g.players.map(function (p) { return p.s.node; }).join(", "));
  }
  M.setRng(null);
});

console.log(n + " vérifications.");
