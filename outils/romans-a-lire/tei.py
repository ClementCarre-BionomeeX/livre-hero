# tei.py source.xml chapitres.json : export TEI d'« Ebooks libres et gratuits » (dépôt petrul/universal-literature-tei)
# → liste de chapitres et de paragraphes. Un chapitre = un div2 avec <label> (numéro romain) ; l'italique devient *…*.
import json, re, sys, xml.etree.ElementTree as ET
sys.path.insert(0, sys.argv[0].rsplit('/', 1)[0]); from typo import typo
NS = '{http://www.tei-c.org/ns/1.0}'
def text_of(el):
    out = []
    def walk(e):
        tag = e.tag.replace(NS, '')
        if tag in ('anchor', 'ptr', 'figure', 'note'): pass
        elif tag == 'lb': out.append(' ')
        elif tag == 'hi' and 'italic' in (e.get('rend') or ''):
            inner = ''.join(e.itertext()).strip()
            if inner: out.append('*' + inner + '*')
        else:
            if e.text: out.append(e.text)
            for c in e: walk(c)
        if e is not el and e.tail: out.append(e.tail)
    walk(el)
    s = re.sub(r'\s+', ' ', ''.join(out)).strip()
    s = re.sub(r'\*\s*\*', '', s)
    return s
root = ET.parse(sys.argv[1]).getroot()
chs = []
for d in root.iter(NS + 'div'):
    if d.get('type') != 'div2': continue
    head = d.find(NS + 'head'); lab = head.find(NS + 'label') if head is not None else None
    if lab is None: continue
    title = text_of(head)[len(lab.text.strip()):].strip()
    paras = []
    for p in d.findall(NS + 'p'):
        t = text_of(p)
        if not t: continue
        t = re.sub(r'^[–-]\s+', '— ', t); t = re.sub(r'\s[–]\s', ' — ', t)
        paras.append(typo(t))
    chs.append({'n': lab.text.strip(), 'head': title, 'paras': paras})
json.dump(chs, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False)
for c in chs: print(c['n'], c['head'], len(c['paras']), sum(len(p.split()) for p in c['paras']))
