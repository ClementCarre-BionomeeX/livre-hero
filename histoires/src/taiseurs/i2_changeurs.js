// Lot i2 of "Le Trésor des Taiseurs" (Act I): the Changers' island. The bridge (hub IC_pont), the money-changers'
// tables, the news exchange, the Marrel Bank (counting hall, clerk, Corisande's interview, Lothaire and his twin
// horn), the public session of the Council of Counters, the Archives of the Republic (double-entry registers, the
// first trace of the forged deeds), Tibère unmasked, the Mint, and four side quests (the queen's acknowledgment of
// debt, the forgotten deposit chest, the clipped ducats, the sergeant's daughter).

var P = {}, V = {}, C = {};

// Mystery B: the hero has understood what the Bank wants by at least two ways.
var DESSEIN = { count: [{ voile: "ic_cori_or" }, { voile: "ic_cori_registre" }, { voile: "ic_orateur" }, { voile: "ic_lot_feu" }, { voile: "ic_ponce_pages" }, { has: "ic:note_lothaire" }], min: 2 };
// Tibère: what the hero has heard under his words (two of them are enough to know).
var TIB_VOILES = { count: [{ voile: "ic_tib_honte" }, { voile: "ic_tib_porte" }, { voile: "ic_tib_rosalie" }, { voile: "ic_tib_corisande" }], min: 2 };
var TIB_LIBRE = { all: [{ present: "tibere" }, { not: { has: "tibere:espion" } }] };

// ==================================================================== the bridge (hub), the tables, the news exchange
Object.assign(P, {
  IC_pont: { act: "I", title: "Le pont des Changeurs", place: "changeurs", hub: true, backName: "le pont des Changeurs",
    text: [
      { first: true, text: "Le pont des Changeurs enjambe le grand bras de la Salve sur sept arches de pierre blonde. Des deux côtés de la chaussée, les changeurs ont leurs tables sous des auvents de toile rayée : un trébuchet de cuivre, une pierre de touche noire, des piles de pièces de toutes les frappes, et un registre ouvert que le changeur tient à plat sous sa main gauche. On parle ici quatre langues et toutes les monnaies du delta, et chaque phrase finit par un chiffre." },
      { first: true, text: "Au bout du pont, l'île sort de l'eau comme une seule maison : des hôtels de pierre blanche serrés les uns contre les autres, des façades lisses, des fenêtres hautes et grillées, des portes cloutées gardées chacune par deux hommes en livrée. Les gardes de la Banque Marrel portent le noir et l'or, ceux de la maison Fourcaud le vert, ceux de la Monnaie le gris de la République. Le Guet laisse l'île à ses propriétaires." },
      { first: true, text: "Sur la droite, le dôme bas du palais du Conseil des Comptoirs ; en face, la Banque Marrel, la plus haute façade de l'île, avec ses trois besants d'or sculptés au-dessus du portail ; plus loin, derrière une grille, les Archives de la République ; et collée au flanc de la Banque, la cour carrée de la Monnaie, dont les cheminées fument du matin au soir." },
      { first: true, with: "tibere", text: "Tibère regarde les gardes en livrée avec le mépris tranquille d'un sergent pour des valets armés. « Je connais l'île, dit-il, {{oreille#ic_tib_jeudi|j'y ai fait mes rondes pendant six ans|j'y viens chaque jeudi toucher mes cinq ducats à la petite porte de la Banque}}. » Il crache dans la Salve par-dessus le parapet." },
      { first: true, with: "lison", text: "Lison s'accoude au parapet et regarde le courant entre les piles. « Les barques des marais passent sous ce pont depuis trois cents ans, dit-elle. {{oreille|Le péage est d'un liard par barque|Le péage, nous le payons en titres de terre, une génération après l'autre}}. »" },
      { first: true, with: "gildas", text: "Frère Gildas lève les yeux vers les trois besants de la Banque et se signe, très vite, d'un geste qui tient de l'habitude plus que de la prière." },
      { again: true, when: "day", text: "Le pont des Changeurs, ses auvents rayés, le cliquetis des pièces sur la pierre de touche. Les gardes en livrée devant les portes de l'île. La fumée de la Monnaie, tirée vers la mer par le vent." },
      { again: true, when: "night", text: "Le pont, la nuit. Les changeurs ont replié leurs tables et emporté leurs balances. Une lanterne brûle devant chaque porte de l'île, et sous chaque lanterne, deux gardes en livrée regardent le pont. Seule une lucarne de la Monnaie, sur le toit de l'aile nord, garde une lueur." },
      { again: true, text: "Sous l'arche du milieu, l'eau {{echo#ic_echo_pont|tourne en remous autour de la pile, avec un bruit de succion|garde une voix d'homme, essoufflée : « Jetez-les du pont, les actes de la reine, tous, et que la Salve les porte à la mer »}}." },
      { after: "marrel:dessein", text: "Tu regardes la façade de la Banque autrement, maintenant. Trois besants d'or, et derrière, une vieille femme qui compte les jours jusqu'à la Saint-Jean." },
      { after: "tibere:parti", text: "Tu passes devant la petite porte de la Banque, sur le flanc de l'hôtel. Un jeudi prochain, un autre homme y touchera cinq ducats pour parler de toi." },
      { after: "tibere:double", with: "tibere", text: "Tibère marche à ta hauteur et salue le portier de la Banque d'un signe de tête. Le portier lui rend son salut. Tibère sourit à peine." },
    ],
    choices: [
      { label: "La Banque Marrel, sous ses trois besants d'or", to: "IC_banque" },
      { label: "Le palais du Conseil des Comptoirs", to: "IC_conseil" },
      { label: "Les Archives de la République, derrière leur grille", to: "IC_archives" },
      { label: "La Monnaie de la République, contre le flanc de la Banque", to: "IC_monnaie" },
      { label: "La bourse aux nouvelles, sous les arcades du Conseil", to: "IC_bourse" },
      { label: "Les tables des changeurs, sur le pont", to: "IC_tables" },
      { label: "La rue des Dames, où travaille Rosalie Gaucelm", hide: { any: [{ not: { has: "ic:rosalie_rue" } }, { has: "ic:rosalie" }] }, to: "IC_atelier" },
      { label: "Laisser Tibère aller boire son vin chaud, et le suivre de loin", hide: { any: [{ not: TIB_LIBRE }, { not: { seen: "IC_banque" } }, { seen: "IC_tibere_suivre" }] }, to: "IC_tibere_suivre" },
      { label: "Prendre Tibère à part, contre le parapet : tu sais pour qui il travaille", big: true, hide: { any: [{ not: { present: "tibere" } }, { not: { has: "tibere:espion" } }, { has: "tibere:aveu" }] }, to: "IC_tibere_face" },
      { label: "Prendre Tibère à part, contre le parapet : tu as entendu ce qu'il tait", big: true, hide: { any: [{ not: TIB_LIBRE }, { not: TIB_VOILES }] }, to: "IC_tibere_face" },
      { label: "T'arrêter au milieu du pont et mettre en ordre ce que tu sais de la Banque", big: true, hide: { any: [{ has: "marrel:dessein" }, { not: DESSEIN }] }, to: "IC_dessein" },
      { label: "Retourner à la place du Beffroi", back: "I_hub" },
    ] },

  IC_dessein: { act: "I", title: "Ce que veut la Banque", place: "changeurs",
    fx: { flag: "marrel:dessein", ep: ["seance", 1500] },
    text: [
      "Tu t'arrêtes au milieu du pont, les coudes sur la pierre froide, entre deux tables de changeurs. En bas, une gabare de sel passe sous l'arche en baissant son mât. Tu poses les choses une par une, comme Odeline posait les objets trouvés sur l'établi avant d'écrire l'étiquette.",
      "La Banque Marrel porte la dette de la République, et la République ne peut pas la payer. Corisande Marrel veut l'or de la Muette pour payer le duc d'Aveline avant la Saint-Jean. Et elle veut le Registre de la reine, pour le brûler. L'or sauve sa maison ; les feuillets la menacent. Elle cherche les deux avec la même main.",
      { with: "lison", text: "Lison t'écoute dire tout ça à mi-voix, sans te regarder. « Tu as mis le temps, dit-elle. Mais tu l'as dit dans le bon ordre. »" },
      { with: "tibere", text: "Tibère se gratte la moustache. « Une vieille qui veut l'or et le feu en même temps. J'ai connu des joueurs comme ça, aux dés. Ils finissent toujours par vendre la maison pour garder la table. »" },
      { with: "gildas", text: "Frère Gildas regarde l'eau sous l'arche. « Le Registre est un témoignage, dit-il. On brûle un témoignage quand on sait ce qu'il dira. »" },
      "Sur la façade de la Banque, une fenêtre du deuxième étage est éclairée, en plein jour, par une lampe qu'on a oublié d'éteindre ou qu'on n'éteint plus.",
    ],
    choices: [{ back: "IC_pont" }] },

  IC_tables: { act: "I", title: "Les tables des changeurs", place: "changeurs", backName: "les tables des changeurs",
    text: [
      { first: true, text: "Tu remontes les tables une à une. Chaque changeur a sa spécialité : celui-ci ne prend que l'or d'Aveline, celle-là les liards de cuivre des marais au poids, cet autre les lettres de change des ports du sud. Le plus vieux, à la dernière table avant l'île, s'appelle Mainfroy Dumay ; il a soixante-dix ans, une loupe de corne vissée dans l'œil gauche et une voix de confesseur." },
      { first: true, text: "« Change, pesée, essai, dit-il sans lever la tête. Un liard le ducat pour la pesée, deux pour l'essai à la pierre. » Il fait tinter une pièce sur la pierre de touche et regarde la trace. « Le ducat de la République {{oreille#ic_dumay_cours|vaut ses vingt liards, aujourd'hui comme hier|je le prends à dix-huit et je le rends à vingt depuis la Chandeleur, comme tout le pont, et le Conseil le sait}}. »" },
      { again: true, text: "Mainfroy Dumay pèse, essaie, inscrit. Les pièces passent de sa main à son registre sans qu'il lève les yeux." },
      "À côté de son trébuchet, un plateau d'étain est rempli de pièces dépareillées, noires, rognées, percées : {{pie#ic_ysaure_piece|des monnaies mortes de dix frappes oubliées, au poids du cuivre|des monnaies mortes de dix frappes oubliées, et parmi elles, noircie au soufre pour passer pour du cuivre, une ysaure d'or frappée avant la nuit des Comptoirs}}. Un écriteau : *Au tas, cinq liards la poignée.*",
      { before: "ic:coffre", text: "À la table voisine, une femme d'une soixantaine d'années, en deuil de laine, pose sur le tapis une broche d'argent et la reprend, et la pose encore. Le changeur en face d'elle attend avec la patience des gens qui achètent." },
      { with: "lison", text: "Lison fait sauter un liard des marais dans sa paume. « Ici, ils pèsent même ce qu'on leur dit », souffle-t-elle." },
    ],
    choices: [
      { label: "Acheter une poignée au tas, en choisissant ta poignée (5 liards)", hide: { any: [{ not: { voile: "ic_ysaure_piece" } }, { has: "tresor:ic_ysaure" }] }, fx: { gold: -5 }, to: "IC_tables_ysaure" },
      { label: "Laisse-moi regarder ce tas", who: "gildas", hide: { has: "tresor:ic_ysaure" },
        test: { dom: "savoir", diff: -10, label: "Reconnaître une effigie sous la crasse", help: [{ if: { has: "metier:lire" }, v: 10 }] },
        win: { fx: { gold: -5 }, to: "IC_tables_ysaure" }, lose: { to: "IC_tables_rien" } },
      { label: "Fouiller le tas du bout des doigts, comme tu fouilles une malle", hide: { any: [{ has: "tresor:ic_ysaure" }, { seen: "IC_tables_rien" }] },
        test: { dom: "savoir", diff: -20, label: "Sentir au poids la pièce qui ment", help: [{ if: { has: "metier:mains" }, v: 20 }] },
        win: { fx: { gold: -5 }, to: "IC_tables_ysaure" }, lose: { to: "IC_tables_rien" } },
      { label: "Parler à la femme en deuil qui hésite à vendre sa broche", hide: { any: [{ has: "ic:coffre" }, { seen: "IC_coffre_nicole" }] }, to: "IC_coffre_nicole" },
      { label: "Aller trouver Nicole Aguesse, qui attend à sa table", hide: { any: [{ has: "ic:coffre" }, { not: { seen: "IC_coffre_nicole" } }] }, to: "IC_coffre_nicole" },
      { label: "Demander à Mainfroy Dumay ce qu'on dit du ducat sur le pont", hide: { seen: "IC_dumay" }, to: "IC_dumay" },
      { back: "IC_pont" },
    ] },

  IC_tables_rien: { act: "I", title: "Le tas", place: "changeurs",
    text: [
      "Tu remues les pièces mortes un long moment. Des liards de la vieille Commune, des deniers d'Aveline percés pour un collier, un sou de plomb. Mainfroy Dumay te regarde faire sans rien dire, puis il pose la main à plat sur le plateau.",
      "« Le tas est à cinq liards la poignée, dit-il. La fouille est gratuite, mais pas éternelle. » Il retire le plateau sous son comptoir. Tu as vu passer, entre tes doigts, une pièce plus lourde que les autres ; tu ne saurais plus dire laquelle.",
    ],
    choices: [{ back: "IC_tables" }] },

  IC_tables_ysaure: { act: "I", title: "Une poignée au tas", place: "changeurs",
    fx: { item: "ic_tr_ysaure", clock: { tresors: 1 }, flag: "tresor:ic_ysaure", ep: ["perso", 300] },
    text: [
      "Tu poses cinq liards sur le tapis et tu plonges la main dans le plateau. Tu sais déjà où va ta main : la pièce noire, épaisse, un peu plus petite qu'un ducat, que tu as repérée. Tu la ramènes avec quatre autres, pour la forme.",
      "Plus loin sur le pont, à l'abri d'un pilier, tu la frottes avec le pouce mouillé. Le noir part en poussière grasse, et dessous l'or apparaît, jaune et mou comme du beurre. Une femme couronnée de profil, la bouche ouverte, comme si elle parlait. Au revers, une barque et une étoile. *YSAVRA REGINA AQVARVM.*",
      { with: "gildas", text: "Frère Gildas prend la pièce, la tourne vers la lumière. « On les a fondues presque toutes, après, dit-il. La République ne voulait plus voir cette bouche-là dans les bourses. » Il te la rend sans la garder plus longtemps qu'il ne faut." },
      { with: "tibere", text: "Tibère siffle entre ses dents. « Le vieux Dumay vient de te vendre un an de mes gages pour cinq liards. Il ne faudra jamais le lui dire. »" },
    ],
    choices: [{ back: "IC_tables" }] },

  IC_dumay: { act: "I", title: "Mainfroy Dumay", place: "changeurs",
    fx: { ep: ["perso", 200] },
    text: [
      "Mainfroy Dumay dévisse sa loupe de corne, l'essuie, la revisse. « Ce qu'on dit du ducat ? Que c'est une bonne pièce. Le titre est honnête, le poids est juste. » Il fait tinter un ducat neuf sur la pierre et le pose sur le plateau du trébuchet. Le fléau penche, hésite, se tient.",
      "« La Monnaie frappe {{oreille#ic_dumay_monnaie|comme elle a toujours frappé, au poids de la loi|un grain de moins par pièce depuis l'automne, et nous rognons nos cours d'autant, en silence}}, dit-il. Le pont n'a pas d'opinion. Le pont a des balances. »",
      "Il range le ducat dans une boîte à part, une boîte de bois sombre où il y en a déjà une centaine, tous neufs. « Ceux-là, je les garde. Les vieux ducats, je les revends au poids aux orfèvres des Halles. »",
      { if: { has: "poids:dette" }, text: "Il te regarde par-dessus son trébuchet. « Vous avez une dette, dit-il. Ça se voit à la façon dont vous regardez les piles. Empruntez en ducats neufs, remboursez en ducats neufs, et ne laissez jamais un prêteur vous faire signer en or d'Aveline. »" },
    ],
    choices: [{ back: "IC_tables" }] },

  IC_bourse: { act: "I", title: "La bourse aux nouvelles", place: "changeurs", backName: "la bourse aux nouvelles",
    text: [
      { first: true, text: "Sous les arcades du palais du Conseil, une longue galerie couverte sent l'encre fraîche, la cire chaude et la sueur de marchand. On y vend des nouvelles. Contre les piliers, des tableaux de bois noir où l'on cloue des avis écrits à la main : arrivées de navires, prix du sel à Port-Vasier, faillites, mariages de maisons. Des valets recopient les avis sur des tablettes et courent les porter à leurs maîtres." },
      { first: true, text: "Au milieu de la galerie, sur une estrade basse, une crieuse lit à voix haute les lettres arrivées du nord, contre un liard par auditeur. Plus loin, sous la dernière arche, un vieil homme vend des papiers anciens étalés sur un drap : actes, quittances, lettres de noblesse, cartes marines." },
      { again: true, when: "day", text: "La bourse aux nouvelles bourdonne. La crieuse lit, les valets recopient, les marchands écoutent le prix du sel en faisant semblant de parler d'autre chose." },
      { again: true, when: "night", text: "La galerie est presque vide. Les tableaux restent cloués aux piliers, pleins d'avis d'hier. Un valet dort assis contre une colonne, sa tablette sur les genoux." },
      "Sur le tableau le plus proche, un avis récent, d'une belle écriture de chancellerie : *La Banque Marrel informe ses déposants que {{loupe#ic_avis_banque|les retraits se feront aux heures accoutumées|les retraits au-delà de cent ducats sont suspendus jusqu'à la Saint-Jean, sur ordre de Dame Corisande}}.*",
      { with: "tibere", text: "Tibère paie un liard à la crieuse sans qu'on lui demande. « Les nouvelles du nord, je les écoute, dit-il. {{oreille#ic_tib_honte|Un vieux sergent garde ses habitudes|Je les écoute pour savoir ce que je pourrai revendre jeudi}}. »" },
    ],
    choices: [
      { label: "Écouter la crieuse lire les lettres du nord (1 liard)", fx: { gold: -1 }, hide: { seen: "IC_bourse_lucette" }, to: "IC_bourse_lucette" },
      { label: "Le vieux marchand de papiers anciens, sous la dernière arche", to: "IC_reine_vendeur" },
      { label: "Lire les avis de faillite cloués au pilier", hide: { seen: "IC_bourse_faillites" }, to: "IC_bourse_faillites" },
      { back: "IC_pont" },
    ] },

  IC_bourse_lucette: { act: "I", title: "La crieuse", place: "changeurs",
    fx: { ep: ["perso", 200] },
    text: [
      "La crieuse s'appelle Lucette. Une femme maigre, d'une quarantaine d'années, avec une voix de marinière qui porte jusqu'au bout de la galerie sans forcer. Elle déplie une lettre et la lit d'un trait, en appuyant sur les noms propres.",
      "« De Valrose, en Aveline, le dix du mois. Monseigneur le duc a tenu sa cour de printemps. {{oreille#ic_lucette|Il a chassé trois jours dans ses forêts, et le gibier était beau|Il a fait ferrer douze cents chevaux, et on me paie pour lire la chasse à la place}}. Les foires de Valrose ont été bonnes. Le sel de Salvèze y est monté de deux sous la livre. »",
      "Elle replie la lettre, en prend une autre. Un marchand de draps, au premier rang, note tout sur ses tablettes, en tirant la langue.",
      "« De Salvèze même, pour finir. On dit que Monseigneur Amaury de Sauveterre, envoyé du duc, a dîné trois fois ce mois-ci chez des gens du Conseil. On ne dit pas lesquels. » Lucette sourit. « On ne me paie pas assez pour le dire. »",
    ],
    choices: [
      { label: "Attendre Lucette au pied de l'estrade, une pièce à la main (5 liards)", hide: { any: [{ not: { voile: "ic_lucette" } }, { seen: "IC_lucette_aparte" }] }, fx: { gold: -5 }, to: "IC_lucette_aparte" },
      { back: "IC_bourse" },
    ] },

  IC_lucette_aparte: { act: "I", title: "Ce que Lucette ne lit pas", place: "changeurs",
    fx: { ep: ["perso", 300] },
    text: [
      "Lucette descend de son estrade, prend ta pièce sans la regarder et t'entraîne derrière un pilier. « Vous avez l'oreille fine, vous. Ou alors vous savez lire les lettres à l'envers. »",
      "Elle parle vite, bas, en regardant la galerie par-dessus ton épaule. « Les lettres que je lis, on me les donne. Celles que je garde, on me les paie pour que je les garde. Les maîtres de forges d'Aveline ne vendent plus de fer à Salvèze depuis l'hiver. Le duc rappelle ses vassaux pour la Saint-Jean. Et quelqu'un, ici, sur l'île, paie pour que la ville l'apprenne le plus tard possible. »",
      "« Qui paie ? » Elle te regarde enfin. « La Banque paie pour qu'on se taise sur la dette. Quelqu'un d'autre paie pour qu'on se taise sur Sauveterre. Les deux bourses ne sont pas les mêmes. Je les reconnais au cuir. »",
      { with: "lison", text: "Lison, adossée au pilier, a écouté sans bouger. « Elle en sait plus que ce qu'elle vend, dit-elle quand Lucette s'éloigne. C'est le métier. »" },
    ],
    choices: [{ back: "IC_bourse" }] },

  IC_bourse_faillites: { act: "I", title: "Les avis de faillite", place: "changeurs",
    text: [
      "Les avis de faillite occupent un pilier entier, du sol à hauteur d'homme. On les cloue les uns sur les autres ; les plus vieux, en dessous, ont jauni et pris l'eau. Tu lis les plus récents. Une maison de draps, une maison de vin, deux armateurs de Port-Vasier, un orfèvre des Halles. Chaque avis porte en bas la même mention : *créancier principal : Banque Marrel*.",
      "Un avis, presque au sommet, attire ton œil parce qu'il est écrit d'une autre main, maladroite, en lettres capitales : *ON CHERCHE LE COFFRE NUMÉRO DU GRAND-PÈRE JOSSELIN AGUESSE, BATELIER. RÉCOMPENSE. DEMANDER NICOLE, AUX TABLES.*",
      { if: { has: "metier:lire" }, text: "Tu as l'habitude de ces avis-là. On les écrit quand on a déjà tout essayé, et on les cloue au pilier des faillites parce que c'est celui que tout le monde lit." },
    ],
    choices: [
      { label: "Aller trouver Nicole Aguesse aux tables des changeurs", hide: { any: [{ has: "ic:coffre" }, { seen: "IC_coffre_nicole" }] }, to: "IC_coffre_nicole" },
      { back: "IC_bourse" },
    ] },
});

