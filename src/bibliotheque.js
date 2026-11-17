"use strict";
// The library's shelves: what kind of book each one is, and how a reader finds one among many.
// Intent: card(Story) -> StoryMeta = the library card of a book (the fields the home page reads without the text).
// Intent: facets(StoryMeta) -> { type, joueurs, longueur, public, auteur, genres } = what a book is, said once here:
// a story declares only its genres (`tags`); the rest comes from what it already declares (lecture, cartes, multi,
// adult, author, its size).
// Intent: search([StoryMeta], query) -> [{ m, score }] = the books that match, best first, tolerant of typos, accents
// and missing spaces (« stevensn », « enquete », « huisclos »).
// Why: Clément, 17/11: « la collection demande un peu de tri » ; tags, search, sort, with fuzzy finding.
(function (root) {
  // ---------------------------------------------------------------- the genres a story may declare in `tags`
  // k: the key written in the story; label: what the reader sees; also: other words a reader may type for it.
  var GENRES = [
    { k: "fantasy", label: "Fantasy", also: "merveilleux magie sortilege monde imaginaire heroic" },
    { k: "aventure", label: "Aventure", also: "aventures action" },
    { k: "voyage", label: "Voyage", also: "route periple chemin expedition" },
    { k: "enquete", label: "Enquête", also: "policier mystere detective crime meurtre indices" },
    { k: "intrigue", label: "Intrigue politique", also: "politique complot pouvoir conseil manipulation" },
    { k: "drame", label: "Drame intime", also: "psychologie psychologique famille deuil secrets" },
    { k: "huisclos", label: "Huis clos", also: "huis clos" },
    { k: "guerre", label: "Guerre", also: "siege bataille armee soldats" },
    { k: "mer", label: "Mer et marins", also: "bateau navire ocean marin marine pirates" },
    { k: "sf", label: "Science-fiction", also: "sf anticipation futur espace" },
    { k: "fantastique", label: "Fantastique", also: "etrange surnaturel horreur epouvante" },
    { k: "historique", label: "Roman historique", also: "histoire epoque" },
    { k: "nature", label: "Nature et animaux", also: "animaux animal loup sauvage survie" },
    { k: "ecole", label: "École", also: "eleve college apprentissage etudes" },
    { k: "enigmes", label: "Énigmes", also: "enigme devinette devinettes casse-tete chiffre code rebus" },
  ];
  var GENRE = {}; GENRES.forEach(function (g) { GENRE[g.k] = g; });

  // ---------------------------------------------------------------- the other facets, derived
  // A game's size is its passages; a novel to read is one passage per chapter, so its size is its words.
  var GAME_SHORT = 100, GAME_LONG = 1000, READ_SHORT = 40000, READ_LONG = 70000;
  var FACETS = [
    { k: "type", label: "Jeu ou lecture", values: [["jeu", "À jouer"], ["deuxfois", "À lire deux fois"], ["cartes", "À cartes"], ["lecture", "À lire"]] },
    { k: "joueurs", label: "Joueurs", values: [["seul", "Seul"], ["deux", "À deux"], ["plusieurs", "À plusieurs"]] },
    { k: "longueur", label: "Longueur", values: [["court", "Court"], ["moyen", "Moyen"], ["long", "Long"]] },
    { k: "genres", label: "Genres", values: GENRES.map(function (g) { return [g.k, g.label]; }) },
    { k: "public", label: "Public", values: [["tous", "Pour tous"], ["adulte", "Thèmes adultes"]] },
    { k: "auteur", label: "Auteur", values: null },   // the authors of the library, found in it
  ];
  // Words a reader may type for a facet's value (searched like the rest of the card).
  var FACET_WORDS = {
    "type:jeu": "jeu jouer livre-jeu choix heros", "type:cartes": "cartes carte main", "type:lecture": "lire lecture roman classique sans choix", "type:deuxfois": "deux fois deux lectures relire seconde lecture",
    "joueurs:seul": "seul solo un joueur", "joueurs:deux": "deux 2 joueurs duo", "joueurs:plusieurs": "plusieurs groupe joueurs famille",
    "longueur:court": "court courte rapide soiree", "longueur:moyen": "moyen", "longueur:long": "long longue grand",
    "public:adulte": "adulte adultes mature",
  };

  function textOf(t) { return typeof t === "string" ? t : (t && typeof t.text === "string" ? t.text : ""); }
  function wordCount(st) {
    var n = 0, P = st.passages || {};
    Object.keys(P).forEach(function (k) {
      var t = P[k].text;
      (Array.isArray(t) ? t : [t]).forEach(function (x) { var s = textOf(x).trim(); if (s) n += s.split(/\s+/).length; });
    });
    return n;
  }
  // Intent: card(Story) -> StoryMeta. The one place that says which fields a library card carries (tests/page.js
  // writes them for the site, app/app.js for the page that carries the stories, tests/site.js for the catalogue).
  function card(st) {
    return { id: st.id, title: st.title, subtitle: st.subtitle || "", summary: st.summary || "", version: st.version || 1,
      acts: (st.acts || []).length, passages: Object.keys(st.passages || {}).length, words: wordCount(st),
      multi: st.multi || null, kid: st.kid || null, adult: st.adult || null, cover: st.cover || null, age: st.age || null, author: st.author || null,
      lecture: !!st.lecture, cartes: !!st.cartes, twice: !!st.twice, tags: Array.isArray(st.tags) ? st.tags.slice() : [] };
  }
  // « R. L. Stevenson · traduction de… » -> « R. L. Stevenson » ; « Claude, pour Clément » -> « Claude »
  function authorName(a) { return a ? String(a).split(/\s+·\s+|,\s+/)[0].trim() : ""; }
  function facets(m) {
    var n = m.lecture ? m.words || 0 : m.passages || 0;
    var lo = m.lecture ? [READ_SHORT, READ_LONG] : [GAME_SHORT, GAME_LONG];
    return {
      type: m.lecture ? "lecture" : m.cartes ? "cartes" : m.twice ? "deuxfois" : "jeu",
      joueurs: m.lecture ? null : !m.multi ? "seul" : (m.multi.min || 2) === 2 && (m.multi.max || 2) === 2 ? "deux" : "plusieurs",
      longueur: !n ? null : n < lo[0] ? "court" : n < lo[1] ? "moyen" : "long",
      public: m.adult ? "adulte" : "tous",
      auteur: authorName(m.author) || null,
      genres: (m.tags || []).filter(function (t) { return GENRE[t]; }),
    };
  }
  function label(facet, v) {
    if (facet === "auteur") return v;
    var f = FACETS.filter(function (x) { return x.k === facet; })[0], hit = f && f.values && f.values.filter(function (x) { return x[0] === v; })[0];
    return hit ? hit[1] : v;
  }
  // Intent: matches(StoryMeta, { facet: [values] }) -> bool. Values of one facet: any of them; facets: all of them.
  function matches(m, filters, extra) {
    var f = facets(m);
    if (extra) Object.keys(extra).forEach(function (k) { f[k] = extra[k]; });
    return Object.keys(filters || {}).every(function (k) {
      var want = filters[k]; if (!want || !want.length) return true;
      var have = Array.isArray(f[k]) ? f[k] : f[k] == null ? [] : [f[k]];
      return want.some(function (v) { return have.indexOf(v) >= 0; });
    });
  }

  // ---------------------------------------------------------------- fuzzy search
  // Intent: fold(text) -> text = lower case, no accents, ligatures opened, every other sign a space.
  function fold(s) {
    return String(s || "").toLowerCase().replace(/œ/g, "oe").replace(/æ/g, "ae")
      .normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  }
  var STOP = " le la les l de des du d un une et a au aux en ou sur pour par avec qui que ".split(" ").reduce(function (o, w) { if (w) o[w] = 1; return o; }, {});
  // Optimal string alignment distance (a swap of two letters counts one), stopped early above `max`.
  function distance(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    var prev2 = null, prev = [], i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      var cur = [i], best = i;
      for (j = 1; j <= b.length; j++) {
        var c = a[i - 1] === b[j - 1] ? 0 : 1, v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + c);
        if (prev2 && i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, prev2[j - 2] + 1);
        cur[j] = v; if (v < best) best = v;
      }
      if (best > max) return max + 1;
      prev2 = prev; prev = cur;
    }
    return prev[b.length];
  }
  function allowed(t) { return t.length < 4 ? 0 : t.length < 6 ? 1 : 2; }
  // How well one typed word matches one word of the card: 1 the same word, less for a start, a piece, a typo.
  // In a long text (strict: the summary, the subtitle), a short start or a piece of a word is mostly chance (« mer » in « mère »).
  function wordMatch(t, w, strict) {
    if (t === w) return 1;
    if (t.length >= (strict ? 4 : 2) && w.indexOf(t) === 0) return 0.85;
    if (!strict && t.length >= 4 && w.indexOf(t) > 0) return 0.6;
    var max = strict ? (t.length >= 6 ? 1 : 0) : allowed(t); if (!max) return 0;
    var d = distance(t, w, max); if (d <= max) return 0.75 - 0.15 * d;
    if (w.length > t.length) { d = distance(t, w.slice(0, t.length), 1); if (d <= 1) return 0.5; }   // a typo while still typing
    return 0;
  }
  // The searchable fields of a card, folded once per version of the book. Weights: where a word is found matters.
  var WEIGHTS = { title: 6, author: 4, kinds: 4, subtitle: 3, summary: 1 };
  var cache = {};
  function fieldsOf(m) {
    var key = m.id + "|" + (m.version || 1) + "|" + m.title;
    if (cache[key]) return cache[key];
    var f = facets(m), kinds = [], labels = [];
    f.genres.forEach(function (g) { kinds.push(GENRE[g].label, GENRE[g].also); labels.push(fold(GENRE[g].label)); });
    ["type", "joueurs", "longueur", "public"].forEach(function (k) { if (f[k]) { kinds.push(label(k, f[k])); labels.push(fold(label(k, f[k]))); if (FACET_WORDS[k + ":" + f[k]]) kinds.push(FACET_WORDS[k + ":" + f[k]]); } });
    // Each field: its words, and two words run together (« huisclos », « conandoyle »), found whole or by their start.
    var words = function (s) {
      var w = fold(s).split(" ").filter(Boolean), pairs = [];
      for (var i = 0; i + 1 < w.length; i++) pairs.push(w[i] + w[i + 1]);
      return { w: w, pairs: pairs };
    };
    return (cache[key] = { title: words(m.title), author: words(m.author), kinds: words(kinds.join(" ")), subtitle: words(m.subtitle), summary: words(m.summary), labels: labels });
  }
  function terms(query) {
    var all = fold(query).split(" ").filter(Boolean), kept = all.filter(function (t) { return !STOP[t]; });
    return kept.length ? kept : all;
  }
  // A query that is a facet's whole name (« à deux », « à lire deux fois ») ranks the books of that facet first.
  function score(m, ts, whole) {
    var F = fieldsOf(m), total = 0;
    for (var i = 0; i < ts.length; i++) {
      var best = 0;
      Object.keys(WEIGHTS).forEach(function (k) {
        var ws = F[k].w, ps = F[k].pairs, top = 0, t = ts[i], strict = k === "summary" || k === "subtitle";
        for (var j = 0; j < ws.length && top < 1; j++) { var s = wordMatch(t, ws[j], strict); if (s > top) top = s; }
        for (j = 0; j < ps.length && top < 0.85 && t.length >= 5; j++) if (ps[j].indexOf(t) === 0) top = ps[j] === t ? 1 : 0.85;
        if (top * WEIGHTS[k] > best) best = top * WEIGHTS[k];
      });
      if (!best) return 0;   // every word typed must be found somewhere
      total += best;
    }
    if (ts.length > 1 && fold(m.title).indexOf(ts.join(" ")) >= 0) total += WEIGHTS.title;   // the words in the title, in order
    if (whole && F.labels.indexOf(whole) >= 0) total += WEIGHTS.kinds;
    return total;
  }
  function search(list, query) {
    var ts = terms(query);
    if (!ts.length) return list.map(function (m) { return { m: m, score: 0 }; });
    var whole = fold(query).trim();
    return list.map(function (m) { return { m: m, score: score(m, ts, whole) }; }).filter(function (x) { return x.score > 0; })
      .sort(function (a, b) { return b.score - a.score || sortKey(a.m).localeCompare(sortKey(b.m), "fr"); });
  }
  // Intent: sortKey(StoryMeta) -> text = the title as a shelf orders it: « Le Monde perdu » under M.
  function sortKey(m) { return fold(m.title).replace(/^(le|la|les|l|un|une) /, ""); }

  // ---------------------------------------------------------------- the checker's part
  // Intent: checkTags(Story) -> { errors, warnings } for the validator.
  function checkTags(st) {
    var errors = [], warnings = [];
    if (st.tags === undefined) return { errors: errors, warnings: warnings };
    if (!Array.isArray(st.tags) || st.tags.some(function (t) { return typeof t !== "string" || !t.trim(); }))
      errors.push("« tags » s'écrit [\"aventure\", \"mer\", …] : la liste des genres du livre.");
    else st.tags.forEach(function (t) {
      if (!GENRE[t]) warnings.push("Genre « " + t + " » inconnu de la bibliothèque (il ne servira pas aux filtres). Genres connus : " + GENRES.map(function (g) { return g.k; }).join(", ") + ".");
    });
    return { errors: errors, warnings: warnings };
  }

  var API = { GENRES: GENRES, FACETS: FACETS, card: card, facets: facets, label: label, matches: matches, authorName: authorName,
    fold: fold, distance: distance, search: search, sortKey: sortKey, checkTags: checkTags };
  if (typeof module !== "undefined" && module.exports) module.exports = API; else root.Bibliotheque = API;
})(typeof self !== "undefined" ? self : this);
