// A place of the book as a hex map. The book gives each place an ambiance (village, forêt, château…) and, on its
// hub page, the spots one can go to (« La forge de Durn », « Les trois bornes »…) and the roads out. The game draws
// the place from these alone, the same every time (seeded by the place's id): every place of the book is playable
// without a hand-made map. A hand-made map may replace a generated one later (Tiled), with the same spots.
import { Hex, key, disc, ring, line, distance, neighbours, eq, fromPixel } from "./hex";

export type Ground = "herbe" | "chemin" | "pave" | "sol" | "terre" | "eau" | "neige" | "sable";
export type Thing = "arbre" | "sapin" | "buisson" | "rocher" | "mur" | "batiment" | "menhir" | "puits" | "barriere" | null;

export interface Cell { g: Ground; t: Thing; spot?: number; exit?: number }
export interface Spot { id: number; label: string; to: string; kind: string; door: Hex; centre: Hex; travel?: boolean }
export interface Place { id: string; ambiance: string; radius: number; cells: Map<string, Cell>; spots: Spot[]; start: Hex }

export const BLOCKS: Record<string, boolean> = { arbre: true, sapin: true, rocher: true, mur: true, batiment: true, menhir: true, puits: true, barriere: true };
export function passable(p: Place, h: Hex): boolean {
  const c = p.cells.get(key(h));
  return !!c && c.g !== "eau" && !(c.t && BLOCKS[c.t]);
}

function rng(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; };
}

// What kind of spot a label names, for its drawing.
export function kindOf(label: string): string {
  const l = label.toLowerCase();
  const kinds: [RegExp, string][] = [
    [/auberge|taverne|lanterne|cabaret/, "auberge"], [/forge/, "forge"], [/chapelle|temple|sanctuaire|église|autel/, "chapelle"],
    [/lavoir|ruisseau|puits|fontaine|source/, "eau"], [/bergerie|étable|enclos|troupeau/, "bergerie"], [/borne|pierre|menhir|cairn|stèle/, "pierres"],
    [/tour|donjon|rempart|mur|porte|poterne|herse/, "tour"], [/salle|cour|cuisine|chambre|cave|cellier|grenier|maison|ruelle|logis|hutte|cabane/, "maison"],
    [/bois|forêt|hêtre|sapin|clairière|arbre/, "bois"], [/camp|feu|tente/, "camp"],
  ];
  for (const [re, k] of kinds) if (re.test(l)) return k;
  return "lieu";
}

const GROUND: Record<string, Ground> = { village: "herbe", foret: "herbe", chateau: "terre", eau: "herbe", ville: "pave", temple: "sol", neige: "neige", souterrain: "sol", montagne: "terre" };

export interface SpotIn { label: string; to: string; travel?: boolean }

