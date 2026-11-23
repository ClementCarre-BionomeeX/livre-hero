# quarantecinq_texte.py pre t1 t2 t3 sortie.txt titres.json | post ch.json titres.json sortie.json : retouches des
# « Quarante-Cinq » (Gutenberg n° 7770 à 7772, miroir orkeilius/gutenberg_fr_mirror, trois tomes numérotés à la suite).
# pre : un chapitre commence par une ligne qui ne porte que son numéro romain, après une ligne vide, suivie du titre
# en capitales ; la saisie a des fautes de numéro (XXVI pour XXXVI, XLII deux fois, XLIV pour LXIV, LIXXVII), on
# renumérote donc d'un trait (« CHAPITRE N. ») ; les titres viennent des tables des matières (titres.json).
# post : les titres des tables reviennent sur leurs chapitres ; les légendes des gravures [Illustration : …] s'en vont ; la note de Dumas va entre parenthèses ; le compte des portes (III) passe sur une ligne ; contrôles (91 chapitres, plus de crochets ni de soulignés).
import json, re, sys
N = 91
def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
def capitales(l):  # une ligne de titre : presque toute en capitales (l'italique _Turennius_ mis à part)
    l = re.sub(r'_[^_]*_', '', l); lo = sum(ch.islower() for ch in l); up = sum(ch.isupper() for ch in l)
    return up > 2 and lo <= up / 5
def pre(*a):
    *srcs, out, tit = a; T = []; parts = []; n = 0
    for src in srcs:
        t = open(src, encoding='utf8').read().replace('\r', '')
        k = t.index('TABLE DES MATI'); toc = t[k:t.index('End of Project Gutenberg', k)]
        for m in re.finditer(r'(?ms)^([IVXLC]+)\.\s+(.*?)(?=\n[IVXLC]+\.\s|\n\s*\n|\Z)', toc): T.append(re.sub(r'\s+', ' ', m.group(2)).strip())
        L = t[:k].split('\n'); B = []; on = False
        for i, l in enumerate(L):
            s = l.strip()
            if re.fullmatch(r'[IVXLC]+\.?', s) and not L[i - 1].strip() and capitales(next(x for x in L[i + 1:i + 5] if x.strip())):
                n += 1; on = True; B.append('CHAPITRE %s.' % roman(n)); continue
            if on: B.append(l)
        parts.append('\n'.join(B))
    assert len(T) == n == N, (len(T), n)
    open(out, 'w', encoding='utf8').write('\n\n'.join(parts))
    json.dump(T, open(tit, 'w', encoding='utf8'), ensure_ascii=False, indent=0)
def post(a, tit, b):
    C = json.load(open(a, encoding='utf8')); T = json.load(open(tit, encoding='utf8'))
    assert len(C) == len(T) == N, (len(C), len(T))
    for c, t in zip(C, T):
        c['head'] = t.rstrip('.').replace('_', '').replace('don Modeste Gorenfiot', 'dom Modeste Gorenflot').replace('de celte invention', 'de cette invention')  # coquilles de la table (XLIII, XLIV)
        c['paras'] = [p for p in c['paras'] if not re.fullmatch(r'\[Illustration[^\]]*\]', p.strip())]  # légendes des gravures
        P = []
        for p in c['paras']:
            p = re.sub(r' ?\[Note ?: (.*?)\]', r' (\1)', p)  # la note de Dumas, entre parenthèses à sa place
            if p.startswith('Porte Saint-Victor 5'):  # le compte de Loignac (III), en colonnes dans la saisie
                p = re.sub(r' __ ', ' ; ', re.sub(r'(\D) (\d+)(?= |$)', r'\1 : \2', p)).replace(' : 4 Porte', ' : 4 ; Porte')
                p = re.sub(r'(\d) (?=Porte|Enfin)', r'\1 ; ', p).replace(', ci : 45', ' : 45') + '.'
            p = p.replace('_', '*')  # une lettre latine en italique coupée en deux paragraphes (XLV)
            if re.fullmatch(r'FIN D[UE] .*', p): continue
            if p == 'ET *Margota* MARGOT.': continue  # la fin du titre de XLV, sur deux lignes dans la saisie
            p = p.replace('preÈs', 'près')
            P.append(p)
        c['paras'] = P
        for p in c['paras']: assert not re.search(r'[\[\]_]|Gutenberg', p), p[:80]
    json.dump(C, open(b, 'w', encoding='utf8'), ensure_ascii=False, indent=0)
if sys.argv[1] == 'pre': pre(*sys.argv[2:])
else: post(*sys.argv[2:5])
