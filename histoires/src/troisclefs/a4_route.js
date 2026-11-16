// Les Trois Clefs d'Aiguemorne · act IV, the road: three days west from the Porte des Larmes to Brandelis.
// Maître Crochemore and the ring of the key of Ash, the Croix-aux-Bois and the three ways west (the highway of the
// hunt guests, the charcoal burners of the Sylve, the tail of the Dean's litter), the ferry of the Rousse, the edge
// of the forest, the first sight of the count, the village.
// Personal: a4:croch=dit|tait|montre · a4:route=chaussee|sylve|litiere · a4:passe_dix (you know the game and the
// count's manner) · a4:sentiers (the burners' paths) · a4:mot=mere|rien|compte (your last word, in the Dean's
// notebook) · a4:lettre_doyen · a4:comte_connu. Shared: monde:a4:syndic_vu (the Syndic looked at a filer's hands),
// monde:a4:doyen_reconnu (the Dean knows one of the three is on his road). Item: bons_brandelis.
// Ends at A4c_arrivee (a4_commun).
var OUEST = [{ if: { has: "a4:route=chaussee" }, to: "A4c_berline" }, { if: { has: "a4:route=sylve" }, to: "A4c_meules" }, { to: "A4c_litiere" }];
var VU = { any: [{ all: [{ role: "a3", is: "main" }, { has: "monde:a3:m_vu" }] }, { all: [{ role: "a3", is: "oeil" }, { has: "monde:a3:o_vu" }] }, { all: [{ role: "a3", is: "voix" }, { any: [{ has: "monde:a3:v_vue" }, { has: "monde:a3:doyen=soupcon" }] }] }] };
module.exports = {
  passages: {
    A4c_route: { act: "IV", title: "La Saint-Hubert", place: "rousses",
      fx: { catchup: 13, catchupWhy: "ce qu'Ossevaux t'a appris des vivants et des morts", until: 17, rest: true },
      text: [
        "On tourne le dos à la craie. La route de l'ouest monte dans des collines que le pays appelle les Rousses, et qui le sont : fougères mortes, terre de brique, bruyères couleur de vin. Après six jours de blanc, on a l'impression d'entrer dans un tableau que l'on aurait repeint.",
        "C'est la Saint-Hubert. Dans chaque village, on bénit les chiens devant l'église ; le curé passe entre les meutes avec son goupillon, et les bêtes éternuent. On vous offre du pain en forme de cor. Personne ne vous demande d'où vous venez : en novembre, sur cette route, tout ce qui marche va aux Chasses de M. le Connétable.",
        "Maître Crochemore marche devant. Il n'a pas dit dix mots depuis la porte des Larmes. Il n'a pas tiré sa montre une seule fois, et c'est cela, plus que le silence, qui inquiète.",
        "Le soir, vous couchez dans une grange à foin, au-dessus d'un ruisseau. Il reste assis à la porte, le dos au chambranle, à regarder venir la nuit sur les Rousses. Tu t'assieds de l'autre côté du seuil.",
      ],
      choices: [
        { label: "« Votre grand-tante n'était pas religieuse, Maître. »", to: "A4c_croch_larme", fx: { set: { "a4:croch": "dit" } } },
        { label: "Te taire avec lui, aussi longtemps qu'il voudra", to: "A4c_croch_larme", fx: { set: { "a4:croch": "tait" }, conf: { crochemore: 10 } } },
        { label: "Lui mettre dans la main la clef de Cendre : « Regardez-la. Vous ne l'avez pas regardée. »", to: "A4c_croch_larme", fx: { set: { "a4:croch": "montre" } } },
      ] },
    A4c_croch_larme: { act: "IV", title: "L'anneau", place: "rousses", ambiance: "nuit",
      text: [
        { if: { has: "a4:croch=dit" }, text: "« Non. » Il l'a dit tout de suite, sans tourner la tête, comme un homme qui attendait qu'un autre le dise pour s'en décharger. « Elle n'était pas religieuse. On n'enterre pas une religieuse de nuit, sans nom, entre quatre murs. On enterre ainsi une chose que l'on a cachée. »" },
        { if: { has: "a4:croch=tait" }, text: "Vous restez là. La nuit monte du ruisseau. Il se passe un quart d'heure, que personne ne mesure. C'est lui qui parle, à la fin, et à voix presque basse : il a toujours parlé pour être écouté, et il découvre ce soir que l'on peut parler à quelqu'un qui se tait." },
        { if: { has: "a4:croch=montre" }, text: "Il la prend. Il la tient un moment sans la regarder, par politesse pour toi, puis par peur. Puis il tire sa loupe." },
        "Il a la clef de Cendre sur son genou, dans le dernier jour.",
        "« Les trois clefs sont de sa main. Je le sais par ses cahiers, où tout est daté. Il a fait la clef de Fer la première, au printemps : l'anneau en est rond, tout uni, un anneau d'ouvrier. Il a fait celle de Sang à la Saint-Jean, avec un anneau en cœur ; c'était une politesse au Connétable d'alors, qui payait bien. »",
        "Son pouce passe sur la larme de fer gris, du côté où quatre évêques l'ont usée.",
        "« Celle-ci est la dernière. Il l'a forgée en novembre. Trois semaines après que l'on eut fermé la porte de la Tour. »",
        "Il se tait. On entend le ruisseau.",
        "« On m'a appris, aux Heures, qu'il avait fait cet anneau en larme par égard pour l'Église, qui pleure ses morts. Je l'ai répété moi-même, dans un discours, en l'an du centenaire. » Il a un petit rire qui ne rit pas. « Il n'a jamais eu d'égards pour l'Église. Il a plaidé onze ans contre le chapitre pour une facture de carillon. »",
        "Il te rend la clef, ou il la remet dans le chiffon ; il se lève ; il va se coucher dans le foin tout habillé, ses souliers à boucles aux pieds.",
        { if: { has: "a4:croch=tait" }, text: "En passant, il pose la main sur ton épaule, une seconde, maladroitement, comme on règle une montre qui n'est pas à soi." },
      ],
      choices: [{ label: "Dormir, et marcher jusqu'au carrefour", to: "A4c_croix", big: true }] },

    A4c_croix: { act: "IV", title: "La Croix-aux-Bois", place: "rousses",
      fx: { until: 10 },
      text: [
        "Le lendemain, vers dix heures, la route arrive à une croix de pierre où l'on a cloué des bois de cerf : il y en a trente, de toutes tailles, verdis, moussus, et un tout neuf, encore sanglant à la meule. C'est la Croix-aux-Bois. Brandelis est à deux jours.",
        "Trois chemins en partent, et tous trois y mènent.",
        "Tout droit, **la chaussée du Roi-Chasseur** : une route large, ferrée, où passe depuis l'aube ce qui va aux Chasses. Des carrosses, des fourgons de malles, des chevaux de main sous leurs couvertures, un marchand de plumes avec son éventaire sur le ventre. On y avance dans la poussière des autres, et l'on y entend tout.",
        "À droite, **le chemin des Meules** : une sente qui plonge dans la Sylve, entre des chênes, vers les fumées bleues des charbonniers. On y gagne une demi-journée. On y couche dans les bois, où il y a, dit-on, des loups que les Chasses ont dérangés.",
        "À gauche, par les villages, **le chemin des Calvaires**. Une poussière y monte, lente, violette dans le soleil : douze hallebardes, une litière fermée entre deux mules, et derrière, à distance respectueuse, une traîne de cinquante mendiants. Monseigneur d'Ossevaux se rend aux Chasses, à petites journées, et fait l'aumône à chaque croix.",
        "La maison Berlue a une règle pour les routes : on ne voyage pas en troupe quand on est quatre et qu'on cherche trois. Chacun prend son chemin ; on se retrouve au bac de la Rousse.",
      ],
      choices: [
        { label: "La chaussée, dans la poussière des carrosses", to: "A4c_berline", fx: { set: { "a4:route": "chaussee" } } },
        { label: "Le chemin des Meules, par la Sylve", to: "A4c_meules", fx: { set: { "a4:route": "sylve" } } },
        { label: "Le chemin des Calvaires, dans la traîne de Monseigneur", to: "A4c_litiere", fx: { set: { "a4:route": "litiere" } } },
      ] },

    // ───────────────────────────── The highway ─────────────────────────────
    A4c_berline: { act: "IV", title: "Une berline prune", place: "rousses",
      fx: { until: 15 },
      text: [
        "La chaussée du Roi-Chasseur traverse un gué, au creux d'un vallon. Il a plu dans la nuit ; le gué est une fondrière ; et il y a dedans, jusqu'aux moyeux, une berline couleur de prune, à six chevaux, qui a voulu passer la première.",
        "Tu la reconnais avant d'avoir vu les armes sur la portière : un marteau et une clef. Tu as vu cette voiture dans une cour, à Ferrières, sous une remise.",
        "Derrière, toute la route attend. Un cocher en livrée hurle ; deux laquais poussent sans conviction, par égard pour leurs bas. Par la glace baissée, une voix cordiale, qui additionne, offre dix sous par paire de bras.",
        "Vingt rouliers s'y mettent. Si tu restes seul{e} au bord du fossé, tu seras la seule personne de cette route à qui dix sous ne font pas envie, et l'on te regardera.",
      ],
      choices: [
        { label: "Pousser à la roue d'arrière, la tête basse, tout contre la caisse",
          test: { dom: "discretion", diff: 10, label: "Avoir l'air d'un roulier, à deux pieds du Syndic", help: [{ if: { voie: "comedien" }, v: 15 }, { if: { voie: "bretteur" }, v: 5 }, { if: { has: "monde:a2:v_soupcon" }, v: -10 }, { if: { has: "monde:a2:clef=prise" }, v: -10 }, { if: { has: "a1:signalement" }, v: -5 }] },
          win: { fx: { gold: 10, flag: "a4:berline", clue: "r_quarante", ep: ["perso", 1000] }, to: "A4c_berline_pousse" }, lose: { fx: { gold: 10, flag: ["a4:berline", "monde:a4:syndic_vu"], clue: "r_quarante" }, to: "A4c_berline_pousse" } },
        { label: "Prendre un cheval de volée par la bride, loin devant, où personne ne regarde", fx: { gold: 10, ep: ["perso", 400] }, to: "A4c_cor" },
      ] },
    A4c_berline_pousse: { act: "IV", title: "Quarante mille raisons", place: "rousses",
      text: [
        "Tu pousses. La caisse est à hauteur de ton oreille, et la glace est baissée : on y parle sans se gêner, comme on parle devant des chevaux.",
        "« … et je vous dis, moi, qu'il ne signera pas. » C'est une voix jeune, molle, bien élevée. Maître Hyacinthe Belorgey a de l'inquiétude. « Vous ne le connaissez pas comme je le connais. Il m'a appelé *mon gendre* devant ses piqueurs, pour rire. »",
        "« Je le connais mieux que vous : je le paie. » La voix du Syndic est d'une bonne humeur de créancier. « Il signera, parce que j'ai dans ce portefeuille quarante mille raisons, toutes de sa main, avec un B qui tient la moitié de la feuille. Un homme qui signe si grand finit par signer ce qu'on veut. »",
        { if: { has: "monde:celeste:libre" }, text: "« Et Céleste ? » « Quoi, Céleste ? » « Elle a laissé ses souliers sur une borne. Les pointes vers la maison. On me l'a écrit. » Un silence. « Vous serez Gouverneur perpétuel dans vingt-sept jours, Hyacinthe, et vous me parlez d'une paire de souliers. Elle reviendra. Elles reviennent toutes, quand le mari est quelque chose. »" },
        "« Ôtez votre coude de cet étui. » Le ton a changé d'un coup. « Je vous ai déjà dit de ne pas y toucher. Il y a là-dedans douze cents lignes, et un blanc, qui ont coûté plus cher que vous. »",
        { outcome: "win", text: "La roue sort de l'ornière avec un bruit de botte. Tu reçois tes dix sous d'un laquais, sans lever le nez, et tu retournes à ton fossé. Dans la berline qui s'éloigne, on a relevé la glace." },
        { outcome: "lose", text: "La roue sort de l'ornière. Un laquais te tend tes dix sous ; et comme tu avances la main, une tête ronde, rose, à trois mentons, paraît à la portière, pour voir ce que lui coûte la boue. Les petits yeux vifs descendent sur tes doigts, s'y arrêtent, remontent. « Des mains de limeur », dit Maître Quincarnon, pensivement, à personne. La glace remonte. Il n'a rien ordonné. Il compte : cela lui prend toujours un moment." },
      ],
      choices: [{ label: "Laisser passer la poussière, et marcher jusqu'au relais", to: "A4c_cor", big: true }] },
    A4c_cor: { act: "IV", title: "Le Cor d'Argent", place: "rousses", ambiance: "taverne",
      fx: { until: 21, rest: true },
      text: [
        "Le relais du Cor d'Argent a quarante chevaux à l'écurie et pas un lit : on couche les gens de qualité dans leurs voitures, et les autres sur les tables, quand elles sont libres. Elles le sont tard. On y joue.",
        "Il y a là, près du feu, un homme en habit d'officier dont on a décousu les galons. Il est seul avec un cornet de cuir, trois dés, et une liasse de petits papiers qu'il étale et recompte comme un avare ses pièces. Tu l'as vu, un soir, à une table de marbre, entre des pendules.",
        "« Lieutenant de Vaugrenant », dit-il sans que tu aies rien demandé. « Ci-devant lieutenant. J'ai vendu ma charge pour suivre un homme qui me doit trois cent douze écus. » Il te montre la liasse. Chaque papier est déchiré d'un carnet, et porte un B qui tient la moitié de la feuille. « Il me les doit depuis la Saint-Fer. Son intendant pleure, et ne paie plus. Je vais à Brandelis pour les lui rejouer : c'est la seule monnaie qu'il respecte. »",
        "Il secoue son cornet. « Vous savez le passe-dix ? »",
      ],
      choices: [
        { label: "T'asseoir, et te le faire montrer comme le joue M. le Connétable", fx: { flag: "a4:passe_dix", gold: -10, ep: ["perso", 800] }, to: "A4c_cor_jeu" },
        { label: "Lui racheter sa liasse : dix écus comptant, pour trois cent douze en papier", if: { gold: { min: 200 } }, why: "Il en veut dix écus, et sonnants.", fx: { gold: -200, item: "bons_brandelis", flag: "a4:passe_dix", ep: ["perso", 800] }, to: "A4c_cor_jeu" },
        { label: "Dormir sur un banc, ton sac sous la tête", to: "A4c_bac" },
      ] },
    A4c_cor_jeu: { act: "IV", title: "La main gauche", place: "rousses", ambiance: "taverne",
      text: [
        "Le passe-dix se joue à trois dés. Celui qui tient le cornet annonce qu'il passera dix ; on met contre lui ; il jette. Onze et plus, il gagne. Dix et moins, il perd, et passe le cornet. C'est un jeu d'enfant, et l'on s'y ruine comme à un jeu d'homme.",
        "« Il jette d'un tour de poignet, dit Vaugrenant, que voici. Cela ne change rien aux dés, cela impressionne la table. Il ne triche pas. Je le regrette : un tricheur, on le tue, et l'on est payé sur la succession. »",
        "Il te fait jouer vingt coups, à un sou. Tu perds dix sous, que tu tiens pour bien placés.",
        "« Autre chose. Quand il a du jeu dans la tête, quand il va doubler, il prend les dés de la main gauche. Il ne le sait pas. J'ai mis six mois et ma charge à le voir. Si vous le voyez changer de main, sortez de la table, ou mettez tout : cela dépend de ce que vous êtes venu{e} faire. »",
        { if: { item: "bons_brandelis" }, text: "Il te regarde ranger la liasse dans ta chemise. Dix écus d'or sont devant lui ; il les touche du doigt, l'un après l'autre. « Vous venez d'acheter trois cent douze écus de sa parole. Elle vaut ce qu'il vaut ce soir-là. Je vous souhaite de le trouver dans un bon soir. »", else: "Il range sa liasse. « Si vous le voyez avant moi, dites-lui que Vaugrenant arrive. Il rira. C'est sa manière de saluer ses créanciers. »" },
      ],
      choices: [{ label: "Dormir trois heures, la tête sur la table", to: "A4c_bac", big: true }] },

    // ───────────────────────────── The Sylve ─────────────────────────────
    A4c_meules: { act: "IV", title: "Les Meules", place: "sylve", ambiance: "foret",
      fx: { until: 17 },
      text: [
        "La Sylve commence d'un coup, comme un mur. On passe d'un jour roux à une ombre verte ; les chênes ont trois cents ans, et des racines où l'on logerait une famille. La sente tourne entre eux sans se presser.",
        "Vers le soir, on sent la fumée avant de la voir. Les charbonniers ont leur clairière au bord d'un ru : six meules, hautes comme des huttes, couvertes de terre, qui fument par le sommet d'une fumée bleue, lourde, sucrée. Autour, des gens noirs jusqu'aux yeux, qui ne dorment jamais plus de deux heures, parce qu'une meule qu'on ne veille pas prend feu ou s'étouffe.",
        "Celle qui commande est une femme sans âge, un côté de la figure cuit et luisant comme une pomme au four. On l'appelle la Brûlée. Elle te regarde venir, les poings aux hanches.",
        "« Tu vas au château. » Elle crache. « Tout va au château. Les cerfs y vont, les chiens derrière, les messieurs derrière les chiens, et tout ça passe sur mes meules. L'an dernier, il m'en a crevé deux au galop. Il est revenu le lendemain, tout seul, me les payer. En papier. » Elle tire de son corsage un chiffon graisseux, signé d'un B énorme. « Tu sais lire ? Dis-moi ce que ça vaut. »",
      ],
      choices: [
        { label: "« Douze écus, la mère. Si son intendant les a. »", fx: { flag: "a4:brulee", ep: ["perso", 500] }, to: "A4c_meules_nuit" },
        { label: "Lui échanger son papier contre douze écus d'or, sans discuter", if: { gold: { min: 240 } }, why: "Douze écus : il faudrait les avoir.", fx: { gold: -240, flag: ["a4:brulee", "a4:brulee_payee"], item: "bons_brandelis", ep: ["perso", 900] }, to: "A4c_meules_nuit" },
      ] },
    A4c_meules_nuit: { act: "IV", title: "Ce que les Chasses dérangent", place: "sylve", ambiance: "nuit",
      text: [
        { if: { has: "a4:brulee_payee" }, text: "Elle compte l'or dans sa main noire, deux fois, puis le mord. « C'est la première fois qu'un B me rapporte quelque chose. » Tu as désormais ta place au feu, une écuelle, et douze personnes qui te regardent comme on regarde une curiosité.", else: "« Douze écus. » Elle replie le chiffon avec soin. « Je le garde. Un jour, il aura de l'or, ou un fils, ou un héritier ; on est patient, dans le charbon. » On te fait une place au feu, et l'on te tend une écuelle." },
        "On mange des châtaignes et du lard. On t'explique la forêt, que tu n'avais pas demandée : où sont les relais des chiens, où le cerf ruse, pourquoi il finit toujours à l'eau.",
        "Vers minuit, les chiens des charbonniers se lèvent tous ensemble, le poil droit, et se taisent. C'est le silence qui réveille la clairière.",
        "« Les loups, dit la Brûlée, sans élever la voix. Ils étaient au Val-Noir, ils ne gênaient personne. On leur a couru dessus trois jours, avec des cors ; ils sont venus voir où il y a du feu et pas de trompe. » Elle ramasse une fourche. « Ils veulent l'âne. Ils prendront un gosse, s'ils le trouvent avant. »",
        "Il y en a quatre paires d'yeux, vertes, au bord de la lumière des meules.",
      ],
      choices: [
        { label: "Prendre un brandon, et te mettre devant l'âne",
          fight: { title: "Les loups du Val-Noir", enemies: [{ id: "loup_sylve", n: 3 }], win: { fx: { flag: "a4:sentiers", ep: ["perso", 1400] }, to: "A4c_meules_matin" }, lose: { fx: { pv: 2, flag: "a4:sentiers" }, to: "A4c_meules_matin" } } },
      ] },
    A4c_meules_matin: { act: "IV", title: "Les faux-fuyants", place: "sylve", ambiance: "foret",
      fx: { rest: true },
      text: [
        { outcome: "win", text: "Il en reste deux sur le carreau de la clairière, que les gamins dépouillent avant le jour. Le troisième est parti en traînant une patte. L'âne brait encore à midi." },
        { outcome: "lose", text: "Tu te réveilles près d'une meule, la jambe bandée de toile noire, avec le goût du sang. On te dit que tu en as tenu deux, le temps que les hommes arrivent avec les fourches, et qu'un charbonnier n'aurait pas fait mieux ; ce qui, ici, se dit rarement à quelqu'un de propre." },
        "La Brûlée te mène elle-même jusqu'au bout de son bois, par des sentes que tu n'aurais jamais prises pour des sentes : un houx, un chêne foudroyé, une pierre levée. Elle les nomme en marchant. Les veneurs appellent cela des *faux-fuyants* : les chemins par où l'on coupe une chasse, et par où une bête, ou une personne, sort de la forêt sans que les chiens la voient passer.",
        "« De la pierre levée, tu vois l'étang des Abois. C'est là que tout finit, cerf ou sanglier. De l'étang, tu vois le château. Entre les deux, il y a une poterne, sous les saules, par où il sort la nuit quand il a trop perdu. » Elle te regarde. « Je ne te demande pas ce que tu vas y faire. Je te dis seulement : s'il doit lui arriver quelque chose, à celui-là, que ce soit après qu'il m'aura payé mes meules. »",
      ],
      choices: [{ label: "Descendre vers la rivière", to: "A4c_bac", big: true }] },

    // ───────────────────────────── The Dean's tail ─────────────────────────────
    A4c_litiere: { act: "IV", title: "La traîne de Monseigneur", place: "rousses",
      fx: { until: 16 },
      text: [
        "On appelle cela la traîne : tout ce qui suit un évêque en voyage, à cinquante pas, dans sa poussière. Des aveugles conduits par des enfants. Un cul-de-jatte dans une caisse à roulettes. Des femmes avec des nourrissons loués pour la route. Deux faux pèlerins, un vrai. Tu t'y mets avec un bâton, une besace, et de la boue jusqu'aux sourcils ; personne ne te demande ton nom, mais on te fait comprendre à coups de coude que le rang se mérite.",
        "Devant, la litière avance au pas de ses mules, rideaux violets tirés. Douze Suisses noirs l'encadrent. Un prêtre maigre, à besicles, suit sur un mulet, une écritoire pendue au cou. Derrière lui, quatre hommes portent sur un brancard une petite caisse de chêne, cadenassée, avec les égards que l'on a pour un enfant malade.",
        "À chaque calvaire, tout s'arrête. Les rideaux s'ouvrent. Monseigneur descend, s'agenouille dans la poussière, prie le temps d'un *De profundis* ; puis il se relève, se fait apporter une bourse, et fait l'aumône lui-même, de sa main gantée de fil blanc.",
        "Il la fait d'une façon que tu n'as vue à personne. Il s'arrête devant chacun. Il demande le nom. Et il pose une question, toujours la même, à voix si douce qu'il faut se pencher :",
        "« Si vous deviez mourir ce soir, mon enfant, que diriez-vous ? »",
        "L'aumônier écrit la réponse. Monseigneur donne un sou, et passe. La file avance. Il y a encore six personnes entre ses gants et toi.",
      ],
      choices: [
        { label: "Rester dans la file, la figure sous la boue",
          test: { dom: "discretion", diff: 5, label: "Être un pauvre parmi cinquante, sous ces yeux-là", help: [{ if: { voie: "comedien" }, v: 15 }, { if: { voie: "rebouteux" }, v: 5 }, { if: VU, v: -20 }, { if: { has: "monde:cendre:sait" }, v: -5 }] },
          win: { fx: { ep: ["perso", 1000] }, to: "A4c_litiere_mot" }, lose: { fx: { flag: "monde:a4:doyen_reconnu" }, to: "A4c_litiere_mot" } },
        { label: "Sortir du rang, pour un besoin, et le laisser passer", to: "A4c_litiere_nuit" },
      ] },
    A4c_litiere_mot: { act: "IV", title: "Un sou pour un mot", place: "rousses",
      text: [
        "Il est devant toi. Il sent le buis. De près, il est plus vieux que dans sa crypte, et plus las ; il a la peau des gens qui vivent aux cierges.",
        { outcome: "lose", text: "Ses yeux très clairs se posent sur ta figure, et y restent le temps d'une respiration de trop. Il ne tressaille pas. Il a seulement, au coin de la bouche, cette douceur qui lui vient devant une chose retrouvée. « Nous nous sommes vus, je crois. Vous aviez une autre figure, ou la même sous autre chose. » Il n'élève pas la voix ; les Suisses ne bougent pas. « Soyez tranquille. Je ne chasse pas sur la route d'autrui. Brandelis est à M. le Connétable : j'y suis invité, et vous aussi, sans doute, à votre façon. »" },
        { outcome: "win", text: "Ses yeux très clairs passent sur ta boue, ta besace, ton bâton. Ils ne s'arrêtent pas. Tu es un pauvre, et il en a vu cinquante depuis ce matin." },
        "« Votre nom, mon enfant ? »",
        "Tu en dis un. L'aumônier l'écrit.",
        "« Si vous deviez mourir ce soir, que diriez-vous ? »",
        "On ne ment pas facilement à cette question-là. Elle va chercher la réponse plus bas que le mensonge.",
      ],
      choices: [
        { label: "« Je dirais : *dites à la vieille que j'ai fait comme elle a dit.* »", fx: { set: { "a4:mot": "mere" } }, to: "A4c_litiere_sou" },
        { label: "« Je ne dirais rien, Monseigneur. J'écouterais. »", fx: { set: { "a4:mot": "rien" } }, to: "A4c_litiere_sou" },
        { label: "« Je dirais : *il en manque une.* »", fx: { set: { "a4:mot": "compte" } }, to: "A4c_litiere_sou" },
      ] },
    A4c_litiere_sou: { act: "IV", title: "Le carnet de route", place: "rousses",
      text: [
        { if: { has: "a4:mot=mere" }, text: "Il incline la tête. « *Comme elle a dit.* C'est la réponse d'une personne qui a été élevée. On en rencontre peu sur les routes. » L'aumônier écrit." },
        { if: { has: "a4:mot=rien" }, text: "Il te regarde avec une attention nouvelle. « C'est ce que j'ai fait toute ma vie. J'ai écouté. Vous seriez surpris de ce que disent les gens, quand on les laisse finir. » L'aumônier hésite, la plume en l'air. « Écrivez : *rien*. C'est une réponse. »" },
        { if: { has: "a4:mot=compte" }, text: "Il a un mouvement des paupières, à peine. « *Il en manque une.* Une quoi, mon enfant ? » Tu ne réponds pas. « Peu importe. Il manque toujours quelque chose, à la fin, dans le compte de quelqu'un. » L'aumônier écrit ; et Monseigneur, pour la première fois de la journée, relit par-dessus son épaule." },
        "Il te met un sou dans la main. Son gant est tiède.",
        { if: { has: "monde:a4:doyen_reconnu" }, text: "« Je garderai celui-ci à part », dit-il, de la réponse ou de toi. « Nous nous reverrons avant que vous ayez l'occasion de le dire pour de bon. Je le souhaite, du moins. Je n'aime pas que l'on meure loin de moi. »" },
        "Il passe au suivant. Derrière lui, sur le brancard, la petite caisse de chêne attend qu'on la reprenne. Elle a la longueur d'un pied, et un cadenas qui en vaut dix fois le bois.",
      ],
      choices: [{ label: "Suivre la traîne jusqu'au soir", to: "A4c_litiere_nuit", big: true }] },
    A4c_litiere_nuit: { act: "IV", title: "Un homme qui écrit debout", place: "rousses", ambiance: "nuit",
      fx: { until: 22, rest: true },
      text: [
        "Monseigneur couche chez un curé. La traîne couche dans le cimetière, entre les croix, autour d'un feu de genêts ; elle y est chez elle.",
        "L'aumônier, lui, ne couche pas. Tu le vois, par la fenêtre basse du presbytère, debout devant un pupitre de voyage, qui écrit sous la dictée de quelqu'un que tu ne vois pas. Il sable. Il plie. Il cachette, d'un cachet violet. Un Suisse attend à la porte, botté, la bride d'un cheval au bras.",
        "La lettre est sur l'appui de la fenêtre, le temps que la cire prenne. La fenêtre est ouverte, à cause de la fumée d'un poêle.",
      ],
      choices: [
        { label: "Passer le bras, et la lire à la lueur du poêle avant que la cire soit dure",
          test: { dom: "discretion", diff: 10, label: "Lire une lettre d'évêque sur un appui de fenêtre", help: [{ if: { voie: "crocheteur" }, v: 15 }, { if: { voie: "coureur" }, v: 10 }, { if: { voie: "alchimiste" }, v: 5 }] },
          win: { fx: { flag: "a4:lettre_doyen", clue: "s_lettre_doyen", ep: ["perso", 1200] }, to: "A4c_litiere_lettre" }, lose: { fx: { pv: -3 }, to: "A4c_litiere_lettre" } },
        { label: "Rester au feu des pauvres, et écouter ce qu'ils savent", fx: { ep: ["perso", 400] }, to: "A4c_bac" },
      ] },
    A4c_litiere_lettre: { act: "IV", title: "Un cachet violet", place: "rousses", ambiance: "nuit",
      text: [
        { outcome: "lose", text: "Tu as la main sur le papier quand une autre main, gantée de buffle, s'abat sur ton poignet par le dedans. Le Suisse n'était pas à la porte : il y en avait deux. Tu t'arraches, tu roules entre les tombes, tu perds ta besace et un peu de peau. Derrière toi, la voix douce dit, de la chambre : « Laissez. C'est un pauvre qui avait froid. Fermez seulement cette fenêtre. »" },
        { outcome: "win", text: "La cire est molle. Tu soulèves le pli de l'ongle, sans la rompre, et tu lis à l'envers, à la lueur du poêle, dix lignes d'une écriture fine et penchée." },
        { outcome: "win", if: { has: "monde:cendre:sait" }, text: "*À Monsieur le Connétable, en son château. Mon cher comte, il se présentera chez vous, ces jours-ci, sous quelque habit, trois personnes et un vieil homme, que vos gens prendront pour ce qu'ils voudront paraître. Je vous prie de les laisser entrer, et de veiller à ce qu'ils ne sortent point : ils m'ont pris une chose à laquelle je tiens, et ils viennent vous prendre la pareille. N'en dites rien au Syndic. Il compte trop bien, et il nous compterait.*" },
        { outcome: "win", if: { not: "monde:cendre:sait" }, text: "*À Monsieur le Connétable, en son château. Mon cher comte, je vous apporte ma clef, comme il est convenu, pour la montrer aux deux vôtres. Je vous prierai de me montrer la vôtre de près : j'ai lieu de craindre qu'il se promène dans le pays une main fort habile, et que notre ami de Ferrières ait été volé sans le savoir. N'en dites rien au Syndic. Il compte trop bien, et il nous compterait.*" },
        { outcome: "win", text: "Tu rabats le pli. Tu retires ton bras. Le Suisse entre, prend la lettre, sort ; on entend un cheval partir au trot sur la route de Brandelis. Elle y sera demain. Tu y seras après-demain." },
      ],
      choices: [{ label: "Dormir entre deux croix, et repartir avant la litière", to: "A4c_bac", big: true }] },

    // ───────────────────────────── The ferry, the forest, the count ─────────────────────────────
    A4c_bac: { act: "IV", title: "Le bac de la Rousse", place: "bac", ambiance: "eau",
      fx: { until: 11 },
      text: [
        "La Rousse est une rivière lente, couleur de thé, qui sépare les collines de la forêt. On la passe sur un bac à traille : un radeau de chêne, une corde d'une rive à l'autre, et un passeur qui hale en racontant.",
        "Vous vous y retrouvez à quatre, vers onze heures, venus par trois chemins, sans vous saluer.",
        { if: { has: "monde:douce:dette" }, text: "Le passeur vous compte, s'arrête sur l'habit puce de Maître Crochemore, et remet ses sous dans sa poche. « C'est payé. Trois et un horloger : on m'a dit que vous viendriez. Une dame en deuil, hier, avec un homme à qui il manque des doigts. Elle a payé pour quatre, d'avance, et elle avait l'air de quelqu'un qui règle une note chez le boucher. » Deux sous par tête. Elle a commencé de rembourser par la petite monnaie." },
        { if: { has: "monde:douce:rancune" }, text: "Il n'y a pas de bac. Il y a le passeur, assis sur la berge, qui contemple une corde coupée dont le bout trempe dans l'eau, et son radeau échoué trois cents pas plus bas, dans les saules. « Une dame en deuil, hier, avec un homme à qui il manque des doigts. Je les ai passés. Arrivée de l'autre côté, elle a sorti un couteau, et elle a coupé ma traille. Elle a dit : *c'est pour ceux qui viennent derrière.* Elle m'a laissé un écu pour la corde. » Vous passez à gué, plus haut, dans l'eau de novembre, jusqu'à la poitrine, avec un horloger sur les épaules." },
        { if: { all: [{ not: "monde:douce:dette" }, { not: "monde:douce:rancune" }] }, text: "Le passeur prend ses deux sous par tête, et hale. Il a passé depuis trois jours, dit-il, la moitié de la noblesse du pays, un marchand de plumes, quatorze chiens dans un fourgon, et un évêque n'est pas encore venu, qu'on annonce." },
        { if: { has: "monde:cadenas:doute2" }, text: "« Et le prévôt d'Aiguemorne ? » demande Maître Crochemore, négligemment. Le passeur n'a pas vu de prévôt. Il est donc derrière vous. Il a dit qu'il avait à faire à Brandelis ; un homme de cette sorte ne le dit pas pour meubler." },
        "De l'autre rive, la Sylve commence d'un coup, comme un mur.",
      ],
      choices: [{ label: "Entrer sous les arbres", to: "A4c_lisiere", big: true }] },
    A4c_lisiere: { act: "IV", title: "La Sylve", place: "sylve", ambiance: "foret",
      fx: { until: 15 },
      text: [
        "On marche tout le reste du jour sous des chênes. La route y devient une allée, droite, large à passer quatre chevaux de front, que les comtes de Brandelis entretiennent depuis trois siècles pour pouvoir galoper chez eux. De loin en loin, un poteau à bras, peint aux armes : une tour d'or sur champ de gueules. Chaque bras porte le nom d'un carrefour : le Roi-Mort, la Belle-Biche, les Abois.",
        "Vous l'entendez vers trois heures. C'est d'abord très loin, à gauche, une note longue, cuivrée, qui monte et qui retombe ; puis une autre qui lui répond ; puis, dessous, un bruit que tu prends pour le vent, et qui est la voix de soixante chiens.",
        "« Le bien-aller », dit Maître Crochemore, qui s'est arrêté. Il a parlé pour la première fois de la journée, et il en a l'air surpris. « Ils sonnent le bien-aller : la bête est devant, et l'on galope. Mon père avait un carillon qui le jouait, pour un duc. »",
        "Le bruit vient. Il vient vite.",
      ],
      choices: [{ label: "Vous ranger contre les arbres", to: "A4c_hallali", big: true }] },
    A4c_hallali: { act: "IV", title: "L'hallali", place: "sylve", ambiance: "foret",
      text: [
        "Le cerf saute dans l'allée à trente pas de vous. C'est un daguet, jeune, noir de sueur, la langue pendante ; il vous voit, bronche, et se jette de l'autre côté, vers une mare que l'on devine entre les troncs. Il y entre jusqu'au poitrail, et se retourne.",
        "Les chiens arrivent comme une eau. Puis les chevaux : dix, vingt, des habits cramoisis, des trompes en sautoir, une dame en amazone qui rit, un abbé. Ils se rangent au bord de la mare. Personne ne descend.",
        "Un seul homme met pied à terre. Il a jeté sa bride à un piqueur sans regarder. Il est grand, large, la barbe en pointe, une cicatrice au sourcil ; il a des bottes jusqu'aux cuisses, et il entre dans l'eau avec, sans ralentir, comme on entre chez soi. Les chiens s'écartent. Le cerf baisse la tête.",
        "Cela dure le temps de le dire. Le comte de Brandelis sert son cerf lui-même, à la dague, d'un seul coup, derrière l'épaule ; il le soutient pendant qu'il tombe, pour qu'il ne se noie pas en mourant ; et il ressort de la mare trempé jusqu'à la ceinture, la bête traînée par un bois, en riant d'un rire de cour de château.",
        "« Sonnez-moi ça ! Et qu'on donne aux chiens : ils l'ont mieux gagné que nous. »",
        "Les trompes sonnent l'hallali. Toute la forêt le répète. Il secoue ses manches, rejette ses cheveux, et c'est alors qu'il vous aperçoit, quatre piétons crottés contre un chêne.",
      ],
      choices: [{ label: "Ôter ton chapeau", to: "A4c_comte", big: true }] },
    A4c_comte: { act: "IV", title: "Trois heures dix", place: "sylve", ambiance: "foret",
      fx: { meet: "brandelis" },
      text: [
        "« Qu'est-ce que c'est que ça ? Des pèlerins ? Vous vous trompez de saint : ici, c'est Hubert, et il ne fait de miracles que pour les chiens. »",
        "Maître Crochemore fait trois pas dans l'allée. Il a ôté son chapeau, redressé ses favoris, et retrouvé d'un coup, devant un auditoire, tout ce que la route lui avait pris.",
        "« Zéphyrin Crochemore, monsieur le comte, maître horloger d'Aiguemorne, président de l'Académie des Heures. Je suis l'arrière-petit-fils de Maître Aubry, qui a fait l'horloge de votre tour, et son Veneur de bronze qui sonne du cor. On me dit qu'elle est arrêtée. Je viens la voir. Je ne l'ai jamais vue : c'est une honte pour ma maison, et, si elle est muette, une honte pour la vôtre. »",
        "Le comte le regarde. Il a cessé de rire. L'eau de la mare lui coule des bottes.",
        "« Elle s'est arrêtée la nuit où ma mère est morte. À trois heures dix. Il y a onze ans. » Sa voix sonore a baissé d'un ton. « Je n'ai laissé personne y toucher. Trois horlogers sont venus ; j'en ai fait jeter un dans l'étang. »",
        "« C'étaient des horlogers de province », dit Maître Crochemore.",
        "Il y a un silence, où l'on entend manger les chiens. Puis le comte éclate de rire, et toute sa suite avec lui, par contagion.",
        "« Un Crochemore ! Soit. Vous logerez dans la tour, avec vos gens. Vous aurez ce qu'il vous faut. Si elle sonne pour le bal, je vous couvre d'or ; en papier, mais j'y mets ma parole. Si vous me la cassez, l'étang est toujours là. » Il remonte en selle d'un seul temps, trempé, superbe.",
        { if: { all: [{ has: "a1:v_sang" }, { has: "monde:a1:invite_chasses" }] }, text: "Ses yeux passent sur vous trois, et reviennent à toi. Il fronce son sourcil coupé. « Vous, je vous ai vu{e}. Ne me dites pas où : c'était à une table. La table de marbre ! Un joueur, qui porte la trousse d'un horloger ! » Il est enchanté. « Venez à la mienne, un de ces soirs. On verra laquelle de vos deux mains ment. »" },
        "Son col s'est ouvert dans l'eau. Sous la chemise collée, à la naissance de la poitrine, on voit la ligne d'une chaîne, et le relief de quelque chose qui a la taille d'un doigt.",
        "Il a suivi ton regard, ou il a eu froid. Il referme son pourpoint d'une main, tourne bride, et la chasse s'en va au petit galop, le cerf en travers d'un cheval de bât.",
      ],
      choices: [{ label: "Marcher derrière les trompes", to: "A4c_bourg", big: true, fx: { ep: ["histoire", 800] } }] },
    A4c_bourg: { act: "IV", title: "Brandelis", place: "brandelis", ambiance: "chateau",
      fx: { until: 18 },
      text: [
        "On sort de la Sylve au soleil couchant, et on le voit d'un seul coup : un rocher, au milieu d'une clairière grande comme une paroisse ; sur le rocher, sept tours à poivrières, d'une pierre couleur de vieux sang ; au pied, un étang long, immobile, où le château se regarde. De ce côté-ci de l'eau, un village de chaume, un clocher, une auberge à l'enseigne du Grand Cerf. De l'autre, des chenils, d'où monte la clameur de la soupe des chiens.",
        "Il y a de la lumière à toutes les fenêtres. On y dîne. On entend, par-dessus l'étang, des violons que l'on accorde.",
        "La plus haute des sept tours est carrée, et porte sur sa face un cadran grand comme une roue de moulin, bleu, semé d'étoiles, avec deux aiguilles d'or. Sous le cadran, dans une niche, un homme de bronze en habit de veneur tient une trompe à sa bouche.",
        "Les aiguilles marquent trois heures dix.",
        "Maître Crochemore s'est arrêté au bord de l'étang. Il regarde ce cadran comme on regarde, chez des étrangers, le portrait de quelqu'un de sa famille.",
        "« Il a soixante-dix ans de moins que le Juge, dit-il. Aubry l'a fait dans sa vieillesse, pour un grand-père de celui-ci. C'est le dernier automate qui soit sorti de ses mains. » Il se tait. « Je n'ai jamais demandé à le voir. Je me disais que j'avais le temps. On se dit cela des gens, aussi. »",
      ],
      choices: [{ label: "Passer la chaussée de l'étang", to: "A4c_arrivee", big: true }] },
  },

  extras: {
    places: {
      rousses: { ambiance: "plaine", region: "route_ouest", name: "Les Rousses", map: "pays", x: 48, y: 76, arrive: "A4c_croix", desc: "Des collines de fougère et de bruyère, couleur de brique, entre la craie d'Ossevaux et la forêt." },
      bac: { ambiance: "eau", region: "route_ouest", name: "Le bac de la Rousse", map: "pays", x: 36, y: 68, arrive: "A4c_bac", desc: "Une rivière couleur de thé, un radeau, une corde, et un passeur qui sait tout ce qui passe." },
      sylve: { ambiance: "foret", region: "brandelis", name: "La Sylve", map: "pays", x: 26, y: 62, arrive: "A4c_lisiere", desc: "La grande forêt du Connétable : des chênes de trois cents ans, des allées droites, et des carrefours qui ont des noms de bêtes mortes." },
    },
    items: {
      bons_brandelis: { name: "Billets du comte", kind: "quete", desc: "Des feuilles de carnet déchirées, signées d'un B qui tient la moitié de la page. *Bon pour.* Son intendant pleure en les voyant." },
    },
    enemies: {
      loup_sylve: { name: "Loup du Val-Noir", look: "loup", pv: 13, att: 40, def: 18, dmg: 6, desc: "Maigre, haut sur pattes, chassé de chez lui par trois jours de trompes." },
    },
    clues: {
      r_quarante: { rev: "R", text: "Sur la chaussée, dans la berline du Syndic : il tient le Connétable par quarante mille écus de billets, « tous de sa main ». « Un homme qui signe si grand finit par signer ce qu'on veut. » Sur ses genoux, un étui : « douze cents lignes »." },
      s_lettre_doyen: { rev: "S", text: "Une lettre du Doyen au Connétable, lue sur un appui de fenêtre : « N'en dites rien au Syndic. Il compte trop bien, et il nous compterait. » Les trois Clavaires ne se disent pas tout." },
    },
  },
};
