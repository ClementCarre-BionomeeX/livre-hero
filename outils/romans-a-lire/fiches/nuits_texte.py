# nuits_texte.py pre source.txt sortie.txt | post ch.json sortie.json : retouches des « Mille et Une Nuits, contes choisis »
# (traduction d'Antoine Galland, 1704-1717 ; édition Morizot illustrée par Godefroy Durand ; Gutenberg n° 35969, miroir
# orkeilius/gutenberg_fr_mirror). pre commence au récit-cadre (« LES MILLE ET UNE NUITS / CONTES ARABES »), retire les
# légendes d'illustration, change chaque titre de conte en « CHAPITRE N. » + « SANS TITRE » pour gut.py (la fiche écrit les
# titres), et les lignes « IIᵉ NUIT » en paragraphes « *IIe nuit* » ; il s'arrête à la TABLE.
# post : « Aladdin » (chapitre XXV, 288 paragraphes, 37 000 mots) est coupé en six aux tournants du conte, « Ali Baba » en deux
# (après l'enterrement de Cassim) ; puis ids I à XXXII,
# titres vides, contrôles.
import json, re, sys
def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
TITRES = ["LES MILLE ET UNE NUITS", "LE MARCHAND ET LE GÉNIE", "HISTOIRE DU PREMIER VIEILLARD ET DE LA BICHE",
  "HISTOIRE DU SECOND VIEILLARD ET DES DEUX CHIENS NOIRS", "HISTOIRE DU PÊCHEUR", "HISTOIRE DU JEUNE ROI DES ILES NOIRES",
  "HISTOIRE DE TROIS CALENDERS, FILS DE ROI, ET DE CINQ DAMES DE BAGDAD", "HISTOIRE DU PREMIER CALENDER, FILS DE ROI.",
  "HISTOIRE DU SECOND CALENDER, FILS DE ROI", "HISTOIRE DU TROISIÈME CALENDER, FILS DE ROI.", "HISTOIRE DE ZOBÉIDE",
  "HISTOIRE D'AMINE", "HISTOIRE DE SINDBAD LE MARIN", "PREMIER VOYAGE DE SINDBAD LE MARIN", "SECOND VOYAGE DE SINDBAD LE MARIN",
  "TROISIÈME VOYAGE DE SINDBAD LE MARIN", "QUATRIÈME VOYAGE DE SINDBAD LE MARIN", "CINQUIÈME VOYAGE DE SINDBAD LE MARIN",
  "SIXIÈME VOYAGE DE SINDBAD LE MARIN", "SEPTIÈME ET DERNIER VOYAGE DE SINDBAD LE MARIN", "HISTOIRE DU PETIT BOSSU",
  "HISTOIRE RACONTÉE PAR LE POURVOYEUR DU SULTAN DE CASGAR", "HISTOIRE QUE RACONTA LE TAILLEUR", "HISTOIRE DU BARBIER",
  "HISTOIRE D'ALADDIN, OU LA LAMPE MERVEILLEUSE", "HISTOIRE D'ALI BABA ET DE QUARANTE VOLEURS EXTERMINÉS PAR UNE ESCLAVE"]
N = len(TITRES)
if sys.argv[1] == 'pre':
    L = open(sys.argv[2], encoding='utf8').read().replace('\r', '').split('\n')
    i = max(k for k in range(len(L) - 2) if L[k].strip() == TITRES[0] and 'CONTES ARABES' in '\n'.join(L[k:k + 4]))
    out = []; n = 0
    while i < len(L):
        s = L[i].strip()
        if s == 'TABLE': break
        if s == 'CONTES ARABES': i += 1; continue
        if s.startswith('[Illustration'):
            while not L[i].rstrip().endswith(']'): i += 1
            i += 1; continue
        if n < N and s == TITRES[n]:
            n += 1; out += ['CHAPITRE %s.' % roman(n), '', 'SANS TITRE', '']; i += 1; continue
        m = re.match(r'^([IVXLC]+)\^\{(RE|E)\} NUIT$', s)
        if m: out += ['', '*%s%s nuit*' % (m.group(1), m.group(2).lower()), '']; i += 1; continue
        out.append(L[i]); i += 1
    assert n == N, n
    open(sys.argv[3], 'w', encoding='utf8').write('\n'.join(out) + '\nFIN\n')
