// L'Île Folle-Aiguille · side story « Le certificat » (owes its question to Balzac's L'Interdiction: is a rich man mad
// because he gives his fortune away, and who profits from saying so?). Act II, Victorine at Morlenc, during the two days
// she takes to inquire about the young surgeon: a notary offers her a fat fee to sign a certificate of insanity against
// an old count who is ruining his heirs by paying a pension to a family of rope-makers. She visits the count in his
// empty house, finds out why he pays, and decides: she signs (tp:signe), she refuses and writes the contrary
// (tp:refuse), or she warns the count and leaves him to defend himself (tp:avertit). Wired in XJ_enquete.
module.exports = {
  passages: {
    TP_notaire: { act: "II", title: "Le certificat", place: "quai_hollandes", ambiance: "ville",
      fx: { meet: "coatanlem" },
      text: [
        "Le notaire l'attend à l'auberge du Cormoran, dans le petit salon, devant une tasse de chocolat qu'il n'a pas touchée, pour ne pas mouiller ses moustaches. Maître Coatanlem est un homme de soixante ans, soigné, parfumé, aux mains blanches et grasses, qui parle à voix basse de manière à obliger les gens à se pencher vers lui. Il a lu le nom de Victorine sur le rôle d'équipage de la Cormorane, dit-il. Il a une petite affaire à lui proposer. Une affaire de signature.",
        "Il s'agit du comte de Penanros, un vieillard de soixante-dix ans, veuf, sans enfant, qui habite seul une grande maison de la Haute-Ville. Depuis six ans, le comte se ruine. Il a vendu ses terres, ses chevaux, ses tableaux, son argenterie. Il vit dans trois pièces, avec une servante. Et il verse, chaque mois, à une famille de cordiers de la Basse-Fosse, les Le Moigne, des sommes considérables, sans explication.",
        "« Sa famille s'inquiète, dit maître Coatanlem. Son neveu surtout, monsieur Hervé de Penanros, qui sera son héritier, s'il reste quelque chose. On demande l'interdiction. Il faut, pour cela, le certificat d'un médecin, qui atteste que le comte n'a plus l'usage de sa raison. Les médecins de Morlenc sont un peu craintifs. Vous, vous partez. » Il pose sur la table une bourse. Elle est lourde. « Il y en a une seconde, après la signature. »"
      ],
      choices: [
        { label: "Demander à voir le comte avant de rien signer", to: "TP_maison" }
      ] },
    TP_maison: { act: "II", title: "Le certificat", place: "haute_ville", ambiance: "ville",
      fx: { meet: "penanros" },
      text: [
        "La maison du comte de Penanros est une des plus belles de la Haute-Ville, et la plus vide. Des murs où l'on voit, plus claire, la place des tableaux. Des parquets où l'on voit la place des tapis. Un escalier de pierre qui monte vers des étages fermés, et un silence de chapelle désaffectée, où l'on entend, quelque part, une horloge qui bat seule pour personne.",
        "La servante, une vieille femme sèche, la conduit au seul feu de la maison, dans une petite pièce du rez-de-chaussée. Le comte est là, devant une table couverte de cartes marines anciennes, de compas, de règles, et d'une loupe. Il trace, à la plume, une côte, avec une application d'enfant. Un vieillard grand, maigre, aux cheveux blancs en désordre, en robe de chambre élimée, avec un visage d'une noblesse un peu ridicule, celui d'un héron qui aurait lu.",
        "Il l'accueille avec une courtoisie de l'ancien temps. Il sait pourquoi elle est là. Il le dit tout de suite, en souriant. « Mon neveu vous envoie. Ou son notaire. C'est le quatrième médecin. Les trois premiers ont eu peur de moi, ou de lui. Asseyez-vous. Voulez-vous voir si je suis fou ? Je vais vous aider. »"
      ],
      choices: [
        { label: "L'examiner, en médecin", to: "TP_examen" },
        { label: "Lui demander pourquoi il paie les Le Moigne", to: "TP_raison" }
      ] },
    TP_examen: { act: "II", title: "Le certificat", place: "haute_ville", ambiance: "ville",
      text: [
        "Elle l'examine comme on lui a appris. Le pouls, régulier. Les pupilles, égales. Elle lui fait compter à rebours de cent par sept, ce qu'il fait plus vite qu'elle. Elle lui demande la date, le nom du roi, le prix du pain. Il répond juste à tout, et, pour le pain, il ajoute qu'il a augmenté d'un liard le mois dernier, à cause de la récolte, et qu'il trouve cela scandaleux pour les pauvres.",
        "Il lui montre ses cartes. Il redessine, dit-il, toutes les côtes du Ponant, d'après les relevés de son grand-père, qui était hydrographe du roi, et qui s'est trompé, sur un point, d'une façon qui a coûté cher. Il a trouvé l'erreur. Il la corrige. Il lui reste, dit-il, deux ans de travail. Il espère avoir deux ans.",
        "Victorine pose son stéthoscope. Elle a examiné, à Varnèse, des fous de toutes les sortes : des fous qui se croient rois, des fous qui se croient morts, des fous qui parlent à leur chien. Elle n'a jamais vu un homme aussi raisonnable. Elle soupçonne que c'est précisément ce qui inquiète sa famille."
      ],
      choices: [
        { label: "Lui demander pourquoi il paie les Le Moigne", to: "TP_raison", hide: { seen: "TP_raison" } },
        { label: "Descendre à la Basse-Fosse, chez les cordiers", to: "TP_cordiers", if: { seen: "TP_raison" }, why: "Elle ne sait pas encore ce que le comte doit à ces gens." }
      ] },
    TP_raison: { act: "II", title: "Le certificat", place: "haute_ville", ambiance: "ville",
      text: [
        "Il hésite. Puis il prend sur la table une vieille carte, jaunie, aux bords rongés, et la déplie devant elle.",
        "« Mon grand-père a dressé cette carte il y a soixante ans, pour le roi. Elle montre l'entrée de la rade de Morlenc. Ici, il a mis six brasses d'eau. Il y en a quatre. Il le savait. Un armateur de ses amis, qui avait des navires trop lourds pour entrer, lui avait demandé d'arranger les sondes, pour que l'assurance passe. Mon grand-père a arrangé les sondes. L'armateur a fait fortune. Mon grand-père aussi.",
        "« Une nuit d'hiver, un trois-mâts est entré sur la foi de cette carte, et il a touché, là, sur le banc, à quatre brasses. Trente-deux hommes. Le second s'appelait Yves Le Moigne. Il laissait une femme et cinq enfants, qui sont devenus cordiers, à la Basse-Fosse, parce que c'est ce qu'on fait, à Morlenc, quand on n'a plus rien.",
        "« J'ai trouvé les papiers il y a six ans, dans un coffre, après la mort de ma femme. Les lettres de l'armateur. Les deux sondes, la vraie et la fausse. Depuis, je rends. Je rends l'argent aux Le Moigne. Les arrière-petits-enfants, maintenant. Je n'ai pas fini. Il reste la maison. Mon neveu le sait. Il ne sait pas pourquoi. Je ne veux pas qu'il le sache. C'est notre nom. »",
        "Il replie la carte. « Alors, docteur : un homme qui rend ce qu'on a volé, et qui ne veut pas qu'on sache qu'on a volé, est-il fou ? »"
      ],
      choices: [
        { label: "Descendre à la Basse-Fosse, chez les cordiers", to: "TP_cordiers" }
      ] },
    TP_cordiers: { act: "II", title: "Le certificat", place: "basse_fosse", ambiance: "ville",
      text: [
        "La corderie des Le Moigne est une longue allée couverte, entre deux murs de briques, au bord de la saline, où trois générations marchent à reculons en filant le chanvre, une ceinture de fibres autour de la taille, avec un enfant qui tourne la roue au bout de l'allée. Ça sent le goudron et la ficelle. On travaille en chantant une chanson à reculons, elle aussi, dont les couplets commencent par la fin.",
        "Les Le Moigne sont pauvres, mais d'une pauvreté qui se lave et qui envoie ses enfants à l'école des Frères. La grand-mère, qui a quatre-vingts ans et la mémoire du naufrage, reçoit Victorine sur un banc. Elle sait que l'argent vient du comte. Elle ne sait pas pourquoi. Elle pense, dit-elle, que c'est un saint, ou un fou, ou un ancien amoureux de sa mère, et qu'à son âge on n'a plus le temps de choisir.",
        "« Ça a tout changé, dit-elle. Mon petit-fils va être maître cordier. Ma petite-fille va épouser un commis. Si l'argent s'arrête, on revient où on était. On sait y vivre. Mais ce serait dommage. »",
        "Le soir, à l'auberge, maître Coatanlem attend, avec son chocolat froid et ses deux bourses."
      ],
      choices: [
        { label: "Signer le certificat et prendre les deux bourses", fx: { flag: "tp:signe" }, to: "TP_signe" },
        { label: "Refuser, et écrire de sa main que le comte a toute sa raison", fx: { flag: "tp:refuse" }, to: "TP_refuse" },
        { label: "Remonter chez le comte lui dire ce qu'on prépare contre lui", fx: { flag: "tp:avertit" }, to: "TP_avertit" }
      ] },
    TP_signe: { act: "II", title: "Le certificat", place: "quai_hollandes", ambiance: "ville",
      text: [
        "Elle signe. Elle signe vite, d'une main ferme, sans relire, comme on avale une médecine amère. Maître Coatanlem souffle sur l'encre, plie la feuille, la range dans un portefeuille de maroquin, et lui pousse les deux bourses avec deux doigts, sans les toucher davantage, comme des choses un peu sales.",
        "Elle se dit, en remontant à bord, qu'elle a besoin de cet argent pour la pharmacie du voyage, et que trente hommes boiront du quinquina grâce à un vieillard qui rend des fortunes à des cordiers. Elle se dit que le neveu aurait trouvé un autre médecin. Elle se dit beaucoup de choses.",
        "Elle apprend, deux jours plus tard, avant l'appareillage, que le comte de Penanros a été interdit, que son neveu a reçu la tutelle de ses biens, et que la pension des Le Moigne s'est arrêtée le jour même. La maison de la Haute-Ville est à vendre. Le comte, dit-on, a demandé une seule chose : qu'on lui laisse ses cartes. On les lui a laissées. Elles n'ont aucune valeur."
      ],
      choices: [
        { label: "Retourner à son enquête sur le chirurgien", fx: { quest: "TP" }, back: "XJ_enquete" }
      ] },
    TP_refuse: { act: "II", title: "Le certificat", place: "quai_hollandes", ambiance: "ville",
      text: [
        "Elle repousse les bourses. Elle prend une feuille, la plume du notaire, et elle écrit, de sa grande écriture penchée, qu'elle a examiné ce jour le comte de Penanros, qu'elle l'a trouvé en pleine possession de ses facultés, et qu'elle tient à la disposition de la justice les détails de son examen, y compris le prix du pain. Elle signe. Elle date. Elle donne la feuille au notaire.",
        "Maître Coatanlem la lit. Il ne s'émeut pas. « Vous partez bientôt, docteur, dit-il. Un certificat de médecin absent, c'est une feuille. On en trouvera un autre, de médecin présent. Mais je le transmettrai. Il faut bien que mon client sache combien coûte un vieillard en bonne santé. »",
        "Elle porte un double de la feuille au comte, le soir même. Il la lit à la loupe, la plie, la range entre deux cartes, et la remercie. « Ça me fait un an, dit-il. Peut-être deux. J'aurai fini la côte. »"
      ],
      choices: [
        { label: "Retourner à son enquête sur le chirurgien", fx: { quest: "TP" }, back: "XJ_enquete" }
      ] },
    TP_avertit: { act: "II", title: "Le certificat", place: "haute_ville", ambiance: "nuit",
      text: [
        "Elle remonte la Haute-Ville à la nuit. La vieille servante lui ouvre. Le comte est à sa table, sous la lampe, la plume à la main.",
        "Elle lui dit tout : le notaire, les bourses, le neveu, les médecins craintifs, celui qu'on trouvera après elle. Elle lui dit que la seule défense qu'il ait, c'est la vérité. La carte, les sondes, les lettres. Que s'il les montre au juge, aucun juge de Morlenc ne déclarera fou un homme qui répare le crime de son grand-père. Qu'on le déclarera, peut-être, naïf, ou ruiné. Pas fou.",
        "Il l'écoute. Il pose sa plume. Il regarde longtemps la vieille carte jaunie, sous la lampe.",
        "« Si je montre ça, dit-il, mon nom est sali pour cent ans. Et l'armateur, dont les petits-enfants sont aujourd'hui les premiers de la ville, aussi. Il y aura un procès, des journaux, des cris. Les Le Moigne apprendront que leur aïeul est mort pour une signature. Est-ce qu'ils en seront plus heureux ? »",
        "Elle dit qu'elle n'en sait rien. Elle dit que c'est à lui de choisir, et qu'elle voulait seulement qu'il choisisse en sachant. Il la remercie. Il la raccompagne à la porte, avec la lampe, comme on raccompagne une dame, au siècle dernier.",
        "Elle ne saura pas, avant l'appareillage, ce qu'il a choisi. Elle sait seulement, le surlendemain, en passant devant la maison vide, qu'il y a de la lumière à toutes les fenêtres, pour la première fois depuis six ans, et qu'on entend, à l'intérieur, des voix d'hommes en habit noir."
      ],
      choices: [
        { label: "Retourner à son enquête sur le chirurgien", fx: { quest: "TP" }, back: "XJ_enquete" }
      ] }
  },
  extras: {
    people: {
      coatanlem: { name: "Maître Coatanlem", aka: ["le notaire au chocolat"], qui: "Notaire de Morlenc, homme de soixante ans aux mains blanches, qui parle bas pour faire pencher les gens." },
      penanros: { name: "le comte de Penanros", aka: ["le vieux comte de la Haute-Ville"], qui: "Vieillard de Morlenc qui se ruine en pension pour une famille de cordiers, et redessine les côtes du Ponant d'après les relevés de son grand-père." }
    },
    quests: [
      { id: "TP", act: "II", kind: "annexe", title: "Le certificat", start: "TP_notaire", doit: "interdiction", echo: ["tp:signe", "tp:refuse", "tp:avertit"] }
    ]
  }
};
