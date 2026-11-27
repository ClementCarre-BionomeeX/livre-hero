// Fights on the hex map, with the book's numbers (livre-hero's engine): an attack is an open-ended d100 plus the
// attacker's bonus minus the defence, it hits at 101 (RMU absolute maneuver), damage is the weapon's plus one per 10
// over 101, and 50 over is a critical (double damage). The hex map adds what the book cannot: where everyone stands.
// Game choices (not RMU rules, noted in REGLES.md): a turn is a move of up to MOVE cells then one action; flank +15,
// back +30 (RMU flank and rear); a bow shoots up to SHOT_RANGE cells with a clear line; initiative is rolled once.
import { Hex, key, distance, neighbours, dirTo, side, line, path } from "./hex";
import { M, K } from "./moteur";
import { Place, passable } from "./lieu";

export const MOVE = 4, SHOT_RANGE = 10, SPELL_RANGE = 7, FLANK = 15, BACK = 30;

export interface Unit {
  id: string;            // "hero", a companion's id, or a foe's key
  side: "party" | "foe";
  name: string;
  at: Hex;
  facing: number;
  init: number;
  defending: boolean;
  moved: number;
}

export interface Fight {
  units: Unit[];
  order: string[];
  turn: number;          // index in order
  round: number;
  log: string[];
  over: null | "win" | "lose" | "flee" | "talk";
}

const foeOf = (s: any, id: string) => (s.combat?.foes || []).find((f: any) => f.key === id);
export function alive(story: any, s: any, u: Unit): boolean {
  if (u.side === "foe") { const f = foeOf(s, u.id); return !!f && !f.down; }
  return K.alive(story, s, u.id);
}
export function pvOf(story: any, s: any, u: Unit): [number, number] {
  if (u.side === "foe") { const f = foeOf(s, u.id); return f ? [Math.max(0, f.pv), f.pvMax] : [0, 1]; }
  if (u.id === "hero") return [Math.max(0, s.pv), M.pvMax(s)];
  return [M.cpv(story, s, u.id), M.cpvMax(story, s, u.id)];
}

export function occupied(f: Fight, story: any, s: any, h: Hex, except?: string): Unit | undefined {
  return f.units.find((u) => u.id !== except && u.at.q === h.q && u.at.r === h.r && alive(story, s, u));
}

// Intent: the fight begins where the party stands: the party around the hero, the foes a few cells ahead.
export function startFight(story: any, s: any, place: Place, heroAt: Hex, facing: number): Fight {
  const f: Fight = { units: [], order: [], turn: 0, round: 1, log: [], over: null };
  const free = (h: Hex) => passable(place, h) && !f.units.some((u) => u.at.q === h.q && u.at.r === h.r);
  const near = (c: Hex, n: number) => {
    const out: Hex[] = [], seen = new Set<string>([key(c)]), q = [c];
    while (q.length && out.length < n) { const h = q.shift()!; if (free(h)) out.push(h); for (const x of neighbours(h)) if (!seen.has(key(x)) && place.cells.has(key(x))) { seen.add(key(x)); q.push(x); } }
    return out;
  };
  const members = K.members(story, s).filter((m: any) => K.alive(story, s, m.who));
  near(heroAt, members.length).forEach((h, i) => {
    const m = members[i];
    f.units.push({ id: m.who, side: "party", name: m.who === "hero" ? s.name : M.nameOf(story, m.who), at: h, facing, init: 0, defending: false, moved: 0 });
  });
  // the foes: 4 to 6 steps away, reachable on foot, ahead of the party if there is room there
  const steps = new Map<string, number>([[key(heroAt), 0]]), q = [heroAt];
  while (q.length) {
    const h = q.shift()!, d = steps.get(key(h))!;
    if (d >= 7) continue;
    for (const x of neighbours(h)) if (!steps.has(key(x)) && passable(place, x)) { steps.set(key(x), d + 1); q.push(x); }
  }
  const ring = [...steps.entries()].filter(([, d]) => d >= 4 && d <= 6).map(([k]) => { const [qq, rr] = k.split(",").map(Number); return { q: qq, r: rr }; });
  const ahead = ring.sort((a, b) => Math.abs(dirTo(heroAt, a) - facing) % 6 - Math.abs(dirTo(heroAt, b) - facing) % 6)[0] || place.start;
  const foes = s.combat.foes.filter((x: any) => !x.down);
  near(ahead, foes.length).forEach((h, i) => {
    const x = foes[i];
    f.units.push({ id: x.key, side: "foe", name: x.name, at: h, facing: (facing + 3) % 6, init: 0, defending: false, moved: 0 });
  });
  for (const u of f.units) {
    const r = K.openD100().total;
    u.init = r + (u.side === "foe" ? foeOf(s, u.id).att / 2 : K.domOf(story, s, u.id, "combat") / 2);
  }
  f.order = f.units.slice().sort((a, b) => b.init - a.init).map((u) => u.id);
  f.log.push((s.combat.title || "Combat") + " : " + f.order.map((id) => unit(f, id).name).join(", ") + ".");
  return f;
}

