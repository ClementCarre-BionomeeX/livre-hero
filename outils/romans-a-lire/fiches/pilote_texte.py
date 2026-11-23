# pilote_texte.py pre src.txt out.txt | post ch.json ch2.json : « Le Pilote du Danube » (Gutenberg 11484, miroir français).
# La seule saisie disponible a perdu tous ses accents (« Ce jour-la, samedi 5 aout 1876 »). Ils ont été rétablis à
# part, avant ce script : un lexique tiré des livres de la bibliothèque donne la forme accentuée de chaque mot, le
# contexte départage les mots qui en ont plusieurs (a/à, ou/où, la/là, fut/fût, ferme/fermé…), et les quelque trois
# mille cas douteux ont été relus un par un. Le texte rétabli est dans le dossier du projet
# (livre-heros/classiques/pilote/pilote.txt, avec les outils et la liste des décisions) ; c'est lui que lit pre.
# pre : la « TABLE. » de la fin devient « FIN », où gut.py s'arrête ; « ÉPILOGUE », titre du chapitre XIX, ne doit
# pas ouvrir un chapitre de plus.
import json, re, sys
sys.path.insert(0, sys.argv[0].rsplit('/', 1)[0] + '/..'); from typo import typo

if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    assert '\nTABLE.\n' in s and '\nÉPILOGUE\n' in s
    s = s.replace('\nTABLE.\n', '\nFIN\n').replace('\nÉPILOGUE\n', '\nÉpilogue\n')
    open(sys.argv[3], 'w', encoding='utf8').write(s); print(s.count('\n'), 'lignes'); sys.exit()

FIX = [
    ("avait répété Striga en réponse. à l'exclamation", "avait répété Striga en réponse à l'exclamation"),
    ("Serge Ladko s'endormit", "Serge Ladko s'endormit."),
]
def quotes(p, st):
    # la saisie n'a que des guillemets droits : ouvrant devant un mot, fermant après ; s'il y a une espace des deux
    # côtés, c'est ouvrant en début de paragraphe, sinon l'inverse du dernier (une réplique peut courir sur plusieurs
    # paragraphes, le guillemet fermant n'arrivant qu'à la fin de la dernière)
    out = ''
    for i, ch in enumerate(p):
        if ch != '"': out += ch; continue
        a = p[i - 1] if i else ' '; b = p[i + 1] if i + 1 < len(p) else ' '
        if i == 0 or a in ' (' and b not in ' ,.;:!?': w = True
        elif a != ' ' and b in ' ,.;:!?—': w = False
        else: w = not st
        out += '« ' if w else ' »'; st = w
    return typo(out), st
C = json.load(open(sys.argv[2], encoding='utf8'))
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX"]
assert [c['n'] for c in C] == ROM, [c['n'] for c in C]
for c in C:
    out = []; st = False
    for p in c['paras']:
        for a, b in FIX:
            if a in p: p = p.replace(a, b); FIX.remove((a, b))
        p, st = quotes(p, st)
        # points de suspension tronqués par la saisie (« Brusch.. », « ?.. », « ! … »)
        p = re.sub(r"([!?])\.\.(?!\.)", r"\1…", p)
        p = re.sub(r"(?<=[\wÀ-ÿ])\.\.(?!\.)", "…", p)
        p = p.replace("! …", "!…").replace("? …", "?…")
        out.append(p)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:90])
    c['paras'] = out
assert not FIX, FIX
json.dump(C, open(sys.argv[3], 'w', encoding='utf8'), ensure_ascii=False)
print(sum(len(c['paras']) for c in C), 'paragraphes')
