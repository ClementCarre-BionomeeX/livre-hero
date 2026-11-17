// L'Île Folle-Aiguille · side story « L'eau de la crique » (owes its question to Hawthorne's Dr. Heidegger's
// Experiment: given back their youth for an hour, would old men do any better with it than the first time?). Act III,
// Victorine at the islet: three old men of the crew, the cooper, the caulker and a former boatswain shipped as a plain
// hand, fill a secret gourd at the spring of the cove, convinced by a legend written in the margin of an old chart
// that it gives back youth. They ask the ship's physician to witness. That night, on the forecastle, they drink, grow
// loud, race each other up the shrouds, and one of them slips. Victorine analyses the water before them (sh:verite),
// keeps the gourd as a remedy for the sickbay (sh:remede), or lets them have their night (sh:laisse). Optional:
// SH_thepaut. Wired in A3w_ilot.
module.exports = {
  passages: {
    SH_source: { act: "III", title: "L'eau de la crique", place: "ilot", ambiance: "nature",
      fx: { meet: "thepaut" },
      text: [
        "La source de la crique sort d'une fente de rocher couverte de mousse, au fond d'un creux d'ombre où il fait frais comme dans une église. L'eau tombe dans une vasque naturelle, si claire qu'on voit au fond chaque grain de sable, et un peu plus loin, une écrevisse pâle qui ne bouge pas et qui a peut-être cent ans.",
        "Victorine y descend pour remplir ses fioles et trouve la place occupée. Trois vieillards du bord sont accroupis autour de la vasque, avec l'air de conspirateurs qu'on a surpris à prier. Hilarion Thépaut, le tonnelier, soixante-huit ans, des mains comme des maillets. Sulpice Plouzané, le calfat, presque aussi vieux, qui sent le brai jusque dans ses cheveux. Et Joachim Le Dû, ancien maître de manœuvre, qui a perdu son grade il y a dix ans pour une affaire de rhum et s'est rembarqué comme simple matelot plutôt que de mourir à terre.",
        "Ils remplissent une gourde de cuir, à tour de rôle, en la tenant comme un ciboire. Thépaut, en voyant Victorine, rougit comme un enfant. Puis il se reprend. Il lui montre un papier plié en huit, tout gras, une copie qu'il a faite lui-même d'un coin de vieille carte, chez un brocanteur de Morlenc. On y voit le dessin d'un îlot rond, une crique, une croix, et, d'une écriture ancienne, deux mots de latin que Victorine traduit sans peine : Fontaine de jeunesse.",
        "« Vous êtes savante, madame la médecin, dit Thépaut. Vous allez nous dire si c'est vrai. Ce soir, à la nuit, sur le gaillard d'avant, on boit. Il nous faut un témoin. Quelqu'un d'instruit. Pour que personne ne dise après qu'on a rêvé. »"
      ],
      choices: [
        { label: "Demander à Thépaut ce qu'il ferait de ses vingt ans", to: "SH_thepaut", hide: { seen: "SH_thepaut" } },
        { label: "Aider Plouzané, le calfat, à porter la gourde jusqu'au canot", to: "SH_plouzane", hide: { seen: "SH_plouzane" } },
        { label: "Monter, le soir, sur le gaillard d'avant", to: "SH_essai" }
      ] },
    SH_thepaut: { act: "III", title: "L'eau de la crique", place: "ilot", ambiance: "nature",
      text: [
        "Les deux autres sont partis porter la gourde au frais, dans une barrique. Thépaut reste. Il s'assied sur une pierre, au bord de la vasque, ses mains de maillet sur les genoux, et il répond à la question avec une franchise désarmante, parce qu'il y a pensé toute sa vie.",
        "Il dit qu'à vingt ans, il y avait une fille, à la cale de son village, qui s'appelait Rose et qui raccommodait les filets. Qu'elle l'attendait. Qu'il avait le choix entre l'épouser et partir pour une campagne de trois ans qui payait double, et qu'il est parti, pour l'argent, pour la maison qu'il voulait lui offrir au retour. Qu'au retour, elle avait épousé le boulanger. Qu'il a bu l'argent de la maison en six mois.",
        "« Si j'ai vingt ans ce soir, dit-il, je ne partirai pas. » Il dit ça avec une telle certitude que Victorine en est presque convaincue. Puis il ajoute, en regardant l'eau : « Remarquez, la campagne payait vraiment double. »",
        "Il rit. Il se lève, en s'appuyant sur ses genoux, avec un grincement de vieille porte, et remonte vers la plage, en se tenant le dos."
      ],
      choices: [
        { back: "SH_source", label: "Retourner au bord de la vasque" }
      ] },
    SH_plouzane: { act: "III", title: "L'eau de la crique", place: "ilot", ambiance: "nature",
      fx: { meet: "plouzane" },
      text: [
        "Sulpice Plouzané porte la gourde contre son ventre, à deux mains, comme on porte un nouveau-né à l'église, et il marche dans le sable avec une prudence de funambule. Victorine marche à côté de lui. Il sent le brai, en effet, d'une odeur si épaisse, si ancienne, qu'elle fait partie de lui comme la couleur de ses yeux.",
        "Elle lui demande ce qu'il attend de la fontaine. Il réfléchit. Il dit que la jeunesse, il l'a eue, il sait ce que c'est, beaucoup de bruit pour peu de chose. Il veut une seule chose. Il veut sentir.",
        "Il explique. Cinquante ans de calfatage, cinquante ans à chauffer le brai dans la marmite, à le respirer, à l'enfoncer dans les coutures au maillet, ça vous mange le nez. Il a perdu l'odorat il y a vingt ans : le pain, le vin, la mer, les femmes, tout a le même goût de rien. Il mange par habitude. Il dit que le goût, sans le nez, c'est comme une chanson sans l'air : on sait les paroles, et c'est tout.",
        "« Ma mère faisait des crêpes, le vendredi, dit-il. Je voudrais sentir ça une fois. Une fois. Après, la fontaine peut garder le reste. » Il arrive au canot. Il dépose la gourde dans le fond, entre deux paquets de cordage, avec un soin infini. Puis il se redresse, et il renifle l'air de l'îlot, longuement, les yeux fermés, pour voir. Il secoue la tête. Il sourit quand même."
      ],
      choices: [
        { back: "SH_source", label: "Retourner au bord de la vasque" }
      ] },
    SH_essai: { act: "III", title: "L'eau de la crique", place: "ilot", ambiance: "nuit",
      text: [
        "La nuit est tiède, sans lune. Sur le gaillard d'avant, à la lueur d'un fanal posé sur le cabestan, les trois vieux sont assis en rond, en habit du dimanche, rasés de près, les cheveux mouillés et peignés. Victorine s'assied sur un rouleau de cordage, à l'écart, avec la gravité d'un notaire à une ouverture de testament.",
        "Thépaut verse l'eau dans trois quarts d'étain. Ils trinquent. Ils boivent d'un trait. Ils attendent, les yeux fermés, en se tenant droits. Un long moment passe. Puis Plouzané ouvre les yeux et dit qu'il sent quelque chose, dans les genoux. Le Dû dit qu'il voit mieux, que le fanal a deux flammes au lieu de trois. Thépaut ne dit rien, mais il se lève sans s'appuyer.",
        "Ils boivent un deuxième quart. Puis un troisième. Ils parlent plus fort. Ils rient. Ils se tapent sur les cuisses. Ils se rappellent des filles, des tavernes, des coups de poing, des tempêtes, et à chaque souvenir ils rajeunissent d'un an, à vue d'œil, par la voix, par le geste, par le rire. Plouzané chante. Le Dû raconte comment, en l'an de la grande comète, il montait au grand perroquet plus vite que n'importe qui. Thépaut dit qu'il ment. Le Dû dit qu'il va le prouver.",
        "Avant que Victorine ait pu se lever, les deux vieillards sont dans les haubans, à la nuit, et ils montent, côte à côte, en s'insultant, avec une vigueur de gabiers de vingt ans et des articulations de soixante-dix. À la hauteur de la hune, Le Dû rate une enfléchure. Il reste pendu par une main, une seconde, au-dessus du pont. Thépaut, d'un geste qu'il a dû faire mille fois dans sa jeunesse, l'attrape par le col et le hisse. Ils redescendent, tremblants, blancs, en se tenant l'un à l'autre. Le Dû a le poignet foulé. La gourde, oubliée sur le cabestan, s'est renversée. Il en reste un fond.",
        "Les trois vieux, assis par terre, essoufflés, regardent Victorine. Ils ont les yeux brillants. Ils attendent qu'elle dise quelque chose. Ce qu'elle va dire, ils le savent, ce sera la science."
      ],
      choices: [
        { label: "Examiner devant eux le fond de la gourde, et leur dire ce qu'il contient", fx: { flag: "sh:verite" }, to: "SH_verite" },
        { label: "Prendre la gourde pour l'infirmerie, où elle fera peut-être du bien", fx: { flag: "sh:remede" }, to: "SH_remede" },
        { label: "Bander le poignet de Le Dû, et les laisser finir leur nuit", fx: { flag: "sh:laisse" }, to: "SH_laisse" }
      ] },
    SH_verite: { act: "III", title: "L'eau de la crique", place: "ilot", ambiance: "nuit",
      text: [
        "Victorine prend la gourde. Elle verse le fond dans un verre, l'approche du fanal, le goûte, le sent. Elle sort de sa trousse une bandelette de papier teint, l'y trempe, la regarde. Les trois vieux suivent chacun de ses gestes en retenant leur souffle, comme des joueurs suivent la roulette.",
        "Elle dit : de l'eau. Une eau de roche excellente, très pure, un peu de fer, un peu de calcaire, froide parce qu'elle vient de loin sous la colline. La meilleure eau qu'elle ait goûtée depuis Morlenc. Rien d'autre. Elle dit que ce qu'ils ont senti dans leurs genoux, c'est la nuit, la peur, l'envie, et un peu de leur propre fierté, qui est le plus puissant des remèdes connus et le plus traître.",
        "Il y a un silence. Le Dû se tient le poignet. Plouzané regarde ses mains. Puis Thépaut hoche la tête, lentement. « On le savait, dit-il. On le savait bien. » Il prend le verre des mains de Victorine et boit le fond, d'un trait, en la regardant. « Mais vous avez vu le Dû, sur l'enfléchure ? Vous avez vu comme je l'ai attrapé ? »",
        "Victorine dit qu'elle a vu. Thépaut dit : « Bon. Alors c'est vrai quand même. » Et les trois vieux redescendent dans le poste, l'un derrière l'autre, avec la démarche raide et digne des gens qui viennent de perdre une illusion et ont décidé de la garder."
      ],
      choices: [
        { label: "Revenir à la plage de l'îlot", fx: { quest: "SH" }, back: "A3w_ilot" }
      ] },
    SH_remede: { act: "III", title: "L'eau de la crique", place: "ilot", ambiance: "mer",
      text: [
        "Victorine prend la gourde. Elle dit qu'une eau pareille mérite d'être étudiée, et qu'elle va la garder à l'infirmerie. Les trois vieux, flattés, la lui confient avec cérémonie. Le lendemain, Thépaut lui en apporte une autre, pleine, remplie à la vasque à l'aube, et le surlendemain une barrique entière, roulée par les trois, à grand bruit.",
        "Elle en donne aux malades. Une cuillère, matin et soir, en disant d'où elle vient, et ce qu'on en raconte. Elle observe. Un gabier qui avait la fièvre depuis dix jours se lève le troisième jour. Un matelot qui ne mangeait plus réclame du biscuit. Un vieux matelot qui toussait tousse moins. Elle note tout dans son cahier, avec les doses, les heures, les pouls. Elle sait parfaitement que c'est de l'eau.",
        "Le soir, à la lanterne, elle relit ses notes. Elle se demande si elle est en train de soigner ou de mentir, et si la différence, à bord d'un navire, à des mois de toute pharmacie, a encore un sens. Elle se dit qu'un remède qui marche est un remède. Elle se dit aussi que le jour où l'un d'eux en mourra, faute d'un vrai, elle saura pourquoi.",
        "Thépaut passe la tête par la porte de l'infirmerie, un soir, pour demander des nouvelles de sa fontaine. Elle lui dit qu'elle fait merveille. Il se redresse, fier comme un inventeur. Il demande si elle va écrire un mémoire, pour les savants de la Faculté. Elle dit qu'elle y pense. Il s'en va en sifflant, plus droit qu'il n'est venu."
      ],
      choices: [
        { label: "Revenir à la plage de l'îlot", fx: { quest: "SH" }, back: "A3w_ilot" }
      ] },
    SH_laisse: { act: "III", title: "L'eau de la crique", place: "ilot", ambiance: "nuit",
      text: [
        "Victorine bande le poignet de Le Dû avec une bande de toile, serré, en huit, sans rien dire de la gourde. Elle dit seulement qu'à l'avenir, les hommes de vingt ans montent aux haubans de jour. Les trois vieux rient, très fort, comme si c'était la meilleure plaisanterie de l'année.",
        "Elle reste encore un peu. Ils boivent le fond de la gourde, à trois, une gorgée chacun, en se la passant. Ils chantent une chanson de bord que personne n'a chantée depuis trente ans, avec un couplet obscène qu'ils lui demandent la permission de chanter, et qu'ils chantent avant qu'elle ait répondu. Plouzané danse une gigue, sur un pied, en se tenant au cabestan. Thépaut parle de Rose, et pleure, et rit, et repleure.",
        "Elle les laisse à minuit. De sa cabine, elle les entend encore longtemps, puis plus du tout.",
        "À l'aube, en montant sur le pont, elle les trouve endormis tous les trois au pied du cabestan, roulés dans un prélart, vieux comme le monde, gris, ridés, la bouche ouverte, les membres raides de rhumatismes. Thépaut ouvre un œil quand elle passe. Il grimace en se redressant, les reins brisés. Il dit : « J'ai mal partout, madame la médecin. Ça veut dire qu'on a vécu. » Il se rendort."
      ],
      choices: [
        { label: "Revenir à la plage de l'îlot", fx: { quest: "SH" }, back: "A3w_ilot" }
      ] }
  },
  extras: {
    people: {
      thepaut: { name: "Hilarion Thépaut", qui: "Tonnelier du bord, soixante-huit ans, des mains comme des maillets, qui a quitté à vingt ans une fille nommée Rose pour une campagne qui payait double." },
      plouzane: { name: "Sulpice Plouzané", qui: "Vieux calfat du bord, qui sent le brai jusque dans ses cheveux." },
      ledu: { name: "Joachim Le Dû", qui: "Ancien maître de manœuvre, cassé pour une affaire de rhum, rembarqué comme simple matelot plutôt que de mourir à terre." }
    },
    quests: [
      { id: "SH", act: "III", kind: "annexe", title: "L'eau de la crique", start: "SH_source", doit: "heidegger", echo: ["sh:verite", "sh:remede", "sh:laisse"] }
    ]
  }
};