export const unit = (f: Fight, id: string) => f.units.find((u) => u.id === id)!;
export const current = (f: Fight) => unit(f, f.order[f.turn]);

// What a blow is worth from where the attacker stands (flank, back).
export function positionMod(a: Unit, d: Unit): number {
  const sd = side(d.at, d.facing, a.at);
  return sd === 2 ? BACK : sd === 1 ? FLANK : 0;
}

export function lineClear(place: Place, f: Fight, story: any, s: any, a: Hex, b: Hex): boolean {
  const l = line(a, b).slice(1, -1);
  return l.every((h) => { const c = place.cells.get(key(h)); return c && !(c.t && c.t !== "buisson" && c.t !== "barriere") && !occupied(f, story, s, h); });
}

export function canShoot(story: any, s: any, u: Unit): boolean {
  if (u.id === "hero") { const rw = K.ranged(story, s); return !!rw && (!rw.ammo || s.arrows > 0); }
  if (u.side === "party") return K.domOf(story, s, u.id, "magie") >= K.COMP_CASTER_FROM && !K.compOf(story, s, u.id).pacifist;
  const x = foeOf(s, u.id); return !!x && !!x.ranged;
}

// The chance a party member's blow lands (shown on the button before the roll).
export function chanceOf(story: any, s: any, a: Unit, d: Unit, shot: boolean): number {
  const x = foeOf(s, d.id); if (!x) return 0;
  let b = K.domOf(story, s, a.id, "combat") + K.diffOf(s).roll + positionMod(a, d) - (x.def - (x.open ? 30 : 0));
  if (a.id === "hero") {
    const w = shot ? K.ranged(story, s) : K.meleeWeapon(story, s);
    b += (w && w.att) || 0;
    if (!shot && w && s.arch === "guerrier") b += K.MASTER_HIT;
  } else b += ((K.compOf(story, s, a.id).weapon || {}).att) || 0;
  return Math.max(1, Math.min(99, 101 - (101 - b))) ;
}

function face(u: Unit, to: Hex) { if (u.at.q !== to.q || u.at.r !== to.r) u.facing = dirTo(u.at, to); }

// Intent: a step along a path, for any unit; it counts against the turn's move.
export function step(u: Unit, h: Hex) { face(u, h); u.at = h; u.moved++; }

function events(s: any, f: Fight, from: number) { for (const e of s.events.slice(from)) f.log.push(e.text); }

// The hero or a companion strikes a foe (melee or shot). The hero's blow is the book's own (heroStrike).
export function partyStrike(story: any, s: any, f: Fight, a: Unit, d: Unit, shot: boolean) {
  const x = foeOf(s, d.id), n = s.events.length, mod = positionMod(a, d);
  face(a, d.at);
  if (a.id === "hero") {
    const opts: any = { weapon: shot ? K.ranged(story, s) : K.meleeWeapon(story, s), mod };
    if (shot) { opts.label = "Tir"; const rw = K.ranged(story, s); if (rw && rw.ammo) { s.arrows--; s.combat.arrowsUsed++; } }
    if (mod) opts.label = (opts.label || "Attaque") + (mod === BACK ? " dans le dos" : " de flanc");
    K.heroStrike(story, s, x, opts);
  } else {
    const cd = K.compOf(story, s, a.id), r = K.openD100();
    const magic = shot, w = cd.weapon || {};
    const total = r.total + (magic ? K.domOf(story, s, a.id, "magie") : K.domOf(story, s, a.id, "combat") + (w.att || 0)) + mod - (x.def - (x.open ? 30 : 0));
    x.open = false;
    if (total >= M.SUCCESS) {
      let dmg = (magic ? K.COMP_BOLT_DMG : w.dmg || K.COMPANION_DMG) + Math.floor((total - M.SUCCESS) / 10);
      if (total - M.SUCCESS >= K.CRIT_OVER) dmg *= 2;
      s.events.push({ text: a.name + (magic ? " lance sa magie sur " : " frappe ") + x.name + " (" + total + ") : " + dmg + " dégâts", cls: "good" });
      x.pv -= dmg; if (x.pv <= 0) { x.down = true; s.events.push({ text: x.name + " tombe.", cls: "good" }); }
    } else s.events.push({ text: a.name + " manque " + x.name + " (" + total + ")", cls: "" });
  }
  events(s, f, n);
}

