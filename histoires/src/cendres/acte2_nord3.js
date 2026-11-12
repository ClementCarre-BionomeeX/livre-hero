// Act II · the northern company, chapter 3, "Le moutier des Veilleurs": Mère Ombeline found with her frozen mules, the
// monastery of the Veilleurs taken by the ice (the giant laid its hand on the roof), the novice in the oven, the prior
// and the Book of Vigils (the founders' oath), and the night the giant comes back. If the child is there, he hears
// Sauvelune in its murmur. Corbe leads ("tu").
var N = { act: "II", noLead: true };
function P(o) { return Object.assign({}, N, o); }
module.exports = {
  II_N3_depart: P({ title: "Les traces vers l'est", place: "lacnoir",
    text: [
      "Au matin, les traces du géant traversent la neige de l'autre rive, droit vers l'est, chacune grande comme une barque. Il ne se cache pas. Il n'a jamais eu besoin de se cacher.",
      "Askel ne vient pas. Elle redescend dans le boyau, s'assied devant le mur de glace, et te fait signe de partir. « Quelqu'un doit chanter, dit-elle. Je ne sais rien faire d'autre, de toute façon. »",
      { if: { has: "nord:aieule_glace" }, text: "Sa voix est encore cassée de la veille. Elle chantera quand même." },
    ],
    choices: [{ label: "Suivre les traces vers le moutier des Veilleurs", travel: "r_ii_moutier" }] }),

  II_N3_combe: P({ title: "Les mules", place: null,
    text: [
      "Dans la combe, une caravane. Six mules, bâtées, chargées de sacs et de couvertures, debout dans la neige, en file, attachées l'une à l'autre. Elles ne bougent pas. Elles sont couvertes de givre jusqu'aux yeux. Elles sont mortes debout.",
      "Au bout de la file, assise dans la neige, une vieille femme en laine blanche prie, les mains jointes sur la longe de la première mule. Elle lève la tête. Elle a les yeux les plus fatigués que tu aies jamais vus.",
      "« Elles ont eu peur, dit-elle. Ça les a tuées plus vite que le froid. » Elle se lève, avec peine. « Je suis Ombeline, de l'Hospice des Neiges. Le prieur des Veilleurs m'a envoyé un pigeon. Il disait : *venez vite, et apportez de quoi enterrer.* »",
      { with: "ysolde", after: "ilse:sauvee", text: "Ysolde la reconnaît avant toi. Elle s'avance. Ombeline la regarde, sourit à peine. « La capitaine et la petite fiévreuse. Elle va bien. Elle demande après vous. »" },
    ],
    choices: [
      { label: "« Venez avec nous. »", fx: { join: "ombeline", flag: "nord:ombeline", ep: ["perso", 500] }, to: "II_N3_combe_ombeline" },
      { label: "Prendre ce qui peut servir sur les mules", fx: { food: 3, item: "onguent" }, to: "II_N3_combe_sacs" },
    ] }),

  II_N3_combe_sacs: P({ title: "Les sacs", place: null,
    text: ["Du pain dur, des onguents, des couvertures, des linceuls. Ombeline te regarde faire sans rien dire. Quand tu as fini, elle prend la longe de la première mule, la détache, la pose dans la neige. Puis elle te suit. Tu ne lui as pas demandé de venir. Elle vient quand même."],
    choices: [{ fx: { join: "ombeline", flag: "nord:ombeline" }, back: "@route" }] }),

  II_N3_combe_ombeline: P({ title: "Mère Ombeline", place: null,
    text: [
      "Elle marche lentement, mais elle ne s'arrête jamais. Elle ne se plaint de rien. Au bout d'une heure, tu remarques qu'elle murmure, tout le temps, très bas, comme Hylas compte ses pas.",
      "Tu lui demandes ce qu'elle dit. « Leurs noms, dit-elle. Ceux qui sont morts chez moi. Je les dis, pour qu'ils soient dits. » Elle sourit. « Il y en a beaucoup. Ça occupe la route. »",
    ],
    choices: [{ back: "@route" }] }),

  II_N3_porte: P({ title: "Le moutier", place: null,
    text: [
      "Le moutier des Veilleurs est bâti dans le flanc de la combe, face au col, comme un poing fermé. Des murs gris, une tour carrée, une seule porte. Trois cents ans qu'on y veille, nuit et jour, sans que personne en Esquarre sache très bien sur quoi.",
      "Il est blanc. Pas de neige : de glace. Une couche épaisse, lisse, bleutée, qui coule des toits jusqu'au sol comme la cire d'un cierge, et qui a scellé la porte, les fenêtres, les gouttières. Sur le toit, au milieu, la glace forme une sorte de creux, très grand, avec cinq longues traînées.",
      "Une main. Posée à plat.",
    ],
    choices: [
      { label: "Escalader la glace jusqu'à une fenêtre de la tour", test: { dom: "nature", label: "Escalade", help: [{ if: { item: "corde" }, v: 15 }] },
        win: { fx: { ep: ["perso", 500] }, to: "@route" },
        lose: { fx: { pv: -2 }, to: "II_N3_porte_ombeline" } },
      { label: "Demander à Ombeline : elle connaît peut-être une autre entrée", hide: { not: { present: "ombeline" } }, to: "II_N3_porte_ombeline" },
      { label: "Briser la glace de la porte, à la hache et au feu", test: { dom: "combat", label: "Force", help: [{ if: { present: "rodric" }, v: 20 }] },
        win: { to: "@route" }, lose: { fx: { time: 3 }, to: "II_N3_porte_ombeline" } },
    ] }),

  II_N3_porte_ombeline: P({ title: "La porte des morts", place: null,
    text: [
      "Il y a une porte basse, au pied du mur nord, à moitié enterrée, par où les moines sortent leurs morts vers le cimetière. Personne ne la regarde. La glace l'a épargnée, comme si elle n'existait pas.",
      { with: "ombeline", text: "Ombeline la connaît. Elle l'a déjà franchie, dans l'autre sens, derrière des cercueils." },
    ],
    choices: [{ label: "Entrer par la porte des morts", to: "@route" }] }),

  II_N3_cloitre: P({ title: "Le cloître", place: "moutier", hub: true,
    text: [
      { first: true, text: "Le cloître est intact, carré, avec un puits au milieu. Et partout, les moines. Dans la glace. Un qui balayait, le balai levé. Deux qui parlaient, la bouche ouverte. Un qui courait vers la chapelle, un pied en l'air. Ils sont pris dans des blocs de glace claire, bien droits, comme des saints dans leurs niches." },
      "Il fait très froid, et c'est un froid silencieux : pas un craquement, pas un souffle. Juste, de temps en temps, quelque part, le bruit d'une goutte qui tombe.",
      "Vers le nord, par les arcades, on voit le col de l'Ourse, très proche. Il y a sur lui une lumière blanche, même en plein jour.",
    ],
    choices: [
      { label: "Les cuisines, d'où monte un filet de fumée", hide: { seen: "II_N3_novice" }, to: "II_N3_novice" },
      { label: "La bibliothèque", if: { seen: "II_N3_novice" }, why: "Tu ne sais pas encore où chercher.", hide: { seen: "II_N3_prieur" }, to: "II_N3_prieur" },
      { label: "La chapelle", hide: { seen: "II_N3_chapelle" }, to: "II_N3_chapelle" },
      { label: "Le frère au balai : essayer de le dégager", hide: { seen: "II_N3_glace" }, to: "II_N3_glace" },
      { label: "La tour du guet", hide: { seen: "II_N3_tour" }, to: "II_N3_tour" },
      { label: "Le jardin des simples, derrière la chapelle", hide: { seen: "II_Q_jardin" }, to: "II_Q_jardin" },
      { label: "L'hôtellerie des pèlerins", hide: { seen: "II_n3_hotellerie" }, to: "II_n3_hotellerie" },
      { label: "L'escalier du cellier, sous la cuisine", hide: { seen: "II_n3_cellier" }, to: "II_n3_cellier" },
      { label: "L'enfant de Sauvelune, sous les arcades, face au col", hide: { any: [{ seen: "II_VN_enfant" }, { not: { present: "enfant" } }] }, to: "II_VN_enfant" },
      { label: "Ysolde, qui nettoie son épée dans la salle capitulaire", hide: { any: [{ seen: "II_VN_ysolde" }, { not: { present: "ysolde" } }] }, to: "II_VN_ysolde" },
      { label: "Pie, qui a trouvé ton tambour", hide: { any: [{ seen: "II_VN_pie" }, { not: { present: "pie" } }] }, to: "II_VN_pie" },
      { label: "Hylas, assis au milieu des livres", hide: { any: [{ seen: "II_VN_hylas" }, { not: { present: "hylas" } }] }, to: "II_VN_hylas" },
      { label: "Rodric, près du feu des cuisines", hide: { any: [{ seen: "II_VN_rodric" }, { not: { present: "rodric" } }] }, to: "II_VN_rodric" },
      { label: "Linette, qui épelle un livre à la chandelle", hide: { any: [{ seen: "II_VN_linette" }, { not: { present: "linette" } }] }, to: "II_VN_linette" },
      { label: "Attendre la nuit, et ce qui viendra avec", if: { seen: "II_N3_prieur" }, why: "Pas avant d'avoir trouvé le prieur.", to: "II_N3_soir", big: true },
    ] }),

  II_N3_novice: P({ title: "Le four", place: "moutier",
    text: [
      "Les cuisines sont prises comme le reste : un frère cuisinier, la louche à la main, au-dessus d'une marmite gelée. Mais le grand four à pain est tiède. Et quand tu ouvres la porte de fonte, il y a un garçon dedans, recroquevillé sur la sole, maigre, quatorze ans, le crâne rasé, qui te regarde avec des yeux énormes.",
      "Il s'appelle Tiennot. Il est novice. Il dormait dans le four, cette nuit-là, parce qu'il avait froid. C'était défendu, et c'est pour ça qu'il est vivant.",
      "« Il est venu à minuit, dit-il. On ne l'a pas entendu marcher. On a entendu le toit. Il a posé la main dessus, comme sur une tête. Et tout le monde s'est arrêté. » Il frissonne. « Le prieur est en haut. Il est vivant. À moitié. Il m'a dit de rester ici et de garder le feu. Je garde le feu. »",
    ],
    choices: [
      { label: "Lui donner à manger et le laisser garder le feu", fx: { flag: "nord:tiennot", food: -1 }, to: "II_N3_cloitre" },
      { label: "Lui demander ce que les Veilleurs veillent", to: "II_N3_novice_veille" },
    ] }),

  II_N3_novice_veille: P({ title: "Ce qu'on veille", place: "moutier",
    text: [
      "Tiennot hausse les épaules. « On ne sait pas. Les novices, on ne sait pas. On veille. Toutes les heures, quelqu'un monte à la tour et regarde le col. Et s'il voit la lumière, il sonne. »",
      "Il regarde vers le nord, par la porte. « Elle est là depuis un mois, la lumière. On a sonné tous les jours. Personne n'est venu. »",
    ],
    choices: [{ fx: { flag: "nord:tiennot" }, back: "II_N3_cloitre" }] }),

  II_N3_prieur: P({ title: "Dom Arnoul", place: "moutier",
    fx: { meet: "arnoul" },
    text: [
      "La bibliothèque est une longue salle voûtée, pleine de livres enchaînés aux pupitres. La glace s'est arrêtée à la porte. Au fond, assis dans un fauteuil, un vieillard en robe noire, très droit. Ses jambes, jusqu'aux genoux, sont prises dans un bloc de glace qui monte du dallage. Il a un livre ouvert sur les genoux.",
      "« Corbe du Corbeau, dit-il. La Bouche qui n'est pas venue. » Il a une voix de vieux soldat. « Je suis Arnoul, prieur des Veilleurs. Je vous attendais. Pas vous exactement. Quelqu'un. »",
      "Il pose la main sur le livre. « Le Livre des Veilles. Le serment des cinq maisons, de leur main, l'année de la fondation. Nous le lisons chaque nuit, à la troisième heure. Nous jurons de ne jamais oublier, pour que le monde puisse oublier en paix. »",
      "Il tousse. La glace a gagné un peu, sur ses genoux, depuis que tu es entrée.",
    ],
    choices: [
      { label: "Lui demander ce que dit le serment", to: "II_N3_serment" },
      { label: "Lui demander ce qu'est la chose qui marche sur le col", to: "II_N3_geant_quoi" },
    ] }),

  II_N3_serment: P({ title: "Le serment", place: "moutier",
    fx: { clue: "n_veilleurs", flag: "nord:serment_lu" },
    text: [
      "Il lit, à voix haute, sans regarder la page. Il la sait par cœur.",
      "*Nous, Tour, Gerbe, Barque, Cerf, et Plume-et-Clé, ayant fait ce qui devait être fait dans la vallée qu'on ne nommera plus, et ayant fait pacte avec l'Hiver pour que cela soit oublié de tous, établissons ici des Veilleurs qui seuls s'en souviendront, et garderont le col fermé tant que l'oubli tiendra.*",
      "Il referme le livre. « Ce qui devait être fait, dit-il. Trois cents ans que mes frères lisent ça chaque nuit sans savoir quoi. Moi, je sais. On me l'a dit le jour où j'ai été élu. On le dit au prieur, et à personne d'autre. »",
      "Il te regarde. « Je ne vous le dirai pas. Pas parce que c'est interdit. Parce que je vais mourir ce soir, et que ce n'est pas la dernière chose que je veux dire. »",
    ],
    choices: [
      { label: "Lui demander ce qu'il veut faire du livre", to: "II_N3_livre" },
      { label: "Lui demander ce qu'est la chose qui marche sur le col", hide: { seen: "II_N3_geant_quoi" }, to: "II_N3_geant_quoi" },
    ] }),

  II_N3_geant_quoi: P({ title: "Ce qui marche", place: "moutier",
    text: [
      "« Un Glaneur, dit Arnoul. Comme les petits. Mais les petits ramassent les noms et les rapportent à celui qui les envoie. Celui-là, personne ne l'envoie. Il les garde. Il en a tant mangé qu'il a grandi. »",
      "« Il prend les villages que la neige couvre. Il passe derrière elle, comme un glaneur derrière les moissonneurs, et il ramasse ce qui reste. Les noms, les visages, les chansons. Tout ce qui pourrait encore se souvenir. » Il ferme les yeux. « Il est venu chez nous parce que nous étions les seuls, dans ces montagnes, à nous souvenir de quelque chose. »",
    ],
    choices: [{ back: "II_N3_livre" }] }),

  II_N3_livre: P({ title: "Le Livre des Veilles", place: "moutier",
    text: [
      "« Il reviendra cette nuit, dit Arnoul. Pour moi, et pour le livre. Je ne sais pas s'il sait lire. Je ne veux pas le savoir. »",
      "Il te tend le livre. Il est lourd, relié de bois et de cuir, fermé par une agrafe de fer.",
      "« Emportez-le. Ou brûlez-le. Ou laissez-le-moi, et je le serrerai contre moi quand il viendra, et nous verrons lequel de nous deux est le plus froid. »",
    ],
    choices: [
      { label: "Emporter le livre", fx: { item: "livre_veilles", flag: "nord:livre=pris", ep: ["perso", 800] }, to: "II_N3_cloitre" },
      { label: "Le brûler, ici, dans la cheminée", fx: { flag: "nord:livre=brule", ep: ["perso", 600] }, to: "II_N3_livre_feu" },
      { label: "Le lui laisser", fx: { flag: "nord:livre=prieur", conf: { corbe: 5 } }, to: "II_N3_cloitre" },
    ] }),

  II_N3_livre_feu: P({ title: "Le feu", place: "moutier",
    text: [
      "Le bois de la reliure prend mal, puis d'un coup. Le parchemin se tord, noircit, et les cinq signatures, en bas de la première page, brillent une seconde en rouge avant de disparaître.",
      "Arnoul regarde le feu. « Trois cents ans », dit-il. Il ne dit pas si c'est bien.",
      { with: "hylas", text: "Hylas, à la porte, a l'air d'un homme qu'on frappe. Il n'a rien dit pour t'arrêter. Il ne dira rien après." },
    ],
    choices: [{ back: "II_N3_cloitre" }] }),

  II_N3_chapelle: P({ title: "La chapelle", place: "moutier",
    text: [
      "Les moines de la chapelle sont pris à genoux, en deux rangées, face à l'autel. La glace est moins épaisse ici. On voit leurs visages. Certains ont les yeux ouverts. Un, au bout de la rangée, bouge les lèvres. Très lentement.",
      { with: "ombeline", text: "Ombeline s'est arrêtée sur le seuil. Elle regarde le moine qui bouge les lèvres. « Ils ne sont pas morts, dit-elle. Ils meurent. C'est long. » Elle s'avance, pose la main sur la glace, en face du visage. « Je peux leur prendre ce qui leur fait le plus mal. Pour qu'ils partent tranquilles. Si tu veux bien. »" },
      { without: "ombeline", text: "Tu poses la main sur la glace, en face du visage. Elle n'est pas froide. Elle est tiède comme une joue." },
    ],
    choices: [
      { label: "« Fais-le. »", hide: { not: { present: "ombeline" } }, fx: { flag: "nord:ombeline_moines", conf: { ombeline: 10 }, ep: ["perso", 800] }, to: "II_N3_chapelle_ombeline" },
      { label: "« Non. Ce qu'ils ont, c'est à eux. »", hide: { not: { present: "ombeline" } }, fx: { flag: "nord:moines_gardent", conf: { ombeline: -5 } }, to: "II_N3_cloitre" },
      { label: "Leur chanter le chant des morts", fx: { flag: "nord:moines_chant", ep: ["perso", 600] }, to: "II_N3_cloitre" },
    ] }),

  II_N3_chapelle_ombeline: P({ title: "Ce qu'elle prend", place: "moutier",
    text: [
      "Elle va de l'un à l'autre, lentement, la main sur la glace, en face de chaque visage. Elle reste un moment, les yeux fermés. Puis elle passe au suivant. Douze moines. Ça prend une heure.",
      "Quand elle a fini, elle s'assied sur la marche de l'autel. Elle a l'air plus vieille. Elle dit : « Un avait tué son frère, avant d'entrer ici. Un autre avait laissé une femme, à Vasselin, enceinte. Un autre n'avait jamais cru en rien, pas un seul jour, en cinquante ans de prières. » Elle sourit. « Maintenant, c'est à moi. Ils sont tranquilles. »",
      "Dans la glace, le moine au bout de la rangée a cessé de bouger les lèvres.",
    ],
    choices: [{ back: "II_N3_cloitre" }] }),

  II_N3_glace: P({ title: "Le frère au balai", place: "moutier",
    text: ["Il est jeune, roux, les joues rondes. Il balayait. La glace qui l'entoure est mince, à peine un doigt. On pourrait la briser. Il y a une torche éteinte dans une niche, et un briquet."],
    choices: [
      { label: "Faire fondre la glace, à la torche, doucement", fx: { flag: "nord:frere_degage" }, to: "II_N3_glace_fond" },
      { label: "Le laisser", to: "II_N3_cloitre" },
    ] }),

  II_N3_glace_fond: P({ title: "Poudre", place: "moutier",
    text: [
      "La glace fond, coule, fume. Le frère apparaît, la peau rose, le balai levé. Tu poses la torche. Tu lui touches l'épaule.",
      "Il tombe en poudre. Une poudre blanche, fine, qui ne fond pas, et qui fait un petit tas sur le dallage, avec le balai par-dessus.",
      "Il n'y avait déjà plus personne, dedans. La glace, c'était la seule chose qui le tenait.",
    ],
    choices: [{ back: "II_N3_cloitre" }] }),

  II_N3_tour: P({ title: "La tour du guet", place: "moutier",
    text: [
      "Cent vingt marches. En haut, une salle carrée ouverte aux quatre vents, une cloche de bronze, et la corde, gelée raide. Un moine, pris dans la glace, a la main sur la corde. Il allait sonner.",
      "Le col de l'Ourse est là, à une demi-journée. La lumière blanche n'est pas une lumière. C'est une déchirure. Comme un drap qu'on a fendu au couteau, et derrière, du blanc.",
      { if: { souv: "corbe:col" }, text: "La grande pierre plate, au milieu du col, où la Mère Blanche s'est assise un jour, est juste devant la déchirure. Elle a l'air minuscule." },
      { if: { not: { souv: "corbe:col" } }, text: "Il y a une pierre plate au milieu du col, juste devant la déchirure. Tu ne sais pas pourquoi tu la regardes." },
      "Tout autour, dans la neige, des traces. Des centaines de traces de Glaneurs, qui vont et viennent entre la déchirure et le monde. Et, au milieu, les grandes.",
    ],
    choices: [
      { label: "Dégager la corde de la cloche, pour la nuit", test: { dom: "combat", label: "Force", help: [{ if: { present: "rodric" }, v: 15 }] },
        win: { fx: { flag: "nord:cloche_libre" }, to: "II_N3_cloitre" }, lose: { to: "II_N3_cloitre" } },
      { back: "II_N3_cloitre" },
    ] }),

  II_N3_soir: P({ backName: "les cuisines du moutier", title: "Le soir", place: "moutier",
    text: [
      "Vous mangez dans les cuisines, autour du four, avec Tiennot, qui ne parle pas. La nuit tombe vite, dans la combe.",
      { with: "ombeline", text: "Ombeline s'est assise près du feu et murmure ses noms." },
      { with: "ombeline", if: { has: "nord:ombeline_moines" }, text: "Il y en a douze de plus." },
      "Vers la troisième heure, l'heure où les Veilleurs lisaient le serment, la glace des murs se met à chanter. Un son très haut, très fin, comme un doigt mouillé sur le bord d'un verre.",
    ],
    choices: [
      { label: "Parler avec l'enfant de Sauvelune, avant", hide: { any: [{ not: { present: "enfant" } }, { seen: "II_N3_nuit_enfant" }] }, to: "II_N3_nuit_enfant" },
      { label: "Parler avec Ysolde, avant", hide: { any: [{ not: { present: "ysolde" } }, { seen: "II_N3_nuit_ysolde" }] }, to: "II_N3_nuit_ysolde" },
      { label: "Parler avec Pie, avant", hide: { any: [{ not: { present: "pie" } }, { seen: "II_N3_nuit_pie" }] }, to: "II_N3_nuit_pie" },
      { label: "Parler avec Hylas, avant", hide: { any: [{ not: { present: "hylas" } }, { seen: "II_N3_nuit_hylas" }] }, to: "II_N3_nuit_hylas" },
      { label: "Parler avec Ombeline, avant", hide: { any: [{ not: { present: "ombeline" } }, { seen: "II_N3_nuit_ombeline" }] }, to: "II_N3_nuit_ombeline" },
      { label: "Il arrive", to: "II_N3_geant", big: true },
    ] }),

  II_N3_nuit_enfant: P({ title: "La peur", place: "moutier",
    text: ["L'enfant te demande si tu as peur. Tu dis oui. Il a l'air soulagé. « Moi aussi. Je croyais que c'était parce que je n'étais pas d'ici. » Il regarde le feu. « Ça me fait du bien que tu aies peur. Ce n'est pas méchant de dire ça ? »"],
    choices: [{ fx: { conf: { enfant: 5 } }, back: "II_N3_soir" }] }),

  II_N3_nuit_ysolde: P({ title: "La veille", place: "moutier",
    text: ["Ysolde vérifie son épée, ses sangles, la porte des cuisines, la fenêtre, deux fois. « Au fort, dit-elle, on veillait aussi. On ne savait pas plus qu'eux sur quoi. On disait : Corvanne. » Elle s'arrête devant la fenêtre. « Je commence à croire que tous les murs d'Esquarre sont tournés du mauvais côté. »"],
    choices: [{ fx: { conf: { ysolde: 5 } }, back: "II_N3_soir" }] }),

  II_N3_nuit_pie: P({ title: "Tiennot", place: "moutier",
    text: ["Pie est assis à côté de Tiennot et lui apprend à faire disparaître une noix sous trois gobelets de bois. Le novice ne rit pas, mais il regarde, et ses mains ne tremblent plus. « Quand on a peur, dit Pie sans te regarder, il faut occuper les mains. La tête suit. »"],
    choices: [{ fx: { conf: { pie: 5 } }, back: "II_N3_soir" }] }),

  II_N3_nuit_hylas: P({ title: "Les cinq", place: "moutier",
    text: [
      "Hylas est resté à la bibliothèque, avec le prieur. Tu les trouves qui parlent à voix basse, l'un dans son fauteuil, l'autre debout, la main sur le dossier. Ils se taisent quand tu entres.",
      "En redescendant, Hylas dit seulement : « Il m'a dit ce qu'on dit au prieur. Je le savais déjà. Je l'avais lu, il y a vingt ans, et j'ai fait comme si. » Il s'appuie au mur. « Les Greffiers aussi ont un serment. Le même, à un mot près. »",
    ],
    choices: [{ fx: { conf: { hylas: 5 }, flag: "hylas:arnoul" }, back: "II_N3_soir" }] }),

  II_N3_nuit_ombeline: P({ title: "Le poids", place: "moutier",
    text: [
      "Tu demandes à Ombeline combien elle en porte. Elle réfléchit. « Je ne compte plus les souvenirs. Je compte les gens. Quatre mille trois cents, à peu près. » Elle te regarde. « Je les sens tous. Pas en même temps. Comme une maison pleine, où on entend toujours quelqu'un dans une pièce. »",
      "« Et le jour où tu meurs ? » Elle sourit. « Je ne sais pas. Personne ne me l'a jamais demandé. Je crois qu'ils partiront avec moi. Ou qu'ils resteront. Je ne sais pas ce qui serait le mieux. »",
    ],
    choices: [{ fx: { conf: { ombeline: 5 } }, back: "II_N3_soir" }] }),

  II_N3_geant: P({ title: "La main sur le toit", place: "moutier",
    text: [
      "Le sol tremble. Une fois. Deux fois. Puis plus rien, et l'ombre passe sur la cour, si grande qu'elle couvre le cloître d'un coup.",
      "Par la fenêtre des cuisines, tu le vois. Il est debout dans la combe, à côté du moutier, et le toit de la tour lui arrive à l'épaule. Il est fait de neige, et la neige bouge, en surface, comme une foule. Il n'a pas de visage. Il a une bouche, et elle murmure, et le murmure fait vibrer les vitres.",
      { with: "enfant", text: "L'enfant de Sauvelune s'est collé à la vitre. Il a les yeux fixes. Il dit, d'une voix blanche : « Agathe. Joris. Pim. » Puis : « Ce sont les miens. Il les a. Il dit leurs noms. Il dit tout Sauvelune. »" },
      "Le géant lève la main vers le toit de la bibliothèque.",
    ],
    choices: [
      { label: "Sonner la cloche de la tour", hide: { not: { has: "nord:cloche_libre" } }, to: "II_N3_cloche" },
      { label: "Lui chanter le chant des morts, depuis la cour, en entier si tu le peux", test: { dom: "magie", label: "Chant", help: [{ if: { has: "nord:chant_lu" }, v: 20 }, { if: { has: "nord:lac_bu" }, v: 10 }, { if: { souv: "corbe:aieule" }, v: 10 }] },
        win: { fx: { flag: "nord:geant_chant", ep: ["perso", 2000] }, to: "II_N3_chant" },
        lose: { to: "II_N3_main" } },
      { label: "Tirer. Des flèches, de la poix, tout ce qui brûle", to: "II_N3_combat" },
      { label: "Descendre tous à la crypte, et attendre", to: "II_N3_main" },
    ] }),

  II_N3_cloche: P({ title: "La cloche", place: "moutier",
    text: [
      "Tu cours. Cent vingt marches. La corde est libre. Tu tires.",
      "La cloche sonne au-dessus de ta tête, énorme, et le son roule dans la combe. Le géant s'arrête, la main levée. Il tourne la tête vers la tour. Le murmure cesse. Pendant dix coups, il écoute. Comme un chien qui reconnaît une voix.",
      "Puis il baisse la main. Il se détourne, lentement, et repart vers le col. Tu sonnes jusqu'à ce que tes bras n'en puissent plus.",
    ],
    choices: [{ label: "Redescendre", fx: { flag: "nord:geant_cloche", ep: ["perso", 1500] }, to: "II_N3_aube" }] }),

  II_N3_chant: P({ title: "Le chant des morts", place: "moutier",
    text: [
      { if: { has: "nord:chant_lu" }, text: "Tu sors dans la cour. Tu chantes. Pas les trois vers : la liste. Les noms, ceux que tu as entendu lire dans la grotte, ceux qui te reviennent, dans l'ordre." },
      { if: { not: { has: "nord:chant_lu" } }, text: "Tu sors dans la cour. Tu chantes. Les trois vers, puis des noms : ceux du clan, ceux des morts que tu as connus, tous ceux qui te reviennent." },
      "Le géant s'arrête. Le murmure se tait. Il se penche vers toi, et la neige de son corps se soulève, comme une foule qui se retourne pour écouter.",
      "Tu chantes jusqu'à ce que ta voix casse. Quand tu te tais, il reste penché longtemps. Puis il se redresse, et repart vers le col, à pas lents. Il n'a pas touché au toit.",
      "Dans la poussière qu'il laisse, tu crois entendre, un instant, un des noms que tu as chantés, répété par mille voix.",
    ],
    choices: [{ label: "Rentrer", to: "II_N3_aube" }] }),

  II_N3_combat: P({ title: "Le géant",
    combat: { title: "Le Glaneur géant", enemies: [{ id: "glaneur_petit", n: 2 }], terrain: "bati", range: "distance",
      flee: { dom: "discretion", label: "Se jeter dans la crypte", to: "II_N3_main" },
      win: { fx: { ep: ["seance", 1500], flag: "nord:geant_blesse" }, to: "II_N3_main" },
      lose: { fx: { flag: "nord:geant_fuite" }, to: "II_N3_main" } },
    text: [
      "Les flèches entrent dans la neige sans bruit, et la poix brûle sur son épaule, un instant, avant que la neige ne se referme dessus. Il ne te regarde même pas. Mais de son flanc se détachent deux formes, plus petites, des Glaneurs comme les autres, qui descendent vers la cour.",
    ],
    choices: [] }),

  II_N3_main: P({ title: "La main", place: "moutier",
    text: [
      "La main se pose sur le toit de la bibliothèque. Le moutier gémit, de partout à la fois. La glace des murs devient plus épaisse, à vue d'œil.",
      { if: { has: "nord:livre=prieur" }, text: "Là-haut, dans la bibliothèque, le prieur serre le Livre des Veilles contre lui." },
      "Puis la main se relève. Le géant repart vers le col, sans se presser.",
      "Quand tu montes à la bibliothèque, Arnoul est assis dans son fauteuil, entièrement pris dans la glace, les yeux ouverts. Il a l'air de lire.",
      { if: { has: "nord:livre=prieur" }, text: "Le Livre des Veilles n'est plus sur ses genoux." },
    ],
    choices: [{ label: "Attendre l'aube", fx: { flag: "nord:arnoul_pris" }, to: "II_N3_aube" }] }),

  II_N3_aube: P({ title: "L'aube au moutier", place: "moutier",
    text: [
      "À l'aube, les traces repartent vers le col de l'Ourse. Elles s'arrêtent au bord de la déchirure blanche. Puis elles longent le col, vers le nord, vers les cirques où personne ne va.",
      { if: { not: { has: "nord:arnoul_pris" } }, text: "Le prieur Arnoul est mort dans la nuit, dans son fauteuil, d'avoir vécu quatre-vingt-dix ans. La glace ne l'a pas pris. Il a gardé son nom." },
      { with: "enfant", text: "L'enfant de Sauvelune regarde les traces. Il ne dit rien. Il a pris son sac, et il attend." },
      "Tiennot sort du four. Il demande s'il peut venir. Il n'a nulle part ailleurs.",
      "Tu sais ce qu'il faut faire. Tu le sais depuis que tu as vu la chose sur le lac. On ne ferme pas un col tant qu'un monstre pareil passe dessus quand il veut. Il faut le chasser.",
    ],
    choices: [
      { label: "Emmener Tiennot, et partir sur les traces", fx: { flag: ["ch2:nord:3", "tiennot:suit"], resume: "II_N4_depart", catchup: 7, catchupAll: true, catchupWhy: "le moutier des Veilleurs" }, to: "C2_carrefour", big: true },
      { label: "Renvoyer Tiennot vers l'Hospice, et partir sur les traces", fx: { flag: ["ch2:nord:3", "tiennot:hospice"], resume: "II_N4_depart", catchup: 7, catchupAll: true, catchupWhy: "le moutier des Veilleurs" }, to: "C2_carrefour", big: true },
    ] }),
};
