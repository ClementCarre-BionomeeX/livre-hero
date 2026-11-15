"use strict";
// Every mechanism of 7.8-8.6 in one small story, with combat, a companion and a road (Clément, 15/11, piste 6): each was
// born in one story; this checks they play together, so that any story can take them without surprise.
// Usage: node tests/ensemble-test.js
var M = require("../src/moteur.js"), V = require("../src/validateur.js"), assert = require("assert");
function story() {
  return {
    id: "ens", title: "Ensemble", start: "H",
    acts: [{ id: "I", title: "I", levels: [1, 1], start: "H" }, { id: "II", title: "II", levels: [1, 2], start: "Z" }],
    // 8.5: the story's own calling.
    voies: { commis: { label: "Commis", labelF: "Commise", like: "guerrier", bonus: { savoir: 10 }, kit: ["lampe"] } },
    voie: "commis",
    world: {
      start: { place: "halle", hour: 8, gold: 60, food: 3 },
      places: { halle: { name: "La Halle", arrive: "H" }, port: { name: "Le port", arrive: "P" } },
      routes: [{ id: "r", name: "La route du port", from: "halle", to: "port", steps: 2, region: "plaine", label: "Aller au port", labelBack: "Revenir à la Halle", legs: [{ step: 1, passage: "E_loup" }] }],
      regions: { plaine: { name: "La plaine", chance: 0, tiring: 1, events: [], quiet: ["La route."], camp: ["Un feu."] } },
      events: {},
    },
    // 8.1: weather, seasons, wounds, encounters, vigils.
    seasons: [{ id: "ete", name: "L'été" }, { id: "automne", name: "L'automne", from: { day: 3, hour: 0 } }],
    // The sky follows the roads (piste 10): rain on the plain, and the rain may wound.
    weather: { by: "route", every: 2, start: "beau", kinds: { beau: { name: "Beau temps" }, pluie: { name: "Pluie", mod: { combat: -10 }, say: "IL_PLEUT", hurts: { wound: "bras", chance: 1, say: "TU_GLISSES" } } },
      regions: { lieu: { beau: 1 }, plaine: { pluie: 1 } } },
    wounds: { bras: { name: "Bras entaillé", mod: { combat: -10 }, days: 2, tended: 1, scar: "une ligne", mark: "cicatrice" } },
    encounters: { by: "zone", every: 4, chance: 1, list: [{ to: "E_mendiant", region: "ville", once: true }] },
    vigils: [{ to: "V_oriane", with: "oriane" }],
    companions: { oriane: { name: "Oriane", f: true, bonus: { combat: 20 }, pv: 10 } },
    enemies: { loup: { name: "Loup", pv: 6, att: 10, def: 5, dmg: 2 } },
    // 8.0: stocks, the world on the march, promises, a council, a battle, the epilogue.
    stocks: { ble: { name: "Blé", unit: "setier", plural: "setiers", start: 100, by: "rations", eat: { pleine: 20, demi: 10 }, pill: true } },
    march: [{ id: "conseil", at: { day: 1, hour: 18 }, to: "C", acts: ["I"] }, { id: "assaut", at: { day: 3, hour: 7 }, to: "B", acts: ["I"] }],
    people: { cap: { name: "Le capitaine" }, val: { name: "Valérien" }, lom: { name: "Le Lombard", at: [{ place: "halle", see: "LOMBARD_LA" }] },
      odile: { name: "Odile", f: true } },
    promises: { pret: { kind: "dette", to: "lom", text: "Rendre l'argent du Lombard", gold: 20, due: { day: 3, hour: 6 } } },
    councils: { herse: { title: "Le Conseil", hero: true, members: { cap: {}, lom: {} } } },
    motions: { exp: { council: "herse", title: "Fermer les portes", text: "MOTION", lean: { cap: "pour", lom: "contre" }, fx: { adopte: { flag: "portes" } } } },
    battles: { b: { title: "La porte", posts: [{ id: "porte", name: "La porte", def: 1, key: true }],
      troops: [{ id: "milice", name: "La milice", force: 3 }], waves: [{ text: "VAGUE", hits: { porte: 2 } }],
      orders: [{ id: "poix", label: "Verser la poix", post: "porte", def: 4, once: true }], win: { to: "Z" }, lose: { to: "Z" } } },
    epilogue: [{ if: { has: "portes" }, text: "EPI_PORTES" }, { if: { not: { has: "portes" } }, text: "EPI_OUVERTES" }],
    // 8.2: practice, a trait, a duel, a puzzle, dreams.
    practice: { every: 2, step: 5, max: 10 },
    traits: { audace: { name: "L'audace", low: "Prudent{e}", high: "Téméraire" } },
    duels: { d1: { title: "Le duel", foe: "val", touches: 2, dom: "combat", win: { to: "H" }, lose: { to: "H" } } },
    puzzles: { cad: { kind: "molettes", title: "Le cadenas", text: "CADENAS", wheels: [["A", "B"], ["X", "Y"]], answer: ["B", "Y"], tries: 3, win: { to: "H" }, lose: { to: "H" } } },
    dreams: [{ to: "R1" }],
    // 8.3: accounts, a memory, silence, deeds, dread.
    topics: { nuit: { title: "La nuit du feu" } },
    accounts: { v_odile: { by: "odile", topic: "nuit", text: "Je dormais.", true: false, belie: "O_doute" } },
    gestes: { mensonge: { name: "Mentir au capitaine", poids: 2, echoes: ["ECHO"] } },
    dread: { name: "Angoisse", start: 1, max: 10, trouble: 5, sleep: -3, mod: { from: 5, per: -2 }, panic: { to: "PANIQUE" } },
    // 8.6: words with effects, finds, the page's mood.
    items: { lampe: { name: "La lampe" } },
    keywords: { setier: { forms: ["setier", "setiers"], def: "Une mesure de grain." } },
    trouvaillesName: "lettres d'or",
    trouvailles: { a: { title: "Un A", fx: { ep: 100 } } },
    passages: {
      H: { act: "I", title: "La Halle", place: "halle", hub: true, routes: true, veillee: true, fx: { set: { zone: "ville" } },
        text: ["La Halle sent le {{cle:setier|grain}} et la pluie.", "Une {{or:a|A}} gravée dans la poutre. {{fx:tremble|Les portes grincent.}}",
          { if: { item: "lampe" }, text: "{{encre:lampe|Sous la lampe, une date au mur.}}" }, { trouble: true, text: "TROUBLE" }],
        choices: [
          { label: "Demi-ration", hide: { is: { rations: "demi" } }, fx: { set: { rations: "demi" } }, to: "H" },
          { label: "Emprunter", hide: { promise: "pret" }, fx: { promise: "pret", gold: 20 }, to: "H" },
          { label: "Oser", fx: { trait: { audace: 2 } }, to: "H" },
          { label: "S'entraîner", fx: { pratique: { combat: 2 } }, to: "H" },
          { label: "Prendre Oriane", hide: { has: "oriane:la" }, fx: { join: "oriane", flag: "oriane:la" }, to: "H" },
          { label: "Duel", hide: { duel: "d1" }, to: "D" }, { label: "Cadenas", to: "Z1" },
          { label: "Écouter Odile", hide: { recit: "v_odile" }, fx: { recit: "v_odile" }, to: "O" },
          { label: "Se souvenir", takes: 1, to: "S1" },
          { label: "Mentir", hide: { geste: "mensonge" }, fx: { geste: "mensonge", angoisse: 3 }, to: "H" },
          { label: "Se blesser", fx: { blessure: "bras" }, to: "H" },
          { label: "Avoir peur", fx: { angoisse: 4 }, to: "H" },
          { label: "Attendre", takes: 4, to: "H" },
          { label: "Dormir", takes: "morning", fx: { rest: true }, to: "N" }] },
      P: { act: "I", title: "Le port", place: "port", hub: true, routes: true, fx: { set: { zone: "dehors" } }, text: ["PORT"], choices: [{ label: "Attendre", takes: 4, to: "P" }] },
      E_loup: { act: "I", title: "Le loup", text: ["Un loup sur la route, {{fx:ondule|la queue basse}}."], combat: { enemies: [{ id: "loup", n: 1 }], win: { to: "@route" }, lose: { to: "@route" } } },
      E_mendiant: { act: "I", title: "Un mendiant", back: true, text: ["MENDIANT"] },
      V_oriane: { act: "I", title: "Veillée", with: "oriane", back: true, text: ["VEILLEE"], fx: { conf: { oriane: 5 } } },
      C: { act: "I", title: "Séance", text: ["SEANCE"], council: { motion: "exp", to: "H" } },
      B: { act: "I", title: "L'assaut", text: ["ALERTE"], battle: "b" },
      D: { act: "I", title: "La salle d'armes", text: ["SALLE"], duel: "d1" },
      Z1: { act: "I", title: "Le cabinet", text: ["CABINET"], puzzle: "cad", choices: [{ back: "H" }] },
      O: { act: "I", title: "Odile", devant: "odile", text: ["ODILE"], silence: { who: "odile", to: "H" }, choices: [{ label: "Répondre", to: "H" }] },
      O_doute: { act: "I", title: "Le doute", text: ["DEMENTI"], choices: [{ back: "H" }] },
      S1: { act: "I", title: "Le feu", souvenir: "Il y a dix ans", back: true, text: ["SOUVENIR"] },
      N: { act: "I", title: "Le matin", reveil: true, text: ["MATIN"], choices: [{ label: "Descendre", to: "H" }] },
      R1: { act: "I", title: "Un rêve", back: true, text: ["REVE"] },
      PANIQUE: { act: "I", title: "La panique", text: ["PANIQUE"], fxEvery: { angoisse: -4 }, choices: [{ label: "Respirer", to: "H" }] },
      Z: { act: "II", title: "Après", text: ["APRES"], choices: [{ label: "Finir", to: "F" }] },
      F: { act: "II", title: "Fin", end: true, epilogue: true, text: ["FIN"] },
    },
  };
}
function fresh(st) { var s = M.freshState(st); s.name = "Jeanne"; s.fem = true; M.start(st, s); return s; }
function pick(st, s, l) { var c = M.view(st, s).choices.filter(function (x) { return x.label.indexOf(l) === 0; })[0]; assert(c, "choix « " + l + " » absent : " + M.view(st, s).choices.map(function (x) { return x.label; }).join(" / ")); M.choose(st, s, c); return c; }

