// L'Île Folle-Aiguille · side story « La grève du quai » (owes its question to Germinal: what is owed to the hands that
// carry, when the money that pays them is short by a sou?). The porters of the Quai des Hollandes stop work: the
// Chamber of the Quay has cut their pay by a sou a sack. The Cormorane's loading stops. The baron has the crew load
// across the porters' line, and hires men of the Basse-Fosse to break the strike at night. The child carries with the
// crew (yr:charge), eats the porters' soup (yr:soupe), or warns them of the night (yr:averti). Wired in A2m_jours.
module.exports = {
  passages: {
    YR_quai: { act: "II", title: "La grève du quai", place: "quai_hollandes", ambiance: "ville",
      fx: { meet: "therese" },
      text: [
        "Un matin, le quai se tait. Tu ne t'en rends pas compte tout de suite ; tu sens seulement, en montant sur le pont, que quelque chose manque, comme on sent qu'une horloge s'est arrêtée dans une maison avant d'avoir compris laquelle. Puis tu comprends. Les chariots ne grincent plus. Les palans ne crient plus. Personne ne chante la chanson des sacs, celle qui donne la cadence, *une à la hanche, deux à l'épaule*, et qu'on entend du matin au soir sur le Quai des Hollandes depuis qu'il existe.",
        "Les portefaix sont là, pourtant. Ils sont deux cents, peut-être, assis sur les bittes d'amarrage, sur les ballots, sur les pavés, les bras croisés, avec leurs crochets de fer pendus à la ceinture. Ils ne font rien. Ils regardent les navires. Les navires attendent, à moitié chargés, la cale ouverte comme une bouche.",
        "Devant eux, debout sur une caisse de morue, une femme parle. Elle a quarante ans, des épaules d'homme, une coiffe de travers, et une voix qui porte jusqu'à l'autre bout du quai sans qu'elle ait l'air de crier. Thérèse Le Corre, porteuse de sel depuis l'âge de douze ans. Tu entends des bouts de ce qu'elle dit. *Un sou par sac. La Chambre du Quai. Un sou, c'est le pain des petits. Ils ont voté ça entre la poire et le fromage.*",
        "Maître Gobert, à côté de toi, crache dans l'eau. « Ils ont raison, dit-il. Et le baron veut partir dans six jours. Ça va mal finir. Ça finit toujours mal, quand les deux ont raison et qu'un seul a l'argent. »",
      ],
      choices: [{ label: "Écouter la suite", to: "YR_baron" }] },
    YR_baron: { act: "II", title: "La grève du quai", place: "quai_hollandes", ambiance: "ville",
      text: [
        "Le baron Clavières arrive à midi, en voiture, avec un monsieur en noir de la Chambre du Quai, gros comme un tonneau de mélasse, qui s'éponge le front et ne descend pas. Le baron, lui, descend. Il traverse le quai entre les portefaix assis, sa canne à la main, avec le sourire aimable d'un homme qui visite les pauvres un jour de fête, et monte à bord sans regarder personne.",
        "Une heure après, Gobert rassemble l'équipage sur le pont. « Ordre du baron, dit-il, d'une voix plate. On charge nous-mêmes. Le biscuit, l'eau, la poudre. Tout. Double paie pour la journée. » Il ne regarde personne. « Et cette nuit, des hommes du baron viendront faire comprendre aux portefaix qu'on a besoin du quai. Ce sont ses mots. Pas les miens. »",
        "Un murmure court dans l'équipage. Marjolaine Cotentin, la gabière, qui a eu un frère pendu à la Croix-des-Marées pour une émeute de grain, dit tout haut ce que plusieurs pensent : « Moi, je ne porte pas un sac au nez de ces gens-là. » Gobert la regarde. « Alors tu ne seras pas payée, Cotentin, et tu le diras à la capitaine. » Elle hausse les épaules. On sait qu'elle le dira.",
        "Les autres descendent l'échelle, vers les ballots, vers la ligne des portefaix assis qui les regardent venir sans bouger. Sur sa caisse de morue, Thérèse Le Corre s'est tue. Elle te regarde. Elle regarde tout le monde, mais tu as l'impression, absurde, qu'elle te regarde toi.",
      ],
      choices: [
        { label: "Descendre charger avec l'équipage, pour la double paie", fx: { flag: "yr:charge", gold: 6 }, to: "YR_charge" },
        { label: "Aller t'asseoir avec les portefaix, à l'heure de la soupe", fx: { flag: "yr:soupe" }, to: "YR_soupe" },
      ] },
    YR_charge: { act: "II", title: "La grève du quai", place: "quai_hollandes", ambiance: "ville",
      text: [
        "Tu portes. Un sac de biscuit, quarante livres, sur l'épaule, de la pile au pied de l'échelle, de l'échelle à la cale. Puis un autre. Le sac te scie l'épaule au dixième, le dos au vingtième ; au trentième, tu as compris pourquoi les portefaix chantent : la chanson porte la moitié du poids. Vous ne chantez pas. Personne n'ose.",
        "Ils vous regardent passer. Ils ne vous insultent pas. Ce serait plus facile. Un vieux, au bord de la ligne, avec un crochet de fer et des mains comme des racines, te dit seulement, quand tu passes devant lui pour la quarantième fois : « Plie les genoux, petit{e}. Pas le dos. Le dos, c'est pour la vie. » Puis il se tait, et regarde ailleurs, comme s'il avait honte de t'avoir aidé{e}.",
        "Le soir, tu as six livres dans ta poche, la double paie, et des épaules que tu ne sens plus. Tu passes devant la ligne des portefaix. Ils mangent leur soupe, celle qu'on leur porte de la Basse-Fosse, dans des seaux, et ne lèvent pas les yeux.",
      ],
      choices: [{ label: "La nuit tombe", to: "YR_nuit" }] },
    YR_soupe: { act: "II", title: "La soupe", place: "quai_hollandes", ambiance: "ville",
      text: [
        "À l'heure de la soupe, des femmes descendent de la Basse-Fosse avec des seaux fumants, des chaudrons, des paniers de pain. On mange assis par terre, sur le quai, au milieu des ballots qu'on refuse de porter. Tu t'assieds au bord de la ligne. Personne ne te chasse. Un vieux, avec un crochet de fer et des mains comme des racines, te tend sa propre écuelle, et prend la suivante.",
        "C'est une soupe de poisson, claire, avec plus de pain que de poisson, et de l'oseille. Elle est bonne. Thérèse Le Corre vient s'asseoir à côté de toi, son écuelle à la main, et mange en silence. Puis elle dit, la bouche pleine : « Tu es de la Cormorane. Ton bosco t'a dit ce qui arrive, cette nuit ? »",
        "Tu ne réponds pas. Elle hoche la tête, comme si tu avais répondu. « On le sait. Les hommes du baron. Des gars de la Basse-Fosse, à trois livres la nuit, avec des barres de fer. Ils viendront par la rue des Cordiers, ou par les magasins. On ne sait pas lequel. » Elle te regarde. « Toi, tu le sauras peut-être. Tu es à bord. On parle, à bord. »",
        "Sur la Cormorane, à vingt pas, Gobert te regarde par-dessus le bastingage. Il t'a vu{e} t'asseoir. Il se retourne.",
      ],
      choices: [{ label: "La nuit tombe", to: "YR_nuit" }] },
    YR_nuit: { act: "II", title: "La nuit du quai", place: "quai_hollandes", ambiance: "nuit",
      text: [
        "La nuit, les portefaix dorment sur le quai, enroulés dans des sacs vides, autour de trois feux. Tu es de quart au coupe-vent, sur la Cormorane, et tu les vois.",
        "Vers minuit, dans la cabine du baron, au-dessous de toi, une voix d'homme que tu ne connais pas parle bas, et le baron répond. Tu entends un chiffre : trente. Puis un mot : *les magasins*. Puis la porte de la coupée qui s'ouvre, et un homme qui descend à quai, en cape, et qui s'en va vers le fond du port, vers les magasins de la Chambre, sans lanterne.",
        "Les magasins. Ils viendront par les magasins, dans le dos des feux, là où personne ne guette. Il est minuit. Tu as le temps de courir jusqu'au feu de Thérèse Le Corre, et de revenir avant la relève. Si quelqu'un te voit, à bord, tu ne sais pas ce qu'on te fera. Tu sais très bien ce qu'on fera aux portefaix.",
      ],
      choices: [
        { label: "Courir jusqu'au feu de Thérèse", fx: { flag: "yr:averti", penche: { marjolaine: 1 } }, to: "YR_averti" },
        { label: "Rester à ton poste", to: "YR_poste" },
      ] },
    YR_averti: { act: "II", title: "La nuit du quai", place: "quai_hollandes", ambiance: "nuit",
      text: [
        "Tu cours, pieds nus, sur les pavés mouillés. Thérèse Le Corre dort assise contre un ballot, et elle se réveille avant que tu la touches, le crochet de fer déjà dans la main. Tu dis : les magasins, trente. Elle ne te demande pas comment tu le sais.",
        { if: { has: "yr:charge" }, text: "Elle te reconnaît. Tu as porté des sacs devant elle toute la journée. Elle te regarde un instant, avec une expression que tu mettras des années à comprendre, puis elle se lève et réveille le feu voisin d'un coup de sabot." },
        { if: { has: "yr:soupe" }, text: "Elle te serre l'épaule, une fois, d'une main dure comme son crochet, et se lève pour réveiller le feu voisin d'un coup de sabot." },
        "Tu es de retour au coupe-vent avant la relève. Personne ne t'a vu{e}. Sauf, en remontant l'échelle, une silhouette assise sur le gaillard d'avant, une pipe éteinte entre les dents : Marjolaine Cotentin, qui ne dormait pas. Elle te regarde passer. Elle hoche la tête, une fois, très lentement.",
        "Une heure plus tard, quand les hommes du baron arrivent par les magasins, avec leurs barres de fer, ils trouvent les portefaix debout, deux cents, en ligne, avec leurs crochets. Il n'y a pas de bataille. Les hommes du baron sont payés trois livres ; on ne meurt pas pour trois livres. Ils repartent par où ils sont venus. Le lendemain, la Chambre du Quai rend le sou. On charge la Cormorane en chantant.",
      ],
      choices: [{ label: "Remonter à ton poste", fx: { quest: "YR" }, back: "A2m_jours" }] },
    YR_poste: { act: "II", title: "La nuit du quai", place: "quai_hollandes", ambiance: "nuit",
      text: [
        "Tu restes. Tu te dis que ce n'est pas ton affaire, que tu es mousse, que tu as un navire. Tu te le dis plusieurs fois.",
        "Une heure plus tard, ils arrivent par les magasins. Tu entends d'abord les pas, puis un cri, puis un bruit de fer contre de l'os, mat, qu'on ne confond pas avec un autre. Les feux s'éparpillent. Des hommes courent dans tous les sens, des ombres en frappent d'autres. Ça dure moins de temps qu'il n'en faut pour le raconter. Puis il ne reste sur le quai que des sacs vides, des écuelles renversées, des feux piétinés, et trois hommes couchés qu'on relève, et un quatrième qu'on ne relève pas.",
        "Au matin, les portefaix reprennent le travail, à l'ancien tarif moins un sou. On charge la Cormorane en silence. Le vieux aux mains comme des racines n'est plus sur le quai. Tu ne demandes pas où il est. Thérèse Le Corre porte son sel, comme avant, sans chanter. Quand elle passe devant la Cormorane, elle ne regarde pas le navire.",
      ],
      choices: [{ label: "Reprendre le travail", fx: { quest: "YR" }, back: "A2m_jours" }] },
  },
  extras: {
    people: {
      therese: { name: "Thérèse Le Corre", aka: ["la porteuse de sel", "Thérèse"], f: true,
        qui: "Porteuse de sel du Quai des Hollandes, qui parle pour les portefaix." },
    },
    quests: [
      { id: "YR", act: "II", kind: "annexe", title: "La grève du quai", start: "YR_quai", doit: "germinal", echo: ["yr:averti", "yr:charge", "yr:soupe"] },
    ],
  },
};