// ==================================================================== side quest: the queen's acknowledgment of debt
Object.assign(P, {
  IC_reine_vendeur: { act: "I", title: "Le marchand de vieux papiers", place: "changeurs", backName: "l'étal de Gédéon",
    fx: { questSeen: "IC_reine", meet: "ic_gedeon" },
    text: [
      { first: true, text: "Le vieux marchand de papiers s'appelle Gédéon. Il a des mitaines de laine, un nez rouge, une plume derrière chaque oreille, et il connaît le prix de tout ce qui s'écrit. Ses papiers sont rangés sur le drap par ordre de valeur, du plus cher, près de lui, au moins cher, près de tes bottes." },
      { first: true, text: "Quand il te voit regarder, il soulève avec deux doigts le papier le plus proche de lui, sous une plaque de verre. « Voilà ce que personne n'a, dit-il. Une reconnaissance de dette, du temps de la reine. Signée de la maison Marrel, au profit de la Muette elle-même. Trente mille ducats. Les Marrel devaient de l'argent à la reine, vous vous rendez compte. » Il baisse la voix. « Trois ducats, et elle est à vous. »" },
      { again: true, text: "Gédéon lève les yeux de ses papiers et soulève sa plaque de verre, au cas où tu aurais changé d'avis." },
      "Sous le verre, {{pie#ic_faux_parchemin|un parchemin jauni, piqué de rousseurs, avec un sceau de cire rouge à demi brisé|un parchemin de l'an passé, jauni au thé, avec un sceau coulé dans un moule pris sur un vrai}}. L'écriture est belle, appliquée, un peu trop régulière.",
      "« Je la tiens {{oreille#ic_gedeon_copie|d'une vieille famille ruinée, qui vendait ses archives au poids|de ma propre main : je l'ai recopiée sur l'original, et l'original dort dans mon coffre en attendant un vrai acheteur}}, dit Gédéon. »",
      { with: "gildas", text: "Frère Gildas se penche sur la plaque de verre, longtemps. Il se redresse sans un mot, et regarde Gédéon avec une curiosité tranquille." },
    ],
    choices: [
      { label: "Payer les trois ducats (60 liards)", hide: { has: "ic:reine" }, fx: { gold: -60 }, to: "IC_reine_fausse" },
      { label: "« Montrez-moi plutôt l'original, celui de votre coffre. »", hide: { any: [{ has: "ic:reine" }, { not: { any: [{ voile: "ic_gedeon_copie" }, { voile: "ic_faux_parchemin" }] } }] }, to: "IC_reine_boutique" },
      { label: "Demander à examiner la pièce de près, hors du verre", hide: { any: [{ has: "ic:reine" }, { seen: "IC_reine_examen" }] },
        test: { dom: "savoir", diff: -10, label: "Reconnaître une copie", help: [{ if: { has: "metier:lire" }, v: 15 }, { with: "gildas", v: 15 }] },
        win: { fx: { ep: ["perso", 300] }, to: "IC_reine_boutique" }, lose: { to: "IC_reine_examen" } },
      { back: "IC_bourse" },
    ] },

  IC_reine_examen: { act: "I", title: "Une belle écriture", place: "changeurs",
    text: [
      "Gédéon soulève la plaque et te tend le parchemin du bout des doigts, sans le lâcher tout à fait. Tu lis : *Nous, Ricard Marrel, changeur sur le pont, reconnaissons tenir de notre dame la reine Ysaure la somme de trente mille ducats d'or…* L'encre est brune, le latin des formules est correct, le sceau porte bien les trois besants.",
      "Tu cherches la faute et tu ne la trouves pas. Gédéon reprend son parchemin avec un sourire de grand-père. « Elle est belle, hein. Trois ducats. Je ne baisse pas, mais je ne la vends pas à n'importe qui. »",
    ],
    choices: [{ back: "IC_reine_vendeur" }] },

  IC_reine_boutique: { act: "I", title: "Le coffre de Gédéon", place: "changeurs",
    text: [
      "Gédéon cesse de sourire. Il regarde à droite, à gauche, puis il rabat un coin de son drap sur ses papiers les plus chers. « Parlez moins fort. » Il te fait passer derrière le pilier, où il garde un coffre de cèdre bardé de fer, un tabouret et un réchaud.",
      "« Bon. Oui. C'est une copie. Je fais des copies, comme tout le monde ici ; les gens veulent la Muette sur leur mur, je leur vends la Muette. L'original, je l'ai trouvé dans un lot de papiers des Archives, vendu au poids il y a dix ans. » Il pose la main sur le couvercle du coffre. « Celui-là, je le vends cinquante ducats. Ou je le garde. Monsieur Brunel, de la Banque, m'en a déjà offert trente, et je l'ai trouvé trop pressé. »",
      { with: "tibere", text: "Tibère s'adosse au pilier, les pouces dans le ceinturon, et regarde Gédéon comme il regardait sans doute les faussaires quand il portait la plaque du Guet." },
      { with: "lison", text: "Lison s'assied sur le tabouret sans qu'on l'y invite, et tend les mains au réchaud. Ses yeux vont du coffre à la ceinture de Gédéon, où pend une clé de fer." },
    ],
    choices: [
      { label: "« Les faussaires, sur l'île, on les pend au pont. Je pourrais en parler aux gardes de la Monnaie. »",
        test: { dom: "social", diff: -10, label: "Faire peur à un faussaire", help: [{ with: "tibere", v: 15 }, { if: { has: "metier:parole" }, v: 10 }] },
        win: { fx: { fac: { conseil: -2 } }, to: "IC_reine_vraie" }, lose: { to: "IC_reine_perdue" } },
      { label: "Lui proposer un marché : tu lui rapportes du travail des Archives, il te donne l'original", hide: { not: { seen: "IC_archives" } },
        test: { dom: "social", diff: 0, label: "Marchander avec un marchand", help: [{ if: { has: "metier:parole" }, v: 15 }, { if: { has: "ic:ponce_achete" }, v: 15 }] },
        win: { to: "IC_reine_vraie" }, lose: { to: "IC_reine_perdue" } },
      { label: "Laisse-moi faire", who: "lison",
        test: { dom: "discretion", diff: -10, label: "Prendre une clé à une ceinture" },
        win: { fx: { conf: { lison: 3 } }, to: "IC_reine_vraie" }, lose: { to: "IC_reine_perdue" } },
      { label: "Laisse-moi faire", who: "tibere",
        test: { dom: "social", diff: 0, label: "La grosse voix du Guet" },
        win: { fx: { conf: { tibere: 3 } }, to: "IC_reine_vraie" }, lose: { to: "IC_reine_perdue" } },
      { label: "Le laisser à son coffre", fx: { quest: "IC_reine", flag: "ic:reine", set: { ic_reine: "laissee" } }, back: "IC_bourse" },
    ] },

  IC_reine_perdue: { act: "I", title: "Le coffre se referme", place: "changeurs",
    fx: { quest: "IC_reine", flag: "ic:reine", set: { ic_reine: "lothaire" } },
    text: [
      "Gédéon se lève, d'un coup, et pose son tabouret sur le couvercle du coffre. « Dehors. » Il siffle entre ses doigts. Deux gardes gris de la Monnaie, qui passaient sous l'arcade, tournent la tête. Tu recules dans la galerie.",
      "Le lendemain, son étal est vide. Un valet de la bourse te dit qu'un homme en gants gris est venu avec deux porteurs, la veille au soir, et qu'il a emporté le coffre de cèdre entier. Gédéon a payé sa tournée à toute la galerie, et il est parti voir sa sœur à Port-Vasier.",
    ],
    choices: [{ back: "IC_bourse" }] },

  IC_reine_fausse: { act: "I", title: "Une belle copie", place: "changeurs",
    fx: { item: "ic_faux_reconnaissance", quest: "IC_reine", flag: "ic:reine", set: { ic_reine: "fausse" } },
    text: [
      "Gédéon glisse le parchemin dans une chemise de cuir souple, noue le cordon et te le tend à deux mains, comme une relique. « Gardez-la au sec. Et ne la montrez pas à n'importe qui : la Banque n'aime pas qu'on lui rappelle ses dettes. »",
      "Tu ranges la chemise dans ton sac. Elle pèse moins que tu ne l'aurais cru.",
      { if: { voile: "ic_faux_parchemin" }, text: "Tu sais ce que tu as acheté. Une belle copie, faite par un homme habile, pour le prix d'un mois de pain. Un jour, peut-être, quelqu'un l'achètera pour l'original." },
    ],
    choices: [{ back: "IC_bourse" }] },

  IC_reine_vraie: { act: "I", title: "La reconnaissance de la reine", place: "changeurs",
    fx: { item: "ic_tr_reconnaissance", clock: { tresors: 1 }, flag: ["tresor:ic_reconnaissance", "ic:reine"], set: { ic_reine: "vraie" }, quest: "IC_reine", clue: "ic_c_reconnaissance", ep: ["perso", 600] },
    text: [
      { outcome: "win", text: "Gédéon soupire, de tout son grand corps, et ouvre le coffre de cèdre avec sa clé de fer. Sous des liasses de quittances, une enveloppe de toile cirée ; dans l'enveloppe, un parchemin épais, souple, presque doux, couleur de vieil os. « Prenez-la. Et quand on vous la volera, ne dites pas que c'est moi qui vous l'ai vendue. »" },
      "Le sceau est intact : trois besants, la cire brunie par trois siècles. L'écriture est plus rapide que celle de la copie, plus sûre, avec des ratures. *Nous, Ricard Marrel, changeur sur le pont, reconnaissons tenir de notre dame la reine Ysaure la somme de trente mille ducats d'or, que nous rendrons à la Saint-Jean de l'an mil quatorze, sur nos biens et sur nos tables.*",
      "Au bas, de l'autre main, une signature large : *Ysaure*. Et dessous, d'une encre plus pâle, {{loupe#ic_reconnaissance|une simple croix, tracée à la hâte|une ligne d'écriture fine : « Payable en sel des Hautes-Eaux, si l'or manque, à mes sauniers et non à moi »}}.",
      { with: "gildas", text: "Frère Gildas lit par-dessus ton épaule. « L'an mil quatorze, dit-il. La Saint-Jean de cette année-là, la reine était déjà dans sa tour. » Il se tait ensuite." },
    ],
    choices: [{ back: "IC_bourse" }] },
});

Object.assign(V, {
  ic_tib_jeudi: { fx: { flag: "tibere:espion", ep: ["perso", 300] } },
  ic_ysaure_piece: { fx: { ep: ["perso", 100] } },
  ic_dumay_monnaie: { fx: { clue: "ic_c_monnaie" } },
  ic_lucette: { fx: { ep: ["perso", 100] } },
  ic_gedeon_copie: { fx: { ep: ["perso", 100] } },
  ic_reconnaissance: { fx: { clue: "ic_c_sel", ep: ["perso", 300] } },
});
Object.assign(C, {
  ic_c_monnaie: { rev: "B", text: "Mainfroy Dumay, changeur : depuis l'automne, la Monnaie de la République frappe ses ducats un grain plus légers, et le pont rogne ses cours d'autant." },
  ic_c_reconnaissance: { rev: "R", text: "Reconnaissance de Ricard Marrel, changeur : il tient de la reine Ysaure trente mille ducats d'or, à rendre à la Saint-Jean de l'an mil quatorze." },
  ic_c_sel: { rev: "R", text: "Sous la signature de la reine, à l'encre pâle : la dette de Ricard Marrel est payable en sel des Hautes-Eaux, « à mes sauniers et non à moi »." },
});

// ==================================================================== the Marrel Bank: hall, counting room, clerk, receipts
Object.assign(P, {
  IC_banque: { act: "I", title: "La Banque Marrel", place: "changeurs", when: "day", backName: "le grand hall de la Banque",
    text: [
      { first: true, text: "Le portail de la Banque s'ouvre sur un hall plus haut que la nef d'une église de quartier. Le sol est un damier de marbre noir et blanc, usé en creux devant les guichets. Douze guichets, derrière douze grilles de fer forgé, et derrière chaque grille un commis en noir qui compte sans lever les yeux. Au fond, un escalier de pierre monte vers les étages ; à gauche, une porte basse, gardée, descend vers les chambres fortes." },
      { first: true, text: "Ça sent la cire, le papier et l'argent, qui a une odeur : une odeur de cuivre tiède, de mains. Des gardes en livrée noir et or se tiennent aux quatre coins, les mains croisées sur la garde de leur épée courte. L'un d'eux te suit des yeux depuis le portail jusqu'aux guichets, sans bouger la tête." },
      { first: true, with: "tibere", text: "Tibère s'arrête sur le seuil et rabat son chapeau sur ses yeux. « Je garde la porte, moi, dit-il. {{oreille#ic_tib_porte|Les banques, ça me donne la colique|À l'intérieur, trois commis sur quatre m'appellent par mon nom}}. » Il s'adosse au chambranle, dehors." },
      { first: true, with: "lison", text: "Lison regarde le damier de marbre, puis ses propres bottes, crottées de vase de canal, et elle marche exprès sur les cases blanches. « Je viens voir de près {{oreille|les gens qui ont de l'argent|qui t'achète, et pour combien, pour le dire à qui m'envoie}}, dit-elle. »" },
      { again: true, text: "Le hall de la Banque, le damier de marbre, les grilles et les commis. Les gardes noir et or aux quatre coins. Le bruit des pièces comptées monte jusqu'à la voûte et y reste." },
      { after: "ic:corisande_oui", text: "Le garde du portail te salue, maintenant, d'un petit signe de la main gantée. On te connaît, ici. On te compte parmi les dépenses." },
      { after: "ic:banque_chasse", text: "Le garde du portail te reconnaît. Il garde le silence et te suit des yeux, et un deuxième garde vient se placer près de lui." },
    ],
    choices: [
      { label: "La salle des comptes, derrière les guichets", to: "IC_comptes" },
      { label: "Demander audience à Dame Corisande Marrel", hide: { seen: "IC_corisande" }, to: "IC_antichambre" },
      { label: "Demander une seconde audience à Dame Marrel", hide: { not: { seen: "IC_corisande_fin" } }, to: "IC_corisande_revoir" },
      { label: "La porte basse qui descend vers les chambres fortes", hide: { seen: "IC_galerie" }, to: "IC_galerie" },
      { label: "Le guichet des dépôts anciens, pour le coffre de Josselin Aguesse", hide: { any: [{ has: "ic:coffre" }, { not: { has: "ic:coffre_numero" } }] }, to: "IC_coffre_guichet" },
      { label: "Le guichet des dépôts anciens, pour le coffre de Josselin Aguesse", hide: { any: [{ has: "ic:coffre" }, { has: "ic:coffre_numero" }, { not: { seen: "IC_coffre_nicole" } }, { seen: "IC_coffre_refus" }] }, to: "IC_coffre_refus" },
      { back: "IC_pont" },
    ] },

  IC_comptes: { act: "I", title: "La salle des comptes", place: "changeurs",
    text: [
      { first: true, text: "Derrière les guichets, une salle longue et basse, éclairée par des fenêtres hautes sur la Salve. Quarante pupitres inclinés en quatre rangées, quarante commis penchés, quarante plumes qui grattent ensemble avec un bruit de pluie fine. Un maître des comptes passe entre les rangées et regarde les pages par-dessus les épaules, les mains dans le dos." },
      { first: true, text: "Au bout de la salle, sur un lutrin de chêne, le grand livre de la maison est ouvert, enchaîné au lutrin par une chaîne de cuivre. On y reporte chaque soir les comptes du jour. Un commis le tient ouvert à la page du mois, et un garde se tient à côté." },
      { again: true, text: "Les quarante plumes grattent. Le maître des comptes marche entre les pupitres. Le grand livre, sur son lutrin, est ouvert à une autre page qu'hier." },
      "Tu lis de loin, à l'envers, la ligne que le commis vient de reporter dans le grand livre : *Garantie de la dette d'Aveline : {{loupe#ic_grand_livre|close et soldée à la Chandeleur|quatre millions de ducats, portés sur nos fonds propres, gagés sur nos titres du delta}}.*",
      "Au dernier pupitre de la dernière rangée, un commis très jeune, aux cheveux frisés et aux manchettes tachées d'encre, a cessé d'écrire pour te regarder. Il sourit comme on sourit à la première personne intéressante de la journée. Sur son pupitre, sous sa main, un petit registre relié de toile verte : *Menues dépenses*.",
      "Sur l'étagère derrière lui, {{pie#ic_coffret_commis|un coffret de bois noir, fermé par une serrure de cuivre|un coffret de bois noir, dont la serrure de cuivre est une façade : le couvercle s'ouvre en poussant le fond}}, où l'on range sans doute la petite caisse.",
    ],
    choices: [
      { label: "Parler au jeune commis aux manchettes tachées", to: "IC_amedee" },
      { label: "Lire le registre vert pendant que le commis a le dos tourné", hide: { any: [{ has: "ic:recu" }, { seen: "IC_banque_garde" }] },
        test: { dom: "discretion", diff: -10, label: "Lire un registre à l'envers, sous le nez d'un garde", help: [{ if: { has: "metier:lire" }, v: 10 }, { if: { has: "passe:voleur" }, v: 10 }] },
        win: { to: "IC_recu" }, lose: { to: "IC_banque_garde" } },
      { label: "Laisse-moi faire", who: "lison", hide: { any: [{ has: "ic:recu" }, { seen: "IC_banque_garde" }] },
        test: { dom: "discretion", diff: 0, label: "Lison renverse un encrier" },
        win: { fx: { conf: { lison: 2 } }, to: "IC_recu" }, lose: { to: "IC_banque_garde" } },
      { label: "Ouvrir le coffret noir en poussant le fond", hide: { any: [{ not: { voile: "ic_coffret_commis" } }, { has: "ic:recu" }] }, to: "IC_recu" },
      { back: "IC_banque" },
    ] },

  IC_recu: { act: "I", title: "Menues dépenses", place: "changeurs",
    fx: { flag: ["ic:recu", "tibere:espion"], ep: ["perso", 400] },
    text: [
      "Le temps de trois battements de cœur, la page est sous tes yeux. Des colonnes de petites sommes : chandelles, encre, un pourboire au batelier, une course au Beffroi. Et, tous les jeudis depuis la nuit des Lanternes, la même ligne, de la même main de commis : *Au sieur T. G., pour avis, cinq ducats. Sur ordre de M. Brunel.*",
      "Glissés entre les pages, des reçus : de petits carrés de papier pliés en deux. Tu en ouvres un. *Reçu cinq ducats. T. Gaucelm.* L'écriture est grosse, appuyée, celle d'un homme qui a appris à signer tard et qui signe en serrant la plume. Tu la connais. Tu l'as vue au bas du constat du Guet, le matin où l'on a emporté Odeline.",
      { with: "lison", text: "Lison a vu ton visage. Elle ne demande rien. Elle ramasse l'encrier qu'elle a renversé, s'excuse auprès du commis avec une grâce que tu ne lui connaissais pas, et te prend le bras pour sortir." },
      "Tu remets le reçu à sa place. Tu {{miroir#ic_miroir_tibere|sens la trahison, simplement|te souviens que tu l'as pris avec toi parce qu'il ne te posait jamais de questions, et que cela t'arrangeait}}. Dehors, sur le seuil, quelqu'un t'attend, qui sait déjà ce que tu as fait aujourd'hui, et le dira jeudi.",
    ],
    choices: [{ back: "IC_comptes" }] },

  IC_banque_garde: { act: "I", title: "Un garde en noir et or", place: "changeurs",
    text: [
      "Une main gantée se pose sur ton épaule. Le garde qui se tenait près du lutrin a fait le tour des pupitres sans bruit. « Les registres de la maison, dit-il, se lisent avec la permission de la maison. » Il serre. Le maître des comptes s'est retourné, et quarante plumes se sont arrêtées en même temps.",
      "« Je vous raccompagne au portail. Gentiment, si vous voulez. »",
    ],
    choices: [
      { label: "Te laisser raccompagner, l'air d'un client qui s'est perdu", fx: { fac: { banque: -3 } }, back: "IC_pont" },
      { label: "« Je cherche Monsieur Brunel. Il m'attend. Demandez-lui. »", if: { has: "lothaire:offre" }, why: "Lothaire Brunel ne t'a jamais rien proposé.",
        test: { dom: "social", diff: 0, label: "Se réclamer de Lothaire", help: [{ if: { has: "metier:parole" }, v: 10 }] },
        win: { to: "IC_lothaire" }, lose: { fx: { fac: { banque: -3 } }, back: "IC_pont" } },
      { label: "Te dégager d'un coup d'épaule", fight: { title: "Le garde de la salle des comptes", enemies: [{ id: "ic_garde", n: 2 }],
        win: { fx: { flag: "ic:banque_chasse", fac: { banque: -10 }, ep: ["perso", 300] }, to: "IC_banque_fuite" },
        lose: { fx: { pv: -3, flag: "ic:banque_chasse", fac: { banque: -5 } }, to: "IC_banque_fuite" },
        flee: { label: "Filer entre les pupitres jusqu'au portail", dom: "discretion", diff: -10, to: "IC_banque_fuite" } } },
    ] },

  IC_banque_fuite: { act: "I", title: "Sur le pavé de l'île", place: "changeurs",
    text: [
      { outcome: "win", text: "Le premier garde glisse sur le marbre et emporte un pupitre dans sa chute ; une pluie de feuilles s'abat sur la salle. Tu traverses le hall en courant, tu bouscules un client en fourrure, tu passes le portail." },
      { outcome: "lose", text: "Les deux gardes te prennent chacun un bras, te font traverser le hall au pas de charge et te jettent sur les marches du portail. Tu te relèves avec une épaule qui brûle et la paume écorchée." },
      { outcome: "flee", text: "Tu files entre les pupitres, courbé{e}, pendant que les commis lèvent leurs plumes comme des épées. Le portail, le pavé, le soleil." },
      "Sur les marches, les gens du pont te regardent avec cet intérêt poli qu'on a pour les malheurs des autres. Un garde, sur le seuil, note quelque chose sur une tablette. On saura ton visage, désormais, dans la maison Marrel.",
      { with: "tibere", text: "Tibère te tend la main pour t'aider à te relever. Il regarde le seuil, le garde à la tablette, et il baisse les yeux plus vite qu'il ne faudrait." },
    ],
    choices: [{ back: "IC_pont" }] },

  IC_amedee: { act: "I", title: "Amédée Pelletan", place: "changeurs", backName: "le pupitre d'Amédée",
    fx: { meet: "ic_amedee" },
    text: [
      { first: true, text: "« Amédée Pelletan, commis de troisième rang, pour vous servir. » Il a vingt-deux ans, au plus, et l'enthousiasme d'un garçon qui croit que la Banque est le centre du monde et qu'il en tient déjà un rayon. « Vous n'êtes pas cliente, je le vois à vos bottes. Vous êtes… quoi ? Chercheur{e} ? Comme Monsieur Brunel ? » Il dit le nom avec respect." },
      { again: true, text: "Amédée lève le nez de son registre et sourit, ravi de l'interruption." },
      "« Ici, dit-il en baissant la voix, on ne parle jamais des clients. {{oreille#ic_amedee_vin|C'est la règle de la maison, et je la respecte|Sauf à la taverne du Trébuchet, après six heures, quand quelqu'un paie le pichet}}. »",
      "Il trempe sa plume, la secoue au-dessus de l'encrier. « Monsieur Brunel, c'est un homme. {{oreille|Il trouve toujours ce qu'il cherche|Il me fait peur, et j'aimerais qu'il connaisse mon nom}}. Il a des gens partout dans la ville. Des oreilles, comme il dit. » Il rit, content du mot.",
      { if: { has: "metier:parole" }, text: "Tu connais ce genre de garçon. Il parlera. Il suffit de lui donner une table et un public." },
    ],
    choices: [
      { label: "« Six heures, au Trébuchet ? Le pichet est pour moi. »", hide: { any: [{ seen: "IC_amedee_vin" }, { not: { voile: "ic_amedee_vin" } }] }, if: { gold: { min: 4 } }, why: "Il te faut au moins quatre liards pour le pichet.", fx: { gold: -4 }, to: "IC_amedee_vin" },
      { label: "Le flatter sur son travail, et l'inviter à boire après sa journée", hide: { seen: "IC_amedee_vin" }, if: { gold: { min: 4 } }, why: "Il te faut au moins quatre liards pour le pichet.",
        test: { dom: "social", diff: 0, label: "Gagner la confiance d'un commis", help: [{ if: { has: "metier:parole" }, v: 15 }, { with: "lison", v: 5 }] },
        win: { fx: { gold: -4 }, to: "IC_amedee_vin" }, lose: { to: "IC_amedee_non" } },
      { label: "Lui demander à quel guichet on retrouve un dépôt ancien", hide: { any: [{ not: { seen: "IC_coffre_nicole" } }, { has: "ic:coffre_numero" }, { has: "ic:coffre" }, { seen: "IC_amedee_vin" }] }, to: "IC_amedee_non" },
      { back: "IC_comptes" },
    ] },

  IC_amedee_non: { act: "I", title: "La règle de la maison", place: "changeurs",
    text: [
      "Amédée rougit jusqu'aux oreilles et se penche sur son registre. « Je ne peux pas, dit-il. Le maître des comptes nous regarde. Les dépôts anciens, c'est le guichet douze, et il faut le numéro du reçu. Sans numéro, ils ne vous ouvriront rien, même si c'est la reine qui demande. »",
      "Il recommence à écrire. Il a l'air de regretter, un peu. Le maître des comptes passe derrière lui et regarde sa page.",
    ],
    choices: [{ back: "IC_comptes" }] },

  IC_amedee_vin: { act: "I", title: "La taverne du Trébuchet", place: "changeurs",
    fx: { ep: ["perso", 400] },
    text: [
      "Le Trébuchet est une salle basse au pied des Archives, où les commis de toute l'île viennent boire à six heures. Amédée arrive en courant, s'assied, vide son premier gobelet comme un homme qui a soif depuis le matin, et parle. Il parle de son maître des comptes, de sa logeuse, d'une fille de la Monnaie qui ne le regarde pas. Au deuxième gobelet, il parle de Monsieur Brunel.",
      "« Il a ses oreilles, je vous l'ai dit. Il y en a une qui vient tous les jeudis à la petite porte, sur le flanc de l'hôtel. Un vieux sergent, une balafre ici, qui sent le vin. Cinq ducats. C'est moi qui fais les reçus. » Il rit. « Il signe comme un enfant. »",
      { with: "tibere", text: "Tibère est resté au comptoir, de dos, à trois pas. Tu vois ses épaules se raidir, et sa main se refermer sur son gobelet." },
      "Au troisième gobelet, il se penche sur la table. « Et je vais vous dire autre chose, parce que vous avez une bonne figure. L'autre jour, sur le bureau de Monsieur Brunel, il y avait un billet de Madame. Je l'ai lu en posant le courrier. *Je veux tout, Lothaire. L'or pour Aveline, les feuillets pour ma cheminée.* » Il se redresse, effrayé de lui-même. « Je n'ai rien dit. »",
      { if: { all: [{ seen: "IC_coffre_nicole" }, { not: { has: "ic:coffre" } }] }, text: "Au moment de partir, tu lui parles du coffre de Josselin Aguesse. Il fronce le nez, compte sur ses doigts. « Les vieux dépôts des bateliers ? Ils sont dans les cotes de quatre cents. Revenez avec le nom au guichet douze, et dites quatre cent dix-sept. Si ce n'est pas celui-là, c'est le suivant. »" },
    ],
    choices: [
      { label: "Noter le numéro, et raccompagner Amédée jusqu'au pont", fx: { flag: ["ic:note_lothaire", "tibere:espion", "ic:coffre_numero"], clue: "ic_c_billet" }, hide: { not: { all: [{ seen: "IC_coffre_nicole" }, { not: { has: "ic:coffre" } }] } }, to: "IC_amedee_fin" },
      { label: "Raccompagner Amédée jusqu'au pont", fx: { flag: ["ic:note_lothaire", "tibere:espion"], clue: "ic_c_billet" }, hide: { all: [{ seen: "IC_coffre_nicole" }, { not: { has: "ic:coffre" } }] }, to: "IC_amedee_fin" },
    ] },

  IC_amedee_fin: { act: "I", title: "Sur le pont, le soir", place: "changeurs",
    text: [
      "Amédée marche de travers, en chantonnant une chanson de commis où il est question d'une veuve et d'un taux d'intérêt. Au milieu du pont, il s'arrête, regarde l'eau, et dit, très sérieux : « Ne répétez rien. Monsieur Brunel entend tout. Il a un instrument. » Il se tapote l'oreille. « On dit. »",
      "Il s'en va vers la rive. Tu restes un moment à regarder les lanternes de l'île s'allumer une à une.",
    ],
    choices: [{ back: "IC_pont" }] },
});