var rep = V.validate(JSON.parse(JSON.stringify(story())), { games: 300 });
assert.deepStrictEqual(rep.errors, [], rep.errors.join("\n"));

var st = story(); M.prepare(st); M.setRng(function () { return 0.5; });
var s = fresh(st);
// The calling: name, class underneath, kit.
assert.strictEqual(M.archOf(st, s).label, "Commise");
assert(s.items.indexOf("lampe") >= 0, "le kit de la voie");
assert(/Sous la lampe/.test(M.view(st, s).text.join(" ")), "l'encre se lit avec l'objet du kit");
// A find counts once and gives its effect.
var ep0 = s.ep || 0; assert(M.trouve(st, s, "a")); assert((s.ep || 0) > ep0);
// A memory opens in the middle of the day and brings the hero back to the hall.
pick(st, s, "Se souvenir"); assert.strictEqual(M.view(st, s).title, "Le feu");
// Dread and a deed: the page is troubled, the mood follows.
pick(st, s, "Revenir"); pick(st, s, "Mentir"); M.apply(st, s, { angoisse: 3 });
assert.strictEqual(M.view(st, s).mood, "trouble");
assert(/TROUBLE/.test(M.view(st, s).text.join(" ")));
// A wound weighs on the companion's fight on the road, under the rain.
pick(st, s, "Prendre Oriane"); pick(st, s, "Se blesser");
assert(s.wounds && Object.keys(s.wounds).length, "blessure posée");
// The road takes its toll: rain on the plain, a point of fatigue a step, and the rain wounds.
var r = fresh(st); r.time = 8; pick(st, r, "Aller au port");
for (var k = 0; k < 6 && r.travel; k++) { var v = M.view(st, r); if (r.node === "E_loup") break; M.choose(st, r, v.choices.filter(function (c) { return c.ok !== false; })[0]); }
assert((r.fatigue || 0) >= 1, "la route fatigue");
assert.strictEqual(M.weatherOf(st, r), "pluie", "il pleut sur la plaine");
assert(r.wounds && r.wounds.bras, "la pluie blesse sur la route");
console.log("ensemble-test : OK (" + rep.warnings.length + " remarques)");
