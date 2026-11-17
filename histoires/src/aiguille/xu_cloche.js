// L'Île Folle-Aiguille · side story « La cloche de la grotte » (owes its question to The Toilers of the Sea: what does a
// man owe the work of his own hands, alone against the sea?). Act IV, the child at the hermit's hut. The bell of the
// Miséricorde was thrown into the sea twenty-one years ago; it lies in a cave of the reef that only uncovers at the
// spring tides. The child works three tides to float it out with barrels (xu:cloche), and meets the beast of the cave
// (xu:pieuvre_tuee, or saved by the hermit: xu:sauve). Read later: the bell rings, or not, at the end.
module.exports = {
  passages: {
    XU_debut: { act: "IV", title: "La cloche", place: "cabane", ambiance: "nature",
      text: [
        "Un soir, devant le feu, Sauveur parle d'une cloche.",
        "« La chapelle de la Miséricorde avait une cloche, dit-il. Fondue à Morlenc, payée par les colons sou à sou, bénie par leur pasteur, qui n'avait aucun droit de bénir quoi que ce soit, étant protestant, et qui l'a fait quand même. Elle sonnait les offices, les naissances, les morts, et les navires. » Il tisonne le feu. « Le jour des clefs, quelqu'un l'a fait décrocher, et rouler jusqu'à la falaise, et jeter à la mer. Pour qu'elle ne sonne pas l'alarme. Ou pour qu'elle ne sonne plus jamais rien. Les deux raisons se valent. »",
        "Il te regarde à travers la fumée de sa pipe.",
        "« Elle est toujours là. Dans une grotte, au pied de la falaise de l'est, que la mer ne découvre qu'aux grandes marées, deux fois par lune. Je l'ai vue. Je n'ai jamais pu la sortir. Il faudrait des bras jeunes, et de l'obstination, et une idée. » Il sourit. « J'ai l'obstination. J'ai même eu l'idée. Les bras, je les ai laissés quelque part entre soixante et soixante-trois ans. »",
        "La grande marée, dit-il, c'est après-demain.",
      ],
      choices: [{ label: "Descendre à la grotte avec lui, à la marée", to: "XU_grotte" }] },
    XU_grotte: { act: "IV", title: "La grotte", place: "cabane", ambiance: "souterrain",
      text: [
        "À l'heure du plus bas de l'eau, la mer se retire de la falaise de l'est comme un rideau qu'on tire, et découvre, au ras des galets, une bouche noire, basse, frangée d'algues brunes qui pendent comme des cheveux mouillés. On y entre à quatre pattes. Puis on se relève.",
        "Dedans, c'est une église. Une nef immense, creusée par la mer dans la roche noire, haute comme la chapelle de Sainte-Anne, avec une voûte qui se perd dans l'ombre. La lumière y entre par la bouche, rasante, et par en dessous, à travers une eau verte et claire qui remplit le fond de la nef, et elle monte le long des parois en reflets mouvants, comme si la grotte entière respirait. Et les parois sont vivantes. Des anémones rouges, mauves, orangées, ouvertes comme des fleurs de chair. Des éponges jaunes. Des étoiles de mer pourpres, collées au roc comme des sceaux de cire. Des moules par milliers, noires, serrées comme des tuiles. Tout cela luit, ruisselle, palpite, dans un silence de cathédrale où l'on entend seulement, très loin, le cœur de la mer.",
        "Au fond, à demi plongée dans l'eau verte, couchée sur le flanc entre deux rochers, couverte d'algues et de coquillages, il y a la cloche. Grande. Plus grande que toi. La bouche tournée vers l'entrée, comme un animal endormi. Sur le bronze, sous la croûte de coquillages, on devine des lettres en relief.",
        "Sauveur s'arrête à l'entrée. Il ne va pas plus loin. Il regarde la cloche, de loin, longtemps, avec une expression que tu ne lui as jamais vue, et que la lumière verte rend difficile à lire.",
        "« Elle pèse six cents livres, dit-il. Je sais. Je l'ai fait porter. » Il se reprend. « Je l'ai vue porter. »",
      ],
      choices: [{ label: "T'approcher de la cloche", to: "XU_cloche" }] },
    XU_cloche: { act: "IV", title: "La cloche", place: "cabane", ambiance: "souterrain",
      text: [
        "Tu entres dans l'eau verte jusqu'aux genoux, puis jusqu'à la taille. Elle est froide, bien plus froide que la mer du dehors. Tu touches la cloche. Le bronze est lisse là où l'eau le lave, rugueux là où les coquillages ont pris.",
        "Tu grattes la croûte avec ton couteau, à l'endroit des lettres. Elles apparaissent une à une, vertes de patine : *MISERICORDIA · SVPER · AQVAS.* La même devise que sur les piastres. Et dessous, plus petit : *Ie sonne pour les vivans.*",
        "Tu essaies de la bouger. Tu pousses de tout ton poids, l'épaule contre le bronze. Rien. Pas un pouce. Six cents livres, coincées entre deux rochers, sous l'eau, depuis vingt et un ans.",
        "Mais l'eau monte, déjà, par la bouche de la grotte. Lentement. Et en montant, elle soulève les algues, et les algues flottent, et le bois flotte, et les barriques flottent. Et une barrique vide, dit Sauveur depuis l'entrée, porte deux cents livres sans se plaindre.",
        "Tu regardes la cloche. Tu regardes l'eau qui monte. Tu as une idée. C'est la sienne, sans doute. Il te l'a laissée trouver.",
      ],
      choices: [{ label: "Remonter avant que la mer ferme la grotte, et préparer les barriques", to: "XU_travail" }] },
    XU_travail: { act: "IV", title: "Le travail", place: "cabane", ambiance: "nature",
      text: [
        "Il te faut trois barriques vides, des cordes, des coins de bois, un levier, et la marée.",
        "Les barriques, Sauveur en a deux, derrière la hutte, qui servent à recueillir l'eau de pluie. La troisième, tu la trouves sur la plage du nord, rejetée par la mer, à moitié pleine de sable, sans fond. Il te faut une journée pour lui faire un fond avec des planches de caisse et de la poix que Sauveur fait cuire dans une marmite en jurant contre la qualité de la poix d'aujourd'hui, qui est pourtant la sienne, de l'année dernière. Les cordes, tu les tresses toi-même, avec des fibres de palmier, pendant deux soirs, devant le feu, les doigts en sang, en pensant au Gabier et à ses nœuds.",
        "Au plus bas de la marée suivante, tu entres dans la grotte avec tout ton matériel. Tu as quatre heures. Tu glisses les coins sous la cloche, à coups de pierre. Tu passes les cordes autour, dans les anses, une à une, en plongeant dans l'eau verte, les yeux ouverts, au milieu des anémones qui se ferment à ton passage. Tu amarres les barriques vides aux cordes, au ras de l'eau, avec des nœuds de chaise qui ne glissent pas.",
        "Puis tu attends la mer.",
        "Elle monte. Elle couvre les barriques. Les cordes se tendent. Tu entends le bronze grincer contre la roche, un son grave, prolongé, presque une note, qui fait vibrer la grotte entière. La cloche bouge. Elle bouge d'un pouce. De deux.",
      ],
      choices: [{ label: "Pousser avec le levier, pendant que la mer tire", test: { dom: "savoir", diff: 1, label: "L'idée, et la mer" }, win: { to: "XU_pieuvre" }, lose: { to: "XU_travail_rate" } }] },
    XU_travail_rate: { act: "IV", title: "Le travail", place: "cabane", ambiance: "nature",
      text: [
        "Tu pousses. La cloche bouge encore d'un pouce. Puis une corde cède, celle que tu as tressée le premier soir, trop vite, avec des fibres trop sèches. Une barrique s'échappe et remonte à la surface comme un bouchon, et la cloche retombe dans son lit de rocher avec un bruit sourd, grave, qui résonne dans la nef comme un glas.",
        "La mer monte. Il faut sortir. Tu sors, à la nage, par la bouche de la grotte presque fermée, en avalant de l'eau, et tu te hisses sur les galets, et tu restes là, couché{e} sur le dos, à regarder le ciel, avec l'envie de pleurer et une égratignure au front.",
        "Sauveur s'assied à côté de toi. Il ne dit rien pendant un long moment.",
        "« La première fois, dit-il enfin, j'ai cassé deux cordes et perdu les trois barriques. J'avais cinquante ans et je croyais tout savoir. » Il te tend une gourde. « Refais tes cordes. Plus lentement. Avec des fibres mouillées. La prochaine grande marée, c'est dans quinze jours. La cloche n'est pas pressée. Elle attend depuis vingt et un ans. »",
        "Quinze jours plus tard, tu recommences. Les cordes tiennent.",
      ],
      choices: [{ label: "Retourner à la grotte, à la marée suivante", to: "XU_pieuvre" }] },
    XU_pieuvre: { act: "IV", title: "La bête", place: "cabane", ambiance: "souterrain",
      text: [
        "La cloche se soulève. Les barriques la tirent vers le haut, la mer la porte, et elle quitte son lit de roche avec un long soupir de bronze, et elle flotte, entre deux eaux, suspendue sous les barriques comme un pendu sous une branche. Tu cries de joie. La grotte te renvoie ton cri, cent fois.",
        "C'est alors que quelque chose te prend le bras.",
        "Une chose froide, gluante, souple, qui sort d'une fente du rocher, à côté de toi, et qui s'enroule autour de ton poignet, puis de ton coude, et serre. Puis une deuxième, autour de ta taille. Une troisième, autour de ta jambe. Des lanières grises, longues comme des hommes, couvertes en dessous de ventouses blanches qui se collent à ta peau et la tirent, la sucent, comme cent petites bouches. Et dans la fente, au fond, un œil. Un œil énorme, doré, à la pupille en fente, qui te regarde sans colère, sans haine, sans rien, avec une attention parfaite.",
        "La bête te tire vers la fente. Lentement. Patiemment. Elle a le temps. Toi, tu as la tête qui sort à peine de l'eau, et l'eau qui monte.",
        "Tu as ton couteau dans la main libre. Sauveur t'a dit un jour, devant le feu, en parlant d'autre chose : *toutes les bêtes ont un endroit où vit leur volonté. Il faut le trouver, et frapper là, une fois.*",
      ],
      choices: [
        { label: "Frapper entre les yeux, là où vit la volonté de la bête", test: { dom: "combat", diff: 1, label: "Un seul coup, au bon endroit" }, win: { fx: { flag: ["xu:pieuvre_tuee", "xu:cloche"] }, to: "XU_pieuvre_tuee" }, lose: { fx: { flag: ["xu:sauve", "xu:cloche"] }, to: "XU_pieuvre_sauveur" } },
        { label: "Trancher les bras, un par un", fx: { flag: ["xu:sauve", "xu:cloche"] }, to: "XU_pieuvre_sauveur" },
      ] },
    XU_pieuvre_tuee: { act: "IV", title: "La bête", place: "cabane", ambiance: "souterrain",
      text: [
        "Tu laisses les bras tranquilles. Tu te laisses tirer vers la fente, au contraire, au plus près de l'œil doré, jusqu'à sentir contre ta poitrine le corps mou, énorme, palpitant de la bête, et tu frappes, une fois, de toutes tes forces, entre les deux yeux, au milieu, là où la chair est plus ferme.",
        "La bête devient blanche. D'un coup, tout entière, comme une chandelle qu'on souffle à l'envers. Les bras se relâchent. Les ventouses lâchent prise, une à une, avec un bruit de baisers mouillés. La bête glisse au fond de l'eau verte, lentement, en tournoyant, ses huit bras ouverts autour d'elle comme une fleur fanée.",
        "Tu restes un moment accroché{e} au rocher, haletant{e}, couvert{e} de marques rouges, rondes, régulières, comme si cent bouches t'avaient embrassé{e}. Puis tu nages vers la sortie, en poussant devant toi la cloche suspendue sous ses barriques, jusqu'à la bouche de la grotte, jusqu'au jour.",
      ],
      choices: [{ label: "Sortir avec la cloche", to: "XU_fin" }] },
    XU_pieuvre_sauveur: { act: "IV", title: "La bête", place: "cabane", ambiance: "souterrain",
      text: [
        "Tu frappes. Les bras. Un bras tranché tombe et se tord dans l'eau comme un serpent coupé. Un autre le remplace. La bête a huit bras ; tu en as deux, et l'eau monte jusqu'à ton menton.",
        "Puis une ombre passe au-dessus de toi. Sauveur est entré dans la grotte, à la nage, avec un harpon de pêche qu'il tenait à la main depuis le début, et que tu n'avais pas remarqué. Il plonge. Il reste sous l'eau un temps qui te paraît impossible pour un homme de soixante-trois ans. L'eau verte se trouble, devient noire, d'une encre épaisse qui sent le fer.",
        "Les bras te lâchent, d'un coup. Sauveur remonte, crachant, ruisselant, sa barbe pleine d'encre noire, et te prend par le col, et te tire vers la sortie, en poussant de l'autre main la cloche suspendue sous ses barriques.",
        "Sur les galets, au soleil, il s'assied, essoufflé, et regarde ses mains. Elles tremblent. « Vingt et un ans que je ne l'avais pas tuée, dit-il. Je savais qu'elle était là. Elle gardait la cloche. Je la laissais faire. C'était un arrangement. » Il te regarde. « Vous avez rompu l'arrangement. Il fallait bien que je finisse le travail. »",
      ],
      choices: [{ label: "Tirer la cloche sur les galets", to: "XU_fin" }] },
    XU_fin: { act: "IV", title: "La cloche", place: "cabane", ambiance: "nature",
      text: [
        "Il faut une journée entière, avec les rouleaux de bois et le levier, pour hisser la cloche jusqu'en haut de la grève, à l'abri des marées. Vous la dressez sur deux pierres, la bouche vers le bas. Sauveur la gratte, lentement, avec une conque, jusqu'à ce que le bronze apparaisse, vert et doré, sous les coquillages. *MISERICORDIA · SVPER · AQVAS. Ie sonne pour les vivans.*",
        "Puis il prend un galet rond, gros comme le poing, et il frappe la cloche, une fois.",
        "Le son part. Un son énorme, grave, profond, qui roule sur la plage, sur la falaise, sur la Sylve, sur l'île entière, et qui ne finit pas, qui s'élargit, qui tremble, qui monte vers la Table et redescend, comme une vague qui ne se briserait jamais. Les perroquets s'envolent de la falaise par centaines. Au loin, dans le bois mort, d'autres perroquets répondent, avec des voix d'enfants.",
        "Sauveur écoute le son jusqu'au bout, la tête baissée, les yeux fermés, comme on écoute une messe. Quand il rouvre les yeux, il a le visage mouillé. Ce n'est peut-être que l'eau de la grotte.",
        "« Elle sonne pour les vivants, dit-il. C'est écrit dessus. » Il se lève. « Il faudra lui trouver un clocher. Plus tard. Quand il y aura assez de vivants pour qu'elle serve. »",
      ],
      choices: [{ label: "Rentrer à la hutte", fx: { quest: "XU" }, back: "A4n_jours" }] },
  },
  extras: {
    quests: [
      { id: "XU", act: "IV", kind: "annexe", title: "La cloche de la grotte", start: "XU_debut", doit: "travailleurs", echo: ["xu:cloche", "xu:pieuvre_tuee", "xu:sauve"] },
    ],
  },
};
