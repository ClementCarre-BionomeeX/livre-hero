# vingt_texte.py pre source.txt sortie.txt | post ch.json sortie.json : retouches de « Vingt ans après » (Gutenberg n° 13952,
# miroir orkeilius/gutenberg_fr_mirror, saisie d'Ebooks libres et gratuits).
# pre : la table du début est retirée ; chaque tête « XIII. Comment d'Artagnan… » (sur une à trois lignes) devient
# « XIII » puis « TITRE », que gut.py sait lire. post : les titres de Dumas reviennent (TITRES), le « FIN » final part.
import json, re, sys
TITRES = [
  "Le fantôme de Richelieu",
  "Une ronde de nuit",
  "Deux anciens ennemis",
  "Anne d'Autriche à quarante-six ans",
  "Gascon et Italien",
  "D'Artagnan à quarante ans",
  "D'Artagnan est embarrassé, mais une de nos anciennes connaissances lui vient en aide",
  "Des influences différentes que peut avoir une demi-pistole sur un bedeau et sur un enfant de chœur",
  "Comment d'Artagnan, en cherchant bien loin Aramis, s'aperçut qu'il était en croupe derrière Planchet",
  "L'abbé d'Herblay",
  "Les deux Gaspards",
  "M. Porthos du Vallon de Bracieux de Pierrefonds",
  "Comment d'Artagnan s'aperçut, en retrouvant Porthos, que la fortune ne fait pas le bonheur",
  "Où il est démontré que, si Porthos était mécontent de son état, Mousqueton était fort satisfait du sien",
  "Deux têtes d'ange",
  "Le château de Bragelonne",
  "La diplomatie d'Athos",
  "M. de Beaufort",
  "Ce à quoi se récréait M. le duc de Beaufort au donjon de Vincennes",
  "Grimaud entre en fonctions",
  "Ce que contenaient les pâtés du successeur du père Marteau",
  "Une aventure de Marie Michon",
  "L'abbé Scarron",
  "Saint-Denis",
  "Un des quarante moyens d'évasion de Monsieur de Beaufort",
  "D'Artagnan arrive à propos",
  "La grande route",
  "Rencontre",
  "Le bonhomme Broussel",
  "Quatre anciens amis s'apprêtent à se revoir",
  "La place Royale",
  "Le bac de l'Oise",
  "Escarmouche",
  "Le moine",
  "L'absolution",
  "Grimaud parle",
  "La veille de la bataille",
  "Un dîner d'autrefois",
  "La lettre de Charles Ier",
  "La lettre de Cromwell",
  "Mazarin et Madame Henriette",
  "Comment les malheureux prennent parfois le hasard pour la providence",
  "L'oncle et le neveu",
  "Paternité",
  "Encore une reine qui demande secours",
  "Où il est prouvé que le premier mouvement est toujours le bon",
  "Le Te Deum de la victoire de Lens",
  "Le mendiant de Saint-Eustache",
  "La tour de Saint-Jacques-la-Boucherie",
  "L'émeute",
  "L'émeute se fait révolte",
  "Le malheur donne de la mémoire",
  "L'entrevue",
  "La fuite",
  "Le carrosse de M. le coadjuteur",
  "Comment d'Artagnan et Porthos gagnèrent, l'un deux cent dix-neuf, et l'autre deux cent quinze louis, à vendre de la paille",
  "On a des nouvelles d'Aramis",
  "L'Écossais, parjure à sa foi, pour un denier vendit son roi",
  "Le vengeur",
  "Olivier Cromwell",
  "Les gentilshommes",
  "Jésus Seigneur",
  "Où il est prouvé que dans les positions les plus difficiles les grands cœurs ne perdent jamais le courage, ni les bons estomacs l'appétit",
  "Salut à la Majesté tombée",
  "D'Artagnan trouve un projet",
  "La partie de lansquenet",
  "Londres",
  "Le procès",
  "White-Hall",
  "Les ouvriers",
  "*Remember*",
  "L'homme masqué",
  "La maison de Cromwell",
  "Conversation",
  "La felouque *l'Éclair*",
  "Le vin de Porto",
  "Le vin de Porto (suite)",
  "*Fatality*",
  "Où, après avoir manqué d'être rôti, Mousqueton manqua d'être mangé",
  "Retour",
  "Les ambassadeurs",
  "Les trois lieutenants du généralissime",
  "Le combat de Charenton",
  "La route de Picardie",
  "La reconnaissance d'Anne d'Autriche",
  "La royauté de M. de Mazarin",
  "Précautions",
  "L'esprit et le bras",
  "L'esprit et le bras (suite)",
  "Le bras et l'esprit",
  "Le bras et l'esprit (suite)",
  "Les oubliettes de M. de Mazarin",
  "Conférences",
  "Où l'on commence à croire que Porthos sera enfin baron et d'Artagnan capitaine",
  "Comme quoi avec une plume et une menace on fait plus vite et mieux qu'avec l'épée et du dévouement",
  "Comme quoi avec une plume et une menace on fait plus vite et mieux qu'avec l'épée et du dévouement (suite)",
  "Où il est prouvé qu'il est quelquefois plus difficile aux rois de rentrer dans la capitale de leur royaume que d'en sortir",
  "Où il est prouvé qu'il est quelquefois plus difficile aux rois de rentrer dans la capitale de leur royaume que d'en sortir (suite)"]
def pre(a, b):
    L = open(a, encoding='utf8').read().replace('\r', '').split('\n')
    t = L.index('Table des matières')
    s = next(i for i in range(t + 1, len(L)) if L[i].startswith('I. ') and L[i + 1] == '')
    L = L[:t] + L[s:]
    out = []; i = 0; k = 0
    while i < len(L):
        if i >= t and re.match(r'^[IVXLC]+\. ', L[i]):
            k += 1; out += [L[i].split('.')[0], 'TITRE']
            while L[i] != '': i += 1
            continue
        out.append(L[i]); i += 1
    assert k == len(TITRES), k
    open(b, 'w', encoding='utf8').write('\n'.join(out))
def post(a, b):
    C = json.load(open(a, encoding='utf8'))
    assert len(C) == len(TITRES), len(C)
    for c, t in zip(C, TITRES): c['head'] = t
    if C[-1]['paras'][-1] == 'FIN': C[-1]['paras'].pop()
    for c in C:
        for p in c['paras']: assert not re.search(r'[\[\]_]|Gutenberg|TITRE', p), p[:80]
    json.dump(C, open(b, 'w', encoding='utf8'), ensure_ascii=False, indent=0)
(pre if sys.argv[1] == 'pre' else post)(sys.argv[2], sys.argv[3])