// A foe strikes a member of the party: the book's foesAct, one foe at a time, plus the position.
export function foeStrike(story: any, s: any, f: Fight, a: Unit, d: Unit) {
  const x = foeOf(s, a.id), n = s.events.length;
  face(a, d.at);
  s.combat.defending = d.id === "hero" && d.defending;
  const def = K.defenceOf(story, s, d.id) + (d.id !== "hero" && d.defending ? K.DEFEND_BONUS : 0);
  const r = K.openD100(), total = r.total + x.att + K.diffOf(s).foeHit + positionMod(a, d) - def;
  const whom = d.id === "hero" ? "te" : d.name;
  if (total >= M.SUCCESS) {
    let dmg = x.dmg + Math.floor((total - M.SUCCESS) / 10);
    const crit = total - M.SUCCESS >= K.CRIT_OVER; if (crit) dmg *= 2;
    if (d.id === "hero") { s.pv -= dmg; s.events.push({ text: x.name + " te frappe (" + total + ") : −" + dmg + " PV" + (crit ? ", coup critique" : ""), cls: "bad" }); }
    else { s.cpv[d.id] = Math.max(0, M.cpv(story, s, d.id) - dmg); s.events.push({ text: x.name + " frappe " + whom + " (" + total + ") : −" + dmg + " PV", cls: "bad" }); if (!s.cpv[d.id]) s.events.push({ text: d.name + " tombe à terre.", cls: "bad" }); }
  } else s.events.push({ text: x.name + (d.id === "hero" ? " te manque" : " manque " + whom) + " (" + total + ")", cls: "" });
  events(s, f, n);
}

// Intent: the AI's turn for a foe or a companion: close in by the shortest way, then strike the nearest.
export function aiTurn(story: any, s: any, place: Place, f: Fight, u: Unit, animate: (u: Unit) => void) {
  const enemies = f.units.filter((o) => o.side !== u.side && alive(story, s, o));
  if (!enemies.length) return;
  // a companion who heals: the worst wounded under 80 %
  if (u.side === "party" && u.id !== "hero") {
    const cd = K.compOf(story, s, u.id);
    if (cd.healer) {
      const friends = f.units.filter((o) => o.side === "party" && alive(story, s, o));
      const worst = friends.map((o) => ({ o, q: pvOf(story, s, o)[0] / pvOf(story, s, o)[1] })).sort((a, b) => a.q - b.q)[0];
      if (worst && worst.q < 0.8 && distance(u.at, worst.o.at) <= SPELL_RANGE) {
        const r = K.openD100(), th = r.total + K.domOf(story, s, u.id, "magie") + 10;
        if (th >= M.SUCCESS) {
          const more = 5 + Math.floor((th - M.SUCCESS) / 10), w = worst.o;
          if (w.id === "hero") s.pv = Math.min(M.pvMax(s), s.pv + more); else s.cpv[w.id] = Math.min(M.cpvMax(story, s, w.id), M.cpv(story, s, w.id) + more);
          f.log.push(u.name + " soigne " + (w.id === "hero" ? "toi" : w.name) + " : +" + more + " PV");
        } else f.log.push(u.name + " prie, sans effet.");
        return;
      }
    }
  }
  const shoots = canShoot(story, s, u);
  const target = enemies.sort((a, b) => distance(u.at, a.at) - distance(u.at, b.at))[0];
  const inReach = (h: Hex) => distance(h, target.at) === 1 || (shoots && distance(h, target.at) <= (u.side === "foe" ? SHOT_RANGE : SPELL_RANGE) && lineClear(place, f, story, s, h, target.at));
  if (!inReach(u.at)) {
    const p = path(u.at, target.at, (h) => passable(place, h) && !occupied(f, story, s, h, u.id)) || [];
    for (const h of p.slice(0, MOVE)) { if (h.q === target.at.q && h.r === target.at.r) break; if (occupied(f, story, s, h, u.id)) break; step(u, h); animate(u); if (inReach(u.at)) break; }
  }
  if (!inReach(u.at)) return;
  const shot = distance(u.at, target.at) > 1;
  if (u.side === "foe") foeStrike(story, s, f, u, target); else partyStrike(story, s, f, u, target, shot);
}

export function checkEnd(story: any, s: any, f: Fight) {
  if (!f.units.some((u) => u.side === "foe" && alive(story, s, u))) f.over = "win";
  else if (s.pv <= 0) f.over = "lose";
}

// Next living unit; a new round when the order wraps.
export function nextTurn(story: any, s: any, f: Fight) {
  for (let i = 0; i < f.order.length; i++) {
    f.turn++;
    if (f.turn >= f.order.length) { f.turn = 0; f.round++; s.combat.round = f.round; }
    const u = current(f);
    if (alive(story, s, u)) { u.moved = 0; u.defending = false; return; }
  }
}

// The book ends the fight (its win / lose / flee branches, the companions who get up, the tale).
export function finish(story: any, s: any, f: Fight) { if (f.over) K.endCombat(story, s, f.over); }

export function tryFlee(story: any, s: any, f: Fight): boolean {
  const c = s.combat, r = M.rollTest(story, s, { dom: (c.flee && c.flee.dom) || "discretion", diff: c.flee && c.flee.diff != null ? c.flee.diff : K.FLEE_DIFF });
  f.log.push("Fuir · " + r.line + (r.ok ? " → tu t'échappes" : " → raté"));
  if (r.ok) f.over = "flee";
  return r.ok;
}
export function tryTalk(story: any, s: any, f: Fight): boolean {
  const c = s.combat, r = M.rollTest(story, s, { dom: "social", diff: (c.talk && c.talk.diff) || 0 });
  f.log.push("Parlementer · " + r.line + (r.ok ? " → ils baissent les armes" : " → rien à faire"));
  if (r.ok) f.over = "talk";
  return r.ok;
}
