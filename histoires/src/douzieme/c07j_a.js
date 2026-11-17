// Le Douzième Coup · chapter 7, the one who passes, first half (act II, five days before the Grand Midi of 541). The
// crossing of the Thiorne on the first ferry (what is left of the bridge: `monde:pont_reporte`, `monde:pont_sauve`,
// `monde:pont_tombe`, `monde:pont_secours`), the king's toll, then five leagues of royal road through the vineyards:
// the players of the Sablier and their pasteboard clock whose twelfth door opens on nobody, a child with grey nails
// carried to the sisters, the duke's huntsmen closing a forest for the very day of the Grand Midi, a village steeple
// and the Grand Master's apprentice (Josquin), the first sight of the Tower at the twelfth stone. The morning ends at
// the gate of the abbey of Sainte-Aure-des-Heures, where a black coach is already waiting (M07).
var P = {};
var LINE = { has: "monde:line_route" };
var TOMBE = { all: [{ has: "monde:pont_tombe" }, { not: { has: "monde:pont_reporte" } }, { not: { has: "monde:pont_sauve" } }] };

Object.assign(P, {
  K07j_route: { act: "II", title: "La première plate", place: "arvoise", ambiance: "eau", takes: "morning",
    text: [
      "La première plate quitte la cale au soleil levant. C'est un radeau de chêne long comme une grange, qu'un câble tient en travers du courant et qu'un cabestan hale d'une rive à l'autre. Tu y embarques avec deux charrettes, un troupeau d'oies, un moine, et toute la brume de la Thiorne.",
      { if: { has: "monde:pont_reporte" }, text: "En amont, le Pont-Neuf est blanc dans le matin, vide, barré d'une chaîne à chaque bout. Les oies le regardent en passant. Les passeurs s'en dispensent : ils ont huit ans d'habitude dans l'art de ne pas le voir." },
      { if: { not: { has: "monde:pont_reporte" } }, text: "En amont, il reste deux moignons de pierre blanche, et le bruit nouveau que fait l'eau sur les arches tombées. Sur la plate, tout le monde regarde de l'autre côté." },
      { if: { all: [TOMBE, { not: { has: "monde:pont_secours" } }] }, text: "On a tendu un filet en travers du fleuve, à la pointe de l'île. Deux barques y vont et viennent sans hâte, avec des gaffes." },
      { if: { all: [TOMBE, { has: "monde:pont_secours" }] }, text: "Gervais est au cabestan, les deux mains bandées. Il a plongé dix-sept fois hier. Il vire quand même, du plat des poignets, et personne n'a osé lui prendre sa barre." },
      { if: { not: { all: [TOMBE, { has: "monde:pont_secours" }] } }, text: "Gervais est au cabestan, son bonnet rouge sur l'oreille. Il vire le dos à la rivière, sans regarder, comme on fait un chemin qu'on sait." },
      { with: "perrine", text: "Au milieu du fleuve, à l'endroit où l'eau tourne, Perrine tire de sa hotte un almanach neuf et le laisse tomber par-dessus bord, à plat. Il tourne trois fois et s'enfonce. « Tous les ans, dit-elle sans te regarder. Il aimait savoir le temps qu'il ferait. »" },
      { if: LINE, text: "Line s'est couchée à plat ventre au bord de la plate, pour regarder le câble entrer dans l'eau. « Ça tire de travers et ça va droit, constate-t-elle. C'est comme un échappement. » Un passeur la retient par la ceinture, sans cesser de parler à son voisin." },
    ],
    choices: [
      { label: "Le moine, assis sur son sac", to: "K07j_moine", hide: { seen: "K07j_moine" } },
      { label: "Débarquer sur la rive du levant", to: "K07j_rive", big: true },
    ] },
  K07j_moine: { act: "II", title: "Quatre cents ans sans reprendre haleine", place: "arvoise", ambiance: "eau",
    text: [
      "C'est un petit frère quêteur, rond, crotté, qui voyage avec un âne et une besace à deux poches : une pour ce qu'on lui donne, l'autre pour ce qu'il en garde. Il va, comme vous, à Sainte-Aure-des-Heures.",
      "« Vous ne connaissez pas la maison ? Alors vous l'entendrez avant de la voir. Les sœurs y chantent les douze Heures. » Tu réponds qu'on les chante dans toutes les églises. « Dans toutes les églises, on les chante et on va déjeuner. Là-bas, on ne s'arrête pas. Quand une Heure finit, la suivante a déjà commencé, de jour, de nuit, à douze voix qui se relèvent. Il y a quatre cents ans que cela dure. Quatre cents ans sans reprendre haleine, mon enfant ! Je n'en ferais pas autant pour mon salut. »",
      "Il se penche, enchanté de son effet. « Les bonnes gens du vallon disent que si le chant cessait, les Heures cesseraient avec. Les sœurs répondent que c'est une superstition. Seulement, notez-le : elles se lèvent quand même la nuit. »",
    ],
    choices: [{ back: "K07j_route" }] },
  K07j_rive: { act: "II", title: "Le péage du Roi", place: "arvoise", ambiance: "eau",
    text: [
      "La rive du levant a sa cale, son auberge, et une maison carrée dont la porte est surmontée d'un écu aux armes d'Aurime : le péage. Tout ce qui sort de l'eau y passe, entre deux barrières, devant un homme maigre assis sous un auvent avec un registre et une balance.",
      "Il taxe à la tête, au poids et à l'intention. « Deux personnes à pied, un liard chacune. Deux hottes de marchandise, un sou la hotte. Vous allez à la foire ? Droit de foire, deux sous. Vous n'y allez pas ? Droit de passage simple, un sou, et je note que vous l'avez dit. »",
      { if: LINE, text: "Il avise Line. « Et ceci ? » « Ceci est à moi », dit Perrine. « Demi-tarif jusqu'à dix ans, sur présentation de l'enfant. » Line se présente, de face, puis de profil." },
      { with: "perrine", text: "Perrine a sorti sa bourse d'avance, avec la figure d'une personne qu'on saigne chaque année au même bras." },
    ],
    choices: [
      { label: "Payer : cinq sous, et la paix", if: { gold: { min: 1 } }, why: "Il te faudrait un écu à changer.", fx: { gold: -1, flag: "j:peage_paye" }, to: "K07j_peage_fin" },
      { label: "Déplier le sauf-conduit de Monseigneur Fulbert", hide: { not: { item: "sauf_conduit" } }, fx: { flag: "j:peage_eveque" }, to: "K07j_peage_fin" },
      { label: "Discuter le droit de foire : vous n'avez encore rien vendu", test: { dom: "social", diff: 5, label: "Marchander", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { present: "perrine" }, v: 10 }] },
        win: { fx: { flag: "j:peage_gagne", ep: ["seance", 300] }, to: "K07j_peage_fin" }, lose: { fx: { gold: -1, flag: "j:peage_paye" }, to: "K07j_peage_fin" } },
    ] },
  K07j_peage_fin: { act: "II", title: "Ce que vaut un passant", place: "arvoise", ambiance: "eau",
    text: [
      { after: "j:peage_eveque", text: "Le péager lit le sceau avant le texte. Il se lève. Il ôte son bonnet, ce que personne à Arvoise ne lui avait vu faire depuis la visite du grand voyer. « Monseigneur répond de vous. Passez. » Il raie une ligne, et te regarde t'éloigner avec le dépit d'un pêcheur qui rejette une belle prise sur ordre." },
      { after: "j:peage_gagne", text: "Tu fais valoir que le droit de foire porte sur la vente, et que l'on ne saurait taxer une vente à venir sans taxer aussi la grêle qui pourrait l'empêcher. Le péager n'a pas de colonne pour la grêle. Il te regarde longuement, cherche dans son registre, n'y trouve rien, et te fait signe de passer : cela lui coûte moins cher que d'avoir tort par écrit." },
      { after: "j:peage_paye", outcome: "lose", text: "Tu fais valoir que le droit de foire porte sur la vente. Le péager t'écoute jusqu'au bout avec intérêt, puis il ajoute un sou « pour le dérangement », qui figure, paraît-il, à son tarif." },
      { after: "j:peage_paye", text: "Tu paies. Le péager compte, pèse une pièce, écrit, et te remet un jeton de plomb qui prouve que tu existes entre la Thiorne et Méridane." },
      { with: "perrine", after: "j:peage_eveque", text: "Perrine attend d'avoir passé la seconde barrière. « Un sceau d'évêque, dit-elle. Depuis onze ans que je paie ici ! Tu me le prêteras pour le retour. »" },
    ],
    choices: [{ label: "Prendre la chaussée", to: "K07j_vignes" }] },

  // ------------------------------------------------------------ the road through the vineyards
  K07j_vignes: { act: "II", title: "La route des vignes", backName: "la chaussée", place: "arvoise", ambiance: "champs", hub: true,
    text: [
      { first: true, text: "Passé la Thiorne, le pays change de main. Jusqu'ici, la route royale traversait des terres. À présent, elle est chez elle : des ormes plantés au cordeau, des fossés curés, des bornes qu'on a repeintes pour la fête. Des deux côtés, la vigne monte en rangs sur des coteaux ronds. Elle est en fleur, et son odeur de réséda descend jusque sur la chaussée." },
      { first: true, text: "Tout le monde va à Méridane. Des fermiers en habit, des marchands de fromages, des nourrices, un montreur d'ours dont l'ours marche derrière, par politesse. On se dépasse, on se salue, on se demande d'où l'on vient ; et de proche en proche court sur la route la nouvelle du pont d'Arvoise, qui a déjà trois versions et un miracle." },
      { first: true, text: "Cinq lieues jusqu'à Sainte-Aure-des-Heures. Perrine y couche chaque année à l'hôtellerie : les sœurs logent gratis, et elles achètent des images." },
      { again: true, text: "La chaussée entre les vignes, les ormes, la file des gens qui montent à la fête." },
    ],
    choices: [
      { label: "Une roulotte peinte, versée dans le fossé", to: "K07j_troupe", hide: { seen: "K07j_machine_fin" } },
      { label: "Une femme assise au pied d'une borne, un enfant sur les genoux", to: "K07j_malade", hide: { seen: "K07j_malade" } },
      { label: "Des hommes en livrée verte, qui clouent des écriteaux aux ormes", to: "K07j_piqueurs", hide: { seen: "K07j_piqueurs" } },
      { label: "Des pénitents en sac, qui vendent quelque chose", to: "K07j_onzieme", hide: { seen: "K07j_onzieme" } },
      { label: "Perrine, qui marche en comptant", to: "K07j_perrine_route", hide: { any: [{ not: { present: "perrine" } }, { seen: "K07j_perrine_route" }] } },
      { label: "Line, qui traîne derrière", to: "K07j_line_route", hide: { any: [{ not: LINE }, { seen: "K07j_line_route" }] } },
      { label: "Le village de Saint-Gnomon-des-Vignes", to: "K07j_village" },
      { label: "Passer la douzième borne, et continuer", to: "K07j_xii", big: true },
    ] },
  K07j_troupe: { act: "II", title: "L'illustre troupe du Sablier", backName: "la roulotte versée", place: "arvoise", ambiance: "champs",
    text: [
      { first: true, text: "C'est une roulotte longue comme une péniche, peinte de soleils et de lunes, qui a mis deux roues au fossé et s'y est couchée sur le flanc avec la dignité d'une grande dame qui s'évanouit. On en a tiré des malles, des toiles roulées, un trône, la moitié d'un dragon. Six personnes s'agitent autour, en costumes de voyage qui ont été des costumes de scène." },
      { first: true, text: "Au milieu, debout sur le marchepied resté en l'air, un gros homme en pourpoint cerise dirige le désastre à pleine voix, et l'on comprend qu'il a enfin trouvé un rôle à sa mesure." },
      { again: true, text: "La roulotte aux soleils est toujours dans son fossé. Le gros homme au pourpoint cerise arpente la chaussée." },
    ],
    choices: [
      { label: "Le gros homme au pourpoint cerise", to: "K07j_florizel" },
      { label: "Une jeune fille, qui recoud une aile d'ange sur une malle", to: "K07j_colombe", hide: { seen: "K07j_colombe" } },
      { back: "K07j_vignes" },
    ] },
  K07j_florizel: { act: "II", title: "Maître Florizel", backName: "maître Florizel", place: "arvoise", ambiance: "champs", fx: { meet: "florizel" },
    text: [
      { first: true, text: "« Halte ! Qui que vous soyez, halte, et contemplez ! » Il descend du marchepied, ce qui fait pencher la roulotte de l'autre côté. « Florizel, pour vous servir et pour vous instruire. Directeur, auteur, premier rôle et cheval de renfort de l'illustre troupe du Sablier, qui a joué devant trois évêques, dont deux sont restés jusqu'au bout. »" },
      { first: true, text: "Il te prend par l'épaule et te montre le fossé comme on montre un champ de bataille. « L'essieu, ce n'est rien, on a des bras. Le trône, il en a vu d'autres. Mais ceci ! » Il écarte une toile. Dessous, couchée dans l'herbe, il y a une horloge." },
      { first: true, text: "Elle est de bois et de carton doré, haute de neuf pieds, avec un cadran large comme une meule et, tout autour, douze petites portes. « La Grande Horloge du Mystère des Heures ! À midi sonnant, les douze portes s'ouvrent l'une après l'autre, et de chacune sort une Heure, qui salue. C'est le clou. On le joue dans cinq jours devant quarante mille personnes. Elle est tombée sur le ventre, monsieur de la hotte, et depuis elle ne dit plus un mot. »" },
      { again: true, text: "Maître Florizel fait les cent pas devant son horloge couchée, en lui parlant bas, comme à une actrice qui boude." },
    ],
    choices: [
      { label: "T'agenouiller dans l'herbe, et ouvrir le ventre de l'horloge", hide: { seen: "K07j_machine_fin" }, to: "K07j_machine" },
      { back: "K07j_troupe" },
    ] },
  K07j_machine: { act: "II", title: "Le ventre de la Grande Horloge", place: "arvoise", ambiance: "champs",
    text: [
      "Derrière le carton, c'est une vraie machine, et quelqu'un l'a aimée. Un tambour à picots, gros comme un tonnelet, tourne sous un poids de fonte ; chaque picot lève un levier, chaque levier pousse une porte et la figure qui est derrière. Onze figures de bois peint, hautes d'une coudée : une sainte au sablier, un laboureur, une fileuse, un saint qui tire la langue.",
      "Tu les comptes. Onze. Tu cherches la douzième. Derrière la douzième porte, il y a un levier, un ressort, une petite plate-forme ronde, et rien dessus.",
      "La chute a faussé l'axe du tambour, qui frotte. Trois leviers ont sauté de leurs chapes. Un quatrième s'est tordu. C'est de l'ouvrage pour une matinée chez Line ; tu as un quart d'heure, un fossé, et un directeur qui te souffle dans le cou.",
    ],
    choices: [
      { label: "Redresser l'axe, et remettre les leviers en chape", test: { dom: "savoir", diff: 5, label: "Mécanique", help: [{ if: { voie: "rouage" }, v: 15 }, { if: { item: "trousse" }, v: 10 }, { if: { has: "monde:line_route" }, v: 5 }] },
        win: { fx: { flag: ["j:horloge_florizel", "j:florizel_ami"], regard: { florizel: "redevable" }, ep: ["seance", 700] }, to: "K07j_machine_fin" }, lose: { fx: { flag: "j:florizel_ami", regard: { florizel: "cordial" } }, to: "K07j_machine_fin" } },
    ] },
  K07j_machine_fin: { act: "II", title: "Onze Heures et une porte", place: "arvoise", ambiance: "champs",
    text: [
      { outcome: "win", text: "L'axe revient au maillet, par petits coups, en écoutant. Les leviers rentrent dans leurs chapes avec un claquement de bon aloi. Tu redresses le quatrième entre deux pierres. « Levez-la. » Six comédiens la mettent debout. Tu décroches le poids." },
      { outcome: "win", text: "Le tambour tourne. La première porte s'ouvre, et la sainte au sablier sort, salue, rentre. Le laboureur. La fileuse. Elles défilent toutes les onze, dans un petit bruit de tournebroche, et la troupe applaudit ses propres poupées. Puis la douzième porte s'ouvre sur sa plate-forme vide, attend le temps d'un salut, et se referme." },
      { outcome: "lose", text: "L'axe revient à peu près. Tu remets deux leviers sur trois ; le dernier a perdu sa goupille dans l'herbe, et tu la remplaces par un clou. On lève l'horloge. Le tambour tourne en geignant. Dix Heures sortent, saluent, rentrent. La onzième reste à mi-chemin de sa porte, un bras dehors, comme quelqu'un qui hésite à déranger. La douzième porte s'ouvre sur rien, et se referme." },
      { outcome: "lose", text: "« Elle marche ! » décide maître Florizel, qui est d'un naturel à compter dix pour douze. « La onzième, on l'aidera du doigt. Au théâtre, monsieur de la hotte, il y a toujours quelqu'un derrière. »" },
      "Tu demandes ce qui manque derrière la dernière porte. Le gros homme perd un peu de sa couleur cerise. « Rien ne manque. Elle a toujours été ainsi. On ne montre pas la Douzième : ni en peinture, ni en bois, ni en chair. Midi sonne, onze Heures passent, la porte s'ouvre, il n'y a personne ; le public se signe, et il applaudit. Voilà trente ans que je joue ce Mystère, et trente ans que la meilleure scène de la pièce est une porte vide. »",
      "Il baisse la voix, ce qui chez lui la ramène au volume d'un sergent. « J'y mettrais bien quelqu'un, une fois. Une seule. Pour voir la figure des évêques. »",
      { after: "j:horloge_florizel", text: "Il te serre sur son pourpoint. « Tu as sauvé le clou ! Tu as tes entrées chez Florizel, à vie, et ta place sur mes tréteaux le jour que tu voudras. Cherche les soleils peints, au pré de la Foire. »" },
    ],
    choices: [{ back: "K07j_troupe" }] },
  K07j_colombe: { act: "II", title: "Colombe", place: "arvoise", ambiance: "champs", fx: { meet: "colombe" },
    text: [
      "Elle a dix-huit ans, les cheveux relevés avec trois épingles, et elle coud en marchant des lèvres : elle repasse un rôle. Elle te regarde venir par-dessus l'aile d'ange, sans cesser de piquer.",
      "« Colombe. Je fais sainte Aure, la première Heure. J'ouvre le jour, je dis quarante vers, et je passe le reste de la pièce derrière la toile à tirer des ficelles. » Elle casse son fil avec ses dents. « Je voulais la Douzième. Je l'ai demandée à maître Florizel le jour de mes seize ans. Il m'a répondu que c'était le plus beau rôle du répertoire, et qu'on ne le distribuait pas. »",
      "Tu demandes ce que dirait la Douzième, si on la jouait. Colombe plante son aiguille dans la malle. « Personne ne le sait. Il n'y a pas de vers. Dans le vieux livre du Mystère, à cet endroit, la page est blanche, et quelqu'un a écrit dans la marge, d'une encre très ancienne : *Elle dira ce qu'il faudra, le jour où il le faudra.* » Elle hausse une épaule. « Les auteurs sont paresseux. »",
    ],
    choices: [{ back: "K07j_troupe" }] },
  K07j_malade: { act: "II", title: "Des ongles gris", place: "arvoise", ambiance: "champs",
    text: [
      "Elle est assise contre la treizième borne, les jambes allongées, les pieds en sang dans ses sabots. Elle a marché toute la nuit. Sur ses genoux dort un garçon de sept ans, long, pâle, la tête renversée dans le creux de son bras.",
      "Elle voit que tu regardes les mains de l'enfant. Elle les couvre des siennes, puis elle y renonce : elle est trop lasse pour avoir honte. Les ongles sont gris. D'un gris de cendre, mat, du bord jusqu'à la lunule.",
      "« C'est venu à la Chandeleur. D'abord il dormait après la soupe. Puis en gardant les oies. À présent, je le réveille pour manger. » Elle dit cela d'une voix unie, comme on récite. « Le médecin de Saint-Gnomon a pris trois écus pour me dire le nom. La langueur grise. Il m'a dit le nom, et il a gardé les écus. Je le porte aux sœurs. Elles ont des tisanes. On dit qu'elles en ont sauvé un, il y a vingt ans. »",
      { if: { has: "monde:su:remede" }, text: "Tu as dans la tête, écrits en bâtons, trois mots qu'aucun médecin de ce royaume ne connaît encore. *Écorce de fièvrier.* Un arbre des îles. Les bateaux qui en rapporteront ne sont pas construits. Tu regardes ces ongles, et tu gardes ta science pour toi : elle ne pèse rien, ici, dans la main d'une mère." },
      "Il reste trois lieues jusqu'à Sainte-Aure. Elle regarde la route comme on regarde une côte.",
    ],
    choices: [
      { label: "Prendre l'enfant sur ton dos, par-dessus la hotte", fx: { flag: "j:porte_colin", ep: ["histoire", 400] }, to: "K07j_malade2" },
      { label: "Lui donner ton pain, et ce que tu as d'eau", fx: { drop: "pain" }, hide: { not: { item: "pain" } }, to: "K07j_vignes" },
      { back: "K07j_vignes" },
    ] },
  K07j_malade2: { act: "II", title: "Colin", place: "arvoise", ambiance: "champs",
    text: [
      "Il ne pèse presque rien. C'est ce qui t'effraie : un garçon de sept ans devrait peser son âge. Tu le cales entre tes épaules et le haut de la hotte, ses bras autour de ton cou ; il ne s'éveille pas. Son souffle te vient dans l'oreille, lent, régulier, un souffle de quelqu'un qui est déjà à moitié ailleurs.",
      "La mère se relève en s'aidant de la borne. Elle s'appelle Mathie ; lui, Colin. Elle marche à côté de toi sans rien dire pendant une demi-lieue, une main sur le pied de son fils, pour s'assurer qu'il est là.",
      "« Il rêve, dit-elle tout à coup. Tout le temps. Quand je le réveille, il me raconte. Il dit qu'il est dans une ville où tout le monde s'est arrêté, et qu'il est le seul à marcher. » Elle a un petit rire sans joie. « Où va-t-il chercher cela. »",
      "Tu ne réponds rien. Tu marches. Colin dort contre ta nuque, et tu sens, par instants, ses doigts gris se serrer sur ton col.",
      { with: "perrine", text: "Perrine a pris le baluchon de la mère sans qu'on le lui demande. Elle marche de l'autre côté, la mâchoire dure, et tu l'entends refaire ses comptes tout bas, pour penser à autre chose." },
    ],
    choices: [{ back: "K07j_vignes" }] },
  K07j_piqueurs: { act: "II", title: "La livrée verte", backName: "les hommes du duc", place: "arvoise", ambiance: "champs",
    text: [
      "Ils sont quatre, à cheval, en vert bouteille galonné d'argent, avec un cor en sautoir : la vénerie de Hautgué. Ils vont d'orme en orme et y clouent un carré de papier, d'un seul coup de maillet, sans descendre de selle.",
      "*Par ordre de Monseigneur Oderic, duc de Hautgué, grand veneur d'Aurime. La forêt des Essarts sera close le jour du Grand Midi, de l'aube à la nuit, pour la chasse de Monseigneur. Défense d'y mener bêtes ni gens.*",
      "Les passants lisent et haussent l'épaule. Ce jour-là, il n'y aura dans la forêt des Essarts que des écureuils : tout le royaume sera sur le pré de la Foire.",
      "Le plus vieux des quatre, un piqueur à favoris gris, s'est arrêté pour boire à sa gourde. Il a l'air d'un homme qui exécute un ordre en se le faisant répéter intérieurement.",
    ],
    choices: [
      { label: "« On chasse donc, chez vous, le jour du Grand Midi ? »", to: "K07j_piqueurs2" },
      { back: "K07j_vignes" },
    ] },
  K07j_piqueurs2: { act: "II", title: "Des relais pour une chasse", place: "arvoise", ambiance: "champs", fx: { flag: "j:sait_chasse" },
    text: [
      "« Chez nous, non. » Il rebouche sa gourde. « Trente ans que je sers la vénerie. On n'a jamais découplé le jour du Grand Midi : c'est le seul de l'année où le gibier a congé, vu que les veneurs sont au balcon avec le reste de la cour. Cette année, Monseigneur y tient. Il veut le cerf des Essarts, et il le veut ce matin-là. »",
      "Il regarde ses camarades, qui clouent plus loin, et baisse le ton. « Ce n'est pas tout. Il a fait ferrer à neuf toute l'écurie. Il a commandé des relais. Des relais, mon petit : six chevaux frais tous les quatre lieues, d'ici à Hautgué. Je n'ai jamais vu de cerf qui coure vingt lieues en ligne droite sur une grande route. »",
      "Il rajuste son cor. « Je dis ce que je vois. Je vois un seigneur qui tient à être très loin de la ville ce jour-là, et à ce que cela se sache sur tous les ormes. Maintenant, tu ne m'as rien demandé, et je n'ai rien répondu. »",
    ],
    choices: [{ back: "K07j_vignes" }] },
  K07j_onzieme: { act: "II", title: "Les Pèlerins de la Onzième", place: "arvoise", ambiance: "champs",
    text: [
      "Ils sont une vingtaine, en sac, pieds nus, la corde au cou, et ils marchent à reculons. C'est leur règle : ils tournent le dos à Méridane par humilité, et ils y arrivent tout de même, en se cognant aux gens.",
      "On les appelle les Pèlerins de la Onzième Heure. Ils enseignent que chacun doit se confesser avant que midi sonne, attendu qu'on ne sait jamais lequel sera le dernier. Leur chef, un grand sec à la barbe en fourche, vend à cet effet des billets de confession imprimés, un sou pièce, où il ne reste qu'à mettre son nom et ses fautes.",
      "« Repentez-vous avant le douzième coup ! Qui sait s'il y aura un treizième ! » Il te met un billet sous le nez. « Un sou. Deux pour les fautes graves : le papier est plus grand. »",
      "Les gens rient, et achètent. Tu regardes ce prophète à un sou, qui marche à reculons vers la seule vérité qu'il ait jamais dite, et qui la dit pour de mauvaises raisons.",
      { with: "perrine", text: "« Concurrence, grogne Perrine. Moi, je vends le temps qu'il fera. Lui, la fin des temps. Il a moins de frais : on ne viendra pas se plaindre. »" },
    ],
    choices: [{ back: "K07j_vignes" }] },
  K07j_perrine_route: { act: "II", title: "La règle, troisième article", place: "arvoise", ambiance: "champs",
    text: [
      "Perrine compte ses pas, par cent, et à chaque cent elle plie un doigt. C'est sa manière de réfléchir. Au sixième doigt, elle parle.",
      { if: { has: "monde:pont_reporte" }, text: "« Hier, tu savais. Pour le pont. Tu ne l'as pas deviné, tu ne l'as pas calculé : tu le savais comme je sais le prix du ruban. Et ils sont tous rentrés chez eux fâchés. Vivants, et fâchés. »" },
      { if: { all: [{ not: { has: "monde:pont_reporte" } }, { not: TOMBE }] }, text: "« Hier, tu savais. Pour le pont. Tu le savais comme je sais le prix du ruban. Il est tombé à l'heure, et il n'y avait personne dessus. On appelle cela un miracle, sur la route. Moi, j'étais à côté du miracle, et je l'ai vu courir. »" },
      { if: TOMBE, text: "« Hier, tu savais. Pour le pont. Tu le savais comme je sais le prix du ruban. Tu as couru toute la matinée, et il est tombé quand même. » Elle marche dix pas. « Je ne te le reproche pas. Je compte seulement que tu étais le seul à courir. »" },
      { after: "j:perrine_dit_vrai", text: "« Tu me l'as dit à Roquebise, et je t'ai cru{e} à moitié. Je te crois des deux moitiés. Alors je demande, une fois, et je ne redemanderai pas : qu'est-ce qu'il y a d'écrit, dans ton cahier gris, pour Méridane ? »" },
      { before: "j:perrine_dit_vrai", text: "« Je ne te demande pas comment. Règle de la maison : on ne me ment pas sur ce qui vient. Je te demande seulement s'il y a autre chose qui vient. Plus loin. Là où l'on va. »" },
    ],
    choices: [
      { label: "« Le jour du Grand Midi, sois hors des murs. Loin. Ne me demande rien de plus. »", fx: { flag: "j:perrine_prevenue", conf: { perrine: 10 } }, to: "K07j_perrine_route2" },
      { label: "« Je te le dirai là-bas. Quand je saurai si cela peut se changer. »", fx: { flag: "j:perrine_attend", conf: { perrine: 5 } }, to: "K07j_perrine_route2" },
      { label: "« Rien. Le pont, c'était tout. »", fx: { flag: "j:perrine_mentie", conf: { perrine: -10 } }, to: "K07j_perrine_route2" },
    ] },
  K07j_perrine_route2: { act: "II", title: "Ce qui vient", place: "arvoise", ambiance: "champs",
    text: [
      { after: "j:perrine_prevenue", text: "Elle s'arrête au milieu de la chaussée. Un fermier la contourne en jurant. « Hors des murs. Le jour de la foire. Le jour où je fais la moitié de mon année. » Elle te regarde, et tu vois le calcul se faire derrière ses yeux noisette : d'un côté quarante écus, de l'autre la figure que tu as. « Bon, dit-elle. Je vendrai la veille. » Elle repart. Au bout de vingt pas : « Et les autres ? Ceux qui seront dedans ? » Tu ne réponds pas. Elle n'insiste pas. Elle a replié tous ses doigts." },
      { after: "j:perrine_attend", text: "« Si cela peut se changer. » Elle répète ces mots lentement. « Hier, cela pouvait. » Elle marche un moment. « Bon. J'attends. Je suis colporteuse : j'ai l'habitude qu'on me paie à la foire. Mais tu me le diras avant, et pas pendant. Troisième article de la règle. Je viens de l'ajouter. »" },
      { after: "j:perrine_mentie", text: "« Rien. » Elle hoche la tête, plusieurs fois, la bouche serrée. « Tu mens mal. C'est une qualité, chez un associé : on sait toujours où il en est. » Elle allonge le pas et te laisse à trois toises derrière, jusqu'au village." },
    ],
    choices: [{ back: "K07j_vignes" }] },
  K07j_line_route: { act: "II", title: "Je suis comment", place: "arvoise", ambiance: "champs",
    text: [
      "Line traîne exprès, pour te parler seule. Elle a sa boîte à ressorts sous le bras et une question qu'elle a tournée depuis la Thiorne.",
      { if: { has: "monde:line_sait" }, text: "« Tu viens de plus tard. Tu me l'as dit dans la grange. Et là-bas, plus tard, tu me connais. » Elle lève le nez. « Je suis comment, quand je suis vieille ? »" },
      { if: { has: "monde:line_sait" }, text: "Tu cherches ce qu'on peut dire. Sèche. Une loupe relevée sur le front. Elle finit les phrases des autres. « J'ai des dents ? » Presque toutes. « J'ai un mari ? » Non. Elle paraît soulagée. « J'ai une horloge à moi ? » Tu réponds qu'elle en a trente, et qu'elles sonnent toutes à la fois, à une seconde près. Line s'arrête de marcher. C'est la première fois que tu la vois sourire avec toutes les dents qui lui manquent." },
      { if: { has: "monde:line_sait" }, text: "« Alors c'est bien, dit-elle. Le reste, me le dis pas. Je veux le trouver. »" },
      { if: { not: { has: "monde:line_sait" } }, text: "« Tu regardes les horloges comme quelqu'un qui en a démonté. Tu regardes les gens comme quelqu'un qui les a déjà vus. » Elle lève le nez. « Et tu me regardes, moi, comme si j'étais quelqu'un d'autre, en plus grand. C'est qui ? »" },
      { if: { not: { has: "monde:line_sait" } }, text: "Tu réponds qu'elle te rappelle une personne qui t'a appris ton métier. « Elle est gentille ? » Non. « Elle est forte ? » Très. Line considère cela. « Alors ça va. Gentille, je sais pas faire. »" },
    ],
    choices: [{ back: "K07j_vignes" }] },

  // ------------------------------------------------------------ Saint-Gnomon-des-Vignes
  K07j_village: { act: "II", title: "Saint-Gnomon-des-Vignes", backName: "la place de Saint-Gnomon", place: "arvoise", ambiance: "village", hub: true,
    text: [
      { first: true, text: "Un village de vignerons, à cheval sur la chaussée : vingt maisons à escalier dehors, des caves qui bâillent au ras du sol, une église trapue dont le clocher porte un cadran neuf, peint en bleu, avec des chiffres d'or." },
      { first: true, text: "Tout le village est sur la place, le nez en l'air. Le cadran marque dix heures. Le soleil, sur le mur d'en face, en marque onze. Il y a là-haut, sous l'abat-son, quelqu'un qui cogne." },
      { again: true, text: "La place de Saint-Gnomon, ses caves, son clocher au cadran bleu." },
    ],
    choices: [
      { label: "Monter au clocher", to: "K07j_clocher", hide: { seen: "K07j_reglage_fin" } },
      { label: "Le jeune homme aux besicles, redescendu sur la place", to: "K07j_josquin_guilde", hide: { any: [{ not: { seen: "K07j_reglage_fin" } }, { seen: "K07j_josquin_guilde" }] } },
      { label: "Le cabaret de la Grappe", to: "K07j_grappe" },
      { back: "K07j_vignes" },
    ] },
  K07j_clocher: { act: "II", title: "Midi n'ose plus venir", place: "arvoise", ambiance: "village",
    text: [
      "Soixante marches, une échelle, une trappe. Dans la chambre de l'horloge, un garçon de seize ans est couché sur le dos sous un mouvement de fer gros comme un pétrin, une lanterne entre les dents. Il porte la livrée de la Guilde, grise à collet rouge, et une paire de besicles qu'il remonte du poignet, parce qu'il a de l'huile plein les doigts.",
      "« Pardon, dit-il sans te voir. Ce n'est pas ouvert au public. Pardon. Si vous venez de la part du curé, dites-lui que midi viendra, que je suis navré, et que la faute en est au cheville de l'ancre, qui a pris du jeu. »",
      "Tu regardes par-dessus son épaule. Le mouvement est une belle chose rude, d'il y a cent ans. L'ancre a du jeu, en effet ; mais ce n'est pas la cheville. C'est le pont qui la porte, dont une vis a foiré, de sorte que tout l'échappement danse.",
      "Il lui faudrait trois mains. Il en a deux, et une lanterne dans la bouche.",
    ],
    choices: [
      { label: "« Ce n'est pas la cheville. C'est la vis du pont. Tenez-moi la lanterne. »", test: { dom: "savoir", diff: 5, label: "Horlogerie", help: [{ if: { voie: "rouage" }, v: 15 }, { if: { item: "trousse" }, v: 10 }] },
        win: { fx: { flag: "j:josquin_estime", regard: { josquin: "admiratif" }, ep: ["seance", 600] }, to: "K07j_reglage_fin" }, lose: { fx: { regard: { josquin: "cordial" } }, to: "K07j_reglage_fin" } },
      { label: "Lui tenir la lanterne, sans rien dire", fx: { regard: { josquin: "cordial" } }, to: "K07j_reglage_fin" },
    ] },
  K07j_reglage_fin: { act: "II", title: "Josquin", place: "arvoise", ambiance: "village",
    text: [
      { outcome: "win", text: "Il ôte la lanterne de sa bouche pour protester, regarde la vis, et se tait. Vous y passez le temps d'un Pater : lui tient le pont, toi tu retailles le pas avec la pointe de ta lime et tu remets la vis au fil. L'ancre se pose. Le balancier, relancé du doigt, reprend son pas de sergent." },
      { outcome: "win", text: "« La vis du pont, répète-t-il. Je l'ai regardée trois fois. » Il essuie ses besicles, longtemps, ce qui est sa façon de rougir. « Pardon. Je me suis trompé, et vous non. Vous êtes de la Guilde ? Non. On vous connaîtrait. »" },
      { outcome: "lose", text: "Tu avances la main vers la vis. Elle foire davantage. Il ôte la lanterne de sa bouche. « Pardon. Si vous permettez. » Il glisse sous le pont une cale de laiton qu'il avait dans sa poche, taillée d'avance, et l'ancre se pose. « C'était la vis, vous aviez raison. Je cherchais la cheville parce que c'est toujours la cheville. Merci de l'avoir dit. »" },
      "Il tire de son gilet une montre épaisse, scellée d'un plomb, lit l'heure, et pousse les aiguilles du clocher. En bas, la place fait *ah*.",
      "« Josquin. Apprenti de maître Coudrier, à la Guilde. Je porte l'heure de Méridane à Sainte-Aure, et je la donne en passant aux paroisses qui la demandent. » Il range la montre avec un soin de sacristain. « On ne me la demande pas souvent. Les gens aiment mieux leur heure à eux : elle retarde, et cela leur fait du temps. »",
    ],
    choices: [{ back: "K07j_village" }] },
  K07j_josquin_guilde: { act: "II", title: "Ce qui se dit à la Guilde", place: "arvoise", ambiance: "village",
    text: [
      "Josquin marche comme il parle, en s'excusant auprès des cailloux. Il va à Sainte-Aure, lui aussi : son maître l'y envoie lire un livre.",
      "« Le Livre du Balancier. Il n'en existe qu'un, et il est chez les sœurs depuis la fondation, parce que les Fondateurs ont jugé qu'il serait plus en sûreté entre des mains qui ne savent pas limer. Je dois copier un chapitre, celui de l'Interdit, et le rapporter avant le vote. »",
      "Tu demandes quel vote. Il remonte ses besicles. « Pardon. Je ne devrais pas. La veille du Grand Midi, les sept Jurés votent sur une proposition du sous-maître, que le Palais appuie. Mon maître est contre. Il est seul contre, à ce jour. Il dit que le sous-maître Aubespin est le meilleur horloger que la Guilde ait eu en cent ans, et que c'est bien là le malheur. »",
      { after: "j:aubespin_connait", text: "Tu dis que tu as rencontré le sous-maître, il y a deux nuits, à Roquebise, devant une cuve de verre. Josquin s'arrête net. « À Roquebise ? » Ses doigts tachés d'huile cherchent ses besicles. « Il a dit au Conseil qu'il allait à Hautgué, voir sa mère malade. Mon maître lui a même fait porter des pâtes de fruits. »" },
      { if: { item: "lettre_baudri" }, text: "Tu as dans ta veste un billet de maître Baudri pour le Grand Maître Coudrier. Tu le lui dis. Le visage de Josquin s'éclaire : on a nommé son maître. « Vous le lui remettrez vous-même. Demandez-moi à la porte de la colline des Jurés ; je vous ferai monter. Il reçoit mal, mais il reçoit. »" },
    ],
    choices: [{ back: "K07j_village" }] },
  K07j_grappe: { act: "II", title: "Le cabaret de la Grappe", backName: "la Grappe", place: "arvoise", ambiance: "village", taverne: true,
    text: [
      { first: true, text: "Une salle voûtée, à demi enterrée, fraîche comme un puits. On y boit le vin de l'année passée dans des écuelles, parce que le vigneron de Saint-Gnomon tient les verres pour une invention de gens qui ont quelque chose à cacher. Trois rouliers y déjeunent, et un courrier en bottes, la sacoche du Palais sur les genoux, qui mange debout." },
      { again: true, text: "La voûte de la Grappe, les écuelles, l'odeur de futaille." },
    ],
    choices: [
      { label: "Écouter le courrier du Palais, qui parle la bouche pleine", to: "K07j_grappe_rumeurs", hide: { seen: "K07j_grappe_rumeurs" } },
      { label: "Une soupe, du pain, une écuelle de vin coupé", if: { gold: { min: 1 } }, why: "Il te faudrait un écu.", hide: { has: "j:grappe_mange" }, fx: { gold: -1, pv: 4, flag: "j:grappe_mange" }, back: "K07j_grappe" },
      { back: "K07j_village" },
    ] },
  K07j_grappe_rumeurs: { act: "II", title: "Ce qu'on ne voit plus au balcon", place: "arvoise", ambiance: "village", fx: { flag: "j:sait_aelis_cachee" },
    text: [
      "Le courrier a quitté Méridane à minuit, et il en est fier. Il le dit à qui veut, entre deux bouchées, avec le ton des gens qui touchent aux secrets par la sangle de leur sacoche.",
      "« Les chambres ? Trois écus la nuit, pour un grenier. Quarante mille personnes, mes amis, et il en arrive. La Reine paraîtra au balcon de la Tour à midi, comme tous les ans. » Il boit. « Seule, à ce qu'on dit. »",
      "Un roulier demande pourquoi seule. Le courrier regarde autour de lui, ce qui attire l'attention de toute la salle. « Madame Aélis. La petite princesse. Voilà un grand mois qu'on ne l'a vue ni à la messe ni au jardin. On a changé trois fois de médecin. On a fait venir des chandelles par charretées, parce que la Reine veille. Et j'ai porté, moi qui vous parle, six lettres en dix jours à toutes les abbayes de la route, qui demandent la même chose : leurs simples, leurs recettes, tout ce qu'elles savent d'un certain mal. »",
      "Il tapote sa sacoche. « La septième est pour Sainte-Aure. Je ne dis pas quel mal. Je dis seulement que le sceau est noir. »",
    ],
    choices: [{ back: "K07j_grappe" }] },

  // ------------------------------------------------------------ the twelfth stone and the abbey
  K07j_xii: { act: "II", title: "La douzième lieue", place: "abbaye", ambiance: "champs",
    text: [
      "À la douzième borne, la chaussée passe un col entre deux coteaux, et le pays s'ouvre d'un coup vers le levant. C'est une grande plaine dorée, rayée de canaux, semée de clochers, avec la Thiorne qui revient par le sud en faisant briller ses boucles.",
      "Tout au bout, il y a une chose droite, mince, pâle, plantée dans l'horizon comme une épingle dans une carte.",
      "Tu ne l'avais jamais vue. De ton côté du temps, aux Trois-Noyers, on ne voit que des prés. Tu en connais une gravure, clouée au mur de l'atelier, que Line n'aimait pas qu'on regarde. La Tour des Heures. À douze lieues, elle a la taille d'une aiguille de montre ; et quand le soleil prend son cadran, elle te fait un petit éclat blanc, régulier, patient, comme un signe.",
      { with: "perrine", text: "« On la voit trois jours avant d'y être, dit Perrine. C'est fait exprès. Les Fondateurs voulaient qu'on règle son pas dessus. Moi, je trouve surtout qu'elle regarde. »" },
      { if: LINE, text: "Line s'est arrêtée au milieu de la route, sa boîte contre le ventre. Elle ne dit rien. Elle a la bouche entrouverte et le regard fixe, et tu comprends que tu assistes à quelque chose : c'est la première fois qu'elle la voit, elle aussi. Elle y pensera soixante ans." },
      "Dans cinq jours, tu seras au pied. Tu ajustes les bretelles de la hotte, et tu descends.",
    ],
    choices: [{ label: "Descendre vers le vallon de Sainte-Aure", to: "K07j_vallon" }] },
  K07j_vallon: { act: "II", title: "Le vallon des Heures", place: "abbaye", ambiance: "temple",
    text: [
      "Tu l'entends avant de la voir, comme le frère quêteur l'avait promis. Cela monte d'un pli de terrain, à main gauche, entre des tilleuls : des voix de femmes, à l'unisson, sur trois notes qui montent et une qui redescend. C'est grave, égal, sans une respiration. On cherche l'endroit où elles reprennent haleine, et l'on ne le trouve pas : quand une voix cesse, une autre l'a déjà relevée.",
      "L'abbaye est au fond du vallon, blanche, basse, serrée autour de son église comme un village autour d'un puits. Elle a douze petites chapelles en couronne, un clocher sans horloge, des jardins tirés au cordeau, et tout autour un mur où pas une pierre ne dépasse.",
      "Un clocher sans horloge. Tu le regardes deux fois. À quatorze lieues à la ronde, c'est la seule tour que tu aies vue qui ne donne pas l'heure. Ces femmes-là n'en ont pas besoin : elles la chantent.",
      { after: "j:porte_colin", text: "Sur ton dos, Colin a remué. Il a dit un mot dans son sommeil, qui ressemblait à *tout le monde*. Sa mère a pressé le pas." },
    ],
    choices: [{ label: "Suivre l'allée des tilleuls jusqu'à la porte", to: "K07j_porte" }] },
  K07j_porte: { act: "II", title: "La porte de Sainte-Aure", backName: "la porte de l'abbaye", place: "abbaye", ambiance: "temple",
    text: [
      { first: true, text: "La porte est de chêne clouté, avec un guichet à hauteur de bouche. Derrière le guichet, il y a une sœur tourière, et derrière la sœur tourière, quatre cents ans de méfiance bien tenue." },
      { first: true, text: "« Combien de personnes, combien de bêtes, et pour combien de nuits ? » Elle a une voix de crécelle et un œil rond, noir, qui fait le tour de vous en un instant. « La Perrine. Encore. Tu me dois une image de sainte Aure depuis la Saint-Jean dernière, celle que tu m'as vendue avait le sablier à l'envers. » Elle te regarde. « Et celui-là ? Ça porte une hotte, ça ne sait pas la porter, et ça regarde mon clocher comme s'il y manquait quelque chose. »" },
      { first: true, text: "On loge à l'hôtellerie, hors la clôture : un corps de logis à gauche de la porte, avec sa cour et son puits. Les repas se prennent au tour. On n'entre au cloître que sur la parole de Madame l'abbesse. « Et l'on ne chante pas, précise la tourière. Ici, c'est nous qui chantons. »" },
      { first: true, after: "j:porte_colin", text: "Elle voit l'enfant sur ton dos. Elle voit les mains. Le guichet claque ; on entend des verrous, des sabots qui courent, et la grande porte s'ouvre de deux doigts. « À l'infirmerie, tout de suite. La mère avec. Sœur Radegonde ! » Mathie te reprend son fils sans un mot. À la porte, elle se retourne, et elle incline la tête, une fois, comme on signe." },
      { again: true, text: "La porte cloutée, le guichet, l'œil rond de la tourière. À gauche, la cour de l'hôtellerie." },
    ],
    choices: [
      { label: "La cour de l'hôtellerie", to: "K07j_carrosse", hide: { seen: "K07j_carrosse" } },
      { label: "Midi va sonner : la borne est à vingt pas, sous les tilleuls", to: "K07j_midi", big: true },
    ] },
  K07j_carrosse: { act: "II", title: "Une tour à cadran, rouge sur noir", place: "abbaye", ambiance: "temple", fx: { flag: "j:vu_carrosse_abbaye" },
    text: [
      "Dans la cour, entre le puits et l'écurie, une voiture est dételée. Elle est noire, haute, crottée jusqu'aux lanternes. Sur la portière, un écusson : une tour à cadran, rouge.",
      "Tu la connais. Tu l'as vue traverser une noce au pas, la nuit, à Roquebise.",
      "Un homme long, en houppelande, graisse un moyeu avec la lenteur de quelqu'un qui a le temps jusqu'au soir. Il n'y a personne dans la voiture : les rideaux sont ouverts, les coussins vides.",
      { after: "j:pris_cocher", text: "Il lève la tête. Il te reconnaît à l'instant ; c'est un homme qui n'oublie pas ce qu'il a tenu par le col. « Tiens donc, dit-il sans élever la voix. Le fagot. Tu fais du chemin, pour un portefaix. » Il s'essuie les doigts à un chiffon, un par un. « Je suis en commission auprès de Madame l'abbesse. Elle me doit une réponse avant la nuit. Reste donc hors de mes jambes d'ici là. »" },
      { before: "j:pris_cocher", text: "Il lève la tête, te regarde sans te remettre, et retourne à son moyeu. Un valet d'écurie te renseigne, à mi-voix : c'est le cocher d'un monsieur de la Guilde, venu seul de Méridane ce matin, avec une lettre pour Madame l'abbesse. Il attend la réponse. Il a dit qu'il repartirait avant la nuit, avec ce qu'on lui remettrait." },
    ],
    choices: [{ back: "K07j_porte" }] },
  K07j_midi: { act: "II", title: "La borne de Sainte-Aure", place: "abbaye", ambiance: "temple",
    text: [
      "La borne de la neuvième lieue est sous les tilleuls, à l'entrée de l'allée. On l'a taillée, il y a très longtemps, à l'image de la sainte : une petite femme de pierre, usée, un sablier dans une main, une lampe dans l'autre, avec le cadran sur la poitrine, à la place du cœur.",
      "Les voix, derrière le mur, changent d'Heure. Tu l'entends au moment où cela se fait : une note tenue, deux chœurs un instant ensemble, puis le nouveau seul. C'est midi. Aucune cloche ne le dit.",
      "Tu t'assois dans l'herbe, contre la sainte, et tu ouvres le Cahier.",
    ],
    choices: [{ label: "Lire", to: "M07", big: true }] },
});

module.exports = {
  passages: P,
  extras: {
    people: {
      florizel: { name: "Maître Florizel", f: false, aka: ["Florizel", "maître Florizel"], face: { age: "mur", skin: "clair", hair: "chatain", coif: "boucles", beard: "moustache", eyes: "ronds", iris: "bleu", nose: "large", lips: "pleines", shape: "rond" },
        aspect: { allure: "un gros homme en pourpoint cerise", voix: "une voix à remplir un pré", signe: "parle de lui comme d'une troupe entière" }, qui: "Le directeur de la troupe du Sablier.", desc: "Directeur, auteur et premier rôle de la troupe du Sablier, qui joue le Mystère des Heures à la foire du Grand Midi." },
      colombe: { name: "Colombe", f: true, aka: ["Colombe"], face: { age: "jeune", skin: "clair", hair: "blond", coif: "chignon", eyes: "amande", iris: "vert", nose: "fin", lips: "pleines", shape: "ovale" },
        aspect: { allure: "dix-huit ans, trois épingles dans les cheveux", signe: "repasse un rôle en remuant les lèvres" }, qui: "Une comédienne de la troupe du Sablier.", desc: "Elle joue sainte Aure, la première Heure. Elle aurait voulu la Douzième." },
    },
  },
};
