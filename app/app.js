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
    if (A.carnet) renderCarnet();
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
        : h("div", null, h("button", { class: "btn ghost sm", onclick: function () { A.confirmDelProfile = cur.id; render(); } }, "Retirer " + cur.name)));
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
          h("div", { class: "grow" }, h("b", null, g.hero + " · " + g.storyTitle), h("div", { class: "small muted" }, (g.archLabel || "") + " niveau " + (g.level || 1) + " · " + (g.where || "") + (g.ended ? " · terminée" : "") + " · " + when(g.updated))),
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
  var BACKUP_COLLS = ["profils", "parties", "scenarios", "scenarioParts", "multis", "salles"];
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
      onState: function (f) { listeners.push(f); },
      stop: function () { token++; sy.cancel(); tell("idle"); },
      speak: function (lines, opts) {
        var mine = ++token; sy.cancel();
        var fr = sy.getVoices().filter(function (v) { return /^fr/i.test(v.lang); })[0];
        return lines.reduce(function (p, l) {
          return p.then(function () {
            if (mine !== token) return;
            return new Promise(function (res) {
              var u = new SpeechSynthesisUtterance(l.text); u.lang = (opts && opts.language) || "fr-FR"; if (fr) u.voice = fr;
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
      A.create = { story: st, name: "", arch: "", past: (st.past || []).map(function () { return -1; }), toutJouer: true };
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
    function ready() { return C.name.trim() && C.arch && C.past.every(function (x) { return x >= 0; }); }
    var startBtn = h("button", { class: "btn primary", disabled: !ready(), onclick: startGame }, C.multi && C.multi.next ? C.multi.next : "Commencer la lecture");
    w.appendChild(h("div", { class: "row" }, startBtn, h("span", { class: "small muted" }, "Il faut un nom, une voie et une réponse à chaque question.")));
    app.appendChild(w);
  }
  // Intent: build(Creation) -> State = the new hero, his past answers applied, the story started
  function buildState(C) {
    var st = C.story, s = M.freshState(st, { toutJouer: C.toutJouer });
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
    A.game = { doc: g, story: st, s: s, undo: [], log: [] };
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
        A.game = { doc: g, story: st, s: upgradeState(st, JSON.parse(g.state)), undo: g.undo || [], log: g.log || [] };
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
    var G = A.game, s = G.s, st = G.story, d = G.doc, v = M.view(st, s);
    d.state = JSON.stringify(s); d.undo = G.undo; d.log = G.log; d.updated = Date.now();
    d.hero = s.name; d.arch = s.arch; d.archLabel = (M.ARCHS[s.arch] || {}).label; d.level = M.level(s); d.where = where(st, s) || v.title; d.ended = v.kind === "end";
    while (JSON.stringify(d).length > DOC_MAX_CHARS && d.undo.length) d.undo = d.undo.slice(1);
    while (JSON.stringify(d).length > DOC_MAX_CHARS && d.log.length > 20) d.log = d.log.slice(Math.ceil(d.log.length / 4));
    var meta = {}; for (var k in d) if (k !== "state" && k !== "undo" && k !== "log") meta[k] = d[k];
    A.allGames = (A.allGames || []).filter(function (g) { return g.id !== d.id; }).concat([meta]);
    A.games = A.allGames.filter(function (g) { return A.profile && g.profil === A.profile.id; }).sort(function (a, b) { return (b.updated || 0) - (a.updated || 0); });
    Store.put("parties", d.id, d).catch(function (e) {
      A.notice = "La sauvegarde en ligne a échoué (" + ((e && e.code) || "erreur") + ") ; la partie reste enregistrée dans ce navigateur.";
      if (A.screen === "game") render();
    });
  }
  function logStep() {
    var G = A.game, s = G.s, v = M.view(G.story, s);
    G.log.push({ t: M.timeLabel(s), title: v.title, ev: s.events.map(function (e) { return e.text; }) });
    if (G.log.length > LOG_MAX) G.log.splice(0, G.log.length - LOG_MAX);
  }
  function pick(c) {
    if (A.game.multi) { multiPick(c); return; }
    var G = A.game;
    stopSpeaking();
    G.undo.push(JSON.stringify(G.s)); if (G.undo.length > UNDO_MAX) G.undo.shift();
    try { M.choose(G.story, G.s, c); }
    catch (e) { G.s = JSON.parse(G.undo.pop()); A.notice = "Ce choix a buté sur une erreur de l'histoire : " + e.message; render(); return; }
    A.notice = "";
    logStep(); persist(); render();
    var top = document.querySelector(".page"); if (top) top.scrollIntoView({ block: "start", behavior: "smooth" });
  }
  function undo() {
    if (A.game.multi) { multiUndo(); return; }
    var G = A.game; if (!G.undo.length) return;
    stopSpeaking();
    G.s = upgradeState(G.story, JSON.parse(G.undo.pop())); G.s.events = [{ text: "Tu reviens au choix précédent.", cls: "" }];
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
    page.appendChild(h("div", { class: "page-head" }, h("div", null, h("h2", null, v.title || ""), h("div", { class: "where" }, [cur >= 0 ? acts[cur].title : null, where(st, s)].filter(Boolean).join(" · "))), num ? h("span", { class: "para-num", title: "Numéro du paragraphe" }, "§ " + num) : null));
    if (A.notice) page.appendChild(h("div", { class: "notice" }, A.notice));
    var prose = h("div", { class: "prose" });
    var folded = v.reread && A.unfold !== s.node + "#" + s.turn;
    if (folded) prose.appendChild(h("p", { class: "reread" }, h("span", { class: "muted" }, "Tu connais déjà cette page. "),
      h("button", { class: "btn ghost sm", onclick: function () { A.unfold = s.node + "#" + s.turn; render(); } }, "Relire")));
    else v.text.forEach(function (t) { prose.appendChild(h("p", { html: md(t) })); });
    page.appendChild(prose);
    // Clues, items and rolls come after the text (Clément, 11/11: at the top they broke the reading).
    if (s.events && s.events.length) page.appendChild(h("div", { class: "events", role: "status" }, s.events.map(function (e) { return h("div", { class: "ev " + (e.cls || "") }, e.text); })));
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
      h("button", { class: "btn sm", onclick: function () { A.carnet = true; A.carnetTab = "quetes"; render(); } }, "Quêtes")));
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
      h("div", { class: "row" },
        A.game && A.game.multi ? null : h("button", { class: "btn primary", onclick: function () { newGame(st.id); } }, "Relire avec un autre héros"),
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
    A.tts.speak(out, { language: "fr-FR" }).catch(function () {}).then(function () { A.speaking = false; render(); });
  }
  function stopSpeaking() { if (A.tts && A.speaking) { try { A.tts.stop(); } catch (e) { /* ignore */ } A.speaking = false; } }

  // ------------------------------------------------------------------ the notebook
  var TABS = [["heros", "Héros"], ["sac", "Sac"], ["quetes", "Quêtes"], ["indices", "Indices"], ["compagnons", "Compagnons"], ["carte", "Carte"], ["gens", "Gens"], ["journal", "Journal"], ["coulisses", "Coulisses"]];
  function renderCarnet() {
    var G = A.game; if (!G) { A.carnet = null; return; }
    var close = function () { A.carnet = null; render(); };
    var bg = h("div", { class: "drawer-bg", onclick: close });
    var d = h("aside", { class: "drawer", role: "dialog", "aria-label": "Carnet" });
    d.appendChild(h("div", { class: "drawer-head" }, h("h2", null, "Carnet de " + G.s.name), h("button", { class: "btn sm", onclick: close }, "Fermer")));
    d.appendChild(h("nav", { class: "tabs" }, TABS.map(function (t) { return h("button", { class: "tab" + (A.carnetTab === t[0] ? " on" : ""), onclick: function () { A.carnetTab = t[0]; render(); } }, t[1]); })));
    var body = h("div", { class: "drawer-body" });
    ({ heros: tabHero, sac: tabBag, quetes: tabQuests, indices: tabClues, compagnons: tabCompanions, carte: tabMap, gens: tabPeople, journal: tabLog, coulisses: tabBackstage })[A.carnetTab](body, G.story, G.s);
    d.appendChild(body);
    app.appendChild(bg); app.appendChild(d);
  }
  function escClose(e) { if (e.key === "Escape" && A.carnet) { e.preventDefault(); A.carnet = null; render(); } }
  function bar(cls, v, max) { return h("span", { class: "bar " + cls }, h("i", { style: "width:" + Math.max(0, Math.min(100, Math.round(100 * v / max))) + "%" })); }
  function tabHero(b, st, s) {
    var a = M.ARCHS[s.arch] || {}, lv = M.level(s), into = s.ep - lv * M.EP_PER_LEVEL;
    b.appendChild(h("div", null, h("div", { class: "label" }, a.label + " · niveau " + lv), h("div", { class: "small muted" }, a.tip)));
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
      root.appendChild(svg("line", { x1: a.x, y1: a.y, x2: z.x, y2: z.y, stroke: "var(--muted)", "stroke-width": s.routesDone[r.id] ? 0.7 : 0.4, "stroke-dasharray": s.routesDone[r.id] ? "" : "1.2 1.2" }));
    });
    Object.keys(places).forEach(function (k) {
      if (!s.known[k] || !onMap(k)) return; var p = places[k], isHere = s.place === k;
      root.appendChild(svg("circle", { cx: p.x, cy: p.y, r: isHere ? 2 : 1.3, fill: isHere ? "var(--accent)" : "var(--ink)" }));
      root.appendChild(svg("text", { x: p.x + 2.4, y: p.y + 1 }, p.name));
    });
    if (s.travel) {
      var r = (W.routes || []).filter(function (x) { return x.id === s.travel.route; })[0], f = places[s.travel.from], t = places[s.travel.to];
      if (r && f && t) { var k = s.travel.step / s.travel.total; root.appendChild(svg("circle", { cx: f.x + (t.x - f.x) * k, cy: f.y + (t.y - f.y) * k, r: 1.6, fill: "var(--accent)" })); }
    }
    b.appendChild(h("div", { class: "map" }, root));
    Object.keys(places).forEach(function (k) { if (s.known[k] && onMap(k)) b.appendChild(h("div", { class: "small" }, h("b", null, places[k].name), " · ", h("span", { class: "muted" }, places[k].desc || ""))); });
  }
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
