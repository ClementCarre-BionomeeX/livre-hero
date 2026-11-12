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
    put: function (coll, id, obj) {
      var self = this, key = coll + "/" + id;
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
    del: function (coll, id) {
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
  function storyMeta(st) { return { id: st.id, title: st.title, subtitle: st.subtitle || "", summary: st.summary || "", version: st.version || 1, acts: (st.acts || []).length, passages: Object.keys(st.passages || {}).length, multi: st.multi || null }; }
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
    if (A.carnet) renderCarnet();
    if (A.modal) renderModal();
    applyPrefs();
    Ambiance.update();
  }

  function topBar(children) { return h("header", { class: "top" }, h("div", { class: "wrap" }, children)); }
  function avatar(p) { return h("span", { class: "avatar", style: "background:" + (p.color || COLORS[0]) }, (p.name || "?").slice(0, 1).toUpperCase()); }

  function renderHome() {
    var stories = allStories();
    app.appendChild(topBar([h("span", { class: "brand grow" }, "Livre-jeu"),
      h("span", { class: "pill small", title: Store.mode === "db" ? "Les profils, parties et histoires importées suivent ce lien sur tous les appareils." : "Rien n'est partagé : tout reste dans ce navigateur." }, Store.mode === "db" ? "Sauvegardes partagées" : "Sauvegardes dans ce navigateur")]));
    var w = h("main", { class: "wrap" });
    w.appendChild(h("div", { class: "hero-head" }, h("h1", null, "La bibliothèque"),
      h("p", null, "Des romans dont tu tiens la plume : chaque histoire se lit, se voyage et se joue jusqu'au bout. Choisis qui lit, puis ouvre un livre.")));
    if (A.notice) w.appendChild(h("div", { class: "notice" + (A.noticeBad ? " bad" : "") }, A.notice));

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
          h("button", { class: "btn primary sm", onclick: function () { openGame(g.id); } }, g.ended ? "Relire la fin" : "Reprendre"), del));
      });
      w.appendChild(sg);
    }

    w.appendChild(renderMultiList());

    // Library
    var lib = h("section", { class: "section" }, h("h2", null, "Les livres"));
    var cards = h("div", { class: "cards" });
    stories.forEach(function (m) {
      cards.appendChild(h("article", { class: "card" },
        h("h3", null, m.title), m.subtitle ? h("div", { class: "sub" }, m.subtitle) : null,
        h("p", null, m.summary),
        h("div", { class: "small muted" }, (m.multi ? "À plusieurs, de " + (m.multi.min || 2) + " à " + (m.multi.max || 6) + " joueurs · " : "") + m.acts + " actes · " + m.passages + " passages" + (m.builtin ? "" : " · importée")),
        m.multi ? null : renderRecords(m),
        h("div", { class: "row" },
          // Clément, 11/11: stories for several players are written for it; the others stay solo.
          m.multi ? h("button", { class: "btn primary", onclick: function () { multiSetup(m.id); } }, "Jouer à plusieurs")
            : h("button", { class: "btn primary", onclick: function () { if (!A.profile) { needReader(); return; } newGame(m.id); } }, "Nouvelle partie"),
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
      h("span", { class: "label" }, "Importer une sauvegarde"), bkFile));
    w.appendChild(bk);
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
  function exportBackup() {
    Promise.all(BACKUP_COLLS.map(function (c) { return Store.list(c); })).then(function (r) {
      var out = { format: BACKUP_FORMAT, version: BACKUP_VERSION, exported: Date.now(), collections: {} };
      BACKUP_COLLS.forEach(function (c, i) { out.collections[c] = r[i]; });
      var d = new Date(), day = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      download("livre-heros-sauvegarde-" + day + ".json", JSON.stringify(out));
    });
  }
  function importBackup(f) {
    if (!f) return;
    var rd = new FileReader();
    rd.onload = function () {
      var b; try { b = JSON.parse(rd.result); } catch (e) { flash("Ce fichier n'est pas une sauvegarde lisible.", true); return; }
      if (!b || b.format !== BACKUP_FORMAT || !b.collections) { flash("Ce fichier n'est pas une sauvegarde du livre-jeu.", true); return; }
      var added = 0, kept = 0;
      var jobs = BACKUP_COLLS.map(function (c) {
        var docs = b.collections[c] || [];
        return Store.list(c).then(function (have) {
          var byId = {}; have.forEach(function (o) { byId[o.id] = o; });
          return Promise.all(docs.map(function (o) {
            if (!o || !o.id) return null;
            var mine = byId[o.id];
            if (mine && (mine.updated || 0) >= (o.updated || 0)) { kept++; return null; }
            var id = o.id, doc = clone(o); delete doc.id; added++;
            return Store.put(c, id, doc).catch(function () {});
          }));
        });
      });
      Promise.all(jobs).then(refresh).then(function () { flash("Sauvegarde importée : " + added + " élément(s) ajouté(s) ou mis à jour" + (kept ? ", " + kept + " déjà à jour ici." : ".")); });
    };
    rd.readAsText(f);
  }

  // ------------------------------------------------------------------ reading aloud without claude.ai
  // Intent: create() -> Tts = the browser's own voices, same calls as the claude.ai tts
  // Why: the offline copy has no claude.ai tts; tablets and phones carry French voices that work without network.
  function browserTts() {
    var sy = window.speechSynthesis; if (!sy || !window.SpeechSynthesisUtterance) return null;
    var listeners = [], token = 0;
    var tell = function (state) { listeners.forEach(function (f) { f({ state: state }); }); };
    return {
      browser: true,
      voices: function () { return sy.getVoices().filter(function (v) { return /^fr/i.test(v.lang); }).map(function (v) { return v.name; }); },
      onState: function (f) { listeners.push(f); },
      stop: function () { token++; sy.cancel(); tell("idle"); },
      speak: function (lines, opts) {
        var mine = ++token; sy.cancel();
        var frs = sy.getVoices().filter(function (v) { return /^fr/i.test(v.lang); });
        var fr = frs.filter(function (v) { return opts && opts.voiceName && v.name === opts.voiceName; })[0] || frs[0];
        return lines.reduce(function (p, l) {
          return p.then(function () {
            if (mine !== token) return;
            return new Promise(function (res) {
              var u = new SpeechSynthesisUtterance(l.text); u.lang = (opts && opts.language) || "fr-FR"; if (fr) u.voice = fr; if (opts && opts.rate) u.rate = opts.rate;
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
  // Intent: build(Creation) -> State = the new hero, his past answers applied, the story started
  function buildState(C) {
    var st = C.story, s = M.freshState(st, { toutJouer: C.toutJouer, difficulty: C.difficulty });
    s.name = C.name.trim(); s.arch = C.arch;
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
    var before = M.view(G.story, G.s), others = before.choices.filter(function (x) { return x.ok && !x.sys && !x.restart && x !== c && x.label !== c.label; }).length;
    G.undo.push(JSON.stringify(G.s)); if (G.undo.length > UNDO_MAX) G.undo.shift();
    var queue = (c.diced || []).slice();
    if (c.diced) M.setDice(function () { return queue.length ? queue.shift() : null; });
    try { M.choose(G.story, G.s, c); }
    catch (e) { M.setDice(null); G.s = JSON.parse(G.undo.pop()); A.notice = "Ce choix a buté sur une erreur de l'histoire : " + e.message; render(); return; }
    M.setDice(null);
    A.notice = ""; A.recap = false; A.rollAnim = true;
    var now = Date.now(); G.doc.playMs = (G.doc.playMs || 0) + Math.min(now - (G.since || now), PLAY_GAP_MS); G.since = now;
    logStep(c.label, others); persist(); render();
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
    var rc = A.recap && !G.multi ? renderRecap(G) : null; if (rc) page.appendChild(rc);
    page.appendChild(h("div", { class: "page-head" }, h("div", null, h("h2", null, v.title || ""), h("div", { class: "where" }, [cur >= 0 ? acts[cur].title : null, where(st, s)].filter(Boolean).join(" · "))), num ? h("span", { class: "para-num", title: "Numéro du paragraphe" }, "§ " + num) : null));
    if (A.notice) page.appendChild(h("div", { class: "notice" }, A.notice));
    var prose = h("div", { class: "prose" });
    var folded = v.reread && A.unfold !== s.node + "#" + s.turn;
    if (folded) prose.appendChild(h("p", { class: "reread" }, h("span", { class: "muted" }, "Tu connais déjà cette page. "),
      h("button", { class: "btn ghost sm", onclick: function () { A.unfold = s.node + "#" + s.turn; render(); } }, "Relire")));
    else v.text.forEach(function (t) { prose.appendChild(h("p", { html: md(t) })); });
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
      h("button", { class: "btn sm", onclick: function () { A.carnet = true; A.carnetTab = "carte"; render(); } }, "Carte"),
      h("button", { class: "btn sm", onclick: function () { A.carnet = true; A.carnetTab = "quetes"; render(); } }, "Quêtes"),
      G.multi ? null : h("button", { class: "btn sm", onclick: function () { A.modal = { kind: "mark" }; render(); } }, "🔖 Marque-page"),
      h("button", { class: "btn sm", "aria-pressed": pref("ambiance") ? "true" : "false", onclick: function () { setPref("ambiance", !pref("ambiance")); } }, pref("ambiance") ? "🔊 Ambiance" : "🔇 Ambiance"),
      h("button", { class: "btn sm", onclick: function () { A.modal = { kind: "prefs" }; render(); } }, "⚙ Réglages"),
      h("button", { class: "btn sm", onclick: function () { A.modal = { kind: "report" }; render(); } }, "⚑ Signaler")));
    app.appendChild(w);
  }
  // Intent: render(State) -> Element = foes with their states, then our side in two ranks with PV
  function renderFight(s) {
    var c = s.combat, st = A.game.story;
    var box = h("div", { class: "fight" }, h("span", { class: "label" }, "Adversaires · passe " + (c.round + 1) + (c.range === "loin" && c.round === 0 ? " · encore loin" : "")));
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
  function renderChoices(v) {
    var box = h("div", { class: "choices" }), lastGroup = null;
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
        h("span", null, c.label, c.goes && c.label.toLowerCase().indexOf(c.goes.toLowerCase()) < 0 ? h("span", { class: "goes" }, " → " + c.goes) : null, c.note ? h("span", { class: "note" }, " · " + c.note) : null), meta, !c.ok && c.why ? h("span", { class: "why" }, c.why) : null));
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
    A.multi = null; A.game = null; A.carnet = null; A.screen = "home"; refresh().then(render);
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

  // ------------------------------------------------------------------ read aloud
  function speak(v) {
    if (!A.tts) return;
    var lines = [{ text: v.title }].concat(v.text.map(function (t) { return { text: t.replace(/\*/g, "") }; }));
    var out = [];
    lines.forEach(function (l) { var t = l.text; while (t.length > TTS_LINE_MAX) { var cut = t.lastIndexOf(". ", TTS_LINE_MAX); cut = cut > 0 ? cut + 1 : TTS_LINE_MAX; out.push({ text: t.slice(0, cut) }); t = t.slice(cut).trim(); } if (t) out.push({ text: t }); });
    A.speaking = true; render();
    var o = { language: "fr-FR", rate: pref("rate") || 1 };
    if (A.tts.browser) o.voiceName = pref("voice") || ""; else if (CLAUDE_VOICES[pref("voice")]) o.voice = pref("voice");
    A.tts.speak(out, o).catch(function () {}).then(function () { A.speaking = false; render(); });
  }
  function stopSpeaking() { if (A.tts && A.speaking) { try { A.tts.stop(); } catch (e) { /* ignore */ } A.speaking = false; } }

  // ------------------------------------------------------------------ the notebook
  var TABS = [["heros", "Héros"], ["sac", "Sac"], ["quetes", "Quêtes"], ["indices", "Indices"], ["compagnons", "Compagnons"], ["carte", "Carte"], ["gens", "Gens"], ["frise", "Frise"], ["marques", "Marque-pages"], ["exploits", "Hauts faits"], ["journal", "Journal"], ["coulisses", "Coulisses"]];
  function renderCarnet() {
    var G = A.game; if (!G) { A.carnet = null; return; }
    var close = function () { A.carnet = null; render(); };
    var bg = h("div", { class: "drawer-bg", onclick: close });
    var d = h("aside", { class: "drawer", role: "dialog", "aria-label": "Carnet" });
    d.appendChild(h("div", { class: "drawer-head" }, h("h2", null, "Carnet de " + G.s.name), h("button", { class: "btn sm", onclick: close }, "Fermer")));
    d.appendChild(h("nav", { class: "tabs" }, TABS.map(function (t) { return h("button", { class: "tab" + (A.carnetTab === t[0] ? " on" : ""), onclick: function () { A.carnetTab = t[0]; render(); } }, t[1]); })));
    var body = h("div", { class: "drawer-body" });
    ({ heros: tabHero, sac: tabBag, quetes: tabQuests, indices: tabClues, compagnons: tabCompanions, carte: tabMap, gens: tabPeople, frise: tabFrise, marques: tabMarks, exploits: tabFeats, journal: tabLog, coulisses: tabBackstage })[A.carnetTab](body, G.story, G.s);
    d.appendChild(body);
    app.appendChild(bg); app.appendChild(d);
  }
  function escClose(e) { if (e.key === "Escape" && A.carnet) { e.preventDefault(); A.carnet = null; render(); } }
  function bar(cls, v, max) { return h("span", { class: "bar " + cls }, h("i", { style: "width:" + Math.max(0, Math.min(100, Math.round(100 * v / max))) + "%" })); }
  function tabHero(b, st, s) {
    var a = M.ARCHS[s.arch] || {}, lv = M.level(s), into = s.ep - lv * M.EP_PER_LEVEL;
    b.appendChild(h("div", null, h("div", { class: "label" }, a.label + " · niveau " + lv), h("div", { class: "small muted" }, a.tip + " Difficulté : " + (M.DIFFICULTY[s.difficulty || "aventurier"] || {}).label + ".")));
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
    if (st.heroes) tabHeroes(b, st, s);
    b.appendChild(h("div", { class: "small" }, "Arme : " + (w ? w.name + " (dégâts " + w.dmg + (w.att ? ", attaque " + (w.att > 0 ? "+" : "") + w.att : "") + ")" : "mains nues (dégâts 2)") + " · Protection : " + (ar ? ar.name + " (+" + ar.def + ")" : "aucune")));
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
      b.appendChild(h("div", { class: "small" }, h("b", null, sh.name), " · " + a.label + " de niveau " + M.levelOfEp(sh.ep) + " · " + pv + where + " · souvenirs " + M.souvCount(st, s, k) + "/" + Object.keys(M.souvOf(st, k)).length));
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
      cs.forEach(function (k) { b.appendChild(h("div", { class: "clue", html: md(st.clues[k].text) })); });
    });
    if (!any) b.appendChild(h("div", { class: "notice" }, "Rien encore. Regarde, écoute, fouille."));
  }
  function tabCompanions(b, st, s) {
    var ks = Object.keys(st.companions || {}).filter(function (k) { return s.met[k]; });
    if (!ks.length) b.appendChild(h("div", { class: "notice" }, "Tu voyages seul."));
    ks.forEach(function (k) {
      var c = st.companions[k];
      b.appendChild(h("div", { class: "itemrow" }, h("b", null, c.name), h("span", { class: "small muted" }, s.met[k] === "party" ? "avec toi" : s.met[k] === "gone" ? "parti" : "rencontré"),
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
    if (s.travel) {
      var r = (W.routes || []).filter(function (x) { return x.id === s.travel.route; })[0], f = places[s.travel.from], t = places[s.travel.to];
      if (r && f && t) { var k = s.travel.step / s.travel.total; root.appendChild(svg("circle", { cx: f.x + (t.x - f.x) * k, cy: f.y + (t.y - f.y) * k, r: 1.6, fill: "var(--accent)" })); }
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
    ks.forEach(function (k) { var p = st.people[k]; if (p) b.appendChild(h("div", { class: "itemrow" }, h("b", null, p.name), h("span"), h("div", { class: "desc" }, p.desc || ""))); });
  }
  function tabLog(b, st, s) {
    var log = A.game.log.slice().reverse(), lastT = null;
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
  var PREFS = { skin: "histoire", size: "m", spacing: "normal", theme: "auto", font: "livre", voice: "", rate: 1, autoRead: false, dice: "ecran", ambiance: false, volume: 0.6 };
  var SIZES = { s: ["Petit", 16], m: ["Normal", 18], l: ["Grand", 21], xl: ["Très grand", 24] };
  var SPACINGS = { serre: ["Serré", 1.5], normal: ["Normal", 1.72], aere: ["Aéré", 2] };
  var THEMES = { auto: "Comme l'appareil", light: "Clair", sepia: "Sépia", dark: "Sombre" };
  // lisible (Clément, 12/11): Atkinson Hyperlegible, letters hard to confuse, for young or dyslexic readers; it then dresses the whole page.
  var FONTS = { livre: ["Livre", "var(--serif)"], droite: ["Sans empattement", "var(--sans)"], lisible: ["Lecture facile (Atkinson)", "'Atkinson Hyperlegible', var(--sans)"] };
  // Skins (Clément, 12/11): each story says how its book looks (`skin` in the story); the reader may keep it or choose.
  var SKINS = { histoire: "Celui de l'histoire", parchemin: "Parchemin", givre: "Givre", sable: "Sable", enluminure: "Enluminure", sobre: "Sobre" };
  var CLAUDE_VOICES = { buttery: "Chaude", airy: "Légère", glassy: "Claire", rounded: "Ronde" };
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
    if (pref("font") === "lisible") r.setAttribute("data-font", "lisible"); else r.removeAttribute("data-font");
  }
  function seg(map, key, label) {
    return h("div", { class: "stack tight" }, h("span", { class: "label" }, label), h("div", { class: "seg", role: "group", "aria-label": label },
      Object.keys(map).map(function (k) { var l = Array.isArray(map[k]) ? map[k][0] : map[k]; return h("button", { class: "btn sm" + (pref(key) === k ? " on" : ""), "aria-pressed": pref(key) === k ? "true" : "false", onclick: function () { setPref(key, k); } }, l); })));
  }

  // ------------------------------------------------------------------ dialogs: settings, report, real dice, bookmark
  function renderModal() {
    var m = A.modal, close = function () { A.modal = null; render(); };
    var box = h("div", { class: "modal", role: "dialog", "aria-modal": "true" });
    var bg = h("div", { class: "drawer-bg", onclick: close });
    ({ prefs: modalPrefs, report: modalReport, dice: modalDice, mark: modalMark })[m.kind](box, close, m);
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
    b.appendChild(seg(THEMES, "theme", "Thème"));
    b.appendChild(h("p", { class: "prose sample" }, "Le vent tourna, et la neige se mit à tomber de biais sur la route."));
    if (A.tts) {
      var voices = A.tts.browser ? (A.tts.voices() || []) : Object.keys(CLAUDE_VOICES);
      var vs = h("select", { "aria-label": "Voix", onchange: function (e) { setPref("voice", e.target.value); } },
        h("option", { value: "" }, "Voix par défaut"), voices.map(function (v) { return h("option", { value: v, selected: pref("voice") === v }, A.tts.browser ? v : CLAUDE_VOICES[v]); }));
      var rate = h("input", { type: "range", min: 0.7, max: 1.5, step: 0.05, value: pref("rate"), "aria-label": "Vitesse de lecture", onchange: function (e) { setPref("rate", +e.target.value); } });
      b.appendChild(h("div", { class: "stack tight" }, h("span", { class: "label" }, "Lecture à voix haute"),
        h("div", { class: "row" }, vs, h("label", { class: "row small" }, "Vitesse", rate, h("span", { class: "mono" }, "×" + Number(pref("rate")).toFixed(2)))),
        h("label", { class: "toggle" }, h("input", { type: "checkbox", checked: pref("autoRead"), onchange: function (e) { setPref("autoRead", e.target.checked); } }), h("span", null, h("b", null, "Lire chaque page à voix haute"), h("br"), h("span", { class: "small muted" }, "Après chaque choix, la page suivante est lue sans appuyer sur rien.")))));
    }
    b.appendChild(seg({ ecran: "L'écran lance", vrais: "Je lance mes dés" }, "dice", "Les dés"));
    b.appendChild(h("p", { class: "small muted" }, "Avec tes dés : deux dés à dix faces, un pour les dizaines, un pour les unités (00 = 100). Tu tapes le résultat, le livre fait le calcul. Les compagnons et les adversaires lancent toujours à l'écran."));
    b.appendChild(h("div", { class: "stack tight" }, h("span", { class: "label" }, "Ambiance sonore"),
      h("label", { class: "toggle" }, h("input", { type: "checkbox", checked: pref("ambiance"), onchange: function (e) { setPref("ambiance", e.target.checked); } }), h("span", null, h("b", null, "Jouer l'ambiance du lieu"), h("br"), h("span", { class: "small muted" }, "Vent, pluie, forêt, ville, souterrain… composés par l'appareil, sans fichier."))),
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

  // ------------------------------------------------------------------ endings found and feats, per reader
  // Intent: keep(Story, State, View, GameDoc) -> () ! writes the reader's profile when something new is earned
  function keepRecords(st, s, v, d) {
    if (A.game.ephemeral || A.game.multi || d.test) return;
    var prof = A.profiles.filter(function (p) { return p.id === d.profil; })[0]; if (!prof) return;
    var rec = prof.records = prof.records || {}, r = rec[st.id] = rec[st.id] || { endings: {}, feats: {} }, changed = false;
    Object.keys(s.feats || {}).forEach(function (k) { if (!r.feats[k]) { r.feats[k] = Date.now(); changed = true; } });
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
  function renderRecit() {
    var G = A.game, st = G.story, s = G.s;
    app.appendChild(topBar([h("button", { class: "btn ghost sm", onclick: function () { A.screen = "game"; render(); } }, "← Revenir à la partie"), h("span", { class: "brand grow" }, "Mon aventure"),
      h("button", { class: "btn sm", onclick: function () { try { window.print(); } catch (e) { flash("L'impression n'est pas possible ici ; télécharge le livre puis imprime-le.", true); } } }, "Imprimer ou PDF"),
      canDownload() ? h("button", { class: "btn sm primary", onclick: function () {
        download("aventure-" + (s.name || "heros").replace(/[^\wÀ-ÿ-]+/g, "-") + ".html", "<!doctype html><meta charset=utf-8><title>" + esc(st.title) + " · " + esc(s.name) + "</title><style>" + RECIT_CSS + "</style>" + recitHtml(st, s, A.recit.pages));
      } }, "Télécharger le livre") : null]));
    var w = h("main", { class: "wrap read recit" });
    if (A.recit.busy) w.appendChild(h("p", null, "Le livre se rassemble…"));
    else w.appendChild(h("div", { html: recitHtml(st, s, A.recit.pages) }));
    w.appendChild(h("p", { class: "small muted noprint" }, "Le fichier téléchargé s'ouvre dans n'importe quel navigateur ; « Imprimer », puis « Enregistrer en PDF », en fait un PDF."));
    app.appendChild(w);
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
    return sec;
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
    return { of: function (st, st8) { var kind = M.ambianceOf(st, st8); if (!kind) return null; return draw(kind, M.isNightNow(st8), hash(st.id + (st8.place || st8.node || "") + kind)); } };
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

  // ------------------------------------------------------------------ start
  loadBuiltins();
  document.addEventListener("keydown", escClose);
  render();
  Store.init().then(function () {
    if (window.claude && window.claude.use) {
      window.claude.use("downloads").then(function (d) { A.downloads = d; render(); }).catch(function () {});
      window.claude.use("tts").then(function (t) { A.tts = t; if (t) t.onState(function (x) { A.speaking = x.state !== "idle"; }); render(); }).catch(function () {});
    } else {
      // Offline copy: ask the browser to keep this site's data (saves) even when the device runs short of space.
      try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) { /* ignore */ }
      A.tts = browserTts(); if (A.tts) A.tts.onState(function (x) { A.speaking = x.state !== "idle"; render(); });
    }
    return refresh();
  }).then(function () { A.busy = false; render(); }, function () { A.busy = false; render(); });
})();
