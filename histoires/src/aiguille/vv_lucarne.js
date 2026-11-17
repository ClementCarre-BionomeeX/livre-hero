// L'Île Folle-Aiguille · side story « L'homme de la lucarne » (owes its question to Hawthorne's Wakefield: can a man
// come back from an absence he chose for nothing, and does his place wait for him?). Act II, Fargue in Morlenc: buying
// candles at the widow Jézéquel's shop, Fargue notices, in a garret window across the lane, a man who watches the shop,
// and recognises him from the wedding portrait behind the counter. Isidore Jézéquel left one morning fourteen years ago
// « to see what she would do without him », and never went back. His wife is to remarry next week. Fargue pushes him to
// knock (vv:frappe), tells the wife himself (vv:dit), or leaves him to his window (vv:tait). Wired in XR_jours.
module.exports = {
  passages: {
    VV_boutique: { act: "II", title: "L'homme de la lucarne", place: "basse_fosse", ambiance: "ville", second: true,
      fx: { meet: "jezequel" },
      text: [
        "Il faut des chandelles pour la cambuse, quarante livres de suif, et Fargue les achète chez la veuve Jézéquel, au fond d'une ruelle de la Basse-Fosse si étroite qu'on y touche les deux murs en écartant les coudes. Une boutique sombre, qui sent la mèche et le lard fondu, avec des chapelets de chandelles pendus aux poutres comme des jambons blancs. La veuve est une femme de cinquante ans, solide, rapide, qui pèse juste et qui rend la monnaie sans qu'on ait à compter derrière elle.",
        "Derrière le comptoir, accroché au mur, un portrait de noces, au pastel, pâli par la fumée : elle, à trente ans, en coiffe, et à côté d'elle un homme mince, au long nez, au menton fuyant, avec une mèche sur l'œil et l'air de quelqu'un qui s'excuse d'être sur l'image. Elle voit Fargue le regarder. « Mon mari. Péri en mer, il y a quatorze ans. Enfin, péri. Parti un matin, avec son parapluie, et jamais revenu. On n'a rien retrouvé. On dit péri, ça fait moins de questions. »",
        "Elle ajoute, en ficelant les paquets, qu'elle se remarie mardi prochain, avec Mévellec, le charretier, un brave homme qui a des mains comme des pelles. Les bans sont publiés. Le tribunal a déclaré le premier mort, il a bien fallu, pour qu'elle ait le droit. Elle dit tout cela sans tristesse et sans gaieté, en serrant ses nœuds.",
        "En sortant, les bras chargés, Fargue lève les yeux. En face, au troisième étage d'une maison penchée, sous le toit, il y a une lucarne, et dans la lucarne, un visage, qui se retire très vite. Un long nez. Une mèche sur l'œil. Un menton qui s'excuse.",
      ],
      choices: [{ label: "Monter les trois étages de la maison penchée", to: "VV_mansarde" }] },
    VV_mansarde: { act: "II", title: "L'homme de la lucarne", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "La porte de la mansarde n'est pas fermée. L'homme est assis sur un tabouret, à la lucarne, de profil, comme s'il n'avait jamais bougé de là. Une chambre de cinq pas sur trois, un lit étroit, une cuvette, une table, et sur la table, rangés avec un soin de commis, quatorze petits carnets noirs, un par an. Il a les cheveux gris, maintenant, la mèche aussi. Il a gardé le parapluie. Il est debout dans un coin, roulé, sanglé, fermé depuis quatorze ans.",
        "Il ne nie pas. Il paraît même soulagé qu'on lui pose enfin la question, comme un homme qui attendait à un guichet depuis très longtemps. Isidore Jézéquel. Il était commis aux écritures chez un armateur. Un matin, il a eu une idée, une petite idée, une idée de rien : partir une semaine, sans prévenir, louer une chambre dans la rue d'à côté, et voir ce qu'elle ferait sans lui. S'il lui manquerait. Combien. Une semaine, pas plus. Il avait pris le parapluie à cause du temps.",
        "Au bout d'une semaine, elle a pleuré. Il en a été très content. Il a attendu une semaine de plus, pour voir si elle pleurerait encore. Puis un mois. Puis il était trop tard pour rentrer sans dire où il avait été, et il ne trouvait pas de phrase qui commence bien. Puis il a cherché la phrase pendant un an. Il travaille comme copiste, à la journée, pour payer la chambre. Il note dans les carnets ce qu'elle fait. Il ouvre le dernier : *Mardi. A ri avec le charretier. A changé le ruban de sa coiffe. Bleu.*",
      ],
      choices: [{ label: "Lui demander ce qu'il compte faire, mardi", to: "VV_mardi" }] },
    VV_mardi: { act: "II", title: "L'homme de la lucarne", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Il ne sait pas. Il dit qu'il descendra, peut-être. Qu'il frappera. Qu'il a préparé une phrase, cette fois. Il la récite à Fargue, à mi-voix : « Je suis allé voir ce que tu ferais sans moi. » Il demande si c'est une bonne phrase. Fargue, qui en a entendu de toutes les sortes au bureau d'enrôlement, pense que c'est la pire phrase qu'un homme ait jamais préparée, et qu'elle est exacte, et que c'est pour cela qu'elle est la pire.",
        "Jézéquel regarde la boutique, en bas. La veuve sort balayer son seuil. Il la suit des yeux avec une tendresse terrible, celle d'un homme qui regarde un tableau qu'il a peint et qui ne lui appartient plus. Il dit qu'il ne l'a jamais quittée, en vérité. Qu'il a été là tous les jours. Qu'il la connaît mieux qu'aucun mari ne connaît sa femme, puisqu'il ne fait que la regarder. Il dit qu'elle ne s'est aperçue de rien, pas une fois, en quatorze ans, et il le dit avec une fierté de joueur.",
        "Fargue pense à une fenêtre aux géraniums, de l'autre côté de la ville, derrière laquelle une jeune fille coud en toussant. Il pense qu'il va partir dans huit jours, pour un voyage dont il ne sait pas s'il reviendra, pour des raisons qu'il ne peut dire à personne, et qu'il a, lui aussi, cherché une phrase qui commence bien. Il ne l'a pas trouvée non plus. Il se demande combien de temps on peut regarder les siens de loin avant que la place se referme, et si l'on s'en aperçoit, quand elle se referme.",
      ],
      choices: [
        { label: "Le prendre par le bras et le faire descendre frapper, ce soir", fx: { flag: "vv:frappe" }, to: "VV_frappe" },
        { label: "Descendre seul, et dire à la veuve qui la regarde d'en face", fx: { flag: "vv:dit" }, to: "VV_dit" },
        { label: "Le laisser à sa lucarne : ce n'est pas son affaire", fx: { flag: "vv:tait" }, to: "VV_tait" },
      ] },
    VV_frappe: { act: "II", title: "L'homme de la lucarne", place: "basse_fosse", ambiance: "nuit", second: true,
      text: [
        "Il le prend par le bras, comme on prend un ivrogne pour le ramener, et il le descend les trois étages, avec le parapluie, parce que Jézéquel refuse de partir sans. Dans la ruelle, l'homme se met à trembler, des genoux aux dents. Fargue le pousse jusqu'à la porte de la boutique, où il reste une minute entière, le poing levé, sans frapper. Puis il frappe. Deux petits coups, polis, de commis aux écritures.",
        "Elle ouvre, une chandelle à la main. Elle le regarde. Fargue, adossé au mur d'en face, la voit le regarder, longtemps, de la mèche au parapluie, avec un visage où passent l'une après l'autre des choses qu'il ne sait pas nommer et qu'il n'a pas envie de nommer. Jézéquel ouvre la bouche pour dire sa phrase. Elle ne lui en laisse pas le temps. Elle dit : « Tu as pris ton parapluie. Il n'a pas plu une seule fois, ce jour-là. » Et elle s'écarte pour le laisser entrer, et elle referme la porte.",
        "Le lendemain, la boutique est fermée, volets clos. Le surlendemain, elle est ouverte. La veuve, qui n'est plus veuve, pèse le suif au comptoir, et dit ce qu'il faut faire, et Jézéquel, derrière elle, en tablier, range les chandelles sur les poutres, et le fait mal, et elle le lui dit, et il recommence. Le portrait de noces a été décroché. Il y a, à sa place, un clou nu.",
        "Le charretier Mévellec boit à la taverne du coin depuis deux jours. Il dit à qui veut l'entendre que c'est bien sa chance, d'épouser une veuve dont le mort revient, et que le premier lui a volé quatorze ans, et que maintenant il lui vole la suite. On lui paie à boire. Fargue lui en paie un aussi, sans rien dire, parce qu'il a mis un homme à la porte d'une maison, et qu'il en a mis un autre dehors du même geste.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "VV" }, back: "XR_jours" }] },
    VV_dit: { act: "II", title: "L'homme de la lucarne", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Il redescend seul, traverse la ruelle et entre à la boutique. La veuve Jézéquel lève les yeux de ses comptes. Il lui dit, à voix basse, qu'il a quelque chose à lui apprendre au sujet de son mari, et qu'elle ferait mieux de s'asseoir. Elle ne s'assied pas. Elle le regarde un moment, puis elle demande : « La lucarne d'en face ? »",
        "Elle sait. Elle sait depuis douze ans. Elle l'a vu la deuxième année, un soir d'hiver, à la lueur d'une chandelle qu'il avait oublié de souffler : le nez, la mèche. Elle a failli traverser. Elle a failli monter. Puis elle s'est dit qu'il avait voulu voir ce qu'elle ferait sans lui, et elle a décidé de le lui montrer. Elle a tenu la boutique. Elle a remboursé ses dettes à lui. Elle a ri, quand elle avait envie de rire, en sachant qu'il notait. Elle a changé de ruban. « Il voulait savoir. Je lui ai appris. Douze ans de leçons. »",
        "Elle dit qu'elle se marie mardi, avec Mévellec, et qu'elle se mariera. Que Mévellec, lui, frappe à la porte quand il veut entrer. Puis elle demande à Fargue une chose : ne pas dire à l'homme d'en face qu'elle savait. Qu'il garde sa fierté de joueur, puisque c'est tout ce qu'il a gardé. Elle dit qu'elle ne lui doit rien d'autre, mais ça, elle veut bien le lui laisser.",
        "Le mardi, Fargue passe dans la ruelle, à l'heure de la noce. La boutique est fermée, avec un bouquet sur le volet. En haut, à la lucarne, le visage est là, et il regarde passer le cortège, et il note, Fargue en est sûr, la couleur du ruban. Fargue a gardé le secret de l'une et laissé à l'autre son carnet. Il se dit qu'il a servi deux personnes à la fois, et qu'il ne sait laquelle des deux il a trahie. Peut-être aucune. Peut-être chacune un peu.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "VV" }, back: "XR_jours" }] },
    VV_tait: { act: "II", title: "L'homme de la lucarne", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Il dit à Jézéquel qu'il a des chandelles à porter à bord, et qu'un homme qui a attendu quatorze ans peut bien choisir seul le quinzième. Il descend. Il ne dit rien à la veuve, qui le salue de la main en balayant. Il emporte ses quarante livres de suif à la Cormorane, et il range les chandelles dans la cambuse, par paquets de dix, et il compte, et il recompte, et il ne pense à rien d'autre de toute la journée, avec application.",
        "Le mardi, il passe dans la ruelle. Il n'avait rien à y faire. La boutique est fermée, avec un bouquet sur le volet : la noce est partie à l'église. En haut, la lucarne est fermée aussi. Un volet cloué. La logeuse, sur le pas de sa porte, dit à qui veut l'entendre que son locataire du troisième est parti dans la nuit sans payer, en laissant quatorze carnets sur la table et un parapluie dans un coin. Elle a jeté les carnets au feu. Elle garde le parapluie. Un bon parapluie, presque neuf.",
        "Fargue lui achète le parapluie, sans savoir pourquoi, deux sous. Puis il monte à la maison des Sœurs, et il demande à voir Lisette. On lui dit que ce n'est pas l'heure des visites. Il dit qu'il attendra. Il attend dans le parloir, le parapluie du disparu sur les genoux, jusqu'à ce qu'on vienne la chercher. Quand elle arrive, il ne trouve pas de phrase. Il lui dit seulement qu'il passait. Elle sourit, et elle tousse, et elle dit qu'elle l'avait vu, de la fenêtre, faire trois fois le tour du jardin avant d'entrer.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "VV" }, back: "XR_jours" }] },
  },
  extras: {
    people: {
      jezequel: { name: "Isidore Jézéquel", aka: ["l'homme de la lucarne"], qui: "Ancien commis aux écritures de Morlenc, disparu un matin, avec son parapluie, il y a quatorze ans." },
    },
    quests: [
      { id: "VV", act: "II", kind: "annexe", title: "L'homme de la lucarne", start: "VV_boutique", doit: "wakefield", echo: ["vv:frappe", "vv:dit", "vv:tait"] },
    ],
  },
};
