// Le Sceau de Malvoran, the video game: the book's story played on hex maps, ToME-like (Clément, 27/11): every step
// is a turn, a fight starts where you stand. The book's engine runs the story; this file runs the screens.
import Phaser from "phaser";
import "./style.css";
import storyUrl from "../../histoires/malvoran.json?url";
import { M, K } from "./moteur";
import { Hex, key, eq, distance, neighbours, path, dirTo } from "./hex";
import { buildPlace, passable, Place, SpotIn } from "./lieu";
import { MapScene, Token } from "./scene";
import * as C from "./combat";

const SAVE = "malvoran-jeu:partie";
const STEP_MS = 120;

interface Game { story: any; s: any; at: Hex; facing: number; trail: Hex[]; place: Place | null; placeKey: string; fight: C.Fight | null; busy: boolean }
const G: Game = { story: null, s: null, at: { q: 0, r: 0 }, facing: 0, trail: [], place: null, placeKey: "", fight: null, busy: false };
let scene: MapScene;
const $ = (id: string) => document.getElementById(id)!;
const esc = (t: string) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const md = (t: string) => esc(t).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>");
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
// test hooks: a run with ?vite (tests) waits on nothing
const FAST = new URLSearchParams(location.search).has("vite");
const wait = (ms: number) => (FAST ? Promise.resolve() : sleep(ms));

// ------------------------------------------------------------------ start
async function boot() {
  const res = await fetch(storyUrl);
  G.story = await res.json();
  const game = new Phaser.Game({ type: Phaser.AUTO, parent: "carte", backgroundColor: "#1b1a17", scale: { mode: Phaser.Scale.RESIZE, width: window.innerWidth, height: window.innerHeight }, scene: [], render: { antialias: true } });
  scene = new MapScene();
  scene.ready = () => title();
  game.scene.add("map", scene, true);
  scene.onTap = (h) => onTap(h);
  (window as any).jeu = { G, M, choose: (i: number) => chooseIdx(i), tap: (h: Hex) => onTap(h), view: () => M.view(G.story, G.s) };
}

function title() {
  const a = $("accueil"); a.hidden = false;
  const saved = load();
  a.innerHTML = `<div class="boite"><h1>${esc(G.story.title)}</h1><p class="sous">${esc(G.story.subtitle || "")}</p>
    ${saved ? `<button class="grand" id="continuer">Continuer · ${esc(saved.s.name)}, niveau ${M.level(saved.s)}</button>` : ""}
    <button class="grand ${saved ? "second" : ""}" id="nouvelle">Nouvelle partie</button>
    <p class="sous" style="margin-top:28px">${G.story.intro.map((t: string) => md(t)).join("<br><br>")}</p></div>`;
  if (saved) $("continuer").onclick = () => { G.s = saved.s; G.at = saved.at || { q: 0, r: 0 }; G.placeKey = ""; a.hidden = true; show(); };
  $("nouvelle").onclick = () => create();
}

