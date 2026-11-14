"use strict";
// Checks the engine of « Le siège » (8.0) on a small story: the city's stocks eaten day after day under the ration in
// force (and rotting), the world that moves on (march, a scene imposed at its hour, the clock stopped on it), a quest
// with a date, prices that follow scarcity, a promise and a debt (made, paid back where the creditor is, broken at its
// term, the creditor who comes), a council vote (a member swayed, the hero's voice, the count), camps that close doors,
// ties found, a pitched battle (placement, orders, outcome) and the epilogue.
// Usage: node tests/siege-test.js
var M = require("../src/moteur.js"), V = require("../src/validateur.js"), assert = require("assert");
function story() {
  return {
    id: "sg", title: "Siège", start: "H", acts: [{ id: "I", title: "I", levels: [1, 1], start: "H" }, { id: "II", title: "II", levels: [1, 1], start: "Z" }],
    world: { start: { place: "halle", hour: 8, gold: 100 }, places: { halle: { name: "La Halle", arrive: "H" } } },
    stocks: {
      ble: { name: "Blé", unit: "setier", plural: "setiers", start: 100, by: "rations", eat: { pleine: 20, demi: 10 }, extra: [{ if: { has: "refugies" }, n: 5 }], spoil: { every: 2, share: 0.1, if: { has: "toit" } }, pill: true },
      moral: { name: "Moral", start: 50, max: 100, eat: -1 },
    },
    march: [
      { id: "truie", at: { day: 2, hour: 8 }, say: "LA_TRUIE", title: "La Truie est montée" },
      { id: "conseil", at: { day: 1, hour: 18 }, to: "C", acts: ["I"] },
      { id: "assaut", at: { day: 3, hour: 7 }, to: "B", acts: ["I"] },
    ],
    quests: [{ id: "q", act: "I", kind: "annexe", title: "Brûler la Truie", start: "Q", due: { day: 2, hour: 12 } }],
    people: {
      cap: { name: "Le capitaine", camp: "garnison" }, dame: { name: "Dame Aliénor", f: true, camp: "jures" }, tri: { name: "Gilles", at: [{ place: "halle", see: "GILLES_LA" }] },
      lom: { name: "Le Lombard", at: [{ place: "halle", see: "LOMBARD_LA" }] },
    },
    promises: {
      pret: { kind: "dette", to: "lom", text: "Rendre l'argent du Lombard", gold: 30, due: { day: 3, hour: 12 }, collect: "R" },
      gens: { to: "tri", text: "Garder les réfugiés", breaks: { vote: "exp", is: "adopte" }, keeps: { vote: "exp", is: "rejete" } },
    },
    councils: { herse: { title: "Le Conseil", hero: true, members: { cap: {}, dame: {}, tri: { absent: { has: "tri:prison" } } } } },
    motions: { exp: { council: "herse", title: "L'expulsion", text: "MOTION", lean: { cap: "pour", dame: "pour", tri: "contre" }, say: { tri: { contre: "JAMAIS" } }, fx: { adopte: { flag: "expulses" } } } },
    camps: { garnison: { name: "La garnison", leader: "cap" }, jures: { name: "Les jurés", leader: "dame" } },
    ties: [{ id: "t1", a: "dame", b: "cap", kind: "ennemi", label: "Elle le hait" }],
    battles: { b: { title: "La porte", posts: [{ id: "porte", name: "La porte", def: 1, key: true }, { id: "mur", name: "Le mur", def: 1 }],
      troops: [{ id: "milice", name: "La milice", force: 3 }, { id: "arb", name: "Les arbalétriers", force: 2, if: { has: "arb" } }],
      waves: [{ text: "VAGUE_UN", hits: { porte: 2, mur: 1 } }, { text: "VAGUE_DEUX", hits: { porte: 3 } }],
      orders: [{ id: "poix", label: "Verser la poix", post: "porte", def: 4, once: true }],
      win: { to: "F_ok" }, lose: { to: "F_non" } } },
    shops: { m: { scarce: "ble", sells: [{ item: "pain", price: 10 }, { item: "vin", price: 5, if: { has: "vin" } }], moves: [{ if: { has: "marche:truie" }, x: 2, say: "PRIX_MONTENT" }] } },
    items: { pain: { name: "Pain", kind: "vivres", price: 10, unique: false }, vin: { name: "Vin", price: 5 } },
    epilogue: [{ if: { has: "expulses" }, text: "EPI_EXPULSES" }, { if: { not: { has: "expulses" } }, text: "EPI_GARDES" }],
    passages: {
      H: { act: "I", title: "La Halle", place: "halle", hub: true, shop: "m", text: ["La Halle."],
        choices: [{ label: "Demi-ration", hide: { is: { rations: "demi" } }, fx: { set: { rations: "demi" } }, to: "H" }, { label: "Attendre", takes: 4, to: "H" },
          { label: "Emprunter", hide: { promise: "pret" }, fx: { promise: "pret", gold: 30 }, to: "H" }, { label: "Promettre", hide: { promise: "gens" }, fx: { promise: "gens" }, to: "H" },
          { label: "Convaincre la dame", fx: { sway: { exp: { dame: "contre" } } }, to: "H" }, { label: "Rallier la garnison", fx: { camp: "garnison", tie: "t1" }, to: "H" },
          { label: "Souper chez les jurés", camp: "jures", to: "H" }, { label: "Brûler la Truie", to: "Q" }] },
      Q: { act: "I", title: "La Truie", text: ["Q"], choices: [{ label: "Feu", fx: { quest: "q" }, back: "H" }] },
      C: { act: "I", title: "Séance", text: ["SEANCE"], council: { motion: "exp", to: "H" } },
      R: { act: "I", title: "Le Lombard vient", creditor: "lom", text: ["COLLECTE"], choices: [{ label: "Partir", to: "H" }] },
      B: { act: "I", title: "L'assaut", text: ["ALERTE"], battle: "b" },
      Z: { act: "II", title: "Après", text: ["Z"], choices: [{ label: "Fin", to: "F_ok" }] },
      F_ok: { act: "II", title: "Tenu", end: true, epilogue: true, fx: { flag: "fin:ok" }, text: ["TENU"] },
      F_non: { act: "II", title: "Perdu", end: true, epilogue: true, fx: { flag: "fin:non" }, text: ["PERDU"] },
    },
  };
}
function fresh(st) { var s = M.freshState(st); s.name = "A"; s.arch = "guerrier"; M.start(st, s); return s; }
function txt(st, s) { return M.view(st, s).text.join("|"); }
function view(st, s) { return M.view(st, s); }
function pick(st, s, label) { var c = view(st, s).choices.filter(function (c) { return c.label.indexOf(label) === 0; })[0]; assert(c, "choix absent : " + label + " dans " + view(st, s).choices.map(function (c) { return c.label; }).join(" / ")); M.choose(st, s, c); return s; }
function labels(st, s) { return view(st, s).choices.map(function (c) { return c.label; }); }
function evs(s) { return s.events.map(function (e) { return e.text; }).join("|"); }

