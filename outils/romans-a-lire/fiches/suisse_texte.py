# suisse_texte.py pre oeuvres_1.xml suisse.xml | post ch.json suisse.xml sortie.json : « Impressions de voyage en Suisse »
# d'Alexandre Dumas (1833-1837), d'après l'édition numérique de la Bibliothèque numérique romande pour Ebooks libres et
# gratuits (dépôt petrul/universal-literature-tei, fr/ebooks_libres_et_gratuits/dumas,alexandre_pere-oeuvres_1.xml).
# pre : garde seulement la <div1> du voyage en Suisse (le fichier réunit plusieurs œuvres) ; elg.py la découpe (div3).
# post : l'« Exposition » (la préface de Dumas, sautée par elg.py faute de numéro) devient le chapitre « P » ; la « Note
# Interlaken » (conseils d'équipement) devient un dernier chapitre « N » ; les pages de l'éditeur numérique (« Ce livre
# numérique », « Avertissement ») restent dehors. Les numéros fautifs de la source (« XV » pour XXV, « XLVI » et « XLVII »
# donnés dans le mauvais ordre, remis à leur place, « XXVIII » pour L, « LVIII » pour LXVIII) sont ôtés des titres : elg.py renumérote d'un bout à l'autre.
# Les notes de l'éditeur numérique sur « Cormondes » et le « fonwind » sont retirées (la seconde devient « , le fœhn ») ; celle
# sur la publication en revue est attribuée à l'éditeur ; le renvoi « à la fin du volume » vise la note sur Interlaken.
# Deux retouches, dites dans la notice : l'homme de la montagne que Dumas traite de « double crétin » devient « un petit
# homme de la montagne », et le domestique noir de l'oncle anglais, désigné par sa couleur, devient « son valet ».
# Les traits « * » ou « ____ » qui séparent deux inscriptions ou deux lettres deviennent « * * * ».
import json, re, sys, xml.etree.ElementTree as ET
NS = '{http://www.tei-c.org/ns/1.0}'
def head(d):
    h = d.find(NS + 'head'); return ' '.join(''.join(h.itertext()).split()) if h is not None else ''
if sys.argv[1] == 'pre':
    ET.register_namespace('', NS[1:-1])
    body = ET.parse(sys.argv[2]).getroot().find('.//' + NS + 'body')
    d = next(x for x in body if head(x).startswith('Impressions de voyage en Suisse'))
    new = ET.Element(NS + 'TEI'); ET.SubElement(new, NS + 'body').append(d)
    ET.ElementTree(new).write(sys.argv[3], encoding='utf-8')
else:
    sys.path.insert(0, sys.argv[0].rsplit('/', 1)[0] + '/..'); from typo import typo
    C = json.load(open(sys.argv[2]))
    root = ET.parse(sys.argv[3]).getroot()
    def paras(name):
        d = next(x for x in root.iter(NS + 'div') if head(x).startswith(name))
        out = []
        for p in d.findall(NS + 'p'):
            t = ' '.join(''.join(p.itertext()).split())
            t = re.sub(r'^[–-]\s*', '— ', t); t = re.sub(r'\s*–\s*', ' — ', t)
            if t: out.append(typo(t))
        return out
    assert len(C) == 69 and C[-1]['head'] == 'Épilogue', (len(C), C[-1]['head'])
    for c in C:
        c['head'] = re.sub(r'^(V|I|LVI|XVIII|VIII) (?=[A-ZÉ])', '', c['head']) if c['n'] in ('XXV', 'XLVI', 'XLVII', 'L', 'LXVIII') else c['head']
    ROM = [c['n'] for c in C]
    # « Zurich » (XLVI chez Dumas) vient avant « Les muets qui parlent » (XLVII) : la source les donne dans l'autre ordre
    i = next(k for k, c in enumerate(C) if c['head'].startswith('Les muets')); assert C[i + 1]['head'] == 'Zurich'
    C[i], C[i + 1] = C[i + 1], C[i]
    for k, c in enumerate(C): c['n'] = ROM[k]
    C = [{'n': 'P', 'head': 'Exposition', 'paras': paras('Exposition')}] + C + [{'n': 'N', 'head': 'Note : Interlaken', 'paras': paras('Note Interlaken')}]
    FIX = [('une espèce de nain de montagne, double crétin,', 'un petit homme de la montagne,'),
           ('son chasseur et son nègre étaient à mes ordres', 'son chasseur et son valet étaient à mes ordres'),
           ('que son nègre lui eut allumé sa pipe', 'que son valet lui eut allumé sa pipe')]
    done = set()
    for c in C:
        for k, p in enumerate(c['paras']):
            for a, b in FIX:
                if a in p: p = p.replace(a, b); done.add(a)
            c['paras'][k] = p
    assert done == {a for a, b in FIX}, done
    for c in C:
        c['head'] = ''
        c['paras'] = [p.replace(" (*Note de l'auteur : cormondes (note des éd. Bourlapapey).*)", '')
                      .replace('(*fonwindLe Foehn (note des éd. Bourlapapey)*)', '(*fonwind*, le fœhn)')
                      .replace("(*Note de l'auteur : la première partie", "(*Note de l'éditeur : la première partie").replace(' 1836. NdE.*)', ' 1836.*)')
                      .replace("voir la note à la fin du volume", "voir la note sur Interlaken, à la fin du livre") for p in c['paras']]
        c['paras'] = ['* * *' if re.match(r'^(\*|_+)$', p) else p for p in c['paras']]
        for p in c['paras']:
            assert not re.search(r'[_\[\]^{}§]|FIGURE|ebooks|Bourlapapey', p) and (p == '* * *' or p.count('*') % 2 == 0), (c['n'], p[:80])
    json.dump(C, open(sys.argv[4], 'w'), ensure_ascii=False, indent=0)
