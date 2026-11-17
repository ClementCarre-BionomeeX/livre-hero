// Le Douzième Coup · chapter 6, the one who passes, first half (act II, six days before the Grand Midi of 541). Five
// leagues from Roquebise to the Thiorne, a stowaway in the second basket (`monde:line_route`), and Arvoise on the
// morning its new bridge is to be blessed. The ferrymen say the third pier stands on sand. Proofs to gather before
// eleven: the dive (`j:preuve_plongee`), the plumb line (`j:preuve_fil`), the eddy (`j:preuve_remous`), the sounder
// (`j:preuve_sondeur`), the true report in the alderman's study (`j:preuve_rapport`). Then the hour-stone (M06).
var P = {};
var LINE = { has: "monde:line_route" };

// ======================================================================== the road
Object.assign(P, {
  K06j_route: { act: "II", title: "Une hotte qui pèse", place: "roquebise", ambiance: "champs", takes: "morning", fx: { join: "perrine", flag: "j:perrine_route" },
    text: [
      "Vous descendez vers le levant dans un petit jour gris de fumée. Perrine marche devant, vite, sans chanter. Elle n'a pas dormi ; elle a porté des seaux jusqu'à deux heures, puis elle a compté ses rubans roussis, ce qui lui tient lieu de prière.",
      "Ta hotte pèse. Elle pèse plus qu'hier, tu en jurerais, et autrement : hier, c'était un poids qui tintait. Ce matin, il y a dedans quelque chose de mou, qui se déplace quand tu changes d'épaule.",
      "À la dix-huitième borne, un sifflet de terre cuite siffle. Deux notes, étouffées, tout près de ta nuque. Perrine s'arrête net.",
      "« Tes pots chantent, dit-elle sans se retourner. Je n'ai jamais vendu de pots qui chantent. Pose-moi ça. »",
    ],
    choices: [{ label: "Poser la hotte, et ôter la paille", to: "K06j_hotte" }] },
  K06j_hotte: { act: "II", title: "Entre les pichets", place: "roquebise", ambiance: "champs",
    text: [
      "Sous la paille, sous les sifflets en forme d'oiseau, entre deux rangs de pichets verts calés avec un soin d'emballeuse, il y a deux nattes, une robe du dimanche et une boîte de fer-blanc. Line te regarde d'en bas, un sifflet à la bouche, avec la dignité d'une personne surprise en plein travail.",
      "« Il me fallait de l'air, explique-t-elle. J'ai soufflé sans faire exprès. »",
      "Perrine compte ses pots avant de compter l'enfant. Il en manque onze. « Dans le grenier de la tante, dit Line. Rangés. Je n'ai rien cassé. J'ai mis un mot dans la soupière, pour maman : *Je suis partie à Méridane avec {hero} empêcher quelque chose. Ne vous inquiétez pas. Venez quand même à la foire.* » Elle réfléchit. « Je ne sais pas encore écrire *empêcher*. J'ai fait un dessin. »",
      { after: "monde:line_sait", text: "Elle se dresse dans la hotte, les mains au bord. « Tu as dit qu'il fallait trouver qui tient la roue qui commande. Tu n'y arriveras pas tout{e} seul{e} : tu ne regardes pas les gens, tu regardes les choses. Moi, je regarde les gens. Et je passe où tu ne passes pas. »" },
      { before: "monde:line_sait", text: "Elle se dresse dans la hotte, les mains au bord. « Tu vas faire quelque chose à Méridane. Tu ne veux pas dire quoi. Alors je viens voir. Je passe où tu ne passes pas, et je n'ai besoin de personne pour porter mes affaires. » Elle montre la boîte." },
      "« Trois lieues derrière nous, dit Perrine, il y a une mère qui ouvre une soupière. » Elle te regarde. « C'est ta hotte. C'est ton paquet. Décide, et vite : on a un pont sur les bras. »",
    ],
    choices: [
      { label: "« Elle vient. Je réponds d'elle. »", fx: { flag: ["monde:line_route", "j:line_gardee"] }, to: "K06j_line_garde" },
      { label: "Arrêter la première charrette qui remonte vers Roquebise, et l'y mettre", fx: { flag: "j:line_renvoyee" }, to: "K06j_line_renvoie" },
    ] },
  K06j_line_garde: { act: "II", title: "Trois sur la chaussée", place: "roquebise", ambiance: "champs",
    text: [
      "« Elle vient », dis-tu, et tu t'entends le dire avec la voix de quelqu'un qui signe.",
      "Line saute de la hotte. Elle secoue la paille de sa robe, reprend sa boîte, et se place entre vous deux, à sa mesure, comme une pièce qu'on avait prévue. Perrine arrête un roulier qui monte à Roquebise et lui fait répéter trois fois le message pour la tante Guillemette : la petite est avec la colporteuse, on la rendra à ses parents à la foire, au banc des Noyers, entière.",
      "« Entière », répète le roulier, consciencieux.",
      "« Règle de la maison, dit Perrine à Line, sans ralentir. On marche vite, on paie ce qu'on doit, on ne me ment pas. Et pour toi, un quatrième article : tu ne sors rien de ta boîte sans prévenir. »",
      "« Il n'y a que des ressorts », dit Line.",
      "« C'est bien ce que je dis. »",
    ],
    choices: [{ label: "La chaussée, à trois", to: "K06j_chaussee" }] },
  K06j_line_renvoie: { act: "II", title: "La charrette qui remonte", place: "roquebise", ambiance: "champs",
    text: [
      "Un maraîcher monte à Roquebise avec des choux. Il connaît la tante Guillemette : tout le monde la connaît. Il prend la petite sur son banc, entre deux paniers.",
      "Line n'a pas crié, ni pleuré. Elle est montée toute seule. Elle te regarde du haut du banc, sa boîte sur les genoux, et son silence est d'une espèce que tu commences à connaître : elle le range, pour s'en servir.",
      { after: "monde:promesse_line", text: "« Tu as promis, dit-elle seulement. Dans le fenil. Je compte. » La charrette s'ébranle. Elle ne se retourne pas." },
      { before: "monde:promesse_line", text: "« On y va tous les ans, à la foire, dit-elle. Tu ne peux pas m'empêcher d'y être. Tu peux seulement m'empêcher d'y être avant. » La charrette s'ébranle. Elle ne se retourne pas." },
      "Perrine regarde s'éloigner les choux. « Tu as bien fait, dit-elle. Je crois. C'est ce qu'on dit toujours quand on a fait la chose raisonnable, et ça ne console de rien. » Tu recharges ta hotte, qui a retrouvé son poids de la veille. Elle te semble légère d'une mauvaise façon.",
    ],
    choices: [{ label: "La chaussée, vers le levant", to: "K06j_chaussee" }] },

  K06j_chaussee: { act: "II", title: "Dix mille personnes", backName: "la chaussée d'Arvoise", place: "arvoise", ambiance: "champs", hub: true,
    text: [
      { first: true, text: "Passé la dix-septième borne, la chaussée se remplit. Il en vient de tous les chemins de traverse : des paroisses entières, bannière en tête, des fermiers endimanchés, des charrettes de bancs, des marchands d'oublies, des aveugles. On va voir bénir le Pont-Neuf d'Arvoise. On en parle depuis huit ans ; on aura traversé la Thiorne à pied sec avant de mourir, et l'on amène les enfants pour qu'ils puissent le raconter." },
      { first: true, text: "Tu marches dans cette foule gaie avec, dans ta veste, un cahier gris. Personne autour de toi ne sait rien. Tu regardes les nuques, les coiffes, un gamin juché sur des épaules." },
      { again: true, text: "La chaussée noire de monde, les bannières, la poussière. Au bout, une ligne d'argent grandit." },
    ],
    choices: [
      { label: "Une paroisse en procession, derrière un saint doré", to: "K06j_procession", hide: { seen: "K06j_procession" } },
      { label: "Un vieil homme, seul, qui marche à contre-courant", to: "K06j_vieux_passeur", hide: { seen: "K06j_vieux_passeur" } },
      { label: "Un carrosse violet, qui fend la foule au trot", to: "K06j_carrosse", hide: { seen: "K06j_carrosse" } },
      { label: "Avancer jusqu'à la rivière", to: "K06j_rive", big: true },
    ] },
  K06j_procession: { act: "II", title: "Saint Gnomon de Vauxelles", place: "arvoise", ambiance: "champs",
    text: [
      "C'est la paroisse de Vauxelles. Quatre hommes portent sur un brancard un saint Gnomon de bois doré, grandeur nature, qui tient à la main un style de cadran et regarde au loin d'un air mécontent. Derrière, le curé, les chantres, les femmes, les enfants.",
      "« On l'amène voir le pont, t'explique une femme. Il est patron de midi, et c'est à midi qu'on bénit. Il passera le premier, après Monseigneur. On s'est cotisés pour la dorure. »",
      "Elle a un enfant à chaque main et un troisième dans le ventre. Tu cherches sur sa figure, sur celles d'alentour, quelque chose que tu reconnaîtrais : un nez, une façon de marcher. Il y a dans cette procession, peut-être, quelqu'un dont tu descends. Ils chantent faux, avec conviction.",
    ],
    choices: [{ back: "K06j_chaussee" }] },
  K06j_vieux_passeur: { act: "II", title: "Celui qui s'en va", place: "arvoise", ambiance: "champs", fx: { flag: "j:sait_marmite" },
    text: [
      "Il a soixante-dix ans, des épaules de rameur, les mains ouvertes comme des pelles, et il remonte la foule sans s'excuser. Perrine le reconnaît avant qu'il la voie. « Père Nicaise ! Vous ne restez pas pour la fête ? »",
      "« La petite à Josselin. » Il s'arrête. Il a les yeux délavés des gens qui ont regardé l'eau toute leur vie. « Je ne reste pas. J'ai passé le bac quarante ans, avec ton père et avant lui. On nous congédie ce midi, tous les neuf, avec une bourse et le discours d'un échevin. Je ne veux pas entendre le discours. » Il crache dans la poussière. « Ni le reste. »",
      "« Quel reste ? » demandes-tu.",
      "Il te toise. « Sous leur troisième pile, il y a la Marmite. Tous les passeurs la connaissent : un trou où l'eau tourne par en dessous, même en été, et qui change de place après chaque crue. Elle a mangé deux bacs du temps de mon grand-père. Josselin l'a dit. On l'a dit tous. On nous a répondu que les sondeurs avaient trouvé le roc à douze pieds. » Il hausse ses épaules énormes. « Les sondeurs sont de Méridane. La Marmite est d'ici. »",
      "Il reprend sa marche, vers le couchant, tout seul, dans une foule qui va dans l'autre sens.",
    ],
    choices: [{ back: "K06j_chaussee" }] },
  K06j_carrosse: { act: "II", title: "Monseigneur", place: "arvoise", ambiance: "champs",
    text: [
      "Un carrosse violet, deux laquais derrière, un piqueur devant qui crie gare. La foule se range dans les fossés, se découvre, se signe. Par la portière, une main gantée bénit à droite et à gauche, d'un mouvement égal, sans se fatiguer.",
      "Derrière la main, tu aperçois une figure : ronde, colorée, intelligente, avec de petits yeux qui regardent ceux qu'il bénit, ce qui n'est pas l'usage. C'est Monseigneur Fulbert, évêque du diocèse, qui a mis mille écus de sa cassette dans le pont et compte bien en être remercié dans les deux mondes.",
      "« Il prêche court et il dîne long, dit Perrine en se relevant du fossé. C'est un évêque comme il en faudrait davantage. Il m'a acheté un almanach, une année, lui-même, par la portière. Il a lu la page de juin, il a ri, et il m'a dit : *Ma fille, vous prédisez le beau temps pour la Saint-Jean depuis combien d'années ?* J'ai dit : toutes. Il a dit : *Continuez. Vous finirez par avoir raison plus souvent que moi.* »",
    ],
    fx: { flag: "j:connait_eveque" },
    choices: [{ back: "K06j_chaussee" }] },
});

