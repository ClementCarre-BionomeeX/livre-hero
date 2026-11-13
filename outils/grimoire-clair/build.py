"""Grimoire Clair: Atkinson Hyperlegible's letter shapes (made to be told apart) dressed as a book face:
bracketed serifs on stem ends, beaks on arms, a little more air between letters. OFL 1.1 derivative."""
import sys, math
from fontTools.ttLib import TTFont
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.pointInsidePen import PointInsidePen
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.cu2quPen import Cu2QuPen
import pathops

SRC, OUT, STYLE = sys.argv[1], sys.argv[2], sys.argv[3]
f = TTFont(SRC)
gs = f.getGlyphSet()
glyf = f['glyf']; hmtx = f['hmtx']
bold = 'Bold' in STYLE
slant = math.tan(math.radians(-f['post'].italicAngle))
XH, CAP, ASC = 496, 668, 668
DESC = (-161, -173, -159, -170, -175, -165, -160)
STEM = (70, 160) if bold else (55, 140)
SERIF = 62 if bold else 56      # how far a serif reaches past the stem
THICK = 38 if bold else 30      # its thickness at the tip
BRACKET = 36                    # the curve that joins it to the stem
TRACK = 14                      # extra side bearing on each side

def sh(x, y):  # italic: serifs lean with the stems
    return (x + y * slant, y)

def segments(rec):
    """the outline as contours of on-curve points, each with whether the edge from it to the next is a straight line"""
    cons, cur = [], None
    for op, a in rec.value:
        if op == 'moveTo': cur = [[a[0], True]]; cons.append(cur)
        elif op == 'lineTo': cur.append([a[0], True])
        elif op in ('qCurveTo', 'curveTo'):
            cur[-1][1] = False; cur.append([a[-1], True])
        elif op in ('closePath', 'endPath'):
            if cur and len(cur) > 1 and cur[-1][0] == cur[0][0]: cur.pop()
    return cons

def unshear(p):
    return (p[0] - p[1] * slant, p[1])

def inside(gname, x, y):
    pen = PointInsidePen(gs, sh(x, y)); gs[gname].draw(pen); return pen.getResult()

def foot(x, y, side, up):
    """a bracketed serif on one side of a stem end at (x, y); side -1 left, +1 right; up: the stem rises from y"""
    d = 1 if up else -1
    tip = x + side * SERIF
    pts = [(x - side * 4, y), (tip, y), (tip, y + d * THICK)]
    # bracket: a quadratic from the tip's thickness into the stem
    p = pathops.Path()
    p.moveTo(*sh(*pts[0])); p.lineTo(*sh(*pts[1])); p.lineTo(*sh(*pts[2]))
    p.quadTo(*sh(x, y + d * THICK), *sh(x, y + d * (THICK + BRACKET)))
    p.lineTo(*sh(x - side * 4, y + d * (THICK + BRACKET))); p.close()
    return p

def head(x, y):
    """the humanist head serif: a wedge on the left of a stem top, sloping down to the left"""
    p = pathops.Path()
    tip = x - SERIF
    p.moveTo(*sh(x + 4, y)); p.lineTo(*sh(tip, y - 14)); p.lineTo(*sh(tip, y - 14 - THICK + 4))
    p.quadTo(*sh(x, y - 14 - THICK + 4), *sh(x, y - 14 - THICK - BRACKET)); p.lineTo(*sh(x + 4, y - 14 - THICK - BRACKET)); p.close()
    return p

def slab(xl, xr, y, up):
    d = 1 if up else -1
    reach = SERIF * 0.7
    p = pathops.Path()
    p.moveTo(*sh(xl - reach, y)); p.lineTo(*sh(xr + reach, y)); p.lineTo(*sh(xr + reach, y + d * THICK * 0.85))
    p.lineTo(*sh(xl - reach, y + d * THICK * 0.85)); p.close()
    if not up: p.reverse() if hasattr(p, 'reverse') else None
    return p

def beak(x, y, down):
    """a beak on the end of a horizontal arm (E, F, L, T, Z): a short drop at its outer end"""
    d = -1 if down else 1
    p = pathops.Path()
    p.moveTo(*sh(x, y)); p.lineTo(*sh(x, y + d * (THICK + 26))); p.lineTo(*sh(x - 14, y + d * (THICK + 26)))
    p.quadTo(*sh(x - 14, y), *sh(x - 14 - 40, y)); p.close()
    return p

def near(a, b, tol=3): return abs(a - b) <= tol
def vertical(p, q): return abs(p[0] - q[0]) <= 2 and abs(p[1] - q[1]) > 20

