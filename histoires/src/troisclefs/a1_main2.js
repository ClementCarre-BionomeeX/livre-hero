// Act I, the hand (post `a1` = main), second half: inside the Tour de l'Horloge-Close. The stair, the salle des Poids,
// the invalid on the last landing, the antechamber and the door with three locks, then the way down.
// Sets: monde:a1:empreintes (the three keyholes in wax), monde:a1:plume (heard the scratching behind the door),
// monde:a1:horloge_connue (knows how the clock's striking train is held: of use in act V).
// Personal: a1:m_guerite = ami | endormi | sonne, a1:m_alerte.
var ENTREE = function (v) { return { has: "a1:m_entree=" + v }; };

module.exports = {
  passages: {
    // ------------------------------------------------------------ from below
    A1m_tour_bas: { act: "I", title: "Dans l'épaisseur du mur", place: "citadelle", ambiance: "souterrain",
      text: [
        { if: ENTREE("soupirail"), text: "Tu es dans la fosse des poids. C'est un puits carré, large de quatre pas, qui monte dans la Tour à perte de vue ; et dans ce puits, tenu par une chaîne dont chaque maillon ferait un bracelet à un homme, descend un bloc de fonte de la taille d'un confessionnal. Il descend d'un doigt, s'arrête, et tu entends très haut le cliquet qui retombe. Puis d'un doigt encore. Il met un jour entier à venir jusqu'ici. Demain à six heures, un vieil homme le fera remonter à la manivelle.", else: "La porte de fer se referme derrière toi sur son propre poids, sans bruit. Tu es au pied d'un escalier à vis, logé dans l'épaisseur du mur, si étroit que tes deux épaules en touchent les parois. Par une arcade, à ta gauche, il prend jour sur un puits carré où quelque chose d'énorme descend avec lenteur, au bout d'une chaîne : les poids de l'horloge." },
        "L'air sent l'huile, la pierre froide, et le fer travaillé. Il fait ici un silence particulier, fait de bruits réguliers : le cliquet, la chaîne, et quelque part au-dessus un battement large, espacé, que tu sens dans tes semelles avant de l'entendre. Les gens d'en bas disent que la Tour a un cœur. Ils le disent pour rire, et ils n'y sont jamais entrés.",
        "L'escalier monte dans le noir.",
      ],
      choices: [
        { label: "Monter, la lanterne sourde entrouverte d'un doigt", if: { item: "lanterne" }, fx: { ep: ["perso", 200] }, to: "A1m_vis", hide: { not: { item: "lanterne" } } },
        { label: "Monter à tâtons, une main sur le noyau de la vis", test: { dom: "nature", diff: 10, label: "Nature" }, win: { fx: { ep: ["perso", 200] }, to: "A1m_vis" }, lose: { fx: { pv: -1 }, to: "A1m_vis" } },
      ] },
    A1m_vis: { act: "I", title: "Cent quatre-vingts marches", place: "citadelle", ambiance: "souterrain",
      text: [
        { outcome: "lose", text: "Une marche manque, ou tu la manques. Ton tibia trouve l'arête de la suivante, et tu apprends que la pierre de la Tour est d'un grain très serré." },
        "Les marches sont hautes, creusées en leur milieu, et tournent toujours du même côté, comme une pensée dont on ne sort pas. Au bout de cinquante, tu as perdu le sens du dehors. Au bout de cent, celui du temps : il n'y a plus que la vis, le battement qui grandit, et de loin en loin une archère où passe une lame de jour, assez mince pour qu'on puisse la croire peinte sur le mur.",
        "Par l'une d'elles, tu aperçois la cour, très bas, et deux joueurs de dés de la taille de deux mouches. Ils n'ont pas levé la tête. Personne ne lève jamais la tête vers cette tour ; c'est une habitude que la ville a prise il y a cent ans, comme on évite de regarder en face quelqu'un qui vous juge.",
        "À la cent quatre-vingtième marche, l'escalier débouche sur un plancher.",
      ],
      choices: [{ label: "Passer la tête au ras du plancher", to: "A1m_poids" }] },

    // ------------------------------------------------------------ the salle des Poids
    A1m_poids: { act: "I", title: "La salle des Poids", place: "citadelle", ambiance: "souterrain", hub: true, backName: "la salle des Poids",
      text: [
        { first: true, text: "Voici le cœur. La salle tient toute la largeur de la Tour, et il n'y a pas un pied carré de ses murs que la machine n'occupe. Trois tambours de chêne, cerclés de fer, hauts comme des cuves de vigneron, tournent sur leurs axes d'un mouvement que l'œil ne saisit pas et que l'on constate seulement, comme on constate qu'une ombre a changé de place. Les chaînes en descendent par des trappes. Au-dessus, dans une cage de fer forgé, des roues de laiton plus grandes qu'une table s'engrènent dent à dent ; et au milieu de tout cela, pendu à une tige de dix pieds, un balancier va et vient, avec une lentille de cuivre large comme un bouclier, qui fend l'air à chaque passage en poussant un soupir." },
        { first: true, text: "C'est ce soupir que tu entendais d'en bas. De près, il est si régulier, si patient, il ressemble tant à la respiration d'un grand dormeur, que tu te surprends à régler ton souffle sur lui, et que tu dois faire un effort pour reprendre le tien." },
        { first: true, text: "Dans un angle, sous une lampe éteinte, le coin d'un homme : un tabouret, un établi, des burettes rangées par taille. Près de la trappe aux chaînes, une caisse de sapin neuve, clouée, que personne n'a ouverte. Au fond, une échelle de meunier monte vers une trappe du plafond." },
        { again: true, text: "La salle des Poids, ses trois tambours, le balancier qui soupire. Le coin du Remonteur, la caisse neuve, l'échelle de meunier." },
      ],
      choices: [
        { label: "Fouiller le coin du Remonteur", to: "A1m_coin", hide: { seen: "A1m_coin" } },
        { label: "Ouvrir la caisse de sapin", to: "A1m_caisse", hide: { any: [{ seen: "A1m_caisse_ok" }, { seen: "A1m_caisse_ko" }] } },
        { label: "Étudier la cage aux roues, et ce qui commande la sonnerie", to: "A1m_mouvement", hide: { any: [{ seen: "A1m_mouvement_ok" }, { seen: "A1m_mouvement_ko" }] } },
        { label: "Monter l'échelle de meunier", to: "A1m_echelle", big: true },
      ] },
    A1m_coin: { act: "I", title: "Le coin du Remonteur", place: "citadelle", ambiance: "souterrain",
      text: [
        "Tout y est d'un homme soigneux et seul. Les burettes brillent. Les chiffons sont pliés. Une ardoise, pendue à un clou, porte en colonnes ce qu'il a fait chaque matin depuis le début du mois : *graissé le grand tambour. Resserré la chaîne du milieu. Nettoyé les dents de la roue de compte.* L'écriture est fine, un peu tremblée.",
        "Les trois dernières lignes sont d'une autre main, ou de la même en d'autres dispositions : appuyées, de travers, la craie écrasée.",
        "*Reçu la caisse. Ils veulent que ce soit posé avant la Nuit.*",
        "*Demandé au Syndic ce que c'était. Il m'a répondu que j'étais payé pour graisser.*",
        "*Je sais ce que c'est.*",
        "Sous le tabouret, tu trouves une paire de chaussons de lisière, usés au talon. Il les mettait pour monter l'échelle. Un homme qui ôte ses souliers pour grimper au-dessus de sa propre machine a peur de déranger quelqu'un, ou quelque chose.",
      ],
      fx: { clue: "s_ardoise", ep: ["perso", 300] },
      choices: [{ back: "A1m_poids" }] },
    A1m_caisse: { act: "I", title: "La caisse", place: "citadelle", ambiance: "souterrain",
      text: [
        "La caisse fait trois pieds de long. Le couvercle est cloué de frais, et marqué au fer d'un poinçon que toute la ville connaît : un marteau dans un cercle, la marque des forges de Ferrières. Dessous, à la craie, quelqu'un a écrit *FRAGILE* et, plus bas, *À M. Balancier, en la Tour. Ne pas ouvrir hors la présence des Trois.*",
        "Les Trois ne sont pas là.",
      ],
      choices: [
        { label: "Soulever deux clous, regarder, les remettre", test: { dom: "savoir", diff: 0, label: "Savoir", help: [{ if: { voie: "crocheteur" }, v: 10 }, { if: { voie: "alchimiste" }, v: 10 }] }, win: { fx: { clue: "s_cylindre", ep: ["perso", 600] }, to: "A1m_caisse_ok" }, lose: { fx: { clue: "s_cylindre_vu", ep: ["perso", 200] }, to: "A1m_caisse_ko" } },
        { label: "N'y pas toucher", back: "A1m_poids" },
      ] },
    A1m_caisse_ok: { act: "I", title: "Un cylindre à picots", place: "citadelle", ambiance: "souterrain",
      text: [
        "Dans la paille repose un cylindre de bronze, gros comme un tonnelet, monté sur un axe d'acier. Sa surface est hérissée de milliers de petites pointes, plantées en lignes serrées, comme la peau d'une râpe.",
        "Tu as déjà vu cela, en cent fois plus petit : dans les serinettes que tournent les aveugles au coin des ponts. Le cylindre tourne, les pointes soulèvent des lames, et l'air sort tout seul, toujours le même, autant de fois qu'on veut. On en change quand on est las de la chanson.",
        "Celui-ci n'a pas été fait pour chanter. Les pointes sont trop grosses, trop écartées, rangées par groupes inégaux que séparent des blancs. Tu passes la main dessus, lentement, comme les aveugles lisent ; et tu comprends, sans pouvoir le déchiffrer, que ces groupes sont des mots.",
        "Tu remets la paille, le couvercle, les deux clous. Quelqu'un a commandé à Ferrières une machine à répéter des paroles, et l'a fait livrer sous le plancher du Juge.",
      ],
      choices: [{ back: "A1m_poids" }] },
    A1m_caisse_ko: { act: "I", title: "Du bronze dans de la paille", place: "citadelle", ambiance: "souterrain",
      text: [
        "Le premier clou vient. Le second se tord, et tu n'oses pas forcer : un couvercle fendu se verrait demain. Par la fente, à la lueur que tu as, tu distingues de la paille, et dans la paille le flanc d'une grosse pièce de bronze, ronde, couverte de pointes comme une bogue de châtaigne.",
        "Cela pèse, cela vient de Ferrières, et cela doit être posé avant la Nuit des Clefs. Tu n'en sauras pas davantage par un trou de clou.",
      ],
      choices: [{ back: "A1m_poids" }] },
    A1m_mouvement: { act: "I", title: "La cage aux roues", place: "citadelle", ambiance: "souterrain",
      text: [
        "Tu n'es pas de la guilde des Heures. Mais une horloge est une serrure qui a pris son temps : des roues au lieu de gorges, un poids au lieu d'une main, et quelque part un cran qui retient tout le reste jusqu'au moment choisi.",
        "Tu cherches ce cran. La cage a deux trains de rouages : celui qui marche, à droite, avec le balancier ; et à gauche, immobile, bandé comme un piège, celui qui sonne. Entre les deux, une roue à encoches, large comme un plat, où un doigt d'acier attend de tomber.",
      ],
      choices: [
        { label: "Suivre de l'œil, sans rien toucher, le chemin d'un coup de cloche", test: { dom: "savoir", diff: 0, label: "Savoir", help: [{ if: { voie: "crocheteur" }, v: 15 }] }, win: { fx: { flag: "monde:a1:horloge_connue", ep: ["perso", 600] }, to: "A1m_mouvement_ok" }, lose: { to: "A1m_mouvement_ko" } },
      ] },
    A1m_mouvement_ok: { act: "I", title: "Le doigt d'acier", place: "citadelle", ambiance: "souterrain",
      text: [
        "Tu y passes le temps d'un quart d'heure, et l'horloge a la bonté de te faire la démonstration : le doigt tombe dans son encoche, le train de gauche se déclenche, une tringle monte à travers le plafond, et très haut, au-dessus de toi, la grosse cloche de la citadelle sonne les trois quarts. Toute la Tour en frémit comme un verre.",
        "Tu as vu. Le doigt est tenu par une goupille grosse comme un clou de charpente, qu'une main peut tirer. Qu'on la tire, et la cloche se tait jusqu'à ce qu'on la remette, sans que rien d'autre s'arrête : la ville perdrait ses heures et le Juge garderait son souffle. Qu'on cale au contraire la roue de compte, et la cloche sonnerait tant qu'il y a du poids, c'est-à-dire jusqu'au matin.",
        "Il y a aussi ce que tu remarques sans le chercher : la roue de compte a une encoche plus large que les autres, entre sept et huit. Le petit retard que toute la ville connaît n'est pas de l'usure. On l'a taillé.",
      ],
      choices: [{ back: "A1m_poids" }] },
    A1m_mouvement_ko: { act: "I", title: "Trop de roues", place: "citadelle", ambiance: "souterrain",
      text: [
        "Tu suis une roue, qui en mène une autre, qui en mène trois. Au bout d'un moment tu ne sais plus laquelle tu suivais, et le balancier, à chaque passage, t'envoie au visage son soupir de dormeur, comme pour te conseiller de laisser cela aux gens dont c'est l'état.",
        "Les horlogers font sept ans d'apprentissage. Tu avais un quart d'heure.",
      ],
      choices: [{ back: "A1m_poids" }] },

    // ------------------------------------------------------------ the last landing
    A1m_echelle: { act: "I", title: "La trappe", place: "citadelle", ambiance: "souterrain",
      text: [
        "L'échelle de meunier a quatorze barreaux, luisants au milieu. Tu les montes sur la pointe des pieds, près des montants, là où le bois ne parle pas.",
        "La trappe est levée. Tu arrêtes ta tête au ras du plancher d'au-dessus, et tu regardes.",
        "C'est un palier rond, sans fenêtre, éclairé par une chandelle. Il y a là un lit de sangle, un poêle de fonte, une table. À la table, de profil, un vieux soldat en bonnet de police fait une réussite, avec des cartes si usées qu'elles ont perdu leurs coins. Une jambe de bois est allongée devant lui, sur un tabouret, comme une chose qu'on repose. À son cou pend une trompe de cuivre.",
        "Derrière lui, trois marches, une voûte, et l'ombre d'une porte.",
        { if: { has: "a1:m_releve" }, text: "Le père La Guérite. Vingt ans de palier, et une trompe qui n'a jamais sonné." },
      ],
      choices: [
        { label: "Attendre qu'une réussite l'absorbe, et passer derrière son dos", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { has: "a1:m_pipeau" }, v: 15 }, { if: { voie: "coureur" }, v: 10 }] }, win: { fx: { set: { "a1:m_guerite": "endormi" }, ep: ["perso", 500] }, to: "A1m_antichambre" }, lose: { to: "A1m_guerite" } },
        { label: "Monter franchement : « Bonsoir, l'ancien. C'est le Remonteur qui m'envoie. »", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { item: "eau_de_vie" }, v: 20 }, { if: { has: "monde:a1:savinien" }, v: 10 }] }, win: { fx: { set: { "a1:m_guerite": "ami" }, ep: ["perso", 500] }, to: "A1m_guerite_ami" }, lose: { to: "A1m_guerite" } },
      ] },
    A1m_tour_haut: { act: "I", title: "Le hourd", place: "citadelle",
      text: [
        "Le hourd est une galerie de bois accrochée au sommet de la Tour, d'où l'on jetait autrefois des pierres sur les gens. On n'y a rien jeté depuis le siège. Les pigeons en ont fait une ville, avec ses quartiers, ses disputes et son fumier.",
        "Tu en fais le tour, courbé{e}, sur des planches qui ploient. D'ici, on touche la pierre du dernier étage. Elle avait des archères ; on les a murées, il y a longtemps, de briques posées de chant. D'une seule, à hauteur de ton épaule, entre deux briques, sort un bout de laine grise, long comme le doigt, que le vent agite. Un oiseau, sans doute, qui avait commencé un nid.",
        "Plus loin, une lucarne à volet donne dans la Tour. Le volet tient par une ficelle. Tu l'écartes : sous toi, un palier rond, une chandelle, et le dos d'un vieux soldat en bonnet de police, assis à une table, qui fait une réussite. Une jambe de bois est allongée sur un tabouret. À son cou pend une trompe de cuivre.",
        "Tu arrives par où personne n'arrive. Il te tourne le dos.",
      ],
      choices: [
        { label: "Te laisser glisser derrière lui, sans un bruit, jusqu'à la voûte", test: { dom: "discretion", diff: 15, label: "Discrétion", help: [{ if: { voie: "coureur" }, v: 10 }] }, win: { fx: { set: { "a1:m_guerite": "endormi" }, ep: ["perso", 500] }, to: "A1m_antichambre" }, lose: { to: "A1m_guerite" } },
        { label: "Descendre posément, et lui souhaiter le bonsoir par-derrière", test: { dom: "social", diff: -10, label: "Social", help: [{ if: { item: "eau_de_vie" }, v: 25 }] }, win: { fx: { set: { "a1:m_guerite": "ami" }, ep: ["perso", 500] }, to: "A1m_guerite_ami" }, lose: { to: "A1m_guerite" } },
      ] },
    A1m_guerite: { act: "I", title: "Le père La Guérite", place: "citadelle",
      text: [
        "Une planche craque, ou un mot sonne faux. Le vieux tourne la tête, sans hâte. Il a une figure de cuir, une moustache jaune de tabac, et un œil unique, bleu, très clair, qui te prend tout entier{e}.",
        "« Vingt ans, dit-il. Vingt ans que j'attends qu'il monte quelqu'un. » Sa main est déjà sur la trompe. « J'avais fini par croire que ça serait un fantôme. »",
        "Il porte le cuivre à sa bouche.",
      ],
      urgent: 20,
      choices: [
        { label: "« Sonnez, et on vous relèvera demain. Vingt ans de palier pour finir à l'hospice ! »", test: { dom: "social", diff: -10, label: "Social" }, win: { fx: { set: { "a1:m_guerite": "ami" }, ep: ["perso", 600] }, to: "A1m_guerite_ami" }, lose: { fx: { set: { "a1:m_guerite": "sonne" }, flag: "a1:m_alerte" }, to: "A1m_guerite_sonne" } },
        { label: "Lui arracher la trompe avant qu'il souffle", timeout: true, test: { dom: "combat", diff: 0, label: "Combat" }, win: { fx: { set: { "a1:m_guerite": "endormi" }, ep: ["perso", 400] }, to: "A1m_guerite_trompe" }, lose: { fx: { set: { "a1:m_guerite": "sonne" }, flag: "a1:m_alerte", pv: -2 }, to: "A1m_guerite_sonne" } },
      ] },
    A1m_guerite_ami: { act: "I", title: "Vingt ans de palier", place: "citadelle",
      text: [
        "Le vieux repose ses cartes, ou sa trompe. Il te regarde longtemps. Puis il pousse du pied, vers toi, le tabouret où reposait sa jambe.",
        "« Assieds-toi. Je sais bien que le Remonteur n'envoie personne ; il monte lui-même, en chaussons, et il me dit bonjour par la trappe. Mais tu es la première figure que je vois depuis dimanche, et la seconde depuis la Saint-Michel. » Il bat ses cartes. « Je m'appelle Hilaire. La Guérite, c'est à cause du métier. On m'a mis là quand j'ai perdu la jambe : *tu garderas la porte d'en haut.* J'ai dit oui. Je ne savais pas que ça serait pour la vie. »",
        "Il te montre la voûte, derrière lui, d'un coup de menton. « Elle est là. Trois serrures. Personne ne l'ouvre, et je la garde. J'ai gardé des poudrières, des ponts, un général : c'est la première fois que je garde quelque chose qui n'a besoin de moi pour rien. »",
        "« Et si je la regardais ? »",
        "« Regarder ? » Il hausse les épaules, étale une carte. « La consigne dit : *ne laisser entrer personne.* Tu n'entreras pas, va. Regarde tant que tu veux. Seulement, ne reste pas trop tard. » Il hésite, et son œil bleu se détourne. « La nuit, ça gratte, là-derrière. Balancier dit que c'est le bronze qui travaille, à cause du froid. Moi j'ai fait trois sièges, et j'ai entendu travailler du bronze. Ça ne faisait pas ce bruit-là. »",
      ],
      fx: { clue: "j_gratte" },
      choices: [{ label: "Passer sous la voûte", to: "A1m_antichambre" }] },
    A1m_guerite_trompe: { act: "I", title: "Une trompe qui n'aura pas sonné", place: "citadelle",
      text: [
        "Tu es sur lui avant le souffle. La trompe passe de son cou à ta main, le cordon cassé, et vous restez face à face, lui assis, toi debout, avec entre vous une jambe de bois qu'il n'a pas eu le temps de ramener.",
        "Il ne crie pas. Crier, à cette hauteur, ne servirait qu'aux pigeons. Il te regarde de son œil unique, sans peur, avec une sorte de curiosité fatiguée. « Tu vas me tuer ? »",
        "« Non. »",
        "« Alors attache-moi comme il faut, que j'aie l'air de m'être défendu. Au pied du lit. Et laisse la chandelle. » Tu l'attaches comme il faut. Il te regarde faire en connaisseur, et rectifie un nœud.",
      ],
      choices: [{ label: "Passer sous la voûte", to: "A1m_antichambre" }] },
    A1m_guerite_sonne: { act: "I", title: "La trompe", place: "citadelle",
      text: [
        "Il sonne. C'est un vieux poumon dans un vieux cuivre, et il en sort un cri rauque, fêlé, lamentable, qui emplit le palier, tombe par la trappe dans la salle des Poids, et descend la vis en tournant.",
        "Le père La Guérite ôte la trompe de sa bouche et la considère avec étonnement. « Elle marche », dit-il.",
        "En bas, très loin, une porte ferrée claque. Il y a cent quatre-vingts marches entre le corps de garde et toi : à ce qu'on raconte de la garde de la Tour, cela fait le temps de trois Pater, si le sergent retrouve sa clef.",
        "La voûte est à trois pas. Tu n'es pas monté{e} jusqu'ici pour redescendre les mains vides.",
      ],
      choices: [{ label: "Sous la voûte, vite", to: "A1m_antichambre" }] },

    // ------------------------------------------------------------ the door with three locks
    A1m_antichambre: { act: "I", title: "La porte aux trois serrures", place: "citadelle", backName: "la porte",
      text: [
        { first: true, text: "Trois marches, une voûte basse, et tu y es." },
        { first: true, text: "L'antichambre est une cellule de pierre, nue, longue de quatre pas. Il n'y a rien dedans qu'un banc scellé au mur, pour trois personnes, et une porte. Elle prend tout le fond. Elle est en cœur de chêne, noire d'âge, ferrée de bandes larges comme la main, et les clous qui tiennent ces bandes ont des têtes taillées à facettes, où ta lumière se multiplie. On a bâti cette porte comme on bâtit une digue : en pensant à ce qu'il y a derrière." },
        { first: true, text: "Les trois serrures sont au milieu, l'une au-dessus de l'autre, et tu comprends en les voyant ce que voulait dire la Douairière. Celle du haut est un bloc d'acier poli, carré, sans un ornement, dont l'entrée a la forme d'un marteau. Celle du milieu est d'argent noirci, ciselée d'une couronne d'osselets, avec une entrée en larme. Celle du bas est dorée, sous une hure de sanglier dont les défenses encadrent une entrée en trèfle. Le Fer, la Cendre, le Sang. Elles se haïssent, cela se voit à l'œil nu, et elles tiennent ensemble la même porte." },
        { first: true, if: { has: "a1:m_guerite=sonne" }, text: "En bas, dans la vis, le bruit des bottes a commencé. Tu as le temps d'une chose, de deux si tes mains sont bonnes." },
        { again: true, text: "La porte de chêne, ses trois serrures : le marteau, la larme, le trèfle." },
        { again: true, if: { has: "a1:m_guerite=sonne" }, text: "Les bottes montent. Elles sont à mi-vis." },
      ],
      choices: [
        { label: "Prendre l'empreinte des trois entrées", to: "A1m_empreintes", hide: { any: [{ seen: "A1m_empreintes_ok" }, { seen: "A1m_empreintes_ko" }] } },
        { label: "Coller l'oreille au chêne", to: "A1m_ecoute", hide: { any: [{ seen: "A1m_ecoute" }, { all: [{ has: "a1:m_guerite=sonne" }, { seen: "A1m_empreintes" }] }] } },
        { label: "Examiner les serrures elles-mêmes, leurs platines, leurs abords", to: "A1m_examen", hide: { any: [{ seen: "A1m_examen_ok" }, { seen: "A1m_examen_ko" }, { has: "a1:m_guerite=sonne" }] } },
        { label: "Redescendre", to: "A1m_descente", big: true },
      ] },
    A1m_empreintes: { act: "I", title: "La cire", place: "citadelle",
      text: [
        { if: { item: "cire" }, text: "Tu ouvres la boîte de fer-blanc. La cire a gardé la tiédeur de ton corps ; tu la pétris encore, du pouce, jusqu'à ce qu'elle soit comme un lobe d'oreille.", else: "Tu n'as pas la boîte de fer-blanc. Tu as une chandelle dans ta poche, comme tout le monde dans le métier, et tu en pétris le suif entre tes paumes : cela prend moins bien, cela se déforme, mais cela prend." },
        "Une empreinte d'entrée, c'est l'enfance de l'art, quand on a le temps. On enduit une lame de bois, on la pousse dans la serrure, on la tourne d'un huitième contre les gardes, on la retire droit. La cire revient marquée de tout ce qu'elle a touché. Le difficile est de recommencer trois fois, dans trois serrures qui ne se ressemblent pas, sans que la main se croie arrivée après la première.",
      ],
      choices: [
        { label: "Le marteau, la larme, le trèfle : dans l'ordre, sans hâte", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { item: "cire" }, v: 20 }, { if: { voie: "crocheteur" }, v: 15 }, { if: { item: "rossignols" }, v: 5 }, { if: { has: "a1:m_guerite=sonne" }, v: -20 }] }, win: { fx: { flag: "monde:a1:empreintes", ep: ["seance", 2000] }, to: "A1m_empreintes_ok" }, lose: { fx: { ep: ["seance", 700] }, to: "A1m_empreintes_ko" } },
      ] },
    A1m_empreintes_ok: { act: "I", title: "Trois portraits", place: "citadelle",
      text: [
        "Le marteau d'abord. La lame entre, tourne, bute sur une garde épaisse, franche, sans malice : une serrure de forgeron, qui compte sur sa masse. La larme ensuite, et celle-là est d'une autre école ; la lame y rencontre des gardes minces, nombreuses, disposées en chicane, de l'ouvrage d'orfèvre où l'on a mis de la patience et du mépris. Le trèfle enfin, qui te surprend : sous sa dorure et sa hure, c'est la plus simple des trois, une bonne serrure de coffre de voyage, faite par quelqu'un qui pensait que personne n'oserait.",
        "Tu enveloppes les trois lames dans ton mouchoir, séparément, comme des œufs. Tu as dans ta poche le visage intérieur de la porte la mieux gardée d'Aiguemorne.",
      ],
      choices: [{ back: "A1m_antichambre" }] },
    A1m_empreintes_ko: { act: "I", title: "Une sur trois", place: "citadelle",
      text: [
        "Le marteau vient bien. La larme vient mal : la lame accroche dans la chicane, tu forces d'un rien, et la cire s'arrache en revenant, laissant dans la serrure une miette que tu passes un temps précieux à repêcher. Quand tu arrives au trèfle, tes mains ont commencé à trembler, de ce tremblement fin qui vient après l'effort et que le métier appelle la danse.",
        "Tu as une empreinte nette, une douteuse, une manquée. La Douairière en tirera ce qu'elle pourra, c'est-à-dire des regrets.",
      ],
      choices: [{ back: "A1m_antichambre" }] },
    A1m_ecoute: { act: "I", title: "Contre le chêne", place: "citadelle",
      text: [
        "Tu poses l'oreille sur le bois, entre deux bandes de fer. Il est froid, et il sonne plein.",
        "D'abord tu n'entends que la Tour : le balancier, sous tes pieds, et son soupir. Puis ton oreille se fait à ce bruit, le met de côté comme on écarte un rideau, et cherche derrière.",
        "Il y a quelque chose derrière. C'est très faible. Un petit bruit sec, régulier, pressé, qui court un moment, s'arrête, reprend ; le bruit que ferait une souris dans du papier, si une souris allait de gauche à droite, toujours de gauche à droite, avec un arrêt au bout de chaque ligne.",
        "Tu changes de pied. Une de tes semelles frotte la dalle.",
        "Le petit bruit s'arrête net.",
        "Il y a alors, de l'autre côté du chêne, un silence qui n'est pas celui d'une chambre vide. Tu le connais ; c'est le tien, quand tu écoutes à une porte. Vous restez ainsi, le temps de dix battements du grand balancier. Par l'entrée en larme, à hauteur de ta joue, vient un souffle d'air tiède, qui sent la chandelle qu'on vient de moucher.",
        "Puis le grattement reprend, plus lent.",
      ],
      fx: { flag: "monde:a1:plume", clue: "j_plume", ep: ["histoire", 1000] },
      choices: [{ back: "A1m_antichambre" }] },
    A1m_examen: { act: "I", title: "Les platines", place: "citadelle",
      text: [
        "Tu approches ta lumière des trois serrures, et tu les regardes comme la Douairière t'a appris à regarder : en commençant par ce qui est autour.",
      ],
      choices: [
        { label: "Chercher qui a touché cette porte, et quand", test: { dom: "nature", diff: 0, label: "Nature", help: [{ if: { voie: "crocheteur" }, v: 15 }] }, win: { fx: { clue: "g_deux", ep: ["perso", 600] }, to: "A1m_examen_ok" }, lose: { to: "A1m_examen_ko" } },
      ] },
    A1m_examen_ok: { act: "I", title: "Deux sur trois", place: "citadelle",
      text: [
        "La poussière d'abord. Sur le banc scellé, sur les dalles, elle a sept ans, et elle est intacte, sauf une piste : des pieds petits, légers, chaussés de souple, qui sont venus de la voûte à la porte et repartis. C'est récent. Une nuit, deux au plus.",
        "Ensuite les serrures. Au bord de l'entrée en marteau, dans l'angle, il reste une miette jaune, grosse comme une tête d'épingle. Tu la prends sur l'ongle : de la cire à empreintes, de la bonne. Il y en a une autre, écrasée, au bord de l'entrée en larme.",
        "Autour du trèfle, sous la hure dorée, rien. La poussière du rebord y est entière.",
        "Quelqu'un du métier est monté ici avant toi, a pris le portrait de deux serrures, et a négligé la troisième.",
      ],
      choices: [{ back: "A1m_antichambre" }] },
    A1m_examen_ko: { act: "I", title: "De la poussière", place: "citadelle",
      text: [
        "Il y a de la poussière, des traces dans la poussière, et les tiennes par-dessus. Tu as marché partout avant de regarder ; c'est la faute que la Douairière punissait d'une taloche, en ajoutant que les yeux devaient entrer dans une pièce avant les pieds.",
        "Quelqu'un est venu ici il y a peu. C'est tout ce que le plancher veut bien répéter.",
      ],
      choices: [{ back: "A1m_antichambre" }] },

    // ------------------------------------------------------------ the way down
    A1m_descente: { act: "I", title: "Redescendre", place: "citadelle", branch: [
      { if: { has: "a1:m_guerite=sonne" }, to: "A1m_desc_alerte" }, { to: "A1m_desc_calme" }] },
    A1m_desc_calme: { act: "I", title: "Le chemin du retour", place: "citadelle",
      text: [
        { if: { has: "a1:m_guerite=ami" }, text: "Le père La Guérite a fini sa réussite. Elle est manquée. « À dimanche », dit-il sans lever la tête, comme à quelqu'un qui reviendra ; et tu comprends qu'il ne dira rien, parce qu'avouer une visite serait avouer vingt ans sans en avoir eu." },
        { if: { has: "a1:m_guerite=endormi" }, text: "Sur le palier, le vieux soldat est où tu l'as laissé. La chandelle a baissé d'un doigt." },
        "La trappe, l'échelle, la salle des Poids, où le balancier te salue de son soupir. Le jour a tourné : par les archères de la vis, les lames de lumière sont devenues rouges. Tu as passé là-haut plus d'heures que tu ne croyais. La Tour mange le temps de ceux qui y entrent ; c'est peut-être pour cela qu'elle n'a pas d'aiguilles.",
        "Il reste à sortir de la citadelle avant qu'on ferme les portes.",
      ],
      choices: [
        { label: "Par la sacristie, et la chapelle où Savinien allume pour le salut", if: { any: [ENTREE("sacristie"), { has: "monde:a1:savinien" }] }, fx: { ep: ["perso", 300] }, to: "A1m_sortie_chapelle", hide: { not: { any: [ENTREE("sacristie"), { has: "monde:a1:savinien" }] } } },
        { label: "Par la cour, avec les lavandières qui redescendent", test: { dom: "social", diff: 10, label: "Social", help: [{ if: { has: "a1:m_alerte" }, v: -15 }] }, win: { fx: { ep: ["perso", 300] }, to: "A1m_sortie_cour" }, lose: { fx: { pv: -2 }, to: "A1m_sortie_ko" } },
        { label: "Par le lierre du levant, à la brune", test: { dom: "nature", diff: 10, label: "Nature", help: [{ if: { item: "corde" }, v: 15 }] }, win: { fx: { ep: ["perso", 300] }, to: "A1m_sortie_lierre" }, lose: { fx: { pv: -2 }, to: "A1m_sortie_ko" } },
      ] },
    A1m_desc_alerte: { act: "I", title: "Trois Pater", place: "citadelle",
      text: [
        "Les bottes sont dans la vis, et la vis n'a qu'un chemin. Tu repasses le palier en courant ; le père La Guérite, sa trompe aux genoux, te regarde filer avec l'air d'un homme qui a fait son devoir et n'est pas sûr d'en être content.",
        "Par la trappe, par l'échelle. La salle des Poids. En bas, des voix montent, déformées par la pierre : « Plus haut ! Il est plus haut ! » Ils seront là dans une minute.",
        "Il y a la trappe aux chaînes, où descendent les poids, vers la fosse et le soupirail. Il y a la lucarne du hourd, au-dessus, et la poutre. Et il y a l'ombre des trois tambours, où une personne mince, immobile, pourrait laisser passer une troupe.",
      ],
      urgent: 25,
      choices: [
        { label: "Te laisser glisser le long de la chaîne du grand poids", test: { dom: "nature", diff: 0, label: "Nature", help: [{ if: ENTREE("soupirail"), v: 20 }] }, win: { fx: { ep: ["seance", 800] }, to: "A1m_fuite_chaine" }, lose: { fx: { pv: -4 }, to: "A1m_fuite_chaine_ko" } },
        { label: "Remonter au hourd et repasser la poutre", test: { dom: "nature", diff: 0, label: "Nature", help: [{ if: ENTREE("hourd"), v: 20 }, { if: { voie: "coureur" }, v: 10 }] }, win: { fx: { ep: ["seance", 800] }, to: "A1m_fuite_poutre" }, lose: { fx: { pv: -3 }, to: "A1m_fuite_poutre_ko" } },
        { label: "Te plaquer derrière le grand tambour et ne plus respirer", timeout: true, test: { dom: "discretion", diff: 0, label: "Discrétion" }, win: { fx: { ep: ["seance", 800] }, to: "A1m_fuite_tambour" }, lose: { to: "A1m_fuite_combat" } },
      ] },
    A1m_sortie_chapelle: { act: "I", title: "Le salut du soir", place: "citadelle", ambiance: "temple",
      text: [
        "La porte de fer, la sacristie, la petite porte derrière l'autel. La chapelle est pleine d'une odeur de cire neuve. Savinien allume les six cierges du salut, un à un, avec une longue canne, et les milliers de clefs pendues aux murs prennent feu l'une après l'autre.",
        { if: { has: "monde:a1:savinien" }, text: "Il te voit sortir de derrière l'autel. Sa canne reste en l'air. Il ouvre la bouche, la referme ; puis il se retourne vers ses cierges, très rouge, et allume le suivant. Il t'a vu{e}. Il a décidé qu'il priait.", else: "Il te tourne le dos. Tu traverses la nef dans le chuchotement des clefs, du pas de quelqu'un qui a fini ses dévotions." },
        "Dehors, la cour est violette. On sonne la fermeture. Tu passes la grande porte avec les derniers porteurs, sous le nez de la guérite, parmi des gens fatigués à qui personne ne demande rien.",
      ],
      choices: [{ label: "Redescendre en ville", to: "A1m_soir" }] },
    A1m_sortie_cour: { act: "I", title: "Avec les lavandières", place: "citadelle",
      text: [
        "Elles sont six, les bras rouges, leurs battoirs sur l'épaule, et elles redescendent en parlant toutes à la fois. Tu prends un panier vide que personne ne porte. On ne demande pas son nom à quelqu'un qui porte un panier.",
        "« C'est un amoureux », dit la plus large, qui te reconnaît peut-être, ou qui dit cela de tout le monde. Elles rient. Vous passez la voûte, le pont, la guérite, dans une odeur de lessive et un bruit de sabots, et le factionnaire salue les dames.",
      ],
      choices: [{ label: "Redescendre en ville", to: "A1m_soir" }] },
    A1m_sortie_lierre: { act: "I", title: "Le lierre, à la brune", place: "citadelle",
      text: [
        "Le chemin de ronde est vide du côté du levant : la sentinelle regarde le couchant, comme tous les hommes à cette heure. Tu enjambes le parapet et tu confies ton poids au vieux lierre, qui te reconnaît.",
        "La descente est plus longue que la montée ; elle l'est toujours. Quand tes pieds touchent les orties, la première étoile est sortie au-dessus de la Tour, à côté du cadran nu, comme une aiguille qu'on lui aurait prêtée.",
      ],
      choices: [{ label: "Redescendre en ville", to: "A1m_soir" }] },
    A1m_sortie_ko: { act: "I", title: "La fermeture des portes", place: "citadelle",
      text: [
        "Cela se passe mal, comme se passent les sorties qu'on croyait acquises. Une main sur ton bras, ou une branche qui lâche ; une voix qui dit « Hé ! » ; et te voilà à courir dans une cour qui se ferme, entre un canon et des poules, avec derrière toi ce bruit de bottes que tu commences à connaître.",
        "Tu passes. On passe toujours, quand on a vingt ans d'avance sur le caporal et rien à porter. Mais tu laisses dans l'affaire un morceau de manche, la peau d'un genou, et l'anonymat : il y a ce soir à la citadelle un rapport, qui parle d'un rôdeur vu deux fois près de la Tour.",
      ],
      fx: { flag: "a1:m_alerte" },
      choices: [{ label: "Redescendre en ville, par les venelles", to: "A1m_soir" }] },
    A1m_fuite_chaine: { act: "I", title: "Le grand poids", place: "citadelle", ambiance: "souterrain",
      text: [
        "Tu enjambes le bord de la trappe et tu saisis la chaîne à pleines mains. Elle est grasse, tiède de son propre travail. Tu te laisses filer, les pieds croisés sur les maillons, et la fosse t'avale.",
        "Au-dessus de toi, la salle des Poids s'emplit de lanternes et de voix. Aucune ne se penche. On ne cherche pas un voleur le long d'une chaîne d'horloge, pas plus qu'on ne le cherche dans une cloche qui sonne.",
        "Tu atterris sur le dos du grand poids, qui continue de descendre sous toi, d'un doigt à la fois, avec une indifférence magnifique. De là, la corniche, le soupirail, le puits. Tu sors de la citerne à la nuit tombée, dans une cour que toute la garde a quittée pour monter te prendre.",
      ],
      choices: [{ label: "Franchir le rempart et redescendre en ville", to: "A1m_soir" }] },
    A1m_fuite_chaine_ko: { act: "I", title: "La graisse", place: "citadelle", ambiance: "souterrain",
      text: [
        "La chaîne est grasse. Tes mains le savaient, et l'ont oublié au mauvais moment. Tu files d'un trait, sans pouvoir serrer, dans un noir qui monte ; et tu arrives sur le dos du grand poids avec tout ton élan, à plat, d'une hauteur qui te vide les poumons.",
        "Tu restes là un moment, couché{e} sur la fonte, à regarder très haut le carré de lumière où passent des lanternes. Rien de cassé : tu remues, tout répond, tout proteste. La fosse, la corniche, le soupirail. Tu te hisses hors de la citerne comme un noyé, et tu traverses la cour vide en boitant des deux jambes.",
      ],
      choices: [{ label: "Franchir le rempart et redescendre en ville", to: "A1m_soir" }] },
    A1m_fuite_poutre: { act: "I", title: "La poutre, une seconde fois", place: "citadelle",
      text: [
        "Le palier, la lucarne, le hourd. Les pigeons s'envolent tous ensemble, et tu te dis que cela se verra de la ville entière ; mais la ville ne lève jamais la tête vers cette tour.",
        "La poutre est toujours là, large d'une main, et le soir l'a peinte en rouge. Tu regardes le bout. Tu n'as pas le loisir d'avoir peur : c'est le grand avantage des fuites sur les entrées. Le bout vient.",
        "Sur le chemin de ronde, il n'y a personne. Toute la garde est dans la vis, à monter cent quatre-vingts marches vers un palier où un vieux soldat lui expliquera que le voleur avait des ailes.",
      ],
      choices: [{ label: "Descendre du rempart et gagner la ville", to: "A1m_soir" }] },
    A1m_fuite_poutre_ko: { act: "I", title: "À califourchon", place: "citadelle",
      text: [
        "Au milieu de la poutre, ton pied gauche décide de regarder en bas. Le reste suit. Tu tombes à cheval sur le bois, de tout ton poids, et tu restes là, les jambes dans le vide, à quarante pieds d'une poule, en serrant la poutre contre toi comme un parent retrouvé.",
        "Tu finis la traversée dans cette position, par petites secousses, sans élégance aucune. Le rempart te reçoit moulu{e}, les cuisses en feu. Derrière toi, dans le hourd, une lanterne paraît à la lucarne, et une voix crie : « Sur le rempart ! » Tu es déjà dans l'escalier.",
      ],
      choices: [{ label: "Sauter dans le lierre et gagner la ville", to: "A1m_soir" }] },
    A1m_fuite_tambour: { act: "I", title: "Derrière le grand tambour", place: "citadelle", ambiance: "souterrain",
      text: [
        "Entre le grand tambour et le mur, il y a la place d'un chat. Tu t'y loges, de profil, la joue contre le chêne, qui tourne contre ta peau avec une lenteur de lune.",
        "Ils arrivent. Sept, huit, soufflant comme des bœufs, la hallebarde en travers dans l'escalier trop étroit. Leurs lanternes font danser sur les roues de laiton des éclairs où tu te vois par morceaux. Aucun ne regarde la machine. On ne regarde pas la machine ; on la contourne, comme une chose sacrée ou dangereuse, et l'on monte à l'échelle où mène la consigne.",
        "Quand le dernier a disparu par la trappe, tu comptes jusqu'à dix sur le balancier, et tu descends la vis qu'ils viennent de monter. En bas, la porte ferrée est ouverte, la clef dessus. Le corps de garde est vide. Tu sors de la Tour de l'Horloge-Close par la grande porte, comme un Clavaire.",
      ],
      fx: { ep: ["perso", 300] },
      choices: [{ label: "Traverser la cour et redescendre en ville", to: "A1m_soir" }] },
    A1m_fuite_combat: { act: "I", title: "Une lanterne dans la figure", place: "citadelle", ambiance: "souterrain",
      text: [
        "Le dernier de la file est un traînard, un gros, qui s'arrête pour souffler au pied de l'échelle. Il lève sa lanterne pour voir combien il reste de barreaux, et il te voit, toi, entre le tambour et le mur.",
        "Il ouvre la bouche. Les autres sont déjà là-haut.",
      ],
      choices: [
        { label: "Le faire taire, et descendre", fight: { title: "Dans la salle des Poids", enemies: [{ id: "garde_guet", n: 1 }], win: { fx: { ep: ["seance", 800] }, to: "A1m_fuite_combat_ok" }, lose: { to: "A1m_fuite_combat_ko" } } },
      ] },
    A1m_fuite_combat_ok: { act: "I", title: "Un garde assis", place: "citadelle", ambiance: "souterrain",
      text: [
        "Tu l'assieds contre le tambour, sa lanterne entre les jambes. Il respire fort et te regarde avec reproche ; il se plaindra à son sergent d'avoir été attaqué par six hommes.",
        "La vis, cent quatre-vingts marches, quatre à quatre. La porte ferrée est ouverte, le corps de garde vide. Tu sors de la Tour par où entrent les Clavaires.",
      ],
      choices: [{ label: "Traverser la cour et redescendre en ville", to: "A1m_soir" }] },
    A1m_fuite_combat_ko: { act: "I", title: "La vis, sur le dos", place: "citadelle", ambiance: "souterrain",
      text: [
        "Le gros a plus de bras que de souffle. Il te pousse, tu recules, ton talon rencontre le vide de l'escalier, et tu descends les vingt premières marches de la vis sur les reins, la tête dans les bras, comme un sac qu'on livre.",
        "C'est ce qui te sauve. Il n'ose pas te suivre dans le noir, et il crie vers le haut, où personne ne l'entend dans le vacarme de la trompe que La Guérite, mis en goût, s'est remis à sonner. Tu te relèves à tâtons. Tu descends le reste sur tes pieds, à peu près, et tu sors de la Tour sans savoir exactement combien tu as de côtes.",
      ],
      fx: { pv: -3 },
      choices: [{ label: "Traverser la cour et redescendre en ville", to: "A1m_soir" }] },

    A1m_soir: { act: "I", title: "La ville, le soir", place: "citadelle",
      text: [
        "Le Parvis, les galets, la première maison. Tu te retournes une fois. La Tour est noire sur un ciel encore clair, et son cadran nu a pris la couleur de la lune qui se lève.",
        { if: { has: "monde:a1:plume" }, text: "Tu penses au petit bruit. Tu y penseras longtemps. Il y a des choses qu'on rapporte d'un coup sans les avoir prises, et qui pèsent plus que le butin." },
        { if: { has: "monde:a1:empreintes" }, text: "Dans ta poche, trois lames de bois dans un mouchoir : le marteau, la larme, le trèfle.", else: "Dans ta poche, de la cire qui n'a pas tout dit. Tu répètes dans ta tête ce que tu as vu, la forme des trois entrées, pour pouvoir au moins le dessiner au charbon sur une table." },
        "Huit heures sonnent derrière toi, avec leur petit retard. Le rendez-vous est à neuf, au pied du rempart, impasse des Poids.",
      ],
      choices: [{ label: "Gagner l'impasse des Poids", to: "A1c_rdv", big: true }] },
  },

  extras: {
    clues: {
      s_ardoise: { rev: "S", text: "Ardoise du Remonteur, dans la Tour : « Reçu la caisse. Ils veulent que ce soit posé avant la Nuit. » Au Syndic, qui lui a répondu qu'il était payé pour graisser : « Je sais ce que c'est. »" },
      s_cylindre: { rev: "S", text: "Sous le plancher du Juge, une caisse des forges de Ferrières, « à n'ouvrir qu'en présence des Trois » : un cylindre de bronze à picots, comme ceux des serinettes, dont les pointes forment des mots." },
      s_cylindre_vu: { rev: "S", text: "Sous le plancher du Juge, une caisse des forges de Ferrières, « à n'ouvrir qu'en présence des Trois » : une grosse pièce de bronze ronde, couverte de pointes." },
      j_gratte: { rev: "J", text: "Le père La Guérite, qui garde depuis vingt ans la porte aux trois serrures : « La nuit, ça gratte, là-derrière. » Le Remonteur parle du bronze qui travaille au froid." },
      j_plume: { rev: "J", text: "Derrière la porte aux trois serrures : un petit bruit sec qui va « de gauche à droite », s'arrête au bout de chaque ligne, se tait quand on bouge, puis reprend. Par une serrure, une odeur de chandelle qu'on vient de moucher." },
      g_deux: { rev: "G", text: "Quelqu'un du métier, aux pieds petits et légers, a pris avant les Rossignols l'empreinte de deux des trois serrures : le Fer et la Cendre. Celle du Sang, il n'y a pas touché." },
    },
  },
};