// ==================================================================== Corisande Marrel
Object.assign(P, {
  IC_antichambre: { act: "I", title: "L'antichambre", place: "changeurs",
    text: [
      "Au deuxième étage, une antichambre tendue de cuir de Cordoue, des banquettes, une horloge à poids qui bat lourdement. Un secrétaire en noir, assis derrière une table nue, tient un registre de rendez-vous. Il a une voix aimable et des yeux qui ne le sont pas. « Dame Marrel reçoit sur rendez-vous, dit-il. Le prochain est dans onze jours. »",
      "Deux marchands attendent déjà sur la banquette, leur chapeau sur les genoux. L'un d'eux a l'air d'attendre depuis le matin.",
      { with: "tibere", text: "Tibère t'a suivi{e} dans l'escalier, finalement, et il regarde la porte du cabinet. « {{oreille#ic_tib_corisande|Je ne suis jamais monté si haut, moi|Je suis monté ici une fois, la semaine de la mort d'Odeline, et la vieille m'a payé d'avance}}, dit-il. »" },
      { with: "gildas", text: "Frère Gildas s'assied sur la banquette à côté des marchands, les mains dans ses manches, avec la patience de quelqu'un qui a attendu des heures dans des endroits plus froids." },
    ],
    choices: [
      { label: "Donner ton nom, et celui d'Odeline Carrus", hide: { not: { has: "lothaire:offre" } }, to: "IC_corisande" },
      { label: "« Dites à Dame Marrel que l'apprenti{e} d'Odeline Carrus a quelque chose à lui vendre. »", hide: { has: "lothaire:offre" },
        test: { dom: "social", diff: -10, label: "Passer devant un secrétaire", help: [{ if: { has: "metier:parole" }, v: 15 }, { if: { has: "marrel:dessein" }, v: 10 }] },
        win: { to: "IC_corisande" }, lose: { to: "IC_lothaire" } },
      { label: "Laisse-moi faire", who: "tibere", hide: { has: "lothaire:offre" },
        test: { dom: "social", diff: 0, label: "Tibère glisse un mot au secrétaire" },
        win: { fx: { conf: { tibere: 2 } }, to: "IC_corisande" }, lose: { to: "IC_lothaire" } },
      { label: "Attendre, comme les marchands", hide: { has: "lothaire:offre" }, fx: { time: 2 }, to: "IC_lothaire" },
      { back: "IC_banque" },
    ] },

  IC_corisande: { act: "I", title: "Corisande Marrel", place: "changeurs", backName: "le cabinet de Corisande Marrel",
    fx: { meet: "corisande", ep: ["perso", 400] },
    text: [
      "Le secrétaire te fait entrer seul{e} : Dame Marrel reçoit une personne à la fois. Le cabinet est une pièce carrée, haute, avec une fenêtre sur toute la largeur de la Salve. Un feu de bois de pommier, une table de travail sans un papier dessus, un seul registre fermé par un fermoir de cuivre. Sur le mur, un portrait d'homme en fraise, très vieux, qui tient une balance.",
      "Corisande Marrel est assise près du feu. Soixante-sept ans, des cheveux blancs tirés en chignon, une robe de laine noire sans un bijou, sauf une bague à trois besants d'or. Elle verse elle-même le vin dans deux verres. Près de la fenêtre, dos à la lumière, un homme en gants gris se tient debout. Il porte à la ceinture un petit cornet d'os cerclé d'argent, le frère du tien.",
      "« Asseyez-vous. Votre maîtresse {{oreille#ic_cori_odeline|avait du goût, et une réputation que je respectais|m'a demandé deux mille ducats pour une porte dans le Beffroi, et elle est morte la nuit où je devais les payer}}. Je suis désolée pour vous. » Elle te tend un verre. « Je vous ai fait monter parce que {{oreille|j'aime connaître les gens qui cherchent dans ma ville|Lothaire dit que vous avez le cornet, et que vous l'écoutez déjà}}. »",
      "Lothaire Brunel n'a pas bougé. Il a seulement levé le cornet jusqu'à son oreille, sans se cacher, comme un homme qui met ses lunettes pour lire.",
    ],
    choices: [
      { label: "« On dit que la République vous doit beaucoup. »", hide: { seen: "IC_corisande_dette" }, to: "IC_corisande_dette" },
      { label: "« Que voulez-vous de moi ? »", hide: { seen: "IC_corisande_offre" }, to: "IC_corisande_offre" },
      { label: "« Qu'est-ce qui vous fait peur, Madame ? »", hide: { any: [{ seen: "IC_corisande_crainte" }, { not: { any: [{ voile: "ic_cori_ruine" }, { voile: "ic_cori_odeline" }] } }] }, to: "IC_corisande_crainte" },
      { label: "Te lever et prendre congé", big: true, hide: { not: { seen: "IC_corisande_offre" } }, to: "IC_corisande_fin" },
    ] },

  IC_corisande_dette: { act: "I", title: "La dette", place: "changeurs",
    text: [
      "Corisande Marrel sourit, pour la première fois, d'un sourire de grand-mère qui entend un enfant parler de la guerre. « On dit beaucoup de choses sur le pont. La République a {{oreille#ic_cori_dette|quelques embarras de trésorerie, comme toutes les républiques au printemps|quatre millions de dettes envers le duc d'Aveline, et c'est ma maison qui en a répondu sur sa signature}}. »",
      "Elle tourne son verre sans boire. « Si la ville ne paie pas à la Saint-Jean, {{oreille#ic_cori_ruine|nous renégocierons, comme on l'a toujours fait avec Aveline|les piques d'Aveline seront sur ce pont, et ma maison sera la première ouverte au pillage, parce que c'est la plus haute}}. Les gens du port croient que la dette est l'affaire des riches. La dette, c'est le pain. Le jour où la Banque tombe, les greniers ferment, et ce sont les gens du port qui ont faim. »",
      "« Nous paierons, dit-elle encore. {{oreille#ic_cori_or|Ma maison a des réserves que personne ne soupçonne|Avec l'or de la Muette, tout entier, si je le trouve avant la Saint-Jean, et je le trouverai}}. »",
      "Près de la fenêtre, Lothaire baisse un instant son cornet, puis le relève.",
      { if: { has: "poids:dette" }, text: "Lothaire parle pour la première fois, d'une voix douce. « Vous dites que la dette des autres ne vous regarde pas. Vous pensez à la vôtre, et à qui vous la devez. » Corisande lève un sourcil. Tu sens le rouge te monter au cou." },
    ],
    choices: [{ back: "IC_corisande" }] },

  IC_corisande_offre: { act: "I", title: "Une place", place: "changeurs",
    fx: { ep: ["perso", 300] },
    text: [
      "« Ce que je veux de vous ? » Corisande pose son verre. « Ce que votre maîtresse voulait me vendre, et plus. Vous cherchez ce qu'elle cherchait. Apportez-moi ce que vous trouverez sous les vieilles pierres de la reine : l'or, et {{oreille#ic_cori_registre|les vieux papiers, qui auront leur place dans les archives de ma famille|les feuillets de la Muette, que je jetterai au feu de cette cheminée, sous vos yeux si vous voulez}}. »",
      "« Deux cents ducats le feuillet. Le dixième de l'or. Une avance de deux ducats aujourd'hui, pour le principe. Et vous travaillerez {{oreille#ic_cori_heros|sous ma protection, qui vaut cher dans cette ville|jusqu'au jour où vous aurez trouvé ; après, vous serez une dépense, et c'est Lothaire qui règle mes dépenses}}. »",
      "Tu {{miroir|écoutes l'offre par prudence, pour savoir ce qu'ils savent|comptes déjà, malgré toi, ce que deux cents ducats paieraient de dettes et de loyers}}. Lothaire sourit sans bouger les lèvres.",
      { if: { has: "poids:amour" }, text: "« Vous pensez à quelqu'un, dit Lothaire, doucement. À ce que deux cents ducats achèteraient pour cette personne. C'est un bon calcul. Madame aime les gens qui font de bons calculs. »" },
      { if: { has: "poids:rien" }, text: "« Vous pensez que vous dormirez bien quand même, dit Lothaire, doucement. C'est rare. Madame aime les gens qui dorment bien. »" },
    ],
    choices: [{ back: "IC_corisande" }] },

  IC_corisande_crainte: { act: "I", title: "Ce qui fait peur", place: "changeurs",
    fx: { flag: "ic:corisande_crainte", ep: ["perso", 400] },
    text: [
      "Corisande Marrel te regarde longtemps. Le feu de pommier claque. Elle fait un geste de la main vers la fenêtre, et Lothaire, sans un mot, sort du cabinet et ferme la porte derrière lui.",
      "« {{oreille#ic_cori_crainte|Rien ne m'effraie, à mon âge|J'ai peur de mourir la dernière d'une maison de cinq siècles, et qu'on écrive aux Archives que c'est moi qui l'ai fermée}}, dit-elle. » Elle lève les yeux vers le portrait de l'homme à la balance. « Ricard Marrel. Il a commencé avec une table sur le pont, comme le vieux Dumay. Chaque génération depuis a ajouté un étage à cet hôtel. »",
      "« J'ai eu un fils. La fièvre des marais l'a pris à vingt ans, et sa femme après lui. Il me reste une petite-fille, Aliénor, qui a douze ans et qui dessine des chevaux. Je voudrais qu'elle hérite d'une maison, et pas d'un procès. » Elle se tait. Puis, plus bas : « Vous direz à Lothaire que nous avons parlé de l'or. »",
      { if: { voile: "ic_cori_odeline" }, text: "Tu penses aux deux mille ducats, et à la nuit où ils devaient changer de main. Corisande suit ton regard jusqu'au feu, et elle se tait." },
    ],
    choices: [{ back: "IC_corisande" }] },

  IC_corisande_fin: { act: "I", title: "Prendre congé", place: "changeurs",
    text: [
      "Corisande Marrel se lève quand tu te lèves, ce qu'elle ne fait sans doute pas pour les marchands. « Alors ? » Elle attend ta réponse avec l'air de quelqu'un qui connaît déjà les trois réponses possibles et le prix de chacune.",
      { if: { has: "lothaire:refuse" }, text: "« Lothaire me dit que vous lui avez déjà répondu non, sur le quai. Je préfère entendre les refus moi-même. Ils coûtent moins cher quand on les entend tôt. »" },
    ],
    choices: [
      { label: "Accepter l'avance et la place", tag: "La Banque +10", stain: true, fx: { flag: "ic:corisande_oui", gold: 40, fac: { banque: 10, hautes: -5 } }, to: "IC_corisande_sortie" },
      { label: "« Je réfléchirai, Madame. »", fx: { flag: "ic:corisande_peut_etre" }, to: "IC_corisande_sortie" },
      { label: "Refuser, poliment et nettement", tag: "La Banque −5", fx: { flag: "ic:corisande_non", fac: { banque: -5 } }, to: "IC_corisande_sortie" },
    ] },

  IC_corisande_sortie: { act: "I", title: "L'escalier de la Banque", place: "changeurs",
    text: [
      { if: { has: "ic:corisande_oui" }, text: "Le secrétaire te compte deux ducats neufs dans la paume, et te fait signer un reçu. Ta signature, sur le papier de la Banque, a l'air de celle de quelqu'un d'autre." },
      { if: { has: "ic:corisande_non" }, text: "Corisande Marrel incline la tête. « Bien. Vous changerez d'avis, ou quelqu'un d'autre trouvera à votre place. Les deux me conviennent. » Le secrétaire t'ouvre la porte." },
      { if: { has: "ic:corisande_peut_etre" }, text: "« Réfléchissez vite, dit Corisande Marrel. La Saint-Jean, elle, ne réfléchit pas. » Le secrétaire t'ouvre la porte." },
      "Tu descends l'escalier de pierre. Les marches sont creusées au milieu par cinq siècles de clients. En bas, le hall, le damier, le bruit des pièces.",
      { with: "tibere", text: "Tibère t'attend au pied de l'escalier, son chapeau à la main, et il te demande comment c'était avec une curiosité trop pressée. Puis il ajoute, tout bas, sans te regarder : « Fais attention à ce que tu dis devant moi, petit{e}. » Il remet son chapeau, et sort le premier." },
      { with: "lison", text: "Lison se décolle du mur. « Tu as signé quelque chose ? » Elle regarde tes mains, puis ton visage. Elle a sa réponse avant toi." },
    ],
    choices: [
      { label: "Un homme aux gants gris t'attend dans la galerie", big: true, hide: { seen: "IC_lothaire" }, to: "IC_lothaire" },
      { back: "IC_banque" },
    ] },

  IC_corisande_revoir: { act: "I", title: "Le cabinet, de nouveau", place: "changeurs",
    text: [
      "Le secrétaire te fait attendre exactement le temps qu'il faut pour que tu saches que tu attends. Puis Corisande Marrel te reçoit debout, près de la fenêtre, une lettre à la main, qu'elle plie quand tu entres.",
      { if: { has: "ic:corisande_oui" }, text: "« Vous avez trouvé quelque chose ? Non. Alors revenez quand vous aurez trouvé. Les avances, je les compte. »" },
      { if: { has: "ic:corisande_non" }, text: "« Vous revenez sur votre refus ? Non ? Alors c'est la curiosité qui vous ramène. Je n'ai pas le temps d'être curieuse. »" },
      { if: { has: "ic:corisande_peut_etre" }, text: "« Vous réfléchissez toujours. Moi aussi. Je réfléchis à qui d'autre pourrait chercher à votre place. »" },
      { after: "marrel:dessein", text: "Elle te regarde un peu plus longtemps que d'habitude, comme si quelque chose dans ton visage avait changé de prix." },
    ],
    choices: [
      { label: "Accepter enfin l'avance et la place", tag: "La Banque +10", stain: true, hide: { not: { has: "ic:corisande_peut_etre" } }, fx: { unflag: "ic:corisande_peut_etre", flag: "ic:corisande_oui", gold: 40, fac: { banque: 10, hautes: -5 } }, back: "IC_banque" },
      { back: "IC_banque" },
    ] },
});

Object.assign(V, {
  ic_tib_porte: { fx: { ep: ["perso", 100] } },
  ic_tib_corisande: { fx: { ep: ["perso", 100] } },
  ic_grand_livre: { fx: { clue: "ic_c_garantie" } },
  ic_cori_dette: { fx: { clue: "ic_c_dette", ep: ["perso", 200] } },
  ic_cori_or: { fx: { clue: "ic_c_or", ep: ["perso", 300] } },
  ic_cori_registre: { fx: { clue: "ic_c_registre", ep: ["perso", 300] } },
  ic_cori_odeline: { fx: { ep: ["perso", 200] } },
});
Object.assign(C, {
  ic_c_garantie: { rev: "B", text: "Grand livre de la Banque Marrel : la garantie de la dette d'Aveline, quatre millions de ducats, est portée sur les fonds de la maison et gagée sur ses titres du delta." },
  ic_c_dette: { rev: "B", text: "Corisande Marrel : la République doit quatre millions au duc d'Aveline, et la maison Marrel en a répondu sur sa signature." },
  ic_c_or: { rev: "B", text: "Corisande Marrel veut l'or de la Muette, tout entier, pour payer le duc avant la Saint-Jean." },
  ic_c_registre: { rev: "B", text: "Corisande Marrel veut les feuillets de la Muette pour les jeter au feu." },
  ic_c_billet: { rev: "B", text: "Billet de Corisande Marrel à Lothaire Brunel, lu par le commis Amédée Pelletan : « Je veux tout, Lothaire. L'or pour Aveline, les feuillets pour ma cheminée. »" },
});

