# lancelot_texte.py pre tome3.txt tome4.txt sortie.txt | post ch.json sortie.json : « Lancelot du Lac » mis en nouveau langage
# par Paulin Paris (Les Romans de la Table Ronde, tomes III et IV, 1872-1875 ; Gutenberg n° 45212 et 45213, miroir
# orkeilius/gutenberg_fr_mirror). Le tome V, qui continue Lancelot, manque au miroir : le livre s'arrête à la fin du tome IV.
# pre : garde, dans chaque tome, le texte entre le titre « LANCELOT DU LAC. » et « FIN DU… » ; retire les notes de Paulin Paris
# (« [Note 12: …] », presque toutes des renvois savants) et leurs appels « [12] », y compris ceux collés aux numéros de laisses ;
# chaque numéro de laisse reçoit un titre vide « SANS TITRE » pour gut.py (la fiche écrit les titres).
# post : les répliques en forme de scène (« GALEHAUT. » seul sur sa ligne, puis la réplique) deviennent « *Galehaut.* … » ;
# contrôles.
import json, re, sys
if sys.argv[1] == 'pre':
    out = []
    for src in sys.argv[2:-1]:
        L = open(src, encoding='utf8').read().replace('\r', '').split('\n')
        i = max(k for k, l in enumerate(L[:200]) if l.strip() == 'LANCELOT DU LAC.') + 1
        fin = next(k for k, l in enumerate(L) if l.startswith('FIN DU'))
        k = i
        while k < fin:
            s = L[k]
            if s.startswith('[Note '):
                while not L[k].rstrip().endswith(']'): k += 1
                k += 1; continue
            s = re.sub(r'\[\d+\]', '', s)
            if re.fullmatch(r'[IVXLC]+\.', s.strip()): out += [s.strip(), '', 'SANS TITRE', '']; k += 1; continue
            out.append(s); k += 1
        out += ['', '']
    out.append('FIN')
    open(sys.argv[-1], 'w', encoding='utf8').write('\n'.join(out) + '\n')
else:
    C = json.load(open(sys.argv[2]))
    NOMS = {}
    for c in C:
        c['head'] = ''
        a = c['paras']; b = []
        for p in a:
            if b and re.fullmatch(r"[A-ZÉÈÀÂÎÔÛÇ][A-ZÉÈÀÂÎÔÛÇ' .-]+\.", b[-1]) and len(b[-1]) < 30:
                nom = b.pop()[:-1].title().replace("D'", "d'").replace('De ', 'de ')
                NOMS[nom] = NOMS.get(nom, 0) + 1
                p = '*%s.* %s' % (nom, p)
            b.append(p)
        c['paras'] = b
        for p in b: assert not re.search(r'[_\[\]^{}]|Gutenberg|CHAPITRE|SANS TITRE', p) and p.count('*') % 2 == 0, (c['n'], p[:80])
    print(NOMS, file=sys.stderr)
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False, indent=0)
