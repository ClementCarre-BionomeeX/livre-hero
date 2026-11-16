// Le Douzième Coup · chapter 9, the one who passes, second half (act III, evening and night of 18 June 541).
// The afternoon returns to the hub `K09j_quai`. At dusk, the quay of the Barges: four ways in (the copper token
// `j:quai_porteur`, the dyers' millrace `j:quai_bief`, Simonnet's barge `j:quai_bord`, the roofs `j:quai_toits`).
// What can be brought back: the crates of the Crown (`j:vu_garde_meuble`), the steward's register (`j:lu_registre`),
// a letter (`j:lettre_oderic`, item `lettre_oderic`), a seal proof (`j:epreuve_sceau`, item `epreuve_sceau`) ; either
// one sets `j:preuve_oderic`. The duke on his steps (`j:vu_duc`, `j:vu_paiement`), the bargain overheard
// (`j:oui_marche`), the under-master's eyes (`j:aubespin_vu_quai`), the alarm (`j:quai_brule`). Ten o'clock, the
// barges leave. Night at the Patiente: eleven strokes with a hole in them (`j:vu_hoquet`). Midnight at the dial (B09).
var P = {};
var PORTEUR = { has: "j:quai_porteur" };
var BIEF = { has: "j:quai_bief" };
var BORD = { has: "j:quai_bord" };
var TOITS = { has: "j:quai_toits" };
var LESTE = [{ if: { voie: "leste" }, v: 15 }, { if: { voie: "coureur" }, v: 5 }];