// ------------------------------------------------------------------ the hero
function create() {
  const st = G.story, c: any = { name: "", fem: false, arch: "", past: st.past.map(() => -1) };
  const a = $("accueil");
  const draw = () => {
    a.innerHTML = `<div class="boite"><h1>Ton héros</h1>
      <fieldset><legend>Ton nom</legend><input type="text" id="nom" maxlength="24" value="${esc(c.name)}" placeholder="Colin, Charline…"></fieldset>
      <fieldset><legend>On parle de toi</legend><div class="options">
        <button data-fem="0" class="${!c.fem ? "on" : ""}">au masculin</button><button data-fem="1" class="${c.fem ? "on" : ""}">au féminin</button></div></fieldset>
      <fieldset><legend>Ta classe</legend><div class="options">${Object.entries(M.ARCHS).map(([k, v]: any) => `<button data-arch="${k}" class="${c.arch === k ? "on" : ""}">${esc(v.label)}<small>${esc(v.tip)}</small></button>`).join("")}</div></fieldset>
      ${st.past.map((q: any, qi: number) => `<fieldset><legend>${esc(q.q)}</legend><div class="options ligne">${q.answers.map((ans: any, ai: number) => `<button data-q="${qi}" data-a="${ai}" class="${c.past[qi] === ai ? "on" : ""}">${md(ans.label)}</button>`).join("")}</div></fieldset>`).join("")}
      <button class="grand" id="partir" ${c.name.trim() && c.arch && c.past.every((x: number) => x >= 0) ? "" : "disabled style='opacity:.5'"}>Partir</button>
      <button class="grand second" id="retour">Retour</button></div>`;
    const nom = $("nom") as HTMLInputElement;
    nom.oninput = () => { c.name = nom.value; const ok = c.name.trim() && c.arch && c.past.every((x: number) => x >= 0); ($("partir") as HTMLButtonElement).disabled = !ok; $("partir").style.opacity = ok ? "1" : ".5"; };
    a.querySelectorAll<HTMLButtonElement>("[data-fem]").forEach((b) => (b.onclick = () => { c.fem = b.dataset.fem === "1"; draw(); }));
    a.querySelectorAll<HTMLButtonElement>("[data-arch]").forEach((b) => (b.onclick = () => { c.arch = b.dataset.arch; draw(); }));
    a.querySelectorAll<HTMLButtonElement>("[data-q]").forEach((b) => (b.onclick = () => { c.past[+b.dataset.q!] = +b.dataset.a!; draw(); }));
    $("retour").onclick = () => title();
    $("partir").onclick = () => {
      const s = M.freshState(st, { toutJouer: true, difficulty: "aventurier" });
      s.name = c.name.trim(); s.arch = c.arch; s.fem = c.fem; s.events = [];
      st.past.forEach((q: any, qi: number) => M.apply(st, s, q.answers[c.past[qi]].fx));
      M.start(st, s);
      G.s = s; G.at = { q: 0, r: 0 }; G.placeKey = ""; G.fight = null;
      a.hidden = true; show();
    };
  };
  draw();
}

// ------------------------------------------------------------------ saving (each change of page)
function save() { try { localStorage.setItem(SAVE, JSON.stringify({ s: G.s, at: G.at, v: 1 })); } catch { /* private window: the game goes on unsaved */ } }
function load(): any { try { const x = localStorage.getItem(SAVE); return x ? JSON.parse(x) : null; } catch { return null; } }

// ------------------------------------------------------------------ what the screen shows now
function isHub(): boolean { const p = G.story.passages[G.s.node]; return !!(p && p.hub); }

function show() {
  const s = G.s, st = G.story;
  save();
  hud();
  if (s.node === "@combat") { if (!G.fight) beginFight(); drawFight(); return; }
  G.fight = null; $("combat").hidden = true;
  const v = M.view(st, s);
  // The map: the hub's page if we stand on one, else the place's last map stays behind the book.
  if (isHub()) {
    const spots = hubSpots(v);
    const k = s.node + "|" + spots.map((x) => x.to + x.label).join(";");
    if (k !== G.placeKey) {
      const amb = (st.world.places[s.place] || {}).ambiance || "village";
      const fresh = !G.place || G.place.id !== s.node;
      G.place = buildPlace(s.node, amb, spots.map((x) => ({ label: x.label, to: x.to, travel: x.travel })));
      G.placeKey = k;
      scene.drawPlace(G.place);
      if (fresh || !passable(G.place, G.at)) { G.at = G.place.start; G.trail = []; }
    }
    scene.showLabels(true);
    drawParty(false);
    scene.follow("hero");
    $("livre").hidden = true;
    ici(v, spots);
    // The hub's own page, the first time on arrival: it describes the place.
    if (G.s._arrived !== s.node + ":" + s.turn) { G.s._arrived = s.node + ":" + s.turn; book(v, true); }
  } else {
    if (!G.place) { G.place = buildPlace(s.node, (st.world.places[s.place] || {}).ambiance || "village", []); scene.drawPlace(G.place); G.at = G.place.start; G.placeKey = s.node; }
    drawParty(false); scene.follow("hero");
    $("ici").hidden = true;
    book(v, false);
  }
}

