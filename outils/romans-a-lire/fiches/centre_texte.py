# centre_texte.py ch.json sortie.json : retouches de « Voyage au centre de la Terre » après elg.py (texte d'Ebooks
# libres et gratuits). Les images de l'édition (runes du parchemin, signature, initiales) sont remises en caractères
# runiques, d'après la transcription du Project Gutenberg (n° 4791) ; la grille et la suite de lettres du chapitre III
# en suivent aussi la leçon (celle d'ELG a perdu des lettres). Les lignes d'une grille ou d'un relevé restent ensemble.
import json, sys
C = json.load(open(sys.argv[1], encoding='utf8'))
RUNES = ["ᛯ . ᛦ ᚳ ᛚ ᛚ ᚼ   ᛅ ᚼ ᛦ ᛅ ᚢ ᛅ ᛚ   ᚼ ᛅ ᛅ ᚴ ᛁ ᚦ ᛅ",
         "ᚼ ᛎ ᛏ ᚼ ᚼ ᛘ ᚠ   ᚢ ᚳ ᛏ ᛅ ᛁ ᛅ ᚠ   ᚳ ᛁ ᛅ ᚦ ᛦ ᚴ ᛅ",
         "ᚴ ᛏ , ᚼ ᛐ ᛘ ᚳ   ᛐ ᛏ ᛦ ᛐ ᛏ ᛅ ᚼ   ᚼ ᛐ ᚭ ᚦ ᛦ ᛦ ᚳ",
         "ᛅ ᛘ ᛏ ᚳ ᛐ ᛅ ᛁ   ᚳ ᚢ ᛐ ᛅ ᚴ ᛏ   ᛦ ᛦ ᛁ ᛚ ᚼ ᛐ",
         "ᛐ ᛏ ᚢ ᛐ ᛐ ᛦ   . ᚳ ᚼ ᚴ ᛦ ᚴ   ᛁ ᛅ ᛐ ᛐ ᚲ ᚼ",
         "ᚴ ᚴ ᚦ ᛦ ᛘ ᛁ   ᛅ ᛅ ᚢ ᛏ ᚢ ᛚ   ᚠ ᛦ ᛐ ᚳ ᛏ ᚢ",
         "ᚦ ᛏ , ᛁ ᛐ ᚴ   ᚭ ᚼ ᛅ ᛁ ᚲ ᚭ   ᚴ ᛅ ᚦ ᛁ ᛁ ᛦ"]
NOM = "ᛐ ᛦ ᚳ ᛅ   ᚼ ᛐ ᚴ ᚳ ᚢ ᚼ ᚼ ᛅ ᛯ"
def ch(n): return next(c for c in C if c['n'] == n)
def fig(n, txt):
    ps = ch(n)['paras']; i = ps.index('[FIGURE]'); ps[i] = txt
fig('II', '\n'.join(RUNES)); fig('III', NOM); fig('XVI', NOM); fig('XXXIX', 'ᛐ   ᚼ')
p = ch('III')['paras']
def group(first, lines, new):
    i = p.index(first); assert all(p[i + k] == l for k, l in enumerate(lines)), (first, p[i:i + len(lines)])
    p[i:i + len(lines)] = [new]
group('J m n e G e', ['J m n e G e', 'e e, t r n', "t'b m i a !", 'a i a t ü', 'i e p e b'],
      "J m n e , b\ne e , t G e\nt' b m i r n\na i a t a !\ni e p e ü")
group('JmneGe ee, trn t\'bmia ! aiatü iepeb', ['JmneGe ee, trn t\'bmia ! aiatü iepeb'], "Jmne,b ee,tGe t'bmirn aiata! iepeü")
group('messunkaSenrA. icefdoK. segnittamurtn', ['messunkaSenrA. icefdoK. segnittamurtn', 'ecertserrette, rotaivsadua, ednecsedsadne', 'lacartniiiluJsiratracSarbmutabiledmek', 'meretarcsilucoYsleffenSnl'],
      "*mmessunkaSenrA.icefdoK.segnittamurtn\necertserrette,rotaivsadua,ednecsedsadne\nlacartniiiluJsiratracSarbmutabiledmek\nmeretarcsilucoYsleffenSnI*")
p = ch('XVIII')['paras']; i = p.index('Lundi 1er juillet.')
p[i:i + 5] = ['*Lundi 1er juillet.*\n' + '\n'.join(p[i + 1:i + 5]).replace('*', '').replace('E. -S. -E.', 'E.-S.-E.').join(['*', '*']).replace('\n', '*\n*')]
for c in C:
    for k, x in enumerate(c['paras']):
        assert '[FIGURE]' not in x, c['n']
json.dump(C, open(sys.argv[2], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