Object.assign(P, {
  K09j_tantot: { act: "III", title: "L'après-dînée", place: "basse", ambiance: "eau",
    text: [
      "Tu refermes le Cahier. La pierre du cadran t'a laissé son grain dans le coude. Sur le quai, la marchande de harengs vend à présent ses têtes, qui sont pour les chats et pour les pauvres, à des prix différents.",
      "Il te reste une après-dînée, et la ville basse en entier. À la brune, tout ce qui porte ruban vert sera sur le quai des Barges ; d'ici là, on peut encore marcher dans Méridane sans y être attendu{e} de personne, ce qui est un luxe dont tu commences à mesurer le prix.",
    ],
    choices: [{ label: "Descendre les trois marches", to: "K09j_quai", big: true }] },

  K09j_brune: { act: "III", title: "À la brune", place: "basse", ambiance: "eau",
    text: [
      { first: true, text: "Le jour baisse sur l'eau avant de baisser sur les toits. La Thiorne devient d'étain, puis d'ardoise ; les gabares s'y découpent en noir, avec leurs mâts couchés. Sur le Mont-Cadran, la Tour garde encore le soleil à mi-corps, comme un homme debout dans une rivière, et ses quatre cadrans tournent au rose." },
      { first: true, text: "L'allumeur passe avec sa perche. Il a une lanterne par pont, une par niche, une par coin de quai, et il les prend dans un ordre que son père lui a montré. La Petite sonne huit heures et demie. Du côté du quai des Barges, on entend rouler des tonneaux vides, puis une voix qui compte des hommes." },
      { first: true, text: "Devant la chaîne, une vingtaine de gaillards attendent, les mains aux aisselles. Derrière la chaîne, la porte cochère de l'hôtel de Hautgué est ouverte à deux battants, et la cour est éclairée comme pour un bal. Vingt-huit fenêtres ont toujours leurs volets clos." },
      { again: true, text: "La chaîne, les lanternes, la cour éclairée. La Petite a l'aiguille sur le neuf." },
      { first: true, after: "j:guigne_quai", text: "Au coin de la rue des Tanneurs, deux petites ombres sont assises sur une borne, les pieds ballants. La plus petite te fait un signe du menton. Le Furet et la Puce sont exacts : la Guigne paie toujours." },
    ],
    choices: [
      { label: "Montrer le jeton percé à l'homme de la chaîne", hide: { not: { has: "j:engage_barges" } }, fx: { flag: "j:quai_porteur" }, to: "K09j_verdure", big: true },
      { label: "Suivre le Furet et la Puce vers l'eau rouge", hide: { not: { has: "j:guigne_quai" } }, fx: { flag: "j:quai_bief" }, to: "K09j_bief", big: true },
      { label: "Chercher Simonnet, qui arme la première barge", hide: { not: { has: "j:sait_barges_nuit" } }, fx: { flag: "j:quai_bord" }, to: "K09j_simonnet", big: true },
      { label: "Les toits : l'hôtel touche une corderie, et la corderie a une échelle", test: { dom: "discretion", diff: 10, label: "Passer d'un toit à l'autre", help: LESTE },
        win: { fx: { flag: "j:quai_toits", ep: ["seance", 300] }, to: "K09j_toits_quai" }, lose: { fx: { pv: -2 }, to: "K09j_toits_rate" }, big: true },
      { label: "Laisser le quai à Monseigneur, et regarder de la chaîne", to: "K09j_dix" },
    ] },

  // ---------- by the chain: the porter ----------
  K09j_verdure: { act: "III", title: "Le numéro neuf", place: "basse", ambiance: "eau",
    text: [
      "L'homme de la chaîne prend ton jeton, le mire à la lanterne, le mord, et lève la chaîne du genou. De l'autre côté, le sergent La Verdure a quitté sa cruche pour une canne. Il vous range sur une ligne, le long du mur, et passe devant vous en frappant chaque poitrine du pommeau.",
      "« Un. Deux. Trois. Toi, tu as bu : dehors. Trois. Quatre. » Il arrive à toi. « Neuf. Je te remets : le coche. Tu as des bras de noyer, c'est mince et ça tient. » Il recule de trois pas, pour le discours.",
      "« Mes agneaux, la règle est courte, et je l'ai faite moi-même, ce qui vous garantit qu'elle est bête. Vous prenez une caisse dans la cour. Vous la portez à la barge qu'on vous dit. Vous la posez comme si c'était votre mère. Vous revenez. Les caisses ont des étiquettes : les étiquettes s'adressent aux gens qui savent lire, et vous êtes ce soir, par faveur spéciale de Monseigneur, vingt illettrés à trente sous. Celui qui retrouve ses lettres en chemin, je les lui fais ravaler avec ma canne. »",
      "Il rit le premier, afin qu'on sache que c'est drôle. On rit. Deux hommes à rubans verts, derrière lui, se dispensent de rire, et regardent vos mains.",
    ],
    choices: [{ label: "Prendre ta première caisse", to: "K09j_portage", big: true }] },

  K09j_portage: { act: "III", title: "FOIN", backName: "la file des porteurs", place: "basse", ambiance: "eau", hub: true,
    text: [
      { first: true, text: "La caisse est de sapin neuf, cerclée de fer, longue comme un homme. On te la charge sur l'épaule à deux. Le mot peint sur le couvercle te touche la joue, encore frais : *FOIN*. Tu fais trois pas et tes genoux te donnent leur avis sur le foin de Monseigneur. Cela pèse comme une enclume couchée, et quand tu descends la marche de la cour, quelque chose, à l'intérieur, rend un son clair et long, que la paille étouffe trop tard." },
      { first: true, text: "De la cour à la planche, cent quarante pas. De la planche au fond de la cale, douze. Vous êtes dix-neuf, à la file, sous les lanternes, sans un mot : La Verdure a fait remarquer qu'on porte mieux la bouche fermée. La cour se vide rang par rang. Les gabares s'assoient dans l'eau d'un travers de doigt par voyage." },
      { first: true, text: "Au milieu du quai, on a dressé une table, avec une lanterne à réflecteur, un registre, et un petit homme rond qui coche. Sur le perron de l'hôtel, deux laquais viennent de planter des flambeaux." },
      { again: true, text: "La file, les lanternes, les cent quarante pas. Une caisse t'attend dans la cour." },
    ],
    choices: [
      { label: "Buter du pied contre l'anneau d'amarre, et laisser aller la caisse sur son coin", hide: { seen: "K09j_caisse" }, test: { dom: "discretion", diff: 5, label: "Tomber avec naturel", help: [{ if: { voie: "leste" }, v: 10 }, { if: { voie: "tetu" }, v: 5 }, { if: { has: "j:vu_caisses" }, v: 10 }] },
        win: { fx: { flag: "j:vu_garde_meuble", ep: ["histoire", 300] }, to: "K09j_caisse" }, lose: { fx: { pv: -2 }, to: "K09j_caisse" } },
      { label: "Passer au ras de la table, où le petit homme rond coche", hide: { seen: "K09j_loyseau" }, to: "K09j_loyseau" },
      { label: "Descendre ta caisse jusqu'au fond de la cale, où la lanterne éclaire mal", hide: { seen: "K09j_cale" }, to: "K09j_cale" },
      { label: "Régler ton pas pour arriver devant le perron quand la porte s'ouvrira", hide: { seen: "K09j_perron" }, to: "K09j_perron" },
      { label: "Porter jusqu'au dernier rang", to: "K09j_dix", big: true },
    ] },

  K09j_caisse: { act: "III", title: "Ce que pèse le foin", place: "basse", ambiance: "eau",
    text: [
      { outcome: "win", text: "Tu butes. Tu butes en homme de peine, avec le juron, le genou à terre, et l'épaule qui se dérobe du bon côté : la caisse descend sur son coin, contre la pierre du quai, et le coin s'ouvre de la largeur d'une main." },
      { outcome: "win", text: "Il en sort de la paille. Derrière la paille, la lanterne trouve un pied de vermeil, ciselé de lys, large comme une assiette ; et, attachée à ce pied par un fil de laiton, une plaque de plomb, frappée au poinçon. Tu as le temps de la lire avant que les rubans verts soient sur toi. *GARDE-MEUBLE DE LA COURONNE. CHAPELLE HAUTE. N° 14.*" },
      { outcome: "win", text: "« Ramasse ! » La Verdure rebouche la brèche avec son chapeau, puis avec son pied, puis avec un homme. « Ramasse, bête à cornes ! Tu me coûtes une planche ! » Il a regardé ta chute, et ta chute était bonne. On recloue. Tu reprends ta place dans la file avec, au genou, un bleu qui vaut son prix." },
      { outcome: "win", text: "Monseigneur de Hautgué a un hôtel à trente fenêtres, et de quoi le meubler. Le foin qu'il envoie chez lui, cette nuit, porte le numéro d'inventaire d'une autre maison." },
      { outcome: "lose", text: "Tu butes, et la caisse en profite. Elle te passe sur l'épaule, te couche sur la pierre, et se pose à plat, intacte, sur ton avant-bras, avec la douceur d'un bœuf qui s'assoit. Il faut deux hommes pour te l'ôter." },
      { outcome: "lose", text: "« Neuf ! » La canne de La Verdure te trouve les côtes, sans méchanceté, par principe. « Je t'avais dit : comme ta mère. Tu traites ta mère ainsi ? Je te retiens cinq sous pour le chagrin que tu me fais. » Le couvercle a tenu. Tu sais ce que tu savais : que cela sonne, et que cela pèse." },
    ],
    choices: [{ back: "K09j_portage" }] },

  K09j_loyseau: { act: "III", title: "Monsieur Loyseau, intendant", backName: "la table de l'intendant", place: "basse", ambiance: "eau",
    text: [
      { first: true, text: "Le petit homme rond s'appelle monsieur Loyseau ; les rubans verts le disent en ôtant leur chapeau. Il est intendant de Monseigneur, et il a la probité inquiète des gens à qui l'on a confié une clef en leur montrant la potence. Il coche chaque caisse d'un trait, la recompte de l'œil, et recoche. Sa plume a une petite toux." },
      { first: true, text: "Le registre est ouvert sous la lanterne. À côté, un portefeuille de maroquin vert, dont le rabat bâille : on y voit la tranche de trois lettres pliées, et le rouge d'un cachet. Monsieur Loyseau y pose la main toutes les fois qu'un porteur passe, comme une poule se rassoit sur ses œufs." },
      { first: true, text: "Chaque passage te donne la table pendant quatre pas, sous une caisse qui te cache la figure." },
      { again: true, text: "La table, la lanterne, la plume qui tousse. Le portefeuille vert bâille toujours." },
      { after: "j:lettre_oderic", text: "Le portefeuille compte deux lettres. Monsieur Loyseau n'a encore recompté que ses caisses." },
    ],
    choices: [
      { label: "Lire le registre à l'envers, en quatre pas", hide: { has: "j:lu_registre" }, test: { dom: "savoir", diff: 5, label: "Lire à l'envers, sous une caisse", help: [{ if: { voie: "rouage" }, v: 10 }, { if: { voie: "heurier" }, v: 10 }] },
        win: { fx: { flag: "j:lu_registre", ep: ["histoire", 300] }, to: "K09j_registre" }, lose: { to: "K09j_registre" } },
      { label: "Poser ta caisse pour refaire ta sangle, contre le pied de la table", hide: { any: [{ has: "j:lettre_oderic" }, { seen: "K09j_lettre" }] }, test: { dom: "discretion", diff: 15, label: "Deux doigts dans un portefeuille", help: [{ if: { voie: "leste" }, v: 15 }, { if: { has: "j:guigne_alliee" }, v: 15 }, { if: { has: "j:lu_registre" }, v: 5 }] },
        win: { fx: { flag: ["j:lettre_oderic", "j:preuve_oderic"], item: "lettre_oderic", ep: ["histoire", 600] }, to: "K09j_lettre" }, lose: { fx: { flag: "j:quai_brule" }, to: "K09j_alerte" } },
      { back: "K09j_portage" },
    ] },

  K09j_registre: { act: "III", title: "Un registre, vu d'en haut", place: "basse", ambiance: "eau",
    text: [
      { outcome: "win", text: "On lit très bien à l'envers quand on a passé son enfance de l'autre côté d'un établi. Le registre a quatre colonnes : le jour, le nombre, la barge, et une dernière, étroite, où monsieur Loyseau écrit deux lettres." },
      { outcome: "win", text: "Les jours commencent au neuf de juin. Trois barges par nuit, quarante caisses par barge, et cela fait dix nuits. Dans la colonne étroite, les deux lettres sont presque toujours *H. H.* : hôtel de Hautgué. Depuis le quinze, elles changent. *G. M.* Quatre nuits de suite, cent vingt caisses par nuit. En tête de la page de ce soir, d'une encre plus noire, quelqu'un a écrit d'une autre main, haute et pressée : *Le reste du G. M. avant le vingt. Rien après.*" },
      { outcome: "win", text: "*Rien après.* Tu emportes ces deux mots sous ta caisse, jusqu'à la planche. Un homme qui déménage écrit *le reste demain*. Celui-ci connaît le jour où il n'y aura plus de porteurs." },
      { outcome: "lose", text: "Quatre pas, une lanterne dans l'œil, et la main de monsieur Loyseau qui s'abat à plat sur la page à l'instant où tu y arrives. « On regarde ses pieds, mon ami. Le quai est glissant. » Tu as vu des colonnes, et des chiffres bien rangés, qui sont à lui." },
    ],
    choices: [{ back: "K09j_loyseau" }] },

  K09j_lettre: { act: "III", title: "Brûlez ceci", place: "basse", ambiance: "eau",
    text: [
      { if: { has: "j:guigne_alliee" }, text: "Tu poses la caisse. Tu t'agenouilles, tu tires sur ta sangle. Au bout du quai, du côté de la chaîne, une lanterne tombe de son croc et s'écrase, et une voix d'enfant crie au feu avec un naturel qui ferait honneur à maître Florizel. Monsieur Loyseau tourne la tête. Sa main quitte le maroquin." },
      { if: { not: { has: "j:guigne_alliee" } }, text: "Tu poses la caisse. Tu t'agenouilles, tu tires sur ta sangle. Monsieur Loyseau recompte une pile ; pour recompter, il lui faut ses deux mains et ses lèvres. Le maroquin reste seul le temps de trois chiffres." },
      "Deux doigts. La lettre du milieu, parce qu'elle est la plus mince et que les autres la tiendront droite. Elle passe dans ta manche, froide comme un poisson. Tu reboucles ta sangle, tu recharges, tu repars. Tes oreilles attendent un cri pendant cent quarante pas. Il ne vient que la toux de la plume.",
      "Tu la lis au fond de la cale, contre la lanterne, entre deux caisses. Le cachet est un cerf. L'écriture est haute et pressée.",
      "*Gaucelin, vous tiendrez la grande salle prête pour le vingt-deux, le dais tendu, les bancs pour quarante. Vous écrirez dès ce jour aux barons de mon obéissance qu'un Conseil s'assemblera chez moi sous huitaine, afin de pourvoir au gouvernement du royaume durant l'empêchement de la Reine. Vous retiendrez au port les six navires jusqu'à mon ordre.*",
      "*Le vingt et un, je chasse à la Louvière depuis l'aube. Faites que douze gentilshommes m'y aient vu. Brûlez ceci.*",
      "Elle est datée d'aujourd'hui. Tu la relis, pour la date. La Reine, à cette heure, soupe au Palais, à une demi-lieue au-dessus de ta tête, et se porte assez bien pour descendre à pied aux églises. Son beau-frère lui connaît déjà un empêchement, sait quel jour il commence, et fait tendre le dais.",
    ],
    choices: [{ back: "K09j_portage" }] },

  // ---------- the hold ----------
  K09j_cale: { act: "III", title: "Le ventre de la barge", place: "basse", ambiance: "eau",
    text: [
      { if: PORTEUR, text: "Douze pas de planche, une échelle de meunier, et l'on est sous le pont. La cale sent le goudron, la paille neuve et le fleuve. Une seule lanterne, pendue à un barrot, y fait un rond jaune ; les caisses s'alignent au-delà, dans le noir, sur trois épaisseurs, calées de coins. On te montre ta place du menton, et l'on remonte : les hommes du duc aiment mieux l'air du quai." },
      { if: BORD, text: "Simonnet t'a mis une gaffe dans les mains et un bonnet sur la tête, et il t'a dit de te tenir à l'écoutille, pour compter ce qui descend. Tu comptes. Entre deux porteurs, il y a le temps d'un Pater, et l'échelle de meunier est à trois pas. La cale sent le goudron, la paille neuve et le fleuve. Une seule lanterne y fait un rond jaune." },
      { if: BIEF, text: "La troisième barge est la plus près des pieux. Tu te hisses par le safran, ruisselant{e} de rouge, et tu te coules sous la bâche par un coin que le vent a défait. Dessous, il y a l'écoutille, une échelle de meunier, et la cale, qui sent le goudron, la paille neuve et le fleuve. Une seule lanterne y fait un rond jaune. Les porteurs descendent par l'avant ; tu as l'arrière, et le noir." },
      "Les grandes caisses sont devant. Au fond, contre la cloison, on a serré ce qui est petit et qui craint : des cassettes, des étuis de cuir, un coffre à ferrures qu'il faudrait un serrurier pour ouvrir. Et, coincée entre le coffre et la membrure, une boîte plate de bois blanc, de celles où les graveurs livrent leur ouvrage, fermée d'une simple ficelle.",
      "Dedans, il y a un mémoire, et six galettes de cire rouge dans du papier de soie. Le mémoire dit : *À Monseigneur, par Josse Marteau, graveur des monnaies. Un grand sceau d'argent, à deux faces, selon le dessin fourni. Livré le douze de juin. Quatre-vingts écus. Ci-joint six épreuves.*",
      "Tu défais un papier. L'épreuve est grande comme ta paume. Un homme à cheval, l'épée haute, sous un dais ; autour, en lettres qui se lisent du doigt : *ODERIC · PAR LA GRÂCE DE DIEU · RÉGENT D'AURIME.*",
      "Livré le douze. Il y a une Reine à Méridane, jeune, debout, et une princesse de huit ans. Le royaume a de quoi attendre un régent pendant un demi-siècle. Monseigneur a fait graver le sien il y a six jours, et l'a payé comptant.",
    ],
    choices: [
      { label: "Glisser une épreuve dans ta chemise : il en restera cinq, et le papier de soie", hide: { has: "j:epreuve_sceau" }, fx: { flag: ["j:epreuve_sceau", "j:preuve_oderic"], item: "epreuve_sceau", ep: ["histoire", 500] }, to: "K09j_cale_fin" },
      { label: "Prendre l'empreinte de l'empreinte, dans ta cire tiède, et tout remettre", hide: { any: [{ has: "j:epreuve_sceau" }, { not: { item: "pain_cire" } }] }, fx: { flag: ["j:epreuve_sceau", "j:preuve_oderic", "j:epreuve_moulee"], item: "epreuve_sceau", ep: ["histoire", 600] }, to: "K09j_cale_fin" },
      { label: "Renouer la ficelle : tu l'as lu, cela te suffit", hide: { has: "j:epreuve_sceau" }, fx: { flag: "j:vu_sceau" }, to: "K09j_cale_fin" },
    ] },

  K09j_cale_fin: { act: "III", title: "Six épreuves", place: "basse", ambiance: "eau",
    text: [
      { if: { all: [{ has: "j:epreuve_sceau" }, { not: { has: "j:epreuve_moulee" } }] }, text: "La galette est légère, cassante, et elle tient entre ta chemise et ta peau comme une hostie volée. Tu refais le nœud du graveur, qui est un nœud de tisserand. Monsieur Marteau a écrit *six* ; il faudra qu'on recompte pour s'en aviser, et les gens qui embarquent un trésor de nuit recomptent d'abord l'argenterie." },
      { after: "j:epreuve_moulee", text: "Tu pétris ton quartier de cire dans ta paume jusqu'à ce qu'il cède, tu l'appliques sur l'épreuve, tu pèses du pouce, tu comptes vingt. Le cavalier vient en creux, avec son dais et ses lettres à l'envers. Tu remets les six galettes dans leur soie, le mémoire dessus, la ficelle autour. Il manquera au compte de monsieur Marteau ce qui manque à un miroir quand on s'y est regardé." },
      { after: "j:vu_sceau", text: "Tu refermes. Tu as lu, et l'on te croira ou l'on ne te croira pas : une chose lue dans une cale, de nuit, par quelqu'un qui n'avait rien à y faire, pèse ce que pèse la parole de celui qui la rapporte." },
      { if: BIEF, text: "Au-dessus de toi, des pas sur le pont, une caisse qu'on traîne, un juron. Tu attends que cela s'éloigne. Par le coin de bâche, on voit l'eau : elle a monté de deux doigts contre les pieux." },
    ],
    choices: [
      { label: "Paraître à l'écoutille avec une figure de porteur", hide: { not: PORTEUR }, to: "K09j_portage" },
      { label: "Reprendre ta gaffe à l'écoutille", hide: { not: BORD }, to: "K09j_pont_barge" },
      { label: "Repasser sous la bâche, vers les pieux", hide: { not: BIEF }, to: "K09j_sous_quai" },
    ] },

  // ---------- the duke on his steps ----------
  K09j_perron: { act: "III", title: "Monseigneur", place: "basse", ambiance: "eau",
    text: [
      "La porte du perron s'ouvre à deux battants, et le quai se redresse sans qu'on ait rien commandé. Il sort d'abord un chien, un grand limier blanc et feu, qui descend trois marches et s'assoit ; puis un homme, qui s'arrête où le chien s'est arrêté.",
      "Monseigneur Oderic, duc de Hautgué, grand veneur d'Aurime, a cinquante ans, le teint des gens qui vivent à cheval, et un habit de velours vert sans un galon, ce qui est la dernière élégance des hommes très riches. Il est beau, d'une beauté qui a servi. Il regarde ses barges comme un fermier regarde rentrer ses gerbes, salue monsieur Loyseau par son nom, demande à La Verdure des nouvelles de sa jambe ; et l'on voit le sergent grandir d'un pouce. Monseigneur a cette bonhomie des grands, qui ne leur coûte rien et qui leur rapporte des régiments.",
      "Derrière lui sort un homme en noir, mince, jeune, tête nue. Il tient son chapeau sous le bras. De tout le quai, il a choisi la Petite, sur son pilier : il la regarde, tire sa montre, et compare. Quand il relève la tête, le flambeau lui prend les yeux. Un gris. Un brun.",
      "Un troisième les suit, long, voûté, funèbre, qui porte devant lui, à deux mains, une cassette de fer large comme un missel. Monsieur Fourchon la tient loin de son habit, en homme qui porte un plat trop chaud ; elle lui tire les bras jusqu'aux genoux. Une voiture noire, sans armes, attend au pied des marches. Il y dépose la cassette, et les ressorts s'en plaignent.",
      { after: "j:sait_voiture", text: "Deux chevaux bais. Sur le siège, un petit rouquin ou un grand long, selon ce que tu as fait neuf lieues plus haut. Ce soir encore, elle montera par la rue du Cadran." },
      "Le duc tend la main. Le sous-maître s'incline dessus, de la tête seulement, avec une exactitude où il n'entre aucun respect. Puis ses yeux font le tour du quai, en ouvrier qui cherche, dans un mouvement, la pièce qui frotte, et la file des porteurs passe dedans.",
    ],
    choices: [
      { label: "Baisser l'épaule : que la caisse te mange la figure", hide: { not: PORTEUR }, test: { dom: "discretion", diff: 5, label: "N'être qu'une caisse qui marche", help: [{ if: { voie: "leste" }, v: 10 }, { if: { not: { has: "j:concours_gagne" } }, v: 20 }] },
        win: { fx: { flag: ["j:vu_duc", "j:vu_paiement"] }, to: "K09j_perron_fin" }, lose: { fx: { flag: ["j:vu_duc", "j:vu_paiement", "j:aubespin_vu_quai"] }, to: "K09j_perron_fin" } },
      { label: "Le regarder en face : tu veux voir ce qu'il fait d'une figure connue", hide: { not: PORTEUR }, fx: { flag: ["j:vu_duc", "j:vu_paiement", "j:aubespin_vu_quai", "j:aubespin_brave"] }, to: "K09j_perron_fin" },
      { label: "Rester où tu es, la gaffe au pied, le bonnet sur les yeux", hide: { not: BORD }, fx: { flag: ["j:vu_duc", "j:vu_paiement"] }, to: "K09j_perron_fin" },
    ] },

  K09j_perron_fin: { act: "III", title: "Un gris, un brun", place: "basse", ambiance: "eau",
    text: [
      { if: { not: { has: "j:aubespin_vu_quai" } }, text: "Les deux yeux passent sur toi comme ils ont passé sur le porteur d'avant et sur le pieu d'amarre. Une caisse, deux jambes dessous. Le sous-maître remet sa montre au gousset, dit un mot à monsieur Fourchon, et monte en voiture sans se retourner. La portière a un bruit de tabatière qu'on ferme." },
      { if: { all: [{ has: "j:aubespin_vu_quai" }, { not: { has: "j:aubespin_brave" } }, { has: "j:concours_gagne" }] }, text: "Les deux yeux passent, et reviennent. Ils s'arrêtent sur tes mains, qui tiennent la sangle, plus longtemps que sur ta figure : ce sont elles qu'il a regardées hier, sous le dais, pendant un quart d'heure. Il ne dit rien. Il incline la tête de la moitié de ce qu'il a donné au duc, et il monte en voiture. La portière a un bruit de tabatière qu'on ferme." },
      { if: { all: [{ has: "j:aubespin_vu_quai" }, { not: { has: "j:aubespin_brave" } }, { not: { has: "j:concours_gagne" } }] }, text: "Les deux yeux passent, et reviennent. Tu as bougé trop tard, ou trop tôt : une caisse qui se cache se voit mieux qu'une caisse qui marche. Il te regarde le temps de te ranger quelque part, dans un tiroir dont il a seul la clef, et il monte en voiture. La portière a un bruit de tabatière qu'on ferme." },
      { after: "j:aubespin_brave", text: "Tu redresses la tête sous ta charge, et tu lui donnes ta figure, en plein flambeau. Il la prend. Rien ne remue dans la sienne ; l'œil gris et l'œil brun font chacun leur lecture, et tu as le sentiment d'être lu deux fois, par deux hommes qui ne se consultent pas. Puis il a un sourire, très bref, d'un seul côté : celui d'un joueur d'échecs à qui l'on avance un pion qu'il attendait plus tard. Il monte en voiture. La portière a un bruit de tabatière qu'on ferme." },
      "La voiture tourne le coin. Les roues, sur le pavé, font moins de bruit que les sabots : on a mis de la paille aux jantes.",
      "Monseigneur reste encore le temps de flatter son chien. « Dix heures, Loyseau. Pas une de plus : la marée a ses habitudes, et moi les miennes. » Il rentre. Le limier le suit, après avoir considéré les porteurs un par un, avec le regard d'une bête à qui l'on a appris à distinguer le gibier du bétail.",
      "Une cassette de fer qui tire les bras d'un homme jusqu'aux genoux. Monsieur Fourchon est maigre, mais il porte des registres toute l'année. Il y avait là-dedans de quoi bâtir une église, et cela vient de monter en voiture avec un horloger.",
    ],
    choices: [
      { label: "Reprendre la file", hide: { not: PORTEUR }, to: "K09j_portage" },
      { label: "Te remettre à compter à l'écoutille", hide: { not: BORD }, to: "K09j_pont_barge" },
    ] },

  // ---------- Simonnet's barge ----------
  K09j_simonnet: { act: "III", title: "La Gourmande", place: "basse", ambiance: "eau",
    text: [
      "Simonnet est au bout du quai marchand, à l'endroit où la chaîne de Monseigneur plonge dans l'eau, et il attend sa plate, les pouces dans sa ceinture. Il te voit venir et ne s'étonne pas : les pilotes de la Thiorne gardent leur étonnement pour les crues.",
      "« Tu veux voir charger. » Il l'affirme. « Moi aussi, figure-toi, et c'est moi qui mène la première. Depuis neuf nuits je porte du foin qui tinte, et l'on me défend d'avoir des oreilles. » Il crache dans le bassin. « Mon bonhomme de proue s'est cassé le pouce hier à une écluse. Tu as les bras qu'il faut, et la figure de quelqu'un qui sait se taire. Prends ce bonnet. Tu tiens la gaffe à l'écoutille, tu comptes ce qui descend, tu me cries le nombre. Si un ruban vert te parle, tu réponds *oui, patron*, à moi, quoi qu'il t'ait demandé. Ils adorent. »",
      "La plate vous prend. On passe la chaîne par l'eau, où elle garde les barques et laisse aller les mariniers du duc. La première barge s'appelle la *Gourmande*, en lettres jaunes, sous la bâche. Simonnet te fait monter par l'arrière. « À dix heures, je largue. Toi, tu sautes sur le quai marchand quand on double le pilier de la Petite : je serrerai à une toise. Ne manque pas ton saut. La rivière, à Hautgué, elle est salée. »",
    ],
    choices: [{ label: "Prendre la gaffe", to: "K09j_pont_barge", big: true }] },

  K09j_pont_barge: { act: "III", title: "À l'écoutille", backName: "l'écoutille de la Gourmande", place: "basse", ambiance: "eau", hub: true,
    text: [
      { first: true, text: "Du pont de la *Gourmande*, on a tout le théâtre. La cour éclairée, la file des porteurs, les cent quarante pas ; une table au milieu du quai, où un petit homme rond coche sous une lanterne ; le perron, où deux laquais plantent des flambeaux. Les caisses arrivent sur des épaules et passent devant toi, une à une, vers l'échelle. Tu cries le nombre. Simonnet, à l'arrière, le répète sans lever la tête, en regardant l'eau monter contre sa coque." },
      { first: true, text: "« Trente et une ! » La barge s'assoit d'un travers de doigt. Chaque caisse qui passe a son mot peint, encore frais, et sous le mot, quand le porteur tourne, un rectangle de bois plus clair, gratté au racloir, où il reste parfois un fleuron." },
      { again: true, text: "L'écoutille, la gaffe, les caisses qui descendent. Simonnet regarde l'eau." },
    ],
    choices: [
      { label: "Descendre « caler une caisse qui joue »", hide: { seen: "K09j_cale" }, to: "K09j_cale" },
      { label: "Regarder le perron, où la porte s'ouvre", hide: { seen: "K09j_perron" }, to: "K09j_perron" },
      { label: "Demander à Simonnet ce qu'il fera, lui, le vingt et un", hide: { seen: "K09j_simonnet_dit" }, to: "K09j_simonnet_dit" },
      { label: "Compter jusqu'à la cent vingtième", to: "K09j_dix", big: true },
    ] },

  K09j_simonnet_dit: { act: "III", title: "Ce que fait un pilote", place: "basse", ambiance: "eau",
    text: [
      "« Le vingt et un ? » Il compte sur la lisse, du pouce. « Je descends cette nuit. Deux jours d'eau jusqu'à Hautgué, un jour pour décharger. Le vingt et un à midi, je serai devant la barre, à attendre le flot pour remonter à vide. Je manquerai la fête, comme l'an dernier, et ma femme me dira que je le fais exprès. »",
      "Il se tait un moment. Une caisse passe. « Quarante-quatre », dis-tu. « Quarante-quatre », dit-il.",
      "« Monseigneur a retenu toutes les barges du port. Toutes : les siennes, celles des autres, jusqu'aux bachots des maraîchers. Douze jours. Il paie bien. Il paie pour qu'elles soient en bas, à Hautgué, à quai, le jour où quarante mille personnes voudraient peut-être s'en aller d'ici par l'eau. » Il te regarde, pour la première fois, bien en face. « Je dis *peut-être*. Je suis pilote. Je regarde où va le courant, je n'ai pas à savoir pourquoi il y va. Mais ma femme et mes deux petits, je les ai mis hier chez ma sœur, à la deuxième écluse, et je leur ai dit que c'était pour le bon air. »",
      { after: "monde:perrine_avertie", text: "La deuxième écluse. Tu as entendu ce matin, dans une autre bouche, *la deuxième borne*. Il a dit son écluse du même ton : en homme qui a pris une mesure sans connaître la chose mesurée, et qui est tombé juste." },
    ],
    choices: [{ back: "K09j_pont_barge" }] },

  // ---------- the millrace ----------
  K09j_bief: { act: "III", title: "L'eau rouge", place: "basse", ambiance: "eau",
    text: [
      "Le Furet a neuf ans, la Puce six, et ils marchent devant toi sans se retourner, par une ruelle où les maisons se touchent du front. On entre dans la Tannerie par l'odeur. Derrière la dernière cuve, il y a un mur, et dans le mur une arche basse d'où sort une eau lente, épaisse, couleur de vin, qui fume un peu dans le soir.",
      "« La garance, dit le Furet. Ça part pas. Tu seras rouge jusqu'à dimanche. » Il te montre l'arche. « Tu comptes tes pas. À cent, t'as plus pied sur la gauche : tu tiens la droite. À deux cents, y a un jour, en haut : c'est le soupirail de la salle basse, chez le duc. À deux cent quarante, les pieux. » La Puce lève un doigt, gravement. « Et quand l'eau te chatouille là, dit-elle en se touchant la lèvre, tu reviens. »",
      "Tu entres. L'eau est tiède au genou, froide à la taille. La voûte est si basse qu'on marche le cou plié, une main au plafond, où la pierre est grasse. Il n'y a plus de lumière au bout de vingt pas. Il y a le bruit que tu fais, et, par-dessous, un autre bruit, sourd, régulier, qui vient à travers la maçonnerie : cent quarante pieds de porteurs, sur le quai, au-dessus de ta tête.",
      "À deux cents, le jour annoncé : un rectangle de lueur jaune, barré de trois fers, à une coudée au-dessus de l'eau. Des voix en tombent. Quarante pas plus loin, la voûte s'ouvre sur du ciel, entre deux pieux noirs, et la poupe d'une barge.",
    ],
    choices: [
      { label: "T'arrêter sous le soupirail, l'eau au menton", hide: { seen: "K09j_marche" }, fx: { flag: ["j:oui_marche", "j:vu_paiement"], ep: ["histoire", 600] }, to: "K09j_marche" },
      { label: "Aller jusqu'aux pieux", to: "K09j_sous_quai" },
    ] },

  K09j_sous_quai: { act: "III", title: "Entre deux pieux", backName: "les pieux, sous le quai", place: "basse", ambiance: "eau", hub: true,
    text: [
      { first: true, text: "Sous le quai, c'est une forêt. Des pieux de chêne, noirs, gros comme des tonneaux, plantés là du temps des Fondateurs, portent les dalles où l'on marche ; l'eau clapote entre eux, rouge d'un côté, verte de l'autre, à l'endroit où le bief rend sa couleur à la rivière. Par les joints des dalles, il tombe des raies de lanterne, et la poussière de paille des caisses." },
      { first: true, text: "La troisième barge est à une brasse, haute encore, sa bâche défaite à un coin. Au-dessus de toi, les pas des porteurs passent et repassent, chacun avec son poids, et tu apprends en un quart d'heure à distinguer celui qui monte chargé de celui qui redescend." },
      { again: true, text: "Les pieux, les raies de lumière, le clapot. La troisième barge, à une brasse." },
      { text: "L'eau t'arrive à la poitrine.", if: { not: { seen: "K09j_cale" } } },
      { text: "L'eau t'arrive aux épaules. Elle était à ta poitrine.", if: { seen: "K09j_cale" } },
    ],
    choices: [
      { label: "Te hisser par le safran, sous la bâche", hide: { seen: "K09j_cale" }, to: "K09j_cale" },
      { label: "Le soupirail, quarante pas en arrière", hide: { seen: "K09j_marche" }, fx: { flag: ["j:oui_marche", "j:vu_paiement"], ep: ["histoire", 600] }, to: "K09j_marche" },
      { label: "Rentrer sous la voûte : l'eau monte", test: { dom: "nature", diff: 0, label: "Deux cent quarante pas contre le flot", help: [{ if: { voie: "coureur" }, v: 10 }, { if: { voie: "tetu" }, v: 10 }, { if: { all: [{ seen: "K09j_cale" }, { seen: "K09j_marche" }] }, v: -15 }] },
        win: { to: "K09j_maree" }, lose: { fx: { pv: -3 }, to: "K09j_maree" }, big: true },
    ] },

  K09j_maree: { act: "III", title: "Jusqu'à la lèvre", place: "basse", ambiance: "eau",
    text: [
      { outcome: "win", text: "Tu comptes à rebours. La voûte a baissé, ou l'eau a monté, ce qui revient au même pour un cou. À cent quarante, elle te prend le menton. Tu tiens la droite, la main au plafond, tu respires par le nez, à petits coups, et tu ne penses qu'au chiffre. À cent, le fond remonte. À soixante, tu as de nouveau des épaules." },
      { outcome: "lose", text: "Tu comptes à rebours, et tu te trompes de mur. À cent, le fond s'en va sous ton pied gauche, d'un coup, comme une marche qu'on a ôtée ; l'eau rouge te passe sur la tête, tiède, épaisse, avec son goût de racine et de fer. Tu remontes contre la voûte, tu t'y cognes, tu trouves la paroi à tâtons. Les cent derniers pas sont longs. Tu les fais en crachant." },
      "Au bout de l'arche, deux petites ombres sont assises sur le bord d'une cuve, les pieds ballants. La Puce te regarde sortir, des pieds à la tête, avec l'intérêt d'une personne qui a parié.",
      "« T'as la lèvre mouillée, dit-elle. T'es resté{e} trop. » Le Furet te tend un sac à tan, pour t'essuyer. Derrière vous, sous l'arche, l'eau vient de toucher la clef de voûte, et le bief s'est tu.",
      { after: "j:oui_marche", text: "Tu grelottes, tu es rouge jusqu'aux cheveux, et tu as dans l'oreille une phrase dite d'une voix égale, à travers trois barreaux, que tu ne perdras plus." },
    ],
    choices: [{ label: "Remonter vers le quai marchand, par les ruelles", to: "K09j_dix", big: true }] },

  // ---------- the bargain (millrace grating, or skylight) ----------
  K09j_marche: { act: "III", title: "La Chambre haute, et ce qui s'y trouvera", place: "basse", ambiance: "eau",
    text: [
      { if: BIEF, text: "Tu t'arrêtes sous les trois fers. L'eau te tient au menton ; il faut renverser la tête pour garder la bouche au sec, et dans cette posture on a le soupirail juste au-dessus du front. Tu vois un plafond à caissons, la moitié d'un lustre, et l'ombre de deux hommes sur un mur, grandie par les bougies. Les voix descendent toutes seules : une salle basse, voûtée, sur l'eau, fait cornet." },
      { if: TOITS, text: "La lucarne est un œil-de-bœuf, au ras de la gouttière, qui donne du jour à l'escalier d'une salle basse. Tu t'y couches à plat ventre, sur le plomb encore tiède. En dessous, un lustre, vu d'en haut, avec ses bougies comme une couronne ; une table ; le crâne d'un homme qui grisonne, et la tête nue d'un autre, jeune, les cheveux noués. Les voix montent par le tuyau de l'escalier, nettes." },
      "« Vous m'aviez dit la chambre. » C'est une voix chaude, lente, qui a l'habitude d'être obéie par des chiens.",
      "« La Chambre haute, Monseigneur. Et ce qui s'y trouvera. » Celle-ci, tu la connais. Elle est égale, sans timbre, pareille au tic-tac d'une montre de prix.",
      "« Il s'y trouvera l'enfant. Je veux qu'il s'y trouve la mère. »",
      "« La Reine y monte chaque jour à midi moins un quart, pour la potion. Elle la donne elle-même. Le jour du Grand Midi, elle y montera comme les autres, avant de paraître au balcon. Elle y sera. »",
      "« Et cela tiendra. »",
      "« Cela tiendra aussi longtemps qu'une main tiendra le levier, Monseigneur, ou qu'on l'aura calé. J'ai de quoi le caler. »",
      "Un silence. Un fauteuil craque. « Un an, dit la voix chaude. Le temps que les barons prennent le pli. Ensuite vous me la rendrez, guérie ou non, et l'on dira que c'était un miracle de la Guilde. J'aurai fait ce qu'il fallait : on ne chasse pas un homme qui a gouverné un an sans faute. » Un rire bref. « Ma belle-sœur prie beaucoup. Elle aura eu un an de plus pour prier. »",
      "« Monseigneur aura ce qu'il a payé. »",
      "C'est dit sans une inflexion, et c'est pourtant la phrase d'un homme qui répond à une autre question. Le duc ne l'entend pas : les gens qui paient entendent rarement ce qu'on leur vend.",
      "Du métal sur du bois : quelque chose de lourd, qu'on pousse. « Douze mille écus à la couronne. Comptez. »",
      "« Je ne compte que le sable, Monseigneur. Fourchon comptera. »",
      { if: BIEF, text: "Les ombres bougent. Une porte. Tu t'aperçois que l'eau t'a pris la lèvre d'en bas pendant que tu écoutais." },
      { if: TOITS, text: "Ils sortent. Un grand maigre en noir, que tu n'avais pas vu, se détache du mur, prend à deux mains une cassette de fer sur la table, et les suit en la portant loin de son habit. Le lustre reste seul, sur une table où l'on a laissé une écritoire ouverte, une bougie, et trois lettres en éventail." },
    ],
    choices: [
      { label: "Gagner les pieux, quarante pas plus loin", hide: { not: BIEF }, to: "K09j_sous_quai" },
      { label: "Te laisser couler par l'œil-de-bœuf, dans l'escalier : trois lettres en éventail", hide: { not: TOITS }, test: { dom: "discretion", diff: 10, label: "Descendre dans une maison qu'on habite", help: LESTE },
        win: { fx: { flag: ["j:lettre_oderic", "j:preuve_oderic"], item: "lettre_oderic", ep: ["histoire", 600] }, to: "K09j_cabinet" }, lose: { fx: { flag: "j:quai_brule" }, to: "K09j_alerte" } },
      { label: "Rester sur le plomb : tu as entendu, et tu as tes deux jambes", hide: { not: TOITS }, to: "K09j_dix" },
    ] },

  // ---------- the roofs ----------
  K09j_toits_quai: { act: "III", title: "La corderie", place: "basse", ambiance: "ville",
    text: [
      "La corderie est un hangar long de deux cents pas, où l'on file le chanvre en reculant. Son échelle sert aux couvreurs, et personne ne la rentre : on vole peu les toits. Tu montes. Le faîte est de tuile creuse, tiède encore, et il porte.",
      "D'en haut, la ville basse est une autre ville. Les canaux y sont des rues de ciel pâle, entre des rues d'ombre. Les lanternes s'allument une à une, dans l'ordre de l'allumeur, et dessinent son chemin. Par-dessus tout cela, le Mont-Cadran, noir, et la Tour, où l'on vient d'éclairer les cadrans par derrière : quatre lunes, qui disent l'heure.",
      "L'hôtel de Hautgué commence où finit la corderie. Un chéneau de plomb, large d'un pied, court entre les deux, au-dessus d'une ruelle de trois étages. Il y a une cheminée pour se tenir au départ, une gouttière pour se tenir à l'arrivée, et entre les deux, douze pas sans rien.",
      "Tu les fais. De l'autre côté, le toit du duc est d'ardoise fine, avec des lucarnes à fronton ; et, au ras de la gouttière, côté cour, un œil-de-bœuf d'où monte une lueur de bougies et un bruit de voix.",
    ],
    choices: [
      { label: "Te coucher à plat ventre contre l'œil-de-bœuf", fx: { flag: ["j:oui_marche", "j:vu_paiement", "j:vu_duc"], ep: ["histoire", 600] }, to: "K09j_marche", big: true },
    ] },

  K09j_toits_rate: { act: "III", title: "Douze pas sans rien", place: "basse", ambiance: "ville",
    text: [
      "L'échelle de la corderie, le faîte, tout va bien jusqu'au chéneau. Le chéneau a douze pas de long, un pied de large, et, au sixième, une soudure que le dernier couvreur a faite un lundi. Le plomb plie. Ton pied part.",
      "Tu ne tombes que d'un étage : il y avait, en dessous, l'auvent d'un marchand d'étoupe, qui te reçoit avec un bruit de tambour crevé, et te rend à la ruelle par petites étapes. Un volet s'ouvre. Une voix de femme donne son opinion sur les chats, puis sur les amoureux, sans choisir. Le volet se referme.",
      "Tu as une épaule en feu, de l'étoupe plein la bouche, et l'hôtel de Hautgué, au-dessus de toi, garde ses lucarnes. Il reste le quai, comme pour tout le monde.",
    ],
    choices: [{ label: "Boiter jusqu'à la chaîne", to: "K09j_brune" }] },

  K09j_cabinet: { act: "III", title: "Brûlez ceci", place: "basse", ambiance: "chateau",
    text: [
      "L'œil-de-bœuf tourne sur un pivot. Tu passes les pieds, puis les hanches, tu te pends au rebord, et tu lâches : l'escalier te reçoit sur une marche de pierre, à dix degrés de la salle. Elle sent la cire chaude, le chien mouillé et le cuir de Hautgué. Le lustre brûle pour personne.",
      "Trois lettres, en éventail, sous un presse-papier en forme de sanglier. Deux sont cachetées. La troisième attend son cachet : la cire est là, le sceau à côté, un cerf ; on a été dérangé par un horloger. Tu la prends. Tu ranges l'éventail en deux branches, de manière qu'il ait l'air complet : on compte mal ce qui est bien disposé.",
      "Tu la lis dans l'escalier, sous l'œil-de-bœuf, à la clarté des cadrans de la Tour. L'écriture est haute et pressée.",
      "*Gaucelin, vous tiendrez la grande salle prête pour le vingt-deux, le dais tendu, les bancs pour quarante. Vous écrirez dès ce jour aux barons de mon obéissance qu'un Conseil s'assemblera chez moi sous huitaine, afin de pourvoir au gouvernement du royaume durant l'empêchement de la Reine. Vous retiendrez au port les six navires jusqu'à mon ordre.*",
      "*Le vingt et un, je chasse à la Louvière depuis l'aube. Faites que douze gentilshommes m'y aient vu. Brûlez ceci.*",
      "Elle est datée d'aujourd'hui. Tu viens d'entendre le marché ; tu en tiens à présent la quittance, de la main de l'acheteur. Dans la cour, un chien aboie, une fois, du ton d'une bête qui a levé le nez.",
    ],
    choices: [{ label: "Reprendre l'œil-de-bœuf, le chéneau, la corderie", to: "K09j_dix", big: true }] },

  // ---------- the alarm ----------
  K09j_alerte: { act: "III", title: "Au voleur", place: "basse", ambiance: "eau",
    text: [
      { if: PORTEUR, text: "Deux doigts. Le maroquin est plus raide que tu ne croyais, et la lettre du milieu vient avec sa voisine, qui tombe. Monsieur Loyseau ne crie pas tout de suite. Il regarde la lettre par terre, puis ta main, puis il devient de la couleur de son papier, et c'est sa plume qui tombe la première. « Sergent ! » Sa voix monte d'une octave. « Sergent ! Le neuf ! »" },
      { if: TOITS, text: "L'œil-de-bœuf tourne sur un pivot, et le pivot n'a pas vu d'huile depuis le feu duc. Il crie. Tu es à moitié passé{e}, les jambes dans l'escalier, quand une porte s'ouvre en bas, et qu'un limier blanc et feu entre dans la salle, lève le nez, et te trouve du premier coup, là-haut, comme un fruit dans un arbre. Il donne de la voix. Toute la maison lui répond." },
      { if: PORTEUR, text: "La canne de La Verdure arrive avant lui. Derrière la canne, les deux rubans verts, qui n'avaient rien dit de la soirée et qui se rattrapent. Tu as le quai devant toi, cent quarante pas de lanternes ; à gauche la cour, qui est une nasse ; à droite l'eau, noire, à six pieds sous la pierre." },
      { if: TOITS, text: "Tu te rejettes sur le toit. L'ardoise est fine et ne pardonne rien. Dans la cour, des flambeaux courent ; deux hommes à rubans verts ont déjà trouvé l'échelle des ramoneurs. Tu as le chéneau devant toi, douze pas sans rien ; à gauche le bassin, noir, à quatre étages sous la gouttière, avec les trois barges." },
      { if: { all: [PORTEUR, { any: [{ has: "j:guigne_quai" }, { has: "j:guigne_alliee" }] }] }, text: "Du côté de la chaîne, quelqu'un siffle : deux notes, l'une haute, l'autre basse. Tu as entendu ce sifflet hier, sur un pont." },
    ],
    choices: [
      { label: "Leur faire face : ils sont deux, et tu as l'avantage d'être pressé{e}", fight: { title: "Les rubans verts", enemies: [{ id: "homme_duc", n: 2 }], terrain: "ville",
        win: { fx: { ep: ["seance", 700] }, to: "K09j_alerte_fin" }, lose: { fx: { pv: 3, gold: -3 }, to: "K09j_alerte_fin" } } },
      { label: "L'eau", test: { dom: "nature", diff: 5, label: "Plonger, et nager sous les barges", help: [{ if: { voie: "coureur" }, v: 10 }, { if: { voie: "leste" }, v: 10 }] },
        win: { fx: { flag: "j:fuite_eau" }, to: "K09j_alerte_fin" }, lose: { fx: { pv: -3, flag: "j:fuite_eau" }, to: "K09j_alerte_fin" } },
      { label: "Courir vers le sifflet", hide: { any: [TOITS, { not: { any: [{ has: "j:guigne_quai" }, { has: "j:guigne_alliee" }] } }] }, fx: { flag: "j:fuite_hirondelles" }, to: "K09j_alerte_fin" },
    ] },

  K09j_alerte_fin: { act: "III", title: "Un signalement", place: "basse", ambiance: "eau",
    text: [
      { outcome: "win", if: { not: { has: "j:fuite_eau" } }, text: "Le premier a une canne plombée et la manie de la lever trop haut : tu entres dessous. Le second glisse sur ce que le premier a laissé tomber. Cela dure moins qu'un Ave. Tu enjambes, tu cours, et l'hôtel de Hautgué, derrière toi, se remplit de gens qui se demandent les uns aux autres de quel côté tu es parti{e}." },
      { outcome: "lose", if: { not: { has: "j:fuite_eau" } }, text: "Ils sont deux, ils sont nourris, et ils font cela tous les jours. La canne plombée te trouve le coude, puis le dos. On te traîne au bord du quai, on te fouille : on cherche une lettre, on trouve ta bourse, et l'on s'en contente. « À l'eau, dit La Verdure, qui est essoufflé. Monseigneur n'aime pas qu'on réveille le guet pour un tire-laine. » Deux paires de bras te balancent. La Thiorne est froide, et elle a la bonté d'être profonde." },
      { outcome: "win", after: "j:fuite_eau", text: "Tu prends ton élan sur trois pas et tu donnes à l'eau le moins de surface que tu peux. Elle se referme. Dessous, il fait noir, et les coques des barges sont trois grands toits de bois, que tu suis de la main. Tu ressors sous la proue de la première, sans un bruit, la bouche ouverte. Sur le quai, on tient des lanternes au-dessus de l'endroit où tu es entré{e}." },
      { outcome: "lose", after: "j:fuite_eau", text: "Tu sautes. Tu sautes mal : la lisse de la deuxième barge te prend la hanche au passage, et l'eau, quand tu y arrives, te reçoit de travers. Tu bois. Tu coules plus que tu ne nages, sous des coques noires, jusqu'à une chaîne d'ancre où tu te pends pour vomir la rivière. Sur le quai, les lanternes cherchent ailleurs. On t'a cru{e} noyé{e}, et il s'en est fallu d'une chaîne." },
      { after: "j:fuite_hirondelles", text: "Tu cours au sifflet. Devant la chaîne, il n'y a personne ; puis il y a la Puce, six ans, plantée au milieu du passage, qui tire un fil. Le fil tient une lanterne, la lanterne tient à un croc, et le tout descend sur le pavé avec de l'huile enflammée, entre toi et les rubans verts. « Au feu ! » crie le Furet, d'une voix de sacristain. Une main te prend la manche, t'enfourne sous une bâche, puis dans un soupirail, puis dans une cave où sèchent des peaux. « La Guigne dit que tu lui dois rien, souffle la Puce. Elle dit que c'était drôle. »" },
      { if: PORTEUR, text: "Tu remontes vers le quai marchand par les ruelles, en rasant les murs. La lettre est restée dans son maroquin. Tu emportes ce que tu n'avais pas ce matin : un sergent qui te connaît par ton numéro, un intendant qui a vu ta main, et vingt hommes à rubans verts à qui l'on donne, en ce moment, ton signalement à la lanterne." },
      { if: TOITS, text: "Tu remontes vers le quai marchand par les ruelles, en rasant les murs. Les trois lettres sont restées sous leur sanglier. Tu emportes ce que tu n'avais pas ce matin : un limier qui a ton odeur, et vingt hommes à rubans verts à qui l'on donne, en ce moment, ton signalement à la lanterne." },
    ],
    choices: [{ label: "Te fondre dans le monde du quai marchand", to: "K09j_dix", big: true }] },

  // ---------- ten o'clock ----------
  K09j_dix: { act: "III", title: "Dix heures à la Petite", place: "basse", ambiance: "eau",
    text: [
      { if: { all: [PORTEUR, { not: { has: "j:quai_brule" } }] }, text: "La dernière caisse descend. La cour est vide : il y reste de la paille, des clous tordus, et un chat qui inspecte. La Verdure vous remet en ligne le long du mur et vous paie lui-même, pièce à pièce, en billon, avec la mine d'un homme à qui l'on arrache des dents. « Trente sous. Trente. Neuf : vingt-cinq, tu sais pourquoi, ou tu ne le sais pas, et c'est vingt-cinq quand même. Demain, même heure, pour ceux qui ont encore un dos. »" },
      { if: { all: [BORD, { not: { has: "j:quai_brule" } }] }, text: "« Cent vingt ! » Simonnet le répète, et ferme l'écoutille lui-même, du pied. La *Gourmande* est assise jusqu'à sa ligne noire. Il prend la barre. Deux hommes du duc larguent, à l'avant, sans attendre son ordre, ce dont il prend note pour plus tard." },
      { if: { all: [TOITS, { not: { has: "j:quai_brule" } }] }, text: "Tu es redescendu{e} par la corderie. Le chanvre t'a laissé son odeur aux mains. Devant la chaîne, il y a foule, comme tous les soirs à cette heure : les gens de la ville basse viennent voir partir les barges de Monseigneur, par habitude, ainsi qu'on va voir rentrer les vaches." },
      { if: { not: { any: [PORTEUR, BORD, TOITS, BIEF] } }, text: "Tu restes à la chaîne, avec les badauds. On voit la cour éclairée, la file des porteurs, les caisses qui passent sur des épaules, une table où l'on coche. Vers neuf heures et demie, il sort sur le perron un bel homme en velours vert, avec un chien ; puis un homme en noir, qui monte dans une voiture sans armes. La foule dit *Monseigneur* pour le premier. Elle n'a pas de nom pour le second." },
      { if: BIEF, text: "Tu arrives sur le quai marchand rouge jusqu'aux oreilles, et personne ne se retourne : la Tannerie est à trois rues, on voit passer chaque soir des gens de cette couleur." },
      "La Petite sonne dix. Elle a un timbre mince, de cloche de couvent, que la Patiente, là-haut, couvre d'un seul de ses coups ; et pendant que les deux comptent ensemble, la grosse et la mince, les trois barges quittent le quai.",
      "Elles vont l'une derrière l'autre, sans voile, à la perche et au courant, si basses que l'eau lèche le plat-bord. Une lanterne à la proue, une à la poupe. Elles passent sous le pont des Trois-Chandelles, où trois petites flammes les regardent aller ; puis la rivière tourne, et il ne reste que le sillage, qui met longtemps à se défaire.",
      { if: { all: [BORD, { not: { has: "j:quai_brule" } }] }, text: "Tu as sauté au pilier de la Petite, à une toise, comme convenu. Simonnet a gardé les deux mains à la barre. Il regardait l'eau." },
      "Cent vingt caisses. Trois cent soixante par nuit, depuis le neuf. Sur le quai, les gens s'en retournent en bâillant. Un vieux marinier dit, à personne : « Il déménage bien, pour un homme qui reste. »",
      { after: "j:quai_brule", text: "Deux rubans verts longent la chaîne, une lanterne haute, et regardent les figures. Tu tournes la tienne vers l'eau. Demain, il faudra passer par les ponts d'en haut, ou par ceux d'en bas." },
    ],
    choices: [{ label: "La Patiente a encore de la lumière", fx: { gold: 1 }, hide: { any: [{ not: PORTEUR }, { has: "j:quai_brule" }] }, to: "K09j_soir_patiente", big: true },
      { label: "La Patiente a encore de la lumière", hide: { all: [PORTEUR, { not: { has: "j:quai_brule" } }] }, to: "K09j_soir_patiente", big: true }] },

  // ---------- night at the Patiente ----------
  K09j_soir_patiente: { act: "III", title: "La salle, après dix heures", backName: "la salle de la Patiente", place: "basse", ambiance: "ville", hub: true,
    text: [
      { first: true, text: "La salle de la Patiente est aux trois quarts vide. Les mariniers du duc sont sur l'eau ; il reste leurs bancs, leurs dés, et un chien qui attend l'un d'eux sous la table, avec la certitude des chiens. Dame Tiennette frotte son comptoir. Le feu est couvert." },
      { first: true, text: "Elle te regarde entrer, de la tête aux pieds, et fait l'inventaire sans rien demander." },
      { first: true, if: BIEF, text: "« De la garance. Tu as pris le bief. Il n'y a que les enfants de la Guigne et les rats pour prendre le bief. » Elle te jette un torchon. « Frotte-toi. Ça ne partira pas, mais ça t'occupera. »" },
      { first: true, after: "j:quai_brule", text: "« On t'a couru après. » Elle le voit à ta façon de tenir la porte. « Il est venu deux rubans verts, voilà un quart d'heure, demander si je logeais une figure. J'ai dit que je logeais quarante figures et que je ne les regardais qu'au moment de payer. » Elle rince son torchon. « Tu coucheras dans la soupente aux cordages. On y monte par la cuisine, et l'on n'y a jamais cherché que des cordages. »" },
      { first: true, if: { not: { has: "j:quai_brule" } }, text: "« Tu coucheras dans la soupente aux cordages, à côté de celle de ma cousine. Deux sous, la chandelle en sus. Elle a une lucarne : si la Tour t'empêche de dormir, tu la tournes du côté du mur. Toi, je veux dire. La Tour, on n'a jamais pu. »" },
      { again: true, text: "La salle vide, le feu couvert. Dame Tiennette frotte." },
    ],
    choices: [
      { label: "Une soupe, et ce qu'elle voudra bien dire", hide: { seen: "K09j_tiennette_soir" }, to: "K09j_tiennette_soir" },
      { label: "Frapper à la soupente de Perrine", hide: { any: [{ seen: "K09j_perrine_soir" }, { not: { seen: "K09j_perrine_fin" } }] }, to: "K09j_perrine_soir" },
      { label: "Monter, avec la chandelle", to: "K09j_soupente", big: true },
    ] },

  K09j_tiennette_soir: { act: "III", title: "La soupe de dix heures", place: "basse", ambiance: "ville",
    text: [
      "C'est une soupe au lard et aux fèves, où la cuiller tient debout. Dame Tiennette te regarde manger, les bras croisés sur son comptoir, avec le plaisir sévère des femmes qui nourrissent.",
      "« Trente ans que je vois partir ces barges. Le vieux duc les envoyait pleines de vin et les recevait pleines de sel. Celui-ci les envoie pleines, et elles reviennent vides. Un homme qui vide sa maison, ou bien il a des dettes, ou bien il a une meilleure maison ailleurs. » Elle essuie un pichet. « Il n'a pas de dettes. »",
      "« Et l'autre, le noir, qui monte dans sa voiture. Je l'ai connu apprenti. Il venait ici, il y a douze ans, manger pour deux liards, au bout de cette table, avec un livre. Il ne parlait à personne. Un soir, mon défunt lui a demandé l'heure, pour rire, parce qu'on a la Petite à la fenêtre. Il a répondu : *Laquelle ?* » Elle repose le pichet. « J'ai servi des ivrognes, des assassins, et un évêque. C'est le seul client qui m'ait fait froid dans le dos avec un mot. »",
      { after: "j:oui_marche", text: "Tu manges ta soupe. Tu as dans l'oreille la même voix, dix ans plus vieille, qui ne compte que le sable." },
      { after: "j:preuve_oderic", text: "Tu sens contre ta peau ce que tu rapportes du quai. Dame Tiennette a la délicatesse de regarder ailleurs toutes les fois que tu y portes la main." },
    ],
    choices: [{ back: "K09j_soir_patiente" }] },

  K09j_perrine_soir: { act: "III", title: "Vingt-trois almanachs", place: "basse", ambiance: "ville",
    text: [
      { after: "j:perrine_sait_tout", text: "Elle ouvre avant que tu aies frappé deux fois. Elle a défait sa hotte sur la paillasse, et elle a fait trois tas : ce qui se vend demain, ce qui se donne, ce qui s'emporte. Le troisième tas tient dans un mouchoir." },
      { after: "j:perrine_sait_tout", text: "« J'ai parlé à Tiennette. Je lui ai dit que j'avais fait un rêve, parce qu'elle croit aux rêves et qu'elle ne croirait pas le reste. Elle a ri. Puis elle a demandé quel jour. Puis elle a cessé de rire, et elle a dit qu'elle avait justement une lessive à porter chez sa belle-sœur, hors les murs, et que le vingt et un lui irait aussi bien qu'un autre. » Perrine noue le mouchoir. « Voilà comment on sauve les gens, à ce qu'il paraît. On leur trouve une lessive. » Elle te regarde. « Tu en as quarante mille. Tu n'auras pas assez de belles-sœurs. »" },
      { if: { all: [{ has: "monde:perrine_avertie" }, { not: { has: "j:perrine_sait_tout" } }] }, text: "Elle ouvre. Elle a défait sa hotte, et elle recompte, mais d'une autre façon que d'habitude : elle met à part ce qui tient dans un mouchoir. « La deuxième borne. J'y pense depuis tantôt. J'ai dit à Tiennette que j'avais fait un rêve. Elle viendra. » Elle te tend un ruban rouge, un des bons. « Tiens. Ça ne paie pas le motif. Ça marque la page. »" },
      { after: "j:perrine_tue", text: "Tu frappes. Derrière la porte, une voix compte, sans s'interrompre : « Dix-sept. Dix-huit. » Tu attends jusqu'à vingt-trois. Elle recommence à un. Tu redescends." },
      { after: "j:quai_brule", before: "j:perrine_tue", text: "Elle voit ta manche, ta figure, ta façon de fermer la porte. « Toi, tu as fait une bêtise, et tu l'as faite sans moi. Je te loue ma hotte demain, si tu dois sortir : dessous, on n'a plus de figure, on a des jambes. Quatre sous. Deux, parce que c'est toi. »" },
    ],
    choices: [{ back: "K09j_soir_patiente" }] },

  K09j_soupente: { act: "III", title: "La soupente aux cordages", place: "basse", ambiance: "ville",
    text: [
      "On y monte par une échelle, derrière le four. Des glènes de chanvre, lovées, jusqu'aux chevrons ; une paillasse sur un rouleau de grelin ; une lucarne, à hauteur de coude, que la Tour remplit d'un bord à l'autre. On a éclairé ses cadrans par derrière, à la lampe, selon l'usage : elle te regarde de son œil rond, jaune, où la grande aiguille fait son saut.",
      "Tu colles ta chandelle sur une solive, avec trois gouttes de suif. Elle est neuve, haute d'un empan. Tu t'allonges. Le chanvre sent la poussière et le soleil des champs où il a poussé.",
      "La lune est à gauche de la Tour, à une main de la lanterne. En bas, le veilleur du quai marche, d'un pas, d'un pas, et son falot promène un rond sur le plafond de la soupente. Tu as les membres rompus et la tête claire, ce qui est le contraire de ce qu'il faut pour dormir.",
      "Tu attends onze heures. Autant les compter.",
    ],
    choices: [{ label: "Compter", fx: { flag: "j:vu_hoquet", ep: ["histoire", 800] }, to: "K09j_hoquet", big: true }] },

  K09j_hoquet: { act: "III", title: "Entre le huitième et le neuvième", place: "basse", ambiance: "ville",
    text: [
      "Le premier coup tombe. La vitre de la lucarne le répète, la solive le rend à ton dos. Deux. Trois. Le veilleur, en bas, s'est arrêté pour crier l'heure quand elle sera dite ; son falot fait un rond immobile au plafond. Quatre. Cinq. Six. La flamme de ta chandelle penche à chaque coup, d'un rien, du côté opposé à la Tour. Sept.",
      "Huit.",
      "Neuf.",
      "Tu as cessé de respirer, sans savoir pourquoi. Dix. Onze. « Onze heures ! » chante le veilleur. « Tout est tranquille ! » Son pas repart. La ville basse se retourne dans son lit.",
      "Tu te dresses sur un coude. Huit, puis neuf, à l'intervalle des autres : ton corps en est sûr, de cette sûreté qu'on a d'avoir trouvé toutes les marches d'un escalier. Tu le jurerais devant un juge.",
      "Mais la chandelle a perdu un doigt. Elle était haute d'un empan, tu l'as collée toi-même ; elle a maintenant, le long de sa mèche, une coulée de suif longue comme un ongle, figée, que tu n'as pas vue se faire. Et le rond du falot, au plafond, a changé de chevron.",
      "Tu vas à la lucarne. La lune a passé la Tour. Elle était à gauche de la lanterne, à une main. Elle est à droite, de deux doigts. La lune met un psaume à faire ce chemin-là, un psaume entier, chanté sans se presser.",
      "Entre le huitième coup et le neuvième, quelqu'un a retenu quelque chose, là-haut, le temps d'un psaume, puis l'a lâché. La chandelle a brûlé, la lune a marché. Toi, tu es resté{e} au huitième, avec le veilleur, qui a repris son cri où il le tenait, avec les quarante mille qui l'avaient entendu. Vous êtes repartis ensemble, au neuvième, comme une phrase après une virgule. Tu étais dedans. Tu l'apprends par un bout de suif.",
      { after: "j:sait_voiture", text: "Quatre nuits sur six, a dit la Guigne. La colline, la rue du Cadran, la porte basse de la Tour. Et les chandelles de la niche, qui ont d'un coup un doigt de moins." },
      { after: "j:oui_marche", text: "*J'ai de quoi le caler.* Il s'exerce. Il prend la mesure de sa main." },
      "Sur le cadran, la grande aiguille fait son saut, tranquille. Elle donne onze heures et un rien. Au ciel, il est onze heures et un psaume.",
      { after: "j:vu_meridienne", text: "Il y a, dans le pavé de Saint-Gnomon-le-Vieux, une ligne de cuivre où le soleil vient dire midi sans consulter personne. Demain, la Patiente et cette ligne auront un psaume de désaccord, à moins que quelqu'un, d'ici l'aube, ne pousse quatre paires d'aiguilles." },
    ],
    choices: [{ label: "Redescendre l'échelle, le Cahier sous la chemise", to: "K09j_minuit", big: true }] },

  K09j_minuit: { act: "III", title: "Le cadran du port, à minuit", place: "basse", ambiance: "eau",
    text: [
      "Le quai est à toi. Les gabares dorment sur trois rangs, avec leurs chiens. L'allumeur a fini sa tournée, et ses lanternes font, le long de l'eau, une file de petits soleils dont chacun éclaire un pavé.",
      "Le cadran du port a trois marches. Celle du milieu, du côté de la rivière, porte un anneau de fer où l'on amarre les bachots, et la pierre qui tient l'anneau a du jeu : les amarres l'ont travaillée cent ans. Tu la fais venir avec ton couteau. Dessous, c'est du sable de rivière, sec, propre, où une main entre jusqu'au poignet.",
      { after: "j:quai_brule", text: "Une lanterne passe, au bout du quai, à hauteur d'homme. Tu te couches contre la marche. Elle s'éloigne. Les rubans verts ont la patience courte : c'est l'heure où l'on boit." },
      "La Tour, au-dessus des toits, sonne minuit. Tu comptes. Douze, d'affilée, pleins, sans une virgule. Elle les donne encore.",
      "Tu ouvres le Cahier sur ton genou, à la lueur d'un de ces petits soleils.",
    ],
    choices: [{ label: "Lire, écrire, et creuser", to: "B09", big: true }] },
});

