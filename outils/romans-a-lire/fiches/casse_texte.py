# casse_texte.py pre source.txt sortie.txt | post ch.json sortie.json : retouches de « Histoire d'un casse-noisette »
# (Gutenberg n° 5104, miroir orkeilius/gutenberg_fr_mirror, d'après Gallica).
# Le volume contient aussi « L'Égoïste » et « Nicolas le philosophe » : pre ne garde que le conte, préface comprise.
# Les chapitres ont un titre sur une ligne (parfois deux ou trois pour les « Comment… ») ; pre écrit « CHAPITRE N. »
# puis le titre sur une ligne, pour gut.py. Les vers (lignes en retrait) deviennent un paragraphe chacun. Le titre général de l'histoire de Pirlipate disparaît : la fiche le reprend.
# post : ids P et I à XV ; titres vides (la fiche les écrit) ; le titre des chapitres VII à X, resté en tête du texte,
# en est retiré ; « A » et « O » majuscules isolés deviennent « À » et « Ô » ; l'OCR de Gallica a perdu quelques « é »
# en fin de mot et quelques « à » : FIX les rend, avec quelques coquilles ; contrôles.
import json, re, sys
TITRES = ["Le parrain Drosselmayer", "L'arbre de Noël", "Le petit homme au manteau de bois", "Choses merveilleuses.",
          "La bataille", "La maladie", "Comment naquit la princesse", "Comment, malgré toutes", "Comment le mécanicien",
          "Comment, après avoir trouvé", "L'oncle et le neveu", "La capitale", "Le royaume des poupées", "Le voyage",
          "Conclusion"]