interface HubSpot extends SpotIn { idx: number }
// The hub's choices that are places to walk to, and the roads out.
function hubSpots(v: any): HubSpot[] {
  const out: HubSpot[] = [];
  v.choices.forEach((c: any, i: number) => {
    if (!c.ok) return;
    if (c.sys === "travel") out.push({ label: c.label.replace(/ · \d+ étapes?$/, ""), to: "travel:" + c.dest, travel: true, idx: i });
    else if (c.exit && typeof c.to === "string") out.push({ label: c.label, to: c.to, travel: true, idx: i });
    else if (typeof c.to === "string" && !c.sys && !c.who && !c.auto) out.push({ label: c.label, to: c.to, idx: i });
  });
  return out;
}

function ici(v: any, spots: HubSpot[]) {
  const box = $("ici"), used = new Set(spots.map((x) => x.idx));
  const rest = v.choices.map((c: any, i: number) => ({ c, i })).filter((x: any) => !used.has(x.i));
  box.hidden = false;
  box.innerHTML = `<h2>${esc(v.title)}</h2><p>Touche un lieu pour y aller.</p>` +
    rest.map((x: any) => `<button data-i="${x.i}" ${x.c.ok ? "" : "disabled"}>${md(x.c.label)}${x.c.chance != null ? ` · ${x.c.chance} %` : ""}</button>`).join("") +
    `<button id="relire">Relire la description</button>`;
  box.querySelectorAll<HTMLButtonElement>("[data-i]").forEach((b) => (b.onclick = () => chooseIdx(+b.dataset.i!)));
  $("relire").onclick = () => book(v, true);
}

// The book's page: text, the rolls just made, the choices (each with its chance when it is a test).
function book(v: any, closable: boolean) {
  const L = $("livre"), s = G.s;
  const rolls = (s.events || []).filter((e: any) => !e.pre && e.text).slice(-8);
  L.hidden = false;
  L.innerHTML = `<div class="page"><h1>${md(v.title || "")}</h1>
    ${rolls.length ? `<div class="jets">${rolls.map((e: any) => `<div>${md(e.text)}</div>`).join("")}</div>` : ""}
    ${(v.reread ? [] : v.text).map((t: string) => `<p>${md(t)}</p>`).join("")}
    <div class="choix">${closable ? `<button id="fermer">Explorer les lieux</button>` : v.choices.map((c: any, i: number) => `<button data-i="${i}" ${c.ok ? "" : "disabled"}><span>${md(c.label)}${!c.ok && c.why ? `<span class="pourquoi">${md(c.why)}</span>` : ""}</span>${c.chance != null ? `<span class="chance">${domName(c.test)} · ${c.chance} %</span>` : ""}</button>`).join("")}</div></div>`;
  L.querySelectorAll<HTMLButtonElement>("[data-i]").forEach((b) => (b.onclick = () => chooseIdx(+b.dataset.i!)));
  if (closable) $("fermer").onclick = () => { L.hidden = true; };
  (L.querySelector(".page") as HTMLElement).scrollTop = 0;
}
const domName = (t: any) => (t && M.DOMAINS[t.dom]) || "Jet";

function chooseIdx(i: number) {
  const v = M.view(G.story, G.s), c = v.choices[i];
  if (!c || !c.ok) return;
  G.s.events = [];
  M.choose(G.story, G.s, c);
  show();
}

// ------------------------------------------------------------------ the party on the map
function partyIds(): string[] { return K.members(G.story, G.s).map((m: any) => m.who); }
const COLOURS: Record<string, number> = { guerrier: 0x9b3b2a, rodeur: 0x3f6b3a, voleur: 0x4a4a5a, mage: 0x3e4f9a, pretre: 0xc9b26a, barde: 0x8a4a8a };

