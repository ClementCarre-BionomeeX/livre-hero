"use strict";
// Story checker: the handoff's "test de tous les chemins", run on a JSON story (in the page after each generation, and
// in Node). Static checks (schema, every reference), then many random play-throughs (uniform, curious, all-success,
// all-failure, with and without "on fait tout"), then the quest rules: every quest can be finished, and every side
// quest leaves a tag that a later act or an ending reads (its echo).
(function (root) {
  var M = typeof module !== "undefined" && module.exports ? require("./moteur.js") : root.Moteur;

  var COND_KEYS = ["is", "count", "has", "not", "all", "any", "clues", "clue", "mark", "present", "loyal", "met", "gone", "conf", "fear", "relics", "relic",
    "given", "item", "gold", "food", "pv", "clock", "fac", "level", "day", "since", "night", "seen", "arch", "quest", "place", "known", "person", "party",
    "lead", "away", "team", "souv", "souvenirs", "heroLevel"];
  var FX_KEYS = ["resume", "flag", "flags", "unflag", "clue", "mark", "ep", "catchup", "catchupWhy", "join", "met", "leave", "conf", "fear", "fac", "relic",
    "give", "relicLose", "item", "drop", "gold", "food", "pv", "rest", "time", "until", "stamp", "reveal", "meet", "clock", "quest", "questSeen", "note", "noteCls",
    "assign", "team", "regroup", "away", "lead", "leadQuiet", "souv", "souvBack", "catchupAll", "awayUnless"];
  var DOM_KEYS = Object.keys(M.DOMAINS);

  // Collects every tag a condition reads (for the echo check).
  function readTags(c, out) {
    if (c == null || typeof c === "boolean") return out;
    if (typeof c === "string") { out.push(c); return out; }
    if (Array.isArray(c)) { c.forEach(function (x) { readTags(x, out); }); return out; }
    if ("has" in c) out.push(c.has);
    if ("quest" in c) out.push("quete:" + c.quest);
    if ("not" in c) readTags(c.not, out);
    if ("all" in c) readTags(c.all, out);
    if ("any" in c) readTags(c.any, out);
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
  function staticCheck(story) {
    var errs = [], warns = [];
    function E(m) { errs.push(m); } function W(m) { warns.push(m); }
    ["id", "title", "start", "acts", "passages"].forEach(function (k) { if (!story[k]) E("Il manque « " + k + " » à l'histoire."); });
    if (errs.length) return { errors: errs, warnings: warns };
    ["companions", "factions", "relics", "mysteries", "clues"].forEach(function (k) { story[k] = story[k] || {}; });
    story.quests = story.quests || []; story.banter = story.banter || [];
    var P = story.passages, acts = {};
    story.acts.forEach(function (a) { acts[a.id] = a; if (!P[a.start]) E("Acte " + a.id + " : son passage de départ « " + a.start + " » n'existe pas."); });
    if (!P[story.start]) E("Le passage de départ « " + story.start + " » n'existe pas.");
    Object.keys(story.clues).forEach(function (k) { if (!story.mysteries[story.clues[k].rev]) E("Indice " + k + " : mystère « " + story.clues[k].rev + " » inconnu."); });
    Object.keys(story.companions).forEach(function (k) {
      var c = story.companions[k];
      if (!c.name) E("Compagnon " + k + " sans nom.");
      Object.keys(c.bonus || {}).forEach(function (d) { if (DOM_KEYS.indexOf(d) < 0) E("Compagnon " + k + " : domaine « " + d + " » inconnu."); });
    });
    Object.keys(story.heroes || {}).forEach(function (k) {
      var H = story.heroes[k];
      if (!story.companions[k]) E("Héros « " + k + " » : il lui faut aussi une entrée dans companions (nom, confiance).");
      if (!H.player && !M.ARCHS[H.arch]) E("Héros « " + k + " » : classe « " + H.arch + " » inconnue.");
      Object.keys(H.souvenirs || {}).forEach(function (id) { if (!H.souvenirs[id].label) E("Héros « " + k + " » : souvenir « " + id + " » sans libellé."); });
    });
    if (story.heroes && story.leadStart && !story.heroes[story.leadStart]) E("Héros de départ « " + story.leadStart + " » inconnu.");
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
    Object.keys(places).forEach(function (k) { var pl = places[k]; if (!P[pl.arrive]) E("Lieu « " + k + " » : passage d'arrivée « " + pl.arrive + " » inconnu."); (pl.arriveIf || []).forEach(function (a) { if (!P[a.passage]) E("Lieu « " + k + " » : arrivée « " + a.passage + " » inconnue."); }); });
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
    Object.keys(Wd.events).forEach(function (k) { if (!P[Wd.events[k].passage]) E("Événement « " + k + " » : passage « " + Wd.events[k].passage + " » inconnu."); });
    Object.keys(story.shops || {}).forEach(function (k) { (story.shops[k].sells || []).forEach(function (x) { if (!items[x.item]) E("Boutique « " + k + " » : objet « " + x.item + " » inconnu."); }); });
    Object.keys(items).forEach(function (k) { var it = items[k]; if (!it.name) E("Objet « " + k + " » sans nom."); });
    function checkFight(f, where) {
      (f.enemies || []).forEach(function (e) { var id = e.id || e; if (typeof id === "string" && !enemies[id]) E(where + " : ennemi « " + id + " » inconnu."); });
      ["win", "lose"].forEach(function (k) { if (!f[k]) E(where + " : combat sans issue « " + k + " »."); });
      [f.win, f.lose, f.flee, f.talk && f.talk.win, f.calm].forEach(function (b) { if (!b) return; checkFx(b.fx, where); (Array.isArray(b.to) ? b.to.map(function (x) { return x.to; }) : [b.to]).forEach(function (t) { if (t !== "@ret" && t !== "@route" && t !== "@team" && !P[t]) E(where + " : le combat mène à « " + t + " », qui n'existe pas."); }); });
    }
    function checkCond(c, where) {
      if (c == null || typeof c === "boolean" || typeof c === "string") return;
      if (Array.isArray(c)) { c.forEach(function (x) { checkCond(x, where); }); return; }
      var k = Object.keys(c).filter(function (x) { return COND_KEYS.indexOf(x) >= 0; })[0];
      if (!k) { E(where + " : condition inconnue " + JSON.stringify(c).slice(0, 80)); return; }
      if (k === "not") checkCond(c.not, where);
      if (k === "all" || k === "any") c[k].forEach(function (x) { checkCond(x, where); });
      if (k === "count") c.count.forEach(function (x) { checkCond(x, where); });
      if (k === "clues" && !story.mysteries[c.clues]) E(where + " : mystère « " + c.clues + " » inconnu.");
      if (k === "clue" && !story.clues[c.clue]) E(where + " : indice « " + c.clue + " » inconnu.");
      if (["present", "loyal", "met", "gone", "conf", "fear"].indexOf(k) >= 0 && !story.companions[c[k]]) E(where + " : compagnon « " + c[k] + " » inconnu.");
      if ((k === "relic" || k === "given") && !story.relics[c[k]]) E(where + " : relique « " + c[k] + " » inconnue.");
      if (k === "fac" && !story.factions[c.fac]) E(where + " : faction « " + c.fac + " » inconnue.");
      if (k === "seen" && !P[c.seen]) E(where + " : passage « " + c.seen + " » inconnu.");
      if (k === "quest" && !qids[c.quest]) E(where + " : quête « " + c.quest + " » inconnue.");
      if (k === "arch" && !M.ARCHS[c.arch]) E(where + " : archétype « " + c.arch + " » inconnu.");
      if (k === "item" && !items[c.item]) E(where + " : objet « " + c.item + " » inconnu.");
      if ((k === "place" || k === "known") && !places[c[k]]) E(where + " : lieu « " + c[k] + " » inconnu.");
      if (k === "person" && !people[c.person]) E(where + " : personnage « " + c.person + " » inconnu.");
      if ((k === "lead" || k === "heroLevel") && !(story.heroes || {})[c[k]]) E(where + " : héros « " + c[k] + " » inconnu.");
      if (k === "away" && !story.companions[c.away]) E(where + " : compagnon « " + c.away + " » inconnu.");
      if (k === "team" && !(story.teams || {})[c.team]) E(where + " : équipe « " + c.team + " » inconnue.");
      if (k === "souv") checkSouv(c.souv, where);
      if (k === "souvenirs" && c.souvenirs !== "lead" && !(story.heroes || {})[c.souvenirs]) E(where + " : héros « " + c.souvenirs + " » inconnu.");
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
      [].concat(fx.join || [], fx.met || [], fx.leave || []).concat(Object.keys(fx.conf || {}), Object.keys(fx.fear || {}))
        .forEach(function (x) { if (!story.companions[x]) E(where + " : compagnon « " + x + " » inconnu."); });
      Object.keys(fx.fac || {}).forEach(function (x) { if (!story.factions[x]) E(where + " : faction « " + x + " » inconnue."); });
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
    }
    var ends = 0;
    Object.keys(P).forEach(function (id) {
      var p = P[id], where = "§ " + id;
      if (p.act && !acts[p.act]) E(where + " : acte « " + p.act + " » inconnu.");
      if (!Array.isArray(p.text) || !p.text.length) E(where + " : pas de texte.");
      if (p.end) { ends++; return; }
      if (p.combat) { checkFight(p.combat, where); eachFx(p, function (fx) { checkFx(fx, where); }); return; }
      if ((!Array.isArray(p.choices) || !p.choices.length) && !p.routes && !p.shop) { E(where + " : aucun choix (seules les fins n'en ont pas)."); return; }
      if (p.place && !places[p.place]) E(where + " : lieu « " + p.place + " » inconnu.");
      if (p.shop && !(story.shops || {})[p.shop]) E(where + " : boutique « " + p.shop + " » inconnue.");
      p.choices = p.choices || [];
      p.choices.forEach(function (c, i) {
        var w = where + " choix " + (i + 1);
        if (!c.label) E(w + " : pas de texte de bouton.");
        if (c.test) {
          if (DOM_KEYS.indexOf(c.test.dom) < 0) E(w + " : domaine « " + c.test.dom + " » inconnu.");
          if (!c.win || !c.lose) E(w + " : un jet demande « win » et « lose ».");
        } else if (c.to == null && !c.travel && !c.fight) E(w + " : pas de destination.");
        if (c.who && !story.companions[c.who]) E(w + " : compagnon « " + c.who + " » inconnu.");
        targetsOf(c).forEach(function (t) { if (t !== "@ret" && t !== "@route" && t !== "@team" && !P[t]) E(w + " : mène à « " + t + " », qui n'existe pas."); });
        if (c.travel && !routes[c.travel]) E(w + " : route « " + c.travel + " » inconnue.");
        if (c.fight) checkFight(c.fight, w);
        if (Array.isArray(c.to) && c.to.length && c.to[c.to.length - 1].if != null) W(w + " : la dernière destination devrait être sans condition.");
      });
      // Tags: who a paragraph, a choice or the whole scene needs, and when.
      [p].concat((p.text || []).filter(function (t) { return t && typeof t === "object"; }), p.choices).forEach(function (t) {
        [].concat(t.with || [], t.without || []).forEach(function (k) { if (k !== "any" && !story.companions[k]) E(where + " : tag with/without, compagnon « " + k + " » inconnu."); });
        if (t.when != null && t.when !== "day" && t.when !== "night") E(where + " : tag when, « " + t.when + " » (attendu : day ou night).");
        if (t.first && t.again) E(where + " : tags first et again ensemble, jamais affiché.");
        if (t.takes != null && !(typeof t.takes === "number" && t.takes > 0) && ["evening", "night", "morning", "noon", "day"].indexOf(t.takes) < 0) E(where + " : tag takes, « " + t.takes + " » (attendu : evening, night, morning, noon, day ou un nombre d'heures).");
        [].concat(t.outcome || []).forEach(function (o) { if (["win", "lose", "flee", "calm"].indexOf(o) < 0) E(where + " : tag outcome, « " + o + " » inconnu."); });
      });
      eachCond(p, function (c) { checkCond(c, where); });
      eachFx(p, function (fx) { checkFx(fx, where); });
    });
    (story.past || []).forEach(function (q, i) { (q.answers || []).forEach(function (a) { checkFx(a.fx, "Ton passé " + (i + 1)); }); });
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
      if (!hit) out.push("Petite quête « " + q.title + " » : son tag n'est relu par aucun acte suivant ni aucune fin.");
      else if (!inEnd) out.push("Petite quête « " + q.title + " » : pas de ligne dans l'épilogue.");
    });
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
    function play(mode, seed, toutJouer) {
      var rnd = seededRng(seed), s = null, fixed = mode === "win" ? 0.94 : mode === "lose" ? 0.02 : null;
      // Fixed dice only on tests: a fight always uses real dice, or two sides that always miss would never end.
      M.setRng(fixed == null ? rnd : function () { return s && s.node === "@combat" ? rnd() : fixed; });
      s = M.freshState(story, { toutJouer: toutJouer });
      s.arch = archs[Math.floor(rnd() * archs.length)]; s.name = "Test";
      (story.past || []).forEach(function (q) { var a = q.answers[Math.floor(rnd() * q.answers.length)]; try { M.apply(story, s, a.fx); } catch (e) { errs["Ton passé : " + e.message] = 1; } });
      try { M.start(story, s); } catch (e) { errs["départ : " + e.message] = 1; return; }
      for (var step = 0; step < maxSteps; step++) {
        var v;
        seen[s.node] = (seen[s.node] || 0) + 1;
        try {
          v = M.view(story, s);
          v.text.forEach(function (t) { if (/undefined|NaN|\[object|\{[a-z]+\}/.test(t)) throw new Error("texte suspect : " + t.slice(0, 80)); });
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
        var globalFresh = mode === "explore" ? cs.filter(function (x) { return !x.sys && targetsOf(x).some(function (t) { return P[t] && !seen[t]; }); }) : [];
        if (globalFresh.length) c = globalFresh[Math.floor(rnd() * globalFresh.length)];
        else if (mode === "curious" || mode === "win" || mode === "explore") {
          var fresh = cs.filter(function (x) {
            if (x.sys === "travel") { var r = (story_.world.routes || []).filter(function (y) { return y.id === x.route; })[0]; return !s.routesDone[x.route] || !s.seen[(story_.world.places[x.dest] || {}).arrive]; }
            if (x.sys === "buy") return rnd() < 0.5;
            if (x.sys) return false;
            return targetsOf(x).some(function (t) { return t !== "@ret" && t !== "@route" && P[t] && !s.seen[t]; });
          });
          var pool = fresh.length ? fresh : cs.filter(function (x) { return x.sys !== "sell"; });
          if (!pool.length) pool = cs;
          c = pool[Math.floor(rnd() * pool.length)];
        } else c = cs[Math.floor(rnd() * cs.length)];
        if (!c.sys) taken[s.node + " | " + c.label] = 1;
        try { M.choose(story, s, c); } catch (e) { errs["§ " + s.node + " / « " + String(c.label).slice(0, 40) + " » : " + e.message] = 1; return; }
        s.events.forEach(function (e) { if (/undefined|NaN/.test(e.text)) errs["§ " + s.node + " effet : " + e.text.slice(0, 80)] = 1; });
      }
      loops[s.node] = (loops[s.node] || 0) + 1;
    }
    var n = 0;
    for (var i = 1; i <= games; i++) {
      var mode = modes[i % modes.length];
      play(mode, i * 7919, i % 2 === 0);
      n++;
    }
    M.setRng(null);
    var unreached = ids.filter(function (id) { return !seen[id]; });
    var neverTaken = [];
    ids.forEach(function (id) { var p = P[id]; (p.choices || []).forEach(function (c) { if (c.restart) return; var k = id + " | " + c.label; if (!taken[k]) neverTaken.push("§ " + id + " : « " + String(c.label).slice(0, 60) + " »" + (allowedCount[k] ? " (possible, jamais pris)" : " (jamais possible)")); }); });
    return {
      games: n, passages: ids.length, guards: Object.keys(guards), errors: Object.keys(errs), deadEnds: dead, loops: loops, unreached: unreached, endings: endings,
      neverTaken: neverTaken, questDone: questDone, levelAtEnd: levelAtEnd,
      questsNeverDone: story.quests.filter(function (q) { return !questDone[q.id] && !q.later; }).map(function (q) { return q.title; }),
      questsLater: story.quests.filter(function (q) { return !questDone[q.id] && q.later; }).map(function (q) { return q.title; }),
      endingsNeverReached: ids.filter(function (id) { return P[id].end && !endings[id]; }),
    };
  }

  // Intent: validate(Story, Options) -> Report
  // Blocking problems make the story unplayable; warnings are shown but do not block.
  function validate(story, opts) {
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

  var API = { validate: validate, staticCheck: staticCheck, echoCheck: echoCheck, simulate: simulate, actOfProblem: actOfProblem, readTags: readTags };
  if (typeof module !== "undefined" && module.exports) module.exports = API; else root.Validateur = API;
})(typeof self !== "undefined" ? self : this);
