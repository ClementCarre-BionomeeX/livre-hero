// Le Douzième Coup · chapter 16, both together (act V, the walk inside the eleventh stroke, after B15).
// `K16_porte` : wake the Queen or let her sleep (one choice for both : `monde: "reine16"`). The Queen woken for three
// grains (`monde:reine_eveillee`), her wish (`monde:reine_voeu_partout` | `monde:reine_voeu_601`), her mandate for
// the Regent (`monde:mandat_reine`, object `revocation_reine`). The stair, the foot of the Tower (hub `K16_pied`) :
// Hardouin, Anthelme (`monde:anthelme_sait`), the iron door, the green ribbons (object `chapeau_coudrier`), the
// glass tuns, the sweat of the Tower. Then the fountain (`M16`, `M16b`, `M16c`) : one district at a time, chosen
// for both (`monde:t16_bas` | `monde:t16_place` | `monde:t16_colline`), hubs `K16_bas`, `K16_place`, `K16_colline`
// (passages of each side in `c16j.js` and `c16r.js`). A fourth way, the towpath (`monde:t16_halage`, hubs `K16_halage`
// and `K16_septieme`, written here for both sides) : the field of carts (`r:chien_nomme`), Girard woken thirty paces
// inside the edge (`monde:girard_sorti`, `monde:grise_sortie`), Line on the little bridge (`monde:cadran_poussiere`,
// `r:acompte_line`), Perrine at the eighth poplar, the edge itself (`monde:vu_bord`, `j:bord_dit|bord_tu`,
// `r:bord_dit|bord_tu`). Three walks for four ways : one stays unseen. `B16` closes the chapter at the low door of the Tower.
var P = {};
var J = { has: "role:passe" }, R = { has: "role:reste" };
var RENONCE = { has: "monde:reine_renonce" };
var SAIT = { has: "monde:reine_sait" };
var EN_MAIN = { any: [{ has: "monde:aelis_remede" }, { has: "monde:aelis_ecorce" }] };
var EVEIL = { has: "monde:reine_eveillee" };
var GRAIN = { stock: "sable", min: 1 };
var T_BAS = { has: "monde:t16_bas" }, T_PLACE = { has: "monde:t16_place" }, T_COLLINE = { has: "monde:t16_colline" };
var VU_B = { seen: "M16b" }, VU_C = { seen: "M16c" };
var T_HALAGE = { has: "monde:t16_halage" };
var SORTIS = { has: "monde:noyers_sortis" }, ATTELE = { has: "monde:girard_attele" }, JURE = { has: "monde:girard_jure" };
var G_SORTI = { has: "monde:girard_sorti" };
// Girard is thirty paces inside the edge, the whip in the air
var G_PRIS = { all: [{ not: SORTIS }, ATTELE, { not: JURE }] };
var P_DEHORS = { has: "monde:perrine_sortie" };

