# montecristo_texte.py ch.json sortie.json : retouches du « Comte de Monte-Cristo » après gut.py (Gutenberg n° 17989
# à 17992, les quatre tomes). Titres sans point final (« La carnaval de Rome » corrigé) ; paragraphes de lettre en
# italique ouverts par « » » remis dans l'ordre « » *…* » ; les trois notes « [*] » du chapitre LXXVII remises à leur
# appel, la note du correcteur d'ELG sans sa mention ; les deux mots grecs du télégraphe (LX), perdus en « [Grec] »,
# rendus ; « Oedipe » → « Œdipe ».
import json, re, sys
C = json.load(open(sys.argv[1], encoding='utf8')); assert len(C) == 117, len(C)
for c in C:
    h = re.sub(r'\.$', '', c['head']).strip()
    c['head'] = {'La carnaval de Rome': 'Le carnaval de Rome'}.get(h, h)
    out = []
    for p in c['paras']:
        p = re.sub(r'^\* »', '» *', p); p = re.sub(r'^»\*', '» *', p)
        if p.startswith('* ') and out and '[*]' in out[-1]:
            n = p[2:].replace(' (Note du correcteur.)', '').strip().rstrip('.')
            out[-1] = out[-1].replace('[*]', '') + ' (*Note : ' + n[0].lower() + n[1:] + '.*)'
            continue
        if p.startswith('* ') and len(out) > 1 and '[*]' in out[-2]:  # note après le paragraphe suivant
            n = p[2:].replace(' (Note du correcteur.)', '').strip().rstrip('.')
            out[-2] = out[-2].replace('[*]', '') + ' (*Note : ' + n[0].lower() + n[1:] + '.*)'
            continue
        if p.startswith('[Grec] '): out[-1] += ' *τῆλε γράφειν*.'; p = p[7:]
        p = re.sub(r'\bOe(?=[a-zé])', 'Œ', p)
        out.append(p)
    c['paras'] = out
    for p in out: assert '[*]' not in p and not p.startswith('* '), p[:80]
json.dump(C, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
