"use strict";
// The map of the endings found (« Carte des fins », 25.5): for one reader and one book, over all their games, the
// pages reached, the endings found as stars, and the ways never taken left in the fog.
// Intent: map(Story, Record, extraSeen?) -> { acts: [Act], hiddenActs, ends: { found: [{ id, title, n }], total },
//   pages: { known, total }, stubs } = what the reader has opened of the book, laid out one act at a time.
//   Act = { id, title, nodes: [Node], edges: [Edge], stubs: [Stub], width, depth }
//   Node = { id, x, y, kind: "start" | "end" | "fork" | "page", title, folded, end?: n }
//   Edge = { from, to, folded }   (folded: the pages read in a row between the two, drawn as one line)
//   Stub = { from, x, y, label }  (a way the reader saw on a page and never took; label: its words, when the reader
//                                  saw them as they are written; nothing about where it leads)
// Intent: worth(Story) -> bool = a book where the map means something: several endings, not a book to read straight.
// Why: Clément, 26/11: « carte des fins découvertes », the unexplored branches in the fog, to make one read again.
// The rule: nothing the reader has not read can be guessed from it. Only pages read are drawn, with their titles; a way
// is drawn only from a page read, as a stub into the fog, and only if the reader could see it there (no `hide`); the
// endings not found are a number; an act never reached has no title.
(function (root) {
  var M = root.Moteur || (typeof require !== "undefined" ? require("./moteur.js") : null);

  // Intent: forward(Passage) -> [id] = the passages a page leads to: every `to` in it, but not its ways back.
  function forward(p, P) {
    var out = [];
    (function walk(o, key) {
      if (key === "back" || o == null) return;
      if (Array.isArray(o)) { o.forEach(function (x) { walk(x, null); }); return; }
      if (typeof o !== "object") return;
      Object.keys(o).forEach(function (k) {
        var v = o[k];
        if (k === "to" && typeof v === "string") { if (P[v] && out.indexOf(v) < 0) out.push(v); }
        else if (k !== "back" && k !== "text" && k !== "hide" && k !== "if") walk(v, k);
      });
    })(p, null);
    return out;
  }
  // the targets of one choice of the page (its own way, and those of a roll or a fight)
  function choiceTargets(c, P) {
    var out = [];
    (function add(to) { if (Array.isArray(to)) to.forEach(function (x) { add(x && x.to); }); else if (typeof to === "string" && P[to]) out.push(to); })([{ to: c.to }, { to: c.win && c.win.to }, { to: c.lose && c.lose.to }, { to: c.fight && c.fight.win && c.fight.win.to }, { to: c.fight && c.fight.lose && c.fight.lose.to }, { to: c.fight && c.fight.flee && c.fight.flee.to }]);
    return out;
  }
  function isBack(c) { return c.back != null && c.back !== false; }
  function plain(t) { return String(t || "").replace(/\*/g, "").trim(); }
  // the words of a choice as the reader saw them: none when they change with the game or hide something
  function seenLabel(c) {
    var l = String(c.label || "");
    if (!l || c.labels || /\{/.test(l) || /^🔒/.test(l)) return "";
    return plain(l);
  }
  // Intent: endPassages(Story) -> { endingId: [passageId] } = where each ending is reached
  function endPassages(st) {
    var P = st.passages || {}, out = {};
    Object.keys(P).forEach(function (id) {
      var p = P[id], fl = [].concat(((p.fx || {}).flag) || [], ((p.fx || {}).flags) || []);
      fl.forEach(function (f) { if (typeof f === "string" && f.indexOf("fin:") === 0) (out[f] = out[f] || []).push(id); });
      if (p.end) (out[id] = out[id] || []).push(id);
    });
    return out;
  }
  function worth(st) {
    if (!st || st.lecture || st.multi || !M) return false;
    return M.endingsOf(st).length > 1;
  }

  function map(st, rec, extraSeen) {
    var P = st.passages || {}, ids = Object.keys(P), order = {}, known = {}, trail = (rec && rec.trail) || {};
    ids.forEach(function (k, i) { order[k] = i; });
    var pages = (rec && rec.pages) || {};
    Object.keys(pages).forEach(function (k) { if (P[k]) known[k] = 1; });
    Object.keys(extraSeen || {}).forEach(function (k) { if (P[k]) known[k] = 1; });
    Object.keys(trail).forEach(function (k) { if (P[k]) known[k] = 1; });
    // the endings found: their page is known, even from a game played before the pages were kept
    var ends = M.endingsOf(st), where = endPassages(st), found = [], endAt = {};
    ends.forEach(function (e) {
      if (!((rec && rec.endings) || {})[e.id]) return;
      var at = (where[e.id] || []).filter(function (k) { return known[k]; })[0] || (where[e.id] || [])[0];
      found.push({ id: e.id, title: e.title, n: found.length + 1, at: at || null });
      if (at) { known[at] = 1; (endAt[at] = endAt[at] || []).push(found.length); }
    });
    if (P[st.start]) known[st.start] = 1;
    var list = ids.filter(function (k) { return known[k]; });
    // the ways between pages read
    var outs = {}, ins = {};
    list.forEach(function (k) { outs[k] = forward(P[k], P).filter(function (t) { return known[t] && t !== k; }); outs[k].forEach(function (t) { (ins[t] = ins[t] || []).push(k); }); });
    // the ways seen and never taken: a choice of a page read, without `hide`, never taken, that leads to no page read
    var stubsOf = {};
    list.forEach(function (k) {
      var taken = trail[k] || {};
      (P[k].choices || []).forEach(function (c, i) {
        if (isBack(c) || c.hide || c.restart || taken[i] || taken[String(i)]) return;
        var ts = choiceTargets(c, P); if (!ts.length || ts.some(function (t) { return known[t]; })) return;
        (stubsOf[k] = stubsOf[k] || []).push({ from: k, label: seenLabel(c) });
      });
    });
    // acts: a page's own, else the one of the page it was reached from
    var actOf = {};
    var actIds = (st.acts || []).map(function (a) { return a.id; });
    list.forEach(function (k) { if (P[k].act) actOf[k] = P[k].act; });
    for (var pass = 0; pass < 4; pass++) list.forEach(function (k) {
      if (actOf[k]) return; var from = (ins[k] || []).filter(function (x) { return actOf[x]; })[0] || (typeof pages[k] === "string" && actOf[pages[k]] ? pages[k] : null);
      if (from) actOf[k] = actOf[from];
    });
    list.forEach(function (k) { if (!actOf[k]) actOf[k] = actIds[0] || ""; });
    var acts = (st.acts && st.acts.length ? st.acts : [{ id: "", title: "" }]).map(function (a) {
      return layoutAct(st, a, list.filter(function (k) { return actOf[k] === a.id; }), outs, ins, stubsOf, endAt, pages, order);
    }).filter(function (a) { return a.nodes.length; });
    var stubN = 0; acts.forEach(function (a) { stubN += a.stubs.length; });
    return { acts: acts, hiddenActs: Math.max(0, (st.acts || []).length - acts.length), ends: { found: found, total: ends.length },
      pages: { known: list.filter(function (k) { return !P[k].branch; }).length, total: ids.filter(function (k) { return !P[k].branch; }).length }, stubs: stubN };
  }

  // Intent: layoutAct(...) -> Act = the pages of one act as a tree: each page under the first page that leads to it,
  // the pages read in a row folded into one line, the forks, the stars and the stubs as leaves; x is the row (top to bottom), y the depth.
  function layoutAct(st, a, nodes, outs, ins, stubsOf, endAt, pages, order) {
    var P = st.passages, inAct = {}; nodes.forEach(function (k) { inAct[k] = 1; });
    var parent = {}, kids = {}, seen = {}, roots = [];
    var bfs = function (r) {
      if (seen[r]) return; seen[r] = 1; roots.push(r); var q = [r];
      while (q.length) {
        var k = q.shift();
        (outs[k] || []).forEach(function (t) { if (!inAct[t] || seen[t]) return; seen[t] = 1; parent[t] = k; (kids[k] = kids[k] || []).push(t); q.push(t); });
      }
    };
    // roots: the book's start, then the pages reached from another act (or from nowhere read), in the book's order
    var sorted = nodes.slice().sort(function (x, y) { return order[x] - order[y]; });
    if (inAct[st.start]) bfs(st.start);
    sorted.forEach(function (k) { if (!(ins[k] || []).some(function (x) { return inAct[x]; })) bfs(k); });
    sorted.forEach(function (k) {
      if (seen[k]) return;
      var from = typeof pages[k] === "string" && inAct[pages[k]] && seen[pages[k]] ? pages[k] : null;
      if (from) { seen[k] = 1; parent[k] = from; (kids[from] = kids[from] || []).push(k); var q = [k]; while (q.length) { var x = q.shift(); (outs[x] || []).forEach(function (t) { if (!inAct[t] || seen[t]) return; seen[t] = 1; parent[t] = x; (kids[x] = kids[x] || []).push(t); q.push(t); }); } }
      else bfs(k);
    });
    // folding: a page stays drawn when it is a root, an ending, a fork (two ways or more, stubs counted), or a leaf
    var drawn = function (k) { return !parent[k] || endAt[k] || (stubsOf[k] || []).length || (kids[k] || []).length !== 1 || P[k].hub; };
    var T = {}; // drawn page -> { kids: [drawn], folded: pages folded above it }
    var climb = function (k) { var f = 0, p = parent[k]; while (p && !drawn(p)) { f++; p = parent[p]; } return { up: p || null, folded: f }; };
    nodes.forEach(function (k) { if (drawn(k)) T[k] = { kids: [], folded: 0, up: null }; });
    Object.keys(T).forEach(function (k) { if (!parent[k]) return; var c = climb(k); T[k].up = c.up; T[k].folded = c.folded; if (c.up) T[c.up].kids.push(k); });
    // a stub hangs from the drawn page above it (the page itself when drawn)
    Object.keys(T).forEach(function (k) { T[k].kids.sort(function (x, y) { return order[x] - order[y]; }); });
    var out = { id: a.id, title: a.title || "", nodes: [], edges: [], stubs: [], width: 0, depth: 0 }, leaf = 0;
    var place = function (k, d) {
      var n = T[k], xs = [], node = { id: k, y: d, kind: endAt[k] ? "end" : k === st.start ? "start" : (n.kids.length + (stubsOf[k] || []).length) > 1 ? "fork" : "page", title: plain(P[k].title), folded: n.folded };
      if (endAt[k]) node.end = endAt[k];
      node.x = leaf++;   // each drawn page on its own row, above what follows it, as in a table of contents
      out.nodes.push(node); out.depth = Math.max(out.depth, d);
      // the pages read around a fork that lead nowhere further (a scene seen and left) are gathered into one point
      var bare = n.kids.filter(function (c) { return !T[c].kids.length && !endAt[c] && !(stubsOf[c] || []).length; });
      n.kids.forEach(function (c) { if (bare.length > 1 && bare.indexOf(c) >= 0) return; xs.push(place(c, d + 1)); out.edges.push({ from: k, to: c, folded: T[c].folded }); });
      if (bare.length > 1) {
        var cid = k + "~pages", cnt = bare.reduce(function (m, c) { return m + 1 + T[c].folded; }, 0), cx = leaf++;
        out.nodes.push({ id: cid, x: cx, y: d + 1, kind: "pages", count: cnt, titles: bare.map(function (c) { return plain(P[c].title); }), folded: 0 });
        out.edges.push({ from: k, to: cid, folded: 0 }); xs.push(cx); out.depth = Math.max(out.depth, d + 1);
      }
      (stubsOf[k] || []).forEach(function (s) { var x = leaf++; out.stubs.push({ from: k, x: x, y: d + 1, label: s.label }); xs.push(x); out.depth = Math.max(out.depth, d + 1); });
      return node.x;
    };
    roots.forEach(function (r) { if (T[r]) { place(r, 0); leaf += 0.5; } });
    out.width = Math.max(1, Math.ceil(leaf));
    return out;
  }

  var API = { map: map, worth: worth, forward: forward, endPassages: endPassages };
  if (typeof module !== "undefined" && module.exports) module.exports = API; else root.CarteFins = API;
})(typeof self !== "undefined" ? self : this);