function drawParty(animate: boolean) {
  const ids = partyIds(), toks: Token[] = [];
  ids.forEach((id, i) => {
    const at = id === "hero" ? G.at : G.trail[i - 1] || G.at;
    toks.push({ id, at, name: id === "hero" ? G.s.name : M.nameOf(G.story, id), colour: id === "hero" ? COLOURS[G.s.arch] || 0x9b3b2a : 0x2f6f8f, letter: (id === "hero" ? G.s.name : M.nameOf(G.story, id)).charAt(0).toUpperCase(), ring: id === "hero" ? 0xf2c75c : 0xe8e2d6, hp: hpOf(id) });
  });
  scene.setTokens(toks, animate);
}
function hpOf(id: string): number { return id === "hero" ? G.s.pv / M.pvMax(G.s) : M.cpv(G.story, G.s, id) / M.cpvMax(G.story, G.s, id); }

// Walking: one cell per step (a turn, as in ToME); the companions follow in the hero's steps.
async function walk(to: Hex, then?: () => void) {
  if (G.busy || !G.place) return;
  const p = path(G.at, to, (h) => passable(G.place!, h));
  if (!p) return;
  G.busy = true;
  for (const h of p) {
    if (!passable(G.place, h) && !eq(h, to)) break;
    if (!passable(G.place, h)) break;
    G.facing = dirTo(G.at, h);
    G.trail.unshift(G.at); G.trail = G.trail.slice(0, 8);
    G.at = h; drawParty(true);
    await wait(STEP_MS);
  }
  G.busy = false;
  save();
  if (then) then();
}

function onTap(h: Hex) {
  if (G.fight) { fightTap(h); return; }
  if (!G.place || !$("livre").hidden || !isHub()) return;
  const c = G.place.cells.get(key(h));
  if (!c) return;
  // a spot (its building, its door, its road): walk to its door, then go in
  const sid = c.spot != null ? c.spot : c.exit;
  const sp = sid != null ? G.place.spots[sid] : G.place.spots.find((x) => eq(x.door, h));
  if (sp) {
    const v = M.view(G.story, G.s), spots = hubSpots(v), mine = spots.find((x) => x.label === sp.label || x.to === sp.to);
    walk(sp.door, () => { if (mine && eq(G.at, sp.door)) chooseIdx(mine.idx); });
    return;
  }
  if (passable(G.place, h)) walk(h);
}

// ------------------------------------------------------------------ fights
function beginFight() {
  G.fight = C.startFight(G.story, G.s, G.place!, G.at, G.facing);
  $("livre").hidden = true; $("ici").hidden = true;
  runAi();
}

const isPlayer = (u: C.Unit) => u.id === "hero"; // companions play themselves for now (a « mener » option will follow)

function drawFight() {
  const f = G.fight!, st = G.story, s = G.s;
  const toks: Token[] = f.units.map((u) => ({ id: u.id, at: u.at, name: u.name, colour: u.side === "foe" ? 0x7a2a22 : u.id === "hero" ? COLOURS[s.arch] || 0x9b3b2a : 0x2f6f8f,
    letter: u.name.charAt(0).toUpperCase(), ring: u.id === C.current(f).id ? 0xffffff : u.side === "foe" ? 0x2a0f0c : u.id === "hero" ? 0xf2c75c : 0xe8e2d6, hp: C.pvOf(st, s, u)[0] / C.pvOf(st, s, u)[1], down: !C.alive(st, s, u) }));
  scene.setTokens(toks, true);
  scene.showLabels(false);
  scene.follow(C.current(f).id);
  const u = C.current(f), mine = isPlayer(u) && !f.over;
  // what the hero may do: the cells within reach, the foes within a blow or a shot
  const marks: any[] = [];
  if (mine) {
    for (const h of reachable(u)) marks.push({ h, colour: 0xf2c75c, alpha: 0.22 });
    for (const t of targets(u)) marks.push({ h: t.u.at, colour: t.shot ? 0x7fb8e6 : 0xff6a4d, ring: true });
  }
  scene.highlight(marks);
  const bar = $("combat"); bar.hidden = false;
  const c = s.combat || {};
  bar.innerHTML = `<div class="tour">${f.over ? "Combat terminé" : mine ? "À toi · tour " + f.round + (u.moved ? ` · ${C.MOVE - u.moved} pas restants` : "") : "Au tour de " + esc(u.name)}</div>
    <div class="log">${f.log.slice(-6).map((l) => `<div>${md(l)}</div>`).join("")}</div>
    <div class="boutons">${mine ? `<button id="garde">🛡 En garde</button><button id="fin">⏭ Fin du tour</button>${c.flee ? `<button id="fuir">🏃 Fuir</button>` : ""}${c.talk ? `<button id="parler">🗣 Parlementer</button>` : ""}` : ""}${f.over ? `<button id="suite">Continuer</button>` : ""}</div>`;
  const on = (id: string, fn: () => void) => { const b = document.getElementById(id); if (b) b.onclick = fn; };
  on("garde", () => { u.defending = true; f.log.push(s.name + " se met en garde (+" + K.DEFEND_BONUS + " en défense)."); endTurn(); });
  on("fin", () => endTurn());
  on("fuir", () => { C.tryFlee(st, s, f); endTurn(); });
  on("parler", () => { C.tryTalk(st, s, f); endTurn(); });
  on("suite", () => { C.finish(st, s, f); G.fight = null; scene.highlight([]); bar.hidden = true; G.placeKey = ""; show(); });
}