// ==================================================================== Lothaire Brunel and the twin horn; the stair to the vaults
Object.assign(P, {
  IC_lothaire: { act: "I", title: "La galerie des portraits", place: "changeurs", backName: "la galerie des portraits",
    fx: { meet: "lothaire", ep: ["perso", 300] },
    text: [
      "La galerie longe le premier étage de la Banque, au-dessus du hall : un long couloir dallé, des fenêtres d'un côté, de l'autre une rangée de portraits, quinze générations de Marrel en fraise, en collerette, en col plat, tous la main posée sur une balance ou sur un livre de comptes. Lothaire Brunel t'attend devant le dernier, les mains croisées dans le dos. Gants gris. Une voix douce, presque timide.",
      { if: { has: "lothaire:refuse" }, text: "« Vous m'avez déjà dit non une fois, sur le pont des Lanternes. Je reviens toujours une deuxième fois. La deuxième fois, les gens savent mieux ce qu'ils refusent. »", else: "« Nous ne nous sommes jamais parlé, et pourtant je vous connais un peu. Vous êtes l'apprenti{e} d'Odeline Carrus. Vous avez son cornet. Vous l'avez déjà porté à l'oreille. »" },
      "Il lève son propre cornet, un os blanchi cerclé d'argent, le jumeau du tien, et le tient contre son oreille sans plus faire semblant. « Votre maîtresse {{oreille#ic_lot_odeline|et moi, nous faisions affaire depuis longtemps|m'a vendu une seule chose en vingt ans, et c'était une promesse qu'elle n'a pas tenue}}. » Il incline la tête. « Vous dites : bonjour, Monsieur. Vous pensez : c'est lui. Oui, c'est moi. »",
      "« Votre sergent {{oreille#ic_lot_tibere|est un brave homme, qui boit un peu trop, c'est tout|me coûte cinq ducats le jeudi, et me raconte vos journées jusqu'à la couleur de vos chausses}}. Et Madame {{oreille#ic_lot_feu|collectionne les vieux papiers, c'est une passion de famille|veut un feu assez grand pour six feuillets, et c'est moi qui lui porterai le bois}}. »",
      { with: "gildas", text: "Lothaire regarde Frère Gildas, une seule fois, de la tête aux sandales. « Votre moine prie beaucoup, dit-il. C'est bien. Quelqu'un doit le faire, dans cette affaire. »" },
      { with: "lison", text: "Lothaire regarde Lison, et son sourire s'élargit d'un rien. « Une Vasse, dit-il. Je reconnais la façon de se tenir près des portes. Saluez votre grand-mère de ma part. » Lison ne répond pas. Sa main s'est posée sur le manche de sa gaffe." },
    ],
    choices: [
      { label: "« Que fait ce cornet, exactement ? »", hide: { seen: "IC_lothaire_cornet" }, to: "IC_lothaire_cornet" },
      { label: "Penser très fort à une fausse piste, pendant qu'il écoute", hide: { any: [{ seen: "IC_lothaire_trompe" }, { seen: "IC_lothaire_lu" }] },
        test: { dom: "savoir", diff: -20, label: "Mentir avec sa tête", help: [{ if: { seen: "IC_lothaire_cornet" }, v: 15 }, { if: { has: "metier:parole" }, v: 10 }, { if: { has: "poids:rien" }, v: 10 }] },
        win: { to: "IC_lothaire_trompe" }, lose: { to: "IC_lothaire_lu" } },
      { label: "Le planter là, devant ses ancêtres", back: "IC_banque" },
    ] },

  IC_lothaire_cornet: { act: "I", title: "Le cornet jumeau", place: "changeurs",
    fx: { ep: ["perso", 300] },
    text: [
      "Lothaire tourne le cornet entre ses doigts gantés. « Deux cornets, taillés dans la même côte de baleine, il y a trois cents ans. Le vôtre et le mien. On dit qu'il y en avait d'autres, des loupes, des miroirs, toute une boutique d'instruments pour entendre ce que les gens ne disent pas. » Il sourit. « Le mien, {{oreille#ic_lot_vol|je l'ai acheté à un brocanteur de Port-Vasier, pour une bouchée de pain|je l'ai pris à un vieux des Joncs-Bas, sur la grève, il y a vingt ans, et il n'a plus rien entendu après}}. »",
      "« J'entends ce que les gens pensent en parlant. Seulement en parlant. Taisez-vous, et je n'entends que votre souffle. » Il range le cornet dans sa poche de poitrine. « C'est la seule chose que je vous apprendrai gratuitement. »",
      "« Le vôtre, je vous l'achète. Deux cents ducats, ce soir, en or d'Aveline. » Il attend. Puis il rit, doucement. « Vous dites : jamais. Vous pensez : deux cents. C'est déjà une conversation. »",
      { if: { has: "poids:dette" }, text: "« Deux cents ducats paieraient ce que vous devez, ajoute-t-il, et il vous en resterait. Je sais à qui vous devez. Lui aussi sait où vous habitez. »" },
    ],
    choices: [{ back: "IC_lothaire" }] },

  IC_lothaire_trompe: { act: "I", title: "Une fausse piste", place: "changeurs",
    fx: { flag: "ic:lothaire_trompe", ep: ["perso", 500] },
    text: [
      "Tu regardes Lothaire en face, et tu penses, fort, avec application, comme on récite une leçon : le caveau des Noyés, le caveau des Noyés, la dalle sous la troisième croix. Tu le penses en disant tout autre chose, une politesse sur les portraits, sur la lumière de la galerie.",
      "Lothaire écoute. Son regard se fige un instant, très court, le temps qu'il faut à un héron pour voir le poisson. « Les portraits sont mal éclairés, oui, dit-il. Vous avez raison. » Il te salue d'une inclinaison de tête, et il s'éloigne dans la galerie d'un pas plus rapide qu'à l'aller.",
      "Cette nuit, au cimetière des Noyés, des hommes en gants gris lèveront une dalle sous la troisième croix, et ils n'y trouveront qu'un mort, qui ne leur dira rien.",
    ],
    choices: [{ back: "IC_banque" }] },

  IC_lothaire_lu: { act: "I", title: "Penser fort", place: "changeurs",
    text: [
      "Tu essaies de penser à autre chose. Tu penses au caveau des Noyés, et au Beffroi, et au caveau des Noyés, et ta pensée glisse entre tes doigts comme une anguille.",
      "Lothaire sourit avec indulgence. « Vous pensez fort, dit-il. On pense fort quand on ment. Les gens qui disent vrai pensent à voix basse. » Il remet son cornet dans sa poche. « Revenez quand vous saurez vous taire en dedans. Ce sera plus intéressant pour nous deux. »",
    ],
    choices: [{ back: "IC_lothaire" }] },

  IC_galerie: { act: "I", title: "La porte basse", place: "changeurs",
    text: [
      "La porte basse, à gauche du hall, donne sur un escalier qui descend en tournant. Tu descends douze marches avant qu'une grille t'arrête. Derrière la grille, un garde assis sur un tabouret, une lanterne, et l'escalier qui continue plus bas, dans le noir.",
      "Les murs changent au milieu de la descente. En haut, c'est la pierre blanche de l'île, bien taillée, jointoyée au mortier clair. En bas, ce sont de gros blocs gris, plus anciens, mal équarris, avec des traces de feu : les fondations du vieux palais de la reine. Sur l'un d'eux, un visage de femme sculpté en bas-relief, couronné, {{pie#ic_bas_relief|la bouche effacée par le temps|la bouche effacée au ciseau, d'un seul coup net, par quelqu'un qui savait où frapper}}.",
      "La serrure de la grille est {{pie#ic_grille|une grosse serrure de fer, à trois pênes, neuve|une grosse serrure de fer à trois pênes, neuve, posée sur une vieille grille dont les gonds ne tiennent plus qu'à deux clous rouillés}}.",
      "L'air qui remonte est froid et sent la vase. Dans l'escalier, l'écho de tes pas {{echo#ic_echo_palais|tourne et se perd vers le bas|garde une voix de femme, rauque, qui crie : « Ouvrez à votre reine ! Ouvrez, je vous l'ordonne ! », puis des coups contre du bois}}.",
      "« Les chambres fortes, c'est en bas, dit le garde sans se lever. Pour descendre, il faut un ordre écrit de Madame, ou de Monsieur Brunel. Vous avez un ordre ? » Tu n'en as pas. Il le sait.",
    ],
    choices: [{ back: "IC_banque" }] },
});

// ==================================================================== side quest: the forgotten deposit chest
Object.assign(P, {
  IC_coffre_nicole: { act: "I", title: "Nicole Aguesse", place: "changeurs", backName: "la table de Nicole Aguesse",
    fx: { questSeen: "IC_coffre", meet: "ic_nicole" },
    text: [
      { first: true, text: "La femme en deuil s'appelle Nicole Aguesse. Elle a soixante et un ans, des mains de lavandière et un chapeau de veuve trop grand pour elle. Elle finit par ranger la broche dans son corsage, et te regarde comme on regarde la dernière personne à qui l'on n'a pas encore demandé." },
      { first: true, text: "« Mon grand-père, Josselin Aguesse, était batelier sur la Salve. Le jour où il a vendu sa barque, il a mis notre bien au coffre de la Banque. Ce qu'il y avait, personne ne sait : il disait *notre bien*, c'est tout. Il est mort. Mon père est mort. Je suis la dernière. » Elle sort de son sac une lettre pliée en quatre, usée aux plis. « La Banque dit qu'un dépôt qu'on ne réclame pas pendant soixante ans revient à la maison. Les soixante ans tombent à Pâques. Et il faut le numéro du reçu, sinon ils n'ouvrent pas. »" },
      { again: true, text: "Nicole Aguesse attend à sa table, la tabatière de son grand-père sous la main. Elle te regarde arriver avec un espoir qu'elle essaie de cacher." },
      "Elle déplie la lettre. Une écriture d'homme qui a peu écrit : *Notre bien est au coffre. Le numéro est avec moi, toujours, là où je prends mon plaisir. {{loupe#ic_lettre_josselin|Que Dieu vous garde|Le papier dans le coffre vaut plus que l'argent. Ne le montrez pas aux Fourcaud}}.*",
      "Sur la table, à côté d'elle, une vieille tabatière de corne, {{pie#ic_tabatiere|toute simple, polie par les doigts, au couvercle orné d'une barque gravée|plus profonde dedans que dehors : sous le tabac, un double fond tient à la cire}}. « C'est tout ce que j'ai de lui, dit-elle. Il prisait. Ma grand-mère disait que c'était son seul plaisir. »",
      { with: "lison", text: "Lison regarde la barque gravée sur le couvercle. « Une barque de Salve à fond plat, dit-elle. Les bateliers les gravaient pour leurs enfants. » Elle parle doucement à Nicole, pour une fois." },
    ],
    choices: [
      { label: "Demander à Nicole la permission d'ouvrir la tabatière, et soulever le fond", hide: { any: [{ not: { voile: "ic_tabatiere" } }, { has: "ic:coffre_numero" }] }, to: "IC_coffre_tabatiere" },
      { label: "Lui demander la tabatière, et la peser dans ta main", hide: { any: [{ has: "ic:coffre_numero" }, { seen: "IC_coffre_tabatiere" }] },
        test: { dom: "savoir", diff: -10, label: "Sentir un double fond", help: [{ if: { has: "metier:mains" }, v: 20 }, { with: "gildas", v: 5 }] },
        win: { to: "IC_coffre_tabatiere" }, lose: { to: "IC_coffre_cherche" } },
      { label: "« Je vais chercher ce numéro. »", hide: { any: [{ has: "ic:coffre_numero" }, { seen: "IC_coffre_cherche" }] }, to: "IC_coffre_cherche" },
      { label: "« J'ai le numéro. Venez avec moi à la Banque. »", hide: { not: { has: "ic:coffre_numero" } }, to: "IC_coffre_guichet" },
      { back: "IC_tables" },
    ] },

  IC_coffre_cherche: { act: "I", title: "Un numéro perdu", place: "changeurs",
    text: [
      "Tu tournes la tabatière entre tes doigts, tu l'ouvres, tu respires une odeur de tabac éventé et de corne. Rien. Tu la rends à Nicole. Elle la serre contre elle.",
      "« Les commis de la Banque disent que les numéros sont dans leurs registres, mais qu'ils ne cherchent pas pour les pauvres. Le vieux Dumay dit que la loi oblige la Banque à doubler ses reçus aux Archives de la République. » Elle hausse les épaules. « Aux Archives, il faut payer pour entrer, et payer pour lire. »",
      "Tu gardes en tête les trois portes : le commis bavard, les Archives, la tabatière elle-même, qui t'a paru plus lourde qu'elle ne devrait.",
    ],
    choices: [{ back: "IC_coffre_nicole" }] },

  IC_coffre_tabatiere: { act: "I", title: "La tabatière", place: "changeurs",
    fx: { flag: "ic:coffre_numero", ep: ["perso", 300] },
    text: [
      "Nicole te tend la tabatière en hésitant. Tu vides le tabac dans ta paume, une poussière brune et sèche. Au fond, du bout de la lame de ta dague, tu cherches le bord. La cire cède. Un disque de corne se soulève.",
      "Dessous, plié en huit, un petit carré de papier jauni, imprégné d'odeur de tabac. *Banque Marrel. Dépôt reçu de Josselin Aguesse, batelier. Un coffret de chêne ferré. Cote quatre cent dix-sept.* Le cachet aux trois besants, un peu baveux.",
      "Nicole porte la main à sa bouche. « Là où il prenait son plaisir », dit-elle. Tu {{miroir|souris de la voir heureuse|penses à la boîte à double fond de l'établi d'Odeline, et à ce qu'Odeline cachait à toi}}. Elle rit, et puis elle pleure, et puis elle rit encore, et les changeurs des tables voisines font semblant de compter.",
    ],
    choices: [
      { label: "« Venez. On va à la Banque, tout de suite. »", to: "IC_coffre_guichet" },
      { back: "IC_tables" },
    ] },

  IC_coffre_refus: { act: "I", title: "Le guichet douze", place: "changeurs",
    text: [
      "Le guichet douze est le dernier, le plus sombre. Le commis derrière la grille est un vieil homme aux paupières lourdes. « Aguesse ? Batelier ? Il me faut la cote. Sans la cote, je ne descends pas. Les chambres sont grandes, et mes genoux sont vieux. »",
      "Il consent à ajouter, en reprenant sa plume : « Les reçus de dépôt sont doublés aux Archives de la République, comme la loi le veut. Allez voir là-bas. Si Larcher veut bien vous ouvrir. »",
    ],
    choices: [{ back: "IC_banque" }] },

  IC_coffre_guichet: { act: "I", title: "Le coffre quatre cent dix-sept", place: "changeurs", when: "day",
    text: [
      "Nicole Aguesse entre dans le hall de la Banque comme on entre dans une église où l'on n'est pas sûr d'avoir le droit de prier. Au guichet douze, le vieux commis lit la cote, soupire, prend une lanterne et un trousseau, et disparaît par la porte basse.",
      "Il revient longtemps après, suivi d'un garde qui porte un coffret de chêne noirci, ferré aux angles, gros comme un pain de quatre livres. Il souffle la poussière du couvercle. « Quatre cent dix-sept. Aguesse. À neuf jours près, il était à nous. » Il fait signer Nicole d'une croix, et toi comme témoin.",
      "Le coffret n'a pas de clé. Le commis tend un petit levier de fer, par-dessus la grille, avec l'air de quelqu'un qui en a vu d'autres.",
      { with: "tibere", text: "Tibère se tient à l'écart, près du portail, et regarde le coffret de loin. Il a l'air d'un homme qui pense à une autre femme, plus jeune, et à ce qu'il lui laissera." },
    ],
    choices: [{ label: "Forcer le couvercle, sous les yeux de Nicole", to: "IC_coffre_dedans" }] },

  IC_coffre_dedans: { act: "I", title: "Notre bien", place: "changeurs",
    fx: { clue: "ic_c_titre_aguesse", ep: ["perso", 500] },
    text: [
      "Le couvercle cède avec un craquement sec. Dans le coffret, sur un lit de paille de seigle devenue grise, deux choses. Un hanap d'argent, haut comme la main, dont le pied est une barque et la coupe une vague ; et un rouleau de parchemin, serré dans un étui de cuir.",
      "Nicole ne touche pas au hanap. Elle prend le rouleau, le déroule à moitié, te le tend : elle ne sait pas lire. Tu lis. *Par la Charte des Hautes-Eaux, et de notre main, nous donnons à Guiot Aguesse et à ses hoirs les douze arpents gagnés sur la mer au lieu-dit la Pointe-aux-Hérons, pour en jouir à toujours. Ysaure, reine. L'an mil onze.* Le sceau pend encore, en cire verte, une barque et une étoile.",
      "« La Pointe-aux-Hérons, dit Nicole. C'est la saline des Fourcaud, maintenant. Mon père y a travaillé toute sa vie. Comme journalier. »",
      { with: "lison", text: "Lison s'est approchée sans bruit. Elle regarde le sceau vert, longuement, et quelque chose passe sur son visage, qu'elle range aussitôt." },
      "Nicole repose le rouleau dans l'étui et pousse le hanap vers toi. « Prenez-le. C'est votre part. Moi, je garde le papier. Je ne sais pas ce qu'il vaut. Mais c'est notre nom dessus. »",
    ],
    choices: [
      { label: "Accepter le hanap, puisqu'elle y tient", fx: { item: "ic_tr_hanap", clock: { tresors: 1 }, flag: ["tresor:ic_hanap", "ic:coffre"], set: { ic_coffre: "partage" }, quest: "IC_coffre", fac: { hautes: 5 } }, to: "IC_coffre_fin" },
      { label: "Refuser : le hanap est à elle aussi, et il lui faudra de quoi payer un notaire", fx: { flag: "ic:coffre", set: { ic_coffre: "rendu" }, quest: "IC_coffre", fac: { hautes: 10 }, conf: { lison: 5, gildas: 3 }, ep: ["perso", 300] }, to: "IC_coffre_fin" },
      { label: "Prendre le hanap et le parchemin, et lui laisser la paille", tag: "Les Hautes-Eaux −10", stain: true, fx: { item: ["ic_tr_hanap", "ic_titre_aguesse"], clock: { tresors: 1 }, flag: ["tresor:ic_hanap", "ic:coffre"], set: { ic_coffre: "vole" }, quest: "IC_coffre", fac: { hautes: -10 }, conf: { lison: -10, tibere: -3 } }, to: "IC_coffre_vol" },
    ] },

  IC_coffre_fin: { act: "I", title: "Le parchemin des Aguesse", place: "changeurs",
    text: [
      { if: { is: { ic_coffre: "partage" } }, text: "Tu prends le hanap. Il est lourd, froid, et la barque du pied a été polie par des doigts pendant des années avant d'aller dormir dans la paille. Nicole hoche la tête, satisfaite : le marché est juste, et elle le sait." },
      { if: { is: { ic_coffre: "rendu" } }, text: "Tu repousses le hanap vers elle. Nicole te regarde sans comprendre, puis elle comprend, et elle le serre contre sa poitrine avec le rouleau, les deux ensemble, comme un enfant qu'on vient de lui rendre." },
      "Sur les marches de la Banque, Nicole serre l'étui de cuir sous son châle. « Je vais le montrer à quelqu'un qui sait lire les vieux actes. Mon neveu connaît un tribun des Hautes-Eaux, au Conseil. » Elle s'en va par le pont, à petits pas pressés, la tête haute dans son chapeau trop grand.",
      { with: "gildas", text: "Frère Gildas la regarde partir. « Un titre de la reine, dit-il à mi-voix. Il y en a d'autres, dans des coffres et des greniers. Les gens les gardent sans savoir lire, parce que c'est leur nom dessus. »" },
    ],
    choices: [{ back: "IC_banque" }] },

  IC_coffre_vol: { act: "I", title: "La paille", place: "changeurs",
    text: [
      "Tu prends le hanap. Tu prends le rouleau. Nicole tend la main, puis la retire, comme on la retire d'un feu. Elle reste muette. Les gens comme elle ont appris à se taire dans les banques.",
      "« C'était notre nom », dit-elle seulement. Elle remet la paille grise dans le coffret vide, referme le couvercle cassé, et elle sort, sans se retourner, avec le coffret dans les bras.",
      { with: "lison", text: "Lison te regarde comme elle regarderait une anguille crevée sur le ponton. Elle sort derrière Nicole. Tu la retrouves plus tard sur le pont, et elle garde le silence toute la soirée." },
      { with: "tibere", text: "Tibère se racle la gorge. « J'ai fait pire, dit-il. Mais j'étais ivre. »" },
    ],
    choices: [{ back: "IC_banque" }] },
});

Object.assign(V, {
  ic_lot_tibere: { fx: { flag: "tibere:espion", ep: ["perso", 300] } },
  ic_lot_feu: { fx: { clue: "ic_c_feu", ep: ["perso", 300] } },
  ic_lot_vol: { fx: { ep: ["perso", 200] } },
  ic_echo_palais: { fx: { ep: ["perso", 300] } },
  ic_tabatiere: { fx: { ep: ["perso", 100] } },
});
Object.assign(C, {
  ic_c_feu: { rev: "B", text: "Lothaire Brunel : Madame veut un feu assez grand pour six feuillets, et c'est lui qui portera le bois." },
  ic_c_titre_aguesse: { rev: "R", text: "Titre des Aguesse, an mil onze, scellé de la reine : « par la Charte des Hautes-Eaux », douze arpents à la Pointe-aux-Hérons, aujourd'hui la saline des Fourcaud." },
});

