# robinson_texte.py tome1.txt tome2.txt sortie.txt : prépare « Robinson Crusoé » (trad. Petrus Borel, 1836, Gutenberg
# 38705-38706) pour gut.py. Les chapitres n'ont qu'un titre en capitales : on relit la table des matières de chaque tome
# et l'on pose « CHAPITRE N. » devant chaque titre du corps. La préface de l'éditeur est sautée ; on s'arrête à la fin
# de la première partie, au milieu de « LES DEUX NEVEUX », où commencent les « Nouvelles aventures » (« Ce proverbe naïf… »).
import re, sys
out = []; n = 0
# notes gardées (tome, numéro) : les explications utiles au lecteur ; les querelles de Borel avec les traductions
# antérieures, les remarques du correcteur sur la saisie et les renvois à la « Dissertation religieuse » sont ôtés.
KEEP = {(0, 5): None, (0, 6): None, (0, 7): 'Voile aurique.', (0, 8): 'Le détroit de Gibraltar.', (0, 10): None,
        (0, 12): None, (0, 13): None, (0, 14): None, (0, 17): 'Longue pièce de bois utilisée comme mât, bôme ou vergue.',
        (0, 19): 'Barrique contenant 60 gallons, environ 240 pintes ou un muid.', (0, 21): None, (0, 23): None,
        (0, 26): None, (1, 4): None,
        (1, 5): 'Le moidore (en portugais *moeda de ouro*) est aussi une pièce d\'or, qui vaut environ 33 Fr. 96 cent.'}
def clean_note(t):
    t = re.sub(r'\s*_\(Note du correcteur--ELG\.\)_', '', t); t = re.sub(r'\s*P\. ?B\.$', '', t)
    return t.strip()
for k, src in enumerate(sys.argv[1:3]):
    L = open(src, encoding='utf8').read().replace('\r', '').split('\n')
    e = next(i for i, l in enumerate(L) if l.strip() == 'NOTES:')
    notes = {}
    for b in re.split(r'\n\s*\n', '\n'.join(L[e + 1:])):
        m = re.match(r'^\[(\d+)\]\s*(.*)$', b.strip(), re.S)
        if m and (k, int(m.group(1))) in KEEP:
            notes[m.group(1)] = KEEP[(k, int(m.group(1)))] or clean_note(' '.join(m.group(2).split()))
    L = L[:e]
    L = [re.sub(r'(?<=[A-ZÉ])\[\d+\]$', '', l.rstrip()) for l in L]
    L = ['ROBINSON MARCHAND DE GUINÉE' if l.strip() == 'ROBINSON MARCHAND DE GUIN' else l for l in L]
    t0 = next(i for i, l in enumerate(L) if l.strip() == 'Table des matières')
    toc = []; i = t0 + 1
    while True:
        s = L[i].strip()
        if s.startswith('_PRÉFACE'): i += 1; continue
        if s:
            if toc and s == toc[0]: break
            if not s.isupper() and not s.endswith('?'): break
            toc.append(s)
        i += 1
    if k == 0: toc = toc[toc.index('ROBINSON'):]
    j = i; body = []
    # le corps commence au premier titre de la table
    while L[j].strip() != toc[0]: j += 1
    q = 0
    while j < len(L):
        s = L[j].strip()
        if s.startswith('*** END OF'): break
        if q < len(toc) and s == toc[q] and not L[j - 1].strip() and not L[j + 1].strip():
            n += 1; q += 1; body += ['', 'CHAPITRE %d.' % n, s, '']
        elif k == 1 and toc[q - 1] == 'LES DEUX NEVEUX' and s.startswith('Ce proverbe naïf'): break
        else:
            body.append(L[j])
            if not s and body[-2:-1] and body[-2].strip():  # fin d'un paragraphe : ses notes gardées le suivent
                para = []; b = len(body) - 2
                while b >= 0 and body[b].strip(): para.insert(0, body[b]); b -= 1
                for c in re.findall(r'\[(\d+)\]', ' '.join(para)):
                    if c in notes: body += ['[Note %s: %s]' % (c, notes[c]), '']
        j += 1
    assert k == 1 or q == len(toc), (src, q, len(toc), toc[q] if q < len(toc) else None)
    out += body
txt = '\n'.join(out)
def roman(n):
    r = ''
    for v, c in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: r += c; n -= v
    return r
txt = re.sub(r'CHAPITRE (\d+)\.', lambda m: 'CHAPITRE %s.' % roman(int(m.group(1))), txt)
# capitales de la saisie (petites capitales de l'édition) et graphies voulues par Borel (« touts », « mouce »)
def low(m): t = m.group(1).lower(); return '*' + t[0].upper() + t[1:] + '*'
txt = re.sub(r'^=([^=\n]+)=$', low, txt, flags=re.M)
txt = re.sub(r'^LE (MAL|BIEN)\.$', lambda m: '*Le ' + m.group(1).lower() + '.*', txt, flags=re.M)
txt = re.sub(r'^(\*Le (?:mal|bien)\.\*)\n\s*\n', r'\1 ', txt, flags=re.M)
SUBS = (('WILL ATKINS', 'Will Atkins'), ('WILLIAM ATKINS', 'William Atkins'), ('ATKINS', 'Atkins'), ('CRUSOE', 'Crusoe'),
        ('VENDREDI', 'Vendredi'), ('MOIDORES', 'moidores'), ('AVE MARIA', 'Ave Maria'), ('SAINTE-VIERGE', 'Sainte-Vierge'),
        ('touts', 'tous'), ('Touts', 'Tous'), ('mouce', 'mousse'))
Ls = txt.split('\n')
for i, l in enumerate(Ls):
    if i and Ls[i - 1].startswith('CHAPITRE '): continue  # les titres restent en capitales
    for a, b in SUBS: l = re.sub(r'(?<![A-Za-zÀ-ÿ])' + a + r'(?![A-Za-zÀ-ÿ])', b, l)
    Ls[i] = l
txt = '\n'.join(Ls)
txt = txt.replace('Le _moidores_ que', 'Le _moidore_, que')
open(sys.argv[3], 'w', encoding='utf8').write(txt + '\n\nFIN\n')
print(n, 'chapitres')
