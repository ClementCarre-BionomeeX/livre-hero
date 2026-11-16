// Le Douzième Coup · chapter 10, the one who passes, second half (act III, 19 June 541). The afternoon gives the
// court back (K10j_tantot → hub K10j_cour). Evening on the hill: hub `K10j_veille`. Supper of the apprentices (the
// nine who talk with their hands ; Aymon and the wax of the 21st: `j:aymon_cire`). Tiphaine comes up as « reader
// of the Grand Master » (`j:tiphaine_guilde`, the chapter after the Forbidden one: `j:sait_sueur`). The basket of
// pens with Josquin: the hero chooses what tonight's paper says (`j:placard_vote` | `j:placard_cire` +
// `monde:placard_cire` | `j:placard_duc` + `monde:placard_duc`), the adjuster in grey (`j:regleur_gagne`),
// `j:placards_colles`. The night of the twelve cradles: from the roof, in the street, as a porter with the key of
// the Tower, or lying in a cradle (`j:vu_chambre_basse`, `monde:lu:chambre`). Midnight: the hiccup of the 19th,
// between the sixth stroke and the seventh. With wax in the ears the hero stays awake in the held city
// (`j:eveille_hoquet`, `monde:lu:eveil`, item `rosee_grise`, `j:vu_eveille` if seen) ; without, held again
// (`j:pris_deux_fois`). K10j_minuit → B10, under the sundial.
var P = {};
var JOSQ = { present: "josquin" };
var CIRE = { all: [{ has: "j:sait_cire" }, { item: "pain_cire" }] };
var DEDANS = { has: "j:vu_chambre_basse" };

