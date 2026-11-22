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
chs = []
for d in root.iter(NS + 'div'):
    if d.get('type') != DIV: continue
    head = d.find(NS + 'head')
    if head is None: continue
    ht = text_of(head, [])
    m = re.match(r'^(Chapitre\s+)?([IVXLC]+|premier|PREMIER|\d+)\b\.?\s*(.*)$', ht)
    if not m: print('saute :', ht[:60]); continue
    paras = []
    for p in d.findall(NS + 'p'):
        notes = []; t = text_of(p, notes)
        if not t: continue
        t = re.sub(r'^[–-]\s*', '— ', t); t = re.sub(r'\s[–]\s', ' — ', t); t = re.sub(r'\s*–\s*', ' — ', t)
        for n in notes:
            n = re.sub(r'\s*\(?Note de l.auteur\.?\)?\s*$', '', n).strip().rstrip('.')
            if n: t = t + ' (*Note de l\'auteur : ' + n[0].lower() + n[1:] + '.*)' if not re.match(r'^[A-Z][a-z]*\s[A-Z]', n) else t + ' (*Note de l\'auteur : ' + n + '.*)'
        paras.append(typo(t))
    chs.append({'n': m.group(2), 'head': m.group(3), 'paras': paras})
json.dump(chs, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
for c in chs: print(c['n'], c['head'][:50], len(c['paras']), sum(len(p.split()) for p in c['paras']))
