// L'Île Folle-Aiguille · side story « Le souper des oranges » (owes its question to Poe's The Masque of the Red Death:
// can a rich man wall his feast off from the sickness at his door, and who should open the door?). Act III, Victorine in
// the calm: on the twelfth day, the baron Clavières gives a supper in the great cabin for the founding day of his house,
// with music, candles and, as the crowning dish, a sorbet of oranges and lemons kept in sand in his private stores,
// while in the forecastle the men's gums bleed. Victorine goes up to him before the supper (or not), then sits at the
// feast, and decides: she eats and keeps silent (uy:assiste), calls on the captain to requisition the fruit
// (uy:capitaine), or brings a scurvy-stricken sailor into the cabin, in the middle of the music (uy:masque).
// Wired in A3w_jours.
module.exports = {
  passages: {
    UY_carton: { act: "III", title: "Le souper des oranges", place: "cormorane", ambiance: "mer",
      text: [
        "Le douzième jour du calme, le valet du baron glisse sous la porte de Victorine un carton gravé, à bord doré, de ceux qu'on imprime à Morlenc pour les mariages. Monsieur le baron Clavières prie Madame Davrigny de lui faire l'honneur d'assister, ce soir, dans la grand-chambre, au souper anniversaire de la fondation de la Compagnie Clavières, cent ans jour pour jour. Tenue de soirée. Musique.",
        "La musique, c'est Jégou, le matelot qui joue du violon, qu'on a lavé, rasé et prêté au baron pour la soirée contre une double ration de tafia. La tenue de soirée, c'est la robe noire de Victorine, la seule, qui sent le camphre. Le souper, on en parle depuis le matin à la cambuse : le baron a fait monter de sa soute personnelle des jambons, des terrines, des confitures, du vin de Morlenc, et une caisse que personne n'a jamais vue ouverte.",
        "Le bosco, qui l'a portée, dit qu'elle est pleine de sable. Et que dans le sable, rangés comme des œufs, il y a des oranges et des citrons. Une centaine. Gardés frais depuis Morlenc, dans le noir, au fond de la soute, pour le dessert du centenaire. Un sorbet, dit le valet, avec la glace qu'on fera en jetant du salpêtre dans un seau d'eau de mer, selon un procédé que le baron a lu dans un livre.",
      ],
      choices: [{ label: "Descendre d'abord à l'avant, voir les bouches", to: "UY_avant" }] },
    UY_avant: { act: "III", title: "Le souper des oranges", place: "cormorane", ambiance: "mer",
      text: [
        "À l'avant, il fait la chaleur d'un four éteint. Elle examine les bouches à la lanterne, comme chaque soir. Les gencives gonflées sont plus nombreuses. Un jeune gabier, Kerneur, dix-neuf ans, a perdu une dent ce matin, en mordant son biscuit, sans douleur, comme une feuille qui tombe. Il la lui montre, dans sa paume, avec un rire gêné. Ses jambes sont couvertes de taches violettes, comme des meurtrissures que personne ne lui aurait faites.",
        { if: { any: [{ has: "pharmacie:citron" }, { has: "citrons:victorine" }, { has: "citrons:mousse" }] }, text: "Ses citrons à elle s'épuisent. Une cuiller par homme et par jour, et le calme qui n'en finit pas : elle a fait le compte, il lui en reste pour neuf jours. Le calme, lui, ne compte pas." },
        { if: { not: { any: [{ has: "pharmacie:citron" }, { has: "citrons:victorine" }, { has: "citrons:mousse" }] } }, text: "Elle n'a rien à leur donner. Les herbes des Sargues, qui ne servent à rien, et les dernières pommes de terre germées. Elle le sait. Ils le savent. Ils lui sourient quand même, avec leurs bouches qui saignent, par politesse." },
        "Elle pense à la caisse de sable. Une centaine de fruits. Un demi-citron par homme et par jour, et Kerneur garde ses dents jusqu'à l'île. Elle pense aussi que les fruits sont au baron, qu'il les a payés, emballés, transportés, et que la loi de la mer ne dit rien des desserts. Elle remonte se changer. Dans le couloir, elle passe devant la porte de la cabine du baron. Elle entend, derrière, le valet qui siffle en lavant des coupes de cristal.",
      ],
      choices: [
        { label: "Frapper à la porte du baron, avant le souper", to: "UY_porte" },
        { label: "Passer sa robe noire, et monter au souper sans rien dire d'abord", to: "UY_fete" },
      ] },
    UY_porte: { act: "III", title: "Le souper des oranges", place: "cormorane", ambiance: "mer",
      text: [
        "Le baron la reçoit en bras de chemise, devant son miroir, en train de nouer sa cravate avec un soin d'artiste. Il est d'excellente humeur. Il lui dit qu'elle est en avance, et qu'il aime les femmes en avance, parce qu'elles sont rares. Elle lui parle de l'avant. Des gencives, des dents, des taches violettes. Elle lui parle de Kerneur. Elle lui demande les fruits.",
        "Le baron l'écoute avec une attention parfaite, sans cesser de nouer sa cravate. Puis il dit qu'il comprend. Il dit qu'il est désolé pour ce garçon. Il dit qu'il a lui-même fait embarquer, à ses frais, deux barils de choucroute pour l'équipage, ce qu'aucun armateur de Morlenc ne fait, et que la choucroute est finie parce que les hommes l'ont mangée trop vite, comme des enfants. Il dit que les oranges sont pour ce soir. Il dit qu'on ne fête pas cent ans tous les jours.",
        "Il dit aussi, en se tournant vers elle, avec un sourire charmant, qu'il donnera après le souper ce qu'il restera dans la caisse. Il dit qu'il n'est pas un monstre. Il dit seulement qu'il est le maître de son dessert. Victorine sait ce qu'il restera dans la caisse après un sorbet pour douze convives qui reprendront deux fois. Elle sort sans répondre. Il lui crie, aimablement, de ne pas oublier ses gants.",
      ],
      choices: [{ label: "Monter au souper", to: "UY_fete" }] },
    UY_fete: { act: "III", title: "Le souper des oranges", place: "cormorane", ambiance: "nuit",
      text: [
        "La grand-chambre est méconnaissable. On a tendu les cloisons de draps blancs, allumé quarante chandelles, mis la nappe de dentelle et l'argenterie aux armes des Clavières. Il fait une chaleur de serre. Jégou joue du violon dans un coin, rasé, la chemise propre, avec une figure d'enterrement. Autour de la table, la capitaine en uniforme, le second, le professeur en habit vert, et deux officiers. On boit à la Compagnie. On boit au baron. On boit au vent, qui ne vient pas.",
        "Le baron porte un toast. Il raconte la Compagnie, cent ans de navires, de comptoirs, de cargaisons, de fortune. Il dit que la fortune, c'est le courage de garder pour demain. Il fait signe au valet. On apporte le sorbet. Il est dans des coupes de cristal, jaune pâle et orange vif, givré, fumant de froid dans la chaleur de la chambre. Une odeur d'orange se répand dans la pièce, si forte, si fraîche, qu'on l'entend presque. Jégou s'arrête de jouer. Personne ne le remarque, sauf Victorine.",
        "Par le panneau de la claire-voie, ouvert pour la chaleur, elle voit des visages. En haut, sur le pont, des hommes de l'avant se sont approchés, sans bruit, et regardent en bas, dans la lumière des quarante chandelles. Ils ne disent rien. Ils sentent l'orange. Elle reconnaît Kerneur, la bouche entrouverte, qui respire l'odeur comme on boit. Le baron lève sa coupe, et ne lève pas les yeux.",
        "On pose une coupe devant Victorine. Le cristal est glacé sous ses doigts. Elle a vingt secondes, peut-être, avant que la glace fonde.",
      ],
      choices: [
        { label: "Manger le sorbet, et garder la question pour plus tard", fx: { flag: "uy:assiste" }, to: "UY_assiste" },
        { label: "Se lever, et demander à la capitaine de faire saisir la caisse", fx: { flag: "uy:capitaine" }, to: "UY_capitaine" },
        { label: "Se lever, aller chercher Kerneur sur le pont, et le faire entrer", fx: { flag: "uy:masque" }, to: "UY_masque" },
      ] },
    UY_assiste: { act: "III", title: "Le souper des oranges", place: "cormorane", ambiance: "nuit",
      text: [
        "Elle mange. Le sorbet est extraordinaire. Il fond sur la langue, acide et sucré, et le froid descend dans la gorge comme une source. C'est la chose la plus délicieuse qu'elle ait mangée depuis Morlenc. Elle a honte. Elle mange tout. Le baron la regarde, satisfait, et lui dit qu'il savait qu'elle était une femme de goût.",
        "Après le souper, quand les convives sont partis, elle reste. Elle demande au baron ce qu'il reste dans la caisse. Il lui fait ouvrir la caisse, avec une générosité de grand seigneur. Il reste dix-sept oranges et neuf citrons. Il les lui donne, tous, avec un geste large. Il dit qu'il tient toujours ses promesses. Victorine les emporte dans son tablier.",
        "Dix-sept oranges et neuf citrons, pour l'avant, ça fait quatre jours. Elle les distribue elle-même, au matin, quartier par quartier. Kerneur mange le sien très lentement, en fermant les yeux. Il garde l'écorce, et la mâche toute la journée. Il ne perd plus de dents, pendant quatre jours. Après, elle n'a plus rien.",
        "Elle se dit qu'elle a eu raison d'attendre : elle a obtenu la caisse sans scandale, avec le sourire du baron. Elle se dit qu'elle a eu tort : elle a mangé, devant des hommes qui regardaient par la claire-voie, une coupe qui aurait gardé une dent à Kerneur trois jours de plus. Elle se dit que les deux sont vrais. Le goût du sorbet lui reste dans la bouche jusqu'au lendemain soir, et elle ne parvient pas à le trouver mauvais, et c'est ça qu'elle ne se pardonne pas.",
      ],
      choices: [{ label: "Redescendre à l'infirmerie", fx: { quest: "UY" }, back: "A3w_jours" }] },
    UY_capitaine: { act: "III", title: "Le souper des oranges", place: "cormorane", ambiance: "nuit",
      text: [
        "Elle se lève. La coupe reste intacte devant elle. Elle dit, à voix haute, dans le silence que fait sa chaise en reculant, qu'il y a à l'avant onze hommes atteints du scorbut, dont un a perdu une dent ce matin, et que la caisse qu'on vient d'ouvrir contient leur guérison. Elle dit qu'elle demande à la capitaine, en tant que médecin du bord, de la faire saisir pour la pharmacie, au nom de la sûreté du navire.",
        "Le silence est total. Le baron pâlit, puis rougit. Il dit, très calme, que ces fruits sont sa propriété privée, payés de ses deniers, et que la capitaine commande le navire, pas les desserts de l'armateur. Il regarde la capitaine Ribaud. Tout le monde regarde la capitaine Ribaud. Elle pose sa cuillère. Elle regarde sa coupe, puis le baron, puis la claire-voie, où les visages des hommes ont disparu d'un coup, comme des poissons quand on frappe l'eau.",
        "La capitaine dit que le règlement de la marine autorise le capitaine à saisir, en mer, toute denrée nécessaire à la survie de l'équipage, contre reçu, au prix de Morlenc. Elle dit qu'elle signera le reçu elle-même. Elle se lève, prend sa coupe de sorbet, et la vide par la fenêtre de poupe, dans la mer. Elle dit qu'elle ne mangera pas ce que ses hommes n'ont pas. Le second l'imite. Puis le professeur, en grommelant. Puis les deux officiers. Le baron reste seul avec sa coupe, et il la mange, lentement, jusqu'au bout, en regardant Victorine.",
        "On distribue les fruits le lendemain. Une centaine, moins douze coupes, ça tient jusqu'à l'île, en comptant serré. Kerneur garde ses dents. Le baron, le lendemain, envoie à Victorine un billet très courtois, où il la félicite de son dévouement, et lui rappelle qu'il est l'armateur de ce navire et qu'il a une mémoire excellente. Elle garde le billet. Elle pense qu'elle s'est fait un ennemi pour un dessert. Elle pense qu'elle recommencerait, et que c'est peut-être ce qu'il a compris en mangeant sa coupe jusqu'au bout.",
      ],
      choices: [{ label: "Redescendre à l'infirmerie", fx: { quest: "UY" }, back: "A3w_jours" }] },
    UY_masque: { act: "III", title: "Le souper des oranges", place: "cormorane", ambiance: "nuit",
      text: [
        "Elle se lève. Elle sort. Le baron lève un sourcil. Elle monte l'échelle, traverse le pont, prend Kerneur par le bras, au bord de la claire-voie, et lui dit de venir. Il a peur. Elle lui dit que c'est un ordre de la médecin. Elle le fait descendre, pieds nus, en chemise sale, la bouche gonflée, les jambes tachées de violet, dans la grand-chambre, au milieu des quarante chandelles et des draps blancs.",
        "La musique s'arrête pour de bon. Kerneur se tient au bout de la table, entre deux chandeliers, et il ne sait pas où mettre ses mains. L'odeur d'orange flotte encore dans l'air chaud. Victorine dit, simplement : « Ouvrez la bouche. » Il l'ouvre. Elle approche une chandelle. Tout le monde voit les gencives noires et boursouflées, le trou de la dent, le sang. Elle lui fait relever sa jambe de pantalon. Tout le monde voit les taches.",
        "Elle dit au baron, sans hausser la voix : « Voici votre invité, monsieur. Il est venu fêter la Compagnie. » Puis elle prend sa propre coupe de sorbet, intacte, et la tend à Kerneur. Le garçon la regarde. Il regarde le baron. Il regarde la capitaine. Personne ne bouge. Alors il prend la coupe, et il mange, avec une cuiller d'argent aux armes des Clavières, debout au bout de la table, en pleurant, parce que le froid fait mal à ses gencives, et parce qu'il a dix-neuf ans.",
        "Le baron se lève. Tout le monde attend un éclat. Il n'y en a pas. Il regarde le gabier manger, longtemps. Puis il dit, d'une voix blanche, au valet : « Portez la caisse à la médecin. » Et il quitte sa propre fête. On ne le voit pas pendant trois jours. Les fruits durent jusqu'à l'île. Le baron ne reparle jamais du centenaire. Mais Victorine s'aperçoit, des semaines plus tard, qu'il ne la regarde plus jamais en face, et qu'il la salue avec une politesse parfaite, comme on salue quelqu'un qui vous a vu nu. Elle se dit qu'elle a fait une chose juste avec une méthode cruelle. Elle se dit que la cruauté était le seul langage que la grand-chambre pouvait entendre ce soir-là, avec ses quarante chandelles.",
      ],
      choices: [{ label: "Redescendre à l'infirmerie", fx: { quest: "UY" }, back: "A3w_jours" }] },
  },
  extras: {
    people: {
      kerneur: { name: "Kerneur", aka: ["le jeune gabier"], qui: "Gabier de dix-neuf ans de la Cormorane, frappé par le scorbut pendant le calme." },
    },
    quests: [
      { id: "UY", act: "III", kind: "annexe", title: "Le souper des oranges", start: "UY_carton", doit: "masquemort", echo: ["uy:assiste", "uy:capitaine", "uy:masque"] },
    ],
  },
};