Object.assign(P, {
  K10j_tantot: { act: "III", title: "L'ombre sur le un", place: "guilde", ambiance: "chateau",
    text: [
      "Tu refermes le Cahier. Sur le marbre, l'ombre du style a passé le douze et s'en va vers le un, sans hâte, avec la tranquillité d'une chose qui n'a jamais eu de ressort.",
      "La cour se repeuple. On sort du réfectoire en s'essuyant la bouche ; un apprenti traverse avec une cloche de verre qu'il porte comme le saint sacrement ; l'homme de cuivre reprend son tour d'arcades, un pigeon sur l'épaule.",
      "Il te reste l'après-dînée. Demain, cette maison votera à huis clos. Ce soir, elle a encore ses portes ouvertes et ses gens à leurs fenêtres.",
    ],
    choices: [{ label: "Quitter la marche du cadran", to: "K10j_cour", big: true }] },

  K10j_soir: { act: "III", title: "Le cadran qui se tait", place: "guilde", ambiance: "chateau",
    text: [
      "Le soleil passe derrière le logis de l'ouest. L'ombre du style s'allonge, pâlit, déborde de la table de marbre et se perd sur les dalles. À sept heures, le cadran solaire des Jurés a fini sa journée. Il est le seul de la maison à savoir s'arrêter.",
      "Alors la Tour s'allume. On éclaire ses cadrans par derrière, à la lampe : un œil rond et jaune s'ouvre au-dessus des toits, puis, plus haut, la lanterne. La cour reçoit d'elle une clarté de cave, où les arcades font douze bouches noires.",
      "Le portier ferme le grand portail, à deux tours. Les hommes de cuivre changent de ronde : ceux du mur rentrent sous les arcades, et l'on en compte à présent quatre dans la cour, qui se croisent au cadran et repartent, chacun avec sa petite lueur grise à la place du cœur.",
      "Une cloche maigre sonne, du côté du réfectoire. C'est la seule que la maison se permette, et elle dit la soupe.",
    ],
    choices: [{ label: "Rester dans la cour, à la lueur de la Tour", to: "K10j_veille", big: true }] },

  K10j_veille: { act: "III", title: "La veille du vote", backName: "la cour, à la nuit", place: "guilde", ambiance: "chateau", hub: true,
    text: [
      { first: true, text: "La nuit est tiède. On sent le tilleul, l'huile de pied de bœuf et la pierre chaude. Quelque part, au premier, quelqu'un lit tout haut, d'une voix qui s'arrête et reprend." },
      { again: true, text: "La cour, ses quatre lueurs grises qui tournent, l'œil jaune de la Tour par-dessus le toit." },
      { after: "j:sait_berceaux", text: "Devant la porte au papillon, on a rangé contre le mur douze choses longues, sous des couvertures. Deux apprentis sont assis dessus et balancent les jambes, de l'air de gens qu'on a mis là pour s'asseoir." },
      { before: "j:sait_berceaux", text: "Devant la porte au papillon, on a rangé contre le mur douze choses longues, sous des couvertures. Deux apprentis sont assis dessus et balancent les jambes." },
      { after: "j:tiphaine_guilde", text: "À la fenêtre du Grand Maître, il y a maintenant deux ombres sur le rideau. La grande écoute. La petite parle." },
    ],
    choices: [
      { label: "Le réfectoire : la soupe des apprentis", to: "K10j_souper" },
      { label: "La porte des apprentis, où le Grand Maître attend quelqu'un", hide: { any: [{ not: { has: "j:coudrier_tiphaine" } }, { has: "j:tiphaine_guilde" }] }, to: "K10j_tiphaine_porte" },
      { label: "Le cabinet du Grand Maître, où l'on récite", hide: { any: [{ not: { has: "j:tiphaine_guilde" } }, { has: "j:sait_sueur" }] }, to: "K10j_tiphaine_veille" },
      { label: "La voix qui lit tout haut, au premier", hide: { seen: "K10j_lampe" }, to: "K10j_lampe" },
      { label: "Les communs : Josquin, sa corbeille, ses quarante feuilles", hide: { any: [{ not: { has: "j:josquin_placards" } }, { has: "j:placards_colles" }] }, to: "K10j_corbeille" },
      { label: "Attendre que la cour s'éteigne", to: "K10j_guet", big: true },
    ] },

  K10j_souper: { act: "III", title: "Deux tables", backName: "le réfectoire", place: "guilde", ambiance: "chateau",
    text: [
      { first: true, text: "C'est une salle basse, voûtée, à deux tables longues. On y mange une soupe au lard où la cuiller tient debout, du pain bis, et un fromage dont les Jurés ont le monopole, on se demande pourquoi." },
      { first: true, text: "La table de gauche fait le bruit de vingt garçons qui ont limé tout le jour. On s'y dispute un quignon, une place, la question de savoir si Rouet verra jamais ses pieds." },
      { first: true, text: "La table de droite se tait. Ils sont neuf, en tabliers propres, le grand Baudouin au bout. Ils mangent bien, sans se presser, et ils se parlent avec les mains. Un doigt levé, le pain passe. Deux doigts sur la manche, le pichet. Une paume à plat : celui d'en face repose sa cuiller et attend. Ils y mettent l'aisance des gens qui s'exercent depuis un mois." },
      { first: true, text: "« Ils font cela depuis la Saint-Urbain, dit un petit de la table de gauche, la bouche pleine. Le sous-maître dit que la parole use. On les appelle les Chartreux. Pas devant eux. »" },
      { first: true, text: "Baudouin tire de son gousset une montre, la regarde, la referme. Il pose la paume à plat. Les neuf se lèvent ensemble, rangent leurs écuelles en pile, et sortent à la file, du côté de la porte au papillon. Le dernier souffle la chandelle de leur table." },
      { first: true, after: "j:assaut_gagne", text: "En passant, Baudouin t'a regardé{e}. Il a porté deux doigts à sa tempe, à peine. C'était le salut de la baguette, et il a dû lui coûter." },
      { again: true, text: "La table de droite est vide, sa chandelle soufflée. À gauche, on se dispute le fromage." },
    ],
    choices: [
      { label: "T'asseoir à gauche, à côté d'Aymon Foliot", hide: { any: [{ not: { seen: "K08j_aymon" } }, { seen: "K10j_aymon_soir" }] }, to: "K10j_aymon_soir" },
      { label: "Manger ta soupe, et écouter", hide: { seen: "K10j_souper_dit" }, fx: { pv: 3 }, to: "K10j_souper_dit" },
      { back: "K10j_veille" },
    ] },

  K10j_souper_dit: { act: "III", title: "Ce qu'on dit en soufflant sur sa soupe", place: "guilde", ambiance: "chateau",
    text: [
      "On te fait une place, on te pousse une écuelle. La soupe est brûlante et elle répare.",
      "« Demain, on ne lime pas, dit un rouquin. Séance. On nous enferme au dortoir depuis prime, avec un homme de cuivre à chaque bout. Mon maître dit que c'est l'usage. Je l'ai cherché, l'usage : il date d'avant-hier. »",
      "« Le mien répète son vote devant la glace, dit un autre. Il lève la main, il la regarde, il la baisse. Il a essayé la gauche. »",
      "« Et les Chartreux montent cette nuit, dit le petit. Ils ont eu de la viande à midi et double pain ce soir. Quand on nourrit les bœufs, c'est qu'il y a un champ. »",
      { after: "j:sait_berceaux", text: "Tu penses aux douze berceaux de monsieur Fourchon, chevillés de bois, sans un clou. Le champ est au pied de la Tour." },
      "Le rouquin baisse la voix. « Il y en a un des neuf qui a pleuré, la semaine passée. Ansel, le plus jeune. On l'a entendu du dortoir. Le lendemain il avait une montre neuve, et il ne pleurait plus. » Il souffle sur sa cuiller. « C'est une belle montre. »",
    ],
    choices: [{ back: "K10j_souper" }] },

  K10j_aymon_soir: { act: "III", title: "Le poids de la cire", place: "guilde", ambiance: "chateau",
    text: [
      "Aymon t'a gardé le bout du banc. Il mange proprement, les manchettes relevées d'un tour, et il a rangé ses miettes en un seul tas.",
      "« Mon oncle a demandé à dîner combien étaient contre. J'ai dit un. Il a dit : *ce pauvre Barnabé*, et il a repris des pois. » Il essuie son couteau. « Chez nous, on plaint beaucoup les gens. Cela dispense de les rejoindre. »",
      { after: "j:sait_cire", text: "Tu regardes la table vide des neuf. Tu demandes, tout bas, combien pesait la cire du sonneur Thibaut." },
      { after: "j:sait_cire", text: "Aymon ne tourne pas la tête. « Une noisette par oreille. Pétrie tiède, poussée du pouce, et un bandeau de drap par-dessus, noué derrière. Évrard l'a pesée : il pesait tout. » Sa cuiller s'arrête. Il vient de regarder, lui aussi, la table de droite, la chandelle soufflée, la place de neuf garçons qui parlent avec les mains. Il a pâli d'un ton." },
      { after: "j:sait_cire", text: "« Ils s'habituent, dit-il lentement. Leur silence est une répétition. » Il repose la cuiller. « Je croyais être le seul à avoir lu cette malle. Mon bisaïeul a eu un second lecteur, et celui-là prend des notes. »" },
      { before: "j:sait_cire", text: "Il regarde la table vide des neuf, la chandelle soufflée. « Ils parlent avec les mains depuis un mois. Le sous-maître ne fait rien pour l'ornement. Si je savais à quoi sert de se taire, je saurais ce qu'on vote. »" },
    ],
    choices: [
      { label: "« Le 21, à midi moins le quart, mets-en dans les tiennes. »", hide: { not: { has: "j:sait_cire" } }, fx: { flag: "j:aymon_cire", ep: ["perso", 500] }, to: "K10j_aymon_cire" },
      { back: "K10j_souper" },
    ] },

  K10j_aymon_cire: { act: "III", title: "Un Foliot debout", place: "guilde", ambiance: "chateau",
    text: [
      "Il te regarde longtemps. Il a les yeux d'un garçon à qui l'on a appris, depuis le berceau, à compter les mains avant de lever la sienne.",
      "« Vous me demandez d'être debout dans une ville couchée. » Il tourne son couteau sur la table, la pointe vers lui, puis vers toi. « Les Foliot ont une spécialité : ils sont toujours du côté où l'on est le plus. Après-demain, à midi passé d'un saut d'aiguille, le côté le plus nombreux sera pris, la bouche ouverte, avec mon oncle au milieu. »",
      "Il range le couteau. « Ce sera la première fois qu'un Foliot se trouvera du petit côté. Évrard y était. On l'a déposé. » Il a un demi-sourire, mince, qui lui va mieux que ses manchettes. « J'aurai une noisette dans chaque oreille et un bandeau sous mon bonnet. Dites-moi seulement où il faudra que je sois. Je sais me tenir quelque part : c'est de famille. »",
      "Tu dis que tu le lui feras savoir. Il hoche la tête, et repousse vers toi la moitié de son fromage, ce qui est, chez un Foliot, un acte.",
    ],
    choices: [{ back: "K10j_souper" }] },

  K10j_lampe: { act: "III", title: "Un homme qui répète", place: "guilde", ambiance: "chateau",
    text: [
      "La voix tombe d'une fenêtre du nord, ouverte sur la chaleur. Tu te mets sous l'arcade, dans le noir.",
      "C'est une grosse voix, rouillée, qui lit comme on charrie des pierres. *« Et les Fondateurs dirent : nul ne tiendra le Balancier, fût-ce le temps d'un souffle ; car ce qui est tenu... »* Elle s'arrête. On entend tourner un sablier. Elle reprend la phrase au début, plus lentement. Elle s'arrête au même mot.",
      "« Trop vite, dit la voix, pour elle seule. Tu lis comme un homme qui a raison. Ils détestent cela. » Un silence. « Lis comme un homme qui a peur. Tu n'auras pas à chercher loin. »",
      "Elle recommence. Cette fois elle va au bout du verset, et le dernier mot tremble. Le vieillard se tait un moment. Puis, tout bas, d'un ton que la cour n'a jamais dû lui entendre : « Voilà. Comme cela. Bien. »",
      { with: "josquin", text: "Josquin, à ton coude, a ôté ses besicles. « Il fait cela depuis trois nuits. Il ne sait pas que je l'entends. Je vous demande pardon pour lui : il serait très fâché d'avoir été écouté pendant qu'il était brave. »" },
      "Le sablier tourne encore. Tu t'en vas sur la pointe des pieds. Barnabé Coudrier a soixante-dix ans, il est seul contre six, et il passe sa dernière soirée à apprendre à lire.",
    ],
    choices: [{ back: "K10j_veille" }] },

  // --- Tiphaine, reader of the Grand Master ---
  K10j_tiphaine_porte: { act: "III", title: "Lecteur du Grand Maître", place: "guilde", ambiance: "chateau", fx: { flag: "j:tiphaine_guilde", ep: ["perso", 500] },
    text: [
      "La porte des apprentis est une poterne basse, dans le mur de l'ouest, entre deux hommes de cuivre. Le portier y a porté son tabouret et sa mauvaise humeur. On ne reçoit personne à cette heure ; on reçoit encore moins la veille d'une séance.",
      "Il y a, de l'autre côté du guichet, un garçon mince en veste trop large, une boîte à outils sous le bras, le bonnet sur les sourcils. Il a donné son nom deux fois. Le portier l'a écrit deux fois, pour le plaisir de le biffer.",
      "« Tiphain. Neveu de Gobin. Pas de clef, pas de maître, pas de billet. » Il referme son registre. « Mon garçon, tu vois ces deux messieurs en cuivre. Fais un pas. »",
      "Le garçon fait un pas. Les trois doigts descendent sur son épaule. Il s'arrête, la bouche entrouverte, le pied en l'air, la boîte serrée contre lui. Sous le bonnet, les yeux sont restés grands ouverts, d'un brun de noisette.",
      "Alors on entend, dans l'escalier du nord, un pas que la cour ne connaît plus : lourd, inégal, qui descend. Le portier se lève de son tabouret. Barnabé Coudrier n'a pas passé sa porte aux douze anneaux depuis la Chandeleur ; il traverse sa cour en houppelande, tête nue, une baguette à bout de bronze dans son poing de forgeron.",
      "Il touche le bras de cuivre. Les doigts se lèvent. « Lecteur du Grand Maître, dit-il au portier. Écrivez-le. Avec une majuscule à Lecteur, cela leur fera chercher l'article. »",
      "Puis il regarde ce qu'on lui amène. Il regarde les mains, d'abord, comme il a dit : le pouce entaillé, l'index plat des gens qui tiennent un burin. Il hoche la tête. « Vous m'avez écrit, il y a quatre ans, que le troisième article ne savait pas limer. J'ai vérifié. Il ne sait pas. » Il tourne les talons. « Montez. Vous avez quarante chapitres à me dire, et moi un seul à vous demander pardon. »",
      "Tiphaine passe devant toi. Elle n'a pas souri. Elle a seulement, à ta hauteur, desserré les doigts sur sa boîte, un par un, comme on lâche une rampe.",
    ],
    choices: [{ label: "Les laisser monter", to: "K10j_veille" }] },

  K10j_tiphaine_veille: { act: "III", title: "Ce qui vient après", place: "guilde", ambiance: "chateau",
    text: [
      "Le cabinet est tel que tu l'as laissé : la table, le coffre, le sablier, les livres jusqu'au plafond. On a seulement ajouté une chaise. Tiphaine est dessus, droite, le bonnet sur les genoux, ses cheveux coupés au ras de la nuque. Elle a les yeux fermés.",
      "Elle récite. Elle ne lit rien : il n'y a devant elle qu'un verre d'eau. Le vieillard suit sur sa copie, d'un doigt énorme, ligne à ligne, et de temps en temps le doigt s'arrête, parce que la copie a une faute et que la mémoire de cette fille ne l'a pas.",
      { with: "josquin", text: "Josquin est assis par terre, dans un coin, les genoux au menton. C'est sa copie. Chaque fois que le doigt s'arrête, il rentre un peu plus la tête dans ses épaules." },
      "« Le septième, dit Coudrier. *De l'Interdit.* Ils le connaissent. Dites-moi le huitième. »",
      "Elle ouvre les yeux. « Il est court. Personne ne le copie : il n'ordonne rien. » Elle regarde le mur, où elle revoit une page. « *De la Sueur.* »",
    ],
    choices: [{ label: "Écouter le huitième chapitre", fx: { flag: ["j:sait_sueur", "monde:lu:sueur"], ep: ["histoire", 800] }, to: "K10j_tiphaine_sueur", big: true }] },

  K10j_tiphaine_sueur: { act: "III", title: "De la Sueur", place: "guilde", ambiance: "chateau",
    text: [
      "*« Or il advint, du vivant des Fondateurs, que le Balancier fut tenu par mégarde, l'espace d'un Ave, un charpentier ayant laissé choir une poutre en travers. Et l'on trouva sur la barre, et sur la pierre du puits, une rosée grise, fine comme farine, qui luisait dans le noir. »*",
      "*« Les Fondateurs la recueillirent dans une coquille. Ils la pesèrent : elle pesait moins que rien. Ils en mirent un grain sur la langue d'un chien qui se mourait, et le chien vécut le temps de boire son écuelle. Ils connurent alors ce qu'elle était. »*",
      "*« C'est le temps que les vivants n'ont pas eu. Chaque souffle retenu sous la cloche rend son grain, et le grain est à celui qui le ramasse. Les Fondateurs eurent peur de leur coquille. Ils la vidèrent dans le puits, scellèrent la chambre, et firent l'Interdit, qui est au chapitre d'avant. Car, dirent-ils, qui aura goûté de cette farine voudra moudre. »*",
      "Elle se tait. Le sablier a fini de couler et personne ne le retourne.",
      "« *Voudra moudre*, répète le vieillard. Trois cents ans que ce chapitre est dans le Livre, et l'on ne lit aux apprentis que celui d'avant. On leur apprend la défense. On leur cache ce qu'elle défend. » Il a posé sa grosse main à plat sur la copie. « Melchior l'a lu. Il a toujours lu ce qu'on ne lui donnait pas. Où les Fondateurs ont écrit une peur, il a lu un rendement. »",
      { after: "monde:su:recolte", text: "*Il appelle cela une récolte*, a écrit {autre}, d'une tente, soixante ans plus loin. Tu as sous les yeux la page où il en a pris l'idée, dite par une fille en veste d'homme qui la sait par cœur." },
      { after: "j:sait_berceaux", text: "Quarante mille souffles, retenus un an. Douze cuves d'un verre qui boit. Tu fais la multiplication malgré toi, et tu comprends pourquoi le duc paie douze mille écus une chose dont il ne voit que la moitié." },
      "« Demain, dit Coudrier, je lirai le septième. Puis je dirai : *il y a ici quelqu'un qui sait le huitième.* Et vous le direz debout, comme vous venez de le dire, sans regarder personne. » Il se lève, il va à la fenêtre. « Je ne sais pas si cela changera une main. Je sais que six hommes l'auront entendu avant de la lever, et que c'est tout ce qu'un Grand Maître peut faire pour la conscience des autres. »",
    ],
    choices: [{ back: "K10j_veille" }] },

  // --- The basket of pens ---
  K10j_corbeille: { act: "III", title: "La corbeille aux plumes", place: "guilde", ambiance: "chateau",
    text: [
      "Josquin t'attend derrière les cuisines, avec une corbeille d'osier pleine de plumes d'oie taillées, qu'il porte chaque soir chez le plumassier de la rue des Gantiers, pour qu'on les retaille. Sous les plumes, il y a quarante quarts de feuille, blancs, et un pain.",
      "« Le pain est pour la colle. La mie, mâchée. C'est moins solide que la colle de peau, mais cela ne sent pas, et, si l'on me fouille, j'ai l'air d'un garçon qui a faim. » Il rougit. « Ce qui est d'ailleurs vrai. »",
      "« Je ne les ai pas écrits, ce soir. Je n'ai pas pu. J'ai taillé la plume, j'ai fait la marge, et je suis resté devant. » Il remonte ses besicles. « J'ai dit trois nuits de suite qu'on votait quelque chose de grave. Les gens ont lu. Ils ont dit : *tiens*. Ils sont allés chercher leur eau. Je crois que j'écris comme mon maître parle : j'ai raison, et cela ne dérange personne. »",
      "Il te tend la plume, par le bon bout, avec cérémonie. « Vous venez d'en bas. Vous savez ce qui les ferait s'arrêter devant une fontaine. Dictez. J'écrirai quarante fois ce que vous direz, et je mettrai *pardon de vous alarmer* à la fin, parce que c'est ma signature et qu'on me reconnaît à cela. »",
    ],
    choices: [
      { label: "« Demain, sept hommes votent votre heure, portes closes. Venez devant la Guilde. »", fx: { flag: "j:placard_vote" }, to: "K10j_fontaine" },
      { label: "« Le 21, avant midi, bouchez-vous les oreilles avec de la cire. Ceux qui n'entendront pas resteront debout. »", hide: { not: { has: "j:sait_cire" } }, fx: { flag: ["j:placard_cire", "monde:placard_cire"], ep: ["histoire", 800] }, to: "K10j_fontaine" },
      { label: "« Le duc de Hautgué a payé douze mille écus pour que la Reine dorme un an. Demandez-lui le reçu. »", hide: { not: { has: "j:oui_marche" } }, fx: { flag: ["j:placard_duc", "monde:placard_duc"], ep: ["histoire", 600] }, to: "K10j_fontaine" },
    ] },

  K10j_fontaine: { act: "III", title: "Quarante quarts de feuille", place: "palais", ambiance: "ville",
    text: [
      { after: "j:placard_vote", text: "Il écrit sur son genou, à la lueur d'une lanterne de carrefour, d'une ronde appliquée d'enfant de chœur. *Demain 20 juin, à la Guilde, sept hommes votent votre heure, portes closes. Venez devant le portail. Vous êtes quarante mille, et ils sont sept. Pardon de vous alarmer.* Il relit. « C'est court. On dirait un ordre. Je n'en ai jamais donné. »" },
      { after: "j:placard_cire", text: "Il écrit sur son genou, à la lueur d'une lanterne de carrefour, et sa plume s'arrête au milieu. « De la cire. Dans les oreilles. » Il te regarde par-dessus ses besicles. Tu lui dis Évrard, le sonneur, les trois psaumes. Il devient très grave, et il écrit, de sa ronde d'enfant de chœur : *Le 21, jour du Grand Midi, avant que midi sonne, bouchez-vous les deux oreilles avec de la cire, et un linge par-dessus. Faites-le aux enfants. Ceux qui n'auront pas entendu resteront debout. Pardon de vous alarmer.*" },
      { after: "j:placard_cire", text: "« Ils riront, dit-il. Ils riront beaucoup. » Il sèche la feuille en soufflant dessus. « Mais la cire coûte un liard, et l'on fait pour un liard bien des choses dont on rit. Il suffit d'une grand-mère par maison. »" },
      { after: "j:placard_duc", text: "Il écrit sur son genou, à la lueur d'une lanterne de carrefour, et sa plume tremble au mot *duc*. *Monseigneur de Hautgué a payé douze mille écus à la Guilde pour que la Reine dorme un an avec sa fille. Demandez-lui le reçu. Pardon de vous alarmer.* Il regarde ce qu'il a fait. « Avec celui-là, on ne me donnera pas le fouet. On me pendra. C'est la première fois que j'écris quelque chose qui vaut une corde. »" },
      "Vous sortez par les communs, la corbeille entre vous deux. L'homme de cuivre de la poterne incline son ovale vers la clef de Josquin, vers la tienne, et se range. Dehors, la ville haute dort derrière ses volets pleins, avec la bonne conscience des rues où l'on possède.",
      "On colle aux fontaines : c'est là que la ville vient deux fois le jour, et qu'elle a les mains occupées et la tête libre. Josquin mâche, tu appliques. La mie tient. À la sixième fontaine, celle des Gantiers, où un triton de bronze crache dans une vasque, il te touche le coude.",
      "Un homme monte la rue, sans lanterne. Il est en gris, il a une clef au cou, et il marche du pas égal d'un régleur qui fait sa tournée. Sauf qu'il n'y a pas de tournée à dix heures du soir, et qu'il ne regarde pas les horloges. Il regarde les fontaines.",
    ],
    choices: [
      { label: "Coller la sixième sous son nez, du côté de l'ombre",
        test: { dom: "discretion", diff: 10, label: "Une feuille, une vasque, un homme qui regarde", help: [{ if: { voie: "leste" }, v: 15 }, { if: { voie: "coureur" }, v: 5 }] },
        win: { fx: { flag: "j:placards_colles", ep: ["perso", 400] }, to: "K10j_placards_fin" },
        lose: { to: "K10j_regleur" } },
      { label: "Aller à lui, la feuille à la main", to: "K10j_regleur" },
      { label: "Prendre la corbeille et filer par la rue des Gantiers", fx: { flag: ["j:placards_colles", "j:placards_moitie"] }, to: "K10j_placards_fin" },
    ] },

  K10j_regleur: { act: "III", title: "Le régleur de la rue des Gantiers", place: "palais", ambiance: "ville",
    text: [
      "De près, c'est un homme de cinquante ans, voûté, les joues creuses, avec les yeux rougis des gens qui lisent des cadrans à la chandelle depuis trente ans. Il porte dans sa main gauche une liasse de quarts de feuille, décollés avec soin, sans une déchirure.",
      "Josquin a reconnu sa propre écriture. Il ouvre la bouche pour s'excuser. Tu lui marches sur le pied.",
      "« Trente-sept d'avant-hier, dit le régleur, sans hausser la voix. Trente-neuf d'hier : il y en a un que la pluie a mangé. J'ai ordre de les ôter avant le jour et de les porter au sous-maître. Il les lit. Il corrige les fautes à l'encre rouge, il les range dans un tiroir, par date. Il m'a dit une fois : *ce garçon a une belle main, c'est dommage.* »",
      "Il regarde Josquin, qui a fondu de deux pouces. « Je m'appelle Trottier. Je règle les horloges de ce quartier depuis l'an 512. Cette nuit, pour la quatrième fois du mois, je vais monter sur mon échelle et pousser onze aiguilles d'un demi-pouce, parce qu'on me donnera à l'aube une heure qui sera fausse, et qu'on me dira qu'elle est juste. »",
      "Il prend la feuille que tu tiens. Il la lit en remuant les lèvres.",
      { after: "j:placard_cire", text: "Il la lit une seconde fois. Sa main, qui n'a pas tremblé en trente ans sur une échelle, tremble. « J'ai une femme et quatre petits, rue des Aiguilliers. » Il plie la feuille en quatre et la met dans sa poitrine, sous la clef. « Celle-ci, je la garde. Les autres resteront aux fontaines jusqu'à midi : j'aurai eu la vue basse. À mon âge, cela se comprend. »" },
      { after: "j:placard_vote", text: "« *Vous êtes quarante mille, et ils sont sept.* » Il hoche la tête. « C'est la première fois que l'un de ces papiers fait une addition. » Il rend la feuille. « Collez. Je ne commencerai ma tournée qu'à l'aube, par l'autre bout. Les porteurs d'eau passent à cinq heures. Ils auront lu avant que j'arrive, et je décollerai avec beaucoup de zèle ce que tout le monde saura. »" },
      { after: "j:placard_duc", text: "Il devient gris comme sa livrée. « Vous avez vu ce reçu. » Tu dis que oui. Il rend la feuille du bout des doigts, comme une chose chaude. « Je porte au sous-maître ce que je décolle. Celui-ci, je ne veux pas l'avoir eu dans la main. Collez-le haut, que je ne puisse pas l'atteindre sans échelle, et j'aurai oublié la mienne. »" },
      "Il remet sa liasse sous son bras et s'éloigne, du pas égal d'un homme qui fait une tournée. Au coin, il lève le nez vers l'horloge de la fontaine, par habitude. Elle est juste. Elle ne le sera plus dans deux heures, et il le sait.",
    ],
    choices: [{ label: "Finir les quarante", fx: { flag: ["j:placards_colles", "j:regleur_gagne"], conf: { josquin: 10 }, ep: ["perso", 600] }, to: "K10j_placards_fin" }] },

  K10j_placards_fin: { act: "III", title: "La mie tient", place: "palais", ambiance: "ville",
    text: [
      { after: "j:placards_moitie", text: "Vous avez couru. Josquin court comme il l'avait annoncé, avec les coudes, en demandant pardon aux bornes. Vous en avez collé vingt, dans la ville du milieu, loin des fontaines que l'homme en gris surveille ; le reste est sous les plumes, pour une autre nuit, s'il y en a une." },
      { before: "j:placards_moitie", text: "Quarante. La dernière est sur la fontaine de l'esplanade, en face du Palais, à hauteur d'œil de laquais. Josquin recule de trois pas pour la regarder, la tête penchée, comme un peintre." },
      { after: "j:placard_cire", text: "« Ceux qui n'auront pas entendu resteront debout », relit-il à mi-voix. « Si une seule maison le fait, il y aura quelqu'un, après-demain, pour ouvrir les portes aux autres. » Il essuie ses doigts à son tablier. « Je n'avais jamais écrit une chose qui pouvait servir. J'écrivais des choses vraies. C'est un autre métier. »" },
      { after: "j:placard_vote", text: "« Devant le portail », relit-il à mi-voix. « Mon maître sera content, et il dira qu'il est furieux. Il n'aime pas la foule : il aime seulement qu'elle ait le droit. »" },
      { after: "j:placard_duc", text: "« Le reçu », relit-il à mi-voix. « Les gens d'ici pardonnent tout à un prince, sauf d'avoir payé. Ils veulent bien être gouvernés ; ils n'aiment pas avoir été achetés avec la monnaie. »" },
      "Vous rentrez par la poterne. L'homme de cuivre s'incline sur vos clefs. La corbeille ne pèse plus que ses plumes.",
      "« Merci, dit Josquin. Je vous demande pardon de vous le dire : on m'a appris que c'était encombrant. »",
    ],
    choices: [{ back: "K10j_veille" }] },

  // --- The night of the twelve cradles ---
  K10j_guet: { act: "III", title: "Dix heures et demie", place: "guilde", ambiance: "chateau",
    text: [
      "Les fenêtres s'éteignent une à une, le réfectoire d'abord, la grande salle, le trésor. Celle du Grand Maître reste la dernière. Puis elle aussi.",
      "Alors la porte au papillon s'ouvre, sans une lumière. Les neuf sortent. Ils ont ôté leurs sabots : ils marchent sur des chaussons de lisière. Ils tirent les couvertures. Dessous, il y a douze berceaux de chêne blond, longs de sept pieds, creusés en gouttière, avec des brancards. Ils sont beaux, de cette beauté des choses qu'on a faites pour porter un poids exact.",
      "Deux par berceau. Baudouin lève un doigt. La file s'ébranle vers le fond de la cour, vers le mur de l'est, où une porte charretière que tu avais prise pour un pan de mur tourne sur ses gonds graissés. Au-delà, c'est le pied de la Tour.",
      "Et de la ville, d'en bas, par la rue du Cadran, monte un bruit de roues larges, lent, étouffé, que tu connais sans l'avoir jamais entendu : on a mis des sacs aux sabots des chevaux.",
    ],
    choices: [
      { label: "Monter sur le toit des arcades, par l'échelle du couvreur", to: "K10j_toit" },
      { label: "Sortir par la poterne et descendre à la rencontre des roues", to: "K10j_convoi" },
      { label: "Prendre un brancard : tu as la clef du sous-maître", hide: { not: { item: "clef_tour" } }, to: "K10j_porteur" },
      { label: "Te coucher dans le dernier berceau, sous sa couverture",
        test: { dom: "discretion", diff: 15, label: "Peser le poids d'une couverture", help: [{ if: { voie: "leste" }, v: 15 }, { if: { voie: "coureur" }, v: 5 }] },
        win: { fx: { ep: ["perso", 600] }, to: "K10j_berceau" },
        lose: { to: "K10j_berceau_pris" } },
    ] },

  K10j_toit: { act: "III", title: "Le toit des arcades", place: "guilde", ambiance: "chateau",
    text: [
      "L'échelle du couvreur est restée contre le logis de l'est, depuis l'orage de mai. Tu montes. L'ardoise est tiède encore, et douce sous la paume. Tu vas à plat ventre jusqu'au faîte.",
      "D'ici, tu tiens tout. À gauche, la cour, ses quatre lueurs. À droite, en contrebas, une ruelle fermée entre le mur de la Guilde et le pied de la Tour, pavée, large d'une voiture, que personne ne voit de nulle part. Au fond de cette ruelle, dans le roc même de la Tour, il y a une porte basse, cintrée, bardée de bronze. Elle est ouverte. Il en sort une clarté grise, égale, que ni chandelle ni lune ne donnent.",
      "La voiture arrive par le bas. Quatre chevaux bais, deux par deux, des sacs aux pieds. Un fardier long, bâché de noir. Deux hommes à rubans verts marchent devant, deux derrière ; un cocher en manteau noir mène au pas, debout. On débâche. Sous la toile, couchée dans la paille, une cuve de verre de la hauteur d'un homme renvoie la lueur de la porte, et semble pleine d'une eau qui n'y est pas.",
      "Les neuf la prennent. Il faut les voir : quatre aux sangles, deux au col, et pas un mot. Baudouin commande du doigt. On la couche dans un berceau comme on couche un malade, on serre deux courroies de cuir, on lève. Elle passe la porte basse et descend dans la lueur.",
      { after: "j:sait_voiture", text: "Quatre nuits sur six. Tu comptes ce qui est déjà rangé le long de la ruelle, debout, sous des housses : onze formes. Celle-ci fait la douzième. Le compte de la Guigne tombe juste, à la cuve près." },
      "Sur le seuil, un homme mince, en habit sombre, regarde passer chaque berceau, une montre ouverte dans la main. Il ne porte rien. Il ne dit rien. Quand le douzième est descendu, il referme la montre, et descend à son tour.",
    ],
    choices: [{ label: "Rester à plat ventre, et attendre minuit", to: "K10j_avant_minuit", big: true }] },

  K10j_convoi: { act: "III", title: "Des sacs aux sabots", place: "palais", ambiance: "ville",
    text: [
      "Tu descends la rue du Cadran dans l'ombre des portes. La ville haute a fermé ses volets ; les lanternes des fontaines font, de loin en loin, une flaque jaune où rien ne passe.",
      "La voiture monte. Tu la sens d'abord dans le pavé, puis tu la vois : quatre chevaux bais, attelés deux par deux, la tête basse, des sacs de toile noués aux paturons. Un fardier long, bâché de noir, sur des roues larges comme la main. Un cocher debout, en manteau noir, les guides courtes. Deux rubans verts devant, la main à l'épée ; deux derrière, qui se retournent.",
      "Tu te plaques sous un porche. Ils passent à toucher. La bâche a glissé d'un coin : dessous, dans la paille neuve, il y a une épaule de verre, épaisse, verdâtre, où la lanterne de la fontaine se promène et se déforme. La chose est vide. On ne mène pas au pas, avec quatre épées, à minuit, un objet vide ; on mène ainsi un objet qui attend.",
      { after: "monde:su:cuves_boivent", text: "*Ce verre boit la rosée tout seul*, a écrit {autre}. Tu regardes passer une soif de sept pieds de long." },
      "Derrière la voiture, à vingt pas, marche un homme seul, les mains au dos. Tu connais ce pas : il ne fait aucun bruit, et il arrive toujours. Il s'arrête à ta hauteur. Il regarde le porche, qui est noir. Il regarde un long moment, de l'œil gris, puis de l'œil brun, avec l'attention d'un homme qui se demande s'il a vu une chose ou s'il l'a pensée. Puis il reprend sa marche.",
      "Tu suis, de porche en porche. En haut, la voiture laisse l'esplanade à sa gauche et s'enfonce dans une ruelle que tu n'avais pas vue ce matin, entre le mur de la Guilde et le pied de la Tour. Deux rubans verts restent à l'entrée, et s'y plantent.",
    ],
    choices: [{ label: "Te ranger sous le porche d'en face, et attendre minuit", to: "K10j_avant_minuit", big: true }] },

  K10j_porteur: { act: "III", title: "Le dixième dos", place: "tour", ambiance: "chateau",
    text: [
      "Tu traverses la cour sans te cacher, la clef de bronze au poing. L'homme de cuivre incline son ovale et se range. Baudouin t'a vu{e} venir. Il regarde la clef, puis toi, puis la clef. Il a reçu des ordres qu'il n'aime pas ; il les exécute, parce que c'est ce qu'on lui a appris de mieux.",
      "Il te montre, du menton, le brancard arrière du dernier berceau. Puis il fait un geste que tu ne connais pas : deux doigts sur ses lèvres, et la main qui se ferme. Un garçon pâle, le plus jeune des neuf, te le traduit d'un souffle : « Pas un mot passé la porte. »",
      "Le chêne pèse, juste ce qu'il faut. Tu marches au pas de celui de devant. La porte charretière, la ruelle, le fardier noir qu'on débâche, les rubans verts qui te regardent et ne voient qu'un tablier de plus. On pose le berceau. On y couche une cuve, à six. Le verre est froid à travers ta manche, d'un froid qui cherche.",
      "« Levez », dit le doigt de Baudouin.",
    ],
    choices: [{ label: "Lever, et passer la porte basse", fx: { flag: ["j:vu_chambre_basse", "monde:lu:chambre"], ep: ["histoire", 800] }, to: "K10j_rampe", big: true }] },

  K10j_berceau: { act: "III", title: "Sept pieds de chêne", place: "tour", ambiance: "chateau",
    text: [
      "Le dernier berceau est contre le mur, dans le noir de l'arcade. Tu te coules sous la couverture, de tout ton long, dans la gouttière. Le chêne sent le copeau frais et la cire d'abeille. Il est creusé pour un corps de verre ; il te va comme un cercueil prêté.",
      "Des chaussons. Deux mains aux brancards de tête, deux aux pieds. On lève. Tu fais le poids qu'on n'attend pas, et celui de derrière a un soupir par le nez ; mais ces garçons ont porté tout le mois des choses dont on ne leur disait pas le poids, et ils ont appris à ne pas s'étonner.",
      "Tu vois, par un pli de la laine, un pan de ciel, puis le linteau d'une porte charretière, puis une ruelle, des roues, des jambes de chevaux, des bottes à rubans verts. On pose. On va tirer la couverture.",
      "On ne la tire pas. Une voix basse, unie, parle au-dessus de toi, à deux pas : « Celui-ci reste en réserve. Descendez-le tel quel, au bas de la rampe. » Les chaussons reprennent. Tu n'as pas respiré. La voix n'a pas marqué un temps, et tu ne sauras pas, cette nuit, si l'homme aux deux yeux a vu un berceau trop lourd ou s'il a voulu qu'on te descendît.",
    ],
    choices: [{ label: "Te laisser porter", fx: { flag: ["j:vu_chambre_basse", "monde:lu:chambre", "j:descendu_berceau"], ep: ["histoire", 800] }, to: "K10j_rampe", big: true }] },

  K10j_berceau_pris: { act: "III", title: "Un berceau qui éternue", place: "guilde", ambiance: "chateau",
    text: [
      "Tu te coules sous la couverture. Le chêne sent le copeau frais. Tu en as plein le nez, et c'est ce qui te perd : on n'a jamais retenu un éternuement dans de la sciure.",
      "La couverture s'envole. Baudouin te regarde, de toute sa hauteur, avec un autre des neuf, qui tient déjà le brancard. Ils ne disent rien. Ils ne peuvent rien dire : ils sont sortis en silence et ils y resteront.",
      { after: "j:assaut_gagne", text: "Baudouin te considère. Tu l'as touché trois fois ce matin, devant sa table, et il s'en souvient dans ses côtes. Il te prend par le collet, te sort de la gouttière, te pose debout, et t'époussette l'épaule, du revers de la main. Puis il montre la poterne, du menton. C'est tout. Entre gens de baguette, on se rend ce qu'on se doit." },
      { before: "j:assaut_gagne", text: "Baudouin te prend par le collet, te sort de la gouttière comme un chat d'un panier, et te porte ainsi, les pieds battant l'air, jusque sous l'arcade. Il te lâche d'un peu haut. Les dalles de la Guilde sont de bon grès." },
      "Ils reprennent le berceau, et s'en vont, sur leurs chaussons. Personne n'a crié. Personne n'appellera le portier : on ne dérange pas une maison pour une chose qu'elle doit ignorer.",
    ],
    choices: [
      { label: "Gagner le toit par l'échelle du couvreur", hide: { has: "j:assaut_gagne" }, fx: { pv: -2 }, to: "K10j_toit" },
      { label: "Gagner le toit par l'échelle du couvreur", hide: { not: { has: "j:assaut_gagne" } }, to: "K10j_toit" },
    ] },

  K10j_rampe: { act: "III", title: "Au bas de la rampe", place: "tour", ambiance: "chateau",
    text: [
      "On descend par une rampe, taillée dans le roc, large d'un berceau et de deux porteurs, qui descend en tournant sur la droite. Les murs suent. Il y fait une fraîcheur de puits, et, à mesure qu'on descend, cette clarté grise, sans lampe, qui semble venir de la pierre.",
      { after: "j:descendu_berceau", text: "Tu la vois par le pli de la laine, à l'envers, la tête en bas : la voûte qui tourne, les joints de bronze entre les pierres, et l'ombre des porteurs, qui n'a pas de bords." },
      "On l'entend avant de le voir. C'est le bruit que tu as cherché ce midi, sous la cloche, entre deux coups : quelque chose qui descend, et qui tire. Ici, il n'y a plus rien entre lui et toi. Un pas de géant, sourd, mat, un à la seconde, que tu reçois dans les genoux. Les neuf règlent leur marche dessus, sans y penser. On ne peut pas faire autrement.",
      "La rampe finit sur une grille de bronze à deux vantaux, ouverte. Au-delà, il y a une salle ronde.",
      "Elle est grande comme le chœur d'une cathédrale et nue comme une meule. Au centre du dallage, un puits, sans margelle, cerclé d'un anneau de bronze large d'une coudée. De la voûte descend une barre. Elle est de fer noir, grosse comme un mât de gabare, et elle entre dans le puits par le milieu, et elle bouge : à chaque seconde, elle s'enfonce d'un cheveu, d'une secousse nette, comme un doigt qui frappe. Tu la regardes faire six fois. Tu ne vois pas où elle finit. Tu ne vois pas non plus où elle commence.",
      "Contre l'anneau, à hauteur de main, il y a un levier de bronze, couché, long d'une brasse, dans une glissière. Il est sous une cage de fer, cadenassée de trois cadenas. La cage est ouverte. Les trois cadenas pendent.",
      "Autour du puits, sur le dallage, on a tracé à la craie douze places, en rond, comme les heures d'un cadran. Onze cuves y sont déjà couchées dans leurs berceaux, le col tourné vers la barre, bouchées d'un tampon de liège gros comme une miche. On pose la douzième. Le cercle est fermé.",
      { after: "j:vu_maquette", text: "La maquette de la grande salle s'arrêtait au pavé. On avait peint, dessous, un socle de bois verni, avec les armes de la Guilde. Tu es dans le socle." },
      { after: "j:vu_cale", text: "Sur une tablette, près de la cage, entre un maillet de buis et une burette, il y a un coin de bronze, à rainure, dressé au cheveu. Tu l'as vu naître ce matin sous une lime, chez un Juré de vingt-six ans qui ne demande pas l'usage." },
      { after: "monde:su:deux", text: "*UN EN HAUT, UN EN BAS. 360 MARCHES ENTRE LES DEUX.* Tu regardes le levier. Voilà le bas." },
    ],
    choices: [{ label: "Regarder ce que fait l'homme à la montre", to: "K10j_rampe_sortie", big: true }] },

  K10j_rampe_sortie: { act: "III", title: "La main sur le bronze", place: "tour", ambiance: "chateau",
    text: [
      "Il est descendu le dernier. Il fait le tour du cercle, lentement, et il touche chaque cuve, au col, du bout de deux doigts, comme on tâte un pouls. À la septième, il s'arrête, se baisse, fait signe : on la tourne d'un demi-pouce. Il repart.",
      "Puis il va au levier. Il pose la main dessus, à plat, sans le pousser. Il reste ainsi, la montre ouverte dans l'autre main, le temps de dix secousses de la barre. Tu vois son profil, du côté gris. Il a l'air d'un homme à son établi, qui attend que la colle prenne.",
      { after: "j:aubespin_apprenti", text: "Il lève les yeux, et te trouve, au bout de ton brancard. Il incline la tête, de son inclinaison exacte. Puis il montre la rampe, d'un doigt : les porteurs remontent. Ce qui se fait ici à minuit se fait à dix, et l'on ne t'a pas encore compté{e}." },
      { after: "j:descendu_berceau", text: "On a posé ton berceau contre le mur, sous sa couverture, hors du cercle. Tu regardes par le pli. Quand les chaussons sont remontés, il reste en bas dix souffles : les neuf, et lui. Tu comptes onze avec le tien, et tu le retiens." },
      { after: "j:descendu_berceau", text: "Il a un geste. Les neuf tirent de leurs poches un bandeau de drap, et autre chose, de jaune, qu'ils roulent entre leurs paumes. Tu n'attends pas la suite. Tu sors de la gouttière par le côté du mur, tu gagnes la rampe à quatre pattes, dans l'ombre sans bords, et tu montes, avec le pas du géant dans les genoux, jusqu'à l'air." },
      { before: "j:descendu_berceau", text: "Tu remontes avec deux autres, qu'on renvoie aussi. Derrière toi, en bas, il en reste dix. À mi-rampe, tu te retournes : ils tirent de leurs poches un bandeau de drap, et autre chose, de jaune, qu'ils roulent entre leurs paumes." },
      "La ruelle. Le fardier est reparti. Les rubans verts gardent l'entrée, tournés vers la ville. La porte basse est restée ouverte, avec sa lueur. Au-dessus de toi, la Tour, toute droite, et l'aiguille qui fait son saut. Il est minuit moins un quart.",
    ],
    choices: [{ label: "Te ranger dans l'ombre du mur, et attendre minuit", to: "K10j_avant_minuit", big: true }] },

  // --- Midnight ---
  K10j_avant_minuit: { act: "III", title: "Minuit moins trois", place: "tour", ambiance: "chateau",
    text: [
      "Tout s'est tu. La ruelle, la cour, la ville en dessous, avec ses lanternes en file le long de l'eau. Il fait une de ces nuits de juin où l'on entend un chien à une lieue.",
      { before: "j:vu_chambre_basse", text: "La porte basse est ouverte sur sa clarté grise. Personne n'en sort plus. Ils sont tous en bas, les neuf et l'homme à la montre, et ce qu'ils y font ne fait aucun bruit." },
      { after: "monde:su:hoquets", text: "*LE 18 DE NUIT, UN PSAUME ENTIER. LE 19.* {autre} a copié cela pour toi dans une abbaye vide, sur un registre que des religieuses tenaient goutte à goutte. Le 19, c'est maintenant." },
      { if: { all: [{ has: "j:vu_hoquet" }, { not: { has: "monde:su:hoquets" } }] }, text: "Hier, c'était entre le huitième et le neuvième de onze heures. Tu l'as su par un doigt de suif. Cette nuit, ils sont descendus plus tôt, et plus nombreux." },
      { if: CIRE, text: "Tu as dans ta poche un quartier de cire de la halle. Il a pris la chaleur de ta cuisse : il est mou, et il sent le miel." },
      "Au cadran, la grande aiguille est à un saut du douze.",
    ],
    choices: [
      { label: "Pétrir deux noisettes de cire, et te les pousser dans les oreilles", hide: { not: CIRE }, fx: { flag: ["j:eveille_hoquet", "monde:lu:eveil"], ep: ["histoire", 1000] }, to: "K10j_hoquet_eveil", big: true },
      { label: "Compter les coups, les yeux sur la lune", fx: { flag: "j:pris_deux_fois", ep: ["histoire", 400] }, to: "K10j_hoquet_pris", big: true },
    ] },

  K10j_hoquet_pris: { act: "III", title: "Entre le sixième et le septième", place: "tour", ambiance: "chateau",
    text: [
      "Tu prends tes repères, cette fois, en personne avertie. La lune est au-dessus de la girouette du Palais, à un doigt à gauche. Tu ramasses un bout de craie de charpentier dans le ruisseau, et tu traces sur le mur, à hauteur de tes yeux, l'ombre de la gouttière : un trait.",
      "Un. La Patiente, à vingt toises, c'est un coup de poing dans la poitrine. Deux. Trois. Tu tiens la craie contre le mur. Quatre. Cinq. Six.",
      "Sept.",
      "Tu n'as rien senti. Tu en es sûr{e}, de la même sûreté qu'hier. Huit. Neuf. Tu regardes le mur.",
      "L'ombre de la gouttière a quitté ton trait. Elle est à deux largeurs de main sur la droite. La lune a passé la girouette et descend vers les toits. Et ta craie, que tu tenais contre la pierre, a fait toute seule, sans que ton bras ait bougé, un point : le point d'un bras qui est resté là, appuyé, pendant que le ciel tournait.",
      "Dix. Onze. Douze. Deux psaumes, à la lune. Hier, un. Il allonge.",
      { if: { all: [{ has: "j:sait_cire" }, { not: { item: "pain_cire" } }] }, text: "Tu avais le remède dans la tête, depuis la Foire. Il fallait l'avoir dans la poche. On t'a tenu{e} deux nuits de suite, avec quarante mille autres, et tu es, des quarante mille, l'unique personne à pouvoir compter combien." },
      "De la porte basse, un par un, les neuf remontent. Ils ont l'air de garçons qui sortent d'une messe trop longue. Le dernier porte sous son bras quelque chose de plat, enveloppé d'un linge, qui luit à travers.",
    ],
    choices: [{ label: "Regagner la cour avant eux", to: "K10j_minuit", big: true }] },

  K10j_hoquet_eveil: { act: "III", title: "Le sixième coup", backName: "la ville tenue", place: "tour", ambiance: "chateau", hub: true,
    text: [
      { first: true, text: "La cire entre, tiède, et le monde s'éloigne. Tu noues ton mouchoir par-dessus, derrière la tête. Il ne reste que ton sang, qui fait dans tes oreilles un bruit de mer, et ton souffle, que tu entends du dedans." },
      { first: true, text: "Le premier coup, tu le reçois par les pieds. Le pavé le donne à tes semelles, le mur à ton épaule. Deux. Trois. C'est une cloche pour les sourds : elle se lit sur la peau. Quatre. Cinq. Six." },
      { first: true, text: "Tu attends le septième dans tes talons. Il ne vient pas." },
      { first: true, text: "Il y avait une chauve-souris, au-dessus de la ruelle, qui chassait dans la lueur de la porte. Elle est là. Elle est à quatre pieds de ton visage, les ailes ouvertes, un moucheron devant la gueule, et elle ne tombe pas. Tu avances la main. Tu n'oses pas la toucher. Tu regardes ses doigts, fins comme des arêtes, et la peau tendue entre eux, où la lune passe." },
      { first: true, text: "Tu te retournes vers la ville. Les lanternes brûlent : leurs flammes bougent, et ce sont les seules. La fumée d'une cheminée monte jusqu'à une certaine hauteur et s'y arrête, comme un arbre. Sur l'esplanade, la fontaine tient son jet en l'air ; il a des nœuds, des perles, une frange, et l'on en ferait le tour. En bas, tout en bas, la rivière a cessé de couler sous ses ponts. Elle garde la lune sur le dos, entière, sans une ride." },
      { first: true, text: "Quarante mille personnes sont là-dessous, dans leurs lits, au milieu d'un souffle. Tu es debout au-dessus d'elles avec une livre de cire. Tu n'as jamais été aussi seul{e}, et tu n'as jamais eu autant de monde à ta merci." },
      { again: true, text: "La chauve-souris pend à son clou d'air. La fontaine tient son jet. La lune seule a marché, d'un doigt." },
    ],
    choices: [
      { label: "Les hommes de cuivre, dans la cour", hide: { seen: "K10j_eveil_cuivre" }, to: "K10j_eveil_cuivre" },
      { label: "Le mur de la Tour, qui se met à luire", hide: { seen: "K10j_eveil_rosee" }, to: "K10j_eveil_rosee" },
      { label: "La porte basse, et la rampe", hide: { seen: "K10j_eveil_neuf" }, to: "K10j_eveil_neuf" },
      { label: "Les deux rubans verts, au bout de la ruelle", hide: { seen: "K10j_eveil_gardes" }, to: "K10j_eveil_gardes" },
      { label: "Attendre le septième coup, le dos au mur", to: "K10j_eveil_fin", big: true },
    ] },

  K10j_eveil_cuivre: { act: "III", title: "Ceux qui n'ont pas d'oreilles", place: "guilde", ambiance: "chateau",
    text: [
      "Tu passes la porte charretière. La cour est blanche de lune.",
      "Ils marchent. Les quatre hommes de cuivre font leur ronde, du même pas, se croisent au cadran solaire, repartent. Leur lueur grise ne tremble pas. On a fait à ces gens-là un ovale lisse à la place du visage ; on ne leur a pas fait d'oreilles. Ils n'ont rien ouï. Ils ne sont pas tenus.",
      "Sur l'épaule du plus proche, il y a un pigeon. Il dormait là, la tête sous l'aile. Il y est toujours, raide comme un pigeon de faïence, et l'homme de cuivre le promène autour de la cour sans le savoir.",
      "Tu restes sous l'arcade, la clef au poing. L'un d'eux passe à trois pas. L'ovale tourne vers toi, descend à ta main, voit le bronze, se détourne. Dans une ville de quarante mille dormants, il y a donc quatre choses qui marchent et qui regardent les clefs, et elles font exactement ce qu'elles faisaient la veille.",
      { after: "monde:su:clef", text: "*LES VEILLEURS DE CUIVRE MARCHENT ENCORE*, a écrit {autre}. Tu comprends ce soir pourquoi. Le Grand Midi leur passera dessus sans les trouver." },
      "Sous l'arcade du nord, le portier est assis sur son tabouret, le menton sur la poitrine, sa baguette en travers des genoux. Il dormait déjà. Rien, dans sa figure, ne dit lequel de ses deux sommeils est le sien.",
    ],
    choices: [{ back: "K10j_hoquet_eveil" }] },

  K10j_eveil_rosee: { act: "III", title: "Fine comme farine", place: "tour", ambiance: "chateau",
    text: [
      "Cela commence au pied, près de la porte basse. La pierre de la Tour, qui était noire, prend un duvet. On dirait le givre d'une vitre, en juin ; mais ce givre luit, d'une clarté de perle, et il monte, à vue d'œil, de joint en joint, vers le grand cadran.",
      "Tu y mets le doigt. C'est sec, plus fin que la plus fine farine, froid une seconde et tiède ensuite, comme une joue. Cela tient à la peau. Dans le creux de ta main, cela pèse moins que rien.",
      { after: "j:sait_sueur", text: "*C'est le temps que les vivants n'ont pas eu.* Tu regardes la ville, en bas, ses quarante mille souffles retenus, et ce qui en sort par les pierres. Tu as sur le doigt un morceau de la nuit de quelqu'un." },
      { after: "monde:su:recolte", text: "Chez {autre}, on se bat pour une fiole de cela, on l'achète douze écus, on en met une pincée sur la main d'un dormant. Ici, cette nuit, cela vient au mur comme la rosée vient à l'herbe, et personne encore ne lui a donné de prix." },
      "Par la porte basse, la lueur a doublé. Il en sort un fil, gris, lent, qui rampe sur le seuil et retourne en dedans, comme une fumée qu'on aspire. En bas, douze cols de verre sont débouchés.",
      { after: "j:eveil_rosee_prise", text: "Tu as ta boulette, grise au cœur, dans le fond de ta poche." },
    ],
    choices: [
      { label: "En racler une pincée dans ta cire, et refermer la boulette dessus", hide: { has: "j:eveil_rosee_prise" }, fx: { flag: "j:eveil_rosee_prise", item: "rosee_grise" }, to: "K10j_eveil_rosee" },
      { label: "T'essuyer le doigt au mur, et n'en rien garder", hide: { any: [{ has: "j:eveil_rosee_prise" }, { has: "j:eveil_rosee_laissee" }] }, fx: { flag: "j:eveil_rosee_laissee" }, to: "K10j_hoquet_eveil" },
      { back: "K10j_hoquet_eveil" },
    ] },

  K10j_eveil_neuf: { act: "III", title: "Dix hommes debout", place: "tour", ambiance: "chateau", fx: { flag: ["j:vu_chambre_basse", "monde:lu:chambre", "j:vu_levier_tenu"], ep: ["histoire", 600] },
    text: [
      "Tu descends la rampe pieds nus, tes souliers à la main. Tu n'entends pas ton pas : tu ne sauras donc pas s'il s'entend. Mais ceux d'en bas ont les oreilles pleines, eux aussi, et la nuit se joue entre sourds.",
      { if: { not: { seen: "K10j_rampe" } }, text: "La rampe tourne, dans une clarté sans lampe, et finit sur une grille ouverte. Au-delà, une salle ronde, un puits sans margelle, et une barre de fer grosse comme un mât, qui descend de la voûte dans le puits. Autour, douze cuves de verre couchées en rond, comme les heures d'un cadran." },
      "Tu t'arrêtes à la grille, contre le vantail, dans l'ombre sans bords.",
      "La barre ne bouge plus. Voilà ce qui manquait à tes genoux depuis le sixième coup : le pas du géant s'est tu. Elle est arrêtée au milieu d'une secousse, et toute sa longueur est blanche de cette farine qui luit, épaisse comme une neige, qui se détache par plaques et coule vers les douze cols ouverts. Le verre boit. On le voit boire : chaque cuve se voile par le fond, d'un gris de perle, qui monte.",
      "Au levier, il y a un homme. Il le tient poussé, des deux mains, le corps de biais, un bandeau de drap noir sur les oreilles. Il n'a pas l'air de forcer. Il regarde une montre posée sur le dallage, qui ne marche pas, et à côté d'elle un sablier, qui coule : il a pensé à tout, jusqu'à mesurer une heure qui n'existe pas avec la seule chose qui tombe encore.",
      "Les neuf sont à leurs cuves, le bandeau au front. Ils règlent les cols avec des gestes de sommeliers. Le plus jeune, le pâle, a levé la tête vers la voûte, et il pleure, sans s'essuyer, en tenant son entonnoir bien droit.",
      { after: "j:vu_cale", text: "Le coin de bronze est sur sa tablette, avec le maillet. Cette nuit, on tient encore à la main. Le coin est pour le jour où la main voudra s'en aller." },
    ],
    choices: [
      { label: "Rester le temps de voir le sablier",
        test: { dom: "discretion", diff: 10, label: "Une ombre de plus contre un vantail", help: [{ if: { voie: "leste" }, v: 15 }, { if: { has: "j:aubespin_apprenti" }, v: 10 }] },
        win: { to: "K10j_eveil_sablier" },
        lose: { fx: { flag: "j:vu_eveille" }, to: "K10j_eveil_sablier" } },
      { back: "K10j_hoquet_eveil" },
    ] },

  K10j_eveil_sablier: { act: "III", title: "Deux psaumes de sable", place: "tour", ambiance: "chateau",
    text: [
      "Le sablier est gros comme une bouteille. Il est à moitié. L'homme au levier le surveille du coin de l'œil gris, et tu vois ses lèvres remuer : il compte, ou il récite. Thibaut le sonneur a dit trois psaumes en regardant des pigeons. Celui-ci en a choisi deux, et il a mis du sable dans un verre pour ne pas se fier à sa mémoire.",
      "Tu regardes ses mains. Elles sont blanches aux jointures. La barre tire : tu le vois à ses épaules, à la veine de son cou. Il tient quarante mille personnes et une rivière avec ses deux bras, et il sue comme un homme qui porte une armoire. Voilà pourquoi il lui faut un coin.",
      { outcome: "lose", text: "Le garçon pâle baisse la tête, et te voit. Il a les yeux pleins d'eau, la bouche ouverte. Il ne peut pas crier : personne ne l'entendrait. Il regarde l'homme au levier, qui a le dos tourné. Il te regarde. Il lève lentement deux doigts à ses lèvres, et ferme la main. *Pas un mot.* Puis il retourne à son entonnoir, et il n'a rien vu." },
      { outcome: "win", text: "Personne ne lève les yeux vers la grille. Les neuf ont leurs cuves, l'homme a son sablier. Tu es une ombre dans une salle où les ombres n'ont pas de bords." },
      "Le sable arrive au col. Tu remontes, à reculons d'abord, puis vite, les souliers à la main.",
    ],
    choices: [{ back: "K10j_hoquet_eveil" }] },

  K10j_eveil_gardes: { act: "III", title: "Deux épées au milieu d'un bâillement", place: "tour", ambiance: "chateau",
    text: [
      "Ils sont à l'entrée de la ruelle, tournés vers l'esplanade. Le premier s'appuyait à la borne : il s'y appuie. Le second bâillait. Il bâille. Il a la bouche ouverte sur toutes ses dents, les yeux plissés, une main à mi-chemin de la figure, et il restera bien élevé deux psaumes durant.",
      "Tu en fais le tour. On ne regarde jamais un homme d'aussi près, d'ordinaire : il se fâcherait. Celui-ci a un bouton de fièvre au coin de la lèvre, une cicatrice blanche dans le sourcil, et, au revers du pourpoint, cousu en dedans, un petit sachet de toile avec une médaille de sainte Aure. On l'a payé pour garder une ruelle. On ne lui a pas dit contre quoi.",
      "Sa bourse est à sa ceinture, son épée au côté, un papier plié passe de sa manche.",
      { after: "j:eveil_papier", text: "C'était un ordre de poste, de la main d'un secrétaire. *Ruelle de la Tour, de dix heures à l'aube. Nul n'entre, nul ne sort, hors les gens de M. le sous-maître. Le 21, même poste, de onze heures à midi. À midi, se retirer à la porte de la Louvière, où Monseigneur chassera.* Tu l'as remis dans la manche, au même pli." },
    ],
    choices: [
      { label: "Lire le papier, et le remettre dans sa manche", hide: { has: "j:eveil_papier" }, fx: { flag: ["j:eveil_papier", "j:sait_poste_21"], ep: ["histoire", 300] }, to: "K10j_eveil_gardes" },
      { label: "Lui refermer la bouche, doucement, du bout du doigt", hide: { has: "j:eveil_bouche" }, fx: { flag: "j:eveil_bouche" }, to: "K10j_eveil_bouche" },
      { back: "K10j_hoquet_eveil" },
    ] },

  K10j_eveil_bouche: { act: "III", title: "Un pris ne se pousse pas", place: "tour", ambiance: "chateau",
    text: [
      "Tu poses l'index sous son menton, et tu lèves.",
      "Rien ne vient. La mâchoire est tiède, elle a le grain de la barbe du soir, et elle a la fermeté d'une borne. Tu appuies. Tu y mets la paume, puis l'épaule. On remuerait la Tour plus aisément que la bouche de ce garçon.",
      "Tu retires ta main. Cet homme est fait de chair, tu la sens ; mais il est à un endroit où ta force n'a pas cours. Tu peux tourner autour de lui, lire dans sa manche, compter ses cils. Tu ne peux pas lui faire avancer le petit doigt d'une ligne.",
      { after: "monde:su:girard", text: "*IL A ÉTÉ PRIS À TRENTE PAS DU BORD.* On ne tire personne hors d'un coup de cloche. Ce qui doit sortir doit être sorti avant." },
      "Il finira son bâillement tout seul, au septième coup, sans savoir qu'on l'a regardé dans les dents.",
    ],
    choices: [{ back: "K10j_eveil_gardes" }] },

  K10j_eveil_fin: { act: "III", title: "Le septième", place: "tour", ambiance: "chateau",
    text: [
      "Tu reprends ta place, le dos au mur de la ruelle. La lune a passé la girouette du Palais. La farine grise a gagné le grand cadran, et la Tour, du pied à la lanterne, luit comme un cierge qu'on aurait roulé dans le sel.",
      "Tu sais à quoi cela ressemble. {autre} te l'a écrit hier, de l'autre bord de soixante ans : *TA COLLINE LUIT.*",
      "Puis le givre s'arrête de monter. Par la porte basse, le fil gris se coupe. Tu attends, la main à plat sur la pierre.",
      "Sept. Il t'arrive par la paume, par les talons, par les dents.",
      "La chauve-souris ferme la gueule sur son moucheron et s'en va de travers. La fontaine laisse tomber son jet, d'un seul coup, dans sa vasque. La fumée reprend son chemin. En bas, la rivière se remet à porter la lune, par morceaux. Huit. Neuf. Au bout de la ruelle, un homme achève de bâiller, s'essuie l'œil, et dit quelque chose à son camarade, que tu n'entends pas.",
      "Dix. Onze. Douze. Tu ôtes le mouchoir. Tu ôtes la cire, qui vient avec un petit bruit de baiser, et le monde te rentre dans la tête par les deux côtés : un chien, une girouette, la voix du veilleur, très loin, en bas, qui chante minuit et que tout est tranquille.",
      "Sur le mur, le givre s'en va. Il s'éteint, comme une haleine sur une lame. Dans un instant, la Tour sera noire, et quarante mille personnes auront deux psaumes de moins sans que le compte en soit tenu nulle part ailleurs que dans douze bouteilles.",
      { after: "j:vu_eveille", text: "Les neuf remontent, un par un. Le plus jeune passe le dernier. Il a les yeux rouges. Il ne tourne pas la tête vers l'ombre où tu es ; mais sa main, le long de sa cuisse, fait deux doigts, et se ferme." },
      { before: "j:vu_eveille", text: "Les neuf remontent, un par un, avec des figures de garçons qui sortent d'une messe trop longue. Le plus jeune passe le dernier. Il a les yeux rouges." },
    ],
    choices: [{ label: "Regagner la cour avant eux", to: "K10j_minuit", big: true }] },

  K10j_minuit: { act: "III", title: "Pour mémoire", place: "guilde", ambiance: "chateau",
    text: [
      "La cour est à toi. Les quatre lueurs grises tournent. Tu as ta clef au poing, et l'on te laisse les dalles.",
      "Le cadran solaire n'a rien à dire à cette heure : la lune fait bien une ombre à son style, pâle, qui tombe sur le neuf, mais c'est une heure de lune, qui ne vaut rien devant un tribunal. Tu t'assois sur la marche du bas.",
      "Elle est faite de trois dalles. Celle du milieu, sous le mot *MÉMOIRE*, sonne creux au talon. Les Fondateurs ont mis là, dit-on, la première pierre de la maison ; les maçons y ont laissé, comme partout, un lit de sable. Ton couteau trouve le joint. La dalle vient d'un pouce, assez pour une main et pour un livre.",
      { after: "j:eveille_hoquet", text: "Tu as encore de la cire aux doigts, et, dans les oreilles, le souvenir d'un silence. Il faut l'écrire tant qu'il est chaud." },
      { after: "j:pris_deux_fois", text: "Tu as de la craie aux doigts, et sur un mur, à dix toises, un point que tu n'as pas fait. Il faut l'écrire." },
      { with: "josquin", text: "Josquin t'a rejoint{e}, en chemise, une chandelle à la main, qu'il abrite de sa paume. Il ne demande pas ce que tu fais sous la marche. Il s'assoit, et tient la lumière. « Mon maître dit qu'on ne doit rien cacher sous le cadran, parce que c'est le seul endroit de la maison où l'on a écrit de se souvenir. Je pense qu'il n'avait pas prévu qu'on y mettrait de la mémoire. »" },
      "Tu ouvres le Cahier.",
    ],
    choices: [{ label: "Lire, écrire, et creuser", to: "B10", big: true }] },
});

module.exports = { passages: P, extras: {
  items: {
    rosee_grise: { name: "Boulette de cire grise", kind: "divers", keep: true, price: 0, desc: "Une noisette de cire refermée sur une pincée de la rosée qui est venue au mur de la Tour, la nuit du 19. Elle luit à travers, faiblement. Elle pèse moins que rien." },
  },
} };