// ==================================================================== the Council of Counters: a public session
Object.assign(P, {
  IC_conseil: { act: "I", title: "Le palais du Conseil", place: "changeurs", when: "day", backName: "le palais du Conseil",
    text: [
      { first: true, text: "Le palais du Conseil des Comptoirs est bas et large, coiffé d'un dôme de plomb verdi. Au-dessus de la porte, quarante écussons peints en deux rangées : la tour d'argent des Delisle, les trois besants des Marrel, la gerbe verte des Fourcaud, la navette des Vernier, et trente-six autres. Un banc de pierre court le long de la façade ; des solliciteurs y attendent, leur requête roulée dans la main." },
      { first: true, text: "Un huissier en robe bleue crie à intervalles réguliers, d'une voix qui a crié la même chose pendant trente ans : « Séance publique ! Les tribunes sont ouvertes au peuple de Salvèze ! Les armes au vestiaire ! »" },
      { again: true, text: "Le dôme verdi, les quarante écussons, l'huissier en robe bleue. Les solliciteurs sur leur banc de pierre ont changé ; leurs requêtes roulées sont les mêmes." },
      "Dans le vestibule, sous la coupole, la pierre {{echo#ic_echo_conseil|renvoie le bruit des pas et des conversations|garde une voix d'homme, calme, qui dicte : « Qu'on lui coupe la langue, et qu'on écrive qu'elle est devenue folle. Le greffier notera : à l'unanimité des Comptoirs »}}.",
      { after: "ic:expulse", text: "L'huissier en robe bleue te reconnaît, et il croise sa masse en travers de l'escalier des tribunes, sans un mot." },
    ],
    choices: [
      { label: "Monter aux tribunes publiques pour la séance", big: true, hide: { any: [{ seen: "IC_seance" }, { has: "ic:expulse" }] }, to: "IC_seance" },
      { label: "Chercher le tribun Vimeux sous les arcades", hide: { any: [{ not: { has: "ic:vimeux_attend" } }, { seen: "IC_tribun_apres" }] }, to: "IC_tribun_apres" },
      { label: "Les tribunes publiques, un jour sans séance", hide: { not: { seen: "IC_seance_fin" } }, to: "IC_conseil_vide" },
      { back: "IC_pont" },
    ] },

  IC_conseil_vide: { act: "I", title: "La salle vide", place: "changeurs",
    text: [
      "Sans séance, la grande salle est un bois de bancs de chêne en fer à cheval, sous une lumière grise qui tombe du dôme. Un valet passe la cire sur le banc des Marrel. Un autre balaie les écorces de noix que le peuple des tribunes a jetées.",
      "Sur l'estrade du prévôt, le fauteuil à haut dossier est couvert d'une housse. Derrière, au mur, une grande tapisserie montre la fondation de la République : des marchands en robe autour d'une table, une charte qu'ils signent, et dans un coin, minuscule, à la fenêtre d'une tour, une femme couronnée {{pie#ic_tapisserie|qui regarde la scène|qui regarde la scène, la bouche cousue d'un fil rouge que le tisserand a repassé sur l'ancien, plus clair, d'une bouche ouverte}}.",
    ],
    choices: [{ back: "IC_conseil" }] },

  IC_seance: { act: "I", title: "La séance publique", place: "changeurs",
    fx: { meet: "delisle", ep: ["perso", 300] },
    text: [
      "Tu montes avec les clercs, les commis et les curieux, et tu trouves une place sur le gradin du haut, entre un vendeur d'oublies et une vieille qui tricote. En bas, quarante bancs de chêne en fer à cheval, un par maison, et au bout du fer à cheval, plus bas que les autres, un banc sans écusson. Sur l'estrade, dans un fauteuil à haut dossier, le prévôt.",
      "Haumont Delisle a soixante et onze ans, un crâne poli, une robe de velours gris et une voix qui caresse la salle. Derrière lui, un jeune clerc maigre et pâle tient ses papiers. Le prévôt ouvre la séance par une prière pour la République, puis il parle de la dette, avec des mots simples, comme on parle à des enfants inquiets.",
      "« Le duc d'Aveline est un voisin courtois, et Salvèze honore ses dettes. Salvèze paiera à la Saint-Jean, dit-il, {{oreille#ic_prevot|ou je rendrai ma charge le jour même, devant vous|ou elle paiera autrement, et j'aurai ma place à la table du duc}}. » On applaudit sur les bancs. Il sourit et lève la main pour faire taire les applaudissements, sans hâte.",
      { with: "tibere", text: "Tibère, à côté de toi, applaudit trois fois, mollement, en regardant ailleurs. « Il a toujours bien parlé, celui-là, grogne-t-il. C'est lui qui a signé ma révocation. Avec la même voix. »" },
      { with: "lison", text: "Lison s'est assise sur la marche, les genoux sous le menton. Elle regarde le banc sans écusson, en bas, et pas le prévôt." },
    ],
    choices: [{ label: "Écouter les conseillers qui demandent la parole", to: "IC_seance_comptoirs" }] },

  IC_seance_comptoirs: { act: "I", title: "Les Comptoirs", place: "changeurs",
    text: [
      "Le prévôt propose un impôt sur le sel, un sou la livre, pour payer le duc. Maître Fourcaud se lève au banc de la gerbe verte : un homme rond, rose, aux mains baguées, qui parle en souriant comme s'il s'excusait d'avoir raison. « L'impôt est juste. Le grain aussi a ses peines. Les greniers Fourcaud sont pleins {{oreille#ic_fourcaud|à moitié, hélas, l'hiver a été dur|jusqu'aux poutres, et je ne les ouvrirai qu'à six sous la livre}}. » Il se rassied, content.",
      "Au banc de la navette, une femme d'une soixantaine d'années se lève en s'appuyant sur une canne à pommeau d'ivoire. Dame Vernier. « La maison Vernier votera {{oreille|selon sa conscience, comme toujours|contre l'impôt, et puis elle votera pour, parce que la Banque tient ses billets}}. » Rires sur les bancs. Elle attend qu'ils passent, et se rassied sans avoir souri.",
      "Un vieux conseiller du banc des Ancres se lève à son tour, parle longtemps des ancres, des taxes de quai, de son grand-père. La salle en profite pour bavarder, et lui-même regarde par la fenêtre en parlant.",
      { if: { has: "metier:parole" }, text: "Tu connais ces salles-là, en plus petit : les ventes aux enchères des Halles, les assemblées de la confrérie des brocanteurs. Tout s'y décide avant, dans les couloirs. La séance sert à le dire tout haut." },
    ],
    choices: [{ label: "Le banc sans écusson : un homme se lève", to: "IC_seance_tribun" }] },

  IC_seance_tribun: { act: "I", title: "Le tribun des Hautes-Eaux", place: "changeurs",
    fx: { meet: "ivc_vimeux" },
    text: [
      "Au bout du fer à cheval, l'homme qui se lève est large, tanné, les avant-bras couverts de vieilles brûlures de sel. Achille Vimeux, saunier de Grisemotte, tribun des marais : les Hautes-Eaux ont une voix au Conseil depuis la grande crue, et aucun vote. Il parle sans notes, d'une voix faite pour porter d'un bassin à l'autre.",
      "« Un sou la livre sur le sel, c'est un sou la livre sur nous. Les Hautes-Eaux paieront leur part {{oreille#ic_vimeux|comme elles l'ont toujours payée, sans se plaindre|le jour où on leur rendra leurs terres, et pas un grain de sel avant}}. » Les bancs grondent. Il attend. « Nos salines sont à vous, sur vos registres. Nos pères disaient qu'il y en a eu d'autres, des registres, plus vieux, où elles étaient à eux. »",
      { if: { any: [{ is: { ic_coffre: "partage" } }, { is: { ic_coffre: "rendu" } }] }, text: "« Une veuve, ce matin, m'a montré un titre de la reine, ajoute-t-il, plus bas. Avec un sceau vert. » Il se rassied. Sur le banc des Fourcaud, Maître Fourcaud a cessé de sourire." },
      "Le prévôt remercie le tribun pour sa franchise, d'une voix si douce qu'on entend à peine les mots, et donne la parole à la Banque.",
    ],
    choices: [{ label: "L'orateur de la Banque monte à l'estrade", to: "IC_seance_orateur" }] },

  IC_seance_orateur: { act: "I", title: "L'orateur de la Banque", place: "changeurs",
    text: [
      "La Banque Marrel n'a pas de banc au Conseil, elle en a trois. L'homme qui parle pour elle n'est pas un Marrel : c'est Maître Guérande, son avocat, un homme long, sec, vêtu de noir, qui parle sans jamais élever la voix, comme on lit un acte.",
      "« La Banque Marrel a répondu de la dette d'Aveline. Elle en répond encore. Messieurs les Comptoirs, la Banque garantit la dette {{oreille#ic_orateur|sur ses fonds propres, comme elle l'a toujours fait, sans rien demander à la ville|avec un or que personne n'a encore sorti de l'eau, et qu'elle sortira avant la Saint-Jean, quitte à brûler ce qui dort avec}}. L'impôt du sel n'est qu'un complément. Un geste de la ville envers elle-même. »",
      "Il se rassied. On applaudit sur les trois bancs de la Banque. Le prévôt fait signe au greffier de préparer le vote.",
      { with: "gildas", text: "Frère Gildas, à côté de toi, a fermé les yeux pendant tout le discours de Maître Guérande, comme on écoute une messe dans une langue qu'on comprend trop bien." },
    ],
    choices: [{ label: "Le greffier prépare le vote : c'est le moment", big: true, to: "IC_seance_choix" }] },

  IC_seance_choix: { act: "I", title: "Avant le vote", place: "changeurs",
    text: [
      "Le greffier déroule la liste des quarante maisons. Dans la salle, on parle à voix basse, on se penche d'un banc à l'autre. Aux tribunes, le vendeur d'oublies fait sa tournée. Pendant le temps du vote, n'importe qui peut crier quelque chose d'en haut, et se faire jeter dehors par les huissiers ; ça arrive une fois par séance, et le peuple des tribunes aime ça.",
      "En bas, au bout des bancs, le tribun Vimeux est assis seul, les mains à plat sur la table. Derrière l'estrade, le jeune clerc pâle du prévôt range des papiers qui n'ont pas besoin de l'être. Un page en livrée bleue court d'un banc à l'autre avec des billets pliés : pour un liard, il porte un mot n'importe où dans la salle.",
      { with: "tibere", text: "Tibère se penche vers toi. « Si tu cries, crie court. Les huissiers comptent jusqu'à trois avant de descendre. »" },
      { with: "lison", text: "Lison te regarde de côté. « Tu as quelque chose à dire, toi ? Dis-le bien, alors. Ou tais-toi bien. »" },
    ],
    choices: [
      { label: "Te lever et interpeller le Conseil, depuis les tribunes", to: "IC_interpeller" },
      { label: "Rester assis{e}, te taire, et écouter ce qui se dit sous le bruit", to: "IC_taire" },
      { label: "Faire porter un mot au tribun Vimeux par le page (1 liard)", fx: { gold: -1, flag: "ic:vimeux_attend" }, to: "IC_mot_tribun" },
      { label: "Faire porter un mot au jeune clerc du prévôt (1 liard)", hide: { not: { voile: "ic_prevot" } }, fx: { gold: -1 }, to: "IC_mot_clerc" },
    ] },

  IC_interpeller: { act: "I", title: "Une voix des tribunes", place: "changeurs",
    text: [
      "Tu te lèves. Le vendeur d'oublies s'écarte. Des têtes se tournent vers le haut, d'abord dans les tribunes, puis sur les bancs, puis sur l'estrade. Le prévôt lève les yeux vers toi avec une curiosité aimable. Les huissiers posent la main sur leur masse.",
      "Il faut dire une chose, une seule, et la dire avant le troisième pas des huissiers.",
    ],
    choices: [
      { label: "« La Banque a gagé la dette sur les titres du delta ! Qui paiera, si les titres tombent ? »", hide: { not: { any: [{ voile: "ic_grand_livre" }, { voile: "ic_cori_dette" }] } },
        test: { dom: "social", diff: 0, label: "Faire taire une salle", help: [{ if: { has: "metier:parole" }, v: 15 }, { if: { voile: "ic_vimeux" }, v: 10 }] },
        win: { fx: { flag: ["ic:interpelle", "ic:interpelle_titres"], fac: { hautes: 10, banque: -10, conseil: -5 }, ep: ["perso", 600] }, to: "IC_interpeller_suite" }, lose: { to: "IC_expulse" } },
      { label: "« La Monnaie rogne vos ducats d'un grain ! Demandez au pont ! »", hide: { not: { any: [{ voile: "ic_dumay_monnaie" }, { voile: "ic_rogne_monnaie" }] } },
        test: { dom: "social", diff: 0, label: "Faire taire une salle", help: [{ if: { has: "metier:parole" }, v: 15 }] },
        win: { fx: { flag: ["ic:interpelle", "ic:interpelle_monnaie"], fac: { conseil: -10, hautes: 5 }, ep: ["perso", 600] }, to: "IC_interpeller_suite" }, lose: { to: "IC_expulse" } },
      { label: "« Et les greniers Fourcaud ? Ils sont pleins jusqu'aux poutres ! »", hide: { not: { voile: "ic_fourcaud" } },
        test: { dom: "social", diff: -10, label: "Faire taire une salle", help: [{ if: { has: "metier:parole" }, v: 15 }] },
        win: { fx: { flag: ["ic:interpelle", "ic:interpelle_grain"], fac: { conseil: -5, hautes: 5 }, ep: ["perso", 500] }, to: "IC_interpeller_suite" }, lose: { to: "IC_expulse" } },
      { label: "« Le sel paie pour les banquiers ! »", fx: { flag: "ic:expulse_cri" }, to: "IC_expulse" },
      { label: "Te rasseoir avant d'avoir parlé", to: "IC_taire" },
    ] },

  IC_interpeller_suite: { act: "I", title: "Le silence de la salle", place: "changeurs",
    text: [
      "Ta voix tombe dans la salle et, pendant un moment, il n'y a plus rien d'autre. Les quarante bancs regardent en l'air. Le greffier a levé sa plume. Puis la rumeur monte, d'un coup, des tribunes d'abord, où l'on répète ta phrase en la déformant déjà.",
      { if: { has: "ic:interpelle_titres" }, text: "Sur les trois bancs de la Banque, Maître Guérande ne bouge pas. Il tourne seulement la tête vers les tribunes, et il te regarde, longtemps, comme on retient un visage. Au bout du fer à cheval, le tribun Vimeux s'est levé à moitié." },
      { if: { has: "ic:interpelle_monnaie" }, text: "Le maître de la Monnaie, sur le banc gris de la République, devient rouge jusqu'au crâne. Le prévôt lève la main avec un sourire pour calmer la salle, et il ne le calme pas tout de suite." },
      { if: { has: "ic:interpelle_grain" }, text: "Maître Fourcaud cesse de sourire. Il rit, un peu trop fort, et se tourne vers ses voisins pour qu'ils rient avec lui. Ils ne rient pas tous." },
      "Les huissiers arrivent. Ils te prennent chacun par un coude, sans brutalité, parce que le peuple des tribunes les regarde, et ils te raccompagnent jusqu'au vestibule. Derrière toi, le vote reprend. Tu entends le greffier appeler les maisons une à une, et la rumeur couvrir sa voix.",
    ],
    choices: [{ label: "Attendre la fin de la séance sous les arcades", to: "IC_seance_fin" }] },

  IC_expulse: { act: "I", title: "Les huissiers", place: "changeurs",
    fx: { flag: "ic:expulse" },
    text: [
      "Ta voix se perd dans le bruit. Quelques rires, un sifflet. Les huissiers montent l'escalier des tribunes sans se presser, comptent jusqu'à trois, et te soulèvent chacun par un bras. Le peuple des tribunes applaudit : c'est le moment de la séance qu'il préfère.",
      "On te pose dehors, sur le banc de pierre, à côté des solliciteurs, qui te regardent avec sympathie. L'huissier en robe bleue te dit, sans méchanceté : « La prochaine fois, apprenez votre phrase avant. Et ne revenez pas aux tribunes cette saison. »",
      { with: "tibere", text: "Tibère sort derrière toi, les mains dans les poches. « J'ai compté, dit-il. Trois pas. Tu en avais besoin de quatre. »" },
    ],
    choices: [{ label: "Attendre la fin de la séance sous les arcades", to: "IC_seance_fin" }] },

  IC_taire: { act: "I", title: "Sous le bruit", place: "changeurs",
    fx: { ep: ["perso", 300] },
    text: [
      "Tu restes assis{e}. Tu fermes les yeux à moitié, le cornet contre l'oreille, la main en coquille par-dessus, comme quelqu'un qui a mal aux dents. Le vote est un bruit de fond : les noms des maisons, les « oui » et les « non », le grincement des bancs.",
      "Juste sous ta tribune, deux conseillers se penchent l'un vers l'autre. « Delisle a {{oreille#ic_conseillers|tenu la salle, comme toujours|déjà son carrosse attelé pour Valrose, dit-on, le soir de la Saint-Jean}}, souffle le premier. — On dit beaucoup de choses, répond l'autre. {{oreille|Moi, je vote, et je rentre dîner|Moi, j'ai vendu mes parts de la Banque hier, en or d'Aveline}}. »",
      "Plus loin, une femme, la Dame Vernier, murmure à son clerc : « Note mon vote : {{oreille|pour l'impôt, et que Dieu nous garde|pour l'impôt, et va dire à Guérande que la maison Vernier attend la remise de ses billets d'ici ce soir}}. »",
      { with: "gildas", text: "Frère Gildas, à côté de toi, s'est tu aussi. Il écoute la salle avec une attention précise, les yeux mi-clos, et tu ne saurais pas dire ce qu'il entend." },
    ],
    choices: [{ label: "Laisser finir le vote", to: "IC_seance_fin" }] },

  IC_mot_tribun: { act: "I", title: "Un billet pour le tribun", place: "changeurs",
    text: [
      "Tu déchires un coin de ton mouchoir de poche, faute de papier, et tu écris dessus au charbon : *Les titres du delta. Je cherche ce que vos pères disaient. Ce soir, sous les arcades.* Le page prend ton liard, le billet, et dévale les gradins.",
      "En bas, le tribun déplie le chiffon de toile. Il le lit, le relit, et lève les yeux vers les tribunes. Il ne cherche pas longtemps. Il te trouve, il te regarde un moment, et il glisse le billet dans sa manche. Puis il vote : *non*, d'une voix qui fait trembler le greffier.",
      { with: "lison", text: "Lison a suivi le billet des yeux, du début à la fin. « Vimeux, dit-elle. Un saunier de Grisemotte. Il parle trop fort et il pense juste. On le connaît, aux Joncs. »" },
    ],
    choices: [{ label: "Laisser finir le vote", to: "IC_seance_fin" }] },

  IC_mot_clerc: { act: "I", title: "Un billet pour le clerc", place: "changeurs",
    fx: { flag: "ic:mot_clerc" },
    text: [
      "Tu écris trois mots sur un bout de papier : *Valrose. Le duc. Je sais.* C'est un coup de bluff. Le page prend ton liard et porte le billet derrière l'estrade, au jeune clerc pâle qui range ses papiers.",
      "Le clerc lit. Ses mains se mettent à trembler si fort qu'il lâche sa liasse ; les feuilles glissent sur l'estrade, jusqu'au pied du fauteuil. Il les ramasse à genoux, très vite. Le prévôt ne tourne pas la tête. Il continue d'écouter le vote, la main sur l'accoudoir, et tu vois ses doigts se refermer, un à un, sur le bois.",
      "Le clerc garde les yeux baissés jusqu'à la fin.",
    ],
    choices: [{ label: "Laisser finir le vote", to: "IC_seance_fin" }] },

  IC_seance_fin: { act: "I", title: "La fin de la séance", place: "changeurs", takes: 3,
    text: [
      "L'impôt du sel passe à vingt-trois voix contre dix-sept. La maison Vernier a voté pour. Le prévôt lève la séance par une seconde prière pour la République, plus courte que la première, et quitte l'estrade par une porte dérobée, son clerc sur les talons.",
      "Sous les arcades, la foule se défait en petits groupes. On répète les discours en les améliorant. Sur la place, devant le palais, un carrosse aux portières peintes de la tour d'argent attend le prévôt, et un deuxième, plus petit, sans armoiries, attend un peu plus loin, rideaux tirés.",
      { if: { has: "ic:interpelle" }, text: "Des gens des tribunes te reconnaissent, et te tapent sur l'épaule en passant. Une marchande de poisson te donne un hareng fumé, enveloppé dans une page d'avis, sans rien dire." },
      { if: { has: "ic:mot_clerc" }, text: "Quand le carrosse du prévôt passe devant toi, le rideau de cuir s'écarte d'un doigt, et se referme." },
      { with: "tibere", text: "Une jeune fille passe devant les arcades avec un carton à robes dans les bras, en courant presque. Tibère la suit des yeux jusqu'au pont. « {{oreille#ic_tib_rosalie|Je n'ai plus de famille, moi, ça simplifie la vie|J'ai une fille, Rosalie, qui coud rue des Dames, et qui traverse la rue quand elle me voit}}, dit-il. »" },
    ],
    choices: [
      { label: "Rejoindre le tribun Vimeux, qui t'attend sous la dernière arcade", hide: { not: { has: "ic:vimeux_attend" } }, to: "IC_tribun_apres" },
      { label: "Revenir sur le pont", back: "IC_pont" },
    ] },

  IC_tribun_apres: { act: "I", title: "Achille Vimeux", place: "changeurs",
    fx: { flag: "ic:vimeux", fac: { hautes: 5 }, ep: ["perso", 400] },
    text: [
      "Achille Vimeux t'attend adossé au dernier pilier, ton chiffon de toile entre deux doigts. De près, il sent le sel et la fumée de tourbe. « C'est toi, la toile ? Tu écris mal, mais tu écris ce qu'il faut. » Il regarde autour de lui, par habitude d'homme qu'on a déjà suivi.",
      "« Ce que nos pères disaient ? Que les titres des Hautes-Eaux ont tous été refaits en une nuit, il y a trois cents ans, par les gens qui sont assis sur ces bancs. Personne ne l'a jamais prouvé. Les registres de la reine ont brûlé, à ce qu'on dit, et ceux de la République commencent le lendemain. » Il crache. « Le lendemain, tu comprends. Ils ont commencé à écrire le jour où ils ont fini de voler. »",
      "« Si tu veux chercher, cherche aux Archives, à l'aile nord de la Monnaie. Le registre des titres du delta. Larcher, le sous-archiviste, te le montrera pour quelques liards : c'est un homme qui a des besoins. Et si tu trouves quelque chose, viens me le dire. Le banc sans écusson n'a pas de vote, mais il a des oreilles. »",
      { with: "lison", text: "Lison et Vimeux échangent un regard qui en dit plus long qu'un salut. « Ta grand-mère va bien ? demande-t-il. — Elle t'entend d'ici », répond Lison. Vimeux rit, d'un rire bref, sans joie." },
    ],
    choices: [{ back: "IC_pont" }] },
});

Object.assign(V, {
  ic_prevot: { fx: { clue: "ic_c_prevot", ep: ["perso", 400] } },
  ic_orateur: { fx: { clue: "ic_c_orateur", ep: ["perso", 300] } },
  ic_echo_conseil: { fx: { clue: "ic_c_langue", ep: ["perso", 400] } },
  ic_fourcaud: { fx: { ep: ["perso", 100] } },
  ic_conseillers: { fx: { ep: ["perso", 100] } },
});
Object.assign(C, {
  ic_c_prevot: { rev: "S", text: "Le prévôt Haumont Delisle, devant le Conseil : Salvèze paiera à la Saint-Jean, « ou elle paiera autrement, et j'aurai ma place à la table du duc »." },
  ic_c_orateur: { rev: "B", text: "Maître Guérande, avocat de la Banque : la Banque garantit la dette « avec un or que personne n'a encore sorti de l'eau », et brûlera « ce qui dort avec »." },
  ic_c_langue: { rev: "R", text: "Sous la coupole du Conseil, une voix d'homme, il y a longtemps : « Qu'on lui coupe la langue, et qu'on écrive qu'elle est devenue folle. Le greffier notera : à l'unanimité des Comptoirs. »" },
});

