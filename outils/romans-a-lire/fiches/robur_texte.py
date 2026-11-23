# robur_texte.py post ch.json ch2.json : retouches de « Robur-le-Conquérant » (Gutenberg 5126, miroir français).
# La saisie date de 2002 et sort d'une reconnaissance de caractères : les « À » et les majuscules accentuées manquent
# (« A l'avant », « Etats-Unis », « Equateur »), des apostrophes ont sauté (« Je n en soutiens ») et quelques lettres
# ont été lues de travers (« PhilEvans », « Durnont d'Urville »). FIX corrige ce que la relecture a relevé ; le reste
# est fait par expressions régulières. Les deux dernières lignes du dernier chapitre (« Fin de Robur-le-Conquérant »
# et la ligne du Projet Gutenberg) sont retirées.
import json, re, sys

# pre : le titre de chaque chapitre tient sur deux ou trois lignes dans la saisie, et gut.py n'en garde que la
# première, le reste passant pour un paragraphe. On le remplace par « SANS TITRE » : la fiche donne les titres courts
# qui s'affichent. La dernière ligne du roman
# (« Fin de Robur-le-Conquérant ») devient « FIN », où gut.py s'arrête.
if sys.argv[1] == 'pre':
    L = open(sys.argv[2], encoding='utf8').read().replace('\r', '').split('\n')
    out = []; i = 0
    while i < len(L):
        out.append(L[i])
        if re.match(r'^\s*[IVXL]+\s*$', L[i]) and i + 2 < len(L) and not L[i + 1].strip() and L[i + 2].strip():
            out.append(''); i += 2; t = []
            while i < len(L) and L[i].strip(): t.append(L[i].strip()); i += 1
            out.append('SANS TITRE'); continue  # les titres de Verne, longs de deux lignes, sont remplacés par ceux de la fiche
        i += 1
    s = '\n'.join(out).replace('\nFin de Robur-le-Conquérant\n', '\nFIN\n')
    open(sys.argv[3], 'w', encoding='utf8').write(s); print(len(out), 'lignes'); sys.exit()

