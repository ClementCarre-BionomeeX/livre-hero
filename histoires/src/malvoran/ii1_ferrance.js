// Lot II1 of "Le Sceau de Malvoran": the start of act II (leaving Brumefeuille), the north road to the Order's
// commanderie of the Val d'Anse (the act's crossroads), the Val region events, Ferrance (the Forge-Mère and its trial,
// the Nail, Charline, the strike of the glassblowers, Ansgar's hands) and the Athénée of the Circle (the chained book).
var P = {};
function add(o) { Object.keys(o).forEach(function (k) { if (P[k]) throw new Error("ii1_ferrance : passage en double " + k); P[k] = o[k]; }); }
var ROUTE = "@route";

// ==================================================================== leaving Brumefeuille
add({
  II_route: { act: "II", title: "Le lendemain des Brumes", place: "brumefeuille", backName: "la place de Brumefeuille",
    fx: { flag: "acte:II", meet: "brann", ep: ["perso", 500] },
    text: [
      { first: true, text: "Au dernier matin des Brumes, Brumefeuille se réveille tard. On a fermé le mois comme on ferme une porte, en buvant : il reste sur la place des tables à tréteaux, des chandelles noyées dans leur cire, un tonneau en perce que personne n'a pensé à boucher. Une odeur de lard froid et de fumée flotte au ras des toits. Le brouillard monte de la Sorbe, épais comme de la laine, et les gens qui traversent la place y entrent et en ressortent sans bruit." },
      { first: true, text: "Devant le sanctuaire de la Main, un cheval gris attend, la bride passée à l'anneau du mur. Il a les jambes crottées jusqu'au poitrail. Son cavalier est assis sur la marche, un gant gris à la main droite et rien à la gauche, et il mange une pomme en regardant le puits. Quand il te voit, il se lève, essuie sa bouche du revers de la manche, et tire de sa sacoche une lettre pliée en trois, fermée d'une cire grise." },
      { again: true, text: "La place de Brumefeuille, dans le brouillard du matin. Le cheval gris du messager de l'Ordre attend toujours à l'anneau du sanctuaire, et son cavalier fait semblant de ne pas te presser." },
      { if: { has: "puits:clair" }, text: "Au milieu de la place, le puits a retrouvé son eau. Une femme y tire un seau, le regarde longtemps, le renifle, puis y trempe les lèvres. Elle ne dit rien à personne, mais elle repart en chantonnant.", else: "Au milieu de la place, le puits est toujours bâché d'une toile goudronnée, et les femmes vont chercher l'eau à la Sorbe, en amont du moulin, avec des seaux qu'elles portent à deux." },
      { if: { is: { meunier: "livre" } }, text: "La roue du moulin ne tourne plus. Barthélemy est toujours au sanctuaire de la Main, sous la garde de Père Odon, en attendant que le bailli de Sorbe vienne le juger. On dit qu'il ne mange plus, et qu'il demande chaque soir qu'on ouvre la fenêtre du côté de la rivière." },
      { if: { is: { meunier: "protege" } }, text: "La roue du moulin tourne. Barthélemy est là-bas, derrière ses sacs, et le village ne sait rien. Toi, tu sais. Tu sais aussi à quoi il pense quand il s'arrête au bord de l'eau, le soir." },
      { if: { is: { meunier: "marche" } }, text: "La roue du moulin tourne, et personne ne s'en étonne. Ta paume te démange depuis l'aube, comme une piqûre d'ortie qui ne passe pas. Tu as passé un marché sous cette roue. Le village ne le saura jamais." },
    ],
    choices: [
      { label: "Prendre la lettre du messager", hide: { seen: "II_lettre" }, to: "II_lettre" },
      { label: "Faire tes adieux au village", to: "II_adieux" },
      { label: "Seller ce que tu as et partir vers le nord", big: true, if: { seen: "II_lettre" }, why: "Le messager attend que tu prennes sa lettre.", to: "II_depart" },
    ] },

  II_lettre: { act: "II", title: "La lettre du sénéchal", place: "brumefeuille",
    fx: { item: "II_lettre_brann", ep: ["perso", 300] },
    text: [
      "Le messager s'appelle Frère Bérenger. Il a vingt ans, des taches de son, et la manière un peu raide des jeunes gens à qui l'on a confié une chose importante. « De la part du sénéchal Brann, dit-il. Il m'a fait jurer de te la remettre en main propre, et de ne pas la remettre à quelqu'un d'autre, même si on me disait que c'était toi. » Il hésite. « Il a dit : *à qui est descendu sous le moulin, et à personne d'autre.* »",
      "La cire grise porte une main ouverte. Tu la romps. L'écriture est grande, appuyée, sans fioriture, celle de quelqu'un qui écrit rarement et qui n'aime pas ça.",
      "*Le sénéchal de l'Ordre de la Main, à qui est descendu sous le moulin de Brumefeuille. On m'a dit ce que tu as trouvé sous le château des trolls de la crête, et ce que tu as fait sous la roue. Ce sont des choses dont l'Ordre a la garde depuis quatre cents ans, et que l'Ordre garde mal. Viens à la commanderie du Val d'Anse par la route du nord, avant les premières gelées. Je ne te convoque pas : je n'en ai pas le droit. Je te le demande. Ne parle à personne de ce que tu portes. L'eau entend. Brann.*",
      { if: { has: "passe:ordre" }, text: "Bérenger regarde tes mains pendant que tu lis, et tu vois le moment où il comprend. « Tu as porté le gant, dit-il. Ça se voit à la façon dont tu tiens le pli. Le sénéchal le savait, je crois. Il sait toujours ce genre de choses. »" },
      { with: "coliane", text: "Coliane lit par-dessus ton épaule sans s'en cacher. « *L'eau entend*, répète-t-elle. Voilà un homme qui en sait plus qu'il n'en écrit. Je n'aime pas les gens de l'Ordre. Ils gardent les routes et ils laissent brûler les villages qui sont à côté. » Elle te rend la lettre quand même, pliée proprement." },
      { with: "pip", text: "Pip se pose sur la cire rompue, et la main ouverte s'éclaire un instant par en dessous. Elle est rouge, comme une main devant une chandelle." },
    ],
    choices: [
      { label: "« Qu'est-ce qu'il me veut, ton sénéchal ? »", to: "II_berenger" },
      { label: "Ranger la lettre", back: "II_route" },
    ] },

  II_berenger: { act: "II", title: "Frère Bérenger", place: "brumefeuille",
    fx: { regard: { brann: "curieux" }, meet: "II_berenger" },
    text: [
      "Bérenger jette le trognon de sa pomme au cheval, qui le prend du bout des dents. « Je ne sais pas, dit-il, et c'est la vérité. Je sais qu'il a reçu une lettre de Père Odon, il y a dix jours, et qu'il l'a lue trois fois. Je sais qu'il a fait seller le seul cheval qui nous restait de bon pour me l'envoyer. Et je sais qu'il a demandé au cellérier combien de temps on pouvait nourrir un hôte de plus. »",
      "Il baisse la voix. « On n'est plus que dix-neuf à la commanderie, avec les vieux. Il y en avait soixante quand mon père y servait. Le Grand Maître ne sort plus de sa chambre. Le sénéchal fait tout. Il ne demande jamais rien à personne. » Il remet son gant gris. « Alors s'il te demande quelque chose, c'est que c'est grave. »",
      "Il te donne la route : trois jours vers le nord, par le bac de Gué-Morin, la croix des Pèlerins et la crête du Val. « On ne peut pas se tromper, dit-il. Quand tu verras une tour carrée au-dessus d'une rivière, c'est nous. Je repars devant. Le sénéchal voudra savoir que tu viens. »",
    ],
    choices: [{ back: "II_route" }] },

  II_adieux: { act: "II", title: "Les adieux", place: "brumefeuille", backName: "le village, avant le départ",
    text: [
      { first: true, text: "Tu n'as passé que quelques jours à Brumefeuille, et pourtant le village a pris dans ta vie la place d'une année. Tu connais le grincement du seau sur la margelle, l'heure où le meunier ouvrait sa vanne, le chemin de traverse qui coupe derrière la maison de l'herboriste. On ne part pas d'un endroit pareil sans passer quelques portes." },
      { again: true, text: "Le brouillard se lève peu à peu sur Brumefeuille. Il te reste quelques portes où frapper avant de partir." },
      { if: { fac: "brumefeuille", min: 15 }, text: "Les gens te saluent quand tu passes. Une femme te met dans les mains, sans un mot, une miche encore tiède enveloppée dans un torchon. Un vieux soulève son chapeau.", else: "Les gens te regardent passer de derrière leurs volets. Ils ne savent pas trop ce que tu as fait ici, ni si c'était pour eux." },
    ],
    choices: [
      { label: "La maison de Berthe, au bord de l'eau", hide: { seen: "II_adieu_berthe" }, to: "II_adieu_berthe" },
      { label: "La maison de Lune l'herboriste", hide: { seen: "II_adieu_lune" }, to: "II_adieu_lune" },
      { label: "Le moulin", hide: { seen: "II_adieu_moulin" }, to: "II_adieu_moulin" },
      { label: "Le sanctuaire de la Main, et Père Odon", hide: { seen: "II_adieu_odon" }, to: "II_adieu_odon" },
      { back: "II_route" },
    ] },

  II_adieu_berthe: { act: "II", title: "La maison de Berthe", place: "brumefeuille",
    text: [
      { if: { is: { berthe: "sauvee" } }, text: "Berthe est sur le seuil, assise sur un tabouret, une chèvre entre les genoux, en train de la traire. Elle ne se lève pas. « Je ne me lève plus pour personne, dit-elle. Pas même pour qui m'a gardé le cou entier. » Elle finit la chèvre, essuie ses mains à son tablier, et te tend un fromage roulé dans une feuille de châtaignier. « Il est jeune. Il sera bon dans quatre jours. Tu le mangeras sur la route, et tu penseras à moi qui pense à toi. »" },
      { if: { is: { berthe: "cachee" } }, text: "La maison de Berthe est fermée, comme tu l'as laissée. Mais sous la pierre plate du seuil, il y a un fromage enveloppé dans une feuille de châtaignier, et un bout de ficelle noué trois fois. Le signe dont vous étiez convenus. Elle est vivante, là où tu l'as cachée, et elle a trouvé le moyen de te le faire savoir." },
      { if: { is: { berthe: "pendue" } }, text: "La maison de Berthe est ouverte, et vide. On a pris les chaudrons, les draps, la huche. Les chèvres errent dans le jardin, mangent les choux montés en graine, et l'une d'elles vient frotter sa tête contre ta jambe. Sur le mur, quelqu'un a peint une main ouverte à la chaux, la paume vers l'eau. Tu ne sais pas si c'est une prière ou une excuse." },
      { if: { not: { is: { berthe: ["sauvee", "cachee", "pendue"] } } }, text: "La maison de Berthe est close, les volets tirés. Les chèvres broutent derrière la haie. Un voisin te dit qu'elle est partie chez une nièce, à Sorbe, en attendant que les choses se tassent. Il te le dit comme on répète une chose qu'on n'a pas vérifiée." },
      { with: "gloup", text: "Gloup reste longtemps devant les chèvres. Elles ne s'enfuient pas devant lui. C'est peut-être la première fois que des bêtes ne s'enfuient pas devant lui, et il ne sait pas quoi en faire." },
    ],
    choices: [
      { label: "Prendre le fromage", if: { is: { berthe: ["sauvee", "cachee"] } }, why: "Personne ne t'a rien laissé ici.", fx: { food: 1, ep: ["perso", 200] }, back: "II_adieux" },
      { label: "Fermer la porte de la maison vide", if: { is: { berthe: "pendue" } }, why: "La maison n'est pas vide.", fx: { ep: ["perso", 100] }, back: "II_adieux" },
      { back: "II_adieux" },
    ] },

  II_adieu_lune: { act: "II", title: "Chez Lune", place: "brumefeuille",
    text: [
      "La maison de l'herboriste sent la camomille et le vinaigre. Lune fait bouillir des linges dans un chaudron, les manches retroussées jusqu'aux épaules, et elle ne s'arrête pas quand tu entres. « Je sais pourquoi tu viens, dit-elle. Tout le village sait qu'un gant gris t'a apporté une lettre. Ici, une lettre, c'est un événement. »",
      { if: { has: "jeannot:gueri" }, text: "Dans un coin, Jeannot Guérin mange une écuelle de bouillie, assis sur un coffre, les jambes ballantes. Il a encore les joues creuses, mais il a retrouvé ses couleurs, et il te regarde avec la gravité des enfants qui ont été très malades et qui le savent. Il descend de son coffre, vient jusqu'à toi, et te serre la main comme un homme. Puis il retourne à sa bouillie." },
      { if: { has: "lune:remede" }, text: "« La fièvre grise a reculé, dit Lune. Trois enfants sur quatre. Le quatrième, je ne sais pas. » Elle essore un linge en le tordant à deux mains. « Sans ta mousse, ç'aurait été un sur quatre. Je ne l'oublierai pas. »", else: "« La fièvre grise est toujours là, dit Lune. Je la retiens avec ce que j'ai, c'est-à-dire pas grand-chose. » Elle essore un linge en le tordant à deux mains, comme si elle tordait le cou à quelqu'un." },
      "Elle fouille une étagère et pose sur la table deux petits pots de grès fermés à la cire. « De l'onguent. Il ne guérit pas ce qui vient de l'eau noire, mais il guérit le reste. Et là où tu vas, il y aura du reste. »",
    ],
    choices: [
      { label: "Accepter les onguents", fx: { item: ["onguent", "onguent"], ep: ["perso", 200] }, back: "II_adieux" },
      { label: "Lui laisser les onguents pour les enfants", fx: { fac: { brumefeuille: 5 }, ep: ["perso", 300] }, back: "II_adieux" },
    ] },

  II_adieu_moulin: { act: "II", title: "Le moulin", place: "brumefeuille",
    text: [
      "Le chemin du moulin longe le bief. L'eau y est lente, couleur de thé, avec des feuilles de saule qui tournent sur elles-mêmes sans avancer. Tu t'arrêtes là où tu t'es arrêté{e} tant de fois, et tu regardes la roue.",
      { if: { is: { meunier: "livre" } }, text: "La roue ne tourne plus. Le commis a fermé la porte d'une chaîne et il est parti chez sa mère. Par la fenêtre, tu vois la farine sur le sol, intacte, avec les traces de pas de Barthélemy dedans, les dernières. Personne ne les a effacées. Au sanctuaire, de l'autre côté du village, le meunier attend qu'on décide de lui, et il regarde la rivière par la fenêtre que Père Odon lui laisse ouverte." },
      { if: { is: { meunier: "protege" } }, text: "Barthélemy est dehors, assis sur une meule couchée, et il fume une pipe éteinte. Il te voit, et il ne se lève pas. « Je ne descends plus au bief, dit-il. Je te le dis parce que tu vas me le demander. Je ne descends plus. » Il tire sur sa pipe vide. « Mais elle m'appelle encore, la nuit. Et je ne sais pas combien de temps je vais tenir. » Il te regarde. « Va-t'en vite, et reviens si tu peux. »" },
      { if: { is: { meunier: "marche" } }, text: "Barthélemy est à la porte. Il ne dit rien. Il lève la main, la paume vers toi, et tu vois qu'elle est grise jusqu'au poignet, d'un gris de farine mouillée qui ne part pas au lavage. Ta propre paume te brûle. Vous restez comme ça un moment, chacun d'un côté du bief, deux personnes qui ont dit oui à la même chose." },
      { if: { not: { is: { meunier: ["livre", "protege", "marche"] } } }, text: "La roue tourne au ralenti, et personne ne vient à la porte. Tu entends, dedans, le pas lourd du meunier qui va et vient entre ses sacs, et puis plus rien, comme s'il s'était arrêté pour écouter." },
      { with: "pip", text: "Pip ne veut pas approcher de l'eau. Il reste derrière ton épaule, tout petit, et il tremble comme une flamme de chandelle près d'une porte ouverte." },
    ],
    choices: [{ back: "II_adieux" }] },

  II_adieu_odon: { act: "II", title: "Le sanctuaire", place: "brumefeuille",
    text: [
      "Père Odon balaie le sanctuaire avec un balai de genêt usé jusqu'au manche. Il a les yeux rouges d'un homme qui n'a pas dormi. « C'est moi qui ai écrit au sénéchal, dit-il sans préambule. Je ne vous l'ai pas demandé. Je vous demande pardon. Je l'ai fait parce que vous êtes descendu{e} sous ce moulin, et que personne ici n'aurait su quoi faire de ce que vous y avez vu. Brann saura, lui. Ou il saura qui sait. »",
      "Il appuie son balai contre le mur. Au-dessus de l'autel, la vieille pierre sculptée montre les mains de la fondation, polies par des générations de dévots qui les touchent en passant.",
      { if: { mark: { min: 1 } }, text: "Il a vu ta main. Il la regarde encore. « Si vous voulez, dit-il doucement, il y a le tronc des veuves du bief. Ce qu'on y donne ne revient jamais. C'est le principe. On dit que ce qui ne revient jamais emporte quelque chose avec lui. Je ne promets rien. Je dis ce qu'on dit. »" },
      { if: { has: "passe:aide" }, text: "« Vous avez porté des malades, un jour, dit-il. Ça se voit. Vous avez cette façon de vous tenir près des lits. Saint-Gilles-des-Prés, c'est ça ? J'y ai un cousin qui n'en est pas revenu. » Il ne demande pas si tu l'as connu." },
    ],
    choices: [
      { label: "Donner vingt sous au tronc des veuves du bief", if: { all: [{ mark: { min: 1 } }, { gold: { min: 20 } }] }, why: "Il faudrait avoir vingt sous, et une raison de les donner.", tag: "Marque −1", fx: { gold: -20, mark: -1, flag: "II:tronc", fac: { brumefeuille: 5 }, ep: ["perso", 500] }, to: "II_tronc" },
      { label: "Recevoir sa bénédiction", fx: { pv: "max", ep: ["perso", 100] }, back: "II_adieux" },
      { back: "II_adieux" },
    ] },

  II_tronc: { act: "II", title: "Le tronc des veuves", place: "brumefeuille",
    text: [
      "Les pièces tombent l'une après l'autre dans la fente du tronc, et chacune fait un bruit plus sourd que la précédente, comme si la boîte se remplissait d'autre chose que d'argent. La dernière ne fait pas de bruit du tout.",
      "Ta paume se refroidit. Ce n'est pas grand-chose : une tiédeur qui s'en va, comme quand on retire la main d'un poêle. Tu la regardes. La tache est toujours là, mais ses bords se sont estompés, et elle a pâli comme une encre qu'on aurait lavée une fois.",
      "Père Odon ne dit rien. Il reprend son balai. Mais quand tu passes la porte, il dit, sans se retourner : « Ce n'est pas le tronc. C'est que vous l'avez fait. Souvenez-vous-en, la prochaine fois qu'on vous proposera quelque chose. »",
      { with: "coliane", text: "Coliane, sur le seuil, te regarde ressortir. Elle ne dit rien non plus, mais quand vous repartez, elle marche à ta droite, du côté de ta main, ce qu'elle ne faisait jamais.", },
    ],
    choices: [{ label: "Sortir dans le brouillard", fx: { conf: { coliane: 5, pip: 5 } }, back: "II_adieux" }] },

  II_depart: { act: "II", title: "La route du nord", place: "brumefeuille",
    fx: { ep: ["perso", 300] },
    text: [
      "Tu remplis ta gourde à la Sorbe, en amont du moulin, là où l'eau est claire et froide. Tu resserres les sangles de ton sac. Le brouillard s'effiloche au-dessus des marais, et le soleil, quand il passe, a déjà la couleur pâle de la fin de l'automne. Au nord, la vallée remonte vers des collines rousses, puis vers des hauteurs bleues où l'Anse prend sa source, et l'Ordre ses quartiers.",
      { with: "coliane", text: "Coliane a refait ses bottes avec du suif et de la ficelle. Elle a un sac neuf, ou volé, et deux couteaux de plus. « Je viens, dit-elle, comme si tu avais posé la question. Pas pour l'Ordre. Pour voir ce qu'il veut. Et parce que la dernière fois que je t'ai quitté des yeux, tu as fini sous un moulin. »" },
      { with: "gloup", text: "Gloup a passé la nuit dans un seau d'eau de pluie, et il en ressort plus clair qu'il n'y est entré. Il roule derrière toi sur le chemin, et chaque fois que tu te retournes, il s'arrête, comme un chien qui ne veut pas qu'on le renvoie à la maison." },
      { with: "pip", text: "Pip vole devant, puis derrière, puis devant encore. Il n'a jamais vu le nord. Il n'a presque rien vu, en vérité, et il veut tout voir à la fois." },
      { without: "any", text: "Tu pars seul{e}. Le chemin est large, bien tracé, bordé de peupliers dont les feuilles jaunes tombent une à une sans que le vent les y oblige. Personne ne te regarde partir. C'est mieux comme ça." },
      { if: { has: "marque:eclat" }, text: "Dans ta poche, l'éclat de la pierre fendue bat contre ta cuisse, lent et régulier. Plus tu montes vers le nord, plus il bat lentement. Tu ne sais pas si c'est bon signe." },
    ],
    choices: [
      { label: "Prendre la route du nord, vers la commanderie du Val d'Anse", big: true, travel: "r_val" },
    ] },
});

