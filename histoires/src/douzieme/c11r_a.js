// Le Douzième Coup · chapter 11, the one who stays, first half (act III, 20 June 601, the eve of the sixtieth Grand
// Midi). Up the hill of the Jurés, one place behind the other. The black barrier of the rue du Cadran and its
// lieutenant who reads novels (roofs, crawling under the beam, the brigadier's coat, or the assault with boxwood
// rods: `d_courtenvaux`, `r:courtenvaux_battu`) ; the grey fall and the jars of the Maîtrise (`r:glane_colline`,
// `r:jarre_volee`) ; the blue screws up to the mansion of the Maîtrise (`r:sait_line_hotel`, `r:line_billet`) ; a
// white cloak at the second fountain (`r:sait_none`) ; the copper men of the portal, fed by the fall
// (`r:entre_clef` | `r:entre_carillon` | `r:entre_mur`). Hub `K11r_cour` : the Guild as it stood on 21 June 541 at
// noon. Lunel at his window (`r:lunel_eveille`, cuff « 481 » with `monde:lunel_manchette`), the porter and his keys
// (item `trousseau_guilde`, `r:sait_arret` : the Grand Maître was taken away on the evening of the 20th and slept
// here all the same), the nine keys on nine pillows (item `clef_ansel`, flat item `lettre_ansel`, `r:lu_ansel`),
// Cliquet's bench (`r:sait_cale`), the great hall and the model (`r:vu_maquette`), the key cabinet of the treasury
// (item `clef_droit`). Noon at the sundial (M11). The butterfly door and the twelve rings are in c11r_b.
var P = {};
var UNE_PINCEE = { stock: "sable", min: 3 };
var JEHAN = { present: "jehan" };
var ROUGET = { present: "rouget" };
var CARILLON = { present: "carillon" };
var MIDI = { seen: "M11" };

