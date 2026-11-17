// Les Trois Clefs d'Aiguemorne · act IV, the eye (2): the 6th of November, from noon to the night. The kennels, the
// inn of the Grand Cerf where the provost has arrived, the postern under the willows, and at night the pavilion at
// the tail of the pond.
// Shared: monde:a4:veneurs, monde:a4:chasse_sue (where the count ends his hunts, alone), monde:a4:cadenas_vu,
// monde:cadenas:allie (he will not arrest before the Night of the Keys), monde:a4:cadenas_alerte (he knows the three
// are at Brandelis, and he comes), monde:a4:poterne (the postern opens from outside), monde:a4:pavillon (what was
// heard there), monde:a4:senechal (what the count does at the water's edge).
// Personal: a4:o_cadenas=fui|parle|assis, a4:o_suivi (followed the boat all the way).
// Ends at A4c_rdv (a4_rdv).
var DETTE = { has: "monde:douce:dette" };
var MARCHE = { all: [{ has: "monde:douce:marche" }, { not: "monde:douce:dette" }] };
var RANCUNE = { all: [{ has: "monde:douce:rancune" }, { not: "monde:douce:dette" }, { not: "monde:douce:marche" }] };
var PREUVES = { any: [{ has: "monde:ugolin:temoin" }, { has: "monde:a2:folio" }, { has: "monde:a3:pr_folio" }, { has: "monde:a3:pr_carnet" }, { has: "monde:a3:pr_formulaire" }, { has: "monde:a3:pr_billet" }, { has: "monde:a3:anthelme" }] };
var SAIT = { any: [{ has: "monde:cendre:sait" }, RANCUNE] };
module.exports = {
  passages: {
    A4o_apres: { act: "IV", title: "La cour des chenils", place: "chenils", ambiance: "chateau", hub: true, backName: "la cour des chenils",
      fx: { until: 13 },
      text: [
        { first: true, text: "Après la soupe des chiens, les chenils dorment. C'est l'heure creuse des équipages : les bêtes digèrent sur leur paille, les valets raccommodent des couples, et l'on entend la fontaine. La Brisée t'a rendu ta liberté jusqu'au soir, du ton dont on met un chien au repos." },
        { first: true, text: "« Demain, on ne chasse pas : Monsieur a ses créanciers. Après-demain, le Sénéchal. Tu en seras, si tu es encore là. »" },
        { again: true, text: "La cour sablée des chenils, sa fontaine, ses soixante dormeurs. De l'autre côté de l'eau, le château rouge, et sur la passerelle deux hallebardes noires qui ne regardent pas les chiens." },
      ],
      choices: [
        { label: "Entrer à l'infirmerie, où l'on recoud un chien", to: "A4o_infirmerie", once: true },
        { label: "Trouver La Brisée devant son livre", to: "A4o_livre", once: true },
        { label: "Descendre au village, par la chaussée", to: "A4o_village", once: true },
        { label: "Longer l'eau jusqu'aux saules, sous le rocher", to: "A4o_saules", once: true },
        { label: "À la nuit, te coucher sous ces saules", to: "A4o_nuit", big: true, if: { any: [{ seen: "A4o_village" }, { seen: "A4o_saules" }, { seen: "A4o_livre" }] }, why: "Il fait grand jour. Un valet de limier qui se couche à midi sous un saule, cela se remarque." },
      ] },

    A4o_infirmerie: { act: "IV", title: "L'infirmerie des chiens", place: "chenils", ambiance: "chateau",
      text: [
        "C'est une chambre blanchie à la chaux, avec six bat-flanc, une étagère de pots, un fourneau. Elle est mieux tenue que bien des hôpitaux de ville : Maître Ravaudet en pleure deux fois par mois.",
        "Sur la table, on tient un chien. C'est un des jeunes de la tête, blanc et fauve, que les loups de ce matin ont trouvé sur leur passage : il a l'épaule ouverte jusqu'à l'os, sur la longueur d'une main. Deux garçons le couchent. Le troisième a une aiguille courbe, du fil ciré, et des mains qui tremblent.",
        "« C'est Clairon », dit-il à qui veut l'entendre. « Il est de la portée de Tonnerre. Si je le rate, La Brisée me tue ; si je le laisse, il meurt. Il y a un valet, d'habitude, qui sait. Il a la fièvre des bois. »",
        "Le chien ne crie pas. Il regarde le plafond, la langue sortie, en bête de race qui a compris qu'on s'occupait d'elle.",
      ],
      choices: [
        { label: "« Donne. Tiens-lui la tête, et parle-lui. »",
          test: { dom: "savoir", diff: 5, label: "Recoudre une épaule de chien, à points serrés", help: [{ if: { voie: "rebouteux" }, v: 20 }, { if: { voie: "alchimiste" }, v: 10 }, { if: { item: "onguent" }, v: 5 }, { if: { item: "eau_de_vie" }, v: 5 }] },
          win: { fx: { flag: "monde:a4:veneurs", ep: ["perso", 1000] }, to: "A4o_clairon" }, lose: { fx: { ep: ["perso", 300] }, to: "A4o_clairon" } },
        { back: "A4o_apres" },
      ] },
    A4o_clairon: { act: "IV", title: "Clairon", place: "chenils", ambiance: "chateau",
      text: [
        { outcome: "win", text: "Tu laves à l'eau-de-vie. Tu rapproches les bords avec deux doigts, et tu piques : onze points, courts, égaux, noués un à un, comme la Douairière te l'a montré sur une cuisse d'homme, un soir, dans un grenier. Le chien tressaille à chacun et ne mord pas. Au dernier nœud, il te lèche le poignet." },
        { outcome: "win", text: "Quand tu te redresses, La Brisée est dans la porte. Il y était depuis le troisième point. Il vient à la table, regarde la couture de tout près, en tâte les bords avec l'ongle. « Qui t'a appris ? » « Une vieille. » « Elle cousait des gens. Ça se voit : tu as laissé de quoi enfler. » Il pose sa main sur la tête de Clairon. « Tu as désormais ta place à l'auge, à côté de moi. Ne me remercie pas. C'est le chien qui paie. »" },
        { outcome: "lose", text: "Tu sais recoudre une manche. Une épaule vivante, qui tremble, qui saigne sous le fil, est une autre affaire ; tes points tirent, l'un lâche, tu recommences. Le garçon te regarde faire avec un soulagement lâche : ce n'est plus sa faute. Cela tient, à la fin, comme tient un ouvrage d'apprenti." },
        { outcome: "lose", text: "La Brisée est entré sans bruit. Il regarde la couture, défait deux points du bout de son couteau, les refait lui-même, en trois gestes. « Tu as eu le cœur d'y mettre les mains. Les deux autres ne l'avaient pas. » Il ne dit rien de plus. Mais il ne t'a pas renvoyé{e}." },
      ],
      choices: [{ back: "A4o_apres" }] },

    A4o_livre: { act: "IV", title: "Le livre de la meute", place: "chenils", ambiance: "chateau",
      text: [
        "Il est sous l'auvent, debout devant son pupitre, des bésicles de fer sur le nez. Il écrit la journée dans le registre de peau de cerf : *Le 6, attaqué un daguet aux Grands-Genêts. Pris par les loups au relais de la Belle-Biche. Clairon blessé.* Il a une écriture d'enfant, appliquée, où chaque nom de chien prend une majuscule.",
        { if: { has: "monde:a4:veneurs" }, text: "Il te fait signe d'approcher. Il tourne trois pages en arrière, quatre, dix, et pose le doigt sur des lignes à l'encre rouge. « Le Sénéchal. Attaqué il y a trois ans à la Saint-Hubert : *manqué à l'eau*. Il y a deux ans : *manqué à l'eau*. L'an passé : *manqué à l'eau, Monsieur blessé à la cuisse*. » Il ôte ses bésicles. « Trois fois, je le lui ai mené où il faut. À la queue de l'étang, devant le pavillon des Abois : il y va toujours, c'est son eau. Trois fois Monsieur a fait reculer tout le monde à cent pas, il est entré dans l'eau tout seul, avec sa dague, et trois fois le cerf est ressorti de l'autre côté. »" },
        { if: { has: "monde:a4:veneurs" }, text: "Il referme le livre. « Monsieur ne manque pas un cerf. Je l'ai vu en servir deux cents. Je te dis cela parce que tu as le nez juste, et que tu te demanderas après-demain pourquoi le plus beau coup de dague du pays tremble devant celui-là. Je me le demande depuis trois ans. Je n'ai pas le droit de le lui demander. »" },
        { if: { not: "monde:a4:veneurs" }, text: "Il te voit, et ferme son livre à demi, la main dessus. Ce n'est pas de la méfiance ; c'est qu'on ne montre pas le registre de la meute au premier valet venu, pas plus que le curé ne montre celui des baptêmes. « Tu veux quelque chose ? »" },
      ],
      choices: [
        { label: "« Après-demain. Où faut-il que je sois, pour être utile ? »", if: { not: "monde:a4:veneurs" }, hide: { has: "monde:a4:veneurs" },
          test: { dom: "social", diff: 10, label: "Tirer trois phrases d'un homme qui parle aux chiens", help: [{ if: { has: "monde:a4:pied" }, v: 15 }, { if: { has: "a4:o_engage=bien" }, v: 10 }, { if: { has: "a4:o_taupin_eau" }, v: 10 }, { if: { voie: "coureur" }, v: 5 }] },
          win: { fx: { flag: "monde:a4:chasse_sue", ep: ["perso", 700] }, to: "A4o_livre_dit" }, lose: { to: "A4o_livre_dit" } },
        { label: "« Et si quelqu'un était là, la quatrième fois, à moins de cent pas ? »", if: { has: "monde:a4:veneurs" }, hide: { not: "monde:a4:veneurs" }, fx: { flag: "monde:a4:chasse_sue", ep: ["perso", 700] }, to: "A4o_livre_dit" },
      ] },
    A4o_livre_dit: { act: "IV", title: "À cent pas", place: "chenils", ambiance: "chateau",
      text: [
        { if: { all: [{ has: "monde:a4:veneurs" }] }, text: "Il te regarde longtemps, de son œil plissé. « Il y a des roseaux, à gauche du pavillon, où un homme tient couché. Il y a sous le ponton une barque à fond plat, que l'on ne voit pas de la rive. Je n'y ai jamais mis personne : j'ai des ordres. » Il remet ses bésicles. « Je n'ai pas d'ordres pour les valets de l'horloger. »" },
        { if: { all: [{ not: "monde:a4:veneurs" }, { has: "monde:a4:chasse_sue" }] }, text: "Il pèse la question. Elle est d'un valet qui veut bien faire, et il a manqué de valets toute la semaine. « À la queue de l'étang. Devant le pavillon des Abois. Le Sénéchal y va toujours : c'est son eau. Tu tiendras les chiens de relais à cent pas, avec les autres, pas un de moins. Monsieur le sert seul. Il n'aime pas qu'on regarde. » Il n'en dira pas davantage ; mais tu sais où, et tu sais qu'on recule." },
        { if: { all: [{ not: "monde:a4:veneurs" }, { not: "monde:a4:chasse_sue" }] }, text: "« Où je te mettrai. » Il a rouvert son livre. « Un valet qui demande où sera la fin d'une chasse deux jours avant qu'elle commence, c'est un valet qui veut y être avant la bête. J'en ai connu. Ils braconnaient. » Il écrit une ligne, sans plus te regarder. Tu n'as rien appris, sinon qu'il y a une fin, et qu'elle est toujours au même endroit, puisqu'il la garde." },
      ],
      choices: [{ back: "A4o_apres" }] },

    // ───────────────────────────── The village ─────────────────────────────
    A4o_village: { act: "IV", title: "Le Grand Cerf", place: "grand_cerf", ambiance: "taverne",
      fx: { until: 15, flag: "monde:a4:cadenas_vu" },
      text: [
        "Le village de Brandelis vit du château comme le lierre vit du mur. Quarante feux, un four banal, une église à clocher d'ardoise, et, sur la place, l'auberge du Grand Cerf, dont l'enseigne est un vrai massacre, un quatorze-cors cloué au pignon, que les corneilles ont blanchi.",
        "En temps de Chasses, on y loge tout ce que le château ne veut pas : les cochers, les marchands, les créanciers de petite taille. La salle est pleine, enfumée, joyeuse. On y parle du daguet et des loups.",
        "Il y a une table où l'on ne parle pas. Elle est au fond, près de la fenêtre, et elle fait autour d'elle le vide que fait un chien de berger dans un troupeau. Un homme y mange seul, le dos au mur. Il est trapu, carré, moustache grise ; il a gardé son manteau de voyage, sous lequel on voit le bas d'une casaque bleue. Il mâche lentement. Entre deux bouchées, il mâchonne autre chose, qu'il tire d'une petite boîte.",
        "Deux archers du guet d'Aiguemorne sont assis à la porte, la hallebarde entre les genoux.",
        "Devant lui, sur la table, à côté de son écuelle, il a rangé onze objets en ligne, comme on range des soldats de plomb : un bouton, un bout de corde, un gant, un crochet de serrurier tordu, d'autres que tu ne distingues pas. Il les regarde en mangeant. De temps en temps, il en déplace un.",
        "Géraud Corbineau, prévôt d'Aiguemorne, est arrivé à deux heures. L'hôtesse le dit au comptoir, à voix basse, avec un respect où il entre de la peur : il a demandé la liste de tout ce qui loge au château, et il l'a lue deux fois.",
      ],
      choices: [
        { label: "Aller t'asseoir en face de lui", to: "A4o_cadenas", big: true },
        { label: "Prendre un pot au comptoir, de dos, et le regarder dans la vitre", to: "A4o_cadenas_loin" },
        { back: "A4o_apres" },
      ] },
    A4o_cadenas_loin: { act: "IV", title: "Onze pièces", place: "grand_cerf", ambiance: "taverne",
      fx: { set: { "a4:o_cadenas": "fui" }, ep: ["perso", 400] },
      text: [
        "La vitre du comptoir est verdâtre, et rend bien les figures. Tu bois à petits coups.",
        "Il a fini son écuelle. Il la pousse, et il fait avec ses onze objets ce qu'un joueur fait avec ses cartes : il les sépare. Sept d'un côté. Quatre de l'autre. Il regarde les sept ; il en reprend un, le flaire, le met avec les quatre. Six et cinq.",
        "« Madame », dit-il à l'hôtesse, sans élever la voix. Elle y court. « L'horloger qui est au château, depuis hier. Combien de gens avec lui ? » « Trois, monsieur le prévôt. Des jeunes. On en a pris un aux chiens. » Il répète, lentement : « Un aux chiens. » Il remet un clou de girofle dans sa bouche.",
        "Il ne se lève pas. Il ne donne aucun ordre à ses archers. Il range les onze pièces dans un sac de toile, l'une après l'autre, en les comptant ; puis il tire de sa poche un papier plié, timbré, qu'il déplie, qu'il relit, et qu'il replie sans l'avoir signé.",
        "Tu poses ton pot. Tu sors par la cuisine. Il sait où vous êtes, il a un mandat, et il n'a pas bougé : tu te demandes laquelle de ces trois choses est la plus inquiétante.",
      ],
      choices: [{ back: "A4o_apres" }] },
    A4o_cadenas: { act: "IV", title: "En face du Cadenas", place: "grand_cerf", ambiance: "taverne",
      text: [
        "Tu traverses la salle. Les deux archers te regardent passer : un valet de chiens, crotté, qui va demander quelque chose au monsieur. Tu tires le tabouret. Tu t'assieds.",
        "Il lève les yeux. Ils sont bruns, lourds, sans hâte. Il te reconnaît à la seconde ; tu le vois à ce qu'il cesse de mâcher.",
        { if: { has: "monde:cadenas:doute2" }, text: "« Vous. » Il n'a pas remué les mains. « Je vous ai tenu{e} à Aiguemorne, sur un toit, à trois pas. Je vous ai manqué{e} à Ossevaux d'une demi-heure. Et vous venez vous asseoir. » Il jette un coup d'œil à ses archers, qui n'ont rien compris, puis à toi. « Restez assis{e}. J'ai un mandat dans cette poche, et une question dans celle-là. Depuis Ossevaux, c'est la question qui pèse le plus. »" },
        { if: { not: "monde:cadenas:doute2" }, text: "« Vous. » Il a déjà la main sur la table, à plat, près d'un sifflet d'os. « Je vous ai tenu{e} à Aiguemorne, sur un toit. Vous venez vous rendre, ou vous êtes fou ? » Sa voix lente n'a pas monté. Les deux archers, à la porte, ont tourné la tête." },
      ],
      choices: [
        { label: "« Posez-la, votre question. »", if: { has: "monde:cadenas:doute2" }, hide: { not: "monde:cadenas:doute2" }, to: "A4o_cadenas_question", big: true },
        { label: "« Ni l'un ni l'autre. Je viens vous dire qui a signé. »", if: { not: "monde:cadenas:doute2" }, hide: { has: "monde:cadenas:doute2" },
          test: { dom: "social", diff: 15, label: "Faire écouter un prévôt qui a la main sur son sifflet", help: [{ if: { voie: "comedien" }, v: 10 }, { if: { voie: "bretteur" }, v: 5 }, { if: PREUVES, v: 15 }, { if: { has: "remonteur:verite" }, v: 10 }, { if: { has: "monde:cadenas:doute" }, v: 10 }] },
          win: { fx: { set: { "a4:o_cadenas": "parle" }, ep: ["perso", 1200] }, to: "A4o_cadenas_question" }, lose: { fx: { set: { "a4:o_cadenas": "fui" }, flag: "monde:a4:cadenas_alerte", pv: -3 }, to: "A4o_cadenas_sifflet" } },
      ] },
    A4o_cadenas_sifflet: { act: "IV", title: "Un sifflet d'os", place: "grand_cerf", ambiance: "taverne",
      text: [
        "Il siffle. Ce n'est pas un grand bruit : deux notes, sèches, que la salle n'entend pas dans son vacarme, et que deux hommes à la porte attendaient depuis vingt-six ans.",
        "Tu as renversé la table avant qu'ils soient debout. Les onze pièces roulent ; il se baisse pour elles, par un réflexe de métier qui te donne la seconde qu'il te fallait. Une hallebarde te passe le long des côtes et t'emporte un pan de veste avec un peu de ce qu'il y a dessous. La fenêtre. La cour. Un tas de fumier, un mur, la chaussée.",
        "Tu cours jusqu'aux chenils sans te retourner. Personne ne te suit sur la passerelle : le guet d'Aiguemorne n'entre pas chez le Connétable sans se faire annoncer.",
        "Il se fera annoncer. Il sait à présent, de ses yeux, que vous y êtes. Tu te vois encore tirer ce tabouret, et tu comprends ce que la Douairière voulait dire quand elle disait : *on ne va pas causer à la justice sans avoir d'abord quelque chose dans la main.*",
      ],
      choices: [{ back: "A4o_apres" }] },
    A4o_cadenas_question: { act: "IV", title: "La question du prévôt", place: "grand_cerf", ambiance: "taverne",
      text: [
        { if: { has: "a4:o_cadenas=parle" }, text: "La main quitte le sifflet. Elle ne va pas loin : elle se pose à côté. « *Qui a signé.* Vous dites cela comme quelqu'un qui le sait. Parlez. Vous avez le temps que je mette à finir ce clou. »" },
        "Il ouvre son sac de toile, et remet les onze objets en ligne.",
        "« Voici ce qu'on m'a donné contre vous, en six semaines. Le bouton d'une de vos vestes, trouvé chez le mort. Ce crochet, sous son établi. Un gant. Un témoin qui vous a vus entrer ; un autre, sortir. Onze pièces. Je les ai toutes vérifiées. Elles sont toutes bonnes. » Il mâchonne. « Et elles me sont toutes venues du même côté. Par le même greffier, dans la même semaine, bien rangées, comme un dîner qu'on vous sert. En vingt-six ans, je n'ai jamais vu un crime laisser onze preuves. Un crime en laisse deux, et l'on cherche les autres. Onze, c'est quelqu'un qui a eu peur que je n'en trouve pas assez. »",
        "Il te regarde.",
        "« Je ne vous crois pas innocents. Vous êtes des voleurs, je vous prendrai pour cela un jour, et j'y aurai plaisir. Mais je ne pends pas les gens pour le meurtre d'un autre. Ma question est celle-ci : avez-vous quelque chose que je puisse toucher ? Pas une histoire. Une chose. »",
        { if: { has: "monde:ugolin:temoin" }, text: "« J'en ai déjà une », ajoute-t-il avant que tu répondes. « Un homme est venu s'asseoir dans mon bureau, il y a dix jours, à pied, de Ferrières. Grand comme une porte, avec un marteau à la ceinture, qu'il a posé sur ma table. Il a dit : *C'est moi. Demandez-moi pour qui.* Je le lui ai demandé. Il est dans ma prison, dans une bonne chambre. Il dit que c'est vous qui l'avez envoyé. »" },
      ],
      choices: [
        { label: "Mettre sur la table ce que la maison Berlue a ramassé en trois villes", if: PREUVES, hide: { not: PREUVES }, to: "A4o_cadenas_allie", big: true, fx: { flag: "monde:cadenas:allie", set: { "a4:o_cadenas": "assis" }, ep: ["histoire", 1500] } },
        { label: "« Rien que vous puissiez toucher. Trois noms, et où ils sont ce soir. »", to: "A4o_cadenas_noms", fx: { set: { "a4:o_cadenas": "assis" }, ep: ["perso", 600] } },
      ] },
    A4o_cadenas_allie: { act: "IV", title: "Des choses qu'on touche", place: "grand_cerf", ambiance: "taverne",
      text: [
        "Tu n'as pas tout sur toi. Tu dis ce qu'il y a, où cela se trouve, et ce que tu peux lui faire tenir avant le soir.",
        { if: { any: [{ has: "monde:a2:folio" }, { has: "monde:a3:pr_folio" }] }, text: "Le folio 412 du Grand Livre de Ferrières : la dette d'un frappeur de forge, soldée *pour service rendu à Aiguemorne*, le lendemain d'une mort. Il le lit deux fois, comme la liste. « La date », dit-il seulement." },
        { if: { has: "monde:a3:pr_carnet" }, text: "Le carnet du Remonteur, cousu dans la doublure d'un mort de première classe. Il le feuillette avec le pouce, s'arrête, revient. Il ne dit pas sur quelle ligne." },
        { if: { has: "monde:a3:pr_formulaire" }, text: "Le Formulaire du Scellement, de la main d'un évêque. Il le parcourt en remuant les lèvres. « Du plomb sur une porte de justice. Je voudrais voir l'article de la coutume. »" },
        { if: { has: "monde:a3:anthelme" }, text: "Un chanoine archiviste, vivant, caché à Ossevaux, que l'on a mis en terre un mercredi parce qu'il protestait un mardi. « Vivant ? » « Avec une montre. » « Il déposera ? » « Il ne demande que cela. »" },
        { if: { has: "monde:ugolin:temoin" }, text: "Et l'homme au marteau, qui est déjà dans sa prison. « Celui-là, je l'ai touché », dit le prévôt. « Il pèse. »" },
        "Il range ses onze pièces dans le sac, une à une. Il les range du côté gauche de la table. Ce que tu lui as donné, il le met à droite.",
        "« Voilà. Onze qu'on m'a servies, contre ce que vous êtes allés chercher. » Il tire son mandat, le déplie, le regarde, et le remet dans sa poche sans le déchirer. « Je le garde. Il est signé du Gouverneur ; il vaut jusqu'à la Saint-Éloi. Mais je vous dis ceci, et je ne le dis pas deux fois : d'ici à la Nuit des Clefs, je ne vous vois pas. Vous pouvez me passer sous le nez avec une échelle. »",
        "Il se lève. Il est plus petit debout qu'assis.",
        "« Je suis venu ici pour un homme qui a une barbe en pointe et un cachet à la tour d'or. Il manque un cachet à mon affaire : les deux autres, je les connais. Je veux lui poser une question, à lui aussi. Chez lui, devant du monde. On me dit qu'il y a un bal. »",
      ],
      choices: [{ label: "Le laisser à ses clous de girofle", to: "A4o_apres", big: true }] },
    A4o_cadenas_noms: { act: "IV", title: "Trois noms", place: "grand_cerf", ambiance: "taverne",
      text: [
        "Tu les lui dis. Le Syndic des Maîtres du Fer. Le Doyen des Morts. Le Connétable. Tu lui dis qu'ils couchent ce soir sous le même toit, à trois cents pas de son écuelle, et qu'un vieil homme est mort d'avoir dit non à tous les trois.",
        "Il t'écoute sans un geste. Quand tu as fini, il prend dans sa boîte un clou de girofle, le regarde, le remet.",
        "« Vous me nommez les trois Clavaires de la cité. Vous, avec un mandat au cul et de la bouse aux souliers. » Sa voix lente n'a ni colère ni moquerie. « Je le savais. Voilà le plus fort : je le sais depuis Ossevaux. Les onze pièces viennent du greffe, le greffe prend ses ordres du Gouverneur, et le Gouverneur dîne chez ces trois-là. Je sais d'où vient le vent. Je ne peux pas arrêter le vent. Il me faut une girouette : une chose qui tourne, et que je puisse montrer à un juge. »",
        "Il se penche.",
        "« Trouvez-moi cela. Un papier, un témoin, un aveu devant des gens. Vous êtes dans la maison ; moi, je suis à la porte. Jusque-là, je ne vous ai pas vu{e}. Mais je n'ai pas dit que je ne vous verrais pas demain. »",
        "Il se remet à manger. Tu es congédié{e}, à la façon dont un honnête homme congédie quelqu'un qu'il devrait faire pendre.",
      ],
      choices: [{ back: "A4o_apres" }] },

    // ───────────────────────────── The postern ─────────────────────────────
    A4o_saules: { act: "IV", title: "Sous les saules", place: "brandelis", ambiance: "eau",
      text: [
        "Le rocher de Brandelis tombe à pic dans l'étang, du côté de l'ouest. Il n'y a là ni chemin ni berge : une corniche de pierre, large de deux pieds, glissante, que l'eau lèche, et où l'on avance le dos à la muraille. Trois saules y ont pris racine dans une fente, et laissent pendre jusqu'à l'eau des cheveux jaunes.",
        "Derrière les saules, il y a une porte.",
        "Elle est basse, cintrée, en chêne clouté de fer, verte de mousse jusqu'à mi-hauteur. Un anneau y retient une barque à fond plat, longue, noire, où une godille est couchée. La serrure est grosse comme la main, et son entrée brille : on y met une clef tous les jours.",
        "Tu regardes en l'air. La tour de l'Horloge est juste au-dessus, cent pieds plus haut ; on voit la meurtrière par où l'on voit d'ici. Tu regardes l'eau. L'étang s'en va vers l'ouest, étroit, entre ses roseaux, et se perd sous les arbres à un quart de lieue.",
        { if: { has: "a4:sentiers" }, text: "*Une poterne, sous les saules, par où il sort la nuit quand il a trop perdu.* La Brûlée savait de quoi elle parlait. Elle doit le voir passer, de ses meules, quand la lune donne." },
        "C'est une bonne serrure de château, à pêne dormant, d'un temps où l'on ne trichait pas sur le fer. Elle se laisserait faire, avec du temps. Et un pêne que l'on a fait jouer une fois, on peut le limer d'un rien, pour qu'il rentre la prochaine fois sous une simple lame.",
      ],
      choices: [
        { label: "Ouvrir, et limer le pêne",
          test: { dom: "discretion", diff: 10, label: "Travailler une serrure les pieds dans l'eau, sous cent fenêtres", help: [{ if: { voie: "crocheteur" }, v: 20 }, { if: { item: "rossignols" }, v: 10 }, { if: { voie: "coureur" }, v: 5 }] },
          win: { fx: { flag: "monde:a4:poterne", ep: ["perso", 1000] }, to: "A4o_poterne" }, lose: { fx: { pv: -2 }, to: "A4o_poterne" } },
        { back: "A4o_apres" },
      ] },
    A4o_poterne: { act: "IV", title: "L'escalier dans le roc", place: "brandelis", ambiance: "souterrain",
      text: [
        { outcome: "win", text: "Le pêne recule avec un bruit gras. La porte s'ouvre vers le dedans, sur une odeur de cave et de vase. Tu limes : trois passes sur l'arête, pas une de plus, que tu noircis ensuite au pouce avec la crasse de la gâche. La prochaine fois, une lame de couteau glissée dans la fente suffira." },
        { outcome: "win", text: "Derrière, un escalier taillé dans le roc monte en tournant, étroit, usé au milieu par des bottes. Tu en gravis quarante marches, à tâtons. Il aboutit à une seconde porte, sans serrure, fermée d'un simple loquet. Tu l'entrouvres de l'épaisseur d'un doigt : le dos d'une tapisserie, une lueur rouge, une odeur de savon et de chien. On est chez lui." },
        { outcome: "win", text: "Tu redescends. Tu refermes. De dehors, la mousse n'a pas bougé." },
        { outcome: "lose", text: "Tu as les pieds sur une pierre que l'eau recouvre, les mains gourdes, et au-dessus de ta tête cent fenêtres dont une peut s'ouvrir. Le crochet glisse ; le pêne joue à moitié, et retombe. Tu recommences. À la troisième fois, tu glisses toi-même : une jambe à l'eau jusqu'à la cuisse, un genou sur le roc, un juron ravalé." },
        { outcome: "lose", text: "Là-haut, quelqu'un a ouvert une croisée pour vider une cuvette. Tu te plaques sous les saules. Tu restes là le temps qu'il faut, trempé{e}, à regarder cette serrure qui brille. Tu sais où est la porte, où est la barque, et qu'il te faudrait une heure tranquille que le jour ne te donnera pas." },
      ],
      choices: [{ back: "A4o_apres" }] },

    // ───────────────────────────── The night ─────────────────────────────
    A4o_nuit: { act: "IV", title: "Une heure du matin", place: "brandelis", ambiance: "nuit",
      fx: { until: 23 },
      text: [
        "Tu es sous les saules depuis onze heures, à plat ventre sur la corniche, enveloppé{e} dans une couverture de chenil qui sent le chien mouillé. L'étang clapote à six pouces de ta figure. Il y passe, de temps en temps, un rat d'eau, qui te contourne.",
        "À dix heures, on a rentré les chiens dans la cour ; tu l'as entendu d'ici, et tu n'as pas su pourquoi. Vers onze heures, la porte de la chapelle a battu. Un pas lourd a traversé la cour, puis plus rien.",
        "Une heure. La serrure parle, de l'intérieur.",
        "La poterne s'ouvre. Il sort en se baissant : la cape, les bottes, le chapeau sans plume. Il n'a pas de lanterne, cette nuit ; il connaît les marches. Il détache la barque d'une main, y descend, la fait à peine pencher pour un homme de sa taille, et prend la godille.",
        "Il est à quatre pas de toi. Tu vois son profil contre l'eau grise : la barbe en pointe, la bouche serrée. Il n'a plus du tout la figure de la grande salle. Il a celle d'un homme qui rentre d'un endroit où on lui a demandé quelque chose.",
        "La barque s'écarte du roc sans un bruit, et prend le milieu de l'étang.",
      ],
      choices: [
        { label: "Le suivre par la rive, sous les arbres, jusqu'où il ira",
          test: { dom: "nature", diff: 10, label: "Suivre une barque à pied, de nuit, par des roseaux", help: [{ if: { voie: "coureur" }, v: 15 }, { if: { has: "a4:sentiers" }, v: 15 }, { if: { has: "monde:a4:douce_dit" }, v: 10 }, { if: { has: "monde:a4:chasse_sue" }, v: 5 }] },
          win: { fx: { flag: "a4:o_suivi", ep: ["perso", 1200] }, to: "A4o_pavillon" }, lose: { to: "A4o_pavillon" } },
      ] },
    A4o_pavillon: { act: "IV", title: "Le pavillon des Abois", place: "etang", ambiance: "eau",
      fx: { flag: "monde:a4:pavillon" },
      text: [
        "L'étang de Brandelis finit mal. Passé le dernier coude, il s'élargit en un marais noir, sans rives, où la forêt est entrée et où elle est morte : des aulnes debout dans l'eau, écorcés, blancs comme des os, par centaines, avec leurs branches levées. Rien n'y remue. La lune y met partout des lueurs qui ne sont pas des reflets, et il monte de cette eau, par nappes, une brume qui a l'odeur de la feuille pourrie et celle, plus fade, que l'on sent aux abattoirs.",
        "C'est là que viennent mourir les cerfs forcés. Depuis trois cents ans, tout ce que les Brandelis ont couru est venu chercher cette eau pour y faire tête. On l'appelle la queue de l'étang ; le pays dit : *les Abois*.",
        "Au bord, sur des pilotis, un pavillon de chasse : une seule pièce, un toit pointu, un ponton. Une chandelle brûle derrière un volet.",
        { if: { has: "a4:o_suivi" }, text: "Tu es arrivé{e} avant la barque, par une sente que les bêtes ont faite. Tu es couché{e} dans les roseaux, contre les pilotis, quand il aborde, attache, entre. Tu entends craquer le plancher au-dessus de toi. Puis, de la forêt, sans que tu l'aies entendue venir, quelqu'un d'autre monte sur le ponton, d'un pas qui ne pèse rien." },
        { if: { not: "a4:o_suivi" }, text: "Tu t'es perdu{e} deux fois dans les roseaux ; tu as eu de l'eau jusqu'à la taille ; la barque est attachée au ponton depuis un quart d'heure quand tu te coules enfin contre les pilotis. On parle, au-dessus de toi. Ils sont deux. Tu as manqué le commencement." },
      ],
      choices: [{ label: "Écouter par les fentes du plancher", to: "A4o_pavillon2", big: true }] },
    A4o_pavillon2: { act: "IV", title: "Une autre commande", place: "etang", ambiance: "nuit",
      fx: { clue: "g4_commande", flag: "gants:payeur" },
      text: [
        { if: { has: "a4:o_suivi" }, text: "« Madame. » La voix sonore, baissée. « Vous êtes exacte. C'est une qualité que j'admire chez les autres. » « Monsieur le comte. » Le murmure amusé de Sans-Bruit. « Vous m'avez donné hier un papier. J'ai essayé d'en acheter du pain, au village. Le boulanger en a déjà une liasse. »" },
        { if: { all: [{ has: "a4:o_suivi" }, SAIT] }, text: "« Je vous donnerai mieux. Écoutez. Les deux clefs que vous n'avez pas su me rapporter sont chez moi. Dans ma tour. Un horloger me les a apportées, dans la poche de trois jeunes gens qui graissent mes poulies et qui tiennent mes chiens. » Il rit, tout bas. « Elles ont monté mes cent douze marches d'elles-mêmes. Il y a des jours où l'on croirait à quelque chose. »" },
        { if: { all: [{ has: "a4:o_suivi" }, { not: SAIT }] }, text: "« Je vous donnerai mieux. Écoutez. Les deux autres couchent chez moi jusqu'au 11. Le gros a laissé sa clef à Ferrières, dans une cassette, il me l'a dit : il n'y a que lui pour laisser une clef pareille sous un lit. Mais l'évêque a la sienne. Elle est dans une caisse de chêne, à la chambre des Évêques, entre deux cierges. » Un silence. Tu devines, au-dessus de toi, que Sans-Bruit sourit dans le noir, et qu'elle a ses raisons." },
        { if: SAIT, text: "« Vous voulez que je les leur prenne. » « Je veux que vous les leur preniez. Mais pas chez moi. » Le plancher craque : il s'est levé. « Entendez-moi bien, madame. Ils mangent mon pain. Tant qu'ils sont de ce côté de ma chaussée, on ne leur touche pas un cheveu, et je ferai pendre à mes créneaux le premier qui l'oublie. Le 11 au matin, ils s'en iront, à pied, par la Sylve. Passé le dernier poteau à mes armes, ce sont des voleurs sur une route. Là, vous êtes chez vous. »" },
        { if: { not: SAIT }, text: "« Vous voulez la clef de Cendre. » « Je la veux. La nuit du bal, pendant qu'il sera en bas à regarder danser, avec ses douze hallebardes. Vous savez ouvrir une caisse. » « Je sais. » « Avec celle-là et la mienne, j'en ai deux. Le gros viendra me manger dans la main. »" },
        { if: DETTE, text: "« Et vous me paierez en quoi ? » « En ce que j'aurai, quand je serai ce que je veux être. » « Du papier, donc. » Elle laisse passer un temps. « Je vais vous dire une chose, monsieur le comte, par honnêteté de fournisseur. Je dois quelque chose à des gens. Une dette que l'on ne règle pas avec un B. Tant que je ne l'ai pas payée, je ne prends pas de commande qui les regarde. Trouvez-vous quelqu'un d'autre. » « Il n'y a personne d'autre. » « Je sais. »" },
        { if: MARCHE, text: "« Et vous me paierez en quoi ? » « En ce que j'aurai, quand je serai ce que je veux être. » « Du papier, donc. » Un froissement : elle a remis ses gants. « J'y penserai. J'ai jusqu'au 11 pour y penser, et jusque-là quelqu'un peut m'offrir davantage. Vous n'êtes pas le seul, dans ce pays, à vouloir des clefs. Vous êtes seulement le seul à les payer si mal. »" },
        { if: RANCUNE, text: "« Vous me paierez en quoi ? » « En ce que j'aurai, quand… » « Gardez votre carnet. » Sa voix n'a plus rien d'amusé. « Celle-là, monsieur le comte, je vous la fais pour rien. J'ai un compte ouvert avec cette maison, depuis une nuit que j'ai passée dans une boîte. Je les attendrai où vous dites. Vous aurez vos deux clefs le 11 au soir. Ce que j'aurai fait des trois personnes ne vous regardera pas. » « Sans leur faire de mal, madame. » « Monsieur le comte, vous commandez la chose. Laissez-moi la manière. »" },
        "Le pas qui ne pèse rien repasse sur le ponton, et s'éteint dans les arbres.",
      ],
      choices: [{ label: "Attendre qu'il reparte", to: "A4o_senechal", big: true }] },
    A4o_senechal: { act: "IV", title: "Ce qu'il fait là quand il est seul", place: "etang", ambiance: "nuit",
      fx: { flag: ["monde:a4:senechal", "monde:a4:chasse_sue"], clue: "s4_senechal", ep: ["histoire", 1000] },
      text: [
        "Il ne repart pas.",
        "Il sort sur le ponton. Il a soufflé la chandelle. Il s'assied au bout des planches, les bottes au-dessus de l'eau, comme un gamin au bord d'un lavoir, et il tire de sa cape quelque chose qu'il pose à côté de lui. Tu es dessous, entre deux pilotis, de l'eau jusqu'aux genoux. Tu vois ses talons.",
        "Il siffle. Trois notes, basses, que tu as entendues ce matin dans une trompe : le commencement du *bien-aller*.",
        "Il se passe un long moment. Puis la brume remue, sur la gauche, entre les aulnes morts. Quelque chose y marche, dans l'eau, sans se presser. Tu vois d'abord la ramure : on dirait qu'un des arbres s'est détaché des autres et qu'il vient. Puis le poitrail, noir, large comme une porte. Puis l'œil.",
        "Le cerf s'arrête à trois pas du ponton. Il est énorme. Il a une pince usée, à gauche, et un andouiller cassé. Il souffle, deux fois, par les naseaux.",
        "« Bonsoir, Sénéchal. »",
        "Le comte tend la main à plat. Dessus, il y a un morceau de pain et une poignée de sel gris. La bête allonge le cou, et mange dans la main de l'homme qui la court depuis trois ans.",
        "« On t'attaque après-demain. J'ai trente personnes à amuser, et plus un écu pour le faire autrement. Tu feras comme tu sais : les fonds, le ruisseau, la Belle-Biche, et tu viendras ici. Tu me feras tête. Je te manquerai devant tout le monde, pour la quatrième fois, et La Brisée ne me parlera pas de la semaine. » Il lui gratte le front, entre les bois. « À moins que je ne signe leur papier d'ici là. Si je signe, je n'aurai plus le cœur de manquer personne. »",
        "Le cerf a fini le sel. Il reste encore, un instant, le mufle dans cette main ; puis il se détourne, et rentre dans la brume, d'où il était venu.",
        "Le comte remonte dans sa barque. Tu attends qu'il ait passé le coude. Tu as froid jusqu'aux os, et tu sais de cet homme une chose que son premier piqueur cherche depuis trois ans.",
      ],
      choices: [{ label: "Rentrer par la rive, vers la tour", to: "A4o_fin", big: true }] },
    A4o_fin: { act: "IV", title: "Ce que la forêt a rendu", place: "tour_horloge", ambiance: "nuit",
      fx: { until: 23, catchup: 14, catchupWhy: "ce que l'on apprend à tenir un chien et à se taire" },
      text: [
        "Tu montes les cent douze marches en laissant de l'eau sur chacune. Là-haut, le brasero rougit sous le balancier. Maître Crochemore te jette une couverture sans cesser de limer.",
        "Tu fais ton compte, les dents serrées.",
        { if: { has: "monde:a4:pied" }, text: "Un cerf, que tu as trouvé avant tout le monde, et qui a un nom." },
        { if: { has: "monde:a4:veneurs" }, text: "Des gens de chenil, qui feraient tourner une meute si tu le leur demandais." },
        { if: { has: "monde:a4:poterne" }, text: "Une porte sous les saules, qui s'ouvre à présent avec une lame, et quarante marches jusque chez lui." },
        { if: { has: "monde:cadenas:allie" }, text: "Un prévôt, à l'auberge, qui a remis son mandat dans sa poche." },
        { if: { has: "monde:a4:cadenas_alerte" }, text: "Un prévôt, à l'auberge, qui t'a vu{e} de ses yeux et qui se fera annoncer." },
        "Et un homme qui sort seul, chaque nuit, vers une eau où tout vient mourir, pour y donner du sel à quelqu'un.",
        "La vis résonne. Les deux autres rentrent.",
      ],
      choices: [{ label: "Leur faire place près du brasero", to: "A4c_rdv", big: true }] },
  },

  extras: {
    places: {
      grand_cerf: { ambiance: "taverne", region: "brandelis", name: "Le Grand Cerf", map: "pays", x: 20, y: 61, arrive: "A4o_village", desc: "L'auberge du village de Brandelis : on y loge ce que le château ne veut pas, cochers, marchands et petits créanciers." },
      etang: { ambiance: "eau", region: "brandelis", name: "Les Abois", map: "pays", x: 13, y: 56, arrive: "A4o_pavillon", desc: "La queue de l'étang : un marais d'aulnes morts où viennent finir les cerfs forcés, et un pavillon sur pilotis." },
    },
    clues: {
      g4_commande: { rev: "G", text: "Au pavillon des Abois, la nuit : le comte de Brandelis paie les Gants-Noirs, en papier. Il lui faut deux clefs avec la sienne. Il a passé une autre commande à Sans-Bruit ; sous son toit, il défend qu'on touche à ses hôtes." },
      s4_senechal: { rev: "S", text: "Le comte court depuis trois ans un dix-cors qu'il appelle le Sénéchal. La nuit, seul, à la queue de l'étang, il lui donne du sel dans sa main. « Si je signe, je n'aurai plus le cœur de manquer personne. »" },
    },
  },
};
