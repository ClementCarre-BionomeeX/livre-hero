# jungle_texte.py source.xml chapitres.json : « Le Livre de la jungle » d'après l'export TEI d'Ebooks libres et gratuits
# (traduction Fabulet et d'Humières). elg.py ne convient pas : les sept récits n'ont pas de numéro, et chacun s'ouvre
# sur un poème (une <epigraph> pour le premier, des lignes <p> pour les autres) et finit, après « * * * », sur une
# chanson dont chaque vers est un <p>. Ici : un récit = un chapitre (I à VII, la tête est le titre) ; le titre anglais
# « (Mowgli's Brothers) » est retiré ; le poème d'ouverture devient un seul paragraphe de vers en italique, coupés
# par des retours à la ligne (comme les chansons de « L'Île au trésor »), suivi de sa source après un tiret ; la
# chanson finale garde son titre en paragraphe à part, sa didascalie entre parenthèses en italique, et ses vers en
# un paragraphe par couplet titré (le chant de parade de « Service de la Reine » a un couplet par bête). La chanson
# de Mowgli, en versets longs, garde un paragraphe en italique par verset. Une chanson dans le récit (au moins quatre vers courts de suite) devient aussi un paragraphe de vers. Les notes vont
# entre parenthèses.
import json, re, sys, xml.etree.ElementTree as ET
sys.path.insert(0, sys.argv[0].rsplit('/', 1)[0] + '/..'); from typo import typo
NS = '{http://www.tei-c.org/ns/1.0}'
def clean(s): return re.sub(r'\s+', ' ', s).strip()
def text_of(el, notes, lines=None):
    out = []
    def walk(e):
        tag = e.tag.replace(NS, '')
        if tag == 'note': notes.append(clean(''.join(e.itertext())))
        elif tag in ('anchor', 'ptr', 'figure'): pass
        elif tag == 'lb': out.append('\n' if lines else ' ')
        elif tag == 'hi' and 'italic' in (e.get('rend') or ''):
            def txt(x):  # le texte de l'italique, sans les notes qu'il contient (« pawpaws » + note « Papayes »)
                if x.tag.replace(NS, '') == 'note': notes.append(clean(''.join(x.itertext()))); return x.tail or ''
                return (x.text or '') + ''.join(txt(c) for c in x) + (x.tail or '' if x is not e else '')
            raw = txt(e); inner = clean(raw)
            if inner: out.append((' ' if raw[:1].isspace() else '') + '*' + inner + '*' + (' ' if raw[-1:].isspace() else ''))
        else:
            if e.text: out.append(e.text)
            for c in e: walk(c)
        if e is not el and e.tail: out.append(e.tail)
    walk(el)
    s = ''.join(out)
    if lines: return [clean(x) for x in s.split('\n') if clean(x)]
    s = clean(s); s = re.sub(r'\*\s*\*', '', s); s = re.sub(r'\*\s+([,.)])', r'*\1', s)
    return s
def dash(t):
    t = re.sub(r'^[–-]\s*', '— ', t); t = re.sub(r'\s*–\s*', ' — ', t)
    return t
def withnotes(t, notes):
    for n in notes:
        n = n.strip().rstrip('.')
        if n: t = t + ' (*Note : ' + n[0].lower() + n[1:] + '.*)'
    return t
def verse(ls): return '\n'.join('*' + l.replace('*', '').strip() + '*' for l in ls)
SOURCES = {'Chanson de nuit dans la Jungle.', 'Maximes de Baloo.', 'Berceuse phoque.'}
LABELS = {'Éléphants de batterie.', 'Bœufs de batterie.', 'Chevaux de cavalerie.', 'Mulets de bât.', 'Chameaux du commissariat.', 'Tous les animaux ensemble.'}
ROM = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
root = ET.parse(sys.argv[1]).getroot(); chs = []
for d in root.iter(NS + 'div'):
    if d.get('type') != 'div2': continue
    title = clean(''.join(d.find(NS + 'head').itertext()))
    if title.startswith('À propos'): continue
    ps = []
    for p in d.findall(NS + 'p'):
        if clean(''.join(p.itertext())).replace(' ', '') == '***': ps.append(('***', [])); continue
        notes = []; t = text_of(p, notes)
        if t: ps.append((t, notes))
    paras = []
    # le poème d'ouverture
    ep = d.find(NS + 'epigraph')
    if ep is not None:
        ls = text_of(ep, [], lines=True)
        ls = [y for x in ls for y in re.split(r'(?<=[a-zé])(?=[A-Z])', x)]  # « nuitQue » : un saut de ligne perdu
        head = ls
    else:
        head = []
        while ps and ps[0][0].replace(' ', '') != '***' and len(ps[0][0]) < 120:
            head.append(ps.pop(0)[0])
    if head and re.match(r'^\(.*\)$', head[0]) and not head[0].startswith('(En '): head = head[1:]  # titre anglais
    if title == 'Service de la Reine':  # vers coupés en deux par la mise en page
        assert len(head) == 9, head
        head = [head[0] + ' ' + head[1], head[2] + ' ' + head[3], head[4] + head[5] + ' ' + head[6], head[7] + ' ' + head[8]]
    src = head.pop() if head and head[-1] in SOURCES else None
    if head: paras.append(verse(head) + ('\n— ' + src.rstrip('.') if src else ''))
    if ps and ps[0][0].replace(' ', '') == '***': ps.pop(0)
    # le récit, puis la chanson
    k = next((i for i, (t, _) in enumerate(ps) if t.replace(' ', '') == '***'), len(ps))
    body = [typo(withnotes(dash(t), notes)) for t, notes in ps[:k]]
    i = 0
    while i < len(body):  # une chanson dans le récit : au moins quatre vers courts de suite, hors dialogue
        j = i
        while j < len(body) and len(body[j]) < 90 and not body[j].startswith('—'): j += 1
        if j - i >= 4: paras.append(verse(body[i:j])); print('  vers dans le récit :', title, body[i][:40], '…', j - i); i = j
        else: paras.append(body[i]); i += 1
    song = ps[k + 1:]
    if song:
        if song[-1][0] == 'FIN': song.pop()
        paras.append(typo(song.pop(0)[0]))
        block = []
        def flush():
            if block: paras.append(typo(verse(block))); block.clear()
        prose = sum(len(t) for t, _ in song) / len(song) > 80
        for j, (t, notes) in enumerate(song):
            t = re.sub(r'!(?=\*?[A-Z])', '! ', withnotes(re.sub(r'\s+\*?\.\*?$', '.', t), notes))
            if prose or (t.startswith('(') and j in (0, len(song) - 1)) or t.startswith('Telle qu'):
                flush(); paras.append(typo('*' + t.replace('*', '') + '*'))
            elif t in LABELS: flush(); paras.append(typo(t))
            else: block.append(t)
        flush()
    chs.append({'n': ROM[len(chs)], 'head': title, 'paras': [p for p in paras if p]})
assert len(chs) == 7, len(chs)
for c in chs:
    for p in c['paras']: assert '[' not in p and '_' not in p and '--' not in p, (c['n'], p[:80])
json.dump(chs, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
for c in chs: print(c['n'], c['head'][:40], len(c['paras']), sum(len(p.split()) for p in c['paras']))