// ==================================================================== the Archives of the Republic
Object.assign(P, {
  IC_archives: { act: "I", title: "Les Archives de la République", place: "changeurs", when: "day", backName: "la porte des Archives",
    text: [
      { first: true, text: "Les Archives occupent l'aile nord de la Monnaie, derrière une grille, puis une porte basse cloutée de bronze. On entend, à travers le mur, les coups sourds des balanciers qui frappent les ducats. Dans le vestibule, un pupitre, un registre des visiteurs, un tarif cloué au mur : *Entrée, deux liards. Lecture d'un registre, deux liards l'heure. Copie, à la page.*" },
      { first: true, text: "Derrière le pupitre, un homme d'une cinquantaine d'années, maigre, aux doigts jaunes de tabac et d'encre, une calotte de laine sur le crâne. « Ponce Larcher, sous-archiviste. Le maître des Archives, Maître Vauquelin, ne descend plus que le lundi, à cause de ses jambes. Les autres jours, c'est moi. » Il sourit avec beaucoup de dents. « Et les autres jours, tout est plus simple. »" },
      { again: true, text: "Ponce Larcher lève les yeux de son pupitre, et son sourire se règle sur ce qu'il pense pouvoir tirer de toi." },
      { with: "gildas", text: "Frère Gildas regarde le tarif, puis les rayonnages qu'on devine derrière la porte intérieure. Il a l'air d'un homme affamé devant une boulangerie, et qui a fait vœu de jeûne." },
    ],
    choices: [
      { label: "Payer l'entrée et la lecture (4 liards)", if: { gold: { min: 4 } }, why: "Il te faut quatre liards.", fx: { gold: -4, flag: "ic:archives_entree" }, to: "IC_registres" },
      { label: "Laisse-moi faire", who: "gildas", hide: { has: "ic:archives_entree" },
        test: { dom: "social", diff: 0, label: "Un copiste du Mont devant un archiviste", help: [{ if: { has: "metier:lire" }, v: 10 }] },
        win: { fx: { flag: "ic:archives_entree", conf: { gildas: 2 } }, to: "IC_registres" }, lose: { to: "IC_ponce" } },
      { label: "Laisse-moi faire", who: "tibere", hide: { has: "ic:archives_entree" },
        test: { dom: "social", diff: -10, label: "Un ancien sergent fait valoir ses vieux droits" },
        win: { fx: { flag: "ic:archives_entree", conf: { tibere: 2 } }, to: "IC_registres" }, lose: { to: "IC_ponce" } },
      { label: "Citer la loi : les registres de la République sont ouverts à tout citoyen", hide: { has: "ic:archives_entree" },
        test: { dom: "savoir", diff: -10, label: "Retourner un règlement contre son gardien", help: [{ if: { has: "metier:lire" }, v: 20 }, { if: { has: "metier:parole" }, v: 5 }] },
        win: { fx: { flag: "ic:archives_entree" }, to: "IC_registres" }, lose: { to: "IC_ponce" } },
      { label: "Entrer dans la salle des registres", hide: { not: { has: "ic:archives_entree" } }, to: "IC_registres" },
      { label: "Parler à Ponce Larcher", to: "IC_ponce" },
      { back: "IC_pont" },
    ] },

  IC_ponce: { act: "I", title: "Ponce Larcher", place: "changeurs", backName: "le pupitre de Ponce Larcher",
    fx: { meet: "ic_ponce" },
    text: [
      "Ponce Larcher croise ses doigts jaunes sur son registre. « Que cherchez-vous ? Une généalogie, un bail, un procès ? Tout est ici. Trois siècles de République, rangés par année et par matière. Les registres sont {{oreille#ic_ponce_pages|complets, tous les feuillets cotés et paraphés, j'en réponds sur ma charge|complets, sauf onze pages au registre des titres, que la Banque m'a payées dix ducats la pièce}}. »",
      "Il ouvre un tiroir, en tire une tabatière, prise, éternue. « Il y a des registres qui se lisent au tarif, et d'autres qui demandent un supplément. Les titres de propriété du delta, par exemple. Une matière délicate. On ne les montre pas à n'importe qui. Dix liards. »",
      "« Le soir, bien sûr, tout est fermé. {{oreille#ic_ponce_lucarne|La lucarne du toit est condamnée depuis l'hiver, et la Monnaie a des gardes|La lucarne du toit ferme mal, et je la laisse ainsi pour mes amis de la nuit, qui paient mieux que le jour}}. »",
      { if: { has: "metier:lire" }, text: "Tu as connu des archivistes comme lui, dans tes recherches pour Odeline : des hommes qui gardent les papiers des autres et qui finissent par croire que les papiers leur appartiennent. Ils vendent tout. Il faut seulement trouver le bon prix." },
    ],
    choices: [
      { label: "Payer le supplément pour le registre des titres (10 liards)", hide: { has: "ic:titres_ouvert" }, if: { gold: { min: 10 } }, why: "Il te faut dix liards.", fx: { gold: -10, flag: ["ic:titres_ouvert", "ic:ponce_achete", "ic:archives_entree"] }, to: "IC_registre_titres" },
      { label: "« Onze pages, Maître Larcher. Dix ducats la pièce. Le Conseil aimerait le savoir. »", hide: { any: [{ not: { voile: "ic_ponce_pages" } }, { seen: "IC_ponce_aveu" }] }, to: "IC_ponce_aveu" },
      { label: "Lui demander où sont doublés les reçus de dépôt de la Banque", hide: { any: [{ not: { seen: "IC_coffre_nicole" } }, { has: "ic:coffre_numero" }, { has: "ic:coffre" }] }, to: "IC_ponce_depots" },
      { back: "IC_archives" },
    ] },

  IC_ponce_depots: { act: "I", title: "Les doubles des dépôts", place: "changeurs",
    text: [
      "« Les doubles des dépôts ? » Ponce Larcher rit. « Toute la galerie du fond, deux siècles de reçus pliés en liasses, par année. Personne n'y met jamais les pieds. » Il tend la main, paume ouverte. « Deux liards, et je vous laisse chercher. Vous ne trouverez pas, mais vous aurez cherché. »",
    ],
    choices: [
      { label: "Lui donner deux liards", if: { gold: { min: 2 } }, why: "Il te faut deux liards.", fx: { gold: -2, flag: "ic:archives_entree" }, to: "IC_registre_depots" },
      { label: "Chercher sans payer : la loi t'ouvre la salle", hide: { not: { has: "ic:archives_entree" } }, to: "IC_registre_depots" },
      { back: "IC_ponce" },
    ] },

  IC_ponce_aveu: { act: "I", title: "Onze pages", place: "changeurs",
    fx: { flag: ["ic:titres_ouvert", "ic:archives_entree"], ep: ["perso", 400] },
    text: [
      "Le sourire de Ponce Larcher se défait par morceaux, en commençant par les yeux. Il regarde la porte du vestibule, se lève, la ferme, revient. Il ne se rassied pas.",
      "« Qui vous a… Peu importe. » Il se frotte les mains, longuement, comme pour les laver. « Monsieur Brunel est venu à la Toussaint. Il a lu le registre des titres pendant une heure, ici, avec une loupe. Il a choisi onze pages au début du registre, celles de la table, les pages de garde, où un greffier de l'ancien temps avait recopié la liste des titres d'avant. Il les a coupées avec un canif. Il les a brûlées dans mon poêle, là, devant moi. Il a payé dix ducats la page. »",
      "Il ouvre un tiroir fermé à clé et en sort une liasse de papier pelure, très fin, presque transparent. « Avant qu'il revienne, je les avais calquées. On ne sait jamais qui paiera le mieux, plus tard. » Il te regarde, et son sourire revient, à moitié. « Je vous les vends vingt liards. Et vous ne m'avez jamais vu. »",
    ],
    choices: [
      { label: "Payer les vingt liards pour les calques", if: { gold: { min: 20 } }, why: "Il te faut vingt liards.", fx: { gold: -20, item: "ic_calques", clue: "ic_c_table" }, to: "IC_registre_titres" },
      { label: "« Je les prends, et je me tais. C'est le prix. »",
        test: { dom: "social", diff: -10, label: "Faire payer un archiviste vénal", help: [{ with: "tibere", v: 10 }, { if: { has: "metier:parole" }, v: 10 }] },
        win: { fx: { item: "ic_calques", clue: "ic_c_table" }, to: "IC_registre_titres" }, lose: { to: "IC_registre_titres" } },
      { label: "Laisser les calques, et lire seulement le registre", to: "IC_registre_titres" },
    ] },

  IC_registres: { act: "I", title: "La salle des registres", place: "changeurs", backName: "la salle des registres",
    text: [
      { first: true, text: "La salle des registres est une longue nef voûtée, éclairée par des fenêtres hautes et étroites. Des rayonnages montent jusqu'à la voûte, desservis par des échelles sur rails. Les registres de la République y dorment par rangées, reliés de veau brun, le dos marqué d'une année en chiffres d'or. Trois cents ans de comptes, de baux, de procès. Ça sent la colle de peau, la poussière et la souris." },
      { first: true, text: "Les registres de la République sont tenus en double écriture : chaque page porte, à gauche, l'acte en clair, à l'encre noire, et à droite, dans une colonne étroite, les notes du greffier, d'une encre de noix qui a pâli avec les siècles au point qu'on la devine à peine." },
      { again: true, when: "day", text: "La nef des registres, ses échelles sur rails, la lumière grise des fenêtres hautes. Un vieux clerc lit au bout d'une table, le nez dans un registre de baux." },
      { again: true, when: "night", text: "La nef des registres, dans le noir. Ta lanterne éclaire trois rayonnages à la fois, et les dos dorés s'allument et s'éteignent à mesure que tu passes." },
      "Sur un pupitre, un registre resté ouvert porte en marge une note du greffier : *{{loupe#ic_marge|vu et collationné, conforme à l'original|l'original de cet acte a été remis à la maison Marrel sur ordre du prévôt, et le double que voici a été refait de ma main}}.*",
    ],
    choices: [
      { label: "Le registre des comptes de la République, de cette année", hide: { seen: "IC_registre_comptes" }, to: "IC_registre_comptes" },
      { label: "Le registre des titres du delta, dans son armoire grillée", hide: { not: { has: "ic:titres_ouvert" } }, to: "IC_registre_titres" },
      { label: "L'armoire grillée des titres, fermée à clé", hide: { has: "ic:titres_ouvert" }, to: "IC_titres_ferme" },
      { label: "La galerie du fond, où dorment les doubles des dépôts", hide: { any: [{ not: { seen: "IC_coffre_nicole" } }, { has: "ic:coffre_numero" }, { has: "ic:coffre" }] }, to: "IC_registre_depots" },
      { label: "L'escalier qui descend aux archives mortes", hide: { seen: "IC_archives_cave" }, to: "IC_archives_cave" },
      { back: "IC_archives" },
    ] },

  IC_titres_ferme: { act: "I", title: "L'armoire grillée", place: "changeurs",
    text: [
      "Au fond de la nef, une armoire de chêne fermée par une grille de fer. Derrière la grille, une rangée de gros registres reliés de rouge, plus vieux que les autres : *Titres et terres du delta.* La serrure est simple, et ancienne.",
      { when: "day", text: "Le vieux clerc, au bout de la table, a levé le nez de son registre de baux, et il te regarde regarder l'armoire." },
    ],
    choices: [
      { label: "Crocheter la serrure", if: { item: "crochets" }, why: "Il te faudrait des crochets.",
        test: { dom: "discretion", diff: 0, label: "Une vieille serrure, sous des yeux", help: [{ if: { has: "passe:voleur" }, v: 15 }, { if: { night: true }, v: 15 }] },
        win: { fx: { flag: "ic:titres_ouvert" }, to: "IC_registre_titres" }, lose: { to: "IC_archives_pris" } },
      { label: "Laisse-moi faire", who: "lison",
        test: { dom: "discretion", diff: -10, label: "Lison et une épingle à cheveux" },
        win: { fx: { flag: "ic:titres_ouvert", conf: { lison: 2 } }, to: "IC_registre_titres" }, lose: { to: "IC_archives_pris" } },
      { label: "Aller payer le supplément à Ponce Larcher", hide: { night: true }, to: "IC_ponce" },
      { back: "IC_registres" },
    ] },

  IC_registre_comptes: { act: "I", title: "Les comptes de la République", place: "changeurs",
    fx: { ep: ["perso", 300] },
    text: [
      "Le registre des comptes de l'année est encore sur un pupitre, à portée de main, parce qu'on y écrit tous les jours. Recettes, dépenses : le sel, les péages, les gages du Guet, l'entretien des ponts. À la dernière page écrite, une colonne de chiffres qui ne tombe pas juste, et une ligne soulignée deux fois : *Reste dû au duc d'Aveline à la Saint-Jean : quatre millions de ducats.*",
      "Dans la colonne étroite du greffier, à côté d'un ordre de la Monnaie, une note à l'encre pâle : *{{loupe#ic_comptes_monnaie|ordre exécuté|ordre du prévôt, de bouche, sans écrit : frapper au titre allégé d'un grain, et n'en rien porter au registre}}.*",
      "Plus haut, une autre ligne, d'une main différente, plus récente : *Avance de la Banque Marrel, en garantie, sur titres* — et le chiffre a été gratté et récrit trois fois. Dans la colonne du greffier, en face : *{{loupe#ic_comptes_avance|à vérifier|titres du delta remis en gage au duc lui-même, par lettre du prévôt, si la Saint-Jean passe}}.*",
      { with: "tibere", text: "Tibère suit les colonnes du doigt, en remuant les lèvres. Il s'arrête sur les gages du Guet. « Ils ont baissé les gages des sergents l'année où on m'a chassé, dit-il. Je croyais que c'était à cause de moi. »" },
    ],
    choices: [{ back: "IC_registres" }] },

  IC_registre_titres: { act: "I", title: "Le registre des titres du delta", place: "changeurs",
    fx: { clue: "ic_c_titres", ep: ["perso", 600] },
    text: [
      "Le premier volume des titres est énorme, relié de cuir rouge, les coins cerclés de cuivre. Tu le poses sur la table et tu l'ouvres. Les premières pages manquent : on voit encore, contre la couture, les talons de onze feuillets coupés net, au canif.",
      "Puis les actes commencent. Trois cent douze titres de terres des Hautes-Eaux, salines, prés salés, pêcheries, polders gagnés sur la mer. Tous datés du même jour de l'an mil quatorze. Tous de la même main, une main rapide de greffier pressé. Tous de la même encre. Et tous portent la même formule : *par achat, de bonne foi, des anciens tenanciers.* Sans un nom de vendeur.",
      "Tu cherches la Pointe-aux-Hérons. Tu la trouves, au feuillet quarante : *douze arpents, maison Fourcaud.* Dans la colonne du greffier, en face, à l'encre de noix : *{{loupe#ic_titres_marge|collationné|l'ancien tenancier, Guiot Aguesse, n'a rien vendu ; il a été noyé la même nuit}}.*",
      "Sous la première ligne du premier acte, le parchemin est plus mince, comme usé. Si l'on penche la page contre la lumière, on devine qu'il a été gratté. {{loupe#ic_titres_encre|Une tache brune, rien de plus|Dessous, une écriture plus ancienne remonte : « Par la Charte des Hautes-Eaux, et de notre main, nous donnons… »}}.",
      { with: "gildas", text: "Frère Gildas penche la tête sur le registre et lit les premières lignes du bout du doigt, sans toucher le parchemin. « Une main de chancellerie, dit-il, qui a appris à écrire en hâte. On reconnaît les mains qui ont peur. » Il referme ses doigts sur la manche de sa bure." },
      { if: { has: "metier:lire" }, text: "Tu as vu des milliers d'actes. Jamais trois cent douze titres le même jour. Même un incendie produit moins de ventes en une journée." },
    ],
    choices: [{ back: "IC_registres" }] },

  IC_registre_depots: { act: "I", title: "Les doubles des dépôts", place: "changeurs",
    text: [
      "La galerie du fond est un boyau étroit, sans fenêtre, où des liasses de petits papiers pliés s'empilent sur des étagères jusqu'au plafond, chaque liasse ficelée et marquée d'une année à la craie. Ponce avait raison : personne n'y vient. La poussière est intacte, et tes pas y laissent des traces de neige grise.",
      "Tu comptes soixante ans en arrière, et tu cherches. Une liasse, deux, trois. Des noms de marchands, de veuves, d'armateurs. Les doigts gris jusqu'au poignet, tu finis par trouver, dans la quatrième liasse, un double de reçu au cachet baveux : *Josselin Aguesse, batelier. Un coffret de chêne ferré. Cote quatre cent dix-sept.*",
      { if: { has: "metier:lire" }, text: "C'est le genre de recherche que tu faisais pour Odeline, autrefois, des journées entières. Tu y retrouves ton plaisir d'avant, et une douleur au milieu de la poitrine que tu laisses passer." },
    ],
    choices: [{ label: "Noter la cote, et ressortir dans la nef", fx: { flag: "ic:coffre_numero", ep: ["perso", 300] }, back: "IC_registres" }] },

  IC_archives_cave: { act: "I", title: "Les archives mortes", place: "changeurs",
    text: [
      "L'escalier descend sous la nef, dans une cave voûtée basse où l'on entasse ce que la République ne garde plus : des sacs de papiers à vendre au poids, des registres moisis, des caisses de sceaux brisés, des coffres sans clé. C'est ici que Gédéon et ses pareils viennent acheter leurs lots.",
      "Dans une caisse ouverte, des dizaines de matrices de sceaux de cuivre ou de plomb, cassées, rayées, annulées d'un coup de burin en croix. Parmi elles, {{pie#ic_sceau|une matrice de bronze noircie, rayée en croix comme les autres|une matrice de bronze noircie, que le burin a seulement effleurée : un sceau de chancellerie intact, une barque, une étoile, et un nom autour, Aymeric Vasse}}.",
      "Plus loin, contre le mur, un coffre ferré porte une étiquette : *Inventaire de la tour de la reine, l'an mil quatorze. Néant.* Le coffre est vide. Quelqu'un a écrit *néant* et a gardé le coffre.",
      { with: "lison", text: "Lison s'est arrêtée devant la caisse des sceaux. Elle ne touche à rien. Elle respire seulement un peu plus fort que d'habitude." },
    ],
    choices: [
      { label: "Prendre la matrice de bronze, celle que le burin a épargnée", hide: { any: [{ not: { voile: "ic_sceau" } }, { has: "tresor:ic_sceau" }] }, to: "IC_archives_sceau" },
      { label: "Fouiller la caisse des sceaux, pièce par pièce", hide: { any: [{ has: "tresor:ic_sceau" }, { seen: "IC_archives_cave_rien" }] },
        test: { dom: "savoir", diff: -10, label: "Trouver le sceau qu'on a oublié d'annuler", help: [{ if: { has: "metier:mains" }, v: 15 }, { if: { has: "metier:lire" }, v: 10 }] },
        win: { to: "IC_archives_sceau" }, lose: { to: "IC_archives_cave_rien" } },
      { label: "Laisse-moi faire", who: "gildas", hide: { has: "tresor:ic_sceau" },
        test: { dom: "savoir", diff: 0, label: "Gildas lit les légendes des sceaux" },
        win: { to: "IC_archives_sceau" }, lose: { to: "IC_archives_cave_rien" } },
      { back: "IC_registres" },
    ] },

  IC_archives_cave_rien: { act: "I", title: "Des sceaux brisés", place: "changeurs",
    text: [
      "Tu sors les matrices une à une, tu les tournes vers la lanterne. Des sceaux de maisons faillies, de confréries dissoutes, de notaires morts. Tous rayés en croix. Au bout d'une heure, tu as les doigts verts de cuivre, et la caisse te paraît plus pleine qu'au début.",
    ],
    choices: [{ back: "IC_registres" }] },

  IC_archives_sceau: { act: "I", title: "Le sceau du chancelier", place: "changeurs",
    fx: { item: "ic_tr_sceau", clock: { tresors: 1 }, flag: "tresor:ic_sceau", ep: ["perso", 500] },
    text: [
      "La matrice est lourde dans ta main, plus lourde que sa taille, une poignée de bronze en forme de tige, et au bout, le disque gravé en creux. Tu l'essuies avec ta manche. La barque, l'étoile, et la légende en lettres anciennes : *SIGILLVM AYMERICI VASSE CANCELLARII REGINAE*.",
      "Celui qui a annulé les sceaux, il y a trois siècles, a donné son coup de burin à côté. Par fatigue, ou exprès.",
      { with: "gildas", text: "Frère Gildas regarde le sceau dans ta paume. Il tend la main, comme pour le prendre, puis il la retire. « Gardez-le, dit-il. Il est mieux dans une poche que dans une caisse. »" },
      { with: "lison", text: "Lison regarde le nom gravé autour de la barque, et elle regarde ailleurs aussitôt. « Vasse, dit-elle. C'est un nom courant, aux Joncs. »" },
    ],
    choices: [{ back: "IC_registres" }] },

  IC_archives_pris: { act: "I", title: "Pris la main dans l'armoire", place: "changeurs",
    text: [
      "Une lanterne se lève dans la nef, derrière toi. Un garde gris de la Monnaie, l'épée à demi sortie, et derrière lui, en chemise de nuit sous sa robe, Ponce Larcher, une chandelle à la main. « Je savais bien que j'avais entendu quelque chose », dit Ponce, et il a l'air presque content.",
    ],
    choices: [
      { label: "Lui glisser dix liards, pour la chandelle", if: { gold: { min: 10 } }, why: "Il te faut dix liards.", fx: { gold: -10, flag: "ic:titres_ouvert" }, to: "IC_registre_titres" },
      { label: "« Maître Larcher, je sais pour les onze pages. »", hide: { not: { voile: "ic_ponce_pages" } }, to: "IC_ponce_aveu" },
      { label: "Te battre pour sortir", fight: { title: "Le garde de la Monnaie", enemies: [{ id: "ic_garde_gris", n: 1 }],
        win: { fx: { fac: { conseil: -5 }, ep: ["perso", 300] }, to: "IC_archives_fuite" },
        lose: { fx: { pv: -3, gold: -5, fac: { conseil: -5 } }, to: "IC_archives_fuite" },
        flee: { label: "Courir vers l'escalier du toit", dom: "discretion", diff: -10, to: "IC_archives_fuite" } } },
    ] },

  IC_archives_fuite: { act: "I", title: "Hors des Archives", place: "changeurs",
    text: [
      { outcome: "win", text: "Le garde s'effondre contre un rayonnage, qui vomit une pluie de registres sur lui. Ponce Larcher a disparu derrière sa chandelle. Tu cours." },
      { outcome: "lose", text: "Le garde te jette contre un rayonnage, te fouille, prend ce qu'il trouve dans ta bourse pour le dérangement, et te pousse dehors par la porte basse, d'un coup de botte." },
      { outcome: "flee", text: "Tu grimpes l'escalier du toit quatre à quatre, tu passes la lucarne, tu roules sur le plomb jusqu'à la gouttière, et tu descends par les tuyaux de la Monnaie." },
      "Sur le pavé de l'île, tu reprends ton souffle. Les cheminées de la Monnaie fument au-dessus de toi. Le registre des titres dort toujours dans son armoire.",
    ],
    choices: [{ back: "IC_pont" }] },
});

Object.assign(V, {
  ic_ponce_pages: { fx: { clue: "ic_c_pages", ep: ["perso", 300] } },
  ic_ponce_lucarne: { fx: { ep: ["perso", 100] } },
  ic_titres_encre: { fx: { clue: "ic_c_gratte", ep: ["perso", 500] } },
  ic_comptes_monnaie: { fx: { clue: "ic_c_ordre_monnaie", ep: ["perso", 300] } },
  ic_sceau: { fx: { ep: ["perso", 100] } },
});
Object.assign(C, {
  ic_c_pages: { rev: "B", text: "Ponce Larcher, sous-archiviste : il manque onze pages au registre des titres du delta, et la Banque les lui a payées dix ducats la pièce." },
  ic_c_titres: { rev: "R", text: "Registre des titres du delta : trois cent douze titres des Hautes-Eaux, tous datés du même jour de l'an mil quatorze, de la même main, de la même encre, « par achat, de bonne foi, des anciens tenanciers », sans nom de vendeur. Au feuillet quarante : la Pointe-aux-Hérons, maison Fourcaud." },
  ic_c_gratte: { rev: "R", text: "Sous le premier acte du registre des titres, le parchemin a été gratté. L'ancienne écriture remonte : « Par la Charte des Hautes-Eaux, et de notre main, nous donnons… »" },
  ic_c_ordre_monnaie: { rev: "S", text: "Registre des comptes, note du greffier : ordre du prévôt, de bouche, sans écrit, de frapper les ducats au titre allégé d'un grain, et de n'en rien porter au registre." },
  ic_c_table: { rev: "R", text: "Les calques de Ponce Larcher : la table des pages de garde brûlées par Lothaire Brunel, trois cent douze titres « par la Charte », chacun au nom d'une famille des marais." },
});