Object.assign(P, {
  K11r_route: { act: "III", title: "Le vingt juin", place: "basse", ambiance: "ville", takes: "morning",
    text: [
      "Tu t'éveilles dans le creux que {autre} a laissé, et la lucarne te montre le même midi qu'hier soir. Ton corps seul a fait sa nuit. Tu comptes ton sable avant de compter tes doigts : c'est l'ordre, dans ce pays.",
      "C'est le vingt juin. Demain, à onze heures, la Régente prêtera sur le parvis un Serment qu'on prête pour la soixantième fois ; et demain, il y a soixante ans, {autre} entendra sonner onze coups. Il te reste un jour pour monter une colline.",
      "Elle commence au bout de la rue Droite, par une barrière noire. Derrière la barrière, il y a des hommes de cuivre, et derrière les hommes de cuivre une porte à douze anneaux.",
      { after: "r:lettre_coudrier", text: "Tu as, roulée contre le Cahier, la lettre d'un mort qui t'y donne rendez-vous. Il a écrit : *prenez-la.* On ne fait pas attendre un homme qui attend depuis soixante ans." },
      { with: "carillon", text: "Carillon est au pied de l'échelle, où tu l'as laissé. « Carillon a compté. Vous avez dormi six heures et un quart. C'est régulier. » La tête ronde pivote vers la colline. « Aujourd'hui, Carillon rentre. Il préviendra la loge. »" },
      { with: "rouget", text: "Rouget sort de sa glène avec des brins de chanvre plein les cheveux. Il regarde la lucarne, puis toi. « Je m'y ferai jamais. On se couche à midi, on se lève à midi, et entre les deux on a faim trois fois. »" },
      { with: "jehan", text: "Jehan est levé depuis longtemps. Il a ciré ses bottes avec un bout de suif, par habitude de caserne, et il regarde la colline comme on regarde une maison de famille où l'on n'a jamais été reçu." },
    ],
    choices: [
      { label: "Passer par le bas quartier, et lire les portes", hide: { seen: "K11r_portes" }, to: "K11r_portes" },
      { label: "Monter à la barrière", to: "K11r_barriere", big: true },
    ] },

  K11r_portes: { act: "III", title: "Vingt-deux portes", place: "basse", ambiance: "ville", fx: { ep: ["histoire", 300] },
    text: [
      "Hier, tu as regardé les rues. Ce matin, tu regardes les maisons. Tu prends par la ruelle du Lavoir, qui est la plus pauvre du port, et tu pousses chaque porte du bout du pied, l'une après l'autre, avec la certitude du métier : une porte dit toujours quelque chose.",
      { if: { has: "monde:placard_cire" }, text: "La troisième cède. Sur la table, cinq écuelles, cinq cuillers, une miche entamée ; autour de la table, cinq tabourets, et personne dessus. Dans la maison suivante, un berceau, la couverture rejetée. Dans celle d'après, un chat pris au milieu d'un bâillement, tout seul, devant une chaise vide." },
      { if: { has: "monde:placard_cire" }, text: "Tu en comptes vingt-deux jusqu'au lavoir, et quatorze sont vides. Sur les linteaux des quatorze, à hauteur de main de femme, quelqu'un a tracé à la craie une petite oreille. Le signe a passé de voisine à voisine, la nuit du vingt au vingt et un, plus vite qu'un placard." },
      { if: { has: "monde:placard_cire" }, text: "Tu poses le doigt sur une oreille de craie. Elle a soixante ans et elle est d'avant-hier. La Chronique appelle ces gens-là les Sourds, et raconte qu'on les dispersa. Elle oublie de dire qu'ils sont sortis d'ici sur leurs jambes, avec leurs enfants sur le bras, parce que deux apprentis avaient porté une corbeille." },
      { if: { not: { has: "monde:placard_cire" } }, text: "Elles sont pleines. Une femme secoue une nappe à sa fenêtre, et les miettes tiennent en l'air sous la nappe. Un vieux se rase devant un tesson de miroir, le rasoir à mi-joue. Cinq personnes sont à table autour d'une miche, la cuiller levée, la tête tournée vers la colline." },
      { if: { not: { has: "monde:placard_cire" } }, text: "Tu en comptes vingt-deux jusqu'au lavoir, et pas une chaise vide. La cloche a sonné pour les palais et pour les soupentes du même métal, et la ruelle du Lavoir l'a entendue aussi bien que la Ville-Haute." },
      { with: "rouget", text: "Rouget a tendu la main vers la miche, et l'a retirée. « On prend pas sur une table où y a du monde, dit-il. C'est la règle. Même la Courtepaille la tient. »" },
    ],
    choices: [{ label: "Prendre la rue Droite", to: "K11r_barriere", big: true }] },

  K11r_barriere: { act: "III", title: "Dix-neuf jours de garde", backName: "la barrière noire", place: "basse", ambiance: "ville",
    text: [
      { first: true, text: "La barrière a gardé ses madriers, ses douze piques, et sa bourgeoise en robe gorge-de-pigeon qui a le menton posé dessus depuis soixante ans. Le lieutenant est à cheval sur sa chaise. Il a changé de tome." },
      { first: true, text: "Tu prends tes mesures du coin de la rue. La barrière tient d'un mur à l'autre, à hauteur de poitrine ; dessous, il reste trois pieds de jour, encombrés de jupes et de souliers à boucle. À main gauche, la maison d'un cirier a une gouttière de plomb qui monte jusqu'au chéneau. Les gardes regardent vers le bas, d'où vient ce qui vit. Le lieutenant regarde sa page." },
      { first: true, with: "carillon", text: "Carillon s'est arrêté à l'angle. « La Maîtrise donne cent pincées de Carillon. Carillon a entendu, hier. Il passera par où vous passerez, trois pas derrière. » Il pose trois doigts à plat sur sa grille, pour tenir sa clochette." },
      { first: true, with: "jehan", text: "« Je passe par les cours, dit Jehan. J'ai fait cette garde un hiver, je sais les portes de derrière. Rendez-vous à la première fontaine. Si Courtenvaux me voit de dos, il me nomme. »" },
      { again: true, text: "La barrière noire, les douze piques, le lieutenant et son livre." },
    ],
    choices: [
      { label: "La gouttière du cirier, et les toits jusqu'à la fontaine", test: { dom: "discretion", diff: 0, label: "Monter sans faire chanter le plomb", help: [{ if: { voie: "leste" }, v: 15 }, { if: { voie: "coureur" }, v: 5 }] },
        win: { fx: { ep: ["perso", 400] }, to: "K11r_toits" }, lose: { to: "K11r_courtenvaux" } },
      { label: "Dessous : à quatre pattes entre les familles prises", test: { dom: "discretion", diff: 5, label: "Passer pendant qu'il tourne la page", help: [{ if: ROUGET, v: 10 }, { if: { voie: "leste" }, v: 10 }] },
        win: { fx: { ep: ["perso", 400] }, to: "K11r_dessous" }, lose: { to: "K11r_courtenvaux" } },
      { label: "Endosser la casaque du brigadier, un pli à la main", hide: { not: { item: "casaque_garde" } }, test: { dom: "social", diff: 5, label: "Payer d'audace", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { voie: "tetu" }, v: 5 }] },
        win: { fx: { flag: "r:barriere_casaque", ep: ["perso", 400] }, to: "K11r_rue_haute" }, lose: { to: "K11r_courtenvaux" } },
      { label: "Marcher droit sur la chaise", to: "K11r_courtenvaux" },
    ] },

  K11r_toits: { act: "III", title: "Les tuiles de 541", place: "guilde", ambiance: "ville", fx: { flag: "r:vu_fenetre_line" },
    text: [
      "Le plomb tient. Un chéneau, un genou, et tu es couché{e} sur des tuiles que le soleil d'un autre siècle chauffe encore. En bas, une page se tourne.",
      "Tu vas de faîte en faîte, à quatre pattes. À la troisième maison, les toits changent de couleur. Quelque chose tombe. Tu tends la main : c'est une farine fine, sans poids, qui descend droit dans un air sans vent, depuis la hauteur de la Tour, et qui luit un instant en se posant. Les chéneaux en sont pleins à ras bord. Il en est tombé là soixante ans.",
      "D'ici, tu vois la colline comme on voit un plat sur une table. La rue du Cadran monte, grise, entre ses fontaines, où des manteaux blancs se tiennent de cent pas en cent pas. Au bout, un grand portail. À main droite, une esplanade plantée d'ormes, et sur l'esplanade un hôtel à fronton, bâti en pierre de l'an 580 au milieu de la pierre de l'an 400 : la Maîtrise des Sables s'est logée chez les dormants.",
      "Dans une ville où rien ne remue, l'œil va seul à ce qui remue. Au second étage de l'hôtel, il y a une fenêtre à barreaux, et derrière les barreaux un coude qui va et vient, du mouvement court et têtu de quelqu'un qui lime.",
      { after: "r:piste_vis", text: "Des vis bleues, de cent pas en cent pas. Tu sais à présent au pied de quel mur tombe la dernière." },
    ],
    choices: [{ label: "Te laisser glisser dans une cour, au-delà de la fontaine", to: "K11r_rue_haute", big: true }] },

  K11r_dessous: { act: "III", title: "À hauteur de genou", place: "guilde", ambiance: "ville",
    text: [
      "À hauteur de genou, l'an 541 est une forêt de bas blancs. Tu t'y enfonces sur les coudes. Les jupes ont la raideur du bois, et il faut les contourner : un pli de taffetas pris depuis soixante ans t'arrêterait comme une grille.",
      "Un petit garçon est assis par terre entre les jambes de son père. Il tient un sucre d'orge qu'il a léché d'un seul côté, et il te regarde passer, ou il regarde l'endroit où tu passes, de ses yeux qui n'ont pas cillé depuis le règne de la reine Mahaut. Plus loin, un chien d'aveugle a la patte levée contre une borne.",
      "Le madrier est au-dessus de ta nuque. Tu vois douze paires de bottes noires, cirées du matin, et les quatre pieds d'une chaise. Une main pend sous la chaise, avec un livre au bout, un doigt dedans. Tu lis le dos à l'envers : *Le Chevalier de Brézolles, ou la Botte de Hautgué. Tome troisième.*",
      "La main remonte. Une page se tourne. Tu passes pendant qu'elle se tourne, et tu te relèves dix pas plus haut, derrière une marchande d'oublies, avec du gris plein les manches.",
      { with: "carillon", text: "Carillon a suivi, à plat, les bras le long du corps, avec un bruit de casserole qu'on traîne sur du sable. Le lieutenant a levé la tête. Il a regardé la bourgeoise au menton posé, d'un air de reproche, et il a repris sa lecture." },
    ],
    choices: [{ label: "Secouer tes manches, et monter", to: "K11r_rue_haute", big: true }] },

  K11r_courtenvaux: { act: "III", title: "Le premier événement", place: "basse", ambiance: "ville", fx: { meet: "courtenvaux" },
    text: [
      { first: true, text: "« Halte. » La voix vient de la chaise, sans hâte. Il a levé un doigt, pour qu'on le laisse finir sa phrase, et il la finit. Puis il ferme le livre sur son pouce." },
      { first: true, text: "Il a vingt-deux ans, une moustache blonde qui n'a pas encore pris son parti, une casaque neuve, et sur toute la figure l'ennui d'un garçon bien né qu'on a mis à garder une rue. Les douze piques se sont tournées vers toi. Il les arrête d'un mouvement du menton." },
      { first: true, text: "« Lieutenant de Courtenvaux. Je tiens cette barrière depuis dix-neuf jours, contre des gens pris depuis soixante ans, qui ont eu la bonté de ne rien tenter. Vous êtes mon premier événement. Ayez la grâce de rester où vous êtes : mes hommes courent mal, cela finirait par une pique dans un mollet, et c'est une fin commune. »" },
      { first: true, text: "Il te considère de la tête aux pieds, avec la curiosité d'un lecteur qui rencontre enfin un personnage. « La consigne dit de vous ôter votre sable et de vous jeter au canal. C'est une consigne de sergent. J'en ai une meilleure, que je tiens d'un auteur. » Il montre, contre le madrier, deux baguettes de buis. « On tirait à cela, sur cette colline. Trois touches. Donnez-m'en trois, et je lisais : on est sourd quand on lit. Recevez-les, et vous payez l'amende, deux pincées, pour la forme ; après quoi je lirai tout de même, puisque j'aurai eu mon assaut. »" },
      { first: true, text: "Un sergent à poil gris lève les yeux au ciel de 541, qui ne lui répond rien." },
      { again: true, text: "Le lieutenant de Courtenvaux, sa chaise, son tome troisième, ses deux baguettes de buis." },
    ],
    choices: [
      { label: "Prendre une des deux baguettes", hide: { duel: "d_courtenvaux" }, to: "K11r_assaut", big: true },
      { label: "Payer l'amende sans tirer", hide: { duel: "d_courtenvaux" }, if: UNE_PINCEE, why: "Il te faudrait de quoi payer, et de quoi marcher ensuite.", fx: { stock: { sable: -2 }, flag: "r:amende_payee" }, to: "K11r_amende" },
      { label: "« J'ai un papier à porter à Son Altesse. Elle l'attend. »", hide: { any: [{ not: { has: "r:regente_parle" } }, { duel: "d_courtenvaux" }] }, fx: { flag: ["r:barriere_altesse", "r:courtenvaux_note"] }, to: "K11r_altesse" },
    ] },

  K11r_assaut: { act: "III", title: "Trois touches, sur le pavé", place: "basse", ambiance: "ville", duel: "d_courtenvaux", duelLabel: "Saluer, comme dans les livres",
    text: [
      "Il ôte sa casaque, la plie en quatre, la pose sur la chaise, et pose le livre dessus, ouvert, à plat, pour garder la page. Ses hommes font le cercle, entre un notaire et une nourrice qui regardent ailleurs depuis soixante ans.",
      "« Je dois vous prévenir que j'ai appris dans un roman. L'auteur n'avait jamais tiré, je le crains. Il fait dire à son héros : *je romps, je feins, je me fends.* J'ai fait dans cet ordre pendant deux ans, devant une glace. La glace n'a jamais riposté. »",
    ],
    choices: [{ back: "K11r_courtenvaux" }] },

  K11r_courtenvaux_gagne: { act: "III", title: "Dans le tome deux", place: "guilde", ambiance: "ville",
    text: [
      "« Trois. » Il le dit lui-même, avant le sergent. Il se frotte les côtes, et il a l'air d'un homme à qui l'on vient d'apporter une lettre attendue depuis l'enfance.",
      "« J'ai été battu sur le pavé, par quelqu'un des champs, devant douze témoins qui se tairont puisque je les commande. C'est dans le tome deux, à la page de l'auberge. Je croyais que cela n'arrivait qu'aux autres. » Il reprend ta baguette, et la range avec la sienne contre le madrier. « Elles sont à deux apprentis de 541, qui montaient à l'assaut. Je les leur ai empruntées. Je tiens à les rendre. »",
      "Il remet sa casaque, bouton par bouton. « À la deuxième fontaine, vous trouverez les manteaux blancs. Ceux-là ont passé l'âge des romans. Prenez par les cours. » Il se rassoit, ouvre son livre, et tourne sa chaise vers le bas de la rue, le dos à la colline. « Sergent. Il est passé quelqu'un ? »",
      "« Personne, mon lieutenant », dit le sergent, d'une voix de mur.",
    ],
    choices: [{ label: "Passer sous le madrier, debout cette fois", to: "K11r_rue_haute", big: true }] },

  K11r_courtenvaux_perdu: { act: "III", title: "Pour la forme", place: "guilde", ambiance: "ville",
    text: [
      "La troisième te prend au creux de l'épaule. Il rompt d'un pas, salue, et rougit de plaisir jusqu'aux oreilles.",
      "« Je romps, je feins, je me fends. Il avait donc tiré, cet homme-là ! Je lui dois des excuses. » Il sort de sa poche un cornet de fer-blanc, au poinçon de la Maîtrise, et le tient sous ton sablier. « Deux pincées. La consigne dit *tout*. La consigne n'a pas tiré avec vous. »",
      "Le gris coule dans le cornet. Il le referme, l'étiquette, et te le montre, pour que tu voies qu'il écrit *amende* et rien de plus. Puis il tourne sa chaise vers le bas de la rue, le dos à la colline, et rouvre son tome. Le sergent à poil gris regarde ses bottes.",
    ],
    choices: [{ label: "Passer sous le madrier, l'épaule en feu", to: "K11r_rue_haute", big: true }] },

  K11r_amende: { act: "III", title: "Sans tirer", place: "guilde", ambiance: "ville",
    text: [
      "Tu tends ton sablier. Il a un mouvement de recul, comme si tu lui avais offert de l'argent.",
      "« Vous payez. » Il sort un cornet de fer-blanc, y laisse couler tes deux pincées, et l'étiquette avec tristesse. « On m'avait dit que les glaneurs avaient du sang. On m'avait dit aussi que cette garde serait instructive. Je vois que l'on m'a dit beaucoup de choses. »",
      "Il tourne sa chaise vers le bas de la rue et rouvre son livre. Tu passes sous le madrier. Derrière toi, sans lever la tête, il ajoute : « Si l'on vous reprend là-haut, dites que vous avez forcé la barrière. Cela me fera un rapport. »",
    ],
    choices: [{ label: "Monter", to: "K11r_rue_haute", big: true }] },

  K11r_altesse: { act: "III", title: "Les gens de Son Altesse", place: "guilde", ambiance: "ville",
    text: [
      "Le pouce sort du livre. Le lieutenant de Courtenvaux a cessé de s'ennuyer, et cela ne l'embellit pas.",
      "« Son Altesse. » Il regarde tes sabots, ton sac, tes mains. « L'écriteau dit : *passent les gens de Son Altesse.* Il ne dit pas à quoi on les reconnaît. Si je vous arrête et que vous disiez vrai, je garderai des barrières jusqu'à ma retraite. Si je vous laisse et que vous mentiez, ce sont les manteaux blancs qui vous auront sur les bras, et je leur dois bien cela. »",
      "Il tire un crayon de sa botte, et il écrit, sur la page de garde du tome troisième, ton signalement, en six lignes, d'une écriture de collège. « Pour mon rapport de ce soir. Monseigneur le Maître des Sables aime à savoir qui monte. » Il lève le madrier lui-même, d'une main. « Passez. Je vous préférais en événement. »",
    ],
    choices: [{ label: "Passer, avec six lignes dans le dos", to: "K11r_rue_haute", big: true }] },

  K11r_rue_haute: { act: "III", title: "Ce qui tombe", backName: "la rue du Cadran", place: "guilde", ambiance: "ville", hub: true, fx: { stock: { sable: -1 }, flag: "r:passe_barriere" },
    text: [
      { first: true, text: "Au-delà de la barrière, la rue du Cadran est à toi et à ceux d'il y a soixante ans. Les familles montent toujours, en habits neufs, la tête levée ; tu montes entre elles, et tu es le seul bruit de la rue." },
      { first: true, text: "Le gris commence à la troisième maison. Il tombe de plus haut que les toits, droit, lent, dans une clarté sans ombre, et il luit un instant en touchant le pavé. Il a poudré les chapeaux, les épaules, le dessus des mains. Une jeune femme en porte sur les cils, comme une mariée de janvier." },
      { first: true, text: "Tu te retournes. Tes pas sont marqués depuis la troisième maison, nets, un par un. Ils y seront encore dans un an : sur cette colline, on est suivi par soi-même." },
      { first: true, text: "De chaque côté, devant les portes, la Maîtrise a rangé des jarres de verre vert, hautes d'une coudée, bouchées de cire noire. Entre les jarres, le pavé est peigné au râteau, par carrés. On récolte cette rue comme on vendange un coteau, et la barrière d'en bas est la haie du vigneron." },
      { first: true, text: "Sous ta chemise, ton sablier chauffe. Il file, ici, deux grains pour un." },
      { first: true, with: "carillon", text: "Carillon pose ses pieds dans tes traces, exactement, pour n'en pas laisser d'autres. Du gris est entré par sa grille. Dans sa poitrine, la lueur a doublé. « Carillon n'avait pas mangé depuis vingt et un mille jours, dit-il. Il le constate. »" },
      { first: true, with: "jehan", text: "Jehan sort d'un porche, à la première fontaine, de la poussière de cave plein les épaules. Il regarde le gris tomber dans sa main ouverte. « On nous en donnait une pincée par semaine, de solde. On se battait pour la garde de cette rue. Je sais pourquoi, à présent. »" },
      { again: true, text: "La rue grise, ses familles poudrées, ses jarres vertes. Plus haut, un manteau blanc à la fontaine, et le portail." },
    ],
    choices: [
      { label: "Ce gris, puisqu'il en tombe", to: "K11r_neige" },
      { label: "Les vis bleues, de cent pas en cent pas", hide: { any: [{ not: { has: "r:piste_vis" } }, { seen: "K11r_vis" }] }, to: "K11r_vis" },
      { label: "Le manteau blanc de la deuxième fontaine", hide: { seen: "K11r_blanc_dit" }, to: "K11r_blanc" },
      { label: "Le grand portail, au bout de la rue", to: "K11r_portail", big: true },
    ] },

  K11r_neige: { act: "III", title: "À la pelle", place: "guilde", ambiance: "ville",
    text: [
      { first: true, text: "Tu t'accroupis, et tu y mets la main. C'est tiède, plus fin que la cendre, et cela coule entre les doigts avec une paresse de mercure. Dans ta paume, cela luit ; puis la lueur baisse, de la même façon que baisse une braise qu'on a sortie du feu." },
      { first: true, text: "Tu as glané six ans à la cuiller. Tu as vu deux hommes s'ouvrir la figure pour un dé à coudre. Il y en a ici de quoi charger des tombereaux, et la Maîtrise le laisse dehors, au râteau, sous la garde d'un lecteur de romans." },
      { first: true, text: "Tu comprends pourquoi en regardant ta main, où le gris achève de s'éteindre. Tombé du matin, il meurt à l'air en un quart d'heure. Il lui faut du verre, et épais : les jarres vertes, les cuves de Roquebise, la fiole de Line. Ce qu'on vend à la lisière au prix de l'or n'est que ceci, mis en bouteille à temps." },
      { first: true, after: "monde:lu:sueur", text: "*Chaque souffle retenu sous la cloche rend son grain.* {autre} te l'a écrit hier. Tu lèves les yeux vers la jeune femme aux cils poudrés. Elle a la bouche un peu ouverte. Ce qui tombe sur elle, c'est ce qu'elle n'a pas eu." },
      { again: true, text: "Le gris tombe. Les jarres attendent, la cire au col." },
    ],
    choices: [
      { label: "Tenir ta fiole débouchée sous la chute, le temps qu'il faut", hide: { has: "r:glane_colline" }, fx: { stock: { sable: 3 }, flag: "r:glane_colline", ep: ["perso", 300] }, to: "K11r_neige" },
      { label: "Faire sauter la cire d'une jarre, et te servir", hide: { has: "r:jarre_volee" }, fx: { stock: { sable: 7 }, flag: "r:jarre_volee" }, to: "K11r_neige" },
      { back: "K11r_rue_haute" },
    ] },

  K11r_vis: { act: "III", title: "La dernière vis", place: "guilde", ambiance: "ville", fx: { flag: "r:sait_line_hotel", ep: ["histoire", 400] },
    text: [
      "Tu en ramasses quatre entre la deuxième fontaine et le portail. Ce sont des vis de platine, longues comme un grain de riz, revenues au bleu de gorge de pigeon : on bleuit ainsi à Trois-Noyers, dans une boutique à quarante horloges, et nulle part ailleurs. Elles sont posées au milieu de la chaussée, dans le gris, où une chaise à porteurs a laissé ses deux ornières.",
      "Les ornières laissent le portail de la Guilde à main gauche et tournent vers l'esplanade. Tu les suis d'orme en orme. L'hôtel de la Maîtrise a un perron, quatre gardes noirs sur le perron, et un mur neuf, lisse, où un lézard ne trouverait pas à s'accrocher.",
      "La cinquième vis est au pied du mur, sous une fenêtre du second, qui a des barreaux. Tu la ramasses. De là-haut descend un petit bruit régulier, celui d'une lime douce sur du laiton. Il s'arrête.",
      "Quelque chose tombe dans le gris, à un pied de ton sabot, sans bruit. C'est une sixième vis. On a enfilé dessus un papier roulé, mince comme une paille.",
    ],
    choices: [{ label: "Dérouler le papier, le dos au mur", to: "K11r_line_billet", big: true }] },

  K11r_line_billet: { act: "III", title: "Un très beau Cahier", place: "guilde", ambiance: "ville", fx: { flag: "r:line_billet", ep: ["perso", 500] },
    text: [
      "L'écriture est petite, droite, serrée, d'une main qui a gravé des platines pendant cinquante ans et qui écrit comme elle grave.",
      "*Tu as mis le temps. Reste en bas : ils sont quatre sur le perron, et l'on me nourrit bien. Il m'a fait monter un établi, pour que je lui refasse un Cahier. Je lui en fais un très beau, qui n'écrira nulle part. Il s'en apercevra dans trois jours, et dans trois jours cela n'aura plus d'importance pour personne.*",
      "*Demain on me porte au parvis, dans ma chaise, pour le Serment : il veut m'avoir sous la main à midi. C'est là que tu me trouveras. D'ici là, fais ce que tu es monté{e} faire, et laisse une vieille femme limer.*",
      "*Avale ce papier. Celui de la Maîtrise est du chiffon, il passe très bien.*",
      "Tu lèves les yeux. Derrière les barreaux, il y a deux loupes relevées sur un front, et dessous une figure qui te regarde une seconde, sans un signe, comme on vérifie qu'un rouage est en place. Puis la lime reprend.",
      { after: "r:message_girard", text: "Tu as dans la tête six mots d'un garçon de quatorze ans, que tu dois à cette femme. Ils attendront demain, eux aussi. On ne les crie pas à une fenêtre." },
    ],
    choices: [{ label: "Avaler le papier, et redescendre vers la rue", to: "K11r_rue_haute", big: true }] },

  K11r_blanc: { act: "III", title: "Le manteau blanc", place: "guilde", ambiance: "ville",
    text: [
      "Il est assis sur la margelle de la deuxième fontaine, les pieds dans le gris, et il fourbit le fer de sa hallebarde avec un coin de son manteau. Le jet de la fontaine se tient debout derrière lui, raide, clair, comme une tige de verre.",
      "C'est un sergent de la Régente, soixante ans, la moustache en brosse, le nez d'un homme qui a monté des gardes par tous les temps. Il t'a vu{e} venir de quarante pas. Il a d'abord fini son fer. Sur ce pavé, personne ne se cache de personne.",
      "« Ça glane. » Il crache dans le gris, du côté de la barrière noire. « Les corbeaux d'en bas t'ont laissé passer, ou tu leur es passé dessous. Dans les deux cas, ça me les fait aimer un peu moins. Qu'est-ce que tu viens ramasser, chez Son Altesse ? »",
    ],
    choices: [
      { label: "Lui répondre en face", test: { dom: "social", diff: 0, label: "Parler à un vieux soldat", help: [{ if: { has: "r:veilleurs_amis" }, v: 15 }, { if: { has: "r:regente_parle" }, v: 20 }, { if: { voie: "diseur" }, v: 10 }, { if: { voie: "tetu" }, v: 5 }] },
        win: { fx: { flag: ["r:blanc_parle", "r:sait_none"], ep: ["histoire", 500] }, to: "K11r_blanc_dit" }, lose: { to: "K11r_blanc_dit" } },
      { back: "K11r_rue_haute" },
    ] },

  K11r_blanc_dit: { act: "III", title: "Tous les vingt juin", place: "guilde", ambiance: "ville",
    text: [
      { outcome: "win", text: "Tu lui dis que tu montes voir, la veille, ce que tout le royaume viendra saluer le lendemain, et que tes poches resteront comme elles sont. Il te regarde longtemps, puis il se pousse d'une fesse sur la margelle." },
      { outcome: "win", after: "r:regente_parle", text: "« On t'a vu{e} à l'abbaye. On nous a donné ta figure. *S'il monte quelqu'un des champs avec un papier, qu'on me l'amène.* Elle l'a dit elle-même, à cheval, sans se tourner. » Il baisse la voix. « Elle couche au Palais ce soir. C'est là qu'on amène. »" },
      { outcome: "win", text: "« Son Altesse entre à la brune par la Passerelle, avec trois cents chevaux qui passeront à la file. Demain, onze heures, le Serment, sur le parvis. Soixante fois qu'on le prête. Mon père l'a gardé vingt fois, moi dix-neuf, et la Reine n'a pas vieilli d'une heure, ce qui est plus que je ne peux dire de nous deux. »" },
      { outcome: "win", after: "r:tour_blanche", text: "« L'escalier de la Tour est à nous, par ordre exprès. Les noirs en font une jaunisse. »" },
      { outcome: "win", after: "r:tour_noire", text: "« Et l'escalier de la Tour est aux noirs, cette année. Elle l'a signé à l'abbaye. On ne discute pas un ordre. On peut le trouver bête. »" },
      { outcome: "win", text: "Il montre le portail, du menton. « Lui, là-haut, leur maître. Il monte ici tous les vingt juin, à none, à pied, sans un garde. Il passe entre les hommes de cuivre, qui ne laissent passer que lui, il reste une heure, et il redescend. Son père faisait de même, à ce qu'on raconte, et le fils a hérité de la manie avec la charge. Je l'ai vu faire dix-neuf fois. Il ne salue pas en montant. En redescendant, il salue tout le monde. »" },
      { outcome: "lose", text: "Tu lui réponds, et tu réponds trop : il a entendu des recrues mentir pendant quarante ans, et il sait le son que cela rend. Il lève une main large comme une pelle." },
      { outcome: "lose", text: "« Garde ta salive. Je ne t'ai pas vu, pour la raison que je n'ai pas envie d'écrire. File par les cours, et ne passe pas devant mes hommes d'en haut : ceux-là sont jeunes, ils aiment écrire. » Il reprend son fer. La conversation est finie depuis le mot *salive*." },
    ],
    choices: [{ back: "K11r_rue_haute" }] },
});

