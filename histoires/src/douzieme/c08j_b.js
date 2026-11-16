// Le Douzième Coup · chapter 8, the one who passes, second half, part one (the Fair of the Grand Midi, afternoon).
// The hub of the Fair (`K08j_foire`, at the first league stone), the man who sells the hour, and the clockmakers'
// alley: maître Ragot's stall « au Noyer d'Or » (the watch bought back `j:montre_reprise`, or the owed service: a
// delivery note carried to the Guild, `j:sait_berceaux`, `j:ragot_quitte`), the dealer in dead watches (item
// `montre_morte`), and the apprentices' contest under the Guild's tent, presided by the sous-maître (three trials
// `j:ep1`, `j:ep2`, `j:ep3` ; prize: thirty écus and item `clef_apprenti`, `j:concours_gagne`, `j:aubespin_invite`,
// `j:tour_line` if the hero used a temper nobody knows yet). Aymon Foliot, the rival (`j:sait_cire`).
// The rest of the Fair (players, farmers' carts, the Queen's placard, the evening) is in c08j_c.js.
var P = {};
var LINE = { has: "monde:line_route" };
var HORLO = [{ if: { voie: "rouage" }, v: 15 }, { if: { item: "trousse" }, v: 10 }];
var E1 = { has: "j:ep1" }, E2 = { has: "j:ep2" }, E3 = { has: "j:ep3" };
var WIN = { any: [{ all: [E1, E2] }, { all: [E1, E3] }, { all: [E2, E3] }] };