// The validator knows the new keys and finds nothing wrong in this story.
var rep = V.staticCheck(story()); assert.deepStrictEqual(rep.errors, [], "validateur : " + rep.errors.join(" ; "));
var st = story(), s = fresh(st);
assert.strictEqual(M.stockNow(st, s, "ble"), 100);
assert.strictEqual(M.dailyUse(st, s, "ble"), 0, "sans ration en vigueur ni default, rien");
pick(st, s, "Demi-ration"); assert.strictEqual(M.daysLeft(st, s, "ble"), 10, "demi : 10 par jour");
// The shop: prices follow the stock; an item appears with its condition.
assert(labels(st, s).some(function (l) { return /Acheter Pain · 10/.test(l); }), "prix de base : " + labels(st, s).join(" / "));
assert(!labels(st, s).some(function (l) { return /Vin/.test(l); }), "étal sous condition");
// A promise and a debt.
pick(st, s, "Emprunter"); assert(s.promises.pret.state === "en cours" && s.gold === 130);
pick(st, s, "Promettre");
// The Lombard is here: the debt can be paid back here; keep it for now.
assert(labels(st, s).some(function (l) { return /^Rembourser le Lombard/.test(l); }), "rembourser où est le créancier : " + labels(st, s).join(" / "));
// A member swayed: known, and counted at the vote.
pick(st, s, "Convaincre la dame"); assert.strictEqual(M.leanOf(st, s, "exp", "dame"), "contre");
// A camp closes the rival's doors and is noted on the button.
var rally = view(st, s).choices.filter(function (c) { return c.label === "Rallier la garnison"; })[0]; assert(/choix de camp/.test(rally.note), "note du choix de camp");
assert(labels(st, s).indexOf("Souper chez les jurés") >= 0, "avant de choisir : les jurés");
pick(st, s, "Rallier la garnison"); assert(labels(st, s).indexOf("Souper chez les jurés") < 0, "après : porte fermée");
assert(M.tiesKnown(st, s).length === 1, "lien trouvé");
// The world moves on: waiting from 8 h, four hours at a time; at 18 h the council's session opens, at its hour.
pick(st, s, "Attendre"); pick(st, s, "Attendre"); assert.strictEqual(s.time % 24, 16);
pick(st, s, "Attendre"); assert.strictEqual(s.node, "C", "séance imposée"); assert.strictEqual(s.time % 24, 18, "l'horloge s'arrête à l'heure de la séance");
// The vote: the captain pour, the lady contre (swayed), Gilles contre; the hero's voice decides nothing; rejected.
pick(st, s, "Passer au vote"); assert.strictEqual(s.node, "@conseil"); assert(/JAMAIS/.test(txt(st, s)), "réplique du membre");
pick(st, s, "Voter pour"); assert(/rejetée/.test(txt(st, s)), "compte : " + txt(st, s));
pick(st, s, "Continuer"); assert.strictEqual(s.node, "H"); assert(s.votes.exp.result === "rejete" && s.flags["vote-exp=rejete"]);
assert.strictEqual(s.promises.gens.state, "tenue", "promesse tenue par le vote");
// Night passes: the day's bread is eaten; the march's line; prices double.
pick(st, s, "Attendre"); pick(st, s, "Attendre"); pick(st, s, "Attendre"); pick(st, s, "Attendre");
assert.strictEqual(M.stockNow(st, s, "ble"), 90, "un jour à demi-ration");
assert.strictEqual(M.stockNow(st, s, "moral"), 51, "une jauge qui monte");
pick(st, s, "Attendre"); pick(st, s, "Attendre"); assert(s.flags["marche:truie"], "le monde avance");
assert(/PRIX_MONTENT/.test(txt(st, s)), "le marché le dit");
assert(labels(st, s).some(function (l) { return /Acheter Pain · 2/.test(l); }), "prix doublés : " + labels(st, s).join(" / "));
// The quest's date passed: missed.
assert(s.time >= 24 + 12 && M.questMissed(st, s, st.quests[0]), "quête manquée à sa date");
// The debt's term passes: broken, the creditor comes; but first the assault at dawn of day 3.
while (s.node !== "B") pick(st, s, "Attendre");
assert(/ALERTE/.test(txt(st, s)));
M.setRng(function () { return 0.99; });
pick(st, s, "Disposer"); assert.strictEqual(s.node, "@bataille");
pick(st, s, "La porte"); pick(st, s, "La porte"); // the militia, then the hero, at the gate
assert(/VAGUE_UN/.test(txt(st, s)) && view(st, s).battle.posts.length === 2);
assert(labels(st, s).indexOf("Verser la poix") >= 0, "ordre propre à la bataille");
pick(st, s, "Verser la poix"); assert(labels(st, s)[0] === "La vague suivante");
pick(st, s, "La vague suivante"); assert(labels(st, s).indexOf("Verser la poix") < 0, "ordre unique");
pick(st, s, "Tenir"); pick(st, s, "Voir l'issue");
M.setRng(null);
assert.strictEqual(s.battles.b.out, "win"); assert(s.flags["bataille-b=gagnee"]);
assert.strictEqual(s.node, "F_ok");
assert(/EPI_GARDES/.test(txt(st, s)) && !/EPI_EXPULSES/.test(txt(st, s)), "épilogue");

// A broken debt: the creditor's scene comes at the term.
var s2 = fresh(st);
pick(st, s2, "Emprunter"); s2.marched = { conseil: {}, truie: {}, assaut: {} }; s2.time = 2 * 24 + 11; pick(st, s2, "Attendre");
assert.strictEqual(s2.promises.pret.state, "rompue"); assert.strictEqual(s2.regard.lom, "trahi");
assert.strictEqual(s2.node, "R", "le créancier vient : " + s2.node);
console.log("siege-test : OK");
