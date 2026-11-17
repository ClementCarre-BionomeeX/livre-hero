// Act I, the eye (post `a1` = oeil), first half: the Bas-Fonds by day. Fifrelin, the wash-house, the hospice, the
// quay, the monkey man, the sergeant of the bridge, and Douce Malatrait on the Pont-aux-Clefs. The tail of the
// Remonteur through the upper town is a1_oeil2.
// Sets: monde:a1:douce_cause (Sans-Bruit and the Rossignols have talked). Personal: a1:o_lavoir (knows the old man's
// habits), a1:o_deux_ombres (warned of the second shadow), a1:large_patron (a barge master owes a passage).
module.exports = {
  passages: {
    A1o_basfonds: { act: "I", title: "Les Bas-Fonds, au grand jour", place: "basfonds", hub: true, backName: "les Bas-Fonds",
      fx: { until: 10 },
      text: [
        { first: true, text: "Les Bas-Fonds, le jour, travaillent sur le pas de leurs portes. La ville haute a des ateliers ; ici, on a la rue. Les limeurs y sortent leurs étaux dès que le soleil passe les toits, et toute la rue de la Morne, d'un bout à l'autre, se met à grincer d'un seul grincement, où les enfants jouent, où les femmes parlent, et que personne n'entend plus depuis le berceau." },
        { first: true, text: "Tu connais chaque visage et chaque visage te connaît, ce qui a ses commodités et ses dangers. On sait ici ce qu'est la compagnie du Rossignol. On le sait comme on sait que le boulanger mouille sa farine : c'est une chose de voisinage, qu'on tait aux étrangers, et dont on parle beaucoup entre soi." },
        { first: true, text: "Le Remonteur loge là-haut, au pied du rempart, dans un autre monde. Mais un homme qui vit seul depuis quarante ans a une lavandière, un porteur d'eau, des habitudes ; et tout ce qui lave, porte et observe à Aiguemorne couche aux Bas-Fonds. Avant de filer le vieil homme, il est sage d'apprendre où il va." },
        { again: true, text: "La rue de la Morne, ses étaux, son grincement. Le lavoir est en bas, l'hospice à gauche, le quai au bout ; le Pont-aux-Clefs monte vers la ville haute." },
      ],
      choices: [
        { label: "Siffler Fifrelin, qui ne doit pas être loin", to: "A1o_fifrelin", hide: { seen: "A1o_fifrelin" } },
        { label: "Descendre au lavoir, où l'on sait tout des chemises d'autrui", to: "A1o_lavoir", hide: { any: [{ seen: "A1o_lavoir_ok" }, { seen: "A1o_lavoir_ko" }] } },
        { label: "Passer devant l'hospice de la Morne", to: "A1o_hospice", hide: { seen: "A1o_hospice" } },
        { label: "Pousser jusqu'au quai", to: "A1o_quai", hide: { seen: "A1o_quai" } },
        { label: "T'arrêter devant le montreur de singe, que le guet a relâché", to: "A1o_singe", hide: { seen: "A1o_singe" } },
        { label: "Monter vers la ville haute par le Pont-aux-Clefs", to: "A1o_pont", big: true },
      ] },

    // ------------------------------------------------------------ Fifrelin
    A1o_fifrelin: { act: "I", title: "Fifrelin", place: "basfonds",
      text: [
        "Tu siffles les trois notes de la maison. Il tombe d'un auvent, à deux pas, comme un fruit mûr, en se recevant sur les mains.",
        "« J'étais là depuis le coin. Tu m'as pas vu. » C'est dit sans insolence, comme un fait qui devrait t'instruire. Il a onze ans, peut-être douze, une veste d'homme aux manches roulées, et une dent cassée dont il tire, pour siffler, un parti admirable.",
        "« La vieille dit que t'as l'œil, aujourd'hui. Moi j'ai les jambes. À deux, on fait un guetteur entier. » Il renifle. « C'est deux sous la journée. Trois si faut courir. »",
      ],
      choices: [
        { label: "Topé à trois sous : il courra", if: { gold: { min: 3 } }, fx: { gold: -3, join: "fifrelin", conf: { fifrelin: 10 } }, to: "A1o_fifrelin_dit" },
        { label: "« Tu le feras pour la gloire de la maison. »", test: { dom: "social", diff: 10, label: "Social" }, win: { fx: { join: "fifrelin" }, to: "A1o_fifrelin_dit" }, lose: { to: "A1o_fifrelin_non" } },
        { label: "Le renvoyer : tu travailles mieux seul{e}", back: "A1o_basfonds" },
      ] },
    A1o_fifrelin_dit: { act: "I", title: "Ce que Fifrelin sait déjà", place: "basfonds",
      text: [
        "Il a déjà commencé, naturellement. Il était debout avant vous.",
        "« Ton vieux, je l'ai vu redescendre de la citadelle à huit heures, comme tous les jours. Sauf qu'il rasait les murs. Il s'est retourné quatre fois entre le Parvis et son impasse. Un type qui se retourne quatre fois, soit il doit de l'argent, soit il a vu le diable. » Fifrelin compte sur ses doigts sales. « Il sort à onze heures, d'habitude, pour l'apothicaire de la rue Saint-Éloi. À midi, il mange au Sablier, place aux Heures, toujours la même table. Après, je sais pas. D'habitude il rentre. »",
        "« D'habitude ? »",
        "« Depuis trois jours, il fait plus rien comme d'habitude. C'est la mère Gervaise qui le dit, celle du lavoir. Elle lui fait son linge. »",
      ],
      fx: { flag: "a1:o_lavoir" },
      choices: [{ back: "A1o_basfonds" }] },
    A1o_fifrelin_non: { act: "I", title: "La gloire de la maison", place: "basfonds",
      text: [
        "« La gloire, je l'ai déjà. Elle nourrit pas. » Fifrelin recule d'un pas, hors de portée, par un réflexe qui en dit long sur son éducation. « Je serai sur les toits. Si tu changes d'avis, tu siffles, et t'apportes les sous. »",
        "Il a disparu avant que tu aies trouvé une réponse. Sur l'auvent, une tuile bouge encore.",
      ],
      choices: [{ back: "A1o_basfonds" }] },

    // ------------------------------------------------------------ the wash-house
    A1o_lavoir: { act: "I", title: "Le lavoir de la Morne", place: "basfonds",
      text: [
        "Le lavoir est une halle basse au ras de l'eau, ouverte sur la rivière, où trente femmes à genoux dans des boîtes de paille battent le linge de la ville haute. Cela fait un bruit de fusillade. Elles parlent par-dessus, toutes ensemble, d'une voix qu'elles ont exercée à porter : c'est ici que se rend chaque matin la vraie Sentence d'Aiguemorne, sur les draps de chacun, sans appel et sans les sept ans d'attente.",
        "La mère Gervaise est au bout du rang, à la bonne place, celle où l'eau arrive propre. C'est une petite vieille sèche, aux mains énormes, qui tord une chemise d'homme comme on étrangle un poulet.",
      ],
      choices: [
        { label: "T'agenouiller près d'elle et lui tenir le bout du drap", test: { dom: "social", diff: 10, label: "Social", help: [{ if: { has: "a1:o_lavoir" }, v: 15 }] }, win: { fx: { flag: "a1:o_lavoir", clue: "r_draps", ep: ["perso", 400] }, to: "A1o_lavoir_ok" }, lose: { to: "A1o_lavoir_ko" } },
        { label: "Lui apporter une chemise à laver, et payer d'avance", if: { gold: { min: 2 } }, fx: { gold: -2, flag: "a1:o_lavoir", clue: "r_draps", ep: ["perso", 300] }, to: "A1o_lavoir_ok" },
      ] },
    A1o_lavoir_ok: { act: "I", title: "Le linge de Maître Balancier", place: "basfonds",
      text: [
        "« Balancier ? Trente ans que je le blanchis. » Elle ne ralentit pas. « Six chemises, deux draps, tous les samedis. De l'huile aux genoux des culottes, de l'huile aux poignets : un homme propre, qui se salit proprement. Jamais un mot plus haut que l'autre, et il paie à la semaine. »",
        "Le battoir s'abat, trois fois.",
        "« Samedi dernier, il m'a donné ses draps comme je les lui avais rendus. Pliés. Il n'avait pas couché dedans. Et ses chemises, mon petit, ses chemises sentaient la chandelle : il veille. À son âge ! Je lui ai dit : *Maître Balancier, vous couvez quelque chose.* Il m'a répondu… » Elle s'arrête, le battoir en l'air, pour bien retrouver les mots. « Il m'a répondu : *Gervaise, quand on a tenu une porte quarante ans, on a le droit de savoir pour qui.* Je n'ai rien compris. Lui non plus, je crois. »",
        "Elle retourne le linge. « Il va à l'apothicaire à onze heures, pour son cœur. Il mange au Sablier. Et il met un cierge à Saint-Éloi tous les jours que Dieu fait, à sa défunte. Si tu lui veux du mal, je te noie. »",
      ],
      choices: [{ back: "A1o_basfonds" }] },
    A1o_lavoir_ko: { act: "I", title: "Trente battoirs", place: "basfonds",
      text: [
        "La mère Gervaise te regarde, puis regarde tes mains, qui n'ont jamais tenu un battoir.",
        "« Qu'est-ce que tu lui veux, à mon horloger ? » Elle l'a dit fort. Les vingt-neuf autres battoirs s'arrêtent ensemble, et tu te trouves au centre d'un silence peuplé de femmes à genoux, armées de bois.",
        "Tu dis une commission, une montre à réparer. On te laisse sortir. On te suit des yeux jusqu'à la rue, et bien après.",
      ],
      choices: [{ back: "A1o_basfonds" }] },

    // ------------------------------------------------------------ the hospice
    A1o_hospice: { act: "I", title: "L'hospice de la Morne", place: "basfonds", branch: [
      { if: { is: { reve: "nom" } }, to: "A1o_hospice_nom" }, { to: "A1o_hospice_mur" }] },
    A1o_hospice_mur: { act: "I", title: "La porte au tour", place: "basfonds",
      text: [
        "L'hospice de la Morne est la seule maison de pierre de taille des Bas-Fonds, et il a l'air de s'en excuser : on l'a bâti bas, gris, tourné vers la rivière. Dans sa porte, à hauteur de ceinture, il y a un tour de bois, comme aux couvents. On y pose l'enfant, on fait tourner, on tire la cloche et l'on s'en va. La sœur qui vient ne voit jamais qui s'éloigne.",
        "Au-dessus de la porte, une plaque de bronze, verdie : *Fondé par Sentence, la dixième Septaine, pour les enfants trouvés de la ville basse. Le Bronze a dit.*",
        "Des gamins en sarrau gris traversent la cour en rang, deux par deux, derrière une cornette. Le dernier se retourne et te tire la langue. On les nourrit, on leur apprend la lime, et à quatorze ans la ville haute vient y choisir ses apprentis. Les Bas-Fonds disent que c'est la seule chose que le Juge ait jamais faite pour eux, et ils ajoutent, parce qu'ils sont justes, que c'est déjà une de plus que le Gouverneur.",
      ],
      fx: { ep: ["perso", 150] },
      choices: [{ back: "A1o_basfonds" }] },
    A1o_hospice_nom: { act: "I", title: "La porte au tour", place: "basfonds",
      text: [
        "Tu n'étais pas revenu{e} devant cette porte depuis le jour où l'on t'en a fait sortir, à quatorze ans, un baluchon sous le bras. Elle a rapetissé. Le tour de bois est toujours là, à hauteur de ceinture : on y pose l'enfant, on tourne, on tire la cloche. Tu y es passé{e}. Tu n'en as, bien entendu, aucun souvenir, et c'est une chose étrange que de regarder le premier endroit où l'on a été seul.",
        "Au-dessus de la porte, la plaque de bronze que tu as vue dix ans sans la lire : *Fondé par Sentence, la dixième Septaine, pour les enfants trouvés de la ville basse. Le Bronze a dit.*",
        "La sœur tourière te reconnaît. Elle reconnaît tous ses enfants, à la démarche. « Le registre ? » Elle secoue sa cornette, sans dureté. « Je te l'ai dit quand tu es parti{e}. Les registres d'entrée montent chaque année à la citadelle, sous la clef du Doyen. C'est la règle de la fondation : *que nul ne sache d'où ils viennent, afin que nul ne puisse le leur reprocher.* Je n'y peux rien, mon enfant. C'est écrit dans la Sentence. »",
        "Tu redescends la marche. Quelqu'un, il y a quarante ans, a voulu que les enfants de cette maison n'aient à rougir de rien, et a mis pour cela leur nom sous la serrure la mieux gardée de la ville. C'est une bonté qui te coûte cher.",
      ],
      fx: { ep: ["perso", 500], clue: "j_registres" },
      choices: [{ back: "A1o_basfonds" }] },

    // ------------------------------------------------------------ the quay
    A1o_quai: { act: "I", title: "Le quai de la Morne", place: "basfonds", ambiance: "eau", branch: [
      { if: { is: { reve: "large" } }, to: "A1o_quai_large" }, { to: "A1o_quai_berge" }] },
    A1o_quai_berge: { act: "I", title: "Les gabares", place: "basfonds", ambiance: "eau",
      text: [
        "La Morne, au quai des Bas-Fonds, a la couleur et la lenteur d'une soupe. Six gabares y sont amarrées flanc à flanc, chargées de merrain, de charbon de bois, de barres de fer venues de Ferrières par le canal. Les mariniers mangent sur leurs ponts, les pieds pendants.",
        "Tu regardes cela en passant, par métier : qui charge, qui décharge, qui part ce soir. Une gabare de fer, la *Patiente*, a son mât couché et ses amarres doublées ; elle ne remontera vers le nord qu'à la prochaine lune. Une autre, plus petite, pontée de bâches, appareille à l'aube pour l'aval. On ne sait jamais de quelle sortie on aura besoin.",
      ],
      fx: { ep: ["perso", 150] },
      choices: [{ back: "A1o_basfonds" }] },
    A1o_quai_large: { act: "I", title: "Les gabares", place: "basfonds", ambiance: "eau",
      text: [
        "Tu viens ici plus souvent que tu ne l'avouerais. La Morne, au quai des Bas-Fonds, a la couleur d'une soupe ; mais elle va quelque part, ce qui la distingue de tout le reste d'Aiguemorne. Elle descend vers une rivière plus large, qui descend vers un fleuve, et le fleuve finit à cette ligne bleue où le colporteur avait dessiné un bateau.",
        "Sur la plus petite des gabares, un homme à barbe rousse recoud une bâche. Il te connaît de vue : tu es la personne qui regarde partir les bateaux. « On appareille demain à l'aube, pour l'aval. J'ai perdu un matelot à la Saint-Fer, il s'est marié. » Il tire l'aiguille. « La place est à qui la veut. Je ne demande pas les papiers. »",
        "Demain à l'aube. Tu aurais donné dix ans de ta vie, le mois dernier, pour entendre cette phrase. Elle tombe le seul matin de ton existence où tu as mieux à faire.",
      ],
      choices: [
        { label: "« Gardez-la-moi jusqu'à l'aube. On ne sait jamais. »", fx: { flag: "a1:large_patron", ep: ["perso", 400] }, to: "A1o_quai_garde" },
        { label: "Secouer la tête, et t'en aller avant de changer d'avis", fx: { ep: ["perso", 300] }, back: "A1o_basfonds" },
      ] },
    A1o_quai_garde: { act: "I", title: "Une place jusqu'à l'aube", place: "basfonds", ambiance: "eau",
      text: [
        "« Jusqu'à l'aube », répète le marinier. Il crache dans l'eau pour sceller la chose, selon l'usage du fleuve. « Je m'appelle Balthazard, avec un d, et ma gabare la *Sarcelle*. Si tu viens, viens sec : je ne prends pas les gens qui ont le guet aux trousses. »",
        "Il te regarde un peu trop longtemps en disant cela, et retourne à sa bâche.",
      ],
      choices: [{ back: "A1o_basfonds" }] },

    // ------------------------------------------------------------ the monkey man
    A1o_singe: { act: "I", title: "Le montreur et son singe", place: "basfonds",
      text: [
        "Le guet a relâché le montreur à l'heure de la soupe, faute de pouvoir interroger le singe. Il s'est installé au coin de la rue de la Morne, sur une caisse, et il donne aux Bas-Fonds, gratis, une représentation d'un genre nouveau : le récit de sa nuit au violon. Le singe, en veste rouge, mime le sergent.",
        "« Et le prévôt me demande : *Votre animal sait-il ouvrir une serrure à onze pênes ?* Je réponds : *Monsieur, il sait ouvrir une noix.* » Rires. Le singe salue.",
        "Tu attends que le cercle se défasse. Un homme qui a passé la soirée d'hier rue des Ferronniers, les yeux ouverts, à faire le badaud par état, a pu voir des choses que personne ne songe à lui demander.",
      ],
      choices: [
        { label: "Mettre deux sous dans la sébile du singe, et causer", if: { gold: { min: 2 } }, fx: { gold: -2, clue: "g_hure", ep: ["perso", 400] }, to: "A1o_singe_ok" },
        { label: "Le féliciter en connaisseur, et le laisser se vanter", test: { dom: "social", diff: 10, label: "Social" }, win: { fx: { clue: "g_hure", ep: ["perso", 400] }, to: "A1o_singe_ok" }, lose: { to: "A1o_singe_ko" } },
      ] },
    A1o_singe_ok: { act: "I", title: "Ce qu'a vu un homme qui regarde", place: "basfonds",
      text: [
        "« Si j'ai vu ? Je ne fais que cela, voir. C'est Capitaine qui travaille. » Le singe, à son nom, ôte son bonnet.",
        "« Hier, vers dix heures, sous le porche du cirier. Un grand escogriffe en bottes, manteau fermé jusqu'au nez, qui tenait deux chevaux par la bride. Des bêtes de prix, je m'y connais, j'ai été palefrenier. Il attendait. Et qui vient lui parler ? Une femme en homme, cheveux courts, gantée de noir. Elle lui dit trois mots, il lui remet un papier, elle le lit, elle le lui rend, et elle rit. »",
        "« Les chevaux ? »",
        "« Ah, les chevaux. » Il baisse la voix, par habitude de la parade. « Le manteau cachait la livrée de l'homme. Il ne cachait pas le tapis de selle. Brodé au coin : une tête de sanglier, en fil d'or, la gueule ouverte. Je l'ai dit au sergent. Le sergent m'a répondu qu'il ne m'avait pas arrêté pour causer broderie. »",
      ],
      choices: [{ back: "A1o_basfonds" }] },
    A1o_singe_ko: { act: "I", title: "Un artiste", place: "basfonds",
      text: [
        "Le montreur t'écoute avec bonté, comme un artiste écoute le public, c'est-à-dire en pensant à sa recette. Il recommence pour toi seul{e} l'histoire du violon, du début, avec les gestes. Le singe refait le sergent.",
        "Tu en sais à présent très long sur la paille du poste et la soupe du guet. Sur la rue des Ferronniers, il faudrait le prendre par un autre bout, et il a déjà tendu la sébile à quelqu'un d'autre.",
      ],
      choices: [{ back: "A1o_basfonds" }] },

    // ------------------------------------------------------------ the bridge
    A1o_pont: { act: "I", title: "Le Pont-aux-Clefs", place: "basfonds", ambiance: "eau",
      text: [
        "Le Pont-aux-Clefs enjambe la Morne d'une seule arche, bossue, que bordent des deux côtés des boutiques de serruriers pas plus larges que des armoires. Chacune a pour enseigne une clef, et chacune la veut plus grosse que celle du voisin : les dernières venues pendent au-dessus de la chaussée comme des jambons de fer, et un homme à cheval doit baisser la tête.",
        "Au sommet de l'arche, dans une guérite de pierre, le sergent du pont regarde passer la ville basse qui monte travailler chez la ville haute. Il a cloué à sa guérite les avis du jour.",
        { if: { has: "monde:p:reine=propre" }, text: "Il n'y en a qu'un, ce matin, et il concerne une chèvre perdue.", else: "Celui du milieu est tout frais. *Cinquante écus. Vol de la Serrure-Reine. On recherche…* Tu lis la suite en marchant, du coin de l'œil." },
      ],
      choices: [
        { label: "Passer, du pas de quelqu'un qui monte à son ouvrage", to: [{ if: { has: "monde:p:cadenas_vu" }, to: "A1o_pont_figure" }, { to: "A1o_douce" }] },
      ] },
    A1o_pont_figure: { act: "I", title: "Une figure dessinée", place: "basfonds", ambiance: "eau",
      text: [
        "Sous l'avis, on a cloué un dessin. C'est un visage au fusain, fait de mémoire par quelqu'un qui en avait : un front, des yeux, le pli d'une bouche. Cela ne ressemble à personne en particulier. Cela ressemble seulement, par une ligne ou deux, à quelqu'un de la Clef Tordue que le prévôt a regardé de près, hier soir, entre un buffet et une porte.",
        "Le sergent du pont lève les yeux de sa pipe au moment où tu passes. Il regarde les visages, ce matin. On lui a dit de le faire.",
      ],
      choices: [
        { label: "Lui demander du feu, bien en face : on ne cherche pas quelqu'un qui vous parle", test: { dom: "social", diff: 10, label: "Social" }, win: { fx: { ep: ["perso", 400] }, to: "A1o_douce" }, lose: { fx: { flag: "a1:o_sergent" }, to: "A1o_pont_ko" } },
        { label: "Passer derrière une charrette de foin", test: { dom: "discretion", diff: 10, label: "Discrétion" }, win: { fx: { ep: ["perso", 400] }, to: "A1o_douce" }, lose: { fx: { flag: "a1:o_sergent" }, to: "A1o_pont_ko" } },
      ] },
    A1o_pont_ko: { act: "I", title: "« Hé, toi ! »", place: "basfonds", ambiance: "eau",
      text: [
        "« Hé, toi ! Viens voir un peu par ici. »",
        "Tu viens, puisqu'on ne court pas sur un pont. Le sergent te prend le menton, te tourne la tête vers le dessin, puis vers lui, puis vers le dessin. Il n'est pas sûr. Le fusain non plus. « C'est pas toi. T'as pas le nez. » Il te lâche. « Mais t'es de la Clef Tordue, je te connais. Tu diras à la mère Berlue que le Cadenas passera la voir. Aujourd'hui ou demain. Il a des questions sur la nuit dernière. »",
        "Tu remercies pour la commission, et tu passes le pont avec, sur la nuque, le regard d'un homme qui se demande encore s'il a bien fait.",
      ],
      choices: [{ label: "Continuer vers la ville haute", to: "A1o_douce" }] },

    // ------------------------------------------------------------ Sans-Bruit falls into step
    A1o_douce: { act: "I", title: "Quelqu'un marche à ton pas", place: "basfonds",
      text: [
        "Passé le pont, la rue monte entre deux rangs de maisons à pignon. Tu marches. Au bout de vingt pas, tu t'aperçois que tu n'es plus seul{e} : quelqu'un marche à ta gauche, exactement à ton pas, depuis un moment que tu ne saurais dire.",
        { if: { has: "p:o_douce" }, text: "« L'œil, encore. La vieille n'a pas d'imagination. » Douce Malatrait porte aujourd'hui une jupe grise, un fichu, un panier ; rien de la femme au balcon, sinon la voix, et ces mains qu'elle a gardées gantées, de fil cette fois.", else: "C'est une femme d'une trentaine d'années, en jupe grise et fichu, un panier au bras, les mains gantées de fil. Elle a les cheveux coupés à la nuque sous le fichu. « Ne tourne pas la tête, Rossignol. On cause mieux de profil. » Tu sais qui c'est avant qu'elle ait fini : toute la ville basse connaît la démarche de Sans-Bruit, précisément parce qu'on ne l'entend pas." },
        "« Belle nuit, hier. Je vous dois un verre cassé. » Elle regarde les étalages en parlant, comme une ménagère. « Tu montes impasse des Poids, voir un vieux monsieur. Ne fais pas cette tête, j'y ai du monde depuis l'aube. On s'intéresse aux mêmes personnes, toi et moi. C'est flatteur, et c'est encombrant. »",
      ],
      fx: { meet: "douce", flag: "monde:a1:douce_cause" },
      choices: [
        { label: "« Qu'est-ce que vous lui voulez, au Remonteur ? »", to: "A1o_douce_veut" },
        { label: "« Si vous y avez du monde, vous savez qui d'autre le suit. »", to: "A1o_douce_ombres" },
        { label: "Marcher sans répondre, et la laisser venir", test: { dom: "social", diff: 0, label: "Social" }, win: { fx: { ep: ["perso", 400], flag: "a1:o_deux_ombres" }, to: "A1o_douce_ombres" }, lose: { to: "A1o_douce_file" } },
      ] },
    A1o_douce_veut: { act: "I", title: "Ce que veut Sans-Bruit", place: "basfonds",
      text: [
        "« Lui ? Rien. Je veux ce qu'il sait : comment on monte, qui tient le palier, à quelle heure la Tour dort. Mon client est pressé, et il a horreur de payer deux fois le même renseignement. » Elle soupèse une poire à un étal, la repose. « Le tien aussi, j'imagine. On vous a demandé quoi, au juste ? »",
        "Tu ne réponds pas. Elle rit, sans bruit.",
        "« C'est bien. Marjolaine t'a élevé{e}. Je vais te dire une chose, pour le prix de ton silence : on ne m'a pas demandé la même. Je l'ai compris cette nuit. Vous et moi, on court après les mêmes clefs, et on ne veut pas ouvrir la porte pour y prendre le même objet. Cela devrait nous arranger. Cela m'inquiète. »",
      ],
      fx: { clue: "g_pas_meme" },
      choices: [
        { label: "« Qui d'autre le suit ? »", to: "A1o_douce_ombres" },
        { label: "La quitter au coin de la rue", to: "A1o_douce_file" },
      ] },
    A1o_douce_ombres: { act: "I", title: "Deux ombres", place: "basfonds",
      text: [
        "Elle s'arrête devant une mercerie, et te parle dans le reflet de la vitre.",
        "« Ton vieux monsieur a deux ombres, Rossignol, et je ne suis que la plus mince. L'autre est arrivée hier soir. Elle est large comme une armoire, elle a une tête qu'on dirait finie au marteau, et elle ne se cache pas : elle se plante au coin de l'impasse, elle regarde la fenêtre, elle s'en va, elle revient. Mes gens n'aiment pas. Pipeau dit que c'est un homme qui ne file personne. Qu'il attend seulement une heure. »",
        "Elle rajuste son fichu. Ses yeux, dans la vitre, ont cessé de sourire.",
        "« Je vole. Je n'ai jamais fait autre chose, et je n'ai jamais eu besoin d'autre chose. Si ton affaire ou la mienne doit coûter la peau d'un vieux qui graisse des chaînes, j'aime mieux le savoir avant. Ouvre l'œil pour deux, aujourd'hui. Je te revaudrai cela. »",
      ],
      fx: { flag: "a1:o_deux_ombres", ep: ["perso", 400] },
      choices: [{ label: "Hocher la tête, et monter", to: "A1o_douce_file" }] },
    A1o_douce_file: { act: "I", title: "Un fichu dans la foule", place: "basfonds",
      text: [
        "Au coin suivant, il y a une ménagère en jupe grise qui tourne à gauche, son panier au bras. Au coin d'après, il n'y a plus personne. Tu ne l'as pas entendue partir, et tu comprends que c'était toute la démonstration.",
        "La rue monte. Au-dessus des toits, la Tour de l'Horloge-Close sort de la ville comme un doigt levé. Dix heures et demie sonnent, avec leur petit retard. Dans une demi-heure, si Fifrelin et les lavandières disent vrai, un vieil homme sortira de l'impasse des Poids pour aller chercher ses gouttes.",
      ],
      choices: [{ label: "Gagner l'impasse des Poids", to: "A1o_impasse", big: true }] },
  },

  extras: {
    clues: {
      r_draps: { rev: "R", text: "La mère Gervaise, lavandière du Remonteur : depuis une semaine il ne dort plus dans ses draps et veille à la chandelle. « Quand on a tenu une porte quarante ans, on a le droit de savoir pour qui. »" },
      j_registres: { rev: "J", text: "L'hospice de la Morne a été fondé par Sentence, la dixième Septaine. Selon la même Sentence, les registres d'entrée des enfants trouvés montent chaque année à la citadelle, sous la clef du Doyen." },
      g_hure: { rev: "G", text: "Le montreur de singe : le soir de la Saint-Fer, Sans-Bruit a reçu un papier d'un grand valet en bottes qui tenait deux chevaux de prix. Au tapis de selle, brodée d'or : une hure de sanglier." },
      g_pas_meme: { rev: "G", text: "Douce Malatrait : son client et celui des Rossignols veulent les mêmes clefs, mais pas pour prendre le même objet derrière la porte." },
    },
  },
};
