// Le Douzième Coup · chapter 13, the one who passes, second half (act IV, 21 June 541, from dawn to a quarter to
// eleven). Dawn in the lower town (hub `K13j_aube`): the duke's five o'clock mass and the paper nailed under the
// tariff (`monde:oderic_affiche`), Perrine's last article (`j:perrine_adieu_vrai` | `j:perrine_adieu_tu`), the
// rehearsal under the Trois-Chandelles, Ansel's bandage rue de la Poulie, Tiphaine back from the Droit. Outside the
// walls (hub `K13j_foire_aube`): Girard and the mare (`monde:girard_jure` with `monde:su:girard`), Josse kept in the
// cart (`monde:noyers_sortis`), the farewell to Line (`j:line_consigne`, `j:line_promesse`, item `vis_line` +
// `monde:vis_line`), the Mystère going up. Then the hill (hub `K13j_colline`): the Grand Maître back with his
// cobwebs, the second key of the Cage if it was not given at night, Josquin's post (`monde:josquin_debout` |
// `j:josquin_porte`), the three keys signed for at nine (`j:vu_signature`), the nine leaving at ten, Aymon, the
// square (hub `K13j_parvis_matin`): Hardouin, the Queen going up, the twelfth door, the rungs. The half past ten,
// then the iron door and B13.
var P = {};
var PERRINE = { present: "perrine" };
var JOSQUIN = { present: "josquin" };
var PREUVE = { any: [{ has: "j:preuve_oderic" }, { item: "memoire_graveur" }] };
var CONNAIT_ANSEL = { any: [{ has: "monde:su:ansel" }, { has: "j:ansel_parle" }] };
var DIXIEME = { all: [{ has: "j:aubespin_apprenti" }, { not: { has: "j:aubespin_trahi" } }] };
var ATTELE = { has: "monde:girard_attele" };
var SU_GIRARD = { all: [{ has: "monde:su:girard" }, { has: "monde:girard_attele" }] };
var SORTIS = { has: "monde:noyers_sortis" };
var PIECE = { has: "monde:florizel_piece" };