// ---------------------------------------------------------------- the portal, and the court
Object.assign(P, {
  K11r_portail: { act: "III", title: "Nourris de pluie", backName: "le portail de la Guilde", place: "guilde", ambiance: "ville",
    text: [
      { first: true, text: "Le portail est ouvert à deux battants, comme {autre} te l'a écrit, et l'on voit la cour au bout. La loge du portier est vide. Entre la cour et toi, deux statues de cuivre rouge ont les pieds posés à plat sur le pavé." },
      { first: true, text: "Soixante ans de chute les ont poudrées aux épaules et sur le crâne. Aux coudes et aux genoux, le bronze est net : cela travaille tous les jours. Dans leur poitrine, la lueur est grosse comme le poing. Aucun portier n'y verse plus rien ; ce qui tombe de la Tour entre par la grille en cœur, et ils s'en nourrissent comme un arbre se nourrit de pluie." },
      { first: true, text: "Le long du mur, à hauteur d'épaule, des pigeons sont arrêtés en l'air, par deux, par trois, posés sur rien. Ils dormaient sur les hommes de cuivre quand le coup est venu. Les hommes de cuivre ont repris leur ronde, et les pigeons sont restés où se trouvait l'épaule." },
      { first: true, text: "L'ovale de gauche a tourné vers toi. Il est lisse, sans un trait, et tu t'y vois tout{e} petit{e}, avec la rue grise dans le dos. Il descend, lentement, à la hauteur de tes mains." },
      { again: true, text: "Le portail, les deux hommes de cuivre, les pigeons posés sur rien." },
    ],
    choices: [
      { label: "Ouvrir la main sur la clef de bronze", hide: { not: { item: "clef_apprenti" } }, fx: { flag: "r:entre_clef" }, to: "K11r_entree", big: true },
      { label: "Laisser Carillon te prendre par la manche", hide: { not: CARILLON }, fx: { flag: "r:entre_carillon", conf: { carillon: 10 } }, to: "K11r_entree", big: true },
      { label: "Faire le tour, et prendre le mur du couchant par son lierre", test: { dom: "nature", diff: 0, label: "Grimper entre deux rondes", help: [{ if: { voie: "leste" }, v: 15 }, { if: { voie: "coureur" }, v: 10 }] },
        win: { fx: { flag: "r:entre_mur", ep: ["perso", 400] }, to: "K11r_entree" }, lose: { fx: { flag: ["r:entre_mur", "r:mur_chute"], pv: -3 }, to: "K11r_entree" } },
      { back: "K11r_rue_haute" },
    ] },

  K11r_entree: { act: "III", title: "De la maison", place: "guilde", ambiance: "chateau",
    text: [
      { if: { has: "r:entre_clef" }, text: "L'ovale trouve la clef. Elle est verte, piquée, mangée aux dents par soixante ans de terre, et l'on y distingue encore un balancier dans l'anneau. La tête de cuivre se relève et se retourne vers la rue. Tu as cessé d'exister : tu es de la maison." },
      { if: { has: "r:entre_clef" }, text: "{autre} l'a gagnée à la Foire, sous un dais, il y a neuf jours et il y a soixante ans, puis l'a couchée dans la terre pour toi. Tu passes entre les deux statues avec le prix d'un{autre:e} autre dans le poing, et la cour s'ouvre." },
      { if: { all: [{ has: "r:entre_carillon" }, { not: { has: "r:entre_clef" } }] }, text: "Carillon lève la main, et te prend la manche entre deux doigts, à l'endroit où il a pris celle du notaire. « Carillon rentre. Carillon ramène. » *Ding.*" },
      { if: { all: [{ has: "r:entre_carillon" }, { not: { has: "r:entre_clef" } }] }, text: "Les deux ovales se tournent vers la clochette, ensemble. Quelque chose passe, de cuivre à cuivre, qui ressemble au salut de deux compagnons du même atelier. Ils s'écartent d'un demi-pas. Tu passes, tenu{e} par la manche comme un enfant qu'on mène à l'école, avec une tache d'huile de la taille d'un liard sur ton drap." },
      { if: { all: [{ has: "r:entre_mur" }, { not: { has: "r:mur_chute" } }] }, text: "Tu comptes leurs pas, du coin d'une borne. Quarante de l'angle à la poterne, quarante pour revenir ; ils se croisent au milieu et se tournent le dos pendant vingt pas. Le lierre de 541 est pris jusqu'à la dernière feuille, raide comme du fer forgé : il fait la meilleure échelle que tu aies eue de ta vie. Tu es sur le chaperon au dix-huitième pas, et de l'autre côté au vingtième." },
      { if: { has: "r:mur_chute" }, text: "Tu comptes leurs pas, et tu comptes juste. Le lierre de 541 tient comme du fer. C'est ton sabot qui trahit, sur le chaperon, dans un pouce de gris fin comme du savon. Tu tombes de huit pieds, à plat, dans un carré de simples que personne n'a sarclé depuis la reine Mahaut." },
      { if: { has: "r:entre_mur" }, text: "Tu es dedans, en fraude, et il y a sous les arcades quelqu'un dont c'est le métier de le savoir." },
    ],
    choices: [
      { label: "Entrer dans la cour", hide: { all: [{ has: "r:entre_mur" }, { not: { has: "r:entre_clef" } }, { not: { has: "r:entre_carillon" } }] }, to: "K11r_cour", big: true },
      { label: "Attendre qu'il tourne le coin, et traverser", hide: { any: [{ not: { has: "r:entre_mur" } }, { has: "r:entre_clef" }, { has: "r:entre_carillon" }] },
        test: { dom: "discretion", diff: 0, label: "Marcher dans son dos", help: [{ if: { voie: "leste" }, v: 10 }, { if: ROUGET, v: 5 }] },
        win: { fx: { ep: ["perso", 300] }, to: "K11r_cour" }, lose: { fx: { stock: { sable: -2 }, flag: "r:tenu_cuivre" }, to: "K11r_ronde" } },
    ] },

  K11r_ronde: { act: "III", title: "Trois doigts", place: "guilde", ambiance: "chateau",
    text: [
      "Il a fait demi-tour au milieu de l'arcade, pour une raison de ronde qui date des Fondateurs. Tu vois venir l'ovale, la lueur, la main à trois doigts. Elle se pose sur ton épaule, sans peser.",
      "Tu avais une phrase dans la tête. Elle s'arrête. Ton pied gauche est en l'air et te paraît très loin. La peur elle-même s'est arrêtée. Tu attends la suite d'une chose que tu allais penser, et la suite ne se presse pas. C'est doux, et c'est ce qu'il y a de terrible.",
      "Contre ta poitrine, quelque chose brûle. Ton sablier s'emballe, deux pincées d'un seul trait, comme une bête qu'on étrangle. La chaleur te rend ta phrase. Tu te laisses tomber, tu roules sous le bras de cuivre, et tu cours.",
      "Il reprend sa ronde, du même pas. Il a tenu, on s'est délié, la règle est sauve : ses ordres n'ont rien prévu pour ceux qui portent leur heure sur eux. Tu as l'épaule froide, à l'endroit des trois doigts, et elle le restera jusqu'au soir.",
    ],
    choices: [{ label: "Reprendre ton souffle sous une arcade", to: "K11r_cour", big: true }] },

  K11r_cour: { act: "III", title: "La cour, sous son drap", backName: "la cour de la Guilde", place: "guilde", ambiance: "chateau", hub: true,
    text: [
      { first: true, text: "C'est la cour de {autre}. Tu la reconnais comme on reconnaît une chambre qu'on vous a décrite dans une lettre : le carré de dalles, les quatre logis à arcades, le cadran solaire sur ses trois marches, et, par-dessus le toit de l'est, la paroi." },
      { first: true, text: "On t'avait écrit le silence. Il est d'une autre sorte que prévu. Dans la ville basse, dès qu'on avance, le coup sort des murs. Ici, à vingt toises de la cloche, on avance et l'on n'entend rien : à chaque pas, quelque chose vous passe au travers de la poitrine, sans bruit, comme on passe soi-même sous une porte trop basse." },
      { first: true, text: "Le gris est aux chevilles. Il tombe serré, et la cour a l'air d'un salon qu'on a mis sous un drap en partant pour la campagne." },
      { first: true, text: "La maison s'était vidée pour la fête. Tu fais le compte de ce qui reste. Un balai contre un pilier. À une fenêtre du premier, un vieillard en bonnet, la figure levée. Sous l'arcade du nord, un homme assis sur un tabouret, le menton sur la poitrine. Et un homme de cuivre, qui fait le tour des arcades, d'un pas égal, sa lueur au cœur." },
      { first: true, text: "Dans le gris, une trace, une seule, mille fois refaite, qui a fini par creuser sa rigole. Elle va du portail à la porte du fond, de la porte du fond à l'escalier du nord, et elle s'en retourne. Ce sont des souliers fins, étroits, avec, sur la gauche, le trou d'une canne." },
      { again: true, text: "La cour sous son drap gris, le cadran solaire, la paroi. L'homme de cuivre tourne." },
      { first: true, with: "rouget", text: "Rouget parle bas, pour la première fois depuis que tu le connais. « Y a rien à prendre, ici. Je le sens. C'est tout à quelqu'un. »" },
      { first: true, with: "jehan", text: "Jehan a ôté son bonnet. Il regarde l'escalier du nord. « C'est là qu'il logeait. On nous le montrait de l'esplanade, par-dessus le mur, aux nouveaux : *la fenêtre du Maudit.* On nous faisait cracher. »" },
    ],
    choices: [
      { label: "Le vieillard en bonnet, à sa fenêtre", to: "K11r_lunel" },
      { label: "L'homme au tabouret, sous l'arcade du nord", to: "K11r_portier" },
      { label: "Les arcades de l'ouest : le réfectoire, et l'escalier du dortoir", to: "K11r_refectoire" },
      { label: "Un atelier dont la porte est restée ouverte", to: "K11r_cliquet" },
      { label: "Le logis du sud : la grande salle", to: "K11r_salle" },
      { label: "Une petite porte ferrée : *Trésor et Sceau*", to: "K11r_tresor" },
      { label: "La loge du portier, où Carillon veut passer", hide: { any: [{ not: CARILLON }, { seen: "K11r_loge" }] }, to: "K11r_loge" },
      { label: "Le fond de la cour : une porte où l'on a ciselé un papillon", to: "K11r_papillon" },
      { label: "Le logis du nord : l'escalier, et la porte aux douze anneaux", to: "K11r_nord" },
      { label: "T'asseoir au pied du cadran solaire, et ouvrir le Cahier", hide: MIDI, to: "K11r_midi", big: true },
      { label: "Retourner au cadran solaire : l'ombre approche de none", hide: { not: MIDI }, to: "K11r_pas", big: true },
    ] },

  K11r_loge: { act: "III", title: "Vingt et un mille neuf cent quatorze", place: "guilde", ambiance: "chateau", fx: { conf: { carillon: 10 }, ep: ["perso", 300] },
    text: [
      "La loge tient dans l'épaisseur du portail : une chaise, un clou, une ardoise, un registre des courses. Carillon y entre comme on rentre chez soi après un voyage, en regardant d'abord si l'on a touché à quelque chose.",
      "Sur l'ardoise, la dernière ligne est de la main du portier, une main qui trouvait l'orthographe au-dessus de ses gages : *Carillon 3. Sorti le 21 de juin, onze heures et un peu, pour Mr le Grand Maître. Courait.*",
      "Carillon prend la craie entre deux doigts. Il écrit dessous, en lettres de registre, sans une bavure : *Rentré le 20 de juin. Retard : 21 914 jours.*",
      { if: { has: "r:lettre_coudrier" }, text: "Il ajoute : *Lettre remise.* Il souligne *remise* d'un trait, et repose la craie." },
      { if: { not: { has: "r:lettre_coudrier" } }, text: "Il ajoute : *Lettre en garde.* Il regarde ces mots un moment. Sa clochette tinte, fêlée, à peine." },
      "Puis il lit les lignes du dessus. « Carillon premier, sorti le 21, dix heures, pour monsieur le sous-maître. Carillon second, sorti le 21, dix heures, pour monsieur le sous-maître. Ils n'ont pas de ligne de retour. » La tête ronde pivote vers toi. « Carillon est le plus ancien messager présent. C'est une charge. Il la prend. »",
    ],
    choices: [{ back: "K11r_cour" }] },

  K11r_lunel: { act: "III", title: "Le vieillard à la fenêtre", place: "guilde", ambiance: "chateau", fx: { meet: "lunel" },
    text: [
      { first: true, text: "On monte à lui par l'escalier de la galerie. Il a quatre-vingts ans passés, un bonnet de velours, une couverture aux genoux, et la figure levée vers un soleil de 541 qui lui chauffe encore les paupières. Il a les yeux fermés. Il sourit." },
      { first: true, text: "Près de lui, sur une chaise, un livre ouvert, le signet pendant. On lui faisait la lecture. Le lecteur a posé le livre à la page, et il est parti voir la fête : on ne refuse pas cela à un garçon de quinze ans." },
      { first: true, text: "Il sourit, les yeux fermés, et le coup l'a pris quand même. La cloche se passe des yeux." },
      { first: true, if: { has: "monde:lunel_manchette" }, text: "Sur sa manchette gauche, on a écrit à l'encre, en gros : *481.* L'encre a bruni. L'écriture est penchée, et tu la connais pour l'avoir lue à neuf bornes." },
      { again: true, before: "r:lunel_eveille", text: "Le vieillard en bonnet, son soleil, son livre ouvert sur la chaise." },
      { again: true, after: "r:lunel_eveille", text: "Le vieillard a repris son sourire et son soleil. Sa main est retombée sur la couverture, ouverte, dans la forme de ton poignet." },
    ],
    choices: [
      { label: "Poser une pincée sur sa main", hide: { has: "r:lunel_eveille" }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: "r:lunel_eveille", ep: ["histoire", 600] }, to: "K11r_lunel_eveil" },
      { back: "K11r_cour" },
    ] },

  K11r_lunel_eveil: { act: "III", title: "Il en manque un", place: "guilde", ambiance: "chateau",
    text: [
      "Un œil s'ouvre, très bleu, puis l'autre. Il te considère avec bienveillance. « Vous êtes le petit Foliot ? Non. Vous êtes trop maigre. Qui êtes-vous ? Cela ne fait rien. Il fait bon. »",
      "Il écoute. Sa figure se dérange. « J'ai compté. Je compte toujours, c'est le métier. Onze. » Il lève ses doigts, les regarde, en cherche un. « Il en manque un. J'ai fait des horloges soixante ans, je sais aller jusqu'à douze. Où est le douzième ? »",
      { if: { has: "monde:lunel_manchette" }, text: "Son regard tombe sur sa manchette. Il lit le chiffre. Quelque chose lui revient, de loin, tout d'une pièce. « 481. On me l'a écrit pour que je m'en souvienne, et voyez, je m'en souviens. Évrard a voulu voir. Trois psaumes. » Sa bouche tremble. « C'est donc recommencé. Qui tient ? Évrard est mort. C'est le petit Melchior. Il disait : *une chambre.* »" },
      { if: { not: { has: "monde:lunel_manchette" } }, text: "Il cherche. On voit qu'il y a, derrière ce front, une chose qu'il devrait savoir, et qui reste au fond comme une barque dans le brouillard. « Cela est déjà arrivé. J'étais jeune. Il y avait un chiffre. » Il secoue la tête. « Je ne me souviens que du dernier qui m'a parlé. C'est vous, à présent. Dites-moi quelque chose dont je puisse me souvenir. »" },
      "Tu lui demandes ce qu'il a vu, de sa fenêtre, ce matin. Pour lui, c'est ce matin.",
      "« Barnabé a traversé la cour à onze heures. Je l'ai vu d'ici. Il avait sa baguette, et il n'avait pas sa chaîne. Il a levé la tête, il m'a crié, parce que je suis sourd de l'oreille gauche : *Lunel ! Si l'on vous demande, je suis allé me promener.* Soixante-dix ans, et il allait se promener du côté de la porte de fer. » L'œil bleu se voile. « Le petit de cuivre est sorti derrière lui par le portail. Il courait presque. Ils ne courent jamais. »",
      "Sa main, sur ton poignet, pèse moins qu'une feuille. « Dites au lecteur de reprendre où il s'est arrêté. C'était le chapitre des... » La pincée a fini de couler. Il a gardé la bouche ouverte sur le mot, et son sourire est revenu par-dessus, tout seul, comme l'eau reprend son niveau.",
    ],
    choices: [{ back: "K11r_cour" }] },

  K11r_portier: { act: "III", title: "L'homme au tabouret", place: "guilde", ambiance: "chateau", fx: { meet: "loquet" },
    text: [
      { first: true, text: "Il dort. Il dormait déjà, le menton sur la poitrine, les mains croisées sur une baguette à bout de bronze qu'il tient en travers de ses genoux, quand midi est venu le chercher. On entend en dormant ; la cloche l'a pris au fond de son somme, et il a soixante ans de sieste." },
      { first: true, text: "C'est un homme court, rougeaud, en livrée brune, avec des favoris et un ventre de sacristain. À sa ceinture, par un crochet, pend un trousseau gros comme une grappe. Tu regardes la baguette : les dix doigts sont noués dessus, et la main d'un pris ne s'ouvre pour personne. Le trousseau, lui, ne tient qu'à son crochet." },
      { again: true, before: "r:loquet_eveille", text: "Le portier, son tabouret, ses dix doigts sur la baguette." },
      { again: true, after: "r:loquet_eveille", text: "Le portier s'est rendormi au milieu d'un juron, qu'il achèvera un jour." },
    ],
    choices: [
      { label: "Poser une pincée sur ses mains croisées", hide: { has: "r:loquet_eveille" }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: ["r:loquet_eveille", "r:sait_arret"], ep: ["histoire", 600] }, to: "K11r_portier_eveil" },
      { label: "Décrocher le trousseau de sa ceinture", hide: { item: "trousseau_guilde" }, fx: { item: "trousseau_guilde", flag: "r:trousseau_glane" }, to: "K11r_portier" },
      { back: "K11r_cour" },
    ] },

  K11r_portier_eveil: { act: "III", title: "Le père Loquet", place: "guilde", ambiance: "chateau",
    text: [
      "« On ne reçoit pas ! » Il a dit cela avant d'ouvrir les yeux : c'est sa façon de s'éveiller depuis trente ans. Puis il les ouvre, il voit la cour, et il se lève à moitié. « Qui est-ce qui a secoué ses tapis ? Sacré nom, il y en a jusqu'aux marches ! Le Grand Maître va me faire balayer ça à la brosse à dents. »",
      "Tu lui dis que le Grand Maître est sorti. Il se rassoit, soulagé et furieux.",
      "« Sorti. Parlons-en. Hier soir, après leur séance, quatre rubans verts me l'emmènent par la poterne, entre eux, comme un coupeur de bourses. Le Grand Maître ! Je dis : *Messieurs, de quel droit ?* On me montre un papier qui a plus de cire que d'écriture. Et ce matin, à la pointe du jour, qui est-ce que je trouve à ma porte, sans chaîne, sans chapeau, de la toile d'araignée plein sa houppelande ? Lui. Il me dit : *Loquet, tu ne m'as pas vu rentrer.* Je ne l'ai pas vu. Je le dis à vous parce que vous n'êtes personne. »",
      "Il baisse la voix, par habitude de loge. « Et l'autre, le sous-maître, sort à dix heures avec ses neuf, en habit propre, la tête bandée, tous, comme pour une rage de dents. Ils se faisaient des signes avec les mains. Je dis : *C'est une mascarade ?* Pas un ne m'a répondu. Le plus petit portait un maillet dans un sac à ouvrage, je l'ai vu à la forme. On ne va pas à la fête avec un maillet. »",
      { with: "carillon", text: "Ses yeux tombent sur Carillon. Toute sa figure change. « Le troisième ! Te voilà rentré, toi. Tu as traîné. » *Ding.* « Carillon présente ses excuses à la loge. » Le portier renifle, ému, et se tourne vers toi. « Si le petit vous ramène, c'est que vous êtes en règle. Qu'est-ce qu'il vous faut ? »" },
      { if: { not: CARILLON }, text: "Il te regarde mieux. « Vous n'êtes pas d'ici, vous. Qui vous a ouvert ? » Sa main cherche la baguette. La pincée a fini de couler avant la main, et le juron qu'il commençait lui est resté dans la bouche." },
    ],
    choices: [
      { label: "« Vos clefs, père Loquet. Le Grand Maître m'envoie à son cabinet. »", hide: { any: [{ not: CARILLON }, { item: "trousseau_guilde" }] }, fx: { item: "trousseau_guilde", flag: "r:trousseau_donne" }, to: "K11r_portier_clefs" },
      { back: "K11r_portier" },
    ] },

  K11r_portier_clefs: { act: "III", title: "Celle à tête de trèfle", place: "guilde", ambiance: "chateau",
    text: [
      "Il décroche la grappe lui-même, et te la met dans la main avec le soin d'un homme qui confie son enfant.",
      "« La grosse, c'est la poterne. La plate, les communs. Celle à tête de trèfle, c'est le Trésor : n'y dérangez rien, monsieur Balancourt compte ses plumes. Pour le cabinet du Grand Maître, il n'y a pas de clef. Il n'y en a jamais eu. Si vous y êtes envoyé{e}, vous savez pourquoi. »",
      "Il bâille. « Et dites-lui, pour les tapis, que ce n'est pas moi. » Son menton retombe sur sa poitrine au milieu du bâillement. Carillon attend qu'il soit tout à fait immobile, puis il lui remet droit, sur l'épaule, un pli de sa livrée.",
    ],
    choices: [{ back: "K11r_cour" }] },

  K11r_refectoire: { act: "III", title: "Le réfectoire", backName: "le réfectoire", place: "guilde", ambiance: "chateau",
    text: [
      { first: true, text: "Trois tables longues, des bancs, des écuelles retournées sur un linge : on avait déjeuné tôt, lavé, rangé, et l'on était parti en bande, par ateliers. Il flotte encore, au-dessus de la marmite, une vapeur qui ne monte ni ne descend." },
      { first: true, text: "Au mur, le râtelier des baguettes de buis, et à côté une ardoise où l'on tient les assauts de l'année." },
      { first: true, if: { has: "monde:assaut_gagne" }, text: "La dernière ligne dit : *Le 19 de juin. Pour l'atelier du Grand Maître : trois touches à Baudouin Passavant.* Une autre main a ajouté, en dessous, d'une craie rageuse : *par quelqu'un des champs.* Tu regardes ces quatre mots avec un plaisir que tu n'avais pas prévu. Quelqu'un des champs a couché ici, mangé ici, et laissé trois bleus à un grand garçon dont l'ardoise parle encore." },
      { first: true, if: { not: { has: "monde:assaut_gagne" } }, text: "La dernière ligne dit : *Le 19 de juin. Baudouin Passavant, sur tous.* Dessous, quelqu'un a dessiné une couronne, et quelqu'un d'autre lui a ajouté des oreilles d'âne." },
      { first: true, with: "rouget", text: "Rouget a trouvé la huche. Il en sort un pain rond, le rompt, et la mie fume dans son rond à lui. « Du pain de riche, dit-il, la bouche pleine. Ils mettaient du beurre dedans. Soixante ans qu'il attend, et il est de ce matin. »" },
      { again: true, text: "Les trois tables, la marmite et sa vapeur, le râtelier." },
    ],
    choices: [
      { label: "L'escalier du dortoir", to: "K11r_dortoir" },
      { back: "K11r_cour" },
    ] },

  K11r_dortoir: { act: "III", title: "Neuf oreillers", backName: "le dortoir", place: "guilde", ambiance: "chateau",
    text: [
      { first: true, text: "Vingt lits, sous les combles, défaits à la diable : des draps en boule, un bas sur une poutre, une chandelle renversée. On s'est levé là comme on se lève un jour de fête, à coups de traversin." },
      { first: true, text: "Au fond, derrière une cloison de planches neuves, il y en a neuf autres. Ceux-là sont faits au carré, la couverture tirée sans un pli, le drap rabattu de la largeur d'une main. Sur chaque oreiller, bien au milieu, une clef de bronze est posée, l'anneau tourné vers le mur." },
      { first: true, text: "Tu restes sur le seuil, avec ce que tu sais des chambres. On pose sa clef sur son oreiller quand on la rend. Neuf garçons se sont levés, ce matin-là, en sachant qu'ils ne coucheraient plus dans cette maison ; ils l'ont su d'assez bonne heure pour faire leur lit, et ils l'ont fait bien, comme on range avant un départ dont on est fier." },
      { first: true, text: "Le neuvième lit est le plus court. La clef y est posée de travers. Sous l'oreiller, un coin de papier dépasse." },
      { again: true, text: "Les vingt lits en bataille, les neuf lits au carré, les clefs sur les oreillers." },
    ],
    choices: [
      { label: "Prendre la clef du neuvième oreiller", hide: { item: "clef_ansel" }, fx: { item: "clef_ansel", flag: "r:clef_dortoir" }, to: "K11r_dortoir" },
      { label: "Tirer le papier", hide: { seen: "K11r_ansel" }, to: "K11r_ansel" },
      { back: "K11r_refectoire" },
    ] },

  K11r_ansel: { act: "III", title: "Il n'y a pas de signe pour cela", place: "guilde", ambiance: "chateau", fx: { flag: "r:lu_ansel", ep: ["histoire", 700] },
    text: [
      "C'est une feuille d'atelier, pliée en deux. L'écriture est d'un enfant appliqué, qui tire la langue en formant ses *g*.",
      "*À ma mère, la veuve Hurel, rue de la Poulie, sous l'enseigne du Dé.*",
      "*Mère, je ne peux plus parler depuis la Saint-Marc, à cause de la cire, alors j'écris. Demain nous descendons sous la Tour avec monsieur le sous-maître. Il a dit que nous serons les seuls debout de tout le royaume, et que c'est un honneur. Il a dit de rendre nos clefs, parce qu'on n'est plus apprenti quand on a fait cela.*",
      "*C'est moi qui porte le maillet. Je suis le plus petit, je passe sous la barre. Il m'a donné une montre. Elle est très belle.*",
      "*Avant-hier, à minuit, on a fait l'essai. J'ai regardé par le soupirail. L'eau de la fontaine était debout. J'ai eu peur. Je ne l'ai dit à personne : il n'y a pas de signe pour cela dans ceux qu'on nous a appris.*",
      "*Mère, si demain à midi l'eau reste debout, mets de la cire dans tes oreilles. Je ne sais pas comment te le faire dire. Je mets cette lettre sous mon oreiller parce que je n'ai personne à qui la donner. Ton Ansel.*",
      "La lettre a soixante ans, et elle n'a jamais passé le seuil de ce dortoir. Rue de la Poulie, sous l'enseigne du Dé, une veuve a entendu onze coups. Et c'est un enfant de treize ans, avec une montre neuve dans sa poche, qui a chassé le coin.",
      "Tu regardes la feuille. Elle est plate. Elle a une adresse, et une date d'hier dans un Cahier qui sait remonter le courant.",
    ],
    choices: [
      { label: "Glisser la lettre contre le Cahier", fx: { item: "lettre_ansel" }, to: "K11r_dortoir", big: true },
      { label: "La remettre sous l'oreiller, où il l'a voulue", to: "K11r_dortoir" },
    ] },

  K11r_cliquet: { act: "III", title: "Une empreinte au noir de fumée", place: "guilde", ambiance: "chateau", fx: { flag: "r:sait_cale", ep: ["histoire", 400] },
    text: [
      { first: true, text: "L'atelier est petit, propre, plein de ce jour sans ombre. L'étau est ouvert, et vide. Sur l'établi, de la limaille de bronze, qui n'a pas terni : elle a l'éclat d'une chose limée ce matin." },
      { first: true, text: "À côté de l'étau, un dessin, coté au cheveu, d'une écriture dont les *d* penchent en arrière. Il montre un bloc long comme la main, épais d'un pouce à un bout et d'une ligne à l'autre, avec une rainure sur une face. Sur le marbre à dresser, on a laissé l'empreinte de la pièce, au noir de fumée : un coin." },
      { first: true, text: "Les limes sont le métier que {autre} a appris. Toi, tu as fendu du bois tous les hivers de ta vie. Un coin, cela s'enfonce au maillet par le gros bout, et cela se rend par le petit : un coup sec dans l'autre sens, et il saute. Celui-ci a une rainure. Une tige qu'on y engagerait par-dessous trouverait le petit bout toute seule, même dans le noir." },
      { first: true, after: "r:loquet_eveille", text: "*Le plus petit portait un maillet.* Tu as le coin sous les yeux, en noir de fumée, et le maillet dans l'oreille. Il ne manque que la barre." },
      { first: true, with: "jehan", text: "« Notre armurier disait : un coin, ça ressort par où ç'a refusé d'entrer. » Jehan mesure l'empreinte de sa main ouverte. « Ça tiendrait un pont-levis. »" },
      { again: true, text: "L'étau vide, la limaille claire, le coin en noir de fumée sur le marbre." },
    ],
    choices: [{ back: "K11r_cour" }] },

  K11r_salle: { act: "III", title: "La grande salle", backName: "la grande salle", place: "guilde", ambiance: "chateau",
    text: [
      { first: true, text: "Une nef de bois sombre, longue de quarante pas. Le gris n'y entre pas : ici, on voit les choses dans leur couleur, et cela repose comme de l'eau." },
      { first: true, text: "Au fond, sur une estrade, une table en fer à cheval et sept fauteuils. Six sont repoussés de biais, comme les laissent des hommes qui se lèvent en parlant. Celui du milieu est renversé sur le dos, les pieds en l'air. Personne ne l'a relevé de la soirée ni du lendemain matin : dans une maison où l'on ramasse une épingle, on a laissé le fauteuil du Grand Maître par terre." },
      { first: true, text: "Sur la table, devant le fauteuil renversé, une sonnette, un sablier à sable blond, et un rectangle de bois plus clair que le reste, de la taille d'un grand registre. Le registre n'y est plus. Autour du rectangle, la poussière de soixante ans ; dedans, celle de moins d'une année." },
      { first: true, text: "Aux murs, quarante et un portraits sur fond brun. Au milieu de la nef, une chose haute de dix pieds, en bois, en laiton et en verre, sans sa housse." },
      { again: true, text: "La nef, le fauteuil sur le dos, les portraits. Au milieu, la chose de dix pieds." },
    ],
    choices: [
      { label: "La chose de dix pieds", to: "K11r_maquette" },
      { label: "Le dernier portrait de la rangée", hide: { seen: "K11r_portrait" }, to: "K11r_portrait" },
      { back: "K11r_cour" },
    ] },

  K11r_maquette: { act: "III", title: "La Tour, ouverte comme un fruit", place: "guilde", ambiance: "chateau", fx: { flag: "r:vu_maquette", ep: ["histoire", 500] },
    text: [
      { first: true, text: "C'est la Tour, à un pouce pour une toise, fendue du haut en bas pour qu'on en voie le dedans. Tu en fais le tour avec le respect que tu as pour les pièges bien faits." },
      { first: true, text: "En haut, une chambre ronde, à huit baies, où pend une cloche grosse comme le poing. On y a mis un petit lit de bois blanc. De la cloche descend une corde, jusqu'à un anneau du plancher. Dessous, la vis d'un escalier : tu comptes les marches par dizaines, et tu t'arrêtes à trois cent soixante." },
      { first: true, text: "En bas, dans le massif, une salle voûtée, sans fenêtre. Un tube de verre noir figure un puits. Au-dessus du puits, une barre de laiton, longue comme ta main, arrêtée au plus bas de sa course. À son bout, un levier, avec une poignée." },
      { first: true, text: "Tu approches la main. Dans ton rond, quelque chose se décide : la petite barre remonte, d'un battement lent, puis redescend. Un fil de laiton, fin comme un cheveu, court d'elle à la cloche. Le fil tire. Là-haut, un marteau frappe, d'un tintement de verre. Tu retires la main, et la barre s'arrête au plus bas. Ton cœur aussi, ou peu s'en faut." },
      { first: true, text: "Deux portes donnent sur la salle d'en bas. L'une est de fer, et s'ouvre dehors, sous le grand cadran. L'autre est une grille, au fond, sur un boyau qu'on a scié au bord du socle, avec une étiquette : *Vers Saint-Gnomon. Condamné.*" },
      { first: true, after: "r:vu_droit", text: "Tu connais l'autre bout de ce boyau. Tu y as mis la tête, hier, sous une dalle d'église, et ton sablier a failli te fondre sur la poitrine." },
      { first: true, after: "monde:su:deux", text: "*UN EN HAUT, À LA CORDE. UN EN BAS, AU LEVIER.* Tu l'as écrit de ta main. Les voici, la corde et la poignée, dans la même boîte, à dix pieds l'une de l'autre. On pourrait les toucher ensemble en ouvrant les bras." },
      { again: true, text: "La Tour fendue. La petite barre attend ta main pour battre." },
    ],
    choices: [{ back: "K11r_salle" }] },

  K11r_portrait: { act: "III", title: "Le quarante et unième", place: "guilde", ambiance: "chateau",
    text: [
      "Les quarante premiers ont la même chaîne, le même fond brun, et l'air de s'être beaucoup ennuyés. Le trente-septième est retourné contre le mur.",
      "Le dernier est un grand vieillard sec, en houppelande brune, qui a refusé de poser la main sur un globe et l'a mise à plat sur sa cuisse. C'est une main énorme, noueuse, tachée, une main à ferrer des chevaux. La figure est une porte fermée, avec deux yeux gris dans les ais. Le peintre a eu peur de lui, et l'a peint ressemblant.",
      "Sur le cadre, une plaque : *Barnabé Coudrier, Grand Maître depuis 524.* Elle n'a pas de seconde date. Il a manqué quelqu'un, après, pour la graver ; il a manqué quelqu'un aussi pour retourner la toile. On l'a maudit dans tout un royaume, soixante ans durant, et l'on a oublié de le mettre au coin dans sa propre maison.",
      { with: "jehan", text: "Jehan s'est arrêté à six pas. Il regarde la main sur la cuisse, puis la sienne, qu'il ouvre. Ce sont les mêmes phalanges, en plus jeune. « Ma grand-mère disait que j'avais des mains de trop pour un garçon. Elle les cachait sous la table quand il venait du monde. » Il les regarde encore. « Elle savait d'où elles venaient. »" },
      { with: "carillon", text: "Carillon s'est mis au port d'armes devant le cadre. *Ding.* « Le Grand Maître. Carillon rend compte : lettre partie, retard constaté. » Il attend. Le portrait garde sa figure de porte. « Le Grand Maître ne répond pas aux rapports. C'est régulier. »" },
    ],
    choices: [{ back: "K11r_salle" }] },

  K11r_tresor: { act: "III", title: "Trésor et Sceau", backName: "le Trésor", place: "guilde", ambiance: "chateau",
    text: [
      { first: true, text: "La porte est basse, ferrée, et fermée à deux tours. Au-dessus, dans la pierre : *Quatre cents ans de journaux, et pas un faux.*" },
      { first: true, if: { item: "trousseau_guilde" }, text: "La clef à tête de trèfle tourne sans un grincement. La Guilde huilait ses serrures." },
      { first: true, if: { item: "trousseau_guilde" }, text: "Dedans, il fait frais. Quatre pupitres, quatre plumes couchées à droite des quatre encriers, à la même distance : on a quitté ce bureau en bon ordre, pour une heure. Au fond, derrière une balustrade, un coffre de fer à trois serrures, un registre enchaîné, et, scellée au mur, une armoire plate dont la porte bâille." },
      { again: true, text: "La petite porte ferrée, sous son inscription." },
    ],
    choices: [
      { label: "L'armoire qui bâille", if: { item: "trousseau_guilde" }, why: "La porte est fermée à deux tours, et quelqu'un en a la clef à sa ceinture.", hide: { seen: "K11r_armoire" }, to: "K11r_armoire" },
      { label: "Le registre enchaîné", if: { item: "trousseau_guilde" }, why: "La porte est fermée à deux tours.", hide: { seen: "K11r_journal" }, to: "K11r_journal" },
      { back: "K11r_cour" },
    ] },

  K11r_armoire: { act: "III", title: "Quarante crochets", place: "guilde", ambiance: "chateau", fx: { item: "clef_droit", flag: "r:clef_droit", ep: ["histoire", 500] },
    text: [
      "C'est l'armoire aux clefs de la maison. Quarante crochets, sur quatre rangs, chacun sous son étiquette, d'une ronde de commis. La Guilde a une clef pour chaque porte, et une étiquette pour chaque clef.",
      "Trois crochets sont vides. Tu lis leurs étiquettes : *Chambre haute.* *Chambre basse, porte de fer.* *Cage du levier.* Elles sont sorties ensemble, et la même main les a prises : la poussière du rayon, dessous, a gardé la marque de trois doigts qui tâtonnaient.",
      "Au bout du dernier rang, à l'écart, un quarantième crochet porte encore la sienne. Elle est noire, longue d'un empan, avec un panneton en peigne ; elle a de la toile d'araignée dans l'anneau, et l'araignée est prise dedans. L'étiquette a jauni : *Grille du Droit. Condamnée par le Conseil, 481. Défense de la sortir.*",
      { after: "r:sait_droit", text: "Le Droit. Une ligne de laiton dans le pavé d'une vieille église, une dalle, un boyau qui file sous la colline jusqu'à une grille de bronze. Tu as vu le commencement de ce chemin. Tu tiens ce qui en ouvre la fin." },
      { if: { not: { has: "r:sait_droit" } }, text: "Où est cette grille, tu l'ignores. Tu sais ce qu'on met sous clef, et ce qu'on met sous clef avec une défense : un chemin dont quelqu'un s'est servi une fois de trop." },
      "Tu la décroches. Personne n'a songé à elle depuis cent vingt ans. C'est la seule des quatre dont le sous-maître n'a pas voulu.",
    ],
    choices: [{ back: "K11r_tresor" }] },

  K11r_journal: { act: "III", title: "La première clef, la seconde", place: "guilde", ambiance: "chateau",
    text: [
      "Le journal du sceau est ouvert au mois de juin. Les pages sont réglées en quatre colonnes : le jour, l'objet, la première clef, la seconde. Tu lis lentement, du doigt, comme tu lis tout.",
      "*Le 9. Quittance à Monseigneur de Hautgué, pour quarante mille écus, en extinction des dettes de la maison. Balancourt. Aubespin.*",
      "*Le 21, à neuf heures du matin. Sorties pour la cérémonie : les clefs de la Chambre haute, de la Chambre basse et de la Cage. Remises à M. le sous-maître. Balancourt. Aubespin.*",
      "C'est la dernière ligne du registre. Après elle, la page est blanche jusqu'en bas, et toutes les pages suivantes. Tu regardes la colonne des clefs. Un homme a demandé trois clefs, un homme les a données, et le premier a signé pour les deux : la maison la plus exacte du royaume a remis sa Tour à quelqu'un sur la foi de sa propre signature.",
      { after: "monde:lu:marche", text: "Quarante mille écus, le neuf. {autre} t'a écrit le reste du compte, vu d'un quai. Le duc a payé les dettes de la maison, puis il a payé l'homme qui tenait la plume." },
    ],
    choices: [{ back: "K11r_tresor" }] },

  K11r_midi: { act: "III", title: "Pour mémoire", place: "guilde", ambiance: "chateau", takes: "noon",
    text: [
      "Tu t'assois sur la marche du bas. La table de marbre a son style de bronze, ses douze heures en éventail, et une ombre, fine, posée sur le douze : la seule ombre de la colline, que le soleil de 541 fait encore, parce qu'on ne lui a rien demandé d'autre depuis.",
      "Sur le socle, les deux mots. *POUR MÉMOIRE.* La dalle du milieu, dessous, sonne creux sous ton talon.",
      { if: { has: "monde:borne_vue" }, text: "La trace aux souliers fins fait un détour jusqu'ici. Elle s'arrête devant la marche, et le trou de la canne est sur la dalle même, deux fois, comme d'un homme qui écoute un mur. Puis elle repart. Il sait qu'on creuse aux cadrans. Il est venu voir. Il a quatre-vingt-dix ans, il monte seul, et l'on ne lève pas une dalle d'une main avec une canne dans l'autre." },
      "Tu ôtes le gris à pleines mains, et tu cherches le joint.",
    ],
    choices: [{ label: "Lever la dalle, et ouvrir le Cahier", to: "M11", big: true }] },
});

