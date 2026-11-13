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
  // A pressing scene (passage tag `urgent`: seconds to choose) stays between these bounds.
  var URGENT_MIN = 5, URGENT_MAX = 120;
  // The tavern game, « la Chandelle » (passage tag `taverne`): a six-sided die thrown again and again, the sum kept,
  // a 1 snuffs the candle. The other player throws first and stops at a total between these bounds.
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
    heroique: { label: "Héroïque", tip: "Pour les vieux routiers : jets plus durs, adversaires plus solides.", roll: -10, foePv: 1.25, foeHit: 10 },
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
    Object.keys(story.passages).forEach(function (id) {
      (story.passages[id].choices || []).forEach(function (c) {
        if (c.back == null || c.back === true) return;
        c.to = c.back;
        if (!c.label) { var tp = story.passages[c.back]; c.label = c.back === "@route" ? "Reprendre la route" : "Revenir : " + cap(String((tp && (tp.backName || tp.title)) || c.back).replace(/\*/g, "")); c.autoBack = true; }
      });
    });
    try { Object.defineProperty(story, "__prepared", { value: true, enumerable: false }); } catch (e) { story.__prepared = true; }
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
      pv: null, fatigue: 0, time: START_HOUR, place: (w.start && w.start.place) || null, known: {}, people: {}, travel: null, combat: null,
      clock: {}, seen: {}, ret: null, events: [], toutJouer: opts.toutJouer !== false, turn: 0, routesDone: {},
      difficulty: DIFFICULTY[opts.difficulty] ? opts.difficulty : "aventurier", stats: {}, feats: {}, beasts: {}, ironman: !!opts.ironman, regard: {},
    };
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
    return "Jour " + day(s) + ", " + part;
  }
  function clueCount(story, s, rev) { return Object.keys(s.clues).filter(function (k) { return story.clues[k] && story.clues[k].rev === rev; }).length; }
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
    var base = hs ? ((ARCHS[hs.arch] || ARCHS.guerrier).bonus[dom] || 0) : who ? (((story.companions || {})[who] || {}).bonus || {})[dom] || 0 : ((ARCHS[s.arch] || ARCHS.guerrier).bonus[dom] || 0);
    var b = base + (base >= 20 ? 3 : 1) * ((hs ? levelOfEp(hs.ep) : level(s)) - 1);
    if (!who) {
      var seenKinds = {};
      s.items.forEach(function (id) { var it = item(story, id); if (it.bonus && it.bonus[dom] && !seenKinds[id]) { seenKinds[id] = 1; b += it.bonus[dom]; } });
      b -= s.fatigue * 5;
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
    return h;
  }
  function rollTest(story, s, t, who) {
    var b = bonus(story, s, t.dom, who), help = helpOf(story, s, t), diff = t.diff || 0, lv = diffOf(s).roll;
    var r = openD100(true), total = r.total + b + diff + help + lv, ok = total >= SUCCESS;
    stat(s, "tests"); if (ok) stat(s, "testsOk"); if (r.rolls[0] >= 96) stat(s, "open");
    return { die: r.total, rolls: r.rolls, bonus: b, help: help, diff: diff, total: total, target: SUCCESS, ok: ok,
      line: "d100 ouvert " + (r.rolls.length > 1 ? "(" + r.rolls.join(" ") + ") " : "") + r.total + " + " + DOMAINS[t.dom] + " " + b +
        (diff ? (diff > 0 ? " + " : " − ") + Math.abs(diff) + (DIFFS[diff] ? " (" + DIFFS[diff] + ")" : "") : "") + (help ? (help > 0 ? " + " : " − ") + Math.abs(help) + " (aide)" : "") + diffTerm(s) +
        " = " + total + " (il faut " + SUCCESS + ")" };
  }
  function chance(story, s, t, who) {
    var need = SUCCESS - bonus(story, s, t.dom, who) - (t.diff || 0) - helpOf(story, s, t) - diffOf(s).roll;
    return Math.max(5, Math.min(95, 101 - need));
  }

  // ------------------------------------------------------------------ conditions (JSON)
  function rng(v, lo, hi) { return (lo == null || v >= lo) && (hi == null || v <= hi); }
  function evalCond(story, s, c) {
    if (c == null || c === true) return true;
    if (c === false) return false;
    if (typeof c === "string") return !!s.flags[c];
    if (Array.isArray(c)) return c.every(function (x) { return evalCond(story, s, x); });
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
    if ("quest" in c) return !!s.flags["quete:" + c.quest];
    // is: { key: value | [values] | null } reads a state set by fx.set (null: no value yet).
    if ("is" in c) return Object.keys(c.is).every(function (k) { var v = stateOf(s, k); return c.is[k] === null ? v == null : [].concat(c.is[k]).indexOf(v) >= 0; });
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
    throw new Error("condition inconnue : " + JSON.stringify(c));
  }
  // takes: the time a scene spends, told to the reader in brackets (Clément, 12/11). The clock moves to that hour.
  var TAKES = {
    evening: { at: 19, skip: function (h) { return h >= 19; }, say: "Le soir tombe.", ahead: "jusqu'au soir" },
    night: { at: 22, skip: function (h) { return h >= 22 || h < NIGHT_TO; }, say: "La nuit est tombée.", ahead: "jusqu'à la nuit" },
    morning: { at: 7, skip: function (h) { return h >= 6 && h < 10; }, say: "La nuit passe. Le jour se lève.", ahead: "jusqu'au matin", end: true },
    day: { at: 7, skip: function (h) { return h >= NIGHT_TO && h < NIGHT_FROM; }, say: "La nuit passe. Le jour se lève.", ahead: "jusqu'au jour" },
    noon: { at: 12, skip: function (h) { return h >= 12 && h < 19; }, say: "La matinée passe.", ahead: "jusqu'à midi" },
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
      bits.forEach(function (b) { ev(s, b.t.replace(/\{n\}/g, n) + " (" + b.d + ")", b.good ? "good" : "bad"); });
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
    if ("lead" in c) return "Il faut que " + nameOf(story, c.lead) + " mène le groupe.";
    if ("souv" in c) return "Ce souvenir n'est plus à toi.";
    if ("souvenirs" in c) return c.min != null ? "Il faut avoir gardé au moins " + c.min + " souvenirs." : "Il faut avoir donné plus de souvenirs.";
    if ("night" in c) return c.night ? "Seulement la nuit." : "Seulement le jour.";
    return "Ce chemin est fermé pour l'instant.";
  }
  function nameOf(story, c) { return ((story.companions || {})[c] || {}).name || c; }
  function questTitle(story, id) { var q = (story.quests || []).filter(function (x) { return x.id === id; })[0]; return q ? q.title : id; }

  // ------------------------------------------------------------------ text
  // {autre}: in a game with several players, the other players' heroes (s.allies, set by src/multi.js).
  function interp(s, t) { return String(t).replace(/\{autre\}/g, s.allies && s.allies.length ? s.allies.join(" et ") : "l'autre").replace(/\{hero\}/g, heroName(s)).replace(/\{niveau\}/g, String(level(s))).replace(/\{marque\}/g, String(s.mark))
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
    if (t.first && s.seen[node] > 1) return false;
    if (t.again && !(s.seen[node] > 1)) return false;
    return true;
  }
  var SCENE_TAGS = ["with", "without", "when", "after", "before"];
  function sceneOk(story, s, p) { return !SCENE_TAGS.some(function (k) { return p[k] != null; }) || tagsOk(story, s, p, null); }
  function textList(story, s, list, node) {
    var out = [];
    node = node || s.node;
    (list || []).forEach(function (t, i) {
      if (typeof t === "string") out.push(interp(s, t));
      // by / cases: one paragraph per value of a state, else for any other value or none.
      else if (t && typeof t === "object" && t.by != null && t.cases) {
        if (!tagsOk(story, s, t, node) || !evalCond(story, s, t.if)) return;
        var cv = stateOf(s, t.by), txt = cv != null && t.cases[cv] != null ? t.cases[cv] : t.else;
        if (txt != null) out.push(interp(s, txt));
      }
      else if (t && typeof t === "object") {
        var ok = tagsOk(story, s, t, node) && evalCond(story, s, t.if);
        // once: told during one visit only (a clue is given once, never repeated).
        if (ok && t.once) {
          s.once = s.once || {}; var key = node + "#" + i, visit = s.seen[node] || 1;
          if (s.once[key] == null) s.once[key] = visit; else if (s.once[key] !== visit) return;
        }
        if (ok && t.text != null) out.push(interp(s, t.text));
        else if (!ok && t.else != null) out.push(interp(s, t.else));
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
    [].concat(fx.flag || [], fx.flags || []).forEach(function (f) { s.flags[f] = true; });
    // set: { key: value }, a state with one value at a time (written as the flag "key=value", read by has or is).
    if (fx.set) Object.keys(fx.set).forEach(function (k) {
      Object.keys(s.flags).forEach(function (f) { if (f.indexOf(k + "=") === 0) delete s.flags[f]; });
      if (fx.set[k] != null) s.flags[k + "=" + fx.set[k]] = true;
    });
    [].concat(fx.unflag || []).forEach(function (f) { delete s.flags[f]; });
    [].concat(fx.clue || []).forEach(function (id) {
      var cl = story.clues[id];
      if (!cl) throw new Error("indice inconnu " + id);
      if (!s.clues[id]) { s.clues[id] = true; ev(s, "Indice (" + ((story.mysteries[cl.rev] || {}).title || cl.rev) + ") : " + cl.text, "clue"); }
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
      if (s.met[c2] !== "party") { var fresh = !s.met[c2]; s.met[c2] = "party"; if (s.conf[c2] == null) s.conf[c2] = CONF_START_PARTY; if (s.fear[c2] == null) s.fear[c2] = 0; if (fresh) carryRep(s, c2); ev(s, story.companions[c2].name + " rejoint le groupe.", "good"); }
    });
    [].concat(fx.met || []).forEach(function (c2) {
      if (!story.companions[c2]) throw new Error("compagnon inconnu " + c2);
      if (!s.met[c2]) { s.met[c2] = "met"; if (s.conf[c2] == null) s.conf[c2] = CONF_START_MET; if (s.fear[c2] == null) s.fear[c2] = 0; carryRep(s, c2); }
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
        ev(s, story.companions[k].name + " · " + m[1] + " " + (d > 0 ? "+" : "−") + Math.abs(d), (d > 0) === (key === "conf") ? "good" : "bad");
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
    if (fx.relicLose && s.relics.length) { var lost = s.relics.pop(); s.flags["vole:" + lost] = true; ev(s, "Perdue : " + story.relics[lost], "bad"); }
    [].concat(fx.item || []).forEach(function (it) {
      if (!(story.items || {})[it]) throw new Error("objet inconnu " + it);
      var I = story.items[it];
      if (I.unique !== false && s.items.indexOf(it) >= 0) return;
      s.items.push(it); ev(s, "Objet : " + I.name, "item");
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
    if (fx.time) { s.time += fx.time; }
    [].concat(fx.stamp || []).forEach(function (k) { s.stamps = s.stamps || {}; if (s.stamps[k] == null) s.stamps[k] = day(s); });
    if (fx.until != null) { s.time += ((fx.until - hour(s)) + 24) % 24 || 24; } // sleep or wait until the next such hour
    [].concat(fx.reveal || []).forEach(function (pl) {
      if (!((story.world || {}).places || {})[pl]) throw new Error("lieu inconnu " + pl);
      if (!s.known[pl]) { s.known[pl] = true; ev(s, "Nouveau lieu sur ta carte : " + story.world.places[pl].name, "map"); }
    });
    [].concat(fx.meet || []).forEach(function (pe) {
      if (!(story.people || {})[pe]) throw new Error("personnage inconnu " + pe);
      if (!s.people[pe]) { s.people[pe] = true; ev(s, "Rencontré : " + story.people[pe].name, "people"); }
    });
    if (fx.regard) for (k in fx.regard) {
      if (!(story.people || {})[k] && !(story.companions || {})[k]) throw new Error("personnage inconnu " + k);
      if (!REGARDS[fx.regard[k]]) throw new Error("regard inconnu " + fx.regard[k]);
      s.regard = s.regard || {}; s.regard[k] = fx.regard[k];
    }
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
    var legs = (r.legs || []).filter(function (l) { return l.step === t.step && (l.dir == null || l.dir === dirOf(r, t)) && !s.seen[l.passage] && evalCond(story, s, l.if); });
    if (legs.length) { t.phase = "event"; enter(story, s, legs[0].passage); return; }
    if (!t.fast) {
      var region = (W(story).regions || {})[t.region] || {};
      var pool = (region.events || []).map(function (id) { return (W(story).events || {})[id]; }).filter(function (e) {
        return e && !(e.once !== false && s.seen[e.passage]) && evalCond(story, s, e.if);
      });
      var chanceEv = region.chance == null ? 0.6 : region.chance;
      if (pool.length && RNG() < chanceEv) {
        var tot = 0; pool.forEach(function (e) { tot += e.weight || 1; });
        var x = RNG() * tot, chosen = pool[0];
        for (var i = 0; i < pool.length; i++) { x -= pool[i].weight || 1; if (x <= 0) { chosen = pool[i]; break; } }
        t.phase = "event"; enter(story, s, chosen.passage); return;
      }
    }
    t.phase = "quiet"; s.node = "@road";
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
        flank: !!d.flank, ranged: !!d.ranged, down: false, open: false, trapped: 0, asleep: false });
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
  function blow(s, from, to, dmg, kind) { var c = s.combat; if (c) (c.hits = c.hits || []).push({ from: from, to: to, dmg: dmg || 0, kind: kind || "arme" }); }
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
    if (outcome === "lose") { s.pv = 1; ev(s, "Tu t'effondres. Ce n'est pas la fin.", "bad"); }
    if (outcome === "win") { ev(s, "Victoire.", "good"); stat(s, "wins"); }
    if (outcome === "flee") stat(s, "flees");
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
    var out = [];
    (sh.sells || []).forEach(function (x) {
      var it = item(story, x.item);
      if (it.unique !== false && s.items.indexOf(x.item) >= 0) return;
      out.push({ sys: "buy", item: x.item, price: x.price, group: "shop", label: "Acheter " + it.name + " · " + money(story, x.price, true), if: { gold: { min: x.price } }, why: "Il te faut " + money(story, x.price) + "." });
    });
    if (sh.food) out.push({ sys: "buyFood", price: sh.food, group: "shop", label: "Acheter un jour de vivres · " + money(story, sh.food, true), if: { gold: { min: sh.food } }, why: "Il te faut " + money(story, sh.food) + "." });
    if (sh.buys !== false) {
      var seen = {};
      s.items.forEach(function (id) {
        var it = item(story, id);
        if (seen[id] || !it.price || it.kind === "document" || it.keep) return; seen[id] = 1;
        out.push({ sys: "sell", item: id, group: "shop", label: "Vendre " + it.name + " · " + money(story, Math.floor(it.price * SELL_RATE), true) });
      });
    }
    return out;
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
  function routeById(story, id) { return (W(story).routes || []).filter(function (x) { return x.id === id; })[0]; }
  // Intent: compute(Story, State) -> View
  // Why: one place that says what the reader sees now (a written passage, the road, the camp, a fight) and every
  // choice with whether it is allowed and why not, so the page and the validator play the same game.
  function ownChoices(story, s, p) {
    var here = s.node && story.passages[s.node] === p ? s.node : null;
    return (p.choices || []).filter(function (c) {
      if (hiddenChoice(story, s, c) || (c.who && !present(s, c.who))) return false;
      if (c.back === true && (!s.hubLast || s.hubLast === here)) return false;
      if (!tagsOk(story, s, c, here)) return false;
      if (c.once && here && (s.once || {})["c|" + here + "|" + c.label]) return false;
      // A scene is only offered when its cast and its hour are there (the tags of the passages it leads to).
      var ts = [];
      (function add(to) { if (Array.isArray(to)) to.forEach(function (x) { add(x.to); }); else if (to != null) ts.push(to); })([{ to: c.to }, { to: c.win && c.win.to }, { to: c.lose && c.lose.to }]);
      var scenes = ts.map(function (t) { return story.passages[t]; });
      if (scenes.length && scenes.every(function (tp) { return tp && !sceneOk(story, s, tp); })) return false;
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
    var v, p = null;
    if (BUILTIN[s.node]) v = BUILTIN[s.node](story, s);
    else {
      p = story.passages[s.node];
      var cs = ownChoices(story, s, p);
      // back: true, the scene ends on the way back to the crossroads the reader came from, its label written by the engine.
      if (p.back && s.hubLast && s.hubLast !== s.node && story.passages[s.hubLast]) {
        var hp = story.passages[s.hubLast];
        cs = cs.concat([{ to: s.hubLast, label: "Revenir : " + interp(s, hp.title || (W(story).places[hp.place] || {}).name || "…"), auto: "back" }]);
      }
      if (!cs.length) { var back = backChoice(story, s, p); if (back) cs = [back]; }
      cs = cs.concat(shopChoices(story, s, p), tavernChoices(story, s, p), travelChoices(story, s, p), leadChoices(story, s, p));
      v = { title: interp(s, p.title || ""), kind: p.end ? "end" : "passage", text: textList(story, s, p.text), choices: cs, passage: p };
      // A scene that spends the night tells it at its end; one that waits for the evening, at its start.
      if (s.took && s.took.node === s.node && s.took.turn === s.turn) v.text[s.took.end ? "push" : "unshift"]("*(" + s.took.say + ")*");
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
      if (c.back === true && !c.label) { var hb = story.passages[s.hubLast] || {}; c = Object.assign({}, c, { label: "Revenir : " + cap(interp(s, String(hb.backName || hb.title || "").replace(/\*/g, ""))), autoBack: true }); }
      // Guarantee: every button has words. One left without (a scenario fault) says where it goes.
      if (typeof c.label !== "string" || !c.label) {
        var lt = typeof c.to === "string" && story.passages[c.to];
        c = Object.assign({}, c, { label: lt ? cap(interp(s, String(lt.backName || lt.title || "Continuer").replace(/\*/g, ""))) : "Continuer" });
        guard(s, "un choix sans texte de bouton");
      }
      var a = allowed(story, s, p, c); return Object.assign({}, c, { ok: a.ok, why: a.why, goes: backGoes(story, s, c) || goesTo(story, s, p, c), note: c.refuse ? "refus définitif" : aheadOf(story, s, c) || c.note, chance: c.test ? chance(story, s, c.test, c.who) : null }); });
    if (p) {
      // Guarantee: no twin buttons. Of several choices with the same words, the one that can be taken stays.
      var byLabel = {};
      v.choices.forEach(function (c) { if (!c.sys) (byLabel[c.label] = byLabel[c.label] || []).push(c); });
      Object.keys(byLabel).forEach(function (l) {
        var tw = byLabel[l]; if (tw.length < 2) return;
        var keep = tw.filter(function (c) { return c.ok; })[0] || tw[0];
        if (tw.filter(function (c) { return c.ok; }).length > 1) guard(s, "deux choix possibles portent le même texte « " + l.slice(0, 40) + " »");
        v.choices = v.choices.filter(function (c) { return tw.indexOf(c) < 0 || c === keep; });
      });
      // Guarantee: no dead end. When nothing can be taken, the first choice opens rather than leaving the reader stuck.
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
    return v;
  }
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
    var tk = tp && takesOf(s, tp.takes);
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
  function allowed(story, s, p, c) {
    if (c.if && !evalCond(story, s, c.if)) return { ok: false, why: c.why || describeCond(story, c.if) };
    if (c.exit && s.toutJouer) {
      var act = (p && p.act) || (s.lastAct);
      var left = remaining(story, s, act);
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
    if (to === "@team") { var tm = (s.teams || {})[s.team] || {}; var st0 = tm.resume || ((story.teams || {})[s.team] || {}).start; if (!st0) throw new Error("@team : aucune équipe à reprendre"); delete tm.resume; return st0; }
    return to;
  }

  // ------------------------------------------------------------------ moving
  function enter(story, s, id) {
    if (s.evIn === false) s.evIn = true;
    if (id === "@camp") { s.node = "@camp"; return; }
    if (id === "@route") { if (!s.travel) throw new Error("@route hors d'un voyage (depuis " + s.node + ")"); advanceTravel(story, s); return; }
    if (!story.passages[id]) throw new Error("passage inconnu " + id + " (depuis " + s.node + ")");
    if (story.passages[id].hub) { var b = dueBanter(story, s, story.passages[id].act); if (b) { s.ret = id; id = b; } }
    s.node = id;
    var p = story.passages[id];
    if (!sceneOk(story, s, p)) guard(s, "scène jouée alors que ses tags (with, without, when, after, before) ne sont pas remplis");
    if (p.act) s.lastAct = p.act;
    // A quest begun and now out of reach (its act is over, or its `closes` holds) is told once, and the journal keeps it.
    (story.quests || []).forEach(function (q) { if (!s.flags["quete-manquee:" + q.id] && questStarted(s, q) && questMissed(story, s, q)) { s.flags["quete-manquee:" + q.id] = true; ev(s, "Quête manquée : " + q.title + ".", "quest"); } });
    (story.quests || []).forEach(function (q) { if (q.start === id && s.seen[id] && questOpen(story, s, q)) ev(s, "(Tu reprends : " + q.title + ".)", "quest"); });
    if (p.place) { s.place = p.place; s.known[p.place] = true; }
    if (p.hub || p.routes) s.hubLast = id;
    var first = !s.seen[id];
    s.seen[id] = (s.seen[id] || 0) + 1;
    (story.quests || []).forEach(function (q) { if (q.start === id && !s.flags["quete-vue:" + q.id]) { s.flags["quete-vue:" + q.id] = true; ev(s, "Nouvelle quête : " + q.title, "quest"); } });
    var tk = takesOf(s, p.takes); s.took = null;
    if (tk) { s.time += tk.hours; s.took = { node: id, turn: s.turn, say: tk.say, end: tk.end }; }
    if (first) apply(story, s, p.fx);
    apply(story, s, p.fxEvery);
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
    { id: "limier", title: "Fin limier", desc: "Réunir dix indices.", test: function (st, s) { return Object.keys(s.clues || {}).length >= 10; } },
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
    return f || list.filter(function (e) { return e.id === s.node; })[0] || { id: s.node, title: String(p.title || s.node) };
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
    if (c.once && s.node) { s.once = s.once || {}; s.once["c|" + s.node + "|" + c.label] = 1; }
    if (c.refuse) { var rq = questOfRefusal(story, s, c); if (rq) { s.flags["quete-refus:" + rq.id] = true; ev(s, "Quête refusée : " + rq.title + ". Tu n'y reviendras pas.", "quest"); } else guard(s, "refuse : aucune quête ouverte ici"); }
    s.last = null;
    if (c.test) {
      var roll = rollTest(story, s, c.test, c.who);
      ev(s, (c.who ? nameOf(story, c.who) + " : " : "") + "jet de " + (c.test.label || DOMAINS[c.test.dom]) + " · " + roll.line + " → " + (roll.ok ? "réussite" : "raté"), (roll.ok ? "good" : "bad") + " roll", { roll: roll });
      apply(story, s, c.fx);
      var br = roll.ok ? c.win : c.lose;
      s.last = roll.ok ? "win" : "lose";
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
      case "jeu": tavernSit(story, s, c); break;
      case "jeuRoll": case "jeuStop": case "jeuAgain": case "jeuLeave": tavernSys(story, s, c); break;
      case "buy": s.gold -= c.price; s.items.push(c.item); ev(s, "Acheté : " + item(story, c.item).name + " (−" + money(story, c.price) + ", reste " + money(story, s.gold) + ")", "item"); break;
      case "buyFood": s.gold -= c.price; s.food++; ev(s, "Un jour de vivres de plus (" + s.food + ")", "item"); break;
      case "sell": var at = s.items.indexOf(c.item); if (at >= 0) { var it = item(story, c.item), pr = Math.floor(it.price * SELL_RATE); s.items.splice(at, 1); s.gold += pr; ev(s, "Vendu : " + it.name + " (+" + money(story, pr) + ")", "good"); } break;
      default: throw new Error("action inconnue " + c.sys);
    }
  }
  // Intent: start(Story, State) -> () ! gives the archetype's kit (world.start.kits), then enters the first passage
  function start(story, s) {
    s.events = [];
    if (story.heroes) { initHeroes(story, s); enter(story, s, story.start); return; }
    if (s.pv == null) s.pv = pvMax(s);
    var kit = ((W(story).start || {}).kits || {})[s.arch] || [];
    kit.forEach(function (id) { s.items.push(id); if (item(story, id).ammo) s.arrows = (s.arrows || 0) + BOW_ARROWS; });
    enter(story, s, story.start);
  }

  var API = {
    FACE: FACE, FACE_KEYS: FACE_KEYS, faceErrors: faceErrors, REGARDS: REGARDS, mysterySolved: mysterySolved, happened: happened, TAVERN_GAMES_PER_DAY: TAVERN_GAMES_PER_DAY,
    ARCHS: ARCHS, TECHS: TECHS, techsOf: techsOf, partyView: partyView, cpv: cpv, cpvMax: cpvMax, FRONT: FRONT, DOMAINS: DOMAINS, EP: EP, EP_PER_LEVEL: EP_PER_LEVEL, MAX_LEVEL: MAX_LEVEL, DIFFS: DIFFS, LOYAL_AT: LOYAL_AT, SUCCESS: SUCCESS, STEP_HOURS: STEP_HOURS,
    setRng: setRng, setDice: setDice, nudgeOf: nudgeOf, ambianceOf: ambianceOf, AMBIANCES: AMBIANCES, isNightNow: function (s) { var h = s.time % 24; return h >= NIGHT_FROM || h < NIGHT_TO; }, DIFFICULTY: DIFFICULTY, featsOf: featsOf, endingsOf: endingsOf, endingOf: endingOf, freshState: freshState, level: level, pvMax: pvMax, bonus: bonus, chance: chance, rollTest: rollTest,
    evalCond: evalCond, describeCond: describeCond, textList: textList, view: view, allowed: allowed, target: target,
    apply: apply, enter: enter, choose: choose, start: start, present: present, loyal: loyal, clueCount: clueCount,
    money: money, prepare: prepare, questsOf: questsOf, questState: questState, questDone: questDone, questRefused: questRefused, questStarted: questStarted, questMissed: questMissed, questScenes: questScenes, remaining: remaining, actOf: actOf, interp: interp, nameOf: nameOf,
    isHero: isHero, heroIds: heroIds, heroSheet: heroSheet, heroLevel: heroLevel, setLead: setLead, souvOf: souvOf, souvKept: souvKept, souvCount: souvCount, levelOfEp: levelOfEp,
    item: item, weapon: weapon, armor: armor, useItem: useItem, day: day, timeLabel: timeLabel, routesFrom: routesFrom, isNight: isNight,
  };
  if (typeof module !== "undefined" && module.exports) module.exports = API; else root.Moteur = API;
})(typeof self !== "undefined" ? self : this);
