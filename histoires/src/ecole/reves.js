// The dreams (on waking, see base.js `dreams`: nothing in them is explained), the vigils under the lime trees with Ysé
// and Jodoc (base.js `vigils`), and Ysé's gazette.
module.exports = {
  // ------------------------------------------------------------------ the dreams
  R_noyee: {
    title: "Un rêve", place: "dortoir", back: true,
    text: [
      "Tu es dans la bibliothèque, la nuit. L'eau monte entre les rayons, verte et calme, jusqu'aux genoux, puis jusqu'à la taille. Les livres flottent autour de toi, ouverts, et leurs pages se défont dans l'eau comme des algues.",
      "Au bout de l'allée, une jeune fille est debout entre deux rayonnages, trempée, les cheveux collés au visage. Elle {{or:s3|l}}it. Elle tourne les pages d'un cahier qui ne se mouille pas. Elle lève les yeux vers toi et sourit à moitié, comme quelqu'un qui va dire une insolence.",
      "Elle ouvre la bouche. Il en sort de l'eau, et {{fx:chuchote|le bruit de la mer}}.",
      "Tu te réveilles, la bouche sèche.",
    ],
  },
  R_digue: {
    title: "Un rêve", place: "dortoir", back: true,
    text: [
      "Tu marches sur la digue, seul{e}, par une nuit sans vent. La mer est plate comme une table. Sous tes pieds, la digue chante, et elle chante faux, une note qui grince, qui monte, qui se casse.",
      "Tu t'agenouilles et tu poses l'oreille sur le granit. La note se défait en voix, des centaines, qui chantent chacune un peu à côté des autres. Tout au bout, à la Tête, une voix plus claire essaie de les ramener, encore et encore, et n'y arrive pas seule.",
      "Tu veux chanter avec elle. Tu ouvres la bouche, et tu te réveilles.",
    ],
  },
  R_merle: {
    title: "Un rêve", place: "dortoir", back: true,
    text: [
      "Le merle de Maître Salvanhac est perché au pied de ton lit, dans le dortoir désert. Il te regarde d'un œil, puis de l'autre.",
      "« Il a oublié pour que tu te souviennes, dit le merle, d'une voix de vieil homme. C'est un marché. Il ne l'a pas choisi. »",
      "Il saute sur ton coffre, picore la serrure, et s'envole par la lucarne vers la mer. Sur le coffre, il a laissé une plume noire, et la plume est encore là quand tu te réveilles. Puis elle n'y est plus.",
    ],
  },
  R_examen: {
    title: "Un rêve", place: "dortoir", back: true,
    text: [
      "Le grand examen. Toute la ville est sur la digue, mais les visages sont flous, comme dans un reflet de Vilmorin. Tu marches vers la Tête, et la digue s'allonge sous tes pas, une lieue, deux lieues, dix.",
      "Quand tu arrives enfin, quelqu'un est déjà agenouillé devant le grand signe, de dos, et le trace. Tu ne vois que ses mains, fines, sûres, couvertes d'encre brune. La personne se retourne. C'est toi, avec dix ans de plus.",
      "Tu te réveilles avant de savoir si la Tête a tenu.",
    ],
  },

  // ------------------------------------------------------------------ the vigils
  V_yse: {
    title: "Sous les tilleuls", place: "cour", back: true,
    text: [
      "Ysé t'attend sur le banc du puits, enroulée dans sa robe, les genoux sous le menton. La cour est noire. Une seule fenêtre brille, au logis du Recteur.",
      "« Mon père imprimait des almanachs, dit-elle, sans que tu aies rien demandé. Des almanachs, des catéchismes, des affiches de foire. Et une fois, une seule, une feuille de quatre pages qui racontait comment le gouverneur avait vendu le blé des greniers pendant la disette. Tout était vrai. Il a pris six ans. » Elle se tait. « Ce qui est vrai, il faut l'imprimer quand même. Sinon, à quoi ça sert, de savoir lire ? »",
      "Elle fouille dans sa poche et te tend une petite lettre de plomb : un A. « Pour commencer ta casse. Il en faut beaucoup, des A. »",
    ],
    fx: { conf: { yse: 10 } },
  },
  V_yse2: {
    title: "Sous les tilleuls", place: "cour", back: true,
    text: [
      "Ysé est déjà sur le banc du puits. Il fait froid. Vous partagez sa couverture.",
      "« Je voudrais faire une gazette, dit-elle. Une vraie. Imprimée. Pour le collège, et pour la ville. Le droguiste de la rue des Drapiers a une vieille presse à bras dans son arrière-boutique. Il veut bien me la prêter le dimanche. » Elle te regarde de côté. « Il me manque une histoire. Une grande. Quelque chose que tout le monde voudra lire. »",
      { if: { clues: "S", min: 3 }, text: "Elle te regarde plus longuement. « Toi, tu en as une. Ça se voit. Tu ne dors plus. »" },
    ],
    fx: { conf: { yse: 10 } },
  },
  V_jodoc: {
    title: "Près du puits", place: "cour", back: true,
    text: [
      "Jodoc est assis sur la margelle du puits, ses grandes jambes repliées, un bout de bois et un couteau dans les mains. Il taille. Les copeaux tombent dans le puits avec un bruit minuscule.",
      "« Mon père est charron, dit-il. Il fait des roues. Une roue, c'est simple : un moyeu, des rayons, une jante, et tout doit tenir ensemble ou rien ne tient. Il voulait que je fasse des roues. Moi, je voulais faire ça. » Il te montre le bout de bois : un petit mouton, parfait, avec une toison qu'on dirait vraie. Il le pose dans ta main.",
      "« Si je rate encore, je rentre faire des roues. C'est un bon métier, les roues. Seulement, mes mains veulent autre chose. »",
    ],
    fx: { conf: { jodoc: 10 } },
  },
  V_jodoc2: {
    title: "Près du puits", place: "cour", back: true,
    text: [
      "Jodoc ne taille rien, ce soir. Il regarde le ciel, les mains entre les genoux.",
      "« Tu sais ce que j'ai compris ? dit-il. Les regards me gênent moins que ce que j'imagine derrière. Quand tu me parles pendant que je grave, je pense à ce que tu dis, et mes mains font leur travail. » Il réfléchit, longtemps, comme il fait tout. « Le jour de l'examen, il faudrait que tu me parles. De loin. »",
      "Vous convenez d'un signe : trois doigts levés. Trois coups, trois moutons.",
    ],
    fx: { conf: { jodoc: 10 }, flag: "jodoc:signe" },
  },

  // ------------------------------------------------------------------ the gazette
  K_gazette: {
    title: "La gazette", place: "dortoir",
    text: [
      "Ysé étale sur son lit des feuilles couvertes de colonnes, de titres, de dessins. Une gazette du collège, avec les résultats des duels, les menus du réfectoire, une charade, et une rubrique « On dit » pleine de méchancetés anonymes.",
      "« C'est bien, dit-elle en regardant son travail d'un œil critique. C'est amusant. Ça ne sert à rien. » Elle te regarde. « Si un jour tu as quelque chose qui sert, quelque chose de vrai et que les gens doivent savoir, tu me le donnes. Je l'imprime. Même si ça coûte. »",
    ],
    fx: { questSeen: "II_gazette" },
    choices: [{ back: "H_dortoir" }],
  },
  K_gazette_prete: {
    title: "La gazette", place: "dortoir",
    text: [
      "Tu poses sur le lit d'Ysé le cahier de toile bleue et la page recollée. Tu lui racontes tout, à voix basse, pendant que le dortoir dort.",
      "Ysé t'écoute jusqu'au bout. Quand tu as fini, elle reste longtemps silencieuse, la page sur les genoux. Puis elle prend une feuille blanche et une plume, et elle écrit un titre, en capitales, et elle le barre, et elle en écrit un autre, plus simple : « LE NOM DE SOLÈNE ARLAUD ».",
      "« Je la compose cette semaine, dit-elle. Mille feuilles, chez le droguiste. Je ne la distribue que le jour où tu parles, et seulement si tu parles. C'est toi qui décides. » Elle sourit, de son sourire immense et de travers. « Mon père va être fier. Il va me tuer, mais il va être fier. »",
    ],
    fx: { flag: "gazette:prete", quest: "II_gazette", conf: { yse: 20 }, ep: ["histoire", 800] },
    choices: [{ back: "H_dortoir" }],
  },
};
