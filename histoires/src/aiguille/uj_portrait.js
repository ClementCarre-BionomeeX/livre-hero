// L'Île Folle-Aiguille · side story « Le portrait de Lisette » (owes its question to Balzac's The Unknown Masterpiece:
// is a likeness kept unfinished in search of perfection worth more than a likeness given, imperfect, today?). Act II,
// Fargue in Morlenc: before sailing on a voyage he may not come back from, Fargue pays a painter of the Basse-Fosse,
// Évrard Bescond, for a portrait of Lisette. The painter has had her sit for six sessions; the departure is in three
// days; the canvas is a cloud of scraped and repainted colours from which, in a corner, one living eye looks out.
// Bescond swears he is close. Fargue takes the canvas as it is (uj:prend), leaves it to the painter to finish, at the
// risk of never seeing it (uj:laisse), or asks for a quick drawing in charcoal, made in an hour, instead (uj:fusain).
// Wired in XR_jours.
module.exports = {
  passages: {
    UJ_toiles: { act: "II", title: "Le portrait de Lisette", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Pendant que le peintre fouille dans ses pots, Fargue retourne une toile, contre le mur. Puis une autre. Puis toutes. Il y en a une quarantaine, de toutes les tailles, empilées par rangées, couvertes de poussière et de toiles d'araignée, et sur chacune la même chose : un brouillard de couleurs, gratté, repris, épaissi, d'où sort, ici, une main, là, une bouche, là encore, une mèche de cheveux, d'une perfection qui coupe le souffle.",
        "Une main de vieille femme, posée sur un chapelet, si vraie qu'on voit battre le sang sous la peau. Une bouche d'enfant, entrouverte, sur le point de dire quelque chose. Une épaule nue, avec un grain de beauté. Un œil, encore, un œil d'homme, bleu, triste, dans un coin. Le reste, chaque fois, est perdu sous la brume.",
        "Au dos de chaque toile, le peintre a écrit, au crayon, un nom et une date. Les plus anciennes ont trente ans. Fargue lit les noms. Des commandes. Une veuve, un armateur, une petite fille, un capitaine. Des gens qui ont payé, qui sont venus chercher leur portrait, qui sont repartis sans, et qui sont morts, pour la plupart, depuis longtemps, en attendant que maître Bescond trouve le ton juste.",
        "Bescond le surprend. Il ne se fâche pas. Il dit, avec une tendresse effrayante, que ce sont ses enfants. Qu'il les reprendra tous, un jour, quand il aura trouvé. Il dit que la vieille au chapelet, il y est presque, depuis vingt-deux ans. Fargue remet les toiles contre le mur, face cachée, avec précaution, comme on referme des cercueils."
      ],
      choices: [
        { back: "UJ_atelier", label: "Remonter près du chevalet" }
      ] },
    UJ_voilerie: { act: "II", title: "Le portrait de Lisette", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Au rez-de-chaussée, la voilerie est une longue salle claire, où quatre ouvriers cousent à genoux une grand-voile étendue sur le plancher, avec des paumelles de cuir et des aiguilles longues comme des poignards. Le maître voilier, un gros homme à lunettes, propriétaire de la maison, accueille Fargue en voisin, puisqu'il le voit monter l'échelle depuis trois semaines.",
        "Il dit qu'il loue le grenier au peintre depuis trente ans. Qu'il ne paie plus son loyer depuis vingt. Qu'il n'a pas le cœur de le mettre dehors. Il dit que maître Bescond a été, dans sa jeunesse, le meilleur portraitiste de Morlenc, qu'on venait de Varnèse pour poser chez lui, qu'il faisait un portrait en quatre séances, et qu'on se reconnaissait dedans mieux que dans un miroir.",
        "Puis, un jour, il a fait le portrait de sa propre femme, qui était malade. Il n'a pas pu le finir avant qu'elle meure. Il l'a recommencé, après, de mémoire. Il ne l'a jamais fini. Depuis, il ne finit plus rien. Il cherche. Le voilier dit qu'il cherche sa femme dans les visages des autres, et qu'il ne la trouve pas, et qu'il gratte, et qu'il recommence.",
        "Le voilier enfonce son aiguille dans la grand-voile, la tire, serre le point. Il dit qu'il espère que Fargue n'a pas payé d'avance. Puis il voit la figure de Fargue. Il dit qu'il en était sûr. Il dit, en reprenant son aiguille : « Si j'ai un conseil, prenez ce qu'il y a. Avec lui, demain, il y en aura moins. »"
      ],
      choices: [
        { back: "UJ_atelier", label: "Remonter l'échelle de meunier" }
      ] },
    UJ_atelier: { act: "II", title: "Le portrait de Lisette", place: "basse_fosse", ambiance: "ville", second: true,
      fx: { meet: "bescond" },
      text: [
        { first: true, text: "L'atelier de maître Bescond est un grenier au-dessus d'une voilerie, où l'on monte par une échelle de meunier. Il y fait un jour gris et magnifique, qui tombe d'une verrière de toit encrassée de fientes de mouettes. Il y a partout des toiles retournées contre les murs, des pots de colle, des os de seiche pour poncer, et une odeur d'huile de lin à vous faire tourner la tête. Le peintre lui-même est un petit homme d'une soixantaine d'années, au crâne chauve et taché, aux doigts couleur de terre brûlée, qui parle tout seul en regardant ses toiles comme on parle à des malades." },
        { first: true, text: "Fargue l'a payé il y a trois semaines. Vingt livres. Le prix d'un portrait honnête, en buste, sur toile de chanvre. Il voulait avoir Lisette avec lui, là où il va, sous une forme qui ne tousse pas. Le peintre l'a fait poser six fois, chez les Sœurs, à la fenêtre aux géraniums, en s'émerveillant à chaque fois de sa peau, qu'il disait transparente, et de la lumière qui la traversait. Fargue a trouvé ce mot de peintre beaucoup trop exact." },
        { first: true, text: "L'appareillage est dans trois jours. Fargue vient chercher la toile. Bescond la retourne, à contrecœur, sur son chevalet." },
        { again: true, text: "Maître Bescond se tient près de son chevalet, la toile tournée contre lui, et il hésite à la retourner." }
      ],
      choices: [
        { label: "Tourner vers toi, une à une, les toiles appuyées contre les murs", to: "UJ_toiles", hide: { seen: "UJ_toiles" } },
        { label: "Descendre parler au maître voilier du rez-de-chaussée", to: "UJ_voilerie", hide: { seen: "UJ_voilerie" } },
        { label: "Regarder la toile", to: "UJ_toile" }
      ] },
    UJ_toile: { act: "II", title: "Le portrait de Lisette", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Il n'y a pas de portrait. Il y a une tempête de couleurs. Des couches et des couches de peinture, grattées, reprises, grattées encore, empilées si épais que la toile en est bombée. Des roses, des gris, des blancs, des verts d'eau, mêlés, brouillés, comme si l'on avait peint une brume par-dessus un visage, puis un autre visage par-dessus la brume, puis effacé le tout. On devine une fenêtre. Peut-être un géranium. Rien d'autre.",
        "Sauf, dans le coin gauche, presque en bas, à l'endroit où l'on ne regarde pas, un œil. Un seul. L'œil de Lisette, gris, un peu trop brillant, un peu trop grand, avec le cerne bleu dessous et la petite lueur de fièvre qui danse dedans. Il est si vivant que Fargue recule d'un pas. C'est elle. C'est exactement elle. Il ne sait pas comment un homme a pu mettre ça sur une toile avec de l'huile et des poils de martre.",
        "Bescond, à côté de lui, se tord les mains. Il dit qu'il y est presque. Il dit que la peau de cette petite est impossible à peindre, parce qu'elle change, parce qu'elle est faite de lumière autant que de chair, et qu'il faut trouver le ton juste, le seul, et qu'il le cherche, et qu'il l'a presque, là, dans l'œil, et qu'il faut seulement l'étendre au reste. Il lui faut encore un mois. Deux, peut-être. Il dit qu'il n'a jamais été si près d'un chef-d'œuvre. Il le dit avec des larmes dans les yeux.",
        "Fargue regarde l'œil. Il pense que dans deux mois, il sera de l'autre côté du monde, ou au fond de la mer. Il pense que dans deux mois, la peau impossible à peindre aura peut-être encore changé, et pas dans le bon sens. Il pense qu'il est venu chercher sa fille, et qu'on lui offre un œil, et la promesse d'un chef-d'œuvre.",
      ],
      choices: [
        { label: "Emporter la toile telle qu'elle est, avec son œil", fx: { flag: "uj:prend" }, to: "UJ_prend" },
        { label: "Laisser le peintre finir, et partir sans", fx: { flag: "uj:laisse" }, to: "UJ_laisse" },
        { label: "Lui demander un simple fusain, fait en une heure, à la fenêtre des Sœurs", fx: { flag: "uj:fusain" }, to: "UJ_fusain" },
      ] },
    UJ_prend: { act: "II", title: "Le portrait de Lisette", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Il dit qu'il la prend. Bescond pousse un cri, comme si on lui arrachait un enfant. Il supplie. Il dit qu'on ne peut pas emporter une chose pas finie, que c'est une infirmité, que les gens qui la verront croiront que c'est ça, sa peinture, qu'il sera la risée du port. Fargue dit que personne ne la verra. Il dit qu'il a payé pour sa fille, pas pour la gloire de maître Bescond. Il décroche la toile du chevalet, avec une délicatesse de cuisinier qui sort un pâté du four.",
        "Bescond s'effondre sur un tabouret. Il pleure, franchement, la tête dans ses mains couleur de terre. Fargue, sur l'échelle, s'arrête. Il remonte. Il pose sur la table, à côté des os de seiche, dix livres de plus. Il dit que c'est pour l'œil. Que l'œil vaut bien ça. Que le reste, il ne le regardera pas. Bescond relève la tête, stupéfait. Il dit que personne ne lui a jamais payé un œil.",
        "Fargue roule la toile dans un morceau de voile goudronnée et la range dans son coffre de cambuse, au fond, sous ses couteaux. Le soir, à bord, quand tout le monde dort, il la déroule, à la lueur de la lanterne, juste assez pour voir le coin gauche. L'œil le regarde. Gris. Trop brillant. Vivant. Il ne regarde jamais le reste. Il a appris, avec les années, à ne regarder des choses que ce qui est vivant dedans.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "UJ" }, back: "XR_jours" }] },
    UJ_laisse: { act: "II", title: "Le portrait de Lisette", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Il ne dit rien pendant longtemps. Puis il dit au peintre de finir. De prendre le temps qu'il faudra. De trouver le ton juste, le seul. Il dit que Lisette posera encore, si elle peut, et que les Sœurs ouvriront. Il dit que si lui ne revient pas, la toile sera pour Lisette, et que si Lisette, de son côté... Il ne finit pas la phrase. Bescond lui prend la main, la gauche, celle aux trois doigts, et la serre, sans même s'apercevoir qu'il en manque.",
        "Fargue redescend l'échelle. Il se demande pourquoi il a fait ça. Il pense qu'il a toujours aimé les gens qui cherchent une chose impossible avec acharnement, peut-être parce qu'il en est, à sa façon, avec ce qu'il prépare. Il pense aussi qu'il a eu peur d'emporter un œil, un seul, au bout du monde, et de le regarder chaque soir, et de compter ce qui manquait autour.",
        "Le soir, chez les Sœurs, Lisette lui demande s'il a vu le portrait. Il dit oui. Elle demande s'il est beau. Il dit qu'il n'est pas fini, mais qu'il y a un œil qui est le sien, exactement, et qu'il le reconnaîtrait entre mille. Elle rit. Elle dit que maître Bescond est fou, que pendant les séances il pleurait en regardant sa joue, et qu'elle a dû lui prêter son mouchoir. Elle dit qu'elle posera encore, pour qu'il soit content. Elle dit qu'elle aime bien être regardée comme ça, comme si elle était difficile.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "UJ" }, back: "XR_jours" }] },
    UJ_fusain: { act: "II", title: "Le portrait de Lisette", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Il demande un fusain. Un simple dessin, au charbon, sur une feuille de papier, fait en une heure, à la fenêtre aux géraniums. Bescond le regarde comme si on lui demandait de faire un portrait de reine avec un tison. Il dit qu'il ne fait plus de fusains depuis vingt ans. Qu'un fusain, ça ne sert qu'à préparer. Qu'on ne peut pas mettre la lumière dans du charbon. Fargue dit qu'il ne demande pas la lumière. Il demande sa fille, en noir et blanc, pour demain.",
        "Le lendemain, chez les Sœurs, Bescond s'installe à contrecœur, avec un carton et un bâton de fusain. Lisette s'assied à la fenêtre. Fargue se met dans un coin. Le peintre commence en grommelant, il trace un ovale, il efface du pouce, il trace encore. Puis, au bout de dix minutes, il se tait. Il dessine vite. Plus vite. Il ne gratte plus, il ne reprend plus : il n'a pas le temps. Il se bat avec l'heure comme avec un ennemi. Lisette tousse ; il dessine la toux.",
        "Au bout d'une heure, il pose le fusain. Il regarde la feuille. Il a l'air de ne pas la reconnaître. C'est Lisette. Pas tout à fait ressemblante, la bouche un peu de travers, un trait de trop sur la joue. Mais vivante, des cheveux aux mains, entière, avec la fenêtre derrière, et le géranium, et la lumière, oui, la lumière, faite avec le blanc du papier qu'il a laissé vide. Bescond dit, d'une voix bizarre : « Je l'ai. » Il se met à rire. Il dit qu'il cherchait depuis trois semaines, en huile, ce qu'il vient de trouver en une heure, avec du charbon, parce qu'il n'avait pas le temps de le perdre.",
        "Fargue emporte le dessin, roulé dans un tube de fer-blanc. Il laisse à Bescond la toile, et l'œil, pour ce qu'il voudra en faire. Le peintre, en partant, dit qu'il va gratter la toile jusqu'au chanvre, et tout recommencer, en une seule séance, sans jamais revenir. Il dit que la petite lui a appris quelque chose. Il dit qu'il est vieux pour apprendre. Fargue dit que lui aussi.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "UJ" }, back: "XR_jours" }] },
  },
  extras: {
    people: {
      bescond: { name: "Maître Évrard Bescond", aka: ["le peintre de la voilerie"], qui: "Peintre de la Basse-Fosse, qui travaille dans un grenier au-dessus d'une voilerie." },
    },
    quests: [
      { id: "UJ", act: "II", kind: "annexe", title: "Le portrait de Lisette", start: "UJ_atelier", doit: "chefdoeuvre", echo: ["uj:prend", "uj:laisse", "uj:fusain"] },
    ],
  },
};
