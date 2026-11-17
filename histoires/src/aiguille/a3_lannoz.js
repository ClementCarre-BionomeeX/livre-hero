// L'Île Folle-Aiguille · act III, chapter III.3: Lannoz, the last watering place (the child or the doctor), then the
// council at the stern, seen by whoever is followed: the captain, the baron, the doctor, the second, the bosun count
// the faithful (story.equipage) and decide to play ignorant until the island. The escaped boy and the braggart outlaw
// (xe_lannoz.js) run across the moors in the meantime.
module.exports = {
  passages: {
    // ——— The child.
    A3o_debut: { act: "III", title: "Lannoz", place: "mer_lannoz", ambiance: "mer",
      text: [
        "Après les Sargues, la mer devient grise et froide, et le ciel s'abaisse jusqu'à toucher les mâts. Il bruine quatre jours de suite. On remet les vareuses de laine. On a l'impression d'être revenu au Ponant, et l'on en est presque ému, ce qui en dit long sur les Sargues.",
        "Lannoz sort de la bruine au cinquième matin : une longue île brune, rase, peignée par le vent, sans un arbre. Dans l'anse, un village de pierres sèches qui fume. Et à l'ancre, au milieu de l'anse, un brick à coque jaunâtre, dont les lettres, sur le tableau arrière, se lisent depuis la lisse.",
        { if: { any: [{ has: "florian:nom" }, { seen: "XE_q_vu" }] }, text: "*LE FRUCTUEUX — MORLENC*. Tu as vu ces lettres sous un réverbère du Quai des Hollandes, une nuit de pluie, et un garçon qu'on traînait par les bras jusqu'à la passerelle." },
        { if: { has: "florian:lannoz" }, text: "*À Lannoz pour l'eau, puis droit aux îles. Il y a des landes, à Lannoz, et des tourbières où l'on se perd.* La voix grasse et enrhumée du capitaine du brick te revient, mot pour mot, comme une chanson qu'on n'a pas voulu apprendre." },
        { if: { not: { any: [{ has: "florian:nom" }, { seen: "XE_q_vu" }] } }, text: "*LE FRUCTUEUX — MORLENC*. Un brick de commerce, à ce qu'il semble, qui fait de l'eau comme vous. Ses matelots, sur le pont, ont l'air de chercher quelque chose sur la lande, à la longue-vue." },
      ],
      choices: [{ label: "Mouiller dans l'anse", to: "A3o_lannoz" }] },
    A3o_lannoz: { act: "III", title: "Lannoz", place: "lannoz", escale: "lannoz", hub: true, noLead: true, backName: "Lannoz", ambiance: "nature",
      text: [
        { first: true, text: "La lande de Lannoz commence au bord de l'eau et ne s'arrête qu'à l'autre bout de l'île. Bruyère rousse, ajoncs, mousses spongieuses où le pied s'enfonce jusqu'à la cheville, et partout, entre les collines rondes, les tourbières : de grandes plaques d'eau noire, immobile, qui reflètent le ciel gris comme des miroirs ternis, bordées d'herbes si vertes qu'on a envie d'y marcher, et qu'il ne faut pas. Des moutons noirs paissent partout, sans berger, avec l'air de propriétaires." },
        { first: true, text: "Gobert mène la corvée d'eau à un ruisseau qui descend des collines, à une demi-lieue du village. On restera deux jours. La capitaine interdit qu'on s'éloigne du ruisseau. « Les tourbières de Lannoz ont mangé plus de marins que les récifs de Brisegrève, dit-elle. Et elles ne rendent rien. »" },
        { again: true, text: "La lande, la bruine, les moutons noirs, l'eau noire des tourbières." },
        { with: "chien", text: "Le chien court sur la lande comme un fou, le nez au vent, ivre de terre après six semaines de planches. Il revient vers toi, repart, revient. Une fois, il s'arrête net, le museau tendu vers les collines, et gronde." },
      ],
      choices: [
        { label: "Aller au ruisseau avec la corvée d'eau", to: "XE_m_debut", hide: { seen: "XE_m_debut" } },
        { label: "Descendre voir Sept, dans la cale", to: "XF_s_cale", hide: { any: [{ seen: "XF_s_cale" }, { not: { present: "sept" } }] } },
        { label: "Emmener Sept sur la lande, à l'aube", to: "XF_s_lande", hide: { any: [{ seen: "XF_s_lande" }, { not: { present: "sept" } }] } },
        { label: "Descendre au village de pierres sèches", to: "A3o_village", hide: { seen: "A3o_village" } },
        { label: "Monter vers les moutons noirs, sur la lande", to: "XQ_l_bergere", hide: { seen: "XQ_l_bergere" } },
        { label: "Aller à la veillée, le soir, au village", to: "XQ_l_veillee", hide: { seen: "XQ_l_veillee" }, if: { seen: "A3o_village" }, why: "Personne au village ne t'a encore dit qu'il y avait une veillée." },
        { label: "Sous l'orage, courir vers la seule fenêtre allumée de la lande", to: "ZE_orage", hide: { seen: "ZE_orage" }, if: { seen: "A3o_village" }, why: "Tu ne connais pas encore assez la lande pour t'y perdre." },
        { label: "Aider les tourbiers, à l'est", to: "XQ_l_tourbe", hide: { seen: "XQ_l_tourbe" } },
        { label: "Grimper jusqu'au cairn de la colline", to: "XQ_l_cairn", hide: { any: [{ seen: "XQ_l_cairn" }, { seen: "XE_m_debut" }] } },
        { label: "Déchiffrer la page de signes, à l'abri d'un muret", to: "XK_dechiffre", hide: { any: [{ not: { has: "xk:copie" } }, { has: "enigme:xk_chiffre" }] } },
      ] },
    A3o_village: { act: "III", title: "Le village", place: "lannoz", ambiance: "village",
      text: [
        "Le village de Lannoz compte trente maisons de pierres sèches, couvertes de mottes de tourbe où pousse de l'herbe, si basses qu'on y entre courbé, et une seule rue, qui est un ruisseau. Les habitants parlent une langue que tu comprends à moitié, rauque, chantante, pleine de mots qui viennent de la mer. Ils vendent des moutons, de la laine, du fromage qui pique, et des nouvelles, qu'ils font payer plus cher.",
        "Une vieille femme assise devant sa porte, en train de carder de la laine noire, t'offre un bol de lait caillé contre une chanson du Ponant. Tu chantes. Elle rit de ton accent. Puis elle te dit, en mâchant ses mots :",
        "« Les hommes du brick jaune battent la lande depuis trois jours. Deux de leurs passagers se sont sauvés, la nuit de l'arrivée. Un garçon, tout jeune, tout blond, et un autre, un drôle, avec une moustache comme des cornes de bélier et une épée plus longue que lui. » Elle rit. « Celui-là, mon petit, on l'entend venir d'une lieue. Il chante. Il jure. Il défie les moutons en duel. Mon fils l'a vu passer avant-hier vers les tourbières de l'ouest. Il lui a crié de s'arrêter, à cause de l'eau noire. L'autre lui a répondu qu'un Malbosc ne s'arrêtait que devant Dieu, et encore, par politesse. »",
        "Elle carde sa laine. « S'ils sont dans les tourbières de l'ouest, le brick n'a plus besoin de les chercher. »",
      ],
      choices: [
        { label: "Lui acheter un fromage et une écuelle de cochléaire, l'herbe aux marins", if: { gold: { min: 20 } }, fx: { gold: -20, flag: "scorbut:cochleaire" }, to: "A3o_village_herbe" },
        { back: "A3o_lannoz" },
      ] },
    A3o_village_herbe: { act: "III", title: "Le village", place: "lannoz", ambiance: "village",
      text: [
        "La vieille te vend un fromage qui pique et un grand panier d'une petite herbe grasse, aux feuilles rondes, qui pousse sur les falaises de l'île et sent la moutarde. « Le cochléaire, dit-elle. Les marins l'appellent l'herbe aux dents. Mâche-la, et fais-la mâcher aux tiens. Ceux qui saignent des gencives, ça les arrête en huit jours. » Elle te regarde. « Vous en avez, des qui saignent ? Tout le monde en a, quand on vient du sud. »",
        "Tu rapportes le panier à bord. La médecin le regarde, mâche une feuille, ferme les yeux, et dit seulement : « Bénie soit la vieille. »",
      ],
      choices: [{ back: "A3o_lannoz" }] },

    A3o_conseil: { act: "III", title: "Le conseil", place: "cormorane", ambiance: "nuit",
      text: [
        "La nuit du départ de Lannoz, la Cormorane file vers le sud-ouest sous un ciel qui se dégage, et à l'arrière, dans la grand-chambre, les fenêtres de poupe sont éclairées tard.",
        { if: { any: [{ has: "complot:capitaine" }, { has: "complot:victorine" }] }, text: "Vers minuit, Gobert vient te chercher dans ton hamac, sans un mot, et te mène à l'arrière, par la coursive, en évitant l'avant. Dans la grand-chambre, autour de la table d'acajou, sous une seule lanterne, il y a la capitaine Ribaud, le baron Clavières en robe de chambre, la médecin, Benoît Quémeneur, et Gobert, qui referme la porte et s'adosse contre elle." },
        { if: { not: { any: [{ has: "complot:capitaine" }, { has: "complot:victorine" }] } }, text: "Vers minuit, tu montes prendre l'air sur la dunette, et tu vois, par la claire-voie de la grand-chambre, des têtes penchées autour de la table, sous une seule lanterne : la capitaine, le baron, la médecin, le second, Gobert. Tu t'allonges sur le pont, contre la claire-voie entrouverte, et tu écoutes." },
        "« Nous sommes ici pour compter, dit la capitaine. Rien d'autre. Compter qui est à nous, qui est à eux, et qui ne sait pas encore. »",
      ],
      choices: [{ label: "Écouter compter", to: "A3o_compte" }] },
    A3o_compte: { act: "III", title: "Le compte", place: "cormorane", ambiance: "nuit",
      text: [
        { if: { has: "complot:entendu" }, text: "La capitaine se tourne vers toi. « Répète. Tout ce que tu as entendu dans la soute aux voiles. Les mots exacts. » Tu répètes. Les mots exacts. Le baron devient très pâle au mot *livre*, et plus pâle encore au mot *deux fois*. Il ne dit rien." },
        { if: { all: [{ has: "complot:soupcon" }, { not: { has: "complot:entendu" } }] }, text: "On parle d'un pistolet trouvé dans un hamac, de quatre hommes qui ne se parlent qu'à la cale, d'un cuisinier qui chante trop juste. On ne sait rien. On se doute de tout." },
        { if: { has: "complot:fenouillet" }, text: "Tu dis aussi ce que t'a soufflé une voix sans corps, dans la soute : *assez, si les hésitants penchent du bon côté*. Le baron te regarde comme on regarde un enfant qui raconte ses rêves. La capitaine, non." },
        { if: { has: "brousse:reconnait" }, text: "Tu dis que le pilote a reconnu la voix du cuisinier, et qu'il a peur. La capitaine ferme les yeux une seconde." },
        "Puis on compte. La capitaine dit les noms à voix basse, un par un, et chacun dit ce qu'il sait, ce qu'il croit, ce qu'il a vu.",
        { if: { equipage: "loyal", min: 9 }, text: "On compte neuf, dix, onze noms sûrs. La capitaine respire. « Nous sommes plus nombreux qu'eux. S'ils le savent, ils attendront. S'ils ne le savent pas, ils se trompent. Dans les deux cas, nous avons le temps. »" },
        { if: { equipage: "loyal", min: 6, max: 8 }, text: "On compte six, sept, huit noms sûrs, et autant d'autres qu'on ne sait pas où mettre. La capitaine pose les mains à plat sur la table. « Autant qu'eux, dit-elle. Ou un peu plus. Ou un peu moins. Tout se jouera sur ceux qui ne savent pas encore. »" },
        { if: { equipage: "loyal", max: 5 }, text: "On compte cinq noms sûrs. Cinq. On recompte. On en trouve cinq encore. La capitaine se tait longtemps. « Ils ont passé six semaines à faire la soupe, dit-elle enfin. Nous, nous avons passé six semaines à tenir la barre. Ils ont été plus malins. »" },
        "Le baron, qui n'a rien dit, tapote la table du bout des doigts. « Que proposez-vous, capitaine ?",
        "— Rien. Nous ne faisons rien. Nous jouons l'ignorance jusqu'à l'île. Ils ne bougeront pas avant l'argent ; ils l'ont dit. Nous aurons l'île, la terre ferme, la chapelle en ruine sur l'éperon, s'il y en a une, comme le dit votre carte. Les armes restent à la sainte-barbe, et la clef reste à mon cou. »",
      ],
      choices: [{ label: "Attendre ce qu'on attend de toi", to: "A3o_role" }] },
    A3o_role: { act: "III", title: "Le conseil", place: "cormorane", ambiance: "nuit",
      text: [
        { if: { any: [{ has: "complot:capitaine" }, { has: "complot:victorine" }] }, text: "La capitaine se tourne vers toi. « Toi, tu es le seul à bord qu'il aime. Ça se voit. Reste près de lui. Ris quand il chante. Mange sa soupe. Et si un jour il te demande de le suivre, suis-le, et reviens me dire où. » Elle te regarde longtemps. « Je te demande quelque chose de très sale. Je le sais. »" },
        { if: { not: { any: [{ has: "complot:capitaine" }, { has: "complot:victorine" }] } }, text: "La capitaine souffle la lanterne. Les têtes se relèvent. Tu te glisses loin de la claire-voie, à plat ventre, jusqu'à l'avant, avant que Gobert ne sorte. Personne ne t'a vu{e}. Personne ne t'a rien demandé. Tu sais quand même, désormais, ce que l'arrière sait." },
      ],
      choices: [
        { label: "« Oui, capitaine. »", if: { any: [{ has: "complot:capitaine" }, { has: "complot:victorine" }] }, hide: { not: { any: [{ has: "complot:capitaine" }, { has: "complot:victorine" }] } }, fx: { flag: ["conseil:mousse", "conseil:espion"] }, to: "A3o_conseil_fin" },
        { label: "« Je ne l'espionnerai pas. Je resterai près de lui, c'est tout. »", if: { any: [{ has: "complot:capitaine" }, { has: "complot:victorine" }] }, hide: { not: { any: [{ has: "complot:capitaine" }, { has: "complot:victorine" }] } }, fx: { flag: "conseil:mousse" }, to: "A3o_conseil_fin" },
        { label: "Regagner ton hamac", hide: { any: [{ has: "complot:capitaine" }, { has: "complot:victorine" }] }, fx: { flag: "conseil:ecoute" }, to: "A3o_conseil_fin" },
      ] },
    A3o_conseil_fin: { act: "III", title: "Le conseil", place: "cormorane", ambiance: "nuit",
      text: [
        "À l'avant, la porte de la cambuse laisse passer un trait de lumière rouge. Le fourneau ne s'éteint jamais. Le maître-coq veille avec lui, et il chante, très bas, une berceuse de la côte que tu connais, que ta mère chantait, peut-être, ou ton père, ou personne.",
        "Tu te couches dans ton hamac. Tu ne dors pas. Dans trois jours, la terre.",
      ],
      choices: [{ label: "Trois jours", to: "C3c_fin", big: true }] },

    // ——— The doctor.
    A3x_debut: { act: "III", title: "Lannoz", place: "mer_lannoz", ambiance: "mer",
      text: [
        "Après les Sargues, le froid revient, et la bruine, et les vareuses de laine. Victorine en est reconnaissante : le froid conserve. Mais il ne guérit rien.",
        { if: { any: [{ has: "pharmacie:citron" }, { has: "citrons:victorine" }, { has: "citrons:mousse" }, { has: "xf:remedes" }] }, text: "Les gencives de l'équipage ont dégonflé. Il reste trois malades, qui guérissent. Victorine distribue sa cuiller quotidienne sous l'œil de Gobert, qui avale la sienne en jurant contre la science." },
        { if: { not: { any: [{ has: "pharmacie:citron" }, { has: "citrons:victorine" }, { has: "citrons:mousse" }, { has: "xf:remedes" }] } }, text: "Le scorbut s'est installé. Onze hommes saignent des gencives ; quatre ont perdu des dents ; Gobert a les jambes couvertes de taches violettes et ne monte plus dans la mâture. Victorine n'a rien à leur donner. Elle a lu, dans un traité de médecine navale, qu'on trouve sur les îles froides une petite herbe à feuilles rondes qui sent la moutarde. Elle prie pour Lannoz." },
        "Lannoz sort de la bruine au cinquième matin, longue île brune, rase, avec un village qui fume, et à l'ancre dans l'anse, un brick à coque jaunâtre dont le capitaine envoie aussitôt sa chaloupe à la Cormorane.",
      ],
      choices: [{ label: "Mouiller dans l'anse", to: "A3x_lannoz" }] },
    A3x_lannoz: { act: "III", title: "Lannoz", place: "lannoz", escale: "lannoz", hub: true, noLead: true, backName: "Lannoz", ambiance: "nature",
      text: [
        { first: true, text: "La lande de Lannoz commence au bord de l'eau : bruyère rousse, ajoncs, mousses où le pied s'enfonce, et partout, entre les collines rondes, les tourbières, plaques d'eau noire bordées d'herbes trop vertes. La corvée d'eau part vers un ruisseau, à une demi-lieue. On restera deux jours." },
        { again: true, text: "La lande, la bruine, les tourbières, le brick jaune au milieu de l'anse." },
      ],
      choices: [
        { label: "Recevoir le capitaine du brick jaune, qui monte à bord", to: "XE_v_debut", hide: { seen: "XE_v_debut" } },
        { label: "Veiller avec Ombeline, la nuit, à l'infirmerie", to: "XF_o_recit", hide: { any: [{ seen: "XF_o_recit" }, { not: { has: "ombeline:abord" } }] } },
        { label: "Cueillir sur les falaises l'herbe qui sent la moutarde", to: "A3x_herbe", hide: { seen: "A3x_herbe" } },
        { label: "Suivre le garçon qui crie « médecin » sur la grève", to: "XQ_l_couches", hide: { seen: "XQ_l_couches" } },
        { label: "Rendre visite au recteur, au milieu de ses ruches", to: "XQ_l_recteur", hide: { seen: "XQ_l_recteur" } },
        { label: "Suivre le receveur des droits, qui attend au canot, sans chapeau", to: "YV_maison", hide: { seen: "YV_maison" } },
        { label: "Marcher sur la lande avec Benoît Quémeneur", to: "XQ_l_benoit", hide: { any: [{ seen: "XQ_l_benoit" }, { has: "benoit:parti" }] } },
      ] },
    A3x_herbe: { act: "III", title: "L'herbe aux dents", place: "lannoz", ambiance: "nature",
      text: [
        "Elle la trouve sur les falaises, au-dessus de l'anse, dans les fissures de la roche où l'embrun la nourrit : une petite herbe grasse, aux feuilles rondes et charnues, qui sent la moutarde quand on l'écrase entre les doigts. Le cochléaire. Exactement comme dans le traité, avec la gravure. Elle pourrait embrasser le traité.",
        "Elle passe la journée à quatre pattes sur la falaise, sous la bruine, avec deux matelots et trois sacs, et elle remplit les trois sacs. Le soir, à bord, elle fait mâcher l'herbe crue à tout l'équipage, homme par homme, sous ses yeux, et elle en fait une soupe que Fargue, consulté, juge « intéressante, à condition de n'y pas penser ».",
        { if: { not: { any: [{ has: "pharmacie:citron" }, { has: "citrons:victorine" }, { has: "citrons:mousse" }, { has: "xf:remedes" }] } }, text: "En huit jours, les gencives dégonflent. Gobert remonte dans la mâture. Il ne remercie personne ; il jure moins, ce qui revient au même." },
      ],
      choices: [{ label: "Faire sécher le reste pour la suite", fx: { flag: "scorbut:cochleaire" }, to: "A3x_herbe_fin" }] },
    A3x_herbe_fin: { act: "III", title: "L'herbe aux dents", place: "lannoz", ambiance: "nature",
      text: [
        "Le cochléaire sèche dans l'infirmerie, en bottes suspendues aux barrots, et toute la cale sent la moutarde. Le baron s'en plaint. Victorine lui propose d'en mâcher. Il ne s'en plaint plus.",
      ],
      choices: [{ back: "A3x_lannoz" }] },

    A3x_conseil: { act: "III", title: "Le conseil", place: "cormorane", ambiance: "nuit",
      text: [
        "La nuit du départ de Lannoz, la capitaine réunit le conseil dans la grand-chambre, à minuit, sous une seule lanterne : elle-même, le baron, Benoît Quémeneur, Gobert adossé contre la porte, et Victorine.",
        { if: { has: "complot:entendu" }, text: "On fait venir l'enfant du Fanal, qui répète, les mots exacts, ce qu'il a entendu dans la soute aux voiles. Le baron pâlit au mot *livre*, et plus encore au mot *deux fois*. Victorine regarde ses mains sur la table ; elles ne tremblent pas. Elle se dit qu'il les a entraînées." },
        { if: { has: "complot:gris" }, text: "Victorine dit ce que Monsieur Gris lui a dit, une nuit, par la bouche de son aide : *on laisse creuser les bourgeois ; on frappe quand c'est à bord ; le baron paiera deux fois*. Le baron la regarde comme on regarde quelqu'un qui cite un fou. La capitaine, non." },
        { if: { has: "victorine:livre" }, text: "Victorine regarde le baron, et le baron la regarde, et ils savent tous deux qu'elle sait ce qu'est le livre. Il ne dit rien. Elle non plus. Pas encore." },
        { if: { has: "brousse:reconnait" }, text: "Victorine dit que le pilote a reconnu la voix du cuisinier, qu'il a peur, et qu'il a raison d'avoir peur. La capitaine ferme les yeux une seconde." },
        "« Nous sommes ici pour compter, dit la capitaine. Qui est à nous, qui est à eux, qui ne sait pas encore. »",
        "On compte. Elle dit les noms, un par un. Chacun dit ce qu'il sait.",
        { if: { equipage: "loyal", min: 9 }, text: "Neuf, dix, onze noms sûrs. La capitaine respire. « Nous sommes plus nombreux. Ils attendront. Nous avons le temps. »" },
        { if: { equipage: "loyal", min: 6, max: 8 }, text: "Six, sept, huit noms sûrs, et autant d'autres qu'on ne sait où mettre. « Autant qu'eux, dit la capitaine. Tout se jouera sur ceux qui ne savent pas encore. »" },
        { if: { equipage: "loyal", max: 5 }, text: "Cinq noms sûrs. On recompte. Cinq. « Ils ont fait la soupe pendant six semaines, dit la capitaine. Nous avons tenu la barre. Ils ont été plus malins. »" },
        "« Rien, décide-t-elle. Nous ne faisons rien. Nous jouons l'ignorance jusqu'à l'île. Les armes restent à la sainte-barbe, la clef à mon cou. Il y a, sur votre carte, monsieur le baron, une chapelle sur un éperon. Si elle a encore des murs, c'est là que nous irons, quand il le faudra. »",
        "Le baron tapote la table du bout des doigts. Puis il se tourne vers Victorine.",
        "« Et vous, docteur ? Vous ne dites rien. Vous soignez tout le monde, de la même main. Le cuisinier vous aime bien, à ce qu'on dit. »",
      ],
      choices: [
        { label: "« Je continuerai de soigner tout le monde. C'est mon arme. »", fx: { flag: "conseil:victorine" }, to: "A3x_conseil_fin" },
        { label: "« Si vous voulez savoir ce que pense le cuisinier, monsieur le baron, demandez-vous d'abord ce qu'il veut vous vendre. »", fx: { flag: ["conseil:victorine", "victorine:pique_baron"], regard: { claviere: "mefiant" } }, to: "A3x_conseil_fin" },
      ] },
    A3x_conseil_fin: { act: "III", title: "Le conseil", place: "cormorane", ambiance: "nuit",
      text: [
        "Le conseil se défait à deux heures. Victorine redescend à son faux-pont par la coursive, dans le noir. À l'avant, la porte de la cambuse laisse passer un trait de lumière rouge, et une voix de baryton chante, très bas, une berceuse de la côte. Elle s'arrête, une seconde, dans la coursive, pour écouter. Elle pense à une jeune fille qui coud près d'une fenêtre à géraniums, à Morlenc, et qui tousse en riant.",
        "Dans trois jours, la terre.",
      ],
      choices: [{ label: "Trois jours", to: "C3c_fin", big: true }] },
  },
  extras: {},
};
