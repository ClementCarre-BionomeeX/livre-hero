# sdd_texte.py pre source.txt dossier/, puis gut.py dossier/p1.txt c1.json, puis sdd_texte.py post c1.json sortie.json :
# retouches de « Sans dessus dessous » (Gutenberg 12533, 3e édition Hetzel 1889).
# Avant gut.py : on part du chapitre I et l'on s'arrête à la « Table » finale ; les notes de Verne, glissées dans le
# texte (« [Note 4: Centième partie d'un dollar.] »), vont entre parenthèses en italique à leur place ; le tiret de la
# saisie (un trait d'union conditionnel, U+00AD) redevient « — » ; les traits d'union suivis d'une espace (« quatre-
# vingt- quatrième », « J.- T. ») se recollent ; l'équation du carnet de Maston (ch. XI) s'écrit avec exposants et
# indices ; la chanson de Paulus (ch. XX) garde ses vers ; le tableau des heures (ch. XIX) devient une ligne par ville (« ¦ », rendu en saut de ligne après gut.py).
# Après gut.py : la seconde ligne du titre (gut.py n'en prend qu'une) sort du texte ; le « A » sans accent en tête de phrase redevient « À », les espaces collés au bord de l'italique en
# sortent (même découpe que drapeau_texte.py), et les fautes de la saisie relevées à la relecture sont corrigées (FIX).
import json, os, re, sys
ROM = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"]
FIX = [('quatre vingt-quatrième', 'quatre-vingt-quatrième'), ('J-T. Maston', 'J.-T. Maston'), ('Evangelina', 'Evangélina'),
       ('Novoié-Vrémia', 'Novoïé-Vrémia'), ('les π , les λ , les ω ,', 'les π, les λ, les ω,'), ('Ses –,', 'Ses −,'),
       ('Ses x se dressaient', 'Ses × se dressaient')]
HEURES = [('Paris', '9 h 40 du soir'), ('Pétersbourg', '11 h 31 du soir'), ('Londres', '9 h 30 du soir'), ('Rome', '10 h 20 du soir'),
          ('Madrid', '9 h 15 du soir'), ('Berlin', '11 h 20 du soir'), ('Constantinople', '11 h 26 du soir'),
          ('Calcutta', '3 h 04 du matin'), ('Nanking', '5 h 05 du matin')]
if sys.argv[1] == 'pre':
    s = open(sys.argv[2], encoding='utf8').read().replace('\r', '')
    s = s[s.index('\nSANS DESSUS DESSOUS\n\nI\n') + 20:s.index('\n\nTable\n\n')] + '\n'
    s = s.replace(' ­ ', ' — ').replace('­', '—')
    s = re.sub(r'(?<=[A-Za-zÀ-ÿ.])- (?=[A-Za-zÀ-ÿ])', '-', s)
    assert s.count('V^2 – V0^2 = 2gr0^2 (1/r – 1/r0)') == 1
    s = s.replace('V^2 – V0^2 = 2gr0^2 (1/r – 1/r0)', '*V*² − *V*₀² = 2*g* *r*₀² (1/*r* − 1/*r*₀)'.replace('*', '_'))
    a = s.index('\n                    +-'); b = s.index('\nÀ Baltimore, on l’a dit')
    s = s[:a + 1] + '¦'.join('À ' + v + ' : ' + h + '.' for v, h in HEURES) + '\n\n' + s[b + 1:]
    a = s.index('\n     Pour modifier notre patraque,'); b = s.index('\n\n', a + 2)  # la chanson de Paulus : un vers par ligne
    s = s[:a + 1] + '¦'.join(l.strip() for l in s[a + 1:b].split('\n')).replace('mettra tout', 'mettre tout') + s[b:]
    def note(m):
        t = re.sub(r'\s+', ' ', m.group(1)).replace('_', '').strip().rstrip('.')
        return ' (_Note : ' + t + '._)'
    s, n = re.subn(r'\s*\[Note \d+:\s*(.*?)\]', note, s, flags=re.S)
    assert n == 20, n
    s = re.sub(r'"([^"]{1,200})"', r'« \1 »', s)
    assert '"' not in s and '[' not in s, s[s.find('['):s.find('[') + 80]
    open(os.path.join(sys.argv[3], 'p1.txt'), 'w', encoding='utf8').write('\n\n\n\n' + s)
    print(n, 'notes'); sys.exit()
C = json.load(open(sys.argv[2], encoding='utf8'))
assert [c['n'] for c in C] == ROM, [c['n'] for c in C]
for c in C:
    out = []
    c['paras'] = c['paras'][1:]  # la seconde ligne du titre de Verne, que gut.py a prise pour un paragraphe
    for p in c['paras']:
        p = re.sub(r'(^|\n|[.!?…»] |— |« )A (?=[a-zéèêàù])', r'\1À ', p)
        p = re.sub(r'(^|\n|— |« )A (?=[A-ZÉ])', r'\1À ', p)
        assert p.count('*') % 2 == 0, (c['n'], p[:80])
        q = p.split('*')
        for i in range(1, len(q), 2):
            m = re.match(r'^(\s*)(.*?)(\s*[?!:;,]?)$', q[i], re.S)
            q[i - 1] += m.group(1); q[i] = m.group(2); q[i + 1] = m.group(3) + q[i + 1]
        p = re.sub(r'(?<=\S)  +', ' ', '*'.join(q)).replace('¦', '\n')
        for a, b in FIX: p = p.replace(a, b)
        p = re.sub(r'\b([XVI]+)ème\b', r'\1e', p)  # « XVIIème siècle » → « XVIIe »
        assert '[' not in p and ']' not in p and '_' not in p and 'Gutenberg' not in p and '­' not in p, (c['n'], p[:80])
        out.append(p)
    c['paras'] = out
assert all(a not in json.dumps(C, ensure_ascii=False) for a, b in FIX)
json.dump(C, open(sys.argv[3], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(len(C), 'chapitres')
