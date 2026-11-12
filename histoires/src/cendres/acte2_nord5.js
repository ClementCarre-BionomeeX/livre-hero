// Act II · the northern company, chapter 5, "Le col de l'Ourse": down to the col with the clan, the tear seen up close
// (the white plain, a city, a crowned figure), what the rite asks of Corbe, and what Askel's white robe was for. The
// chapter ends waiting for the southern company. Corbe leads ("tu").
var N = { act: "II", noLead: true };
function P(o) { return Object.assign({}, N, o); }
module.exports = {
  II_N5_depart: P({ title: "Les tambours", place: "cirque",
    text: [
      "À l'aube, tu les entends avant de les voir, comme autrefois : les tambours. Ils viennent de l'ouest, de la vallée, et ils montent vers le col de l'Ourse.",
      "Le clan. Tout le clan du Corbeau, en file, les anciens sur des traîneaux, les enfants sur les épaules, les visages peints. Il monte au col pour le rite, avec ou sans sa Bouche.",
      { if: { has: "nord:rendu=clan" }, text: "En tête, Hrodna. Son visage n'est plus peint. Elle marche comme une femme qui sait comment elle s'appelle." },
      { if: { not: { has: "nord:rendu=clan" } }, text: "En tête, Hrodna, le visage peint en blanc, du front au menton, sans un signe. Elle sourit à tout le monde de la même façon." },
    ],
    choices: [{ label: "Descendre vers le col, à la rencontre du clan", travel: "r_ii_col" }] }),

  II_N5_clan: P({ title: "Le clan", place: null,
    text: [
      "Vous rejoignez la file au pied du col. Les gens s'écartent pour te laisser passer. Personne ne crache. Personne ne recule. Ils te regardent comme on regarde le temps qu'il va faire.",
      { if: { has: "nord:geant=dort" }, text: "On sait déjà, au clan, que le grand dort, au fond du cirque. Les nouvelles vont vite, en montagne, même quand personne ne les porte." },
      { if: { has: "nord:geant=tue" }, text: "On sait déjà, au clan, que le grand est tombé, et que les noms sont partis vers le col. Les anciens ne savent pas si c'est une bonne nouvelle. Toi non plus." },
      { if: { has: "nord:rendu=clan" }, text: "Hrodna vient à toi. Elle te prend les deux mains. « Je me suis réveillée en sachant mon nom, dit-elle. Et le tien. Je ne sais pas ce que tu as fait. Je sais que c'est toi. »" },
      "Askel est là, au milieu des femmes, en robe blanche. Elle est descendue de la grotte. Elle ne te regarde pas.",
      { with: "gaspard", text: "Les enfants du clan regardent Gaspard avec effroi, puis avec curiosité. Une fillette lui tend un morceau de galette. Il le prend avec une délicatesse infinie." },
    ],
    choices: [{ label: "Monter au col", fx: { flag: "nord:clan_col" }, to: "@route" }] }),

  II_N5_bord: P({ title: "Le bord", place: null,
    text: [
      "Le col de l'Ourse. L'herbe rase sous la neige. La grande pierre plate. Et devant la pierre, la déchirure.",
      "De près, ce n'est pas une lumière. C'est une absence. Un endroit du monde où le monde s'arrête, net, comme une page déchirée, et derrière, du blanc. Elle est haute comme trois hommes, large comme une grange. Elle était grande comme une porte, il y a un mois.",
      "Le vent souffle vers elle. Tout le vent du col, des deux côtés, va vers la déchirure, doucement, comme l'eau vers une bonde.",
    ],
    choices: [{ label: "Le col", to: "@route" }] }),

  II_N5_col: P({ title: "Le col de l'Ourse", place: "col", hub: true,
    text: [
      "Le clan a monté son camp autour de la pierre, à cent pas de la déchirure. Personne ne va plus près. Les tambours battent doucement, sans arrêt, comme un cœur.",
      "Le rite est pour demain, à l'aube. Ils attendent ta réponse, sans te la demander.",
      "Au sud, la vallée, les crêtes, et quelque part derrière, les autres. Vous vous êtes promis le col avant la fin du mois. C'est demain.",
    ],
    choices: [
      { label: "Regarder dans la déchirure", hide: { seen: "II_N5_dechirure" }, to: "II_N5_dechirure" },
      { label: "Hrodna, et ce que le rite demande", hide: { seen: "II_N5_rite" }, to: "II_N5_rite" },
      { label: "Askel, dans sa robe blanche", hide: { seen: "II_N5_askel" }, to: "II_N5_askel" },
      { label: "La grande pierre plate", hide: { seen: "II_N5_pierre" }, to: "II_N5_pierre" },
      { label: "Les cairns, derrière la pierre", hide: { seen: "II_Q_bouches" }, to: "II_Q_bouches" },
      { label: "La cabane de pierres sèches, en contrebas", hide: { seen: "II_Q_refuge" }, to: "II_Q_refuge" },
      { label: "L'enfant de Sauvelune, assis face à la déchirure", hide: { any: [{ seen: "II_C5_enfant" }, { not: { present: "enfant" } }] }, to: "II_C5_enfant" },
      { label: "Ysolde, qui affûte son épée pour la quatrième fois", hide: { any: [{ seen: "II_C5_ysolde" }, { not: { present: "ysolde" } }] }, to: "II_C5_ysolde" },
      { label: "Pie, couché sur une peau de renne, qui compte les étoiles", hide: { any: [{ seen: "II_C5_pie" }, { not: { present: "pie" } }] }, to: "II_C5_pie" },
      { label: "Hylas, debout face au nord", hide: { any: [{ seen: "II_C5_hylas" }, { not: { present: "hylas" } }] }, to: "II_C5_hylas" },
      { label: "Rodric, adossé à un cairn, qui ne dort pas", hide: { any: [{ seen: "II_C5_rodric" }, { not: { present: "rodric" } }] }, to: "II_C5_rodric" },
      { label: "Linette, qui te fait signe depuis le feu des enfants", hide: { any: [{ seen: "II_C5_linette" }, { not: { present: "linette" } }] }, to: "II_C5_linette" },
      { label: "Le feu de la compagnie, à l'écart", if: { all: [{ seen: "II_N5_rite" }, { seen: "II_N5_dechirure" }] }, why: "Pas avant d'avoir regardé, et d'avoir parlé à Hrodna.", to: "II_N5_feu", big: true },
    ] }),

  II_N5_dechirure: P({ title: "L'Outre-Blanc", place: "col",
    text: [
      "Tu t'approches. À vingt pas, le vent te pousse dans le dos, et tu dois t'arc-bouter. À dix, tu vois.",
      "Une plaine blanche, sans horizon. Une lumière sans soleil. Et dans la plaine, des gens. Des milliers, qui marchent vers la déchirure, lentement, de très loin. Ils ne sont pas de neige. Ils ont des visages, des vêtements d'autrefois, des enfants dans les bras. Ils marchent vers toi.",
      "Très loin derrière eux, une ville. Des tours pointues, blanches.",
      "Et devant la ville, debout, seul, quelqu'un de très grand, avec sur la tête quelque chose qui brille comme du givre. Il ne marche pas. Il regarde. Il te regarde.",
      { with: "enfant", text: "L'enfant de Sauvelune est venu à côté de toi sans que tu l'entendes. Il regarde la silhouette couronnée. Il dit, très bas, sans savoir pourquoi : « Il m'attend. »" },
    ],
    choices: [{ label: "Reculer", fx: { flag: "nord:ardael_vu", clue: "n_outreblanc" }, to: "II_N5_col" }] }),

  II_N5_rite: P({ title: "Ce que le rite demande", place: "col",
    fx: { questSeen: "II_N_rite" },
    text: [
      "Hrodna parle sans détour. « Tu chantes les trois vers, à l'aube, debout sur la pierre. Tu donnes ton nom à la Mère Blanche, en entier, tout ce que tu as été. Puis tu entres. » Elle montre la déchirure. « Derrière toi, le col se referme. Ton nom bouche le trou. Tant que personne ne le dit, il tient. »",
      "« On ne le dira plus. Le clan l'oubliera. C'est le prix. »",
      { if: { has: "nord:chant_lu" }, text: "Tu penses aux trois vers, sous la liste. *Qui n'en chante aucun la garde fermée.*" },
      "« Personne n'en est revenu, dit Hrodna. Je préfère te le dire. »",
    ],
    choices: [{ label: "Revenir au camp", to: "II_N5_col" }] }),

  II_N5_askel: P({ title: "La robe blanche", place: "col",
    text: [
      "Ta mère est assise devant une tente, dans sa robe blanche. Elle a peint son visage, à moitié : le front, les joues. Il reste la bouche.",
      "« La robe est pour moi, dit-elle. Je te l'ai dit. Si tu n'y vas pas, j'irai. Je n'ai pas ta voix. Ça tiendra moins longtemps. Un an. Deux. » Elle trempe le doigt dans le pot de blanc. « Assez pour que tu sois loin. »",
      "Elle lève les yeux sur toi pour la première fois depuis ton retour. « Le jour où ils t'ont choisie, je ne t'ai pas regardée. Tu t'en souviens ? »",
      { if: { souv: "corbe:rite" }, text: "Tu t'en souviens. Les tambours, les visages peints, et ta mère qui regardait ailleurs." },
      { if: { not: { souv: "corbe:rite" } }, text: "Tu ne t'en souviens pas. Tu l'as donné, ce jour-là. Elle le voit à ton visage. Elle a l'air presque soulagée." },
      "« Je ne pouvais pas. Je savais ce que ça voulait dire. » Elle se peint la bouche. « Cette fois, je te regarde. »",
    ],
    choices: [{ label: "Rester près d'elle un moment", fx: { flag: "nord:askel_robe", conf: { corbe: 5 } }, to: "II_N5_col" }] }),

  II_N5_pierre: P({ title: "La pierre", place: "col",
    text: [
      "La grande pierre plate, au milieu du col. Grise, lisse.",
      { when: "day", text: "Elle est chaude au soleil, malgré la neige." },
      { when: "night", text: "Elle a gardé un peu de la chaleur du jour, malgré la neige." },
      { if: { souv: "corbe:col" }, text: "Tu t'y es assise, à douze ans, un jour d'été, et tu as regardé le monde. C'est l'endroit le plus beau qui soit. C'est encore vrai, même avec ce trou blanc derrière." },
      { if: { not: { souv: "corbe:col" } }, text: "Les gens du clan la touchent en passant, comme une relique. Tu ne sais pas pourquoi. C'est une pierre." },
      "Sur la face qui regarde la déchirure, quelqu'un a gravé, très anciennement, cinq petites figures. Une tour, une gerbe, une barque, un cerf, une plume croisée d'une clé. Et au-dessus, effacée, à peine visible, une sixième, qu'on a voulu gratter : un ours couronné.",
    ],
    choices: [{ label: "Revenir au camp", fx: { flag: "nord:ours_vu" }, to: "II_N5_col" }] }),

  II_N5_feu: P({ takes: "evening", title: "La veille du rite", place: "col",
    text: [
      "Le soir, vous faites votre feu à l'écart du clan, entre deux rochers. La déchirure éclaire tout le col d'une lumière froide, sans ombres. Personne n'arrive à dormir.",
      "Au sud, rien encore. Pas un feu sur les crêtes.",
    ],
    choices: [
      { label: "Parler avec l'enfant de Sauvelune", hide: { any: [{ not: { present: "enfant" } }, { seen: "II_N5_feu_enfant" }] }, to: "II_N5_feu_enfant" },
      { label: "Parler avec Ysolde", hide: { any: [{ not: { present: "ysolde" } }, { seen: "II_N5_feu_ysolde" }] }, to: "II_N5_feu_ysolde" },
      { label: "Parler avec Pie", hide: { any: [{ not: { present: "pie" } }, { seen: "II_N5_feu_pie" }] }, to: "II_N5_feu_pie" },
      { label: "Parler avec Hylas", hide: { any: [{ not: { present: "hylas" } }, { seen: "II_N5_feu_hylas" }] }, to: "II_N5_feu_hylas" },
      { label: "Parler avec Ombeline", hide: { any: [{ not: { present: "ombeline" } }, { seen: "II_N5_feu_ombeline" }] }, to: "II_N5_feu_ombeline" },
      { label: "Parler avec Gaspard", hide: { any: [{ not: { present: "gaspard" } }, { seen: "II_N5_feu_gaspard" }] }, to: "II_N5_feu_gaspard" },
      { label: "Attendre les autres", fx: { flag: "ch2:nord:5", resume: "II_R_col", catchup: 9, catchupAll: true, catchupWhy: "le col de l'Ourse" }, to: "C2_carrefour", big: true },
    ] }),

  II_N5_feu_enfant: P({ title: "Il m'attend", place: "col",
    text: ["L'enfant te demande ce que tu vas faire, demain. Tu ne réponds pas. Il hoche la tête. « Moi, dit-il, je crois que je vais y aller. Là-dedans. Pas pour le rite. Parce qu'on m'attend. » Il essaie de sourire. « Tu viendrais, toi, si quelqu'un t'attendait derrière une porte comme ça ? »"],
    choices: [{ label: "Revenir au feu", fx: { conf: { enfant: 5 } }, to: "II_N5_feu" }] }),

  II_N5_feu_ysolde: P({ title: "Les gens qui marchent", place: "col",
    text: ["Ysolde a regardé dans la déchirure, elle aussi. « Ils ont des enfants dans les bras, dit-elle. Comme sur le pont. » Elle ne dit pas quel pont. Elle n'en a plus besoin. « S'ils arrivent jusqu'ici, Corbe, je ne les arrêterai pas. Je veux que tu le saches avant. »"],
    choices: [{ label: "Revenir au feu", fx: { conf: { ysolde: 5 }, flag: "ysolde:ne_tiendra_pas" }, to: "II_N5_feu" }] }),

  II_N5_feu_pie: P({ title: "Les lettres", place: "col",
    text: [
      { if: { has: "corbe:lettres" }, text: "Pie trace un C dans la neige, avec un bâton, et te le tend. « Révision. » Tu écris ton nom. Tes R ressemblent toujours à des corbeaux. Il le regarde longtemps. « Si tu entres là-dedans, dit-il, je l'écrirai partout. Sur tous les murs de Pallanche. Ils ne pourront pas l'oublier. Je suis faussaire, je sais faire durer une écriture. »" },
      { if: { not: { has: "corbe:lettres" } }, text: "Pie lance des cailloux dans la lumière de la déchirure. Ils disparaissent sans bruit. « Si tu entres là-dedans, dit-il, ne compte pas sur moi pour t'oublier. Je n'ai jamais rien rendu de ce que j'ai pris. »" },
    ],
    choices: [{ label: "Revenir au feu", fx: { conf: { pie: 5 } }, to: "II_N5_feu" }] }),

  II_N5_feu_hylas: P({ title: "L'ours couronné", place: "col",
    text: [
      { if: { has: "nord:ours_vu" }, text: "Tu décris la pierre à Hylas, les cinq figures, et la sixième, grattée. L'ours couronné. Il reste longtemps immobile. « Dans le registre noir, dit-il enfin, la première page porte ce sceau. Je n'avais jamais su de quelle maison c'était. Il n'y en a pas, en Esquarre. » Il tourne la tête vers la déchirure. « Il y en avait une. »" },
      { if: { not: { has: "nord:ours_vu" } }, text: "Hylas est assis tourné vers la déchirure, comme s'il la voyait. « Je suis déjà venu ici, dit-il. Il y a vingt ans. Je suis entré. Je suis ressorti. » Il ne dit pas avec quoi. Il ne dit pas avec qui." },
    ],
    choices: [{ label: "Revenir au feu", fx: { conf: { hylas: 5 } }, to: "II_N5_feu" }] }),

  II_N5_feu_ombeline: P({ title: "Ceux qui marchent", place: "col",
    text: ["Ombeline a les yeux fermés. « Je les entends, dit-elle. Ceux qui marchent, de l'autre côté. Ils ne sont pas en colère. Ils sont fatigués. Comme mes mourants, juste avant. » Elle ouvre les yeux. « Ils veulent qu'on dise leur nom. C'est tout. C'est énorme. »"],
    choices: [{ label: "Revenir au feu", fx: { conf: { ombeline: 5 } }, to: "II_N5_feu" }] }),

  II_N5_feu_gaspard: P({ title: "Le four", place: "col",
    text: ["Gaspard regarde la déchirure avec nostalgie. « Je viens de là, dit-il. Avant le four, avant tout. Je crois. » Il a gardé le morceau de galette de la fillette, intact, dans sa main de neige. « Quand j'étais là-bas, j'avais un nom à moi. Je ne m'en souviens plus. Gaspard, c'est celui du boulanger. Je l'ai pris. Je crois qu'il ne m'en veut pas. »"],
    choices: [{ label: "Revenir au feu", fx: { conf: { gaspard: 5 } }, to: "II_N5_feu" }] }),
};
