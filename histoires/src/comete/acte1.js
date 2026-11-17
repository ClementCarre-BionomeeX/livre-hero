// Act I · « La montée » : from the foot of Mont Escalle to the door of the Veille, at dusk. Both readings pass here;
// the paragraphs and choices tagged `second: true` belong to the second one (the reader has been here before).
module.exports = {
  A_pied: { act: "I", title: "Le pied du mont Escalle", place: "pied",
    text: [
      "La route de Salvagnes s'arrête ici, au dernier abreuvoir, comme une phrase qui n'a plus rien à dire. Après lui commence le chemin muletier : deux ornières de pierre usée qui montent sous les mélèzes, tournent, reviennent sur elles-mêmes et disparaissent dans la pente.",
      "Le mont Escalle remplit tout le ciel du nord. À cette heure, sa face est violette, ses crêtes encore dorées, et tout en haut, sur la dernière dent de rocher, une tour ronde accroche le soleil couchant comme un clou accroche un chiffon : la Veille. Il te faut trois heures pour y monter, à bon pas.",
      "Tu touches le pli dans ta veste. Il est là, épais, raide, cacheté de cire noire sans armoiries. Sur l'enveloppe, d'une écriture penchée, une consigne que tu as relue dix fois en marchant : *À ouvrir quand la Glaneuse touchera la Lyre.* Le Recteur te l'a remis avec quatre sous pour la soupe, et l'air pénétré d'un homme qui confie un secret dont il ignore le contenu ; c'est l'air que prennent les recteurs pour presque tout.",
      "À l'est, très bas, le ciel est encore vide. La Glaneuse sortira de derrière la montagne vers neuf heures, disent les almanachs. Les almanachs disent aussi qu'il gèlera, et pour une fois tu les crois.",
    ],
    choices: [
      { label: "Monter sous les mélèzes", to: "A_meleze" },
    ] },

  A_meleze: { act: "I", title: "Sous les mélèzes", place: "pied",
    text: [
      "Les mélèzes ont perdu leurs aiguilles ; elles couvrent le chemin d'un tapis roux qui étouffe le pas. Entre les troncs, la lumière baisse par paliers, comme on baisse une mèche. À chaque lacet, la vallée s'éloigne d'un cran : les toits roses de Salvagnes, la Sorre en ruban d'étain, les clochers, et ce grand silence des hauteurs qui commence toujours par un oiseau qui se tait.",
      "Au troisième lacet, quelqu'un descend vers toi. Une femme courte et carrée, noire de la tête aux pieds, un sac de charbon de bois sur l'épaule et un bâton de houx à la main. Elle s'arrête en te voyant, pose le sac, et te dévisage avec l'intérêt qu'on porte à un mouton égaré.",
    ],
    choices: [
      { label: "Saluer la charbonnière", to: "A_charbonniere" },
      { label: "La saluer d'un signe et continuer", to: "A_borne" },
    ] },

  A_charbonniere: { act: "I", title: "La charbonnière", place: "pied",
    fx: { meet: [] },
    text: [
      "« Tu montes ? » Elle crache de côté, proprement. « Tout le monde monte, cette semaine. Une dame en litière ce midi, avec un capitaine qui a une figure à faire tourner le lait. Le frère de l'ermitage, deux fois. Et toi. » Elle te regarde des pieds à la tête. « Toi, au moins, tu marches. »",
      "Tu lui dis que tu portes un pli à la Veille.",
      "« Au vieux ? » Elle hoche la tête. « Il ne descend plus. Ça fait dix ans qu'il ne descend plus. Il dit que d'en bas, le ciel est sale. » Elle reprend son sac. « Au marché, le chanoine dit que la comète vient faucher un grand. Il le dit si souvent qu'on finirait par croire qu'il a reçu la liste. »",
      { second: true, text: "Elle s'est déjà remise en route quand elle ajoute, par-dessus son épaule : « Le frère, ce midi, il coupait sa haie, là-haut. Avec des gants. En décembre. Les gens d'Église ont de ces délicatesses. »" },
      "Elle descend sans se retourner. Son bâton sonne sur les pierres, de plus en plus bas, et le bruit finit par se mêler à celui d'un ruisseau que tu ne vois pas.",
    ],
    choices: [
      { label: "La rattraper pour lui demander ce que dit le Chapitre", hide: { seen: "A_charb_sermon" }, to: "A_charb_sermon" },
      { label: "Continuer vers le col", to: "A_borne" },
    ] },

  A_borne: { act: "I", title: "La borne du col", place: "col", puzzle: "p_borne",
    text: [
      { first: true, text: "Le chemin sort des arbres sur un premier col, une selle d'herbe rase où le vent se lève d'un coup, comme s'il t'attendait. Au milieu se dresse une pierre levée, plus haute que toi, rongée de lichen orange. Le chemin muletier la contourne par la droite et repart en larges lacets vers l'est, où l'on devine, à mi-pente, la fumée d'une cheminée : le refuge du Pas-de-l'Ours. À gauche de la pierre, une sente de chèvres file droit dans les rochers." },
      { again: true, text: "La pierre levée, le vent, le lichen orange. Le chemin muletier à droite, la sente des chèvres à gauche." },
      "La pierre porte une inscription. Le soleil couchant la prend de biais, et chaque lettre a son ombre.",
      { second: true, first: true, text: "Tu reconnais la pierre comme on reconnaît une personne : avant de savoir pourquoi. Le vent se lève exactement au même pas que la première fois." },
    ],
    choices: [
      { label: "Prendre le chemin muletier vers le refuge", to: "A_lacets" },
      { label: "Ajouter ta pierre au cairn des voyageurs", hide: { seen: "A_cairn" }, to: "A_cairn" },
    ] },

  A_sentier: { act: "I", title: "La sente des chèvres", place: "col",
    text: [
      "La sente monte droit, sans se soucier des mulets ni des genoux. Elle passe entre deux rochers, longe une vire où le vide commence à un pas de ta botte gauche, et repart dans un pierrier qui roule sous le pied. Les chèvres de quelqu'un ont laissé partout leurs crottes rondes et leur mépris de la géométrie.",
      "Le jour s'en va pendant que tu grimpes. Le pierrier devient gris, puis bleu. La vire, plus haut, n'est plus qu'une ligne claire au flanc noir de la montagne.",
    ],
    choices: [
      { label: "Passer la vire sans t'arrêter", test: { dom: "nature", diff: 0, label: "Nature" }, win: { to: "A_sentier_haut" }, lose: { to: "A_sentier_chute" } },
      { label: "Revenir au chemin muletier, finalement", to: "A_lacets" },
    ] },

  A_sentier_chute: { act: "I", title: "Le pierrier", place: "col",
    fx: { pv: -1 },
    text: [
      "Une pierre plate bascule sous ton pied, et le pierrier entier se met à couler vers le bas avec un bruit de vaisselle qu'on vide. Tu glisses sur le dos, sur trois longueurs d'homme, les mains en arrière, jusqu'à ce qu'un genévrier t'arrête par la manche avec la fermeté d'un sergent.",
      "Rien de cassé. Une paume écorchée, un coude qui chante, et la sente à reprendre plus bas, par le détour du refuge. Le pli est toujours dans ta veste. Tu vérifies deux fois.",
    ],
    choices: [
      { label: "Descendre vers le refuge par le bas", to: "A_refuge" },
    ] },

  A_sentier_haut: { act: "I", title: "Au-dessus de la vire", place: "ermitage",
    text: [
      "La vire passe. Derrière elle, la sente débouche sur un replat abrité, au pied d'un grand rocher en surplomb, et le vent tombe d'un coup, comme une porte qu'on referme.",
      "Sous le rocher, il y a une chapelle de pierre sèche, une cellule à toit de lauzes, six ruches couvertes de paille pour l'hiver et un potager entouré d'une haie épaisse. C'est l'ermitage des Veilleurs. Une seule fenêtre est éclairée. Plus haut, sur la dernière dent du mont, la Veille a perdu son soleil ; elle n'est plus qu'une silhouette noire et ronde, avec une lueur au sommet.",
      "Tu as gagné une heure sur le chemin des mulets. Le refuge est plus bas, à l'est, sur la droite : une fumée et une lanterne.",
    ],
    choices: [
      { label: "Approcher de l'ermitage", to: "A_ermitage" },
      { label: "Descendre d'abord au refuge, voir la lanterne", to: "A_refuge" },
      { label: "Te glisser le long de la haie sans te montrer", second: true, to: "S_haie_soir" },
    ] },

  A_lacets: { act: "I", title: "Les lacets", place: "col",
    text: [
      "Le chemin muletier prend son temps. Il monte en lacets si larges qu'à chaque tournant tu revois la borne du col sous un autre angle, plus petite, comme une pensée qui s'éloigne. Les ornières sont pleines de glace en aiguilles qui craque sous la semelle.",
      "Derrière toi, des sabots, des voix, et un grincement de bois : une litière monte, portée par deux mulets en flèche, avec un cavalier devant. Le chemin est étroit. Le cavalier ne ralentit pas.",
    ],
    choices: [
      { label: "Te ranger contre le talus et les laisser passer", to: "A_litiere" },
      { label: "Rester au milieu du chemin", to: "A_litiere_tete" },
    ] },

  A_litiere_tete: { act: "I", title: "Le cavalier", place: "col",
    fx: { meet: ["ferrand"], flag: "ferrand:tete" },
    text: [
      "Le cavalier arrête son cheval à deux pas de toi, si près que tu sens l'haleine chaude de la bête sur ta figure. C'est un homme large, en manteau gris, une cuirasse dessous. Une balafre lui coupe la joue de l'oreille au menton, et la moustache grise la recoud mal.",
      "Il ne dit rien. Il te regarde, puis il regarde le talus, puis toi de nouveau, et dans ce silence il y a toute une phrase militaire dont tu comprends chaque mot.",
      "La portière de la litière s'ouvre. « Ferrand, dit une voix de femme, lasse et parfaitement articulée. Si cette personne a l'intention de mourir sous nos mulets, demandez-lui au moins de le faire vite. Il gèle. »",
    ],
    choices: [
      { label: "Te ranger, avec dignité", to: "A_litiere" },
    ] },

  A_litiere: { act: "I", title: "La litière", place: "col",
    fx: { meet: ["helis", "ferrand"] },
    text: [
      "La litière passe à ta hauteur, une caisse de bois peint aux rideaux prune, et la portière reste ouverte. Une femme y est assise, droite, les mains gantées sur un coffret de cuir. Elle a la quarantaine, le teint mat, les cheveux noirs serrés sous un voile de voyage, et ce regard de cour qui fait l'inventaire d'une personne en une seconde et oublie aussitôt le total.",
      "« Vous montez à la Veille, dit-elle. Vous avez l'air de quelqu'un qui monte à la Veille : mal vêtu pour le froid et parfaitement content de l'être. »",
      { if: { has: "ferrand:tete" }, text: "Le cavalier balafré, devant, a repris sa marche. Il ne se retourne pas. Ses épaules, elles, se souviennent de toi." },
    ],
    choices: [
      { label: "« Je porte un pli au Maître Vellérin. »", to: "A_helis1" },
      { label: "Demander au cavalier s'il connaît la montagne", to: "A_ferrand1" },
      { label: "Saluer et les laisser filer devant", to: "A_mule" },
    ] },

  A_helis1: { act: "I", title: "Dame Hélis", place: "col",
    text: [
      "« Un pli. » Elle répète le mot comme on goûte un vin. « De qui ? Non, ne dites rien, vous allez me répondre *du Collège*, et je saurai seulement que le Collège écrit encore. » Elle a un petit sourire sans gaieté. « Je suis Hélis Vantre. Je viens de la part du Prince. Le Prince voudrait voir la comète, et il a dix-neuf ans, si bien qu'il m'envoie la voir à sa place. »",
      "Les mulets avancent. Tu marches à côté de la portière. Elle parle sans te regarder, en suivant des yeux la crête.",
      "« Votre Maître Vellérin a passé cinquante ans à calculer cette comète. On dit qu'il sait l'heure où elle touchera la Lyre à la minute près. On dit aussi que le Chapitre de Salvagnes aimerait beaucoup qu'il se trompe. Les chanoines ont promis au peuple un présage, et un présage qu'on peut prévoir avec une règle et un crayon, c'est une marchandise invendable. »",
      "Elle referme la portière à moitié. « Si vous voyez le capitaine Ferrand vous regarder de travers, ne vous en faites pas. Il regarde tout le monde de travers. Il m'a regardée de travers à mon propre mariage. »",
    ],
    choices: [
      { label: "Laisser la litière prendre de l'avance", to: "A_mule" },
    ] },

  A_ferrand1: { act: "I", title: "Le capitaine Ferrand", place: "col",
    text: [
      "Tu allonges le pas jusqu'à la tête du cheval. Le cavalier balafré te laisse venir sans tourner la tête.",
      "« Ferrand, dit-il, quand tu lui demandes son nom. Capitaine. » Un temps. « La montagne, je la connais par les cartes. Les cartes ne glissent pas. »",
      "Tu lui demandes ce qu'une envoyée du Prince vient faire à la Veille. Il réfléchit si longtemps que tu crois la question perdue dans le froid.",
      "« Acheter quelque chose, dit-il enfin. Avant que d'autres ne le brûlent. » Il te regarde, cette fois, et ses yeux sont plus jeunes que sa figure. « J'ai fait trois guerres. Dans les trois, il y avait un prêtre pour dire que Dieu était de notre côté. Et dans les trois, il y avait un prêtre en face pour dire la même chose. Je n'aime pas qu'on fasse parler le ciel. »",
    ],
    choices: [
      { label: "Le laisser à ses cartes et monter au refuge", to: "A_mule" },
    ] },

  A_refuge: { act: "I", title: "Le Pas-de-l'Ours", place: "refuge", hub: true,
    fx: { meet: ["baptistin"] },
    text: [
      { first: true, text: "Le refuge du Pas-de-l'Ours est une maison basse en pierre sèche, plantée de travers sur un replat, avec une écurie collée à son flanc et une cheminée qui fume comme un vieux soldat. Dans l'unique salle, il fait chaud à suer. Une soupière fume sur la table, une mule passe la tête par la porte de l'écurie, et un gros homme aux joues rouges, coiffé d'un bonnet de laine, t'accueille les bras ouverts, la louche à la main." },
      { first: true, text: "« Un porteur ! dit-il, en jetant un œil à l'insigne de ta veste. Baptistin Roul, gardien du Pas, muletier, cuisinier, et le plus grand esprit de la montagne, faute de concurrence. La soupe est à deux sous. Ou à une devinette. Je préfère la devinette : les sous, j'en ai déjà vu. »" },
      { first: true, second: true, text: "Il te regarde un instant de plus que nécessaire, la louche en l'air. « Tiens. On s'est déjà vus, nous deux ? Non. Je me souviendrais d'une figure aussi ahurie. »" },
      { again: true, text: "La salle chaude, la soupière, la mule qui passe la tête par la porte de l'écurie. Baptistin essuie un gobelet avec un torchon qui l'a déjà essuyé mille fois." },
      { first: true, if: { has: "mule:aidee" }, text: "Jeannot entre derrière toi en criant à tue-tête l'histoire de la mule, qu'il embellit déjà. Baptistin t'examine de haut en bas, ce qui prend du temps, et pose devant toi un gobelet de vin chaud. « Celui-là, c'est la maison. La soupe, c'est autre chose. »" },
      { if: { seen: "A_litiere" }, text: "Dans l'écurie, on entend les mulets de la litière qu'on dessangle, et une voix de femme qui donne des ordres à quelqu'un qui ne répond pas." },
    ],
    choices: [
      { label: "Écouter la devinette de Baptistin", hide: { has: "enigme:p_baptistin" }, to: "A_devinette" },
      { label: "Demander à Baptistin une devinette plus difficile", second: true, if: "enigme:p_baptistin", hide: { has: "enigme:p_baptistin2" }, to: "S_devinette2" },
      { label: "Payer la soupe en sous", hide: { any: [{ has: "enigme:p_baptistin" }, { has: "soupe:payee" }] }, fx: { gold: -2, flag: "soupe:payee" }, to: "A_soupe" },
      { label: "Demander à Baptistin qui vit là-haut", hide: { seen: "A_baptistin_veille" }, to: "A_baptistin_veille" },
      { label: "Aller voir dans l'écurie", if: { seen: "A_litiere" }, hide: { seen: "A_ecurie" }, to: "A_ecurie" },
      { label: "T'asseoir sur le vieux banc près du feu", hide: { seen: "A_banc" }, to: "A_banc" },
      { label: "Continuer vers l'ermitage", to: "A_ermitage" },
    ] },

  A_devinette: { act: "I", title: "La devinette", place: "refuge", puzzle: "p_baptistin",
    text: [
      "Baptistin t'installe au bout du banc, devant une écuelle, et s'assoit en face avec la mine d'un juge.",
    ],
    choices: [
      { back: "A_refuge" },
    ] },

  A_legende: { act: "I", title: "La légende du miroir", place: "refuge",
    fx: { clue: "i_legende" },
    text: [
      "« L'aiguille ! » Baptistin abat sa paume sur la table, ravi d'avoir perdu. « Personne ne trouve. Le dernier qui a trouvé, c'était un chanoine, et il a voulu que je lui rende sa soupe en messes. » Il te remplit l'écuelle jusqu'au bord, puis il décroche une lanterne de fer à volet et la pose devant toi. « Pour là-haut. Tu me la rapporteras demain. »",
      "Il s'accoude. La soupe est épaisse, aux fèves et au lard, et pendant que tu manges, il parle, parce qu'un homme seul l'hiver sur une montagne garde toute sa conversation pour le premier qui passe.",
      "« Tu sais ce qu'on dit, en bas, de cette comète ? Le chanoine dit qu'elle vient faucher un grand. Ma grand-mère, elle, disait autre chose. » Il baisse la voix, par goût du spectacle. « Qui voit la Glaneuse dans le grand miroir de la Veille vit sa nuit deux fois. C'est ce qu'elle disait. Elle croyait aussi que les chats volent le souffle des bébés, et elle a eu onze enfants qui respirent tous très bien. »",
      "Il se lève pour remettre une bûche. « La dernière fois qu'elle est passée, la Glaneuse, ma grand-mère avait ton âge. Le maître de la Veille de ce temps-là est mort cette nuit-là, devant sa lunette. Le cœur, on a dit. Et on a retrouvé le petit porteur du Collège, au matin, assis par terre devant le miroir, qui pleurait sans pouvoir s'arrêter. » Baptistin hausse les épaules. « Les gens d'en haut, ça a toujours eu le cœur fragile et les nerfs en dentelle. »",
    ],
    choices: [
      { back: "A_refuge" },
    ] },

  A_soupe: { act: "I", title: "La soupe à deux sous", place: "refuge",
    text: [
      "Baptistin empoche tes deux sous avec la tristesse d'un homme à qui l'on paie une dette d'honneur en monnaie. La soupe est aux fèves et au lard, épaisse à tenir la cuillère debout.",
      "« L'argent, dit-il, c'est la devinette des gens qui n'ont pas d'esprit. Remarque, je ne te juge pas. Moi aussi, j'en accepte. »",
    ],
    choices: [
      { back: "A_refuge" },
    ] },

  A_baptistin_veille: { act: "I", title: "Ceux de là-haut", place: "refuge",
    text: [
      "Baptistin compte sur ses gros doigts.",
      "« Le vieux, d'abord. Maître Vellérin. Quatre-vingt-six ans, une barbe de prophète, et il crie sur les étoiles quand elles sont en retard. Il me doit trois mulets de bois depuis la Toussaint, et il dit que c'est moi qui suis en retard. Ensuite, la demoiselle Lise. Elle fait ses calculs, elle fait ses comptes, elle fait tout, et elle ne rit jamais, sauf une fois, quand le vieux est tombé dans la neige. Ensuite, le gamin, Tobie, l'apprenti, qui frotte les verres et qui grimpe partout comme un chat de gouttière. »",
      "Il replie le dernier doigt. « Et puis le frère Cosme, à l'ermitage, à mi-chemin. Lui, c'est un brave. Il a des abeilles, il a des simples, il soigne les mules mieux que moi et les gens mieux que le médecin. Il monte là-haut tous les soirs avec un panier. Le vieux ne croit pas en Dieu, mais il croit au miel du frère. »",
      { second: true, text: "En parlant du frère, Baptistin a eu un sourire tendre. Tu le regardes sourire, et tu as froid dans le dos." },
    ],
    choices: [
      { back: "A_refuge" },
    ] },

  A_ecurie: { act: "I", title: "L'écurie", place: "refuge",
    fx: { flag: "helis:entendue" },
    text: [
      "L'écurie sent la paille, le cuir et la mule. Dans la pénombre, derrière la cloison de planches, deux voix. Celle de Dame Hélis, basse et nette, et celle du capitaine, qui répond par monosyllabes, comme on pose des pierres.",
      "« …avant que le Chapitre ne les fasse disparaître, dit-elle. Le Prince les veut imprimées et affichées sur la porte de la cathédrale le jour de l'An. L'heure de la comète, calculée cinquante ans d'avance, à côté du sermon qui l'annonce comme une colère de Dieu. Je voudrais voir la tête du Grand Chantre. »",
      "« Et le vieux ? »",
      "« Le vieux vendra. Il vendra parce qu'il est vaniteux, et qu'on lui offre ce qu'un vaniteux désire : avoir raison devant tout le monde. »",
      "Un silence. Puis Ferrand : « Il y a quelqu'un dans l'écurie. »",
      { second: false, text: "Tu te retires entre deux mulets, qui te regardent avec la complicité molle des bêtes de somme. Personne ne vient voir." },
      { second: true, text: "La première fois, tu t'es glissé{e} entre deux mulets, et personne n'est venu voir. Tu as une seconde pour recommencer, ou pour sortir de l'ombre." },
    ],
    choices: [
      { label: "Sortir de l'ombre et leur parler", second: true, to: "S_ecurie_r2" },
      { back: "A_refuge" },
    ] },

  A_ermitage: { act: "I", title: "L'ermitage des Veilleurs", place: "ermitage", hub: true,
    fx: { meet: ["cosme"], clue: "i_haie" },
    text: [
      { first: true, text: "L'ermitage tient sous un grand rocher en surplomb, à l'abri du vent : une chapelle de pierre sèche, une cellule à toit de lauzes, six ruches couvertes de paille pour l'hiver. Le potager dort sous une couche de feuilles. Une haie épaisse l'entoure, haute d'un homme, aux feuilles vernies, d'un vert si sombre qu'il en devient noir dans le soir. Tout le flanc de la montagne alentour est brouté ras par les chèvres de Baptistin, jusqu'au pied de la haie, et la haie seule est intacte." },
      { first: true, text: "Sur le seuil de la chapelle, un moine en bure brune allume une lanterne. Il est rond, la tête rasée grise, un tablier de jardinier noué sur sa bure, et il a le visage le plus paisible que tu aies vu depuis des semaines. Il lève la lanterne pour te voir." },
      { first: true, text: "« Bonsoir, dit-il d'une voix lente et chaude. Je suis le frère Cosme. Vous montez à la Veille ? Prenez le temps de souffler. Le ciel attendra, il a l'habitude. »" },
      { again: true, text: "La chapelle, la cellule, les ruches sous leur paille. La haie noire autour du potager. Frère Cosme va et vient avec sa lanterne." },
      { first: true, second: true, text: "Frère Cosme te sourit, et tu lui rends son sourire. Ta main, dans ta poche, s'est fermée toute seule." },
    ],
    choices: [
      { label: "Parler avec Frère Cosme", hide: { seen: "A_cosme1" }, to: "A_cosme1" },
      { label: "Entrer dans la chapelle", to: "A_chapelle" },
      { label: "Faire le tour des ruches avec le frère", hide: { seen: "A_ruches" }, to: "A_ruches" },
      { label: "Demander à Frère Cosme comment est mort Maître Sérac", second: true, if: { seen: "A_cosme1" }, hide: { seen: "S_cosme_serac" }, to: "S_cosme_serac" },
      { label: "Jeter un œil par le volet de la cellule", second: false, hide: { seen: "A_cellule_fenetre" }, to: "A_cellule_fenetre" },
      { label: "Pousser la porte de la cellule pendant que le frère soigne ses ruches", second: true, hide: { seen: "S_herbier_page" }, to: "S_cellule" },
      { label: "Regarder la haie de plus près", second: true, hide: { seen: "S_haie" }, to: "S_haie" },
      { label: "Descendre au refuge", hide: { seen: "A_refuge" }, to: "A_refuge" },
      { label: "Reprendre la montée vers la Veille", to: "A_dernier" },
    ] },

  A_cosme1: { act: "I", title: "Frère Cosme", place: "ermitage",
    text: [
      "Frère Cosme te fait asseoir sur le banc de pierre devant la cellule et te met dans les mains un bol de lait chaud au miel, avant même que tu aies dit oui. Le miel a un goût de thym et de fin d'été.",
      "« Le miel des Veilleurs, dit-il. Mes abeilles dorment, à présent. L'hiver, elles se serrent en boule autour de leur reine et elles tremblent toute la saison pour la tenir au chaud. C'est la plus belle chose que je connaisse. » Il regarde la Veille, là-haut, noire sur le ciel. « Je monte tous les soirs porter un panier au maître. Ce soir, je monterai à minuit, avec un vin chaud pour tout le monde. C'est une grande nuit. »",
      "Tu lui demandes ce qu'il pense de la Glaneuse.",
      "Il réfléchit, les mains autour de son bol. « Le Chapitre dit que c'est un signe. Le maître dit que c'est un caillou. » Il sourit. « Les gens ont besoin de signes. Un caillou, on ne peut rien lui demander. »",
      "« J'ai pris l'ermitage il y a vingt ans, après mon prédécesseur, Frère Anselme. Il a tenu ces ruches soixante ans. Il m'a tout appris : les abeilles, les simples, ce qui guérit et ce qui ne guérit pas. » Il reprend ton bol vide. « Il a connu la dernière comète, lui. Il n'aimait pas en parler. »",
    ],
    choices: [
      { back: "A_ermitage" },
    ] },

  A_chapelle: { act: "I", title: "La chapelle des Veilleurs", place: "ermitage",
    fx: { clue: "i_psautier" },
    text: [
      { first: true, text: "La chapelle est une seule pièce voûtée, si petite que la lanterne l'éclaire d'un coin à l'autre. Un autel de pierre nue, un lutrin, deux bancs. Contre le mur du fond, une dalle funéraire dressée, plus récente que le reste, d'une pierre blanche qui a gardé un peu de son éclat. Derrière l'autel, dans une niche, un petit reliquaire de cuivre brille faiblement." },
      { again: true, text: "La voûte basse, l'autel nu, le lutrin, la dalle blanche contre le mur du fond. Le reliquaire de cuivre dans sa niche." },
      "Sur le lutrin, un psautier est ouvert. Ce n'est pas un livre imprimé : un cahier relié de cuir, couvert d'une écriture ronde et soigneuse. La page ouverte porte un hymne de huit vers.",
      { before: "S_cosme_parti", text: "Frère Cosme est entré derrière toi. Il allume les deux cierges de l'autel, l'un après l'autre, avec une lenteur de rituel, et reste là, les mains croisées sur son tablier, à attendre que tu aies fini de regarder." },
    ],
    choices: [
      { label: "Lire la dalle funéraire", to: "A_tombe" },
      { label: "Lire l'hymne du psautier", to: "A_hymne" },
      { label: "Attendre que Frère Cosme sorte de la chapelle", second: true, hide: { seen: "S_cosme_parti" }, to: "S_cosme_parti" },
      { back: "A_ermitage" },
    ] },

  A_tombe: { act: "I", title: "La dalle blanche", place: "ermitage",
    fx: { clue: "i_tombe" },
    text: [
      "Les lettres sont gravées profond, en capitales régulières, et la lanterne les remplit d'ombre :",
      "*JOACHIM SÉRAC*\n*MAÎTRE DE LA VEILLE*\n*MORT LA NUIT DE LA GLANEUSE*\n*L'AN 312*\n*IL A REGARDÉ JUSQU'AU BOUT*",
      "Au pied de la dalle, quelqu'un a posé un brin de buis, frais.",
      { second: true, text: "Sous la dernière ligne, si petite qu'il faut approcher la lanterne à toucher la pierre, une main maladroite a ajouté au couteau, il y a très longtemps : *pardon*." },
    ],
    choices: [
      { back: "A_chapelle" },
    ] },

  A_hymne: { act: "I", title: "L'hymne du psautier", place: "ermitage",
    text: [
      "L'écriture est ronde, appliquée, sans une rature :",
      "*Clarté qui descends des collines,*\n*Hôte des nuits et des matines,*\n*Aube promise aux pénitents,*\n*Prends en pitié nos cœurs battants ;*\n*Il passe, l'astre au long cheveu,*\n*Taillé dans la colère de Dieu ;*\n*Rends-nous l'aurore et ses lumières,*\n*Et garde-nous dans tes prières.*",
      { before: "S_cosme_parti", text: "« Je l'ai écrit pour cette nuit, dit Frère Cosme derrière toi, avec une modestie d'auteur. Je le chanterai à matines, quand elle passera. »" },
    ],
    choices: [
      { back: "A_chapelle" },
    ] },

  A_dernier: { act: "I", title: "Le dernier lacet", place: "ermitage",
    fx: { meet: ["tobie"] },
    text: [
      "Au-dessus de l'ermitage, la montagne se fait toute en pierre. Plus d'herbe, plus d'arbres, plus de bruit : un escalier de dalles taillé dans le roc, avec une main courante de fer, qui monte vers la tour en zigzags. La nuit tombe pour de bon. Le froid aussi, et il a des dents.",
      "Tu montes. À chaque palier, le silence s'épaissit ; on entend son propre souffle, puis son propre cœur, puis plus rien qu'un sifflement très fin qui est peut-être le vent dans la main courante, peut-être autre chose. L'esprit, dans le noir et l'altitude, se met à compter : les marches, les respirations, les étoiles qui s'allument une à une à l'est comme si quelqu'un, là-bas, faisait sa ronde avec une mèche.",
      "Et puis, au dernier palier, tu la vois.",
      "Elle sort de derrière l'épaule du mont, très bas sur l'horizon de l'est : une tache pâle, plus grande que la lune, d'une lumière laiteuse et froide, avec une queue qui s'étire vers le haut, longue, effilée, courbée comme une faux ou comme un cheveu tombé sur une page. Elle ne brille pas. Elle luit, ce qui est pire. On dirait une chose qui regarde.",
      "Une lanterne descend vers toi en dansant. Un garçon maigre aux cheveux en épis, les mains grises de poudre, s'arrête trois marches au-dessus et te braque sa lumière en pleine figure. « C'est vous, le porteur ? La demoiselle Lise m'envoie. Le maître a dit que si vous étiez mort en route, il fallait au moins rapporter la lettre. » Il te tend la main pour t'aider à monter. « Je suis Tobie. Vous avez vu ? Elle est sortie à neuf heures pile. Pile ! Le maître l'avait dit. »",
      { second: true, text: "Tobie a la même tache de poudre sur le nez, le même rire, la même phrase. Tu le laisses te tirer par la main, et tu as envie de le serrer contre toi." },
    ],
    choices: [
      { label: "Monter avec Tobie jusqu'à la porte de la Veille", fx: { until: 21 }, to: "B_porte" },
    ] },
};