# Le fichier a perdu tout caractère accentué placé en fin de ligne : « é » (arriv, donn…), « à » (déj, voil, ou « à »
# seul), « ù » (o). FIN rend la fin de chaque ligne touchée (fin de ligne exacte → nouvelle fin) ; FIX corrige le reste.
FIN = [("je ne serais pas dérang", "je ne serais pas dérangé"), ("boudoir était réserv", "boudoir était réservé"),
       ("lesquels criaient", "lesquels criaient à"), ("je fus tir", "je fus tiré"), ("il était arriv", "il était arrivé à"), ("au moment o", "au moment où"), ("beau jardin tout plant", "beau jardin tout planté"),
       ("sur un gazon brod", "sur un gazon brodé"), ("Tu dois être fatigu", "Tu dois être fatigué"),
       ("qui, après avoir pos", "qui, après avoir posé"), ("qu'elle avait déj", "qu'elle avait déjà"),
       ("s'était-il allong", "s'était-il allongé"), ("Trudchen était déj", "Trudchen était déjà"), ("d'o", "d'où"),
       ("hauteur effrayante o", "hauteur effrayante où"), ("les Casse-Noisettes", "les Casse-Noisettes à"),
       ("tu as donn", "tu as donné"), ("qui soit rest", "qui soit resté"), ("ils se ruèrent, malgr", "ils se ruèrent, malgré"),
       ("s'est-il donc pass", "s'est-il donc passé"), ("il était décid", "il était décidé à"), ("On fut oblig", "On fut obligé"),
       ("il avait ét", "il avait été"), ("pour la première fois, frapp", "pour la première fois, frappé"),
       ("lorsqu'elle aura ét", "lorsqu'elle aura été"), ("ce jour-l", "ce jour-là"), ("Ils avaient visit", "Ils avaient visité"),
       ("fut bien forc", "fut bien forcé"), ("reprendre la malle-poste", "reprendre la malle-poste à"),
       ("avec une prolixit", "avec une prolixité"), ("s'était mis à l'oeuvre", "s'était mis à l'oeuvre à"),
       ("qu'on fut oblig", "qu'on fut obligé"), ("besoin d'être lettr", "besoin d'être lettré"), ("pour l'époque o", "pour l'époque où"),
       ("du moment o", "du moment où"), ("ce qui avait nécessit", "ce qui avait nécessité"), ("hélas!  voil", "hélas!  voilà"),
       ("qu'elle avait sauv", "qu'elle avait sauvé"), ("dit-elle, o", "dit-elle, où"), ("Du jour o", "Du jour où"),
       ("elle avait cess", "elle avait cessé"), ("qui vous sera dévou", "qui vous sera dévoué"), ("qui avaient saut", "qui avaient sauté"),
       ("et l'originalit", "et l'originalité"), ("d'avancer, voil", "d'avancer, voilà"), ("qui avait pass", "qui avait passé"),
       ("palais a été menac", "palais a été menacé"), ("qui m'a donn", "qui m'a donné"), ("qui était désorganis", "qui était désorganisé"),
       ("lorsqu'on fut arriv", "lorsqu'on fut arrivé"), ("pour une heure", "pour une heure à"), ("de la salle", "de la salle à"),
       ("et de dire", "et de dire à"), ("parce qu'elle venait de découvrir", "parce qu'elle venait de découvrir à"), ("frissonner des pieds", "frissonner des pieds à"),
       ("elle se mit", "elle se mit à"), ("descendre d'un rayon", "descendre d'un rayon à"), ("j'ai ma mère", "j'ai ma mère à"),
       ("le demande, ont", "le demande, ont à"), ("tendance qu'elle avait", "tendance qu'elle avait à"),
       ("voyez la coupable", "voyez la coupable à"), ("ils se résolurent", "ils se résolurent à"), ("on se mettra", "on se mettra à"),
       ("se jetant", "se jetant à"), ("ayant trois mois", "ayant trois mois à"), ("ils étaient", "ils étaient à"),
       ("et m'invitant", "et m'invitant à"), ("parut si singulière", "parut si singulière à"), ("en arrivant", "en arrivant à"),
       ("qui parviendrait", "qui parviendrait à"), ("passa tout doucement", "passa tout doucement à"),
       ("piauler et siffloter", "piauler et siffloter à"), ("arriva le Grand Sultan", "arriva le Grand Sultan à"),
       ("et les bosses", "et les bosses à"), ("Fritz rendit", "Fritz rendit à"), ("et permit", "et permit à"),
       ("dans la chambre", "dans la chambre à"), ("vous voyez ici", "vous voyez ici à"), ("sauvâtes la vie", "sauvâtes la vie à"),
       ("fait toute l", "fait toute la"), ("qu'elle aurait d", "qu'elle aurait dû"), ("que tu vois l", "que tu vois là")]
FIX = [("Frite se", "Fritz se"), ("dont là douleur", "dont la douleur"), ("du resté.", "du reste."), ("pouvu qu", "pourvu qu"),
       ("je lès connais", "je les connais"), ("prisé d'une", "prise d'une"), ("petit pâtés", "petits pâtés"), ("la vois qui", "la voix qui"),
       ("mettra eu morceaux", "mettra en morceaux"), ("an roi", "au roi"), ("an président", "au président"), ("an contraire", "au contraire"),
       ("depuis À jusqu", "depuis A jusqu"), ("mais peine les", "mais à peine les"), ("et, force de", "et, à force de"),
       ("se mit crier", "se mit à crier"), ("an soleil", "au soleil"), ("an moins", "au moins"), ("qu'il à reçus", "qu'il a reçus"),
       ("donnée des enfants", "donnée à des enfants"), ("pas jouer, cause de", "pas jouer, à cause de"),
       ("casseroles andouilles", "casseroles à andouilles"), ("qu'alors, son tour", "qu'alors, à son tour"),
       ("menaçant la mécanicien", "menaçant le mécanicien"), ("les assistante ;", "les assistantes ;"),
       ("n'ai-je pas vous faire", "n'ai-je pas à vous faire"), ("galanterie on plutôt", "galanterie ou plutôt"),
       ("il y sent ai bon", "il y sent si bon"), ("Marie eu ouvrant", "Marie en ouvrant"),
       ("que, part sa", "que, à part sa"), ("an vieux major", "au vieux major"), ("qui fat, à", "qui fut, à"),
       ("son lit mademoiselle Claire", "son lit à mademoiselle Claire"), ("mission, faire les sept", "mission, à faire les sept"),
       ("rangé sûr les", "rangé sur les")]
