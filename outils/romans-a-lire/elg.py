# elg.py source.xml chapitres.json [div2] : export TEI d'« Ebooks libres et gratuits » (dépôt
# petrul/universal-literature-tei) → chapitres et paragraphes, pour les livres dont les chapitres n'ont pas de <label>
# (Verne, Dumas…). Un chapitre = un div du type donné (div2 par défaut) ; sa tête = numéro, puis titre éventuel.
# L'italique devient *…* ; les notes de bas de page sont remises entre parenthèses à la fin du paragraphe qui les
# appelle (« Note de l'auteur » retiré) ; une image devient « [FIGURE] », que la fiche du livre remplace ; le tiret
# de dialogue « – » devient « — ».
import json, re, sys, xml.etree.ElementTree as ET
sys.path.insert(0, sys.argv[0].rsplit('/', 1)[0]); from typo import typo
NS = '{http://www.tei-c.org/ns/1.0}'
DIV = sys.argv[3] if len(sys.argv) > 3 else 'div2'
def clean(s): return re.sub(r'\s+', ' ', s).strip()
def text_of(el, notes):
    out = []
    def walk(e):
        tag = e.tag.replace(NS, '')
        if tag == 'note':
            notes.append(clean(''.join(e.itertext())))
        elif tag == 'figure': out.append(' [FIGURE] ')
        elif tag in ('anchor', 'ptr'): pass
        elif tag == 'lb': out.append(' ')
        elif tag == 'hi' and 'italic' in (e.get('rend') or ''):
            raw = ''.join(e.itertext()); inner = clean(raw)
            if inner: out.append((' ' if raw[:1].isspace() else '') + '*' + inner + '*' + (' ' if raw[-1:].isspace() else ''))
        else:
            if e.text: out.append(e.text)
            for c in e: walk(c)
        if e is not el and e.tail: out.append(e.tail)
    walk(el)
    s = clean(''.join(out))
    s = re.sub(r'\*\s*\*', '', s).replace('*?*', '?')
    s = re.sub(r'\*\s+([,.)])', r'*\1', s)
    return s
root = ET.parse(sys.argv[1]).getroot()
PART = sys.argv[4] if len(sys.argv) > 4 else None  # avec un type de div de partie : ids « I1 », « II3 »…
ROM = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
def roman(n):
    out = ''
    for v, r in ((50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
chs = []
def chapters(scope, prefix):
    k = 0
    for d in scope.iter(NS + 'div'):
        if d.get('type') != DIV: continue
        head = d.find(NS + 'head')
        if head is None: continue
        ht = text_of(head, [])
        m = re.match(r'^(Chapitre\s+)?([IVXLC][IVXLC ]*|premier|PREMIER|\d+)\b\.?\s*(.*)$', ht)
        if not m: print('saute :', ht[:60]); continue
        k += 1; r = roman(k); num = m.group(2)
        # « I X Les colères » : un numéro coupé d'une espace ; on garde le numéro attendu et on retire ce qui le précède
        mm = re.match(r'^(?:Chapitre\s+)?' + r'\s?'.join(r) + r'\b\.?\s*(.*)$', ht)
        title = mm.group(1) if mm else m.group(3)
        if not mm and num.replace(' ', '') not in ('premier', 'PREMIER'): print('numéro inattendu :', ht[:40], 'au lieu de', r)
        paras = []
        for p in d.findall(NS + 'p'):
            notes = []; t = text_of(p, notes)
            if not t: continue
            t = re.sub(r'^[–-]\s*', '— ', t); t = re.sub(r'\s[–]\s', ' — ', t); t = re.sub(r'\s*–\s*', ' — ', t)
            for n in notes:
                n = re.sub(r'\s*\(?Note de l.auteur\.?\)?\s*$', '', n).strip().rstrip('.')
                if n: t = t + ' (*Note de l\'auteur : ' + (n[0].lower() + n[1:] if not re.match(r'^[A-Z][a-z]*\s[A-Z]', n) else n) + '.*)'
            paras.append(typo(t))
        chs.append({'n': (prefix + str(k)) if prefix is not None else r, 'head': title, 'paras': paras})
if PART:
    pi = 0
    for pd in root.iter(NS + 'div'):
        if pd.get('type') != PART: continue
        if not any(x.get('type') == DIV for x in pd.iter(NS + 'div')): continue
        pi += 1; chapters(pd, roman(pi))
else: chapters(root, None)
json.dump(chs, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
for c in chs: print(c['n'], c['head'][:50], len(c['paras']), sum(len(p.split()) for p in c['paras']))
