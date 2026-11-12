"use strict";
// Several players in one story (Clément, 11/11). Each player holds his own copy of the game state and plays his own
// heroes; the copies meet again at rendezvous, where they are merged. No DOM here: the page (same device or a shared
// room on several devices) and the Node tests share it.
//
// - Heroes: in a story with several playable heroes (`story.heroes`), the heroes are shared out between the players.
//   A choice that switches to a hero or a team of another player is closed to me ("C'est le chemin de Léo").
//   In a story with one hero, each player makes his own hero, in the same world.
// - Rendezvous: the start of every new act, and any passage marked `charniere: true`. A player who gets there waits
//   until every player has got there (or has finished). A player who has no choice left (all closed by the others'
//   heroes or by the chapter lockstep of the crossroads) waits too.
// - Sync: when every player waits, the copies are merged (three-way, from the last merged state): what each player
//   changed is kept; when two players changed the same thing, numbers add up (trust, gold, counts) and otherwise the
//   first to have arrived wins. In a story with one hero per player, only the world flags (`monde:…`) are shared.
// - World choices: a choice with `monde: "<key>"` (and optionally `option: "<id>"`, else its label) is decided by the
//   first player who takes it, for everybody: the others see only that option open, the rest closed with who decided.
(function (root) {
  var M = root.Moteur || (typeof require !== "undefined" ? require("./moteur.js") : null);
  // What says where a player stands and is never merged: his place in the text, his current hero and team.
  var POSITION_KEYS = ["node", "ret", "events", "travel", "combat", "bookmark", "team", "lead", "lastAct", "turn", "toutJouer", "allies"];
  var SHEET_KEYS = ["name", "arch", "ep", "items", "fatigue", "arrows", "time", "place", "gold", "food"];
  var WORLD_FLAG = "monde:";
  var WAIT = { RDV: "rdv", BLOCKED: "bloque", END: "fin" };

  function clone(o) { return o === undefined ? undefined : JSON.parse(JSON.stringify(o)); }
  function same(a, b) { return JSON.stringify(a) === JSON.stringify(b); }
  function multiHero(story) { return !!story.heroes; }

  // ------------------------------------------------------------------ the game
  // Intent: create(Story, [Player], State?) -> Game
  // players: [{ id, name, color, heroes: [heroId] (story with heroes), s: State (story with one hero: his own) }]
  function create(story, players, shared) {
    var g = { story: story.id, players: [], base: null, decisions: {}, released: {}, round: 0, log: [] };
    players.forEach(function (p, i) {
      var s = multiHero(story) ? clone(shared) : p.s;
      g.players.push({ id: p.id || "j" + (i + 1), name: p.name, color: p.color || "", heroes: (p.heroes || []).slice(), s: s, wait: null, since: 0, round: 0, actOk: s ? Math.max(0, actIndex(story, s.lastAct)) : 0 });
    });
    if (multiHero(story)) {
      g.base = normalize(story, shared);
      // each player starts with one of his own heroes in the lead
      g.players.forEach(function (p) { if (p.heroes.length && p.heroes.indexOf(p.s.lead) < 0) p.s = denormalize(story, g.base, p.s, p.heroes[0]); });
    }
    return g;
  }
  function player(g, pid) { return g.players.filter(function (p) { return p.id === pid; })[0]; }

  // ------------------------------------------------------------------ who owns what
  function ownsHero(p, hero) { return !p.heroes || !p.heroes.length || p.heroes.indexOf(hero) >= 0; }
  // Intent: owner(Game, Hero) -> Player | null
  function ownerOf(g, hero) { return g.players.filter(function (p) { return p.heroes && p.heroes.indexOf(hero) >= 0; })[0] || null; }
  // A team belongs to whoever owns one of its heroes (the crossroads teams are named after their hero).
  function teamOwners(story, g, s, team) {
    var heroes = [];
    if (story.heroes && story.heroes[team]) heroes.push(team);
    Object.keys(s.assign || {}).forEach(function (k) { if (s.assign[k] === team && story.heroes && story.heroes[k]) heroes.push(k); });
    return heroes.map(function (h) { return ownerOf(g, h); }).filter(Boolean);
  }
  // Intent: check(Story, Game, Player, State, Choice) -> {ok, why} | null = null when the choice is not about heroes
  function heroGate(story, g, p, s, c) {
    if (!multiHero(story) || g.players.length < 2) return null;
    if (c.sys === "lead" && c.hero) {
      var o = ownerOf(g, c.hero);
      return o && o.id !== p.id ? { ok: false, why: M.nameOf(story, c.hero) + " est joué par " + o.name + "." } : null;
    }
    var team = c.fx && c.fx.team;
    if (team) {
      var os = teamOwners(story, g, s, team);
      if (os.length && !os.some(function (x) { return x.id === p.id; })) return { ok: false, why: "C'est le chemin de " + os[0].name + "." };
    }
    return null;
  }

  // ------------------------------------------------------------------ world choices and roles
  // `monde: key`: the first player decides for all (one option, the same for everybody).
  // `role: key`: each option goes to one player only, first come first served (one takes the horses, the other the
  // armour); a player who has taken one option of a role cannot take another.
  function optionOf(c) { return c.option || c.label; }
  function decisionKey(c) { return c.monde ? c.monde : c.role ? "role:" + c.role + ":" + optionOf(c) : null; }
  function roleGate(g, p, c) {
    if (!c.role) return null;
    var mine = "role:" + c.role + ":", d = g.decisions[decisionKey(c)];
    if (d && d.pid !== p.id) return { ok: false, why: "C'est " + d.by + " qui s'en charge." };
    var other = Object.keys(g.decisions).filter(function (k) { return k.indexOf(mine) === 0 && g.decisions[k].pid === p.id && k !== decisionKey(c); })[0];
    if (other) return { ok: false, why: "Tu as déjà choisi : « " + g.decisions[other].label + " »." };
    return null;
  }
  // Intent: gate(Game, Choice) -> {ok, why, decided} | null
  function worldGate(g, c) {
    if (!c.monde) return null;
    var d = g.decisions[c.monde];
    if (!d) return null;
    if (d.option === optionOf(c)) return { ok: true, decided: d };
    return { ok: false, why: d.by + " a déjà tranché : « " + d.label + " ».", decided: d };
  }
  // Intent: decide(Game, Player, Choice) -> Decision ! writes(Game.decisions) unless already decided
  function decide(g, p, c, at) {
    var key = decisionKey(c);
    if (!key || g.decisions[key]) return null;
    var d = { key: key, option: optionOf(c), label: c.label, by: p.name, pid: p.id, at: at || Date.now() };
    g.decisions[key] = d;
    return d;
  }

  // ------------------------------------------------------------------ the view of one player
  function actIndex(story, act) { return (story.acts || []).map(function (a) { return a.id; }).indexOf(act); }
  // Intent: rendezvous(Story, Player) -> Key | null = the rendezvous this player stands on: a passage marked
  // `charniere`, or the first passage he reads in an act the players have not all entered yet
  function rendezvousOf(story, p) {
    var s = p.s, ps = story.passages[s.node];
    if (!ps) return null;
    if (ps.charniere) return "passage:" + s.node;
    if (ps.act && actIndex(story, ps.act) > (p.actOk || 0)) return "acte:" + ps.act;
    return null;
  }
  // Intent: reached(Story, Player, Key) -> Bool
  function reached(story, p, key) {
    var s = p.s, i = key.indexOf(":"), kind = key.slice(0, i), v = key.slice(i + 1);
    if (!s) return false;
    if (p.wait && p.wait.kind === WAIT.END) return true;
    if (kind === "acte") return actIndex(story, s.lastAct) >= actIndex(story, v);
    return !!(s.seen && s.seen[v]);
  }
  // Intent: compute(Story, Game, PlayerId) -> View = the engine's view, with the others' heroes and the world
  // choices closed, and `wait` when this player has to wait for the others.
  function view(story, g, pid) {
    var p = player(g, pid), s = p.s, v = M.view(story, s);
    v.choices = v.choices.map(function (c) {
      var hg = heroGate(story, g, p, s, c), wg = worldGate(g, c), rg = roleGate(g, p, c), out = Object.assign({}, c);
      if (hg && !hg.ok) { out.ok = false; out.why = hg.why; }
      if (rg && !rg.ok) { out.ok = false; out.why = rg.why; }
      if (wg) {
        if (!wg.ok) { out.ok = false; out.why = wg.why; }
        else { out.decidedBy = wg.decided.by; if (!out.ok && !(hg && !hg.ok)) { out.ok = true; out.why = ""; } }
      }
      return out;
    });
    v.wait = null;
    if (g.players.length < 2) return v;
    if (v.kind === "end") { v.wait = { kind: WAIT.END, text: "Ton histoire est finie. Les autres continuent." }; return v; }
    var rdv = rendezvousOf(story, p);
    if (rdv && !g.released[rdv]) {
      var missing = g.players.filter(function (o) { return o.id !== p.id && !reached(story, o, rdv); }).map(function (o) { return o.name; });
      v.wait = { kind: WAIT.RDV, key: rdv, missing: missing, text: rdv.indexOf("acte:") === 0 ? "Un nouvel acte commence : on s'y retrouve tous avant d'aller plus loin." : "Charnière de l'histoire : on s'y retrouve tous avant d'aller plus loin." };
      return v;
    }
    if (!v.choices.some(function (c) { return c.ok && !c.restart; })) v.wait = { kind: WAIT.BLOCKED, text: "Tes héros attendent que les autres avancent." };
    return v;
  }
  // Intent: refresh(Story, Game) -> () ! writes(Player.wait) for every player
  function refreshWaits(story, g) {
    g.players.forEach(function (p) {
      if (p.s) p.s.allies = g.players.filter(function (o) { return o !== p && o.s; }).map(function (o) { return o.s.name || o.name; });
    });
    g.players.forEach(function (p) {
      if (!p.s) { p.wait = null; p.since = 0; return; }
      var w = view(story, g, p.id).wait;
      if (w && !p.wait) p.since = Date.now() + g.players.indexOf(p) * 1e-3;
      if (!w) p.since = 0;
      p.wait = w ? { kind: w.kind, key: w.key || null } : null;
    });
  }

  // ------------------------------------------------------------------ playing
  function choiceKey(c) { return JSON.stringify(["label", "sys", "foe", "hero", "tech", "on", "item", "order", "comp", "route", "dest", "passage"].map(function (k) { return c[k] == null ? null : c[k]; })); }
  // Intent: choose(Story, Game, PlayerId, Choice) -> Decision | null ! writes(Player.s, Game)
  function choose(story, g, pid, c) {
    var p = player(g, pid), v = view(story, g, pid);
    var mine = v.choices.filter(function (x) { return choiceKey(x) === choiceKey(c); })[0] || c;
    if (v.wait || !mine.ok) throw new Error("Ce choix est fermé : " + (v.wait ? v.wait.text : mine.why));
    var d = decide(g, p, mine);
    M.choose(story, p.s, mine);
    refreshWaits(story, g);
    return d;
  }
  // Intent: ready(Game) -> Bool = every player waits (or has finished): time to sync
  function allWaiting(g) { return g.players.length > 1 && g.players.every(function (p) { return !!p.s && !!p.wait; }); }

  // ------------------------------------------------------------------ merging
  // Intent: park(Story, State) -> Shared = the state without what is the player's own position; the lead's sheet
  // goes back among the heroes, as when another hero takes the lead
  function normalize(story, s) {
    var n = clone(s);
    POSITION_KEYS.forEach(function (k) { delete n[k]; });
    if (multiHero(story) && s.lead) {
      n.heroes = n.heroes || {}; var o = {};
      SHEET_KEYS.forEach(function (k) { o[k] = clone(s[k]); delete n[k]; });
      n.heroes[s.lead] = o; n.cpv = n.cpv || {}; n.cpv[s.lead] = s.pv; delete n.pv;
    }
    return n;
  }
  // Intent: unpark(Story, Shared, State, Hero) -> State = the shared state seen by this player, his lead on top
  function denormalize(story, shared, own, lead) {
    var s = clone(shared);
    POSITION_KEYS.forEach(function (k) { if (own[k] !== undefined) s[k] = clone(own[k]); });
    lead = lead || own.lead;
    if (multiHero(story) && lead && s.heroes && s.heroes[lead]) {
      var n = s.heroes[lead];
      SHEET_KEYS.forEach(function (k) { s[k] = n[k]; });
      s.fatigue = s.fatigue || 0; s.arrows = s.arrows || 0;
      s.pv = s.cpv && s.cpv[lead] != null ? s.cpv[lead] : M.pvMax(s);
      delete s.heroes[lead]; if (s.cpv) delete s.cpv[lead];
      s.lead = lead;
      if (s.met) s.met[lead] = "party";
    }
    return s;
  }
  var GONE = { gone: true };
  function at(o, k) { return o && Object.prototype.hasOwnProperty.call(o, k) ? o[k] : GONE; }
  function isObj(x) { return x && typeof x === "object" && !Array.isArray(x) && x !== GONE; }
  // Intent: merge(Value, [Value]) -> Value = three-way: base, then each version in order of arrival
  function merge3(base, versions) {
    var changed = versions.filter(function (v) { return !same(v, base); });
    if (!changed.length) return base;
    if (changed.length === 1) return changed[0];
    if (isObj(base) && changed.every(isObj)) {
      var out = {}, keys = {};
      Object.keys(base).forEach(function (k) { keys[k] = 1; });
      changed.forEach(function (v) { Object.keys(v).forEach(function (k) { keys[k] = 1; }); });
      Object.keys(keys).forEach(function (k) {
        var r = merge3(at(base, k), changed.map(function (v) { return at(v, k); }));
        if (r !== GONE) out[k] = r;
      });
      return out;
    }
    if (typeof base === "number" && changed.every(function (v) { return typeof v === "number"; })) {
      return changed.reduce(function (acc, v) { return acc + (v - base); }, base);
    }
    if (base === GONE && changed.every(function (v) { return typeof v === "number"; })) return changed.reduce(function (a, v) { return a + v; }, 0);
    if (Array.isArray(base) && changed.every(Array.isArray)) {
      // keep what nobody removed, add what anybody added
      var removed = {}; changed.forEach(function (v) { base.forEach(function (x) { if (!v.some(function (y) { return same(x, y); })) removed[JSON.stringify(x)] = 1; }); });
      var res = base.filter(function (x) { return !removed[JSON.stringify(x)]; });
      changed.forEach(function (v) { v.forEach(function (x) { var cb = base.filter(function (y) { return same(x, y); }).length, cv = v.filter(function (y) { return same(x, y); }).length, cr = res.filter(function (y) { return same(x, y); }).length; for (var i = cr; i < cv && cv > cb; i++) res.push(clone(x)); }); });
      return res;
    }
    return changed[0];   // first arrived, first served
  }
  // Intent: sync(Story, Game) -> Report ! writes(Game, every Player.s)
  function sync(story, g) {
    var order = g.players.slice().sort(function (a, b) { return (a.since || 0) - (b.since || 0); });
    var report = { round: g.round + 1, released: [] };
    if (multiHero(story)) {
      var merged = merge3(g.base, order.map(function (p) { return normalize(story, p.s); }));
      g.base = merged;
      g.players.forEach(function (p) { p.s = denormalize(story, merged, p.s); });
    } else {
      var flags = {};
      order.forEach(function (p) { Object.keys(p.s.flags || {}).forEach(function (f) { if (f.indexOf(WORLD_FLAG) === 0 && !(f in flags)) flags[f] = p.s.flags[f]; }); });
      g.players.forEach(function (p) { Object.keys(flags).forEach(function (f) { p.s.flags[f] = flags[f]; }); });
    }
    // release every rendezvous that everybody has reached
    var keys = {};
    g.players.forEach(function (p) { if (p.wait && p.wait.key) keys[p.wait.key] = 1; });
    Object.keys(keys).forEach(function (k) {
      if (!g.players.every(function (p) { return reached(story, p, k); })) return;
      report.released.push(k);
      if (k.indexOf("acte:") === 0) { var ai = actIndex(story, k.slice(5)); g.players.forEach(function (p) { p.actOk = Math.max(p.actOk || 0, ai); }); }
      else g.released[k] = true;
    });
    g.round++;
    g.players.forEach(function (p) { p.s.events = []; p.round = g.round; });
    refreshWaits(story, g);
    report.stuck = allWaiting(g) && !g.players.every(function (p) { return p.wait.kind === WAIT.END; });
    report.over = g.players.every(function (p) { return p.wait && p.wait.kind === WAIT.END; });
    return report;
  }
  // Intent: next(Game, PlayerId?) -> Player | null = on one device, whose turn comes after this one
  function nextPlayer(g, pid) {
    var i = g.players.map(function (p) { return p.id; }).indexOf(pid), n = g.players.length;
    for (var k = 1; k <= n; k++) { var p = g.players[(i + k + n) % n]; if (!p.wait) return p; }
    return null;
  }
  // Intent: share(Story, [PlayerName]) -> {PlayerName: [Hero]} = heroes dealt round the table, in story order
  function deal(story, n) {
    var out = []; for (var i = 0; i < n; i++) out.push([]);
    Object.keys(story.heroes || {}).forEach(function (h, i) { out[i % n].push(h); });
    return out;
  }

  var API = { create: create, view: view, choose: choose, decide: decide, allWaiting: allWaiting, sync: sync, refreshWaits: refreshWaits,
    nextPlayer: nextPlayer, deal: deal, normalize: normalize, denormalize: denormalize, merge3: merge3, ownerOf: ownerOf, player: player,
    rendezvousOf: rendezvousOf, decisionKey: decisionKey, actIndex: actIndex, reached: reached, multiHero: multiHero, WAIT: WAIT, optionOf: optionOf };
  if (typeof module !== "undefined" && module.exports) module.exports = API; else root.Multi = API;
})(typeof self !== "undefined" ? self : this);