// ==================================================================== Tibère unmasked
Object.assign(P, {
  IC_tibere_suivre: { act: "I", title: "Le vin chaud de Tibère", place: "changeurs", with: "tibere",
    text: [
      "« J'ai la gorge comme un fourreau, dit Tibère en se frottant le cou. Je vais boire un vin chaud au Trébuchet. Tu me retrouves sur le pont. » Il s'éloigne vers la pointe de l'île, les mains dans les poches, de son pas lourd de sergent. Le Trébuchet est à gauche, au pied des Archives. Tibère prend à droite.",
      "Tu le laisses prendre vingt pas d'avance. Il longe la façade de la Banque, s'arrête pour lacer une botte qui n'en a pas besoin, regarde derrière lui. Tu te colles contre le pilier d'une arcade.",
      { with: "lison", text: "Lison t'a vu{e} faire. Sans un mot, elle passe devant toi et marche dans le sillage de Tibère, à quinze pas, en regardant les vitrines des orfèvres, comme une fille qui n'a rien à faire de sa journée." },
    ],
    choices: [
      { label: "Le suivre de pilier en pilier, jusqu'au flanc de la Banque",
        test: { dom: "discretion", diff: -10, label: "Filer un ancien sergent du Guet", help: [{ with: "lison", v: 15 }, { if: { has: "passe:voleur" }, v: 10 }] },
        win: { fx: { ep: ["perso", 300] }, to: "IC_tibere_porte" }, lose: { to: "IC_tibere_vu" } },
      { label: "Le laisser aller, et l'attendre sur le pont", back: "IC_pont" },
    ] },

  IC_tibere_porte: { act: "I", title: "La petite porte", place: "changeurs",
    fx: { flag: "tibere:espion" },
    text: [
      "Sur le flanc de la Banque, dans une ruelle qui descend vers l'eau, il y a une petite porte sans heurtoir, peinte en noir. Tibère y frappe deux coups, puis un. La porte s'entrouvre. Tu vois une manchette tachée d'encre, une main qui tend une bourse de cuir, et une autre main, gantée de gris, posée sur le chambranle derrière la première.",
      "Tibère prend la bourse et la soupèse sans l'ouvrir. Il parle, à voix basse, longtemps. Tu n'entends pas les mots. Tu entends le ton : celui d'un homme qui fait un rapport, avec des pauses pour se souvenir. Une fois, il rit, sans joie.",
      "La porte se referme. Tibère reste un moment devant, le front presque contre le bois. Puis il fourre la bourse sous sa chemise et remonte la ruelle. Il passe à trois pas de toi sans te voir, les yeux par terre, avec la tête d'un homme qui va réellement boire un vin chaud, et plusieurs.",
      { with: "lison", text: "Lison revient se poster à côté de toi. « Tu as vu la main grise, derrière ? » Elle le dit à plat." },
    ],
    choices: [{ back: "IC_pont" }] },

  IC_tibere_vu: { act: "I", title: "La ruelle de la Banque", place: "changeurs",
    text: [
      "Au coin de la ruelle de la Banque, Tibère se retourne d'un bloc, comme on le lui a appris au Guet, et il te voit. Il reste planté là. Puis il revient vers toi en se forçant à sourire.",
      "« Tu me suis, maintenant ? Je cherchais un coin pour pisser, voilà tout. {{oreille#ic_tib_vu|Un vieux sergent a ses habitudes, et des besoins de vieux|Je venais toucher mes cinq ducats, et tu m'as suivi, et maintenant j'ai peur de ce que tu vas faire}}. » Il te prend par l'épaule et te ramène vers le pont, d'une poigne un peu trop forte.",
      "« Allez. Je te paie le vin chaud. Avec mon argent. » Il rit tout seul, puis se tait jusqu'au pont.",
    ],
    choices: [{ back: "IC_pont" }] },

  IC_tibere_face: { act: "I", title: "Contre le parapet", place: "changeurs", with: "tibere",
    fx: { flag: "tibere:espion" },
    text: [
      "Tu prends Tibère par la manche et tu l'emmènes au milieu du pont, là où le vent de la Salve couvre les voix. Il se laisse faire. Il s'accoude au parapet, regarde l'eau, et il attend que tu parles, comme un homme qui attend la sentence depuis longtemps et qui serait presque soulagé qu'elle tombe.",
      "Tu dis le nom de Lothaire Brunel. Tu dis jeudi. Tu dis cinq ducats.",
      "Tibère ne bouge pas. « {{oreille#ic_tib_deni|Je ne sais pas de quoi tu parles. Brunel, je ne le connais que de vue|Depuis la mort d'Odeline. Il est venu me trouver au Guet le matin même, avant que tu rentres}}, dit-il. »",
      { if: { has: "ic:recu" }, text: "Tu as encore dans les yeux sa signature sur le petit reçu plié : *T. Gaucelm*, en grosses lettres serrées." },
      { if: { seen: "IC_tibere_porte" }, text: "Tu as encore dans les yeux la petite porte noire, la bourse, la main grise sur le chambranle." },
    ],
    choices: [
      { label: "Lui décrire son reçu, lettre par lettre", hide: { not: { has: "ic:recu" } }, to: "IC_tibere_aveu" },
      { label: "Lui raconter la petite porte noire, deux coups, puis un", hide: { not: { seen: "IC_tibere_porte" } }, to: "IC_tibere_aveu" },
      { label: "Lui répéter ce que tu as entendu sous ses mots", hide: { not: { any: [{ voile: "ic_tib_deni" }, { voile: "ic_tib_jeudi" }, TIB_VOILES] } }, to: "IC_tibere_aveu" },
      { label: "Lui répéter ce que Lothaire t'a dit de lui", hide: { not: { voile: "ic_lot_tibere" } }, to: "IC_tibere_aveu" },
      { label: "Le prendre au collet et le pousser contre le parapet",
        test: { dom: "combat", diff: -10, label: "Faire plier un vieux sergent", help: [{ if: { arch: "guerrier" }, v: 15 }] },
        win: { fx: { fear: { tibere: 10 } }, to: "IC_tibere_aveu" }, lose: { fx: { fear: { tibere: 5 } }, to: "IC_tibere_aveu" } },
      { label: "Laisse-moi faire", who: "gildas",
        test: { dom: "social", diff: 0, label: "Gildas parle à Tibère de sa fille" },
        win: { fx: { conf: { gildas: 2 } }, to: "IC_tibere_aveu" }, lose: { to: "IC_tibere_aveu" } },
    ] },

  IC_tibere_aveu: { act: "I", title: "L'aveu de Tibère", place: "changeurs", with: "tibere",
    fx: { flag: ["tibere:aveu", "ic:rosalie_rue"], questSeen: "IC_rosalie", ep: ["perso", 800] },
    text: [
      { outcome: "win", text: "Il a la pierre du parapet dans les reins, et tes deux poings dans son col. Il pourrait te casser le bras ; il ne le fait pas. Il ferme les yeux." },
      { outcome: "lose", text: "Il se dégage d'un coup d'épaule, sans effort, et tu recules de trois pas. Il te regarde, la respiration courte, et puis ses épaules tombent d'un coup, comme une voile qu'on affale." },
      "« Bon, dit Tibère. Bon. » Il enlève son chapeau, le tourne entre ses mains. « Brunel est venu me trouver au Guet, le matin où on a ramassé Odeline. Il savait pour mes dettes, il savait à qui, il savait combien. Il a dit : cinq ducats la semaine, pour savoir ce que fait l'apprenti{e}. Où tu vas, qui tu vois. Rien de plus. Je me suis dit : rien de plus, ça ne fait de mal à personne. »",
      "« J'ai dit le Beffroi. J'ai dit le moine, et la batelière. J'ai dit tes heures. » Il remet son chapeau. « Les cinq ducats, j'en donne trois à la couturière qui loge Rosalie, ma fille, rue des Dames. Elle ne le sait pas. Elle croit que c'est sa maîtresse qui paie sa chambre. Les deux autres, je les bois. Voilà. Tu sais tout. »",
      { with: "lison", text: "Lison a écouté, adossée au parapet, les bras croisés. Elle ne dit rien. Elle a l'air de quelqu'un qui entend une chanson qu'elle connaît, et qui n'aime pas le refrain." },
      { with: "gildas", text: "Frère Gildas regarde Tibère avec une douceur grave, sans un mot de reproche. Tibère évite ce regard plus soigneusement que le tien." },
    ],
    choices: [
      { label: "« Tu vas continuer à lui parler. Mais c'est moi qui te dirai quoi. »", big: true, fx: { flag: "tibere:double", conf: { tibere: 10 }, ep: ["perso", 400] }, to: "IC_tibere_double" },
      { label: "« Arrête. Plus de jeudi. Et reste avec moi. »", fx: { flag: "ic:tibere_pardon", conf: { tibere: 10 } }, to: "IC_tibere_garde" },
      { label: "« Va-t'en. Je ne veux plus te voir. »", fx: { flag: "tibere:parti", leave: "tibere", conf: { tibere: -15 } }, to: "IC_tibere_renvoi" },
    ] },

  IC_tibere_double: { act: "I", title: "Un double jeu", place: "changeurs", with: "tibere",
    text: [
      "Tibère te regarde, longtemps, la bouche entrouverte. Puis il se met à rire, d'un vrai rire, le premier que tu lui entendes, un rire de caserne qui fait se retourner les changeurs. « Tu veux que je mente à Brunel. À Brunel, qui a un cornet dans la poche. »",
      "Il se calme. « Il entend ce qu'on pense en parlant. Pas ce qu'on écrit. Je lui écrirai, alors. Je lui dirai que ma gorge me fait mal, que je ne peux plus parler, et je lui porterai des billets. » Il se tapote la tempe. « Un vieux sergent sait mentir par écrit. C'est tout ce qu'on fait au Guet. »",
      "« Qu'est-ce que je lui dis, ce jeudi ? » Il attend, et pour la première fois, il te regarde comme on regarde un capitaine.",
      { with: "lison", text: "Lison décroise les bras. « Dis-lui que la batelière est partie aux Joncs, et qu'elle ne reviendra pas. » Elle sourit à l'eau. « Ça lui fera plaisir. Et c'est presque vrai. »" },
    ],
    choices: [{ back: "IC_pont" }] },

  IC_tibere_garde: { act: "I", title: "Plus de jeudi", place: "changeurs", with: "tibere",
    text: [
      "Tibère hoche la tête, lentement, plusieurs fois, comme un homme qui compte. « Plus de jeudi. Brunel le saura le premier jeudi. Il saura pourquoi, avec sa saleté de cornet. » Il hausse les épaules. « Et Rosalie n'aura plus sa chambre payée. »",
      "Il regarde la petite porte de la Banque, au loin, sur le flanc de l'hôtel. « Je trouverai autre chose. Je porterai des sacs au port. J'ai porté pire. »",
      "Il te tend la main, une grosse main de sergent aux jointures fendues. Tu la prends. Elle tremble un peu, et il serre plus fort pour que ça ne se voie pas.",
    ],
    choices: [{ back: "IC_pont" }] },

  IC_tibere_renvoi: { act: "I", title: "Tibère s'en va", place: "changeurs",
    text: [
      "Tibère ne discute pas. Il remet son chapeau, le redresse d'un coup de pouce, comme pour une revue. « C'est juste, dit-il. Je l'aurais fait aussi. »",
      "Il fait trois pas, puis il revient. « Brunel va savoir que tu sais. Pas par moi : par son cornet, la première fois qu'il te verra. Fais attention à ce que tu penses près de lui. » Il hésite. « Et si tu passes rue des Dames, ne lui dis pas, à la petite. Pour l'argent. »",
      "Il s'en va par le pont, vers la ville, de son pas lourd. Il ne se retourne pas. Au bout du pont, il tourne à gauche, vers les tavernes du port.",
    ],
    choices: [{ back: "IC_pont" }] },
});

// ==================================================================== side quest: the sergeant's daughter
Object.assign(P, {
  IC_atelier: { act: "I", title: "La rue des Dames", place: "changeurs", backName: "l'atelier de la rue des Dames",
    fx: { questSeen: "IC_rosalie", meet: "rosalie" },
    text: [
      { first: true, text: "La rue des Dames est une ruelle étroite derrière les hôtels de la pointe amont, où les couturières, les brodeuses et les lingères des grandes maisons ont leurs ateliers. Des robes à demi faites pendent aux fenêtres sur des mannequins d'osier, et de chaque porte sort un bruit de ciseaux et de rires." },
      { first: true, text: "L'atelier de Maîtresse Jacinthe est le troisième. Six filles cousent autour d'une grande table, sous une verrière. La plus jeune, seize ans, des cheveux châtains noués en chignon serré, un dé d'argent au doigt, a la mâchoire carrée et les sourcils épais de son père. Elle coud une manche de soie bleue, sans lever les yeux." },
      { again: true, text: "Les ciseaux, les rires, la verrière. Rosalie coud à sa place, au bout de la table, et elle sait déjà que tu es là." },
      "Sur la table, une robe d'enfant en soie bleue, presque finie, {{pie#ic_robe|brodée de petits chevaux d'argent sur tout l'ourlet|brodée de petits chevaux d'argent, et dans l'ourlet, cousue à points invisibles, une bande de toile pliée qui n'a rien à faire dans une robe d'enfant}}. « Pour la petite-fille de Dame Marrel, dit Maîtresse Jacinthe avec fierté. Aliénor. Elle aime les chevaux. »",
    ],
    choices: [
      { label: "Demander à parler à Rosalie, dans la cour", hide: { seen: "IC_rosalie" }, to: "IC_rosalie" },
      { label: "Ramener Tibère devant sa fille", hide: { any: [{ not: { present: "tibere" } }, { not: { has: "tibere:aveu" } }, { seen: "IC_rosalie_pere" }, { has: "ic:rosalie" }] }, to: "IC_rosalie_pere" },
      { label: "Demander à Maîtresse Jacinthe ce qu'il y a dans l'ourlet", hide: { any: [{ not: { voile: "ic_robe" } }, { seen: "IC_robe_ourlet" }] }, to: "IC_robe_ourlet" },
      { back: "IC_pont" },
    ] },

  IC_rosalie: { act: "I", title: "Rosalie Gaucelm", place: "changeurs",
    text: [
      "Rosalie te suit dans la cour, où sèchent des draps de lin, et elle reste debout, le dé encore au doigt. « Vous venez de la part de mon père. Ça se voit. Vous avez la même tête que les gens qui viennent de sa part : la tête de quelqu'un qui va demander pardon pour lui. »",
      "« Je {{oreille#ic_rosalie_pere|n'ai plus de père depuis trois ans, je vis très bien ainsi|l'attends encore le soir, à la fenêtre, et je me déteste de l'attendre}}. Il a vendu ma robe de baptême pour jouer aux dés. Il a vendu la bague de ma mère. Le jour où on l'a chassé du Guet, il est venu me voir ici, ivre, et il a pleuré devant les filles. »",
      "Elle tourne le dé autour de son doigt. « Ma chambre, au-dessus, c'est Maîtresse Jacinthe qui la paie. Et mes leçons, c'est {{oreille#ic_rosalie_brunel|elle aussi, elle est bonne avec moi|Monsieur Brunel, de la Banque, qui passe chaque mois et qui me demande toujours, très poliment, des nouvelles de mon père}}. »",
      { without: "tibere", if: { has: "tibere:parti" }, text: "Tu penses à Tibère qui s'en va par le pont, vers les tavernes du port, sans se retourner." },
    ],
    choices: [
      { label: "« Les trois ducats de ta chambre, c'est lui qui les donne. Chaque semaine. »", hide: { any: [{ not: { has: "tibere:aveu" } }, { has: "ic:rosalie" }] }, to: "IC_rosalie_fin" },
      { label: "« Brunel ne paie pas tes leçons par bonté. Il tient ton père par toi. »", hide: { any: [{ not: { voile: "ic_rosalie_brunel" } }, { has: "ic:rosalie" }] }, to: "IC_rosalie_fin" },
      { label: "La laisser retourner à sa manche bleue", fx: { quest: "IC_rosalie", flag: "ic:rosalie", set: { ic_rosalie: "laissee" } }, back: "IC_atelier" },
    ] },

  IC_rosalie_fin: { act: "I", title: "Le dé d'argent", place: "changeurs",
    fx: { quest: "IC_rosalie", flag: "ic:rosalie", set: { ic_rosalie: "sait" }, ep: ["perso", 500] },
    text: [
      "Rosalie ne dit rien pendant un long moment. Un drap claque dans le vent de la cour. Elle enlève son dé d'argent, le regarde, le remet.",
      { if: { voile: "ic_rosalie_brunel" }, text: "« Brunel, dit-elle enfin. Il me demande comment va mon père, et je lui réponds. Je lui dis où il boit, à qui il doit. Je croyais faire la conversation. » Elle serre les lèvres. « Je ne prendrai plus son argent. »" },
      { if: { has: "tibere:aveu" }, text: "« Trois ducats, dit-elle. Chaque semaine. Et il boit le reste, évidemment. » Elle rit, d'un rire qui ressemble à celui de son père, et elle s'en aperçoit, et elle s'arrête." },
      "Elle retire le dé de son doigt et te le tend. « Donnez-lui ça. C'est lui qui me l'a offert, quand j'ai commencé l'apprentissage. Dites-lui que je le lui prête. Qu'il me le rapporte lui-même, à jeun, un dimanche. » Elle rentre dans l'atelier sans attendre ta réponse.",
    ],
    choices: [{ label: "Garder le dé pour Tibère", fx: { item: "ic_de_rosalie" }, back: "IC_atelier" }] },

  IC_rosalie_pere: { act: "I", title: "Le père et la fille", place: "changeurs", with: "tibere",
    fx: { quest: "IC_rosalie", flag: "ic:rosalie", set: { ic_rosalie: "vus" }, conf: { tibere: 15 }, ep: ["perso", 600] },
    text: [
      "Tibère s'arrête sur le seuil de l'atelier comme devant une porte de prison. Il a lissé sa moustache avec de l'eau de la Salve, et brossé son chapeau avec sa manche. Les six filles lèvent la tête. Rosalie, au bout de la table, pose son aiguille.",
      "Ils sortent dans la cour, tous les deux. Tu restes près de la porte. Tu n'entends pas tout. Tu entends Tibère dire « trois ducats », et « Brunel », et « pardon », dans le désordre. Tu entends Rosalie se taire, longtemps. Tu la vois lever la main, une fois, comme pour le gifler, et la poser sur sa joue à lui, à la place, très vite, et la retirer.",
      "Quand ils reviennent, Tibère a les yeux rouges et le dos droit. Rosalie a repris son aiguille. « Dimanche, dit-elle sans lever la tête. À jeun. Sinon je ferme la porte. » Tibère hoche la tête, et il sort de la rue des Dames d'un pas de sergent à la parade.",
      "Sur le pont, il ne dit rien pendant un bon moment. Puis : « Elle a les sourcils de sa mère. Moi, je croyais qu'elle avait les miens. »",
    ],
    choices: [{ back: "IC_pont" }] },

  IC_robe_ourlet: { act: "I", title: "L'ourlet de la robe bleue", place: "changeurs",
    fx: { flag: "ic:corisande_alienor", ep: ["perso", 300] },
    text: [
      "Maîtresse Jacinthe fronce les sourcils, retourne l'ourlet, le palpe, et pâlit. Elle prend ses petits ciseaux, défait trois points. Une bande de toile cirée glisse dans sa paume, pliée en quatre.",
      "Dedans, un billet, d'une écriture de femme âgée, ferme : *Si la maison tombe avant la Saint-Jean, Aliénor ira chez les sœurs de Valrose. L'or du coffre noir est pour elle. Lothaire n'en saura rien.* Pas de signature. Un cachet de cire noire, trois besants.",
      "Maîtresse Jacinthe replie le billet très vite, le remet dans la toile cirée, et recoud l'ourlet de ses propres mains, à petits points rapides. « Dame Marrel a fait porter la robe à reprendre, ce matin. Je n'ai rien vu, et vous non plus. » Elle ne te regarde plus. Ses mains tremblent sur l'aiguille.",
    ],
    choices: [{ back: "IC_atelier" }] },
});

Object.assign(V, {
  ic_tib_rosalie: { fx: { flag: "ic:rosalie_rue", questSeen: "IC_rosalie", ep: ["perso", 200] } },
  ic_tib_deni: { fx: { ep: ["perso", 200] } },
  ic_tib_vu: { fx: { flag: "tibere:espion", ep: ["perso", 300] } },
  ic_rosalie_brunel: { fx: { ep: ["perso", 300] } },
  ic_robe: { fx: { ep: ["perso", 100] } },
});

