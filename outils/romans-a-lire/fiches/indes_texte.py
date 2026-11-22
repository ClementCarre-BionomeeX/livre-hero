# indes_texte.py pre source.txt sortie.txt, puis gut.py sortie.txt ch.json, puis indes_texte.py post ch.json ch2.json :
# retouches des « Indes noires » (Gutenberg 5081). Les appels de notes « [1*] » deviennent « [1] » et les notes, rangées
# en fin de chapitre sous la forme « [1] texte », deviennent « [Note 1: texte] », que gut.py remet à leur appel. « The
# End » devient « FIN », où gut.py s'arrête. Après gut.py : « A » sans accent en tête de phrase redevient « À », et les
# fautes de la saisie relevées à la relecture sont corrigées (liste FIX). Les vers et l'en-tête de la lettre du
# chapitre I (lignes en retrait qui se suivent) gardent leurs retours à la ligne : marqués « ¦ » en pre, « \n » en post.
import json, re, sys
FIX = [('Nelher-Bow', 'Nether-Bow'), ('Southoueensferry et North-oueensferry', 'South-Queensferry et North-Queensferry'),
       ('de oueensferry', 'de Queensferry'), ('&oelig ;il', 'œil'), ('grés rouge', 'grès rouge'), ('Ilinkardine', 'Kincardine'),
       ('Ilirkgrange', 'Kirkgrange'), ('Linlilhgow', 'Linlithgow'), ("L'experience", "L'expérience"),
       ('feux interieurs', 'feux intérieurs'), ('exrérieur', 'extérieur'), ('enpreintes', 'empreintes'),
       ('terestres', 'terrestres'), ('éjuisement', 'épuisement'), ('premiers jours .', 'premiers jours.'),
       ('puits Yarrow', 'puits Yarow'), ('Colquhour', 'Colquhoun'), ("port d'Edimbourg", "port d'Édimbourg"),
       ('Viens caresser… Mais non', 'Viens caresser…\nMais non'),
       ('surnaturel !.', 'surnaturel !'), ('Oui. !', 'Oui !'), ('nous voir. !', 'nous voir !'), ('toute confiance :.', 'toute confiance :'),
       ('exploitation ?.', 'exploitation ?')]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    s = re.sub(r'minéraux:\n\n\n +France +dans +1140 +ans\.\n\n +Angleterre +-- +800 +--\n\n +Belgique +-- +750 +--\n\n'
               r' +Allemagne +-- +300 +--\n\nEn Amérique', 'minéraux : France, dans 1140 ans ; Angleterre, 800 ; Belgique, 750 ;'
               ' Allemagne, 300.\nEn Amérique', s)  # le tableau de la note 2 du chapitre III, mis en ligne dans la note
    L = s.split('\n'); out = []; i = 0; n = 0
    while i < len(L):
        m = re.match(r'^\[(\d+)\]\s*(.*)$', L[i])
        if m:
            t = [m.group(2).strip()]; i += 1
            while i < len(L) and L[i].strip(): t.append(L[i].strip()); i += 1
            out.append('[Note ' + m.group(1) + ': ' + ' '.join(t) + ']'); n += 1; continue
        if re.match(r'^ {5,}\S', L[i]) and i + 1 < len(L) and re.match(r'^ {5,}\S', L[i + 1]): L[i] += '¦'
        out.append(re.sub(r'\s*\[(\d+)\*\]\s*', r'[\1] ', L[i]).replace('] »', ']»').replace('[1] ,', '[1],').replace('[2] ,', '[2],')); i += 1
    s = '\n'.join(out).replace('\n                                The End\n', '\nFIN\n')
    open(sys.argv[3], 'w', encoding='utf8').write(s); print(n, 'notes'); sys.exit()
C = json.load(open(sys.argv[2], encoding='utf8'))
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII",
       "XIX", "XX", "XXI", "XXII"]
assert [c['n'] for c in C] == ROM, [c['n'] for c in C]
for c in C:
    out = []
    for p in c['paras']:
        p = p.replace('¦ ', '\n').replace('\n* « ', '\n*« ').replace('\n···', '')  # « ··· » : points d'octave sous le chiffre
        p = re.sub(r'(?<![\d.])\.\.(?!\.)', '…', p)  # « .. » de la saisie pour « … » (sauf la date « 18.. »)
        p = re.sub(r'(^|\n|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        for a, b in FIX: p = p.replace(a, b)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        if out and out[-1].endswith("c'était toi,"): out[-1] += ' ' + p; continue  # paragraphe coupé en deux dans la saisie
        if out and re.match(r'^[\d. |]+$', p) and re.match(r'^[\d. |]+$', out[-1]): out[-1] += '\n' + p; continue  # les deux lignes de l'air chiffré
        out.append(p)
    c['paras'] = out
assert all(a not in json.dumps(C, ensure_ascii=False) for a, b in FIX)
json.dump(C, open(sys.argv[3], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