def etoiles(par):  # l'espace sort de l'italique « *…* »
    parts = par.split('*')
    if len(parts) % 2 == 0: return par
    for k in range(1, len(parts), 2):
        if parts[k].endswith(' '): parts[k] = parts[k].rstrip(' '); parts[k + 1] = ' ' + parts[k + 1].lstrip(' ')
        if parts[k].startswith(' '): parts[k] = parts[k].lstrip(' '); parts[k - 1] = parts[k - 1].rstrip(' ') + ' '
    return '*'.join(parts)
def corrige(p):
    p = re.sub(r"(?<![\w'’])O ", 'Ô ', re.sub(r"(?<![\w'’])A (?=[\w'’])", 'À ', p))
    p = re.sub(r'\ban (?=(manteau|pouvoir|moment|visage|roi|président|contraire|soleil|moins|vieux)\b)', 'au ', p)  # « an » pour « au »
    for a, b in FIX: p = p.replace(a, b)
    return etoiles(p)
def roman(n):
    out = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: out += r; n -= v
    return out
if sys.argv[1] == 'pre':
    L = open(sys.argv[2], encoding='utf8').read().replace('\r', '').split('\n')
    vus = set()
    for i, l in enumerate(L):
        for a, b in FIN:
            if l.rstrip().endswith(' ' + a) or l.rstrip() == a:
                L[i] = l.rstrip()[:-len(a)] + b; vus.add(a); break
    assert vus == {a for a, b in FIN}, {a for a, b in FIN} - vus
    pref = [i for i, l in enumerate(L) if l.strip() == 'PRÉFACE'][0]
    end = next(i for i, l in enumerate(L) if l.startswith("FIN DE L'HISTOIRE D'UN CASSE-NOISETTE"))
    out = ['PRÉFACE', '']
    i = pref + 1
    while not L[i].strip(): i += 1
    while L[i].strip(): i += 1  # sous-titre de la préface
    n = 0
    while i < end:
        l = L[i]; s = l.strip()
        if s in ("HISTOIRE D'UN CASSE-NOISETTE", 'HISTOIRE DE LA NOISETTE KRAKATUK ET DE LA PRINCESSE PIRLIPATE'):
            i += 1; continue
        if n < len(TITRES) and s.startswith(TITRES[n]) and not L[i - 1].strip():
            n += 1; t = []
            while L[i].strip(): t.append(L[i].strip()); i += 1
            out += ['CHAPITRE %s.' % roman(n), '', ' '.join(t)]
            continue
        if l.startswith('     ') and s: out += [s, '']; i += 1; continue  # un vers par paragraphe
        out.append(l); i += 1
    assert n == 15, n
    open(sys.argv[3], 'w', encoding='utf8').write('\n'.join(out) + '\nFIN\n')
else:
    C = json.load(open(sys.argv[2]))
    ids = ['P'] + [roman(k) for k in range(1, 16)]
    assert [c['n'] for c in C] == ids, [c['n'] for c in C]
    for c in C:
        c['head'] = ''
        if c['n'] in ('VII', 'VIII', 'IX', 'X'): assert c['paras'][0].startswith('Comment'); c['paras'] = c['paras'][1:]
        c['paras'] = [corrige(p) for p in c['paras']]
        for p in c['paras']: assert not re.search(r'[_\[\]]|Gutenberg|CHAPITRE', p) and p.count('*') % 2 == 0, (c['n'], p[:80])
    json.dump(C, open(sys.argv[3], 'w'), ensure_ascii=False, indent=0)