// ==================================================================== the Mint, the clipped ducats, the roof of the Archives
Object.assign(P, {
  IC_monnaie: { act: "I", title: "La Monnaie de la République", place: "changeurs", backName: "la cour de la Monnaie",
    text: [
      { first: true, text: "La Monnaie est une cour carrée fermée de hauts murs, collée au flanc de la Banque comme un enfant à la jupe de sa mère. Tout autour, des bâtiments bas : la fonderie, d'où sort une chaleur qu'on sent depuis la porte, la salle des balanciers, où des hommes torse nu frappent les flans d'or entre deux coins d'acier, la salle des pesées, et le trésor, gardé par des hommes en gris. L'aile nord, plus haute, abrite les Archives." },
      { first: true, text: "Chaque coup de balancier fait trembler le pavé. Une pluie de ducats neufs tombe dans des paniers d'osier, et des garçons courent porter les paniers à la salle des pesées. Ça sent le métal chaud, le charbon et la sueur." },
      { again: true, when: "day", text: "La cour de la Monnaie, les coups des balanciers, la chaleur de la fonderie. Les paniers de ducats neufs passent de main en main." },
      { again: true, when: "night", text: "La cour de la Monnaie, la nuit. Les balanciers se taisent. La fonderie garde son feu couvert sous la cendre, et un garde gris fait sa ronde avec une lanterne, d'un mur à l'autre. Au-dessus de l'aile nord, le toit de plomb des Archives luit sous la lune." },
      "Dans un panier qui passe devant toi, {{pie#ic_ducats_neufs|des ducats neufs, ronds et lourds, qui sonnent clair|des ducats neufs, plus légers d'un grain que ceux de l'an passé, et quelques-uns, au fond, dont le cordon de la tranche a été refait à la lime}}.",
    ],
    choices: [
      { label: "La salle des pesées, où travaille l'essayeur", hide: { night: true }, to: "IC_severin" },
      { label: "Monter sur le toit de l'aile nord, jusqu'à la lucarne des Archives", hide: { any: [{ not: { night: true } }, { seen: "IC_archives_nuit" }] }, to: "IC_archives_lucarne" },
      { label: "La ruelle des fondeurs, chez Noé Quint", hide: { any: [{ not: { has: "ic:noe" } }, { has: "ic:rogneur" }] }, to: "IC_noe" },
      { back: "IC_pont" },
    ] },

  IC_severin: { act: "I", title: "L'essayeur", place: "changeurs", backName: "la salle des pesées",
    fx: { meet: "ic_severin", questSeen: "IC_rogneur" },
    text: [
      { first: true, text: "La salle des pesées est la seule pièce calme de la Monnaie. Des balances sous des cloches de verre, des poids de cuivre rangés par taille dans des boîtes de velours, une fenêtre sur la Salve. L'essayeur, Ludovic Mauduit, est un homme de cinquante ans, grand, voûté, les doigts brûlés par les acides, qui pèse les ducats un par un, à la pince." },
      { again: true, text: "Ludovic Mauduit pèse, note, pèse encore. Il lève la tête et te fait signe d'attendre, d'un doigt brûlé." },
      "« Depuis l'automne, on me rapporte des ducats rognés, dit-il. Des ducats neufs, de notre frappe, de cette année. Quelqu'un leur enlève de l'or sur la tranche, à la lime, et refait le cordon. Du beau travail. Il faut une main de la maison. Depuis qu'on a renvoyé le graveur Rigaud, l'an dernier, on me regarde de travers, moi, parce que je pèse. »",
      "« La Monnaie {{oreille#ic_rogne_monnaie|frappe au titre de la loi, et je réponds de chaque grain|frappe un grain trop léger, sur ordre, et si je trouve le rogneur, on le pendra pour un grain pendant qu'on en vole un autre à chaque pièce}}, ajoute-t-il, en regardant la balance. Trouvez-moi cet homme, et la Monnaie vous paiera deux ducats. »",
      { if: { voile: "ic_ducats_neufs" }, text: "Tu as vu, dans le panier, les tranches refaites à la lime. Tu as vu aussi que toutes les pièces, même les honnêtes, pèsent un grain de moins." },
    ],
    choices: [
      { label: "Aller voir les frappeurs à leurs balanciers", hide: { any: [{ has: "ic:noe" }, { seen: "IC_rogneur_rien" }] }, to: "IC_rogneur_ateliers" },
      { label: "« J'ai trouvé votre homme. »", hide: { any: [{ not: { has: "ic:noe_vu" } }, { has: "ic:rogneur" }] }, to: "IC_rogneur_denonce" },
      { back: "IC_monnaie" },
    ] },

  IC_rogneur_ateliers: { act: "I", title: "Les frappeurs", place: "changeurs",
    text: [
      "Dans la salle des balanciers, douze frappeurs travaillent par paires : l'un pose le flan d'or sur le coin, l'autre tire la barre du balancier, et le coup tombe. Ils ont tous les bras luisants, des mitaines de cuir, et cette surdité des gens qui vivent dans le bruit. Au fond, près de la fenêtre, un homme lime les bavures des pièces sur un établi.",
      "Il a une trentaine d'années, les épaules étroites, des cernes jusqu'au milieu des joues. Sur son établi, {{pie#ic_lime|une lime plate, une brosse, un petit tas de limaille de cuivre|une lime plate, une brosse, et dans la rainure de l'établi, sous la limaille de cuivre, une poussière d'or qu'on a mal balayée}}. Un frappeur te dit son nom en criant, entre deux coups : Noé Quint.",
      { with: "tibere", text: "Tibère regarde l'homme à la lime avec l'œil d'un sergent de quartier. « Celui-là ne dort pas, dit-il. Un homme qui ne dort pas a une raison. »" },
    ],
    choices: [
      { label: "Ramasser la poussière d'or de la rainure, d'un doigt mouillé", hide: { not: { voile: "ic_lime" } }, fx: { flag: ["ic:noe", "ic:noe_vu"], ep: ["perso", 300] }, back: "IC_monnaie" },
      { label: "Attendre la fin du travail, et le suivre jusque chez lui",
        test: { dom: "discretion", diff: -10, label: "Suivre un ouvrier dans les ruelles", help: [{ with: "lison", v: 10 }] },
        win: { fx: { flag: "ic:noe" }, to: "IC_noe" }, lose: { to: "IC_rogneur_rien" } },
      { label: "Payer une chopine aux frappeurs, et les faire parler", if: { gold: { min: 3 } }, why: "Il te faut trois liards.",
        test: { dom: "social", diff: 0, label: "Faire parler des ouvriers sourds", help: [{ if: { has: "metier:parole" }, v: 15 }, { with: "tibere", v: 10 }] },
        win: { fx: { gold: -3, flag: "ic:noe" }, to: "IC_noe" }, lose: { fx: { gold: -3 }, to: "IC_rogneur_rien" } },
      { back: "IC_severin" },
    ] },

  IC_rogneur_rien: { act: "I", title: "Rien à voir", place: "changeurs",
    text: [
      "Les frappeurs boivent ta chopine ou ignorent ta filature avec la même indifférence. Noé Quint rentre chez lui par un chemin qui fait trois fois le tour du quartier, et tu le perds au troisième. Les frappeurs, eux, ne savent rien : ils frappent.",
      "En repassant devant la salle des balanciers, tu vois Noé à son établi, qui te regarde passer, et qui baisse les yeux sur sa lime.",
    ],
    choices: [
      { label: "Revenir à son établi, et regarder de plus près", hide: { not: { voile: "ic_lime" } }, fx: { flag: ["ic:noe", "ic:noe_vu"] }, back: "IC_monnaie" },
      { label: "Laisser l'essayeur à ses balances", fx: { quest: "IC_rogneur", flag: "ic:rogneur", set: { ic_rogneur: "rien" } }, back: "IC_monnaie" },
    ] },

  IC_noe: { act: "I", title: "Noé Quint", place: "changeurs",
    fx: { flag: "ic:noe_vu", meet: "ic_noe" },
    text: [
      "La ruelle des fondeurs est un boyau entre la Monnaie et le bras de la Salve, où les ouvriers logent à six par maison. Noé Quint habite une chambre au second, sous le toit. Quand il t'ouvre, tu vois derrière lui une femme couchée dans un lit clos, qui tousse, et une bassine de linge rougi.",
      "« Vous êtes de l'essayeur. » Il le dit à plat. Il te laisse entrer, et referme. Il ne cherche pas à mentir longtemps. « Un grain par pièce. Dix pièces par jour. Le médecin de la Monnaie prend un ducat la visite, et elle a besoin de lui tous les deux jours. » Il soulève une latte du plancher. Dessous, un petit lingot d'or, gros comme un doigt, fondu dans un dé de terre.",
      "« Ils allègent les ducats d'un grain sur ordre, eux, et personne n'est pendu, dit-il. {{oreille#ic_noe|Moi, j'ai pris ce qui traînait sur l'établi, rien de plus|Moi, je reprends le grain qu'on vole à tout le monde, et je l'aurais rendu si j'avais pu}}. »",
      { with: "gildas", text: "Frère Gildas s'est approché du lit clos sans demander. Il pose deux doigts sur le poignet de la femme, écoute son souffle, et fouille dans sa besace. Il pose sur la table un sachet d'herbes. « En tisane, trois fois le jour. Ça ne la guérira pas. Ça la fera dormir. »" },
    ],
    choices: [
      { label: "Le dénoncer à l'essayeur : la loi est la loi", tag: "Le Conseil +5", stain: true, to: "IC_rogneur_denonce" },
      { label: "Lui dire de cesser, et taire son nom à l'essayeur", to: "IC_rogneur_protege" },
      { label: "Porter à l'essayeur l'ordre du grain allégé, et l'obliger à choisir", hide: { not: { any: [{ voile: "ic_rogne_monnaie" }, { voile: "ic_comptes_monnaie" }, { voile: "ic_dumay_monnaie" }] } }, to: "IC_rogneur_ordre" },
    ] },

  IC_rogneur_denonce: { act: "I", title: "La loi est la loi", place: "changeurs",
    fx: { quest: "IC_rogneur", flag: "ic:rogneur", set: { ic_rogneur: "denonce" }, gold: 40, fac: { conseil: 5, hautes: -5 }, ep: ["perso", 400] },
    text: [
      "Ludovic Mauduit t'écoute, hoche la tête, et envoie chercher les gardes gris. Il te compte deux ducats sur le plateau de sa balance, et les pèse, par habitude, avant de te les donner. Ils pèsent un grain de moins que la loi.",
      "Les gardes ramènent Noé Quint par la cour, les mains liées derrière le dos, et les frappeurs s'arrêtent de frapper pour le regarder passer. Le petit lingot d'or est posé sur la table de l'essayeur, dans son dé de terre.",
      "Tu {{miroir|as fait ce que la loi demande|as pensé aux deux ducats avant de penser à la femme dans le lit clos}}. « Il sera jugé par le prévôt, dit Ludovic Mauduit sans te regarder. C'est la corde, pour la fausse monnaie. » Il remet son ducat sur la balance. « Sa femme, je ne sais pas. »",
      { with: "tibere", text: "Tibère regarde partir les gardes. « J'en ai arrêté des comme lui, dit-il. Je dormais bien, à l'époque. »" },
    ],
    choices: [{ back: "IC_monnaie" }] },

  IC_rogneur_protege: { act: "I", title: "Un grain", place: "changeurs",
    fx: { quest: "IC_rogneur", flag: ["ic:rogneur", "ic:porte_eau"], set: { ic_rogneur: "protege" }, fac: { hautes: 5 }, ep: ["perso", 400] },
    text: [
      "Noé Quint te regarde comme on regarde quelqu'un qui vient de lâcher une corde qu'on croyait tenir autour de son cou. Il remet la latte en place, s'assied sur le bord du lit de sa femme. « Je cesse. Je le jure. » Il réfléchit. « Je vous dois quelque chose. Je n'ai rien. Sauf ça. »",
      "Il baisse la voix. « La nuit, la Banque fait sortir de l'or de la Monnaie. Pas par la cour : par la porte d'eau, sous la fonderie, une vieille porte du temps de la reine qui donne sur le bras de la Salve, entre les piles. Une barque, deux hommes en gants gris, des sacs. Une fois par semaine, le mardi. Les registres des deux maisons l'ignorent. »",
      "Il te tend le petit lingot d'or dans son dé de terre. « Prenez-le aussi. Si je le garde, je recommencerai. »",
      "Chez l'essayeur, plus tard, tu dis que tu n'as rien trouvé. Ludovic Mauduit te regarde longtemps par-dessus ses balances. Il sait que tu mens. Il hoche la tête et retourne à ses pesées.",
    ],
    choices: [
      { label: "Prendre le lingot, pour qu'il ne recommence pas", fx: { item: "ic_tr_lingot", clock: { tresors: 1 }, flag: "tresor:ic_lingot" }, back: "IC_monnaie" },
      { label: "Lui laisser le lingot : le médecin passera encore", fx: { conf: { gildas: 3, lison: 3 } }, back: "IC_monnaie" },
    ] },

  IC_rogneur_ordre: { act: "I", title: "L'ordre du grain", place: "changeurs",
    fx: { quest: "IC_rogneur", flag: ["ic:rogneur", "ic:porte_eau"], set: { ic_rogneur: "ordre" }, fac: { hautes: 5, conseil: -5 }, ep: ["perso", 700] },
    text: [
      "Tu reviens à la salle des pesées seul{e}, et tu poses deux ducats neufs sur la balance de Ludovic Mauduit : un rogné, un honnête. Puis tu lui dis ce que tu sais du grain qu'on enlève à chaque pièce, sur ordre, sans écrit.",
      "L'essayeur pâlit. Il retire ses lunettes, les essuie, les remet. « Si je fais pendre un ouvrier pour un grain, dit-il lentement, il dira au juge pourquoi il a pris ce grain. Et le juge demandera combien de grains manquent à chaque pièce de la République. Et c'est moi qui pèse. » Il regarde la Salve par la fenêtre. « Le rogneur n'existe pas. La Monnaie a perdu un peu d'or par usure des limes. Je l'écrirai ainsi. »",
      "Le soir, Noé Quint t'attend au coin de la ruelle des fondeurs, chassé de la Monnaie, libre, et vivant. Il te parle d'une porte d'eau, sous la fonderie, une vieille porte du temps de la reine, par où la Banque fait sortir de l'or le mardi, la nuit, dans une barque, sans que personne le porte au registre.",
      { with: "lison", text: "Lison a tout écouté. « Tu as fait plier un homme de la République sans lever la voix, dit-elle. Ma grand-mère aimerait ça. » Elle n'ajoute rien, mais elle marche plus près de toi en sortant." },
    ],
    choices: [{ back: "IC_monnaie" }] },

  IC_archives_lucarne: { act: "I", title: "Le toit de plomb", place: "changeurs", when: "night",
    text: [
      "Par l'échelle des couvreurs, contre le mur de la fonderie, tu montes sur le toit de l'aile nord. Le plomb est tiède sous tes paumes, à cause du feu de la fonderie dessous, et luit sous la lune. La lucarne des Archives est au milieu du toit : un châssis de bois et de vitres, fermé d'une barre intérieure.",
      "Le plomb, autour de la lucarne, {{pie#ic_plomb|est neuf, soudé au fer, sans une faille|a été soudé de travers, et un coin entier se soulève sous l'ongle}}.",
      "En bas, dans la cour, le garde gris fait sa ronde. Sa lanterne passe sous toi, s'éloigne, revient.",
      { with: "lison", text: "Lison s'accroupit sur le faîte comme sur le plat-bord d'une barque, sans un bruit. « Si tu tombes, chuchote-t-elle, tombe dans la Salve. C'est plus mou que la cour. »" },
    ],
    choices: [
      { label: "Pousser la lucarne : elle ferme mal, Larcher l'a dit", hide: { not: { voile: "ic_ponce_lucarne" } }, to: "IC_archives_nuit" },
      { label: "Soulever le coin du plomb et passer la main jusqu'à la barre", hide: { not: { voile: "ic_plomb" } }, to: "IC_archives_nuit" },
      { label: "Forcer la barre avec ta dague, sans casser de vitre",
        test: { dom: "discretion", diff: -10, label: "Ouvrir une lucarne sans bruit", help: [{ if: { item: "crochets" }, v: 10 }, { if: { has: "passe:voleur" }, v: 10 }] },
        win: { to: "IC_archives_nuit" }, lose: { to: "IC_archives_pris" } },
      { label: "Laisse-moi faire", who: "lison",
        test: { dom: "discretion", diff: 0, label: "Lison sur un toit" },
        win: { fx: { conf: { lison: 2 } }, to: "IC_archives_nuit" }, lose: { to: "IC_archives_pris" } },
      { label: "Redescendre par l'échelle des couvreurs", back: "IC_monnaie" },
    ] },

  IC_archives_nuit: { act: "I", title: "Les Archives, la nuit", place: "changeurs",
    fx: { flag: "ic:archives_entree", ep: ["perso", 300] },
    text: [
      "Tu te laisses glisser par la lucarne, tu te suspends au rebord, tu tombes sur le plancher d'une galerie haute qui fait le tour de la nef, à mi-hauteur des rayonnages. Un escalier de bois descend. Personne. L'odeur de colle de peau, de poussière, de souris.",
      "Dans le noir, la nef {{echo#ic_echo_archives|craque doucement, comme tous les vieux bâtiments la nuit|garde un bruit de grattoir sur du parchemin, et une voix d'homme, jeune, qui pleure en écrivant : « Pardonne-moi, reine, j'efface ton nom pour garder ma main »}}.",
      { with: "gildas", text: "Frère Gildas descend l'escalier derrière toi, sa bure relevée, plus agile que tu ne l'aurais cru. Il ne dit rien. Il lève seulement les yeux vers les rayonnages, dans l'ombre, avec une sorte de faim." },
      "Ta lanterne sourde, à demi ouverte, éclaire trois rayonnages à la fois. Au fond, l'armoire grillée des titres attend, fermée.",
    ],
    choices: [{ label: "Descendre dans la nef des registres", to: "IC_registres" }] },
});

Object.assign(V, {
  ic_rogne_monnaie: { fx: { clue: "ic_c_grain", ep: ["perso", 200] } },
  ic_ducats_neufs: { fx: { ep: ["perso", 100] } },
  ic_lime: { fx: { ep: ["perso", 100] } },
  ic_plomb: { fx: { ep: ["perso", 100] } },
  ic_echo_archives: { fx: { ep: ["perso", 300] } },
});
Object.assign(C, {
  ic_c_grain: { rev: "B", text: "Ludovic Mauduit, essayeur de la Monnaie : la Monnaie frappe les ducats un grain trop légers, sur ordre." },
});

// ==================================================================== extras
var X = {
  people: {
    ic_dumay: { name: "Mainfroy Dumay", f: false, face: { age: "ancien", coif: "degarni", marks: ["lunettes"] }, desc: "Le plus vieux changeur du pont, une loupe de corne vissée dans l'œil. Il pèse tout, même ce qu'on lui dit." },
    ic_gedeon: { name: "Gédéon", f: false, face: { age: "ancien", coif: "court", beard: "barbe" }, desc: "Marchand de papiers anciens sous la dernière arche de la bourse aux nouvelles. Copiste habile, menteur aimable." },
    ic_amedee: { name: "Amédée Pelletan", f: false, face: { age: "jeune", coif: "boucles" }, desc: "Commis de troisième rang à la Banque Marrel, vingt-deux ans, des manchettes tachées d'encre et une langue qui court plus vite que sa plume." },
    ic_nicole: { name: "Nicole Aguesse", f: true, face: { age: "ancien", coif: "foulard" }, desc: "Veuve, petite-fille du batelier Josselin Aguesse. Des mains de lavandière et un chapeau de deuil trop grand pour elle." },
    ic_ponce: { name: "Ponce Larcher", f: false, face: { age: "mur", coif: "degarni" }, desc: "Sous-archiviste de la République. Des doigts jaunes de tabac et d'encre, une calotte de laine, et un prix pour chaque chose." },
    ic_jacinthe: { name: "Maîtresse Jacinthe", f: true, face: { age: "mur", coif: "chignon" }, desc: "Maîtresse couturière rue des Dames. Elle habille les petites-filles des banquiers, et elle n'a jamais rien vu." },
    ic_severin: { name: "Ludovic Mauduit", f: false, face: { age: "mur", coif: "court", marks: ["lunettes"] }, desc: "Essayeur de la Monnaie de la République. Il pèse les ducats un par un, à la pince, et sait ce que pèse un grain." },
    ic_noe: { name: "Noé Quint", f: false, face: { age: "adulte", coif: "court" }, desc: "Limeur à la Monnaie. Des cernes jusqu'au milieu des joues, une femme malade, et une latte du plancher qui se soulève." },
    ic_lucette: { name: "Lucette", f: true, face: { age: "adulte", coif: "foulard" }, desc: "Crieuse de la bourse aux nouvelles. Elle lit les lettres qu'on lui donne, et garde celles qu'on lui paie." },
  },
  items: {
    ic_tr_ysaure: { name: "Une ysaure d'or", kind: "tresor", price: 80, desc: "Une pièce d'or de la reine, frappée avant la nuit des Comptoirs : un profil de femme couronnée, la bouche ouverte. Au revers, une barque et une étoile." },
    ic_tr_reconnaissance: { name: "La reconnaissance de Ricard Marrel", kind: "tresor", price: 150, desc: "Un parchemin couleur d'os, scellé de trois besants : la maison Marrel reconnaît devoir trente mille ducats à la reine Ysaure. Signé de la reine." },
    ic_tr_hanap: { name: "Le hanap des Aguesse", kind: "tresor", price: 120, desc: "Un hanap d'argent haut comme la main : le pied est une barque de Salve, la coupe une vague. Poli par des doigts de batelier." },
    ic_titre_aguesse: { name: "Le titre des Aguesse", kind: "document", form: "acte", desc: "Un rouleau de parchemin scellé de cire verte, une barque et une étoile.",
      text: "*Par la Charte des Hautes-Eaux, et de notre main, nous donnons à Guiot Aguesse et à ses hoirs les douze arpents gagnés sur la mer au lieu-dit la Pointe-aux-Hérons, pour en jouir à toujours. Ysaure, reine. L'an mil onze.*\n\nAu dos, d'une autre encre : *{{loupe#ic_titre_dos|Enregistré au greffe de la reine|Enregistré au greffe de la reine, cote neuf cent deux du livre des terres, double gardé par le chancelier Vasse}}.*" },
    ic_tr_sceau: { name: "Le sceau du chancelier Vasse", kind: "tresor", price: 140, desc: "Une matrice de sceau en bronze noirci : une barque, une étoile, et autour, SIGILLVM AYMERICI VASSE CANCELLARII REGINAE. Le burin l'a épargnée." },
    ic_calques: { name: "Les calques de Ponce Larcher", kind: "document", form: "liasse", desc: "Onze feuilles de papier pelure, calquées sur les pages de garde du registre des titres avant que Lothaire Brunel ne les brûle.",
      text: "*Table des titres d'avant, recopiée de l'ancien livre de la reine par moi, Hélie, greffier, pour mémoire.*\n\n*Pointe-aux-Hérons, douze arpents : Aguesse, par la Charte. Les Trois-Bassins : Vimeux, par la Charte. La Pêcherie-Basse : Vasse, par la Charte…* (et trois cent neuf lignes encore, toutes semblables.)\n\nEn bas de la dernière page, d'une écriture plus petite : *{{loupe#ic_calque_helie|Fin de la table|L'ancien livre n'a pas brûlé. Le chancelier Vasse l'a emporté la nuit même, avec le reste}}.*" },
    ic_de_rosalie: { name: "Le dé d'argent de Rosalie", kind: "objet", unique: true, price: 4, desc: "Un dé à coudre en argent, usé au sommet. Tibère l'a offert à sa fille au début de son apprentissage. Elle le lui prête." },
    ic_tr_lingot: { name: "Le lingot de Noé Quint", kind: "tresor", price: 60, desc: "Un petit lingot d'or gros comme un doigt, fondu dans un dé de terre : des mois de grains limés sur la tranche des ducats neufs." },
    ic_faux_reconnaissance: { name: "Une reconnaissance de la reine (copie)", kind: "tresor", price: 6, desc: "Un parchemin jauni, scellé de trois besants, d'une écriture appliquée. Une belle copie." },
  },
  enemies: {
    ic_garde_gris: { name: "Garde de la Monnaie", look: "humain", pv: 15, att: 32, def: 15, dmg: 4, desc: "Le gris de la République, une épée de garde, et la nuit pour lui." },
    ic_garde: { name: "Garde de la Banque", look: "humain", pv: 13, att: 30, def: 14, dmg: 4, desc: "Livrée noir et or, épée courte, gants de cuir. Payé pour garder, et pour se souvenir des visages." },
  },
  quests: [
    { id: "IC_coffre", act: "I", kind: "annexe", title: "Le coffre du batelier", start: "IC_coffre_nicole", echo: "ic:coffre" },
    { id: "IC_rosalie", act: "I", kind: "annexe", title: "La fille du sergent", start: "IC_atelier", echo: "ic:rosalie" },
    { id: "IC_rogneur", act: "I", kind: "annexe", title: "Les ducats rognés", start: "IC_severin", echo: "ic:rogneur" },
    { id: "IC_reine", act: "I", kind: "annexe", title: "La dette de la reine", start: "IC_reine_vendeur", echo: "ic:reine" },
  ],
};

module.exports = { passages: P, extras: { people: X.people, items: X.items, enemies: X.enemies, clues: C, quests: X.quests, veils: V } };
