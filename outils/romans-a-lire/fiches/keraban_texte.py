# keraban_texte.py pre tome1.txt tome2.txt dossier/, puis gut.py dossier/p1.txt c1.json et gut.py dossier/p2.txt c2.json, puis
# keraban_texte.py post c1.json c2.json sortie.json : retouches de « Kéraban-le-Têtu » (Gutenberg 8174 et 8175).
# Avant gut.py : chaque tome est une partie, dont les chapitres recommencent à I ; on garde le texte du premier
# chapitre à « FIN DE LA … PARTIE ». Les notes de Verne, écrites dans le texte « [note: …] » ou « [Footnote: …] »,
# passent entre parenthèses en italique à leur place.
# Après gut.py : les chapitres prennent les ids I1…I17 et II1…II16, le « A » sans accent en tête de phrase redevient « À »,
# et les fautes de la saisie relevées à la relecture sont corrigées (liste FIX).
import json, os, re, sys
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII"]
FIX = [('Avoirlaissé', 'Avoir laissé'), ('Constantinopple', 'Constantinople'), ('répondit Keraban', 'répondit Kéraban'),
       ('anciensfauchards', 'anciens fauchards'), ('antiquePont-Euxin', 'antique Pont-Euxin'), ('bourgadesans', 'bourgade sans'),
       ('cesgens-là', 'ces gens-là'), ('cettehonorable', 'cette honorable'), ('comportentles', 'comportent les'),
       ('consanisances', 'connaissances'), ('engagevivement', 'engage vivement'), ('importaitde', 'importait de'),
       ('leurstresses', 'leurs tresses'), ('portièresdes', 'portières des'), ('traduisaientpar', 'traduisaient par'),
       ('vousdévouer', 'vous dévouer'), ('demi-lieue-environ', 'demi-lieue environ'), ('moi-môme', 'moi-même'),
       ("n'est méme", "n'est même"), ('repondit', 'répondit'), ('réfusez', 'refusez'), ('régardait', 'regardait'),
       ('seigueur', 'seigneur'), ('soigneur Kéraban', 'seigneur Kéraban'), ('soucils', 'sourcils'),
       ('préssentissement', 'pressentiment'), ('sérré', 'serré'), ('operation', 'opération'), ('grommelat-il', 'grommela-t-il'),
       ('murmurat-il', 'murmura-t-il'), ('ses affai les', 'ses affaires les'), ('aggressive', 'agressive'),
       ('fit-Kéraban', 'fit Kéraban'), ('ce chef-Ahmet', 'ce chef Ahmet'), ('Àhmet', 'Ahmet'), ('soir-la', 'soir-là'),
       ('êchassiers', 'échassiers'), ('grêcque', 'grecque'), ('chauvre', 'chanvre'), ('caxerne', 'caserne'),
       ('seul et mémo', 'seul et même'), ("s'il te plait", "s'il te plaît"), ('de cot animal', 'de cet animal'),
       ('ce doit-être', 'ce doit être'), ('est parté', 'est partie'), ('ou garele', 'ou gare le'), ('méridonale', 'méridionale'),
       ('— -Rien', '— Rien'), ('Croyez-bien', 'Croyez bien'), ('les quatres', 'les quatre'), ('II faut', 'Il faut'),
       ('disposé a cet', 'disposé à cet'), ('environ a faire', 'environ à faire'), ('pour tacher de', 'pour tâcher de'),
       ('Epouser', 'Épouser'), ('seigneur Yanav', 'seigneur Yanar'), ('Van Milieu', 'Van Mitten'), ('décria Ahmet', "s'écria Ahmet"), ('du 20 au 2l août', 'du 20 au 21 août'), ('Nebjeb', 'Nedjeb'), ('Nedjed', 'Nedjeb'),
       ('Scarpanto', 'Scarpante'), ('professeur Bupp', 'professeur Bopp'), ('répondît Van Mitten', 'répondit Van Mitten'),
       ('au tonne de', 'au terme de'), ('11 s\'avança', 'Il s\'avança'), ('celle épreuve', 'cette épreuve'),
       ('empêchés dépasser', 'empêchés de passer'), ("m'en-vais", "m'en vais"), ("cri d'épouvanté", "cri d'épouvante"),
       ('comme sont « mitan »', 'comme son « mitan »'), ('les choses se passeront', 'les choses se passèrent'),
       ('la Cartilage', 'la Carthage'), ('à coup sur', 'à coup sûr'), ('très sur,', 'très sûr,'), ('pour la prix', 'pour le prix'),
       ('visite a la', 'visite à la'), ('superstitieux a l', 'superstitieux à l'), ('assirent a la', 'assirent à la'),
       ('attenter a l', 'attenter à l'), ('mêler a la', 'mêler à la'), ('mais a une', 'mais à une'), ('Epousez', 'Épousez'), ('Etait-ce', 'Était-ce'), ("l'Egypte", "l'Égypte")]
def notes(s):
    n = [0]
    def rep(m):
        n[0] += 1; return ' (_Note : ' + re.sub(r'\s+', ' ', m.group(1)).strip().rstrip('.') + '._)'
    return re.sub(r'\s*\[(?:note|Footnote):\s*(.*?)\]', rep, s, flags=re.S), n[0]
if sys.argv[1] == 'pre':
    tot = 0
    for src, head, fin, out in ((sys.argv[2], '\nPREMIERE PARTIE\n', '\nFIN DE LA PREMIÈRE PARTIE', 'p1.txt'),
                                (sys.argv[3], '\nDEUXIÈME PARTIE\n', '\nFIN DE LA DEUXIÈME PARTIE', 'p2.txt')):
        s = open(src, encoding='utf8').read().replace('\r', '')
        a = s.index(head); b = s.index(fin, a); s, n = notes(s[a + len(head):b]); tot += n
        open(os.path.join(sys.argv[4], out), 'w', encoding='utf8').write('\n\n' + s + '\n')
    print(tot, 'notes'); sys.exit()
C = []
for part, f, n in (('I', sys.argv[2], 17), ('II', sys.argv[3], 16)):
    cs = json.load(open(f, encoding='utf8'))
    assert [c['n'] for c in cs] == ROM[:n], [c['n'] for c in cs]
    for c in cs:
        c['n'] = part + str(ROM.index(c['n']) + 1); C.append(c)
for c in C:
    out = []
    for p in c['paras']:
        p = re.sub(r'(^|\n|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        p = re.sub(r'(^|\n|— |« )A (?=[A-ZÉ])', r'\1À ', p)  # « — A Scutari ? »
        p = re.sub(r"\ba (?=[A-ZÉ]|[a-zé]+er\b)", 'à ', p)  # « a Constantinople », « a dresser » : relevé un par un
        for a, b in FIX: p = p.replace(a, b)
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
assert all(a not in json.dumps(C, ensure_ascii=False) for a, b in FIX)
assert len(C) == 33
json.dump(C, open(sys.argv[4], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
