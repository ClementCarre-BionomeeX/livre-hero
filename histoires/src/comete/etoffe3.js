// More rooms and more voices, for both readings: the hives, the globes, the lens, the reasons for refusing to sell,
// Lise's test of the three clocks, the cistern under the tower, the view of the town at one o'clock, the trapdoor of
// the service stair. And for the second reading: what Brother Cosme says of Sérac's death, and a lock that changes.
module.exports = {
  // ------------------------------------------------------------------ act I
  A_ruches: { act: "I", title: "Les ruches", place: "ermitage",
    text: [
      "Les six ruches dorment sous leurs capuchons de paille, alignées contre le rocher, à l'abri du vent, comme six moines qui se seraient endormis debout pendant l'office. Frère Cosme les a toutes baptisées, et il te les présente l'une après l'autre en posant la main sur la paille : Benoît, Scholastique, Bernard, Claire, Colomban.",
      "La sixième est la plus vieille, une ruche de paille tressée, noircie, rapiécée de partout. « Anselme, dit-il avec tendresse. Elle vient de lui. La plus douce. Elle n'a jamais piqué personne. »",
      "Il colle son oreille contre la paille et ferme les yeux. « Écoutez. » Tu écoutes. De l'intérieur monte un bourdonnement très bas, continu, comme une prière qu'on dirait sous terre. « Elles tremblent pour tenir la reine au chaud. Tout l'hiver. Celles du bord meurent de froid, et d'autres prennent leur place. Personne ne leur a jamais expliqué pourquoi. Elles le font quand même. »",
      { second: true, text: "Il rouvre les yeux et te sourit, de son sourire le plus doux. Tu lui souris en retour. Cette nuit, il montera à minuit, et à deux heures et demie il aura sur le dos quatre registres noués dans une couverture. Tu regardes ses mains sur la paille : de bonnes mains, larges, calleuses, patientes." },
    ],
    choices: [
      { back: "A_ermitage" },
    ] },

  S_cosme_serac: { act: "I", title: "Comment est mort Maître Sérac", place: "ermitage", second: true,
    text: [
      "Tu demandes à Frère Cosme, l'air de rien, comment est mort le premier maître de la Veille.",
      "« Le cœur, dit-il aussitôt. Frère Anselme l'a veillé. Il me l'a raconté cent fois, à la fin, quand il ne racontait plus que ça. » Il sourit. « Il disait que le maître est tombé devant sa lunette au moment où la comète touchait la Lyre, et qu'il avait le visage tout rose, comme un homme qui aurait couru dans le froid. Il disait que Dieu l'avait pris par la main au moment exact qu'il avait choisi. Une belle mort. »",
      "Il se tait, les yeux sur la Veille. « Anselme disait aussi que c'était un signe. Qu'un homme qui veut mettre le ciel en colonnes, le ciel finit par le reprendre. » Il hausse ses épaules rondes. « Anselme voyait des signes partout. »",
      "Tu regardes ses mains, posées sur son tablier. Tu ne dis rien.",
    ],
    choices: [
      { back: "A_ermitage" },
    ] },

  // ------------------------------------------------------------------ act II
  B_globes: { act: "II", title: "Les globes", place: "veille",
    text: [
      "Les globes occupent tout un côté de la grande salle : des terrestres, des célestes, des grands comme des tonneaux et des petits comme des pommes, montés sur des pieds de bois tourné, de cuivre, de fer. Les plus anciens sont jaunis comme de vieilles dents, et les mers y ont des monstres, les terres des rois assis sur des trônes, le ciel des figures nues qui se poursuivent d'une constellation à l'autre avec des intentions évidentes.",
      "Tu en fais tourner un, du bout du doigt. Il grince. Le ciel entier passe sous ta main, avec ses bêtes, ses héros, ses harpes, et pas une seule comète.",
      "« On ne met pas les comètes sur un globe, tonne le maître depuis son fauteuil, sans lever les yeux. Elles ne restent pas en place. C'est la seule chose qu'elles aient en commun avec les porteurs. Et ne faites pas tourner Ptolémée : il a le mal de mer. »",
    ],
    choices: [
      { back: "B_salle" },
    ] },

  B_v_lunette: { act: "II", title: "La lunette", place: "veille",
    text: [
      "« Ma lunette ? » Ses yeux s'allument comme ceux d'un vieux chat à qui l'on parle de souris. « Huit pieds de long. Un objectif de quatre pouces, taillé ici, dans cette tour, par Maître Sérac, en l'an 309, sur un verre de Venise qui a coûté le prix d'une maison. On n'a jamais fait mieux. On ne fera jamais mieux. Le Collège a voulu m'en offrir une neuve, il y a vingt ans, achetée à des Hollandais. Je l'ai fait jeter par la fenêtre. Elle a fait de très jolis éclats, au soleil. »",
      "Il pose sa loupe. « Avec cette lunette, je vois des étoiles que le Grand Chantre ne verra jamais, même au paradis, où l'on m'assure qu'il a réservé une place près de la fenêtre. »",
    ],
    choices: [
      { back: "B_v_parler" },
    ] },

  B_v_tables: { act: "II", title: "Pourquoi ne pas vendre", place: "veille",
    text: [
      "« Vendre ? » Le mot le fait se redresser dans son fauteuil comme une gifle. « On ne vend pas les Tables. On ne vend pas cinquante ans de nuits. On ne vend pas trois mille pages où il n'y a pas une erreur, pas une ! sauf celles de Lise, que j'ai corrigées. »",
      "Il se calme d'un coup, ce qui est plus inquiétant. « Le Prince veut les afficher sur la porte de la cathédrale. Pour humilier le Chapitre. C'est une bonne raison, je ne dis pas. C'est même une excellente raison. Mais je les donnerai le jour où quelqu'un me les demandera pour qu'elles soient justes, et pas pour qu'elles soient utiles. » Il reprend sa loupe. « Ce jour-là n'est pas encore venu. Il ne viendra peut-être jamais. J'ai le temps : je suis immortel jusqu'à preuve du contraire. »",
    ],
    choices: [
      { back: "B_v_parler" },
    ] },

  B_epreuve: { act: "II", title: "L'épreuve des pendules", place: "veille", puzzle: "p_pendules",
    text: [
      "Tu demandes à Lise si elle a besoin d'aide. Elle te considère par-dessus ses lunettes d'acier, avec la méfiance d'un banquier à qui un inconnu propose de compter sa caisse.",
      "« Peut-être, dit-elle. Le maître veut que l'heure de cette nuit soit juste à la seconde. Si vous savez compter, je vous mettrai aux pendules. Si vous ne savez pas, je vous mettrai à la cuisine. » Elle prend une feuille et écrit dessus, sans hésiter, une question qu'elle a dû poser à d'autres.",
    ],
    choices: [
      { back: "B_cabinet" },
    ] },

  B_epreuve_ok: { act: "II", title: "Aux pendules", place: "veille",
    fx: { flag: "lise:estime" },
    text: [
      "Lise reprend la feuille, lit ta réponse, et hoche la tête une fois, sèchement, comme on donne un coup de tampon.",
      "« Bien. Vous avez fait le calcul au lieu de deviner. C'est rare. Les gens devinent, en général, puis ils calculent pour se donner raison. » Elle te tend une clef de laiton. « Les pendules sont à vous, sous la coupole. Vous les remonterez à minuit. Ne laissez pas le maître y toucher : il les règle à l'oreille, et il a l'oreille d'un sourd qui se croit musicien. »",
    ],
    choices: [
      { back: "B_cabinet" },
    ] },

  B_citerne: { act: "II", title: "La citerne", place: "veille",
    text: [
      "Tobie lève une trappe dans le sol de la cuisine et descend une échelle sans regarder où il pose les pieds. Tu le suis, plus prudemment, dans une cave ronde où la lanterne tremble.",
      "La citerne occupe tout le fond de la tour : un bassin de pierre noire, rond, sans fond visible, où l'eau dort sans une ride. La lanterne s'y reflète tout entière, et ton visage avec, très pâle, très loin en dessous, comme quelqu'un qui te regarderait du fond d'un puits avec l'intention de ne jamais remonter. Il fait plus froid ici que dehors. Les murs suintent. Une goutte tombe quelque part, toutes les dix secondes, avec la régularité d'une pendule.",
      "Contre le mur de l'ouest, un souffle d'air passe entre deux pierres et fait danser la flamme. Tobie y pose la main à plat, comme on caresse un chien. « C'est le bas de l'escalier, dit-il. L'air monte par là jusqu'en haut. Quand il y a du vent, la tour siffle. Lise croit que c'est le diable. Le maître croit que c'est Lise. »",
    ],
    choices: [
      { back: "B_tour" },
    ] },

  // ------------------------------------------------------------------ act III, shared
  C_meurtriere: { act: "III", title: "La meurtrière de l'ouest", place: "veille", back: true,
    text: [
      "La meurtrière de l'ouest est une fente dans le mur épais, large comme une main, où le froid entre en sifflant. Tu y colles ton visage.",
      "Tout en bas, très loin, au fond de la nuit, Salvagnes : une poignée de braises dans un creux noir. On distingue le pont, les deux tours de la cathédrale, et entre les deux tours, une lumière qui ne bouge pas. Le Chapitre veille. Toute la nuit, les chanoines prient pour que le ciel moissonne, et la petite lumière jaune brûle, obstinée, au milieu de la ville endormie, comme un œil qui attend qu'on lui donne raison.",
      "Une cloche sonne, en bas, une heure. Le son met un temps infini à monter jusqu'ici, aminci, fêlé, et il arrive quand on ne l'attendait plus, comme une nouvelle d'un pays où l'on ne retournera pas.",
      { second: true, text: "La première fois, tu n'avais pas remarqué cette lumière. À présent, tu ne vois plus qu'elle." },
    ] },

  C_dicte: { act: "III", title: "La dictée", place: "veille", back: true,
    text: [
      "Le maître dicte sans quitter l'oculaire, cambré, une main dans le dos, et sa voix tombe du haut de la lunette comme d'une chaire. « Une heure seize. Le noyau à deux minutes d'arc de la ligne. La queue se courbe, Lise, notez qu'elle se courbe, et notez que je l'avais écrit en l'an 351. »",
      "Lise note. Sa plume court, s'arrête, repart, sans jamais l'attendre ni le devancer, comme deux danseurs qui ont répété toute une vie et qui ne se regardent plus.",
      "« Une heure dix-sept. » Un silence. « Lise. » Encore un silence. « Vous écrivez plus vite que moi, je crois. » Elle ne répond pas, ne lève pas les yeux, mais sa plume reste suspendue au-dessus de la page une seconde de trop.",
      { if: { has: "lise:estime" }, text: "Lise se tourne vers toi et te fait signe, du bout de sa plume, vers les pendules. Tu vas les vérifier. Elles sont justes. Tu as la fierté ridicule et délicieuse d'un enfant qui a eu le droit de toucher à l'horloge de l'église." },
    ] },

  // ------------------------------------------------------------------ act III, the first reading after three o'clock
  C_trappe: { act: "III", title: "La trappe", place: "veille",
    text: [
      "Tu montes l'escalier de service avec ta lanterne, marche après marche, dans une odeur de pierre froide et de toile d'araignée. Il tourne serré, si étroit que tes épaules frôlent les deux murs. Au deuxième tour, une petite fenêtre carrée, ouverte, bat dans le vent contre son montant : celle qu'a entendue le capitaine.",
      "Tout en haut, une trappe de bois. Tu la pousses de la tête. Elle s'ouvre sur le noir et sur une odeur de papier. Tu es dans le placard du cabinet de Lise, entre deux piles de registres de comptes. Par la porte du placard, entrouverte, tu vois le coffre, ouvert, vide, et la porte du cabinet qui pend sur un seul gond.",
      "On pouvait donc entrer dans le cabinet, ouvrir le coffre, et repartir par le cœur de la tour, sans passer par aucune porte, sous les pieds de tout le monde. Il suffisait de connaître la trappe, et l'année.",
    ],
    choices: [
      { back: "C_apres" },
    ] },

  C_lise_apres: { act: "III", title: "La dernière ligne", place: "veille",
    text: [
      "Lise n'a pas lâché sa plume. Elle est assise sur son tabouret, à côté de la lunette, le registre de la nuit ouvert sur les genoux, et elle regarde la dernière ligne.",
      "*Trois heures zéro minute. Elle touche.*",
      "« Il avait raison, dit-elle d'une voix parfaitement calme. À la minute. Cinquante ans de calculs, et à la minute. » Elle trempe sa plume, et, d'une main qui ne tremble pas, elle écrit sous la dernière ligne : *Observateur : O. Vellérin. Mort à son poste.* Elle sèche l'encre avec le sable, souffle dessus, referme le registre.",
      "Puis elle pose le front sur la couverture du registre, et elle reste ainsi, sans bruit.",
    ],
    choices: [
      { back: "C_apres" },
    ] },

  // ------------------------------------------------------------------ act II and III, the second reading
  S_lise_code: { act: "II", title: "Une autre année", place: "veille", second: true,
    fx: { flag: "coffre:change" },
    text: [
      "Tu dis à Lise que la combinaison du coffre n'a plus rien de secret. N'importe qui ayant lu une tombe peut la trouver.",
      "Elle rougit, ce qui chez elle a l'air d'un incident. « *Un enfant le trouverait.* Je le dis moi-même. » Elle se lève, va au cabinet, et tu entends les molettes tourner longtemps, avec des déclics nombreux et rageurs. Elle revient, les mains dans les poches de son tablier.",
      "« C'est fait. Une autre année. Une année que personne ici ne connaît, sauf moi. » Elle se rassoit. « Ne me demandez pas laquelle. Je ne vous la dirai pas, à vous non plus. Vous en savez déjà trop pour quelqu'un qui est arrivé{e} ce soir. »",
    ],
    choices: [
      { back: "B_salle" },
    ] },

  S_coffre_ferme: { act: "III", title: "La serrure qui résiste", place: "veille", second: true,
    fx: { flag: "tables:sauvees" },
    text: [
      "L'escalier de service débouche par une trappe dans le placard du cabinet. Par la fente de la porte du placard, tu vois Frère Cosme s'agenouiller devant le coffre et faire tourner les molettes : trois déclics. Il tire la poignée.",
      "Rien.",
      "Il recommence, plus lentement, en remuant les lèvres. Trois déclics. Il tire. Rien. Il essaie une autre année, puis une autre, puis une autre encore, de plus en plus vite, et ses mains douces, qui couvraient les ruches de paille au coucher du soleil, se mettent à trembler sur le cuivre.",
      "Au-dessus, sous la coupole, une pendule sonne la demie. Le frère se relève d'un coup, comme un homme qui entend son nom. Il brouille les molettes, retourne au placard à tâtons, passe à une coudée de toi, et redescend dans le noir. Il sent le miel, la sueur, et l'amande.",
      { if: { not: { has: "tables:cachees" } }, text: "Les Tables dorment dans le coffre, derrière une année que Lise est seule au monde à connaître." },
      { if: { has: "tables:cachees" }, text: "Il a tremblé devant un coffre vide. Les Tables dorment ailleurs, au cœur de la tour, parmi les trésors de Tobie." },
    ],
    choices: [
      { label: "Remonter sous la coupole", fx: { until: 3 }, to: "S_trois" },
    ] },
};
