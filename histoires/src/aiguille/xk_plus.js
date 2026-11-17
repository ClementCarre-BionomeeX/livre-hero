// L'Île Folle-Aiguille · side story « Le parchemin chiffré », the second ink. Once the sentence is read, a hotter flame
// brings out, under the first ink, a second one that needs more heat than lemon: a line in clear, « forty paces under
// the shadow of noon; what is mine » (xk:second), or the corner burns and only « forty » is left (xk:brule). On the
// island, from the hermit's hut, the child may walk to the singing rock and count: a box buried under the noon shadow
// holds the keys of the chapel, the ones the steward sold (xk:clefs). The hermit comes. The keys may go back to him
// (xk:clefs_rendues), to the old woman who keeps the names (xk:clefs_aubepine), into the sea (xk:clefs_mer), or stay
// with the child (item clefs_chapelle).
var DEMASQUE = { has: "dagrel:demasque" };
module.exports = {
  passages: {
    XK_chauffe: { act: "III", title: "La seconde encre", place: "cormorane", ambiance: "nuit",
      text: [
        "Une nuit, sans raison, tu reprends le parchemin, et tu le regardes, à plat sur tes genoux, blanc, propre, avec son odeur de citron.",
        "Il y a, en bas, dans le coin, une tache que tu n'avais pas remarquée. Une tache brune, pâle, ronde, comme celle d'un doigt sale posé là par mégarde. Sauf qu'il n'y a pas d'empreinte. C'est un rond parfait, bien net, de la taille d'un sou. On l'a fait exprès, ou c'est un hasard qui a beaucoup de soin.",
        "Le citron vient à la chaleur de la lanterne. D'autres encres, tu le sais par Zélie, qui faisait des confitures et des mots doux à l'oignon pour un garçon de Plouvenec, demandent plus de chaleur. Davantage qu'une lanterne. La chaleur d'un fourneau, presque d'une braise.",
      ],
      choices: [
        { label: "Approcher le coin du fourneau de la cambuse, à la nuit", test: { dom: "savoir", diff: 1, label: "Chauffer sans brûler" }, win: { fx: { flag: "xk:second" }, to: "XK_second_lu" }, lose: { fx: { flag: "xk:brule" }, to: "XK_brule" } },
        { label: "Laisser le parchemin tel qu'il est", back: true },
      ] },
    XK_second_lu: { act: "III", title: "La seconde encre", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu attends que Fargue ronfle, que la cambuse soit noire, que le fourneau ne soit plus qu'une bouche rouge, et tu tiens le coin du parchemin au-dessus, très haut d'abord, puis plus bas, puis plus bas encore, en comptant, et en retirant la main à chaque fois que la peau commence à se gondoler.",
        "Au vingtième passage, la tache brune s'élargit. Elle se défait en petites lettres serrées, couleur de rouille, qui sortent du parchemin comme des fourmis d'une fente. Pas de signes, cette fois. Des lettres. En clair. Comme si celui qui avait écrit avait pensé que personne n'irait jusque-là, et qu'il pouvait parler franchement à qui le ferait.",
        "*QUARANTE PAS SOUS L'OMBRE DE MIDI. CE QUI EST À MOI.*",
        "Puis le parchemin refroidit, et les fourmis rentrent dans leur fente.",
        "Ce qui est à moi. Le trésor, tout le monde le veut. Ceci, un seul homme le voulait.",
      ],
      choices: [{ label: "Ranger le parchemin contre ta peau", back: true }] },
    XK_brule: { act: "III", title: "La seconde encre", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu approches trop. Une seconde de trop. La peau se tord, noircit, se recroqueville dans un petit grésillement, et une flamme bleue court le long du bord avant que tu aies pu retirer la main.",
        "Tu étouffes la flamme dans ta vareuse. Le coin est parti. Un bout de parchemin large comme trois doigts, réduit à une dentelle noire qui s'effrite.",
        "Mais au bord de la brûlure, dans la seconde où la chaleur était juste, tu as vu sortir une ligne de lettres couleur de rouille, et tu en as lu un mot, un seul, avant qu'elles ne flambent : *QUARANTE*.",
        "Fargue, dans son hamac, renifle dans son sommeil, et murmure : « Ça sent le cochon grillé. » Puis il se rendort.",
      ],
      choices: [{ label: "Ranger ce qui reste du parchemin", back: true }] },

    // ---------------------------------------------------------------- on the island
    XK_rocher: { act: "IV", title: "Le rocher qui chante", place: "rocher", ambiance: "nature",
      text: [
        "Tu pars à l'aube, seul{e}, en disant à Sauveur que tu vas aux fruits. Il te regarde partir. Il ne dit rien. Il ne dit jamais rien quand on lui ment, ce qui rend le mensonge bien plus difficile.",
        "Il faut la journée pour traverser la Sylve vers l'ouest, jusqu'aux pentes nues du bout de l'île. Tu arrives au rocher à la fin de la matinée.",
        "Vu d'en bas, il est énorme. Une boule de basalte posée sur la pente comme une bille sur un drap, grosse comme une église de village, percée de part en part d'un trou rond par où l'on voit le ciel. Le vent passe dedans, et le rocher gronde, sourdement, comme une bête qui dort. Autour, rien : de l'herbe rase, des pierres, et l'ombre du rocher sur l'herbe, qui raccourcit à mesure que le soleil monte.",
        { if: { has: "xk:brule" }, text: "Quarante. Tu n'as qu'un mot. Quarante quoi ? Tu tournes autour du rocher, tu comptes des pas dans toutes les directions, comme un chien qui cherche à se coucher." },
        { if: { has: "xk:second" }, text: "Quarante pas sous l'ombre de midi. L'ombre est là, sur l'herbe. Il suffit d'attendre qu'elle soit la plus courte." },
      ],
      choices: [
        { label: "Attendre midi, et suivre l'ombre", hide: { not: { has: "xk:second" } }, to: "XK_midi" },
        { label: "Compter quarante pas, dans chaque direction, jusqu'à trouver", hide: { has: "xk:second" }, test: { dom: "nature", diff: 1, label: "Quarante quoi" }, win: { to: "XK_midi" }, lose: { to: "XK_rate" } },
      ] },
    XK_rate: { act: "IV", title: "Le rocher qui chante", place: "rocher", ambiance: "nature",
      text: [
        "Tu comptes. Quarante pas vers la mer. Quarante vers la Dent-du-Nord. Quarante vers la Sylve. Tu creuses avec un bâton, avec tes mains, dans la terre sèche, à chaque fois. Rien. Des cailloux. Des racines. Une fois, un nid de fourmis rouges qui te le font payer jusqu'au coude.",
        "Le soleil passe, et l'ombre tourne, et tu ne comprends pas encore que c'est elle qu'il fallait compter. Le soir tombe. Le rocher chante plus fort dans le vent du soir, comme s'il se moquait.",
        "Tu rentres à la hutte à la nuit, les mains en sang, les poches vides, avec un mot qui ne sert à rien.",
      ],
      choices: [{ label: "Rentrer à la hutte", back: "A4n_jours" }] },
    XK_midi: { act: "IV", title: "L'ombre de midi", place: "rocher", ambiance: "nature",
      text: [
        { if: { has: "xk:brule" }, text: "Tu as tourné en rond toute la matinée. Puis, en t'asseyant, épuisé{e}, dans la seule ombre qu'il y ait, tu comprends : l'ombre. On ne compte pas à partir du rocher. On compte à partir de son ombre, quand elle est la plus courte, et que le soleil est au plus haut." },
        "À midi, le soleil est presque au zénith, et l'ombre du rocher n'est plus qu'une flaque noire, à ses pieds, du côté du nord. Et au milieu de la flaque, une tache de lumière ronde, parfaitement ronde, de la taille d'une roue de charrette : le soleil qui passe par le trou du rocher, et qui fait sur l'herbe un œil d'or au milieu de l'ombre.",
        "Tu te places dans l'œil d'or. Tu tournes le dos au rocher. Et tu comptes, à grands pas d'homme, en allongeant les jambes autant que tu peux, parce qu'un homme a compté ces pas-là avant toi, et que c'étaient des pas d'homme.",
        "Trente-huit. Trente-neuf. Quarante.",
        "Sous ton pied, l'herbe est la même qu'ailleurs. Mais il y a, à côté, une pierre plate, une seule, posée de travers, comme on pose une pierre sur une tombe d'animal.",
      ],
      choices: [{ label: "Soulever la pierre, et creuser", to: "XK_boite" }] },
    XK_boite: { act: "IV", title: "Ce qui est à moi", place: "rocher", ambiance: "nature",
      text: [
        "Sous la pierre, à une coudée, ta main rencontre du bois. Une boîte de chêne, longue comme un avant-bras, cerclée de fer, que la terre a noircie et n'a pas pourrie. Un cadenas, rouillé jusqu'au cœur, qui cède au premier coup de caillou.",
        "Dedans, sur un lit de toile goudronnée, il y a des clefs.",
        "Trois clefs de fer, énormes, longues comme la main, enfilées sur un anneau. Une clef de porte, une clef de grille, une clef de coffre. Des clefs d'église. Et sur l'anneau, attachée par un fil de laiton, une étiquette de parchemin, avec une écriture serrée que tu commences à bien connaître :",
        "*Rendues par F. A. le 9 de juin. Payées vingt piastres. Ce qu'elles ont ouvert est à moi.*",
        "Tu restes à genoux dans l'herbe, les clefs sur les genoux, très lourdes. Tu sais ce qu'elles ont ouvert. Tout le monde sur cette île le sait, à sa manière : les uns l'ont oublié en mâchant, les autres s'en souviennent sous la terre. Ce sont les clefs de la chapelle. Le jour des clefs. Celui que tout le monde appelle comme ça.",
        "Une ombre tombe sur toi.",
      ],
      choices: [{ label: "Lever les yeux", to: "XK_sauveur" }] },
    XK_sauveur: { act: "IV", title: "Ce qui est à moi", place: "rocher", ambiance: "nature",
      text: [
        "Sauveur est là, debout, à trois pas, appuyé sur son bâton, essoufflé, son tricorne sans bord à la main. Il t'a suivi{e}. Il a marché toute la nuit, à son âge, pour être là à midi. Il regarde les clefs.",
        { if: DEMASQUE, text: "« Je les ai gardées vingt et un ans, dit Jéricho Dagrel. Je ne sais pas pourquoi. Je me disais qu'il fallait qu'elles soient quelque part. Que si je les jetais à la mer, ce serait comme si elles n'avaient jamais servi. » Il sourit, d'un sourire de vieil homme fatigué. « Ce qu'elles ont ouvert est à moi. Je l'ai écrit. C'était de l'orgueil. C'est devenu vrai. »" },
        { if: { not: DEMASQUE }, text: "« Ah, dit-il. Vous avez lu jusqu'au bout. C'est rare, les gens qui lisent jusqu'au bout. » Il s'assied sur la pierre plate, lentement, en s'appuyant sur ton épaule. « Ces clefs appartenaient à un homme que j'ai bien connu. Il les a payées vingt piastres à un autre, qui les lui a vendues. Il a fait pendre le vendeur, ensuite, pour lui apprendre à vendre. Il s'est gardé lui-même pour la fin, et la fin n'est jamais venue. » Il regarde le rocher. « Je dis cela pour la conversation. »" },
        "Il tend la main. Pas pour prendre. Pour voir si tu vas les lui donner.",
      ],
      choices: [
        { label: "Les lui donner", fx: { flag: "xk:clefs_rendues", regard: { dagrel: "redevable" } }, to: "XK_rendre" },
        { label: "Les garder, pour les porter à la Mère Aubépine", hide: { not: { seen: "XD_aubepine" } }, fx: { flag: "xk:clefs_aubepine", regard: { dagrel: "cordial", aubepine: "redevable" } }, to: "XK_aubepine" },
        { label: "Les jeter à la mer, du haut de la pente", fx: { flag: "xk:clefs_mer" }, to: "XK_mer" },
        { label: "Les garder pour toi", fx: { item: "clefs_chapelle", regard: { dagrel: "mefiant" } }, to: "XK_garder" },
      ] },
    XK_rendre: { act: "IV", title: "Les clefs", place: "rocher", ambiance: "nature",
      text: [
        "Tu lui mets l'anneau dans la main. Il le soupèse. Ses doigts se referment dessus, très lentement, comme sur la main d'un mourant.",
        "« Merci, dit-il. Vous m'avez rendu mon fardeau. C'est plus généreux qu'on ne croit. Les gens vous enlèvent toujours vos fardeaux, par charité, et après, on ne sait plus quoi faire de ses mains. »",
        "Il rentre avec toi, à petits pas, les clefs pendues à sa ceinture, où elles sonnent à chaque pas. Il ne les cache pas. Tous les soirs, ensuite, tu les vois, accrochées à un clou au-dessus de son lit, et tous les soirs il les regarde avant de souffler la chandelle.",
      ],
      choices: [{ label: "Rentrer à la hutte", fx: { quest: "XK" }, back: "A4n_jours" }] },
    XK_aubepine: { act: "IV", title: "Les clefs", place: "haut_verger", ambiance: "village",
      text: [
        "Il retire sa main. Il hoche la tête. « Elle a le droit, dit-il seulement. Plus que moi. »",
        "Deux jours plus tard, au Haut-Verger, sous le figuier, tu poses l'anneau de fer sur les genoux de la Mère Aubépine.",
        "Elle ne demande pas ce que c'est. Elle le sait au poids. Elle passe ses doigts secs sur chaque clef, l'une après l'autre, la porte, la grille, le coffre, comme une aveugle sur un visage.",
        "« La grande, dit-elle, c'est mon mari qui l'avait forgée. Il était fier du panneton. Regarde : une ancre, découpée dedans. Personne ne la voyait. Il disait que Dieu la voyait, et que ça suffisait. »",
        "Elle les garde sur ses genoux tout l'après-midi. Le soir, elle les enterre au pied de son figuier, de ses propres mains, et elle plante dessus une aubépine, une bouture prise dans la haie. « Comme ça, dit-elle, il y aura des épines dessus. »",
      ],
      choices: [{ label: "Rentrer à la hutte", fx: { quest: "XK" }, back: "A4n_jours" }] },
    XK_mer: { act: "IV", title: "Les clefs", place: "rocher", ambiance: "mer",
      text: [
        "Tu te lèves, tu marches jusqu'au bord de la pente, là où l'herbe s'arrête et où commencent les rochers, et, en bas, la mer. Tu prends de l'élan. Tu lances.",
        "L'anneau tourne dans l'air, les trois clefs écartées comme les branches d'une étoile, très haut, très loin, et retombe dans l'écume, entre deux rochers, sans un bruit qu'on puisse entendre d'ici.",
        "Derrière toi, Sauveur rit. Un vrai rire, le premier que tu lui entends, un rire de jeune homme.",
        "« Voilà, dit-il. Voilà ce que je n'ai jamais pu faire. Vingt et un ans. Et un enfant le fait en une seconde, sans même demander la permission. » Il s'essuie les yeux. « On ne les retrouvera jamais. Ce sera comme si elles n'avaient jamais servi. C'est un mensonge. C'est un beau mensonge. Merci. »",
      ],
      choices: [{ label: "Rentrer à la hutte", fx: { quest: "XK" }, back: "A4n_jours" }] },
    XK_garder: { act: "IV", title: "Les clefs", place: "rocher", ambiance: "nature",
      text: [
        "Tu refermes tes mains sur l'anneau. Tu ne dis rien.",
        "Il baisse la sienne. Il te regarde, longtemps, avec ses yeux gris pâles, et quelque chose passe dans ces yeux, qui ressemble à du respect, et à de la crainte.",
        "« Gardez-les, dit-il. Vous avez raison. Elles ne m'appartiennent plus depuis que vous les avez déterrées. Elles appartiennent à celui qui saura quoi en faire. » Il se relève. « Je me demande seulement si vous le savez. Moi, je ne l'ai jamais su. »",
        "Vous rentrez sans parler. Les clefs pèsent dans ta besace tout le long de la Sylve, et chaque fois qu'elles se cognent l'une contre l'autre, il tourne la tête.",
      ],
      choices: [{ label: "Rentrer à la hutte", fx: { quest: "XK" }, back: "A4n_jours" }] },
  },
  extras: {
    items: {
      clefs_chapelle: { name: "Les clefs de la chapelle", kind: "divers", keep: true, price: 0, desc: "Trois clefs de fer énormes sur un anneau, une de porte, une de grille, une de coffre, avec une étiquette : « Rendues par F. A. le 9 de juin. Payées vingt piastres. »" },
    },
  },
};
