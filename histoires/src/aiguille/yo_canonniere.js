// L'Île Folle-Aiguille · side story « La canonnière » (owes its question to Boule de Suif: why do the people a woman
// saved despise her for the price she paid?). In the besieged chapel the fever rises among the wounded and the bark
// is gone; the second medicine chest is in the mutineers' camp. Rosemonde Lhuillier, who served in the navy with the
// gunner Malandain, goes down alone at night under a white rag and comes back at dawn with the chest. Nobody asks what
// it cost; everybody whispers it. The doctor gives her the first place by the fire before them all (yo:place), speaks
// against the baron who wants her under guard (yo:defendue), or keeps quiet and treats the sick (yo:silence).
// Wired in A4w_jours.
module.exports = {
  passages: {
    YO_fievre: { act: "IV", title: "La canonnière", place: "misericorde", ambiance: "nuit",
      text: [
        "La fièvre entre dans la sacristie le troisième soir, par la blessure au mollet, comme un voleur par une fenêtre qu'on a oublié de fermer. Elle passe ensuite d'une paillasse à l'autre, de la façon qu'ont les fièvres d'île, sans qu'on sache comment : un frisson, une soif, un regard qui se fixe trop longtemps sur le plafond, puis des mots qui ne s'adressent plus à personne. Au matin, ils sont trois à délirer.",
        "Victorine connaît le remède. Elle n'en a plus. L'écorce de quinquina est restée dans le second coffre de pharmacie, celui du canot de terre, que les hommes de Fargue ont emporté à la plage le jour du débarquement avec le reste. Elle l'a dit tout haut, ce matin, devant les blessés et devant la capitaine, sans y penser, par une habitude de médecin qui fait l'inventaire de ce qui manque.",
        { if: { has: "xf:remedes" }, text: "Le flacon de Maître Hallé, sa teinture contre la fièvre, est vide depuis la veille. Elle l'a vidé goutte à goutte, au compte-gouttes, avec une économie d'avare. Il n'en reste qu'une odeur d'herbe amère au fond du verre." },
        "Le soir, Rosemonde Lhuillier vient s'asseoir à côté d'elle, sur le coffre aux chasubles. Elle sent la poudre et la graisse à canon, comme toujours. Elle a cinquante ans, des bras de débardeur, une figure large et douce de fermière, et une voix enrouée par vingt ans de commandements dans le bruit.",
        "« Ce coffre, docteur. Il est sous la tente de Malandain. Je l'ai vu ce matin, du clocher, à la lunette. » Elle regarde ses mains. « On a servi ensemble, Malandain et moi, sur la Fortunée, il y a quinze ans, dans la marine. Il a des dettes envers moi. De vieilles dettes. Le genre de dettes qu'un homme comme lui paie, s'il est assez saoul. »",
      ],
      choices: [{ label: "« Je vous l'interdis. »", to: "YO_nuit" }, { label: "Ne rien répondre", to: "YO_nuit" }] },
    YO_nuit: { act: "IV", title: "La canonnière", place: "misericorde", ambiance: "nuit",
      text: [
        "Rosemonde hoche la tête, comme si on lui avait répondu ce qu'elle attendait, quoi qu'on lui ait répondu. Elle se lève. Elle va trouver la capitaine Ribaud, et elles parlent à voix basse, toutes les deux, dans l'ombre du chœur, longtemps. La capitaine finit par détourner les yeux, ce que Victorine ne l'a jamais vue faire.",
        "À minuit, Rosemonde sort par la petite porte de la sacristie, sans armes, avec un chiffon blanc noué au bout d'un bâton. Victorine la regarde descendre le sentier de l'éperon, dans la lumière de la lune, une grande silhouette lente qui ne se cache pas. Puis les arbres la prennent.",
        "La nuit est longue. De la plage, en bas, montent par moments des éclats de voix, des chansons, un rire d'homme, énorme, qui roule sur l'eau, et une fois, un cri, bref, qu'on ne sait pas attribuer. Personne ne dort dans la chapelle. Personne n'en parle. Le baron, dans le chœur, fait semblant de lire. Les fiévreux délirent, et Victorine passe de l'un à l'autre avec un linge mouillé, et compte les respirations comme on compte des heures.",
        "À l'aube, Rosemonde remonte le sentier. Elle porte le coffre de pharmacie sur l'épaule, comme un sac de grain. Elle a une lèvre fendue, et la manche de sa vareuse déchirée, et elle sent le rhum à dix pas. Elle pose le coffre sur l'autel, devant tout le monde. Elle ne dit pas un mot. Elle va s'asseoir dans le coin le plus sombre de la nef, contre un pilier, et ferme les yeux.",
      ],
      choices: [{ label: "Ouvrir le coffre", to: "YO_matin" }] },
    YO_matin: { act: "IV", title: "La canonnière", place: "misericorde", ambiance: "temple",
      text: [
        "Il est intact. L'écorce de quinquina, dans son bocal de grès, la charpie, les lancettes, deux fioles de laudanum, le baume. On n'y a même pas touché. Victorine prépare la décoction dans la marmite de la capitaine, sur le feu du chœur, et l'odeur amère de l'écorce monte dans la chapelle, et c'est la meilleure odeur du monde.",
        "Le soir, deux des trois fiévreux ont les yeux clairs. Le troisième dort, d'un vrai sommeil.",
        "C'est le soir aussi que ça commence. Pas devant elle. Derrière elle, autour du feu, entre deux bouchées, à voix basse : un mot sur ce qu'elle a donné en échange, un ricanement, une plaisanterie de matelot qui fait rire jusqu'au moment où l'on s'aperçoit que Rosemonde l'a entendue, et qu'on se tait trop tard. Un des fiévreux sauvés, celui de l'épaule, qui lui doit la vie depuis ce matin, est le premier à rire. On s'écarte d'elle, au feu. On lui laisse sa part de biscuit à côté d'elle, par terre, comme on la laisse à un chien qu'on craint un peu.",
        "Le baron, lui, dit les choses à voix haute, puisqu'il est baron. « Une femme qui passe la nuit au camp de l'ennemi en revient avec quelque chose, dit-il à la capitaine, devant tout le monde. Un coffre, et peut-être autre chose. Des promesses, des renseignements, l'heure de l'assaut. Je demande qu'on la garde à vue. Pour notre sûreté à tous. »",
        "Rosemonde, contre son pilier, ne bouge pas. Elle regarde ses mains.",
      ],
      choices: [
        { label: "Aller porter à Rosemonde le premier bol de soupe, et lui faire place au feu, à côté de toi", fx: { flag: "yo:place" }, to: "YO_place" },
        { label: "Répondre au baron, devant tout le monde", fx: { flag: "yo:defendue" }, to: "YO_baron" },
        { label: "Aller à tes fiévreux, et ne rien dire", fx: { quest: "YO", flag: "yo:silence" }, back: "A4w_jours" },
      ] },
    YO_place: { act: "IV", title: "La canonnière", place: "misericorde", ambiance: "temple",
      text: [
        "Victorine remplit le premier bol, avant celui de la capitaine, avant celui du baron, et le porte à travers la nef, dans un silence qui se fait autour d'elle à mesure qu'elle avance, comme un cercle dans l'eau. Elle le met dans les mains de Rosemonde. Elle prend la canonnière par le bras, la relève, et l'amène au feu, et la fait asseoir à sa propre place, entre elle et la capitaine.",
        "Personne ne dit rien. La capitaine Ribaud pousse son écuelle de quelques pouces, pour faire de la place, sans lever les yeux. Benoît, en face, se décale aussi. Puis l'homme à l'épaule, le premier qui avait ri, tend à Rosemonde son quart de rhum, de sa main valide, la figure rouge jusqu'aux oreilles.",
        "Rosemonde boit la soupe. Elle ne remercie personne. Quand elle a fini, elle dit seulement, à Victorine, très bas : « Il était saoul, docteur. Ça a été vite. » Et elle se met à pleurer, sans bruit, la figure tournée vers le feu, et tout le monde fait semblant de regarder ailleurs, ce qui est la seule délicatesse dont une chapelle assiégée soit capable.",
      ],
      choices: [{ label: "Retourner à tes fiévreux", fx: { quest: "YO" }, back: "A4w_jours" }] },
    YO_baron: { act: "IV", title: "La canonnière", place: "misericorde", ambiance: "temple",
      text: [
        "Victorine se lève, s'essuie les mains à son tablier, et marche jusqu'au chœur, où le baron est assis dans la seule stalle qui ait encore son dossier.",
        "« Monsieur le baron, dit-elle, assez fort pour la nef entière. Il y a trois hommes dans cette sacristie qui seraient morts ce soir sans cette femme. Il y en a un quatrième dans cette stalle qui serait mort de la fièvre demain, puisqu'il l'a attrapée cet après-midi, et qu'il ne le sait pas encore. » Le baron porte la main à son front, sans le vouloir. « Vous la ferez garder à vue quand vous m'aurez rendu votre ration d'écorce. Je vous la donne dans une heure. »",
        "Il y a un silence. Puis quelqu'un rit, au fond de la nef, d'un vrai rire, cette fois, et c'est la capitaine Ribaud. Le baron se tait. Il ne demande plus rien, ni ce soir ni les jours suivants. Il boit sa décoction sans la regarder.",
        "Rosemonde, contre son pilier, n'a pas levé les yeux. Mais le soir, au feu, on lui fait place. Pas de bon cœur : de peur de la médecin. C'est déjà ça.",
      ],
      choices: [{ label: "Retourner à tes fiévreux", fx: { quest: "YO" }, back: "A4w_jours" }] },
  },
  extras: {
    quests: [
      { id: "YO", act: "IV", kind: "annexe", title: "La canonnière", start: "YO_fievre", doit: "bouledesuif", echo: ["yo:place", "yo:defendue", "yo:silence"] },
    ],
  },
};
