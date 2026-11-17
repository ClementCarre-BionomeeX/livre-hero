// L'Île Folle-Aiguille · act I, chapter 2, more of the doctor's evening in Varnèse: the veiled lady who wants her blood
// to come back, the cellar where the dead husband's laudanum waits, the poacher salted by the baron's keepers who saw
// how the guests of La Garenne spend their nights. Wired in A1v_soir.
module.exports = {
  passages: {
    XL_voilee: { act: "I", title: "La dame voilée", place: "varnese_maison", ambiance: "nuit",
      text: [
        "Quelqu'un attend sur le banc du cabinet, dans le noir. Victorine l'a vue en entrant et a fait semblant de ne rien voir, par politesse : une femme assise très droite, les mains gantées sur un réticule, un voile de deuil rabattu sur un chapeau qui coûte plus cher que la consultation de toute une année. Les femmes qui attendent dans le noir ont toujours la même chose à demander, et elles attendent toujours qu'on éteigne pour le demander.",
        "Victorine allume une seule chandelle, la pose loin du banc, et s'assoit à son bureau en lui tournant à demi le dos. La dame relève son voile. C'est Madame Saint-Aubert, la femme du juge de paix, trente ans, trois enfants, une église pleine de bonnes œuvres et une loge à la messe de dix heures.",
        "« Je voudrais, dit-elle d'une voix très posée, quelque chose qui fasse revenir le sang. Il est en retard. »",
        "Victorine prend le poignet ganté, défait les trois boutons de nacre, compte le pouls. Elle pose deux questions, la date et les nausées, et reçoit deux réponses exactes, données par une femme qui a déjà fait le calcul cent fois dans son lit. Trois mois. Le sang ne reviendra pas tout seul.",
      ],
      choices: [
        { label: "« Qui est le père ? »", to: "XL_voilee_pere" },
        { label: "Sortir la sabine de l'armoire, et dire la dose", to: "XL_voilee_sabine" },
        { label: "« Je ne vous donnerai rien de ce que vous demandez. Écoutez pourquoi. »", to: "XL_voilee_refus" },
      ] },
    XL_voilee_pere: { act: "I", title: "La dame voilée", place: "varnese_maison", ambiance: "nuit",
      text: [
        "Madame Saint-Aubert sourit, d'un sourire de salon qu'elle a dû apprendre au couvent et qui tient tout seul, comme un échafaudage autour d'une maison vide.",
        "« Mon mari, docteur. Je suis une honnête femme. C'est bien le malheur. »",
        "Elle tire sur un gant, doigt par doigt. « Au troisième, j'ai perdu tant de sang que l'abbé m'a donné l'extrême-onction entre la poire et le fromage. La sage-femme a dit à Saint-Aubert que le quatrième me tuerait. Saint-Aubert a répondu que c'était l'affaire de Dieu. Il a sa conscience, voyez-vous, et elle est très bien tenue : il la confesse tous les samedis, et le dimanche elle est comme neuve. »",
        "Elle remet le gant. « Je ne veux pas mourir pour la conscience de Saint-Aubert. Je veux voir grandir les trois que j'ai. Voilà tout. Ce n'est pas un crime bien original. »",
      ],
      choices: [
        { label: "Sortir la sabine de l'armoire, et dire la dose", to: "XL_voilee_sabine" },
        { label: "« Je ne vous donnerai rien de ce que vous demandez. Écoutez pourquoi. »", to: "XL_voilee_refus" },
      ] },
    XL_voilee_sabine: { act: "I", title: "La sabine", place: "varnese_maison", ambiance: "nuit",
      text: [
        "La sabine est dans le troisième bocal du haut, derrière la camomille, où personne ne cherche jamais rien. Victorine pèse la poudre sur sa petite balance de cuivre, au grain près, avec une attention qu'elle refuse aux ordonnances de toux. La flamme de la chandelle tremble au-dessus des plateaux ; leur ombre, sur le mur, s'abaisse et se relève lentement, comme une chose qui respire.",
        "Elle plie la poudre en trois papiers. Elle dit la dose, puis la redit, puis la fait répéter. Elle dit ce qui viendra, la douleur, le sang, et à partir de combien de sang il faudra envoyer le cocher la chercher, elle, et personne d'autre, à n'importe quelle heure, sous n'importe quel prétexte. « Une indigestion de moules, dit-elle. Votre mari me croira. Il croit à tout ce qui l'arrange. »",
        "Madame Saint-Aubert range les trois papiers dans son réticule, entre un mouchoir brodé et un chapelet de nacre. Elle pose sur le bureau une pièce d'or. Victorine la regarde un moment, et la garde. L'honnêteté coûte trois mille quatre cents livres, ce mois-ci ; elle a renoncé à se l'offrir.",
        "Sur le seuil, la dame rabat son voile. « Vous risquez le bagne, docteur. — Vous risquiez le cimetière, madame. On a chacune ses petits risques. »",
      ],
      choices: [{ label: "Fermer l'armoire à clef, et la porte derrière elle", fx: { flag: "victorine:sabine", gold: 10 }, back: "A1v_soir" }] },
    XL_voilee_refus: { act: "I", title: "La dame voilée", place: "varnese_maison", ambiance: "nuit",
      text: [
        "Victorine parle longtemps. Elle parle de la sabine, de la rue et de l'ergot, de l'aiguille à tricoter et du persil, de tout ce qu'on vend sous le manteau aux foires de Morlenc, et de ce qu'elle a vu sortir des chambres où on les a essayés. Elle parle de la meunière de Kervil, morte en quatre jours, la fièvre montant comme une marée, et qui la suppliait à la fin de lui rendre son petit, celui qu'elle avait voulu perdre. Elle parle sans élever la voix, avec une précision de professeur ; c'est la seule manière qu'elle connaisse de dire les choses horribles.",
        "« À trois mois, dit-elle enfin, je vous tuerais une fois sur cinq. Accouchée, avec moi au pied du lit et la sage-femme renvoyée à ses prières, vous avez une meilleure chance. Faites-moi appeler au premier mal. Avant le premier mal. Faites-moi appeler pour une indigestion de moules, et nous verrons ensemble ce que dit Dieu, et ce que dit la médecine, et lequel des deux parle le plus fort. »",
        "Madame Saint-Aubert se lève. Elle a les yeux secs et la bouche très mince. « Vous êtes bien la seule à croire encore en ma chance, docteur. » Elle s'en va sans rien payer, ce que Victorine trouve juste.",
        "La chandelle a coulé sur le bureau en une longue larme jaune, figée, qui pend du bord du plateau comme une stalactite dans une grotte où personne n'entre plus.",
      ],
      choices: [{ label: "Souffler la chandelle", fx: { flag: "victorine:sabine_refus" }, back: "A1v_soir" }] },

    XL_cave: { act: "I", title: "La cave aux simples", place: "varnese_maison", ambiance: "nuit",
      text: [
        "La pharmacie de la semaine se prépare à la cave, où sèchent les simples. Victorine y descend avec une lanterne, par l'escalier de pierre qui sent la terre et le salpêtre. En bas, les bouquets pendent aux poutres la tête en bas, par centaines, sauge, rue, digitale, pavot, belladone, valériane, comme une assemblée de pendus très petits et très patients ; quand la lanterne passe, leurs ombres tournent toutes ensemble sur les murs, et reviennent ensuite à leur place, une à une, avec un retard qui n'a rien de naturel.",
        "Monsieur Prosper l'attend en bas des marches. C'est-à-dire qu'elle l'y a descendu la semaine dernière pour faire de la place au cabinet, et qu'elle l'oublie chaque fois, et que chaque fois, au tournant de l'escalier, la lanterne lui montre d'abord le sourire. Un squelette sourit toujours. C'est un trait de caractère qu'on ne peut pas lui retirer.",
        "« Bonsoir, Prosper. Toujours rien à me dire ? » Prosper, fidèle à lui-même, garde ses opinions.",
        "Elle pile, pèse, filtre, étiquette. Au fond du dernier rayon, derrière les bocaux de graines de lin, sa main rencontre une fiole qu'elle ne cherchait pas et qu'elle reconnaît au toucher : la fiole de laudanum d'Hector, la dernière, celle de la dernière semaine, encore aux deux tiers pleine. Elle porte, collée de travers, une étiquette de la main d'Hector : *Pour dormir sans rêver de V.*",
      ],
      choices: [
        { label: "La glisser dans la sacoche, avec le reste", to: "XL_cave_garde" },
        { label: "La vider dans la rigole, jusqu'à la dernière goutte", to: "XL_cave_jete" },
      ] },
    XL_cave_garde: { act: "I", title: "La cave aux simples", place: "varnese_maison", ambiance: "nuit",
      text: [
        "Du laudanum est du laudanum. Celui d'Hector endort aussi bien qu'un autre ; l'opium ignore qui l'a payé et qui l'a gâché. Victorine décolle l'étiquette avec l'ongle, et elle se déchire au milieu, entre *rêver* et *de V.*, ce qui est presque drôle.",
        "Elle glisse la fiole dans la poche intérieure de la sacoche, celle où l'on met les choses qu'on ne prête pas. Un jour, quelqu'un aura mal et rien d'autre ne restera. Ce jour-là, Hector servira enfin à quelque chose.",
        "En remontant, elle souhaite le bonsoir à Prosper. Il le lui rend à sa manière, par son silence, et par son ombre, qui monte trois marches derrière elle avant de se rappeler qu'elle appartient à la cave.",
      ],
      choices: [{ label: "Remonter, la sacoche plus lourde d'une fiole", fx: { flag: "victorine:laudanum_hector" }, back: "A1v_soir" }] },
    XL_cave_jete: { act: "I", title: "La cave aux simples", place: "varnese_maison", ambiance: "nuit",
      text: [
        "Le laudanum coule dans la rigole de la cave, épais, brun, avec une odeur de safran et de vieux vin qui monte d'un coup et remplit la voûte. Les bouquets de pavot, au-dessus, se balancent un peu, dans le courant d'air de la lanterne, comme s'ils reconnaissaient un parent.",
        "Elle secoue la fiole jusqu'à la dernière goutte. Elle la rince. Elle la range parmi les fioles propres, sans étiquette, et demain elle y mettra de l'eau de mélisse pour les nerfs de Madame la mairesse, ce qui est une forme de vengeance qu'Hector aurait appréciée : il détestait la mairesse.",
        "Elle reste un moment debout dans l'odeur. Elle pense à ses rêves à lui, ceux dont elle faisait partie et dont il voulait se passer. Elle n'en saura jamais rien. Elle remonte.",
      ],
      choices: [{ label: "Remonter, et ouvrir la fenêtre", fx: { flag: "victorine:laudanum_jete" }, back: "A1v_soir" }] },

    XL_braco: { act: "I", title: "La fenêtre de derrière", place: "varnese_maison", ambiance: "nuit",
      text: [
        "On gratte à la fenêtre de derrière, celle de l'arrière-cuisine, qui donne sur le jardin et, au-delà du jardin, sur rien. On ne gratte jamais à cette fenêtre-là pour une bonne raison. Victorine ouvre quand même. Une figure noire de suie et de boue se dresse dans l'ombre du jardin, un bonnet enfoncé jusqu'aux sourcils, et une voix qui chuchote avec un effort considérable :",
        "« C'est Jobic, docteur. Je viens pour mon derrière. »",
        "Jobic Le Goff est le braconnier de Varnèse, le seul, ce qui fait de lui une institution. Il a pris cette nuit, dans les bois de la Garenne, une décharge de gros sel tirée par un garde du baron ; il l'a prise de dos, en fuyant, ce qui, explique-t-il en enjambant l'appui de la fenêtre, prouve son innocence : un coupable se serait retourné.",
        "Il s'allonge à plat ventre sur la table de la cuisine, entre la miche et le pot de beurre, et présente sa blessure à la médecine avec une résignation de martyr. Le gros sel est entré profond, en cinquante grains au moins, et chaque grain brûle comme une petite braise sous la peau.",
      ],
      choices: [{ label: "Retirer le sel, grain à grain, à la pince", test: { dom: "savoir", diff: 0, label: "Cinquante grains, et pas un de plus" },
        win: { to: "XL_braco_soin" }, lose: { to: "XL_braco_soin" } }] },
    XL_braco_soin: { act: "I", title: "La fenêtre de derrière", place: "varnese_maison", ambiance: "nuit",
      text: [
        { outcome: "win", text: "Grain à grain, à la pince, à la chandelle, avec une patience de dentellière. Jobic compte à voix haute, pour se tenir compagnie. À cinquante-trois, Victorine annonce que c'est le dernier. Il ne la croit pas ; elle lui montre la soucoupe. Il la contemple avec un respect religieux, comme on regarde des reliques." },
        { outcome: "lose", text: "Grain à grain, à la pince ; certains se dérobent, fondent, s'enfoncent ; il faut inciser deux fois. Jobic jure en breton, puis en français, puis dans une langue qu'il invente pour l'occasion et qui sonne très bien. Il en restera deux ou trois, qui fondront tout seuls, et qui lui feront, à chaque pluie, une conversation avec le baron." },
        "Elle lave la plaie au vinaigre. Jobic, la joue contre le bois de la table, reprend souffle et entreprend de payer, faute de mieux, en monnaie de braconnier, qui est la nouvelle.",
        "« Vous savez ce qu'ils font, là-haut, les amis du baron ? Ils chassent pas. J'ai passé trois nuits sous leurs fenêtres, à guetter les lièvres qu'ils ne tuent pas ; ils ont jamais tiré un coup de fusil. Ils ont des chiens qui s'ennuient et des fusils qui rouillent. Ce qu'ils font, docteur, c'est des cartes. Toute la nuit, jusqu'au jour, les rideaux tirés, quatre messieurs de Morlenc en habit noir et le baron. Et c'est le baron qui perd. »",
      ],
      choices: [
        { label: "« Comment sais-tu qu'il perd ? »", to: "XL_braco_cartes" },
        { label: "Le renvoyer par la fenêtre, avec un pot d'onguent", fx: { flag: "victorine:jobic" }, back: "A1v_soir" },
      ] },
    XL_braco_cartes: { act: "I", title: "La fenêtre de derrière", place: "varnese_maison", ambiance: "nuit",
      text: [
        "Jobic se soulève sur un coude, offensé dans son honneur de témoin.",
        "« Parce que je vois, docteur. Le rideau du petit salon a un trou, à hauteur d'homme debout sur un tonneau de pluie, et j'ai de bons yeux pour la nuit, c'est mon métier. Les autres, ils ramassent ; lui, il signe. Il signe des papiers, sur le coin de la table, entre deux donnes. Et le jour se lève, et les autres vont se coucher, et lui il reste assis tout seul devant les chandelles, et il regarde ses mains. Un homme qui gagne, ça ne regarde pas ses mains. »",
        "Victorine connaît ce regard-là. Elle l'a vu dix ans à sa propre table, le matin, au-dessus d'une tasse de café qui refroidissait. Le regard d'un homme qui fait le compte de ce qu'il a joué et ne trouve plus rien à vendre, sinon ce qui appartient aux autres.",
        "« Tu n'en parleras à personne, Jobic. — À personne, docteur. Je suis muet comme un lièvre. » Il enjambe la fenêtre en boitant, et le jardin l'avale.",
      ],
      choices: [{ label: "Refermer la fenêtre, et rester un moment devant", fx: { flag: "victorine:jobic", set: { "victorine:cartes": "baron" } }, back: "A1v_soir" }] },
  },
  extras: {
    people: {
      saint_aubert: { name: "Madame Saint-Aubert", aka: ["la dame voilée", "la femme du juge"], f: true,
        qui: "La femme du juge de paix de Varnèse : trente ans, trois enfants, une loge à la messe de dix heures." },
      jobic: { name: "Jobic Le Goff", aka: ["Jobic", "le braconnier"], f: false,
        qui: "Le braconnier de Varnèse, le seul, ce qui fait de lui une institution." },
    },
  },
};
