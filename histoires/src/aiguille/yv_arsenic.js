// L'Île Folle-Aiguille · side story « La femme du receveur » (owes its question to Madame Bovary: what kills a woman who
// dreamed too much, and who is to blame for it?). At Lannoz, the wife of the receiver of dues, Guillemette Kervella,
// swallowed arsenic for the rats ten hours ago. The husband, a good dull man, understands nothing; under the bed,
// a box of bills from a Morlenc draper and letters from a man who left. Victorine can only ease the end. Then she
// writes the death: an accident (yv:accident, a Christian burial and a lie), the truth (yv:verite, the moor outside
// the wall), or she tells the husband everything and lets him choose (yv:mari). Wired in A3x_lannoz.
module.exports = {
  passages: {
    YV_maison: { act: "III", title: "La femme du receveur", place: "lannoz", ambiance: "nuit",
      text: [
        "La maison du receveur des droits est la seule de Lannoz qui ait un étage, des volets peints et un jardin de curé derrière une grille. On l'aperçoit de la grève, blanche au milieu de la bruyère rousse, comme une dent neuve dans une vieille bouche. Le receveur est venu lui-même chercher Victorine au canot, sans chapeau, en pantoufles, avec la figure d'un homme qui a égaré quelque chose de précieux et ne sait plus dans quelle pièce.",
        "« Ma femme a mangé quelque chose, docteur. Quelque chose de mauvais. Elle vomit depuis ce matin. Le recteur a dit des prières. Ça ne passe pas. » Il s'appelle Kervella. Il a cinquante ans, une figure ronde et rose, des mains propres, une montre en argent qu'il consulte sans arrêt sans regarder l'heure. Il parle de sa femme comme d'une pendule délicate venue de Morlenc, qu'on lui aurait confiée et qu'il n'aurait jamais su remonter.",
        "La chambre est au premier. Tout y vient de Morlenc, et tout y est un peu trop : les rideaux de mousseline, le couvre-pied de satin bleu, une gravure de bal dans un cadre doré, trois romans à couverture jaune sur la table de nuit, un flacon d'eau de senteur vide. Dans le lit, une femme de trente ans, très belle encore, avec de grands yeux noirs cernés de violet et une bouche qui a noirci aux commissures. Elle a vomi dans une cuvette de faïence à fleurs. Elle sourit à Victorine, d'un sourire de salon.",
        "Victorine n'a pas besoin d'examiner. Elle a senti l'odeur en entrant, cette odeur d'ail qui n'est pas de l'ail. Sur la commode, il y a un bocal bleu, ouvert, marqué *Mort-aux-rats*, d'une écriture d'apothicaire.",
      ],
      choices: [{ label: "S'asseoir au bord du lit", to: "YV_lit" }] },
    YV_lit: { act: "III", title: "La femme du receveur", place: "lannoz", ambiance: "nuit",
      text: [
        "Elle a pris l'arsenic à l'aube. Il est près de minuit. Victorine fait ce que l'on fait, parce qu'on le fait : du lait, du blanc d'œuf, de la magnésie, l'eau chaude pour faire vomir encore. Elle sait, en le faisant, que ça ne servira à rien. L'arsenic est dans le sang depuis des heures, dans le foie, dans les reins. Il ne reste qu'à rendre la fin moins atroce. Elle donne le laudanum, beaucoup.",
        "Guillemette Kervella la regarde faire avec ses grands yeux noirs. Quand son mari descend chercher de l'eau chaude, elle prend le poignet de Victorine, avec une force étonnante. « Vous êtes de Morlenc ? Vous l'avez vue, Morlenc ? Les bals de la Bourse ? Les loges de l'Opéra ? » Elle a un rire qui se casse en hoquet. « Je n'y suis jamais allée. Je devais y aller. Il m'avait promis. »",
        "Elle ne dit pas qui. Elle montre, du menton, le dessous du lit. Victorine se penche. Il y a une boîte à chapeau, et dans la boîte, deux liasses. La première est faite de factures : un drapier de Morlenc, un gantier, une modiste, un marchand de dentelles, sur trois ans, pour une somme qui ferait vivre la maison du receveur pendant dix ans, avec, épinglé dessus, un papier d'huissier daté de la semaine dernière. La seconde est faite de lettres, d'une écriture d'homme, élégante, de moins en moins longues, de plus en plus rares. La dernière tient en quatre lignes. Elle se termine par *adieu*.",
        "« Il ne sait rien, dit Guillemette en regardant la porte. Gilles. Il ne sait rien de rien. Il croit que j'ai mangé un mauvais champignon. » Elle ferme les yeux. « Il est si bon, docteur. Vous n'avez pas idée comme c'est difficile de vivre avec quelqu'un de si bon. »",
      ],
      choices: [{ label: "Rester jusqu'au bout", to: "YV_fin" }] },
    YV_fin: { act: "III", title: "La femme du receveur", place: "lannoz", ambiance: "nuit",
      text: [
        "Elle meurt à quatre heures du matin, après une nuit que Victorine n'oubliera pas, malgré le laudanum. L'arsenic ne laisse pas partir les gens doucement ; il les retient, et les tord, et les fait crier, jusqu'au bout. Kervella tient la main de sa femme du côté gauche du lit, Victorine du côté droit. À un moment, vers trois heures, Guillemette ouvre les yeux, le regarde, et lui dit : « Pardon. » Il lui répond : « De quoi, ma chérie ? » Elle ne répond pas.",
        "À l'aube, le recteur monte. Il est vieux, il sent le miel et la cire de ses ruches, et il a l'air plus fatigué que triste. Il regarde le bocal bleu sur la commode, puis Victorine, longtemps. Il sait. Tout le monde, à Lannoz, sait tout ; il n'y a que le receveur pour ne rien savoir.",
        "« Il faut un certificat, docteur, dit le recteur doucement. Pour le registre, et pour moi. Si c'est un accident, je l'enterre demain, au cimetière, à côté de l'église, avec la messe. Si c'est l'autre chose, le droit de l'Église ne me laisse pas le choix : la lande, de l'autre côté du mur, sans croix et sans cloche. » Il soupire. « Je vous laisse écrire. Je ne lirai que ce que vous aurez écrit. »",
        "Sur la table de nuit, à côté des romans jaunes, il y a une plume, de l'encre et la boîte à chapeau. Kervella, assis sur une chaise, au pied du lit, regarde sa femme morte avec une incompréhension absolue, et remonte sa montre, machinalement, comme s'il fallait qu'au moins quelque chose dans la maison continue de marcher.",
      ],
      choices: [
        { label: "Écrire : accident, mort-aux-rats prise par méprise", fx: { flag: "yv:accident" }, to: "YV_accident" },
        { label: "Écrire ce qui est : empoisonnement volontaire", fx: { flag: "yv:verite" }, to: "YV_verite" },
        { label: "Poser la boîte à chapeau sur les genoux du mari, et le laisser choisir", fx: { flag: "yv:mari" }, to: "YV_mari" },
      ] },
    YV_accident: { act: "III", title: "Le certificat", place: "lannoz", ambiance: "nuit",
      text: [
        "Victorine écrit. *Intoxication arsenicale accidentelle, la défunte ayant pris pour du sucre la mort-aux-rats conservée dans un bocal semblable.* Elle signe. Le recteur lit, hoche la tête, et dit seulement : « Les bocaux se ressemblent tous, c'est vrai. On devrait faire une loi. »",
        "Avant de partir, Victorine prend la boîte à chapeau sous son bras. Sur la grève, en attendant le canot, elle brûle les lettres une par une, sur un feu d'algues sèches. Les factures, elle les garde. L'huissier viendra quand même. Elle les fait porter au recteur, avec un mot : *pour quand il faudra lui expliquer d'où viennent les dettes. Dites-lui que c'était pour lui plaire. Ce sera presque vrai.*",
        "On enterre Guillemette Kervella le lendemain, à côté de l'église, avec la messe et la cloche, sous une croix de granit que le receveur paie trop cher. Il pleure à chaudes larmes. Il dit à tout le monde que sa femme était trop gourmande, et que c'était sa seule faute.",
      ],
      choices: [{ label: "Regagner la Cormorane", fx: { quest: "YV" }, back: "A3x_lannoz" }] },
    YV_verite: { act: "III", title: "Le certificat", place: "lannoz", ambiance: "nuit",
      text: [
        "Victorine écrit ce qui est. *Empoisonnement arsenical volontaire.* Elle signe. Elle a toujours écrit ce qui était ; c'est la seule chose, dans son métier, qu'elle ait jamais pu se permettre sans demander la permission à personne.",
        "Le recteur lit. Il ferme les yeux, une seconde. Puis il plie le papier, et le range dans son bréviaire, sans un mot de reproche. « Vous êtes honnête, docteur, dit-il. C'est rare et c'est cruel. Je l'enterrerai moi-même, de l'autre côté du mur, demain à l'aube, avant que le bourg se réveille. Je dirai les prières quand même. Tout bas. L'Église n'a jamais rien interdit de dire tout bas. »",
        "Le receveur n'a pas compris le mot. Il demande ce que veut dire volontaire. Le recteur le lui explique, en bas, dans la cuisine, pendant une heure. Quand Victorine descend, Kervella est assis devant la table, la boîte à chapeau ouverte devant lui, et il lit les lettres, une par une, très lentement, en remuant les lèvres, avec l'application d'un enfant qui apprend à lire.",
      ],
      choices: [{ label: "Regagner la Cormorane", fx: { quest: "YV" }, back: "A3x_lannoz" }] },
    YV_mari: { act: "III", title: "Le certificat", place: "lannoz", ambiance: "nuit",
      text: [
        "Victorine prend la boîte à chapeau et la pose sur les genoux du receveur. Elle lui dit ce qu'elle contient. Tout, simplement, comme on annonce un diagnostic. Puis elle lui dit ce que le recteur a dit : l'accident et le cimetière, ou la vérité et la lande. « C'est votre femme, monsieur Kervella. C'est à vous de dire ce qu'elle était. »",
        "Il ouvre la boîte. Il lit les factures, sans comprendre les sommes. Il lit les lettres. Il en lit deux, puis il s'arrête, et referme le couvercle, doucement, et pose ses deux mains propres dessus, à plat.",
        "« Elle a pris le bocal pour du sucre, dit-il d'une voix très calme. Elle était gourmande. Je l'ai toujours dit. » Il regarde Victorine, avec ses yeux ronds et roses, et elle voit qu'il sait, maintenant, tout, et qu'il a choisi, en une minute, de ne jamais le savoir. « Écrivez ça, docteur. Elle aimait les belles choses. Le cimetière est plus joli que la lande. »",
        "Victorine écrit. Le soir, quand le canot la ramène à la Cormorane, elle voit, dans le jardin de curé de la maison blanche, un petit feu qui brûle derrière la grille. Le receveur est debout devant, et y jette quelque chose, feuille à feuille, en prenant son temps.",
      ],
      choices: [{ label: "Regagner la Cormorane", fx: { quest: "YV" }, back: "A3x_lannoz" }] },
  },
  extras: {
    quests: [
      { id: "YV", act: "III", kind: "annexe", title: "La femme du receveur", start: "YV_maison", doit: "bovary", echo: ["yv:accident", "yv:verite", "yv:mari"] },
    ],
  },
};
