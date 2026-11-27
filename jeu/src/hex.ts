// Hex grid, axial coordinates (q, r), pointy-top cells (Clément, 27/11: hexagonal cells, as in the RMU game).
// Reference: the usual axial / cube conversions (redblobgames' notes), written here from scratch.

export interface Hex { q: number; r: number }

export const DIRS: Hex[] = [
  { q: 1, r: 0 }, { q: 1, r: -1 }, { q: 0, r: -1 }, { q: -1, r: 0 }, { q: -1, r: 1 }, { q: 0, r: 1 },
];

export const key = (h: Hex): string => h.q + "," + h.r;
export const unkey = (k: string): Hex => { const [q, r] = k.split(",").map(Number); return { q, r }; };
export const add = (a: Hex, b: Hex): Hex => ({ q: a.q + b.q, r: a.r + b.r });
export const eq = (a: Hex, b: Hex): boolean => a.q === b.q && a.r === b.r;
export const neighbours = (h: Hex): Hex[] => DIRS.map((d) => add(h, d));

export function distance(a: Hex, b: Hex): number {
  const dq = a.q - b.q, dr = a.r - b.r;
  return (Math.abs(dq) + Math.abs(dr) + Math.abs(dq + dr)) / 2;
}

// The direction index (0-5) from a toward b, by the nearest of the six directions.
export function dirTo(a: Hex, b: Hex): number {
  const p = toPixel(a, 1), t = toPixel(b, 1);
  const ang = Math.atan2(-(t.y - p.y), t.x - p.x); // screen y goes down
  let best = 0, bestD = 9;
  for (let i = 0; i < 6; i++) {
    const da = Math.abs(((ang - (i * Math.PI) / 3 + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
    if (da < bestD) { bestD = da; best = i; }
  }
  return best;
}

// Where an attacker stands for a defender who faces `facing`: 0 front, 1 flank, 2 back (RMU: flank and rear attacks).
export function side(defender: Hex, facing: number, attacker: Hex): 0 | 1 | 2 {
  const d = dirTo(defender, attacker), diff = Math.min((d - facing + 6) % 6, (facing - d + 6) % 6);
  return diff <= 1 ? 0 : diff === 2 ? 1 : 2;
}

export function toPixel(h: Hex, size: number): { x: number; y: number } {
  return { x: size * Math.sqrt(3) * (h.q + h.r / 2), y: size * 1.5 * h.r };
}

export function fromPixel(x: number, y: number, size: number): Hex {
  const q = ((Math.sqrt(3) / 3) * x - (1 / 3) * y) / size, r = ((2 / 3) * y) / size;
  return round(q, r);
}

function round(qf: number, rf: number): Hex {
  const sf = -qf - rf;
  let q = Math.round(qf), r = Math.round(rf);
  const s = Math.round(sf);
  const dq = Math.abs(q - qf), dr = Math.abs(r - rf), ds = Math.abs(s - sf);
  if (dq > dr && dq > ds) q = -r - s; else if (dr > ds) r = -q - s;
  return { q: q + 0, r: r + 0 };
}

export function line(a: Hex, b: Hex): Hex[] {
  const n = distance(a, b), out: Hex[] = [];
  for (let i = 0; i <= n; i++) {
    const t = n === 0 ? 0 : i / n;
    out.push(round(a.q + (b.q - a.q) * t + 1e-6, a.r + (b.r - a.r) * t + 1e-6));
  }
  return out;
}

export function ring(c: Hex, radius: number): Hex[] {
  if (radius === 0) return [c];
  const out: Hex[] = [];
  let h = add(c, { q: DIRS[4].q * radius, r: DIRS[4].r * radius });
  for (let i = 0; i < 6; i++) for (let j = 0; j < radius; j++) { out.push(h); h = add(h, DIRS[i]); }
  return out;
}

export function disc(c: Hex, radius: number): Hex[] {
  const out: Hex[] = [];
  for (let q = -radius; q <= radius; q++)
    for (let r = Math.max(-radius, -q - radius); r <= Math.min(radius, -q + radius); r++) out.push({ q: c.q + q, r: c.r + r });
  return out;
}

// A* over the cells `free` accepts; the goal itself may be refused by `free` (walking up to a door or a person).
export function path(from: Hex, to: Hex, free: (h: Hex) => boolean, maxLen = 200): Hex[] | null {
  const start = key(from), goal = key(to);
  const open: { k: string; f: number }[] = [{ k: start, f: 0 }];
  const g: Record<string, number> = { [start]: 0 }, prev: Record<string, string> = {};
  while (open.length) {
    open.sort((a, b) => a.f - b.f);
    const cur = open.shift()!;
    if (cur.k === goal) break;
    const ch = unkey(cur.k);
    if (g[cur.k] >= maxLen) continue;
    for (const n of neighbours(ch)) {
      const nk = key(n);
      if (nk !== goal && !free(n)) continue;
      const ng = g[cur.k] + 1;
      if (g[nk] === undefined || ng < g[nk]) { g[nk] = ng; prev[nk] = cur.k; open.push({ k: nk, f: ng + distance(n, to) }); }
    }
  }
  if (g[goal] === undefined) return null;
  const out: Hex[] = [];
  for (let k = goal; k !== start; k = prev[k]) out.unshift(unkey(k));
  return out;
}
