// More of Lambrun on both sides of the night: the church dressed for the wedding, the stage door and its old-clothes
// man, the washerwoman Coquelin ruined, the cabin of the Hirondelle (morning, `second: false`); the banker at the
// buffet, the Grand Turk, the Harlequin's pockets, the neighbour seamstress, Clarisse's mother, the effects of the
// herb (night, `second: true`).
module.exports = {
  // ------------------------------------------------------------------ the morning
  A_eglise: { act: "I", title: "Saint-Brice parée", place: "clocher", second: false,
    text: [
      "L'église Saint-Brice sent l'encens froid, la cire neuve et la fleur d'oranger en tissu. On a tendu de blanc les piliers de la nef jusqu'à hauteur d'homme, et au-dessus, la pierre noire reprend ses droits, si bien que l'église a l'air d'une veuve qui aurait passé une robe de mariée par-dessus son deuil. Deux prie-Dieu de velours rouge attendent devant l'autel, côte à côte, comme deux accusés.",
      "Au premier rang, un petit homme en noir range sur une chaise des liasses de papiers timbrés, en les comptant à mi-voix : le notaire de Monsieur Coquelin, qui vérifie que tout est prêt pour midi, le contrat, les quittances, la dot. Il te voit, te prend pour un mendiant de carnaval, et te tend un sou sans lever les yeux. « Pour la noce, dit-il. Priez pour qu'elle ait lieu. Mon client déteste attendre, et il a les moyens de ses détestations. »",
      "Le curé, en surplis, arrange les fleurs de cire sur l'autel, et soupire à chaque fleur.",
    ],
    choices: [
      { back: "A_clocher" },
    ] },

  A_tiburce_nuit: { act: "I", title: "Ce que dit le sonneur", place: "clocher", second: false,
    text: [
      "« CE QUE T'AS FAIT ? » Tiburce se gratte la barbe, longtemps, comme pour y retrouver un souvenir tombé. « T'AS FRAPPÉ À MA PORTE À DEUX HEURES. AVEC UN DOMINO NOIR. T'AS DIT : CACHE-LA. J'AI CACHÉ. » Il hausse les épaules, ce qui chez lui ressemble à un éboulement. « APRÈS, T'ES REPARTI{E}. T'AVAIS L'AIR D'AVOIR UNE LISTE. »",
      "Il baisse la voix, ce qui ramène son cri au niveau d'une conversation ordinaire. « Et t'as dit : demain, je saurai plus rien. Je t'ai dit : c'est pas grave, moi non plus je sais jamais rien, et je vis très bien. »",
    ],
    choices: [
      { back: "A_clocher" },
    ] },

  A_cordiers: { act: "I", title: "La rue des Cordiers", place: "opera", second: false,
    text: [
      "Derrière l'Opéra, la rue des Cordiers est une ruelle noire et puante, encombrée de décors réformés : un château fort en toile peinte achève de pourrir contre un mur, une forêt de carton s'effeuille dans une flaque, une barque de théâtre s'est échouée sur des pavés. La petite porte des artistes, au milieu, est fermée par une chaîne.",
      "En face, dans une échoppe de fripier grande comme une armoire, un vieil homme en bonnet grec trie des défroques de la nuit, qu'on lui vend au poids. Il te regarde. « Encore toi ? Tu veux me revendre le sac ? Je te l'ai vendu quatre sous à cinq heures moins le quart, je te le reprends pour deux. C'est le cours. »",
      "Il retourne à ses chiffons. « Tu m'as réveillé, à cinq heures moins le quart. Tu sentais l'apothicaire. Tu avais un cadenas sur la tête, comme un coffre. J'ai pensé : en voilà un qui tient à ses idées. »",
    ],
    choices: [
      { back: "A_opera" },
    ] },

  A_gendre: { act: "I", title: "La mère Gendre", place: "lavoir", second: false,
    text: [
      "Dans un coin du lavoir, à l'écart, une vieille femme bat le linge plus fort que les autres, comme si elle frappait quelqu'un. On t'apprend que c'est la mère Gendre, qui avait son propre lavoir au canal des Tanneurs, l'hiver dernier, et que Monsieur Coquelin le lui a fait saisir pour trois écus de dette. Elle bat à présent le linge chez les autres, à genoux, à soixante-dix ans.",
      "Elle lève la tête quand tu t'approches, et te regarde, ta larme, ta rose. « Ah, dit-elle, tu viens voir la ruine du quartier. » Puis, plus bas : « Un écrivain public m'a écrit une lettre au juge, l'hiver dernier. Une lettre si belle que le juge l'a fait afficher pour se moquer, et que c'est lui qui a eu l'air bête. J'ai perdu le lavoir quand même. Mais j'ai gagné la lettre. Je la garde sous mon matelas. » Elle reprend son battoir. « C'était pas toi, des fois ? T'as les mains de quelqu'un qui écrit. »",
    ],
    choices: [
      { back: "A_lavoir" },
    ] },

  A_cabine: { act: "I", title: "La cabine de l'Hirondelle", place: "quai", second: false,
    text: [
      "Rosso te fait descendre par une échelle dans le ventre de l'Hirondelle, où l'on respire le savon, le goudron et la cale. Au fond, sous le pont arrière, une cabine grande comme une armoire, avec deux couchettes superposées, une cuvette d'étain, un hublot rond où passe une lumière verte, et sur la couchette du bas, une couverture neuve, pliée en carré.",
      "« Deux places, dit Rosso. Deux couchettes. La couverture, c'est le Pierrot de cette nuit qui l'a apportée. Il a dit : elle aura froid, elle a toujours froid. » Il te regarde de côté. « Je n'ai rien demandé. Je ne demande jamais rien. Mais tu parles comme quelqu'un qui connaît la personne qui aura froid. »",
    ],
    choices: [
      { back: "A_quai" },
    ] },

  A_cocher: { act: "I", title: "Le cocher de la calèche blanche", place: "ardel", second: false,
    text: [
      "Le cocher de la calèche blanche est assis sur son siège, en livrée blanche, avec des rubans blancs à son chapeau, et il a l'air d'un croque-mort qui se serait trompé de couleur. Il fume en regardant ses chevaux, qui mâchonnent leur cocarde.",
      "« Trois noces, que j'ai menées, avec cette calèche, dit-il sans que tu lui demandes rien. La première, la mariée a pleuré. La deuxième, c'est le marié. La troisième, c'est le père, à cause de la dot. Celle-là, s'il y a une mariée, ce sera la quatrième. » Il souffle sa fumée. « Moi, je dis : on attelle, on attend, on verra bien qui pleure. »",
    ],
    choices: [
      { back: "A_ardel" },
    ] },

  // ------------------------------------------------------------------ the night
  S_voisine: { act: "II", title: "La costumière", place: "echoppe", second: true,
    text: [
      "Sous l'arcade voisine, la vieille Adélaïde, costumière, coud des paillettes sur un corsage de Colombine à la lueur d'une chandelle, des épingles plein la bouche, si bien qu'elle parle comme un hérisson. « Tu vas au bal ? Toi ? » Elle crache ses épingles une à une dans une soucoupe. « Ça fait cinq ans que tu me dis que tu n'iras plus jamais au bal. »",
      "Elle te regarde mieux. « Tu as une tête à aller à autre chose qu'au bal. » Elle fouille dans une boîte, et te tend une bobine de ruban de soie noire, épaisse et dure, de celle dont on tresse les cordons de masques. « Tiens. Ton cordon est pourri, il lâchera au premier tour de valse. Celui-là, tu pourrais pendre un homme avec. » Elle remet ses épingles dans sa bouche. « Ne pends personne. »",
    ],
    choices: [
      { back: "S_veille" },
    ] },

  S_coquelin_bal: { act: "II", title: "Le banquier au buffet", place: "opera", second: true,
    fx: { meet: ["coquelin"] },
    text: [
      "Monsieur Médard Coquelin se tient au buffet, sans masque, un petit pâté dans chaque main, et il les mange avec la régularité d'un métronome. Soixante-huit ans, un habit noir de bonne coupe, un visage gris et lisse comme une pierre de rivière, et des yeux pâles qui calculent le prix de tout ce qu'ils regardent, y compris le pâté.",
      "Tu le complimentes sur sa fiancée. Il hoche la tête. « Mademoiselle Ardel est une jeune personne de grand avenir, dit-il. Je le lui assure. » Il avale. « On dit en ville que je l'achète. C'est faux. On achète ce qu'on consomme. Moi, je place. Une savonnerie sans dettes, une épouse de dix-neuf ans, un oncle qui me doit sa liberté : c'est un placement à trois intérêts. »",
      "Il prend un troisième pâté. « Ce que je ne supporte pas, voyez-vous, Pierrot, c'est l'inexactitude. Un homme qui triche sur ses comptes, je le ruine. Un homme qui les tient bien, je l'épouse, ou j'épouse sa nièce. » Il s'essuie les doigts. « Bonne nuit. Dansez. Vous avez l'âge de perdre votre temps. »",
    ],
    choices: [
      { back: "S_bal" },
    ] },

  S_grand_turc: { act: "II", title: "Le Grand Turc", place: "opera", second: true,
    text: [
      "Le maître de cérémonie se repose entre deux quadrilles derrière un pilier, en Grand Turc, le turban de travers, une bouteille de champagne à la main, qu'il boit au goulot avec une dignité ottomane. Il te tend la bouteille. Tu bois.",
      "« La loterie, à minuit, dit-il. Le grand domino noir de velours, à capuchon, avec son loup. Vingt écus chez le tailleur. Le gagnant sera celui qui devinera ma devinette. » Il cligne de l'œil. « Je l'ai écrite moi-même. Tout le monde la trouvera trop facile, et personne ne la trouvera, parce que la réponse est sur le visage de tout le monde. Les gens ne regardent jamais leur propre visage, au bal. C'est pour ça qu'ils viennent. »",
    ],
    choices: [
      { back: "S_bal" },
    ] },

  S_lazare_carnet: { act: "II", title: "Le carnet de l'Arlequin", place: "opera", second: true,
    text: [
      "Lazare rit à une plaisanterie, la tête renversée, et sa manche à losanges bâille. Tes doigts y entrent et en ressortent, plus légers qu'une phalène, avec un petit carnet de bal en nacre. Tu l'ouvres derrière la colonne. Des noms de danses, des noms de femmes, des chiffres de pharaon. Et sur la dernière page, au crayon, d'une écriture penchée : *Coffre de G. : la noce. 2 · 4 · 0 · 3.*",
      "Un valet qui sait le code du coffre de son maître. Un valet qui l'écrit dans son carnet de bal, entre deux polkas. Lazare sert Gaspard Ardel ; Lazare se sert aussi, à l'occasion. Tu remets le carnet dans sa manche à la faveur d'une autre plaisanterie. Il rit toujours.",
    ],
    choices: [
      { back: "S_bal" },
    ] },

  S_lazare_poches: { act: "II", title: "Les doigts dans la manche", place: "opera", second: true,
    text: [
      "Tes doigts entrent dans sa manche à losanges et rencontrent une main, qui se referme sur ton poignet, doucement, fermement, comme un bracelet de fer.",
      "« Pierrot, dit Lazare, sans cesser de sourire. On ne fait pas les poches d'un valet. Il n'y a jamais rien dedans, et ce qu'il y a appartient à quelqu'un d'autre. » Il te lâche, et te tapote la joue de carton. « Je te garde à l'œil, maintenant. Tu m'intéresses. »",
    ],
    choices: [
      { back: "S_bal" },
    ] },

  S_mere_clarisse: { act: "II", title: "Le portrait au pastel", place: "clocher", second: true,
    text: [
      "Clarisse sort de sous son domino un petit portrait au pastel, dans un cadre d'écaille grand comme une main : une femme rousse, au nez pointu, qui rit à quelqu'un hors du cadre. « Ma mère, dit-elle. Elle était de Gênes. Elle est morte quand j'avais six ans. Mon père a fait faire ce portrait de mémoire, après, par un peintre qui ne l'avait jamais vue. Il lui a dit : elle riait. Le peintre l'a fait rire. Le portrait ressemble à une inconnue, et c'est elle, trait pour trait. »",
      "Elle le range. « Je l'emporte. C'est tout ce que j'emporte de cette maison, avec la brosse en écaille de ma grand-mère et une chemise de nuit. Le reste, mon oncle peut le jouer. »",
    ],
    choices: [
      { back: "S_chambre_nuit" },
    ] },

  S_cabine_nuit: { act: "II", title: "La cabine", place: "quai", second: true,
    text: [
      "Rosso te fait descendre dans le ventre de l'Hirondelle, une lanterne à la main. La cabine est sous le pont arrière, grande comme une armoire, avec deux couchettes superposées et un hublot noir. Il fait froid comme dans une cave. Tu poses sur la couchette du bas la couverture de laine que tu as prise chez toi, pliée en carré. « Elle aura froid, dis-tu. Elle a toujours froid. »",
      "Cette certitude te vient d'un lendemain que tu as déjà oublié. Rosso te regarde de côté, et garde ses questions.",
    ],
    choices: [
      { back: "S_recu_nuit" },
    ] },

  S_ferrat_effets: { act: "II", title: "Ce que fait l'herbe", place: "herbes", second: true,
    text: [
      "« Ce qu'elle fait exactement ? » Ferrat fait tourner la fiole dans la lumière de la chandelle. « Le pavot vous endort. La datura efface ce qu'il y avait avant le sommeil, comme une éponge sur une ardoise. Vous vous réveillerez avec votre nom, votre métier, votre alphabet, et un grand trou à la place de cette nuit. » Il pose la fiole. « Il en revient parfois des morceaux, avec des sels, une odeur, un rire. Le reste revient dans huit jours. Ou jamais. Je n'ai jamais su lequel. »",
      "Il te regarde par-dessus ses lunettes. « Vous êtes sûr{e} ? On peut perdre une très belle nuit, avec ça. — C'est pour ça, dis-tu. Une nuit qu'on ne sait pas, on ne peut pas la vendre. »",
    ],
    choices: [
      { back: "S_ferrat_nuit" },
    ] },
};
