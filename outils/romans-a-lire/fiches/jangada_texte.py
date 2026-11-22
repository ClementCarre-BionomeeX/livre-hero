# jangada_texte.py pre source.txt dossier/, puis gut.py dossier/p1.txt c1.json et gut.py dossier/p2.txt c2.json, puis
# jangada_texte.py post c1.json c2.json sortie.json : retouches de « La Jangada » (Gutenberg 14806).
# Avant gut.py : le livre est coupé en ses deux épisodes, dont les chapitres recommencent à « CHAPITRE PREMIER » ; les
# têtes « CHAPITRE DEUXIÈME » deviennent « CHAPITRE II ». Les notes de Verne, rangées en fin de livre et numérotées de
# 1 à 16, vont à leur appel « [n] », entre parenthèses en italique. Les passages de cryptographie des chapitres II12 à
# II19 (le document, les tableaux, les lignes de chiffres et le déchiffrement final) sont remis en lignes, avec leur
# italique refermé ligne à ligne : la saisie avait mêlé les lignes et décalé les « _ ». Les retours à la ligne voulus
# sont marqués « ¦ » avant gut.py et deviennent « \n » après.
# Après gut.py : les chapitres prennent les ids I1…I20 et II1…II20, le « A » sans accent en tête de phrase redevient
# « À », et les fautes de la saisie relevées à la relecture sont corrigées (liste FIX).
import json, os, re, sys
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII",
       "XVIII", "XIX", "XX"]
ORD = ["PREMIER", "DEUXIÈME", "TROISIÈME", "QUATRIÈME", "CINQUIÈME", "SIXIÈME", "SEPTIÈME", "HUITIÈME", "NEUVIÈME",
       "DIXIÈME", "ONZIÈME", "DOUZIÈME", "TREIZIÈME", "QUATORZIÈME", "QUINZIÈME", "SEIZIÈME", "DIX-SEPTIÈME",
       "DIX-HUITIÈME", "DIX-NEUVIÈME", "VINGTIÈME"]
DOC = ["Phyjslyddqfdzxgasgzzqqehxgkfndrxujugiocytdxvksbxhhuypo", "hdvyrymhuhpuydkjoxphetozsletnpmvffovpdpajxhyynojyggayme",
       "qynfuqlnmvlyfgsuzmqiztlbqgyugsqeubvnrcredgruzblrmxyuhqhp", "zdrrgcrohepqxufivvrplphonthvddqfhqsntzhhhnfepmqkyuuexktog",
       "zgkyuumfvijdqdpzjqsykrplxhxqrymvklohhhotozvdksppsuvjhd"]