Object.assign(P, {
  K16_porte: { act: "V", title: "Six pas", place: "tour", ambiance: "chateau",
    text: [
      "La canne s'éloigne. On l'entend encore quand on ne l'entend plus, comme toutes les choses qu'on a écoutées de près.",
      { if: J, text: "{autre} a levé la tête vers le plafond de la galerie. Au-dessus, il y a une chambre ronde, et dans cette chambre une femme en blanc, à un pas d'une croisée. « Chez moi, on jure par elle, dit {autre}. Soixante ans qu'on fait tout en son nom : les impôts, les barrières, les pendaisons. J'aimerais bien savoir ce qu'elle en dit, elle. »" },
      { if: J, text: "{autre:Il} soupèse son sachet. Un grain réveille quelqu'un le temps de trois phrases. Tu sais ce que ce sachet a coûté : tu l'as lu, en bâtons, route après route." },
      { if: R, text: "Tu lèves la tête vers le plafond de la galerie. Au-dessus, il y a une chambre ronde, et dans cette chambre une femme en blanc. Chez toi, on fait tout en son nom depuis soixante ans : les impôts, les barrières, les pendaisons. Tu aimerais savoir ce qu'elle en dit, elle. Tu le dis tout haut." },
      { if: R, text: "Tu soupèses ton sachet. Un grain, c'est trois phrases. {autre} te regarde compter. {autre:Il} connaît cette femme : {autre:il} lui a parlé à travers une porte." },
      "Vous allez décider de son heure, tout à l'heure, en bas, sans elle. Elle est à six pas et à vingt marches. On peut lui demander. On peut aussi la laisser à ce qu'elle avait choisi.",
    ],
    choices: [
      { label: "« On remonte. C'est son heure : qu'elle dise ce qu'elle veut qu'on en fasse. »", monde: "reine16", option: "eveil", fx: { flag: "monde:reine_eveillee" }, to: "K16_reine", big: true },
      { label: "« On la laisse. Elle a déjà choisi une fois pour quarante mille. »", monde: "reine16", option: "laisse", fx: { flag: "monde:reine_laissee" }, to: "K16_vis", big: true },
    ] },

  K16_reine: { act: "V", title: "La crémone", place: "tour", ambiance: "chateau", hub: true, backName: "la Reine",
    text: [
      { first: true, if: J, text: "{autre} entre devant toi, pieds nus, et va droit à la main levée. {autre:Il} y pose trois grains, l'un contre l'autre, dans le creux, avec le geste de quelqu'un qui allume une mèche et qui sait ce que vaut la poudre." },
      { first: true, if: R, text: "Tu entres pieds nus, et tu vas droit à la main levée. Tu y poses trois grains, l'un contre l'autre, dans le creux. Tu n'en as jamais mis trois à personne. On met un grain à une fermière, pour savoir où est l'argenterie." },
      { first: true, text: "La main achève son geste. Elle arrive à la crémone, elle la prend, elle tire. La croisée s'ouvre d'un doigt sur un air qui reste dehors. La Reine fait le pas qu'elle avait commencé, et sa robe la rejoint." },
      { first: true, text: "Elle s'aperçoit de trois choses, dans l'ordre. D'abord, que la figure a quitté la vitre. Ensuite, que l'enfant, sur sa hanche, pèse comme une enfant de pierre. Elle baisse les yeux sur le petit doigt tendu, sur la bouche arrêtée, et elle met sa main libre, à plat, sur le dos de sa fille. Elle l'y laisse. Enfin elle se retourne, et elle vous trouve dans sa chambre." },
      { first: true, if: { all: [J, SAIT] }, text: "« C'est fait », dit-elle. Elle le dit à toi. Sa voix est celle que tu as entendue à travers le chêne, une heure plus tôt. « Vous me l'aviez annoncé. Je regarde, et je trouve que vous me l'aviez annoncé au-dessous de la vérité : on ne se figure pas le silence. »" },
      { first: true, if: { all: [J, { not: SAIT }] }, text: "« Qu'est-ce que vous lui avez fait ? » Elle le dit bas, sans crier : elle a une enfant endormie contre elle, et l'habitude est plus forte que l'épouvante. Puis elle voit la poussière arrêtée dans le soleil, le rideau qui tient son pli en l'air ; et elle comprend que la question a changé de taille. « Qu'est-ce que j'ai fait ? »" },
      { first: true, if: { all: [R, SAIT] }, text: "« C'est fait », dit-elle. Elle le dit à {autre}. Elle a une voix basse, égale, où l'on entend qu'on lui a appris très tôt à ne rien demander deux fois. « Vous me l'aviez annoncé au-dessous de la vérité. On ne se figure pas le silence. »" },
      { first: true, if: { all: [R, { not: SAIT }] }, text: "« Qu'est-ce que vous lui avez fait ? » Elle le dit bas : elle a une enfant endormie contre elle. Puis elle voit la poussière arrêtée, le rideau qui tient son pli en l'air ; et tu vois la question changer de taille sur sa figure. « Qu'est-ce que j'ai fait ? »" },
      { first: true, if: J, text: "Elle regarde {autre}, ensuite : les pieds nus, les sabots à la main, le charbon jusqu'aux coudes. Elle demande seulement : « D'où ? » {autre} répond : « De soixante ans plus loin, madame. » Elle ferme les yeux, le temps de le loger." },
      { first: true, if: R, text: "Elle te regarde, ensuite : tes pieds nus, tes sabots, ton charbon. Elle demande seulement : « D'où ? » Tu réponds : « De soixante ans plus loin, madame. » Tu ne savais pas que tu savais dire *madame.* Elle ferme les yeux, le temps de le loger." },
      { first: true, text: "« J'ai peu de temps. Je le sens dans mes doigts. Dites. »" },
      { again: true, text: "La Reine est debout à la croisée ouverte d'un doigt, sa main à plat sur le dos de l'enfant. Elle attend, et le gris lui remonte aux poignets." },
    ],
    choices: [
      { label: "Lui dire ce qu'il y a dehors, et depuis quand", hide: { any: [R, { seen: "K16j_reine_dire" }] }, to: "K16j_reine_dire" },
      { label: "Lui dire qui a payé pour cela", hide: { any: [R, { seen: "K16j_reine_oderic" }] }, if: { any: [{ has: "j:preuve_oderic" }, { has: "j:oui_marche" }, { has: "j:vu_paiement" }] }, why: "Tu n'as rien vu, là-dessus, que tu puisses jurer.", to: "K16j_reine_oderic" },
      { label: "Lui répéter ce que sa fille t'a dit", hide: { any: [R, { seen: "K16j_reine_fille" }] }, if: { any: [{ has: "j:aelis_parle" }, { has: "j:aelis_dit" }, { has: "j:aelis_vue" }] }, why: "Tu n'as jamais parlé à l'enfant.", to: "K16j_reine_fille" },
      { label: "Lui dire qui règne, et sur quel serment", hide: { any: [J, { seen: "K16r_reine_serment" }] }, to: "K16r_reine_serment" },
      { label: "Lui dire ce que vaut la langueur grise, chez toi", hide: { any: [J, { seen: "K16r_reine_remede" }] }, to: "K16r_reine_remede" },
      { label: "Lui demander un mot pour celle qui jure à sa place", hide: { any: [J, { seen: "K16r_reine_papier" }] }, to: "K16r_reine_papier" },
      { label: "« Madame. Que voulez-vous qu'on fasse de votre heure ? »", hide: { not: EN_MAIN }, fx: { flag: "monde:reine_voeu_partout", ep: ["histoire", 1500] }, to: "K16_reine_fin", big: true },
      { label: "« Madame. Que voulez-vous qu'on fasse de votre heure ? »", hide: EN_MAIN, fx: { flag: "monde:reine_voeu_601", ep: ["histoire", 1500] }, to: "K16_reine_fin", big: true },
    ] },

  K16j_reine_dire: { act: "V", title: "Une lieue, soixante ans", place: "tour", ambiance: "chateau",
    text: [
      { if: SAIT, text: "Tu le lui redis, parce qu'elle a le droit de l'entendre une fois les yeux ouverts : la ville entière, une lieue autour, la bouche sur *onze.* Soixante ans. Tu ajoutes ce que tu ignorais ce matin : que la chose grandit ; qu'elle a mangé une abbaye, un pont, un bourg de verriers ; qu'elle mangeait, hier, une ferme où tu as dormi." },
      { if: { not: SAIT }, text: "Tu le lui dis. Tu n'as pas trouvé de façon douce, en neuf jours, et tu n'en cherches plus : la ville entière, une lieue autour, la bouche sur *onze.* Soixante ans. Que la chose grandit ; qu'elle a mangé une abbaye, un pont, un bourg de verriers ; qu'elle mangeait, hier, une ferme où tu as dormi." },
      "Elle écoute la tête droite. Elle a été élevée à recevoir debout les mauvaises nouvelles, dans une robe qui pèse, devant des gens qui guettent si elle plie.",
      { if: SAIT, text: "« Vous m'aviez dit la ville. Je me suis dit : la ville me pardonnera, c'est son métier. Vous ne m'aviez pas dit les fermes. » Elle regarde par la croisée, vers la plaine. « On m'avait promis une chambre. Huit baies, une enfant, moi. J'ai signé pour une chambre. Il faut croire que je lis mal les plans. »" },
      { if: { not: SAIT }, text: "« Une chambre. » Sa voix n'a pas monté. « On m'a montré un plan. Huit baies, une enfant, moi, et un fil d'ivoire pour dire que j'étais prête. J'ai signé pour une chambre. » Elle regarde par la croisée, vers la plaine. « Il y avait une ferme. Il y avait des gens dans cette ferme. »" },
      "Tu dis qu'il y avait une petite fille de neuf ans, qui ouvrait les pendules. Qu'elle en a soixante-neuf. Que c'est elle qui t'envoie.",
      "« Elle a eu soixante ans pour me haïr. » La Reine considère cela comme un compte qu'on lui présente, et qu'elle trouve juste. « Elle a mieux employé son temps que moi le mien. »",
    ],
    choices: [{ back: "K16_reine" }] },

  K16j_reine_oderic: { act: "V", title: "Le beau-frère", place: "tour", ambiance: "chateau",
    text: [
      "Tu lui dis le reste. Douze mille écus. Un duc sur un quai, la nuit, devant des caisses marquées FOIN. Un sous-maître à qui l'on commandait une chambre, et qui en a vendu une autre, plus grande, à un meilleur payeur.",
      { if: { has: "j:epreuve_sceau" }, text: "Tu lui dis le sceau : *ODERIC RÉGENT D'AURIME*, gravé d'avance, livré le douze. Elle a un mouvement de la bouche qui serait un sourire chez une personne moins fatiguée. « Le douze. J'ai signé la commission le douze. Il a donc commandé son cachet le matin et dîné chez moi le soir. Il a repris deux fois du chapon. »" },
      { if: { all: [{ has: "j:lettre_oderic" }, { not: { has: "j:epreuve_sceau" } }] }, text: "Tu lui dis la lettre : *l'empêchement de la Reine*, le dais pour le vingt-deux, la chasse à la Louvière. Elle a un mouvement de la bouche. « L'empêchement. Il a toujours eu le mot propre. À la mort du Roi, il a écrit : *le vide que laisse Votre Majesté.* J'étais dans la pièce. »" },
      { if: { not: { any: [{ has: "j:lettre_oderic" }, { has: "j:epreuve_sceau" }] } }, text: "Tu n'as pas de papier. Tu as tes yeux, et ce qu'ils ont vu d'un toit. Elle te croit sans papier. « Il chasse, ce matin, à la Louvière, avec douze gentilshommes. Il m'a fait demander hier si je lui permettais de manquer la cérémonie. J'ai trouvé cela délicat. »" },
      "Elle rajuste l'enfant sur sa hanche, d'un coup de rein, comme toutes les mères du royaume.",
      "« Je vais vous dire ce qu'on ne mettra dans aucune chronique. Je le savais à moitié. On sait toujours à moitié, quand on signe. J'ai vu ses yeux le jour où le médecin a dit *l'été.* J'ai pensé : il compte. Et j'ai pensé : qu'il compte, pourvu qu'elle vive. » Elle relève la tête. « Il a régné ? » Tu dis oui. Lui, son fils, sa petite-fille. « Bien ? » Tu regardes {autre}. {autre} hausse une épaule. « Longtemps », dit {autre}.",
    ],
    choices: [{ back: "K16_reine" }] },

  K16j_reine_fille: { act: "V", title: "On ne m'a pas demandé", place: "tour", ambiance: "chateau",
    text: [
      { if: { has: "j:aelis_parle" }, text: "Tu lui dis que tu as réveillé l'enfant, tout à l'heure, d'un grain, pendant qu'elle-même dormait debout. La Reine a un geste vers toi, vif, qui s'arrête : elle voulait te prendre le poignet, et elle a une seule main." },
      { if: { has: "j:aelis_verite" }, text: "« Elle a demandé si vous jouiez. Je lui ai dit que vous dormiez, que toute la ville dormait, et pour longtemps. Elle a dit : *quand je sais, ça va.* Elle s'est remise contre votre cou. »" },
      { if: { has: "j:aelis_douce" }, text: "« Elle a demandé si vous jouiez. Je lui ai dit que vous écoutiez la cloche. Elle a dit : *c'est long, onze.* Elle m'a crue à moitié, par politesse. »" },
      { if: { all: [{ has: "j:aelis_dit" }, { not: { has: "j:aelis_parle" } }] }, text: "Tu lui redis ce que l'enfant t'a chargé{e} de dire, avant-hier, assise sur un lit où l'on défend de s'asseoir. *Je veux bien boire la tisane. Je veux bien dormir. Je ne veux pas qu'on m'arrête comme la pendule. On ne m'a pas demandé.*" },
      { if: { all: [{ not: { has: "j:aelis_dit" } }, { not: { has: "j:aelis_parle" } }] }, text: "Tu lui dis ce que tu as vu, le jour où l'on t'a mené{e} à la chambre de l'enfant : une petite fille qui avait arrêté sa pendule elle-même, pour voir, et qui en avait conclu que cela ne marchait pas." },
      "La Reine se tait. Elle regarde la figure de sa fille, tout contre la sienne, la bouche ouverte sur un mot. Elle a le visage de quelqu'un qui relit une lettre reçue trop tôt, à l'âge où il convenait de la comprendre.",
      "« Elle a huit ans, et elle raisonne mieux que mon Conseil. Je l'ai toujours su. Je me suis toujours arrangée pour ne pas le lui laisser voir : on m'a élevée ainsi, et cela fait des reines. » Elle pose les lèvres sur les cheveux de l'enfant. « Je vous dois de l'avoir entendue. On ne m'avait pas demandé non plus, à moi, à son âge. J'aurais dû m'en souvenir. »",
    ],
    choices: [{ back: "K16_reine" }] },

  K16r_reine_serment: { act: "V", title: "Au nom de la Reine endormie", place: "tour", ambiance: "chateau",
    text: [
      "Tu lui dis ce qu'on sait dans les camps. Qu'il y a une Régence. Que le duc l'a eue, puis son fils, puis la fille de son fils, qui s'appelle Odeline et qui a vingt-huit ans. Que tous les ans, au Grand Midi, quelqu'un monte sur une estrade au pied de cette Tour et jure, la main sur un livre, de rendre le royaume à la Reine quand elle s'éveillera.",
      "« Soixante fois ? — Soixante. C'était la soixantième ce matin. J'y étais. Y avait des trompettes. »",
      "Elle a un petit souffle par le nez. Chez une autre, ce serait un rire.",
      "« Et l'on jure cela en bas, sur le parvis, à trois cent soixante marches de moi. Aucun n'a monté ? » Tu dis que l'escalier est gardé. Qu'on pend ceux qui touchent aux dormants. Qu'on dit *par la Dormeuse* pour être cru, à la lisière, quand on vend une montre.",
      "« Une montre. » Elle te regarde mieux. Elle regarde tes mains. Elle a compris ton métier, et tu attends qu'elle recule : les dames reculent. Elle reste où elle est.",
      "« Vous viviez de ce qui tombait de moi. » Elle le dit sans reproche, comme on constate qu'il pleut. « Des gens ont eu faim à cause de cette chambre. Vous en êtes. Vous êtes la première personne à qui je puisse le dire en face, et je vous le dis : je vous demande pardon. Je sais ce que vaut le pardon d'une reine. Il ne nourrit personne. Prenez-le quand même. »",
      "C'est le premier présent de ce genre qu'on te fait. Tu ignores où cela se range. Tu le mets avec le sable.",
    ],
    choices: [{ back: "K16_reine" }] },

  K16r_reine_remede: { act: "V", title: "Entre les sangsues et le miel rosat", place: "tour", ambiance: "chateau",
    text: [
      "Tu regardes l'enfant. Tu dis le mot de chez toi : le mal de cave. Tu dis qu'on l'a, à Roquebise, les hivers mouillés. Que tu l'as eu à sept ans.",
      "La Reine retient son souffle. Elle a la question sur les lèvres, et elle la garde. Tu lui donnes la réponse sans la lui faire demander : c'est une chose qu'on doit aux gens.",
      "« Ça se guérit. Une écorce. Du fièvrier. On la fait bouillir, on en boit dix-neuf jours, c'est mauvais à pleurer, et on se lève. L'apothicaire la vend au poids. Elle la range entre les sangsues et le miel rosat. »",
      "Tu vois la chose entrer. Tu as vu, à la lisière, des hommes apprendre que leur maison était prise depuis la veille ; cela faisait la même figure, en moins grand.",
      { if: { has: "monde:aelis_remede" }, text: "Tu lui montres le petit poing fermé, contre son cou. « Elle en a dans la main. Dix-huit. Elle a bu la première tout à l'heure, pendant que vous dormiez. Elle a fait la grimace. » La Reine ouvre les doigts de l'enfant, un par un, avec une précaution d'orfèvre. Elle voit le grès, la cire. Elle referme les doigts. Elle pleure sans un bruit et sans un pli, comme pleurent les gens à qui l'on a défendu de le faire en public." },
      { if: { all: [{ has: "monde:aelis_ecorce" }, { not: { has: "monde:aelis_remede" } }] }, text: "« Elle en a bu, dit la Reine très vite. Ce matin. Votre ami{autre:e} en a trouvé, je ne sais où. Elle était rose. — Elle l'est. C'est le rose des premières prises. Il en faut dix-neuf. » Elle compte. Tu la vois compter ce qu'il y avait dans le pot du médecin, et arriver à un chiffre qui n'est pas dix-neuf." },
      { if: { not: EN_MAIN }, text: "« En l'an 541, dit-elle lentement, cette écorce est à un an de mer. On me l'a dit avant-hier. Je n'avais pas un an. » Elle te regarde. « Vous dites qu'on la vend au poids. — Chez moi. Dans soixante ans. » Elle fait oui de la tête, plusieurs fois, comme on suit une addition jusqu'au bas de la page." },
      "« J'ai arrêté une ville pour attendre un remède. Le remède est venu. Il a attendu quarante ans devant la porte, et personne n'a monté le lui dire. » Elle redresse la tête. « Ne me plaignez pas. Je vous défends de me plaindre : il y a, sous cette fenêtre, cinq mille personnes à plaindre avant moi. »",
    ],
    choices: [{ back: "K16_reine" }] },

  K16r_reine_papier: { act: "V", title: "Pour celle qui jure", place: "tour", ambiance: "chateau",
    text: [
      "Tu lui dis que la Régente d'à présent ignore tout. Qu'elle jure de bonne foi. Qu'elle t'a regardé{e} dans les yeux, hier, dans une orangerie, et qu'elle a demandé un papier : chez ces gens-là, une chose est vraie quand elle a un cachet.",
      { if: RENONCE, text: "La Reine porte la main à son corsage. Elle en tire le pli à la cire rouge, et te le tend. « Je l'avais mis sur moi pour qu'on le trouve. Je pensais à un évêque, dans huit jours. Ce sera vous, dans soixante ans : il a moins bien choisi son messager que moi le mien. » Tu le prends. La cire est écrasée à gauche, d'un pouce qui appuie de travers. « Il est daté du vingt. J'y révoque la commission du douze. On m'a prise le vingt et un, contre mon seing. Qu'elle lise cela à son Conseil, et qu'elle regarde qui pâlit. »" },
      { if: { not: RENONCE }, text: "La Reine regarde ses mains. L'une tient l'enfant, l'autre est grise jusqu'au poignet. « Je n'écrirai plus, ce matin. » Elle ôte de son petit doigt, avec les dents, une bague de rien, un jonc d'argent noirci. « C'est celle de mes quinze ans. Elle ne figure dans aucun inventaire : aucun faussaire n'aura songé à l'imiter. Ma dame d'atours l'a dessinée dans le registre des hardes, à la page de mon entrée. Qu'on ouvre le registre. »" },
      { if: { not: RENONCE }, text: "Elle te la met dans la paume. « Vous lui direz ceci, de ma bouche. *Mahaut a signé le douze une sottise de mère. Personne n'a régné en son nom : on a régné sur son sommeil. Elle relève de leur serment tous ceux qui l'ont prêté.* Vous retiendrez ? » Tu retiens. Tu as retenu des routes entières sans savoir lire." },
      "« Dites-lui aussi qu'elle a mon nez, si elle l'a. » Tu dis qu'elle a celui de l'oncle. « Alors ne dites rien. »",
    ],
    choices: [
      { label: "Serrer le pli dans ta chemise", hide: { not: RENONCE }, fx: { item: "revocation_reine", flag: "monde:mandat_reine", ep: ["histoire", 800] }, back: "K16_reine" },
      { label: "Passer le jonc à ton pouce", hide: RENONCE, fx: { item: "jonc_reine", flag: "monde:mandat_reine", ep: ["histoire", 800] }, back: "K16_reine" },
    ] },

  K16_reine_fin: { act: "V", title: "Ce que veut Mahaut", place: "tour", ambiance: "chateau",
    text: [
      "Elle prend son temps. Elle regarde la chambre, les huit baies, le petit lit blanc. Elle regarde la corde qui descend du plafond, et où cette corde s'en va.",
      { if: R, text: "« Chez vous, demande-t-elle, on en guérit ? De ce qu'elle a ? » Tu dis oui. Tu dis l'écorce, en quatre mots. Elle hoche la tête. Elle le savait peut-être déjà ; elle voulait l'entendre une fois de plus, comme on recompte une somme avant de la donner.", },
      { if: J, text: "« Chez vous, demande-t-elle à {autre}, on en guérit ? De ce qu'elle a ? » {autre} dit oui, et l'écorce, en quatre mots. La Reine hoche la tête, comme on recompte une somme avant de la donner." },
      { if: { has: "monde:aelis_remede" }, text: "« Elle a dix-huit prises dans la main. » Sa voix est nette. « Alors je n'ai plus rien à demander à personne. Rendez l'heure. Où il vous plaira qu'elle sonne, hier ou dans soixante ans : ma fille se réveillera avec son remède au poing, et moi avec ma faute. Nous saurons quoi faire de l'un et de l'autre. »" },
      { if: { all: [{ has: "monde:aelis_ecorce" }, { not: { has: "monde:aelis_remede" } }] }, text: "« Elle a bu trois prises, et il en faut dix-neuf. » Sa voix est nette. « Je ne vous demanderai rien pour moi. Je vous demande ceci pour elle, et vous ferez ensuite ce que vous jugerez : s'il y a deux portes à cette heure, ouvrez celle où l'écorce se vend au poids. Je me réveillerai chez des étrangers, dans un royaume qui aura appris à se passer de moi. C'est une pénitence qui me va. »" },
      { if: { not: EN_MAIN }, text: "« Alors voici. » Sa voix est nette. « Je ne vous demande rien pour moi. Pour elle, je vous demande ceci, et vous ferez ensuite ce que vous jugerez : s'il y a deux portes à cette heure, ouvrez celle où l'écorce se vend au poids. Je me réveillerai chez des étrangers, dans un royaume qui aura appris à se passer de moi. C'est une pénitence qui me va. »" },
      { if: RENONCE, text: "« Et sachez-le, tous les deux, pour le jour où l'on vous dira que je l'ai voulu : j'avais dit non. La veille. Par écrit. J'ai dit non trop tard, à un homme qui avait déjà sa clef. C'est toute mon excuse, et elle est mince. »" },
      { if: { all: [{ not: RENONCE }, { has: "j:promis_reine" }, J] }, text: "Elle te regarde. « Vous m'aviez promis votre aide pour une chose que vous jugiez mauvaise. Je vous en tiens quitte. Je vous l'avais refusé avant-hier : j'avais tort avant-hier. »" },
      "Le gris est à ses coudes. Elle le voit. Elle se hâte, sans que sa voix se hâte.",
      "« Une chose encore. On voudra vous faire tenir cette heure. Quelqu'un vous dira qu'il suffit de la garder, qu'on verra plus tard, qu'une enfant vaut bien cela. Je le sais : c'est ce qu'on m'a dit, et j'ai trouvé que c'était bien parlé. » Elle serre sa fille. « Ne m'écoutez pas, si c'est ma voix qu'on vous fait entendre en bas. Écoutez celle-ci. Je la paie assez cher. »",
      "Elle se tourne vers la croisée. Elle veut finir son pas. Elle le finit : la main sur la crémone, l'enfant sur la hanche, la figure au jour. Sa bouche s'arrête sur une chose qu'elle disait à sa fille, et que vous n'aviez pas à entendre.",
      { if: J, text: "{autre} remet ses sabots sur le palier seulement. Dans la vis, {autre:il} dit : « Elle m'a demandé pardon. À moi. » Et, trois marches plus bas : « Je savais pas que ça se faisait dans ce sens-là. »" },
      { if: R, text: "Tu remets tes sabots sur le palier seulement. Dans la vis, tu dis à {autre} : « Elle parle comme on rend la monnaie. Juste. » Tu cherches autre chose. Tu ne trouves pas mieux, et {autre} a l'air de trouver que cela suffit." },
    ],
    choices: [{ label: "Descendre", to: "K16_vis" }] },

  K16_vis: { act: "V", title: "Trois cent soixante marches, à deux", place: "tour", ambiance: "chateau",
    text: [
      "Vous descendez. La vis tourne, toujours du même côté, et la note descend avec vous : elle est dans la pierre, à hauteur de poitrine, égale à tous les étages.",
      { if: J, text: "{autre} va devant. {autre:Il} descend en sabots comme d'autres en pantoufles, sans regarder ses pieds, une main au noyau. Tu connais cette nuque. Tu ne l'avais jamais vue : tu la connais par des phrases, *J'AI MARCHÉ TOUT LE JOUR*, et il se trouve que les phrases étaient ressemblantes." },
      { if: R, text: "Tu vas devant. Tu entends {autre} derrière toi, qui compte les marches à mi-voix, par habitude d'horloger. À cent vingt, {autre:il} se trompe, et recommence. Tu ralentis pour qu'{autre:il} retrouve son compte. C'est une chose que tu fais sans y penser, et que tu n'as jamais faite pour personne." },
      "Au second palier, Baudouin est assis sur sa marche, la tête dans les mains, par-dessus la cire. Vous l'enjambez. Plus bas, la trappe, le fil, l'anneau ; plus bas encore, des meurtrières où le jour tient comme une lame dans un fourreau.",
      { if: { has: "monde:reine_laissee" }, text: "Vous êtes passés devant la porte de chêne sans vous arrêter. Elle était fermée de deux tours. Il y a des gens qu'on respecte en frappant, et d'autres en passant son chemin." },
      "En bas, un vestibule, des hallebardes au râtelier, et la porte de bronze, ouverte à deux battants sur un jour immobile et sur cinq mille personnes.",
    ],
    choices: [{ label: "Passer la porte de bronze", to: "K16_pied" }] },

  K16_pied: { act: "V", title: "Au pied de la Tour", place: "tour", ambiance: "ville", hub: true, backName: "le pied de la Tour",
    text: [
      { first: true, text: "Le jour vous arrive d'un bloc. Il a la chaleur d'un mur au soleil : elle ne vient pas à vous, il faut aller la toucher. Rien ne sent. Vous aviez oublié qu'une foule sent, le drap, la sueur, le pain chaud, l'oignon ; celle-ci tient ses odeurs comme elle tient ses chapeaux, en l'air, chacune à sa place, et l'on entre dans une odeur de beignet comme on passe sous une branche." },
      { first: true, text: "Le dais rouge est à dix pas, sur ses quatre porteurs. Devant la porte, la haie des archers, et le capitaine, la main à l'épée, qui regarde le cadran par-dessus vos têtes. Près de la porte basse, un homme en noir, sans chapeau. Au-delà, la place : des dos, des nuques, des bras levés, jusqu'aux maisons." },
      { first: true, if: J, text: "Tu as traversé cette foule ce matin, à coups d'épaule. Elle t'a marché sur les pieds, elle t'a dit de circuler. Elle te laisse à présent toute la place que tu veux, et tu la trouves trop polie." },
      { first: true, if: R, text: "Tu connais ce parvis à quatre pattes. Tu sais où l'on passe : entre le hallebardier et la borne, sous le coude de la femme au panier, le long du mur. Tes pieds y vont tout seuls. Il manque seulement, par terre, la poussière de soixante ans, où tu avais laissé hier la trace de tes genoux." },
      { again: true, text: "Le parvis, le dais rouge, la haie des archers. La Tour, derrière vous, avec son ombre courte comme une marche." },
    ],
    choices: [
      { label: "Le capitaine Hardouin", hide: R, to: "K16j_hardouin" },
      { label: "Maître Anthelme, près de la porte basse", hide: R, to: "K16j_anthelme" },
      { label: "La ruelle des Sonneurs, la porte de fer", hide: R, to: "K16j_fer" },
      { label: "Les quatre rubans verts", hide: R, to: "K16j_rubans" },
      { label: "Le capitaine, que tu as vu vieux d'une heure", hide: J, to: "K16r_hardouin" },
      { label: "Le médecin en noir", hide: J, to: "K16r_anthelme" },
      { label: "Les chariots bâchés, à la porte basse", hide: J, to: "K16r_cuves" },
      { label: "Le pied du mur, où la pierre farine", hide: J, to: "K16r_sueur" },
      { label: "Le dais", hide: J, to: "K16r_dais" },
      { label: "Aller s'asseoir à la fontaine des Jurés", to: "M16", big: true },
    ] },

  // ----- the foot of the Tower, the one who passes
  K16j_hardouin: { act: "V", title: "La mauvaise porte", place: "tour", ambiance: "ville",
    text: [
      "De près, c'est un homme de cinquante ans, carré, la moustache grise taillée à l'ordonnance, une main sur la garde. Sous l'oreille gauche, le flocon de savon a séché. Il a les yeux levés vers le cadran, et dans ces yeux une question de service : *pourquoi ne sonne-t-elle pas ?*",
      { if: { has: "monde:hardouin_tour" }, text: "Il a dégarni trois grilles pour garder cette porte, sur ta parole. Tu lui avais dit : la Tour. Tu n'avais pas su lui dire laquelle des deux portes. Il a pris la grande, en soldat, parce qu'on attend le danger par où passent les reines. Le danger est entré par la ruelle, avec une pèlerine et neuf apprentis." },
      { if: { not: { has: "monde:hardouin_tour" } }, text: "Il garde la porte de bronze parce que c'est sa place un jour de cérémonie. Personne ne lui a dit qu'il y en avait une autre, en fer, dans une ruelle, par où un sous-maître était descendu une heure plus tôt avec neuf apprentis." },
      "Ses six archers sont derrière lui, la corde détendue, l'air de s'ennuyer avec discipline.",
    ],
    choices: [
      { label: "Poser un grain sur la main qui tient l'épée", hide: { seen: "K16j_hardouin_eveil" }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 } }, to: "K16j_hardouin_eveil" },
      { back: "K16_pied" },
    ] },

  K16j_hardouin_eveil: { act: "V", title: "Un ordre, mon capitaine", place: "tour", ambiance: "ville",
    text: [
      "L'épée sort de trois doigts, d'elle-même, avant que l'homme ait rien compris : il a trente ans de garde dans le poignet. Puis il te voit, il voit sa place, ses archers en statues, et l'épée rentre.",
      { if: { has: "j:hardouin_croit" }, text: "« Vous. » Il regarde le cadran, la foule, le ciel où pendent des chapeaux. « C'est donc arrivé. Vous m'aviez dit que cela arriverait, et je vous ai cru{e} aux trois quarts, ce qui est beaucoup pour un homme de mon grade. Le dernier quart vient de rentrer. »" },
      { if: { not: { has: "j:hardouin_croit" } }, text: "« Qui vive ? » Il le dit par règle. Il regarde le cadran, la foule, le ciel où pendent des chapeaux, et la règle le quitte. « Qu'est-ce que c'est que cette diablerie ? Qui commande, ici ? » Tu dis : personne. Tu dis, en six mots, ce qui s'est fait sous ses pieds." },
      "Il écoute. Il a la figure d'un homme qui fait l'appel de ses fautes et qui les trouve toutes présentes. « J'ai gardé la mauvaise porte. » Il le dit une fois. C'est dit pour toujours : il est de ceux qui portent ces phrases-là en dedans, à gauche, pendant trente ans.",
      "« Je sens que cela me reprend. Vite. Vous avez besoin de quoi ? Je suis capitaine des gardes de la Reine. Je n'ai jamais rien su faire d'autre que d'exécuter un ordre, et il n'y a plus ici que vous pour m'en donner. »",
    ],
    choices: [
      { label: "« Quand la cloche resonnera, la porte de fer, dans la ruelle. Arrêtez ce qui en sort avec des yeux vairons. »", fx: { flag: "monde:hardouin_ruelle", ep: ["histoire", 600] }, to: "K16j_hardouin_fin" },
      { label: "« Quand la cloche resonnera, montez. Elle aura besoin de quelqu'un qui ne lui demande rien. »", fx: { flag: "monde:hardouin_monte", ep: ["histoire", 600] }, to: "K16j_hardouin_fin" },
      { label: "« Quand la cloche resonnera, faites ouvrir les rues qui descendent. Cinq mille personnes voudront toutes partir par la même. »", fx: { flag: "monde:hardouin_rues", ep: ["histoire", 600] }, to: "K16j_hardouin_fin" },
    ] },

  K16j_hardouin_fin: { act: "V", title: "À vos ordres", place: "tour", ambiance: "ville",
    text: [
      { after: "monde:hardouin_ruelle", text: "« Des yeux vairons. La porte de fer. » Il le répète comme une consigne de nuit. « J'y serai en vingt pas. Je l'ai salué ce matin, ce monsieur ; il m'a rendu mon salut avec deux doigts. Je lui rendrai ses deux doigts. »" },
      { after: "monde:hardouin_monte", text: "« Monter. » Il regarde la Tour, de bas en haut, en homme qui sait le nombre des marches. « Je ne lui demanderai rien. Je lui dirai l'heure, et qu'il y a une chaise en bas. C'est tout ce qu'on dit à une reine, les jours où elle a eu tort : le reste, elle se le dit. »" },
      { after: "monde:hardouin_rues", text: "« Les rues. » Il jette un coup d'œil de métier aux quatre coins de la place. « La rue aux Oies, la Poulie, la descente des Jurés. Je mets deux hommes à chacune, et je fais passer les femmes d'abord. On a écrasé quarante personnes au sacre du feu Roi pour moins que cela. »" },
      "Il veut ajouter quelque chose. Il cherche. Les capitaines cherchent longtemps ce qui n'est pas dans le règlement.",
      "« Quand cela resonnera, pour moi, il se sera passé le temps d'un salut. Je ne saurai pas que je vous ai parlé. Si, pourtant : je saurai l'ordre. On oublie tout, on n'oublie pas un ordre. » Il se remet face au cadran, la main à la garde, et corrige sa position d'un demi-pas. « C'est ainsi qu'on m'a fait. Pour une fois, cela sert. »",
      "Le flocon de savon est toujours sous son oreille. Tu l'enlèves, du bout du doigt. Il aurait voulu qu'on le lui dise.",
    ],
    choices: [{ back: "K16_pied" }] },

  K16j_anthelme: { act: "V", title: "Celui qui regarde plus haut", place: "tour", ambiance: "ville",
    text: [
      "Maître Anthelme est le seul, de cinq mille, qui tourne le dos au cadran. Il a la tête renversée vers la croisée de la Chambre haute, sa trousse sous le coude, la bouche fermée. C'est un petit homme sec, en noir, les poignets tachés de teintures. On l'a laissé en bas : la Coutume veut la Reine seule avec l'héritière, et un médecin est du monde.",
      { if: { has: "j:anthelme_allie" }, text: "Il t'a ouvert la porte des Simples, un soir, sur un mot de passe qui était *le néant.* Il t'a dit qu'il soignait cette enfant depuis qu'elle avait des dents, et qu'il la regardait mourir avec toute sa science rangée autour de lui, bien étiquetée." },
      { if: { has: "monde:aelis_ecorce" }, text: "Il a fait bouillir ton écorce lui-même, sans y croire, par acquit, comme on essaie une clef qui n'est pas de la serrure. Il a vu la petite prendre couleur. Il a pleuré de l'œil gauche en lui donnant la tasse." },
      "Dans sa main droite, entre deux doigts, il tient un sablier de médecin, de ceux qui mesurent un pouls. Il comptait quelque chose. Il regarde une fenêtre, et il compte.",
    ],
    choices: [
      { label: "Poser un grain sur sa main", hide: { any: [{ seen: "K16j_anthelme_eveil" }, { has: "monde:anthelme_sait" }] }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "monde:anthelme_sait", ep: ["histoire", 800] }, to: "K16j_anthelme_eveil" },
      { back: "K16_pied" },
    ] },

  K16j_anthelme_eveil: { act: "V", title: "Dix-neuf", place: "tour", ambiance: "ville",
    text: [
      "Il baisse les yeux sur son sablier. Il le secoue. Le sien s'est arrêté, et il y a sur sa main un grain qui coule : il comprend cela plus vite qu'un capitaine. Les médecins savent ce que c'est qu'un corps où quelque chose continue pendant que le reste a cessé.",
      "« Elle est prise ? » C'est sa première question. Tu dis oui. « Et la mère ? » Oui. Il ferme les yeux. « Alors le gris ne monte plus. J'y ai pensé toute la nuit, Dieu me pardonne. J'ai pensé : si ce charlatan réussit, elle gagne du temps, et j'aurai le temps. »",
      "Tu lui dis qu'il l'a eu. Tu lui dis d'où tu viens. Tu lui dis le nom : fièvrier. L'écorce du tronc, prise au printemps. Une poignée pour une pinte, bouillie jusqu'au brun. Dix-neuf jours, une prise par jour, sans en sauter.",
      { if: { has: "monde:aelis_remede" }, text: "« Elle en a dix-huit dans le poing, toutes faites, dans une fiole de grès. Elle a bu la première. C'est écrit au mur, derrière le lit. » Il rouvre les yeux. Il te regarde comme les malades regardent les médecins, et tu vois ce que cela lui coûte d'être de ce côté-là. « Dans une fiole. De quelle main ? — De la vôtre. Vous la ferez dans soixante ans, pour quelqu'un en sabots. » Il rit, d'un rire sec, effaré. « Je me serai donc bien conservé. »" },
      { if: { not: { has: "monde:aelis_remede" } }, text: "« Du fièvrier. » Il le répète, et tu vois le mot aller se ranger dans une tête où il y a dix mille tiroirs. « Il en vient du Levant, par les galères, pour les teinturiers. Un an de mer. Je l'ai eu dans les mains : cela donne un jaune. Un jaune ! » Il se frappe le front de son sablier. « Je cherchais un remède chez les apothicaires, et il était chez les teinturiers, à faire des bas. »" },
      "« Dix-neuf. Sans en sauter. » Il tire de sa manche un crayon de plomb, et il l'écrit sur sa manchette, en latin, en abrégé, d'une main qui se grise. « J'oublierai vous avoir vu{e}. Je le sais : on m'a décrit le phénomène. Je n'oublierai pas ma manchette. Je lis mes manchettes tous les soirs. »",
      "Il relève la tête vers la croisée, et reprend sa pose : c'est la dernière chose qu'il fait de lui-même. Sur son poignet, quatre mots de plomb regardent le ciel.",
    ],
    choices: [{ back: "K16_pied" }] },

  K16j_fer: { act: "V", title: "La porte au papillon", place: "tour", ambiance: "ville",
    text: [
      "La ruelle des Sonneurs est dans l'ombre de la Tour, la seule ombre longue de la ville : elle tombe d'un mur. La borne, à dix pas de la porte. Le vantail de fer, entrebâillé d'une main, avec son papillon de cuivre.",
      { if: { has: "monde:josquin_debout" }, text: "Josquin est debout au milieu de la ruelle, les mains à plat sur les oreilles, par-dessus la cire. Il a seize ans et la figure de quelqu'un qui compte des morts. Il regardait vers la place quand tout s'est tu. Le charbon est à sa ceinture. Il n'a encore rien écrit." },
      { if: { has: "j:josquin_porte" }, text: "Josquin est assis contre le vantail, le front levé, la bouche ronde sur *onze.* Il comptait les coups avec les lèvres, comme on lui a appris à compter les dents d'une roue. Il n'avait pas voulu de la cire. Il avait dit qu'un apprenti entend ce que son maître entend." },
      { if: { has: "j:aymon_escalier" }, text: "Aymon Foliot a la main à plat sur le fer, à hauteur d'épaule. Il garde. Il a vingt ans, des manchettes, de la cire aux oreilles, et l'entêtement d'un garçon qui a découvert avant-hier qu'on pouvait voter contre son oncle." },
      { if: { not: { any: [{ has: "monde:josquin_debout" }, { has: "j:josquin_porte" }, { has: "j:aymon_escalier" }] } }, text: "Personne. Un chat, sur la borne, la patte levée, qui se la léchait." },
      "Par l'entrebâillement, on voit le haut d'un escalier qui descend, et rien d'autre. C'est par là que vous irez, quand vous irez.",
    ],
    choices: [
      { label: "Poser un grain sur la main de Josquin", hide: { any: [{ seen: "K16j_josquin_eveil" }, { not: { any: [{ has: "monde:josquin_debout" }, { has: "j:josquin_porte" }] } }] }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 } }, to: "K16j_josquin_eveil" },
      { back: "K16_pied" },
    ] },

  K16j_josquin_eveil: { act: "V", title: "Ce qu'un apprenti entend", place: "tour", ambiance: "ville",
    text: [
      { if: { has: "monde:josquin_debout" }, text: "Il ôte ses mains de ses oreilles, lentement. Il ne t'entend pas : la cire. Il te voit. Il voit tes lèvres, et il secoue la tête, et il tire son charbon. Il écrit sur le mur de la ruelle, d'une belle main de copiste : *MON MAÎTRE ?*" },
      { if: { has: "monde:josquin_debout" }, text: "Tu prends le charbon. Tu écris dessous : *EN BAS. VIVANT. PRIS, LA MAIN AU LEVIER.* Il lit. Il ferme les yeux. Puis il reprend le charbon, et tu attends une plainte ; il écrit : *IL A TENU COMBIEN ?* Tu écris : *ONZE.* Il fait oui, plusieurs fois. Il a sur la figure une fierté affreuse." },
      { if: { has: "j:josquin_porte" }, text: "« ...onze. » Il finit le mot, et il attend le suivant, les lèvres prêtes. Le suivant ne vient pas. Il te regarde. « Il a perdu. » Tu dis : il a tenu jusqu'à onze. Il est en bas, vivant, pris, la main au levier. Josquin appuie sa nuque contre le fer. « Onze. Avec ses bras. Contre un homme de trente ans. » Il a sur la figure une fierté affreuse." },
      "Tu lui dis que vous êtes deux. Qu'il y a quelqu'un en sabots, venu de l'autre bout, et que le chapitre trente-neuf parle de vous.",
      { if: { has: "monde:josquin_debout" }, text: "Il écrit vite, à présent ; le gris lui prend les doigts et l'écriture penche. *DITES-LUI QUE J'AI SES LUNETTES. IL LES AVAIT LAISSÉES SUR LA TABLE.* Et, plus bas, en lettres qui s'en vont : *DITES-LUI QUE JE NE SUIS PAS RESTÉ ASSIS.*" },
      { if: { has: "j:josquin_porte" }, text: "« Dites-lui que j'ai ses lunettes. Il les avait laissées sur la table. » Il ralentit. « Dites-lui que j'ai compté avec lui. Il saura. On comptait toujours ensemble, pour les sonneries : il disait que deux bouches se trompent moins... »" },
      "Il s'arrête là. Tu remets le charbon à sa ceinture.",
    ],
    choices: [{ label: "Garder cela pour un vieil homme", fx: { flag: "j:mot_josquin", ep: ["perso", 400] }, back: "K16_pied" }] },

  K16j_rubans: { act: "V", title: "Quatre hommes sous une averse", place: "tour", ambiance: "ville",
    text: [
      "Ils sont à l'entrée de la ruelle, quatre, en habits de bourgeois, le ruban vert au chapeau, la tête dans les épaules. Ce sont les gens du duc. On les a postés là pour voir qui entrait par la porte de fer, et ils ont vu : ils ont la figure de chiens qui ont laissé passer le lièvre et qui se demandent à qui le dire.",
      { if: { has: "j:coudrier_libre" }, text: "Le plus gros a sur la tête un chapeau noir à larges bords, trop petit pour lui, mis de côté. C'est celui du Grand Maître. Il l'a pris cette nuit dans un cachot vide, en trophée, faute du vieillard qui allait dessous." },
      { if: { has: "j:rubans_rosse" }, text: "Le second a l'œil gauche fermé, jaune et violet, de la grosseur d'un œuf. Tu reconnais ton ouvrage. Il a tenu toute une matinée de faction avec cet œil-là : il faut rendre aux gens ce qui leur revient." },
      "Leur maître chasse, à l'heure qu'il est, à la Louvière, à deux lieues du bord. Il entendra de là-bas onze coups, puis rien. Il attendra jusqu'au soir avant d'envoyer voir. Ces quatre-là ont été payés d'avance, et c'est heureux pour leurs veuves.",
    ],
    choices: [
      { label: "Reprendre le chapeau du Grand Maître", hide: { any: [{ not: { has: "j:coudrier_libre" } }, { item: "chapeau_coudrier" }] }, fx: { item: "chapeau_coudrier" }, back: "K16_pied" },
      { back: "K16_pied" },
    ] },

  // ----- the foot of the Tower, the one who stays
  K16r_hardouin: { act: "V", title: "Le savon sous l'oreille", place: "tour", ambiance: "ville",
    text: [
      "Tu le connais. Tu l'as vu ce matin, à cette place, dans cette pose, gris de soixante ans de poussière, avec une toile d'araignée entre le coude et la garde. Il a perdu la toile. Sa cuirasse luit. Sous l'oreille gauche, le savon est blanc : chez toi, c'était une croûte jaune, et tu l'avais prise pour une verrue.",
      { if: { has: "r:hardouin_eveille" }, text: "Tu lui as mis un grain sur la main, hier, au Palais. Il t'a demandé : *qui commande ?* Tu as dit la Régente. Il a dit qu'il ne connaissait pas de régente, qu'il connaissait une reine, et qu'on lui montre l'ordre. C'est un homme à qui il faut un papier pour respirer." },
      { if: { item: "ordonnance_garde" }, text: "Tu as dans ta chemise une ordonnance qu'il a signée : son nom, son grade, un paraphe carré. Il la signera dans soixante ans, à ta demande, d'une main à moitié prise. Il a la plume derrière lui et devant lui. Tu regardes la main : elle ne tremble pas encore de ce qu'elle va signer." },
      "Il regarde le cadran. Il se demande pourquoi elle ne sonne pas. C'est la seule question qu'il se soit posée de sa vie sans avoir personne à qui la transmettre.",
    ],
    choices: [
      { label: "Lui montrer sa propre signature", hide: { any: [{ not: { item: "ordonnance_garde" } }, { seen: "K16r_hardouin_eveil" }] }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 } }, to: "K16r_hardouin_eveil" },
      { back: "K16_pied" },
    ] },

  K16r_hardouin_eveil: { act: "V", title: "Un paraphe carré", place: "tour", ambiance: "ville",
    text: [
      "L'épée sort de trois doigts. Tu ne recules pas : tu as vu ce geste hier, et tu sais qu'il rentre.",
      "Tu lui mets le papier sous le nez avant qu'il ait dit *qui vive.* Il lit. Il lit comme lisent les soldats, avec le doigt. Il arrive au bas. Il voit le paraphe.",
      "« C'est ma main. » Il regarde l'encre, brune, passée ; le pli du papier, qui s'est cassé d'avoir été porté. « Je n'ai jamais signé cela. — Vous le signerez. — Quand ? — Dans soixante ans. Ce matin. » Il te considère. Tu vois qu'il cherche le mot *insolence*, et qu'il ne le trouve pas à sa place habituelle.",
      "« Il est dit là-dedans que la garde blanche prend l'escalier de la Tour, et que la Garde du Sable le lui rend. Je ne connais pas de Garde du Sable. » Tu dis : vous connaîtrez. Tu dis qui la commande, et ce que cet homme a fait sous ses pieds, il y a le temps d'un coup de cloche.",
      "Il rend le papier. Il le rend plié, dans ses plis, avec soin : c'est un ordre. « J'ai donc servi. » Sa voix est drôle. « On m'a réveillé dans soixante ans, et j'ai servi. Vous ne savez pas ce que vous me dites. J'ai gardé la mauvaise porte, ce matin. Je le sens depuis que vous parlez. Et vous m'apprenez qu'on m'en a donné une autre à garder, après, et que je l'ai tenue. »",
      "Il se remet face au cadran. Il a le dos plus droit. Il y a des gens à qui il faut très peu : savoir que la faute n'était pas la dernière ligne de leurs états de service.",
    ],
    choices: [{ label: "Rempocher l'ordonnance", fx: { flag: "r:hardouin_sait", ep: ["perso", 500] }, back: "K16_pied" }] },

  K16r_anthelme: { act: "V", title: "Le même homme, plus tôt", place: "tour", ambiance: "ville",
    text: [
      "Un petit homme sec, en noir, sans chapeau, la tête renversée. Il est le seul à tourner le dos à l'heure. Il regarde une fenêtre.",
      { if: { has: "r:anthelme_eveille" }, text: "Tu le connais, celui-là aussi. Tu l'as réveillé hier dans un pavillon plein de bocaux, où il s'était fait porter après : chez toi, les Veilleurs l'ont rangé parmi ses herbes, avec un ruban. Il t'a écouté{e}. Il a compris le remède au troisième mot. Il a fait la décoction en parlant, de mémoire de mains, et il a mis le temps de quatre grains." },
      { if: { not: { has: "r:anthelme_eveille" } }, text: "Chez toi, il n'est plus ici. Les Veilleurs l'ont porté au Palais, dans un pavillon plein de bocaux, avec un ruban : ils rangent les médecins parmi leurs herbes et les boulangers près des fours, par une idée qu'ils ont de la politesse. Tu es passé{e} devant le pavillon, et tu as vu la plante de ses souliers." },
      "Il a entre deux doigts un petit sablier, de ceux qui mesurent un pouls. Tu regardes ce sablier avec l'œil du métier : c'est du sable de rivière, blond, qui vaut un liard. Cet homme a mesuré des pouls toute sa vie avec du temps de pauvre.",
    ],
    choices: [
      { label: "Poser un grain sur sa main, et lui dire le nom de l'écorce", hide: { any: [{ seen: "K16r_anthelme_eveil" }, { has: "monde:anthelme_sait" }] }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "monde:anthelme_sait", ep: ["histoire", 800] }, to: "K16r_anthelme_eveil" },
      { back: "K16_pied" },
    ] },

  K16r_anthelme_eveil: { act: "V", title: "Chez les teinturiers", place: "tour", ambiance: "ville",
    text: [
      "Il baisse les yeux sur son sablier, le secoue, puis voit le grain sur sa main. Il te regarde. Il regarde tes ongles avant ta figure : c'est un médecin.",
      "« Vous l'avez eue. La langueur. Vous avez les lunules marquées. À quel âge ? — Sept ans. — Et vous voilà. » Il te prend le poignet, d'autorité, et te tâte le pouls. « Vous voilà, avec un cœur de cheval de labour. Qui vous a soigné{e} ? — Une apothicaire. Avec une écorce. »",
      "Tu la lui dis. Le fièvrier. L'écorce du tronc, au printemps, une poignée pour une pinte, bouillie jusqu'au brun. Dix-neuf jours.",
      { if: { has: "r:anthelme_eveille" }, text: "Il écoute exactement comme hier, la tête de côté, avec la même ride. Il dit, au même endroit, la même chose : « Du fièvrier ! Cela vient par les galères, pour les teinturiers. Cela donne un jaune ! » Tu aurais pu le dire avec lui. C'est une drôle de chose, d'entendre quelqu'un s'étonner pour la seconde fois de sa vie d'une nouvelle qu'on lui apprend pour la première." },
      { if: { not: { has: "r:anthelme_eveille" } }, text: "« Du fièvrier ! » Il se frappe le front. « Cela vient par les galères, pour les teinturiers. Cela donne un jaune ! Je l'ai eu dans les mains. Je cherchais chez les apothicaires, et le remède était chez les gens qui font des bas. »" },
      { if: { has: "monde:aelis_remede" }, text: "Tu lui dis que la petite en a dix-huit prises au poing, là-haut, et de quelle main. Il lâche ton poignet. « De la mienne. » Il le croit tout de suite : les savants croient vite ce qui flatte leur méthode. « J'aurai donc fini par la trouver. Soixante ans de retard. On me l'a toujours dit, à la Faculté, que j'étais lent. »" },
      "Il tire un crayon de sa manche, et il écrit sur sa manchette, en abrégé. « Dix-neuf. Sans en sauter. Je lis mes manchettes tous les soirs. » Le gris lui prend la main au milieu d'un chiffre ; il le finit quand même, de travers.",
      "Il relève la tête vers la fenêtre. Tu t'aperçois que tu lui as laissé ton poignet, tout ce temps, et que personne ne t'avait tâté le pouls depuis tes sept ans.",
    ],
    choices: [{ back: "K16_pied" }] },

  K16r_cuves: { act: "V", title: "Du verre de chez toi", place: "tour", ambiance: "ville",
    text: [
      "Contre le flanc de la Tour, à la porte basse, il y a trois fardiers dételés, sous des bâches. Les badauds leur tournent le dos. Tu soulèves un coin de toile.",
      "Du verre. Du verre vert, épais de deux doigts, soufflé en panses hautes comme un homme, cerclé de fer au col. Douze, quatre par fardier, calées dans la paille. Elles sont neuves, sèches, et elles sonnent clair sous l'ongle.",
      "Tu connais ce vert. On le reconnaît entre mille : c'est le sable de la Bise, et la cendre de fougère. C'est Roquebise. Dans le cul de la première, il y a la marque du four, un coq, moulée à chaud. Ce four-là est froid depuis avant ta naissance ; on en montre la cheminée aux enfants.",
      "Tu les as vues ce matin, chez toi, à cette même porte. Elles étaient pleines. Elles avaient bu soixante ans de ce que la Tour suinte, et douze hommes en noir veillaient dessus avec des piques. C'est de là que sortaient les dix ans de jeunesse qu'on vendait pour une terre.",
      "Aujourd'hui elles sont vides. Des verriers de ton pays les ont soufflées sans savoir pour quoi, payées comptant, et ils ont bu à la santé du client. Tu poses la main à plat sur la panse. Elle est tiède de soleil.",
      "Tu pourrais les casser. Tu as un sabot, et le verre de Roquebise, si épais qu'il soit, craint le talon. Puis tu penses qu'on ne casse rien, dans une note : la bâche que tu as levée reste levée, toute seule, comme un drap qu'on tient. Un éclat resterait en l'air. Elles attendront que l'heure reparte, et l'on verra alors qui est là pour les remplir.",
    ],
    choices: [{ label: "Laisser retomber ta main", fx: { flag: "r:vu_cuves_neuves" }, back: "K16_pied" }] },

  K16r_sueur: { act: "V", title: "La première farine", place: "tour", ambiance: "ville",
    text: [
      "Tu vas au pied du mur par habitude : c'est là qu'on glane. Tu t'accroupis.",
      "Chez toi, il y a là un talus gris, haut d'un genou, que la Maîtrise ratisse tous les matins. Ici, la pierre est nette. On y voit encore les coups de boucharde. Tu passes le doigt dans un joint, tout en bas, à l'endroit où l'ombre commence.",
      "Il en revient chargé. C'est une fleur, à peine : une buée de farine grise, plus fine que tout ce que tu as tenu, et tiède. La Tour sue depuis le onzième coup. Elle a commencé il y a un instant. Tu assistes à la première goutte d'une chose qui a nourri trois générations de voleurs, toi compris, et engraissé un seul homme.",
      "Tu racles, au couteau, le long de trois assises. Tu fais cela très bien. Tu en tires de quoi couvrir un ongle, puis deux, et tu le verses dans ton sachet. Aucun garde, aucune amende. C'est la seule fois de ta vie que tu auras glané au pied de cette Tour en plein midi, devant un capitaine.",
    ],
    choices: [{ label: "Renouer le sachet", fx: { stock: { sable: 4 }, flag: "r:glane_tour" }, back: "K16_pied" }] },

  K16r_dais: { act: "V", title: "Rouge", place: "tour", ambiance: "ville",
    text: [
      "Quatre porteurs en livrée, un dais de velours à crépines d'or, une chaise vide dessous. Ils attendent que la Reine redescende.",
      "Tu l'as vu ce matin. Il était brun, cuit, avec des franges où pendaient des cocons ; dix hommes en noir se tenaient dessous, à l'abri d'un soleil qui ne tourne pas, et un sergent t'a dit de passer au large. Tu ne savais pas qu'il avait été rouge. Tu regardes ce rouge. On dirait qu'on vient de le tremper.",
      "Le porteur de devant, à gauche, a glissé un doigt sous son col, qui le serre. Celui de derrière regarde les mollets d'une lingère. Ils ont vingt ans, les quatre. Chez toi, les Veilleurs leur ont mis à chacun un ruban, avec un nom, parce qu'une vieille d'Arvoise les avait reconnus : c'étaient ses oncles.",
      { if: { has: "r:vu_cortege" }, text: "Hier, tu as regardé passer la Régente sous un autre dais, neuf, porté par quatre gaillards qui changeaient d'épaule. Elle levait les yeux vers celui-ci à chaque pas. On lui a appris, toute petite, que la vraie chaise était l'autre, la vide, et qu'elle gardait la place." },
      "La chaise est en bois doré, avec un coussin. Sur le coussin, quelqu'un a posé un éventail fermé, pour le retour.",
    ],
    choices: [{ back: "K16_pied" }] },

  // ----- the fountain : one district at a time, chosen for both
  M16: { act: "V", title: "La fontaine des Jurés", backName: "la fontaine", charniere: true, aparte: true,
    text: [
      { first: true, text: "Le jet est une tige de verre, tordue, plus haute qu'un homme. Les gouttes pendent autour, en collier, et chacune a dedans une Tour à l'envers, grosse comme une lentille. Vous vous asseyez sur la margelle. L'eau du bassin est dure sous la paume ; elle cède, tiède, dans le rond de vos sabliers, et elle mouille." },
      { first: true, if: J, text: "{autre} vide son sachet dans sa main, et compte. {autre:Il} fait deux tas. {autre:Il} pousse le second vers toi, du doigt, sur la pierre. « Chacun le sien. Si on se perd dans leurs rues, je veux pas que tu te remettes à pousser comme un champignon. » Tu noues ta part dans ton mouchoir." },
      { first: true, if: R, text: "Tu vides ton sachet dans ta main, et tu comptes. Tu fais deux tas. Tu pousses le second vers {autre}, du doigt, sur la pierre : si l'on se perd dans ces rues, chacun aura le sien. Tu n'as jamais partagé une glane de ta vie. On n'en meurt pas." },
      { first: true, text: "D'ici, la ville s'offre par trois pentes. Vers le couchant, les rues tombent à la ville basse : le quai, les ponts, la Tannerie. Devant vous, la place et ses rues : les tréteaux, la rue aux Oies, la vieille église. Au levant, la colline des Jurés, avec ses quatre logis. Et tout au bout de la première pente, passé la porte d'Occident, il y a le pré de la Foire et le chemin des peupliers, pour qui a de bonnes jambes." },
      { first: true, text: "Il y a de quoi marcher. Le sachet ne mène pas partout : un grain réveille quelqu'un, et il faut des grains aussi pour revenir. Il faut choisir un chemin." },
      { again: true, text: "La fontaine, sa tige de verre, son collier de gouttes." },
    ],
    choices: [
      { label: "« En bas. La ville basse. »", hide: R, monde: "t16a", option: "bas", fx: { flag: "monde:t16_bas", stock: { sable: 2 } }, to: "K16_bas", big: true },
      { label: "« La place, et les rues autour. »", hide: R, monde: "t16a", option: "place", fx: { flag: "monde:t16_place", stock: { sable: 2 } }, to: "K16_place", big: true },
      { label: "« La colline des Jurés. »", hide: R, monde: "t16a", option: "colline", fx: { flag: "monde:t16_colline", stock: { sable: 2 } }, to: "K16_colline", big: true },
      { label: "« La porte d'Occident. Le halage, jusqu'au bord. »", hide: R, monde: "t16a", option: "halage", fx: { flag: "monde:t16_halage", stock: { sable: 2 } }, to: "K16_halage", big: true },
      { label: "« En bas. La ville basse. »", hide: J, monde: "t16a", option: "bas", fx: { flag: "monde:t16_bas", stock: { sable: -2 } }, to: "K16_bas", big: true },
      { label: "« La place, et les rues autour. »", hide: J, monde: "t16a", option: "place", fx: { flag: "monde:t16_place", stock: { sable: -2 } }, to: "K16_place", big: true },
      { label: "« La colline des Jurés. »", hide: J, monde: "t16a", option: "colline", fx: { flag: "monde:t16_colline", stock: { sable: -2 } }, to: "K16_colline", big: true },
      { label: "« La porte d'Occident. Le halage, jusqu'au bord. »", hide: J, monde: "t16a", option: "halage", fx: { flag: "monde:t16_halage", stock: { sable: -2 } }, to: "K16_halage", big: true },
    ] },

  M16b: { act: "V", title: "La margelle, une seconde fois", backName: "la fontaine", charniere: true, aparte: true,
    text: [
      { first: true, text: "Vous revenez à la fontaine par deux côtés, et vous vous y retrouvez. Les gouttes n'ont pas bougé. Aucune ombre n'a tourné. Vous avez marché une heure, à en juger par vos jambes, et le soleil vous dit que vous n'êtes jamais partis." },
      { first: true, if: J, text: "{autre} s'assoit, ôte un sabot, en fait tomber un gravier. {autre:Il} te raconte ce qu'{autre:il} a vu. {autre:Il} raconte mal, par morceaux, en commençant par la fin ; et tu t'aperçois que c'est ainsi qu'{autre:il} écrivait, et que tu avais appris à lire dans ce désordre." },
      { first: true, if: R, text: "Tu t'assois, tu ôtes un sabot, tu en fais tomber un gravier. Tu racontes ce que tu as vu. {autre} raconte à son tour, dans l'ordre, avec les noms. Tu regardes sa bouche. Pendant neuf jours tu as eu ces phrases-là sur du papier, sans la bouche." },
      { first: true, text: "Vous comptez vos grains, sur la pierre. Il en reste. Il reste aussi des chemins où vous n'êtes pas allés, et un escalier, dans une ruelle, où quelqu'un attend sans impatience." },
      { again: true, text: "La fontaine. Des chemins encore, et une ruelle." },
    ],
    choices: [
      { label: "« En bas. La ville basse. »", hide: { any: [R, T_BAS] }, monde: "t16b", option: "bas", fx: { flag: "monde:t16_bas", stock: { sable: 2 } }, to: "K16_bas", big: true },
      { label: "« La place, et les rues autour. »", hide: { any: [R, T_PLACE] }, monde: "t16b", option: "place", fx: { flag: "monde:t16_place", stock: { sable: 2 } }, to: "K16_place", big: true },
      { label: "« La colline des Jurés. »", hide: { any: [R, T_COLLINE] }, monde: "t16b", option: "colline", fx: { flag: "monde:t16_colline", stock: { sable: 2 } }, to: "K16_colline", big: true },
      { label: "« La porte d'Occident. Le halage, jusqu'au bord. »", hide: { any: [R, T_HALAGE] }, monde: "t16b", option: "halage", fx: { flag: "monde:t16_halage", stock: { sable: 2 } }, to: "K16_halage", big: true },
      { label: "« Assez. La ruelle. Il attend. »", hide: R, monde: "t16b", option: "tour", to: "B16", big: true },
      { label: "« En bas. La ville basse. »", hide: { any: [J, T_BAS] }, monde: "t16b", option: "bas", fx: { flag: "monde:t16_bas", stock: { sable: -2 } }, to: "K16_bas", big: true },
      { label: "« La place, et les rues autour. »", hide: { any: [J, T_PLACE] }, monde: "t16b", option: "place", fx: { flag: "monde:t16_place", stock: { sable: -2 } }, to: "K16_place", big: true },
      { label: "« La colline des Jurés. »", hide: { any: [J, T_COLLINE] }, monde: "t16b", option: "colline", fx: { flag: "monde:t16_colline", stock: { sable: -2 } }, to: "K16_colline", big: true },
      { label: "« La porte d'Occident. Le halage, jusqu'au bord. »", hide: { any: [J, T_HALAGE] }, monde: "t16b", option: "halage", fx: { flag: "monde:t16_halage", stock: { sable: -2 } }, to: "K16_halage", big: true },
      { label: "« Assez. La ruelle. Il attend. »", hide: J, monde: "t16b", option: "tour", to: "B16", big: true },
    ] },

  M16c: { act: "V", title: "La margelle, une dernière fois", backName: "la fontaine", charniere: true, aparte: true,
    text: [
      { first: true, text: "La fontaine, encore. Vous commencez à connaître ses gouttes. Il y en a une, à hauteur d'œil, qui a la forme d'une poire ; vous la saluez." },
      { first: true, if: J, text: "{autre} retourne son sachet au-dessus de sa paume. Il en tombe peu. {autre:Il} regarde ce peu, puis toi, puis la ville. « Y a de quoi aller encore quelque part. Y a de quoi en revenir si on réveille presque personne. » {autre:Il} hausse une épaule. « C'est toi qui sais si ça vaut. »" },
      { first: true, if: R, text: "Tu retournes ton sachet au-dessus de ta paume. Il en tombe peu. Il y a de quoi aller encore quelque part, et de quoi en revenir si l'on y réveille presque personne. Tu le dis. C'est {autre} qui sait si cela vaut : c'est sa ville." },
      { again: true, text: "La fontaine. Un chemin encore, et une ruelle." },
    ],
    choices: [
      { label: "« En bas. La ville basse. »", hide: { any: [R, T_BAS] }, monde: "t16c", option: "bas", fx: { flag: "monde:t16_bas", stock: { sable: 1 } }, to: "K16_bas", big: true },
      { label: "« La place, et les rues autour. »", hide: { any: [R, T_PLACE] }, monde: "t16c", option: "place", fx: { flag: "monde:t16_place", stock: { sable: 1 } }, to: "K16_place", big: true },
      { label: "« La colline des Jurés. »", hide: { any: [R, T_COLLINE] }, monde: "t16c", option: "colline", fx: { flag: "monde:t16_colline", stock: { sable: 1 } }, to: "K16_colline", big: true },
      { label: "« La porte d'Occident. Le halage, jusqu'au bord. »", hide: { any: [R, T_HALAGE] }, monde: "t16c", option: "halage", fx: { flag: "monde:t16_halage", stock: { sable: 1 } }, to: "K16_halage", big: true },
      { label: "« Assez. La ruelle. »", hide: R, monde: "t16c", option: "tour", to: "B16", big: true },
      { label: "« En bas. La ville basse. »", hide: { any: [J, T_BAS] }, monde: "t16c", option: "bas", fx: { flag: "monde:t16_bas", stock: { sable: -1 } }, to: "K16_bas", big: true },
      { label: "« La place, et les rues autour. »", hide: { any: [J, T_PLACE] }, monde: "t16c", option: "place", fx: { flag: "monde:t16_place", stock: { sable: -1 } }, to: "K16_place", big: true },
      { label: "« La colline des Jurés. »", hide: { any: [J, T_COLLINE] }, monde: "t16c", option: "colline", fx: { flag: "monde:t16_colline", stock: { sable: -1 } }, to: "K16_colline", big: true },
      { label: "« La porte d'Occident. Le halage, jusqu'au bord. »", hide: { any: [J, T_HALAGE] }, monde: "t16c", option: "halage", fx: { flag: "monde:t16_halage", stock: { sable: -1 } }, to: "K16_halage", big: true },
      { label: "« Assez. La ruelle. »", hide: J, monde: "t16c", option: "tour", to: "B16", big: true },
    ] },

  // ----- the three districts (hubs ; the passages of each side are in c16j.js and c16r.js)
  K16_bas: { act: "V", title: "La ville basse, dans la note", place: "basse", ambiance: "eau", hub: true, backName: "le quai",
    text: [
      { first: true, text: "On y descend par la rue de la Poulie, puis par des degrés. Les maisons se resserrent, le linge traverse la rue d'une fenêtre à l'autre ; une chemise, gonflée d'un vent arrêté, a la forme exacte d'un homme qui lève les bras." },
      { first: true, text: "En bas, le quai. La rivière est une dalle verte, avec ses rides. À la troisième gabare, un mousse a lancé une amarre : elle est en l'air, déroulée, sa boucle ouverte au-dessus d'un pieu. Une marchande de harengs crie, un poisson dans chaque main. Un chien boit, et l'eau lui tient au museau par un fil." },
      { first: true, if: J, text: "Tu as mangé ici pendant trois jours. Tu sais ce que cela fait d'habitude : les roues, les cris, le battoir des lavandières, la cloche du port. Le silence a la forme de tous ces bruits. On les entend manquer, un par un." },
      { first: true, if: R, text: "Tu es chez toi, ici, plus que là-haut : tu as dormi dans cette ville basse, tu y as mangé un hareng de soixante ans. Tu la cherches. Elle avait de la mousse aux pieux, des nids dans les poulies, une croûte grise sur l'eau. On lui a tout ôté. Elle est comme une maison où l'on revient après que quelqu'un a fait le ménage." },
      { again: true, text: "Le quai, l'amarre en l'air, la marchande et ses deux harengs." },
    ],
    choices: [
      { label: "Le quai des Almanachs, l'auvent vert", hide: R, to: "K16j_quai" },
      { label: "À la Patiente", hide: R, to: "K16j_patiente" },
      { label: "La rue des Aiguilliers", hide: R, to: "K16j_aiguilliers" },
      { label: "Le pont des Trois-Chandelles", hide: R, to: "K16j_pont3" },
      { label: "La Tannerie", hide: R, to: "K16j_tannerie" },
      { label: "Le bassin, et la dernière barge", hide: R, to: "K16j_bassin" },
      { label: "La marchande de harengs", hide: J, to: "K16r_hareng" },
      { label: "Le pignon jaune de l'auberge", hide: J, to: "K16r_pignon" },
      { label: "Sous l'arche du pont", hide: J, to: "K16r_arche" },
      { label: "La Tannerie, ses quatre seuils", hide: J, to: "K16r_tannerie" },
      { label: "La maison où sera le Comptoir", hide: J, to: "K16r_comptoir" },
      { label: "La grande grue", hide: J, to: "K16r_tonneau" },
      { label: "La chapelle, et sa noce", hide: J, to: "K16r_noce" },
      { label: "La soupente de la Patiente", hide: J, to: "K16r_soupente" },
      { label: "La fontaine, et le compte des grains", hide: VU_B, to: "M16b", big: true },
      { label: "La fontaine, et le compte des grains", hide: { any: [{ not: VU_B }, VU_C] }, to: "M16c", big: true },
      { label: "La ruelle des Sonneurs, à présent", hide: { not: VU_C }, to: "B16", big: true },
    ] },

  K16_place: { act: "V", title: "Cinq mille, de face", place: "tour", ambiance: "ville", hub: true, backName: "la place",
    text: [
      { first: true, text: "Vous entrez dans la foule. On y entre comme dans un bois : de loin, c'est un mur ; de près, il y a toujours la place d'une épaule. Vous passez sous des bras levés, entre des paniers, contre des ventres. Personne ne se range. On s'excuse quand même, les premières fois." },
      { first: true, text: "Les figures sont à hauteur de la vôtre, et toutes regardent derrière vous, en l'air. Cela finit par peser entre les omoplates. On se retourne : il y a la Tour, son cadran, ses deux aiguilles jointes. On se remet à marcher, et l'on sent cinq mille regards vous passer par-dessus la tête, comme un vent." },
      { first: true, if: J, text: "Des chapeaux pendent au-dessus de vous. Tu en touches un, du doigt : il tourne, lentement, sur lui-même, dans le rond de ton sablier, puis s'arrête quand tu passes. Le sien est un feutre gris, à ruban jaune. Il retombera sur quelqu'un." },
      { first: true, if: R, text: "Tu les prends de face, pour la première fois. Tu passais par-derrière, d'habitude, et par-dessous. Tu reconnais des nuques en découvrant des nez. Il y a un homme dont tu connaissais la couture de culotte, reprise au fil blanc : il a des lunettes, et il rit." },
      { again: true, text: "La place, ses figures levées, ses chapeaux en l'air." },
    ],
    choices: [
      { label: "Les tréteaux, les douze portes", hide: R, to: "K16j_treteaux" },
      { label: "La rue aux Oies", hide: R, to: "K16j_oies" },
      { label: "Le bord de la place, du côté des rues qui descendent", hide: { any: [R, { has: "monde:perrine_sortie" }, { has: "monde:perrine_debout" }] }, to: "K16j_hotte" },
      { label: "L'enfant à la balle rouge", hide: R, to: "K16j_balle" },
      { label: "La baraque de la devineresse", hide: { any: [R, { not: { has: "j:sibylle" } }] }, to: "K16j_sibylle" },
      { label: "Saint-Gnomon-le-Vieux", hide: R, to: "K16j_gnomon" },
      { label: "Le boulanger, et la robe de noces", hide: J, to: "K16r_boulanger" },
      { label: "Derrière la douzième porte", hide: J, to: "K16r_douzieme" },
      { label: "La rue aux Oies, le second coude", hide: J, to: "K16r_oies" },
      { label: "La rue de la Poulie, l'enseigne du Dé", hide: J, to: "K16r_poulie" },
      { label: "À quarante pas de la porte de bronze", hide: J, to: "K16r_chaise" },
      { label: "Trois blouses bleues, près des fardiers", hide: J, to: "K16r_verriers" },
      { label: "La vieille église, l'étoile de cuivre", hide: J, to: "K16r_gnomon" },
      { label: "La fontaine, et le compte des grains", hide: VU_B, to: "M16b", big: true },
      { label: "La fontaine, et le compte des grains", hide: { any: [{ not: VU_B }, VU_C] }, to: "M16c", big: true },
      { label: "La ruelle des Sonneurs, à présent", hide: { not: VU_C }, to: "B16", big: true },
    ] },

  K16_colline: { act: "V", title: "La cour des Jurés, dans la note", place: "guilde", ambiance: "chateau", hub: true, backName: "la cour",
    text: [
      { first: true, text: "La descente des Jurés est une rampe pavée, entre deux murs, où pend du lierre. La poterne est ouverte. Le père Loquet dort sur son tabouret, le menton sur la poitrine, sa baguette en travers des genoux, avec la paix d'un homme que rien n'est venu déranger." },
      { first: true, text: "La cour. Quatre logis à arcades, et au milieu, sur ses trois marches, le cadran solaire des Fondateurs : *POUR MÉMOIRE.* Son style a ramené toute son ombre sous lui. Les Jurés ont défendu, il y a trois cents ans, qu'aucune horloge sonnât ici. C'est donc le seul endroit de Méridane où la note n'ait rien changé : la cour avait déjà ce silence, et elle le porte en personne qui en a l'habitude." },
      { first: true, if: J, text: "Tu as balayé cette cour. Tu y as passé un concours, perdu une nuit, gagné une clef. Tu sais quel pavé branle, à gauche du cadran. Tu marches dessus, exprès. Il branle. C'est la seule chose de la ville qui t'ait répondu." },
      { first: true, if: R, text: "Tu y es entré{e}, chez toi, sous les doigts de douze hommes de cuivre. Ils étaient verts, et l'herbe poussait entre les pavés jusqu'au genou. Les pavés sont nets, à présent, et les douze sont rouges, astiqués, chacun à son poste ; celui qui faisait le tour des arcades a gardé un pied en l'air." },
      { again: true, text: "La cour des Jurés, ses quatre logis, son cadran sans ombre." },
    ],
    choices: [
      { label: "La fenêtre de maître Lunel", hide: R, to: "K16j_lunel" },
      { label: "La salle des séances", hide: R, to: "K16j_seance" },
      { label: "Le cabinet du Grand Maître", hide: R, to: "K16j_cabinet" },
      { label: "L'atelier des apprentis", hide: R, to: "K16j_atelier" },
      { label: "Le logis du sous-maître", hide: R, to: "K16j_logis" },
      { label: "Les douze hommes de cuivre", hide: J, to: "K16r_cuivres" },
      { label: "Le vieillard en bonnet, à sa fenêtre", hide: J, to: "K16r_lunel" },
      { label: "La serrure aux treize faces", hide: J, to: "K16r_serrure" },
      { label: "La rose sous sa cloche", hide: J, to: "K16r_rose" },
      { label: "Le cadran solaire", hide: J, to: "K16r_cadran" },
      { label: "La fontaine, et le compte des grains", hide: VU_B, to: "M16b", big: true },
      { label: "La fontaine, et le compte des grains", hide: { any: [{ not: VU_B }, VU_C] }, to: "M16c", big: true },
      { label: "La ruelle des Sonneurs, à présent", hide: { not: VU_C }, to: "B16", big: true },
    ] },

  // ----- the fourth way : the gate of the West, the field of carts, the towpath and the edge
  K16_halage: { act: "V", title: "Le pré des charrettes", place: "foire", ambiance: "champs", hub: true, backName: "le pré de la Foire",
    text: [
      { first: true, text: "La porte d'Occident est ouverte à deux battants, comme elle l'est une fois l'an. Deux hallebardiers y regardent en l'air, par-dessus le mur, le peu de Tour qu'on voit de leur guérite. Vous passez entre eux. La chaussée descend, blanche, vide : tout ce qui devait monter est monté." },
      { first: true, text: "Le pré est en bas, avec ses charrettes rangées par villages, les brancards levés, comme une forêt de mâts dans un port à sec. Les bêtes sont à l'attache, le nez dans l'avoine. Les marmites attendent sur leurs trois pierres. On a laissé, pour garder le tout, les très vieux, les nourrissons et les chiens ; les très vieux regardent la Tour, les nourrissons dorment, et les chiens ont tous la gueule tournée du même côté." },
      { first: true, if: J, text: "Tu connais ce pré rang par rang. Tu y es descendu{e} à l'aube, entre les familles qui s'habillaient derrière les roues. Elles sont là-haut. Elles ont laissé leurs miroirs pendus aux ridelles, et dans chaque miroir il y a un morceau de ciel de la grandeur de la main." },
      { first: true, if: R, text: "Chez toi, un pont de planches passe sur ce pré, à hauteur de tête, avec des manteaux blancs dessus, et l'herbe est pleine de lampes à ruban. Ici, l'herbe est de l'herbe. Tu marches dedans. C'est la première fois que tu mets le pied dans ce champ sans payer quelqu'un." },
      { first: true, text: "Derrière le bassin, le chemin du canal s'en va tout droit vers le couchant, entre deux rangs de peupliers dont les feuilles montrent leur côté pâle." },
      { again: true, text: "Le pré, ses brancards levés, ses chiens tournés vers la ville. Derrière le bassin, les peupliers." },
    ],
    choices: [
      { label: "Le neuvième rang", hide: R, to: "K16j_rang" },
      { label: "Le chien, au bout de sa chaîne", hide: J, to: "K16r_chien" },
      { label: "Le chemin des peupliers", to: "K16_septieme", big: true },
      { label: "La fontaine, et le compte des grains", hide: VU_B, to: "M16b", big: true },
      { label: "La fontaine, et le compte des grains", hide: { any: [{ not: VU_B }, VU_C] }, to: "M16c", big: true },
      { label: "La ruelle des Sonneurs, à présent", hide: { not: VU_C }, to: "B16", big: true },
    ] },

  K16j_rang: { act: "V", title: "Entre Vauxelles et Saint-Gnomon-des-Vignes", place: "foire", ambiance: "champs",
    text: [
      "Le neuvième rang. La voiture de Vauxelles, jaune, avec son essieu de rechange. Celle de Saint-Gnomon-des-Vignes, verte, où une grand-mère en coiffe tient un nourrisson sur ses genoux et lui montre la Tour du doigt.",
      { if: SORTIS, text: "Entre les deux, le rectangle de chaume foulé. Les brins commencent à se relever. Il y a une noix, tombée d'une anse, restée là. C'est tout ce qui reste des Trois-Noyers dans ce pré, et c'est ce que tu y as fait de mieux." },
      { if: { all: [{ not: SORTIS }, ATTELE] }, text: "Entre les deux, la place est vide, et l'on y lit un départ pressé. Huit cruches sont couchées dans le chaume, débouchées. L'huile a fait une flaque blonde, bombée, où une guêpe a posé les pattes de devant. Il a tout jeté pour que la Grise trotte. Neuf lieues de route, une année d'olives : cela pèse moins qu'une sœur." },
      { if: { all: [{ not: SORTIS }, { not: ATTELE }] }, text: "Entre les deux, la charrette bleue, les brancards au ciel. La Grise est à son piquet, le nez dans le sac. Les huit cruches sont sur le derrière de la caisse, avec leurs trois noix sous l'anse. Le morceau de miroir pend à la ridelle. Il a gardé un peu de savon à barbe dans le coin." },
      { if: { all: [{ not: SORTIS }, { not: ATTELE }] }, text: "Dans la caisse, la paille a un creux de la taille d'une enfant. Tu y mets la main. Il est tiède. Tu regardes par terre : dans la poussière du rang, des pas de sabots très petits, très écartés, s'en vont vers le bassin. Elle courait." },
      "La grand-mère de Saint-Gnomon-des-Vignes a quatre-vingts ans, à peu près. Elle voit mal de loin. Elle montre la Tour à l'enfant, pour qu'il puisse dire un jour qu'il y était ; et elle la montre un peu trop à gauche.",
    ],
    choices: [{ back: "K16_halage" }] },

  K16r_chien: { act: "V", title: "Tambour", place: "foire", ambiance: "champs",
    text: [
      "Il est au dernier rang, attaché à une roue. Un chien de berger, jaune, la queue en balai, debout au bout de sa chaîne tendue, les deux pattes de devant en l'air. Il aboie vers la ville. On voit l'aboi : la gueule ouverte, les babines relevées, la langue raide.",
      "Tu le connais. Chez toi, il est gris, et il a un ruban au collier. Les Veilleurs lui en ont mis un, la troisième année : ils en mettent à tout ce qu'ils trouvent. Le ruban est blanc, sans écriture. Ils ont un registre pour les gens, et ce chien-là est au bas d'une page, dans la marge : *un chien, jaune, pré de la Foire, dernier rang.*",
      "Ils ont promené leurs lampes soixante ans entre ces roues, en appelant des noms. Il les a regardés passer, les pattes en l'air. Ils ont appelé des laboureurs, des nourrices, des mitrons. Lui, ils l'ont appelé *le chien.*",
      "Il y a une écuelle de bois, près de la roue. On a peint quelque chose sur le bord, en rouge, d'une main d'enfant. Tu t'accroupis. Tu lis les imprimés, à présent, et les lettres peintes quand elles sont grosses. *TAMBOUR.*",
      "Tu es, de deux mondes, la seule personne qui sache comment il s'appelle. Tu le lui dis, pour voir. Il garde ses pattes en l'air. Mais c'est un nom qui lui va : il a la figure d'un chien qui fait du bruit par devoir.",
    ],
    choices: [
      { label: "Écrire son nom sur le moyeu, au charbon, pour les lampes", hide: { has: "r:chien_nomme" }, fx: { flag: "r:chien_nomme", ep: ["perso", 300] }, back: "K16_halage" },
      { back: "K16_halage" },
    ] },

  K16_septieme: { act: "V", title: "L'arbre grêle", place: "foire", ambiance: "eau", hub: true, backName: "le septième peuplier", fx: { flag: "monde:vu_bord" },
    text: [
      { first: true, text: "Vous prenez le chemin du canal. Il est droit comme une règle, entre l'eau et les blés. Une gabare est arrêtée au milieu du bief, avec sa corde tendue jusqu'à deux chevaux, et le haleur, penché, un pied en avant, pèse sur l'air comme sur une porte." },
      { first: true, text: "Vous comptez les arbres, à voix haute, sans vous être donné le mot. Un. Deux. Les feuilles sont retournées du côté pâle, et elles y restent : un coup de vent passait. Cinq. Six. Le septième est plus grêle que les autres, un peu penché, avec une écorce qui pèle." },
      { first: true, if: J, text: "Tu l'as vu de trois façons. D'un pré, à l'aube. D'une Cage, à travers des lames. D'un Cahier, où l'on t'avait écrit qu'un cercle finit là. C'est un arbre. Tu poses la main dessus : il est tiède du côté du soleil." },
      { first: true, if: R, text: "Tu l'as passé il y a dix jours, dans l'autre sens. Il était mort depuis longtemps, sec, blanc, avec une corde nouée au tronc et un chiffon rouge. Tu avais enjambé la corde. Il a ses feuilles. Tu poses la main dessus : il est tiède du côté du soleil." },
      { first: true, text: "Rien ne marque le bord. Le chemin continue, de la même poussière. Les blés continuent. Passé l'arbre, il y a un ponceau, puis un huitième peuplier, puis la plaine, avec des villages. Tout cela se tient tranquille, comme le reste ; mais c'est une autre tranquillité, et il faut un moment pour voir en quoi. De ce côté-ci, les blés sont droits. De l'autre, ils penchent tous ensemble, couchés par une main." },
      { again: true, text: "Le septième peuplier, grêle, tiède d'un côté. Passé le tronc, les blés penchent." },
    ],
    choices: [
      { label: "La charrette bleue, à trente pas en deçà", hide: { any: [R, { not: G_PRIS }, G_SORTI] }, to: "K16j_girard" },
      { label: "Le garçon debout sur son siège, le fouet en l'air", hide: { any: [J, { not: G_PRIS }, G_SORTI] }, to: "K16r_girard" },
      { label: "Le petit pont, passé l'arbre", hide: { any: [R, SORTIS] }, to: "K16j_line" },
      { label: "L'enfant, passé l'arbre", hide: { any: [J, SORTIS] }, to: "K16r_line" },
      { label: "Le huitième peuplier", hide: { any: [R, { not: P_DEHORS }] }, to: "K16j_huitieme" },
      { label: "Passer la main de l'autre côté", hide: { any: [R, { has: "j:bord_dit" }, { has: "j:bord_tu" }] }, to: "K16_bord" },
      { label: "Passer la main de l'autre côté", hide: { any: [J, { has: "r:bord_dit" }, { has: "r:bord_tu" }] }, to: "K16_bord" },
      { back: "K16_halage" },
    ] },

  K16j_girard: { act: "V", title: "Trente pas", place: "foire", ambiance: "eau",
    text: [
      "La charrette bleue est en travers du chemin, une roue dans l'herbe du talus : il a tourné court. La Grise a les deux pieds de devant en l'air, au départ du trot, et sa crinière tient droite derrière elle. Girard est debout sur le siège, les guides dans la main gauche, le fouet levé. Il a la bouche ouverte. Tu passes devant : *...ue donc, la Grise !*",
      "Tu comptes, du moyeu jusqu'à l'arbre grêle. Trente pas. Tu les refais à rebours, par conscience. Trente. On te l'avait écrit dans un Cahier, à soixante ans d'ici, et l'on ne s'était pas trompé d'une semelle.",
      { if: { seen: "K13j_girard_refus" }, text: "Il te l'avait dit, ce matin, le dos tourné, en grattant un sabot : *si tu as vu clair, eh bien j'aurai fait trente pas.* Il les a faits, au compte juste, pour un homme qui est debout sur une borne, là-haut, une main sur l'épaule." },
      { if: { not: { seen: "K13j_girard_refus" } }, text: "Il a posé la petite au pont. Il a entendu onze, et rien après. Il a attendu le temps de deux Ave, à ronger son poing, et il a tourné la jument. Tu aurais fait comme lui." },
      "Dans la caisse, la paille a gardé le creux d'une enfant et le carré d'une boîte. Il a jeté l'huile. Il a encore une noix, oubliée, qui a roulé contre la ridelle.",
      "Trente pas. Pour un garçon de quatorze ans qui court, c'est un Pater, à peu près, et il en reste. Tu regardes ton mouchoir.",
    ],
    choices: [
      { label: "Poser un grain dans sa main gauche", if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "monde:girard_sorti", ep: ["histoire", 1500] }, to: "K16j_girard_eveil", big: true },
      { label: "Deux grains : un dans sa main, un sur le chanfrein de la Grise", if: { stock: "sable", min: 2 }, why: "Il t'en faudrait deux.", fx: { stock: { sable: -2 }, flag: ["monde:girard_sorti", "monde:grise_sortie"], ep: ["histoire", 1800] }, to: "K16j_girard_eveil", big: true },
      { back: "K16_septieme" },
    ] },

  K16j_girard_eveil: { act: "V", title: "Hue", place: "foire", ambiance: "eau",
    text: [
      "Tu montes sur le marchepied. Tu glisses le grain entre le cuir des guides et sa paume, et tu refermes ta main sur la sienne.",
      "« ...ue ! Hue donc ! » Le fouet claque dans un air qui avale le bruit. Il manque tomber en avant. Il te voit.",
      "« Toi ! » Sa voix casse sur le mot. Il regarde les peupliers, où pas une feuille ne tourne, le haleur penché, la gabare. Il regarde la ville, là-bas, sur sa colline, avec sa Tour. « C'est fait. » Il le dit sans question. « Onze. On a attendu l'autre, au pont. La petite a pleuré. Elle pleure jamais. »",
      "« Le père ? » Tu lui dis où est le père : debout, au bord, sur sa borne, comme il l'avait promis, une main à l'épaule où était la petite. « J'y vais. — Il y a une lieue, Girard. Tu as devant toi le temps d'un Pater, et il est commencé. »",
      "Il fait le compte. C'est un charretier : il sait ce que c'est qu'une lieue. Sa figure se défait, se refait, en homme. « Alors quoi ? — Alors trente pas, derrière toi. L'arbre grêle. Ton père t'a confié une sœur ; il te la laisse sur les bras pour longtemps. Finis la commission. »",
      { after: "monde:grise_sortie", text: "Tu as déjà sauté à terre. Tu poses le second grain sur le chanfrein de la jument, entre les yeux, où elle a une étoile. Ses deux pieds retombent. Elle souffle. Elle te regarde de côté, avec le blanc de l'œil, comme elle regarde tout ce qui arrive sans avoine." },
      { after: "monde:grise_sortie", text: "« Tourne-la ! » Il scie des deux mains. La Grise prend le talus, la charrette penche sur une roue, se redresse ; et il la lance, debout, le fouet haut, en criant son nom. Elle n'a jamais galopé de sa vie. Elle galope. Trente pas : tu les comptes aux fers." },
      { after: "monde:grise_sortie", text: "Elle passe l'arbre. Et de l'autre côté elle s'arrête, d'un seul coup, les quatre pieds en l'air, comme un cheval d'enseigne ; la charrette derrière elle, une roue levée ; et Girard debout sur le siège, le fouet en l'air, la bouche ouverte. C'est la pose où tu l'as trouvé. Elle est tournée du bon côté." },
      { before: "monde:grise_sortie", text: "Il regarde la Grise, en l'air sur ses jarrets. Il lui pose la main sur la croupe. « Je reviendrai te chercher, ma vieille. » Il le croit. Il saute du siège, et il court." },
      { before: "monde:grise_sortie", text: "Il court mal, en sabots, les coudes écartés, comme courent les garçons qui ont toujours eu une jument pour cela. Tu comptes. Vingt. Vingt-cinq. À l'arbre, il tourne la tête vers toi. Tu cries : « Passe ! »" },
      { before: "monde:grise_sortie", text: "Il passe. Et de l'autre côté il s'arrête, d'un seul coup, en pleine foulée, un sabot en l'air, les coudes écartés." },
      "Le cœur te manque. Puis tu comprends. Rien ne l'a pris. C'est toi qui te tiens dans une seule seconde, et lui vient d'en sortir : il court déjà, de son côté, dans la suivante, vers un pont où une petite s'est levée. Tu verras d'ici la fin de sa course quand l'heure repartira. Tu lui vois la nuque. Elle a l'air pressée.",
      "On t'avait écrit : *pris à trente pas du bord, le fouet en l'air, soixante ans.* Tu regardes le chemin, entre l'arbre et toi. Il y a une place vide, et de la poussière qui retombe dans le rond de ton sablier.",
    ],
    choices: [{ back: "K16_septieme" }] },

  K16r_girard: { act: "V", title: "Celui qui revenait", place: "foire", ambiance: "eau",
    text: [
      "La charrette bleue est en travers du chemin, une roue dans l'herbe. Le garçon est debout sur le siège, le fouet levé, la bouche ouverte. La jument a les deux pieds de devant en l'air.",
      "Tu l'as vu, il y a dix jours, à cette place. Il était gris. La jument avait de la mousse aux fers. Sous le siège, il y avait une boîte de fer à vis bleues, avec soixante encoches sur le bord, et tu avais pris la charrette pour une voiture qui arrivait.",
      { if: { has: "r:girard_eveille" }, text: "Tu lui avais donné une pincée. Il t'avait demandé si tu venais du pont, si tu avais vu une petite de neuf ans, avec une boîte. Tu avais dit oui. Tu avais menti de soixante ans, et il avait dit merci." },
      { if: { has: "r:boite_line" }, text: "*Je l'ai éveillé une fois. J'avais vingt ans, j'avais mis deux ans à gagner le sable.* Deux ans de sable, pour s'entendre demander de ses propres nouvelles par un frère qui vous dit madame. *Il a dit : merci, madame.*" },
      "Tu comptes, du moyeu à l'arbre. Trente pas. La chance lui a manqué de peu : à trente pas près, il était de ceux qui vieillissent.",
      "Sous le siège, la place de la boîte est vide. La boîte est au pont, sur les genoux de quelqu'un.",
    ],
    choices: [
      { label: "Poser un grain dans sa main, et lui parler de sa sœur", if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "monde:girard_sorti", ep: ["histoire", 1500] }, to: "K16r_girard_eveil", big: true },
      { back: "K16_septieme" },
    ] },

  K16r_girard_eveil: { act: "V", title: "De la part de sa sœur", place: "foire", ambiance: "eau",
    text: [
      "« ...ue ! Hue donc ! » Le fouet claque dans rien. Il manque tomber. Il te voit, sur son marchepied : des sabots, du charbon, un sablier de corne.",
      "« Lâche-moi ! J'ai mon père là-haut ! » Tu tiens bon. Tu as tenu des mains plus fortes. « Ton père est au bord, debout. Il tient sa promesse. Tiens la tienne. — Qu'est-ce que t'en sais ? T'es qui ? »",
      "Tu cherches. Il te faut une phrase qu'il croie, et tu as le temps d'un Pater. Tu prends celle que tu connais le mieux : tu l'as entendue ce matin, d'une chaise à sangles, à propos d'un sable qui manquait.",
      "« Je viens de la part de ta sœur. Elle dit que si tu fais un pas de plus vers cette ville, elle te le reprochera soixante ans. Je la connais. Elle le fera. Tous les jours. Sans élever la voix. »",
      "Il reste la bouche ouverte. C'est elle. Ce sont ses mots, ou leur façon ; il a quatorze ans, et il vit depuis neuf ans avec une petite qui range tout dans une boîte et ne lâche rien. « Elle a dit ça ? — Elle le dira. Cours. L'arbre grêle. Trente pas. »",
      "Il regarde la jument, en l'air sur ses jarrets. Il lui touche la croupe. Il saute. Il court mal, en sabots, les coudes écartés. À l'arbre, il se retourne à demi, pour voir si tu es toujours là ; et il passe.",
      "De l'autre côté, il s'arrête d'un seul coup, en pleine foulée, un sabot en l'air. Tu as peur une seconde. Puis tu comprends : rien ne l'a pris. C'est toi qui te tiens dans un seul instant, et lui vient d'en sortir. Il court déjà, de son côté, dans le suivant.",
      "Tu descends du marchepied. Chez toi, il y a une vieille qui est revenue ici soixante fois s'asseoir dans cette voiture, à côté d'un garçon au fouet levé, et qui a fait une encoche chaque fois, pour qu'il y ait quelqu'un qui compte. Tu viens de lui ôter soixante encoches. Tu lui en devais bien autant.",
    ],
    choices: [{ back: "K16_septieme" }] },

  K16j_line: { act: "V", title: "La seconde d'après", place: "foire", ambiance: "eau",
    text: [
      { if: { any: [ATTELE, { has: "j:line_consigne" }] }, text: "Elle est sur le parapet du ponceau, à cinquante pas de l'arbre. Elle est assise, les jambes pendantes, sa boîte de fer sur les genoux, les deux mains dessus." },
      { if: { all: [{ not: ATTELE }, { not: { has: "j:line_consigne" } }] }, text: "Elle est sur le chemin, à cinquante pas de l'arbre, près du ponceau. Elle marche. Elle a un pied en avant, sa boîte de fer sous le bras, et l'autre main tendue vers le tronc du huitième peuplier, pour le toucher en le comptant." },
      { if: { all: [{ not: ATTELE }, { has: "monde:line_court" }] }, text: "Elle a couru une lieue. Ses nattes sont défaites, et elle a perdu un sabot : le pied nu pend, gris de poussière, à côté de l'autre." },
      { if: G_SORTI, text: "Elle s'est levée à demi. Elle a vu quelqu'un courir vers elle, les coudes écartés, et elle a déjà la bouche ouverte pour lui dire qu'il a mis le temps." },
      { if: { all: [G_PRIS, { not: G_SORTI }] }, text: "Elle regarde le chemin par où son frère est reparti. On lui a dit de rester où elle est. Elle y reste. Elle a les lèvres serrées d'une personne qui compte, et qui compte depuis trop longtemps." },
      { if: { all: [ATTELE, JURE] }, text: "Girard est debout près d'elle, la bride de la Grise au poing, tourné vers la ville. Il a juré, et il tient. Cela lui coûte : il a l'autre poing fermé, contre sa cuisse, et la jument tire la tête de côté, loin de ce poing-là." },
      "Elle a neuf ans. Elle est à cinquante pas de toi, et dans la seconde d'après. Pour elle, tu tiens tout entier entre deux battements de cils : elle regarde par ici, elle regarde l'arbre, et tu es devant l'arbre.",
      { if: { has: "j:line_promesse" }, text: "Tu lui as dit : *nous nous reverrons, tu seras vieille.* Tu lui as dit : *toi, tu me reconnaîtras tout de suite, à la porte.* Elle a soixante ans devant elle pour faire quelque chose en t'attendant. Elle a commencé : elle attend." },
      { if: { item: "vis_line" }, text: "Tu as dans ta poche la plus petite vis d'une montre morte. Elle a la montre, sous sa robe, au bout d'un lacet. Vous êtes, à cinquante pas, les deux moitiés d'un balancier." },
      "Ta voix s'arrêterait à l'arbre. Mais la poussière du chemin, passé le tronc, est de son côté. Elle y viendra. Elle viendra jusqu'à l'arbre, un jour, regarder où le monde finit : c'est une enfant qui va voir.",
    ],
    choices: [
      { label: "Allonger le bras, et tracer un cadran dans sa poussière, les deux aiguilles sur midi", hide: { has: "monde:cadran_poussiere" }, fx: { flag: "monde:cadran_poussiere", ep: ["perso", 800] }, to: "K16j_line_cadran" },
      { back: "K16_septieme" },
    ] },

  K16j_line_cadran: { act: "V", title: "Midi, dans la poussière", place: "foire", ambiance: "eau",
    text: [
      "Tu t'agenouilles au pied de l'arbre. Tu passes le bras. Le vent te prend la main, d'un seul côté, sans remuer : un vent qui appuie.",
      "Tu traces un rond dans la poussière, du doigt, large comme une assiette. Tu y mets douze traits. Elle sait lire un cadran : on le lui a appris. Tu mets la petite aiguille sur le douze, et la grande par-dessus.",
      "Tu regardes ton dessin. Il dit midi. Il dit : *l'autre coup viendra.* Tu ignores encore de quel côté il viendra, et dans combien de temps pour elle. Tu le dessines. Il y a des promesses qu'on fait d'abord, et qu'on apprend ensuite à tenir.",
      "Sous le cadran, tu ajoutes une chose, plus petite : une roue à dents de scie, et une verge en travers. Tu la lui as vue dessiner dans la paille, avec une brindille. Elle reconnaîtra la main.",
      "Tu retires ton bras. Le dessin reste de l'autre côté, dans la poussière d'après, où le premier vent ne l'a pas encore trouvé.",
    ],
    choices: [{ back: "K16_septieme" }] },

  K16r_line: { act: "V", title: "Neuf ans", place: "foire", ambiance: "eau",
    text: [
      "Passé l'arbre, à cinquante pas, près du ponceau, il y a une enfant. Elle a une boîte de fer, deux nattes, et des sourcils d'un seul trait.",
      "Tu la reconnais aux sourcils. Tu la reconnais surtout à la façon de tenir la boîte : à plat, les deux mains dessus, comme on tient ce qu'on ne prêtera pas.",
      "Tu as rôdé six ans autour de son village. Tu l'as vue vieille, par sa fenêtre, penchée sur un établi, ses lunettes perdues sur son front. Tu lui as volé trois mesures de sable par un soupirail, en janvier, et tu les as vendues quarante écus. Tu le lui as dit ce matin, à quarante pas d'une porte, pendant que deux noirs tournaient le dos. Elle a répondu ce qu'elle a répondu.",
      "Elle a neuf ans. Tu lui dois déjà tout, et elle l'ignore : c'est un compte qu'on tient à l'envers, d'ici. Le sable et le soupirail viendront plus tard. Elle a une boîte, où elle range ce qui n'a pas encore de place.",
      { if: G_SORTI, text: "Elle s'est levée à demi. Quelqu'un court vers elle, les coudes écartés." },
      "Tu regardes la poussière du chemin, passé le tronc. Elle est de son côté. Ce qu'on y pose est dehors, dans le temps qui marche, et le gris y tient : tu en as vendu assez, à dix lieues d'ici, pour le savoir.",
    ],
    choices: [
      { label: "Poser une pincée de l'autre côté de l'arbre, à compte", hide: { has: "r:acompte_line" }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "r:acompte_line", ep: ["perso", 800] }, to: "K16r_line_acompte" },
      { back: "K16_septieme" },
    ] },

  K16r_line_acompte: { act: "V", title: "À compte", place: "foire", ambiance: "eau",
    text: [
      "Tu t'agenouilles. Tu passes la main. Le vent te la prend, d'un seul côté. Tu ouvres les doigts au ras du sol, contre une racine, où la poussière fait un creux.",
      "Les grains y tombent. Ils luisent, gris, sur le blond du chemin. De ce côté-ci du tronc, tu n'en as jamais vu briller au soleil : chez toi, on les glane dans l'ombre des morts.",
      "Elle viendra jusqu'à l'arbre. C'est une enfant qui va voir. Elle trouvera cela contre la racine : une pincée d'une chose qui attend encore son nom dans ce pays. Elle la mettra dans la boîte. Elle la regardera, le soir, pendant des années, en se demandant ce que c'est, et d'où cela tombe.",
      "Tu viens peut-être de lui donner son métier. Tu sais seulement que tu lui devais trois mesures, que tu en as rendu une pincée, et que c'est la première dette que tu commences à payer avant de l'avoir faite.",
    ],
    choices: [{ back: "K16_septieme" }] },

  K16j_huitieme: { act: "V", title: "Au huitième, comme convenu", place: "foire", ambiance: "eau",
    text: [
      "Au huitième peuplier, il y a une hotte.",
      "Elle est dessous. Elle s'est retournée au huitième, comme tu l'avais dit : au septième, elle a serré les dents et regardé devant elle. Elle a la main en visière, un pied sur le talus. Elle est partie à huit heures, pour avoir de la marge. Elle en a eu trois heures, qu'elle a passées assise sur sa hotte, à regarder une ville où elle avait encore ses almanachs à vendre.",
      "Elle a entendu onze. Elle s'est levée. Elle regarde, de cet œil qui pèse un chaland à vingt pas, la ville qu'elle a quittée sur ta parole ; et elle est en train de comprendre que tu avais dit vrai, et ce que cela lui coûte.",
      "Tu lèves la main. Elle la lèvera, dans la seconde d'après, vers un chemin où il n'y aura plus que de la poussière qui retombe. Elle croira avoir rêvé un geste. Les colporteuses croient peu aux rêves ; celle-ci gardera le sien.",
      "Elle a sur le dos soixante almanachs de l'an 541, qui annoncent pour ce midi un temps sec et des affaires ordinaires. Ce sont les seuls exemplaires du royaume qui soient hors des murs. Elle les vendra bien : on paie cher, plus tard, le dernier papier d'une ville.",
    ],
    choices: [{ label: "Baisser la main", fx: { flag: "j:vu_perrine_dehors", ep: ["perso", 600] }, back: "K16_septieme" }] },

  K16_bord: { act: "V", title: "Du vent sur les mains", place: "foire", ambiance: "eau",
    text: [
      "Tu avances la main, à hauteur de poitrine, passé le tronc. Elle passe. Tu sens du vent : un vent d'ouest, tiède, qui sent le blé et l'eau de canal, et qui te pousse la paume d'un seul côté, sans bouger.",
      "Tu avances l'autre. Tu as les deux bras dehors, jusqu'au coude. Il y a une couture, au pli du bras, où l'air change. Dedans, il est comme de l'eau dormante. Dehors, il est pressé.",
      { if: J, text: "{autre} a fait comme toi. Vous êtes côte à côte, quatre mains dans un vent que le reste du corps ignore. {autre:Il} les regarde. {autre:Il} se tait. Tu sais ce qu'{autre:il} pense, pour le penser aussi." },
      { if: R, text: "{autre} a fait comme toi. Vous êtes côte à côte, quatre mains dans un vent que le reste du corps ignore. {autre:Il} regarde la plaine, les villages, la route. {autre:Il} se tait. Tu sais ce qu'{autre:il} pense, pour le penser aussi." },
      "Il suffirait de deux pas. Il y a une route. Il y a des villages où l'on dîne. La cloche resterait derrière, avec sa note, sa Tour, son vieillard au levier et ses quarante mille ; et elle s'arrangerait de vous comme elle pourrait.",
      { if: J, text: "Tu as marché neuf jours vers cette ville. Tu en connais les noms. De l'autre côté, il y a une année 541 qui continue, où tu saurais vivre : tu sais limer un pivot, et l'on a toujours besoin de quelqu'un qui sache." },
      { if: R, text: "Tu as passé six ans à cela : entrer, prendre, sortir. Tu es du métier. Jamais une sortie n'a été aussi facile, et jamais tu n'as eu les mains aussi vides en sortant." },
    ],
    choices: [
      { label: "Le dire tout haut : « On pourrait. »", hide: R, fx: { flag: "j:bord_dit", ep: ["perso", 500] }, to: "K16j_bord_fin" },
      { label: "Retirer tes mains, sans un mot", hide: R, fx: { flag: "j:bord_tu", ep: ["perso", 500] }, to: "K16j_bord_fin" },
      { label: "Le dire tout haut : « On pourrait. »", hide: J, fx: { flag: "r:bord_dit", ep: ["perso", 500] }, to: "K16r_bord_fin" },
      { label: "Retirer tes mains, sans un mot", hide: J, fx: { flag: "r:bord_tu", ep: ["perso", 500] }, to: "K16r_bord_fin" },
    ] },

  K16j_bord_fin: { act: "V", title: "Quatre mains", place: "foire", ambiance: "eau",
    text: [
      { after: "j:bord_dit", text: "« On pourrait. » Tu l'as dit bas. {autre} garde les yeux sur la route." },
      { after: "j:bord_dit", text: "« Je sais. C'est mon métier, sortir. » {autre:Il} remue les doigts dans le vent. « J'ai toujours laissé le reste sans regret. C'étaient des gens de dos. » {autre:Il} tourne la tête vers la ville. « Là, je les ai vus de face. C'est une sottise que j'ai faite. On sort moins bien, après. »" },
      { after: "j:bord_dit", text: "Tu es content{e} de l'avoir dit. Une chose pareille, gardée, aurait marché entre vous jusqu'au levier. Dite, elle reste au pied d'un arbre." },
      { after: "j:bord_tu", text: "Tu retires tes mains. Elles reviennent dans l'air dormant, tièdes d'un côté. Tu les mets dans tes poches." },
      { after: "j:bord_tu", text: "{autre} retire les siennes un instant après. {autre:Il} te regarde, de côté, et {autre:il} a un demi-sourire qui te dit que ton silence a été entendu. « Moi aussi », dit-{autre:il}. C'est tout." },
      { if: { not: SORTIS }, text: "À cinquante pas, dehors, il y a une enfant de neuf ans qui attend une cloche. C'est à elle que vous la devez d'abord." },
      "Vous tournez le dos à l'arbre. La ville est devant vous, sur sa colline, avec sa Tour comme un doigt. Elle est loin. Elle a l'air d'attendre, elle aussi, et de savoir qui.",
    ],
    choices: [{ back: "K16_septieme" }] },

  K16r_bord_fin: { act: "V", title: "Quatre mains", place: "foire", ambiance: "eau",
    text: [
      { after: "r:bord_dit", text: "« On pourrait. » Tu l'as dit comme on dit un prix. {autre} garde les yeux sur le ponceau." },
      { after: "r:bord_dit", text: "« Oui. » {autre:Il} a mis du temps. « J'y ai pensé du haut de la Cage. On voit la plaine, de là-haut, avec des villages. J'ai pensé : il y a des gens qui dînent. » {autre:Il} retire une main, la regarde. « Et puis j'ai compté ceux qui ne dîneront pas. Je compte trop. C'est le métier. »" },
      { after: "r:bord_dit", text: "Tu hoches la tête. Tu avais besoin de l'entendre refuser. Seul{e}, tu serais déjà à dix pas dehors, à te chercher une excuse ; et tu les trouves vite." },
      { after: "r:bord_tu", text: "Tu retires tes mains. C'est la première fois que tu les retires d'un endroit où il y avait à prendre. Elles reviennent dans l'air dormant, et tu les essuies à ta chemise, comme après une chose qu'on a failli faire." },
      { after: "r:bord_tu", text: "{autre} retire les siennes un instant après. {autre:Il} te regarde, et tu vois qu'{autre:il} a fait le même chemin que toi, dans sa tête, jusqu'au premier village, et qu'{autre:il} en revient. « On rentre », dit-{autre:il}. C'est tout." },
      "Chez toi, cet arbre est mort, avec une corde et un chiffon rouge. On y vient de dix lieues regarder où le monde finit. Tu sais à présent ce qu'on voit de l'autre côté de la corde : des gens qui sont restés.",
      "Vous tournez le dos à l'arbre. La ville est devant vous, sur sa colline, avec sa Tour comme un doigt.",
    ],
    choices: [{ back: "K16_septieme" }] },

  // ----- the low door : end of the chapter
  B16: { act: "V", title: "La porte de fer", backName: "la ruelle", charniere: true, aparte: true,
    text: [
      { first: true, text: "La ruelle des Sonneurs, l'ombre de la Tour, la borne. Le vantail de fer est entrebâillé d'une main, comme un vieil homme l'a laissé à onze heures, en disant qu'il allait se promener." },
      { first: true, text: "Vous vous arrêtez devant. Vous avez vu ce qu'il y avait à voir, ou ce que vos grains permettaient d'en voir. Chacun de vous porte à présent des figures. Elles ne pèsent rien, et l'on marche pourtant d'un autre pas." },
      { first: true, if: J, text: "{autre} regarde l'escalier qui descend, par la fente. « J'ai monté ça en courant, tout à l'heure. Je pensais qu'à toi, là-haut, qui tournais gris. Je regardais rien. » {autre:Il} renifle. « Là, je vais regarder. »" },
      { first: true, if: J, text: "Tu penses à ce qu'il y a en bas. Un levier. Un vieillard, la main dessus, qui a tenu onze coups avec ses bras. Deux hommes qui sont le même, l'un endormi sur un sourire, l'autre assis à côté avec vingt grains et sa canne. Et une barre de bronze qui attend deux mains, dont l'une est la tienne, restée là-haut, sur une corde." },
      { first: true, if: R, text: "Tu regardes l'escalier qui descend, par la fente. Tu l'as monté en courant, tout à l'heure, en ne pensant qu'à {autre}, là-haut, qui tournait gris. Tu n'as rien regardé. Tu vas regarder." },
      { first: true, if: R, text: "Tu penses à ce qu'il y a en bas. Un levier, que ta main connaît. Un vieux, pris dessus. Deux hommes qui sont le même. Une barre qui flottait, quand tu l'as quittée, sur un puits qui débordait. Et l'autre bout de l'affaire, qui est une corde, à trois cent soixante marches, et qui attend la main de {autre}." },
      { first: true, text: "« Il faudra se séparer encore, dis-tu, ou dit {autre} : vous avez la même idée en même temps, et cela vous arrive de plus en plus. Un en haut, un en bas. — Après. On descend d'abord. On l'écoute. On réveille le vieux. » Un silence. « Après, on voit. »" },
      { again: true, text: "La porte de fer, entrebâillée. L'escalier, derrière." },
    ],
    choices: [
      { label: "Pousser le vantail", to: "K17_descente", big: true },
    ] },
});

var extras = {
  items: {
    revocation_reine: { name: "Révocation de la Reine", desc: "Un pli à la cire rouge, daté du vingt juin 541. La Reine y retire la commission du douze. La cire est écrasée à gauche.", flat: true },
    jonc_reine: { name: "Jonc d'argent de la Reine", desc: "Une bague de rien, noircie, celle de ses quinze ans. Elle est dessinée au registre des hardes, à la page de son entrée." },
    chapeau_coudrier: { name: "Chapeau du Grand Maître", desc: "Noir, à larges bords, un peu cabossé. Il a passé une nuit sur la tête d'un ruban vert." },
  },
};

module.exports = { passages: P, extras: extras };
