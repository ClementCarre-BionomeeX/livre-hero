// Builds dist/graphe.html: the graph of every story (passages as nodes, typed arrows from choices, tags and routes).
// Usage: node tests/graphe.js   (after tests/build.js, which writes histoires/<id>.json)
// Generic: reads only the story format, nothing specific to one scenario.
var fs = require("fs"), path = require("path"), root = path.join(__dirname, "..");
var ids = fs.readdirSync(path.join(root, "histoires")).filter(function (f) { return /\.json$/.test(f); }).map(function (f) { return f.replace(/\.json$/, ""); });

function has(c, keys) { var s = JSON.stringify(c == null ? null : c); return keys.some(function (k) { return s.indexOf('"' + k + '":') >= 0; }); }
var WHO = ["present", "away", "gone", "loyal", "met", "conf", "fear", "lead", "team", "party"], HOUR = ["night", "day", "since", "clock"];
// What a condition is about, in the order an author cares: who is there, what hour it is, what happened before.
function kindOf(parts) {
  var c = parts.filter(function (x) { return x != null; });
  if (!c.length) return null;
  if (c.some(function (x) { return x.with != null || x.without != null || x.who != null || has(x.if, WHO) || has(x.hide, WHO) || has(x.cond, WHO); })) return "avec";
  if (c.some(function (x) { return x.when != null || has(x.if, HOUR) || has(x.hide, HOUR) || has(x.cond, HOUR); })) return "heure";
  if (c.some(function (x) { return x.if != null || x.hide != null || x.cond != null || x.after != null || x.before != null; })) return "cond";
  return null;
}
function say(c) {
  if (c == null) return "";
  if (typeof c === "string") return c;
  if (Array.isArray(c)) return c.map(say).join(" et ");
  if ("has" in c) return c.has;
  if ("not" in c) return "pas (" + say(c.not) + ")";
  if ("all" in c) return c.all.map(say).join(" et ");
  if ("any" in c) return "(" + c.any.map(say).join(" ou ") + ")";
  var k = Object.keys(c)[0], v = c[k];
  return k + " " + (typeof v === "object" ? JSON.stringify(v) : v) + Object.keys(c).slice(1).map(function (x) { return " " + x + " " + JSON.stringify(c[x]); }).join("");
}
function tagsSay(t) {
  var out = [];
  if (t.with != null) out.push([].concat(t.with).indexOf("any") >= 0 ? "accompagné" : "avec " + [].concat(t.with).join(", "));
  if (t.without != null) out.push([].concat(t.without).indexOf("any") >= 0 ? "seul" : "sans " + [].concat(t.without).join(", "));
  if (t.who) out.push("avec " + t.who);
  if (t.when) out.push(t.when === "night" ? "de nuit" : "de jour");
  if (t.after != null) out.push("après " + [].concat(t.after).join(", "));
  if (t.before != null) out.push("avant " + [].concat(t.before).join(", "));
  if (t.outcome != null) out.push("issue : " + [].concat(t.outcome).join(", "));
  if (t.once) out.push("une seule fois");
  if (t.if != null) out.push("si " + say(t.if));
  if (t.hide != null) out.push("caché si " + say(t.hide));
  return out.join(" · ");
}

