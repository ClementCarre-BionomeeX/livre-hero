"use strict";
// Story checker: the handoff's "test de tous les chemins", run on a JSON story (in the page after each generation, and
// in Node). Static checks (schema, every reference), then many random play-throughs (uniform, curious, all-success,
// all-failure, with and without "on fait tout"), then the quest rules: every quest can be finished, and every side
// quest leaves a tag that a later act or an ending reads (its echo).
(function (root) {
  var M = typeof module !== "undefined" && module.exports ? require("./moteur.js") : root.Moteur;

  var COND_KEYS = ["voie", "trouvaille", "trouvailles", "is", "count", "has", "not", "all", "any", "clues", "clue", "mark", "present", "loyal", "met", "gone", "conf", "fear", "relics", "relic",
    "given", "item", "gold", "food", "pv", "clock", "fac", "level", "day", "since", "night", "seen", "arch", "quest", "place", "known", "person", "party",
    "lead", "away", "team", "souv", "souvenirs", "heroLevel", "second", "via", "regard", "fresh", "stock", "days", "promise", "vote", "lean", "battle", "camp", "missed",
    "temps", "saison", "blessure", "cicatrice", "fatigue", "trait", "duel",
    "recit", "doute", "dementi", "silences", "geste", "poids", "angoisse", "attache",
    "secret", "confie", "garde", "savoir", "lu", "voile", "voiles", "lens", "fil", "carteJouee"];
  // The siege's conditions (8.0) carry a second key (is, member, hero, losses): they are read by their first key.
  var SIEGE_KEYS = ["depot", "fil", "voiles", "stock", "days", "promise", "vote", "lean", "battle", "camp", "missed", "fatigue", "trait", "duel"];
  var FX_KEYS = ["voie", "regard", "aspect", "qui", "resume", "set", "flag", "flags", "unflag", "clue", "mark", "ep", "catchup", "catchupWhy", "join", "met", "leave", "conf", "fear", "fac", "relic",
    "give", "relicLose", "item", "drop", "gold", "food", "pv", "rest", "time", "until", "stamp", "reveal", "meet", "clock", "quest", "questSeen", "note", "noteCls",
    "assign", "team", "regroup", "away", "lead", "leadQuiet", "learn", "souv", "souvBack", "catchupAll", "awayUnless",
    "stock", "promise", "keep", "break", "forgive", "sway", "sound", "camp", "tie",
    "meteo", "blessure", "soigner", "guerir", "fatigue", "trait", "pratique",
    "recit", "geste", "angoisse", "attache",
    "secret", "surprend", "confier", "recharge", "devoile", "fil", "elan"];
  var DOM_KEYS = Object.keys(M.DOMAINS);

  // Collects every tag a condition reads (for the echo check).
  function readTags(c, out) {
    if (c == null || typeof c === "boolean") return out;
    if (typeof c === "string") { out.push(c); return out; }
    if (Array.isArray(c)) { c.forEach(function (x) { readTags(x, out); }); return out; }
    if ("has" in c) out.push(c.has);
    // { is: { key: "value" } } reads the state set by set: { key: "value" }, which also stands as the tag "key=value".
    if (c.is && typeof c.is === "object") Object.keys(c.is).forEach(function (k) { [].concat(c.is[k]).forEach(function (v) { out.push(k + "=" + v); }); });
    if ("quest" in c) out.push("quete:" + c.quest);
    if ("not" in c) readTags(c.not, out);
    if ("all" in c) readTags(c.all, out);
    if ("any" in c) readTags(c.any, out);
    if ("count" in c) readTags(c.count, out);
    return out;
  }
  function eachCond(p, f) {
    (p.text || []).forEach(function (t) { if (t && typeof t === "object") f(t.if, "texte"); });
    (p.choices || []).forEach(function (c) {
      f(c.if, "choix"); f(c.hide, "choix");
      if (Array.isArray(c.to)) c.to.forEach(function (x) { f(x.if, "destination"); });
      [c.win, c.lose].forEach(function (b) { if (b && Array.isArray(b.to)) b.to.forEach(function (x) { f(x.if, "destination"); }); });
      if (c.test) (c.test.help || []).forEach(function (h) { f(h.if, "aide"); });
    });
  }
  function eachFx(p, f) {
    f(p.fx); f(p.fxEvery);
    (p.choices || []).forEach(function (c) { f(c.fx); if (c.win) f(c.win.fx); if (c.lose) f(c.lose.fx); });
  }
  function targetsOf(c) {
    var out = [];
    function add(to) { if (Array.isArray(to)) to.forEach(function (x) { add(x.to); }); else if (to != null) out.push(to); }
    add(c.to); if (c.win) add(c.win.to); if (c.lose) add(c.lose.to);
    return out;
  }

  // Intent: validate(Story) -> Problem*
  var RETURN_VERB = /^(Revenir|Retourner|Redescendre|Remonter|Rentrer|Repartir|Ressortir|Sortir|Regagner|Rejoindre|Reprendre la route)\b/;
  // Intent: cardCheck(Story, E, W) ! the cards (9.7): every card known, every stop with its way on, every resolution
  // naming what exists, every paragraph tag naming what exists; and the promise of the engine: a card the reader can
  // hold, played at a stop that takes its kind, always opens a scene (a resolution without condition covers it).
  function cardCheck(story, E, W) {
    var P = story.passages, C = story.cartes || {}, F = story.fils || {}, stops = {}, any = false;
    Object.keys(C).forEach(function (k) {
      var c = C[k], w = "Carte « " + k + " »"; any = true;
      if (!c.titre) E(w + " : sans titre.");
      if (!M.CARD_TYPES[c.type]) E(w + " : type « " + c.type + " » inconnu (" + Object.keys(M.CARD_TYPES).join(", ") + ").");
      if (!M.SUITS[c.enseigne]) E(w + " : enseigne « " + c.enseigne + " » inconnue (" + Object.keys(M.SUITS).join(", ") + ").");
      if (c.rarete != null && !M.RARITIES[c.rarete]) E(w + " : rareté « " + c.rarete + " » inconnue (" + Object.keys(M.RARITIES).join(", ") + ").");
      if (c.elan != null && !(c.elan >= 0 && c.elan <= 3 && c.elan === Math.floor(c.elan))) E(w + " : elan, un entier de 0 à 3.");
      [c.ouvre, c.noue].forEach(function (x) { if (x != null && !F[x]) E(w + " : fil « " + x + " » inconnu (fils)."); });
    });
    Object.keys(F).forEach(function (k) { if (!F[k].titre) E("Fil « " + k + " » : sans titre."); });
    var deck = (story.jeu || {}).deck || [];
    deck.forEach(function (k) { if (!C[k]) E("Jeu : carte « " + k + " » du deck inconnue (cartes)."); });
    Object.keys(P).forEach(function (id) {
      var H = M.stopOf(P[id]); if (!H) return; any = true;
      var w = "§ " + id + " (halte)";
      if (!H.id) E(w + " : halte sans id.");
      else if (stops[H.id]) E(w + " : halte « " + H.id + " » déjà déclarée en § " + stops[H.id] + ".");
      else stops[H.id] = id;
      if (!H.suite || !P[H.suite]) E(w + " : suite « " + H.suite + " » inconnue (où l'on va après la scène de la carte).");
      [].concat(H.types || []).forEach(function (t) { if (!M.CARD_TYPES[t]) E(w + " : type « " + t + " » inconnu."); });
    });
    if (any && !deck.length) W("Jeu : aucun deck (jeu.deck) ; le lecteur n'aura de cartes que celles que l'appli lui donne.");
    var res = Object.keys(P).filter(function (id) { return P[id].resout; });
    res.forEach(function (id) {
      var r = P[id].resout, w = "§ " + id + " (résolution)";
      if (r.carte == null && r.type == null) E(w + " : resout demande type ou carte.");
      [].concat(r.type || []).forEach(function (t) { if (!M.CARD_TYPES[t]) E(w + " : type « " + t + " » inconnu."); });
      [].concat(r.carte || []).forEach(function (x) { if (!C[x]) E(w + " : carte « " + x + " » inconnue."); });
      [].concat(r.halte || []).forEach(function (x) { if (!stops[x]) E(w + " : halte « " + x + " » inconnue."); });
      [].concat(r.enseigne || []).forEach(function (x) { if (!M.SUITS[x]) E(w + " : enseigne « " + x + " » inconnue."); });
      [].concat(r.fil || []).forEach(function (x) { if (!F[x]) E(w + " : fil « " + x + " » inconnu."); });
    });
    // Paragraph and choice tags of the cards.
    Object.keys(P).forEach(function (id) {
      var p = P[id];
      (p.text || []).filter(function (t) { return t && typeof t === "object"; }).concat(p.choices || []).forEach(function (t) {
        var w = "§ " + id;
        [].concat(t.carte || []).forEach(function (x) { if (!C[x]) E(w + " : tag carte, « " + x + " » inconnue."); });
        [].concat(t.type || []).forEach(function (x) { if (!M.CARD_TYPES[x]) E(w + " : tag type, « " + x + " » inconnu."); });
        [].concat(t.enseigne || []).forEach(function (x) { if (!M.SUITS[x]) E(w + " : tag enseigne, « " + x + " » inconnue."); });
        [].concat(t.halte || []).forEach(function (x) { if (!stops[x]) E(w + " : tag halte, « " + x + " » inconnue."); });
        [].concat(t.fil || [], t.noue || []).forEach(function (x) { if (!F[x]) E(w + " : tag fil, « " + x + " » inconnu."); });
      });
    });
    // The promise: each card, at each stop that takes its kind, has a resolution that always holds.
    var sure = res.filter(function (id) { var r = P[id].resout; return r.if == null && r.fil == null && r.enseigne == null && !["with", "without", "when", "after", "before"].some(function (k) { return P[id][k] != null; }); });
    Object.keys(stops).forEach(function (h) {
      var H = M.stopOf(P[stops[h]]);
      Object.keys(C).forEach(function (k) {
        var c = C[k];
        if (H.types && [].concat(H.types).indexOf(c.type) < 0) return;
        var ok = sure.some(function (id) { var r = P[id].resout; return (r.carte != null ? [].concat(r.carte).indexOf(k) >= 0 : [].concat(r.type).indexOf(c.type) >= 0) && (r.halte == null || [].concat(r.halte).indexOf(h) >= 0); });
        if (!ok) E("Halte « " + h + " » : la carte « " + k + " » (" + M.CARD_TYPES[c.type] + ") n'y a aucune résolution sans condition ; écrire un passage resout: { type: \"" + c.type + "\" } (avec ou sans halte).");
      });
    });
  }
  function staticCheck(story) {
    var errs = [], warns = [];
    function E(m) { errs.push(m); } function W(m) { warns.push(m); }
    ["id", "title", "start", "acts", "passages"].forEach(function (k) { if (!story[k]) E("Il manque « " + k + " » à l'histoire."); });
    if (errs.length) return { errors: errs, warnings: warns };
    M.prepare(story);   // the ways back get their destination and label, as in play (an edited or imported story is raw)
    var VEILS = M.veilsOf(story);
    // Clément, 13/11: a story with adult themes says so, and lists them; the library warns before it opens.
    if (story.adult !== undefined) {
      var ad = story.adult;
      if (!ad || typeof ad !== "object" || !Array.isArray(ad.themes) || !ad.themes.length || ad.themes.some(function (t) { return typeof t !== "string" || !t.trim(); }))
        E("« adult » s'écrit { themes: [\"…\", …] } : la liste, non vide, des thèmes que le lecteur doit connaître avant d'ouvrir le livre.");
    }
    ["companions", "factions", "relics", "mysteries", "clues"].forEach(function (k) { story[k] = story[k] || {}; });
    story.quests = story.quests || []; story.banter = story.banter || [];
    var P = story.passages, acts = {};
    story.acts.forEach(function (a) { acts[a.id] = a; if (!P[a.start]) E("Acte " + a.id + " : son passage de départ « " + a.start + " » n'existe pas."); });
    if (!P[story.start]) E("Le passage de départ « " + story.start + " » n'existe pas.");
    Object.keys(story.clues).forEach(function (k) { if (!story.mysteries[story.clues[k].rev]) E("Indice " + k + " : mystère « " + story.clues[k].rev + " » inconnu."); });
    // Mysteries the story solves (6th series): the answer may name a person, and `solved` says when it is told.
    Object.keys(story.mysteries).forEach(function (k) {
      var my = story.mysteries[k], an = my.answer;
      if (an && an.person && !(story.people || {})[an.person] && !story.companions[an.person]) E("Mystère " + k + " : la réponse nomme « " + an.person + " », inconnu (people ou companions).");
      if (an && !my.solved) E("Mystère " + k + " : une réponse sans « solved » (le drapeau ou le passage qui la dit) ne serait jamais montrée.");
      if (my.solved != null && typeof my.solved !== "string") E("Mystère " + k + " : « solved » est un drapeau ou l'identifiant d'un passage.");
    });
    Object.keys(story.companions).forEach(function (k) {
      var c = story.companions[k];
      if (!c.name) E("Compagnon " + k + " sans nom.");
      Object.keys(c.bonus || {}).forEach(function (d) { if (DOM_KEYS.indexOf(d) < 0) E("Compagnon " + k + " : domaine « " + d + " » inconnu."); });
    });
    // A declared face (age, scars, eyes…) uses the engine's words only: the page must be able to draw it.
    ["people", "companions", "heroes"].forEach(function (kind) {
      Object.keys(story[kind] || {}).forEach(function (k) {
        var fc = story[kind][k].face; if (fc === undefined) return;
        M.faceErrors(fc).forEach(function (m) { E("Visage de « " + k + " » (" + kind + ") : " + m); });
      });
    });
    // Who is who (15/11): the five groups of an aspect, each a few words (the reader may set them beside the name).
    var aspectErrors = function (a, where) {
      if (!a || typeof a !== "object" || Array.isArray(a)) { E(where + " : aspect mal formé ({ " + Object.keys(M.ASPECT_KEYS).join(", ") + " })."); return; }
      Object.keys(a).forEach(function (x) {
        if (!M.ASPECT_KEYS[x]) E(where + " : aspect, « " + x + " » inconnu (" + Object.keys(M.ASPECT_KEYS).join(", ") + ").");
        else if (typeof a[x] !== "string" || !a[x].trim()) E(where + " : aspect « " + x + " » vide.");
        else if (a[x].trim().split(/\s+/).length > M.ASPECT_MAX_WORDS) E(where + " : aspect « " + x + " » trop long (" + M.ASPECT_MAX_WORDS + " mots au plus, il s'écrit à côté du nom).");
      });
    };
    ["people", "companions"].forEach(function (kind) {
      Object.keys(story[kind] || {}).forEach(function (k) {
        var P = story[kind][k];
        if (P.aspect !== undefined) aspectErrors(P.aspect, "« " + k + " » (" + kind + ")");
        if (P.aka !== undefined && (!Array.isArray(P.aka) || P.aka.some(function (f) { return typeof f !== "string" || f.trim().length < 2; }))) E("« " + k + " » (" + kind + ") : aka doit être une liste de noms.");
        if (P.qui !== undefined && typeof P.qui !== "string") E("« " + k + " » (" + kind + ") : qui doit être une phrase.");
      });
    });
    Object.keys(story.heroes || {}).forEach(function (k) {
      var H = story.heroes[k];
      if (!story.companions[k]) E("Héros « " + k + " » : il lui faut aussi une entrée dans companions (nom, confiance).");
      if (!H.player && !M.ARCHS[H.arch]) E("Héros « " + k + " » : classe « " + H.arch + " » inconnue.");
      Object.keys(H.souvenirs || {}).forEach(function (id) { if (!H.souvenirs[id].label) E("Héros « " + k + " » : souvenir « " + id + " » sans libellé."); });
    });
    // A story's own callings (8.5): each plays like one of the six classes; the hero must get one, by a past answer
    // (fx.voie on every answer of one question) or by story.voie.
    Object.keys(story.voies || {}).forEach(function (k) {
      var V = story.voies[k];
      if (!V.label) E("Voie « " + k + " » : il lui faut un libellé.");
      if (!M.ARCHS[V.like]) E("Voie « " + k + " » : « like » doit nommer une classe (" + Object.keys(M.ARCHS).join(", ") + ").");
      Object.keys(V.bonus || {}).forEach(function (d) { if (!M.DOMAINS[d]) E("Voie « " + k + " » : domaine « " + d + " » inconnu."); });
      (V.kit || []).forEach(function (id) { if (!story.items[id]) E("Voie « " + k + " » : objet « " + id + " » inconnu."); });
    });
    if (story.voies && Object.keys(story.voies).length) {
      if (story.voie && !story.voies[story.voie]) E("Voie de départ « " + story.voie + " » inconnue.");
      var vq = (story.past || []).filter(function (q) { return (q.answers || []).every(function (a) { return a.fx && a.fx.voie; }); });
      if (!story.voie && !vq.length) E("L'histoire déclare des voies : une question du passé doit en donner une à chaque réponse (fx.voie), ou story.voie en fixer une.");
      (story.past || []).forEach(function (q, i) { var n = (q.answers || []).filter(function (a) { return a.fx && a.fx.voie; }).length; if (n && n < q.answers.length) E("Ton passé " + (i + 1) + " : chaque réponse doit donner une voie, ou aucune."); });
    }
    // Words with effects (8.6): every mark of every paragraph is one the engine knows; every find is hidden somewhere.
    (function () {
      var texts = [], hidden = {}, kws = M.keywordsOf(story);
      var take = function (where, t) { if (typeof t === "string") texts.push([where, t]); else if (t && typeof t === "object") { if (typeof t.text === "string") texts.push([where, t.text]); if (typeof t.else === "string") texts.push([where, t.else]); Object.keys(t.cases || {}).forEach(function (c) { texts.push([where, t.cases[c]]); }); } };
      Object.keys(story.passages || {}).forEach(function (id) { (story.passages[id].text || []).forEach(function (t) { take("§ " + id, t); }); });
      (story.epilogue || []).forEach(function (e, i) { take("Épilogue " + (i + 1), e); });
      texts.forEach(function (x) {
        var where = x[0], t = x[1];
        if (/\{\{[a-z]+:/.test(t)) {
          var rest = t.replace(/\{\{(fx|cle|or|envers|encre|tache|gens):([^{}|]*)(?:\|([^{}]*))?\}\}/g, "");
          var bad = rest.match(/\{\{[a-z]+:[^}]*\}?\}?/);
          if (bad) E(where + " : marque inconnue ou mal fermée « " + bad[0].slice(0, 40) + " » (fx, cle, or, envers, encre, tache, gens).");
        }
        M.marksOf(t).forEach(function (m) {
          if (m.kind === "fx") { if (!M.TEXT_FX[m.arg]) E(where + " : effet « " + m.arg + " » inconnu (" + Object.keys(M.TEXT_FX).join(", ") + ")."); if (!m.text) E(where + " : effet « " + m.arg + " » sans texte."); }
          if (m.kind === "cle") { if (m.text != null ? !kws[m.arg] : !M.keywordFor(story, m.arg)) E(where + " : mot-clé « " + m.arg + " » inconnu (story.keywords ou mots du moteur)."); }
          if (m.kind === "or") { if (!(story.trouvailles || {})[m.arg]) E(where + " : trouvaille « " + m.arg + " » inconnue (story.trouvailles)."); else hidden[m.arg] = 1; if (!m.text) E(where + " : trouvaille « " + m.arg + " » sans texte."); }
          if (m.kind === "encre") { if (!story.items[m.arg]) E(where + " : encre invisible, objet « " + m.arg + " » inconnu."); if (!m.text) E(where + " : encre invisible sans texte."); }
          if (m.kind === "gens") { if (m.arg !== "aucun" && !M.personOf(story, m.arg)) E(where + " : {{gens:" + m.arg + "|…}}, personnage inconnu (people, companions ou « aucun »)."); if (!m.text) E(where + " : {{gens:" + m.arg + "}} sans texte."); }
          if ((m.kind === "envers" || m.kind === "tache") && !m.arg) E(where + " : « " + m.kind + " » sans texte.");
        });
      });
      Object.keys(story.trouvailles || {}).forEach(function (k) { if (!hidden[k]) E("Trouvaille « " + k + " » cachée nulle part (aucun {{or:" + k + "|…}} dans les textes)."); });
      Object.keys(story.keywords || {}).forEach(function (k) { if (!story.keywords[k].def) E("Mot-clé « " + k + " » sans définition (def)."); });
      (story.moods || []).forEach(function (m, i) { if (!M.MOODS[m.mood]) E("Humeur " + (i + 1) + " : « " + m.mood + " » inconnue (" + Object.keys(M.MOODS).join(", ") + ")."); });
    })();
    if (story.heroes && story.leadStart && !story.heroes[story.leadStart]) E("Héros de départ « " + story.leadStart + " » inconnu.");
    // 8.9: each character offered by a `leads` passage is a playable hero with a first page.
    Object.keys(story.leads || {}).forEach(function (k) { var L = story.leads[k]; if (!(story.heroes || {})[k]) E("leads : « " + k + " » n'est pas un héros (story.heroes)."); if (!story.passages[L.start]) E("leads : « " + k + " » commence à un passage inconnu " + L.start + "."); });
    Object.keys(story.passages).forEach(function (id) { var p = story.passages[id]; if (p.skip && !story.passages[p.skip.to]) E("§ " + id + " : skip vers un passage inconnu " + p.skip.to + "."); if (p.leads && !story.leads) E("§ " + id + " : leads sans story.leads."); });
    Object.keys(story.teams || {}).forEach(function (k) { var t = story.teams[k]; if (t.start && !P[t.start]) E("Équipe « " + k + " » : passage de départ « " + t.start + " » inconnu."); });
    var qids = {};
    story.quests.forEach(function (q) {
      if (qids[q.id]) E("Quête « " + q.id + " » en double."); qids[q.id] = q;
      if (!acts[q.act]) E("Quête « " + q.id + " » : acte « " + q.act + " » inconnu.");
      if (q.start && !P[q.start]) E("Quête « " + q.id + " » : passage de départ « " + q.start + " » inconnu.");
      if (q.kind === "annexe" && !q.echo) W("Petite quête « " + q.title + " » sans tag d'écho déclaré.");
    });
    story.banter.forEach(function (b) { if (!P[b.id]) E("Discussion « " + b.id + " » sans passage."); });

    var Wd = story.world = story.world || {}; Wd.places = Wd.places || {}; Wd.routes = Wd.routes || []; Wd.regions = Wd.regions || {}; Wd.events = Wd.events || {};
    var places = Wd.places, routes = {}, items = story.items = story.items || {}, people = story.people = story.people || {}, enemies = story.enemies = story.enemies || {};
    // A place no road leads to (a city told in scenes, 8.8) needs no arrival passage.
    var routeEnds = {}; ((story.world || {}).routes || []).forEach(function (r) { routeEnds[r.from] = routeEnds[r.to] = 1; });
    Object.keys(places).forEach(function (k) { var pl = places[k]; if (!pl.arrive && !routeEnds[k]) return; if (!P[pl.arrive]) E("Lieu « " + k + " » : passage d'arrivée « " + pl.arrive + " » inconnu."); (pl.arriveIf || []).forEach(function (a) { if (!P[a.passage]) E("Lieu « " + k + " » : arrivée « " + a.passage + " » inconnue."); }); });
    if (Wd.start && Wd.start.place && !places[Wd.start.place]) E("Lieu de départ « " + Wd.start.place + " » inconnu.");
    Wd.routes.forEach(function (r) {
      if (routes[r.id]) E("Route « " + r.id + " » en double."); routes[r.id] = r;
      if (!places[r.from] || !places[r.to]) E("Route « " + r.id + " » : lieu de départ ou d'arrivée inconnu.");
      if (!(r.steps >= 1)) E("Route « " + r.id + " » : nombre d'étapes manquant.");
      // A two-way route is offered from both ends: its label is written for the way out, so the way back needs its own
      // (Clément, 12/11: "in A, it offers to go to A and I end up in B").
      if (r.twoWay !== false && r.label && !r.labelBack) E("Route « " + r.id + " » : à double sens avec un libellé d'aller mais sans libellé de retour (labelBack), ou alors twoWay: false.");
      if (r.region && !Wd.regions[r.region]) E("Route « " + r.id + " » : région « " + r.region + " » inconnue.");
      (r.legs || []).forEach(function (l) { if (!P[l.passage]) E("Route « " + r.id + " » : étape « " + l.passage + " » inconnue."); if (l.step > r.steps) E("Route « " + r.id + " » : étape " + l.step + " au-delà de " + r.steps + "."); });
    });
    Object.keys(Wd.regions).forEach(function (k) { (Wd.regions[k].events || []).forEach(function (e) { if (!Wd.events[e]) E("Région « " + k + " » : événement « " + e + " » inconnu."); }); });
    Object.keys(Wd.regions).forEach(function (k) { var ti = Wd.regions[k].tiring; if (ti != null && !(ti >= 1 && ti === Math.floor(ti))) E("Région « " + k + " » : tiring doit être un nombre entier d'étapes (1 ou plus)."); });
    Object.keys(Wd.events).forEach(function (k) { if (!P[Wd.events[k].passage]) E("Événement « " + k + " » : passage « " + Wd.events[k].passage + " » inconnu."); });
    Object.keys(story.shops || {}).forEach(function (k) { (story.shops[k].sells || []).forEach(function (x) { if (!items[x.item]) E("Boutique « " + k + " » : objet « " + x.item + " » inconnu."); }); });
    Object.keys(items).forEach(function (k) { var it = items[k]; if (!it.name) E("Objet « " + k + " » sans nom."); });
    function checkFight(f, where) {
      (f.enemies || []).forEach(function (e) { var id = e.id || e; if (typeof id === "string" && !enemies[id]) E(where + " : ennemi « " + id + " » inconnu."); });
      ["win", "lose"].forEach(function (k) { if (!f[k]) E(where + " : combat sans issue « " + k + " »."); });
      if (f.flee && f.flee.dom && DOM_KEYS.indexOf(f.flee.dom) < 0) E(where + " : fuite, domaine « " + f.flee.dom + " » inconnu.");
      [f.win, f.lose, f.flee, f.talk && f.talk.win, f.calm].forEach(function (b) { if (!b) return; checkFx(b.fx, where); (Array.isArray(b.to) ? b.to.map(function (x) { return x.to; }) : [b.to]).forEach(function (t) { if (t !== "@ret" && t !== "@route" && t !== "@team" && t !== "@suite" && !P[t]) E(where + " : le combat mène à « " + t + " », qui n'existe pas."); }); });
    }
    function checkCond(c, where) {
      if (c == null || typeof c === "boolean" || typeof c === "string") return;
      if (Array.isArray(c)) { c.forEach(function (x) { checkCond(x, where); }); return; }
      var k = SIEGE_KEYS.filter(function (x) { return x in c; })[0] || Object.keys(c).filter(function (x) { return COND_KEYS.indexOf(x) >= 0; })[0];
      if (!k) { E(where + " : condition inconnue " + JSON.stringify(c).slice(0, 80)); return; }
      if (k === "not") checkCond(c.not, where);
      if (k === "all" || k === "any") c[k].forEach(function (x) { checkCond(x, where); });
      if (k === "count") c.count.forEach(function (x) { checkCond(x, where); });
      // Why: { gold: 10 } reads as "always true" in the engine (it expects { min, max }); say so instead of letting it pass.
      if (["gold", "food", "pv"].indexOf(k) >= 0 && (c[k] === null || typeof c[k] !== "object")) E(where + " : la condition « " + k + " » s'écrit { min: …, max: … }.");
      if (k === "depot" && !(story.depots || {})[c.depot]) E(where + " : dépôt « " + c.depot + " » inconnu (story.depots).");
      if (k === "clues" && !story.mysteries[c.clues]) E(where + " : mystère « " + c.clues + " » inconnu.");
      if (k === "clue" && !story.clues[c.clue]) E(where + " : indice « " + c.clue + " » inconnu.");
      if (k === "fil") { if (!(story.fils || {})[c.fil]) E(where + " : fil « " + c.fil + " » inconnu (fils)."); [].concat(c.is || []).forEach(function (x) { if (!M.THREAD_STATES[x] && x !== "aucun") E(where + " : état de fil « " + x + " » inconnu (ouvert, noue, rate, aucun)."); }); }
      if (k === "carteJouee") [].concat(c.carteJouee).forEach(function (x) { if (!(story.cartes || {})[x]) E(where + " : carte « " + x + " » inconnue (cartes)."); });
      if (k === "savoir") [].concat(c.savoir).forEach(function (x) { if (!(story.savoirs || {})[x]) E(where + " : savoir « " + x + " » inconnu (story.savoirs)."); });
      if (k === "lu" && !story.passages[c.lu]) E(where + " : passage « " + c.lu + " » inconnu (condition lu).");
      if (["present", "loyal", "met", "gone", "conf", "fear"].indexOf(k) >= 0 && !story.companions[c[k]]) E(where + " : compagnon « " + c[k] + " » inconnu.");
      if ((k === "relic" || k === "given") && !story.relics[c[k]]) E(where + " : relique « " + c[k] + " » inconnue.");
      if (k === "fac" && !story.factions[c.fac]) E(where + " : faction « " + c.fac + " » inconnue.");
      if (k === "seen" && !P[c.seen]) E(where + " : passage « " + c.seen + " » inconnu.");
      if (k === "quest" && !qids[c.quest]) E(where + " : quête « " + c.quest + " » inconnue.");
      if (k === "arch" && !M.ARCHS[c.arch]) E(where + " : archétype « " + c.arch + " » inconnu.");
      if (k === "voie" && !(story.voies || {})[c.voie]) E(where + " : voie « " + c.voie + " » inconnue.");
      if (k === "item" && !items[c.item]) E(where + " : objet « " + c.item + " » inconnu.");
      if ((k === "place" || k === "known") && !places[c[k]]) E(where + " : lieu « " + c[k] + " » inconnu.");
      if (k === "person" && !people[c.person]) E(where + " : personnage « " + c.person + " » inconnu.");
      if ((k === "lead" || k === "heroLevel") && !(story.heroes || {})[c[k]]) E(where + " : héros « " + c[k] + " » inconnu.");
      if (k === "away" && !story.companions[c.away]) E(where + " : compagnon « " + c.away + " » inconnu.");
      if (k === "team" && !(story.teams || {})[c.team]) E(where + " : équipe « " + c.team + " » inconnue.");
      if (k === "souv") checkSouv(c.souv, where);
      // A siege (8.0).
      if ((k === "stock" || k === "days") && !(story.stocks || {})[c[k]]) E(where + " : réserve « " + c[k] + " » inconnue.");
      if (k === "promise" && !(story.promises || {})[c.promise]) E(where + " : promesse « " + c.promise + " » inconnue.");
      if (k === "promise" && c.is != null) [].concat(c.is).forEach(function (x) { if (!M.PROMISE_STATES[x] && x !== "aucune") E(where + " : état de promesse « " + x + " » inconnu (" + Object.keys(M.PROMISE_STATES).join(", ") + ", aucune)."); });
      if (k === "vote" && !(story.motions || {})[c.vote]) E(where + " : motion « " + c.vote + " » inconnue.");
      if (k === "vote" && c.is != null) [].concat(c.is).forEach(function (x) { if (x !== "adopte" && x !== "rejete") E(where + " : vote, « " + x + " » (attendu : adopte ou rejete)."); });
      if (k === "vote" && c.hero != null) [].concat(c.hero).forEach(function (x) { if (!M.VOTES[x] && x !== "aucune") E(where + " : vote du héros « " + x + " » inconnu."); });
      if (k === "lean") { var mo = (story.motions || {})[c.lean]; if (!mo) E(where + " : motion « " + c.lean + " » inconnue."); else if (!(((story.councils || {})[mo.council] || {}).members || {})[c.member]) E(where + " : « " + c.member + " » ne siège pas à ce conseil."); }
      if (k === "battle" && !(story.battles || {})[c.battle]) E(where + " : bataille « " + c.battle + " » inconnue.");
      if (k === "battle" && c.is != null && c.is !== "win" && c.is !== "lose") E(where + " : bataille, « " + c.is + " » (attendu : win ou lose).");
      if (k === "camp" && c.camp != null && c.camp !== "none" && !(story.camps || {})[c.camp]) E(where + " : camp « " + c.camp + " » inconnu.");
      // Hidden words (9.1).
      if (k === "voile") [].concat(c.voile).forEach(function (x) { if (!VEILS[x]) E(where + " : voile « " + x + " » inconnu (aucun {{lentille#" + x + "|…|…}} dans le texte)."); });
      if ((k === "voiles" || k === "lens") && c.lens != null) [].concat(c.lens).forEach(function (x) { if (!(story.lenses || {})[x]) E(where + " : lentille « " + x + " » inconnue (lenses)."); });
      if (k === "voiles" && (c.voiles === null || typeof c.voiles !== "object")) E(where + " : la condition « voiles » s'écrit { voiles: { min: …, max: … } }.");
      if (k === "missed" && !qids[c.missed]) E(where + " : quête « " + c.missed + " » inconnue.");
      // At sea (8.1).
      if (k === "temps") checkSea("temps", c.temps, where);
      if (k === "saison") checkSea("saison", c.saison, where);
      if (k === "blessure" && typeof c.blessure !== "boolean") checkSea("blessure", c.blessure, where);
      if (k === "cicatrice") checkSea("cicatrice", c.cicatrice, where);
      // At school (8.2).
      if (k === "trait" && !(story.traits || {})[c.trait]) E(where + " : trait « " + c.trait + " » inconnu.");
      if (k === "duel" && !(story.duels || {})[c.duel]) E(where + " : duel « " + c.duel + " » inconnu.");
      if (k === "duel" && c.is != null && c.is !== "win" && c.is !== "lose") E(where + " : duel, « " + c.is + " » (attendu : win ou lose).");
      if (k === "souvenirs" && c.souvenirs !== "lead" && !(story.heroes || {})[c.souvenirs]) E(where + " : héros « " + c.souvenirs + " » inconnu.");
      // A closed room (8.3).
      if ((k === "recit" || k === "doute" || k === "dementi") && !(story.accounts || {})[c[k]]) E(where + " : version « " + c[k] + " » inconnue (accounts).");
      if (k === "silences" && c.silences !== "*" && c.silences !== true && !people[c.silences] && !story.companions[c.silences]) E(where + " : silences, personnage « " + c.silences + " » inconnu (ou \"*\" pour tous).");
      if (k === "geste" && !(story.gestes || {})[c.geste]) E(where + " : geste « " + c.geste + " » inconnu (gestes).");
      if (k === "angoisse" && !story.dread) E(where + " : condition angoisse sans story.dread.");
      if (k === "attache" && !(story.attachments || {})[c.attache]) E(where + " : attachement « " + c.attache + " » inconnu (attachments).");
    }
    // A souvenir "id" belongs to whoever leads: it must exist for at least one hero; "hero:id" for that hero.
    function checkSouv(ref, where) {
      var H = story.heroes || {}, i = String(ref).indexOf(":");
      if (i >= 0) { var h = ref.slice(0, i), id = ref.slice(i + 1); if (!H[h] || !(H[h].souvenirs || {})[id]) E(where + " : souvenir « " + ref + " » inconnu."); return; }
      if (!Object.keys(H).some(function (h) { return (H[h].souvenirs || {})[ref]; })) E(where + " : souvenir « " + ref + " » inconnu.");
    }
    function checkFx(fx, where) {
      if (!fx) return;
      if (typeof fx !== "object" || Array.isArray(fx)) { E(where + " : effets mal formés."); return; }
      Object.keys(fx).forEach(function (k) { if (FX_KEYS.indexOf(k) < 0) E(where + " : effet inconnu « " + k + " »."); });
      [].concat(fx.clue || []).forEach(function (x) { if (!story.clues[x]) E(where + " : indice « " + x + " » inconnu."); });
      if (fx.fil) Object.keys(fx.fil).forEach(function (k) { if (["ouvre", "noue", "rate"].indexOf(k) < 0) E(where + " : fil, « " + k + " » (attendu : ouvre, noue ou rate)."); else [].concat(fx.fil[k]).forEach(function (x) { if (!(story.fils || {})[x]) E(where + " : fil « " + x + " » inconnu (fils)."); }); });
      if (fx.elan != null && typeof fx.elan !== "number") E(where + " : elan, un nombre.");
      [].concat(fx.learn || []).forEach(function (x) { if (!(story.savoirs || {})[x]) E(where + " : savoir « " + x + " » inconnu (story.savoirs)."); });
      if (fx.voie && !(story.voies || {})[fx.voie]) E(where + " : voie « " + fx.voie + " » inconnue.");
      [].concat(fx.join || [], fx.met || [], fx.leave || []).concat(Object.keys(fx.conf || {}), Object.keys(fx.fear || {}))
        .forEach(function (x) { if (!story.companions[x]) E(where + " : compagnon « " + x + " » inconnu."); });
      Object.keys(fx.fac || {}).forEach(function (x) { if (!story.factions[x]) E(where + " : faction « " + x + " » inconnue."); });
      Object.keys(fx.aspect || {}).forEach(function (x) { if (!people[x] && !story.companions[x]) E(where + " : aspect, personnage « " + x + " » inconnu."); else aspectErrors(fx.aspect[x], where + " : aspect de " + x); });
      Object.keys(fx.qui || {}).forEach(function (x) { if (!people[x] && !story.companions[x]) E(where + " : qui, personnage « " + x + " » inconnu."); else if (typeof fx.qui[x] !== "string") E(where + " : qui de " + x + " doit être une phrase."); });
      Object.keys(fx.regard || {}).forEach(function (x) {
        if (!people[x] && !story.companions[x]) E(where + " : regard, personnage « " + x + " » inconnu.");
        if (!M.REGARDS[fx.regard[x]]) E(where + " : regard « " + fx.regard[x] + " » inconnu (" + Object.keys(M.REGARDS).join(", ") + ").");
      });
      [].concat(fx.relic || [], fx.give || []).forEach(function (x) { if (!story.relics[x]) E(where + " : relique « " + x + " » inconnue."); });
      [].concat(fx.quest || [], fx.questSeen || []).forEach(function (x) { if (!qids[x]) E(where + " : quête « " + x + " » inconnue."); });
      [].concat(fx.item || [], fx.drop || []).forEach(function (x) { if (!items[x]) E(where + " : objet « " + x + " » inconnu."); });
      [].concat(fx.reveal || []).forEach(function (x) { if (!places[x]) E(where + " : lieu « " + x + " » inconnu."); });
      [].concat(fx.meet || []).forEach(function (x) { if (!people[x]) E(where + " : personnage « " + x + " » inconnu."); });
      Object.keys(fx.assign || {}).concat([].concat(fx.away || [])).concat(Object.keys(fx.awayUnless || {})).forEach(function (x) { if (!story.companions[x]) E(where + " : compagnon « " + x + " » inconnu."); });
      Object.keys(fx.awayUnless || {}).forEach(function (x) { checkCond(fx.awayUnless[x], where); });
      Object.keys(fx.assign || {}).forEach(function (x) { if (!(story.teams || {})[fx.assign[x]]) E(where + " : équipe « " + fx.assign[x] + " » inconnue."); });
      if (fx.team && !(story.teams || {})[fx.team]) E(where + " : équipe « " + fx.team + " » inconnue.");
      if (fx.resume && !P[fx.resume]) E(where + " : reprise « " + fx.resume + " » inconnue.");
      if (fx.lead && !(story.heroes || {})[fx.lead]) E(where + " : héros « " + fx.lead + " » inconnu.");
      [].concat(fx.souv || [], fx.souvBack || []).forEach(function (x) { checkSouv(x, where); });
      if (fx.ep != null && !(typeof fx.ep === "number" || (Array.isArray(fx.ep) && M.EP[fx.ep[0]]))) E(where + " : EP mal formés " + JSON.stringify(fx.ep));
      // A siege (8.0).
      Object.keys(fx.stock || {}).forEach(function (x) { if (!(story.stocks || {})[x]) E(where + " : réserve « " + x + " » inconnue."); else if (typeof fx.stock[x] !== "number") E(where + " : réserve « " + x + " », un nombre (positif ou négatif)."); });
      [].concat(fx.promise || [], fx.keep || [], fx.break || [], fx.forgive || []).forEach(function (x) { if (!(story.promises || {})[x]) E(where + " : promesse « " + x + " » inconnue."); });
      ["sway", "sound"].forEach(function (key) { Object.keys(fx[key] || {}).forEach(function (m) {
        var mo = (story.motions || {})[m]; if (!mo) { E(where + " : " + key + ", motion « " + m + " » inconnue."); return; }
        var mem = ((story.councils || {})[mo.council] || {}).members || {};
        var who = key === "sway" ? Object.keys(fx.sway[m]) : fx.sound[m] === true ? [] : [].concat(fx.sound[m]);
        who.forEach(function (x) { if (!mem[x]) E(where + " : " + key + ", « " + x + " » ne siège pas à ce conseil."); });
        if (key === "sway") who.forEach(function (x) { var vv = fx.sway[m][x]; if (!M.VOTES[vv] && vv !== "indecis") E(where + " : sway, vote « " + vv + " » inconnu (pour, contre, abstention, indecis)."); });
      }); });
      if (fx.camp != null && !(story.camps || {})[fx.camp]) E(where + " : camp « " + fx.camp + " » inconnu.");
      [].concat(fx.tie || []).forEach(function (x) { if (!(story.ties || []).some(function (t) { return t.id === x; })) E(where + " : lien « " + x + " » inconnu."); });
      // At sea (8.1).
      if (fx.meteo != null) checkSea("temps", typeof fx.meteo === "object" ? fx.meteo.is : fx.meteo, where + " (meteo)");
      [].concat(fx.blessure || [], fx.soigner || [], fx.guerir || []).forEach(function (x) { checkSea("blessure", x, where); });
      if (fx.fatigue != null && typeof fx.fatigue !== "number") E(where + " : fatigue, un nombre (positif ou négatif).");
      // A closed room (8.3).
      [].concat(fx.recit || []).forEach(function (x) { if (!(story.accounts || {})[x]) E(where + " : version « " + x + " » inconnue (accounts)."); });
      Object.keys(fx.recharge || {}).forEach(function (x) { if (!(story.lenses || {})[x]) E(where + " : recharge, lentille « " + x + " » inconnue."); else if (typeof fx.recharge[x] !== "number") E(where + " : recharge, un nombre."); });
      [].concat(fx.devoile || []).forEach(function (x) { if (!VEILS[x]) E(where + " : devoile, voile « " + x + " » inconnu."); });
      [].concat(fx.secret || [], fx.surprend || [], fx.confier || []).forEach(function (x) { if (!(story.secrets || {})[x]) E(where + " : secret « " + x + " » inconnu (secrets)."); });
      [].concat(fx.geste || []).forEach(function (x) { if (!(story.gestes || {})[x]) E(where + " : geste « " + x + " » inconnu (gestes)."); });
      if (fx.angoisse != null && (typeof fx.angoisse !== "number" || !story.dread)) E(where + " : angoisse, un nombre, et story.dread déclaré.");
      Object.keys(fx.attache || {}).forEach(function (x) { if (!(story.attachments || {})[x]) E(where + " : attachement « " + x + " » inconnu."); else if (typeof fx.attache[x] !== "number") E(where + " : attache, un nombre."); });
    }
    // Intent: checkSea(Kind, Ids, Where) ! errors = a sky, a season or a wound the story does not declare (8.1)
    function checkSea(kind, ids, where) {
      var known = kind === "temps" ? ((story.weather || {}).kinds || {}) : kind === "saison" ? (story.seasons || []).reduce(function (o, x) { o[x.id] = 1; return o; }, {}) : (story.wounds || {});
      [].concat(ids).forEach(function (x) { if (!known[x]) E(where + " : " + kind + " « " + x + " » inconnu" + (kind === "saison" ? "e" : "") + " de l'histoire."); });
    }
    // « Enquête en ville » (7.9): schedules, witnesses, rumours, contradictions, fading clues, accusation, deadline.
    var PERIODS = Object.keys(M.PERIODS);
    function moment(m, where) { if (m == null) return; if (typeof m !== "object" || !(m.day >= 1) || (m.hour != null && !(m.hour >= 0 && m.hour < 24))) E(where + " : un moment s'écrit { day: 2, hour: 15 }."); }
    function clueOrDoc(k) { return !!story.clues[k] || !!(items[k] && items[k].kind === "document"); }
    Object.keys(items).forEach(function (k) { var it = items[k]; if (it.clue != null && !(story.clues || {})[it.clue]) E("Objet « " + k + " » : clue « " + it.clue + " », indice inconnu."); if (it.clue != null && it.kind !== "document") E("Objet « " + k + " » : seul un document porte un indice (clue)."); });
    Object.keys(people).forEach(function (k) {
      var pe = people[k], where = "Personnage « " + k + " »";
      (pe.at || []).forEach(function (a, i) {
        var w = where + ", horaire " + (i + 1);
        if (!places[a.place]) E(w + " : lieu « " + a.place + " » inconnu.");
        if (a.talk != null && !P[a.talk]) E(w + " : passage « " + a.talk + " » inconnu.");
        [].concat(a.when || []).forEach(function (x) { if (PERIODS.indexOf(x) < 0) E(w + " : moment de la journée « " + x + " » inconnu (" + PERIODS.join(", ") + ")."); });
        moment(a.from, w); moment(a.until, w); checkCond(a.if, w);
        if (!a.talk && !a.see) E(w + " : ni « talk » (le passage pour lui parler) ni « see » (ce qu'on voit de lui) : l'horaire ne sert à rien.");
      });
      Object.keys(pe.confront || {}).forEach(function (x) {
        if (!clueOrDoc(x)) E(where + " : confront, « " + x + " » n'est ni un indice ni un document.");
        if (!P[pe.confront[x]]) E(where + " : confront, passage « " + pe.confront[x] + " » inconnu.");
      });
    });
    Object.keys(story.rumors || {}).forEach(function (k) {
      var ids = {};
      (story.rumors[k] || []).forEach(function (r, i) {
        var w = "Rumeur « " + k + " » " + (i + 1);
        if (!r.id || ids[r.id]) E(w + " : identifiant manquant ou en double."); ids[r.id] = 1;
        if (!r.text) E(w + " : sans texte.");
        if (r.true == null) E(w + " : dire si elle est vraie (true: true ou false), pour le lecteur qui relira.");
        checkFx(r.fx, w); checkCond(r.if, w);
      });
    });
    (story.contradictions || []).forEach(function (x, i) {
      var w = "Contradiction " + (i + 1);
      if (!clueOrDoc(x.a) || !clueOrDoc(x.b)) E(w + " : « a » et « b » sont deux indices (ou documents) de l'histoire.");
      if (!story.clues[x.clue]) E(w + " : « clue », l'indice que donne le lien, est inconnu.");
      checkFx(x.fx, w);
    });
    Object.keys(story.clues).forEach(function (k) { var c = story.clues[k]; if (c.fades) moment(c.fades, "Indice " + k + ", fades"); });
    if (story.deadline) {
      var dl = story.deadline; moment(dl, "Échéance");
      if (!P[dl.to]) E("Échéance : passage « " + dl.to + " » inconnu.");
      (dl.acts || []).forEach(function (a) { if (!acts[a]) E("Échéance : acte « " + a + " » inconnu."); });
    }
    Object.keys(P).forEach(function (id) {
      var p = P[id], where = "§ " + id;
      if (p.montrer != null && !people[p.montrer]) E(where + " : tag montrer, personnage « " + p.montrer + " » inconnu.");
      if (p.rumeur != null && !(story.rumors || {})[p.rumeur]) E(where + " : tag rumeur, réserve « " + p.rumeur + " » inconnue.");
      if (p.accuse != null) {
        var ac = p.accuse, my = story.mysteries[ac.mystery];
        if (!my) { E(where + " : accuse, mystère « " + ac.mystery + " » inconnu."); return; }
        if (!ac.to) E(where + " : accuse sans « to » (où va l'histoire une fois l'accusation faite).");
        (Array.isArray(ac.to) ? ac.to : [{ to: ac.to }]).forEach(function (x) { checkCond(x.if, where); if (!P[x.to]) E(where + " : accuse mène à « " + x.to + " », qui n'existe pas."); });
        if (!(my.suspects || []).length) E("Mystère " + ac.mystery + " : « suspects », la liste des gens qu'on peut accuser, est vide.");
        (my.suspects || []).forEach(function (k) { if (!people[k]) E("Mystère " + ac.mystery + " : suspect « " + k + " » inconnu (people)."); });
        if (!Object.keys(my.motives || {}).length) E("Mystère " + ac.mystery + " : « motives » ({ id: texte }) est vide.");
        var an = my.answer || {};
        if ((my.suspects || []).indexOf(an.person) < 0) E("Mystère " + ac.mystery + " : la réponse (answer.person) n'est pas parmi les suspects.");
        [].concat(an.motive || []).forEach(function (m) { if (!(my.motives || {})[m]) E("Mystère " + ac.mystery + " : answer.motive « " + m + " » n'est pas dans motives."); });
        [].concat(an.proofs || []).forEach(function (k) { if (!clueOrDoc(k)) E("Mystère " + ac.mystery + " : preuve « " + k + " » inconnue (indice ou document)."); else if ((story.clues[k] || {}).leurre) E("Mystère " + ac.mystery + " : la preuve « " + k + " » est un leurre."); });
      }
      [p].concat((p.text || []).filter(function (x) { return x && typeof x === "object"; }), p.choices || []).forEach(function (x) {
        Object.keys(x.regard && typeof x.regard === "object" ? x.regard : {}).forEach(function (k) {
          if (!people[k] && !story.companions[k]) E(where + " : tag regard, personnage « " + k + " » inconnu.");
          [].concat(x.regard[k]).forEach(function (r) { if (!M.REGARDS[r]) E(where + " : tag regard, « " + r + " » inconnu."); });
        });
        [].concat(x.fresh || []).forEach(function (k) { if (!story.clues[k]) E(where + " : tag fresh, indice « " + k + " » inconnu."); else if (!story.clues[k].fades) E(where + " : tag fresh, l'indice « " + k + " » ne s'efface jamais (pas de fades)."); });
      });
    });
    var ends = 0;
    // leadsBack(from, to): from "from", the passage "to" is reached again within five choices without crossing a crossroads
    // (a way back, not a way on).
    function leadsBack(from, to) {
      var seen = {}, q = [[from, 0]];
      while (q.length) {
        var x = q.shift(); if (x[0] === to) return true; if (seen[x[0]] || x[1] >= 5 || !P[x[0]]) continue; seen[x[0]] = 1;
        var pp = P[x[0]];
        if (x[1] > 0 && (pp.hub || pp.routes)) continue; // through a crossroads, it is a new way, not the way back
        (pp.choices || []).forEach(function (c) { targetsOf(c).forEach(function (k) { q.push([k, x[1] + 1]); }); if (c.fight) ["win", "lose", "flee", "calm"].forEach(function (o) { if (c.fight[o]) q.push([c.fight[o].to, x[1] + 1]); }); });
        if (pp.combat) ["win", "lose", "flee", "calm"].forEach(function (o) { if (pp.combat[o]) q.push([pp.combat[o].to, x[1] + 1]); });
      }
      return false;
    }
    // The via tags the choices carry (on the choice, or on a roll's or a fight's branch), and the endings' ids.
    var viaTags = {}, endIds = {};
    Object.keys(P).forEach(function (id) {
      (P[id].choices || []).forEach(function (c) { [c, c.win, c.lose, c.fight && c.fight.win, c.fight && c.fight.lose, c.fight && c.fight.flee, c.fight && c.fight.calm].forEach(function (b) { if (b && b.via) viaTags[b.via] = 1; }); });
      if (P[id].combat) ["win", "lose", "flee", "calm"].forEach(function (o) { var b = P[id].combat[o]; if (b && b.via) viaTags[b.via] = 1; });
    });
    M.endingsOf(story).forEach(function (e) { endIds[e.id] = 1; });
    cardCheck(story, E, W);
    // At sea (8.1): the sky, the seasons, the wounds, the encounters, the things put together, the vigils, the charts.
    // The world of a book (8.6): pages to read before and during play, and names a touch explains.
    if (story.lore) {
      var LO = story.lore;
      if (LO.pages !== undefined && !Array.isArray(LO.pages)) E("Le monde : « pages » doit être une liste.");
      (Array.isArray(LO.pages) ? LO.pages : []).forEach(function (pg, i) { if (!pg || !pg.title || !pg.text || !(typeof pg.text === "string" || Array.isArray(pg.text))) E("Le monde, page " + (i + 1) + " : il faut un titre (title) et un texte (text)."); });
      Object.keys(LO.names || {}).forEach(function (k) { if (typeof LO.names[k] !== "string" || !LO.names[k].trim()) E("Le monde, nom « " + k + " » : il faut une phrase qui l'explique."); });
    }
    if (story.weather) {
      var WK = story.weather.kinds || {};
      if (!Object.keys(WK).length) E("Météo : aucun temps déclaré (kinds).");
      if (story.weather.start && !WK[story.weather.start]) E("Météo : temps de départ « " + story.weather.start + " » inconnu.");
      Object.keys(WK).forEach(function (k) { Object.keys(WK[k].mod || {}).forEach(function (d) { if (DOM_KEYS.indexOf(d) < 0) E("Météo « " + k + " » : domaine « " + d + " » inconnu."); }); if (!WK[k].name) E("Météo « " + k + " » : sans nom."); });
      Object.keys(story.weather.regions || {}).forEach(function (r) { Object.keys(story.weather.regions[r]).forEach(function (k) { if (!WK[k]) E("Météo, région « " + r + " » : temps « " + k + " » inconnu."); }); });
      // A weather that follows the roads reads the world's regions (and "lieu", "route" for a place or a route without one).
      if (story.weather.by === "route") Object.keys(story.weather.regions || {}).forEach(function (r) { var pr = Object.keys(Wd.places).some(function (k) { return Wd.places[k].region === r; }); if (!Wd.regions[r] && !pr && r !== "lieu" && r !== "route") E("Météo par la route : région « " + r + " » inconnue (ni région du monde, ni région d'un lieu, ni « lieu », ni « route »)."); });
      Object.keys(WK).forEach(function (k) { var H = WK[k].hurts; if (!H) return; if (!(story.wounds || {})[H.wound]) E("Météo « " + k + " » : blessure « " + H.wound + " » inconnue (hurts)."); if (H.chance != null && !(H.chance > 0 && H.chance <= 1)) E("Météo « " + k + " » : hurts.chance doit être entre 0 et 1."); });
      Object.keys(story.weather.seasons || {}).forEach(function (r) { if (!(story.seasons || []).some(function (x) { return x.id === r; })) E("Météo : saison « " + r + " » inconnue."); Object.keys(story.weather.seasons[r]).forEach(function (k) { if (!WK[k]) E("Météo, saison « " + r + " » : temps « " + k + " » inconnu."); }); });
    }
    (story.seasons || []).forEach(function (x, i) { if (!x.id || !x.name) E("Saison " + (i + 1) + " : il faut un id et un nom."); moment(x.from, "Saison « " + x.id + " »"); });
    Object.keys(story.wounds || {}).forEach(function (k) {
      var D = story.wounds[k], w = "Blessure « " + k + " »";
      if (!D.name) E(w + " : sans nom.");
      Object.keys(D.mod || {}).forEach(function (d) { if (DOM_KEYS.indexOf(d) < 0) E(w + " : domaine « " + d + " » inconnu."); });
      if (D.mark && !(M.FACE.marks || {})[D.mark]) E(w + " : marque « " + D.mark + " » inconnue (" + Object.keys(M.FACE.marks || {}).join(", ") + ").");
      if (D.mark && !D.scar) E(w + " : une marque sur le visage demande une cicatrice (scar).");
    });
    if (story.encounters) (story.encounters.list || []).forEach(function (e, i) {
      var w = "Rencontre " + (i + 1) + " (" + e.to + ")";
      if (!P[e.to]) E(w + " : passage inconnu."); else if (!P[e.to].back && !(P[e.to].choices || []).length && !P[e.to].combat) E(w + " : la scène ne ramène nulle part (back: true).");
      if (e.saison != null) checkSea("saison", e.saison, w); if (e.temps != null) checkSea("temps", e.temps, w); checkCond(e.if, w);
    });
    Object.keys(story.recipes || {}).forEach(function (k) {
      var R = story.recipes[k], w = "Assemblage « " + k + " »";
      if (!items[R.make]) E(w + " : objet fabriqué « " + R.make + " » inconnu.");
      if (!(R.of || []).length) E(w + " : aucune pièce (of).");
      (R.of || []).concat(R.keep || []).forEach(function (x) { if (!items[x]) E(w + " : pièce « " + x + " » inconnue."); });
      [].concat(R.with || []).forEach(function (x) { if (!story.companions[x]) E(w + " : compagnon « " + x + " » inconnu."); });
      checkCond(R.if, w); checkFx(R.fx, w);
      if (!Object.keys(P).some(function (id) { return P[id].atelier || (R.anywhere && P[id].hub); })) E(w + " : aucun passage atelier où l'assembler.");
    });
    (story.vigils || []).forEach(function (v, i) {
      var w = "Veillée " + (i + 1) + " (" + v.to + ")";
      if (!P[v.to]) E(w + " : passage inconnu.");
      [].concat(v.with || []).forEach(function (x) { if (!story.companions[x]) E(w + " : compagnon « " + x + " » inconnu."); });
      checkCond(v.if, w);
      if (!Object.keys(P).some(function (id) { return P[id].veillee; })) E(w + " : aucun passage marqué veillee.");
    });
    // At school (8.2): practice, traits, duels, puzzles, dreams.
    if (story.practice) (story.practice.doms || []).forEach(function (d) { if (DOM_KEYS.indexOf(d) < 0) E("Pratique : domaine « " + d + " » inconnu."); });
    Object.keys(story.traits || {}).forEach(function (k) { var T = story.traits[k]; if (!T.name || !T.low || !T.high) E("Trait « " + k + " » : il faut name, low et high."); });
    Object.keys(story.duels || {}).forEach(function (k) {
      var D = story.duels[k], w = "Duel « " + k + " »";
      if (!people[D.foe] && !D.foeName) E(w + " : adversaire « " + D.foe + " » inconnu (people) et sans foeName.");
      if (D.dom && DOM_KEYS.indexOf(D.dom) < 0) E(w + " : domaine « " + D.dom + " » inconnu.");
      ["win", "lose"].forEach(function (o) { var b = D[o]; if (!b || !P[b.to]) E(w + " : issue « " + o + " » sans passage connu."); else checkFx(b.fx, w); });
      Object.keys(D.style || {}).concat(Object.keys(D.tells || {}), Object.keys(D.labels || {})).forEach(function (m) { if (!M.DUEL_MOVES[m]) E(w + " : geste « " + m + " » inconnu (" + Object.keys(M.DUEL_MOVES).join(", ") + ")."); });
      if (!Object.keys(P).some(function (id) { return P[id].duel === k; })) E(w + " : aucun passage ne l'ouvre (duel: \"" + k + "\").");
    });
    Object.keys(story.puzzles || {}).forEach(function (k) {
      var Z = story.puzzles[k], w = "Énigme « " + k + " »";
      if (["molettes", "chiffre", "ordre"].indexOf(Z.kind) < 0) E(w + " : sorte « " + Z.kind + " » inconnue (molettes, chiffre, ordre).");
      if (!Z.title || !Z.text) E(w + " : il faut title et text.");
      if (Z.kind === "molettes") { if (!Array.isArray(Z.wheels) || !Array.isArray(Z.answer) || Z.wheels.length !== Z.answer.length) E(w + " : autant de molettes que de symboles dans answer."); else Z.answer.forEach(function (a, i) { if (Z.wheels[i].indexOf(a) < 0) E(w + " : le symbole « " + a + " » manque sur la molette " + (i + 1) + "."); }); }
      if (Z.kind === "ordre") { var n = (Z.pieces || []).length, ok = Array.isArray(Z.answer) && Z.answer.length === n && Z.answer.slice().sort().every(function (x, i) { return x === i; }); if (!ok) E(w + " : answer doit ranger chaque morceau une fois (indices de 0 à " + (n - 1) + ")."); }
      if (Z.kind === "chiffre" && !Z.answer) E(w + " : il faut la réponse (answer).");
      if (!Z.win || !P[Z.win.to]) E(w + " : issue win sans passage connu."); else checkFx(Z.win.fx, w);
      if (Z.lose && Z.lose.to && !P[Z.lose.to]) E(w + " : issue lose vers un passage inconnu.");
      if (Z.force && DOM_KEYS.indexOf(Z.force.dom) < 0) E(w + " : force, domaine « " + Z.force.dom + " » inconnu.");
      (Z.hint || []).forEach(function (h) { checkCond(h.if, w); });
      if (!Object.keys(P).some(function (id) { return P[id].puzzle === k; })) E(w + " : aucun passage ne l'ouvre (puzzle: \"" + k + "\").");
    });
    (story.dreams || []).forEach(function (d, i) {
      var w = "Rêve " + (i + 1) + " (" + d.to + ")";
      if (!P[d.to]) E(w + " : passage inconnu."); else if (!P[d.to].back && !(P[d.to].choices || []).length) E(w + " : le rêve ne ramène nulle part (back: true).");
      checkCond(d.if, w);
      if (!Object.keys(P).some(function (id) { return P[id].reveil; })) E(w + " : aucun passage marqué reveil.");
    });
    Object.keys(items).forEach(function (k) { [].concat(items[k].reveals || []).forEach(function (x) { if (!places[x]) E("Objet « " + k + " » : reveals, lieu « " + x + " » inconnu."); }); });
    // A siege (8.0): stocks, the world that moves on, promises, councils and motions, camps, ties, battles, markets.
    var S0 = story.stocks || {}, LEANS = ["pour", "contre", "abstention", "indecis"];
    Object.keys(S0).forEach(function (k) {
      var D = S0[k], w = "Réserve « " + k + " »";
      if (!D.name) E(w + " : sans nom.");
      if (typeof D.start !== "number") E(w + " : « start », la quantité au début, est un nombre.");
      if (D.eat != null && typeof D.eat !== "number" && typeof D.eat !== "object") E(w + " : « eat », un nombre par jour ou { valeur de l'état by: nombre }.");
      if (D.eat && typeof D.eat === "object" && !D.by && D.eat.default == null) E(w + " : « eat » par état demande « by » (le nom de l'état, comme rations).");
      (D.extra || []).forEach(function (x) { checkCond(x.if, w); if (typeof x.n !== "number") E(w + " : extra sans « n »."); });
      if (D.spoil) { checkCond(D.spoil.if, w); if (!(D.spoil.share > 0 && D.spoil.share < 1)) E(w + " : spoil.share, une part entre 0 et 1."); }
    });
    var marchIds = {};
    (story.march || []).forEach(function (e, i) {
      var w = "Monde en marche " + (i + 1) + (e.id ? " (" + e.id + ")" : "");
      if (!e.id || marchIds[e.id]) E(w + " : identifiant manquant ou en double."); marchIds[e.id] = 1;
      moment(e.at, w); moment(e.until, w); checkCond(e.if, w); checkFx(e.fx, w);
      if (e.to != null && !P[e.to]) E(w + " : passage « " + e.to + " » inconnu.");
      if (e.to != null && !e.at && e.if == null) E(w + " : une scène imposée (to) demande un moment (at) ou une condition (if).");
      (e.acts || []).forEach(function (a) { if (!acts[a]) E(w + " : acte « " + a + " » inconnu."); });
      if (!e.say && !e.to && !e.fx) E(w + " : ni « say », ni « to », ni « fx » : il ne se passe rien.");
    });
    story.quests.forEach(function (q) { if (q.due) moment(q.due, "Quête « " + q.id + " », due"); });
    Object.keys(story.promises || {}).forEach(function (k) {
      var D = story.promises[k], w = "Promesse « " + k + " »";
      if (!D.text) E(w + " : sans texte.");
      if (D.to != null && !people[D.to]) E(w + " : « to », personnage « " + D.to + " » inconnu.");
      if (D.kind != null && D.kind !== "dette" && D.kind !== "promesse") E(w + " : kind, « dette » ou « promesse ».");
      moment(D.due, w); checkCond(D.keeps, w); checkCond(D.breaks, w);
      if (D.collect != null && !P[D.collect]) E(w + " : collect, passage « " + D.collect + " » inconnu.");
      if (D.collect != null && !D.due) E(w + " : collect sans échéance (due).");
      if ((D.gold || D.stock) && !D.to) E(w + " : une dette se rembourse à quelqu'un (to).");
      Object.keys(D.stock || {}).forEach(function (x) { if (!S0[x]) E(w + " : réserve « " + x + " » inconnue."); });
      ["kept", "broken"].forEach(function (x) { if (D[x] != null && !M.REGARDS[D[x]]) E(w + " : " + x + ", regard « " + D[x] + " » inconnu."); });
      if (!D.due && D.keeps == null && D.breaks == null && !D.gold && !D.stock) W(w + " : ni échéance, ni condition, ni somme : seul le texte peut la tenir (fx.keep).");
    });
    Object.keys(story.councils || {}).forEach(function (k) {
      var C = story.councils[k], w = "Conseil « " + k + " »";
      Object.keys(C.members || {}).forEach(function (x) { if (!people[x]) E(w + " : membre « " + x + " » inconnu (people)."); checkCond((C.members[x] || {}).absent, w); });
      (C.order || []).forEach(function (x) { if (!(C.members || {})[x]) E(w + " : order, « " + x + " » n'est pas membre."); });
    });
    Object.keys(story.motions || {}).forEach(function (k) {
      var D = story.motions[k], w = "Motion « " + k + " »", C = (story.councils || {})[D.council];
      if (!C) { E(w + " : conseil « " + D.council + " » inconnu."); return; }
      if (!D.title || !D.text) E(w + " : il lui faut « title » et « text ».");
      Object.keys(D.lean || {}).forEach(function (x) { if (!C.members[x]) E(w + " : lean, « " + x + " » ne siège pas."); if (LEANS.indexOf(D.lean[x]) < 0) E(w + " : lean, « " + D.lean[x] + " » (pour, contre, abstention, indecis)."); });
      Object.keys(D.say || {}).forEach(function (x) { if (!C.members[x]) E(w + " : say, « " + x + " » ne siège pas."); });
      if (D.tie != null && D.tie !== "adopte" && D.tie !== "rejete") E(w + " : tie, adopte ou rejete.");
      Object.keys(D.fx || {}).forEach(function (r) { if (r !== "adopte" && r !== "rejete") E(w + " : fx." + r + " (attendu : adopte, rejete)."); checkFx(D.fx[r], w); });
    });
    Object.keys(story.camps || {}).forEach(function (k) {
      var D = story.camps[k], w = "Camp « " + k + " »";
      if (!D.name) E(w + " : sans nom.");
      if (D.leader != null && !people[D.leader]) E(w + " : chef « " + D.leader + " » inconnu (people).");
      (D.rivals || []).forEach(function (x) { if (!story.camps[x] || x === k) E(w + " : rival « " + x + " » inconnu."); });
      Object.keys(people).forEach(function (x) { if (people[x].camp != null && !story.camps[people[x].camp]) E("Personnage « " + x + " » : camp « " + people[x].camp + " » inconnu."); });
    });
    var tieIds = {};
    (story.ties || []).forEach(function (t, i) {
      var w = "Lien " + (i + 1) + (t.id ? " (" + t.id + ")" : "");
      if (!t.id || tieIds[t.id]) E(w + " : identifiant manquant ou en double."); tieIds[t.id] = 1;
      [t.a, t.b].forEach(function (x) { if (x !== "hero" && !people[x] && !(story.camps || {})[x]) E(w + " : « " + x + " » n'est ni un personnage, ni un camp, ni hero."); });
      if (!M.TIE_KINDS[t.kind]) E(w + " : kind « " + t.kind + " » inconnu (" + Object.keys(M.TIE_KINDS).join(", ") + ").");
      if (!t.label) E(w + " : sans label."); checkCond(t.if, w);
    });
    Object.keys(story.battles || {}).forEach(function (k) {
      var B = story.battles[k], w = "Bataille « " + k + " »", posts = {};
      (B.posts || []).forEach(function (x) { if (!x.id || !x.name) E(w + " : un poste a « id » et « name »."); posts[x.id] = 1; checkCond(x.if, w); checkCond(x.lost, w); });
      if (!(B.posts || []).length || !(B.waves || []).length) E(w + " : il faut des postes (posts) et des vagues (waves).");
      (B.troops || []).forEach(function (x) { if (!x.id || !x.name || !(x.force > 0)) E(w + " : une troupe a « id », « name » et « force » (1 à 4)."); checkCond(x.if, w); });
      if (!(B.troops || []).length && B.hero === false) E(w + " : personne à placer.");
      (B.waves || []).forEach(function (x, i) { if (!x.text) E(w + " : vague " + (i + 1) + " sans texte."); Object.keys(x.hits || {}).forEach(function (pp) { if (!posts[pp]) E(w + " : vague " + (i + 1) + ", poste « " + pp + " » inconnu."); }); });
      (B.orders || []).forEach(function (o) { if (!o.id || !o.label) E(w + " : un ordre a « id » et « label »."); if (o.post && !posts[o.post]) E(w + " : ordre « " + o.id + " », poste inconnu."); checkCond(o.if, w); checkFx(o.fx, w); });
      ["win", "lose"].forEach(function (o) { var b = B[o]; if (!b) { E(w + " : il manque l'issue « " + o + " »."); return; } checkFx(b.fx, w); (Array.isArray(b.to) ? b.to : [{ to: b.to }]).forEach(function (x) { checkCond(x.if, w); if (!P[x.to]) E(w + " : l'issue « " + o + " » mène à « " + x.to + " », qui n'existe pas."); }); });
    });
    Object.keys(story.shops || {}).forEach(function (k) {
      var sh = story.shops[k], w = "Boutique « " + k + " »";
      (sh.moves || []).forEach(function (m) { checkCond(m.if, w); if (!(m.x > 0)) E(w + " : moves, « x » est le facteur des prix (1.5 = moitié plus cher)."); });
      if (sh.scarce != null && !S0[sh.scarce]) E(w + " : scarce, réserve « " + sh.scarce + " » inconnue.");
      (sh.sells || []).forEach(function (x) { checkCond(x.if, w); });
    });
    (story.epilogue || []).forEach(function (e, i) { if (!e.text) E("Épilogue " + (i + 1) + " : sans texte."); checkCond(e.if, "Épilogue " + (i + 1)); });
    // A closed room (8.3): accounts and their topics, what the hero does and what it weighs, dread, attachments.
    Object.keys(story.topics || {}).forEach(function (k) { var T = story.topics[k]; if (!T.title) E("Sujet « " + k + " » : sans titre."); if (T.solved != null && typeof T.solved !== "string") E("Sujet « " + k + " » : solved est un drapeau ou un passage."); });
    Object.keys(story.accounts || {}).forEach(function (k) {
      var A = story.accounts[k], w = "Version « " + k + " »";
      if (A.by !== "hero" && !people[A.by] && !story.companions[A.by]) E(w + " : « by » est un personnage (people, companions) ou \"hero\".");
      if (!(story.topics || {})[A.topic]) E(w + " : sujet « " + A.topic + " » inconnu (topics).");
      if (!A.text) E(w + " : sans texte.");
      if (A.true !== true && A.true !== false && A.true !== "partiel") E(w + " : dire si elle est vraie (true: true, false ou \"partiel\"), pour le lecteur qui relira.");
      if (A.belie != null && !P[A.belie]) E(w + " : belie, passage « " + A.belie + " » inconnu.");
      if (A.belie != null && A.by !== "hero" && !Object.keys(P).some(function (id) { return [].concat(P[id].devant || []).indexOf(A.by) >= 0; })) E(w + " : belie, mais aucun passage devant: \"" + A.by + "\" où la mettre en doute.");
      if (A.belie != null && A.by === "hero" && !Object.keys(P).some(function (id) { return P[id].seul; })) E(w + " : belie, mais aucun passage seul: true où revenir sur sa version.");
    });
    // Hidden words (9.1): the lenses, the veils written in the text, what the story says of them.
    Object.keys(story.lenses || {}).forEach(function (k) {
      var L = story.lenses[k], w = "Lentille « " + k + " »";
      // The marks of 8.6 ({{fx:…}}, {{cle:…}}…) and the hidden words share the braces: a lens never takes their names.
      if ((M.MARK_KINDS || {})[k]) E(w + " : ce nom est celui d'une balise de mots à effets ({{" + k + ":…}}) ; choisir un autre nom.");
      if (!L.name) E(w + " : il faut un nom (name).");
      if (!L.item && L.if == null) E(w + " : il faut un objet (item) ou une condition (if).");
      if (L.item && !items[L.item]) E(w + " : objet « " + L.item + " » inconnu.");
      if (L.effect && M.LENS_EFFECTS.indexOf(L.effect) < 0) E(w + " : effet « " + L.effect + " » inconnu (" + M.LENS_EFFECTS.join(", ") + ").");
      if (L.charges != null && !(L.charges >= 0)) E(w + " : charges, un nombre.");
      checkCond(L.if, w);
      if (!Object.keys(VEILS).some(function (v) { return VEILS[v].lens === k; })) W(w + " : aucun mot caché ne s'y rapporte.");
    });
    (story.__veilClash || []).forEach(function (k) { E("Voile « " + k + " » : le même voile (mêmes mots dits, ou même #id) cache deux textes différents ; donne-lui un #id à lui."); });
    Object.keys(VEILS).forEach(function (k) {
      var V = VEILS[k];
      if (!(story.lenses || {})[V.lens]) E("Voile « " + k + " » (" + V.at + ") : lentille « " + V.lens + " » inconnue (lenses).");
      if (!V.said.trim() || !V.truth.trim()) E("Voile « " + k + " » (" + V.at + ") : les mots dits et les mots dessous sont tous deux obligatoires.");
    });
    Object.keys(story.veils || {}).forEach(function (k) {
      if (!VEILS[k]) E("Voile « " + k + " » (veils) : aucun {{lentille#" + k + "|…|…}} dans le texte.");
      else if (story.veils[k].fx) checkFx(story.veils[k].fx, "Voile « " + k + " »");
    });
    // A veil goes in a paragraph or a document, never on a button; a {{ … }} the engine cannot read is an error.
    Object.keys(P).forEach(function (id) {
      var p = P[id];
      (p.choices || []).forEach(function (c) { if (String(c.label || "").indexOf("{{") >= 0) E("§ " + id + " : un mot caché sur un bouton (« " + String(c.label).slice(0, 40) + " ») ; les mots cachés vont dans le texte."); });
      (function scan(o) { if (o == null) return; if (typeof o === "string") { var rest = o.replace(M.VEIL_RE, "").replace(/\{\{[a-z]+:[^{}]*\}\}/g, ""); if (/\{\{|\}\}/.test(rest)) E("§ " + id + " : mot caché mal écrit : « " + o.slice(Math.max(0, o.indexOf("{{") - 10), o.indexOf("{{") + 60) + " » (attendu {{lentille|dit|dessous}} ou {{lentille#id|dit|dessous}})."); return; } if (Array.isArray(o)) o.forEach(scan); else if (typeof o === "object") Object.keys(o).forEach(function (k) { scan(o[k]); }); })(p.text);
    });
    // Two players (8.4): secrets and their confessions, interludes from another point of view.
    Object.keys(story.secrets || {}).forEach(function (k) {
      var S = story.secrets[k], w = "Secret « " + k + " »";
      if (!S.title || !S.text) E(w + " : il faut un titre et un texte.");
      if (S.aveu != null) {
        if (!P[S.aveu]) E(w + " : aveu, passage « " + S.aveu + " » inconnu.");
        else if (!P[S.aveu].back && !(P[S.aveu].choices || []).length) E(w + " : la scène d'aveu doit finir (back: true ou des choix).");
        if (!Object.keys(P).some(function (id) { return P[id].aparte; })) E(w + " : aveu, mais aucun passage aparte: true où le dire.");
      }
      checkCond(S.if, w);
    });
    // Two players apart (9.6): deposits one hero leaves for the other, chronicles that change with the world.
    Object.keys(story.depots || {}).forEach(function (k) {
      var D = story.depots[k], w = "Dépôt « " + k + " »";
      if (!D.name) E(w + " : il faut un nom (name).");
      if (D.from == null || D.to == null) E(w + " : il faut dire qui dépose (from) et qui prend (to).");
      checkCond(D.from, w); checkCond(D.to, w);
      if (D.gold != null && !(D.gold > 0)) E(w + " : gold est la somme laissée à chaque fois, un nombre positif.");
      if (D.flat && !Object.keys(story.items || {}).some(function (i) { return story.items[i].flat; })) W(w + " : dépôt plat, mais aucun objet n'est marqué flat.");
      if (!Object.keys(P).some(function (id) { var T = M.depotTag(P[id]); return T && T.put.indexOf(k) >= 0; })) E(w + " : aucun passage où déposer (depot: { put }).");
      if (!Object.keys(P).some(function (id) { var T = M.depotTag(P[id]); return T && T.take.indexOf(k) >= 0; })) E(w + " : aucun passage où prendre (depot: { take }).");
    });
    Object.keys(P).forEach(function (id) {
      var T = M.depotTag(P[id]); if (!T) return;
      T.put.concat(T.take).forEach(function (k) { if (!(story.depots || {})[k]) E("§ " + id + " : dépôt « " + k + " » inconnu (story.depots)."); });
    });
    Object.keys(story.items || {}).forEach(function (k) { var I = story.items[k]; if (I.aged != null && !story.items[I.aged]) E("Objet « " + k + " » : aged, objet « " + I.aged + " » inconnu."); });
    Object.keys(story.chroniques || {}).forEach(function (k) {
      var C = story.chroniques[k], w = "Chronique « " + k + " »", ids = {};
      if (!C.title) E(w + " : il faut un titre.");
      checkCond(C.for, w);
      if (!(C.lines || []).length) E(w + " : aucune ligne.");
      (C.lines || []).forEach(function (L, i) {
        var wl = w + ", ligne " + (L.id || i + 1);
        if (!L.id) E(wl + " : il faut un id."); else if (ids[L.id]) E(wl + " : id en double."); ids[L.id] = 1;
        var vs = L.v || [{ text: L.text, if: L.if }];
        vs.forEach(function (v, j) {
          if (!v.text) E(wl + " : variante " + (j + 1) + " sans texte.");
          checkCond(v.if, wl);
          if (v.if == null && j < vs.length - 1) E(wl + " : une variante sans condition cache les suivantes.");
        });
      });
    });
    (story.interludes || []).forEach(function (x, i) {
      var w = "Interlude " + (i + 1);
      if (!P[x.to]) { E(w + " : passage « " + x.to + " » inconnu."); return; }
      if (!acts[x.act]) E(w + " : acte « " + x.act + " » inconnu.");
      else if (story.acts[0] && story.acts[0].id === x.act) E(w + " : le premier acte n'a pas d'entrée d'acte où le jouer.");
      if (!P[x.to].interlude) E(w + " : le passage « " + x.to + " » doit porter interlude: { who, where }.");
      checkCond(x.if, w);
    });
    Object.keys(P).forEach(function (id) {
      var p = P[id]; if (!p.interlude) return;
      var w = "§ " + id;
      if (p.hub || p.routes || p.place || p.act || p.end) E(w + " : un interlude n'est ni un carrefour, ni un lieu, ni une fin, et n'a pas d'acte (pas de hub, routes, place, act, end).");
      if (!p.back && !(p.choices || []).length) E(w + " : un interlude finit par back: true (« Revenir à … »).");
      var who = typeof p.interlude === "string" ? p.interlude : p.interlude.who;
      if (!who) E(w + " : interlude sans « who » (le point de vue).");
    });
    Object.keys(story.gestes || {}).forEach(function (k) { var G = story.gestes[k]; if (!G.name) E("Geste « " + k + " » : sans nom."); (G.echoes || []).forEach(function (e) { if (typeof e !== "string") { if (!e.text) E("Geste « " + k + " » : écho sans texte."); checkCond(e.if, "Geste « " + k + " »"); } }); });
    if (story.dread) {
      var DR = story.dread;
      if (DR.max != null && !(DR.max >= 2)) E("Angoisse : max, un nombre d'au moins 2.");
      if (DR.panic && !P[DR.panic.to]) E("Angoisse : panic.to, passage « " + DR.panic.to + " » inconnu.");
      (DR.panic && DR.panic.acts || []).forEach(function (a) { if (!acts[a]) E("Angoisse : panic.acts, acte « " + a + " » inconnu."); });
    }
    Object.keys(P).forEach(function (id) {
      var p = P[id], where = "§ " + id;
      [].concat(p.devant || []).forEach(function (x) { if (!people[x] && !story.companions[x]) E(where + " : devant, personnage « " + x + " » inconnu."); });
      if (p.silence) { if (!p.silence.to && !p.silence.back) E(where + " : silence sans « to » (où mène le silence)."); [].concat(p.silence.who === true || p.silence.who == null ? [] : p.silence.who).forEach(function (x) { if (!people[x] && !story.companions[x]) E(where + " : silence, personnage « " + x + " » inconnu."); }); }
      if (p.souvenir != null && (p.hub || p.routes || p.place)) E(where + " : un souvenir n'est ni un carrefour ni un lieu (pas de hub, routes, place).");
      [p].concat((p.text || []).filter(function (t) { return t && typeof t === "object"; }), p.choices || []).forEach(function (t) {
        if ((t.trouble != null || t.calme != null) && !story.dread) E(where + " : tag trouble ou calme sans story.dread.");
      });
    });
    Object.keys(P).forEach(function (id) {
      var p = P[id], where = "§ " + id;
      if (p.council) {
        var mo = (story.motions || {})[p.council.motion];
        if (!mo) E(where + " : council, motion « " + p.council.motion + " » inconnue.");
        (Array.isArray(p.council.to) ? p.council.to : [{ to: p.council.to }]).forEach(function (x) { checkCond(x.if, where); if (!P[x.to]) E(where + " : après le vote, « " + x.to + " » n'existe pas."); });
      }
      if (p.battle && !(story.battles || {})[p.battle]) E(where + " : bataille « " + p.battle + " » inconnue.");
      if (p.duel && !(story.duels || {})[p.duel]) E(where + " : duel « " + p.duel + " » inconnu.");
      if (p.puzzle && !(story.puzzles || {})[p.puzzle]) E(where + " : énigme « " + p.puzzle + " » inconnue.");
      if (p.epilogue && !p.end) E(where + " : epilogue sur un passage qui n'est pas une fin.");
      [p].concat((p.text || []).filter(function (t) { return t && typeof t === "object"; }), p.choices || []).forEach(function (t) { [].concat(t.camp || []).forEach(function (x) { if (!(story.camps || {})[x]) E(where + " : tag camp, « " + x + " » inconnu."); }); });
      [].concat(p.creditor || []).forEach(function (x) { if (!people[x]) E(where + " : creditor, « " + x + " » inconnu."); });
    });
    Object.keys(P).forEach(function (id) {
      var p = P[id], where = "§ " + id;
      if (p.act && !acts[p.act]) E(where + " : acte « " + p.act + " » inconnu.");
      // A switch passage (8.8): no page of its own; the engine takes the first branch whose condition holds.
      if (p.branch) {
        if (!Array.isArray(p.branch) || !p.branch.length) { E(where + " : branch vide."); return; }
        p.branch.forEach(function (b, i) { if (!P[b.to]) E(where + " : branche " + (i + 1) + " vers « " + b.to + " », qui n'existe pas."); checkCond(b.if, where); if (b.fx) checkFx(b.fx, where); });
        if (p.branch[p.branch.length - 1].if) E(where + " : la dernière branche doit être sans condition (le cas par défaut).");
        if (p.text || p.choices) E(where + " : un aiguillage (branch) n'a ni texte ni choix.");
        return;
      }
      if (!Array.isArray(p.text) || !p.text.length) E(where + " : pas de texte.");
      if (p.end) { ends++; return; }
      if (p.combat) { checkFight(p.combat, where); eachFx(p, function (fx) { checkFx(fx, where); }); return; }
      // back: true on the passage: the engine adds the way back to the crossroads the reader came from (7.9).
      if ((!Array.isArray(p.choices) || !p.choices.length) && !p.routes && !p.shop && !p.back && !p.council && !p.battle && !p.duel && !p.puzzle && !p.halte) { E(where + " : aucun choix (seules les fins n'en ont pas)."); return; }
      if (p.place && !places[p.place]) E(where + " : lieu « " + p.place + " » inconnu.");
      if (p.shop && !(story.shops || {})[p.shop]) E(where + " : boutique « " + p.shop + " » inconnue.");
      if (p.urgent != null && !(typeof p.urgent === "number" && p.urgent >= 5 && p.urgent <= 120)) E(where + " : tag urgent, un nombre de secondes entre 5 et 120.");
      if (p.urgent != null && !(p.choices || []).some(function (c) { return c.timeout; })) E(where + " : scène urgente sans choix « timeout: true » (celui qui est pris quand le temps est écoulé).");
      if (p.taverne != null && p.taverne !== true && (typeof p.taverne !== "object" || (p.taverne.mise != null && !(p.taverne.mise >= 1)))) E(where + " : tag taverne, { mise: nombre ≥ 1, adversaire: \"…\" }.");
      p.choices = p.choices || [];
      p.choices.forEach(function (c, i) {
        var w = where + " choix " + (i + 1);
        if (!c.label && c.back !== true) E(w + " : pas de texte de bouton.");   // back: true is labelled in play, after the last crossroads
        // No hand-written way back (Clément, 12/11): a return to a passage one comes from is written with back.
        if (c.back == null && typeof c.to === "string" && !c.test && !c.fight && RETURN_VERB.test(c.label || "") && (P[c.to] && (P[c.to].hub || P[c.to].routes) || leadsBack(c.to, id)))
          E(w + " : retour écrit à la main vers « " + c.to + " » ; écrire back: \"" + c.to + "\" (le moteur écrit le libellé).");
        if (c.test) {
          if (DOM_KEYS.indexOf(c.test.dom) < 0) E(w + " : domaine « " + c.test.dom + " » inconnu.");
          if (!c.win || !c.lose) E(w + " : un jet demande « win » et « lose ».");
        } else if (c.to == null && c.back !== true && !c.travel && !c.fight) E(w + " : pas de destination.");
        if (c.who && !story.companions[c.who]) E(w + " : compagnon « " + c.who + " » inconnu.");
        targetsOf(c).forEach(function (t) { if (t !== "@ret" && t !== "@route" && t !== "@team" && t !== "@suite" && !P[t]) E(w + " : mène à « " + t + " », qui n'existe pas."); });
        if (c.travel && !routes[c.travel]) E(w + " : route « " + c.travel + " » inconnue.");
        if (c.fight) checkFight(c.fight, w);
        if (Array.isArray(c.to) && c.to.length && c.to[c.to.length - 1].if != null) W(w + " : la dernière destination devrait être sans condition.");
      });
      // Tags: who a paragraph, a choice or the whole scene needs, and when.
      [p].concat((p.text || []).filter(function (t) { return t && typeof t === "object"; }), p.choices).forEach(function (t) {
        [].concat(t.with || [], t.without || []).forEach(function (k) { if (k !== "any" && !story.companions[k]) E(where + " : tag with/without, compagnon « " + k + " » inconnu."); });
        if (t.when != null && t.when !== "day" && t.when !== "night") E(where + " : tag when, « " + t.when + " » (attendu : day ou night).");
        if (t.first && t.again) E(where + " : tags first et again ensemble, jamais affiché.");
        if (t.takes != null && !(typeof t.takes === "number" && t.takes > 0) && ["evening", "night", "midnight", "morning", "noon", "day"].indexOf(t.takes) < 0) E(where + " : tag takes, « " + t.takes + " » (attendu : evening, night, midnight, morning, noon, day ou un nombre d'heures).");
        // via: the tag of a choice that leads somewhere, or the passage one comes from; anything else never shows.
        [].concat(t.via || []).forEach(function (k) { if (!viaTags[k] && !P[k]) E(where + " : tag via, « " + k + " » n'est le via d'aucun choix ni le nom d'un passage."); });
        if (t.second != null && t.second !== true && t.second !== false) [].concat(t.second).forEach(function (k) { if (!endIds[k] && !endIds["fin:" + k]) E(where + " : tag second, « " + k + " » n'est pas une fin de l'histoire."); });
        [].concat(t.outcome || []).forEach(function (o) { if (["win", "lose", "flee", "calm"].indexOf(o) < 0) E(where + " : tag outcome, « " + o + " » inconnu."); });
        if (t.temps != null) checkSea("temps", t.temps, where + ", tag temps");
        if (t.saison != null) checkSea("saison", t.saison, where + ", tag saison");
        if (t.blessure != null && typeof t.blessure !== "boolean") checkSea("blessure", t.blessure, where + ", tag blessure");
        if (t.cicatrice != null) checkSea("cicatrice", t.cicatrice, where + ", tag cicatrice");
      });
      eachCond(p, function (c) { checkCond(c, where); });
      eachFx(p, function (fx) { checkFx(fx, where); });
    });
    (story.past || []).forEach(function (q, i) { (q.answers || []).forEach(function (a) { checkFx(a.fx, "Ton passé " + (i + 1)); }); });
    Object.keys(story.trouvailles || {}).forEach(function (k) { checkFx(story.trouvailles[k].fx, "Trouvaille « " + k + " »"); });
    if (!ends) E("Aucune fin (passage avec end: true).");
    return { errors: errs, warnings: warns };
  }

  // Echo rule: each side quest declares a tag set somewhere; a later act or an ending must read it.
  function echoCheck(story) {
    var out = [], order = story.acts.map(function (a) { return a.id; });
    story.quests.forEach(function (q) {
      if (q.kind !== "annexe") return;
      var tags = [].concat(q.echo || [], "quete:" + q.id), qi = order.indexOf(q.act), hit = false, inEnd = false;
      Object.keys(story.passages).forEach(function (id) {
        var p = story.passages[id], later = order.indexOf(p.act) > qi || p.end, read = [];
        eachCond(p, function (c) { readTags(c, read); });
        if (read.some(function (t) { return tags.indexOf(t) >= 0; })) { if (later) hit = true; if (p.end) inEnd = true; }
      });
      // The story's epilogue (8.0) is read at every ending: a line there is a line in the epilogue.
      (story.epilogue || []).forEach(function (e) { var read = []; readTags(e.if, read); if (read.some(function (t) { return tags.indexOf(t) >= 0; })) { hit = true; inEnd = true; } });
      if (!hit) out.push("Petite quête « " + q.title + " » : son tag n'est relu par aucun acte suivant ni aucune fin.");
      else if (!inEnd) out.push("Petite quête « " + q.title + " » : pas de ligne dans l'épilogue.");
    });
    return out;
  }

  // Intent: strictCheck(Story) -> [{ kind, msg }] = what the engine cannot catch while playing, found by reading
  // Why: Clément (12/11): a well-written story must play well. These are the silent faults: a choice whose tag nobody
  // reads (a deed without consequence), a clue nobody can find, a thing nobody can get, a companion who speaks in a
  // paragraph that does not say he is there.
  var COND_PATH = /(^|\.)(if|hide|arriveIf|closes|done|echo|after|before|pretrap|awayUnless|help)(\.|$)/;
  var SPEECH = /^[^.!?«]{0,40}?(«|\bdit\b|\brépond|\bmurmure|\bsouffle\b|\blance\b|\bdemande|\bhausse|\bsourit|\brit\b|\bgrogne|\bsoupire|\bhoche|\bajoute|\bfait\s+«)/;
  function strictCheck(story) {
    var out = [], P = story.passages || {};
    var setFlags = {}, readStr = {}, given = {}, gotItems = {}, needItems = {};
    function walk(o, path, key) {
      if (o == null) return;
      if (typeof o === "string") {
        var inCond = COND_PATH.test(path);
        if (!inCond && (key === "flag" || key === "flags" || key === "flag2")) (setFlags[o] = setFlags[o] || []).push(path.split(".")[2] || "");
        else if (key !== "unflag") readStr[o] = 1;
        if (!inCond && (key === "clue" || key === "clues")) given[o] = 1;
        if (!inCond && (key === "item" || key === "items" || key === "kits")) gotItems[o] = 1;
        if (key === "drop" || (inCond && key === "item")) needItems[o] = 1;
        return;
      }
      if (Array.isArray(o)) { o.forEach(function (x) { walk(x, path, key); }); return; }
      if (typeof o === "object") Object.keys(o).forEach(function (k) { walk(o[k], path + "." + k, Array.isArray(o[k]) ? k : k); });
    }
    walk(story, "", "");
    // Shops sell items (sells: [{ item }]) and kits are { arch: [items] }: both are ways to get a thing.
    Object.keys(story.shops || {}).forEach(function (k) { (story.shops[k].sells || []).forEach(function (x) { gotItems[x.item] = 1; }); });
    // Things put together at the workbench (8.1) are given by their recipe.
    Object.keys(story.recipes || {}).forEach(function (k) { [].concat(story.recipes[k].make || []).forEach(function (x) { gotItems[x] = 1; }); });
    var kits = ((story.world || {}).start || {}).kits || {}; Object.keys(kits).forEach(function (a) { [].concat(kits[a]).forEach(function (x) { gotItems[x] = 1; }); });
    Object.keys(story.heroes || {}).forEach(function (h) { [].concat(story.heroes[h].items || []).forEach(function (x) { gotItems[x] = 1; }); });
    var ENGINE_READS = /^(fin:|quete|calme:)/;
    Object.keys(setFlags).sort().forEach(function (f) {
      if (readStr[f] || ENGINE_READS.test(f)) return;
      out.push({ kind: "tag jamais relu", msg: "Tag « " + f + " » posé (" + setFlags[f].slice(0, 3).map(function (x) { return "§ " + x; }).join(", ") + ") mais relu nulle part : ce choix n'a pas de suite." });
    });
    Object.keys(story.clues || {}).forEach(function (k) { if (!given[k]) out.push({ kind: "indice introuvable", msg: "Indice « " + k + " » : aucun passage ne le donne." }); });
    Object.keys(story.items || {}).forEach(function (k) {
      if (gotItems[k]) return;
      out.push({ kind: needItems[k] ? "objet demandé introuvable" : "objet introuvable", msg: "Objet « " + k + " » (" + story.items[k].name + ") : rien ne le donne" + (needItems[k] ? ", alors qu'un choix le demande." : ".") });
    });
    // A companion who acts or speaks in a paragraph must be said to be there (with), on the paragraph or on its scene.
    var comps = Object.keys(story.companions || {}).filter(function (k) { return !(story.heroes || {})[k] && story.companions[k].name; });
    var nameRe = {}; comps.forEach(function (k) { nameRe[k] = new RegExp("(^|[^\\wÀ-ÿ])" + story.companions[k].name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?![\\wÀ-ÿ])"); });
    function covers(w, k) { w = [].concat(w || []); return w.indexOf(k) >= 0; }
    // Only companions who can join the party (a companion who never joins is a person met on the way), and not in a
    // scene that makes them join, meet or leave (they are there by the scene itself).
    var joins = {}; (function scan(o, key) { if (o == null) return; if (typeof o === "string") { if (key === "join") joins[o] = 1; return; } if (Array.isArray(o)) { o.forEach(function (x) { scan(x, key); }); return; } if (typeof o === "object") Object.keys(o).forEach(function (k) { scan(o[k], k); }); })(P, "");
    comps = comps.filter(function (k) { return joins[k]; });
    Object.keys(P).forEach(function (id) {
      var p = P[id], here = JSON.stringify([p.fx, p.choices, p.combat]);
      (p.text || []).forEach(function (t, i) {
        var txt = typeof t === "string" ? t : t && t.text, tag = typeof t === "object" && t ? t : {};
        if (typeof txt !== "string") return;
        comps.forEach(function (k) {
          var m = nameRe[k].exec(txt); if (!m || p.end) return;
          var before = txt.slice(0, m.index); if ((before.match(/«/g) || []).length > (before.match(/»/g) || []).length) return; // named in a line of dialogue
          if (new RegExp('"(join|met|leave|meet)":(\\[[^\\]]*)?"' + k + '"').test(here)) return;
          if (covers(p.with, k) || covers(tag.with, k) || (tag.if && JSON.stringify(tag.if).indexOf('"' + k + '"') >= 0) || (p.if && JSON.stringify(p.if).indexOf('"' + k + '"') >= 0)) return;
          if (!SPEECH.test(txt.slice(m.index + m[0].length))) return;
          out.push({ kind: "compagnon sans with", msg: "§ " + id + " paragraphe " + (i + 1) + " : " + story.companions[k].name + " agit ou parle sans tag with: \"" + k + "\"." });
        });
      });
    });
    return out;
  }

  // Intent: liveTargetsOf(Story, State, Choice) -> PassageId* = where the choice can lead now (a conditional list
  // resolves to its first fitting destination, as the engine does; both outcomes of a test are kept).
  // Why: counting every destination written in a list made the games chase a passage whose condition was false, and
  // walk back and forth forever between two pages.
  function liveTargetsOf(story, s, c) {
    var out = [];
    function add(to) {
      if (Array.isArray(to)) { for (var i = 0; i < to.length; i++) if (M.evalCond(story, s, to[i].if)) return add(to[i].to); if (to.length) add(to[to.length - 1].to); return; }
      if (to != null) out.push(to);
    }
    add(c.to); if (c.win) add(c.win.to); if (c.lose) add(c.lose.to);
    return out;
  }

  function seededRng(seed) { var x = seed; return function () { x = (x * 1103515245 + 12345) % 2147483648; return x / 2147483648; }; }

  // Intent: validate(Story, Options) -> Report ! random
  function simulate(story, opts) {
    opts = opts || {};
    var games = opts.games || 1200, maxSteps = opts.maxSteps || 4000;
    var P = story.passages, ids = Object.keys(P);
    var seen = {}, endings = {}, errs = {}, dead = {}, loops = {}, guards = {}, questDone = {}, taken = {}, allowedCount = {}, levelAtEnd = {};
    var archs = Object.keys(M.ARCHS), modes = ["uniform", "curious", "explore", "win", "lose", "explore"];
    // Snapshots: a few states kept per passage (reservoir), so that a passage random games never reached can be
    // looked for afterwards from the states that came closest (reachMissing).
    var SNAPS = 6, snaps = {}, snapN = {}, snapRnd = seededRng(31337), actMax = {}, richOnly = [];
    function keepSnap(s) {
      var rnd = snapRnd;
      if (!P[s.node]) return;
      var k = s.node, m = snapN[k] = (snapN[k] || 0) + 1, list = snaps[k] = snaps[k] || [];
      if (list.length < SNAPS) list.push(JSON.stringify(s));
      else if (rnd() < SNAPS / m) list[Math.floor(rnd() * SNAPS)] = JSON.stringify(s);
    }
    // 7.9: a reader may link two statements that contradict each other (board, notebook). The games do it too, often.
    function tryContra(s, chance, rnd) {
      (story.contradictions || []).forEach(function (x) {
        if (rnd() < chance && !(x.clue && s.clues[x.clue])) { try { M.contradict(story, s, x.a, x.b); } catch (e) { errs["contradiction " + x.a + " / " + x.b + " : " + e.message] = 1; } }
      });
    }
    // 8.3: a reader may doubt what they were told (the notebook's « J'en doute »). The games do it too, often.
    function tryDoubt(s, chance, rnd) {
      Object.keys(s.accounts || {}).forEach(function (k) { if (!(s.doubts || {})[k] && rnd() < chance) M.doubt(story, s, k, true); });
    }
    // 8.5: a reader who holds a lens taps the words that stir on the page (and in the documents in the bag), often.
    // Returns the view when nothing was revealed (the caller reuses it: a view costs much on a long story), else null.
    // sure: the words lifted whatever the chance (a search that knows which words its target asks for).
    function tryVeils(s, chance, rnd, sure) {
      if (!story.lenses || !P[s.node]) return null;
      var any = false, v0 = M.view(story, s), texts = (v0.marked || v0.text).slice();
      (s.items || []).forEach(function (k) { var it = (story.items || {})[k]; if (it && it.text) texts.push(M.veilMark(story, s, it.text)); });
      M.veilsIn(texts).forEach(function (x) { if (x.state === "cache" && ((sure && sure.indexOf(x.id) >= 0) || rnd() < chance) && M.reveal(story, s, x.id)) any = true; });
      return any ? null : v0;
    }
    // At the accusation, the walk tries every who / why / proof and keeps the one that brings the target nearest.
    function accuseSearch(s, d) {
      var best = null, bestD = Infinity, v0 = M.view(story, s);
      v0.choices.filter(function (c) { return c.sys === "accuseWho"; }).forEach(function (cw) {
        var s1 = JSON.parse(JSON.stringify(s)); M.choose(story, s1, cw);
        M.view(story, s1).choices.filter(function (c) { return c.sys === "accuseWhy"; }).forEach(function (cm) {
          var s2 = JSON.parse(JSON.stringify(s1)); M.choose(story, s2, cm);
          M.view(story, s2).choices.filter(function (c) { return c.sys === "accuseProof"; }).forEach(function (cp) {
            var s3 = JSON.parse(JSON.stringify(s2)); M.choose(story, s3, cp);
            var dd = d[s3.node] == null ? Infinity : d[s3.node];
            if (dd < bestD) { bestD = dd; best = s3; }
          });
        });
      });
      return best;
    }
    // Static graph: every passage a choice, a test branch, a fight or a journey can lead to.
    function edgesOf(id) {
      var p = P[id], out = [];
      function add(to) { if (Array.isArray(to)) to.forEach(function (x) { add(x.to); }); else if (to != null && P[to]) out.push(to); }
      function fight(f) { if (f) ["win", "lose", "flee", "calm"].forEach(function (o) { if (f[o]) add(f[o].to); }); if (f && f.talk && f.talk.win) add(f.talk.win.to); }
      (p.choices || []).forEach(function (c) { add(c.to); if (c.win) add(c.win.to); if (c.lose) add(c.lose.to); fight(c.fight); });
      fight(p.combat);
      (p.branch || []).forEach(function (b) { add(b.to); });
      if (p.place || p.back) arrivals.forEach(function (a) { out.push(a); });
      // 7.9: the people met on a crossroads at their hour, the witness's reactions, the accusation, the deadline.
      if (p.hub && p.place) Object.keys(story.people || {}).forEach(function (k) { (story.people[k].at || []).forEach(function (a) { if (a.place === p.place && a.talk) add(a.talk); }); });
      if (p.montrer) { var cf = (story.people[p.montrer] || {}).confront || {}; Object.keys(cf).forEach(function (k) { add(cf[k]); }); }
      if (p.accuse) add(p.accuse.to);
      if (story.deadline && (!story.deadline.acts || story.deadline.acts.indexOf(p.act) >= 0)) add(story.deadline.to);
      // 8.0: after a vote, after a battle, and the scenes the world imposes (march, a creditor) from any page of their acts.
      if (p.council) add(p.council.to);
      if (p.battle && (story.battles || {})[p.battle]) { add(story.battles[p.battle].win.to); add(story.battles[p.battle].lose.to); }
      (story.march || []).forEach(function (e) { if (e.to && (!e.acts || e.acts.indexOf(p.act) >= 0)) add(e.to); });
      Object.keys(story.promises || {}).forEach(function (k) { if (story.promises[k].collect) add(story.promises[k].collect); });
      // 8.1: the encounters at sea come on any crossroads; the vigils, on a passage marked veillee.
      if (p.hub && story.encounters) (story.encounters.list || []).forEach(function (e) { add(e.to); });
      if (p.veillee) (story.vigils || []).forEach(function (v) { add(v.to); });
      // 8.2: after a duel or a puzzle, and the dreams on waking.
      if (p.duel && (story.duels || {})[p.duel]) { add(story.duels[p.duel].win.to); add(story.duels[p.duel].lose.to); }
      if (p.puzzle && (story.puzzles || {})[p.puzzle]) { var ZZ = story.puzzles[p.puzzle]; add(ZZ.win.to); if (ZZ.lose && ZZ.lose.to) add(ZZ.lose.to); }
      if (p.reveil) (story.dreams || []).forEach(function (d) { add(d.to); });
      // 8.3: an account put in doubt before the one who gave it (or alone, for one's own), and panic from any page.
      Object.keys(story.accounts || {}).forEach(function (k) { var A = story.accounts[k]; if (A.belie && (A.by === "hero" ? p.seul : [].concat(p.devant || []).indexOf(A.by) >= 0)) add(A.belie); });
      // 8.4: confessions told on an aparte; the interludes played before an act's first page.
      if (p.aparte) Object.keys(story.secrets || {}).forEach(function (k) { if (story.secrets[k].aveu) add(story.secrets[k].aveu); });
      (story.interludes || []).forEach(function (x) { var A = acts0[x.act]; if (A && A.start === id) add(x.to); });
      if (p.interlude) story.acts.forEach(function (a) { if ((story.interludes || []).some(function (x) { return x.to === id && x.act === a.id; })) add(a.start); });
      if (story.dread && story.dread.panic && !p.end && !p.souvenir && (!story.dread.panic.acts || story.dread.panic.acts.indexOf(p.act) >= 0)) add(story.dread.panic.to);
      return out;
    }
    var arrivals = [], acts0 = {}; story.acts.forEach(function (a) { acts0[a.id] = a; });
    Object.keys(((story.world || {}).places) || {}).forEach(function (k) { var pl = story.world.places[k]; if (P[pl.arrive]) arrivals.push(pl.arrive); (pl.arriveIf || []).forEach(function (a) { if (P[a.passage]) arrivals.push(a.passage); }); });
    // Intent: reachMissing() ! random — for each passage no random game reached, walk from the kept states of the
    // passages nearest to it in the graph, always taking the choice (and the test outcome) that brings it closer.
    // Why: a rare branch (a failed roll after a rare choice) is missed by random games and was reported as an error
    // although a reader can reach it. What this search cannot reach either is a real fault of the story.
    function reachMissing() {
      var actIdx = {}; story.acts.forEach(function (a, i) { actIdx[a.id] = i; });
      var rev = {}; ids.forEach(function (id) { edgesOf(id).forEach(function (t) { (rev[t] = rev[t] || []).push(id); }); });
      // A forced success opens the die (98, then 95: an open-ended roll), so that even a hard test can be won.
      var rnd = seededRng(4242), fixed = null, s = null, calls = 0;
      M.setRng(function () { if (fixed == null || !s || s.node === "@combat") return rnd(); calls++; return fixed > 0.5 && calls === 1 ? 0.975 : fixed; });
      function distTo(target) {
        var d = {}, q = [target]; d[target] = 0;
        while (q.length) { var x = q.shift(); (rev[x] || []).forEach(function (y) { if (d[y] == null) { d[y] = d[x] + 1; q.push(y); } }); }
        return d;
      }
      function live(to) { if (!Array.isArray(to)) return to; for (var i = 0; i < to.length; i++) if (M.evalCond(story, s, to[i].if)) return live(to[i].to); return to.length ? live(to[to.length - 1].to) : null; }
      function score(c, d, cur) {
        var best = Infinity, out = null;
        function cand(to, f) { [].concat(Array.isArray(to) ? to.map(function (x) { return x.to; }) : to).forEach(function (t) { var v = t === "@ret" ? (d[cur] != null ? d[cur] + 1 : Infinity) : d[t]; if (v != null && v < best) { best = v; out = f; } }); }
        if (c.sys === "travel") { var pl = (story.world.places || {})[c.dest] || {}; cand([pl.arrive].concat((pl.arriveIf || []).map(function (a) { return a.passage; })), null); return { d: best, fixed: null }; }
        if (c.sys === "show" && c.target) { cand(c.target, null); return { d: best, fixed: null }; }
        if (c.sys === "montrer") { var cf = (story.people[c.who] || {}).confront || {}; cand(Object.keys(cf).map(function (k) { return cf[k]; }), null); return { d: best, fixed: null }; }
        if (c.sys === "accuse" && P[cur] && P[cur].accuse) { cand(P[cur].accuse.to, null); return { d: best, fixed: null }; }
        if (c.sys === "council" && P[cur] && P[cur].council) { cand(P[cur].council.to, null); return { d: best, fixed: null }; }
        if (c.sys === "vigil") { cand(c.to, null); return { d: best, fixed: null }; }
        if (c.sys === "belie") { cand(((story.accounts || {})[c.account] || {}).belie, null); return { d: best, fixed: null }; }
        if (c.sys === "duel" && P[cur] && P[cur].duel) { var DD = story.duels[P[cur].duel]; cand(DD.win.to, null); cand(DD.lose.to, null); return { d: best, fixed: null }; }
        if (c.sys === "puzzle" && P[cur] && P[cur].puzzle) { var PZ0 = story.puzzles[P[cur].puzzle]; cand(PZ0.win.to, null); if (PZ0.lose && PZ0.lose.to) cand(PZ0.lose.to, null); return { d: best, fixed: null }; }
        if (c.sys === "puzzleTry" && P[cur] && P[cur].puzzle) { var PZ = story.puzzles[P[cur].puzzle]; cand(PZ.win.to || cur, 0.94); if (PZ.lose && PZ.lose.to) cand(PZ.lose.to, 0.02); return { d: best, fixed: out }; }
        if (c.sys === "battle" && P[cur] && P[cur].battle) { var BB = story.battles[P[cur].battle]; cand(BB.win.to, null); cand(BB.lose.to, null); return { d: best, fixed: null }; }
        if (c.sys) return { d: Infinity, fixed: null };
        var raw = c;
        cand(live(raw.to), null); if (raw.win) cand(live(raw.win.to), 0.94); if (raw.lose) cand(live(raw.lose.to), 0.02);
        if (raw.fight) ["win", "lose", "flee", "calm"].forEach(function (o) { if (raw.fight[o]) cand(raw.fight[o].to, null); });
        return { d: best, fixed: out };
      }
      // Three passes. "plain": the kept states as they were. "rich": the walk starts with as much gold and food as the
      // richest game had in that act, as a reader who saved could; a passage reached only by paying with that money
      // is a remark, not an error. "hurt": the walk starts with 1 PV, so that a fight can be lost (fights keep their
      // real dice), as any reader may lose one.
      var MONEY = /"(gold|food)"/;
      // Intent: doorOf(target) -> { shut: [Cond], veils: [VeilId] } — shut: what must still be false for the target to
      // be offered, the marks (has) and the companions (present) that hide every choice leading to it once they are
      // there; veils: the hidden words every such choice asks to have lifted.
      // Why: a page reserved to the reader who never learnt a thing, or never took someone along, is closed for good
      // long before its door; a walk that only counts steps arrives there with the door shut, or with a lens spent on
      // other words.
      function doorOf(target) {
        var common = null;
        function leads(to) { return Array.isArray(to) ? to.some(function (x) { return leads(x.to); }) : to === target; }
        function shut(c) {
          var out = {};
          function put(a) { if (a && (typeof a.has === "string" || typeof a.present === "string")) out[JSON.stringify(a)] = a; }
          function ask(a) { if (a && typeof a.voile === "string") out[JSON.stringify(a)] = a; }
          if (c.hide) (c.hide.any || [c.hide]).forEach(function (a) { put(a); if (a && a.not) ask(a.not); });
          if (c.if) (c.if.all || [c.if]).forEach(function (a) { ask(a); if (a && a.not) put(a.not); });
          [].concat(c.without || []).forEach(function (k) { put({ present: k }); });
          return out;
        }
        ids.forEach(function (id) { (P[id].choices || []).forEach(function (c) {
          if (!(leads(c.to) || (c.win && leads(c.win.to)) || (c.lose && leads(c.lose.to)))) return;
          var o = shut(c);
          if (!common) common = o; else Object.keys(common).forEach(function (k) { if (!o[k]) delete common[k]; });
        }); });
        var all = Object.keys(common || {}).map(function (k) { return common[k]; });
        return { shut: all.filter(function (a) { return !a.voile; }), veils: all.filter(function (a) { return a.voile; }).map(function (a) { return a.voile; }) };
      }
      // Whether an effect shuts the door: it sets one of its marks, or brings one of its companions along.
      function shuts(fx, door) {
        if (!fx) return false;
        return [].concat(fx).some(function (x) { return door.some(function (a) { return a.has ? [].concat(x.flag || [], x.flags || []).indexOf(a.has) >= 0 : [].concat(x.join || []).indexOf(a.present) >= 0; }); });
      }
      function choiceShuts(c, door, target) {
        if (c.sys) return false;
        var to = liveTargetsOf(story, s, c);
        if (to.indexOf(target) >= 0) return false; // the target itself may shut its own door behind the reader
        return shuts(c.fx, door) || to.some(function (t) { return P[t] && shuts(P[t].fx, door); });
      }
      function open(door) { return !door.some(function (a) { return M.evalCond(story, s, a); }); }
      // door: null for the plain search; else the walks start only from states where the door is still open, the
      // furthest in the story first, never take a choice that shuts it while another is offered, stop as soon as it
      // is shut, walk longer, and keep their lenses for the words the door asks (one walk in two lifts no other).
      function seek(target, pass, door) {
          if (seen[target]) return;
          var d = distTo(target);
          // Half the walks start from the nearest kept states, half from any earlier one (a flag set two acts before),
          // within a fixed budget; one walk in three wanders more.
          var from = Object.keys(snaps).filter(function (k) { return d[k] != null; }).sort(function (a, b) { return d[a] - d[b]; });
          var budget = 300, near = [], steps = door ? 1000 : 300;
          if (door) from.sort(function (a, b) { return actIdx[P[b].act] - actIdx[P[a].act] || d[a] - d[b]; });
          from.forEach(function (k) { snaps[k].forEach(function (x) { if (door) { s = JSON.parse(x); if (!open(door.shut)) return; } near.push(x); }); });
          for (var wi = 0; wi < budget && wi < near.length * 4 && !seen[target]; wi++) {
            var wander = wi % 3 === 2 ? 0.4 : 0.15, half = wi >> 1;
            s = JSON.parse(wi % 2 === 0 && half < near.length ? near[half] : near[Math.floor(rnd() * near.length)]);
            // The money added is remembered in the state (_extra), so that a walk resumed from it still knows.
            var extra = s._extra || { gold: 0, food: 0 }, paid = !!s._paid;
            if (pass === "rich" && P[s.node] && !s._extra) { var mx = actMax[P[s.node].act] || {}; extra = { gold: Math.max(0, (mx.gold || 0) - (s.gold || 0)), food: Math.max(0, (mx.food || 0) - (s.food || 0)) }; s.gold = (s.gold || 0) + extra.gold; s.food = (s.food || 0) + extra.food; s._extra = extra; }
            if (pass === "hurt") s.pv = 1;
            var mark = function (k) { if (seen[k] || !P[k]) return; seen[k] = 1; if (paid) richOnly.push(k); };
            for (var step = 0; step < steps; step++) {
              var v; fixed = null;
              try { v = tryVeils(s, door ? [0, 0.3][wi % 2] : [1, 1, 0.5, 0][wi % 4], rnd, door && door.veils) || M.view(story, s); } catch (e) { break; } // one walk in four leaves the words untouched, one lifts half of them, as a reader may
              if (P[s.node]) { mark(s.node); keepSnap(s); }
              if (s.seen && s.seen[target]) mark(target); // the whole walk is marked once it ends (below): cheaper
              if (seen[target] || v.kind === "end") { if (v.kind === "end" && P[s.node]) endings[s.node] = (endings[s.node] || 0) + 1; break; }
              if (s.node === "@accuse" && s.acc && s.acc.step === "qui" && rnd() > wander) { var sa = accuseSearch(s, d); if (sa) { s = sa; continue; } }
              tryContra(s, 1, rnd); tryDoubt(s, 1, rnd);
              var cs = v.choices.filter(function (c) { if (c.ok && !c.sys) allowedCount[s.node + " | " + c.label] = 1; return c.ok && !c.restart; });
              if (door) { if (!open(door.shut)) break; var kept = cs.filter(function (c) { return !choiceShuts(c, door.shut, target); }); if (kept.length) cs = kept; }
              if (!cs.length) break;
              var scored = cs.map(function (c) { return { c: c, sc: score(c, d, s.node) }; });
              var bestD = Math.min.apply(null, scored.map(function (x) { return x.sc.d; }));
              var pool = rnd() < wander || bestD === Infinity ? scored : scored.filter(function (x) { return x.sc.d === bestD; });
              var pick = pool[Math.floor(rnd() * pool.length)];
              if (s._extra && MONEY.test(JSON.stringify(pick.c.if || null))) paid = s._paid = true;
              fixed = pick.sc.fixed; calls = 0;
              if (!pick.c.sys) taken[s.node + " | " + pick.c.label] = 1;
              try { M.choose(story, s, answered(pick.c, s, rnd, fixed == null ? 0.7 : fixed > 0.5 ? 1 : 0)); } catch (e) { break; }
              // Spending into the added money: what follows was paid with savings the games did not have.
              if (s._extra && ((s.gold || 0) < extra.gold || (s.food || 0) < extra.food)) paid = s._paid = true;
            }
            if (s && s.seen) Object.keys(s.seen).forEach(mark);
          }
      }
      ["plain", "plain", "plain", "rich", "rich", "hurt", "hurt"].some(function (pass) {
        var missing = ids.filter(function (id) { return !seen[id]; });
        if (!missing.length) return true;
        missing.forEach(function (target) { seek(target, pass, null); });
        return false;
      });
      // Last: what is still missing behind a door that shuts (see doorOf) is looked for with that door kept open.
      ids.filter(function (id) { return !seen[id]; }).forEach(function (target) { var door = doorOf(target); if (door.shut.length) seek(target, "plain", door); });
    }
    // The games read like a reader: on a puzzle, they type the right answer most of the time, a wrong one otherwise.
    // pr: the chance of typing the right answer (a lost game errs more; a targeted search answers as its target needs).
    function answered(c, s, rnd, pr) {
      if (c.sys !== "puzzleTry" || !s.puzzle) return c;
      var Z = (story.puzzles || {})[s.puzzle.id] || {}, right = [].concat(Z.answer)[0];
      if (Z.kind === "molettes" || Z.kind === "ordre") right = Z.answer;
      var wrong = Z.kind === "molettes" ? (Z.wheels || []).map(function (w) { return w[0]; }) : Z.kind === "ordre" ? (Z.pieces || []).map(function (x, i) { return i; }) : "?";
      return Object.assign({}, c, { answer: rnd() < (pr == null ? 0.7 : pr) ? right : wrong });
    }
    // 8.4: a story for several players is played alone here; a ghost partner stands for the others. At each rendezvous
    // (a new act, a passage charniere), it sets at random some of the world marks the story can set (monde:…) and tells
    // some of the secrets that have a confession, as the other player might have done meanwhile.
    var GHOST = [];
    if (story.multi) {
      // A world choice (monde: key) is taken by every player alike: its marks are the player's own, never the ghost's.
      (function scan(o, key) { if (o == null) return; if (typeof o === "string") { if ((key === "flag" || key === "flags") && o.indexOf("monde:") === 0 && GHOST.indexOf(o) < 0) GHOST.push(o); return; } if (Array.isArray(o)) { o.forEach(function (x) { scan(x, key); }); return; } if (typeof o === "object" && !o.monde) Object.keys(o).forEach(function (k) { scan(o[k], k); }); })(story.passages, "");
      Object.keys(story.secrets || {}).forEach(function (k) { if (story.secrets[k].aveu) GHOST.push("monde:confie:" + k); });
    }
    // 9.6: the ghost partner leaves things too: at a rendezvous, one deposit in three receives one thing that fits it.
    function ghostDepots(s, rnd) {
      Object.keys(story.depots || {}).forEach(function (k) {
        if (rnd() > 0.34) return;
        var D = story.depots[k], fit = Object.keys(story.items || {}).filter(function (i) { return M.depotFits(story, D, i); });
        if (D.gold) fit.push("or:1");
        if (fit.length) s.flags[M.DEPOT_FLAG + k + ":" + fit[Math.floor(rnd() * fit.length)]] = true;
      });
    }
    function ghost(s, rnd, at) {
      if ((!GHOST.length && !story.depots) || !P[s.node]) return;
      var p = P[s.node], key = p.charniere ? "c:" + s.node : "a:" + s.lastAct;
      s._ghost = s._ghost || {}; if (s._ghost[key] || (!p.charniere && at === s.lastAct)) return;
      s._ghost[key] = 1;
      if (story.depots) ghostDepots(s, rnd);
      GHOST.forEach(function (f) { if (f.indexOf("monde:confie:") === 0 && (s.secrets || {})[f.slice(13)]) return; if (!s.flags[f] && rnd() < 0.3) s.flags[f] = true; });
    }
    function play(mode, seed, toutJouer, second) {
      var rnd = seededRng(seed), s = null, fixed = mode === "win" ? 0.94 : mode === "lose" ? 0.02 : null;
      var shy = seed % 7 === 3; // one game in seven barely touches the hidden words, as a reader who rarely taps may
      // Fixed dice only on tests: a fight always uses real dice, or two sides that always miss would never end.
      M.setRng(fixed == null ? rnd : function () { return s && s.node === "@combat" ? rnd() : fixed; });
      s = M.freshState(story, { toutJouer: toutJouer });
      s.arch = archs[Math.floor(rnd() * archs.length)]; s.name = "Test";
      // Two games in five are a second reading: the reader has reached every ending before (tag second).
      if (second) { s.second = {}; M.endingsOf(story).forEach(function (e) { s.second[e.id] = 1; }); }
      // 8.9: in a second reading, the reader has kept some things learned and read some pages in earlier games.
      if (second) { s.lore = {}; Object.keys(story.savoirs || {}).forEach(function (k) { if (rnd() < 0.75) s.lore[k] = 1; }); s.lu = {}; Object.keys(P).forEach(function (k) { if (rnd() < 0.3) s.lu[k] = 1; }); }
      // 8.3: one game in four, the reader has masked the tender lines.
      if (seed % 4 === 1) s.tendre = "masquer";
      (story.past || []).forEach(function (q) { var a = q.answers[Math.floor(rnd() * q.answers.length)]; try { M.apply(story, s, a.fx); } catch (e) { errs["Ton passé : " + e.message] = 1; } });
      try { M.start(story, s); } catch (e) { errs["départ : " + e.message] = 1; return; }
      var actWas = s.lastAct;
      for (var step = 0; step < maxSteps; step++) {
        var v;
        ghost(s, rnd, actWas); actWas = s.lastAct;
        seen[s.node] = (seen[s.node] || 0) + 1;
        keepSnap(s);
        if (P[s.node]) { var am = actMax[P[s.node].act] = actMax[P[s.node].act] || { gold: 0, food: 0 }; am.gold = Math.max(am.gold, s.gold || 0); am.food = Math.max(am.food, s.food || 0); }
        try {
          v = tryVeils(s, shy ? 0.1 : mode === "explore" ? 1 : mode === "lose" ? 0.2 : 0.6, rnd) || M.view(story, s);
          v.text.forEach(function (t) { if (/undefined|NaN|\[object|\{[a-z]+\}|\{autre:/.test(t)) throw new Error("texte suspect : " + t.slice(0, 80)); });
          // 8.6: a reader taps a hidden find, often; and nothing of a mark ever reaches the plain text.
          (v.marked || []).forEach(function (t) { M.marksOf(t).forEach(function (m) { if (m.kind === "or" && rnd() < 0.5) { try { M.trouve(story, s, m.arg); } catch (e) { errs["trouvaille " + m.arg + " : " + e.message] = 1; } } }); });
          v.text.forEach(function (t) { if (/\{\{[a-z]+:/.test(t)) throw new Error("marque restée dans le texte : " + t.slice(0, 80)); });
        } catch (e) { errs["§ " + s.node + " : " + e.message] = 1; return; }
        Object.keys(s.seen).forEach(function (k) { if (!seen[k]) seen[k] = 1; });
        Object.keys(s.guards || {}).forEach(function (k) { guards[k] = 1; });
        if (v.kind === "end") {
          endings[s.node] = (endings[s.node] || 0) + 1;
          var lv = M.level(s); levelAtEnd[lv] = (levelAtEnd[lv] || 0) + 1;
          story.quests.forEach(function (q) { if (M.questDone(s, q)) questDone[q.id] = (questDone[q.id] || 0) + 1; });
          return;
        }
        var cs = v.choices.filter(function (c) {
          if (c.ok && !c.sys) allowedCount[s.node + " | " + c.label] = 1;
          return c.ok && !c.restart;
        });
        if (!cs.length) { dead[s.node] = (dead[s.node] || 0) + 1; return; }
        var c, story_ = story;
        // "explore" prefers what no game has seen yet, so rare branches (a late ending) get played too.
        var globalFresh = mode === "explore" ? cs.filter(function (x) { return !x.sys && liveTargetsOf(story, s, x).some(function (t) { return P[t] && !seen[t]; }); }) : [];
        if (globalFresh.length) c = globalFresh[Math.floor(rnd() * globalFresh.length)];
        else if (mode === "curious" || mode === "win" || mode === "explore") {
          var fresh = cs.filter(function (x) {
            if (x.sys === "travel") { var r = (story_.world.routes || []).filter(function (y) { return y.id === x.route; })[0]; return !s.routesDone[x.route] || !s.seen[(story_.world.places[x.dest] || {}).arrive]; }
            if (x.sys === "buy") return rnd() < 0.5;
            if (x.sys) return false;
            return liveTargetsOf(story_, s, x).some(function (t) { return t !== "@ret" && t !== "@route" && P[t] && !s.seen[t]; });
          });
          var pool = fresh.length ? fresh : cs.filter(function (x) { return x.sys !== "sell"; });
          if (!pool.length) pool = cs;
          c = pool[Math.floor(rnd() * pool.length)];
        } else c = cs[Math.floor(rnd() * cs.length)];
        if (!c.sys) taken[s.node + " | " + c.label] = 1;
        try { M.choose(story, s, answered(c, s, rnd, mode === "lose" ? 0.2 : 0.7)); } catch (e) { errs["§ " + s.node + " / « " + String(c.label).slice(0, 40) + " » : " + e.message] = 1; return; }
        tryContra(s, mode === "lose" ? 0.1 : 0.4, rnd); tryDoubt(s, mode === "lose" ? 0.1 : 0.3, rnd);
        s.events.forEach(function (e) { if (/undefined|NaN/.test(e.text)) errs["§ " + s.node + " effet : " + e.text.slice(0, 80)] = 1; });
      }
      loops[s.node] = (loops[s.node] || 0) + 1;
    }
    var n = 0;
    for (var i = 1; i <= games; i++) {
      var mode = modes[i % modes.length];
      play(mode, i * 7919, i % 2 === 0, i % 5 < 2);
      n++;
    }
    var T = typeof process !== "undefined" && process.env && process.env.VALID_TIME, t0 = Date.now();
    if (T) console.log("parties : " + n + ", passages jamais vus : " + ids.filter(function (id) { return !seen[id]; }).length);
    reachMissing();
    if (T) console.log("recherche ciblée : " + (Date.now() - t0) + " ms");
    M.setRng(null);
    var unreached = ids.filter(function (id) { return !seen[id] && !P[id].branch; });   // a switch passage has no page
    var neverTaken = [];
    ids.forEach(function (id) { var p = P[id]; (p.choices || []).forEach(function (c) { if (c.restart) return; var k = id + " | " + String(c.label).replace(/\{e\}/g, "").replace(/\{autre:(e|il|Il|le|lui)\}/g, function (m, x) { return M.autreForm({}, x); }).replace(/\{autre\}/g, "l'autre"); if (!taken[k]) neverTaken.push("§ " + id + " : « " + String(c.label).slice(0, 60) + " »" + (allowedCount[k] ? " (possible, jamais pris)" : " (jamais possible)")); }); });
    return {
      games: n, passages: ids.length, guards: Object.keys(guards), errors: Object.keys(errs), deadEnds: dead, loops: loops, unreached: unreached, endings: endings,
      neverTaken: neverTaken, questDone: questDone, levelAtEnd: levelAtEnd, richOnly: richOnly,
      questsNeverDone: story.quests.filter(function (q) { return !questDone[q.id] && !q.later; }).map(function (q) { return q.title; }),
      questsLater: story.quests.filter(function (q) { return !questDone[q.id] && q.later; }).map(function (q) { return q.title; }),
      endingsNeverReached: ids.filter(function (id) { return P[id].end && !endings[id]; }),
    };
  }

  // Intent: validate(Story, Options) -> Report
  // Blocking problems make the story unplayable; warnings are shown but do not block.
  function validate(story, opts) {
    M.prepare(story);
    var st = staticCheck(story);
    var rep = { errors: st.errors.slice(), warnings: st.warnings.slice(), sim: null };
    if (rep.errors.length) return rep;
    rep.warnings = rep.warnings.concat(echoCheck(story));
    var sim = simulate(story, opts);
    rep.sim = sim;
    sim.errors.forEach(function (e) { rep.errors.push(e); });
    // What the engine had to catch while playing: the scenario's own faults, one line each.
    (sim.guards || []).forEach(function (g) { rep.errors.push(g + " (rattrapé par le moteur)."); });
    Object.keys(sim.deadEnds).forEach(function (k) { rep.errors.push("§ " + k + " : impasse, aucun choix possible (" + sim.deadEnds[k] + " parties)."); });
    Object.keys(sim.loops).forEach(function (k) { rep.warnings.push("§ " + k + " : " + sim.loops[k] + " parties au hasard n'ont pas fini en 4 000 choix (errance ou boucle)."); });
    sim.unreached.forEach(function (k) { rep.errors.push("§ " + k + " : jamais atteint."); });
    (sim.richOnly || []).forEach(function (k) { rep.warnings.push("§ " + k + " : atteint seulement avec l'or ou les vivres qu'un lecteur économe aurait gardés (les parties d'essai les avaient dépensés)."); });
    sim.questsNeverDone.forEach(function (t) { rep.errors.push("Quête « " + t + " » : jamais terminée dans les parties d'essai."); });
    (sim.questsLater || []).forEach(function (t) { rep.warnings.push("Quête « " + t + " » : la suite reste à écrire (later)."); });
    sim.endingsNeverReached.forEach(function (k) { rep.warnings.push("Fin § " + k + " : jamais atteinte dans les parties d'essai."); });
    sim.neverTaken.forEach(function (k) { rep.warnings.push(k); });
    return rep;
  }
  // Which act a problem line belongs to (to send only that act back for repair).
  function actOfProblem(story, line) {
    var m = /§ ([A-Za-z0-9_\-]+)/.exec(line);
    if (m && story.passages[m[1]]) return story.passages[m[1]].act;
    var q = /Quête « (.+?) »|Petite quête « (.+?) »/.exec(line);
    if (q) { var t = q[1] || q[2]; var f = story.quests.filter(function (x) { return x.title === t; })[0]; if (f) return f.act; }
    return null;
  }

  var API = { validate: validate, strictCheck: strictCheck, staticCheck: staticCheck, echoCheck: echoCheck, simulate: simulate, actOfProblem: actOfProblem, readTags: readTags };
  if (typeof module !== "undefined" && module.exports) module.exports = API; else root.Validateur = API;
})(typeof self !== "undefined" ? self : this);