function reachable(u: C.Unit): Hex[] {
  const f = G.fight!, left = C.MOVE - u.moved, out: Hex[] = [], seen = new Map<string, number>([[key(u.at), 0]]), q = [u.at];
  while (q.length) {
    const h = q.shift()!, d = seen.get(key(h))!;
    if (d >= left) continue;
    for (const n of neighbours(h)) {
      if (seen.has(key(n)) || !passable(G.place!, n) || C.occupied(f, G.story, G.s, n)) continue;
      seen.set(key(n), d + 1); out.push(n); q.push(n);
    }
  }
  return out;
}
function targets(u: C.Unit): { u: C.Unit; shot: boolean }[] {
  const f = G.fight!, st = G.story, s = G.s, shoots = C.canShoot(st, s, u);
  return f.units.filter((o) => o.side === "foe" && C.alive(st, s, o)).flatMap((o): { u: C.Unit; shot: boolean }[] => {
    const d = distance(u.at, o.at);
    if (d === 1) return [{ u: o, shot: false }];
    if (shoots && d <= C.SHOT_RANGE && C.lineClear(G.place!, f, st, s, u.at, o.at)) return [{ u: o, shot: true }];
    return [];
  });
}

async function fightTap(h: Hex) {
  const f = G.fight!, u = C.current(f);
  if (G.busy || f.over || !isPlayer(u)) return;
  const t = targets(u).find((x) => eq(x.u.at, h));
  if (t) { C.partyStrike(G.story, G.s, f, u, t.u, t.shot); scene.floatText(t.u.at, C.alive(G.story, G.s, t.u) ? "" : "✕", "#ffd"); endTurn(); return; }
  // a cell out of reach, or a foe too far: go as far as the turn allows, along the way
  const p = (path(u.at, h, (x) => passable(G.place!, x) && !C.occupied(f, G.story, G.s, x)) || []).filter((x) => !C.occupied(f, G.story, G.s, x));
  if (!p.length || u.moved >= C.MOVE) return;
  G.busy = true;
  for (const x of p.slice(0, C.MOVE - u.moved)) { C.step(u, x); drawFight(); await wait(STEP_MS); }
  G.busy = false;
  G.at = u.at; G.facing = u.facing;
  // out of steps and nothing to strike: the turn ends by itself
  if (u.moved >= C.MOVE && !targets(u).length) { endTurn(); return; }
  drawFight();
}

function endTurn() {
  const f = G.fight!;
  C.checkEnd(G.story, G.s, f);
  if (!f.over) C.nextTurn(G.story, G.s, f);
  drawFight();
  runAi();
}

