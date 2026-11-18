// L'Île Folle-Aiguille · side story « Le libéré de Brisegrève » (owes its question to The Prisoner of Chillon: can a man
// come to love his chains?). At Brisegrève, the child finds on the jetty an old man in new clothes, with a bundle: number
// two hundred and eleven, freed this morning after thirty-one years, who stands with his face to the fort and asks, now
// and then, to go back in. The child takes him to eat in the soldiers' village and shows him the sea (zm:repas), finds
// him a place on the fishing boat that leaves for the mainland (zm:barque), or walks him back up to the gate, where the
// sergeant takes him on as lamp-lighter (zm:porte). Wired in A3m_brisegreve.
module.exports = {
  passages: {
    ZM_jetee: { act: "III", title: "Le libéré de Brisegrève", place: "brisegreve", ambiance: "mer",
      fx: { meet: "quere" },
      text: [
        "Il est assis au bout de la jetée, sur une bitte d'amarrage, depuis le matin. Un vieil homme en vêtements neufs, trop neufs, une veste de drap gris et un pantalon de toile qui ont encore les plis du magasin, des souliers ferrés qui lui font mal, puisqu'il les a ôtés et posés à côté de lui, bien alignés, la pointe vers la mer. Sur ses genoux, un baluchon. Il tourne le dos à la mer. Il regarde le fort.",
        "Les gens du bourg passent sans le regarder, comme on passe devant un banc. Une femme de soldat te dit, en tordant son linge : « C'est le deux cent onze. Il est sorti ce matin. Trente et un ans, qu'il a fait. Il y en a un comme ça tous les deux ou trois ans. Ils restent là un jour ou deux. Après, ils s'en vont, ou ils se jettent à l'eau. Celui-là, il a l'air de ne pas savoir lequel. »",
        "Tu t'approches. Il a des yeux très pâles, décolorés, des yeux de cave, qui clignent sans arrêt à la lumière. Sa peau est blanche, d'une blancheur de racine, avec, autour de la cheville droite, un anneau de peau plus pâle encore, lisse, luisant, là où il y a eu du fer pendant trente et un ans.",
        "« Tu es du navire, dit-il, sans te regarder. Il y a des places, dans ton navire ? Des petites. Pas plus grandes que ça. » Il écarte les mains, de la largeur d'un cachot.",
      ],
      choices: [{ label: "T'asseoir à côté de lui", to: "ZM_parle" }] },
    ZM_baluchon: { act: "III", title: "Le libéré de Brisegrève", place: "brisegreve", ambiance: "mer",
      text: [
        "Il le défait sur ses genoux, avec des doigts gourds, comme on ouvre un paquet qu'on n'a pas fait soi-même. Un mouchoir à carreaux noué aux quatre coins. Dedans, une chemise neuve, pliée par une autre main que la sienne. Une bourse de toile, avec les quarante livres. Un papier plié, cacheté, avec un sceau rouge : son congé. Il le tient à l'envers. Il ne sait pas lire.",
        "Et puis ses choses à lui. Une cuiller d'étain, tordue, usée d'un côté jusqu'à la moitié du cuilleron, à force de racler la même gamelle pendant trente et un ans. Il dit qu'on lui a permis de la garder. Il dit que c'est la seule chose du fort qu'on lui ait permis d'emporter, et qu'il ne sait pas manger avec une autre.",
        "Un bâton de bois dur, long comme l'avant-bras, couvert d'entailles serrées, si serrées qu'elles font comme une écorce. Il dit que ce sont les jours. Il dit qu'il a fait une entaille chaque soir, pendant onze ans, puis qu'il a arrêté, parce que le bâton était plein, et qu'il n'a pas osé en demander un autre. Les vingt années suivantes, il ne les a pas comptées. Il dit qu'elles ont passé plus vite.",
        "Il renoue le mouchoir, aux quatre coins, très soigneusement, et il le pose à ses pieds. Il dit que c'est tout. Il dit qu'il pensait avoir plus de choses, après trente et un ans. Il regarde ses mains vides, posées sur ses genoux, avec une sorte d'étonnement, comme si on venait de les lui rendre aussi, et qu'il ne savait pas encore à quoi elles servaient.",
      ],
      choices: [
        { back: "ZM_parle", label: "Rester assis{e} près de lui, sur la jetée" }
      ] },
    ZM_sergent: { act: "III", title: "Le libéré de Brisegrève", place: "brisegreve", ambiance: "mer",
      text: [
        "Le sergent Quillévéré est de garde à la porte basse du fort, assis sur un banc de pierre, à l'ombre, sa pipe aux dents et son mousquet contre le mur. Il voit le petit point gris, au bout de la jetée, aussi bien que toi. Il dit qu'il l'a vu sortir ce matin. Il dit qu'il l'a vu entrer aussi, il y a trente et un ans. Il était tambour, à l'époque. Il avait douze ans.",
        "Il dit que le deux cent onze était le meilleur prisonnier du fort. Le plus tranquille. Celui qui sonnait la cloche de la soupe, depuis vingt ans, parce qu'il sonnait à la seconde, sans jamais se tromper, mieux que l'horloge de la chapelle. Il dit que les recrues apprenaient l'heure en l'écoutant. Il dit qu'on ne sait pas qui la sonnera, maintenant.",
        "Tu lui demandes ce qu'il avait fait. Le sergent fronce les sourcils. Il réfléchit. Il dit qu'il ne s'en souvient plus. Une grange, il croit, ou un moulin. Quelque chose qui a brûlé, dans un village de l'intérieur. Il dit que personne ne s'en souvient plus, au fort, même pas les officiers, même pas le registre, peut-être. Il dit qu'au bout d'un certain temps, un homme n'est plus là pour ce qu'il a fait. Il est là parce qu'il est là.",
        "Puis il tire sur sa pipe, et il dit, sans te regarder, qu'il manque un allumeur de lanternes, sur le rempart, depuis l'automne. Il dit que ce n'est pas un travail pour un soldat. Il dit que c'est un travail pour un homme qui connaît les heures. Il souffle sa fumée vers la jetée, et il ne dit plus rien.",
      ],
      choices: [
        { back: "ZM_parle", label: "Redescendre vers la jetée, où le vieil homme attend" }
      ] },
    ZM_parle: { act: "III", title: "Le libéré de Brisegrève", place: "brisegreve", ambiance: "mer",
      text: [
        { first: true, text: "Il s'appelle Quéré. Il le dit lentement, comme un mot étranger qu'on vient de lui apprendre. Il a été condamné à vingt-deux ans, pour une grange brûlée, dans un pays dont il a oublié le nom du village ; on a ajouté neuf ans pour deux évasions, et il ne se souvient plus pourquoi il s'était évadé, ni de ce qu'il espérait trouver dehors." },
        { first: true, text: "Il te parle du fort. De sa case, au troisième étage de la tour du nord, avec une fenêtre large comme une main, d'où l'on voyait un carré de mer, toujours le même. De l'araignée qu'il avait au plafond, qui est morte la neuvième année, et qu'il n'a jamais remplacée parce qu'il ne voulait pas d'une autre. Du gardien Lhostis, qui lui apportait sa soupe depuis quinze ans et qui lui a serré la main ce matin, à la porte, en pleurant. Il te parle de tout ça comme on parle de sa maison." },
        { first: true, text: "« Dehors, dit-il, il y a trop de choses. Trop de côtés. On ne sait pas où regarder. Là-haut, il y avait le mur, le carré de mer, la soupe, la cloche. On savait. » Il regarde ses souliers neufs. « Ils m'ont donné quarante livres, ces souliers, et une adresse à Morlenc, une œuvre, des dames. Je ne sais pas ce que c'est, une œuvre. Je ne sais pas où c'est, Morlenc. »" },
        { first: true, text: "Il regarde le fort. Une cloche sonne, là-haut, la soupe de midi. Il se lève à moitié, d'instinct, le dos courbé, la jambe droite qui traîne un peu, comme si le fer y était encore. Puis il se rassoit, très lentement, et cache son visage dans ses mains." },
        { again: true, text: "Quéré est assis sur sa bitte d'amarrage, le visage dans les mains, son baluchon à ses pieds, face au fort." }
      ],
      choices: [
        { label: "Lui demander ce qu'il porte dans son baluchon", to: "ZM_baluchon", hide: { seen: "ZM_baluchon" } },
        { label: "Aller demander au sergent de la porte qui était le deux cent onze", to: "ZM_sergent", hide: { seen: "ZM_sergent" } },
        { label: "L'emmener manger à la cantine, et lui montrer la mer, de l'autre côté de l'île", fx: { flag: "zm:repas" }, to: "ZM_repas" },
        { label: "Lui trouver une place sur la barque de pêche qui part ce soir pour la côte", fx: { flag: "zm:barque" }, to: "ZM_barque" },
        { label: "Le raccompagner jusqu'à la porte du fort, puisqu'il le demande", fx: { flag: "zm:porte" }, to: "ZM_porte" },
      ] },
    ZM_repas: { act: "III", title: "Le libéré de Brisegrève", place: "brisegreve", ambiance: "village",
      text: [
        "La cantinière lui sert une soupe, du pain blanc, une tranche de lard, un verre de vin. Il regarde l'assiette longtemps avant de la toucher. Il mange avec la cuillère seulement, très vite, courbé, le bras gauche autour de l'assiette, comme pour la défendre. Il laisse le vin. Il dit qu'il a oublié le goût, et qu'il a peur de ne pas l'aimer.",
        "Après, tu l'emmènes de l'autre côté de l'île, par le sentier des douaniers, en tenant ses souliers à la main, puisqu'il marche mieux pieds nus. Il faut une heure. Il s'arrête souvent, pour reprendre son souffle, pour regarder une herbe, un insecte, une pierre. Arrivé de l'autre côté, sur la falaise, il s'arrête net.",
        "La mer est là, entière, de tous les côtés, jusqu'au bout du ciel. Pas un carré : toute. Il la regarde. Il a les yeux qui coulent, à cause de la lumière ou d'autre chose. Il reste debout au bord de la falaise jusqu'au soir, en silence, à la regarder, comme on regarde quelqu'un qu'on avait cru mort.",
        "Quand tu dois redescendre au navire, il te dit qu'il reste encore un peu. Qu'il redescendra tout seul. Qu'il connaît le chemin, maintenant. Tu ne sais pas, en le quittant, s'il redescendra. Tu crois que oui. Tu le crois parce qu'il a remis ses souliers.",
      ],
      choices: [{ label: "Redescendre à l'anse", fx: { quest: "ZM" }, back: "A3m_brisegreve" }] },
    ZM_barque: { act: "III", title: "Le libéré de Brisegrève", place: "brisegreve", ambiance: "mer",
      text: [
        "Le patron de la barque de pêche est un homme rouge et bavard qui fait le passage deux fois par mois, avec du poisson salé à l'aller et du tabac au retour. Il prend les libérés pour rien ; il dit que ça porte chance, et que de toute façon ils ne mangent pas. Il regarde Quéré, assis sur sa bitte, et dit : « Celui-là, il faudra le porter. »",
        "Il faut le porter, en effet. Il se laisse faire, docile, les yeux sur le fort, pendant que le patron et toi le hissez à bord par les aisselles, avec son baluchon et ses souliers. On l'assied à l'arrière, sur un rouleau de filets. La barque déborde. La voile se gonfle. Le fort recule.",
        "Il ne le quitte pas des yeux. Il tourne la tête, à mesure que la barque vire, pour le garder dans son regard, le cou tordu, comme une plante qui suit la lumière. Quand Brisegrève n'est plus qu'une tache noire sur l'eau, il se met à trembler, de tout le corps, un tremblement de froid, en plein soleil.",
        "Le patron, à la barre, lui jette sa vareuse sur les épaules sans le regarder. « Ça passe, dit-il. Tous, ils font ça. Ça passe à la vue de la côte. » Tu ne sauras jamais s'il a raison. La barque disparaît derrière la pointe. Sur la jetée, à côté de la bitte, quelqu'un a oublié une ficelle, avec un nœud que tu ne connais pas.",
      ],
      choices: [{ label: "Redescendre à l'anse", fx: { quest: "ZM" }, back: "A3m_brisegreve" }] },
    ZM_porte: { act: "III", title: "Le libéré de Brisegrève", place: "brisegreve", ambiance: "chateau",
      text: [
        "Vous montez ensemble l'escalier des forçats, trois cents marches taillées dans le granit, qu'il a montées et descendues, dit-il, à peu près onze mille fois. Il les monte mieux que toi. Il sait où poser le pied. Il compte, à voix basse, et à chaque palier il s'arrête et touche le mur, à un endroit précis, que la main de milliers d'hommes a poli comme du marbre.",
        "À la porte, le sergent de garde le regarde arriver sans surprise. Il soupire. Il dit qu'il ne peut pas le reprendre, qu'il n'est plus inscrit, que le règlement est le règlement. Puis il regarde le vieux, debout devant lui, pieds nus, le baluchon serré contre la poitrine, qui attend avec une patience de trente et un ans. Le sergent se gratte la tête.",
        "« Il manque un allumeur, dit-il enfin. Pour les lanternes des remparts. C'est payé six sous par jour, et on dort dans la loge, à côté de la porte. Dehors. » Il insiste sur le mot. « Pas dedans. Dehors. »",
        "Quéré dit oui. Le soir même, de la Cormorane, tu vois s'allumer, une à une, les lanternes du rempart de Brisegrève, lentement, régulièrement, du nord au sud, comme une main qui compte. La dernière, au sommet de la tour du nord, à côté d'une fenêtre large comme une main, s'allume beaucoup plus tard que les autres. Il a dû s'arrêter là un moment.",
      ],
      choices: [{ label: "Redescendre à l'anse", fx: { quest: "ZM" }, back: "A3m_brisegreve" }] },
  },
  extras: {
    people: {
      quere: { name: "Quéré", aka: ["le deux cent onze", "le libéré"], qui: "Un forçat de Brisegrève, libéré après trente et un ans." },
    },
    quests: [
      { id: "ZM", act: "III", kind: "annexe", title: "Le libéré de Brisegrève", start: "ZM_jetee", doit: "chillon", echo: ["zm:repas", "zm:barque", "zm:porte"] },
    ],
  },
};
