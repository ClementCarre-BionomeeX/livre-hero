// What only the second reading opens, beyond the quatrains: the fifth quatrain written in invisible ink, the sundial's
// hiding place, a frank talk with Hector, the letter of the rosewood box given to the one it was meant for, Fine's
// memory of the spring of the baby, and the notary awake at three in the morning.
module.exports = {
  S_flamme: { act: "I", title: "La note de fond", place: "salon", second: true,
    text: [
      "*Lisez la note de fond.* Tu approches la dernière page du testament de la flamme d'une bougie, comme on fait à l'étude avec les lettres des amants et des conspirateurs, à une distance d'un doigt, sans la brûler.",
      "Rien d'abord. Le papier tiédit. Puis, dans le blanc sous la signature, des lettres montent lentement, brunes, pâles, comme une écriture qui remonterait du fond d'une eau : quatre vers, d'une encre invisible qui sent, sous la chaleur, le citron et la fleur d'oranger.",
      "Un cinquième quatrain. Personne ne l'a lu hier. Personne ne l'a cherché.",
    ],
    choices: [
      { label: "Lire le cinquième quatrain", hide: { has: "enigme:q5" }, to: "S_q5" },
      { back: "A_salon" },
    ] },

  S_q5: { act: "I", title: "Le cinquième quatrain", place: "salon", second: true, puzzle: "q5",
    text: [
      "Tu lis à mi-voix, penché{e} sur la bougie, pendant que les autres regardent ailleurs.",
    ],
    choices: [
      { back: "S_flamme" },
    ] },

  S_cadran_cache: { act: "I", title: "Ce que le cadran a tu", place: "jardin", second: true,
    fx: { item: "acte_reconnaissance", flag: "acte:reconnaissance", ep: ["histoire", 500] },
    text: [
      "Tu descends au cadran solaire dans la nuit, avec une lanterne. *Mon doigt montre ce que j'ai tu.* Le style de bronze, tordu, ne pointe vers aucune heure. Il pointe vers le bas, vers le socle, vers une pierre du muret un peu plus claire que les autres.",
      "La pierre bouge sous ta main. Derrière, dans un creux, une boîte de fer-blanc rouillée, de celles où l'on met les pastilles de menthe. Dedans, plié en huit, un papier timbré, jauni, à l'en-tête de l'étude de Maître Aubanel, notaire à Sauvebonne.",
      "*Par-devant nous, a comparu le sieur Anatole Brissac, clerc, lequel a déclaré reconnaître pour sa fille l'enfant baptisée ce jour sous les prénoms d'Odile Aurore.* Une signature ronde, appliquée, aux *d* en crosses d'évêque. Pas de cachet. Pas d'enregistrement. Un acte écrit, signé, et jamais déposé.",
      "En travers, au crayon, de la grande écriture nette : *Pas encore. — A.* Et dessous, d'une écriture plus tremblée, plus récente : *Maintenant, si tu veux.*",
    ],
    choices: [
      { back: "A_jardin" },
    ] },

  S_hector_r2: { act: "II", title: "Hector, franchement", place: "salon", second: true,
    text: [
      "Tu t'assois en face d'Hector, au guéridon, au milieu de sa réussite. Il te regarde par-dessus ses cartes, sans sourire.",
      "Tu lui dis les trois mille livres du Cercle, la fin du mois, la prison ou la province. Tu lui dis que tu sais ce qu'il y a sous la plaque de la chapelle, et qui l'y a mis.",
      "Il pose ses cartes, une à une, à l'envers. « Vous ne savez rien, dit-il. Vous supposez. C'est très différent, un juge vous le dira. » Il ramasse sa pièce d'argent, la fait courir sur ses phalanges. « Et quand bien même. Qu'est-ce que vous m'offrez ? La vérité ? Je l'ai déjà. Elle ne paie pas mes dettes. »",
    ],
    choices: [
      { label: "Lui proposer qu'Odile paie ses dettes, s'il retire son codicille", if: { has: "odile:sait" }, to: "S_hector_marche" },
      { back: "B_nuit" },
    ] },

  S_hector_marche: { act: "II", title: "Le marché", place: "salon", second: true,
    fx: { flag: "hector:aveu" },
    text: [
      "Tu lui dis qu'Odile sait. Tu lui dis qu'elle a parlé de lui, au premier, à sa fenêtre, d'une voix calme : *Il a trois mille livres de dettes, et il est le seul de la famille qui l'ait fait rire.*",
      "Hector reste un long moment sans rien dire. La pièce s'est arrêtée sur ses phalanges.",
      "« Elle a dit ça ? » Il a un rire bref, étranglé. « Je lui ai appris le tour de la pièce, à la petite, quand elle avait sept ans. Ma tante me l'avait appris. Je ne savais pas que je transmettais un héritage. » Il se lève, va à la fenêtre, regarde les iris dans le noir. « À l'aube, je parlerai. Je ne dirai pas que j'ai honte, parce que ce serait faux, et que je mens déjà assez. Je dirai ce que j'ai fait. »",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  S_odile_lettre: { act: "II", title: "Pour Odile. Après.", place: "salon", second: true,
    fx: { flag: "odile:lettre", drop: "lettre_odile" },
    text: [
      "Tu tends à Odile l'enveloppe cachetée de cire lilas. *Pour Odile. Après.* Elle reconnaît l'écriture avant de lire les mots.",
      "Elle la décachette avec l'ongle, lentement, sans déchirer. Elle lit. Elle ne pleure pas. Elle lit jusqu'au bout, puis elle replie la lettre, et elle te la tend, pour que tu la lises aussi, parce qu'il faut un témoin et que c'est ton métier.",
      "*Ma fille. Je t'ai regardée trente et un ans sans te le dire, et c'est la seule chose de ma vie que j'ai mal faite. Je n'ai pas su être ta mère : j'ai été ta maîtresse, ton professeur, ton nez. J'espère que c'était un peu la même chose. Tu as les yeux de ton père et le caractère du mien, et l'un comme l'autre t'ont manqué par ma faute. Je te laisse la Bastide, si le clerc sait lire. Je te laisse l'Aurore de toute façon : la vraie formule, tu la connais, c'est toi. — Ta mère.*",
      "Odile reprend la lettre et la range contre sa poitrine, sous son col blanc. « Le clerc sait lire », dit-elle.",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  S_fine_r2: { act: "II", title: "Ce que Fine sait", place: "salon", second: true,
    fx: { flag: "fine:temoin" },
    text: [
      "Tu demandes à Fine, à la cuisine, si elle a vu la Rose du Jaume grosse, ce printemps-là, avant le miracle.",
      "Fine pose sa cuillère. Elle te regarde longtemps, de ses petits yeux noyés dans le rouge de ses joues. « Grosse ? La Rose ? » Elle secoue la tête. « Elle était maigre comme une trique jusqu'à la Saint-Joseph, et à Pâques elle avait une petite au sein. J'ai dit au curé : c'est un miracle qui va vite. Le curé m'a dit de faire la soupe. »",
      "Elle reprend sa cuillère. « Je l'ai faite trente ans, la soupe. Si le juge me demande, à l'aube, je le dirai, que la Rose était maigre. Je suis bavarde, mais je mens pas. »",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  S_brissac_nuit: { act: "II", title: "Le notaire ne dort pas", place: "salon", second: true,
    text: [
      "À trois heures, Maître Brissac ne dort pas. Il est dans son fauteuil du coin, au salon, une seule lampe allumée, la jambe sur le tabouret, et il regarde le portrait. Il ne se retourne pas quand tu entres.",
      "« On a peint ce tableau l'été de ses quarante-trois ans, dit-il. Le peintre l'a rajeunie de vingt ans, parce qu'il était amoureux, ou parce qu'elle l'avait payé, je n'ai jamais su lequel des deux. » Il sourit. « Le bouquet, il l'a copié sur un vrai. On le lui avait offert la veille. Jasmin, iris, rose. Un petit clerc qui ne savait pas compter jusqu'à trois. »",
      "Il se tait. Il ne te regarde toujours pas. « Allez dormir. Vous jugerez mieux. Moi, je n'ai plus de jugement depuis trente et un ans. Seulement de la mémoire. »",
    ],
    choices: [
      { back: "B_nuit" },
    ] },
};