Object.assign(P, {
  K08j_tantot: { act: "III", title: "Une heure après midi", place: "foire", ambiance: "ville",
    text: [
      "Tu refermes le Cahier. La nourrice est partie ; le marchand de sifflets a vendu trois sifflets pendant que tu écrivais, et les trois acheteurs s'en servent.",
      "Du haut des marches de la Première, on a la Foire sous soi comme une carte. La grande allée, du bassin à la porte. En travers, vers le nord, l'allée des horlogers, qu'on reconnaît à l'oreille avant de la voir : il en sort un grésillement de mille tic-tac, pareil au bruit d'un pré plein de sauterelles. Au midi, un pré où flottent des toiles peintes de soleils, et d'où viennent des coups de tambour. Du côté du bassin, le champ des charrettes, où les gens des fermes ont dételé. Contre la porte, un corps de garde de planches, aux couleurs de la Reine, devant lequel il y a du monde.",
      "Tu achètes une oublie à une vieille qui les roule sur son genou, et tu la manges debout. Tu as quatre jours. Les gens qui passent en ont quatre aussi, et ils les dépensent en rubans.",
      { if: LINE, text: "Line tient un pan de ta veste, d'une main ferme, comme on tient une longe. Elle ne regarde pas les rubans. Elle regarde la Tour, puis l'allée d'où vient le grésillement, puis de nouveau la Tour. « D'abord là, dit-elle en montrant l'allée. Après, je serai sage. »" },
    ],
    choices: [{ label: "Descendre dans la Foire", to: "K08j_foire", big: true }] },

  K08j_foire: { act: "III", title: "La Foire du Grand Midi", backName: "la Première", place: "foire", ambiance: "ville", hub: true,
    text: [
      { first: true, text: "On descend trois marches et l'on cesse de s'appartenir. La foule a ses courants, ses remous, ses eaux mortes au coin des baraques ; on apprend vite à s'y laisser porter de biais, comme un passeur sur la Thiorne." },
      { again: true, text: "La borne de marbre, sur ses trois marches, au croisement des allées. Quelqu'un crie « À la Première ! » par-dessus les têtes. La Tour tient le fond du ciel." },
      { again: true, after: "K08j_prix", text: "On te regarde un peu, au passage. La nouvelle d'un concours va plus vite qu'un cheval." },
    ],
    choices: [
      { label: "L'allée des horlogers", to: "K08j_horlogers" },
      { label: "Le pré des soleils peints", to: "K08j_soleils" },
      { label: "Le champ des charrettes", to: "K08j_noyers" },
      { label: "Le corps de garde, où l'on a cloué un placard", to: "K08j_edit" },
      { label: "L'homme qui vend l'heure", to: "K08j_heure" },
      { label: "Une baraque de toile noire, sans enseigne", to: "K08j_sibylle" },
      { label: "Un gamin, qui marche dans ton ombre depuis l'allée des horlogers", hide: { any: [{ seen: "K08j_bourse" }, { not: { seen: "K08j_horlogers" } }] }, to: "K08j_bourse" },
      { label: "Laisser venir le soir", to: "K08j_soir", big: true },
    ] },

  K08j_heure: { act: "III", title: "L'heure, un liard", backName: "le marchand d'heure", place: "foire", ambiance: "ville",
    text: [
      { first: true, text: "Il a un pliant, un parasol jaune et une montre. C'est tout son fonds. La montre est un gros oignon d'argent, bosselé, qu'il porte au cou par une chaîne de puits ; on lui donne un liard, il ouvre le couvercle avec des précautions de prêtre, et il dit l'heure. Les gens des fermes repartent contents. Ils ont acheté quelque chose de la ville." },
      { first: true, text: "Tu écoutes l'oignon pendant qu'il le tient ouvert. Il bat lourd, et il boite : un temps long, un temps court. Tu lis le cadran par-dessus le pouce du bonhomme. Une heure et quart. La Patiente a sonné la demie pendant que tu mangeais ton oublie." },
      { first: true, text: "Il la remet donc à midi, tous les jours, sur la grosse cloche, comme toute la ville ; et elle lâche un quart d'heure avant deux heures. Vers le soir, cet homme vend aux fermiers une heure qui n'a plus cours." },
      { again: true, before: "j:heure_reglee", text: "Le parasol jaune, le pliant, l'oignon d'argent qui boite." },
      { again: true, after: "j:heure_reglee", text: "Le marchand d'heure te salue de loin en levant sa montre, comme on lève un verre. Elle bat droit." },
    ],
    choices: [
      { label: "Lui offrir de la régler, sur ton genou, contre ce qu'il sait de la Foire", hide: { has: "j:heure_reglee" }, test: { dom: "savoir", diff: 0, label: "Régler une montre", help: HORLO },
        win: { fx: { flag: "j:heure_reglee", ep: ["seance", 300] }, to: "K08j_heure_fin" }, lose: { to: "K08j_heure_fin" } },
      { label: "Poser un écu sur le pliant : « Pas l'heure. Les nouvelles. »", hide: { seen: "K08j_heure_fin" }, if: { gold: { min: 1 } }, why: "Tu n'as pas un écu.", fx: { gold: -1 }, to: "K08j_heure_fin" },
      { back: "K08j_foire" },
    ] },
  K08j_heure_fin: { act: "III", title: "Ce que sait un homme assis", place: "foire", ambiance: "ville",
    text: [
      { outcome: "win", text: "Tu ouvres le fond de l'ongle. Le spiral est bon ; c'est la raquette qu'un doigt a poussée à fond vers le *lent*, il y a des années, et que personne n'a osé ramener. Tu la ramènes de deux crans, tu souffles sur le balancier, tu refermes. L'oignon bat droit. Le bonhomme le porte à son oreille, et sa figure prend l'expression d'un mari à qui l'on rend sa femme guérie." },
      { outcome: "lose", text: "Tu ouvres le fond. La raquette est à fond vers le *lent* ; tu la ramènes, trop, et l'oignon part au galop. Tu la repousses. Il boite de l'autre jambe. Le bonhomme te reprend sa montre avec douceur. « Laisse, petit. Elle retarde depuis mon père. Les gens des fermes ne sont pas à un quart d'heure. » Il te dit pourtant ce qu'il sait, par égard pour l'intention." },
      "« Je suis assis ici depuis l'ouverture, dit-il. Un homme assis voit passer le monde, et le monde ne voit pas un homme assis. »",
      "« Un : la Tour est fermée aux curieux. Depuis huit jours. *Pour l'huile*, à ce que dit l'écriteau. J'ai soixante ans, j'ai vu faire l'huile soixante fois, et cela prenait une matinée. Deux : il monte des fardiers à la porte basse de la Tour, de nuit, bâchés, avec de la paille aux roues. Mon neveu est lanternier dans la Ville-Haute. Il a vu briller du verre sous une bâche, grand comme une porte de grange. »",
      "« Trois : le concours des apprentis se juge tantôt, sous la tente bleue. Trente écus et la clef de bronze. C'est le sous-maître qui préside, parce que le Grand Maître boude, ou travaille, ce qui chez lui revient au même. Quatre : la Reine descend ce soir aux vêpres de Saint-Gnomon-hors-les-Murs, la chapelle qui est derrière le pré des soleils. En litière. Rideaux fermés. Elle y vient chaque soir depuis la Saint-Médard, et chaque soir on la trouve plus petite. »",
      { after: "monde:cuves_vues", text: "Du verre, grand comme une porte de grange. Tu as vu souffler ce verre-là, sur une butte, à neuf lieues d'ici. Il a mis moins de temps que toi à faire la route." },
    ],
    choices: [{ back: "K08j_heure" }] },

  K08j_horlogers: { act: "III", title: "L'allée des horlogers", backName: "l'allée des horlogers", place: "foire", ambiance: "ville",
    text: [
      { first: true, text: "Quarante étals, vingt de chaque côté, et sur chacun des cadrans par douzaines : des horloges de fer à poids de pierre, des pendules à colonnes, des montres en forme de croix, de tulipe, de tête de mort, des cadrans solaires de poche pour les gens qui se méfient. Tout cela marche. Tout cela marche en même temps, et rien n'est d'accord." },
      { first: true, text: "C'est la première chose qui te frappe, toi qui viens d'un atelier où quatre pendules disaient la même seconde : d'un étal au suivant, il y a un demi-quart d'heure, et chaque marchand jure la main sur le cœur que le voisin retarde. Au bout de l'allée, par-dessus les toiles, le grand cadran de la Tour leur donne tort à tous, avec indulgence." },
      { first: true, text: "Tu marches là-dedans les mains dans le dos, pour ne toucher à rien. Tu connais chacun de ces échappements par son nom. Tu sais aussi ce qu'ils deviendront, lequel on abandonnera dans vingt ans et lequel on fera encore dans soixante. Aucun de ces messieurs ne te croirait." },
      { first: true, if: LINE, text: "Line a lâché ta veste. Elle va d'un étal à l'autre, le nez à hauteur des établis, les mains dans le dos, elle aussi : elle t'a regardé{e} faire. Un marchand lui demande si elle cherche sa mère. « Je cherche pourquoi la vôtre fait *tac* deux fois », répond-elle, et le marchand rougit jusqu'au bonnet." },
      { again: true, text: "Les quarante étals, les mille tic-tac en désaccord. Au fond, la tente bleue de la Guilde, semée de balanciers d'or." },
    ],
    choices: [
      { label: "La tente bleue de la Guilde", to: "K08j_concours" },
      { label: "Une enseigne neuve : *Au Noyer d'Or*", to: "K08j_ragot" },
      { label: "Un étal de vieilles montres, vendues au poids", to: "K08j_ferraille" },
      { back: "K08j_foire" },
    ] },

  K08j_ferraille: { act: "III", title: "Au poids", place: "foire", ambiance: "ville",
    text: [
      { first: true, text: "Ici l'on ne jure de rien. Sur une planche, dans des écuelles, des montres mortes : boîtes cabossées, cadrans fêlés, mouvements nus où manque une roue. Le marchand est un petit homme triste qui les vend à la livre, avec une balance de boucher, aux orfèvres pour l'argent et aux apprentis pour les vis." },
      { first: true, text: "Tu en retournes une du doigt. Laiton, verge, fusée : une honnête montre de bourgeois, vieille de vingt ans. Le ressort a cassé net, et en cassant il a faussé le barillet. Tout le reste est sain. On la donnerait à un enfant pour qu'il voie comment c'est fait, et l'enfant n'y perdrait rien." },
      { again: true, before: "j:montre_morte", text: "Les écuelles de montres mortes. Celle au ressort cassé y est encore." },
      { again: true, after: "j:montre_morte", text: "Le petit homme triste pèse des boîtes d'argent pour un orfèvre." },
    ],
    choices: [
      { label: "Acheter la montre au ressort cassé", hide: { has: "j:montre_morte" }, if: { gold: { min: 1 } }, why: "Tu n'as pas un écu.", fx: { gold: -1, item: "montre_morte", flag: "j:montre_morte" }, to: "K08j_ferraille" },
      { back: "K08j_horlogers" },
    ] },

  K08j_ragot: { act: "III", title: "Au Noyer d'Or", backName: "le Noyer d'Or", place: "foire", ambiance: "ville",
    text: [
      { first: true, text: "L'enseigne sent encore la peinture : un noyer d'or sur fond vert, avec ses noix. Dessous, un étal de marchand de bois comme on en voit peu, tenu par un homme qui a compris que le bois se vend mieux quand on le montre poli. Des plateaux de poirier, de buis, d'ébène des îles, cirés, posés sur du drap. Maître Fulcran Ragot fournit la Guilde en cabinets d'horloge, et il le fait savoir par un écriteau." },
      { first: true, before: "monde:noyer_sauve", text: "Au milieu de l'étal, à la place d'honneur, trois plateaux de noyer, larges d'une aune, d'un brun de miel, veinés comme une eau. Le bois est frais scié ; la sciure tient encore dans le fil. Tu as dormi sous cet arbre. Tu n'avais jamais vu le dedans de quelqu'un que tu connaissais." },
      { first: true, after: "j:montre_donnee", before: "j:montre_reprise", text: "Ta montre est là. Il l'a mise sous une cloche de verre, sur un coussin de velours rouge, ouverte, pour qu'on voie le coq ciselé. Une carte, d'une belle ronde : *Chef-d'œuvre de maîtrise. Se montre à tous, se vend aux connaisseurs. Cent vingt écus.* Elle bat. Tu l'entends à travers le verre, au milieu de mille autres, comme on reconnaît un pas dans un escalier." },
      { first: true, text: "Ragot te voit. Sa figure rose s'épanouit. « Mon jeune ami de la campagne ! À la Foire ! Mais on vous voit partout. »" },
      { again: true, text: "Maître Ragot, rose et ciré comme ses planches, sous son noyer d'or." },
      { again: true, after: "j:montre_donnee", before: "j:montre_reprise", text: "Sous la cloche de verre, la montre de Line bat sur son velours." },
    ],
    choices: [
      { label: "Compter trente écus sur le drap : « Parole de marchand. »", hide: { any: [{ not: { has: "j:quilles_gagnees" } }, { has: "j:montre_reprise" }] }, if: { gold: { min: 30 } }, why: "Il t'en faut trente.", fx: { gold: -30, item: "montre_line", flag: "j:montre_reprise", ep: ["perso", 600] }, to: "K08j_ragot_rachat" },
      { label: "« Je vous dois un service. Lequel ? »", hide: { any: [{ not: { has: "j:doit_ragot" } }, { seen: "K08j_ragot_service" }] }, to: "K08j_ragot_service" },
      { label: "Lui rendre son bordereau, signé", hide: { any: [{ not: { has: "j:bordereau_signe" } }, { has: "j:ragot_quitte" }] }, fx: { flag: "j:ragot_quitte" }, to: "K08j_ragot_quitte" },
      { label: "Le faire parler de ce qu'il livre à la Guilde", hide: { any: [{ has: "j:doit_ragot" }, { seen: "K08j_ragot_bois" }] }, test: { dom: "social", diff: 5, label: "Faire parler un marchand", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { has: "j:quilles_gagnees" }, v: 10 }, { if: { present: "perrine" }, v: 5 }] },
        win: { fx: { flag: "j:sait_berceaux" }, to: "K08j_ragot_bois" }, lose: { to: "K08j_ragot_bois" } },
      { back: "K08j_horlogers" },
    ] },
  K08j_ragot_rachat: { act: "III", title: "Trente écus à la couronne", place: "foire", ambiance: "ville",
    text: [
      "Tu poses ta bourse sur le drap, et tu la vides. Trente écus à la couronne, neufs, qui roulent entre les plateaux de poirier. Maître Ragot les regarde rouler. Il a mis ce matin une carte de cent vingt sous cette cloche, et trois amateurs sont déjà venus tourner autour.",
      "Il y a un moment où tu vois très bien ce qu'il pense. Puis il regarde à gauche, à droite : l'étal voisin écoute, et le suivant aussi. Un marchand qui fournit la Guilde vit de sa parole comme un mur vit de son aplomb.",
      "« Parole de marchand », dit-il. Il lève la cloche de verre lui-même. Il te rend la montre sur le plat de la main, le couvercle ouvert, et tu vois passer le L une dernière fois sous son pouce. « Vous me coûtez quatre-vingt-dix écus, mon jeune ami. Je n'ai jamais payé si cher une partie de quilles. Faites-moi la grâce de ne jamais me dire d'où elle vient : je sens que cela me coûterait le reste. »",
      "Tu la remets dans ton gousset. Elle y retrouve sa place, et son poids, et ce petit battement contre la côte que tu avais cessé d'entendre à force de l'avoir toujours eu.",
      { if: LINE, text: "Line a suivi l'affaire sans un mot. Dans l'allée, elle te tire par la manche. « Fais voir. » Tu ouvres le couvercle. Elle regarde la lettre gravée, longtemps, le front plissé. « C'est un L. Je le connais, celui-là. C'est le mien. » Elle lève les yeux vers toi. Tu refermes le couvercle. « C'est le nom de l'horlogère qui l'a faite », dis-tu, et c'est la stricte vérité." },
    ],
    choices: [{ back: "K08j_ragot" }] },
  K08j_ragot_service: { act: "III", title: "Ce n'est jamais rien", place: "foire", ambiance: "ville", fx: { flag: "j:bordereau_porte" },
    text: [
      "« Un service ! Il s'en souvient ! La jeunesse a de l'honneur, quoi qu'on dise. » Maître Ragot tire de son gilet un papier plié en trois, sans cachet. « Ce n'est rien. Vous voyez la tente bleue, au bout de l'allée ? Vous y demandez monsieur Fourchon, le commis du sous-maître. Un grand maigre, qui a toujours l'air de sortir d'un enterrement. Vous lui remettez ceci, il signe en bas, vous me le rapportez. »",
      "Tu demandes pourquoi il n'y va pas lui-même : il y a cent pas.",
      "« Parce que si j'y vais, mon jeune ami, monsieur Fourchon me fera attendre une heure pour me rappeler qui je suis, et que pendant cette heure je ne vends pas. Tandis qu'un commissionnaire, on l'expédie. C'est tout l'avantage qu'il y a à n'être personne : on passe. »",
      "Il te met le papier dans la main et te referme les doigts dessus, d'un geste paternel. « Vous savez lire, je crois. C'est un talent. Il y a des jours où il vaut mieux le laisser à la maison. »",
    ],
    choices: [
      { label: "Le lire en marchant", to: "K08j_bordereau" },
      { label: "Le porter comme on te l'a donné", to: "K08j_ragot" },
    ] },
  K08j_bordereau: { act: "III", title: "Fourni à la Guilde", place: "foire", ambiance: "ville", fx: { flag: "j:sait_berceaux", ep: ["histoire", 300] },
    text: [
      "Un commissionnaire qui lit ce qu'il porte se met derrière une baraque, et fait vite. Tu te mets derrière une baraque.",
      "*Fourni à la Guilde des Horlogers-Jurés, pour le service particulier de monsieur le sous-maître, et sur son ordre : douze berceaux de chêne de cœur, chevillés, sans un clou, de sept pieds d'ouverture, garnis de feutre. Plus : douze palans à trois poulies. Plus : trois cents toises de corde de chanvre, première qualité.*",
      "*À rendre au pied de la Tour, porte basse, dans la nuit du 19 au 20 de juin. Payé d'avance, en or, de la main à la main. À ne point porter aux livres de monsieur le trésorier.*",
      "Tu replies le papier dans ses plis. Un berceau, chez les charpentiers, c'est ce qui porte une chose ronde et lourde pendant qu'on la hisse : une cloche, une cuve. Douze. Sept pieds d'ouverture.",
      { after: "monde:cuves_vues", text: "Tu as vu, à Roquebise, au fond d'une halle, douze cuves de verre de cette largeur-là, et un monsieur gris qui en essayait une avec un papillon." },
      { before: "monde:cuves_vues", after: "monde:su:recolte", text: "*IL A DOUZE CUVES DE VERRE. IL LES MÈNE À LA TOUR.* {autre} l'a écrit d'un homme de quatre-vingt-dix ans. Celui de trente a commandé les berceaux." },
      "Sans un clou : quelqu'un tient à ce qu'il n'entre pas de fer dans cette chambre-là. Hors des livres : quelqu'un tient à ce que les six autres Jurés votent une petite expérience, et à ce qu'ils n'aient jamais vu la facture de la grande.",
      "La nuit du 19 au 20. Après-demain.",
    ],
    choices: [{ back: "K08j_ragot" }] },
  K08j_ragot_quitte: { act: "III", title: "Quitte", place: "foire", ambiance: "ville",
    text: [
      "Maître Ragot déplie le bordereau, va droit à la signature, la trouve, et replie. Il n'a pas regardé le reste : il le sait par cœur.",
      "« Quitte. Voilà comme j'aime les dettes : courtes. » Il range le papier contre son cœur, sous le gilet. « Monsieur Fourchon vous a-t-il fait attendre ? Non. Vous voyez. »",
      { after: "j:sait_berceaux", text: "Tu dis, comme en passant, que douze berceaux, c'est une belle commande. Le rose de maître Ragot baisse d'un ton. « C'est une commande payée, mon jeune ami. Je ne connais pas de plus belle qualité. Ce qu'on met dedans regarde celui qui paie, et où il le met regarde Dieu. » Il te tourne le dos pour cirer un plateau qui brille déjà." },
      { after: "j:montre_donnee", before: "j:montre_reprise", text: "En partant, tu regardes la cloche de verre. Il suit ton regard. « Elle partira ce soir. J'ai un amateur. Un vrai : il n'a pas demandé le prix. »" },
    ],
    choices: [{ back: "K08j_ragot" }] },
  K08j_ragot_bois: { act: "III", title: "Du chêne de cœur", place: "foire", ambiance: "ville",
    text: [
      { outcome: "win", text: "Tu admires le poirier. Tu t'étonnes qu'un homme qui vend de si belles planches fournisse aussi le gros bois. Maître Ragot se rengorge : on ne lui résiste pas par la vanité, et tu viens de trouver la porte." },
      { outcome: "win", text: "« Le gros bois ! Mais c'est là qu'on gagne. Tenez : j'ai fait ce mois-ci, pour un de ces messieurs de la colline, douze berceaux de chêne de cœur. Sept pieds d'ouverture. Chevillés, sans un clou : il y tenait. Avec les palans et la corde. À rendre au pied de la Tour dans la nuit du 19 au 20, et payés d'avance, en or. » Il baisse la voix, enchanté de lui-même. « Hors des livres du trésorier. Quand un Juré paie de sa poche, mon jeune ami, c'est qu'il achète pour son compte ; et quand il achète pour son compte des berceaux de sept pieds, je livre et je ne demande rien. Je ne demande jamais. »" },
      { outcome: "win", after: "monde:cuves_vues", text: "Sept pieds. Tu as vu à Roquebise ce qu'on couche dans des berceaux de sept pieds." },
      { outcome: "lose", text: "Tu admires le poirier. Maître Ragot admire avec toi, longuement, et te fait l'histoire de chaque plateau, depuis la forêt. Quand tu arrives à la Guilde, il sourit. « Je fournis ces messieurs. Ce que je leur fournis est écrit dans leurs livres, et quelquefois ailleurs. Vous vouliez du buis ? »" },
    ],
    choices: [{ back: "K08j_ragot" }] },

  K08j_concours: { act: "III", title: "La tente bleue", backName: "la tente de la Guilde", place: "foire", ambiance: "ville",
    text: [
      { first: true, text: "La Guilde a sa tente au bout de l'allée, comme un évêque a son trône au bout de la nef. Toile bleue, balanciers d'or, deux hallebardiers à la livrée de la colline qui ne gardent rien et le font très bien. Dedans, il fait une chaleur de four. Une estrade, douze établis en deux rangs, avec leurs étaux ; des bancs pour le public, pleins ; et, au fond, sous un dais, deux fauteuils." },
      { first: true, text: "L'un des fauteuils est vide. On l'a épousseté quand même. C'est celui du Grand Maître, qui préside ce concours depuis trente ans et qui, cette année, a fait répondre qu'il avait de l'ouvrage." },
      { first: true, text: "Dans l'autre est assis un homme jeune, en gris, les mains croisées sur un genou. Il regarde les établis vides avec l'attention d'un homme qui en attend quelque chose. Même de l'entrée, on voit que ses deux yeux ne sont pas de la même couleur." },
      { first: true, after: "monde:su:vairons", text: "*S'IL Y A DE TON CÔTÉ UN HOMME DE TRENTE ANS AVEC CES YEUX-LÀ, C'EST LUI.* Il est à vingt pas. Il a l'air de s'ennuyer un peu. Quelque part, dans soixante ans, deux cents hommes le saluent ; ici, un huissier lui apporte un verre d'eau, et il dit merci." },
      { first: true, text: "Un héraut à tabard lit le règlement d'une voix de crieur de vin. « Ouvert à tout apprenti de la ville ou des champs, n'ayant pas dix-huit ans, qui présentera ses outils et nommera son maître ! Trois épreuves ! Au premier, une bourse de trente écus à la couronne, et la clef de bronze, qui ouvre un an durant la porte des apprentis à la cour de la Guilde ! L'apprenti de monsieur le Grand Maître ne concourt pas : on le tient pour jugé. »" },
      { again: true, before: "K08j_prix", text: "La tente bleue, sa chaleur, ses douze établis. Le héraut appelle les derniers inscrits." },
      { again: true, after: "K08j_prix", text: "On démonte les établis. Le fauteuil du Grand Maître est resté vide jusqu'au bout, et on l'emporte le premier, avec respect." },
    ],
    choices: [
      { label: "Aller au registre, et donner ton nom", hide: { seen: "K08j_banc" }, to: "K08j_banc" },
      { label: "Un grand maigre en noir, à une table, derrière l'estrade : monsieur Fourchon", hide: { any: [{ not: { has: "j:bordereau_porte" } }, { has: "j:bordereau_signe" }] }, fx: { flag: "j:bordereau_signe" }, to: "K08j_commis" },
      { label: "Le jeune homme aux manchettes, qui range ses limes", hide: { not: { seen: "K08j_prix" } }, to: "K08j_aymon" },
      { back: "K08j_horlogers" },
    ] },
  K08j_commis: { act: "III", title: "Monsieur Fourchon", place: "foire", ambiance: "ville",
    text: [
      "Monsieur Fourchon a en effet l'air de revenir d'un enterrement, et d'y avoir tenu un cordon. Il prend le papier entre deux doigts, le déplie, le lit en entier, lentement, les lèvres pincées, comme un homme qui vérifie qu'on n'y a rien ajouté.",
      "« Ragot. » Il trempe sa plume. « Il envoie un portefaix. Il a raison ; je l'aurais fait attendre. » Il signe, d'un paraphe qui ressemble à un nœud coulant, sèche à la poudre, replie. « Vous direz à votre marchand que monsieur le sous-maître compte sur la nuit dite, à l'heure dite, et sur des roues garnies. Il comprendra. »",
      "Il te rend le bordereau sans te regarder. Il n'a pas levé les yeux une seule fois plus haut que tes mains. Monsieur Fourchon appartient à cette espèce de serviteurs qui savent tout de leur maître, et qui en ont conçu pour le reste du monde un mépris tranquille.",
      { after: "j:sait_berceaux", text: "Sur sa table, sous un presse-papier, il y a une liasse du même format. Tu en lis la première ligne à l'envers, le temps qu'il sèche la sienne : *Verdelet, à Roquebise. Douze pièces. Reçu le solde.*" },
    ],
    choices: [{ back: "K08j_concours" }] },

  K08j_banc: { act: "III", title: "De la ville ou des champs", place: "foire", ambiance: "ville",
    text: [
      "Le greffier du concours a un registre, une plume d'oie et l'habitude. « Nom. Âge. Maître. » Tu donnes ton nom. Tu donnes ton âge. À la troisième case, la plume attend.",
      "Derrière toi, sur l'estrade, les autres ont déjà pris leurs établis. Ils sont onze. Dix portent le tablier de cuir des ateliers de la colline, avec le petit balancier brodé ; le onzième a des manchettes de dentelle, une trousse de maroquin à fermoir d'argent, et il aligne ses limes par ordre de taille avec le soin d'un homme qu'on regarde. Le greffier suit ton œil. « Aymon Foliot. Le neveu du Juré. C'est sa dernière année, et c'est son année : tout le monde vous le dira, à commencer par son oncle. »",
      "La plume attend toujours.",
    ],
    choices: [
      { label: "« Chez une horlogère de campagne. »", fx: { flag: "j:concours_horlogere" }, to: "K08j_epreuve1" },
      { label: "« Chez personne. J'ai appris avec ce que j'ai trouvé. »", to: "K08j_epreuve1" },
    ] },
  K08j_epreuve1: { act: "III", title: "Première épreuve : les yeux bandés", place: "foire", ambiance: "ville",
    text: [
      { after: "j:concours_horlogere", text: "« Une horlogère. » Le greffier écrit *sans maître*, au masculin, et souffle sur l'encre. « Il n'y en a pas au rôle. Ce qui n'est pas au rôle n'existe pas ; mais le règlement dit *des champs*, et aux champs il pousse de tout. Établi douze. »" },
      { before: "j:concours_horlogere", text: "« Sans maître. » Le greffier l'écrit avec un petit plaisir. « Aux champs, cela s'appelle un don. Ici, c'est une contravention ; mais le règlement dit *des champs*. Établi douze. »" },
      { if: { not: { item: "trousse" } }, text: "Tu n'as pas d'outils à présenter. Le greffier tire de sous sa table un rouleau de toile grise. « La trousse des pauvres. Elle a fait vingt concours, et n'en a gagné aucun. »" },
      "L'établi douze est au bout du second rang, contre la toile, à la place où l'on met ceux qu'on n'attend pas. On pose devant chacun un mouvement de pendule, à barillet, sous un linge. Un huissier passe derrière les bancs et noue un bandeau sur chaque paire d'yeux. Le tien sent la lavande et la sueur des concurrents de l'an dernier.",
      "« Démontez. Remontez. Qu'il marche. Vous avez un sablier. »",
      "Le noir se fait. Il te reste dix doigts et ce qu'ils savent. Autour de toi, onze respirations, le petit bruit des tournevis qui cherchent leur fente ; puis, à trois établis sur ta gauche, le son clair et long d'un barillet qui tombe, roule sur l'estrade, et descend les marches une à une dans un grand silence.",
    ],
    choices: [
      { label: "Démonter, à tâtons, dans l'ordre", test: { dom: "savoir", diff: 5, label: "Les doigts savent", help: HORLO },
        win: { fx: { flag: "j:ep1", ep: ["seance", 400] }, to: "K08j_epreuve2" }, lose: { to: "K08j_epreuve2" } },
    ] },
  K08j_epreuve2: { act: "III", title: "Deuxième épreuve : la pendule qui ment", place: "foire", ambiance: "ville",
    text: [
      { outcome: "win", text: "Les vis sortent dans l'ordre, et tu les couches sur le linge dans l'ordre, de gauche à droite, comme Line te l'a fait faire cent fois, la chandelle éteinte, les soirs d'hiver. *Une main qui sait n'a pas besoin de témoin.* Le pont, la roue de centre, le barillet. Puis tout à rebours. Tu donnes un quart de tour à la clef, et tu l'entends partir avant que le sablier ait fini de couler. On t'ôte le bandeau. Tu clignes des yeux avant tous les autres." },
      { outcome: "lose", text: "Les vis sortent ; l'une d'elles t'échappe et roule tu ne sais où. Tu la cherches du plat de la main, tu perds le fil, tu remontes le pont à l'envers, tu le sens au jeu, tu recommences. Quand on t'ôte le bandeau, le sablier est vide, et ton mouvement est sur l'établi en onze morceaux bien rangés." },
      "Le barillet qui a descendu les marches était celui d'Aymon Foliot. Il est très rouge. Dans le public, au premier banc, un monsieur sec, en noir, la chaîne des Jurés au cou, regarde droit devant lui avec la figure d'un homme qui compte jusqu'à cent.",
      "« Deuxième épreuve. » Le sous-maître s'est levé. Il descend de son dais lui-même, portant à deux mains une petite horloge lanterne, de laiton, à poids, qu'il pose sur une table au milieu de l'estrade. Il a une voix nette, sans effort, qui porte jusqu'au fond de la tente.",
      "« Cette horloge retarde d'un quart d'heure par jour depuis le début du mois. Trois maîtres l'ont eue en main. On l'a nettoyée ; l'huile est de la semaine. On a refait les palettes ; elles sont neuves, vous pouvez les voir briller. Quelqu'un a gravé à la pointe, sous le socle, la date de son dernier réglage : *à la Chandeleur*. Depuis, elle n'a pas quitté cette tente, où nous la gardons pour les concours. » Il s'essuie le front d'un mouchoir, sans hâte. « Vous n'y toucherez pas. Vous la regarderez le temps d'un Pater, et vous me direz chacun à l'oreille pourquoi elle ment. »",
      "Tu la regardes. Deux poids de plomb au bout de leurs cordes. Un pendule court, à lentille, sur une tige de laiton jaune. L'huile est claire. Les palettes brillent. Il fait dans cette tente une chaleur à fondre la cire des cachets.",
    ],
    choices: [
      { label: "« L'huile a épaissi dans les pivots. »", to: "K08j_epreuve3" },
      { label: "« Le ressort est fatigué. »", to: "K08j_epreuve3" },
      { label: "« La tige du pendule s'est allongée avec l'été. »", fx: { flag: "j:ep2", ep: ["seance", 400] }, to: "K08j_epreuve3" },
      { label: "« L'échappement a pris du jeu. »", to: "K08j_epreuve3" },
    ] },
  K08j_epreuve3: { act: "III", title: "Troisième épreuve : la pièce", place: "foire", ambiance: "ville",
    text: [
      { after: "j:ep2", text: "Tu le lui dis à l'oreille. Réglée en février, dans une tente où il gèle ; lue en juin, dans une tente où l'on cuit. Le laiton s'allonge au chaud, le pendule avec lui, et un pendule plus long bat plus lent. L'œil gris et l'œil brun se tournent vers toi, de très près. « Qui vous a appris que le laiton respire ? » Tu réponds que tu l'as vu faire. « Vous l'avez vu. » Il a un petit mouvement des lèvres. « Les trois maîtres ne l'ont pas regardée. Ils l'ont ouverte. »" },
      { before: "j:ep2", text: "Tu le lui dis à l'oreille. Il t'écoute jusqu'au bout, avec politesse. « Non. » Il ne dit rien d'autre. Tu retournes à ton établi en repassant la scène, et c'est en t'asseyant que tu la revois : deux poids de plomb. Une horloge à poids n'a pas de ressort ; son huile était claire, ses palettes neuves ; il te l'avait dit lui-même. Restait la Chandeleur, et cette chaleur. Le laiton s'allonge au chaud. Tu avais la réponse sur le front, en gouttes." },
      "Cinq apprentis ont dit *l'huile*. Trois ont dit *l'échappement*. Aymon Foliot a parlé longtemps à l'oreille du sous-maître, qui a fait oui de la tête : il sait ses livres, ce garçon, et le monsieur sec du premier banc respire.",
      "« Troisième épreuve. » On pose devant chacun une montre à verge dont l'axe de balancier a un pivot cassé, un bout d'acier, et une chandelle allumée. « Refaites le pivot. Vous avez une heure de sablier. Les juges éprouveront la pièce à la lime. »",
      "C'est l'ouvrage le plus fin du métier : une pointe d'acier grosse comme un cheveu, qui doit tourner un an sans s'user. On la lime dans l'acier dur, par caresses, en priant ; elle casse une fois sur trois. Tout l'établi douze le sait, et les onze autres aussi.",
      "Tu regardes la chandelle. Line ne lime jamais un pivot dans le dur. Elle recuit l'acier à la flamme jusqu'au rouge sombre, le tourne tendre, à l'aise, comme du laiton ; puis elle le retrempe d'un coup dans l'huile, et le fait revenir au bleu sur une plaque. Tu l'as fait cent fois. Tu comptes dans ta tête : ce tour de main a été trouvé à Vauxelles, du temps où elle était jeune. Ici, il lui manque encore trente ans pour exister.",
    ],
    choices: [
      { label: "Limer dans le dur, comme tout le monde sous cette tente", test: { dom: "savoir", diff: 10, label: "Un pivot dans l'acier dur", help: HORLO },
        win: { fx: { flag: "j:ep3", ep: ["seance", 500] }, to: "K08j_prix" }, lose: { to: "K08j_prix" } },
      { label: "Recuire, tourner tendre, retremper : le tour de Line", test: { dom: "savoir", diff: -5, label: "Le tour de Line", help: HORLO },
        win: { fx: { flag: ["j:ep3", "j:tour_line"], ep: ["seance", 500] }, to: "K08j_prix" }, lose: { fx: { flag: "j:tour_line" }, to: "K08j_prix" } },
    ] },
  K08j_prix: { act: "III", title: "Les boules blanches", place: "foire", ambiance: "ville",
    text: [
      { outcome: "win", before: "j:tour_line", text: "Tu limes. Une heure de caresses, le souffle retenu, la loupe vissée dans l'œil. Le pivot sort de l'acier comme une épine sort d'un doigt, et il tient. Le juge y promène sa lime d'épreuve : elle glisse dessus sans mordre." },
      { outcome: "lose", before: "j:tour_line", text: "Tu limes. À la troisième passe avant la fin, il y a un petit bruit sec, de ceux qu'on entend avec les dents. Le pivot est dans ta brucelle ; l'axe est dans l'étau ; ils ne se connaissent plus. Trois autres établis ont fait le même bruit avant toi." },
      { outcome: "win", after: "j:tour_line", text: "Tu présentes l'axe à la flamme. L'acier rougit ; un murmure court sur les bancs, où l'on croit que tu le gâtes. Tu le tournes tendre, en dix passes, tu le plonges dans le godet d'huile de l'établi, tu le fais revenir sur le plat de ta lime chauffée, jusqu'à ce bleu de prune que Line appelle *la bonne heure*. Le juge y promène sa lime d'épreuve. Elle glisse. Il recommence, plus fort. Elle glisse encore. Il regarde sa lime." },
      { outcome: "lose", after: "j:tour_line", text: "Tu présentes l'axe à la flamme. L'acier rougit ; un murmure court sur les bancs. Tu le tournes tendre, tu le plonges dans l'huile, et tu le fais revenir sur ta lime chauffée ; mais une chandelle de concours donne une flamme que tu ne connais pas, et le bleu passe au gris avant que tu l'aies vu venir. Le pivot est mou. La lime du juge y mord comme dans du plomb. Sous le dais, l'homme en gris ne regarde pas le pivot. Il regarde la chandelle." },
      "On fait passer aux trois juges une urne et des boules. Le héraut compte tout haut, pour le public, qui adore cela : blanche, noire, blanche.",
      { if: { all: [E1, E2, E3] }, text: "Tu as les trois blanches. C'est arrivé deux fois en trente ans, dit quelqu'un sur les bancs ; la première fois, c'était un nommé Coudrier." },
      { if: { all: [E1, E2, { not: E3 }] }, text: "Deux blanches pour l'établi douze. Deux pour Aymon Foliot, dont le pivot est d'un maître. Les juges se tournent vers le dais. Le sous-maître prend son temps. « Monsieur Foliot a fait tomber son barillet. On ramasse un barillet ; on ne ramasse pas une réputation. La bourse va aux champs. » Au premier banc, le monsieur sec a fini de compter jusqu'à cent, et recommence." },
      { if: { all: [WIN, { not: { all: [E1, E2] } }] }, text: "Deux blanches pour l'établi douze. Aymon Foliot en a une, avec son barillet ramassé sous l'estrade. Les autres ont cassé leur pivot ou perdu leur horloge. Le héraut cherche ton nom sur son rôle, et le trouve à la dernière ligne, sous *sans maître*." },
      { if: { not: WIN }, text: "L'établi douze n'a pas son compte. Aymon Foliot a deux blanches, malgré le barillet, et un pivot que le juge fait admirer à la ronde. On lui remet la bourse et la clef. Il salue comme un garçon bien élevé à qui l'on a dit toute sa vie que cela arriverait ; il a seulement, en se relevant, un coup d'œil vers ton bout d'estrade, où il a vu des doigts qui en savaient autant que les siens." },
    ],
    choices: [
      { label: "Monter sous le dais", hide: { not: WIN }, fx: { gold: 30, item: "clef_apprenti", flag: ["j:concours_gagne", "j:aubespin_invite"], ep: ["perso", 800], regard: { aubespin: "curieux" } }, to: "K08j_estrade", big: true },
      { label: "Rendre ton tablier, et descendre", hide: WIN, fx: { flag: "j:aubespin_invite" }, to: "K08j_estrade", big: true },
    ] },
  K08j_estrade: { act: "III", title: "Un œil gris, un œil brun", place: "foire", ambiance: "ville",
    text: [
      { after: "j:concours_gagne", text: "On applaudit. Les gens des fermes applaudissent plus fort que ceux de la ville : c'est quelqu'un des champs qui a gagné, et ils en rapporteront la nouvelle chez eux comme un cadeau. Le sous-maître te remet la bourse, qui est lourde, puis la clef, qui est petite, de bronze verdi, avec un balancier dans l'anneau." },
      { before: "j:concours_gagne", text: "Tu défais ton tablier. Au pied de l'estrade, quelqu'un t'attend, les mains dans le dos. Le sous-maître est descendu de son dais pour un perdant, ce que le greffier note d'un haussement de sourcil." },
      { after: "j:aubespin_vrai", text: "« L'horlogère de campagne. » Il a parlé bas, pour toi seul{e}. « Je vous avais dit qu'elle n'existait pas. Je me suis trompé d'un temps : elle existe quelque part, et elle forme bien. J'aimerais la connaître. J'ai le sentiment que cela me coûterait un long voyage. »" },
      { after: "j:aubespin_dupe", text: "« La hotte de la colporteuse. » Il a parlé bas. Son sourire est parfaitement aimable. « Vous portiez des almanachs, à Roquebise. Vous voici portant une trousse. On m'a menti sur un seuil de halle, avec les épaules qu'il fallait, et je l'ai cru : cela m'arrive une fois l'an. Je vous en fais mon compliment. »" },
      { after: "j:aubespin_doute", text: "« Je vous avais dit que vous mentiez, et que cela m'intéressait. » Il a parlé bas. « Vous voyez que je ne me trompe pas sur les mains. »" },
      { before: "j:aubespin_connait", text: "Il te considère un moment, de ses deux yeux qui ne s'accordent pas, et l'on ne sait auquel répondre. « Je ne vous connais pas. C'est rare, pour une main de cette sorte, dans un royaume de cette taille. »" },
      { after: "j:tour_line", text: "« Ce recuit à la chandelle. Ce revenu au bleu. » Il n'a pas changé de ton. « J'ai lu tous les traités. Je possède ceux que l'on n'imprime pas. Aucun ne le donne. Ou bien vous l'avez trouvé, à votre âge, sur un coin de table ; ou bien quelqu'un vous l'a montré, qui le tenait de quelqu'un. Les deux me paraissent également impossibles. » Il sourit. « J'ai une faiblesse pour l'impossible. Elle me perdra ; en attendant, elle m'occupe. »" },
      { after: "j:concours_gagne", text: "« Vous avez la clef. Je n'ai donc plus à vous ouvrir : servez-vous-en. La cour de la Guilde, la porte des apprentis, à main gauche du grand portail. Demandez-moi. » Il te salue, d'une inclinaison exacte, celle qu'il a eue à Roquebise pour une petite fille en chemise, et il retourne à son dais, où monsieur Fourchon l'attend avec une liasse." },
      { before: "j:concours_gagne", text: "« Vous n'avez pas la clef. C'est dommage, et c'est sans importance : venez tout de même. La colline des Jurés, le grand portail, et mon nom au portier. » Il te salue, d'une inclinaison exacte, et retourne à son dais, où monsieur Fourchon l'attend avec une liasse." },
      { after: "monde:su:vairons", text: "Tu restes là, au pied de l'estrade. Il t'a parlé à un pied de distance. Il a une petite cicatrice blanche au menton, d'un rasoir, et il sent l'eau de mélisse. Tu n'écriras pas la mélisse à {autre} : il y a des choses qui ne passent pas dans des bâtons." },
      { if: LINE, text: "Line t'attend à la sortie de la tente, assise sur un piquet. Elle a tout vu par une fente de la toile. « Le monsieur du papillon, dit-elle. Il t'a parlé gentiment. » Elle descend de son piquet. « Il parle gentiment à tout ce qu'il va mettre dans une cuve. »" },
    ],
    choices: [{ back: "K08j_concours" }] },

  K08j_aymon: { act: "III", title: "Le neveu du Juré", backName: "Aymon Foliot", place: "foire", ambiance: "ville", fx: { meet: "aymon" },
    text: [
      { first: true, text: "Il range ses limes dans le maroquin, par ordre de taille, une à une. De près, il a dix-sept ans, une jolie figure fatiguée, et de l'encre au petit doigt : on le fait écrire, chez son oncle, plus qu'on ne le fait limer." },
      { first: true, after: "j:concours_gagne", text: "« Vous m'avez battu. » Il le constate, comme on lit un cadran. « Il faudrait vous haïr. Mon oncle s'en charge, il a plus d'entraînement. Moi, j'ai entendu partir votre mouvement sous le bandeau pendant que le mien descendait l'escalier, et j'ai pensé : voilà quelqu'un qui n'a peur de personne sur ces bancs. C'est un grand avantage. J'ai eu peur de quelqu'un toute ma vie, au premier rang. »" },
      { first: true, before: "j:concours_gagne", text: "« J'ai la clef. » Il la regarde dans sa main, sans joie excessive. « Je l'aurais eue l'an dernier, si je n'avais pas eu la main qui tremble. Je l'ai cette année parce que vous avez eu moins de chance que moi. Mon oncle dira que le sang parle. Je vous ai vu{e} travailler : le sang n'a rien dit du tout. »" },
      { again: true, text: "Aymon Foliot boucle sa trousse de maroquin. Son oncle l'attend dehors ; il ne se presse pas." },
    ],
    choices: [
      { label: "« Foliot. Il y a eu un Grand Maître de ce nom. »", hide: { any: [{ not: { has: "j:sait_481" } }, { seen: "K08j_aymon_481" }] }, to: "K08j_aymon_481" },
      { label: "Lui demander ce qu'on dit du vote, chez son oncle", hide: { any: [{ not: { has: "j:sait_vote" } }, { seen: "K08j_aymon_vote" }] }, to: "K08j_aymon_vote" },
      { back: "K08j_concours" },
    ] },
  K08j_aymon_481: { act: "III", title: "Les papiers de l'aïeul Évrard", place: "foire", ambiance: "ville", fx: { flag: "j:sait_cire", ep: ["histoire", 400] },
    text: [
      "Les mains d'Aymon s'arrêtent sur le fermoir d'argent. « On ne prononce pas ce nom chez nous. On le prononce donc beaucoup, à voix basse, dans les escaliers. D'où le tenez-vous ? » Tu dis : d'un registre, dans une abbaye. Il hoche la tête. « Les religieuses écrivent tout. C'est ce qui les rend dangereuses. »",
      "Il s'assoit sur le bord de l'estrade. « Évrard Foliot. Mon bisaïeul. Grand Maître à trente-cinq ans, déposé à trente-six. Il a voulu voir ce que le Livre défend ; il a tenu le Balancier entre le troisième coup de none et le quatrième. Le temps de trois psaumes. Tout le monde sait cela, dans la famille, et tout le monde en a honte. »",
      "« Ce que la famille ne lit pas, c'est son journal. Il est au grenier, dans une malle, sous des rideaux. Je l'ai lu à douze ans, avec une chandelle, et j'ai compris pourquoi on l'avait déposé au lieu de le pendre : il avait pris ses précautions. » Aymon baisse la voix. « Le Livre dit que tout ce qui a ouï le premier coup demeure tenu jusqu'au second. Évrard a lu la phrase comme un horloger lit un plan. *Ce qui a ouï.* Il a pris son sonneur, un nommé Thibaut, et il lui a coulé de la cire dans les deux oreilles avant none. Thibaut a vu la corde du troisième coup lui tirer les bras, sans rien entendre. Il a récité ses trois psaumes, de mémoire, en regardant les pigeons arrêtés devant les abat-son. Puis il a sonné le quatrième. »",
      "Il rouvre les mains. « Voilà. C'est écrit de sa main, avec l'heure et le poids de la cire. Un homme qui n'a pas entendu n'est pas pris. Mon oncle brûlerait cette malle s'il savait que je sais la lire ; il aime mieux avoir un ancêtre fou qu'un ancêtre prudent. Cela oblige moins. »",
      "Tu ne dis rien. De la cire. Il passe sur le canal, deux fois par semaine, des barges entières de cire, et tout un royaume, chez toi, attend depuis soixante ans faute d'une paire d'oreilles bouchées dans un clocher.",
    ],
    choices: [{ back: "K08j_aymon" }] },
  K08j_aymon_vote: { act: "III", title: "Avec le nombre", place: "foire", ambiance: "ville",
    text: [
      "« Vous savez cela aussi. » Aymon te regarde avec un commencement d'inquiétude. « Vous êtes des champs, et vous savez ce qui se vote dans quatre jours sur la colline. Les champs ont bien changé. »",
      "« Mon oncle votera oui. Il vote avec le nombre : c'est sa religion. Il dit qu'un Foliot a eu raison tout seul une fois, il y a soixante ans, et que la famille n'a pas fini de payer. » Il a un petit rire. « Remarquez la tournure. Il ne dit pas qu'Évrard a eu tort. »",
      "« Si le nombre changeait, mon oncle changerait avec lui, et de bon cœur. Seulement il lui faut trois voix devant lui pour bouger : la sienne ferait la quatrième, et alors il serait le nombre. Trouvez-lui trois Jurés qui disent non, et vous aurez Foliot par-dessus le marché. C'est l'homme le plus fidèle du monde. Il suffit de savoir à quoi. »",
    ],
    choices: [{ back: "K08j_aymon" }] },
});

