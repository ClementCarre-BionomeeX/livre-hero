// L'Île Folle-Aiguille · side story « Le louchet » (owes its question to Colomba: who arms the hand that avenges, and
// what weighs a word of the learned in a land where blood answers blood?). At Lannoz, old Drézen was found three days
// ago at the bottom of a peat trench, his skull open. His daughter Tifenn says the Penhoat sons killed him with a turf
// spade; her brother Gwendal, nineteen, waits for a word to go. The custom of the moor: if the stranger who knows
// bodies says « coup », the son must go. Victorine says blow (wc:coup), fall (wc:chute), or says she cannot tell
// (wc:doute). Wired in A3x_lannoz.
module.exports = {
  passages: {
    WC_tifenn: { act: "III", title: "Le louchet", place: "lannoz", ambiance: "nature",
      fx: { meet: "tifenn" },
      text: [
        "Elle attend Victorine au bout de la cale, debout dans la bruine, sans manteau, avec une coiffe noire et un visage si blanc qu'on le croirait poudré à la farine. Elle a vingt-deux ans, peut-être. Elle parle la langue du continent avec l'accent de Lannoz, qui roule les mots comme des galets, et elle la parle mieux que la moitié de l'équipage de la Cormorane.",
        "« Vous êtes la femme qui soigne. Vous savez les corps. » Elle le pose là comme une pierre sur une tombe, sans la moindre inflexion de prière. « Mon père est couché dans la maison depuis trois jours. On l'a trouvé au fond d'une tranchée de tourbe, la tête ouverte. Les Penhoat disent qu'il est tombé. Moi, je dis qu'on l'a aidé. Venez le regarder, et dites-le devant tout le monde. »",
        "Victorine demande pourquoi devant tout le monde. La jeune femme la regarde avec une patience de maîtresse d'école devant une enfant lente. « Parce qu'ici, madame, nous avons la mer, le recteur et la coutume, et rien d'autre. Et la coutume dit que si quelqu'un qui sait les corps dit *coup*, mon frère a le droit de prendre le louchet. »",
      ],
      choices: [{ label: "La suivre jusqu'à la maison du mort", to: "WC_corps" }] },
    WC_corps: { act: "III", title: "Le louchet", place: "lannoz", ambiance: "nuit",
      text: [
        "La maison des Drézen est la dernière du village, si basse qu'on y entre plié en deux, comme dans un terrier. Il y fait noir, et chaud, et l'air y est épais de fumée de tourbe et de cire. Le mort est couché sur la table, dans sa chemise du dimanche, les mains croisées sur un chapelet de buis. Trois jours de veille ont cerné de bleu les yeux des femmes assises le long des murs, qui chantent à mi-voix, sans s'arrêter, une plainte qui ressemble au bruit du vent dans une cheminée. Elles se taisent quand Victorine entre. Elles la regardent toutes, avec la même fixité, comme les chouettes regardent une lanterne.",
        "Victorine défait le linge de la tête. La plaie est à l'arrière du crâne, un peu à droite, longue de trois doigts, droite, nette sur un bord, écrasée sur l'autre. L'os a cédé dessous. Dans les lèvres de la plaie, de la tourbe noire, fine, et un minuscule éclat de pierre grise. Elle tâte les mains du mort : des ongles cassés, et de la tourbe dessous, enfoncée loin, comme chez un homme qui a gratté la paroi. Les genoux de son pantalon sont déchirés tous les deux.",
        "Elle connaît ce genre de plaie. Un louchet, cette bêche étroite à lame de fer que les tourbiers manient comme un sabre, fait ce bord net. Une pierre plate, au fond d'une tranchée, fait le même, quand un homme lourd tombe dessus de six pieds. Elle cherche une deuxième plaie, une ecchymose, une trace de main sur la gorge ou les bras. Elle ne trouve rien. Elle cherche longtemps. Elle sent les yeux de toutes les femmes posés sur sa nuque comme des mains froides.",
        "Contre le mur, près de la porte, un jeune homme est assis sur un billot, les coudes sur les genoux. Grand, roux, avec des mains de tourbier et un visage d'enfant qu'on a réveillé trop tôt. Il tient sur ses genoux un louchet neuf, dont il a aiguisé la lame jusqu'à la rendre bleue. Il ne regarde ni le mort ni Victorine. Il regarde la lame.",
      ],
      choices: [{ label: "Demander à parler à la sœur, seule", to: "WC_soeur" }] },
    WC_soeur: { act: "III", title: "Le louchet", place: "lannoz", ambiance: "nuit",
      text: [
        "Dehors, la nuit est tombée. Tifenn marche devant elle sur la lande, entre les flaques qui reflètent un reste de jour couleur d'étain, jusqu'à la tranchée. C'est une coupure droite dans la terre noire, profonde de deux hommes, aux parois lisses comme des murs, avec au fond une eau immobile et, à moitié enfoncée dans la vase, une pierre plate, grise, qui a la couleur de l'éclat trouvé dans la plaie. Victorine la regarde longtemps. Tifenn aussi.",
        "« Mon père buvait, dit Tifenn, d'une voix égale. Le soir de sa mort, il revenait de chez les Penhoat, où il était allé réclamer la limite de notre coupe, qu'ils ont avancée de dix pas l'an dernier. Il y avait les deux fils Penhoat. On l'a entendu crier, de loin. Puis plus rien. Les Penhoat disent qu'il est parti en jurant, ivre, et qu'il a pris le raccourci de la tranchée, comme un idiot, dans le noir. » Elle sourit. « C'est possible. Mon père était un idiot. Il prenait toujours le raccourci. »",
        "Elle se tourne vers Victorine. Elle a cessé de sourire. « Gwendal n'a pas envie d'y aller. Il est doux. Il aime les moutons, et une fille de Kerhuel qui chante à la veillée. Mais depuis trois jours, au village, quand il passe, on se tait. Les vieux crachent. Les mères tirent leurs filles par le bras. Si vous dites *chute*, madame, on dira qu'il a eu peur et qu'il a payé l'étrangère pour avoir le droit d'avoir peur. Il vivra ici cinquante ans comme ça. Si vous dites *coup*, il ira, il en tuera un, l'autre le tuera, et dans vingt ans, ma fille, si j'en ai une, attendra une autre étrangère au bout de la cale. » Elle hausse les épaules. « Je vous demande seulement de dire ce que vous savez. »",
        "Victorine pense à la bruine qui fait ce bruit doux sur la tourbe, et à la façon dont la jeune femme a dit *ce que vous savez*, comme on pose un poids sur l'autre plateau d'une balance pour voir de quel côté elle penche. Elle pense qu'elle sait une chose : elle ne sait pas.",
      ],
      choices: [
        { label: "Dire devant le village : « C'est un coup. »", fx: { flag: "wc:coup" }, to: "WC_coup" },
        { label: "Dire devant le village : « Il est tombé. »", fx: { flag: "wc:chute" }, to: "WC_chute" },
        { label: "Dire devant le village : « Je ne peux pas savoir. »", fx: { flag: "wc:doute" }, to: "WC_doute" },
      ] },
    WC_coup: { act: "III", title: "Le louchet", place: "lannoz", ambiance: "nuit",
      text: [
        "Elle le dit dans la maison, à voix haute, devant le mort, les femmes et le frère. Elle donne ses raisons, honnêtement : le bord net, la tourbe, les ongles. Elle ajoute que la chute peut faire la même chose. Personne n'entend la deuxième phrase. Le premier mot a suffi. Une vieille femme pousse un cri aigu, qui monte, qui ne finit pas, et les autres la suivent, et la plainte reprend, plus haut, plus vite, avec un mot nouveau dedans que Victorine ne comprend pas et qu'elle n'a pas besoin de comprendre.",
        "Gwendal se lève. Il passe devant elle sans la regarder, le louchet à la main, et il sort dans la nuit. Tifenn ne le retient pas. Elle reste près de la porte, très droite, les bras croisés, le visage aussi blanc qu'au bout de la cale. Elle dit à Victorine, sans tourner la tête : « Merci. » Il y a, dans ce mot, quelque chose que Victorine entendra longtemps, la nuit, à bord, sans réussir à décider si c'était de la gratitude ou une accusation.",
        "La Cormorane appareille le lendemain à midi. Au moment où l'on vire au cabestan, on entend, très loin sur la lande, des cris d'hommes. Puis plus rien. Victorine regarde l'île s'enfoncer dans la bruine, longue et brune comme un dos de bête couchée, jusqu'à ce qu'il n'en reste qu'une ligne. Elle n'a jamais su lequel des deux.",
      ],
      choices: [{ label: "Retourner à bord", fx: { quest: "WC" }, back: "A3x_lannoz" }] },
    WC_chute: { act: "III", title: "Le louchet", place: "lannoz", ambiance: "nuit",
      text: [
        "Elle le dit dans la maison, à voix haute, devant le mort, les femmes et le frère. Elle parle de la pierre plate au fond de la tranchée, de l'éclat gris, des genoux déchirés d'un homme qui a essayé de remonter. Elle ne parle pas du bord net. Elle sait qu'elle ment par omission, et qu'elle le fait proprement, en bonne praticienne, comme on coupe un membre. Les femmes se taisent. Personne ne pleure plus fort ni plus bas.",
        "Gwendal pose le louchet contre le mur. Il le pose doucement, comme une chose fragile. Ses épaules descendent d'un pouce. Puis il lève les yeux vers Victorine, et elle y voit, mêlés si étroitement qu'on ne saurait les séparer avec une pince, un soulagement immense et une honte de chien battu. Tifenn s'approche de lui et lui pose la main sur la nuque, comme on calme une bête. Elle regarde Victorine par-dessus la tête de son frère. Elle sait. Elle ne dit rien.",
        "À la veillée, le soir, quand Gwendal entre, les vieux crachent dans le feu. Le lendemain, à la cale, au moment où le canot pousse, la fille de Kerhuel, qui chante à la veillée, descend la grève en courant, s'arrête au bord de l'eau, et regarde Victorine avec une haine si pure qu'elle en paraît presque belle. La médecin pense que la vie d'un garçon doux vaut ce regard-là. Elle n'en est pas tout à fait sûre.",
      ],
      choices: [{ label: "Retourner à bord", fx: { quest: "WC" }, back: "A3x_lannoz" }] },
    WC_doute: { act: "III", title: "Le louchet", place: "lannoz", ambiance: "nuit",
      text: [
        "Elle le dit dans la maison, à voix haute, devant le mort, les femmes et le frère. Elle dit ce qu'elle a vu, tout, le bord net et la pierre plate, les ongles et les genoux, l'éclat gris. Elle dit qu'un louchet et une chute font la même plaie, et qu'aucun médecin au monde, ni à Morlenc ni ailleurs, ne pourrait dire lequel des deux, sur ce mort-là. Elle le dit lentement, deux fois, pour que la vieille femme qui traduit n'en perde rien.",
        "Personne n'est content. La plainte reprend, plus sourde, mécontente, comme une mer qui hésite. Gwendal regarde sa sœur. Tifenn réfléchit longtemps, debout près de la porte, avec ce visage de farine. Puis elle dit quelque chose dans la langue de Lannoz, et la vieille femme traduit : elle demande que les deux fils Penhoat viennent jurer sur le corps, demain, à l'aube, devant le recteur, qu'ils ne l'ont pas touché. « Si l'un des deux ne vient pas, dit Tifenn, nous saurons. Si les deux viennent, Dieu saura, et ce sera son affaire. »",
        "La Cormorane appareille avant l'aube du serment. Le recteur, qu'elle croise au bord de l'eau au milieu de ses ruches, lui dit que c'est la première fois en quarante ans qu'on demande un serment sur un corps, à Lannoz, plutôt qu'un louchet. Il dit que ça ne prouve rien. Il dit que c'est peut-être comme ça que les choses commencent, les bonnes et les autres.",
      ],
      choices: [{ label: "Retourner à bord", fx: { quest: "WC" }, back: "A3x_lannoz" }] },
  },
  extras: {
    people: {
      tifenn: { name: "Tifenn Drézen", aka: ["la fille du mort"], f: true, qui: "Fille d'un tourbier de Lannoz trouvé mort au fond d'une tranchée." },
    },
    quests: [
      { id: "WC", act: "III", kind: "annexe", title: "Le louchet", start: "WC_tifenn", doit: "colomba", echo: ["wc:coup", "wc:chute", "wc:doute"] },
    ],
  },
};
