// The map on screen (Phaser): the place's hexes, what stands on them, the party and the foes. It draws and passes taps
// on; the game (main.ts) decides what a tap means.
import Phaser from "phaser";
import { Hex, key, toPixel, fromPixel } from "./hex";
import { Place, Cell } from "./lieu";

export const SIZE = 30;

const GROUND_COL: Record<string, number> = { herbe: 0x7da35a, chemin: 0xc8ad7f, pave: 0xa49a8c, sol: 0x8f877a, terre: 0x9c8461, eau: 0x4f86b3, neige: 0xe9eef2, sable: 0xd9c38f };
const ROOF: Record<string, number> = { auberge: 0xa5432f, forge: 0x4b4744, chapelle: 0xdedad0, bergerie: 0xc9a54b, maison: 0x8c5a3c, tour: 0x6e6a66, lieu: 0x8c5a3c };

export interface Token { id: string; at: Hex; colour: number; letter: string; ring?: number; hp?: number; down?: boolean; name: string }

export class MapScene extends Phaser.Scene {
  place: Place | null = null;
  ground!: Phaser.GameObjects.Graphics;
  marks!: Phaser.GameObjects.Graphics;
  labels: Phaser.GameObjects.Text[] = [];
  tokens = new Map<string, Phaser.GameObjects.Container>();
  onTap: (h: Hex) => void = () => {};
  ready: () => void = () => {};
  private dragFrom: { x: number; y: number; sx: number; sy: number } | null = null;
  private dragged = false;

  constructor() { super("map"); }

  create() {
    this.cameras.main.setBackgroundColor("#1b1a17");
    this.ground = this.add.graphics();
    this.marks = this.add.graphics();
    this.marks.setDepth(5);
    // a tap selects a cell; a drag moves the view (tablet first)
    this.input.on("pointerdown", (p: Phaser.Input.Pointer) => { this.dragFrom = { x: p.x, y: p.y, sx: this.cameras.main.scrollX, sy: this.cameras.main.scrollY }; this.dragged = false; });
    this.input.on("pointermove", (p: Phaser.Input.Pointer) => {
      if (!this.dragFrom || !p.isDown) return;
      const dx = p.x - this.dragFrom.x, dy = p.y - this.dragFrom.y, z = this.cameras.main.zoom;
      if (Math.abs(dx) + Math.abs(dy) > 12) { this.dragged = true; this.cameras.main.stopFollow(); this.cameras.main.setScroll(this.dragFrom.sx - dx / z, this.dragFrom.sy - dy / z); }
    });
    this.input.on("pointerup", (p: Phaser.Input.Pointer) => {
      const was = this.dragged; this.dragFrom = null; this.dragged = false;
      if (was) return;
      const w = this.cameras.main.getWorldPoint(p.x, p.y);
      this.onTap(fromPixel(w.x, w.y, SIZE));
    });
    this.input.on("wheel", (_p: any, _o: any, _dx: number, dy: number) => { this.zoomBy(dy > 0 ? 0.9 : 1.1); });
    this.scale.on("resize", () => this.fitZoom());
    this.ready();
  }

  zoomBy(f: number) { const c = this.cameras.main; c.setZoom(Phaser.Math.Clamp(c.zoom * f, 0.35, 2.2)); }
  fitZoom() {
    const w = this.scale.width, c = this.cameras.main;
    c.setZoom(Phaser.Math.Clamp(w / (15 * SIZE * Math.sqrt(3)), 0.5, 1.4));
  }

  hexPoints(h: Hex, shrink = 0): Phaser.Geom.Point[] {
    const p = toPixel(h, SIZE), out: Phaser.Geom.Point[] = [];
    for (let i = 0; i < 6; i++) { const a = (Math.PI / 180) * (60 * i - 30); out.push(new Phaser.Geom.Point(p.x + (SIZE - shrink) * Math.cos(a), p.y + (SIZE - shrink) * Math.sin(a))); }
    return out;
  }