module.exports = {
  passages: P,
  extras: {
    people: {
      aymon: { name: "Aymon Foliot", f: false, aka: ["Aymon", "Aymon Foliot"], face: { age: "jeune", skin: "clair", hair: "chatain", coif: "milong", eyes: "amande", iris: "brun", nose: "fin", lips: "fines", shape: "ovale" },
        aspect: { allure: "dix-sept ans, des manchettes de dentelle", habits: "une trousse de maroquin à fermoir d'argent", signe: "de l'encre au petit doigt" }, qui: "Apprenti horloger, neveu du Juré Foliot.", desc: "Le neveu du Juré Foliot. Il sait ses livres, il a peur de son oncle, et il a lu au grenier ce que sa famille cache." },
    },
    items: {
      montre_morte: { name: "Montre au ressort cassé", kind: "divers", price: 1, desc: "Une honnête montre à verge, vieille de vingt ans, dont le ressort a cassé net. Tout le reste est sain. On peut l'ouvrir sans regret." },
      clef_apprenti: { name: "Clef de bronze des apprentis", kind: "divers", keep: true, price: 0, desc: "Petite clef de bronze verdi, un balancier dans l'anneau : le prix du concours. Elle ouvre un an durant la porte des apprentis, à la cour de la Guilde." },
    },
  },
};
