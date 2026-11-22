# terre_texte.py ch.json sortie.json : retouches de « De la Terre à la Lune » (Gutenberg 799) après gut.py.
# Les notes de Verne sont dans le texte entre crochets, à leur appel (« West-Point [École militaire des États-Unis.] ») :
# elles passent entre parenthèses en italique, comme dans les autres livres ; les deux notes à astérisque (« [*] » puis
# un paragraphe « [* …] ») rejoignent leur appel. L'italique à l'intérieur d'une note devient des guillemets.
# L'italique de la saisie en « _ » (la dépêche du chapitre XVII, la note de Long's-Peak du chapitre XXVIII) court sur
# plusieurs paragraphes : chacun est refermé à sa fin et rouvert au suivant. La note signée « J. V. » qui clôt le chapitre IX devient deux paragraphes en italique. Les
# formules TeX de la saisie (\(\pi\)) redeviennent des lettres, le « A » sans accent en tête de phrase redevient « À »,
# et la ligne de licence finale part.
import json, re, sys
C = json.load(open(sys.argv[1], encoding='utf8')); n = 0
def note(t):
    t = re.sub(r'\*([^*]+)\*', r'« \1 »', t.strip()).rstrip()
    return '(*Note : ' + t + '*)'
for c in C:
    ps = [p for p in c['paras'] if not p.startswith('End of the Project Gutenberg')]
    out = []
    for p in ps:
        if p.startswith('[NOTA — '):  # la note de Verne à la fin du chapitre IX, sur deux paragraphes
            out.append('*Nota. — ' + p[8:] + '*'); continue
        if p.endswith('— J. V.]'):
            out.append('*' + p[:-1] + '*'); continue
        m = re.match(r'^\[\* ?(.+)\]$', p)
        if m:  # la note à astérisque du paragraphe précédent
            assert out and '[*]' in out[-1], (c['n'], p[:60])
            out[-1] = out[-1].replace('[*]', ' ' + note(m.group(1)), 1); n += 1; continue
        p, k = re.subn(r'\s*\[(?!\*\])([^\[\]]+)\]', lambda m: ' ' + note(m.group(1)), p); n += k
        p = p.replace('\\(\\pi\\)', 'π').replace('\\(x\\)', '*x*')
        p = re.sub(r'(^|[.!?…»] |— )A (?=[a-zéèêàù])', r'\1À ', p)
        out.append(p)
    it, out2 = False, []
    for p in out:  # l'italique « _ » qui court d'un paragraphe à l'autre
        bits = p.split('_'); q = ('*' if it else '') + bits[0]
        for b in bits[1:]:
            it = not it; q = q.rstrip() + '*' + b if not it else q + '*' + b.lstrip()
        out2.append(q + ('*' if it else ''))
    assert not it, c['n']
    out = out2
    for p in out: assert '[' not in p and ']' not in p and '\\' not in p, (c['n'], p[:80])
    c['paras'] = out
assert len(C) == 28, len(C)
json.dump(C, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
print(n, 'notes')