// ======================================================================== Arvoise, the morning
Object.assign(P, {
  K06j_rive: { act: "II", title: "Le Pont-Neuf", backName: "la rive d'Arvoise", place: "arvoise", hub: true,
    text: [
      { first: true, text: "La Thiorne est large de cent vingt toises devant Arvoise, grise, pleine jusqu'aux saules : il a plu en amont toute la semaine. Elle va sans bruit et sans rides, avec la lenteur des choses très fortes." },
      { first: true, text: "Le pont est jeté par-dessus. Cinq arches de pierre blanche, neuves, d'un seul élan, si minces à la clef qu'on dirait qu'elles ont été dessinées plutôt que bâties. Les cintres de bois sont ôtés depuis un mois. On a mis des guirlandes de buis d'un parapet à l'autre, des oriflammes aux armes de la reine sur chaque pile, et au milieu, sur la troisième, la plus haute, une estrade tendue de violet où l'évêque chantera." },
      { first: true, text: "C'est beau. Il faut le dire d'abord, parce que c'est vrai, et que huit ans de la vie d'un homme sont là-dedans. Perrine le regarde, les mâchoires serrées. « Il est beau », dit-elle, comme on reconnaît qu'un ennemi a de bonnes dents." },
      { first: true, text: "En aval du pont, à cent pas, le vieux bac est à sa cale, sa corde tendue d'une rive à l'autre pour la dernière fois. Sur la berge, la foule s'installe. Dix heures sonnent au clocher d'en face." },
      { again: true, text: "La berge, la foule, les cinq arches blanches sous leurs guirlandes. La Thiorne passe dessous, pleine, sans rides." },
    ],
    choices: [
      { label: "Le bac, à sa cale, et les passeurs", to: "K06j_bac" },
      { label: "La berge, sous la troisième arche, où battent des lavandières", to: "K06j_lavandieres", hide: { seen: "K06j_lavandieres" } },
      { label: "La loge des maçons, à l'entrée du pont", to: "K06j_loge" },
      { label: "Le cabaret du Bac, sur le quai", to: "K06j_cabaret", hide: { seen: "K06j_cabaret" } },
      { label: "Une maison à pignon, sur le quai, volets clos, avec un écusson d'échevin", to: "K06j_malestroit", hide: { any: [{ has: "j:preuve_rapport" }, { has: "j:cabinet_rate" }] } },
      { label: "Les enfants en blanc, qu'on range par deux devant l'entrée du pont", to: "K06j_enfants", hide: { seen: "K06j_enfants" } },
      { label: "Perrine, qui a posé sa hotte sans l'ouvrir", to: "K06j_perrine_berge", hide: { seen: "K06j_perrine_berge" } },
      { label: "Onze heures : la borne de la quatorzième lieue est au bord du quai", to: "K06j_onze", big: true },
    ] },

  // ------------------------------------------------------------ the ferry
  K06j_bac: { act: "II", title: "Le dernier jour du bac", backName: "la cale du bac", place: "arvoise", fx: { meet: "gervais" },
    text: [
      { first: true, text: "Le bac d'Arvoise est une plate de chêne longue de dix toises, noire de goudron, qui passe d'une rive à l'autre le long d'une corde grosse comme le bras. Un cabestan la hale. Neuf passeurs en vivent, de père en fils, depuis qu'il y a une route." },
      { first: true, text: "Ils sont assis sur le plat-bord, les neuf, en rang, les bras croisés, et regardent le pont. Ils ne disent rien. Ils ont mis leurs bonnets rouges, ceux des jours de crue. Au cabestan, un garçon de quinze ans, long, noiraud, les oreilles décollées, astique une manivelle qui ne servira plus." },
      { first: true, text: "« Perrine ! » Le maître passeur se lève : un homme carré, à barbe grise, qui a les mains du vieux Nicaise en plus jeune. « Tu viens voir enterrer ton père une seconde fois ? Assieds-toi. Il y a de la place : on n'a pas un client. » Il te mesure du regard. « Aubin Lebac. Et l'animal du cabestan, c'est mon Gervais. Il devait prendre la corde après moi. Il sera valet de ferme. »" },
      { again: true, text: "Les neuf passeurs sont toujours sur le plat-bord. Gervais Lebac astique son cabestan." },
    ],
    choices: [
      { label: "« La Marmite. Elle est où, aujourd'hui ? »", to: "K06j_bac_marmite", hide: { seen: "K06j_bac_marmite" } },
      { label: "« Quelqu'un pourrait plonger sous la troisième pile ? »", to: "K06j_plongee", if: { seen: "K06j_bac_marmite" }, hide: { any: [{ not: { seen: "K06j_bac_marmite" } }, { seen: "K06j_plongee" }] } },
      { label: "Le garçon du cabestan", to: "K06j_gervais", hide: { seen: "K06j_gervais" } },
      { back: "K06j_rive" },
    ] },
  K06j_bac_marmite: { act: "II", title: "Ce que savent les passeurs", place: "arvoise",
    text: [
      "Aubin Lebac ne répond pas tout de suite. Il regarde Perrine, qui fait oui de la tête : celui-là, on peut.",
      "« Elle a bougé à la crue de mars. On le sent à la corde : le bac tire à gauche en passant sous la troisième, depuis Pâques, comme si quelqu'un le prenait par la quille. » Il montre l'eau, sous la grande arche. « Regarde le courant. Partout il file droit. Là, contre le bec de la pile, il rentre. Il ne ressort pas au même endroit. »",
      "Tu regardes. Tu ne vois rien, d'abord, que de l'eau grise. Puis une brindille passe, prend la troisième arche, ralentit, hésite, et fait lentement un tour sur elle-même avant de disparaître du côté de la pierre.",
      "« On l'a dit, reprend le passeur. Josselin d'abord, et il en est mort d'avoir trop cherché à le prouver : il sondait sous la pile, seul, en février, quand la crue l'a pris. Moi ensuite, au maître d'œuvre, chapeau bas. Il m'a montré le rapport des sondeurs. Roc à douze pieds, signé, scellé. » Il crache dans la Thiorne, ce que les passeurs ne font jamais. « Un papier contre une rivière. Ils ont cru le papier. C'est qu'ils savent lire. »",
    ],
    fx: { flag: "j:sait_marmite" },
    choices: [{ back: "K06j_bac" }] },
  K06j_gervais: { act: "II", title: "Le bonnet rouge", place: "arvoise",
    text: [
      "Gervais Lebac a quinze ans et la certitude que sa vie s'arrête à midi. Il t'explique le cabestan sans que tu demandes : le tambour, les quatre barres, le cliquet qui empêche la corde de filer quand le courant force. Il en parle au présent.",
      "« Je sais passer par tous les temps. Je sais où est le fond à un pied près, d'ici à l'autre rive, les yeux fermés. Je plonge mieux que les loutres : c'est moi qui vais décrocher la corde quand elle se prend dans les souches. » Il frotte la manivelle. « À quoi ça sert, de savoir où est le fond, quand les gens passent par-dessus ? »",
      "Il a un bonnet de laine rouge enfoncé jusqu'aux sourcils. Il le porte, dit-il, depuis ses sept ans, et il le portera jusqu'à sa mort, pont ou pas pont.",
      { if: { seen: "K02_orable_pere" }, text: "Tu regardes ce bonnet. Tu regardes ce garçon, ses oreilles décollées. Une vieille femme en mante bleue t'a parlé de lui, aux Trois-Noyers, sous des lampes. Elle a dit : mon père. Elle a dit : au cabestan du bac, depuis vingt-six ans, il n'a pas lâché la barre." },
    ],
    choices: [{ back: "K06j_bac" }] },
  K06j_plongee: { act: "II", title: "Sous la troisième pile", place: "arvoise",
    text: [
      "Les passeurs se regardent. Plonger sous une pile, en crue, à deux heures d'une fête où l'on vous congédie : il faut être fou ou avoir quinze ans.",
      "« J'y vais », dit Gervais. Il a déjà ôté sa veste. Son père ouvre la bouche, la referme. « Avec un filin, dit-il enfin. Un filin sous les bras, et deux hommes au bout. Tu tires deux fois, on te remonte, que tu aies vu ou non. »",
      "On prend le bachot. Six coups de rame vous mettent sous la grande arche, dans son ombre froide, où l'eau fait contre la pierre un bruit de bouche. Vu d'en dessous, le pont est immense. Gervais se signe, garde son bonnet, et se laisse couler le long du bec de la pile, sans une éclaboussure.",
      "Le filin file entre tes mains. Trois brasses. Cinq. Il se tend d'un coup, vers le dessous de la pierre, comme si l'on tirait à l'autre bout.",
    ],
    choices: [
      { label: "Tenir", test: { dom: "combat", diff: 0, label: "Tenir le filin", help: [{ if: { voie: "tetu" }, v: 15 }, { if: { voie: "coureur" }, v: 5 }, { if: { present: "perrine" }, v: 10 }] },
        win: { fx: { flag: "j:preuve_plongee", ep: ["seance", 700] }, to: "K06j_plongee_fin" }, lose: { fx: { flag: "j:preuve_plongee", pv: -2, ep: ["seance", 400] }, to: "K06j_plongee_fin" } },
    ] },
  K06j_plongee_fin: { act: "II", title: "Jusqu'à l'épaule", place: "arvoise",
    text: [
      { outcome: "win", text: "Tu t'arc-boutes au banc de nage. Le filin te scie les paumes ; tu ne lâches pas un pouce. Aubin Lebac, derrière toi, a pris le bout. Deux secousses. Vous halez, à deux, main sur main, et le bonnet rouge crève l'eau." },
      { outcome: "lose", text: "Le filin t'arrache les paumes et file. Tu tombes sur les genoux, tu le reprends à pleins bras, la peau en feu. Aubin Lebac te passe par-dessus et hale à ta place, avec un juron par brasse. Le bonnet rouge crève l'eau, plus tard qu'il n'aurait fallu." },
      "Gervais s'accroche au plat-bord, crache, tousse. Il est gris. Il lui faut le temps de trois souffles pour parler.",
      "« Il n'y a rien dessous. » Il montre la pile, cette masse blanche qui porte une estrade et des oriflammes. « Le bec est posé sur des pieux. Les pieux sont à nu, d'un côté. J'ai passé le bras entre deux, jusqu'à l'épaule : ça fait un trou où je tiendrais debout, et l'eau y tourne à vous arracher. Ça m'a pris par les jambes. » Il regarde son père. « Elle est dessous, la Marmite. Elle est juste dessous. Elle mange le sable entre les pieux. »",
      "Personne ne dit rien dans le bachot. Au-dessus de vos têtes, sur le tablier, on entend des marteaux : on cloue les dernières guirlandes.",
    ],
    choices: [{ back: "K06j_bac" }] },

  // ------------------------------------------------------------ the washerwomen and the eddy
  K06j_lavandieres: { act: "II", title: "L'eau qui rentre", place: "arvoise",
    text: [
      "Sous la culée, une douzaine de femmes battent leur linge sur des planches, à genoux dans des caisses, fête ou pas fête : le linge sale n'a pas de calendrier. Elles ont le meilleur point de vue d'Arvoise sur le dessous du pont, et personne ne leur a jamais demandé ce qu'elles y voyaient.",
      "« Depuis Pâques, dit la plus vieille sans cesser de battre, je perds mes savons. Je pose un pain sur la planche, il glisse, il s'en va vers la grosse pile au lieu de descendre comme un savon chrétien, et je ne le revois pas. Six pains. J'en ai parlé au sergent de l'échevin. Il m'a dit de tenir mes savons. »",
      "Tu ramasses un copeau. Tu le jettes dans le courant, à trois toises de la troisième pile. Il file, ralentit, vire. Il fait un tour, lentement, puis un second, plus serré, contre le bec de pierre. Au troisième, il pique du nez et il n'y a plus de copeau.",
      "Tu en jettes un autre. Les lavandières se sont arrêtées de battre. Dix personnes, sur la berge, tournent la tête. Le second copeau fait ses trois tours et s'enfonce au même endroit, à un pouce près.",
      "C'est une chose que tout le monde peut voir. Il suffit d'un copeau, et de quelqu'un qui dise de regarder.",
    ],
    fx: { flag: "j:preuve_remous" },
    choices: [{ back: "K06j_rive" }] },

  // ------------------------------------------------------------ the masons' lodge
  K06j_loge: { act: "II", title: "La loge des maçons", backName: "la loge des maçons", place: "arvoise", hub: true,
    text: [
      { first: true, text: "À l'entrée du pont, une baraque de planches a servi huit ans d'atelier, de bureau et de réfectoire. On y voit encore, clouée au mur, l'épure de la grande arche, tracée à la pointe sur un plancher de plâtre ; des gabarits de bois pendent aux solives comme des jambons. Les compagnons sont en habit de fête, raides, un ruban à la boutonnière, et boivent debout." },
      { first: true, text: "Au milieu d'eux, un homme de cinquante ans, large, lourd, le cou dans les épaules, serre des mains sans regarder à qui elles sont. Maître Baudri a bâti le Pont-Neuf. Il a les yeux rouges d'un homme qui n'a pas dormi de bonheur." },
      { again: true, text: "La loge, l'épure au mur, les compagnons en habit de fête. Maître Baudri est toujours au milieu d'eux." },
    ],
    choices: [
      { label: "Maître Baudri", to: "K06j_baudri", hide: { seen: "K06j_baudri" } },
      { label: "Une jeune femme en tablier de cuir, qui range des fils à plomb", to: "K06j_guillemine" },
      { label: "L'épure de la grande arche", to: "K06j_epure", hide: { seen: "K06j_epure" } },
      { back: "K06j_rive" },
    ] },
  K06j_baudri: { act: "II", title: "Un homme qui a fait un pont", place: "arvoise", fx: { meet: "baudri" },
    text: [
      "Tu attends ton tour. Tu lui dis ce que tu as à dire, le plus simplement possible : la troisième pile, le sable, les passeurs.",
      "Maître Baudri t'écoute jusqu'au bout. C'est un homme juste ; il écoute même les enfants. Puis il pose sur ton épaule une main qui pèse le poids d'un moellon.",
      "« Mon garçon. On m'a dit cela pendant huit ans. Le premier hiver, c'étaient les passeurs : un passeur a intérêt à ce qu'il n'y ait pas de pont. Le second, les charpentiers de bateaux. Puis le curé de l'autre rive, qui perdait ses quêtes. J'ai fait sonder. J'ai fait sonder par les meilleurs, ceux de la Tour, aux frais de la ville : le roc à douze pieds. J'ai fondé à quinze. » Sa voix n'a pas de colère ; elle a de la fatigue. « J'ai ôté les cintres il y a un mois. Elle n'a pas bougé d'une ligne. Je l'ai mesurée moi-même tous les matins. »",
      "Il retire sa main. « Dans deux heures, dix mille personnes marcheront là-dessus. J'y serai le premier, avec ma fille. On ne met pas sa fille sur un pont dont on doute. » Il se détourne vers la main suivante. « Va voir la fête. Tu diras plus tard que tu y étais. »",
    ],
    choices: [{ back: "K06j_loge" }] },
  K06j_guillemine: { act: "II", title: "L'appareilleuse", backName: "Guillemine", place: "arvoise", fx: { meet: "guillemine" },
    text: [
      { first: true, text: "Elle a dix-neuf ans, les cheveux sous un mouchoir, de la poussière de pierre dans les cils. C'est la fille de maître Baudri. La Guilde des maçons ne reçoit pas les filles ; elle a donc tracé la moitié des voussoirs de ce pont sans figurer sur aucun rôle, et les compagnons l'appellent « l'appareilleuse » en baissant la voix, comme on nomme une chose qui marche et qu'on n'a pas le droit d'avoir." },
      { first: true, text: "Elle t'a entendu parler à son père. Elle ne lève pas les yeux de ses plombs. « Il mesure la troisième pile tous les matins. C'est vrai. Il mesure la hauteur. » Elle enroule une ficelle sur ses doigts. « Moi, depuis la crue de mars, je mesure l'aplomb. Il ne veut pas que j'en parle. »" },
      { again: true, text: "Guillemine range ses fils à plomb dans leur boîte, un par un. Elle te regarde venir sans surprise." },
    ],
    choices: [
      { label: "« Et l'aplomb ? »", to: "K06j_aplomb", hide: { seen: "K06j_aplomb" } },
      { label: "« Les sondeurs. Vous les avez vus travailler ? »", to: "K06j_guillemine_sondeurs", hide: { seen: "K06j_guillemine_sondeurs" } },
      { back: "K06j_loge" },
    ] },
  K06j_aplomb: { act: "II", title: "Un fil et un poids", place: "arvoise",
    text: [
      "Elle t'emmène sur le tablier, par la petite porte du chantier, jusqu'au parapet de la troisième pile, du côté d'amont. Les tapissiers de l'évêque y clouent du drap violet et ne vous regardent pas.",
      "Il y a là, scellé dans la pierre, un crochet de fer. Elle y pend son plomb : un fil de soie, un poids de laiton tourné en poire, qui descend le long de la pile jusqu'à un pied de l'eau. En bas, sur la pierre, un trait gravé, fin comme un cheveu, avec une date : *mars*.",
      "« Le jour où je l'ai tracé, la pointe du plomb tombait dessus. Regarde où elle tombe. »",
    ],
    choices: [
      { label: "Te pencher, et lire l'écart", test: { dom: "savoir", diff: 0, label: "Lire un aplomb", help: [{ if: { voie: "rouage" }, v: 20 }, { if: { voie: "coureur" }, v: 5 }] },
        win: { fx: { flag: ["j:preuve_fil", "j:fil_lu"], ep: ["seance", 600] }, to: "K06j_aplomb_fin" }, lose: { fx: { flag: "j:preuve_fil" }, to: "K06j_aplomb_fin" } },
    ] },
  K06j_aplomb_fin: { act: "II", title: "Un pouce en trois mois", place: "arvoise",
    text: [
      { outcome: "win", text: "Tu te penches. Tu attends que le poids cesse d'osciller, comme on attend qu'un balancier se pose. La pointe est à côté du trait. Elle est d'un pouce vers l'amont, bien franc, et d'une ligne ou deux vers la rive. La pile penche. Elle penche du côté d'où vient l'eau, ce qui veut dire qu'on lui ôte quelque chose de dessous, de ce côté-là." },
      { outcome: "win", text: "« Un pouce en trois mois, dis-tu. Et la moitié depuis quand ? » Guillemine te regarde enfin. « Depuis dix jours. Depuis les pluies. Tu sais lire ça. Lui aussi saurait, s'il regardait. Il ne regarde que le haut : le haut n'a pas bougé. Une pile qui verse ne descend pas. Elle tourne sur son pied, jusqu'au moment où il n'y a plus de pied. »" },
      { outcome: "lose", text: "Tu te penches. Le poids oscille, le vent s'en mêle ; tu vois bien que la pointe ne tombe pas sur le trait, sans pouvoir dire de combien ni vers où. Guillemine le dit pour toi : « Un pouce vers l'amont. La moitié depuis dix jours. Une pile qui verse ne descend pas : elle tourne sur son pied, jusqu'au moment où il n'y a plus de pied. »" },
      "Elle remonte son plomb, l'enroule. Ses mains ne tremblent pas ; c'est sa voix qui tremble, un peu. « Je le lui ai montré avant-hier. Il a dit que mon crochet avait joué dans son scellement. Il l'a dit gentiment. Il a mis huit ans, tu comprends. Ma mère est morte la troisième année. Il n'a que ce pont et moi, et il ne peut pas douter des deux à la fois. »",
    ],
    choices: [{ back: "K06j_guillemine" }] },
  K06j_guillemine_sondeurs: { act: "II", title: "Trois jours de sonde", place: "arvoise", fx: { flag: "j:sait_sondeur" },
    text: [
      "« J'avais onze ans. Je portais les jalons. » Guillemine plisse les yeux, pour revoir. « Ils étaient trois, de la Tour des Heures, avec une sonnette à tiraude et des tiges de fer. Le maître sondeur s'appelait Thibert. Un homme sérieux, qui notait tout. Ils ont sondé trois jours à l'emplacement de la troisième pile, alors qu'une matinée avait suffi pour les autres. »",
      "« Le troisième soir, Thibert est venu chez nous, il voulait parler à mon père. Mon père était à Méridane, pour le marché des pierres. C'est l'échevin Malestroit qui l'a reçu, à sa place, sur le quai : il avait la surveillance des dépenses. Ils sont restés enfermés une heure. Le lendemain, le rapport était signé. Roc à douze pieds. »",
      "Elle referme sa boîte. « Thibert n'est jamais reparti pour Méridane. Il a pris une chambre au cabaret du Bac. Il y est encore. Il boit, depuis huit ans, avec de l'argent dont personne ne sait d'où il vient. » Elle te regarde. « Je n'ai compris cela qu'en mars. On met longtemps à ranger dans le bon ordre ce qu'on a vu à onze ans. »",
    ],
    choices: [{ back: "K06j_guillemine" }] },
  K06j_epure: { act: "II", title: "L'épure", place: "arvoise",
    text: [
      "Le dessin couvre tout un mur : la grande arche, grandeur d'exécution, tracée à la pointe dans le plâtre, avec chaque voussoir numéroté. C'est une courbe d'une hardiesse folle, très plate, tendue comme un arc. Dans un coin, d'une écriture carrée : *Baudri fecit*. Et dessous, plus petit, d'une autre main, qu'on a essayé de gratter : *G. traça*.",
      "Un vieux compagnon s'approche, son gobelet à la main. « Quarante-deux pieds d'ouverture pour sept de flèche. On n'a jamais bâti si plat dans le royaume. Ceux de Méridane disaient qu'elle tomberait au décintrement. » Il lève son gobelet vers le dessin. « Elle n'a pas bronché. Une arche pareille, ça ne pardonne rien : il lui faut des appuis qui ne bougent pas d'un cheveu. Mais si les appuis tiennent, elle tiendra mille ans. »",
      "Il a dit *si*, sans y penser.",
    ],
    choices: [{ back: "K06j_loge" }] },

  // ------------------------------------------------------------ the sounder
  K06j_cabaret: { act: "II", title: "Le cabaret du Bac", backName: "le cabaret du Bac", place: "arvoise",
    text: [
      { first: true, text: "Le cabaret du Bac a vécu du bac : on y attendait la plate en buvant. Il mourra du pont. Ce matin, il fait sa dernière bonne journée, et l'hôte sert dehors, sur des tréteaux, la moitié du diocèse." },
      { first: true, text: "La salle basse est presque vide. Au fond, à la table sous l'escalier, un homme boit seul, avec méthode. Il a soixante ans, une figure qui a été fine, des mains soignées qui tremblent. Devant lui, trois chopines vides, alignées au cordeau, à distances égales." },
      { again: true, text: "La salle basse, la table sous l'escalier. L'homme aux chopines alignées n'a pas bougé." },
    ],
    choices: [
      { label: "T'asseoir en face de lui", to: "K06j_thibert", hide: { seen: "K06j_thibert" } },
      { back: "K06j_rive" },
    ] },
  K06j_thibert: { act: "II", title: "Maître Thibert", place: "arvoise", fx: { meet: "thibert" },
    text: [
      "« Quatre pieds deux pouces », dit l'homme sans lever la tête, quand tu t'assois. « La table. Je l'ai mesurée le premier soir. Je mesure tout. C'est une infirmité. » Il lève enfin les yeux, qui sont clairs, et beaucoup moins ivres que le reste. « Tu veux quelque chose. On ne s'assoit pas en face de moi pour le plaisir, depuis huit ans. »",
      "Tu dis : la troisième pile. Tu dis : douze pieds.",
      "Ses mains s'arrêtent de trembler. C'est pire.",
    ],
    choices: [
      { label: "« Vous avez sondé trois jours. Qu'est-ce que vous avez trouvé, le troisième ? »", test: { dom: "social", diff: 0, label: "Faire parler", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { voie: "heurier" }, v: 10 }, { if: { has: "j:sait_sondeur" }, v: 15 }, { if: { has: "j:preuve_plongee" }, v: 10 }] },
        win: { fx: { flag: ["j:preuve_sondeur", "j:sait_cabinet"], ep: ["seance", 700] }, to: "K06j_thibert_parle" }, lose: { to: "K06j_thibert_tait" } },
      { label: "Poser deux écus sur la table, entre les chopines", if: { gold: { min: 2 } }, fx: { gold: -2, flag: "j:sait_cabinet" }, to: "K06j_thibert_tait" },
    ] },
  K06j_thibert_parle: { act: "II", title: "Trente pieds", place: "arvoise",
    text: [
      "« Du sable. » Il le dit tout bas, tout de suite, comme on rend une chose qu'on avait dans la gorge. « Du sable jusqu'à trente pieds. Du sable fin, coulant, avec de l'eau qui passe dedans. Ma tige descendait toute seule. Je n'ai trouvé le roc qu'à trente-quatre, et incliné. On ne fonde pas là-dessus. On déplace la pile de dix toises, ou l'on ne bâtit pas. »",
      "« J'ai écrit cela. Deux feuilles, de ma main, avec les cotes. Je les ai portées à l'échevin Malestroit, puisque le maître d'œuvre était absent. Il les a lues. Il a dit que déplacer la pile, c'était refaire le projet, un an de retard, et son marché de pierres perdu : il avait acheté toute la carrière de Saint-Leu sur ce tracé-là. Il m'a mis une plume dans la main, et cent écus à côté. Puis cent par an. »",
      "Il aligne ses chopines, du bout du doigt. « J'ai écrit *douze*. C'est un petit mot. » Ses yeux clairs te regardent, sans demander pardon. « Mes deux feuilles, il ne les a pas brûlées. Il n'est pas sot : c'est par elles qu'il me tient, et par mon faux que je le tiens. Elles sont dans son cabinet, sur le quai, dans le pupitre à cylindre. La clef est à sa chaîne de montre. » Il a un rire sans bruit. « J'ai mesuré la serrure aussi. »",
      "« Vous viendriez le dire ? Devant maître Baudri ? »",
      "Maître Thibert regarde ses mains. « Je ne sais pas. Je suis resté assis huit ans à cette table pour ne pas avoir à me lever. Apporte-moi les feuilles. Avec mon écriture sous le nez, je n'aurai peut-être plus le choix. »",
    ],
    choices: [{ back: "K06j_cabaret" }] },
  K06j_thibert_tait: { act: "II", title: "Un petit mot", place: "arvoise",
    text: [
      { outcome: "lose", text: "Il se referme comme un compas. « Le roc à douze pieds. C'est signé. C'est scellé. Demande à l'échevin Malestroit, sur le quai, la maison à pignon : il a les pièces dans son cabinet. Moi, je n'ai plus rien. Je n'ai que cette table. »" },
      { if: { not: { has: "j:preuve_sondeur" } }, text: "Il prend les écus, s'il y en a, sans les compter. « Le cabinet de l'échevin, répète-t-il plus bas, en regardant ailleurs. Un pupitre à cylindre. Ce qu'on y range, on ne le brûle pas. » Puis il lève le doigt vers l'hôte, pour une quatrième chopine, et tu n'existes plus." },
    ],
    choices: [{ back: "K06j_cabaret" }] },

  // ------------------------------------------------------------ the alderman's study
  K06j_malestroit: { act: "II", title: "La maison à pignon", backName: "la maison de l'échevin", place: "arvoise",
    text: [
      { first: true, text: "La plus belle maison du quai : trois étages de pierre de Saint-Leu, la même que celle du pont, un pignon à redents, un écusson neuf. L'échevin Malestroit est sur l'estrade, avec ses confrères, à répéter son discours. Toute sa maison est à la fête. On a laissé, pour garder, un clerc à lunettes, assis dans le vestibule, la porte ouverte, qui lit." },
      { first: true, if: { has: "j:sait_cabinet" }, text: "Le cabinet est au premier, sur le quai : on voit par la fenêtre un pupitre à cylindre et le haut d'un fauteuil." },
      { first: true, if: { not: { has: "j:sait_cabinet" } }, text: "Tu ignores au juste ce que tu cherches dans cette maison. Tu sais seulement que le rapport des sondeurs y est passé, il y a huit ans, entre deux portes." },
      { again: true, text: "La maison à pignon, ses volets clos, le clerc qui lit dans le vestibule." },
    ],
    choices: [
      { label: "Passer par la cour de derrière, et la fenêtre de l'office", test: { dom: "discretion", diff: 5, label: "Discrétion", help: [{ if: { voie: "leste" }, v: 20 }, { if: { voie: "coureur" }, v: 5 }, { if: { has: "j:sait_cabinet" }, v: 10 }] },
        win: { fx: { ep: ["seance", 700] }, to: "K06j_cabinet" }, lose: { fx: { flag: "j:cabinet_rate" }, to: "K06j_cabinet_rate" } },
      { label: "Envoyer Line par le soupirail du cellier, où tu ne passes pas", hide: { not: LINE }, fx: { flag: "j:line_cabinet", ep: ["seance", 500] }, to: "K06j_cabinet" },
      { label: "Parler au clerc : « L'échevin m'envoie chercher un papier dans son pupitre. »", test: { dom: "social", diff: 10, label: "Mentir", help: [{ if: { voie: "diseur" }, v: 20 }, { if: { has: "j:sait_cabinet" }, v: 10 }] },
        win: { fx: { ep: ["seance", 700] }, to: "K06j_cabinet" }, lose: { fx: { flag: "j:cabinet_rate" }, to: "K06j_cabinet_rate" } },
      { back: "K06j_rive" },
    ] },
  K06j_cabinet: { act: "II", title: "Le pupitre à cylindre", place: "arvoise", fx: { flag: "j:preuve_rapport", item: "rapport_sondage" },
    text: [
      { after: "j:line_cabinet", text: "Line entre par le soupirail comme une lettre dans une boîte. Tu attends sous la fenêtre du cabinet le temps de deux Pater, en regardant le clerc tourner ses pages. Puis la croisée s'entrouvre, au premier, et deux nattes paraissent. « Il y a un meuble avec un couvercle qui roule. Il est fermé. C'est une serrure à gorges, à quatre goupilles. » Un silence. « J'ai un ressort. »" },
      { after: "j:line_cabinet", text: "Le temps d'un troisième Pater. Quelque chose tombe à tes pieds : deux feuilles pliées, nouées d'une faveur. Line redescend par où elle est montée, de la toile d'araignée plein les nattes. « Il y avait aussi de l'or, dit-elle. Je n'y ai pas touché. Tu as dit des papiers. »" },
      { if: { not: { has: "j:line_cabinet" } }, text: "Le cabinet sent la cire et le tabac d'Espagne. Le pupitre est contre le mur, un beau meuble de noyer, dont le cylindre est baissé. La serrure est une serrure à gorges, à quatre goupilles : tu en as démonté de pareilles sur des coffrets à musique. Tu n'as pas la clef. Tu as une épingle, et dix ans de boîtiers de montre." },
      { if: { not: { has: "j:line_cabinet" } }, text: "Le cylindre remonte sans bruit. Des liasses, des comptes de carrière, un sac d'écus. Tout au fond, dans le tiroir du milieu, deux feuilles pliées, nouées d'une faveur." },
      "Tu les ouvres. Une écriture fine, droite, soignée, celle d'un homme qui mesure tout. *Sondages faits à l'emplacement de la troisième pile du pont projeté sur la Thiorne, par moi, Thibert, maître sondeur de la Tour des Heures.* Des colonnes de cotes. *Sable fin et coulant, avec venues d'eau, jusqu'à trente pieds. Roc rencontré à trente-quatre, incliné vers l'amont. Avis : ne pas fonder en ce lieu.* La date. La signature.",
      "En travers de la première feuille, d'une autre encre, d'une grosse écriture pressée : *Vu. À refaire. M.*",
    ],
    choices: [{ label: "Le quai, les deux feuilles sous ta veste", to: "K06j_rive" }] },
  K06j_cabinet_rate: { act: "II", title: "Le clerc à lunettes", place: "arvoise",
    text: [
      "Le clerc lève le nez. C'est un petit homme sec, qui a la vue basse et l'ouïe fine, et que l'échevin paie justement pour l'une et pour l'autre.",
      "« Holà ! » Il a une sonnette. Il s'en sert. Deux sergents de la ville, qui buvaient au coin du quai, arrivent sans se presser, avec la bonne humeur des jours de fête ; ils te reconduisent jusqu'à la berge par le fond de la culotte, et le clerc referme la porte à clef, à double tour, en te regardant par le judas.",
      "Cette maison-là t'est fermée. Il reste le fleuve, la loge, les gens.",
    ],
    choices: [{ back: "K06j_rive" }] },

  // ------------------------------------------------------------ the children, Perrine
  K06j_enfants: { act: "II", title: "Les enfants en blanc", place: "arvoise",
    text: [
      "On les a habillés de blanc, garçons et filles, une couronne de bleuets sur la tête, un cierge à la main. Ce sont les enfants de chœur de six paroisses. Un chantre les range par deux, les plus petits devant, en les prenant par les épaules comme on place des quilles.",
      "« Vous marchez derrière Monseigneur. Vous chantez à la troisième pile, devant l'estrade, le *Te Deum*, sans regarder l'eau. Celui qui regarde l'eau a le vertige et lâche son cierge. Compris ? »",
      "Ils font oui. Ils sont une quarantaine. La plus petite, au premier rang, a quatre ans peut-être, et son cierge est plus haut qu'elle ; elle le tient à deux mains, les yeux levés vers la flamme, la bouche ouverte.",
      "Tu les comptes. Tu ne voulais pas les compter.",
    ],
    choices: [{ back: "K06j_rive" }] },
  K06j_perrine_berge: { act: "II", title: "La hotte fermée", place: "arvoise",
    text: [
      "Perrine n'a pas déballé. Dix mille clients, et elle est assise sur sa hotte, les coudes aux genoux, à regarder la troisième arche. Elle a dans la main un caillou plat, qu'elle retourne.",
      "« C'est là qu'on l'a retrouvé. Sous la saulaie, à la pointe de l'île, trois semaines après. Il avait encore sa sonde attachée au poignet : une corde à nœuds avec un plomb. Il sondait leur pile. Tout seul, en février, pour leur apporter des chiffres, puisqu'ils ne croyaient que les chiffres. » Elle lance le caillou, qui fait quatre ricochets. « J'avais douze ans. J'ai pris sa hotte de marché, et la route. »",
      { after: "j:perrine_sait_pont", text: "Elle se tourne vers toi. « J'ai parlé aux lavandières. J'ai parlé à la femme du passeur, à la boulangère, à deux curés. Je leur ai dit ce que tu m'as dit. Elles m'ont écoutée poliment : je suis la fille de Josselin, on sait ce que j'en pense. » Sa voix se durcit. « Il me faut autre chose que ma parole. Trouve-moi une chose qu'on puisse montrer. Je me charge de la faire voir à dix mille personnes : crier, c'est mon métier. »" },
      { before: "j:perrine_sait_pont", text: "Elle se tourne vers toi. « Tu regardes ce pont comme moi. Depuis ce matin. Tu comptes les gens. » Elle attend. « Tu sais quelque chose, ou tu sens quelque chose ? Parce que si c'est sentir, on est deux, et ça ne fait pas un témoin. »" },
    ],
    choices: [
      { label: "« Je le sais. Il tombe à midi, pendant la bénédiction. »", hide: { any: [{ has: "j:perrine_sait_pont" }, { not: { has: "monde:su:pont" } }] }, fx: { flag: ["j:perrine_sait_pont", "j:perrine_dit_vrai"], conf: { perrine: 10 } }, to: "K06j_perrine_sait" },
      { back: "K06j_rive" },
    ] },
  K06j_perrine_sait: { act: "II", title: "Un témoin", place: "arvoise",
    text: [
      { with: "perrine", text: "Perrine ne demande pas d'où tu le tiens. Elle te regarde longtemps, comme elle regarde une pièce douteuse, et elle décide de la prendre." },
      "« À midi. » Elle se lève, cale sa hotte contre un saule. « Alors on a deux heures, et ma parole ne suffit pas : je suis la fille de Josselin, tout Arvoise sait ce que je pense de ce pont. Trouve une chose qu'on puisse montrer. Une seule. Je me charge de la faire voir à dix mille personnes. Crier, c'est mon métier. »",
    ],
    choices: [{ back: "K06j_rive" }] },

  K06j_onze: { act: "II", title: "La quatorzième lieue", place: "arvoise",
    text: [
      "Onze heures sonnent au clocher de l'autre rive, et l'eau porte chaque coup. La borne de la quatorzième lieue est plantée au bord du quai, à l'endroit où la chaussée s'arrêtait depuis toujours devant la rivière. On a fait partir le pont juste à côté. Elle a ses guirlandes, comme tout le reste.",
      "Tu t'assois contre elle, dans le bruit de dix mille personnes. Tu ouvres le Cahier sur tes genoux. Il te reste une heure, et l'autre bout de cette page a peut-être encore quelque chose à te dire.",
    ],
    choices: [{ label: "Lire", to: "M06", big: true }] },
});

