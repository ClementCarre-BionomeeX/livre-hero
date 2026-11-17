// L'Île Folle-Aiguille · side story « Le chirurgien des deux humeurs », the longer roads. In Morlenc, before deciding,
// the doctor may ask about him: the director of the Hôtel-Dieu, who tells of a child lost under the lancet
// (vauclair:enfant_su); the landlady of the rue des Cordiers and the room with two beds, and the will that leaves
// everything to « M. Gris » (vauclair:testament); the children of the impasse he treats for nothing in daylight
// (vauclair:impasse). At sea, the weaning is played night by night (the song, the reading, the father, the wall), and
// what the doctor gives each night is counted (XJ_n_*): enough of it, and the fifth night needs no luck.
var TENU = [{ has: "xj:chanson" }, { has: "xj:lecture" }, { has: "xj:pere" }, { has: "xj:mur" }, { has: "vauclair:testament" }, { has: "vauclair:impasse" }];
module.exports = {
  passages: {
    // ---------------------------------------------------------------- Morlenc: asking about him
    XJ_enquete: { act: "II", title: "Le jeune chirurgien", place: "quai_hollandes", hub: true, noLead: true, backName: "le quai", ambiance: "ville",
      text: [
        { first: true, text: "Victorine lui dit de revenir dans deux jours. Il s'incline, sans poser de question, comme s'il avait l'habitude qu'on prenne des renseignements sur lui, et qu'il trouvait cela sage." },
        { first: true, text: "Deux jours, c'est peu. Morlenc est une ville où l'on sait tout de tout le monde, à condition de demander aux bonnes personnes, et de payer le café." },
        { again: true, text: "Morlenc, la pluie, et un jeune homme pâle dont il faut savoir quelque chose avant de l'emmener au bout du monde." },
      ],
      choices: [
        { label: "Aller trouver le directeur de l'Hôtel-Dieu", to: "XJ_e_directeur", hide: { seen: "XJ_e_directeur" } },
        { label: "Chercher son logement, et sa logeuse", to: "XJ_e_logeuse", hide: { seen: "XJ_e_logeuse" } },
        { label: "Descendre dans l'impasse dont parlent les mendiants", to: "XJ_e_impasse", hide: { seen: "XJ_e_impasse" } },
        { label: "Recevoir le notaire qui l'attend au Cormoran devant un chocolat froid", to: "TP_notaire", hide: { seen: "TP_notaire" } },
        { label: "Suivre l'étudiant qui vient chercher une médecin pour un certificat de décès", to: "TV_mansarde", hide: { seen: "TV_mansarde" } },
        { label: "Le suivre, le soir venu", to: "XJ_nuit", big: true },
        { label: "L'engager", fx: { recrue: "vauclair", flag: "vauclair:engage", regard: { vauclair: "redevable" } }, to: "XJ_engage", if: { count: [{ seen: "XJ_e_directeur" }, { seen: "XJ_e_logeuse" }, { seen: "XJ_e_impasse" }], min: 1 }, why: "Elle ne sait encore rien de plus qu'hier." },
        { label: "Lui faire dire que la place est prise", refuse: true, to: "XJ_refuse", if: { count: [{ seen: "XJ_e_directeur" }, { seen: "XJ_e_logeuse" }, { seen: "XJ_e_impasse" }], min: 1 }, why: "Elle ne sait encore rien de plus qu'hier." },
      ] },
    XJ_e_directeur: { act: "II", title: "Le directeur", place: "haute_ville", ambiance: "ville",
      text: [
        "Le docteur Anselme Maupertuis, directeur de l'Hôtel-Dieu, reçoit Victorine entre deux portes, dans un cabinet où l'on a mis plus de livres que d'air, et il ne la fait pas asseoir. Il ne fait pas asseoir les femmes qui exercent sans diplôme. Il a lu le sien, de diplôme, dans un journal : elle a eu son heure de gloire, l'an dernier, dans une affaire de perruque.",
        "Puis elle prononce le nom de Vauclair, et il s'assied, lui.",
        "« Le meilleur élève que j'aie eu, dit-il. Le meilleur que j'aurai. Des mains… vous avez vu ses mains. Il recousait une artère comme on brode un mouchoir. » Il se tait. « La troisième année, un enfant est mort sous sa lancette. Un garçon de six ans, une hernie, une opération simple, qu'il avait faite vingt fois. Il avait passé la nuit dehors. Il sentait l'alcool, et une autre chose, plus sucrée. Il a pleuré sur le corps. Il a pleuré toute la journée. Le lendemain, il était au travail, frais, poli, et il ne s'en souvenait plus. »",
        "Il regarde Victorine par-dessus ses lunettes.",
        "« Je ne dis pas qu'il mentait, Madame. Je dis qu'il ne s'en souvenait plus. J'ai trente ans de métier. Je n'ai jamais vu ça. Je l'ai fait démissionner, pour son bien, et pour celui des enfants. Si vous l'emmenez, emmenez-le loin. Et ne le laissez jamais opérer le matin. »",
      ],
      choices: [{ label: "Le remercier", fx: { flag: "vauclair:enfant_su" }, back: "XJ_enquete" }] },
    XJ_e_logeuse: { act: "II", title: "Rue des Cordiers", place: "basse_fosse", ambiance: "ville",
      text: [
        "Il loge rue des Cordiers, au troisième, chez une veuve Le Moal, qui tient au rez-de-chaussée une boutique de mercerie et à l'étage une réputation. Une pièce d'argent l'attendrit. Deux la font monter l'escalier, avec son trousseau.",
        "« Un garçon si propre, dit-elle en ouvrant. Si poli. Il paie d'avance. Il rentre tard, mais il rentre en silence. Sauf les soirs où il rentre en chantant. Ces soirs-là, ce n'est pas tout à fait le même. »",
        "La chambre est étrange. Il y a deux lits. L'un, sous la fenêtre, est fait au carré, les draps tirés, l'oreiller gonflé, une Bible sur la table de chevet. L'autre, dans le coin sombre, est un grabat défait, sur lequel traînent un gilet de satin criard, une canne à pommeau d'étain, des cartes à jouer, une bouteille vide. Entre les deux, une table, avec un alambic de verre, des cornues, et des fioles brunes alignées comme des soldats.",
        "« Il dit que c'est pour un ami, chuchote la veuve. Un ami qui vient parfois. Je ne l'ai jamais vu entrer. »",
        "Sur la table, sous une fiole, une feuille pliée, cachetée, avec une suscription d'une belle écriture : « Mes dernières volontés. »",
      ],
      choices: [
        { label: "Rompre le cachet", fx: { flag: "vauclair:testament" }, to: "XJ_e_testament" },
        { label: "Remettre la feuille sous la fiole, et redescendre", back: "XJ_enquete" },
      ] },
    XJ_e_testament: { act: "II", title: "Les dernières volontés", place: "basse_fosse", ambiance: "ville",
      text: [
        "Victorine rompt le cachet, ce qu'elle n'a jamais fait de sa vie, et qu'elle ne regrettera pas.",
        "« Je soussigné Émeric Vauclair, docteur en médecine, sain de corps et d'esprit en ce jour, lègue la totalité de mes biens, meubles, livres, instruments et deniers, à M. Gris, mon ami, qui saura les employer. En cas de disparition de ma personne, je prie qu'on ne cherche pas à savoir comment. M. Gris, le cas échéant, disposera de mon nom. »",
        "La date est d'il y a six mois. La signature est celle de Vauclair, appliquée, ronde, une signature d'élève. Mais en dessous, d'une autre encre, d'une autre main, penchée à l'envers, presque illisible, quelqu'un a ajouté : « Accepté. »",
        "La veuve Le Moal, qui lit par-dessus l'épaule de Victorine, se signe deux fois.",
      ],
      choices: [{ label: "Recacheter comme on peut, et redescendre", back: "XJ_enquete" }] },
    XJ_e_impasse: { act: "II", title: "L'impasse", place: "basse_fosse", ambiance: "ville",
      text: [
        "L'impasse du Puits-Salé est un boyau entre deux murs aveugles, au fond de la Basse-Fosse, où l'on vit à quinze par pièce. Le jour, les enfants y jouent dans l'égout. Victorine y descend à midi, sa trousse à la main, et on la prend tout de suite pour ce qu'elle est : une qui soigne.",
        "« Comme le monsieur doux, dit une petite fille en lui prenant la trousse des mains. Le jeudi, il vient. Il soigne les yeux qui collent, les croûtes, les dents. Il donne du sucre. Il ne prend pas d'argent. »",
        "Une femme, à une fenêtre, appelle l'enfant, très sèchement. Puis, à Victorine, plus bas : « Le jeudi, il vient le jour. Le samedi, il vient la nuit. C'est le même, et ce n'est pas le même. Le samedi, on ferme les volets, et on met les petits sous le lit. Il n'a jamais touché un enfant. Mais on les met quand même. » Elle hésite. « Le jeudi, les petits l'aiment. Il leur a appris à compter. On ne sait pas quoi faire, nous. »",
        "La petite fille, en bas, compte les instruments de la trousse à voix haute, sans se tromper, jusqu'à dix-sept.",
      ],
      choices: [{ label: "Lui laisser un morceau de sucre, et remonter", fx: { flag: "vauclair:impasse" }, back: "XJ_enquete" }] },

    // ---------------------------------------------------------------- at sea: the five nights
    XJ_n2: { act: "III", title: "La deuxième nuit", place: "cormorane", ambiance: "nuit",
      text: [
        "La deuxième nuit, il hurle.",
        "Ce n'est pas un cri de douleur. C'est un cri de bête qu'on a enfermée, régulier, inlassable, toutes les dix respirations, qui traverse les cloisons, monte par les écoutilles, et réveille le navire d'un bout à l'autre. Les matelots de quart se signent. Gobert vient frapper à la porte barrée pour demander si l'on égorge un cochon, et s'il en aura.",
        "Dans le hamac, Gris hurle, et entre deux hurlements, il rit, et regarde Victorine pour voir l'effet.",
      ],
      choices: [
        { label: "Chanter, plus fort que lui", fx: { flag: "xj:chanson" }, to: "XJ_n2_chant" },
        { label: "Lui lire à voix haute un traité de médecine", fx: { flag: "xj:lecture" }, to: "XJ_n2_lecture" },
        { label: "Le laisser hurler", to: "XJ_n3" },
      ] },
    XJ_n2_chant: { act: "III", title: "La chanson", place: "cormorane", ambiance: "nuit",
      text: [
        "Victorine chante. Elle chante mal, d'une voix de gorge, fausse, une chanson de lavandières de Varnèse qu'elle tient de sa mère, avec dix-neuf couplets, tous sur le même air, qui racontent une noce, un cocu, un curé, un âne, et un cocu de plus.",
        "Gris s'arrête de hurler, d'abord, d'étonnement. Puis il hurle par-dessus. Elle chante plus fort. Il hurle plus fort. Au douzième couplet, il rit, malgré lui, au moment de l'âne, d'un rire qui n'est plus tout à fait le sien. Au quinzième, il se tait.",
        "Au dix-huitième, une voix, dans le hamac, très faible, très douce, chante le refrain avec elle, en se trompant de mots.",
        "Le matin, l'équipage de quart, qui a tout entendu, fredonne la chanson des lavandières en lavant le pont. Personne ne sait pourquoi. Tout le monde la sait.",
      ],
      choices: [{ label: "Attendre la troisième nuit", to: "XJ_n3" }] },
    XJ_n2_lecture: { act: "III", title: "La lecture", place: "cormorane", ambiance: "nuit",
      text: [
        "Victorine prend sur l'étagère le livre le plus ennuyeux de la pharmacie : un traité des humeurs en deux volumes, par un professeur de Montrouge mort depuis cinquante ans, qui consacre trois chapitres à la bile noire. Elle l'ouvre, et elle lit, d'une voix égale, sans s'arrêter, ni pour respirer ni pour les hurlements.",
        "Gris hurle. Elle lit. Il l'insulte. Elle lit. Il imite sa voix, la contrefait, ridiculise le professeur de Montrouge. Elle lit. Vers deux heures, il commence à corriger le texte.",
        "« C'est faux, dit-il, d'une voix plus calme. La bile noire n'existe pas. Ce vieux fou n'a jamais disséqué un foie de sa vie. »",
        "C'est la voix de Vauclair. Elle lit encore. Il corrige encore. Au matin, ils sont tous les deux d'accord pour dire que le professeur de Montrouge était un âne, et Vauclair dort.",
      ],
      choices: [{ label: "Attendre la troisième nuit", to: "XJ_n3" }] },
    XJ_n3: { act: "III", title: "La troisième nuit", place: "cormorane", ambiance: "nuit",
      text: [
        "La troisième nuit, il pleure.",
        "Il pleure doucement, sans bruit, comme un enfant qui ne veut pas réveiller ses parents. Il a froid. Il claque des dents. Victorine lui met sa propre couverture sur la sienne. Il ne la remercie pas. Il parle tout seul, à voix basse, des phrases sans suite, où revient un mot, un seul, qu'il dit comme on dit le nom d'une ville où l'on ne retournera pas : « Papa. »",
      ],
      choices: [
        { label: "Lui demander de parler de son père", fx: { flag: "xj:pere" }, to: "XJ_n3_pere" },
        { label: "Lui tenir la main, sans rien demander", to: "XJ_n4" },
      ] },
    XJ_n3_pere: { act: "III", title: "Le père", place: "cormorane", ambiance: "nuit",
      text: [
        "Il en parle. Il en parle pour la première fois de sa vie, il le dit lui-même, en s'étonnant, comme on s'étonne d'entendre sa voix dans une pièce vide.",
        "Le père était huissier, à Quimperlé. Un homme exact, propre, pieux, qui battait son fils le samedi soir, régulièrement, à la ceinture, pour les fautes de la semaine, qu'il notait le reste du temps dans un carnet. Le fils, à quinze ans, a volé le carnet et l'a brûlé. Le père a continué le samedi soir, de mémoire. Puis le père est tombé malade, et c'est le fils, devenu médecin, qui l'a soigné, trois ans, jusqu'à la fin, avec une douceur parfaite, et sans jamais un mot.",
        "« Je ne l'ai jamais frappé, dit Vauclair. Pas une fois. J'aurais pu. Il était si faible, à la fin. Je lui faisais sa toilette. J'avais envie. » Il se tait. « C'est ce soir-là que Gris est venu, pour la première fois. Le soir où j'avais envie, et où je ne l'ai pas fait. Il est venu le faire à ma place, ailleurs, sur d'autres. »",
        "Victorine ne dit rien. Elle connaît des choses semblables. Elle sait qu'il n'y a rien à dire. Elle reste.",
      ],
      choices: [{ label: "Attendre la quatrième nuit", to: "XJ_n4" }] },
    XJ_n4: { act: "III", title: "La quatrième nuit", place: "cormorane", ambiance: "nuit",
      text: [
        "La quatrième nuit, il se tait. Il reste couché dans le hamac, les yeux ouverts, à regarder Victorine sans ciller, avec un sourire qui n'appartient à personne. Il ne dort pas. Elle non plus. Le navire craque. La chandelle baisse.",
        "Vers minuit, il se lève, sans un mot, et va au mur de l'infirmerie, contre la cloison peinte en blanc, et il commence à y écrire avec le bout d'un tison froid, très vite, des colonnes de chiffres, de lettres, de noms.",
      ],
      choices: [
        { label: "Lire ce qu'il écrit", fx: { flag: "xj:mur" }, to: "XJ_n4_mur" },
        { label: "Lui reprendre le tison", hide: { count: TENU, min: 3 }, to: "XJ_nuits" },
        { label: "Lui reprendre le tison", hide: { not: { count: TENU, min: 3 } }, to: "XJ_n5_tenu" },
      ] },
    XJ_n4_mur: { act: "III", title: "Le mur", place: "cormorane", ambiance: "nuit",
      text: [
        "Ce sont des doses. Des dates, et des doses. Vingt gouttes, le 3 mars. Vingt-cinq, le 4. Trente, le 11. Puis des noms de rues de Morlenc, et à côté de chaque rue, un chiffre, qui pourrait être une somme, ou un nombre de coups. Puis, tout en bas, d'une écriture qui se défait :",
        "« Gris : 1. Émeric : 0. »",
        "Il recule, regarde le mur, et éclate de rire. Puis il prend sa manche et efface le chiffre, le zéro, avec soin, et écrit à la place, d'une écriture ronde, d'élève, qui est la sienne :",
        "« Émeric : 1. »",
        "Il se retourne vers Victorine, et la regarde, et il ne sait plus lequel des deux vient d'écrire. Elle non plus. Il retourne se coucher. Le mur reste tel quel jusqu'à la fin du voyage. Personne n'ose le repeindre.",
      ],
      choices: [
        { label: "Attendre la cinquième nuit", hide: { count: TENU, min: 3 }, to: "XJ_nuits" },
        { label: "Attendre la cinquième nuit", hide: { not: { count: TENU, min: 3 } }, to: "XJ_n5_tenu" },
      ] },
    XJ_n5_tenu: { act: "III", title: "La cinquième nuit", place: "cormorane", ambiance: "nuit",
      text: [
        "La cinquième nuit, Victorine ne s'endort pas. Elle a cru qu'elle s'endormirait. Elle a, dans la tête, la chanson des lavandières, le professeur de Montrouge, l'huissier de Quimperlé, le mur, et tout cela la tient éveillée mieux qu'un café.",
        "Vers quatre heures, elle voit Émeric Vauclair se lever, sans bruit, et aller jusqu'au hublot. Il l'ouvre. Il regarde dehors. La mer passe, noire, à six nœuds. Il reste là longtemps, la main sur le cadre.",
        "Puis il referme le hublot, et revient vers elle, et s'assied par terre, à ses pieds, le dos contre sa chaise, comme un chien.",
        "« Il voulait sortir, dit-il. Par là. Je l'ai laissé regarder. Je ne l'ai pas laissé passer. » Il ferme les yeux. « Il est encore là. Je l'entends. Mais il a regardé la mer, et il a eu peur. C'est la première fois que je l'entends avoir peur. »",
        "Il s'endort, là, par terre, contre ses jambes. Elle ne bouge pas jusqu'au jour.",
      ],
      choices: [{ label: "Le laisser dormir", to: "XJ_sauve" }] },
  },
  extras: {},
};