FIX = [
    ("« Je n en soutiens pas moins", "« Je n'en soutiens pas moins"),
    ("et, 51 l'enquête", "et, si l'enquête"),
    ("s'écria PhilEvans", "s'écria Phil Evans"),
    ("sa physionomie n a rien", "sa physionomie n'a rien"),
    ("ce n est pas un capitaine", "ce n'est pas un capitaine"),
    ("oblique à la couche d air", "oblique à la couche d'air"),
    ("àcause de la raréfaction", "à cause de la raréfaction"),
    ("ce point noir àl'horizon", "ce point noir à l'horizon"),
    ("s'étaient portés àl'avant", "s'étaient portés à l'avant"),
    ("il y àvait toujours", "il y avait toujours"),
    ("est de 136051 371 kilomètres", "est de 136 051 371 kilomètres"),
    ("par Durnont d'Urville", "par Dumont d'Urville"),
    ("les Etats-Unis Occupent", "les États-Unis occupent"),
    ("n'a pas besoin d'être presenté", "n'a pas besoin d'être présenté"),
    ("fait ce qu on ne pourra", "fait ce qu'on ne pourra"),
    ("voulait être nomme", "voulait être nommé"),
    ("Eh ! si ne n'était", "Eh ! si ce n'était"),
    ("En ce moment ;", "En ce moment,"),
    ("un des prix monthyon", "un des prix Montyon"),
    ("la mer qui est dessous ¶", "la mer qui est dessous ?"),
    ("S'il vous plaît. ¶ — Eh bien, du droit", "S'il vous plaît. — Eh bien, du droit"),
    ("Et de quel droit, master Robur ?.", "Et de quel droit, master Robur ?"),
    ("— Vous voulez le savoir ?.", "— Vous voulez le savoir ?"),
    ("soit à biaiser avec le vent, Soit à remonter", "soit à biaiser avec le vent, soit à remonter"),
    ("construire plus de Soixante appareils", "construire plus de soixante appareils"),
    ("lentement mais Sûrement", "lentement mais sûrement"),
    ("Point, Uncle Prudent : Ces parois", "Point, Uncle Prudent : ces parois"),
    ("Dans ces conditions. Uncle Prudent", "Dans ces conditions, Uncle Prudent"),
    ("Miss Doit et Miss Mat", "Miss Doll et Miss Mat"),
    ("— Ecoutez-moi", "— Écoutez-moi"),
    ("L'Etoile du Désert", "L'Étoile du Désert"),
    ("les Egyptiens", "les Égyptiens"),
    ("l'Amériqué du Sud", "l'Amérique du Sud"),
    ("au Sommet du temple", "au sommet du temple"),
    ("toujours cette question Qu'est-ce que ce Robur", "toujours cette question : qu'est-ce que ce Robur"),
    ("cent cinquante lieues à l'heure -'", "cent cinquante lieues à l'heure —"),
    ("Ni moi, dit Uncle Prudent", "— Ni moi, dit Uncle Prudent"),
    ("L'*Albatros I…*", "L'*Albatros* !…"),
    # la saisie a semé des points là où le livre n'en a pas, et perdu la majuscule de quelques débuts de phrase
    ("rien de pratique. n'avait été obtenu", "rien de pratique n'avait été obtenu"),
    ("de son nom de famille. quant au", "de son nom de famille. Quant au"),
    ("s'était mis à l'œuvre. quand il s'agit", "s'était mis à l'œuvre. Quand il s'agit"),
    ("mètres cubes. que jaugeait", "mètres cubes. Que jaugeait"),
    ("devant une autre. quand je me suis fixé", "devant une autre. Quand je me suis fixé"),
    ("de l'atteindre. quand j'ai une idée", "de l'atteindre. Quand j'ai une idée"),
    ("l'assemblée partit. quelle bordée", "l'assemblée partit. Quelle bordée"),
    ("point d'appui solide. qu'on imprime", "point d'appui solide. Qu'on imprime"),
    ("main-forte. quand nous avons quitté", "main-forte. Quand nous avons quitté"),
    ("s'en émouvoir. pour peu qu'il", "s'en émouvoir. Pour peu qu'il"),
    ("incombustible. quant aux divers organes", "incombustible. Quant aux divers organes"),
    ("transes continuelles. qu'on y songe", "transes continuelles. Qu'on y songe"),
    ("jamais visitée. quelques forts", "jamais visitée. Quelques forts"),
    ("ce cours d'eau. quelle variété", "ce cours d'eau. Quelle variété"),
    ("aussitôt aperçu. quelques têtes", "aussitôt aperçu. Quelques têtes"),
    ("les « cars américains. quelques-uns même n'hésitèrent. pas", "les « cars américains ». Quelques-uns même n'hésitèrent pas"),
    ("hurrahs coururent. à travers", "hurrahs coururent à travers"),
    ("à son extrême courbure. si sa direction", "à son extrême courbure, si sa direction"),
    ("Cependant, les. yeux rougis pas l'insomnie", "Cependant, les yeux rougis par l'insomnie"),
    ("la javeline-bombe. dont il y avait", "la javeline-bombe, dont il y avait"),
    ("En dehors de la région. des calmes", "En dehors de la région des calmes"),
    ("durent se retenir. aux montants", "durent se retenir aux montants"),
    ("s'était accroché à. la petite pièce", "s'était accroché à la petite pièce"),
    ("Tout indiquait que. l'*Albatros*", "Tout indiquait que l'*Albatros*"),
    ("l'engin explosif. dérobé", "l'engin explosif, dérobé"),
    ("que l'*Albatros* ne. fût pas emporté", "que l'*Albatros* ne fût pas emporté"),
    ("sous les. grands bouquets", "sous les grands bouquets"),
    ("en s élevant", "en s'élevant"),
    ("la ligue des épaules", "la ligne des épaules"),
    ("une obsession se venger", "une obsession : se venger"),
    ("chaque syllabe de sa phrase : Un instant après", "chaque syllabe de sa phrase. Un instant après"),
    ("Et, là-dessus : Tom Turner rentra", "Et, là-dessus, Tom Turner rentra"),
    ("« à faire ses vingt-huit jours » Frycollin", "« à faire ses vingt-huit jours ». Frycollin"),
    ("réfléchi à ceci dès que", "réfléchi à ceci : dès que"),
    ("des parachutes en cas d'accident ? Non Il ne croyait pas", "des parachutes en cas d'accident ? Non ! Il ne croyait pas"),
]
# majuscules accentuées que la saisie a laissées nues
ACC = [(r"\bEtats\b", "États"), (r"\bEtat\b", "État"), (r"\bEquateur\b", "Équateur"), (r"\bEcosse\b", "Écosse"),
       (r"\bEgypte\b", "Égypte"), (r"\bEdimbourg\b", "Édimbourg"), (r"\bEthiopie\b", "Éthiopie"),
       (r"\bErié\b", "Érié"), (r"\bEvidem(?=ment)", "Évidem"), (r"\bEtait(?=-)", "Était"),
       (r"\bEtes\b", "Êtes"), (r"\bEgalement\b", "Également")]