Object.assign(P, {
  K13j_tantot: { act: "IV", title: "Le jour des autres", place: "basse", ambiance: "temple", fx: { leave: "josquin" },
    text: [
      "Tu refermes le Cahier. La pièce de lune a quitté la page ; elle grimpe à un pilier, et elle y pâlit. Par le trou de la voûte, le ciel a pris la couleur d'une lame qu'on vient d'essuyer.",
      "Les pèlerins s'éveillent par familles. On secoue la paille des jupes, on cherche un soulier, on mouche un enfant avec le coin d'un tablier. Le bedeau a rouvert un œil : il compte ses clefs sur son ventre, les trouve toutes, et se rendort jusqu'à la première cloche.",
      "Elle vient. Quatre coups, à la Tour, larges, posés l'un après l'autre sur la ville comme des assiettes sur une nappe. Toute l'église lève la tête pour les compter, et sourit au quatrième : c'est le jour.",
      "Ils ont attendu ce jour toute une année, certains toute une vie. Une vieille, près de toi, noue son bonnet du dimanche avec des doigts qui tremblent de joie. Elle te voit la regarder. « Soixante-deux ans que je veux l'entendre de près, dit-elle. Mon homme disait que ça vous entre par la poitrine. »",
      { with: "josquin", after: "j:coudrier_libre", text: "Josquin est debout depuis longtemps. Il a plié sa paille. « Il sera rentré. Il ne sait pas où est le sucre, ni comment on rallume son feu : il a toujours cru que cela se faisait seul. » Il te salue, à la manière de la colline, la main sur la couture. « Je vous verrai là-haut. » Il monte les six marches deux par deux." },
      { with: "josquin", before: "j:coudrier_libre", text: "Josquin est debout depuis longtemps. Il a plié sa paille. « L'arche du moulin, derrière l'hôtel du duc. Quarante briques, cent ans d'araignées. Je sais le chemin : vous me l'avez dit trois fois, cette nuit, sans vous en apercevoir. » Il serre sa ceinture d'un cran. « J'irai en demandant pardon. C'est ma manière, et les geôliers s'en méfient moins. » Il monte les six marches deux par deux." },
      "Tu sors derrière eux. Le parvis de la vieille église est au niveau des quais, et les quais sont déjà pleins de monde.",
    ],
    choices: [{ label: "Monter les six marches", to: "K13j_aube", big: true }] },

  K13j_aube: { act: "IV", title: "Le matin du Grand Midi", place: "basse", ambiance: "ville", hub: true, backName: "le quai",
    text: [
      { first: true, text: "Méridane s'est levée avant son soleil. On a pendu des draps aux fenêtres, des branches de buis aux portes, et sur chaque pont une guirlande de papier doré que le vent du canal fait bruire. Les boulangers vendent sur le seuil. Les barbiers rasent dans la rue, à la file, et chaque menton qui se relève regarde la Tour." },
      { first: true, text: "Elle est rose, là-haut, d'un rose de coquille, avec son grand œil qui commence à luire. Au-dessous d'elle, toute une ville se fait belle pour venir se ranger à ses pieds. Tu es seul{e}, dans ces quarante mille, à savoir combien de temps durera la toilette." },
      { first: true, text: "Il te reste la matinée. On monte à huit heures, à portes ouvertes, avec la foule : après cela, les rues du bas seront vides, et ce qui n'y aura pas été dit ne le sera plus." },
      { again: true, text: "Les quais, les draps aux fenêtres, les barbiers en plein vent. La Tour a quitté son rose pour un blanc de craie." },
      { again: true, with: "perrine", text: "Perrine marche à ton côté, sa hotte au dos. Elle regarde les choses une à une, comme on fait l'inventaire d'une chambre qu'on quitte." },
    ],
    choices: [
      { label: "La messe de cinq heures, où Monseigneur veut être vu", hide: { seen: "K13j_messe" }, to: "K13j_messe" },
      { label: "Réveiller Perrine, qui a dit : pas avant dix heures", hide: { any: [{ not: PERRINE }, { seen: "K13j_perrine_aube" }] }, to: "K13j_perrine_aube" },
      { label: "À la Patiente, où Perrine a sa chambre", hide: { any: [PERRINE, { seen: "K13j_perrine_aube" }] }, to: "K13j_perrine_aube" },
      { label: "Le pont des Trois-Chandelles", hide: { seen: "K13j_pont_aube" }, to: "K13j_pont_aube" },
      { label: "La rue de la Poulie, sous l'enseigne du Dé", hide: { seen: "K13j_poulie_aube" }, to: "K13j_poulie_aube" },
      { label: "La rue des Aiguilliers, chez le vieux Gobin", hide: { any: [{ not: { has: "monde:droit_grave" } }, { seen: "K13j_gobin_aube" }] }, to: "K13j_gobin_aube" },
      { label: "Hors les murs : le pré de la Foire, avant qu'il se vide", to: "K13j_foire_aube" },
      { label: "Huit heures : monter avec la ville", to: "K13j_montee", big: true },
    ] },

  K13j_messe: { act: "IV", title: "La messe de cinq heures", place: "basse", ambiance: "temple", fx: { ep: ["histoire", 300] },
    text: [
      "On la dit à Saint-Gnomon-le-Vieux, paroisse de l'hôtel de Hautgué, pour les gens qui partent tôt. D'ordinaire, ce sont des mariniers. Ce matin, il y a treize paires de bottes au premier rang, treize chapeaux à plume posés sur le banc, et, dans le bas-côté, vingt chiens couplés qui bâillent sous la main d'un valet.",
      "Monseigneur de Hautgué entend la messe à genoux, très droit, les mains jointes à hauteur du menton. Il prie comme il fait toute chose : de façon qu'on le voie. Le curé, qui n'a jamais eu un duc à cinq heures du matin, se trompe deux fois dans l'épître, et recommence, et Monseigneur l'attend avec une patience de grand seigneur.",
      "À l'offrande, il se lève, et il met dans le plat une pièce d'or, de haut, pour qu'elle sonne. Tout le banc des mariniers a tourné la tête. Trois cents personnes pourront jurer, pendant soixante ans, que le duc Oderic était à la messe du Grand Midi, qu'il a donné un écu à la couronne, et qu'il est parti pour ses bois avant six heures.",
      "Il sort le premier. Sur le parvis, il prend ses gants à un page, et il dit, assez haut : « Messieurs, la Louvière est à trois lieues, et le cerf n'attend pas la Reine. Nous aurons les cloches dans le dos. » On rit. Les treize montent à cheval. Le limier blanc et feu passe contre ta jambe, te flaire, et suit son maître.",
      "Tu les regardes prendre la rue Droite, au pas, vers la porte du Levant. Ils ont l'air de ce qu'ils sont : des hommes qui vont chasser. Le plus beau mensonge du royaume a des éperons, et il s'éloigne dans une odeur de cuir neuf.",
      { if: PREUVE, text: "L'église se vide. Sur le vantail, à hauteur d'homme, le bedeau a cloué le tarif des messes, et, dessous, l'ordre de la procession. Il reste de la place sur le bois, et quatre vieux clous." },
    ],
    choices: [
      { label: "Clouer là ce que tu sais du sceau d'argent", hide: { any: [{ not: PREUVE }, { has: "monde:oderic_affiche" }] }, fx: { flag: "monde:oderic_affiche", ep: ["histoire", 600] }, to: "K13j_affiche" },
      { back: "K13j_aube" },
    ] },

  K13j_affiche: { act: "IV", title: "Sous le tarif des messes", place: "basse", ambiance: "temple",
    text: [
      "Tu n'as pas de marteau. Tu prends un des vieux clous, tu le redresses contre la pierre, et tu l'enfonces du talon de ton soulier, à travers une feuille de ton écriture. Tu y as mis peu de mots, gros, comme en met le crieur : *Un sceau d'argent a été gravé le 12 juin. Il porte : ODERIC RÉGENT D'AURIME. La Reine vit. Demandez pour quel jour on l'a commandé.*",
      "Le bedeau dort encore. Une marchande de cierges, qui range ses paquets, lit la feuille en remuant les lèvres ; elle la relit, appelle sa voisine. À la troisième lectrice, tu t'éloignes : une affiche n'a plus besoin de son auteur.",
      "Tu sais ce qu'elle vaut pour aujourd'hui. À midi, ces femmes seront là-haut, la bouche ouverte sur un chiffre, et le duc dans ses fougères. Elle vaut pour plus tard. Un papier cloué sur du chêne, dans une église où personne ne viendra plus le décrocher, a le temps pour lui : il sera encore à cette porte quand on cherchera qui avait intérêt à ce que la cloche se taise.",
      "Tu te retournes une fois, du coin du quai. Elles sont sept devant le vantail, et l'une d'elles épelle pour les autres.",
    ],
    choices: [{ back: "K13j_aube" }] },

  K13j_perrine_aube: { act: "IV", title: "Pas avant dix heures", place: "basse", ambiance: "ville",
    text: [
      { with: "perrine", text: "Elle dort sur la paille des pèlerins, la hotte sous la tête, une main fermée sur la bretelle. Tu lui touches l'épaule. Elle ouvre un œil, regarde le jour gris dans le trou de la voûte, puis toi." },
      { with: "perrine", text: "« Il n'est pas dix heures. » Sa voix sort enrouée. « J'avais dit dix. J'avais dit : pas avant. Tu n'as jamais tenu un marché de ta vie. » Elle s'assoit, tire sur ses bas, ôte de ses cheveux un brin de paille qu'elle considère. « Bon. Tu ne m'aurais pas réveillée pour rien. Tu réveilles les gens pour leur dire adieu ou pour leur emprunter de l'argent, et tu ne m'as jamais rien emprunté. »" },
      { if: { not: PERRINE }, text: "Dame Tiennette a mis toute sa salle dehors : les bancs sur le quai, les nappes sur les bancs, et quarante bols qui fument. « Là-haut, sous le toit ! crie-t-elle sans se retourner. Et dites-lui que c'est la troisième fois que je l'appelle ! »" },
      { if: { not: PERRINE }, text: "Perrine est assise sur son lit, tout habillée, la hotte bouclée entre les genoux. Elle a rangé la chambre. Elle te regarde entrer. « Je t'attends depuis les quatre coups. Je me suis dit : s'il a quelque chose à me dire, ce sera ce matin, et s'il n'a rien à dire, il viendra quand même, pour voir si j'ai compris toute seule. »" },
      { after: "monde:perrine_sortie", text: "Elle se lève. « Le halage. Le septième peuplier. Avant onze heures. » Elle récite cela comme un prix. « J'ai compté cette nuit, en dormant : d'ici, au pas de hotte, il faut une heure et un quart. Je partirai à huit, pour avoir de la marge. Une colporteuse qui arrive juste, c'est une colporteuse qui a perdu sa place. »" },
      { after: "monde:perrine_debout", before: "monde:perrine_sortie", text: "Elle se lève. Elle a deux boulettes de cire dans son mouchoir, qu'elle te montre, et un bandeau de drap rouge, taillé dans son étal. « Je serai sur le quai, devant la Patiente, le dos au mur. J'ai choisi le mur : je veux voir venir. » Elle renoue le mouchoir. « Tiennette me prendra pour une folle jusqu'à midi. Après, elle ne me prendra plus pour rien. »" },
      { before: ["monde:perrine_sortie", "monde:perrine_debout"], text: "Elle se lève. « Tu ne m'as dit ni de partir ni de rester. J'ai attendu que tu choisisses ; j'ai fini par voir que tu me laissais la marchandise. » Elle passe les bretelles. « Alors je monte. Je n'ai pas fait neuf jours de route pour entendre la cloche du fond d'un pré. Je me mettrai au bord, du côté des rues qui descendent : c'est là que se tiennent les gens qui ont une hotte. »" },
    ],
    choices: [{ label: "Lui dire où tu seras, toi, à midi", fx: { flag: "j:perrine_adieu_vrai", conf: { perrine: 10 }, ep: ["perso", 600] }, to: "K13j_perrine_adieu" },
      { label: "« À ce soir. » Et la laisser le croire", fx: { flag: "j:perrine_adieu_tu" }, to: "K13j_perrine_adieu" }] },

  K13j_perrine_adieu: { act: "IV", title: "L'article dernier", place: "basse", ambiance: "ville", fx: { leave: "perrine" },
    text: [
      { after: "j:perrine_adieu_vrai", text: "Tu le lui dis. La Tour, la Cage, la cloche. Que tu seras dessous quand elle se taira, parce qu'il faut que quelqu'un y soit resté. Que cela te prendra comme les autres, et pour aussi longtemps." },
      { after: "j:perrine_adieu_vrai", text: "Elle t'écoute jusqu'au bout sans t'interrompre, ce qui ne lui était pas arrivé depuis Arvoise. Puis elle fait une chose que tu ne lui as jamais vu faire : elle pose sa hotte. Elle la pose par terre, debout, avec soin, et elle te prend la figure dans ses deux mains, des mains sèches, qui sentent l'encre d'almanach." },
      { after: "j:perrine_adieu_vrai", text: "« Mon père est descendu dans la Thiorne pour une corde qui ne valait pas dix sous. On m'a dit : il a fait son métier. J'ai mis deux ans à leur pardonner cette phrase. » Elle te lâche. « Je te ferai grâce de celle-là. Je te dirai l'article dernier de la règle. Je le gardais, parce qu'il ne sert qu'une fois. *On ne quitte pas un associé : on prend un autre chemin pour la même foire.* »" },
      { after: "j:perrine_adieu_tu", text: "« À ce soir », dis-tu. Elle te regarde. Elle a vendu des almanachs à des gens qui juraient ne pas savoir lire ; elle sait ce que pèse une phrase qu'on tend trop vite." },
      { after: "j:perrine_adieu_tu", text: "« À ce soir. » Elle le répète, lentement, en te le rendant. « Je prends. C'est de la fausse monnaie, et je la prends quand même : il y a des jours où l'on n'a pas le cœur de mordre les pièces. » Elle rajuste une bretelle. « Je te dirai seulement l'article dernier de la règle, pour que tu l'aies sur toi. *On ne quitte pas un associé : on prend un autre chemin pour la même foire.* »" },
      "Elle reprend sa hotte, la charge d'un coup de reins. De sa poche, elle tire l'almanach de l'an 541, le dernier de sa pile, corné, et elle te le met dans la chemise, à plat, contre la peau. « Il y a le Grand Midi dedans, page de juin, avec une gravure. La Tour est mal dessinée. Tu me diras si c'était ressemblant. »",
      { after: "monde:perrine_sortie", text: "Elle s'en va par le quai, vers le bassin et les peupliers, de son pas égal, sans se retourner : elle t'a dit un jour qu'on reconnaît les mauvais payeurs à ce qu'ils se retournent. Au pont, pourtant, la hotte s'arrête, le temps de compter trois, puis elle repart." },
      { before: "monde:perrine_sortie", text: "Elle s'en va par le quai, de son pas égal, sans se retourner : elle t'a dit un jour qu'on reconnaît les mauvais payeurs à ce qu'ils se retournent. Au coin de la Patiente, pourtant, la hotte s'arrête, le temps de compter trois, puis elle disparaît." },
    ],
    choices: [{ label: "Rester avec l'almanach contre la peau", fx: { item: "almanach_541" }, to: "K13j_aube" }] },

  K13j_pont_aube: { act: "IV", title: "La répétition", place: "basse", ambiance: "eau",
    text: [
      { after: "monde:brindille_sortie", text: "Sous l'arche, ils sont trente, rangés par taille, et la Guigne passe devant eux comme un sergent. Chacun a ses deux noisettes de cire dans le creux de la main, et un chiffon autour du cou, prêt à remonter sur les oreilles. Elle en fait l'essai sur le plus petit : elle lui bouche les oreilles, se place derrière lui, et hurle un mot que tu ne répéteras pas. L'enfant ne bronche pas. « Bon. Au suivant. »" },
      { after: "monde:brindille_sortie", text: "« On la met quand les aiguilles se touchent presque, dit-elle, et on l'ôte quand c'est moi qui l'ôte. Celui qui l'ôte avant, je le laisse où il sera. » Elle te voit. Elle vient à toi, les poings sur les hanches. « J'ai pensé à ton affaire de portes ouvertes. Toute la nuit. » Elle crache. « On prendra du pain. Du pain, et des souliers pour ceux qui n'en ont pas. Le reste, ça porterait malheur : on ne vole pas des gens qui ne peuvent pas courir après. »" },
      { after: "monde:brindille_sortie", text: "Brindille est assise sur la paillasse, les jambes pendantes. On lui a fait un siège avec deux ceintures, sur le dos du grand Colin, et elle l'essaie en tapant des talons." },
      { before: "monde:brindille_sortie", text: "Sous l'arche, ils se partagent la ville. La Guigne trace dans la vase, avec un os, le plan de la place du Palais, et elle y pique des cailloux : « Toi, la fontaine. Toi, les marches de Saint-Aure. Les bourses sont à droite chez les bourgeois, à gauche chez les gauchers, et dans le corsage chez les fermières : celles-là, on les laisse, on n'est pas des sauvages. » C'est le plus beau jour de l'année. Quarante mille personnes vont regarder en l'air pendant une heure." },
      { before: "monde:brindille_sortie", text: "Elle te voit, et elle couvre son plan du pied. « Tu montes aussi ? Tiens ta poche. Je réponds de mes trente ; je ne réponds pas de ceux de la Halle. »" },
      { before: "monde:brindille_sortie", text: "Brindille reste, avec un vieux qui tousse. Elle te fait bonjour de la main, sans se lever." },
      { after: "monde:brindille_ecorce", text: "La petite a une cuiller de bois pendue au cou, par une ficelle. Son frère te la montre du menton. « Deuxième cuillerée ce matin. Elle a dit que c'était toujours aussi mauvais. Elle l'a dit fort. » Il a la figure d'un garçon qui n'avait pas entendu sa sœur parler fort depuis l'hiver." },
    ],
    choices: [{ back: "K13j_aube" }] },

  K13j_poulie_aube: { act: "IV", title: "Le bandeau", place: "basse", ambiance: "ville",
    text: [
      "La rue de la Poulie est une rue de fileuses, étroite, où les maisons se touchent du front. Sous l'enseigne du Dé, la porte est ouverte, et une femme maigre, à genoux sur le seuil, boutonne la veste d'un garçon qui regarde par-dessus sa tête.",
      "Il a treize ans, des poignets qui dépassent, et, au gousset, une chaîne de montre toute neuve qu'il touche sans cesse, pour s'assurer du poids. Il porte sous le bras un paquet long, roulé dans de la serge verte. C'est un maillet. On le lui a remis hier soir, avec une consigne, et il a dormi dessus.",
      "« Tu mangeras ? — On nous donne à dix heures. — Tu diras merci au maître ? — Mère. » Elle lui passe autour du cou un bandeau de drap gris, plié, et elle le lui arrange comme une cravate. « C'est pour le bruit, dit-il, avec importance. Là où nous serons, la cloche vous tue un homme. Monsieur Fourchon nous met de la cire, et ceci par-dessus. Nous serons neuf à ne rien entendre, dans toute la ville. » Il en est fier comme d'un galon.",
      "Elle l'embrasse sur le front, de force. Il s'essuie. Il s'en va par le milieu de la rue, le maillet sous le bras, la tête haute, et les fileuses, aux fenêtres, se le montrent : *le petit Hurel, qui est de la Tour.*",
      { after: "j:ansel_travers", text: "À ta hauteur, il ralentit. Sans un salut, il incline le paquet de serge, d'un quart, de façon que toi seul{e} le voies, et il le redresse. Puis il presse le pas." },
      { after: "j:ansel_mere", text: "À ta hauteur, il ralentit, et il rougit jusqu'aux cheveux : tu sais qu'il a pleuré, avant-hier, et il sait que tu le sais. Il te fait un signe de tête, d'homme à homme, et il presse le pas." },
      { after: "monde:hurel_debout", text: "La veuve Hurel est restée sur son seuil. Quand il a tourné le coin, elle ouvre la main : elle y a deux noisettes de cire, tièdes d'avoir été tenues. Elle te regarde par-dessus la rue. Elle a la bouche serrée des gens qui ont décidé de croire une chose incroyable, parce que l'autre parti coûtait trop cher." },
      { after: "monde:hurel_lettre", before: "monde:hurel_debout", text: "La veuve Hurel est restée sur son seuil. Elle a dans son corsage un papier jauni, plié en quatre, dont le coin dépasse. Elle y porte la main, sans le tirer, comme on touche une médaille." },
      { before: ["monde:hurel_debout", "monde:hurel_lettre"], text: "La veuve Hurel est restée sur son seuil, jusqu'à ce qu'il ait tourné le coin. Puis elle rentre, et tu l'entends, derrière le volet, remettre en marche son rouet." },
    ],
    choices: [{ back: "K13j_aube" }] },

  K13j_gobin_aube: { act: "IV", title: "Deux cent douze mots", place: "basse", ambiance: "ville",
    text: [
      "La boutique du vieux Gobin a ses volets mi-clos. Il te fait signe de te taire, d'un doigt en travers d'une bouche sans dents, et il te montre le banc.",
      "Tiphaine y dort, assise, la tête contre le mur. Elle a de la poussière de pierre jusque dans les cils, les genoux de sa robe blancs comme ceux d'un carrier, et les deux mains ouvertes sur ses cuisses, les paumes en l'air, pleines d'ampoules. Le burin est par terre. Il a perdu sa pointe : c'est à présent un petit cylindre d'acier, rond du bout, bon à jeter.",
      "« Rentrée aux quatre coups, souffle le vieillard. Elle a dit : *deux cent douze mots, maître, et je n'en ai pas changé un.* Puis elle s'est assise, et elle dort depuis. » Il la regarde avec une espèce de respect bourru. « Soixante ans que je taille des pignons. Je n'ai jamais vu personne user un burin d'Arvoise en une nuit. Sur quoi a-t-elle écrit, cette fille ? Sur la porte de l'enfer ? »",
      { after: "monde:droit_coin", text: "Sur l'établi, près du pignon fini, il y a un bout de papier, d'une écriture de réfectoire. *Le chapitre est au mur, à hauteur d'yeux. Dessous, à part, en plus gros : le coin, le petit bout, la gauche. J'ai mis la date. Je n'ai pas mis mon nom : le Livre ne signe pas.*" },
      { before: "monde:droit_coin", text: "Sur l'établi, près du pignon fini, il y a un bout de papier, d'une écriture de réfectoire. *Le chapitre est au mur, à hauteur d'yeux. J'ai mis la date. Je n'ai pas mis mon nom : le Livre ne signe pas.*" },
      "Tu ramasses le burin. Tu le poses près d'elle, sur le banc. Le vieux Gobin a tiré d'un coffre une couverture de cheval ; il la lui met sur les genoux, avec des gestes d'horloger, sans l'éveiller.",
    ],
    choices: [{ back: "K13j_aube" }] },

  K13j_foire_aube: { act: "IV", title: "Le pré se vide", place: "foire", ambiance: "champs", hub: true, backName: "le pré de la Foire",
    text: [
      { first: true, text: "Hors la porte d'Occident, le pré de la Foire a sa figure des grands départs. Les baraques sont fermées d'une ficelle. Dans le champ des charrettes, cinq cents familles s'habillent entre les roues : on se lave à la bâche, on cire des souliers avec du lard, on tresse les filles, et les pères, en bras de chemise, se rasent devant un fond de seau." },
      { first: true, text: "La porte s'est ouverte à six heures, à deux battants, comme elle ne s'ouvre qu'une fois l'an, et la chaussée est déjà noire de monde qui monte. On laisse tout. Les voitures, les bêtes à l'attache, la marmite sur ses trois pierres : on sera redescendu pour le dîner, on le dit aux chiens." },
      { first: true, text: "De l'autre côté du champ, derrière le bassin, le chemin du canal s'en va vers le couchant, tout droit, entre deux rangées de peupliers. Tu les comptes malgré toi. Le septième est plus grêle que les autres." },
      { again: true, text: "Le champ des charrettes, les familles qui s'habillent entre les roues, la chaussée noire de monde. Derrière le bassin, les peupliers." },
    ],
    choices: [
      { label: "La charrette bleue des Trois-Noyers", hide: SORTIS, to: "K13j_noyers_aube" },
      { label: "La roulotte du Sablier, qu'on attelle", hide: { seen: "K13j_florizel_aube" }, to: "K13j_florizel_aube" },
      { label: "Repasser la porte d'Occident", to: "K13j_aube" },
    ] },

  K13j_noyers_aube: { act: "IV", title: "La charrette bleue", place: "foire", ambiance: "champs", backName: "la charrette bleue",
    text: [
      { first: true, text: "Elle est au neuvième rang, entre une voiture de Vauxelles et une voiture de Saint-Gnomon-des-Vignes. Il reste huit cruches sur le derrière de la caisse, bouchées de paille, avec leurs trois noix sous l'anse." },
      { first: true, text: "Josse Noyer se rase. Il a pendu à la ridelle un morceau de miroir grand comme la main, et il s'y cherche, un œil après l'autre, avec la gravité d'un homme qui ne se voit qu'aux fêtes. Sa blouse neuve est pliée sur le siège, son chapeau dessus." },
      { first: true, if: ATTELE, text: "La jument est entre les brancards. Girard lui tient un pied de derrière sur son genou, et il gratte la corne avec un couteau, d'un air de grande occupation. Il t'a vu{e} venir de loin. Il ne lève pas la tête." },
      { first: true, if: { not: ATTELE }, text: "La jument est à l'attache, le nez dans son sac. Girard, debout sur le moyeu, se mouille les cheveux à deux mains et se les plaque en arrière. Il a mis une chemise blanche, trop large, qui fut celle de son père." },
      { first: true, text: "La petite est assise dans la paille, en robe du dimanche, une boîte de fer sur les genoux. On lui a fait deux nattes si serrées qu'elles lui tirent les sourcils. Elle te regarde arriver, et elle ne dit rien : elle attend de savoir quel jour c'est pour toi." },
      { again: true, text: "La charrette bleue, les huit cruches, le morceau de miroir à la ridelle. Les trois Noyer se préparent." },
    ],
    choices: [
      { label: "Girard, à la jument", to: "K13j_girard_aube" },
      { label: "Josse, devant son miroir", to: "K13j_josse_aube" },
      { label: "Line, dans la paille", to: "K13j_line_adieu" },
      { back: "K13j_foire_aube" },
    ] },

  K13j_girard_aube: { act: "IV", title: "Le fer qui branle", place: "foire", ambiance: "champs",
    text: [
      { first: true, if: ATTELE, text: "« Elle a un fer qui branle », dit Girard, assez haut pour le miroir. Puis, entre ses dents, sans remuer la tête : « C'est dit au père. Il a regardé le pied. Il a dit : *je ne vois rien.* J'ai dit : *moi je le sens.* Il n'a pas insisté. Il n'insiste jamais devant une bête. »" },
      { first: true, if: ATTELE, text: "Il repose le sabot. La jument souffle. « Je la mène au maréchal du bassin dès qu'ils sont partis. Je reviens ici, je la tourne le nez au canal, et j'attends dessus, les guides en main. » Il se redresse. Il a grandi d'un doigt depuis les foins. « Je te demande toujours pas pourquoi. Mais j'ai mal dormi, je te le dis. J'aime pas mentir au père un jour de fête. »" },
      { first: true, if: { not: ATTELE }, text: "« T'es encore là, toi ? » Girard saute du moyeu. Il est content de te voir, et il s'en défend. « On monte à sept heures. Le père veut être au bord, je sais pas pourquoi, il y a pourtant de la place devant. Moi j'irai devant. J'ai quatorze ans : je veux la voir sonner de près. »" },
      { again: true, if: ATTELE, text: "Girard a repris le pied de la jument. Il gratte une corne qui n'en a aucun besoin." },
      { again: true, if: { not: ATTELE }, text: "Girard se bat avec son col." },
      { after: "monde:girard_jure", text: "Quand tu passes, il lève deux doigts de la main qui tient le couteau, et il les rabat. C'est juré, et il n'aime pas qu'on y revienne." },
    ],
    choices: [
      { label: "« Quand tu auras posé la petite dehors, tu ne tournes pas. Jure-le. »", hide: { any: [{ not: SU_GIRARD }, { has: "monde:girard_jure" }, { seen: "K13j_girard_refus" }] },
        test: { dom: "social", diff: 11, label: "Faire jurer un garçon contre son père", help: [{ if: { has: "j:girard_ami" }, v: 15 }, { if: { voie: "diseur" }, v: 10 }, { if: { has: "monde:noyer_sauve" }, v: 10 }] },
        win: { fx: { flag: "monde:girard_jure", ep: ["histoire", 800] }, to: "K13j_girard_jure" }, lose: { to: "K13j_girard_refus" } },
      { label: "« Ce matin, tu peux atteler, et m'attendre dessus, le nez vers le canal ? »", hide: { any: [ATTELE, { seen: "K08j_girard_non" }, { seen: "K13j_girard_tard" }] },
        test: { dom: "social", diff: 9, label: "Lui prendre sa fête", help: [{ if: { has: "j:girard_ami" }, v: 20 }, { if: { voie: "diseur" }, v: 10 }] },
        win: { fx: { flag: ["j:girard_charrette", "monde:girard_attele"], ep: ["histoire", 500] }, to: "K13j_girard_tard" }, lose: { to: "K13j_girard_tard" } },
      { back: "K13j_noyers_aube" },
    ] },

  K13j_girard_jure: { act: "IV", title: "Sur la tête de la Grise", place: "foire", ambiance: "champs",
    text: [
      "Tu le lui dis à voix basse, contre le flanc de la jument, où le père ne peut pas lire sur les lèvres. Qu'il sortira la petite. Qu'il la posera au pont du bief, passé le septième peuplier. Qu'il entendra sonner onze, de là-bas, et que le douzième ne viendra pas.",
      "« Et alors tu regarderas derrière toi. Tu verras le pré tout entier debout, sans un geste, comme des quilles qu'on aurait clouées. Tu penseras à ton père. Tu tourneras la jument. » Tu lui tiens le poignet. « Tu auras fait trente pas en deçà de l'arbre, et tu seras debout sur ce siège, le fouet en l'air, pour plus longtemps que tu n'as vécu. Je le sais, Girard. On me l'a écrit. On t'a vu. »",
      "Il est devenu blanc sous son hâle. Il regarde le fouet, pendu au crochet de la ridelle. Il le regarde longtemps.",
      "« Et le père ? — Je m'occupe du père. — Tu t'en occupes comment ? » Tu ne réponds pas tout de suite, et il comprend, à ce silence, que tu lui demandes de jurer sans cela. Sa mâchoire fait un pli que tu connais : tu l'as vu pendant neuf ans au-dessus d'un établi.",
      "« Si je reviens, la petite est toute seule sur un pont. » Il dit cela pour lui. Il le retourne, en fils de laboureur, comme une motte. « Elle a neuf ans. Elle sait pas atteler. Elle saurait pas rentrer. » Il crache dans sa main, et il la pose à plat sur le front de la jument, entre les deux yeux. « Sur la tête de la Grise. Je tourne pas. Je reste au pont avec elle, jusqu'à ce que quelqu'un vienne nous dire. » Sa voix casse. « Et s'il vient personne ? »",
      "« Alors tu la ramènes à la maison. Tu seras l'aîné. »",
      "Il hoche la tête, deux fois. Puis il se remet au sabot, avec une application terrible, et tu vois tomber sur la corne une goutte, puis une autre, qu'il efface du pouce.",
    ],
    choices: [{ back: "K13j_noyers_aube" }] },

  K13j_girard_refus: { act: "IV", title: "On ne jure pas cela", place: "foire", ambiance: "champs",
    text: [
      "Tu le lui dis à voix basse, contre le flanc de la jument. Le pont, les onze coups, le pré debout comme des quilles clouées. Les trente pas, le fouet en l'air.",
      "Il t'écoute, la bouche entrouverte. Puis il se ferme, d'un coup, comme une porte de grange par grand vent. « T'as un père, toi ? » Tu ne réponds pas assez vite. « Voilà. On jure pas ça. On jure de pas boire, de pas jouer, de pas toucher à la fille du voisin. On jure pas de laisser son père. »",
      "Il a repris le pied de la jument, et il gratte, à grands coups. « Je sortirai la petite. C'est dit, c'est tapé dans la main, je le ferai. Le reste, c'est entre moi et moi. Et si tu as vu clair, eh bien j'aurai fait trente pas. C'est toujours trente pas de moins pour lui, s'il descendait. »",
      "Tu regardes sa nuque, brûlée par les foins, où la chemise du père fait un grand pli. Il a quatorze ans, et il vient de te répondre ce qu'il répondra, mot pour mot, dans soixante ans, à quelqu'un qui lui tiendra la main.",
      { after: "j:josse_prevenu", text: "Il reste le père." },
    ],
    choices: [{ back: "K13j_noyers_aube" }] },

  K13j_girard_tard: { act: "IV", title: "Le matin même", place: "foire", ambiance: "champs",
    text: [
      { after: "j:girard_charrette", text: "Girard te regarde. Il regarde la Tour, rose, là-haut, et la chaussée pleine de chemises blanches. Il a attendu quatorze ans." },
      { after: "j:girard_charrette", text: "« Quand tu disais qu'une dent allait casser, elle cassait. » Il déboutonne son col, lentement, et il ôte la chemise de son père, qu'il plie sur la ridelle. « Je dirai que la Grise a un fer qui branle. Elle en a toujours un. » Il décroche le collier. « Si la petite redescend en courant, je lui demanderai pas pourquoi. Et toi, je te le demande pas non plus, parce que j'ai peur que tu me le dises. »" },
      { before: "j:girard_charrette", text: "« Atteler ? Ce matin ? » Girard recule d'un pas, comme si tu lui avais demandé sa part de la ferme. « J'ai attendu quatorze ans. Le père m'a promis le parvis depuis que je sais marcher. » Il se replaque les cheveux, avec colère. « Demande-moi ça demain. Demain je t'attelle tout ce que tu veux. »" },
      { before: "j:girard_charrette", text: "Il s'en va vers le seau, le dos raide. Demain, dit-il. Tu regardes la jument, à l'attache, qui mâche son avoine." },
    ],
    choices: [{ back: "K13j_noyers_aube" }] },

  K13j_josse_aube: { act: "IV", title: "La parole et le bail", place: "foire", ambiance: "champs",
    text: [
      { first: true, text: "Josse essuie son rasoir sur sa cuisse, le ferme, le range dans sa botte. Il a la figure nue et rouge des hommes qui se rasent une fois la semaine." },
      { first: true, after: "j:josse_prevenu", text: "« Tu viens voir si je tiens. » Il le constate, sans sourire. « Je tiens. On monte à sept heures. On sera au bord, près d'une rue qui descend : j'ai regardé hier, il y en a une, la rue aux Oies, entre un cirier et un marchand de peignes. La petite verra du haut de mes épaules. C'est ce que je t'ai donné, et je n'ai pas davantage. »" },
      { first: true, before: "j:josse_prevenu", text: "« On monte à sept heures, dit-il. Devant, si l'on peut. La petite sur mes épaules : elle pèse moins qu'un sac d'orge. Mon père m'y a porté, à son âge, et j'ai encore le coup dans la poitrine. » Il passe sa blouse neuve par la tête, et il en ressort décoiffé, content." },
      { again: true, text: "Josse brosse son chapeau du coude, à petits coups, en regardant la Tour." },
    ],
    choices: [
      { label: "Lui dire ce que fera son fils, à trente pas du septième peuplier", hide: { any: [{ not: SU_GIRARD }, { seen: "K13j_josse_non" }] },
        test: { dom: "social", diff: 14, label: "Défaire la parole d'un laboureur", help: [{ if: { has: "monde:noyer_sauve" }, v: 20 }, { if: { has: "j:josse_prevenu" }, v: 10 }, { if: { has: "monde:horloge_ferme" }, v: 5 }, { if: { voie: "tetu" }, v: 10 }] },
        win: { fx: { flag: "monde:noyers_sortis", ep: ["histoire", 1000] }, to: "K13j_josse_reste" }, lose: { to: "K13j_josse_non" } },
      { back: "K13j_noyers_aube" },
    ] },

  K13j_josse_non: { act: "IV", title: "Comme on écoute le ciel", place: "foire", ambiance: "champs",
    text: [
      "Tu le lui dis. Son fils, la charrette, le pont. Le demi-tour, et les trente pas.",
      "Il t'écoute de tout son poids, le chapeau à la main. Quand tu as fini, il regarde Girard, là-bas, penché sur un sabot ; il le regarde longuement, comme on regarde un champ avant de décider s'il est mûr.",
      "« Il ferait cela, dit-il. Tu le connais bien. Il le ferait. » Il remet son chapeau. « Alors je serai au bord, et je descendrai le premier. Il n'aura pas à venir. Un père qui redescend, c'est plus court qu'un fils qui remonte. »",
      "Tu dis qu'il n'aura pas le temps. Que cela prend d'un coup. Il t'entend. Il fait le compte, des lèvres, d'une rue aux Oies qui descend, et de ses jambes de quarante-quatre ans.",
      "« J'ai promis la place à la petite. Je ne sais pas faire autrement que ce que j'ai dit. » Sa grosse main te tombe sur l'épaule, et y pèse. « Tu auras essayé deux fois. Je le dirai au bon Dieu, si l'on me demande. »",
    ],
    choices: [{ back: "K13j_noyers_aube" }] },

  K13j_josse_reste: { act: "IV", title: "Trois dans la charrette", place: "foire", ambiance: "champs",
    text: [
      "Tu le lui dis. Son fils, la charrette, le pont. Le demi-tour. Le fouet en l'air, et la bouche ouverte sur le nom de la jument, pendant plus d'années qu'il n'en a vécu.",
      "Il t'écoute de tout son poids, le chapeau à la main. Quand tu as fini, il regarde Girard, là-bas, penché sur un sabot. Il le regarde longuement. Puis il regarde la petite, dans la paille, qui a levé le nez de sa boîte, et qui vous observe tous deux avec des yeux de neuf ans où il n'y a pas une question.",
      { after: "monde:line_sait", text: "« Père », dit-elle. Elle s'est mise debout dans la caisse. « Je veux plus monter. » Elle ment mal ; elle n'a jamais eu peur d'une cloche de sa vie, et il le sait. Elle le sait aussi. Elle tient bon, les nattes droites, le menton en avant. « J'ai plus envie. Tu me la montreras une autre année. »" },
      { after: "monde:line_sait", text: "Josse la considère. Il voit clair, et il voit aussi qu'on lui tend une échelle. Un homme ne revient pas sur sa parole ; mais une enfant peut la lui rendre." },
      { before: "monde:line_sait", text: "« Une promesse à un enfant, dit-il lentement, ça se tient mieux qu'un bail. » Il tourne son chapeau. « Seulement un bail, on peut le rompre à deux, quand les deux le veulent. » Il va à la charrette. Il s'accroupit devant sa fille, ce qui lui prend du temps. « Line. Si je te disais qu'on la verra une autre année. » Elle regarde son père, puis toi. Elle a compris, à ta figure, plus que tu n'as dit. « Une autre année », dit-elle. Et elle referme sa boîte." },
      "Il se relève, les genoux craquants. « Girard ! Laisse ce pied. Il ne branle pas, je l'ai vu tout à l'heure, et tu le sais comme moi. » Le garçon devient rouge jusqu'aux oreilles. « Attelle. On charge les cruches. On rentre. »",
      "« On rentre ? Avant la... — Avant. » Il a déjà ôté sa blouse neuve, et il la plie. « J'ai fait neuf lieues pour une cloche. J'en ferai neuf autres sans l'avoir entendue : c'est dix-huit lieues perdues, et j'ai deux enfants. Le compte est bon. »",
      "Ils chargent. Cela prend le temps d'atteler une jument qui l'est déjà. Line monte sur le siège, entre eux deux, sa boîte sous le bras. La charrette bleue sort du rang, cahote sur le chaume, prend le chemin du bassin ; et tu la vois, petite, entre les peupliers, passer le premier, le troisième, le cinquième.",
      "Au septième, une main se lève, au-dessus de la ridelle. C'est une main d'enfant. Elle reste levée longtemps.",
      "Dans le rang, entre Vauxelles et Saint-Gnomon-des-Vignes, il y a un rectangle de chaume foulé.",
    ],
    choices: [{ label: "Regarder le chemin vide", to: "K13j_foire_aube" }] },

  K13j_line_adieu: { act: "IV", title: "Neuf ans, une boîte de fer", place: "foire", ambiance: "champs", backName: "Line",
    text: [
      { first: true, text: "Tu t'assois dans la paille, à côté d'elle. Elle ouvre sa boîte. Il y a dedans, rangés sur un chiffon, des vis, deux roues, un ressort cassé roulé sur lui-même, et la moitié d'une paire de brucelles." },
      { first: true, after: "monde:line_dedans", text: "« Je l'ai remontée cette nuit, dit-elle. Sans le ressort. Ça pousse plus, mais tout tient à sa place, et quand je secoue, le balancier fait trois coups. » Elle te montre la montre morte, fermée, qu'elle a contre elle sous sa robe, au bout d'un lacet de soulier." },
      { first: true, after: "monde:line_sait", text: "Elle baisse la voix. « C'est aujourd'hui. » Elle l'affirme. « Tu m'avais dit que tu venais de plus tard. Je t'ai regardé{e} tous les jours, pour voir à quoi ça se voit. Ça se voit quand tu regardes les gens : tu les regardes comme la mère regarde le pain qui reste. »" },
      { first: true, before: "monde:line_sait", text: "Elle te regarde par en dessous. « T'as pas dormi. T'as des toiles d'araignée dans le cou. » Elle en ôte une, entre deux doigts, avec le soin qu'elle met à tout. « Tu t'en vas, aujourd'hui. Les gens qui s'en vont, ils viennent toujours s'asseoir un moment, et ils disent rien. »" },
      { again: true, text: "Line, dans la paille, sa boîte ouverte sur les genoux. Elle range ses vis par grosseur." },
      { after: "j:line_consigne", text: "« La demie de dix », dit-elle, sans lever le nez. Elle n'a pas besoin qu'on le lui répète." },
    ],
    choices: [
      { label: "« À la demie de dix heures, tu lâches la main de ton père, et tu cours à la charrette. »", hide: { any: [{ has: "j:line_consigne" }, SORTIS] }, fx: { flag: ["j:line_consigne", "monde:line_court"], ep: ["histoire", 500] }, to: "K13j_line_consigne" },
      { label: "« Est-ce que tu veux savoir si nous nous reverrons ? »", hide: { seen: "K13j_line_reverra" }, fx: { flag: "j:line_promesse", ep: ["perso", 800] }, to: "K13j_line_reverra" },
      { label: "Regarder dans la boîte ce qu'elle veut te montrer", hide: { any: [{ not: { has: "monde:line_dedans" } }, { item: "vis_line" }] }, fx: { item: "vis_line", flag: "monde:vis_line" }, to: "K13j_line_vis" },
      { back: "K13j_noyers_aube" },
    ] },

  K13j_line_consigne: { act: "IV", title: "À la demie", place: "foire", ambiance: "champs",
    text: [
      "« Écoute bien. Tu seras là-haut, sur les épaules de ton père. Tu verras le grand cadran. Quand la grande aiguille sera tout en bas, il sonnera un coup, un seul. C'est la demie de dix heures. »",
      "Elle hoche la tête. Elle sait lire un cadran ; on le lui a appris.",
      "« À ce coup-là, tu demandes à descendre. Tu dis que tu as envie. Il te posera. Tu lâches sa main, et tu cours. La rue qui descend, la porte, le pré. Tu ne t'arrêtes pour personne, ni pour un chien, ni pour une chanson. »",
      { if: ATTELE, text: "« Girard sera sur la charrette, attelée, le nez au canal. Tu montes. Tu lui dis : *hue.* Il sait. »" },
      { if: { not: ATTELE }, text: "« Après le pré, il y a le bassin, et le chemin entre les peupliers. Tu le prends. Tu comptes les arbres, à voix haute. Au septième, tu peux marcher. Tu vas jusqu'au petit pont, et là tu t'assois, et tu attends. »" },
      "« Et le père ? »",
      "Tu as devant toi une figure de neuf ans, deux nattes, et une paire d'yeux qui ne lâchera pas. Tu dis ce qui est vrai : que le père a donné sa parole de rester au bord, et qu'un homme au bord a ses chances.",
      "Elle pèse cela. Elle n'en est pas contente. Elle le range pourtant, avec les vis, dans le coin de la boîte où elle met ce qui n'a pas encore de place.",
      "« Je courrai, dit-elle. Je cours plus vite que Girard, quand il y a quelque chose au bout. »",
    ],
    choices: [{ back: "K13j_line_adieu" }] },

  K13j_line_reverra: { act: "IV", title: "Tu seras vieille", place: "foire", ambiance: "champs",
    text: [
      "Elle réfléchit, les deux mains sur le couvercle. Elle se méfie des questions qu'on pose en offrant la réponse.",
      "« Oui », dit-elle enfin.",
      "« Nous nous reverrons. Ce sera dans longtemps. Tu seras vieille, avec une robe grise, et des lunettes que tu perdras tout le temps sur ton propre front. Tu auras un établi, sous une fenêtre, dans un village où il y a trois noyers sur la place. Tu feras des montres. Les meilleures de trois provinces. »",
      "Elle écoute cela sans ciller, comme on écoute le prix d'une chose qu'on a déjà décidé d'acheter.",
      "« Un jour, on t'amènera quelqu'un de mon âge, qui ne saura rien. Qui cassera un ressort par semaine, et qui te répondra. Tu seras dure. Tu lui feras recommencer cent fois le même pivot. » Tu t'arrêtes. « Je ne te reconnaîtrai pas, Line. Je mettrai des années à comprendre pourquoi tu me regardes, des fois, par-dessus tes lunettes, comme si j'étais en retard. »",
      "« Mais moi je te reconnaîtrai. »",
      "« Toi, tu me reconnaîtras tout de suite. À la porte. »",
      "Elle fait oui, lentement. Elle a les yeux secs, comme toujours. Elle compte. Tu vois ses lèvres remuer sur des chiffres, et s'arrêter sur un grand.",
      "« C'est long, dit-elle. Je m'ennuierai. » Elle regarde sa boîte. « Je ferai des choses en attendant. Je ferai quelque chose pour toi. Je sais pas encore quoi. J'ai le temps de trouver. »",
      { after: "monde:line_sait", text: "Puis, très bas : « Et quand tu seras revenu{e}, je serai encore là ? » Tu as juré, dans un atelier, à une vieille femme qui toussait, de garder là-dessus le silence. Tu le gardes. Elle te regarde te taire. Elle a neuf ans, et elle range aussi ce silence dans le coin de la boîte." },
    ],
    choices: [{ back: "K13j_line_adieu" }] },

  K13j_line_vis: { act: "IV", title: "Il en manque une", place: "foire", ambiance: "champs",
    text: [
      "Elle tire la montre de sa robe, l'ouvre de l'ongle, comme tu le lui as montré. La platine brille. Elle y cherche quelque chose, du bout de sa demi-brucelle, la langue entre les dents.",
      "C'est une vis, la plus petite, celle qui tient le coq du balancier. Elle la dévisse de trois tours, la cueille, et te la pose dans le creux de la main. Elle ne pèse rien. Il faut la regarder pour savoir qu'on la tient.",
      "« Comme ça, il en manque une. » Elle referme le boîtier, le secoue contre son oreille. Le balancier fait ses trois coups, de travers. « Elle marchera jamais tant que tu l'auras. Tu seras obligé{e} de revenir la mettre. »",
      "Tu veux dire qu'une vis se perd, en soixante ans, qu'une poche se troue. Elle a déjà remis la montre sous sa robe.",
      "« Perds-la pas. Les vis, ça se perd dans la paille. C'est Girard qui dit ça. Lui, il perd tout. »",
    ],
    choices: [{ back: "K13j_line_adieu" }] },

  K13j_florizel_aube: { act: "IV", title: "Le Mystère monte", place: "foire", ambiance: "champs",
    text: [
      "La roulotte du Sablier a quatre chevaux, pour la côte, loués à un meunier qui les a enrubannés lui-même. Sur le toit, on a couché le théâtre : douze portes peintes, démontées, liées en fagot, et le grand cadran de carton, qui regarde le ciel.",
      "Maître Florizel est en pourpoint cerise dès six heures du matin. Il dirige le chargement avec une canne, de la voix dont on commande une retraite. « Sainte Aure à gauche ! Saint Gnomon debout, on ne couche pas un saint de midi ! Qui m'a mis la Onzième sous les malles ? Elle est déjà timide, vous voulez qu'elle soit plate ? »",
      "Il te voit, et il ouvre les bras, canne comprise. « L'ami ! Nous jouons à dix heures, au pied de la Tour, entre la fontaine et les archers, devant Sa Majesté en personne, qui s'arrêtera le temps d'une porte : son chambellan me l'a écrit. Une porte ! J'ai choisi laquelle. » Il baisse le ton, ce qui le ramène à celui d'un homme ordinaire qui crie. « Quarante ans de planches, mon enfant. Je les aurai faits pour ce quart d'heure, et je le sais, et cela ne m'empêche pas d'avoir oublié mes gants. »",
      { if: PIECE, text: "Colombe est assise sur le marchepied, à l'écart, les mains à plat sur les genoux. Elle a la robe de la Douzième : une robe sans couleur, taillée dans un drap de lit, qui tombe droit." },
      { if: { not: PIECE }, text: "Colombe, sur le marchepied, recoud une étoile au manteau de sainte Aure. Elle dit ses quarante vers en cousant, pour la dernière fois avant de les dire pour de bon." },
    ],
    choices: [
      { label: "T'asseoir près de Colombe", hide: { not: PIECE }, to: "K13j_colombe_aube" },
      { back: "K13j_foire_aube" },
    ] },

  K13j_colombe_aube: { act: "IV", title: "Derrière la douzième porte", place: "foire", ambiance: "champs",
    text: [
      "« J'ai veillé, dit-elle. Sans peur. C'est autre chose. » Elle regarde ses mains. « Avant-hier, à la veille, quand j'ai ouvert la porte, personne ne s'est signé. Quatre cents personnes. Elles m'ont regardée. J'ai senti qu'elles attendaient cela depuis toujours : qu'il y ait quelqu'un. »",
      { after: "monde:piece_silence", text: "« Je sortirai, et je les regarderai. Vous me l'avez dit, je le ferai. Je regarderai la Reine la dernière. » Elle respire. « On dit qu'elle a une petite fille malade. Je veux avoir l'air de l'heure d'après, et qu'on me distingue de la mort. C'est difficile à faire avec une figure. »" },
      { after: "monde:piece_mot", text: "« Je sortirai, et je dirai l'heure qu'il est. Une seule phrase. Je l'ai dite deux cents fois au mur de la chapelle. » Elle respire. « Je cherche encore la voix. Celle de quelqu'un qui entre dans une chambre et qui dit : *il est temps.* Ma mère avait cette voix, le matin. »" },
      { after: "monde:piece_corde", text: "Elle a sur les genoux le bout de corde à cloche, avec son gland rouge. « Je sortirai, et je tirerai. Sans un mot. » Elle serre le chanvre. « Il n'y a pas de cloche au bout : c'est une corde de théâtre, elle est clouée à une solive. Mais hier j'ai tiré, pour voir, et j'ai eu l'idée, une seconde, que quelque chose allait sonner. J'ai lâché. J'ai eu les mains moites jusqu'au soir. »" },
      "Elle se tourne vers toi. Elle a dix-huit ans, trois épingles dans les cheveux, et la gravité soudaine des gens à qui l'on a donné, par caprice, le rôle qu'il fallait.",
      "« Vous savez quelque chose. Vous le saviez à la Foire. Je ne vous demande pas quoi. Je vous demande seulement : est-ce que cela sert, que je la joue ? »",
      "Tu penses à cinq mille personnes sur une place, le nez en l'air, à qui l'on aura montré, une heure avant, qu'il peut y avoir quelqu'un derrière la dernière porte. Tu penses qu'elles auront soixante ans pour y songer.",
      "« Cela sert », dis-tu.",
      "Elle se lève. Elle défroisse sa robe de drap de lit. « Alors je la jouerai comme si c'était vrai. » Elle sourit, un peu de travers. « Maître Florizel dit que c'est la seule manière, et qu'il ne l'a jamais essayée. »",
    ],
    choices: [{ back: "K13j_foire_aube" }] },

  K13j_montee: { act: "IV", title: "À portes ouvertes", place: "guilde", ambiance: "ville", fx: { leave: "perrine" },
    text: [
      "Huit heures sonnent, et la ville basse se met en marche d'un seul mouvement, comme une eau qu'on lâche.",
      "Tu montes dedans. La rue Droite a vingt pieds de large et il y passe, de front, des familles entières qui se tiennent par la manche ; des confréries sous leur bannière ; des nourrices ; un aveugle que son chien tire ; des compagnons en tablier neuf, qui chantent ; un cul-de-jatte dans sa caisse à roulettes, poussé par deux gamins qui se le disputent. On a mis les vieillards sur des chaises, et l'on porte les chaises. Les fenêtres sont pleines. Les toits sont pleins. Sur la corniche de Sainte-Aure, quarante garçons sont assis les jambes dans le vide, et le bedeau, d'en bas, les menace d'un Dieu qu'ils n'écoutent pas.",
      "Cela sent le buis, le savon, la friture. Une femme, devant toi, a mis ses souliers dans son panier pour ne pas les user à la côte, et elle marche pieds nus, en robe de noces.",
      "Personne ne pousse. On a le temps : il y a quatre heures à attendre, et l'attente fait partie de la fête. Les gens se montrent la Tour à chaque tournant, la retrouvent plus grande, et s'en félicitent comme d'une chose qu'ils auraient faite.",
      "Tu regardes ces figures une à une. Tu ne peux pas t'en empêcher. Le compagnon qui chante. La femme aux pieds nus. Tu les as vues, dans un Cahier, écrites en bâtons : *ILS REGARDENT TOUS EN L'AIR. IL Y EN A UN QUI RIT.* Tu cherches lequel rit. Ils rient tous.",
      { with: "perrine", text: "À la porte d'Occident, Perrine s'arrête. La foule vous contourne. « Je ne monte pas plus haut avec toi : tu as à faire, et je te gênerais. » Elle te regarde, un bon moment, de la tête aux pieds, comme une marchandise qu'on a eu du mal à avoir. « L'article dernier de la règle, je te le dirai une autre fois. Il ne sert qu'une fois, et je le garde pour un meilleur endroit. » Elle rentre dans le flot. Sa hotte dépasse longtemps." },
      "À la fontaine des Jurés, le fleuve se partage : le gros continue vers la place du Palais ; un filet tourne à gauche, par la rue du Cadran, vers la colline de la Guilde, où le public a droit à la cour jusqu'à dix heures.",
    ],
    choices: [{ label: "Prendre à gauche, par la rue du Cadran", to: "K13j_colline", big: true }] },
});

