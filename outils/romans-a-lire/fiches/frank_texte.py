# frank_texte.py pre source.txt sortie.txt | post ch.json sortie.json : retouches de « Frankenstein » (Mary Shelley,
# traduction de Jules Saladin, 1821 ; Gutenberg n° 62404, 62405 et 62406, miroir orkeilius/gutenberg_fr_mirror).
# source.txt = les trois tomes mis bout à bout. pre saute les pages de titre et les tables de chaque tome, garde la
# préface, et numérote d'affilée les quatre lettres de Walton puis les vingt-trois chapitres : « CHAPITRE N. » et
# « SANS TITRE » pour gut.py (I à IV = lettres, V à XXVII = chapitres I à XXIII ; la fiche écrit les titres).
# post : coquilles de la numérisation (FIX), « Switzerland » laissé en anglais par Saladin devient « Suisse » ;
# ids P et I à XXVII ; titres vides ; « *** » (un nom tu) et « 17-- » (une année tue) finissent par « … » ; contrôles.
import json, re, sys
def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
TITRE = {'FRANKENSTEIN', 'FRANKENSTEIN,', 'ou', 'OU', 'LE PROMÉTHÉE MODERNE', 'LE PROMÉTHÉE MODERNE.'}
FIX = [("SAVILIE", "SAVILLE"), ("à la pèche", "à la pêche"), ("voire santé", "votre santé"), ("Plinpalais", "Plainpalais"),
       ("lueur se faibles", "lueur de faibles"), ("mont Anvert", "Montanvert"), ("aîlés", "ailés"), ("Coleridge's", "Coleridge,"),
       ("du Switzerland", "de la Suisse"), ("au Switzerland", "à la Suisse"), ("le Switzerland", "la Suisse"), ("Switzerland", "Suisse"), ("quelques emotions", "quelques émotions"),
       ("je en conjure", "je vous en conjure"), ("de de la vie", "de la vie"), ("Fakland", "Falkland"), ("cîme", "cime"),
       ("dont je m'effrayais midi-même", "dont je m'effrayais moi-même"), ("une lâche enjointe", "une tâche enjointe"), ("la Tartare", "la Tartarie"),
       ("longues bouclés", "longues boucles"), ("fut alors arrête", "fut alors arrêté"), ("nous mêmes pied", "nous mîmes pied"), ("…. ", "… "), ("si touchons", "si touchants")]
if sys.argv[1] == 'pre':
    L = open(sys.argv[2], encoding='utf8').read().replace('\r', '').split('\n')
    out = []; n = 0; saute = True; premier = None; vu = 0; i = 0
    while i < len(L):
        s = L[i].strip()
        if saute:
            if s == 'TABLE':
                j = i + 1
                while not L[j].strip(): j += 1
                premier = L[j].strip(); vu = 0
            elif premier and s == premier:
                vu += 1
                if vu == 2: saute = False; continue
            i += 1; continue
        if s.startswith('FIN DU TOME'): saute = True; premier = None; i += 1; continue
        if s in TITRE: i += 1; continue
        if re.match(r'^(LETTRE (Ière|II|III|IV)|CHAPITRE ([IVXL]+|Ier))$', s):
            n += 1; out += ['CHAPITRE %s.' % roman(n), '', 'SANS TITRE']; i += 1; continue
        out.append(L[i]); i += 1
    assert n == 27, n
    open(sys.argv[3], 'w', encoding='utf8').write('\n'.join(out) + '\nFIN\n')
else:
    C = json.load(open(sys.argv[2]))
    ids = ['P'] + [roman(k) for k in range(1, 28)]
    assert [c['n'] for c in C] == ids, [c['n'] for c in C]
    tout = json.dumps(C, ensure_ascii=False)
    for a, b in FIX: assert a in tout, a
    for c in C:
        c['head'] = ''
        c['paras'] = [p.replace('***', '…').replace('17 —', '17…') for p in c['paras']]  # « la ville de *** »
        for a, b in FIX:
            c['paras'] = [p.replace(a, b) for p in c['paras']]
        for p in c['paras']: assert not re.search(r'[_\[\]]|Gutenberg|SANS TITRE|CHAPITRE|TOME', p) and p.count('*') % 2 == 0, (c['n'], p[:80])
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False, indent=0)
