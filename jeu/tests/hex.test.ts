import { describe, it, expect } from "vitest";
import { distance, neighbours, side, dirTo, path, line, fromPixel, toPixel, key } from "../src/hex";
import { buildPlace, passable } from "../src/lieu";

describe("hex", () => {
  it("counts steps between cells", () => {
    expect(distance({ q: 0, r: 0 }, { q: 3, r: -1 })).toBe(3);
    expect(neighbours({ q: 0, r: 0 }).every((n) => distance(n, { q: 0, r: 0 }) === 1)).toBe(true);
  });
  it("finds a cell back from its pixel", () => {
    for (const h of [{ q: 2, r: -3 }, { q: -4, r: 1 }, { q: 0, r: 5 }]) { const p = toPixel(h, 30); expect(fromPixel(p.x, p.y, 30)).toEqual(h); }
  });
  it("tells front, flank and back", () => {
    const d = { q: 0, r: 0 }, facing = dirTo(d, { q: 1, r: 0 });
    expect(side(d, facing, { q: 1, r: 0 })).toBe(0);
    expect(side(d, facing, { q: 0, r: 1 })).toBe(0);
    expect(side(d, facing, { q: -1, r: 1 })).toBe(1);
    expect(side(d, facing, { q: -1, r: 0 })).toBe(2);
  });
  it("walks around a wall", () => {
    const wall = new Set(["1,0", "1,-1", "0,1"]);
    const p = path({ q: 0, r: 0 }, { q: 2, r: 0 }, (h) => !wall.has(key(h)))!;
    expect(p[p.length - 1]).toEqual({ q: 2, r: 0 });
    expect(p.some((h) => wall.has(key(h)))).toBe(false);
    expect(line({ q: 0, r: 0 }, { q: 3, r: 0 }).length).toBe(4);
  });
});

describe("lieu", () => {
  it("draws every spot of a hub, each door reachable from the middle", () => {
    const spots = ["La Lanterne éteinte, l'auberge", "La forge de Durn", "Les trois bornes", "Le lavoir couvert", "La chapelle de bois", "La ruelle des maisons", "La bergerie"].map((l, i) => ({ label: l, to: "p" + i }))
      .concat([{ label: "Monter au château", to: "travel:chateau", travel: true } as any]);
    for (const amb of ["village", "foret", "chateau", "eau", "souterrain", "neige"]) {
      const P = buildPlace("essai-" + amb, amb, spots);
      expect(P.spots.length).toBe(spots.length);
      for (const s of P.spots) expect(path(P.start, s.door, (h) => passable(P, h)), amb + " " + s.label).not.toBeNull();
    }
  });
});