def lignes(*ls): return '¦\n'.join(ls)  # des lignes gardées telles quelles (« ¦ » → retour à la ligne après gut.py)
BLOCS = [  # (texte de la saisie, texte remis en ordre)
    ('_«' + '\n'.join(DOC) + '.»_', lignes('«_' + DOC[0] + '_', *['_' + d + '_' for d in DOC[1:4]], '_' + DOC[4] + '_.»')),
    ('«_' + '\n'.join(DOC) + '_.»', lignes('«_' + DOC[0] + '_', *['_' + d + '_' for d in DOC[1:4]], '_' + DOC[4] + '_.»')),
    ("la _Santa-Ana__ _sur", "la _Santa-Ana_ sur"),
    ("Ainsi donc, admettons, sauf modification ultérieure, que _h\n_signifie _a_ ou _o_.»",
     "Ainsi donc, admettons, sauf modification ultérieure, que _h_\nsignifie _a_ ou _o_.»"),
    ("_h _= 23 fois.\n\n_y _=19--\n\n_u _=17--\n\n_d p q _=16--_g v _=13--_o r x z _=12--_f s _=10--_e k l\nn p _= 9--_j t _= 8--_b i _= 4--_a c _= 3--",
     lignes("_h_ = 23 fois.", "_y_ = 19 —", "_u_ = 17 —", "_d p q_ = 16 —", "_g v_ = 13 —", "_o r x z_ = 12 —", "_f s_ = 10 —",
            "_e k l n p_ = 9 —", "_j t_ = 8 —", "_b i_ = 4 —", "_a c_ = 3 —")),
    ("_L e j u g e J a r r i q u e z e s t d o u é d' u n e s p r i t t\nr è s i n g é n i e u x_",
     "_L e j u g e J a r r i q u e z e s t d o u é d' u n e s p r i t t r è s i n g é n i e u x_"),
    ("Voici ce que cela donne: _Le juge Jarriquez est doué d'un esprit\ntrès ingénieux _42 3423 423423423 423 4234 234 234234 2342\n342342342",
     "Voici ce que cela donne:\n\n" + lignes("_Le juge Jarriquez est doué d'un esprit très ingénieux_", "42 3423 423423423 423 4234 234 234234 2342342342")),
    ("_l _moins 4 égale _p e _--2= _g j _--3= _m u _--4= _z g _--2= _i\ne _--3= _h_",
     lignes("_l_ moins 4 égale _p_", "_e_ — 2 = _g_", "_j_ — 3 = _m_", "_u_ — 4 = _z_", "_g_ — 2 = _i_", "_e_ — 3 = _h_")),
    ("_z _moins 3 égale _c._", "_z_ moins 3 égale _c_."),
    ("«Entre _n _et _j _on compte 4 lettres.--_c _--_a _--2----_u\n_--_r _--3----_v _--_r _--4----_k _--_i _--2----_t _--\n_q _--3----_z _--_u _--4----_g _--_e _--2----_c _--_z\n_--3--",
     "«Entre _n_ et _j_ on compte 4 lettres.\n\n" + lignes("_c_ — _a_ — 2", "_u_ — _r_ — 3", "_v_ — _r_ — 4", "_k_ — _i_ — 2",
                                                            "_t_ — _q_ — 3", "_z_ — _u_ — 4", "_g_ — _e_ — 2", "_c_ — _z_ — 3")),
    ("_P _= _D_\n\n_h _= _a_\n\n_y _= _c_\n\n_j _= _o_\n\n_s _= _s_\n\n_l _= _t_\n\n_y _= _a_",
     lignes("_P_ = _D_", "_h_ = _a_", "_y_ = _c_", "_j_ = _o_", "_s_ = _s_", "_l_ = _t_", "_y_ = _a_")),
    ("1804    1804    1804\n\n_phyj_    _slyd_    _dqfd_", lignes("1804 · 1804 · 1804", "_phyj_ · _slyd_ · _dqfd_")),
    ("_o.yf_    _rdy._    _cif. _ce qui ne signifiait rien!", "_o.yf_ · _rdy._ · _cif._\n\nce qui ne signifiait rien!"),
    ("1826    1826    1826\n\n_Phyj_    _slyd_    _dqfd_", lignes("1826 · 1826 · 1826", "_Phyj_ · _slyd_ · _dqfd_")),
    ("_o.vd_    _rdv._     _cid._", "_o.vd_ · _rdv._ · _cid._"),
    ("834    834    834    834\n\n_phy_    _jsl_    _ydd_    _qfd_", lignes("834 · 834 · 834 · 834", "_phy_ · _jsl_ · _ydd_ · _qfd_")),
    ("_het_    _bph_    _pa._     _ic._", "_het_ · _bph_ · _pa._ · _ic._"),
    ("_O r t e g a P h y j s l_", lignes("_O r t e g a_", "_P h y j s l_")),
    ("432513432513432513432513\n\n_Phyjslyddqfdzxgasgzzqqeh_", lignes("432513432513432513432513", "_Phyjslyddqfdzxgasgzzqqeh_")),
    ("""_Le véritable auteur du vol des diamants et de_

43 251343251 343251 34 325 134 32513432 51 34

_Ph yjslyddqf dzxgas gz zqq ehx gkfndrxu ju gi l'assassinat des
soldats qui escortaient le convoi,_

32513432513 432 5134325 134 32513432513 43 251343

_ocytdxvksbx hhu ypohdvy rym huhpuydkjox ph etozsl commis dans la
nuit du vingt-deux janvier mil huit_

251343 2513 43 2513 43 251343251 3432513 432 5134

_etnpmv ffov pd pajx hy ynojyggay meqynfu qln mvly cent vingt-six,
n'est donc pas Joam Dacosta, injustement_

3251 34325134 3251 3432 513 4325 1343251 34325134325

_fgsu zmqiztlb qgyu gsqe ubv nrcr edgruzb lrmxyuhqhpz condamné à
mort; c'est moi, le misérable employé de_

13432513 4 3251 3432 513 43 251343251 3432513 43

_drrgcroh e pqxu fivv rpl ph onthvddqf hqsntzh hh
l'administration du district diamantin; oui, moi seul,_

251343251343251 34 32513432 513432513 432 513 4325

_nfepmqkyuuexto gz gkyuumfv ijdqdpzjq syk rpl xhxq_

_qui signe de mon vrai nom, Ortega._

134 32513 43 251 3432 513 432513

_rym vkloh hh oto zvdk spp suvjhd._""",
     '\n\n'.join(lignes('_' + a + '_', b, '_' + c + '_') for a, b, c in [
         ("Le véritable auteur du vol des diamants et de", "43 251343251 343251 34 325 134 32513432 51 34", "Ph yjslyddqf dzxgas gz zqq ehx gkfndrxu ju gi"),
         ("l'assassinat des soldats qui escortaient le convoi,", "32513432513 432 5134325 134 32513432513 43 251343", "ocytdxvksbx hhu ypohdvy rym huhpuydkjox ph etozsl"),
         ("commis dans la nuit du vingt-deux janvier mil huit", "251343 2513 43 2513 43 251343251 3432513 432 5134", "etnpmv ffov pd pajx hy ynojyggay meqynfu qln mvly"),
         ("cent vingt-six, n'est donc pas Joam Dacosta, injustement", "3251 34325134 3251 3432 513 4325 1343251 34325134325", "fgsu zmqiztlb qgyu gsqe ubv nrcr edgruzb lrmxyuhqhpz"),
         ("condamné à mort ; c'est moi, le misérable employé de", "13432513 4 3251 3432 513 43 251343251 3432513 43", "drrgcroh e pqxu fivv rpl ph onthvddqf hqsntzh hh"),
         ("l'administration du district diamantin ; oui, moi seul,", "251343251343251 34 32513432 513432513 432 513 4325", "nfepmqkyuuexto gz gkyuumfv ijdqdpzjq syk rpl xhxq"),
         ("qui signe de mon vrai nom, Ortega.", "134 32513 43 251 3432 513 432513", "rym vkloh hh oto zvdk spp suvjhd."),
     ])),
]
FIX = [('Marafion', 'Marañon'), ('Marânon', 'Marañon'), ('millions de cantos', 'millions de contos'),
       ('la jandaga', 'la jangada'), ("n'yen a pas", "n'y en a pas"), ('ses convents', 'ses couvents'),
       ('« prororoca »', '« pororoca »'), ('iguarapès', 'iguarapés')]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    for a, b in BLOCS:
        assert a in s, a[:60]; s = s.replace(a, b)
    k = s.index('\n    [1] 1 000 reis'); e = s.index('End of the Project Gutenberg'); notes = {}
    for m in re.finditer(r'^\s+\[(\d+)\]\s+(.*?)(?=^\s+\[\d+\]|\Z)', s[k:e], flags=re.M | re.S):
        notes[m.group(1)] = re.sub(r'\s+', ' ', m.group(2)).strip().rstrip('.')
    assert len(notes) == 16, len(notes)
    s = s[:k] + '\n'
    for n, t in notes.items():
        assert s.count('[' + n + ']') == 1, n
        s = s.replace('[' + n + ']', ' (_Note : ' + t + '._)')
    for i, o in enumerate(ORD): s = re.sub(r'^CHAPITRE ' + o + r'$', 'CHAPITRE ' + ROM[i], s, flags=re.M)
    a = s.index('\nPREMIER ÉPISODE\n\n\n\nCHAPITRE I\n'); b = s.index('\nDEUXIÈME ÉPISODE\n', a)
    open(os.path.join(sys.argv[3], 'p1.txt'), 'w', encoding='utf8').write(s[a:b].replace('PREMIER ÉPISODE', ''))
    open(os.path.join(sys.argv[3], 'p2.txt'), 'w', encoding='utf8').write(s[b:].replace('DEUXIÈME ÉPISODE', '') + '\n')
    print(len(notes), 'notes'); sys.exit()
C = []
for part, f in (('I', sys.argv[2]), ('II', sys.argv[3])):
    cs = json.load(open(f, encoding='utf8'))
    assert [c['n'] for c in cs] == ROM, [c['n'] for c in cs]
    for c in cs:
        c['n'] = part + str(ROM.index(c['n']) + 1); C.append(c)
for c in C:
    out = []
    for p in c['paras']:
        p = p.replace('¦ ', '\n').replace('¦', '\n')
        p = re.sub(r'(^|\n|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        for a, b in FIX: p = p.replace(a, b)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
assert all(a not in json.dumps(C, ensure_ascii=False) for a, b in FIX)
assert len(C) == 40
json.dump(C, open(sys.argv[4], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