Object.assign(P, {
  K13j_colline: { act: "IV", title: "Neuf heures sur la colline", place: "guilde", ambiance: "chateau", hub: true, backName: "la cour de la Guilde",
    text: [
      { first: true, text: "La cour de la Guilde est ouverte, comme à chaque Grand Midi, et le peuple y entre sur la pointe des pieds. On y regarde le cadran solaire, les hommes de cuivre rangés contre le mur, les fenêtres des ateliers. Des pères expliquent à leurs fils des choses fausses, avec assurance." },
      { first: true, text: "Sur son tabouret, à la porte, le père Loquet tient son registre fermé sur ses genoux, et il salue chacun d'un doigt à la tempe. Il a déjà salué deux mille personnes ; il en saluera autant. Derrière la Guilde, par-dessus les toits, la Tour monte d'un jet, si proche qu'il faut renverser la tête." },
      { first: true, text: "Son ombre est encore longue. Elle coupe la cour en deux, et elle raccourcit à vue d'œil, comme une chose qu'on retire." },
      { again: true, text: "La cour, le peuple endimanché, les hommes de cuivre. L'ombre de la Tour a encore reculé d'un pavé." },
      { again: true, after: "j:vu_neuf", text: "Sous l'arcade du fond, il manque neuf tabliers verts. Le public a été prié de sortir ; il reste des apprentis, qui parlent bas." },
    ],
    choices: [
      { label: "Le père Loquet, sur son tabouret", hide: { seen: "K13j_cour_matin" }, to: "K13j_cour_matin" },
      { label: "Monter chez le Grand Maître", hide: { seen: "K13j_coudrier_matin" }, to: "K13j_coudrier_matin" },
      { label: "Josquin, dans l'escalier", hide: { any: [{ seen: "K13j_josquin_matin" }, { not: { any: [{ has: "monde:josquin_ami" }, { seen: "K13j_coudrier_matin" }] } }] }, to: "K13j_josquin_matin" },
      { label: "Le bureau du sceau : il va être neuf heures", hide: { any: [{ seen: "K13j_registre" }, { has: "j:vu_neuf" }] }, to: "K13j_registre" },
      { label: "Le réfectoire, où Aymon t'attend", hide: { any: [{ not: { has: "j:aymon_cire" } }, { seen: "K13j_aymon_matin" }] }, to: "K13j_aymon_matin" },
      { label: "Attendre dix heures sous l'arcade", hide: { has: "j:vu_neuf" }, fx: { flag: "j:vu_neuf", ep: ["histoire", 400] }, to: "K13j_dix_heures" },
      { label: "La place du Palais, par la ruelle des Sonneurs", to: "K13j_parvis_matin" },
    ] },

  K13j_cour_matin: { act: "IV", title: "Ce qu'un portier a vu", place: "guilde", ambiance: "chateau",
    text: [
      "Le père Loquet te reconnaît, et il te fait signe d'approcher, de l'index, sans cesser de saluer de l'autre main.",
      "« Rentré. » Il parle du coin de la bouche. « À l'aube, comme je tirais les verrous. À pied, par la rue du Cadran, tout seul. Sans sa chaîne, sans son chapeau. Et des toiles d'araignée, mon enfant ! Sur le dos, dans les cheveux, aux sourcils : on aurait dit un grenier qui marche. »",
      "Il salue une bourgeoise. « Il m'a dit : *bonjour, Loquet, il fait un beau temps de promenade.* Je l'ai écrit. » Il tapote le registre. « *Le 21, au petit jour, rentré le Grand Maître.* Je n'ai pas mis les araignées. Un portier écrit qui passe. Il n'écrit pas dans quel état. »",
      { after: "j:coudrier_libre", text: "Il te regarde le col, où il en reste. Son œil s'allume, et s'éteint aussitôt, par discrétion de métier. « Je n'ai rien vu non plus de ce côté-là », dit-il." },
      { before: "j:coudrier_libre", text: "« Le petit Josquin est rentré un quart d'heure après, trempé jusqu'au ventre, avec de la brique sous les ongles. Celui-là, je l'ai écrit aussi, à sa ligne. Il m'a demandé pardon d'avoir sali mon seuil. »" },
      "Il bâille. Il a soixante-huit ans, il est debout depuis les verrous, et il lui reste trois heures de foule. « À dix heures, je ferme au public. À onze, je m'assois pour de bon. C'est le seul jour de l'année où l'on me laisse dormir à mon poste : tout le monde est sur la place, il ne passe plus un chat. »",
    ],
    choices: [{ back: "K13j_colline" }] },

  K13j_coudrier_matin: { act: "IV", title: "Un grenier qui marche", place: "guilde", ambiance: "chateau", backName: "le cabinet du Grand Maître",
    text: [
      { first: true, text: "La porte du cabinet est ouverte. Barnabé Coudrier est assis à sa table, en houppelande, devant un bol de chocolat qu'il boit à petites gorgées bruyantes. Il s'est lavé la figure. Il a gardé le reste : la houppelande a, sur les épaules et tout le long du dos, une pèlerine grise, d'un tissu que cent ans d'araignées ont filé, et qu'il n'a pas permis qu'on brosse." },
      { first: true, text: "« Entrez. Je la garde. » Il a suivi ton regard. « Lunel voulait m'envoyer le valet. Je lui ai dit que Monseigneur de Hautgué m'avait fait cadeau d'un manteau, et qu'on ne brosse pas le cadeau d'un duc. » Il repose le bol. « Je veux qu'on le voie, quand je traverserai ma cour. Que deux cents apprentis se demandent où j'ai couché. Il y en a bien un, dans le nombre, qui finira par trouver. »" },
      { first: true, after: "j:coudrier_libre", text: "« Vous avez dormi ? Non. Moi non plus. J'ai marché. Le port, la Halle, les remparts du Levant. J'ai vu se lever le jour sur ma ville, de l'endroit où je l'avais vu à vingt ans, avec une fille dont j'ai oublié le nom et gardé le rire. » Il s'essuie la moustache. « Je vous dois cette promenade. C'est peu de chose, et il se trouve que c'est tout ce qui me restait à désirer. »" },
      { first: true, before: "j:coudrier_libre", after: "j:sauvetage_manque", text: "« Josquin m'a dit le trou. Quarante briques, à la main, dans l'eau. Vous aviez fait le plus long, et l'on vous a remis au bief. » Il te considère, par-dessus son bol. « Il est venu à l'aube, en demandant pardon au geôlier, qui dormait debout. J'ai passé plié en deux. C'est votre arche, c'est son pardon : vous m'avez sorti à deux, et aucun de vous ne le sait. »" },
      { first: true, before: ["j:coudrier_libre", "j:sauvetage_manque"], text: "« Josquin est venu à l'aube. Par une arche de moulin, avec ses ongles, en demandant pardon à chaque brique. » Il te considère, par-dessus son bol. « Vous aviez autre chose à faire, cette nuit. Je ne vous demande pas quoi. Chacun avait sa dernière nuit ; il n'y en avait pas pour tout le monde. »" },
      { again: true, text: "Le Grand Maître finit son chocolat. Sa pèlerine d'araignées lui fait, dans le contre-jour, des épaules de fantôme." },
      { again: true, after: "monde:chasse_en_bas", text: "Dans sa manche gauche, quand il lève le bras, on devine une chose droite et mince, qu'il y a cousue d'un point." },
    ],
    choices: [
      { label: "« Maître. La Cage de la cloche a deux clefs. »", hide: { item: "clef_sonneur" }, fx: { item: "clef_sonneur", ep: ["histoire", 600] }, to: "K13j_coudrier_clef" },
      { label: "Lui donner le chasse de bronze de maître Cliquet", hide: { not: { item: "chasse_bronze" } }, fx: { drop: "chasse_bronze", flag: "monde:chasse_en_bas", ep: ["histoire", 600] }, to: "K13j_coudrier_chasse_matin" },
      { label: "« À onze heures, voulez-vous quelqu'un derrière vous ? »", hide: { seen: "K13j_coudrier_onze" }, to: "K13j_coudrier_onze" },
      { back: "K13j_colline" },
    ] },

  K13j_coudrier_clef: { act: "IV", title: "La seconde clef", place: "guilde", ambiance: "chateau",
    text: [
      "Il pose son bol. « Qui vous a dit cela ? » Puis il lève sa main large. « Non. Ne répondez pas. J'ai passé l'âge de m'étonner de ce que vous savez. »",
      "Il fouille sa houppelande, sous la pèlerine grise, et il en tire une clef noire, courte, au panneton en trèfle. Il la tient un moment dans sa paume.",
      "« L'une est au registre. Monsieur le sous-maître signera pour elle tout à l'heure, avec les deux autres, de sa belle écriture. Celle-ci, les Grands Maîtres la portent sur eux depuis 481 : pour qu'il y ait toujours quelqu'un qui puisse monter rendre un coup, quoi qu'on ait signé en bas. Mon prédécesseur me l'a donnée sur son lit. Il m'a dit : *vous ne vous en servirez jamais, c'est à cela qu'elle sert.* »",
      "Il te la tend par le panneton, l'anneau vers toi, comme on tend un couteau.",
      "« Je descends, moi. Elle ne m'ouvre rien, en bas. » Ses doigts tardent à lâcher. « Il se ferme là-haut, à la demie de onze heures, par le dedans. Soyez dessous avant. Et quand vous y serez... » Il cherche. C'est un homme qui a fait quarante ans de discours, et qui n'en trouve pas un. « Tenez-vous droit. On reste longtemps comme on était. »",
      { after: "monde:su:lesquelles", text: "« Vous savez pourquoi c'est à vous que je la donne. On vous l'a écrit avant qu'on me l'ait dit. »" },
    ],
    choices: [{ back: "K13j_coudrier_matin" }] },

  K13j_coudrier_chasse_matin: { act: "IV", title: "Dans la manche gauche", place: "guilde", ambiance: "chateau",
    text: [
      "Tu poses sur la table, près du bol, la tige de bronze de maître Cliquet : grosse comme le petit doigt, plate d'un bout, du profil exact d'une rainure.",
      "Il la prend. Il la fait rouler entre le pouce et l'index, la porte à son œil, en mire, vers la fenêtre. « Cliquet. Je reconnais sa lime : il finit toujours ses chanfreins d'un coup de trop. » Il la repose. « Il a voté contre moi pendant trente ans, et il a cassé ses outils hier soir. C'est le plus honnête homme de cette maison, et je ne le lui ai jamais dit. Vous le lui direz. » Il se reprend. « Non. Vous ne le lui direz pas non plus. »",
      "Tu expliques. Un coin, dans une rainure, à gauche du levier quand on regarde le puits. On le chasse par le petit bout, d'un coup sec, vers le haut. Celui qui viendra le faire n'aura rien dans les mains.",
      "« Alors il faut que cela soit par terre, à cet endroit, et que cela y reste. » Il a compris avant la fin. Il prend dans son tiroir une aiguille enfilée, de celles dont il recoud ses boutons lui-même, et il fixe la tige dans sa manche gauche, d'un seul point, lâche. « Un point. Il cassera quand on me tirera le bras. Elle tombera où je serai. »",
      "Il rabat la manche, lève le bras, l'abaisse. On ne voit rien.",
      "« Soixante ans, vous dites. Le bronze ne rouille pas. C'est une matière qui sait attendre : on en fait les cloches. »",
    ],
    choices: [{ back: "K13j_coudrier_matin" }] },

  K13j_coudrier_onze: { act: "IV", title: "Seul, à onze heures", place: "guilde", ambiance: "chateau",
    text: [
      "« Derrière moi ? » Il rit, d'un petit rire de poitrine. « J'ai eu derrière moi, quarante ans, sept jurés et un sous-maître. Je sais ce que cela vaut. »",
      "Il se lève, va à la fenêtre. La Tour l'emplit tout entière. « Je descendrai seul. Il y a quatre-vingts marches jusqu'à la Chambre basse, sans rampe ; je les ai comptées à votre âge, en les remontant dans le noir. Si j'emmène un garçon, il le fera tuer, ou il le fera pris, ce qui est une façon plus longue. Si j'emmène un archer, l'archer aura de la cire, et l'autre lui dira que le vieux est fou. On croit toujours l'homme qui a les clefs. »",
      { after: "j:aymon_escalier", text: "« Le petit Foliot m'a fait dire qu'il serait à la porte de fer. Pour la tenir ouverte, dit-il, et pour montrer par où l'on sort. » Il hoche la tête. « Un Foliot qui tient une porte. Son grand-oncle Évrard pesait la cire des sonneurs. Ce sont des gens exacts : ils arrivent toujours un siècle trop tôt ou une heure trop tard. Qu'il y soit. Je laisserai le vantail entrebâillé. »" },
      { before: "j:aymon_escalier", text: "« Je laisserai la porte de fer entrebâillée derrière moi. C'est une habitude de vieux : j'ai horreur d'entendre une serrure dans mon dos. » Il te jette un regard de côté. « Quelqu'un de mince y passerait. »" },
      { after: "j:coudrier_plan", text: "« Vous savez ce que j'y vais faire. Me battre bas, aux poignets, pour que la barre se coince où elle est. Un cran de moins à remonter. » Il regarde ses mains, qu'il ouvre et referme. « Elles ont réglé la montre du feu roi. Elles vont finir sur les manchettes d'un jeune homme bien mis. On ne choisit pas son dernier ouvrage. »" },
      "Il revient à la table. Il boit le fond de son bol, froid. « Allez. Vous avez une matinée, et moi une promenade à raconter à Lunel. Nous nous reverrons. » Il s'arrête sur le mot, le pèse, et le laisse. « C'est même la seule chose dont je sois sûr. »",
    ],
    choices: [{ back: "K13j_coudrier_matin" }] },

  K13j_josquin_matin: { act: "IV", title: "Le sucre et le feu", place: "guilde", ambiance: "chateau",
    text: [
      "Josquin est assis sur la dernière marche, devant la porte du cabinet, un plateau vide sur les genoux. Il a de la brique sous les ongles, ou du sucre aux doigts, et les yeux rouges d'un garçon qui a passé la nuit dehors.",
      "« Il a bu son chocolat. Il a dit qu'il était trop sucré. Il le dit tous les matins depuis quatre ans. » Sa voix tient mal. « Je voulais le lui faire sans sucre, une fois, pour voir ce qu'il dirait. Je me disais : j'ai le temps. »",
      { after: "monde:josquin_ami", text: "Il te regarde. « Dites-moi où je dois être. Vous l'avez dit à Aymon. Vous l'avez dit à la moitié de la ville basse, à ce qu'on raconte. Je suis son apprenti. Je ne veux pas être celui à qui l'on n'a rien dit. »" },
      { before: "monde:josquin_ami", text: "Il te regarde, avec méfiance d'abord, puis sans. « Vous savez ce qui se fera à midi. Tout le monde, ici, fait semblant de l'ignorer, et vous êtes la seule personne qui n'ait pas l'air de faire semblant. Dites-moi où je dois être. »" },
    ],
    choices: [
      { label: "« De la cire aux oreilles, et dans la cour. Il faudra quelqu'un debout pour dire son nom comme il faut. »", hide: { not: { has: "j:sait_cire" } }, fx: { flag: "monde:josquin_debout", conf: { josquin: 10 }, ep: ["perso", 600] }, to: "K13j_josquin_fin" },
      { label: "« Derrière lui, jusqu'à la porte de fer. Pas plus loin. »", fx: { flag: "j:josquin_porte", ep: ["perso", 400] }, to: "K13j_josquin_fin" },
    ] },

  K13j_josquin_fin: { act: "IV", title: "Celui à qui l'on a dit", place: "guilde", ambiance: "chateau",
    text: [
      { after: "monde:josquin_debout", text: "« Debout. Avec de la cire. » Il baisse la tête. « Pendant qu'il descend. » Tu vois ce que cela lui coûte : c'est le poste du lâche, et c'est celui qu'on lui donne." },
      { after: "monde:josquin_debout", text: "Tu lui dis le reste. Qu'on écrira un livre, relié de noir, où son maître aura un adjectif. Qu'on fera porter la faute à celui qui est descendu l'empêcher. Qu'il faudra, dehors, pendant des années, quelqu'un qui ait vu la houppelande pleine de toiles, et qui le dise, à qui voudra l'entendre, dans les auberges, sur les routes, même quand cela vaudra des coups." },
      { after: "monde:josquin_debout", text: "Il relève la tête. Il a seize ans, des oreilles décollées, et une colère qui vient de trouver son emploi. « Je sais écrire sur les murs, dit-il. Vous m'avez vu. » Il serre le plateau contre lui. « J'écrirai sur tous les murs du royaume. Ils useront plus de chaux que moi de charbon. »" },
      { after: "j:josquin_porte", text: "« Jusqu'à la porte de fer. » Il respire, comme on respire quand on vous rend quelque chose. « Il me dira de m'en aller. Je ferai semblant. Il fera semblant de me croire. Nous faisons cela depuis quatre ans, pour le sucre. »" },
      { after: "j:josquin_porte", text: "Il se lève, pose le plateau sur la marche. « Je m'assoirai contre le vantail, du côté de la ruelle. Je l'entendrai descendre. J'ai l'oreille juste : je compterai ses marches. » Il te regarde. « Vous ne me dites pas ce qui m'arrivera, assis là. » Tu ne le dis pas. « Bien. Il ne me l'aurait pas dit non plus. »" },
      "Il te salue, à la manière de la colline, la main sur la couture. Puis il fait une chose qui ne se fait pas entre apprentis : il te tend cette main.",
    ],
    choices: [{ label: "La prendre", to: "K13j_colline" }] },

  K13j_registre: { act: "IV", title: "Neuf heures : trois clefs", place: "guilde", ambiance: "chateau", fx: { flag: "j:vu_signature", ep: ["histoire", 500] },
    text: [
      "Le bureau du sceau ouvre sur la cour par une porte basse. Le commis a taillé trois plumes, pour le cas où deux se casseraient, et il a ouvert le grand registre des clefs à la page du jour, qu'il a réglée à l'avance.",
      "Neuf heures sonnent. Au neuvième coup, Melchior Aubespin entre. Il a mis l'habit gris de cérémonie, sans un pli, et des manchettes de dentelle qu'on ne lui avait jamais vues. Monsieur Fourchon le suit, portant sur un coussin trois clefs que le commis vient de décrocher du tableau : une grande, de fer forgé ; une moyenne, de bronze ; une courte et noire, au panneton en trèfle.",
      "« *Chambre haute. Chambre basse. Cage.* » Le commis lit, le doigt sur la ligne. « Remises ce jour à monsieur le sous-maître, pour le service du Grand Midi, par ordre de Sa Majesté, commission du douze. » Il tourne le registre. Le sous-maître prend la plume, la regarde à contre-jour, en ôte un poil, et signe. Sa signature a un papillon dans le paraphe. Il sèche lui-même, au sable, et il souffle : les grains traversent la table en ligne droite.",
      { after: "monde:reine_renonce", text: "« Par ordre de Sa Majesté », répète-t-il doucement, en relisant la ligne. Une ombre lui passe sur la figure, la plus légère : celle d'un homme qui a reçu la veille au soir un pli de la Reine, qui l'a lu, et qui l'a rangé dans un tiroir en attendant que midi ait rendu le pli sans objet." },
      "« La seconde clef de la Cage ne figure pas, monsieur, dit le commis. C'est l'usage. — Je sais où elle est. » Il prend les trois clefs sur le coussin, une à une. « On me dit que monsieur le Grand Maître est rentré ce matin de promenade, avec des araignées. Qu'on le laisse se promener. Un homme qui n'a plus sa chaîne ne ferme plus rien, et je n'ai jamais craint les gens qui ouvrent. »",
      { if: DIXIEME, text: "En se retournant, il te trouve dans la porte. L'œil gris, puis le brun. « Onze heures, ai-je dit. Vous avez deux heures d'avance : c'est un défaut, et le seul que je n'aie pas le loisir de corriger aujourd'hui. À la porte au papillon. Vous porterez le niveau. » Il passe. Il sent la lavande et le métal froid." },
      { if: { has: "j:aubespin_trahi" }, text: "Tu t'es mis{e} derrière le battant. Il passe à deux pieds de toi, les trois clefs dans sa main gantée, et il s'arrête. Il ne tourne pas la tête. « Monsieur Fourchon. Il y a, sur cette colline, une personne qui m'a tendu hier le mauvais étui. Si vous la rencontrez avant onze heures, vous lui direz que je n'ai pas de rancune. Je n'en ai jamais : c'est une dépense. » Il repart. Fourchon, lui, t'a très bien vu{e}, et il te compte, de l'œil, comme une pièce qui manquera." },
      { if: { not: { any: [DIXIEME, { has: "j:aubespin_trahi" }] } }, text: "Il sort sans te voir, parmi les badauds qu'on a laissés sous la porte. Il sent la lavande et le métal froid. Une petite fille, sur le bras de son père, tend la main vers la dentelle des manchettes ; il s'écarte d'un demi-pas, exactement, et il lui sourit." },
      "Le commis referme le registre. Il n'y aura pas d'autre ligne à cette page.",
    ],
    choices: [{ back: "K13j_colline" }] },

  K13j_aymon_matin: { act: "IV", title: "Le compte de la cire", place: "guilde", ambiance: "chateau",
    text: [
      "Le réfectoire est vide, les bancs retournés sur les tables. Aymon Foliot est seul au bout de la sienne, devant un linge où il a rangé, par douzaines, des boulettes de cire de la grosseur d'une noisette.",
      { after: "j:aymon_bas", text: "« Cent quatre-vingt-douze. Le cirier de la rue Droite m'a regardé d'un drôle d'air. Je lui ai dit que c'était pour une confrérie. » Il les recompte, du doigt, sans les toucher. « Quatre-vingt-seize têtes. La ruelle du Lavoir en a soixante, la rue de la Poulie quarante et quelques. Il m'en manquera. Je commencerai par les maisons où il y a des enfants : on m'y ouvrira plus vite, pour me faire taire. »" },
      { after: "j:aymon_bas", text: "Il noue le linge. « Je ne sais pas ce que je leur dirai. *Mettez ceci dans vos oreilles, de la part de la Guilde.* On me rira au nez neuf fois sur dix. » Il se lève. « Cela fait une sur dix. Mon oncle dit qu'un Foliot ne s'engage que sur ce qu'il peut tenir. Je tiendrai une sur dix. »" },
      { after: "j:aymon_escalier", text: "« Deux pour moi. Deux pour quelqu'un qui en voudrait au dernier moment : il y en a toujours un. » Il range les autres. « Je serai à la porte de fer à onze heures moins le quart. J'ai essayé le vantail hier soir : il grince à mi-course. J'ai mis de l'huile. Un homme qui veut qu'on le suive n'a pas besoin que sa porte l'annonce. »" },
      { after: "j:aymon_escalier", text: "Il noue le linge. « Je ne sais pas me battre. Je vous l'ai dit. Je sais dire à quelqu'un par où l'on sort. » Il te regarde, bien en face, avec ses yeux pâles de Foliot. « Ce sera peut-être vous, le quelqu'un. »" },
      { before: ["j:aymon_bas", "j:aymon_escalier"], text: "« Vous ne m'avez pas dit où. » Il n'y met pas de reproche. « J'ai donc choisi. Les Foliot votent avec le nombre : j'ai regardé où il y aurait le plus de monde et le moins de cire. La place du Palais. Je n'en ai pas pour cinq mille ; j'en ai pour quatre-vingt-seize. Je me mettrai au bord, près des rues qui descendent, et j'en donnerai aux gens qui ont des enfants sur les épaules. »" },
      "Il met le linge dans sa chemise. Il sort par la porte des cuisines, à pas comptés, comme un garçon qui porte des œufs.",
    ],
    choices: [{ back: "K13j_colline" }] },

  K13j_dix_heures: { act: "IV", title: "Dix heures : les neuf", place: "guilde", ambiance: "chateau",
    text: [
      "À dix heures moins un quart, le père Loquet se lève de son tabouret, et il fait sortir le public, les bras écartés, comme on pousse des oies. La cour se vide. Il ne reste que la maison : deux cents apprentis aux fenêtres, les jurés sous l'arcade, les hommes de cuivre contre leur mur.",
      "Dix coups, à la Tour. Au dixième, la porte de l'atelier du sous-maître s'ouvre.",
      "Ils sortent par rang de taille, le plus grand devant. Ils sont neuf, en tablier vert, les mains gantées de fil. Chacun a sur les oreilles un bandeau de drap gris, noué derrière la nuque, et l'on voit, au bord du drap, luire un peu de cire. Ils marchent sans se parler ; ils ne s'entendraient pas. Le premier porte un niveau d'eau dans son étui. Le deuxième, une lanterne. Les suivants, des coffrets plats, une règle de cuivre, un sablier vide, haut d'une coudée.",
      "Le dernier est le petit Hurel. Il porte le maillet, roulé dans sa serge verte, à deux bras, contre sa poitrine. Il a sa montre neuve. Il regarde droit devant lui, avec une figure de première communion.",
      { after: "j:ansel_travers", text: "En passant devant l'arcade, il te cherche. Il te trouve. Rien ne bouge dans sa figure ; mais le paquet de serge penche, d'un quart, et se redresse." },
      "Melchior Aubespin vient derrière eux, les mains libres. Il a les trois clefs à sa ceinture, sous l'habit. Lui seul n'a pas de bandeau : il le mettra en bas, au dernier moment, et il tient à entendre jusque-là. Devant le doyen Lunel, il s'incline, de son inclinaison exacte. « Monsieur le doyen, je vous rends une ville à l'heure. » Le doyen, qui n'a pas dormi, reste court.",
      "Deux petits hommes de cuivre, hauts comme des enfants, une cloche dans la poitrine, se détachent du mur et le suivent, à trois pas, du même pied.",
      "Au fond de la cour, la poterne de la ruelle des Sonneurs a sa barre baissée, à hauteur de ceinture, pour le public. Les huit grands se courbent. Le petit Hurel passe dessous sans se baisser. On l'entend rire, tout seul, dans son silence de cire.",
      { if: DIXIEME, text: "Monsieur Fourchon ferme la marche. À ta hauteur, il tire sa montre, te la montre, et la rentre. Onze heures. La porte au papillon." },
      "La cour reste vide, avec son cadran. L'ombre de la Tour n'y tient plus que trois rangs de pavés.",
    ],
    choices: [{ back: "K13j_colline" }] },

  K13j_parvis_matin: { act: "IV", title: "La place, à portes ouvertes", place: "palais", ambiance: "chateau", hub: true, backName: "la place du Palais",
    text: [
      { first: true, text: "La ruelle des Sonneurs débouche sur la place par un passage voûté, et l'on y reçoit la place en pleine figure." },
      { first: true, text: "Ils sont cinq mille sur l'esplanade, et l'on dit qu'il en reste trente-cinq mille dans les rues, sur les marches, aux fenêtres, aux toits. Cela fait un bruit de mer par beau temps. Cela a une couleur : le blanc des chemises, le rouge des fichus, et, par-dessus, quelques centaines d'enfants, assis sur des épaules, qui dépassent comme des fleurs plus hautes." },
      { first: true, text: "Au bout, la Tour. D'ici, on voit qu'elle penche : d'un rien, vers le levant, depuis quatre siècles, et que les maçons ont rattrapé cela d'étage en étage, de sorte qu'elle monte en se corrigeant. Le grand cadran a douze pieds de large. Ses aiguilles sont dorées de frais. Sous lui, la porte de bronze, à deux vantaux, et devant la porte, un espace vide, tenu par des archers." },
      { first: true, text: "Tout cela regarde en l'air. Cinq mille mentons levés, sous un soleil qui monte. Tu passes derrière eux, le long des maisons, et pas un ne tourne la tête : tu vois des nuques, des cols, des nattes, des chapeaux tenus à la main. Tu as lu la description de ces dos-là. Elle était exacte." },
      { again: true, text: "L'esplanade, les cinq mille mentons levés, la Tour qui penche d'un rien. Le soleil monte." },
    ],
    choices: [
      { label: "Le capitaine Hardouin", hide: { seen: "K13j_hardouin_matin" }, to: "K13j_hardouin_matin" },
      { label: "Le théâtre aux douze portes, près de la fontaine", hide: { seen: "K13j_mystere" }, to: "K13j_mystere" },
      { label: "Voir passer la Reine", hide: { seen: "K13j_reine_passe" }, to: "K13j_reine_passe" },
      { label: "Le bord de la place, vers la rue aux Oies", hide: { any: [SORTIS, { seen: "K13j_noyers_parvis" }] }, to: "K13j_noyers_parvis" },
      { label: "La face sud de la Tour, celle qu'on ne regarde pas", hide: { any: [{ not: { has: "monde:su:echelons" } }, { has: "j:vu_echelons" }] }, fx: { flag: "j:vu_echelons", ep: ["histoire", 400] }, to: "K13j_echelons" },
      { label: "Repasser sous la voûte, vers la cour de la Guilde", to: "K13j_colline" },
      { label: "Attendre ici la demie de dix heures", to: "K13j_demie", big: true },
    ] },

  K13j_hardouin_matin: { act: "IV", title: "La consigne du capitaine", place: "palais", ambiance: "chateau",
    text: [
      { after: "monde:hardouin_tour", text: "Le capitaine Hardouin est au pied de la Tour, à dix pas de la porte de bronze, avec six archers qu'il a rangés face à la place. Il a mis sa cuirasse des grands jours, qui le gêne, et il n'a pas dormi : cela se voit à sa barbe, faite trop vite, où il reste du savon sous l'oreille." },
      { after: "monde:hardouin_tour", text: "Il te voit avant que tu l'aies abordé. « Vous. » Il reste de face : un capitaine au poste parle sans tourner le buste. « Je vous ai cru{e}. Cela m'a coûté ma nuit, la moitié de mon crédit auprès du chambellan, et six hommes que j'ai ôtés aux grilles pour les mettre ici, où l'on n'a jamais mis personne. Si vous avez menti, je vous retrouverai. Si vous avez dit vrai, je ne retrouverai personne, et vous non plus. »" },
      { after: "monde:hardouin_tour", text: "« Ma consigne est de moi. Après Sa Majesté, nul ne passe cette porte. Les horlogers entrent par la leur, derrière, dans la ruelle : je n'ai pas d'ordre sur cette porte-là, et j'en ai demandé un trois fois. » Sa mâchoire travaille. « On m'a répondu que la Guilde se garde elle-même depuis quatre cents ans. On m'a répondu cela en souriant. »" },
      { before: "monde:hardouin_tour", text: "Le capitaine Hardouin est à la grille du Palais, où le veut le règlement, à l'autre bout de la place. De la Tour, on distingue sa cuirasse, et le petit éclair qu'elle fait quand il se retourne pour inspecter une haie d'archers déjà parfaite." },
      { before: "monde:hardouin_tour", after: "j:hardouin_croit", text: "Tu traverses. Il te reconnaît. « J'ai doublé la grille, dit-il sans préambule. C'est ce que je pouvais. On ne dégarnit pas un palais sur la parole d'une personne de votre âge, même quand on la croit. » Il regarde la Tour, par-dessus cinq mille têtes. « Je la crois. C'est bien ce qui m'ennuie. »" },
      { before: ["monde:hardouin_tour", "j:hardouin_croit"], text: "Tu n'iras pas jusqu'à lui. Il y a cinq mille personnes entre vous, et il ne t'a jamais donné lieu de penser qu'il t'écouterait." },
      { after: "monde:hardouin_tour", text: "Tu lui dis d'éloigner ses hommes avant midi. Il a un rire bref. « J'ai trente ans de service. On ne m'a pas appris à quitter un poste parce qu'il devient mauvais : on m'a appris que c'est à cela qu'on reconnaît un poste. » Il rajuste son hausse-col. « Je serai ici. Si quelqu'un, un jour, a besoin de savoir où était le capitaine des gardes à l'heure où l'on a pris sa Reine, il le trouvera sans chercher. »" },
    ],
    choices: [{ back: "K13j_parvis_matin" }] },

  K13j_mystere: { act: "IV", title: "La douzième porte", place: "palais", ambiance: "chateau", fx: { ep: ["histoire", 400] },
    text: [
      "On a dressé le théâtre entre la fontaine et les archers : douze portes peintes, en demi-cercle, sous le cadran de carton. Devant, la foule s'est assise par terre, sur trois cents rangs, et ceux qui sont debout derrière se font dire de s'asseoir.",
      "Les Heures sortent, l'une après l'autre. Sainte Aure ouvre le jour, en manteau bleu. Saint Gnomon dit midi, debout, et la place, qui sait le texte, le dit avec lui. La Onzième fait sa timide ; une main, par-derrière, la pousse, et l'on rit de bon cœur. Maître Florizel fait à lui seul quatre Heures, un ange et le bonimenteur, en changeant de chapeau.",
      "Il se fait un mouvement. Les archers ouvrent la haie. La Reine est sortie du Palais, et elle s'est arrêtée, à trente pas, comme le chambellan l'avait écrit, pour une porte.",
      { if: { not: PIECE }, text: "C'est la douzième. Elle s'ouvre, tirée par une corde, sur une planche noire. La place se signe, d'un seul geste, avec un grand bruit d'étoffe ; la Reine se signe aussi. La porte reste béante le temps d'un salut, se referme, et cinq mille personnes applaudissent un trou, par habitude, de tout leur cœur." },
      { if: PIECE, text: "C'est la douzième. Elle s'ouvre. Les mains montent vers les fronts, pour le signe, et s'arrêtent en chemin : dans la porte, il y a quelqu'un. Une fille en robe de drap, sans couleur, debout, les bras le long du corps." },
      { if: { all: [PIECE, { has: "monde:piece_silence" }] }, text: "Elle ne dit rien. Elle regarde la place, de gauche à droite, rang par rang, sans hâte, comme on compte des gens qu'on est venu chercher. Le silence se fait de proche en proche, jusqu'aux toits. Puis elle tourne la tête, et elle regarde la Reine. Cela dure le temps d'un Pater. La Reine a mis la main sur l'épaule de l'enfant qui est près d'elle." },
      { if: { all: [PIECE, { has: "monde:piece_mot" }] }, text: "Elle dit une phrase. Elle la dit sans l'élever, d'une voix de quelqu'un qui entre dans une chambre, et on l'entend du dernier rang : l'heure qu'il est, exactement, au quart près. Cinq mille têtes se lèvent vers le grand cadran, pour vérifier. C'était juste. Il passe sur la place une espèce de frisson, comme sur un blé." },
      { if: { all: [PIECE, { has: "monde:piece_corde" }] }, text: "Elle a dans la main une corde à cloche, avec son gland rouge. Elle lève le bras, et elle tire, une fois, de tout son poids. Rien ne sonne ; c'est une corde de théâtre. Mais cinq mille personnes ont levé la tête vers la Tour, d'un seul mouvement, et la Reine avec elles ; et pendant qu'on attendait le coup, on aurait entendu marcher une fourmi." },
      { if: { all: [PIECE, { not: { any: [{ has: "monde:piece_silence" }, { has: "monde:piece_mot" }, { has: "monde:piece_corde" }] } }] }, text: "Elle ouvre la bouche, et elle la referme. Elle n'a pas trouvé. Elle reste là, simplement, à se laisser regarder, les mains ouvertes, avec la figure de quelqu'un qui est arrivé et qui ne sait pas encore pour quoi faire. La place attend avec elle." },
      { if: PIECE, text: "La porte se referme. Personne n'applaudit. Un vieux chanoine, au premier rang, feuillette son livret avec indignation, à la recherche d'un texte qui n'y est pas. Puis la place reprend son bruit, plus bas d'un ton, et la Reine se remet en marche." },
      { if: PIECE, text: "Derrière le décor, tu aperçois Colombe, adossée à une roue de la roulotte, les deux mains sur la bouche. Maître Florizel est devant elle, sans chapeau, muet pour la première fois de sa carrière." },
      "Les onze premières portes se referment, une à une, de la main d'un machiniste. « À midi, mes enfants ! crie une voix de bonimenteur, qui a retrouvé son souffle. À midi, nous recommençons avec la cloche : une porte par coup, et la dernière au dernier ! »",
    ],
    choices: [{ back: "K13j_parvis_matin" }] },

  K13j_reine_passe: { act: "IV", title: "La Reine monte", place: "palais", ambiance: "chateau", fx: { ep: ["histoire", 400] },
    text: [
      "Elle vient à pied, de la grille du Palais à la porte de bronze, entre deux haies d'archers : trois cents pas, que les reines d'Aurime font une fois l'an, depuis qu'il y a une Tour, pour aller voir midi d'en haut. Le chanoine avait écrit onze heures, le dais, la chaise. Elle a pris une heure d'avance, pour que l'enfant monte à son pas, et elle a refusé le dais : on dit qu'elle a voulu que la petite voie le ciel.",
      "La reine Mahaut est en blanc, sans un bijou, avec le voile des veuves rejeté en arrière. Elle marche lentement. Elle règle son pas sur celui d'une petite fille de huit ans, qu'elle tient par la main.",
      { after: "monde:aelis_ecorce", text: "La princesse Aélis marche. Elle est maigre, et grise encore aux tempes ; mais elle marche sur ses deux pieds, elle regarde tout, et elle a les joues d'une enfant qui a mangé ce matin. Elle porte sous son bras libre une chose enveloppée d'un linge, carrée, qui fait un bruit de pendule. La foule, qui ne l'avait pas vue de l'hiver, pousse un grand soupir content, d'un bout à l'autre de la place." },
      { before: "monde:aelis_ecorce", text: "La princesse Aélis marche, parce qu'elle l'a exigé. Elle est grise, d'un gris de cendre fine, jusqu'aux lèvres, et elle pose ses pieds l'un devant l'autre avec l'application des gens qui comptent leurs forces. Tous les dix pas, la Reine s'arrête, sous couleur de saluer. La foule comprend. Elle se tait sur leur passage, par rangs, et des femmes pleurent sans se cacher." },
      "Derrière elles viennent maître Anthelme, sa trousse à la main, deux dames, et un page qui porte un coussin vide.",
      { after: "j:promis_reine", text: "À ta hauteur, la Reine tourne les yeux. Elle te trouve, dans cinq mille figures, du premier coup, comme on trouve la seule personne d'une salle à qui l'on doit de l'argent. Sa main gauche, celle qui est libre, se ferme, et le pouce y frotte l'annulaire, nu. Elle ne s'arrête pas. Tu as sa bague sur toi, et ce que tu lui as promis." },
      { after: "monde:reine_renonce", text: "Elle tient dans son gant un papier plié petit, où l'on devine le rouge d'un cachet. Tu sais ce qu'il porte : elle a défait hier, de sa main, ce qu'elle avait signé le douze. Elle monte pourtant. La coutume veut la Reine là-haut à midi, et elle entend dire son refus à quelqu'un, en face, dans la chambre même où il l'attend." },
      { after: "j:reine_tient", before: "monde:reine_renonce", text: "Elle a la figure fermée, et calme, des gens qui ont fini de délibérer. Tu lui as dit ce que tu pouvais ; elle a choisi sa fille. Elle monte la mettre à l'abri du temps, dans la plus haute chambre de son royaume, et elle croit qu'on lui a promis une clef pour en ressortir." },
      "Les archers présentent leurs arcs. La porte de bronze s'ouvre, à deux vantaux, sur du noir. Au seuil, l'enfant se retourne. Elle regarde la place, toute la place, les cinq mille mentons, les toits, le ciel ; elle lève sa petite main grise, et elle fait bonjour.",
      "Cinq mille mains lui répondent.",
      "La porte se referme. Tu as entendu le verrou, d'ici : un bruit net, qui a traversé toute l'esplanade.",
    ],
    choices: [{ back: "K13j_parvis_matin" }] },

  K13j_noyers_parvis: { act: "IV", title: "Près d'une rue qui descend", place: "palais", ambiance: "chateau",
    text: [
      "La rue aux Oies tombe de la place entre un cirier et un marchand de peignes, raide, pavée en dos d'âne, avec un ruisseau au milieu. Au coin, il y a une borne. Sur la borne, un homme en blouse neuve s'est mis debout, et sur les épaules de l'homme, une petite fille à deux nattes tient son père par le front.",
      "Josse Noyer a tenu parole : il est au bord. Il a trois rangs de dos devant lui, et la descente derrière. De son perchoir, Line voit le grand cadran tout entier. Elle a sa boîte de fer serrée entre son ventre et la nuque de son père, et elle ne regarde pas la Reine, ni les archers, ni le théâtre : elle regarde la grande aiguille.",
      { if: { not: ATTELE }, text: "Girard n'est pas avec eux. Tu le cherches, et tu le trouves, loin devant, contre la haie des archers, au premier rang, en chemise blanche, les cheveux plaqués : il a joué des coudes pendant une heure. Il est aussi près de la Tour qu'on peut l'être sans une clef." },
      { if: ATTELE, text: "Girard n'est pas avec eux. Il est en bas, dans un pré vide, debout sur un siège, les guides en main, à regarder la croupe d'une jument." },
      { after: "j:line_consigne", text: "Elle te voit. Elle ne fait pas un signe. Elle montre seulement, d'un doigt qui dépasse à peine de la boîte, le bas du cadran : là où sera l'aiguille." },
      { before: "j:line_consigne", text: "Elle te voit. Elle te fait bonjour, gravement, de sa main libre, par-dessus trois mille têtes ; et son père, qui sent bouger, lève les yeux, te cherche, et ne te trouve pas." },
      "Tout près d'eux, une femme vend de l'eau d'anis. Un garçon boulanger dort debout. La matinée est très douce.",
    ],
    choices: [{ back: "K13j_parvis_matin" }] },

  K13j_echelons: { act: "IV", title: "Vingt-deux, moins un", place: "palais", ambiance: "chateau",
    text: [
      "Tu fais le tour, par la ruelle, jusqu'où l'on peut reculer. La face sud donne sur des toits de couvent ; personne n'y lève les yeux, et la pierre y est plus noire, n'ayant jamais été lavée pour une fête.",
      "Ils y sont. À partir de la galerie du grand cadran, qu'on atteint par l'escalier de tout le monde, des barreaux de fer scellés dans le mur montent en ligne droite, le long d'une fenêtre étroite, jusqu'aux abat-sons. Tu les comptes, de bas en haut, en t'abritant les yeux. Vingt et un. Entre le sixième et le huitième, il y a deux trous dans la pierre, et une traînée de rouille.",
      "*LE 7E MANQUE*, avait écrit {autre}, soixante ans après, avec la lunette d'une Reine. Il manque déjà. C'est une de ces choses que tout le monde sait dans une maison, et que personne n'a réparées en soixante ans, ni dans les soixante ans d'avant.",
      "La fenêtre étroite est celle de la Chambre haute. Elle a une croisée de plomb, et une crémone, qu'on voit luire. Si la porte de là-haut se ferme par le dedans à la demie de onze heures, il reste, à qui veut arriver sous la cloche, vingt et un barreaux et une enjambée.",
      "Tu mesures l'enjambée de l'œil. Elle est grande pour quelqu'un de ta taille. Elle se fait.",
    ],
    choices: [{ back: "K13j_parvis_matin" }] },

  K13j_demie: { act: "IV", title: "La demie de dix heures", place: "palais", ambiance: "chateau",
    text: [
      "La grande aiguille descend. On ne la voit pas bouger ; on voit seulement, quand on a regardé ailleurs, qu'elle a gagné un trait. Elle arrive en bas. Dans la Tour, quelque chose se déclenche, avec un bruit de chaîne, et la Patiente dit un coup : un seul, grave, large, qui passe sur la place comme une main sur un drap.",
      "Cinq mille personnes disent *ah*, de plaisir.",
      { if: SORTIS, text: "Au coin de la rue aux Oies, sur la borne, il y a un garçon boulanger, monté là pour mieux voir. Les trois Noyer sont loin : à cette heure, une charrette bleue roule sur le chemin de Roquebise, avec huit cruches, et une petite fille qui fait sonner trois coups à une montre, contre son oreille." },
      { if: { all: [{ not: SORTIS }, { any: [{ has: "j:line_consigne" }, ATTELE] }] }, text: "Au coin de la rue aux Oies, sur la borne, il se passe une petite chose que personne ne remarque. Une enfant à deux nattes se penche à l'oreille de son père. Il la descend, à bout de bras, avec un mot de reproche ; il la pose sur le pavé. Elle lui lâche la main." },
      { if: { all: [{ not: SORTIS }, { has: "j:line_consigne" }] }, text: "Elle court. Tu la vois d'en haut, entre deux épaules : une robe du dimanche, une boîte de fer sous le bras, qui dévale la rue aux Oies par le milieu, dans le ruisseau, pour ne heurter personne. Elle court comme tu le lui as dit, sans s'arrêter pour un chien. Au tournant, pourtant, elle se retourne. C'est toi qu'elle cherche, dans cinq mille dos, et tu es trop loin pour qu'elle te trouve. Elle lève la boîte au-dessus de sa tête, une fois. Puis il n'y a plus que la rue." },
      { if: { all: [{ not: SORTIS }, { not: { has: "j:line_consigne" } }, ATTELE] }, text: "Elle en a assez. Elle a neuf ans, elle a vu le cadran, elle a vu la Reine, et elle sait qu'en bas son frère est tout seul avec une jument, ce qui vaut bien une place. Tu la vois d'en haut, entre deux épaules : une robe du dimanche, une boîte de fer sous le bras, qui descend la rue aux Oies en sautant d'un pavé sur l'autre. Josse la suit des yeux jusqu'au tournant. Il hausse les épaules, et il se retourne vers la Tour." },
      { if: { all: [{ not: SORTIS }, { not: { has: "j:line_consigne" } }, { not: ATTELE }] }, text: "Au coin de la rue aux Oies, sur la borne, Josse Noyer n'a pas bougé, et la petite est toujours sur ses épaules, les deux mains sur le front de son père. Elle regarde l'aiguille remonter. Tu sais qu'elle sortira : c'est écrit sur un registre, d'une encre de soixante ans, *rayée, sortie le jour même*. Tu ignores par quelles mains. Ce ne seront pas les tiennes." },
      "Il te reste un quart d'heure pour être à ta place. Tu quittes le bord de la foule. Tu repasses sous la voûte, et le bruit de la mer s'éteint derrière toi, d'un coup, comme lorsqu'on ferme une fenêtre.",
    ],
    choices: [{ label: "La ruelle des Sonneurs", to: "K13j_porte_fer", big: true }] },

  K13j_porte_fer: { act: "IV", title: "Le quart avant onze", place: "tour", ambiance: "chateau",
    text: [
      "La ruelle des Sonneurs tourne derrière la Tour, entre le mur de la Guilde et le pied de la maçonnerie. Elle est étroite, humide, pavée de travers ; le soleil n'y entre qu'un mois par an, et c'est ce mois-ci. La Tour, vue d'ici, n'a plus de sommet. C'est une muraille qui s'en va.",
      "La porte de fer est au fond, basse, bardée, avec un papillon ciselé dans l'anneau du heurtoir. Elle est fermée. Elle a été ouverte il y a trois quarts d'heure pour neuf garçons et un homme en gris, et refermée sur eux.",
      "À l'entrée de la ruelle, quatre hommes à ruban vert font semblant de n'être là pour rien. Ils ont pris des poses de badauds, l'épaule au mur, et ils regardent tous les quatre du même côté, ce qui les trahit. Ils attendent un vieillard. On leur a dit de le laisser passer, et de compter qui le suit.",
      { after: "j:josquin_porte", text: "Josquin est déjà là, assis par terre contre le vantail, les genoux au menton. Il te fait un signe de tête, et il remet le front sur ses genoux. Il compte quelque chose : des marches, peut-être, qu'on n'a pas encore descendues." },
      { after: "j:aymon_escalier", text: "Aymon Foliot se tient à trois pas de la porte, les mains dans le dos, avec la mine d'un garçon qu'on a mis là pour une commission. Il a son linge dans sa chemise. Il a regardé les quatre rubans verts, il en a fait le compte, et il a conclu qu'il était en minorité, ce qui, pour un Foliot, est une sensation neuve." },
      { if: DIXIEME, text: "Tu as dans ta poche une clef de bronze, tiède, avec un papillon dans l'anneau. Elle ouvre cette porte. On t'y attend à onze heures, pour porter un niveau." },
      { after: "j:vu_echelons", text: "Par-dessus le mur, en te tordant le cou, tu aperçois la face sud, et, très haut, une ligne de barreaux où il manque une dent." },
      "Tu t'assois sur une borne, dans le seul rond de soleil. Il te reste un quart d'heure. Tu sors le Cahier, tu l'ouvres sur tes genoux ; et tu t'aperçois que tu es assis{e}, à dix pas près, au pied de l'aplomb de la cloche.",
    ],
    choices: [{ label: "Écrire, une dernière fois avant la Tour", to: "B13", big: true }] },
});

module.exports = { passages: P, extras: {
  items: {
    almanach_541: { name: "Almanach de l'an 541", kind: "divers", keep: true, price: 0, desc: "Le dernier de la pile de Perrine, corné. Page de juin, une gravure du Grand Midi : la Tour est mal dessinée." },
    vis_line: { name: "Vis de Line", kind: "divers", keep: true, price: 0, desc: "La plus petite vis d'une montre morte, celle qui tient le coq du balancier. Elle ne pèse rien. « Tu seras obligé de revenir la mettre. »" },
  },
} };