// ==================================================================== the north road (r_val): written legs
add({
  II_leg_bac: { act: "II", title: "Le bac de Gué-Morin", place: null,
    text: [
      "À la fin du premier jour, la route tombe sur la Sorbe, large ici et grise, et s'arrête net au bord de l'eau. Un câble tendu d'une rive à l'autre, un bac plat comme une porte de grange, et une cabane de planches où un homme fume une pipe de terre. Il s'appelle Hardouin. Il le dit comme s'il y avait une pancarte.",
      "« Deux sous par tête, dit-il. Les bêtes, un sou. Les choses qu'on ne sait pas ce que c'est, on voit. » Il regarde ce qui t'accompagne. Il ne bouge pas de sa cabane. « Et on ne passe plus à la nuit. Plus depuis l'été. Il y a quelque chose sous le câble, la nuit. Ça tire. »",
      { with: "gloup", text: "Le passeur regarde Gloup longtemps. Gloup le regarde aussi, de ses deux yeux ronds, sans ciller. « Ça, dit Hardouin, c'est une chose qu'on ne sait pas ce que c'est. Ça fait trois sous. »" },
      { with: "coliane", text: "Coliane s'est approchée du câble et le tâte du doigt. « Il est usé là, dit-elle, et là. Pas par le bac. Par en dessous. » Hardouin hausse les épaules. « Je l'ai dit. Ça tire. »" },
    ],
    choices: [
      { label: "Payer le passage sans discuter", fx: { gold: -4, ep: ["perso", 100] }, to: "II_leg_bac_eau" },
      { label: "Discuter le prix", test: { dom: "social", diff: 0, label: "Marchander avec le passeur" }, win: { fx: { ep: ["perso", 200] }, to: "II_leg_bac_eau" }, lose: { fx: { gold: -6 }, to: "II_leg_bac_eau" } },
      { label: "Aider Hardouin à haler le bac, en échange du passage", fx: { pv: -2, ep: ["perso", 300] }, to: "II_leg_bac_eau" },
    ] },
  II_leg_bac_eau: { act: "II", title: "Au milieu de la Sorbe", place: null,
    text: [
      "Le bac avance par à-coups, à chaque traction sur le câble. Au milieu de la rivière, l'eau devient plus sombre, et le bac s'alourdit comme si on l'avait chargé de sacs. Hardouin jure entre ses dents et tire plus fort. Une vache morte passe au fil du courant, le ventre gonflé, les pattes en l'air, et une corneille debout dessus qui ne se donne même pas la peine de s'envoler.",
      "Tu regardes par-dessus le bord. Sous la surface, il n'y a rien. Juste l'eau brune et, très bas, le câble qui descend vers le fond en faisant un angle qu'il ne devrait pas faire.",
      { with: "pip", text: "Pip s'est caché dans ton col. Tu sens sa lumière contre ta nuque, petite et chaude. Il ne ressort que lorsque le fond du bac racle les galets de l'autre rive." },
      "Sur la berge nord, Hardouin s'assied sur un plot et s'éponge le front. « Tous les jours, dit-il. Tous les jours, c'est plus lourd. Un de ces matins, ça ne viendra plus. » Il rallume sa pipe. « Bonne route. Et ne bois pas à la rivière avant la croix des Pèlerins. »",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },

  II_leg_anselme: { act: "II", title: "La charrette d'Anselme", place: null,
    text: [
      "Au milieu du deuxième jour, une charrette verte est arrêtée sur le bas-côté, une roue en l'air, la mule dételée qui broute tranquillement le talus. Assis sur le timon, un homme à moustache répare un rayon avec du fil de fer et une patience infinie. Il lève les yeux et sourit de toutes ses dents, comme si tu étais exactement la personne qu'il attendait.",
      { if: { person: "anselme" }, text: "« Toi ! dit Anselme. Mais c'est toi ! On se retrouve toujours, sur les routes. C'est qu'elles sont moins nombreuses qu'on croit. » Il te serre la main entre les deux siennes, qui sont noires de cambouis." , else: "« Anselme, dit-il en tendant une main noire de cambouis. Colporteur. Tout ce qu'il faut, et souvent ce qu'il ne faut pas. On dit ça de moi, et c'est vrai. »" },
      "Il ouvre les volets de sa charrette, qui se déplient comme les ailes d'un retable. Dedans, sur des étagères, il y a des aiguilles, des almanachs, des images pieuses, des boucles de ceinture, des fioles bouchées à la cire, une boîte à musique sans clé. Et, posé sur un coussin de velours râpé, un gros clou de fer noir, long comme la main.",
      "« Le Clou de Hildre, dit Anselme en baissant la voix. Le vrai. Volé à la Forge-Mère par un apprenti, il y a vingt ans, et remplacé par un faux. Dix sous, parce que c'est toi. » Il ne cligne pas de l'œil. Il n'a pas besoin.",
    ],
    choices: [
      { label: "Acheter le « Clou de Hildre » (10 sous)", fx: { gold: -10, item: "II_faux_clou", meet: "anselme" }, to: "II_leg_anselme_fin" },
      { label: "Acheter un plan de Ferrance (6 sous)", fx: { gold: -6, item: "II_carte_ferrance", meet: "anselme" }, to: "II_leg_anselme_fin" },
      { label: "Lui demander les nouvelles de la route", fx: { meet: "anselme" }, to: "II_leg_anselme_nouvelles" },
      { label: "L'aider à remonter sa roue, et repartir", fx: { ep: ["perso", 200], meet: "anselme" }, to: "II_leg_anselme_fin" },
    ] },
  II_leg_anselme_nouvelles: { act: "II", title: "Les nouvelles d'Anselme", place: null,
    text: [
      "Anselme se gratte la moustache. Les nouvelles, chez lui, sont une marchandise comme une autre, et il les pèse avant de les donner. « À Ferrance, dit-il, les souffleurs de verre ont posé la canne. Toute la rue des Fours est assise par terre, les bras croisés. Le doyen des verriers dit qu'ils mourront de faim avant lui. Il a peut-être raison. Il a plus de lard qu'eux. »",
      "« À l'Athénée, on a volé un livre. Un livre enchaîné, tu te rends compte. Il a fallu une lime. Le recteur a fait fouiller les copistes jusqu'aux chaussettes. » Il rit. « Et sur la route de l'est, il passe des cavaliers qui ne disent pas bonjour. Des gants noirs. Pas des gens de l'Ordre. L'Ordre dit bonjour, au moins. »",
      { if: { has: "grauk:allie" }, text: "« Ah, et il paraît que les trolls de la crête descendent vendre du bois aux Trois-Bornes, maintenant. Ils paient en pièces anciennes, et ils ne mangent plus personne. Le monde change. » Il a l'air de le regretter un peu, pour le commerce." },
    ],
    choices: [{ label: "Le remercier", to: "II_leg_anselme_fin" }] },
  II_leg_anselme_fin: { act: "II", title: "La charrette d'Anselme", place: null,
    text: [
      "Anselme remonte sa roue à grands coups de maillet, attelle sa mule, et grimpe sur son banc. « Vers le sud, moi, dit-il. Il y a de la guerre qui se prépare, là-bas, et la guerre, c'est bon pour les colporteurs. » Il fait claquer sa langue, et la mule repart d'un pas qui ne promet rien.",
      { if: { item: "II_faux_clou" }, text: "Tu soupèses le clou noir qu'il t'a vendu. Il est lourd, il est vieux, et il a sur la tête une marque de forge que tu ne reconnais pas. Il ressemble exactement à ce qu'on imagine quand on pense au Clou de Hildre. C'est ce qui t'inquiète." },
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },

  II_leg_croix: { act: "II", title: "La croix des Pèlerins", place: null,
    text: [
      "Au troisième jour, la route grimpe dans les collines rousses, et au sommet de la montée se dresse la croix des Pèlerins : un fût de pierre grise, haut comme deux hommes, sculpté sur les quatre faces de mains ouvertes. Des gants gris, usés, troués, décolorés par la pluie, sont accrochés à des clous plantés dans la pierre. Des centaines. Certains sont là depuis si longtemps que le cuir s'est changé en écorce.",
      "Une vieille femme est assise au pied de la croix, un gant neuf sur les genoux, et elle cherche un clou libre. « Pour mon fils, dit-elle sans que tu lui demandes rien. Il était de l'Ordre. Il est mort sur la route de l'Isarde, l'an dernier, à garder un pont où il ne passait personne. » Elle trouve un clou, tout en haut, qu'elle ne peut pas atteindre.",
      "Au-delà de la croix, la route plonge dans une vallée verte où coule une rivière vive, l'Anse. Et sur une butte au-dessus de l'eau, carrée et grise, une tour. Un drapeau pend à son mât, trop lourd pour le vent : une main ouverte, blanche sur fond noir.",
    ],
    choices: [
      { label: "Accrocher le gant pour elle", fx: { fac: { ordre: 5 }, ep: ["perso", 300] }, to: "II_leg_croix_gant" },
      { label: "Lui laisser le temps, et continuer", back: ROUTE },
    ] },
  II_leg_croix_gant: { act: "II", title: "Le gant", place: null,
    text: [
      "Tu montes sur le socle, tu t'agrippes au fût, et tu enfonces le gant sur le clou le plus haut. La pierre est froide et rugueuse. De là-haut, tu vois mieux les mains sculptées, usées par quatre siècles de pluie, et toute la vallée de l'Anse derrière elles.",
      "Quand tu redescends, la vieille femme te prend la main et la serre. « Il s'appelait Isarn, dit-elle. Tu ne le connaissais pas. Maintenant tu connais son nom. » Elle se lève, ramasse son bâton, et repart vers le sud sans se retourner.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
});

// ==================================================================== events of the Val d'Anse (region val)
add({
  EII_deserteurs: { act: "II", title: "Les hommes du fossé", place: null,
    text: [
      "Le chemin passe entre deux haies de prunelliers, assez hautes pour cacher un cavalier. Tu entends le cliquetis avant de les voir : quatre hommes qui sortent du fossé, l'un après l'autre, avec des piques raccourcies à la scie et des casques bosselés. Leurs tabards ont été bleus. On a arraché la tour d'argent qui y était cousue, et il reste à sa place un rectangle plus foncé.",
      "« Des gens d'Aldaran qui n'ont plus envie d'être d'Aldaran, dit le plus vieux, un grand gaillard à la barbe grise. On ne veut pas de mal. On veut à manger, et ce que tu as dans ta bourse, et on te laisse passer. C'est un marché honnête, pour un marché de fossé. » Derrière lui, le plus jeune a quinze ans peut-être, et sa pique tremble.",
      { with: "coliane", text: "Coliane a déjà un couteau dans chaque main, la lame à plat contre l'avant-bras, de sorte qu'on ne la voit pas. Elle compte les hommes, puis les arbres, puis les hommes encore." },
    ],
    choices: [
      { label: "Leur donner un jour de vivres et dix sous", if: { all: [{ food: { min: 1 } }, { gold: { min: 10 } }] }, why: "Tu n'as pas de quoi les payer.", fx: { food: -1, gold: -10, ep: ["perso", 200] }, to: "EII_deserteurs_paye" },
      { label: "Leur parler de la guerre qui vient, et de ce qu'ils fuient", test: { dom: "social", diff: -10, label: "Les faire parler plutôt que frapper", help: [{ if: { has: "passe:ordre" }, v: 10 }] }, win: { fx: { ep: ["perso", 500] }, to: "EII_deserteurs_parle" }, lose: { to: "EII_deserteurs_combat" } },
      { label: "« Laisse-moi faire », dit Coliane, et elle s'avance", who: "coliane", test: { dom: "combat", diff: 0, label: "Coliane : les faire reculer d'un geste" }, win: { fx: { ep: ["perso", 400], conf: { coliane: 5 } }, to: "EII_deserteurs_fuient" }, lose: { to: "EII_deserteurs_combat" } },
      { label: "Dégainer", to: "EII_deserteurs_combat" },
    ] },
  EII_deserteurs_combat: { act: "II", title: "Le fossé",
    combat: { title: "Les déserteurs d'Aldaran", enemies: [{ id: "II_deserteur", n: 3 }], terrain: "nature", spare: true,
      win: { fx: { ep: ["seance", 1200], gold: 6 }, to: "EII_deserteurs_apres" }, lose: { fx: { gold: -8, pv: -3 }, to: "EII_deserteurs_vole" },
      flee: { label: "Sauter la haie et courir", dom: "discretion", diff: 0, to: "EII_deserteurs_fuite" }, calm: { to: "EII_deserteurs_parle" } },
    text: [
      "Le barbu fait un pas en arrière et ses trois compagnons un pas en avant, comme à l'exercice. Ils ont été soldats, et ils s'en souviennent. Le jeune reste derrière, la pique levée, sans savoir où la pointer.",
    ] },
  EII_deserteurs_apres: { act: "II", title: "Le fossé",
    text: [
      "Quand c'est fini, deux sont couchés dans le fossé et le troisième s'enfuit en tenant son bras. Le jeune n'a pas bougé. Il a lâché sa pique. Il pleure sans bruit, la bouche ouverte, comme un enfant.",
      "Tu fouilles les sacs. Il n'y a presque rien : du pain moisi, une gourde d'eau-de-vie, une poignée de sous de Vel-Orin, et une lettre d'une mère que personne n'a ouverte. Tu laisses la lettre au garçon. Il la prend et part en courant vers le sud, vers rien.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
  EII_deserteurs_vole: { act: "II", title: "Le fossé",
    text: [
      "Tu te réveilles dans l'herbe, la tête dans les prunelliers, avec un goût de sang dans la bouche. Ta bourse est plus légère. Ils t'ont laissé tes armes : des soldats savent ce que coûte une arme, et ce que coûte d'être pris avec celle d'un autre.",
      "Sur le chemin, tracé dans la poussière du bout d'une pique, il y a un mot : *PARDON*. L'orthographe est bonne. Quelqu'un, parmi eux, avait appris à écrire.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
  EII_deserteurs_fuite: { act: "II", title: "La haie",
    text: [
      "Tu passes la haie en t'arrachant la manche aux épines, et tu cours à travers un champ de chaume jusqu'à ce que les cris s'éteignent derrière toi. Ils ne te suivent pas. Des hommes qui ont faim ne courent pas loin.",
      "Tu rejoins la route une demi-lieue plus haut, par un chemin creux, les jambes en feu et les bras griffés. Personne ne t'attend. C'est la meilleure nouvelle de la journée.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
  EII_deserteurs_fuient: { act: "II", title: "Le fossé", with: "coliane",
    text: [
      "Coliane ne dit rien. Elle marche droit sur le barbu, si vite qu'il n'a pas le temps de baisser sa pique, et elle s'arrête à un pas de lui, un couteau sous son menton, l'autre sous sa ceinture. Elle ne le touche pas. Elle le regarde.",
      "« On se trompe de gens, dit-il au bout d'un moment. Ça arrive. » Il recule, ses hommes reculent, et ils redescendent dans le fossé comme ils en étaient sortis. Coliane range ses couteaux. « Ils ne nous auraient rien fait, dit-elle. Mais le prochain qui passe, si. Maintenant ils réfléchiront. »",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
  EII_deserteurs_paye: { act: "II", title: "Le fossé",
    text: [
      "Le barbu prend ce que tu lui tends, et le partage tout de suite en quatre, sous tes yeux, à parts égales. Il donne la plus grosse au jeune. « Tu es quelqu'un de bien, dit-il. Ou quelqu'un de prudent. Ça revient au même, sur une route. »",
      "Ils s'en vont vers l'est, par les champs. Le jeune se retourne une fois, et lève la main. Tu ne sais pas s'il te salue ou s'il s'excuse.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
  EII_deserteurs_parle: { act: "II", title: "Les hommes du fossé",
    text: [
      "Le barbu s'appelle Rogier. Il a servi douze ans dans les piquiers d'Aldaran. « On nous a dit que Vel-Orin voulait rouvrir la vieille mine du nord, dit-il. On nous a dit que c'était une affaire d'honneur. On nous a mis en rang au bord de l'Isarde, et en face, il y avait des gars comme nous, avec des arbalètes, qui avaient l'air de ne pas savoir non plus. » Il crache. « On est partis la nuit. Dix-sept. On n'est plus que quatre. »",
      "Ils s'asseyent au bord du fossé, et toi avec eux. Le jeune sort de sa chemise un quignon qu'il partage sans qu'on lui demande. On parle de la guerre qui vient, des récoltes, des femmes qu'on a laissées. Quand tu te lèves, Rogier te serre la main. « Si tu vas vers le sud un jour, dit-il, ne prends pas le parti du plus riche. Il n'y en a pas, de plus riche. Ils paient tous avec le même argent. »",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },

  EII_charrette: { act: "II", title: "La charrette de charbon",
    text: [
      "Une charrette de charbon de bois est embourbée jusqu'aux moyeux dans une ornière, en travers du chemin. Deux bœufs tirent, la langue pendante, sans arriver à rien. Le charretier, un homme noir de suie des pieds à la tête, cogne sur la roue avec un bâton, ce qui n'aide pas, et il jure en patois des forges.",
      "« Pour Ferrance, dit-il quand il te voit. Douze sacs. La Forge-Mère attend son charbon depuis deux jours, et le maître Ansgar ne pardonne pas les retards. Il ne pardonne rien, remarque. Il n'a plus de mains pour ça. »",
    ],
    choices: [
      { label: "Pousser à la roue", test: { dom: "combat", diff: 0, label: "Dégager la charrette", help: [{ with: "thavary", v: 15 }, { with: "gloup", v: 5 }] }, win: { fx: { ep: ["perso", 400], flag: "II:charbon" }, to: "EII_charrette_ok" }, lose: { fx: { pv: -2, ep: ["perso", 150] }, to: "EII_charrette_ok" } },
      { label: "Caler la roue avec des branches et des pierres", test: { dom: "nature", diff: 0, label: "Faire un chemin à la roue" }, win: { fx: { ep: ["perso", 400], flag: "II:charbon" }, to: "EII_charrette_ok" }, lose: { fx: { ep: ["perso", 150] }, to: "EII_charrette_ok" } },
      { label: "Passer ton chemin", back: ROUTE },
    ] },
  EII_charrette_ok: { act: "II", title: "La charrette de charbon",
    text: [
      { outcome: "win", text: "La roue sort de l'ornière avec un bruit de succion, et la charrette repart d'un coup, si brusquement que deux sacs manquent tomber. Le charretier rit, d'un rire de gorge qui lui fait tousser de la poussière noire. « Tu diras à la Forge que c'est Malo qui t'a vu, dit-il. Malo le charbonnier. Ils te feront entrer. »" },
      { outcome: "lose", text: "Vous tirez, vous poussez, vous vous couvrez de boue et de suie, et la charrette ne bouge que d'un pied. Le charretier finit par décharger la moitié des sacs, par les porter un à un sur la terre sèche, et par recharger plus loin. Il te remercie quand même, d'un signe de tête, et te donne une poignée de charbon dans un chiffon « pour le feu de ce soir »." },
      "Tu repars noir{e} jusqu'aux coudes. Il faudra deux lavages pour que l'eau sorte claire de tes mains.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },

  EII_flaque: { act: "II", title: "La flaque",
    text: [
      "Il a plu dans la nuit. Le chemin est criblé de flaques qui reflètent un ciel lavé, bleu pâle, avec des nuages blancs qui passent vite. Tu enjambes la plus large. Dans l'eau, ton reflet t'enjambe aussi, avec un petit temps de retard.",
      "« {hero}. » Ce n'est pas un bruit. C'est ton nom, posé dans ta tête, comme quelqu'un qui pose la main sur ton épaule par-derrière. La voix est douce, raisonnable, un peu triste. « Tu vas chez ceux qui l'ont enchaîné. Ils vont te demander de les aider à serrer la chaîne. Écoute bien ce qu'ils ne disent pas. »",
      { with: "pip", text: "Pip s'est arrêté au-dessus de la flaque. Sa lumière tombe dans l'eau, et un instant tu crois voir, au fond, une main de femme qui se tend vers elle, très lentement, pour la prendre. Pip remonte d'un coup et se cache derrière ta tête." },
      { if: { has: "marque:eclat" }, text: "Ta paume te brûle. La tache noire s'est élargie d'un cheveu, tu en es sûr{e}, et elle a la forme exacte de la flaque." },
    ],
    choices: [
      { label: "Frapper l'eau du talon", fx: { ep: ["perso", 200] }, to: "EII_flaque_fin" },
      { label: "Te pencher pour écouter la suite", tag: "Marque +1", stain: true, if: { has: "marque:eclat" }, why: "La voix ne t'en dira pas plus.", fx: { mark: 1, fear: { pip: 5 }, conf: { coliane: -5 } }, to: "EII_flaque_ecoute" },
      { label: "Passer sans répondre", back: ROUTE },
    ] },
  EII_flaque_fin: { act: "II", title: "La flaque",
    text: [
      "L'eau gicle sur tes bottes et retombe en gouttes boueuses. Quand elle se calme, la flaque ne reflète que le ciel, et ton visage, à l'heure, sans retard.",
      "Tu marches longtemps en évitant les flaques. C'est idiot. Tu le fais quand même.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
  EII_flaque_ecoute: { act: "II", title: "La flaque",
    text: [
      "Tu t'accroupis. L'eau est tiède. La voix reprend, tout près, comme si une bouche te parlait à l'oreille à travers une porte. « Ils étaient plus nombreux que ce qu'on raconte, dit-elle. Ils avaient plus peur que ce qu'on raconte. Les clés qu'ils cherchent à reprendre ne leur appartiennent pas. Et toi, tu as déjà dans la main de quoi les ouvrir. »",
      "Ta paume s'est mise à battre, au même rythme que l'eau qui frissonne. Puis plus rien. Une flaque, de la boue, le ciel. Tu te relèves avec l'impression d'avoir dormi une heure, et le soleil n'a pas bougé.",
      { with: "coliane", text: "Coliane te regarde avec une expression que tu ne lui avais jamais vue : celle qu'elle a pour les bêtes grises du Rouvre, quand elle n'a pas encore décidé si elle va devoir les tuer." },
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },

  EII_pelerins: { act: "II", title: "Les pèlerins de la Main",
    text: [
      "Une dizaine de pèlerins marchent vers le nord en file, chacun un gant gris pendu au cou par un cordon. Ils vont à la commanderie, puis à la croix, puis ailleurs ; ils ne savent pas trop. En queue de file, une femme porte un enfant de quatre ou cinq ans enroulé dans une couverture, et elle s'arrête tous les cent pas pour reprendre son souffle.",
      "L'enfant a de la fièvre. Il a les lèvres grises, et au coin des yeux, une petite trace noire, comme de la suie, qui ne part pas quand sa mère l'essuie. « Il a bu à la rivière, dit-elle. Une seule fois. Une seule. »",
      { with: "aubin", text: "Frère Aubin s'est déjà agenouillé près de l'enfant, la main sur son front, et il prie tout bas, les yeux ouverts." },
    ],
    choices: [
      { label: "Soigner l'enfant toi-même", test: { dom: "magie", diff: -10, label: "Soigner la fièvre de l'eau noire", help: [{ with: "aubin", v: 20 }, { if: { has: "maitre:ortie" }, v: 10 }, { if: { item: "eau_claire" }, v: 15 }] }, win: { fx: { ep: ["seance", 800], fac: { ordre: 5 } }, to: "EII_pelerins_gueri" }, lose: { fx: { ep: ["perso", 300] }, to: "EII_pelerins_porte" } },
      { label: "Lui donner un onguent et du pain", if: { item: "onguent" }, why: "Tu n'as pas d'onguent.", fx: { drop: "onguent", ep: ["perso", 300] }, to: "EII_pelerins_porte" },
      { label: "Porter l'enfant jusqu'à la halte suivante", fx: { ep: ["perso", 400], pv: -2 }, to: "EII_pelerins_porte" },
    ] },
  EII_pelerins_gueri: { act: "II", title: "Les pèlerins de la Main",
    text: [
      "Tu poses les mains sur l'enfant et tu cherches la fièvre comme on cherche un fil dans une pelote. Elle est là, froide et noire, enroulée autour de quelque chose. Tu tires. Elle résiste, puis cède d'un coup. L'enfant vomit une eau sombre dans l'herbe, et se met à pleurer. Il pleure fort, avec des larmes claires.",
      "Sa mère le serre si fort qu'il crie. Les pèlerins se signent de la main ouverte. L'un d'eux te tend son gant gris, le seul bien qu'il ait. Tu ne le prends pas. Il le remet à son cou, et il te regarde comme on regarde une chose qu'on racontera.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
  EII_pelerins_porte: { act: "II", title: "Les pèlerins de la Main",
    text: [
      "Tu fais ce que tu peux. Ce n'est pas assez pour guérir, mais c'est assez pour que la mère puisse continuer. À la halte, sous un auvent de chaume, une autre pèlerine prend l'enfant et le berce. La fièvre ne monte plus. Elle ne descend pas non plus.",
      "« Le sénéchal a un frère infirmier, à la commanderie, dit la mère. On ira jusque-là. » Elle te remercie, deux fois, et la seconde fois elle pleure.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },

  EII_source: { act: "II", title: "La source sous les hêtres",
    text: [
      "Un filet d'eau sort d'une fente de rocher, sous trois hêtres si vieux que leurs racines ont soulevé le talus. Quelqu'un a creusé dessous une petite vasque dans la pierre, il y a très longtemps, et sculpté sur le bord une main ouverte, usée jusqu'à n'être qu'un relief tiède sous les doigts. L'eau est si claire qu'on voit chaque grain de sable au fond, et elle a un goût de pierre et de froid.",
      { with: "gloup", text: "Gloup s'approche du bord, et il s'arrête. Il tend une petite excroissance vers l'eau, la retire, la tend encore. Il a peur, et il a envie. Il ne sait pas ce que l'eau claire lui ferait." },
      { with: "pip", text: "Pip se pose sur la main sculptée. Sa lumière devient blanche, toute blanche, comme elle ne l'est jamais." },
    ],
    choices: [
      { label: "Remplir une fiole", fx: { item: "eau_claire", ep: ["perso", 300] }, to: "EII_source_fin" },
      { label: "Laisser Gloup y tremper le bout de lui-même", who: "gloup", fx: { conf: { gloup: 10 }, ep: ["perso", 300] }, to: "EII_source_gloup" },
      { label: "Boire, et repartir", fx: { pv: 6 }, back: ROUTE },
    ] },
  EII_source_gloup: { act: "II", title: "La source sous les hêtres",
    text: [
      "Gloup glisse jusqu'à la vasque et s'y laisse tomber d'un coup, comme un enfant qui saute dans la rivière avant d'avoir eu le temps d'avoir peur. L'eau se trouble autour de lui, grise, puis s'éclaircit. Il ne se dissout pas. Il reste là, au fond, immobile, et tu vois à travers lui pour la première fois : il y a quelque chose au centre, un noyau sombre, petit comme une noix, qui ne se lave pas.",
      "Il ressort tout seul, plus petit et plus clair, et il fait un bruit que tu ne lui connaissais pas, une sorte de gargouillis aigu qui ressemble à un rire. Il roule trois fois autour de la vasque. Puis il vient se coller à ta botte, et il ne bouge plus jusqu'au soir.",
    ],
    choices: [
      { label: "Remplir aussi une fiole", fx: { item: "eau_claire" }, back: ROUTE },
      { label: "Reprendre la route", back: ROUTE },
    ] },
  EII_source_fin: { act: "II", title: "La source sous les hêtres",
    text: [
      "Tu bouches la fiole avec de la cire et tu la ranges au fond de ton sac, enveloppée dans un linge. Elle ne pèse rien. Tu as l'impression de porter quelque chose de lourd.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },

  EII_souffleurs: { act: "II", title: "Les verriers sur la route",
    text: [
      "Trois hommes et une femme marchent vers Ferrance, en tabliers de cuir brûlés, avec de longues cannes de fer sur l'épaule comme des pèlerins portent leur bâton. Ils ont les avant-bras couverts de petites cicatrices blanches, rondes, les traces des gouttes de verre qui sautent du four. La femme a une toux qui la plie en deux tous les dix pas.",
      "« On était à la verrerie de Valcourt, dit l'un des hommes. Ils ont fermé. On rentre à Ferrance pour la grève. » Il dit *la grève* comme on dit *la messe*. « Ombeline Vasseur a dit que tant que le doyen ne rendrait pas le tiers qu'il nous a pris, aucun four de la rue ne s'allumerait. On va s'asseoir avec les autres. »",
      "La femme tousse encore, et crache noir dans l'herbe. Elle s'essuie la bouche sans y faire attention. « C'est l'eau des bacs, dit-elle. Celle où on trempe le verre. Elle vient du canal, et le canal a tourné. Le doyen dit que ça ne fait rien au verre. Au verre, non. »",
    ],
    choices: [
      { label: "Marcher un moment avec eux", fx: { flag: "II:verriers_route", questSeen: "II_greve", ep: ["perso", 200] }, back: ROUTE },
      { label: "Leur souhaiter bonne route", back: ROUTE },
    ] },

  EII_trolls: { act: "II", title: "Les bûcherons de la crête",
    text: [
      "Au bord du chemin, sous un tas de troncs fraîchement ébranchés, trois trolls de la crête sont assis en rond et mangent un mouton cuit, proprement, avec des couteaux. Ils portent des sayons de grosse toile, et l'un d'eux a une hache de bûcheron passée à la ceinture comme une dague. Ils te regardent arriver sans se lever.",
      "« Gens de Grauk, dit le plus gros, en se tapant la poitrine d'une main grasse. Bois pour Ferrance. Payé. » Il te montre une bourse. Puis il te reconnaît, ou il reconnaît quelque chose en toi, et il se lève tout à fait, ce qui prend un certain temps. « Toi. Château. Ce qui chante. Grauk dit : si toi passer, toi manger. » Il te tend un morceau de mouton au bout de son couteau.",
    ],
    choices: [
      { label: "Manger avec eux", fx: { food: 1, pv: 6, ep: ["perso", 300] }, to: "EII_trolls_repas" },
      { label: "Les remercier, et passer", back: ROUTE },
    ] },
  EII_trolls_repas: { act: "II", title: "Les bûcherons de la crête",
    text: [
      "Le mouton est bon, trop salé, cuit à cœur. Les trolls mangent en silence, avec une application d'enfants sages. Quand tu as fini, le plus gros te donne encore une épaule enveloppée dans des feuilles, pour la route, et il se penche vers toi.",
      "« Grauk dort mieux, dit-il. Plus de chant. Mais l'eau, en bas, sous la crête… » Il cherche ses mots, ne les trouve pas, et fait un geste avec ses deux mains, comme quelqu'un qui pousse une porte. « Elle pousse. Grauk dit : dire à toi. » Il hoche la tête, satisfait d'avoir fait sa commission, et se rassoit.",
    ],
    choices: [{ label: "Reprendre la route", back: ROUTE }] },
});

// ==================================================================== the commanderie of the Val d'Anse (hub of act II)
add({
  II_leg_val: { act: "II", title: "La crête du Val", place: null,
    text: [
      "La dernière montée se fait dans un bois de châtaigniers où les bogues craquent sous les pieds. Puis les arbres s'écartent, et le Val d'Anse s'ouvre d'un coup sous toi : une vallée étroite, verte encore, où la rivière fait des boucles brillantes entre des prés fauchés. Des fumées montent de trois ou quatre fermes. Au nord-est, très loin, un ciel brun et bas pèse sur l'horizon : la fumée des forges de Ferrance.",
      "La commanderie est là, sur sa butte, au-dessus d'un pont de pierre. Une tour carrée, un mur d'enceinte, les toits d'un cloître et d'une longue écurie. De près, tu vois ce qu'on ne voyait pas de loin : les créneaux ébréchés, les tuiles manquantes, le jardin potager qui a mangé la moitié de la basse-cour. Une maison faite pour soixante, où l'on vit à dix-neuf.",
      { with: "coliane", text: "« Elle a dû être belle, dit Coliane. Il y a cent ans. » Elle dit ça sans méchanceté. Pour une fois." },
    ],
    choices: [{ label: "Descendre vers la commanderie", back: ROUTE }] },

  II_arrivee: { act: "II", title: "La porte de la commanderie", place: "commanderie",
    fx: { meet: "brann", ep: ["seance", 1000], reveal: ["ferrance", "morteau", "thavar"] },
    text: [
      "Le pont-levis ne se lève plus depuis longtemps : ses chaînes sont rouillées dans leurs poulies, et une glycine a poussé dans le mécanisme. Sous la voûte, Frère Bérenger t'attend, ganté de gris, l'air soulagé. « Le sénéchal est dans la cour, dit-il. Il fend du bois. Il fend du bois quand il attend quelque chose. Ça fait trois jours qu'il fend du bois. »",
      "Dans la cour, un homme de cinquante ans, en chemise malgré le froid, abat une hache sur une bûche de chêne, et la bûche s'ouvre en deux sans un bruit de trop. Il a des épaules de bûcheron, une barbe grise taillée court, une balafre qui lui ferme à demi l'œil gauche. Il pose la hache, s'essuie les mains à sa chemise, et vient vers toi. Il ne sourit pas. Il te regarde comme on regarde un cheval qu'on vous a vendu de loin.",
      "« Brann, dit-il. Sénéchal de l'Ordre, pour ce que ça vaut. Tu es venu{e}. Je ne savais pas si tu viendrais. » Il désigne ta main, puis le bas de la vallée, d'un même geste vague. « Odon m'a écrit. Ce qui était sous le château des trolls. Ce qui était sous le moulin. Je n'ai pas dormi depuis. »",
      { if: { has: "passe:ordre" }, text: "Il te regarde encore, plus longtemps. « Trois ans de gant gris, dit-il. À la tour de Sorbe, ou au pont de Vire. Je me souviens de ta tête, pas de ton nom. Tu as rendu le gant proprement. C'est rare. » Il te serre l'avant-bras, à la manière de l'Ordre." },
      { if: { has: "passe:cercle" }, text: "« Et tu as été copiste au Cercle, dit-il. Odon me l'a écrit aussi. » Il le dit sans hostilité, mais il le dit. « Ici, ce n'est pas une tache. Ce n'est pas une recommandation non plus. »" },
      { with: "pip", text: "Pip est sorti de ton col. Brann le regarde, longtemps, sans un mot, et quelque chose passe sur son visage dur que tu ne sais pas lire : pas de la surprise. De la peine, peut-être. Il détourne les yeux le premier." },
    ],
    choices: [
      { label: "« Que me voulez-vous ? »", big: true, to: "II_mission" },
    ] },

  II_mission: { act: "II", title: "Ce que demande le sénéchal", place: "commanderie",
    fx: { questSeen: "II_gardiens", ep: ["perso", 500] },
    text: [
      "Brann t'emmène sous l'auvent du bûcher, à l'abri du vent, et s'assied sur le billot. Il parle bas, et il parle comme il fend le bois : d'un coup, sans revenir dessus. « Quand les Cinq ont fermé la Brèche, ils ont fermé le Sceau avec trois clés. Le Clou, à la Forge-Mère de Ferrance. La Cloche, au moutier de Saint-Ivo, sur le lac de Morteau. L'Anneau, chez les Thavar, au-dessus du Val. Trois maisons pour les garder. L'Ordre, pour garder les trois maisons. »",
      "« La Forge ne répond plus à mes lettres. Le moutier est sous l'eau depuis un an, et ses moines avec. Les Thavar vendent leurs meubles pour payer le pain, et on m'a dit qu'un émissaire était venu leur parler d'un prix. » Il frotte sa balafre du pouce. « Et ce qui monte de la Brèche monte plus vite chaque mois. Je veux savoir où sont les clés. Qui les tient. Si elles tiennent encore. »",
      "« J'avais soixante gants gris il y a vingt ans. J'en ai dix-neuf, dont six qui ne peuvent plus monter à cheval. Je ne peux pas t'ordonner d'y aller. Je te le demande. Et quand tu reviendras, tu me diras ce que tu as vu, et je te dirai ce que je sais. » Il se tait. « Une partie de ce que je sais. »",
      { with: "coliane", text: "« Une partie », répète Coliane. Brann lève les yeux sur elle, et ne nie pas." },
    ],
    choices: [
      { label: "« J'irai. »", fx: { fac: { ordre: 5 }, regard: { brann: "cordial" } }, to: "II_hub" },
      { label: "« J'irai, mais pas pour l'Ordre. »", fx: { regard: { brann: "neutre" }, conf: { coliane: 5 } }, to: "II_hub" },
    ] },

  II_hub: { act: "II", title: "La commanderie du Val d'Anse", place: "commanderie", hub: true, routes: true, backName: "la cour de la commanderie",
    text: [
      { first: true, text: "La commanderie tient tout entière autour d'une cour pavée où l'herbe pousse entre les pierres. La tour carrée au nord, avec la salle du sénéchal au premier étage et la chambre du Grand Maître au-dessus, volets clos. Le cloître à l'ouest, et sa chapelle. À l'est, les écuries, l'intendance et l'hôtellerie des pèlerins. Au milieu de la cour, un abreuvoir de pierre et un tilleul. Une cloche sonne les heures, un peu fêlée, et dix-neuf frères vont et viennent dans une maison faite pour soixante." },
      { first: true, text: "Dans ton carnet, sous la date, tu écris une question, parce que c'est celle que tout le monde ici évite : *Qui gardait le Sceau ?*" },
      { again: true, text: "La cour de la commanderie, ses pavés moussus, son tilleul, son abreuvoir. Un frère traverse avec un seau, un autre avec une selle. La cloche fêlée sonne une heure qui n'est peut-être pas la bonne." },
      { when: "night", text: "La nuit, la cour n'est éclairée que par une lanterne pendue sous la voûte et par la fenêtre du sénéchal, où brûle une chandelle jusque très tard. Un frère de garde fait les cent pas sur le chemin de ronde, et ses pas sonnent sur les dalles comme ceux d'un homme seul dans une église." },
      { if: { clock: "voix", min: 2 }, text: "Depuis quelques jours, on ne tire plus d'eau au puits du cloître. Une toile goudronnée le couvre, lestée de pierres, et les frères font un détour pour ne pas passer à côté. Ils descendent à la rivière avec des seaux, deux par deux." },
      { if: { clock: "voix", min: 3 }, text: "L'abreuvoir de la cour est vide, raclé jusqu'à la pierre, et les chevaux boivent à des baquets qu'on remplit à la rivière. Personne ne parle de Frère Foulques. Tout le monde y pense. La chapelle est éclairée nuit et jour." },
      { with: "thavary", text: "Thavary s'est arrêtée sous la voûte, et elle regarde le drapeau à la main ouverte. « Mon arrière-grand-père s'asseyait à la table du sénéchal, dit-elle. À sa droite. » Elle ne dit pas qui s'y assoit maintenant." },
      { with: "aubin", text: "Frère Aubin est entré dans la chapelle du cloître dès votre arrivée, et il en est ressorti presque aussitôt, les mains vides. « Ils prient bien, ici, dit-il. Ils prient comme on monte la garde. »" },
      { with: "charline", text: "Charline marche dans la cour les mains enfoncées dans les manches, et elle évite de regarder les gants gris. « Les gens de l'Ordre et les gens du Cercle se disent bonjour, dit-elle. Ils ne se disent rien d'autre depuis deux cents ans. »" },
    ],
    choices: [
      { label: "Le sénéchal Brann, dans sa salle de la tour", to: "II_brann" },
      { label: "La salle des Cinq Mains", to: "II_salle" },
      { label: "La cour d'armes, où l'on s'entraîne", to: "II_cour" },
      { label: "Les écuries", to: "II_ecuries" },
      { label: "L'intendance du frère cellérier", to: "II_cellier" },
      { label: "L'escalier du Grand Maître", to: "II_edrin" },
      { label: "Le puits du cloître, sous sa toile", hide: { clock: "voix", max: 1 }, to: "II_puits_noir" },
      { label: "L'abreuvoir de la cour", hide: { clock: "voix", max: 2 }, to: "II_abreuvoir" },
      { label: "L'hôtellerie des pèlerins, pour la nuit", to: "II_hotellerie" },
      { label: "Rendre ta réponse à Brann", big: true, exit: true, to: "IIT_jetons", if: { all: [{ clues: "R2", min: 2 },
        { count: [{ relic: "clou" }, { given: "clou" }, { relic: "cloche" }, { given: "cloche" }, { relic: "anneau" }, { given: "anneau" }], min: 2 }] },
        why: "Il te faut au moins deux indices sur les gardiens, et deux des trois clés." },
      { label: "Confier la Cloche d'Ivo à Brann", hide: { not: { relic: "cloche" } }, to: "IIC_don_cloche" },
    ] },

  II_brann: { act: "II", title: "La salle du sénéchal", place: "commanderie", backName: "la salle du sénéchal",
    text: [
      { first: true, text: "La salle du sénéchal tient tout le premier étage de la tour : une table de chêne couverte de lettres, de cartes et de comptes, une cheminée où brûle un feu trop petit, un râtelier d'armes, et sur le mur une grande carte des Marches piquée d'épingles à tête de cire grise. Il y a beaucoup plus d'épingles au sud qu'au nord, et beaucoup plus de cire grise fondue au pied de la carte que d'épingles dessus." },
      { again: true, text: "Brann est à sa table, une plume à la main, et il écrit lentement, en appuyant trop. Il lève les yeux quand tu entres, finit sa ligne, et pose la plume." },
      { again: true, text: "« Alors ? dit-il. Qu'est-ce que tu as vu ? »" },
    ],
    choices: [
      { label: "« Pourquoi trois clés ? Qu'est-ce qu'elles ferment, au juste ? »", hide: { seen: "II_brann_cles" }, to: "II_brann_cles" },
      { label: "« Celle qui m'a formé{e} est-elle passée par ici ? »", hide: { seen: "II_brann_maitre" }, to: "II_brann_maitre" },
      { label: "« Et le Grand Maître ? »", hide: { seen: "II_brann_edrin" }, to: "II_brann_edrin" },
      { label: "« On dit que Ferrance est en grève. »", hide: { seen: "II_brann_greve" }, to: "II_brann_greve" },
      { label: "Accepter le jeton de l'Ordre", hide: { any: [{ item: "jeton_ordre" }, { not: { seen: "II_brann_cles" } }] }, to: "II_jeton" },
      { label: "Lui raconter ce que tu as trouvé à Ferrance", hide: { any: [{ not: { any: [{ relic: "clou" }, { given: "clou" }] } }, { seen: "II_brann_clou" }] }, to: "II_brann_clou" },
      { back: "II_hub" },
    ] },

  II_brann_cles: { act: "II", title: "Les trois clés", place: "commanderie",
    fx: { ep: ["perso", 400] },
    text: [
      "Brann se lève, va jusqu'à la carte, et pose le doigt sur le massif de la Fenne, tout à l'est, là où il n'y a plus d'épingles du tout. « La Brèche est là-dessous. Sous le glacier. Ce qui en monte, tu l'as vu : l'eau noire, les bêtes grises, les gens qui entendent une voix dans leur puits. Le Sceau tient la Brèche fermée. Les trois clés tiennent le Sceau. »",
      "« On raconte aux enfants qu'elles ouvrent la prison de Malvoran. C'est faux. Elles ne l'ouvrent pas. Elles la tiennent. Comme on tient une porte avec trois verrous. Si on les enlève, la porte s'ouvre. Si on les casse, elle s'ouvre aussi. Il faut qu'elles restent où elles sont, et qu'elles soient tenues par des gens qui savent ce qu'ils tiennent. »",
      "Il se rassoit. « Ce que je ne sais pas, c'est si elles sont encore tenues. Ni par qui. » Tu vois qu'il en sait davantage. Tu vois aussi qu'il ne le dira pas aujourd'hui.",
      { with: "pip", text: "Pip s'est posé sur la carte, juste au-dessus de la Fenne. Il ne bouge pas. Brann le regarde, puis il pose son gant sur la table, à côté de lui, paume ouverte, comme on fait pour qu'une bête vienne. Pip ne vient pas." },
      { if: { has: "passe:cercle" }, text: "« Au Cercle, dis-tu, on enseigne que les Cinq ont menti sur quelque chose. » Brann ne bronche pas. « Au Cercle, on enseigne beaucoup de choses. Certaines sont même vraies. »" },
    ],
    choices: [{ back: "II_brann" }] },

  II_brann_maitre: { act: "II", title: "La trace du maître", place: "commanderie",
    fx: { ep: ["perso", 300] },
    text: [
      { if: { has: "maitre:hauberte" }, text: "Brann se tait longtemps. « Hauberte de Sarn, dit-il enfin. Elle est passée, oui. Il y a trois semaines. Elle a dormi ici une nuit. Elle a voulu voir les archives de la tour, et je les lui ai ouvertes, parce qu'on a fait nos trois ans ensemble au pont de Vire et qu'elle m'a sorti de la rivière un hiver. » Il regarde ses mains. « Elle est partie de l'Ordre sans dire pourquoi. Moi, je sais pourquoi. Elle avait lu ce que je lisais. Elle n'a pas supporté de se taire. Moi, si. »" },
      { if: { has: "maitre:ortie" }, text: "« Une vieille des marais, dit Brann. Avec un panier de racines et un regard qui ne lâchait pas. Elle est passée il y a trois semaines. Elle n'a pas voulu entrer. Elle a bu à l'abreuvoir, elle a dit que l'eau était bonne encore, et elle a demandé au frère portier le chemin de Morteau. » Il fronce les sourcils. « Elle a dit aussi, en partant : *Dites au sénéchal qu'il garde mal ce qu'il garde.* Le frère me l'a répété. Il a eu tort de me le répéter. Elle avait raison. »" },
      { if: { has: "maitre:maelle" }, text: "« Maëlle Vautrin, dit Brann. La cartographe. Elle est passée il y a trois semaines, avec ses rouleaux et ses lunettes, et elle a passé deux nuits dans nos archives à recopier des cartes de la Fenne qui n'ont pas été dépliées depuis cent ans. Elle m'a posé des questions auxquelles je n'ai pas répondu. » Il se frotte la balafre. « Elle m'a dit que j'étais un menteur poli. C'est la chose la plus juste qu'on m'ait dite cette année. »" },
      "« Elle est partie vers Morteau, dit-il. Vers le lac, et la chapelle noyée. Je n'ai pas eu de nouvelles depuis. » Il hésite. « Si tu passes par là-bas, regarde l'eau avant d'y mettre les mains. »",
    ],
    choices: [{ back: "II_brann" }] },

  II_brann_edrin: { act: "II", title: "Le Grand Maître", place: "commanderie",
    text: [
      "« Edrin a quatre-vingt-dix ans, dit Brann. Il ne voit presque plus. Il dort le jour et il veille la nuit, et il ne reçoit personne. Pas même moi, la plupart du temps. » Il dit cela sans amertume, comme on dit la pluie. « Il a gardé le Sceau soixante ans. Il a le droit d'être fatigué. »",
      "« Il sait ce que je sais, et un peu plus. Le jour où il voudra te parler, il te fera appeler. Ce jour-là, ne te fais pas attendre. Il n'aura peut-être pas la force de te faire appeler deux fois. »",
    ],
    choices: [{ back: "II_brann" }] },

  II_brann_greve: { act: "II", title: "La grève de Ferrance", place: "commanderie",
    fx: { questSeen: "II_greve", ep: ["perso", 200] },
    text: [
      "Brann prend une lettre sur la pile et te la tend. Un beau papier, une belle écriture, un cachet de cire verte : *Le prévôt de Ferrance au sénéchal de l'Ordre de la Main.* Il demande dix gants gris « pour rendre à la circulation la rue des Fours, que des ouvriers séditieux occupent au mépris des franchises de la ville ».",
      "« Je n'ai pas dix gants gris, dit Brann. Et si je les avais, je ne les enverrais pas déloger des souffleurs de verre qui ont faim. L'Ordre garde les routes et le Sceau. Il ne garde pas la bourse du doyen des verriers. » Il reprend la lettre. « Le prévôt ira chercher des hommes ailleurs. Des hommes moins regardants. Si tu passes par Ferrance, et si tu peux faire en sorte que ça se termine sans morts, tu rendras service à plus de gens que tu ne crois. »",
    ],
    choices: [{ back: "II_brann" }] },

  II_brann_clou: { act: "II", title: "Le Clou", place: "commanderie",
    fx: { ep: ["perso", 500], fac: { ordre: 5 } },
    text: [
      { if: { relic: "clou" }, text: "Tu poses le Clou de Hildre sur la table du sénéchal, entre deux lettres. Il est noir, froid, plus lourd qu'il n'en a l'air. Brann ne le touche pas. Il le regarde comme on regarde une lame qu'on n'a pas vue depuis longtemps. « Ansgar te l'a donné, dit-il. À toi. Il ne l'aurait pas donné à l'Ordre. » Il ne le dit pas comme un reproche." },
      { if: { given: "clou" }, text: "Tu lui racontes l'épreuve, et le Clou que tu as tenu dans ta main, et que tu as rendu à la Forge. Brann t'écoute jusqu'au bout sans t'interrompre. « Tu l'as rendu, dit-il. Tu aurais pu l'apporter ici, et je ne t'aurais pas demandé de comptes. » Il se tait. « La Forge l'a gardé quatre cents ans. Elle saura le garder un hiver de plus. C'est peut-être mieux comme ça. »" },
      "« Une, dit-il. Une clé dont on sait où elle est. » Il pique une épingle sur Ferrance, sur la carte, et la regarde un long moment.",
    ],
    choices: [{ back: "II_brann" }] },

  II_jeton: { act: "II", title: "Le jeton de l'Ordre", place: "commanderie",
    text: [
      "Brann ouvre un tiroir de la table et en sort un jeton de fer gris, de la taille d'une grosse pièce, frappé d'une main ouverte. Il le tient un moment au creux de sa propre main avant de le poser devant toi. « Avec ça, les commanderies t'ouvriront leurs portes. Les gardes des routes te laisseront passer. Les frères t'obéiront, s'ils ont le temps. » Il ne retire pas sa main. « Et les gens du Cercle ne te parleront plus comme avant. Les deux vont ensemble. »",
      "« Je ne te le donne pas pour t'acheter, dit-il. Je te le donne parce que tu vas aller dans des endroits où le nom de l'Ordre ouvre des portes, et que je préfère qu'elles s'ouvrent. Prends-le si tu veux. Rends-le-moi si tu changes d'avis. »",
      { if: { item: "jeton_cercle" }, text: "Il voit dépasser de ta ceinture l'os poli du jeton du Cercle. Il ne dit rien. Il le regarde, simplement, et il garde la main sur le jeton gris un instant de plus." },
      { with: "coliane", text: "Coliane fait une grimace. « Si tu le prends, dit-elle, ne le montre pas aux gens de Hautgrès. Ils se souviennent de qui est venu les aider. Personne. »" },
    ],
    choices: [
      { label: "Prendre le jeton de l'Ordre", fx: { item: "jeton_ordre", fac: { ordre: 10, cercle: -5 }, conf: { coliane: -5 }, regard: { brann: "allie" }, ep: ["perso", 300] }, back: "II_brann" },
      { label: "« Pas encore. »", back: "II_brann" },
    ] },

  II_salle: { act: "II", title: "La salle des Cinq Mains", place: "commanderie", backName: "la salle des Cinq Mains",
    fx: { clue: "r2_commanderie", ep: ["perso", 600] },
    text: [
      { first: true, text: "La salle des Cinq Mains est la plus ancienne de la commanderie : une nef basse, voûtée, éclairée par cinq fenêtres étroites. Sur le mur du fond, cinq mains de bronze grandeur nature sont scellées dans la pierre, paumes ouvertes vers la salle, à hauteur d'homme. Sous chacune, une plaque porte un nom : Aldar, Orine, Thavar, Hildre, Ivo. Le bronze des paumes est usé, presque doré, à force d'avoir été touché par des générations de frères qui y posaient la main en prêtant serment." },
      { first: true, text: "Sous trois des mains seulement, un écu de pierre est accroché, peint de couleurs passées : sous Thavar, d'argent à la tour noire ; sous Hildre, un marteau et une enclume ; sous Ivo, une cloche d'or sur champ d'azur. Sous la main d'Aldar et sous celle d'Orine, il n'y a rien, juste la pierre, et deux trous où l'on voit qu'il y avait des crampons." },
      { again: true, text: "Les cinq mains de bronze, les trois écus, la lumière grise des fenêtres. Il fait froid ici même en été, dit-on." },
      "Entre la main d'Hildre et celle d'Ivo, le mur est plus lisse qu'ailleurs, plus clair, et il y a dans la pierre quatre petits trous rebouchés au plâtre, disposés en carré, de la taille de ceux qui tiennent une plaque.",
      { with: "pip", text: "Pip va de main en main, se pose dans chaque paume de bronze, et à chaque fois sa lumière baisse un peu, comme une chandelle sous une cloche. Quand il a fait les cinq, il revient se cacher dans ton col." },
      { with: "thavary", text: "Thavary s'arrête sous l'écu de sa maison, la tour noire. Elle lève la main, comme pour le toucher, et la laisse retomber. « Il était doré, quand j'étais petite, dit-elle. On l'a repeint deux fois depuis. Avec moins d'or, chaque fois. »" },
      { with: "charline", text: "Charline regarde l'écu d'Hildre, le marteau et l'enclume, longtemps. « Mon père a fait ce marteau, dit-elle. Pas celui-là, mais un pareil. Pour la salle de la Forge. Il disait que c'était le plus beau travail de sa vie. » Elle se détourne." },
    ],
    choices: [
      { label: "Poser ta main dans celle d'Hildre", hide: { seen: "II_salle_main" }, to: "II_salle_main" },
      { back: "II_hub" },
    ] },
  II_salle_main: { act: "II", title: "La main d'Hildre", place: "commanderie",
    fx: { ep: ["perso", 200] },
    text: [
      "Le bronze est froid, puis tiède. La main d'Hildre est plus petite que la tienne, une main de femme, mais les doigts sont épais et la paume calleuse : le sculpteur a pris soin de rendre les cals d'une forgeronne. Tu poses ta paume contre la sienne. Il n'arrive rien. C'est ce qui est étrange : tu t'attendais à ce qu'il arrive quelque chose.",
      { if: { mark: { min: 1 } }, text: "Ta tache noire, contre le bronze, laisse une petite buée grise qui ne s'efface pas tout de suite. Un frère qui passait dans le couloir s'est arrêté, et regarde. Il ne dit rien. Il s'en va vite." },
    ],
    choices: [{ back: "II_salle" }] },

  II_cour: { act: "II", title: "La cour d'armes", place: "commanderie", backName: "la cour d'armes",
    fx: { meet: "II_gauvard" },
    text: [
      { first: true, text: "Derrière l'écurie, une cour de terre battue, un râtelier d'épées de bois et de lames émoussées, trois mannequins de paille dont le plus vieux n'a plus de tête. Un homme d'une soixantaine d'années, sec comme un cep, fait travailler deux jeunes frères à l'épée, et il les fait travailler en leur tapant sur les doigts avec une baguette de coudrier quand ils ouvrent trop la garde. C'est Messire Gauvard, le maître d'armes. Il n'a plus que trois doigts à la main gauche, et il s'en sert mieux que les jeunes de toute la main." },
      { again: true, text: "Messire Gauvard est là, comme toujours, sa baguette sous le bras, à regarder les jeunes frères se battre contre des mannequins qui ne répondent pas." },
      { if: { seen: "II_duel_fin" }, text: "Il te salue d'un signe de tête, à peine, ce qui chez lui est un compliment." },
    ],
    choices: [
      { label: "Lui demander un assaut d'entraînement", hide: { seen: "II_duel_fin" }, to: "II_duel" },
      { label: "Regarder Thavary croiser le fer avec lui", who: "thavary", hide: { seen: "II_cour_thavary" }, to: "II_cour_thavary" },
      { back: "II_hub" },
    ] },
  II_duel: { act: "II", title: "L'assaut", place: "commanderie",
    text: [
      "Gauvard te jauge des pieds à la tête, puis il prend sur le râtelier deux lames émoussées, en lance une, et garde l'autre. « Au premier sang, ou à terre, dit-il. Pas de coup à la tête, pas de coup sous la ceinture, pas de pitié. » Il se met en garde, de trois quarts, la main mutilée derrière le dos. « Les gens qui reviennent du sud me disent tous qu'ils savent se battre. Montre-moi. »",
      { if: { arch: "guerrier" }, text: "Il regarde la façon dont tu prends la lame, et un coin de sa bouche se relève. « Une école, dit-il. Bien. Voyons laquelle. »" },
      { if: { arch: "mage" }, text: "« Pas de sortilège, ajoute-t-il, en regardant tes mains. Ici on se bat avec du fer. Le jour où quelqu'un te prendra ta magie, il te restera ça. »" },
      "Les jeunes frères ont arrêté de taper sur les mannequins. Ils se sont assis sur la barrière, comme au spectacle.",
    ],
    choices: [
      { label: "Croiser le fer avec le maître d'armes", fight: { title: "Messire Gauvard", enemies: ["II_gauvard"],
        win: { fx: { ep: ["seance", 1500], fac: { ordre: 5 } }, to: "II_duel_fin" }, lose: { fx: { ep: ["seance", 800] }, to: "II_duel_fin" } } },
      { label: "« Je préfère regarder. »", back: "II_cour" },
    ] },
  II_duel_fin: { act: "II", title: "Après l'assaut", place: "commanderie",
    fx: { pv: 6 },
    text: [
      { outcome: "win", text: "Ta lame touche son épaule, à plat, au moment où il s'y attend le moins, et Gauvard recule d'un pas, puis de deux, et baisse son arme. Les jeunes frères sur la barrière ne disent rien : ils n'ont jamais vu ça, ou pas souvent. Le vieux maître frotte son épaule. « Tu triches, dit-il. Tu triches comme quelqu'un qui a dû se battre pour de vrai. C'est la seule bonne façon de tricher. »" },
      { outcome: "lose", text: "Tu te retrouves sur le dos, dans la terre battue, la pointe émoussée de Gauvard posée sur ta gorge. Tu n'as pas vu venir le coup. Il retire sa lame et te tend sa main à trois doigts pour te relever. « Tu ouvres ta garde quand tu respires, dit-il. Tout le monde le fait. Les bons le font moins longtemps. Respire moins. »" },
      "Il reprend les lames, les remet au râtelier, et te montre en trois gestes lents un enchaînement que tu n'avais jamais vu : une feinte haute, un pas de côté, un coup au poignet. « On l'appelle *le pont de Vire*, dit-il. Brann l'a inventé, il y a trente ans, sur un pont où il était seul contre six. Ne lui dis pas que je te l'ai montré. Il dirait que c'est de la vanité. »",
      { with: "coliane", text: "Coliane, sur la barrière avec les jeunes frères, a regardé tout l'assaut en mangeant une pomme. « Pas mal, dit-elle. Pour quelqu'un qui se bat de face. »" },
    ],
    choices: [{ back: "II_cour" }] },
  II_cour_thavary: { act: "II", title: "Thavary et le maître d'armes", place: "commanderie",
    fx: { conf: { thavary: 5 }, ep: ["perso", 300] },
    text: [
      "Thavary prend une lame sur le râtelier sans demander, et se met en garde devant Gauvard. Le vieux maître la regarde, et pour la première fois depuis que tu es là, il sourit vraiment. « La garde de Thavar, dit-il. La pointe basse et le coude haut. Je ne l'avais pas vue depuis ton grand-père. »",
      "L'assaut dure longtemps. Ils se battent comme deux personnes qui parlent une langue que plus personne ne parle autour d'elles. À la fin, ni l'un ni l'autre n'a touché. Gauvard salue de l'épée, à l'ancienne. Thavary salue en retour. Quand elle revient vers toi, elle a les joues rouges et l'air plus jeune de dix ans. « Il a dit que j'avais la main de ma maison, dit-elle. Personne ne me l'avait dit depuis que la maison n'a plus de mains. »",
    ],
    choices: [{ back: "II_cour" }] },

  II_ecuries: { act: "II", title: "Les écuries", place: "commanderie", backName: "les écuries",
    fx: { meet: "II_pacome" },
    text: [
      { first: true, text: "L'écurie est longue et basse, faite pour quarante chevaux. Il y en a neuf. Ils ont l'air bien nourris, bien pansés, et inquiets. Le palefrenier, un garçon d'une quinzaine d'années qui s'appelle Pacôme, a les cheveux pleins de paille et une fourche plus grande que lui. Il parle aux chevaux plus qu'aux gens, et il a sans doute raison." },
      { again: true, text: "L'odeur chaude du foin et du crottin, les neuf chevaux, Pacôme et sa fourche." },
      { if: { clock: "voix", max: 2 }, text: "« Ils ne veulent plus boire à l'abreuvoir de la cour, dit Pacôme. Depuis une semaine. Ils s'approchent, ils reniflent, et ils reculent. Alors je leur porte de l'eau de la rivière, au seau. Quarante seaux par jour. Le cellérier dit que je suis douillet. Les chevaux, eux, ne sont pas douillets. »", else: "« Je leur porte l'eau de la rivière, maintenant, dit Pacôme. Tout le monde le fait. Depuis Frère Foulques. » Il ne dit rien de plus, et caresse le chanfrein d'une jument grise avec une application qui en dit long." },
    ],
    choices: [
      { label: "Regarder la jument grise qui ne mange plus", hide: { seen: "II_ecuries_jument" }, to: "II_ecuries_jument" },
      { label: "Laisser Gloup aller voir les chevaux", who: "gloup", hide: { seen: "II_ecuries_gloup" }, to: "II_ecuries_gloup" },
      { back: "II_hub" },
    ] },
  II_ecuries_jument: { act: "II", title: "La jument grise", place: "commanderie",
    text: [
      "La jument s'appelle Brume. Elle était au sénéchal, avant qu'il ne monte plus. Elle est couchée dans sa stalle, les flancs creusés, l'œil terne, et elle ne se relève pas quand tu entres. Pacôme s'agenouille près d'elle et lui tient la tête. « Elle a bu à l'abreuvoir avant que les autres refusent, dit-il. Une fois. La première. »",
      "Tu regardes sa bouche, ses gencives. Elles sont grises, d'un gris de cendre mouillée, et sous la langue, il y a une petite tache noire, luisante, qui n'est pas du sang.",
    ],
    choices: [
      { label: "La soigner", test: { dom: "nature", diff: -10, label: "Purger la jument", help: [{ if: { item: "eau_claire" }, v: 20 }, { with: "gloup", v: 10 }, { with: "aubin", v: 10 }] }, win: { fx: { ep: ["seance", 800], fac: { ordre: 5 }, flag: "II:brume" }, to: "II_ecuries_brume" }, lose: { fx: { ep: ["perso", 300] }, to: "II_ecuries_brume" } },
      { label: "Lui faire boire ta fiole d'eau claire", if: { item: "eau_claire" }, why: "Tu n'as pas d'eau claire.", fx: { drop: "eau_claire", ep: ["seance", 800], fac: { ordre: 10 }, flag: "II:brume" }, to: "II_ecuries_brume" },
      { back: "II_ecuries" },
    ] },
  II_ecuries_brume: { act: "II", title: "La jument grise", place: "commanderie",
    text: [
      { if: { has: "II:brume" }, text: "La jument tousse, longtemps, puis elle rend dans la paille une eau sombre et épaisse qui sent la vase. Pacôme la tient toujours. Au bout d'une heure, elle lève la tête. Au bout de deux, elle se relève, les pattes tremblantes, et elle va droit au seau d'eau de rivière, et elle boit. Pacôme pleure sans s'en cacher. « Je le dirai au sénéchal, dit-il. Je lui dirai que c'est toi. »", else: "Tu fais ce que tu sais faire. La jument respire mieux, un moment. Puis elle soupire, longuement, et pose la tête dans la paille. Elle ne mourra pas cette nuit. Tu ne sais pas pour la suivante. Pacôme reste près d'elle, et il te remercie quand même, avec la politesse terrible des enfants qui comprennent." },
    ],
    choices: [{ back: "II_ecuries" }] },
  II_ecuries_gloup: { act: "II", title: "Gloup et les chevaux", place: "commanderie",
    fx: { conf: { gloup: 5 }, ep: ["perso", 200] },
    text: [
      "Gloup roule dans l'allée de l'écurie, et les neuf chevaux tournent la tête vers lui d'un même mouvement. Pacôme lève sa fourche. Tu lui fais signe d'attendre. Gloup s'arrête devant la stalle d'un vieux hongre bai, et le hongre baisse le nez, le renifle longuement, souffle dessus. Puis il le lèche, d'un grand coup de langue.",
      "Gloup se met à trembler de partout, d'un tremblement que tu as appris à reconnaître : il est content. Pacôme baisse sa fourche. « Il sent l'eau claire, dit-il, étonné. Pas l'eau noire. Les chevaux, ils savent. »",
    ],
    choices: [{ back: "II_ecuries" }] },

  II_cellier: { act: "II", title: "L'intendance", place: "commanderie", shop: "II_intendance", backName: "l'intendance",
    fx: { meet: "II_gontran" },
    text: [
      { first: true, text: "L'intendance est une pièce voûtée sous l'hôtellerie, où il fait frais, avec des jambons pendus aux poutres, des tonneaux en rang, des sacs de farine et une odeur de pomme et de cire. Le frère cellérier s'appelle Gontran. Il est rond, rose, chauve, avec des mains de boulanger, et il tient ses comptes dans un registre si gros qu'il faut deux mains pour le fermer. Il te vend ce dont tu as besoin, au prix de l'Ordre, c'est-à-dire un peu moins cher qu'ailleurs et beaucoup moins aimablement." },
      { again: true, text: "Frère Gontran lève le nez de son registre, te reconnaît, et le baisse à nouveau." },
      { if: { item: "jeton_ordre" }, text: "Il a vu le jeton gris à ta ceinture. Il ne fait pas de remise. Mais il te donne la bonne miche, celle du dessus." },
    ],
    choices: [
      { label: "Lui demander ce qui se dit à la commanderie", hide: { seen: "II_cellier_ragots" }, to: "II_cellier_ragots" },
      { back: "II_hub" },
    ] },
  II_cellier_ragots: { act: "II", title: "Les comptes de Frère Gontran", place: "commanderie",
    fx: { ep: ["perso", 300] },
    text: [
      "Frère Gontran soupire, ferme son registre, et le rouvre aussitôt à la même page, comme s'il ne pouvait pas s'empêcher de regarder les chiffres. « Ce qui se dit ? Qu'on n'a plus d'argent. C'est vrai. Les dîmes des hautes terres ne rentrent plus depuis trois ans : la couronne d'Aldaran les garde, pour la guerre qui n'a pas encore commencé. Vel-Orin nous doit quatre ans de rentes sur ses salines. Et la Forge de Ferrance ne nous envoie plus son fer, depuis que le maître Ansgar a décidé que l'Ordre ne méritait pas son acier. »",
      "Il baisse la voix. « Et puis, il y a les lettres. Depuis l'été, il en arrive de Hautmont, du premier conseiller du roi. Belles lettres. Beau papier. Elles demandent toujours la même chose, avec des mots différents : où sont les clés du Sceau, et si l'Ordre aurait besoin d'aide pour les garder. Le sénéchal les brûle. Moi, je compte ce que coûte la cire qu'il fait fondre pour leur répondre non. »",
      { if: { item: "II_faux_clou" }, text: "Il voit dépasser de ton sac le clou noir que t'a vendu Anselme, et il éclate d'un rire qui fait trembler les jambons. « Le colporteur à moustache ? Il nous en a vendu un aussi, au frère portier, il y a deux ans. Dix sous. Il les fait faire par un cloutier de Sorbe, à la douzaine. »" },
    ],
    choices: [{ back: "II_cellier" }] },

  II_edrin: { act: "II", title: "L'escalier du Grand Maître", place: "commanderie", backName: "l'escalier du Grand Maître",
    fx: { meet: "II_hilaire" },
    text: [
      { first: true, text: "L'escalier de la tour monte en colimaçon au-delà de la salle du sénéchal, étroit, usé au milieu des marches. En haut, une porte de chêne noir, cloutée, fermée. Devant la porte, sur un tabouret, un frère très vieux dort assis, le menton sur la poitrine, un trousseau de clés sur les genoux. C'est Frère Hilaire, le portier du Grand Maître. Il se réveille quand tu montes la dernière marche, et il se lève, ce qui lui prend un certain temps." },
      { first: true, text: "« Le Grand Maître ne reçoit pas, dit-il. Il ne reçoit personne. » Il dit cela gentiment, comme on dit à un enfant qu'il fait nuit. Derrière la porte, tu entends une respiration lente, un raclement de chaise, puis une voix très vieille, presque un souffle, qui dit quelque chose que tu ne comprends pas. Frère Hilaire tend l'oreille, et répète, mot pour mot : « *Demandez ce qu'est devenue la main.* »" },
      { again: true, text: "La porte noire, le tabouret, Frère Hilaire qui dort assis. Il ne se réveille pas, cette fois, ou il fait semblant. Derrière la porte, une toux sèche, et le silence." },
    ],
    choices: [
      { label: "« Je l'ai vue. Elle était fendue. »", hide: { seen: "II_edrin_main" }, to: "II_edrin_main" },
      { back: "II_hub" },
    ] },
  II_edrin_main: { act: "II", title: "La porte close", place: "commanderie",
    fx: { ep: ["perso", 400] },
    text: [
      "Frère Hilaire te regarde avec une drôle d'expression, puis il colle sa bouche à la fente de la porte et répète ce que tu as dit. Un long silence. La chaise racle encore. Puis la voix, de l'autre côté, plus près cette fois, juste derrière le bois : « *Et la lumière ? Est-ce qu'il y avait une lumière ?* »",
      { with: "pip", text: "Pip est sorti de ton col. Il s'approche de la porte, et sa lumière passe par la fente, mince comme un fil, sous le battant. De l'autre côté, il y a un bruit, comme quelqu'un qui tombe à genoux. Puis rien. Frère Hilaire s'est signé de la main ouverte, deux fois." },
      { without: "pip", text: "Tu dis : oui. Il y avait une lumière. De l'autre côté, il y a un long soupir, et puis rien. Frère Hilaire attend, attend encore, puis se rassoit sur son tabouret. « Il est fatigué, dit-il. Revenez à l'hiver. Il reçoit, parfois, l'hiver. »" },
      "Tu redescends l'escalier. En bas, Brann t'attend, debout dans l'embrasure de sa salle. Il a tout entendu. Il ne dit rien, et il te laisse passer.",
    ],
    choices: [{ back: "II_hub" }] },

  II_hotellerie: { act: "II", title: "L'hôtellerie des pèlerins", place: "commanderie", backName: "l'hôtellerie",
    text: [
      { first: true, text: "L'hôtellerie est une longue salle sous les combles, avec vingt lits de sangles, des couvertures grises et un poêle de fonte qu'un frère allume à la tombée du jour. Les pèlerins y dorment pour rien, les voyageurs pour un sou. Ce soir, il y a trois pèlerins qui ronflent, un marchand de laine qui compte son argent sous sa couverture, et un lit libre près de la fenêtre, d'où l'on voit l'Anse briller sous la lune." },
      { again: true, text: "Le même lit près de la fenêtre, la même couverture grise qui sent la lessive et le cheval. Le poêle ronfle." },
      { if: { clock: "voix", min: 3 }, text: "On a mis une bassine d'eau bénite à la porte, et chaque pèlerin y trempe les doigts en entrant. Personne ne la boit. Personne ne regarde dedans." },
    ],
    choices: [
      { label: "Dormir jusqu'au matin", fx: { pv: "max", rest: true, until: 7, gold: -1 }, back: "II_hub" },
      { back: "II_hub" },
    ] },

  II_puits_noir: { act: "II", title: "Le puits du cloître", place: "commanderie",
    fx: { ep: ["perso", 500] },
    text: [
      { first: true, text: "Le puits du cloître est au milieu du préau, sous un petit toit de tuiles moussues. Hier encore, d'après les frères, l'eau y était claire et froide. Ce matin, le seau est remonté plein d'une eau noire et tiède, avec une odeur de vase et de feuilles mortes. Le frère qui l'a tiré a lâché la corde. Le seau est retombé au fond, et personne n'est allé le rechercher." },
      { again: true, text: "La toile goudronnée, les pierres posées dessus, et ce silence autour du puits que les frères contournent sans rien dire." },
      "Tu soulèves un coin de la toile. L'eau est là, à trois toises sous la margelle, immobile, lisse comme une plaque d'ardoise. Tu ne vois pas ton reflet. Tu vois le ciel, et le toit de tuiles, et rien à la place de ta tête.",
      { if: { has: "passe:aide" }, text: "À Saint-Gilles, c'est comme ça que ça avait commencé : le puits du temple, d'abord. Puis la fontaine. Tu avais porté les malades, un par un, jusqu'à ce que le temple soit plein, et tu te souviens de leur soif. Ils réclamaient tous de l'eau. Tu n'avais que celle-là." },
      { if: { has: "passe:fui" }, text: "À Saint-Gilles, c'est comme ça que ça avait commencé. Le puits, d'abord. Tu étais parti{e} la semaine d'après. Tu as appris plus tard, par un marchand, combien étaient restés. Tu regardes l'eau noire, et tu comptes sans le vouloir." },
      { if: { has: "passe:profite" }, text: "À Saint-Gilles, c'est comme ça que ça avait commencé, et c'est à ce moment-là que les terres s'étaient mises à se vendre pour rien. Tu te souviens d'avoir pensé, en voyant l'eau tourner : *maintenant, ça va baisser.* Tu te souviens d'avoir eu raison." },
      { with: "aubin", text: "Frère Aubin s'est arrêté à trois pas du puits. Il ne s'approche pas plus. Il a les poings serrés si fort que ses jointures sont blanches. « C'est comme ça qu'elle est venue chez nous aussi, dit-il. Par le puits du moutier. Une nuit. Le lendemain, le lac. »" },
    ],
    choices: [
      { label: "Laisser retomber la toile", back: "II_hub" },
    ] },

  II_abreuvoir: { act: "II", title: "L'abreuvoir", place: "commanderie",
    fx: { clue: "v_commanderie", ep: ["seance", 1000] },
    text: [
      { first: true, text: "On l'a trouvé à l'aube, à la relève de la garde. Frère Foulques, cinquante ans, vingt-huit ans de gant gris, le meilleur archer de la commanderie. Il était à genoux devant l'abreuvoir de la cour, le visage dans l'eau. L'abreuvoir n'a pas un pied de profondeur. Il ne s'était pas débattu." },
      { first: true, text: "Brann est là quand tu arrives, debout près de l'abreuvoir vidé, raclé jusqu'à la pierre, avec un seau à la main dont il ne sait plus quoi faire. Les frères ont allongé Foulques sur une civière, sous le tilleul, et ils ont croisé ses mains sur sa poitrine, parce que c'est ainsi qu'on les avait trouvées : croisées, déjà, comme celles de quelqu'un qui écoute un sermon. Il souriait. Ils n'ont pas réussi à lui fermer la bouche." },
      { again: true, text: "L'abreuvoir vide, raclé jusqu'à la pierre. Les frères passent à côté sans le regarder." },
      "« Il disait qu'il entendait sa femme, dit Brann sans se retourner. Morte il y a dix ans. Depuis une semaine, il disait qu'elle l'appelait, la nuit, dans l'eau de la cour. On a cru qu'il vieillissait. » Il pose le seau. « Elle est entrée chez nous. Dans la maison de l'Ordre. Par un abreuvoir. »",
      { with: "coliane", text: "Coliane s'approche de la civière, regarde le visage du mort longtemps, et lui ferme les yeux du pouce, ce que personne n'avait pensé à faire. « Il est content », dit-elle. C'est la chose la plus terrible que tu l'aies jamais entendue dire." },
      { with: "gloup", text: "Gloup s'est caché sous la civière. Il tremble. Il ne sortira pas avant qu'on ait emporté le corps." },
    ],
    choices: [
      { label: "Aider à porter le corps à la chapelle", fx: { fac: { ordre: 5 }, regard: { brann: "allie" } }, back: "II_hub" },
      { label: "Laisser les frères à leur mort", back: "II_hub" },
    ] },
});

// ==================================================================== Ferrance: the road, the city, Charline
add({
  IIF_route_fumee: { act: "II", title: "Sous la fumée", place: null,
    text: [
      "La route de Ferrance quitte le Val par une gorge où l'Anse coule vite, noire de reflets, entre des parois de schiste. Puis la gorge s'ouvre, et l'air change. Il sent le soufre, le fer chaud, le charbon. Le ciel, devant, est d'un brun sale, et il y tombe une neige fine et grise qui n'est pas de la neige : de la cendre, qui se pose sur tes manches et s'écrase en traînées quand tu l'essuies.",
      "Le long de la route, des terrils de scories luisent comme du verre brisé. Des enfants y grimpent avec des paniers, pieds nus, et fouillent les crassiers à la recherche de morceaux de métal que les fondeurs ont laissé passer. Une petite fille t'en montre un, gros comme une noisette, en riant. « Du cuivre ! dit-elle. Un denier ! » Elle a les mains noires jusqu'aux coudes et des yeux très clairs.",
      { with: "charline", text: "Charline marche plus vite, la tête basse. « J'ai fait ça, dit-elle en montrant les crassiers. Toute mon enfance. Mon père disait que c'était pour apprendre à reconnaître les métaux. C'était pour avoir des deniers. »" },
    ],
    choices: [
      { label: "Donner un sou à la petite fille", fx: { gold: -1, ep: ["perso", 100] }, back: ROUTE },
      { label: "Reprendre la route", back: ROUTE },
    ] },

  IIF_portes: { act: "II", title: "Ferrance", place: "ferrance", hub: true, routes: true, backName: "la place des Portes, à Ferrance",
    fx: { clock: { voix: 1 }, ep: ["seance", 1000] },
    text: [
      { first: true, text: "Ferrance est une ville qui fait du bruit. Avant même de passer la porte, tu l'entends : des centaines de marteaux qui frappent sans s'accorder, le souffle des soufflets, le grondement des fours, le cri des charretiers, le chuintement du fer rouge qu'on trempe. Les murailles sont noires de suie, et au-dessus des toits, cent cheminées crachent une fumée qui ne se disperse jamais tout à fait, et qui fait au-dessus de la ville un deuxième ciel, plus bas que l'autre." },
      { first: true, text: "La place des Portes est le cœur de la ville basse. Au nord, sur une butte, une halle immense au toit de cuivre vert-de-grisé, d'où sort une colonne de fumée plus haute que les autres : la Forge-Mère. À l'ouest, au bout d'une rue montante, la façade blanche et sage d'un bâtiment à colonnes qui a l'air d'avoir été posé là par erreur : l'Athénée du Cercle. Et à l'est, la rue des Fours, d'habitude la plus bruyante, aujourd'hui silencieuse." },
      { again: true, text: "La place des Portes, la cendre qui tombe, le vacarme des forges. Les gens de Ferrance marchent vite, la tête rentrée dans les épaules, et ne se regardent pas." },
      { when: "night", text: "La nuit, Ferrance ne dort pas : les fours restent allumés, et leurs gueules rouges éclairent les rues par en dessous, comme si la ville était posée sur une braise. Les ombres des passants sont longues et tremblantes sur les murs." },
      { if: { all: [{ quest: "II_greve" }, { is: { greve: "accord" } }] }, text: "Dans la rue des Fours, les cheminées fument à nouveau. On entend les verriers chanter en soufflant, une chanson à deux temps, très vieille, que tu n'avais pas entendue en arrivant." },
      { if: { is: { greve: "sang" } }, text: "La rue des Fours est vide. Les portes des ateliers sont clouées. Sur le pavé, on a jeté du sable, mais on voit encore où." },
      { with: "charline", text: "Charline garde la tête baissée sur la place. On la reconnaît, ici : deux femmes se poussent du coude en la voyant, un forgeron crache par terre. Elle ne répond à personne. Ses mains, dans ses manches, sont serrées." },
    ],
    choices: [
      { label: "La Forge-Mère, sur sa butte", to: "IIF_forge" },
      { label: "L'Athénée du Cercle", to: "IIF_athenee" },
      { label: "La rue des Fours, où les souffleurs de verre font grève", to: "IIF_souffleurs" },
      { label: "L'armurerie de Maître Oudard", to: "IIF_armurier" },
      { label: "L'officine de l'apothicaire Cassagne", to: "IIF_apothicaire" },
      { label: "L'auberge du Soufflet", to: "IIF_auberge" },
      { label: "La lampisterie de la rue Basse, où loge Charline", hide: { any: [{ not: { met: "charline" } }, { present: "charline" }, { gone: "charline" }] }, to: "IIF_logis" },
      { label: "Le Pont-aux-Scories, à la nuit", hide: { any: [{ not: { has: "IIF:rendezvous" } }, { quest: "II_livre" }] }, to: "IIF_pont" },
    ] },

  IIF_auberge: { act: "II", title: "L'auberge du Soufflet", place: "ferrance", backName: "l'auberge du Soufflet",
    taverne: { mise: 2, adversaire: "un fondeur de la rue Haute" },
    text: [
      { first: true, text: "Le Soufflet est une salle basse où l'on boit debout, au comptoir, entre deux coulées. Les murs sont noirs, les tables collantes, la bière tiède et amère. Il y a toujours du monde : des fondeurs aux bras brûlés, des charretiers, des apprentis qui dépensent leur premier denier. La patronne, Gerberte, une femme forte aux cheveux gris tirés en arrière, sert la bière d'une main et encaisse de l'autre, et elle sait tout ce qui se passe à Ferrance une heure avant que ça se passe." },
      { again: true, text: "Le Soufflet, sa fumée, ses fondeurs. Gerberte te reconnaît d'un mouvement de menton." },
      { when: "night", text: "La nuit, au fond de la salle, quelques hommes jouent à la Chandelle, une bougie plantée au milieu de la table, des pièces de cuivre empilées devant eux." },
    ],
    choices: [
      { label: "Écouter ce qui se dit au comptoir", hide: { seen: "IIF_rumeurs" }, to: "IIF_rumeurs" },
      { label: "Prendre une chambre pour la nuit (2 sous)", fx: { gold: -2, pv: "max", rest: true, until: 7 }, to: "IIF_chambre" },
      { back: "IIF_portes" },
    ] },
  IIF_rumeurs: { act: "II", title: "Le comptoir du Soufflet", place: "ferrance",
    fx: { ep: ["perso", 300], meet: "II_gerberte" },
    text: [
      "Gerberte pose une chope devant toi sans que tu l'aies demandée, et la note sur son ardoise. « Tu veux savoir quoi ? La grève, la Forge, ou l'Athénée ? Ici, il n'y a que ça. » Elle n'attend pas ta réponse. « Les souffleurs tiennent depuis dix jours. Le doyen Bastide a fait venir des gros bras de Hautmont, des gens qui n'ont pas de tablier mais qui ont des gourdins. Ça va finir mal. »",
      "« Ansgar n'a plus vendu une barre de fer à l'Ordre depuis deux ans. Il dit qu'ils ont oublié ce qu'ils gardent. Ça ne l'empêche pas de garder, lui. Il a fait murer la porte du fond de la Forge, celle qui donne sur la chambre d'Hildre, et il a mis deux compagnons devant, jour et nuit. » Elle essuie le comptoir. « Et sa fille est revenue. La rousse. Celle qui a mis le feu. Elle loge à la lampisterie, rue Basse. Il ne la voit pas. Elle ne le voit pas. Toute la ville les regarde ne pas se voir. »",
      "« À l'Athénée, on a volé un livre enchaîné. Le recteur Corbin fait la tête d'un homme qui a perdu son pantalon. Les copistes disent que ce n'est pas le livre qui l'inquiète. C'est ce qu'il y a dedans. »",
    ],
    choices: [{ back: "IIF_auberge" }] },
  IIF_chambre: { act: "II", title: "Une chambre au Soufflet", place: "ferrance",
    text: [
      "La chambre est sous le toit, si près de la cheminée de la Forge-Mère que le mur est tiède au toucher. Le lit est dur, les draps propres. Toute la nuit, Ferrance frappe autour de toi, et tu finis par dormir dans le vacarme comme on dort dans le bruit de la pluie.",
      { with: "pip", text: "Pip dort sur le rebord de la fenêtre, tourné vers les gueules rouges des fours. Sa lumière bat au même rythme qu'eux, lentement." },
      { if: { mark: { min: 2 } }, text: "Tu rêves d'eau. Une eau tiède qui monte dans la chambre, sans bruit, jusqu'au lit, jusqu'à ta bouche, et dans laquelle quelqu'un chante ton nom avec une grande douceur. Tu te réveilles à l'aube la bouche sèche, la paume brûlante." },
    ],
    choices: [{ label: "Descendre dans la ville", back: "IIF_portes" }] },

  IIF_armurier: { act: "II", title: "L'armurerie Oudard", place: "ferrance", shop: "II_armurier", backName: "l'armurerie Oudard",
    text: [
      { first: true, text: "Maître Oudard est un petit homme bossu, aux bras énormes, qui travaille l'acier de la Forge-Mère depuis quarante ans. Sa boutique est une pièce étroite où les lames pendent au plafond comme des jambons, chacune à sa ficelle, et tintent quand on ouvre la porte. Il ne vend rien sans l'avoir fait essayer. Il regarde comment tu tiens une épée avant de t'en dire le prix, et le prix change selon ce qu'il voit." },
      { again: true, text: "Les lames qui tintent au plafond. Maître Oudard lève les yeux de sa meule." },
      { with: "charline", text: "Oudard reconnaît Charline. Il pose sa lame. « Petite, dit-il. Ça fait combien ? Six ans ? » Elle hoche la tête. Il n'ajoute rien, mais il lui fait le prix des gens de la Forge." },
    ],
    choices: [{ back: "IIF_portes" }] },

  IIF_apothicaire: { act: "II", title: "L'officine Cassagne", place: "ferrance", shop: "II_apothicaire", backName: "l'officine de l'apothicaire",
    text: [
      { first: true, text: "L'officine de Maître Fulbert Cassagne sent le camphre, la cire et l'éther. Des bocaux de verre de la rue des Fours, alignés sur des étagères jusqu'au plafond, contiennent des racines, des poudres, des choses qui ont eu des yeux. L'apothicaire est un homme long et maigre aux doigts tachés de jaune, qui parle bas et vite, comme s'il dictait une ordonnance." },
      { again: true, text: "Les bocaux, l'odeur de camphre. Maître Cassagne te salue sans lever le nez de son mortier." },
      "« Les brûlures, c'est ma spécialité, dit-il. Dans une ville de forges, on ne vit pas d'autre chose. J'ai un baume au suif de mouton et à la racine de consoude qui calme les vieilles brûlures, celles qui ne guérissent plus mais qui font encore mal. Le maître Ansgar m'en achète un pot par mois. Il le paie, et il ne vient jamais le chercher : c'est un de ses apprentis qui vient. »",
    ],
    choices: [
      { label: "« Ansgar a encore mal ? »", hide: { seen: "IIF_apothicaire_ansgar" }, to: "IIF_apothicaire_ansgar" },
      { back: "IIF_portes" },
    ] },
  IIF_apothicaire_ansgar: { act: "II", title: "Les mains d'Ansgar", place: "ferrance",
    fx: { questSeen: "II_ansgar", ep: ["perso", 200] },
    text: [
      "Cassagne pose son pilon. « Ses mains ont brûlé il y a six ans, dit-il. Jusqu'à l'os. Les doigts se sont soudés, les tendons ont fondu. Il ne peut plus rien tenir. Et ça lui fait mal tous les jours, et toutes les nuits encore plus. » Il baisse la voix. « Le baume, il ne le met pas. Son apprenti me l'a dit. Il le range dans un coffre, pot après pot. Soixante-dix pots. Il les achète, et il ne les met pas. »",
      "« Il y a des gens qui gardent leur douleur, dit l'apothicaire. Comme une dette. Lui, il la garde pour quelqu'un. » Il reprend son pilon. Il n'a pas besoin de dire pour qui.",
    ],
    choices: [{ back: "IIF_apothicaire" }] },

  IIF_athenee: { act: "II", title: "L'Athénée du Cercle", place: "ferrance", backName: "le péristyle de l'Athénée",
    fx: { ep: ["perso", 300] },
    text: [
      { first: true, text: "L'Athénée est tout en pierre blanche, et c'est la seule chose blanche de Ferrance : on la lave chaque semaine, à grande eau, et la suie y revient chaque semaine. Six colonnes, un fronton gravé d'un cercle brisé, un perron de douze marches. Sous le péristyle, des étudiants en robe bleue discutent en se tenant à distance des colonnes pour ne pas salir leurs manches." },
      { first: true, text: "En haut des marches, une jeune femme rousse se dispute avec le portier. Elle est petite, mince, les cheveux tirés en une natte épaisse qui lui bat le dos, le visage criblé de taches de rousseur, et sur la joue gauche et le cou, une large cicatrice de brûlure, lisse et brillante. Elle tient un carnet serré contre sa poitrine, et elle parle fort. « Je ne demande pas à entrer à l'Athénée, je demande à consulter un registre de la ville ! Il appartient à la ville ! » Le portier, impassible, secoue la tête. « Pas vous, mademoiselle Hildrand. Ordre du recteur. »" },
      { again: true, text: "Le perron blanc, les colonnes salies, les étudiants en bleu. Le portier te salue d'un signe de tête." },
      { with: "charline", text: "Charline s'arrête au pied du perron et ne monte pas. « Je t'attends là, dit-elle. Le portier a des ordres. Et moi j'ai de la mémoire. »" },
    ],
    choices: [
      { label: "Aller vers la jeune femme rousse", hide: { any: [{ met: "charline" }, { present: "charline" }] }, to: "IIF_charline" },
      { label: "Demander à voir le recteur", to: "IIF_corbin" },
      { label: "La bibliothèque", to: "IIF_bibliotheque" },
      { back: "IIF_portes" },
    ] },

  IIF_charline: { act: "II", title: "Charline Hildrand", place: "ferrance",
    fx: { met: "charline", ep: ["perso", 300] },
    text: [
      "Elle se retourne vers toi, prête à te mordre, puis elle voit tes mains, ton sac, tes bottes pleines de la poussière de la route. Elle se calme d'un coup. « Vous n'êtes pas d'ici, dit-elle. Tant mieux. Ici, tout le monde sait qui je suis, et tout le monde a une opinion. » Elle tend la main, une main fine, tachée d'encre, avec une petite brûlure ronde sur chaque phalange. « Charline Hildrand. Renvoyée du Cercle l'an dernier. Fille du maître de la Forge. Vous avez dû entendre parler de moi, si vous êtes passé{e} au Soufflet. »",
      "Elle descend les marches avec toi. « Ils m'ont renvoyée parce que je lisais ce qu'on ne lit pas, dit-elle. Et parce que j'ai mis le feu à un lutrin. Un petit feu. Le lutrin l'avait mérité. » Elle rit, d'un rire bref. « Je veux voir le registre des fondations de Ferrance. Il est aux archives, au fond de l'Athénée. Il y a une page arrachée. Je veux savoir laquelle, et par qui. »",
      { if: { has: "passe:cercle" }, text: "Elle te regarde mieux. « Vous avez été copiste, vous. Ça se voit à vos doigts : le cal du majeur, là. » Elle sourit pour la première fois. « Alors vous savez ce que c'est, recopier des livres qu'on n'a pas le droit de finir. »" },
      { if: { mark: { min: 1 } }, text: "Ses yeux tombent sur ta paume. Elle ne recule pas. Elle regarde la tache noire avec une curiosité franche, presque gourmande, comme on regarde un problème. « Ça vous fait mal ? » demande-t-elle. Et elle a l'air de vraiment vouloir savoir." },
      { with: "pip", text: "Pip s'est approché d'elle sans que tu le lui demandes. Il tourne autour de sa natte, se pose sur son épaule, juste au-dessus de la cicatrice. Charline ne bouge pas. Elle dit, très doucement : « Bonjour, toi. » Pip brille." },
    ],
    choices: [
      { label: "« Viens avec nous. Je vais à la Forge, et plus loin après. »", big: true, to: "IIF_charline_join" },
      { label: "« Parle-moi de la Forge et de ton père. »", hide: { seen: "IIF_charline_forge" }, to: "IIF_charline_forge" },
      { label: "« Je repasserai. »", back: "IIF_athenee" },
    ] },
  IIF_charline_forge: { act: "II", title: "Ce que dit Charline", place: "ferrance",
    fx: { ep: ["perso", 300] },
    text: [
      "Charline s'assied sur la dernière marche du perron, malgré la suie. « J'avais treize ans, dit-elle. Mon père me laissait traîner dans la Forge, le soir, quand les compagnons étaient partis. Un soir, j'ai fait une chose que je ne savais pas que je pouvais faire. J'ai regardé le feu du foyer, et il est venu vers moi. Comme un chien qu'on appelle. » Elle tend la main, paume en l'air, et pendant un instant, une flamme bleue, petite comme une flamme de chandelle, se tient dans sa paume. Elle referme le poing. La flamme s'éteint.",
      "« Il est venu trop fort. La Forge a pris feu. Mon père est entré me chercher, et il m'a sortie, et il a éteint les poutres avec ses mains, parce qu'il n'avait rien d'autre. » Elle regarde ses propres mains. « Il ne m'a jamais rien reproché. Jamais. Pas un mot. Il m'a envoyée au Cercle pour qu'on m'apprenne à ne plus faire ça. Et il ne m'a plus jamais parlé de feu. Il ne m'a plus parlé de rien. »",
      "« La Forge garde le Clou, dit-elle encore. Pour l'avoir, il faut passer l'épreuve : le feu, le poids, le nom. Mon père la fait passer à qui la demande, et personne ne la réussit depuis cent ans. Les gens croient que c'est un rite pour les compagnons. Ce n'est pas un rite. C'est une porte. »",
    ],
    choices: [
      { label: "« Viens avec nous. »", big: true, to: "IIF_charline_join" },
      { label: "« Je repasserai. »", back: "IIF_athenee" },
    ] },
  IIF_charline_join: { act: "II", title: "Charline vient", place: "ferrance",
    fx: { join: "charline", flag: "charline:rejoint", ep: ["seance", 1000] },
    text: [
      "Charline te regarde longtemps, comme on regarde un livre dont on a lu la première page et dont on ne sait pas encore si on l'aimera. Puis elle range son carnet dans sa besace, une grosse besace de cuir pleine de livres qui la fait pencher d'un côté. « D'accord, dit-elle. Mais je vous préviens : je ne suis pas une servante, je ne suis pas un bâton de pèlerin, et je ne suis pas une lanterne. Si vous avez besoin de feu, demandez-le-moi. Ne me dites pas d'avoir peur de moi. Tout le monde me l'a déjà dit. »",
      "Elle descend les marches de l'Athénée sans se retourner, et le portier, en haut, a l'air soulagé.",
      { with: "coliane", text: "Coliane la toise, de la natte aux bottes. « Tu sais te battre ? » Charline lève la main. Une flamme bleue y danse, une seconde. « Non, dit-elle. Je sais brûler. » Coliane hoche la tête, lentement. C'est presque du respect." },
      { with: "gloup", text: "Gloup s'est arrêté net en voyant la flamme. Il recule. Charline s'en aperçoit, et elle s'accroupit devant lui, les mains ouvertes, vides, sans feu. « Je ne te ferai rien, dit-elle. Je te le promets. Moi aussi, on m'a regardée comme ça. »" },
    ],
    choices: [{ label: "Descendre vers la place des Portes", back: "IIF_portes" }] },
  IIF_logis: { act: "II", title: "La lampisterie de la rue Basse", place: "ferrance",
    text: [
      "La lampisterie est fermée depuis la mort du lampiste, et sa veuve loue l'étage. On y monte par un escalier extérieur, raide comme une échelle. La chambre de Charline est minuscule : un lit, une table, et partout des livres, empilés, ouverts, marqués de bouts de papier. Une chandelle brûle sur la table, sans mèche. Elle brûle quand même.",
      "Charline lève les yeux de son carnet. « Vous revoilà, dit-elle. Vous avez réfléchi ? »",
    ],
    choices: [
      { label: "« Viens avec nous. »", big: true, to: "IIF_charline_join" },
      { label: "« Pas encore. »", back: "IIF_portes" },
    ] },
});

// ==================================================================== the Forge-Mère, Ansgar and the trial of the Nail
add({
  IIF_forge: { act: "II", title: "La Forge-Mère", place: "ferrance", backName: "la halle de la Forge-Mère",
    text: [
      { first: true, text: "La Forge-Mère n'est pas une forge. C'est une église du fer. Sous la halle au toit de cuivre, haute comme une nef, douze foyers brûlent en cercle autour d'une enclume de pierre noire, plus grande qu'un autel, que personne ne frappe jamais. Autour des foyers, une soixantaine de compagnons travaillent torse nu, en tabliers de cuir, et le vacarme est tel qu'ils ne se parlent que par gestes. La chaleur te prend au visage dès la porte, et l'air a le goût du métal." },
      { first: true, text: "Au fond de la halle, sur une estrade, dans un fauteuil de bois noirci, un vieil homme regarde travailler ses compagnons. Il est grand, massif, la barbe blanche brûlée par plaques, et il garde les mains posées sur les accoudoirs, enfoncées dans de gros gants de cuir dont les doigts ne plient pas. C'est Ansgar Hildrand, maître de la Forge-Mère. Il ne se lève pas. Il te regarde venir à travers les étincelles." },
      { again: true, text: "Les douze foyers, le vacarme, la chaleur. Ansgar sur son estrade, immobile, les mains gantées sur les accoudoirs." },
      { if: { has: "II:charbon" }, text: "Un compagnon te reconnaît, ou reconnaît la suie qui t'est restée aux ongles : « C'est toi qui as sorti Malo de l'ornière ? » Il te frappe l'épaule d'une main noire. Ici, ça vaut un laissez-passer." },
      { with: "charline", text: "Charline s'est arrêtée sur le seuil. Les compagnons les plus proches ont cessé de frapper, l'un après l'autre, et le silence s'étend de foyer en foyer jusqu'à l'estrade. Ansgar ne bouge pas. Il ne regarde pas sa fille. Il regarde un point, quelque part au-dessus de sa tête. Puis il fait un geste du menton, et les marteaux reprennent." },
      { if: { relic: "clou" }, text: "L'enclume noire, au centre, a trois trous carrés. Ils sont vides tous les trois." },
      { if: { given: "clou" }, text: "Le Clou est retourné dans son trou, au centre de l'enclume noire. Les compagnons, en passant devant, le touchent du bout des doigts, comme on touche une relique." },
    ],
    choices: [
      { label: "Parler au maître Ansgar", to: "IIF_ansgar" },
      { label: "T'approcher de l'enclume de pierre noire", hide: { seen: "IIF_enclume" }, to: "IIF_enclume" },
      { label: "Demander l'épreuve du Clou", big: true, hide: { any: [{ not: { seen: "IIF_ansgar" } }, { has: "IIF:clou" }] }, fx: { unflag: ["IIF:feu_ok", "IIF:poids_ok", "IIF:nom_ok"] }, to: "IIF_epreuve" },
      { label: "Les mains d'Ansgar", hide: { any: [{ not: { has: "quete-vue:II_ansgar" } }, { quest: "II_ansgar" }] }, to: "IIF_ansgar_mains" },
      { label: "Te glisser dans la Forge-Mère à la nuit, pour prendre le Clou", hide: { any: [{ has: "IIF:clou" }, { has: "IIF:vol_tente" }] }, to: "IIF_vol" },
      { back: "IIF_portes" },
    ] },

  IIF_enclume: { act: "II", title: "L'enclume noire", place: "ferrance",
    fx: { clue: "r2_forge", ep: ["perso", 600] },
    text: [
      "De près, l'enclume n'est pas taillée : elle a été coulée, d'une seule pièce, dans une pierre noire et lourde qui ressemble à du fer et n'en est pas. Elle est tiède, alors que personne ne la chauffe. Sa table est lisse comme un miroir, sans une marque de marteau, et elle porte trois trous carrés, alignés, de la taille d'un clou de charpente.",
      "Deux des trous sont vides, propres, et si profonds que tu n'en vois pas le fond. Dans le troisième, il y a un clou. On n'en voit que la tête, une tête carrée de fer noir, un peu bombée, enfoncée au ras de la pierre. Tout autour, la pierre est usée, polie, comme si des mains l'avaient caressée pendant des siècles.",
      { with: "charline", text: "Charline ne s'approche pas de l'enclume. « Quand j'étais petite, dit-elle, je croyais que les deux trous vides, c'étaient les clous qu'Hildre avait perdus. Mon père m'a dit qu'ils n'avaient jamais été là. Qu'ils étaient ailleurs. Que chaque trou attendait le sien. »" },
      { if: { mark: { min: 1 } }, text: "Ta paume te démange. Elle te démange fort, et tu as envie, très envie, de poser la main à plat sur la tête du clou. Tu ne le fais pas. Tu sens que si tu le faisais, quelque chose, quelque part très loin, le sentirait aussi." },
    ],
    choices: [{ back: "IIF_forge" }] },

  IIF_ansgar: { act: "II", title: "Ansgar Hildrand", place: "ferrance", backName: "l'estrade d'Ansgar",
    fx: { meet: "ansgar", ep: ["perso", 400] },
    text: [
      { first: true, text: "Tu montes sur l'estrade. De près, Ansgar est plus vieux que de loin : soixante-dix ans au moins, un visage creusé, des yeux bleu pâle délavés par le feu. Une moitié de sa barbe a brûlé il y a longtemps et n'a jamais repoussé. Il te regarde de bas en haut, puis de haut en bas, comme il regarderait une barre de fer pour savoir si elle a une paille." },
      { first: true, text: "« L'Ordre t'envoie, dit-il. Ou le Cercle. Ou tu viens pour ton compte, et c'est pire. Tout le monde veut le Clou, depuis l'été. Un homme de Hautmont est venu avec un coffre d'or. Un homme du Cercle est venu avec un sermon. Brann m'a écrit six lettres. » Il a une voix grave, éraillée, qui porte malgré le vacarme sans qu'il ait besoin de crier. « Je leur ai dit à tous la même chose. Le Clou est à la Forge. La Forge le donne à qui passe l'épreuve. Pas à qui le demande. »" },
      { again: true, text: "Ansgar tourne la tête vers toi. Il attend que tu parles. Il a tout son temps." },
      { if: { item: "II_faux_clou" }, text: "Tu sors de ton sac le clou d'Anselme et tu le poses sur l'accoudoir. Ansgar le regarde, et il rit, un rire énorme qui fait se retourner trois compagnons. « Le moustachu ? Il en vend partout. Il en a vendu un à l'évêque de Sorbe. » Il reprend son souffle. « Garde-le. Il a au moins appris à quelqu'un à quoi ressemble le vrai. »" },
      { with: "charline", text: "Charline est restée au pied de l'estrade. Ansgar ne la regarde pas. Quand il parle, il parle plus fort, comme pour qu'elle entende sans avoir à lui parler à elle." },
    ],
    choices: [
      { label: "« Qu'est-ce que l'épreuve ? »", hide: { seen: "IIF_ansgar_epreuve" }, to: "IIF_ansgar_epreuve" },
      { label: "« Qu'est-ce que le Clou tient, au juste ? »", hide: { seen: "IIF_ansgar_clou" }, to: "IIF_ansgar_clou" },
      { back: "IIF_forge" },
    ] },
  IIF_ansgar_epreuve: { act: "II", title: "L'épreuve", place: "ferrance",
    text: [
      "« Trois épreuves, dit Ansgar. Le feu, le poids, le nom. Hildre les a faites pour ceux qui viendraient après elle. Le feu, pour savoir si tu tiens quand ça brûle. Le poids, pour savoir si tu portes ce qu'on te donne à porter. Le nom, pour savoir si tu sais pour qui tu le portes. Deux sur trois, et la Forge te donne le Clou. Moins, et tu repars, et tu reviens à la coulée suivante si tu as le cœur de recommencer. »",
      "« Personne ne l'a réussie depuis mon arrière-grand-père. Je ne dis pas ça pour te décourager. Je le dis parce que c'est vrai. » Il se penche un peu en avant. « Et je te préviens d'une chose. Si tu as le Clou, tu en fais ce que tu veux. Tu le gardes, tu le donnes, tu le jettes dans l'Anse. La Forge ne le reprend pas de force. Elle ne l'a jamais fait. C'est comme ça qu'Hildre l'a voulu. »",
    ],
    choices: [{ back: "IIF_ansgar" }] },
  IIF_ansgar_clou: { act: "II", title: "Ce que tient le Clou", place: "ferrance",
    fx: { ep: ["perso", 300] },
    text: [
      "Ansgar regarde longtemps l'enclume noire, en bas, au milieu des foyers. « Les gens croient que c'est un clou de cercueil, dit-il. Qu'on l'a planté dans le couvercle d'un monstre. » Il secoue la tête. « Hildre était forgeronne. Elle savait à quoi servent les clous. Un clou, ça ne ferme pas. Ça tient. Ça tient deux choses ensemble, qui sans lui se sépareraient. »",
      "« Mon père me disait qu'il fallait le garder chaud. Qu'il ne fallait jamais laisser l'enclume refroidir. Qu'un clou froid, ça devient cassant. » Il remue ses mains gantées sur les accoudoirs, une fois, et une grimace de douleur lui passe sur le visage, aussitôt effacée. « Je n'ai jamais su ce que ça voulait dire. Je l'ai fait quand même. Quarante ans. On ne laisse pas refroidir. »",
    ],
    choices: [{ back: "IIF_ansgar" }] },

  IIF_epreuve: { act: "II", title: "La coulée", place: "ferrance", takes: "evening",
    fx: { ep: ["perso", 500] },
    text: [
      { first: true, text: "Ansgar se lève. C'est la première fois que tu le vois debout. Il est immense, un peu voûté, et il descend de son estrade lentement, sans s'appuyer sur rien. Les compagnons ont arrêté de frapper. Les marteaux se posent un à un, et le silence qui tombe sur la halle est si complet que tu entends le feu respirer dans les douze foyers." },
      { again: true, text: "La coulée suivante. Les compagnons posent à nouveau leurs marteaux, et le silence revient sur la halle. Ansgar descend de son estrade. Il ne dit rien. Il n'a pas l'air déçu de te revoir. Il a l'air de quelqu'un qui attendait." },
      "« L'épreuve du feu, dit Ansgar. La pierre du premier foyer. Celui d'Hildre. » Il désigne d'un mouvement de tête le foyer le plus proche de l'enclume, plus vieux que les autres, maçonné de briques noires. Devant la gueule du feu, une dalle de pierre rouge, grande comme une main ouverte, rougeoie doucement. « Pose ta main dessus. Le temps que je compte sept coups. On ne demande pas de ne pas avoir mal. On demande de ne pas l'enlever. »",
    ],
    choices: [
      { label: "Poser la main, et tenir", test: { dom: "combat", diff: -10, label: "Tenir sept coups", help: [{ with: "aubin", v: 10 }, { if: { item: "onguent" }, v: 5 }, { if: { item: "II_baume" }, v: 10 }] }, win: { fx: { flag: "IIF:feu_ok", ep: ["perso", 800] }, to: "IIF_feu_ok" }, lose: { fx: { pv: -5 }, to: "IIF_feu_rate" } },
      { label: "Poser la main, et appeler le froid autour d'elle", test: { dom: "magie", diff: -10, label: "Garder ta main froide" }, win: { fx: { flag: "IIF:feu_ok", ep: ["perso", 800] }, to: "IIF_feu_ok" }, lose: { fx: { pv: -5 }, to: "IIF_feu_rate" } },
      { label: "« Laisse-moi lui parler, au feu », dit Charline", who: "charline", test: { dom: "magie", diff: 0, label: "Charline : faire reculer le feu" }, win: { fx: { flag: ["IIF:feu_ok", "IIF:feu_charline"], conf: { charline: 10 }, ep: ["perso", 800] }, to: "IIF_feu_charline" }, lose: { fx: { pv: -5, conf: { charline: 5 } }, to: "IIF_feu_rate" } },
      { label: "Poser la main tachée, et laisser la tache boire la chaleur", tag: "Marque +1", stain: true, if: { mark: { min: 1 } }, why: "Il faudrait que quelque chose en toi ne craigne plus le feu.", fx: { mark: 1, flag: ["IIF:feu_ok", "IIF:feu_marque"], fear: { pip: 10, charline: 5 }, conf: { coliane: -5 } }, to: "IIF_feu_marque" },
    ] },
  IIF_feu_ok: { act: "II", title: "Le feu", place: "ferrance",
    text: [
      "La pierre mord. C'est la première chose : elle mord, comme une bête, et la douleur monte dans le bras jusqu'à l'épaule. Ansgar compte, d'une voix égale, en frappant du talon sur le sol. *Un.* Tu ne retires pas ta main. *Deux. Trois.* Tu as les larmes aux yeux, et tu ne retires pas ta main. *Quatre.* Quelque chose, dans la pierre, change. Elle ne refroidit pas. C'est toi qui t'habitues, ou c'est elle qui te reconnaît. *Cinq. Six. Sept.*",
      "Tu retires ta main. Elle est rouge, gonflée, mais la peau a tenu. Les compagnons se taisent toujours. Ansgar regarde ta paume longtemps, sans la toucher, et il hoche la tête une fois.",
    ],
    choices: [{ label: "« Le poids, maintenant. »", big: true, to: "IIF_poids" }] },
  IIF_feu_charline: { act: "II", title: "Le feu de Charline", place: "ferrance",
    text: [
      "Tu poses la main. Charline pose la sienne sur ton épaule, et elle regarde le foyer d'Hildre comme on regarde un chien qu'on connaît depuis l'enfance. Elle ne dit rien à voix haute. Ses lèvres bougent. La flamme du foyer se couche, lentement, vers l'arrière, comme un champ de blé sous le vent, et la pierre sous ta main passe du rouge au brun.",
      "Ansgar compte ses sept coups. À chaque coup, sa voix est un peu moins sûre. Au septième, il s'arrête, et il regarde sa fille, pour la première fois, droit dans les yeux. Elle soutient son regard. Il détourne le sien le premier. « Ça compte, dit-il d'une voix rauque. Hildre n'a jamais dit qu'il fallait le faire seul. »",
    ],
    choices: [{ label: "« Le poids, maintenant. »", big: true, to: "IIF_poids" }] },
  IIF_feu_marque: { act: "II", title: "Le feu", place: "ferrance",
    text: [
      "Tu poses ta paume tachée sur la pierre rouge. Il n'arrive rien. La tache noire boit la chaleur comme un buvard boit l'encre, et une fumée grise, épaisse, sort d'entre tes doigts et monte vers le toit. Ça ne te fait pas mal. Ça te fait du bien. C'est ce qui te fait peur.",
      "Ansgar compte ses sept coups sans te regarder la main. Il regarde ton visage. Au septième coup, il dit seulement : « Ça compte. » Puis, plus bas, pour toi seul{e} : « Mais je l'ai vu. » Autour du foyer, deux compagnons se sont signés de la main ouverte.",
      { with: "pip", text: "Pip s'est réfugié tout en haut de la halle, contre les poutres de cuivre, aussi loin qu'il a pu. Sa lumière est grise." },
    ],
    choices: [{ label: "« Le poids, maintenant. »", big: true, to: "IIF_poids" }] },
  IIF_feu_rate: { act: "II", title: "Le feu", place: "ferrance",
    text: [
      "*Un. Deux. Trois.* Au quatrième coup, ta main s'arrache d'elle-même, sans que tu l'aies décidé, comme une bête qui se dégage d'un piège. Tu la serres contre toi. Elle est blanche au centre, rouge autour, et elle bat comme un deuxième cœur.",
      "Ansgar ne dit rien de méchant. « Le corps sait des choses que la tête ne sait pas, dit-il. Il n'y a pas de honte. Il y a encore le poids, et le nom. » Un compagnon t'apporte un seau d'eau froide, et tu y plonges la main jusqu'au poignet.",
    ],
    choices: [{ label: "« Le poids, maintenant. »", big: true, to: "IIF_poids" }] },

  IIF_poids: { act: "II", title: "Le poids", place: "ferrance",
    text: [
      "Au pied de l'estrade, posé sur un billot de chêne, il y a un bloc de fonte noire, grossièrement carré, avec deux anneaux de fer scellés sur les côtés. Les compagnons l'appellent *la Belle-Mère*. « La première fonte d'Hildre, dit Ansgar. Le jour de la fondation de la Forge, elle l'a portée du billot jusqu'à l'enclume, vingt pas. C'est le chemin. Avec tes mains, et avec ce qu'il y a dans la Forge. Pas de bœuf, pas de compagnon. »",
      "Tu prends un des anneaux, et tu tires. La Belle-Mère ne bouge pas d'un pouce. Elle pèse ce que pèse un cheval.",
      { with: "thavary", text: "Thavary a déjà retroussé ses manches. « La Belle-Mère, répète-t-elle. Chez nous, on disait la même chose du bœuf de labour. »" },
    ],
    choices: [
      { label: "La soulever, et la porter", test: { dom: "combat", diff: -20, label: "Porter la Belle-Mère", help: [{ if: { arch: "guerrier" }, v: 10 }] }, win: { fx: { flag: "IIF:poids_ok", ep: ["perso", 800] }, to: "IIF_poids_ok" }, lose: { fx: { pv: -4 }, to: "IIF_poids_rate" } },
      { label: "Chercher dans la Forge de quoi la faire rouler", test: { dom: "savoir", diff: -10, label: "Leviers, rouleaux et chaînes", help: [{ with: "charline", v: 10 }, { if: { has: "maitre:maelle" }, v: 10 }] }, win: { fx: { flag: ["IIF:poids_ok", "IIF:poids_ruse"], ep: ["perso", 800] }, to: "IIF_poids_ruse" }, lose: { fx: { ep: ["perso", 200] }, to: "IIF_poids_rate" } },
      { label: "« À deux », dit Thavary, en prenant le second anneau", who: "thavary", test: { dom: "combat", diff: 0, label: "Thavary : porter à deux" }, win: { fx: { flag: "IIF:poids_ok", conf: { thavary: 5 }, ep: ["perso", 800] }, to: "IIF_poids_ok" }, lose: { fx: { pv: -3 }, to: "IIF_poids_rate" } },
      { label: "Laisser Gloup se glisser sous la fonte", who: "gloup", test: { dom: "nature", diff: -10, label: "Gloup : faire glisser la Belle-Mère" }, win: { fx: { flag: ["IIF:poids_ok", "IIF:poids_gloup"], conf: { gloup: 10 }, ep: ["perso", 800] }, to: "IIF_poids_gloup" }, lose: { fx: { ep: ["perso", 200] }, to: "IIF_poids_rate" } },
    ] },
  IIF_poids_ok: { act: "II", title: "Le poids", place: "ferrance",
    text: [
      "Tu plies les genoux, tu prends les deux anneaux, tu respires, et tu te relèves avec la Belle-Mère contre le ventre. Tes épaules craquent. Tes bras s'allongent, te semble-t-il, d'un pouce à chaque pas. Un pas. Deux. Au dixième, tu ne vois plus rien qu'une brume rouge. Au quinzième, tu n'entends plus que ton cœur.",
      "Au vingtième, tu la poses au pied de l'enclume noire, et tu tombes à genoux à côté d'elle. Il y a un bruit dans la halle, que tu mets un moment à reconnaître : les compagnons frappent du marteau sur leurs enclumes, tous ensemble, un coup, un seul.",
      { with: "thavary", text: "Thavary se relève à côté de toi, les mains en sang, et elle rit. Elle rit comme tu ne l'as jamais entendue rire, la tête renversée." },
    ],
    choices: [{ label: "« Le nom. »", big: true, to: "IIF_nom" }] },
  IIF_poids_ruse: { act: "II", title: "Le poids", place: "ferrance",
    text: [
      "Tu fais le tour de la Forge. Des rondins de chêne pour les manches de marteaux, une barre à mine, une chaîne de palan, un baquet de suif. Les compagnons te regardent faire en silence, puis l'un d'eux, un vieux, se met à sourire. Tu glisses la barre sous la fonte, tu soulèves d'un doigt de hauteur, tu pousses un rondin dessous, puis un autre. Tu graisses le sol. La Belle-Mère se met à rouler, lentement, sur ses rondins, comme une pierre de cathédrale.",
      "Vingt pas, en une heure. Quand elle arrive au pied de l'enclume, Ansgar dit seulement : « Hildre a fait comme ça. Le jour de la fondation. Tous les apprentis croient qu'elle l'a portée à bras. Elle était forgeronne. Pas idiote. »",
    ],
    choices: [{ label: "« Le nom. »", big: true, to: "IIF_nom" }] },
  IIF_poids_gloup: { act: "II", title: "Le poids", place: "ferrance",
    text: [
      "Gloup s'étale sous la Belle-Mère comme une flaque, et quand tu pousses, elle glisse sur lui, lentement, avec un bruit de baiser mouillé. Les compagnons reculent d'un pas, puis s'approchent de deux. Gloup avance avec la fonte sur le dos, en laissant derrière lui une traînée luisante sur les dalles, et tu pousses, et vous arrivez au bout des vingt pas ensemble, à bout de souffle tous les deux.",
      "Ansgar considère Gloup un moment. « Avec tes mains, et ce qu'il y a dans la Forge, dit-il. Il était dans la Forge. » Il hausse ses énormes épaules. « Ça compte. » Gloup, sous la fonte, fait des bulles.",
    ],
    choices: [{ label: "« Le nom. »", big: true, to: "IIF_nom" }] },
  IIF_poids_rate: { act: "II", title: "Le poids", place: "ferrance",
    text: [
      "La Belle-Mère se soulève d'un pouce, de deux, puis tes mains glissent sur les anneaux, et elle retombe sur le billot avec un bruit qui fait sauter les outils sur les établis. Tu as les reins en feu. Tu réessaies. Elle bouge de trois pas, et s'arrête, et toi avec.",
      "Ansgar attend que tu aies repris ton souffle. « Il y a des choses qu'on ne porte pas seul, dit-il. Il faut le savoir, aussi. Ce n'est pas la même épreuve, mais c'est une leçon. Il reste le nom. »",
    ],
    choices: [{ label: "« Le nom. »", big: true, to: "IIF_nom" }] },

  IIF_nom: { act: "II", title: "Le nom", place: "ferrance",
    text: [
      "Ansgar te mène au fond de la halle, devant une porte basse murée de briques neuves, où deux compagnons montent la garde. Au-dessus de la porte murée, sur le linteau de pierre, des lettres anciennes sont gravées, à moitié effacées par la suie et le temps. « La chambre d'Hildre, dit-il. Je l'ai fait murer cet été, quand l'homme de Hautmont est venu. » Il se tourne vers toi. « Le nom. Hildre a forgé le Clou. Pour qui l'a-t-elle forgé ? »",
      "Le silence de la halle est total. Tu entends un charbon tomber dans un foyer, très loin.",
    ],
    choices: [
      { label: "« Pour Hildre. Pour sa maison. »", fx: { ep: ["perso", 200] }, to: "IIF_nom_faux" },
      { label: "Déchiffrer les lettres usées du linteau", test: { dom: "savoir", diff: -10, label: "Lire l'écriture des premiers forgerons", help: [{ if: { has: "passe:cercle" }, v: 10 }, { if: { has: "maitre:maelle" }, v: 10 }] }, win: { fx: { flag: "IIF:nom_ok", ep: ["perso", 800] }, to: "IIF_nom_linteau" }, lose: { to: "IIF_nom_faux" } },
      { label: "« Pour celui qui tient la porte. »", if: { clues: "M", min: 1 }, why: "Il te faudrait savoir quelque chose sur celui qu'on a effacé.", fx: { flag: ["IIF:nom_ok", "IIF:nom_vrai"], ep: ["seance", 1500] }, to: "IIF_nom_vrai" },
      { label: "« Laisse-moi répondre », dit Charline", who: "charline", fx: { flag: ["IIF:nom_ok", "IIF:nom_charline"], conf: { charline: 10 }, ep: ["perso", 800] }, to: "IIF_nom_charline" },
      { label: "Écouter ce que ta paume te souffle", tag: "Marque +1", stain: true, if: { mark: { min: 1 } }, why: "Personne ne te souffle rien.", fx: { mark: 1, flag: "IIF:nom_ok", fear: { pip: 5 } }, to: "IIF_nom_marque" },
    ] },
  IIF_nom_faux: { act: "II", title: "Le nom", place: "ferrance",
    text: [
      "Ansgar secoue la tête, lentement. « C'est ce que tout le monde répond, dit-il. Hildre n'a rien forgé pour sa maison. Elle n'en avait pas, de maison, à ce moment-là. Elle avait une forge sous une tente, et cinq amis. » Il regarde le linteau. « Ce n'est pas ta faute. On a oublié la réponse avant toi. On l'a oubliée exprès. »",
    ],
    choices: [{ label: "Attendre le jugement de la Forge", big: true, to: [{ if: { count: [{ has: "IIF:feu_ok" }, { has: "IIF:poids_ok" }, { has: "IIF:nom_ok" }], min: 2 }, to: "IIF_clou" }, { to: "IIF_echec" }] }] },
  IIF_nom_linteau: { act: "II", title: "Le nom", place: "ferrance",
    text: [
      "Tu t'approches du linteau, tu frottes la suie du pouce. Les lettres sont anciennes, anguleuses, l'écriture des premiers temps du Sceau, que plus personne n'emploie. Tu épelles, lentement. *NOVS FORGEONS POVR LA PORTE*, et la suite a été grattée au ciseau, il y a très longtemps. Mais le ciseau n'a pas mordu partout, et sous la suie les creux se lisent encore : *ET POVR CELVI QVI LA TIENT.*",
      "« Pour la porte, dis-tu. Et pour celui qui la tient. » Ansgar ferme les yeux. « Pour la porte, c'est la réponse des apprentis, dit-il. La suite, plus personne ne la dit. Mon grand-père la disait encore, tout bas, en frappant. » Il rouvre les yeux. « Ça compte. »",
    ],
    choices: [{ label: "Attendre le jugement de la Forge", big: true, to: [{ if: { count: [{ has: "IIF:feu_ok" }, { has: "IIF:poids_ok" }, { has: "IIF:nom_ok" }], min: 2 }, to: "IIF_clou" }, { to: "IIF_echec" }] }] },
  IIF_nom_vrai: { act: "II", title: "Le nom", place: "ferrance",
    text: [
      "Ansgar ne bouge pas. Pendant un long moment, il ne bouge pas du tout, et tu crois qu'il ne t'a pas entendu{e}. Puis il lève une de ses mains gantées, et la pose, très doucement, sur la brique neuve de la porte murée, comme on pose la main sur l'épaule de quelqu'un qui pleure.",
      "« Ça, dit-il, plus personne ne le dit depuis mon grand-père. Il le disait en frappant, tout bas, pour que les compagnons n'entendent pas. *Pour la porte, et pour celui qui la tient.* » Il retire sa main. « Il ne m'a jamais dit qui c'était. Il m'a dit que le jour où quelqu'un viendrait me le dire sans que je le lui aie appris, il faudrait lui donner le Clou, quoi qu'il arrive. »",
      { with: "pip", text: "Pip est descendu sur la porte murée. Il s'y pose, juste à l'endroit où Ansgar avait mis la main, et il reste là. Les deux compagnons de garde ont reculé d'un pas, sans s'en rendre compte." },
    ],
    choices: [{ label: "Attendre le jugement de la Forge", big: true, to: "IIF_clou" }] },
  IIF_nom_charline: { act: "II", title: "Le nom", place: "ferrance",
    text: [
      "Charline s'avance. Elle se place à côté de toi, face à son père, et elle répond, d'une voix claire, celle d'une petite fille qui récite : « Pour la porte, et pour celui qui la tient. » Ansgar se raidit. « Où as-tu appris ça ? » Elle ne baisse pas les yeux. « Grand-père. Il me le chantait pour m'endormir, quand tu travaillais tard. Tu ne le savais pas. »",
      "Ansgar la regarde. Il la regarde vraiment, longtemps, comme on regarde quelqu'un qu'on n'a pas vu depuis des années et qui a changé. Puis il dit : « Ça compte. » Et sa voix casse sur le deuxième mot.",
    ],
    choices: [{ label: "Attendre le jugement de la Forge", big: true, to: [{ if: { count: [{ has: "IIF:feu_ok" }, { has: "IIF:poids_ok" }, { has: "IIF:nom_ok" }], min: 2 }, to: "IIF_clou" }, { to: "IIF_echec" }] }] },
  IIF_nom_marque: { act: "II", title: "Le nom", place: "ferrance",
    text: [
      "Ta paume parle. Ce n'est pas une voix, c'est une certitude, tiède, qui remonte le long de ton bras et se pose sur ta langue. Tu dis : « Pour la porte. Et pour celui qui la tient. Et qu'on a cloué dessus. »",
      "Ansgar recule d'un pas. Les deux compagnons de garde ont porté la main à leur marteau. Le vieux maître te regarde la main, puis le visage, et il dit, très bas : « Ça compte. Mais la dernière partie, personne ne te l'a apprise. Et ce qui te l'a apprise n'aurait pas dû la savoir. »",
    ],
    choices: [{ label: "Attendre le jugement de la Forge", big: true, to: [{ if: { count: [{ has: "IIF:feu_ok" }, { has: "IIF:poids_ok" }, { has: "IIF:nom_ok" }], min: 2 }, to: "IIF_clou" }, { to: "IIF_echec" }] }] },
});

// ==================================================================== the Nail: the verdict, keep or give, the theft
add({
  IIF_echec: { act: "II", title: "Le jugement de la Forge", place: "ferrance",
    fx: { ep: ["perso", 500] },
    text: [
      "Ansgar remonte sur son estrade, lentement, et s'assied. Il ne regarde pas l'enclume. « Pas cette fois, dit-il. Le feu, le poids, le nom. Il en faut deux. » Il n'y a pas de dureté dans sa voix. Il y a autre chose, de la fatigue, ou du regret. « La Forge ne dit jamais non. Elle dit : pas encore. Reviens à la coulée suivante, si tu veux. Elle t'attendra. »",
      "Les compagnons reprennent leurs marteaux, un à un. Le vacarme revient comme une marée.",
      { with: "charline", text: "Charline n'a pas bougé. Elle regarde son père, en haut de l'estrade, et elle a les poings serrés. Tu vois qu'elle va dire quelque chose. Tu vois aussi ce que ça lui coûte." },
    ],
    choices: [
      { label: "Attendre la coulée suivante, et recommencer", fx: { unflag: ["IIF:feu_ok", "IIF:poids_ok", "IIF:nom_ok"], time: 20 }, to: "IIF_epreuve" },
      { label: "« Père. »", who: "charline", hide: { has: "IIF:charline_plaide" }, fx: { flag: "IIF:charline_plaide", conf: { charline: 10 }, ep: ["perso", 800] }, to: "IIF_plaidoyer" },
      { back: "IIF_forge" },
    ] },
  IIF_plaidoyer: { act: "II", title: "Charline", place: "ferrance",
    text: [
      "Charline monte les trois marches de l'estrade. C'est la première fois depuis six ans, te dira-t-elle plus tard. Elle se plante devant le fauteuil de son père, et elle parle assez bas pour que les compagnons n'entendent pas, mais toi, tu entends. « Tu as dit que la Forge ne reprenait jamais rien de force. Elle ne donne rien de force non plus. Hildre n'a pas fait l'épreuve pour qu'on la réussisse. Elle l'a faite pour qu'on sache qui on est quand on la rate. »",
      "« Ce que je sais, moi, c'est ce qu'il y a dehors. L'eau noire dans les bacs des verriers. Le puits de la commanderie. Les cavaliers aux gants noirs sur la route de l'est. Le Clou est chaud depuis quatre cents ans, et dehors il gèle. » Elle tend la main vers l'enclume, sans la toucher. « Donne-le. Pas à moi. À quelqu'un qui le portera. »",
      "Ansgar la regarde. Il ouvre la bouche, la referme. Puis il fait une chose que personne, dans la halle, ne l'a vu faire depuis six ans : il se lève pour quelqu'un. Il descend de l'estrade, va jusqu'à l'enclume noire, et s'arrête devant. « Tire-le, dit-il sans se retourner. La Forge ne le donne pas. Elle laisse prendre. »",
    ],
    choices: [{ label: "T'approcher de l'enclume", big: true, to: "IIF_clou" }] },

  IIF_clou: { act: "II", title: "Le Clou de Hildre", place: "ferrance",
    fx: { relic: "clou", flag: "IIF:clou", ep: ["histoire", 5000], regard: { ansgar: "admiratif" } },
    text: [
      "Tu poses deux doigts sur la tête du clou, au ras de la pierre noire. Elle est chaude, plus chaude que la pierre, chaude comme une peau. Tu tires. Rien. Tu tires encore, et le clou vient, d'un coup, sans effort, avec un long chuintement de métal qui frotte, et il sort de l'enclume tout entier : une tige de fer noir, carrée, longue comme l'avant-bras, effilée au bout, et sur toute sa longueur, gravés si fin qu'il faut le pencher vers le feu pour les voir, des mots dans l'écriture des premiers forgerons.",
      "Les compagnons ont posé leurs marteaux. Personne ne frappe. Personne ne parle. Dans le silence de la halle, le Clou de Hildre pèse dans ta main ce que pèse une chose qu'on n'a pas le droit de laisser tomber.",
      "Ansgar s'est rassis. Il te regarde, et il a dans les yeux quelque chose que tu n'y avais pas encore vu : du soulagement. « Quarante ans que je le garde chaud, dit-il. Quarante ans que je me demande qui viendrait. » Il regarde le trou vide, au milieu de l'enclume. « Maintenant, c'est à toi de savoir s'il doit avoir froid. »",
      { if: { has: "IIF:nom_vrai" }, text: "Il ajoute, plus bas : « Pour la porte, et pour celui qui la tient. Si tu sais qui c'est, un jour, va le lui dire. Mon grand-père aurait voulu. »" },
      { if: { any: [{ has: "IIF:feu_marque" }, { has: "IIF:nom_marque" }] }, text: "Dans ta paume tachée, le Clou est froid. Partout ailleurs il est chaud. Là où il touche la tache, il est froid comme une pierre de rivière. Ansgar l'a vu. Il ne dit rien." },
      { if: { any: [{ has: "IIF:feu_charline" }, { has: "IIF:nom_charline" }, { has: "IIF:charline_plaide" }] }, text: "Charline est au pied de l'enclume, à côté de toi. Elle regarde son père, et son père la regarde, et ni l'un ni l'autre ne détourne les yeux, cette fois. Ça ne dure pas. Mais ça a eu lieu, et toute la halle l'a vu." },
      { if: { has: "IIF:poids_gloup" }, text: "Gloup s'est hissé sur la Belle-Mère, au pied de l'enclume, et il regarde le Clou briller dans ta main. Un vieux compagnon, en passant, lui tapote le dessus avec la gentillesse distraite qu'on a pour les chiens de forge." },
      { if: { has: "IIF:poids_ruse" }, text: "Le vieux compagnon qui souriait quand tu cherchais tes rondins s'approche et te serre la main, longtemps. « Pas idiote, Hildre, dit-il. Toi non plus. »" },
    ],
    choices: [
      { label: "Garder le Clou", big: true, to: "IIF_clou_garde" },
      { label: "Le rendre à la Forge, et le remettre dans l'enclume", big: true, fx: { give: "clou", flag: "IIF:clou_donne", regard: { ansgar: "redevable" } }, to: "IIF_clou_rendu" },
      { label: "Le mettre dans les mains de Charline, pour qu'elle le rende à son père", who: "charline", fx: { give: "clou", flag: ["IIF:clou_donne", "IIF:clou_charline"], conf: { charline: 15 }, regard: { ansgar: "redevable" } }, to: "IIF_clou_rendu" },
    ] },
  IIF_clou_garde: { act: "II", title: "Le Clou gardé", place: "ferrance",
    fx: { ep: ["perso", 500] },
    text: [
      "Tu enveloppes le Clou dans un linge, puis dans un autre, et tu le ranges au fond de ton sac, contre ton dos. Il est chaud à travers le cuir. Tu le sentiras chaud contre ton dos tous les jours qui viennent, et tu finiras par ne plus le sentir, comme on ne sent plus son propre cœur.",
      "Ansgar hoche la tête. « Garde-le chaud, dit-il. Ne le laisse jamais dans l'eau. Ne le prête à personne qui ne te le demande pas deux fois. » Il regarde le trou vide de l'enclume. « La Forge t'attendra. Si un jour tu veux le rendre, la porte est ouverte. Elle l'a toujours été. »",
      { with: "charline", text: "Charline ne dit rien. Elle regarde le linge où tu as roulé le Clou, puis son père, puis toi. Elle a l'air de quelqu'un qui fait un calcul et qui n'aime pas le résultat, mais qui le garde pour elle." },
      { with: "pip", text: "Pip se pose sur ton sac, juste au-dessus du Clou, et il y reste longtemps. Sa lumière est inquiète, et chaude." },
    ],
    choices: [{ back: "IIF_forge" }] },
  IIF_clou_rendu: { act: "II", title: "Le Clou rendu", place: "ferrance",
    fx: { ep: ["seance", 2000] },
    text: [
      { if: { has: "IIF:clou_charline" }, text: "Tu tends le Clou à Charline. Elle le regarde, puis toi, et elle le prend à deux mains, comme on prend un enfant. Elle traverse la halle jusqu'à l'estrade, et elle le tend à son père. Ansgar ne peut pas le prendre : ses mains gantées ne ferment plus. Alors elle s'agenouille, elle pose le Clou sur ses genoux, et elle pose ses mains à elle sur les siennes, par-dessus le cuir. Ils restent comme ça. Puis ils vont ensemble jusqu'à l'enclume, et c'est elle qui le remet dans son trou, et c'est lui qui pousse, avec le dessus de son poignet, pour l'enfoncer.", else: "Tu poses la pointe du Clou dans le trou de l'enclume noire, et tu appuies. Il descend tout seul, avec le même long chuintement de métal, et sa tête vient se placer au ras de la pierre, exactement où elle était. La pierre, autour, est déjà tiède. Les compagnons, un à un, reprennent leurs marteaux, et le premier coup qu'ils frappent, ils le frappent ensemble." },
      "Ansgar te regarde. « Personne n'a jamais fait ça, dit-il. On passe l'épreuve pour le prendre. On ne passe pas l'épreuve pour le rendre. » Il se tait un long moment. « Si un jour il faut qu'il aille là où il doit aller, la Forge te le portera elle-même. Je te le jure sur Hildre. Et il sera meilleur qu'aujourd'hui. »",
      { with: "coliane", text: "Coliane siffle entre ses dents. « Tu as passé trois épreuves, dit-elle, pour rendre une chose à quelqu'un qui l'avait déjà. » Elle secoue la tête. Elle sourit quand même." },
    ],
    choices: [{ back: "IIF_forge" }] },

  IIF_vol: { act: "II", title: "La Forge, la nuit", place: "ferrance", takes: "night",
    text: [
      "La nuit, la Forge-Mère ne s'éteint pas. Les douze foyers sont couverts, ils rougeoient sous la cendre, et deux compagnons de garde somnolent sur un banc, près de la porte murée de la chambre d'Hildre. La halle est pleine d'ombres rouges, de reflets sur le cuivre, de craquements de braise. L'enclume noire, au milieu, est la seule chose qui ne renvoie aucune lumière.",
      "Il y a une porte de service, côté charbon. Elle n'est pas fermée. On ne vole pas à la Forge-Mère. Personne n'y a jamais pensé.",
      { with: "pip", text: "Pip ne veut pas entrer. Il reste sur le seuil, sa lumière toute petite, et quand tu te retournes vers lui, il s'éloigne d'un battement, comme pour te dire qu'il ne te suivra pas là." },
    ],
    choices: [
      { label: "Traverser la halle dans l'ombre, jusqu'à l'enclume", test: { dom: "discretion", diff: -20, label: "Prendre le Clou sans réveiller la garde", help: [{ if: { item: "II_carte_ferrance" }, v: 10 }, { with: "coliane", v: 10 }] }, win: { fx: { flag: "IIF:vol_tente" }, to: "IIF_vol_ok" }, lose: { fx: { flag: "IIF:vol_tente" }, to: "IIF_vol_pris" } },
      { label: "« Laisse-moi faire », souffle Coliane", who: "coliane", test: { dom: "discretion", diff: -10, label: "Coliane : le Clou, dans le noir" }, win: { fx: { flag: "IIF:vol_tente" }, to: "IIF_vol_ok" }, lose: { fx: { flag: "IIF:vol_tente" }, to: "IIF_vol_pris" } },
      { label: "Renoncer", back: "IIF_forge" },
    ] },
  IIF_vol_ok: { act: "II", title: "Le Clou volé", place: "ferrance",
    fx: { relic: "clou", flag: ["IIF:clou", "IIF:clou_vole"], ep: ["seance", 2000], regard: { ansgar: "trahi" }, conf: { pip: -10, charline: -15 }, fac: { ordre: -5 } },
    text: [
      "Les compagnons dorment. L'enclume est tiède sous tes doigts. Tu prends la tête du clou, et tu tires, et rien ne vient. Tu tires encore, des deux mains, le pied contre la pierre. Il vient enfin, avec un cri de métal qui te semble assourdissant, et qui ne réveille personne. Il est froid. Pas tiède, pas chaud : froid, d'un froid de cave, et il te glace la main jusqu'au coude.",
      "Tu ressors par la porte du charbon. Dehors, la ville frappe toujours. Personne ne t'a vu{e}. Demain matin, un compagnon trouvera le trou vide au milieu de l'enclume, et il ira le dire au maître, et le maître ne dira rien, et toute la ville saura avant midi. Ferrance ne sera plus jamais une ville où l'on entre comme avant.",
      { with: "coliane", text: "Coliane te prend le Clou des mains, le soupèse, te le rend. « Bien fait, dit-elle. Mais il est froid. Les choses qu'on vole, elles sont toujours froides. » Elle ne plaisante pas." },
      { with: "charline", text: "Charline t'attend dans la rue, sous une lanterne. Elle a tout compris en te voyant. Elle ne dit rien. Elle se retourne et marche devant, et pendant longtemps elle ne te parle pas." },
    ],
    choices: [{ label: "Disparaître dans les rues", back: "IIF_portes" }] },
  IIF_vol_pris: { act: "II", title: "La garde de la Forge", place: "ferrance",
    text: [
      "Un charbon roule sous ta botte. Le bruit est minuscule. Les deux compagnons de garde sont debout avant qu'il ait fini de rouler, un marteau à la main, et le troisième, que tu n'avais pas vu, sort de derrière le foyer d'Hildre avec une barre à mine. « On ne vole pas à la Forge », dit l'un d'eux, presque étonné.",
    ],
    choices: [
      { label: "Te défendre", fight: { title: "La garde de la Forge", enemies: [{ id: "II_compagnon", n: 3 }], terrain: "bati", spare: true,
        win: { fx: { ep: ["seance", 1000] }, to: "IIF_vol_fuite" }, lose: { fx: { pv: -4 }, to: "IIF_vol_fuite" },
        flee: { label: "Courir vers la porte du charbon", dom: "discretion", diff: -10, to: "IIF_vol_fuite" }, calm: { to: "IIF_vol_fuite" } } },
      { label: "Lever les mains, et attendre le maître", fx: { regard: { ansgar: "mefiant" }, ep: ["perso", 300] }, to: "IIF_vol_ansgar" },
    ] },
  IIF_vol_fuite: { act: "II", title: "La rue du charbon", place: "ferrance",
    text: [
      { outcome: "win", text: "Les trois compagnons sont à terre, sonnés, et toi aussi tu saignes. Le Clou est toujours dans l'enclume : il y a maintenant toute la Forge réveillée entre lui et toi. Tu sors par la porte du charbon et tu cours." },
      { outcome: "lose", text: "Tu te réveilles dans la rue, jeté{e} sur un tas de scories, la tête qui bourdonne. On t'a laissé tes affaires. On t'a laissé la vie. Le message est clair." },
      { outcome: "flee", text: "Tu files par la porte du charbon et tu cours dans les ruelles, sous les cris, jusqu'à ce que la ville te noie dans sa fumée." },
      { outcome: "calm", text: "Les trois compagnons baissent leurs outils, l'un après l'autre. Ils te regardent sortir sans un mot." },
      "Demain, Ansgar saura. Il te recevra peut-être encore. Il ne te regardera plus pareil.",
    ],
    choices: [{ label: "Disparaître dans les rues", back: "IIF_portes" }] },
  IIF_vol_ansgar: { act: "II", title: "Le maître, la nuit", place: "ferrance",
    text: [
      "On va chercher Ansgar. Il arrive en chemise de nuit, un manteau jeté sur les épaules, ses mains gantées serrées contre son ventre. Il te regarde longtemps, debout au milieu de ses compagnons. « Tu aurais pu demander l'épreuve, dit-il. Tout le monde peut la demander. » Il secoue la tête. « Les gens ne demandent plus. Ils prennent. C'est ça qui monte de la Brèche, tu sais. Pas seulement l'eau. »",
      "Il ne te fait pas arrêter. Il dit aux compagnons de te laisser partir, et ils te laissent partir. Sur le seuil, il ajoute : « L'épreuve reste ouverte. Pour toi aussi. Hildre n'a pas mis de conditions. Moi, j'en mettrais. Mais je ne suis pas Hildre. »",
    ],
    choices: [{ label: "Sortir dans la nuit", back: "IIF_portes" }] },
});

// ==================================================================== quest: Les mains d'Ansgar (II_ansgar, echo ansgar=…)
add({
  IIF_ansgar_mains: { act: "II", title: "Les mains d'Ansgar", place: "ferrance",
    fx: { meet: "II_mathelin" },
    text: [
      "C'est Mathelin, l'apprenti d'Ansgar, qui t'arrête à la porte de la petite pièce où le maître se retire entre les coulées. Il a seize ans, des bras de forgeron et une tête d'enfant. « Il ne dort plus, dit-il à voix basse. Ses mains, la nuit. Je l'entends marcher. Il marche jusqu'à l'aube, et il ne met pas le baume. » Il te montre, dans un coin, un coffre ouvert, plein de petits pots de grès alignés, tous fermés à la cire. « Soixante-douze. Je les compte. »",
      "Par la porte entrouverte, tu vois Ansgar assis devant une fenêtre, ses gants posés sur les genoux, ses mains nues. Elles ne ressemblent plus à des mains. Ce sont deux blocs de chair rouge et luisante, les doigts soudés en palettes, les ongles disparus. Il les regarde comme on regarde quelque chose qu'on doit à quelqu'un.",
      { if: { has: "IIF:vol_tente" }, text: "Il t'a entendu{e}. « Toi, dit-il sans se retourner. Tu viens prendre autre chose ? » Il n'y a pas de colère. Juste une grande fatigue." },
    ],
    choices: [
      { label: "Entrer, et lui parler de ses mains", to: "IIF_ansgar_douleur" },
      { label: "Amener Charline jusqu'à lui", hide: { not: { present: "charline" } }, big: true, to: "IIF_ansgar_face" },
      { back: "IIF_forge" },
    ] },
  IIF_ansgar_douleur: { act: "II", title: "Ce qu'Ansgar garde", place: "ferrance",
    fx: { ep: ["perso", 400] },
    text: [
      "Ansgar ne remet pas ses gants quand tu entres. Il te laisse regarder. « Le baume ? dit-il. Je sais ce qu'en dit Cassagne. Il a raison. Il marcherait. » Il tourne ses mains vers la lumière. « Le jour où elle a mis le feu, je l'ai sortie, et j'ai éteint les poutres. Et le lendemain, j'avais tellement peur d'elle que je l'ai envoyée au Cercle, à treize ans, pour qu'on lui apprenne à ne plus être ce qu'elle était. Je ne lui ai pas dit au revoir. Je n'ai pas pu. Je ne pouvais pas la toucher. »",
      "« Alors j'ai gardé ça. » Il regarde ses mains. « Tant que ça me fait mal, je me souviens que ce n'est pas elle qui me les a prises. C'est moi qui les ai mises dans le feu. Et c'est moi qui l'ai renvoyée. » Il remet ses gants, maladroitement, en s'aidant des dents. « Ce n'est pas une chose qu'on règle avec de la graisse de mouton. »",
    ],
    choices: [
      { label: "Ouvrir un pot de baume, et le lui mettre toi-même", test: { dom: "social", diff: -10, label: "Le convaincre de se laisser soigner", help: [{ with: "aubin", v: 15 }, { if: { has: "IIF:clou_donne" }, v: 15 }, { if: { has: "passe:aide" }, v: 10 }] }, win: { to: "IIF_ansgar_baume" }, lose: { to: "IIF_ansgar_silence" } },
      { label: "« C'est à elle qu'il faut le dire. »", hide: { present: "charline" }, fx: { ep: ["perso", 200] }, back: "IIF_ansgar_mains" },
      { label: "« Elle est là, dehors. »", hide: { not: { present: "charline" } }, big: true, to: "IIF_ansgar_face" },
    ] },
  IIF_ansgar_face: { act: "II", title: "Le père et la fille", place: "ferrance", with: "charline",
    fx: { ep: ["perso", 500] },
    text: [
      "Charline entre dans la petite pièce. Ansgar se lève. Ils restent l'un en face de l'autre, à trois pas, dans l'odeur de cire et de fer froid, et ni l'un ni l'autre ne parle. Elle regarde ses mains nues. Il essaie de les cacher derrière son dos, comme un enfant pris en faute, et il n'y arrive pas.",
      "« Six ans, dit Charline enfin. Six ans, et tu ne m'as pas écrit une fois. » Sa voix tremble. « Je croyais que tu me haïssais. » Ansgar ouvre la bouche. Rien ne sort. Il regarde le coffre plein de pots de grès, et Charline suit son regard, et tu vois le moment où elle comprend ce qu'il y a dans le coffre, et pourquoi.",
    ],
    choices: [
      { label: "Te taire, et la laisser choisir", to: [{ if: { conf: "charline", min: 40 }, to: "IIF_ansgar_pardon" }, { to: "IIF_ansgar_silence" }] },
      { label: "« Il a gardé sa douleur pour toi. Laisse-le te la rendre. »", test: { dom: "social", diff: -10, label: "Trouver les mots entre eux deux", help: [{ with: "pip", v: 10 }, { with: "aubin", v: 10 }] }, win: { to: "IIF_ansgar_pardon" }, lose: { to: "IIF_ansgar_silence" } },
      { label: "Ouvrir un pot de baume, et le tendre à Charline", fx: { conf: { charline: 5 } }, to: "IIF_ansgar_pardon" },
    ] },
  IIF_ansgar_pardon: { act: "II", title: "Le baume", place: "ferrance", with: "charline",
    fx: { set: { ansgar: "parle" }, quest: "II_ansgar", conf: { charline: 10 }, ep: ["seance", 2500] },
    text: [
      "Charline prend un pot dans le coffre. Elle brise la cire avec l'ongle. Elle s'agenouille devant son père, qui s'est rassis sans s'en rendre compte, et elle prend sa main droite, la chose rouge et soudée qui a été sa main, et elle y étale le baume, lentement, avec ses doigts à elle, couverts de petites brûlures rondes. Il serre les dents. Il ne retire pas sa main.",
      "« Je ne t'ai jamais rien reproché, dit-il, la voix cassée. Jamais. — Je sais, dit-elle sans lever les yeux. C'est ça que je ne t'ai pas pardonné. » Elle passe à l'autre main. « Tu aurais dû crier. Tu aurais dû me dire que j'avais fait une chose terrible. Comme ça, j'aurais pu te demander pardon. »",
      "Ils restent longtemps comme ça. Tu sors, et tu fermes la porte derrière toi. Mathelin, dans le couloir, pleure comme un veau, et il essaie de le cacher en se mouchant dans son tablier.",
      "Quand Charline ressort, une heure plus tard, elle a les yeux rouges et les mains luisantes de baume. « Il m'a demandé si je reviendrais, dit-elle. Je lui ai dit que je ne savais pas. C'est la vérité. » Elle s'essuie les mains à son manteau. « Mais je crois qu'il dormira, cette nuit. »",
    ],
    choices: [{ back: "IIF_forge" }] },
  IIF_ansgar_baume: { act: "II", title: "Le baume", place: "ferrance",
    fx: { set: { ansgar: "baume" }, quest: "II_ansgar", ep: ["seance", 1500], regard: { ansgar: "cordial" } },
    text: [
      "Tu ne dis rien de plus. Tu prends un pot dans le coffre, tu romps la cire, et tu tends la main. Ansgar te regarde longtemps. Puis il ôte ses gants, l'un après l'autre, avec les dents, et il pose ses mains sur la table, paumes en l'air. Tu étales le baume. Il sent le suif et la consoude. Ansgar ferme les yeux.",
      "« Ce n'est pas toi qui devrais faire ça, dit-il au bout d'un moment. — Non, dis-tu. Mais elle n'est pas là. » Il hoche la tête. Il ne répond rien. Quand tu as fini, il remet ses gants, plus facilement qu'avant. « Je dormirai peut-être, dit-il. Merci. » Il ne te regarde pas en le disant. C'est sans doute la seule façon qu'il a de le dire.",
    ],
    choices: [{ back: "IIF_forge" }] },
  IIF_ansgar_silence: { act: "II", title: "Le silence", place: "ferrance",
    fx: { set: { ansgar: "silence" }, quest: "II_ansgar", ep: ["perso", 600] },
    text: [
      { if: { present: "charline" }, text: "Charline recule d'un pas. Puis d'un autre. « Non, dit-elle. Pas comme ça. Pas devant quelqu'un, après six ans. » Elle se retourne et sort. Ansgar reste debout, les mains nues, au milieu de la pièce, et il ne la rappelle pas. Il ne sait pas comment on fait.", else: "Ansgar secoue la tête. « Non, dit-il. Pas toi. Ce n'est pas à toi de le faire. » Il remet ses gants. La conversation est finie. Il ne t'en veut pas : il t'a seulement montré la porte, avec la politesse terrible des gens qui ont décidé de souffrir." },
      "Mathelin, dans le couloir, ferme le coffre aux soixante-douze pots. Il en ajoutera un le mois prochain.",
    ],
    choices: [{ back: "IIF_forge" }] },
});

// ==================================================================== quest: La grève des souffleurs (II_greve, echo greve=…)
add({
  IIF_souffleurs: { act: "II", title: "La rue des Fours", place: "ferrance", backName: "la rue des Fours",
    fx: { questSeen: "II_greve", meet: "II_ombeline" },
    text: [
      { first: true, text: "La rue des Fours est la plus large de Ferrance, et la seule où l'on n'entend rien. Vingt verreries s'y alignent, portes ouvertes sur des fours éteints, et devant chaque porte, assis par terre sur le pavé, des hommes et des femmes en tabliers de cuir, les bras croisés, les cannes de fer posées en travers des genoux. Ils sont deux cents peut-être. Ils ne crient pas. Ils attendent." },
      { first: true, text: "Au milieu de la rue, debout sur une caisse, une femme de quarante ans aux avant-bras couverts de cicatrices rondes parle à quelques jeunes, d'une voix basse et ferme. C'est Ombeline Vasseur, la meneuse. Au bout de la rue, devant la maison du doyen, une demi-douzaine d'hommes sans tablier, avec des gourdins, s'ennuient en jouant aux osselets." },
      { again: true, text: "La rue des Fours, les fours éteints, les grévistes assis sur le pavé. Les hommes au gourdin, au bout de la rue, n'ont pas bougé." },
      { if: { quest: "II_greve" }, text: "La grève est finie. Tu passes dans la rue, et les gens te regardent passer, et ce n'est pas la même façon de regarder selon les portes." },
    ],
    choices: [
      { label: "Parler à Ombeline Vasseur", hide: { quest: "II_greve" }, to: "IIF_perrine" },
      { label: "Regarder les bacs de trempe", hide: { seen: "IIF_bacs" }, to: "IIF_bacs" },
      { label: "La maison du doyen Bastide", hide: { quest: "II_greve" }, to: "IIF_bastide" },
      { label: "Réunir Ombeline et le doyen, et trancher", big: true, hide: { quest: "II_greve" }, if: { all: [{ seen: "IIF_perrine" }, { seen: "IIF_bastide" }] }, why: "Il faut d'abord entendre les deux parties.", to: "IIF_greve_table" },
      { back: "IIF_portes" },
    ] },
  IIF_perrine: { act: "II", title: "Ombeline Vasseur", place: "ferrance",
    fx: { ep: ["perso", 400] },
    text: [
      "Ombeline descend de sa caisse pour te parler. Elle a des yeux gris très calmes, et les mains d'une souffleuse : des cals épais au creux des paumes, là où roule la canne. « On ne demande pas la lune, dit-elle. Le doyen a baissé la pièce d'un tiers au printemps. Il dit que les marchands d'Aldaran n'achètent plus. C'est faux : ses charrettes partent pour Hautmont deux fois la semaine, pleines. Il veut seulement plus, comme tout le monde. »",
      "« Et il y a l'eau. » Elle montre un enfant assis contre un mur, qui tousse dans son poing. « On trempe le verre dans l'eau du canal. Le canal a tourné cet été. Noir. Les enfants qui portent les seaux crachent noir. Le doyen dit que ça ne gâte pas le verre. Il a raison. Le verre, ça va très bien. »",
      "« On reprend la canne quand on a le tiers, et de l'eau propre. Pas avant. » Elle te regarde. « Et si ses gourdins viennent, on ne bougera pas non plus. Je le dis pour que tu le saches. Je ne le dis pas pour faire peur. »",
      { if: { has: "II:verriers_route" }, text: "Derrière elle, tu reconnais la femme qui toussait sur la route, avec les trois verriers de Valcourt. Elle te fait un petit signe de la main." },
    ],
    choices: [{ back: "IIF_souffleurs" }] },
  IIF_bacs: { act: "II", title: "Les bacs de trempe", place: "ferrance",
    fx: { ep: ["perso", 300] },
    text: [
      "Dans la verrerie la plus proche, à côté du four éteint, il y a un grand bac de pierre où l'on plonge les pièces chaudes. Il est plein d'une eau sombre, épaisse, qui sent la vase et le fer. Une pellicule irisée flotte à la surface. Tu y plonges un doigt. Elle est tiède. Le four est éteint depuis dix jours, et elle est tiède.",
      "« La Forge-Mère a une citerne, dit un vieux verrier derrière toi. De l'eau de pluie, filtrée dans du sable et du charbon, depuis quatre cents ans. La meilleure eau de Ferrance. Le maître Ansgar ne la donne à personne. Ça fait trois générations que la Forge et la rue des Fours ne se parlent plus, pour une histoire de charbon que plus personne ne connaît. »",
      { with: "charline", text: "Charline regarde l'eau, longtemps. « Mon père donnerait la citerne si on la lui demandait, dit-elle. Personne ne la lui a jamais demandée. Ici, on ne demande rien à la Forge. C'est une question d'orgueil. Des deux côtés. »" },
    ],
    choices: [
      { label: "Aller demander l'eau de la citerne à Ansgar", hide: { any: [{ not: { seen: "IIF_ansgar" } }, { has: "IIF:citerne" }] }, to: "IIF_citerne" },
      { back: "IIF_souffleurs" },
    ] },
  IIF_citerne: { act: "II", title: "La citerne de la Forge", place: "ferrance",
    text: [
      "Ansgar écoute ta demande sans t'interrompre. Puis il dit : « Les verriers. » Il dit le mot comme s'il avait un goût. « Mon grand-père a juré que la Forge ne leur vendrait plus jamais un sac de charbon. Ils lui avaient volé une coulée. » Il réfléchit. « Il n'a jamais rien juré pour l'eau. »",
      { if: { any: [{ has: "IIF:clou" }, { quest: "II_ansgar" }] }, text: "Il hausse ses épaules énormes. « Tu as fait pour la Forge ce que personne n'a fait depuis longtemps. Je te dois bien un tonneau d'eau. Prends-en cent. » Il appelle Mathelin, et lui donne ses ordres." },
    ],
    choices: [
      { label: "Le remercier", if: { any: [{ has: "IIF:clou" }, { quest: "II_ansgar" }] }, why: "Ansgar ne te doit rien.", fx: { flag: "IIF:citerne", ep: ["seance", 1000] }, to: "IIF_citerne_ok" },
      { label: "Le convaincre que des enfants crachent noir à cent pas de sa Forge", test: { dom: "social", diff: -10, label: "Faire plier Ansgar", help: [{ with: "charline", v: 20 }] }, win: { fx: { flag: "IIF:citerne", ep: ["seance", 1000] }, to: "IIF_citerne_ok" }, lose: { fx: { ep: ["perso", 200] }, to: "IIF_citerne_non" } },
      { back: "IIF_forge" },
    ] },
  IIF_citerne_ok: { act: "II", title: "L'eau de la Forge", place: "ferrance",
    text: [
      "Le lendemain matin, une charrette de la Forge-Mère descend la rue des Fours, chargée de six tonneaux, menée par Mathelin, raide d'importance. Les grévistes se lèvent, un à un, et regardent passer la charrette sans comprendre. Mathelin s'arrête devant la verrerie d'Ombeline, saute à terre, et dit, très fort, la phrase qu'on lui a fait apprendre : « De la part du maître Ansgar. Pour les enfants. »",
      "Ombeline regarde les tonneaux, puis toi. Elle ne dit rien. Elle va chercher un seau.",
    ],
    choices: [{ back: "IIF_souffleurs" }] },

  IIF_citerne_non: { act: "II", title: "La citerne de la Forge", place: "ferrance",
    text: [
      "Ansgar secoue la tête. « Ils ne m'ont rien demandé, dit-il. Ils t'envoient, toi. Le jour où Ombeline Vasseur montera elle-même sur mon estrade, on verra. » Il le dit sans méchanceté, avec l'entêtement tranquille des vieux qui ont raison sur la forme et tort sur le fond.",
      "Tu redescends dans la halle. Il reste la table du doyen, et ce que tu sauras y dire.",
    ],
    choices: [{ back: "IIF_forge" }] },
  IIF_bastide_rate: { act: "II", title: "Le comptoir du doyen", place: "ferrance",
    text: [
      "Les colonnes de chiffres se brouillent : Bastide tient deux registres, et tu ne vois que celui qu'il veut qu'on voie. Il remarque ton regard, sourit, et referme le grand livre avec douceur. « Les comptes d'une guilde, dit-il, c'est comme le verre : ça se lit mieux à contre-jour, et de loin. » Il te raccompagne jusqu'à la porte avec une politesse parfaite.",
    ],
    choices: [{ back: "IIF_souffleurs" }] },
  IIF_bastide: { act: "II", title: "Le doyen des verriers", place: "ferrance",
    fx: { meet: "II_bastide", ep: ["perso", 300] },
    text: [
      "Maître Ernoul Bastide, doyen de la guilde des verriers, te reçoit dans son comptoir, une pièce lambrissée, chaude, qui sent la cire d'abeille. Il est grand, gras, poudré, avec des bagues de verre coloré à chaque doigt, qui jettent des petites taches de lumière sur ses registres. Il te sert lui-même un verre de vin dans un verre si fin qu'on a peur de le tenir.",
      "« Des paresseux, dit-il aimablement. Je les aime bien, remarquez. J'ai été souffleur moi-même. Mais les temps sont durs. Aldaran n'achète plus. La guerre va venir. Si je paie ce qu'ils demandent, la guilde est ruinée avant l'hiver, et alors plus personne ne mange. » Il boit une gorgée. « L'eau ? Elle a toujours été sale, l'eau du canal. Ils toussent depuis cent ans. »",
      "Il se penche vers toi. « Vous avez l'air d'une personne raisonnable. Les gens écoutent les gens raisonnables. Si vous alliez leur expliquer que la grève ne mène nulle part, que le prévôt va envoyer ses sergents, que mes hommes ne sont pas des enfants de chœur… Je saurais être reconnaissant. Vingt-cinq sous. Trente, si c'est fait avant dimanche. »",
      { with: "coliane", text: "Coliane, dans ton dos, a pris un des verres sur le dressoir, et le tourne entre ses doigts, à la lumière, comme pour voir s'il casserait facilement." },
    ],
    choices: [
      { label: "Accepter son argent", fx: { gold: 25, flag: "IIF:bastide_paye", conf: { coliane: -10 } }, to: "IIF_bastide_accord" },
      { label: "Jeter un œil à ses registres pendant qu'il parle", hide: { item: "II_registre_bastide" }, test: { dom: "savoir", diff: -10, label: "Lire les comptes à l'envers", help: [{ if: { has: "passe:cercle" }, v: 10 }, { with: "charline", v: 10 }] }, win: { fx: { item: "II_registre_bastide", ep: ["perso", 600] }, to: "IIF_bastide_comptes" }, lose: { fx: { ep: ["perso", 100] }, to: "IIF_bastide_rate" } },
      { label: "« Laisse-moi faire », murmure Coliane, en reposant le verre", who: "coliane", hide: { item: "II_registre_bastide" }, test: { dom: "discretion", diff: -10, label: "Coliane : le carnet de comptes du doyen" }, win: { fx: { item: "II_registre_bastide", conf: { coliane: 5 }, ep: ["perso", 600] }, to: "IIF_bastide_comptes" }, lose: { to: "IIF_greve_gourdins" } },
      { label: "Refuser, et sortir", back: "IIF_souffleurs" },
    ] },
  IIF_bastide_accord: { act: "II", title: "L'argent du doyen", place: "ferrance",
    text: [
      "Bastide compte les pièces dans ta main, une par une, en souriant. « La moitié maintenant, dit-il, et je vous fais confiance pour le reste. Je fais toujours confiance. C'est mon défaut. » Il te raccompagne à la porte, une main grasse posée sur ton épaule.",
      "Dehors, la rue des Fours est toujours assise. Ombeline, sur sa caisse, te regarde sortir de chez le doyen. Elle a vu. Tout le monde a vu.",
    ],
    choices: [{ back: "IIF_souffleurs" }] },
  IIF_bastide_comptes: { act: "II", title: "Les comptes du doyen", place: "ferrance",
    text: [
      "Le carnet est petit, relié de veau, et Bastide le croyait bien caché sous le grand registre. Les chiffres sont propres, réguliers, honnêtes dans leur genre : ce sont ses vrais comptes. Depuis le printemps, la guilde vend à Hautmont deux fois plus de verre qu'avant la baisse des salaires, au double du prix. Un client revient à chaque page, en lettres soignées : *pour le premier conseiller, verres de laboratoire, cornues, fioles à col long.*",
      "Le tiers pris aux souffleurs, il est là, ligne après ligne, dans la colonne de droite. Et dans la marge, d'une autre encre, Bastide a fait le calcul de ce qu'il gagnerait si la grève durait jusqu'à Noël et qu'il remplaçait la rue entière par des apprentis de Hautmont, à demi-salaire.",
    ],
    choices: [{ back: "IIF_souffleurs" }] },
  IIF_greve_gourdins: { act: "II", title: "Les gourdins du doyen", place: "ferrance",
    text: [
      "Le doyen a vu le geste de Coliane. Il ne crie pas : il sonne une clochette, très poliment, et quatre de ses hommes entrent, gourdin en main. « Raccompagnez nos amis, dit Bastide. Par la cour. »",
    ],
    choices: [
      { label: "Ne pas te laisser raccompagner", fight: { title: "Les gourdins du doyen", enemies: [{ id: "II_gourdin", n: 4 }], terrain: "bati",
        win: { fx: { ep: ["seance", 1200], flag: "IIF:gourdins_battus" }, to: "IIF_greve_cour" }, lose: { fx: { pv: -4 }, to: "IIF_greve_cour" },
        flee: { label: "Sauter par la fenêtre du comptoir", dom: "discretion", diff: 0, to: "IIF_greve_cour" } } },
    ] },
  IIF_greve_cour: { act: "II", title: "La cour du doyen", place: "ferrance",
    text: [
      { outcome: "win", text: "Les quatre hommes sont dans la boue de la cour, et les grévistes, attirés par le bruit, regardent par-dessus le mur. Quelqu'un, dans la rue, applaudit. Bastide s'est barricadé dans son comptoir." },
      { outcome: "lose", text: "Tu te retrouves dans la rue, jeté{e} sur le pavé au milieu des grévistes, la lèvre fendue. Ombeline t'aide à te relever. « Bienvenue chez nous », dit-elle." },
      { outcome: "flee", text: "Tu atterris dans un tas de tessons de verre, au pied de la fenêtre, et tu cours jusqu'au milieu des grévistes, qui se referment derrière toi sans un mot." },
      "Le doyen sait maintenant de quel côté tu es. Ses hommes, au bout de la rue, ne jouent plus aux osselets.",
    ],
    choices: [{ back: "IIF_souffleurs" }] },

  IIF_greve_table: { act: "II", title: "La table du doyen", place: "ferrance",
    text: [
      "Tu as obtenu, à force de patience, qu'ils se retrouvent tous les deux au même endroit : dans la verrerie d'Ombeline, entre le four éteint et le bac d'eau noire, devant une table de travail. Bastide est venu avec quatre de ses hommes. Ombeline est venue seule. Derrière elle, la rue entière s'est levée et se presse aux portes.",
      "Bastide parle le premier, longuement, de la guerre, des temps durs, de la ruine de la guilde. Ombeline ne dit rien. Elle le laisse finir. Puis elle te regarde, toi, et tous les regards de la verrerie te suivent.",
      { if: { has: "IIF:citerne" }, text: "Dans un coin, six tonneaux d'eau de la Forge, à moitié vides déjà. Les enfants n'ont plus craché noir depuis deux jours. Ça se voit sur les visages : la rue est moins dure, moins pressée. Il reste le tiers." },
      { if: { has: "IIF:bastide_paye" }, text: "Tu sens dans ta bourse le poids des pièces du doyen. Ombeline aussi le sent, d'une certaine façon. Elle t'a vu{e} sortir de chez lui." },
    ],
    choices: [
      { label: "Poser sur la table le carnet de comptes du doyen", if: { item: "II_registre_bastide" }, why: "Il te faudrait une preuve.", fx: { drop: "II_registre_bastide" }, to: "IIF_greve_accord" },
      { label: "Les convaincre l'un et l'autre", test: { dom: "social", diff: -20, label: "Trouver l'accord", help: [{ if: { has: "IIF:citerne" }, v: 20 }, { with: "aubin", v: 10 }, { if: { has: "IIF:gourdins_battus" }, v: 10 }] }, win: { to: "IIF_greve_accord" }, lose: { to: "IIF_greve_sang" } },
      { label: "Dire aux souffleurs de reprendre la canne, comme le doyen te paie pour le dire", if: { has: "IIF:bastide_paye" }, why: "Tu n'as rien promis au doyen.", fx: { conf: { coliane: -10, charline: -5 }, gold: 5 }, to: "IIF_greve_brisee" },
      { label: "Laisser le doyen appeler ses hommes", fx: { conf: { coliane: -5 } }, to: "IIF_greve_sang" },
    ] },
  IIF_greve_accord: { act: "II", title: "La canne reprise", place: "ferrance",
    fx: { set: { greve: "accord" }, quest: "II_greve", fac: { ordre: 5 }, ep: ["seance", 2500], regard: { II_ombeline: "redevable" } },
    text: [
      { if: { seen: "IIF_bastide_comptes" }, text: "Le carnet de veau est ouvert sur la table, entre le doyen et la meneuse. Ombeline ne sait pas bien lire les chiffres. Un vieux verrier lit pour elle, à voix haute, ligne après ligne, et la rue entière écoute. Bastide a pâli sous sa poudre. Quand le vieux arrive à la note de marge, celle sur les apprentis de Hautmont, un grand silence tombe, et Bastide se lève, et dit : « Le tiers. Vous l'aurez. »", else: "Tu parles longtemps. Tu parles de la guerre qui vient, et du verre qu'il faudra pour la faire, et de qui le soufflera si la rue meurt de faim ; tu parles de l'eau noire, et de ce qu'elle fait aux enfants, et de ce que dira la ville le jour où l'un d'eux en mourra. Bastide finit par baisser les yeux. Ombeline finit par décroiser les bras. On s'accorde sur un cinquième rendu tout de suite, le reste au printemps." },
      "Le soir même, le premier four se rallume. Puis un autre. La rue des Fours se remplit de lumière rouge et de chaleur, et les souffleurs se remettent à chanter en soufflant, une chanson à deux temps, très vieille, au rythme du souffle. Ombeline vient te trouver avant la nuit. Elle te donne une petite boule de verre bleu, grosse comme une noix, avec une bulle d'air au milieu. « Pour la chance, dit-elle. Ou pour rien. C'est joli, c'est tout. »",
      { with: "coliane", text: "Coliane regarde les fours se rallumer, et pour une fois elle ne dit rien d'ironique. « À Hautgrès, dit-elle seulement, personne n'est venu s'asseoir à une table. »" },
    ],
    choices: [{ back: "IIF_souffleurs" }] },
  IIF_greve_brisee: { act: "II", title: "La canne reprise", place: "ferrance",
    fx: { set: { greve: "brisee" }, quest: "II_greve", ep: ["seance", 1000], regard: { II_ombeline: "rancunier" } },
    text: [
      "Tu parles aux souffleurs comme le doyen voulait que tu leur parles. Tu leur parles des sergents du prévôt, de l'hiver, des familles. Tu le fais bien. C'est le pire. Au bout d'une heure, un homme se lève, puis deux, puis dix, et ils rentrent dans leurs verreries sans regarder Ombeline. Le doyen, sur le seuil, compte ses ouvriers sur ses doigts bagués.",
      "Ombeline reste seule au milieu de la rue, debout sur sa caisse, jusqu'à la nuit. Personne ne lui parle. Le lendemain, elle n'est plus là. On dit qu'elle est partie pour Valcourt, ou plus loin. Les bacs de trempe sont toujours pleins d'eau noire.",
      { with: "charline", text: "Charline ne te parle pas de la soirée. Au moment de se coucher, elle dit seulement, sans te regarder : « Mon père aurait donné la citerne. »" },
    ],
    choices: [{ back: "IIF_souffleurs" }] },
  IIF_greve_sang: { act: "II", title: "La rue des Fours", place: "ferrance",
    fx: { set: { greve: "sang" }, quest: "II_greve", ep: ["seance", 800] },
    text: [
      "Ça commence par une bousculade à la porte, un gourdin qui se lève, une canne de fer qui le pare. Puis tout va très vite. Les hommes du doyen chargent dans la verrerie, et derrière eux, venus de la place des Portes, les sergents du prévôt, en casque, avec des piques. Les grévistes ne fuient pas. Ombeline l'avait dit. Ils ne bougent pas.",
      "Quand c'est fini, il y a trois morts sur le pavé de la rue des Fours, dont un garçon de quatorze ans qui portait les seaux. Ombeline est emmenée, les mains liées, la tête en sang. Le doyen fait laver la rue dans l'après-midi. Le lendemain, les fours sont rallumés par des apprentis de Hautmont.",
      { with: "coliane", text: "Coliane s'est battue. Elle a du sang sur les mains qui n'est pas le sien. Elle ne dit rien pendant des heures. Puis, au milieu de la nuit, elle dit : « C'est comme ça que ça commence. Toujours. Quelqu'un qui compte, et des gens qui attendent. »" },
      { with: "pip", text: "Pip est resté au-dessus du corps du garçon jusqu'à ce qu'on l'emporte. Sa lumière n'a pas bougé. Elle n'a rien pu faire." },
    ],
    choices: [{ back: "IIF_souffleurs" }] },
});

// ==================================================================== the Athénée: Corbin, the token, the library, the archives
add({
  IIF_corbin: { act: "II", title: "Le recteur Corbin", place: "ferrance", backName: "le cabinet du recteur",
    fx: { meet: "corbin", ep: ["perso", 300] },
    text: [
      { first: true, text: "Le portier te fait attendre une heure sur un banc de marbre, puis te mène par un escalier blanc jusqu'au cabinet du recteur. Une pièce claire, toute en bibliothèques vitrées, avec une grande table couverte de livres ouverts les uns sur les autres et une fenêtre d'où l'on voit toute la ville sous sa fumée. Maître Corbin se lève pour t'accueillir. Il a cinquante ans, une robe bleue sans un pli, une barbe grise taillée en pointe, des mains de lettré, longues et propres, et un sourire qui arrive avant les mots et part après eux." },
      { first: true, text: "« Asseyez-vous, dit-il. On m'a dit qu'un voyageur de la commanderie s'intéressait à la Forge. Tout le monde s'intéresse à la Forge, depuis l'été. Mais vous, on m'a dit que vous étiez descendu{e} sous un château et sous un moulin. » Il croise les doigts. « Le Cercle s'intéresse beaucoup à ce qu'il y a sous les choses. C'est même la seule chose qui l'intéresse vraiment. »" },
      { again: true, text: "Maître Corbin lève les yeux de ses livres, et son sourire arrive avant lui." },
      { if: { has: "passe:cercle" }, text: "Il te regarde mieux, et son sourire change. « Mais je vous connais. La salle des copistes, il y a quelques années. Vous recopiiez les *Annales de la Sorbe*, et vous vous arrêtiez toujours une ligne trop tard. » Il rit doucement. « Je l'avais remarqué. Je n'ai rien dit. Il faut bien que quelqu'un lise jusqu'au bout. »" },
      { if: { has: "maitre:maelle" }, text: "Quand tu lui dis le nom de ta maîtresse, il pose sa plume. « Maëlle Vautrin. Elle a quitté le Cercle il y a quinze ans, en claquant une porte que nous entendons encore. Elle est passée ici, il y a un mois. Elle cherchait le registre des fondations. » Il regarde la fenêtre. « Je le lui ai refusé. Je le regrette, depuis qu'on m'a dit qu'elle avait disparu vers Morteau. »" },
      { if: { item: "jeton_ordre" }, text: "Son regard s'arrête une seconde sur le jeton de fer gris à ta ceinture. Le sourire ne bouge pas. Les yeux, si." },
    ],
    choices: [
      { label: "« Que sait le Cercle des Cinq Mains ? »", hide: { seen: "IIF_corbin_cinq" }, to: "IIF_corbin_cinq" },
      { label: "« On dit qu'on vous a volé un livre. »", hide: { any: [{ seen: "IIF_livre_corbin" }, { quest: "II_livre" }] }, to: "IIF_livre_corbin" },
      { label: "Le jeton du Cercle", hide: { any: [{ item: "jeton_cercle" }, { not: { seen: "IIF_corbin_cinq" } }] }, to: "IIF_jeton_cercle" },
      { label: "Lui rapporter la chronique enchaînée", hide: { not: { item: "II_livre_chaine" } }, fx: { drop: "II_livre_chaine" }, to: "IIF_livre_rendu" },
      { back: "IIF_athenee" },
    ] },
  IIF_corbin_cinq: { act: "II", title: "Ce que sait le Cercle", place: "ferrance",
    fx: { ep: ["perso", 500] },
    text: [
      "Corbin se lève, va jusqu'à la fenêtre, et parle en regardant la ville. « Le Cercle a été fondé cent ans après le Sceau, par des copistes qui avaient remarqué une chose simple : les chroniques ne s'accordent pas. Les plus anciennes disent une chose. Les plus récentes en disent une autre. Et entre les deux, il manque des pages. Beaucoup de pages. Arrachées, grattées, brûlées. Toujours aux mêmes endroits. »",
      "« Nous savons que les Cinq ont menti au moins une fois. Nous ne savons pas sur quoi. Certains, chez nous, croient le savoir. » Il se retourne. « Notre épée, Veyra de Hautcastel, croit le savoir. Elle croit qu'il faut casser le Sceau pour réparer le mensonge. Je crois, moi, qu'on ne répare pas un mensonge de quatre cents ans en cassant une porte dont on ne sait pas ce qu'elle retient. » Il sourit. « C'est pourquoi on me laisse diriger une école, et pas une armée. »",
      { with: "charline", text: "Charline, dans l'encadrement de la porte, a croisé les bras. « Et c'est pourquoi on m'a renvoyée, dit-elle. Parce que j'ai demandé lesquelles, de pages. » Corbin ne la regarde pas. « Mademoiselle Hildrand a mis le feu à un lutrin, dit-il doucement. Avec le livre dessus. »" },
    ],
    choices: [{ back: "IIF_corbin" }] },
  IIF_jeton_cercle: { act: "II", title: "Le jeton du Cercle", place: "ferrance",
    text: [
      "Corbin ouvre un coffret de bois sombre et en sort un jeton d'os poli, jaune comme une vieille dent, gravé d'un cercle brisé. « Il ouvre nos bibliothèques, dit-il, de Ferrance à Orme-la-Dorée. Nos copistes vous aideront. Nos maisons vous logeront. » Il le pose sur la table, entre vous, et ne retire pas la main. « Et il vous fermera, en partie, les portes de l'Ordre. Brann est un homme honnête. Il est aussi un homme qui compte ses amis. »",
      "« Je ne vous demande rien en échange, ajoute-t-il. Seulement de lire. Et de nous dire, un jour, ce que vous aurez lu. » Le sourire. « C'est beaucoup demander, en vérité. »",
      { if: { item: "jeton_ordre" }, text: "« Vous avez déjà celui de l'Ordre, je vois. Le sénéchal vous l'a donné sans conditions, je suppose. Il fait toujours ainsi. » Il pousse le jeton d'os d'un doigt vers toi. « Moi aussi, vous voyez. Nous nous ressemblons plus qu'il ne le croit. »" },
    ],
    choices: [
      { label: "Prendre le jeton du Cercle", fx: { item: "jeton_cercle", fac: { cercle: 10, ordre: -5 }, regard: { corbin: "cordial" }, conf: { charline: 5 }, ep: ["perso", 300] }, back: "IIF_corbin" },
      { label: "« Pas encore. »", back: "IIF_corbin" },
    ] },

  IIF_bibliotheque: { act: "II", title: "La bibliothèque de l'Athénée", place: "ferrance", backName: "la bibliothèque de l'Athénée",
    text: [
      { first: true, text: "La bibliothèque de l'Athénée est une longue galerie à deux étages, éclairée par des verrières que la suie a rendues grises. Des milliers de livres sur des rayonnages de chêne, des échelles à roulettes, de grandes tables où des étudiants en bleu recopient en silence. Les livres les plus précieux sont enchaînés à leurs pupitres par des chaînes de fer fin, assez longues pour qu'on les ouvre, trop courtes pour qu'on les emporte. Au fond, une porte basse ferrée, gardée par un vieil homme qui fait semblant de lire : les archives." },
      { again: true, text: "La galerie, ses verrières grises, le grattement des plumes. Le vieux gardien des archives, au fond, lève les yeux de son livre et les rabaisse." },
      { if: { all: [{ quest: "II_livre" }, { is: { livre: "rendu" } }] }, text: "Au troisième pupitre de la travée des chroniques, la chronique de l'an 3 est revenue à sa place, sous une chaîne neuve, plus grosse que les autres." },
      { if: { all: [{ seen: "IIF_livre_vol" }, { not: { quest: "II_livre" } }] }, text: "Au troisième pupitre de la travée des chroniques, une chaîne pend dans le vide, coupée net." },
    ],
    choices: [
      { label: "Demander la plus vieille chronique de l'Athénée", hide: { seen: "IIF_livre_vol" }, to: "IIF_livre_vol" },
      { label: "La porte des archives", to: "IIF_archives" },
      { back: "IIF_athenee" },
    ] },
  IIF_archives: { act: "II", title: "La porte des archives", place: "ferrance",
    text: [
      "Le gardien des archives s'appelle Maître Isembart. Il a quatre-vingts ans, une loupe pendue au cou, et il ne lève pas les yeux de son livre quand tu arrives devant sa porte. « Les archives sont fermées au public, dit-il. Ouvertes aux membres du Cercle. Ouvertes à ceux qui portent son jeton. Pour les autres, il faut une lettre du recteur. Le recteur n'en donne jamais. »",
      { with: "charline", text: "Charline, à côté de toi, te touche le coude et fait un petit geste du menton vers une tenture, au fond de la galerie, qui ne cache apparemment rien qu'un mur." },
    ],
    choices: [
      { label: "Montrer le jeton du Cercle", if: { item: "jeton_cercle" }, why: "Il te faudrait le jeton du Cercle.", to: "IIF_registre" },
      { label: "« J'ai été copiste ici. »", if: { has: "passe:cercle" }, why: "Isembart ne te connaît pas.", to: "IIF_registre" },
      { label: "Suivre Charline derrière la tenture", who: "charline", fx: { conf: { charline: 5 } }, to: "IIF_registre" },
      { label: "Attendre qu'Isembart s'endorme, et passer", test: { dom: "discretion", diff: -10, label: "Passer la porte des archives", help: [{ with: "pip", v: 10 }, { if: { item: "II_carte_ferrance" }, v: 5 }] }, win: { fx: { ep: ["perso", 300] }, to: "IIF_registre" }, lose: { to: "IIF_archives_pris" } },
      { back: "IIF_bibliotheque" },
    ] },
  IIF_archives_pris: { act: "II", title: "La porte des archives", place: "ferrance",
    text: [
      "Isembart ne s'endort pas. Il attend que tu aies la main sur la poignée, puis il dit, sans lever les yeux : « J'ai quatre-vingts ans, et je garde cette porte depuis cinquante. J'ai vu passer des voleurs plus doués que vous, et des étudiants plus bêtes. » Il tourne une page. « Revenez avec le jeton. Ou avec quelqu'un qui connaît la tenture. Je fais semblant de ne pas la connaître depuis trente ans, celle-là. »",
    ],
    choices: [{ back: "IIF_bibliotheque" }] },
  IIF_registre: { act: "II", title: "Le registre des fondations", place: "ferrance",
    fx: { clue: "m_registre", ep: ["seance", 1500] },
    text: [
      "Les archives sont une cave voûtée, sèche, qui sent la poussière et la colle. Des registres empilés jusqu'aux voûtes, des liasses ficelées, des coffres. Le registre des fondations de Ferrance est sur un lutrin à part, sous une housse de toile : un énorme volume relié de bois et de cuir, aux fermoirs de cuivre, dont la première page porte la date de l'an 1 du Sceau.",
      "Tu le feuillettes. Les fondations de la ville, page après page : la Forge, le marché, les puits, les premières maisons, les noms des premiers bourgeois. Les Cinq y signent chacun leur charte, d'une main différente. Aldar, d'une écriture énorme. Orine, fine et serrée. Thavar. Hildre, à peine lisible, une main de forgeronne. Puis une page arrachée, au ras de la couture. Puis Ivo.",
      "La page d'après l'arrachée commence au milieu d'une phrase. Tu la lis deux fois.",
      { with: "charline", text: "Charline lit par-dessus ton épaule. Elle ne dit rien. Elle sort son carnet, et elle recopie la phrase, lettre à lettre, d'une main qui ne tremble pas." },
      { with: "pip", text: "Pip s'est posé sur la couture, là où la page manque. Il reste là, tout petit, comme on se pose sur une tombe." },
    ],
    choices: [{ label: "Refermer le registre", back: "IIF_bibliotheque" }] },
});

// ==================================================================== quest: Le livre enchaîné (II_livre, echo livre=…)
add({
  IIF_livre_corbin: { act: "II", title: "Le livre volé", place: "ferrance",
    fx: { questSeen: "II_livre", ep: ["perso", 200] },
    text: [
      "Le sourire de Corbin s'efface, pour la première fois. « La chronique de l'an 3, dit-il. Le plus vieux livre de l'Athénée. Le plus vieux livre des Marches, sans doute. On a limé sa chaîne il y a quatre jours, en plein jour, dans une galerie pleine d'étudiants. Personne n'a rien vu. » Il frotte ses mains l'une contre l'autre, longuement, comme s'il avait froid. « Je fais fouiller les copistes. Je n'ai rien trouvé. »",
      "« Ce livre ne vaut rien pour un voleur ordinaire. Il est en mauvais état, l'écriture est illisible pour qui n'a pas appris. Il ne vaut quelque chose que pour quelqu'un qui sait ce qu'il y a dedans. » Il te regarde. « Rapportez-le-moi, et je vous donnerai vingt sous. Ou trente. Et ma gratitude, qui vaut plus, dans cette ville. »",
    ],
    choices: [
      { label: "« Je vais chercher. »", to: "IIF_livre_vol" },
      { back: "IIF_corbin" },
    ] },
  IIF_livre_vol: { act: "II", title: "La chaîne coupée", place: "ferrance",
    fx: { questSeen: "II_livre", ep: ["perso", 200] },
    text: [
      "Au troisième pupitre de la travée des chroniques, une chaîne de fer pend dans le vide. Le dernier maillon a été limé, proprement, à l'endroit où il s'attachait au fermoir du livre. Sur le bois du pupitre, il y a une fine poussière de limaille, et une tache d'encre, fraîche, violette : l'encre des copistes de l'Athénée, faite à la noix de galle et au bois de campêche.",
      "Le bibliothécaire de garde, un jeune homme pâle, te le dit à voix basse, en regardant partout : « Il manque une copiste depuis trois jours. Bertille Ferrat. Elle a dit qu'elle était malade. Mais elle était là le jour du vol, je l'ai vue. Elle travaillait au pupitre d'à côté. » Il se mord la lèvre. « Je ne l'ai pas dit au recteur. Bertille est gentille. »",
    ],
    choices: [
      { label: "Trouver où loge Bertille Ferrat", test: { dom: "social", diff: 0, label: "Faire parler les copistes", help: [{ if: { has: "passe:cercle" }, v: 10 }, { if: { item: "jeton_cercle" }, v: 10 }] }, win: { fx: { ep: ["perso", 400] }, to: "IIF_bertille" }, lose: { fx: { flag: "IIF:rendezvous" }, to: "IIF_bertille_partie" } },
      { label: "Suivre les traces d'encre violette", test: { dom: "savoir", diff: -10, label: "Lire une piste d'encre" }, win: { fx: { ep: ["perso", 400] }, to: "IIF_bertille" }, lose: { fx: { flag: "IIF:rendezvous" }, to: "IIF_bertille_partie" } },
      { label: "Laisser Pip suivre l'odeur de l'encre", who: "pip", fx: { conf: { pip: 5 }, ep: ["perso", 400] }, to: "IIF_bertille" },
    ] },
  IIF_bertille_partie: { act: "II", title: "La mansarde vide", place: "ferrance",
    text: [
      "Quand tu trouves enfin la mansarde de Bertille Ferrat, sous les toits de la rue des Lampistes, la porte est ouverte et la pièce est vide. Un lit défait, une malle ouverte, des plumes, des encriers, et sur la table une petite lime de serrurier, oubliée. Une voisine, sur le palier, te dit que la petite est partie le matin même avec un gros paquet sous le bras.",
      "Sur la table, sous la lime, un bout de papier froissé, de la même encre violette. *Au Pont-aux-Scories, à la cloche de minuit. Venez seule, avec l'objet. A.*",
    ],
    choices: [{ label: "Descendre à la place des Portes, et attendre la nuit", back: "IIF_portes" }] },
  IIF_bertille: { act: "II", title: "Bertille Ferrat", place: "ferrance",
    fx: { meet: "II_bertille", ep: ["perso", 300] },
    text: [
      "La mansarde est sous les toits de la rue des Lampistes, si basse qu'il faut se pencher. Bertille Ferrat a vingt ans, des doigts violets d'encre et des yeux cernés. Quand tu ouvres la porte, elle se jette sur le lit, sur un gros paquet enveloppé dans une couverture, et elle le serre contre elle. « Non, dit-elle. Non. Vous ne le rendrez pas au recteur. »",
      "Elle parle vite, d'une traite, comme quelqu'un qui a préparé ce qu'elle dirait à un juge. « Le recteur fait gratter les chroniques. Je l'ai vu. Il fait gratter des lignes, au couteau, et il fait recopier par-dessus. Il dit que c'est pour les protéger. Celle-là, il allait la faire gratter aussi, la semaine prochaine, je l'ai vue sur la liste. » Elle serre le paquet. « Un homme est venu me voir. Un homme de Hautmont, très poli, avec des gants blancs. Il dit qu'il la mettra en sûreté, dans une bibliothèque où personne ne grattera rien. Et il me donne trois couronnes. Ma mère doit deux couronnes à l'usurier. »",
      "« Ce soir, minuit, au Pont-aux-Scories. » Elle te regarde. « Vous allez me dénoncer ? »",
      { with: "charline", text: "Charline s'est assise sur le bord de la malle. « Je le savais, dit-elle doucement. Pour les lignes grattées. C'est ce que j'ai dit le jour où ils m'ont renvoyée. Personne ne m'a crue. » Bertille la regarde comme on regarde une sœur." },
    ],
    choices: [
      { label: "Ouvrir la chronique, avant toute chose", hide: { seen: "IIF_livre_lu" }, to: "IIF_livre_lu" },
      { label: "Reprendre le livre, pour le rendre à l'Athénée", test: { dom: "social", diff: -10, label: "Convaincre Bertille", help: [{ with: "charline", v: 15 }, { if: { has: "passe:cercle" }, v: 10 }] }, win: { to: "IIF_livre_rendu" }, lose: { fx: { flag: "IIF:rendezvous", regard: { II_bertille: "mefiant" } }, to: "IIF_bertille_fuit" } },
      { label: "Le garder toi-même, à l'abri de tous", fx: { item: "II_livre_chaine", regard: { II_bertille: "curieux" } }, to: "IIF_livre_garde" },
      { label: "« Va au pont. Je viens avec toi. »", fx: { flag: "IIF:rendezvous", regard: { II_bertille: "cordial" } }, to: "IIF_bertille_attente" },
    ] },
  IIF_bertille_fuit: { act: "II", title: "Bertille s'enfuit", place: "ferrance",
    text: [
      "Bertille t'écoute jusqu'au bout. Puis elle se lève, le paquet serré contre elle, et passe sous ton bras avant que tu aies compris. Tu entends ses sabots dans l'escalier, puis dans la rue. Quand tu arrives en bas, elle a disparu dans la fumée.",
      "Il reste minuit. Et le Pont-aux-Scories.",
    ],
    choices: [{ label: "Descendre à la place des Portes, et attendre la nuit", back: "IIF_portes" }] },
  IIF_bertille_attente: { act: "II", title: "En attendant minuit", place: "ferrance",
    text: [
      "Bertille te regarde longtemps, puis elle hoche la tête. Elle ne te remercie pas. Elle s'assied sur son lit, le paquet sur les genoux, et elle attend. Tu attends avec elle, un moment, dans la mansarde où l'on entend battre les marteaux de toute la ville à travers le toit.",
      "« Venez au pont à minuit, dit-elle enfin. Je serai là. Si vous n'êtes pas là, je vendrai. » Elle essaie de sourire. « Je vendrai quand même, sans doute. Mais je préférerais que quelqu'un regarde. »",
    ],
    choices: [{ label: "Descendre à la place des Portes, et attendre la nuit", back: "IIF_portes" }] },
  IIF_livre_lu: { act: "II", title: "La chronique de l'an 3", place: "ferrance",
    fx: { clue: "m_athenee", ep: ["seance", 1500] },
    text: [
      "Le livre est lourd, relié de planches de chêne recouvertes d'un cuir qui s'effrite sous les doigts. Les pages sont de parchemin épais, jauni, et l'écriture est celle des premiers temps, anguleuse, serrée, à l'encre brune. Il faut lire lentement, en épelant. Tu tournes les pages jusqu'aux années qui suivent la fermeture de la Brèche.",
      "Le chroniqueur raconte les Cinq. Il les raconte simplement, sans les majuscules qu'on leur mettra plus tard : Aldar qui commande, Orine qui négocie, Thavar qui garde, Hildre qui forge, Ivo qui prie. Et un nom qui revient, à côté des leurs, une fois, deux fois, puis plus du tout.",
      "Tu compares, ensuite, avec une chronique plus récente posée sur la table de Bertille, celle qu'elle recopiait. La même phrase, le même nom. Mais pas le même mot après le nom.",
      { with: "charline", text: "Charline lit avec toi, le doigt sur la ligne. Elle ne dit rien. Elle referme le livre très doucement, comme on ferme les yeux à quelqu'un." },
    ],
    choices: [
      { label: "Refermer la chronique", to: [{ if: { seen: "IIF_pont_apres" }, to: "IIF_pont_apres" }, { to: "IIF_bertille" }] },
    ] },

  IIF_pont: { act: "II", title: "Le Pont-aux-Scories", place: "ferrance", takes: "night",
    text: [
      "Le Pont-aux-Scories enjambe le canal noir à l'endroit où les forges y jettent leurs déchets. La nuit, l'eau fume. Les scories, sur les berges, luisent d'un reste de chaleur, et l'air sent le soufre à vomir. La cloche de l'Athénée sonne minuit. Bertille est au milieu du pont, toute petite, son paquet serré contre elle.",
      "Un homme vient de l'autre rive. Il porte un manteau de bonne laine, un chapeau, et des gants blancs, impeccables, qui brillent dans le noir. Deux autres hommes le suivent, à distance, les mains sous leurs manteaux. « Mademoiselle Ferrat, dit l'homme aux gants blancs, d'une voix douce, avec l'accent des hautes terres. Ponctuelle. C'est une qualité. » Il te voit. Il ne s'arrête pas. « Et vous avez amené quelqu'un. C'est un défaut. »",
      { with: "coliane", text: "Coliane s'est fondue dans l'ombre de la rambarde, si bien que tu ne la vois plus. Tu sais seulement qu'elle est là, quelque part, à portée de couteau des deux hommes du fond." },
    ],
    choices: [
      { label: "Laisser la vente se faire", fx: { gold: 20 }, to: "IIF_livre_vendu" },
      { label: "Échanger le paquet contre un autre, au dernier moment", test: { dom: "discretion", diff: -10, label: "Faire passer un registre pour la chronique", help: [{ with: "coliane", v: 15 }, { with: "pip", v: 10 }] }, win: { fx: { ep: ["seance", 1500] }, to: "IIF_pont_ruse" }, lose: { to: "IIF_pont_combat" } },
      { label: "« Ce livre ne quittera pas Ferrance. »", to: "IIF_pont_combat" },
    ] },
  IIF_pont_combat: { act: "II", title: "Le Pont-aux-Scories", place: "ferrance",
    combat: { title: "Les hommes aux gants blancs", enemies: [{ id: "II_spadassin", n: 2 }, "II_gantsblancs"], terrain: "bati",
      win: { fx: { ep: ["seance", 2000] }, to: "IIF_pont_apres" }, lose: { fx: { pv: -4 }, to: "IIF_livre_perdu" },
      flee: { label: "Sauter du pont, avec Bertille et le livre", dom: "discretion", diff: -20, to: "IIF_pont_apres" } },
    text: [
      "L'homme aux gants blancs soupire, comme quelqu'un qu'on dérange pendant son repas, et recule d'un pas. Ses deux hommes ont sorti des épées courtes, des lames de bonne facture, et ils viennent sur toi par les deux côtés du pont, sans hâte, comme des gens qui font ça souvent.",
    ] },
  IIF_pont_ruse: { act: "II", title: "Le Pont-aux-Scories", place: "ferrance",
    text: [
      "Tu t'approches de Bertille comme pour la rassurer, tu lui prends le bras, et dans le même geste le paquet change de mains : le sien sous ton manteau, et dans les siens un autre, de la même taille, enveloppé dans la même couverture, qui contient un vieil almanach de la Forge et deux briques. L'homme aux gants blancs prend le paquet, le soupèse, ne l'ouvre pas. Il pose une bourse dans les mains de Bertille. « Un plaisir », dit-il.",
      "Il s'en va par où il est venu, ses deux hommes derrière lui. Un peu plus tard, de l'autre côté du canal, une cheminée d'auberge se met à cracher une fumée plus épaisse que les autres, et des étincelles. Bertille regarde la fumée, puis toi, puis la bourse dans ses mains. Elle comprend. Elle se met à trembler. « Il allait le brûler, dit-elle. Il allait le brûler. »",
    ],
    choices: [{ label: "Emmener Bertille loin du pont", fx: { flag: "IIF:bertille_payee" }, to: "IIF_pont_apres" }] },
  IIF_pont_apres: { act: "II", title: "Après le pont", place: "ferrance",
    text: [
      { outcome: "win", text: "Les deux spadassins sont au fond du canal, ou dessus, et l'homme aux gants blancs s'est enfui en tenant sa main ; un de ses gants est resté sur le pont, blanc dans la boue noire. Bertille est assise contre la rambarde, le livre serré contre elle." },
      { outcome: "flee", text: "Vous remontez du canal, trempés, puant le soufre, Bertille cramponnée à toi et au livre, sous un escalier de blanchisseuses, loin du pont. Personne ne vous a suivis." },
      { if: { has: "IIF:bertille_payee" }, text: "Bertille a gardé la bourse de l'homme aux gants blancs. Elle la regarde comme une chose sale. « Ma mère aura ses deux couronnes, dit-elle. Je ne sais pas si je dois avoir honte. »" },
      "Le livre est là, entre vous, dans sa couverture mouillée. La chronique de l'an 3. Il faut décider ce qu'on en fait.",
    ],
    choices: [
      { label: "L'ouvrir, avant toute chose", hide: { seen: "IIF_livre_lu" }, to: "IIF_livre_lu" },
      { label: "Le rapporter au recteur Corbin", to: "IIF_livre_rendu" },
      { label: "Le garder toi-même, à l'abri de tous", fx: { item: "II_livre_chaine" }, to: "IIF_livre_garde" },
    ] },
  IIF_livre_rendu: { act: "II", title: "La chronique rendue", place: "ferrance",
    fx: { set: { livre: "rendu" }, quest: "II_livre", gold: 25, fac: { cercle: 10 }, regard: { corbin: "redevable" }, ep: ["seance", 2000] },
    text: [
      "Maître Corbin reçoit le livre dans son cabinet. Il défait la couverture lui-même, avec des gestes lents, et il pose la main à plat sur la reliure de chêne, comme on pose la main sur un cheval qu'on croyait perdu. « Merci, dit-il. Vraiment. » Il compte vingt-cinq sous sur la table, en piles de cinq.",
      "« Et la petite Ferrat ? » demande-t-il sans lever les yeux. Tu lui dis ce que tu veux bien lui dire. Il hoche la tête. « Je ne la ferai pas poursuivre. Mais elle ne copiera plus ici. » Il se tait. « On me prête des intentions, je le sais. On dit que je gratte les chroniques. » Il te regarde enfin. « Je ne gratte rien. Je fais recopier ce qui s'efface, avant que ça s'efface tout à fait. Vous me croirez si vous voulez. »",
      { with: "charline", text: "Charline, derrière toi, a les yeux fixés sur la reliure. « Une chaîne plus grosse, dit-elle. C'est tout ce que vous allez faire ? » Corbin ne répond pas." },
    ],
    choices: [{ label: "Laisser le recteur à sa chronique", back: "IIF_athenee" }] },
  IIF_livre_garde: { act: "II", title: "La chronique gardée", place: "ferrance",
    fx: { set: { livre: "garde" }, quest: "II_livre", fac: { cercle: -10 }, ep: ["seance", 1500] },
    text: [
      "Tu enveloppes la chronique dans ta couverture, et tu la ranges au fond de ton sac. Elle pèse lourd. Elle pèse le poids des livres qu'on n'a pas le droit de lire jusqu'au bout. Ni le recteur, ni l'homme aux gants blancs, ni personne ne la grattera, ne la brûlera, ne la recopiera par-dessus. Elle est à toi, maintenant, ce qui veut dire qu'elle n'est plus à personne.",
      "Bertille te regarde faire. « On dira que c'est moi qui l'ai volée, dit-elle. Et ce sera vrai. » Elle hausse les épaules. « Je partirai pour Valcourt. Il y a une école là-bas. Ils ne posent pas de questions. » Elle te serre la main, très fort, de ses doigts violets d'encre.",
      "Le lendemain, à l'Athénée, on ne parle que de ça. Corbin ne te reçoit plus qu'avec un sourire qui n'arrive plus avant les mots.",
    ],
    choices: [{ label: "Descendre vers la place des Portes", back: "IIF_portes" }] },
  IIF_livre_vendu: { act: "II", title: "La vente", place: "ferrance",
    fx: { set: { livre: "vendu" }, quest: "II_livre", ep: ["seance", 800] },
    text: [
      "Tu ne bouges pas. Bertille tend le paquet. L'homme aux gants blancs le prend, l'ouvre d'un coin, vérifie la reliure à la lueur des scories, et le referme. Il pose une bourse dans les mains de la copiste, puis il se tourne vers toi et t'en tend une autre, plus petite. « Pour votre discrétion, dit-il. On paie toujours la discrétion, à Hautmont. C'est notre principale dépense. »",
      "Il s'en va. Un peu plus tard, de l'autre côté du canal, une cheminée d'auberge se met à cracher une fumée plus épaisse que les autres, avec des étincelles. Bertille regarde la fumée longtemps. Elle ne dit rien. Puis elle s'en va, elle aussi, sans te dire au revoir, en serrant sa bourse contre elle comme une chose qu'elle aurait volée deux fois.",
      { with: "pip", text: "Pip regarde la fumée avec toi jusqu'à ce qu'elle se mêle à celle des forges. Puis il se cache dans ton col, et il refuse d'en sortir jusqu'au matin." },
    ],
    choices: [{ label: "Remonter vers la place des Portes", back: "IIF_portes" }] },
  IIF_livre_perdu: { act: "II", title: "Le pont, au matin", place: "ferrance",
    fx: { set: { livre: "perdu" }, quest: "II_livre", ep: ["seance", 800] },
    text: [
      "Tu te réveilles sur le pavé du pont, à l'aube, la tête dans les scories tièdes, avec un goût de soufre et de sang dans la bouche. Bertille est assise à côté de toi, les genoux sous le menton. Elle n'a plus le paquet. Elle n'a pas la bourse non plus : ils ont repris les deux.",
      "De l'autre côté du canal, une cheminée d'auberge fume encore, plus noir que les autres. « Ils l'ont brûlée, dit Bertille. Dans la cheminée. J'ai vu les pages s'envoler par le haut. » Elle s'essuie le nez du revers de la manche. « Le recteur avait raison, au fond. Il y a des gens qui grattent. Et il y a des gens qui brûlent. »",
    ],
    choices: [{ label: "Remonter vers la place des Portes", back: "IIF_portes" }] },
});

// ==================================================================== campfire talks (banter)
add({
  II_feu_route: { act: "II", title: "Le feu du Val", banter: true, with: "pip",
    text: [
      "Le feu claque. Pip, posé sur une pierre chaude, regarde les braises comme il regarde tout, avec une attention entière. Puis il vient se poser sur ton genou, et sa lumière forme quelque chose qu'il a appris à faire depuis peu, une sorte de question qui n'a pas besoin de mots.",
      "Il veut savoir pourquoi les gens de la croix des Pèlerins accrochent des gants. Tu lui expliques : les morts de l'Ordre, les gants gris, la main ouverte. Il écoute. Puis il vole jusqu'à ta main, se pose au creux de ta paume, et s'y blottit, aussi petit qu'il peut, comme quelque chose qu'on tient. Il reste là.",
    ],
    choices: [
      { label: "Refermer doucement la main sur lui", fx: { conf: { pip: 10 } }, to: "@ret" },
      { label: "Le laisser repartir vers le feu", fx: { conf: { pip: 3 } }, to: "@ret" },
    ] },
  IIF_veillee_charline: { act: "II", title: "Le feu de Charline", banter: true, with: ["charline", "pip"],
    text: [
      "Le bois est mouillé, le feu ne prend pas. Charline le regarde se débattre un moment, puis elle tend la main, et les flammes se dressent d'un coup, claires et droites, et le bois se met à chanter. Pip se rapproche, fasciné. Il tourne autour de la main de Charline sans jamais la toucher.",
      "« Tu n'as pas peur de moi, toi, dit-elle. — Il n'a peur de rien qui brille, dis-tu. — Si, dit-elle. Il a peur de l'eau. Je l'ai vu au canal. » Elle reste un moment silencieuse. « Moi aussi, en fait. Le feu, je sais ce qu'il veut. L'eau, je ne sais pas. »",
      { if: { has: "ansgar=parle" }, text: "Elle regarde ses mains, encore luisantes du baume qu'elle a étalé sur celles de son père. « Il a dormi, m'a écrit Mathelin. Toute une nuit. La première depuis six ans. » Elle sourit, sans lever les yeux." },
    ],
    choices: [
      { label: "« Le feu, tu me le confierais ? »", fx: { conf: { charline: 10 } }, to: "@ret" },
      { label: "« Fais attention, quand même. »", fx: { conf: { charline: -10 }, fear: { charline: 5 } }, to: "@ret" },
    ] },
  IIF_veillee_coliane: { act: "II", title: "Les couteaux et les livres", banter: true, with: ["charline", "coliane"],
    text: [
      "Coliane affûte ses couteaux, l'un après l'autre, sur une pierre qu'elle mouille d'un crachat. Charline lit, le nez dans son carnet, à la lueur du feu. Pendant un bon moment, on n'entend que la pierre et les pages.",
      "« Ça sert à quoi, tout ce que tu lis ? demande Coliane sans lever les yeux. — À savoir qui ment, dit Charline. — Moi, je le sais sans lire. — Non, dit Charline. Toi, tu sais qui t'a menti. Ce n'est pas pareil. » Coliane s'arrête d'affûter. Elle regarde Charline longtemps. Puis elle reprend, plus lentement. « À Hautgrès, dit-elle, l'homme qui a ouvert l'écluse, je l'aurais cru sur parole. Je l'ai cru. »",
    ],
    choices: [
      { label: "Les laisser parler entre elles", fx: { conf: { coliane: 5, charline: 5 } }, to: "@ret" },
      { label: "« Personne ici ne te mentira, Coliane. »", fx: { conf: { coliane: 5 } }, to: "@ret" },
    ] },
});

// ==================================================================== extras
var EXTRAS = {
  people: {
    corbin: { name: "Maître Corbin", f: false, face: { age: "mur", beard: "barbe", coif: "court" }, desc: "Recteur de l'Athénée du Cercle à Ferrance. Une robe bleue sans un pli, un sourire qui arrive avant les mots et part après eux." },
    II_gontran: { name: "Frère Gontran", f: false, face: { age: "mur", coif: "degarni" }, desc: "Le cellérier de la commanderie du Val d'Anse. Rond, rose, chauve, et un registre de comptes qu'il faut deux mains pour fermer." },
    II_gauvard: { name: "Messire Gauvard", f: false, face: { age: "ancien", coif: "court", marks: ["cicatrice"] }, desc: "Le maître d'armes de la commanderie. Sec comme un cep, trois doigts à la main gauche, et il s'en sert mieux que les jeunes de toute la main." },
    II_hilaire: { name: "Frère Hilaire", f: false, face: { age: "ancien" }, desc: "Le portier du Grand Maître. Il dort assis devant une porte noire, et il répète mot pour mot ce qu'on dit derrière." },
    II_berenger: { name: "Frère Bérenger", f: false, face: { age: "jeune", marks: ["rousseur"] }, desc: "Le plus jeune gant gris de la commanderie, messager du sénéchal Brann." },
    II_pacome: { name: "Pacôme", f: false, face: { age: "enfant" }, desc: "Le palefrenier de la commanderie. Il parle aux chevaux plus qu'aux gens, et il a sans doute raison." },
    II_ombeline: { name: "Ombeline Vasseur", f: true, face: { age: "adulte", coif: "chignon", marks: ["cicatrice"] }, desc: "Souffleuse de verre, meneuse de la grève de la rue des Fours à Ferrance. Des yeux gris très calmes." },
    II_bastide: { name: "Maître Ernoul Bastide", f: false, face: { age: "mur", coif: "court" }, desc: "Doyen de la guilde des verriers de Ferrance. Grand, gras, poudré, des bagues de verre à chaque doigt." },
    II_bertille: { name: "Bertille Ferrat", f: true, face: { age: "jeune", coif: "milong" }, desc: "Copiste à l'Athénée de Ferrance, vingt ans, les doigts violets d'encre." },
    II_gerberte: { name: "Gerberte", f: true, face: { age: "mur", coif: "chignon" }, desc: "La patronne de l'auberge du Soufflet, à Ferrance. Elle sait ce qui se passe en ville une heure avant que ça se passe." },
    II_mathelin: { name: "Mathelin", f: false, face: { age: "jeune" }, desc: "L'apprenti d'Ansgar à la Forge-Mère. Seize ans, des bras de forgeron et une tête d'enfant." },
  },
  items: {
    II_lettre_brann: { name: "La lettre du sénéchal Brann", kind: "document", keep: true, desc: "Une lettre pliée en trois, fermée d'une cire grise à la main ouverte.",
      text: "« Le sénéchal de l'Ordre de la Main, à qui est descendu sous le moulin de Brumefeuille. On m'a dit ce que tu as trouvé sous le château des trolls de la crête, et ce que tu as fait sous la roue. Ce sont des choses dont l'Ordre a la garde depuis quatre cents ans, et que l'Ordre garde mal. Viens à la commanderie du Val d'Anse par la route du nord, avant les premières gelées. Je ne te convoque pas : je n'en ai pas le droit. Je te le demande. Ne parle à personne de ce que tu portes. L'eau entend. Brann. »" },
    II_faux_clou: { name: "Un « Clou de Hildre »", kind: "quete", desc: "Un gros clou de fer noir vendu par Anselme le colporteur. Il ressemble exactement à ce qu'on imagine. C'est ce qui le trahit." },
    II_carte_ferrance: { name: "Plan de Ferrance", kind: "outil", price: 6, desc: "Un plan à la plume des rues de Ferrance, avec les portes de service des grandes maisons notées en marge, d'une autre encre." },
    II_baume: { name: "Baume de Cassagne", kind: "soin", heal: 10, unique: false, price: 10, desc: "Suif de mouton et racine de consoude. Pour les vieilles brûlures qui ne guérissent plus, et les neuves." },
    II_elixir: { name: "Élixir de l'apothicaire", kind: "soin", heal: 16, unique: false, price: 18, desc: "Amer, brun, et il remet debout ceux qui ne devraient pas l'être." },
    II_epee_ordre: { name: "Épée de l'Ordre", kind: "arme", dmg: 8, att: 5, price: 55, desc: "Une épée longue de la commanderie, au pommeau frappé d'une main ouverte. Sobre, juste, bien trempée." },
    II_marteau_ferrance: { name: "Marteau de guerre de Ferrance", kind: "arme", dmg: 10, att: -5, price: 50, desc: "Une tête d'acier de la Forge-Mère sur un manche de frêne cerclé de fer. Il n'a pas besoin de viser juste." },
    II_cotte_ferrance: { name: "Haubert de Ferrance", kind: "armure", def: 25, price: 150, desc: "Une cotte à mailles serrées, doublée de cuir, forgée rue Haute. Lourde, et qui le vaut." },
    II_tablier: { name: "Tablier de forgeron", kind: "armure", def: 12, price: 18, desc: "Un tablier de cuir épais, roussi, qui a vu passer plus d'étincelles que de lames." },
    II_livre_chaine: { name: "La chronique de l'an 3", kind: "quete", keep: true, desc: "Le plus vieux livre de l'Athénée, relié de chêne, avec un bout de chaîne limée qui pend au fermoir." },
    II_registre_bastide: { name: "Le carnet de comptes du doyen Bastide", kind: "document", desc: "Un petit carnet relié de veau : les vrais comptes de la guilde des verriers." },
  },
  enemies: {
    II_deserteur: { name: "Déserteur d'Aldaran", look: "humain", pv: 22, att: 44, def: 18, dmg: 5, desc: "Un piquier qui a arraché la tour d'argent de son tabard. Il a faim, et il sait encore se mettre en rang." },
    II_gauvard: { name: "Messire Gauvard", look: "humain", pv: 40, att: 55, def: 25, dmg: 3, desc: "Le maître d'armes de la commanderie, une lame émoussée à la main. Trois doigts à la main gauche, et aucune pitié à l'entraînement." },
    II_compagnon: { name: "Compagnon de la Forge", look: "humain", pv: 24, att: 42, def: 15, dmg: 6, desc: "Un forgeron de la Forge-Mère, torse nu, un marteau à la main. Il frappe comme il forge." },
    II_gourdin: { name: "Homme du doyen", look: "humain", pv: 20, att: 40, def: 14, dmg: 5, desc: "Un gros bras venu de Hautmont, sans tablier, avec un gourdin et une solde." },
    II_spadassin: { name: "Spadassin de Hautmont", look: "humain", pv: 26, att: 50, def: 20, dmg: 6, desc: "Une épée courte de bonne facture, des gestes d'habitué. Il ne parle pas, il attend qu'on le paie." },
    II_gantsblancs: { name: "L'homme aux gants blancs", look: "humain", pv: 40, att: 55, def: 22, dmg: 6, desc: "Un homme de Hautmont, poli, à l'accent des hautes terres. Il achète les vieux livres, et ils finissent dans la cheminée." },
  },
  clues: {
    v_commanderie: { rev: "V", text: "Frère Foulques s'est noyé à genoux dans l'abreuvoir de la commanderie, dans un pied d'eau, les mains croisées. Depuis une semaine, il disait que sa femme, morte depuis dix ans, l'appelait la nuit dans l'eau de la cour." },
  },
  quests: [
    { id: "II_livre", act: "II", kind: "annexe", title: "Le livre enchaîné", start: "IIF_bibliotheque", echo: ["livre=rendu", "livre=garde", "livre=vendu", "livre=perdu"] },
    { id: "II_greve", act: "II", kind: "annexe", title: "La grève des souffleurs", start: "IIF_souffleurs", echo: ["greve=accord", "greve=brisee", "greve=sang"] },
    { id: "II_ansgar", act: "II", kind: "annexe", title: "Les mains d'Ansgar", start: "IIF_forge", echo: ["ansgar=parle", "ansgar=baume", "ansgar=silence"] },
  ],
  routes: [
    { id: "r_val", name: "La route du nord", from: "brumefeuille", to: "commanderie", steps: 4, region: "val", twoWay: false,
      label: "Prendre la route du nord, vers la commanderie du Val d'Anse", if: { has: "acte:II" }, why: "Rien ne t'appelle encore vers le nord.",
      legs: [
        { step: 1, passage: "II_leg_bac", if: { not: { seen: "II_leg_bac" } } },
        { step: 2, passage: "II_leg_anselme", if: { not: { seen: "II_leg_anselme" } } },
        { step: 3, passage: "II_leg_croix", if: { not: { seen: "II_leg_croix" } } },
        { step: 4, passage: "II_leg_val", if: { not: { seen: "II_leg_val" } } },
      ] },
    { id: "r_ferrance", name: "La route des forges", from: "commanderie", to: "ferrance", steps: 2, region: "val",
      label: "Prendre la route des forges, vers Ferrance", labelBack: "Redescendre vers la commanderie du Val d'Anse",
      legs: [{ step: 1, passage: "IIF_route_fumee", dir: "aller", if: { not: { seen: "IIF_route_fumee" } } }] },
  ],
  regions: {
    val: { name: "Le Val d'Anse", ambiance: "champs", chance: 0.5,
      events: ["EII_deserteurs", "EII_charrette", "EII_flaque", "EII_pelerins", "EII_source", "EII_souffleurs", "EII_trolls"],
      quiet: [
        "La route longe l'Anse, vive et claire entre des prés fauchés où l'herbe repousse courte. Des vaches rousses lèvent la tête au passage, puis la rebaissent. Un héron se tient dans l'eau sur une patte, si immobile qu'on le prend pour un piquet.",
        "Un vent froid descend des hauteurs et fait tourner les feuilles mortes dans les ornières. Les noyers, au bord du chemin, sont déjà nus. Une femme gaule les dernières noix avec une perche, et ses enfants les ramassent dans leurs tabliers.",
        "Le ciel est bas, gris, et une bruine fine commence, qui ne mouille pas vraiment mais finit par tout tremper. Le chemin monte, descend, remonte. On croise un moine à dos de mule qui ne dit pas bonjour et un charretier qui dit bonjour deux fois.",
        "À l'est, au-dessus des collines, le ciel est brun : la fumée de Ferrance, qu'on voit à deux jours de marche. Le vent, quand il tourne, apporte une odeur de soufre et de fer chaud.",
      ],
      camp: [
        "Vous faites halte dans une grange à foin abandonnée, au bord de l'Anse. Le foin est vieux, mais il est sec. On entend la rivière toute la nuit, et un hibou dans la charpente, qui ne veut pas partir.",
        "Le camp est dressé à l'abri d'un mur de pierres sèches, sous un grand châtaignier. Tu fais griller des châtaignes sous la cendre. Elles éclatent dans la nuit avec des petits bruits secs, et chaque fois, tu sursautes.",
        "Vous dormez dans le porche d'une chapelle des champs, sous une main ouverte sculptée au-dessus de la porte. Il fait froid. La pierre garde un peu de la chaleur du jour, et puis plus rien.",
      ] },
  },
  events: {
    EII_deserteurs: { passage: "EII_deserteurs", weight: 2 },
    EII_charrette: { passage: "EII_charrette", weight: 2 },
    EII_flaque: { passage: "EII_flaque", weight: 1 },
    EII_pelerins: { passage: "EII_pelerins", weight: 2 },
    EII_source: { passage: "EII_source", weight: 1 },
    EII_souffleurs: { passage: "EII_souffleurs", weight: 2, if: { not: { quest: "II_greve" } } },
    EII_trolls: { passage: "EII_trolls", weight: 2, if: { has: "grauk:allie" } },
  },
  shops: {
    II_intendance: { name: "L'intendance de l'Ordre", sells: [{ item: "onguent", price: 5 }, { item: "gariig", price: 3 }, { item: "corde", price: 3 }, { item: "lanterne", price: 5 }, { item: "gambison", price: 22 }, { item: "II_epee_ordre", price: 55 }] },
    II_armurier: { name: "L'armurerie Oudard", sells: [{ item: "epee_longue", price: 45 }, { item: "masse", price: 30 }, { item: "hache", price: 22 }, { item: "II_marteau_ferrance", price: 50 }, { item: "cuir", price: 40 }, { item: "cotte", price: 90 }, { item: "II_cotte_ferrance", price: 150 }, { item: "II_tablier", price: 18 }] },
    II_apothicaire: { name: "L'officine Cassagne", sells: [{ item: "onguent", price: 6 }, { item: "gariig", price: 4 }, { item: "II_baume", price: 10 }, { item: "II_elixir", price: 18 }] },
  },
  banter: [
    { id: "II_feu_route", if: { all: [{ present: "pip" }, { has: "acte:II" }] } },
    { id: "IIF_veillee_charline", if: { all: [{ present: "charline" }, { present: "pip" }] } },
    { id: "IIF_veillee_coliane", if: { all: [{ present: "charline" }, { present: "coliane" }] } },
  ],
  achievements: {
    II_pour_la_porte: { title: "Pour la porte", desc: "Dire au maître de la Forge-Mère pour qui Hildre a forgé le Clou, sans qu'on te l'ait appris.", if: { has: "IIF:nom_vrai" } },
  },
};

module.exports = { passages: P, extras: EXTRAS };