module.exports = { passages: P, extras: {
  people: {
    courtenvaux: { name: "Le lieutenant de Courtenvaux", f: false, aka: ["le lieutenant de Courtenvaux", "Courtenvaux", "le lieutenant"], face: { age: "jeune", skin: "clair", hair: "blond", coif: "court", beard: "moustache", eyes: "amande", iris: "bleu", nose: "fin", lips: "fines", shape: "ovale" },
      aspect: { allure: "vingt-deux ans, un ennui de bonne maison", habits: "casaque noire neuve, un roman à la main", signe: "finit sa phrase avant de lever les yeux" }, qui: "Lieutenant de la Garde du Sable, à la barrière.", desc: "Lieutenant de la Garde du Sable. Il tient la barrière de la rue du Cadran et lit des romans de cape et d'épée, qu'il aimerait vivre." },
    loquet: { name: "Le père Loquet", f: false, aka: ["le père Loquet", "Loquet", "le portier"], face: { age: "mur", skin: "clair", hair: "gris", coif: "court", beard: "sans", eyes: "ronds", iris: "brun", nose: "large", lips: "pleines", shape: "rond" },
      aspect: { allure: "court, rougeaud, un ventre de sacristain", habits: "livrée brune, favoris, trousseau à la ceinture", signe: "s'éveille en refusant du monde" }, qui: "Portier de la Guilde, pris en dormant.", desc: "Portier de la Guilde des Horlogers-Jurés depuis trente ans. Le coup l'a pris endormi sur son tabouret, sa baguette en travers des genoux." },
  },
  items: {
    trousseau_guilde: { name: "Trousseau du portier", kind: "divers", keep: true, price: 0, desc: "Une grappe de clefs de fer : la poterne, les communs, et une petite à tête de trèfle." },
    clef_ansel: { name: "Clef de bronze d'un des neuf", kind: "divers", keep: true, price: 0, desc: "Une clef d'apprenti, un balancier dans l'anneau, prise sur un oreiller. Les hommes de cuivre la connaissent." },
    lettre_ansel: { name: "Lettre d'Ansel à sa mère", kind: "divers", keep: true, flat: true, price: 0, desc: "Une feuille d'atelier pliée en deux. « À ma mère, la veuve Hurel, rue de la Poulie, sous l'enseigne du Dé. » Datée de la veille du Grand Midi, jamais partie." },
    clef_droit: { name: "Clef de la grille du Droit", kind: "divers", keep: true, price: 0, desc: "Une clef noire, longue d'un empan, au panneton en peigne. « Condamnée par le Conseil, 481. Défense de la sortir. »" },
  },
  duels: {
    d_courtenvaux: { title: "Trois touches à la baguette", foe: "courtenvaux", rule: "Trois touches à la baguette de buis, sur le pavé, entre douze piques et quarante dormants.",
      touches: 3, dom: "combat", skill: 6,
      intro: "Il se met en garde d'après une gravure : le bras trop haut, le pied trop tourné, et un sourire de frontispice. Tout cela est faux, et il y croit, ce qui le rend rapide.",
      style: { attaque: 3, parade: 1, feinte: 2 },
      tells: {
        attaque: ["Le lieutenant murmure : « Je me fends. »", "Son genou plie, comme sur la gravure.", "Il prend son souffle, bruyamment."],
        parade: ["Le lieutenant recule d'un demi-pas : « Je romps. »", "Sa baguette revient devant sa poitrine, bien droite."],
        feinte: ["Le lieutenant regarde ton épaule gauche, avec insistance.", "Il annonce : « Je feins », et s'en mord la lèvre."],
      },
      win: { to: "K11r_courtenvaux_gagne", fx: { flag: "r:courtenvaux_battu", regard: { courtenvaux: "admiratif" }, ep: ["seance", 700] } },
      lose: { to: "K11r_courtenvaux_perdu", fx: { stock: { sable: -2 }, pv: -1, flag: "r:amende_payee", ep: ["seance", 300] } } },
  },
} };