module.exports = {
  passages: P,
  extras: {
    people: {
      oderic: { name: "Monseigneur Oderic", f: false, aka: ["Monseigneur Oderic", "Oderic", "le duc de Hautgué", "Monseigneur de Hautgué"], face: { age: "mur", skin: "hale", hair: "gris", coif: "milong", beard: "barbe", eyes: "tombants", iris: "brun", nose: "busque", lips: "pleines", shape: "carre" },
        aspect: { allure: "grand, beau, le teint des gens à cheval", habits: "velours vert sans un galon", signe: "un limier blanc et feu sur ses talons" }, qui: "Duc de Hautgué, beau-frère de la Reine.", desc: "Duc de Hautgué, grand veneur d'Aurime, beau-frère de la Reine. Il sait le nom de ses sergents et l'état de leurs jambes. Ses barges descendent pleines et remontent vides." },
      loyseau: { name: "Monsieur Loyseau", f: false, aka: ["monsieur Loyseau", "Loyseau"], face: { age: "mur", skin: "clair", hair: "chatain", coif: "degarni", beard: "sans", eyes: "ronds", iris: "brun", nose: "retrousse", lips: "fines", shape: "rond" },
        aspect: { allure: "petit, rond, toujours en nage", habits: "un habit puce, les doigts tachés d'encre", signe: "recoche ce qu'il vient de cocher" }, qui: "Intendant du duc de Hautgué.", desc: "Intendant de Monseigneur. Il tient le registre des barges, et un portefeuille de maroquin vert sur lequel il pose la main quand on passe." },
      simonnet: { name: "Simonnet", f: false, aka: ["Simonnet"], face: { age: "adulte", skin: "hale", hair: "roux", coif: "court", beard: "barbe", eyes: "amande", iris: "clair", nose: "busque", lips: "fines", shape: "allonge" },
        aspect: { allure: "grand, roux, lent à parler", habits: "un tricot de marinier", signe: "regarde l'eau quand on lui parle" }, qui: "Pilote de la première barge du duc.", desc: "Pilote de la Gourmande, première barge de Monseigneur. Il sait lire, juste assez. Il a mis sa femme et ses petits à la deuxième écluse, pour le bon air." },
    },
    items: {
      lettre_oderic: { name: "Lettre à Gaucelin", kind: "divers", keep: true, desc: "Une feuille pliée, sans cachet, d'une écriture haute et pressée, datée du dix-huit juin 541. Elle parle d'un dais, d'un Conseil, de l'empêchement de la Reine et d'une chasse à la Louvière. Elle finit par : Brûlez ceci." },
      epreuve_sceau: { name: "Épreuve d'un grand sceau", kind: "divers", keep: true, desc: "Une galette de cire, grande comme la paume. Un homme à cheval sous un dais, et autour : ODERIC, PAR LA GRÂCE DE DIEU, RÉGENT D'AURIME. Le graveur l'a livré le douze juin 541." },
    },
    enemies: {
      homme_duc: { name: "Ruban vert de Hautgué", look: "humain", pv: 12, att: 30, def: 14, dmg: 4, desc: "Un homme de la maison du duc : large, nourri, une canne plombée à la main et un ruban vert au chapeau. Frappe en homme payé au mois." },
    },
  },
};
