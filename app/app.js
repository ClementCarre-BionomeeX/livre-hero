"use strict";
// Livre-jeu page: the library of stories, player profiles, saved games, character creation, the reading screen and
// the notebook (carnet). Rules live in Moteur (src/moteur.js); this file only shows the state and saves it.
(function () {
  var M = window.Moteur, V = window.Validateur;
  var UNDO_MAX = 25;                       // states kept for "Choix précédent" (each a few KB; a save stays far under 256 KiB)
  var LOG_MAX = 250;                       // journal entries kept in a save
  var PART_CHARS = 180000;                 // an imported story is cut in parts under the 256 KiB document limit
  var DB_WAIT_MS = 10000;                  // claude.use("db") answers null after about 10 s when nobody serves it
  var DB_CALL_MS = 8000;                   // a db read or write that has not answered by then is treated as failed
  var DOC_MAX_CHARS = 240000;              // stay under the db's 256 KiB per document (choice: margin for encoding)
  var TTS_LINE_MAX = 1900;                 // tts takes up to 2,000 characters a line
  var LOCAL = "livre-heros:";
  var PLAY_GAP_MS = 3 * 60 * 1000;         // play time counts at most 3 minutes between two choices (a pause is not play)
  var MARKS_MAX = 8;                       // named bookmarks kept per game
  var RECIT_CHARS = 180000;                // one part of a game's story ("Mon aventure") stays under the db document limit
  var COLORS = ["#2c7464", "#8f6512", "#65448a", "#a13b2a", "#2f5f8f", "#5b6b2a"];

  // ------------------------------------------------------------------ small helpers
  // Intent: build(Tag, Attrs, Child*) -> Element
  function h(tag, attrs) {
    var el = document.createElement(tag), kids = Array.prototype.slice.call(arguments, 2);
    for (var k in attrs || {}) {
      var v = attrs[k];
      if (v == null || v === false) continue;
      if (k === "class") el.className = v;
      else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), v);
      else if (k === "html") el.innerHTML = v;
      else el.setAttribute(k, v === true ? "" : v);
    }
    (function add(list) { list.forEach(function (c) { if (c == null || c === false) return; if (Array.isArray(c)) add(c); else el.appendChild(typeof c === "string" || typeof c === "number" ? document.createTextNode(String(c)) : c); }); })(kids);
    return el;
  }
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  // Minimal markdown for story text: *italic*, **bold**, line breaks. Escaped first, so story text cannot inject markup.
  function md(t) { return esc(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/\n/g, "<br>"); }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function when(ts) { try { return new Date(ts).toLocaleString("fr-FR", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }); } catch (e) { return ""; } }
  function hash(str) { var x = 2166136261; for (var i = 0; i < str.length; i++) { x ^= str.charCodeAt(i); x = Math.imul(x, 16777619); } return x >>> 0; }
  function lsGet(k) { try { return JSON.parse(localStorage.getItem(LOCAL + k) || "null"); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(LOCAL + k, JSON.stringify(v)); } catch (e) { /* storage refused: the page still works this visit */ } }

  // Intent: copy(Doc) -> Doc
  // Why: db documents come back frozen; the page adds an id and updates saves in place (Clément's "read only property 'id'").
  function thaw(o) { return JSON.parse(JSON.stringify(o)); }

  // ------------------------------------------------------------------ storage: the db capability, else this browser
  // Intent: create() -> Store
  // Why: saves and imported stories must follow the family from one device to another (db), and the page must still
  // work where db is absent (signed out, preview): then everything stays in this browser.
  var Store = {
    db: null, mode: "local", chains: {},
    init: function () {
      var self = this;
      if (!(window.claude && window.claude.use)) return Promise.resolve();
      var timer = new Promise(function (res) { setTimeout(function () { res(null); }, DB_WAIT_MS); });
      return Promise.race([window.claude.use("db").catch(function () { return null; }), timer]).then(function (db) { if (db) { self.db = db; self.mode = "db"; } });
    },
    lastError: "",
    // Intent: guard(Promise) -> Promise = race against DB_CALL_MS ! records lastError
    // Why: a db call that never answers (consent pending, network) must not freeze the page.
    timed: function (pr) {
      var self = this;
      var t = new Promise(function (_, rej) { setTimeout(function () { rej({ code: "timeout" }); }, DB_CALL_MS); });
      return Promise.race([pr, t]).catch(function (e) { self.lastError = (e && e.code) || "erreur"; throw e; });
    },
    localList: function (coll) {
      var idx = lsGet("idx:" + coll) || [];
      return idx.map(function (id) { var o = lsGet(coll + ":" + id); if (o) o.id = id; return o; }).filter(Boolean);
    },
    localPut: function (coll, id, obj) {
      var idx = lsGet("idx:" + coll) || []; if (idx.indexOf(id) < 0) { idx.push(id); lsSet("idx:" + coll, idx); }
      lsSet(coll + ":" + id, obj);
    },
    // Intent: choose(Doc, Doc) -> Doc = this browser's copy when it is the later one ! sends it back to the db
    // Why: a save whose db writes failed (timeout, page reloaded by a new version) kept an old copy in the db, and
    // resuming took it over the newer one in this browser (Clément's game went back to the rats, 11/11). Without an
    // `updated` on both, the db wins as before (a room other players write).
    newer: function (coll, id, remote, local) {
      if (!remote) return local;
      if (local && remote.updated != null && (local.updated || 0) > remote.updated) {
        var repaired = JSON.parse(JSON.stringify(local)); delete repaired.id;
        if (this.db) this.timed(this.db.doc(coll + "/" + id).set(repaired)).catch(function () {});
        return local;
      }
      return remote;
    },
    // Intent: list(Collection) -> [Doc] = db docs ∪ this browser's copies (the later one wins on the same id)
    // Why: a write the db refused or has not shown yet must still appear (Clément's reader "Colin" vanished).
    list: function (coll) {
      var local = this.localList(coll);
      if (!this.db) return Promise.resolve(local);
      var self = this, byId = {}; local.forEach(function (o) { byId[o.id] = o; });
      return this.timed(this.db.collection(coll).get()).then(function (q) {
        var out = q.docs.map(function (d) { var o = thaw(d.data()); o.id = d.id; o = self.newer(coll, d.id, o, byId[d.id]); o.id = d.id; return o; });
        var seen = {}; out.forEach(function (o) { seen[o.id] = 1; });
        local.forEach(function (o) { if (!seen[o.id]) out.push(o); });
        return out;
      }).catch(function () { return local; });
    },
    get: function (coll, id) {
      var local = lsGet(coll + ":" + id), self = this;
      if (!this.db) return Promise.resolve(local);
      return this.timed(this.db.doc(coll + "/" + id).get()).then(function (d) { return self.newer(coll, id, d.exists ? thaw(d.data()) : null, local); }).catch(function () { return local; });
    },
    // One write at a time per document: the next one waits for the last (the db asks for it). Always copied to this
    // browser first, so a refused db write loses nothing here.
    // raw: a document copied from a backup or the shared folder, kept as it is (no new date, nothing to send back).
    put: function (coll, id, obj, raw) {
      var self = this, key = coll + "/" + id;
      if (!raw) { if (coll === "profils" && obj) obj.updated = Date.now(); if (typeof Sync !== "undefined") Sync.touch(); }
      obj = JSON.parse(JSON.stringify(obj));   // the db refuses undefined values
      this.localPut(coll, id, obj);
      if (!this.db) return Promise.resolve();
      var prev = this.chains[key] || Promise.resolve();
      var next = prev.then(function () { return self.timed(self.db.doc(key).set(obj)); }).catch(function (e) {
        if (e && e.code === "unavailable") return new Promise(function (r) { setTimeout(r, 400 + Math.random() * 600); }).then(function () { return self.timed(self.db.doc(key).set(obj)); });
        throw e;
      });
      this.chains[key] = next.catch(function () {});
      return next;
    },
    del: function (coll, id, raw) {
      if (!raw && typeof Sync !== "undefined") Sync.tomb(coll, id);
      var idx = (lsGet("idx:" + coll) || []).filter(function (x) { return x !== id; }); lsSet("idx:" + coll, idx);
      try { localStorage.removeItem(LOCAL + coll + ":" + id); } catch (e) { /* ignore */ }
      if (this.db) return this.timed(this.db.doc(coll + "/" + id).delete()).catch(function () {});
      return Promise.resolve();
    },
  };

  // ------------------------------------------------------------------ app state
  var A = {
    screen: "home", profiles: [], profile: null, builtins: {}, imported: [], games: [], notice: "", importReport: null,
    create: null, game: null, carnet: null, carnetTab: "heros", confirmDel: null, tts: null, speaking: false, downloads: null, busy: true,
    modal: null, recap: false, rollAnim: false, open: {}, essai: null, ed: null, recit: null,
  };
  var app = document.getElementById("app");

  function loadBuiltins() {
    var el = document.getElementById("histoires-fournies");
    var list = el ? JSON.parse(el.textContent) : [];
    list.forEach(function (st) { A.builtins[st.id] = st; });
  }
  function storyMeta(st) { return { id: st.id, title: st.title, subtitle: st.subtitle || "", summary: st.summary || "", version: st.version || 1, acts: (st.acts || []).length, passages: Object.keys(st.passages || {}).length, multi: st.multi || null, kid: st.kid || null, adult: st.adult || null }; }
  function allStories() {
    var out = Object.keys(A.builtins).map(function (k) { var m = storyMeta(A.builtins[k]); m.builtin = true; return m; });
    A.imported.forEach(function (m) { if (!A.builtins[m.id]) out.push(m); });
    return out;
  }
  // Intent: load(StoryId) -> Story ! reads(Store)
  function loadStory(id) {
    if (A.builtins[id]) return Promise.resolve(A.builtins[id]);
    return Store.get("scenarios", id).then(function (meta) {
      if (!meta) throw new Error("Histoire introuvable : " + id);
      var parts = [];
      for (var i = 0; i < meta.parts; i++) parts.push(Store.get("scenarioParts", id + "~" + i));
      return Promise.all(parts).then(function (ps) { return JSON.parse(ps.map(function (p) { return (p && p.chunk) || ""; }).join("")); });
    });
  }
  function refresh() {
    return Promise.all([Store.list("profils"), Store.list("scenarios"), Store.list("parties"), Store.list("multis"), Store.list("salles")]).then(function (r) {
      A.multis = r[3].concat(r[4]).sort(function (a, b) { return (b.updated || 0) - (a.updated || 0); });
      var got = {}; r[0].forEach(function (p) { got[p.id] = 1; });
      (A.profiles || []).forEach(function (p) { if (!got[p.id]) r[0].push(p); });   // just added, not listed yet
      A.profiles = r[0].sort(function (a, b) { return (a.created || 0) - (b.created || 0); });
      A.imported = r[1];
      A.allGames = r[2];
      var remembered = lsGet("profil");
      if (!A.profile || !A.profiles.some(function (p) { return p.id === A.profile.id; })) A.profile = A.profiles.filter(function (p) { return p.id === remembered; })[0] || A.profiles[0] || null;
      A.games = (A.allGames || []).filter(function (g) { return A.profile && g.profil === A.profile.id; }).sort(function (a, b) { return (b.updated || 0) - (a.updated || 0); });
    });
  }

  // ------------------------------------------------------------------ rendering
  // Intent: render(App) -> () ! redraws the screen; a failure shows what broke and a way back, never an empty page
  // Why: render empties #app first, so an error while drawing left a blank page (Clément, 11/11: black screen when
  // resuming an old save).
  function render() {
    app.textContent = "";
    Glossary.close(); if (Dictation.on) Dictation.stop();   // the text box it writes into is redrawn
    try { renderScreen(); }
    catch (e) {
      try { console.error("render: " + (e && e.stack)); } catch (x) { /* no console */ }
      app.textContent = "";
      app.appendChild(h("main", { class: "wrap read create" },
        h("h1", null, "Cette page n'a pas pu s'afficher"),
        h("p", { class: "notice bad" }, "Erreur : " + ((e && e.message) || e) + ". La sauvegarde n'a pas été touchée."),
        h("div", { class: "row" },
          A.game && !A.game.multi && A.game.undo && A.game.undo.length ? h("button", { class: "btn", onclick: function () { A.game.s = upgradeState(A.game.story, JSON.parse(A.game.undo.pop())); render(); } }, "↶ Revenir au choix précédent") : null,
          h("button", { class: "btn primary", onclick: function () { stopSpeaking(); A.carnet = null; A.game = null; A.screen = "home"; refresh().then(render); } }, "Bibliothèque"))));
    }
  }
  function renderScreen() {
    if (A.busy) { app.appendChild(h("div", { class: "wrap hero-head" }, h("h1", null, "Livre-jeu"), h("p", null, "Ouverture de la bibliothèque…"))); return; }
    if (A.screen === "home") renderHome();
    else if (A.screen === "create") renderCreate();
    else if (A.screen === "game") renderGame();
    else if (A.screen === "msetup") renderMultiSetup();
    else if (A.screen === "mcache") renderMultiCache();
    else if (A.screen === "salle") renderSalle();
    else if (A.screen === "essai") renderEssai();
    else if (A.screen === "editor") renderEditor();
    else if (A.screen === "recit") renderRecit();
    else if (A.screen === "fiche") renderFiche();
    else if (A.screen === "cartes") renderCards();
    else if (A.screen === "kids") renderKids();
    if (A.carnet) renderCarnet();
    if (A.modal) renderModal();
    applyPrefs();
    Ambiance.update();
    Music.update();
    Reading.show();
  }

  function topBar(children) { return h("header", { class: "top" }, h("div", { class: "wrap" }, children)); }
  function avatar(p) { return h("span", { class: "avatar", style: "background:" + (p.color || COLORS[0]) }, (p.name || "?").slice(0, 1).toUpperCase()); }

  function renderHome() {
    var stories = allStories();
    app.appendChild(topBar([h("span", { class: "brand grow" }, "Livre-jeu"),
      Sync.on() ? h("button", { class: "pill small", title: "Les lecteurs et les parties se retrouvent sur chaque appareil branché.", onclick: function () { A.modal = { kind: "sync" }; render(); } }, Sync.busy ? "☁ Synchronisation…" : Sync.error ? "☁ Dossier partagé ⚠" : "☁ Dossier partagé") : h("span", { class: "pill small", title: Store.mode === "db" ? "Les profils, parties et histoires importées suivent ce lien sur tous les appareils." : "Rien n'est partagé : tout reste dans ce navigateur." }, Store.mode === "db" ? "Sauvegardes partagées" : "Sauvegardes dans ce navigateur")]));
    var w = h("main", { class: "wrap" });
    w.appendChild(h("div", { class: "hero-head" }, h("h1", null, "La bibliothèque"),
      h("p", null, "Des romans dont tu tiens la plume : chaque histoire se lit, se voyage et se joue jusqu'au bout. Choisis qui lit, puis ouvre un livre.")));
    if (A.notice) w.appendChild(h("div", { class: "notice" + (A.noticeBad ? " bad" : "") }, A.notice));
    var nudge = renderBackupNudge(); if (nudge) w.appendChild(nudge);

    // Profiles
    var prof = h("section", { class: "section" }, h("h2", null, "Qui lit ?"));
    var row = h("div", { class: "profiles" });
    A.profiles.forEach(function (p) {
      row.appendChild(h("button", { class: "profile" + (A.profile && A.profile.id === p.id ? " on" : ""), onclick: function () { A.profile = p; lsSet("profil", p.id); A.games = A.allGames.filter(function (g) { return g.profil === p.id; }).sort(function (a, b) { return (b.updated || 0) - (a.updated || 0); }); render(); } }, avatar(p), p.name));
    });
    var nameIn = h("input", { placeholder: "Nouveau lecteur", "aria-label": "Nom du nouveau lecteur", maxlength: 24, style: "width:12em" });
    var addP = function () {
      var n = nameIn.value.trim(); if (!n) { nameIn.focus(); return; }
      var p = { id: uid(), name: n, color: COLORS[A.profiles.length % COLORS.length], created: Date.now() };
      A.profiles.push(p); A.profile = p; A.games = []; lsSet("profil", p.id); A.notice = ""; render();
      Store.put("profils", p.id, p).catch(function (e) { flash(n + " est enregistré dans ce navigateur seulement (partage refusé : " + ((e && e.code) || "erreur") + ").", true); });
    };
    nameIn.addEventListener("keydown", function (e) { if (e.key === "Enter") addP(); });
    row.appendChild(h("span", { class: "row" }, nameIn, h("button", { class: "btn sm", onclick: addP }, "Ajouter")));
    prof.appendChild(row);
    if (A.profile) {
      var cur = A.profile, theirs = (A.allGames || []).filter(function (g) { return g.profil === cur.id; });
      prof.appendChild(A.confirmDelProfile === cur.id
        ? h("div", { class: "confirm small" }, "Retirer " + cur.name + (theirs.length ? " et ses " + theirs.length + " partie" + (theirs.length > 1 ? "s" : "") : "") + " ?",
            h("button", { class: "btn sm danger", onclick: function () { removeProfile(cur, theirs); } }, "Oui, retirer"),
            h("button", { class: "btn sm", onclick: function () { A.confirmDelProfile = null; render(); } }, "Non"))
        : h("div", { class: "row" }, h("button", { class: "btn sm", onclick: function () { A.modal = { kind: "prefs" }; render(); } }, "⚙ Réglages de lecture de " + cur.name),
            Words.list(cur).length >= WORDS_MIN_GAME ? h("button", { class: "btn sm", onclick: Words.start }, "🎯 Jeu des mots (" + Words.list(cur).length + ")") : null,
            h("button", { class: "btn ghost sm", onclick: function () { A.confirmDelProfile = cur.id; render(); } }, "Retirer " + cur.name)));
    }
    w.appendChild(prof);

    // Saved games
    if (A.profile) {
      var sg = h("section", { class: "section" }, h("h2", null, "Parties de " + A.profile.name));
      if (!A.games.length) sg.appendChild(h("div", { class: "notice" }, "Aucune partie en cours. Ouvre un livre ci-dessous."));
      A.games.forEach(function (g) {
        var del = A.confirmDel === g.id
          ? h("span", { class: "confirm small" }, "Effacer cette partie ?", h("button", { class: "btn sm danger", onclick: function () { Store.del("parties", g.id).then(refresh).then(function () { A.confirmDel = null; render(); }); } }, "Oui, effacer"), h("button", { class: "btn sm", onclick: function () { A.confirmDel = null; render(); } }, "Non"))
          : h("button", { class: "btn sm ghost", onclick: function () { A.confirmDel = g.id; render(); } }, "Effacer");
        sg.appendChild(h("div", { class: "save-line" },
          h("div", { class: "grow" }, h("b", null, g.hero + " · " + g.storyTitle + (g.test ? " (essai)" : "")), h("div", { class: "small muted" }, (g.archLabel || "") + " niveau " + (g.level || 1) + " · " + (g.where || "") + (g.ended ? " · terminée" : "") + " · " + when(g.updated))),
          Transfer.available() && !g.test && A.builtins[g.story] ? h("button", { class: "btn sm ghost", title: "Envoyer cette partie vers un autre appareil par codes QR", onclick: function () { Transfer.send(g.id); } }, "📱 Envoyer") : null,
          h("button", { class: "btn primary sm", onclick: function () { openGame(g.id); } }, g.ended ? "Relire la fin" : "Reprendre"), del));
      });
      w.appendChild(sg);
    }

    w.appendChild(renderMultiList());

    // Library
    var lib = h("section", { class: "section" }, h("h2", null, "Les livres"));
    var cards = h("div", { class: "cards" });
    stories.forEach(function (m) {
      cards.appendChild(h("article", { class: "card" + (m.adult ? " adult" : "") },
        m.adult ? h("div", { class: "adult-tag" }, "Thème adulte") : null,
        h("h3", null, m.title), m.subtitle ? h("div", { class: "sub" }, m.subtitle) : null,
        h("p", null, m.summary),
        h("div", { class: "small muted" }, (m.multi ? "À plusieurs, de " + (m.multi.min || 2) + " à " + (m.multi.max || 6) + " joueurs · " : "") + m.acts + " actes · " + m.passages + " passages" + (m.builtin ? "" : " · importée")),
        m.multi ? null : renderRecords(m),
        h("div", { class: "row" },
          // Clément, 11/11: stories for several players are written for it; the others stay solo.
          m.multi ? h("button", { class: "btn primary", onclick: function () { adultGate(m, function () { multiSetup(m.id); }); } }, "Jouer à plusieurs")
            : h("button", { class: "btn primary", onclick: function () { if (!A.profile) { needReader(); return; } adultGate(m, function () { newGame(m.id); }); } }, "Nouvelle partie"),
          canDownload() ? h("button", { class: "btn sm ghost", onclick: function () { loadStory(m.id).then(function (st) { download(m.id + ".json", JSON.stringify(st, null, 1)); }); } }, "Exporter") : null,
          !m.builtin ? (A.confirmDel === "s:" + m.id
            ? h("span", { class: "confirm small" }, "Retirer ?", h("button", { class: "btn sm danger", onclick: function () { removeStory(m); } }, "Oui"), h("button", { class: "btn sm", onclick: function () { A.confirmDel = null; render(); } }, "Non"))
            : h("button", { class: "btn sm ghost", onclick: function () { A.confirmDel = "s:" + m.id; render(); } }, "Retirer")) : null)));
    });
    lib.appendChild(cards);
    var file = h("input", { type: "file", accept: ".json,application/json", "aria-label": "Fichier d'histoire", onchange: function (e) { importStory(e.target.files[0]); e.target.value = ""; } });
    lib.appendChild(h("div", { class: "row" }, h("span", { class: "label" }, "Importer une histoire (.json)"), file));
    if (A.importReport) lib.appendChild(h("pre", { class: "report" }, A.importReport));
    w.appendChild(lib);

    // Backup: move readers and games between the claude.ai page and the offline copy, or between devices.
    var bk = h("section", { class: "section" }, h("h2", null, "Sauvegardes"),
      h("p", { class: "small muted" }, "Un seul fichier avec les lecteurs, leurs parties et les histoires importées. Exporte-le ici, importe-le sur l'autre appareil ou dans l'autre version du jeu : la partie la plus récente l'emporte."));
    var bkFile = h("input", { type: "file", accept: ".json,application/json", "aria-label": "Fichier de sauvegarde", onchange: function (e) { importBackup(e.target.files[0]); e.target.value = ""; } });
    bk.appendChild(h("div", { class: "row" },
      canDownload() ? h("button", { class: "btn sm", onclick: exportBackup }, "Exporter toutes les sauvegardes") : null,
      h("span", { class: "label" }, "Importer une sauvegarde"), bkFile,
      Transfer.available() ? h("button", { class: "btn sm", onclick: function () { Transfer.receive(); } }, "📷 Recevoir une partie") : null));
    if (Sync.available()) bk.appendChild(h("div", { class: "row" }, h("button", { class: "btn sm" + (Sync.on() ? "" : " primary"), onclick: function () { A.modal = { kind: "sync" }; render(); } },
      Sync.on() ? "☁ Dossier de sauvegarde partagé" + (Sync.busy ? " · synchronisation…" : Sync.error ? " · ⚠ à vérifier" : "") : "☁ Configurer un dossier de sauvegarde partagé")));
    w.appendChild(bk);
    w.appendChild(renderKidsShelf());
    var fam = renderFamily(); if (fam) w.appendChild(fam);
    w.appendChild(renderParents());
    w.appendChild(renderAtelier());
    app.appendChild(w);
  }
  // Intent: remove(Profile, [Game]) -> () ! deletes(Store)
  // Why: duplicate readers appeared after the storage fix (Clément, 11/11); a reader goes with their saves.
  function removeProfile(p, games) {
    var jobs = games.map(function (g) { return Store.del("parties", g.id); }).concat([Store.del("profils", p.id)]);
    A.profiles = A.profiles.filter(function (x) { return x.id !== p.id; });
    A.allGames = (A.allGames || []).filter(function (g) { return g.profil !== p.id; });
    A.profile = A.profiles[A.profiles.length - 1] || null; A.confirmDelProfile = null;
    if (A.profile) lsSet("profil", A.profile.id);
    A.games = A.allGames.filter(function (g) { return A.profile && g.profil === A.profile.id; }).sort(function (a, b) { return (b.updated || 0) - (a.updated || 0); });
    render();
    Promise.all(jobs).then(refresh).then(render);
  }
  function flash(msg, bad) { A.notice = msg; A.noticeBad = !!bad; render(); }
  // Intent: prompt() -> () ! focuses the reader name field
  // Why: "Nouvelle partie" without a reader used to be a dead grey button; now it says what to do.
  // Intent: gate(StoryMeta, then) -> () ! opens the adult-themes notice when the story declares one
  // Why: Clément, 13/11: before an adult story opens, the reader sees its themes and confirms, or goes back.
  function adultGate(m, then) {
    if (!m.adult) { then(); return; }
    A.modal = { kind: "adult", story: m, then: then }; render();
  }
  function modalAdult(box, close, m) {
    var st = m.story;
    box.classList.add("adult-modal");
    box.appendChild(h("div", { class: "drawer-head" }, h("h2", null, "Thème adulte")));
    var b = h("div", { class: "drawer-body" });
    b.appendChild(h("p", null, "« " + st.title + " » est écrite pour des lecteurs adultes. Thèmes présents dans cette histoire\u00a0:"));
    b.appendChild(h("ul", { class: "adult-themes" }, st.adult.themes.map(function (t) { return h("li", null, t); })));
    b.appendChild(h("div", { class: "stack" },
      h("button", { class: "btn primary", onclick: function () { A.modal = null; m.then(); } }, "J'ai compris"),
      h("button", { class: "btn back-lib", autofocus: true, onclick: close }, "Revenir à la bibliothèque")));
    box.appendChild(b);
  }
  function needReader() {
    flash("Écris d'abord le nom du lecteur dans « Qui lit ? », puis « Ajouter ».", true);
    var el = document.querySelector('input[aria-label="Nom du nouveau lecteur"]'); if (el) { el.focus(); el.scrollIntoView({ block: "center" }); }
  }

  function importStory(f) {
    if (!f) return;
    var rd = new FileReader();
    rd.onload = function () {
      var st;
      try { st = JSON.parse(rd.result); } catch (e) { A.importReport = "Ce fichier n'est pas du JSON lisible : " + e.message; render(); return; }
      var rep = V.staticCheck(clone(st));
      if (rep.errors.length) { A.importReport = "Histoire refusée, " + rep.errors.length + " erreur(s) :\n" + rep.errors.slice(0, 40).join("\n"); render(); return; }
      var txt = JSON.stringify(st), parts = Math.ceil(txt.length / PART_CHARS), jobs = [];
      for (var i = 0; i < parts; i++) jobs.push(Store.put("scenarioParts", st.id + "~" + i, { chunk: txt.slice(i * PART_CHARS, (i + 1) * PART_CHARS) }));
      Promise.all(jobs).then(function () { var m = storyMeta(st); m.parts = parts; m.imported = Date.now(); return Store.put("scenarios", st.id, m); })
        .then(refresh).then(function () { A.importReport = "« " + st.title + " » ajoutée à la bibliothèque" + (rep.warnings.length ? " (" + rep.warnings.length + " remarque(s))." : "."); render(); })
        .catch(function (e) { A.importReport = "L'import a échoué (" + ((e && e.code) || e) + ")."; render(); });
    };
    rd.readAsText(f);
  }
  function removeStory(m) {
    Store.get("scenarios", m.id).then(function (meta) {
      var jobs = [Store.del("scenarios", m.id)];
      for (var i = 0; i < ((meta && meta.parts) || 0); i++) jobs.push(Store.del("scenarioParts", m.id + "~" + i));
      return Promise.all(jobs);
    }).then(refresh).then(function () { A.confirmDel = null; render(); });
  }
  // Intent: save(FileName, Text) -> () ! hands the viewer a file (claude.ai downloads, else a plain browser link)
  // Why: the offline copy (file or installed app, Clément 12/11) has no claude.ai runtime but must still export.
  function download(name, text) {
    if (A.downloads) { A.downloads.save({ filename: name, data: text }).catch(function () { /* declined or refused: nothing to do */ }); return; }
    var url = URL.createObjectURL(new Blob([text], { type: "application/json" }));
    var a = h("a", { href: url, download: name }); document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 10000);
  }
  // Offline copy: no claude.ai runtime around the page.
  function standalone() { return !(window.claude && window.claude.use); }
  function canDownload() { return !!A.downloads || standalone(); }

  // ------------------------------------------------------------------ backup: every collection in one file
  // Intent: export() -> File(Backup) ; import(File(Backup)) -> () ! writes(Store), the later `updated` wins
  // Why: games played in the claude.ai page live in its db, games played offline live in that device; one file moves
  // readers, games and imported stories from one to the other (Clément, 12/11).
  var BACKUP_FORMAT = "livre-heros-sauvegarde", BACKUP_VERSION = 1;
  var BACKUP_COLLS = ["profils", "parties", "scenarios", "scenarioParts", "multis", "salles", "signalements", "recits"];
  // Intent: backupData() -> Promise<Backup> = every collection of this device, in one object
  function backupData() {
    return Promise.all(BACKUP_COLLS.map(function (c) { return Store.list(c); })).then(function (r) {
      var out = { format: BACKUP_FORMAT, version: BACKUP_VERSION, exported: Date.now(), collections: {} };
      BACKUP_COLLS.forEach(function (c, i) { out.collections[c] = r[i]; });
      return out;
    });
  }
  // Intent: mergeBackup(Backup, tombs?) -> Promise<{added, kept}> = per document, the most recent wins; a document
  // deleted somewhere (tombs["coll/id"] = when) goes away here too, unless it changed after.
  function mergeBackup(b, tombs) {
    tombs = tombs || {};
    var added = 0, kept = 0;
    return Promise.all(BACKUP_COLLS.map(function (c) {
      var docs = b.collections[c] || [];
      return Store.list(c).then(function (have) {
        var byId = {}; have.forEach(function (o) { byId[o.id] = o; });
        var gone = have.filter(function (o) { var t = tombs[c + "/" + o.id]; return t && t >= (o.updated || 0); });
        return Promise.all(gone.map(function (o) { added++; delete byId[o.id]; return Store.del(c, o.id, true); }).concat(docs.map(function (o) {
          if (!o || !o.id) return null;
          var t = tombs[c + "/" + o.id]; if (t && t >= (o.updated || 0)) return null;
          var mine = byId[o.id];
          if (mine && (mine.updated || 0) >= (o.updated || 0)) { kept++; return null; }
          var id = o.id, doc = clone(o); delete doc.id; added++;
          return Store.put(c, id, doc, true).catch(function () {});
        })));
      });
    })).then(function () { return { added: added, kept: kept }; });
  }
  function exportBackup() {
    backupData().then(function (out) {
      var d = new Date(), day = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      download("livre-heros-sauvegarde-" + day + ".json", JSON.stringify(out));
      lsSet("lastExport", Date.now()); render();
    });
  }
  // Intent: renderBackupNudge() -> Element? = offline copy only: a gentle reminder to export, at most once a week
  // Why: Clément, 12/11: saves kept by the browser alone vanish when its data is cleared.
  var BACKUP_EVERY_MS = 7 * 24 * 3600 * 1000, BACKUP_SNOOZE_MS = 3 * 24 * 3600 * 1000, BACKUP_AFTER_PLAY_MS = 20 * 60 * 1000;
  function renderBackupNudge() {
    if (Store.mode === "db" || !canDownload() || Sync.on()) return null;
    var played = (A.allGames || []).reduce(function (t, g) { return t + (g.playMs || 0); }, 0);
    if (played < BACKUP_AFTER_PLAY_MS) return null;
    var now = Date.now(), last = lsGet("lastExport") || 0, snooze = lsGet("backupSnooze") || 0;
    if (now - last < BACKUP_EVERY_MS || now < snooze) return null;
    return h("div", { class: "notice nudge", role: "status" },
      h("b", null, "Pense à mettre tes parties à l'abri. "),
      last ? "Dernière sauvegarde le " + when(last) + ". " : "Elles ne sont gardées que dans ce navigateur : si on efface ses données, elles disparaissent. ",
      "Un fichier exporté se range où tu veux et se réimporte en un geste.",
      h("div", { class: "row", style: "margin-top:8px" },
        h("button", { class: "btn sm primary", onclick: exportBackup }, "Exporter maintenant"),
        h("button", { class: "btn sm ghost", onclick: function () { lsSet("backupSnooze", now + BACKUP_SNOOZE_MS); render(); } }, "Plus tard")));
  }
  function importBackup(f) {
    if (!f) return;
    var rd = new FileReader();
    rd.onload = function () {
      var b; try { b = JSON.parse(rd.result); } catch (e) { flash("Ce fichier n'est pas une sauvegarde lisible.", true); return; }
      if (!b || b.format !== BACKUP_FORMAT || !b.collections) { flash("Ce fichier n'est pas une sauvegarde du livre-jeu.", true); return; }
      mergeBackup(b).then(function (r) { return refresh().then(function () { flash("Sauvegarde importée : " + r.added + " élément(s) ajouté(s) ou mis à jour" + (r.kept ? ", " + r.kept + " déjà à jour ici." : ".")); }); });
    };
    rd.readAsText(f);
  }

  // Intent: speechUnits([{text}]) -> [{ li, text, dial, pause }] = what the voices read, sentence by sentence
  // Why: a sentence at a time lets the text light up as it is read (Clément, 12/11), and the words between « »
  // can go to a second voice; li is the line the unit comes from (0 = the title), text is as shown on the page.
  function speechUnits(lines) {
    var out = [];
    lines.forEach(function (l, li) {
      var first = true, prev = null;
      String(l.text || "").replace(/\*/g, "").split(/(«[^»]*»?)/).forEach(function (part) {
        if (!part.trim()) return;
        var dial = /^«/.test(part);
        (part.match(/[^.!?…]+(?:[.!?…]+[»"”)\s]*|$)/g) || []).forEach(function (t) {
          t = t.trim(); if (!/[0-9A-Za-zÀ-ÿ]/.test(t)) return;
          out.push({ li: li, text: t, dial: dial, pause: first ? (li > 0 ? 0.5 : 0) : prev !== dial ? 0.08 : 0.15 });
          first = false; prev = dial;
        });
      });
    });
    return out;
  }

  // Intent: Glossary = rare words of the story (story.glossary, "forme|forme": définition) shown dotted in the text;
  // a tap opens their definition. Only the first time a word comes up on a page (Clément, 12/11).
  var Glossary = (function () {
    var cache = { st: null, re: null, defs: null }, pop = null;
    var LETTER = "A-Za-zÀ-ÖØ-öø-ÿŒœÆæ";
    function prepare(st) {
      if (cache.st === st) return cache;
      var defs = {}, forms = [];
      Object.keys(st.glossary || {}).forEach(function (k) { k.split("|").forEach(function (f) { f = f.trim().toLowerCase(); if (f) { defs[f] = { def: st.glossary[k], head: k.split("|")[0] }; forms.push(f); } }); });
      forms.sort(function (a, b) { return b.length - a.length; });
      var esc2 = function (x) { return x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); };
      cache = { st: st, defs: defs, re: forms.length ? new RegExp("(^|[^" + LETTER + "-])(" + forms.map(esc2).join("|") + ")(?=$|[^" + LETTER + "-])", "gi") : null };
      return cache;
    }
    // html from md(): only <strong>, <em> and <br> tags, so the words are looked for between the tags.
    function mark(st, html, used) {
      var c = prepare(st); if (!c.re || pref("glossary") === false) return html;
      return html.split(/(<[^>]+>)/).map(function (part) {
        if (/^</.test(part)) return part;
        return part.replace(c.re, function (all, pre, word) {
          var d = c.defs[word.toLowerCase()]; if (!d || used[d.head]) return all;
          used[d.head] = true;
          return pre + "<button type=\"button\" class=\"gl\" data-gl=\"" + esc(word.toLowerCase()) + "\">" + word + "</button>";
        });
      }).join("");
    }
    function close() { if (pop) { pop.remove(); pop = null; } }
    function open(btn) {
      close();
      var c = cache, d = c.defs && c.defs[btn.getAttribute("data-gl")]; if (!d) return;
      Words.learn(d.head, d.def);
      pop = h("div", { class: "gl-pop", role: "tooltip" }, h("b", null, d.head.charAt(0).toUpperCase() + d.head.slice(1)), " · ", d.def);
      document.body.appendChild(pop);
      var r = btn.getBoundingClientRect(), w = Math.min(320, innerWidth - 24);
      pop.style.width = w + "px";
      pop.style.left = Math.max(12, Math.min(innerWidth - w - 12, r.left + r.width / 2 - w / 2)) + window.scrollX + "px";
      pop.style.top = r.bottom + 8 + window.scrollY + "px";
    }
    document.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest("button.gl");
      if (b) { e.stopPropagation(); if (pop && pop.dataset.for === b.getAttribute("data-gl")) close(); else { open(b); if (pop) pop.dataset.for = b.getAttribute("data-gl"); } return; }
      if (!(e.target.closest && e.target.closest(".gl-pop"))) close();
    }, true);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    return { mark: mark, close: close };
  })();

  // ------------------------------------------------------------------ pass a game to another device by QR codes
  // Intent: Transfer = a game (and its reader) shown as a loop of QR codes on one device, read by the camera of the
  // other; offline copy only (on claude.ai the saves already follow the page). Clément, 12/11.
  // Why several codes: a long game weighs ~8 Ko once compressed, more than one code a camera reads easily.
  var Transfer = (function () {
    var T = {}, CHUNK = 450, FRAME_MS = 450, PREFIX = "LH1", RECENT_LOG = 30, SCAN_MS = 120;
    var timer = null, scan = null, libs = null;
    T.available = function () { return standalone() && /^https?:$/.test(location.protocol) && "CompressionStream" in window && "DecompressionStream" in window; };
    function loadScript(src) { return new Promise(function (res, rej) { var sc = document.createElement("script"); sc.src = src; sc.onload = res; sc.onerror = function () { rej(new Error("module " + src + " introuvable")); }; document.head.appendChild(sc); }); }
    function needLibs() { if (!libs) { libs = Promise.all([window.qrcode ? null : loadScript("vendor/qrcode.js"), window.jsQR ? null : loadScript("vendor/jsQR.js")]); libs.catch(function () { libs = null; }); } return libs; }
    function deflate(str) { var cs = new CompressionStream("deflate-raw"), w = cs.writable.getWriter(); w.write(new TextEncoder().encode(str)); w.close(); return new Response(cs.readable).arrayBuffer(); }
    function inflate(bytes) { var ds = new DecompressionStream("deflate-raw"), w = ds.writable.getWriter(); w.write(bytes); w.close(); return new Response(ds.readable).text(); }
    function b64(buf) { var s = "", a = new Uint8Array(buf); for (var i = 0; i < a.length; i++) s += String.fromCharCode(a[i]); return btoa(s); }
    function unb64(t) { var s = atob(t), a = new Uint8Array(s.length); for (var i = 0; i < s.length; i++) a[i] = s.charCodeAt(i); return a; }

    // Sender: the frames of one game.
    function pack(gameId) {
      return Store.get("parties", gameId).then(function (g) {
        if (!g) throw new Error("partie introuvable");
        if (!A.builtins[g.story]) throw new Error("cette histoire a été importée ; envoie plutôt une sauvegarde complète par fichier");
        var prof = A.profiles.filter(function (p) { return p.id === g.profil; })[0];
        var doc = clone(g); doc.undo = []; doc.log = (doc.log || []).slice(-RECENT_LOG); delete doc.recitParts;
        var payload = JSON.stringify({ v: 1, profil: prof ? { id: prof.id, name: prof.name, color: prof.color, prefs: prof.prefs, records: prof.records, created: prof.created } : null, game: doc });
        return deflate(payload).then(function (z) {
          var t = b64(z), n = Math.ceil(t.length / CHUNK), id = uid().slice(-5), frames = [];
          for (var i = 0; i < n; i++) frames.push(PREFIX + "|" + id + "|" + (i + 1) + "|" + n + "|" + t.slice(i * CHUNK, (i + 1) * CHUNK));
          return frames;
        });
      });
    }
    function svgOf(text) { var q = qrcode(0, "L"); q.addData(text); q.make(); return q.createSvgTag({ cellSize: 4, margin: 4, scalable: true }); }
    T.send = function (gameId) {
      T.stop();
      A.modal = { kind: "send", busy: true }; render();
      needLibs().then(function () { return pack(gameId); }).then(function (frames) {
        var svgs = frames.map(svgOf), k = 0;
        A.modal = { kind: "send", n: frames.length }; render();
        var show = function () {
          var el = document.getElementById("qr-frame"), lab = document.getElementById("qr-count");
          if (!el || !A.modal || A.modal.kind !== "send") { T.stop(); return; }
          el.innerHTML = svgs[k]; if (lab) lab.textContent = "Code " + (k + 1) + " sur " + svgs.length; k = (k + 1) % svgs.length;
        };
        show(); timer = setInterval(show, FRAME_MS);
      }).catch(function (e) { A.modal = null; flash("Impossible de préparer l'envoi : " + e.message + ".", true); });
    };

    // Receiver: the camera, until every piece of one game has been read.
    T.receive = function () {
      T.stop();
      A.modal = { kind: "receive" }; render();
      var got = {}, want = null, gameKey = null;
      needLibs().then(function () { return navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false }); }).then(function (stream) {
        var video = document.getElementById("qr-video"); if (!video) { stream.getTracks().forEach(function (t) { t.stop(); }); return; }
        video.srcObject = stream; video.setAttribute("playsinline", ""); video.play();
        var canvas = document.createElement("canvas"), cx = canvas.getContext("2d", { willReadFrequently: true });
        scan = { stream: stream, t: null };
        var tick = function () {
          if (!scan) return;
          var v2 = document.getElementById("qr-video"); // a new render made a new video element
          if (v2 && v2 !== video) { video = v2; video.srcObject = stream; video.setAttribute("playsinline", ""); video.play(); }
          if (video.readyState >= 2 && video.videoWidth) {
            var sc = Math.min(1, 720 / Math.max(video.videoWidth, video.videoHeight));
            canvas.width = Math.round(video.videoWidth * sc); canvas.height = Math.round(video.videoHeight * sc);
            cx.drawImage(video, 0, 0, canvas.width, canvas.height);
            var img = cx.getImageData(0, 0, canvas.width, canvas.height), code = jsQR(img.data, img.width, img.height, { inversionAttempts: "dontInvert" });
            var parts = code && code.data && code.data.split("|");
            if (parts && parts[0] === PREFIX && parts.length === 5) {
              if (gameKey !== parts[1]) { gameKey = parts[1]; got = {}; }
              want = +parts[3]; got[+parts[2]] = parts[4];
              var have = Object.keys(got).length, lab = document.getElementById("qr-progress");
              if (lab) lab.textContent = have + " code" + (have > 1 ? "s" : "") + " lu" + (have > 1 ? "s" : "") + " sur " + want;
              if (have === want) { finish(got, want); return; }
            }
          }
          scan.t = setTimeout(tick, SCAN_MS);
        };
        tick();
      }).catch(function (e) {
        A.modal = null; T.stop();
        flash(e && e.name === "NotAllowedError" ? "L'appareil photo a été refusé : autorise-le pour ce site, puis réessaie." : "Impossible d'ouvrir l'appareil photo (" + ((e && e.message) || e) + ").", true);
      });
    };
    function finish(got, n) {
      T.stop();
      var t = ""; for (var i = 1; i <= n; i++) t += got[i];
      inflate(unb64(t)).then(function (txt) { return T.accept(JSON.parse(txt)); })
        .then(function (msg) { A.modal = null; flash(msg); })
        .catch(function (e) { A.modal = null; flash("Les codes ont été lus mais la partie n'a pas pu être reconstituée (" + e.message + "). Recommence la lecture.", true); });
    }
    // Merges a received game: the reader is added if new; the most recent version of the game wins.
    T.accept = function (p) {
      if (!p || !p.game || !p.game.id) return Promise.reject(new Error("contenu inconnu"));
      var jobs = [], prof = p.profil;
      if (prof && !A.profiles.some(function (x) { return x.id === prof.id; })) { A.profiles.push(prof); jobs.push(Store.put("profils", prof.id, prof).catch(function () {})); }
      return Promise.all(jobs).then(function () { return Store.get("parties", p.game.id); }).then(function (old) {
        if (old && (old.updated || 0) > (p.game.updated || 0)) return "Cet appareil avait déjà une version plus récente de cette partie : rien n'a été changé.";
        return Store.put("parties", p.game.id, p.game).then(function () {
          if (prof) { A.profile = A.profiles.filter(function (x) { return x.id === prof.id; })[0] || A.profile; lsSet("profil", A.profile.id); }
          return "La partie de " + (p.game.hero || "ton héros") + " (" + (p.game.storyTitle || "") + ") est arrivée sur cet appareil.";
        });
      }).then(function (msg) { return refresh().then(function () { return msg; }); });
    };
    T.stop = function () {
      if (timer) { clearInterval(timer); timer = null; }
      if (scan) { clearTimeout(scan.t); scan.stream.getTracks().forEach(function (t) { t.stop(); }); scan = null; }
    };
    T.pack = pack;
    return T;
  })();
  function modalSend(box, close) {
    modalHead(box, "Envoyer vers un autre appareil", function () { Transfer.stop(); close(); });
    var b = h("div", { class: "drawer-body" });
    if (A.modal.busy) b.appendChild(h("p", null, "Préparation des codes…"));
    else {
      b.appendChild(h("p", { class: "small" }, "Sur l'autre appareil, ouvre ce même site, puis « 📷 Recevoir une partie » dans Sauvegardes, et vise cet écran. Les " + A.modal.n + " codes défilent : laisse l'appareil photo dessus jusqu'à ce que tout soit lu."));
      b.appendChild(h("div", { id: "qr-frame", class: "qr-frame", "aria-label": "Code QR de la partie" }));
      b.appendChild(h("p", { id: "qr-count", class: "small muted", style: "text-align:center" }, ""));
      b.appendChild(h("p", { class: "small muted" }, "Le lecteur et sa partie seront ajoutés là-bas. Le livre « Mon aventure » et l'historique des retours en arrière restent sur cet appareil."));
    }
    box.appendChild(b);
  }
  function modalReceive(box, close) {
    modalHead(box, "Recevoir une partie", function () { Transfer.stop(); close(); });
    box.appendChild(h("div", { class: "drawer-body" },
      h("p", { class: "small" }, "Vise les codes affichés sur l'autre appareil (« 📱 Envoyer » à côté de la partie)."),
      h("video", { id: "qr-video", class: "qr-video", muted: true, playsinline: true }),
      h("p", { id: "qr-progress", class: "small muted", style: "text-align:center" }, "En attente du premier code…")));
  }

  // ------------------------------------------------------------------ syllables in colour
  // Intent: Syllables.split(word) -> [syllable] = written French syllables (V-CV, VC-CV, consonant + l/r kept
  // together, ch/ph/th/gn/qu/gu as one sound, vowel groups as one); Syllables.mark(html) wraps them in two colours.
  // Why: Clément, 12/11: the reading methods for dyslexic children colour one syllable out of two.
  var Syllables = (function () {
    var V = "aeiouyàâäéèêëîïôöùûüÿœæ";
    var KEEP = /^(bl|cl|fl|gl|pl|br|cr|dr|fr|gr|pr|tr|vr|ch|ph|th|gn|qu|gu)$/;
    function isV(c) { return V.indexOf(c) >= 0; }
    // Units: letters grouped into vowel nuclei and consonant units.
    function units(w) {
      var lw = w.toLowerCase(), out = [], i = 0;
      while (i < w.length) {
        var c = lw[i];
        if ((c === "q" || c === "g") && lw[i + 1] === "u" && isV(lw[i + 2] || "")) { out.push({ v: false, s: w.slice(i, i + 2) }); i += 2; continue; }
        if (isV(c)) {
          var j = i + 1;
          // A vowel group is one nucleus, except a hiatus after é and before a diaeresis.
          while (j < w.length && isV(lw[j]) && lw[j - 1] !== "é" && "ëï".indexOf(lw[j]) < 0) j++;
          out.push({ v: true, s: w.slice(i, j) }); i = j; continue;
        }
        out.push({ v: false, s: w[i] }); i++;
      }
      return out;
    }
    function split(w) {
      var u = units(w), syl = [], cur = "", i = 0;
      var vIdx = []; u.forEach(function (x, k) { if (x.v) vIdx.push(k); });
      if (vIdx.length < 2) return [w];
      // Everything up to the first nucleus belongs to the first syllable; then cut each consonant run between nuclei.
      var start = 0;
      for (var n = 0; n < vIdx.length - 1; n++) {
        var a = vIdx[n], b = vIdx[n + 1], cons = u.slice(a + 1, b).map(function (x) { return x.s; });
        var cut; // number of consonant units that stay with the left syllable
        if (cons.length <= 1) cut = 0;
        else if (KEEP.test(cons.slice(-2).join("").toLowerCase())) cut = cons.length - 2;
        else cut = cons.length - 1;
        var end = a + 1 + cut;
        syl.push(u.slice(start, end).map(function (x) { return x.s; }).join("")); start = end;
      }
      syl.push(u.slice(start).map(function (x) { return x.s; }).join(""));
      return syl;
    }
    var WORD = /[A-Za-zÀ-ÖØ-öø-ÿŒœÆæ]+/g;
    function mark(html) {
      return html.split(/(<[^>]+>)/).map(function (part) {
        if (/^</.test(part)) return part;
        return part.replace(WORD, function (w) {
          var s = split(w); if (s.length < 2) return "<span class=\"sy1\">" + w + "</span>";
          return s.map(function (x, k) { return "<span class=\"sy" + (k % 2 ? 2 : 1) + "\">" + x + "</span>"; }).join("");
        });
      }).join("");
    }
    return { split: split, mark: mark };
  })();

  // ------------------------------------------------------------------ the reader's word notebook and word game
  // Intent: Words = every rare word a reader opened is kept in their profile (profile.words), listed in the notebook,
  // and a little game asks now and then to find a word from its meaning (Clément, 13/11).
  var WORDS_ROUND = 5, WORDS_MIN_GAME = 3;
  var Words = (function () {
    var W = {}, saveT = null;
    W.list = function (prof) { var m = (prof && prof.words) || {}; return Object.keys(m).map(function (k) { var x = m[k]; x.head = k; return x; }).sort(function (a, b) { return (b.t || 0) - (a.t || 0); }); };
    W.learn = function (head, def) {
      var prof = A.profile; if (!prof || (A.game && (A.game.ephemeral || A.game.multi))) return;
      prof.words = prof.words || {};
      var w = prof.words[head] = prof.words[head] || { def: def, n: 0, known: 0 };
      w.def = def; w.n++; w.t = Date.now();
      clearTimeout(saveT); saveT = setTimeout(function () { Store.put("profils", prof.id, prof).catch(function () {}); }, 1500);
    };
    // Every definition the books know, for the wrong answers of the game.
    function pool() {
      var out = {};
      Object.keys(A.builtins).forEach(function (id) { var g = A.builtins[id].glossary || {}; Object.keys(g).forEach(function (k) { out[k.split("|")[0]] = g[k]; }); });
      return out;
    }
    function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
    W.round = function () {
      var mine = W.list(A.profile), all = pool();
      // The least known words first, then chance.
      var picks = shuffle(mine.slice()).sort(function (a, b) { return (a.known || 0) - (b.known || 0); }).slice(0, WORDS_ROUND);
      var heads = Object.keys(all);
      return shuffle(picks).map(function (w) {
        var wrong = shuffle(heads.filter(function (h2) { return h2 !== w.head; })).slice(0, 2);
        return { head: w.head, def: w.def, options: shuffle([w.head].concat(wrong)) };
      });
    };
    W.start = function () { A.modal = { kind: "words", qs: W.round(), i: 0, score: 0, answered: null }; render(); };
    W.answer = function (opt) {
      var m = A.modal, q = m.qs[m.i]; if (m.answered) return;
      m.answered = opt; var ok = opt === q.head;
      if (ok) { m.score++; var w = A.profile.words[q.head]; if (w) { w.known = (w.known || 0) + 1; Store.put("profils", A.profile.id, A.profile).catch(function () {}); } }
      render();
    };
    return W;
  })();
  function modalWords(box, close) {
    var m = A.modal;
    modalHead(box, "Le jeu des mots", close);
    var b = h("div", { class: "drawer-body" });
    if (m.i >= m.qs.length) {
      b.appendChild(h("p", { class: "words-score" }, m.score + " sur " + m.qs.length + (m.score === m.qs.length ? " : sans faute !" : m.score >= m.qs.length - 1 ? " : très bien !" : ".")));
      b.appendChild(h("div", { class: "row" }, h("button", { class: "btn primary", onclick: Words.start }, "Rejouer"), h("button", { class: "btn", onclick: close }, "Fermer")));
    } else {
      var q = m.qs[m.i];
      b.appendChild(h("p", { class: "small muted" }, "Question " + (m.i + 1) + " sur " + m.qs.length + " · Quel mot veut dire :"));
      b.appendChild(h("p", { class: "words-def" }, "« " + q.def + " »"));
      b.appendChild(h("div", { class: "stack tight" }, q.options.map(function (o) {
        var cls = "btn words-opt" + (m.answered ? (o === q.head ? " good" : o === m.answered ? " bad" : "") : "");
        return h("button", { class: cls, disabled: !!m.answered && o !== q.head && o !== m.answered, onclick: function () { Words.answer(o); } }, o);
      })));
      if (m.answered) b.appendChild(h("button", { class: "btn primary", style: "margin-top:12px", onclick: function () { m.i++; m.answered = null; render(); } }, m.i + 1 < m.qs.length ? "Question suivante" : "Voir le score"));
    }
    box.appendChild(b);
  }
  function tabWords(b) {
    var list = Words.list(A.profile);
    if (!list.length) { b.appendChild(h("div", { class: "notice" }, "Les mots rares que tu touches dans le texte (soulignés de pointillés) viennent se ranger ici.")); return; }
    if (list.length >= WORDS_MIN_GAME) b.appendChild(h("button", { class: "btn sm primary", onclick: function () { A.carnet = null; Words.start(); } }, "🎯 Jeu des mots"));
    list.forEach(function (w) {
      b.appendChild(h("div", { class: "clue" }, h("b", null, w.head + (w.known ? " ✓" : "")), h("div", { class: "small" }, w.def)));
    });
  }

  // ------------------------------------------------------------------ following the text while it is read
  // Intent: Reading = the sentence being read lights up (CSS highlight), and the optional reading ruler: a band on
  // the current line, the rest of the text dimmed; it follows the voice, a tap or the arrow keys move it.
  // Why: Clément, 12/11: young and dyslexic readers follow the text more easily.
  var Reading = (function () {
    var R = { unit: null, key: "", rulerY: null };
    function target(li) {
      if (li === 0) return document.querySelector(".page.read .page-head h2");
      return document.querySelectorAll(".page.read .prose > p")[li - 1] || null;
    }
    function rangeOf(el, text) {
      var nodes = [], all = "", walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), n;
      while ((n = walker.nextNode())) { nodes.push({ n: n, at: all.length }); all += n.data; }
      var norm = function (x) { return x.replace(/\s/g, " "); };
      var i = norm(all).indexOf(norm(text)); if (i < 0) return null;
      var r = document.createRange();
      var put = function (pos, start) {
        for (var k = nodes.length - 1; k >= 0; k--) if (nodes[k].at <= pos) { var o = Math.min(pos - nodes[k].at, nodes[k].n.data.length); if (start) r.setStart(nodes[k].n, o); else r.setEnd(nodes[k].n, o); return; }
      };
      put(i, true); put(i + text.length, false);
      return r;
    }
    function prose() { return document.querySelector(".page.read .prose"); }
    function lineHeight(p) { return parseFloat(getComputedStyle(p).lineHeight) || 30; }
    function ruler(r) {
      var p = prose();
      if (!p || !pref("ruler") || A.screen !== "game") return;
      var key = A.game ? A.game.s.node + "#" + A.game.s.turn : "";
      if (key !== R.key) { R.key = key; R.rulerY = null; }
      var lh = lineHeight(p), top = p.getBoundingClientRect().top, lines = 1;
      // While the voice reads, the band covers the whole sentence; otherwise one line.
      if (r) {
        var rects = Array.prototype.filter.call(r.getClientRects(), function (x) { return x.width > 1; });
        if (rects.length) {
          var y0 = Math.min.apply(null, rects.map(function (x) { return x.top; })), y1 = Math.max.apply(null, rects.map(function (x) { return x.bottom; }));
          lines = Math.max(1, Math.round((y1 - y0) / lh)); R.rulerY = (y0 + y1) / 2 - top - (lines - 1) * lh / 2;
        }
      }
      var y = R.rulerY == null ? lh / 2 : R.rulerY;
      var band = p.querySelector(".ruler") || p.appendChild(h("div", { class: "ruler", "aria-hidden": "true" }));
      band.style.top = Math.max(0, y - lh / 2) + "px"; band.style.height = lines * lh + "px";
      p.classList.add("has-ruler");
      if (!p.dataset.ruler) {
        p.dataset.ruler = "1";
        p.addEventListener("click", function (e) {
          var c = document.caretRangeFromPoint ? document.caretRangeFromPoint(e.clientX, e.clientY) : null;
          var b = c && (c.getClientRects()[0] || c.getBoundingClientRect());
          var cy = b && b.height ? b.top + b.height / 2 : e.clientY;
          R.rulerY = cy - p.getBoundingClientRect().top; ruler(null);
        });
      }
    }
    R.move = function (dir) {
      var p = prose(); if (!p || !pref("ruler")) return false;
      var lh = lineHeight(p), y = (R.rulerY == null ? lh / 2 : R.rulerY) + dir * lh;
      R.rulerY = Math.max(lh / 2, Math.min(p.scrollHeight - lh / 2, y)); ruler(null);
      var band = p.querySelector(".ruler"); if (band) { var b = band.getBoundingClientRect(); if (b.top < 70 || b.bottom > innerHeight - 40) window.scrollBy({ top: b.top - innerHeight / 3, behavior: "smooth" }); }
      return true;
    };
    // After each render, and each time the voice starts a new sentence.
    R.show = function () {
      var hl = window.CSS && CSS.highlights;
      if (hl) hl.delete("lecture");
      var r = null;
      if (A.screen === "game" && A.speaking && R.unit) { var el = target(R.unit.li); r = el ? rangeOf(el, R.unit.text) : null; }
      if (r && hl && window.Highlight && pref("highlight") !== false) hl.set("lecture", new Highlight(r));
      ruler(r);
      return r;
    };
    R.onUnit = function (u) {
      R.unit = u; var r = R.show();
      if (r) { var b = r.getBoundingClientRect(); if (b.top < 70 || b.bottom > innerHeight - 40) window.scrollBy({ top: b.top - innerHeight / 3, behavior: "smooth" }); }
    };
    R.stop = function () { R.unit = null; R.show(); };
    return R;
  })();

  // ------------------------------------------------------------------ quality voices (optional download)
  // Intent: Neural = Piper voices run on the device (site/voix/, built by tests/voix.js), downloaded once on request, kept for offline reading.
  // Why: Clément, 12/11: the devices' own French voices sound like a GPS; the download is heavy (~90 Mo), so it is never forced.
  var Neural = (function () {
    var BASE = "voix/", CACHE = "livre-jeu-voix";
    var N = { manifest: null, installed: {}, busy: null, progress: 0, error: "" };
    var worker = null, ctx = null, sources = [], cur = null, seq = 0, handlers = {};
    N.available = function () {
      return standalone() && /^https?:$/.test(location.protocol) && "caches" in window && typeof WebAssembly === "object" && "Worker" in window && !!(window.AudioContext || window.webkitAudioContext);
    };
    N.init = function () {
      if (!N.available()) return Promise.resolve();
      return caches.open(CACHE).then(function (c) { return c.match(BASE + "manifest.json"); })
        .then(function (hit) { return hit || fetch(BASE + "manifest.json", { cache: "no-cache" }); })
        .then(function (r) { return r && r.ok ? r.json() : null; })
        .then(function (m) { N.manifest = m && m.voices ? m : null; return N.refresh(); }).catch(function () { N.manifest = null; });
    };
    function filesOf(k) { return N.manifest.common.concat(N.manifest.voices[k].files); }
    N.refresh = function () {
      if (!N.manifest) return Promise.resolve();
      return caches.open(CACHE).then(function (c) {
        return Promise.all(Object.keys(N.manifest.voices).map(function (k) {
          return Promise.all(filesOf(k).map(function (f) { return c.match(BASE + f.file); })).then(function (ms) { N.installed[k] = ms.every(Boolean); });
        }));
      });
    };
    N.keys = function () { return N.manifest ? Object.keys(N.manifest.voices) : []; };
    N.has = function (k) { return !!(N.manifest && N.installed[k]); };
    N.label = function (k) { return N.manifest && N.manifest.voices[k] ? N.manifest.voices[k].label : k; };
    // Bytes still to download for voice k (the engine is shared by all voices).
    N.sizeOf = function (k) {
      if (!N.manifest) return 0;
      var anyInstalled = N.keys().some(function (x) { return N.installed[x]; });
      return (anyInstalled ? N.manifest.voices[k].files : filesOf(k)).reduce(function (s, f) { return s + f.size; }, 0);
    };
    N.install = function (k, onProgress) {
      var files = filesOf(k).concat([{ file: "manifest.json", size: 0 }]);
      var total = files.reduce(function (s, f) { return s + f.size; }, 0) || 1, done = 0;
      try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) { /* ignore */ }
      return caches.open(CACHE).then(function (c) {
        return files.reduce(function (p, f) {
          return p.then(function () {
            return c.match(BASE + f.file).then(function (hit) {
              if (hit) { done += f.size; onProgress(done / total); return; }
              return fetch(BASE + f.file, { cache: "no-cache" }).then(function (r) {
                if (!r.ok) throw new Error(f.file + " : erreur " + r.status);
                var type = r.headers.get("Content-Type") || "application/octet-stream";
                if (!r.body || !r.body.getReader) return r.blob().then(function (b) { done += f.size; onProgress(done / total); return c.put(BASE + f.file, new Response(b, { headers: { "Content-Type": type } })); });
                var reader = r.body.getReader(), chunks = [], got = 0;
                var pump = function () {
                  return reader.read().then(function (x) {
                    if (x.done) return;
                    chunks.push(x.value); got += x.value.length; onProgress(Math.min(1, (done + got) / total));
                    return pump();
                  });
                };
                return pump().then(function () { done += f.size; return c.put(BASE + f.file, new Response(new Blob(chunks, { type: type }), { headers: { "Content-Type": type } })); });
              });
            });
          });
        }, Promise.resolve());
      }).then(N.refresh);
    };
    N.remove = function (k) {
      return caches.open(CACHE).then(function (c) {
        var others = N.keys().filter(function (x) { return x !== k && N.installed[x]; });
        if (!others.length) return caches.delete(CACHE);
        return Promise.all(N.manifest.voices[k].files.map(function (f) { return c.delete(BASE + f.file); }));
      }).then(function () { N.installed = {}; return N.refresh(); });
    };

    function audio() {
      if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === "suspended") ctx.resume();
      return ctx;
    }
    function getWorker() {
      if (!worker) {
        worker = new Worker(BASE + "worker.js");
        worker.onmessage = function (e) { var f = handlers[e.data.id]; if (f) f(e.data); };
        worker.onerror = function (e) { Object.keys(handlers).forEach(function (id) { handlers[id]({ id: +id, error: e.message || "voix indisponible" }); }); };
      }
      return worker;
    }
    N.stop = function () {
      sources.forEach(function (s) { try { s.stop(); } catch (e) { /* ignore */ } }); sources = [];
      if (cur) { if (worker) worker.postMessage({ cancel: cur.id }); var c = cur; cur = null; delete handlers[c.id]; c.resolve(null); }
    };
    // Resolves with null when done or stopped, with a message when the voice failed.
    // opts: { key, dialKey?, rate, onUnit(unit) } ; units from speechUnits.
    N.speak = function (list, opts) {
      N.stop();
      var ac = audio(), model = function (k) { return N.manifest.voices[k].model; };
      var dialKey = opts.dialKey && N.has(opts.dialKey) ? opts.dialKey : opts.key;
      if (!list.length) return Promise.resolve(null);
      var id = ++seq, t = ac.currentTime + 0.05, finished = false;
      return new Promise(function (resolve) {
        cur = { id: id, resolve: resolve };
        var end = function (err) { if (cur && cur.id === id) { cur = null; delete handlers[id]; resolve(err || null); } };
        var waitEnd = function () { if (!cur || cur.id !== id) return; var left = t - ac.currentTime; if (left <= 0.02) end(); else setTimeout(waitEnd, Math.min(500, left * 1000)); };
        handlers[id] = function (d) {
          if (d.error) { end(d.error); return; }
          if (d.done) { finished = true; waitEnd(); return; }
          var buf = ac.createBuffer(1, d.audio.length, d.rate); buf.getChannelData(0).set(d.audio);
          var src = ac.createBufferSource(); src.buffer = buf; src.connect(ac.destination);
          var at = Math.max(t + list[d.i].pause, ac.currentTime + 0.03); src.start(at); t = at + buf.duration;
          if (opts.onUnit) { var u = list[d.i]; setTimeout(function () { if (cur && cur.id === id) opts.onUnit(u); }, Math.max(0, (at - ac.currentTime) * 1000)); }
          sources.push(src); src.onended = function () { sources = sources.filter(function (x) { return x !== src; }); if (finished) waitEnd(); };
        };
        getWorker().postMessage({ id: id, voice: model(opts.key), sentences: list.map(function (u) { return { text: u.text, voice: model(u.dial ? dialKey : opts.key) }; }), rate: opts.rate || 1 });
      });
    };
    // The same voice without playing it: each sentence comes back as samples (the audio book).
    // Resolves with null when done or stopped, with a message when the voice failed.
    var synthId = null;
    N.synth = function (list, opts, onSentence) {
      var model = function (k) { return N.manifest.voices[k].model; };
      var dialKey = opts.dialKey && N.has(opts.dialKey) ? opts.dialKey : opts.key;
      if (!list.length) return Promise.resolve(null);
      var id = ++seq; synthId = id;
      return new Promise(function (resolve) {
        handlers[id] = function (d) {
          if (d.error || d.done) { delete handlers[id]; if (synthId === id) synthId = null; resolve(d.error || null); return; }
          onSentence(d.i, d.audio, d.rate);
        };
        getWorker().postMessage({ id: id, voice: model(opts.key), sentences: list.map(function (u) { return { text: u.text, voice: model(u.dial ? dialKey : opts.key) }; }), rate: opts.rate || 1 });
      });
    };
    N.stopSynth = function () { if (synthId != null && worker) { worker.postMessage({ cancel: synthId }); } };
    return N;
  })();

  // ------------------------------------------------------------------ reading aloud without claude.ai
  // Intent: create() -> Tts = the browser's own voices, same calls as the claude.ai tts
  // Why: the offline copy has no claude.ai tts; tablets and phones carry French voices that work without network.
  function browserTts() {
    var sy = window.speechSynthesis; if (!sy || !window.SpeechSynthesisUtterance) return null;
    var listeners = [], token = 0;
    // Voices often arrive after the page: refresh the settings window when they do.
    if ("onvoiceschanged" in sy) sy.onvoiceschanged = function () { if (A.modal && A.modal.kind === "prefs") render(); };
    var tell = function (state) { listeners.forEach(function (f) { f({ state: state }); }); };
    // The first French voice of a device is often its oldest, robotic one; the natural voices (Edge "Online (Natural)",
    // Apple "Premium"/"Enhanced", Google) come first so the default sounds like a reader, not a GPS.
    function voiceQuality(v) {
      var n = v.name || "";
      if (/natural|neural|premium|online/i.test(n)) return 3;
      if (/enhanced|améliorée|google|siri/i.test(n)) return 2;
      if (/espeak|compact|eloquence|grandma|grandpa|jacques|rocko|shelley|flo|reed|sandy/i.test(n)) return 0;
      return 1;
    }
    function frVoices() {
      return sy.getVoices().filter(function (v) { return /^fr/i.test(v.lang); }).map(function (v, i) { return { v: v, i: i }; })
        .sort(function (a, b) { return voiceQuality(b.v) - voiceQuality(a.v) || (/fr-FR/i.test(b.v.lang) - /fr-FR/i.test(a.v.lang)) || a.i - b.i; })
        .map(function (x) { return x.v; });
    }
    return {
      browser: true,
      // Installed quality voices first ("neural:<key>"), then the device's own.
      voices: function () { return Neural.keys().filter(Neural.has).map(function (k) { return "neural:" + k; }).concat(frVoices().map(function (v) { return v.name; })); },
      quality: function (v) { return /^neural:/.test(v.name) ? 4 : voiceQuality(v); },
      label: function (name) { return /^neural:/.test(name) ? Neural.label(name.slice(7)) + "  ★ qualité" : name + (voiceQuality({ name: name }) >= 2 ? "  ★ naturelle" : ""); },
      onState: function (f) { listeners.push(f); },
      stop: function () { token++; sy.cancel(); Neural.stop(); tell("idle"); },
      // opts: { voiceName, rate, language, dialogue (other voice for « »), onUnit(unit) }
      speak: function (lines, opts) {
        opts = opts || {};
        var mine = ++token; sy.cancel(); Neural.stop();
        var units = speechUnits(lines);
        // The default voice is the quality one when the reader installed it.
        var want = opts.voiceName || "", installed = Neural.keys().filter(Neural.has);
        var key = /^neural:/.test(want) ? want.slice(7) : !want ? installed[0] : null;
        if (key && Neural.has(key)) {
          tell("speaking");
          var other = installed.filter(function (k) { return k !== key; })[0];
          return Neural.speak(units, { key: key, dialKey: opts.dialogue ? other : null, rate: opts.rate, onUnit: opts.onUnit }).then(function (err) {
            if (err) { console.error("voix de qualité", err); flash("La voix de qualité n'a pas pu lire ce passage (" + err + ").", true); }
            if (mine === token) tell("idle");
          });
        }
        var frs = frVoices();
        var fr = frs.filter(function (v) { return want && v.name === want; })[0] || frs[0];
        // Characters: another French voice of the device when there is one, else the same voice a little higher.
        var fr2 = opts.dialogue ? frs.filter(function (v) { return v !== fr && voiceQuality(v) >= voiceQuality(fr || {}) - 1; })[0] : null;
        return units.reduce(function (p, un) {
          return p.then(function () {
            if (mine !== token) return;
            return new Promise(function (res) {
              var u = new SpeechSynthesisUtterance(un.text); u.lang = opts.language || "fr-FR";
              var v = un.dial && fr2 ? fr2 : fr; if (v) u.voice = v;
              if (opts.rate) u.rate = opts.rate;
              if (un.dial && opts.dialogue && !fr2) u.pitch = 1.25;
              u.onstart = function () { if (mine === token && opts.onUnit) opts.onUnit(un); };
              u.onend = res; u.onerror = res; tell("speaking"); sy.speak(u);
            });
          });
        }, Promise.resolve()).then(function () { if (mine === token) tell("idle"); });
      },
    };
  }

  // ------------------------------------------------------------------ creation
  function newGame(id) {
    loadStory(id).then(function (st) {
      A.create = { story: st, name: "", arch: "", past: (st.past || []).map(function () { return -1; }), toutJouer: true, difficulty: "aventurier" };
      A.screen = "create"; render(); window.scrollTo(0, 0);
    }).catch(function (e) { flash(e.message, true); });
  }
  function renderCreate() {
    var C = A.create, st = C.story;
    app.appendChild(topBar([h("button", { class: "btn ghost sm", onclick: function () { A.screen = "home"; render(); } }, "← Bibliothèque"), h("span", { class: "brand grow" }, st.title)]));
    var w = h("main", { class: "wrap read create" });
    w.appendChild(h("div", null, h("div", { class: "label" }, C.multi ? C.multi.title : "Nouvelle partie"), h("h1", null, C.multi && C.multi.who ? C.multi.who + ", qui es-tu ?" : "Qui es-tu ?")));
    if (st.intro) w.appendChild(h("div", { class: "prose", html: st.intro.map(function (p) { return "<p>" + md(p) + "</p>"; }).join("") }));
    var nameIn = h("input", { value: C.name, placeholder: "Ton nom", maxlength: 30, "aria-label": "Nom du héros", oninput: function (e) { C.name = e.target.value; startBtn.disabled = !ready(); } });
    w.appendChild(h("div", { class: "stack" }, h("span", { class: "label" }, "Ton nom"), nameIn));
    var archs = h("div", { class: "archs" });
    Object.keys(M.ARCHS).forEach(function (k) {
      var a = M.ARCHS[k], best = Object.keys(a.bonus).sort(function (x, y) { return a.bonus[y] - a.bonus[x]; }).slice(0, 2);
      archs.appendChild(h("button", { class: "arch" + (C.arch === k ? " on" : ""), "aria-pressed": C.arch === k ? "true" : "false", onclick: function () { C.arch = k; render(); } },
        h("b", null, a.label), h("span", { class: "small muted" }, a.tip), h("span", { class: "small" }, best.map(function (d) { return M.DOMAINS[d] + " +" + a.bonus[d]; }).join(" · "))));
    });
    w.appendChild(h("div", { class: "stack" }, h("span", { class: "label" }, "Ta voie"), archs));
    w.appendChild(renderFacePicker(C, st));
    (st.past || []).forEach(function (q, qi) {
      var box = h("div", { class: "past" }, h("h3", null, q.q));
      q.answers.forEach(function (a, ai) {
        box.appendChild(h("button", { class: "answer" + (C.past[qi] === ai ? " on" : ""), "aria-pressed": C.past[qi] === ai ? "true" : "false", onclick: function () { C.past[qi] = ai; render(); } }, a.label));
      });
      w.appendChild(box);
    });
    var tg = h("label", { class: "toggle" }, h("input", { type: "checkbox", checked: C.toutJouer, onchange: function (e) { C.toutJouer = e.target.checked; } }),
      h("span", null, h("b", null, "Tout jouer"), h("br"), h("span", { class: "small muted" }, "Un acte ne se termine qu'une fois toutes ses quêtes faites, petites comprises. Décoche pour pouvoir filer droit.")));
    w.appendChild(tg);
    if (!C.multi) {
      var dl = h("div", { class: "archs" });
      Object.keys(M.DIFFICULTY).forEach(function (k) {
        var d = M.DIFFICULTY[k];
        dl.appendChild(h("button", { class: "arch" + (C.difficulty === k ? " on" : ""), "aria-pressed": C.difficulty === k ? "true" : "false", onclick: function () { C.difficulty = k; render(); } }, h("b", null, d.label), h("span", { class: "small muted" }, d.tip)));
      });
      w.appendChild(h("div", { class: "stack" }, h("span", { class: "label" }, "Difficulté"), dl));
    }
    function ready() { return C.name.trim() && C.arch && C.past.every(function (x) { return x >= 0; }); }
    var startBtn = h("button", { class: "btn primary", disabled: !ready(), onclick: startGame }, C.multi && C.multi.next ? C.multi.next : "Commencer la lecture");
    w.appendChild(h("div", { class: "row" }, startBtn, h("span", { class: "small muted" }, "Il faut un nom, une voie et une réponse à chaque question.")));
    app.appendChild(w);
  }
  // Intent: renderFacePicker(Creation, Story) -> Element = « Ton visage » : the portrait as drawn from the name, and
  // every trait of Moteur.FACE to change it: age, skin, shape, eyes, nose, mouth, hair, beard, and the particular
  // signs (vitiligo, freckles, scars, glasses…), several at once. Optional: untouched, the name decides.
  // Why: Clément, 13/11 — every reader, child or elder, of any origin, must be able to find their own face.
  function renderFacePicker(C, st) {
    var F = M.FACE, seed = st.id + "|" + (C.name || "").trim(), cur = Heraldry.faceOf(seed, { arch: C.arch, face: C.face });
    var set = function (k, v) { C.face = C.face || {}; C.face[k] = v; render(); };
    var rowOf = function (label, el) { return h("div", { class: "face-row" }, h("span", { class: "small" }, label), el); };
    var swatches = function (label, list, k) {
      return rowOf(label, h("div", { class: "swatches" }, Object.keys(F[list]).map(function (n) {
        var col = F[list][n], on = cur[k] === col;
        return h("button", { type: "button", class: "swatch" + (on ? " on" : ""), style: "background:" + col, title: n, "aria-label": label + " : " + n, "aria-pressed": on ? "true" : "false", onclick: function () { set(k, col); } });
      })));
    };
    var seg = function (label, list, k) {
      return rowOf(label, h("div", { class: "seg" }, Object.keys(F[list]).map(function (n) {
        var on = cur[k] === n;
        return h("button", { type: "button", class: "btn sm" + (on ? " on" : ""), "aria-pressed": on ? "true" : "false", onclick: function () { set(k, n); } }, F[list][n]);
      })));
    };
    var any = function (o) { var ks = Object.keys(o); return ks[Math.floor(Math.random() * ks.length)]; };
    var shuffle = function () {
      var f = {}; Object.keys(M.FACE_KEYS).forEach(function (k) { if (k !== "marks" && k !== "age") f[k] = FACE_COLOUR_LIST[k] ? F[M.FACE_KEYS[k]][any(F[M.FACE_KEYS[k]])] : any(F[M.FACE_KEYS[k]]); });
      f.age = cur.age; f.marks = Math.random() < 0.4 ? [any(F.marks)] : []; if (f.age === "enfant") f.beard = "sans";
      C.face = f; render();
    };
    var open = A.open.face;
    var box = h("div", { class: "stack face-pick" }, h("span", { class: "label" }, "Ton visage"),
      h("div", { class: "row" }, h("span", { html: Heraldry.portrait(seed, { arch: C.arch, face: C.face, size: 112 }) }),
        h("div", { class: "stack tight" }, h("span", { class: "small muted" }, C.face ? "Composé par toi." : "Tiré de ton nom. Tu peux le changer."),
          h("div", { class: "row" }, h("button", { type: "button", class: "btn sm", onclick: function () { A.open.face = !open; render(); } }, open ? "Refermer" : "Composer mon visage"),
            open ? h("button", { type: "button", class: "btn sm ghost", onclick: shuffle }, "Au hasard") : null,
            C.face ? h("button", { type: "button", class: "btn sm ghost", onclick: function () { C.face = null; render(); } }, "Revenir à celui du nom") : null))));
    if (open) {
      box.appendChild(seg("Âge", "ages", "age"));
      box.appendChild(swatches("Peau", "skins", "skin"));
      box.appendChild(seg("Visage", "shapes", "shape"));
      box.appendChild(seg("Yeux", "eyes", "eyes"));
      box.appendChild(swatches("Couleur des yeux", "irises", "iris"));
      box.appendChild(seg("Nez", "noses", "nose"));
      box.appendChild(seg("Lèvres", "lips", "lips"));
      box.appendChild(swatches("Cheveux", "hairs", "hair"));
      box.appendChild(seg("Coiffure", "coifs", "coif"));
      box.appendChild(seg("Barbe", "beards", "beard"));
      box.appendChild(rowOf("Signes particuliers", h("div", { class: "seg" }, Object.keys(F.marks).map(function (n) {
        var on = cur.marks.indexOf(n) >= 0;
        return h("button", { type: "button", class: "btn sm" + (on ? " on" : ""), "aria-pressed": on ? "true" : "false", onclick: function () { set("marks", on ? cur.marks.filter(function (m) { return m !== n; }) : cur.marks.concat(n)); } }, F.marks[n]);
      }))));
      box.appendChild(swatches("Fond", "backs", "back"));
      // The face stays in sight while the reader scrolls through the choices.
      box.appendChild(h("div", { class: "face-float", "aria-hidden": "true", html: Heraldry.portrait(seed, { arch: C.arch, face: C.face, size: 92 }) }));
    }
    return box;
  }

  // Intent: build(Creation) -> State = the new hero, his past answers applied, the story started
  function buildState(C) {
    var st = C.story, s = M.freshState(st, { toutJouer: C.toutJouer, difficulty: C.difficulty });
    s.name = C.name.trim(); s.arch = C.arch; if (C.face) s.face = C.face;
    s.events = [];
    (st.past || []).forEach(function (q, qi) { M.apply(st, s, q.answers[C.past[qi]].fx); });
    var pastEvents = s.events.slice();
    M.start(st, s);
    s.events = pastEvents.concat(s.events);
    return s;
  }
  function startGame() {
    var C = A.create, st = C.story, s = buildState(C);
    if (C.multi) { multiCreated(C, s); return; }
    var g = { id: uid(), profil: A.profile.id, story: st.id, storyTitle: st.title, storyVersion: st.version || 1, created: Date.now() };
    A.game = { doc: g, story: st, s: s, undo: [], log: [], recit: { k: 0, pages: [] }, since: Date.now() };
    logStep(); persist();
    A.create = null; A.screen = "game"; render(); window.scrollTo(0, 0);
  }

  // ------------------------------------------------------------------ playing
  // Intent: upgrade(Story, State) -> State = a save from an older page made playable ! fills the missing combat fields
  // Why: a fight saved before the combat rework (11/11: ranks, techniques, companions' PV) had no ranks, orders or
  // used techniques, and drawing it failed. The fight goes on where it was; ranks follow the rule of the start of a
  // fight (Combat 20 and more in front, never a healer, somebody always in front).
  var OLD_FRONT_FROM = 20;
  function upgradeState(st, s) {
    var c = s.combat;
    if (!c || c.rank) return s;
    var fill = { calm: null, range: "contact", terrain: "", spare: false, defending: false, ward: 0, dread: 0, used: {}, rank: {}, orders: {},
      hidden: false, line: false, dodge: false, blessed: false, soothed: false, fleeBonus: 0, orderRound: -1, arrowsUsed: 0, thrown: false };
    Object.keys(fill).forEach(function (k) { if (c[k] == null) c[k] = fill[k]; });
    c.rank = {};
    (c.foes || []).forEach(function (f) {
      var base = (st.enemies || {})[String(f.key || "").split("-")[0]] || {};
      if (f.open == null) f.open = false; if (f.trapped == null) f.trapped = 0; if (f.asleep == null) f.asleep = false;
      if (f.flank == null) f.flank = !!base.flank; if (f.ranged == null) f.ranged = !!base.ranged;
    });
    var party = M.partyView(st, s), best = null;
    party.forEach(function (m) {
      var hero = m.who === "hero", cb = M.bonus(st, s, "combat", hero ? undefined : m.who), healer = !hero && ((st.companions || {})[m.who] || {}).healer;
      c.rank[m.who] = cb >= OLD_FRONT_FROM && !healer ? M.FRONT : "derriere";
      if (!best || cb > best.cb) best = { who: m.who, cb: cb };
    });
    if (best && !party.some(function (m) { return c.rank[m.who] === M.FRONT; })) c.rank[best.who] = M.FRONT;
    return s;
  }
  function openGame(id) {
    A.busy = true; render();
    Store.get("parties", id).then(function (g) {
      if (!g) throw new Error("Partie introuvable.");
      return loadStory(g.story).then(function (st) {
        g.id = id;
        A.game = { doc: g, story: st, s: upgradeState(st, JSON.parse(g.state)), undo: g.undo || [], log: g.log || [], recit: { k: Math.max(0, (g.recitParts || 1) - 1), pages: [] }, since: Date.now() };
        A.recap = !g.ended && (g.log || []).length > 1;
        var G0 = A.game;
        if (g.recitParts) Store.get("recits", g.id + "~" + G0.recit.k).then(function (r) { if (r && r.pages && A.game === G0 && !G0.recit.pages.length) G0.recit.pages = r.pages; });
        if ((g.storyVersion || 1) !== (st.version || 1)) A.notice = "Cette histoire a changé depuis la sauvegarde ; si un passage manque, reprends au choix précédent.";
        A.screen = "game"; A.busy = false; render(); window.scrollTo(0, 0);
      });
    }).catch(function (e) { A.busy = false; flash(e.message, true); });
  }
  function where(st, s) {
    if (s.travel) { var r = (st.world.routes || []).filter(function (x) { return x.id === s.travel.route; })[0]; return (r ? r.name : "En route") + " · étape " + s.travel.step + "/" + s.travel.total; }
    return s.place && st.world && st.world.places[s.place] ? st.world.places[s.place].name : "";
  }
  function persist() {
    if (A.game.multi) { multiPersist(); return; }
    if (A.game.ephemeral) return;
    var G = A.game, s = G.s, st = G.story, d = G.doc, v = M.view(st, s);
    d.state = JSON.stringify(s); d.undo = G.undo; d.log = G.log; d.updated = Date.now();
    d.hero = s.name; d.arch = s.arch; d.archLabel = (M.ARCHS[s.arch] || {}).label; d.level = M.level(s); d.where = where(st, s) || v.title; d.ended = v.kind === "end";
    while (JSON.stringify(d).length > DOC_MAX_CHARS && d.undo.length) d.undo = d.undo.slice(1);
    while (JSON.stringify(d).length > DOC_MAX_CHARS && d.log.length > 20) d.log = d.log.slice(Math.ceil(d.log.length / 4));
    while (JSON.stringify(d).length > DOC_MAX_CHARS && (d.marks || []).length) d.marks = d.marks.slice(1);
    d.turns = s.turn || 0;
    keepRecords(st, s, v, d);
    saveRecit(G, d);
    var meta = {}; for (var k in d) if (k !== "state" && k !== "undo" && k !== "log" && k !== "marks") meta[k] = d[k];
    A.allGames = (A.allGames || []).filter(function (g) { return g.id !== d.id; }).concat([meta]);
    A.games = A.allGames.filter(function (g) { return A.profile && g.profil === A.profile.id; }).sort(function (a, b) { return (b.updated || 0) - (a.updated || 0); });
    Store.put("parties", d.id, d).catch(function (e) {
      A.notice = "La sauvegarde en ligne a échoué (" + ((e && e.code) || "erreur") + ") ; la partie reste enregistrée dans ce navigateur.";
      if (A.screen === "game") render();
    });
  }
  // Intent: log(ChoiceLabel?, Others?) -> () = one journal line per page: where, what happened, what was chosen to get
  // here and how many other ways were left (the timeline, "Précédemment…" and "Mon aventure" read it).
  function logStep(chosen, others) {
    var G = A.game, s = G.s, v = M.view(G.story, s);
    var last = G.log[G.log.length - 1];
    if (last && chosen) { last.c = chosen; last.alt = others || 0; }
    G.log.push({ t: M.timeLabel(s), title: v.title, act: s.lastAct || "", ev: s.events.map(function (e) { return e.text; }) });
    if (G.log.length > LOG_MAX) G.log.splice(0, G.log.length - LOG_MAX);
    if (G.recit && !G.multi) {
      var rp = G.recit.pages, prev = rp[rp.length - 1];
      if (prev && chosen) prev.c = chosen;
      rp.push({ t: M.timeLabel(s), title: v.title, act: s.lastAct || "", text: v.text.slice(), ev: s.events.filter(function (e) { return /quest|feat|good/.test(e.cls || "") && !/roll/.test(e.cls || ""); }).map(function (e) { return e.text; }).slice(0, 6), end: v.kind === "end" });
    }
  }
  function pick(c) {
    if (A.game.multi) { multiPick(c); return; }
    var G = A.game;
    stopSpeaking();
    // Real dice: the reader throws before the engine reads the roll.
    if (c.test && pref("dice") === "vrais" && !c.diced) { A.modal = { kind: "dice", c: c, rolls: [] }; render(); return; }
    // Shaking the device to throw (option, off by default: children would throw by mistake).
    if (c.test && pref("shakeDice") && pref("dice") !== "vrais" && !c.shaken && Shake.available()) { A.modal = { kind: "shake", c: c }; render(); return; }
    c.shaken = false;
    var before = M.view(G.story, G.s), others = before.choices.filter(function (x) { return x.ok && !x.sys && !x.restart && x !== c && x.label !== c.label; }).length;
    G.undo.push(JSON.stringify(G.s)); if (G.undo.length > UNDO_MAX) G.undo.shift();
    var queue = (c.diced || []).slice();
    if (c.diced) M.setDice(function () { return queue.length ? queue.shift() : null; });
    var fight0 = G.s.combat, act0 = G.s.lastAct; actTrack(G, null);   // the exchange's blows stay on it even when the fight ends with this choice
    try { M.choose(G.story, G.s, c); }
    catch (e) { M.setDice(null); G.s = JSON.parse(G.undo.pop()); A.notice = "Ce choix a buté sur une erreur de l'histoire : " + e.message; render(); return; }
    M.setDice(null);
    A.notice = ""; A.recap = false; A.rollAnim = true;
    var now = Date.now(), dt = Math.min(now - (G.since || now), PLAY_GAP_MS); G.doc.playMs = (G.doc.playMs || 0) + dt; G.since = now;
    if (dt > 0) { var dk = dayKey(now), days = G.doc.days = G.doc.days || {}; days[dk] = (days[dk] || 0) + dt; }
    var closed = actTrack(G, act0); if (closed && !A.modal) A.modal = { kind: "chapter", act: closed };
    logStep(c.label, others); persist(); bedtimeAfterChoice(); render();
    if (fight0 && fight0.hits && fight0.hits.length) { var partyIds = {}; M.partyView(G.story, G.s).forEach(function (m) { partyIds[m.who] = 1; }); Sfx.blows(fight0.hits, function (k) { return !!partyIds[k]; }); }
    var top = document.querySelector(".page"); if (top) top.scrollIntoView({ block: "start", behavior: "smooth" });
    if (pref("autoRead") && A.tts) speak(M.view(G.story, G.s));
  }
  function undo() {
    if (A.game.multi) { multiUndo(); return; }
    var G = A.game; if (!G.undo.length) return;
    stopSpeaking();
    G.s = upgradeState(G.story, JSON.parse(G.undo.pop())); G.s.events = [{ text: "Tu reviens au choix précédent.", cls: "" }];
    if (G.recit && G.recit.pages.length > 1) G.recit.pages.pop();
    persist(); render();
  }
  function paraNum(st, id) {
    if (!st._nums) {
      var ids = Object.keys(st.passages).sort(function (a, b) { return hash(st.id + a) - hash(st.id + b); });
      st._nums = {}; ids.forEach(function (x, i) { st._nums[x] = i + 1; });
    }
    return st._nums[id];
  }

  function renderGame() {
    var G = A.game, st = G.story, s = G.s, v = G.multi ? multiView() : M.view(st, s);
    var pvMax = M.pvMax(s);
    app.appendChild(topBar([
      h("button", { class: "btn ghost sm", onclick: function () { stopSpeaking(); leaveGame(); } }, "← Bibliothèque"),
      G.multi ? multiBadge() : null,
      h("span", { class: "grow" }),
      h("span", { class: "pill", title: "Points de vie" }, "PV " + s.pv + "/" + pvMax, h("span", { class: "bar pv", style: "width:48px" }, h("i", { style: "width:" + Math.round(100 * s.pv / pvMax) + "%" }))),
      h("span", { class: "pill gold", title: "Bourse : " + M.money(st, s.gold) }, M.money(st, s.gold, true)),
      h("span", { class: "pill", title: "Jours de vivres" }, "Vivres " + s.food),
      s.mark ? h("span", { class: "pill mark", title: "La Marque" }, "Marque " + s.mark) : null,
      h("span", { class: "pill small" }, M.timeLabel(s)),
      h("button", { class: "btn sm primary", onclick: function () { A.carnet = true; render(); } }, "Carnet")]));
    var w = h("main", { class: "wrap" });
    // act ruler
    var acts = st.acts || [], cur = acts.map(function (a) { return a.id; }).indexOf(s.lastAct);
    w.appendChild(h("div", { class: "acts", title: cur >= 0 ? acts[cur].title : "" }, acts.map(function (a, i) { return h("span", { class: i < cur ? "done" : i === cur ? "on" : "" }); })));
    var page = h("article", { class: "page read" });
    var num = v.passage ? paraNum(st, s.node) : null;
    var vig = Vignette.of(st, s); if (vig) page.appendChild(vig);
    if (s.travel) { noteRoad(G, v); var trip = renderTravelStrip(st, s, G); if (trip) page.appendChild(trip); }
    var rc = A.recap && !G.multi ? renderRecap(G) : null, nr = A.recap && !G.multi && !G.ephemeral ? notesRecap(G) : null;
    if (rc) { if (nr) rc.appendChild(nr); page.appendChild(rc); }
    else if (nr) page.appendChild(h("aside", { class: "recap" }, h("div", { class: "row" }, h("span", { class: "grow" }), h("button", { class: "btn ghost sm", onclick: function () { A.recap = false; render(); } }, "Fermer")), nr));
    page.appendChild(h("div", { class: "page-head" }, h("div", null, h("h2", null, v.title || ""), h("div", { class: "where" }, [cur >= 0 ? acts[cur].title : null, where(st, s)].filter(Boolean).join(" · "))), num ? h("span", { class: "para-num", title: "Numéro du paragraphe" }, "§ " + num) : null));
    if (A.notice) page.appendChild(h("div", { class: "notice" }, A.notice));
    if (A.bedWarn && !G.multi) page.appendChild(h("div", { class: "notice soft" }, "🌙 Bientôt l'heure de refermer le livre : le récit te proposera de t'arrêter à une page calme."));
    var prose = h("div", { class: "prose" });
    var folded = v.reread && A.unfold !== s.node + "#" + s.turn;
    if (folded) prose.appendChild(h("p", { class: "reread" }, h("span", { class: "muted" }, "Tu connais déjà cette page. "),
      h("button", { class: "btn ghost sm", onclick: function () { A.unfold = s.node + "#" + s.turn; render(); } }, "Relire")));
    else { var glUsed = {}; v.text.forEach(function (t) { var ht = Glossary.mark(st, md(t), glUsed); prose.appendChild(h("p", { html: pref("syllables") ? Syllables.mark(ht) : ht })); }); }
    page.appendChild(prose);
    // Clues, items and rolls come after the text (Clément, 11/11: at the top they broke the reading).
    if (s.events && s.events.length) page.appendChild(h("div", { class: "events", role: "status" }, s.events.map(function (e) { return h("div", { class: "ev " + (e.cls || "") }, rollBadge(e), e.text); })));
    A.rollAnim = false;
    if (v.kind === "combat") page.appendChild(renderFight(s));
    if (G.multi && v.wait) page.appendChild(renderWait(v));
    else page.appendChild(renderChoices(v));
    if (v.kind === "end") page.appendChild(renderEnding(st, s, v));
    w.appendChild(page);
    w.appendChild(h("div", { class: "tools" },
      h("button", { class: "btn sm", disabled: !G.undo.length, onclick: undo, title: G.multi ? "Revenir avant ton dernier choix (pas avant un choix du monde ni une charnière)" : "Revenir avant ton dernier choix" }, "↶ Choix précédent"),
      G.multi && A.multi.kind === "local" && !v.wait ? h("button", { class: "btn sm", onclick: function () { stopSpeaking(); passTurn(); } }, "Passer la main") : null,
      A.tts ? h("button", { class: "btn sm", onclick: function () { A.speaking ? stopSpeaking() : speak(v); } }, A.speaking ? "■ Arrêter la lecture" : "🔈 Lire à voix haute") : null,
      pref("voiceChoice") && VoiceChoice.available() && !G.multi && v.kind !== "end" ? h("button", { class: "btn sm" + (VoiceChoice.listening ? " primary" : ""), "aria-pressed": VoiceChoice.listening ? "true" : "false", title: "Dis « le deuxième » ou quelques mots du choix", onclick: function () { VoiceChoice.listening ? VoiceChoice.stop() : VoiceChoice.listen(); } }, VoiceChoice.listening ? "🎤 J'écoute…" : "🎤 Choisir à la voix") : null,
      h("button", { class: "btn sm", onclick: function () { A.carnet = true; A.carnetTab = "carte"; render(); } }, "Carte"),
      h("button", { class: "btn sm", onclick: function () { A.carnet = true; A.carnetTab = "quetes"; render(); } }, "Quêtes"),
      G.multi ? null : h("button", { class: "btn sm", onclick: function () { A.modal = { kind: "mark" }; render(); } }, "🔖 Marque-page"),
      h("button", { class: "btn sm", "aria-pressed": pref("ambiance") ? "true" : "false", onclick: function () { setPref("ambiance", !pref("ambiance")); } }, pref("ambiance") ? "🔊 Ambiance" : "🔇 Ambiance"),
      pref("nudge") && !G.multi && v.kind !== "end" ? h("button", { class: "btn sm", disabled: nudgesLeft(G) <= 0, title: "Une phrase pour t'orienter, sans rien révéler", onclick: function () { askNudge(G); } }, "💡 Coup de pouce (" + nudgesLeft(G) + ")") : null,
      h("button", { class: "btn sm", onclick: function () { A.modal = { kind: "prefs" }; render(); } }, "⚙ Réglages"),
      h("button", { class: "btn sm", onclick: function () { A.modal = { kind: "report" }; render(); } }, "⚑ Signaler")));
    app.appendChild(w);
  }
  // Intent: render(State) -> Element = foes with their states, then our side in two ranks with PV
  // ------------------------------------------------------------------ the journey on the map
  // Intent: the road being travelled, drawn above the page: the two ends, one notch per step, the pawn sliding from
  // the last step to this one, and a mark where something happened on the way (✦ an encounter, ⛺ a camp). The marks
  // stay on the roads of the notebook's map (doc.routeMarks[route] = [{ at, title, kind }], at = 0..1 from route.from).
  // Why: Clément, 13/11: to feel the road.
  var TRAVEL_SLIDE_MS = 900;
  // The drawn road: a gentle bend seeded by the route's id (the same curve on the map and on the strip).
  function routeCurve(W, r) {
    var a = W.places[r.from], z = W.places[r.to]; if (!a || !z) return null;
    var bend = ((hash(r.id) % 100) / 100 - 0.5) * 0.35, mx = (a.x + z.x) / 2 - (z.y - a.y) * bend, my = (a.y + z.y) / 2 + (z.x - a.x) * bend;
    return { a: a, z: z, mx: mx, my: my, at: function (t) { var u = 1 - t; return { x: u * u * a.x + 2 * u * t * mx + t * t * z.x, y: u * u * a.y + 2 * u * t * my + t * t * z.y }; },
      d: "M" + a.x + " " + a.y + " Q" + mx.toFixed(2) + " " + my.toFixed(2) + " " + z.x + " " + z.y };
  }
  function travelRoute(st, s) { var t = s.travel; return t ? ((st.world || {}).routes || []).filter(function (x) { return x.id === t.route; })[0] : null; }
  // Where the pawn is, 0..1 from route.from.
  function travelAt(r, t) { var k = t.total ? t.step / t.total : 0; return t.from === r.from ? k : 1 - k; }
  // Intent: noteRoad(Game, View) ! keeps a mark where an encounter or a camp happened on the road
  function noteRoad(G, v) {
    var s = G.s, t = s.travel, r = travelRoute(G.story, s); if (!r || G.multi || G.ephemeral) return;
    var kind = s.node === "@camp" ? "camp" : t.phase === "event" ? "event" : null; if (!kind) return;
    // A camp is pitched between two steps.
    var at = kind === "camp" ? (function () { var k = Math.min(1, (t.step + 0.5) / t.total); return t.from === r.from ? k : 1 - k; })() : travelAt(r, t), marks = (G.doc.routeMarks = G.doc.routeMarks || {})[r.id] = G.doc.routeMarks[r.id] || [];
    var title = kind === "camp" ? "Bivouac" : String(v.title || "").replace(/\*/g, "");
    // One mark per step and kind: an encounter of several pages keeps the title of its first page.
    if (!marks.some(function (m) { return Math.abs(m.at - at) < 1e-3 && m.kind === kind; })) marks.push({ at: +at.toFixed(3), title: title, kind: kind });
  }
  // The strip is the road straightened out, from where you left (left) to where you go (right).
  var TRIP_X0 = 10, TRIP_X1 = 90, TRIP_Y = 9;
  function renderTravelStrip(st, s, G) {
    var W = st.world || {}, t = s.travel, r = travelRoute(st, s); if (!r) return null;
    var NS = "http://www.w3.org/2000/svg", aller = t.from === r.from;
    function svg(tag, attrs, text) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); if (text != null) e.textContent = text; return e; }
    function X(k) { return TRIP_X0 + (TRIP_X1 - TRIP_X0) * k; }
    var now = t.total ? t.step / t.total : 0;
    var root = svg("svg", { viewBox: "0 0 100 20", class: "trip", role: "img", "aria-label": "La route en cours, étape " + t.step + " sur " + t.total });
    root.appendChild(svg("line", { x1: X(0), y1: TRIP_Y, x2: X(1), y2: TRIP_Y, class: "trip-road", "stroke-width": 0.8 }));
    root.appendChild(svg("line", { x1: X(0), y1: TRIP_Y, x2: X(now), y2: TRIP_Y, class: "trip-done", "stroke-width": 1.4 }));
    for (var n = 1; n < t.total; n++) root.appendChild(svg("circle", { cx: X(n / t.total), cy: TRIP_Y, r: 0.7, class: "trip-notch" }));
    ((G.doc.routeMarks || {})[r.id] || []).forEach(function (m) {
      var k = aller ? m.at : 1 - m.at, g = svg("text", { x: X(k), y: TRIP_Y - 2.6, "font-size": 3.6, "text-anchor": "middle", class: "trip-mark" }, m.kind === "camp" ? "⛺" : "✦");
      g.appendChild(svg("title", {}, m.title)); root.appendChild(g);
    });
    [[0, W.places[t.from], "start"], [1, W.places[t.to], "end"]].forEach(function (e) {
      root.appendChild(svg("circle", { cx: X(e[0]), cy: TRIP_Y, r: 1.6, class: "trip-end" }));
      root.appendChild(svg("text", { x: X(e[0]) + (e[0] ? 1.5 : -1.5), y: TRIP_Y + 6.5, "font-size": 3.4, "text-anchor": e[2], class: "trip-name" }, (e[1] || {}).name || ""));
    });
    // The pawn slides from where it stood; a render in the middle of the slide picks it up where it is.
    var key = t.route + "|" + t.from, T = A.trip;
    if (!T || T.key !== key) T = A.trip = { key: key, from: now, to: now, t0: 0 };
    else if (T.to !== now) T = A.trip = { key: key, from: T.to, to: now, t0: Date.now() };
    var elapsed = Date.now() - T.t0, pawn = svg("circle", { cx: X(now), cy: TRIP_Y, r: 2, class: "trip-pawn" });
    if (T.from !== now && elapsed < TRAVEL_SLIDE_MS && !matchMedia("(prefers-reduced-motion: reduce)").matches)
      pawn.appendChild(svg("animate", { attributeName: "cx", from: X(T.from), to: X(now), dur: TRAVEL_SLIDE_MS + "ms", begin: (-elapsed) + "ms", fill: "freeze" }));
    root.appendChild(pawn);
    return h("div", { class: "trip-box" }, root, h("div", { class: "small muted trip-cap" }, "En route vers " + ((W.places[t.to] || {}).name || "…") + " · étape " + t.step + " sur " + t.total));
  }
  // ------------------------------------------------------------------ combat sounds
  // Intent: Sfx.blows(hits) = the blows of the exchange just played, one after the other: a blade that rings, an arrow
  // that whistles, a spell that shimmers, a dull thud when we are hit; a miss is only the swish. Made by the device
  // (Web Audio), no file; volume of the ambiance, pref « sfx » to switch it off. Why: Clément, 13/11.
  var SFX_GAP_S = 0.2, SFX_MAX = 6;
  var Sfx = (function () {
    var X = {}, ctx = null, noiseBuf = null;
    function ac() {
      if (!ctx) { var C = window.AudioContext || window.webkitAudioContext; if (!C) return null; ctx = new C(); }
      if (ctx.state === "suspended") ctx.resume();
      return ctx;
    }
    function noise(c) {
      if (!noiseBuf) { noiseBuf = c.createBuffer(1, c.sampleRate, c.sampleRate); var d = noiseBuf.getChannelData(0); for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
      var n = c.createBufferSource(); n.buffer = noiseBuf; return n;
    }
    function env(c, t, peak, attack, decay) { var g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay); return g; }
    function swish(c, out, t, from, to, dur, vol) {
      var n = noise(c), f = c.createBiquadFilter(); f.type = "bandpass"; f.Q.value = 2.5;
      f.frequency.setValueAtTime(from, t); f.frequency.exponentialRampToValueAtTime(to, t + dur);
      var g = env(c, t, vol, 0.03, dur); n.connect(f); f.connect(g); g.connect(out); n.start(t); n.stop(t + dur + 0.1);
    }
    function tone(c, out, t, type, f0, f1, vol, decay) {
      var o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(f0, t); if (f1) o.frequency.exponentialRampToValueAtTime(f1, t + decay);
      var g = env(c, t, vol, 0.005, decay); o.connect(g); g.connect(out); o.start(t); o.stop(t + decay + 0.05);
    }
    function blade(c, out, t, hit) {
      swish(c, out, t, 700, 2600, 0.16, hit ? 0.25 : 0.35);
      if (!hit) return;
      var n = noise(c), f = c.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = 3200; f.Q.value = 4;
      var g = env(c, t + 0.12, 0.5, 0.002, 0.09); n.connect(f); f.connect(g); g.connect(out); n.start(t + 0.12); n.stop(t + 0.3);
      tone(c, out, t + 0.12, "triangle", 1240, 980, 0.12, 0.35); tone(c, out, t + 0.12, "sine", 130, 70, 0.35, 0.12);
    }
    function arrow(c, out, t, hit) { swish(c, out, t, 2600, 700, 0.24, 0.3); if (hit) tone(c, out, t + 0.22, "sine", 220, 90, 0.4, 0.09); }
    function spell(c, out, t, hit) {
      [660, 880, 1320].forEach(function (f, i) {
        var o = c.createOscillator(), lfo = c.createOscillator(), lg = c.createGain(); o.type = "sine"; o.frequency.value = f * (hit ? 1 : 0.75);
        lfo.frequency.value = 7 + i; lg.gain.value = 8; lfo.connect(lg); lg.connect(o.frequency);
        var g = env(c, t + i * 0.04, hit ? 0.12 : 0.06, 0.03, 0.6); o.connect(g); g.connect(out); o.start(t); lfo.start(t); o.stop(t + 0.8); lfo.stop(t + 0.8);
      });
    }
    function thud(c, out, t) {
      tone(c, out, t, "sine", 110, 55, 0.6, 0.18);
      var n = noise(c), f = c.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 500; var g = env(c, t, 0.4, 0.003, 0.12); n.connect(f); f.connect(g); g.connect(out); n.start(t); n.stop(t + 0.2);
    }
    X.blows = function (hits, ours) {
      if (!pref("sfx") || !hits || !hits.length) return;
      var c = ac(); if (!c) return;
      var out = c.createGain(); out.gain.value = Math.max(0.05, pref("volume")); out.connect(c.destination);
      var t = c.currentTime + 0.05;
      hits.slice(0, SFX_MAX).forEach(function (b, i) {
        var at = t + i * SFX_GAP_S, hit = b.dmg > 0, mine = ours(b.from);
        if (b.kind === "sort") spell(c, out, at, hit);
        else if (b.kind === "tir") arrow(c, out, at, hit);
        else if (!mine && hit) { swish(c, out, at, 600, 1800, 0.12, 0.2); thud(c, out, at + 0.1); }
        else blade(c, out, at, hit);
      });
    };
    return X;
  })();

  // ------------------------------------------------------------------ the end of an act, illustrated
  // Intent: when the story moves to the next act, a page sums up the act just closed: the road walked on the map,
  // the companions met, the feats and quests won, the days spent and the experience gained. Only what was lived:
  // nothing of what comes next. Kept per game in doc.actLog[act] = { met, feats, quests, ep, time, places }.
  // Why: Clément, 13/11.
  function actSnap(st, s) {
    return { met: Object.keys(s.met || {}).filter(function (k) { return s.met[k]; }), feats: Object.keys(s.feats || {}), quests: M.questsOf(st).filter(function (q) { return M.questDone(s, q); }).map(function (q) { return q.id; }),
      ep: s.ep, time: s.time, places: s.place ? [s.place] : [] };
  }
  // Called around each choice: opens the act's record, follows the hero from place to place, tells when an act closed.
  function actTrack(G, before) {
    var s = G.s, st = G.story; if (G.multi || G.ephemeral) return null;
    var L = G.doc.actLog = G.doc.actLog || {}, now = s.lastAct || "";
    if (now && !L[now]) L[now] = actSnap(st, s);
    if (now && s.place) { var pl = L[now].places; if (pl[pl.length - 1] !== s.place) pl.push(s.place); }
    return before && now && before !== now && L[before] ? before : null;
  }
  function modalChapter(box, close, m) {
    var G = A.game, st = G.story, s = G.s, act = (st.acts || []).filter(function (x) { return x.id === m.act; })[0] || { title: m.act }, L = G.doc.actLog[m.act];
    modalHead(box, "Fin de « " + act.title + " »", close);
    var b = h("div", { class: "drawer-body stack chapter" });
    // The road walked, on the map most of it was on.
    var W = st.world || {}, places = W.places || {}, maps = {};
    L.places.forEach(function (k) { if (places[k]) { var mp = places[k].map || ""; maps[mp] = (maps[mp] || 0) + 1; } });
    var mapId = Object.keys(maps).sort(function (x, y) { return maps[y] - maps[x]; })[0];
    var path = L.places.filter(function (k) { return places[k] && (places[k].map || "") === mapId; });
    if (path.length > 1) {
      var pts = path.map(function (k) { return places[k].x.toFixed(1) + "," + places[k].y.toFixed(1); });
      // Framed on the places of the act, 5:4, with room for the names.
      var xs = path.map(function (k) { return places[k].x; }), ys = path.map(function (k) { return places[k].y; });
      var bx0 = Math.min.apply(null, xs), bx1 = Math.max.apply(null, xs), by0 = Math.min.apply(null, ys), by1 = Math.max.apply(null, ys);
      var bw = Math.max(30, bx1 - bx0 + 30), bh = Math.max(24, by1 - by0 + 16); if (bw / bh > 1.25) bh = bw / 1.25; else bw = bh * 1.25;
      var vx = (bx0 + bx1) / 2 - bw / 2, vy = (by0 + by1) / 2 - bh / 2, u = bw / 100;
      var named = {}, svgs = ['<svg class="chapter-map" viewBox="' + [vx, vy, bw, bh].map(function (n) { return n.toFixed(2); }).join(" ") + '" role="img" aria-label="La route de cet acte"><rect x="' + vx.toFixed(2) + '" y="' + vy.toFixed(2) + '" width="' + bw.toFixed(2) + '" height="' + bh.toFixed(2) + '" rx="' + (3 * u).toFixed(2) + '" class="cm-bg" stroke-width="' + (0.4 * u).toFixed(2) + '"/>',
        '<polyline points="' + pts.join(" ") + '" class="cm-road" stroke-width="' + (0.8 * u).toFixed(2) + '" stroke-dasharray="' + (2 * u).toFixed(2) + " " + (1.2 * u).toFixed(2) + '"/>'];
      var cxm = (bx0 + bx1) / 2;
      path.forEach(function (k, i) {
        var p = places[k], last = i === path.length - 1; svgs.push('<circle cx="' + p.x + '" cy="' + p.y + '" r="' + ((last ? 2 : 1.3) * u).toFixed(2) + '" class="cm-dot' + (last ? " last" : "") + '"/>');
        if (!named[k]) { named[k] = 1; var right = p.x <= cxm; svgs.push('<text x="' + (p.x + (right ? 2.4 : -2.4) * u).toFixed(2) + '" y="' + (p.y + u).toFixed(2) + '" font-size="' + (3 * u).toFixed(2) + '" text-anchor="' + (right ? "start" : "end") + '" class="cm-name">' + esc(p.name) + "</text>"); }
      });
      svgs.push("</svg>");
      b.appendChild(h("div", { html: svgs.join("") }));
    }
    var hours = s.time - L.time, days = Math.max(1, Math.round(hours / 24)), ep = s.ep - L.ep;
    b.appendChild(h("p", { class: "chapter-stats" }, days + " jour" + (days > 1 ? "s" : "") + " de route et d'aventure" + (ep > 0 ? " · +" + ep.toLocaleString("fr-FR") + " points d'expérience" : "") + " · niveau " + M.level(s)));
    var newMet = Object.keys(s.met || {}).filter(function (k) { return s.met[k] && L.met.indexOf(k) < 0 && (st.companions || {})[k]; });
    if (newMet.length) b.appendChild(h("div", { class: "stack tight" }, h("span", { class: "label" }, "Rencontrés"), h("div", { class: "chapter-faces" }, newMet.map(function (k) {
      return h("div", { class: "chapter-face" }, h("span", { html: portraitOf(st, k, s).replace(/width="64" height="64"/, 'width="56" height="56"') }), h("span", { class: "small" }, st.companions[k].name));
    }))));
    var feats = M.featsOf(st).filter(function (f) { return (s.feats || {})[f.id] && L.feats.indexOf(f.id) < 0; });
    var quests = M.questsOf(st).filter(function (q) { return M.questDone(s, q) && L.quests.indexOf(q.id) < 0; });
    if (feats.length || quests.length) b.appendChild(h("ul", { class: "plain chapter-list" },
      quests.map(function (q) { return h("li", null, "✔ " + q.title); }), feats.map(function (f) { return h("li", null, "★ " + f.title); })));
    b.appendChild(h("button", { class: "btn primary", onclick: close }, "Tourner la page"));
    box.appendChild(b);
  }

  // ------------------------------------------------------------------ throwing the dice by shaking the device
  // Intent: Shake = with the option on, a test opens « Secoue pour lancer » : a jolt of the device (or the button)
  // throws, and the engine rolls as usual. Off by default (Clément, 13/11: children would trigger it by mistake).
  var SHAKE_G = 18;                          // m/s², a deliberate shake (gravity alone is 9.8)
  var SHAKE_HITS = 2;                        // jolts above it, within SHAKE_WINDOW_MS
  var SHAKE_WINDOW_MS = 700;
  var Shake = (function () {
    var S = {}, handler = null;
    S.available = function () { return "DeviceMotionEvent" in window; };
    // iOS asks once, from a tap.
    S.ask = function () { try { if (window.DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === "function") return DeviceMotionEvent.requestPermission().catch(function () { return "denied"; }); } catch (e) { /* ignore */ } return Promise.resolve("granted"); };
    S.stop = function () { if (handler) window.removeEventListener("devicemotion", handler); handler = null; };
    S.listen = function (done) {
      S.stop(); var hits = [];
      handler = function (e) {
        var g = e.accelerationIncludingGravity || e.acceleration; if (!g) return;
        var m = Math.sqrt((g.x || 0) * (g.x || 0) + (g.y || 0) * (g.y || 0) + (g.z || 0) * (g.z || 0)), now = Date.now();
        if (m < SHAKE_G) return;
        hits = hits.filter(function (t) { return now - t < SHAKE_WINDOW_MS; }); hits.push(now);
        if (hits.length >= SHAKE_HITS) { S.stop(); done(); }
      };
      window.addEventListener("devicemotion", handler);
    };
    return S;
  })();
  function modalShake(box, close, m) {
    var c = m.c;
    var shut = function () { Shake.stop(); close(); };
    modalHead(box, "Secoue pour lancer", shut);
    // A shake after the window was closed some other way (Échap, tap outside) throws nothing.
    var throwIt = function () { Shake.stop(); if (!A.modal || A.modal !== m) return; A.modal = null; c.shaken = true; pick(c); };
    var b = h("div", { class: "drawer-body stack shake" });
    b.appendChild(h("p", null, h("b", null, c.label), c.chance != null ? h("span", { class: "muted" }, " · " + c.chance + " % de chances") : null));
    b.appendChild(h("div", { class: "shake-die", "aria-hidden": "true" }, "🎲"));
    b.appendChild(h("p", { class: "small muted" }, "Secoue l'appareil d'un coup sec, comme un gobelet de dés."));
    b.appendChild(h("div", { class: "row" }, h("button", { class: "btn primary", onclick: throwIt }, "Lancer sans secouer"), h("button", { class: "btn ghost", onclick: shut }, "Choisir autre chose")));
    box.appendChild(b);
    Shake.listen(throwIt);
  }

  // ------------------------------------------------------------------ the battle plan
  // Intent: battlePlan(Story, State) -> Element = a little drawn field above the choices: our two ranks on the left,
  // the foes on the right (far off at first), every fighter a token with a ring of PV, and the blows of the last
  // exchange as arrows (green ours, red theirs, violet the spells, dashed when missed). A tap on a token tells more.
  // Why: Clément, 13/11: to see the fight at a glance.
  var PLAN_W = 340, PLAN_ROW = 64, PLAN_TOP = 28, PLAN_R = 19;
  var PLAN_X = { back: 45, front: 112, foe: 248, foe2: 300, far: 300, far2: 318 };
  var PLAN_COLS_FOES = 5;                  // above that many foes, a second column
  function battlePlan(st, s) {
    var c = s.combat, party = M.partyView(st, s), foes = c.foes, far = c.range === "loin" && c.round === 0;
    var front = party.filter(function (m) { return m.rank === M.FRONT; }), back = party.filter(function (m) { return m.rank !== M.FRONT; });
    var foeCols = foes.length > PLAN_COLS_FOES ? 2 : 1, perCol = Math.ceil(foes.length / foeCols);
    var rows = Math.max(front.length, back.length, perCol, 1), H = PLAN_TOP + rows * PLAN_ROW;
    var pos = {}, out = [];
    function column(list, x, key) { var top = PLAN_TOP + (rows - list.length) * PLAN_ROW / 2 + PLAN_ROW / 2; list.forEach(function (m, i) { pos[key(m)] = { x: x, y: top + i * PLAN_ROW }; }); }
    column(front, PLAN_X.front, function (m) { return m.who; }); column(back, PLAN_X.back, function (m) { return m.who; });
    for (var k = 0; k < foeCols; k++) column(foes.slice(k * perCol, (k + 1) * perCol), far ? (k ? PLAN_X.far2 : PLAN_X.far) - (foeCols > 1 && !k ? 52 : 0) : (k ? PLAN_X.foe2 : PLAN_X.foe), function (f) { return f.key; });
    out.push('<svg class="plan" viewBox="0 0 ' + PLAN_W + " " + H + '" role="img" aria-label="Plan de la bataille">');
    out.push('<defs>' + ["ours", "theirs", "spell"].map(function (k2) { return '<marker id="pl-' + k2 + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" class="pl-' + k2 + '-f"/></marker>'; }).join("") + "</defs>");
    // The ground: our side, the gap, their side.
    out.push('<text x="' + (PLAN_X.back - 18) + '" y="16" class="pl-h">Ton groupe</text>');
    out.push('<text x="' + (PLAN_W - 8) + '" y="16" class="pl-h" text-anchor="end">Passe ' + (c.round + 1) + "</text>");
    out.push('<line x1="' + (PLAN_X.front + 34) + '" y1="' + PLAN_TOP + '" x2="' + (PLAN_X.front + 34) + '" y2="' + (H - 6) + '" class="pl-line"/>');
    if (far) out.push('<text x="' + ((PLAN_X.front + PLAN_X.far) / 2 - 6) + '" y="' + (H / 2 + 14) + '" class="pl-far" text-anchor="middle">encore loin</text>');
    // The blows of the last exchange, under the tokens.
    var seen = {};
    (c.hits || []).forEach(function (b) {
      var a = pos[b.from], z = pos[b.to]; if (!a || !z) return;
      var ours = party.some(function (m) { return m.who === b.from; });
      var kind = b.kind === "sort" ? "spell" : ours ? "ours" : "theirs";
      var pair = b.from + ">" + b.to, n = seen[pair] = (seen[pair] || 0) + 1;
      var dx = z.x - a.x, dy = z.y - a.y, L = Math.sqrt(dx * dx + dy * dy) || 1, ux = dx / L, uy = dy / L;
      var x1 = a.x + ux * (PLAN_R + 2), y1 = a.y + uy * (PLAN_R + 2), x2 = z.x - ux * (PLAN_R + 4), y2 = z.y - uy * (PLAN_R + 4);
      var bend = 12 * n, mx = (x1 + x2) / 2 - uy * bend, my = (y1 + y2) / 2 + ux * bend;
      out.push('<path d="M' + x1.toFixed(1) + " " + y1.toFixed(1) + " Q" + mx.toFixed(1) + " " + my.toFixed(1) + " " + x2.toFixed(1) + " " + y2.toFixed(1) + '" class="pl-blow pl-' + kind + (b.dmg ? "" : " miss") + '" marker-end="url(#pl-' + kind + ')"/>');
      out.push('<text x="' + mx.toFixed(1) + '" y="' + (my + 3).toFixed(1) + '" class="pl-dmg pl-' + kind + '-t" text-anchor="middle">' + (b.dmg ? "−" + b.dmg : "raté") + "</text>");
    });
    function ring(x, y, frac, cls) {
      var C = 2 * Math.PI * PLAN_R, f = Math.max(0, Math.min(1, frac));
      return '<circle cx="' + x + '" cy="' + y + '" r="' + PLAN_R + '" class="pl-ring"/><circle cx="' + x + '" cy="' + y + '" r="' + PLAN_R + '" class="pl-pv ' + cls + '" stroke-dasharray="' + (C * f).toFixed(1) + " " + C.toFixed(1) + '" transform="rotate(-90 ' + x + " " + y + ')"/>';
    }
    function label(x, y, t) { t = String(t); if (t.length > 13) t = t.slice(0, 12) + "…"; return '<text x="' + x + '" y="' + (y + PLAN_R + 11) + '" class="pl-name" text-anchor="middle">' + esc(t) + "</text>"; }
    party.forEach(function (m) {
      var p = pos[m.who], down = m.pv <= 0, pick = A.planPick === m.who;
      var face = m.who === "hero" ? heroFace(st, s) : portraitOf(st, m.who, s);
      face = face.replace(/^<svg class="portrait" viewBox="0 0 64 64" width="\d+" height="\d+"/, '<svg x="' + (p.x - 15) + '" y="' + (p.y - 15) + '" viewBox="0 0 64 64" width="30" height="30"');
      out.push('<g class="pl-tok' + (down ? " down" : "") + (m.hidden ? " hidden" : "") + (pick ? " pick" : "") + '" data-k="' + esc(m.who) + '">' + ring(p.x, p.y, m.pv / m.pvMax, "good") + face +
        (down ? '<path d="M' + (p.x - 10) + " " + (p.y - 10) + " L" + (p.x + 10) + " " + (p.y + 10) + " M" + (p.x + 10) + " " + (p.y - 10) + " L" + (p.x - 10) + " " + (p.y + 10) + '" class="pl-x"/>' : "") +
        label(p.x, p.y, m.who === "hero" ? "toi" : m.name) + "</g>");
    });
    foes.forEach(function (f) {
      var p = pos[f.key], pick = A.planPick === f.key;
      var mark = f.asleep ? "z" : f.trapped ? "⌗" : f.open ? "!" : "";
      out.push('<g class="pl-tok foe' + (f.down ? " down" : "") + (pick ? " pick" : "") + '" data-k="' + esc(f.key) + '">' + ring(p.x, p.y, f.pv / f.pvMax, "bad") +
        '<circle cx="' + p.x + '" cy="' + p.y + '" r="15" class="pl-foe"/><text x="' + p.x + '" y="' + (p.y + 5) + '" class="pl-ini" text-anchor="middle">' + esc((f.name || "?").charAt(0).toUpperCase()) + "</text>" +
        (mark ? '<text x="' + (p.x + 14) + '" y="' + (p.y - 12) + '" class="pl-mark" text-anchor="middle">' + mark + "</text>" : "") +
        (f.ranged ? '<text x="' + (p.x - 15) + '" y="' + (p.y - 12) + '" class="pl-mark" text-anchor="middle">➶</text>' : "") +
        (f.down ? '<path d="M' + (p.x - 10) + " " + (p.y - 10) + " L" + (p.x + 10) + " " + (p.y + 10) + " M" + (p.x + 10) + " " + (p.y - 10) + " L" + (p.x - 10) + " " + (p.y + 10) + '" class="pl-x"/>' : "") +
        label(p.x, p.y, f.name) + "</g>");
    });
    out.push("</svg>");
    var box = h("div", { class: "plan-box", html: out.join("") });
    box.firstChild.addEventListener("click", function (e) {
      var g = e.target.closest ? e.target.closest("[data-k]") : null;
      A.planPick = g && A.planPick !== g.getAttribute("data-k") ? g.getAttribute("data-k") : null; render();
    });
    // What the tapped token is.
    var info = null;
    if (A.planPick) {
      var m = party.filter(function (x) { return x.who === A.planPick; })[0], f = foes.filter(function (x) { return x.key === A.planPick; })[0];
      if (m) info = (m.who === "hero" ? s.name + " (toi)" : m.name) + " · " + Math.max(0, m.pv) + "/" + m.pvMax + " PV · " + (m.rank === M.FRONT ? "devant" : "derrière") + (m.hidden ? " · caché" : "") + (m.protect ? " · te protège" : "") + (m.pv <= 0 ? " · à terre" : "");
      else if (f) info = f.name + " · " + Math.max(0, f.pv) + "/" + f.pvMax + " PV" + (f.ranged ? " · tire de loin" : "") + (f.flank ? " · contourne les rangs" : "") + (f.asleep ? " · endormi" : "") + (f.trapped ? " · pris au piège" : "") + (f.open ? " · découvert" : "") + (f.down ? " · à terre" : "");
    }
    box.appendChild(h("div", { class: "small plan-info" }, info || "Touche un combattant pour le détail. Flèches : les coups de la dernière passe."));
    return box;
  }
  function renderFight(s) {
    var c = s.combat, st = A.game.story;
    var box = h("div", { class: "fight" }, pref("battlePlan") ? battlePlan(st, s) : null, h("span", { class: "label" }, "Adversaires · passe " + (c.round + 1) + (c.range === "loin" && c.round === 0 ? " · encore loin" : "")));
    c.foes.forEach(function (f) {
      var tags = [f.down ? "à terre" : null, f.asleep ? "endormi" : null, f.trapped ? "pris au piège" : null, f.open ? "découvert" : null].filter(Boolean).join(" · ");
      box.appendChild(h("div", { class: "foe" + (f.down ? " down" : "") }, h("span", null, f.name, tags ? h("span", { class: "small muted" }, " · " + tags) : null), h("span", { class: "bar pv" }, h("i", { style: "width:" + Math.max(0, Math.round(100 * f.pv / f.pvMax)) + "%" })), h("span", { class: "small mono pvnum" }, Math.max(0, f.pv) + "/" + f.pvMax)));
    });
    var party = M.partyView(st, s);
    if (party.length > 1 || c.hidden || c.line) {
      box.appendChild(h("span", { class: "label", style: "margin-top:10px" }, "Ton groupe"));
      [M.FRONT, null].forEach(function (rank) {
        party.filter(function (m) { return rank ? m.rank === rank : m.rank !== M.FRONT; }).forEach(function (m) {
          var tags = [m.rank === M.FRONT ? "devant" : "derrière", m.hidden ? "caché" : null, m.protect ? "te protège" : null, m.pv <= 0 ? "à terre" : null, m.who === "hero" && c.line ? "tient la ligne" : null].filter(Boolean).join(" · ");
          box.appendChild(h("div", { class: "foe ally" + (m.pv <= 0 ? " down" : "") }, h("span", null, m.who === "hero" ? m.name + " (toi)" : m.name, h("span", { class: "small muted" }, " · " + tags)),
            h("span", { class: "bar good" }, h("i", { style: "width:" + Math.max(0, Math.round(100 * m.pv / m.pvMax)) + "%" })), h("span", { class: "small mono pvnum" }, Math.max(0, m.pv) + "/" + m.pvMax)));
        });
      });
    }
    return box;
  }
  var GROUPS = { route: "Prendre la route", shop: "Acheter et vendre", fight: "Que fais-tu ?", order: "Ce tour, tes compagnons · un ordre gratuit chacun ; sans ordre, ils agissent à leur guise", lead: "Qui mène ? · changer de héros ne coûte rien" };
  // The « coup de pouce » (option for young readers, Clément, 12/11): NUDGES_PER_ACT per act, kept in the game.
  var NUDGES_PER_ACT = 2;
  function nudgesLeft(G) { var used = (G.s.nudges || {})[G.s.lastAct || "_"] || 0; return Math.max(0, NUDGES_PER_ACT - used); }
  function askNudge(G) {
    if (nudgesLeft(G) <= 0) return;
    var n = M.nudgeOf(G.story, G.s), k = G.s.lastAct || "_";
    G.s.nudges = G.s.nudges || {}; G.s.nudges[k] = (G.s.nudges[k] || 0) + 1;
    A.nudge = { at: G.s.node + "#" + G.s.turn, text: n.text, choices: n.choices };
    persist(); render();
    var el = document.querySelector(".nudge-note"); if (el) el.scrollIntoView({ block: "center", behavior: "smooth" });
  }
  function renderChoices(v) {
    var box = h("div", { class: "choices" }), lastGroup = null;
    var nd = A.nudge && A.game && A.nudge.at === A.game.s.node + "#" + A.game.s.turn ? A.nudge : null;
    if (nd) box.appendChild(h("div", { class: "notice soft nudge-note", role: "status" }, "💡 " + nd.text));
    v.choices.forEach(function (c) {
      if (c.restart) return;
      var g = c.group || null;
      if (g !== lastGroup && GROUPS[g]) box.appendChild(h("div", { class: "label group-label" }, GROUPS[g]));
      lastGroup = g;
      var meta = null;
      if (c.test) meta = h("span", { class: "meta test", title: "Chance de réussite" }, (c.who ? M.nameOf(A.game.story, c.who) + " · " : "") + (c.test.label || M.DOMAINS[c.test.dom]) + " · " + c.chance + " %");
      else if (c.decidedBy) meta = h("span", { class: "meta" }, "choisi par " + c.decidedBy);
      else if (c.monde) meta = h("span", { class: "meta" }, "choix du monde · le premier décide pour tous");
      else if (c.role && A.game && A.game.multi) meta = h("span", { class: "meta" }, "un seul joueur peut le prendre");
      else if (c.hint) meta = h("span", { class: "meta" }, c.hint);
      else if (c.exit) meta = h("span", { class: "meta" }, "fin de l'acte");
      else if (c.big) meta = h("span", { class: "meta" }, "choix lourd");
      box.appendChild(h("button", { class: "choice" + (c.sys ? " sys" : "") + (c.big ? " big" : "") + (g === "order" ? " order" : ""), disabled: !c.ok, onclick: function () { pick(c); } },
        h("span", null, nd && nd.choices.indexOf(c.label) >= 0 ? h("span", { class: "nudge-star", "aria-label": "piste nouvelle" }, "✦ ") : null, c.label, c.goes && c.label.toLowerCase().indexOf(c.goes.toLowerCase()) < 0 ? h("span", { class: "goes" }, " → " + c.goes) : null, c.note ? h("span", { class: "note" }, " · " + c.note) : null), meta, !c.ok && c.why ? h("span", { class: "why" }, c.why) : null));
    });
    return box;
  }
  function renderEnding(st, s, v) {
    var qs = M.questsOf(st), done = qs.filter(function (q) { return M.questDone(s, q); });
    return h("div", { class: "ending" }, h("h3", null, "Fin de la lecture"),
      h("div", { class: "small muted" }, s.name + ", " + (M.ARCHS[s.arch] || {}).label + " de niveau " + M.level(s) + (qs.length ? " · " + done.length + " quêtes sur " + qs.length : "") + " · " + M.timeLabel(s)),
      A.game && !A.game.multi ? endingNote(st, s) : null,
      h("div", { class: "row" },
        A.game && A.game.multi ? null : h("button", { class: "btn primary", onclick: function () { newGame(st.id); } }, "Relire avec un autre héros"),
        A.game && !A.game.multi ? h("button", { class: "btn", onclick: function () { openRecit(); } }, "📖 Mon aventure") : null,
        h("button", { class: "btn", onclick: function () { A.carnet = true; A.carnetTab = "quetes"; render(); } }, "Ce que tu as fait"),
        h("button", { class: "btn ghost", onclick: leaveGame }, "Bibliothèque")));
  }

  // ------------------------------------------------------------------ several players (rules in src/multi.js)
  // Two ways (Clément, 11/11): on one device, players take turns behind a hidden screen ("Joueur Léo"); in a shared
  // room, each player on his own device, the room kept in the db (salles/<id>, one document per seat, one per world
  // choice). In both, the heroes are shared out, everybody waits at the rendezvous, and the first to make a world
  // choice decides for all.
  var MU = window.Multi;
  var MULTI_UNDO = 5;                       // states kept for "Choix précédent" in a game with several players
  var MULTI_LOG = 80;                       // journal entries kept per player
  var LEASE_MS = 20000;                     // the sync lease on a room (one device merges at a time)
  var CLAIM_MS = 5000;                      // the lease on a world choice (the first to claim it decides)
  var CLAIM_WAIT_MS = 1500;                 // a busy claim: read again after this
  function deviceId() { var d = lsGet("appareil"); if (!d) { d = uid(); lsSet("appareil", d); } return d; }
  function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function safeKey(k) { return String(k).replace(/[^A-Za-z0-9_-]/g, "_"); }
  function heroLabel(st, hid) {
    var H = st.heroes[hid];
    return H.player ? "Le héros que l'on crée (" + M.nameOf(st, hid) + ")" : (H.name || M.nameOf(st, hid)) + " · " + ((M.ARCHS[H.arch] || {}).label || "");
  }
  function playerHero(st) { return Object.keys(st.heroes || {}).filter(function (k) { return st.heroes[k].player; })[0] || null; }

  // ---- setup
  function multiSetup(id) {
    loadStory(id).then(function (st) {
      var S = A.msetup = { story: st, mode: "local", n: minPlayers(st), names: [] };
      for (var i = 0; i < 6; i++) S.names.push((A.profiles[i] && A.profiles[i].name) || "Joueur " + (i + 1));
      redeal(S);
      A.screen = "msetup"; render(); window.scrollTo(0, 0);
    }).catch(function (e) { flash(e.message, true); });
  }
  function redeal(S) { S.deal = {}; MU.deal(S.story, S.n).forEach(function (hs, i) { hs.forEach(function (x) { S.deal[x] = i; }); }); }
  function minPlayers(st) { return Math.max(2, (st.multi && st.multi.min) || 2); }
  function maxPlayers(st) { var m = (st.multi && st.multi.max) || 6; return st.heroes ? Math.min(m, Object.keys(st.heroes).length) : m; }
  function renderMultiSetup() {
    var S = A.msetup, st = S.story, shared = Store.mode === "db";
    app.appendChild(topBar([h("button", { class: "btn ghost sm", onclick: function () { A.msetup = null; A.screen = "home"; render(); } }, "← Bibliothèque"), h("span", { class: "brand grow" }, st.title)]));
    var w = h("main", { class: "wrap read create" });
    w.appendChild(h("div", null, h("div", { class: "label" }, "Jouer à plusieurs"), h("h1", null, st.title)));
    w.appendChild(h("p", { class: "muted" }, st.heroes
      ? "Les héros se partagent entre les joueurs. Chacun avance de son côté ; aux charnières (le carrefour des chapitres, le début d'un acte) on attend les autres, et ce que chacun a fait passe dans l'histoire des autres. Un choix du monde est fixé par le premier qui le fait."
      : "Chacun crée son héros, dans le même monde. Chacun avance de son côté ; au début de chaque acte et aux charnières, on attend les autres. Un choix du monde est fixé par le premier qui le fait."));
    var modes = h("div", { class: "archs" });
    [["local", "Sur cet appareil", "On se passe l'appareil. Un écran caché sépare les tours : personne ne voit les choix des autres."],
     ["salle", "Salle commune", "Chacun sur son appareil, connecté à claude.ai. Les autres doivent être invités sur cette page par e-mail, avec le droit Éditeur."]].forEach(function (m) {
      var off = m[0] === "salle" && !shared;
      modes.appendChild(h("button", { class: "arch" + (S.mode === m[0] ? " on" : ""), "aria-pressed": S.mode === m[0] ? "true" : "false", disabled: off, onclick: function () { S.mode = m[0]; render(); } },
        h("b", null, m[1]), h("span", { class: "small muted" }, off ? "Indisponible ici : la sauvegarde partagée ne répond pas (page ouverte sans être connecté)." : m[2])));
    });
    w.appendChild(h("div", { class: "stack" }, h("span", { class: "label" }, "Comment ?"), modes));
    var counts = h("div", { class: "row" });
    for (var n = minPlayers(st); n <= maxPlayers(st); n++) (function (n) {
      counts.appendChild(h("button", { class: "btn sm" + (S.n === n ? " primary" : ""), "aria-pressed": S.n === n ? "true" : "false", onclick: function () { S.n = n; redeal(S); render(); } }, String(n)));
    })(n);
    w.appendChild(h("div", { class: "stack" }, h("span", { class: "label" }, "Combien de joueurs ?"), counts));
    var names = h("div", { class: "stack" });
    for (var i = 0; i < S.n; i++) (function (i) {
      names.appendChild(h("input", { value: S.names[i], maxlength: 24, "aria-label": "Nom du joueur " + (i + 1), oninput: function (e) { S.names[i] = e.target.value; document.querySelectorAll("option[data-player='" + i + "']").forEach(function (o) { o.textContent = e.target.value || "Joueur " + (i + 1); }); } }));
    })(i);
    w.appendChild(h("div", { class: "stack" }, h("span", { class: "label" }, S.mode === "salle" ? "Les places de la salle" : "Les joueurs"), names));
    var empty = [];
    if (st.heroes) {
      var box = h("div", { class: "stack" });
      Object.keys(st.heroes).forEach(function (hid) {
        var sel = h("select", { "aria-label": "Qui joue " + M.nameOf(st, hid), onchange: function (e) { S.deal[hid] = +e.target.value; render(); } });
        for (var i = 0; i < S.n; i++) sel.appendChild(h("option", { value: i, "data-player": i, selected: S.deal[hid] === i }, S.names[i] || "Joueur " + (i + 1)));
        box.appendChild(h("div", { class: "row" }, h("span", { class: "grow" }, heroLabel(st, hid)), sel));
      });
      w.appendChild(h("div", { class: "stack" }, h("span", { class: "label" }, "Qui joue qui ?"), box));
      for (var j = 0; j < S.n; j++) if (!Object.keys(S.deal).some(function (k) { return S.deal[k] === j; })) empty.push(S.names[j] || "Joueur " + (j + 1));
    }
    var tg = h("label", { class: "toggle" }, h("input", { type: "checkbox", checked: S.toutJouer !== false, onchange: function (e) { S.toutJouer = e.target.checked; } }),
      h("span", null, h("b", null, "Tout jouer"), h("br"), h("span", { class: "small muted" }, "Un acte ne se termine qu'une fois toutes ses quêtes faites.")));
    w.appendChild(tg);
    w.appendChild(h("div", { class: "row" }, h("button", { class: "btn primary", disabled: empty.length > 0, onclick: multiGo }, "Continuer"),
      empty.length ? h("span", { class: "small muted" }, empty.join(", ") + (empty.length > 1 ? " n'ont" : " n'a") + " aucun héros.") : null));
    app.appendChild(w);
  }
  function multiGo() {
    var S = A.msetup, st = S.story;
    S.seats = [];
    for (var i = 0; i < S.n; i++) S.seats.push({ id: "j" + (i + 1), name: (S.names[i] || "").trim() || "Joueur " + (i + 1), color: COLORS[i % COLORS.length],
      heroes: st.heroes ? Object.keys(st.heroes).filter(function (x) { return S.deal[x] === i; }) : [] });
    var title = "À plusieurs · " + st.title;
    if (st.heroes) {
      var maker = playerHero(st), who = maker ? S.seats.filter(function (p) { return p.heroes.indexOf(maker) >= 0; })[0] : null;
      openCreate(st, { title: title, who: who ? who.name : null, next: S.mode === "salle" ? "Ouvrir la salle" : "Commencer la partie", setup: S });
      return;
    }
    if (S.mode === "salle") { openSalleNew(S, null); return; }
    S.states = [];
    openCreate(st, { title: title, who: S.seats[0].name, next: S.seats.length > 1 ? "Au héros suivant" : "Commencer la partie", setup: S, idx: 0 });
  }
  function openCreate(st, multi) {
    A.create = { story: st, name: "", arch: "", past: (st.past || []).map(function () { return -1; }), toutJouer: !multi.setup || multi.setup.toutJouer !== false, multi: multi };
    A.screen = "create"; render(); window.scrollTo(0, 0);
  }
  // Intent: created(Creation, State) -> () = the next hero to make, or the game
  function multiCreated(C, s) {
    var S = C.multi.setup, st = C.story;
    if (C.multi.seat) { seatCreated(C.multi.seat, s); return; }
    if (st.heroes) { if (S.mode === "salle") openSalleNew(S, s); else startLocal(S, s); return; }
    S.states[C.multi.idx] = s;
    var i = C.multi.idx + 1;
    if (i < S.seats.length) { openCreate(st, { title: C.multi.title, who: S.seats[i].name, next: i + 1 < S.seats.length ? "Au héros suivant" : "Commencer la partie", setup: S, idx: i }); return; }
    startLocal(S, null);
  }

  // ---- one device
  function startLocal(S, shared) {
    var st = S.story;
    var g = MU.create(st, S.seats.map(function (p, i) { return { id: p.id, name: p.name, color: p.color, heroes: p.heroes, s: st.heroes ? null : S.states[i] }; }), shared);
    MU.refreshWaits(st, g);
    var doc = { id: uid(), kind: "local", story: st.id, storyTitle: st.title, storyVersion: st.version || 1, created: Date.now() };
    A.multi = { kind: "local", doc: doc, story: st, g: g, cur: g.players[0].id, undo: {}, logs: {}, note: "" };
    g.players.forEach(function (p) { A.multi.undo[p.id] = []; A.multi.logs[p.id] = []; });
    A.create = null; A.msetup = null;
    showCache(g.players[0].id);
    multiPersist();
  }
  function openLocal(id) {
    A.busy = true; render();
    Store.get("multis", id).then(function (d) {
      if (!d) throw new Error("Partie introuvable.");
      return loadStory(d.story).then(function (st) {
        d.id = id;
        var X = A.multi = { kind: "local", doc: d, story: st, g: JSON.parse(d.game), cur: d.cur, undo: d.undo || {}, logs: d.logs || {}, note: "" };
        X.g.players.forEach(function (p) { X.undo[p.id] = X.undo[p.id] || []; X.logs[p.id] = X.logs[p.id] || []; });
        MU.refreshWaits(st, X.g);
        A.busy = false;
        var p = MU.player(X.g, X.cur);
        showCache(p && !p.wait ? p.id : ((MU.nextPlayer(X.g, X.cur) || {}).id || X.cur));
      });
    }).catch(function (e) { A.busy = false; flash(e.message, true); });
  }
  function showCache(pid) { stopSpeaking(); A.multi.cur = pid; A.game = null; A.carnet = null; A.screen = "mcache"; render(); window.scrollTo(0, 0); }
  // Intent: enter(PlayerId) -> () = this player's turn: the reading screen shows his state
  function enterTurn(pid) {
    var X = A.multi, p = MU.player(X.g, pid);
    if (X.kind === "local") X.cur = pid;
    A.game = { doc: X.doc, story: X.story, s: p.s, undo: X.kind === "local" ? X.undo[pid] : X.undo, log: X.kind === "local" ? X.logs[pid] : X.log, multi: true, pid: pid };
    A.notice = ""; A.screen = "game"; render(); window.scrollTo(0, 0);
  }
  function statusText(p) {
    if (!p.s) return "pas encore entré";
    if (!p.wait) return "joue";
    if (p.wait.kind === MU.WAIT.END) return "a fini son histoire";
    if (p.wait.kind === MU.WAIT.RDV) return "attend à la charnière";
    return "attend les autres";
  }
  function board() {
    var X = A.multi, st = X.story;
    return h("div", { class: "board" }, X.g.players.map(function (p) {
      var who = p.heroes && p.heroes.length ? p.heroes.map(function (x) { return p.s ? M.heroSheet(p.s, x).name : M.nameOf(st, x); }).join(", ") : (p.s ? p.s.name + " · " + ((M.ARCHS[p.s.arch] || {}).label || "") : "");
      return h("div", { class: "board-line" }, h("span", { class: "avatar", style: "background:" + (p.color || COLORS[0]) }, p.name.slice(0, 1).toUpperCase()),
        h("span", { class: "grow" }, h("b", null, p.name), who ? h("span", { class: "small muted" }, " · " + who) : null),
        h("span", { class: "small" + (p.wait ? " muted" : "") }, statusText(p)));
    }));
  }
  function renderMultiCache() {
    var X = A.multi, g = X.g, p = MU.player(g, X.cur), playable = g.players.some(function (x) { return !x.wait; });
    app.appendChild(topBar([h("button", { class: "btn ghost sm", onclick: leaveGame }, "← Bibliothèque"), h("span", { class: "brand grow" }, X.story.title)]));
    var w = h("main", { class: "wrap read cache" });
    if (X.note) w.appendChild(h("div", { class: "notice" }, X.note));
    if (playable && p && !p.wait) {
      w.appendChild(h("div", { class: "cache-card", style: "border-color:" + (p.color || COLORS[0]) },
        h("div", { class: "label" }, "Au tour de"), h("h1", null, p.name),
        h("p", { class: "small muted" }, "Les autres, détournez les yeux."),
        h("button", { class: "btn primary big", onclick: function () { X.note = ""; enterTurn(p.id); } }, /^Joueur /.test(p.name) ? p.name : "Joueur " + p.name)));
    } else {
      w.appendChild(h("div", { class: "cache-card" }, h("h1", null, g.players.every(function (x) { return x.wait && x.wait.kind === MU.WAIT.END; }) ? "Toutes les histoires sont finies" : "Personne ne peut avancer"),
        h("p", { class: "small muted" }, "Chacun peut relire la fin de son histoire."),
        h("div", { class: "row" }, g.players.map(function (x) { return h("button", { class: "btn", onclick: function () { enterTurn(x.id); } }, "Relire : " + x.name); }))));
    }
    w.appendChild(board());
    app.appendChild(w);
  }
  // Intent: pass() -> () ! syncs when everybody waits, then hides the screen for the next player
  function passTurn() {
    var X = A.multi, g = X.g;
    MU.refreshWaits(X.story, g);
    if (MU.allWaiting(g)) {
      var r = MU.sync(X.story, g);
      Object.keys(X.undo).forEach(function (k) { X.undo[k].length = 0; });
      X.note = syncNote(r);
    }
    var nx = MU.nextPlayer(g, X.cur);
    showCache(nx ? nx.id : X.cur);
    multiPersist();
  }
  function syncNote(r) {
    if (r.over) return "Toutes les histoires sont finies.";
    if (r.stuck) return "Tout le monde attend, mais personne ne peut avancer : l'histoire est bloquée ici (à signaler à l'auteur).";
    return "Tout le monde s'est retrouvé. Ce que chacun a fait compte maintenant dans l'histoire des autres" + (r.released.length ? ", et l'histoire continue." : ".");
  }
  function multiBadge() {
    var X = A.multi, p = MU.player(X.g, A.game.pid);
    return h("span", { class: "pill", style: "border-color:" + (p.color || COLORS[0]) }, h("span", { class: "dot", style: "background:" + (p.color || COLORS[0]) }), p.name);
  }
  function multiView() { return MU.view(A.multi.story, A.multi.g, A.game.pid); }
  function renderWait(v) {
    var X = A.multi, g = X.g, box = h("div", { class: "wait" });
    box.appendChild(h("h3", null, v.wait.kind === MU.WAIT.END ? "Fin de ton histoire" : "On attend les autres"));
    box.appendChild(h("p", null, v.wait.text));
    if (v.wait.missing && v.wait.missing.length) box.appendChild(h("p", { class: "small muted" }, "Pas encore arrivé" + (v.wait.missing.length > 1 ? "s" : "") + " : " + v.wait.missing.join(", ") + "."));
    box.appendChild(board());
    if (X.kind === "local") box.appendChild(h("div", { class: "row" }, h("button", { class: "btn primary", onclick: passTurn }, g.players.every(function (x) { return x.wait && x.wait.kind === MU.WAIT.END; }) ? "Terminer la partie" : MU.allWaiting(g) ? "Tout le monde est là : continuer" : "Passer la main")));
    else box.appendChild(h("p", { class: "small muted" }, "La partie reprend d'elle-même dès que les autres arrivent. Tu peux fermer la page et revenir plus tard."));
    return box;
  }
  function multiPick(c) {
    var X = A.multi, G = A.game, g = X.g, p = MU.player(g, G.pid);
    stopSpeaking();
    var go = function () {
      var before = JSON.stringify(p.s);
      try { MU.choose(X.story, g, p.id, c); }
      catch (e) { p.s = JSON.parse(before); G.s = p.s; MU.refreshWaits(X.story, g); A.notice = "Ce choix a buté sur une erreur de l'histoire : " + e.message; render(); return; }
      if (c.monde || c.role) { G.undo.length = 0; A.notice = c.monde && !c.decidedBy ? "Choix du monde : tu as tranché pour tout le monde." : ""; }
      else { G.undo.push(before); if (G.undo.length > MULTI_UNDO) G.undo.shift(); A.notice = ""; }
      logStep(); multiPersist(); render();
      var top = document.querySelector(".page"); if (top) top.scrollIntoView({ block: "start", behavior: "smooth" });
      if (X.kind === "salle") trySync();
    };
    var dk = MU.decisionKey(c);
    if (X.kind === "salle" && dk && !g.decisions[dk]) {
      claimDecision(c).then(function (won) {
        if (won) { go(); return; }
        var d = g.decisions[dk]; A.notice = d ? d.by + (c.role ? " l'a pris juste avant toi." : " a tranché juste avant toi : « " + d.label + " ».") : A.notice; render();
      });
      return;
    }
    go();
  }
  function multiUndo() {
    var X = A.multi, G = A.game, p = MU.player(X.g, G.pid);
    if (!G.undo.length || (X.kind === "salle" && p.wait)) return;
    stopSpeaking();
    p.s = JSON.parse(G.undo.pop()); G.s = p.s; G.s.events = [{ text: "Tu reviens au choix précédent.", cls: "" }];
    MU.refreshWaits(X.story, X.g);
    multiPersist(); render();
  }
  function multiPersist() {
    var X = A.multi;
    if (X.kind === "salle") { salleSave(); return; }
    var d = X.doc;
    Object.keys(X.logs).forEach(function (k) { if (X.logs[k].length > MULTI_LOG) X.logs[k].splice(0, X.logs[k].length - MULTI_LOG); });
    d.game = JSON.stringify(X.g); d.undo = X.undo; d.logs = X.logs; d.cur = X.cur; d.updated = Date.now();
    d.players = X.g.players.map(function (p) { return p.name; });
    Object.keys(X.undo).forEach(function (k) { while (JSON.stringify(d).length > DOC_MAX_CHARS && X.undo[k].length) X.undo[k].shift(); });
    Object.keys(X.logs).forEach(function (k) { while (JSON.stringify(d).length > DOC_MAX_CHARS && X.logs[k].length > 10) X.logs[k].splice(0, 10); });
    var meta = { id: d.id, kind: d.kind, story: d.story, storyTitle: d.storyTitle, players: d.players, updated: d.updated };
    A.multis = (A.multis || []).filter(function (m) { return m.id !== d.id; }).concat([meta]);
    Store.put("multis", d.id, d).catch(function (e) { A.notice = "La sauvegarde a échoué (" + ((e && e.code) || "erreur") + ") ; la partie continue dans cette page."; });
  }
  function leaveGame() {
    stopSpeaking();
    A.recap = false;
    if (A.game && A.game.ephemeral) { A.screen = A.game.back || "home"; A.game = null; A.carnet = null; render(); return; }
    if (A.multi && A.multi.unsub) A.multi.unsub.forEach(function (u) { try { u(); } catch (e) { /* already closed */ } });
    A.multi = null; A.game = null; A.carnet = null; A.screen = "home"; refresh().then(render).then(function () { if (Sync.on() && Sync.dirty) Sync.run(true); });
  }
  function renderMultiList() {
    var sec = h("section", { class: "section" }, h("h2", null, "Parties à plusieurs"));
    var list = A.multis || [];
    if (!list.length) sec.appendChild(h("div", { class: "notice" }, "Aucune pour l'instant. Sur un livre, « À plusieurs » en lance une : sur cet appareil, ou dans une salle commune."));
    list.forEach(function (m) {
      var names = m.kind === "salle" ? (m.seats || []).map(function (x) { return x.name; }) : (m.players || []);
      var del = A.confirmDel === "m:" + m.id
        ? h("span", { class: "confirm small" }, "Effacer ?", h("button", { class: "btn sm danger", onclick: function () { Store.del(m.kind === "salle" ? "salles" : "multis", m.id).then(refresh).then(function () { A.confirmDel = null; render(); }); } }, "Oui"), h("button", { class: "btn sm", onclick: function () { A.confirmDel = null; render(); } }, "Non"))
        : h("button", { class: "btn sm ghost", onclick: function () { A.confirmDel = "m:" + m.id; render(); } }, "Effacer");
      sec.appendChild(h("div", { class: "save-line" },
        h("div", { class: "grow" }, h("b", null, m.storyTitle + " · " + (m.kind === "salle" ? "salle commune" : "sur cet appareil")), h("div", { class: "small muted" }, names.join(", ") + " · " + when(m.updated))),
        h("button", { class: "btn primary sm", onclick: function () { if (m.kind === "salle") openSalle(m.id); else openLocal(m.id); } }, m.kind === "salle" ? "Entrer" : "Reprendre"), del));
    });
    return sec;
  }

  // ---- shared room, several devices
  function sallePath(gid) { return "salles/" + gid; }
  function seatDoc(p, log) {
    return { id: p.id, name: p.name, color: p.color || "", heroes: p.heroes || [], s: p.s ? JSON.stringify(p.s) : null, wait: p.wait || null, since: p.since || 0,
      round: p.round || 0, actOk: p.actOk || 0, owner: p.owner || null, log: log || [], updated: Date.now() };
  }
  function openSalleNew(S, shared) {
    var st = S.story, gid = uid();
    var g = MU.create(st, S.seats.map(function (p) { return { id: p.id, name: p.name, color: p.color, heroes: p.heroes, s: null }; }), shared);
    MU.refreshWaits(st, g);
    var salle = { kind: "salle", story: st.id, storyTitle: st.title, storyVersion: st.version || 1, created: Date.now(), updated: Date.now(),
      seats: S.seats, base: g.base ? JSON.stringify(g.base) : null, released: {}, round: 0, host: deviceId(), toutJouer: S.toutJouer !== false };
    A.busy = true; A.create = null; A.msetup = null; render();
    Promise.all(g.players.map(function (p) { return Store.put(sallePath(gid) + "/joueurs", p.id, seatDoc(p)); }))
      .then(function () { return Store.put("salles", gid, salle); })
      .then(function () { A.busy = false; openSalle(gid); })
      .catch(function (e) { A.busy = false; flash("La salle n'a pas pu être créée (" + ((e && e.code) || "erreur") + ").", true); A.screen = "home"; render(); });
  }
  function openSalle(gid) {
    A.busy = true; render();
    Store.get("salles", gid).then(function (sd) {
      if (!sd) throw new Error("Salle introuvable.");
      return loadStory(sd.story).then(function (st) {
        sd.id = gid;
        return Store.list(sallePath(gid) + "/joueurs").then(function (seats) {
          var X = A.multi = { kind: "salle", gid: gid, doc: sd, story: st, seats: {}, monde: {}, me: lsGet("salle:" + gid), mine: null, undo: [], log: [], unsub: [], g: null, note: "" };
          seats.forEach(function (x) { X.seats[x.id] = x; });
          var mine = X.me && X.seats[X.me];
          if (mine && mine.log) X.log = mine.log;
          rebuild();
          A.busy = false; A.screen = "salle"; render();
          if (Store.db) {
            var err = function () { X.offline = true; render(); };
            X.unsub.push(Store.db.doc(sallePath(gid)).onSnapshot(function (snap) { if (snap.exists) { X.doc = thaw(snap.data()); X.doc.id = gid; onRemote(); } }, err));
            X.unsub.push(Store.db.collection(sallePath(gid) + "/joueurs").onSnapshot(function (q) { q.docs.forEach(function (d) { X.seats[d.id] = thaw(d.data()); X.seats[d.id].id = d.id; }); onRemote(); }, err));
            X.unsub.push(Store.db.collection(sallePath(gid) + "/monde").onSnapshot(function (q) { q.docs.forEach(function (d) { var x = thaw(d.data()); if (x.key) X.monde[x.key] = x; }); onRemote(); }, err));
          }
        });
      });
    }).catch(function (e) { A.busy = false; A.screen = "home"; flash(e.message, true); });
  }
  // Intent: rebuild() -> () = the game seen from this device: the room, the seats, the world choices; this device's
  // own seat keeps its newer local state until a sync (a higher round) replaces it
  function rebuild() {
    var X = A.multi, d = X.doc, oldRound = X.mine ? X.mine.round : null;
    var players = (d.seats || []).map(function (seat) {
      var sd = X.seats[seat.id] || {};
      var p = { id: seat.id, name: seat.name, color: seat.color, heroes: seat.heroes || [], s: sd.s ? JSON.parse(sd.s) : null, wait: sd.wait || null, since: sd.since || 0,
        round: sd.round || 0, actOk: sd.actOk || 0, owner: sd.owner || null };
      if (seat.id === X.me && X.mine && X.mine.s && X.mine.round >= p.round) { p.s = X.mine.s; p.wait = X.mine.wait; p.since = X.mine.since; p.actOk = X.mine.actOk; p.round = X.mine.round; }
      return p;
    });
    var dec = {}; Object.keys(X.monde).forEach(function (k) { dec[k] = X.monde[k]; });
    X.g = { story: X.story.id, players: players, base: d.base ? JSON.parse(d.base) : null, decisions: dec, released: d.released || {}, round: d.round || 0 };
    X.mine = X.me ? MU.player(X.g, X.me) || null : null;
    if (X.mine && oldRound != null && X.mine.round > oldRound) { X.undo.length = 0; X.note = syncNote(d.lastSync || {}); A.notice = X.note; }
    if (A.game && A.game.multi && X.mine) A.game.s = X.mine.s;
  }
  function onRemote() {
    var X = A.multi; if (!X || X.kind !== "salle") return;
    rebuild();
    if (A.screen !== "create") render();
    trySync();
  }
  function salleSave() {
    var X = A.multi; if (!X.mine) return;
    if (X.log.length > MULTI_LOG) X.log.splice(0, X.log.length - MULTI_LOG);
    X.mine.owner = deviceId();
    Store.put(sallePath(X.gid) + "/joueurs", X.mine.id, seatDoc(X.mine, X.log)).catch(function (e) { A.notice = "La salle n'a pas reçu ton dernier choix (" + ((e && e.code) || "erreur") + ")."; render(); });
  }
  function renderSalle() {
    var X = A.multi, g = X.g, st = X.story;
    app.appendChild(topBar([h("button", { class: "btn ghost sm", onclick: leaveGame }, "← Bibliothèque"), h("span", { class: "brand grow" }, st.title + " · salle commune")]));
    var w = h("main", { class: "wrap read" });
    w.appendChild(h("div", null, h("div", { class: "label" }, "Salle commune"), h("h1", null, st.title)));
    if (A.notice) w.appendChild(h("div", { class: "notice" }, A.notice));
    if (X.offline) w.appendChild(h("div", { class: "notice bad" }, "La salle ne répond plus en direct ; recharge la page pour la rejoindre à nouveau."));
    w.appendChild(h("p", { class: "small muted" }, "Pour qu'un autre joueur entre, invite-le sur cette page par e-mail avec le droit Éditeur (menu Partager), puis il ouvre la page, va dans « Parties à plusieurs » et prend sa place."));
    var me = X.me;
    g.players.forEach(function (p) {
      var mineSeat = p.id === me, taken = p.owner && p.owner !== deviceId();
      var who = p.heroes.length ? p.heroes.map(function (x) { return p.s ? M.heroSheet(p.s, x).name : M.nameOf(st, x); }).join(", ") : (p.s ? p.s.name : "héros à créer");
      var btn = mineSeat ? h("button", { class: "btn primary sm", onclick: function () { playSeat(p.id); } }, p.s ? "Jouer" : "Créer mon héros")
        : h("button", { class: "btn sm" + (taken ? " ghost" : ""), onclick: function () { takeSeat(p.id); } }, taken ? "Reprendre cette place" : "Prendre cette place");
      w.appendChild(h("div", { class: "save-line" }, h("span", { class: "avatar", style: "background:" + (p.color || COLORS[0]) }, p.name.slice(0, 1).toUpperCase()),
        h("div", { class: "grow" }, h("b", null, p.name + (mineSeat ? " (toi)" : "")), h("div", { class: "small muted" }, who + " · " + statusText(p) + (taken && !mineSeat ? " · tenue par un autre appareil" : ""))), btn));
    });
    app.appendChild(w);
  }
  function takeSeat(pid) {
    var X = A.multi; X.me = pid; lsSet("salle:" + X.gid, pid);
    var sd = X.seats[pid] || {}; X.log = sd.log || []; X.undo.length = 0;
    rebuild();
    if (X.mine && X.mine.s) salleSave(); else if (X.mine) { X.mine.owner = deviceId(); Store.put(sallePath(X.gid) + "/joueurs", pid, seatDoc(X.mine, X.log)).catch(function () {}); }
    render();
  }
  function playSeat(pid) {
    var X = A.multi, p = MU.player(X.g, pid);
    if (!p.s) { openCreate(X.story, { title: "Salle commune · " + X.story.title, who: p.name, next: "Entrer dans la partie", setup: { toutJouer: X.doc.toutJouer }, seat: pid }); return; }
    enterTurn(pid);
  }
  function seatCreated(pid, s) {
    var X = A.multi, p = MU.player(X.g, pid);
    p.s = s; p.round = X.g.round; p.actOk = 0; X.mine = p; A.create = null;
    MU.refreshWaits(X.story, X.g);
    enterTurn(pid);
    logStep(); salleSave();
  }
  // Intent: claim(Choice) -> Promise<Bool> = true when this device decides the world choice ! writes(db monde/<key>)
  function claimDecision(c) {
    var X = A.multi, key = MU.decisionKey(c), ref = Store.db.doc(sallePath(X.gid) + "/monde/" + safeKey(key));
    var d = { key: key, option: MU.optionOf(c), label: c.label, by: X.mine.name, pid: X.mine.id, at: Date.now() };
    var read = function () { return Store.timed(ref.get()).then(function (snap) { return snap.exists ? thaw(snap.data()) : null; }); };
    var lease = ref.acquire ? Store.timed(ref.acquire({ holder: deviceId(), ttlMs: CLAIM_MS })).catch(function () { return { acquired: true }; }) : Promise.resolve({ acquired: true });
    return lease.then(function (r) { return r.acquired ? null : sleep(CLAIM_WAIT_MS); }).then(read).then(function (ex) {
      if (ex && ex.option) return ex;
      return Store.timed(ref.set(d)).then(function () { return d; });
    }).then(function (win) {
      X.monde[key] = win; X.g.decisions[key] = win;
      return win.option === d.option && win.pid === d.pid;
    }).catch(function (e) { A.notice = "Le choix du monde n'a pas pu être enregistré (" + ((e && e.code) || "réseau") + "). Réessaie."; render(); return false; });
  }
  // Intent: sync() -> () ! when every seat waits, one device (the one holding the room's lease) merges and writes
  function trySync() {
    var X = A.multi; if (!X || X.kind !== "salle" || X.syncing || !Store.db) return;
    var ready = function (g) { return MU.allWaiting(g) && g.players.every(function (p) { return (p.round || 0) === (g.round || 0); }); };
    if (!ready(X.g)) return;
    X.syncing = true;
    var ref = Store.db.doc(sallePath(X.gid));
    Store.timed(ref.acquire({ holder: deviceId(), ttlMs: LEASE_MS })).then(function (r) {
      if (!r.acquired) return;
      return Promise.all([Store.timed(ref.get()), Store.timed(Store.db.collection(sallePath(X.gid) + "/joueurs").get())]).then(function (res) {
        X.doc = thaw(res[0].data()); X.doc.id = X.gid;
        res[1].docs.forEach(function (d) { X.seats[d.id] = thaw(d.data()); X.seats[d.id].id = d.id; });
        rebuild();
        var g = X.g; if (!ready(g)) return;
        var rep = MU.sync(X.story, g);
        return Promise.all(g.players.map(function (p) { return Store.put(sallePath(X.gid) + "/joueurs", p.id, seatDoc(p, p.id === X.me ? X.log : (X.seats[p.id] || {}).log)); })).then(function () {
          var d = X.doc; d.base = g.base ? JSON.stringify(g.base) : null; d.released = g.released; d.round = g.round; d.updated = Date.now();
          d.lastSync = { at: Date.now(), over: rep.over, stuck: rep.stuck, released: rep.released };
          return Store.put("salles", X.gid, d);
        }).then(function () { X.undo.length = 0; A.notice = X.note = syncNote(rep); if (A.game && X.mine) A.game.s = X.mine.s; render(); });
      });
    }).catch(function () { /* another device will try, or this one at the next change */ }).then(function () { X.syncing = false; });
  }

  // The quality voices in the settings: one row per voice, downloaded only when the reader asks.
  function renderNeural() {
    if (!Neural.manifest) return null;
    var mb = function (n) { return Math.max(1, Math.round(n / 1048576)) + " Mo"; };
    return h("div", { class: "stack tight neural" },
      h("span", { class: "label" }, "Voix de qualité"),
      h("p", { class: "small muted" }, "Des voix bien plus naturelles, calculées par l'appareil lui-même : une fois téléchargées, elles lisent aussi sans réseau. À télécharger de préférence en wifi."),
      Neural.keys().map(function (k) {
        var busy = Neural.busy === k;
        return h("div", { class: "row neural-row" },
          h("span", null, Neural.label(k)),
          Neural.has(k) ? h("span", { class: "small muted" }, "✓ installée") : null,
          busy ? h("span", { class: "mono small" }, "Téléchargement… " + Math.round(Neural.progress * 100) + " %") : null,
          !Neural.has(k) && !busy ? h("button", { class: "btn sm", disabled: !!Neural.busy, onclick: function () {
            Neural.busy = k; Neural.progress = 0; render();
            var last = 0;
            Neural.install(k, function (x) { Neural.progress = x; var now = Date.now(); if (now - last > 400) { last = now; render(); } })
              .then(function () { Neural.busy = null; if (!pref("voice") || !/^neural:/.test(pref("voice"))) setPref("voice", "neural:" + k); flash(Neural.label(k) + " est installée."); })
              .catch(function (e) { Neural.busy = null; flash("Le téléchargement n'a pas abouti : " + e.message + ". Réessaie quand le réseau est meilleur.", true); });
          } }, "Télécharger (" + mb(Neural.sizeOf(k)) + ")") : null,
          Neural.has(k) ? h("button", { class: "btn ghost sm", onclick: function () {
            Neural.remove(k).then(function () { if (pref("voice") === "neural:" + k) setPref("voice", ""); render(); });
          } }, "Supprimer") : null);
      }));
  }

  // ------------------------------------------------------------------ read aloud
  function speak(v) {
    if (!A.tts) return;
    var lines = [{ text: v.title }].concat(v.text.map(function (t) { return { text: t.replace(/\*/g, "") }; }));
    var out = [];
    lines.forEach(function (l) { var t = l.text; while (t.length > TTS_LINE_MAX) { var cut = t.lastIndexOf(". ", TTS_LINE_MAX); cut = cut > 0 ? cut + 1 : TTS_LINE_MAX; out.push({ text: t.slice(0, cut) }); t = t.slice(cut).trim(); } if (t) out.push({ text: t }); });
    A.speaking = true; render();
    var o = { language: "fr-FR", rate: pref("rate") || 1 };
    if (A.tts.browser) {
      // The device's voices read sentence by sentence: the text lights up as it goes, the « » may get their own voice.
      o.voiceName = pref("voice") || ""; o.dialogue = !!pref("dialogue"); o.onUnit = Reading.onUnit;
      var seq = ++readSeq;
      A.tts.speak(lines, o).catch(function () {}).then(function () {
        A.speaking = false; Reading.unit = null; render();
        // Read to the end, not stopped: the book listens for the choice.
        if (seq === readSeq && pref("voiceChoice") && pref("autoListen") && VoiceChoice.available() && A.screen === "game" && !A.modal) VoiceChoice.listen();
      });
      return;
    }
    if (CLAUDE_VOICES[pref("voice")]) o.voice = pref("voice");
    A.tts.speak(out, o).catch(function () {}).then(function () { A.speaking = false; render(); });
  }
  var readSeq = 0;
  function stopSpeaking() { readSeq++; if (A.tts && A.speaking) { try { A.tts.stop(); } catch (e) { /* ignore */ } A.speaking = false; } Reading.unit = null; }

  // ------------------------------------------------------------------ choosing by voice
  // Intent: VoiceChoice = the reader says « le deuxième » or a few words of a choice, and the book takes it.
  // The device's speech recognition (Chrome, Android); only on the site, the artifact frame has no microphone.
  // Why: Clément, 13/11: young readers, and reading in bed without touching the screen.
  var VOICE_ORDINALS = [["premier", "premiere", "un", "une", "1", "1er", "1ere"], ["deuxieme", "second", "seconde", "deux", "2", "2e"], ["troisieme", "trois", "3", "3e"],
    ["quatrieme", "quatre", "4", "4e"], ["cinquieme", "cinq", "5", "5e"], ["sixieme", "six", "6", "6e"], ["septieme", "sept", "7", "7e"], ["huitieme", "huit", "8", "8e"], ["neuvieme", "neuf", "9", "9e"], ["dixieme", "dix", "10", "10e"]];
  var VOICE_LAST = ["dernier", "derniere"];
  var VOICE_STOP = { les: 1, des: 1, une: 1, est: 1, que: 1, qui: 1, dans: 1, pour: 1, par: 1, sur: 1, avec: 1, mais: 1, pas: 1, son: 1, ses: 1, mon: 1, mes: 1, ton: 1, tes: 1, leur: 1, aux: 1, choix: 1, choisis: 1, veux: 1, voudrais: 1, prends: 1, alors: 1, celui: 1, celle: 1, numero: 1 };
  var VOICE_ORDINAL_WORDS = 4;              // a short sentence with a number is a rank, « le deuxième choix »
  var VoiceChoice = (function () {
    var V = { listening: false }, rec = null;
    function Rec() { return window.SpeechRecognition || window.webkitSpeechRecognition; }
    V.available = function () { return standalone() && !!Rec(); };
    function norm(t) { return String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim(); }
    function stem(w) { return w.slice(0, 5); }
    // The choices on screen, in the order the reader sees them.
    function shown(v) { return v.choices.filter(function (c) { return !c.restart; }); }
    // Intent: match(text, choices) -> { c } | { rank } | null
    V.match = function (text, list) {
      var words = norm(text).split(" ").filter(Boolean);
      var hasRankWord = words.indexOf("choix") >= 0 || words.indexOf("numero") >= 0;
      if (words.length <= VOICE_ORDINAL_WORDS || hasRankWord) {
        for (var i = 0; i < words.length; i++) {
          if (VOICE_LAST.indexOf(words[i]) >= 0) return { c: list[list.length - 1] };
          for (var r = 0; r < VOICE_ORDINALS.length; r++) if (VOICE_ORDINALS[r].indexOf(words[i]) >= 0 && r < list.length) {
            // « un » alone is a rank only when nothing else is said.
            if ((words[i] === "un" || words[i] === "une") && words.length > 2 && !hasRankWord) continue;
            return { c: list[r] };
          }
        }
      }
      var said = words.filter(function (w) { return w.length >= 3 && !VOICE_STOP[w]; }).map(stem);
      if (!said.length) return null;
      var scored = list.map(function (c) {
        var lw = norm(c.label + " " + (c.goes || "")).split(" ").filter(function (w) { return w.length >= 3; }).map(stem);
        return { c: c, n: said.filter(function (w) { return lw.indexOf(w) >= 0; }).length };
      }).sort(function (a, b) { return b.n - a.n; });
      if (scored[0].n > 0 && (scored.length < 2 || scored[0].n > scored[1].n)) return { c: scored[0].c };
      return null;
    };
    V.stop = function () { if (rec) { try { rec.abort(); } catch (e) { /* ignore */ } rec = null; } if (V.listening) { V.listening = false; render(); } };
    V.listen = function () {
      var G = A.game; if (!G || !V.available() || A.screen !== "game") return;
      stopSpeaking(); V.stop();
      var R = Rec(); rec = new R(); rec.lang = "fr-FR"; rec.interimResults = false; rec.maxAlternatives = 5;
      var mine = rec, got = false;
      rec.onresult = function (e) {
        got = true; var v = M.view(G.story, G.s), list = shown(v), alts = e.results[0], found = null, heard = alts[0].transcript;
        for (var i = 0; i < alts.length && !found; i++) found = V.match(alts[i].transcript, list);
        if (!found) { flash("Je n'ai pas reconnu de choix dans « " + heard + " ». Dis par exemple « le deuxième », ou quelques mots du choix.", true); return; }
        if (!found.c.ok) { flash("« " + found.c.label + " » n'est pas possible pour l'instant" + (found.c.why ? " : " + found.c.why : "") + ".", true); return; }
        A.notice = ""; pick(found.c);
      };
      rec.onerror = function (e) {
        if (e.error === "not-allowed" || e.error === "service-not-allowed") flash("Le micro est refusé. Autorise-le pour ce site dans le navigateur, puis réessaie.", true);
        else if (e.error === "no-speech") flash("Je n'ai rien entendu. Appuie sur 🎤 et parle après le petit signal.", true);
        else if (e.error !== "aborted") flash("La reconnaissance de la voix n'a pas marché (" + e.error + ").", true);
      };
      rec.onend = function () { if (rec === mine) { rec = null; V.listening = false; render(); } };
      try { rec.start(); V.listening = true; render(); } catch (e) { rec = null; flash("Le micro n'a pas pu démarrer.", true); }
    };
    return V;
  })();

  // ------------------------------------------------------------------ drawn portraits and coats of arms
  // Intent: Heraldry = a portrait for every hero and companion (a bust, the class's mark, colours seeded by the name),
  // and a coat of arms for every faction (field, division, charge, seeded by its id; a story may set its own: blasons).
  // Same name, same face, on every device: everything comes from hash(), nothing is stored.
  var PORTRAIT_SKINS = Object.keys(M.FACE.skins).map(function (k) { return M.FACE.skins[k]; });
  var PORTRAIT_HAIRS = Object.keys(M.FACE.hairs).map(function (k) { return M.FACE.hairs[k]; });
  var PORTRAIT_IRIS = Object.keys(M.FACE.irises).map(function (k) { return M.FACE.irises[k]; });
  var PORTRAIT_BACKS = Object.keys(M.FACE.backs).map(function (k) { return M.FACE.backs[k]; });
  var FACE_COLOUR_LIST = { skin: "skins", hair: "hairs", iris: "irises", back: "backs" };
  var ARCH_GEAR = {
    guerrier: { cloth: "#7d8790", mark: "M-4 9 L4 -9 M-6 -5 L-2 -7" },                  // a sword over the shoulder
    rodeur: { cloth: "#4f6b3a", mark: "M-6 -9 Q6 0 -6 9 M-6 -9 L-6 9" },                 // a bow
    voleur: { cloth: "#3a3a46", mark: "M-7 -2 Q0 -6 7 -2 Q0 2 -7 -2 M-3 -2 h1 M2 -2 h1" }, // a mask
    mage: { cloth: "#3c3f86", mark: "M0 -8 L2 -2 L8 -2 L3 2 L5 8 L0 4 L-5 8 L-3 2 L-8 -2 L-2 -2 Z" }, // a star
    pretre: { cloth: "#e6dfcc", mark: "M0 -8 V8 M-6 -3 H6" },                            // a cross
    barde: { cloth: "#8a3b55", mark: "M-3 6 a3 3 0 1 0 0.1 0 M0 6 V-8 L6 -5" },         // a note
  };
  var TINCT = { or: "#d9a92e", argent: "#eeeae0", gueules: "#b3261e", azur: "#2456a6", sinople: "#2f7d3a", sable: "#26231f", pourpre: "#6b2d6b" };
  var METALS = ["or", "argent"], COLOURS = ["gueules", "azur", "sinople", "sable", "pourpre"];
  var DIVISIONS = ["plein", "parti", "coupe", "bande", "ecartele", "chevron", "chef"];
  var CHARGES = {
    etoile: "M0 -14 L4 -4 L14 -4 L6 2 L9 12 L0 6 L-9 12 L-6 2 L-14 -4 L-4 -4 Z",
    besant: "M0 -11 a11 11 0 1 0 0.01 0 Z",
    croix: "M-3 -14 H3 V-3 H14 V3 H3 V14 H-3 V3 H-14 V-3 H-3 Z",
    croissant: "M6 -12 A13 13 0 1 0 6 12 A10 10 0 1 1 6 -12 Z",
    tour: "M-9 13 V-6 H-11 V-13 H-7 V-10 H-3 V-13 H3 V-10 H7 V-13 H11 V-6 H9 V13 Z M-3 13 V5 A3 3 0 0 1 3 5 V13 Z",
    cle: "M-2 -14 a6 6 0 1 0 4 0 Z M-1.5 -4 H1.5 V14 H-1.5 Z M1.5 6 H7 V9 H1.5 Z M1.5 11 H6 V14 H1.5 Z",
    montagne: "M-14 12 L-4 -8 L0 -2 L5 -12 L14 12 Z",
    plume: "M10 -14 Q-8 -6 -8 12 L-6 12 Q-2 -2 10 -14 Z",
  };
  var Heraldry = (function () {
    var H = {}, FV = M.FACE;
    function pick(arr, n) { return arr[n % arr.length]; }
    function rgb(c) { var n = parseInt(String(c).replace("#", ""), 16) || 0; return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
    function mix(a, b, t) { var p = rgb(a), q = rgb(b); return "#" + p.map(function (v, i) { return ("0" + Math.round(v + (q[i] - v) * t).toString(16)).slice(-2); }).join(""); }
    function lum(c) { var p = rgb(c); return (0.299 * p[0] + 0.587 * p[1] + 0.114 * p[2]) / 255; }
    function col(list, v) { return FV[list][v] || v; }
    // Faces drawn from a name: common hair and eye colours come up more often; grey hair comes with age, not by chance.
    var SEED_HAIRS = ["noir", "noir", "brun", "brun", "chatain", "chatain", "noisette", "roux", "cuivre", "blond", "acajou"];
    var SEED_IRIS = ["brun", "brun", "brun", "noir", "noisette", "vert", "bleu", "gris"];
    var SEED_COIF = {
      true: ["long", "long", "milong", "tresses", "chignon", "boucles", "crepus", "foulard"],
      false: ["court", "court", "degarni", "rase", "boucles", "crepus", "locks", "turban"],
      none: ["court", "milong", "boucles", "crepus"],
    };
    var SEED_BEARD = ["sans", "sans", "sans", "sans", "barbe", "barbe", "moustache", "longue"];
    var SCARVES = ["#7a3b4f", "#2f5d73", "#8a6a2c", "#3f6b4a", "#5a4a7a", "#b08a5a"];
    // Intent: faceOf(seed, { arch, f, face? }) -> Face = { age, skin, hair, back, iris, eyes, nose, lips, shape, coif,
    // beard, marks } ; drawn from the name, then whatever the reader composed or the story declared (face) wins.
    // Words are those of Moteur.FACE; colours come out as "#rrggbb".
    H.faceOf = function (seed, o) {
      o = o || {}; var x = hash(String(seed || "?")), y = hash(String(seed || "?") + "~"), z = hash("marks of " + String(seed || "?")), given = o.face || {};
      var hood = (o.arch === "voleur" || o.arch === "rodeur") && (x >>> 12) % 4 < 2;
      var d = {
        age: "adulte", skin: pick(PORTRAIT_SKINS, x), hair: FV.hairs[pick(SEED_HAIRS, x >>> 3)], back: pick(PORTRAIT_BACKS, x >>> 6),
        iris: FV.irises[pick(SEED_IRIS, y >>> 3)], eyes: pick(Object.keys(FV.eyes), y), nose: pick(Object.keys(FV.noses), y >>> 6),
        lips: pick(Object.keys(FV.lips), y >>> 9), shape: pick(Object.keys(FV.shapes), y >>> 11),
        coif: hood ? "capuche" : pick(SEED_COIF[o.f == null ? "none" : !!o.f], y >>> 20), beard: o.f === false ? pick(SEED_BEARD, x >>> 14) : "sans",
        marks: [].concat(z % 11 === 0 ? ["rousseur"] : [], z % 13 === 0 ? ["grain"] : [], z % 41 === 0 ? ["vitiligo"] : [], z % 17 === 0 ? ["lunettes"] : []),
      };
      Object.keys(given).forEach(function (k) {
        var v = given[k]; if (v == null) return;
        d[k] = k === "marks" ? [].concat(v) : k === "beard" && typeof v === "boolean" ? (v ? "barbe" : "sans") : FACE_COLOUR_LIST[k] ? col(FACE_COLOUR_LIST[k], v) : v;
      });
      if (given.hair == null) { if (d.age === "mur") d.hair = mix(d.hair, "#9a9a98", 0.45); else if (d.age === "ancien") d.hair = pick(["#b9b9b6", "#e8e2d6", "#8d8d8d"], x >>> 9); }
      if (d.age === "ancien" && given.coif == null && d.coif === "court" && o.f === false) d.coif = pick(["court", "degarni", "couronne"], x >>> 17);
      if (d.age === "enfant") { if (given.beard == null) d.beard = "sans"; if (given.coif == null && (d.coif === "degarni" || d.coif === "couronne")) d.coif = "court"; }
      return d;
    };
    // Where things sit on the head, by age: a child's head is rounder, the eyes larger and lower, the shoulders narrow.
    var AGE_GEO = {
      enfant: { rx: 12.3, ry: 12.5, cy: 28.5, ey: 29.2, es: 1.42, dx: 5.6, ny: 1.6, ns: 0.8, my: 36.7, neck: 8, sh: "M13 66 Q15 49 32 47.5 Q49 49 51 66 Z" },
      jeune: { rx: 11.8, ry: 13.5, cy: 27.4, ey: 27.7, es: 1.28, dx: 5.5, ny: 0.5, ns: 0.92, my: 36.2, neck: 9, sh: "M10 66 Q12 47 32 45 Q52 47 54 66 Z" },
      adulte: { rx: 12, ry: 14, cy: 27, ey: 27, es: 1.2, dx: 5.5, ny: 0, ns: 1, my: 36, neck: 10, sh: "M8 66 Q10 46 32 44 Q54 46 56 66 Z" },
    };
    var EYES = {
      amande: { w: "M-2.7 .3 Q-.6 -2.1 2.7 -.2 Q.3 1.8 -2.7 .3 Z", lid: "M-2.7 .3 Q-.6 -2.1 2.7 -.2", crease: "M-2.3 -1.5 Q0 -3 2.6 -1.5", r: 1.4 },
      ronds: { w: "M-2.4 0 Q-2.3 -2.2 0 -2.2 Q2.3 -2.2 2.4 0 Q2.3 1.9 0 1.9 Q-2.3 1.9 -2.4 0 Z", lid: "M-2.4 0 Q-2.3 -2.2 0 -2.2 Q2.3 -2.2 2.4 0", crease: "M-2.2 -2.2 Q0 -3.5 2.4 -2.1", r: 1.55 },
      // A single eyelid, no crease: the upper line runs smooth from a covered inner corner to a slightly higher outer one.
      brides: { w: "M-2.7 .5 Q-1.6 -.85 .4 -1.05 Q1.9 -1.05 2.8 -.4 Q.9 1.3 -2.7 .5 Z", lid: "M-2.95 .8 Q-1.7 -.9 .4 -1.1 Q1.9 -1.1 3.05 -.45", r: 1.38 },
      tombants: { w: "M-2.6 -.4 Q0 -2.2 2.7 .8 Q0 1.7 -2.6 -.4 Z", lid: "M-2.6 -.4 Q0 -2.2 2.9 1", crease: "M-2.2 -1.9 Q.2 -3.1 2.9 -.6", r: 1.4 },
      lourds: { w: "M-2.6 .2 Q0 -1.2 2.6 .1 Q0 1.6 -2.6 .2 Z", lid: "M-2.7 .2 Q0 -1.3 2.7 .1", hood: "M-2.9 .1 Q0 -1.45 2.9 0 Q0 -3 -2.9 .1 Z", r: 1.35 },
    };
    var NOSES = {
      fin: "M32.5 29 Q33.1 31.2 32.6 32 Q32 32.5 31.2 32",
      large: "M29.9 31.5 Q30.2 32.9 32 32.5 Q33.8 32.9 34.1 31.5 M32.9 29.2 Q33.2 30.4 33 31",
      busque: "M32.2 27.8 Q34.5 30.2 33.3 31.9 Q32.3 32.6 31.2 32",
      retrousse: "M32.6 29.4 Q33.4 30.8 33.2 31.3 Q32.3 32.2 31 31.5",
    };
    var CAP = "M19 28 Q17 10 32 10 Q47 10 45 28 Q44 19 36 17 Q30 21 21 21 Q20 24 19 28 Z";
    var CAP_TIGHT = "M19.5 27 Q18 11.5 32 11.5 Q46 11.5 44.5 27 Q43 18 32 17.5 Q21 18 19.5 27 Z";
    function ring(cx, cy, rad, r, from, to, n, fill) {
      var out = ""; for (var i = 0; i < n; i++) { var a = (from + (to - from) * i / (n - 1)) * Math.PI / 180; out += '<circle cx="' + (cx + rad * Math.cos(a)).toFixed(1) + '" cy="' + (cy + rad * Math.sin(a)).toFixed(1) + '" r="' + r + '" fill="' + fill + '"/>'; }
      return out;
    }
    // Intent: portrait(seed, { arch, f, face?, size?, hurt?, noMark? }) -> svg markup ; hurt: 0 unharmed, 1 hurt
    // (a bruise, a cut), 2 badly hurt (a bandage round the head) — the state of the moment, not a trait of the face.
    H.portrait = function (seed, o) {
      o = o || {}; var x = hash(String(seed || "?") + JSON.stringify(o.face || "") + (o.hurt || "")), sz = o.size || 64, F = H.faceOf(seed, o);
      var xs = hash(String(seed || "?")), gear = ARCH_GEAR[o.arch] || { cloth: pick(["#6d5a40", "#4f5d6b", "#6b4a4a", "#55663f"], xs >>> 9), mark: null };
      var G = AGE_GEO[F.age] || AGE_GEO.adulte, has = function (m) { return F.marks.indexOf(m) >= 0; };
      var rx = G.rx + (F.shape === "rond" ? 0.9 : F.shape === "allonge" ? -1.1 : 0), ry = G.ry + (F.shape === "rond" ? -0.7 : F.shape === "allonge" ? 0.5 : 0), cy = G.cy;
      var skin = F.skin, shade = mix(skin, "#3a1f12", 0.38), dark = lum(skin) < 0.45, old = F.age === "ancien", ripe = F.age === "mur" || old;
      var scar = dark ? mix(skin, "#f0cfc4", 0.5) : mix(skin, "#a8554c", 0.55), lip = dark ? mix(skin, "#2a0f0a", 0.5) : mix(skin, "#8a2f28", 0.6);
      var brow = lum(F.hair) > 0.6 ? mix(F.hair, "#6b5a45", 0.35) : mix(F.hair, "#1c130d", 0.3), scarf = pick(SCARVES, xs >>> 5), ink = "#2b2015";
      var line = function (d, c, w, extra) { return '<path d="' + d + '" stroke="' + c + '" stroke-width="' + w + '" fill="none" stroke-linecap="round" stroke-linejoin="round"' + (extra || "") + "/>"; };
      var fill = function (d, c, extra) { return '<path d="' + d + '" fill="' + c + '"' + (extra || "") + "/>"; };
      var p = ['<svg class="portrait" viewBox="0 0 64 64" width="' + sz + '" height="' + sz + '" role="img" aria-hidden="true">',
        '<circle cx="32" cy="32" r="32" fill="' + F.back + '"/>',
        '<clipPath id="pc' + x + '"><circle cx="32" cy="32" r="32"/></clipPath><clipPath id="pe' + x + '"><path d="' + EYES[F.eyes in EYES ? F.eyes : "amande"].w + '"/></clipPath><g clip-path="url(#pc' + x + ')">'];
      // ---- hair behind the head
      if (F.coif === "long") p.push(fill("M17 30 Q16 52 22 56 H42 Q48 52 47 30 Z", F.hair));
      else if (F.coif === "milong") p.push(fill("M17.5 26 Q15 40 20 45.5 H44 Q49 40 46.5 26 Z", F.hair));
      else if (F.coif === "crepus") p.push('<circle cx="32" cy="21.5" r="15.6" fill="' + F.hair + '"/>' + ring(32, 21.5, 15.2, 2.6, 150, 390, 17, F.hair));
      else if (F.coif === "boucles") p.push(ring(32, 26, 14, 3.9, 170, 370, 11, F.hair));
      else if (F.coif === "foulard") p.push(fill("M17 30 Q14 8 32 8 Q50 8 47 30 Q48 46 42 52 H22 Q16 46 17 30 Z", scarf));
      p.push(fill(G.sh, gear.cloth));                                                                                     // shoulders
      if (F.coif === "locks") for (var i = 0; i < 7; i++) { var lx = 17.5 + i * 4.8; p.push(line("M" + lx + " 22 Q" + (lx + (i < 3 ? -1.5 : i > 3 ? 1.5 : 0)) + " 38 " + (lx + (i < 3 ? -0.5 : i > 3 ? 0.5 : 0)) + " 51", F.hair, 3)); }
      p.push('<rect x="' + (32 - G.neck / 2) + '" y="36" width="' + G.neck + '" height="11" rx="3" fill="' + skin + '"/>');           // neck
      p.push(fill("M" + (32 - G.neck / 2) + " 40.5 Q32 44.5 " + (32 + G.neck / 2) + " 40.5 V38 H" + (32 - G.neck / 2) + " Z", shade, ' opacity=".22"'));
      if (old) p.push(line("M30.3 42.5 V45.5 M33.7 42.5 V45.5", shade, 0.45, ' opacity=".6"'));
      p.push('<ellipse cx="' + (32 - rx + 0.3) + '" cy="' + (G.ey + 1.2) + '" rx="1.9" ry="2.7" fill="' + mix(skin, shade, 0.18) + '"/><ellipse cx="' + (32 + rx - 0.3) + '" cy="' + (G.ey + 1.2) + '" rx="1.9" ry="2.7" fill="' + mix(skin, shade, 0.18) + '"/>'); // ears
      var under = { degarni: null, couronne: null, rase: null, capuche: gear.cloth, foulard: scarf, turban: scarf }, uc = F.coif in under ? under[F.coif] : F.hair;
      if (uc) p.push(fill("M" + (32 - rx - 1.3) + " 28 A" + (rx + 1.3) + " " + (28 - cy + ry + 1.6) + " 0 0 1 " + (32 + rx + 1.3) + " 28 Z", uc));   // no gap between the head and what covers it
      p.push('<ellipse cx="32" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="' + skin + '"/>');                               // head
      if (F.shape === "carre") p.push(fill("M" + (32 - rx + 0.5) + " " + cy + " L" + (32 - rx + 1.4) + " " + (cy + ry * 0.62) + " Q" + (32 - rx + 3) + " " + (cy + ry) + " 32 " + (cy + ry) + " Q" + (32 + rx - 3) + " " + (cy + ry) + " " + (32 + rx - 1.4) + " " + (cy + ry * 0.62) + " L" + (32 + rx - 0.5) + " " + cy + " Z", skin));
      // ---- the skin itself
      if (F.age === "enfant") p.push('<circle cx="25" cy="33.6" r="2.4" fill="#d8644e" opacity=".2"/><circle cx="39" cy="33.6" r="2.4" fill="#d8644e" opacity=".2"/>');
      if (has("vitiligo")) {
        var vit = mix(skin, "#fff3ea", 0.8), ve = G.ey - 27;
        p.push(fill("M33.3 " + (23.4 + ve) + " Q37 " + (21.2 + ve) + " 40.8 " + (23.8 + ve) + " Q42.4 " + (27 + ve) + " 40.3 " + (29.8 + ve) + " Q37 " + (31 + ve) + " 34.2 " + (29.2 + ve) + " Q32.6 " + (26.4 + ve) + " 33.3 " + (23.4 + ve) + " Z" +
          " M24.6 34 Q27.4 32.8 29.2 35.3 Q29.4 38.6 26.6 39.2 Q23.8 37.6 24.6 34 Z M25.6 " + (cy - ry + 3.2) + " q3 -1.2 4.8 1 q-.9 2.2 -3.6 1.8 q-1.7 -1 -1.2 -2.8 Z M28.6 42 Q31 41 32.4 43.6 Q31.2 46 28.9 45.2 Z", vit, ' opacity=".95"'));
      }
      if (has("tache")) p.push(fill("M21.6 24.4 Q24 22.8 25.5 25.2 Q26.4 29 24.6 32.4 Q22.2 33 21.2 30 Q20.6 26.8 21.6 24.4 Z", mix(skin, "#8e2f45", 0.45), ' opacity=".9"'));
      if (has("brulure")) p.push(fill("M37.6 30.6 Q41.4 28.6 43.3 31 Q43.5 35.4 41 38.6 Q38.6 40.8 36.6 39.6 Q35.5 37 36 34 Q36 31.6 37.6 30.6 Z", mix(skin, "#a8554c", 0.34)) + fill("M39 32 q1.6 -.6 2.4 .8 q-.2 1.6 -1.6 1.6 q-1.2 -.6 -.8 -2.4 Z M37.6 35.8 q1.4 -.2 1.8 1 q-.4 1.2 -1.6 1 q-.8 -.8 -.2 -2 Z", mix(skin, "#f6d9cf", 0.35), ' opacity=".8"'));
      if (has("rousseur")) p.push('<g fill="' + mix(skin, "#8a4a22", 0.5) + '">' + [[26, 30.6], [27.6, 31.4], [24.8, 31.6], [29, 30.4], [35, 30.4], [36.4, 31.4], [38, 30.6], [39.2, 31.7], [31, 29.6], [33.2, 29.7], [26.4, 32.4], [37.6, 32.5]].map(function (q) { return '<circle cx="' + q[0] + '" cy="' + (q[1] + G.ny) + '" r=".45"/>'; }).join("") + "</g>");
      if (ripe) p.push(line("M28 21.9 Q32 21.2 36 21.9 M40.9 26 l1.4 -.7 M41 27.4 l1.5 .3 M23.1 26 l-1.4 -.7 M23 27.4 l-1.5 .3 M28.3 32.2 Q27.3 34 27.8 35.6 M35.7 32.2 Q36.7 34 36.2 35.6", shade, 0.45, ' opacity="' + (old ? 0.75 : 0.5) + '"'));
      if (old) p.push(line("M27.2 19.9 Q32 19.1 36.8 19.9 M23.6 31 Q24.4 34.2 26 36.4 M40.4 31 Q39.6 34.2 38 36.4 M30.6 24 l.5 1.6 M33.4 24 l-.5 1.6", shade, 0.45, ' opacity=".65"'));
      // ---- hair and headwear in front
      // Hair, headwear and beard are drawn for a head 12 wide: they follow the width of this one.
      var fit = '<g transform="translate(32 0) scale(' + (rx / 12).toFixed(3) + ' 1) translate(-32 0)">', c = F.coif;
      p.push(fit);
      if (c === "capuche") p.push(fill("M16 32 Q14 8 32 8 Q50 8 48 32 Q46 18 32 17 Q18 18 16 32 Z M14 34 Q10 50 18 50 L20 36 Z M50 34 Q54 50 46 50 L44 36 Z", gear.cloth, ' opacity=".95"'));
      else if (c === "foulard") p.push(fill("M19.2 28 Q17.5 10.5 32 10.5 Q46.5 10.5 44.8 28 Q43.4 17.6 32 17 Q20.6 17.6 19.2 28 Z M20.4 31 Q23 42.6 32 43.2 Q41 42.6 43.6 31 Q44.6 46 38 49 H26 Q19.4 46 20.4 31 Z", scarf) + line("M22 15.5 Q32 11.5 42 15.5", mix(scarf, "#000000", 0.25), 0.5));
      else if (c === "turban") p.push(fill("M18.4 24.5 Q15.5 8.5 32 7.5 Q48.5 8.5 45.6 24.5 Q39 19.2 32 19.2 Q25 19.2 18.4 24.5 Z", scarf) + line("M19.5 19 Q30 12.5 44 13.5 M21 22 Q33 15.5 45.4 19 M24 10.8 Q33 9.5 41.5 11.6", mix(scarf, "#000000", 0.28), 0.6));
      else if (c === "degarni") p.push(fill("M20 22 Q22 12 32 12 Q42 12 44 22 Q38 17 32 17 Q26 17 20 22 Z", F.hair));
      else if (c === "couronne") p.push(fill("M19.6 30 Q18.2 24.5 20.4 20.6 Q21.4 24 21 30 Z M44.4 30 Q45.8 24.5 43.6 20.6 Q42.6 24 43 30 Z", F.hair));
      else if (c === "rase") p.push(fill("M20.7 25 Q20.5 13.5 32 13.3 Q43.5 13.5 43.3 25 Q42 18 32 17.5 Q22 18 20.7 25 Z", F.hair, ' opacity=".35"'));
      else if (c === "chignon") p.push('<circle cx="32" cy="8.8" r="5.2" fill="' + F.hair + '"/>' + fill(CAP_TIGHT, F.hair));
      else if (c === "crepus") p.push(fill("M20.3 25.5 Q20.6 12.6 32 12.6 Q43.4 12.6 43.7 25.5 Q38.5 17.6 32 17.6 Q25.5 17.6 20.3 25.5 Z", F.hair));
      else if (c === "boucles") p.push(fill("M20 24 Q21 12 32 12 Q43 12 44 24 Q38 17.5 32 17.5 Q26 17.5 20 24 Z", F.hair) + ring(32, 24.5, 10.4, 2.5, 205, 335, 7, F.hair));
      else {
        p.push(fill(c === "tresses" || c === "locks" ? CAP_TIGHT : CAP, F.hair));
        if (c === "tresses") { [18.4, 45.6].forEach(function (bx) { for (var j = 0; j < 8; j++) p.push('<ellipse cx="' + (bx + (j % 2 ? 0.5 : -0.5)) + '" cy="' + (26.5 + j * 3.3) + '" rx="2.3" ry="2.1" fill="' + F.hair + '"/>'); p.push('<circle cx="' + bx + '" cy="53.4" r="1.3" fill="#c9a24a"/>'); }); p.push(line("M32 11.6 V17.4", mix(F.hair, skin, 0.5), 0.5)); }
        if (c === "locks") p.push(line("M19.6 23 Q18.4 32 19 41 M44.4 23 Q45.6 32 45 41", F.hair, 2.8) + line("M26 12.6 Q25 15 24.4 18.6 M32 11.6 V17.4 M38 12.6 Q39 15 39.6 18.6", mix(F.hair, skin, 0.4), 0.45));
      }
      p.push("</g>");
      // ---- brows, eyes, nose, mouth
      var E = EYES[F.eyes in EYES ? F.eyes : "amande"], blindL = has("aveugle"), blindR = has("aveugle") || has("oeil_voile");
      var odd = lum(F.iris) < 0.3 ? FV.irises.bleu : FV.irises.brun;
      [-1, 1].forEach(function (side) {
        var blind = side < 0 ? blindL : blindR, iris = blind ? "#d3dade" : side < 0 && has("vairons") ? odd : F.iris;
        p.push('<g transform="translate(' + (32 + side * G.dx) + " " + G.ey + ") scale(" + (side * G.es) + " " + G.es + ')">' +
          line("M-2.9 -3.2 Q-.2 " + (F.eyes === "brides" ? -4 : -4.4) + " 2.9 -3.3", brow, (old ? 0.75 : 0.95) / G.es) +
          fill(E.w, "#f6f1e8") + '<g clip-path="url(#pe' + x + ')"><circle cx="0" cy="-.1" r="' + E.r + '" fill="' + iris + '"/>' +
          (blind ? '<circle cx="0" cy="-.1" r="' + (E.r * 0.45) + '" fill="#b9c3c8"/>' : '<circle cx="0" cy="-.1" r="' + (E.r * 0.48) + '" fill="#120c08"/><circle cx=".5" cy="-.6" r=".34" fill="#fff" opacity=".85"/>') + "</g>" +
          (E.hood ? fill(E.hood, shade, ' opacity=".4"') : "") + (E.crease ? line(E.crease, shade, 0.35, ' opacity=".7"') : "") + line(E.lid, ink, F.eyes === "lourds" ? 0.8 : 0.6) +
          (ripe ? line("M-2.2 2.2 Q0 3 2.3 2.3", shade, 0.4, ' opacity="' + (old ? 0.8 : 0.5) + '"') : "") + "</g>");
      });
      p.push('<g transform="translate(' + (32 * (1 - G.ns)) + " " + (G.ny + 31 * (1 - G.ns)) + ") scale(" + G.ns + ')">' + line(NOSES[F.nose] || NOSES.fin, shade, 0.75) + "</g>");
      var by = G.my - 36;
      if (F.beard === "barbe" || F.beard === "longue") p.push(fit + fill(F.beard === "longue" ? "M20.6 29 Q19.5 50 32 57 Q44.5 50 43.4 29 Q41 38.6 32 38.8 Q23 38.6 20.6 29 Z" : "M20.6 29 Q21.5 44 32 45.5 Q42.5 44 43.4 29 Q41 38.6 32 38.8 Q23 38.6 20.6 29 Z", F.hair, ' transform="translate(0 ' + by + ')"') + "</g>");
      if (F.lips === "pleines") p.push('<g transform="translate(0 ' + G.my + ')">' + fill("M28.4 0 Q30.6 -1.15 32 -.45 Q33.4 -1.15 35.6 0 Q32 2.8 28.4 0 Z", lip) + line("M28.4 0 Q32 .95 35.6 0", mix(lip, "#1a0a06", 0.35), 0.45) + "</g>");
      else p.push('<g transform="translate(0 ' + G.my + ')">' + line("M28.6 0 Q32 1.9 35.4 0", mix(lip, "#1a0a06", 0.15), 1.1) + "</g>");
      if (F.beard && F.beard !== "sans") p.push(fill("M27.1 35 Q29.5 32.9 32 33.6 Q34.5 32.9 36.9 35 Q34.3 34.4 32 34.6 Q29.7 34.4 27.1 35 Z", F.hair, ' transform="translate(0 ' + by + ')"') + line("M27.1 35 Q29.5 33.6 32 34.2 Q34.5 33.6 36.9 35", F.hair, 0.7, ' transform="translate(0 ' + by + ')"'));
      // ---- what life left on the face, and what the face wears
      if (has("grain")) p.push('<circle cx="36.6" cy="' + (33.7 + by) + '" r=".7" fill="' + mix(skin, "#22130c", 0.75) + '"/>');
      if (has("tatouage")) p.push(line("M32 20.9 l1 1.2 l-1 1.2 l-1 -1.2 Z M32 " + (38.7 + by) + " v1.7 M30.3 " + (38.5 + by) + " v1.3 M33.7 " + (38.5 + by) + " v1.3", "#27485a", 0.6, ' opacity=".9"'));
      if (has("cicatrice")) p.push(line("M23.4 " + (30.2 + G.ny) + " l3.6 3.6", scar, 0.85) + line("M24 " + (32 + G.ny) + " l1.2 -1.2 M25.2 " + (33.2 + G.ny) + " l1.2 -1.2", scar, 0.4));
      if (has("balafre")) p.push(line("M" + (32 + G.dx + 2.6) + " " + (G.ey - 7.6) + " Q" + (32 + G.dx + 1.6) + " " + (G.ey - 1) + " " + (32 + G.dx - 0.6) + " " + (G.ey + 6.6), scar, 0.95));
      if (has("lunettes")) { var gr = 3.5 * G.es; p.push('<g stroke="#3a2a18" stroke-width=".8" fill="#fff" fill-opacity=".14"><circle cx="' + (32 - G.dx) + '" cy="' + G.ey + '" r="' + gr + '"/><circle cx="' + (32 + G.dx) + '" cy="' + G.ey + '" r="' + gr + '"/></g>' + line("M" + (32 - G.dx + gr) + " " + G.ey + " Q32 " + (G.ey - 1.2) + " " + (32 + G.dx - gr) + " " + G.ey + " M" + (32 - G.dx - gr) + " " + G.ey + " L" + (32 - rx) + " " + (G.ey - 0.6) + " M" + (32 + G.dx + gr) + " " + G.ey + " L" + (32 + rx) + " " + (G.ey - 0.6), "#3a2a18", 0.8)); }
      if (has("bandeau")) { var ex = 32 - G.dx, ey = G.ey; p.push(line("M" + (32 + rx - 0.4) + " " + (ey - 7) + " L" + (32 - rx + 0.2) + " " + (ey + 2.6), "#1c1612", 1.1) + fill("M" + (ex - 3.5) + " " + (ey - 2.5) + " Q" + ex + " " + (ey - 3.6) + " " + (ex + 3.5) + " " + (ey - 2.5) + " Q" + (ex + 3.9) + " " + (ey + 3.7) + " " + ex + " " + (ey + 4.3) + " Q" + (ex - 3.9) + " " + (ey + 3.7) + " " + (ex - 3.5) + " " + (ey - 2.5) + " Z", "#1c1612")); }
      if (has("appareil")) p.push(line("M" + (32 + rx + 0.6) + " " + (G.ey - 1.6) + " q1.9 .3 1.7 2.7 q-.2 1.7 -1.2 2.3", "#d9772e", 1.5) + '<circle cx="' + (32 + rx + 0.2) + '" cy="' + (G.ey + 2.4) + '" r=".8" fill="#f1e6c8"/>');
      if (o.hurt) p.push('<ellipse cx="38.6" cy="' + (31.6 + G.ny) + '" rx="2.6" ry="1.9" fill="#6b3f6b" opacity=".38"/>' + line("M25.6 " + (cy - ry + 7.6) + " l3.2 1.3", "#a3322a", 0.7));
      if (o.hurt > 1) { var t = cy - ry; p.push(fill("M" + (32 - rx - 0.6) + " " + (t + 9.4) + " Q32 " + (t + 4.6) + " " + (32 + rx + 0.6) + " " + (t + 9.4) + " L" + (32 + rx + 0.8) + " " + (t + 5.6) + " Q32 " + (t + 0.6) + " " + (32 - rx - 0.8) + " " + (t + 5.6) + " Z", "#f3ecdc", ' stroke="#cbbf9f" stroke-width=".4"') + '<circle cx="38" cy="' + (t + 5.4) + '" r="1.3" fill="#a3322a" opacity=".75"/>'); }
      if (gear.mark && !o.noMark) p.push('<g transform="translate(51 51)"><circle r="11" fill="#fbf4e2" stroke="#8a6a3a" stroke-width="1.5"/><path d="' + gear.mark + '" transform="scale(.75)" stroke="#5a3f1c" stroke-width="2" fill="' + (o.arch === "mage" ? "#c9a24a" : "none") + '" stroke-linecap="round" stroke-linejoin="round"/></g>');
      p.push("</g></svg>");
      return p.join("");
    };
    // Intent: arms(seed, spec?) -> { field, other, division, charge, chargeT } ; the rule of tincture: metal on colour.
    H.arms = function (seed, spec) {
      var x = hash(String(seed)), metalFirst = x % 2 === 0;
      var m = pick(METALS, x >>> 2), c = pick(COLOURS, x >>> 4);
      var a = { field: metalFirst ? m : c, other: metalFirst ? c : m, division: pick(DIVISIONS, x >>> 7), charge: pick(Object.keys(CHARGES), x >>> 10) };
      a.chargeT = a.division === "plein" ? a.other : a.field === m ? pick(COLOURS, (x >>> 13) + 1) : pick(METALS, (x >>> 13) + 1);
      if (a.chargeT === a.field || a.chargeT === a.other) a.chargeT = a.division === "plein" ? a.other : METALS.indexOf(a.field) >= 0 ? "sable" : "or";
      if (spec) Object.keys(spec).forEach(function (k) { a[k] = spec[k]; });
      return a;
    };
    var SHIELD = "M4 4 H60 V30 Q60 56 32 68 Q4 56 4 30 Z";
    H.blason = function (seed, spec, size) {
      var a = H.arms(seed, spec), x = hash(String(seed)), id = "bl" + x, sz = size || 48;
      var t = function (n) { return TINCT[n] || n; };
      var div = {
        plein: "", parti: '<rect x="32" y="0" width="32" height="72" fill="' + t(a.other) + '"/>',
        coupe: '<rect x="0" y="34" width="64" height="40" fill="' + t(a.other) + '"/>',
        bande: '<path d="M0 0 L22 0 L64 52 L64 72 L42 72 L0 20 Z" fill="' + t(a.other) + '"/>',
        ecartele: '<rect x="32" y="0" width="32" height="34" fill="' + t(a.other) + '"/><rect x="0" y="34" width="32" height="40" fill="' + t(a.other) + '"/>',
        chevron: '<path d="M0 52 L32 22 L64 52 L64 64 L32 34 L0 64 Z" fill="' + t(a.other) + '"/>',
        chef: '<rect x="0" y="0" width="64" height="20" fill="' + t(a.other) + '"/>',
      }[a.division] || "";
      var cy = a.division === "chef" ? 40 : a.division === "chevron" ? 50 : a.division === "coupe" ? 20 : 34;
      var sc = a.division === "plein" || a.division === "chef" ? 1.1 : 0.75;
      var cx = a.division === "parti" || a.division === "ecartele" ? 17 : 32;
      if (a.division === "coupe") cx = 32;
      return '<svg class="blason" viewBox="0 0 64 72" width="' + sz + '" height="' + Math.round(sz * 72 / 64) + '" role="img" aria-hidden="true">' +
        '<clipPath id="' + id + '"><path d="' + SHIELD + '"/></clipPath><g clip-path="url(#' + id + ')"><rect width="64" height="72" fill="' + t(a.field) + '"/>' + div +
        '<path d="' + (CHARGES[a.charge] || CHARGES.etoile) + '" transform="translate(' + cx + " " + cy + ") scale(" + sc + ')" fill="' + t(a.chargeT) + '" stroke="#1a1612" stroke-width=".6"/></g>' +
        '<path d="' + SHIELD + '" fill="none" stroke="#1a1612" stroke-width="2"/></svg>';
    };
    return H;
  })();
  // A person of the story: `f` when the story says it, else a guess from a title (Mère, Sire…) or the « elle / il » of
  // the description; with no clue, a face without beard nor long hair.
  function personFace(st, k, size) {
    var p = (st.people || {})[k] || {}, f = p.f;
    if (f == null) {
      var n = p.name || "", d = " " + (p.desc || "") + " ";
      if (/^(Mère|Dame|Sœur|Soeur|Madame|Mademoiselle|La |Reine|Tante|Grand-mère|Veuve)/.test(n)) f = true;
      else if (/^(Père|Frère|Maître|Sire|Messire|Le |Roi|Oncle|Grand-père|Monsieur|Capitaine)/.test(n)) f = false;
      else { var el = (d.match(/\b[Ee]lle\b/g) || []).length, il = (d.match(/\b[Ii]l\b/g) || []).length; if (el > il) f = true; else if (il > el) f = false; }
    }
    return Heraldry.portrait(st.id + "|" + (p.name || k), { f: f, face: p.face, size: size || 40 });
  }
  // Intent: hurtOf(pv, max) -> 0 | 1 | 2 = what a portrait shows of the wounds of the moment: nothing above half the
  // hit points, a bruise and a cut under half, a bandage under a quarter. Healed, the face is clean again.
  var HURT_AT = 0.5, BADLY_HURT_AT = 0.25;
  function hurtOf(pv, max) { var q = max > 0 ? pv / max : 1; return q <= BADLY_HURT_AT ? 2 : q <= HURT_AT ? 1 : 0; }
  // The face of the hero being played: the one composed at creation (s.face) for the reader's own hero, else the
  // face the story gives to the hero who leads.
  function heroFace(st, s, size) {
    if (s.lead != null && st.heroes && st.heroes[s.lead]) return portraitOf(st, s.lead, s, size);
    return Heraldry.portrait(st.id + "|" + s.name, { arch: s.arch, face: s.face, size: size, hurt: hurtOf(s.pv, M.pvMax(s)) });
  }
  // Intent: portraitOf(Story, id, State, size?) -> svg = a companion or a hero of the story: the face the story
  // declares (face) on the name's own; the reader's own hero keeps the face composed at creation, led or not.
  function portraitOf(st, k, s, size) {
    var hero = st.heroes && st.heroes[k], c = (st.companions || {})[k] || {}, mine = hero && hero.player, lead = s.lead === k;
    var sheet = !hero ? {} : lead ? s : (s.heroes && s.heroes[k]) || {};
    var name = sheet.name || (hero && hero.name) || c.name || k, arch = sheet.arch || (hero && hero.arch) || c.arch;
    var f = mine ? null : hero && hero.f != null ? hero.f : c.f;
    var hurt = lead ? hurtOf(s.pv, M.pvMax(s)) : s.cpv && s.cpv[k] != null ? hurtOf(s.cpv[k], M.cpvMax(st, s, k)) : 0;
    return Heraldry.portrait(st.id + "|" + name, { arch: arch, f: f, face: mine ? s.face : (hero && hero.face) || c.face, hurt: hurt, size: size });
  }

  // ------------------------------------------------------------------ dictation in the children's workshop
  // Intent: Dictation = the child tells the page aloud and it writes itself in the text box; « point », « virgule »,
  // « point d'interrogation », « point d'exclamation », « deux points », « à la ligne », « nouveau paragraphe » are
  // turned into signs, and a sentence starts with a capital. Same recognition as choosing by voice (site only).
  // Why: Clément, 13/11.
  var DICT_SIGNS = [[/\s*nouveau paragraphe\s*/gi, "\n\n"], [/\s*(à|a) la ligne\s*/gi, "\n"], [/\s*point d'interrogation/gi, " ?"], [/\s*point d'exclamation/gi, " !"],
    [/\s*points de suspension/gi, "…"], [/\s*deux points/gi, " :"], [/\s*point virgule/gi, " ;"], [/\s*virgule/gi, ","], [/\s*point\b/gi, "."],
    [/\s*ouvrez les guillemets\s*/gi, " « "], [/\s*fermez les guillemets/gi, " »"], [/\s*tiret\s*/gi, "\n— "]];
  var Dictation = (function () {
    var D = { on: false }, rec = null;
    D.available = function () { return VoiceChoice.available(); };
    function signs(t) { DICT_SIGNS.forEach(function (r) { t = t.replace(r[0], r[1]); }); return t; }
    // Insert at the end of the box, with a space or a capital as the text before asks.
    function append(ta, said) {
      var before = ta.value, t = signs(said.trim()); if (!t) return;
      var ends = /[.!?…]\s*$|^\s*$|\n\s*$/.test(before);
      if (ends) t = t.replace(/^([\s«—]*)(\S)/, function (m0, sp, c) { return sp + c.toUpperCase(); });
      var glue = !before || /\s$/.test(before) || /^[\s,.;:!?…»\n]/.test(t) ? "" : " ";
      ta.value = (before + glue + t).replace(/\. (\S)/g, function (m0, c) { return ". " + c.toUpperCase(); });
      ta.dispatchEvent(new Event("input", { bubbles: true }));
    }
    D.toggle = function (ta, btn, live) {
      if (D.on) { D.stop(); return; }
      var R = window.SpeechRecognition || window.webkitSpeechRecognition; if (!R) return;
      rec = new R(); rec.lang = "fr-FR"; rec.continuous = true; rec.interimResults = true;
      var mine = rec;
      rec.onresult = function (e) {
        var interim = "";
        for (var i = e.resultIndex; i < e.results.length; i++) { var x = e.results[i]; if (x.isFinal) append(ta, x[0].transcript); else interim += x[0].transcript; }
        live.textContent = interim ? "… " + interim : "";
      };
      rec.onerror = function (e) { if (e.error === "not-allowed" || e.error === "service-not-allowed") live.textContent = "Le micro est refusé : autorise-le pour ce site dans le navigateur."; };
      rec.onend = function () { if (rec === mine && D.on) { try { rec.start(); } catch (e2) { D.stop(); } } };   // Chrome stops after a silence: go on
      D.on = true; D.btn = btn; D.live = live; btn.textContent = "■ Arrêter la dictée"; btn.classList.add("primary"); live.textContent = "Je t'écoute…";
      try { rec.start(); } catch (e) { D.stop(); }
    };
    D.stop = function () {
      D.on = false; var r = rec; rec = null; if (r) { try { r.stop(); } catch (e) { /* ignore */ } }
      if (D.btn) { D.btn.textContent = "🎤 Dicter"; D.btn.classList.remove("primary"); }
      if (D.live) D.live.textContent = "";
    };
    return D;
  })();

  // ------------------------------------------------------------------ the notebook
  var TABS = [["heros", "Héros"], ["sac", "Sac"], ["quetes", "Quêtes"], ["indices", "Indices"], ["notes", "Notes"], ["compagnons", "Compagnons"], ["carte", "Carte"], ["gens", "Gens"], ["frise", "Frise"], ["marques", "Marque-pages"], ["exploits", "Hauts faits"], ["codex", "Bestiaire et atlas"], ["mots", "Mots"], ["journal", "Journal"], ["coulisses", "Coulisses"]];
  function renderCarnet() {
    var G = A.game; if (!G) { A.carnet = null; return; }
    var close = function () { A.carnet = null; render(); };
    var bg = h("div", { class: "drawer-bg", onclick: close });
    var d = h("aside", { class: "drawer", role: "dialog", "aria-label": "Carnet" });
    d.appendChild(h("div", { class: "drawer-head" }, h("h2", null, "Carnet de " + G.s.name), h("button", { class: "btn sm", onclick: close }, "Fermer")));
    d.appendChild(h("nav", { class: "tabs" }, TABS.map(function (t) { return h("button", { class: "tab" + (A.carnetTab === t[0] ? " on" : ""), onclick: function () { A.carnetTab = t[0]; render(); } }, t[1]); })));
    var body = h("div", { class: "drawer-body" });
    ({ heros: tabHero, sac: tabBag, quetes: tabQuests, indices: tabClues, notes: tabNotes, compagnons: tabCompanions, carte: tabMap, gens: tabPeople, frise: tabFrise, marques: tabMarks, exploits: tabFeats, codex: tabCodex, mots: tabWords, journal: tabLog, coulisses: tabBackstage })[A.carnetTab](body, G.story, G.s);
    d.appendChild(body);
    app.appendChild(bg); app.appendChild(d);
  }
  function escClose(e) {
    if (e.key !== "Escape") return;
    if (A.modal) { e.preventDefault(); if (A.modal.kind === "send" || A.modal.kind === "receive") Transfer.stop(); A.modal = null; render(); }
    else if (A.carnet) { e.preventDefault(); A.carnet = null; render(); }
  }
  function bar(cls, v, max) { return h("span", { class: "bar " + cls }, h("i", { style: "width:" + Math.max(0, Math.min(100, Math.round(100 * v / max))) + "%" })); }
  function tabHero(b, st, s) {
    var a = M.ARCHS[s.arch] || {}, lv = M.level(s), into = s.ep - lv * M.EP_PER_LEVEL;
    b.appendChild(h("div", { class: "hero-head" }, h("span", { html: heroFace(st, s) }), h("div", null, h("div", { class: "label" }, a.label + " · niveau " + lv), h("div", { class: "small muted" }, a.tip + " Difficulté : " + (M.DIFFICULTY[s.difficulty || "aventurier"] || {}).label + "."))));
    b.appendChild(h("div", { class: "kv" },
      h("span", null, "Points de vie"), bar("pv", s.pv, M.pvMax(s)), h("span", { class: "num" }, s.pv + "/" + M.pvMax(s)),
      h("span", null, "Expérience"), bar("", into, M.EP_PER_LEVEL), h("span", { class: "num" }, s.ep.toLocaleString("fr-FR") + " EP"),
      h("span", null, "Fatigue"), bar("fear", s.fatigue, 5), h("span", { class: "num" }, s.fatigue ? "−" + s.fatigue * 5 : "aucune"),
      h("span", null, "Bourse"), h("span"), h("span", { class: "num" }, M.money(st, s.gold)),
      h("span", null, "Vivres"), h("span"), h("span", { class: "num" }, s.food + " j"),
      s.mark ? [h("span", null, "Marque"), h("span"), h("span", { class: "num" }, s.mark)] : null));
    b.appendChild(h("div", { class: "label" }, "Domaines (jet : d100 ouvert + bonus, il faut 101)"));
    b.appendChild(h("div", { class: "kv" }, Object.keys(M.DOMAINS).map(function (k) { var v = M.bonus(st, s, k); return [h("span", null, M.DOMAINS[k]), bar("conf", v, 80), h("span", { class: "num" }, (v >= 0 ? "+" : "") + v)]; })));
    var w = M.weapon(st, s), ar = M.armor(st, s);
    if (!A.game.multi) b.appendChild(h("button", { class: "btn sm", onclick: function () { A.carnet = null; A.screen = "fiche"; render(); window.scrollTo(0, 0); } }, "🖨 Fiche du héros à imprimer"));
    if (st.heroes) tabHeroes(b, st, s);
    b.appendChild(h("div", { class: "small" }, "Arme : " + (w ? w.name + " (dégâts " + w.dmg + (w.att ? ", attaque " + (w.att > 0 ? "+" : "") + w.att : "") + ")" : "mains nues (dégâts 2)") + " · Protection : " + (ar ? ar.name + " (+" + ar.def + ")" : "aucune")));
    var me = !A.game.multi && !A.game.ephemeral && A.profiles.filter(function (p) { return p.id === A.game.doc.profil; })[0], stamps = me && renderStamps(me);
    if (stamps) b.appendChild(stamps);
  }
  // Intent: render(Story, State) -> () = the lead's souvenirs, then every other playable hero and where he stands
  function tabHeroes(b, st, s) {
    var souv = M.souvOf(st, s.lead), ids = Object.keys(souv);
    if (ids.length) {
      b.appendChild(h("div", { class: "label" }, "Souvenirs · " + M.souvCount(st, s, s.lead) + " gardés sur " + ids.length));
      ids.forEach(function (id) {
        var kept = M.souvKept(st, s, s.lead, id);
        b.appendChild(h("div", { class: "clue" + (kept ? "" : " muted") }, kept ? h("b", null, souv[id].label) : "Donné. Il ne reste qu'une place vide où était « " + souv[id].label + " ».", kept && souv[id].text ? h("div", { class: "small muted" }, souv[id].text) : null));
      });
    }
    var others = M.heroIds(st).filter(function (k) { return k !== s.lead && s.met[k]; });
    if (!others.length) return;
    b.appendChild(h("div", { class: "label" }, "Les autres héros"));
    others.forEach(function (k) {
      var sh = M.heroSheet(s, k), a = M.ARCHS[sh.arch] || {}, where = s.met[k] === "party" ? "avec toi" : s.met[k] === "away" ? "ailleurs" : s.met[k] === "gone" ? "parti" : "rencontré";
      var pv = s.cpv && s.cpv[k] != null ? s.cpv[k] + "/" + M.cpvMax(st, s, k) + " PV · " : "";
      b.appendChild(h("div", { class: "small hero-line" }, h("span", { html: portraitOf(st, k, s, 32) }), h("b", null, sh.name), " · " + a.label + " de niveau " + M.levelOfEp(sh.ep) + " · " + pv + where + " · souvenirs " + M.souvCount(st, s, k) + "/" + Object.keys(M.souvOf(st, k)).length));
    });
  }
  function tabBag(b, st, s) {
    if (!s.items.length) b.appendChild(h("div", { class: "notice" }, "Ton sac est vide."));
    var counted = {};
    s.items.forEach(function (id) { counted[id] = (counted[id] || 0) + 1; });
    Object.keys(counted).forEach(function (id) {
      var it = M.item(st, id), open = A.readDoc === id, inFight = !!s.combat;
      b.appendChild(h("div", { class: "itemrow" },
        h("b", null, it.name + (counted[id] > 1 ? " ×" + counted[id] : "")),
        h("span", { class: "row" },
          h("span", { class: "small muted" }, it.kind + (it.dmg ? " · dégâts " + it.dmg : "") + (it.def ? " · protection +" + it.def : "") + (it.heal ? " · +" + it.heal + " PV" : "") + (it.bonus ? Object.keys(it.bonus).filter(function (k) { return it.bonus[k]; }).map(function (k) { return " · " + M.DOMAINS[k] + " +" + it.bonus[k]; }).join("") : "")),
          it.heal && !inFight ? h("button", { class: "btn sm", disabled: s.pv >= M.pvMax(s), onclick: function () { A.game.undo.push(JSON.stringify(s)); s.events = []; M.useItem(st, s, id); persist(); render(); } }, "Utiliser") : null,
          it.text ? h("button", { class: "btn sm", onclick: function () { A.readDoc = open ? null : id; render(); } }, open ? "Refermer" : "Lire") : null),
        it.desc ? h("div", { class: "desc" }, it.desc) : null,
        open ? h("div", { class: "doc", html: md(it.text) }) : null));
    });
  }
  function tabQuests(b, st, s) {
    (st.acts || []).forEach(function (a) {
      var qs = M.questsOf(st, a.id); if (!qs.length) return;
      b.appendChild(h("div", { class: "label" }, a.title));
      qs.forEach(function (q) {
        var state = M.questState(s, q, st);
        if (state === "manquée" && !M.questStarted(s, q)) return;
        if (state === "à découvrir" && q.kind === "annexe") { b.appendChild(h("div", { class: "quest small muted" }, "Une petite quête t'attend encore quelque part.")); return; }
        b.appendChild(h("div", { class: "quest " + state.replace(/[^a-z]/g, "") }, h("div", null, q.title, " ", h("span", { class: "state" }, "· " + (q.kind === "principale" ? "principale" : "petite quête") + " · " + state))));
      });
    });
  }
  function tabClues(b, st, s) {
    var any = false;
    Object.keys(st.mysteries || {}).forEach(function (m) {
      var cs = Object.keys(s.clues).filter(function (k) { return st.clues[k] && st.clues[k].rev === m; });
      if (!cs.length) return; any = true;
      b.appendChild(h("div", { class: "label" }, st.mysteries[m].title + " · " + cs.length + " indice" + (cs.length > 1 ? "s" : "")));
      cs.forEach(function (k) { b.appendChild(clueRow(st, k)); });
    });
    if (!any) b.appendChild(h("div", { class: "notice" }, "Rien encore. Regarde, écoute, fouille."));
  }
  // ------------------------------------------------------------------ the reader's notes
  // Intent: Notes = the reader's own page in the carnet: free text and the clues they pinned (📌), kept in the save
  // (doc.notes, doc.pins) and shown again with « Précédemment… » when the game is resumed. Why: Clément, 13/11.
  var NOTES_SAVE_MS = 700;
  var NOTES_MAX = 4000;
  function pinsOf(G) { return (G && G.doc && G.doc.pins) || {}; }
  function clueRow(st, k) {
    var G = A.game, on = !!pinsOf(G)[k], solo = !G.multi && !G.ephemeral;
    return h("div", { class: "clue pinnable" }, h("div", { html: md(st.clues[k].text) }),
      solo ? h("button", { class: "btn ghost sm pin" + (on ? " on" : ""), "aria-pressed": on ? "true" : "false", title: on ? "Retirer de mes notes" : "Épingler dans mes notes", "aria-label": on ? "Retirer de mes notes" : "Épingler dans mes notes",
        onclick: function () { var p = G.doc.pins = G.doc.pins || {}; if (p[k]) delete p[k]; else p[k] = Date.now(); persist(); render(); } }, "📌") : null);
  }
  var notesTimer = null;
  function tabNotes(b, st, s) {
    var G = A.game;
    if (G.multi || G.ephemeral) { b.appendChild(h("div", { class: "notice" }, "Les notes se gardent dans une partie à soi.")); return; }
    var pins = Object.keys(pinsOf(G)).filter(function (k) { return st.clues && st.clues[k] && s.clues[k]; });
    b.appendChild(h("div", { class: "label" }, "Indices épinglés"));
    if (!pins.length) b.appendChild(h("div", { class: "small muted" }, "Aucun. Dans l'onglet Indices, 📌 en garde un ici."));
    pins.forEach(function (k) { b.appendChild(clueRow(st, k)); });
    b.appendChild(h("label", { class: "label", for: "notes-area" }, "Mes notes"));
    var saved = h("span", { class: "small muted" }, "");
    var ta = h("textarea", { id: "notes-area", class: "notes", rows: 9, maxlength: NOTES_MAX, placeholder: "Ce que tu soupçonnes, qui ment, où retourner…" });
    ta.value = G.doc.notes || "";
    ta.addEventListener("input", function () {
      G.doc.notes = ta.value; saved.textContent = "…";
      clearTimeout(notesTimer); notesTimer = setTimeout(function () { persist(); saved.textContent = "Gardé."; }, NOTES_SAVE_MS);
    });
    b.appendChild(ta); b.appendChild(saved);
  }
  function notesRecap(G) {
    var st = G.story, s = G.s, pins = Object.keys(pinsOf(G)).filter(function (k) { return st.clues && st.clues[k] && s.clues[k]; }), txt = (G.doc && G.doc.notes || "").trim();
    if (!txt && !pins.length) return null;
    return h("div", { class: "notes-recap" }, h("span", { class: "label" }, "Mes notes"),
      txt ? h("p", { class: "notes-text" }, txt.length > 400 ? txt.slice(0, 400) + "…" : txt) : null,
      pins.length ? h("ul", { class: "plain small" }, pins.map(function (k) { return h("li", { html: "📌 " + md(st.clues[k].text) }); })) : null,
      h("button", { class: "btn ghost sm", onclick: function () { A.carnet = true; A.carnetTab = "notes"; render(); } }, "Ouvrir mes notes"));
  }
  function tabCompanions(b, st, s) {
    var ks = Object.keys(st.companions || {}).filter(function (k) { return s.met[k]; });
    if (!ks.length) b.appendChild(h("div", { class: "notice" }, "Tu voyages seul."));
    ks.forEach(function (k) {
      var c = st.companions[k];
      b.appendChild(h("div", { class: "itemrow" }, h("b", { class: "with-portrait" }, h("span", { html: portraitOf(st, k, s).replace('width="64" height="64"', 'width="36" height="36"') }), c.name), h("span", { class: "small muted" }, s.met[k] === "party" ? "avec toi" : s.met[k] === "gone" ? "parti" : "rencontré"),
        h("div", { class: "desc" }, c.role || ""),
        h("div", { class: "kv", style: "grid-column:1/-1" }, h("span", { class: "small" }, "Confiance"), bar("conf", s.conf[k] || 0, 100), h("span", { class: "num small" }, s.conf[k] || 0),
          h("span", { class: "small" }, "Crainte"), bar("fear", s.fear[k] || 0, 100), h("span", { class: "num small" }, s.fear[k] || 0))));
    });
  }
  function tabMap(b, st, s) {
    var W = st.world || {}, places = W.places || {}, NS = "http://www.w3.org/2000/svg";
    function svg(tag, attrs, text) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); if (text != null) e.textContent = text; return e; }
    // One map at a time: the one of the place where the hero is (the world, or the maze under the hill).
    var here = s.place || (s.travel && s.travel.from), mapId = (places[here] || {}).map || null;
    var onMap = function (k) { return places[k] && (places[k].map || null) === mapId; };
    var root = svg("svg", { viewBox: "0 0 100 80", role: "img", "aria-label": "Carte des lieux connus" });
    (W.routes || []).forEach(function (r) {
      var a = places[r.from], z = places[r.to]; if (!a || !z || !onMap(r.from) || !(s.known[r.from] && s.known[r.to])) return;
      // a drawn road: a gentle bend, the same for a route every time (its id seeds it)
      var bend = ((hash(r.id) % 100) / 100 - 0.5) * 0.35, mx = (a.x + z.x) / 2 - (z.y - a.y) * bend, my = (a.y + z.y) / 2 + (z.x - a.x) * bend;
      root.appendChild(svg("path", { d: "M" + a.x + " " + a.y + " Q" + mx.toFixed(2) + " " + my.toFixed(2) + " " + z.x + " " + z.y, fill: "none", stroke: "var(--muted)", "stroke-linecap": "round", "stroke-width": s.routesDone[r.id] ? 0.7 : 0.4, "stroke-dasharray": s.routesDone[r.id] ? "" : "1.2 1.2" }));
    });
    Object.keys(places).forEach(function (k) {
      if (!s.known[k] || !onMap(k)) return; var p = places[k], isHere = s.place === k;
      var ic = MAP_ICONS[p.ambiance];
      if (ic) root.appendChild(svg("path", { d: ic, transform: "translate(" + p.x + " " + (p.y - 0.6) + ")", fill: isHere ? "var(--accent)" : "var(--ink)" }));
      else root.appendChild(svg("circle", { cx: p.x, cy: p.y, r: isHere ? 2 : 1.3, fill: isHere ? "var(--accent)" : "var(--ink)" }));
      if (ic && isHere) root.appendChild(svg("circle", { cx: p.x, cy: p.y, r: 3.4, fill: "none", stroke: "var(--accent)", "stroke-width": 0.4 }));
      root.appendChild(svg("text", { x: p.x + (ic ? 3.2 : 2.4), y: p.y + 1 }, p.name));
    });
    // Where something happened on the roads: ✦ an encounter, ⛺ a camp.
    var RM = (A.game && A.game.doc.routeMarks) || {};
    (W.routes || []).forEach(function (r) {
      if (!RM[r.id] || !onMap(r.from)) return; var cv = routeCurve(W, r); if (!cv) return;
      RM[r.id].forEach(function (m) { var p = cv.at(m.at), g = svg("text", { x: p.x, y: p.y + 1, "font-size": 2.6, "text-anchor": "middle", fill: "var(--accent)" }, m.kind === "camp" ? "⛺" : "✦"); g.appendChild(svg("title", {}, m.title)); root.appendChild(g); });
    });
    if (s.travel) {
      var r = travelRoute(st, s), cvT = r && routeCurve(W, r);
      if (cvT && !(s.known[r.from] && s.known[r.to])) root.insertBefore(svg("path", { d: cvT.d, fill: "none", stroke: "var(--muted)", "stroke-linecap": "round", "stroke-width": 0.5, "stroke-dasharray": "1 1.4" }), root.firstChild);
      if (cvT) { var pT = cvT.at(travelAt(r, s.travel)); root.appendChild(svg("circle", { cx: pT.x, cy: pT.y, r: 1.6, fill: "var(--accent)" })); }
    }
    // Fog over what is not known yet: an old parchment that clears around the places reached and along the roads
    // walked (Clément, 13/11). Nothing unknown is drawn under it anyway; the fog only shows how much remains.
    if (pref("fog")) {
      var defs = svg("defs", {}), mk = svg("mask", { id: "fogmask", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 100, height: 80 });
      var rg = svg("radialGradient", { id: "fogclear" }); rg.appendChild(svg("stop", { offset: "0.55", "stop-color": "#000" })); rg.appendChild(svg("stop", { offset: "1", "stop-color": "#fff" }));
      var blur = svg("filter", { id: "fogblur", x: "-20%", y: "-20%", width: "140%", height: "140%" }); blur.appendChild(svg("feGaussianBlur", { stdDeviation: 2.2 }));
      var tex = svg("filter", { id: "fogtex", x: 0, y: 0, width: "100%", height: "100%" });
      tex.appendChild(svg("feTurbulence", { type: "fractalNoise", baseFrequency: 0.06, numOctaves: 3, seed: hash(st.id) % 97, result: "n" }));
      tex.appendChild(svg("feColorMatrix", { in: "n", type: "matrix", values: "0 0 0 0 0.70  0 0 0 0 0.62  0 0 0 0 0.47  0 0 0 -0.7 1.3", result: "c" }));
      tex.appendChild(svg("feComposite", { in: "c", in2: "SourceGraphic", operator: "in" }));
      defs.appendChild(rg); defs.appendChild(blur); defs.appendChild(tex);
      mk.appendChild(svg("rect", { x: 0, y: 0, width: 100, height: 80, fill: "#fff" }));
      var clear = svg("g", { filter: "url(#fogblur)" });
      Object.keys(places).forEach(function (k) { if (s.known[k] && onMap(k)) clear.appendChild(svg("circle", { cx: places[k].x, cy: places[k].y, r: 13, fill: "url(#fogclear)" })); });
      (W.routes || []).forEach(function (r) {
        if (!onMap(r.from) || !(s.routesDone[r.id] || (s.travel && s.travel.route === r.id))) return; var cv = routeCurve(W, r); if (cv) clear.appendChild(svg("path", { d: cv.d, stroke: "#000", "stroke-width": 9, fill: "none", "stroke-linecap": "round" }));
      });
      mk.appendChild(clear); defs.appendChild(mk); root.insertBefore(defs, root.firstChild);
      root.appendChild(svg("rect", { x: 0, y: 0, width: 100, height: 80, fill: "#b39c74", filter: "url(#fogtex)", mask: "url(#fogmask)", opacity: 0.95, class: "fog" }));
    }
    // compass rose
    root.appendChild(svg("path", { d: "M94 4 L95.2 8 L94 7.3 L92.8 8 Z", fill: "var(--muted)" }));
    root.appendChild(svg("text", { x: 93.3, y: 3.4, "font-size": 2.4, fill: "var(--muted)" }, "N"));
    b.appendChild(h("div", { class: "map" }, root));
    Object.keys(places).forEach(function (k) { if (s.known[k] && onMap(k)) b.appendChild(h("div", { class: "small" }, h("b", null, places[k].name), " · ", h("span", { class: "muted" }, places[k].desc || ""))); });
  }
  // Little drawn signs for the map, by place ambiance (centred on the place, about 4 units wide).
  var MAP_ICONS = {
    foret: "M-1.8 1.2 L0 -2.4 L1.8 1.2 Z M-0.3 1.2 h0.6 v0.8 h-0.6 Z", montagne: "M-2.4 1.4 L-0.6 -2 L0.4 -0.4 L1.1 -1.3 L2.6 1.4 Z", neige: "M-2.4 1.4 L-0.6 -2 L0.4 -0.4 L1.1 -1.3 L2.6 1.4 Z",
    ville: "M-2 1.4 V-0.6 L-1 -1.6 L0 -0.6 V1.4 Z M0.4 1.4 V-1.4 L1.3 -2.4 L2.2 -1.4 V1.4 Z", village: "M-1.6 1.2 V-0.4 L0 -1.8 L1.6 -0.4 V1.2 Z", chateau: "M-2 1.4 V-1.6 h0.8 v0.6 h0.8 v-0.6 h0.8 v0.6 h0.8 v-0.6 h0.8 V1.4 Z",
    temple: "M-2 1.4 V-0.4 L0 -1.8 L2 -0.4 V1.4 Z", souterrain: "M-2 1.4 Q-2 -1.8 0 -1.8 Q2 -1.8 2 1.4 h-1.2 Q0.8 -0.6 0 -0.6 Q-0.8 -0.6 -0.8 1.4 Z",
    eau: "M-2 0 q1 -1 2 0 q1 1 2 0 v0.6 q-1 1 -2 0 q-1 -1 -2 0 Z", mer: "M-2 0 q1 -1 2 0 q1 1 2 0 v0.6 q-1 1 -2 0 q-1 -1 -2 0 Z", champs: "M-2 1 h4 v0.5 h-4 Z M-1.5 0 h3 v0.5 h-3 Z M-1 -1 h2 v0.5 h-2 Z",
  };
  function tabPeople(b, st, s) {
    var ks = Object.keys(s.people || {});
    if (!ks.length) b.appendChild(h("div", { class: "notice" }, "Personne encore."));
    ks.forEach(function (k) { var p = st.people[k]; if (p) b.appendChild(h("div", { class: "itemrow" }, h("b", { class: "with-portrait" }, h("span", { html: personFace(st, k, 36) }), p.name), h("span"), h("div", { class: "desc" }, p.desc || ""))); });
    var fs = Object.keys(st.factions || {}).filter(function (k) { return s.fac && s.fac[k] != null; });
    if (!fs.length) return;
    b.appendChild(h("div", { class: "label" }, "Factions"));
    fs.forEach(function (k) {
      var v = s.fac[k];
      b.appendChild(h("div", { class: "faction" }, h("span", { html: Heraldry.blason(st.id + "|" + k, (st.blasons || {})[k], 40) }),
        h("div", null, h("b", null, st.factions[k]), h("div", { class: "small muted" }, v >= 40 ? "Ils te font confiance." : v > 0 ? "Plutôt bien disposés." : v === 0 ? "Ils ne savent que penser de toi." : v > -40 ? "Méfiants." : "Hostiles."))));
    });
  }
  function tabLog(b, st, s) {
    var log = A.game.log.slice().reverse(), lastT = null;
    if (!A.game.multi && !A.game.ephemeral) b.appendChild(h("button", { class: "btn sm", onclick: openRecit }, "📖 Mon aventure : la partie racontée comme un livre"));
    log.forEach(function (e) {
      if (e.t !== lastT) { b.appendChild(h("div", { class: "logday" }, e.t)); lastT = e.t; }
      b.appendChild(h("div", { class: "logentry" }, h("b", null, e.title || ""), e.ev && e.ev.length ? h("div", { class: "small muted" }, e.ev.join(" · ")) : null));
    });
  }
  function tabBackstage(b, st, s) {
    b.appendChild(h("div", { class: "small muted" }, "Pour qui écrit les histoires : les marques posées par tes choix, et le test de tous les chemins."));
    b.appendChild(h("pre", { class: "report" }, Object.keys(s.flags).sort().join("\n") || "(aucune marque)"));
    b.appendChild(h("div", { class: "row" },
      h("button", { class: "btn sm", onclick: function () { A.report = "Le test tourne…"; render(); setTimeout(function () { var r = V.validate(clone(st), { games: 300 }); A.report = reportText(r); M.setRng(null); render(); }, 30); } }, "Tester tous les chemins (300 parties)"),
      canDownload() ? h("button", { class: "btn sm", onclick: function () { download("partie-" + s.name + ".json", JSON.stringify(A.game.doc)); } }, "Exporter la partie") : null));
    if (A.report) b.appendChild(h("pre", { class: "report" }, A.report));
  }
  function reportText(r) {
    var out = [r.errors.length ? r.errors.length + " erreur(s)" : "Aucune erreur bloquante."];
    if (r.sim) out.push(r.sim.games + " parties · fins : " + Object.keys(r.sim.endings).map(function (k) { return k + " ×" + r.sim.endings[k]; }).join(", "));
    return out.concat(r.errors, r.warnings.slice(0, 60)).join("\n");
  }

  // ------------------------------------------------------------------ reading preferences (per reader)
  // Intent: pref(Key) -> Value = the reader's own setting, else the default
  // Why: Clément (12/11): text size, spacing, theme, voice, real dice, sound… follow the reader, not the device.
  var PREFS = { skin: "histoire", size: "m", spacing: "normal", theme: "auto", font: "livre", lettrine: true, voice: "", highlight: true, ruler: false, dialogue: false, glossary: true, nudge: false, syllables: false, voiceChoice: false, autoListen: true, battlePlan: true, sfx: true, shakeDice: false, fog: true, rate: 1, autoRead: false, dice: "ecran", ambiance: false, music: false, volume: 0.6 };
  var SIZES = { s: ["Petit", 16], m: ["Normal", 18], l: ["Grand", 21], xl: ["Très grand", 24] };
  var SPACINGS = { serre: ["Serré", 1.5], normal: ["Normal", 1.72], aere: ["Aéré", 2] };
  var THEMES = { auto: "Comme l'appareil", light: "Clair", sepia: "Sépia", dark: "Sombre" };
  // lisible (Clément, 12/11): Atkinson Hyperlegible, letters hard to confuse, for young or dyslexic readers; it then dresses the whole page.
  var FONTS = { livre: ["Livre", "var(--serif)"], droite: ["Sans empattement", "var(--sans)"], lisible: ["Lecture facile (Atkinson)", "'Atkinson Hyperlegible', var(--sans)"],
    // grimoire (Clément, 13/11): a medieval book for dyslexic readers, Atkinson's letters with book serifs and illuminated capitals
    grimoire: ["Grimoire (médiéval lisible)", "'Grimoire Clair', var(--sans)"] };
  // Skins (Clément, 12/11): each story says how its book looks (`skin` in the story); the reader may keep it or choose.
  var SKINS = { histoire: "Celui de l'histoire", parchemin: "Parchemin", givre: "Givre", sable: "Sable", enluminure: "Enluminure", sobre: "Sobre" };
  var CLAUDE_VOICES = { buttery: "Chaude", airy: "Légère", glassy: "Claire", rounded: "Ronde" };
  function prefToggle(k, title, hint) {
    return h("label", { class: "toggle" }, h("input", { type: "checkbox", checked: !!pref(k), onchange: function (e) { setPref(k, e.target.checked); } }),
      h("span", null, h("b", null, title), hint ? h("br") : null, hint ? h("span", { class: "small muted" }, hint) : null));
  }
  function prefsOf() { return (A.profile && A.profile.prefs) || lsGet("prefs") || {}; }
  function pref(k) { var p = prefsOf(); return p[k] != null ? p[k] : PREFS[k]; }
  function setPref(k, v) {
    var p = clone(prefsOf()); p[k] = v;
    if (A.profile) { A.profile.prefs = p; var prof = A.profile; clearTimeout(setPref.t); setPref.t = setTimeout(function () { Store.put("profils", prof.id, prof).catch(function () {}); }, 600); }
    else lsSet("prefs", p);
    render();
  }
  function applyPrefs() {
    var r = document.documentElement, th = pref("theme");
    if (th === "auto") r.removeAttribute("data-theme"); else r.setAttribute("data-theme", th);
    // the skin: only inside a book (creation, reading, the book of the adventure); the library stays plain
    var st = (A.screen === "game" || A.screen === "recit") && A.game ? A.game.story : A.screen === "create" && A.create ? A.create.story : null;
    // A skin the reader chose shows everywhere, the library included; the story's own skin shows inside its book.
    var sk = pref("skin"); if (sk === "histoire") sk = st && SKINS[st.skin] ? st.skin : "sobre";
    if (sk === "sobre") r.removeAttribute("data-skin"); else r.setAttribute("data-skin", sk);
    r.style.setProperty("--read-size", (SIZES[pref("size")] || SIZES.m)[1] + "px");
    r.style.setProperty("--read-lh", String((SPACINGS[pref("spacing")] || SPACINGS.normal)[1]));
    r.style.setProperty("--read-font", (FONTS[pref("font")] || FONTS.livre)[1]);
    if (pref("font") === "lisible" || pref("font") === "grimoire") r.setAttribute("data-font", pref("font")); else r.removeAttribute("data-font");
    if (pref("lettrine")) r.removeAttribute("data-lettrine"); else r.setAttribute("data-lettrine", "non");
  }
  function seg(map, key, label) {
    return h("div", { class: "stack tight" }, h("span", { class: "label" }, label), h("div", { class: "seg", role: "group", "aria-label": label },
      Object.keys(map).map(function (k) { var l = Array.isArray(map[k]) ? map[k][0] : map[k]; return h("button", { class: "btn sm" + (pref(key) === k ? " on" : ""), "aria-pressed": pref(key) === k ? "true" : "false", onclick: function () { setPref(key, k); } }, l); })));
  }

  // ------------------------------------------------------------------ dialogs: settings, report, real dice, bookmark
  function renderModal() {
    var m = A.modal, close = function () { if (m.kind === "send" || m.kind === "receive") Transfer.stop(); A.modal = null; render(); };
    var box = h("div", { class: "modal", role: "dialog", "aria-modal": "true" });
    var bg = h("div", { class: "drawer-bg", onclick: close });
    ({ prefs: modalPrefs, report: modalReport, dice: modalDice, mark: modalMark, bedtime: modalBedtime, send: modalSend, receive: modalReceive, words: modalWords, sync: modalSync, chapter: modalChapter, shake: modalShake, adult: modalAdult })[m.kind](box, close, m);
    app.appendChild(bg); app.appendChild(box);
    var f = box.querySelector("[autofocus]"); if (f) setTimeout(function () { f.focus(); }, 0);
  }
  function modalHead(box, title, close) { box.appendChild(h("div", { class: "drawer-head" }, h("h2", null, title), h("button", { class: "btn sm", onclick: close }, "Fermer"))); }
  function modalPrefs(box, close) {
    modalHead(box, "Réglages de lecture" + (A.profile ? " · " + A.profile.name : ""), close);
    var b = h("div", { class: "drawer-body" });
    b.appendChild(seg(SKINS, "skin", "Habillage du livre"));
    b.appendChild(seg(SIZES, "size", "Taille du texte"));
    b.appendChild(seg(SPACINGS, "spacing", "Interligne"));
    b.appendChild(seg(FONTS, "font", "Police"));
    if (pref("font") === "grimoire") b.appendChild(prefToggle("lettrine", "Grande lettrine", "Chaque page s'ouvre sur une grande lettre enluminée. À couper si elle gêne la lecture du premier mot."));
    b.appendChild(seg(THEMES, "theme", "Thème"));
    b.appendChild(prefToggle("nudge", "Coup de pouce (jeunes lecteurs)", "Un bouton 💡, deux fois par acte, donne une phrase pour s'orienter quand on est perdu. Il ne révèle jamais la suite."));
    b.appendChild(prefToggle("glossary", "Expliquer les mots rares", "Les mots peu courants sont soulignés de pointillés : on les touche pour lire leur sens."));
    b.appendChild(prefToggle("syllables", "Syllabes en couleurs", "Une syllabe sur deux change de couleur, comme dans les méthodes de lecture."));
    b.appendChild(prefToggle("fog", "Carte sous le brouillard", "La carte du carnet se dévoile autour des lieux atteints et le long des routes parcourues."));
    b.appendChild(prefToggle("battlePlan", "Plan de bataille", "Pendant un combat, un petit plan montre les rangs, les adversaires et les coups de la dernière passe."));
    b.appendChild(prefToggle("ruler", "Règle de lecture", "Une bande suit la ligne en cours et assombrit le reste. Touche une ligne pour l'y amener ; sur ordinateur, les flèches ↑ ↓."));
    if (VoiceChoice.available()) {
      b.appendChild(prefToggle("voiceChoice", "Choisir à la voix", "Un bouton 🎤 écoute le lecteur : « le deuxième », « le dernier », ou quelques mots du choix."));
      if (pref("voiceChoice") && A.tts) b.appendChild(prefToggle("autoListen", "Écouter après la lecture", "Quand une page a été lue jusqu'au bout, le micro s'ouvre tout seul pour le choix."));
    }
    b.appendChild(h("p", { class: "prose sample" }, "Le vent tourna, et la neige se mit à tomber de biais sur la route."));
    if (A.tts) {
      var voices = A.tts.browser ? (A.tts.voices() || []) : Object.keys(CLAUDE_VOICES);
      var vs = h("select", { "aria-label": "Voix", onchange: function (e) { setPref("voice", e.target.value); } },
        h("option", { value: "" }, A.tts.browser ? "La meilleure de l'appareil" : "Voix par défaut"), voices.map(function (v) { return h("option", { value: v, selected: pref("voice") === v }, A.tts.browser ? A.tts.label(v) : CLAUDE_VOICES[v]); }));
      var natural = !A.tts.browser || voices.some(function (v) { return A.tts.quality({ name: v }) >= 2; });
      var listen = h("button", { type: "button", class: "btn sm", onclick: function () {
        var o = { language: "fr-FR", rate: pref("rate") }; if (A.tts.browser) o.voiceName = pref("voice") || ""; else if (CLAUDE_VOICES[pref("voice")]) o.voice = pref("voice");
        A.tts.speak([{ text: "Le vent tourna, et la neige se mit à tomber de biais sur la route. « Avance », souffla-t-elle." }], o);
      } }, "▶ Écouter");
      var rate = h("input", { type: "range", min: 0.7, max: 1.5, step: 0.05, value: pref("rate"), "aria-label": "Vitesse de lecture", onchange: function (e) { setPref("rate", +e.target.value); } });
      b.appendChild(h("div", { class: "stack tight" }, h("span", { class: "label" }, "Lecture à voix haute"),
        h("div", { class: "row" }, vs, listen, h("label", { class: "row small" }, "Vitesse", rate, h("span", { class: "mono" }, "×" + Number(pref("rate")).toFixed(2)))),
        A.tts.browser ? renderNeural() : null,
        natural || Neural.manifest ? null : h("p", { class: "small muted" }, "Cet appareil n'a pas de voix française naturelle. Sur iPhone ou iPad : Réglages → Accessibilité → Contenu énoncé → Voix → Français, puis télécharger une voix « améliorée » ou « premium ». Sur Android : installer « Services vocaux de Google ». Sur ordinateur, Edge propose des voix naturelles."),
        A.tts.browser ? prefToggle("highlight", "Surligner la phrase lue", "La phrase que la voix lit s'éclaire dans le texte.") : null,
        A.tts.browser ? prefToggle("dialogue", "Une autre voix pour les personnages", "Le récit est lu par une voix, les paroles entre « » par une autre. Avec les voix de qualité, installe les deux.") : null,
        h("label", { class: "toggle" }, h("input", { type: "checkbox", checked: pref("autoRead"), onchange: function (e) { setPref("autoRead", e.target.checked); } }), h("span", null, h("b", null, "Lire chaque page à voix haute"), h("br"), h("span", { class: "small muted" }, "Après chaque choix, la page suivante est lue sans appuyer sur rien.")))));
    }
    b.appendChild(seg({ ecran: "L'écran lance", vrais: "Je lance mes dés" }, "dice", "Les dés"));
    b.appendChild(h("p", { class: "small muted" }, "Avec tes dés : deux dés à dix faces, un pour les dizaines, un pour les unités (00 = 100). Tu tapes le résultat, le livre fait le calcul. Les compagnons et les adversaires lancent toujours à l'écran."));
    if (Shake.available()) b.appendChild(h("label", { class: "toggle" }, h("input", { type: "checkbox", checked: !!pref("shakeDice"), onchange: function (e) {
      var on = e.target.checked; if (!on) { setPref("shakeDice", false); return; }
      Shake.ask().then(function (r) { setPref("shakeDice", r === "granted"); if (r !== "granted") flash("L'appareil refuse de donner ses mouvements à la page.", true); });
    } }), h("span", null, h("b", null, "Lancer les dés en secouant"), h("br"), h("span", { class: "small muted" }, "Pour un jet, on secoue le téléphone ; un bouton reste là pour lancer sans secouer. Coupé par défaut."))));
    b.appendChild(h("div", { class: "stack tight" }, h("span", { class: "label" }, "Ambiance sonore"),
      h("label", { class: "toggle" }, h("input", { type: "checkbox", checked: pref("ambiance"), onchange: function (e) { setPref("ambiance", e.target.checked); } }), h("span", null, h("b", null, "Jouer l'ambiance du lieu"), h("br"), h("span", { class: "small muted" }, "Vent, pluie, forêt, ville, souterrain… composés par l'appareil, sans fichier."))),
      prefToggle("music", "Petite musique", "Un air discret, propre à chaque région, et un autre pour les combats ; composé par l'appareil."),
      prefToggle("sfx", "Bruitages de combat", "Une lame qui sonne, une flèche qui siffle, un sort qui scintille ; même volume que l'ambiance."),
      h("label", { class: "row small" }, "Volume", h("input", { type: "range", min: 0, max: 1, step: 0.05, value: pref("volume"), "aria-label": "Volume de l'ambiance", onchange: function (e) { setPref("volume", +e.target.value); } }))));
    box.appendChild(b);
  }
  function modalReport(box, close) {
    modalHead(box, "Signaler quelque chose", close);
    var G = A.game, b = h("div", { class: "drawer-body" });
    var ta = h("textarea", { rows: 6, autofocus: true, placeholder: "Ce qui cloche : un texte qui ne colle pas, un choix bizarre, un bouton qui ne fait rien…", "aria-label": "Ce qui cloche" });
    b.appendChild(h("p", { class: "small muted" }, "Avec ta note, le livre garde la page où tu es, l'état de la partie et tes derniers choix. Claude pourra les lire et corriger à partir du vrai cas."));
    b.appendChild(ta);
    b.appendChild(h("div", { class: "row" }, h("button", { class: "btn primary", onclick: function () {
      var note = ta.value.trim(); if (!note) { ta.focus(); return; }
      var s = G.s, v = M.view(G.story, s), id = uid();
      var doc = { created: Date.now(), updated: Date.now(), lecteur: A.profile ? A.profile.name : "", profil: A.profile ? A.profile.id : "", story: G.story.id, storyVersion: G.story.version || 1,
        node: s.node, title: v.title, where: where(G.story, s), note: note, tour: s.turn || 0,
        derniers: G.log.slice(-6).map(function (e) { return (e.title || "") + (e.c ? " → « " + e.c + " »" : ""); }),
        evenements: (s.events || []).map(function (e) { return e.text; }), choix: v.choices.map(function (c) { return (c.ok ? "" : "[grisé] ") + c.label + (c.why && !c.ok ? " (" + c.why + ")" : ""); }),
        state: JSON.stringify(s) };
      Store.put("signalements", id, doc).then(function () { A.notice = "Merci, c'est noté. Le signalement est enregistré avec la page et la partie."; }, function () { A.notice = "Signalement gardé dans ce navigateur seulement (l'envoi a échoué)."; }).then(render);
      A.modal = null; A.notice = "Signalement enregistré."; render();
    } }, "Enregistrer le signalement")));
    box.appendChild(b);
  }
  // Real dice: the first throw, then again while the open roll goes on (96-100 adds, 01-05 subtracts; again on 96+).
  function modalDice(box, close, m) {
    var c = m.c;
    modalHead(box, "À toi de lancer", close);
    var b = h("div", { class: "drawer-body" });
    var more = m.rolls.length > 0;
    b.appendChild(h("p", null, h("b", null, c.label), c.chance != null ? h("span", { class: "muted" }, " · " + c.chance + " % de chances") : null));
    if (more) b.appendChild(h("div", { class: "notice" }, m.rolls[0] >= 96 ? "Jet ouvert vers le haut ! Relance, ton résultat s'ajoute." : "Jet ouvert vers le bas… Relance, ton résultat se retranche.", " Déjà : " + m.rolls.join(", ") + "."));
    else b.appendChild(h("p", { class: "small muted" }, "Lance deux dés à dix faces : les dizaines, puis les unités. 00 vaut 100, 0 et 5 font 5."));
    var inp = h("input", { type: "number", min: 1, max: 100, inputmode: "numeric", autofocus: true, "aria-label": "Résultat des dés", style: "width:7em;font-size:22px" });
    var go = function () {
      var x = parseInt(inp.value, 10); if (inp.value.trim() === "00") x = 100;
      if (!(x >= 1 && x <= 100)) { inp.focus(); return; }
      m.rolls.push(x);
      var first = m.rolls[0], again = m.rolls.length === 1 ? (x >= 96 || x <= 5) : x >= 96;
      if (again) { render(); return; }
      A.modal = null; pick(Object.assign({}, c, { diced: m.rolls.slice() }));
    };
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
    b.appendChild(h("div", { class: "row" }, inp, h("button", { class: "btn primary", onclick: go }, "Valider"),
      h("button", { class: "btn ghost", onclick: function () { A.modal = null; pick(Object.assign({}, c, { diced: m.rolls.slice() })); } }, more ? "L'écran lance la suite" : "L'écran lance pour moi")));
    box.appendChild(b);
  }
  function modalMark(box, close) {
    var G = A.game, s = G.s;
    modalHead(box, "Poser un marque-page", close);
    var b = h("div", { class: "drawer-body" });
    var inp = h("input", { autofocus: true, maxlength: 40, value: (M.view(G.story, s).title || "").replace(/\*/g, "") + " · " + M.timeLabel(s), "aria-label": "Nom du marque-page" });
    var save = function () {
      var d = G.doc; d.marks = d.marks || [];
      d.marks.push({ id: uid(), name: inp.value.trim() || "Marque-page", at: Date.now(), where: where(G.story, s), state: JSON.stringify(s), level: M.level(s) });
      if (d.marks.length > MARKS_MAX) d.marks = d.marks.slice(-MARKS_MAX);
      A.modal = null; A.notice = "Marque-page posé : « " + d.marks[d.marks.length - 1].name + " ». Le carnet les garde (onglet Marque-pages)."; persist(); render();
    };
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") save(); });
    b.appendChild(h("p", { class: "small muted" }, "Tu pourras revenir ici plus tard depuis le carnet, même après bien des choix. Le livre en garde " + MARKS_MAX + " par partie ; au-delà, le plus ancien s'efface."));
    b.appendChild(h("div", { class: "row" }, inp, h("button", { class: "btn primary", onclick: save }, "Poser")));
    box.appendChild(b);
  }
  function tabMarks(b, st, s) {
    var G = A.game, marks = (G.doc.marks || []).slice().reverse();
    if (G.multi) { b.appendChild(h("div", { class: "notice" }, "Pas de marque-pages dans une partie à plusieurs.")); return; }
    if (!marks.length) b.appendChild(h("div", { class: "notice" }, "Aucun marque-page. Le bouton « 🔖 Marque-page » sous la page en pose un."));
    marks.forEach(function (mk) {
      b.appendChild(h("div", { class: "itemrow" }, h("b", null, mk.name), h("span", { class: "small muted" }, when(mk.at) + " · niveau " + (mk.level || "?")),
        h("div", { class: "row", style: "grid-column:1/-1" },
          h("button", { class: "btn sm primary", onclick: function () {
            stopSpeaking();
            G.undo.push(JSON.stringify(G.s)); if (G.undo.length > UNDO_MAX) G.undo.shift();
            G.s = upgradeState(st, JSON.parse(mk.state)); G.s.events = [{ text: "Tu reviens au marque-page « " + mk.name + " ». (« Choix précédent » te ramène où tu étais.)", cls: "" }];
            A.carnet = null; persist(); render(); window.scrollTo(0, 0);
          } }, "Revenir ici"),
          h("button", { class: "btn sm ghost", onclick: function () { G.doc.marks = G.doc.marks.filter(function (x) { return x.id !== mk.id; }); persist(); render(); } }, "Effacer"))));
    });
  }

  // ------------------------------------------------------------------ "Précédemment…", the timeline, the dice
  function renderRecap(G) {
    var lines = G.log.slice(-7, -1).filter(function (e) { return e.title; });
    if (!lines.length) return null;
    var keep = /Indice|Quête|rejoint|quitte|Haut fait|Niveau|Acheté|Tu reçois|Tu obtiens/;
    return h("aside", { class: "recap" }, h("div", { class: "row" }, h("span", { class: "label grow" }, "Précédemment…"), h("button", { class: "btn ghost sm", onclick: function () { A.recap = false; render(); } }, "Fermer")),
      h("ol", null, lines.map(function (e) {
        var evs = (e.ev || []).filter(function (x) { return keep.test(x); }).slice(0, 2);
        return h("li", null, h("b", null, String(e.title).replace(/\*/g, "")), e.c ? h("span", null, " : tu as choisi « " + e.c + " »") : null, evs.length ? h("div", { class: "small muted" }, evs.join(" · ")) : null);
      })));
  }
  var REDUCED = (function () { try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } })();
  function rollBadge(e) {
    if (!/roll/.test(e.cls || "")) return null;
    var n = e.roll ? e.roll.die : +((/d100 ouvert (?:\([^)]*\) )?(-?\d+)/.exec(e.text) || [])[1]);
    if (!(n === n) || n == null) return null;
    var el = h("span", { class: "die", "aria-hidden": "true" }, String(n));
    if (A.rollAnim && !REDUCED) {
      el.classList.add("rolling"); var k = 0;
      var t = setInterval(function () { k++; if (k >= 9) { clearInterval(t); el.textContent = String(n); el.classList.remove("rolling"); return; } el.textContent = String(1 + Math.floor(Math.random() * 100)); }, 55);
    }
    return el;
  }
  function tabFrise(b, st, s) {
    var log = A.game.log, acts = {}; (st.acts || []).forEach(function (a) { acts[a.id] = a.title; });
    if (!A.game.multi) b.appendChild(h("div", { class: "seg" }, [["liste", "La frise"], ["arbre", "Le chemin dans le livre"]].map(function (o) {
      var on = (A.friseView || "liste") === o[0];
      return h("button", { class: "btn sm" + (on ? " on" : ""), "aria-pressed": on ? "true" : "false", onclick: function () { A.friseView = o[0]; render(); } }, o[1]);
    })));
    if (A.friseView === "arbre" && !A.game.multi) { renderBookPath(b, st, s); return; }
    if (!log.length) { b.appendChild(h("div", { class: "notice" }, "Rien encore.")); return; }
    var left = log.reduce(function (n, e) { return n + (e.alt || 0); }, 0);
    b.appendChild(h("div", { class: "small muted" }, log.length + " pages lues" + (left ? " · " + left + " chemin" + (left > 1 ? "s" : "") + " laissé" + (left > 1 ? "s" : "") + " de côté en route" : "") + (log.length >= LOG_MAX ? " (les plus anciennes ne sont plus gardées)" : "")));
    var ol = h("ol", { class: "frise" }), lastAct = null;
    log.forEach(function (e, i) {
      if (e.act && e.act !== lastAct) { ol.appendChild(h("li", { class: "frise-act" }, acts[e.act] || e.act)); lastAct = e.act; }
      ol.appendChild(h("li", { class: i === log.length - 1 ? "now" : "" }, h("b", null, String(e.title || "").replace(/\*/g, "")), h("span", { class: "small muted" }, " · " + e.t),
        e.c ? h("div", { class: "small" }, "→ « " + e.c + " »") : null,
        e.alt ? h("div", { class: "small muted" }, e.alt + " autre" + (e.alt > 1 ? "s" : "") + " chemin" + (e.alt > 1 ? "s" : "") + " ici") : null));
    });
    b.appendChild(ol);
  }

  // ------------------------------------------------------------------ the path through the book
  // Intent: bookPath(Story, State, Act?) -> { layers: [[Node]], edges: [[from, to]], read, left } = the passages read,
  // laid out by distance from the start, each followed by the ways it offered: the ones taken lead on, the others end
  // in a grey dot with no title. Return links (back) are left out, they would only draw loops.
  // Why: Clément, 13/11 « le chemin dans le livre », to see how much of the book remains without telling what.
  var PATH_DX = 18, PATH_DY = 30, PATH_R = 4.5;
  function passageTargets(c) {
    var out = [];
    (function add(to) { if (Array.isArray(to)) to.forEach(function (x) { add(x && x.to); }); else if (typeof to === "string" && to.charAt(0) !== "@") out.push(to); })([{ to: c.to }, { to: c.win && c.win.to }, { to: c.lose && c.lose.to }]);
    return out;
  }
  function bookPath(st, s, act) {
    var seen = s.seen || {}, P = st.passages, order = Object.keys(seen).filter(function (k) { return P[k]; });
    var idx = {}, from = {}, parent = {}, actOf = {}, depth = {};
    order.forEach(function (k, n) { idx[k] = n; });
    // `seen` keeps the order of reading: a page hangs from the last page read before it that offered a way to it,
    // else from the page read just before (a road, an event, a meeting led there).
    order.forEach(function (k) {
      ((P[k] || {}).choices || []).forEach(function (c) {
        if (c.back != null && c.back !== false) return;
        passageTargets(c).forEach(function (t) { if (idx[t] > idx[k]) from[t] = k; });
      });
    });
    var inAct = function (k) { return !act || actOf[k] === act; };
    order.forEach(function (k, n) {
      parent[k] = from[k] || (n ? order[n - 1] : null);
      actOf[k] = P[k].act || (parent[k] ? actOf[parent[k]] : "") || "";
      depth[k] = parent[k] && inAct(parent[k]) ? depth[parent[k]] + 1 : 0;
    });
    var nodes = order.filter(inAct), layers = [], edges = [], ghosts = {}, left = 0;
    nodes.forEach(function (k) {
      var pa = parent[k] && inAct(parent[k]) ? parent[k] : null;
      (layers[depth[k]] = layers[depth[k]] || []).push({ id: k, read: true, parent: pa });
      if (pa) edges.push([pa, k]);
    });
    nodes.forEach(function (k) {
      var d = depth[k] + 1;
      ((P[k] || {}).choices || []).forEach(function (c) {
        if (c.back != null && c.back !== false) return;
        passageTargets(c).forEach(function (t) {
          if (!P[t] || seen[t] || ghosts[t]) return; ghosts[t] = 1; left++;
          (layers[d] = layers[d] || []).push({ id: "?" + t, read: false, parent: k }); edges.push([k, "?" + t]);
        });
      });
    });
    return { layers: layers.filter(Boolean), edges: edges, read: nodes.length, left: left };
  }
  // Intent: renderBookPath(Element, Story, State) -> () = the tree of « Le chemin dans le livre », one act at a time;
  // a tap on a page read shows its title.
  function renderBookPath(b, st, s) {
    var NS = "http://www.w3.org/2000/svg";
    function svg(tag, attrs, text) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); if (text != null) e.textContent = text; return e; }
    var acts = (st.acts || []).filter(function (x) { return Object.keys(s.seen || {}).some(function (k) { return (st.passages[k] || {}).act === x.id; }); });
    var act = A.pathAct && acts.some(function (x) { return x.id === A.pathAct; }) ? A.pathAct : (s.lastAct || (acts[0] || {}).id || "");
    if (acts.length > 1) b.appendChild(h("div", { class: "seg wrap" }, acts.map(function (x) {
      return h("button", { class: "btn sm" + (x.id === act ? " on" : ""), "aria-pressed": x.id === act ? "true" : "false", onclick: function () { A.pathAct = x.id; A.pathPick = null; render(); } }, x.title);
    })));
    var T = bookPath(st, s, acts.length ? act : null);
    if (!T.read) { b.appendChild(h("div", { class: "notice" }, "Rien encore dans cette partie du livre.")); return; }
    b.appendChild(h("div", { class: "small muted" }, T.read + " page" + (T.read > 1 ? "s" : "") + " lue" + (T.read > 1 ? "s" : "") + " ici · " + (T.left ? T.left + " chemin" + (T.left > 1 ? "s" : "") + " jamais pris, en gris" : "aucun chemin laissé de côté")));
    // place each layer under its parents, in their order
    var pos = {}, wide = 1;
    T.layers.forEach(function (L, d) {
      L.sort(function (x, y) { return ((pos[x.parent] || {}).x || 0) - ((pos[y.parent] || {}).x || 0); });
      wide = Math.max(wide, L.length);
      L.forEach(function (n, i) { pos[n.id] = { x: i, y: d, n: n }; });
    });
    T.layers.forEach(function (L) { var off = (wide - L.length) / 2; L.forEach(function (n) { pos[n.id].x += off; }); });
    var W = wide * PATH_DX + PATH_DX, H = T.layers.length * PATH_DY + PATH_DY / 2;
    var X = function (id) { return PATH_DX + pos[id].x * PATH_DX; }, Y = function (id) { return PATH_DY / 2 + pos[id].y * PATH_DY; };
    var root = svg("svg", { class: "bookpath", viewBox: "0 0 " + W + " " + H, width: W, height: H, role: "img", "aria-label": "Arbre des pages lues" });
    T.edges.forEach(function (e) {
      if (!pos[e[0]] || !pos[e[1]]) return; var x1 = X(e[0]), y1 = Y(e[0]), x2 = X(e[1]), y2 = Y(e[1]), my = (y1 + y2) / 2;
      root.appendChild(svg("path", { d: "M" + x1 + " " + y1 + " C" + x1 + " " + my + " " + x2 + " " + my + " " + x2 + " " + y2, class: e[1].charAt(0) === "?" ? "bp-ghost" : "bp-edge" }));
    });
    Object.keys(pos).forEach(function (id) {
      var n = pos[id].n, here = id === s.node, pk = A.pathPick === id;
      var dot = svg("circle", { cx: X(id), cy: Y(id), r: n.read && (st.passages[id] || {}).hub ? PATH_R + 1.5 : PATH_R, class: n.read ? "bp-read" + (here ? " here" : "") + (pk ? " pick" : "") : "bp-unread" });
      if (n.read) { dot.addEventListener("click", function () { A.pathPick = pk ? null : id; render(); }); dot.appendChild(svg("title", {}, String(st.passages[id].title || "").replace(/\*/g, ""))); }
      root.appendChild(dot);
    });
    b.appendChild(h("div", { class: "bookpath-wrap" }, root));
    if (A.pathPick && st.passages[A.pathPick] && (s.seen || {})[A.pathPick]) b.appendChild(h("div", { class: "small" }, "Page lue : ", h("b", null, String(st.passages[A.pathPick].title || "").replace(/\*/g, ""))));
    b.appendChild(h("div", { class: "small muted" }, "● pages lues · ◉ où tu es · ○ un chemin jamais pris, sans dire où il mène."));
  }

  // ------------------------------------------------------------------ endings found and feats, per reader
  // Intent: keep(Story, State, View, GameDoc) -> () ! writes the reader's profile when something new is earned
  function keepRecords(st, s, v, d) {
    if (A.game.ephemeral || A.game.multi || d.test) return;
    var prof = A.profiles.filter(function (p) { return p.id === d.profil; })[0]; if (!prof) return;
    var rec = prof.records = prof.records || {}, r = rec[st.id] = rec[st.id] || { endings: {}, feats: {} }, changed = false;
    Object.keys(s.feats || {}).forEach(function (k) { if (!r.feats[k]) { r.feats[k] = Date.now(); changed = true; } });
    // Bestiary and atlas: what this reader has met, kept across all their games of this story.
    var cx = r.codex = r.codex || { foes: {}, places: {}, items: {} };
    var add = function (box, k) { if (k && !box[k]) { box[k] = Date.now(); changed = true; } };
    Object.keys(s.beasts || {}).forEach(function (k) { add(cx.foes, k); });
    Object.keys(s.known || {}).forEach(function (k) { if (s.known[k] && (st.world.places || {})[k]) add(cx.places, k); });
    (s.items || []).forEach(function (k) { add(cx.items, k); });
    if (v.kind === "end") { var e = M.endingOf(st, s); if (e && !r.endings[e.id]) { r.endings[e.id] = Date.now(); changed = true; } }
    if (changed) { prof.updated = Date.now(); Store.put("profils", prof.id, prof).catch(function () {}); }
  }
  function recordOf(prof, id) { return ((prof && prof.records) || {})[id] || { endings: {}, feats: {} }; }
  function renderRecords(m) {
    var st = A.builtins[m.id]; if (!A.profile || !st) return null;
    var r = recordOf(A.profile, m.id), ends = M.endingsOf(st), feats = M.featsOf(st);
    var nE = ends.filter(function (e) { return r.endings[e.id]; }).length, nF = feats.filter(function (f) { return r.feats[f.id]; }).length;
    var key = "rec:" + m.id, open = A.open[key];
    var box = h("div", { class: "records" }, h("button", { class: "btn ghost sm", "aria-expanded": open ? "true" : "false", onclick: function () { A.open[key] = !open; render(); } },
      "Fins trouvées : " + nE + " sur " + ends.length + " · Hauts faits : " + nF + " sur " + feats.length + (open ? " ▴" : " ▾")));
    if (open) {
      box.appendChild(h("div", { class: "small" }, h("div", { class: "label" }, "Fins de " + A.profile.name),
        h("ul", { class: "plain" }, ends.map(function (e) { return r.endings[e.id] ? h("li", null, "✦ " + e.title) : h("li", { class: "muted" }, "· · · une fin encore inconnue"); }))));
      box.appendChild(h("div", { class: "small" }, h("div", { class: "label" }, "Hauts faits"),
        h("ul", { class: "plain" }, feats.map(function (f) { return r.feats[f.id] ? h("li", null, "★ " + f.title + (f.desc ? " · " : ""), h("span", { class: "muted" }, f.desc)) : f.story ? h("li", { class: "muted" }, "☆ un haut fait caché") : h("li", { class: "muted" }, "☆ " + f.title + " · " + f.desc); }))));
    }
    return box;
  }
  function endingNote(st, s) {
    var e = M.endingOf(st, s); if (!e || A.game.ephemeral) return null;
    var r = recordOf(A.profiles.filter(function (p) { return p.id === A.game.doc.profil; })[0], st.id), n = M.endingsOf(st).filter(function (x) { return r.endings[x.id]; }).length;
    return h("div", { class: "notice" }, "Fin découverte : « " + e.title + " ». " + (A.profile ? A.profile.name + " en a trouvé " + n + " sur " + M.endingsOf(st).length + "." : ""));
  }
  function tabFeats(b, st, s) {
    var all = M.featsOf(st), mine = s.feats || {};
    b.appendChild(h("div", { class: "small muted" }, "Ceux de cette partie. La bibliothèque garde ceux de tout le lecteur."));
    all.forEach(function (f) {
      if (mine[f.id]) b.appendChild(h("div", { class: "clue" }, h("b", null, "★ " + f.title), h("div", { class: "small muted" }, f.desc)));
      else if (!f.story) b.appendChild(h("div", { class: "small muted" }, "☆ " + f.title + " · " + f.desc));
    });
    var hidden = all.filter(function (f) { return f.story && !mine[f.id]; }).length;
    if (hidden) b.appendChild(h("div", { class: "small muted" }, "☆ et " + hidden + " haut" + (hidden > 1 ? "s" : "") + " fait" + (hidden > 1 ? "s" : "") + " caché" + (hidden > 1 ? "s" : "") + " propre" + (hidden > 1 ? "s" : "") + " à cette histoire."));
  }

  // Intent: tabCodex = bestiary and atlas (Clément, 12/11): every creature, place and object met by this reader in
  // this story, across their games; the others stay as « ??? » to collect.
  function tabCodex(b, st, s) {
    var cx = (recordOf(A.profile, st.id).codex) || { foes: {}, places: {}, items: {} };
    var has = function (box, now, k) { return !!(box[k] || now[k]); };
    var nowFoes = s.beasts || {}, nowPlaces = s.known || {}, nowItems = {}; (s.items || []).forEach(function (k) { nowItems[k] = 1; });
    var section = function (title, keys, found, card) {
      var n = keys.filter(found).length;
      b.appendChild(h("h3", { class: "sub-h" }, title + " · " + n + " sur " + keys.length));
      b.appendChild(h("div", { class: "codex" }, keys.map(function (k) { return found(k) ? card(k) : h("div", { class: "codex-card unknown", "aria-label": "Pas encore trouvé" }, h("b", null, "???")); })));
    };
    var foes = Object.keys(st.enemies || {});
    if (foes.some(function (k) { return has(cx.foes, nowFoes, k); }) && !A.game.multi) b.appendChild(h("button", { class: "btn sm", onclick: function () { A.carnet = null; A.screen = "cartes"; render(); window.scrollTo(0, 0); } }, "🃏 Cartes à collectionner et à imprimer"));
    section("Créatures et adversaires", foes, function (k) { return has(cx.foes, nowFoes, k); }, function (k) {
      var e = st.enemies[k], look = beastLook(k, e);
      return h("div", { class: "codex-card" }, h("div", { class: "codex-beast", html: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="8" fill="' + BEAST_BACKS[hash(st.id + "|" + k) % BEAST_BACKS.length] + '"/><path d="' + BEAST_LOOKS[look] + '" fill="#e9dcc0"/></svg>' }),
        h("b", null, e.name), e.desc ? h("div", { class: "small" }, e.desc) : null,
        h("div", { class: "small muted" }, "Vie " + e.pv + " · attaque " + e.att + " · défense " + e.def + (e.ranged ? " · à distance" : "") + (e.flank ? " · prend à revers" : "")));
    });
    var places = Object.keys((st.world || {}).places || {});
    section("Lieux", places, function (k) { return has(cx.places, nowPlaces, k); }, function (k) {
      var pl = st.world.places[k], vg = Vignette.place(st, k);
      return h("div", { class: "codex-card place" }, vg, h("b", null, pl.name), pl.desc ? h("div", { class: "small" }, pl.desc) : null);
    });
    var items = Object.keys(st.items || {});
    section("Objets", items, function (k) { return has(cx.items, nowItems, k); }, function (k) {
      var it = M.item(st, k);
      return h("div", { class: "codex-card" }, h("b", null, it.name), h("div", { class: "small muted" }, it.kind || ""), it.desc ? h("div", { class: "small" }, it.desc) : null);
    });
  }
  // ------------------------------------------------------------------ bestiary cards
  // Intent: beastCard(Story, id, seen) -> html = a collectable card for a creature met: a drawn silhouette (by the
  // enemy's `look`, else guessed from its name), its strengths as pips, a piece of advice drawn from its rules only
  // (never from the story), and how many times this reader met it. Printable from the notebook (screen "cartes").
  // Why: Clément, 13/11.
  var BEAST_LOOKS = {
    loup: "M8 42 Q9 31 21 30 L39 29 Q43 21 47 19 L49 12 L52 18 L55 13 L56 20 L61 24 L60 28 L54 30 L50 35 L51 48 L47 48 L45 38 L30 39 L28 48 L24 48 L23 39 Q15 38 11 46 Q6 44 8 42 Z",
    rat: "M12 44 Q14 32 28 31 Q40 30 46 36 L53 37 L56 34 L57 39 L52 42 Q48 46 38 46 L22 46 Q16 47 12 44 Z M12 44 Q4 46 3 40 Q3 36 7 38",
    ombre: "M14 56 Q10 30 22 16 Q32 6 42 16 Q54 30 50 56 Q46 50 42 56 Q38 50 32 56 Q26 50 22 56 Q18 50 14 56 Z",
    humain: "M32 8 a7 7 0 1 1 -0.1 0 Z M22 24 Q32 19 42 24 L45 42 L40 42 L38 56 L34 56 L32 44 L30 56 L26 56 L24 42 L19 42 Z",
    serpent: "M10 50 Q20 40 30 48 Q40 56 48 44 Q54 34 46 28 Q40 24 44 18 Q48 13 54 16 L58 14 L56 19 Q50 20 50 24 Q54 30 54 38 Q52 54 36 56 Q24 56 18 50 Q14 47 10 50 Z",
    araignee: "M32 26 a8 7 0 1 1 -0.1 0 Z M32 38 a11 10 0 1 1 -0.1 0 Z",
    oiseau: "M6 30 Q20 18 30 30 Q32 26 34 30 Q44 18 58 30 Q46 28 36 36 L33 44 L31 44 L28 36 Q18 28 6 30 Z",
    ours: "M8 48 Q8 26 26 24 Q30 16 36 18 Q44 14 48 22 Q58 26 58 36 L56 48 L50 48 L48 40 L24 42 L22 48 L16 48 L15 42 Q10 44 8 48 Z",
  };
  var BEAST_GUESS = [["loup", /loup|chacal|chien|renard|molosse/i], ["rat", /\brat\b|rongeur/i], ["serpent", /serpent|vip[eè]re|guivre/i], ["araignee", /araign/i],
    ["oiseau", /corbeau|oiseau|chouette|rapace|vautour|aigle|chauve-souris/i], ["ours", /ours|sanglier|troll|ogre/i], ["ombre", /chose|glaneur|spectre|ombre|p[aâ]le|fant[oô]me|revenant/i]];
  var BEAST_BACKS = ["#35424a", "#4a3a2f", "#2f4a3a", "#4a2f3e", "#3a3550", "#50402a"];
  var CARD_PIPS = 6;
  function beastLook(id, e) {
    if (e.look && BEAST_LOOKS[e.look]) return e.look;
    var t = (e.name || "") + " " + id; for (var i = 0; i < BEAST_GUESS.length; i++) if (BEAST_GUESS[i][1].test(t)) return BEAST_GUESS[i][0];
    return "humain";
  }
  function beastAdvice(e) {
    var out = [];
    if (e.ranged) out.push("Frappe de loin : approche vite, ou mets-toi à couvert.");
    if (e.flank) out.push("Contourne les rangs : ceux de derrière ne sont pas à l'abri.");
    if (e.def >= 25) out.push("Bien protégé : la magie et les coups puissants passent mieux.");
    if (e.pv >= 25) out.push("Endurant : il faut tenir plusieurs passes.");
    if (e.att >= 35) out.push("Frappe fort : la garde vaut de l'or.");
    if (!out.length) out.push(e.def <= 10 ? "Peu protégé : chaque coup porte." : "Rien de particulier : du courage et de bons dés.");
    return out[0];
  }
  function pips(n, scale) { var k = Math.max(1, Math.min(CARD_PIPS, Math.round(n / scale))); var s = ""; for (var i = 0; i < CARD_PIPS; i++) s += i < k ? "●" : "○"; return s; }
  function beastCard(st, id, met) {
    var e = st.enemies[id], look = beastLook(id, e), x = hash(st.id + "|" + id), back = BEAST_BACKS[x % BEAST_BACKS.length];
    var weapon = look !== "humain" ? "" : e.ranged ? '<path d="M48 20 Q58 32 48 44 M48 20 L48 44" stroke="#e9dcc0" stroke-width="1.6" fill="none"/>' :
      /piquier|lance/i.test(e.name) ? '<path d="M47 10 L47 56 M45 14 L47 8 L49 14" stroke="#e9dcc0" stroke-width="1.8" fill="none"/>' : '<path d="M46 22 L52 38 M44 26 L49 24" stroke="#e9dcc0" stroke-width="2" fill="none" stroke-linecap="round"/>';
    var extra = look === "araignee" ? '<path d="M24 34 L10 26 M24 38 L8 38 M24 42 L10 50 M26 46 L16 58 M40 34 L54 26 M40 38 L56 38 M40 42 L54 50 M38 46 L48 58" stroke="#e9dcc0" stroke-width="1.6"/>' : "";
    var eyes = look === "ombre" ? '<circle cx="27" cy="26" r="2.2" fill="#f2e6a0"/><circle cx="37" cy="26" r="2.2" fill="#f2e6a0"/>' : "";
    return '<div class="beast-card">' +
      '<div class="bc-name">' + esc(e.name) + "</div>" +
      '<svg class="bc-art" viewBox="0 0 64 64" role="img" aria-label="' + esc(e.name) + '"><rect width="64" height="64" fill="' + back + '"/><circle cx="50" cy="12" r="6" fill="#ffffff18"/>' +
      '<path d="M0 56 Q16 52 32 56 T64 55 V64 H0 Z" fill="#00000030"/>' + extra + '<path d="' + BEAST_LOOKS[look] + '" fill="#e9dcc0"/>' + weapon + eyes + "</svg>" +
      '<table class="bc-stats"><tr><td>Attaque</td><td>' + pips(e.att, 8) + "</td></tr><tr><td>Défense</td><td>" + pips(e.def, 6) + "</td></tr><tr><td>Vie</td><td>" + pips(e.pv, 5) + "</td></tr><tr><td>Coups</td><td>" + pips(e.dmg, 1.5) + "</td></tr></table>" +
      (e.desc ? '<p class="bc-desc">' + esc(e.desc) + "</p>" : "") +
      '<p class="bc-tip">' + esc(beastAdvice(e)) + "</p>" +
      '<div class="bc-foot">' + esc(st.title) + (met ? " · rencontré " + met + " fois" : "") + "</div></div>";
  }
  var CARDS_CSS = ".beast-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:14px}" +
    ".beast-card{background:#f7eedb;color:#2b2015;border:6px solid #3b2c1c;outline:2px solid #c9a24a;outline-offset:-10px;border-radius:12px;padding:14px 14px 10px;font:13px/1.35 Georgia,'Literata',serif;break-inside:avoid;display:flex;flex-direction:column;gap:6px}" +
    ".beast-card .bc-name{font-weight:700;font-size:1.15em;text-align:center;border-bottom:1px solid #c9ad7c;padding-bottom:4px}" +
    ".beast-card .bc-art{width:100%;aspect-ratio:1/1;border-radius:6px;display:block}" +
    ".beast-card .bc-stats{width:100%;border-collapse:collapse;font-size:.92em}.beast-card .bc-stats td{padding:1px 0}.beast-card .bc-stats td:last-child{text-align:right;letter-spacing:1px;color:#8c2f1c}" +
    ".beast-card .bc-desc{margin:0;font-style:italic}.beast-card .bc-tip{margin:0;font-size:.92em;background:#efe1c2;border-radius:6px;padding:4px 6px}" +
    ".beast-card .bc-foot{margin-top:auto;font-size:.78em;color:#6d5a40;text-align:center;text-transform:uppercase;letter-spacing:.06em}" +
    "@media print{.beast-cards{grid-template-columns:repeat(3,63mm);gap:4mm}.beast-card{height:88mm;box-sizing:border-box;font-size:11px}}";
  function metBeasts(st, s) {
    var cx = (recordOf(A.profile, st.id).codex) || { foes: {} }, now = s.beasts || {};
    return Object.keys(st.enemies || {}).filter(function (k) { return cx.foes[k] || now[k]; });
  }
  function renderCards() {
    var G = A.game, st = G.story, s = G.s, ids = metBeasts(st, s);
    app.appendChild(topBar([h("button", { class: "btn ghost sm", onclick: function () { A.screen = "game"; render(); } }, "← Revenir à la partie"), h("span", { class: "brand grow" }, "Cartes du bestiaire"),
      h("button", { class: "btn sm", onclick: function () { try { window.print(); } catch (e) { flash("L'impression n'est pas possible ici ; télécharge les cartes puis imprime-les.", true); } } }, "Imprimer ou PDF"),
      canDownload() ? h("button", { class: "btn sm primary", onclick: function () {
        download("cartes-" + st.id + ".html", "<!doctype html><meta charset=utf-8><meta name=viewport content=\"width=device-width\"><title>Cartes · " + esc(st.title) + "</title><style>body{margin:0;padding:12px;background:#fff}" + CARDS_CSS + "</style><div class=\"beast-cards\">" + ids.map(function (k) { return beastCard(st, k, (s.beasts || {})[k]); }).join("") + "</div>");
      } }, "Télécharger les cartes") : null]));
    var w = h("main", { class: "wrap fiche" });
    w.appendChild(h("style", null, CARDS_CSS));
    w.appendChild(h("p", { class: "small muted noprint" }, ids.length + " carte" + (ids.length > 1 ? "s" : "") + " sur " + Object.keys(st.enemies || {}).length + ". Chaque créature rencontrée en ajoute une. À l'impression, les cartes ont la taille d'une carte à jouer."));
    w.appendChild(h("div", { class: "beast-cards", html: ids.map(function (k) { return beastCard(st, k, (s.beasts || {})[k]); }).join("") }));
    app.appendChild(w);
  }

  // ------------------------------------------------------------------ "Mon aventure": the game told as a book
  // Intent: save(Game, GameDoc) -> () ! writes the current part of the game's story (recits/<game>~<k>)
  // Why: the pages as they were read (texts depend on the moment), kept apart from the save so it stays small.
  function saveRecit(G, d) {
    if (G.multi || G.ephemeral || !G.recit) return;
    var R = G.recit;
    if (JSON.stringify(R.pages).length > RECIT_CHARS && R.pages.length > 1) {
      var last = R.pages.pop();
      Store.put("recits", d.id + "~" + R.k, { pages: R.pages, updated: Date.now() }).catch(function () {});
      R.k++; R.pages = [last];
    }
    d.recitParts = R.k + 1;
    Store.put("recits", d.id + "~" + R.k, { pages: R.pages, updated: Date.now() }).catch(function () {});
  }
  function openRecit() {
    var G = A.game, d = G.doc, n = d.recitParts || 0, jobs = [];
    for (var i = 0; i < n - 1; i++) jobs.push(Store.get("recits", d.id + "~" + i));
    A.recit = { busy: true, pages: [] }; A.carnet = null; A.screen = "recit"; render();
    Promise.all(jobs).then(function (parts) {
      var pages = []; parts.forEach(function (p) { if (p && p.pages) pages = pages.concat(p.pages); });
      pages = pages.concat(G.recit ? G.recit.pages : []);
      if (!pages.length) pages = G.log.map(function (e) { return { t: e.t, title: e.title, act: e.act, text: [], c: e.c }; });
      A.recit = { busy: false, pages: pages }; render();
    });
  }
  function recitHtml(st, s, pages) {
    var acts = {}; (st.acts || []).forEach(function (a) { acts[a.id] = a.title; });
    var out = ["<h1>" + esc(st.title) + "</h1>", "<p class=\"by\">L'aventure de " + esc(s.name) + ", " + esc((M.ARCHS[s.arch] || {}).label || "") + " · niveau " + M.level(s) + "</p>"], lastAct = null;
    pages.forEach(function (p) {
      if (p.act && p.act !== lastAct) { out.push("<h2>" + esc(acts[p.act] || p.act) + "</h2>"); lastAct = p.act; }
      out.push("<section><h3>" + md(String(p.title || "")) + " <small>" + esc(p.t || "") + "</small></h3>");
      (p.text || []).forEach(function (t) { out.push("<p>" + md(t) + "</p>"); });
      if (p.ev && p.ev.length) out.push("<p class=\"ev\">" + p.ev.map(esc).join(" · ") + "</p>");
      if (p.c) out.push("<p class=\"chosen\">Tu as choisi : « " + esc(p.c) + " »</p>");
      out.push("</section>");
    });
    return out.join("\n");
  }
  var RECIT_CSS = "body{font:17px/1.65 Georgia,'Literata',serif;color:#1d2420;background:#fff;max-width:40rem;margin:2rem auto;padding:0 16px}h1{font-size:2.2em;margin:0}h2{margin-top:2.4em;page-break-before:always;border-bottom:1px solid #ccc}h3{margin:1.6em 0 .4em}h3 small{font-weight:normal;color:#777;font-size:.6em}.by{color:#555;font-style:italic}.chosen{font-style:italic;color:#2c7464}.ev{font-size:.85em;color:#666}section{page-break-inside:auto}";
  // Intent: ficheHtml(Story, State) -> html = the hero's card, to print or keep (Clément, 12/11)
  function ficheHtml(st, s) {
    var a = M.ARCHS[s.arch] || {}, lv = M.level(s), w = M.weapon(st, s), ar = M.armor(st, s);
    var counted = {}; s.items.forEach(function (id) { counted[id] = (counted[id] || 0) + 1; });
    var items = Object.keys(counted).map(function (id) { return esc(M.item(st, id).name) + (counted[id] > 1 ? " ×" + counted[id] : ""); });
    var comps = Object.keys(st.companions || {}).filter(function (k) { return s.met[k] === "party"; }).map(function (k) { return esc(st.companions[k].name); });
    var feats = M.featsOf(st).filter(function (f) { return (s.feats || {})[f.id]; }).map(function (f) { return "<li><b>★ " + esc(f.title) + "</b> · " + esc(f.desc) + "</li>"; });
    var doms = Object.keys(M.DOMAINS).map(function (k) { var v = M.bonus(st, s, k); return "<tr><td>" + esc(M.DOMAINS[k]) + "</td><td class=n>" + (v >= 0 ? "+" : "") + v + "</td><td><i style=\"width:" + Math.max(0, Math.min(100, Math.round(v * 1.25))) + "%\"></i></td></tr>"; }).join("");
    var d = new Date();
    return "<div class=\"fiche-card\">" +
      "<header><div class=\"seal\">" + heroFace(st, s, 72) + "</div><div><h1>" + esc(s.name) + "</h1>" +
      "<p class=\"sub\">" + esc(a.label || "") + " · niveau " + lv + " · " + esc((M.DIFFICULTY[s.difficulty || "aventurier"] || {}).label || "") + "</p>" +
      "<p class=\"story\">" + esc(st.title) + "</p></div></header>" +
      "<div class=\"cols\"><section><h2>Le héros</h2><table class=\"kv\">" +
      "<tr><td>Points de vie</td><td class=n>" + M.pvMax(s) + "</td></tr>" +
      "<tr><td>Expérience</td><td class=n>" + s.ep.toLocaleString("fr-FR") + " EP</td></tr>" +
      "<tr><td>Bourse</td><td class=n>" + esc(M.money(st, s.gold)) + "</td></tr>" +
      "<tr><td>Arme</td><td class=n>" + (w ? esc(w.name) + " (" + w.dmg + ")" : "mains nues") + "</td></tr>" +
      "<tr><td>Protection</td><td class=n>" + (ar ? esc(ar.name) + " (+" + ar.def + ")" : "aucune") + "</td></tr></table>" +
      "<h2>Domaines</h2><table class=\"doms\">" + doms + "</table></section>" +
      "<section><h2>Le sac</h2><p>" + (items.length ? items.join(" · ") : "vide") + "</p>" +
      "<h2>Compagnons</h2><p>" + (comps.length ? comps.join(" · ") : "voyage seul") + "</p>" +
      "<h2>Hauts faits</h2>" + (feats.length ? "<ul>" + feats.join("") + "</ul>" : "<p>à conquérir</p>") + "</section></div>" +
      "<footer>" + esc(a.tip || "") + "<br>Fiche du " + d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) + "</footer></div>";
  }
  var FICHE_CSS = ".fiche-card{max-width:46rem;margin:1rem auto;padding:28px 32px;background:#fbf4e2;color:#2b2015;border:3px double #8a6a3a;border-radius:10px;font:15px/1.5 Georgia,'Literata',serif;box-shadow:inset 0 0 40px rgb(140 100 40 / .18)}" +
    ".fiche-card header{display:flex;gap:18px;align-items:center;border-bottom:1px solid #c9ad7c;padding-bottom:14px;margin-bottom:10px}.fiche-card .seal{flex:none;width:72px;height:72px;border-radius:50%;background:#8c2f1c;color:#fff6e4;display:grid;place-items:center;font-size:40px;border:3px solid #c9a24a;overflow:hidden}.fiche-card .seal svg{width:100%;height:100%}" +
    ".fiche-card h1{margin:0;font-size:2em}.fiche-card .sub{margin:2px 0;font-style:italic}.fiche-card .story{margin:0;color:#6d5a40;font-size:.9em;text-transform:uppercase;letter-spacing:.08em}" +
    ".fiche-card .cols{display:grid;grid-template-columns:1fr 1fr;gap:6px 28px}@media (max-width:600px){.fiche-card .cols{grid-template-columns:1fr}.fiche-card{padding:18px}}" +
    ".fiche-card h2{font-size:1em;text-transform:uppercase;letter-spacing:.1em;color:#8c2f1c;margin:14px 0 6px;border-bottom:1px dotted #c9ad7c}.fiche-card table{width:100%;border-collapse:collapse}.fiche-card td{padding:2px 0}.fiche-card td.n{text-align:right;white-space:nowrap;padding-left:8px}" +
    ".fiche-card .doms td:last-child{width:40%;padding-left:10px}.fiche-card .doms i{display:block;height:7px;border-radius:4px;background:#b5862f}.fiche-card ul{margin:0;padding-left:1.1em}.fiche-card p{margin:0 0 4px}" +
    ".fiche-card footer{margin-top:16px;border-top:1px solid #c9ad7c;padding-top:8px;font-size:.85em;color:#6d5a40;font-style:italic}@media print{.fiche-card{box-shadow:none;margin:0 auto}}";
  function renderFiche() {
    var G = A.game, st = G.story, s = G.s;
    app.appendChild(topBar([h("button", { class: "btn ghost sm", onclick: function () { A.screen = "game"; render(); } }, "← Revenir à la partie"), h("span", { class: "brand grow" }, "Fiche du héros"),
      h("button", { class: "btn sm", onclick: function () { try { window.print(); } catch (e) { flash("L'impression n'est pas possible ici ; télécharge la fiche puis imprime-la.", true); } } }, "Imprimer ou PDF"),
      canDownload() ? h("button", { class: "btn sm primary", onclick: function () {
        download("fiche-" + (s.name || "heros").replace(/[^\wÀ-ÿ-]+/g, "-") + ".html", "<!doctype html><meta charset=utf-8><meta name=viewport content=\"width=device-width\"><title>" + esc(s.name) + " · " + esc(st.title) + "</title><style>body{margin:0;padding:12px;background:#fff}" + FICHE_CSS + "</style>" + ficheHtml(st, s));
      } }, "Télécharger la fiche") : null]));
    var w = h("main", { class: "wrap fiche" });
    w.appendChild(h("style", null, FICHE_CSS));
    w.appendChild(h("div", { html: ficheHtml(st, s) }));
    app.appendChild(w);
  }
  function renderRecit() {
    var G = A.game, st = G.story, s = G.s;
    app.appendChild(topBar([h("button", { class: "btn ghost sm", onclick: function () { A.screen = "game"; render(); } }, "← Revenir à la partie"), h("span", { class: "brand grow" }, "Mon aventure"),
      h("button", { class: "btn sm", onclick: function () { try { window.print(); } catch (e) { flash("L'impression n'est pas possible ici ; télécharge le livre puis imprime-le.", true); } } }, "Imprimer ou PDF"),
      canDownload() ? h("button", { class: "btn sm primary", onclick: function () {
        download("aventure-" + (s.name || "heros").replace(/[^\wÀ-ÿ-]+/g, "-") + ".html", "<!doctype html><meta charset=utf-8><title>" + esc(st.title) + " · " + esc(s.name) + "</title><style>" + RECIT_CSS + "</style>" + recitHtml(st, s, A.recit.pages));
      } }, "Télécharger le livre") : null]));
    var w = h("main", { class: "wrap read recit" });
    if (A.recit.busy) w.appendChild(h("p", null, "Le livre se rassemble…"));
    else { w.appendChild(renderAudioBook(st, s, A.recit.pages)); w.appendChild(h("div", { html: recitHtml(st, s, A.recit.pages) })); }
    w.appendChild(h("p", { class: "small muted noprint" }, "Le fichier téléchargé s'ouvre dans n'importe quel navigateur ; « Imprimer », puis « Enregistrer en PDF », en fait un PDF."));
    app.appendChild(w);
  }

  // ------------------------------------------------------------------ « Mon aventure » as an audio book
  // Intent: AudioBook = the pages of the reader's adventure, read by the quality voice installed on the device, made
  // into one sound file (Ogg Opus through WebCodecs, WAV when the browser has no encoder) to listen to in the car.
  // Why: Clément, 13/11. Only on the site, and only with a quality voice: the device voices cannot be recorded.
  var AB_RATE = 48000;                      // Opus always counts in 48 kHz samples
  var AB_BITRATE = 32000;                   // speech, mono: small file, clear voice
  var AB_PRESKIP = 312;                     // the usual Opus encoder delay at 48 kHz
  var AB_BATCH = 30;                        // sentences sent to the voice at once (progress and cancel in between)
  var AB_WAV_RATE = 22050;                  // the fallback file, 16-bit mono
  var AudioBook = (function () {
    var B = { job: null };
    B.available = function () { return Neural.available() && Neural.keys().some(Neural.has); };
    B.opus = function () { return typeof window.AudioEncoder === "function" && typeof window.AudioData === "function"; };
    function resample(src, from, to) {
      if (from === to) return src;
      var n = Math.round(src.length * to / from), out = new Float32Array(n), k = from / to;
      for (var i = 0; i < n; i++) { var x = i * k, j = Math.floor(x), f = x - j; out[i] = (src[j] || 0) * (1 - f) + (src[j + 1] || src[j] || 0) * f; }
      return out;
    }
    // ---- Ogg pages (RFC 3533, RFC 7845): one packet per page.
    var CRC = (function () { var t = new Uint32Array(256); for (var i = 0; i < 256; i++) { var r = i << 24; for (var j = 0; j < 8; j++) r = r & 0x80000000 ? (r << 1) ^ 0x04c11db7 : r << 1; t[i] = r >>> 0; } return t; })();
    function oggPage(packet, granule, serial, seq, flags) {
      var segs = []; for (var left = packet.length; ; left -= 255) { if (left >= 255) segs.push(255); else { segs.push(left); break; } }
      var head = 27 + segs.length, page = new Uint8Array(head + packet.length), dv = new DataView(page.buffer);
      page.set([0x4f, 0x67, 0x67, 0x53, 0, flags]);
      dv.setUint32(6, granule % 0x100000000, true); dv.setUint32(10, Math.floor(granule / 0x100000000), true);
      dv.setUint32(14, serial, true); dv.setUint32(18, seq, true); page[26] = segs.length; page.set(segs, 27); page.set(packet, head);
      var c = 0; for (var i = 0; i < page.length; i++) c = ((c << 8) ^ CRC[((c >>> 24) ^ page[i]) & 255]) >>> 0;
      dv.setUint32(22, c, true);
      return page;
    }
    function opusHead() { var p = new Uint8Array(19), dv = new DataView(p.buffer); p.set([79, 112, 117, 115, 72, 101, 97, 100, 1, 1]); dv.setUint16(10, AB_PRESKIP, true); dv.setUint32(12, AB_RATE, true); return p; }
    function opusTags(title) {
      var enc = new TextEncoder(), vendor = enc.encode("livre-jeu"), c = enc.encode("TITLE=" + title);
      var p = new Uint8Array(8 + 4 + vendor.length + 4 + 4 + c.length), dv = new DataView(p.buffer), o = 0;
      p.set(enc.encode("OpusTags"), 0); o = 8; dv.setUint32(o, vendor.length, true); o += 4; p.set(vendor, o); o += vendor.length;
      dv.setUint32(o, 1, true); o += 4; dv.setUint32(o, c.length, true); o += 4; p.set(c, o);
      return p;
    }
    // Intent: OpusSink = samples at 48 kHz in, an Ogg Opus Blob out.
    function OpusSink(title) {
      var serial = (Math.random() * 0xffffffff) >>> 0, seq = 0, pages = [], granule = AB_PRESKIP, ts = 0, last = null, err = null;
      pages.push(oggPage(opusHead(), 0, serial, seq++, 2)); pages.push(oggPage(opusTags(title), 0, serial, seq++, 0));
      function flush(final) { if (!last) return; granule += last.n; pages.push(oggPage(last.data, granule, serial, seq++, final ? 4 : 0)); last = null; }
      var enc = new AudioEncoder({
        output: function (chunk) { flush(false); var d = new Uint8Array(chunk.byteLength); chunk.copyTo(d); last = { data: d, n: Math.round((chunk.duration || 20000) * AB_RATE / 1e6) }; },
        error: function (e) { err = e; },
      });
      enc.configure({ codec: "opus", sampleRate: AB_RATE, numberOfChannels: 1, bitrate: AB_BITRATE });
      return {
        push: function (samples) {
          if (err) throw err;
          if (!samples.length) return null;
          var data = new AudioData({ format: "f32", sampleRate: AB_RATE, numberOfFrames: samples.length, numberOfChannels: 1, timestamp: ts, data: samples });
          ts += Math.round(samples.length * 1e6 / AB_RATE); enc.encode(data); data.close();
          return enc.encodeQueueSize > 20 ? new Promise(function (r) { setTimeout(r, 50); }) : null;
        },
        rate: AB_RATE,
        finish: function () { return enc.flush().then(function () { if (err) throw err; flush(true); enc.close(); return { blob: new Blob(pages, { type: "audio/ogg" }), ext: "ogg" }; }); },
        cancel: function () { try { enc.close(); } catch (e) { /* ignore */ } },
      };
    }
    function WavSink() {
      var parts = [], n = 0;
      return {
        push: function (samples) { var p = new Int16Array(samples.length); for (var i = 0; i < samples.length; i++) { var x = Math.max(-1, Math.min(1, samples[i])); p[i] = x < 0 ? x * 0x8000 : x * 0x7fff; } parts.push(p); n += p.length; return null; },
        rate: AB_WAV_RATE,
        finish: function () {
          var h = new DataView(new ArrayBuffer(44)), w = function (o, s) { for (var i = 0; i < s.length; i++) h.setUint8(o + i, s.charCodeAt(i)); };
          w(0, "RIFF"); h.setUint32(4, 36 + n * 2, true); w(8, "WAVE"); w(12, "fmt "); h.setUint32(16, 16, true); h.setUint16(20, 1, true); h.setUint16(22, 1, true);
          h.setUint32(24, AB_WAV_RATE, true); h.setUint32(28, AB_WAV_RATE * 2, true); h.setUint16(32, 2, true); h.setUint16(34, 16, true); w(36, "data"); h.setUint32(40, n * 2, true);
          return Promise.resolve({ blob: new Blob([h.buffer].concat(parts), { type: "audio/wav" }), ext: "wav" });
        },
        cancel: function () {},
      };
    }
    // The text of the book, sentence by sentence: act titles, page titles, the pages, the choices.
    function script(st, s, pages, act) {
      var acts = {}; (st.acts || []).forEach(function (a) { acts[a.id] = a.title; });
      var lines = [{ text: st.title + ". L'aventure de " + s.name + "." }], lastAct = null;
      pages.forEach(function (p) {
        if (act && p.act !== act) return;
        if (p.act && p.act !== lastAct) { lines.push({ text: acts[p.act] || "" }); lastAct = p.act; }
        lines.push({ text: String(p.title || "").replace(/\*/g, "") });
        (p.text || []).forEach(function (t) { lines.push({ text: t.replace(/\*/g, "") }); });
        if (p.c) lines.push({ text: "Tu as choisi : " + p.c + "." });
      });
      return speechUnits(lines.filter(function (l) { return l.text.trim(); }));
    }
    B.actsOf = function (st, pages) {
      var acts = {}, out = []; (st.acts || []).forEach(function (a) { acts[a.id] = a.title; });
      pages.forEach(function (p) { if (p.act && out.indexOf(p.act) < 0) out.push(p.act); });
      return out.map(function (id) { return { id: id, title: acts[id] || id }; });
    };
    // Intent: make(Story, State, pages, act|null) -> fills B.job { done, total, url, ext, error }
    B.make = function (st, s, pages, act) {
      var units = script(st, s, pages, act), want = pref("voice") || "", installed = Neural.keys().filter(Neural.has);
      var key = /^neural:/.test(want) && Neural.has(want.slice(7)) ? want.slice(7) : installed[0];
      var other = pref("dialogue") ? installed.filter(function (k) { return k !== key; })[0] : null;
      var sink = B.opus() ? OpusSink(st.title + " · " + s.name) : WavSink();
      var job = B.job = { done: 0, total: units.length, url: null, ext: "", error: "", cancelled: false };
      var lock = null; try { if (navigator.wakeLock) navigator.wakeLock.request("screen").then(function (l) { lock = l; }).catch(function () {}); } catch (e) { /* ignore */ }
      var i = 0;
      function batch() {
        if (job.cancelled) return Promise.resolve();
        if (i >= units.length) return Promise.resolve();
        var part = units.slice(i, i + AB_BATCH), queue = Promise.resolve();
        return Neural.synth(part, { key: key, dialKey: other, rate: pref("rate") || 1 }, function (k, audio, rate) {
          queue = queue.then(function () {
            if (job.cancelled) return;
            var gap = new Float32Array(Math.round((part[k].pause || 0) * sink.rate));
            return Promise.resolve(sink.push(gap)).then(function () { return sink.push(resample(audio, rate, sink.rate)); }).then(function () { job.done++; if (A.screen === "recit") render(); });
          });
        }).then(function (err) { if (err) throw new Error(err); return queue; }).then(function () { i += part.length; return batch(); });
      }
      batch().then(function () {
        if (job.cancelled) { sink.cancel(); return; }
        return sink.finish().then(function (r) { job.url = URL.createObjectURL(r.blob); job.ext = r.ext; job.size = r.blob.size; });
      }).catch(function (e) { sink.cancel(); job.error = String((e && e.message) || e); })
        .then(function () { if (lock) lock.release().catch(function () {}); render(); });
      render();
    };
    B.cancel = function () { if (B.job) { B.job.cancelled = true; Neural.stopSynth(); } B.job = null; render(); };
    B.clear = function () { if (B.job && B.job.url) URL.revokeObjectURL(B.job.url); B.job = null; };
    return B;
  })();
  function renderAudioBook(st, s, pages) {
    var box = h("section", { class: "audiobook noprint" }, h("h3", null, "🎧 Livre audio"));
    if (!standalone()) return null;
    if (!AudioBook.available()) { box.appendChild(h("p", { class: "small muted" }, "Pour en faire un livre audio, installe d'abord une voix de qualité (⚙ Réglages de lecture → Lecture à voix haute).")); return box; }
    var job = AudioBook.job;
    if (job && !job.url && !job.error) {
      var pc = job.total ? Math.round(job.done * 100 / job.total) : 0;
      box.appendChild(h("p", { class: "small" }, "La voix lit ton aventure… " + pc + " % (" + job.done + " phrases sur " + job.total + "). Garde le livre ouvert ; cela prend à peu près le temps de la lecture."));
      box.appendChild(h("progress", { max: 100, value: pc }));
      box.appendChild(h("button", { class: "btn sm", onclick: AudioBook.cancel }, "Arrêter"));
      return box;
    }
    if (job && job.error) box.appendChild(h("div", { class: "notice bad" }, "Le livre audio n'a pas pu être fait : " + job.error));
    if (job && job.url) {
      var name = "aventure-" + (s.name || "heros").replace(/[^\wÀ-ÿ-]+/g, "-") + "." + job.ext;
      box.appendChild(h("audio", { controls: true, src: job.url, preload: "metadata" }));
      box.appendChild(h("div", { class: "row" }, h("a", { class: "btn sm primary", href: job.url, download: name }, "Télécharger (" + (job.size / 1048576).toFixed(1) + " Mo)"),
        h("button", { class: "btn sm ghost", onclick: function () { AudioBook.clear(); render(); } }, "En refaire un")));
      return box;
    }
    var acts = AudioBook.actsOf(st, pages), sel = h("select", { "aria-label": "Partie à enregistrer" },
      acts.length > 1 ? h("option", { value: "" }, "Toute l'aventure") : null, acts.map(function (a) { return h("option", { value: a.id }, a.title); }));
    box.appendChild(h("p", { class: "small muted" }, "La voix de qualité lit ton aventure et en fait un fichier son, à écouter en voiture ou au lit." + (AudioBook.opus() ? "" : " Ce navigateur fera un fichier WAV, assez lourd : mieux vaut un acte à la fois.")));
    box.appendChild(h("div", { class: "row" }, sel, h("button", { class: "btn sm primary", onclick: function () { AudioBook.make(st, s, pages, sel.value || null); } }, "Fabriquer le livre audio")));
    return box;
  }

  // ------------------------------------------------------------------ the shared save folder (GitHub)
  // Intent: Sync = every device of the family keeps the same readers and games, through one file in a private GitHub
  // repository: pulled when the book opens, pushed after reading; per document, the most recent wins (as importBackup).
  // Deleted documents travel as tombstones, so a removed game does not come back from another device.
  // Why: Clément, 13/11: sync without Claude, set up from one menu, with as much as possible done for him.
  // The key (a fine-grained token limited to that one repository) stays in this browser only; the public game repository
  // never sees a save.
  var SYNC_REPO = "livre-hero-sauvegardes";
  var SYNC_FILE = "sauvegarde.json";
  var SYNC_API = "https://api.github.com";
  var SYNC_EVERY_MS = 5 * 60 * 1000;        // while the book is open, push what changed at most this often
  var SYNC_TOMB_DAYS = 120;                 // tombstones older than this are forgotten
  var Sync = (function () {
    var S = { busy: false, dirty: false, error: "" }, again = false;
    S.config = function () { return lsGet("sync"); };
    S.available = function () { return standalone() && typeof fetch === "function"; };
    S.on = function () { var c = S.config(); return !!(S.available() && c && c.token && c.repo); };
    S.touch = function () { S.dirty = true; };
    S.tomb = function (coll, id) { var t = lsGet("tombs") || {}; t[coll + "/" + id] = Date.now(); lsSet("tombs", t); S.dirty = true; };
    function api(c, method, path, body, accept) {
      return fetch(SYNC_API + path, {
        method: method, cache: "no-store",
        headers: { Authorization: "Bearer " + c.token, Accept: accept || "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28", "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : undefined,
      });
    }
    function b64(str) { var by = new TextEncoder().encode(str), out = ""; for (var i = 0; i < by.length; i += 0x8000) out += String.fromCharCode.apply(null, by.subarray(i, i + 0x8000)); return btoa(out); }
    function unb64(s) { var bin = atob(s.replace(/\s/g, "")), by = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) by[i] = bin.charCodeAt(i); return new TextDecoder().decode(by); }
    function why(r) {
      if (r.status === 401) return "la clé n'est plus valable (expirée ou supprimée) : refais « Configurer un dossier de sauvegarde partagé »";
      if (r.status === 403) return "la clé n'a pas le droit d'écrire dans le dossier (permission « Contents » en lecture et écriture)";
      if (r.status === 404) return "le dossier " + SYNC_REPO + " est introuvable pour cette clé";
      return "GitHub a répondu " + r.status;
    }
    // Intent: connect(token) -> config = finds the private repository the key opens, checks it, keeps it on this device.
    S.connect = function (token) {
      var c = { token: token.trim() };
      return api(c, "GET", "/user/repos?per_page=100&sort=updated").then(function (r) {
        if (r.status === 401) throw new Error("GitHub ne reconnaît pas cette clé : vérifie qu'elle est copiée en entier");
        return r.ok ? r.json() : [];
      }).then(function (repos) {
        if (repos.length) return repos;
        // Some keys do not list their repositories: look for the folder under the key's own account.
        return api(c, "GET", "/user").then(function (r) { if (!r.ok) throw new Error(why(r)); return r.json(); })
          .then(function (u) { return api(c, "GET", "/repos/" + u.login + "/" + SYNC_REPO); })
          .then(function (r) { return r.ok ? r.json().then(function (x) { return [x]; }) : []; });
      }).then(function (repos) {
        var named = repos.filter(function (x) { return x.name === SYNC_REPO; })[0], only = repos.length === 1 ? repos[0] : null, repo = named || only;
        if (!repo) throw new Error(repos.length ? "cette clé ouvre plusieurs dossiers et aucun ne s'appelle " + SYNC_REPO + ". Refais la clé en choisissant seulement ce dossier." : "cette clé n'ouvre aucun dossier. À l'étape 2, choisis « Only select repositories » puis " + SYNC_REPO + ".");
        if (!repo.private) throw new Error("le dossier " + repo.full_name + " est public : les sauvegardes des enfants n'y vont pas. Rends-le privé (Settings → Danger zone → Change visibility) ou crée-le de nouveau en privé.");
        if (repo.permissions && !repo.permissions.push) throw new Error("la clé ne peut que lire " + repo.full_name + " : donne-lui « Contents : Read and write ».");
        c.owner = repo.owner.login; c.repo = repo.name; c.since = Date.now();
        lsSet("sync", c);
        return c;
      });
    };
    // While the book is open: what changed goes out every few minutes, and when the page is hidden (phone locked, tab
    // left); coming back to the page pulls what the other devices did.
    var started = false;
    S.start = function () {
      if (!S.on()) return;
      S.run(true);
      if (started) return; started = true;
      setInterval(function () { if (S.dirty && S.on()) S.run(true); }, SYNC_EVERY_MS);
      document.addEventListener("visibilitychange", function () { if (!S.on()) return; if (document.visibilityState === "hidden") { if (S.dirty) S.run(true); } else S.run(true); });
    };
    S.disconnect = function () { try { localStorage.removeItem(LOCAL + "sync"); } catch (e) { /* ignore */ } S.error = ""; render(); };
    function pull(c) {
      var path = "/repos/" + c.owner + "/" + c.repo + "/contents/" + SYNC_FILE;
      return api(c, "GET", path).then(function (r) {
        if (r.status === 404) return { sha: null, data: null };
        if (!r.ok) throw new Error(why(r));
        return r.json().then(function (meta) {
          if (meta.content && meta.encoding === "base64") return { sha: meta.sha, data: JSON.parse(unb64(meta.content)) };
          // Over 1 MB the contents API leaves the content out: read it raw.
          return api(c, "GET", path, null, "application/vnd.github.raw+json").then(function (r2) { if (!r2.ok) throw new Error(why(r2)); return r2.text(); })
            .then(function (t) { return { sha: meta.sha, data: JSON.parse(t) }; });
        });
      });
    }
    function push(c, sha, data) {
      var body = { message: "Sauvegarde du " + new Date().toLocaleString("fr-FR"), content: b64(JSON.stringify(data)) };
      if (sha) body.sha = sha;
      return api(c, "PUT", "/repos/" + c.owner + "/" + c.repo + "/contents/" + SYNC_FILE, body).then(function (r) {
        if (r.status === 409 || r.status === 422) return "conflict";
        if (!r.ok) throw new Error(why(r));
        return "ok";
      });
    }
    // Intent: run() -> Promise = pull, merge into this device, push when this device has something newer.
    S.run = function (quiet) {
      if (!S.on()) return Promise.resolve();
      if (S.busy) { again = true; return Promise.resolve(); }
      var c = S.config(); S.busy = true; S.dirty = false; if (!quiet) render();
      var tries = 0;
      function once() {
        return pull(c).then(function (remote) {
          var rd = remote.data && remote.data.format === BACKUP_FORMAT ? remote.data : null;
          var tombs = mergeTombs(lsGet("tombs") || {}, (rd && rd.tombs) || {});
          lsSet("tombs", tombs);
          return (rd ? mergeBackup(rd, tombs) : Promise.resolve({ added: 0 })).then(function (res) {
            return backupData().then(function (mine) {
              mine.tombs = tombs;
              var changedHere = res.added > 0;
              if (rd && !newer(mine, rd)) return { pulled: changedHere };
              return push(c, remote.sha, mine).then(function (st) {
                if (st === "conflict" && ++tries < 3) return once();
                if (st === "conflict") throw new Error("un autre appareil écrivait en même temps ; ce sera pour la prochaine fois");
                return { pulled: changedHere, pushed: true };
              });
            });
          });
        });
      }
      return once().then(function (r) {
        S.error = ""; c.last = Date.now(); lsSet("sync", c);
        if (r && r.pulled && !A.game) return refresh();
      }).catch(function (e) { S.error = String((e && e.message) || e); if (/Failed to fetch|NetworkError|Load failed/.test(S.error)) S.error = "pas de réseau, ce sera pour la prochaine fois"; })
        .then(function () { S.busy = false; render(); if (again) { again = false; return S.run(true); } });
    };
    function mergeTombs(a, b) {
      var out = {}, old = Date.now() - SYNC_TOMB_DAYS * 864e5;
      [a, b].forEach(function (t) { Object.keys(t).forEach(function (k) { if (t[k] > old && (!out[k] || out[k] < t[k])) out[k] = t[k]; }); });
      return out;
    }
    // Does this device hold something the shared file has not: a document, a newer one, a deletion?
    function newer(mine, theirs) {
      var tk = theirs.tombs || {};
      if (Object.keys(mine.tombs).some(function (k) { return !tk[k]; })) return true;
      return BACKUP_COLLS.some(function (cname) {
        var byId = {}; (theirs.collections[cname] || []).forEach(function (o) { if (o && o.id) byId[o.id] = o; });
        return (mine.collections[cname] || []).some(function (o) { var t = byId[o.id]; return !t || (o.updated || 0) > (t.updated || 0); });
      });
    }
    // A key passed by QR: the code opens the site with #sync=… and this device is set up.
    S.fromLink = function () {
      var m = /^#sync=([A-Za-z0-9_-]+)/.exec(location.hash || ""); if (!m) return false;
      try { history.replaceState(null, "", location.pathname + location.search); } catch (e) { location.hash = ""; }
      try {
        var c = JSON.parse(unb64(m[1].replace(/-/g, "+").replace(/_/g, "/")));
        if (!c.t || !c.o || !c.r) return false;
        lsSet("sync", { token: c.t, owner: c.o, repo: c.r, since: Date.now() });
        A.notice = "Cet appareil est branché sur le dossier de sauvegarde partagé. Les lecteurs et les parties arrivent…"; A.noticeBad = false;
        return true;
      } catch (e) { return false; }
    };
    S.link = function () {
      var c = S.config();
      var code = b64(JSON.stringify({ t: c.token, o: c.owner, r: c.repo })).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
      return location.origin + location.pathname + "#sync=" + code;
    };
    S.qr = function () {
      var ready = window.qrcode ? Promise.resolve() : new Promise(function (res, rej) { var sc = document.createElement("script"); sc.src = "vendor/qrcode.js"; sc.onload = res; sc.onerror = rej; document.head.appendChild(sc); });
      return ready.then(function () { var q = qrcode(0, "M"); q.addData(S.link()); q.make(); return q.createSvgTag({ cellSize: 4, margin: 4, scalable: true }); });
    };
    return S;
  })();
  var SYNC_NEW_REPO = "https://github.com/new?name=" + SYNC_REPO + "&visibility=private&description=" + encodeURIComponent("Sauvegardes du livre-jeu (lecteurs et parties)");
  var SYNC_NEW_KEY = "https://github.com/settings/personal-access-tokens/new?name=" + encodeURIComponent("Livre-jeu sauvegardes") +
    "&description=" + encodeURIComponent("Lit et écrit le fichier de sauvegarde du livre-jeu dans " + SYNC_REPO + ".") + "&expires_in=none&contents=write";
  function modalSync(box, close) {
    var m = A.modal, c = Sync.config();
    modalHead(box, "Dossier de sauvegarde partagé", close);
    var b = h("div", { class: "drawer-body stack" });
    if (Sync.on()) {
      b.appendChild(h("div", { class: "notice soft" }, "✔ Branché sur le dossier privé ", h("b", null, c.owner + "/" + c.repo), ". ",
        Sync.busy ? "Synchronisation en cours…" : c.last ? "Dernière synchronisation : " + when(c.last) + "." : ""));
      if (Sync.error) b.appendChild(h("div", { class: "notice bad" }, "La dernière synchronisation n'a pas abouti : " + Sync.error + "."));
      b.appendChild(h("p", { class: "small muted" }, "Les lecteurs, leurs parties et leurs réglages se retrouvent sur chaque appareil branché : à l'ouverture du livre, après chaque lecture, et toutes les cinq minutes pendant qu'on lit. Si deux appareils ont touché la même partie, la plus récente l'emporte."));
      b.appendChild(h("div", { class: "row" }, h("button", { class: "btn primary", disabled: Sync.busy, onclick: function () { Sync.run(); } }, "Synchroniser maintenant"),
        h("button", { class: "btn", onclick: function () { m.qr = "…"; render(); Sync.qr().then(function (svg) { m.qr = svg; render(); }, function () { m.qr = null; flash("Le code n'a pas pu être dessiné.", true); }); } }, "📱 Brancher un autre appareil")));
      if (m.qr) b.appendChild(h("div", { class: "stack tight" },
        h("p", { class: "small" }, "Sur l'autre téléphone ou tablette, ouvre l'appareil photo et vise ce code : le livre s'ouvre et se branche tout seul. Ce code contient la clé : ne le montre qu'à tes appareils."),
        m.qr === "…" ? h("p", null, "…") : h("div", { class: "qr-frame", html: m.qr })));
      b.appendChild(h("div", { class: "row" }, h("button", { class: "btn ghost sm", onclick: function () { Sync.disconnect(); } }, "Débrancher cet appareil")));
      b.appendChild(h("p", { class: "small muted" }, "Débrancher ne supprime rien : les sauvegardes restent ici et dans le dossier. Pour couper l'accès partout, supprime la clé « Livre-jeu sauvegardes » sur GitHub (Settings → Developer settings → Fine-grained tokens)."));
      box.appendChild(b); return;
    }
    b.appendChild(h("p", null, "Un dossier privé sur GitHub garde les lecteurs et les parties, et chaque appareil branché s'y retrouve. Trois étapes, une seule fois ; ensuite, pour chaque autre appareil, il suffit de scanner un code."));
    b.appendChild(h("p", { class: "small muted" }, "Il faut un compte GitHub (gratuit). Le dossier est privé : personne d'autre ne le voit. Le jeu public n'y touche jamais."));
    b.appendChild(h("div", { class: "sync-step" }, h("b", null, "1. Créer le dossier privé"),
      h("p", { class: "small" }, "Le lien ouvre GitHub avec tout rempli (nom « " + SYNC_REPO + " », privé). Clique simplement « Create repository » en bas."),
      h("a", { class: "btn sm", href: SYNC_NEW_REPO, target: "_blank", rel: "noopener" }, "Ouvrir GitHub : créer le dossier ↗")));
    b.appendChild(h("div", { class: "sync-step" }, h("b", null, "2. Créer la clé du livre"),
      h("p", { class: "small" }, "Le lien ouvre la page de la clé, déjà remplie (nom, sans date de fin, droit d'écrire les fichiers). Une seule chose à faire : dans « Repository access », choisis « Only select repositories » puis « " + SYNC_REPO + " ». Clique « Generate token », puis copie la clé (elle commence par github_pat_)."),
      h("a", { class: "btn sm", href: SYNC_NEW_KEY, target: "_blank", rel: "noopener" }, "Ouvrir GitHub : créer la clé ↗")));
    var inp = h("input", { type: "password", autocomplete: "off", placeholder: "github_pat_…", "aria-label": "Clé GitHub", value: m.token || "", oninput: function (e) { m.token = e.target.value; } });
    b.appendChild(h("div", { class: "sync-step" }, h("b", null, "3. Coller la clé ici"),
      h("div", { class: "row" }, inp, h("button", { class: "btn primary", disabled: !!m.busy, onclick: function () {
        var t = (m.token || "").trim(); if (!/^(github_pat_|ghp_)/.test(t)) { m.err = "ce n'est pas une clé GitHub (elle commence par github_pat_)"; render(); return; }
        m.busy = true; m.err = ""; render();
        Sync.connect(t).then(function () { m.busy = false; m.token = ""; render(); Sync.start(); }, function (e) { m.busy = false; m.err = e.message; render(); });
      } }, m.busy ? "Vérification…" : "Brancher")),
      h("p", { class: "small muted" }, "La clé reste dans ce navigateur. Le livre trouve tout seul le dossier, vérifie qu'il est privé et y range une première sauvegarde.")));
    if (m.err) b.appendChild(h("div", { class: "notice bad" }, "Pas encore : " + m.err + "."));
    box.appendChild(b);
  }

  // ------------------------------------------------------------------ the family board
  // Intent: renderFamily() -> Element = for each reader and each book: endings found, feats, bestiary, words learned.
  // Counts only, never the names of the endings: a brother must not spoil his sister's book (Clément, 13/11).
  function renderFamily() {
    var books = Object.keys(A.builtins).map(function (k) { return A.builtins[k]; }).filter(function (st) { return !st.multi && !st.kid; });
    var readers = A.profiles.filter(function (p) { return Object.keys(p.records || {}).length || Object.keys(p.words || {}).length; });
    if (!readers.length || !books.length) return null;
    var sec = h("section", { class: "section" }, h("h2", null, "🏆 Tableau de la famille"));
    var grid = h("div", { class: "family" });
    readers.forEach(function (p) {
      var ws = Words.list(p), known = ws.filter(function (w) { return w.known; }).length;
      var card = h("div", { class: "family-card" }, h("div", { class: "family-name" }, avatar(p), " ", h("b", null, p.name)));
      books.forEach(function (st) {
        var r = recordOf(p, st.id); if (!Object.keys(r.endings || {}).length && !Object.keys(r.feats || {}).length && !r.codex) return;
        var ends = M.endingsOf(st), feats = M.featsOf(st), foes = Object.keys(st.enemies || {});
        var nE = ends.filter(function (e) { return r.endings[e.id]; }).length, nF = feats.filter(function (f) { return r.feats[f.id]; }).length;
        var nB = foes.filter(function (k) { return r.codex && r.codex.foes[k]; }).length;
        card.appendChild(h("div", { class: "family-book" }, h("div", { class: "small" }, h("b", null, st.title)),
          h("div", { class: "family-stats" },
            h("span", { title: "Fins trouvées" }, "✦ " + nE + "/" + ends.length + " fins"),
            h("span", { title: "Hauts faits" }, "★ " + nF + "/" + feats.length),
            foes.length ? h("span", { title: "Bestiaire" }, "🐺 " + Math.round(nB * 100 / foes.length) + " %") : null)));
      });
      if (ws.length) card.appendChild(h("div", { class: "small family-words" }, "📚 " + ws.length + " mot" + (ws.length > 1 ? "s" : "") + " rencontré" + (ws.length > 1 ? "s" : "") + (known ? ", " + known + " trouvé" + (known > 1 ? "s" : "") + " au jeu" : "")));
      grid.appendChild(card);
    });
    sec.appendChild(grid);
    return sec;
  }

  // ------------------------------------------------------------------ parents' corner
  function hours(ms) { var m = Math.round((ms || 0) / 60000); return m < 60 ? m + " min" : Math.floor(m / 60) + " h " + String(m % 60).padStart(2, "0"); }
  function renderParents() {
    var open = A.open.parents;
    var sec = h("section", { class: "section" }, h("h2", null, h("button", { class: "btn ghost fold", "aria-expanded": open ? "true" : "false", onclick: function () { A.open.parents = !open; render(); } }, (open ? "▾ " : "▸ ") + "Espace parent")));
    if (!open) return sec;
    sec.appendChild(h("p", { class: "small muted" }, "Le temps compte la lecture entre deux choix (une pause de plus de trois minutes ne compte que pour trois). Les essais d'auteur ne sont pas comptés."));
    var tb = h("table", { class: "grid" }, h("thead", null, h("tr", null, ["Lecteur", "Temps de lecture", "Parties", "Choix faits", "Fins trouvées", "Hauts faits", "Dernière lecture"].map(function (x) { return h("th", null, x); }))));
    var body = h("tbody");
    A.profiles.forEach(function (p) {
      var gs = (A.allGames || []).filter(function (g) { return g.profil === p.id && !g.test; });
      var ms = gs.reduce(function (n, g) { return n + (g.playMs || 0); }, 0), turns = gs.reduce(function (n, g) { return n + (g.turns || 0); }, 0);
      var last = gs.reduce(function (n, g) { return Math.max(n, g.updated || 0); }, 0), rec = p.records || {}, nE = 0, nF = 0;
      Object.keys(rec).forEach(function (k) { nE += Object.keys(rec[k].endings || {}).length; nF += Object.keys(rec[k].feats || {}).length; });
      body.appendChild(h("tr", null, h("td", null, avatar(p), " ", p.name), h("td", null, hours(ms)), h("td", null, gs.length + (gs.filter(function (g) { return g.ended; }).length ? " (" + gs.filter(function (g) { return g.ended; }).length + " finie" + (gs.filter(function (g) { return g.ended; }).length > 1 ? "s" : "") + ")" : "")),
        h("td", null, String(turns)), h("td", null, String(nE)), h("td", null, String(nF)), h("td", null, last ? when(last) : "·")));
      gs.forEach(function (g) { body.appendChild(h("tr", { class: "sub" }, h("td", null, "  " + g.storyTitle), h("td", null, hours(g.playMs)), h("td", null, g.ended ? "finie" : "en cours"), h("td", null, String(g.turns || 0)), h("td", { colspan: 3 }, (g.where || "") + " · niveau " + (g.level || 1)))); });
    });
    tb.appendChild(body);
    sec.appendChild(h("div", { class: "scrollx" }, tb));
    sec.appendChild(renderBedtimeSettings());
    sec.appendChild(renderGoalSettings());
    return sec;
  }

  // Intent: bedtime = « dernière page avant de dormir » (Clément, 12/11): a parent sets how long a sitting lasts for
  // each reader; when the time is up the book proposes to stop at the next calm page, never in the middle of a fight.
  var BEDTIME = { 0: "Sans limite", 20: "20 min", 30: "30 min", 45: "45 min", 60: "1 h" };
  var SESSION_GAP_MS = 10 * 60 * 1000, BEDTIME_EXTRA_MIN = 5, BEDTIME_WARN_MIN = 5;
  function readingSession() {
    var now = Date.now(), se = lsGet("session");
    if (!se || !A.profile || se.profil !== A.profile.id || now - se.last > SESSION_GAP_MS) se = { profil: A.profile && A.profile.id, start: now, extra: 0 };
    se.last = now; lsSet("session", se); return se;
  }
  function bedtimeLeft() {
    var lim = +(pref("bedtime") || 0); if (!lim) return null;
    var se = readingSession(); return lim + (se.extra || 0) - (Date.now() - se.start) / 60000;
  }
  function bedtimeAfterChoice() {
    A.bedWarn = false;
    var G = A.game; if (!G || G.multi || G.ephemeral) return;
    var left = bedtimeLeft(); if (left == null) return;
    var v = M.view(G.story, G.s);
    if (left > 0) { A.bedWarn = left <= BEDTIME_WARN_MIN; return; }
    if (G.s.combat || v.kind === "combat" || v.kind === "end") { A.bedWarn = true; return; }
    stopSpeaking(); A.modal = { kind: "bedtime" };
  }
  function modalBedtime(box, close) {
    var se = readingSession(), lim = +(pref("bedtime") || 0);
    modalHead(box, "C'est l'heure de refermer le livre", close);
    box.appendChild(h("div", { class: "drawer-body" },
      h("p", null, "Tu lis depuis " + Math.round((Date.now() - se.start) / 60000) + " minutes" + (lim ? " (la séance était prévue pour " + BEDTIME[lim] + ")" : "") + ". L'histoire t'attendra : ta partie est sauvegardée à cette page, et un « Précédemment… » te remettra dedans la prochaine fois."),
      h("div", { class: "row" },
        h("button", { class: "btn primary", onclick: function () { A.modal = null; lsSet("session", null); leaveGame(); } }, "Refermer le livre"),
        (se.extra || 0) < BEDTIME_EXTRA_MIN ? h("button", { class: "btn", onclick: function () { se.extra = (se.extra || 0) + BEDTIME_EXTRA_MIN; lsSet("session", se); close(); } }, "Encore " + BEDTIME_EXTRA_MIN + " minutes") : null)));
  }
  function renderBedtimeSettings() {
    if (!A.profiles.length) return null;
    return h("div", { class: "stack tight" },
      h("h3", { class: "sub-h" }, "Durée d'une séance de lecture"),
      h("p", { class: "small muted" }, "Quand le temps est passé, le livre propose de s'arrêter à la prochaine page calme, jamais en plein combat. Le lecteur peut demander une seule fois cinq minutes de plus."),
      A.profiles.map(function (p) {
        var cur = +((p.prefs || {}).bedtime || 0);
        return h("div", { class: "row" }, h("span", { style: "min-width:8em" }, avatar(p), " ", p.name),
          h("div", { class: "seg", role: "group", "aria-label": "Durée pour " + p.name }, Object.keys(BEDTIME).map(function (k) {
            return h("button", { class: "btn sm" + (cur === +k ? " on" : ""), "aria-pressed": cur === +k ? "true" : "false", onclick: function () {
              p.prefs = p.prefs || {}; p.prefs.bedtime = +k;
              if (A.profile && A.profile.id === p.id && A.profile !== p) { A.profile.prefs = A.profile.prefs || {}; A.profile.prefs.bedtime = +k; }
              Store.put("profils", p.id, p).catch(function () {}); render();
            } }, BEDTIME[k]);
          })));
      }));
  }

  // ------------------------------------------------------------------ reading stamps
  // Intent: a parent sets a weekly goal per reader (n sittings of m minutes); a week that reaches it gives a stamp in
  // the reader's carnet. Reading time per day is kept in each game (doc.days), so nothing new goes to the profile but
  // the goal (prefs.goal = "n×m"). Why: Clément, 13/11 « tampons de lecture ».
  var GOALS = { "": "Aucun", "2x15": "2 × 15 min", "3x20": "3 × 20 min", "5x20": "5 × 20 min", "7x15": "7 × 15 min" };
  var STAMPS_SHOWN = 12;                       // the last weeks shown in the carnet
  function dayKey(t) { var d = new Date(t); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function weekStart(t) { var d = new Date(t); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return d.getTime(); }
  function goalOf(p) { var g = String(((p && p.prefs) || {}).goal || ""), m = /^(\d+)x(\d+)$/.exec(g); return m ? { n: +m[1], min: +m[2], key: g } : null; }
  // Intent: stamps(Profile) -> { goal, weeks: [{ start, days, ok }] (newest first), now } = the sittings that reached
  // the goal's length, week by week, from every game of this reader.
  function stampsOf(p) {
    var goal = goalOf(p); if (!goal) return null;
    var byDay = {};
    (A.allGames || []).forEach(function (g) {
      if (g.profil !== p.id || g.test) return;
      var days = g.days || (A.game && A.game.doc && A.game.doc.id === g.id ? A.game.doc.days : null) || {};
      Object.keys(days).forEach(function (k) { byDay[k] = (byDay[k] || 0) + days[k]; });
    });
    if (A.game && A.game.doc && A.game.doc.profil === p.id && !(A.allGames || []).some(function (g) { return g.id === A.game.doc.id; })) Object.keys(A.game.doc.days || {}).forEach(function (k) { byDay[k] = (byDay[k] || 0) + A.game.doc.days[k]; });
    var weeks = {};
    Object.keys(byDay).forEach(function (k) {
      if (byDay[k] < goal.min * 60000) return;
      var p3 = k.split("-"), ws = weekStart(new Date(+p3[0], +p3[1] - 1, +p3[2]).getTime());
      weeks[ws] = (weeks[ws] || 0) + 1;
    });
    var now = weekStart(Date.now());
    var list = Object.keys(weeks).map(Number).sort(function (x, y) { return y - x; }).map(function (ws) { return { start: ws, days: weeks[ws], ok: weeks[ws] >= goal.n }; });
    return { goal: goal, weeks: list, now: weeks[now] || 0, nowOk: (weeks[now] || 0) >= goal.n };
  }
  function weekLabel(t) { return "semaine du " + new Date(t).toLocaleDateString("fr-FR", { day: "numeric", month: "long" }); }
  function renderStamps(p) {
    var S = stampsOf(p); if (!S) return null;
    var got = S.weeks.filter(function (w) { return w.ok; });
    var box = h("div", { class: "stamps" }, h("span", { class: "label" }, "Tampons de lecture"),
      h("div", { class: "small" }, "Cette semaine : " + Math.min(S.now, S.goal.n) + " séance" + (S.goal.n > 1 ? "s" : "") + " sur " + S.goal.n + " (au moins " + S.goal.min + " min chacune)" + (S.nowOk ? ". Tampon gagné !" : ".")),
      h("div", { class: "stamp-row", role: "list" }, Array.apply(null, Array(S.goal.n)).map(function (_, i) { return h("span", { class: "stamp-dot" + (i < S.now ? " on" : ""), role: "listitem", "aria-label": i < S.now ? "séance faite" : "séance à faire" }); })));
    if (got.length) box.appendChild(h("div", { class: "stamp-grid" }, got.slice(0, STAMPS_SHOWN).map(function (w) {
      return h("div", { class: "stamp", title: weekLabel(w.start) }, h("span", { class: "stamp-ink", "aria-hidden": "true" }, "✦"), h("span", { class: "small" }, new Date(w.start).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })));
    })));
    if (got.length > STAMPS_SHOWN) box.appendChild(h("div", { class: "small muted" }, "et " + (got.length - STAMPS_SHOWN) + " tampon" + (got.length - STAMPS_SHOWN > 1 ? "s" : "") + " plus ancien" + (got.length - STAMPS_SHOWN > 1 ? "s" : "") + "."));
    return box;
  }
  function renderGoalSettings() {
    if (!A.profiles.length) return null;
    return h("div", { class: "stack tight" },
      h("h3", { class: "sub-h" }, "Objectif de lecture de la semaine"),
      h("p", { class: "small muted" }, "Chaque semaine (du lundi au dimanche) qui atteint l'objectif donne un tampon dans le carnet du lecteur. Une séance compte quand on a lu au moins le temps demandé dans la journée."),
      A.profiles.map(function (p) {
        var cur = (goalOf(p) || {}).key || "", S = stampsOf(p);
        return h("div", { class: "row" }, h("span", { style: "min-width:8em" }, avatar(p), " ", p.name),
          h("div", { class: "seg", role: "group", "aria-label": "Objectif pour " + p.name }, Object.keys(GOALS).map(function (k) {
            return h("button", { class: "btn sm" + (cur === k ? " on" : ""), "aria-pressed": cur === k ? "true" : "false", onclick: function () {
              p.prefs = p.prefs || {}; p.prefs.goal = k;
              if (A.profile && A.profile.id === p.id && A.profile !== p) { A.profile.prefs = A.profile.prefs || {}; A.profile.prefs.goal = k; }
              Store.put("profils", p.id, p).catch(function () {}); render();
            } }, GOALS[k]);
          })),
          S ? h("span", { class: "small muted" }, S.weeks.filter(function (w) { return w.ok; }).length + " tampon(s) · cette semaine " + Math.min(S.now, S.goal.n) + "/" + S.goal.n) : null);
      }));
  }

  // ------------------------------------------------------------------ young authors' workshop
  // Intent: renderKids = a simple editor for children (Clément, 12/11): pages, text, up to KID_CHOICES choices that lead
  // to a new or an existing page, endings; saved as an ordinary story, playable in the library.
  var KID_CHOICES = 3;
  function kidNew() {
    var st = edSkeleton();
    st.title = "Mon histoire"; st.kid = { author: A.profile ? A.profile.name : "", profil: A.profile ? A.profile.id : null }; st.skin = "parchemin";
    st.summary = "Une histoire écrite par " + (st.kid.author || "un jeune auteur") + ".";
    st.passages = { debut: { act: "I", title: "Il était une fois", place: "village", text: [""], choices: [] } };
    st.world.places.village.name = "Le début";
    A.kid = { story: st, sel: "debut", msg: "", dirty: true }; A.screen = "kids"; render(); window.scrollTo(0, 0);
  }
  function kidOpen(id) { loadStory(id).then(function (st) { A.kid = { story: clone(st), sel: st.start, msg: "", dirty: false }; A.screen = "kids"; render(); window.scrollTo(0, 0); }); }
  function kidPages(st) { return Object.keys(st.passages); }
  function kidNewPage(st, title) {
    var n = kidPages(st).length + 1, id = "page-" + n; while (st.passages[id]) id = "page-" + (++n);
    st.passages[id] = { act: "I", title: title || "Page " + n, text: [""], choices: [] };
    return id;
  }
  // Friendly checks, in a child's words, before the engine's own.
  function kidProblems(st) {
    var out = [];
    if (!st.title.trim()) out.push("Ton histoire n'a pas encore de titre.");
    kidPages(st).forEach(function (id) {
      var p = st.passages[id], t = (p.text || []).join("").trim();
      if (!t) out.push("La page « " + p.title + " » est encore vide.");
      if (!p.end && !(p.choices || []).length) out.push("La page « " + p.title + " » n'a pas de suite : ajoute un choix, ou coche « C'est une fin ».");
      (p.choices || []).forEach(function (c) { if (!c.label.trim()) out.push("Un choix de la page « " + p.title + " » n'a pas de texte."); });
    });
    if (!kidPages(st).some(function (id) { return st.passages[id].end; })) out.push("Il faut au moins une page de fin.");
    var seen = {}, todo = [st.start]; while (todo.length) { var k = todo.pop(); if (seen[k] || !st.passages[k]) continue; seen[k] = 1; (st.passages[k].choices || []).forEach(function (c) { todo.push(c.to); }); }
    kidPages(st).forEach(function (id) { if (!seen[id]) out.push("Aucun choix ne mène à la page « " + st.passages[id].title + " »."); });
    return out;
  }
  function kidSave(then) {
    var K = A.kid, st = K.story, pb = kidProblems(st);
    if (pb.length) { K.msg = pb.join("\n"); K.bad = true; render(); return; }
    var rep = V.staticCheck(clone(st));
    if (rep.errors.length) { K.msg = "Le livre a trouvé un souci : " + rep.errors.join(" ; "); K.bad = true; render(); return; }
    st.version = (st.version || 1) + 1;
    storeStory(st).then(refresh).then(function () { K.dirty = false; K.msg = "Enregistrée ! Elle est maintenant dans la bibliothèque."; K.bad = false; render(); if (then) then(); })
      .catch(function (e) { K.msg = "L'enregistrement a échoué (" + ((e && e.message) || e) + ")."; K.bad = true; render(); });
  }
  function renderKids() {
    var K = A.kid, st = K.story, p = st.passages[K.sel] || st.passages[st.start];
    var touch = function () { K.dirty = true; K.msg = ""; };
    app.appendChild(topBar([h("button", { class: "btn ghost sm", onclick: function () { A.kid = null; A.screen = "home"; render(); } }, "← Bibliothèque"),
      h("span", { class: "brand grow" }, "J'écris mon histoire" + (K.dirty ? " ·" : "")),
      h("button", { class: "btn sm", onclick: function () { kidSave(); } }, "Enregistrer"),
      h("button", { class: "btn sm primary", onclick: function () { kidSave(function () { newGame(st.id); }); } }, "▶ Jouer mon histoire")]));
    var w = h("main", { class: "wrap kids" });
    if (K.msg) w.appendChild(h("div", { class: "notice" + (K.bad ? " bad" : " soft"), style: "white-space:pre-line" }, K.msg));
    w.appendChild(h("label", { class: "stack tight" }, h("span", { class: "label" }, "Le titre de ton histoire"),
      h("input", { value: st.title, maxlength: 60, class: "kid-title", oninput: function (e) { st.title = e.target.value; touch(); } })));
    w.appendChild(seg2(Object.keys(SKINS).filter(function (k) { return k !== "histoire"; }).reduce(function (o, k) { o[k] = SKINS[k]; return o; }, {}), st.skin || "sobre", "L'habillage du livre", function (k) { st.skin = k; touch(); render(); }));
    // The pages, as a row of cards.
    w.appendChild(h("div", { class: "label" }, "Les pages"));
    w.appendChild(h("div", { class: "kid-pages" }, kidPages(st).map(function (id) {
      var q = st.passages[id];
      return h("button", { class: "kid-page" + (id === K.sel ? " on" : "") + (q.end ? " end" : ""), onclick: function () { K.sel = id; render(); } },
        h("b", null, q.title || id), h("span", { class: "small muted" }, id === st.start ? "le début" : q.end ? "une fin" : (q.choices || []).length + " choix"));
    }), h("button", { class: "kid-page add", onclick: function () { K.sel = kidNewPage(st); touch(); render(); } }, "+ Une page")));
    // The page being written.
    var form = h("section", { class: "page kid-form" });
    form.appendChild(h("label", { class: "stack tight" }, h("span", { class: "label" }, "Titre de la page"),
      h("input", { value: p.title, maxlength: 60, oninput: function (e) { p.title = e.target.value; touch(); } })));

    var kidTa = h("textarea", { rows: 9, class: "kid-text", oninput: function (e) { p.text = e.target.value.split(/\n\s*\n/).map(function (x) { return x.trim(); }); touch(); } }, (p.text || []).join("\n\n"));
    var dictLive = h("span", { class: "small muted dict-live", "aria-live": "polite" });
    form.appendChild(h("label", { class: "stack tight" }, h("span", { class: "label" }, "Ce qui se passe (laisse une ligne vide entre deux paragraphes)"), kidTa));
    if (Dictation.available()) {
      var dictBtn = h("button", { type: "button", class: "btn sm", onclick: function () { Dictation.toggle(kidTa, dictBtn, dictLive); } }, "🎤 Dicter");
      form.appendChild(h("div", { class: "row" }, dictBtn, dictLive));
      form.appendChild(h("p", { class: "small muted" }, "Dis « point », « virgule », « point d'interrogation », « à la ligne » ou « nouveau paragraphe » pour la ponctuation."));
    }
    form.appendChild(h("label", { class: "toggle" }, h("input", { type: "checkbox", checked: !!p.end, onchange: function (e) { p.end = e.target.checked; if (p.end) p.choices = []; touch(); render(); } }), h("span", null, h("b", null, "C'est une fin"), h("br"), h("span", { class: "small muted" }, "L'histoire s'arrête ici."))));
    if (!p.end) {
      form.appendChild(h("div", { class: "label" }, "Les choix (" + KID_CHOICES + " au plus)"));
      (p.choices || []).forEach(function (c, i) {
        var targets = kidPages(st).filter(function (id) { return id !== K.sel; });
        form.appendChild(h("div", { class: "row kid-choice" },
          h("input", { value: c.label, placeholder: "Ce que le héros peut faire", maxlength: 80, class: "grow", oninput: function (e) { c.label = e.target.value; touch(); },
            // A page made for this choice and not written yet takes the choice's words as its title.
            onchange: function () { var q = st.passages[c.to]; if (q && /^Page \d+$/.test(q.title) && !(q.text || []).join("").trim() && c.label.trim()) q.title = c.label.trim(); } }), // no render here: it would swallow the click that caused the blur
          h("select", { "aria-label": "Page où mène ce choix", onchange: function (e) {
            if (e.target.value === "+") { c.to = kidNewPage(st, c.label.trim() || null); } else c.to = e.target.value;
            touch(); render();
          } }, h("option", { value: "+" }, "→ une nouvelle page"), targets.map(function (id) { return h("option", { value: id, selected: c.to === id }, "→ " + (st.passages[id].title || id)); })),
          c.to && st.passages[c.to] ? h("button", { class: "btn sm ghost", onclick: function () { K.sel = c.to; render(); } }, "Écrire cette page") : null,
          h("button", { class: "btn sm ghost", "aria-label": "Retirer ce choix", onclick: function () { p.choices.splice(i, 1); touch(); render(); } }, "✕")));
      });
      if ((p.choices || []).length < KID_CHOICES) form.appendChild(h("button", { class: "btn sm", onclick: function () {
        p.choices = p.choices || []; var c = { label: "", to: null }; c.to = kidNewPage(st, null); p.choices.push(c); touch(); render();
      } }, "+ Un choix"));
    }
    if (K.sel !== st.start) form.appendChild(h("button", { class: "btn sm ghost danger", style: "margin-top:12px", onclick: function () {
      var gone = K.sel; delete st.passages[gone];
      kidPages(st).forEach(function (id) { st.passages[id].choices = (st.passages[id].choices || []).filter(function (c) { return c.to !== gone; }); });
      K.sel = st.start; touch(); render();
    } }, "Supprimer cette page"));
    w.appendChild(form);
    app.appendChild(w);
  }
  function seg2(map, cur, label, set) {
    return h("div", { class: "stack tight" }, h("span", { class: "label" }, label), h("div", { class: "seg", role: "group", "aria-label": label },
      Object.keys(map).map(function (k) { return h("button", { class: "btn sm" + (cur === k ? " on" : ""), "aria-pressed": cur === k ? "true" : "false", onclick: function () { set(k); } }, map[k]); })));
  }
  function renderKidsShelf() {
    var mine = allStories().filter(function (m) { return m.kid; });
    return h("section", { class: "section" }, h("h2", null, "J'écris mon histoire"),
      h("p", { class: "small muted" }, "Invente une histoire à choix : des pages, des choix qui mènent d'une page à l'autre, et une ou plusieurs fins. Elle rejoint la bibliothèque, et toute la famille peut la jouer."),
      h("div", { class: "row" }, h("button", { class: "btn primary", onclick: kidNew }, "✏️ Nouvelle histoire"),
        mine.map(function (m) { return h("button", { class: "btn", onclick: function () { kidOpen(m.id); } }, "✎ " + m.title + (m.kid.author ? " · " + m.kid.author : "")); })));
  }

  // ------------------------------------------------------------------ the author's workshop: reports, try a passage, editor
  function renderAtelier() {
    var open = A.open.atelier;
    var sec = h("section", { class: "section" }, h("h2", null, h("button", { class: "btn ghost fold", "aria-expanded": open ? "true" : "false", onclick: function () { A.open.atelier = !open; if (!open) loadSignals(); render(); } }, (open ? "▾ " : "▸ ") + "Atelier d'auteur")));
    if (!open) return sec;
    sec.appendChild(h("p", { class: "small muted" }, "Pour écrire et corriger les histoires : essayer un passage précis, modifier une histoire, relire les signalements."));
    sec.appendChild(h("div", { class: "row" },
      h("button", { class: "btn", onclick: function () { openEssai(null, null); } }, "▶ Essayer un passage"),
      h("button", { class: "btn", onclick: function () { A.ed = null; A.screen = "editor"; render(); window.scrollTo(0, 0); } }, "✎ Éditeur d'histoires")));
    var sig = A.signals || [];
    sec.appendChild(h("h3", { class: "sub-h" }, "Signalements" + (sig.length ? " · " + sig.length : "")));
    if (!sig.length) sec.appendChild(h("div", { class: "notice" }, "Aucun. Le bouton « ⚑ Signaler » sous chaque page en ajoute un."));
    sig.forEach(function (x) {
      sec.appendChild(h("div", { class: "save-line" }, h("div", { class: "grow" }, h("b", null, (x.lecteur || "?") + " · " + (A.builtins[x.story] ? A.builtins[x.story].title : x.story) + " · § " + x.node),
        h("div", null, x.note), h("div", { class: "small muted" }, (x.title || "") + " · " + when(x.created))),
        h("button", { class: "btn sm ghost", onclick: function () { Store.del("signalements", x.id).then(loadSignals); } }, "Effacer")));
    });
    if (sig.length && canDownload()) sec.appendChild(h("button", { class: "btn sm", onclick: function () { download("signalements.json", JSON.stringify(sig, null, 1)); } }, "Exporter les signalements"));
    return sec;
  }
  function loadSignals() { return Store.list("signalements").then(function (l) { A.signals = l.sort(function (a, b) { return (b.created || 0) - (a.created || 0); }); render(); }); }

  // Try a passage: a throwaway game that starts anywhere, with the party, things, tags and hour chosen (nothing saved).
  function openEssai(story, passage, back) {
    A.essai = { story: story, storyId: story ? story.id : (allStories().filter(function (m) { return !m.multi; })[0] || {}).id, passage: passage || "", arch: "guerrier", level: 0, difficulty: "aventurier", comps: {}, items: "", flags: "", hour: "", back: back || null };
    A.screen = "essai"; render(); window.scrollTo(0, 0);
  }
  function renderEssai() {
    var E = A.essai, back = function () { A.screen = E.back || "home"; render(); };
    app.appendChild(topBar([h("button", { class: "btn ghost sm", onclick: back }, E.back === "editor" ? "← Éditeur" : "← Bibliothèque"), h("span", { class: "brand grow" }, "Essayer un passage")]));
    var w = h("main", { class: "wrap read create" });
    if (!E.story && E.storyId && !E.loaded) { E.loaded = true; loadStory(E.storyId).then(function (st) { E.story = st; render(); }); }
    w.appendChild(h("p", { class: "small muted" }, "Une partie jetable qui commence où tu veux, avec le groupe, les objets, les marques et l'heure de ton choix. Rien n'est enregistré, rien ne compte pour les fins ni les hauts faits."));
    if (!E.back) w.appendChild(h("div", { class: "stack tight" }, h("span", { class: "label" }, "Histoire"), h("select", { onchange: function (e) { E.storyId = e.target.value; E.story = null; E.loaded = false; E.passage = ""; render(); } },
      allStories().filter(function (m) { return !m.multi; }).map(function (m) { return h("option", { value: m.id, selected: m.id === E.storyId }, m.title); }))));
    var st = E.story;
    if (!st) { w.appendChild(h("p", null, "Ouverture de l'histoire…")); app.appendChild(w); return; }
    var ids = Object.keys(st.passages).sort();
    var dl = h("datalist", { id: "essai-passages" }, ids.map(function (id) { return h("option", { value: id }, String(st.passages[id].title || "").replace(/\*/g, "")); }));
    var pin = h("input", { list: "essai-passages", value: E.passage, placeholder: "identifiant du passage (ex. " + st.start + ")", oninput: function (e) { E.passage = e.target.value.trim(); hint.textContent = st.passages[E.passage] ? "« " + String(st.passages[E.passage].title || "").replace(/\*/g, "") + " »" + (st.passages[E.passage].act ? " · acte " + st.passages[E.passage].act : "") : "passage inconnu"; } });
    var hint = h("span", { class: "small muted" }, st.passages[E.passage] ? "« " + String(st.passages[E.passage].title || "").replace(/\*/g, "") + " »" : "");
    w.appendChild(h("div", { class: "stack tight" }, h("span", { class: "label" }, "Passage"), pin, dl, hint));
    w.appendChild(h("div", { class: "row" },
      h("label", { class: "stack tight" }, h("span", { class: "label" }, "Voie"), h("select", { onchange: function (e) { E.arch = e.target.value; } }, Object.keys(M.ARCHS).map(function (k) { return h("option", { value: k, selected: E.arch === k }, M.ARCHS[k].label); }))),
      h("label", { class: "stack tight" }, h("span", { class: "label" }, "Niveau"), h("input", { type: "number", min: 0, max: 30, value: E.level || "", placeholder: "celui de l'acte", style: "width:9em", oninput: function (e) { E.level = +e.target.value || 0; } })),
      h("label", { class: "stack tight" }, h("span", { class: "label" }, "Difficulté"), h("select", { onchange: function (e) { E.difficulty = e.target.value; } }, Object.keys(M.DIFFICULTY).map(function (k) { return h("option", { value: k, selected: E.difficulty === k }, M.DIFFICULTY[k].label); }))),
      h("label", { class: "stack tight" }, h("span", { class: "label" }, "Heure"), h("select", { onchange: function (e) { E.hour = e.target.value; } }, [["", "celle du départ"], ["10", "le matin"], ["15", "l'après-midi"], ["19", "le soir"], ["23", "la nuit"]].map(function (o) { return h("option", { value: o[0], selected: E.hour === o[0] }, o[1]); })))));
    var comps = Object.keys(st.companions || {}).filter(function (k) { return !(st.heroes || {})[k]; });
    if (comps.length) w.appendChild(h("div", { class: "stack tight" }, h("span", { class: "label" }, "Compagnons dans le groupe"), h("div", { class: "row" }, comps.map(function (k) {
      return h("label", { class: "row small" }, h("input", { type: "checkbox", checked: !!E.comps[k], onchange: function (e) { E.comps[k] = e.target.checked; } }), st.companions[k].name);
    }))));
    var itemIds = Object.keys(st.items || {});
    w.appendChild(h("div", { class: "stack tight" }, h("span", { class: "label" }, "Objets en plus (identifiants séparés par des virgules)"), h("input", { list: "essai-items", value: E.items, oninput: function (e) { E.items = e.target.value; } }),
      h("datalist", { id: "essai-items" }, itemIds.map(function (k) { return h("option", { value: k }, st.items[k].name); }))));
    w.appendChild(h("div", { class: "stack tight" }, h("span", { class: "label" }, "Marques posées (une par ligne, comme dans l'histoire)"), h("textarea", { rows: 4, value: E.flags, oninput: function (e) { E.flags = e.target.value; } }, E.flags)));
    w.appendChild(h("div", { class: "row" }, h("button", { class: "btn primary", onclick: startEssai }, "▶ Lancer l'essai"), E.err ? h("span", { class: "why" }, E.err) : null));
    app.appendChild(w);
  }
  function startEssai() {
    var E = A.essai, st = E.story;
    if (!st.passages[E.passage]) { E.err = "Choisis un passage qui existe."; render(); return; }
    E.err = "";
    try {
      M.prepare(st);
      var s = M.freshState(st, { toutJouer: false, difficulty: E.difficulty });
      s.name = "Essai"; s.arch = E.arch;
      M.start(st, s);
      if (E.level) s.ep = Math.max(s.ep, E.level * M.EP_PER_LEVEL);
      if (s.pv != null) s.pv = M.pvMax(s);
      var joins = Object.keys(E.comps).filter(function (k) { return E.comps[k]; });
      var items = E.items.split(",").map(function (x) { return x.trim(); }).filter(Boolean);
      var flags = E.flags.split(/\n/).map(function (x) { return x.trim(); }).filter(Boolean);
      s.events = [];
      M.apply(st, s, { join: joins, flag: flags, item: items.filter(function (x) { return (st.items || {})[x]; }) });
      if (E.hour) s.time = Math.floor(s.time / 24) * 24 + (+E.hour);
      s.travel = null; s.combat = null;
      M.enter(st, s, E.passage);
      s.events = [{ text: "Essai : partie jetable, rien n'est enregistré.", cls: "" }].concat(s.events);
      A.game = { doc: { id: "essai", profil: A.profile ? A.profile.id : "", story: st.id, storyTitle: st.title, test: true }, story: st, s: s, undo: [], log: [], ephemeral: true, back: E.back ? "editor" : "essai" };
      logStep(); A.screen = "game"; render(); window.scrollTo(0, 0);
    } catch (e) { E.err = "L'essai n'a pas pu partir : " + e.message; render(); }
  }

  // ------------------------------------------------------------------ the story editor
  // Intent: edit(Story) -> Story = passages, paragraphs with their tags, choices; everything else as JSON
  // Why: Clément (12/11): write a story inside the app, tags chosen from lists, tried at once. What the forms do not
  // cover stays reachable as the passage's own JSON, so nothing in the format is out of reach.
  function edStories() { return allStories().filter(function (m) { return !m.multi; }); }
  function renderEditor() {
    var E = A.ed;
    app.appendChild(topBar([h("button", { class: "btn ghost sm", onclick: function () { if (E && E.dirty && !confirmLeave()) return; A.ed = null; A.screen = "home"; refresh().then(render); } }, "← Bibliothèque"),
      h("span", { class: "brand grow" }, E ? "Éditeur · " + E.story.title + (E.dirty ? " · modifiée" : "") : "Éditeur d'histoires"),
      E ? h("button", { class: "btn sm", onclick: edCheck }, "Vérifier") : null,
      E ? h("button", { class: "btn sm primary", onclick: edSave }, "Enregistrer") : null,
      E && canDownload() ? h("button", { class: "btn sm", onclick: function () { download(E.story.id + ".json", JSON.stringify(E.story, null, 1)); } }, "Exporter") : null]));
    var w = h("main", { class: "wrap" });
    if (!E) { edPick(w); app.appendChild(w); return; }
    if (E.msg) w.appendChild(h("div", { class: "notice" + (E.msgBad ? " bad" : "") }, E.msg));
    if (E.report) w.appendChild(h("pre", { class: "report" }, E.report));
    w.appendChild(h("nav", { class: "tabs" }, [["passage", "Passages"], ["histoire", "L'histoire"], ["donnees", "Données (JSON)"]].map(function (t) { return h("button", { class: "tab" + (E.tab === t[0] ? " on" : ""), onclick: function () { E.tab = t[0]; render(); } }, t[1]); })));
    if (E.tab === "histoire") edStory(w);
    else if (E.tab === "donnees") edData(w);
    else edPassages(w);
    app.appendChild(w);
  }
  function confirmLeave() { try { return window.confirm("Des modifications ne sont pas enregistrées. Quitter quand même ?"); } catch (e) { return true; } }
  function edPick(w) {
    w.appendChild(h("div", { class: "hero-head" }, h("h1", null, "Éditeur d'histoires"), h("p", null, "Une histoire importée se modifie directement. Une histoire fournie avec le jeu se copie d'abord : la copie apparaît dans la bibliothèque, l'originale ne change pas.")));
    var cards = h("div", { class: "cards" });
    edStories().forEach(function (m) {
      cards.appendChild(h("article", { class: "card" }, h("h3", null, m.title), h("div", { class: "small muted" }, m.passages + " passages" + (m.builtin ? " · fournie" : " · importée")),
        h("div", { class: "row" }, h("button", { class: "btn primary sm", onclick: function () { edOpen(m, m.builtin); } }, m.builtin ? "Copier pour modifier" : "Modifier"))));
    });
    cards.appendChild(h("article", { class: "card" }, h("h3", null, "Nouvelle histoire"), h("p", { class: "small muted" }, "Un squelette : un acte, un lieu, un passage de départ, une fin."),
      h("div", { class: "row" }, h("button", { class: "btn primary sm", onclick: function () { edLoad(edSkeleton()); } }, "Commencer"))));
    w.appendChild(cards);
  }
  function edSkeleton() {
    var id = "histoire-" + uid().slice(-5);
    return { id: id, title: "Nouvelle histoire", subtitle: "", summary: "", version: 1, start: "debut", intro: [], acts: [{ id: "I", title: "Acte I", start: "debut", levels: [1, 3], question: "" }],
      companions: {}, factions: {}, relics: {}, mysteries: {}, clues: {}, quests: [], people: {}, items: {}, enemies: {}, shops: {}, past: [],
      world: { places: { village: { name: "Le village", map: "monde", x: 50, y: 40, arrive: "debut", desc: "", ambiance: "village" } }, routes: [], regions: {}, events: {}, start: { place: "village", gold: 10, food: 3 } },
      banter: [], passages: {
        debut: { act: "I", title: "Le commencement", place: "village", text: ["Écris ici le premier paragraphe."], choices: [{ label: "Aller jusqu'à la fin", to: "fin" }] },
        fin: { act: "I", title: "La fin", end: true, text: ["Écris ici la fin."], choices: [] } } };
  }
  function edOpen(m, copy) {
    loadStory(m.id).then(function (st) {
      var s2 = clone(st);
      if (copy) { s2.id = st.id + "-" + uid().slice(-4); s2.title = st.title + " (copie)"; s2.version = 1; }
      edLoad(s2, !!copy);
    });
  }
  function edLoad(st, dirty) { A.ed = { story: st, tab: "passage", sel: st.start, q: "", dirty: dirty !== false, msg: "", report: "" }; render(); window.scrollTo(0, 0); }
  function edDirty() { if (!A.ed.dirty) { A.ed.dirty = true; var b = document.querySelector(".brand"); if (b) b.textContent += " · modifiée"; } }
  function edCheck() {
    var E = A.ed, rep = V.staticCheck(clone(E.story)), strict = rep.errors.length ? [] : V.strictCheck(clone(E.story));
    E.report = (rep.errors.length ? rep.errors.length + " erreur(s) :\n" + rep.errors.join("\n") : "Aucune erreur.") + (rep.warnings.length ? "\n\nRemarques :\n" + rep.warnings.join("\n") : "") +
      (strict.length ? "\n\nLecture stricte (" + strict.length + ") :\n" + strict.map(function (x) { return x.msg; }).join("\n") : "");
    E.msg = ""; render();
  }
  // Intent: store(Story) -> Promise ! writes the story in parts under the db's document limit
  function storeStory(st) {
    var txt = JSON.stringify(st), parts = Math.ceil(txt.length / PART_CHARS), jobs = [];
    for (var i = 0; i < parts; i++) jobs.push(Store.put("scenarioParts", st.id + "~" + i, { chunk: txt.slice(i * PART_CHARS, (i + 1) * PART_CHARS) }));
    return Promise.all(jobs).then(function () { var m = storyMeta(st); m.parts = parts; m.imported = Date.now(); m.updated = Date.now(); return Store.put("scenarios", st.id, m); });
  }
  function edSave() {
    var E = A.ed, st = E.story, rep = V.staticCheck(clone(st));
    if (rep.errors.length) { E.msg = "Pas enregistrée : " + rep.errors.length + " erreur(s) à corriger d'abord (le détail est ci-dessous)."; E.msgBad = true; E.report = rep.errors.join("\n"); render(); return; }
    st.version = (st.version || 1) + (E.saved ? 0 : 1); E.saved = true;
    storeStory(st).then(refresh).then(function () { E.dirty = false; E.msg = "Enregistrée dans la bibliothèque" + (rep.warnings.length ? " (" + rep.warnings.length + " remarque(s), voir Vérifier)." : "."); E.msgBad = false; E.report = ""; render(); },
      function (e) { E.msg = "L'enregistrement a échoué (" + ((e && e.code) || e) + ")."; E.msgBad = true; render(); });
  }
  function edStory(w) {
    var st = A.ed.story;
    function line(label, key, area) {
      var inp = h(area ? "textarea" : "input", { rows: area ? 3 : null, value: st[key] || "", oninput: function (e) { st[key] = e.target.value; edDirty(); } }, area ? (st[key] || "") : null);
      return h("label", { class: "stack tight" }, h("span", { class: "label" }, label), inp);
    }
    var b = h("div", { class: "stack ed-form" }, line("Titre", "title"), line("Sous-titre", "subtitle"), line("Résumé", "summary", true),
      h("label", { class: "stack tight" }, h("span", { class: "label" }, "Passage de départ"), passageInput(st.start, function (v) { st.start = v; })),
      h("label", { class: "stack tight" }, h("span", { class: "label" }, "Habillage"), h("select", { onchange: function (e) { if (e.target.value) st.skin = e.target.value; else delete st.skin; edDirty(); } },
        h("option", { value: "" }, "sobre"), ["parchemin", "givre", "sable", "enluminure"].map(function (k) { return h("option", { value: k, selected: st.skin === k }, SKINS[k]); }))),
      h("label", { class: "stack tight" }, h("span", { class: "label" }, "Introduction (un paragraphe par ligne vide)"), h("textarea", { rows: 5, oninput: function (e) { st.intro = e.target.value.split(/\n\s*\n/).map(function (x) { return x.trim(); }).filter(Boolean); edDirty(); } }, (st.intro || []).join("\n\n"))),
      h("div", { class: "small muted" }, "Identifiant : " + st.id + " · version " + (st.version || 1)));
    w.appendChild(b);
  }
  var ED_DATA = [["acts", "Actes"], ["world", "Monde : lieux, routes, régions, événements, départ"], ["companions", "Compagnons"], ["heroes", "Héros jouables"], ["items", "Objets"], ["enemies", "Adversaires"], ["shops", "Boutiques"],
    ["mysteries", "Mystères"], ["clues", "Indices"], ["quests", "Quêtes"], ["people", "Personnages"], ["factions", "Factions"], ["relics", "Reliques"], ["past", "Ton passé (questions de création)"], ["banter", "Discussions"], ["achievements", "Hauts faits propres à l'histoire"], ["endings", "Titres des fins"]];
  function edData(w) {
    var st = A.ed.story;
    w.appendChild(h("p", { class: "small muted" }, "Chaque bloc s'écrit en JSON, comme dans le fichier de l'histoire. « Appliquer » le remplace s'il se lit bien. Un haut fait : { \"id\": { \"title\": \"…\", \"desc\": \"…\", \"if\": { \"has\": \"une:marque\" } } }. Une ambiance de lieu : \"ambiance\": \"foret\" (foret, ville, village, montagne, neige, souterrain, eau, route, chateau, temple, champs, mer)."));
    ED_DATA.forEach(function (d) {
      var key = d[0], open = A.open["ed:" + key];
      var sec = h("div", { class: "ed-block" }, h("button", { class: "btn ghost fold", onclick: function () { A.open["ed:" + key] = !open; render(); } }, (open ? "▾ " : "▸ ") + d[1]));
      if (open) {
        var ta = h("textarea", { class: "mono json", rows: 14, spellcheck: "false" }, JSON.stringify(st[key] == null ? (key === "acts" || key === "quests" || key === "past" || key === "banter" ? [] : {}) : st[key], null, 1));
        var err = h("span", { class: "why" });
        sec.appendChild(ta);
        sec.appendChild(h("div", { class: "row" }, h("button", { class: "btn sm", onclick: function () { try { st[key] = JSON.parse(ta.value); err.textContent = "Appliqué."; edDirty(); } catch (e) { err.textContent = "JSON illisible : " + e.message; } } }, "Appliquer"), err));
      }
      w.appendChild(sec);
    });
  }
  function passageInput(val, set, ph) {
    var st = A.ed.story;
    if (!document.getElementById("ed-passages")) { /* the datalist is added once per render by edPassages */ }
    return h("input", { list: "ed-passages", value: val || "", placeholder: ph || "passage", oninput: function (e) { set(e.target.value.trim()); edDirty(); } });
  }
  function listInput(val, set, ph, listId) { return h("input", { list: listId || null, value: [].concat(val || []).join(", "), placeholder: ph || "", oninput: function (e) { var l = e.target.value.split(",").map(function (x) { return x.trim(); }).filter(Boolean); set(l.length === 0 ? null : l.length === 1 ? l[0] : l); edDirty(); } }); }
  function jsonInput(val, set, ph) {
    var err = h("span", { class: "why" });
    var ta = h("textarea", { class: "mono json", rows: 2, spellcheck: "false", placeholder: ph || "", oninput: function (e) { var t = e.target.value.trim(); if (!t) { set(null); err.textContent = ""; edDirty(); return; } try { set(JSON.parse(t)); err.textContent = ""; edDirty(); } catch (x) { err.textContent = "JSON illisible"; } } }, val == null ? "" : JSON.stringify(val));
    return h("span", { class: "stack tight" }, ta, err);
  }
  function setKey(o, k, v) { if (v == null || v === "" || v === false || (Array.isArray(v) && !v.length)) delete o[k]; else o[k] = v; }
  function edPassages(w) {
    var E = A.ed, st = E.story, P = st.passages, ids = Object.keys(P).sort();
    var flags = {}; JSON.stringify(st).replace(/"(?:flag|flags|has|after|before)":\s*"([^"]+)"/g, function (_, f) { flags[f] = 1; return _; });
    w.appendChild(h("datalist", { id: "ed-passages" }, ids.map(function (id) { return h("option", { value: id }, String(P[id].title || "").replace(/\*/g, "")); })));
    w.appendChild(h("datalist", { id: "ed-flags" }, Object.keys(flags).sort().map(function (f) { return h("option", { value: f }); })));
    w.appendChild(h("datalist", { id: "ed-comps" }, ["any"].concat(Object.keys(st.companions || {})).map(function (k) { return h("option", { value: k }, k === "any" ? "quelqu'un" : (st.companions[k] || {}).name); })));
    var grid = h("div", { class: "ed-grid" });
    // the list
    var q = (E.q || "").toLowerCase();
    var list = h("div", { class: "ed-list" });
    var search = h("input", { type: "search", placeholder: "Chercher (identifiant, titre, texte)", value: E.q, "aria-label": "Chercher un passage", oninput: function (e) { E.q = e.target.value; clearTimeout(edPassages.t); edPassages.t = setTimeout(function () { render(); var s2 = document.querySelector('input[aria-label="Chercher un passage"]'); if (s2) { s2.focus(); s2.setSelectionRange(s2.value.length, s2.value.length); } }, 250); } });
    list.appendChild(search);
    var newId = h("input", { placeholder: "nouvel identifiant", "aria-label": "Identifiant du nouveau passage", style: "width:100%" });
    list.appendChild(h("div", { class: "row" }, newId, h("button", { class: "btn sm", onclick: function () {
      var id = newId.value.trim().replace(/[^A-Za-z0-9_-]/g, "_"); if (!id) { newId.focus(); return; }
      if (P[id]) { E.sel = id; render(); return; }
      var cur = P[E.sel] || {};
      P[id] = { act: cur.act || (st.acts[0] || {}).id, title: "", place: cur.place, text: [""], choices: [] }; if (!P[id].place) delete P[id].place;
      E.sel = id; edDirty(); render();
    } }, "+ Passage")));
    var shown = ids.filter(function (id) { if (!q) return true; var p = P[id]; return id.toLowerCase().indexOf(q) >= 0 || String(p.title || "").toLowerCase().indexOf(q) >= 0 || (q.length > 2 && JSON.stringify(p.text || "").toLowerCase().indexOf(q) >= 0); });
    list.appendChild(h("div", { class: "small muted" }, shown.length + " passage" + (shown.length > 1 ? "s" : "") + (shown.length > 300 ? " (les 300 premiers)" : "")));
    var ul = h("div", { class: "ed-items" });
    shown.slice(0, 300).forEach(function (id) { ul.appendChild(h("button", { class: "ed-item" + (E.sel === id ? " on" : ""), onclick: function () { E.sel = id; render(); } }, h("span", { class: "mono small" }, id), h("span", { class: "small" }, String(P[id].title || "").replace(/\*/g, "") + (P[id].end ? " · fin" : P[id].hub ? " · carrefour" : "")))); });
    list.appendChild(ul);
    grid.appendChild(list);
    grid.appendChild(edPassageForm(st, E.sel));
    w.appendChild(grid);
  }
  function edPassageForm(st, id) {
    var p = st.passages[id], f = h("div", { class: "ed-form stack" });
    if (!p) { f.appendChild(h("div", { class: "notice" }, "Choisis un passage à gauche.")); return f; }
    var acts = (st.acts || []).map(function (a) { return a.id; }), places = Object.keys((st.world || {}).places || {});
    function sel(opts, val, set, empty) { return h("select", { onchange: function (e) { set(e.target.value || null); edDirty(); } }, empty != null ? h("option", { value: "" }, empty) : null, opts.map(function (o) { var v = Array.isArray(o) ? o[0] : o, l = Array.isArray(o) ? o[1] : o; return h("option", { value: v, selected: String(val) === String(v) }, l); })); }
    function chk(o, k, label) { return h("label", { class: "row small" }, h("input", { type: "checkbox", checked: !!o[k], onchange: function (e) { setKey(o, k, e.target.checked); edDirty(); } }), label); }
    function fld(label, el) { return h("label", { class: "stack tight" }, h("span", { class: "label" }, label), el); }
    f.appendChild(h("div", { class: "row" }, h("h2", { class: "grow" }, "§ " + id),
      h("button", { class: "btn sm", onclick: function () { openEssai(st, id, "editor"); } }, "▶ Essayer d'ici"),
      A.ed.confirmDel === id ? h("span", { class: "confirm small" }, "Supprimer ?", h("button", { class: "btn sm danger", onclick: function () { delete st.passages[id]; A.ed.sel = st.start; A.ed.confirmDel = null; edDirty(); render(); } }, "Oui"), h("button", { class: "btn sm", onclick: function () { A.ed.confirmDel = null; render(); } }, "Non"))
        : h("button", { class: "btn sm ghost", onclick: function () { A.ed.confirmDel = id; render(); } }, "Supprimer")));
    f.appendChild(h("div", { class: "ed-row" },
      fld("Titre", h("input", { value: p.title || "", oninput: function (e) { p.title = e.target.value; edDirty(); } })),
      fld("Acte", sel(acts, p.act, function (v) { setKey(p, "act", v); }, "—")),
      fld("Lieu", sel(places.map(function (k) { return [k, st.world.places[k].name]; }), p.place, function (v) { setKey(p, "place", v); }, "—")),
      fld("Ambiance", sel(M.AMBIANCES.filter(function (x) { return x !== "combat" && x !== "nuit"; }), p.ambiance, function (v) { setKey(p, "ambiance", v); }, "celle du lieu")),
      fld("Le temps passe", sel([["evening", "jusqu'au soir"], ["night", "jusqu'à la nuit"], ["morning", "jusqu'au matin"], ["noon", "jusqu'à midi"], ["day", "une journée"], [1, "1 heure"], [2, "2 heures"], [4, "4 heures"]], p.takes, function (v) { setKey(p, "takes", v && /^\d+$/.test(v) ? +v : v); }, "non"))));
    f.appendChild(h("div", { class: "row" }, chk(p, "hub", "carrefour"), chk(p, "back", "retour automatique au carrefour"), chk(p, "end", "fin de l'histoire")));
    f.appendChild(h("div", { class: "ed-row" },
      fld("Il faut (with)", listInput(p.with, function (v) { setKey(p, "with", v); }, "compagnons", "ed-comps")),
      fld("Sans (without)", listInput(p.without, function (v) { setKey(p, "without", v); }, "compagnons", "ed-comps")),
      fld("Quand", sel([["day", "le jour"], ["night", "la nuit"]], p.when, function (v) { setKey(p, "when", v); }, "toujours")),
      fld("Après", listInput(p.after, function (v) { setKey(p, "after", v); }, "marque ou passage", "ed-flags")),
      fld("Avant", listInput(p.before, function (v) { setKey(p, "before", v); }, "marque ou passage", "ed-flags"))));
    f.appendChild(fld("Effets à la première visite (fx, JSON)", jsonInput(p.fx, function (v) { setKey(p, "fx", v); }, '{ "flag": "une:marque", "gold": 5 }')));
    // paragraphs
    p.text = p.text || [];
    f.appendChild(h("h3", { class: "sub-h" }, "Paragraphes"));
    p.text.forEach(function (t, i) {
      var o = typeof t === "string" ? { text: t } : t;
      var commit = function () { var keys = Object.keys(o).filter(function (k) { return o[k] != null; }); p.text[i] = keys.length === 1 && keys[0] === "text" ? o.text : o; edDirty(); };
      var set = function (k) { return function (v) { setKey(o, k, v); commit(); }; };
      var box = h("div", { class: "ed-para" });
      box.appendChild(h("textarea", { rows: Math.min(10, 2 + Math.floor(String(o.text || "").length / 80)), oninput: function (e) { o.text = e.target.value; commit(); } }, o.text || ""));
      box.appendChild(h("div", { class: "ed-row small" },
        fld("Avec", listInput(o.with, set("with"), "", "ed-comps")), fld("Sans", listInput(o.without, set("without"), "", "ed-comps")),
        fld("Quand", sel([["day", "jour"], ["night", "nuit"]], o.when, set("when"), "toujours")),
        fld("Après", listInput(o.after, set("after"), "", "ed-flags")), fld("Avant", listInput(o.before, set("before"), "", "ed-flags")),
        fld("Issue", sel([["win", "jet réussi / victoire"], ["lose", "jet raté / défaite"], ["flee", "fuite"], ["calm", "apaisement"]], o.outcome, set("outcome"), "toutes"))));
      box.appendChild(h("div", { class: "row small" }, chk(o, "first", "première visite"), chk(o, "again", "visites suivantes"), chk(o, "once", "une seule fois"),
        h("span", { class: "grow" }),
        h("button", { class: "btn sm ghost", disabled: i === 0, onclick: function () { var x = p.text.splice(i, 1)[0]; p.text.splice(i - 1, 0, x); edDirty(); render(); } }, "↑"),
        h("button", { class: "btn sm ghost", disabled: i === p.text.length - 1, onclick: function () { var x = p.text.splice(i, 1)[0]; p.text.splice(i + 1, 0, x); edDirty(); render(); } }, "↓"),
        h("button", { class: "btn sm ghost", onclick: function () { p.text.splice(i, 1); edDirty(); render(); } }, "Retirer")));
      if (o.if != null || o.else != null || A.open["edp:" + id + i]) box.appendChild(h("div", { class: "ed-row small" }, fld("Condition (if, JSON)", jsonInput(o.if, set("if"))), fld("Sinon (else)", h("input", { value: o.else || "", oninput: function (e) { setKey(o, "else", e.target.value); commit(); } }))));
      else box.appendChild(h("button", { class: "btn sm ghost", onclick: function () { A.open["edp:" + id + i] = true; render(); } }, "+ condition, sinon"));
      f.appendChild(box);
    });
    f.appendChild(h("button", { class: "btn sm", onclick: function () { p.text.push(""); edDirty(); render(); } }, "+ Paragraphe"));
    // choices
    p.choices = p.choices || [];
    f.appendChild(h("h3", { class: "sub-h" }, "Choix"));
    var comps = Object.keys(st.companions || {});
    p.choices.forEach(function (c, i) {
      var box = h("div", { class: "ed-para" });
      var kind = c.back != null ? "back" : c.test ? "test" : "to";
      box.appendChild(h("div", { class: "ed-row" },
        fld("Texte du bouton", h("input", { value: c.label || "", placeholder: c.back != null ? "(le moteur écrit « Revenir : … »)" : "", oninput: function (e) { setKey(c, "label", e.target.value); edDirty(); } })),
        fld("Sorte", sel([["to", "aller à"], ["back", "revenir à"], ["test", "jet de dés"]], kind, function (v) {
          delete c.to; delete c.back; delete c.test; delete c.win; delete c.lose;
          if (v === "back") c.back = true; else if (v === "test") { c.test = { dom: "social", diff: 0 }; c.win = { to: id }; c.lose = { to: id }; } else c.to = id;
          edDirty(); render(); }))));
      if (kind === "to") box.appendChild(fld("Mène à", passageInput(typeof c.to === "string" ? c.to : "", function (v) { c.to = v; })));
      if (kind === "back") box.appendChild(fld("Revenir à (vide : le dernier carrefour)", passageInput(c.back === true ? "" : c.back, function (v) { c.back = v || true; })));
      if (kind === "test") {
        box.appendChild(h("div", { class: "ed-row" },
          fld("Domaine", sel(Object.keys(M.DOMAINS).map(function (k) { return [k, M.DOMAINS[k]]; }), c.test.dom, function (v) { c.test.dom = v; })),
          fld("Difficulté", sel(Object.keys(M.DIFFS).map(function (k) { return [k, M.DIFFS[k]]; }), c.test.diff || 0, function (v) { c.test.diff = +v; })),
          fld("Nom du jet", h("input", { value: c.test.label || "", placeholder: "ex. Grimper", oninput: function (e) { setKey(c.test, "label", e.target.value); edDirty(); } })),
          fld("Réussi : mène à", passageInput(c.win && c.win.to, function (v) { c.win = c.win || {}; c.win.to = v; })),
          fld("Raté : mène à", passageInput(c.lose && c.lose.to, function (v) { c.lose = c.lose || {}; c.lose.to = v; }))));
      }
      box.appendChild(h("div", { class: "ed-row small" },
        fld("Effets (fx, JSON)", jsonInput(c.fx, function (v) { setKey(c, "fx", v); }, '{ "flag": "…", "item": "…", "gold": -2 }')),
        fld("Possible si (if, JSON)", jsonInput(c.if, function (v) { setKey(c, "if", v); }, '{ "has": "…" }')),
        fld("Sinon, raison affichée", h("input", { value: c.why || "", oninput: function (e) { setKey(c, "why", e.target.value); edDirty(); } })),
        fld("Laisse-moi faire", sel(comps.map(function (k) { return [k, st.companions[k].name]; }), c.who, function (v) { setKey(c, "who", v); }, "personne"))));
      box.appendChild(h("div", { class: "row small" }, chk(c, "once", "une seule fois"), chk(c, "big", "choix lourd"), chk(c, "refuse", "refus de quête"), chk(c, "exit", "fin de l'acte"),
        h("span", { class: "grow" }),
        h("button", { class: "btn sm ghost", disabled: i === 0, onclick: function () { var x = p.choices.splice(i, 1)[0]; p.choices.splice(i - 1, 0, x); edDirty(); render(); } }, "↑"),
        h("button", { class: "btn sm ghost", disabled: i === p.choices.length - 1, onclick: function () { var x = p.choices.splice(i, 1)[0]; p.choices.splice(i + 1, 0, x); edDirty(); render(); } }, "↓"),
        h("button", { class: "btn sm ghost", onclick: function () { p.choices.splice(i, 1); edDirty(); render(); } }, "Retirer")));
      f.appendChild(box);
    });
    f.appendChild(h("button", { class: "btn sm", onclick: function () { p.choices.push({ label: "", to: id }); edDirty(); render(); } }, "+ Choix"));
    // raw JSON
    var rawOpen = A.open["edraw:" + id];
    f.appendChild(h("button", { class: "btn ghost fold", onclick: function () { A.open["edraw:" + id] = !rawOpen; render(); } }, (rawOpen ? "▾ " : "▸ ") + "Le passage en JSON (tout le reste : combat, boutique, routes…)"));
    if (rawOpen) {
      var ta = h("textarea", { class: "mono json", rows: 16, spellcheck: "false" }, JSON.stringify(p, null, 1)), err = h("span", { class: "why" });
      f.appendChild(ta);
      f.appendChild(h("div", { class: "row" }, h("button", { class: "btn sm", onclick: function () { try { st.passages[id] = JSON.parse(ta.value); edDirty(); render(); } catch (e) { err.textContent = "JSON illisible : " + e.message; } } }, "Appliquer"), err));
    }
    return f;
  }

  // ------------------------------------------------------------------ pictures: a vignette for the place, drawn by code
  // Intent: of(Story, State) -> Element | null = a band of landscape drawn from the moment's ambiance (and the night)
  var Vignette = (function () {
    var NS = "http://www.w3.org/2000/svg";
    function s(tag, a, kids) { var e = document.createElementNS(NS, tag); for (var k in a) e.setAttribute(k, a[k]); (kids || []).forEach(function (c) { e.appendChild(c); }); return e; }
    function rnd(seed) { var x = seed || 1; return function () { x = (x * 1103515245 + 12345) % 2147483648; return x / 2147483648; }; }
    function ridge(r, y, amp, n) { var d = "M0 90 L0 " + y; for (var i = 0; i <= n; i++) { var x = i * 600 / n; d += " L" + x.toFixed(1) + " " + (y - r() * amp).toFixed(1); } return d + " L600 90 Z"; }
    function peaks(r, y, n, hgt) { var d = "M0 90 L0 " + y, x = 0; for (var i = 0; i < n; i++) { var w = 600 / n, top = y - hgt * (0.5 + r() * 0.5); d += " L" + (x + w * (0.3 + r() * 0.4)).toFixed(1) + " " + top.toFixed(1) + " L" + (x + w).toFixed(1) + " " + (y - r() * 8).toFixed(1); x += w; } return d + " L600 90 Z"; }
    function pines(r, y, n, hgt) { var d = ""; for (var i = 0; i < n; i++) { var x = r() * 600, hh = hgt * (0.6 + r() * 0.6), w = hh * 0.35; d += "M" + (x - w).toFixed(1) + " " + y + " L" + x.toFixed(1) + " " + (y - hh).toFixed(1) + " L" + (x + w).toFixed(1) + " " + y + " Z "; } return d; }
    function roofs(r, y, n) { var d = "", x = 10; for (var i = 0; i < n && x < 590; i++) { var w = 26 + r() * 30, hh = 14 + r() * 16, rh = 10 + r() * 10; d += "M" + x + " 90 L" + x + " " + (y - hh) + " L" + (x + w / 2) + " " + (y - hh - rh) + " L" + (x + w) + " " + (y - hh) + " L" + (x + w) + " 90 Z "; if (r() < 0.3) d += "M" + (x + w * 0.7) + " " + (y - hh - rh * 0.6) + " h4 v-8 h-4 Z "; x += w + 2 + r() * 14; } return d; }
    function draw(kind, night, seed) {
      var r = rnd(seed), svgEl = s("svg", { viewBox: "0 0 600 90", preserveAspectRatio: "xMidYMax slice", class: "vignette", role: "img", "aria-label": "Vignette : " + kind });
      var far = { fill: "var(--vig-far)" }, mid = { fill: "var(--vig-mid)" }, near = { fill: "var(--vig-near)" };
      svgEl.appendChild(s("rect", { x: 0, y: 0, width: 600, height: 90, fill: "var(--vig-sky)" }));
      if (night) { svgEl.appendChild(s("circle", { cx: 80 + r() * 440, cy: 18, r: 7, fill: "var(--vig-moon)" })); for (var i = 0; i < 18; i++) svgEl.appendChild(s("circle", { cx: r() * 600, cy: r() * 40, r: 0.7, fill: "var(--vig-moon)" })); }
      else svgEl.appendChild(s("circle", { cx: 80 + r() * 440, cy: 22, r: 9, fill: "var(--vig-sun)" }));
      var P = function (d, a) { var o = { d: d }; for (var k in a) o[k] = a[k]; svgEl.appendChild(s("path", o)); };
      switch (kind) {
        case "montagne": case "neige": P(peaks(r, 70, 5, 55), far); P(peaks(r, 82, 7, 30), mid); if (kind === "neige") P(peaks(r, 84, 9, 10), { fill: "var(--vig-sky)", opacity: ".5" }); break;
        case "foret": P(ridge(r, 62, 10, 12), far); P(pines(r, 80, 26, 38), mid); P(pines(r, 92, 14, 30), near); break;
        case "ville": case "chateau": P(ridge(r, 70, 8, 6), far); P(roofs(r, 78, 30), mid); if (kind === "chateau") P("M250 90 V34 h12 v-8 h10 v8 h12 v-8 h10 v8 h12 V90 Z M330 90 V48 h22 V90 Z", near); break;
        case "village": case "champs": P(ridge(r, 66, 12, 8), far); if (kind === "village") P(roofs(r, 80, 7), mid); P(ridge(r, 86, 4, 20), near); P(pines(r, 82, 5, 20), mid); break;
        case "souterrain": svgEl.firstChild.setAttribute("fill", "var(--vig-near)"); P("M0 0 H600 V18 Q560 26 520 14 Q470 30 420 12 Q360 34 300 14 Q240 30 180 12 Q120 28 60 14 Q30 22 0 12 Z", mid); P("M0 90 V72 Q100 60 200 74 Q300 82 400 70 Q500 62 600 74 V90 Z", far); break;
        case "eau": case "mer": P(ridge(r, 58, 10, 8), far); svgEl.appendChild(s("rect", { x: 0, y: 64, width: 600, height: 26, fill: "var(--vig-water)" })); for (var j = 0; j < 14; j++) P("M" + (r() * 580) + " " + (70 + r() * 16) + " q6 -3 12 0 q6 3 12 0", { fill: "none", stroke: "var(--vig-sky)", "stroke-width": "1" }); break;
        case "temple": P(ridge(r, 70, 10, 6), far); P("M240 90 V50 L300 26 L360 50 V90 Z M254 90 V54 h8 V90 Z M276 90 V54 h8 V90 Z M316 90 V54 h8 V90 Z M338 90 V54 h8 V90 Z", mid); break;
        case "combat": P(peaks(r, 80, 9, 30), far); P(ridge(r, 88, 6, 30), mid); for (var k = 0; k < 6; k++) P("M" + (100 + r() * 400) + " 90 l" + (r() * 30 - 15) + " -" + (30 + r() * 30) + " l2 0 Z", near); break;
        default: P(ridge(r, 64, 10, 8), far); P(ridge(r, 78, 8, 14), mid); P("M300 90 L292 66 L308 66 Z", { fill: "var(--vig-sky)", opacity: ".7" }); P(ridge(r, 88, 3, 20), near);
      }
      return svgEl;
    }
    return {
      of: function (st, st8) { var kind = M.ambianceOf(st, st8); if (!kind) return null; return draw(kind, M.isNightNow(st8), hash(st.id + (st8.place || st8.node || "") + kind)); },
      // A place's own vignette, for the atlas.
      place: function (st, id) { var pl = st.world.places[id] || {}, rg = ((st.world.regions || {})[pl.region] || {}); var kind = pl.ambiance || rg.ambiance; return kind ? draw(kind, false, hash(st.id + id + kind)) : null; },
    };
  })();

  // ------------------------------------------------------------------ ambiance: sounds composed by the device (Web Audio)
  // Intent: update() -> () ! starts, changes or stops the loop that fits the moment
  // Why: Clément (12/11): wind, rain, a forest, a town, a cave… with no sound file to carry (the page must stay one file).
  var Ambiance = (function () {
    var ctx = null, master = null, cur = null, layers = [], timer = null, noiseBuf = null;
    function noise() {
      if (noiseBuf) return noiseBuf;
      noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate); var d = noiseBuf.getChannelData(0);
      for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; return noiseBuf;
    }
    function bed(type, freq, q, gain, lfoHz, lfoDepth) {
      var src = ctx.createBufferSource(); src.buffer = noise(); src.loop = true;
      var f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q || 0.7;
      var g = ctx.createGain(); g.gain.value = gain; src.connect(f); f.connect(g); g.connect(master); src.start();
      var out = { stop: function () { try { src.stop(); } catch (e) { /* stopped */ } } };
      if (lfoHz) { var l = ctx.createOscillator(), lg = ctx.createGain(); l.frequency.value = lfoHz; lg.gain.value = lfoDepth || gain / 2; l.connect(lg); lg.connect(g.gain); l.start(); var s0 = out.stop; out.stop = function () { s0(); try { l.stop(); } catch (e) { /* stopped */ } }; }
      return out;
    }
    function tone(type, f0, f1, dur, gain, at) {
      var t = at || ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain(); o.type = type; o.frequency.setValueAtTime(f0, t); if (f1) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + Math.min(0.02, dur / 4)); g.gain.exponentialRampToValueAtTime(0.0001, t + dur); o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.05);
    }
    function drone(freqs, gain) { var os = freqs.map(function (f) { var o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.value = f; g.gain.value = gain; o.connect(g); g.connect(master); o.start(); return o; }); return { stop: function () { os.forEach(function (o) { try { o.stop(); } catch (e) { /* stopped */ } }); } }; }
    // sporadic sounds: [every min, max seconds, play()]
    var SPOTS = {
      bird: function () { var f = 2200 + Math.random() * 1600; tone("sine", f, f * 1.3, 0.12, 0.05); tone("sine", f * 1.1, f * 1.4, 0.1, 0.04, ctx.currentTime + 0.16); },
      cricket: function () { for (var i = 0; i < 3; i++) tone("sine", 4400, 4300, 0.04, 0.02, ctx.currentTime + i * 0.07); },
      drip: function () { tone("sine", 1400, 500, 0.18, 0.06); },
      clink: function () { tone("triangle", 1500 + Math.random() * 800, null, 0.25, 0.025); },
      crack: function () { tone("square", 900 + Math.random() * 1500, 200, 0.03, 0.03); },
      drum: function () { tone("sine", 90, 45, 0.35, 0.2); },
      gull: function () { tone("sawtooth", 1200, 700, 0.3, 0.01); },
    };
    var KINDS = {
      foret: function () { return [bed("lowpass", 320, 0.7, 0.05, 0.08, 0.03)]; }, foretSpots: [["bird", 2, 6]],
      ville: function () { return [bed("bandpass", 420, 0.8, 0.07, 0.15, 0.03)]; }, villeSpots: [["clink", 3, 8]],
      village: function () { return [bed("lowpass", 500, 0.7, 0.03, 0.1, 0.015)]; }, villageSpots: [["bird", 4, 10], ["clink", 8, 16]],
      champs: function () { return [bed("lowpass", 400, 0.7, 0.04, 0.07, 0.02)]; }, champsSpots: [["bird", 3, 8]],
      montagne: function () { return [bed("lowpass", 600, 0.8, 0.08, 0.06, 0.06)]; },
      neige: function () { return [bed("lowpass", 900, 0.9, 0.07, 0.09, 0.06), bed("highpass", 3000, 0.7, 0.01)]; },
      route: function () { return [bed("lowpass", 450, 0.7, 0.05, 0.05, 0.03)]; }, routeSpots: [["bird", 6, 14]],
      souterrain: function () { return [drone([55, 82.4], 0.02), bed("lowpass", 160, 1, 0.03)]; }, souterrainSpots: [["drip", 1.5, 5]],
      eau: function () { return [bed("lowpass", 1200, 0.7, 0.06, 0.3, 0.03), bed("bandpass", 2400, 1.5, 0.015, 0.5, 0.01)]; },
      mer: function () { return [bed("lowpass", 700, 0.7, 0.09, 0.09, 0.08)]; }, merSpots: [["gull", 6, 14]],
      temple: function () { return [drone([110, 164.8, 220], 0.012)]; },
      chateau: function () { return [bed("lowpass", 300, 0.7, 0.03), drone([73.4], 0.01)]; }, chateauSpots: [["clink", 9, 18]],
      combat: function () { return [drone([65.4, 98], 0.02), bed("bandpass", 300, 1, 0.03)]; }, combatSpots: [["drum", 0.8, 1.2]],
      nuit: function () { return [bed("lowpass", 300, 0.7, 0.025, 0.05, 0.015)]; }, nuitSpots: [["cricket", 0.6, 1.6]],
    };
    function stopAll() { layers.forEach(function (l) { l.stop(); }); layers = []; if (timer) { clearInterval(timer); timer = null; } }
    function play(kind) {
      stopAll(); cur = kind; if (!kind) return;
      var k = KINDS[kind] ? kind : "route";
      layers = KINDS[k]();
      var spots = (KINDS[k + "Spots"] || []).map(function (x) { return { f: SPOTS[x[0]], lo: x[1], hi: x[2], next: ctx.currentTime + x[1] * Math.random() }; });
      timer = setInterval(function () { var t = ctx.currentTime; spots.forEach(function (sp) { if (t >= sp.next) { sp.f(); sp.next = t + sp.lo + Math.random() * (sp.hi - sp.lo); } }); }, 120);
    }
    return {
      update: function () {
        var want = null, G = A.game;
        if (pref("ambiance") && G && A.screen === "game") { want = M.ambianceOf(G.story, G.s); if (!want && M.isNightNow(G.s)) want = "nuit"; if (!want) want = "village"; }
        if (!want) { if (cur) { stopAll(); cur = null; } return; }
        try {
          if (!ctx) { var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return; ctx = new AC(); master = ctx.createGain(); master.connect(ctx.destination); }
          if (ctx.state === "suspended") ctx.resume();
          master.gain.value = Math.max(0, Math.min(1, +pref("volume"))) * 1.4;
          if (want !== cur) play(want);
        } catch (e) { /* no sound on this device */ }
      },
    };
  })();

  // ------------------------------------------------------------------ a little music, composed by the device
  // Intent: Music.update() -> () ! plays, changes or stops a quiet tune that fits the moment: one per region (or per
  // ambiance when the place has no region), drawn from its name so it comes back the same, and one for the fights.
  // Off by default (pref « music »), same volume slider as the ambiance. Why: Clément, 13/11.
  var MUSIC_GAIN = 0.22;                       // under the ambiance, so it never covers the reading voice
  var MUSIC_AHEAD_S = 0.6, MUSIC_TICK_MS = 150;
  var MUSIC_MODES = {
    clair: [0, 2, 4, 7, 9],                    // pentatonic: fields, villages, roads, woods
    dorien: [0, 2, 3, 5, 7, 9, 10],           // towns, mountains, castles
    sombre: [0, 2, 3, 5, 7, 8, 10],           // caves, night, snow, sea
    sacre: [0, 2, 4, 6, 7, 9, 11],            // temples
    combat: [0, 1, 3, 5, 7, 8, 10],
  };
  var MUSIC_MOODS = {
    champs: ["clair", 96], village: ["clair", 88], route: ["clair", 100], foret: ["clair", 80],
    ville: ["dorien", 104], montagne: ["dorien", 72], chateau: ["dorien", 84],
    souterrain: ["sombre", 60], nuit: ["sombre", 64], neige: ["sombre", 70], mer: ["sombre", 76], eau: ["sombre", 82],
    temple: ["sacre", 58], combat: ["combat", 132],
  };
  var Music = (function () {
    var ctx = null, out = null, cur = null, timer = null, plan = null;
    function rng(seed) { var x = hash(seed) || 1; return function () { x ^= x << 13; x ^= x >>> 17; x ^= x << 5; return ((x >>> 0) % 10000) / 10000; }; }
    // A tune: 4 phrases of 8 steps (A A' B A), a note or a rest per step, the bass on each bar.
    function compose(key, mood) {
      var R = rng("musique|" + key), mode = MUSIC_MODES[mood[0]], root = 196 * Math.pow(2, Math.floor(R() * 5) / 12);
      var motif = [], deg = 0;
      for (var i = 0; i < 8; i++) { deg = Math.max(-2, Math.min(mode.length + 2, deg + Math.round(R() * 4 - 2))); motif.push(R() < (mood[0] === "combat" ? 0.12 : 0.28) && i % 4 ? null : deg); }
      var vary = motif.map(function (d, i) { return i >= 6 && d != null ? d + (R() < 0.5 ? 1 : -1) : d; });
      var bridge = motif.map(function (d) { return d == null ? null : d + 2; });
      var steps = motif.concat(vary, bridge, motif);
      var freq = function (d) { var n = mode.length, o = Math.floor(d / n), k = ((d % n) + n) % n; return root * Math.pow(2, o + mode[k] / 12); };
      return { steps: steps.map(function (d) { return d == null ? null : freq(d); }), bass: [freq(0) / 2, freq(0) / 2, freq(3) / 2, freq(0) / 2], beat: 60 / mood[1] / 2, fight: mood[0] === "combat" };
    }
    function note(f, t, dur, type, gain) {
      var o = ctx.createOscillator(), g = ctx.createGain(), lp = ctx.createBiquadFilter();
      o.type = type; o.frequency.value = f; lp.type = "lowpass"; lp.frequency.value = 1800;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(lp); lp.connect(g); g.connect(out); o.start(t); o.stop(t + dur + 0.05);
    }
    function drum(t) { var o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.25); g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3); o.connect(g); g.connect(out); o.start(t); o.stop(t + 0.35); }
    function stop() { if (timer) clearInterval(timer); timer = null; plan = null; cur = null; }
    function play(key, mood) {
      stop(); cur = key; var T = compose(key, mood), i = 0, t = ctx.currentTime + 0.1;
      plan = T;
      timer = setInterval(function () {
        while (t < ctx.currentTime + MUSIC_AHEAD_S) {
          var f = T.steps[i % T.steps.length];
          if (f) note(f, t, T.beat * (T.fight ? 0.9 : 1.8), T.fight ? "square" : "triangle", T.fight ? 0.18 : 0.3);
          if (i % 8 === 0) note(T.bass[(i / 8) % 4], t, T.beat * 8, "sine", 0.35);
          if (T.fight && i % 4 === 0) drum(t);
          i++; t += T.beat;
          if (i % T.steps.length === 0 && !T.fight) t += T.beat * 4;   // a breath between two rounds of the tune
        }
      }, MUSIC_TICK_MS);
    }
    return {
      // what plays now (for the tests)
      now: function () { return cur; },
      update: function () {
        var G = A.game, want = null, mood = null;
        if (pref("music") && G && A.screen === "game" && !document.hidden) {
          var kind = M.ambianceOf(G.story, G.s) || (M.isNightNow(G.s) ? "nuit" : "village");
          var pl = ((G.story.world || {}).places || {})[((G.story.passages || {})[G.s.node] || {}).place || G.s.place] || {};
          mood = MUSIC_MOODS[kind] || MUSIC_MOODS.village;
          want = kind === "combat" ? "combat" : (pl.region ? "region:" + pl.region : "ambiance:" + kind) + (kind === "nuit" ? ":nuit" : "");
          want = G.story.id + "|" + want;
        }
        if (!want) { if (cur) stop(); return; }
        try {
          if (!ctx) { var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return; ctx = new AC(); out = ctx.createGain(); out.connect(ctx.destination); }
          if (ctx.state === "suspended") ctx.resume();
          out.gain.value = Math.max(0, Math.min(1, +pref("volume"))) * MUSIC_GAIN;
          if (want !== cur) play(want, mood);
        } catch (e) { /* no sound on this device */ }
      },
    };
  })();
  document.addEventListener("visibilitychange", function () { Music.update(); });

  // ------------------------------------------------------------------ start
  loadBuiltins();
  document.addEventListener("keydown", escClose);
  document.addEventListener("keydown", function (e) {
    if ((e.key !== "ArrowDown" && e.key !== "ArrowUp") || A.screen !== "game" || A.carnet || A.modal || /INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName || "")) return;
    if (Reading.move(e.key === "ArrowDown" ? 1 : -1)) e.preventDefault();
  });
  render();
  Store.init().then(function () {
    if (window.claude && window.claude.use) {
      window.claude.use("downloads").then(function (d) { A.downloads = d; render(); }).catch(function () {});
      window.claude.use("tts").then(function (t) { A.tts = t; if (t) t.onState(function (x) { A.speaking = x.state !== "idle"; }); render(); }).catch(function () {});
    } else {
      // Offline copy: ask the browser to keep this site's data (saves) even when the device runs short of space.
      try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) { /* ignore */ }
      A.tts = browserTts(); if (A.tts) A.tts.onState(function (x) { A.speaking = x.state !== "idle"; render(); });
      Neural.init().then(render);
      Sync.fromLink();
    }
    return refresh();
  }).then(function () { A.busy = false; render(); }, function () { A.busy = false; render(); }).then(function () {
    Sync.start();
  });
})();