module.exports = {
  passages: P,
  extras: {
    people: {
      baudri: { name: "Maître Baudri", f: false, aka: ["Baudri", "maître Baudri"], face: { age: "mur", skin: "hale", hair: "gris", coif: "court", beard: "barbe", eyes: "tombants", iris: "brun", nose: "large", lips: "fines", shape: "carre" },
        aspect: { allure: "cinquante ans, large, le cou dans les épaules", signe: "une main qui pèse comme un moellon" }, qui: "Le maître d'œuvre du Pont-Neuf d'Arvoise, en 541.", desc: "Il a mis huit ans à bâtir le Pont-Neuf sur la Thiorne." },
      guillemine: { name: "Guillemine", f: true, aka: ["Guillemine", "l'appareilleuse"], face: { age: "jeune", skin: "hale", hair: "brun", coif: "foulard", eyes: "amande", iris: "brun", nose: "fin", lips: "fines", shape: "ovale" },
        aspect: { allure: "dix-neuf ans, de la poussière dans les cils", habits: "un tablier de cuir, un mouchoir" }, qui: "La fille de maître Baudri.", desc: "Elle a tracé la moitié des voussoirs du Pont-Neuf sans figurer sur aucun rôle." },
      gervais: { name: "Gervais Lebac", f: false, aka: ["Gervais", "Gervais Lebac"], face: { age: "jeune", skin: "hale", hair: "noir", coif: "court", eyes: "ronds", iris: "brun", nose: "busque", lips: "fines", shape: "allonge" },
        aspect: { allure: "quinze ans, long, noiraud, les oreilles décollées", habits: "un bonnet de laine rouge enfoncé jusqu'aux sourcils" }, qui: "Le fils du maître passeur d'Arvoise, en 541.", desc: "Il tient le cabestan du bac, et plonge mieux que les loutres." },
      thibert: { name: "Maître Thibert", f: false, aka: ["Thibert", "maître Thibert"], face: { age: "ancien", skin: "clair", hair: "gris", coif: "degarni", eyes: "amande", iris: "clair", nose: "fin", lips: "fines", shape: "allonge" },
        aspect: { allure: "soixante ans, une figure qui a été fine", signe: "aligne ses chopines au cordeau" }, qui: "Un ancien maître sondeur de la Tour des Heures.", desc: "Il a sondé le lit de la Thiorne pour le Pont-Neuf, et n'est jamais reparti d'Arvoise." },
    },
    items: {
      rapport_sondage: { name: "Les deux feuilles de maître Thibert", kind: "divers", flat: true, keep: true, price: 0, desc: "Le vrai rapport des sondages de la troisième pile : sable jusqu'à trente pieds, roc à trente-quatre. En travers, d'une autre main : « Vu. À refaire. M. »" },
    },
  },
};
