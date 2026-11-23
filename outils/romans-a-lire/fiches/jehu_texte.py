# jehu_texte.py pre source.txt sortie.txt | post ch.json sortie.json : retouches des « Compagnons de Jéhu »
# (Gutenberg n° 13819, miroir orkeilius/gutenberg_fr_mirror).
# pre : après la table, « PROLOGUE » (suivi de son titre) devient « PRÉFACE », chaque « N -- TITRE » (ou « N: TITRE »)
# devient « CHAPITRE N. » suivi du titre, « UN MOT AU LECTEUR » devient « ÉPILOGUE » ; dans chaque paragraphe, un
# soulignement fermant collé au mot suivant (« _Devoir, _vint ») repasse avant l'espace.
# Corrections ponctuelles (FIX) des soulignements mal placés ; lignes « _ _ » = fin de paragraphe ; « *** » → « ⁂ » ;
# les vers en italique gardent leurs lignes (« ¶ »), et l'on coupe avant la licence.
# post : les titres reprennent la casse ordinaire (table ci-dessous) ; ids P, I à LV, CONCL, MOT ; contrôles.
import json, re, sys
TITRES = ["La ville d'Avignon", "Une table d'hôte", "Un proverbe italien", "L'Anglais", "Le duel", "Roland", "Morgan",
  "La chartreuse de Seillon", "À quoi servait l'argent du Directoire", "Roméo et Juliette", "La famille de Roland",
  "Le château des Noires-Fontaines", "Les plaisirs de la province", "Le ragot", "Une mauvaise commission", "L'esprit fort",
  "Le fantôme", "Perquisition", "Le jugement", "La petite maison de la rue de la Victoire", "Les convives du général Bonaparte",
  "Le bilan du Directoire", "Un projet de décret", "*Alea jacta est*", "Le 18 brumaire", "Une communication importante",
  "Le bal des victimes", "La peau des ours", "En famille", "La diligence de Genève", "Le rapport du citoyen Fouché",
  "Le fils du meunier de Leguerno", "Blanc et bleu", "La peine du talion", "La diplomatie de Georges Cadoudal",
  "Proposition de mariage", "Sculpture et peinture", "L'ambassadeur", "Les deux signaux", "La grotte de Ceyzériat",
  "Buisson creux", "L'hôtel de la Poste", "La malle de Chambéry", "La réponse de lord Grenville", "Déménagement",
  "Le chercheur de piste", "Une inspiration", "Une reconnaissance", "Où les pressentiments de Morgan se réalisent",
  "La revanche de Roland", "Cadoudal aux Tuileries", "L'armée de réserve", "Le jugement", "Où Amélie tient sa parole",
  "La confession", "L'invulnérable", "Conclusion", "Un mot au lecteur"]
def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
def souligne(par):  # un soulignement sur deux ouvre, l'autre ferme ; l'espace se met dehors
    parts = par.split('_')
    if len(parts) % 2 == 0: return par
    for k in range(1, len(parts), 2):  # parts[k] est le texte en italique
        if parts[k].endswith(' '): parts[k] = parts[k].rstrip(' '); parts[k + 1] = ' ' + parts[k + 1]
        if parts[k].startswith(' '): parts[k] = parts[k].lstrip(' '); parts[k - 1] = parts[k - 1] + ' '
    return '_'.join(parts)
FIX = [("_-- I am going with, mylord _?_ _demanda_ _le domestique?", "-- _I am going with, mylord?_ demanda le domestique."),
  ("le_ _baron", "le baron"), ("de_ _Gex", "de Gex"), ("«F_ortuna", "«_Fortuna"), ("forti una_»_ _Aimez", "forti una_». Aimez"),
  ("_--_ Qu’eussiez", "-- Qu’eussiez"), ("fac_ _regem", "fac regem"), ("_--_ _Amen! _répondirent", "-- _Amen!_ répondirent"),
  ("à la lanterne_!_\n_Après", "à la lanterne!_\nAprès")]
def etoiles(par):  # même règle sur les « *…* » de gut.py : l'espace sort de l'italique
    parts = par.split('*')
    if len(parts) % 2 == 0: return par
    for k in range(1, len(parts), 2):
        if parts[k].endswith(' '): parts[k] = parts[k].rstrip(' '); parts[k + 1] = ' ' + parts[k + 1].lstrip(' ')
        if parts[k].startswith(' '): parts[k] = parts[k].lstrip(' '); parts[k - 1] = parts[k - 1].rstrip(' ') + ' '
    return '*'.join(parts)
if sys.argv[1] == 'pre':
    L = open(sys.argv[2], encoding='utf8').read().replace('\r', '').split('\n')
    toc_end = next(i for i, l in enumerate(L) if l.strip() == 'UN MOT AU LECTEUR')
    out = []; skip = False
    for i, l in enumerate(L):
        s = l.strip()
        if i > toc_end:
            if s == 'PROLOGUE': out.append('PRÉFACE'); skip = True; continue
            if skip and s:
                skip = False
                if s == "LA VILLE D'AVIGNON": continue
            m = re.match(r'^([IVXLC]+)\s*(?:--|:)\s*(.+)$', s)
            if m: out += ['CHAPITRE %s.' % m.group(1), m.group(2)]; continue
            if s == 'UN MOT AU LECTEUR': out.append('ÉPILOGUE'); continue
        out.append(l)
    T = '\n'.join(out)
    T = T[:T.index("End of Project Gutenberg's")]
    for a, b in FIX: assert a in T, a; T = T.replace(a, b)
    T = re.sub(r'(?m)^_ _$', '', T)
    T = re.sub(r'(?m)^\*\*\*$', '⁂', T)
    T = re.sub(r'(?m)^_-- ', '-- _', T)
    # les vers en italique (une ligne entière entre soulignements) gardent leurs lignes
    V = T.split('\n'); out = []; prev = False
    for l in V:
        verse = bool(re.match(r'^_[^_]+_$', l.strip())) and len(l) < 60
        if verse and prev: out[-1] += ' ¶ ' + l.strip()
        else: out.append(l)
        prev = verse
    T = '\n'.join(out)
    T = '\n\n'.join(souligne(p) for p in T.split('\n\n'))
    open(sys.argv[3], 'w', encoding='utf8').write(T)
else:
    C = json.load(open(sys.argv[2]))
    assert len(C) == 58, len(C)
    ids = ['P'] + [roman(k) for k in range(1, 56)] + ['CONCL', 'E']
    assert [c['n'] for c in C] == ids, [c['n'] for c in C]
    for c, t in zip(C, TITRES):
        c['head'] = t
        if c['n'] == 'E': c['n'] = 'MOT'
        c['paras'] = [etoiles(p.replace(' ¶ ', '\n')) for p in c['paras']]
        for p in c['paras']: assert not re.search(r'[_¶\[\]]|Gutenberg', p) and p.count('*') % 2 == 0, (c['n'], p[:80])
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False, indent=0)