SKIP = set('I J one bar brokenbar'.split())  # I already carries slabs; 1 keeps its flag clean
added = {}
for g in f.getGlyphOrder():
    gl = glyf[g]
    if gl.isComposite() or gl.numberOfContours <= 0 or g in SKIP or g.startswith('.'): continue
    rec = RecordingPen(); gs[g].draw(rec)
    pieces = []
    for con in segments(rec):
        n = len(con)
        P = [unshear(c[0]) for c in con]
        for i in range(n):
            if not con[i][1]: continue
            a, b = P[i], P[(i + 1) % n]
            prev, nxt = P[i - 1], P[(i + 2) % n]
            # horizontal stem ends
            if near(a[1], b[1], 1):
                w = abs(a[0] - b[0])
                if not (STEM[0] <= w <= STEM[1]): continue
                y = a[1]; xl, xr = min(a[0], b[0]), max(a[0], b[0])
                above = inside(g, (xl + xr) / 2, y + 6)
                below = inside(g, (xl + xr) / 2, y - 6)
                if above == below: continue
                # which neighbour edge is on which side
                ends = {a[0]: prev, b[0]: nxt} if con[i - 1][1] else {b[0]: nxt}
                if not con[(i + 1) % n][1]: ends.pop(b[0], None)
                left_v = xl in ends and vertical((xl, y), ends[xl])
                right_v = xr in ends and vertical((xr, y), ends[xr])
                def slanted(x):
                    if x not in ends: return False
                    q = ends[x]; return abs(q[1] - y) > 40 and abs(q[0] - x) > 8
                diag = slanted(xl) and slanted(xr)
                if diag:  # a diagonal stroke ends here (v w x y k A K M N V W X Y): one flat slab across its end
                    pieces.append(slab(xl, xr, y, above)); continue
                if above and (near(y, 0) or y in DESC or near(y, -12, 1)):  # feet on the baseline and in descenders
                    if near(y, -12, 1): continue
                    if left_v: pieces.append(foot(xl, y, -1, True))
                    if right_v: pieces.append(foot(xr, y, 1, True))
                elif below and (near(y, XH, 2) or near(y, ASC, 2) or near(y, CAP, 2)):
                    capital = g[:1].isupper() and near(y, CAP, 2)
                    if capital:
                        if left_v: pieces.append(foot(xl, y, -1, False))
                        if right_v: pieces.append(foot(xr, y, 1, False))
                    elif diag:
                        pieces.append(foot(xl, y, -1, False)); pieces.append(foot(xr, y, 1, False))
                    elif left_v:
                        pieces.append(head(xl, y))
            # vertical arm ends (E F L T Z): a beak at the outer end
            elif g in ('E', 'F', 'L', 'T', 'Z') and abs(a[0] - b[0]) <= 1 and 50 <= abs(a[1] - b[1]) <= 110:
                x = a[0]
                if inside(g, x - 6, (a[1] + b[1]) / 2) and not inside(g, x + 6, (a[1] + b[1]) / 2):
                    top, bot = max(a[1], b[1]), min(a[1], b[1])
                    if near(top, CAP, 2): pieces.append(beak(x, top, True))
                    elif near(bot, 0, 2): pieces.append(beak(x, bot, False))
    if not pieces: continue
    path = pathops.Path(); gs[g].draw(path.getPen())
    for pc in pieces: path = pathops.op(path, pc, pathops.PathOp.UNION)
    tp = TTGlyphPen(gs); path.draw(Cu2QuPen(tp, 1.0, reverse_direction=True))
    added[g] = tp.glyph()

for g, new in added.items():
    glyf[g] = new
# a little more air: every outline moves right by TRACK and every spacing glyph gets 2*TRACK wider;
# composites follow their components, mark anchors move with the outlines.
for g in f.getGlyphOrder():
    w, lsb = hmtx[g]
    gl = glyf[g]
    if not gl.isComposite() and gl.numberOfContours > 0:
        gl.coordinates.translate((TRACK, 0))
    gl.recalcBounds(glyf)
    xmin = getattr(gl, 'xMin', lsb) if gl.numberOfContours else lsb
    hmtx[g] = (w + 2 * TRACK if w else 0, xmin)
seen = set()
def walk(o):
    if id(o) in seen or o is None: return
    seen.add(id(o))
    if type(o).__name__ == 'Anchor': o.XCoordinate += TRACK; return
    if isinstance(o, (list, tuple)):
        for x in o: walk(x)
    elif hasattr(o, '__dict__'):
        for k, v in vars(o).items():
            if k.startswith('_') or isinstance(v, (int, float, str, bytes)): continue
            walk(v)
if 'GPOS' in f: walk(f['GPOS'].table)
# names (the Reserved Font Name rule: a derivative must not use the original names)
FAM = 'Grimoire Clair'
name = f['name']
style = STYLE
for rec in list(name.names):
    if rec.nameID in (1, 3, 4, 6, 16, 17, 21, 22): name.removeNames(nameID=rec.nameID)
ps = 'GrimoireClair-' + style.replace(' ', '')
for pid, eid, lid in ((3, 1, 0x409), (1, 0, 0)):
    name.setName(FAM, 1, pid, eid, lid); name.setName(style, 2, pid, eid, lid)
    name.setName('1.000;' + ps, 3, pid, eid, lid); name.setName(FAM + ' ' + style if style != 'Regular' else FAM, 4, pid, eid, lid)
    name.setName(ps, 6, pid, eid, lid)
    name.setName('Copyright 2020 Braille Institute of America, Inc. (Atkinson Hyperlegible); 2026 Grimoire Clair, derivative for the livre-hero project.', 0, pid, eid, lid)
    name.setName('Grimoire Clair is a modified version of Atkinson Hyperlegible: bracketed book serifs, beaks and wider spacing added.', 10, pid, eid, lid)
    name.setName('This Font Software is licensed under the SIL Open Font License, Version 1.1.', 13, pid, eid, lid)
    name.setName('https://openfontlicense.org', 14, pid, eid, lid)
# no hinting: the original instructions do not know the new serifs (they vanished at small sizes)
from fontTools.ttLib.tables import ttProgram
for t in ('fpgm', 'prep', 'cvt ', 'hdmx', 'LTSH', 'VDMX', 'DSIG'):
    if t in f: del f[t]
for g in f.getGlyphOrder():
    gl = glyf[g]
    if hasattr(gl, 'program'):
        gl.program = ttProgram.Program(); gl.program.fromBytecode(b'')
if 'gasp' in f: f['gasp'].gaspRange = {0xFFFF: 0x000A}
m = f['maxp']
for k in ('maxZones', 'maxTwilightPoints', 'maxStorage', 'maxFunctionDefs', 'maxInstructionDefs', 'maxStackElements', 'maxSizeOfInstructions'):
    setattr(m, k, 1 if k == 'maxZones' else 0)
f.save(OUT)
print(OUT, len(added), 'glyphs dressed')