export function buildPlace(id: string, ambiance: string, spotsIn: SpotIn[]): Place {
  const R = 11, rand = rng(id), centre = { q: 0, r: 0 };
  const cells = new Map<string, Cell>();
  const g0: Ground = GROUND[ambiance] || "herbe";
  for (const h of disc(centre, R)) cells.set(key(h), { g: g0, t: null });
  const set = (h: Hex, c: Partial<Cell>) => { const k = key(h), o = cells.get(k); if (o) cells.set(k, { ...o, ...c }); };

  // The ambiance's look: water on one side for « eau », a wall around a château, trees thick in a forest.
  if (ambiance === "eau") for (const h of disc(centre, R)) if (h.q + h.r * 0.5 > 6) set(h, { g: "eau" });
  if (ambiance === "chateau") {
    for (const h of ring(centre, 8)) set(h, { t: "mur", g: "sol" });
    for (const h of disc(centre, 7)) set(h, { g: "sol" });
  }
  if (ambiance === "souterrain") for (const h of disc(centre, R)) if (distance(h, centre) > 8) set(h, { t: "rocher" });

  // Spots: the hub's places around the middle, roads out on the edge.
  const inner = spotsIn.filter((s) => !s.travel), outer = spotsIn.filter((s) => s.travel);
  const spots: Spot[] = [];
  const startAng = rand() * Math.PI * 2;
  inner.forEach((s, i) => {
    const radius = inner.length > 8 ? (i % 2 ? 6 : 4) : 5;
    const ang = startAng + (i / Math.max(1, inner.length)) * Math.PI * 2;
    const c = nearestHex(Math.cos(ang) * radius, Math.sin(ang) * radius);
    const kind = kindOf(s.label);
    // the door faces the middle of the place
    const towards = line(c, centre)[1] || c;
    spots.push({ id: spots.length, label: s.label, to: s.to, kind, door: towards, centre: c });
  });
  outer.forEach((s, i) => {
    const ang = startAng + Math.PI + ((i + 0.5) / Math.max(1, outer.length) - 0.5) * Math.PI * 0.9;
    const edge = nearestHex(Math.cos(ang) * R, Math.sin(ang) * R);
    const e = cells.has(key(edge)) ? edge : nearestOn(cells, edge);
    spots.push({ id: spots.length, label: s.label, to: s.to, kind: "route", door: e, centre: e, travel: true });
  });

  // Paths from the middle to each door; then the spots' footprints.
  // (a path through the château's wall makes a gate in it)
  for (const s of spots) for (const h of line(centre, s.door)) { const c = cells.get(key(h)); if (c && (!c.t || c.t === "mur" || c.t === "rocher")) set(h, { t: null, g: ambiance === "chateau" || ambiance === "ville" ? "pave" : "chemin" }); }
  for (const s of spots) {
    if (s.travel) { set(s.door, { exit: s.id, t: null, g: "chemin" }); continue; }
    const foot = footprint(s.kind);
    if (foot === "batiment") { set(s.centre, { t: "batiment", spot: s.id }); for (const n of neighbours(s.centre)) if (!eq(n, s.door) && distance(n, centre) > 1) set(n, { t: "batiment", spot: s.id }); }
    else if (foot === "eau") { set(s.centre, { g: "eau", spot: s.id }); for (const n of neighbours(s.centre)) if (!eq(n, s.door)) set(n, { g: "eau", spot: s.id }); }
    else if (foot === "pierres") { set(s.centre, { t: "menhir", spot: s.id }); }
    else if (foot === "bois") { for (const n of neighbours(s.centre)) if (!eq(n, s.door)) set(n, { t: "arbre", spot: s.id }); set(s.centre, { t: "arbre", spot: s.id }); }
    else set(s.centre, { t: "puits", spot: s.id });
    set(s.door, { t: null, g: "chemin" });
  }
  // Scattered trees and stones, kept off the paths and away from the doors.
  const near = (h: Hex) => spots.some((s) => distance(h, s.door) <= 1 || distance(h, s.centre) <= 1);
  const density = ambiance === "foret" ? 0.35 : ambiance === "village" || ambiance === "eau" ? 0.12 : ambiance === "montagne" || ambiance === "neige" ? 0.1 : 0.05;
  for (const h of disc(centre, R)) {
    const c = cells.get(key(h))!;
    if (c.t || c.g !== g0 || distance(h, centre) < 3 || near(h)) continue;
    const x = rand();
    if (x < density) set(h, { t: ambiance === "neige" || ambiance === "montagne" ? "sapin" : rand() < 0.75 ? "arbre" : "buisson" });
    else if (x < density + 0.03) set(h, { t: "rocher" });
  }
  // The middle stays open: the party arrives there.
  for (const h of disc(centre, 1)) set(h, { t: null });
  return { id, ambiance, radius: R, cells, spots, start: centre };
}

function footprint(kind: string): string {
  if (kind === "eau") return "eau";
  if (kind === "pierres") return "pierres";
  if (kind === "bois") return "bois";
  if (kind === "lieu" || kind === "camp") return "objet";
  return "batiment";
}

// The cell at (x, y) counted in cells from the middle (a cell is √3 wide at size 1).
function nearestHex(x: number, y: number): Hex { return fromPixel(x * Math.sqrt(3), y * Math.sqrt(3), 1); }
function nearestOn(cells: Map<string, Cell>, h: Hex): Hex {
  let best: Hex = { q: 0, r: 0 }, bd = 1e9;
  for (const k of cells.keys()) { const [q, r] = k.split(",").map(Number); const d = distance({ q, r }, h); if (d < bd) { bd = d; best = { q, r }; } }
  return best;
}