  drawPlace(place: Place) {
    this.place = place;
    const g = this.ground; g.clear();
    this.labels.forEach((l) => l.destroy()); this.labels = [];
    for (const [k, c] of place.cells) {
      const [q, r] = k.split(",").map(Number), h = { q, r };
      const base = GROUND_COL[c.g] || 0x7da35a, n = ((q * 7349 + r * 1931) & 15) - 8;
      g.fillStyle(shade(base, n * 2), 1); g.fillPoints(this.hexPoints(h), true);
      g.lineStyle(1, 0x000000, 0.12); g.strokePoints(this.hexPoints(h), true);
      this.drawThing(g, h, c, place);
    }
    // the spots' names and the roads out
    for (const s of place.spots) {
      const p = toPixel(s.travel ? s.door : s.centre, SIZE);
      const name = s.label.split(/[,·(]/)[0].trim();
      const t = this.add.text(p.x, p.y - SIZE * (s.travel ? 1.1 : 1.6), (s.travel ? "➜ " : "") + name, { fontFamily: "Literata, Georgia, serif", fontSize: "15px", color: "#fff8e6", backgroundColor: "rgba(27,26,23,0.72)", padding: { x: 6, y: 3 }, align: "center", wordWrap: { width: 190 } });
      t.setOrigin(0.5, 1).setDepth(20); this.labels.push(t);
      if (!s.travel) { g.lineStyle(3, 0xf2c75c, 0.9); g.strokePoints(this.hexPoints(s.door, 5), true); }
      else { g.fillStyle(0xf2c75c, 0.35); g.fillPoints(this.hexPoints(s.door, 3), true); }
    }
    const R = place.radius * SIZE * 2;
    this.cameras.main.setBounds(-R, -R, R * 2, R * 2);
    this.fitZoom();
  }

  drawThing(g: Phaser.GameObjects.Graphics, h: Hex, c: Cell, place: Place) {
    const p = toPixel(h, SIZE);
    switch (c.t) {
      case "arbre":
        g.fillStyle(0x5b3b22, 1); g.fillRect(p.x - 3, p.y + 4, 6, 10);
        g.fillStyle(0x2f5e2c, 1); g.fillCircle(p.x, p.y - 2, 15); g.fillStyle(0x3f7a36, 1); g.fillCircle(p.x - 5, p.y - 6, 8); break;
      case "sapin":
        g.fillStyle(0x23452b, 1); g.fillTriangle(p.x, p.y - 20, p.x - 14, p.y + 10, p.x + 14, p.y + 10); g.fillStyle(0x5b3b22, 1); g.fillRect(p.x - 2, p.y + 10, 4, 6); break;
      case "buisson": g.fillStyle(0x4c7d3b, 1); g.fillCircle(p.x - 5, p.y + 3, 8); g.fillCircle(p.x + 6, p.y + 2, 7); break;
      case "rocher": g.fillStyle(0x77736c, 1); g.fillEllipse(p.x, p.y + 2, 30, 20); g.fillStyle(0x908b82, 1); g.fillEllipse(p.x - 4, p.y - 2, 14, 9); break;
      case "mur": g.fillStyle(0x56524c, 1); g.fillPoints(this.hexPoints(h), true); g.lineStyle(2, 0x3c3934, 1); g.strokePoints(this.hexPoints(h, 4), true); break;
      case "menhir": g.fillStyle(0x6c6a66, 1); g.fillRoundedRect(p.x - 7, p.y - 22, 14, 32, 5); g.fillStyle(0x86837d, 1); g.fillRoundedRect(p.x - 4, p.y - 19, 5, 24, 3); break;
      case "puits": g.fillStyle(0x6c6a66, 1); g.fillCircle(p.x, p.y, 12); g.fillStyle(0x2d4d66, 1); g.fillCircle(p.x, p.y, 7); break;
      case "batiment": {
        const sp = c.spot != null ? place.spots[c.spot] : null;
        g.fillStyle(0x6b5a45, 1); g.fillPoints(this.hexPoints(h, 1), true);
        g.fillStyle(ROOF[sp ? sp.kind : "maison"] || 0x8c5a3c, 1); g.fillPoints(this.hexPoints(h, 6), true);
        g.lineStyle(2, 0x000000, 0.25); g.lineBetween(p.x - SIZE * 0.6, p.y, p.x + SIZE * 0.6, p.y);
        break;
      }
    }
  }

  // Cells to light: reachable moves, targets, the path.
  highlight(cells: { h: Hex; colour: number; alpha?: number; ring?: boolean }[]) {
    const g = this.marks; g.clear();
    for (const c of cells) {
      if (c.ring) { g.lineStyle(3, c.colour, c.alpha ?? 0.9); g.strokePoints(this.hexPoints(c.h, 3), true); }
      else { g.fillStyle(c.colour, c.alpha ?? 0.28); g.fillPoints(this.hexPoints(c.h, 2), true); }
    }
  }

  setTokens(list: Token[], animate = true) {
    const seen = new Set<string>();
    for (const t of list) {
      seen.add(t.id);
      const p = toPixel(t.at, SIZE);
      let c = this.tokens.get(t.id);
      if (!c) {
        c = this.add.container(p.x, p.y).setDepth(10);
        const shadow = this.add.ellipse(0, 14, 34, 12, 0x000000, 0.3);
        const body = this.add.circle(0, 0, 17, t.colour).setStrokeStyle(3, t.ring ?? 0x1b1a17);
        const letter = this.add.text(0, 0, t.letter, { fontFamily: "Literata, Georgia, serif", fontSize: "17px", color: "#fff", fontStyle: "bold" }).setOrigin(0.5);
        const bar = this.add.rectangle(-16, 22, 32, 5, 0x000000, 0.6).setOrigin(0, 0.5);
        const hp = this.add.rectangle(-16, 22, 32, 5, 0x6fd16f).setOrigin(0, 0.5);
        c.add([shadow, body, letter, bar, hp]);
        c.setData("hp", hp).setData("bar", bar).setData("body", body);
        this.tokens.set(t.id, c);
      } else if (animate && (Math.abs(c.x - p.x) > 1 || Math.abs(c.y - p.y) > 1)) this.tweens.add({ targets: c, x: p.x, y: p.y, duration: 130 });
      else c.setPosition(p.x, p.y);
      const hp = c.getData("hp") as Phaser.GameObjects.Rectangle, bar = c.getData("bar") as Phaser.GameObjects.Rectangle;
      const show = t.hp != null && t.hp < 1;
      hp.setVisible(show); bar.setVisible(show);
      if (t.hp != null) { hp.width = Math.max(0, 32 * t.hp); hp.fillColor = t.hp > 0.5 ? 0x6fd16f : t.hp > 0.25 ? 0xe0b23a : 0xd9534f; }
      c.setAlpha(t.down ? 0.35 : 1);
      (c.getData("body") as Phaser.GameObjects.Arc).setStrokeStyle(3, t.ring ?? 0x1b1a17);
    }
    for (const [id, c] of this.tokens) if (!seen.has(id)) { c.destroy(); this.tokens.delete(id); }
  }

  showLabels(on: boolean) { this.labels.forEach((l) => l.setVisible(on)); }
  follow(id: string) { const c = this.tokens.get(id); if (c) this.cameras.main.startFollow(c, true, 0.15, 0.15); }
  floatText(at: Hex, text: string, colour: string) {
    const p = toPixel(at, SIZE);
    const t = this.add.text(p.x, p.y - 26, text, { fontFamily: "Literata, Georgia, serif", fontSize: "18px", color: colour, fontStyle: "bold", stroke: "#000", strokeThickness: 4 }).setOrigin(0.5).setDepth(30);
    this.tweens.add({ targets: t, y: p.y - 60, alpha: 0, duration: 1100, onComplete: () => t.destroy() });
  }
}

function shade(c: number, d: number): number {
  const r = Math.max(0, Math.min(255, ((c >> 16) & 255) + d)), g = Math.max(0, Math.min(255, ((c >> 8) & 255) + d)), b = Math.max(0, Math.min(255, (c & 255) + d));
  return (r << 16) | (g << 8) | b;
}
export { key };
