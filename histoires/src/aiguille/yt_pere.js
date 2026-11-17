// L'Île Folle-Aiguille · act II followed by the cook (second reading): « Le père Jacquemin » (owes its question to Le
// Père Goriot: what does a father's love buy, once he has given all he had?). In the men's ward of the Sisters of the
// Basse-Fosse, under Lisette's room, an old ropemaker is dying. He sold his ropewalk to dower two daughters, married
// into the Haute-Ville, who no longer come. He asks Fargue to fetch them. Fargue tells him they are coming
// (fargue:jacquemin_mensonge), tells him the truth (fargue:jacquemin_verite), or drags one of them down by the arm
// (fargue:jacquemin_fille). Wired in XR_jours.
module.exports = {
  passages: {
    YT_salle: { act: "II", title: "Le père Jacquemin", place: "basse_fosse", ambiance: "nuit", second: true,
      text: [
        "Sous la chambre de Lisette, au rez-de-chaussée de la maison des Sœurs, il y a la salle des hommes : douze lits de fer sous une voûte basse, une lampe à huile, un crucifix, une odeur de chlore et de bouillon. Fargue la traverse chaque soir pour monter l'escalier. Chaque soir, du lit du fond, une voix l'appelle. « Monsieur ! Vous qui montez. Vous allez en ville ? »",
        "Ce soir, Lisette lui a dit, en le raccompagnant sur le palier : « C'est le père Jacquemin. Il appelle tout le monde. Il demande ses filles. Il les demande depuis trois semaines, papa. Les Sœurs leur ont écrit quatre fois. » Elle a toussé. « Il n'en a plus pour longtemps. Sœur Marthe dit cette semaine. »",
        "Alors, ce soir, Fargue s'arrête au lit du fond. L'homme qui l'occupe est un grand vieillard décharné, aux cheveux blancs en désordre sur l'oreiller, avec des mains énormes, déformées, couvertes de cals, des mains de cordier qui ont tordu le chanvre pendant cinquante ans et qui reposent maintenant sur le drap comme deux outils qu'on a rangés. Il a des yeux d'enfant, bleus, mouillés, et il sourit à Fargue comme on sourit au facteur.",
        "« Vous allez à la Haute-Ville, monsieur ? Vous avez l'air d'un homme qui va partout. » Il agrippe la manche de Fargue. « Mes filles. Clémence et Hortense. Madame Varembert, la femme du banquier, le cadet. Et Madame de Saint-Rémy, rue des Échevins. On ne leur a pas dit. On ne leur a pas bien dit. Si on leur disait bien, elles viendraient. »",
      ],
      choices: [{ label: "S'asseoir sur le bord du lit", to: "YT_corderie" }] },
    YT_corderie: { act: "II", title: "Le père Jacquemin", place: "basse_fosse", ambiance: "nuit", second: true,
      text: [
        "Il raconte. Il raconte comme on vide une poche, tout d'un coup, ce qui vient. La corderie de la porte des Saulniers, quatre cents pieds de long, la plus belle de Morlenc ; les câbles de la marine, les haussières des vaisseaux de la Compagnie ; la femme, morte jeune. Les deux petites, élevées comme des princesses, au couvent des Dames, avec des maîtres de danse et de harpe, parce qu'il voulait qu'elles ne sentent jamais le chanvre.",
        "Puis les mariages. Une dot pour le banquier, une dot pour le comte, et quelles dots. Il a vendu la corderie pour la seconde. Il s'est gardé une rente, qu'il a donnée, morceau par morceau, aux dettes de l'une, aux toilettes de l'autre, aux dettes de jeu de leurs maris. Il a vendu sa montre. Il a vendu ses couverts d'argent. Il a vendu son lit. Il est venu chez les Sœurs quand il n'a plus rien eu à vendre.",
        "« Elles sont si belles, monsieur, dit-il, avec un rire de gorge qui se transforme en quinte. Il faut les voir entrer dans un salon. Les hommes se lèvent. Moi, je les regardais par la fenêtre, depuis la rue. Je ne pouvais pas entrer, vous comprenez. J'ai les mains d'un cordier. Ça les aurait gênées. Ça les gênait déjà, petites. Elles avaient raison. » Il serre la manche de Fargue. « Allez les chercher. Dites-leur que leur père meurt. Juste ça. Elles viendront. »",
        "Fargue regarde les mains énormes sur le drap. Il pense à Lisette, là-haut, qui coud à la fenêtre aux géraniums, avec l'argent qu'il n'a plus. Il pense à ce qu'il est en train de préparer, sur la Cormorane, pour qu'elle ne manque de rien. Il pense que le vieil homme, lui aussi, a tout donné, et qu'on voit ici, sur ce lit de fer, ce que ça achète.",
      ],
      choices: [{ label: "Monter à la Haute-Ville", to: "YT_filles" }] },
    YT_filles: { act: "II", title: "Les filles", place: "haute_ville", ambiance: "ville", second: true,
      text: [
        "L'hôtel Varembert a un suisse en livrée rouge qui regarde le tablier de Fargue et ne le laisse pas entrer. Fargue attend une heure dans la cour, sous la pluie. On finit par lui descendre, par une femme de chambre, une bourse et un billet. Le billet dit : *Pour les soins de mon père. Madame est souffrante et ne peut sortir. Elle prie qu'on ne la dérange plus.* Par la fenêtre éclairée du premier étage, on entend un piano, et des rires.",
        "Rue des Échevins, chez la comtesse de Saint-Rémy, c'est mieux, ou pire : on le fait monter. Hortense de Saint-Rémy est une grande femme blonde, superbe, en robe de bal, qui se fait coiffer devant un miroir et parle à Fargue dans le miroir, sans se retourner.",
        "« Mon père. Oui. » Elle fait un geste à la coiffeuse, qui tire un peu moins fort. « Il y a le bal de la Bourse ce soir, vous comprenez. Le premier de la saison. Mon mari m'attend. Si je n'y vais pas, on dira des choses. » Elle se regarde, tourne un peu la tête, de profil. « J'irai demain. Dites-le-lui. Demain matin, sans faute. Il comprendra. Il a toujours compris. »",
        "Elle a ses yeux à lui, bleus et mouillés. Elle les a ce soir sous un fard léger, qu'elle retouche du bout du doigt. Fargue regarde cette femme qui se coiffe pendant que son père meurt, et il a, pour la première fois depuis longtemps, très envie de faire du mal à quelqu'un.",
      ],
      choices: [
        { label: "Redescendre, et dire au vieux qu'elles arrivent", fx: { flag: "fargue:jacquemin_mensonge" }, to: "YT_mensonge" },
        { label: "Redescendre, et lui dire la vérité", fx: { flag: "fargue:jacquemin_verite" }, to: "YT_verite" },
        { label: "Prendre la comtesse par le bras, et l'emmener comme elle est", fx: { flag: "fargue:jacquemin_fille" }, to: "YT_fille" },
      ] },
    YT_mensonge: { act: "II", title: "Le père Jacquemin", place: "basse_fosse", ambiance: "nuit", second: true,
      text: [
        "« Elles arrivent, dit Fargue en s'asseyant sur le lit. Toutes les deux. Clémence a envoyé ça, pour les Sœurs, en attendant. » Il pose la bourse sur le drap. « Hortense s'habille. Elle voulait être belle pour vous. Elle sera là dans une heure. »",
        "Le vieil homme rit. Il rit et il pleure, avec ses yeux d'enfant, et il serre la bourse dans sa main énorme sans l'ouvrir. « Je vous l'avais dit. Il fallait leur dire bien. Vous avez su leur dire. » Il se tourne vers la porte de la salle, et la regarde, et ne la quitte plus des yeux.",
        "Il la regarde toute la nuit. Fargue reste à côté de lui. Vers quatre heures, la main se desserre sur la bourse. Les yeux sont toujours tournés vers la porte, grands ouverts, avec dedans une attente heureuse que la mort n'a pas eu le temps d'éteindre. Sœur Marthe les lui ferme. « Vous lui avez menti, dit-elle à Fargue, sans reproche. — Oui, ma sœur. — Vous avez bien fait. Dieu fera le compte. Il en a l'habitude. »",
      ],
      choices: [{ label: "Monter embrasser Lisette, qui dort", back: "XR_jours" }] },
    YT_verite: { act: "II", title: "Le père Jacquemin", place: "basse_fosse", ambiance: "nuit", second: true,
      text: [
        "Fargue s'assied sur le lit, pose la bourse sur le drap, et dit tout. Le suisse, la pluie, le piano, le billet. La robe de bal, le miroir, le bal de la Bourse. Demain matin, sans faute. Il le dit sans y mettre de cruauté, et sans rien en ôter.",
        "Le vieil homme écoute. Il ne pleure pas. Il hoche la tête, lentement, à chaque phrase, comme on reconnaît les étapes d'un chemin qu'on a déjà fait. À la fin, il dit seulement : « Le bal de la Bourse. Elle a raison, il ne faut pas le manquer, c'est là qu'on voit tout le monde. » Puis : « Je les ai faites comme ça, monsieur. Je voulais qu'elles ne sentent pas le chanvre. Elles ne le sentent pas. J'ai réussi. »",
        "Il meurt vers quatre heures, les yeux fermés, la tête tournée vers le mur, la bourse de Madame Varembert intacte sur le drap. Avant, il a demandé à Fargue de chanter quelque chose, n'importe quoi, et Fargue lui a chanté, à mi-voix, une chanson de cordiers qu'il ne savait pas qu'il savait, et le vieil homme a battu la mesure sur le drap, avec un doigt, jusqu'au bout.",
      ],
      choices: [{ label: "Monter embrasser Lisette, qui dort", back: "XR_jours" }] },
    YT_fille: { act: "II", title: "La comtesse", place: "basse_fosse", ambiance: "nuit", second: true,
      text: [
        "Il traverse le boudoir en deux pas, prend la comtesse par le bras, au-dessus du coude, là où il tient les gigots, et la lève de son tabouret. La coiffeuse crie. Hortense de Saint-Rémy ne crie pas : elle est trop stupéfaite. Il l'emmène, dans sa robe de bal, à demi coiffée, une épingle de diamant de travers dans les cheveux, par l'escalier de marbre, devant les laquais pétrifiés, et la met dans le premier fiacre de la rue des Échevins.",
        "Elle pleure de rage pendant tout le trajet. Elle le menace de son mari, de la Prévôté, des galères. Fargue regarde par la portière et ne répond rien. À la maison des Sœurs, il la fait descendre, la conduit à travers la salle des hommes, entre les douze lits de fer, dans sa robe de bal qui balaie le carrelage, jusqu'au lit du fond.",
        "Le père Jacquemin ouvre les yeux. Il la voit. Il ne voit pas qu'elle pleure de rage, ni que ses cheveux sont défaits, ni l'homme au tablier derrière elle. Il voit sa fille en robe de bal, au pied de son lit, comme il la voyait par la fenêtre, depuis la rue. Il tend la main. Elle la prend, parce qu'il n'y a rien d'autre à faire, et elle reste, debout, une heure, sans rien dire, avec la main de son père dans la sienne.",
        "Il meurt vers minuit, heureux. Elle repart en fiacre sans regarder Fargue, avant que la main soit froide, pour arriver au bal avant le menuet. On dira qu'elle était pâle, ce soir-là, et très belle. Le lendemain, Fargue reçoit une convocation à la Prévôté pour voies de fait, qu'il jette au feu de la cambuse. La Cormorane part dans sept jours. La Prévôté est lente.",
      ],
      choices: [{ label: "Monter embrasser Lisette, qui dort", back: "XR_jours" }] },
  },
  extras: {
    quests: [
      { id: "YT", act: "II", kind: "annexe", title: "Le père Jacquemin", start: "YT_salle", doit: "goriot", echo: ["fargue:jacquemin_mensonge", "fargue:jacquemin_verite", "fargue:jacquemin_fille"] },
    ],
  },
};