else:
    C = json.load(open(sys.argv[2]))
    ids = [roman(k) for k in range(1, N + 1)]
    assert [c['n'] for c in C] == ids, [c['n'] for c in C]
    a = C[24]['paras']; assert len(a) == 288, len(a)
    assert a[46].startswith("La mère d'Aladdin prit la lampe") and a[69].startswith('Un jour, en se promenant')
    assert a[138].startswith('Le soleil venait de se coucher') and a[170].startswith('Il y avait déjà plusieurs années')
    assert a[252].startswith('Le magicien africain avait un frère cadet')
    cuts = [0, 46, 69, 138, 170, 252, len(a)]
    b = C[25]['paras']; assert len(b) == 181 and b[70].startswith('De la sorte, la mort funeste de Cassim'), len(b)
    C = C[:24] + [{'n': '', 'head': '', 'paras': a[x:y]} for x, y in zip(cuts, cuts[1:])] + [{'n': '', 'head': '', 'paras': b[:70]}, {'n': '', 'head': '', 'paras': b[70:]}]
    for k, c in enumerate(C): c['n'] = roman(k + 1)
    FIX = [("d'honnetes [honnêtes ?] gens", "d'honnêtes gens"),
      # Personnages désignés par la couleur de leur peau : on les nomme par leur rôle (la notice le dit).
      ("ce fut un noir qui en sortit. Ce noir avait", "ce fut un homme qui en sortit. Cet homme avait"),
      ("assise auprès du noir", "assise auprès de son amant"), ("cet indigne noir", "cet indigne amant"),
      ("visiter ce noir", "visiter cet amant"), ("le lit où le noir était couché", "le lit où l'amant était couché"),
      ("le lit du noir", "le lit de l'amant"), ("croyait que le noir était", "croyait que l'amant était"),
      ("parler au noir", "parler à son amant"), ("contrefaisant le langage des noirs", "contrefaisant la voix de l'amant"),
      ("contrefaire le langage des noirs", "contrefaire la voix de l'amant"),
      ("contrefaisant toujours le langage des noirs", "contrefaisant toujours la voix de l'amant"),
      ("Mon aimable noiraud", "Mon aimable ami"), ("sept esclaves noirs", "sept esclaves"),
      ("eunuques noirs", "eunuques"), ("figure d'homme noir de la hauteur", "figure d'homme de la hauteur"),
      ("des noirs vinrent à nous", "les gens du pays vinrent à nous"), ("Les noirs avaient d'abord", "Ces gens avaient d'abord"),
      ("les noirs ayant assommé", "ces gens ayant assommé"), ("des gens blancs comme moi", "des étrangers comme moi"),
      ("entre les mains des noirs. Mais ces noirs, me dirent-ils", "entre les mains des gens du pays. Mais ces gens-là, me dirent-ils"),
      ("au milieu d'un grand nombre de noirs", "au milieu d'un grand nombre de gens du pays"),
      ("Un des noirs qui entendait", "Un d'eux, qui entendait"), ("Les noirs envoyèrent", "Ils envoyèrent"),
      ("Les noirs me présentèrent", "Ils me présentèrent"),
      ("que le noir renversa la casserole", "que l'homme renversa la casserole"), ("ce noir qui nous est apparu", "cet homme qui nous est apparu"),
      ("quoiqu'il soit né dans un pays où tout le monde est blanc, il ne laisse pas de ressembler à un Éthiopien ; mais il a l'âme", "il a la mine d'un oiseau de malheur, et il a l'âme"),
      # Le cortège d'Aladdin : porteurs et escorte.
      ("portés par un pareil nombre d'esclaves noirs, qui seront conduits par quarante autres esclaves blancs", "portés par un pareil nombre d'esclaves, qui seront conduits par quarante autres esclaves"),
      ("portés par autant d'esclaves noirs, précédés par quarante esclaves blancs", "portés par autant d'esclaves, précédés par quarante autres esclaves"),
      ("des quarante esclaves noirs, chacun chargé", "de quatre-vingts esclaves, quarante d'entre eux chargés chacun"),
      ("Tous ces esclaves, tant noirs que blancs, avec", "Tous ces esclaves, avec"),
      ("un esclave blanc suivi d'un esclave noir, chargé", "un esclave d'escorte suivi d'un porteur, chargé"),
      ("suivant le dernier esclave noir", "suivant le dernier porteur"), ("Le premier esclave blanc", "Le premier esclave"),
      ("entremêlés de blancs et de noirs, eussent", "eussent"), ("les esclaves noirs posèrent chacun", "les porteurs posèrent chacun"),
      ("Les esclaves blancs firent", "Ceux de l'escorte firent"), ("et les noirs, en le faisant", "et les porteurs, en le faisant"),
      ("Les quatre-vingts esclaves blancs et noirs", "Les quatre-vingts esclaves"),
      # Le marchand qui trompe Aladdin : sa religion servait de reproche.
      ("et même plus trompeur que les autres juifs", "et même plus trompeur que tous les autres"),
    ]
    FIXJ = ("Le juif rusé", "Le marchand rusé"), ("le juif", "le marchand"), ("Le juif", "Le marchand"), ("un juif", "un marchand"), ("ce juif", "ce marchand"), ("au juif", "au marchand"), ("du juif", "du marchand")
    tout = json.dumps(C, ensure_ascii=False)
    for a, b in FIX: assert a in tout, a
    for c in C:
        c['head'] = ''
        for a, b in FIX: c['paras'] = [p.replace(a, b) for p in c['paras']]
        if c['n'] == 'XXVI':
            for a, b in FIXJ: c['paras'] = [p.replace(a, b) for p in c['paras']]
            assert 'juif' not in ''.join(c['paras'])
        for p in c['paras']: assert not re.search(r'[_\[\]^{}]|Gutenberg|SANS TITRE|CHAPITRE|Illustration', p) and p.count('*') % 2 == 0, (c['n'], p[:80])
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False, indent=0)
