// Act III, lot III1: the start of act III at the commanderie, the road down the Isarde (r_isarde, region isarde and its
// EIII_ events), Merle-sur-Isarde (arrival and hub of the act), the road to Hautmont and the camp of Aldaran (king Aldric,
// Nerys, Vendrel, the constable Hugues de Vaux, the mercenaries, banquet and council of war), side quests III_deserteur,
// III_nerys and III_fleches.
var R = "@route";
var P = {};

// ------------------------------------------------------------------ the start of act III, at the commanderie
Object.assign(P, {
  III_route: { act: "III", title: "Les nouvelles du sud", place: "commanderie", backName: "la cour de la commanderie",
    fx: { flag: "acte:III", ep: ["seance", 800] },
    text: [
      "Les premiers froids sont tombés sur le Val d'Anse pendant que tu te remettais de la Gorge-Blanche. Le matin, l'abreuvoir de la cour porte une peau de glace qu'un frère convers casse au maillet, et les chevaux soufflent de la fumée. Dans le cloître, on ne parle plus que d'une chose, à voix basse, comme d'une maladie qui serait entrée par la porte de derrière : la guerre.",
      "La déclaration du roi Aldric n'a surpris personne : on voit venir de loin les guerres que personne ne veut avoir commencées. Une colonne d'Aldaran a passé l'Isarde au gué de Gaudre pour « protéger les salines » ; Vel-Orin a répondu en brûlant deux ponts et en faisant venir des arbalétriers de ses villes du sud. Depuis trois semaines, les deux armées se regardent par-dessus la rivière, et entre elles il y a des villages, des moulins, des gens qui n'ont rien demandé à personne.",
      { if: { is: { embuscade: "gagnee" } }, text: "On te regarde autrement, depuis que tu es revenu{e} de la Gorge-Blanche en tenant le terrain. Les jeunes frères se taisent quand tu passes ; les vieux te saluent d'un hochement de tête. Tu préférerais l'inverse." },
      { if: { is: { embuscade: "perdue" } }, text: "Tu as encore au flanc le souvenir de la Gorge-Blanche, une raideur qui se réveille au premier pas du matin. Tu as perdu là-bas plus que du sang, et les frères qui t'ont vu{e} revenir le savent. Personne n'en parle devant toi." },
      { if: { is: { embuscade: "parlee" } }, text: "Les mots de Veyra, dans le défilé, te reviennent la nuit plus souvent que tu ne le voudrais. Tu n'as dit à personne, ici, tout ce qu'elle t'a dit. Tu n'es pas sûr{e} de savoir pourquoi." },
      { if: { any: [{ is: { jeton: "ordre" } }, { is: { jeton: "deux" } }] }, text: "Un frère vient te chercher au réfectoire : le sénéchal Brann te demande dans la salle des Cinq Mains." },
      { if: { is: { jeton: "cercle" } }, text: "Un garçon en manteau bleu, crotté jusqu'aux genoux, t'attend à la porterie. Il a fait la route de Ferrance d'une traite, et il ne veut remettre son pli qu'à toi." },
      { if: { not: { any: [{ is: { jeton: "ordre" } }, { is: { jeton: "deux" } }, { is: { jeton: "cercle" } }] } }, text: "Personne ne t'a rien demandé, et c'est peut-être cela le plus étrange. L'Ordre te laisse le gîte et le couvert, poliment, comme on les laisse à un hôte dont on attend qu'il parte. À la porterie, depuis l'aube, un batelier attend qu'on veuille bien l'écouter." },
    ],
    choices: [
      { label: "Rejoindre Brann dans la salle des Cinq Mains", big: true, hide: { not: { any: [{ is: { jeton: "ordre" } }, { is: { jeton: "deux" } }] } }, to: "III_mission_ordre" },
      { label: "Ouvrir le pli du Cercle", big: true, hide: { not: { is: { jeton: "cercle" } } }, to: "III_mission_cercle" },
      { label: "Aller écouter le batelier de la porterie", big: true, hide: { any: [{ is: { jeton: "ordre" } }, { is: { jeton: "deux" } }, { is: { jeton: "cercle" } }] }, to: "III_mission_seul" },
    ] },

  III_mission_ordre: { act: "III", title: "La salle des Cinq Mains", place: "commanderie",
    fx: { item: "III_ordre_mission", meet: "brann", fac: { ordre: 5 }, flag: "IIIA:mediateur" },
    text: [
      "Brann t'attend debout sous les cinq mains de pierre, les poings sur la table, une carte de l'Isarde dépliée devant lui et tenue aux coins par des chandeliers. Il ne te fait pas asseoir. Il ne s'assied pas non plus. Il a l'air d'un homme qui n'a pas dormi, et qui ne compte pas le faire avant longtemps.",
      "« Aldaran et Vel-Orin vont se battre au gué de l'Isarde avant la Saint-Clément, dit-il. Ça, je ne peux pas l'empêcher. Mais l'Ordre a juré de rester hors des querelles des couronnes, et les deux couronnes nous le rappellent chaque fois que nous ouvrons la bouche. Il me faut quelqu'un qui porte le gant sans en avoir l'air. Quelqu'un que les deux camps écouteront parce qu'il ne leur demande rien. » Il pousse vers toi une lettre scellée de cire grise. « Médiateur. C'est le mot qu'on écrit. Ce que je te demande, c'est d'ouvrir les yeux. »",
      "Il pose le doigt sur la carte, au bord de la rivière, entre deux taches d'encre bleue et pourpre. « Merle-sur-Isarde. Un village de bateliers, juste entre les deux armées. Le curé m'écrit tous les huit jours ; ses lettres sont de plus en plus courtes. Tu partiras de là. Au nord, le camp d'Aldaran, sous Hautmont-le-Bas : le roi y est, malade, et son conseiller avec lui. » Il ne dit pas le nom du conseiller. Il a la bouche qui se ferme dessus.",
      { if: { given: "cloche" }, text: "« La Cloche est au chapitre, ajoute-t-il, plus bas. On la bénit chaque matin. Je n'oublie pas qui me l'a apportée. »" },
      { if: { relic: "cloche" }, text: "Son regard descend vers ta besace, là où tu portes la Cloche d'Ivo, et y reste un moment. Il ne dit rien. Il n'a pas besoin de le dire." },
      { if: { is: { jeton: "deux" } }, text: "Puis, en te tendant la lettre : « On m'a dit que tu portes aussi un jeton d'os du Cercle. Je ne te demande pas pourquoi. Je te demande seulement de te souvenir, là-bas, de quel côté de la table tu t'assieds. »" },
      { if: { has: "passe:ordre" }, text: "Il te regarde un moment, puis regarde ta main droite, comme s'il cherchait le gant gris que tu y as porté trois ans. « Tu as gardé des routes où il ne passait personne, dit-il. Celle-ci, il y passe tout le monde. Ça te changera. »" },
    ],
    choices: [
      { label: "« Et si je trouve, là-bas, que l'un des deux camps a raison ? »", to: "III_mission_ordre_raison" },
      { label: "Prendre la lettre et aller préparer le départ", big: true, to: "III_depart" },
    ] },

  III_mission_ordre_raison: { act: "III", title: "Ce que Brann ne dit pas", place: "commanderie",
    text: [
      "Brann a un rire bref, sans joie, un rire qui ne monte pas jusqu'aux yeux. « Les deux ont raison, dit-il. C'est ce qui rend la chose si sale. Aldaran a peur pour ses salines et pour sa vieille mine, Vel-Orin a peur pour son commerce et ses routes. Chacun a de bonnes raisons de croire que l'autre veut l'étrangler. » Il roule la carte d'un geste sec. « Ce que je voudrais savoir, moi, c'est qui leur a donné ces raisons. Et qui paie. »",
      "Il hésite. C'est la première fois que tu le vois hésiter. « Tu entendras parler d'une mine, au camp d'Aldaran. La mine d'Aldar. Si on t'en parle, écoute. Ne pose pas de questions. Écoute. »",
      "Il ne t'en dira pas plus, et tu le sais avant même d'essayer. Il te raccompagne jusqu'à la porte de la salle, et il reste sur le seuil, sous les cinq mains, le visage dans l'ombre.",
    ],
    choices: [{ label: "Aller préparer le départ", big: true, to: "III_depart" }] },

  III_mission_cercle: { act: "III", title: "Le pli de Maître Corbin", place: "commanderie",
    fx: { item: "III_lettre_corbin", fac: { cercle: 5 } },
    text: [
      "Le garçon en manteau bleu te tend le pli comme on se débarrasse d'une braise, puis il va s'asseoir sur le banc de la porterie et s'endort presque aussitôt, la tête contre le mur. Le cachet est celui de l'Athénée : un cercle brisé, dans une cire bleu sombre. L'écriture de Maître Corbin est petite, penchée, pressée.",
      "*« Le Cercle n'a pas d'armée et n'en veut pas. Mais une guerre au pied de la Fenne n'est pas une affaire de couronnes : c'est une affaire de terre remuée, de morts qu'on enterre mal, de puits qu'on empoisonne. Va à Merle-sur-Isarde, puis aux deux camps. Observe. Écris. On te donnera, sur présentation de ce billet, l'entrée des archives et des chancelleries qui respectent encore le savoir, ce qui en fait peu. Ne prends parti pour personne : le Cercle te le reprocherait, et moi davantage. C. »*",
      "Plus bas, d'une autre encre, ajouté après coup : *« On dit qu'une ancienne de l'Ordre vend des nouvelles aux deux armées. Si tu la croises, souviens-toi qu'elle ne travaille pas pour nous. Elle croit que si. »*",
      { if: { has: "passe:cercle" }, text: "Tu reconnais les abréviations des copistes, les petits traits sous les mots qu'il faudra recopier à part. Corbin t'écrit comme on écrit à quelqu'un de la maison. Ce n'est pas tout à fait un compliment : c'est une laisse." },
    ],
    choices: [
      { label: "Réveiller le garçon et lui demander ce qu'il a vu en chemin", to: "III_mission_cercle_garcon" },
      { label: "Aller préparer le départ", big: true, to: "III_depart" },
    ] },

  III_mission_cercle_garcon: { act: "III", title: "Le coursier", place: "commanderie",
    text: [
      "Il se réveille en sursaut et met un moment à savoir où il est. Il s'appelle Odilon, il a quinze ans, et il porte les plis du Cercle depuis le printemps parce que son père en avait une dette. Il boit l'eau que tu lui tends d'une traite.",
      "« J'ai pris par Saint-Fargeau, à cause des patrouilles, dit-il. Sur la route de l'Isarde, ils pendent les gens aux carrefours. Pas des soldats. Des gens. Ils leur mettent une planche sur la poitrine avec un mot dessus, et comme personne ne sait lire, personne ne sait ce qu'ils ont fait. » Il s'essuie la bouche. « Et à Merle, il y a des enfants qui ramassent les flèches sur le pré, la nuit, pour les revendre. Ils m'en ont proposé une botte. »",
      "Il se rendort avant que tu aies fini de le remercier.",
    ],
    choices: [{ label: "Aller préparer le départ", big: true, to: "III_depart" }] },

  III_mission_seul: { act: "III", title: "Le batelier de la porterie", place: "commanderie",
    text: [
      "C'est un homme sec et noueux, de ceux qui ont passé leur vie à pousser une perche, avec des avant-bras couverts de vieilles brûlures de corde. Il tient son bonnet à deux mains. Il s'appelle Bastien, il est passeur à Merle-sur-Isarde, et il a marché quatre jours pour demander à l'Ordre de la Main de faire quelque chose.",
      "« On est entre les deux, dit-il. Les bleus d'Aldaran sur la colline, les pourpres de Vel-Orin dans l'abbaye, et nous au milieu, dans l'eau. Ils viennent prendre le grain, les uns le lundi, les autres le jeudi. Ils prennent les garçons aussi. Le curé dit que l'Ordre a juré de protéger les petites gens contre ce qui monte de la Brèche. » Il tord son bonnet. « Ce qui nous arrive ne monte pas de la Brèche. Mais ça nous tue pareil. »",
      "Le frère portier, derrière lui, te fait un signe navré : le sénéchal a déjà répondu, poliment, que l'Ordre ne se mêle pas des querelles des couronnes. Bastien repartira demain matin les mains vides. À moins que quelqu'un ne reparte avec lui.",
      { if: { has: "passe:fui" }, text: "Tu connais ce visage-là. Tu l'as vu à Saint-Gilles-des-Prés, sur ceux qui restaient, quand tu es parti{e} sur la route avant que l'eau ne tourne. Tu n'as jamais su ce qu'ils étaient devenus. Tu n'as jamais demandé." },
    ],
    choices: [
      { label: "« Je viens avec vous. »", big: true, fx: { conf: { pip: 5, coliane: 5, aubin: 5 }, fac: { ordre: -5 } }, to: "III_depart" },
    ] },

  III_depart: { act: "III", title: "Le départ", place: "commanderie",
    text: [
      "Tu fais ton sac dans la cellule qu'on t'a prêtée : des vivres pour la route, ton manteau d'hiver, la corde, ce qu'il reste de tes onguents. Par l'étroite fenêtre, on voit le chemin du sud s'enfoncer dans la brume du Val, puis disparaître entre deux collines pelées. Cinq jours de marche jusqu'à Merle, dit-on, si les ponts tiennent.",
      { with: "pip", text: "Pip tourne autour de la chandelle, plus vite que d'habitude, comme un papillon qui n'arrive pas à se décider. « La guerre, dit-il, c'est quand tout le monde prend ce qui n'est pas à lui en même temps ? » Tu ne trouves rien de mieux à lui répondre que oui." },
      { with: "coliane", text: "Coliane affûte ses couteaux sur le rebord de la fenêtre, avec de longs gestes réguliers. « J'ai vu une guerre, une fois, dit-elle sans lever la tête. Une petite, entre deux seigneurs, pour un moulin. On a ramassé les morts pendant un mois. Le moulin a brûlé dès le premier jour. »" },
      { with: "gloup", text: "Gloup s'est roulé dans ton manteau plié et refuse d'en sortir. Il fait des petits bruits mouillés et inquiets chaque fois que la cloche sonne." },
      { with: "charline", text: "Charline a rempli sa besace de livres et de craie, et presque rien d'autre. « On mange sur la route, dit-elle quand tu lui en fais la remarque. On ne lit pas sur la route. Il faut emporter ce qu'on n'y trouvera pas. »" },
      { with: "aubin", text: "Frère Aubin a demandé au cellérier des bandes de lin, du fil, une aiguille courbe et toute l'eau-de-vie qu'on voudrait lui donner, pour les plaies. On lui en a donné peu. « Là où on va, dit-il, il y aura plus de blessés que de prêtres. Je préfère avoir de quoi recoudre que de quoi bénir. »" },
      { with: "thavary", text: "Thavary est déjà prête, debout dans la cour, son épée à la hanche et son paquetage au pied, depuis l'aube peut-être. Quand tu prononces le nom d'Aldaran, elle a un mouvement de la mâchoire, très léger, comme quelqu'un qui avale une chose dure. Elle ne dit rien." },
      { if: { has: "grauk:allie" }, text: "La veille, un frère revenu de la crête a raconté au réfectoire qu'on avait vu des trolls descendre vers le sud, en bande, de nuit, sans rien piller. Personne ne l'a cru. Toi, tu as pensé à Grauk, et à la parole que vous vous êtes donnée." },
    ],
    choices: [
      { label: "Prendre la route de l'Isarde, vers Merle", big: true, travel: "r_isarde" },
    ] },
});

