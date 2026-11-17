"use strict";
// Gamebook engine with a world layer: passages and tags (the "Sceau de Malvoran" method, PASSATION-LIVRE-JEU.md), plus
// a map of places joined by routes travelled step by step (fixed and random events, camps), items, money, provisions,
// hit points, combat by exchanges, and time. A story is plain JSON (conditions in a small JSON language), so a
// generator can write it and the validator can check it. No DOM here: the page, the validator and Node tests share it.
(function (root) {
  // ------------------------------------------------------------------ fixed game data
  var ARCHS = {
    guerrier: { label: "Guerrier", tip: "Armes et armures, toujours devant.", pv: 12, bonus: { combat: 35, magie: 0, discretion: 5, nature: 10, savoir: 0, social: 10 } },
    rodeur: { label: "Rôdeur", tip: "Arc, pistes et survie.", pv: 8, bonus: { combat: 25, magie: 5, discretion: 20, nature: 35, savoir: 5, social: 5 } },
    voleur: { label: "Voleur", tip: "Discrétion, serrures et ruse.", pv: 6, bonus: { combat: 15, magie: 0, discretion: 35, nature: 10, savoir: 10, social: 20 } },
    mage: { label: "Mage", tip: "Sorts et grimoires.", pv: 2, bonus: { combat: 0, magie: 35, discretion: 5, nature: 5, savoir: 30, social: 10 } },
    pretre: { label: "Prêtre", tip: "Soins, prières et bonnes paroles.", pv: 6, bonus: { combat: 10, magie: 30, discretion: 0, nature: 10, savoir: 20, social: 25 } },
    barde: { label: "Barde", tip: "Chants, savoir et parole.", pv: 4, bonus: { combat: 10, magie: 20, discretion: 15, nature: 5, savoir: 25, social: 35 } },
  };
  var DOMAINS = { combat: "Combat", magie: "Magie", discretion: "Discrétion", nature: "Nature", savoir: "Savoir", social: "Social" };
  // EP kinds (Core Law 12.4), named by size; a gain stays inside its range.
  var EP = { perso: [10, 1000, "Exploit personnel"], seance: [100, 5000, "Belle aventure"], histoire: [500, 10000, "Grand moment de l'histoire"] };
  var EP_PER_LEVEL = 10000, MAX_LEVEL = 30;            // a level every 10,000 EP (Core Law 12.4)
  var SUCCESS = 101;                                   // absolute maneuver: success at 101 (Core Law Table 5-1)
  var DIFFS = { 0: "normal", "-10": "difficile", "-20": "très difficile", "-30": "folie" };
  var CONF_START_PARTY = 30, CONF_START_MET = 20, LOYAL_AT = 50, LEAVE_UNDER = 20, FEAR_HOLDS = 50; // handoff 2.3
  // Game choices for the world layer (not RMU rules):
  var PV_BASE = 20, PV_PER_LEVEL = 4;                  // hit points: 20 + archetype + 4 a level
  var STEP_HOURS = 6;                                  // a travel step is a quarter day
  var START_HOUR = 8;                                  // day 1 starts at 8 in the morning
  var NIGHT_FROM = 20, NIGHT_TO = 6;                   // camp when a step ends in the night
  var CAMP_HEAL = 0.25, HUNGRY_PV = 2, HUNGER_FATIGUE = 1;
  var DEFEND_BONUS = 25, FLEE_DIFF = -10, CRIT_OVER = 50, DMG_PER_10 = 1, UNARMED_DMG = 2, COMPANION_DMG = 4, ENEMY_HIT_BONUS = 0;
  var SELL_RATE = 0.5;
  // Faces (Clément, 13/11): the words a story or a reader may use to describe a face. The page draws them
  // (Heraldry), the validator refuses any other word. Colours go by name here, or by "#rrggbb".
  var FACE = {
    ages: { enfant: "Enfant", jeune: "Jeune", adulte: "Adulte", mur: "Mûr", ancien: "Ancien" },
    skins: { porcelaine: "#f7e3d4", clair: "#f1d3b6", ivoire: "#ecc9a0", beige: "#e2b48f", dore: "#d6a777", hale: "#c98f66", cuivre: "#a86f4c", brun: "#8a5a3c", acajou: "#6b422c", ebene: "#4a2d20" },
    hairs: { noir: "#16110f", brun: "#2a1d15", chatain: "#4b3020", noisette: "#7a4a26", roux: "#a8431f", cuivre: "#b7752f", blond: "#d9b56a", platine: "#ecdcae", gris: "#8d8d8d", blanc: "#e8e2d6", acajou: "#5a1f14" },
    irises: { noir: "#1c1410", brun: "#3b2416", noisette: "#7a5a2a", vert: "#4d7a4a", bleu: "#3f6f9e", gris: "#6f7c85", clair: "#a9b6cf" },
    backs: { sauge: "#c9d8c5", sable: "#d8cbb4", ciel: "#c4cfe0", rose: "#e0c6c6", lilas: "#d4d0e6", menthe: "#cfe0dc" },
    eyes: { amande: "En amande", ronds: "Ronds", brides: "Bridés", tombants: "Tombants", lourds: "Paupières lourdes" },
    noses: { fin: "Fin", large: "Large", busque: "Busqué", retrousse: "Retroussé" },
    lips: { fines: "Fines", pleines: "Pleines" },
    shapes: { ovale: "Ovale", rond: "Rond", carre: "Carré", allonge: "Allongé" },
    coifs: { court: "Courts", milong: "Mi-longs", long: "Longs", boucles: "Bouclés", crepus: "Crépus", tresses: "Tresses", locks: "Locks", chignon: "Chignon", degarni: "Dégarnis", couronne: "Couronne", rase: "Rasés", foulard: "Foulard", turban: "Turban", capuche: "Capuche" },
    beards: { sans: "Sans", moustache: "Moustache", barbe: "Barbe", longue: "Longue barbe" },
    marks: { rousseur: "Taches de rousseur", grain: "Grain de beauté", vitiligo: "Vitiligo", tache: "Tache de naissance", cicatrice: "Cicatrice", balafre: "Balafre", brulure: "Brûlure", bandeau: "Bandeau sur l'œil", oeil_voile: "Œil voilé", aveugle: "Aveugle", vairons: "Yeux vairons", lunettes: "Lunettes", appareil: "Appareil auditif", tatouage: "Tatouage" },
  };
  // Which list each key of a face draws from: a colour list takes a name or "#rrggbb", `marks` a list of words.
  var FACE_KEYS = { age: "ages", skin: "skins", hair: "hairs", iris: "irises", back: "backs", eyes: "eyes", nose: "noses", lips: "lips", shape: "shapes", coif: "coifs", beard: "beards", marks: "marks" };
  var FACE_COLOURS = ["skin", "hair", "iris", "back"];
  // Regards (Clément, 13/11, 6th series): how a person of the story sees the hero, in one word the author picks with
  // fx.regard: { <person>: "<word>" }. Nothing is said on the page when it changes; the notebook (Gens) shows it.
  var REGARDS = { hostile: "Hostile", mefiant: "Méfiant", distant: "Distant", neutre: "Sans avis", curieux: "Curieux", cordial: "Cordial",
    allie: "Allié", redevable: "Redevable", craintif: "Te craint", admiratif: "Admiratif", trahi: "Se sent trahi", rancunier: "Rancunier" };
  // Who is who (Clément, 15/11, for a reader who finds names hard to follow): what a person looks like, in five fixed
  // groups of a few words each (a reader may ask for any of them beside the name in the text), and who the person is
  // to the hero. Declared in people.<id>.aspect / .qui, changed by the passage effects `aspect` and `qui`.
  var ASPECT_KEYS = { allure: "Allure", visage: "Visage", habits: "Habits", signe: "Signe", voix: "Voix" };
  var ASPECT_MAX_WORDS = 8;
  // A pressing scene (passage tag `urgent`: seconds to choose) stays between these bounds.
  var URGENT_MIN = 5, URGENT_MAX = 120;
  // The tavern game, « la Chandelle » (passage tag `taverne`): a six-sided die thrown again and again, the sum kept,
  // a 1 snuffs the candle. The other player throws first and stops at a total between these bounds.
  // Morale (7th series, Clément 13/11): a badly hurt foe, or one whose band is half fallen, may run; never the last
  // one standing (the story's victory text stays true), never a foe declared fearless.
  var MORALE_HURT = 0.35, MORALE_BREAK = 30, MORALE_ROUT_SHARE = 0.5;
  // A siege (8.0): prices follow scarcity, at most SCARCE_MAX times; a pitched battle's arithmetic (forces 1-4, enemy
  // pressure 0-6 a post, a d6 each side; a post breaks under BATTLE_BREAK, the hero counts as a troop of his own).
  var SCARCE_MAX = 8, SCARCE_POW = 0.8;
  var BATTLE_HERO = 2, BATTLE_HERO_PER = 20, BATTLE_CHARGE = 3, BATTLE_CHARGE_COST = 15, BATTLE_HOLD_COST = 5, BATTLE_BEND_COST = 25,
    BATTLE_BREAK_COST = 40, BATTLE_BREAK = -3, BATTLE_HERO_HURT = 4, BATTLE_MAX_LOST = 2;
  var TAVERN_STOP_LO = 14, TAVERN_STOP_SPREAD = 6, TAVERN_GAMES_PER_DAY = 3, TAVERN_SNUFF = 1, TAVERN_DIE = 6;
  // Intent: faceErrors(face) -> [message] = what a declared face says that the page cannot draw
  function faceErrors(face) {
    if (!face || typeof face !== "object" || Array.isArray(face)) return ["« face » s'écrit { age: \"ancien\", marks: [\"balafre\"], … }."];
    var out = [];
    Object.keys(face).forEach(function (k) {
      var list = FACE[FACE_KEYS[k]], v = face[k];
      if (!list) return out.push("clé « " + k + " » inconnue (" + Object.keys(FACE_KEYS).join(", ") + ").");
      var known = function (w) { return typeof w === "string" && (list.hasOwnProperty(w) || (FACE_COLOURS.indexOf(k) >= 0 && /^#[0-9a-f]{6}$/i.test(w))); };
      if (k === "marks") { if (!Array.isArray(v)) return out.push("« marks » est une liste."); v.forEach(function (w) { if (!known(w)) out.push("marque « " + w + " » inconnue (" + Object.keys(list).join(", ") + ")."); }); }
      else if (!known(v)) out.push(k + " « " + v + " » inconnu (" + Object.keys(list).join(", ") + (FACE_COLOURS.indexOf(k) >= 0 ? ", ou #rrggbb" : "") + ").");
    });
    return out;
  }

  // Difficulty chosen at the start of a game (Clément, 12/11): the engine adjusts the hero's rolls and the foes; the
  // story has nothing to change. Game choices: Conteur forgives, Héroïque bites.
  var DIFFICULTY = {
    conteur: { label: "Conteur", tip: "Pour savourer l'histoire : jets plus faciles, adversaires moins coriaces.", roll: 15, foePv: 0.75, foeHit: -10 },
    aventurier: { label: "Aventurier", tip: "L'équilibre prévu par l'histoire.", roll: 0, foePv: 1, foeHit: 0 },
    heroique: { label: "Héroïque", tip: "Pour les vieux routiers : jets plus durs, adversaires plus solides, et la route qui use (le mauvais temps pèse sur les jets, les longues routes fatiguent, le froid peut blesser).", roll: -10, foePv: 1.25, foeHit: 10, roadToll: true },
  };
  function diffOf(s) { return DIFFICULTY[(s && s.difficulty) || "aventurier"] || DIFFICULTY.aventurier; }
  function diffTerm(s) { var d = diffOf(s); return d.roll ? (d.roll > 0 ? " + " : " − ") + Math.abs(d.roll) + " (" + d.label.toLowerCase() + ")" : ""; }

  var RNG = Math.random;
  function setRng(f) { RNG = f || Math.random; }
  // Real dice (Clément, 12/11): the page may hand the engine the reader's own d100 throws for the reader's rolls.
  // DICE() returns 1..100, or null to let the engine roll. Companions and foes always roll with the engine.
  var DICE = null;
  function setDice(f) { DICE = f || null; }
  function die(n) { return 1 + Math.floor(RNG() * n); }
  function pick(a) { return a[Math.floor(RNG() * a.length)]; }

  // ------------------------------------------------------------------ state
  // Intent: prepare(Story) -> Story ! a return written `back: "PASSAGE"` gets its destination and its label from the engine
  // Why: Clément (12/11): no hand-written way back, no exception. The author says where the scene returns; the engine
  // writes "Revenir : <the passage's title>" ("Reprendre la route" for @route), so a label can never name another place.
  // An author's own label is kept only when it says more than the way back; the button then shows "→ <destination>".
  function cap(x) { return x ? x.charAt(0).toUpperCase() + x.slice(1) : x; }
  // A passage may name itself as a destination (backName) when its title is a moment ("Le soir") rather than a place.
  function prepare(story) {
    if (!story || !story.passages || story.__prepared) return story;
    // A book to read (story.lecture, 9.0): no choices are written; each page leads to the next one in the order of the
    // source, « Suivant », or « Chapitre II · <title> » when the next page opens a chapter (an act). The last page ends.
    // Why: Clément, 15/11 — a public-domain novel kept as its author wrote it, with the engine's people, places and words.
    if (story.lecture) {
      var order = Object.keys(story.passages);
      order.forEach(function (id, i) {
        var P = story.passages[id], nx = order[i + 1], N = nx && story.passages[nx];
        if ((P.choices && P.choices.length) || P.end) return;
        if (!N) { P.end = true; return; }
        var A = N.act && N.act !== P.act ? actOf(story, N.act) : null;
        P.choices = [{ label: A ? String(A.title || "Chapitre " + A.id).replace(/\*/g, "") : "Suivant", to: nx, auto: "next" }];
      });
    }
    Object.keys(story.passages).forEach(function (id) {
      // A roll's or a fight's outcome may also say back: "PASSAGE" (a way back after the roll).
      var P0 = story.passages[id], branches = [];
      // Keeping silent (8.3): `silence: { who, to, label, fx }` on a passage where someone waits for an answer becomes a
      // choice of its own, « Te taire », counted by the engine. In a pressing scene, it is what happens when time runs out.
      if (P0.silence && !(P0.choices || []).some(function (c) { return c.silence; })) {
        var S0 = P0.silence, sc = { label: S0.label || "Te taire", silence: S0.who || true };
        ["to", "back", "fx", "if", "hide", "via", "takes"].forEach(function (k) { if (S0[k] != null) sc[k] = S0[k]; });
        if (P0.urgent && !(P0.choices || []).some(function (c) { return c.timeout; })) sc.timeout = true;
        P0.choices = (P0.choices || []).concat([sc]);
      }
      // Paths that unveil (8.9): `leads: true` on a passage lists the story's characters (story.leads) as choices, the
      // locked ones greyed with their hint; `skip: { to, label, fx }` offers a shortcut over a scene the reader already
      // read in an earlier game. Why: Clément (15/11) wants a book where each game opens new ways and one seldom walks
      // the same road twice; the story declares, the engine writes the buttons.
      if (P0.leads && story.leads && !(P0.choices || []).some(function (c) { return c.leadPick; })) {
        P0.choices = (P0.choices || []).concat(Object.keys(story.leads).map(function (k) {
          // A closed one shows only its hint, never its name (the reader meets it when an ending opens it).
          var L = story.leads[k], open = (L.label || "Suivre " + (L.name || k)) + (L.desc ? " · " + L.desc : "");
          var c = { label: open, to: L.start, fx: Object.assign({ lead: k, leadQuiet: true }, L.fx || {}), leadPick: k };
          if (L.if != null) { c.if = L.if; c.label = "🔒 " + (L.hint || "Une autre personne"); c.labels = [{ if: L.if, label: open }]; c.why = "Une autre partie ouvrira ce chemin."; }
          return c;
        }));
      }
      if (P0.skip && !(P0.choices || []).some(function (c) { return c.skip; })) {
        var K0 = P0.skip, kc = { label: K0.label || "Tu connais la suite : passer", to: K0.to, skip: true, hide: { not: { lu: id } } };
        if (K0.fx) kc.fx = K0.fx;
        P0.choices = (P0.choices || []).concat([kc]);
      }
      (P0.choices || []).forEach(function (c) { branches.push(c.win, c.lose); if (c.fight) branches.push(c.fight.win, c.fight.lose, c.fight.flee, c.fight.calm); });
      if (P0.combat) branches.push(P0.combat.win, P0.combat.lose, P0.combat.flee, P0.combat.calm);
      branches.forEach(function (b) { if (b && b.to == null && typeof b.back === "string") b.to = b.back; });
      (story.passages[id].choices || []).forEach(function (c) {
        if (c.back == null || c.back === true) return;
        c.to = c.back;
        if (!c.label) { var tp = story.passages[c.back]; c.label = c.back === "@route" ? "Reprendre la route" : "Revenir : " + cap(String((tp && (tp.backName || tp.title)) || c.back).replace(/\*/g, "")); c.autoBack = true; }
      });
    });
    try { Object.defineProperty(story, "__prepared", { value: true, enumerable: false }); } catch (e) { story.__prepared = true; }
    veilIndex(story);
    return story;
  }
  function freshState(story, opts) {
    prepare(story);
    opts = opts || {};
    var lv = (story.acts && story.acts[0] && story.acts[0].levels && story.acts[0].levels[0]) || 1;
    var w = story.world || {};
    return {
      story: story.id, node: null, name: "", arch: "", ep: EP_PER_LEVEL * lv, mark: 0, flags: {}, clues: {}, conf: {}, fear: {},
      fac: {}, met: {}, relics: [], given: [], items: ((w.start && w.start.items) || []).slice(), gold: (w.start && w.start.gold) || 0, food: (w.start && w.start.food) || 0,
      pv: null, fatigue: 0, time: (w.start && w.start.hour != null) ? +w.start.hour : START_HOUR, place: (w.start && w.start.place) || null, known: {}, people: {}, travel: null, combat: null,
      clock: {}, seen: {}, ret: null, events: [], toutJouer: opts.toutJouer !== false, turn: 0, routesDone: {},
      difficulty: DIFFICULTY[opts.difficulty] ? opts.difficulty : "aventurier", stats: {}, feats: {}, beasts: {}, ironman: !!opts.ironman, regard: {},
      // An investigation tells the hour (world.start.clock: true): who is where depends on it (7.9).
      clockShown: !!(w.start && w.start.clock),
      // A siege (8.0): the city's stocks, the last day they were counted, the camp the hero has rallied.
      stocks: (function () { var o = {}; Object.keys(story.stocks || {}).forEach(function (k) { o[k] = story.stocks[k].start || 0; }); return o; })(), camp: null,
      // A closed room (8.3): the hero's dread starts where the story says.
      angoisse: story.dread ? (story.dread.start || 0) : 0,
      // A story's own callings (8.5): a single declared voie is the hero's from the start.
      voie: story.voie && (story.voies || {})[story.voie] ? story.voie : "", arch: story.voie && (story.voies || {})[story.voie] ? story.voies[story.voie].like : "",
    };
  }
  // Intent: usesOf(Story) -> { combat, pv, gold, food, fatigue } = what of the hero's sheet the story ever touches,
  // read once from its tags. The page shows only that. Why: Clément, 15/11 — a funeral vigil showed hit points, a
  // purse and provisions it never used.
  function usesOf(story) {
    if (story.__uses) return story.__uses;
    var w = story.world || {}, rest = {};
    Object.keys(story).forEach(function (k) { if (k !== "world" && k !== "glossary" && k !== "lore" && k !== "items" && k !== "__uses") rest[k] = story[k]; });
    var j = JSON.stringify(rest) + JSON.stringify(w.routes || []) + JSON.stringify(w.events || {}) + JSON.stringify(w.regions || {});
    var combat = /"combat":\{|"fight":/.test(j);
    var u = {
      combat: combat,
      pv: combat || /"pv":(-?\d|"max")|"heal":/.test(j) || /"heal":/.test(JSON.stringify(story.items || {})),
      gold: Object.keys(story.shops || {}).length > 0 || /"gold":/.test(j),
      food: !w.noFood && (/"food":/.test(j) || (w.routes || []).length > 0 || /"@camp"/.test(j)),
      fatigue: (w.routes || []).length > 0 || /"fatigue":/.test(j) || !!story.wounds,
    };
    try { Object.defineProperty(story, "__uses", { value: u, enumerable: false, configurable: true }); } catch (e) { /* frozen story: computed each time */ }
    return u;
  }
  // Intent: archOf(Story, State) -> { label, tip, pv, bonus } = the hero's calling: the story's own voie (story.voies,
  // 8.5) laid over the class it plays like, or the class alone. Why: Clément, 15/11 — a funeral vigil has no
  // warriors; the story names the hero's trade, the engine keeps the six classes underneath for rules.
  function archOf(story, s) {
    var base = ARCHS[s.arch] || ARCHS.guerrier, v = s.voie && story && (story.voies || {})[s.voie];
    if (!v) return base;
    return { label: (s.fem && v.labelF) || v.label, tip: v.tip || base.tip, pv: base.pv, bonus: Object.assign({}, base.bonus, v.bonus || {}), like: s.arch, voie: s.voie };
  }
  function levelOfEp(ep) { return Math.min(MAX_LEVEL, Math.max(1, Math.floor(ep / EP_PER_LEVEL))); }
  function level(s) { return levelOfEp(s.ep); }
  function pvMax(s) { return PV_BASE + ((ARCHS[s.arch] || ARCHS.guerrier).pv) + PV_PER_LEVEL * (level(s) - 1); }
  function heroName(s) { return s.name || "le héros"; }
  function present(s, c) { return s.met[c] === "party" || (s.lead != null && s.lead === c); }
  function loyal(s, c) { return present(s, c) && (s.conf[c] || 0) >= LOYAL_AT; }
  function day(s) { return 1 + Math.floor(s.time / 24); }
  function hour(s) { return s.time % 24; }
  function timeLabel(s) {
    var h = hour(s), part = h < 6 ? "nuit" : h < 12 ? "matin" : h < 14 ? "midi" : h < 18 ? "après-midi" : h < 21 ? "soir" : "nuit";
    return "Jour " + day(s) + ", " + (s.clockShown ? (h === 0 ? "minuit" : h === 12 ? "midi" : h + " h") + (h === 0 || h === 12 ? "" : " (" + part + ")") : part);
  }
  // A decoy (clue `leurre: true`, 7.9) is never counted: not here, not as a proof, not for a feat.
  function clueCount(story, s, rev) { return Object.keys(s.clues).filter(function (k) { return story.clues[k] && story.clues[k].rev === rev && !story.clues[k].leurre; }).length; }
  function actOf(story, id) { return (story.acts || []).filter(function (a) { return a.id === id; })[0] || null; }
  function item(story, id) { return (story.items || {})[id] || { name: id, kind: "divers" }; }
  function countItem(s, id) { return s.items.filter(function (x) { return x === id; }).length; }
  function weapon(story, s) {
    var best = null;
    s.items.forEach(function (id) { var it = item(story, id); if (it.kind === "arme" && !it.ranged && (!best || (it.dmg || 0) > (best.dmg || 0))) best = it; });
    return best;
  }
  function armor(story, s) {
    var best = null;
    s.items.forEach(function (id) { var it = item(story, id); if (it.kind === "armure" && (!best || (it.def || 0) > (best.def || 0))) best = it; });
    return best;
  }

  // ------------------------------------------------------------------ bonuses and rolls
  // Domain bonus: the archetype's (or the stepping-in companion's), +3 a level in strong domains (20+), +1 elsewhere,
  // plus what carried items add (an item's `bonus` by domain).
  function bonus(story, s, dom, who) {
    var hs = who && isHero(story, who) ? heroSheet(s, who) : null;
    var base = hs ? ((ARCHS[hs.arch] || ARCHS.guerrier).bonus[dom] || 0) : who ? (((story.companions || {})[who] || {}).bonus || {})[dom] || 0 : (archOf(story, s).bonus[dom] || 0);
    var b = base + (base >= 20 ? 3 : 1) * ((hs ? levelOfEp(hs.ep) : level(s)) - 1);
    if (!who) {
      var seenKinds = {};
      s.items.forEach(function (id) { var it = item(story, id); if (it.bonus && it.bonus[dom] && !seenKinds[id]) { seenKinds[id] = 1; b += it.bonus[dom]; } });
      b -= s.fatigue * 5;
      // At sea (8.1): the sky and the wounds not yet closed weigh on the hero's rolls.
      if (story.weather) b += weatherMod(story, s, dom);
      if (s.wounds) b += woundMod(story, s, dom);
      // At school (8.2): what practice has added.
      if (story.practice) b += practiceOf(s, dom);
      // A closed room (8.3): dread past its threshold shakes the hand and the judgement.
      if (story.dread) b += dreadMod(story, s);
    }
    return b;
  }
  function openD100(mine) {
    var d = function () { var v = mine && DICE ? DICE() : null; return v >= 1 && v <= 100 ? Math.floor(v) : die(100); };
    var r = d(), rolls = [r], total = r, x;
    if (r >= 96) { do { x = d(); rolls.push(x); total += x; } while (x >= 96); }
    else if (r <= 5) { do { x = d(); rolls.push(-x); total -= x; } while (x >= 96); }
    return { total: total, rolls: rolls };
  }
  // The reader's statistics, read by the feats (hauts faits).
  function stat(s, k, n) { s.stats = s.stats || {}; s.stats[k] = (s.stats[k] || 0) + (n == null ? 1 : n); }
  function helpOf(story, s, t) {
    var h = 0;
    (t.help || []).forEach(function (x) { if (tagsOk(story, s, x, s.node) && evalCond(story, s, x.if)) h += x.v || 0; });
    return h + cardHelp(s, t);
  }
  function rollTest(story, s, t, who) {
    var b = bonus(story, s, t.dom, who), help = helpOf(story, s, t), diff = t.diff || 0, lv = diffOf(s).roll;
    var r = openD100(true), total = r.total + b + diff + help + lv, ok = total >= SUCCESS;
    stat(s, "tests"); if (ok) stat(s, "testsOk"); if (r.rolls[0] >= 96) stat(s, "open");
    if (!who && story.practice) practiceUse(story, s, t.dom);
    return { die: r.total, rolls: r.rolls, bonus: b, help: help, diff: diff, total: total, target: SUCCESS, ok: ok,
      line: "d100 ouvert " + (r.rolls.length > 1 ? "(" + r.rolls.join(" ") + ") " : "") + r.total + " + " + DOMAINS[t.dom] + " " + b +
        (diff ? (diff > 0 ? " + " : " − ") + Math.abs(diff) + (DIFFS[diff] ? " (" + DIFFS[diff] + ")" : "") : "") + (help ? (help > 0 ? " + " : " − ") + Math.abs(help) + (cardHelp(s, t) ? (help === cardHelp(s, t) ? " (ta carte)" : " (aide et carte)") : " (aide)") : "") + diffTerm(s) +
        " = " + total + " (il faut " + SUCCESS + ")" };
  }
  function chance(story, s, t, who) {
    var need = SUCCESS - bonus(story, s, t.dom, who) - (t.diff || 0) - helpOf(story, s, t) - diffOf(s).roll;
    return Math.max(5, Math.min(95, 101 - need));
  }

  // ------------------------------------------------------------------ conditions (JSON)
  function rng(v, lo, hi) { return (lo == null || v >= lo) && (hi == null || v <= hi); }
  // { angoisse: { min: 3 } } or { angoisse: true, min: 3 }: both are read.
  function minOf(c, k) { return c[k] && typeof c[k] === "object" ? c[k].min : c.min; }
  function maxOf(c, k) { return c[k] && typeof c[k] === "object" ? c[k].max : c.max; }
  function evalCond(story, s, c) {
    if (c == null || c === true) return true;
    if (c === false) return false;
    if (typeof c === "string") return !!s.flags[c];
    if (Array.isArray(c)) return c.every(function (x) { return evalCond(story, s, x); });
    // Cards (9.7): a thread's state (ouvert by default; noue, rate, aucun), a card played in this game.
    if ("fil" in c) return [].concat(c.is || "ouvert").indexOf(threadState(s, c.fil)) >= 0;
    if ("possede" in c) return owns(s, c.possede);
    if ("carteJouee" in c) return !!(s.jeu && [].concat(c.carteJouee).some(function (k) { return s.jeu.joue.indexOf(k) >= 0; }));
    // A siege (8.0): a stock and the days it lasts, a promise, a vote, a member's leaning, a battle, the hero's camp.
    if ("stock" in c) return rng(stockNow(story, s, c.stock), c.min, c.max);
    if ("days" in c) { var dl = daysLeft(story, s, c.days); return rng(dl == null ? Infinity : dl, c.min, c.max); }
    if ("promise" in c) { var ps = promiseState(s, c.promise) || "aucune"; return c.is == null ? ps !== "aucune" : [].concat(c.is).indexOf(ps) >= 0; }
    if ("vote" in c) { var V = (s.votes || {})[c.vote]; if (!V) return c.is === null; return (c.is == null || [].concat(c.is).indexOf(V.result) >= 0) && (c.hero == null || [].concat(c.hero).indexOf(V.by.hero || "aucune") >= 0); }
    if ("lean" in c) return [].concat(c.is).indexOf(leanOf(story, s, c.lean, c.member)) >= 0;
    if ("battle" in c) { var BB = (s.battles || {})[c.battle]; if (!BB) return false; return (c.is == null || BB.out === c.is) && rng(BB.losses, c.losses && c.losses.min, c.losses && c.losses.max); }
    if ("camp" in c) return c.camp == null || c.camp === "none" ? !s.camp : s.camp === c.camp;
    if ("temps" in c) return [].concat(c.temps).indexOf(weatherOf(story, s)) >= 0;
    if ("saison" in c) { var sn = seasonOf(story, s); return !!sn && [].concat(c.saison).indexOf(sn.id) >= 0; }
    if ("blessure" in c) return woundOk(story, s, c.blessure);
    if ("cicatrice" in c) return [].concat(c.cicatrice).some(function (k) { return !!s.flags["cicatrice:" + k]; });
    if ("fatigue" in c) return rng(s.fatigue || 0, c.min, c.max);
    // At school (8.2): a trait of character, a duel fought.
    if ("trait" in c) return rng(traitOf(s, c.trait), c.min, c.max);
    if ("duel" in c) { var DU = (s.duels || {})[c.duel]; if (!DU) return c.is === null; return c.is == null || DU.out === c.is; }
    // A closed room (8.3): accounts heard, doubted, belied; silences kept; what the hero did and what it weighs; dread; attachments.
    if ("recit" in c) return !!(s.accounts || {})[c.recit];
    if ("doute" in c) return !!(s.doubts || {})[c.doute];
    if ("dementi" in c) return !!(s.belied || {})[c.dementi];
    if ("silences" in c) return rng(((s.silences || {})[c.silences === true ? "*" : c.silences]) || 0, c.min, c.max);
    if ("geste" in c) return !!(s.gestes || {})[c.geste];
    if ("poids" in c) return rng(s.poids || 0, minOf(c, "poids"), maxOf(c, "poids"));
    if ("angoisse" in c) return rng(s.angoisse || 0, minOf(c, "angoisse"), maxOf(c, "angoisse"));
    if ("attache" in c) return rng(attachOf(s, c.attache), c.min, c.max);
    // Two players (8.4): a secret known (own, overheard, or told by its holder), told, or still kept.
    if ("secret" in c) return secretKnown(s, c.secret);
    if ("confie" in c) return !!s.flags["monde:confie:" + c.confie];
    if ("garde" in c) return secretOwn(s, c.garde) && !s.flags["monde:confie:" + c.garde];
    // Two players apart (9.6): something lies in a deposit for this hero (or this very thing does).
    if ("depot" in c) { var dh = depotTakes(story, s, c.depot); return c.item ? dh.indexOf(c.item) >= 0 : dh.length > 0; }
    if ("missed" in c) { var mq = (story.quests || []).filter(function (q) { return q.id === c.missed; })[0]; return !!mq && questMissed(story, s, mq); }
    // count: [conditions], min / max: how many of them hold ("at least three of these").
    if ("count" in c) { var nc = c.count.filter(function (x) { return evalCond(story, s, x); }).length; return nc >= (c.min || 0) && (c.max == null || nc <= c.max); }
    if ("has" in c) return !!s.flags[c.has];
    if ("not" in c) return !evalCond(story, s, c.not);
    if ("all" in c) return c.all.every(function (x) { return evalCond(story, s, x); });
    if ("any" in c) return c.any.some(function (x) { return evalCond(story, s, x); });
    if ("clues" in c) return rng(clueCount(story, s, c.clues), c.min, c.max);
    if ("clue" in c) return !!s.clues[c.clue];
    if ("mark" in c) return rng(s.mark, c.mark.min, c.mark.max);
    if ("present" in c) return present(s, c.present);
    if ("loyal" in c) return loyal(s, c.loyal);
    if ("met" in c) return !!s.met[c.met];
    if ("gone" in c) return s.met[c.gone] === "gone";
    if ("conf" in c) return rng(s.conf[c.conf] || 0, c.min, c.max);
    if ("fear" in c) return rng(s.fear[c.fear] || 0, c.min, c.max);
    if ("relics" in c) return rng(s.relics.length, c.relics.min, c.relics.max);
    if ("relic" in c) return s.relics.indexOf(c.relic) >= 0;
    if ("given" in c) return s.given.indexOf(c.given) >= 0;
    if ("item" in c) return s.items.indexOf(c.item) >= 0;
    if ("gold" in c) return rng(s.gold, c.gold.min, c.gold.max);
    if ("food" in c) return rng(s.food, c.food.min, c.food.max);
    if ("pv" in c) return rng(s.pv, c.pv.min, c.pv.max);
    if ("clock" in c) return rng(s.clock[c.clock] || 0, c.min, c.max);
    if ("fac" in c) return rng(s.fac[c.fac] || 0, c.min, c.max);
    if ("level" in c) return rng(level(s), c.level.min, c.level.max);
    if ("day" in c) return rng(day(s), c.day.min, c.day.max);
    // Days elapsed since a moment the story stamped (fx.stamp): 0 on that day. Without the stamp (older saves), since day 1.
    if ("since" in c) return rng(day(s) - ((s.stamps || {})[c.since] || 1), c.min, c.max);
    if ("night" in c) return isNight(s) === !!c.night;
    // Asked about the passage being read, "seen" means "on an earlier visit": a hub's first-arrival text
    // ({ not: { seen: <itself> } }) would otherwise never show, since entering a passage marks it seen.
    if ("seen" in c) return c.seen === s.node ? s.seen[c.seen] > 1 : !!s.seen[c.seen];
    if ("arch" in c) return s.arch === c.arch;
    if ("voie" in c) return s.voie === c.voie;
    if ("trouvaille" in c) return !!(s.found || {})[c.trouvaille];
    if ("trouvailles" in c) return Object.keys(s.found || {}).length >= +c.trouvailles;
    if ("quest" in c) return !!s.flags["quete:" + c.quest];
    // is: { key: value | [values] | null } reads a state set by fx.set (null: no value yet).
    if ("is" in c) return Object.keys(c.is).every(function (k) { var v = stateOf(s, k); return c.is[k] === null ? v == null : [].concat(c.is[k]).indexOf(v) >= 0; });
    if ("second" in c) return secondOk(s, c.second);
    // What this reader has kept from earlier games (8.9): a thing learned (fx.learn), a page already read.
    if ("savoir" in c) return [].concat(c.savoir).every(function (k) { return !!(s.lore || {})[k]; });
    if ("lu" in c) return !!(s.lu || {})[c.lu];
    if ("via" in c) return [].concat(c.via).some(function (k) { return k === s.via || k === s.from; });
    if ("regard" in c) return regardOk(s, c.regard);
    if ("fresh" in c) return [].concat(c.fresh).every(function (k) { return !faded(story, s, k); });
    if ("place" in c) return s.place === c.place;
    if ("known" in c) return !!s.known[c.known];
    if ("person" in c) return !!s.people[c.person];
    if ("lead" in c) return s.lead === c.lead;
    if ("away" in c) return s.met[c.away] === "away";
    if ("team" in c) return s.team === c.team;
    if ("souv" in c) { var sr = souvRef(s, c.souv); return souvKept(story, s, sr.hero, sr.id); }
    if ("souvenirs" in c) return rng(souvCount(story, s, c.souvenirs === "lead" ? s.lead : c.souvenirs), c.min, c.max);
    if ("heroLevel" in c) return rng(heroLevel(s, c.heroLevel), c.min, c.max);
    if ("party" in c) return rng(Object.keys(story.companions || {}).filter(function (k) { return present(s, k); }).length, c.party.min, c.party.max);
    // Hidden words (9.1): a veil revealed; how many were (of one lens, or any); a lens held.
    if ("voile" in c) return [].concat(c.voile).every(function (k) { return revealed(s, k); });
    if ("voiles" in c) return rng(veilCount(story, s, c.lens), minOf(c, "voiles"), maxOf(c, "voiles"));
    if ("lens" in c) return lensHeld(story, s, c.lens);
    throw new Error("condition inconnue : " + JSON.stringify(c));
  }
  // takes: the time a scene spends, told to the reader in brackets (Clément, 12/11). The clock moves to that hour.
  var TAKES = {
    evening: { at: 19, skip: function (h) { return h >= 19; }, say: "Le soir tombe.", ahead: "jusqu'au soir" },
    night: { at: 22, skip: function (h) { return h >= 22 || h < NIGHT_TO; }, say: "La nuit est tombée.", ahead: "jusqu'à la nuit" },
    morning: { at: 7, skip: function (h) { return h >= 6 && h < 10; }, say: "La nuit passe. Le jour se lève.", ahead: "jusqu'au matin", end: true },
    day: { at: 7, skip: function (h) { return h >= NIGHT_TO && h < NIGHT_FROM; }, say: "La nuit passe. Le jour se lève.", ahead: "jusqu'au jour" },
    noon: { at: 12, skip: function (h) { return h >= 12 && h < 19; }, say: "La matinée passe.", ahead: "jusqu'à midi" },
    // midnight: an evening that ends on the stroke of twelve (« Une soirée », 13/11).
    midnight: { at: 0, skip: function (h) { return h < NIGHT_TO; }, say: "Minuit sonne.", ahead: "jusqu'à minuit" },
  };
  var NUMBERS = ["", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze"];
  // Intent: takes(State, Tag) -> {hours, say, ahead} | null = how far the clock moves for a scene, and what is told
  function takesOf(s, k) {
    if (k == null) return null;
    if (typeof k === "number") { var n = NUMBERS[k] || String(k); return k > 0 ? { hours: k, say: (k > 1 ? n.charAt(0).toUpperCase() + n.slice(1) + " heures passent." : "Une heure passe."), ahead: k > 1 ? n + " heures" : "une heure", end: true } : null; }
    var T = TAKES[k]; if (!T) return null;
    var h = hour(s); if (T.skip(h)) return null;
    return { hours: ((T.at - h) + 24) % 24 || 24, say: T.say, ahead: T.ahead, end: !!T.end };
  }
  // Intent: carry(State, Companion) -> () ! what was heard before the first meeting starts the account
  function carryRep(s, k) {
    var r = s.rep && s.rep[k]; if (!r) return;
    s.conf[k] = Math.max(0, Math.min(100, (s.conf[k] || 0) + r.conf)); s.fear[k] = Math.max(0, Math.min(100, (s.fear[k] || 0) + r.fear));
  }
  // Intent: greet(Story, State) -> () ! a companion back at your side says a word on what they heard while away
  var REP_SAY = {
    up: "{n} t'attendait. « On m'a raconté ce que tu as fait pendant que je n'étais pas là. »",
    down: "{n} t'accueille sans un mot de trop. On lui a raconté ce que tu as fait pendant son absence.",
    fearUp: "{n} te regarde autrement. Ce qu'on dit de toi est arrivé jusqu'ici.",
    fearDown: "{n} paraît moins sur ses gardes avec toi.",
  };
  function greetBack(story, s) {
    if (!s.rep) return;
    Object.keys(s.rep).forEach(function (k) {
      if (!present(s, k) || !s.met[k]) return;
      var r = s.rep[k]; delete s.rep[k];
      if (k === s.lead) return;
      var C = story.companions[k] || {}, say = C.rep || {}, n = C.name || k, bits = [];
      if (r.conf) bits.push({ t: (r.conf > 0 ? say.up || REP_SAY.up : say.down || REP_SAY.down), d: "Confiance " + (r.conf > 0 ? "+" : "−") + Math.abs(r.conf), good: r.conf > 0 });
      if (r.fear) bits.push({ t: (r.fear > 0 ? say.fearUp || REP_SAY.fearUp : say.fearDown || REP_SAY.fearDown), d: "Crainte " + (r.fear > 0 ? "+" : "−") + Math.abs(r.fear), good: r.fear < 0 });
      bits.forEach(function (b) { ev(s, b.t.replace(/\{n\}/g, n) + " (" + b.d + ")", b.good ? "good" : "bad", { conseq: 1 }); });
    });
  }
  function stateOf(s, k) { var f = Object.keys(s.flags).filter(function (x) { return x.indexOf(k + "=") === 0; })[0]; return f ? f.slice(k.length + 1) : null; }
  function isNight(s) { var h = hour(s); return h >= NIGHT_FROM || h < NIGHT_TO; }
  function describeCond(story, c) {
    if (c == null) return "";
    if (typeof c === "string") return "Ce chemin n'est pas encore ouvert.";
    if (Array.isArray(c)) return c.map(function (x) { return describeCond(story, x); }).join(" ");
    if ("all" in c) return c.all.map(function (x) { return describeCond(story, x); }).join(" ");
    if ("any" in c) return c.any.map(function (x) { return describeCond(story, x); }).join(" Ou : ");
    if ("clues" in c) return "Il te faut au moins " + (c.min || 0) + " indice" + ((c.min || 0) > 1 ? "s" : "") + " sur « " + ((story.mysteries[c.clues] || {}).title || c.clues) + " ».";
    if ("mark" in c) return c.mark.max != null ? "Il faut une Marque de " + c.mark.max + " au plus." : "Il faut une Marque d'au moins " + c.mark.min + ".";
    if ("present" in c) return nameOf(story, c.present) + " doit être avec toi.";
    if ("loyal" in c) return nameOf(story, c.loyal) + " doit te faire confiance (50 ou plus).";
    if ("relics" in c) return "Il faut " + (c.relics.min || 0) + " reliques en main.";
    if ("relic" in c) return "Il faut : " + ((story.relics || {})[c.relic] || c.relic) + ".";
    if ("item" in c) return "Il faut : " + item(story, c.item).name + ".";
    if ("gold" in c) return "Il faut " + money(story, c.gold.min) + ".";
    if ("food" in c) return "Il faut " + c.food.min + " jours de vivres.";
    if ("level" in c) return "Il faut le niveau " + c.level.min + ".";
    if ("quest" in c) return "Il faut d'abord finir « " + questTitle(story, c.quest) + " ».";
    if ("fac" in c) return "Il faut la confiance de " + ((story.factions || {})[c.fac] || c.fac) + ".";
    if ("known" in c) return "Tu ne connais pas encore ce lieu.";
    if ("savoir" in c || "lu" in c || "second" in c) return "Une autre partie ouvrira ce chemin.";
    if ("lead" in c) return "Il faut que " + nameOf(story, c.lead) + " mène le groupe.";
    if ("souv" in c) return "Ce souvenir n'est plus à toi.";
    if ("souvenirs" in c) return c.min != null ? "Il faut avoir gardé au moins " + c.min + " souvenirs." : "Il faut avoir donné plus de souvenirs.";
    if ("night" in c) return c.night ? "Seulement la nuit." : "Seulement le jour.";
    if ("stock" in c) { var SD = (story.stocks || {})[c.stock] || {}; return c.min != null ? "Il faut " + c.min + (SD.unit ? " " + unitOf(SD, c.min) : "") + " : " + (SD.name || c.stock) + "." : (SD.name || c.stock) + " : il y en a trop."; }
    if ("temps" in c) return "Pas par ce temps-ci.";
    if ("blessure" in c) return c.blessure === false ? "Pas avec une blessure ouverte." : "Seulement avec cette blessure.";
    if ("fatigue" in c) return c.max != null ? "La fatigue te le défend." : "Il faut avoir veillé davantage.";
    if ("trait" in c) return "Ce n'est pas dans ton caractère.";
    if ("angoisse" in c) return maxOf(c, "angoisse") != null ? "Tu es trop troublé{e} pour cela." : "Il faudrait que la peur te tienne davantage.";
    if ("attache" in c) return "Ce lien n'est pas assez fort pour cela.";
    if ("doute" in c) return "Il faudrait d'abord douter de ce qu'on t'a dit.";
    if ("recit" in c) return "Tu n'as pas encore entendu cette version.";
    if ("secret" in c) return "Tu ne le sais pas.";
    if ("voile" in c || "voiles" in c) return "Il faudrait avoir entendu ce que les mots cachent.";
    if ("lens" in c) return "Il te faudrait : " + ((lensDef(story, c.lens) || {}).name || c.lens) + ".";
    if ("camp" in c) return c.camp && c.camp !== "none" ? "Seulement pour qui a rallié " + (((story.camps || {})[c.camp] || {}).name || c.camp) + "." : "Seulement tant que tu n'as rallié aucun camp.";
    return "Ce chemin est fermé pour l'instant.";
  }
  function nameOf(story, c) { return ((story.companions || {})[c] || {}).name || c; }
  function questTitle(story, id) { var q = (story.quests || []).filter(function (x) { return x.id === id; })[0]; return q ? q.title : id; }

  // ------------------------------------------------------------------ hidden words (8.5, « paroles cachées »)
  // Intent: a sentence said aloud may hide another one. The scenario writes {{lens|what is said|what lies beneath}} (or
  // {{lens#id|…|…}} to name it); the story declares its lenses (story.lenses: { <lens>: { name, item | if, effect, hint,
  // charges, empty, say } }). A hero who holds the lens sees the words stir on the page (the lens's effect); a tap
  // reveals the words beneath, for good. A hero without it reads the words said, plainly, with nothing to tell them apart.
  // Why: Clément, 15/11: objects that let the reader find, in the characters' lines, pieces of sentences that move,
  // and a tap shows the true text hidden beneath; a whole story built on it. The engine vouches for the rest: which
  // words stir, what a reveal sets (`voile:<id>`, the veil's own fx from story.veils), the lens's charges, the notebook.
  var VEIL_RE = /\{\{([a-z0-9_]+)(?:#([a-z0-9_:-]+))?\|((?:[^|{}]|\{[A-Za-z_]+\})*)\|((?:[^{}]|\{[A-Za-z_]+\})*)\}\}/g; // {e}, {hero} allowed inside
  // The way the words stir on the page (the app draws them; without motion, a colour and a dotted line).
  var LENS_EFFECTS = ["tremble", "ondule", "lueur", "givre", "braise", "encre", "chuchote"];
  var VEIL_OPEN = "\uE000", VEIL_MID = "\uE001", VEIL_CLOSE = "\uE002";
  function veilHash(t) { var x = 0; for (var i = 0; i < t.length; i++) x = (x * 31 + t.charCodeAt(i)) >>> 0; return x.toString(36); }
  // An unnamed veil is known by its lens and its words said: the same words, wherever they stand, are the same veil.
  function veilId(lens, id, said) { return id || lens + "~" + veilHash(said); }
  // Intent: index(Story) ! every veil written anywhere in the story, by id: { lens, said, truth, at } (non-enumerable)
  function veilIndex(story) {
    var idx = {}, clash = [];
    function scan(o, at) {
      if (o == null) return;
      if (typeof o === "string") { if (o.indexOf("{{") >= 0) o.replace(VEIL_RE, function (m, lens, id, a, b) { var k = veilId(lens, id, a); if (!idx[k]) idx[k] = { id: k, lens: lens, said: a, truth: b, at: at }; else if (idx[k].truth !== b || idx[k].lens !== lens) clash.push(k + " (" + idx[k].at + " / " + at + ")"); return m; }); return; }
      if (Array.isArray(o)) { o.forEach(function (x) { scan(x, at); }); return; }
      if (typeof o === "object") Object.keys(o).forEach(function (k) { scan(o[k], at); });
    }
    Object.keys(story.passages || {}).forEach(function (id) { scan(story.passages[id].text, id); });
    Object.keys(story.items || {}).forEach(function (id) { scan(story.items[id].text, "objet:" + id); });
    scan(story.epilogue, "epilogue");
    try { Object.defineProperty(story, "__veils", { value: idx, enumerable: false, configurable: true }); Object.defineProperty(story, "__veilClash", { value: clash, enumerable: false, configurable: true }); } catch (e) { story.__veils = idx; }
  }
  function veilsOf(story) { if (!story.__veils) veilIndex(story); return story.__veils || {}; }
  function veilInfo(story, id) { return veilsOf(story)[id] || null; }
  function lensDef(story, k) { return (story.lenses || {})[k] || null; }
  // A lens is held when its object is in the bag (the hero's, or a fellow hero's who walks along) and its condition holds.
  function lensHeld(story, s, k) {
    var L = lensDef(story, k); if (!L) return false;
    if (L.item && !countItem(s, L.item) && !carrier(s, L.item)) return false;
    if (L.if != null && !evalCond(story, s, L.if)) return false;
    return !!(L.item || L.if != null);
  }
  // A lens may have charges (an oil that burns, a breath that tires): each reveal spends one; fx.recharge gives some back.
  function lensLeft(story, s, k) { var L = lensDef(story, k) || {}; if (L.charges == null) return Infinity; var v = (s.lensLeft || {})[k]; return v == null ? L.charges : v; }
  function revealed(s, id) { return !!(s.veils || {})[id]; }
  // In a paragraph: the words said, marked for the page when the hero can see them stir (state "cache", or "eteint"
  // when the lens has no charge left), or the words beneath, marked "vu", once revealed.
  function veilMark(story, s, t) {
    if (!story.lenses || String(t).indexOf("{{") < 0) return t;
    return String(t).replace(VEIL_RE, function (m, lens, id, a, b) {
      var k = veilId(lens, id, a);
      if (revealed(s, k)) return VEIL_OPEN + k + "|" + lens + "|vu" + VEIL_MID + b + VEIL_CLOSE;
      if (!lensHeld(story, s, lens)) return a;
      return VEIL_OPEN + k + "|" + lens + "|" + (lensLeft(story, s, lens) > 0 ? "cache" : "eteint") + VEIL_MID + a + VEIL_CLOSE;
    });
  }
  // Anywhere else (a button, a line of the notebook): the plain words, said or revealed.
  function veilPlain(s, t) { return t.indexOf("{{") < 0 ? t : t.replace(VEIL_RE, function (m, lens, id, a, b) { return revealed(s, veilId(lens, id, a)) ? b : a; }); }
  // The markers left in a text by veilMark: [{ id, lens, state, text }].
  var VEIL_MARK_RE = /\uE000([^\uE001]*)\uE001([\s\S]*?)\uE002/g;
  function veilsIn(texts) {
    var out = [];
    [].concat(texts || []).forEach(function (t) { String(t).replace(VEIL_MARK_RE, function (m, meta, txt) { var q = meta.split("|"); out.push({ id: q[0], lens: q[1], state: q[2], text: txt }); return m; }); });
    return out;
  }
  function unveil(t) { return String(t).replace(VEIL_MARK_RE, "$2"); }
  // Intent: reveal(Story, State, VeilId) -> Bool ! the words beneath are shown for good: `voile:<id>` is set, the
  // veil's own fx (story.veils[id].fx: a clue, a flag) applies, a charge is spent. False when the hero cannot.
  function reveal(story, s, id) {
    var V = veilInfo(story, id); if (!V) throw new Error("voile inconnu " + id);
    if (revealed(s, id) || !lensHeld(story, s, V.lens)) return false;
    var L = lensDef(story, V.lens);
    if (lensLeft(story, s, V.lens) <= 0) { ev(s, interp(s, L.empty || (L.name + " ne montre plus rien pour l'instant.")), "veil"); return false; }
    s.veils = s.veils || {}; s.veils[id] = { t: s.turn || 1, at: s.node };
    if (L.charges != null) { s.lensLeft = s.lensLeft || {}; s.lensLeft[V.lens] = lensLeft(story, s, V.lens) - 1; }
    s.flags["voile:" + id] = true;
    stat(s, "voiles");
    var D = (story.veils || {})[id];
    if (D && D.fx) apply(story, s, D.fx);
    if (L.charges != null && s.lensLeft[V.lens] === 0) ev(s, interp(s, L.spent || (L.name + " : plus rien à dévoiler avant de l'avoir ravivé{e}.")).replace(/ravivé\{e\}/, "ravivé"), "veil");
    checkFeats(story, s);
    return true;
  }
  // The first time a lens is in hand, one line says what it does (story.lenses[k].say, or its hint).
  function lensNews(story, s) {
    if (!story.lenses) return;
    s.lensSeen = s.lensSeen || {};
    Object.keys(story.lenses).forEach(function (k) {
      if (s.lensSeen[k] || !lensHeld(story, s, k)) return;
      s.lensSeen[k] = 1; var L = story.lenses[k];
      ev(s, interp(s, L.say || (L.name + " : " + (L.hint || "certains mots, désormais, bougent sur la page.") + " Touche-les pour lire dessous.")), "veil");
    });
  }
  function veilCount(story, s, lens) { return Object.keys(s.veils || {}).filter(function (k) { return !lens || [].concat(lens).indexOf((veilInfo(story, k) || {}).lens) >= 0; }).length; }

  // ------------------------------------------------------------------ text
  // {autre}: in a game with several players, the other players' heroes (s.allies, set by src/multi.js).
  // {autre:e}, {autre:il}, {autre:Il}, {autre:le}, {autre:lui} (8.4, « À deux »): agreed with the other player's hero
  // (s.alliesFem, set by src/multi.js); with several others, the plural; alone, the masculine of « l'autre ».
  var AUTRE = { e: ["", "e", "s"], il: ["il", "elle", "ils"], Il: ["Il", "Elle", "Ils"], le: ["le", "la", "les"], lui: ["lui", "elle", "eux"] };
  function autreForm(s, k) { var f = s.alliesFem || [], n = (s.allies || []).length; var F = AUTRE[k]; return n > 1 ? F[2] : f[0] ? F[1] : F[0]; }
  function interp(s, t) { return veilPlain(s, String(t)).replace(/\{autre:(e|il|Il|le|lui)\}/g, function (m, k) { return autreForm(s, k); }).replace(/\{autre\}/g, s.allies && s.allies.length ? s.allies.join(" et ") : "l'autre").replace(/\{hero\}/g, heroName(s)).replace(/\{niveau\}/g, String(level(s))).replace(/\{marque\}/g, String(s.mark))
    // {e}: the agreement of the lead hero ("assis{e}"), from the companion's own f: true.
    .replace(/\{e\}/g, s.fem ? "e" : ""); }
  // Intent: read(Story, State, Tagged, PassageId) -> Bool = do the tags a paragraph, a choice or a passage carries hold now
  // Why: Clément, 12/11: a scenario says things with tags, the engine does the rest. An author writes who the lines
  // need (with / without), when they happen (when: "day" | "night"), what must have happened (after / before) and
  // whether this is the first visit or a return (first / again); the engine alone decides what is shown.
  // "any" stands for "someone travels with the lead": with: "any" = accompanied, without: "any" = alone.
  function hereTag(story, s, k) {
    if (k === "any") return Object.keys(story.companions || {}).some(function (c) { return c !== s.lead && s.met[c] === "party"; });
    return present(s, k);
  }
  // after / before read an event: a flag that was set, or a passage that was seen.
  function happened(s, f) { return !!s.flags[f] || !!s.seen[f]; }
  function tagsOk(story, s, t, node) {
    if (t.with != null && ![].concat(t.with).every(function (k) { return hereTag(story, s, k); })) return false;
    if (t.without != null && [].concat(t.without).some(function (k) { return hereTag(story, s, k); })) return false;
    // outcome: how the reader got here, "win" | "lose" | "flee" | "calm" of the test or fight just before.
    if (t.outcome != null && [].concat(t.outcome).indexOf(s.last || "") < 0) return false;
    if (t.when === "night" && !isNight(s)) return false;
    if (t.when === "day" && isNight(s)) return false;
    if (t.after != null && ![].concat(t.after).every(function (f) { return happened(s, f); })) return false;
    if (t.before != null && [].concat(t.before).some(function (f) { return happened(s, f); })) return false;
    // via: how the reader came into this page, the tag of the choice taken (`via` on a choice or on a roll's branch)
    // or the passage just left (Clément, 13/11, « Une soirée » : a scene opens otherwise after a flight, a quarrel…).
    if (t.via != null && ![].concat(t.via).some(function (k) { return k === s.via || k === s.from; })) return false;
    // second: the second reading. The reader has already reached an ending of this story in an earlier game
    // (true), or this ending (its id, with or without "fin:"). The app gives it at the start of a game (s.second).
    if (t.second != null && !secondOk(s, t.second)) return false;
    // regard: { person: "cordial" | [words] } — the line a person says depends on how they see the hero (7.9).
    if (t.regard != null && !regardOk(s, t.regard)) return false;
    // fresh: "clue" — shown while that clue can still be found (its `fades` moment has not passed, 7.9).
    // On a choice that takes time, the clue must still be there when the reader arrives, after the hours it takes.
    if (t.fresh != null) {
      var tk = t.takes != null && t.label != null ? takesOf(s, t.takes) : null, keepT = s.time;
      if (tk) s.time += tk.hours;
      var gone = [].concat(t.fresh).some(function (k) { return faded(story, s, k); });
      s.time = keepT;
      if (gone) return false;
    }
    // camp: "x" — the scene belongs to that camp: closed once the hero has rallied one of its rivals (8.0).
    if (t.camp != null && !campOk(story, s, t.camp)) return false;
    // At sea (8.1): under this sky, in this season, with this wound still open, with this scar.
    if (t.temps != null && [].concat(t.temps).indexOf(weatherOf(story, s)) < 0) return false;
    if (t.saison != null && !(seasonOf(story, s) && [].concat(t.saison).indexOf(seasonOf(story, s).id) >= 0)) return false;
    if (t.blessure != null && !woundOk(story, s, t.blessure)) return false;
    if (t.cicatrice != null && ![].concat(t.cicatrice).some(function (k) { return !!s.flags["cicatrice:" + k]; })) return false;
    // A closed room (8.3): what dread shows (trouble) and what it hides (calme); tender lines the reader may mask.
    if (t.trouble != null && t.trouble !== false && !dreadTrouble(story, s, t.trouble)) return false;
    if (t.calme != null && t.calme !== false && dreadTrouble(story, s, t.calme)) return false;
    if (t.tendre && s.tendre === "masquer") return false;
    if (!cardTagsOk(story, s, t)) return false;
    if (t.first && s.seen[node] > 1) return false;
    if (t.again && !(s.seen[node] > 1)) return false;
    return true;
  }
  function secondOk(s, k) {
    var known = s.second || {};
    if (k === true) return Object.keys(known).length > 0;
    if (k === false) return !Object.keys(known).length;
    return [].concat(k).some(function (e) { return !!(known[e] || known["fin:" + e]); });
  }
  var SCENE_TAGS = ["with", "without", "when", "after", "before", "second", "regard", "fresh", "camp", "temps", "saison", "tendre", "trouble", "calme"];
  // blessure: true = some wound is open; an id or a list: one of these is open; false: none is.
  function woundOk(story, s, w) { var open = woundsOpen(story, s); if (w === true) return open.length > 0; if (w === false) return !open.length; return [].concat(w).some(function (k) { return open.indexOf(k) >= 0; }); }
  function sceneOk(story, s, p) { return !SCENE_TAGS.some(function (k) { return p[k] != null; }) || tagsOk(story, s, p, null); }
  // marks (optional): receives the place in the returned list of each paragraph shown for a second reading.
  function textList(story, s, list, node, marks) {
    var out = [];
    node = node || s.node;
    (list || []).forEach(function (t, i) {
      if (typeof t === "string") out.push(interp(s, veilMark(story, s, t)));
      // by / cases: one paragraph per value of a state, else for any other value or none.
      else if (t && typeof t === "object" && t.by != null && t.cases) {
        if (!tagsOk(story, s, t, node) || !evalCond(story, s, t.if)) return;
        var cv = stateOf(s, t.by), txt = cv != null && t.cases[cv] != null ? t.cases[cv] : t.else;
        if (txt != null) out.push(interp(s, veilMark(story, s, txt)));
      }
      else if (t && typeof t === "object") {
        var ok = tagsOk(story, s, t, node) && evalCond(story, s, t.if);
        // once: told during one visit only (a clue is given once, never repeated).
        if (ok && t.once) {
          s.once = s.once || {}; var key = node + "#" + i, visit = s.seen[node] || 1;
          if (s.once[key] == null) s.once[key] = visit; else if (s.once[key] !== visit) return;
        }
        if (ok && t.text != null) { out.push(interp(s, veilMark(story, s, t.text))); if (marks && t.second != null && t.second !== false) marks.push(out.length - 1); }
        else if (!ok && t.else != null) out.push(interp(s, veilMark(story, s, t.else)));
      }
    });
    return out;
  }

  // ------------------------------------------------------------------ quests
  function questsOf(story, act) { return (story.quests || []).filter(function (q) { return !act || q.act === act; }); }
  function questDone(s, q) { return !!s.flags["quete:" + q.id]; }
  function questRefused(s, q) { return !!s.flags["quete-refus:" + q.id]; }
  // A quest is missed when the story has moved past it: its act is over, or its own `closes` condition holds.
  function questMissed(story, s, q) {
    if (questDone(s, q) || questRefused(s, q)) return false;
    if (q.closes != null && evalCond(story, s, q.closes)) return true;
    // A quest with a date (quest.due, 8.0): past it, the world has gone on without the hero.
    if (q.due && reached(s, q.due)) return true;
    var ids = (story.acts || []).map(function (a) { return a.id; }), at = ids.indexOf(s.lastAct), qa = ids.indexOf(q.act);
    return qa >= 0 && at > qa;
  }
  function questStarted(s, q) { return !!((q.start && s.seen[q.start]) || s.flags["quete-vue:" + q.id]); }
  function questState(s, q, story) {
    if (questDone(s, q)) return "faite";
    if (questRefused(s, q)) return "refusée";
    if (story && questMissed(story, s, q)) return "manquée";
    return questStarted(s, q) ? "en cours" : "à découvrir";
  }
  function questOpen(story, s, q) { return questStarted(s, q) && questState(s, q, story) === "en cours"; }
  function remaining(story, s, act) { return questsOf(story, act).filter(function (q) { return !questDone(s, q) && !questRefused(s, q) && !questMissed(story, s, q) && !(q.optionalIf && evalCond(story, s, q.optionalIf)); }); }
  // Intent: passages(Story, Quest) -> {id: true} = the quest's own scenes, from its first passage up to the next crossroads
  // Why: Clément (12/11): a reader who walks out of a quest halfway must find its door again. The door's `hide` was
  // written on "seen"; it is read as if the quest's own scenes had not been seen, as long as the quest is open.
  var QUEST_SCENES = typeof WeakMap === "function" ? new WeakMap() : null;
  function questScenes(story, q) {
    var all = QUEST_SCENES && QUEST_SCENES.get(story); if (!all) { all = {}; if (QUEST_SCENES) QUEST_SCENES.set(story, all); }
    if (all[q.id]) return all[q.id];
    var out = {}, todo = [q.start];
    while (todo.length) {
      var id = todo.shift(); if (!id || out[id] || !story.passages[id]) continue;
      out[id] = true; var p = story.passages[id];
      if (id !== q.start && (p.hub || p.routes || p.end)) continue;
      (p.choices || []).forEach(function (c) {
        (function add(to) { if (Array.isArray(to)) to.forEach(function (x) { add(x.to); }); else if (typeof to === "string" && to.charAt(0) !== "@") todo.push(to); })([{ to: c.to }, { to: c.win && c.win.to }, { to: c.lose && c.lose.to }]);
      });
    }
    return (all[q.id] = out);
  }
  // Intent: hidden(Story, State, Choice) -> bool = the choice's own `hide`, but an open quest's door stays open
  function hiddenChoice(story, s, c) {
    if (!c.hide) return false;
    if (!evalCond(story, s, c.hide)) return false;
    var q = typeof c.to === "string" && (story.quests || []).filter(function (x) { return x.start === c.to; })[0];
    if (!q || !questOpen(story, s, q) || c.refuse) return true;
    var keep = s.seen, sc = questScenes(story, q), seen = {};
    Object.keys(keep).forEach(function (k) { if (!sc[k]) seen[k] = keep[k]; });
    s.seen = seen;
    try { return evalCond(story, s, c.hide); } finally { s.seen = keep; }
  }
  // The quest a refusal belongs to: the one named, or the open quest whose scenes hold this passage.
  function questOfRefusal(story, s, c) {
    if (typeof c.refuse === "string") return (story.quests || []).filter(function (q) { return q.id === c.refuse; })[0] || null;
    var here = s.node;
    return (story.quests || []).filter(function (q) { return q.start && !questDone(s, q) && !questRefused(s, q) && questScenes(story, q)[here]; })[0] || null;
  }

  // ------------------------------------------------------------------ effects
  // An event pushed while a choice is played and before its page is entered led to that page (a roll, its outcome,
  // a blow): it is marked `pre`, and the page shows it before the text (Clément, 13/11).
  function ev(s, text, cls, extra) { var e = { text: text, cls: cls || "" }; if (extra) for (var k in extra) e[k] = extra[k]; if (s.evIn === false) e.pre = 1; s.events.push(e); }
  function fmt(n) { return Number(n).toLocaleString("fr-FR"); }
  function heal(s, n) { var before = s.pv; s.pv = Math.min(pvMax(s), s.pv + n); return s.pv - before; }
  function apply(story, s, fx) {
    if (!fx) return;
    var k;
    // Hidden words (9.1): a lens's charges given back (recharge: { <lens>: n }), up to its own count (or `max`).
    if (fx.recharge) Object.keys(fx.recharge).forEach(function (L) {
      var LD = lensDef(story, L); if (!LD) throw new Error("lentille inconnue " + L); if (LD.charges == null) return;
      s.lensLeft = s.lensLeft || {}; var was = lensLeft(story, s, L);
      s.lensLeft[L] = Math.max(0, Math.min(LD.max || LD.charges, was + fx.recharge[L]));
      if (s.lensLeft[L] > was) ev(s, interp(s, LD.name) + " : " + s.lensLeft[L] + " " + (LD.unit || "charge") + (s.lensLeft[L] > 1 ? "s" : ""), "veil");
    });
    // devoile: the story itself lifts a veil (someone says it plainly at last).
    [].concat(fx.devoile || []).forEach(function (id) { if (!revealed(s, id)) { s.veils = s.veils || {}; s.veils[id] = { t: s.turn || 1, at: s.node }; s.flags["voile:" + id] = true; } });
    [].concat(fx.flag || [], fx.flags || []).forEach(function (f) { s.flags[f] = true; });
    // voie (8.5): the hero's calling, from a past answer; the class it plays like follows.
    if (fx.voie && (story.voies || {})[fx.voie]) { s.voie = fx.voie; s.arch = story.voies[fx.voie].like; }
    // set: { key: value }, a state with one value at a time (written as the flag "key=value", read by has or is).
    if (fx.set) Object.keys(fx.set).forEach(function (k) {
      Object.keys(s.flags).forEach(function (f) { if (f.indexOf(k + "=") === 0) delete s.flags[f]; });
      if (fx.set[k] != null) s.flags[k + "=" + fx.set[k]] = true;
    });
    [].concat(fx.unflag || []).forEach(function (f) { delete s.flags[f]; });
    [].concat(fx.clue || []).forEach(function (id) {
      var cl = story.clues[id];
      if (!cl) throw new Error("indice inconnu " + id);
      // A clue that has faded (its moment is past) can no longer be found: the scene should have said so (fresh).
      if (faded(story, s, id)) { guard(s, "l'indice « " + id + " » s'est effacé et le texte le donne encore (tag fresh)"); return; }
      if (!s.clues[id]) {
        s.clues[id] = true;
        // A closed room (8.3): a clue noted in the grip of dread is marked so; the reader may weigh it.
        var shaky = story.dread && dreadTrouble(story, s); if (shaky) { s.shaky = s.shaky || {}; s.shaky[id] = 1; }
        ev(s, "Indice (" + ((story.mysteries[cl.rev] || {}).title || cl.rev) + ") : " + cl.text + (shaky ? " (noté dans le trouble)" : ""), "clue" + (shaky ? " shaky" : ""));
      }
    });
    if (fx.mark) { s.mark = Math.max(0, s.mark + fx.mark); ev(s, fx.mark > 0 ? "La Marque grandit : " + s.mark : "La Marque pâlit : " + s.mark, "stain"); }
    if (fx.ep) {
      var kind = Array.isArray(fx.ep) ? fx.ep[0] : null, v = Array.isArray(fx.ep) ? fx.ep[1] : fx.ep, lv = level(s), K = EP[kind];
      if (K) v = Math.max(K[0], Math.min(K[1], v));
      var maxBefore = pvMax(s);
      s.ep += v;
      ev(s, "+" + fmt(v) + " EP" + (K ? " · " + K[2] : ""));
      if (level(s) > lv) { s.pv += pvMax(s) - maxBefore; ev(s, "Niveau " + level(s) + " !", "good level"); }
      // The other heroes who walk with the lead learn as much.
      Object.keys(s.heroes || {}).forEach(function (h) { if (present(s, h)) { var l0 = levelOfEp(s.heroes[h].ep); s.heroes[h].ep += v; if (levelOfEp(s.heroes[h].ep) > l0) ev(s, s.heroes[h].name + " passe niveau " + levelOfEp(s.heroes[h].ep) + ".", "good level"); } });
    }
    if (fx.catchup) {
      var tgt = fx.catchup * EP_PER_LEVEL;
      if (fx.catchupAll) Object.keys(s.heroes || {}).forEach(function (h) { if (s.heroes[h].ep < tgt) s.heroes[h].ep = tgt; });
      if (s.ep < tgt) { var lv2 = level(s), m0 = pvMax(s), gain = tgt - s.ep; s.ep = tgt; ev(s, "+" + fmt(gain) + " EP · " + (fx.catchupWhy || "les semaines de l'entracte")); if (level(s) > lv2) { s.pv += pvMax(s) - m0; ev(s, "Niveau " + level(s) + " !", "good level"); } }
    }
    [].concat(fx.join || []).forEach(function (c2) {
      if (!story.companions[c2]) throw new Error("compagnon inconnu " + c2);
      if (s.met[c2] !== "party") { var fresh = !s.met[c2]; if (fresh) metAt(s, c2); s.met[c2] = "party"; if (s.conf[c2] == null) s.conf[c2] = CONF_START_PARTY; if (s.fear[c2] == null) s.fear[c2] = 0; if (fresh) carryRep(s, c2); ev(s, story.companions[c2].name + " rejoint le groupe.", "good"); }
    });
    [].concat(fx.met || []).forEach(function (c2) {
      if (!story.companions[c2]) throw new Error("compagnon inconnu " + c2);
      if (!s.met[c2]) { metAt(s, c2); s.met[c2] = "met"; if (s.conf[c2] == null) s.conf[c2] = CONF_START_MET; if (s.fear[c2] == null) s.fear[c2] = 0; carryRep(s, c2); }
    });
    [].concat(fx.leave || []).forEach(function (c2) { if (s.met[c2] === "party") { s.met[c2] = "gone"; ev(s, story.companions[c2].name + " quitte le groupe.", "bad"); } });
    [["conf", "Confiance"], ["fear", "Crainte"]].forEach(function (m) {
      var key = m[0];
      if (!fx[key]) return;
      for (k in fx[key]) {
        if (!story.companions[k]) throw new Error("compagnon inconnu " + k);
        var d = fx[key][k];
        // Reputation (Clément, 12/11): what one does reaches those who are not there. It is not shown now; they
        // say a word when you meet again. One never met yet keeps it until the meeting.
        if (!present(s, k)) {
          s.rep = s.rep || {}; var r = s.rep[k] = s.rep[k] || { conf: 0, fear: 0 }; r[key] += d;
          if (s.met[k]) s[key][k] = Math.max(0, Math.min(100, (s[key][k] || 0) + d));
          continue;
        }
        s[key][k] = Math.max(0, Math.min(100, (s[key][k] || 0) + d));
        ev(s, story.companions[k].name + " · " + m[1] + " " + (d > 0 ? "+" : "−") + Math.abs(d), (d > 0) === (key === "conf") ? "good" : "bad", { conseq: 1 });
      }
    });
    for (k in story.companions || {}) {
      if (s.met[k] === "party" && k !== s.lead && fx.conf && fx.conf[k] < 0 && (s.conf[k] || 0) < LEAVE_UNDER && (s.fear[k] || 0) < FEAR_HOLDS) {
        s.met[k] = "gone"; ev(s, story.companions[k].name + " ne te fait plus confiance et s'en va.", "bad");
      }
    }
    if (fx.fac) for (k in fx.fac) {
      if (!story.factions[k]) throw new Error("faction inconnue " + k);
      s.fac[k] = Math.max(-100, Math.min(100, (s.fac[k] || 0) + fx.fac[k]));
      ev(s, story.factions[k] + " · " + (fx.fac[k] > 0 ? "+" : "−") + Math.abs(fx.fac[k]), fx.fac[k] > 0 ? "good" : "bad");
    }
    [].concat(fx.relic || []).forEach(function (r) {
      if (!story.relics[r]) throw new Error("relique inconnue " + r);
      if (s.relics.indexOf(r) < 0) { s.relics.push(r); var gi = s.given.indexOf(r); if (gi >= 0) s.given.splice(gi, 1); ev(s, "Relique : " + story.relics[r], "good"); }
    });
    [].concat(fx.give || []).forEach(function (r) {
      if (!story.relics[r]) throw new Error("relique inconnue " + r);
      if (s.given.indexOf(r) < 0) { s.given.push(r); var at = s.relics.indexOf(r); if (at >= 0) s.relics.splice(at, 1); ev(s, "Donnée : " + story.relics[r]); }
    });
    if (typeof fx.relicLose === "string") { var li = s.relics.indexOf(fx.relicLose); if (li >= 0) { s.relics.splice(li, 1); s.flags["vole:" + fx.relicLose] = true; ev(s, "Perdue : " + story.relics[fx.relicLose], "bad"); } }
    else if (fx.relicLose && s.relics.length) { var lost = s.relics.pop(); s.flags["vole:" + lost] = true; ev(s, "Perdue : " + story.relics[lost], "bad"); }
    [].concat(fx.item || []).forEach(function (it) {
      if (!(story.items || {})[it]) throw new Error("objet inconnu " + it);
      var I = story.items[it];
      if (I.unique !== false && s.items.indexOf(it) >= 0) return;
      s.items.push(it);
      // A letter, a register, a deed: the page offers to read it at once (7.9, « Lettres et documents »).
      if (I.kind === "document" && I.text) ev(s, "Document : " + I.name, "item doc", { doc: it }); else ev(s, "Objet : " + I.name, "item");
      // A chart (8.1): the places it shows go on the reader's map.
      if (I.reveals) apply(story, s, { reveal: I.reveals });
    });
    // A thing handed over leaves the bag, or the pack of the hero at your side who carries it.
    [].concat(fx.drop || []).forEach(function (it) {
      var at = s.items.indexOf(it), h;
      if (at >= 0) { s.items.splice(at, 1); ev(s, "Tu n'as plus : " + item(story, it).name); }
      else if ((h = carrier(s, it))) { s.heroes[h].items.splice(s.heroes[h].items.indexOf(it), 1); ev(s, s.heroes[h].name + " n'a plus : " + item(story, it).name); }
    });
    if (fx.gold) { s.gold = Math.max(0, s.gold + fx.gold); ev(s, (fx.gold > 0 ? "+" : "−") + money(story, fx.gold) + " · bourse : " + money(story, s.gold), fx.gold > 0 ? "good" : ""); }
    if (fx.food) { s.food = Math.max(0, s.food + fx.food); ev(s, (fx.food > 0 ? "+" : "−") + Math.abs(fx.food) + " jour" + (Math.abs(fx.food) > 1 ? "s" : "") + " de vivres · reste " + s.food); }
    if (fx.pv) {
      if (fx.pv === "max") { var g = heal(s, pvMax(s)); s.fatigue = 0; if (g) ev(s, "Tu es remis sur pied : " + s.pv + " PV", "good"); Object.keys(story.companions || {}).forEach(function (k) { if (present(s, k)) healComp(story, s, k, cpvMax(story, s, k)); }); }
      else if (fx.pv > 0) { var g2 = heal(s, fx.pv); if (g2) ev(s, "+" + g2 + " PV (" + s.pv + "/" + pvMax(s) + ")", "good"); }
      else { s.pv = Math.max(1, s.pv + fx.pv); ev(s, "−" + Math.abs(fx.pv) + " PV (" + s.pv + "/" + pvMax(s) + ")", "bad"); }
    }
    if (fx.rest) { s.fatigue = 0; }
    // At sea (8.1): watches that tire, the sky forced by a scene, wounds opened, dressed, healed.
    if (fx.fatigue) { var f0 = s.fatigue || 0; s.fatigue = Math.max(0, Math.min(FATIGUE_MAX, f0 + fx.fatigue)); if (s.fatigue !== f0) ev(s, "Fatigue " + (s.fatigue > f0 ? "+" : "−") + Math.abs(s.fatigue - f0) + " · " + interp(s, s.fatigue ? "−" + s.fatigue * 5 + " à tous les jets" : "reposé{e}"), s.fatigue > f0 ? "bad" : "good"); }
    if (fx.meteo) setWeather(story, s, fx.meteo);
    [].concat(fx.blessure || []).forEach(function (k) { woundOpen(story, s, k); });
    if (fx.trait) traitMove(story, s, fx.trait);
    if (fx.pratique) Object.keys(fx.pratique).forEach(function (d) { practiceUse(story, s, d, fx.pratique[d]); });
    [].concat(fx.soigner || []).forEach(function (k) { woundDef(story, k); var W0 = (s.wounds || {})[k]; if (W0 && !W0.healed && !W0.tended) { W0.tended = true; ev(s, "Blessure pansée : " + story.wounds[k].name + ".", "good wound"); woundsTick(story, s); } });
    [].concat(fx.guerir || []).forEach(function (k) { woundDef(story, k); woundClose(story, s, k); });
    if (fx.time) { s.time += fx.time; }
    [].concat(fx.stamp || []).forEach(function (k) { s.stamps = s.stamps || {}; if (s.stamps[k] == null) s.stamps[k] = day(s); });
    if (fx.until != null) { s.time += ((fx.until - hour(s)) + 24) % 24 || 24; } // sleep or wait until the next such hour
    [].concat(fx.reveal || []).forEach(function (pl) {
      if (!((story.world || {}).places || {})[pl]) throw new Error("lieu inconnu " + pl);
      if (!s.known[pl]) { s.known[pl] = true; ev(s, "Nouveau lieu sur ta carte : " + story.world.places[pl].name, "map"); }
    });
    [].concat(fx.meet || []).forEach(function (pe) {
      if (!(story.people || {})[pe]) throw new Error("personnage inconnu " + pe);
      if (!s.people[pe]) { s.people[pe] = true; metAt(s, pe); ev(s, "Rencontré : " + story.people[pe].name, "people"); }
    });
    if (fx.regard) for (k in fx.regard) {
      if (!(story.people || {})[k] && !(story.companions || {})[k]) throw new Error("personnage inconnu " + k);
      if (!REGARDS[fx.regard[k]]) throw new Error("regard inconnu " + fx.regard[k]);
      s.regard = s.regard || {}; s.regard[k] = fx.regard[k];
    }
    if (fx.aspect) for (k in fx.aspect) {
      if (!personOf(story, k)) throw new Error("personnage inconnu " + k);
      s.aspect = s.aspect || {}; s.aspect[k] = Object.assign({}, s.aspect[k] || {}, fx.aspect[k]);
    }
    if (fx.qui) for (k in fx.qui) { if (!personOf(story, k)) throw new Error("personnage inconnu " + k); s.qui = s.qui || {}; s.qui[k] = fx.qui[k]; }
    if (fx.clock) for (k in fx.clock) s.clock[k] = (s.clock[k] || 0) + fx.clock[k];
    [].concat(fx.quest || []).forEach(function (q) {
      if (!(story.quests || []).some(function (x) { return x.id === q; })) throw new Error("quête inconnue " + q);
      if (!s.flags["quete:" + q]) { s.flags["quete:" + q] = true; ev(s, "Quête accomplie : " + questTitle(story, q), "quest"); }
    });
    [].concat(fx.questSeen || []).forEach(function (q) { if (!s.flags["quete-vue:" + q]) { s.flags["quete-vue:" + q] = true; ev(s, "Nouvelle quête : " + questTitle(story, q), "quest"); } });
    if (fx.assign) for (k in fx.assign) { if (!story.companions[k]) throw new Error("compagnon inconnu " + k); s.assign = s.assign || {}; s.assign[k] = fx.assign[k]; }
    // "resume" alone bookmarks where the current team will pick up when the reader next leaves it (chapter end, crossroads)
    if (fx.resume && !fx.team) s.bookmark = fx.resume;
    if (fx.team) switchTeam(story, s, fx.team, fx.resume);
    if (fx.regroup) regroup(story, s);
    if (fx.lead) setLead(story, s, fx.lead, fx.leadQuiet);
    // learn (8.9): a thing the reader keeps for every later game of this story (story.savoirs: { id: { title, text } }).
    [].concat(fx.learn || []).forEach(function (k) {
      if (!(story.savoirs || {})[k]) throw new Error("savoir inconnu " + k);
      s.lore = s.lore || {}; if (s.lore[k]) return;
      s.lore[k] = 1; (s.loreNew = s.loreNew || {})[k] = 1;
      ev(s, "Tu gardes pour les parties suivantes : " + story.savoirs[k].title + ".", "good lore");
    });
    [].concat(fx.away || []).forEach(function (c3) { if (!story.companions[c3]) throw new Error("compagnon inconnu " + c3); if (c3 !== s.lead && s.met[c3] === "party") { s.met[c3] = "away"; if (!fx.leadQuiet) ev(s, nameOf(story, c3) + " n'est plus avec toi.", "bad"); } });
    // "awayUnless" {companion: condition}: sends each companion away unless its condition holds (e.g. who fell with the lead)
    Object.keys(fx.awayUnless || {}).forEach(function (c3) { if (!story.companions[c3]) throw new Error("compagnon inconnu " + c3); if (c3 !== s.lead && s.met[c3] === "party" && !evalCond(story, s, fx.awayUnless[c3])) { s.met[c3] = "away"; if (!fx.leadQuiet) ev(s, nameOf(story, c3) + " n'est plus avec toi.", "bad"); } });
    [].concat(fx.souv || []).forEach(function (r) {
      var sr = souvRef(s, r), S = souvOf(story, sr.hero)[sr.id];
      if (!S) throw new Error("souvenir inconnu " + r);
      if (!s.flags["souv:" + sr.hero + ":" + sr.id]) { s.flags["souv:" + sr.hero + ":" + sr.id] = true; ev(s, "Souvenir donné" + (sr.hero !== s.lead ? " (" + nameOf(story, sr.hero) + ")" : "") + " : " + S.label, "stain souv"); }
    });
    [].concat(fx.souvBack || []).forEach(function (r) {
      var sr = souvRef(s, r), S = souvOf(story, sr.hero)[sr.id];
      if (!S) throw new Error("souvenir inconnu " + r);
      if (s.flags["souv:" + sr.hero + ":" + sr.id]) { delete s.flags["souv:" + sr.hero + ":" + sr.id]; ev(s, "Souvenir retrouvé : " + S.label, "good souv"); }
    });
    // A siege (8.0): the city's stocks, promises and debts, councils, camps, ties.
    if (fx.stock) for (k in fx.stock) {
      if (!(story.stocks || {})[k]) throw new Error("réserve inconnue " + k);
      var sb = stockNow(story, s, k); setStock(story, s, k, sb + fx.stock[k]);
      var sd = s.stocks[k] - sb, SD0 = story.stocks[k];
      if (sd) ev(s, SD0.name + " : " + (sd > 0 ? "+" : "−") + stockLine(story, s, k, Math.abs(sd)) + " → " + stockLine(story, s, k, s.stocks[k]), sd > 0 ? (SD0.bad ? "bad" : "good") : (SD0.bad ? "good" : "bad"));
    }
    [].concat(fx.promise || []).forEach(function (id) {
      var D = promiseDef(story, id); s.promises = s.promises || {};
      if (s.promises[id]) return;
      s.promises[id] = { state: "en cours", t: timeLabel(s) };
      var who = (story.people || {})[D.to] ? story.people[D.to].name : null;
      ev(s, (D.kind === "dette" ? "Dette" : "Promesse") + " : " + interp(s, D.text) + (who ? " (" + who + ")" : "") + (D.due ? ", avant le jour " + D.due.day + (D.due.hour != null ? " à " + D.due.hour + " h" : "") : ""), "promise");
    });
    [].concat(fx.keep || []).forEach(function (id) { promiseDef(story, id); promiseEnd(story, s, id, "tenue"); });
    [].concat(fx.break || []).forEach(function (id) { promiseDef(story, id); promiseEnd(story, s, id, "rompue"); });
    [].concat(fx.forgive || []).forEach(function (id) { promiseDef(story, id); promiseEnd(story, s, id, "remise"); });
    if (fx.sway) Object.keys(fx.sway).forEach(function (m) {
      var D = motionDef(story, m); s.leans = s.leans || {}; s.leanKnown = s.leanKnown || {};
      Object.keys(fx.sway[m]).forEach(function (who) {
        var to = fx.sway[m][who]; if (!VOTES[to] && to !== "indecis") throw new Error("vote inconnu " + to);
        (s.leans[m] = s.leans[m] || {})[who] = to; (s.leanKnown[m] = s.leanKnown[m] || {})[who] = true;
        if (VOTES[to]) ev(s, "Conseil · " + (story.people[who] || {}).name + " votera " + (to === "abstention" ? "l'abstention" : to) + " : « " + interp(s, D.title) + " ».", "vote");
      });
    });
    if (fx.sound) Object.keys(fx.sound).forEach(function (m) {
      var D = motionDef(story, m), who = fx.sound[m] === true ? memberIds(story, D.council) : [].concat(fx.sound[m]);
      s.leanKnown = s.leanKnown || {};
      who.forEach(function (k) { (s.leanKnown[m] = s.leanKnown[m] || {})[k] = true; });
    });
    if (fx.camp) {
      var CP = (story.camps || {})[fx.camp]; if (!CP) throw new Error("camp inconnu " + fx.camp);
      var old = s.camp;
      if (old !== fx.camp) {
        if (old) { s.flags["camp-quitte:" + old] = true; var OL = story.camps[old].leader; if (OL) { s.regard = s.regard || {}; s.regard[OL] = "trahi"; } }
        s.camp = fx.camp; apply(story, s, { set: { camp: fx.camp }, flag: "camp:" + fx.camp });
        ev(s, "Ton camp : " + CP.name + ". D'autres portes se ferment.", "camp");
      }
    }
    [].concat(fx.tie || []).forEach(function (id) {
      var T = (story.ties || []).filter(function (x) { return x.id === id; })[0]; if (!T) throw new Error("lien inconnu " + id);
      s.tiesKnown = s.tiesKnown || {}; if (s.tiesKnown[id]) return; s.tiesKnown[id] = timeLabel(s);
      ev(s, "Qui est avec qui : " + interp(s, T.label), "tie");
    });
    // A closed room (8.3).
    [].concat(fx.recit || []).forEach(function (id) { accountHear(story, s, id); });
    // Two players (8.4): a secret of one's own, one overheard behind the other's back, one told to the other.
    [].concat(fx.secret || []).forEach(function (id) { secretLearn(story, s, id, "own"); });
    [].concat(fx.surprend || []).forEach(function (id) { secretLearn(story, s, id, "surpris"); });
    [].concat(fx.confier || []).forEach(function (id) { secretTell(story, s, id); });
    [].concat(fx.geste || []).forEach(function (id) { gesteDo(story, s, id); });
    if (fx.angoisse) dreadMove(story, s, fx.angoisse);
    if (fx.attache) Object.keys(fx.attache).forEach(function (k) {
      if (!(story.attachments || {})[k]) throw new Error("attachement inconnu " + k);
      s.attache = s.attache || {}; s.attache[k] = Math.max(0, Math.min(ATTACH_MAX, attachOf(s, k) + fx.attache[k]));
    });
    // Cards (9.7): a thread opened, tied or missed by the story itself; élan given or taken.
    if (fx.fil) { [].concat(fx.fil.ouvre || []).forEach(function (k) { threadOpen(story, s, k); }); [].concat(fx.fil.noue || []).forEach(function (k) { threadTie(story, s, k); }); [].concat(fx.fil.rate || []).forEach(function (k) { threadMiss(story, s, k); }); }
    if (DECK_FX.some(function (k) { return fx[k]; })) deckFx(story, s, fx);
    if (fx.elan) { var JE = jeuOf(story, s); JE.elan = Math.max(0, Math.min(ELAN_MAX, JE.elan + fx.elan)); ev(s, "Élan " + (fx.elan > 0 ? "+" : "−") + Math.abs(fx.elan) + " (" + JE.elan + ").", "carte"); }
    if (fx.note) ev(s, interp(s, fx.note), fx.noteCls || "");
  }


  // ------------------------------------------------------------------ several playable heroes, souvenirs, teams
  // A story may declare `heroes`: several playable characters, each with an entry in `companions` too (name, trust).
  // One hero is the lead (s.lead): his sheet lives at the top of the state (name, arch, ep, pv, items, fatigue,
  // arrows), so every rule above works unchanged. The others keep their sheet in s.heroes and fight as companions with
  // their own class, level and kit. Gold, provisions, tags and clues are shared. A hero's seven souvenirs are tags
  // ("souv:<hero>:<id>" = given away): giving one is the price of the Winter's powers, and the text reads it.
  // Teams: heroes and companions are assigned to named teams (fx.assign); fx.team switches to a team, saving where the
  // other one stopped ("@team" resumes it, or starts it at story.teams[team].start). Story without heroes: no change.
  // A hero who was elsewhere brings his own day, place, purse and provisions (the six prologues run side by side); a
  // hero who walks with the lead takes over the shared purse and provisions, and the day does not move.
  var SHEET_KEYS = ["name", "arch", "ep", "items", "fatigue", "arrows"], APART_KEYS = ["time", "place", "gold", "food"];
  function isHero(story, id) { return !!(story.heroes && story.heroes[id]); }
  function heroIds(story) { return Object.keys(story.heroes || {}); }
  function heroSheet(s, id) {
    if (id === s.lead) return { name: s.name, arch: s.arch, ep: s.ep, items: s.items, fatigue: s.fatigue, arrows: s.arrows, pv: s.pv };
    return (s.heroes || {})[id] || { name: id, arch: "guerrier", ep: s.ep, items: [] };
  }
  // Intent: carrier(State, Item) -> Hero? ! the hero walking with the lead who has the thing in their own pack
  function carrier(s, it) { return Object.keys(s.heroes || {}).filter(function (h) { return h !== s.lead && present(s, h) && (s.heroes[h].items || []).indexOf(it) >= 0; })[0] || null; }
  function heroLevel(s, id) { return levelOfEp(heroSheet(s, id).ep); }
  function kitOf(story, arch) { return (((W(story).start || {}).kits || {})[arch] || []).slice(); }
  // Intent: init(Story, State) -> () ! builds every hero's sheet and loads the lead
  function initHeroes(story, s) {
    var lv = (story.acts && story.acts[0] && story.acts[0].levels && story.acts[0].levels[0]) || 1;
    s.heroes = {}; s.cpv = s.cpv || {}; s.assign = s.assign || {}; s.teams = s.teams || {}; s.team = s.team || null;
    var lead = story.leadStart || heroIds(story)[0];
    heroIds(story).forEach(function (id) {
      var H = story.heroes[id], kit, arrows = 0;
      if (H.player) { if (!s.arch) s.arch = H.arch || "guerrier"; if (!s.name) s.name = H.name || nameOf(story, id); }
      var arch = H.player ? s.arch : H.arch, items = (H.items || []).slice().concat(kit = kitOf(story, arch));
      kit.forEach(function (k) { if (item(story, k).ammo) arrows += BOW_ARROWS; });
      var sheet = { name: H.player ? s.name : (H.name || nameOf(story, id)), arch: arch, ep: Math.max(EP_PER_LEVEL * (H.level || lv), H.player ? s.ep : 0), items: items, fatigue: 0, arrows: arrows,
        time: H.time != null ? H.time : START_HOUR, place: H.place || null, gold: H.gold || 0, food: H.food || 0 };
      if (id === lead) {
        s.lead = id; s.fem = !!((story.companions || {})[id] || {}).f; s.name = sheet.name; s.arch = sheet.arch; s.ep = sheet.ep; s.items = s.items.concat(items); s.fatigue = 0; s.arrows = (s.arrows || 0) + arrows;
        s.gold += sheet.gold; s.food += sheet.food; if (H.place) s.place = H.place; if (H.time != null) s.time = H.time;
        s.pv = pvMax(s); s.met[id] = "party"; if (s.conf[id] == null) s.conf[id] = CONF_START_PARTY; if (s.fear[id] == null) s.fear[id] = 0;
      } else { s.heroes[id] = sheet; s.cpv[id] = cpvMax(story, s, id); }
    });
  }
  // Intent: switch(Story, State, Hero) -> () ! the lead's sheet goes back to s.heroes, the new lead's comes up
  function setLead(story, s, id, quiet) {
    if (!isHero(story, id)) throw new Error("héros inconnu " + id);
    if (id === s.lead) return;
    s.fem = !!((story.companions || {})[id] || {}).f;
    var old = s.lead, together = present(s, id);
    if (old != null) { var o = {}; SHEET_KEYS.concat(APART_KEYS).forEach(function (k) { o[k] = s[k]; }); if (together) { o.gold = 0; o.food = 0; } s.heroes[old] = o; s.cpv = s.cpv || {}; s.cpv[old] = Math.max(1, s.pv); }
    var n = s.heroes[id];
    SHEET_KEYS.forEach(function (k) { s[k] = n[k]; });
    if (together) { s.gold += n.gold || 0; s.food += n.food || 0; }
    else APART_KEYS.forEach(function (k) { if (n[k] !== undefined) s[k] = n[k]; });
    s.fatigue = s.fatigue || 0; s.arrows = s.arrows || 0;
    s.lead = id; delete s.heroes[id];
    s.pv = s.cpv && s.cpv[id] != null ? s.cpv[id] : pvMax(s); if (s.cpv) delete s.cpv[id];
    s.pv = Math.min(s.pv, pvMax(s));
    s.met[id] = "party"; if (s.conf[id] == null) s.conf[id] = CONF_START_PARTY; if (s.fear[id] == null) s.fear[id] = 0;
    if (!quiet) ev(s, "Tu mènes maintenant : " + s.name + ".", "lead");
  }
  function souvOf(story, hero) { return ((story.heroes || {})[hero] || {}).souvenirs || {}; }
  // "id" is a souvenir of the lead, "hero:id" one of another hero.
  function souvRef(s, ref) { var i = String(ref).indexOf(":"); return i < 0 ? { hero: s.lead, id: ref } : { hero: ref.slice(0, i), id: ref.slice(i + 1) }; }
  function souvKept(story, s, hero, id) { return !!souvOf(story, hero)[id] && !s.flags["souv:" + hero + ":" + id]; }
  function souvCount(story, s, hero) { return Object.keys(souvOf(story, hero)).filter(function (id) { return souvKept(story, s, hero, id); }).length; }
  function teamMembers(s, team) { return Object.keys(s.assign || {}).filter(function (k) { return s.assign[k] === team; }); }
  // Intent: switch(Story, State, Team) -> () ! the other team waits where it stopped
  function switchTeam(story, s, team, resume) {
    s.teams = s.teams || {}; s.assign = s.assign || {};
    if (s.team) {
      // whoever walks with the current team and has no team yet stays with it
      Object.keys(s.met).forEach(function (k) { if (s.met[k] === "party" && !s.assign[k]) s.assign[k] = s.team; });
      s.teams[s.team] = { lead: s.lead, resume: resume || s.bookmark || s.node, place: s.place };
    }
    delete s.bookmark;
    var mine = teamMembers(s, team);
    var saved = s.teams[team] || {}, lead = saved.lead && mine.indexOf(saved.lead) >= 0 ? saved.lead : heroIds(story).filter(function (h) { return mine.indexOf(h) >= 0; })[0];
    // the other team lives apart: its lead keeps its own purse, day and place
    if (lead && lead !== s.lead && s.assign[lead] !== s.assign[s.lead]) { s.met[lead] = "away"; setLead(story, s, lead, true); }
    else if (lead) setLead(story, s, lead, true);
    Object.keys(s.assign).forEach(function (k) {
      if (s.assign[k] === team) { if (s.met[k] === "away" || s.met[k] === "party") s.met[k] = "party"; }
      else if (s.met[k] === "party") s.met[k] = "away";
    });
    if (s.lead && s.met[s.lead] === "away") s.met[s.lead] = "party";
    if (saved.place !== undefined) s.place = saved.place;
    s.team = team;
    ev(s, "Tu suis maintenant : " + (((story.teams || {})[team] || {}).name || team) + ", avec " + s.name + ".", "lead");
  }
  function regroup(story, s) {
    Object.keys(s.assign || {}).forEach(function (k) { if (s.met[k] === "away") s.met[k] = "party"; });
    s.assign = {}; s.teams = {}; s.team = null;
    ev(s, "Le groupe est réuni.", "good");
  }
  // Intent: list(Story, State, Passage) -> [Choice] = on a hub, take the lead with another hero present
  function leadChoices(story, s, p) {
    if (!story.heroes || !p || !p.hub || p.noLead) return [];
    return heroIds(story).filter(function (h) { return h !== s.lead && present(s, h); }).map(function (h) {
      return { sys: "lead", hero: h, group: "lead", label: "Mener avec " + heroSheet(s, h).name };
    });
  }

  // ------------------------------------------------------------------ world: places, routes, travel
  // Intent: money(Story, Amount, short?) -> Text = an amount in the world's own coins
  // Why: Clément (12/11): the engine counts in one unit, the story says how its world names it (écus and sous, or
  // anything). world.money = { units: [{ name, plural, value, short }] }, value in the engine's unit.
  var DEFAULT_MONEY = { units: [{ name: "pièce", plural: "pièces", value: 1, short: "p." }] };
  function moneyUnits(story) {
    var m = (story && ((story.world && story.world.money) || story.money)) || DEFAULT_MONEY;
    return (m.units || DEFAULT_MONEY.units).slice().sort(function (a, b) { return b.value - a.value; });
  }
  function money(story, n, short) {
    var us = moneyUnits(story), left = Math.abs(Math.round(n || 0)), parts = [];
    us.forEach(function (u, i) {
      var k = i === us.length - 1 ? Math.round(left / u.value) : Math.floor(left / u.value);
      if (!k) return; left -= k * u.value;
      parts.push(k + (short ? " " + (u.short || u.name) : " " + (k > 1 ? (u.plural || u.name + "s") : u.name)));
    });
    var low = us[us.length - 1];
    if (!parts.length) return short ? "0 " + (low.short || low.name) : "pas un " + low.name;
    return short ? parts.join(" ") : parts.length > 1 ? parts.slice(0, -1).join(", ") + " et " + parts[parts.length - 1] : parts[0];
  }
  function W(story) { return story.world || { places: {}, routes: [], regions: {}, events: {} }; }
  function routesFrom(story, s, placeId) {
    // r.hide: a condition under which the route is not offered at all (e.g. a later act's road through an old place).
    return (W(story).routes || []).filter(function (r) { return (r.from === placeId || (r.to === placeId && r.twoWay !== false)) && !(r.hide && evalCond(story, s, r.hide)); });
  }
  function otherEnd(r, placeId) { return r.from === placeId ? r.to : r.from; }
  function travelChoices(story, s, p) {
    if (!p.routes || !s.place) return [];
    return routesFrom(story, s, s.place).map(function (r) {
      var to = otherEnd(r, s.place), pl = W(story).places[to] || { name: to }, days = r.steps * STEP_HOURS / 24;
      var done = s.routesDone[r.id];
      // Taken backwards, a route says where it really leads: its own return label, or the name of the place.
      var lab = r.from === s.place ? (r.label || ("Prendre la route de " + pl.name)) : (r.labelBack || ("Retour : " + pl.name));
      return { sys: "travel", route: r.id, dest: to, label: lab + " · " + (r.steps) + " étape" + (r.steps > 1 ? "s" : "") + (done ? " (déjà parcourue)" : ""),
        if: r.if, why: r.why, exit: r.exit, group: "route", hint: "≈ " + (days < 1 ? Math.round(r.steps * STEP_HOURS) + " h" : (Math.round(days * 2) / 2).toString().replace(".", ",") + " j") };
    });
  }
  function startTravel(story, s, r, dest, fast) {
    s.travel = { route: r.id, from: s.place, to: dest, step: 0, total: r.steps, fast: !!fast, region: r.region || null };
    s.place = null;
    advanceTravel(story, s);
  }
  // One step of a journey: time passes, then the step's written event, a random event of the region, a quiet road, or
  // the camp when night falls; at the last step, arrival at the destination's arrival passage.
  function advanceTravel(story, s) {
    var t = s.travel, r = (W(story).routes || []).filter(function (x) { return x.id === t.route; })[0];
    if (t.step >= t.total) { arrive(story, s); return; }
    // Night falls before the next step: camp first, so a step's written event is never lost to the dark.
    if (isNight(s)) { t.phase = "camp"; s.node = "@camp"; return; }
    t.step++;
    s.time += STEP_HOURS;
    t.pending = null;
    roadToll(story, s, t);
    var legs = (r.legs || []).filter(function (l) { return l.step === t.step && (l.dir == null || l.dir === dirOf(r, t)) && !s.seen[l.passage] && evalCond(story, s, l.if); });
    if (legs.length) { t.phase = "event"; enter(story, s, legs[0].passage); return; }
    var region = (W(story).regions || {})[t.region] || {};
    // A trip already made goes fast, without events, unless the region declares `repeatChance`: its events not yet met
    // may still come on a later trip (a route whose first trip is all written scenes needs it, or its events never come).
    if (!t.fast || region.repeatChance) {
      var pool = (region.events || []).map(function (id) { return (W(story).events || {})[id]; }).filter(function (e) {
        return e && !(e.once !== false && s.seen[e.passage]) && evalCond(story, s, e.if);
      });
      var chanceEv = t.fast ? region.repeatChance : region.chance == null ? 0.6 : region.chance;
      if (pool.length && RNG() < chanceEv) {
        var tot = 0; pool.forEach(function (e) { tot += e.weight || 1; });
        var x = RNG() * tot, chosen = pool[0];
        for (var i = 0; i < pool.length; i++) { x -= pool[i].weight || 1; if (x <= 0) { chosen = pool[i]; break; } }
        t.phase = "event"; enter(story, s, chosen.passage); return;
      }
    }
    t.phase = "quiet"; s.node = "@road";
  }
  // What the road takes (piste 10, 15/11): a region `tiring: n` adds a point of fatigue every n steps; under a sky whose
  // kind says `hurts: { wound, chance, say }`, a step may leave a wound (a fall on the ice, frostbite, sunstroke).
  // The road is where these things happen: in a village, the sky only weighs on the rolls.
  // Clément, 15/11: the rules stay simple so that a book can always be finished. The road's toll (weather that weighs on
  // rolls when it follows the roads, long roads that tire, bad weather that wounds) is for the Héroïque difficulty only;
  // at the other levels the sky still changes and is told, and nothing more.
  function roadTollOn(s) { return !!diffOf(s).roadToll; }
  function roadToll(story, s, t) {
    var region = (W(story).regions || {})[t.region] || {};
    weatherTick(story, s);
    if (!roadTollOn(s)) return;
    if (region.tiring && t.step % region.tiring === 0 && (s.fatigue || 0) < FATIGUE_MAX) apply(story, s, { fatigue: 1 });
    var K = weatherKind(story, s), H = K && K.hurts;
    if (H && story.wounds && story.wounds[H.wound] && !(s.wounds || {})[H.wound] && RNG() < (H.chance == null ? 0.25 : H.chance)) {
      if (H.say) ev(s, interp(s, H.say), "bad");
      apply(story, s, { blessure: H.wound });
    }
  }
  function dirOf(r, t) { return t.from === r.from ? "aller" : "retour"; }
  function arrive(story, s) {
    var t = s.travel, pl = W(story).places[t.to];
    s.routesDone[t.route] = true;
    s.place = t.to; s.known[t.to] = true; s.travel = null;
    ev(s, "Arrivée : " + pl.name + " · " + timeLabel(s), "map");
    var arrivePassage = (pl.arriveIf || []).filter(function (a) { return evalCond(story, s, a.if); }).map(function (a) { return a.passage; })[0] || pl.arrive;
    enter(story, s, arrivePassage);
  }
  function camp(story, s, how) {
    var t = s.travel;
    Object.keys(story.companions || {}).forEach(function (k) { if (present(s, k)) healComp(story, s, k, Math.ceil(cpvMax(story, s, k) * CAMP_HEAL)); });
    if (s.food > 0) { s.food--; s.fatigue = 0; var g = heal(s, Math.ceil(pvMax(s) * CAMP_HEAL)); ev(s, "Bivouac : un jour de vivres mangé (reste " + s.food + ")" + (g ? ", +" + g + " PV" : ""), "good"); }
    else { s.fatigue += HUNGER_FATIGUE; s.pv = Math.max(1, s.pv - HUNGRY_PV); ev(s, "Bivouac sans vivres : la faim te creuse (−" + HUNGRY_PV + " PV, fatigue " + s.fatigue + ", −" + (s.fatigue * 5) + " à tous les jets)", "bad"); }
    s.time += (24 - hour(s) + NIGHT_TO) % 24; // sleep until morning
    t.phase = null;
  }
  function dueBanter(story, s, act) {
    var bs = story.banter || [];
    for (var i = 0; i < bs.length; i++) {
      var b = bs[i], p = story.passages[b.id];
      if (!s.seen[b.id] && p && (!act || !p.act || p.act === act) && evalCond(story, s, b.if)) return b.id;
    }
    return null;
  }

  // ------------------------------------------------------------------ combat (game choice, simpler than RMU)
  // Two sides. Ours: the hero and the companions present, each in a rank (front or back). Theirs: the foes. Foes in
  // melee strike the front rank; the back rank is reached only by foes that shoot or go round (`flank`), or once nobody
  // stands in front. A fight may start at a distance (`range: "loin"`): foes spend the first exchange closing in.
  // `terrain` (nature, bati, galerie) says where a ranger can melt into the land. Clément, 11/11: each class fights its
  // own way, and the warrior stays the best with a weapon.
  var FRONT = "devant", BACK = "derriere", RANGE_FAR = "loin", TERRAIN_NATURE = "nature";
  var FAR_FLEE_BONUS = 20;               // fleeing before the foes close in
  var CLOSE_SHOT_MALUS = -20;            // shooting with a foe at arm's length (not for the ranger)
  var SHADOW_HIT = 30, SHADOW_MULT = 2;  // a blow from hiding
  var OPEN_DEF = 30;                     // an "open" foe (after a feint) loses this much defence against the next blow
  var TRAP_ROUNDS = 2, TRAP_DEF = 30;    // a trapped foe neither strikes nor defends well for two exchanges
  var FEINT_FLEE = 30;                   // a feint opens a way out
  var MASTER_HIT = 10, MASTER_DMG = 2;   // the warrior's weapon mastery (only class with a weapon bonus)
  var POWER_HIT = -20, POWER_MULT = 2;   // powerful blow
  var LINE_HIT = 15, RIPOSTE_MARGIN = 30;// holding the line: foes strike him at −15; a miss by 30+ earns a riposte
  var BACKSTAB_MULT = 3;
  var BLESS_HIT = 15;                    // a priest's blessing on the companions
  var SOOTHE = 25;                       // a bard's soothing song: +25 to talk, foes −25 for the rest of the fight
  var SHOT_BONUS = 10;                   // the ranger's own shooting
  var SLING = { name: "Fronde de fortune", kind: "arme", ranged: true, dmg: 3, att: 0 }; // a ranger always makes one
  var BOW_ARROWS = 12;                   // a ranger's quiver at the start
  var COMPANION_FALL_CONF = -5;          // left to fall in a fight
  var ORDER_REFUSE_UNDER = 20;           // a companion this wary refuses dangerous orders
  var COMP_HEAL = 5, COMP_HEAL_UNDER = 0.8, COMP_BOLT_DMG = 4, COMP_CASTER_FROM = 25, FRONT_FROM = 20;
  // A healer tends anyone below 80 % of his PV; a pacifist with nobody to tend turns the blows aside with his staff,
  // foes strike at -10 that exchange (Clément, 11/11: Odon did nothing unless ordered).
  var COMP_DISTRACT = 10;
  var COMP_HEAL_EASE = 40;               // tending a wound at arm's length is an easy prayer (+40): Odon heals 2 times in 3 at level 1

  // Techniques by archetype, unlocked at a level (start, 3, 6 = the starts of the three acts). kind says what the
  // engine does; `once` = once a fight; `say` = the novel's lines (ok, ko), {foe} and {hero} replaced.
  var TECHS = {
    guerrier: [
      { id: "maitre", lvl: 1, kind: "master", label: "Maître d'armes", tip: "+" + MASTER_HIT + " pour toucher et +" + MASTER_DMG + " dégâts avec une arme." },
      { id: "puissante", lvl: 3, kind: "power", dom: "combat", label: "Frappe puissante", spareLabel: "Le repousser de toute ta force",
        say: { ok: ["Tu mets tout ton poids dans le coup, et {foe} le prend de plein fouet.", "Ta lame descend comme une hache sur une bûche."], ko: ["Le coup est trop large ; {foe} le voit venir et s'en écarte.", "Tu frappes la pierre, et le choc te remonte jusqu'à l'épaule."] } },
      { id: "ligne", lvl: 6, kind: "line", label: "Tenir la ligne", tip: "Pour tout le combat : les ennemis te visent d'abord, à −" + LINE_HIT + ", et tu ripostes à ceux qui te manquent de " + RIPOSTE_MARGIN + ".",
        say: { ok: ["Tu te plantes devant les autres, l'arme haute. « Par ici. » Et ils viennent."] } },
    ],
    voleur: [
      { id: "feinte", lvl: 1, kind: "feint", dom: "discretion", label: "Feinte",
        say: { ok: ["Tu montres la lame à gauche et tu passes à droite ; {foe} mord dans le vide et se découvre.", "Un pas, un faux pas, un regard ailleurs : {foe} y croit, et sa garde s'ouvre."], ko: ["{foe} ne bronche pas. Il a déjà vu ce tour-là.", "Ta feinte est trop belle pour être vraie, et {foe} ne s'y laisse pas prendre."] } },
      { id: "esquive", lvl: 3, kind: "dodge", label: "Esquive", tip: "Toute ta Discrétion compte en défense ce tour.",
        say: { ok: ["Tu ne cherches plus à frapper : tu deviens l'endroit où les coups ne sont pas."] } },
      { id: "traitre", lvl: 6, kind: "backstab", dom: "combat", label: "Coup en traître", spareLabel: "Le frapper au défaut, du plat",
        say: { ok: ["Tu entres par le trou qu'il a laissé dans sa garde, et tu frappes là où ça ne pardonne pas.", "Il ne t'a pas vu venir. Il ne te verra pas repartir."], ko: ["Il se retourne au dernier instant ; ta lame glisse sur lui."] } },
    ],
    rodeur: [
      { id: "tir", lvl: 1, kind: "shot", dom: "combat", label: "Tir",
        say: { ok: ["Le trait part avant que tu aies fini d'y penser, et {foe} le prend en plein corps.", "Une respiration, la corde contre la joue, et tu lâches."], ko: ["Le trait siffle à un pouce de {foe} et se perd dans le noir.", "Ta main tremble à peine. C'est assez pour manquer."] } },
      { id: "fondre", lvl: 3, kind: "hide", dom: "nature", label: "Se fondre dans le décor", tip: "Seulement en terrain naturel. Caché, on ne peut pas te viser, et ton prochain coup vaut double.",
        say: { ok: ["Un pas de côté, un buisson, une ombre : tu n'es plus là. {foe} cherche, la tête basse, et ne trouve rien."], ko: ["Une pierre roule sous ton pied. Ils savent exactement où tu es."] } },
      { id: "piege", lvl: 6, kind: "trap", dom: "nature", label: "Piège", spareLabel: "L'entraver", tip: "À distance ou caché : un collet, une corde, une pierre qui roule au bon moment.",
        say: { ok: ["Le collet se referme sur la patte de {foe}, et le voilà qui tire, qui se tord, qui ne va plus nulle part.", "La corde se tend au ras du sol ; {foe} s'y prend les pieds et s'étale."], ko: ["{foe} enjambe ton piège sans même le voir."] } },
    ],
    mage: [
      { id: "trait", lvl: 1, kind: "bolt", dom: "magie", dmg: 5, label: "Trait de feu",
        say: { ok: ["Le feu te monte dans la paume et part d'un coup, un trait orange qui frappe {foe} en pleine poitrine.", "Tu dis le mot, et l'air entre vous s'embrase."], ko: ["Le mot sort de travers ; une fumée, une odeur de poil brûlé, rien de plus.", "Le trait part, mais {foe} n'est plus là quand il arrive."] } },
      { id: "egide", lvl: 3, kind: "ward", dom: "magie", v: 40, label: "Égide",
        say: { ok: ["Une lumière pâle se referme sur toi comme une eau. Les coups glissent dessus."], ko: ["L'égide se forme, frémit, et se défait comme une bulle."] } },
      { id: "sommeil", lvl: 6, kind: "sleep", dom: "magie", once: true, label: "Sommeil",
        say: { ok: ["Tu chuchotes. {foe} cligne des yeux, chancelle, et s'affaisse comme un sac."], ko: ["{foe} secoue la tête comme une bête piquée, et revient sur toi plus fâché qu'avant."] } },
    ],
    pretre: [
      // Clément, 11/11: the priest is healing first, so the prayer comes at the start; the burning light is his
      // ordinary blow (like the ranger's shot), so a lone priest can still win.
      { id: "soin", lvl: 1, kind: "heal", dom: "magie", v: 6, label: "Prière de soin",
        say: { ok: ["Tu poses les mains, et la chaleur passe. La plaie se ferme comme une bouche qui se tait."], ko: ["Les mots sont justes, mais la chaleur ne vient pas."] } },
      { id: "lumiere", lvl: 1, kind: "bolt", dom: "magie", dmg: 5, label: "Lumière qui brûle",
        say: { ok: ["Tu lèves la main et la lumière en jaillit, blanche, brûlante ; {foe} recule en se couvrant les yeux."], ko: ["La prière reste dans ta gorge. Le ciel, ce tour-ci, ne répond pas."] } },
      { id: "benir", lvl: 3, kind: "bless", dom: "magie", once: true, label: "Bénédiction", tip: "Tes compagnons frappent à +" + BLESS_HIT + " jusqu'à la fin du combat.",
        say: { ok: ["Tu dis leurs noms, un par un, et quelque chose se redresse en eux."], ko: ["Tu dis leurs noms, mais le vacarme les couvre."] } },
      { id: "cercle", lvl: 6, kind: "healAll", dom: "magie", v: 6, once: true, label: "Cercle de guérison", tip: "Soigne tout le groupe, une fois par combat.",
        say: { ok: ["Tu ouvres les bras. La chaleur part de toi en rond, comme une onde sur l'eau, et chacun la sent passer."], ko: ["Le cercle se forme, vacille, et se défait avant d'arriver jusqu'à eux."] } },
    ],
    barde: [
      { id: "note", lvl: 1, kind: "bolt", dom: "social", dmg: 4, label: "Note qui fend",
        say: { ok: ["Tu chantes une seule note, si haute qu'elle coupe, et {foe} porte les mains à sa tête."], ko: ["Ta voix se casse. La note tombe à terre comme un oiseau mort."] } },
      { id: "desarroi", lvl: 3, kind: "dread", dom: "social", v: 25, label: "Chant de désarroi",
        say: { ok: ["Tu chantes faux exprès, à contretemps, et leurs gestes se mettent à boiter avec ta chanson."], ko: ["Ils n'écoutent pas. Ils ont autre chose en tête que la musique."] } },
      { id: "apaise", lvl: 6, kind: "soothe", dom: "social", once: true, label: "Chant qui apaise",
        say: { ok: ["Tu baisses ton arme et tu chantes doucement, une chanson de chez toi. Les coups se font plus lents, puis plus rares."], ko: ["Ta chanson se perd sous les cris."] } },
    ],
  };
  // A fight that can end in peace (`calm`, the Gardien) opens the mage's Sleep and the bard's soothing song at any level
  // (game choice: otherwise only an Act III hero could reach that scene).
  function techsOf(s) { return (TECHS[s.arch] || []).filter(function (t) { return level(s) >= t.lvl || (s.combat && s.combat.calm && (t.kind === "sleep" || t.kind === "soothe")); }); }
  function hasTech(s, id) { return techsOf(s).some(function (t) { return t.id === id; }); }
  function techById(s, id) { return (TECHS[s.arch] || []).filter(function (t) { return t.id === id; })[0]; }

  function enemyDef(story, e) { var base = typeof e === "string" ? (story.enemies || {})[e] : e; if (!base) throw new Error("ennemi inconnu " + e); return base; }
  function comp(story, c) { return (story.companions || {})[c] || {}; }
  // Intent: compute(Story, State, Companion) -> Int
  // Why: companions follow the hero's level (game choice) and the same hit point rule.
  function cpvMax(story, s, c) {
    if (isHero(story, c) && c !== s.lead) { var hs = heroSheet(s, c); return PV_BASE + (ARCHS[hs.arch] || ARCHS.guerrier).pv + PV_PER_LEVEL * (levelOfEp(hs.ep) - 1); }
    return PV_BASE + (comp(story, c).pv || 6) + PV_PER_LEVEL * (level(s) - 1);
  }
  // Intent: describe(Story, State, Companion) -> Companion = a playable hero who follows the lead fights with his own
  // sheet: his best weapon and armour, a priest heals.
  function compOf(story, s, c) {
    var base = comp(story, c);
    if (!isHero(story, c) || c === s.lead) return base;
    var hs = heroSheet(s, c), w = null, a = null;
    (hs.items || []).forEach(function (id) { var it = item(story, id); if (it.kind === "arme" && !it.ranged && (!w || (it.dmg || 0) > (w.dmg || 0))) w = it; if (it.kind === "armure" && (!a || (it.def || 0) > (a.def || 0))) a = it; });
    var disc = bonus(story, s, "discretion", c);
    return Object.assign({}, base, { weapon: w ? { name: w.name, dmg: w.dmg, att: w.att || 0 } : base.weapon, def: (a ? a.def : 0) + Math.floor(disc / 5), healer: hs.arch === "pretre" || !!base.healer });
  }
  function cpv(story, s, c) { s.cpv = s.cpv || {}; if (s.cpv[c] == null) s.cpv[c] = cpvMax(story, s, c); return s.cpv[c]; }
  function healComp(story, s, c, n) { var b = cpv(story, s, c); s.cpv[c] = Math.min(cpvMax(story, s, c), b + n); return s.cpv[c] - b; }
  function ranged(story, s) {
    var best = null;
    s.items.forEach(function (id) { var it = item(story, id); if (it.ranged && (!it.ammo || (s.arrows || 0) > 0) && (!best || it.dmg > best.dmg)) best = Object.assign({ id: id }, it); });
    if (!best && s.arch === "rodeur") best = SLING;
    return best;
  }
  function meleeWeapon(story, s) { var w = weapon(story, s); return w && !w.ranged ? w : null; }
  // Intent: list(Story, State) -> [Member] = hero then companions present
  function members(story, s) {
    var out = [{ who: "hero" }];
    Object.keys(story.companions || {}).forEach(function (c) { if (present(s, c) && c !== s.lead) out.push({ who: c }); });
    return out;
  }
  function alive(story, s, who) { return who === "hero" ? s.pv > 0 : cpv(story, s, who) > 0; }
  function domOf(story, s, who, dom) { return who === "hero" ? bonus(story, s, dom) : bonus(story, s, dom, who); }

  function startCombat(story, s, fight) {
    var foes = [];
    s.beasts = s.beasts || {};
    (fight.enemies || []).forEach(function (e, i) {
      var d = enemyDef(story, e.id || e), n = e.n || 1;
      s.beasts[e.id || e] = (s.beasts[e.id || e] || 0) + n; // the bestiary of the reader
      var fpv = Math.max(1, Math.round(d.pv * diffOf(s).foePv));
      for (var j = 0; j < n; j++) foes.push({ key: (e.id || e) + "-" + i + "-" + j, name: d.name + (n > 1 ? " " + (j + 1) : ""), pv: fpv, pvMax: fpv, att: d.att, def: d.def, dmg: d.dmg,
        flank: !!d.flank, ranged: !!d.ranged, fearless: !!d.fearless, down: false, open: false, trapped: 0, asleep: false });
    });
    var c = s.combat = { foes: foes, round: 0, win: fight.win, lose: fight.lose, flee: fight.flee || null, talk: fight.talk || null, calm: fight.calm || null,
      title: fight.title || "Combat", range: fight.range || "contact", terrain: fight.terrain || "", spare: !!fight.spare,
      defending: false, ward: 0, dread: 0, used: {}, rank: {}, orders: {}, hidden: false, line: false, dodge: false, blessed: false, soothed: false,
      fleeBonus: 0, orderRound: -1, arrowsUsed: 0, thrown: false };
    // Ranks: the best fighters in front (Combat 20+), the others behind; somebody always stands in front.
    var ms = members(story, s);
    ms.forEach(function (m) { c.rank[m.who] = domOf(story, s, m.who, "combat") >= FRONT_FROM && !compOf(story, s, m.who).healer ? FRONT : BACK; });
    if (!ms.some(function (m) { return c.rank[m.who] === FRONT; })) {
      var best = ms.slice().sort(function (a, b) { return domOf(story, s, b.who, "combat") - domOf(story, s, a.who, "combat"); })[0];
      c.rank[best.who] = FRONT;
    }
    if (fight.pretrap && evalCond(story, s, fight.pretrap.if)) {
      foes.slice(0, fight.pretrap.n || 1).forEach(function (f) { f.trapped = TRAP_ROUNDS + 1; ev(s, interp(s, (fight.pretrap.text || "Ton collet tient {foe} par la patte.").replace("{foe}", f.name)), "good"); });
    }
    s.node = "@combat";
  }
  var CRITS = ["frappe à la tempe : il chancelle", "entaille au bras qui tient l'arme", "coup au genou : il plie", "le souffle coupé net", "l'arme lui échappe un instant"];
  function say(s, t, key, foe) { var l = t && t.say && t.say[key]; if (l && l.length) ev(s, interp(s, pick(l).replace(/\{foe\}/g, foe ? foe.name : "")), key === "ok" ? "" : ""); }
  function foeDef(foe) { return foe.def - (foe.open ? OPEN_DEF : 0) - (foe.trapped ? TRAP_DEF : 0) - (foe.asleep ? TRAP_DEF : 0); }
  // The blows of the last exchange, for the battle plan: from / to = "hero", a companion, or a foe's key.
  function blow(s, from, to, dmg, kind) {
    var c = s.combat; if (!c) return;
    (c.hits = c.hits || []).push({ from: from, to: to, dmg: dmg || 0, kind: kind || "arme" });
    // the whole fight, for its account at the end
    var t = (c.tally = c.tally || {})[from] = (c.tally || {})[from] || { n: 0, hit: 0, dmg: 0 }; t.n++; if (dmg > 0) { t.hit++; t.dmg += dmg; }
    var tk = c.taken = c.taken || {}; tk[to] = (tk[to] || 0) + (dmg || 0);
  }
  // Intent: foesMorale(Story, State) -> () ! a foe may run (see MORALE_*)
  function foesMorale(story, s) {
    var c = s.combat, up = function () { return c.foes.filter(function (f) { return !f.down && !f.asleep; }); };
    if (up().length < 2) return;
    var rout = c.foes.filter(function (f) { return f.down; }).length >= c.foes.length * MORALE_ROUT_SHARE;
    up().forEach(function (f) {
      if (up().length < 2 || f.fearless || f.trapped || f.down) return;
      var bad = f.pv <= f.pvMax * MORALE_HURT; if (!bad && !rout) return;
      if (die(100) > MORALE_BREAK * ((bad ? 1 : 0) + (rout ? 1 : 0))) return;
      f.down = true; f.fled = true; ev(s, f.name + " prend la fuite.", "good");
    });
  }
  // Intent: combatTale(Story, State, Combat) -> String = the fight told in a few sentences once it is over.
  var NUMBERS_F = ["aucune", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf", "vingt"];
  function numF(n) { return n < NUMBERS_F.length ? NUMBERS_F[n] : String(n); }
  function combatTale(story, s, c) {
    if (!c.round) return "";
    var T = c.tally || {}, me = T.hero, out = ["Le combat a duré " + numF(c.round) + " passe" + (c.round > 1 ? "s" : "") + "."];
    if (me && me.n) out.push(me.hit ? "Tu as touché " + numF(me.hit) + " fois sur " + numF(me.n) + ", pour " + me.dmg + " point" + (me.dmg > 1 ? "s" : "") + " de blessure." : "Aucun de tes coups n'a porté.");
    var foeKeys = {}; c.foes.forEach(function (f) { foeKeys[f.key] = f; });
    var comps = Object.keys(T).filter(function (k) { return k !== "hero" && !foeKeys[k] && T[k].hit; });
    comps.forEach(function (k) { out.push(nameOf(story, k) + " a touché " + numF(T[k].hit) + " fois."); });
    var taken = (c.taken || {}).hero || 0;
    out.push(taken ? "Tu as reçu " + taken + " point" + (taken > 1 ? "s" : "") + " de blessure." : "Personne ne t'a atteint.");
    var fled = c.foes.filter(function (f) { return f.fled; }).map(function (f) { return f.name; });
    if (fled.length) out.push(fled.length === 1 ? fled[0] + " a pris la fuite." : fled.slice(0, -1).join(", ") + " et " + fled[fled.length - 1] + " ont pris la fuite.");
    return out.join(" ");
  }
  function hurt(s, foe, dmg) {
    foe.pv -= dmg; foe.asleep = false;
    if (foe.pv <= 0) { foe.down = true; ev(s, foe.name + " tombe.", "good"); }
  }
  // Intent: strike(Story, State, Foe, Opts) -> Result ! rolls, hurts the foe
  // Why: one attack rule for the hero's blows, shots and techniques; opts carry the technique's modifiers.
  function heroStrike(story, s, foe, o) {
    var c = s.combat, w = o.weapon, r = openD100(true), b = bonus(story, s, o.dom || "combat") + diffOf(s).roll, wb = (w && w.att) || 0;
    var master = !o.spell && w && s.arch === "guerrier" ? MASTER_HIT : 0, shadow = c.hidden ? SHADOW_HIT : 0, d = foeDef(foe);
    var total = r.total + b + wb + master + shadow + (o.mod || 0) - d;
    var line = (o.label || "Attaque") + " sur " + foe.name + " · d100 ouvert " + r.total + " + " + DOMAINS[o.dom || "combat"] + " " + b + (wb ? " + arme " + wb : "") + (master ? " + maître d'armes " + master : "") +
      (shadow ? " + caché " + shadow : "") + (o.mod ? (o.mod > 0 ? " + " : " − ") + Math.abs(o.mod) : "") + " − défense " + d + " = " + total;
    var wasOpen = foe.open; foe.open = false;
    if (total - SUCCESS >= CRIT_OVER) stat(s, "crits");
    if (c.hidden && !o.keepHidden) c.hidden = false;
    if (total < SUCCESS) { say(s, o.tech, "ko", foe); ev(s, line + " → manqué", "bad roll"); blow(s, "hero", foe.key, 0, o.spell ? "sort" : /^Tir/.test(o.label || "") ? "tir" : "arme"); return { ok: false, total: total }; }
    var dmg = (o.dmg != null ? o.dmg : (w ? w.dmg : UNARMED_DMG)) + (master ? MASTER_DMG : 0) + Math.floor((total - SUCCESS) / 10) * DMG_PER_10, crit = total - SUCCESS >= CRIT_OVER;
    var mult = (o.mult || 1) * (shadow ? SHADOW_MULT : 1); if (crit) mult *= 2;
    dmg = dmg * mult;
    say(s, o.tech, "ok", foe);
    ev(s, line + " → touché, " + dmg + " dégâts" + (mult > 1 ? " (×" + mult + ")" : "") + (crit ? " · critique : " + pick(CRITS) : "") + (wasOpen ? " · il était découvert" : ""), "good roll");
    blow(s, "hero", foe.key, dmg, o.spell ? "sort" : /^Tir/.test(o.label || "") ? "tir" : "arme");
    hurt(s, foe, dmg);
    return { ok: true, total: total };
  }
  // Intent: roll(Story, State, Dom, Mod, Label) -> Result
  function heroRoll(story, s, dom, mod, label) {
    var r = openD100(true), b = bonus(story, s, dom) + diffOf(s).roll, total = r.total + b + (mod || 0);
    return { ok: total >= SUCCESS, total: total, extra: Math.floor((total - SUCCESS) / 10),
      line: label + " · d100 ouvert " + r.total + " + " + DOMAINS[dom] + " " + b + (mod ? (mod > 0 ? " + " : " − ") + Math.abs(mod) : "") + " = " + total };
  }
  function foeByKey(c, k) { return c.foes.filter(function (f) { return f.key === k; })[0]; }
  // Intent: act(Story, State, Action) -> () ! the hero's part of an exchange
  function heroAct(story, s, act) {
    var c = s.combat, foe = act.foe ? foeByKey(c, act.foe) : null, t = act.tech ? techById(s, act.tech) : null;
    if (t && t.once) c.used[t.id] = true;
    switch (act.sys) {
      case "attack": heroStrike(story, s, foe, { weapon: meleeWeapon(story, s) }); return;
      case "shoot": {
        var rw = ranged(story, s), mine = s.arch === "rodeur";
        if (rw.ammo) { s.arrows--; c.arrowsUsed++; }
        if (rw.thrown) { c.thrown = true; }
        heroStrike(story, s, foe, { weapon: rw, label: mine ? "Tir" : "Tir · " + rw.name, tech: mine ? techById(s, "tir") : null, mod: (mine ? SHOT_BONUS : 0) + (!mine && c.range !== RANGE_FAR ? CLOSE_SHOT_MALUS : 0) });
        return;
      }
      case "rank": c.rank.hero = c.rank.hero === FRONT ? BACK : FRONT; ev(s, c.rank.hero === FRONT ? "Tu passes devant." : "Tu recules derrière les autres."); return;
      case "defend": c.defending = true; ev(s, "Tu te mets en garde (+" + DEFEND_BONUS + " en défense ce tour)."); return;
      case "use": useItem(story, s, act.item, act.on); return;
    }
    // techniques
    var label = c.spare && t.spareLabel ? t.spareLabel : t.label, r;
    if (t.kind === "power") { heroStrike(story, s, foe, { weapon: meleeWeapon(story, s), mod: POWER_HIT, mult: POWER_MULT, label: label, tech: t }); return; }
    if (t.kind === "backstab") { heroStrike(story, s, foe, { weapon: meleeWeapon(story, s) || ranged(story, s), mult: BACKSTAB_MULT, label: label, tech: t }); return; }
    if (t.kind === "bolt") { heroStrike(story, s, foe, { dom: t.dom, dmg: t.dmg, spell: true, label: label, tech: t }); return; }
    if (t.kind === "line") { c.line = true; c.rank.hero = FRONT; say(s, t, "ok"); ev(s, "Tenir la ligne : les ennemis te visent d'abord, à −" + LINE_HIT + "."); return; }
    if (t.kind === "dodge") { c.dodge = true; say(s, t, "ok"); ev(s, "Esquive : toute ta Discrétion compte en défense ce tour."); return; }
    if (t.kind === "feint") {
      r = heroRoll(story, s, t.dom, -foe.def, label + " sur " + foe.name);
      if (r.ok) { foe.open = true; c.fleeBonus = FEINT_FLEE; say(s, t, "ok", foe); ev(s, r.line + " → " + foe.name + " est découvert (−" + OPEN_DEF + " en défense au prochain coup, fuite +" + FEINT_FLEE + ")", "good roll"); }
      else { say(s, t, "ko", foe); ev(s, r.line + " → rien", "bad roll"); }
      return;
    }
    if (t.kind === "hide") {
      r = heroRoll(story, s, t.dom, 0, label);
      if (r.ok) { c.hidden = true; say(s, t, "ok", c.foes.filter(function (f) { return !f.down; })[0]); ev(s, r.line + " → caché", "good roll"); }
      else { say(s, t, "ko"); ev(s, r.line + " → repéré", "bad roll"); }
      return;
    }
    if (t.kind === "trap") {
      r = heroRoll(story, s, t.dom, -foe.def, label + " · " + foe.name);
      if (r.ok) { foe.trapped = TRAP_ROUNDS + 1; say(s, t, "ok", foe); ev(s, r.line + " → " + foe.name + " est pris pour " + TRAP_ROUNDS + " tours", "good roll"); }
      else { say(s, t, "ko", foe); ev(s, r.line + " → raté", "bad roll"); }
      return;
    }
    if (t.kind === "sleep") {
      r = heroRoll(story, s, t.dom, -foe.def, label + " · " + foe.name);
      if (r.ok) { foe.asleep = true; say(s, t, "ok", foe); ev(s, r.line + " → " + foe.name + " dort (il se réveille si on le frappe)", "good roll"); }
      else { say(s, t, "ko", foe); ev(s, r.line + " → il résiste", "bad roll"); }
      return;
    }
    r = heroRoll(story, s, t.dom, 0, label);
    if (!r.ok) { say(s, t, "ko"); ev(s, r.line + " → sans effet", "bad roll"); return; }
    say(s, t, "ok");
    if (t.kind === "ward") { c.ward = t.v; ev(s, r.line + " → +" + t.v + " en défense ce tour", "good roll"); }
    else if (t.kind === "dread") { c.dread = t.v; ev(s, r.line + " → les adversaires frappent à −" + t.v + " ce tour", "good roll"); }
    else if (t.kind === "bless") { c.blessed = true; ev(s, r.line + " → tes compagnons frappent à +" + BLESS_HIT + " jusqu'à la fin du combat", "good roll"); }
    else if (t.kind === "soothe") { c.soothed = true; ev(s, r.line + " → les adversaires frappent à −" + SOOTHE + " jusqu'à la fin du combat, et parler devient plus facile (+" + SOOTHE + ")", "good roll"); }
    else if (t.kind === "healAll") {
      members(story, s).forEach(function (m) { if (!alive(story, s, m.who)) return; var gg = m.who === "hero" ? heal(s, t.v + r.extra) : healComp(story, s, m.who, t.v + r.extra); ev(s, (m.who === "hero" ? "Toi" : nameOf(story, m.who)) + " +" + gg + " PV", "good"); });
      ev(s, r.line + " → tout le groupe est soigné", "good roll");
    }
    else if (t.kind === "heal") {
      var who = act.on || "hero", g = who === "hero" ? heal(s, t.v + r.extra) : healComp(story, s, who, t.v + r.extra);
      ev(s, r.line + " → " + (who === "hero" ? "toi" : nameOf(story, who)) + " +" + g + " PV", "good roll");
    }
  }
  // Intent: act(Story, State) -> () ! each companion present does its part (orders first, then its nature)
  function companionsAct(story, s) {
    var c = s.combat;
    members(story, s).forEach(function (m) {
      var k = m.who; if (k === "hero" || !alive(story, s, k)) return;
      var cd = compOf(story, s, k), nm = cd.name || k, foes = c.foes.filter(function (f) { return !f.down; });
      if (!foes.length) return;
      var order = c.orders[k] || {};
      // A healer tends whom he was told to, or else the worst wounded; a pacifist with nobody to tend parries for all.
      if (cd.healer && !order.foe) {
        var worst = order.heal && alive(story, s, order.heal) ? order.heal : null, ratio = 1;
        if (!worst) members(story, s).forEach(function (x) { if (!alive(story, s, x.who)) return; var q = x.who === "hero" ? s.pv / pvMax(s) : cpv(story, s, x.who) / cpvMax(story, s, x.who); if (q < ratio) { ratio = q; worst = x.who; } });
        if (worst && (order.heal || ratio < COMP_HEAL_UNDER)) {
          var rh = openD100(), th = rh.total + bonus(story, s, "magie", k) + COMP_HEAL_EASE, more = COMP_HEAL + Math.max(0, Math.floor((th - SUCCESS) / 10));
          if (th >= SUCCESS) { var g = worst === "hero" ? heal(s, more) : healComp(story, s, worst, more); ev(s, nm + " pose les mains sur " + (worst === "hero" ? "toi" : nameOf(story, worst)) + " : +" + g + " PV (" + th + ")", "good"); }
          else ev(s, nm + " prie au-dessus de " + (worst === "hero" ? "toi" : nameOf(story, worst)) + ", sans effet (" + th + ")");
          return;
        }
        if (cd.pacifist) { c.distract = (c.distract || 0) + COMP_DISTRACT; ev(s, nm + " fait tournoyer son bâton devant les adversaires et détourne leurs coups (−" + COMP_DISTRACT + " pour te toucher ce tour)."); return; }
      }
      var foe = (order.foe && foeByKey(c, order.foe)) || foes[0];
      if (foe.down) foe = foes[0];
      var bless = c.blessed ? BLESS_HIT : 0, r = openD100(), total, dmg;
      if (c.rank[k] === FRONT && c.range !== RANGE_FAR) {
        var w = cd.weapon || {}, cb = bonus(story, s, "combat", k);
        total = r.total + cb + (w.att || 0) + bless - foeDef(foe); foe.open = false;
        if (total >= SUCCESS) { dmg = (w.dmg || COMPANION_DMG) + Math.floor((total - SUCCESS) / 10); ev(s, nm + " frappe " + foe.name + " (" + total + ") : " + dmg + " dégâts", "good"); blow(s, k, foe.key, dmg); hurt(s, foe, dmg); }
        else { ev(s, nm + " manque " + foe.name + " (" + total + ")"); blow(s, k, foe.key, 0); }
      } else if (bonus(story, s, "magie", k) >= COMP_CASTER_FROM && !cd.pacifist) {
        total = r.total + bonus(story, s, "magie", k) + bless - foeDef(foe);
        if (total >= SUCCESS) { dmg = COMP_BOLT_DMG + Math.floor((total - SUCCESS) / 10); ev(s, nm + " lance sa magie sur " + foe.name + " (" + total + ") : " + dmg + " dégâts", "good"); blow(s, k, foe.key, dmg, "sort"); hurt(s, foe, dmg); }
        else { ev(s, nm + " lance sa magie sur " + foe.name + ", qui lui échappe (" + total + ")"); blow(s, k, foe.key, 0, "sort"); }
      }
    });
  }
  // Intent: defence(Story, State, Who) -> Int
  function defenceOf(story, s, who) {
    var c = s.combat;
    if (who !== "hero") return compOf(story, s, who).def || 0;
    var a = armor(story, s), disc = bonus(story, s, "discretion");
    return (a ? a.def : 0) + (c.defending ? DEFEND_BONUS : 0) + (c.ward || 0) + (c.dodge ? disc : Math.floor(disc / 5));
  }
  // Intent: choose(Story, State, Foe) -> Who | null = the member this foe strikes
  function targetOf(story, s, f) {
    var c = s.combat, ms = members(story, s).filter(function (m) { return alive(story, s, m.who) && !(m.who === "hero" && c.hidden); });
    if (!ms.length) return null;
    var front = ms.filter(function (m) { return c.rank[m.who] === FRONT; });
    var pool = f.ranged || f.flank ? ms : (front.length ? front : ms);
    var who = c.line && pool.some(function (m) { return m.who === "hero"; }) ? "hero" : pick(pool).who;
    if (who === "hero") {
      var guard = ms.filter(function (m) { return m.who !== "hero" && (c.orders[m.who] || {}).protect; })[0];
      if (guard) { ev(s, nameOf(story, guard.who) + " se jette entre toi et " + f.name + "."); return guard.who; }
    }
    return who;
  }
  function foesAct(story, s) {
    var c = s.combat;
    c.foes.forEach(function (f) {
      if (f.down || s.pv <= 0) return;
      if (f.asleep) { ev(s, f.name + " dort."); return; }
      if (f.trapped) { f.trapped--; ev(s, f.trapped ? f.name + " se débat dans le piège." : f.name + " se libère du piège."); if (f.trapped) return; }
      if (c.range === RANGE_FAR && c.round === 1 && !f.ranged) { ev(s, f.name + " approche."); return; }
      var who = targetOf(story, s, f);
      if (!who) { ev(s, f.name + " te cherche et ne te trouve pas."); return; }
      var def = defenceOf(story, s, who), malus = (c.dread || 0) + (c.distract || 0) + (c.soothed ? SOOTHE : 0) + (who === "hero" && c.line ? LINE_HIT : 0);
      var r = openD100(), total = r.total + f.att + ENEMY_HIT_BONUS + diffOf(s).foeHit - def - malus;
      var whom = who === "hero" ? "te" : nameOf(story, who);
      var line = r.total + " + " + f.att + " − défense " + def + (malus ? " − " + malus : "") + " = " + total;
      if (total >= SUCCESS) {
        var d = f.dmg + Math.floor((total - SUCCESS) / 10);
        blow(s, f.key, who, d, f.ranged ? "tir" : "arme");
        if (who === "hero") { s.pv -= d; ev(s, f.name + " te frappe (" + line + ") : −" + d + " PV", "bad"); }
        else { s.cpv[who] = Math.max(0, cpv(story, s, who) - d); ev(s, f.name + " frappe " + whom + " (" + line + ") : −" + d + " PV", "bad"); if (!s.cpv[who]) ev(s, nameOf(story, who) + " tombe à terre.", "bad"); }
      } else {
        ev(s, f.name + (who === "hero" ? " te manque" : " manque " + whom) + " (" + total + ")"); blow(s, f.key, who, 0, f.ranged ? "tir" : "arme");
        if (who === "hero" && c.line && SUCCESS - total >= RIPOSTE_MARGIN && meleeWeapon(story, s)) { ev(s, "Tu ripostes."); heroStrike(story, s, f, { weapon: meleeWeapon(story, s), label: "Riposte" }); }
      }
    });
  }
  function endCombat(story, s, outcome) {
    var c = s.combat; s.combat = null;
    var br = outcome === "win" ? c.win : outcome === "flee" ? c.flee : outcome === "talk" ? c.talk.win : outcome === "calm" ? c.calm : c.lose;
    s.last = outcome === "talk" ? "calm" : outcome;
    if (br && br.via) s.via = br.via;
    if (outcome === "lose") { s.pv = 1; ev(s, "Tu t'effondres. Ce n'est pas la fin.", "bad"); }
    if (outcome === "win") { ev(s, "Victoire.", "good"); stat(s, "wins"); }
    if (outcome === "flee") stat(s, "flees");
    var tale = combatTale(story, s, c); if (tale) ev(s, tale, "tale");
    if (c.arrowsUsed) { if (outcome === "win" || outcome === "calm" || outcome === "talk") { s.arrows += c.arrowsUsed; ev(s, "Tu ramasses tes flèches (" + s.arrows + ")."); } else ev(s, c.arrowsUsed + " flèche" + (c.arrowsUsed > 1 ? "s" : "") + " perdue" + (c.arrowsUsed > 1 ? "s" : "") + " (reste " + s.arrows + ").", "bad"); }
    Object.keys(s.cpv || {}).forEach(function (k) {
      if (present(s, k) && s.cpv[k] <= 0) {
        s.cpv[k] = 1; ev(s, nameOf(story, k) + " se relève, à grand-peine.", "bad");
        apply(story, s, { conf: (function () { var o = {}; o[k] = COMPANION_FALL_CONF; return o; })() });
      }
    });
    if (outcome === "calm") s.flags["calme:" + (c.calmBy || "chant")] = true;
    apply(story, s, br.fx);
    enter(story, s, target(story, s, br.to));
  }
  // Intent: play(Story, State, Action) -> () ! one exchange: the hero, the companions, the foes
  function combatRound(story, s, act) {
    var c = s.combat;
    c.round++; c.hits = []; c.defending = false; c.ward = 0; c.dread = 0; c.dodge = false; c.distract = 0;
    if (act.sys === "flee") {
      var bonusFlee = (c.range === RANGE_FAR && c.round === 1 ? FAR_FLEE_BONUS : 0) + c.fleeBonus;
      var r = rollTest(story, s, { dom: c.flee.dom || "discretion", diff: (c.flee.diff == null ? FLEE_DIFF : c.flee.diff) + bonusFlee });
      c.fleeBonus = 0;
      ev(s, "Fuir · " + r.line + " → " + (r.ok ? "tu t'échappes" : "raté"), (r.ok ? "good" : "bad") + " roll");
      if (r.ok) { endCombat(story, s, "flee"); return; }
    } else if (act.sys === "talk") {
      var t = rollTest(story, s, { dom: "social", diff: (c.talk.diff || 0) + (c.soothed ? SOOTHE : 0) });
      ev(s, "Parlementer · " + t.line + " → " + (t.ok ? "ils baissent les armes" : "rien à faire"), (t.ok ? "good" : "bad") + " roll");
      if (t.ok) { endCombat(story, s, "talk"); return; }
    } else {
      c.fleeBonus = 0;
      heroAct(story, s, act);
      if (act.sys === "tech" && c.calm) {
        var tk = techById(s, act.tech);
        var standing = c.foes.filter(function (f) { return !f.down; });
        if (tk.kind === "soothe" && c.soothed) { c.calmBy = "chant"; endCombat(story, s, "calm"); return; }
        if (tk.kind === "sleep" && standing.length && standing.every(function (f) { return f.asleep; })) { c.calmBy = "sommeil"; endCombat(story, s, "calm"); return; }
      }
    }
    if (c.foes.every(function (f) { return f.down || f.asleep; })) { endCombat(story, s, "win"); return; }
    companionsAct(story, s);
    if (c.foes.every(function (f) { return f.down || f.asleep; })) { endCombat(story, s, "win"); return; }
    foesMorale(story, s);
    foesAct(story, s);
    c.orders = {};
    if (c.range === RANGE_FAR) c.range = "contact";   // they have closed in
    if (s.pv <= 0) endCombat(story, s, "lose");
  }
  // Intent: order(Story, State, Action) -> () ! a free order to a companion, once an exchange
  function giveOrder(story, s, act) {
    var c = s.combat, k = act.comp, nm = nameOf(story, k), cd = compOf(story, s, k);
    c.orderRound = c.round; c.ordered = c.ordered || {}; c.ordered[k] = c.round;
    var risky = act.order === "protect" || act.order === "attack";
    if (risky && (s.conf[k] || 0) < ORDER_REFUSE_UNDER) { ev(s, nm + " te regarde sans bouger. « Fais-le toi-même. »", "bad"); return; }
    if (act.order === "attack") {
      var f = foeByKey(c, act.foe);
      if (cd.pacifist && f && (f.trapped || f.asleep)) { ev(s, nm + " secoue la tête. « Pas un homme à terre. Pas une bête prise. »", "bad"); return; }
      c.orders[k] = { foe: act.foe }; if (c.rank[k] !== FRONT) c.rank[k] = FRONT; ev(s, nm + " : « Celui-là. »");
    } else if (act.order === "protect") { c.orders[k] = { protect: true }; c.rank[k] = FRONT; ev(s, nm + " vient se placer à ton côté."); }
    else if (act.order === "heal") { c.orders[k] = { heal: act.on }; ev(s, nm + " : « Je m'occupe de " + (act.on === "hero" ? "toi" : nameOf(story, act.on)) + ". »"); }
    else if (act.order === "back") { c.rank[k] = BACK; ev(s, nm + " recule derrière."); }
    else if (act.order === "front") { c.rank[k] = FRONT; ev(s, nm + " passe devant."); }
  }
  function useItem(story, s, id, on) {
    var it = item(story, id), at = s.items.indexOf(id);
    if (at < 0 || !it.heal) return false;
    s.items.splice(at, 1);
    if (on && on !== "hero") { var gc = healComp(story, s, on, it.heal); ev(s, it.name + " pour " + nameOf(story, on) + " : +" + gc + " PV", "good"); return true; }
    var g = heal(s, it.heal);
    ev(s, it.name + " : +" + g + " PV (" + s.pv + "/" + pvMax(s) + ")", "good");
    return true;
  }
  // Intent: list(Story, State) -> [Choice] = what the hero may do in this exchange
  function combatChoices(story, s) {
    var c = s.combat, cs = [], foes = c.foes.filter(function (f) { return !f.down; }), front = c.rank.hero === FRONT;
    var mw = meleeWeapon(story, s), rw = ranged(story, s), hb = c.hidden ? SHADOW_HIT : 0;
    var atk = function (f, mod) { return { dom: "combat", label: "Attaque", diff: mod - foeDef(f) + hb }; };
    foes.forEach(function (f) {
      var st = f.asleep ? " · endormi" : f.trapped ? " · pris au piège" : f.open ? " · découvert" : "";
      if (front && c.range !== RANGE_FAR) cs.push({ sys: "attack", foe: f.key, label: "Attaquer " + f.name + st, group: "fight", test: atk(f, ((mw && mw.att) || 0) + (mw && s.arch === "guerrier" ? MASTER_HIT : 0)) });
      if (rw && !(rw.thrown && c.thrown)) {
        var mine = s.arch === "rodeur";
        cs.push({ sys: "shoot", foe: f.key, label: (mine ? "Tirer sur " : (rw.thrown ? "Lancer ta dague sur " : "Tirer sur ")) + f.name + (rw.ammo ? " (" + s.arrows + " flèches)" : rw === SLING ? " à la fronde" : ""), group: "fight",
          test: atk(f, (rw.att || 0) + (mine ? SHOT_BONUS : (c.range !== RANGE_FAR ? CLOSE_SHOT_MALUS : 0))) });
      }
    });
    techsOf(s).forEach(function (t) {
      var label = c.spare && t.spareLabel ? t.spareLabel : t.label, used = t.once && c.used[t.id];
      var base = { sys: "tech", tech: t.id, group: "fight", hint: t.tip };
      if (t.kind === "master" || t.kind === "shot") return;
      if (t.kind === "power") { if (front && c.range !== RANGE_FAR && mw) foes.forEach(function (f) { cs.push(Object.assign({}, base, { foe: f.key, label: label + " sur " + f.name, test: atk(f, (mw.att || 0) + MASTER_HIT + POWER_HIT) })); }); return; }
      if (t.kind === "backstab") { foes.forEach(function (f) { var can = (f.open || c.hidden || f.trapped || f.asleep) && (front || c.hidden); cs.push(Object.assign({}, base, { foe: f.key, label: label + " sur " + f.name, test: atk(f, ((mw && mw.att) || 0)), if: can, why: "Il faut qu'il soit découvert, pris, endormi, ou que tu sois caché." })); }); return; }
      if (t.kind === "bolt") { foes.forEach(function (f) { cs.push(Object.assign({}, base, { foe: f.key, label: label + " sur " + f.name, test: { dom: t.dom, label: t.label, diff: hb - foeDef(f) } })); }); return; }
      if (t.kind === "feint") { if (front && c.range !== RANGE_FAR) foes.forEach(function (f) { if (!f.open) cs.push(Object.assign({}, base, { foe: f.key, label: label + " contre " + f.name, test: { dom: t.dom, label: t.label, diff: -f.def } })); }); return; }
      if (t.kind === "trap" || t.kind === "sleep") {
        foes.forEach(function (f) {
          var ok = t.kind === "sleep" ? !used && !f.asleep : !f.trapped && (c.range === RANGE_FAR && c.round === 0 || c.hidden);
          if (t.kind === "trap" && f.trapped) return;
          cs.push(Object.assign({}, base, { foe: f.key, label: label + " · " + f.name, test: { dom: t.dom, label: t.label, diff: -f.def }, if: ok, why: t.kind === "sleep" ? "Déjà lancé dans ce combat." : "Il faut être caché, ou qu'ils soient encore loin." }));
        });
        return;
      }
      if (t.kind === "hide") { if (!c.hidden) cs.push(Object.assign({}, base, { label: label, test: { dom: t.dom, label: t.label }, if: c.terrain === TERRAIN_NATURE, why: "Il n'y a rien ici où se fondre." })); return; }
      if (t.kind === "line") { if (!c.line) cs.push(Object.assign({}, base, { label: label })); return; }
      if (t.kind === "heal") {
        members(story, s).forEach(function (m) {
          var hurtNow = m.who === "hero" ? s.pv < pvMax(s) : alive(story, s, m.who) && cpv(story, s, m.who) < cpvMax(story, s, m.who);
          if (hurtNow) cs.push(Object.assign({}, base, { on: m.who, label: label + (m.who === "hero" ? " sur toi" : " sur " + nameOf(story, m.who)), test: { dom: t.dom, label: t.label }, if: !used, why: "Déjà dite dans ce combat." }));
        });
        return;
      }
      if (t.kind === "bless" && !members(story, s).some(function (m) { return m.who !== "hero"; })) return;
      cs.push(Object.assign({}, base, { label: label, test: { dom: t.dom, label: t.label }, if: !used && !(t.kind === "bless" && c.blessed) && !(t.kind === "soothe" && c.soothed), why: "Déjà fait dans ce combat." }));
    });
    var others = members(story, s).length > 1;
    if (others) cs.push({ sys: "rank", label: front ? "Reculer derrière les autres" : "Passer devant", group: "fight" });
    cs.push({ sys: "defend", label: "Se mettre en garde", group: "fight" });
    s.items.filter(function (id, i, a) { return item(story, id).heal && a.indexOf(id) === i; }).forEach(function (id) {
      cs.push({ sys: "use", item: id, label: "Utiliser " + item(story, id).name + " (+" + item(story, id).heal + " PV)", group: "fight" });
      members(story, s).forEach(function (m) { if (m.who !== "hero" && cpv(story, s, m.who) < cpvMax(story, s, m.who)) cs.push({ sys: "use", item: id, on: m.who, label: "Donner " + item(story, id).name + " à " + nameOf(story, m.who), group: "fight" }); });
    });
    if (c.talk) cs.push({ sys: "talk", label: c.talk.label || "Parlementer", group: "fight", test: { dom: "social", label: "Social", diff: (c.talk.diff || 0) + (c.soothed ? SOOTHE : 0) } });
    if (c.flee) cs.push({ sys: "flee", label: c.flee.label || "Fuir", group: "fight", test: { dom: c.flee.dom || "discretion", label: "Fuite", diff: (c.flee.diff == null ? FLEE_DIFF : c.flee.diff) + (c.range === RANGE_FAR && c.round === 0 ? FAR_FLEE_BONUS : 0) + c.fleeBonus } });
    // Orders: free, one for each companion an exchange; without one, he acts as he sees fit (Clément, 11/11).
    members(story, s).forEach(function (m) {
      var k = m.who; if (k === "hero" || !alive(story, s, k) || (c.ordered || {})[k] === c.round) return;
      var nm = nameOf(story, k), o = { sys: "order", comp: k, group: "order" };
      if (compOf(story, s, k).healer) members(story, s).forEach(function (x) {
        var hurtNow = x.who === "hero" ? s.pv < pvMax(s) : alive(story, s, x.who) && cpv(story, s, x.who) < cpvMax(story, s, x.who);
        if (hurtNow) cs.push(Object.assign({}, o, { order: "heal", on: x.who, label: nm + " : soigne " + (x.who === "hero" ? "moi" : x.who === k ? "toi" : nameOf(story, x.who)) }));
      });
      cs.push(Object.assign({}, o, { order: "protect", label: nm + " : protège-moi" }));
      cs.push(Object.assign({}, o, { order: c.rank[k] === FRONT ? "back" : "front", label: nm + (c.rank[k] === FRONT ? " : reste en arrière" : " : passe devant") }));
      foes.forEach(function (f) { cs.push(Object.assign({}, o, { order: "attack", foe: f.key, label: nm + " : attaque " + f.name })); });
    });
    // A plain false would read as "no condition" further on: spell it as a condition that never holds.
    cs.forEach(function (x) { if (x.if === false) x.if = { not: true }; else if (x.if === true) delete x.if; });
    return cs;
  }
  // Intent: describe(Story, State) -> Party = for the page: our side, ranks, PV, states
  function partyView(story, s) {
    var c = s.combat;
    return members(story, s).map(function (m) {
      var k = m.who, hero = k === "hero";
      return { who: k, name: hero ? heroName(s) : nameOf(story, k), rank: c ? c.rank[k] : null, pv: hero ? s.pv : cpv(story, s, k), pvMax: hero ? pvMax(s) : cpvMax(story, s, k),
        hidden: hero && c && c.hidden, protect: !hero && c && (c.orders[k] || {}).protect };
    });
  }

  // ------------------------------------------------------------------ shops
  function shopChoices(story, s, p) {
    if (!p.shop) return [];
    var sh = (story.shops || {})[p.shop];
    if (!sh) return [];
    var out = [], f = priceFactor(story, s, sh);
    (sh.sells || []).forEach(function (x) {
      var it = item(story, x.item), pr = priced(x.price, f);
      if (it.unique !== false && s.items.indexOf(x.item) >= 0) return;
      if (x.if != null && !evalCond(story, s, x.if)) return;
      out.push({ sys: "buy", item: x.item, price: pr, group: "shop", label: "Acheter " + it.name + " · " + money(story, pr, true), if: { gold: { min: pr } }, why: "Il te faut " + money(story, pr) + "." });
    });
    if (sh.food) { var fp = priced(sh.food, f); out.push({ sys: "buyFood", price: fp, group: "shop", label: "Acheter un jour de vivres · " + money(story, fp, true), if: { gold: { min: fp } }, why: "Il te faut " + money(story, fp) + "." }); }
    if (sh.buys !== false) {
      var seen = {};
      s.items.forEach(function (id) {
        var it = item(story, id);
        if (seen[id] || !it.price || it.kind === "document" || it.keep) return; seen[id] = 1;
        out.push({ sys: "sell", item: id, price: Math.floor(it.price * SELL_RATE * (it.kind === "vivres" ? f : 1)), group: "shop", label: "Vendre " + it.name + " · " + money(story, Math.floor(it.price * SELL_RATE * (it.kind === "vivres" ? f : 1)), true) });
      });
    }
    return out;
  }


  // ------------------------------------------------------------------ an investigation in a city (« Enquête en ville », 7.9)
  // Clément, 13/11: a criminal case in a great city, where people lie, keep silent or are wrong. The story declares; the
  // engine does the rest: who is where at what hour, what a witness says when shown a clue, which two statements truly
  // contradict each other, which clues fade if one dawdles, which are decoys, the rumours of the inns, the accusation in
  // three parts, and the hour when the case is judged whatever the reader is doing.
  // The parts of the day a person's whereabouts are written in (`at: [{ when: "matin" | [...] }]`).
  var PERIODS = { matin: [6, 12], midi: [12, 14], apresmidi: [14, 18], soir: [18, 21], nuit: [21, 6] };
  function periodOf(s) { var h = hour(s); return Object.keys(PERIODS).filter(function (k) { var r = PERIODS[k]; return r[0] < r[1] ? h >= r[0] && h < r[1] : h >= r[0] || h < r[1]; })[0]; }
  // A moment of the story: { day, hour } (hour 0 by default). Reached when the clock is at or past it.
  function momentOf(m) { return m ? ((m.day || 1) - 1) * 24 + (m.hour || 0) : null; }
  function reached(s, m) { return m != null && s.time >= momentOf(m); }
  // Intent: regardOk(State, {person: word | [words]}) -> Bool = each person sees the hero in one of these ways
  // A person nobody has given a regard yet is "neutre".
  function regardOk(s, r) { return Object.keys(r || {}).every(function (k) { return [].concat(r[k]).indexOf((s.regard || {})[k] || "neutre") >= 0; }); }
  // Intent: faded(Story, State, Clue) -> Bool = the clue can no longer be found: its `fades` moment has passed and the
  // reader does not hold it (a trace washed by the rain, a body buried, a witness gone).
  function faded(story, s, k) { var cl = (story.clues || {})[k]; return !!(cl && cl.fades && !s.clues[k] && reached(s, cl.fades)); }

  // --- who is where (people.<id>.at): the city lives
  // Intent: hereNow(Story, State, Place) -> [{ id, at }] = the people whose schedule puts them in this place now
  // An entry: { when: period | [periods], place, talk: "PASSAGE", see: "what one sees of them", label, if, from, until }.
  function hereNow(story, s, place) {
    var out = [], per = periodOf(s);
    Object.keys(story.people || {}).forEach(function (id) {
      ((story.people[id] || {}).at || []).some(function (a) {
        if (a.place !== place) return false;
        if (a.when != null && [].concat(a.when).indexOf(per) < 0) return false;
        if (a.from && !reached(s, a.from)) return false;
        if (a.until && reached(s, a.until)) return false;
        if (!evalCond(story, s, a.if)) return false;
        out.push({ id: id, at: a }); return true;
      });
    });
    return out;
  }
  // On a crossroads of a place, the people there now: a line each, and a way to go and speak to them.
  function peopleChoices(story, s, p) {
    if (!p.hub || !p.place || s.combat || s.travel) return [];
    return hereNow(story, s, p.place).filter(function (x) { return x.at.talk && story.passages[x.at.talk]; }).map(function (x) {
      // Speaking with someone takes an hour, unless the schedule says otherwise (takes: 0); the reader has met them.
      return { to: x.at.talk, label: interp(s, x.at.label || ("Aborder " + story.people[x.id].name)), group: "gens", auto: "people", takes: x.at.takes === 0 ? null : (x.at.takes || 1), fx: { meet: x.id } };
    });
  }
  function peopleLines(story, s, p) {
    if (!p.hub || !p.place) return [];
    return hereNow(story, s, p.place).filter(function (x) { return x.at.see; }).map(function (x) { return interp(s, x.at.see); });
  }

  // --- rumours of the inns (story.rumors: { pool: [{ id, text, fx }] }, passage tag `rumeur: "pool"`)
  // One rumour not yet heard, picked when the reader comes in, told at the end of the page. True or false: the story
  // knows, the page does not say. The notebook keeps the ones heard.
  function rumorPick(story, s, p, id) {
    var pool = ((story.rumors || {})[p.rumeur] || []).filter(function (r) { return !(s.rumors || {})[r.id] && evalCond(story, s, r.if); });
    if (!pool.length) { s.rumorNow = null; return; }
    var r = pick(pool);
    s.rumors = s.rumors || {}; s.rumors[r.id] = { pool: p.rumeur, t: timeLabel(s) };
    s.rumorNow = { node: id, turn: s.turn, id: r.id };
    apply(story, s, r.fx);
  }
  function rumorById(story, id) { var out = null; Object.keys(story.rumors || {}).forEach(function (k) { (story.rumors[k] || []).forEach(function (r) { if (r.id === id) out = r; }); }); return out; }

  // --- the deadline (story.deadline: { day, hour, to, acts }): the case is judged at that hour, whatever one is doing
  function deadlineDue(story, s, id) {
    var d = story.deadline, p = story.passages[id];
    if (!d || !p || p.end || s.flags["echeance"] || !reached(s, d)) return false;
    return !d.acts || d.acts.indexOf(p.act) >= 0;
  }

  // --- showing a witness a clue or a document (people.<id>.confront: { <clue or item>: "PASSAGE" }, shrug: [lines])
  // A passage tagged `montrer: "<person>"` offers « Montrer quelque chose à … ». What makes the person react leads to the
  // author's passage; anything else leaves them cold (one of their `shrug` lines). Each thing is shown once to each.
  function showable(story, s, who) {
    var shown = s.shown || {}, out = [];
    Object.keys(s.clues || {}).forEach(function (k) { var c = (story.clues || {})[k]; if (c && !shown[who + "|" + k]) out.push({ id: k, label: c.short || shortText(c.text) }); });
    // A document that carries its clue (item.clue) is shown through that clue: the reader sees one line, not two.
    s.items.forEach(function (k) { var it = item(story, k); if (it.kind === "document" && !(it.clue && s.clues[it.clue]) && !shown[who + "|" + k] && !out.some(function (x) { return x.id === k; })) out.push({ id: k, label: it.name }); });
    return out;
  }
  // Intent: withPrep("à" | "de", Name) -> String = a person's name after a preposition, its article agreed
  // ("à La sergente Hallard" → "à la sergente Hallard", "de Le commis Ivon" → "du commis Ivon").
  function withPrep(prep, name) {
    var m = /^(Les|Le|La|L['’])\s?(.*)$/.exec(String(name || "")), art, rest;
    if (!m || (m[1].length > 1 && m[1].charAt(1) !== "'" && m[1].charAt(1) !== "’" && !/\s/.test(String(name).charAt(m[1].length)))) return prep + " " + name;
    art = m[1].toLowerCase(); rest = m[2];
    if (art === "le") return (prep === "à" ? "au " : "du ") + rest;
    if (art === "les") return (prep === "à" ? "aux " : "des ") + rest;
    if (art === "la") return prep + " la " + rest;
    return prep + " l'" + rest;
  }
  function shortText(t) { t = String(t || "").replace(/\*/g, ""); var cut = t.indexOf(". "); t = cut > 0 && cut < 90 ? t.slice(0, cut) : t; return t.length > 90 ? t.slice(0, 88).replace(/\s+\S*$/, "") + "…" : t; }
  function montrerChoices(story, s, p) {
    var who = p && p.montrer; if (!who || !(story.people || {})[who] || s.combat) return [];
    var any = showable(story, s, who).length > 0;
    return [{ sys: "montrer", who: who, group: "montrer", label: "Montrer quelque chose " + withPrep("à", story.people[who].name), if: any ? null : { not: true }, why: "Tu n'as plus rien à lui montrer." }];
  }
  // --- the accusation (passage tag `accuse: { mystery, to }`): who, why, and the proof, each counted on its own.
  // The mystery declares `suspects` (people), `motives` ({ id: text }) and `answer: { person, motive, proofs }`.
  // The engine sets `accuse-<m>-qui=<person>`, `accuse-<m>-mobile=<id>`, `accuse-<m>-preuve=<clue>`, and the flags
  // `accuse:<m>:qui`, `accuse:<m>:mobile`, `accuse:<m>:preuve` for each part that is right. Then it goes to `to`.
  function accuseChoices(story, s, p) {
    var a = p && p.accuse; if (!a || s.combat) return [];
    var my = (story.mysteries || {})[a.mystery] || {};
    return [{ sys: "accuse", group: "accuse", label: a.label || ("Accuser : " + (my.accuseTitle || "désigner le coupable, le mobile et la preuve")) }];
  }
  function accuseProofs(story, s) {
    var out = [];
    Object.keys(s.clues || {}).forEach(function (k) { var c = (story.clues || {})[k]; if (c) out.push({ id: k, label: c.short || shortText(c.text) }); });
    s.items.forEach(function (k) { var it = item(story, k); if (it.kind === "document" && !(it.clue && s.clues[it.clue]) && !out.some(function (x) { return x.id === k; })) out.push({ id: k, label: it.name }); });
    return out;
  }
  // Intent: accuseDone(Story, State, Proof) ! the accusation is made: each part is judged on its own, then the story goes on
  function accuseDone(story, s, proof) {
    var a = s.acc, m = a.m, my = (story.mysteries || {})[m] || {}, an = my.answer || {}, P = story.passages[a.from], to = P.accuse.to;
    var set = {}; set["accuse-" + m + "-qui"] = a.qui; set["accuse-" + m + "-mobile"] = a.mobile; set["accuse-" + m + "-preuve"] = proof || "aucune";
    apply(story, s, { set: set });
    var ok = { qui: a.qui === an.person, mobile: [].concat(an.motive || []).indexOf(a.mobile) >= 0,
      // A document proves what its clue proves (item.clue).
      preuve: !!proof && [proof, item(story, proof).clue].some(function (k) { return k && [].concat(an.proofs || []).indexOf(k) >= 0 && !((story.clues || {})[k] || {}).leurre; }) };
    Object.keys(ok).forEach(function (k) { if (ok[k]) s.flags["accuse:" + m + ":" + k] = true; });
    s.acc = null; s.via = "accuse";
    go(story, s, to);
  }
  // Intent: contradict(Story, State, ClueA, ClueB) -> { found, again, clue } ! the reader says two things contradict
  // Why: the reader links two statements on the board or in the notebook; when the story declares that they truly
  // contradict each other (story.contradictions: [{ a, b, clue, fx }]), the engine gives the clue the link makes,
  // which may open a new way. A wrong link costs nothing.
  function contradictionOf(story, a, b) { return (story.contradictions || []).filter(function (x) { return (x.a === a && x.b === b) || (x.a === b && x.b === a); })[0] || null; }
  function holds(s, k) { return !!(s.clues || {})[k] || (s.items || []).indexOf(k) >= 0; }
  function contradict(story, s, a, b) {
    var x = contradictionOf(story, a, b);
    if (!x || !holds(s, a) || !holds(s, b)) return { found: false };
    if (x.clue && s.clues[x.clue]) return { found: true, again: true, clue: x.clue };
    apply(story, s, Object.assign({}, x.fx || {}, { clue: x.clue }));
    return { found: true, clue: x.clue };
  }

  // ------------------------------------------------------------------ the tavern game (Clément, 13/11, 6th series)
  // Intent: tavernChoices(Story, State, Passage) -> [Choice] = « s'asseoir à la Chandelle » where the passage says
  // `taverne: { mise, adversaire }`. The stake leaves the purse when one sits; a win brings it back twice, a tie once.
  // At most TAVERN_GAMES_PER_DAY games a day: the table is a pastime, not a mine.
  function tavernOf(p) { var t = p && p.taverne; if (!t) return null; t = t === true ? {} : t; return { mise: Math.max(1, t.mise || 1), adv: t.adversaire || "un joueur de la table" }; }
  function tavernPlayed(s) { var j = s.jeuJour || {}; return j.day === day(s) ? j.n : 0; }
  function tavernChoices(story, s, p) {
    var t = tavernOf(p); if (!t || s.combat || s.travel) return [];
    var full = tavernPlayed(s) >= TAVERN_GAMES_PER_DAY;
    return [{ sys: "jeu", group: "jeu", mise: t.mise, adv: t.adv, label: "S'asseoir à la table de Chandelle · mise " + money(story, t.mise, true),
      if: full ? { not: true } : { gold: { min: t.mise } }, why: full ? "On ne joue plus avec toi aujourd'hui." : "Il te faut " + money(story, t.mise) + " pour miser." }];
  }
  var FACES = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  function tavernSit(story, s, c) {
    s.jeuJour = { day: day(s), n: tavernPlayed(s) + 1 };
    s.gold -= c.mise;
    var stop = TAVERN_STOP_LO + Math.floor(RNG() * TAVERN_STOP_SPREAD), them = 0, dice = [];
    while (them < stop) { var d = die(TAVERN_DIE); dice.push(d); if (d === TAVERN_SNUFF) { them = 0; break; } them += d; }
    s.jeu = { from: s.node, mise: c.mise, adv: c.adv, them: them, theirDice: dice, me: 0, myDice: [], over: null };
    ev(s, "Mise : −" + money(story, c.mise) + " · bourse : " + money(story, s.gold));
    s.node = "@jeu";
  }
  function tavernEnd(story, s, how) {
    var j = s.jeu; j.over = how;
    if (how === "win") { s.gold += 2 * j.mise; ev(s, "Gagné : +" + money(story, 2 * j.mise) + " · bourse : " + money(story, s.gold), "good"); s.stats.tavernWins = (s.stats.tavernWins || 0) + 1; }
    else if (how === "tie") { s.gold += j.mise; ev(s, "Égalité : la mise te revient · bourse : " + money(story, s.gold)); }
    else ev(s, "Perdu : la mise reste sur la table.", "bad");
  }
  function tavernSys(story, s, c) {
    var j = s.jeu;
    if (c.sys === "jeuLeave") { var back = j.from; s.jeu = null; s.node = back; return; }
    if (c.sys === "jeuAgain") { var t = tavernOf(story.passages[j.from]) || { mise: j.mise, adv: j.adv }; tavernSit(story, s, { mise: t.mise, adv: t.adv }); s.jeu.from = j.from; return; }
    if (c.sys === "jeuRoll") {
      var d = die(TAVERN_DIE); j.myDice.push(d);
      if (d === TAVERN_SNUFF) { j.me = 0; ev(s, "Tu lances : " + FACES[d] + " · ta chandelle s'éteint.", "bad roll"); tavernEnd(story, s, j.them > 0 ? "lose" : "tie"); return; }
      j.me += d; ev(s, "Tu lances : " + FACES[d] + " · ta chandelle monte à " + j.me + ".", "roll");
      return;
    }
    if (c.sys === "jeuStop") tavernEnd(story, s, j.me > j.them ? "win" : j.me === j.them ? "tie" : "lose");
  }

  // ------------------------------------------------------------------ a siege (« Le siège », 8.0)
  // Clément, 13/11: a besieged city, factions that fight over the defence, provisions that dwindle every day. The story
  // declares; the engine does the rest: the city's stocks eaten day after day (story.stocks), the world that moves on
  // without the reader (story.march), quests with a date (quest.due), prices that follow scarcity (shop.moves, scarce),
  // debts and promises with their term (story.promises), councils that count the votes (story.councils, story.motions),
  // camps that close doors (story.camps), the ties the hero has found between people (story.ties), pitched battles
  // where the reader places troops and gives orders (story.battles), and the epilogue that tells what came of it.

  // --- stocks: { id: { name, unit, plural, start, max, eat, by, extra: [{ if, n }], spoil: { every, share, if }, pill } }
  // `eat` is what a day takes: a number, or { value of the state `by`: number } (the ration in force). A negative
  // number makes the stock grow (a gauge that rises). `extra` adds to it while its condition holds.
  function stockIds(story) { return Object.keys(story.stocks || {}); }
  // 9.6: a reserve may belong to one hero only (`if` on the reserve): the others neither see it nor are told of it.
  function stockShown(story, s, k) { var D = (story.stocks || {})[k]; return !!D && evalCond(story, s, D.if); }
  function stockNow(story, s, k) { var v = (s.stocks || {})[k]; return v == null ? ((story.stocks || {})[k] || {}).start || 0 : v; }
  function dailyUse(story, s, k) {
    var D = (story.stocks || {})[k] || {}, n = 0, e = D.eat;
    if (typeof e === "number") n = e;
    else if (e && typeof e === "object") { var by = D.by ? stateOf(s, D.by) : null; n = by != null && e[by] != null ? e[by] : (e.default || 0); }
    (D.extra || []).forEach(function (x) { if (evalCond(story, s, x.if)) n += x.n || 0; });
    return n;
  }
  // Intent: daysLeft(Story, State, Stock) -> Int | null = how many days the stock lasts at today's rate (null: it does not fall)
  function daysLeft(story, s, k) { var u = dailyUse(story, s, k); return u > 0 ? Math.floor(stockNow(story, s, k) / u) : null; }
  function unitOf(D, n) { return Math.abs(n) > 1 ? (D.plural || D.unit || "") : (D.unit || ""); }
  function stockLine(story, s, k, n) { var D = story.stocks[k] || {}; return n + (D.unit ? " " + unitOf(D, n) : ""); }
  function setStock(story, s, k, v) {
    var D = story.stocks[k] || {}, max = D.max != null ? D.max : Infinity;
    s.stocks = s.stocks || {};
    s.stocks[k] = Math.max(0, Math.min(max, Math.round(v)));
    if (s.stocks[k] <= 0) s.flags["epuise:" + k] = true; else delete s.flags["epuise:" + k];
  }
  // One new day: each stock takes its day's share (and rots, when it rots); one line says it all.
  function newDay(story, s) {
    var bits = [];
    stockIds(story).forEach(function (k) {
      var D = story.stocks[k], before = stockNow(story, s, k), use = dailyUse(story, s, k), after = before - use, rot = 0;
      if (D.spoil && evalCond(story, s, D.spoil.if) && (s.tickDay % (D.spoil.every || 1)) === 0) { rot = Math.ceil(Math.max(0, after) * (D.spoil.share || 0)); after -= rot; }
      setStock(story, s, k, after);
      var d = s.stocks[k] - before; if ((!d && !D.pill) || !stockShown(story, s, k)) return;
      bits.push(D.name + " " + (d > 0 ? "+" : d < 0 ? "−" : "") + (d ? Math.abs(d) : "=") + " → " + stockLine(story, s, k, s.stocks[k]) + (rot ? " (dont " + rot + " " + unitOf(D, rot) + " gâté" + (rot > 1 ? "s" : "") + ")" : ""));
    });
    if (bits.length) ev(s, "Jour " + s.tickDay + " · " + bits.join(" · "), "world day");
  }

  // --- the world moves on (story.march: [{ id, at: { day, hour }, until, if, acts, fx, say, title, to }])
  // An entry happens once, as soon as its moment is reached and its condition holds, whatever the reader is doing: the
  // flag `marche:<id>` is set, its effects applied, its line told. With `to`, the next page is that scene (in `acts`),
  // and the clock stops on the hour of the entry.
  function marchDue(story, s) {
    (story.march || []).forEach(function (e) {
      s.marched = s.marched || {};
      if (s.marched[e.id]) return;
      if (e.at && !reached(s, e.at)) return;
      if (e.until && reached(s, e.until)) return;
      if (e.acts && e.acts.indexOf(s.lastAct) < 0) return;
      if (!evalCond(story, s, e.if)) return;
      s.marched[e.id] = { day: day(s), t: timeLabel(s) };
      s.flags["marche:" + e.id] = true;
      apply(story, s, e.fx);
      if (e.say) ev(s, interp(s, e.say), "world");
      if (e.to) { s.pending = s.pending || []; s.pending.push({ to: e.to, at: e.at || null, acts: e.acts || null, why: "marche:" + e.id }); }
    });
  }
  // --- debts and promises (story.promises: { id: { to, text, kind: "dette" | "promesse", due, gold, stock, keeps, breaks,
  // collect, kept, broken } }). fx.promise makes one, fx.keep keeps it, fx.break breaks it, fx.forgive lets it go.
  // The term passes: the promise is broken. Who was promised sees the hero as `broken` (trahi by default), and with
  // `collect` the creditor comes: the next page is that scene. A debt in coins is paid back where the creditor is.
  var PROMISE_STATES = { "en cours": "En cours", tenue: "Tenue", rompue: "Rompue", remise: "Remise" };
  function promiseDef(story, id) { var d = (story.promises || {})[id]; if (!d) throw new Error("promesse inconnue " + id); return d; }
  function promiseState(s, id) { var p = (s.promises || {})[id]; return p ? p.state : null; }
  function promiseEnd(story, s, id, state) {
    var P = s.promises[id], D = promiseDef(story, id); if (!P || P.state !== "en cours") return;
    P.state = state; P.end = timeLabel(s);
    s.flags[(state === "tenue" ? "tenue:" : state === "rompue" ? "rompue:" : "remise:") + id] = true;
    var who = (story.people || {})[D.to] ? story.people[D.to].name : null, what = interp(s, D.text);
    if (state === "tenue") { ev(s, (D.kind === "dette" ? "Dette réglée" : "Promesse tenue") + " : " + what + (who ? " (" + who + ")" : ""), "good promise"); if (D.kept && who) apply(story, s, { regard: (function () { var r = {}; r[D.to] = D.kept; return r; })() }); }
    else if (state === "rompue") {
      ev(s, (D.kind === "dette" ? "Dette impayée" : "Promesse rompue") + " : " + what + (who ? " (" + who + ")" : ""), "bad promise");
      if (who) { s.regard = s.regard || {}; s.regard[D.to] = D.broken || "trahi"; }
      if (D.collect) { s.pending = s.pending || []; s.pending.push({ to: D.collect, why: "promesse:" + id }); }
    } else ev(s, "Promesse levée : " + what + (who ? " (" + who + ")" : ""), "promise");
  }
  function promisesDue(story, s) {
    Object.keys(s.promises || {}).forEach(function (id) {
      var P = s.promises[id]; if (P.state !== "en cours") return;
      var D = promiseDef(story, id);
      if (D.keeps != null && evalCond(story, s, D.keeps)) promiseEnd(story, s, id, "tenue");
      else if (D.breaks != null && evalCond(story, s, D.breaks)) promiseEnd(story, s, id, "rompue");
      else if (D.due && reached(s, D.due)) promiseEnd(story, s, id, "rompue");
    });
  }
  // The people here, for a debt paid back: those whose hours put them in this place now (on a crossroads), and the
  // person whose talk scene this is.
  function peopleHere(story, s, p, id) {
    var out = {};
    if (p && p.hub && p.place) hereNow(story, s, p.place).forEach(function (x) { out[x.id] = 1; });
    Object.keys(story.people || {}).forEach(function (k) { (story.people[k].at || []).forEach(function (a) { if (a.talk === id) out[k] = 1; }); });
    if (p && p.montrer) out[p.montrer] = 1;
    [].concat((p && p.creditor) || []).forEach(function (k) { out[k] = 1; });
    return out;
  }
  function repayChoices(story, s, p) {
    if (!p || s.combat || s.travel) return [];
    var here = peopleHere(story, s, p, s.node), out = [];
    Object.keys(s.promises || {}).forEach(function (id) {
      var P = s.promises[id], D = promiseDef(story, id); if (P.state !== "en cours" || !here[D.to] || (!D.gold && !D.stock)) return;
      var name = story.people[D.to].name;
      if (D.gold) out.push({ sys: "repay", promise: id, group: "dette", label: "Rembourser " + lowArt(name) + " · " + money(story, D.gold, true), if: { gold: { min: D.gold } }, why: "Il te faut " + money(story, D.gold) + "." });
      else { var k = Object.keys(D.stock)[0], n = D.stock[k]; out.push({ sys: "repay", promise: id, group: "dette", label: "Rendre " + stockLine(story, s, k, n) + " " + withPrep("à", name), if: { stock: k, min: n }, why: "Il te faut " + stockLine(story, s, k, n) + "." }); }
    });
    return out;
  }
  // Intent: tick(Story, State) ! the days that passed (stocks), the world's moments, the terms of promises
  function tick(story, s) {
    weatherTick(story, s);
    if (s.wounds) woundsTick(story, s);
    if (!story.stocks && !story.march && !story.promises && !(story.quests || []).some(function (q) { return q.due; })) return;
    if (s.tickDay == null) s.tickDay = day(s);
    while (s.tickDay < day(s)) { s.tickDay++; newDay(story, s); }
    marchDue(story, s);
    promisesDue(story, s);
  }
  // Intent: stopAt(Story, State, Time) -> Time | null = the first moment, before that time, when the world imposes a
  // scene (march `to`, a creditor who comes): time spent by a choice or a scene stops there, so the scene opens at its hour.
  function stopAt(story, s, t1) {
    var best = null;
    (story.march || []).forEach(function (e) {
      if (!e.to || !e.at || (s.marched || {})[e.id] || (e.acts && e.acts.indexOf(s.lastAct) < 0)) return;
      var m = momentOf(e.at); if (m <= s.time || m > t1 || (e.until && momentOf(e.until) <= m)) return;
      if (best == null || m < best) best = m;
    });
    Object.keys(s.promises || {}).forEach(function (id) {
      var P = s.promises[id], D = (story.promises || {})[id] || {}; if (P.state !== "en cours" || !D.collect || !D.due) return;
      var m = momentOf(D.due); if (m > s.time && m <= t1 && (best == null || m < best)) best = m;
    });
    return best;
  }
  // Intent: redirect(Story, State, PassageId) -> PassageId = the scene the world imposes now, if any (march `to`, collect)
  // Intent: branchTo(Story, State, Passage) -> Passage = a switch passage (`branch: [{ if, to }]`, 8.8) sends the reader
  // on to the first branch whose condition holds (the last one should have none), without a page of its own.
  // Why: when the whole state of the story decides what comes next (whose plan held, who is free, who is dead), the
  // story declares the order of the cases and the engine chooses; no lone « Continuer » button that says nothing.
  function branchTo(story, s, id) {
    for (var n = 0; n < BRANCH_MAX && story.passages[id] && story.passages[id].branch; n++) {
      var bs = story.passages[id].branch, hit = null;
      for (var i = 0; i < bs.length && !hit; i++) if (evalCond(story, s, bs[i].if) && tagsOk(story, s, bs[i], id)) hit = bs[i];
      if (!hit) { guard(s, "§ " + id + " : aucune branche ne tient, la dernière est prise"); hit = bs[bs.length - 1]; }
      if (hit.fx) apply(story, s, hit.fx);
      if (!story.passages[hit.to]) throw new Error("branche vers un passage inconnu " + hit.to + " (depuis " + id + ")");
      id = hit.to;
    }
    return id;
  }
  var BRANCH_MAX = 12;
  function redirect(story, s, id) {
    var p = story.passages[id];
    if (!s.pending || !s.pending.length || !p || p.end) return id;
    while (s.pending.length) {
      var r = s.pending.shift();
      if (r.acts && r.acts.indexOf(p.act || s.lastAct) < 0) continue; // a crossroads without act keeps the act in progress
      if (!story.passages[r.to] || r.to === id) continue;
      return r.to;
    }
    return id;
  }

  // --- markets that move (shop.moves: [{ if, x, say }], shop.scarce: stock, sells[].if)
  // Intent: priceFactor(Story, State, Shop) -> Number = today's prices against the shop's own
  function priceFactor(story, s, sh) {
    var f = 1;
    (sh.moves || []).forEach(function (m) { if (evalCond(story, s, m.if)) f *= m.x || 1; });
    if (sh.scarce && (story.stocks || {})[sh.scarce]) { var st0 = story.stocks[sh.scarce].start || 1, now = Math.max(1, stockNow(story, s, sh.scarce)); f *= Math.min(SCARCE_MAX, Math.max(1, Math.pow(st0 / now, SCARCE_POW))); }
    return Math.round(f * 10) / 10;
  }
  function priced(n, f) { return Math.max(1, Math.round(n * f)); }
  function shopSays(story, s, p) {
    var sh = p && p.shop && (story.shops || {})[p.shop]; if (!sh) return [];
    return (sh.moves || []).filter(function (m) { return m.say && evalCond(story, s, m.if); }).map(function (m) { return interp(s, m.say); });
  }

  // --- camps (story.camps: { id: { name, leader, rivals, desc } }): rallying one closes the doors of its rivals.
  function rivalsOf(story, c) { var C = (story.camps || {})[c]; if (!C) return []; return C.rivals || Object.keys(story.camps).filter(function (k) { return k !== c; }); }
  // A scene, a paragraph or a choice tagged camp: "x" belongs to that camp: closed once the hero has rallied a rival.
  function campOk(story, s, c) { return !s.camp || [].concat(c).some(function (x) { return x === s.camp || rivalsOf(story, s.camp).indexOf(x) < 0; }); }

  // --- councils and votes (story.councils: { id: { title, hero, members: { person: { absent } } } }, story.motions:
  // { id: { council, title, text, lean: { member: "pour" | "contre" | "abstention" | "indecis" }, say, tie, fx } })
  // Before the session, fx.sway turns a member (convinced, bought, threatened) and fx.sound learns how one leans. A
  // passage `council: { motion, to }` opens the vote: each member present votes, the hero last, and the votes are counted.
  var VOTES = { pour: "Pour", contre: "Contre", abstention: "Abstention" };
  function motionDef(story, m) { var d = (story.motions || {})[m]; if (!d) throw new Error("motion inconnue " + m); return d; }
  function leanOf(story, s, m, k) { var o = ((s.leans || {})[m] || {})[k]; return o || (motionDef(story, m).lean || {})[k] || "indecis"; }
  function memberIds(story, cid) { var C = (story.councils || {})[cid] || {}; return C.order || Object.keys(C.members || {}); }
  function memberAbsent(story, s, cid, k) { var M0 = ((story.councils || {})[cid] || {}).members || {}; return evalCond(story, s, (M0[k] || {}).absent || false); }
  function councilChoices(story, s, p) {
    if (!p || !p.council || s.combat || (s.votes || {})[p.council.motion]) return [];
    return [{ sys: "council", group: "conseil", label: p.council.label || "Passer au vote" }];
  }
  function voteOpen(story, s) {
    var p = story.passages[s.node], m = p.council.motion, D = motionDef(story, m), by = {};
    memberIds(story, D.council).forEach(function (k) {
      if (memberAbsent(story, s, D.council, k)) return;
      var l = leanOf(story, s, m, k);
      by[k] = l === "indecis" ? (RNG() < 0.5 ? "pour" : "contre") : l;
    });
    s.vote = { m: m, from: s.node, by: by, hero: null };
    s.node = "@conseil";
  }
  function voteCount(by) { var n = { pour: 0, contre: 0, abstention: 0 }; Object.keys(by).forEach(function (k) { n[by[k]] = (n[by[k]] || 0) + 1; }); return n; }
  function voteResult(story, m, by) { var n = voteCount(by), D = motionDef(story, m); return n.pour > n.contre ? "adopte" : n.pour < n.contre ? "rejete" : (D.tie || "rejete"); }
  function voteEnd(story, s) {
    var v = s.vote, D = motionDef(story, v.m), by = Object.assign({}, v.by);
    if (v.hero) by.hero = v.hero;
    var res = voteResult(story, v.m, by), n = voteCount(by);
    s.votes = s.votes || {}; s.votes[v.m] = { result: res, by: by, pour: n.pour, contre: n.contre, abstention: n.abstention, t: timeLabel(s) };
    var set = {}; set["vote-" + v.m] = res;
    apply(story, s, { set: set, flag: "vote:" + v.m });
    ev(s, "Conseil · « " + interp(s, D.title) + " » : " + (res === "adopte" ? "adoptée" : "rejetée") + " (" + n.pour + " pour, " + n.contre + " contre" + (n.abstention ? ", " + n.abstention + " abstention" + (n.abstention > 1 ? "s" : "") : "") + ")", "vote");
    apply(story, s, (D.fx || {})[res]);
    var to = story.passages[v.from].council.to;
    s.vote = null; s.via = "vote";
    go(story, s, to);
  }

  // --- ties (story.ties: [{ id, a, b, kind, label, if }]): what the hero has found out about who is with whom.
  var TIE_KINDS = { famille: "Famille", allie: "Alliés", ennemi: "Ennemis", amour: "Amour", dette: "Dette", sert: "Au service de", secret: "Secret", membre: "Du camp" };
  function tiesKnown(story, s) {
    return (story.ties || []).filter(function (t) { return (s.tiesKnown || {})[t.id] || (t.if != null && evalCond(story, s, t.if)); });
  }

  // --- pitched battles (story.battles: { id: { title, intro, hero, posts: [{ id, name, def, key, if, lost }],
  // troops: [{ id, name, force, at, if, desc }], waves: [{ text, hits: { post: n } }], orders: [{ id, label, post, def,
  // once, if, fx }], maxLost, win: { to, fx, via }, lose: { to, fx, via } } }). A passage `battle: "id"` offers to
  // deploy. The reader places each troop (and the hero), then gives one order a wave; each post holds, bends (the
  // troops there tire) or breaks (it is lost, its troops fall back). A key post lost, or `maxLost` posts, lose the day.
  function lowArt(n) { return String(n).replace(/^(Le|La|Les|L['’])(?=[\s'’]|$)/, function (m) { return m.toLowerCase(); }).replace(/^(l['’]) /, "$1"); }
  function battleDef(story, id) { var b = (story.battles || {})[id]; if (!b) throw new Error("bataille inconnue " + id); return b; }
  function battleChoices(story, s, p) {
    if (!p || !p.battle || s.combat || ((s.battles || {})[p.battle] || {}).out) return [];
    return [{ sys: "battle", group: "bataille", label: p.battleLabel || "Disposer tes troupes" }];
  }
  function heroForce(story, s) { return BATTLE_HERO + Math.floor(Math.max(0, bonus(story, s, "combat")) / BATTLE_HERO_PER); }
  function battleStart(story, s) {
    var p = story.passages[s.node], B = battleDef(story, p.battle), lost = {}, troops = [];
    B.posts.forEach(function (x) { if (x.lost != null && evalCond(story, s, x.lost)) lost[x.id] = true; });
    B.troops.forEach(function (t) { if (evalCond(story, s, t.if)) troops.push(t.id); });
    if (B.hero !== false) troops.push("hero");
    s.battle = { id: p.battle, from: s.node, step: "place", i: 0, troops: troops, at: {}, vig: {}, lost: lost, wave: 0, res: null, used: {}, hurt: 0, lostVig: 0 };
    troops.forEach(function (k) { s.battle.vig[k] = 100; });
    s.node = "@bataille";
  }
  function bPosts(story, s) { var B = battleDef(story, s.battle.id); return B.posts.filter(function (x) { return evalCond(story, s, x.if); }); }
  function bTroop(story, s, k) { if (k === "hero") return { id: "hero", name: heroName(s) === "le héros" ? "Toi" : "Toi (" + heroName(s) + ")", force: heroForce(story, s) }; return battleDef(story, s.battle.id).troops.filter(function (t) { return t.id === k; })[0] || { id: k, name: k, force: 1 }; }
  function bForceAt(story, s, post) {
    var b = s.battle, f = 0;
    b.troops.forEach(function (k) { if (b.at[k] === post) f += bTroop(story, s, k).force * (k === "hero" ? 1 : b.vig[k] / 100); });
    return f;
  }
  function bThreat(n) { return n <= 0 ? "rien" : n <= 2 ? "une menace légère" : n <= 4 ? "une forte poussée" : "le gros de l'assaut"; }
  // The post a troop falls back to: the nearest one still held (the next in the list, else the previous).
  function bFallback(story, s, from) { var ps = bPosts(story, s).filter(function (x) { return !s.battle.lost[x.id]; }); if (!ps.length) return null; var all = bPosts(story, s).map(function (x) { return x.id; }), i = all.indexOf(from); var best = null, bd = Infinity; ps.forEach(function (x) { var d = Math.abs(all.indexOf(x.id) - i); if (d < bd) { bd = d; best = x.id; } }); return best; }
  function battleOrders(story, s) {
    var b = s.battle, B = battleDef(story, b.id), W0 = B.waves[b.wave] || {}, hits = W0.hits || {}, out = [];
    var held = bPosts(story, s).filter(function (x) { return !b.lost[x.id]; });
    out.push({ sys: "border", kind: "hold", group: "bataille", label: "Tenir les positions" });
    // Reinforce a threatened post: the engine takes the freshest troop from the quietest post.
    held.filter(function (x) { return (hits[x.id] || 0) > 0; }).forEach(function (x) {
      var cand = b.troops.filter(function (k) { return k !== "hero" && b.at[k] !== x.id && !b.lost[b.at[k]] && b.vig[k] > 0; })
        .sort(function (a1, a2) { return ((hits[b.at[a1]] || 0) - (hits[b.at[a2]] || 0)) || (b.vig[a2] - b.vig[a1]); })[0];
      if (cand && (hits[b.at[cand]] || 0) < (hits[x.id] || 0)) out.push({ sys: "border", kind: "move", troop: cand, post: x.id, group: "bataille", label: "Envoyer " + bTroop(story, s, cand).name.replace(/^.*$/, lowArt) + " renforcer " + x.name.replace(/^.*$/, lowArt) });
    });
    var worst = held.slice().sort(function (a1, a2) { return (hits[a2.id] || 0) - (hits[a1.id] || 0); })[0];
    if (worst && (hits[worst.id] || 0) > 0 && bForceAt(story, s, worst.id) > 0) out.push({ sys: "border", kind: "charge", post: worst.id, group: "bataille", label: "Contre-attaquer sur " + worst.name.replace(/^.*$/, lowArt) });
    (B.orders || []).forEach(function (o) {
      if (o.once && b.used[o.id]) return;
      if (!evalCond(story, s, o.if)) return;
      if (o.post && b.lost[o.post]) return;
      out.push({ sys: "border", kind: "order", order: o.id, group: "bataille", label: interp(s, o.label) });
    });
    return out;
  }
  function battleOrder(story, s, c) {
    var b = s.battle, B = battleDef(story, b.id), W0 = B.waves[b.wave] || {}, hits = W0.hits || {}, extra = {};
    if (c.kind === "move") b.at[c.troop] = c.post;
    if (c.kind === "charge") extra[c.post] = (extra[c.post] || 0) + BATTLE_CHARGE;
    if (c.kind === "order") { var o = (B.orders || []).filter(function (x) { return x.id === c.order; })[0]; b.used[o.id] = true; if (o.post) extra[o.post] = (extra[o.post] || 0) + (o.def || 0); apply(story, s, o.fx); }
    var res = {};
    bPosts(story, s).forEach(function (x) {
      if (b.lost[x.id]) { res[x.id] = "perdu"; return; }
      var h0 = hits[x.id] || 0;
      if (h0 <= 0) { res[x.id] = "calme"; return; }
      var def = (x.def || 0) + bForceAt(story, s, x.id) + (extra[x.id] || 0), margin = def + die(6) - (h0 + die(6));
      var here = b.troops.filter(function (k) { return b.at[k] === x.id; });
      var tire = function (n) { here.forEach(function (k) { if (k === "hero") return; var v0 = b.vig[k]; b.vig[k] = Math.max(0, b.vig[k] - n); b.lostVig += v0 - b.vig[k]; }); };
      if (c.kind === "charge" && c.post === x.id) tire(BATTLE_CHARGE_COST);
      if (margin >= 0) { res[x.id] = "tient"; tire(BATTLE_HOLD_COST); }
      else if (margin > BATTLE_BREAK) { res[x.id] = "plie"; tire(BATTLE_BEND_COST); }
      else {
        res[x.id] = "rompt"; tire(BATTLE_BREAK_COST); b.lost[x.id] = true;
        if (here.indexOf("hero") >= 0) b.hurt += BATTLE_HERO_HURT;
        var to = bFallback(story, s, x.id); here.forEach(function (k) { b.at[k] = to; });
      }
    });
    b.res = res; b.step = "result";
  }
  function battleLostDay(story, s) {
    var b = s.battle, B = battleDef(story, b.id), lost = bPosts(story, s).filter(function (x) { return b.lost[x.id]; });
    return lost.some(function (x) { return x.key; }) || lost.length >= (B.maxLost || BATTLE_MAX_LOST) || !bPosts(story, s).some(function (x) { return !b.lost[x.id]; });
  }
  function battleEnd(story, s) {
    var b = s.battle, B = battleDef(story, b.id), lose = battleLostDay(story, s), br = lose ? B.lose : B.win;
    var losses = Math.round(b.lostVig / Math.max(1, b.troops.length - 1));
    s.battles = s.battles || {}; s.battles[b.id] = { out: lose ? "lose" : "win", losses: losses, lost: Object.keys(b.lost) };
    var set = {}; set["bataille-" + b.id] = lose ? "perdue" : "gagnee";
    apply(story, s, { set: set, flag: "bataille:" + b.id });
    ev(s, interp(s, B.title) + " : " + (lose ? "la ligne a cédé." : "la ligne a tenu.") + " Pertes : " + (losses < 15 ? "légères" : losses < 35 ? "lourdes" : "terribles") + ".", lose ? "bad" : "good");
    if (b.hurt) apply(story, s, { pv: -b.hurt });
    s.battle = null; s.last = lose ? "lose" : "win"; s.via = br.via || null;
    if (lose) stat(s, "battlesLost"); else stat(s, "battlesWon");
    apply(story, s, br.fx);
    go(story, s, br.to);
  }
  function battleView(story, s) {
    var b = s.battle, B = battleDef(story, b.id), text = [], cs = [], posts = bPosts(story, s);
    var plan = { title: interp(s, B.title), wave: b.wave, waves: B.waves.length, step: b.step, posts: posts.map(function (x) {
      var W0 = B.waves[b.wave] || {}, hits = (b.step === "place" ? {} : W0.hits || {});
      return { id: x.id, name: x.name, key: !!x.key, lost: !!b.lost[x.id], threat: hits[x.id] || 0, res: b.step === "result" ? (b.res || {})[x.id] : null,
        troops: b.troops.filter(function (k) { return b.at[k] === x.id; }).map(function (k) { var t = bTroop(story, s, k); return { name: t.name, vig: k === "hero" ? null : b.vig[k], hero: k === "hero" }; }) };
    }) };
    if (b.step === "place") {
      var k = b.troops[b.i], t = bTroop(story, s, k);
      if (b.i === 0 && B.intro) text.push(interp(s, B.intro));
      text.push(k === "hero" ? "Et toi, où te tiens-tu ?" : "Où places-tu **" + t.name + "** ?" + (t.desc ? " " + interp(s, t.desc) : ""));
      posts.filter(function (x) { return !b.lost[x.id]; }).forEach(function (x) { cs.push({ sys: "bplace", post: x.id, group: "bataille", label: x.name + (x.key ? " (à tenir coûte que coûte)" : "") }); });
    } else if (b.step === "wave") {
      var W1 = B.waves[b.wave];
      text.push(interp(s, W1.text));
      posts.forEach(function (x) { if (!b.lost[x.id]) text.push("*" + x.name + " : " + bThreat((W1.hits || {})[x.id] || 0) + ".*"); });
      cs = battleOrders(story, s);
    } else {
      var RES = { tient: "la ligne tient", plie: "la ligne plie, mais tient", rompt: "la ligne rompt : le poste est perdu", calme: "rien ne bouge", perdu: "aux mains de l'ennemi" };
      posts.forEach(function (x) { text.push("**" + x.name + "** : " + RES[(b.res || {})[x.id] || "calme"] + "."); });
      var last = b.wave + 1 >= B.waves.length || battleLostDay(story, s);
      cs.push({ sys: "bnext", group: "bataille", label: last ? "Voir l'issue de la bataille" : "La vague suivante" });
    }
    return { title: interp(s, B.title), kind: "bataille", text: text, choices: cs, battle: plan };
  }

  // ------------------------------------------------------------------ at sea (8.1, « En mer »)
  // The weather (story.weather: { by, every, start, kinds: { id: { name, mod: { dom: n }, say, desc } }, regions: { <value of
  // by>: { kind: weight } }, seasons: { <season>: { kind: extra weight } } }): every `every` hours the engine draws the sky
  // anew from the table of the region the story is in (the state `by`, e.g. mer=large), plus the season's extra weights.
  // A paragraph, a choice or a scene tagged `temps: "brume"` shows only under that sky; the kinds' `mod` weigh on the
  // hero's rolls. fx.meteo forces a sky (a storm written in a scene) and holds it for `every` hours, or { is, hours }.
  // The seasons (story.seasons: [{ id, name, from: { day, hour } }]): the last one reached is the season (tag `saison`).
  var FATIGUE_MAX = 5, WEATHER_EVERY = 6, ENCOUNTER_EVERY = 6, ENCOUNTER_CHANCE = 0.4;
  function seasonOf(story, s) { var cur = null; (story.seasons || []).forEach(function (x) { if (!x.from || reached(s, x.from)) cur = x; }); return cur; }
  function weatherOf(story, s) { var Wt = story.weather; if (!Wt) return null; return s.weather || Wt.start || Object.keys(Wt.kinds || {})[0] || null; }
  function weatherKind(story, s) { var w = weatherOf(story, s); return w ? (story.weather.kinds || {})[w] || null : null; }
  function weighted(list, wOf) { var tot = 0; list.forEach(function (x) { tot += wOf(x); }); var x = RNG() * tot; for (var i = 0; i < list.length; i++) { x -= wOf(list[i]); if (x <= 0) return list[i]; } return list[list.length - 1]; }
  function weatherTable(story, s) {
    var Wt = story.weather, reg = Wt.by === "route" ? routeRegion(story, s) : Wt.by ? stateOf(s, Wt.by) : null, base = (Wt.regions || {})[reg] || Wt.base || {}, t = {};
    Object.keys(base).forEach(function (k) { t[k] = base[k]; });
    var se = seasonOf(story, s), add = se && (Wt.seasons || {})[se.id];
    if (add && Object.keys(base).length) Object.keys(add).forEach(function (k) { t[k] = (t[k] || 0) + add[k]; });
    return t;
  }
  // The region the hero is in, for a weather that follows the roads (weather.by: "route", piste 10, 15/11): the region
  // of the route being travelled, or the place's own `region`, or "lieu" (in a village, under a roof).
  function routeRegion(story, s) { if (s.travel) return s.travel.region || "route"; var pl = W(story).places[s.place] || {}; return pl.region || "lieu"; }
  function weatherTick(story, s) {
    var Wt = story.weather; if (!Wt) return;
    if (!s.weather) s.weather = weatherOf(story, s);
    if (s.weatherAt == null) { s.weatherAt = s.time; return; }
    if (s.time - s.weatherAt < (Wt.every || WEATHER_EVERY)) return;
    if (s.weatherHold != null && s.time < s.weatherHold) return;
    s.weatherAt = s.time; s.weatherHold = null;
    var t = weatherTable(story, s), ks = Object.keys(t).filter(function (k) { return t[k] > 0 && (Wt.kinds || {})[k]; });
    if (!ks.length) return;
    var w = weighted(ks, function (k) { return t[k]; });
    if (w !== s.weather) { s.weather = w; var K = Wt.kinds[w]; ev(s, K.say ? interp(s, K.say) : "Le temps change : " + K.name + ".", "world weather"); }
  }
  function setWeather(story, s, f) {
    var Wt = story.weather; if (!Wt) throw new Error("meteo : l'histoire n'a pas de météo");
    var id = typeof f === "string" ? f : f.is, K = (Wt.kinds || {})[id]; if (!K) throw new Error("temps inconnu " + id);
    var hours = typeof f === "object" && f.hours != null ? f.hours : (Wt.every || WEATHER_EVERY);
    var was = s.weather; s.weather = id; s.weatherAt = s.time; s.weatherHold = s.time + hours;
    if (was !== id) ev(s, K.say ? interp(s, K.say) : "Le temps change : " + K.name + ".", "world weather");
  }
  function weatherMod(story, s, dom) { if (story.weather && story.weather.by === "route" && !roadTollOn(s)) return 0; var K = weatherKind(story, s); return K && K.mod ? K.mod[dom] || 0 : 0; }
  // Wounds that leave a trace (story.wounds: { id: { name, desc, mod: { dom: n }, days, tended, scar, mark } }): fx.blessure
  // opens one; it weighs on the rolls (`mod`) until it closes, after `days` days, or `tended` days once fx.soigner has
  // dressed it (half by default); fx.guerir closes it at once. A closed wound with `scar` leaves a scar (tag and
  // condition `cicatrice`), and `mark` draws it on the hero's face (a mark of Moteur.FACE).
  function woundDef(story, k) { var d = (story.wounds || {})[k]; if (!d) throw new Error("blessure inconnue " + k); return d; }
  function woundsOpen(story, s) { return Object.keys(s.wounds || {}).filter(function (k) { return !s.wounds[k].healed; }); }
  function woundMod(story, s, dom) { var n = 0; woundsOpen(story, s).forEach(function (k) { n += ((story.wounds[k] || {}).mod || {})[dom] || 0; }); return n; }
  function woundDays(D, W0) { return W0.tended ? (D.tended != null ? D.tended : Math.ceil((D.days || 3) / 2)) : (D.days || 3); }
  function woundClose(story, s, k) {
    var W0 = s.wounds[k], D = woundDef(story, k); if (!W0 || W0.healed) return;
    W0.healed = s.time;
    if (D.scar) {
      s.flags["cicatrice:" + k] = true;
      if (D.mark) { s.face = Object.assign({}, s.face || {}); var mk = (s.face.marks || []).slice(); if (mk.indexOf(D.mark) < 0) mk.push(D.mark); s.face.marks = mk; }
    }
    ev(s, "Blessure refermée : " + D.name + (D.scar ? ". Il en reste " + interp(s, D.scar) + "." : "."), "good wound");
  }
  function woundsTick(story, s) {
    woundsOpen(story, s).forEach(function (k) { var W0 = s.wounds[k], D = woundDef(story, k); if (s.time >= W0.at + 24 * woundDays(D, W0)) woundClose(story, s, k); });
  }
  function woundOpen(story, s, k) {
    var D = woundDef(story, k); s.wounds = s.wounds || {};
    if (s.wounds[k] && !s.wounds[k].healed) return;
    s.wounds[k] = { at: s.time, tended: false };
    var mods = Object.keys(D.mod || {}).map(function (d) { return (D.mod[d] > 0 ? "+" : "−") + Math.abs(D.mod[d]) + " " + DOMAINS[d]; });
    ev(s, "Blessure : " + D.name + (mods.length ? " (" + mods.join(", ") + " jusqu'à ce qu'elle se referme)" : ""), "bad wound");
  }
  // Encounters at sea (story.encounters: { by, every, chance, list: [{ to, region, saison, temps, if, weight, once }] }):
  // coming back to a crossroads after `every` hours or more, the engine may play an encounter of the region the story is in
  // (the state `by`), fitting the season and the sky, not met yet. The scene ends with `back: true`.
  function encounterDue(story, s) {
    var E = story.encounters; if (!E || s.combat || s.travel) return null;
    if (s.encAt == null) { s.encAt = s.time; return null; }
    if (s.time - s.encAt < (E.every || ENCOUNTER_EVERY)) return null;
    s.encAt = s.time;
    var reg = E.by ? stateOf(s, E.by) : null, se = seasonOf(story, s), w = weatherOf(story, s);
    var pool = (E.list || []).filter(function (e) {
      var p = story.passages[e.to];
      return p && (e.region == null || [].concat(e.region).indexOf(reg) >= 0) && (e.saison == null || (se && [].concat(e.saison).indexOf(se.id) >= 0)) &&
        (e.temps == null || [].concat(e.temps).indexOf(w) >= 0) && !(e.once !== false && s.seen[e.to]) && evalCond(story, s, e.if) && sceneOk(story, s, p);
    });
    if (!pool.length || RNG() >= (E.chance == null ? ENCOUNTER_CHANCE : E.chance)) return null;
    return weighted(pool, function (e) { return e.weight || 1; }).to;
  }
  // Things put together (story.recipes: { id: { make, of: [items], keep: [items], label, say, with, if, fx, anywhere } }):
  // on a passage marked `atelier: true` (or on any crossroads, with `anywhere`), the engine offers « Assembler : … » as
  // soon as one part is in the bag; it is greyed until all are, and says what is missing.
  function craftChoices(story, s, p) {
    if (!p || !story.recipes || s.combat || s.travel || (!p.atelier && !p.hub)) return [];
    return Object.keys(story.recipes).filter(function (k) {
      var R = story.recipes[k];
      if (!p.atelier && !R.anywhere) return false;
      if (R.once !== false && s.flags["fait:" + k]) return false;
      if (!tagsOk(story, s, R, null) || !evalCond(story, s, R.if)) return false;
      return (R.of || []).some(function (x) { return s.items.indexOf(x) >= 0; });
    }).map(function (k) {
      var R = story.recipes[k], miss = (R.of || []).filter(function (x) { return s.items.indexOf(x) < 0; });
      return { sys: "craft", recipe: k, group: "atelier", label: "Assembler : " + interp(s, R.label || item(story, R.make).name),
        if: { all: (R.of || []).map(function (x) { return { item: x }; }) }, why: miss.length ? "Il te manque : " + miss.map(function (x) { return item(story, x).name; }).join(", ") + "." : "" };
    });
  }
  function craft(story, s, k) {
    var R = story.recipes[k]; if (!R) throw new Error("assemblage inconnu " + k);
    (R.of || []).forEach(function (x) { if ((R.keep || []).indexOf(x) < 0) { var at = s.items.indexOf(x); if (at >= 0) s.items.splice(at, 1); } });
    s.flags["fait:" + k] = true;
    if (R.say) ev(s, interp(s, R.say), "item");
    apply(story, s, Object.assign({}, R.fx || {}, { item: [].concat(R.make || [], (R.fx || {}).item || []) }));
  }
  // Vigils (story.vigils: [{ to, with, label, if }]): on a passage marked `veillee: true`, at night, the engine offers to
  // keep watch with a companion who is there; one vigil a night, each scene once.
  function nightKey(s) { return hour(s) < NIGHT_TO ? day(s) - 1 : day(s); }
  function vigilChoices(story, s, p) {
    if (!p || !p.veillee || !story.vigils || s.combat || s.travel || !isNight(s) || s.vigilNight === nightKey(s)) return [];
    return story.vigils.filter(function (v) { var tp = story.passages[v.to]; return tp && !s.seen[v.to] && tagsOk(story, s, v, null) && evalCond(story, s, v.if) && sceneOk(story, s, tp); })
      .map(function (v) { return { sys: "vigil", to: v.to, group: "veillee", label: interp(s, v.label || ("Veiller avec " + nameOf(story, [].concat(v.with)[0]))) }; });
  }

  // ------------------------------------------------------------------ at school (8.2, « L'école des arts »)
  // Practice (story.practice: { every, step, max, doms, say }): each roll the hero makes in a domain counts as a use;
  // every `every` uses the domain gains `step`, up to `max`, whatever the level. fx.pratique: { dom: n } counts n uses
  // (a lesson, an afternoon at the workbench). The gain shows in the hero's bonus.
  var PRACTICE_EVERY = 3, PRACTICE_STEP = 5, PRACTICE_MAX = 15;
  function practiceOf(s, dom) { return ((s.prac || {})[dom]) || 0; }
  function practiceUse(story, s, dom, n) {
    var P = story.practice; if (!P || !dom || (P.doms && P.doms.indexOf(dom) < 0)) return;
    s.usage = s.usage || {}; s.prac = s.prac || {};
    var every = P.every || PRACTICE_EVERY, step = P.step || PRACTICE_STEP, max = P.max || PRACTICE_MAX;
    for (var i = 0; i < (n || 1); i++) {
      s.usage[dom] = (s.usage[dom] || 0) + 1;
      if (s.usage[dom] % every === 0 && practiceOf(s, dom) < max) {
        s.prac[dom] = Math.min(max, practiceOf(s, dom) + step);
        ev(s, interp(s, String(P.say || "À force de pratique : {dom} +{n}.").replace("{dom}", DOMAINS[dom]).replace("{n}", s.prac[dom])), "good");
      }
    }
  }
  // Character traits (story.traits: { id: { name, low, high, mid, desc } }): fx.trait: { id: ±n } moves the hero along
  // the axis, from -TRAIT_MAX (low) to +TRAIT_MAX (high); the condition { trait: "id", min, max } reads it, so that a
  // reply or a way opens to a bold hero and stays shut to a careful one. The hero tab shows where the hero stands.
  var TRAIT_MAX = 5;
  function traitOf(s, k) { return ((s.traits || {})[k]) || 0; }
  function traitWord(story, s, k) { var T = (story.traits || {})[k] || {}, v = traitOf(s, k); return interp(s, v === 0 ? (T.mid || "Entre les deux") : v > 0 ? T.high : T.low); }
  function traitMove(story, s, d) {
    s.traits = s.traits || {};
    Object.keys(d).forEach(function (k) {
      if (!(story.traits || {})[k]) throw new Error("trait inconnu " + k);
      var v0 = traitOf(s, k), v = Math.max(-TRAIT_MAX, Math.min(TRAIT_MAX, v0 + d[k]));
      s.traits[k] = v;
      if (v !== 0 && (v0 === 0 || (v > 0) !== (v0 > 0))) ev(s, "Ce choix te ressemble : " + traitWord(story, s, k).toLowerCase() + ".", "conseq");
    });
  }
  // Ruled duels (story.duels: { id: { title, foe, foeName, rule, touches, dom, skill, intro, style, tells, say, labels,
  // adapt, winText, loseText, win: { to, fx }, lose: { to, fx } } }): a passage `duel: "id"` opens the duel. Each pass
  // the hero picks a move (attaque, parade, feinte): the parry takes the attack, the attack takes the feint, the feint
  // takes the parry; the same move on both sides is settled by a roll (dom against the foe's skill). The first to
  // `touches` touches wins. The foe remembers the moves the hero used against them in earlier duels (s.duelMemo) and
  // leans to the counter of the hero's habit: a rival who comes back has learnt. `tells` (lines by move) may give away
  // what the foe prepares, the more often the better the hero is in the duel's domain.
  var DUEL_MOVES = { attaque: "Attaquer", parade: "Parer", feinte: "Feinter" }, DUEL_BEATS = { parade: "attaque", attaque: "feinte", feinte: "parade" };
  var DUEL_TOUCHES = 3, DUEL_TELL = 50, DUEL_ADAPT = 2;
  var DUEL_SAY = {
    "attaque>feinte": "{foe} amorce une feinte. Tu ne la suis pas : tu vas droit devant, et tu touches.",
    "parade>attaque": "{foe} se fend. Tu attendais ce coup : tu le détournes, et ta riposte touche.",
    "feinte>parade": "{foe} se ferme en parade. Tu menaces en haut, tu passes en bas, et tu touches.",
    "feinte<attaque": "Tu amorces une feinte. {foe} va droit devant, et te touche.",
    "attaque<parade": "Tu te fends. {foe} t'attendait : le coup est détourné, et la riposte te touche.",
    "parade<feinte": "Tu te fermes en parade. {foe} menace en haut, passe en bas, et te touche.",
    "=win": "Vous faites le même geste au même instant. Tu as un souffle d'avance : touché.",
    "=lose": "Vous faites le même geste au même instant. {foe} a un souffle d'avance, et te touche."
  };
  function duelDef(story, id) { var d = (story.duels || {})[id]; if (!d) throw new Error("duel inconnu " + id); return d; }
  function duelFoe(story, D) { return D.foeName || ((story.people || {})[D.foe] || {}).name || nameOf(story, D.foe); }
  function duelChoices(story, s, p) {
    if (!p || !p.duel || s.combat || ((s.duels || {})[p.duel] || {}).out) return [];
    return [{ sys: "duel", group: "duel", label: interp(s, p.duelLabel || "Saluer, et prendre ta garde") }];
  }
  function duelCounter(m) { return Object.keys(DUEL_BEATS).filter(function (k) { return DUEL_BEATS[k] === m; })[0]; }
  function duelFoeMove(story, s) {
    var D = duelDef(story, s.duel.id), w = Object.assign({ attaque: 1, parade: 1, feinte: 1 }, D.style || {});
    var memo = ((s.duelMemo || {})[D.foe]) || {}, habit = Object.keys(memo).sort(function (a, b) { return memo[b] - memo[a]; })[0];
    if (D.adapt !== false && habit && memo[habit] >= 2) w[duelCounter(habit)] += D.adaptWeight || DUEL_ADAPT;
    return weighted(Object.keys(w), function (k) { return w[k]; });
  }
  function duelPrepare(story, s) {
    var d = s.duel, D = duelDef(story, d.id), tl = (D.tells || {});
    d.next = duelFoeMove(story, s);
    var lines = [].concat(tl[d.next] || []), see = DUEL_TELL + Math.floor(bonus(story, s, D.dom || "combat") / 2);
    d.tell = lines.length && RNG() * 100 < see ? interp(s, lines[Math.floor(RNG() * lines.length)]) : null;
  }
  function duelStart(story, s) {
    var p = story.passages[s.node];
    s.duel = { id: p.duel, from: s.node, me: 0, them: 0, pass: 0, next: null, tell: null, last: null, over: null };
    duelPrepare(story, s);
    s.node = "@duel";
  }
  function duelPass(story, s, move) {
    var d = s.duel, D = duelDef(story, d.id), foe = d.next, won, roll = null;
    s.duelMemo = s.duelMemo || {}; var mm = s.duelMemo[D.foe] = s.duelMemo[D.foe] || {}; mm[move] = (mm[move] || 0) + 1;
    if (DUEL_BEATS[move] === foe) won = true;
    else if (DUEL_BEATS[foe] === move) won = false;
    else {
      roll = rollTest(story, s, { dom: D.dom || "combat", diff: -(D.skill || 0) });
      ev(s, "jet de " + DOMAINS[D.dom || "combat"] + " · " + roll.line + " → " + (roll.ok ? "réussite" : "raté"), (roll.ok ? "good" : "bad") + " roll", { roll: roll });
      won = roll.ok;
    }
    if (won) d.me++; else d.them++;
    d.pass++; d.last = { me: move, them: foe, won: won, same: move === foe };
    var T = D.touches || DUEL_TOUCHES;
    if (d.me >= T || d.them >= T) d.over = d.me >= T ? "win" : "lose"; else duelPrepare(story, s);
  }
  function duelSay(story, s, D, L) {
    var key = L.same ? (L.won ? "=win" : "=lose") : L.me + (L.won ? ">" : "<") + L.them;
    return interp(s, String((D.say || {})[key] || DUEL_SAY[key]).replace(/\{foe\}/g, duelFoe(story, D)));
  }
  function duelEnd(story, s) {
    var d = s.duel, D = duelDef(story, d.id), lose = d.over === "lose", br = (lose ? D.lose : D.win) || {};
    s.duels = s.duels || {}; s.duels[d.id] = { out: lose ? "lose" : "win", me: d.me, them: d.them };
    var set = {}; set["duel-" + d.id] = lose ? "perdu" : "gagne";
    apply(story, s, { set: set, flag: "duel:" + d.id });
    ev(s, interp(s, D.title) + " : " + (lose ? "perdu" : "gagné") + ", " + d.me + " touche" + (d.me > 1 ? "s" : "") + " à " + d.them + ".", lose ? "bad" : "good");
    stat(s, lose ? "duelsLost" : "duelsWon");
    s.duel = null; s.last = lose ? "lose" : "win"; s.via = br.via || null;
    apply(story, s, br.fx);
    go(story, s, br.to);
  }
  function duelView(story, s) {
    var d = s.duel, D = duelDef(story, d.id), foe = duelFoe(story, D), T = D.touches || DUEL_TOUCHES, text = [], cs = [];
    if (!d.pass && D.intro) text.push(interp(s, D.intro));
    if (!d.pass && D.rule) text.push("*Règle : " + interp(s, D.rule) + "*");
    if (d.last) text.push(duelSay(story, s, D, d.last));
    text.push("**Touches** : toi " + d.me + ", " + foe + " " + d.them + ". La première lame à " + T + " l'emporte.");
    if (d.over) {
      text.push(interp(s, d.over === "win" ? (D.winText || "Le duel est à toi.") : (D.loseText || "Le duel est perdu.")));
      cs.push({ sys: "duelEnd", group: "duel", label: "Continuer" });
    } else {
      if (d.tell) text.push("*" + d.tell + "*");
      Object.keys(DUEL_MOVES).forEach(function (k) { cs.push({ sys: "duelMove", move: k, group: "duel", label: interp(s, (D.labels || {})[k] || DUEL_MOVES[k]) }); });
    }
    return { title: interp(s, D.title), kind: "duel", text: text, choices: cs, duel: { me: d.me, them: d.them, touches: T, foe: foe, last: d.last } };
  }
  // Puzzles to handle on the page (story.puzzles: { id: { kind, title, text, wheels, answer, cipher, pieces, hint: [{ if,
  // text }], tries, wrongText, force: { dom, diff, takes, label, fail }, leave, win: { to, fx }, lose: { to, fx } } }):
  // a passage `puzzle: "id"` opens it. kind "molettes": wheels of symbols to turn (answer: one symbol a wheel); "chiffre":
  // a text to decipher (cipher), the reader types the answer (answer: a word or a list of accepted words); "ordre": pieces
  // to put back in order (answer: the pieces' indices in the right order). The app gives the answer with the choice;
  // `force` offers a roll instead (patience, a crowbar), once each time the puzzle is opened; `tries` wrong answers lose it.
  function puzzleDef(story, id) { var z = (story.puzzles || {})[id]; if (!z) throw new Error("énigme inconnue " + id); return z; }
  function puzzleChoices(story, s, p) {
    if (!p || !p.puzzle || s.combat || (s.puzzles || {})[p.puzzle]) return [];
    var D = puzzleDef(story, p.puzzle);
    return [{ sys: "puzzle", group: "enigme", label: interp(s, p.puzzleLabel || D.label || ("Te pencher sur " + lowArt(interp(s, D.title)))) }];
  }
  function plain(x) { return String(x == null ? "" : x).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]/g, ""); }
  function puzzleRight(D, ans) {
    if (ans == null || ans === "") return false;
    if (D.kind === "molettes" || D.kind === "ordre") return Array.isArray(ans) && ans.length === D.answer.length && ans.every(function (x, i) { return String(x) === String(D.answer[i]); });
    return [].concat(D.answer).some(function (a) { return plain(a) === plain(ans); });
  }
  function puzzleOpen(story, s) { s.puzzle = { id: story.passages[s.node].puzzle, from: s.node, wrong: 0, msg: null, forced: false }; s.node = "@enigme"; }
  function puzzleDone(story, s, ok) {
    var z = s.puzzle, D = puzzleDef(story, z.id), br = (ok ? D.win : D.lose) || {};
    s.puzzles = s.puzzles || {}; s.puzzles[z.id] = ok ? "ok" : "ko";
    if (ok) { s.flags["enigme:" + z.id] = true; ev(s, "Énigme résolue : " + interp(s, D.title) + ".", "good"); stat(s, "puzzles"); }
    s.puzzle = null; s.last = ok ? "win" : "lose";
    apply(story, s, br.fx);
    go(story, s, br.to || z.from);
  }
  function puzzleTry(story, s, ans) {
    var z = s.puzzle, D = puzzleDef(story, z.id);
    if (ans == null || ans === "" || (Array.isArray(ans) && !ans.length)) { z.msg = "Tu hésites, et tu ne tentes rien."; return; }
    if (puzzleRight(D, ans)) return puzzleDone(story, s, true);
    z.wrong++;
    z.msg = interp(s, D.wrongText || "Ce n'est pas ça.");
    if (D.tries && z.wrong >= D.tries) puzzleDone(story, s, false);
  }
  function puzzleForce(story, s) {
    var z = s.puzzle, D = puzzleDef(story, z.id), F = D.force;
    if (F.takes) s.time += F.takes;
    var roll = rollTest(story, s, { dom: F.dom, diff: F.diff || 0 });
    ev(s, "jet de " + interp(s, F.testLabel || DOMAINS[F.dom]) + " · " + roll.line + " → " + (roll.ok ? "réussite" : "raté"), (roll.ok ? "good" : "bad") + " roll", { roll: roll });
    if (roll.ok) return puzzleDone(story, s, true);
    z.forced = true; z.msg = interp(s, F.fail || "Peine perdue.");
  }
  function puzzleView(story, s) {
    var z = s.puzzle, D = puzzleDef(story, z.id), text = [interp(s, D.text)], cs = [];
    if (D.cipher) text.push("> " + interp(s, D.cipher));
    (D.hint || []).forEach(function (hn) { if (evalCond(story, s, hn.if)) text.push("*" + interp(s, hn.text) + "*"); });
    if (z.msg) text.push(z.msg);
    if (D.tries) text.push("*Essais restants : " + (D.tries - z.wrong) + ".*");
    cs.push({ sys: "puzzleTry", ui: true, group: "enigme", label: interp(s, D.tryLabel || "Essayer") });
    if (D.force && !z.forced) cs.push({ sys: "puzzleForce", group: "enigme", label: interp(s, D.force.label || "Forcer"), test: { dom: D.force.dom, diff: D.force.diff || 0, label: D.force.testLabel } });
    cs.push({ sys: "puzzleLeave", label: interp(s, D.leave || "Laisser cela pour l'instant") });
    return { title: interp(s, D.title), kind: "enigme", text: text, choices: cs,
      puzzle: { id: z.id, kind: D.kind, wheels: D.wheels || null, pieces: (D.pieces || []).map(function (x) { return interp(s, x); }), size: (D.answer || []).length || null } };
  }
  // Dreams (story.dreams: [{ to, if, weight }], story.dreamChance): arriving on a passage marked `reveil: true` (the
  // morning after the night), the engine may first play a dream not dreamt yet whose condition holds, one a night. The
  // dream ends with back: true, on the waking passage. Nothing in it is explained.
  function dreamDue(story, s) {
    if (!story.dreams || s.combat || s.travel) return null;
    var dk = day(s); if (s.dreamDay === dk) return null;
    var pool = story.dreams.filter(function (d) { return story.passages[d.to] && !s.seen[d.to] && evalCond(story, s, d.if); });
    if (!pool.length) return null;
    s.dreamDay = dk;
    if (RNG() >= (story.dreamChance == null ? 1 : story.dreamChance)) return null;
    return weighted(pool, function (d) { return d.weight || 1; }).to;
  }

  // ------------------------------------------------------------------ a closed room (8.3, « Ce que garde la neige »)
  // Accounts (story.accounts: { id: { by, topic, text, short, true, belie } }, story.topics: { id: { title, solved } }):
  // what someone says happened, kept word for word in the notebook (fx.recit). The reader may doubt an account from the
  // notebook (M.doubt); on a passage `devant: "<person>"`, each doubted account of that person with a `belie` page
  // offers to put it in doubt before them. The hero's own accounts (by: "hero") are put in doubt on the passages where
  // the hero is alone (`seul: true`). Whether an account was true shows once its topic is solved (topics.solved).
  function accountDef(story, id) { var A = (story.accounts || {})[id]; if (!A) throw new Error("version inconnue " + id); return A; }
  function accountBy(story, A) { return A.by === "hero" ? "toi" : (((story.people || {})[A.by] || (story.companions || {})[A.by] || {}).name || A.by); }
  function accountHear(story, s, id) {
    var A = accountDef(story, id); s.accounts = s.accounts || {};
    if (s.accounts[id]) return;
    s.accounts[id] = timeLabel(s);
    var T = (story.topics || {})[A.topic] || {};
    ev(s, (A.by === "hero" ? "Ta version" : "La version " + deName(accountBy(story, A))) + (T.title ? " · " + interp(s, T.title) : "") + " : « " + interp(s, A.short || shortText(A.text)) + " »", "account");
  }
  // Intent: doubt(Story, State, Account, Bool) -> Bool ! the reader's mark in the notebook: « J'en doute ».
  function doubt(story, s, id, on) {
    if (!(s.accounts || {})[id] || !(story.accounts || {})[id]) return false;
    s.doubts = s.doubts || {};
    if (on === false) delete s.doubts[id]; else s.doubts[id] = s.turn || 1;
    return true;
  }
  // "d'Odile", "de Germain", "du docteur Fabre".
  function deName(n) { return /^[aeiouyàâäéèêëîïôöùûü]/i.test(String(n)) ? "d'" + n : withPrep("de", n); }
  function topicSolved(story, s, t) { var T = (story.topics || {})[t]; return !!(T && T.solved && happened(s, T.solved)); }
  // ------------------------------------------------------------------ two players (8.4, « À deux »)
  // Secrets (story.secrets: { id: { title, text, aveu, say, if } }): what one hero holds and the other does not know.
  // fx.secret gives the hero a secret of their own; fx.surprend, one learnt behind its holder's back; fx.confier tells
  // it to the other (the world flag monde:confie:<id>, which src/multi.js carries to the other player at the next
  // rendezvous). On a passage `aparte: true` (the two heroes alone together), each secret the hero still keeps and whose
  // `aveu` scene exists offers « Lui dire : … »; the scene ends with back: true, back to the aparte.
  function secretDef(story, id) { var S = (story.secrets || {})[id]; if (!S) throw new Error("secret inconnu " + id); return S; }
  function secretOwn(s, id) { return ((s.secrets || {})[id] || {}).how === "own"; }
  function secretKnown(s, id) { return !!(s.secrets || {})[id] || !!s.flags["monde:confie:" + id]; }
  function secretLearn(story, s, id, how) {
    var S = secretDef(story, id); s.secrets = s.secrets || {};
    if (s.secrets[id] && (s.secrets[id].how === "own" || how !== "own")) return;
    s.secrets[id] = { how: how, at: timeLabel(s) };
    ev(s, (how === "own" ? "Ce que tu caches · " : "Ce que tu as surpris · ") + interp(s, S.title), "secret");
  }
  function secretTell(story, s, id) {
    var S = secretDef(story, id); if (s.flags["monde:confie:" + id]) return;
    s.flags["monde:confie:" + id] = true; s.secrets = s.secrets || {};
    if (!s.secrets[id]) s.secrets[id] = { how: "own", at: timeLabel(s) };
    s.secrets[id].told = timeLabel(s);
    ev(s, "Tu as confié à " + interp(s, "{autre}") + " : " + interp(s, S.title), "secret");
  }
  // Intent: secretsOf(Story, State) -> [{ id, title, text, how, at, told, from }] = the notebook's « Secrets » tab
  function secretsOf(story, s) {
    return Object.keys(story.secrets || {}).filter(function (id) { return secretKnown(s, id); }).map(function (id) {
      var S = story.secrets[id], k = (s.secrets || {})[id] || null, told = !!s.flags["monde:confie:" + id];
      return { id: id, title: interp(s, S.title), text: interp(s, S.text || ""), how: k ? k.how : "confie", at: k ? k.at : null, told: told };
    });
  }
  function aparteChoices(story, s, p) {
    if (!p || !p.aparte || !story.secrets || s.combat) return [];
    return Object.keys(s.secrets || {}).filter(function (id) {
      var S = story.secrets[id]; return S && S.aveu && secretOwn(s, id) && !s.flags["monde:confie:" + id] && story.passages[S.aveu] && evalCond(story, s, S.if) && sceneOk(story, s, story.passages[S.aveu]);
    }).map(function (id) { var S = story.secrets[id]; return { label: interp(s, S.say || "Lui dire : " + S.title), to: S.aveu, fx: { confier: id }, auto: "aveu", group: "aveu" }; });
  }
  // Interludes (story.interludes: [{ to, act, if }], passage `interlude: { who, where }`): a short scene told from
  // someone else's point of view. Entering a new act, the engine plays the first interlude of that act whose condition
  // holds, once, before the act's first page. Inside, as in a remembrance, the clock stands still; back: true becomes
  // « Revenir à <héros> » and leads to the page the interlude stood before.
  function interludeDue(story, s, id) {
    var p = story.passages[id];
    if (!story.interludes || !p || !p.act || !s.lastAct || p.act === s.lastAct || s.combat || s.travel) return null;
    var order = (story.acts || []).map(function (a) { return a.id; }), ai = order.indexOf(p.act), li = order.indexOf(s.lastAct); if (ai <= li) return null;
    s.interActs = s.interActs || {}; if (s.interActs[p.act]) return null;
    var it = story.interludes.filter(function (x) { return x.act === p.act && story.passages[x.to] && !s.seen[x.to] && evalCond(story, s, x.if); })[0];
    s.interActs[p.act] = true;
    return it ? it.to : null;
  }
  function interludeOf(story, s, p) {
    var I = p.interlude; if (!I) return null;
    if (typeof I === "string") I = { who: I };
    var pe = (story.people || {})[I.who] || (story.companions || {})[I.who];
    return { who: pe ? pe.name : interp(s, I.who || ""), person: pe ? I.who : null, where: I.where ? interp(s, I.where) : "" };
  }
  function belieChoices(story, s, p) {
    if (!p || !story.accounts || s.combat) return [];
    var out = [];
    Object.keys(s.accounts || {}).forEach(function (id) {
      var A = story.accounts[id]; if (!A || !A.belie || !(s.doubts || {})[id] || (s.belied || {})[id]) return;
      var here = A.by === "hero" ? !!p.seul : [].concat(p.devant || []).indexOf(A.by) >= 0;
      var tp = story.passages[A.belie]; if (!here || !tp || !sceneOk(story, s, tp)) return;
      var q = interp(s, A.short || shortText(A.text));
      out.push({ sys: "belie", account: id, group: "doute", label: A.by === "hero" ? "Revenir sur ta propre version : « " + q + " »" : "Mettre en doute sa version : « " + q + " »" });
    });
    return out;
  }
  // Keeping silent (8.3): the choice `silence` counts, by person and in all (s.silences["*"]).
  function silenceNote(story, s, who) {
    s.silences = s.silences || {};
    [].concat(who === true ? [] : who).concat(["*"]).forEach(function (k) { s.silences[k] = (s.silences[k] || 0) + 1; });
    s.silentTurn = s.turn;
  }
  // Conscience (story.gestes: { id: { name, poids, echoes: ["…" | { text, if }] } }): fx.geste records what the hero did
  // and adds its weight (s.poids). Nothing is said then. Later, on a page where the hero is alone (`seul: true`), on
  // waking (`reveil: true`), or right after a silence, one line of it comes back, each line once, one at a time.
  var ECHO_GAP = 2;
  function gesteDo(story, s, id) {
    var G = (story.gestes || {})[id]; if (!G) throw new Error("geste inconnu " + id);
    s.gestes = s.gestes || {}; if (s.gestes[id]) return;
    s.gestes[id] = { turn: s.turn || 0, t: timeLabel(s) };
    s.poids = (s.poids || 0) + (G.poids == null ? 1 : G.poids);
  }
  function echoPick(story, s) {
    if (!story.gestes || !s.gestes || (s.echoTurn != null && s.turn - s.echoTurn < ECHO_GAP)) return null;
    s.echoed = s.echoed || {};
    var ids = Object.keys(s.gestes).filter(function (k) { return s.gestes[k].turn < s.turn; }).sort(function (a, b) { return s.gestes[a].turn - s.gestes[b].turn; });
    for (var i = 0; i < ids.length; i++) {
      var G = story.gestes[ids[i]] || {}, list = G.echoes || [], used = s.echoed[ids[i]] || 0;
      while (used < list.length) {
        var e = list[used]; used++;
        var ok = typeof e === "string" || (tagsOk(story, s, e, s.node) && evalCond(story, s, e.if));
        if (ok) { s.echoed[ids[i]] = used; s.echoTurn = s.turn; return interp(s, typeof e === "string" ? e : e.text); }
      }
      s.echoed[ids[i]] = used;
    }
    return null;
  }
  // Dread (story.dread: { name, start, max, trouble, sleep, mod: { from, per }, panic: { to, acts }, say: { trouble, calm } }):
  // fx.angoisse moves it from 0 to max. Past `trouble`, the page shows what dread shows (tag trouble) and loses what it
  // hides (tag calme); the clues then noted are marked; past mod.from, each point weighs on every roll. Waking
  // (`reveil: true`) eases it by `sleep`. At max, the next page is `panic.to`, once, until dread has come down again.
  var DREAD_MAX = 10, DREAD_TROUBLE = 6, DREAD_FROM = 5, DREAD_PER = -3;
  function dreadOf(s) { return s.angoisse || 0; }
  function dreadMax(story) { return ((story.dread || {}).max) || DREAD_MAX; }
  function dreadTrouble(story, s, n) { if (!story.dread) return false; return dreadOf(s) >= (typeof n === "number" ? n : story.dread.trouble || DREAD_TROUBLE); }
  function dreadMod(story, s) { var Md = story.dread.mod || {}, from = Md.from == null ? DREAD_FROM : Md.from, per = Md.per == null ? DREAD_PER : Md.per; return dreadOf(s) > from ? per * (dreadOf(s) - from) : 0; }
  var DREAD_SAY = { trouble: "Ton cœur cogne trop fort. Les choses autour de toi perdent leur netteté.", calm: "Ton souffle revient. Les choses reprennent leurs contours." };
  function dreadMove(story, s, d) {
    var D = story.dread; if (!D) throw new Error("angoisse sans story.dread");
    var a0 = dreadOf(s), t0 = dreadTrouble(story, s), a = Math.max(0, Math.min(dreadMax(story), a0 + d));
    if (a === a0) return;
    s.angoisse = a;
    if (a < dreadMax(story)) s.panicArmed = true;
    ev(s, interp(s, D.name || "Angoisse") + " " + (a > a0 ? "+" : "−") + Math.abs(a - a0) + " (" + a + "/" + dreadMax(story) + ")", (a > a0 ? "bad" : "good") + " dread conseq");
    var t1 = dreadTrouble(story, s), say = D.say || {};
    if (t1 && !t0) ev(s, interp(s, say.trouble || DREAD_SAY.trouble), "bad dread");
    if (t0 && !t1) ev(s, interp(s, say.calm || DREAD_SAY.calm), "good dread");
  }
  function dreadWord(story, s) {
    var D = story.dread || {}, a = dreadOf(s), lv = (D.levels || [{ min: 0, word: "Calme" }, { min: 3, word: "Inquiet{e}" }, { min: D.trouble || DREAD_TROUBLE, word: "Troublé{e}" }, { min: dreadMax(story), word: "Au bord de la panique" }]).filter(function (x) { return a >= x.min; });
    return interp(s, (lv[lv.length - 1] || {}).word || "");
  }
  function panicDue(story, s, p) {
    var D = story.dread; if (!D || !D.panic || !D.panic.to || p.end || p.souvenir || dreadOf(s) < dreadMax(story) || s.panicArmed === false) return false;
    if (D.panic.acts && D.panic.acts.indexOf(p.act || s.lastAct) < 0) return false;
    return !!story.passages[D.panic.to];
  }
  // Attachments (story.attachments: { <person>: { tendre } }): fx.attache moves a bond from 0 to ATTACH_MAX, in silence.
  // A paragraph, a choice or a scene marked `tendre: true` is affection the reader may mask (s.tendre = "masquer", set by
  // the app from the reader's settings); the author gives an `else` or another way.
  var ATTACH_MAX = 5;
  function attachOf(s, k) { return ((s.attache || {})[k]) || 0; }

  // ------------------------------------------------------------------ the current view
  var BUILTIN = {
    "@jeu": function (story, s) {
      var j = s.jeu, theirs = j.theirDice.map(function (d) { return FACES[d]; }).join(" ");
      var text = ["Une table collante, des chopes, une chandelle plantée dans une bouteille. Les règles tiennent en une phrase : on lance un dé tant qu'on veut, on additionne, et un " + FACES[TAVERN_SNUFF] + " souffle tout. On s'arrête quand on veut ; la plus haute chandelle prend les mises."];
      text.push(cap(j.adv) + " ouvre la partie : " + theirs + (j.them ? ", et s'arrête à **" + j.them + "**." : ". La chandelle s'éteint : rien pour " + j.adv + "."));
      var cs = [];
      if (!j.over) {
        text.push(j.myDice.length ? "Ta chandelle : **" + j.me + "**." : "À toi.");
        cs.push({ sys: "jeuRoll", group: "jeu", label: j.myDice.length ? "Relancer le dé" : "Lancer le dé" });
        if (j.myDice.length) cs.push({ sys: "jeuStop", group: "jeu", label: "T'arrêter à " + j.me });
      } else {
        text.push(j.over === "win" ? "Tu ramasses les pièces. En face, on hausse les épaules." : j.over === "tie" ? "Chacun reprend sa mise." : "Les pièces changent de côté sans un mot.");
        var full = tavernPlayed(s) >= TAVERN_GAMES_PER_DAY, t = tavernOf(story.passages[j.from]) || { mise: j.mise };
        cs.push({ sys: "jeuAgain", group: "jeu", label: "Rejouer · mise " + money(story, t.mise, true), if: full ? { not: true } : { gold: { min: t.mise } }, why: full ? "On ne joue plus avec toi aujourd'hui." : "Il te faut " + money(story, t.mise) + " pour miser." });
        cs.push({ sys: "jeuLeave", label: "Quitter la table" });
      }
      return { title: "La Chandelle", kind: "jeu", text: text, choices: cs };
    },
    // A deposit (9.6): what lies there for me, what I could leave; the page one came from waits behind.
    "@depot": function (story, s) {
      var w = s.depot, D = depotDef(story, w.id), back = story.passages[w.from] || {}, cs = [], text = [];
      if (w.mode === "take") {
        var ks = depotTakes(story, s, w.id);
        text.push(interp(s, ks.length ? (D.textTake || D.text || "Quelque chose t'attend ici.") : w.last ? "" : (D.empty || "Il n'y a rien.")));
        ks.forEach(function (k) { cs.push({ sys: "depotTake", depot: w.id, item: k, group: "depot", label: interp(s, D.take || "Prendre") + " : " + depotName(story, D, k) }); });
      } else {
        text.push(interp(s, D.textPut || D.text || "Que laisses-tu ici ?"));
        depotPuts(story, s, w.id).forEach(function (k) { cs.push({ sys: "depotPut", depot: w.id, item: k, group: "depot", label: interp(s, D.put || "Laisser") + " : " + depotName(story, D, k) }); });
      }
      if (w.last) text.push(w.last);
      cs.push({ sys: "depotClose", label: "Revenir : " + cap(interp(s, String(back.backName || back.title || "").replace(/\*/g, ""))) });
      return { title: interp(s, D.name || "Dépôt"), kind: "depot", text: text.filter(Boolean), choices: cs };
    },
    // Showing a witness something (7.9): the list of what one holds and has not shown this person yet.
    "@montrer": function (story, s) {
      var w = s.show, P = story.people[w.who] || {}, back = story.passages[w.from] || {};
      var cs = showable(story, s, w.who).map(function (x) { var r = (P.confront || {})[x.id]; return { sys: "show", id: x.id, label: x.label, group: "montrer", target: r || null }; });
      cs.push({ sys: "showNone", label: "Revenir : " + cap(interp(s, String(back.backName || back.title || "").replace(/\*/g, ""))) });
      return { title: "Montrer " + withPrep("à", P.name), kind: "montrer", text: [interp(s, P.showText || "Que mets-tu sous les yeux " + withPrep("de", P.name) + " ?")], choices: cs };
    },
    "@haussement": function (story, s) {
      var w = s.show, P = story.people[w.who] || {}, back = story.passages[w.from] || {};
      var cs = [];
      if (showable(story, s, w.who).length) cs.push({ sys: "montrer", who: w.who, from: w.from, label: "Lui montrer autre chose" });
      cs.push({ sys: "showNone", label: "Revenir : " + cap(interp(s, String(back.backName || back.title || "").replace(/\*/g, ""))) });
      return { title: P.name, kind: "montrer", text: [interp(s, w.line || (P.name + " regarde, et te rend la chose sans un mot. Cela ne lui dit rien, ou rien qu'on veuille te dire."))], choices: cs };
    },
    // The accusation, in three steps (7.9).
    "@accuse": function (story, s) {
      var a = s.acc, my = (story.mysteries || {})[a.m] || {}, T = my.accuseText || {}, back = story.passages[a.from] || {}, cs = [], text;
      if (a.step === "qui") {
        text = T.qui || "Qui accuses-tu ?";
        (my.suspects || []).filter(function (k) { return s.people[k]; }).forEach(function (k) { cs.push({ sys: "accuseWho", who: k, group: "accuse", label: story.people[k].name }); });
        cs.push({ sys: "accuseBack", label: "Revenir : " + cap(interp(s, String(back.backName || back.title || "").replace(/\*/g, ""))) });
      } else if (a.step === "mobile") {
        text = (T.mobile || "Pourquoi ?") ;
        Object.keys(my.motives || {}).forEach(function (k) { cs.push({ sys: "accuseWhy", motive: k, group: "accuse", label: interp(s, my.motives[k]) }); });
        cs.push({ sys: "accuseRedo", label: "Changer d'avis sur le coupable" });
      } else {
        text = T.preuve || "Quelle preuve donnes-tu ?";
        accuseProofs(story, s).forEach(function (x) { cs.push({ sys: "accuseProof", proof: x.id, group: "accuse", label: x.label }); });
        cs.push({ sys: "accuseProof", proof: null, group: "accuse", label: T.none || "Aucune : ta parole seule" });
        cs.push({ sys: "accuseRedo", label: "Changer d'avis sur le coupable" });
      }
      var said = [];
      if (a.qui) said.push("Tu as nommé " + story.people[a.qui].name + ".");
      if (a.mobile) said.push("Mobile : " + interp(s, (my.motives || {})[a.mobile]) + ".");
      return { title: my.accuseTitle || "L'accusation", kind: "accuse", text: (said.length ? [said.join(" ")] : []).concat([interp(s, text)]), choices: cs };
    },
    // A council votes (8.0): each member present, in order, then the hero; the votes are counted.
    "@conseil": function (story, s) {
      var v = s.vote, D = motionDef(story, v.m), C = (story.councils || {})[D.council] || {}, text = [interp(s, D.text)], cs = [], rows = [];
      var sayOf = function (k, vote) { var x = ((D.say || {})[k] || {})[vote]; return x ? " « " + interp(s, x) + " »" : ""; };
      memberIds(story, D.council).forEach(function (k) {
        var pe = (story.people || {})[k] || {}, nm = pe.name || k;
        if (!v.by[k]) { rows.push({ id: k, name: nm, vote: null }); text.push("*" + nm + " : absent" + (pe.f ? "e" : "") + ".*"); return; }
        rows.push({ id: k, name: nm, vote: v.by[k] });
        text.push("**" + nm + "** : " + VOTES[v.by[k]].toLowerCase() + "." + sayOf(k, v.by[k]));
      });
      var n = voteCount(v.by);
      if (C.hero && !v.hero) {
        text.push("Reste ta voix. Pour : " + n.pour + " · Contre : " + n.contre + (n.abstention ? " · Abstention : " + n.abstention : "") + ".");
        cs.push({ sys: "councilVote", vote: "pour", group: "conseil", label: "Voter pour" });
        cs.push({ sys: "councilVote", vote: "contre", group: "conseil", label: "Voter contre" });
        cs.push({ sys: "councilVote", vote: "abstention", group: "conseil", label: "T'abstenir" });
      } else {
        var by = Object.assign({}, v.by); if (v.hero) { by.hero = v.hero; rows.push({ id: "hero", name: "Toi", vote: v.hero }); text.push("**Toi** : " + VOTES[v.hero].toLowerCase() + "." + (((D.heroSay || {})[v.hero]) ? " « " + interp(s, D.heroSay[v.hero]) + " »" : "")); }
        var res = voteResult(story, v.m, by), n2 = voteCount(by);
        text.push("La motion est **" + (res === "adopte" ? "adoptée" : "rejetée") + "** : " + n2.pour + " voix pour, " + n2.contre + " contre" + (n2.abstention ? ", " + n2.abstention + " abstention" + (n2.abstention > 1 ? "s" : "") : "") + (n2.pour === n2.contre ? ". L'égalité vaut " + (res === "adopte" ? "adoption" : "refus") : "") + ".");
        cs.push({ sys: "councilEnd", group: "conseil", label: "Continuer" });
      }
      return { title: interp(s, C.title || "Le Conseil") + " · " + interp(s, D.title), kind: "conseil", text: text, choices: cs, council: { motion: v.m, rows: rows } };
    },
    "@bataille": function (story, s) { return battleView(story, s); },
    "@duel": function (story, s) { return duelView(story, s); },
    "@enigme": function (story, s) { return puzzleView(story, s); },
    "@road": function (story, s) {
      var t = s.travel, region = (W(story).regions || {})[t.region] || {}, r = routeById(story, t.route);
      var q = (region.quiet && region.quiet.length) ? region.quiet[(t.step + s.turn) % region.quiet.length] : "La route se déroule sans histoire. Les heures passent au pas, et tu gardes l'œil ouvert.";
      return { title: (r && r.name) || "Sur la route", kind: "road", text: [interp(s, q)],
        choices: [{ sys: "advance", label: t.step >= t.total ? "Continuer jusqu'à " + W(story).places[t.to].name : "Continuer la route" }] };
    },
    "@camp": function (story, s) {
      var t = s.travel, region = (W(story).regions || {})[t.region] || {};
      var txt = (region.camp && region.camp.length) ? region.camp[(day(s) + t.step) % region.camp.length] : "La nuit tombe. Vous dressez le camp à l'abri d'un repli de terrain, et le feu claque doucement.";
      var cs = [], b = dueBanter(story, s, null);
      if (b) cs.push({ sys: "banter", passage: b, label: "Rester un moment près du feu avec les autres" });
      cs.push({ sys: "camp", label: s.food > 0 ? "Manger, monter la garde à tour de rôle et dormir" : "Dormir le ventre vide" });
      return { title: "Bivouac · " + timeLabel(s), kind: "camp", text: [interp(s, txt)].concat(s.food > 0 ? [] : ["Il ne te reste rien à manger."]), choices: cs };
    },
    "@combat": function (story, s) {
      var c = s.combat;
      return { title: c.title, kind: "combat", text: c.round === 0 ? [c.intro || "Le combat s'engage."] : [], choices: combatChoices(story, s) };
    },
  };
  // ------------------------------------------------------------------ two players apart (9.6): deposits, chronicles
  // Deposits (story.depots: { <id>: { name, from, to, flat, ages, gold, rate, goldMax, put, take, labelPut, labelTake,
  // text, empty } }, passage tag `depot: "<id>"` or { put: [...], take: [...] }). One player leaves a thing of his bag
  // (or some gold) in a place; the other finds it there once the players have met again (the world flag
  // monde:depot:<id>:<item>, carried by src/multi.js at the next rendezvous). `from` / `to`: who may leave, who may
  // take. `flat`: only items marked flat fit (between the pages of a notebook). `ages`: a thing taken has waited (an
  // item's `aged` is what it has become, `rots` that nothing is left). Why: Clément's children asked for a long story
  // for two (16/11); in « Le Douzième Coup » one hero lives sixty years before the other and buries things for him.
  var DEPOT_FLAG = "monde:depot:", DEPOT_TAKEN = "depot-pris:", DEPOT_GOLD = "or:", DEPOT_GOLD_MAX = 5;
  function depotDef(story, id) { var D = (story.depots || {})[id]; if (!D) throw new Error("dépôt inconnu " + id); return D; }
  function depotTag(p) { var T = p && p.depot; if (!T) return null; if (typeof T === "string" || Array.isArray(T)) T = { put: T, take: T }; return { put: [].concat(T.put || []), take: [].concat(T.take || []) }; }
  function depotFits(story, D, it) { var I = (story.items || {})[it]; return !!I && !I.nodepot && (!D.flat || !!I.flat); }
  // Intent: depotHeld(State, DepotId) -> [Key] = what lies there for this player and is not taken yet
  function depotHeld(s, id) {
    var pre = DEPOT_FLAG + id + ":";
    return Object.keys(s.flags).filter(function (f) { return f.indexOf(pre) === 0 && !s.flags[DEPOT_TAKEN + id + ":" + f.slice(pre.length)]; }).map(function (f) { return f.slice(pre.length); });
  }
  function depotGoldN(s, id) { var pre = DEPOT_FLAG + id + ":" + DEPOT_GOLD; return Object.keys(s.flags).filter(function (f) { return f.indexOf(pre) === 0; }).length; }
  // Intent: depotPuts(Story, State, DepotId) -> [Key] = what this player could leave there now
  function depotPuts(story, s, id) {
    var D = depotDef(story, id), out = [], seen = {};
    if (!evalCond(story, s, D.from)) return out;
    s.items.forEach(function (it) { if (seen[it] || !depotFits(story, D, it) || s.flags[DEPOT_FLAG + id + ":" + it]) return; seen[it] = 1; out.push(it); });
    if (D.gold && s.gold >= D.gold && depotGoldN(s, id) < (D.goldMax || DEPOT_GOLD_MAX)) out.push(DEPOT_GOLD + (depotGoldN(s, id) + 1));
    return out;
  }
  function depotTakes(story, s, id) { var D = depotDef(story, id); return evalCond(story, s, D.to) ? depotHeld(s, id) : []; }
  function depotName(story, D, k) { return k.indexOf(DEPOT_GOLD) === 0 ? money(story, D.gold || 0) : item(story, k).name; }
  // The page offers one way in for each side that has something to do there; the list opens on a page of its own.
  function depotChoices(story, s, p) {
    var T = depotTag(p); if (!T || !story.depots || s.combat) return [];
    var out = [];
    T.take.forEach(function (id) { var D = depotDef(story, id); if (!evalCond(story, s, D.to)) return; out.push({ label: interp(s, D.labelTake || "Regarder ce qu'on t'a laissé"), sys: "depotOpen", depot: id, mode: "take", group: "depot" }); });
    T.put.forEach(function (id) { var D = depotDef(story, id); if (!evalCond(story, s, D.from) || !depotPuts(story, s, id).length) return; out.push({ label: interp(s, D.labelPut || "Laisser quelque chose"), sys: "depotOpen", depot: id, mode: "put", group: "depot" }); });
    return out;
  }
  function depotPut(story, s, id, k) {
    var D = depotDef(story, id); if (depotPuts(story, s, id).indexOf(k) < 0) throw new Error("dépôt : « " + k + " » ne peut pas être laissé ici");
    if (k.indexOf(DEPOT_GOLD) === 0) { s.gold -= D.gold; ev(s, "−" + money(story, D.gold) + " · bourse : " + money(story, s.gold)); }
    else { s.items.splice(s.items.indexOf(k), 1); ev(s, "Tu n'as plus : " + item(story, k).name); }
    s.flags[DEPOT_FLAG + id + ":" + k] = true;
    s.depot.last = interp(s, D.putSay || "C'est fait. {autre} le trouvera, si rien ne s'y oppose d'ici là.");
  }
  function depotTake(story, s, id, k) {
    var D = depotDef(story, id); if (depotTakes(story, s, id).indexOf(k) < 0) throw new Error("dépôt : rien de tel ici (" + k + ")");
    s.flags[DEPOT_TAKEN + id + ":" + k] = true;
    if (k.indexOf(DEPOT_GOLD) === 0) { var g = Math.round((D.gold || 0) * (D.rate || 1)); s.gold += g; ev(s, "+" + money(story, g) + " · bourse : " + money(story, s.gold), "good"); s.depot.last = interp(s, D.goldSay || ""); return; }
    var I = item(story, k), got = D.ages ? (I.rots ? null : (I.aged || k)) : k;
    if (!got) { s.depot.last = interp(s, I.rotSay || "De ceci, il ne reste rien qu'on puisse nommer : " + I.name + "."); return; }
    apply(story, s, { item: got });
    s.depot.last = got !== k ? interp(s, I.agedSay || "Le temps a passé dessus : " + I.name + " est devenu " + item(story, got).name + ".") : "";
  }
  // Chronicles (story.chroniques: { <id>: { title, tab, for, intro, say, lines: [{ id, head, v: [{ if, text }] }] } }).
  // A book the hero reads that says something else when the world has changed: each line shows its first variant
  // whose condition holds (a last one without condition is the line by default; none holding, the line is absent).
  // The engine keeps what the reader last saw (s.chron) and tells every line that appears or changes, once.
  function chroniqueLines(story, s, id) {
    var C = (story.chroniques || {})[id]; if (!C || !evalCond(story, s, C.for)) return null;
    var out = [];
    (C.lines || []).forEach(function (L) {
      var vs = L.v || [{ text: L.text, if: L.if }];
      for (var i = 0; i < vs.length; i++) if (evalCond(story, s, vs[i].if)) { out.push({ id: L.id, head: L.head ? interp(s, L.head) : "", text: interp(s, vs[i].text), n: i }); return; }
    });
    return out;
  }
  // Intent: chroniquesOf(Story, State) -> [{ id, title, intro, lines }] = the notebook's tab
  function chroniquesOf(story, s) {
    return Object.keys(story.chroniques || {}).map(function (id) { var ls = chroniqueLines(story, s, id), C = story.chroniques[id]; return ls ? { id: id, title: interp(s, C.title || "Chronique"), intro: interp(s, C.intro || ""), lines: ls } : null; }).filter(Boolean);
  }
  function chroniqueNews(story, s) {
    if (!story.chroniques) return;
    Object.keys(story.chroniques).forEach(function (id) {
      var ls = chroniqueLines(story, s, id); if (!ls) return;
      s.chron = s.chron || {};
      var was = s.chron[id], now = {}, C = story.chroniques[id];
      ls.forEach(function (l) { now[l.id] = l.n; });
      // The first reading is silent: the book says what it has always said.
      if (was) ls.forEach(function (l) {
        if (was[l.id] === l.n) return;
        ev(s, interp(s, was[l.id] == null ? (C.sayNew || C.title + " · une ligne de plus") : (C.say || C.title + " ne dit plus la même chose")) + " : " + l.text, "chron");
      });
      s.chron[id] = now;
    });
  }
  function routeById(story, id) { return (W(story).routes || []).filter(function (x) { return x.id === id; })[0]; }
  // Intent: compute(Story, State) -> View
  // Why: one place that says what the reader sees now (a written passage, the road, the camp, a fight) and every
  // choice with whether it is allowed and why not, so the page and the validator play the same game.
  function ownChoices(story, s, p) {
    var here = s.node && story.passages[s.node] === p ? s.node : null;
    return (p.choices || []).filter(function (c) {
      if (hiddenChoice(story, s, c) || (c.who && !present(s, c.who))) return false;
      if (c.back === true && (!s.hubLast || s.hubLast === here)) return false;
      // A refusal is offered only while there is a quest here to refuse (not once it is done, refused or never opened).
      if (c.refuse === true && here && !questOfRefusal(story, s, c)) return false;
      // On a choice, `via` is what the choice gives to the page it leads to, not a condition: it is read there.
      if (!tagsOk(story, s, c.via != null ? Object.assign({}, c, { via: null }) : c, here)) return false;
      if (c.once && here && (s.once || {})["c|" + here + "|" + interp(s, c.label)]) return false;
      // A scene is only offered when its cast and its hour are there (the tags of the passages it leads to).
      var ts = [];
      (function add(to) { if (Array.isArray(to)) to.forEach(function (x) { add(x.to); }); else if (to != null) ts.push(to); })([{ to: c.to }, { to: c.win && c.win.to }, { to: c.lose && c.lose.to }]);
      var scenes = ts.map(function (t) { return story.passages[t]; });
      // The cast is read as it will be once the choice is made: a companion the choice makes join counts. A leave does
      // not: the one sent away is still there for the scene of the parting (« Va-t'en » → the scene where they go).
      var fxs = [c.fx, c.win && c.win.fx, c.lose && c.lose.fx].filter(Boolean), sc = s;
      if (fxs.some(function (f) { return f.join; })) {
        sc = Object.assign({}, s, { met: Object.assign({}, s.met) });
        fxs.forEach(function (f) { [].concat(f.join || []).forEach(function (k) { sc.met[k] = "party"; }); });
      }
      if (scenes.length && scenes.every(function (tp) { return tp && !sceneOk(story, sc, tp); })) return false;
      return true;
    });
  }
  // Intent: find(Story, State, Passage) -> Choice | null = the way back to the place's own passage
  // Why: a passage that only tells what one thing did (take the rope) left the reader with the roads alone, though
  // the room still had things to do (Clément, 11/11). A passage marked `leave: true` is a departure and offers none.
  function backChoice(story, s, p) {
    if (!p.place || p.end || p.combat || p.leave || s.travel) return null;
    var pl = W(story).places[p.place]; if (!pl) return null;
    var home = (pl.arriveIf || []).filter(function (a) { return evalCond(story, s, a.if); }).map(function (a) { return a.passage; })[0] || pl.arrive;
    var hp = home && story.passages[home];
    if (!hp || home === s.node || !ownChoices(story, s, hp).length) return null;
    return { to: home, label: "Revenir : " + interp(s, hp.title || pl.name) };
  }
  // Intent: nudgeOf(Story, State) -> { text, choices: [label] } = the « coup de pouce » for young readers (an option,
  // Clément, 12/11): the passage's own `nudge` when its author wrote one; else the choices toward pages not read yet;
  // else, in a fight, the class's techniques; else the notebook. It orients, it never tells what happens.
  function nudgeOf(story, s) {
    var v = view(story, s), p = v.passage;
    if (p && p.nudge) return { text: interp(s, p.nudge), choices: [] };
    if (v.kind === "combat") return { text: "Regarde bien les techniques de ta classe et tes compagnons : un ordre ou une ruse peut changer le combat. Fuir ou parlementer n'est pas toujours une défaite.", choices: [] };
    var open = v.choices.filter(function (c) { return c.ok !== false && !c.sys; });
    var fresh = open.filter(function (c) { return c.to && story.passages[c.to] && !s.seen[c.to]; }).map(function (c) { return c.label; });
    if (fresh.length && fresh.length < open.length) return { text: "Les choix marqués ✦ mènent vers des pages que tu n'as pas encore lues.", choices: fresh };
    if (fresh.length) return { text: "Tout ce qui est proposé ici est encore à découvrir : choisis selon ton héros, il n'y a pas de mauvaise porte.", choices: [] };
    return { text: "Tu as déjà lu tout ce qui part d'ici. Ouvre ton carnet : une quête, un indice ou une personne rencontrée t'attend peut-être ailleurs.", choices: [] };
  }
  function view(story, s) {
    // A saved game reopened gets a story freshly read, never prepared by freshState: the engine prepares it here too.
    prepare(story);
    lensNews(story, s);
    chroniqueNews(story, s);
    var v, p = null;
    if (BUILTIN[s.node]) v = BUILTIN[s.node](story, s);
    else {
      p = story.passages[s.node];
      var cs = peopleChoices(story, s, p).concat(ownChoices(story, s, p));
      // A remembrance (8.3) that ends with back: true goes back to the present, to the page it opened from.
      if (p.back && p.souvenir && s.present && story.passages[s.present.node]) cs = cs.concat([{ to: s.present.node, label: "Revenir au présent", auto: "back" }]);
      // An interlude (8.4) goes back to the hero, on the page it stood before.
      else if (p.back && p.interlude && s.present && story.passages[s.present.node]) cs = cs.concat([{ to: s.present.node, label: "Revenir à " + heroName(s), auto: "back" }]);
      // back: true, the scene ends on the way back to the crossroads the reader came from, its label written by the engine.
      else if (p.back && s.hubLast && s.hubLast !== s.node && story.passages[s.hubLast]) {
        var hp = story.passages[s.hubLast];
        cs = cs.concat([{ to: s.hubLast, label: "Revenir : " + interp(s, hp.title || (W(story).places[hp.place] || {}).name || "…"), auto: "back" }]);
      }
      if (!cs.length) { var back = backChoice(story, s, p); if (back) cs = [back]; }
      cs = cs.concat(councilChoices(story, s, p), battleChoices(story, s, p), montrerChoices(story, s, p), accuseChoices(story, s, p), repayChoices(story, s, p), shopChoices(story, s, p), tavernChoices(story, s, p), craftChoices(story, s, p), vigilChoices(story, s, p), duelChoices(story, s, p), puzzleChoices(story, s, p), belieChoices(story, s, p), aparteChoices(story, s, p), depotChoices(story, s, p), travelChoices(story, s, p), leadChoices(story, s, p), cardChoices(story, s, p));
      var sec = [];
      v = { title: interp(s, p.title || ""), kind: p.end ? "end" : "passage", text: textList(story, s, p.text, null, sec), choices: cs, passage: p };
      // The people here at this hour, then the rumour heard on coming in (7.9).
      v.text = v.text.concat(peopleLines(story, s, p), shopSays(story, s, p));
      // The epilogue (8.0): on an ending marked `epilogue`, what came of the hero's choices, told without judging.
      if (p.epilogue && p.end) {
        var epi = (story.epilogue || []).filter(function (e) { return tagsOk(story, s, e, s.node) && evalCond(story, s, e.if); }).map(function (e) { return interp(s, e.text); });
        // Composed endings (8.8): after the epilogue, what became of each one the story follows, one fate each.
        var fts = fatesOf(story, s).filter(function (f) { return f.text; }).map(function (f) { return interp(s, f.text); });
        epi = epi.concat(fts);
        if (epi.length) { v.epilogue = epi; v.text = v.text.concat(["**" + (story.epilogueTitle || "Ce qu'il advint") + "**"], epi); }
      }
      if (s.rumorNow && s.rumorNow.node === s.node && s.rumorNow.turn === s.turn) { var rr = rumorById(story, s.rumorNow.id); if (rr) v.text.push(interp(s, rr.text)); }
      // A closed room (8.3): what the hero did comes back (one line, in italics); a remembrance says when it was;
      // dread past its threshold troubles the page.
      if (s.echoNow && s.echoNow.node === s.node && s.echoNow.turn === s.turn) v.text.push("*" + s.echoNow.text + "*");
      if (p.souvenir) v.souvenir = interp(s, p.souvenir === true ? "Souvenir" : p.souvenir);
      if (p.interlude) v.interlude = interludeOf(story, s, p);
      if (p.halte) { var hv = handView(story, s, p); if (hv) v.hand = hv; }
      if (story.dread) { v.dread = { v: dreadOf(s), max: dreadMax(story), word: dreadWord(story, s) }; if (dreadTrouble(story, s) && !p.souvenir && !p.interlude) v.trouble = true; }
      // A scene that spends the night tells it at its end; one that waits for the evening, at its start.
      if (s.took && s.took.node === s.node && s.took.turn === s.turn) { v.text[s.took.end ? "push" : "unshift"]("*(" + s.took.say + ")*"); if (!s.took.end) sec = sec.map(function (i) { return i + 1; }); }
      // The paragraphs of a second reading: the page may mark them, lightly.
      if (sec.length) v.second = sec;
      // Back on a page already read whose author wrote no return text (first / again / once): the page folds, the
      // reader goes straight to the choices and may unfold it (Clément's rule, 12/11: no long text replayed).
      else if ((s.seen[s.node] || 0) > 1 && !p.end && !(p.text || []).some(function (x) { return x && typeof x === "object" && (x.first || x.again || x.once); })) v.reread = true;
      // Guarantee: a page is never blank. The place's own description, or the title, stands in.
      if (!v.text.join("").replace(/\s/g, "")) {
        var plHere = W(story).places[p.place || s.place] || {};
        v.text = [interp(s, plHere.desc || p.title || plHere.name || "…")]; guard(s, "texte vide");
      }
    }
    v.choices = v.choices.map(function (c) {
      // The way the hero speaks (8.3): a choice may carry other words when a condition holds (labels: [{ if, label }]).
      if (c.labels) { var lb = c.labels.filter(function (x) { return tagsOk(story, s, x, s.node) && evalCond(story, s, x.if); })[0]; if (lb) c = Object.assign({}, c, { label: lb.label, onceKey: c.label }); }
      if (c.back === true && !c.label) { var hb = story.passages[s.hubLast] || {}; c = Object.assign({}, c, { label: "Revenir : " + cap(interp(s, String(hb.backName || hb.title || "").replace(/\*/g, ""))), autoBack: true }); }
      // Guarantee: every button has words. One left without (a scenario fault) says where it goes.
      if (typeof c.label !== "string" || !c.label) {
        var lt = typeof c.to === "string" && story.passages[c.to];
        c = Object.assign({}, c, { label: lt ? cap(interp(s, String(lt.backName || lt.title || "Continuer").replace(/\*/g, ""))) : "Continuer" });
        guard(s, "un choix sans texte de bouton");
      }
      // Guarantee: a button agrees with the hero too ({e}, {hero}), like the text.
      if (/\{[a-z]+\}/.test(c.label)) c = Object.assign({}, c, { label: interp(s, c.label) });
      var a = allowed(story, s, p, c); return Object.assign({}, c, { ok: a.ok, why: a.why, unveiled: a.ok && unveils(c), goes: backGoes(story, s, c) || goesTo(story, s, p, c), note: c.refuse ? "refus définitif" : c.fx && c.fx.camp && c.fx.camp !== s.camp ? "choix de camp : d'autres portes se fermeront" : aheadOf(story, s, c) || c.note, chance: c.test ? chance(story, s, c.test, c.who) : null }); });
    // Paths that unveil (8.9): a way closed until another game opens it is not shown by its words, which would tell
    // too much; the page only counts the closed ways (v.locked). The people of a `leads` page keep their hint.
    var lockedN = 0;
    v.choices = v.choices.filter(function (c) { if (!c.ok && !c.leadPick && unveilsIf(c.if)) { lockedN++; return false; } return true; });
    if (lockedN) v.locked = lockedN;
    if (p) {
      // Guarantee: no twin buttons. Of several choices with the same words, the one that can be taken stays.
      var byLabel = {};
      v.choices.forEach(function (c) { if (!c.sys) (byLabel[c.label] = byLabel[c.label] || []).push(c); });
      Object.keys(byLabel).forEach(function (l) {
        var tw = byLabel[l]; if (tw.length < 2) return;
        // Companions offering the same words (« Laisse-moi faire ») are told apart by their names: these are not twins.
        var whos = tw.map(function (c) { return c.who || ""; });
        if (whos.every(function (w, i) { return w && whos.indexOf(w) === i; })) {
          v.choices = v.choices.map(function (c) { return tw.indexOf(c) < 0 ? c : Object.assign({}, c, { label: nameOf(story, c.who) + " : " + c.label }); });
          return;
        }
        var keep = tw.filter(function (c) { return c.ok; })[0] || tw[0];
        if (tw.filter(function (c) { return c.ok; }).length > 1) guard(s, "deux choix possibles portent le même texte « " + l.slice(0, 40) + " »");
        v.choices = v.choices.filter(function (c) { return tw.indexOf(c) < 0 || c === keep; });
      });
      // Guarantee: no dead end. When nothing can be taken, the first choice opens rather than leaving the reader stuck.
      // In « tout jouer », an act's exit waits for the other quests: a passage that only leads out sends the reader back
      // to the last crossroads, where they are, instead of opening the exit.
      // Both stay offered: the exit too, opened, so that a quest left out of reach never locks the reader in a loop.
      if (!story.multi && s.toutJouer && v.kind !== "end" && v.choices.length && !v.choices.some(function (c) { return c.ok && !c.restart; })
        && v.choices.some(function (c) { return c.exit; }) && s.hubLast && s.hubLast !== s.node && story.passages[s.hubLast]) {
        var hb2 = story.passages[s.hubLast];
        v.choices.forEach(function (c) { if (c.exit) { c.ok = true; c.note = c.why; c.why = ""; } });
        v.choices.push({ label: "Revenir : " + cap(interp(s, String(hb2.backName || hb2.title || "").replace(/\*/g, ""))), to: s.hubLast, back: s.hubLast, autoBack: true, ok: true, why: "" });
      }
      if (!story.multi && v.kind !== "end" && v.choices.length && !v.choices.some(function (c) { return c.ok && !c.restart; })) {
        var open = v.choices.filter(function (c) { return !c.sys && !c.restart; })[0];
        if (open) { open.ok = true; open.why = ""; open.forced = true; guard(s, "aucun choix possible, le premier est ouvert d'office"); }
      }
      // A pressing scene (tag `urgent`, Clément 13/11): seconds to choose, on the first reading only. When time runs
      // out, the choice marked `timeout: true` is taken; without one, the engine takes the last one open and says so.
      if (p.urgent && v.kind !== "end" && (s.seen[s.node] || 0) <= 1 && !story.multi) {
        var own = v.choices.filter(function (c) { return c.ok && !c.sys && !c.restart; });
        var dflt = own.filter(function (c) { return c.timeout; })[0];
        if (!dflt && own.length) { dflt = own[own.length - 1]; guard(s, "urgent sans choix marqué timeout, le dernier est pris"); }
        if (dflt) v.urgent = { sec: Math.max(URGENT_MIN, Math.min(URGENT_MAX, +p.urgent || URGENT_MIN)), label: dflt.label };
      }
    }
    // Words with effects (8.6): the page draws v.marked; everything that reads (voice, search, the tale, the
    // validator) gets v.text without the marks. The hero's state may colour the page too (v.mood).
    v.marked = v.text; v.text = v.text.map(function (t) { return unveil(plainOf(story, s, t)); }); // hidden words (9.1): as shown, without their marks
    var md0 = moodOf(story, s); if (md0) v.mood = md0;
    return v;
  }

  // ------------------------------------------------------------------ words with effects (8.6)
  // Intent: marks in a paragraph, {{kind:arg|text}} or {{kind:text}}, that the page draws and the engine checks. Why:
  // Clément, 15/11 — words that tremble or shimmer « à la Slay the Spire », rule words one taps to read their effect,
  // letters hidden in the text for the reader to find, writing in a mirror, ink that only an object shows.
  //   {{fx:<effet>|texte}}   an effect on the words (TEXT_FX)
  //   {{cle:<id>|mot}} or {{cle:mot}}   a rule word (KEYWORDS or story.keywords): a tap tells what it does in play
  //   {{or:<id>|texte}}      a hidden find (story.trouvailles): nothing shows it; a tap finds it
  //   {{envers:texte}}       written in a mirror; a tap turns it round
  //   {{encre:<item>|texte}} invisible ink: shown only while the hero carries the item
  //   {{tache:texte}}        a blot: unreadable, and read by nobody
  //   {{gens:<id>|texte}}    these words name that person (people or companions); {{gens:aucun|texte}}: they name nobody
  var TEXT_FX = { tremble: "tremble", ondule: "ondule", irise: "irisé", chuchote: "chuchoté", efface: "s'efface", rature: "raturé", ecrit: "s'écrit lettre à lettre", lueur: "luit" };
  var MARK_RE = /\{\{(fx|cle|or|envers|encre|tache|gens):([^{}|]*)(?:\|([^{}]*))?\}\}/g;
  var MARK_KINDS = { fx: 1, cle: 1, or: 1, envers: 1, encre: 1, tache: 1, gens: 1 };
  function plainOf(story, s, t) {
    return String(t).replace(MARK_RE, function (all, k, a, b) {
      if (k === "tache") return "";
      if (k === "encre") return s && (s.items || []).indexOf(a) >= 0 ? (b || "") : "";
      if (k === "envers" || (k === "cle" && b == null)) return a;
      return b == null ? a : b;
    }).replace(/ {2,}/g, " ").replace(/ ([,.;:!?»])/g, function (m, c) { return c === "»" || c === ":" || c === ";" || c === "!" || c === "?" ? m : c; });
  }
  // Intent: personOf(story, id) -> the person (people, else companions) or null
  // Where and when the hero first met someone (people or companions), for the card of who is who.
  function metAt(s, id) { s.metAt = s.metAt || {}; if (!s.metAt[id]) s.metAt[id] = { day: day(s), place: s.place || null }; }
  function personOf(story, id) { return (story.people || {})[id] || (story.companions || {})[id] || null; }
  // Intent: aspectOf(story, s, id) -> { allure, visage, habits, signe, voix } = how the person looks now: what the story
  // declares, then what the passages changed (fx.aspect). With no visage declared, one is read from the face.
  function aspectOf(story, s, id) {
    var p = personOf(story, id); if (!p) return {};
    var a = Object.assign({}, p.aspect || {}, ((s && s.aspect) || {})[id] || {});
    if (!a.visage && p.face) { var v = faceWords(p.face, p.f); if (v) a.visage = v; }
    Object.keys(a).forEach(function (k) { if (!ASPECT_KEYS[k] || !a[k]) delete a[k]; });
    return a;
  }
  // Intent: quiOf(story, s, id) -> one sentence: who the person is to the hero now (fx.qui, else qui, else role, else desc)
  function quiOf(story, s, id) {
    var p = personOf(story, id); if (!p) return "";
    var t = ((s && s.qui) || {})[id] || p.qui || p.role || p.desc || "";
    return s ? interp(s, t) : t;
  }
  // Intent: nameForms(story) -> [[form, id]] = the words that name each person in a text, longest first: the aka the
  // story gives, else the name and its capitalised words (titles and articles left out).
  var NAME_SKIP = { Le: 1, La: 1, Les: 1, "L'": 1, De: 1, Du: 1, Des: 1, Vieux: 1, Vieille: 1, Petit: 1, Petite: 1, Grand: 1, Mère: 1, Père: 1, Frère: 1, "Sœur": 1, Dame: 1, Sire: 1, Messire: 1, Maître: 1, Maîtresse: 1, Capitaine: 1, Professeur: 1, Docteur: 1, Monsieur: 1, Madame: 1, Lord: 1, Lady: 1, Sir: 1, Ser: 1, Messire: 1, Comte: 1, Comtesse: 1, Princesse: 1, Prince: 1, Amiral: 1, Sergente: 1, Sergent: 1, Recteur: 1, Dom: 1, Messer: 1, Mr: 1, Mrs: 1 };
  function nameForms(story) {
    if (story && story._nameForms) return story._nameForms;
    var out = [], seen = {};
    // two people named alike: the word names nobody, unless they are the same person under two ids (same name)
    var who = {}, nameOf = function (id) { var p = (story.people || {})[id] || (story.companions || {})[id]; return p ? String(p.name).split(",")[0].trim() : id; };
    var add = function (f, id) { f = String(f || "").trim(); if (f.length < 2) return; if (seen[f] && seen[f] !== id) { if (seen[f] !== "?" && who[f] === nameOf(id)) return; seen[f] = "?"; return; } seen[f] = id; who[f] = nameOf(id); };
    [["people", story.people || {}], ["companions", story.companions || {}]].forEach(function (g) {
      Object.keys(g[1]).forEach(function (id) {
        var p = g[1][id];
        if (p.aka) [].concat(p.aka).forEach(function (f) { add(f, id); });
        var n = String(p.name || "").split(",")[0].trim(); add(n, id);
        // the words of the name up to a particle (« de Brenne » is often a place, not the person)
        if (!p.aka) { var stop = false; n.split(/\s+/).forEach(function (w) { if (stop || /^(de|du|des|d['’].*)$/.test(w)) { stop = true; return; } w = w.replace(/^[Ll]['’]/, ""); if (/^[A-ZÀ-ÖØ-Þ]/.test(w) && !NAME_SKIP[w] && w.length > 2) add(w, id); }); }
      });
    });
    Object.keys(seen).forEach(function (f) { if (seen[f] !== "?") out.push([f, seen[f]]); });
    out.sort(function (a, b) { return b[0].length - a[0].length; });
    if (story) try { Object.defineProperty(story, "_nameForms", { value: out, enumerable: false, configurable: true }); } catch (e) {}
    return out;
  }
  // A face said in words (when the story wrote no visage): hair and how it is worn, beard, marks.
  var HAIR_ADJ = { noir: ["noirs", "noires", "noir"], brun: ["bruns", "brunes", "brun"], chatain: ["châtains", "châtain", "châtain"], noisette: ["noisette", "noisette", "noisette"], roux: ["roux", "rousses", "roux"], cuivre: ["cuivrés", "cuivrées", "cuivré"], blond: ["blonds", "blondes", "blond"], platine: ["platine", "platine", "platine"], gris: ["gris", "grises", "gris"], blanc: ["blancs", "blanches", "blanc"], acajou: ["acajou", "acajou", "acajou"] };
  var COIF_WORDS = { court: "cheveux % courts", milong: "cheveux % mi-longs", long: "longs cheveux %", boucles: "cheveux % bouclés", crepus: "cheveux % crépus", tresses: "tresses @", locks: "locks @", chignon: "chignon $", degarni: "crâne dégarni", couronne: "cheveux % en couronne", rase: "crâne rasé", foulard: "foulard", turban: "turban", capuche: "capuche" };
  var BEARD_WORDS = { moustache: "moustache", barbe: "barbe", longue: "longue barbe" };
  var MARK_WORDS = { rousseur: "taches de rousseur", vitiligo: "vitiligo", tache: "tache de naissance", cicatrice: "cicatrice", balafre: "balafre", brulure: "brûlure", bandeau: "bandeau sur l'œil", oeil_voile: "un œil voilé", aveugle: "aveugle", vairons: "yeux vairons", lunettes: "lunettes", appareil: "appareil auditif", tatouage: "tatouage" };
  function faceWords(f, fem) {
    var bits = [], c = HAIR_ADJ[f.hair];
    if (f.coif && COIF_WORDS[f.coif]) bits.push(COIF_WORDS[f.coif].replace("%", c ? c[0] : "").replace("@", c ? c[1] : "").replace("$", c ? c[2] : "").replace(/ {2,}/g, " ").trim());
    else if (c) bits.push("cheveux " + c[0]);
    if (f.beard && BEARD_WORDS[f.beard]) bits.push(BEARD_WORDS[f.beard]);
    (f.marks || []).forEach(function (m) { if (MARK_WORDS[m]) bits.push(MARK_WORDS[m]); });
    return bits.slice(0, 3).join(", ");
  }
  // Intent: marksOf(text) -> [{ kind, arg, text, raw }] = the marks of a paragraph, for the page and the validator
  function marksOf(t) {
    var out = [], m; MARK_RE.lastIndex = 0;
    while ((m = MARK_RE.exec(String(t)))) out.push({ kind: m[1], arg: m[2], text: m[3], raw: m[0] });
    return out;
  }
  // Rule words: what the engine itself does with them, in its own numbers. A story adds its own (story.keywords:
  // { id: { forms: [..], def } }). Forms are matched without regard to case.
  var KEYWORDS = {
    fatigue: { forms: ["fatigue", "fatigué", "fatiguée", "épuisé", "épuisée"], def: function () { return "Chaque point de fatigue retire " + 5 + " à tous tes jets. Une nuit de repos ou un bivouac l'efface."; } },
    blessure: { forms: ["blessure", "blessé", "blessée"], def: function () { return "Une blessure ouverte pèse sur tes jets tant qu'elle n'est pas soignée ; une blessure grave peut laisser une cicatrice."; } },
    cicatrice: { forms: ["cicatrice"], def: function () { return "La trace d'une blessure grave. Elle se voit sur ton portrait et le texte peut s'en souvenir."; } },
    angoisse: { forms: ["angoisse", "troublé", "troublée"], def: function () { return "Au-delà de la moitié de la jauge, chaque point pèse sur tes jets. Le sommeil, la chaleur, une vérité dite l'apaisent."; } },
    jet: { forms: ["jet", "jets"], def: function () { return "Un dé de 100 ouvert, plus ton bonus dans le domaine : il faut atteindre " + SUCCESS + ". Un 96 ou plus se relance et s'ajoute."; } },
    ep: { forms: ["EP", "expérience"], def: function () { return "Les points d'expérience. Un niveau tous les " + EP_PER_LEVEL.toLocaleString("fr-FR") + " EP ; chaque niveau ajoute à tes domaines et à tes points de vie."; } },
    pv: { forms: ["PV", "points de vie"], def: function () { return PV_BASE + " plus ce que donne ta voie, et " + PV_PER_LEVEL + " par niveau. À zéro, tu tombes."; } },
    confiance: { forms: ["confiance"], def: function () { return "Ce qu'un compagnon pense de toi, de 0 à 100. Sous " + LEAVE_UNDER + ", il peut partir ; au-dessus de " + LOYAL_AT + ", il te suit loin."; } },
    promesse: { forms: ["promesse", "promis", "promise"], def: function () { return "Une parole donnée, avec son échéance. Le carnet (Dettes et promesses) la garde ; ceux à qui tu as promis s'en souviennent."; } },
    marque: { forms: ["la Marque"], def: function () { return "Ce que le monde sait de tes actes, en bien ou en mal. Elle ouvre des portes et en ferme."; } },
  };
  function keywordsOf(story) {
    var out = {};
    Object.keys(KEYWORDS).forEach(function (k) { out[k] = { forms: KEYWORDS[k].forms, def: KEYWORDS[k].def() }; });
    Object.keys((story && story.keywords) || {}).forEach(function (k) { var K = story.keywords[k]; out[k] = { forms: K.forms || [k], def: K.def || "" }; });
    return out;
  }
  function keywordFor(story, word) {
    var w = String(word).toLowerCase(), all = keywordsOf(story), hit = null;
    Object.keys(all).forEach(function (k) { if (!hit && (k === w || all[k].forms.some(function (f) { return f.toLowerCase() === w; }))) hit = k; });
    return hit;
  }
  // Finds (story.trouvailles: { id: { title, text, fx } }, story.trouvaillesName: « lettres d'or »): a hidden word the
  // reader taps. Found once per game; the story says what it gives.
  function trouve(story, s, id) {
    var T = (story.trouvailles || {})[id]; if (!T) throw new Error("trouvaille inconnue : " + id);
    s.found = s.found || {}; if (s.found[id]) return false;
    s.found[id] = s.turn || 1;
    var n = Object.keys(s.found).length, all = Object.keys(story.trouvailles).length, name = story.trouvaillesName || "trouvailles";
    ev(s, "✦ " + (T.title ? T.title + " · " : "") + cap(name) + " : " + n + " sur " + all + ".", "good");
    if (T.text) ev(s, interp(s, T.text), "");
    apply(story, s, T.fx);
    return true;
  }
  // The page follows the hero's state (Clément, 15/11, piste T5): troubled words tremble, a tired page blurs at the
  // edges, a wounded one darkens at its margins. A story may add its own (story.moods: [{ if, mood }]).
  var MOODS = { trouble: 1, epuise: 1, blesse: 1, ivre: 1, fievre: 1 };
  function moodOf(story, s) {
    var own = (story.moods || []).filter(function (m) { return MOODS[m.mood] && evalCond(story, s, m.if); })[0];
    if (own) return own.mood;
    if (story.dread && dreadTrouble(story, s)) return "trouble";
    if (s.pv != null && usesOf(story).pv && s.pv > 0 && s.pv <= pvMax(s) * MOOD_HURT) return "blesse";
    if (s.fatigue >= MOOD_TIRED) return "epuise";
    return null;
  }
  var MOOD_HURT = 0.25, MOOD_TIRED = 3;
  // Intent: solved(Story, State, Mystery) -> Bool = the story has told the answer (`solved`: a flag or a passage read)
  function mysterySolved(story, s, id) { var m = (story.mysteries || {})[id]; return !!(m && m.solved && happened(s, m.solved)); }
  // Intent: note(State, Fault) -> () = the engine had to step in for something the scenario should have said
  // Why: Clément, 12/11: the engine vouches for the play, not the scenario; what it catches is listed for the author.
  function guard(s, what) { s.guards = s.guards || {}; var k = "§ " + s.node + " : " + what; s.guards[k] = (s.guards[k] || 0) + 1; }
  // Intent: where(Story, State, Passage, Choice) -> PlaceName | null = the place this choice leads to, when it is another one
  // Why: "in A, it offers A and I end up in B" (Clément, 12/11). The engine reads the destination from the target
  // passages themselves and shows it on the button, whatever the label says.
  // The button says ahead when a scene will spend time: "jusqu'au soir".
  function aheadOf(story, s, c) {
    var to = typeof c.to === "string" ? c.to : null, tp = to && story.passages[to];
    var tk = (c.takes != null && takesOf(s, c.takes)) || (tp && takesOf(s, tp.takes));
    return tk ? "le temps passe : " + tk.ahead : "";
  }
  function backGoes(story, s, c) {
    if (c.back == null || c.autoBack) return null;
    var to = c.back === true ? s.hubLast : c.back, tp = story.passages[to];
    return tp ? cap(interp(s, String(tp.backName || tp.title || "").replace(/\*/g, ""))) : null;
  }
  function goesTo(story, s, p, c) {
    var places = W(story).places || {};
    if (c.sys === "travel") return (places[c.dest] || {}).name || null;
    // Only where the reader is finding a way (a hub, a crossroads): inside a scene, where the story takes them is the story's to tell.
    if (c.sys || !p || !s.place || !(p.hub || p.routes)) return null;
    var list = [];
    (function add(to) {
      if (Array.isArray(to)) { to.forEach(function (x) { add(x.to); }); return; }
      if (to == null || to.charAt(0) === "@") { list.push(null); return; }
      var tp = story.passages[to]; list.push(tp && tp.place ? tp.place : null);
    })([c.to, c.win && c.win.to, c.lose && c.lose.to].filter(function (x) { return x != null; }).map(function (x) { return { to: x }; }));
    if (c.travel) { var r = routeById(story, c.travel); if (r) list = [c.dest || otherEnd(r, s.place)]; }
    if (!list.length || list.some(function (x) { return x !== list[0]; }) || !list[0] || list[0] === s.place || !places[list[0]]) return null;
    return places[list[0]].name;
  }
  // Intent: unveils(Choice) -> bool = the choice is open only thanks to an earlier game (savoir, lu, second): a path unveiled.
  function unveils(c) {
    if (c.skip || c.second != null) return !c.skip && c.second !== false;
    return unveilsIf(c.if);
  }
  function unveilsIf(cond) {
    var hit = false;
    (function walk(x) { if (!x || typeof x !== "object" || hit) return; if (Array.isArray(x)) return x.forEach(walk); if ("not" in x) return; if ("savoir" in x || "lu" in x || ("second" in x && x.second !== false)) { hit = true; return; } ["all", "any", "count"].forEach(function (k) { if (x[k]) walk(x[k]); }); })(cond);
    return hit;
  }
  function allowed(story, s, p, c) {
    if (c.sys === "carte") return { ok: !!c.cardOk, why: c.cardWhy || "" };
    if (c.sys === "echange") return { ok: true, why: "" };
    if (c.if && !evalCond(story, s, c.if)) return { ok: false, why: c.why || describeCond(story, c.if) };
    if (c.exit && s.toutJouer) {
      var act = (p && p.act) || (s.lastAct);
      // The act's main quest ends in its climax, after the exit: only the other quests hold it (Malvoran, 13/11).
      var left = remaining(story, s, act).filter(function (q) { return q.kind !== "principale"; });
      if (left.length) return { ok: false, why: "Mode « tout jouer » : il reste " + left.map(function (q) { return "« " + q.title + " »"; }).join(", ") + "." };
    }
    // A choice that pays out of the purse needs the coins, as long as the passage offers another way on (an author's own "if" wins).
    var cost = !c.if && c.fx && c.fx.gold < 0 ? -c.fx.gold : 0;
    if (cost > (s.gold || 0) && p && ownChoices(story, s, p).some(function (o) {
      return o !== c && !(o.fx && o.fx.gold < 0) && (!o.if || evalCond(story, s, o.if)) && !(o.exit && s.toutJouer);
    })) return { ok: false, why: "Il te faut " + money(story, cost) + "." };
    // Same for rations given away.
    var eat = !c.if && c.fx && c.fx.food < 0 ? -c.fx.food : 0;
    if (eat > (s.food || 0) && p && ownChoices(story, s, p).some(function (o) {
      return o !== c && !(o.fx && o.fx.food < 0) && (!o.if || evalCond(story, s, o.if)) && !(o.exit && s.toutJouer);
    })) return { ok: false, why: "Il te faut " + eat + " jour" + (eat > 1 ? "s" : "") + " de vivres." };
    // Same for a thing the choice hands over: it must be in the bag.
    var gone = !c.if && c.fx ? [].concat(c.fx.drop || []).filter(function (it) { return s.items.indexOf(it) < 0 && !carrier(s, it); }) : [];
    if (gone.length && p && ownChoices(story, s, p).some(function (o) {
      return o !== c && !(o.fx && o.fx.drop) && (!o.if || evalCond(story, s, o.if)) && !(o.exit && s.toutJouer);
    })) return { ok: false, why: "Il te faut : " + item(story, gone[0]).name + "." };
    return { ok: true, why: "" };
  }
  function target(story, s, to) {
    if (Array.isArray(to)) {
      for (var i = 0; i < to.length; i++) if (evalCond(story, s, to[i].if)) return target(story, s, to[i].to);
      // Guarantee: a choice always leads somewhere. With no destination that fits, the last one written is taken.
      if (!to.length) throw new Error("aucune destination");
      guard(s, "aucune destination ne convenait, la dernière est prise");
      return target(story, s, to[to.length - 1].to);
    }
    if (to === "@ret") return s.ret;
    // Cards (9.7): after a card's scene, the way on from the stop where it was played.
    if (to === "@suite") { if (!s.jeu || !s.jeu.suite) throw new Error("@suite hors d'une carte jouée"); s.jeu.scene = false; return s.jeu.suite; }
    if (to === "@team") { var tm = (s.teams || {})[s.team] || {}; var st0 = tm.resume || ((story.teams || {})[s.team] || {}).start; if (!st0) throw new Error("@team : aucune équipe à reprendre"); delete tm.resume; return st0; }
    return to;
  }

  // ------------------------------------------------------------------ cards (9.7)
  // Intent: a story told by the cards the reader plays. Why: Clément, 16/11 — his brother loves drafting card games:
  // generic path cards that build the story (the story adapts to the kind of card played), a deck, boosters, play
  // with others, and a draft. The story declares; the engine does the rest:
  //   story.cartes  { <id>: { titre, type, enseigne, rarete, elan, texte, ouvre, noue } }   the cards it knows
  //   story.fils    { <id>: { titre, ouvert, noue } }                                       the threads a card may open
  //   story.jeu     { main, deck: [ids], elan: { depart, halte } }                           the hand, the deck, the élan
  //   passage halte: { id, nom, suite, types }   a stop: the reader draws, then plays one card from the hand
  //   passage resout: { type | carte, halte, enseigne, fil, if }   what a card becomes; the engine takes the most precise
  //   "@suite"   the way on after a card's scene: the `suite` of the stop where the card was played
  // A card has a kind of path (what happens), a suit (how), a rarity, a cost in élan, and maybe a hook that opens or
  // ties a thread. Two cards of one suit in a row give one élan back.
  var CARD_TYPES = { rencontre: "Rencontre", obstacle: "Obstacle", detour: "Détour", refuge: "Refuge", revelation: "Révélation",
    tresor: "Trésor", peril: "Péril", presage: "Présage", allie: "Allié", trahison: "Trahison" };
  var SUITS = { lame: "Lame", masque: "Masque", lanterne: "Lanterne", racine: "Racine" };
  // In the scene a card opened, its suit helps the rolls of its own manner (Clément's principle: the card decides).
  var SUIT_DOMAINS = { lame: ["combat"], masque: ["discretion", "social"], lanterne: ["savoir", "magie"], racine: ["nature", "social"] }, SUIT_ROLL = 25;
  function cardHelp(s, t) { var D = s.jeu && s.jeu.scene && s.jeu.derniere; return D && (SUIT_DOMAINS[D.enseigne] || []).indexOf(t.dom) >= 0 ? SUIT_ROLL : 0; }
  var SUIT_WORDS = { lame: "la force", masque: "la ruse", lanterne: "le savoir", racine: "les liens" };
  var RARITIES = { commune: "commune", peu: "peu commune", rare: "rare", legende: "légendaire" };
  var THREAD_STATES = { ouvert: "ouvert", noue: "noué", rate: "manqué" };
  var HAND_SIZE = 5, ELAN_START = 1, ELAN_PER_STOP = 1, ELAN_MAX = 5, SUIT_BONUS = 1, PASS_CARD = "@passer";
  // Resolution: the more a resolution names, the more precise it is.
  var RES_CARD = 8, RES_STOP = 4, RES_THREAD = 2, RES_SUIT = 1, RES_IF = 1;
  function cardDef(story, id) { return (story.cartes || {})[id] || null; }
  function cardRules(story) { var j = story.jeu || {}, e = j.elan || {}; return { main: j.main || HAND_SIZE, depart: e.depart != null ? e.depart : ELAN_START, halte: e.halte != null ? e.halte : ELAN_PER_STOP }; }
  function shuffled(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(RNG() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  // Intent: jeuOf(Story, State) -> Jeu = the reader's cards, made at the first stop from the deck the app gave
  // (s.deckChoisi, a draft or a deck built later) or the story's own deck.
  function jeuOf(story, s) {
    if (s.jeu) return s.jeu;
    var deck = (s.deckChoisi && s.deckChoisi.length ? s.deckChoisi : (story.jeu || {}).deck || []).filter(function (id) { return cardDef(story, id); });
    s.jeu = { pioche: shuffled(deck), main: [], defausse: [], perdues: [], echanges: {}, elan: cardRules(story).depart, fils: {}, haltes: {}, joue: [], derniere: null, suite: null };
    return s.jeu;
  }
  function threadState(s, id) { return (s.jeu && s.jeu.fils[id]) || "aucun"; }
  function threadOpen(story, s, id) {
    var J = jeuOf(story, s); if (J.fils[id]) return;
    J.fils[id] = "ouvert"; ev(s, "Un fil s'ouvre : " + interp(s, ((story.fils || {})[id] || {}).titre || id) + ".", "fil");
  }
  function threadTie(story, s, id) {
    var J = jeuOf(story, s); if (J.fils[id] !== "ouvert") return;
    J.fils[id] = "noue"; ev(s, "Un fil se noue : " + interp(s, ((story.fils || {})[id] || {}).titre || id) + ".", "fil");
  }
  function threadMiss(story, s, id) { var J = jeuOf(story, s); if (J.fils[id] === "ouvert") J.fils[id] = "rate"; }
  // Intent: filsOf(Story, State) -> [{ id, titre, etat, texte }] = the threads of this game, for the notebook
  function filsOf(story, s) {
    var J = s.jeu; if (!J) return [];
    return Object.keys(J.fils).map(function (k) { var F = (story.fils || {})[k] || {}; return { id: k, titre: interp(s, F.titre || k), etat: J.fils[k], texte: interp(s, (J.fils[k] === "noue" ? F.noue : F.ouvert) || "") }; });
  }
  function draw(story, s, n) {
    var J = jeuOf(story, s), got = 0;
    for (var i = 0; i < n; i++) {
      if (!J.pioche.length) { if (!J.defausse.length) break; J.pioche = shuffled(J.defausse); J.defausse = []; ev(s, "Tu rebats ta défausse : elle redevient ta pioche.", "carte"); }
      J.main.push(J.pioche.shift()); got++;
    }
    return got;
  }
  function stopOf(p) { return p && p.halte ? (p.halte === true ? { id: "halte" } : p.halte) : null; }
  // Intent: stopEnter(Story, State, PassageId) ! the reader comes to a stop: the hand is filled and the élan grows,
  // once per stop.
  function stopEnter(story, s, id) {
    var H = stopOf(story.passages[id]), J = jeuOf(story, s), R = cardRules(story);
    if (J.haltes[H.id] !== undefined || J.vue === H.id) return;
    J.vue = H.id;
    var n = draw(story, s, Math.max(0, R.main - J.main.length)), was = J.elan;
    J.elan = Math.min(ELAN_MAX, J.elan + R.halte);
    if (n || J.elan > was) ev(s, (n ? "Tu pioches " + n + " carte" + (n > 1 ? "s" : "") + ". " : "") + "Élan : " + J.elan + (J.elan > was ? " (+" + (J.elan - was) + " à chaque halte)" : "") + ".", "carte");
  }
  // Intent: resolutions(Story) -> [{ id, r }] = the passages that say what a card becomes (read once per story)
  function resolutions(story) {
    if (story._resout) return story._resout;
    var out = Object.keys(story.passages).filter(function (id) { return story.passages[id].resout; }).map(function (id) { return { id: id, r: story.passages[id].resout }; });
    try { Object.defineProperty(story, "_resout", { value: out, enumerable: false }); } catch (e) { /* frozen */ }
    return out;
  }
  function resMatch(story, s, x, card, cardId, stopId) {
    var r = x.r;
    if (r.carte != null && [].concat(r.carte).indexOf(cardId) < 0) return -1;
    if (r.carte == null && [].concat(r.type || []).indexOf(card.type) < 0) return -1;
    if (r.halte != null && [].concat(r.halte).indexOf(stopId) < 0) return -1;
    if (r.enseigne != null && [].concat(r.enseigne).indexOf(card.enseigne) < 0) return -1;
    if (r.fil != null && ![].concat(r.fil).every(function (f) { return threadState(s, f) === "ouvert"; })) return -1;
    if (r.if != null && !evalCond(story, s, r.if)) return -1;
    if (!sceneOk(story, s, story.passages[x.id])) return -1;
    return (r.carte != null ? RES_CARD : 0) + (r.halte != null ? RES_STOP : 0) + (r.fil != null ? RES_THREAD : 0) + (r.enseigne != null ? RES_SUIT : 0) + (r.if != null ? RES_IF : 0);
  }
  // Intent: resolve(Story, State, CardId, StopId) -> PassageId | null = the scene this card opens at this stop: the
  // most precise resolution that holds; of equals, one this game has not read yet, then one at random.
  function resolve(story, s, cardId, stopId) {
    var card = cardDef(story, cardId); if (!card) return null;
    var best = -1, list = [];
    resolutions(story).forEach(function (x) { var sc = resMatch(story, s, x, card, cardId, stopId); if (sc > best) { best = sc; list = [x.id]; } else if (sc === best && sc >= 0) list.push(x.id); });
    if (!list.length) return null;
    var fresh = list.filter(function (id) { return !s.seen[id]; });
    return pick(fresh.length ? fresh : list);
  }
  // Intent: cardChoices(Story, State, Passage) -> [Choice] = at a stop, one choice per card in the hand (two copies:
  // one choice, « × 2 »), closed with its reason when the stop refuses its kind or the élan is short.
  function cardChoices(story, s, p) {
    var H = stopOf(p); if (!H || !s.jeu) return [];
    var J = s.jeu;
    // Back on a stop already played (a way back written by the story): the road goes on.
    if (J.haltes[H.id] !== undefined) return (p.choices || []).length ? [] : [{ to: H.suite, label: "Reprendre la route" }];
    var count = {}, order = [];
    J.main.forEach(function (id) { if (!count[id]) order.push(id); count[id] = (count[id] || 0) + 1; });
    var cs = order.map(function (id) {
      var C = cardDef(story, id), why = "";
      if (H.types && [].concat(H.types).indexOf(C.type) < 0) why = "Pas ici : " + [].concat(H.types).map(function (t) { return CARD_TYPES[t]; }).join(" ou ") + " seulement.";
      else if ((C.elan || 0) > J.elan) why = "Il te faut " + C.elan + " d'élan (tu en as " + J.elan + ").";
      else if (!resolve(story, s, id, H.id)) { why = "Cette carte n'a pas de suite ici."; guard(s, "carte « " + id + " » sans résolution à la halte " + H.id); }
      return { sys: "carte", carte: id, n: count[id], label: interp(s, C.titre), cardOk: !why, cardWhy: why, ui: true };
    });
    if (!cs.some(function (c) { return c.cardOk; })) cs.push({ sys: "carte", carte: PASS_CARD, label: "Passer son chemin", cardOk: true, cardWhy: "" });
    return cs.concat(swapChoices(story, s, H));
  }
  // Intent: handView(Story, State, Passage) -> Hand | null = what the page draws at a stop: the cards, the élan, the
  // piles, the threads.
  function handView(story, s, p) {
    var H = stopOf(p); if (!H || !s.jeu) return null;
    var J = s.jeu;
    return { halte: H.id, nom: H.nom ? interp(s, H.nom) : "", joue: J.haltes[H.id] !== undefined, elan: J.elan, pioche: J.pioche.length, defausse: J.defausse.length, fils: filsOf(story, s),
      types: H.types ? [].concat(H.types) : null, derniere: J.derniere ? J.derniere.enseigne : null, premiere: !J.joue.length,
      perdues: pilesOf(J).perdues.length, echange: !J.echanges[H.id] && J.pioche.length + J.defausse.length > 0,
      piles: { main: J.main.slice(), pioche: J.pioche.slice().sort(), defausse: J.defausse.slice(), perdues: J.perdues.slice() } };
  }
  // Intent: cardInfo(Story, CardId) -> { titre, type, typeNom, enseigne, enseigneNom, rarete, elan, texte, accroche }
  function cardInfo(story, id) {
    var C = cardDef(story, id) || {}, F = story.fils || {};
    var hook = C.ouvre ? "Ouvre un fil : " + ((F[C.ouvre] || {}).titre || C.ouvre) : C.noue ? "Noue le fil : " + ((F[C.noue] || {}).titre || C.noue) : "";
    return { id: id, titre: C.titre || id, type: C.type, typeNom: CARD_TYPES[C.type] || C.type, enseigne: C.enseigne, enseigneNom: SUITS[C.enseigne] || C.enseigne, rarete: C.rarete || "commune", elan: C.elan || 0, texte: C.texte || "", accroche: hook };
  }
  // Intent: playCard(Story, State, Choice) ! the card goes to the discard pile, its élan is paid, its scene opens.
  function playCard(story, s, c) {
    var p = story.passages[s.node], H = stopOf(p), J = jeuOf(story, s);
    if (!H) throw new Error("carte jouée hors d'une halte");
    if (c.carte === PASS_CARD) { J.haltes[H.id] = PASS_CARD; J.derniere = null; J.suite = H.suite; ev(s, "Tu passes ton chemin sans jouer de carte.", "carte"); go(story, s, H.suite); return; }
    var at = J.main.indexOf(c.carte); if (at < 0) throw new Error("carte absente de la main : " + c.carte);
    var C = cardDef(story, c.carte), to = resolve(story, s, c.carte, H.id);
    J.main.splice(at, 1); J.defausse.push(c.carte);
    J.elan -= C.elan || 0;
    ev(s, "Tu joues « " + interp(s, C.titre) + " » · " + CARD_TYPES[C.type] + ", " + SUITS[C.enseigne] + ".", "carte");
    if (J.derniere && J.derniere.enseigne === C.enseigne) { J.elan = Math.min(ELAN_MAX, J.elan + SUIT_BONUS); ev(s, "Deux cartes de " + SUITS[C.enseigne] + " de suite : +" + SUIT_BONUS + " élan (" + J.elan + ").", "carte"); }
    J.derniere = { carte: c.carte, type: C.type, enseigne: C.enseigne, halte: H.id };
    J.haltes[H.id] = c.carte; J.joue.push(c.carte); J.suite = H.suite; J.scene = true;
    // The scene is chosen with the threads as they were: a card that ties a thread opens the scene where it is tied.
    if (C.noue) threadTie(story, s, C.noue);
    if (C.ouvre) threadOpen(story, s, C.ouvre);
    if (!to) { guard(s, "carte « " + c.carte + " » sans résolution à la halte " + H.id + ", on passe à la suite"); go(story, s, H.suite); return; }
    s.via = "carte"; go(story, s, to);
  }
  // Intent: cardTags(State, Tag) -> bool = the card tags of a paragraph or a choice: the card just played (carte, type,
  // enseigne), the stop it was played at (halte), a thread open (fil) or tied (noue).
  function cardTagsOk(story, s, t) {
    var D = s.jeu && s.jeu.derniere;
    if (t.carte != null && !(D && [].concat(t.carte).indexOf(D.carte) >= 0)) return false;
    if (t.type != null && !(D && [].concat(t.type).indexOf(D.type) >= 0)) return false;
    if (t.enseigne != null && !(D && [].concat(t.enseigne).indexOf(D.enseigne) >= 0)) return false;
    if ((typeof t.halte === "string" || Array.isArray(t.halte)) && !(D && [].concat(t.halte).indexOf(D.halte) >= 0)) return false;
    if (t.fil != null && ![].concat(t.fil).every(function (f) { return threadState(s, f) === "ouvert"; })) return false;
    if (t.noue != null && ![].concat(t.noue).every(function (f) { return threadState(s, f) === "noue"; })) return false;
    return true;
  }

  // ------------------------------------------------------------------ the life of the deck (11.2)
  // Intent: the deck lives with the story. Why: Clément, 17/11 — draw, discard, gain and lose cards, before the draft.
  //   fx.pioche: n          the reader draws n cards now (a refuge, a lucky find)
  //   fx.gagne: id | [ids] | { carte, dans: main | pioche | defausse }   a card joins the reader's deck (the hand by default)
  //   fx.perd: id | [ids] | { carte | type | enseigne, n, de: main | jeu }  a card leaves the game (stolen, burnt, given)
  //   fx.defausse: n        n cards of the hand, at random, go to the discard pile (they come back when it is shuffled)
  //   cond possede: id | [ids]   the reader has one of these cards (hand, draw pile or discard pile)
  // At each stop, once, the reader may trade one card of the hand for the top of the draw pile.
  var GAIN_PLACES = { main: "dans ta main", pioche: "dans ta pioche", defausse: "dans ta défausse" }, LOSS_FROM = { main: ["main"], jeu: ["main", "defausse", "pioche"] };
  var DECK_FX = ["pioche", "gagne", "perd", "defausse"];
  function pilesOf(J) { if (!J.perdues) J.perdues = []; if (!J.echanges) J.echanges = {}; return J; }
  function owns(s, ids) { var J = s.jeu; if (!J) return false; return [].concat(ids).some(function (k) { return J.main.indexOf(k) >= 0 || J.pioche.indexOf(k) >= 0 || J.defausse.indexOf(k) >= 0; }); }
  function cardName(story, s, id) { return "« " + interp(s, (cardDef(story, id) || {}).titre || id) + " »"; }
  // Intent: gainCards(Story, State, Gain) ! the cards join the deck where the story says (the hand by default; the draw
  // pile gets them shuffled in).
  function gainCards(story, s, g) {
    var J = pilesOf(jeuOf(story, s)), list = typeof g === "object" && !Array.isArray(g) ? [].concat(g.carte) : [].concat(g), where = (g && g.dans) || "main";
    list.forEach(function (id) {
      if (!cardDef(story, id)) { guard(s, "carte gagnée inconnue : " + id); return; }
      if (where === "pioche") J.pioche.splice(Math.floor(RNG() * (J.pioche.length + 1)), 0, id); else J[where].push(id);
      ev(s, "Tu gagnes la carte " + cardName(story, s, id) + ", " + GAIN_PLACES[where] + ".", "carte");
    });
  }
  // Intent: loseCards(Story, State, Loss) ! the cards leave the game for good: looked for in the hand, then the
  // discard pile, then the draw pile (or the hand only, with de: "main"); a card the reader lacks is simply not lost.
  function loseCards(story, s, L) {
    var J = pilesOf(jeuOf(story, s)), spec = typeof L === "object" && !Array.isArray(L) ? L : { carte: L };
    var ids = spec.carte != null ? [].concat(spec.carte) : null, n = spec.n || (ids ? ids.length : 1), lost = 0;
    var fits = function (id) { var C = cardDef(story, id) || {}; return (ids ? ids.indexOf(id) >= 0 : true) && (spec.type == null || [].concat(spec.type).indexOf(C.type) >= 0) && (spec.enseigne == null || [].concat(spec.enseigne).indexOf(C.enseigne) >= 0); };
    LOSS_FROM[spec.de || "jeu"].forEach(function (pile) {
      while (lost < n) {
        var at = J[pile].map(function (id, i) { return fits(id) ? i : -1; }).filter(function (i) { return i >= 0; });
        if (!at.length) break;
        var i = ids ? at[0] : at[Math.floor(RNG() * at.length)], id = J[pile].splice(i, 1)[0];
        J.perdues.push(id); lost++;
        ev(s, "Tu perds la carte " + cardName(story, s, id) + " : elle quitte ton jeu.", "carte");
      }
    });
  }
  function discardCards(story, s, n) {
    var J = jeuOf(story, s);
    for (var k = 0; k < n && J.main.length; k++) { var id = J.main.splice(Math.floor(RNG() * J.main.length), 1)[0]; J.defausse.push(id); ev(s, "La carte " + cardName(story, s, id) + " part dans ta défausse.", "carte"); }
  }
  function deckFx(story, s, fx) {
    if (fx.pioche) { var n = draw(story, s, fx.pioche); ev(s, n ? "Tu pioches " + n + " carte" + (n > 1 ? "s" : "") + "." : "Ta pioche et ta défausse sont vides : rien à piocher.", "carte"); }
    if (fx.gagne) gainCards(story, s, fx.gagne);
    if (fx.perd) [].concat(fx.perd).forEach(function (L) { loseCards(story, s, L); });
    if (fx.defausse) discardCards(story, s, fx.defausse);
  }
  // Intent: swapChoices(Story, State, Stop) -> [Choice] = once per stop, one choice per card in the hand: it goes to the
  // discard pile and the reader draws one in its place.
  function swapChoices(story, s, H) {
    var J = pilesOf(s.jeu);
    if (J.echanges[H.id] || !(J.pioche.length + J.defausse.length)) return [];
    return J.main.filter(function (id, i) { return J.main.indexOf(id) === i; }).map(function (id) { return { sys: "echange", carte: id, label: "Échanger " + cardName(story, s, id), ui: true }; });
  }
  function swapCard(story, s, c) {
    var H = stopOf(story.passages[s.node]), J = pilesOf(jeuOf(story, s)), at = J.main.indexOf(c.carte);
    if (!H || at < 0 || J.echanges[H.id]) throw new Error("échange impossible : " + c.carte);
    J.main.splice(at, 1); J.echanges[H.id] = true;
    draw(story, s, 1); J.defausse.push(c.carte);
    ev(s, "Tu échanges " + cardName(story, s, c.carte) + " contre " + cardName(story, s, J.main[J.main.length - 1]) + ".", "carte");
  }

  // ------------------------------------------------------------------ moving
  function enter(story, s, id) {
    if (s.evIn === false) s.evIn = true;
    if (id === "@camp") { s.node = "@camp"; return; }
    if (id === "@route") { if (!s.travel) throw new Error("@route hors d'un voyage (depuis " + s.node + ")"); advanceTravel(story, s); return; }
    if (!story.passages[id]) throw new Error("passage inconnu " + id + " (depuis " + s.node + ")");
    // A remembrance (8.3, passage `souvenir`): the present is kept (the page one came from, its hour); inside, the clock
    // stands still and the world waits. Back in the present, the hour is the one the reader left.
    // An interlude (8.4) stands before the first page of a new act: that page is the present it returns to.
    var inter = interludeDue(story, s, id);
    if (inter) { s.present = { node: id, time: s.time }; enterIn(story, s, inter, true); return; }
    var mem = !!(story.passages[id].souvenir || story.passages[id].interlude);
    if (mem && !s.present && s.node && story.passages[s.node] && !story.passages[s.node].souvenir && !story.passages[s.node].interlude) s.present = { node: s.node, time: s.time };
    if (!mem && s.present) { s.time = s.present.time; s.present = null; }
    if (mem) { enterIn(story, s, id, true); return; }
    // Dread at its height (8.3): the page the story gives to panic, once until dread comes down.
    if (panicDue(story, s, story.passages[id])) { s.panicArmed = false; s.flags.panique = true; s.panics = (s.panics || 0) + 1; id = story.dread.panic.to; }
    // The case is judged at its hour (story.deadline), wherever the reader is: the story goes there, once.
    // The hour of the deadline is the hour of the scene it opens: a long rest that would end past it ends on it.
    if (deadlineDue(story, s, id)) { s.flags["echeance"] = true; s.time = momentOf(story.deadline); id = story.deadline.to; }
    // A siege (8.0): the days that passed are counted, the world moves on, promises come due; a scene the world
    // imposes (march `to`, a creditor's `collect`) takes the place of the page, except right after a vote or a battle.
    tick(story, s);
    if (!s.holdWorld) id = redirect(story, s, id);
    s.holdWorld = false;
    id = branchTo(story, s, id);
    if (story.passages[id].hub) { var b = dueBanter(story, s, story.passages[id].act); if (b) { s.ret = id; id = b; } }
    // At sea (8.1): back on a crossroads, an encounter of the region, the season and the sky may come first.
    if (story.passages[id].hub && story.encounters) { var en = encounterDue(story, s); if (en) { s.hubLast = id; s.ret = id; id = en; } }
    // At school (8.2): waking up, a dream may come first.
    if (story.passages[id].reveil && story.dreams) { var dr = dreamDue(story, s); if (dr) { s.hubLast = id; s.ret = id; id = dr; } }
    enterIn(story, s, id, false);
  }
  function enterIn(story, s, id, mem) {
    // The passage left (a fight or a road in between does not count): read by the tag `via`.
    if (s.node && s.node.charAt(0) !== "@" && s.node !== id) s.from = s.node;
    s.node = id;
    var p = story.passages[id];
    if (!sceneOk(story, s, p)) guard(s, "scène jouée alors que ses tags (with, without, when, after, before) ne sont pas remplis");
    if (p.act && !p.interlude) s.lastAct = p.act;
    // A quest begun and now out of reach (its act is over, or its `closes` holds) is told once, and the journal keeps it.
    (story.quests || []).forEach(function (q) { if (!s.flags["quete-manquee:" + q.id] && questStarted(s, q) && questMissed(story, s, q)) { s.flags["quete-manquee:" + q.id] = true; ev(s, "Quête manquée : " + q.title + ".", "quest"); } });
    (story.quests || []).forEach(function (q) { if (q.start === id && s.seen[id] && questOpen(story, s, q)) ev(s, "(Tu reprends : " + q.title + ".)", "quest"); });
    if (p.place) { s.place = p.place; s.known[p.place] = true; }
    if (p.hub || p.routes || p.aparte) s.hubLast = id;
    var first = !s.seen[id];
    s.seen[id] = (s.seen[id] || 0) + 1;
    (story.quests || []).forEach(function (q) { if (q.start === id && !s.flags["quete-vue:" + q.id]) { s.flags["quete-vue:" + q.id] = true; ev(s, "Nouvelle quête : " + q.title, "quest"); } });
    var tk = mem ? null : takesOf(s, p.takes); s.took = null;
    if (tk) { var pst = stopAt(story, s, s.time + tk.hours); s.time = pst != null ? pst : s.time + tk.hours; s.took = { node: id, turn: s.turn, say: tk.say, end: tk.end }; }
    if (first) apply(story, s, p.fx);
    apply(story, s, p.fxEvery);
    if (p.halte) stopEnter(story, s, id);
    if (p.rumeur) rumorPick(story, s, p, id); else s.rumorNow = null;
    // A closed room (8.3): sleep eases dread; alone, on waking, or after a silence, what the hero did comes back.
    if (p.reveil && story.dread && story.dread.sleep && s.dreadSlept !== day(s)) { s.dreadSlept = day(s); dreadMove(story, s, story.dread.sleep); }
    s.echoNow = null;
    if (story.gestes && !mem && (p.seul || p.reveil || s.silentTurn === s.turn)) { var et = echoPick(story, s); if (et) s.echoNow = { node: id, turn: s.turn, text: et }; }
    if (!mem) tick(story, s);
    greetBack(story, s);
    if (p.combat) { startCombat(story, s, p.combat); s.combat.intro = textList(story, s, p.text).join("\n\n"); }
  }
  // ------------------------------------------------------------------ feats and endings
  // Feats (hauts faits, Clément 12/11): a few the engine knows for every story, read from the state, plus those a story
  // declares (`achievements: { id: { title, desc, if } }`, a JSON condition). Each is told once, when it is earned.
  var FEATS = [
    { id: "victoire", title: "Première victoire", desc: "Gagner un combat.", test: function (st, s) { return (s.stats || {}).wins >= 1; } },
    { id: "dix-victoires", title: "Vieille lame", desc: "Gagner dix combats.", test: function (st, s) { return (s.stats || {}).wins >= 10; } },
    { id: "critique", title: "Coup de maître", desc: "Porter un coup critique.", test: function (st, s) { return (s.stats || {}).crits >= 1; } },
    { id: "jet-ouvert", title: "La chance sourit", desc: "Faire 96 ou plus sur un jet.", test: function (st, s) { return (s.stats || {}).open >= 1; } },
    { id: "acte-complet", title: "Rien laissé derrière", desc: "Finir toutes les quêtes d'un acte.", test: function (st, s) { return (st.acts || []).some(function (a) { var qs = questsOf(st, a.id); return qs.length > 1 && qs.every(function (q) { return questDone(s, q); }); }); } },
    { id: "loyal", title: "À la vie, à la mort", desc: "Gagner la loyauté d'un compagnon.", test: function (st, s) { return Object.keys(st.companions || {}).some(function (k) { return !(st.heroes || {})[k] && s.met[k] && s.met[k] !== "gone" && (s.conf[k] || 0) >= LOYAL_AT; }); } },
    { id: "voyageur", title: "Grand voyageur", desc: "Parcourir cinq routes.", test: function (st, s) { return Object.keys(s.routesDone || {}).length >= 5; } },
    { id: "limier", title: "Fin limier", desc: "Réunir dix indices.", test: function (st, s) { return Object.keys(s.clues || {}).filter(function (k) { return !((st.clues || {})[k] || {}).leurre; }).length >= 10; } },
  ];
  function featsOf(story) {
    var out = FEATS.map(function (f) { return { id: f.id, title: f.title, desc: f.desc }; });
    var dec = story.achievements || {};
    Object.keys(dec).forEach(function (k) { out.push({ id: "h:" + k, title: dec[k].title || k, desc: dec[k].desc || "", story: true }); });
    return out;
  }
  function checkFeats(story, s) {
    s.feats = s.feats || {};
    var dec = story.achievements || {};
    FEATS.forEach(function (f) { if (!s.feats[f.id] && f.test(story, s)) { s.feats[f.id] = s.turn || 1; ev(s, "Haut fait : " + f.title, "feat"); } });
    Object.keys(dec).forEach(function (k) { if (!s.feats["h:" + k] && dec[k].if != null && evalCond(story, s, dec[k].if)) { s.feats["h:" + k] = s.turn || 1; ev(s, "Haut fait : " + (dec[k].title || k), "feat"); } });
  }
  // Endings: a story says which one was reached with a flag `fin:<id>` (set by the ending's passage), or else each
  // passage marked `end` is an ending. Titles come from the story (`endings: { id: { title } }`) or from the passage
  // that sets the flag.
  function endingsOf(story) {
    if (story._endings) return story._endings;
    var dec = story.endings || {}, out = [], seen = {};
    Object.keys(story.passages || {}).forEach(function (id) {
      var p = story.passages[id];
      var fl = [].concat(((p.fx || {}).flag) || [], ((p.fx || {}).flags) || []);
      fl.forEach(function (f) { if (typeof f === "string" && f.indexOf("fin:") === 0 && !seen[f]) { seen[f] = 1; out.push({ id: f, title: (dec[f.slice(4)] || {}).title || String(p.title || f.slice(4)).replace(/\*/g, "") }); } });
    });
    if (!out.length) Object.keys(story.passages || {}).forEach(function (id) { var p = story.passages[id]; if (p.end) out.push({ id: id, title: (dec[id] || {}).title || String(p.title || id).replace(/\*/g, "") }); });
    try { Object.defineProperty(story, "_endings", { value: out, enumerable: false }); } catch (e) { /* frozen: recompute */ }
    return out;
  }
  function endingOf(story, s) {
    var p = story.passages[s.node]; if (!p || !p.end) return null;
    var list = endingsOf(story), f = list.filter(function (e) { return e.id.indexOf("fin:") === 0 && s.flags[e.id]; })[0];
    var base = f || list.filter(function (e) { return e.id === s.node; })[0] || { id: s.node, title: String(p.title || s.node) };
    if (!story.fates || !story.fates.length) return base;
    // Composed endings (8.8): the dénouement and the fate of each one the story follows make the ending.
    var fs = fatesOf(story, s);
    return { id: base.id + "|" + fs.map(function (x) { return x.id; }).join("|"), base: base.id, title: base.title, fates: fs,
      full: base.title + " · " + fs.map(function (x) { return x.title; }).join(" · ") };
  }
  // Intent: fatesOf(Story, State) -> [{ who, label, id, title, text }] = for each one the story follows, the first fate
  // whose condition holds (story.fates: [{ who, label, list: [{ id, title, if, text, dens }] }]); the last of a list
  // is the fate by default. Why: Clément (15/11) wants hundreds of endings in a short book: the dénouement of the city
  // and the fate of each character, each set by the choices made, multiply.
  function fatesOf(story, s) {
    return (story.fates || []).map(function (g) {
      var hit = (g.list || []).filter(function (o) { return tagsOk(story, s, o, s.node) && evalCond(story, s, o.if); })[0] || (g.list || [])[g.list.length - 1] || {};
      return { who: g.who, label: g.label || g.who, id: g.who + ":" + (hit.id || "?"), title: hit.title || "", text: hit.text || "" };
    });
  }
  // Intent: fateCount(Story) -> int = how many composed endings the story declares: for each dénouement, the product of
  // the fates of each one that may go with it (a fate's `dens` names the dénouements it can follow; none = all).
  function fateCount(story) {
    var ends = endingsOf(story); if (!story.fates || !story.fates.length) return ends.length;
    return ends.reduce(function (n, e) {
      return n + story.fates.reduce(function (m, g) { return m * (g.list || []).filter(function (o) { return !o.dens || [].concat(o.dens).some(function (d) { return d === e.id || "fin:" + d === e.id; }); }).length; }, 1);
    }, 0);
  }

  // Intent: ambiance(Story, State) -> Kind | null = the sound and picture of the moment
  // Why: Clément (12/11): a passage or a place declares `ambiance` (foret, ville, village, montagne, neige, souterrain,
  // eau, route, chateau, temple, champs, mer); the engine fills in the rest: a fight, the road, the night.
  var AMBIANCES = ["foret", "ville", "village", "montagne", "neige", "souterrain", "eau", "route", "chateau", "temple", "champs", "mer", "combat", "nuit"];
  function ambianceOf(story, s) {
    if (s.combat) return "combat";
    var p = (story.passages || {})[s.node] || {}, pl = (W(story).places || {})[p.place || s.place] || {};
    if (p.ambiance) return p.ambiance;
    if (s.travel) { var r = routeById(story, s.travel.route) || {}; return r.ambiance || (W(story).regions && (W(story).regions[r.region] || {}).ambiance) || "route"; }
    return pl.ambiance || null;
  }

  // Intent: apply(Story, State, Choice) -> () ! writes(State), random
  function choose(story, s, c) {
    prepare(story);
    s.evIn = false;
    try { chooseInner(story, s, c); } finally { delete s.evIn; }
    checkFeats(story, s);
  }
  function chooseInner(story, s, c) {
    s.events = [];
    s.turn++;
    if (c.sys) return chooseSys(story, s, c);
    if (c.back === true) c = Object.assign({}, c, { to: s.hubLast });
    if (c.once && s.node) { s.once = s.once || {}; s.once["c|" + s.node + "|" + (c.onceKey ? interp(s, c.onceKey) : c.label)] = 1; }
    if (c.silence) silenceNote(story, s, c.silence);
    if (c.refuse) { var rq = questOfRefusal(story, s, c); if (rq) { s.flags["quete-refus:" + rq.id] = true; ev(s, "Quête refusée : " + rq.title + ". Tu n'y reviendras pas.", "quest"); } else guard(s, "refuse : aucune quête ouverte ici"); }
    s.last = null; s.via = c.via || null;
    // takes on a choice (7.9): the way there spends time (a walk, a talk); the clock moves before the page opens, so
    // the page is read at its new hour, and says so at its top.
    var ctk = c.takes != null ? takesOf(s, c.takes) : null;
    if (ctk) { var cst = stopAt(story, s, s.time + ctk.hours); s.time = cst != null ? cst : s.time + ctk.hours; }
    chooseOn(story, s, c);
    if (ctk && !(s.took && s.took.turn === s.turn && s.took.node === s.node)) s.took = { node: s.node, turn: s.turn, say: ctk.say, end: false };
  }
  function chooseOn(story, s, c) {
    if (c.test) {
      var roll = rollTest(story, s, c.test, c.who);
      ev(s, (c.who ? nameOf(story, c.who) + " : " : "") + "jet de " + interp(s, c.test.label || DOMAINS[c.test.dom]) + " · " + roll.line + " → " + (roll.ok ? "réussite" : "raté"), (roll.ok ? "good" : "bad") + " roll", { roll: roll });
      apply(story, s, c.fx);
      var br = roll.ok ? c.win : c.lose;
      s.last = roll.ok ? "win" : "lose";
      if (br.via) s.via = br.via;
      apply(story, s, br.fx);
      go(story, s, br.to);
    } else {
      apply(story, s, c.fx);
      if (c.travel) { var r = routeById(story, c.travel); if (!r) throw new Error("route inconnue " + c.travel); startTravel(story, s, r, c.dest || otherEnd(r, s.place || r.from), false); return; }
      if (c.fight) { startCombat(story, s, c.fight); return; }
      go(story, s, c.to);
    }
  }
  function go(story, s, to) { enter(story, s, target(story, s, to)); }
  function chooseSys(story, s, c) {
    switch (c.sys) {
      case "travel": var r = routeById(story, c.route); startTravel(story, s, r, c.dest, !!s.routesDone[r.id]); break;
      case "advance": advanceTravel(story, s); break;
      case "camp": camp(story, s); advanceTravel(story, s); break;
      case "banter": s.ret = "@camp"; enter(story, s, c.passage); break;
      case "attack": case "shoot": case "tech": case "rank": case "defend": case "use": case "flee": case "talk": combatRound(story, s, c); break;
      case "order": giveOrder(story, s, c); break;
      case "lead": setLead(story, s, c.hero); break;
      case "carte": playCard(story, s, c); break;
      case "echange": swapCard(story, s, c); break;
      case "jeu": tavernSit(story, s, c); break;
      case "montrer": s.show = { who: c.who, from: c.from || (s.show && s.node.charAt(0) === "@" ? s.show.from : s.node) }; s.node = "@montrer"; break;
      case "show": {
        var w = s.show, P = story.people[w.who] || {}, cf = P.confront || {}, r = cf[c.id] || cf[item(story, c.id).clue];
        s.shown = s.shown || {}; s.shown[w.who + "|" + c.id] = 1;
        if (r) { s.via = "montrer"; go(story, s, r); }
        else { var sh = P.shrug || []; w.line = sh.length ? sh[(Object.keys(s.shown).length) % sh.length] : null; s.node = "@haussement"; }
        break;
      }
      case "showNone": { var fr = s.show.from; s.show = null; go(story, s, fr); break; }
      // Two players apart (9.6): a deposit opened, a thing left or taken, the way back to the page.
      case "depotOpen": s.depot = { id: c.depot, mode: c.mode, from: s.depot && s.node === "@depot" ? s.depot.from : s.node, last: "" }; s.node = "@depot"; break;
      case "depotPut": depotPut(story, s, c.depot, c.item); break;
      case "depotTake": depotTake(story, s, c.depot, c.item); break;
      case "depotClose": { var df = s.depot.from; s.depot = null; go(story, s, df); break; }
      case "accuse": s.acc = { m: story.passages[s.node].accuse.mystery, from: s.node, step: "qui" }; s.node = "@accuse"; break;
      case "accuseWho": s.acc.qui = c.who; s.acc.step = "mobile"; break;
      case "accuseWhy": s.acc.mobile = c.motive; s.acc.step = "preuve"; break;
      case "accuseRedo": s.acc.qui = null; s.acc.mobile = null; s.acc.step = "qui"; break;
      case "accuseBack": { var fb = s.acc.from; s.acc = null; go(story, s, fb); break; }
      case "accuseProof": accuseDone(story, s, c.proof); break;
      case "jeuRoll": case "jeuStop": case "jeuAgain": case "jeuLeave": tavernSys(story, s, c); break;
      // A siege (8.0).
      case "repay": {
        var RD = promiseDef(story, c.promise);
        if (RD.gold) { s.gold = Math.max(0, s.gold - RD.gold); ev(s, "−" + money(story, RD.gold) + " · bourse : " + money(story, s.gold)); }
        else Object.keys(RD.stock || {}).forEach(function (k) { apply(story, s, { stock: (function () { var o = {}; o[k] = -RD.stock[k]; return o; })() }); });
        promiseEnd(story, s, c.promise, "tenue"); break;
      }
      case "council": voteOpen(story, s); break;
      case "councilVote": s.vote.hero = c.vote; break;
      case "councilEnd": s.holdWorld = true; voteEnd(story, s); break;
      case "battle": battleStart(story, s); break;
      case "duel": duelStart(story, s); break;
      case "duelMove": duelPass(story, s, c.move); break;
      case "duelEnd": duelEnd(story, s); break;
      case "puzzle": puzzleOpen(story, s); break;
      case "puzzleTry": puzzleTry(story, s, c.answer); break;
      case "puzzleForce": puzzleForce(story, s); break;
      // A closed room (8.3): putting an account in doubt before the one who gave it (or before oneself).
      case "belie": { var BA = accountDef(story, c.account); s.belied = s.belied || {}; s.belied[c.account] = s.turn; s.via = "doute"; go(story, s, BA.belie); break; }
      case "puzzleLeave": { var pf = s.puzzle.from; s.puzzle = null; go(story, s, pf); break; }
      case "bplace": { var bb = s.battle; bb.at[bb.troops[bb.i]] = c.post; bb.i++; if (bb.i >= bb.troops.length) bb.step = "wave"; break; }
      case "border": battleOrder(story, s, c); break;
      case "bnext": { var bn = s.battle, BN = battleDef(story, bn.id); if (bn.wave + 1 >= BN.waves.length || battleLostDay(story, s)) { s.holdWorld = true; battleEnd(story, s); } else { bn.wave++; bn.step = "wave"; bn.res = null; } break; }
      case "buy": s.gold -= c.price; s.items.push(c.item); ev(s, "Acheté : " + item(story, c.item).name + " (−" + money(story, c.price) + ", reste " + money(story, s.gold) + ")", "item"); if (item(story, c.item).reveals) apply(story, s, { reveal: item(story, c.item).reveals }); break;
      // At sea (8.1).
      case "craft": craft(story, s, c.recipe); break;
      case "vigil": s.vigilNight = nightKey(s); go(story, s, c.to); break;
      case "buyFood": s.gold -= c.price; s.food++; ev(s, "Un jour de vivres de plus (" + s.food + ")", "item"); break;
      case "sell": var at = s.items.indexOf(c.item); if (at >= 0) { var it = item(story, c.item), pr = c.price != null ? c.price : Math.floor(it.price * SELL_RATE); s.items.splice(at, 1); s.gold += pr; ev(s, "Vendu : " + it.name + " (+" + money(story, pr) + ")", "good"); } break;
      default: throw new Error("action inconnue " + c.sys);
    }
  }
  // Intent: start(Story, State) -> () ! gives the archetype's kit (world.start.kits), then enters the first passage
  function start(story, s) {
    s.events = [];
    if (s.tickDay == null) s.tickDay = day(s);
    if (story.heroes) { initHeroes(story, s); enter(story, s, story.start); return; }
    if (s.pv == null) s.pv = pvMax(s);
    // A voie's own kit (8.5) wins over its class's: the copiste has a pen case, not a lute.
    var kits = (W(story).start || {}).kits || {}, kit = (s.voie && ((story.voies || {})[s.voie] || {}).kit) || kits[s.arch] || [];
    kit.forEach(function (id) { s.items.push(id); if (item(story, id).ammo) s.arrows = (s.arrows || 0) + BOW_ARROWS; });
    enter(story, s, story.start);
  }

  var API = {
    FACE: FACE, FACE_KEYS: FACE_KEYS, ASPECT_KEYS: ASPECT_KEYS, ASPECT_MAX_WORDS: ASPECT_MAX_WORDS, personOf: personOf, aspectOf: aspectOf, quiOf: quiOf, nameForms: nameForms, faceErrors: faceErrors, REGARDS: REGARDS, mysterySolved: mysterySolved, happened: happened, TAVERN_GAMES_PER_DAY: TAVERN_GAMES_PER_DAY,
    ARCHS: ARCHS, archOf: archOf, usesOf: usesOf, plainOf: plainOf, marksOf: marksOf, TEXT_FX: TEXT_FX, MARK_KINDS: MARK_KINDS, MOODS: MOODS, keywordsOf: keywordsOf, keywordFor: keywordFor, trouve: trouve, moodOf: moodOf, TECHS: TECHS, techsOf: techsOf, partyView: partyView, cpv: cpv, cpvMax: cpvMax, FRONT: FRONT, DOMAINS: DOMAINS, EP: EP, EP_PER_LEVEL: EP_PER_LEVEL, MAX_LEVEL: MAX_LEVEL, DIFFS: DIFFS, LOYAL_AT: LOYAL_AT, SUCCESS: SUCCESS, STEP_HOURS: STEP_HOURS,
    setRng: setRng, setDice: setDice, nudgeOf: nudgeOf, ambianceOf: ambianceOf, AMBIANCES: AMBIANCES, isNightNow: function (s) { var h = s.time % 24; return h >= NIGHT_FROM || h < NIGHT_TO; }, DIFFICULTY: DIFFICULTY, featsOf: featsOf, endingsOf: endingsOf, endingOf: endingOf, fatesOf: fatesOf, fateCount: fateCount, freshState: freshState, level: level, pvMax: pvMax, bonus: bonus, chance: chance, rollTest: rollTest,
    evalCond: evalCond, describeCond: describeCond, textList: textList, view: view, allowed: allowed, target: target,
    depotTag: depotTag, depotFits: depotFits, depotPuts: depotPuts, depotTakes: depotTakes, chroniquesOf: chroniquesOf, DEPOT_FLAG: DEPOT_FLAG, stockShown: stockShown,
    apply: apply, enter: enter, choose: choose, start: start, present: present, loyal: loyal, clueCount: clueCount,
    PERIODS: PERIODS, periodOf: periodOf, hereNow: hereNow, contradict: contradict, contradictionOf: contradictionOf, faded: faded, regardOk: regardOk, rumorById: rumorById, momentOf: momentOf,
    money: money, prepare: prepare, questsOf: questsOf, questState: questState, questDone: questDone, questRefused: questRefused, questStarted: questStarted, questMissed: questMissed, questScenes: questScenes, remaining: remaining, actOf: actOf, interp: interp, nameOf: nameOf,
    isHero: isHero, heroIds: heroIds, heroSheet: heroSheet, heroLevel: heroLevel, setLead: setLead, souvOf: souvOf, souvKept: souvKept, souvCount: souvCount, levelOfEp: levelOfEp,
    stockNow: stockNow, dailyUse: dailyUse, daysLeft: daysLeft, priceFactor: priceFactor, promiseState: promiseState, PROMISE_STATES: PROMISE_STATES, promiseDef: promiseDef,
    leanOf: leanOf, memberIds: memberIds, memberAbsent: memberAbsent, motionDef: motionDef, VOTES: VOTES, tiesKnown: tiesKnown, TIE_KINDS: TIE_KINDS, rivalsOf: rivalsOf, campOk: campOk,
    battleDef: battleDef, heroForce: heroForce, tick: tick, reached: reached,
    weatherOf: weatherOf, weatherKind: weatherKind, weatherMod: weatherMod, roadTollOn: roadTollOn, seasonOf: seasonOf, woundsOpen: woundsOpen, woundDef: woundDef, woundDays: woundDays, FATIGUE_MAX: FATIGUE_MAX,
    traitOf: traitOf, traitWord: traitWord, practiceOf: practiceOf, TRAIT_MAX: TRAIT_MAX, DUEL_MOVES: DUEL_MOVES, puzzleRight: puzzleRight,
    secretsOf: secretsOf, secretKnown: secretKnown, secretDef: secretDef, interludeOf: interludeOf, autreForm: autreForm,
    doubt: doubt, accountBy: accountBy, topicSolved: topicSolved, dreadOf: dreadOf, dreadMax: dreadMax, dreadWord: dreadWord, dreadTrouble: dreadTrouble, attachOf: attachOf, ATTACH_MAX: ATTACH_MAX,
    LENS_EFFECTS: LENS_EFFECTS, reveal: reveal, veilsIn: veilsIn, unveil: unveil, veilInfo: veilInfo, veilsOf: veilsOf, veilMark: veilMark, lensHeld: lensHeld, lensLeft: lensLeft, lensDef: lensDef, veilCount: veilCount, VEIL_RE: VEIL_RE,
    CARD_TYPES: CARD_TYPES, SUITS: SUITS, SUIT_WORDS: SUIT_WORDS, RARITIES: RARITIES, THREAD_STATES: THREAD_STATES, cardInfo: cardInfo, filsOf: filsOf, DECK_FX: DECK_FX, GAIN_PLACES: GAIN_PLACES, LOSS_FROM: LOSS_FROM, resolve: resolve, stopOf: stopOf,
    item: item, weapon: weapon, armor: armor, useItem: useItem, day: day, timeLabel: timeLabel, routesFrom: routesFrom, isNight: isNight,
  };
  if (typeof module !== "undefined" && module.exports) module.exports = API; else root.Moteur = API;
})(typeof self !== "undefined" ? self : this);