async function runAi() {
  const f = G.fight!; if (!f) return;
  G.busy = true;
  while (!f.over && !isPlayer(C.current(f))) {
    const u = C.current(f);
    drawFight();
    await wait(350);
    C.aiTurn(G.story, G.s, G.place!, f, u, () => { drawFight(); });
    await wait(250);
    C.checkEnd(G.story, G.s, f);
    if (!f.over) C.nextTurn(G.story, G.s, f);
  }
  G.busy = false;
  const hero = f.units.find((x) => x.id === "hero"); if (hero) { G.at = hero.at; G.facing = hero.facing; }
  hud(); drawFight();
}

// ------------------------------------------------------------------ the bar on top and its panes
function hud() {
  const s = G.s, h = $("hud"); h.hidden = false;
  const pv = Math.max(0, s.pv), max = M.pvMax(s);
  h.innerHTML = `<span class="qui">${esc(s.name)} · niv. ${M.level(s)}</span><span class="pv" title="${pv} / ${max} PV"><i style="width:${Math.round((100 * pv) / max)}%"></i></span><span>${pv}/${max}</span><span class="vide"></span>
    <button id="b-fiche" title="Fiche">👤</button><button id="b-sac" title="Sac">🎒</button><button id="b-journal" title="Journal">📜</button><button id="b-zoom" title="Zoom">🔍</button>`;
  $("b-fiche").onclick = () => pane("fiche");
  $("b-sac").onclick = () => pane("sac");
  $("b-journal").onclick = () => pane("journal");
  $("b-zoom").onclick = () => scene.zoomBy(scene.cameras.main.zoom > 1 ? 0.6 : 1.4);
}

function pane(which: string) {
  const V = $("volet"), st = G.story, s = G.s;
  if (!V.hidden && V.dataset.w === which) { V.hidden = true; return; }
  V.dataset.w = which; V.hidden = false;
  let body = "";
  if (which === "fiche") {
    const a = M.ARCHS[s.arch] || {};
    body = `<h2>${esc(s.name)}</h2><p>${esc(a.label || "")} · niveau ${M.level(s)} · ${s.ep.toLocaleString("fr-FR")} EP</p><table>` +
      Object.keys(M.DOMAINS).map((d) => `<tr><td>${M.DOMAINS[d]}</td><td>+${M.bonus(st, s, d)}</td></tr>`).join("") + `<tr><td>Points de vie</td><td>${s.pv} / ${M.pvMax(s)}</td></tr></table>`;
    const comps = partyIds().filter((x) => x !== "hero");
    if (comps.length) body += `<h2 style="margin-top:16px">Compagnons</h2><table>${comps.map((k) => `<tr><td>${esc(M.nameOf(st, k))}</td><td>${M.cpv(st, s, k)} / ${M.cpvMax(st, s, k)} PV · confiance ${s.conf[k] || 0}</td></tr>`).join("")}</table>`;
  } else if (which === "sac") {
    const n: Record<string, number> = {};
    s.items.forEach((id: string) => (n[id] = (n[id] || 0) + 1));
    body = `<h2>Sac</h2><p>${s.gold} sous${s.arrows ? ` · ${s.arrows} flèches` : ""} · ${s.food} jours de vivres</p><table>` + Object.keys(n).map((id) => `<tr><td>${esc(M.item(st, id).name)}</td><td>${n[id] > 1 ? "×" + n[id] : ""}</td></tr>`).join("") + `</table>`;
  } else {
    const qs = M.questsOf(st).filter((q: any) => M.questStarted(s, q) || M.questDone(s, q));
    body = `<h2>Journal</h2>` + (qs.length ? `<table>${qs.map((q: any) => `<tr><td>${esc(q.title || q.id)}</td><td>${esc(M.questState(s, q, st) || "")}</td></tr>`).join("")}</table>` : `<p>Rien encore. Les quêtes s'écrivent ici d'elles-mêmes quand tu les découvres.</p>`);
  }
  V.innerHTML = `<button class="fermer" id="v-fermer">✕</button>` + body;
  $("v-fermer").onclick = () => (V.hidden = true);
}

boot();