function graphOf(story) {
  var P = story.passages, W = story.world || {}, places = W.places || {}, nodes = [], edges = [], starts = {}, quests = {};
  (story.acts || []).forEach(function (a) { starts[a.start] = 1; });
  (story.quests || []).forEach(function (q) { if (q.start) quests[q.start] = q.title; });
  var events = {}; Object.keys(W.events || {}).forEach(function (k) { events[W.events[k].passage] = 1; });
  (W.routes || []).forEach(function (r) { (r.legs || []).forEach(function (l) { events[l.passage] = 1; }); });
  (story.banter || []).forEach(function (b) { events[b.id] = 1; });
  Object.keys(P).forEach(function (id) {
    var p = P[id], txt = (p.text || []).map(function (t) { return typeof t === "string" ? t : (t && t.text) || ""; }).join(" ");
    var tags = (p.text || []).filter(function (t) { return t && typeof t === "object"; });
    nodes.push({ id: id, t: p.title || id, a: p.act || "", p: p.place && places[p.place] ? places[p.place].name : "",
      k: (p.hub ? "h" : "") + (p.end ? "e" : "") + (p.combat ? "c" : "") + (starts[id] || id === story.start ? "s" : "") + (quests[id] ? "q" : "") + (events[id] ? "v" : "") + (p.routes ? "r" : ""),
      x: txt.slice(0, 220), n: (p.text || []).length, g: tags.filter(function (t) { return tagsSay(t); }).length, sc: tagsSay({ with: p.with, without: p.without, when: p.when, after: p.after, before: p.before }) });
    function add(to, kind, label, cond, extra) {
      if (Array.isArray(to)) { to.forEach(function (x) { add(x.to, x.if != null ? (kind === "libre" ? (kindOf([{ cond: x.if }]) || "cond") : kind) : kind, label, [cond, x.if != null ? "si " + say(x.if) : ""].filter(Boolean).join(" · "), extra); }); return; }
      if (to == null) return;
      // "@team" resumes a company: drawn towards each company's first passage.
      if (to === "@team") { Object.keys(story.teams || {}).forEach(function (k) { var st = story.teams[k].start; if (st && P[st] && (!extra || extra === k)) edges.push({ f: id, t: st, k: kind, l: label, c: cond || "" }); }); return; }
      if (to === "@ret" || to === "@route") { edges.push({ f: id, t: to, k: "retour", l: label, c: cond }); return; }
      edges.push({ f: id, t: to, k: kind, l: label, c: cond || "" });
    }
    (p.choices || []).forEach(function (c) {
      var base = kindOf([c]) || (c.once ? "unefois" : "libre"), cond = tagsSay(c);
      if (c.test) { add(c.win && c.win.to, "reussi", c.label, [cond, "jet réussi"].filter(Boolean).join(" · ")); add(c.lose && c.lose.to, "rate", c.label, [cond, "jet raté"].filter(Boolean).join(" · ")); }
      else if (c.fight) { ["win", "lose", "flee", "calm"].forEach(function (o) { if (c.fight[o]) add(c.fight[o].to, "combat", c.label, "combat : " + o); }); }
      else add(c.to, base, c.label, cond, c.fx && c.fx.team);
    });
    if (p.combat) ["win", "lose", "flee", "calm"].forEach(function (o) { if (p.combat[o]) add(p.combat[o].to, "combat", { win: "Victoire", lose: "Défaite", flee: "Fuite", calm: "Apaisé" }[o], "combat"); });
    if (p.combat && p.combat.talk && p.combat.talk.win) add(p.combat.talk.win.to, "combat", "Parler", "combat");
  });
  // Roads: from every passage of a place that opens its roads to the arrival passage of the other end.
  (W.routes || []).forEach(function (r) {
    function road(a, b, label) {
      var arr = places[b] && places[b].arrive; if (!arr || !P[arr]) return;
      Object.keys(P).forEach(function (id) { if (P[id].routes && P[id].place === a) edges.push({ f: id, t: arr, k: "route", l: label || ("Route vers " + places[b].name), c: [r.steps + " étape" + (r.steps > 1 ? "s" : ""), r.if != null ? "si " + say(r.if) : ""].filter(Boolean).join(" · ") }); });
    }
    road(r.from, r.to, r.label); if (r.twoWay !== false) road(r.to, r.from, r.labelBack);
  });
  return { id: story.id, title: story.title, start: story.start, acts: (story.acts || []).map(function (a) { return { id: a.id, title: a.title || a.id, start: a.start }; }), nodes: nodes, edges: edges };
}

var data = ids.map(function (id) { return graphOf(JSON.parse(fs.readFileSync(path.join(root, "histoires", id + ".json"), "utf8"))); });
data.sort(function (a, b) { return a.nodes.length - b.nodes.length; });
var tpl = fs.readFileSync(path.join(root, "app", "graphe.html"), "utf8");
var out = tpl.replace("/*DATA*/null", function () { return JSON.stringify(data).replace(/</g, "\\u003c"); });
fs.writeFileSync(path.join(root, "dist", "graphe.html"), out);
console.log("dist/graphe.html : " + Math.round(out.length / 1024) + " Ko · " + data.map(function (d) { return d.id + " " + d.nodes.length + " nœuds / " + d.edges.length + " flèches"; }).join(" · "));