// ------------------------------------------------------------------ the road down the Isarde (r_isarde): legs
Object.assign(P, {
  III_r_colonne: { title: "La colonne",
    text: [
      "Au matin du premier jour, la route s'emplit de gens qui marchent dans l'autre sens. D'abord quelques-uns, puis une file, puis une colonne qui n'en finit pas : des charrettes à bras chargées de matelas et de chaudrons, des vaches maigres tirées par une corde, des vieux sur des ânes, des femmes avec un enfant sur le dos et un autre par la main. Personne ne parle. On entend les roues, les sabots, et une toux qui passe d'un bout à l'autre de la file comme un mot de passe.",
      "Ils viennent de l'Isarde. Ils vont vers le nord, n'importe où pourvu que ce soit loin de la rivière. Une femme s'est arrêtée au bord du chemin pour changer le linge d'un nourrisson, à même l'herbe gelée, et elle te regarde passer avec tes armes et tes vivres sans rien demander, ce qui est pire.",
      { with: "aubin", text: "Frère Aubin ralentit, puis s'arrête tout à fait. Il regarde la colonne avec l'air d'un homme qui compte, et qui renonce à compter." },
      { with: "gloup", text: "Un petit garçon, sur une charrette, aperçoit Gloup et tend la main vers lui. Sa mère lui rabat le bras d'une tape, sans un mot, et presse le pas." },
      { if: { has: "passe:fui" }, text: "Tu as marché comme eux, un matin, il y a sept ans, sur une autre route. Tu te souviens surtout du silence. Personne ne parlait non plus." },
    ],
    choices: [
      { label: "Partager tes vivres avec la femme au nourrisson", if: { food: { min: 1 } }, why: "Tu n'as plus de vivres à donner.", fx: { food: -1, conf: { pip: 10, aubin: 5, coliane: 5 }, ep: ["perso", 400] }, to: "III_r_colonne_pain" },
      { label: "Demander des nouvelles de l'Isarde", to: "III_r_colonne_nouvelles" },
      { label: "Laisser passer la colonne et reprendre la route", back: R },
    ] },

  III_r_colonne_pain: { title: "Le pain de la route",
    text: [
      "Tu lui tends le pain et le fromage dur de ton sac. Elle les regarde un moment sans les prendre, comme si elle cherchait le piège, puis elle les prend, très vite, et les fourre dans son corsage. Elle ne dit pas merci. Elle dit : « Merle. Nous, on était de Ruelle-Basse, juste au-dessus. Ils sont venus le jeudi. » Elle ne dit pas qui.",
      "Derrière elle, d'autres ont vu. Une main se tend, puis deux. Tu n'as plus rien à donner, et tu dois le dire, et c'est le moment le plus long de la matinée.",
      { with: "pip", text: "Pip descend se poser un instant sur le bord du panier où dort le nourrisson. L'enfant ouvre les yeux, et pour la première fois depuis que la colonne passe, quelqu'un sourit sur cette route." },
      { with: "aubin", text: "Frère Aubin bénit la mère du pouce, sur le front, et lui donne le nom d'une maison de l'Ordre où l'on distribue la soupe. Il ment peut-être. Il a l'air de le savoir et de l'avoir décidé." },
    ],
    choices: [{ label: "Reprendre la route vers le sud", back: R }] },

  III_r_colonne_nouvelles: { title: "Ce qu'on dit sur la route",
    text: [
      "Un vieux qui pousse une brouette de pommes de terre veut bien s'arrêter, pour souffler. « L'Isarde ? Les bleus sont en haut, sous Hautmont. Les pourpres en bas, à Sainte-Orme. Entre les deux, il y a Merle, et le gué, et la colline des Six avec son vieux tombeau. Personne n'a encore traversé pour de bon. Ils se tirent dessus à travers l'eau, et ils mangent nos poules. »",
      "Il crache. « On dit que le vieux roi est malade à mourir, et que c'est son conseiller qui commande. Un homme qui porte des gants blancs pour manger la soupe. On dit aussi qu'il y a une femme en gants noirs qui va d'un camp à l'autre et que personne n'arrête. Moi, je dis que quand on en est à parler des gants des gens, c'est qu'on ne sait plus rien du tout. »",
      { if: { is: { meunier: "livre" } }, text: "Une femme, derrière lui, dit qu'elle est de la Sorbe, et qu'on parle encore là-bas de quelqu'un de passage qui a livré le meunier de Brumefeuille. Elle te regarde un peu trop longtemps en le disant, puis détourne les yeux." },
      { if: { is: { meunier: "protege" } }, text: "Une femme, derrière lui, dit qu'elle est de la Sorbe. À Brumefeuille, raconte-t-elle, le meunier parle encore à son bief tous les soirs, et personne ne l'a jamais puni de rien. Elle dit qu'il y a des gens qu'on protège et d'autres non, et que ça ne dépend jamais de ce qu'ils ont fait." },
      { if: { is: { berthe: "pendue" } }, text: "Elle ajoute, en remontant son châle : « À Brumefeuille, ils ont pendu une vieille, au printemps, ou à l'automne, je ne sais plus. Pour sorcellerie. Et puis on a su que ce n'était pas elle. » Elle hausse les épaules. « On sait toujours après. »" },
    ],
    choices: [{ label: "Remercier le vieux et reprendre la route", back: R }] },

  III_r_pendu: { title: "Le carrefour",
    text: [
      "Au deuxième jour, la route croise le vieux chemin des salines, à l'endroit où un calvaire de bois penche au-dessus d'un fossé plein d'eau. Il y a un homme pendu à la traverse du calvaire. Pas très haut : ses pieds nus touchent presque le sommet de la croix, et tournent un peu dans le vent, dans un sens puis dans l'autre.",
      "On lui a accroché sur la poitrine une planche avec un mot tracé au charbon : ESPION. Il a les mains d'un batelier, larges et calleuses, et une veste de laine brune qui n'est l'uniforme de personne. Les corbeaux n'y ont pas encore touché. Ça s'est fait hier, ou cette nuit.",
      { with: "thavary", text: "Thavary regarde la planche, puis les nœuds. « Une corde de chariot, dit-elle. Pas de gibet, pas de juge, pas de prêtre. C'est une patrouille qui a fait ça pour se distraire. » Sa voix est plate. Sa main, sur la garde de son épée, ne l'est pas." },
      { with: "coliane", text: "Coliane fait le tour du calvaire sans s'approcher, en regardant le sol, pas le pendu. « Des bottes cloutées, dit-elle. Six ou sept. Ils sont repartis vers le nord. »" },
      { if: { is: { berthe: "pendue" } }, text: "Tu penses à Berthe, à Brumefeuille, et à la corde. Tu n'arrives pas à t'en empêcher, et tu n'essaies pas très fort." },
    ],
    choices: [
      { label: "Le dépendre et l'enterrer", fx: { time: 2, conf: { aubin: 10, pip: 5, thavary: 5 }, ep: ["perso", 500] }, to: "III_r_pendu_terre" },
      { label: "Fouiller ses poches", to: "III_r_pendu_poches" },
      { label: "Passer ton chemin sans regarder en arrière", fx: { conf: { aubin: -5 } }, back: R },
    ] },

  III_r_pendu_terre: { title: "Une fosse au bord du chemin",
    text: [
      "Il faut couper la corde, retenir le corps, le poser dans l'herbe. Il est plus lourd qu'on ne croit, et plus froid. Tu creuses avec ce que tu as, au pied du calvaire, là où la terre est meuble : une fosse peu profonde, que les chiens trouveront peut-être, mais qui vaut mieux que la traverse et le vent.",
      { with: "aubin", text: "Frère Aubin dit les prières sans livre, de mémoire, d'une voix basse et égale. À la fin, il ne dit pas « amen ». Il dit : « Pardon. » Il ne précise pas à qui." },
      { without: "aubin", text: "Tu ne connais pas les prières, ou plus assez. Tu restes debout un moment devant la terre retournée, et tu dis ce qui te vient, qui n'est pas grand-chose : que quelqu'un l'a vu, au moins. Qu'il n'est pas resté là tout seul." },
      "Tu gardes la planche. Tu la retournes contre le pied de la croix, le mot contre le bois, pour que les suivants ne le lisent pas.",
    ],
    choices: [{ label: "Reprendre la route, les mains pleines de terre", back: R }] },

  III_r_pendu_poches: { title: "Ce qu'il avait sur lui",
    text: [
      "On ne lui a pas laissé grand-chose : un briquet, un bout de ficelle, un couteau à lame repliable dont la lame est cassée. Et, cousu dans la doublure de la veste, à l'endroit où on coud ce à quoi on tient, un papier plié en huit, gras d'avoir été touché.",
      "C'est une lettre, d'une écriture appliquée d'enfant qui a appris tard. *« Mon Clarin, ne reviens pas par le pré, ils tirent sur tout ce qui bouge. Prends par la digue. Les petits vont bien. Le curé dit qu'on pourra peut-être passer l'hiver à l'église si ça continue. Ta Ysoline, à Merle. »*",
      "Ce n'était pas un espion. C'était un homme de Merle qui rentrait chez lui par le mauvais chemin.",
      { if: { seen: "III_mission_seul" }, text: "Bastien, le passeur qui t'attendait à la porterie, t'a parlé de Merle tout le long du premier jour, avant de prendre de l'avance. Il n'a jamais prononcé ce nom-là. Tu replies la lettre avec plus de soin qu'il n'en faudrait." },
    ],
    choices: [
      { label: "Garder la lettre pour la rapporter à Merle", fx: { item: "III_lettre_mariette" }, back: R },
      { label: "La remettre dans la doublure et le dépendre", fx: { time: 2, conf: { aubin: 10, pip: 5 } }, to: "III_r_pendu_terre" },
    ] },

  III_r_village: { title: "Les Aulnaies",
    text: [
      "Au troisième jour, il y a un village sur la carte, à un coude de la route : les Aulnaies, quinze feux et une église. Il n'y a plus de village. Il y a des murs noircis, des poutres effondrées qui fument encore par endroits sous la pluie fine, des chiens qui s'enfuient à votre approche, et une odeur que tu connais sans l'avoir jamais sentie, et que tu n'oublieras pas.",
      "On ne sait pas qui l'a brûlé. Sur un mur, quelqu'un a tracé à la suie la tour d'Aldaran ; sur un autre, quelqu'un d'autre a gratté un croissant de Vel-Orin par-dessus. Le clocher de l'église tient encore, tout seul, au milieu des décombres, comme un homme debout dans une pièce vide.",
      { with: "charline", text: "Charline marche entre les ruines sans rien dire, très droite, les mains enfoncées dans ses manches. Devant une forge écroulée, elle s'arrête un long moment. Tu la laisses." },
      { with: "gloup", text: "Gloup refuse d'avancer. Il fait le tour d'une flaque de cendre mouillée en tremblant, et finit par se cacher dans ta botte. Le feu. Il a toujours eu peur du feu." },
    ],
    choices: [
      { label: "Fouiller les caves, au cas où quelqu'un s'y serait caché", to: "III_r_village_cave" },
      { label: "Entrer dans l'église qui tient encore", to: "III_r_village_vieille" },
      { label: "Ne pas t'attarder et reprendre la route", back: R },
    ] },

  III_r_village_cave: { title: "La cave du tonnelier",
    text: [
      "Sous la maison du tonnelier, la trappe de la cave a été recouverte de tuiles cassées, trop bien rangées pour que ce soit le hasard. Tu les écartes. Dessous, il fait noir, et quelqu'un retient son souffle très fort.",
      "Ils sont quatre : un homme à la jambe cassée, une femme, deux filles de huit et dix ans. Ils sont là depuis deux jours, avec un seau d'eau et un sac de noix. L'homme te menace d'une serpe sans pouvoir se lever. La femme lui met la main sur le bras. Elle a compris avant lui que tu n'es pas de ceux qui brûlent.",
      { with: "aubin", text: "Frère Aubin descend l'échelle, s'agenouille près de l'homme et lui prend la jambe sans demander. Il y a un craquement, un cri, puis une attelle faite de deux douelles de tonneau et de ta corde. « Il remarchera, dit Aubin. Mal. Mais il remarchera. »" },
      { with: "pip", text: "Pip descend le premier, et la cave s'éclaire d'une lumière douce. La plus petite des filles le regarde, la bouche ouverte, et cesse de pleurer d'un coup, comme on ferme un robinet." },
    ],
    choices: [
      { label: "Leur indiquer la route du nord et leur laisser des vivres", if: { food: { min: 1 } }, why: "Tu n'as plus de vivres.", fx: { food: -1, conf: { pip: 5, aubin: 5 }, ep: ["perso", 500] }, to: "III_r_village_famille" },
      { label: "Leur conseiller d'aller à Merle, où le curé recueille les gens", fx: { flag: "III:aulnaies_merle", ep: ["perso", 300] }, to: "III_r_village_famille" },
    ] },

  III_r_village_famille: { title: "Les gens de la cave",
    text: [
      "La femme s'appelle Loyse. Elle te dit, en remontant à la lumière grise, ce qu'elle a vu par le soupirail : des cavaliers, sans bannière, qui criaient dans les deux langues, celle des hautes terres et celle du sud. Ils ont mis le feu à l'église d'abord, puis aux granges, et ils sont repartis sans rien prendre. « Rien, répète-t-elle. Même pas les vaches. Qui brûle un village sans prendre les vaches ? »",
      "Tu n'as pas de réponse. Elle n'en attendait pas. Elle prend la plus petite des filles sur sa hanche, l'autre par la main, et l'homme s'appuie sur elle, et ils s'en vont lentement par le chemin que tu leur as montré.",
      { if: { has: "III:aulnaies_merle" }, text: "Elle se retourne une fois, au coude du chemin, pour te faire signe. Elle va vers Merle. Vous vous y reverrez peut-être." },
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  III_r_village_vieille: { title: "L'église des Aulnaies",
    text: [
      "Le toit de la nef a brûlé et s'est effondré, mais le chœur a tenu, sous sa voûte de pierre. Une vieille femme est assise sur la marche de l'autel, au milieu des statues tombées, et elle égrène un chapelet de noyaux de prunes. Elle ne lève pas la tête quand tu entres.",
      "« Ils sont tous partis, dit-elle. Moi, je reste. J'ai quatre-vingt-un ans, j'ai enterré mon homme et mes trois fils dans ce cimetière, je ne vais pas aller mourir dans un fossé chez les autres. » Elle montre du menton les statues brisées sur le dallage : saint Clément, la Vierge, et un vieux bas-relief arraché du mur, qui représente cinq personnages en robe, les mains levées.",
      "« Ceux-là, dit-elle, ils sont tombés les premiers. Les cinq. Dans le temps, ma grand-mère disait qu'ils étaient six sur ce mur, avant qu'on refasse l'église. Elle disait qu'on avait gratté le sixième parce qu'il portait malheur. » Elle reprend son chapelet. « Il n'a pas porté plus malheur que les autres, si vous voulez mon avis. »",
      { with: "charline", text: "Charline s'accroupit devant le bas-relief et passe le doigt sur le bord de la pierre, là où le sixième personnage a dû se trouver. Il n'en reste qu'une main, levée, au bord de la cassure. Elle la recopie dans son carnet, en silence." },
    ],
    choices: [
      { label: "Lui laisser ta couverture et reprendre la route", fx: { conf: { aubin: 5, pip: 5 } }, back: R },
      { label: "Reprendre la route", back: R },
    ] },

  III_r_deserteurs: { title: "Le pont de la Vauge",
    text: [
      "Au quatrième jour, la route descend vers la Vauge, un affluent de l'Isarde, qu'on passe sur un pont de bois à une arche. Il y a du monde sur le pont : une barricade de charrettes renversées, et derrière, une dizaine d'hommes en guenilles d'uniforme, les uns avec des tabards bleus délavés, les autres avec des restes de pourpre. Ils se sont cousu ensemble, à leur manière, une petite armée de personne.",
      "Celui qui parle a une pique, une barbe de trois semaines et une voix enrouée de froid. « Péage, dit-il. Tout ce qui passe sur ce pont paie le pont. C'est la guerre : tout le monde fait payer quelque chose à quelqu'un. » Ses hommes ont faim. Ça se voit à la façon dont ils regardent ton sac plus que tes armes.",
      { with: "thavary", text: "Thavary s'est avancée d'un pas, à ta hauteur, sans dégainer. Elle compte. Tu la vois compter." },
      { with: "coliane", text: "Coliane te souffle sans tourner la tête : « Il y a un gué, en aval. J'entends l'eau sur les cailloux. »" },
    ],
    choices: [
      { label: "Payer le péage (5 sous)", fx: { gold: -5 }, to: "III_r_deserteurs_paye" },
      { label: "Leur parler de ce qu'ils ont laissé chez eux", test: { dom: "social", diff: -10, label: "Parler aux déserteurs", help: [{ with: "aubin", v: 10 }, { if: { item: "III_ordre_mission" }, v: 5 }] }, win: { fx: { ep: ["perso", 700] }, to: "III_r_deserteurs_parle" }, lose: { to: "III_r_deserteurs_combat" } },
      { label: "Laisse-moi faire : leur faire voir à qui ils ont affaire", who: "thavary", test: { dom: "combat", diff: -10, label: "Intimider les déserteurs" }, win: { fx: { conf: { thavary: 10 }, ep: ["perso", 600] }, to: "III_r_deserteurs_recul" }, lose: { to: "III_r_deserteurs_combat" } },
      { label: "Passer à gué, en aval, sans qu'ils vous voient", test: { dom: "discretion", diff: -10, label: "Traverser la Vauge en douce", help: [{ with: "coliane", v: 15 }, { with: "pip", v: 5 }] }, win: { fx: { ep: ["perso", 500] }, to: "III_r_deserteurs_gue" }, lose: { to: "III_r_deserteurs_combat" } },
      { label: "Forcer le passage", to: "III_r_deserteurs_combat" },
    ] },

  III_r_deserteurs_paye: { title: "Le péage",
    text: [
      "L'homme à la pique prend les pièces, les mord une à une, et les fait passer à ses hommes, qui les regardent comme on regarde du pain. On écarte une charrette. Tu passes. Personne ne te touche.",
      "De l'autre côté, un garçon, le plus jeune, te court après sur quelques pas. « Si vous allez à Merle, dit-il, ne dites pas que vous nous avez vus. Ils nous pendraient. Les deux camps nous pendraient. » Il a l'air d'avoir seize ans. Il a peut-être moins.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  III_r_deserteurs_parle: { title: "Ce qu'ils ont laissé",
    text: [
      "Tu ne parles pas de péage. Tu demandes à l'homme d'où il est. Il hésite, puis il dit : Combelaure, dans les hautes terres, trois jours au-dessus de Hautmont. Il avait une femme, un champ de seigle, une truie. Il est parti parce qu'on lui a dit que ce serait fini avant la Toussaint. Les autres, autour, se mettent à dire leurs villages, un par un, sans qu'on le leur demande, comme on se compte dans le noir.",
      "« On ne peut pas rentrer, dit l'homme à la pique. Les sergents tiennent les routes du nord. On ne peut pas rester. Alors on garde un pont. » Tu leur dis ce que tu as vu : la colonne des réfugiés, qui monte vers le nord par les chemins de traverse, que personne ne garde. Une colonne où dix hommes de plus ne se remarqueraient pas, s'ils aidaient à pousser les charrettes.",
      "Ils se regardent longtemps. Puis l'homme à la pique pose sa pique contre le parapet, et les autres commencent à défaire la barricade.",
      { with: "aubin", text: "Frère Aubin bénit ceux qui le demandent. Ils sont plus nombreux que tu ne l'aurais cru." },
    ],
    choices: [{ label: "Passer le pont et reprendre la route", back: R }] },

  III_r_deserteurs_recul: { title: "La lame de Thavar",
    text: [
      "Thavary avance seule jusqu'à la barricade, à portée de pique. Elle dégaine, lentement, et pose la lame à plat sur la première charrette, comme on pose une carte sur la table. « Je suis Thavary de Thavar, dit-elle. Mon aïeul a tenu ce pays avant vos rois. Je n'ai pas envie de vous tuer. Je le ferai quand même. »",
      "Il y a un moment très long. Puis l'homme à la pique crache de côté et fait signe à ses hommes d'écarter les charrettes. Vous passez au milieu d'eux. Personne ne vous regarde dans les yeux.",
      { with: "thavary", text: "De l'autre côté du pont, Thavary rengaine et respire, une seule fois, profondément. « Ils étaient affamés, dit-elle. Ils auraient perdu. Ce n'est pas une victoire. » Elle a l'air d'en vouloir à quelqu'un, et ce n'est pas à eux." },
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  III_r_deserteurs_gue: { title: "Le gué de la Vauge",
    text: [
      "Vous descendez la berge à couvert des aulnes, à cent pas en aval. L'eau est glacée et monte jusqu'à mi-cuisse, et le fond est fait de galets ronds qui roulent sous les bottes. Tu entends, au-dessus, les déserteurs qui se disputent à propos d'une couverture.",
      "Sur l'autre rive, vous remontez par un chemin de pêcheurs, trempés, transis, sans avoir été vus. Tu te retournes une fois : sur le pont, l'homme à la pique regarde vers le nord, vers le pays qu'il ne peut pas rejoindre.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  III_r_deserteurs_combat: { title: "Le pont de la Vauge",
    combat: { title: "Les déserteurs du pont", enemies: [{ id: "III_deserteur_arme", n: 3 }],
      win: { fx: { ep: ["perso", 800] }, to: "III_r_deserteurs_apres" },
      lose: { fx: { pv: -3, gold: -5 }, to: "III_r_deserteurs_battu" },
      flee: { label: "Sauter dans la Vauge et te laisser porter", dom: "nature", diff: -10, to: "III_r_deserteurs_gue" } },
    text: [
      "L'homme à la pique crie quelque chose dans le patois des hautes terres, et trois des siens passent la barricade. Ils se battent mal, avec la rage de ceux qui n'ont plus rien à perdre et pas grand-chose à manger.",
    ] },

  III_r_deserteurs_apres: { title: "Après le pont",
    text: [
      "Quand c'est fini, les autres se sont enfuis dans les aulnes, en abandonnant la barricade. Deux des trois qui t'ont attaqué sont vivants, assis dans la boue, et te regardent avec la haine tranquille des vaincus. Le troisième ne se relève pas.",
      "Dans sa besace, il n'y a qu'un croûton, un rosaire, et un sifflet de bois sculpté en forme d'oiseau, comme on en fait pour les enfants. Tu le reposes où tu l'as trouvé.",
      { with: "pip", text: "Pip ne vient pas se poser sur ton épaule. Il reste un long moment au-dessus du mort, à faible lueur, puis il te rejoint sans rien dire." },
    ],
    choices: [{ label: "Passer le pont et reprendre la route", fx: { conf: { pip: -5 } }, back: R }] },

  III_r_deserteurs_battu: { title: "Le prix du pont",
    text: [
      "Tu te réveilles dans le fossé, de l'autre côté du pont, le crâne sonnant comme une cloche fêlée. On t'a pris ta bourse, ou ce qu'il y avait dedans, et on t'a laissé le reste, ce qui est une forme de politesse. La barricade est toujours là. Quelqu'un a fait passer ton sac par-dessus.",
      "« On n'est pas des assassins », a dit l'homme à la pique, peut-être, avant que tu t'évanouisses. Ou tu l'as rêvé. Tu repars en boitant.",
    ],
    choices: [{ label: "Reprendre la route en boitant", back: R }] },
});

// ------------------------------------------------------------------ the Isarde valley: random events (region isarde)
Object.assign(P, {
  EIII_corbeaux: { title: "Le champ des corbeaux",
    text: [
      "La route longe un champ de betteraves où l'on s'est battu, il y a quelques jours, pour une raison que personne ne pourra plus dire. Il n'y a plus de morts : on les a emportés, ou enterrés sur place, sous des tertres bas que la pluie commence déjà à aplatir. Il reste les chevaux. Une douzaine, raides, les pattes en l'air, et sur eux des corbeaux par centaines, qui ne se donnent même pas la peine de s'envoler quand vous passez.",
      "L'un des chevaux n'est pas mort. Il est couché sur le flanc près du fossé, un trait d'arbalète dans le poitrail, et il lève la tête vers vous en soufflant, avec un bruit de soufflet percé. Il a dû passer là deux nuits.",
      { with: "coliane", text: "Coliane a déjà un couteau à la main. Elle te regarde, pour savoir si c'est toi qui le fais ou elle." },
    ],
    choices: [
      { label: "L'achever, proprement", fx: { conf: { coliane: 5, thavary: 5 }, ep: ["perso", 200] }, to: "EIII_corbeaux_fin" },
      { label: "Laisse-moi faire : chanter pour le cheval, le temps qu'il parte", who: "pip", fx: { conf: { pip: 10 }, ep: ["perso", 300] }, to: "EIII_corbeaux_pip" },
      { label: "Détourner les yeux et passer", back: R },
    ] },
  EIII_corbeaux_fin: { title: "Le champ des corbeaux",
    text: [
      "Tu poses la main sur l'encolure trempée de sueur froide, tu trouves l'endroit, derrière l'oreille. C'est rapide. Le cheval a un dernier mouvement des jambes, comme s'il courait encore quelque part, puis plus rien.",
      "Les corbeaux, eux, n'ont pas bougé. Ils attendront que vous soyez partis. Ils ont le temps : c'est leur saison.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
  EIII_corbeaux_pip: { title: "Le champ des corbeaux",
    text: [
      { with: "pip", text: "Pip descend se poser entre les yeux du cheval, et il se met à chanter. Ce n'est pas une chanson que tu connais. Ce n'est peut-être pas une chanson du tout : un son très doux, très bas, qui ressemble au bruit de l'eau dans un ruisseau d'été. Le cheval cesse de souffler. Il pose la tête dans l'herbe." },
      { with: "pip", text: "Quand il ne respire plus, Pip remonte sur ton épaule. Il ne brille presque plus. « Il croyait qu'il était dans son pré, dit-il. Je lui ai laissé croire. C'est mal ? » Tu lui dis que non. Tu n'en es pas sûr{e}, mais tu le lui dis." },
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  EIII_fourrageurs: { title: "Les fourrageurs",
    text: [
      "Des cris, derrière une haie : une ferme isolée, un toit de chaume, une cour de terre battue. Quatre soldats en tabard bleu à la tour d'argent sont en train de sortir une vache de l'étable, pendant qu'un cinquième tient en respect, du plat de son épée, un paysan qui hurle et une femme qui ne hurle plus. Une charrette attend dans le chemin, déjà chargée de sacs de grain et de deux cochons ficelés.",
      "Le sergent te voit arriver et lève une main, sans lâcher la longe. « Réquisition pour l'armée du roi, crie-t-il. Tout est en règle. On a même un papier. » Il en agite un, en effet. Le paysan crie que c'est leur dernière vache, que le papier ne se mange pas, que les pourpres sont déjà passés le mois dernier et ont pris les autres.",
    ],
    choices: [
      { label: "Exiger de voir le papier, et lire ce qu'il y a dessus", test: { dom: "savoir", diff: -10, label: "Trouver la faille dans l'ordre de réquisition", help: [{ with: "charline", v: 15 }, { if: { item: "III_ordre_mission" }, v: 10 }] }, win: { fx: { ep: ["perso", 600], conf: { charline: 5 } }, to: "EIII_fourrageurs_papier" }, lose: { to: "EIII_fourrageurs_rien" } },
      { label: "Racheter la vache au sergent (8 sous)", fx: { gold: -8, conf: { pip: 5, aubin: 5 }, ep: ["perso", 300] }, to: "EIII_fourrageurs_rachat" },
      { label: "T'interposer, la main sur ton arme", fight: { title: "Les fourrageurs", enemies: [{ id: "soldat_aldaran", n: 2 }], spare: true,
        win: { fx: { ep: ["perso", 700], fac: { aldaran: -10 } }, to: "EIII_fourrageurs_force" }, lose: { fx: { pv: -2 }, to: "EIII_fourrageurs_rien" },
        flee: { label: "Reculer derrière la haie", dom: "discretion", diff: 0, to: "EIII_fourrageurs_rien" } } },
      { label: "Ce n'est pas ta guerre. Passer.", back: R },
    ] },
  EIII_fourrageurs_papier: { title: "Le papier du sergent",
    text: [
      "Tu prends le papier. C'est un ordre de réquisition en bonne forme, au sceau du connétable, pour « les fermes de la rive gauche, de la Vauge à Merle ». Tu regardes la carte, puis la rivière. La ferme est sur la rive droite. Le sergent s'est trompé de berge, ou il a fait semblant.",
      "Tu le lui fais remarquer, assez fort pour que ses hommes entendent. Il y a un silence. Le sergent te reprend le papier, le replie, le regarde comme s'il ne l'avait jamais vu. « Bon, dit-il. La vache reste. » Il fait signe de remettre les cochons à terre. Le grain, lui, reste sur la charrette : il y a des limites à ce qu'on peut perdre devant ses hommes.",
      "Le paysan te regarde partir sans un mot. Sa femme a pris la vache par le cou, et elle pleure dans le poil de la bête, maintenant que c'est fini.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
  EIII_fourrageurs_rachat: { title: "Le prix d'une vache",
    text: [
      "Le sergent regarde les pièces, regarde la vache, regarde ses hommes. « Huit sous, dit-il. Elle en vaut trois, maigre comme elle est. » Il prend quand même. On laisse la vache dans la cour.",
      "Le paysan ne te remercie pas. Il te regarde avec une méfiance nouvelle, comme on regarde quelqu'un qui a assez d'argent pour acheter une vache par pitié. Tu le comprends. Tu repars quand même un peu plus léger{e}, et pas seulement de la bourse.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
  EIII_fourrageurs_force: { title: "La cour de la ferme",
    text: [
      "Les deux qui ont tenu tête sont à terre, désarmés, et les trois autres ont filé avec la charrette, en laissant la vache. Le sergent se relève en se tenant le bras. « Tu viens de frapper des soldats du roi, dit-il. Le roi le saura. » C'est vrai, sans doute. Le roi a d'autres soucis.",
      "Le paysan, lui, a déjà rentré sa vache à l'étable et fermé la porte à double tour. Il ne sortira pas avant que vous soyez loin. Personne ici n'a envie d'être vu en train de te remercier.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
  EIII_fourrageurs_rien: { title: "La cour de la ferme",
    text: [
      "Le sergent hausse les épaules et donne le signal. La vache suit la charrette en meuglant, et le paysan court derrière sur quelques pas, puis s'arrête au milieu du chemin, les bras ballants. Sa femme est rentrée dans la maison.",
      "Les soldats passent à côté de toi sans te regarder. L'un d'eux, le plus jeune, a l'air d'avoir honte. Il n'en marche pas moins vite pour autant.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  EIII_patrouille: { title: "La patrouille pourpre",
    text: [
      "Un claquement sec, et un carreau d'arbalète vient se planter dans le tronc d'un saule, à deux pas devant toi, en vibrant. « Halte ! » crie quelqu'un dans la langue chantante du sud. Six arbalétriers de Vel-Orin sortent d'un fossé, en casaque pourpre au croissant d'or, et cinq des six arbalètes sont pointées sur vous. La sixième se recharge.",
      "Leur sergent est un petit homme rond à moustache cirée, qui a l'air beaucoup plus inquiet que toi. « Les routes sont fermées par ordre de la duchesse, dit-il. Qui êtes-vous, où allez-vous, et pourquoi devrais-je ne pas vous emmener à Sainte-Orme ? »",
      { if: { mark: { min: 2 } }, text: "L'un des arbalétriers, le plus jeune, baisse les yeux sur ta main gauche, là où la tache noire dépasse de ta manche, et il fait vivement un signe qui protège du mauvais œil." },
    ],
    choices: [
      { label: "Montrer la lettre de mission de l'Ordre", hide: { not: { item: "III_ordre_mission" } }, fx: { ep: ["perso", 300] }, to: "EIII_patrouille_lettre" },
      { label: "Montrer le billet du Cercle", hide: { not: { item: "III_lettre_corbin" } }, fx: { ep: ["perso", 300] }, to: "EIII_patrouille_lettre" },
      { label: "Leur raconter une histoire de pèlerinage", test: { dom: "social", diff: -10, label: "Embobiner la patrouille", help: [{ with: "aubin", v: 15 }] }, win: { fx: { ep: ["perso", 500] }, to: "EIII_patrouille_passe" }, lose: { fx: { gold: -6 }, to: "EIII_patrouille_amende" } },
      { label: "Te jeter dans les saules et disparaître", test: { dom: "discretion", diff: -20, label: "Échapper aux arbalétriers", help: [{ with: "coliane", v: 10 }, { with: "gloup", v: 5 }] }, win: { fx: { ep: ["perso", 500] }, to: "EIII_patrouille_passe" }, lose: { fx: { pv: -4 }, to: "EIII_patrouille_amende" } },
    ] },
  EIII_patrouille_lettre: { title: "La patrouille pourpre",
    text: [
      "Le sergent lit la lettre en remuant les lèvres, la rend, et fait baisser les arbalètes d'un geste de la main. « Bon, dit-il. Les gens de l'Ordre et du Cercle, on a ordre de ne pas les retenir. On a aussi ordre de noter qu'on les a vus. » Il sort un carnet graisseux et y écrit quelque chose, lentement.",
      "Avant de te laisser partir, il te glisse, sur un ton plus bas : « Si vous allez du côté des bleus, vous leur direz qu'on n'a rien contre eux, nous autres. C'est les gens d'en haut. Nous, on voudrait juste rentrer pour les vendanges. » Les vendanges sont finies depuis un mois. Il le sait.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
  EIII_patrouille_passe: { title: "La patrouille pourpre",
    text: [
      "Quand la patrouille s'éloigne enfin vers le sud, en file, les arbalètes sur l'épaule, tu t'aperçois que tu avais retenu ton souffle depuis un bon moment. Les saules dégouttent sur toi. Quelque part, un chien aboie, puis se tait.",
      "Tu reprends la route, en regardant les fossés d'un autre œil.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
  EIII_patrouille_amende: { title: "La patrouille pourpre",
    text: [
      "Ça finit comme ça finit toujours : par de l'argent. Le sergent te fouille sans brutalité, prend ce qu'il estime être le prix de son dérangement, et te laisse le reste, avec un conseil sur les routes à éviter qui n'est pas mauvais.",
      "« Ne le prenez pas mal, dit-il. Ça ne va pas dans ma poche, ça va dans la soupe. Ma solde a trois semaines de retard. » Tu ne sais pas s'il ment. Il a l'air maigre.",
    ],
    choices: [{ label: "Reprendre la route, plus léger{e}", back: R }] },

  EIII_anselme: { title: "Le colporteur",
    fx: { meet: "anselme" },
    text: [
      "Une mule, une charrette, une bâche goudronnée, et assis sur le siège, les jambes croisées, un homme à moustache qui mange une pomme : Anselme. Évidemment Anselme. Il te salue de la pomme comme si vous vous étiez quittés la veille.",
      "« Ah ! La guerre, la guerre, dit-il. Mauvaise pour tout le monde, sauf pour le commerce. » Il soulève la bâche. Dessous, il y a des bottes, beaucoup de bottes, de toutes les tailles, et toutes dépareillées ; des ceinturons ; des casques cabossés ; une pile de tabards bleus et pourpres, soigneusement pliés ensemble. « Tout est propre, dit-il. On a lavé. Enfin, presque tout. »",
      "Il te propose aussi, à voix basse, une carte des lignes « de la main même d'un capitaine d'Aldaran », un flacon d'eau « de la source des Six, garantie pure », et un laissez-passer de Vel-Orin en blanc, avec le sceau déjà dessus.",
      { with: "coliane", text: "Coliane soulève une botte du bout de son couteau, regarde la semelle, et la laisse retomber. « Il les prend sur les morts, dit-elle. Pas toujours après qu'ils sont morts. »" },
    ],
    choices: [
      { label: "Lui acheter la carte des lignes (6 sous)", fx: { gold: -6, reveal: ["hautmont", "sainteorme", "colline", "gaudre"], ep: ["perso", 200] }, to: "EIII_anselme_carte" },
      { label: "Lui demander d'où viennent ses tabards", to: "EIII_anselme_tabards" },
      { label: "Le saluer et passer", back: R },
    ] },
  EIII_anselme_carte: { title: "La carte d'Anselme",
    text: [
      "La carte est vraie. C'est presque une surprise. Tracée à l'encre brune sur un parchemin réutilisé, elle montre l'Isarde, le gué de Gaudre, le camp d'Aldaran sous Hautmont, les pavillons de Vel-Orin autour de Sainte-Orme, et entre les deux, une colline ronde marquée d'une croix et de six petits points.",
      "« Je ne vends jamais de fausses cartes deux fois de suite au même client, dit Anselme. Mauvais pour la réputation. » Il croque sa pomme. « Une sur deux, à la rigueur. »",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
  EIII_anselme_tabards: { title: "Les tabards",
    text: [
      "Anselme prend l'air d'un homme blessé dans sa dignité, puis renonce, parce que ça le fatigue. « Des deux camps, dit-il. Je ne fais pas de politique. Et puis, entre nous, je ne suis pas le seul. » Il se penche. « Les capitaines des mercenaires, au camp d'Aldaran, ils sont payés en or tout neuf. Tout neuf, je dis. Je l'ai eu entre les doigts. De l'or comme ça, ça ne pousse pas dans les hautes terres. »",
      "Il se redresse et reprend sa pomme. « Je ne vous ai rien dit, évidemment. Je dis toujours tout, et je n'ai jamais rien dit. C'est ça, le commerce. »",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  EIII_flaque: { title: "L'ornière",
    text: [
      "Il a plu toute la nuit. Le chemin est une suite d'ornières pleines d'une eau brune qui reflète un ciel bas et sale. Tu enjambes la plus large quand quelqu'un dit ton nom, tout près, d'une voix de femme, douce, raisonnable, un peu triste.",
      "« {hero}. » L'eau de l'ornière ne bouge pas. Ton reflet, lui, te regarde avec un temps de retard. « Tant d'hommes qui meurent pour une ligne sur une carte, dit la Voix. Tant de mères. Ils me demandent tous la même chose, la nuit, au bord de l'eau : que ça s'arrête. Je pourrais. Tu sais que je pourrais. »",
      "« Tu vas voir quelqu'un que tu aimes, au camp des bleus, dit-elle encore. Ne crois pas ce qu'on te dira de moi à ce moment-là. Crois ce que tu verras. » Puis l'eau redevient de l'eau, et il ne reste qu'une ornière, et le vent.",
      { with: "aubin", text: "Frère Aubin a pâli. Il enjambe l'ornière en faisant un grand détour, et il ne dit rien pendant une heure." },
      { with: "gloup", text: "Gloup s'est mis à trembler et à tirer sur ta botte, comme un enfant qui veut partir. Puis, tout à coup, il s'arrête, et il regarde l'ornière avec quelque chose qui ressemble à de la nostalgie. C'est pire." },
    ],
    choices: [
      { label: "Piétiner l'ornière jusqu'à n'en faire que de la boue", fx: { conf: { aubin: 5, coliane: 5 } }, back: R },
      { label: "Reprendre la route sans te retourner", back: R },
    ] },

  EIII_puits: { title: "Le puits de la Grange-aux-Moines",
    text: [
      "Une ferme fortifiée, à l'écart de la route : la Grange-aux-Moines, avec son mur d'enceinte, son colombier, et dans la cour, un attroupement autour du puits. Une dizaine de personnes qui se taisent, des seaux vides à la main. Une femme t'explique, sans que tu demandes : quelqu'un a jeté un cadavre dans le puits, cette nuit. Un soldat. On ne sait pas de quel camp. On ne sait pas qui l'a fait.",
      "« C'est pour qu'on parte, dit un homme. C'est toujours comme ça qu'ils font, quand ils veulent la terre et pas les gens. » Ils ne peuvent pas le sortir : la corde du puits est trop courte et personne ne veut descendre. Ils ne peuvent pas boire. La rivière est à une demi-lieue, entre les lignes.",
    ],
    choices: [
      { label: "Descendre toi-même au bout d'une corde", if: { item: "corde" }, why: "Il te faudrait une bonne corde.", test: { dom: "nature", diff: -10, label: "Remonter le corps du puits", help: [{ with: "thavary", v: 10 }, { with: "coliane", v: 10 }] }, win: { fx: { ep: ["perso", 800], conf: { aubin: 5, pip: 5 } }, to: "EIII_puits_remonte" }, lose: { fx: { pv: -3 }, to: "EIII_puits_rate" } },
      { label: "Leur montrer comment filtrer l'eau de la mare au sable et au charbon", test: { dom: "savoir", diff: 0, label: "Faire une eau buvable", help: [{ with: "charline", v: 10 }, { if: { has: "maitre:ortie" }, v: 10 }] }, win: { fx: { ep: ["perso", 500] }, to: "EIII_puits_filtre" }, lose: { to: "EIII_puits_rate" } },
      { label: "Leur souhaiter bonne chance et passer", back: R },
    ] },
  EIII_puits_remonte: { title: "Le puits de la Grange-aux-Moines",
    text: [
      "Le puits est profond et glacé, et ce qui t'attend au fond est pire que le froid. Tu passes la corde sous les bras du mort, à tâtons, dans l'eau jusqu'aux épaules, et les hommes de la Grange tirent. Puis on te remonte à ton tour, bleu{e} de froid, et on t'enroule dans trois couvertures.",
      "Le mort porte un tabard pourpre, et sous le tabard, des bottes bleues d'Aldaran. Il a été tué par l'un, ou par l'autre, ou par les deux. On l'enterre au bout du verger. On vide le puits au seau, toute la journée, et on y jette de la chaux. Ce soir, ils boiront.",
      { if: { has: "maitre:ortie" }, text: "*Ne bois jamais une eau que tu n'as pas regardée.* Tu entends la phrase avec sa voix, si nette que tu tournes la tête. Il n'y a que la cour, et la pluie." },
    ],
    choices: [{ label: "Reprendre la route, trempé{e}", back: R }] },
  EIII_puits_filtre: { title: "Le puits de la Grange-aux-Moines",
    text: [
      "Un tonneau défoncé, du sable de la rivière, du charbon de bois écrasé, de la paille. Tu montres. Les gens de la Grange regardent, puis s'y mettent, avec cette patience des paysans quand on leur explique enfin quelque chose d'utile. L'eau qui sort au bas du tonneau est trouble, mais elle ne sent plus la mare.",
      "« Bouillie, dit une vieille, ça ira. » Elle te serre le bras, très fort, avec des doigts comme des racines. Le puits, ils le videront demain, quand ils auront trouvé quelqu'un d'assez fou pour y descendre.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
  EIII_puits_rate: { title: "Le puits de la Grange-aux-Moines",
    text: [
      "Ça ne marche pas. La corde glisse, ou l'eau reste noire, ou les deux. Les gens de la Grange te remercient quand même d'avoir essayé, avec cette politesse lasse qu'on a pour les étrangers qui passent et qui repartent.",
      "Quand tu te retournes, au tournant du chemin, ils sont en train de charger une charrette. Ils partent. C'était peut-être ce qu'on voulait.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  EIII_chirurgien: { title: "La charrette du chirurgien",
    text: [
      "Une charrette arrêtée au bord du chemin, sous un orme, et autour d'elle des hommes couchés dans la paille : des blessés d'Aldaran qu'on ramène vers l'arrière. Le chirurgien est un barbier de Hautmont aux manches retroussées jusqu'aux épaules, les avant-bras rouges jusqu'au coude. Il scie. Un garçon de quinze ans tient la lanterne en regardant ailleurs.",
      "« Si vous savez tenir quelqu'un, tenez-le, dit le barbier sans se retourner. Sinon, passez. » Celui qu'il opère est un piquier à la jambe broyée, qui mord un ceinturon de cuir et qui pleure sans bruit.",
    ],
    choices: [
      { label: "Tenir le blessé", fx: { ep: ["perso", 400], conf: { aubin: 5 } }, to: "EIII_chirurgien_aide" },
      { label: "Laisse-moi faire : soulager sa douleur", who: "aubin", fx: { conf: { aubin: 10 }, ep: ["perso", 600] }, to: "EIII_chirurgien_aubin" },
      { label: "Laisse-moi faire : cautériser proprement", who: "charline", fx: { conf: { charline: 10 }, ep: ["perso", 600] }, to: "EIII_chirurgien_charline" },
      { label: "Passer", back: R },
    ] },
  EIII_chirurgien_aide: { title: "La charrette du chirurgien",
    text: [
      "Tu tiens. Il n'y a rien d'autre à dire. Tu tiens les épaules du garçon contre la paille de toutes tes forces pendant que le barbier finit, et tu le regardes dans les yeux pour qu'il ait quelque chose à regarder. Il s'évanouit avant la fin, ce qui est une grâce.",
      "Après, le barbier se lave les mains dans un seau, longuement. « Trois sur cinq, dit-il. C'est ma moyenne, depuis le début. Avant, j'arrachais des dents. » Il te tend une gourde. C'est de l'eau-de-vie. Tu bois.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
  EIII_chirurgien_aubin: { title: "La charrette du chirurgien",
    text: [
      { with: "aubin", text: "Frère Aubin s'agenouille à la tête du blessé et pose les deux mains à plat sur son front, et il prie. Ce n'est pas un miracle. C'est une voix calme, des mots que le garçon reconnaît de son enfance, et une chaleur qui passe des paumes d'Aubin à la peau du blessé. Le piquier cesse de se débattre. Il serre le poignet d'Aubin, et il le tient jusqu'à la fin." },
      { with: "aubin", text: "Le barbier regarde Aubin par en dessous, en essuyant sa scie. « Restez, mon père, dit-il. J'en ai encore six. » Aubin reste une heure de plus. Quand il remonte sur la route, il a du sang jusqu'aux coudes, et il a l'air plus jeune." },
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
  EIII_chirurgien_charline: { title: "La charrette du chirurgien",
    text: [
      { with: "charline", text: "Charline écarte le barbier, qui s'apprêtait à mettre le fer dans le brasero. Elle pose deux doigts sur la plaie, et elle dit un mot. La chair grésille, l'odeur monte, et le sang s'arrête net, d'un coup, proprement, comme une porte qu'on ferme. Le garçon n'a même pas eu le temps de crier." },
      { with: "charline", text: "Elle retire sa main. Elle tremble un peu. « Je savais le faire, dit-elle, très bas, comme pour elle-même. Je savais le faire sans brûler le reste. » Le barbier la regarde comme on regarde une sainte, ou une sorcière. Elle n'a pas l'air de savoir laquelle des deux elle préférerait." },
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
});

// ------------------------------------------------------------------ Merle-sur-Isarde: arrival and hub of act III
var TROIS = [{ has: "III:aldaran" }, { has: "III:velorin" }, { has: "III:fort" }];
Object.assign(P, {
  III_arrivee: { act: "III", title: "Merle-sur-Isarde", place: "merle",
    fx: { reveal: ["hautmont", "sainteorme", "colline", "gaudre"], meet: "III_mathurin", ep: ["seance", 1200] },
    text: [
      "Merle-sur-Isarde tient tout entier sur une langue de terre entre la rivière et un bras mort : une rue unique, pavée de galets, qui descend vers l'eau entre des maisons de bateliers aux volets bleus, une église trapue au clocher carré, une auberge, un lavoir, des barques tirées sur la grève. Ce devait être joli. On voit encore que ça l'a été.",
      "Aujourd'hui, la moitié des volets sont arrachés et ont servi à faire du feu. La rue est pleine de gens qui ne sont pas d'ici, assis sur leurs ballots, contre les murs, sous des bâches tendues entre deux fenêtres. Il y a de la fumée partout et une odeur de soupe claire et de linge qui ne sèche pas. Au-dessus du village, au nord, on voit sur la colline les tentes bleues d'Aldaran, minuscules et bien rangées ; au sud, au-delà de la rivière, la masse grise de l'abbaye de Sainte-Orme, et autour, des points pourpres.",
      "Entre les deux, sur le pré qui longe l'Isarde, quelque chose brille par centaines dans l'herbe rase, comme une rosée de fer : des carreaux d'arbalète et des flèches, plantés dans tous les sens. Et des enfants, courbés, qui les arrachent un par un et les mettent en bottes.",
      { if: { seen: "III_mission_seul" }, text: "Bastien le passeur t'attendait sur la grève. Il ne te remercie pas d'être venu{e}. Il te serre la main, longtemps, comme on serre une main qu'on n'espérait plus, et il te mène jusqu'au curé." },
      "Le curé de Merle, un grand homme maigre aux cheveux blancs en désordre, sort de l'église en s'essuyant les mains à sa soutane et vient droit sur toi. « Rainier, dit-il. Le curé de ce qui reste. Si vous venez de l'Ordre, vous arrivez tard. Si vous venez d'ailleurs, vous arrivez quand même. Entrez, il pleut. »",
    ],
    choices: [{ label: "Suivre le curé dans le village", big: true, to: "III_hub" }] },

  III_hub: { act: "III", title: "Merle-sur-Isarde", place: "merle", hub: true, routes: true, backName: "la rue de Merle",
    text: [
      { first: true, text: "La rue de Merle descend vers l'Isarde entre les maisons aux volets arrachés. Tout le village est devenu un seul campement : des gens partout, des feux sous les auvents, des enfants qui courent avec des bottes de flèches sur l'épaule, une chèvre attachée à la grille de l'église. Le curé te montre tout d'un geste large. « Voilà, dit-il. L'auberge, ou ce qu'on en a laissé. L'église, où j'ai les blessés. La grève, où les gens attendent un bateau qui ne viendra pas. Et le pré, où mes paroissiens envoient leurs enfants ramasser la mort pour la revendre. Faites comme chez vous. Tout le monde le fait. »" },
      { again: true, text: "La rue de Merle, sa fumée, ses gens assis contre les murs. Du côté du pré, les enfants ramassent toujours ; du côté de l'eau, les barques attendent." },
      { again: true, when: "night", text: "La nuit, Merle se tait d'un coup. On éteint les feux pour ne pas servir de cible, et l'on entend, de loin en loin, les sentinelles des deux camps qui se répondent par-dessus la rivière, dans deux langues, avec les mêmes jurons." },
      { if: { all: [{ count: TROIS, min: 1 }, { count: TROIS, max: 1 }] }, text: "Les lavandières ne descendent plus au lavoir. Depuis deux jours, l'eau de l'Isarde y est tiède le matin, et un peu trouble, comme si quelqu'un l'avait remuée avec la main par en dessous. On lave le linge dans des baquets, avec l'eau du puits de l'église." },
      { if: { all: [{ count: TROIS, min: 2 }, { count: TROIS, max: 2 }] }, text: "Ce matin, on a sorti un soldat de l'eau, dans les roseaux du bras mort : un piquier d'Aldaran, noyé là où l'on a pied. Il souriait. Il avait la bouche pleine d'une vase noire et fine que personne n'a voulu toucher. Le curé l'a enterré tout de suite, sans attendre le camp, et il a fait brûler ses habits." },
      { if: { count: TROIS, min: 3 }, text: "La nuit dernière, tout Merle a entendu chanter la rivière. Une voix de femme, sans paroles, qui montait de l'eau au moment où les sentinelles se taisaient. Les chiens n'ont pas aboyé. Ce matin, plusieurs femmes du village se sont réveillées avec les draps mouillés et des traces de pieds nus sur le carrelage, qui allaient vers la porte et ne revenaient pas." },
      { with: "gloup", first: true, text: "Les enfants de Merle ont repéré Gloup avant même que tu sois arrivé{e} au bout de la rue. Ils le suivent à distance, en bande, en se poussant du coude. Gloup fait semblant de ne pas les voir, et se tient très droit, autant qu'une gelée peut se tenir droite." },
      { with: "pip", first: true, text: "Pip s'est caché dans ton col. « Il y a trop de gens qui ont peur, ici, dit-il. Ça fait du bruit. Tu n'entends pas ? » Tu n'entends rien. Tu le crois quand même." },
    ],
    choices: [
      { label: "L'auberge du Bac, pillée", to: "III_auberge" },
      { label: "L'église, et le curé Rainier", to: "III_eglise" },
      { label: "La grève, où attendent les réfugiés", to: "III_refugies" },
      { label: "Les enfants qui ramassent les flèches sur le pré", hide: { quest: "III_fleches" }, to: "III_fleches" },
      { label: "Le bac de Bastien, au bout de la grève", to: "III_berge" },
      { label: "Chercher Ysoline, la femme du pendu", hide: { any: [{ not: { item: "III_lettre_mariette" } }, { seen: "III_mariette" }] }, to: "III_mariette" },
      { label: "La veillée, chez le curé", hide: { any: [{ seen: "III_veillee" }, { not: { seen: "IIIA_camp" } }] }, to: "III_veillee" },
      { label: "Prendre des nouvelles de Fort-Gaudre et de son commandeur", hide: { has: "III:fort" }, to: "IIIF_route" },
      { label: "La veille de la bataille", big: true, exit: true, to: "IIIG_veille", if: { count: TROIS, min: 2 }, why: "Il est trop tôt : tu ne sais pas encore assez de choses sur les deux camps et sur le gué. Il te faut deux pistes sur trois : le camp d'Aldaran, celui de Vel-Orin, et Fort-Gaudre." },
    ] },

  III_auberge: { act: "III", title: "L'auberge du Bac", place: "merle", shop: "III_auberge", taverne: { mise: 3, adversaire: "un batelier sans bateau" },
    text: [
      { first: true, text: "L'enseigne pend encore, par un seul gond : un bac à fond plat, peint en vert sur une planche. Dedans, il n'y a plus de tables, sauf une, trop lourde pour qu'on l'emporte ; plus de bancs, plus de tonneaux, plus de vaisselle. Les soldats sont passés deux fois, les bleus puis les pourpres, et ils ont pris tout ce qui se boit, se mange, se brûle ou se vend. Ils ont laissé le comptoir, parce qu'il est en chêne et scellé au mur, et l'aubergiste, parce qu'elle est en chêne aussi, à sa manière." },
      { first: true, text: "Joceline Barraud a cinquante ans, des bras de rameur et un tablier propre, ce qui, ici, tient du défi. Elle sert une soupe de raves dans des écuelles de bois prêtées par le curé, et du cidre qu'elle avait caché sous le plancher de la soue. « Les cochons, je n'ai pas pu les cacher, dit-elle. Le cidre, si. Il faut savoir ce qu'on sauve. »" },
      { again: true, text: "Joceline essuie la seule table de l'auberge du Bac avec un chiffon qui a été une chemise. Elle te sert sans demander." },
      { with: "coliane", text: "Coliane s'adosse au comptoir, à l'endroit d'où l'on voit à la fois la porte et la fenêtre. Joceline la regarde faire et hoche la tête, comme entre gens du métier." },
    ],
    choices: [
      { label: "Écouter ce qui se dit autour de la table", to: "III_auberge_rumeurs" },
      { label: "Prendre une paillasse au grenier pour la nuit (2 sous)", fx: { gold: -2 }, to: "III_auberge_nuit" },
      { back: "III_hub" },
    ] },

  III_auberge_rumeurs: { act: "III", title: "Ce qui se dit au Bac", place: "merle",
    text: [
      "Autour de la seule table, il y a des bateliers sans bateau, un marchand de sel bloqué depuis trois semaines, et deux vieux qui jouent aux osselets avec des balles de fronde. On parle bas, et de tout.",
      "« Les bleus ont un champion, dit un batelier. Un homme masqué que le conseiller garde dans sa tente comme un chien de prix. Il paraît qu'il ne mange pas, qu'il ne parle pas, et qu'il s'entraîne avant l'aube, tout seul. » Un autre ricane : « Il paraît. Il paraît que les pourpres ont un espion qui ne dort jamais, aussi, et qu'il y a une femme en gants noirs qui vend les plans des uns aux autres. Il paraît beaucoup de choses. »",
      "Le marchand de sel, lui, ne parle que d'une chose : la duchesse veut les salines de Salvagne, le roi veut les garder, et le sel, en attendant, pourrit dans ses sacs. « Et la mine, ajoute un des vieux sans lever les yeux de ses osselets. Il y a toujours eu une histoire de mine, avec ceux d'Aldaran. Mon grand-père disait qu'ils avaient creusé trop bas, dans le temps, et que c'est de là qu'était venu le grand malheur. » Les autres le font taire. On ne parle pas de ça.",
      { if: { has: "grauk:vivant" }, text: "Un colporteur de passage jure qu'on a vu des trolls sur la route de la crête, il y a dix jours, qui descendaient vers le sud en bon ordre, comme une troupe. On rit. Tu ne ris pas." },
      { if: { has: "veyra:vue" }, text: "Joceline, en remplissant les écuelles, te glisse : « La femme aux gants noirs, elle a dormi ici, il y a quatre jours. Elle a payé en or. Elle n'a rien mangé. » Elle hausse les épaules. « Une cliente comme une autre. »" },
    ],
    choices: [{ back: "III_auberge" }] },

  III_auberge_nuit: { act: "III", title: "Le grenier du Bac", place: "merle", takes: "morning",
    fxEvery: { rest: true },
    text: [
      "Le grenier sent le foin et la pomme. Joceline y a mis des paillasses en rang pour ceux qui peuvent payer, et des couvertures pour ceux qui ne peuvent pas, qui dorment sur le plancher. Tu t'allonges, et le sommeil vient d'un coup, malgré les toux, les ronflements, les enfants qui pleurent, la pluie sur les tuiles.",
      { when: "night", text: "Vers le milieu de la nuit, une détonation sourde, au loin, du côté de Sainte-Orme ; puis plus rien. Personne ne se réveille. On s'habitue." },
      "Au matin, Joceline a mis de l'eau à chauffer pour qui veut se laver, dans un chaudron qu'elle a dû cacher, lui aussi. Tu repars propre, ce qui ne t'était pas arrivé depuis le Val d'Anse.",
    ],
    choices: [{ back: "III_hub" }] },

  III_eglise: { act: "III", title: "L'église de Merle", place: "merle",
    text: [
      { first: true, text: "On a poussé les bancs contre les murs et étalé de la paille dans la nef. Il y a une quarantaine de blessés couchés là, en rangs : des gens du village, des réfugiés, et des soldats des deux camps, que le curé a fait mettre côte à côte, sans demander à personne. Un piquier d'Aldaran et un arbalétrier de Vel-Orin partagent la même couverture, faute de mieux, et s'ignorent avec application." },
      { first: true, text: "Rainier passe de l'un à l'autre avec un broc et une cuillère. « Je n'ai pas de chirurgien, dit-il. J'ai deux femmes du village qui savent recoudre, de l'eau bouillie et des prières. Les prières, je les donne aux deux camps. L'eau aussi. C'est la seule chose ici sur laquelle les deux camps sont d'accord : quand ils meurent, ils veulent un curé. »" },
      { again: true, text: "Dans la nef de l'église, les blessés en rangs sur la paille, le broc du curé, l'odeur de vinaigre et de cire. Rainier lève la tête quand tu entres." },
      { with: "aubin", text: "Frère Aubin enlève son manteau sans un mot et va se laver les mains au bénitier. Rainier le regarde faire, puis lui tend le broc. Les deux prêtres n'ont pas échangé une parole, et ils travaillent déjà ensemble." },
      { if: { has: "passe:aide" }, text: "Tu as déjà vu une nef comme celle-ci. À Saint-Gilles-des-Prés, il y a sept ans, tu as porté les malades jusqu'au temple l'un après l'autre jusqu'à ce qu'il soit plein. L'odeur est la même. Tes mains se souviennent de ce qu'il faut faire avant toi." },
    ],
    choices: [
      { label: "Aider auprès des blessés", hide: { seen: "III_eglise_blesses" }, to: "III_eglise_blesses" },
      { label: "Confier la lettre de Nerys au curé", hide: { not: { item: "III_lettre_nerys" } }, to: "III_eglise_lettre" },
      { label: "Lire la lettre de Nerys avant de la confier", hide: { any: [{ not: { item: "III_lettre_nerys" } }, { has: "nerys:lue" }] }, fx: { flag: "nerys:lue" }, to: "III_lettre_lue" },
      { label: "Demander au curé ce qu'il sait du camp d'Aldaran", hide: { seen: "III_eglise_cure" }, to: "III_eglise_cure" },
      { back: "III_hub" },
    ] },

  III_eglise_cure: { act: "III", title: "Ce que sait le curé", place: "merle",
    text: [
      "Rainier s'assied sur la marche du chœur, enfin, et se frotte les yeux. « Le camp d'Aldaran ? Je monte y dire la messe le dimanche, pour les hommes des hautes terres. Le vieux roi y est, mais on le voit peu ; il tousse derrière une toile. On voit surtout son conseiller, Maître Vendrel. Un homme très poli. Il m'a fait porter du vin de messe, la première semaine. Je ne l'ai pas bu. » Il ne dit pas pourquoi.",
      "« Le connétable, Hugues de Vaux, c'est un vieux soldat, ajoute-t-il. Il ne veut pas cette guerre. Il la fera quand même, très bien. Et la princesse… » Il hésite. « La princesse Nerys vient parfois écouter la messe au fond, avec un manteau sur la tête, comme si on ne la reconnaissait pas. Elle a dix-neuf ans. Elle me demande toujours comment vont les gens de Merle. Elle est la seule. »",
      "Il se relève. « Si vous montez là-haut, montez par la route du moulin. On y arrête moins les gens. Et ne mangez rien qu'on vous donne dans la tente du conseiller. Je dis ça comme ça. Je suis un vieux curé qui se méfie de tout. »",
    ],
    choices: [{ back: "III_eglise" }] },

  III_eglise_blesses: { act: "III", title: "Les blessés de la nef", place: "merle",
    text: [
      "Tu fais ce qu'on te dit de faire. Tu changes des pansements qui collent. Tu fais boire des hommes qui ne peuvent pas lever la tête. Tu tiens la main d'un vieux batelier qui délire et qui t'appelle Lison, et tu réponds au nom de Lison, parce que ça le calme. Les heures passent sans que tu les comptes.",
      "Vers le soir, l'arbalétrier de Vel-Orin et le piquier d'Aldaran qui partagent la même couverture se mettent à parler, à voix basse, chacun dans sa langue, et à se comprendre à moitié. Ils parlent de leurs mères. Puis de la soupe. Puis ils s'endorment, épaule contre épaule. Le curé les regarde longtemps.",
      { with: "charline", text: "Charline a passé l'après-midi à chauffer des pierres dans le feu et à les envelopper de linge pour les mettre aux pieds des blessés qui grelottent. Elle ne parle à personne. Mais une fois, une seule, tu la vois sourire, quand une petite fille lui demande si elle est une fée." },
      { with: "thavary", text: "Thavary a porté de l'eau toute la journée, sans rien dire, deux seaux à la fois, du puits à la nef. Quand Rainier la remercie, elle se raidit comme si on l'avait insultée. « On ne remercie pas quelqu'un de payer ses dettes », dit-elle. Personne ne sait de quelle dette elle parle. Elle non plus, peut-être." },
    ],
    choices: [
      { label: "Laisse-moi faire : poser les mains sur les plus atteints", who: "aubin", fx: { conf: { aubin: 10 }, ep: ["seance", 800], fac: { ordre: 5 } }, to: "III_eglise_aubin" },
      { label: "Rester jusqu'au soir", fx: { ep: ["perso", 700], fac: { aldaran: 2, velorin: 2 }, conf: { pip: 5 } }, back: "III_eglise" },
    ] },

  III_eglise_aubin: { act: "III", title: "Les mains d'Aubin", place: "merle", with: "aubin",
    text: [
      "Frère Aubin passe d'un lit de paille à l'autre jusqu'à la nuit. Il ne fait pas de miracle. Il fait ce qu'il fait : il pose les mains, il prie à voix basse, et la fièvre baisse d'un cran, la douleur se desserre, le sang s'arrête un peu plus vite. Chez certains, rien. Chez d'autres, assez pour passer la nuit.",
      "Quand il s'arrête, il s'assied contre un pilier, les mains sur les genoux, vidé. Rainier vient s'asseoir à côté de lui avec deux gobelets de cidre. « Saint-Ivo ? demande le curé. — Le dernier, répond Aubin. — Alors on est deux derniers », dit Rainier. Ils boivent. Tu les laisses.",
    ],
    choices: [{ back: "III_eglise" }] },

  III_lettre_lue: { act: "III", title: "La lettre de Nerys", place: "merle",
    text: [
      "Le cachet de Nerys est une simple goutte de cire bleue sans empreinte : elle n'a pas voulu se servir de son sceau. Tu le soulèves à la pointe d'un couteau chauffé, comme on le fait dans les chancelleries, pour pouvoir le remettre. L'écriture est droite, nette, sans une rature.",
      "*« Madame, je n'ai aucune autorité pour vous écrire et je le fais quand même. Mon père est malade et n'entend plus que ce qu'on lui répète. On lui a dit que vous vouliez rouvrir la vieille mine d'Aldar ; personne à notre cour n'a jamais vu la lettre qui le prouve. Je crois qu'on vous a dit sur nous des choses de la même espèce. Je vous propose de parler, vous et moi, sans conseillers, sur la colline des Six, au jour que vous voudrez. Si vous ne venez pas, je n'en dirai rien à personne. Si vous venez, ne venez pas seule : je ne suis plus sûre que nos gens soient les seuls à nous écouter. Nerys. »*",
      "Tu recolles le cachet. Ça ne se voit presque pas.",
    ],
    choices: [{ back: "III_eglise" }] },

  III_eglise_lettre: { act: "III", title: "Le chemin des lettres", place: "merle",
    fx: { drop: "III_lettre_nerys", set: { nerys: "portee" }, quest: "III_nerys", fac: { aldaran: 5 }, regard: { nerys: "redevable" }, ep: ["seance", 1500] },
    text: [
      "Rainier prend la lettre sans la regarder et la glisse dans son bréviaire. « Il y a un chemin, dit-il. Tous les deux jours, Bastien passe la rivière avec les morts : ceux des pourpres qu'on a trouvés chez nous, contre ceux des nôtres qu'on a trouvés chez eux. Les deux camps laissent passer le bac des morts, et le curé qui va avec. À Sainte-Orme, il y a un vieux chanoine qui me doit sa cure. » Il referme le bréviaire. « Demain soir, elle sera à l'abbaye. Après, je n'en sais rien. Ce qu'on fait des lettres, une fois qu'elles sont parties, ce n'est plus l'affaire de personne. »",
      "Il te regarde. « Vous savez ce qu'il y a dedans ? » Tu fais oui de la tête, ou non ; il ne fait pas de différence. « Moi, je ne veux pas le savoir. Un curé qui sait ce qu'il porte finit toujours par le porter à quelqu'un. »",
      { if: { has: "nerys:lue" }, text: "Tu penses à la colline des Six, au jour que la duchesse voudra. Tu penses aussi à la dernière phrase. *Je ne suis plus sûre que nos gens soient les seuls à nous écouter.*" },
    ],
    choices: [{ back: "III_hub" }] },

  III_mariette: { act: "III", title: "Ysoline", place: "merle",
    fx: { drop: "III_lettre_mariette", ep: ["perso", 800], conf: { aubin: 5, pip: 5, coliane: 5 } },
    text: [
      "On te montre une maison au bout de la rue, où une femme étend du linge sous l'auvent pour qu'il ne prenne pas la pluie. Trois enfants autour d'elle. Elle te voit arriver avec la lettre à la main, et elle comprend avant que tu aies ouvert la bouche, parce qu'elle reconnaît sa propre écriture, et parce qu'elle sait que Clarin ne s'en serait jamais séparé vivant.",
      "Elle ne crie pas. Elle finit d'étendre la chemise qu'elle tenait, très soigneusement, en tirant sur les manches pour qu'elles sèchent droites. Puis elle prend la lettre et la serre contre elle. « Où ? » demande-t-elle seulement. Tu lui dis : le carrefour du chemin des salines. Le calvaire.",
      { if: { seen: "III_r_pendu_terre" }, text: "Tu lui dis aussi qu'il est en terre, au pied de la croix, et qu'il n'est pas resté pendu au vent. Elle ferme les yeux. C'est la seule chose que tu peux lui donner, et tu vois que ce n'est pas rien." },
      { if: { not: { seen: "III_r_pendu_terre" } }, text: "Tu ne lui dis pas que tu l'as laissé là-bas, sur la traverse, avec la planche sur la poitrine. Tu lui dis seulement l'endroit. Elle ira. Tu le vois à sa façon de regarder vers le nord." },
      "Le plus grand des enfants, un garçon de dix ans, te regarde par-dessus l'épaule de sa mère avec une colère qui ne sait pas encore où aller. Tu espères qu'elle n'ira jamais du côté de l'Isarde.",
    ],
    choices: [{ back: "III_hub" }] },

  III_refugies: { act: "III", title: "La grève", place: "merle",
    text: [
      { first: true, text: "La grève de Merle, où l'on tirait les barques au sec, est devenue un village de toile et de planches. Les réfugiés des rives sont venus là parce que c'est le bout du monde habité : derrière, il n'y a plus que la rivière et l'autre armée. Ils attendent. Ils ne savent pas quoi. Que ça finisse, qu'un bateau vienne, que quelqu'un leur dise où aller." },
      { again: true, text: "Sur la grève, les feux fument sous les bâches, et les gens attendent toujours. Quelques-uns te saluent, maintenant." },
      "Un homme a planté au bord de l'eau un piquet avec une pancarte : *À VENDRE, CHAMP DE DEUX ARPENTS À RUELLE-BASSE, BONNE TERRE, PRIX À DÉBATTRE.* Il est assis à côté. Personne ne s'arrête.",
      { if: { has: "passe:profite" }, text: "Tu t'arrêtes. Tu ne peux pas faire autrement. Il y a sept ans, à Saint-Gilles-des-Prés, c'est toi qui passais devant les pancartes comme celle-ci, et tu t'arrêtais, et tu proposais un prix. Un prix bas. L'homme te regarde avec espoir. Tu ne sais pas ce que tu lui dois, ni à qui." },
      { if: { has: "III:aulnaies_merle" }, text: "Loyse, la femme de la cave des Aulnaies, est là, sous un auvent de roseaux, avec ses deux filles et son homme à l'attelle. Elle te fait signe. Elle a trouvé de quoi faire une soupe ; elle t'en offre une écuelle, et tu ne peux pas refuser." },
      { if: { seen: "IIIA_deserteur_parle" }, text: "Une vieille femme est assise un peu à l'écart des autres, sur un sac de son, les mains sur les genoux, et regarde la colline où campent les bleus. Le garçon aux fers, là-haut, t'a dit son nom : Gisèle Morel. La mère d'Arnaud." },
    ],
    choices: [
      { label: "Parler à Gisèle Morel", hide: { any: [{ not: { seen: "IIIA_deserteur_parle" } }, { seen: "III_refugies_morel" }, { quest: "III_deserteur" }] }, to: "III_refugies_morel" },
      { label: "Racheter le champ de l'homme à la pancarte, à son prix (10 sous)", hide: { seen: "III_refugies_champ" }, fx: { gold: -10 }, to: "III_refugies_champ" },
      { back: "III_hub" },
    ] },

  III_refugies_champ: { act: "III", title: "Deux arpents à Ruelle-Basse", place: "merle",
    fx: { ep: ["perso", 500], conf: { pip: 5, coliane: 5 } },
    text: [
      "Tu lui demandes son prix. Il dit dix sous, puis se reprend, honteux de demander autant, puis se reprend encore, honteux d'avoir honte. Tu lui donnes les dix sous. Il veut te faire un papier ; il n'a pas d'encre ; il trace une croix sur un bout de planche avec un charbon et te le tend. *Deux arpents à Ruelle-Basse.*",
      "« Quand ce sera fini, dit-il, si vous ne venez pas les travailler, je pourrai… je pourrai les garder pour vous ? » Tu lui dis de les garder pour lui. Il ne comprend pas. Puis il comprend, et il se met à pleurer, ce qui gêne tout le monde, et lui le premier.",
      { if: { has: "passe:profite" }, text: "Ça ne rachète rien. Tu le sais. Les terres de Saint-Gilles valent de l'or aujourd'hui, et tu ne les as jamais revues. Mais pour la première fois depuis sept ans, le mot *arpent* ne te serre pas la gorge." },
    ],
    choices: [{ back: "III_refugies" }] },

  III_refugies_morel: { act: "III", title: "Gisèle Morel", place: "merle",
    fx: { meet: "III_perrine" },
    text: [
      "Elle ne se lève pas quand tu t'assieds près d'elle. Elle a des mains de femme qui a toujours travaillé, et des yeux qui n'ont plus pleuré depuis longtemps parce qu'il n'y avait plus rien à pleurer. Quand tu prononces le nom d'Arnaud, elle tourne la tête.",
      "« Il est venu, dit-elle. La semaine des fourrageurs. Ils avaient tout pris, le seigle, le son, les poules. Il a su ça au camp, je ne sais pas comment. Il est descendu la nuit avec un sac de farine sur le dos, la farine de sa ration, qu'il avait gardée trois semaines. Il me l'a posée là, sur la table. Il est reparti avant le jour. Il voulait être rentré avant l'appel. » Elle serre les mains. « Il est rentré ? »",
      "Tu lui dis où il est. Elle ne dit rien pendant un long moment. Puis elle fouille dans son corsage et en sort un papier plié, taché de graisse. « Les fourrageurs m'ont laissé ça. Un bon. Le sergent a dit qu'avec ça, le roi me paierait mon grain après la guerre. » Elle te le tend. « Moi, je ne sais pas lire. Vous, peut-être, ça vous servira. »",
    ],
    choices: [{ label: "Prendre le bon de réquisition", fx: { item: "III_billet_morel", ep: ["perso", 500] }, back: "III_refugies" }] },

  III_berge: { act: "III", title: "Le bac des morts", place: "merle",
    text: [
      { first: true, text: "Au bout de la grève, là où le courant ralentit, le bac de Bastien est amarré à un pieu : un grand plateau de planches goudronnées, une main courante, un câble qui traverse l'Isarde et que les deux camps, par une sorte d'accord muet, n'ont pas coupé. C'est par là que passent les morts, et le curé, et rien d'autre." },
      { first: true, text: "D'ici, on voit tout : la rivière large et grise, le pré hérissé de flèches, la colline des Six au sud avec son tombeau, les tentes bleues au nord, les pavillons pourpres en face, et plus loin vers l'est, à l'endroit où l'Isarde s'élargit sur des bancs de gravier, le gué de Gaudre et les tours carrées de la commanderie qui le garde. C'est là qu'ils se battront. Tout le monde le sait. Le terrain n'offre pas d'autre endroit." },
      { again: true, text: "Le bac des morts se balance au bout de son câble, et Bastien, assis sur la main courante, regarde l'eau." },
      { if: { seen: "III_mission_seul" }, text: "Bastien te fait une place à côté de lui sur la main courante. « Je l'ai dit à tout le monde, que vous étiez venu{e}, dit-il. Ça n'a rien changé. Mais je l'ai dit. »" },
      { if: { not: { seen: "III_mission_seul" } }, text: "Bastien, le passeur, est un homme sec et noueux aux avant-bras brûlés par les cordes. Il ne te demande rien. Il te montre seulement l'eau, du menton, comme pour dire : voilà ce que je garde." },
      { if: { count: TROIS, min: 1 }, text: "« L'eau a changé, dit Bastien. Je la connais depuis cinquante ans. Elle est plus lourde. Le câble ne chante plus pareil. » Il crache dans la rivière, ce qu'il ne fait jamais, et il a l'air de le regretter tout de suite." },
    ],
    choices: [{ back: "III_hub" }] },

  III_veillee: { act: "III", title: "La veillée chez le curé", place: "merle", takes: "night",
    text: [
      "Le presbytère n'a qu'une pièce chauffée, et ce soir tout le monde y tient : le curé, Joceline, Bastien, deux femmes du village, une poignée d'enfants endormis en tas dans un coin, et vous. On a fait cuire des châtaignes dans la braise. Quelqu'un a sorti une vielle, et puis l'a rangée sans en jouer : on n'a pas envie qu'on entende de la musique depuis l'autre rive.",
      "Joceline raconte comment elle a caché le cidre. Bastien raconte le jour où il a passé un évêque et sa mule, et où la mule est tombée à l'eau, et pas l'évêque. On rit, à voix basse. Le curé, lui, ne raconte rien. Il regarde le feu, et une fois seulement il dit : « On croit toujours que la guerre, c'est les batailles. Ce n'est pas les batailles. C'est les jours entre. »",
      { with: "coliane", text: "Coliane s'est assise par terre près des enfants endormis, le dos au mur, un couteau sur les genoux. Au bout d'un moment, la plus petite a posé sa tête sur sa cuisse sans se réveiller. Coliane n'a plus bougé de la nuit." },
      { with: "gloup", text: "Gloup a trouvé une châtaigne tombée de la braise et la fait rouler devant lui, d'un bout à l'autre de la pièce, avec des petits bruits ravis. Les enfants qui ne dorment pas le regardent faire, et pour la première fois depuis que tu es à Merle, ils rient fort, et personne ne les fait taire." },
      { with: "thavary", text: "Thavary, assise très droite sur un tabouret près de la porte, ne mange rien et ne dit rien. Quand le curé parle du camp d'Aldaran et de Maître Vendrel, elle se lève et sort prendre l'air. Elle reste dehors longtemps." },
      { with: "pip", text: "Pip s'est posé sur le manteau de la cheminée. Il éclaire les visages par en dessous. « Ils sont contents d'être ensemble, te dit-il tout bas. Même si demain ils auront encore peur. C'est ça, une veillée ? » C'est ça." },
    ],
    choices: [{ label: "Dormir là, contre le mur chaud de la cheminée", fx: { rest: true, ep: ["perso", 400], conf: { pip: 5, coliane: 5, gloup: 5, aubin: 5, charline: 5 } }, back: "III_hub" }] },
});

// ------------------------------------------------------------------ side quest III_fleches: the arrow children of Merle
Object.assign(P, {
  III_fleches: { act: "III", title: "Les ramasseurs de flèches", place: "merle",
    fx: { meet: "III_fanchon" },
    text: [
      "Ils sont une douzaine, de six à treize ans, assis sur les marches de l'église avec leur récolte de la nuit : des flèches à empennage gris des archers d'Aldaran, des carreaux courts et lourds de Vel-Orin, des pointes tordues, des fûts cassés. Ils trient avec un sérieux de marchands. Les bonnes d'un côté, les réparables de l'autre, les pointes seules dans un seau.",
      "Celle qui commande s'appelle Tiphaine. Douze ans, un fichu noué sous le menton, une voix qui ne tremble pas. « Les bleus nous prennent les flèches grises à un denier les dix, dit-elle. Les carreaux, on les revend aux pourpres, de l'autre côté, par le bac des morts. Bastien ne veut pas, mais il ferme les yeux. » Elle a l'air de trouver ça parfaitement normal. Ici, ça l'est.",
      "Puis elle te regarde mieux, tes armes, ta façon de te tenir. Quelque chose change dans son visage. « Vous, vous savez vous battre, dit-elle. Vous pourriez aller sur le pré la nuit sans vous faire tuer. » Ce n'est pas une question. C'est le début d'une demande.",
      { with: "gloup", text: "Deux des plus petits ont réussi à approcher Gloup et le tâtent du bout du doigt en poussant des cris de dégoût ravi. Gloup se laisse faire avec une patience de grand-père." },
    ],
    choices: [
      { label: "« Qu'est-ce qu'il se passe, Tiphaine ? »", big: true, to: "III_fleches_guillot" },
      { back: "III_hub" },
    ] },

  III_fleches_guillot: { act: "III", title: "Tassin", place: "merle",
    fx: { meet: "III_guillot" },
    text: [
      "« Tassin, dit Tiphaine. Mon frère. Il a neuf ans. Hier soir, il est allé au pré des Saules, tout au bout, là où les chevaux sont tombés la semaine dernière. Il disait qu'il y avait plein de carreaux là-bas, que personne n'y allait parce que c'est trop près des pourpres. Il n'est pas revenu. » Elle a les poings serrés sur ses genoux. « Ce matin, on l'a entendu. Il appelle. Pas fort. On ne peut pas y aller de jour : les deux camps tirent sur ce qui bouge, là-bas. »",
      "Les autres enfants se sont tus. L'un d'eux montre du doigt, vers l'aval, une ligne de saules têtards au bord de l'eau, à un quart de lieue, entre les deux camps. Rien ne bouge. Puis, très loin, une petite voix porte sur l'eau, aiguë, et se tait.",
      { if: { has: "passe:aide" }, text: "Tu as porté des enfants malades jusqu'au temple, il y a sept ans. Tu te souviens du poids. Tu te souviens que ce n'était jamais assez lourd pour qu'on dise non." },
    ],
    choices: [
      { label: "« J'irai le chercher cette nuit. »", big: true, to: "III_fleches_nuit" },
      { label: "« Laisse-moi d'abord voir le terrain. »", back: "III_hub" },
    ] },

  III_fleches_nuit: { act: "III", title: "Le pré, la nuit", place: "merle", takes: "night",
    text: [
      "Tu pars à la tombée de la nuit, par le bras mort, là où les roseaux sont les plus hauts. Il fait un froid humide qui monte du sol. Le brouillard est venu avec le soir, à hauteur d'homme : on voit les étoiles au-dessus, et rien devant. De chaque côté de la rivière, les feux de garde des deux camps font des taches rousses dans le blanc.",
      "Il faut traverser le pré. Trois cents pas à découvert, l'herbe rase, les flèches plantées partout qui accrochent les chevilles et qui craquent quand on marche dessus. Des patrouilles passent, on les entend : des pas, une toux, un cliquetis de harnais. Les mercenaires d'Aldaran tiennent ce côté-ci, la nuit. On dit qu'ils tirent d'abord.",
      { with: "coliane", text: "Coliane s'est accroupie à l'orée des roseaux. Elle écoute. Puis elle te montre deux doigts, puis un geste vers la gauche : deux hommes, par là, qui s'éloignent." },
      { with: "pip", text: "Pip a éteint sa lumière presque tout entière. Il n'est plus qu'une braise au creux de ta main. « Je peux la trouver, la petite voix, souffle-t-il. Les gens qui ont peur, ça brille un peu, pour moi. »" },
    ],
    choices: [
      { label: "Traverser le pré à plat ventre, entre les patrouilles", test: { dom: "discretion", diff: -20, label: "Traverser le pré en silence", help: [{ with: "coliane", v: 10 }, { with: "pip", v: 10 }, { with: "gloup", v: 5 }] }, win: { fx: { ep: ["perso", 800] }, to: "III_fleches_pre" }, lose: { to: "III_fleches_patrouille" } },
      { label: "Laisse-moi faire : je passe devant, tu suis mes pas", who: "coliane", fx: { conf: { coliane: 10 }, ep: ["perso", 700] }, to: "III_fleches_pre" },
      { label: "Laisse-moi faire : je vais trouver la petite voix", who: "pip", fx: { conf: { pip: 10 }, ep: ["perso", 700] }, to: "III_fleches_pre" },
      { label: "Laisse-moi faire : je glisse dans la boue et je reviens", who: "gloup", fx: { conf: { gloup: 10 }, ep: ["perso", 700] }, to: "III_fleches_gloup" },
      { label: "Marcher droit, à découvert, l'arme à la main", to: "III_fleches_patrouille" },
    ] },

  III_fleches_gloup: { act: "III", title: "Le pré, la nuit", place: "merle", with: "gloup",
    text: [
      "Gloup se laisse couler dans le fossé qui longe le pré et disparaît. Tu ne le vois plus. Tu entends seulement, de loin en loin, un petit bruit mouillé, comme une bouche qui goûte la boue, de plus en plus loin, vers les saules. Tu attends dans les roseaux, et le temps est très long.",
      "Puis il revient, plus vite qu'il n'est parti, tout gonflé d'importance, et il tire sur ta botte. Il a trouvé. Il te guide par le fossé, à quatre pattes dans l'eau froide, jusqu'aux saules, sans qu'une seule sentinelle lève la tête.",
    ],
    choices: [{ label: "Suivre Gloup jusqu'aux saules", big: true, to: "III_fleches_pre" }] },

  III_fleches_patrouille: { act: "III", title: "La patrouille du Chardon", place: "merle",
    combat: { title: "Les lances du Chardon", enemies: [{ id: "III_mercenaire", n: 2 }], range: "loin",
      win: { fx: { ep: ["perso", 900] }, to: "III_fleches_pre" },
      lose: { fx: { pv: -3 }, to: "III_fleches_tard" },
      flee: { label: "Te jeter dans le fossé et ramper vers les saules", dom: "discretion", diff: -10, to: "III_fleches_pre" } },
    text: [
      "« Qui va là ? » Une lanterne s'ouvre d'un coup, à vingt pas, et dans le cercle de lumière tu vois deux hommes en cuirasse dépareillée, un chardon brodé sur l'épaule, qui abaissent leurs lances. Mercenaires. Ils ne demandent pas deux fois.",
    ] },

  III_fleches_pre: { act: "III", title: "Le pré des Saules", place: "merle",
    text: [
      "Les chevaux sont là, sous les saules, trois masses noires qui sentent déjà. Sous le plus grand, une jambe d'enfant dépasse, coincée à hauteur du genou. Tassin est vivant. Il a passé une nuit et un jour sous le cheval, à appeler doucement pour que les soldats ne l'entendent pas, et sa mère non plus, et personne. Il a la bouche bleue de froid. Il ne pleure plus : il n'a plus de quoi.",
      "Il n'est pas seul. Adossé au ventre du cheval, de l'autre côté, il y a un soldat. Un garçon à peine plus vieux que Tiphaine, seize ou dix-sept ans, en casaque pourpre au croissant d'or, un carreau d'Aldaran dans la cuisse et une arbalète cassée sur les genoux. C'est lui qui a tenu Tassin au chaud toute la nuit, sous sa cape. Il te regarde arriver avec l'air de quelqu'un qui a déjà accepté de mourir, et qui aurait préféré pas.",
      "« Tancrède, dit-il, dans le parler du sud, chantant et fatigué. Je n'ai pas tiré sur l'enfant. Je n'ai tiré sur personne. Prenez-le, il a froid. »",
      { if: { arch: "pretre" }, text: "Tu vois tout de suite que la cuisse du soldat est infectée, mais que l'artère n'est pas touchée. Il peut vivre. S'il est soigné. S'il marche." },
    ],
    choices: [
      { label: "Soulever le cheval et emmener les deux", test: { dom: "combat", diff: -10, label: "Dégager l'enfant et porter le soldat", help: [{ with: "thavary", v: 15 }, { with: "aubin", v: 5 }, { with: "coliane", v: 5 }, { with: "charline", v: 5 }] }, win: { fx: { ep: ["seance", 1200], conf: { pip: 10, aubin: 10 } }, to: "III_fleches_deux" }, lose: { to: "III_fleches_un" } },
      { label: "Dégager Tassin, et laisser le soldat à son sort", fx: { conf: { pip: -10, aubin: -5 } }, to: "III_fleches_un" },
    ] },

  III_fleches_un: { act: "III", title: "Le retour par le fossé", place: "merle",
    fx: { set: { fleches: "guillot" }, quest: "III_fleches", ep: ["seance", 1000], fac: { aldaran: 2 } },
    text: [
      { outcome: "lose", text: "Tu dégages la jambe de Tassin en faisant levier avec une lance cassée, et le cheval retombe sur le côté avec un bruit mou. Mais quand tu passes l'épaule sous le bras de Tancrède pour le relever, il crie, tu glisses, et une lanterne s'allume du côté des mercenaires. Il te pousse. « Partez, souffle-t-il. Partez, avec le petit. Moi, ils me prendront. » Tu pars.", else: "Tu dégages la jambe de Tassin avec une lance cassée glissée sous le flanc du cheval. Tancrède t'aide, de ce qu'il peut, en poussant de ses deux mains. Puis il se laisse retomber contre la bête morte. Il ne te demande rien. Il a compris." },
      "Tu reviens par le fossé, avec Tassin contre ta poitrine, si léger que tu as peur qu'il ne soit plus là. Tiphaine vous attend à l'orée des roseaux. Elle prend son frère, elle le serre, elle ne dit rien du tout, et c'est la chose la plus bruyante que tu aies entendue de la nuit.",
      "Au matin, Tassin a une fièvre de cheval et une jambe noire de bleus, mais pas cassée. Le curé dit qu'il vivra. Du pré des Saules, il ne revient aucun bruit. Plus tard, Bastien te dira qu'une patrouille du Chardon a ramené un prisonnier de Vel-Orin au camp, à l'aube, sur un brancard. Ou peut-être qu'elle l'a laissé sur place. Bastien ne sait pas. Personne ne sait.",
    ],
    choices: [{ back: "III_hub" }] },

  III_fleches_deux: { act: "III", title: "Le retour par le fossé", place: "merle",
    text: [
      "Tu glisses une lance cassée sous le flanc du cheval, tu pèses de tout ton poids, et la bête bouge d'un pouce, de deux. Tassin sort comme un bouchon. Puis tu passes le bras de Tancrède autour de ton cou et tu le relèves, et il serre les dents si fort que tu les entends grincer. Il marche. Il traîne la jambe, mais il marche.",
      { with: "thavary", text: "C'est Thavary qui porte Tassin, enroulé dans sa cape, contre sa poitrine, comme on porte un enfant de sa maison. Elle ne dit pas un mot de tout le retour." },
      "Le retour prend une éternité. Vous rampez, vous vous arrêtez, vous repartez. Une fois, une lanterne passe à dix pas et vous restez allongés dans l'eau du fossé jusqu'à ne plus sentir vos jambes. Puis il y a les roseaux, et Tiphaine qui pleure enfin, et le curé qui sort de l'église avec une couverture dans chaque main.",
      "Dans la sacristie, Tancrède est allongé sur la table des ornements, et le curé lui a ôté son carreau. Il regarde le plafond. « Qu'est-ce que vous allez faire de moi ? » demande-t-il. Rainier te regarde. C'est à toi de répondre.",
    ],
    choices: [
      { label: "Le cacher jusqu'à ce qu'il puisse marcher, puis le faire passer par le bac des morts", fx: { set: { fleches: "ramenes" }, quest: "III_fleches", ep: ["seance", 1800], conf: { pip: 10, aubin: 10, coliane: 5 }, fac: { velorin: 10 } }, to: "III_fleches_bac" },
      { label: "Le remettre au camp d'Aldaran, comme prisonnier", fx: { set: { fleches: "livre" }, quest: "III_fleches", gold: 15, ep: ["seance", 1000], fac: { aldaran: 10 }, conf: { pip: -15, aubin: -10, thavary: 5 } }, to: "III_fleches_livre" },
    ] },

  III_fleches_bac: { act: "III", title: "Le bac des morts", place: "merle",
    text: [
      "Trois jours plus tard, à la nuit tombée, Bastien charge sur le bac des morts les deux cercueils de la semaine : un piquier et un arbalétrier, cloués dans des planches de volets. Dans le second, il y a de la place pour un homme qui ne serait pas mort. Tancrède s'y allonge, très pâle, et te serre la main avant qu'on pose le couvercle.",
      "« Je dirai à ma mère, dit-il. Je lui dirai qu'il y a des gens, de l'autre côté. » Il cherche ses mots, ne les trouve pas, et laisse tomber. Le bac s'éloigne sur l'eau noire, le long du câble qui grince. De l'autre côté, une lanterne s'agite trois fois. Il est passé.",
      "Tiphaine est venue voir partir le bac. Elle ne dit rien. Le lendemain, les enfants de Merle ne vont plus sur le pré des Saules. Ils vont seulement au bout du pré, là où l'on voit le village. Ce n'est pas grand-chose. C'est peut-être tout.",
    ],
    choices: [{ back: "III_hub" }] },

  III_fleches_livre: { act: "III", title: "Le prisonnier", place: "merle",
    text: [
      "Au matin, deux piquiers d'Aldaran descendent de la colline avec un brancard, et le sergent qui les mène te remet quinze sous, la prime du roi pour un prisonnier vivant. Tancrède ne te regarde pas quand on l'emporte. Il regarde le curé. Rainier baisse les yeux le premier.",
      "« On l'échangera, dit le sergent pour te rassurer, ou pour se rassurer lui-même. Ou on le mettra aux palissades, à creuser. Ils ne meurent pas tous, aux palissades. » Tiphaine a tout vu depuis le porche. Elle a ramené son frère dans ses bras, et elle te regarde avec une gratitude qui a quelque chose de cassé au milieu.",
      { with: "pip", text: "Pip ne vient pas se poser sur ton épaule de toute la journée. Le soir, il demande seulement : « Il avait tenu Tassin au chaud, pourtant ? » Ce n'est pas un reproche. C'est pire : c'est une vraie question." },
    ],
    choices: [{ back: "III_hub" }] },

  III_fleches_tard: { act: "III", title: "Au matin", place: "merle",
    fx: { set: { fleches: "tard" }, quest: "III_fleches", ep: ["perso", 600] },
    text: [
      "Tu te réveilles dans les roseaux du bras mort, au petit jour, avec du sang séché sur la tempe et la bouche pleine de terre. Les mercenaires t'ont laissé{e} pour mort{e}, ou pour rien. Le brouillard se lève lentement sur le pré.",
      "Quand tu arrives aux saules, il n'y a plus que les chevaux. Les traces dans la boue racontent le reste : des bottes cloutées, un brancard, une lutte, puis rien. Plus tard dans la matinée, Bastien apprend qu'une patrouille du Chardon a ramené au camp d'Aldaran un prisonnier pourpre, et un enfant de Merle qu'ils ont trouvé avec lui. L'enfant, on l'a rendu au curé à midi, avec une jambe en attelle et la fièvre. Le prisonnier, non.",
      "Tiphaine ne te reproche rien. Elle dit seulement : « Vous y êtes allé{e}. » Et elle retourne trier les flèches sur les marches de l'église, parce qu'il faut bien manger, et que les bleus paient un denier les dix.",
    ],
    choices: [{ back: "III_hub" }] },
});

// ------------------------------------------------------------------ the road to Hautmont (r_hautmont): leg
Object.assign(P, {
  III_h_barrage: { title: "Le barrage du moulin",
    text: [
      "À mi-pente, là où la route de Hautmont passe sous un moulin à vent aux ailes arrêtées, Aldaran a planté un barrage : une barrière de bois, un brasero, six piquiers et un sergent recruteur qui tient un registre sur un tonneau. Devant lui, en file, des hommes de Merle et des villages de la rive, que ses soldats ont ramassés dans les champs. On leur mesure la taille contre une perche. Ceux qui dépassent la marque sont inscrits.",
      "Un garçon roux, pas plus de quinze ans, dépasse d'un doigt. Sa mère s'accroche à sa manche et le sergent la fait écarter. « Le roi a besoin de bras, dit-il. Le roi nourrit ceux qui le servent. C'est plus que ce qu'elle peut faire, elle. » Il trempe sa plume.",
      { with: "thavary", text: "Thavary s'est arrêtée net. Elle regarde la perche, le registre, le garçon. « Mon grand-père levait des hommes comme ça, dit-elle à voix basse. Il appelait ça l'honneur de la maison. » Elle n'a pas l'air d'en être sûre, ce matin." },
    ],
    choices: [
      { label: "Montrer ta lettre de l'Ordre et réclamer le garçon comme guide", hide: { not: { item: "III_ordre_mission" } }, fx: { ep: ["perso", 600], conf: { pip: 5 } }, to: "III_h_barrage_libere" },
      { label: "Discuter la mesure : la perche est trop courte", test: { dom: "social", diff: -10, label: "Faire mentir la perche", help: [{ with: "charline", v: 10 }, { with: "aubin", v: 10 }] }, win: { fx: { ep: ["perso", 600], conf: { pip: 5 } }, to: "III_h_barrage_libere" }, lose: { to: "III_h_barrage_inscrit" } },
      { label: "Glisser deux sous au sergent pour qu'il raye le nom (2 sous)", fx: { gold: -2, ep: ["perso", 300] }, to: "III_h_barrage_libere" },
      { label: "Ne pas t'en mêler et passer", to: "III_h_barrage_inscrit" },
    ] },

  III_h_barrage_libere: { title: "Le barrage du moulin",
    text: [
      "Le sergent soupire, raye une ligne de son registre, et fait signe au garçon de déguerpir. La mère l'emmène par la manche sans même te regarder, à grands pas, comme si elle avait peur qu'on change d'avis. On ne change pas d'avis. On mesure le suivant.",
      "Il y a encore huit hommes dans la file. Tu ne peux pas les racheter tous, et le sergent le sait, et toi aussi. Il te fait passer la barrière avec une politesse exagérée.",
    ],
    choices: [{ label: "Reprendre la route du camp", back: R }] },

  III_h_barrage_inscrit: { title: "Le barrage du moulin",
    text: [
      "La plume crisse. Le garçon roux devient le piquier numéro je-ne-sais-combien de l'armée du roi Aldric, et sa mère s'assied au bord du chemin, dans la boue, et ne se relève pas. On te fait passer la barrière.",
      "Plus haut sur la route, tu te retournes. Elle est toujours assise là. Le garçon, entre deux piquiers, marche vers le camp sans se retourner, parce qu'on lui a dit que ça portait malheur.",
    ],
    choices: [{ label: "Reprendre la route du camp", back: R }] },
});

// ------------------------------------------------------------------ the camp of Aldaran under Hautmont-le-Bas
var ADMIS = { not: { has: "IIIA:admis" } };
Object.assign(P, {
  IIIA_camp: { act: "III", title: "Le camp d'Aldaran", place: "hautmont", hub: true, routes: true, backName: "l'allée centrale du camp",
    fx: { clock: { voix: 1 }, meet: "aldric" },
    text: [
      { first: true, text: "Le camp d'Aldaran s'étale sous les murs de Hautmont-le-Bas comme une seconde ville, plus grande que la première : des centaines de tentes bleues en rangs tirés au cordeau, des allées de planches posées sur la boue, des fanions à la tour d'argent qui claquent au vent du nord, des parcs à chevaux, des forges de campagne qui cognent du matin au soir. Tout est propre, aligné, compté. Ça sent le cuir graissé, la soupe aux pois, le crottin et la fumée de bois vert." },
      { first: true, text: "Au centre, sur une butte, le grand pavillon du roi, rayé de bleu et de blanc, avec la bannière royale qui pend, mouillée, à son mât. À côté, un pavillon plus petit, gris perle, sans bannière, aux pans tenus fermés : celui du premier conseiller. Plus bas, vers la rivière, un quartier qui n'est pas aligné du tout, plein de couleurs et de cris : les mercenaires. Et tout autour, une palissade de pieux neufs, des fossés, des chevaux de frise. On n'entre pas ici comme dans Merle." },
      { again: true, text: "L'allée centrale du camp d'Aldaran, ses planches sur la boue, ses tentes bleues en rang. Les sentinelles te connaissent, maintenant ; elles te regardent passer sans te sourire." },
      { again: true, when: "night", text: "La nuit, le camp est une forêt de feux. Les chants des mercenaires montent du bas, et les rondes passent avec leurs lanternes, deux par deux, en se donnant le mot." },
      { if: { has: "III:aldaran" }, text: "Depuis le conseil de guerre, le camp a changé d'allure. On affûte, on graisse, on compte les carreaux. Les forgerons ne dorment plus. On sent qu'il va se passer quelque chose, et que tout le monde sait quoi, sauf ceux qui y mourront." },
      { if: { is: { deserteur: "pendu" } }, text: "Au bout de l'allée, près du parc à chevaux, une potence neuve. Elle est vide, maintenant. On n'a pas pris la peine de la démonter." },
      { if: { is: { nerys: "saisie" } }, text: "Devant la tente de la princesse, il y a deux gardes de plus, des hommes en gris, sans tabard. Ce ne sont pas des gens du roi." },
      { if: ADMIS, text: "À la porte principale, une barrière, un corps de garde et un sergent qui fait vider les poches de tout ce qui entre." },
    ],
    choices: [
      { label: "Te présenter au poste de garde", big: true, hide: { has: "IIIA:admis" }, to: "IIIA_garde" },
      { label: "La tente du connétable Hugues de Vaux", hide: ADMIS, to: "IIIA_connetable" },
      { label: "Demander audience au roi", big: true, hide: { any: [ADMIS, { seen: "IIIA_roi" }] }, if: { any: [{ has: "IIIA:mediateur" }, { has: "IIIA:hugues" }] }, why: "Personne ne t'a encore présenté{e} au roi. Le connétable pourrait le faire.", to: "IIIA_roi" },
      { label: "Le conseil de guerre, dans le pavillon du roi", big: true, hide: { any: [ADMIS, { has: "III:aldaran" }] }, if: { seen: "IIIA_roi" }, why: "On n'entre pas au conseil sans avoir été reçu{e} par le roi.", to: "IIIA_conseil" },
      { label: "Le pavillon gris de Maître Vendrel", hide: { any: [ADMIS, { seen: "IIIA_vendrel" }] }, to: "IIIA_vendrel" },
      { label: "Le banquet du roi, ce soir", hide: { any: [ADMIS, { seen: "IIIA_banquet" }] }, if: { seen: "IIIA_roi" }, why: "On ne t'a pas invité{e} : il faudrait que le roi t'ait reçu{e}.", to: "IIIA_banquet" },
      { label: "La tente de la princesse Nerys", hide: { any: [ADMIS, { not: { any: [{ seen: "IIIA_roi" }, { seen: "IIIA_banquet" }] } }, { quest: "III_nerys" }, { seen: "IIIA_nerys" }] }, to: "IIIA_nerys" },
      { label: "Rendre compte à la princesse Nerys", hide: { any: [ADMIS, { not: { is: { nerys: "portee" } } }, { seen: "IIIA_nerys_retour" }] }, to: "IIIA_nerys_retour" },
      { label: "Les fers, où l'on garde un déserteur", hide: { any: [ADMIS, { quest: "III_deserteur" }] }, to: "IIIA_deserteur" },
      { label: "Le quartier des mercenaires", hide: ADMIS, to: "IIIA_mercenaires" },
      { label: "La lice derrière le pavillon du conseiller, avant l'aube", hide: { any: [ADMIS, { seen: "IIIA_lice" }] }, to: "IIIA_lice" },
      { label: "La tente de la chancellerie et ses coffres", hide: { any: [ADMIS, { seen: "IIIA_archives_plan" }] }, to: "IIIA_archives" },
      { label: "L'infirmerie du camp", hide: ADMIS, to: "IIIA_infirmerie" },
      { label: "Les palissades, où creusent les prisonniers", hide: ADMIS, to: "IIIA_palissades" },
      { label: "La charrette de la vivandière", hide: ADMIS, to: "IIIA_vivandiere" },
      { label: "Monter en ville, à Hautmont-le-Bas", hide: ADMIS, to: "IIIA_ville" },
      { label: "Faire un tour du camp à la nuit tombée", hide: { any: [ADMIS, { seen: "IIIA_ronde" }] }, to: "IIIA_ronde" },
    ] },

  IIIA_garde: { act: "III", title: "Le poste de garde", place: "hautmont",
    text: [
      "Le sergent de garde est un homme carré, à la moustache grise, qui a vu passer trop de monde depuis trois semaines pour s'étonner de quoi que ce soit. Il a un registre, comme le sergent recruteur, et une plume qu'il trempe dans un encrier gelé en soufflant dessus. « Nom, qualité, raison, dit-il sans lever les yeux. Et ce que vous portez. »",
      "À côté de lui, adossés à la barrière, deux hommes qui ne sont pas des soldats : manteaux gris, gants gris, pas de tabard, et ce regard sans curiosité des gens qui sont payés pour se souvenir. Ils regardent tout le monde. Ils te regardent.",
      { with: "gloup", text: "Le sergent avise Gloup et lève enfin les yeux. « Ça, dit-il, c'est quoi ? » Gloup se fait tout petit derrière ta botte." },
      { with: "pip", text: "Pip s'est caché dans ta capuche. Le sergent ne l'a pas vu. L'un des hommes en gris, si : son regard s'est arrêté une seconde sur ton épaule, puis il a repris sa ronde, sans rien dire." },
    ],
    choices: [
      { label: "Présenter la lettre de mission de l'Ordre", hide: { not: { item: "III_ordre_mission" } }, to: "IIIA_garde_ordre" },
      { label: "Montrer le billet de Maître Corbin et le jeton du Cercle", hide: { not: { any: [{ item: "III_lettre_corbin" }, { item: "jeton_cercle" }] } }, to: "IIIA_garde_cercle" },
      { label: "Laisse-moi faire : je vais leur dire mon nom", who: "thavary", to: "IIIA_garde_thavary" },
      { label: "Te présenter sans titre, et expliquer pourquoi tu viens", test: { dom: "social", diff: -10, label: "Convaincre le sergent", help: [{ with: "aubin", v: 10 }, { if: { has: "passe:ordre" }, v: 10 }, { if: { has: "passe:libre" }, v: 5 }] }, win: { fx: { ep: ["perso", 500] }, to: "IIIA_garde_parole" }, lose: { to: "IIIA_garde_pris" } },
      { label: "Entrer avec les charrettes des vivandiers, sans passer par le registre", test: { dom: "discretion", diff: -10, label: "Te glisser parmi les vivandiers", help: [{ with: "coliane", v: 15 }, { if: { arch: "voleur" }, v: 10 }] }, win: { fx: { ep: ["perso", 600] }, to: "IIIA_garde_vivandiers" }, lose: { to: "IIIA_garde_pris" } },
      { label: "Laisser la Marque répondre pour toi", hide: { mark: { max: 0 } }, tag: "Marque +1", stain: true, fx: { mark: 1, conf: { coliane: -10, aubin: -5, pip: -5 }, fear: { coliane: 5 } }, to: "IIIA_garde_marque" },
    ] },

  IIIA_garde_ordre: { act: "III", title: "La lettre grise", place: "hautmont",
    fx: { flag: ["IIIA:admis", "IIIA:hugues"], meet: "III_hugues", fac: { aldaran: 5 }, ep: ["perso", 600] },
    text: [
      "Le sergent lit la lettre, puis la relit, puis appelle un garçon qui part en courant. On te fait attendre près du brasero. Un quart d'heure plus tard, un homme âgé, sec, en cotte de mailles sous un manteau bleu râpé, arrive à grands pas dans la boue, la lettre à la main, ouverte. Il a une barbe courte et blanche, des yeux très clairs et un nez cassé deux fois.",
      "« Hugues de Vaux, dit-il. Connétable. Brann m'écrit que vous êtes ses yeux. Il m'écrit aussi que vous ne me direz pas tout ce que vous verrez. C'est honnête, de sa part. » Il te rend la lettre. « Le roi vous recevra. Le conseiller, lui, voudra vous recevoir avant le roi. Je vous conseille de voir le roi d'abord. » Il fait signe au sergent. « Laissez passer, avec ceux qui l'accompagnent. Notez : sous la garde du connétable. »",
      "Les deux hommes en gris n'ont rien noté. Ils n'ont pas besoin de noter.",
      { if: { has: "passe:ordre" }, text: "Hugues te regarde un instant de plus que nécessaire. « Vous avez porté le gant, dit-il. Ça se voit à la façon dont on se tient devant une barrière. On attend qu'elle s'ouvre, on ne la regarde pas. »" },
    ],
    choices: [{ label: "Entrer dans le camp", big: true, back: "IIIA_camp" }] },

  IIIA_garde_cercle: { act: "III", title: "L'Athénée", place: "hautmont",
    fx: { flag: "IIIA:admis", ep: ["perso", 500] },
    text: [
      "Le sergent regarde le jeton d'os comme on regarde une araignée sur une manche. Il appelle quelqu'un. Ce n'est pas un officier qui vient : c'est un des deux hommes en gris, qui prend le billet de Corbin entre deux doigts gantés, le lit sans bouger les lèvres, et te le rend.",
      "« Le Cercle est le bienvenu au camp de Sa Majesté, dit-il d'une voix très douce. Maître Vendrel a beaucoup de respect pour le savoir. Il sera heureux de vous recevoir quand vous voudrez. » Il ne dit pas son nom. Il fait signe au sergent, qui lève la barrière. Tu es dans le camp, et tu as l'impression très nette d'y être entré{e} par la porte de quelqu'un.",
      { if: { has: "passe:cercle" }, text: "Le gris te regarde encore un moment. « Copiste, n'est-ce pas ? dit-il. On le voit aux doigts. » Tu regardes tes doigts. Il n'y a plus d'encre dessus depuis des années." },
    ],
    choices: [{ label: "Entrer dans le camp", big: true, back: "IIIA_camp" }] },

  IIIA_garde_thavary: { act: "III", title: "Le nom de Thavar", place: "hautmont", with: "thavary",
    fx: { flag: ["IIIA:admis", "III:thavary_vendrel"], conf: { thavary: 5 }, ep: ["perso", 500] },
    text: [
      "Thavary s'avance jusqu'au registre. « Thavary de Thavar, dit-elle. Et ceux qui sont avec moi. » Le sergent commence à écrire. Il n'a pas fini le premier mot que l'un des hommes en gris s'est détaché de la barrière.",
      "« Dame de Thavar, dit-il avec une petite inclinaison de la tête. Maître Vendrel sera très heureux de savoir que vous êtes venue. Il vous attendait plus tôt. » Il lève lui-même la barrière. Il ne demande ni ce que vous portez, ni pourquoi vous venez.",
      "Thavary passe sans un mot, sans le regarder, la mâchoire serrée. Quand tu la rattrapes, de l'autre côté, elle a les joues rouges, et ce n'est pas le froid. « Je ne sais pas de quoi il parle, dit-elle avant que tu aies rien demandé. Ils disent ça à tout le monde. » Elle presse le pas.",
    ],
    choices: [{ label: "Entrer dans le camp", big: true, back: "IIIA_camp" }] },

  IIIA_garde_parole: { act: "III", title: "Le registre", place: "hautmont",
    fx: { flag: "IIIA:admis" },
    text: [
      "Tu parles de Merle, des blessés de l'église, du curé qui dit la messe au camp le dimanche. Tu parles de ce que tu as vu sur la route, sans en rajouter. Le sergent t'écoute jusqu'au bout, la plume en l'air. Puis il écrit ton nom, en grosses lettres appliquées, et à côté : *de passage, vu le curé de Merle*.",
      "« Le curé, dit-il, il a enterré mon neveu. Proprement. » Il lève la barrière. « Ne traînez pas du côté du pavillon gris. Et si on vous demande, je ne vous ai rien dit. » Les deux hommes en gris t'ont regardé{e} passer. L'un d'eux a souri.",
    ],
    choices: [{ label: "Entrer dans le camp", big: true, back: "IIIA_camp" }] },

  IIIA_garde_vivandiers: { act: "III", title: "Avec les charrettes", place: "hautmont",
    fx: { flag: "IIIA:admis" },
    text: [
      "Les charrettes des vivandiers entrent en file par la porte des cuisines, chargées de raves, de tonneaux de harengs et de sacs de pois, et on ne les fouille que pour la forme. Tu marches à côté de la dernière, la main sur la ridelle, une botte de poireaux sur l'épaule, et tu passes. Personne ne te regarde. Personne ne regarde jamais les gens qui portent des poireaux.",
      { with: "coliane", text: "Coliane, de l'autre côté de la charrette, a trouvé un tablier de cuisinière quelque part et le porte avec un naturel effrayant. Une fois dans le camp, elle te le jette. « Garde-le, dit-elle. On en aura besoin pour ressortir. »" },
      "De l'autre côté, tu poses tes poireaux sur une pile et tu t'éloignes vers les tentes. Tu es dans le camp. Tu n'es sur aucun registre. C'est un avantage, et ce sera peut-être un problème.",
    ],
    choices: [{ label: "T'enfoncer dans le camp", big: true, back: "IIIA_camp" }] },

  IIIA_garde_marque: { act: "III", title: "Le froid", place: "hautmont",
    fx: { flag: ["IIIA:admis", "III:marque_camp"] },
    text: [
      "Tu ne dis rien. Tu poses seulement la main gauche à plat sur le registre, et tu laisses venir ce qui vient. C'est très facile, beaucoup trop facile : un froid qui part de la tache, qui coule dans le bois de la table, qui fait geler l'encre dans la plume du sergent. Il retire sa main comme s'il s'était brûlé. Il a pâli. Il ne sait pas pourquoi il a peur. Il a peur.",
      "« Passez, dit-il d'une voix qui n'est pas la sienne. Passez. » Il ne t'a pas inscrit{e}. Il ne s'en souviendra pas très bien, ce soir, quand il voudra raconter.",
      "Les deux hommes en gris, eux, ont tout vu. L'un d'eux se détache de la barrière et s'en va à pas tranquilles, vers le pavillon sans bannière.",
      { with: "coliane", text: "Coliane te suit, mais à trois pas, plus loin que d'habitude. Elle regarde ta main gauche. Elle ne dit rien. Elle n'a pas besoin." },
    ],
    choices: [{ label: "Entrer dans le camp", big: true, back: "IIIA_camp" }] },

  IIIA_garde_pris: { act: "III", title: "Devant le connétable", place: "hautmont",
    fx: { flag: ["IIIA:admis", "IIIA:hugues"], meet: "III_hugues", fac: { aldaran: -5 } },
    text: [
      "Ça tourne mal, comme ça tourne toujours mal quand on n'a pas de papier et qu'on a des armes. On te prend par les bras, on te pousse à travers le camp sous les regards des soldats qui se lèvent pour voir passer l'espion, et on te jette à genoux dans une tente où un vieil homme en cotte de mailles mange une soupe aux pois en lisant des rapports.",
      "Il pose sa cuillère. Il te regarde longtemps, de ses yeux très clairs. « Hugues de Vaux, dit-il enfin. Connétable de ce bordel. Si vous étiez un espion de la duchesse, vous seriez meilleur{e} que ça. » Il fait signe qu'on te relève. « Vous resterez au camp, sous mes yeux. Vous pouvez aller où vous voulez, tant que je sais où. Et si vous voulez voir le roi, c'est moi qui vous présenterai. Personne d'autre. Vous avez compris ce que je veux dire par personne d'autre ? »",
      "Tu as compris. Les hommes en gris, à l'entrée de la tente, ont compris aussi. Ils s'en vont.",
    ],
    choices: [{ label: "Sortir de la tente du connétable", big: true, back: "IIIA_camp" }] },

  IIIA_vivandiere: { act: "III", title: "La charrette de la Grande Margue", place: "hautmont", shop: "III_vivandiere",
    text: [
      { first: true, text: "La vivandière tient boutique à l'arrière d'une charrette bâchée, entre le parc à chevaux et les cuisines : une femme immense, aux bras rouges, qu'on appelle la Grande Margue et qui a suivi quatre guerres sans jamais y perdre un sou. Elle vend tout ce que l'intendance ne donne pas : du lard, de l'eau-de-vie, des chaussettes, des onguents, des lames d'occasion, et des nouvelles, gratuites, avec chaque achat." },
      { again: true, text: "La Grande Margue te reconnaît de loin et te fait signe de sa louche." },
      "« Les mercenaires paient en or, ces temps-ci, te dit-elle en rendant la monnaie. Les piquiers, en promesses. Je prends les deux. Les promesses, je les revends aux usuriers de Hautmont. » Elle rit d'un gros rire. « La guerre, c'est un marché comme un autre. Plus court, c'est tout. »",
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_ville: { act: "III", title: "Hautmont-le-Bas", place: "hautmont",
    text: [
      "Hautmont-le-Bas est une petite ville fortifiée, agrippée au flanc de la colline, avec une cathédrale trop grande pour elle et des rues si raides qu'on y a taillé des marches. La guerre l'a remplie d'officiers, de clercs, de marchands, et vidée de tout le reste. Les boulangers cuisent pour l'armée, et le pain des habitants coûte trois fois son prix. On voit des femmes faire la queue devant la porte du chapitre pour la soupe des pauvres.",
      "Sur la place de la cathédrale, une borne ancienne, aux angles usés, porte les mains des fondateurs. Les gens de Hautmont y passent la main en sortant de la messe, pour la chance. Tu comptes : cinq mains, et la trace d'une sixième, martelée. Ici, quelqu'un a pris la peine de la recouvrir de plâtre, et de peindre le plâtre de la couleur de la pierre.",
      { with: "charline", text: "Charline gratte le plâtre de l'ongle. Dessous, la pierre est lisse. Ce n'est pas la première fois qu'on cache quelque chose, ici ; c'est la première fois qu'on y met tant de soin. « Ils ont honte, dit-elle. Ou ils ont peur. Chez les gens qui construisent des cathédrales, c'est souvent la même chose. »" },
      { if: { has: "passe:libre" }, text: "Tu as joué ici, une fois, à une foire de la Saint-Michel, il y a des années, pour un sou par chanson ou par combat. La foire n'existe plus. L'auberge où tu dormais est devenue une caserne." },
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_infirmerie: { act: "III", title: "L'infirmerie du camp", place: "hautmont",
    text: [
      "Trois grandes tentes accolées, au bas du camp, là où le terrain est le plus humide, ce qui n'est pas une bonne idée. Il y a plus de malades que de blessés : la dysenterie, la fièvre des marais, les pieds gelés. Les médecins du roi sont deux, et ils ont la peur dans les yeux. Il en meurt une dizaine par jour, sans bataille, sans gloire, et on les enterre derrière les fosses d'aisance, la nuit, pour ne pas faire peur aux autres.",
      "Dans un coin, à l'écart, trois hommes sont couchés derrière une toile qu'on a tendue exprès. Un aide-chirurgien t'explique à voix basse : ils ont bu à une source, en patrouille, au pied de la colline des Six. Depuis, ils ont des taches noires qui montent des mains, et ils parlent la nuit, tous les trois, à quelqu'un qui n'est pas là. Le conseiller a demandé qu'on les isole et qu'on ne dise rien.",
      { with: "aubin", text: "Frère Aubin passe sous la toile sans demander. Il reste longtemps avec les trois hommes. Quand il ressort, il a le visage gris. « Ils l'entendent, dit-il. Elle leur promet de les ramener chez eux. Je ne peux rien contre ça. Je peux seulement rester avec eux pendant qu'elle parle. »" },
      { with: "gloup", text: "Gloup refuse d'approcher de la toile. Il se colle contre le piquet de la tente, et il fait un bruit que tu ne lui connaissais pas, aigu, comme un chiot qui a peur de l'orage." },
    ],
    choices: [
      { label: "Aider les médecins jusqu'au soir", fx: { ep: ["perso", 700], fac: { aldaran: 5 }, conf: { aubin: 5, pip: 5 } }, back: "IIIA_camp" },
      { back: "IIIA_camp" },
    ] },

  IIIA_palissades: { act: "III", title: "Les palissades", place: "hautmont",
    text: [
      "Au flanc sud du camp, face à la rivière, on creuse un fossé et on plante des pieux. Ce sont des prisonniers de Vel-Orin qui creusent, une cinquantaine, enchaînés par deux, sous la garde de piquiers qui s'ennuient. Ils travaillent dans l'eau jusqu'aux genoux. Ceux qui tombent, on les relève à coups de hampe ; ceux qui ne se relèvent pas, on les détache.",
      { if: { is: { fleches: "livre" } }, text: "Tu reconnais Tancrède à sa façon de traîner la jambe. Il creuse, enchaîné à un vieux sergent pourpre qui le soutient quand il chancelle. Il te voit. Il ne détourne pas les yeux. Il ne dit rien. Il recommence à creuser." },
      { if: { is: { fleches: "tard" } }, text: "Parmi les prisonniers, un garçon blond qui traîne la jambe, la cuisse bandée d'un linge noir de crasse. Les gardes l'appellent « le gamin du pré ». Il a tenu un enfant de Merle au chaud toute une nuit, dit-on. Ça ne lui a pas valu de chaîne plus légère." },
      "Un des gardes, voyant que tu regardes, vient s'appuyer à côté de toi. « Ils creusent leur propre tombe, dit-il, content de sa phrase. Enfin, celle de leurs copains, quand ils viendront à l'assaut. » Il rit. Personne ne rit avec lui, même pas les autres gardes.",
    ],
    choices: [
      { label: "Faire porter de l'eau et du pain aux prisonniers (3 sous)", fx: { gold: -3, ep: ["perso", 400], fac: { velorin: 5 }, conf: { pip: 5, aubin: 5 } }, back: "IIIA_camp" },
      { back: "IIIA_camp" },
    ] },

  IIIA_ronde: { act: "III", title: "Le camp, la nuit", place: "hautmont", takes: "night",
    text: [
      "Tu fais le tour du camp quand les feux baissent. Les mercenaires chantent encore, en bas, une chanson de marche dont le refrain parle d'une fille de Sarre et d'un tonneau. Les piquiers des hautes terres dorment à dix par tente, serrés pour avoir chaud. Une sentinelle te demande le mot, et te laisse passer quand tu ne le connais pas, parce qu'elle a froid et que tu n'as pas l'air d'un ennemi.",
      "Le pavillon gris du conseiller est le seul qui soit encore éclairé, tout en haut de la butte. Une lampe, à l'intérieur, découpe sur la toile l'ombre d'un homme seul, penché sur quelque chose de bas et de rond, une cuvette peut-être, ou un bassin. Il ne bouge pas. Tu restes à regarder un long moment, au froid. Il ne bouge toujours pas. Puis la lampe s'éteint.",
      { with: "pip", text: "Pip s'est collé contre ton cou, tout tremblant. « Il parle, souffle-t-il. Il parle à l'eau. Et l'eau lui répond. Je ne veux pas entendre ce qu'elle dit. » Il se cache dans ton col jusqu'au matin." },
      { if: { mark: { min: 2 } }, text: "La tache, sur ta main, s'est mise à battre doucement, au rythme de quelque chose qui n'est pas ton cœur, tout le temps que la lampe a brûlé dans le pavillon gris." },
    ],
    choices: [{ label: "Aller dormir sous une tente de piquiers", fx: { rest: true }, back: "IIIA_camp" }] },
});

// ------------------------------------------------------------------ the camp: the constable, the king, Vendrel, the banquet
Object.assign(P, {
  IIIA_connetable: { act: "III", title: "La tente du connétable", place: "hautmont",
    fx: { flag: "IIIA:hugues", meet: "III_hugues", questSeen: "III_deserteur" },
    text: [
      { first: true, text: "La tente de Hugues de Vaux est la plus petite des tentes d'officiers, et la plus encombrée : un lit de camp, une table à tréteaux couverte de cartes et de rapports, un râtelier d'armes, un brasero, un chien gris très vieux couché dessus, ou presque. Hugues écrit debout, à la lueur d'une chandelle, même en plein jour. Il a soixante ans, une barbe blanche coupée court, des yeux très clairs et un nez qui a été cassé au moins deux fois." },
      { first: true, text: "« Asseyez-vous, dit-il, s'il reste un endroit. Je ne vous offre pas à boire : je n'ai que de l'eau, et je ne vous la recommande pas. » Il pose sa plume. « Je vais être franc, parce que je n'ai pas le temps d'être autre chose. Je ne veux pas de cette guerre. Je la ferai quand même. On m'a appris à la faire. On ne m'a jamais appris à l'empêcher. »" },
      { again: true, text: "Hugues de Vaux lève les yeux de ses cartes, te fait signe d'entrer, et finit sa phrase avant de poser sa plume. Le vieux chien gris remue la queue, une fois." },
      { if: { quest: "III_deserteur" }, text: "Il te regarde un peu autrement, depuis l'affaire du déserteur. Pas avec plus d'amitié : avec plus d'attention." },
    ],
    choices: [
      { label: "« Comment cette guerre a-t-elle commencé ? »", hide: { seen: "IIIA_connetable_guerre" }, to: "IIIA_connetable_guerre" },
      { label: "« Et la mine d'Aldar ? »", hide: { seen: "IIIA_connetable_mine" }, if: { any: [{ seen: "IIIA_conseil" }, { quest: "III_deserteur" }, { is: { nerys: "portee" } }] }, why: "Il ne te connaît pas encore assez pour te parler de ça. Il faudrait qu'il t'ait vu{e} à l'œuvre : au conseil, ou ailleurs.", to: "IIIA_connetable_mine" },
      { label: "Lui proposer de partager une bouteille ce soir, loin des cartes", hide: { any: [{ seen: "IIIA_connetable_mine" }, { seen: "IIIA_connetable_vin" }] }, to: "IIIA_connetable_vin" },
      { label: "« Et ce déserteur, dans les fers ? »", hide: { any: [{ seen: "IIIA_deserteur" }, { quest: "III_deserteur" }] }, to: "IIIA_deserteur" },
      { back: "IIIA_camp" },
    ] },

  IIIA_connetable_guerre: { act: "III", title: "Le début", place: "hautmont",
    text: [
      "Hugues s'assied enfin, sur le bord du lit de camp, et frotte ses genoux. « Au printemps, Vel-Orin a racheté les salines de Salvagne à un seigneur ruiné. Légalement. Aldaran a dit que les salines sont sur ses terres depuis Aldar le Hardi. Légalement aussi. On a échangé des lettres, des juristes, des insultes polies. Ça pouvait durer dix ans ; ça dure toujours dix ans, ces choses-là. »",
      "« Et puis, cet automne, le roi a décidé, en une nuit, de déclarer la guerre et de faire passer l'Isarde à une colonne. Je l'ai appris le matin, en même temps que les palefreniers. » Il regarde le brasero. « Le roi était malade, déjà. Il ne recevait plus que trois personnes : son médecin, sa fille, et son conseiller. Sa fille ne lui a pas parlé de guerre. Son médecin non plus, que je sache. »",
      "Il ne finit pas. Il n'en a pas besoin. Il reprend sa plume.",
    ],
    choices: [{ back: "IIIA_connetable" }] },

  IIIA_connetable_vin: { act: "III", title: "Une bouteille de Combelaure", place: "hautmont", takes: "evening",
    text: [
      "Tu trouves une bouteille chez la Grande Margue, un vin des hautes terres, aigre et noir, celui qu'on boit dans les fermes de Combelaure les soirs d'hiver. Tu la poses sur la table du connétable, au milieu des cartes. Hugues la regarde longtemps. Puis il sort deux gobelets d'étain d'un coffre, et il pousse le vieux chien pour faire de la place sur le lit de camp.",
      "« Mon père en faisait, dit-il. Le même. On le buvait avec du pain trempé dedans. » Il boit. Il parle de chevaux, de sa femme morte, de ses fils, dont l'un est piquier dans cette armée et ne veut pas qu'on le sache. La chandelle baisse. Tu attends ton moment.",
    ],
    choices: [
      { label: "Lui parler de la mine, quand la bouteille est à moitié vide", test: { dom: "social", diff: -10, label: "Faire parler le connétable", help: [{ if: { has: "passe:ordre" }, v: 10 }, { with: "thavary", v: 10 }, { if: { item: "III_ordre_mission" }, v: 5 }] }, win: { fx: { ep: ["perso", 700] }, to: "IIIA_connetable_mine" }, lose: { to: "IIIA_connetable_vin_rate" } },
      { label: "Ne parler que de chevaux et le laisser dormir", fx: { regard: { III_hugues: "cordial" } }, back: "IIIA_camp" },
    ] },

  IIIA_connetable_vin_rate: { act: "III", title: "Une bouteille de Combelaure", place: "hautmont",
    text: [
      "Au mot de mine, Hugues pose son gobelet. Il te regarde, et pour la première fois de la soirée, il n'a plus du tout l'air d'avoir bu. « On parlait de chevaux, dit-il. C'était bien, les chevaux. » Il se lève, et il te raccompagne à l'entrée de la tente, poliment, en tenant la toile.",
      "« Revenez quand vous aurez fait quelque chose pour ce camp, dit-il. Quelque chose qui ne vous rapporte rien. Après, peut-être, on parlera d'autre chose que de chevaux. »",
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_connetable_mine: { act: "III", title: "La mine d'Aldar", place: "hautmont",
    fx: { clue: "r3_mine", ep: ["seance", 1500], regard: { III_hugues: "allie" } },
    text: [
      "Hugues ferme la toile de la tente. Il fait le tour de la table, il regarde dehors par une fente, il revient. Il parle bas, plus bas que tu ne l'as jamais entendu parler.",
      "« La guerre a commencé le jour où Vendrel a dit au roi que Vel-Orin voulait rouvrir la mine d'Aldar. Personne n'a jamais vu la lettre. »",
      "Il se tait. Le vieux chien soupire sur le brasero. « La mine d'Aldar, reprend Hugues, c'est la vieille mine des premiers rois, sous la Fenne. Fermée depuis quatre cents ans. Dans ma famille, on dit qu'on ne la rouvrira jamais, et on ne dit pas pourquoi. Dans la famille du roi, on dit la même chose, et on a l'air d'avoir peur. Quand le roi a entendu dire que la duchesse voulait y faire creuser, il s'est levé de son lit pour la première fois depuis un mois. Le lendemain, la colonne passait l'Isarde. »",
      "« Je vous ai dit ça parce que vous n'êtes pas d'ici, ajoute-t-il. Si on me le demande, je ne vous ai rien dit. »",
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_roi: { act: "III", title: "Le roi Aldric", place: "hautmont",
    fx: { meet: ["aldric", "vendrel", "nerys"], ep: ["seance", 1200] },
    text: [
      "Le grand pavillon du roi est chauffé par quatre braseros et il y fait pourtant froid. Au fond, sur une estrade tendue de bleu, Aldric III est assis dans un fauteuil à haut dossier, enveloppé de fourrures jusqu'au menton. C'est un très vieil homme, au visage jaune et creusé, à la longue barbe blanche peignée avec soin, qui tient sa couronne sur ses genoux parce qu'elle lui pèse sur la tête. Il tousse. Ses yeux, eux, sont encore vifs, et ils cherchent quelque chose, toujours, de droite à gauche.",
      "À sa droite, debout, un homme de cinquante ans en noir, mince, au col montant fermé jusqu'au menton, aux gants blancs, à la voix posée : Maître Vendrel, premier conseiller. Il sourit en te voyant. C'est un sourire parfaitement aimable. À la gauche du roi, assise sur un tabouret bas, une jeune femme aux tresses brunes, en robe sombre, les mains croisées sur les genoux : la princesse Nerys. Elle ne sourit pas. Elle te regarde comme on évalue une pièce sur un échiquier.",
      "« Le roi vous écoute », dit Vendrel. Le roi n'a encore rien dit.",
      { if: { has: "IIIA:mediateur" }, text: "Tu présentes la lettre de Brann. Vendrel la prend avant que le roi ait levé la main, la lit, et la replie. « L'Ordre de la Main offre ses bons offices, dit-il au roi. C'est très aimable à l'Ordre. Sa Majesté s'en souviendra. »" },
      { with: "thavary", text: "Vendrel a vu Thavary. Il incline la tête vers elle, très légèrement, le geste qu'on fait vers quelqu'un avec qui l'on a un arrangement. Thavary regarde droit devant elle, au-dessus de la tête du roi." },
      { if: { relic: "anneau" }, text: "Le regard de Vendrel est descendu, une fois, vers ta main, puis vers ta besace. Il cherche quelque chose. Il ne le cherche pas longtemps : il sait où il est." },
    ],
    choices: [
      { label: "Parler de paix, et de Merle entre les deux armées", to: "IIIA_roi_paix" },
      { label: "Parler de la souillure qui monte de la Fenne, et du Sceau", to: "IIIA_roi_sceau" },
      { label: "Saluer, et laisser parler le conseiller", fx: { regard: { vendrel: "neutre" } }, back: "IIIA_camp" },
    ] },

  IIIA_roi_paix: { act: "III", title: "La paix", place: "hautmont",
    fx: { regard: { nerys: "curieux" } },
    text: [
      "Tu parles de Merle. De l'église pleine de blessés des deux camps, de la colonne sur la route, des Aulnaies brûlées. Tu parles de ceux qui n'ont rien demandé. Tu ne fais pas de discours ; tu dis ce que tu as vu. Le roi t'écoute en hochant la tête, lentement, en mesure, comme on écoute de la musique.",
      "« Sa Majesté est sensible à ces malheurs, dit Vendrel quand tu as fini. Ils sont la faute de la duchesse. C'est elle qui a pris les salines, elle qui a fait venir ses arbalétriers. Sa Majesté défend ses sujets. » Le roi hoche la tête de la même façon, en mesure. Il a l'air de ne pas savoir à qui il dit oui.",
      "Nerys, elle, n'a pas bougé. Mais quand tu t'es tu{e}, elle t'a regardé{e} d'une façon nouvelle, un peu plus longtemps, comme on retourne une pièce pour voir l'autre face.",
    ],
    choices: [{ label: "Saluer et te retirer", back: "IIIA_camp" }] },

  IIIA_roi_sceau: { act: "III", title: "La Fenne", place: "hautmont",
    text: [
      "Tu parles de la Fenne. Des puits qui noircissent, des bêtes grises du Rouvre, de l'eau qui parle. Du Sceau que gardaient trois maisons et que personne ne garde plus vraiment. Le roi cesse de hocher la tête. Il te regarde. Ses lèvres bougent.",
      "« La mine, dit-il d'une voix éraillée, très faible, la première chose qu'il dit. Mon père disait : on ne rouvre pas la mine. On ne rouvre jamais la mine. Ce qu'on a fait en bas… » Il tousse, longtemps, à s'en arracher la poitrine. Vendrel a déjà posé sa main gantée sur l'épaule du vieil homme, avec une douceur de fils.",
      "« Sa Majesté est fatiguée, dit-il. Sa Majesté parle de la mine parce que la duchesse veut la rouvrir, ce qui serait, Sa Majesté a raison, une impiété. » Il te sourit. « Merci de votre visite. » Nerys s'est levée pour aider son père à boire. Par-dessus le gobelet, elle te regarde, et cette fois tu es sûr{e} qu'elle t'a fait un signe des yeux, vers la sortie, vers plus tard.",
    ],
    choices: [{ label: "Saluer et te retirer", back: "IIIA_camp" }] },

  IIIA_vendrel: { act: "III", title: "Le pavillon gris", place: "hautmont",
    fx: { meet: "vendrel" },
    text: [
      "On ne te fait pas attendre. Un des hommes en gris soulève le pan de toile avant que tu aies demandé quoi que ce soit, comme si on t'attendait à cette heure précise. Dedans, il fait chaud et il y a des livres, beaucoup de livres, en piles sur des coffres, sur des tapis, sur le lit. Un bureau de voyage, des cartes, des plumes rangées par taille. Et dans un coin, sur un trépied, un grand bassin de cuivre couvert d'un linge blanc.",
      "Maître Vendrel se lève pour t'accueillir. De près, il a un visage fin, intelligent, fatigué, et ce col noir montant qu'il ne desserre pas, même ici. Ses gants blancs sont d'une propreté parfaite. « {hero}, dit-il. On parle de vous jusqu'à Hautmont. Asseyez-vous. Un peu de vin ? Il vient de mes vignes. » Il te sert sans attendre la réponse.",
      "« Je vais être bref, parce que vous êtes une personne intelligente, dit-il. Cette guerre est un malheur. Elle finira vite, si Aldaran gagne vite. J'ai besoin de gens qui voient clair, des deux côtés de la rivière. Je paie bien ceux qui voient clair. Et je n'oublie jamais ceux qui m'ont aidé. »",
      { if: { any: [{ mark: { min: 2 } }, { has: "III:marque_camp" }] }, text: "Son regard s'est posé sur ta main gauche, sur la tache. Il a souri, d'un autre sourire, presque tendre. « Nous avons des amis communs, je crois, dit-il doucement. Ils me parlent de vous. »" },
      { with: "thavary", text: "« Dame de Thavar, ajoute-t-il en se tournant vers Thavary, ce que je vous ai promis tient toujours, bien entendu. » Thavary ne répond pas. Ses doigts se sont refermés sur la garde de son épée, et pas pour la tirer." },
    ],
    choices: [
      { label: "Accepter son or", tag: "Aldaran +", fx: { gold: 40, flag: "III:vendrel_or", fac: { aldaran: 10 }, conf: { coliane: -10, aubin: -10, pip: -5 }, regard: { vendrel: "cordial" } }, to: "IIIA_vendrel_or" },
      { label: "Le sonder : qu'est-ce qu'il veut vraiment ?", test: { dom: "social", diff: -20, label: "Lire Vendrel", help: [{ with: "charline", v: 5 }, { with: "aubin", v: 10 }, { if: { has: "maitre:maelle" }, v: 5 }] }, win: { fx: { ep: ["perso", 800] }, to: "IIIA_vendrel_sonde" }, lose: { fx: { regard: { vendrel: "mefiant" } }, to: "IIIA_vendrel_sonde_rate" } },
      { label: "« Vous cherchez l'Anneau de Thavar. »", hide: { not: { any: [{ relic: "anneau" }, { given: "anneau" }, { present: "thavary" }] } }, to: "IIIA_vendrel_anneau" },
      { label: "Refuser poliment et sortir sans toucher au vin", fx: { conf: { coliane: 5, aubin: 5 }, regard: { vendrel: "distant" } }, back: "IIIA_camp" },
    ] },

  IIIA_vendrel_or: { act: "III", title: "L'or du conseiller", place: "hautmont",
    text: [
      "Il sort d'un coffre une petite bourse de cuir fin, et il la pose devant toi sans la pousser. Tu la prends. Elle est lourde. Dedans, deux couronnes d'or, neuves, si neuves que la tranche coupe presque. « Pour vos frais, dit Vendrel. Ce que vous verrez à Merle, au camp de la duchesse, sur la colline, vous me le direz. Pas tout. Ce qui compte. Vous saurez ce qui compte. »",
      "Il te raccompagne lui-même jusqu'au pan de toile. Il a la main légère sur ton épaule, une main gantée dont tu sens le froid à travers le cuir et ta manche. « Nous allons faire de grandes choses », dit-il.",
      { with: "coliane", text: "Dehors, Coliane marche à côté de toi sans rien dire pendant un long moment. Puis : « Il t'a payé{e}. Tu sais pour quoi ? » Tu ne réponds pas. « Moi non plus, dit-elle. C'est ça qui me fait peur. »" },
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_vendrel_sonde: { act: "III", title: "Ce que dit Vendrel", place: "hautmont",
    text: [
      "Tu ne bois pas. Tu le laisses parler, et tu l'écoutes comme on écoute un menteur : non pas ce qu'il dit, mais ce qu'il évite. Il parle de la duchesse, des salines, de la mine, du roi qui faiblit, de Nerys, qu'il appelle « notre petite princesse ». Il ne parle jamais de l'Ordre, ni de la Brèche, ni de la Fenne. Pas une fois. Un homme aussi intelligent, qui parle de cette guerre pendant une heure sans prononcer le nom de la montagne qui la domine.",
      "Et il y a autre chose. Pendant tout le temps où il parle, il ne quitte presque pas des yeux le bassin couvert d'un linge, dans le coin, comme on surveille un enfant qui dort, ou un chien qui pourrait se réveiller.",
      "« Réfléchissez à mon offre, dit-il en se levant. On ne réfléchit jamais trop, dans ces temps-ci. » Son sourire n'a pas bougé d'un cheveu.",
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_vendrel_sonde_rate: { act: "III", title: "Le sourire de Vendrel", place: "hautmont",
    text: [
      "Tu poses une question de trop, ou tu la poses trop tôt. Quelque chose se ferme dans le visage de Vendrel, sans que son sourire change. Il se lève. « Vous êtes fatigué{e}, dit-il. La route est longue depuis le Val d'Anse. » Tu ne lui as pas dit d'où tu venais.",
      "Il te raccompagne. Dehors, un des hommes en gris s'est mis à marcher derrière toi, à vingt pas. Il te suit jusqu'au bout de l'allée, puis il s'arrête, et il reste là, à te regarder t'éloigner. Le lendemain, il y est encore.",
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_vendrel_anneau: { act: "III", title: "L'Anneau", place: "hautmont",
    text: [
      "Vendrel ne fait pas semblant d'être surpris. Il repose son verre. « L'Anneau de Thavar, dit-il, est un objet d'histoire, et il devrait être là où l'histoire se fait. Dans un manoir aux toits crevés, il ne sert à rien. Sur les routes, il est en danger. » Il sourit. « Je ne suis pas un voleur. J'achète. Je paie toujours ce que j'achète, et un peu plus. »",
      { if: { relic: "anneau" }, text: "« Il est dans votre besace, je crois, ajoute-t-il. Vous le sentez peser, la nuit ? Il pèse plus lourd chaque nuit, n'est-ce pas ? On dit que c'est la honte de Thavar. Moi, je crois que c'est autre chose. » Tu ne réponds pas. Il ne s'attendait pas à une réponse." },
      { if: { given: "anneau" }, text: "« Vous l'avez rendu à la vieille Ermesinde, je sais, ajoute-t-il avec un petit soupir. C'est touchant. Elle est très âgée. Les vieilles dames meurent, et leurs bijoux vont à leurs héritiers. » Il ne regarde pas Thavary en disant cela. Il n'a pas besoin." },
      { with: "thavary", text: "Thavary se lève d'un coup, et son tabouret tombe. « Nous partons », dit-elle. Ce n'est pas à toi qu'elle le dit. Vendrel s'incline, aimable. « Bien sûr, dame de Thavar. Rien ne presse. Rien ne presse jamais, entre nous. »" },
    ],
    choices: [{ label: "Sortir du pavillon gris", fx: { conf: { thavary: 5 } }, back: "IIIA_camp" }] },

  IIIA_banquet: { act: "III", title: "Le banquet du roi", place: "hautmont", takes: "evening",
    fx: { ep: ["seance", 1000] },
    text: [
      "On a dressé des tables en fer à cheval dans le grand pavillon, sous des lustres de fer forgé où brûlent des chandelles de cire, de la vraie cire, à quelques lieues de gens qui n'ont pas de suif. Il y a du chevreuil, des pâtés, des fromages des hautes terres, du vin de Vel-Orin, ce qui fait rire certains et pas d'autres. Les capitaines sont là, les barons des hautes terres avec leurs femmes, le chapitre de Hautmont, les capitaines mercenaires, plus bruyants que tout le monde.",
      "Le roi paraît au début, porté dans son fauteuil, salue d'une main tremblante, mange trois cuillerées de bouillon et se retire en toussant. Après, c'est Vendrel qui préside, à la place du roi, sans s'asseoir dans son fauteuil, debout derrière, une main sur le dossier. Nerys est assise à la droite du fauteuil vide. Hugues de Vaux, tout au bout, ne mange rien et boit de l'eau.",
      { with: "gloup", text: "Gloup a profité de la confusion pour se glisser sous la nappe, et tu le retrouves une heure plus tard, endormi et gonflé comme une outre, au milieu d'un cercle de croûtons de pain. Une baronne des hautes terres a poussé un cri en le découvrant, puis l'a regardé mieux, et lui a donné un morceau de brioche. Gloup a désormais une protectrice à la cour d'Aldaran." },
      { with: "pip", text: "Pip s'est posé sur un des lustres, au milieu des chandelles, et personne ne l'a remarqué. Il regarde tout d'en haut. Plus tard, il te dira que Vendrel n'a rien mangé, et qu'il n'a bu que de l'eau, dans une coupe à lui, qu'il n'a jamais posée." },
      { with: "charline", text: "Un chanoine de Hautmont a reconnu Charline, ou cru la reconnaître : « La petite Hildrand ? Celle que le Cercle a renvoyée ? » Charline lui a souri si aimablement qu'il a renversé son vin." },
    ],
    choices: [
      { label: "T'asseoir près de la princesse Nerys", hide: { seen: "IIIA_banquet_nerys" }, to: "IIIA_banquet_nerys" },
      { label: "Écouter le toast de Vendrel", hide: { seen: "IIIA_banquet_toast" }, to: "IIIA_banquet_toast" },
      { label: "Boire avec le capitaine des mercenaires", hide: { seen: "IIIA_banquet_kell" }, to: "IIIA_banquet_kell" },
      { label: "Quitter le banquet", back: "IIIA_camp" },
    ] },

  IIIA_banquet_nerys: { act: "III", title: "À la droite du fauteuil vide", place: "hautmont",
    fx: { meet: "nerys", regard: { nerys: "curieux" } },
    text: [
      "Un baron ivre te cède sa place avec une révérence exagérée. Nerys ne te regarde pas quand tu t'assieds. Elle découpe son chevreuil en très petits morceaux qu'elle ne mange pas. « On vous a vu{e} au pavillon de mon père, dit-elle à voix basse, sans tourner la tête. Vous avez parlé de Merle. Personne ne lui parle jamais de Merle. »",
      "Elle boit une gorgée de vin. « Je voudrais vous parler. Pas ici. Ici, tout ce qui se dit va dans une seule oreille. » Ses yeux se posent une seconde sur Vendrel, debout derrière le fauteuil vide, qui rit d'une plaisanterie d'un capitaine. « Venez à ma tente, demain. On vous laissera entrer. Dites que vous m'apportez un livre. » Puis elle se tourne vers son autre voisin, un vieux chanoine, et lui demande des nouvelles de sa goutte, d'une voix claire et charmante.",
    ],
    choices: [{ back: "IIIA_banquet" }] },

  IIIA_banquet_toast: { act: "III", title: "Le toast", place: "hautmont",
    text: [
      "Vendrel lève sa coupe, et le pavillon se tait peu à peu. « À Sa Majesté, dit-il. À Aldaran. Au sang d'Aldar le Hardi, qui a enchaîné le monstre sous la montagne et qui nous a laissé cette terre à garder. » On boit. « Et à la paix, ajoute-t-il, qui viendra quand l'Isarde sera à nous des deux côtés. » On rit, on boit, on cogne les tables.",
      "Tu as vu, pendant qu'il parlait, sa main gauche se porter à son col et l'ajuster, deux fois, d'un geste machinal. Puis il a souri à la ronde.",
      { if: { has: "III:vendrel_or" }, text: "Il t'a cherché{e} du regard en levant sa coupe, et il a incliné la tête vers toi, en particulier, devant tout le monde. Quelques capitaines se sont retournés pour voir qui était l'ami du conseiller." },
    ],
    choices: [{ back: "IIIA_banquet" }] },

  IIIA_banquet_kell: { act: "III", title: "Le capitaine du Chardon", place: "hautmont",
    fx: { meet: "III_kell" },
    text: [
      "Oswin Kell, capitaine de la Compagnie du Chardon, est un géant roux qui a perdu un œil et une partie de l'oreille dans une guerre dont il a oublié le nom. Il boit comme on remplit un tonneau, et il paie à boire à tout le monde, en jetant les pièces sur la nappe avec un bruit de grêle. « Le roi paie bien, rugit-il. Le roi paie très bien ! Jamais vu un roi payer si bien, et j'en ai servi six ! »",
      "Il t'attrape par l'épaule pour t'asseoir à côté de lui, et il parle, il parle. De ses hommes, de leurs femmes, de la bataille qui vient. Du champion du conseiller, aussi : « Un drôle d'oiseau. On ne le voit jamais. Il s'entraîne avant l'aube, tout seul, dans la lice derrière le pavillon gris. Mes gars ont essayé de le regarder, une fois. Il ne les a pas regardés, eux. Ils ne sont pas retournés. » Il rit, mais il ne rit pas tant que ça.",
      "« Viens au quartier demain, c'est jour de solde, dit-il en te tapant dans le dos. Tu verras ce que c'est, un roi qui paie bien ! »",
    ],
    choices: [{ back: "IIIA_banquet" }] },
});

// ------------------------------------------------------------------ the camp: mercenaries, the lists, the chancellery, the council
Object.assign(P, {
  IIIA_mercenaires: { act: "III", title: "Le quartier du Chardon", place: "hautmont", taverne: { mise: 4, adversaire: "un arbalétrier génois borgne" },
    fx: { meet: "III_kell" },
    text: [
      { first: true, text: "Le quartier des mercenaires ne ressemble pas au reste du camp. Les tentes y sont de toutes les couleurs, rapiécées, ornées de trophées : des queues de cheval, des casques ennemis, une enseigne d'auberge volée quelque part. On y parle cinq langues, on y joue aux dés sur des tambours, on y boit du matin au soir. Des femmes, des enfants, des chiens, un singe enchaîné à un piquet. La Compagnie du Chardon, trois cents lances, et le double de gens qui vivent d'elle." },
      { again: true, text: "Le quartier du Chardon, ses dés, ses chiens, son singe. On t'y connaît, maintenant ; on te fait une place près du feu." },
      "Oswin Kell, le capitaine, est assis sur un tonneau devant sa tente, une jambe sur une selle, et se fait recoudre l'arcade par une femme qui a l'air d'avoir fait ça souvent. Il te salue d'un grand geste. « Viens, viens ! Ici on ne pose pas de questions, on ne fait que répondre ! »",
      { if: { has: "passe:libre" }, text: "Deux ou trois visages te disent quelque chose : des foires, des contrats d'un jour, une escorte de marchands il y a des années. Une femme aux cheveux rasés te reconnaît franchement et te tape dans le dos. « Toujours vivant{e} ! Toujours pauvre ? »" },
    ],
    choices: [
      { label: "Assister à la solde", hide: { seen: "IIIA_solde" }, to: "IIIA_solde" },
      { label: "Accepter le défi au bras de fer que lance Kell à qui veut", hide: { seen: "IIIA_bras" }, to: "IIIA_bras" },
      { back: "IIIA_camp" },
    ] },

  IIIA_solde: { act: "III", title: "Jour de solde", place: "hautmont",
    fx: { clue: "r3_or_aldaran", ep: ["seance", 1200] },
    text: [
      "Le trésorier du roi arrive avec quatre piquiers et un coffre cerclé de fer. On l'ouvre sur une table à tréteaux, devant la tente de Kell, et les lances viennent une par une, en file, toucher leur dû. Le trésorier compte, un sergent écrit, Kell regarde. Ça tinte. Les hommes mordent les pièces, les font sauter dans la main, les regardent briller au soleil d'hiver.",
      "Tu t'approches. Une des pièces roule de la table et vient tomber à tes pieds ; tu la ramasses pour la rendre. Elle est neuve, si neuve que la tranche coupe presque. D'un côté, la tour d'Aldaran. De l'autre, en tout petit, sous le grènetis, la marque d'atelier : une feuille de vigne et une lettre, un O couronné.",
      "Les mercenaires d'Aldaran sont payés en couronnes neuves frappées à Orme-la-Dorée, la capitale de Vel-Orin.",
      { with: "coliane", text: "Coliane a vu la pièce aussi. Elle ne dit rien. Elle a simplement cessé de mâcher sa pomme, et elle regarde le coffre." },
    ],
    choices: [{ label: "Rendre la pièce au trésorier", back: "IIIA_mercenaires" }] },

  IIIA_bras: { act: "III", title: "Le bras de fer", place: "hautmont",
    text: [
      "On roule un tonneau, on pose une planche dessus, et Kell s'assied d'un côté en faisant craquer ses doigts, sous les hurlements de ses hommes. Il a des avant-bras comme des cuisses d'enfant. Les paris montent, en deniers, en sous, en couteaux. Personne ne parie sur toi, sauf la femme aux cheveux rasés, par principe.",
    ],
    choices: [
      { label: "Poser le coude sur la planche", test: { dom: "combat", diff: -20, label: "Faire plier Kell", help: [{ if: { arch: "guerrier" }, v: 10 }] }, win: { fx: { ep: ["perso", 800], gold: 5, regard: { III_kell: "admiratif" } }, to: "IIIA_bras_gagne" }, lose: { to: "IIIA_bras_perdu" } },
      { label: "Laisse-moi faire : je prends ta place", who: "thavary", fx: { conf: { thavary: 10 }, ep: ["perso", 700], regard: { III_kell: "admiratif" } }, to: "IIIA_bras_thavary" },
      { label: "Décliner, en riant", back: "IIIA_mercenaires" },
    ] },

  IIIA_bras_gagne: { act: "III", title: "Le bras de fer", place: "hautmont",
    text: [
      "Ça dure. Ça dure longtemps. Le bras de Kell est une barre de fer, mais une barre de fer qui boit depuis la veille, et tu tiens, tu tiens, et quelque chose cède d'un coup dans son épaule, et sa main touche la planche. Le silence, puis un hurlement. On te soulève. On te fait boire. La femme aux cheveux rasés ramasse ses gains en riant.",
      "Kell se masse l'épaule en grimaçant, puis il te tend la main, grande ouverte. « Toi, tu es de la compagnie, dit-il. Quand tu veux. » Plus tard, quand on a fini de boire à ta santé, il ajoute, plus bas : « Le champion du conseiller, il ne fait jamais de bras de fer. Tu sais pourquoi ? Il a une main qui ne sent plus rien. La gauche. Toute noire, jusqu'au coude. » Il crache dans le feu.",
    ],
    choices: [{ back: "IIIA_mercenaires" }] },

  IIIA_bras_perdu: { act: "III", title: "Le bras de fer", place: "hautmont",
    text: [
      "Ta main touche la planche avec un bruit sec, et tout le quartier hurle de joie. Ça ne fait pas mal, sur le moment. Ça fera mal demain. Kell te tape dans le dos à te décrocher l'omoplate. « Pas mal, pas mal ! Personne n'a tenu aussi longtemps depuis Carouge ! » C'est probablement faux. C'est gentil quand même.",
      "On te paie à boire pour te consoler, et à la troisième tournée, tu fais partie du décor. On ne se méfie plus de toi. C'est presque mieux que de gagner.",
    ],
    choices: [{ back: "IIIA_mercenaires" }] },

  IIIA_bras_thavary: { act: "III", title: "Le bras de fer", place: "hautmont", with: "thavary",
    text: [
      "Thavary s'assied en face de Kell sans un mot, retrousse sa manche, et pose son coude. Le quartier rit. Kell aussi. Il ne rit plus au bout de dix battements de cœur. Thavary n'a pas changé d'expression ; elle regarde un point au-dessus de l'épaule du géant, et elle pousse, régulièrement, comme on pousse une porte coincée. La main de Kell descend. Elle touche.",
      "Il y a un silence stupéfait. Puis Kell éclate d'un rire énorme et lui tend une coupe. Thavary la boit d'un trait, la repose, et dit : « Mon grand-père faisait ça avec les palefreniers, pour leur payer leurs gages en vin quand il n'avait plus d'argent. Il gagnait toujours. Il ne les payait jamais. » Elle se lève. Personne ne sait s'il faut rire.",
    ],
    choices: [{ back: "IIIA_mercenaires" }] },

  IIIA_lice: { act: "III", title: "La lice, avant l'aube", place: "hautmont",
    fx: { clue: "i_champion", meet: "III_champion", ep: ["seance", 1500] },
    text: [
      "Tu te lèves dans le noir et tu fais le tour du pavillon gris par l'arrière, là où une palissade de branches tressées ferme un carré de sable battu. Il fait un froid sec. Le ciel blanchit à peine au-dessus de la Fenne. Il y a une lanterne posée sur un piquet, et dans la lice, quelqu'un.",
      "Le champion de Vendrel s'entraîne seul, de dos. Tu ne vois jamais son visage. Il porte un masque de cuir noir noué derrière la tête, des cheveux gris coupés court, une chemise de laine sans manches malgré le froid. Il enchaîne des passes, lentement, puis vite, puis lentement, contre personne. Son bras gauche est noir. Pas sale : noir, d'une tache luisante qui part des doigts et monte jusqu'au coude, comme une manche de vase.",
      { if: { has: "maitre:hauberte" }, text: "Entre deux passes, il recule d'un demi-pas, le pied arrière tourné en dehors, la lame basse, la garde ouverte à gauche : une garde ancienne, qu'on n'enseigne plus guère, qu'on appelle la porte. Et quand il rengaine, il essuie d'abord sa lame dans le sable, longuement, des deux côtés, même si elle n'a rien touché. Tu fais ce geste-là depuis des années, toi aussi, sans y penser." },
      { if: { has: "maitre:ortie" }, text: "Il ne se bat pas avec une épée : il a un long bâton de cornouiller, et un couteau à la main gauche, la main noire. Entre deux passes, il trace dans l'air, de la pointe du couteau, un petit signe en forme d'hameçon, celui qu'on fait dans les marais de la basse Sorbe pour éloigner les sangsues et les mauvais rêves. Tu le connais, ce signe. Tu l'as fait mille fois." },
      { if: { has: "maitre:maelle" }, text: "Avant de commencer, il a arpenté la lice d'un bout à l'autre, à pas comptés, puis tracé dans le sable, de la pointe de sa lame, une petite rose des vents qu'il a orientée sur la Fenne avant de l'effacer du pied. C'est une habitude de géographe. Tu l'as vue faire sur des tables d'auberge, sur des bancs de sable, sur la buée des vitres, toute ton enfance." },
      { with: "pip", text: "Pip s'est figé sur ton épaule. Il ne brille plus du tout. « Il a froid, souffle-t-il, si bas que tu l'entends à peine. Il a tellement froid. » Puis il se tait, et il ne dit plus rien jusqu'au soir." },
    ],
    choices: [
      { label: "L'appeler : « Qui êtes-vous ? »", to: "IIIA_lice_appel" },
      { label: "Le suivre quand il quitte la lice", to: "IIIA_lice_suivre" },
      { label: "Rester dans l'ombre, et partir sans bruit", back: "IIIA_camp" },
    ] },

  IIIA_lice_appel: { act: "III", title: "La lice, avant l'aube", place: "hautmont",
    text: [
      "Ta voix sonne trop fort dans le froid. Le champion s'arrête net, au milieu d'une passe, la lame en l'air. Il ne se retourne pas. Ses épaules se sont soulevées une fois, comme on prend une grande inspiration, et redescendues. La main noire s'est serrée sur la garde jusqu'à ce que les jointures craquent. Il reste ainsi un temps très long. Tu attends qu'il se retourne. Tu ne sais pas si tu le veux.",
      "Il ne se retourne pas. Il rengaine, prend la lanterne, et s'en va vers le pavillon gris d'un pas égal, sans se presser, sans un regard en arrière.",
      "Un des hommes en gris est là, à côté de toi. Tu ne l'as pas entendu venir. « Le champion de Maître Vendrel ne parle à personne, dit-il poliment. Il ne faut pas lui en vouloir. Il a beaucoup souffert. » Il te raccompagne jusqu'à l'allée centrale, une main sur ton coude.",
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_lice_suivre: { act: "III", title: "La lice, avant l'aube", place: "hautmont",
    text: [
      "Il rengaine, prend la lanterne, et quitte la lice par une porte de branches qui donne sur l'arrière du pavillon gris. Tu le suis, à vingt pas, dans l'ombre des tentes. Il marche sans se retourner, sans hâte. Au coin du pavillon, il s'arrête devant un tonneau d'eau de pluie, y plonge la main noire jusqu'au coude, et reste ainsi, immobile, la tête penchée sur l'eau, comme quelqu'un qui écoute.",
      "Puis deux hommes en gris sortent du pavillon et viennent se placer entre lui et toi, sans un mot, les bras croisés. Le champion retire sa main du tonneau. L'eau qui en coule est noire. Il entre dans le pavillon, et la toile retombe.",
      { if: { mark: { min: 1 } }, text: "La tache de ta propre main s'est mise à te brûler, très fort, pendant qu'il avait la sienne dans l'eau. Elle s'est calmée quand il l'a retirée." },
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_archives: { act: "III", title: "La chancellerie", place: "hautmont",
    fx: { meet: "III_ruaud" },
    text: [
      "La chancellerie du camp tient dans une grande tente carrée, à côté du pavillon royal : des coffres cloutés empilés jusqu'au faîte, une table couverte de registres, trois clercs qui copient des ordres en double et en triple, et un greffier qui les surveille, Maître Placide Ruaud, un petit homme voûté aux doigts noirs d'encre et aux yeux rouges de chandelle. Le roi emporte ses archives à la guerre : les titres, les traités, les plans de ses forteresses. On ne sait jamais ce qu'il faudra prouver.",
      "Ruaud ne laisse rien voir à personne. Il te le dit d'emblée, sans hostilité, comme on énonce une loi de la nature. « Sauf ordre écrit du conseiller, ou de Sa Majesté. Le conseiller est très attaché à l'ordre. »",
      { if: { has: "passe:cercle" }, text: "Il regarde tes mains, comme l'homme en gris l'a fait à la barrière. Les copistes se reconnaissent entre eux à des riens : la façon de tourner une page, de tenir une plume qu'on ne tient plus." },
    ],
    choices: [
      { label: "Montrer le jeton du Cercle à un ancien de l'Athénée", hide: { not: { any: [{ item: "jeton_cercle" }, { item: "III_lettre_corbin" }] } }, fx: { ep: ["perso", 600] }, to: "IIIA_archives_ruaud" },
      { label: "Montrer la bague de la princesse", hide: { not: { item: "III_bague_nerys" } }, fx: { ep: ["perso", 600] }, to: "IIIA_archives_plan" },
      { label: "Laisse-moi faire : je vais lui parler de la bibliothèque de Ferrance", who: "charline", test: { dom: "savoir", diff: -10, label: "Charmer le greffier par l'érudition" }, win: { fx: { conf: { charline: 10 }, ep: ["perso", 700] }, to: "IIIA_archives_plan" }, lose: { to: "IIIA_archives_refus" } },
      { label: "Glisser quelques sous au greffier, dont la solde a du retard (6 sous)", fx: { gold: -6 }, to: "IIIA_archives_refus" },
      { label: "Revenir la nuit, quand les clercs dorment", test: { dom: "discretion", diff: -20, label: "Fouiller la chancellerie de nuit", help: [{ with: "coliane", v: 15 }, { with: "pip", v: 10 }, { if: { item: "pied_de_biche" }, v: 5 }] }, win: { fx: { ep: ["perso", 900] }, to: "IIIA_archives_nuit" }, lose: { to: "IIIA_archives_pris" } },
      { back: "IIIA_camp" },
    ] },

  IIIA_archives_refus: { act: "III", title: "La chancellerie", place: "hautmont",
    text: [
      "Ruaud regarde ce que tu lui proposes avec une tristesse sincère. « Vous ne comprenez pas, dit-il. Ce n'est pas que je ne veuille pas. C'est que le conseiller sait toujours. Il sait quand on a ouvert un coffre. Il sait qui l'a ouvert. Je ne sais pas comment. » Il se frotte les yeux. « J'ai une fille à Hautmont. »",
      "Il te rend tes pièces, s'il y en avait, et retourne à ses registres. Il faudra trouver une autre porte.",
    ],
    choices: [{ back: "IIIA_archives" }] },

  IIIA_archives_ruaud: { act: "III", title: "Un ancien de l'Athénée", place: "hautmont",
    text: [
      "Ruaud regarde le jeton d'os, puis toi, puis ses trois clercs, qui ont tous le nez dans leurs copies. Il ôte ses lunettes. « J'ai fait trois ans à l'Athénée, dit-il tout bas. Avant que mon père me rappelle pour reprendre sa charge. Trois ans. C'est les seules années où j'ai lu pour lire. » Il remet ses lunettes. « Les titres anciens sont dans le coffre bleu. Vous n'avez rien vu, je n'ai rien ouvert. Une heure. Pas plus. »",
      "Il soulève lui-même le couvercle, et il retourne à sa table, en tournant le dos.",
    ],
    choices: [{ label: "Fouiller le coffre bleu", big: true, to: "IIIA_archives_plan" }] },

  IIIA_archives_nuit: { act: "III", title: "La chancellerie, la nuit", place: "hautmont", takes: "night",
    text: [
      "Les clercs dorment dans la tente voisine, et Ruaud chez sa fille, en ville. Il reste une sentinelle devant l'entrée, qui somnole sur sa pique. Tu passes par l'arrière, en soulevant la toile entre deux piquets. Dedans, l'odeur de l'encre, du parchemin, du cuir des coffres. Il fait noir comme dans un four.",
      { with: "pip", text: "Pip éclaire juste assez, en se tenant tout près des parchemins, une lueur de veilleuse que personne ne verrait du dehors." },
      { with: "coliane", text: "Coliane ouvre le premier coffre en trois coups de crochet, sans bruit, comme on ouvre une huître." },
      "Les coffres sont étiquetés. Les titres anciens sont dans le coffre bleu, celui du fond.",
    ],
    choices: [{ label: "Fouiller le coffre bleu", big: true, to: "IIIA_archives_plan" }] },

  IIIA_archives_plan: { act: "III", title: "Le coffre bleu", place: "hautmont",
    fx: { clue: "m_mine_aldar", ep: ["seance", 1500] },
    text: [
      "Le coffre bleu sent la poussière et le cèdre. Des titres de propriété roulés, des traités scellés de cires de toutes les couleurs, des généalogies, et tout au fond, dans un étui de cuir durci, un plan ancien, sur une peau qui a jauni jusqu'au brun. Les galeries y sont tracées à l'encre rouge, en arborescence, de plus en plus profondes, sous un massif que tu reconnais à sa forme : la Fenne.",
      "C'est un plan de la mine d'Aldar, daté de l'an 1 du Sceau. Sur la galerie la plus profonde, une autre main a écrit : « fermée par ordre, après la Brèche ».",
      "Il y a d'autres choses, dans le coffre. Des copies d'ordres de cet automne, de l'écriture fine et penchée du conseiller, avec le sceau du roi apposé en dessous, de travers, comme par une main qui tremble. L'ordre de passer l'Isarde est de cette écriture-là.",
      { with: "charline", text: "Charline a déroulé le plan sur ses genoux, et elle le regarde sans rien dire, très longtemps, en suivant du doigt la galerie la plus basse. « Après la Brèche, dit-elle enfin. Pas avant. Après. » Elle le recopie, trait pour trait, dans son carnet." },
    ],
    choices: [{ label: "Tout remettre en place et ressortir", back: "IIIA_camp" }] },

  IIIA_archives_pris: { act: "III", title: "Les hommes en gris", place: "hautmont",
    fx: { regard: { vendrel: "mefiant" }, fac: { aldaran: -5 } },
    text: [
      "Une main se pose sur ton épaule pendant que tu soulèves la toile. Elle n'est pas brutale. Elle est gantée de gris. « Par ici, je vous prie », dit une voix douce. Ils sont trois. Ils te mènent, sans te toucher davantage, jusqu'au pavillon gris, où une lampe brûle encore.",
      "Vendrel est à son bureau. Il écrit. Il ne lève pas les yeux. « Vous cherchiez quelque chose dans la chancellerie de Sa Majesté, dit-il. La prochaine fois, demandez-le-moi. Je vous l'aurais montré. » Il signe, saupoudre, souffle. « Ou pas. Bonne nuit. »",
      "On te raccompagne dehors. On ne t'a rien pris, rien fait, rien demandé. Tu ne dors pas de la nuit.",
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_conseil: { act: "III", title: "Le conseil de guerre", place: "hautmont",
    fx: { flag: "III:aldaran", clue: "r3_col", clock: { voix: 1 }, ep: ["histoire", 2500] },
    text: [
      "Le conseil se tient au matin, dans le grand pavillon, autour d'une table où l'on a déplié une carte de l'Isarde si grande qu'elle en déborde de tous les côtés. Des figurines de plomb bleues et pourpres marquent les troupes. Les barons des hautes terres sont debout, les capitaines mercenaires aussi, Kell en tête. Hugues de Vaux à un bout de la table, Vendrel à l'autre. Le roi, dans son fauteuil, au milieu, une couverture sur les genoux. Nerys derrière lui, debout, la main sur le dossier.",
      "Hugues parle le premier, sobrement, en montrant la carte du bout d'une baguette. L'hiver vient. La rivière va monter. Vel-Orin tient l'abbaye, une position forte. Il faut attendre, fortifier, négocier les salines au printemps. Les barons murmurent. Quelques-uns approuvent.",
      "Puis Vendrel se penche sur la carte. Il pose un doigt ganté sur le gué de Gaudre. « Il ne faut pas attendre, dit-il. Il faut passer ici, avant la crue. La route du gué est sûre. On me l'a garantie. » « Qui ? demande Hugues. — Un ami de Sa Majesté », dit Vendrel. Il reste penché, le doigt sur le gué, à expliquer le plan aux barons, longtemps.",
      "Maître Vendrel ne desserre jamais son col. Quand il se penche sur la carte, on voit dessous, à la base du cou, une tache noire et luisante, comme de la vase sèche.",
      "Il se redresse. Le col retombe en place. Le roi hoche la tête, lentement, en mesure. Nerys a vu, elle aussi. Elle regarde ses mains.",
    ],
    choices: [
      { label: "Prendre la parole pour la paix, au nom de ce que tu as vu à Merle", test: { dom: "social", diff: -20, label: "Faire hésiter le conseil", help: [{ if: { item: "III_ordre_mission" }, v: 15 }, { if: { has: "IIIA:mediateur" }, v: 5 }, { with: "aubin", v: 10 }, { if: { seen: "IIIA_connetable_mine" }, v: 5 }] }, win: { fx: { flag: "III:paix_conseil", ep: ["seance", 1500], fac: { ordre: 5 }, regard: { III_hugues: "allie", nerys: "allie" } }, to: "IIIA_conseil_paix" }, lose: { fx: { flag: "III:paix_conseil" }, to: "IIIA_conseil_paix" } },
      { label: "Donner ton avis sur le passage du gué : comment le prendre avec le moins de morts", fx: { fac: { aldaran: 10 }, ep: ["seance", 1000], regard: { vendrel: "cordial" } }, to: "IIIA_conseil_guerre" },
      { label: "Te taire, et regarder qui regarde qui", to: "IIIA_conseil_silence" },
    ] },

  IIIA_conseil_paix: { act: "III", title: "Le conseil de guerre", place: "hautmont",
    text: [
      { outcome: "win", text: "Tu parles. Pas des couronnes ni des salines : de l'église de Merle, du piquier et de l'arbalétrier sous la même couverture, de la potence au carrefour, de la colonne sur la route du nord. Tu parles des hommes qui sont dans cette tente, et de ceux qui ne sont plus nulle part. Un baron des hautes terres, un vieil homme qui a perdu deux fils, hoche la tête. Puis un autre. Hugues te regarde, et pour la première fois, il sourit, très peu.", else: "Tu parles, et ça ne prend pas. Les barons se regardent, un capitaine ricane, Kell bâille ostensiblement. Ce que tu dis de Merle tombe dans le silence comme une pierre dans un puits sans fond. Seul Hugues t'écoute jusqu'au bout. Seule Nerys ne baisse pas les yeux." },
      "Vendrel attend que tu aies fini, poliment, les mains jointes. « Merci, dit-il. L'Ordre a toujours eu le cœur tendre. Sa Majesté décidera. » Il se tourne vers le roi. « Sa Majesté décidera demain, quand elle sera reposée. » Le roi hoche la tête. Le conseil est levé.",
      "En sortant, Hugues passe près de toi et murmure, sans s'arrêter : « Ne dormez pas seul{e}, ce soir. » Il s'éloigne avant que tu aies pu lui demander ce qu'il veut dire.",
    ],
    choices: [{ label: "Sortir du pavillon, à la nuit tombée", big: true, to: "IIIA_attentat" }] },

  IIIA_conseil_guerre: { act: "III", title: "Le conseil de guerre", place: "hautmont",
    text: [
      "Tu montres sur la carte les bancs de gravier du gué, l'endroit où le courant est le plus faible, la berge où des arbalétriers seraient à couvert. Tu proposes de faire passer les piquiers de nuit, en silence, plutôt qu'à l'aube en fanfare. Les barons écoutent. Kell approuve bruyamment. Hugues te regarde d'un air que tu n'arrives pas à lire, puis il note quelque chose, sans un mot.",
      "Vendrel, lui, est enchanté. « Voilà quelqu'un qui voit clair », dit-il en te désignant au conseil. Il pose la main sur ton épaule en passant, à la sortie. Sa main est froide, à travers le gant et le drap.",
      { if: { has: "III:vendrel_or" }, text: "« Nos deux couronnes sont bien employées », te glisse-t-il à l'oreille. Personne d'autre n'a entendu. Tu préférerais que quelqu'un ait entendu." },
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_conseil_silence: { act: "III", title: "Le conseil de guerre", place: "hautmont",
    text: [
      "Tu ne dis rien, et tu regardes. Tu vois que les barons des hautes terres regardent Hugues quand ils doutent, et Vendrel quand ils ont peur. Tu vois que Kell regarde le coffre de la solde, posé dans un coin, sous garde. Tu vois que le roi ne regarde personne, qu'il regarde la carte, le gué de Gaudre, sans le voir, et qu'il remue les lèvres comme un homme qui récite une prière dont il a oublié la fin.",
      "Et tu vois Nerys. Elle a laissé tomber son mouchoir. En le ramassant, elle a glissé un papier plié dans la main de Hugues de Vaux, qui l'a mis dans sa manche sans changer de visage. Personne ne l'a vu. Sauf toi. Et peut-être Vendrel, qui sourit à ce moment-là, sans raison apparente.",
      "Vendrel conclut : Sa Majesté décidera demain. Le roi hoche la tête. Le conseil est levé.",
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_attentat: { act: "III", title: "Dans l'allée des forges", place: "hautmont",
    text: [
      "La nuit est tombée pendant le conseil. Tu prends l'allée des forges pour rejoindre ta tente : c'est le plus court, et à cette heure les forgerons ont éteint leurs feux. Il n'y a personne. Puis il y a trois hommes, sortis de l'ombre entre deux enclumes, sans tabard, le visage couvert d'un foulard, une lame courte à la main. Ils ne disent rien. Ils ne demandent pas ta bourse.",
      { with: "thavary", text: "Thavary a déjà l'épée au clair. « Derrière moi », dit-elle, comme on le dit à quelqu'un de sa maison." },
      { without: "any", text: "Tu es seul{e}. Hugues t'avait dit de ne pas l'être." },
    ],
    choices: [
      { label: "Te battre", fight: { title: "Les coupe-jarrets de l'allée des forges", enemies: [{ id: "III_coupe_jarret", n: 3 }], terrain: "nature",
        win: { fx: { ep: ["seance", 1500] }, to: "IIIA_attentat_apres" }, lose: { fx: { pv: -5 }, to: "IIIA_attentat_battu" },
        flee: { label: "Renverser une enclume et courir vers les sentinelles", dom: "discretion", diff: -10, to: "IIIA_attentat_fuite" } } },
      { label: "Crier à la garde de toutes tes forces", test: { dom: "social", diff: 0, label: "Ameuter le camp" }, win: { fx: { ep: ["perso", 600] }, to: "IIIA_attentat_fuite" }, lose: { to: "IIIA_attentat_battu" } },
    ] },

  IIIA_attentat_apres: { act: "III", title: "Dans l'allée des forges", place: "hautmont",
    text: [
      "Deux sont à terre. Le troisième s'est enfui en boitant vers le bas du camp, vers la rivière. Tu arraches le foulard du plus proche. Un visage que tu ne connais pas, un homme d'une quarantaine d'années, une barbe de trois jours. Pas un soldat : ses mains n'ont jamais tenu de pique. Dans sa ceinture, une petite bourse avec trois couronnes d'or neuves, et rien d'autre. Pas une lettre, pas un nom.",
      "Il est vivant. Il te regarde avec une terreur qui n'est pas pour toi. « Je ne sais rien, dit-il. On nous a payés. Un homme en gris. Je ne sais rien. Il saura que je n'ai rien dit, n'est-ce pas ? Dites-lui que je n'ai rien dit. »",
      "Les sentinelles arrivent avec des lanternes. On l'emmène aux fers. Au matin, quand Hugues de Vaux descend l'interroger, la cellule est ouverte, et l'homme n'y est plus. Personne n'a rien vu.",
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_attentat_fuite: { act: "III", title: "Dans l'allée des forges", place: "hautmont",
    text: [
      "Le vacarme fait sortir les forgerons de leurs tentes en chemise, puis les sentinelles, puis la moitié du quartier. Les trois hommes disparaissent dans le noir comme s'ils n'avaient jamais été là. On te demande ce qui s'est passé. Tu le dis. On te regarde avec un mélange de pitié et de doute.",
      "Plus tard, Hugues vient s'asseoir à côté de toi devant le brasero d'une forge. « Je vous avais prévenu{e} », dit-il. Il ne dit rien d'autre. Il reste là jusqu'à l'aube, l'épée sur les genoux.",
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_attentat_battu: { act: "III", title: "L'infirmerie", place: "hautmont",
    fx: { rest: true },
    text: [
      "Tu te réveilles à l'infirmerie, la tête bandée, un goût de sang dans la bouche. Il fait jour. On t'a trouvé{e} dans l'allée des forges, au milieu de la nuit, avec un coup de lame dans les côtes qui a glissé sur l'os au lieu d'entrer. Tu as eu de la chance, dit le médecin. Il a l'air de penser que la chance n'y est pour rien.",
      "Hugues de Vaux est assis au pied de ton lit, sur un tabouret. « On a trouvé trois hommes dans le fossé de la palissade, ce matin, dit-il. Morts. Égorgés proprement. Pas par vous. » Il se lève. « Celui qui les a payés n'aime pas les gens qui ratent. Ni les gens qui pourraient parler de ceux qui ratent. » Il s'en va. Tu restes longtemps à regarder la toile de la tente.",
    ],
    choices: [{ back: "IIIA_camp" }] },
});

// ------------------------------------------------------------------ side quest III_deserteur: Arnaud Morel
Object.assign(P, {
  IIIA_deserteur: { act: "III", title: "Les fers", place: "hautmont",
    fx: { meet: "III_jehan" },
    text: [
      { first: true, text: "Près du parc à chevaux, sous un auvent de planches, on a planté une rangée de poteaux avec des anneaux de fer, et l'on y attache ceux qui attendent d'être jugés. Il n'y en a qu'un, ce jour-là : un garçon d'une vingtaine d'années, en tabard bleu déchiré, assis dans la boue, les poignets enchaînés au-dessus de la tête. Il a de la paille dans les cheveux, une lèvre fendue, et des yeux qui ne demandent plus rien à personne." },
      { again: true, text: "Arnaud Morel est toujours enchaîné à son poteau, sous l'auvent du parc à chevaux. Il lève la tête quand tu approches." },
      "Un piquier qui garde les chevaux t'explique, en crachant son tabac : « Déserteur. Parti trois nuits, revenu la quatrième. On ne sait pas ce qu'il a fait entre. Il ne veut pas le dire. Le procès est demain à midi. Le conseiller veut un exemple, à cause de tous ceux qui filent. Le connétable, lui, je ne sais pas. »",
      { with: "coliane", text: "Coliane s'accroupit à côté du garçon, hors de portée du piquier, et lui glisse un quignon de pain dans la main. Il le regarde comme s'il ne savait plus ce que c'était." },
    ],
    choices: [
      { label: "Lui demander où il était, ces trois nuits", hide: { seen: "IIIA_deserteur_parle" }, to: "IIIA_deserteur_parle" },
      { label: "Assister au procès, à midi", big: true, hide: { not: { seen: "IIIA_deserteur_parle" } }, to: "IIIA_proces" },
      { back: "IIIA_camp" },
    ] },

  IIIA_deserteur_parle: { act: "III", title: "Arnaud Morel", place: "hautmont",
    text: [
      "Il ne veut pas parler, d'abord. Puis il voit que tu ne portes pas de tabard, et que tu ne pars pas. « Arnaud Morel, dit-il enfin. De Merle. Ma mère est à Merle. » Il avale sa salive. « Les fourrageurs sont passés chez elle. Ils ont tout pris. Un gars de ma compagnie me l'a dit, il était avec eux. Il riait. Il disait que la vieille avait pleuré sur ses poules. »",
      "« Alors j'ai pris ma farine. Celle de ma ration, que je gardais depuis trois semaines, pour le cas où. Je suis descendu la nuit par le moulin. Je lui ai porté. Je suis reparti avant le jour pour être à l'appel. Mais il y avait une patrouille de pourpres sur le pré, et j'ai dû me cacher deux jours dans les roseaux. Quand je suis revenu, l'appel était passé depuis trois jours. » Il regarde ses chaînes. « Je ne voulais pas déserter. Je voulais revenir. Je suis revenu. Personne ne revient, qui déserte. Personne ne me croit. »",
      "« Ne le dites pas à ma mère, dit-il encore. Qu'elle croie que je suis à la guerre. »",
    ],
    choices: [
      { label: "« Je serai au procès. »", fx: { conf: { aubin: 5, pip: 5 } }, back: "IIIA_deserteur" },
    ] },

  IIIA_proces: { act: "III", title: "Le procès", place: "hautmont",
    text: [
      "On juge sous l'auvent du corps de garde, devant une centaine de piquiers qu'on a fait venir pour qu'ils voient. Hugues de Vaux préside, assis derrière une table de campagne, avec deux capitaines à ses côtés. Le sergent d'Arnaud accuse : absent trois nuits, sans permission, revenu sans explication. Ça prend très peu de temps. Il n'y a pas grand-chose à dire.",
      "Maître Vendrel est là, debout au premier rang, les mains gantées croisées devant lui. Il ne siège pas. Il n'a pas besoin de siéger. Quand le sergent a fini, il dit, de sa voix posée, assez fort pour que les piquiers entendent : « Il en part dix par nuit, connétable. Dix. Si celui-ci revient vivant, il en partira vingt. Sa Majesté compte sur votre fermeté. »",
      "Hugues regarde Arnaud, puis Vendrel, puis toi. « Quelqu'un veut-il parler pour l'accusé ? » demande-t-il. La règle l'y oblige. Personne ne se lève jamais.",
      { if: { is: { fleches: "ramenes" } }, text: "Tu penses à Tancrède, au fond d'un cercueil, sur le bac des morts. Il y a des gens qui passent les lignes dans le mauvais sens pour de bonnes raisons." },
    ],
    choices: [
      { label: "Montrer le bon de réquisition de Gisèle Morel", hide: { not: { item: "III_billet_morel" } }, fx: { drop: "III_billet_morel", ep: ["seance", 1500] }, to: "IIIA_proces_gagne" },
      { label: "Te lever et parler pour lui", test: { dom: "social", diff: -20, label: "Plaider pour Arnaud", help: [{ with: "aubin", v: 15 }, { if: { item: "III_ordre_mission" }, v: 10 }, { if: { seen: "III_refugies_morel" }, v: 10 }, { if: { has: "III:paix_conseil" }, v: 5 }] }, win: { fx: { ep: ["seance", 1200] }, to: "IIIA_proces_gagne" }, lose: { to: "IIIA_proces_perdu" } },
      { label: "Laisse-moi faire : je parle pour lui, au nom de Thavar", who: "thavary", test: { dom: "social", diff: -10, label: "Plaider au nom d'une vieille maison" }, win: { fx: { conf: { thavary: 10 }, ep: ["seance", 1200] }, to: "IIIA_proces_gagne" }, lose: { to: "IIIA_proces_perdu" } },
      { label: "Demander au connétable de te confier le garçon comme guide", if: { any: [{ has: "IIIA:mediateur" }, { seen: "IIIA_connetable_mine" }] }, why: "Le connétable ne te connaît pas assez pour te confier un de ses hommes.", fx: { ep: ["seance", 1000] }, to: "IIIA_enrole" },
      { label: "Laisser la Marque peser sur le sergent qui accuse", hide: { mark: { max: 0 } }, tag: "Marque +1", stain: true, fx: { mark: 1, conf: { aubin: -10, coliane: -5 }, fear: { pip: 5 } }, to: "IIIA_proces_marque" },
      { label: "Te taire", to: "IIIA_proces_perdu" },
    ] },

  IIIA_proces_marque: { act: "III", title: "Le procès", place: "hautmont",
    text: [
      "Tu ne te lèves pas. Tu regardes seulement le sergent, et tu laisses la tache, sur ta main, faire ce qu'elle sait faire. C'est une chose minuscule : un peu de froid qui passe d'un regard à l'autre. Le sergent s'interrompt au milieu d'une phrase. Il cherche ses mots. Il dit qu'il n'est plus sûr des dates. Qu'il a peut-être mal compté les nuits. Qu'il ne sait plus. Il a les mains qui tremblent et il ne sait pas pourquoi.",
      "Hugues le regarde longuement. Vendrel, lui, ne regarde pas le sergent. Il te regarde, toi, et il sourit, d'un sourire de connaisseur.",
    ],
    choices: [{ label: "Attendre la sentence", big: true, to: "IIIA_proces_gagne" }] },

  IIIA_proces_gagne: { act: "III", title: "La sentence", place: "hautmont",
    fx: { set: { deserteur: "gracie" }, quest: "III_deserteur", fac: { aldaran: 5 }, regard: { III_hugues: "allie", vendrel: "mefiant" }, conf: { aubin: 10, pip: 10, coliane: 5 } },
    text: [
      { if: { seen: "III_refugies_morel" }, text: "Tu poses le bon sur la table du connétable. Un papier gras, plié en huit, au sceau de l'intendance : *pris chez la veuve Morel, à Merle, deux sacs de seigle, un de son, sept poules, pour le service du roi*, et la date. Hugues le lit. Il compte sur ses doigts. Le jour des fourrageurs à Merle, le soir où Arnaud a disparu.", else: "Tu parles de Merle, de la veuve Morel, des fourrageurs, d'un garçon qui descend la nuit avec sa ration sur le dos et qui remonte. Tu dis qu'un déserteur ne revient pas. Que celui-ci est revenu. Les piquiers, derrière, ont cessé de bavarder." },
      "Hugues de Vaux se tait un long moment. Puis il dit : « L'accusé s'est absenté sans permission. Il sera puni de vingt coups de baguette et d'un mois de solde. L'accusé est revenu. Il reprendra son rang. » Il regarde Vendrel bien en face. « Un homme qui revient, conseiller, on ne le pend pas. Sinon, ils ne reviendront plus. »",
      "Vendrel incline la tête, aimable. « Le connétable connaît ses hommes », dit-il. Il s'en va sans attendre la fin. Dans la foule des piquiers, quelqu'un a commencé à taper du pied, puis un autre, et ça devient un roulement sourd, qui ne s'arrête que quand Hugues lève la main.",
      "Arnaud, détaché, ne sait pas quoi faire de ses bras. Il te regarde. Il ne dit rien. Le soir, un piquier t'apporte de sa part un sifflet de bois taillé au couteau, en forme d'oiseau.",
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_proces_perdu: { act: "III", title: "La sentence", place: "hautmont",
    text: [
      { outcome: "lose", text: "Tu parles, mais les mots ne prennent pas. Le sergent te coupe, un capitaine ricane, Vendrel soupire comme on soupire devant un enfant têtu. Hugues t'écoute jusqu'au bout, puis il secoue la tête, lentement. Il n'a pas assez. Il le regrette. Ça se voit.", else: "Personne ne se lève. Le silence dure. Hugues le laisse durer, plus longtemps que la règle ne le demande, en regardant la foule, en te regardant. Puis il baisse les yeux sur ses papiers." },
      "« L'accusé sera pendu demain à l'aube, devant sa compagnie », dit Hugues. Sa voix ne tremble pas. Ses mains, à plat sur la table, sont blanches aux jointures. Vendrel incline la tête. Les piquiers s'en vont sans un mot.",
      "On ramène Arnaud à son poteau. En passant près de toi, il dit seulement : « Ne le dites pas à ma mère. »",
    ],
    choices: [
      { label: "Le faire évader cette nuit", big: true, to: "IIIA_evasion" },
      { label: "Laisser faire la justice du roi", to: "IIIA_pendaison" },
    ] },

  IIIA_evasion: { act: "III", title: "La nuit avant l'aube", place: "hautmont", takes: "night",
    text: [
      "Une seule sentinelle sous l'auvent du parc à chevaux, un vieux piquier enroulé dans sa cape, qui tape des pieds pour se réchauffer. Les chevaux remuent dans le noir. La clé des fers pend à sa ceinture. Plus loin, au bout de l'allée, on entend des coups de marteau : on monte la potence, pour l'aube.",
      { with: "coliane", text: "Coliane a déjà repéré la clé, la ceinture, la boucle de la ceinture. « Trois pas, dit-elle. Il ne sentira rien. »" },
      { with: "pip", text: "Pip s'est posé sur le toit de l'auvent. « Je peux faire peur aux chevaux, propose-t-il. Juste un peu. Un tout petit peu. »" },
    ],
    choices: [
      { label: "Voler la clé et ouvrir les fers", test: { dom: "discretion", diff: -20, label: "Libérer Arnaud sans réveiller le camp", help: [{ with: "coliane", v: 15 }, { with: "pip", v: 10 }, { with: "gloup", v: 5 }, { if: { item: "pied_de_biche" }, v: 5 }] }, win: { fx: { ep: ["seance", 1500] }, to: "IIIA_evasion_ok" }, lose: { fx: { fac: { aldaran: -10 }, pv: -2 }, to: "IIIA_pendaison" } },
      { label: "Laisse-moi faire : la clé, je m'en occupe", who: "coliane", fx: { conf: { coliane: 10 }, ep: ["seance", 1500] }, to: "IIIA_evasion_ok" },
      { label: "Renoncer", to: "IIIA_pendaison" },
    ] },

  IIIA_evasion_ok: { act: "III", title: "Par la route du moulin", place: "hautmont",
    fx: { set: { deserteur: "evade" }, quest: "III_deserteur", conf: { pip: 10, coliane: 10 }, fac: { aldaran: -5 } },
    text: [
      "La clé tourne dans le cadenas avec un bruit que tu entends jusque dans tes dents. La sentinelle ronfle. Arnaud se relève en se tenant les poignets, et il ne comprend pas ; tu dois le pousser pour qu'il marche. Vous passez entre les chevaux, sous la palissade, par le fossé, et vous êtes dehors, dans le noir, sur la route du moulin.",
      "« Merle, dit-il. Je vais à Merle. Ma mère. » Tu lui dis que c'est le premier endroit où on le cherchera. Il dit qu'il le sait. Il dit qu'il ira quand même, et qu'après, il passera la rivière avec elle, par le bac des morts, et qu'il ira là où il n'y a ni bleus ni pourpres, s'il y a un endroit comme ça.",
      "Il te prend la main, il la serre trop fort, et il s'en va en courant dans la descente. Au matin, la potence est prête, et il n'y a personne à pendre. Hugues de Vaux, quand on vient le lui annoncer, dit seulement : « Ah. » Il ne fait pas chercher très loin.",
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_pendaison: { act: "III", title: "L'aube", place: "hautmont",
    fx: { set: { deserteur: "pendu" }, quest: "III_deserteur", conf: { pip: -10, aubin: -5 } },
    text: [
      { outcome: "lose", text: "La sentinelle se retourne au moment où tu tiens la clé. Elle crie. Le camp se réveille. On te jette à terre, on te prend la clé, on te donne des coups de hampe dans les côtes, et Hugues arrive en chemise, une lanterne à la main. Il te regarde longtemps. « Allez-vous-en d'ici », dit-il seulement. On te relâche. Arnaud, lui, reste à son poteau jusqu'à l'aube." },
      "On le pend à l'aube, devant sa compagnie, sur la potence neuve, au bout de l'allée. Il ne dit rien. Il a les yeux ouverts. Il regarde vers le sud, vers Merle, vers la rivière, jusqu'à la fin. Ça prend moins de temps qu'on ne croit, et plus qu'on ne peut le supporter.",
      "Les piquiers rentrent dans leurs tentes en silence. La nuit suivante, il en part quinze, au lieu de dix. Vendrel, à qui on l'annonce, hausse les épaules.",
      { with: "aubin", text: "Frère Aubin a demandé à dire les prières au pied de la potence. On le lui a permis. Il les a dites. Ensuite, il est resté assis par terre, sans bouger, jusqu'à ce qu'on décroche le corps, à midi. « Il voulait revenir, a-t-il dit seulement. Il était revenu. »" },
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_enrole: { act: "III", title: "Un guide", place: "hautmont",
    fx: { set: { deserteur: "enrole" }, quest: "III_deserteur", regard: { III_hugues: "redevable", vendrel: "mefiant" }, conf: { thavary: 5, aubin: 5 } },
    text: [
      "Tu te lèves, et tu dis que tu as besoin d'un guide qui connaisse Merle, les rives, le pré, la route du moulin et le gué. Un homme du pays. Que celui-ci a montré qu'il savait passer les lignes de nuit, et revenir. Que tu le prendrais sous ta responsabilité, au nom de ceux qui t'envoient.",
      "Hugues saute sur la porte que tu lui ouvres avec une rapidité qui en dit long. « L'accusé est puni d'un mois de solde, dit-il. Il est détaché au service de l'Ordre, comme guide, jusqu'à la fin de la campagne. S'il manque à ce service, on le pendra, et on demandera des comptes à l'Ordre. » Vendrel ouvre la bouche, puis la referme, et sourit. Il sait compter les voix, lui aussi.",
      "Arnaud te suit hors de l'auvent, frottant ses poignets. « Je connais le gué, dit-il tout bas. Le vrai. Pas celui des cartes. Il y a un banc de gravier, sous l'eau, que personne n'a dessiné. » Il te regarde. « Je vous le montrerai, le jour venu. »",
    ],
    choices: [{ back: "IIIA_camp" }] },
});

// ------------------------------------------------------------------ side quest III_nerys: the princess's letter
Object.assign(P, {
  IIIA_nerys: { act: "III", title: "La tente de la princesse", place: "hautmont",
    fx: { meet: "nerys", regard: { nerys: "curieux" } },
    text: [
      "On te laisse entrer quand tu dis que tu apportes un livre. La tente de Nerys est petite, sobre, chauffée par un seul brasero, encombrée de livres comme celle de Vendrel, mais pas des mêmes : des chroniques, des traités de droit, des recueils de lettres, une grammaire de la langue du sud ouverte sur un pupitre. Une servante âgée coud dans un coin et ne lève pas les yeux.",
      "Nerys est debout près du brasero. De près, elle a dix-neuf ans, un visage pâle et têtu, des tresses serrées, des taches d'encre au majeur. « Asseyez-vous, dit-elle. Je n'ai pas beaucoup de temps. On me compte mes visites. » Elle s'assied en face de toi, sur le bord d'un coffre. « Mon père ne gouverne plus. Il signe. On lui fait signer. Je ne peux rien dire, parce que je suis sa fille, que j'ai dix-neuf ans et que je suis une femme, dans cet ordre. Mais je peux écrire. »",
      "Elle sort de sa manche une lettre pliée, sans adresse, scellée d'une goutte de cire bleue sans empreinte. « Il faut qu'elle sorte du camp. Tous les courriers sont lus. Toutes les lettres passent par le pavillon gris. Le curé de Merle a un chemin, je le sais. Portez-la-lui. C'est tout ce que je vous demande. » Elle te regarde. « C'est beaucoup, je sais. »",
      { if: { is: { nerys: null } }, text: "Elle ajoute, plus bas : « Si vous refusez, je ne vous en voudrai pas. Je trouverai quelqu'un d'autre, ou je ne trouverai personne. »" },
    ],
    choices: [
      { label: "« À qui écrivez-vous ? »", hide: { seen: "IIIA_nerys_contenu" }, to: "IIIA_nerys_contenu" },
      { label: "Prendre la lettre et sortir de la tente", big: true, fx: { item: "III_lettre_nerys" }, to: "IIIA_nerys_fouille" },
      { label: "Refuser : c'est trop dangereux, pour elle comme pour toi", refuse: true, fx: { set: { nerys: "refusee" }, regard: { nerys: "distant" } }, back: "IIIA_camp" },
    ] },

  IIIA_nerys_contenu: { act: "III", title: "La princesse", place: "hautmont",
    text: [
      "Nerys hésite. Puis elle décide, d'un coup, comme on saute dans l'eau froide. « À la duchesse. À Orsini. Pour lui proposer de parler, elle et moi, sans personne. » Elle a un petit rire sans joie. « Mon père me ferait enfermer s'il le savait. Vendrel ferait pire, et poliment. »",
      "« Je ne trahis pas Aldaran, dit-elle encore, très vite, comme si tu l'avais accusée. J'essaie de le garder. Si cette guerre continue, il n'y aura plus d'Aldaran à hériter : il y aura un champ de bataille, un roi mort, et un conseiller qui saura très bien quoi faire de la couronne. » Elle se tait. Elle a dit plus qu'elle ne voulait. Ça se voit à la façon dont elle serre les lèvres.",
    ],
    choices: [{ back: "IIIA_nerys" }] },

  IIIA_nerys_fouille: { act: "III", title: "Devant la tente", place: "hautmont",
    text: [
      "Tu as fait dix pas hors de la tente quand deux hommes en gris se détachent de l'ombre d'un pavillon voisin et viennent se placer devant toi. Ils sont polis. Ils sont toujours polis. « Maître Vendrel demande que toute personne qui sort de chez la princesse soit fouillée, dit l'un d'eux. Pour sa sécurité. Vous comprenez. » L'autre tend déjà la main vers ta besace.",
      "La lettre est dans ta manche, contre ton poignet. Tu la sens comme une brûlure.",
      { with: "gloup", text: "Gloup s'est collé à ta botte, et il te regarde avec une intensité inhabituelle. Il ouvre la bouche, grande, très grande, comme pour bâiller." },
    ],
    choices: [
      { label: "Faire passer la lettre dans ta botte pendant qu'ils fouillent ta besace", test: { dom: "discretion", diff: -20, label: "Cacher la lettre sous leur nez", help: [{ with: "coliane", v: 10 }, { if: { arch: "voleur" }, v: 10 }] }, win: { fx: { ep: ["seance", 1000] }, to: "IIIA_nerys_passe" }, lose: { to: "IIIA_nerys_saisie" } },
      { label: "Laisse-moi faire : je la prends, et je la rends dehors", who: "coliane", fx: { conf: { coliane: 10 }, ep: ["seance", 1000] }, to: "IIIA_nerys_passe" },
      { label: "Laisse-moi faire : je l'avale", who: "gloup", fx: { conf: { gloup: 15 }, ep: ["seance", 1000] }, to: "IIIA_nerys_gloup" },
      { label: "Leur opposer la lettre de mission de l'Ordre", hide: { not: { item: "III_ordre_mission" } }, test: { dom: "social", diff: -10, label: "Refuser la fouille au nom de l'Ordre", help: [{ if: { has: "IIIA:hugues" }, v: 10 }] }, win: { fx: { ep: ["seance", 1000], fac: { ordre: 5 } }, to: "IIIA_nerys_passe" }, lose: { to: "IIIA_nerys_saisie" } },
    ] },

  IIIA_nerys_gloup: { act: "III", title: "Devant la tente", place: "hautmont", with: "gloup",
    text: [
      "Tu laisses tomber ta main le long de ta jambe, la lettre glisse, et Gloup l'engloutit d'un seul mouvement, avec un petit bruit de succion très satisfait. Les hommes en gris fouillent ta besace, tes poches, tes manches, ta ceinture. Ils ne trouvent rien. L'un d'eux regarde Gloup. Gloup le regarde. L'homme en gris décide, visiblement, qu'il y a des choses qu'on ne fouille pas.",
      "Plus loin, derrière une tente, Gloup te rend la lettre, avec un hoquet. Elle est un peu humide, et la cire a pris une teinte verdâtre, mais elle est entière. Gloup a l'air extrêmement fier de lui. Il a raison.",
    ],
    choices: [{ label: "Garder la lettre pour le curé de Merle", big: true, to: "IIIA_nerys_passe" }] },

  IIIA_nerys_passe: { act: "III", title: "La lettre", place: "hautmont",
    text: [
      "Les hommes en gris s'excusent du dérangement et s'en vont. Tu as la lettre. Elle n'est pas lourde. Elle pèse plus que tout ce que tu portes.",
      "Le curé de Merle est à une demi-journée de marche. Le pavillon gris, lui, est à trente pas. Tu y penses une seconde, malgré toi : ce que paierait le conseiller pour cette lettre-là, ce que te vaudrait sa reconnaissance. Puis tu penses à autre chose. Ou pas.",
    ],
    choices: [
      { label: "Garder la lettre pour la porter au curé de Merle", big: true, back: "IIIA_camp" },
      { label: "La porter plutôt au pavillon gris", tag: "Trahir Nerys", fx: { drop: "III_lettre_nerys" }, to: "IIIA_nerys_vendrel" },
    ] },

  IIIA_nerys_saisie: { act: "III", title: "La lettre saisie", place: "hautmont",
    fx: { drop: "III_lettre_nerys", set: { nerys: "saisie" }, quest: "III_nerys", regard: { nerys: "trahi", vendrel: "mefiant" }, fac: { aldaran: -5 } },
    text: [
      "La main gantée de gris se referme sur ton poignet, pas fort, juste assez. L'homme retourne ta manche, et la lettre tombe dans la boue entre vos pieds. Il la ramasse, l'essuie soigneusement sur son manteau, et la met dans sa poche sans la lire. « Merci », dit-il. Il n'ajoute rien. Ils s'en vont vers le pavillon gris.",
      "Ce soir-là, deux hommes en gris de plus montent la garde devant la tente de la princesse. On ne la voit plus à la messe du dimanche, ni au banquet, ni nulle part. On dit qu'elle est malade, elle aussi, comme son père. La servante âgée qui cousait dans un coin, on ne la revoit pas du tout.",
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_nerys_vendrel: { act: "III", title: "Le pavillon gris", place: "hautmont",
    fx: { set: { nerys: "trahie" }, quest: "III_nerys", gold: 30, fac: { aldaran: 5 }, regard: { vendrel: "cordial", nerys: "trahi" }, conf: { pip: -15, coliane: -15, aubin: -10, thavary: -5 } },
    text: [
      "Vendrel prend la lettre sans surprise, comme on prend une chose qu'on attendait. Il ne l'ouvre pas devant toi. Il la pose sur son bureau, à côté du bassin couvert d'un linge, et il pose dessus un presse-papiers de cristal. « Notre petite princesse, dit-il, avec une affection qui fait froid dans le dos. Elle a tant de cœur. »",
      "Il te tend une bourse. Tu la prends. « Vous avez rendu un grand service à Sa Majesté, dit-il. Sa Majesté ne le saura jamais, bien sûr. Moi, si. »",
      "Ce soir-là, deux hommes en gris de plus montent la garde devant la tente de Nerys. Tu passes devant en revenant. La toile est fermée. On n'entend rien à l'intérieur, pas même le bruit d'un livre qu'on tourne.",
      { with: "pip", text: "Pip ne revient pas sur ton épaule. Il reste loin, une lueur pâle au fond de la tente, toute la nuit, et le lendemain aussi." },
    ],
    choices: [{ back: "IIIA_camp" }] },

  IIIA_nerys_retour: { act: "III", title: "La tente de la princesse", place: "hautmont",
    fx: { item: "III_bague_nerys", regard: { nerys: "allie" }, ep: ["seance", 1000] },
    text: [
      "Nerys te reçoit debout, comme la première fois. Quand tu lui dis que la lettre est partie avec le bac des morts, elle ferme les yeux, une seconde, et quelque chose se défait dans ses épaules. Puis elle les rouvre, et elle est de nouveau la princesse d'Aldaran.",
      "Elle ôte de son petit doigt une bague d'argent, très simple, avec une tour gravée en creux. « Elle ouvre ce que mon nom ouvre encore, dit-elle. Les gardes de mon père la connaissent. Le greffier de la chancellerie aussi. Le conseiller ne l'aime pas. » Elle te la met dans la main et te referme les doigts dessus. « Je ne sais pas si la duchesse viendra. Je sais que quelqu'un, dans ce camp, a fait ce que je demandais sans rien demander en échange. C'est déjà plus que je n'espérais. »",
      { if: { has: "nerys:lue" }, text: "Elle te regarde un moment, la tête un peu penchée. « Vous l'avez lue, n'est-ce pas ? » Tu ne réponds pas. Elle hoche la tête. « J'aurais fait pareil. Au moins, maintenant, nous sommes deux à savoir. »" },
    ],
    choices: [{ back: "IIIA_camp" }] },
});

// ------------------------------------------------------------------ companions' talks (played at the hubs of act III)
Object.assign(P, {
  III_b_aubin_charline: { act: "III", title: "Le feu et l'eau", banter: true, with: ["aubin", "charline"],
    text: [
      "Le soir, Charline chauffe des pierres pour les blessés, et Frère Aubin les enveloppe de linge. Ils travaillent un moment sans parler, à la façon de deux personnes qui se sont vues faire des choses difficiles et qui n'ont plus besoin de se le dire.",
      "« Au camp, ils cautérisent au fer rouge, dit Charline. Ils brûlent tout autour, ce qui est sain avec ce qui ne l'est pas. Moi, je peux ne brûler que la plaie. » Elle retourne une pierre dans la braise. « Toute ma vie, on m'a dit que mon feu était un danger. Ici, c'est la seule chose qui sert à quelque chose. »",
      "Aubin noue un linge. « Toute ma vie, dit-il, on m'a dit que la prière servait à quelque chose. Ici, c'est la seule chose qui ne sert à rien. Et pourtant ils la demandent tous. » Il sourit, de travers. « On devrait échanger. — Ça ne marcherait pas, dit Charline. Vous brûleriez tout, et moi, ils ne me croiraient pas. » C'est la première fois que tu l'entends faire une plaisanterie. Aubin rit si fort qu'un blessé se réveille.",
    ],
    choices: [
      { label: "Rester à les écouter", fx: { conf: { aubin: 5, charline: 5 } }, to: "@ret" },
      { label: "Leur dire qu'ils font plus que tout le camp réuni", fx: { conf: { aubin: 5, charline: 10 } }, to: "@ret" },
    ] },

  III_b_coliane_thavary: { act: "III", title: "Ce que dit le conseiller", banter: true, with: ["coliane", "thavary"],
    text: [
      "Coliane s'assied à côté de Thavary devant le feu, plus près que d'habitude, et elle affûte un couteau sans la regarder. « Le conseiller te connaît, dit-elle. Il t'appelle par ton nom. Il te parle de promesses. »",
      "Thavary ne bouge pas. « Beaucoup de gens connaissent mon nom. Il est vieux. Il a été grand. — Et les promesses ? » Thavary se tait si longtemps que tu crois qu'elle ne répondra pas. « Ma maison doit de l'argent à la moitié des usuriers de la Sorbe, dit-elle enfin. Les gens qui ont de l'argent font des promesses aux gens qui en doivent. C'est tout. Ça n'engage que lui. »",
      "Coliane range son couteau. « Un homme qui m'a fait une promesse, un jour, a ouvert une écluse sur mon village, dit-elle. Ça n'engageait que lui, aussi. » Elle se lève et s'en va dormir. Thavary reste devant le feu, et elle ne te regarde pas.",
    ],
    choices: [
      { label: "Ne rien dire", to: "@ret" },
      { label: "Dire à Thavary que tu es là, si elle veut parler un jour", fx: { conf: { thavary: 5 } }, to: "@ret" },
    ] },

  III_b_pip_gloup: { act: "III", title: "Les enfants de Merle", banter: true, with: ["pip", "gloup"],
    text: [
      "Gloup est revenu de la grève couvert de traces de doigts : les enfants de Merle ont joué avec lui tout l'après-midi. Pip tourne autour de lui en le regardant de près, de très près, avec une curiosité scientifique.",
      "« Ils n'ont pas eu peur de toi, dit Pip. Les grands ont peur de toi. Les petits non. Pourquoi ? » Gloup fait un bruit qui ressemble à un haussement d'épaules, si une gelée pouvait hausser les épaules. « Moi, les grands ont peur de moi aussi, quand ils savent d'où je viens, dit Pip. Je ne sais pas d'où je viens. Ça doit être pour ça qu'ils ne savent pas avoir peur. »",
      "Gloup roule jusqu'à lui et se colle contre sa lumière, doucement, sans l'éteindre. Ils restent comme ça, la petite lumière et la petite tache, jusqu'à ce que le feu baisse.",
    ],
    choices: [{ label: "Les laisser dormir", fx: { conf: { pip: 5, gloup: 5 } }, to: "@ret" }] },
});

module.exports = {
  passages: P,
  extras: {
    mysteries: {
      III_champion: { title: "Qui est le champion de Vendrel ?", act: "III", solved: "IIIG_duel" },
    },
    clues: {
      i_champion: { rev: "III_champion", text: "Le champion de Vendrel s'entraîne seul avant l'aube, masqué de cuir noir, et ne se retourne jamais. De dos : une silhouette sèche, des cheveux gris coupés court, et une tache noire et luisante qui monte de la main gauche jusqu'au coude." },
    },
    people: {
      III_hugues: { name: "Hugues de Vaux", f: false, face: { age: "ancien", beard: "barbe", coif: "court", nose: "busque", iris: "clair" }, desc: "Connétable d'Aldaran. Soixante ans, un nez cassé deux fois, des yeux très clairs. Il ne veut pas de cette guerre, et il la fera très bien." },
      III_kell: { name: "Oswin Kell", f: false, face: { age: "adulte", hair: "roux", beard: "barbe", marks: ["bandeau"] }, desc: "Capitaine de la Compagnie du Chardon, trois cents lances. Un géant roux et borgne qui a servi six rois et trouve que celui-ci paie très bien." },
      III_jehan: { name: "Arnaud Morel", f: false, face: { age: "jeune", coif: "court" }, desc: "Un piquier de Merle, accusé de désertion. Il est parti trois nuits porter sa farine à sa mère. Il est revenu." },
      III_perrine: { name: "Gisèle Morel", f: true, face: { age: "ancien", coif: "foulard" }, desc: "La mère d'Arnaud, réfugiée sur la grève de Merle. Les fourrageurs lui ont tout pris, et lui ont laissé un papier." },
      III_mathurin: { name: "Rainier, curé de Merle", f: false, face: { age: "ancien", coif: "boucles" }, desc: "Un grand homme maigre aux cheveux blancs en désordre, qui soigne les blessés des deux camps dans sa nef et passe la rivière avec les morts." },
      III_fanchon: { name: "Tiphaine", f: true, face: { age: "enfant", coif: "foulard" }, desc: "Douze ans, chef des enfants qui ramassent les flèches sur le pré de Merle pour les revendre aux deux armées." },
      III_guillot: { name: "Tassin", f: false, face: { age: "enfant" }, desc: "Le petit frère de Tiphaine, neuf ans, parti ramasser des carreaux au pré des Saules." },
      III_ruaud: { name: "Maître Placide Ruaud", f: false, face: { age: "mur", marks: ["lunettes"] }, desc: "Greffier de la chancellerie du camp d'Aldaran. Trois ans à l'Athénée du Cercle dans sa jeunesse, une fille à Hautmont, et une grande peur du conseiller." },
      III_champion: { name: "Le champion de Vendrel", f: false, desc: "Un combattant masqué de cuir noir que le conseiller garde sous sa tente. On ne le voit qu'avant l'aube, de dos, dans la lice. Son bras gauche est noir jusqu'au coude." },
    },
    items: {
      III_ordre_mission: { name: "La lettre de mission de l'Ordre", kind: "document", keep: true, desc: "Scellée de cire grise. Elle te charge de la médiation de l'Ordre de la Main auprès des deux couronnes.", text: "« Le porteur parle au nom de l'Ordre de la Main, qui offre ses bons offices aux couronnes d'Aldaran et de Vel-Orin pour le bien des gens de l'Isarde. Qu'on lui ouvre les portes et qu'on l'écoute. Brann, sénéchal. »" },
      III_lettre_corbin: { name: "Le billet de Maître Corbin", kind: "document", keep: true, desc: "Un billet au cachet de l'Athénée. Il t'envoie observer l'Isarde pour le Cercle." },
      III_lettre_mariette: { name: "La lettre de Ysoline", kind: "quete", desc: "Une lettre pliée en huit, trouvée dans la doublure d'un pendu au carrefour des salines. Elle est adressée à un Clarin, de Merle." },
      III_billet_morel: { name: "Le bon de réquisition", kind: "quete", desc: "Un papier gras au sceau de l'intendance d'Aldaran : le grain pris chez la veuve Morel, à Merle, et la date." },
      III_lettre_nerys: { name: "La lettre de Nerys", kind: "quete", desc: "Une lettre sans adresse, scellée d'une goutte de cire bleue sans empreinte. Elle doit sortir du camp." },
      III_bague_nerys: { name: "La bague de Nerys", kind: "quete", keep: true, desc: "Une bague d'argent toute simple, une tour gravée en creux. Elle ouvre ce que le nom de la princesse ouvre encore." },
    },
    enemies: {
      III_deserteur_arme: { name: "Déserteur affamé", look: "humain", pv: 34, att: 60, def: 22, dmg: 6, desc: "Un piquier ou un arbalétrier qui a jeté son tabard et gardé son arme. Il se bat mal, et jusqu'au bout." },
      III_mercenaire: { name: "Lance du Chardon", look: "humain", pv: 40, att: 68, def: 26, dmg: 7, desc: "Un mercenaire de la Compagnie du Chardon, en cuirasse dépareillée. Il tire d'abord et demande ensuite, s'il reste quelqu'un." },
      III_coupe_jarret: { name: "Coupe-jarret sans tabard", look: "humain", pv: 36, att: 70, def: 24, dmg: 7, flank: true, desc: "Un homme payé pour une nuit, le visage sous un foulard. Il ne sait pas qui le paie, et c'est voulu." },
    },
    shops: {
      III_auberge: { name: "L'auberge du Bac", food: 3, sells: [{ item: "onguent", price: 8 }, { item: "gariig", price: 5 }, { item: "corde", price: 4 }] },
      III_vivandiere: { name: "La charrette de la Grande Margue", food: 4, sells: [{ item: "onguent", price: 7 }, { item: "epee_longue", price: 50 }, { item: "cotte", price: 95 }, { item: "cuir", price: 42 }, { item: "lanterne", price: 7 }] },
    },
    quests: [
      { id: "III_deserteur", act: "III", kind: "annexe", title: "Le déserteur", start: "IIIA_deserteur", echo: ["deserteur=gracie", "deserteur=evade", "deserteur=pendu", "deserteur=enrole"] },
      { id: "III_nerys", act: "III", kind: "annexe", title: "La lettre de Nerys", start: "IIIA_nerys", echo: ["nerys=portee", "nerys=saisie", "nerys=trahie", "nerys=refusee"] },
      { id: "III_fleches", act: "III", kind: "annexe", title: "Les ramasseurs de flèches", start: "III_fleches", echo: ["fleches=ramenes", "fleches=livre", "fleches=guillot", "fleches=tard"] },
    ],
    routes: [
      { id: "r_isarde", name: "La route de l'Isarde", from: "commanderie", to: "merle", steps: 5, region: "isarde", twoWay: false,
        label: "Descendre vers l'Isarde et Merle", if: { has: "acte:III" }, why: "La guerre de l'Isarde n'a pas encore commencé.",
        legs: [{ step: 1, passage: "III_r_colonne" }, { step: 2, passage: "III_r_pendu" }, { step: 3, passage: "III_r_village" }, { step: 4, passage: "III_r_deserteurs" }] },
      { id: "r_hautmont", name: "La route du moulin", from: "merle", to: "hautmont", steps: 2, region: "isarde",
        label: "Monter au camp d'Aldaran, sous Hautmont-le-Bas", labelBack: "Redescendre à Merle-sur-Isarde",
        legs: [{ step: 1, passage: "III_h_barrage", dir: "aller" }] },
    ],
    regions: {
      isarde: { name: "La vallée de l'Isarde", ambiance: "champs", chance: 0.5,
        events: ["EIII_corbeaux", "EIII_fourrageurs", "EIII_patrouille", "EIII_anselme", "EIII_flaque", "EIII_puits", "EIII_chirurgien"],
        quiet: [
          "La route longe des champs que personne n'a moissonnés. Le blé a versé, noir, sous la pluie. Une ferme, au loin, n'a plus de toit, et pas de fumée.",
          "Des traces de roues, des crottins, des bouts de corde, un soulier d'enfant au milieu du chemin : une armée est passée par là, ou des gens qui la fuyaient. Tu marches sans croiser personne pendant des heures.",
          "Il pleut, une pluie fine et froide qui ne s'arrête pas. Les bornes de la route portent les cinq mains, usées par les siècles, et le creux de la sixième, où l'eau s'amasse.",
          "Un vol de grues passe très haut, vers le sud, en criant. Elles ne savent pas qu'il y a une guerre. Tu les regardes jusqu'à ce qu'elles disparaissent.",
        ],
        camp: [
          "Vous campez dans une grange vide, au foin moisi, sans feu, pour ne pas être vus. On entend au loin, toute la nuit, les chiens d'un village qu'on ne voit pas.",
          "Vous dormez sous un pont, à l'abri du vent, les pieds presque dans l'eau. Une fois, vers minuit, des chevaux passent au-dessus, au pas, et personne ne respire.",
          "Un verger abandonné, des pommes tombées dans l'herbe que personne n'a ramassées. Vous en faites cuire sous la cendre. C'est le meilleur repas depuis le Val d'Anse.",
        ] },
    },
    events: {
      EIII_corbeaux: { passage: "EIII_corbeaux", weight: 2 },
      EIII_fourrageurs: { passage: "EIII_fourrageurs", weight: 2 },
      EIII_patrouille: { passage: "EIII_patrouille", weight: 2 },
      EIII_anselme: { passage: "EIII_anselme", weight: 1 },
      EIII_flaque: { passage: "EIII_flaque", weight: 1 },
      EIII_puits: { passage: "EIII_puits", weight: 2 },
      EIII_chirurgien: { passage: "EIII_chirurgien", weight: 2 },
    },
    banter: [
      { id: "III_b_aubin_charline", if: { all: [{ present: "aubin" }, { present: "charline" }, { seen: "III_eglise" }] } },
      { id: "III_b_coliane_thavary", if: { all: [{ present: "coliane" }, { present: "thavary" }, { any: [{ has: "III:thavary_vendrel" }, { seen: "IIIA_vendrel" }, { seen: "IIIA_roi" }] }] } },
      { id: "III_b_pip_gloup", if: { all: [{ present: "pip" }, { present: "gloup" }, { seen: "III_fleches" }] } },
    ],
  },
};
