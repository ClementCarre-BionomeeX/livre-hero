// L'Île Folle-Aiguille · side story « La femme en blanc » (owes its question to Wilkie Collins's The Woman in White:
// what does a doctor owe a woman whom everyone calls mad because she knows something?). Act II, Victorine at Morlenc:
// at night, by the wall of the cemetery, a young woman all in white catches her arm. She has escaped from a private
// asylum on the hill, where, she says, a baron had her shut up because she knows a secret about him. Two keepers with
// lanterns come down the road. Victorine hides her in her room (sb:cache), hands her back to the keepers (sb:rend), or
// takes her the next morning to the asylum, to examine her there as a doctor (sb:examine). Wired in A2v_jours.
module.exports = {
  passages: {
    SB_mur: { act: "II", title: "La femme en blanc", place: "haute_ville", ambiance: "nuit",
      fx: { meet: "arzel" },
      text: [
        "Victorine rentre tard de l'hospice de la Marine, par la route qui longe le mur du cimetière des Hollandes. Il est onze heures. La lune est haute, et le mur est blanc sous la lune, et les ifs dépassent du mur comme des plumes noires sur un chapeau de deuil.",
        "Une main se pose sur son bras. Une main froide, légère, qui serre fort.",
        "Elle se retourne. Il y a, contre le mur, une jeune femme tout en blanc. Robe blanche, châle blanc, bonnet blanc, des pieds nus et blancs de poussière. Un visage mince, d'une pâleur de porcelaine, avec de grands yeux clairs, trop grands, trop fixes, qui regardent Victorine comme on regarde une porte qui pourrait s'ouvrir.",
        "« Pardon, dit la jeune femme, d'une voix très douce, très rapide. Est-ce bien la route de Morlenc ? Je ne connais plus les routes. Est-ce que vous connaissez le baron de Kerdaniel ? Ne lui dites pas que vous m'avez vue. Je vous en prie. Il ne faut pas qu'il sache. »",
        "Au loin, en haut de la route, du côté de la colline, deux lanternes descendent. On entend des voix d'hommes qui appellent un nom."
      ],
      choices: [
        { label: "Lui demander qui elle est, vite", to: "SB_nom" }
      ] },
    SB_nom: { act: "II", title: "La femme en blanc", place: "haute_ville", ambiance: "nuit",
      text: [
        "Elle s'appelle Blanche Arzel. Elle a vingt-quatre ans. Elle était, il y a six ans, la fille de la lingère du château de Kerdaniel, au fond des terres, et elle jouait avec les enfants du château. Elle a vu une chose. Elle ne dit pas laquelle. Elle dit : un registre, une église, une nuit, une page arrachée. Elle dit qu'elle sait que le baron n'est pas le baron. Puis elle se tait, et regarde derrière elle.",
        "On l'a mise, il y a cinq ans, dans la maison de santé du docteur Trébern, en haut de la colline, une maison pour les gens riches qui ont des parents gênants. On a dit qu'elle était folle. Elle a eu la fièvre cérébrale, c'est vrai, à dix-huit ans. Elle ne s'en souvient pas bien. Depuis, elle porte du blanc. Elle dit que c'est parce qu'on ne peut pas salir le blanc sans que ça se voie, et qu'elle veut qu'on voie, si on la salit.",
        "Elle s'est enfuie ce soir, par la fenêtre de la lingerie, avec une corde de draps. Elle a marché pieds nus. Elle veut aller à Morlenc, chez un notaire, pour dire ce qu'elle sait. Elle a oublié le nom du notaire.",
        "Elle parle avec une précision étrange, et, au milieu, des trous, des absences, des phrases qu'elle ne finit pas, comme une broderie où l'on aurait sauté des points. Victorine ne sait pas si elle a devant elle une folle, une enfant, ou la seule personne lucide de la route.",
        "Les lanternes approchent. Cent pas. On entend : « Mademoiselle Blanche ! Mademoiselle ! Soyez raisonnable ! »"
      ],
      choices: [
        { label: "La prendre par la main et l'emmener à l'auberge, par les ruelles", fx: { flag: "sb:cache" }, to: "SB_cache" },
        { label: "Attendre les lanternes, et la leur rendre", fx: { flag: "sb:rend" }, to: "SB_rend" },
        { label: "Attendre les lanternes, et dire qu'elle l'accompagnera elle-même, demain, là-haut", fx: { flag: "sb:examine" }, to: "SB_gardiens" }
      ] },
    SB_cache: { act: "II", title: "La femme en blanc", place: "quai_hollandes", ambiance: "nuit",
      text: [
        "Elle la prend par la main. Elles descendent en courant par une ruelle de traverse, entre deux murs de jardin, puis par l'escalier des Pêcheurs, jusqu'au quai, jusqu'à l'auberge du Cormoran, où le veilleur de nuit dort sur sa chaise. Victorine monte Blanche dans sa chambre, par l'escalier de service. Elle lui donne de l'eau, du pain, une couverture. Elle lui lave les pieds, qui saignent.",
        "Blanche se laisse faire comme une enfant. Elle s'endort très vite, sur le lit, en serrant la main de Victorine, et elle parle en dormant : un registre, une église, la page, la page.",
        "Victorine veille dans le fauteuil. Elle entend, vers une heure, des pas sur le quai, des lanternes, des voix qui questionnent le veilleur. Le veilleur, réveillé, n'a rien vu. Les pas s'éloignent.",
        "Elle s'endort à son tour, vers trois heures, sans le vouloir."
      ],
      choices: [
        { label: "Se réveiller", to: "SB_matin" }
      ] },
    SB_matin: { act: "II", title: "La femme en blanc", place: "quai_hollandes", ambiance: "ville",
      text: [
        "Au réveil, le lit est vide. La fenêtre est ouverte. Sur l'oreiller, il y a un gant blanc, un seul, en fil, raccommodé au bout de l'index. Rien d'autre. Pas un mot.",
        "Victorine descend. Elle fait le tour du quai, de la Haute-Ville, de la Basse-Fosse. Elle demande. Personne n'a vu de femme en blanc. Elle monte jusqu'à la maison de santé, en haut de la colline, une grande maison grise derrière un mur à tessons. On lui ouvre le portail de mauvaise grâce. Le docteur Trébern, un homme poli, soigné, aux mains douces, lui assure qu'aucune pensionnaire ne s'est échappée cette nuit. Qu'elle a dû rêver. Que la fatigue d'un départ en mer fait voir bien des choses.",
        "Elle redescend. Elle a, dans sa poche, un gant blanc raccommodé au bout de l'index. Elle se demande si Blanche a fui plus loin, vers le notaire dont elle a oublié le nom, ou si quelqu'un est venu la chercher pendant qu'elle dormait, et a laissé le gant pour qu'elle croie à une fuite.",
        "Elle n'en saura rien, avant l'appareillage. Elle garde le gant."
      ],
      choices: [
        { label: "Retourner à ses jours de Morlenc", fx: { quest: "SB" }, back: "A2v_jours" }
      ] },
    SB_rend: { act: "II", title: "La femme en blanc", place: "haute_ville", ambiance: "nuit",
      text: [
        "Elle reste. Elle tient Blanche par le bras, doucement, fermement, comme on tient un malade qui veut se lever trop tôt. Blanche la regarde. Elle comprend. Elle ne se débat pas. Elle dit seulement, très bas : « Vous aussi. »",
        "Les lanternes arrivent. Deux gardiens, des hommes massifs, en blouse grise, polis, essoufflés, avec une couverture. Ils remercient la dame. Ils disent que mademoiselle Blanche est très malade, qu'elle s'imagine des choses, qu'elle a déjà essayé trois fois, qu'elle aurait pu tomber dans le port. Ils lui mettent la couverture sur les épaules. Elle se laisse faire.",
        "Elle se retourne, en remontant la route, entre les deux lanternes, une seule fois. Elle ne dit rien. Elle regarde Victorine avec ses grands yeux clairs, longtemps, comme on regarde un visage pour s'en souvenir. Puis la route tourne.",
        "Le lendemain, un domestique en livrée apporte à l'auberge du Cormoran une lettre pour la médecin. Le docteur Trébern la remercie de son concours, et l'assure de ses sentiments distingués. Le papier est épais, filigrané. En bas, une deuxième signature, d'une écriture large : *Kerdaniel*. Le baron la remercie aussi. Il ne la connaît pas. Il a été prévenu dans la nuit.",
        "Victorine relit la lettre trois fois. Elle se demande pourquoi un baron que personne n'a réveillé remercie, avant le petit déjeuner, une inconnue d'avoir rendu une folle."
      ],
      choices: [
        { label: "Retourner à ses jours de Morlenc", fx: { quest: "SB" }, back: "A2v_jours" }
      ] },
    SB_gardiens: { act: "II", title: "La femme en blanc", place: "haute_ville", ambiance: "nuit",
      text: [
        "Les lanternes arrivent. Victorine se met devant Blanche. Elle dit son nom, son titre, la Faculté de Varnèse. Elle dit qu'elle a examiné la jeune personne, qu'elle la juge épuisée mais calme, et qu'elle l'accompagnera elle-même, demain matin, à la maison de santé, pour la remettre au docteur Trébern en mains propres, et l'examiner devant lui, de médecin à médecin. Ce soir, elle la garde.",
        "Les gardiens se regardent. Ils n'ont pas d'ordre pour ça. Une dame, une médecin, avec un ton pareil. Ils finissent par remonter, en disant qu'ils feront leur rapport.",
        "Blanche dort à l'auberge, dans la chambre de Victorine, sans lâcher sa main."
      ],
      choices: [
        { label: "Monter à la maison de santé, au matin, avec elle", to: "SB_maison" }
      ] },
    SB_jardin: { act: "II", title: "La femme en blanc", place: "haute_ville", ambiance: "ville",
      text: [
        "Le docteur Trébern a l'amabilité de lui faire les honneurs du jardin. Les allées sont ratissées en lignes si droites qu'on dirait que personne n'y marche jamais, et pourtant on y marche sans arrêt : des dames en robe de chambre, à pas lents, deux par deux, chacune flanquée d'une gardienne en tablier gris, font le tour du bassin, puis le refont, puis le refont encore, comme des aiguilles sur un cadran.",
        "Victorine les regarde passer. Une vieille dame lui fait la révérence et lui demande des nouvelles du roi, sans préciser lequel. Une autre, très jeune, tient une poupée de chiffon contre sa poitrine et la berce en chantant faux. Une troisième, une femme de quarante ans, mise avec soin, le regard parfaitement clair, s'arrête devant elle et lui dit, très bas, très vite : « Je suis ici depuis neuf ans. Mon mari s'est remarié l'an dernier. » Puis elle reprend sa marche, au bras de sa gardienne, sans se retourner.",
        "Le docteur Trébern sourit. Il dit que celle-là raconte la même chose à tous les visiteurs. Que c'est précisément son délire. Victorine demande si le mari s'est remarié. Le docteur dit qu'il ne voit pas le rapport.",
        "Au bout du jardin, le mur à tessons de bouteille est plus haut qu'ailleurs, et un rosier blanc y grimpe, très beau, très soigné, qui couvre les tessons d'un manteau de fleurs. Le docteur Trébern dit que c'est lui qui l'a planté. Il dit que les pensionnaires l'aiment beaucoup. Victorine regarde les épines, qui sont longues, et serrées, et qui remplacent les tessons avec avantage."
      ],
      choices: [
        { back: "SB_maison", label: "Retourner au cabinet du docteur" }
      ] },
    SB_chambre: { act: "II", title: "La femme en blanc", place: "haute_ville", ambiance: "ville",
      text: [
        "La chambre de Blanche est au deuxième étage, au bout d'un couloir qui sent l'encaustique et l'éther. Une gardienne ouvre avec une clef qu'elle porte à la ceinture, au milieu d'un trousseau qui sonne comme une cloche de vache. La pièce est propre, blanche, étroite. Un lit de fer. Une chaise. Une table sans tiroir. La fenêtre a des barreaux, peints en blanc pour qu'on les remarque moins, ce qui les fait remarquer davantage.",
        "Sur la table, une pile de mouchoirs brodés, tous les mêmes. Dans un coin de chacun, au point de croix, en fil blanc sur toile blanche, presque invisible : deux lettres entrelacées, et une date. La même date, sur tous. Victorine en prend un, l'approche de la fenêtre. C'est une date d'il y a quatre ans, au printemps.",
        "Blanche, derrière elle, dit doucement que c'est le jour où elle est arrivée. Puis elle se reprend. Elle dit que c'est le jour où son père est mort. Puis elle dit que c'est le même jour, et que personne ne veut le croire, et qu'elle le brode pour ne pas l'oublier, parce qu'ici, on oublie les dates, avec les gouttes qu'on vous donne le soir.",
        "Victorine glisse le mouchoir dans sa manche. La gardienne a vu. Elle ne dit rien. Elle regarde ailleurs, avec une telle application qu'on comprend qu'elle a déjà regardé ailleurs bien des fois, et qu'elle sait très bien ce qu'elle ne voit pas."
      ],
      choices: [
        { back: "SB_maison", label: "Retourner au cabinet du docteur" }
      ] },
    SB_maison: { act: "II", title: "La femme en blanc", place: "haute_ville", ambiance: "ville",
      fx: { meet: "trebern" },
      text: [
        { first: true, text: "La maison de santé est une grande maison grise derrière un mur à tessons de bouteille, avec un jardin bien ratissé où des dames en robe de chambre se promènent lentement, accompagnées de gardiennes. Le docteur Trébern les reçoit dans son cabinet. Un homme de cinquante ans, poli, soigné, aux mains douces, qui sourit beaucoup et n'aime pas qu'on le contredise." },
        { first: true, text: "Il montre le dossier. Admission sur la demande du tuteur, le baron de Kerdaniel, qui paie la pension. Deux certificats de médecins de Morlenc. Fièvre cérébrale, délire de persécution, idée fixe. Il le présente avec la satisfaction d'un notaire qui montre un acte en règle." },
        { first: true, text: "Victorine examine Blanche devant lui. Une heure. Elle l'interroge sur la date, sur les rues de Morlenc, sur le calcul, sur les saisons, sur les Évangiles. Blanche répond. Elle se trompe, quelquefois, sur les dates, sur des choses récentes. Elle se souvient, avec une précision terrible, de tout ce qui s'est passé avant ses dix-huit ans. Elle a l'esprit d'une enfant fatiguée, et une mémoire d'archiviste." },
        { first: true, text: "Victorine se lève. Elle dit au docteur Trébern qu'elle va écrire son avis. Il la regarde en souriant, avec ses mains douces croisées sur le dossier. Il dit qu'il en tiendra compte, naturellement. Qu'il a l'habitude des avis. Que le baron aussi." },
        { again: true, text: "Le docteur Trébern attend, les mains croisées sur le dossier, avec la patience des gens qui ont le temps de leur côté." }
      ],
      choices: [
        { label: "Faire le tour du jardin, où se promènent les pensionnaires", to: "SB_jardin", hide: { seen: "SB_jardin" } },
        { label: "Demander à voir la chambre de Blanche", to: "SB_chambre", hide: { seen: "SB_chambre" } },
        { label: "Écrire son avis, et le porter elle-même chez un notaire de Morlenc", to: "SB_avis" }
      ] },
    SB_avis: { act: "II", title: "La femme en blanc", place: "haute_ville", ambiance: "ville",
      text: [
        "Elle écrit, à la table du cabinet, sous les yeux de Trébern, que la demoiselle Blanche Arzel ne présente aucun danger pour elle-même ni pour autrui, que ses facultés sont diminuées mais non abolies, que son internement ne relève pas de la nécessité médicale, et qu'elle recommande sa mise en liberté sous la surveillance d'une maison charitable. Elle signe. Elle fait une copie.",
        "Elle porte la copie chez maître Brindejonc, le vieux notaire, qui lit, lève les sourcils, et dit qu'avec ça, et un peu de temps, on peut faire une requête au tribunal. Qu'il la fera. Qu'il a toujours trouvé le baron de Kerdaniel un peu trop pressé d'hériter, il y a six ans. Qu'il se souvient d'une histoire de registre de paroisse, à l'époque, qu'on avait étouffée.",
        "Victorine remonte voir Blanche, avant de partir. Elle la trouve dans le jardin, sur un banc, en robe blanche, qui regarde un parterre de pensées. Elle lui dit que le notaire va faire une requête. Que cela prendra du temps. Plus de temps qu'elle n'en a, elle, avant l'appareillage.",
        "Blanche la regarde. Elle sourit, pour la première fois. Elle tire de sa manche un gant blanc, un seul, en fil, raccommodé au bout de l'index, et le lui donne. « Pour que vous vous souveniez de revenir, dit-elle. Je garde l'autre. »"
      ],
      choices: [
        { label: "Retourner à ses jours de Morlenc", fx: { quest: "SB" }, back: "A2v_jours" }
      ] }
  },
  extras: {
    people: {
      arzel: { name: "Blanche Arzel", aka: ["la femme en blanc"], f: true, qui: "Jeune femme de vingt-quatre ans, enfermée depuis cinq ans dans une maison de santé de Morlenc sur la demande du baron de Kerdaniel." },
      trebern: { name: "le docteur Trébern", aka: ["le directeur de la maison de santé"], qui: "Directeur d'une maison de santé privée sur la colline de Morlenc, aux mains douces, qui a l'habitude des avis." }
    },
    quests: [
      { id: "SB", act: "II", kind: "annexe", title: "La femme en blanc", start: "SB_mur", doit: "femmeblanc", echo: ["sb:cache", "sb:rend", "sb:examine"] }
    ]
  }
};