C = json.load(open(sys.argv[2], encoding='utf8'))
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII"]
assert [c['n'] for c in C] == ROM, [c['n'] for c in C]
C[-1]['paras'] = [p for p in C[-1]['paras'] if not p.startswith('Fin de Robur') and 'Project Gutenberg' not in p]
n = 0
for c in C:
    out = []
    for p in c['paras']:
        for a, b in FIX:
            if a in p: p = p.replace(a, b); n += 1
        for a, b in ACC: p = re.sub(a, b, p)
        # « A » seul en tête de phrase ou de réplique : c'est « À » (A l'avant, A ce moment, A bord…)
        p = re.sub(r"(^|[.!?…»:] |— )A(?= [a-zà-ÿ'])", lambda m: m.group(1) + 'À', p)
        p = re.sub(r"(^|[.!?…»:] |— )A(?=\s*l')", lambda m: m.group(1) + 'À', p)
        p = re.sub(r"(^|[.!?…»:] |— )A(?= [A-ZÀ-Ö])", lambda m: m.group(1) + 'À', p)
        p = re.sub(r"« A(?= [a-zà-ÿA-ZÀ-Ö])", '« À', p)
        # notes de Verne, que gut.py laisse entre crochets : en italique, comme dans les autres livres
        p = re.sub(r"\s*\*\[([^\]]*)\]\*", lambda m: ' (*Note : ' + m.group(1).strip().rstrip('.') + '.*)', p)
        # points de suspension abîmés par la saisie (« ?.. », « !.., », « ! . »)
        p = re.sub(r"([!?])\.\.", r"\1…", p).replace("! .", " !…").replace("..,", "…,").replace("..,", "…,")
        p = re.sub(r"(?<=[a-zà-ÿ])\.\.(?=,| s')", "…", p)
        # tirets d'incise : la saisie met « - » là où le livre met un tiret cadratin
        p = re.sub(r"(?<=\S) - (?=\S)", " — ", p)
        p = re.sub(r"(?<= )-(?=\S)", "— ", p)
        p = p.replace(" — ,", " —,").replace(" — .", " —.")
        p = re.sub(r" +", " ", p).strip()
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p, (c['n'], p[:90])
        out.append(p)
    c['paras'] = out
json.dump(C, open(sys.argv[3], 'w', encoding='utf8'), ensure_ascii=False)
print(n, 'corrections', sum(len(c['paras']) for c in C), 'paragraphes')
