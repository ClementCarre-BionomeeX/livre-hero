// Act IV, lot IV1: the start of act IV at Merle, the road up the rotting Sorbe to the camp of Vaux-Saint-Pierre (r_vaux,
// region souillee and its EIV_ events, a changed Brumefeuille on the way), the refugee camp (arrival and hub of the act,
// side quests IV_anselme and IV_saintgilles), the road to the tower of Hildre (r_tour) and the tower itself: four wings,
// one companion arc per wing (Charline, Aubin, Thavary, Gloup), each also playable alone, and the central room.
var R = "@route";
var P = {};
var WINGS = [{ has: "IVT:feu" }, { has: "IVT:eau" }, { has: "IVT:pierre" }, { has: "IVT:vase" }];

// ------------------------------------------------------------------ the start of act IV, at Merle
Object.assign(P, {
  IV_route: { act: "IV", title: "Le dégel de Merle", place: "merle", backName: "la grève de Merle",
    fx: { flag: "acte:IV", ep: ["seance", 1500] },
    text: [
      "Un matin, la glace de l'Isarde craque d'une rive à l'autre avec un bruit de bois qu'on fend, et le soir elle est partie. L'eau qui passe sous le gué est grise, d'un gris de lessive usée, et elle sent le fer. Les bateliers de Merle n'y mettent plus leurs barques. Ils les ont tirées sur la grève et retournées, la coque en l'air, comme des bêtes mortes.",
      "Depuis huit jours, il passe sur la route du nord des gens qui ne sont ni des soldats ni des marchands. Des familles de la Sorbe, avec une vache, une charrette à bras, un coffre de mariage sanglé sur le dos d'un âne. Ils s'arrêtent à Merle le temps de boire au puits de l'église, le seul qu'on surveille encore, et ils repartent vers l'est, vers la Fenne. Quand on leur demande où ils vont, ils disent tous le même nom : Vaux-Saint-Pierre. On dit qu'il y a là-bas un camp, une source qui ne noircit pas, et de la place pour tout le monde. Personne n'y croit tout à fait. Tout le monde y va.",
      "Tu as vu passer, hier, une femme de Brumefeuille. Elle ne t'a pas reconnu{e}. Elle portait un seau vide, attaché à sa ceinture par une corde, et elle ne l'a pas lâché une seule fois pendant qu'elle mangeait sa soupe.",
      { if: { is: { couronne: "aldaran" } }, text: "Les tabards bleus d'Aldaran tiennent la rive, maintenant, et un sergent compte les réfugiés au passage, sur une tablette de cire, sans rien leur donner. Hautmont a gagné la guerre. Hautmont ne sait pas quoi faire de ceux qui l'ont perdue sans y être." },
      { if: { is: { couronne: "velorin" } }, text: "Un commis de Vel-Orin, dans une cabane de planches au bout du gué, vend des laissez-passer pour l'est à deux sous la tête. Il a l'air sincèrement surpris qu'on trouve ça cher. La duchesse a gagné ; ses commis encaissent." },
      { if: { is: { couronne: "paix" } }, text: "Sur la grève, un piquier d'Aldaran et un arbalétrier de Vel-Orin distribuent ensemble le pain des deux couronnes, sans se parler, chacun de son côté du même tréteau. C'est la paix que tu as faite. Elle a l'air fatiguée, et elle tient." },
      { if: { has: "merle:sauve" }, text: "Le vieux Mauger a remis ta barque à l'eau pour toi, une dernière fois, et il te propose de te passer sur l'autre rive « pour rien, et même pour moins que ça »." },
      { if: { mark: { min: 3 } }, text: "La tache de ta paume a passé le poignet depuis le gué. Elle ne fait pas mal. Elle est tiède, simplement, comme une main qu'on tiendrait dans la sienne, et quand tu te penches sur l'eau grise du gué, il te semble qu'elle se tend vers elle." },
      { with: "pip", text: "Pip ne quitte plus ton épaule. Il regarde la route de l'est avec une attention que tu ne lui connais pas. « Ils vont tous vers la montagne, dit-il. Comme l'eau, mais à l'envers. »" },
    ],
    choices: [
      { label: "Monter à la grange de l'église, où ta maîtresse se repose", hide: { any: [{ not: { is: { maitre: "sauve" } } }, { seen: "IV_route_adieu" }] }, to: "IV_route_adieu" },
      { label: "Monter une dernière fois sur la colline, à la tombe sans nom", hide: { any: [{ not: { is: { maitre: "mort" } } }, { seen: "IV_route_colline" }] }, to: "IV_route_colline" },
      { label: "Descendre au gué, à l'aube, regarder l'eau", hide: { any: [{ not: { is: { maitre: "perdu" } } }, { seen: "IV_route_gue" }] }, to: "IV_route_gue" },
      { label: "Faire ton sac et prendre la route de l'est, vers Vaux-Saint-Pierre", big: true, to: "IV_route_depart" },
    ] },

  IV_route_adieu: { act: "IV", title: "La grange de l'église", place: "merle",
    fx: { ep: ["perso", 1200] },
    text: [
      "La grange de l'église sent la paille, la cire et l'onguent. Ta maîtresse est assise sur un banc contre le mur, au soleil pâle qui passe par la porte, une couverture sur les genoux. Elle a maigri. Ses cheveux sont tout à fait blancs, maintenant, et elle tient ses mains l'une dans l'autre, posées sur la couverture, comme deux choses qu'on lui aurait confiées et qu'elle aurait peur de casser.",
      { if: { has: "maitre:hauberte" }, text: "Hauberte te regarde venir de ses yeux pâles de vieux soldat. « Tu tiens ta garde trop haute, dit-elle, en guise de bonjour. Tu l'as toujours tenue trop haute. » Puis, plus bas : « Je me souviens de tout, tu sais. Du gué. De ce que j'ai fait de mon épée. Je me souviens d'avoir été contente de la tenir pour lui. » Elle regarde ses mains. « C'est ça le pire. Pas d'avoir obéi. D'avoir été contente. »" },
      { if: { has: "maitre:ortie" }, text: "Ortie trie des herbes sèches sur la couverture, par petits tas, par habitude ; ses doigts tremblent et mélangent tout. « Je t'avais dit de regarder l'eau avant de la boire, dit-elle sans lever les yeux. Moi, je ne l'ai pas regardée. Je l'ai écoutée. » Elle sourit, d'un sourire qui n'a pas encore retrouvé sa place. « Il paraît que les élèves dépassent toujours leurs maîtres. Je ne pensais pas que ce serait si littéral. »" },
      { if: { has: "maitre:maelle" }, text: "Maëlle a posé sur ses genoux une planchette et un feuillet, et elle essaie de tracer une ligne droite. Elle n'y arrive pas. Il y a vingt feuillets froissés à ses pieds. « La main ne revient pas, dit-elle, avec une colère toute neuve. La tête, si. La main, non. » Elle te tend le feuillet raté. « Garde-le. C'est la carte de quelqu'un qui s'est perdu. Ça peut servir. »" },
      "Elle te demande où tu vas. Tu le lui dis : à l'est, vers la Fenne, là où vont tous les autres. Elle hoche la tête lentement. « J'y allais aussi, dit-elle. Avant. J'avais une idée sur la tour d'Hildre, au pied du massif. Je n'ai jamais eu le temps d'y monter. » Elle cherche le mot. « Si tu y vas, ne t'assieds pas à la table. Je ne sais plus pourquoi je dis ça. Je sais seulement que c'est important. »",
      { with: "aubin", text: "Frère Aubin s'agenouille devant elle et lui prend les mains, sans demander. Elle le laisse faire. Il ne prie pas. Il les réchauffe, simplement, entre les siennes, comme on fait aux enfants qui reviennent de la neige." },
    ],
    choices: [
      { label: "L'embrasser, et lui promettre de revenir", fx: { conf: { pip: 5, aubin: 5 }, regard: { hauberte: "allie", ortie: "allie", maelle: "allie" } }, back: "IV_route" },
      { label: "Lui demander ce qu'elle sait de la tour", to: "IV_route_adieu_tour" },
    ] },
  IV_route_adieu_tour: { act: "IV", title: "Ce dont elle se souvient", place: "merle",
    text: [
      "Elle ferme les yeux pour chercher. Ça lui coûte : tu vois le front se plisser, les lèvres remuer, comme quelqu'un qui récite une leçon apprise il y a très longtemps. « Quatre ailes, dit-elle enfin. Le feu, l'eau, la pierre. Et une quatrième qu'on ne nomme pas dans les livres, parce qu'on l'a fermée. Hildre l'a bâtie pour que les fondateurs s'y réunissent, après. Pour parler de ce qu'ils avaient fait. »",
      "Elle rouvre les yeux. « On ne bâtit pas une maison pour parler de ce qu'on a bien fait, {hero}. On la bâtit pour parler de ce qu'on n'arrive pas à dire ailleurs. » Elle se tait, puis : « Il y a une salle au milieu. Je ne sais pas comment on y entre. Je crois qu'on n'y entre pas tant qu'on n'a pas regardé tout le reste. »",
      "Elle te laisse partir là-dessus. Quand tu te retournes à la porte de la grange, elle a déjà repris ses mains l'une dans l'autre, et elle regarde le soleil sur la paille.",
    ],
    choices: [{ label: "Redescendre vers la grève", back: "IV_route" }] },

  IV_route_colline: { act: "IV", title: "La colline au-dessus du gué", place: "merle",
    fx: { ep: ["perso", 1000] },
    text: [
      "Le givre a pris la colline. L'herbe craque sous tes pas, et la pierre que tu as posée, sans nom, porte une petite croûte blanche du côté du nord. D'ici on voit le gué, Fort-Gaudre, la route de l'est qui monte vers la brume, et la file des réfugiés dessus, des points noirs qui avancent sans se presser.",
      { if: { has: "maitre:hauberte" }, text: "Tu as planté son épée au pied de la pierre, la lame dans la terre. Quelqu'un, un soldat de passage sans doute, y a accroché un brin de houx. Hauberte aurait haussé les épaules. Elle aurait gardé le houx." },
      { if: { has: "maitre:ortie" }, text: "Tu as semé de la sauge et de l'ortie autour de la pierre, le jour où tu l'as posée. Rien n'a levé encore. Ça lèvera au printemps, ou pas. Ortie disait que les plantes ne doivent rien à personne." },
      { if: { has: "maitre:maelle" }, text: "Tu as gravé au couteau, au dos de la pierre, une petite rose des vents. C'est tout. Maëlle aurait corrigé l'orientation : le nord est un peu de travers. Tu ne l'as pas refaite." },
      "Tu restes là un moment. Tu ne parles pas. Tu n'as jamais su parler aux tombes ; tu n'as jamais su non plus partir sans y être monté{e}. Le vent tourne à l'est, et il apporte, de très loin, une odeur que tu ne connais pas encore : de la neige, et sous la neige, quelque chose qui pourrit.",
      { with: "thavary", text: "Thavary est montée derrière toi, à distance. Elle salue la pierre de l'épée, à la manière ancienne, comme on salue un capitaine. Elle ne te dit rien. Elle redescend la première." },
    ],
    choices: [{ label: "Redescendre vers Merle", back: "IV_route" }] },

  IV_route_gue: { act: "IV", title: "Le gué à l'aube", place: "merle",
    fx: { ep: ["perso", 1000] },
    text: [
      "À l'aube, le gué est désert. Une brume basse glisse sur l'eau grise, et sous la brume, l'Isarde coule vite, sans bruit, chargée de glaçons qui tournent sur eux-mêmes. Tu t'accroupis sur la grève, là où tu t'accroupis chaque matin depuis trois semaines, et tu regardes.",
      "Ce matin, il y a quelque chose. Aucun visage, aucun reflet. Sur un galet plat, au bord de l'eau, quelqu'un a tracé avec le doigt, dans la vase, une petite flèche. Elle montre l'est. À côté, à moitié effacé par le clapot, un mot, d'une écriture que tu reconnaîtrais entre mille parce qu'elle t'a appris à écrire : *puits*.",
      "Tu regardes longtemps. L'eau monte, lèche le galet, et emporte le mot. La flèche reste un peu plus longtemps, puis elle part aussi.",
      { with: "coliane", text: "Coliane, derrière toi, a tout vu. « Elle est vivante, dit-elle. Quelque part. » Elle ne dit pas si c'est une bonne nouvelle. Elle te tend la main pour te relever." },
    ],
    choices: [{ label: "Remonter vers Merle", back: "IV_route" }] },

  IV_route_depart: { act: "IV", title: "La route de l'est", place: "merle",
    text: [
      "Tu prends des vivres au curé de Merle, qui ne veut pas d'argent et qui accepte quand même que tu en laisses dans le tronc. Le chemin de l'est suit l'Isarde jusqu'à sa jonction avec la Sorbe, puis remonte la Sorbe, et la Sorbe remonte vers la Fenne. Cinq jours, dit-on, si les ponts tiennent et si l'on ne s'arrête pas. Tout le monde s'arrête.",
      { with: "charline", text: "Charline a acheté à un mercenaire en partance une pierre à feu de Ferrance et un sac de charbon de bois, qu'elle porte elle-même. « Là où on va, dit-elle, personne ne voudra nous donner du feu. Il faut l'emporter. »" },
      { with: "gloup", text: "Gloup refuse de monter sur la charrette du curé, qui part dans la même direction ; il veut marcher. Il roule à côté de toi, dans les ornières, en faisant de petits bruits décidés." },
      { with: "aubin", text: "Frère Aubin a passé la nuit à confesser les bateliers dans la grange. Il a les yeux cernés et l'air plus léger que tu ne l'as jamais vu. « Ils avaient des choses à dire, dit-il. Moi aussi, je crois. Mais pas ici. »" },
      { with: "thavary", text: "Thavary resserre la sangle de son paquetage d'un geste sec. « La Sorbe, dit-elle. Mon grand-père y a chassé, quand nous avions encore des chiens. » Elle n'en dit pas plus." },
      { with: "coliane", text: "Coliane regarde la file des réfugiés qui monte vers l'est. Elle cherche quelqu'un des yeux. Elle ne te dit pas qui." },
      { without: "any", text: "Tu pars seul{e}, comme tu es venu{e} aux Trois-Bornes il y a si longtemps, avec une lettre et une question. La lettre est usée aux plis. La question a changé." },
    ],
    choices: [
      { label: "Prendre la route de la Sorbe, vers Vaux-Saint-Pierre", big: true, travel: "r_vaux" },
    ] },
});

// ------------------------------------------------------------------ the road up the Sorbe (r_vaux): legs
Object.assign(P, {
  IV_r_champs: { title: "Les champs gris",
    text: [
      "Le premier jour, tu crois que c'est le givre. Les champs, de part et d'autre de la route, sont blancs d'une blancheur sale, et les chaumes de l'été cassent sous le pied comme du verre. Puis le soleil monte, le givre fond sur les talus, et les champs restent blancs. Ce n'est pas du givre. C'est une poussière grise, très fine, qui couvre la terre labourée et qui ne s'envole pas quand le vent souffle.",
      "Dans un verger, les pommiers sont morts debout, les branches noires et luisantes, et les pommes de l'automne pendent encore, ridées, couvertes d'un duvet gris. Personne ne les a cueillies. Personne ne les cueillera. Un peu plus loin, un homme creuse une fosse au bord de son champ, à la bêche, et à côté de la fosse il y a une vache couchée sur le flanc, les pattes raides.",
      { with: "gloup", text: "Gloup s'arrête au bord du champ et renifle la terre grise, longtemps. Puis il recule, et il vient se coller contre ta botte, tout tremblant. Il a reconnu l'odeur. C'est la sienne." },
    ],
    choices: [
      { label: "Aider l'homme à creuser", fx: { ep: ["perso", 800], fac: { brumefeuille: 3 } }, to: "IV_r_champs_vache" },
      { label: "Lui demander depuis quand la terre est comme ça", to: "IV_r_champs_vache" },
      { label: "Passer ton chemin", back: R },
    ] },
  IV_r_champs_vache: { title: "La fosse",
    text: [
      "Il s'appelle Thiébaut, il cultive ces terres comme son père et son grand-père, et il ne s'arrête pas de creuser pendant qu'il te parle. « C'est venu par l'eau, dit-il. Comme toujours. D'abord le ruisseau, à la Saint-Martin. Puis les fossés. Puis la pluie. La pluie, vous comprenez ? Il a plu gris. » Il jette une pelletée. « La vache a bu dans l'ornière. Je l'ai vue boire. J'aurais dû l'en empêcher. On ne peut pas empêcher une vache de boire quand il pleut. »",
      "Vous la faites rouler dans la fosse ensemble. Elle tombe lourdement, et une poussière grise monte de son poil. Thiébaut rebouche, tasse la terre du plat de sa bêche, et se signe de la main ouverte, à la manière de l'Ordre. « Je pars demain, dit-il. Vaux-Saint-Pierre. Ma femme y est déjà, avec les petits. Il paraît qu'il y a une source. » Il te regarde. « Vous y croyez, vous, à cette source ? »",
      { if: { has: "passe:aide" }, text: "Tu as déjà vu ça. À Saint-Gilles, il y a sept ans, ça commençait comme ça : une bête, puis une autre, et un homme qui creuse en se disant qu'il partira demain. Tu sais que celui-ci partira vraiment. Tu le lui souhaites." },
      { if: { has: "passe:profite" }, text: "Il y a sept ans, tu aurais demandé à cet homme combien il voulait pour sa terre. Il t'aurait dit un prix ridicule, et tu aurais dit oui. La pensée vient toute seule, avec le goût d'une vieille habitude, et tu la laisses tomber dans la fosse avec le reste." },
    ],
    choices: [{ label: "Lui dire que oui, et reprendre la route", back: R }] },

  IV_r_colonne: { title: "La charrette des Saint-Gilles",
    text: [
      "Au deuxième jour, la route est pleine. Tu marches au milieu d'une file de gens qui vont tous dans la même direction, au même pas, sans se parler, et tu as l'impression de remonter une rivière lente. Des charrettes, des ânes, des brouettes, un vieux porté sur une civière par ses deux fils, une chèvre qui suit une petite fille sans qu'on la tienne.",
      "À un passage de ruisseau, une charrette s'est mise en travers, une roue cassée net dans les pierres du gué. Elle bloque la file. Une dizaine de personnes s'agitent autour, des femmes, des vieux, deux hommes qui tirent sur les ridelles sans résultat. Sur la charrette, il y a des sacs de grain, des marmites, des matelas, et une vieille femme assise au milieu de tout ça, très droite, qui refuse de descendre.",
      "Sur le panneau de la charrette, quelqu'un a peint en blanc, d'une main appliquée : *Saint-Gilles-des-Prés*.",
      { if: { has: "passe:fui" }, text: "Le nom de ton village, sur une charrette cassée au milieu d'un ruisseau. Tu restes un moment immobile, au bord de l'eau, comme si tes jambes avaient décidé seules de s'arrêter." },
    ],
    choices: [
      { label: "Soulever l'essieu à l'épaule pendant qu'ils changent la roue", test: { dom: "combat", diff: -10, label: "Porter la charrette", help: [{ with: "thavary", v: 15 }, { with: "gloup", v: 5 }] }, win: { fx: { ep: ["perso", 1200], flag: "IV:sg_route" }, to: "IV_r_colonne_roue" }, lose: { fx: { pv: -3, flag: "IV:sg_route" }, to: "IV_r_colonne_roue" } },
      { label: "« Laisse-moi faire », dit Thavary", who: "thavary", fx: { conf: { thavary: 5 }, flag: "IV:sg_route", ep: ["perso", 1200] }, to: "IV_r_colonne_roue" },
      { label: "Montrer comment caler la roue avec des pierres et une perche", test: { dom: "savoir", diff: -10, label: "Caler la roue" }, win: { fx: { ep: ["perso", 1000], flag: "IV:sg_route" }, to: "IV_r_colonne_roue" }, lose: { fx: { flag: "IV:sg_route" }, to: "IV_r_colonne_roue" } },
      { label: "Contourner la charrette par le champ et continuer", back: R },
    ] },
  IV_r_colonne_roue: { title: "Ceux de Saint-Gilles",
    text: [
      { outcome: "win", text: "La charrette se soulève, la vieille roue sort des pierres avec un bruit de bois mort, et la neuve, une roue de brouette trop petite mais solide, prend sa place. On repart. La file, derrière, recommence à couler.", else: "Ce n'est pas joli, ça prend du temps, et à un moment la charrette retombe et tout le monde crie. Mais à la fin la roue de rechange tient, de travers, et la charrette sort du gué en grinçant. Tu as les mains écorchées et de l'eau grise jusqu'aux genoux." },
      { if: { has: "passe:aide" }, text: "La vieille, sur la charrette, te regarde avec des yeux qui cherchent. Puis elle dit, pour elle-même : « L'enfant qui portait les malades. » Elle s'appelle Benoîte. Elle a enterré tout le monde à Saint-Gilles, et elle n'a pas voulu laisser la croix du puits derrière elle : elle est là, sous les matelas, avec les deux lattes ficelées." },
      { if: { has: "passe:fui" }, text: "La vieille femme sur la charrette, Benoîte, te remercie d'un signe de tête, et ne te reconnaît pas. Elle dit aux autres que tu as l'air de quelqu'un de bien. Tu tais ton nom." },
      { if: { has: "passe:profite" }, text: "Un homme, à la roue, s'est arrêté de travailler en te voyant. Il te regarde, puis il regarde les autres, puis il reprend la roue en silence. Plus tard, quand tout est fini, il s'essuie les mains et te dit : « Jean Rabier. Je crois que vous me connaissez. Je paie à la Saint-Martin, au notaire de Merle. » Il ajoute : « Je ne paierai plus. Il n'y a plus de terre. »" },
      { if: { all: [{ has: "sg:terres_rendues" }, { has: "passe:profite" }] }, text: "Il ajoute, après un silence : « Non, pardon. Je dis des bêtises. Vous nous l'avez rendue. C'est le notaire qui m'a fait peur toute ma vie, pas vous. » Il te serre la main, des deux siennes." },
      "Ils vont à Vaux-Saint-Pierre. Le Père Thomasset est resté à Saint-Gilles avec ses morts et ses quarante-trois noms ; il a dit qu'il viendrait au printemps, s'il y a un printemps. On repart ensemble jusqu'au soir, puis la charrette de Saint-Gilles prend du retard, et tu la perds de vue.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
});

// ------------------------------------------------------------------ the leg through Brumefeuille, changed by act I
Object.assign(P, {
  IV_r_bru: { title: "Brumefeuille, au troisième jour",
    text: [
      "Au troisième jour, la route passe par Brumefeuille. Tu reconnais le clocher du sanctuaire en haut du village, la halle, le tilleul de la place. Tu reconnais aussi le bruit, ou plutôt son absence : on n'entend pas la roue du moulin. On n'entend pas grand-chose. Un chien aboie, une fois, et se tait.",
      "La moitié des maisons sont fermées. Sur les portes, on a peint la main ouverte à la chaux, comme on faisait autrefois contre la peste. Le marché n'a plus d'étals. Sur la place, une charrette qu'on charge, deux femmes qui portent un coffre, un vieux qui regarde faire, assis sur le rebord de l'abreuvoir à sec.",
      { if: { has: "puits:clair" }, text: "Le puits, au milieu de la place, n'est pas fermé. Une femme y tire un seau, et l'eau qui en sort est claire. Elle la verse dans un tonneau, sur la charrette. On emporte l'eau de Brumefeuille, maintenant, comme on emporte ce qu'on a de plus précieux." },
      { if: { not: { has: "puits:clair" } }, text: "Le puits, au milieu de la place, est toujours fermé de planches. On a cloué par-dessus une seconde rangée, plus récente, et quelqu'un a gravé au couteau dans le bois : *pas même pour les bêtes*." },
      { if: { has: "voix:marche1" }, text: "Tu passes la main sur la margelle en traversant la place. Elle est tiède. Sous ta paume tachée, il te semble qu'elle te reconnaît." },
      { with: "coliane", text: "Coliane s'est arrêtée à l'entrée de la place, là où elle s'arrêtait la première fois. « On était venues pour une fosse, dit-elle. Maintenant c'est toute la vallée. » Elle dit « venues ». Elle ne corrige pas." },
    ],
    choices: [
      { label: "Le puits et l'auberge du Chaudron", hide: { seen: "IV_r_bru_puits" }, to: "IV_r_bru_puits" },
      { label: "Le moulin", hide: { seen: "IV_r_bru_moulin" }, to: "IV_r_bru_moulin" },
      { label: "Le bord de l'eau, chez Berthe", hide: { seen: "IV_r_bru_berthe" }, to: "IV_r_bru_berthe" },
      { label: "La maison de Lune l'herboriste", hide: { seen: "IV_r_bru_lune" }, to: "IV_r_bru_lune" },
      { label: "Le sanctuaire de la Main", hide: { seen: "IV_r_bru_sanctuaire" }, to: "IV_r_bru_sanctuaire" },
      { label: "Quitter Brumefeuille et reprendre la route de l'est", big: true, back: R },
    ] },

  IV_r_bru_puits: { title: "Le Chaudron",
    fx: { ep: ["perso", 800] },
    text: [
      "Le Chaudron est ouvert. Hortense est derrière son comptoir, plus maigre, ses bras de lavandière croisés sur sa poitrine. Il y a trois clients dans la salle, et l'un d'eux dort. Elle te reconnaît tout de suite, et elle te sert sans que tu demandes, une bière tiède au goût de miel. « Faite avec l'eau du sanctuaire, dit-elle. La dernière. Après, je ferme. »",
      { if: { has: "puits:clair" }, text: "« Le puits a tenu, dit-elle. C'est le seul de la vallée. Les gens d'en bas viennent avec des tonneaux, et Charron voudrait qu'on les fasse payer. On ne les fait pas payer. » Elle hausse les épaules. « Mais un puits, ça ne nourrit pas. Les champs sont gris jusqu'à la lisière du Rouvre. Ceux qui ont des parents ailleurs partent. Ceux qui n'en ont pas partent quand même. »", else: "« Le puits n'est jamais revenu, dit-elle. On a bu l'eau du sanctuaire, à la louche, pendant tout l'automne. Maintenant la source du sanctuaire aussi se trouble, certains matins. Le Père Odon dit que c'est le froid. » Elle hausse les épaules. « Ceux qui ont des parents ailleurs partent. Ceux qui n'en ont pas partent quand même. »" },
      { if: { is: { charron: ["ouvert", "force", "achete"] } }, text: "Gilles Charron, dit-elle encore, a vendu sa halle à un marchand de Ferrance pour le prix d'un âne, et il est parti le premier, avec ses tonneaux. Elle ne le dit pas avec méchanceté. Elle le dit comme on annonce le temps qu'il fera." },
      { if: { is: { charron: ["complice", "laisse"] } }, text: "Gilles Charron, dit-elle encore, vend toujours son eau, sur la route de l'est maintenant, à ceux qui passent. Il a engagé deux hommes avec des gourdins pour garder ses tonneaux. Il fait de bonnes affaires. Il a toujours fait de bonnes affaires." },
      { if: { has: "jeannot:gueri" }, text: "Jeannot Guérin passe en courant devant la fenêtre, une miche sous le bras, poursuivi par deux autres garçons. Il a grandi, depuis les Brumes. Hortense le suit des yeux. « Celui-là, dit-elle, il se souviendra de toi toute sa vie. Il raconte à tout le monde que tu as tué un monstre sous le moulin. Je lui dis que ce n'est pas tout à fait ça. Il ne veut pas savoir. »" },
      { if: { all: [{ has: "I:voix" }, { not: { has: "jeannot:gueri" } }] }, text: "Tu demandes des nouvelles de Jeannot Guérin. Hortense baisse les yeux. « Perrine l'a emmené à Vaux, il y a dix jours, dit-elle. Il ne marchait plus. Elle l'a mis dans une brouette. Il paraît qu'il y a des prêtres, là-bas. »" },
    ],
    choices: [{ label: "Laisser deux sous sur le comptoir et ressortir", fx: { gold: -2, regard: { i_hortense: "cordial" } }, back: "IV_r_bru" }, { label: "Ressortir sur la place", back: "IV_r_bru" }] },

  IV_r_bru_moulin: { title: "Le moulin",
    fx: { ep: ["perso", 800] },
    text: [
      "Le chemin du moulin longe le bief. L'eau y est basse, et grise, et elle ne coule presque plus : elle se tient là, entre les berges, comme une eau de fossé. La roue est immobile. Des glaçons pendent aux pales.",
      { if: { is: { meunier: "livre" } }, text: "Le moulin est fermé, les volets cloués. Sur la porte, le bailli a fait afficher la sentence, que la pluie a délavée : *banni de la vallée*. Quelqu'un a gratté le nom de Barthélemy dans le papier, avec l'ongle, jusqu'à faire un trou. Tu ne sais pas si c'était par haine, ou pour qu'on l'oublie plus vite. Dans la cour, le commis a laissé un sac de farine éventré. Les rats n'y touchent pas." },
      { if: { is: { meunier: "protege" } }, text: "La porte du moulin est ouverte. À l'intérieur, tout est rangé, propre, les sacs empilés, les meules levées. Barthélemy n'est pas là. Sur la grande meule, il a laissé un mot, à la craie, d'une écriture de quelqu'un qui n'écrit pas souvent : *Parti à Vaux. Elle parle plus bas, maintenant, mais elle parle plus loin. Je vais voir où.* Il ne l'a pas signé. Il n'en avait pas besoin." },
      { if: { is: { meunier: "marche" } }, text: "Le moulin est fermé, mais la cheminée fume. Tu frappes. Personne ne répond. Par la lucarne, tu vois la grande salle : une table mise pour deux, deux bols, deux cuillères, un bouquet de feuilles mortes dans un pot. Le second bol est petit. Tu n'entres pas. Sur la dernière marche du bief, il y a un seau de bois, retourné, propre, bien rangé." },
      { if: { not: { has: "R1:revele" } }, text: "Le moulin est fermé. Le meunier est parti avec les autres, dit-on, un matin, sans dire au revoir à personne. Il a laissé la porte ouverte et une lampe allumée sur l'appui de la fenêtre, qui brûle encore, ou que quelqu'un rallume." },
      { with: "pip", text: "Pip ne veut pas approcher de l'eau du bief. Il reste haut, très haut, au-dessus de ta tête, une petite étoile pâle dans le gris. Quand tu reviens sur le chemin, il redescend, et il dit seulement : « Elle est partie d'ici. Elle est partie ailleurs. C'est pire. »" },
    ],
    choices: [{ back: "IV_r_bru" }] },

  IV_r_bru_berthe: { title: "Le bord de l'eau",
    fx: { ep: ["perso", 800] },
    text: [
      { if: { is: { berthe: "sauvee" } }, text: "La maison de Berthe est ouverte, et Berthe est sur le seuil, appuyée sur son bâton, en train de regarder deux garçons du village charger ses chèvres dans une charrette, une à une, en les soulevant par le ventre. Elle les houspille pour la forme. Ils rient. « Ils m'emmènent, dit-elle quand tu arrives. Moi, mes chèvres, et mes fromages. À Vaux. Ils disent qu'on ne laisse pas sa grand-mère derrière. Je ne suis la grand-mère de personne. » Elle a l'air de trouver ça très bien quand même." },
      { if: { is: { berthe: "sauvee" } }, text: "Avant que tu partes, elle te met dans la main un petit fromage cendré enveloppé dans une feuille de chou. « Pour la route. Et pour l'autre fois. » Elle ne dit pas quelle autre fois. Tu sais." },
      { if: { is: { berthe: "cachee" } }, text: "La maison de Berthe est fermée. Hubert Lagache, le forgeron, coupe du bois devant chez lui ; il pose sa hache quand il te voit. « Partie avant-hier, dit-il. À Vaux, avec ses bêtes. Je l'ai menée jusqu'au pont. » Il hésite. « Elle a dit de te dire qu'elle ne se cachera plus. Elle a dit que la prochaine fois qu'on viendrait la chercher, elle attendrait sur le pas de sa porte. Je ne sais pas si c'est une bonne nouvelle. »" },
      { if: { is: { berthe: "pendue" } }, text: "Le pré de Berthe est hérissé de jalons rouges, et au milieu, on a commencé un quai de pierre, qu'on a laissé là, trois assises, quand l'eau a tourné. Personne n'en voudra plus. Personne n'en veut plus. La maison est vide, la porte arrachée. Sur le seuil, quelqu'un a posé un bouquet de bruyère sèche, il n'y a pas longtemps. On ne sait pas qui. On ne le saura pas." },
      { if: { not: { has: "berthe=sauvee" } }, text: "Le long de la berge, l'eau est grise et basse. Une chèvre blanche, échappée d'on ne sait où, broute les dernières herbes du talus, et te regarde passer avec ses yeux jaunes.", else: "Le long de la berge, l'eau est grise et basse. Les chèvres bêlent dans la charrette, toutes ensemble, comme si elles savaient." },
    ],
    choices: [{ back: "IV_r_bru" }] },

  IV_r_bru_lune: { title: "La maison de Lune",
    fx: { ep: ["perso", 800] },
    text: [
      "La maison de Lune sent toujours la menthe, la terre mouillée et le fer, mais les bouquets qui pendaient aux poutres ont disparu, et les pots de l'étagère sont vides. Lune est à genoux devant sa cheminée, en train de faire des paquets de racines dans des linges, qu'elle ficelle avec des gestes rapides.",
      { if: { has: "lune:remede" }, text: "Elle se relève en te voyant, s'essuie les mains, et te prend les deux tiennes, ce qu'elle n'avait jamais fait. « Le remède a marché, dit-elle. Pour tous ceux qui l'ont bu à temps. J'en ai fait tout l'automne, avec ta mousse et celle qu'on a trouvée après. Mais ce qui vient maintenant n'est pas la fièvre grise. C'est autre chose. Ça ne prend pas le corps. Ça prend l'envie. Les gens ne veulent plus se lever. » Elle te lâche. « Je pars pour Vaux. Il y a des malades là-bas, et un frère de l'Ordre qui saigne tout le monde. Il faut que quelqu'un l'en empêche. »" },
      { if: { not: { has: "lune:remede" } }, text: "Elle se relève en te voyant, sans sourire. « La fièvre grise a pris onze enfants cet automne, dit-elle. Je n'avais pas de quoi faire le remède. J'en ai sauvé quatre avec des cataplasmes et des prières. » Elle reprend ses paquets. « Je pars pour Vaux. Il y a des malades là-bas, et je sais maintenant ce qu'il faut chercher dans les marais quand on a le temps. On n'a plus le temps. »" },
      "Elle te tend un paquet de linge. « Des feuilles de gariig, et de l'onguent. Prends. Je ne vais pas tout porter. »",
      { with: "aubin", text: "Frère Aubin regarde les mains de Lune, rouges et gercées, et il lui demande si elle a besoin d'un prêtre à Vaux, ou d'un infirmier. « D'un infirmier, dit-elle tout de suite. Des prêtres, il y en aura toujours trop. » Aubin sourit. « Alors je viendrai en infirmier. »" },
    ],
    choices: [{ label: "Prendre le paquet et la remercier", fx: { item: "onguent", regard: { i_lune: "cordial" } }, back: "IV_r_bru" }] },

  IV_r_bru_sanctuaire: { title: "Le sanctuaire de la Main",
    fx: { ep: ["perso", 800] },
    text: [
      "Le Père Odon est seul au sanctuaire. Il a fermé la grille de la source, ce qu'il n'avait jamais fait, et il a mis la clé à son cou. L'eau de la vasque est claire, ce matin. Il dit qu'elle se trouble certains jours, à l'aube, et qu'il ne sait pas pourquoi, et qu'il n'en dort plus.",
      { if: { is: { meunier: "livre" } }, text: "Il te montre la cellule blanche où il a gardé Barthélemy jusqu'au jugement. La cruche est encore là, sur le rebord. « Il disait qu'elle lui parlait dans la cruche, dit le vieux prêtre. Je l'ai vidée tous les soirs. Il l'entendait quand même. » Il referme la porte de la cellule. « Le bailli l'a banni. On l'a vu partir vers le sud. On dit qu'il a fait demi-tour, plus bas, et qu'il a pris la route de l'est, comme tout le monde. »" },
      "« Ils partent tous, dit-il, sans reproche. Moi, je reste. Il faut que quelqu'un garde la source, même si elle ne sert plus à personne. Même si elle se trouble. Surtout si elle se trouble. » Il te regarde. « Votre maîtresse a bu ici, dans ses deux mains, le jour où elle est passée. Je me suis souvent demandé si ça l'avait protégée, ou si ça l'avait seulement retardée. »",
      { if: { mark: { min: 2 } }, text: "Il voit ta main. Il se tait. Il te tend la louche quand même. Tu bois. L'eau est froide et elle a, très loin, un goût de fer." },
    ],
    choices: [
      { label: "Remplir une fiole à la source, avec sa permission", once: true, fx: { item: "eau_claire", ep: ["perso", 500] }, back: "IV_r_bru" },
      { label: "Le saluer et redescendre", back: "IV_r_bru" },
    ] },
});

// ------------------------------------------------------------------ the ferry and the first sight of the Fenne
Object.assign(P, {
  IV_r_bac: { title: "Le bac de Saulce",
    text: [
      "Au quatrième jour, la route doit passer la Sorbe au bac de Saulce, parce que le pont de pierre est tombé à la crue d'automne et que personne ne l'a relevé. La rivière, ici, est large et lente, et d'un gris presque noir. Des plaques d'écume jaunâtre tournent dans les remous. La file des réfugiés s'est arrêtée sur la berge, et elle grossit d'heure en heure.",
      "Le passeur, un grand gaillard en peau de mouton, s'appelle Maheu. Il est assis sur son bac, tiré au sec sur les galets, et il fume une pipe de terre. Il ne passe plus personne. « L'eau mord, dit-il. Avant-hier, j'ai passé une famille. Le petit a mis la main dans l'eau, pour jouer. Ce matin il ne reconnaît plus sa mère. » Il crache dans la rivière, ce qui est peut-être un défi. « Je ne passe plus. Ni pour or ni pour argent. Allez au gué de la Mule, à une journée en amont, s'il est encore là. »",
      "Derrière toi, une femme tient un enfant malade dans ses bras. Un vieux s'est assis sur sa malle. Une journée de plus, dans ce froid, pour certains, c'est une journée de trop.",
      { if: { mark: { min: 2 } }, text: "Tu regardes l'eau, et l'eau te regarde. Tu as la certitude, absurde et tranquille, que si tu y mettais la main, elle ne te mordrait pas. Elle te ferait place." },
    ],
    choices: [
      { label: "Convaincre Maheu de passer les gens, sans que personne ne touche l'eau", test: { dom: "social", diff: -20, label: "Convaincre le passeur", help: [{ with: "aubin", v: 10 }, { if: { has: "merle:sauve" }, v: 5 }] }, win: { fx: { ep: ["seance", 1500], fac: { brumefeuille: 5 } }, to: "IV_r_bac_passe" }, lose: { to: "IV_r_bac_gue" } },
      { label: "« Laisse-moi faire », dit Charline : elle peut geler la surface au passage du bac", who: "charline", test: { dom: "magie", diff: -10, label: "Charline gèle la rivière" }, win: { fx: { conf: { charline: 8 }, ep: ["seance", 1500], flag: "IV:bac_charline" }, to: "IV_r_bac_passe" }, lose: { fx: { conf: { charline: -2 } }, to: "IV_r_bac_gue" } },
      { label: "Payer Maheu le prix de son courage (10 sous)", if: { gold: { min: 10 } }, why: "Tu n'as pas dix sous.", fx: { gold: -10, ep: ["perso", 1000] }, to: "IV_r_bac_passe" },
      { label: "Mettre la main dans l'eau, pour qu'ils voient qu'elle ne te mord pas", tag: "Marque +1", stain: true, if: { mark: { min: 1 } }, why: "Rien en toi ne répond à cette eau.", fx: { mark: 1, fear: { pip: 10, coliane: 10 }, ep: ["seance", 1500] }, to: "IV_r_bac_main" },
      { label: "Remonter jusqu'au gué de la Mule avec ceux qui veulent bien suivre", to: "IV_r_bac_gue" },
    ] },
  IV_r_bac_passe: { title: "La traversée",
    text: [
      { if: { has: "IV:bac_charline" }, text: "Charline s'agenouille à l'avant du bac, les deux mains au-dessus de l'eau, et le froid descend de ses paumes. Une peau de glace, mince, blanche, se forme devant la proue et s'élargit à mesure qu'on avance, et le bac glisse dessus en craquant. Elle tient tout le passage. Au dernier voyage, elle saigne du nez et rit en même temps.", else: "Maheu finit par se lever, en jurant, et par pousser son bac à l'eau. On charge les gens au milieu, loin des bords, les enfants sur les genoux des adultes, les mains dans les poches. Il passe toute la journée. Il ne laisse personne s'asseoir sur le plat-bord. À chaque voyage, il compte à voix haute ceux qu'il a embarqués, et il les recompte en arrivant." },
      "Au soir, tout le monde est de l'autre côté. Personne n'a touché l'eau. Maheu tire son bac au sec, s'assied dessus, rallume sa pipe, et te regarde. « On en a passé soixante-trois, dit-il. Je ne sais pas si c'est bien. Peut-être qu'on les a juste fait mourir plus loin. » Il tire sur sa pipe. « Mais plus loin, c'est toujours ça. »",
      { with: "pip", text: "Pip a fait la traversée sur la tête de l'enfant malade, et l'enfant a dormi tout le long. Sa mère ne sait pas ce que c'est, cette petite lumière. Elle a remercié Pip quand même, à voix basse, en descendant." },
    ],
    choices: [{ label: "Reprendre la route sur l'autre rive", back: R }] },
  IV_r_bac_main: { title: "L'eau qui fait place",
    text: [
      "Tu t'avances dans la Sorbe jusqu'au poignet. L'eau est froide, et puis non. Elle s'écarte. Autour de ta main tachée, elle se retire en un cercle bien net, comme une foule qui fait place à quelqu'un d'important, et au fond du cercle tu vois les galets, secs. Sur la berge, quelqu'un pousse un cri. Puis tout le monde se tait.",
      "Maheu te regarde longtemps. Puis il pousse son bac à l'eau, en silence, et il passe les gens. Personne ne te parle de toute la traversée. On te laisse le bac pour toi seul{e}, au dernier voyage, et la femme à l'enfant malade a l'air de prier pour que tu ne la regardes pas.",
      "Ce soir-là, en rêve, une voix de femme te remercie. Elle a l'air sincère.",
      { with: "coliane", text: "Coliane a passé dans le premier bac, avec les autres. Sur l'autre rive, elle t'attend, et quand tu descends, elle recule d'un pas. Elle ne s'en rend peut-être même pas compte." },
      { with: "aubin", text: "Frère Aubin ne te fait pas de reproche. Il te prend la main, celle qui est entrée dans l'eau, et il la regarde longtemps, à la lumière du soir. Puis il la lâche et il dit : « Elle ne t'a pas mordu{e} parce qu'elle te garde pour plus tard. Tu le sais. »" },
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
  IV_r_bac_gue: { title: "Le gué de la Mule",
    fx: { time: 6 },
    text: [
      "Maheu reste immobile. Alors tu remontes la rive avec une trentaine de personnes qui ont décidé de te suivre plutôt que d'attendre, et vous marchez tout le jour dans la boue gelée, entre les saules noirs. Le gué de la Mule est encore là : un banc de gravier où l'eau ne monte qu'aux genoux, avec une rangée de pieux qu'on suit à la main.",
      "Vous le passez à la nuit tombante, en chaîne, les enfants sur les épaules. Personne ne tombe. Une vieille femme perd un sabot, que le courant emporte, et elle pleure sur ce sabot comme sur un mort. Sur l'autre rive, on fait un grand feu de bois de saule, qui fume et qui ne chauffe pas, et on se sèche autour en silence.",
      "Le lendemain matin, deux hommes ont les jambes grises jusqu'aux genoux, et ils ne veulent plus marcher. On les met sur une charrette. Personne ne demande pourquoi.",
      { with: "gloup", text: "Gloup a passé le gué en éclaireur, roulé sur les pieux, en sifflant pour dire où était le fond. Il est le seul que l'eau ne gêne pas. Les enfants, sur l'autre rive, l'ont applaudi. Il ne sait pas ce que ça veut dire, et il a gonflé quand même." },
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  IV_r_fenne: { title: "Le pied de la Fenne",
    fx: { reveal: "vaux", ep: ["perso", 1000] },
    text: [
      "Au cinquième jour, la route quitte la Sorbe et monte. Les champs gris laissent la place à des prés d'altitude, puis à des pâtures caillouteuses où rien ne pousse que du genêt. Et devant toi, d'un coup, au sortir d'un bois de sapins, il y a la Fenne.",
      "Tu l'avais vue de loin, de partout dans les Marches, une ligne blanche au bord du ciel. De près, c'est un mur. Une muraille de roche noire, droite, qui monte jusqu'à ce que tes yeux renoncent, avec des bandes de neige dans les failles, et tout en haut, entre deux épaules de montagne, une langue bleue et lisse qui descend : le glacier. Le soleil couchant le prend de côté, et il brille d'une lumière qui n'a pas l'air de venir du soleil.",
      "Au pied de la muraille, dans un creux de vallée, il y a des fumées. Des centaines de fumées. Des tentes, des cabanes de branches, des charrettes rangées en cercle, des feux, et au milieu, un clocher trapu. Vaux-Saint-Pierre. On entend, d'ici, un bruit de foule, et des chiens, et quelque part une cloche qui sonne les vêpres.",
      "Plus haut, à flanc de montagne, à une demi-journée de marche peut-être, une tour sombre se détache sur la neige. Quatre ailes basses autour d'un corps carré. Il n'y a aucune lumière aux fenêtres.",
      { with: "thavary", text: "Thavary s'est arrêtée à côté de toi. Elle regarde la tour, pas le camp. « La tour d'Hildre, dit-elle. Ma grand-mère avait une gravure. Elle disait que Thavar y avait sa chaise. » Elle se tait. « Elle disait aussi qu'on n'y montait pas. Elle ne disait jamais pourquoi. »" },
    ],
    choices: [{ label: "Descendre vers le camp", back: R }] },
});

// ------------------------------------------------------------------ region events (souillee)
Object.assign(P, {
  EIV_puits: { title: "Le puits du hameau",
    text: [
      "Un hameau de quatre maisons, au bord du chemin, désert. Les portes sont ouvertes, les poules parties, une charrette sans roues dans la cour. Au milieu, un puits à balancier, et sur la margelle, un vieil homme assis, une écuelle de bois entre les mains. L'écuelle est pleine d'une eau grise.",
      "« Ils sont tous partis, dit-il, sans que tu demandes. Moi, je reste. J'ai quatre-vingts ans. Je suis né ici. Ce puits, mon père l'a creusé. » Il lève l'écuelle, la regarde. « Elle est bonne, vous savez. Elle a un goût de rien. Et quand on la boit, on n'a plus peur. »",
    ],
    choices: [
      { label: "Lui prendre l'écuelle des mains", test: { dom: "social", diff: -10, label: "Le convaincre de ne pas boire" }, win: { fx: { ep: ["perso", 1000] }, to: "EIV_puits_vieux" }, lose: { to: "EIV_puits_bu" } },
      { label: "Lui donner ta fiole d'eau claire", if: { item: "eau_claire" }, why: "Tu n'as pas d'eau claire.", fx: { drop: "eau_claire", conf: { pip: 8, aubin: 8 }, ep: ["seance", 1500] }, to: "EIV_puits_vieux" },
      { label: "Le laisser à son puits", to: "EIV_puits_bu" },
    ] },
  EIV_puits_vieux: { title: "Le puits du hameau",
    text: [
      "Il te laisse prendre l'écuelle. Il te regarde la vider dans l'herbe, où l'eau grise reste un moment en flaque avant de s'enfoncer. Il ne proteste pas. Il a l'air soulagé, peut-être, qu'on ait décidé à sa place.",
      "« Vaux, alors, dit-il. Bon. » Il se lève, avec une lenteur qui fait mal à regarder, et il va chercher dans sa maison un bâton et un chapeau. Il ne ferme pas la porte. « Je ne reviendrai pas, dit-il. Autant laisser ouvert. Quelqu'un en aura peut-être l'usage. »",
      { with: "thavary", text: "Thavary le hisse sur son dos sans lui demander son avis, comme on fait d'un blessé sur un champ de bataille, et elle le porte jusqu'au carrefour où passent les charrettes. Il proteste tout le long. Elle ne l'écoute pas." },
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
  EIV_puits_bu: { title: "Le puits du hameau",
    text: [
      "Il boit. Il boit lentement, à petites gorgées, les yeux fermés, comme un vin qu'on aurait gardé pour une occasion. Quand il a fini, il pose l'écuelle sur la margelle et il sourit. « Voilà, dit-il. Voilà. »",
      "Tu repars. Au tournant du chemin, tu te retournes. Il est toujours assis sur la margelle, très droit, et il parle. Il n'y a personne à côté de lui. Il parle au puits, gentiment, comme à une femme.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  EIV_betes: { title: "Les bêtes grises",
    text: [
      "Le premier signe, c'est le silence des oiseaux. Puis une odeur de vase, très forte, venue d'un bosquet de bouleaux à ta droite. Puis les bêtes sortent du bosquet, sans se presser. Deux. Elles ont été des cerfs, peut-être, ou des chevaux. Elles ont maintenant trop de pattes et pas assez de peau, et leur poil gris dégoutte d'une eau noire qui fume dans le froid.",
      "Elles ne grognent pas. Elles se mettent de part et d'autre du chemin, et elles attendent.",
      { with: "gloup", text: "Gloup se met à trembler si fort que tu l'entends clapoter. Il ne recule pas. Il se place devant toi, tout petit, et il fait un bruit que tu ne lui as jamais entendu, aigu et mouillé. Les bêtes tournent la tête vers lui. Elles hésitent." },
    ],
    choices: [
      { label: "Te battre", fight: { title: "Les bêtes grises", enemies: [{ id: "bete_souillee", n: 2 }], terrain: "nature",
        win: { fx: { ep: ["seance", 2000] }, to: "EIV_betes_apres" }, lose: { fx: { pv: -6 }, to: "EIV_betes_battu" },
        flee: { label: "Reculer dans les rochers, où elles ne passeront pas", dom: "nature", diff: -10, to: "EIV_betes_fuite" } } },
      { label: "Gloup : il roule vers les bêtes", who: "gloup", test: { dom: "nature", diff: -10, label: "Gloup parle aux bêtes" }, win: { fx: { conf: { gloup: 10 }, ep: ["seance", 1500] }, to: "EIV_betes_gloup" }, lose: { to: "EIV_betes_battu" } },
      { label: "Faire un détour par le ravin, sans les quitter des yeux", test: { dom: "discretion", diff: -10, label: "Te glisser hors de leur vue" }, win: { fx: { ep: ["perso", 1000] }, to: "EIV_betes_fuite" }, lose: { to: "EIV_betes_battu" } },
    ] },
  EIV_betes_apres: { title: "Les bêtes grises",
    text: [
      "Elles meurent sans un cri. Elles s'affaissent, et leur corps continue à s'affaisser après la mort, à fondre, jusqu'à ce qu'il ne reste sur le chemin que deux flaques noires et quelques os trop longs. L'odeur reste longtemps.",
      "Tu nettoies ta lame dans la neige. La neige devient grise. Tu en prends une autre poignée, puis une autre, jusqu'à ce que le fer soit propre, et tu as les mains glacées et l'impression d'avoir fait quelque chose de très sale.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
  EIV_betes_battu: { title: "Les bêtes grises",
    fx: { rest: true },
    text: [
      "Tu te réveilles dans une charrette. Une femme, à côté de toi, te tient la tête pour que les cahots ne la cognent pas. Des réfugiés t'ont trouvé{e} au bord du chemin, dit-elle, entre deux flaques noires. Les bêtes étaient parties. Elles ne mangent pas, ces bêtes-là. Elles abîment, et elles s'en vont.",
      "Tu as une plaie au flanc qui a déjà été lavée et bandée avec un linge propre. La femme ne veut rien. Elle te dit seulement de ne pas toucher le pansement avec ta main gauche.",
      { with: "any", text: "Tes compagnons marchent à côté de la charrette. Ils ont l'air d'avoir eu peur. Ils ne le diront pas." },
    ],
    choices: [{ label: "Reprendre la route à pied, dès que tu le peux", back: R }] },
  EIV_betes_fuite: { title: "Les bêtes grises",
    text: [
      "Tu grimpes dans les rochers, une main sur la pierre, l'autre sur ton arme, et les bêtes ne te suivent pas. Elles restent sur le chemin, à te regarder monter. Elles n'ont pas l'air déçues. Elles n'ont l'air de rien.",
      "Tu fais un grand détour par la crête, et tu redescends sur la route une lieue plus loin. Derrière toi, longtemps, tu entends un bruit d'eau qui coule là où il n'y a pas d'eau.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
  EIV_betes_gloup: { title: "Les bêtes grises",
    text: [
      "Gloup roule jusqu'au milieu du chemin, entre les deux bêtes, et il leur parle. Ce n'est pas une langue. Ce sont des bulles, des clapotis, des sifflements tout bas. Les bêtes baissent la tête vers lui. Elles le reniflent, longuement. L'une d'elles le touche du museau, et une goutte noire tombe sur Gloup, et s'y fond.",
      "Puis elles s'en vont, l'une derrière l'autre, vers les bouleaux. Gloup revient vers toi. Il est plus sombre qu'avant, un tout petit peu. Il se colle contre ta botte et il ne fait plus un bruit de la journée.",
      "Le soir, au feu, il fait un bruit qui ressemble à une question. Tu crois comprendre qu'il demande si les bêtes avaient une mère.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  EIV_deserteurs: { title: "Les déserteurs",
    text: [
      "Une ferme, au bord du chemin, la porte enfoncée. Dans la cour, quatre hommes en morceaux d'uniformes, des tabards bleus et pourpres mêlés, déchirés, retournés, sont en train de charger sur une mule le peu qu'une famille possède : un jambon, une couverture, une marmite de cuivre. La famille est contre le mur de la grange, un homme, une femme, deux enfants, et un des soldats les tient en respect avec une pique.",
      "« Ne t'en mêle pas, toi, dit le plus vieux, sans hostilité. La guerre est finie. Personne ne nous a payés. On se paie. » Il a une voix fatiguée, et des yeux qui ne tiennent pas en place.",
      { if: { is: { deserteur: "pendu" } }, text: "Un des hommes, le plus jeune, te dévisage. « Je te connais, dit-il. Tu étais au camp d'Aldaran quand ils ont pendu Arnaud. » Il crache. « Tu n'as rien fait, ce jour-là. Ne fais rien aujourd'hui. »" },
    ],
    choices: [
      { label: "Dégainer", fight: { title: "Les déserteurs", enemies: [{ id: "IV_deserteur", n: 4 }], terrain: "nature",
        win: { fx: { ep: ["seance", 2000], fac: { brumefeuille: 5 } }, to: "EIV_deserteurs_fin" }, lose: { fx: { pv: -5, gold: -10 }, to: "EIV_deserteurs_battu" },
        flee: { label: "Reculer jusqu'au chemin", dom: "discretion", diff: -10, to: "EIV_deserteurs_battu" } } },
      { label: "Leur parler de ce qui les attend s'ils restent dans cette vallée", test: { dom: "social", diff: -20, label: "Raisonner les déserteurs", help: [{ with: "thavary", v: 10 }, { if: { has: "passe:ordre" }, v: 5 }] }, win: { fx: { ep: ["seance", 1800] }, to: "EIV_deserteurs_parole" }, lose: { to: "EIV_deserteurs_battu" } },
      { label: "Leur offrir de quoi payer leur route (15 sous), s'ils laissent tout", if: { gold: { min: 15 } }, why: "Tu n'as pas quinze sous.", fx: { gold: -15, ep: ["seance", 1200] }, to: "EIV_deserteurs_parole" },
      { label: "Passer ton chemin", fx: { conf: { pip: -5, coliane: -3, aubin: -5 } }, back: R },
    ] },
  EIV_deserteurs_parole: { title: "Les déserteurs",
    text: [
      "Le vieux soldat t'écoute. Tu parles de la pluie grise, des bêtes, du bac de Saulce, des puits. Tu parles de ce qu'on trouve dans les fossés, le long de la Sorbe. Il ne te regarde pas pendant que tu parles : il regarde la mule, le jambon, la marmite. À la fin, il fait un signe aux autres, et ils déchargent.",
      "« On va vers le sud, dit-il. Il fait plus chaud. » Il hésite, puis il remet à la femme, contre le mur, une petite bourse qu'il avait déjà prise. « Ne racontez pas qu'on était des soldats. Racontez qu'on était des voleurs. C'est moins sale. »",
      "La famille ne te remercie pas. Ils ont trop peur pour ça. Le soir, en reprenant la route, tu les vois charger eux-mêmes la mule, et partir vers l'est.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
  EIV_deserteurs_fin: { title: "La cour de la ferme",
    text: [
      "Deux des soldats sont à terre, les deux autres ont filé par les champs, en abandonnant la mule. Le vieux, celui qui parlait, est assis contre la margelle, une main sur le ventre. Il te regarde sans colère. « J'ai fait Merle, dit-il. Et le gué. J'ai eu de la chance, au gué. » Il sourit. « Pas aujourd'hui. »",
      "La femme lui apporte de l'eau, la dernière qu'ils ont, dans une cruche. Tu ne sais pas pourquoi elle fait ça. Elle non plus, sans doute.",
      { with: "aubin", text: "Frère Aubin reste avec le vieux soldat jusqu'à la fin. Ça ne prend pas longtemps. Il lui ferme les yeux du pouce, et il dit un nom, que le soldat lui a donné." },
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
  EIV_deserteurs_battu: { title: "La cour de la ferme",
    text: [
      "Tu te retrouves dans la boue de la cour, un goût de sang dans la bouche, et ta bourse est plus légère. Les déserteurs sont partis avec la mule. La famille est toujours contre le mur. L'homme vient t'aider à te relever. « Vous n'auriez pas dû, dit-il. Mais merci d'avoir essayé. »",
      "Ils n'ont plus rien. Ils partent quand même, vers l'est, avec ce qu'ils ont sur le dos. Tu marches un moment avec eux. Les enfants te regardent comme on regarde quelqu'un qui a perdu un combat pour vous : avec un mélange de pitié et de gratitude qui n'est pas facile à porter.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  EIV_penitents: { title: "Les pénitents",
    text: [
      "Une procession vient à ta rencontre, dans le sens de la descente : une vingtaine d'hommes et de femmes en chemise de toile grise, pieds nus dans la boue gelée, qui chantent un psaume de la Main d'une voix enrouée. Ils se frappent les épaules avec des cordes nouées, à chaque verset. Le dos de leurs chemises est raide de sang séché.",
      "Celui qui marche en tête, un homme maigre aux yeux brillants, s'arrête devant toi. « La souillure est la punition, dit-il. Nous l'avons méritée. Les fondateurs nous l'ont dit : la Brèche s'ouvre quand le monde pèche. Il faut payer. » Il te tend une corde. « Paie avec nous. »",
      { if: { mark: { min: 2 } }, text: "Ses yeux tombent sur ta main gauche. Il recule d'un pas. « Toi, dit-il, tout bas. Toi, tu as déjà payé, ou tu vas payer pour nous tous. » Les autres se sont tus. Ils te regardent tous, maintenant." },
    ],
    choices: [
      { label: "Lui dire que les fondateurs ont menti", if: { clues: "M", min: 2 }, why: "Tu n'en sais pas encore assez sur les fondateurs pour le lui dire.", fx: { ep: ["seance", 1500] }, to: "EIV_penitents_verite" },
      { label: "Prendre la corde, et marcher un moment avec eux", fx: { pv: -2, conf: { aubin: -3 } }, to: "EIV_penitents_marche" },
      { label: "Les laisser passer", back: R },
    ] },
  EIV_penitents_verite: { title: "Les pénitents",
    text: [
      "Tu lui dis ce que tu as trouvé. La sixième main. La comptine. La niche murée. Tu ne dis pas tout, parce que tu ne sais pas tout ; tu en dis assez. L'homme t'écoute jusqu'au bout, le visage égal. Quand tu as fini, il hoche la tête, lentement.",
      "« Alors c'est pire, dit-il. Si les fondateurs ont menti, alors il faut payer pour eux aussi. » Il reprend sa corde. Il se remet en marche. Les autres le suivent, et le psaume reprend.",
      "Une seule, une jeune femme au bout de la file, s'est arrêtée. Elle laisse tomber sa corde dans la boue. Elle te regarde, puis elle prend la route de l'est, seule, dans l'autre sens. Personne ne la retient.",
      { with: "aubin", text: "Frère Aubin regarde partir la procession. « J'ai fait ça, une fois, dit-il. Après Morteau. Trois mois. Ça n'a rien rendu à personne. Ça m'a seulement empêché de penser. »" },
    ],
    choices: [{ label: "Reprendre la route", back: R }] },
  EIV_penitents_marche: { title: "Les pénitents",
    text: [
      "Tu marches avec eux une heure, la corde à la main. Tu ne te frappes pas, ou si peu. Tu écoutes le psaume, qui parle des Cinq Mains et de la porte qu'elles ont fermée, et de la nuit qui attend derrière. Les pénitents ne te regardent pas. Ils regardent leurs pieds, et les pieds de celui qui les précède.",
      "Puis tu t'arrêtes, et tu les laisses aller. Tu as les épaules en feu et la tête vide, et pendant un moment, c'était bien, de ne plus penser. C'est ça le pire. Tu reprends ta route, vers l'est, dans l'autre sens.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  EIV_flaque: { title: "La flaque gelée",
    text: [
      "Au bord du chemin, une ornière pleine d'eau a gelé en surface, et sous la glace, l'eau est noire. En passant, tu vois ton reflet dedans. Puis tu le vois tourner la tête, alors que tu ne l'as pas tournée.",
      "« {hero} », dit la flaque. La voix est douce, un peu rauque, une voix de femme qui a longtemps pleuré et qui ne pleure plus. « Tu montes vers la tour. Tous ceux qui ont menti y sont montés avant toi, pour se regarder dans les yeux. Ils n'y sont pas arrivés. » Un temps. « Tu y arriveras, toi. Tu as plus de courage qu'eux. Regarde bien leurs chaises. »",
      { with: "pip", text: "Pip descend sur la glace, et sa lumière la traverse. Sous la surface, il n'y a rien. Une ornière, de la boue, un caillou. Pip reste là, longtemps, à éclairer le fond, comme pour s'en assurer." },
    ],
    choices: [
      { label: "Briser la glace du talon", fx: { ep: ["perso", 800] }, back: R },
      { label: "Lui demander qui elle est", fx: { ep: ["perso", 800] }, to: "EIV_flaque_qui" },
    ] },
  EIV_flaque_qui: { title: "La flaque gelée",
    text: [
      "« Qui je suis ? » La voix a l'air amusée, et un peu triste. « Je suis ce qui reste quand on a attendu trop longtemps. Je suis ce qu'on devient quand personne ne vient. » Le reflet sourit, de ton sourire, mais pas tout à fait. « Mais tu viens, toi. Tu es venu{e} jusqu'ici. Je t'en remercie. »",
      "La glace craque sous ton pied, toute seule. Quand tu regardes de nouveau, il n'y a dans l'ornière que de l'eau noire, et ton reflet qui a exactement le même visage que toi, au même moment.",
    ],
    choices: [{ label: "Reprendre la route", back: R }] },

  EIV_enfant: { title: "L'enfant et la chèvre",
    text: [
      "Assise sur une borne, au bord du chemin, une petite fille de sept ou huit ans tient une chèvre par une corde. Elle a un fichu rouge, des sabots trop grands, et un baluchon sur les genoux. Elle ne pleure pas. Elle attend, avec le sérieux d'une grande personne qui attend la diligence.",
      "Elle s'appelle Loïse. Elle attend sa mère, qui est partie chercher de l'eau ce matin, à la mare, là-bas, derrière les saules. Elle dit « ce matin » en montrant le soleil, qui est déjà bas. Derrière les saules, il y a bien une mare. L'eau en est grise et parfaitement immobile.",
      { with: "coliane", text: "Coliane s'accroupit devant la petite, à sa hauteur, et elle lui demande le nom de la chèvre, comme si c'était la seule chose importante. La chèvre s'appelle Blanchette. Coliane hoche la tête gravement. Puis elle se relève, et elle te regarde, et elle secoue la tête, très peu, pour que l'enfant ne voie pas." },
    ],
    choices: [
      { label: "Aller voir à la mare", to: "EIV_enfant_mare" },
      { label: "Emmener Loïse et sa chèvre jusqu'au camp de Vaux", hide: { has: "IV:loise" }, fx: { flag: "IV:loise", conf: { pip: 8, coliane: 5, aubin: 5 }, ep: ["seance", 1500] }, to: "EIV_enfant_camp" },
    ] },
  EIV_enfant_mare: { title: "La mare derrière les saules",
    text: [
      "La mare est ronde, nette, comme découpée dans le pré. Sur la berge, il y a un seau de bois renversé, et une paire de sabots de femme, rangés côte à côte, la pointe vers l'eau. C'est tout. L'eau est grise, immobile, et elle ne reflète pas les saules.",
      "Tu restes un moment au bord. Tu ne mets pas la main dans l'eau. Tu ramasses le seau. Quand tu reviens vers le chemin, Loïse te regarde arriver avec le seau, et elle comprend, ou elle ne comprend pas ; elle demande seulement si sa mère a dit de l'attendre encore.",
    ],
    choices: [
      { label: "Emmener Loïse et sa chèvre jusqu'au camp de Vaux", hide: { has: "IV:loise" }, fx: { flag: "IV:loise", conf: { pip: 8, coliane: 5, aubin: 5 }, ep: ["seance", 1500] }, to: "EIV_enfant_camp" },
      { label: "La confier à la prochaine charrette qui passe", fx: { flag: "IV:loise_charrette" }, back: R },
    ] },
  EIV_enfant_camp: { title: "Loïse",
    text: [
      "Tu la prends avec toi. Elle marche à côté de toi tant qu'elle peut, avec la chèvre, puis tu la portes sur ton dos, et la chèvre suit toute seule. Elle te raconte sa maison, son père mort à la guerre, l'école du curé où elle a appris trois lettres. Elle ne parle pas de sa mère. Au bout d'un moment, elle s'endort contre ton cou.",
      "Tu la confieras aux gens du camp, à Vaux-Saint-Pierre. Il y a, paraît-il, une tente pour les enfants seuls. Il y en a beaucoup.",
      { with: "pip", text: "Pip se pose sur le fichu rouge de la petite, et il y reste tout le chemin, à briller doucement. Elle dort mieux, avec lui. Toi aussi, peut-être, tu marches mieux." },
    ],
    choices: [{ label: "Reprendre la route avec Loïse", back: R }] },

  EIV_nuit: { title: "La nuit froide",
    text: [
      "La nuit tombe d'un coup, au pied de la montagne, et avec elle un froid qui n'a rien à voir avec celui de la vallée : un froid sec, dur, qui descend du glacier et qui fait craquer les arbres. Ton feu a du mal à prendre. Le bois est humide, et une fumée âcre te pique les yeux.",
      "Plus loin dans la nuit, il y a d'autres feux, ceux des réfugiés, des dizaines de petits points rouges le long de la route. On entend des voix, une chanson à un moment, et un enfant qui tousse longtemps, longtemps.",
    ],
    choices: [
      { label: "Partager ton feu et tes vivres avec la famille du feu voisin", if: { food: { min: 1 } }, why: "Tu n'as plus de vivres à partager.", fx: { food: -1, conf: { pip: 5, aubin: 5, thavary: 3 }, ep: ["perso", 1000] }, to: "EIV_nuit_partage" },
      { label: "Veiller toute la nuit, l'arme sur les genoux", fx: { ep: ["perso", 600] }, back: R },
      { label: "Dormir, malgré le froid", fx: { rest: true }, back: R },
    ] },
  EIV_nuit_partage: { title: "Le feu partagé",
    text: [
      "Ils sont cinq, de Saulce-le-Bas, un couple et trois enfants, et ils n'ont pas de feu : leur briquet est tombé dans la Sorbe. Ils viennent s'asseoir au tien, timidement, et quand tu sors le pain et le lard, la mère se met à pleurer sans bruit, en coupant les tranches pour les petits.",
      "Le père te parle de son métier : il était tonnelier. Il a laissé ses outils, parce qu'ils étaient trop lourds, et il ne s'en remet pas. « Trente ans, dit-il. Trente ans que je les avais. Mon maître me les avait donnés. » Il regarde le feu. « Je referai des tonneaux à Vaux. Il faut bien des tonneaux, pour l'eau. »",
      { with: "charline", text: "Charline rallume leur feu à eux, d'un claquement de doigts, et le petit garçon la regarde avec des yeux ronds jusqu'à ce qu'il s'endorme. Elle a l'air contente, d'une façon qu'elle ne montre pas souvent." },
    ],
    choices: [{ label: "Reprendre la route au matin", back: R }] },
});

// ------------------------------------------------------------------ the camp of Vaux-Saint-Pierre (arrival and hub of act IV)
Object.assign(P, {
  IV_arrivee: { act: "IV", title: "Vaux-Saint-Pierre", place: "vaux", takes: "evening",
    fx: { ep: ["seance", 2500], meet: "IV_garance" },
    text: [
      "On entre dans le camp par une barrière de charrettes, gardée par deux hommes avec des fourches et une femme avec un registre. Elle te demande ton nom, ton village, le nombre de bouches qui sont avec toi. Elle écrit tout, d'une écriture ronde, sur un cahier de comptes de tonnelier dont les premières pages parlent encore de cercles de fer et de douelles de chêne. « Garance, dit-elle quand tu lui demandes le sien. Je ne commande rien. Je compte. Ici, c'est la même chose. »",
      "Vaux-Saint-Pierre était un village de quarante feux, au pied de la Fenne, avec une église, une source et un pont. C'est devenu une ville de toile. Les tentes ont poussé dans les prés, dans les vergers, dans le cimetière, contre les murs de l'église ; des cabanes de branches et de mottes, des chariots bâchés, des abris faits d'une couverture tendue entre deux arbres. On dit qu'il y a là trois mille personnes. On dit quatre mille. Personne ne sait, sauf Garance, et elle ne le dit pas.",
      "Ça sent la fumée de bois vert, la soupe de raves, la bouse et la maladie. Des enfants courent entre les tentes avec des bâtons. Des femmes lavent du linge dans des baquets, avec de l'eau qu'elles ont été chercher elles-mêmes, en file, à la source, et qu'elles comptent au gobelet. Un frère de l'Ordre, gant gris, prêche sur une caisse devant l'église, et personne ne l'écoute.",
      "Et au-dessus de tout ça, très haut, la muraille de la Fenne, avec le soleil couchant sur le glacier. Les gens ne la regardent pas. On s'habitue à tout.",
      { if: { has: "IV:loise" }, text: "Garance prend Loïse par la main, et la chèvre par la corde, puis écrit leur nom dans son registre, à la page des enfants seuls, qui est la plus longue. « Elle aura une place à la tente de Saint-Pierre, dit-elle. Les sœurs de Hautecombe s'en occupent. » Elle te regarde. « Merci de l'avoir portée. La plupart les laissent sur les bornes. »" },
      { with: "aubin", text: "Frère Aubin s'est arrêté à la barrière, et il regarde le camp comme on regarde une mer. « Il y a du travail », dit-il simplement. Il a l'air presque heureux." },
      { with: "coliane", text: "Coliane fouille la foule des yeux, tente par tente, visage par visage. Elle cherche quelqu'un. Quand Garance demande le nom de son village, elle répond « Hautgrès » d'une voix dure, et Garance lève la tête et la regarde longtemps." },
    ],
    choices: [{ label: "Entrer dans le camp", big: true, to: "IV_hub" }] },

  IV_hub: { act: "IV", title: "Le camp de Vaux-Saint-Pierre", place: "vaux", hub: true, routes: true, backName: "la place de l'église, au milieu des tentes",
    text: [
      { first: true, text: "La place de l'église est le seul endroit du camp où il n'y a pas de tentes : Garance l'a interdit, pour qu'on puisse y faire passer les charrettes d'eau. C'est donc là que tout le monde se croise, se cherche, se dispute et s'attend. Au milieu, une croix de pierre usée, avec cinq mains sculptées sur le socle, et la trace d'une sixième." },
      { first: true, text: "D'ici, on voit tout : l'église trapue, avec son clocher carré ; la tente de Garance, une grande toile de chariot rapiécée ; l'infirmerie, dans l'ancienne grange aux dîmes ; la fontaine de la source, gardée jour et nuit ; et, au bout des tentes, du côté du bois, des feux qui se tiennent à l'écart des autres. Au-dessus du camp, sur la montagne, la tour d'Hildre." },
      { again: true, when: "day", text: "La place de l'église, la croix aux cinq mains, les charrettes d'eau qui passent en grinçant. On se bouscule, on s'interpelle d'une tente à l'autre. La tour d'Hildre, là-haut, est grise sur la neige." },
      { again: true, when: "night", text: "La place de l'église, la nuit. Des centaines de feux autour, et des toux, et des chiens. Quelqu'un chante une chanson de la Sorbe, très bas. Là-haut, sur la montagne, la tour d'Hildre n'a toujours aucune lumière." },
      { if: { has: "IV:tour" }, text: "Depuis que tu es redescendu{e} de la tour, des gens viennent te regarder, de loin, comme on regarde quelqu'un qui revient d'un endroit dont personne ne revient. Garance a dit qu'il fallait les laisser faire." },
      { if: { mark: { min: 4 } }, text: "Quand tu traverses la place, les mères rappellent leurs enfants. Ta main gauche est noire jusqu'au coude, maintenant. Tu la gardes dans ta manche. On le sait quand même." },
      { with: "pip", if: { mark: { min: 3 } }, text: "Pip ne se pose plus sur ta main gauche. Il se pose sur ton épaule droite, et il te regarde, quelquefois, avec une inquiétude qu'il n'essaie plus de cacher." },
    ],
    choices: [
      { label: "La tente de Garance", to: "IV_garance" },
      { label: "L'infirmerie, dans la grange aux dîmes", to: "IV_infirmerie" },
      { label: "L'église de Saint-Pierre", to: "IV_eglise" },
      { label: "La fontaine de la source", to: "IV_source" },
      { label: "Marcher entre les tentes, et regarder les visages", to: "IV_visages" },
      { label: "La charrette d'Anselme le colporteur", hide: { not: { seen: "IV_garance" } }, to: "IV_anselme" },
      { label: "Le hangar de la scierie, où l'on se dispute un toit", hide: { not: { seen: "IV_garance" } }, to: "IV_sg" },
      { label: "La tente de Saint-Pierre, où l'on garde les enfants seuls", hide: { any: [{ not: { has: "IV:loise" } }, { seen: "IV_loise" }] }, to: "IV_loise" },
      { label: "La tente de la Perche, que tient une femme de Morteau", hide: { any: [{ not: { any: [{ has: "ida=dit" }, { has: "ida=tu" }, { has: "ida=elle" }] } }, { seen: "IV_ida" }] }, to: "IV_ida" },
      { label: "Le camp du Cercle, au bout des tentes", to: "IVC_camp", hide: { not: { met: "coliane" } } },
      { label: "Partir pour le glacier de la Fenne", big: true, to: "IVD_depart", if: { has: "IV:temple" }, why: "Edrin, au temple des Six à Hautecombe, sait ce qui attend là-haut. Il faut l'avoir entendu avant de monter." },
    ] },

  IV_garance: { act: "IV", title: "La tente de Garance", place: "vaux", backName: "la tente de Garance",
    text: [
      { first: true, text: "La tente de Garance est une bâche de chariot tendue sur des perches, avec une table à tréteaux, trois tabourets, une lanterne et des registres. Beaucoup de registres. Elle en a un pour les vivants, un pour les morts, un pour l'eau, un pour le grain, un pour les tentes, et un petit, à couverture rouge, qu'elle garde sous la main et qu'elle n'ouvre pas devant toi." },
      { first: true, text: "« J'étais tonnelière à Saulce, dit-elle sans lever les yeux de ses comptes. Mon homme est mort à la Saint-Jean. Quand l'eau a tourné, j'avais une charrette, des tonneaux propres et un cahier. Les gens ont suivi les tonneaux. Puis ils ont suivi le cahier. » Elle trempe sa plume. « Le curé de Vaux est mort la deuxième semaine. L'Ordre a envoyé trois frères, qui prêchent. Les couronnes ont envoyé des lettres. Alors c'est moi. »" },
      { again: true, text: "Garance lève la tête de ses registres, te fait signe de t'asseoir, et finit d'additionner une colonne avant de poser sa plume." },
      { if: { is: { couronne: "aldaran" } }, text: "« Hautmont nous envoie du grain, dit-elle. Une charrette tous les dix jours, avec un sergent qui compte les sacs et qui en garde un sur dix pour la peine. Il en faudrait trois par jour. »" },
      { if: { is: { couronne: "velorin" } }, text: "« Vel-Orin nous vend du grain, dit-elle. Au prix d'avant la guerre, ce qui est, paraît-il, une grande générosité. Je paie avec ce que les gens ont emporté : des bagues, des chandeliers, une montre de ferme. Ça ne durera pas l'hiver. »" },
      { if: { is: { couronne: "paix" } }, text: "« Les deux couronnes nous envoient du grain, dit-elle. Pas beaucoup. Mais ensemble, ce qui est nouveau, et sans rien demander, ce qui l'est encore plus. On dit que c'est grâce à quelqu'un qui a parlé au gué de l'Isarde. » Elle te regarde par-dessus sa plume. Elle ne demande pas si c'était toi." },
    ],
    choices: [
      { label: "« Qu'est-ce qui vous manque le plus ? »", hide: { seen: "IV_garance_manque" }, to: "IV_garance_manque" },
      { label: "« Et la tour, là-haut ? »", hide: { seen: "IV_garance_tour" }, to: "IV_garance_tour" },
      { label: "« Qu'y a-t-il dans le registre rouge ? »", hide: { seen: "IV_garance_rouge" }, if: { seen: "IV_garance_manque" }, why: "Elle ne le montrera pas à quelqu'un qu'elle connaît à peine.", to: "IV_garance_rouge" },
      { back: "IV_hub" },
    ] },
  IV_garance_manque: { act: "IV", title: "Ce qui manque", place: "vaux",
    fx: { questSeen: "IV_saintgilles" },
    text: [
      "« Tout, dit-elle. Mais si tu veux une liste, je vais te faire une liste. » Elle compte sur ses doigts tachés d'encre. « L'eau. La source donne ce qu'elle donne, et elle ne donne pas assez. On va chercher de la neige au-dessus du camp, on la fait fondre, et la moitié du temps elle est grise. Le bois, parce qu'on a coupé tout ce qui était à moins d'une heure. Le grain. Les toits. »",
      "« Les toits, surtout, reprend-elle. Il reste un seul hangar couvert qui ne soit pas plein, le hangar de la vieille scierie, au bord du torrent. J'ai deux bandes qui le veulent : les charretiers de Ferrance, qui ont des bœufs, des armes et de l'argent, et une charretée de vieux et d'enfants de la basse Sorbe, de Saint-Gilles, qui n'ont rien. Les charretiers disent que sans leurs bœufs, plus personne n'ira chercher le grain. Ils ont raison. Les vieux disent que sans toit, ils seront morts avant Noël. Ils ont raison aussi. »",
      "Elle se frotte les yeux. « Et puis il y a ce colporteur, Anselme, qui est arrivé il y a quatre jours avec une charrette pleine de fioles d'eau claire. Il les vend une couronne pièce. Les gens vendent leur dernière chèvre pour en avoir une. Je ne sais pas si son eau est claire. Je ne sais pas d'où elle vient. Je sais seulement que je n'ai pas le temps de le savoir. »",
    ],
    choices: [{ label: "« Je vais m'en occuper. »", fx: { regard: { IV_garance: "curieux" } }, back: "IV_garance" }] },
  IV_garance_tour: { act: "IV", title: "La tour d'Hildre", place: "vaux",
    text: [
      "Garance regarde vers l'ouverture de la tente, vers la montagne, qu'on ne voit pas d'ici. « Personne n'y monte, dit-elle. Les gens de Vaux disent qu'on n'en redescend pas. Les gens de Vaux disaient beaucoup de choses. La plupart sont morts. »",
      "Elle hésite. « Il y a dix jours, un vieil homme est monté. Il est passé ici, il voulait un âne. Il avait les mains dans des gants de cuir, et il tenait la longe avec les poignets, pas avec les doigts. Il a payé en sous de Ferrance. Il a dit qu'il allait chercher du feu. » Elle hausse les épaules. « L'âne est redescendu seul, avant-hier. »",
      { with: "charline", text: "Charline s'est figée sur son tabouret. Elle se tait. Elle regarde ses propres mains, posées sur ses genoux, et elle les serre si fort que les jointures blanchissent." },
      "« Il y a un chemin, ajoute Garance. Celui des bergers, par le bois de mélèzes et le pont de corde. Une demi-journée, et une autre pour en revenir. Si tu y vas, laisse ton nom dans le registre. Je compte aussi ceux qui partent. »",
    ],
    choices: [{ back: "IV_garance" }] },
  IV_garance_rouge: { act: "IV", title: "Le registre rouge", place: "vaux",
    fx: { ep: ["perso", 1000] },
    text: [
      "Garance te regarde longtemps, puis elle ouvre le registre rouge, et elle le tourne vers toi. Ce sont des noms. Une colonne de noms, avec à côté de chacun une date et un mot. Le mot, c'est toujours le même : *l'eau*.",
      "« Ceux qui sont partis la nuit, dit-elle. Pas morts. Partis. Ils se lèvent, ils sortent de la tente, ils vont au torrent, ou à une mare, ou à une flaque, et ils restent là, à écouter. Le matin, on les retrouve assis au bord, les pieds dans l'eau, et ils sourient, et ils ne veulent plus revenir. Quelquefois ils reviennent. Quelquefois ils entrent dans l'eau. » Elle referme le registre. « Cent douze. Depuis la Saint-Martin. »",
      "« Je ne l'écris pas dans l'autre, dit-elle encore. Celui des morts. Parce qu'ils ne sont pas morts. Et je ne sais pas ce qu'ils sont. »",
      { if: { mark: { min: 2 } }, text: "Elle regarde ta main gauche en refermant le registre. Elle se tait. Elle pose seulement sa paume à plat sur la couverture rouge, comme pour la tenir fermée." },
    ],
    choices: [{ back: "IV_garance" }] },
});

// ------------------------------------------------------------------ places of the camp
Object.assign(P, {
  IV_infirmerie: { act: "IV", title: "La grange aux dîmes", place: "vaux", backName: "l'infirmerie",
    text: [
      { first: true, text: "La grange aux dîmes de Vaux est longue comme une nef, et on y a mis des paillasses en quatre rangées, si serrées qu'il faut marcher de côté pour passer. Il y a là deux cents malades, peut-être plus. Ils ne crient pas. C'est ce qui frappe d'abord : le silence. Ils sont couchés, les yeux ouverts, et ils regardent les poutres, et quand on leur parle ils répondent poliment, comme des gens qu'on dérange." },
      { first: true, text: "Au fond, un frère de l'Ordre en tablier de cuir, Frère Anicet, saigne un homme au bras, au-dessus d'une bassine. Le sang qui coule est sombre, presque noir. Le frère a l'air épuisé et sûr de lui. « On retire le mauvais sang, dit-il. C'est ce que dit le traité de Hautecombe. On retire, on retire, et le bon finit par revenir. » L'homme saigné se laisse faire, comme il se laisse faire en tout." },
      { again: true, text: "La grange aux dîmes, ses rangées de paillasses, son silence. On a allumé deux braseros de plus. Ça ne change rien au froid." },
      { if: { has: "IV:infirmerie" }, text: "On ne saigne plus personne. On a mis du gariig à bouillir dans de grands chaudrons, et l'odeur amère a chassé un peu celle de la maladie. Des malades, assis contre le mur, boivent leur tisane par petites gorgées. Certains parlent entre eux, maintenant." },
      { if: { all: [{ has: "I:voix" }, { not: { has: "jeannot:gueri" } }] }, text: "Sur une paillasse près de la porte, un garçon de huit ans aux cheveux blonds, couvert de taches de rousseur, regarde les poutres. Jeannot Guérin. Perrine, sa mère, est assise à côté de lui, et elle lui tient la main, et elle ne la lâche jamais. Il te reconnaît. Il ne sourit pas. Il dit seulement : « Tu es allé{e} sous le moulin. »" },
    ],
    choices: [
      { label: "Prendre le parti de Lune et de ses tisanes contre les saignées", hide: { any: [{ has: "IV:infirmerie" }, { not: { seen: "IV_r_bru_lune" } }] }, test: { dom: "savoir", diff: -10, label: "Montrer que la saignée tue", help: [{ if: { has: "maitre:ortie" }, v: 10 }, { if: { has: "lune:remede" }, v: 10 }] }, win: { fx: { flag: "IV:infirmerie", ep: ["seance", 2000], regard: { i_lune: "allie" } }, to: "IV_infirmerie_fin" }, lose: { to: "IV_infirmerie_refus" } },
      { label: "Parler à Frère Anicet au nom de l'Ordre", hide: { has: "IV:infirmerie" }, test: { dom: "social", diff: -20, label: "Faire arrêter les saignées", help: [{ if: { item: "jeton_ordre" }, v: 15 }, { if: { has: "passe:ordre" }, v: 10 }] }, win: { fx: { flag: "IV:infirmerie", ep: ["seance", 2000], fac: { ordre: 3 } }, to: "IV_infirmerie_fin" }, lose: { to: "IV_infirmerie_refus" } },
      { label: "« Laisse-moi faire », dit Frère Aubin", who: "aubin", hide: { has: "IV:infirmerie" }, fx: { flag: "IV:infirmerie", conf: { aubin: 10 }, ep: ["seance", 2000] }, to: "IV_infirmerie_aubin" },
      { label: "Prendre un seau et aider, simplement", fx: { ep: ["perso", 800] }, to: "IV_infirmerie_aide" },
      { back: "IV_hub" },
    ] },
  IV_infirmerie_fin: { act: "IV", title: "Les tisanes", place: "vaux",
    text: [
      { if: { seen: "IV_r_bru_lune" }, text: "Lune arrive au moment où Frère Anicet range ses lancettes, en colère, avec ses paquets de racines et deux femmes de Brumefeuille qui portent un chaudron. Elle ne dit pas merci. Elle remonte ses manches, et elle se met au travail.", else: "Tu fais mettre de l'eau à bouillir, du gariig, de la menthe sauvage qu'on trouve au bord du torrent. Ce n'est pas un remède. C'est au moins quelque chose qui ne retire rien." },
      "Frère Anicet range ses lancettes dans leur étui de cuir, une à une, avec des gestes trop soigneux. « Le traité de Hautecombe, dit-il encore, à personne. Cent ans qu'on saigne. » Puis il ôte son tablier, et il va chercher de l'eau, et il en porte toute la nuit. Il ne s'excuse pas. Au matin, il est encore là.",
      "Ce qu'ils ont ne se guérit pas avec des tisanes. Mais ils ne meurent plus de leur sang qu'on retire, et ça, au moins, c'est fini.",
    ],
    choices: [{ back: "IV_infirmerie" }] },
  IV_infirmerie_aubin: { act: "IV", title: "Frère Aubin à l'infirmerie", place: "vaux", with: "aubin",
    text: [
      "Frère Aubin traverse la grange sans se presser, entre les paillasses, et il pose la main sur l'épaule de Frère Anicet. Il se tait d'abord. Il regarde la bassine. Puis il dit, très doucement : « Mon frère. Quand avez-vous dormi la dernière fois ? »",
      "Anicet le regarde. Il a les yeux rouges, les mains qui tremblent. Il se tait. Aubin lui prend la lancette des doigts, comme on prend un couteau à un enfant, et il la pose sur la paillasse. « Allez dormir. Je prends la garde. Demain, on parlera du traité de Hautecombe. Il y a des choses dedans que je n'ai jamais crues. »",
      "Anicet s'en va dormir. Aubin reste. Il fait bouillir de l'eau, et il passe la nuit à laver des visages, un par un, en disant à chacun son nom, quand il le sait. Au matin, deux malades se sont levés pour l'aider.",
    ],
    choices: [{ back: "IV_infirmerie" }] },
  IV_infirmerie_refus: { act: "IV", title: "Le traité de Hautecombe", place: "vaux",
    text: [
      "Frère Anicet t'écoute, ou fait semblant, et secoue la tête. « Vous n'êtes pas médecin, dit-il. Le traité l'est. » Il retourne à sa bassine. Tu restes un moment à le regarder faire, et puis tu sors, parce que rester ne sert à rien et que regarder fait mal.",
      "Tu reviendras. Il sera peut-être plus fatigué. Ou il aura moins de malades.",
    ],
    choices: [{ back: "IV_infirmerie" }] },
  IV_infirmerie_aide: { act: "IV", title: "Le seau", place: "vaux",
    text: [
      "Tu prends un seau. Tu vas chercher de l'eau à la fontaine, tu fais la queue avec les autres, tu reviens, tu remplis les gobelets, tu repars. Tu le fais jusqu'au soir. Personne ne te remercie, parce que personne ne remercie la personne qui porte les seaux. Ce n'est pas ce qu'on attend d'elle.",
      { if: { has: "passe:aide" }, text: "Tes épaules ont reconnu le geste avant toi. Saint-Gilles, le temple plein, les corps à porter, le poids de ceux qui ne marchent plus. Tu as cru l'avoir oublié. Tes épaules, non." },
      "Le soir, une vieille femme sur une paillasse t'attrape par la manche quand tu passes. « Tu as les mains de quelqu'un qui porte », dit-elle. Elle se rendort aussitôt.",
    ],
    choices: [{ back: "IV_infirmerie" }] },

  IV_eglise: { act: "IV", title: "L'église de Saint-Pierre", place: "vaux", backName: "l'église",
    text: [
      { first: true, text: "L'église de Saint-Pierre est petite, voûtée, très ancienne. Les murs ont été blanchis à la chaux tant de fois que les angles en sont tout arrondis. On y dort, la nuit : des familles entières sous les bancs, avec leurs paquets. Le jour, on les roule contre les murs, et une sœur de Hautecombe, Sœur Agathe, dit l'office pour qui veut, c'est-à-dire pour presque personne." },
      { first: true, text: "Au-dessus de l'autel, les cinq mains de pierre, paumes ouvertes. Et, comme partout, la trace de la sixième : ici, on ne l'a pas martelée. On l'a recouverte d'un panneau de bois peint, avec un saint Pierre aux clés dessus, un peu de travers. Le bois a joué. Derrière le panneau, on voit le bout d'un doigt de pierre." },
      { again: true, text: "L'église, les paquets roulés contre les murs, l'odeur de cire froide et de laine mouillée. Le saint Pierre de bois, toujours un peu de travers." },
      "Sœur Agathe a soixante ans et des mains de fermière. Elle vient de Hautecombe, l'abbaye de montagne, à deux jours d'ici. « Le Grand Maître de l'Ordre y est, dit-elle. Edrin. Il est très vieux. Il ne reçoit personne. Il demande pourtant, chaque matin, si quelqu'un est venu pour lui. » Elle regarde la sixième main sous le panneau. « Je crois qu'il attend quelqu'un qui a des questions. »",
      { with: "aubin", text: "Frère Aubin s'agenouille devant l'autel, pour la première fois depuis que tu le connais, sans hésiter. Il ne prie pas longtemps. Quand il se relève, Sœur Agathe le regarde, et elle lui tend son livre d'office, en silence. Il le prend." },
      { with: "pip", text: "Pip s'est glissé derrière le panneau de bois. Tu vois sa lumière à travers les fentes. Il reste là un long moment, contre la main cachée, et quand il ressort, muet, il brille d'une lumière nouvelle, plus chaude, plus jaune." },
    ],
    choices: [
      { label: "Soulever le panneau de bois pour voir la sixième main", hide: { seen: "IV_eglise_main" }, to: "IV_eglise_main" },
      { label: "Laisser une aumône pour les familles de l'église (10 sous)", once: true, if: { gold: { min: 10 } }, why: "Tu n'as pas dix sous.", fx: { gold: -10, fac: { ordre: 3 }, conf: { aubin: 3 }, ep: ["perso", 800] }, back: "IV_eglise" },
      { back: "IV_hub" },
    ] },
  IV_eglise_main: { act: "IV", title: "La main cachée", place: "vaux",
    fx: { ep: ["perso", 1000] },
    text: [
      "Sœur Agathe ne t'en empêche pas. Elle t'aide, même, à décrocher le panneau, qui pèse plus lourd qu'il n'en a l'air. Derrière, la sixième main est intacte. Elle est plus petite que les autres, plus fine, et elle n'est pas ouverte : elle est tendue, la paume en avant, les doigts serrés, comme quelqu'un qui pousse une porte pour l'empêcher de s'ouvrir.",
      "Sous la main, il n'y a pas de nom. Il y a une goutte de cire, très ancienne, et une autre, et une autre : des générations de chandelles qu'on a posées là, derrière le panneau, en cachette. Sœur Agathe regarde les cires. « Je ne savais pas, dit-elle. Je suis ici depuis l'été, et je ne savais pas. » Elle va chercher une chandelle, l'allume, et la pose avec les autres.",
    ],
    choices: [
      { label: "Allumer une chandelle toi aussi", fx: { conf: { pip: 5 } }, back: "IV_eglise" },
      { label: "Remettre le panneau en place", back: "IV_eglise" },
    ] },

  IV_source: { act: "IV", title: "La fontaine de Saint-Pierre", place: "vaux", backName: "la fontaine",
    text: [
      { first: true, text: "La source de Saint-Pierre sort de la montagne par une fente dans le roc, au-dessus du village, et un tuyau de mélèze l'amène jusqu'à une fontaine de pierre à deux bassins, au bord de la place. L'eau tombe du tuyau en un filet de la grosseur d'un doigt. Elle est claire, glacée, et elle a un goût de pierre. C'est la seule eau claire à trois jours à la ronde." },
      { first: true, text: "La fontaine est gardée jour et nuit, par deux hommes armés de piques que Garance relève toutes les quatre heures. On y fait la queue avec un gobelet par personne et par repas, pas plus. La file est longue, et elle ne parle pas. Des gens dorment dans la file pour garder leur place." },
      { again: true, text: "La fontaine, le filet d'eau, la file silencieuse, les deux gardes. Rien ne change ici, sauf les visages." },
      { when: "night", text: "La nuit, quand la file s'est enfin dispersée, on entend le filet d'eau tomber dans le bassin, et c'est le seul bruit de la place. Le garde de nuit te dit qu'il l'écoute pour savoir s'il change. Il dit qu'il ne veut pas qu'on le relève : il aime ce bruit-là." },
      { if: { mark: { min: 3 } }, text: "Quand tu approches du bassin, le filet d'eau se trouble, une seconde, une traînée grise dans le clair. Le garde le voit. Il te regarde. Tu recules d'un pas, et l'eau redevient claire." },
    ],
    choices: [
      { label: "Faire la queue, et remplir une fiole à ton tour", once: true, if: { seen: "IV_garance_manque" }, why: "Les gardes ne laissent pas remplir de fiole sans l'accord de Garance.", fx: { item: "eau_claire", time: 4, ep: ["perso", 500] }, back: "IV_source" },
      { label: "Laisser ta place dans la file à une mère et son enfant", once: true, fx: { conf: { pip: 5, aubin: 3 }, ep: ["perso", 600] }, back: "IV_source" },
      { back: "IV_hub" },
    ] },

  IV_visages: { act: "IV", title: "Les visages", place: "vaux", backName: "les allées du camp",
    fx: { ep: ["perso", 1200] },
    text: [
      { first: true, text: "Tu marches entre les tentes, sans but, et le camp te rend, l'un après l'autre, des visages que tu connais. C'est le plus étrange, à Vaux : toute la vallée est venue ici, et tous les chemins que tu as pris depuis l'automne y aboutissent." },
      { again: true, text: "Les allées boueuses du camp, les feux, les visages. Tu en reconnais toujours un ou deux de plus." },
      { if: { is: { berthe: ["sauvee", "cachee"] } }, text: "Berthe a installé ses chèvres dans un enclos de claies, au bout du camp, et elle vend son lait aux mères, un gobelet contre ce qu'on veut. Elle te salue de son bâton. Les enfants de Brumefeuille qui lui jetaient des pierres portent maintenant son fourrage." },
      { if: { has: "jeannot:gueri" }, text: "Jeannot Guérin et une bande de garçons courent entre les tentes en jouant aux chevaliers de l'Ordre, avec des gants de laine grise. Jeannot est le chef. Il a décidé qu'il était toi. Il ne te demande pas la permission." },
      { if: { has: "bucheron=soigne" }, text: "Un garçon maigre, au visage creusé, fend du bois pour l'infirmerie avec une hache trop lourde pour lui. Tiennot, le fils du bûcheron. Guillot, son père, empile les bûches à côté. Tiennot a encore, sur le bras, une marque grise qui ne s'en va pas. Il la cache sous sa manche quand il te voit, puis il la montre, comme on montre une cicatrice de guerre." },
      { if: { has: "bucheron=tard" }, text: "Guillot, le bûcheron du Rouvre, fend du bois pour l'infirmerie, seul. Il ne te voit pas, ou fait semblant. Sa femme n'est pas avec lui. Tu ne demandes pas." },
      { if: { has: "ninon=sauvee" }, text: "Sur un ponton de planches que les pêcheurs de Morteau ont jeté sur le torrent, une petite fille aux tresses pêche avec son père. Ninon. Elle a grandi. Elle te fait un signe de la main, un seul, très sérieux, comme au bord du lac." },
      { if: { has: "aglae=ramenee" }, text: "Une femme ronde au foulard noué sur le front tient un chaudron de soupe sous un auvent de branches, et elle sert à la louche, en grondant ceux qui reviennent deux fois. Aglaé, la cuisinière des trolls. Elle est descendue des Trois-Bornes avec la moitié du hameau. « Les trolls font mieux la queue que ces gens-là », dit-elle." },
      { if: { is: { deserteur: "pendu" } }, text: "Une vieille femme, assise sur un sac de son devant une tente, regarde la montagne. Gisèle Morel, la mère d'Arnaud. Elle ne te reconnaît pas. Elle n'a plus reconnu personne depuis l'Isarde." },
      { if: { has: "merle:sauve" }, text: "Une barque retournée sur deux tréteaux sert de toit à une famille de bateliers de Merle. Ils ont peint sur la coque, en grosses lettres, *Merle-sur-Isarde*, et en plus petit, en dessous, ton nom, mal. Ils t'offrent du poisson séché. Ils ne veulent pas qu'on les remercie." },
      { if: { is: { freres_gaudre: "libres" } }, text: "Un frère de l'Ordre au bras en écharpe, Frère Baudouin, de Fort-Gaudre, monte la garde à la barrière avec deux autres. Il te reconnaît et te salue, le poing sur le cœur. « Le sénéchal nous a envoyés, dit-il. Il dit qu'ici, au moins, on garde des gens et pas des routes. »" },
      { if: { has: "IV:loise_charrette" }, text: "Devant la tente des enfants seuls, une petite fille au fichu rouge tient une chèvre blanche par une corde. Loïse. La charrette à qui tu l'as confiée l'a bien menée jusqu'ici. Elle ne te fait pas signe. Elle attend, avec le sérieux d'une grande personne, en regardant la route." },
      { if: { has: "IV:sg_route" }, text: "Devant le hangar de la vieille scierie, la charrette de Saint-Gilles, avec sa roue de brouette, attend. Benoîte est assise dessus, toujours, très droite, au milieu des matelas." },
      { with: "coliane", text: "Coliane, à côté de toi, regarde les visages comme toi, mais elle ne cherche pas les mêmes. À un moment, elle s'arrête net, au bout d'une allée, du côté des feux à l'écart, et elle reste là, immobile. Puis elle repart en silence, la main sur son couteau jusqu'au soir." },
    ],
    choices: [{ back: "IV_hub" }] },

  IV_ida: { act: "IV", title: "La Perche", place: "vaux",
    fx: { ep: ["perso", 1200], flag: "IV:ida_vue" },
    text: [
      "Une tente de toile goudronnée, avec une enseigne de bois clouée sur le mât : une perche peinte, la même qu'à Morteau. Dessous, Gérold tourne une soupe de poisson dans un chaudron, et Ida sert, un enfant de six mois noué dans son dos, qui regarde tout par-dessus son épaule. Le lac a encore monté, à la Saint-Martin, dit Gérold. Il a pris la place, la taverne, le ponton. On a sauvé le chaudron et l'enseigne.",
      { if: { has: "ida=elle" }, text: "Ida te reconnaît et sourit, vraiment, pour la première fois. « Il vient le voir, dit-elle. Quand il est là. Je dis à Ivo : voilà *le frère*. Il rit chaque fois. » Elle fait passer l'enfant sur sa hanche. « Il croira que c'est son nom. C'est peut-être son nom, après tout. »" },
      { if: { has: "ida=dit" }, text: "Ida te reconnaît. Elle ne sourit pas. « Vous lui avez dit, dit-elle. Je vous avais demandé de vous taire. » Elle sert une écuelle, la pose devant toi. « Il vient le voir, maintenant. Il tient l'enfant comme si c'était du verre. Je ne sais pas si je vous en veux encore. Je crois que oui. Mangez. »" },
      { if: { has: "ida=tu" }, text: "Ida te reconnaît, et elle te sert en silence, et elle ne te fait pas payer. Ivo s'agite dans son dos. Elle le prend dans ses bras. Elle te regarde par-dessus la tête de l'enfant. Le secret est toujours là, entre vous deux, comme une chose qu'on porte à deux et qui ne pèse sur personne en particulier." },
      { with: "aubin", if: { has: "ida=tu" }, text: "Frère Aubin est entré derrière toi. Il voit l'enfant. Il voit Ida. Il ne sait rien, et pourtant il reste là, sur le seuil de la tente, et il regarde l'enfant longtemps, avec une drôle d'expression, comme quelqu'un qui entend un air qu'il croit reconnaître. Ida détourne les yeux." },
      { with: "aubin", if: { any: [{ has: "ida=elle" }, { has: "ida=dit" }] }, text: "Frère Aubin entre derrière toi, et l'enfant tend les deux bras vers lui par-dessus l'épaule de sa mère. Aubin le prend. Il se tait. Il a le visage de quelqu'un qui se tient au bord de quelque chose de très profond, et qui ne sait pas encore s'il va sauter." },
    ],
    choices: [{ back: "IV_hub" }] },

  IV_loise: { act: "IV", title: "La tente de Saint-Pierre", place: "vaux",
    fx: { ep: ["perso", 800] },
    text: [
      "La tente des enfants seuls est la plus grande du camp, et la plus bruyante. Il y en a soixante, peut-être, de deux à douze ans, et deux sœurs de Hautecombe pour les tenir. Ça crie, ça pleure, ça se bat pour une couverture, ça chante aussi, et une des sœurs fait réciter l'alphabet à un groupe de petits assis en rond sur la paille.",
      "Loïse est là, avec son fichu rouge et Blanchette, qu'on a attachée au mât. La chèvre est devenue la reine de la tente. Les enfants lui apportent des épluchures, et Loïse décide qui a le droit de la caresser. Elle t'aperçoit, et elle te fait signe, de loin, comme une dame. Elle a l'air d'aller bien. Elle a l'air d'avoir décidé d'aller bien.",
      "« Elle ne parle jamais de sa mère, dit la sœur. Elle dit seulement qu'elle attend. Ils attendent tous. On ne sait pas quoi leur dire. »",
      { with: "pip", text: "Pip fait le tour de la tente, en haut, sous la toile, et soixante têtes se lèvent pour le suivre. Pendant un moment, plus personne ne crie. Puis un petit garçon dit : « Encore ! », et Pip recommence." },
    ],
    choices: [{ back: "IV_hub" }] },
});

// ------------------------------------------------------------------ side quest IV_anselme: the flasks of Anselme (echo anselme=…)
Object.assign(P, {
  IV_anselme: { act: "IV", title: "La charrette d'Anselme", place: "vaux", backName: "la charrette d'Anselme",
    fx: { meet: "anselme", questSeen: "IV_anselme" },
    text: [
      { first: true, text: "La charrette d'Anselme est rangée contre le mur du cimetière, la mule dételée à côté, qui mâche du foin acheté on ne sait où. Sur le plateau, sous une bâche relevée, des caisses de paille, et dans la paille, des fioles. Des dizaines de fioles de verre vert, bouchées à la cire, rangées en rangs serrés comme des soldats. L'eau, dedans, est d'une clarté parfaite." },
      { first: true, text: "Anselme n'a pas changé. Même moustache, même sourire qu'il ne faut pas croire, même façon de te reconnaître avant que tu l'aies reconnu. « Mais c'est ma meilleure pratique ! dit-il. Toujours en vie ! Je le dis partout : il y a des gens que rien ne tue, et c'est bon pour le commerce. » Il soulève une fiole dans la lumière. « Eau de source, eau de montagne, eau qui n'a jamais vu la vallée. Une couronne. C'est donné. Les gens pleurent en la buvant. »" },
      { again: true, text: "Anselme est à sa charrette, une fiole dans chaque main, et la file de ses clients est presque aussi longue que celle de la fontaine. Il te fait un clin d'œil par-dessus leurs têtes." },
      { if: { has: "anselme:sort" }, text: "La charrette est vide, la bâche rabattue. Anselme graisse les essieux, en sifflant faux. Il ne te regarde pas, ou il te regarde trop." },
      "Devant la charrette, une femme tend une broche d'argent. Anselme la soupèse, la mord, et lui donne une fiole. Elle la serre contre sa poitrine et s'en va presque en courant.",
    ],
    choices: [
      { label: "Examiner une fiole de près", hide: { any: [{ has: "anselme:sort" }, { seen: "IV_anselme_examen" }] }, test: { dom: "savoir", diff: -10, label: "Juger l'eau", help: [{ if: { has: "maitre:ortie" }, v: 10 }, { with: "charline", v: 10 }, { with: "pip", v: 10 }] }, win: { fx: { ep: ["perso", 1000], flag: "IV:anselme_moitie" }, to: "IV_anselme_examen" }, lose: { to: "IV_anselme_examen" } },
      { label: "Le suivre, cette nuit, quand il quittera le camp", hide: { any: [{ has: "anselme:sort" }, { seen: "IV_anselme_nuit" }] }, test: { dom: "discretion", diff: -20, label: "Suivre Anselme dans la montagne", help: [{ with: "pip", v: 5 }] }, win: { fx: { flag: "IV:anselme_source", ep: ["seance", 1800] }, to: "IV_anselme_nuit" }, lose: { to: "IV_anselme_perdu" } },
      { label: "« Laisse-moi le suivre », dit Coliane", who: "coliane", hide: { any: [{ has: "anselme:sort" }, { seen: "IV_anselme_nuit" }] }, fx: { flag: ["IV:anselme_source", "IV:anselme_coliane"], conf: { coliane: 5 }, ep: ["seance", 1800] }, to: "IV_anselme_nuit" },
      { label: "Lui demander tout net d'où vient son eau", hide: { has: "anselme:sort" }, to: "IV_anselme_face" },
      { back: "IV_hub" },
    ] },
  IV_anselme_examen: { act: "IV", title: "Les fioles vertes", place: "vaux",
    text: [
      { outcome: "win", text: "Tu prends une fiole, puis une autre, puis une autre, et tu les tiens contre la lumière, et tu les ouvres et tu les sens. Les premières sentent la pierre froide, l'eau vive, rien d'autre. La quatrième sent la neige. Elle est claire, elle aussi, mais d'une clarté plate, sans profondeur, et dans le fond, quand tu la penches, il y a un dépôt gris, très fin, à peine visible, comme de la cendre. Tu en essaies dix. Il y en a cinq de chaque.", else: "Tu prends une fiole, tu la tiens contre la lumière, tu l'ouvres, tu la sens. Elle sent l'eau. Elle est claire. Tu ne vois rien d'autre. Anselme, qui t'a regardé{e} faire, sourit de toutes ses dents. « Alors ? Une couronne ? Pour vous, dix-neuf sous. »" },
      { with: "pip", text: "Pip s'est posé sur le rebord d'une caisse, et il passe d'une fiole à l'autre, sa lumière à travers le verre. Sur certaines, elle ressort blanche. Sur d'autres, elle ressort un peu grise. Il te regarde, en silence. Il n'a pas besoin." },
    ],
    choices: [
      { label: "Le prendre à part, et lui dire ce que tu as vu", if: { has: "IV:anselme_moitie" }, why: "Tu n'as rien vu de certain.", to: "IV_anselme_face" },
      { back: "IV_anselme" },
    ] },
  IV_anselme_perdu: { act: "IV", title: "Dans le noir", place: "vaux", takes: "night",
    text: [
      "Tu le vois partir, à la nuit tombée, sa mule chargée de caisses vides, par le sentier qui monte derrière le cimetière. Tu le suis de loin. Il fait noir, le sentier est raide, et à un tournant, dans les mélèzes, il n'est plus là. Il n'y a plus que le vent, et le bruit lointain du torrent, et une odeur de mule qui s'efface.",
      "Tu rentres au camp à l'aube, les mains écorchées et bredouille. Anselme est déjà à sa charrette, ses caisses pleines. Il te salue d'un grand geste. « Bien dormi ? » demande-t-il.",
    ],
    choices: [{ back: "IV_anselme" }] },
  IV_anselme_nuit: { act: "IV", title: "La source d'Anselme", place: "vaux", takes: "night",
    text: [
      { if: { has: "IV:anselme_coliane" }, with: "coliane", text: "Coliane revient au milieu de la nuit, couverte de neige, et te secoue pour te réveiller. « Viens, dit-elle. Je te montre. Il ne bougera pas d'ici l'aube. » Vous montez ensemble, par le sentier du cimetière, puis hors du sentier, dans les rochers, jusqu'à une lueur.", else: "Tu le suis de loin, par le sentier qui monte derrière le cimetière, puis hors du sentier, dans les rochers, en te guidant au bruit de la mule. Une heure. Deux. Puis une lueur, entre deux blocs." },
      "C'est une fente dans la montagne, assez large pour un homme, et au fond, une petite grotte. Anselme a posé sa lanterne sur une pierre. Une eau sort de la roche, goutte à goutte, plus qu'en filet, et tombe dans une vasque naturelle, grande comme une écuelle. Au-dessus de la vasque, à demi effacée, une main gravée dans la pierre, ouverte. Anselme remplit ses fioles, une par une, avec une patience que tu ne lui connaissais pas. Il lui faut longtemps pour chacune.",
      "Puis, quand il en a rempli une vingtaine, il va dehors, ramasse de la neige à pleines mains, la tasse dans un chaudron, et met le chaudron sur un petit feu. Il remplit les autres fioles avec la neige fondue. Il les mélange aux premières. Il ne les marque pas. Il ne sait sans doute plus lui-même lesquelles sont lesquelles.",
    ],
    choices: [
      { label: "Sortir de l'ombre et lui parler", to: "IV_anselme_face" },
    ] },
  IV_anselme_face: { act: "IV", title: "Ce que dit Anselme", place: "vaux",
    text: [
      "Anselme ne nie pas. C'est ce qui le rend si difficile à haïr. Il s'assied sur une caisse, il sort sa pipe, il la bourre, et il te regarde avec une sorte d'affection. « La moitié, dit-il. La moitié de mes fioles viennent d'une source que personne d'autre ne connaît. L'autre moitié, de la neige. La neige est presque toujours propre, vous savez. Presque. »",
      { if: { has: "IV:anselme_source" }, text: "« Vous avez vu la vasque, reprend-il. Une écuelle. Vingt fioles par nuit, quand elle est généreuse. Il y a quatre mille personnes dans ce camp. Si je dis où elle est, ils y monteront tous demain. Ils la piétineront. Ils se battront dessus. Dans huit jours, elle sera sale, ou tarie, ou quelqu'un l'aura gardée pour lui avec une pique. »", else: "« Où est la source ? reprend-il. Ça, je ne le dis pas. Elle donne vingt fioles par nuit, quand elle est généreuse. Il y a quatre mille personnes dans ce camp. Si je dis où elle est, ils y monteront tous demain. Ils la piétineront. Dans huit jours, elle sera sale, ou tarie, ou quelqu'un l'aura gardée pour lui avec une pique. »" },
      "« Alors je fais ce que je sais faire. Je vends. Ceux qui paient une couronne ont une chance sur deux d'avoir de la vraie eau. Ceux qui ne paient pas n'en ont aucune. » Il allume sa pipe. « Ce n'est pas juste. Rien n'est juste. Mais c'est plus juste que rien. Et moi, il faut bien que je vive. »",
      { with: "coliane", text: "Coliane a la main sur son couteau. « Tu vends de la neige à des mères qui ont vendu leurs bagues », dit-elle. Anselme hausse les épaules. « Je leur vends de l'espoir. Il n'y en a pas de propre non plus. »" },
    ],
    choices: [
      { label: "Le dénoncer à Garance", fx: { set: { anselme: "denonce" }, flag: "anselme:sort", quest: "IV_anselme", fac: { brumefeuille: 5 }, conf: { coliane: 8 }, regard: { anselme: "rancunier", IV_garance: "cordial" }, ep: ["seance", 2000] }, to: "IV_anselme_denonce" },
      { label: "Le forcer à donner la source au camp, sous la garde de Garance", if: { has: "IV:anselme_source" }, why: "Tu ne sais pas où est la source, et il ne le dira pas sans y être forcé.", fx: { set: { anselme: "source" }, flag: "anselme:sort", quest: "IV_anselme", item: "eau_claire", fac: { brumefeuille: 10 }, conf: { pip: 10, aubin: 8, coliane: 5 }, regard: { anselme: "mefiant", IV_garance: "allie" }, ep: ["seance", 3000] }, to: "IV_anselme_source" },
      { label: "Le convaincre de donner lui-même sa source, et de garder son honneur de marchand", if: { not: { has: "IV:anselme_source" } }, why: "Tu sais déjà où est la source.", test: { dom: "social", diff: -20, label: "Convaincre Anselme", help: [{ with: "aubin", v: 10 }, { if: { has: "passe:libre" }, v: 10 }] }, win: { fx: { set: { anselme: "source" }, flag: "anselme:sort", quest: "IV_anselme", item: "eau_claire", fac: { brumefeuille: 10 }, conf: { pip: 10, aubin: 8 }, regard: { anselme: "cordial", IV_garance: "allie" }, ep: ["seance", 3000] }, to: "IV_anselme_source" }, lose: { fx: { set: { anselme: "denonce" }, flag: "anselme:sort", quest: "IV_anselme", regard: { anselme: "rancunier" }, ep: ["seance", 1000] }, to: "IV_anselme_denonce" } },
      { label: "Lui proposer de garder le secret, contre ta part", tag: "contre ton camp", fx: { set: { anselme: "associe" }, flag: "anselme:sort", quest: "IV_anselme", gold: 40, conf: { pip: -10, aubin: -10, coliane: -10 }, regard: { anselme: "allie" }, ep: ["seance", 1000] }, to: "IV_anselme_associe" },
    ] },
  IV_anselme_denonce: { act: "IV", title: "Le registre de Garance", place: "vaux",
    text: [
      "Garance écoute, prend une note dans son registre, et se lève. Une heure plus tard, la charrette d'Anselme est vide, les fioles alignées sur la table de sa tente, et deux hommes à piques raccompagnent le colporteur et sa mule jusqu'à la barrière. Il ne proteste pas. Il salue la foule d'un grand geste de son chapeau, comme un comédien qui sort de scène.",
      "Garance fait vider dans un baquet toutes les fioles qui ont un dépôt gris, et distribue les autres à l'infirmerie, une par malade, tant qu'il y en a. Il y en a vingt-sept. Elle te regarde. « Il savait où était la source, dit-elle. Il ne l'a pas dit. On ne la trouvera pas. » Elle referme son registre. « Mais au moins, on ne vendra plus de neige aux mères. C'est déjà ça. »",
      "À la barrière, Anselme se retourne une dernière fois. « On se reverra, dit-il. On se revoit toujours. Et ce jour-là, vous aurez besoin de quelque chose que je serai le seul à avoir. » Il sourit. Ce n'est pas une menace. C'est une prévision commerciale.",
    ],
    choices: [{ back: "IV_hub" }] },
  IV_anselme_source: { act: "IV", title: "La seconde source", place: "vaux",
    text: [
      "Le lendemain, Anselme conduit Garance et six hommes à la grotte. Il marche devant, en ronchonnant, et il ne leur montre le chemin qu'au dernier moment, à chaque tournant, comme on livre un secret qu'on regrette. Garance fait poser une porte de planches à l'entrée de la fente, avec un cadenas, et met deux gardes devant, comme à la fontaine.",
      "Vingt fioles par nuit. Ça ne sauve pas le camp. Ça sauve vingt personnes par nuit, celles de l'infirmerie, les enfants d'abord. Garance les inscrit dans son registre, une par une, avec le nom de ceux qui les boivent.",
      "Anselme vient te voir, le soir, à ton feu. Il te tend une fiole verte, de celles qu'il a remplies lui-même à la vasque. « La dernière, dit-il. La vraie. Je vous la donne, puisque vous m'avez tout pris. » Il ne sourit pas, pour une fois. Puis il sourit quand même. « Vous feriez un très mauvais marchand. C'est un compliment. Je crois. »",
      { with: "pip", text: "Pip va se poser sur le chapeau d'Anselme, une seconde, et revient. Anselme fait semblant de ne pas avoir remarqué." },
    ],
    choices: [{ back: "IV_hub" }] },
  IV_anselme_associe: { act: "IV", title: "Le marché", place: "vaux",
    text: [
      "Anselme rit, enchanté. Il compte quarante sous dans ta main, en petite monnaie, avec une lenteur de prêtre qui dit la messe. « Un tiers, dit-il. C'est honnête. On ne m'avait jamais proposé un marché aussi honnête. » Il te serre la main. Sa main est sèche et chaude. « Je savais que vous finiriez par comprendre le commerce. »",
      "Le lendemain, la file devant sa charrette est plus longue que jamais. Tu passes devant sans t'arrêter. Une femme, dans la file, tient une bague à la main, et elle la regarde, comme si elle lui disait adieu.",
      { with: "aubin", text: "Frère Aubin ne te parle pas de la journée. Le soir, il te dit seulement : « Je ne te demande pas pourquoi. Je te demande si ça valait quarante sous. » Tu te tais." },
      { with: "coliane", text: "Coliane, ce soir-là, s'assied de l'autre côté du feu. Elle se tait. Elle a déjà vu des marchés passés dans l'ombre. Elle sait comment ça finit." },
    ],
    choices: [{ back: "IV_hub" }] },
});

// ------------------------------------------------------------------ side quest IV_saintgilles: a roof for those of Saint-Gilles (echo saintgilles=…)
Object.assign(P, {
  IV_sg: { act: "IV", title: "Le hangar de la scierie", place: "vaux", backName: "le hangar de la scierie",
    fx: { meet: "IV_fulcran" },
    text: [
      { first: true, text: "La vieille scierie de Vaux est au bord du torrent, en contrebas du camp : un grand hangar de mélèze, ouvert d'un côté, avec un toit de bardeaux qui tient, et sous le toit, de la sciure sèche, épaisse comme un tapis. C'est le seul endroit sec et abrité du camp qui ne soit pas déjà plein. Devant le hangar, deux groupes se font face." },
      { first: true, text: "D'un côté, une douzaine de charretiers de Ferrance, des hommes larges, en tablier de cuir, avec des fouets à la ceinture et des gourdins posés contre les roues. Derrière eux, leurs bœufs, une vingtaine, qui fument dans le froid. Leur maître, Fulcran, un homme roux à la voix de forge, est assis sur un timon. De l'autre, la charrette de Saint-Gilles, et autour, une vingtaine de personnes : des vieux, des femmes, des enfants, et Jean Rabier qui tient une fourche sans savoir quoi en faire. Sur la charrette, Benoîte, très droite." },
      { again: true, text: "Le hangar de la scierie, la sciure, le torrent. Les deux groupes se regardent toujours, de part et d'autre de la porte, et personne n'entre." },
      "« Mes bœufs vont chercher le grain à Saulce, deux fois par semaine, dit Fulcran. Sans mes bœufs, ce camp meurt de faim avant l'Épiphanie. Mes bœufs ont besoin d'un toit. Ça n'a rien de personnel. » Il crache. « Les vieux, ils peuvent dormir sous une bâche. Les bœufs, non. Un bœuf qui prend froid, c'est un bœuf mort. »",
      { if: { has: "passe:aide" }, text: "Benoîte, sur sa charrette, te fait signe d'approcher. « Toi, dit-elle, tu portais les malades. Porte-nous encore un peu. » Ce n'est pas une prière. C'est une instruction." },
      { if: { all: [{ has: "passe:profite" }, { not: { has: "sg:terres_rendues" } }] }, text: "Jean Rabier te reconnaît. Il baisse la fourche. « Voilà à qui on paie le fermage, dit-il aux autres, assez fort pour que tu l'entendes. On vient voir si on doit encore quelque chose. » Quelques têtes se tournent vers toi. Elles ne sont pas aimables." },
      { if: { has: "passe:fui" }, text: "Personne ici ne te reconnaît. Tu reconnais trois visages. L'un d'eux est celui de la femme qui habitait à côté de chez toi, et qui t'avait crié, ce matin-là, de prendre au moins sa fille avec toi. Tu ne l'avais pas fait. La fille n'est pas là." },
    ],
    choices: [
      { label: "Plaider pour ceux de Saint-Gilles devant Fulcran", hide: { has: "saintgilles:sort" }, test: { dom: "social", diff: -20, label: "Faire céder Fulcran", help: [{ with: "aubin", v: 10 }, { if: { has: "passe:aide" }, v: 10 }, { if: { is: { greve: "accord" } }, v: 10 }] }, win: { fx: { set: { saintgilles: "partage" }, flag: "saintgilles:sort", quest: "IV_saintgilles", fac: { brumefeuille: 5 }, conf: { pip: 8, aubin: 5 }, regard: { IV_fulcran: "cordial" }, ep: ["seance", 2500] }, to: "IV_sg_partage" }, lose: { to: "IV_sg_tendu" } },
      { label: "« Laisse-moi leur parler, à ces charretiers », dit Thavary", who: "thavary", hide: { has: "saintgilles:sort" }, test: { dom: "social", diff: -10, label: "Thavary fait honte aux charretiers" }, win: { fx: { set: { saintgilles: "partage" }, flag: "saintgilles:sort", quest: "IV_saintgilles", conf: { thavary: 8 }, regard: { IV_fulcran: "craintif" }, ep: ["seance", 2500] }, to: "IV_sg_partage" }, lose: { fx: { conf: { thavary: -2 } }, to: "IV_sg_tendu" } },
      { label: "Payer Fulcran pour qu'il mette ses bœufs ailleurs (30 sous)", hide: { has: "saintgilles:sort" }, if: { gold: { min: 30 } }, why: "Tu n'as pas trente sous.", fx: { gold: -30, set: { saintgilles: "achete" }, flag: "saintgilles:sort", quest: "IV_saintgilles", conf: { pip: 5 }, regard: { IV_fulcran: "cordial" }, ep: ["seance", 1800] }, to: "IV_sg_achete" },
      { label: "Chercher un autre toit dans le camp, un endroit dont personne ne veut", hide: { any: [{ has: "saintgilles:sort" }, { seen: "IV_sg_cave" }] }, to: "IV_sg_cave" },
      { label: "Laisser Garance trancher", hide: { has: "saintgilles:sort" }, fx: { set: { saintgilles: "charretiers" }, flag: "saintgilles:sort", quest: "IV_saintgilles", conf: { pip: -5 }, ep: ["perso", 800] }, to: "IV_sg_charretiers" },
      { back: "IV_hub" },
    ] },
  IV_sg_tendu: { act: "IV", title: "Les gourdins", place: "vaux",
    text: [
      "Fulcran t'écoute jusqu'au bout, poliment, et puis il secoue la tête. « Belle parole, dit-il. Mes bœufs ne mangent pas de parole. » Derrière lui, deux charretiers ont pris leur gourdin, sans le lever. Jean Rabier serre sa fourche. Une femme de Saint-Gilles a ramassé une pierre.",
      "Il suffirait d'un geste. Tu le vois, et Fulcran le voit aussi. Il lève la main pour retenir ses hommes. « Pas aujourd'hui, dit-il. Mais demain, mes bœufs dorment là-dedans. » Il retourne s'asseoir sur son timon.",
    ],
    choices: [{ back: "IV_sg" }] },
  IV_sg_partage: { act: "IV", title: "Le hangar partagé", place: "vaux",
    text: [
      { if: { present: "thavary" }, text: "Thavary s'avance jusqu'à Fulcran, tout près, et elle lui parle à voix basse, la main sur le pommeau de son épée, sans la tirer. Tu n'entends pas tout. Tu entends « Thavar », « les vieux », et « honte », et à la fin, Fulcran rougit jusqu'aux oreilles, ce qui est beaucoup pour un rouquin.", else: "Tu lui parles des bœufs qui ont besoin d'un toit, et des vieux qui en ont besoin aussi, et du hangar qui est grand. Tu lui parles du grain qu'il va chercher et des gens qui le mangeront, dont certains sont sur cette charrette. À la fin, Fulcran se gratte la barbe longtemps." },
      "« Bon, dit-il. On coupe le hangar en deux. Les bœufs au fond, contre le rocher, là où il fait le plus chaud. Les vieux devant. Mes gars feront une cloison de planches. » Il se lève, crache, et regarde Benoîte. « Et si les bœufs vous empêchent de dormir, la vieille, ce sera tant pis pour vous. »",
      "« Les bœufs, dit Benoîte, je les entends depuis soixante-dix ans. C'est les charretiers qui m'empêcheront de dormir. » Fulcran éclate de rire, et c'est fini. Le soir, la cloison est montée, et les deux moitiés du hangar partagent le même feu, et la chaleur des bêtes passe à travers les planches.",
      { if: { has: "passe:profite" }, text: "Jean Rabier vient te trouver, le soir, au feu. Il te tend la main. Il la retire avant que tu la prennes, puis il la tend de nouveau. « Ça ne rend pas les champs, dit-il. Mais merci. » C'est plus qu'il ne t'en a jamais dit." },
    ],
    choices: [{ back: "IV_hub" }] },
  IV_sg_achete: { act: "IV", title: "Trente sous", place: "vaux",
    text: [
      "Fulcran compte les trente sous, les fait sonner dans sa paume, et hoche la tête. « Pour ça, dit-il, je mets mes bœufs dans le verger, sous des bâches, et je les couvre avec mes propres couvertures. Ils ne mourront pas. Probablement. » Il siffle ses hommes, et les charretiers partent avec les bêtes vers le verger, en tournant le dos à ceux de Saint-Gilles.",
      "Les vieux entrent dans le hangar l'un derrière l'autre, en silence, comme on entre dans une église. Jean Rabier porte Benoîte, qui se laisse faire en ronchonnant. Elle se fait installer au fond, dans la sciure, contre le rocher, là où il fait le plus chaud, et elle s'endort aussitôt.",
      { if: { has: "passe:profite" }, text: "Rabier vient te voir avant la nuit. « Trente sous, dit-il. C'est à peu près ce que je vous payais par an. » Reproche ou remerciement, lui-même hésite sans doute." },
    ],
    choices: [{ back: "IV_hub" }] },
  IV_sg_charretiers: { act: "IV", title: "La décision de Garance", place: "vaux",
    text: [
      "Garance descend jusqu'à la scierie, son registre sous le bras. Elle écoute les uns, elle écoute les autres, elle regarde les bœufs, elle regarde les vieux. Elle n'hésite pas longtemps. « Les bœufs, dit-elle. Sans eux, il n'y a plus de grain pour personne. Ceux de Saint-Gilles auront la toile de l'église, et des braseros. Je n'ai pas mieux. »",
      "Les charretiers font entrer leurs bêtes. Ceux de Saint-Gilles déchargent leur charrette sur la place, dans la boue, et montent une tente avec ce qu'ils ont. Benoîte descend de la charrette pour la première fois depuis Saint-Gilles. Elle s'assied sur la croix de bois de son puits, posée à plat dans la boue, et elle regarde le hangar.",
      "Garance avait raison. Tu le sais. Ça ne change rien à ce que tu ressens en voyant Benoîte assise sur sa croix.",
    ],
    choices: [{ back: "IV_hub" }] },
  IV_sg_cave: { act: "IV", title: "Le cellier de l'église", place: "vaux",
    text: [
      "Garance te parle, quand tu lui demandes, du cellier de l'église : une grande cave voûtée, sous le chœur, où le curé de Vaux gardait la dîme du vin et des grains. Sèche, saine, à l'abri du gel. Personne n'y descend. « Le curé y est descendu la deuxième semaine, dit-elle. On l'a remonté le lendemain. Il est mort trois jours après, sans avoir parlé. Depuis, on a mis une pierre sur la trappe. »",
      "La trappe est derrière l'autel, sous une dalle que quatre hommes ont roulée là. Quand on la dégage, il en monte un air froid, humide, qui sent la cave, le vin aigre, et autre chose : la vase. Il y a de l'eau en bas, quelque part, alors qu'il ne devrait pas y en avoir.",
      { with: "gloup", text: "Gloup, au bord de la trappe, se fait tout petit et refuse de descendre. Puis il se ravise, et il descend le premier, en roulant sur les marches. Il a l'air d'avoir décidé que si quelque chose de sa famille vivait là-dessous, c'était à lui d'aller voir." },
    ],
    choices: [
      { label: "Descendre, une lanterne à la main", to: "IV_sg_cave_fond" },
      { label: "Remettre la dalle et chercher autre chose", back: "IV_sg" },
    ] },
  IV_sg_cave_fond: { act: "IV", title: "Sous le chœur", place: "vaux",
    text: [
      "Le cellier est plus grand que l'église au-dessus. Des voûtes basses, des piliers trapus, des tonneaux éventrés, des sacs de grain pourris. Au fond, là où le sol descend, une flaque s'est formée, large comme une chambre, et elle n'est pas immobile. Elle respire. Sa surface se soulève et retombe, lentement, au rythme d'un dormeur.",
      "Quand ta lumière la touche, quelque chose se lève de la flaque. Ça a la forme d'un homme en soutane, à peu près. Ça a le visage du curé de Vaux, à peu près. Ça te regarde avec des yeux d'eau, et la bouche s'ouvre, et il en coule de la vase. « Les dîmes, dit-il. Il faut garder les dîmes. »",
    ],
    choices: [
      { label: "Le combattre", fight: { title: "Le gardien des dîmes", enemies: [{ id: "IV_cure_vase", n: 1 }], terrain: "nature", spare: true,
        win: { fx: { set: { saintgilles: "cave" }, flag: "saintgilles:sort", quest: "IV_saintgilles", fac: { brumefeuille: 10 }, conf: { pip: 5, gloup: 5 }, ep: ["seance", 3500] }, to: "IV_sg_cave_fin" },
        lose: { fx: { pv: -6 }, to: "IV_sg_cave_perdu" },
        calm: { to: "IV_sg_cave_calme" },
        flee: { label: "Remonter l'escalier en courant", dom: "discretion", diff: -10, to: "IV_sg_cave_perdu" } } },
      { label: "Lui parler comme à un prêtre : les dîmes ont été rendues aux pauvres", test: { dom: "social", diff: -20, label: "Apaiser le curé noyé", help: [{ with: "aubin", v: 15 }, { if: { item: "eau_claire" }, v: 10 }] }, win: { to: "IV_sg_cave_calme" }, lose: { to: "IV_sg_cave_perdu" } },
    ] },
  IV_sg_cave_calme: { act: "IV", title: "Les dîmes rendues", place: "vaux",
    fx: { set: { saintgilles: "cave" }, flag: "saintgilles:sort", quest: "IV_saintgilles", fac: { brumefeuille: 10, ordre: 3 }, conf: { pip: 10, aubin: 8 }, ep: ["seance", 3500] },
    text: [
      "Tu lui parles des gens d'en haut, dans l'église, sous les bancs. Des vieux de Saint-Gilles qui n'ont pas de toit. Tu lui dis que les dîmes sont faites pour ça, qu'il les a gardées assez longtemps, qu'il peut les rendre. La chose t'écoute. Sa tête penche. La vase coule plus lentement de sa bouche.",
      { with: "aubin", text: "Frère Aubin s'avance jusqu'au bord de la flaque, et il dit l'absoute des morts, en entier, de sa voix grave, sans se presser. Il dit le nom du curé, qu'il a demandé à Garance. La chose se tourne vers lui en entendant son nom." },
      "« Rendues, dit-elle. Bien. » Elle s'affaisse dans la flaque, doucement, comme un homme qui s'assied après une longue journée. La flaque cesse de respirer. Au matin, elle a baissé de moitié. Au soir, il n'y a plus que de la boue, et dans la boue, un chapelet de buis.",
      "On remonte les tonneaux pourris, on brûle les sacs, on répand de la paille fraîche. Ceux de Saint-Gilles descendent dans le cellier le soir même. Il y fait doux, et sec, et Benoîte dit que c'est la meilleure chambre qu'elle ait eue de sa vie. Les charretiers gardent le hangar, et tout le monde a un toit.",
    ],
    choices: [{ back: "IV_hub" }] },
  IV_sg_cave_fin: { act: "IV", title: "Le cellier nettoyé", place: "vaux",
    text: [
      "La chose se défait sous tes coups comme un mur de boue sous la pluie, et elle retombe dans la flaque en éclaboussant les voûtes. La flaque bouillonne, puis se calme. Elle ne respire plus. Au matin, elle a baissé de moitié. Au soir, il n'y a plus que de la boue, et dans la boue, un chapelet de buis.",
      "On remonte les tonneaux pourris, on brûle les sacs, on répand de la paille fraîche. Ceux de Saint-Gilles descendent dans le cellier le soir même. Il y fait doux, et sec. Benoîte se fait installer contre le pilier du milieu, et elle y plante la croix de bois de son puits, debout, entre deux pierres. « Comme ça, dit-elle, on saura où c'est chez nous. »",
      "Les charretiers gardent le hangar. Fulcran vient voir le cellier, le lendemain, les pouces dans la ceinture. « Pas mal, dit-il. Pas mal du tout. » Il a l'air un peu jaloux.",
    ],
    choices: [{ back: "IV_hub" }] },
  IV_sg_cave_perdu: { act: "IV", title: "La trappe", place: "vaux",
    text: [
      "Tu remontes l'escalier plus vite que tu ne l'as descendu, la chose derrière toi, et des bras te tirent par le col au moment où tu passes la trappe. On roule la dalle. Dessous, quelque chose cogne, une fois, deux fois, puis plus rien. Tu restes assis{e} par terre derrière l'autel, trempé{e} de vase jusqu'à la taille, à reprendre ton souffle.",
      "Garance te regarde. « Je t'avais dit qu'on avait mis une pierre », dit-elle. Ce n'est pas un reproche. Elle te tend un linge.",
    ],
    choices: [{ back: "IV_sg" }] },
});

// ------------------------------------------------------------------ the shepherds' path to the tower (r_tour): legs
Object.assign(P, {
  IVT_r_melezes: { title: "Le bois de mélèzes",
    text: [
      "Le chemin des bergers quitte le camp par le haut, derrière le cimetière, et entre presque aussitôt dans un bois de mélèzes. Les arbres ont perdu leurs aiguilles, qui font sur le sol un tapis roux et mou où les pas ne font aucun bruit. Il fait un froid sec, et l'air sent la résine et la neige.",
      "À mi-pente, une cabane de berger, fermée, avec sur la porte une main ouverte peinte à l'ocre, très ancienne, presque effacée. Six doigts. Quelqu'un, plus tard, a gratté le sixième avec une pierre ; on voit les rayures, et sous les rayures, la couleur qui reste.",
      { with: "pip", text: "Pip s'arrête devant la porte, longtemps. Puis il compte, tout bas, en touchant chaque doigt de sa lumière : un, deux, trois, quatre, cinq. Il s'arrête. Il recommence. Il ne dit pas le dernier chiffre." },
    ],
    choices: [{ label: "Continuer à monter", back: R }] },
  IVT_r_pont: { title: "Le pont de corde",
    text: [
      "Le bois s'arrête au bord d'une gorge. En bas, très loin, un torrent gris mugit entre des rochers couverts de glace. Pour passer, il y a un pont de corde : deux câbles de chanvre goudronné, des planches tous les deux pas, et une main courante qui a l'air d'avoir été posée par quelqu'un d'optimiste. Le vent le fait balancer lentement.",
      "De l'autre côté, le chemin remonte en lacets vers la tour, qui est là, toute proche maintenant : grise, massive, avec ses quatre ailes basses étalées autour d'elle comme les doigts d'une main posée à plat.",
    ],
    choices: [
      { label: "Passer, une planche après l'autre, sans regarder en bas", test: { dom: "nature", diff: -10, label: "Traverser le pont de corde", help: [{ if: { item: "corde" }, v: 10 }] }, win: { fx: { ep: ["perso", 1000] }, back: R }, lose: { fx: { pv: -4 }, to: "IVT_r_pont_chute" } },
      { label: "« Laisse-moi passer devant et tendre une corde », dit Coliane", who: "coliane", fx: { conf: { coliane: 5 }, ep: ["perso", 1000] }, back: R },
      { label: "Descendre dans la gorge et la remonter de l'autre côté, par les rochers", fx: { time: 4, ep: ["perso", 600] }, back: R },
    ] },
  IVT_r_pont_chute: { title: "Le pont de corde",
    text: [
      "À la moitié du pont, une planche cède sous ton pied. Tu tombes, tu te rattrapes au câble, et tu restes là, suspendu{e} au-dessus du vide, les mains brûlées par le chanvre, le cœur qui cogne dans la gorge. Le pont tangue. En bas, le torrent n'a pas l'air de s'intéresser à toi.",
      "Tu remontes à la force des bras, en t'écorchant les genoux sur les planches, et tu finis la traversée à quatre pattes. De l'autre côté, tu restes assis{e} un long moment dans la neige à regarder tes mains trembler.",
    ],
    choices: [{ label: "Reprendre le chemin de la tour", back: R }] },
});

// ------------------------------------------------------------------ the tower of Hildre: the threshold (hub)
Object.assign(P, {
  IVT_seuil: { act: "IV", title: "La tour d'Hildre", place: "tour", hub: true, routes: true, backName: "la cour de la tour d'Hildre",
    fx: { clock: { voix: 1 }, ep: ["seance", 3000] },
    text: [
      { first: true, text: "La tour d'Hildre n'a pas de porte. Elle a une arche, haute et large, sans vantaux ni gonds, comme si celle qui l'avait bâtie avait voulu que n'importe qui puisse entrer, à n'importe quelle heure. Derrière l'arche, une cour carrée, dallée de pierre noire, où la neige n'a pas tenu. Au milieu de la cour, une vasque de pierre, pleine d'une eau immobile." },
      { first: true, text: "Quatre portes donnent sur la cour, une sur chaque côté, chacune vers une aile. Au-dessus de chacune, un signe sculpté : un marteau ; une cloche ; un anneau ; et sur la quatrième, qu'on a murée de briques à une époque plus récente, un pic de mineur, à demi effacé sous une coulée noire. Et devant toi, au fond de la cour, au pied du corps carré de la tour, un mur lisse où sont sculptées six mains, paumes ouvertes, côte à côte. Pas de porte. Pas de serrure. Rien." },
      { first: true, text: "Il fait plus froid ici que dehors. Le vent ne passe pas l'arche. Le silence est complet : les oiseaux se sont tus, l'eau aussi. Tu entends ta propre respiration, et celle de ceux qui sont avec toi." },
      { again: true, text: "La cour de pierre noire, la vasque immobile, les quatre portes et le mur aux six mains. Le silence ne change pas." },
      { if: { count: WINGS, min: 1 }, text: "Sur le mur du fond, au-dessus des six mains, des lignes de lumière sont apparues dans la pierre, très fines, comme des fêlures dorées. Il y en a une pour chaque aile que tu as parcourue. Elles convergent toutes vers la même main : la sixième." },
      { if: { has: "IV:tour" }, text: "Le mur du fond est ouvert, maintenant. Une fente de la largeur d'un homme, d'où sort une lumière grise et froide. Tu sais ce qu'il y a derrière." },
      { with: "charline", if: { not: { has: "IVT:feu" } }, text: "Charline regarde la porte au marteau. Elle reste immobile. Elle a la mâchoire serrée." },
      { with: "gloup", if: { not: { has: "IVT:vase" } }, text: "Gloup s'est arrêté devant la porte murée, celle d'où suinte la coulée noire. Il fait un petit bruit, très doux, presque un gémissement. Il reste planté là." },
    ],
    choices: [
      { label: "L'aile du marteau", hide: { has: "IVT:feu" }, to: "IVT_feu" },
      { label: "L'aile de la cloche", hide: { has: "IVT:eau" }, to: "IVT_eau" },
      { label: "L'aile de l'anneau", hide: { has: "IVT:pierre" }, to: "IVT_pierre" },
      { label: "L'aile murée, sous le pic de mineur", hide: { has: "IVT:vase" }, to: "IVT_vase" },
      { label: "Te pencher sur la vasque", hide: { any: [{ seen: "IVT_vasque" }, { has: "IV:tour" }] }, to: "IVT_vasque" },
      { label: "Le mur aux six mains", big: true, hide: { has: "IV:tour" }, if: { count: WINGS, min: 3 }, why: "Le mur reste lisse et fermé. Il faudra d'abord parcourir les ailes de la tour.", to: "IVT_centre" },
      { label: "La salle du centre", hide: { not: { has: "IV:tour" } }, to: "IVT_centre_retour" },
    ] },

  IVT_vasque: { act: "IV", title: "La vasque", place: "tour",
    text: [
      "L'eau de la vasque est noire et parfaitement lisse. Tu t'y penches, et tu t'y vois, et derrière toi, dans le reflet, il y a la cour, les quatre portes, le mur aux six mains. Puis le reflet change. Il n'y a plus de cour. Il y a une femme, debout, faite de vase, avec des cheveux comme des algues qui flottent autour de sa tête sans qu'il y ait d'eau pour les porter.",
      "« {hero}, dit-elle. Tu es venu{e} jusqu'à leur maison. » Sa voix est douce, raisonnable. « Ils l'ont bâtie pour se réunir après, tu sais. Pour se dire qu'ils avaient eu raison. Ils ont mis quatre ailes, une chacun, pour y ranger ce qu'ils ne voulaient pas regarder. Tu vas aller ouvrir leurs placards, un par un. C'est long. C'est douloureux. Tes amis vont y laisser des morceaux. »",
      "Elle sourit. « Je peux t'ouvrir le mur du fond tout de suite. Sans les ailes. Sans rien. Tu entres, tu vois, tu repars. Personne n'a besoin de souffrir. Il suffit que tu mettes la main dans l'eau. »",
      { with: "aubin", text: "Frère Aubin a posé la main sur ton épaule. Il ne serre pas. Il la pose, simplement, et il la laisse là." },
    ],
    choices: [
      { label: "Mettre la main dans l'eau", tag: "Marque +1", stain: true, fx: { mark: 1, flag: ["IVT:raccourci", "IVT:feu", "IVT:eau", "IVT:pierre", "IVT:vase"], fear: { pip: 10, aubin: 10 }, conf: { aubin: -10, coliane: -10 } }, to: "IVT_vasque_main" },
      { label: "Te redresser sans répondre", fx: { conf: { pip: 5, aubin: 5 } }, back: "IVT_seuil" },
    ] },
  IVT_vasque_main: { act: "IV", title: "Le raccourci", place: "tour",
    text: [
      "L'eau est tiède. Elle se referme sur ton poignet comme une main sur une autre main, doucement, et elle serre un peu, et elle lâche. Quand tu retires ton bras, la tache de ta paume a grandi d'un doigt. Derrière toi, quelque chose craque : les quatre portes des ailes se sont refermées d'un coup, toutes ensemble, et sur le mur du fond, des lignes de lumière grise courent dans la pierre jusqu'à la sixième main.",
      "« Tu vois, dit la Voix, déjà lointaine. Ce n'était pas si difficile. Ce qu'ils ont rangé dans leurs ailes, tu n'en avais pas besoin. Tes amis non plus. » La vasque redevient lisse. Dans le reflet, il n'y a plus que toi.",
      { with: "any", text: "Personne ne te parle. Ceux qui sont venus avec toi regardent les portes fermées des ailes, chacun la sienne, peut-être, et puis ils te regardent, toi, et ils ne disent rien. Tu as choisi pour eux." },
    ],
    choices: [{ label: "Aller au mur aux six mains", big: true, to: "IVT_centre" }] },
});

// ------------------------------------------------------------------ the wing of fire (Hildre): Charline's arc
Object.assign(P, {
  IVT_feu: { act: "IV", title: "L'aile du marteau", place: "tour", backName: "la forge d'Hildre",
    text: [
      "Derrière la porte au marteau, une salle longue et haute, voûtée en berceau, noircie de suie jusqu'à la clé. C'est une forge. La plus grande que tu aies vue, plus grande que la Forge-Mère de Ferrance : un foyer de pierre où l'on pourrait faire rôtir un bœuf, un soufflet de cuir grand comme une voile, et au milieu, une enclume de pierre noire, avec trois trous carrés sur le plat. Tout est froid. Le foyer est plein d'une cendre blanche, très ancienne, qui n'a pas bougé depuis quatre cents ans.",
      "Sur le linteau du foyer, gravé en lettres anciennes : *HILDRE. J'AI FORGÉ CE QU'ON M'A DEMANDÉ DE FORGER.*",
      "Et devant le foyer, assis sur un billot, enveloppé dans une couverture de mule, il y a un vieil homme. Il a les mains dans des gants de cuir, posées sur les genoux, et autour de lui, sur les dalles, des allumettes de soufre, des pierres à feu, de l'amadou, des copeaux, tout ce qu'il faut pour faire du feu, éparpillé, cassé, mouillé. Il lève la tête quand tu entres. Il a les lèvres bleues.",
      { with: "charline", text: "Charline s'arrête net sur le seuil. « Père », dit-elle. Ce n'est pas un cri. C'est à peine un mot." },
      { without: "charline", text: "« Ansgar, dit-il, d'une voix éraillée de froid. Maître de la Forge-Mère de Ferrance. Ou ce qu'il en reste. » Il essaie de sourire. « Vous n'auriez pas du feu ? »" },
    ],
    choices: [
      { label: "Aller à lui", with: "charline", to: "IVT_feu_ansgar" },
      { label: "Aller à lui et le réchauffer", without: "charline", to: "IVT_feu_seul" },
    ] },

  IVT_feu_ansgar: { act: "IV", title: "Le père et la fille", place: "tour", with: "charline",
    fx: { meet: "ansgar", ep: ["seance", 2000] },
    text: [
      "Charline traverse la forge en trois pas, et elle s'agenouille devant son père, et elle lui prend les mains, les deux, gants et tout, et elle souffle dessus, comme on fait aux enfants. Ses mains à elle, couvertes de petites brûlures rondes, se mettent à rougeoyer, doucement, une chaleur de braise qui monte dans les gants de cuir. Ansgar ferme les yeux.",
      "« La Forge-Mère s'est éteinte, dit-il, au bout d'un moment. À la Saint-Martin. Le feu est devenu noir, d'abord, puis il est mort. Toutes les forges de Ferrance, l'une après l'autre. On dit que c'est la souillure, qu'elle est montée par les puits du quartier bas. » Il ouvre les yeux. « On dit que le premier feu, celui d'Hildre, est encore ici, sous la cendre. Qu'il ne s'éteint pas. Je suis venu le chercher. Je n'arrive pas à l'allumer. » Il regarde ses mains, dans celles de sa fille. « Évidemment. »",
      { if: { is: { ansgar: "parle" } }, text: "Il dit ça sans amertume, et Charline sourit, à peine, parce qu'ils ont déjà dit à Ferrance ce qu'il y avait à dire, devant le coffre aux soixante-douze pots. Ce qui reste entre eux, maintenant, c'est seulement le froid." },
      { if: { is: { ansgar: "silence" } }, text: "Charline se tait. Elle continue à chauffer ses mains. Ils ne se sont pas parlé depuis Ferrance ; ils ne se sont pas vraiment parlé depuis l'incendie. Tu vois les mots se former sur les lèvres de l'un, puis de l'autre, et ne pas sortir." },
      { if: { not: { any: [{ is: { ansgar: "parle" } }, { is: { ansgar: "silence" } }] } }, text: "Charline se tait. Elle continue à chauffer ses mains, longtemps, sans le regarder. Il la regarde, lui. Il la regarde comme un homme qui doute d'en avoir le droit." },
    ],
    choices: [
      { label: "« Le feu d'Hildre. Charline, tu peux l'allumer. »", to: "IVT_feu_foyer" },
    ] },

  IVT_feu_foyer: { act: "IV", title: "Le premier feu", place: "tour", with: "charline",
    text: [
      "Charline se relève. Elle regarde le foyer de Hildre, la cendre blanche, l'énorme soufflet. Elle a peur. Tu le vois à ses épaules, à la façon dont elle garde les coudes serrés contre ses flancs. « La dernière fois que j'ai allumé une forge, dit-elle, j'avais huit ans, et j'ai brûlé les mains de mon père. »",
      "« Tu avais huit ans, dit Ansgar. Et c'était ma forge. Et c'est moi qui t'avais laissée seule devant. » Il se lève, en s'appuyant sur le billot. « Celle-ci n'est pas à moi. Elle n'est à personne. Allume-la. »",
      { if: { mark: { min: 3 } }, text: "Tu sens, au fond de la cendre, quelque chose qui répond à ta main gauche. Une chaleur sombre, qui attend. Tu pourrais l'allumer, toi aussi. Ce ne serait pas le même feu." },
    ],
    choices: [
      { label: "« Laisse-moi faire », dit Charline", who: "charline", test: { dom: "magie", diff: -20, label: "Réveiller le feu d'Hildre", help: [{ with: "pip", v: 10 }, { if: { relic: "clou" }, v: 10 }, { if: { conf: "charline", min: 50 }, v: 10 }] }, win: { fx: { ep: ["seance", 3000], conf: { charline: 10 } }, to: "IVT_feu_allume" }, lose: { fx: { conf: { charline: -3 } }, to: "IVT_feu_rate" } },
      { label: "Tenir le soufflet pendant qu'elle cherche le feu sous la cendre", fx: { conf: { charline: 8 }, ep: ["seance", 2500] }, to: "IVT_feu_allume" },
      { label: "Allumer toi-même le feu, avec ce qui répond dans ta main", tag: "Marque +1", stain: true, if: { mark: { min: 3 } }, why: "Rien en toi ne répond à cette cendre.", fx: { mark: 1 }, to: "IVT_feu_noir" },
    ] },
  IVT_feu_rate: { act: "IV", title: "La cendre", place: "tour", with: "charline",
    text: [
      "Charline pose les mains sur la cendre, et la cendre reste froide. Elle insiste. Ses mains rougissent, puis blanchissent, et l'air se met à trembler au-dessus du foyer, et rien ne prend. Au bout d'un long moment, elle retire ses mains, et elle les regarde, et elle se met à rire, d'un rire qui n'est pas loin des larmes. « Il ne veut pas de moi », dit-elle.",
      "Ansgar s'approche, de son pas raide. Il s'agenouille à côté d'elle, devant le foyer. Il ôte ses gants, avec les dents, l'un après l'autre. Il pose ses mains mortes sur la cendre, à côté des siennes. « Ensemble, dit-il. Comme quand je t'apprenais. Toi le feu. Moi le poids. »",
      "Cette fois, quelque chose bouge, sous la cendre. Une lueur. Puis une autre.",
    ],
    choices: [{ label: "Tirer sur le soufflet, de toutes tes forces", fx: { ep: ["seance", 2000] }, to: "IVT_feu_allume" }] },
  IVT_feu_noir: { act: "IV", title: "Le feu noir", place: "tour", with: "charline",
    text: [
      "Tu poses ta main gauche sur la cendre. Le feu prend tout de suite, d'un coup, en silence : une flamme haute, droite, d'un violet si sombre qu'il en paraît noir. Elle ne chauffe pas. Elle éclaire la forge d'une lumière de cave, et l'enclume de pierre noire se met à luire. Ansgar recule. Charline reste immobile.",
      "« Ce n'est pas le feu d'Hildre », dit-elle, d'une voix blanche. Elle lève la main, et la flamme noire se couche vers elle, comme un chien. Elle retire la main. « Éteins-le. » Tu ne sais pas comment. Il s'éteint de lui-même, quand tu retires ta paume, et le foyer redevient froid, et la cendre blanche est grise maintenant.",
      "Charline met longtemps à te regarder de nouveau. Quand elle le fait, elle a dans les yeux quelque chose que tu n'y avais jamais vu : de la peur, et pas d'elle-même.",
    ],
    choices: [{ label: "Laisser Charline essayer à son tour", fx: { fear: { charline: 15 } }, to: "IVT_feu_rate" }] },
  IVT_feu_allume: { act: "IV", title: "Le feu d'Hildre", place: "tour", with: "charline",
    text: [
      "Le feu d'Hildre sort de la cendre comme une source sort d'un rocher : d'abord un fil, puis un ruisseau, puis tout le foyer, d'un jaune très pur, presque blanc, qui ne fume pas et qui chante doucement. La chaleur emplit la forge en un instant. La suie des voûtes se met à luire. Sur l'enclume de pierre noire, les trois trous carrés s'éclairent de l'intérieur.",
      "Charline est debout devant le feu, les mains tendues, et le feu se penche vers elle, et elle ne recule pas. Elle rit. Elle pleure aussi, mais elle rit. « Il n'a pas peur de moi, dit-elle. Il n'a pas peur de moi. »",
      "Ansgar la regarde. Puis il va chercher, dans son sac, un petit pot de fer à couvercle, tapissé de cendre, celui que les forgerons utilisent pour transporter une braise d'une forge à l'autre. Il le tient entre ses poignets. « Pour la Forge-Mère, dit-il. Si tu veux. »",
      "Et sur le manteau du foyer, maintenant éclairé, d'autres lignes apparaissent sous la suie, plus petites, gravées sous l'inscription d'Hildre : *ET J'AI GARDÉ LE FEU POUR CELUI QUI VIENDRAIT LE DÉFAIRE.*",
    ],
    choices: [{ label: "Regarder Charline, et attendre qu'elle parle", big: true, to: "IVT_feu_choix" }] },
  IVT_feu_choix: { act: "IV", title: "Ce que fera Charline", place: "tour", with: "charline",
    text: [
      "Charline a pris le pot à braise des poignets de son père. Elle le tient contre elle. Le feu d'Hildre brûle derrière elle, et elle te regarde, toi, et pas lui. « Dis-moi, dit-elle. Pas ce que je dois faire. Ce que tu vois. »",
      "Tu vois trois choses, et elle aussi. Une forge éteinte à Ferrance, et une ville qui vit de ses forges, et un maître qui n'a plus de mains : quelqu'un doit la rallumer et la tenir. Un Cercle qui l'a chassée, qui savait ce qu'il y avait dans les livres et qui l'a caché, et un feu entre ses mains qui pourrait tout brûler, l'Athénée, les registres, les mensonges. Et un vieil homme debout dans une forge froide, qui a fait cinq jours de marche pour venir chercher un feu qu'il ne pouvait pas allumer, et qui le savait en partant.",
      { if: { is: { livre: ["garde", "vendu"] } }, text: "Elle ajoute, plus bas : « Le Cercle n'a pas oublié le livre enchaîné. On m'en tient pour responsable, à l'Athénée. Ils m'ont rayée deux fois, maintenant. »" },
      { if: { conf: "charline", min: 50 }, text: "Elle attend ta réponse. Elle la suivra. Tu le sais, et elle sait que tu le sais, et c'est peut-être pour ça qu'elle te la demande.", else: "Elle attend ta réponse. Tu n'es pas sûr{e} qu'elle la suivra. Elle n'est pas sûre non plus." },
    ],
    choices: [
      { label: "« Reprends la forge. Ferrance a besoin de son feu, et ce feu t'a choisie. »", fx: { set: { charline_arc: "forge" }, flag: "IVT:feu", conf: { charline: 10 }, regard: { ansgar: "redevable" }, ep: ["histoire", 3000] }, to: "IVT_feu_forge" },
      { label: "« Le Cercle t'a menti, à toi et à tous. Brûle ses mensonges. »", fx: { set: { charline_arc: "brule" }, flag: "IVT:feu", conf: { charline: 5 }, fear: { charline: 5 }, fac: { cercle: -20 }, ep: ["histoire", 3000] }, to: "IVT_feu_brule" },
      { label: "« Regarde ton père. Il est venu chercher le feu pour toi. »", fx: { set: { charline_arc: "pardon" }, flag: "IVT:feu", conf: { charline: 15 }, regard: { ansgar: "allie" }, ep: ["histoire", 3500] }, to: "IVT_feu_pardon" },
    ] },
  IVT_feu_forge: { act: "IV", title: "La braise de Ferrance", place: "tour", with: "charline",
    fx: { item: "IVT_braise" },
    text: [
      "Charline hoche la tête, lentement, comme quelqu'un qui reconnaît une chose qu'elle savait depuis longtemps. Elle prend une braise dans le foyer d'Hildre, à mains nues, et la dépose dans le pot de fer. Puis une seconde, dans un autre pot, plus petit, qu'elle te tend. « Pour toi, dit-elle. Pour là-haut. Un feu qui n'a pas peur, ça peut servir. »",
      "« Après, dit-elle à son père, quand tout sera fini, je rentre à Ferrance. Je rallume la Forge-Mère. Et c'est moi qui la tiens. Pas toi. Moi. Toi, tu t'assieds à côté et tu me dis quand je me trompe. » Ansgar la regarde. Il n'arrive pas à parler. Il hoche la tête.",
      "Quand vous quittez la forge, le feu d'Hildre brûle toujours derrière vous, et il brûlera, Charline en est sûre, jusqu'à ce que quelqu'un vienne le défaire.",
    ],
    choices: [{ label: "Retourner dans la cour", back: "IVT_seuil" }] },
  IVT_feu_brule: { act: "IV", title: "Le feu qui ne pardonne pas", place: "tour", with: "charline",
    fx: { item: "IVT_braise" },
    text: [
      "Quelque chose se ferme sur le visage de Charline. Elle prend une braise dans le foyer, à mains nues, et elle la regarde un long moment dans sa paume, sans se brûler. « Ils savaient, dit-elle. Corbin savait. Le registre de Ferrance, la page arrachée, ils savaient tous, et ils m'ont dit que c'était moi le danger. » Elle referme la main sur la braise. La lumière passe entre ses doigts.",
      "« Quand ce sera fini, dit-elle, je retournerai à l'Athénée. Et je leur montrerai ce qu'on peut faire avec le feu d'Hildre quand on n'a plus peur de soi. » Elle met une braise dans le pot de son père, sans le regarder, et une autre dans un petit pot qu'elle te tend. « Garde ça. On en aura besoin là-haut. »",
      "Ansgar la regarde partir vers la porte, le pot dans les bras. Il se tait. Il a l'air d'un homme qui retrouve une chose qu'il croyait perdue et qui découvre qu'elle a changé de forme. Il te regarde, toi, comme pour te demander si c'est ce que tu voulais.",
    ],
    choices: [{ label: "Retourner dans la cour", back: "IVT_seuil" }] },
  IVT_feu_pardon: { act: "IV", title: "Les mains d'Ansgar", place: "tour", with: "charline",
    fx: { item: "IVT_braise" },
    text: [
      "Charline se retourne vers son père. Elle pose le pot à braise sur l'enclume. Puis elle lui ôte ses gants, doucement, l'un après l'autre, et elle prend ses mains dans les siennes, ses pauvres mains rouges et soudées, et elle les tend vers le feu d'Hildre, tout près, plus près qu'il n'a osé les approcher d'un feu depuis douze ans.",
      "Le feu ne brûle pas. Il passe sur les mains d'Ansgar comme une eau tiède. Il ne les guérit pas : elles restent ce qu'elles sont. Mais Ansgar se met à pleurer, tout bas, à visage découvert, comme un homme qui pose enfin une chose lourde. « Je n'ai pas mal, dit-il. Je n'ai pas mal. »",
      "« Je t'ai demandé pardon pendant douze ans, dit Charline, sans te le dire. Je ne te le demande plus. Je te le donne. Et je me le donne aussi. » Elle remplit le pot de braise, et un petit pot qu'elle te tend, à toi. « Pour là-haut. » Puis elle remet les gants à son père, et elle garde sa main dans la sienne jusqu'à la porte.",
      { with: "pip", text: "Pip tourne autour d'eux deux, lentement, muet pour la première fois." },
    ],
    choices: [{ label: "Retourner dans la cour", back: "IVT_seuil" }] },

  IVT_feu_seul: { act: "IV", title: "Le vieil homme de la forge", place: "tour", without: "charline",
    fx: { meet: "ansgar", ep: ["seance", 2000] },
    text: [
      "Tu l'enveloppes dans ton manteau, tu lui frottes les bras, tu lui fais boire ce qu'il te reste d'eau-de-vie ou de bouillon. Il revient peu à peu. Il te raconte : la Forge-Mère éteinte à la Saint-Martin, le feu devenu noir, les forges de Ferrance mortes l'une après l'autre. Le premier feu d'Hildre, qui ne s'éteint pas, dit-on, sous la cendre de cette forge. Il est venu le chercher. Il n'arrive pas à l'allumer. Il te montre ses mains.",
      { if: { has: "charline:rejoint" }, text: "« Charline, dit-il ensuite. Ma fille. Elle était avec vous, à l'automne. » Il ne demande pas où elle est. Il regarde la porte, comme s'il s'attendait à ce qu'elle entre. Elle n'entre pas. « Elle l'aurait allumé, elle, dit-il. D'un claquement de doigts. »", else: "« J'ai une fille, dit-il ensuite. Charline. Elle fait du feu avec ses mains, comme Hildre. Le Cercle l'a chassée. Je ne sais pas où elle est. » Il regarde le foyer. « Elle l'aurait allumé, elle. D'un claquement de doigts. »" },
    ],
    choices: [
      { label: "Chercher le feu sous la cendre, par la magie", test: { dom: "magie", diff: -20, label: "Réveiller le feu d'Hildre", help: [{ with: "pip", v: 15 }, { if: { relic: "clou" }, v: 10 }] }, win: { fx: { ep: ["seance", 2500] }, to: "IVT_feu_seul_fin" }, lose: { to: "IVT_feu_seul_soufflet" } },
      { label: "« Laisse-moi faire, dit Pip. Je descends dans la cendre. »", who: "pip", fx: { conf: { pip: 8 }, ep: ["seance", 2500] }, to: "IVT_feu_seul_fin" },
      { label: "Remettre le grand soufflet en état et souffler sur la cendre, à la manière des forgerons", test: { dom: "savoir", diff: -10, label: "Faire marcher le soufflet d'Hildre" }, win: { fx: { ep: ["seance", 2500] }, to: "IVT_feu_seul_fin" }, lose: { to: "IVT_feu_seul_soufflet" } },
    ] },
  IVT_feu_seul_soufflet: { act: "IV", title: "Le soufflet", place: "tour", without: "charline",
    text: [
      "Rien ne prend. Tu t'acharnes une heure, deux heures, et tu ne réveilles qu'une poussière blanche qui te fait tousser. Ansgar te regarde faire en silence. Puis il se lève, et il vient à côté de toi, et il pose ses poignets sur la poignée du soufflet, au-dessus de tes mains. « Ensemble, dit-il. Toi les mains, moi le poids. C'est comme ça qu'on fait, avec un apprenti. »",
      "Vous soufflez ensemble. Longtemps. Et à la fin, sous la cendre, au fond, il y a une lueur. Une seule, petite comme un grain de blé. Ansgar la recueille dans son pot de fer, avec des gestes infiniment lents, et il souffle dessus, et elle grossit.",
    ],
    choices: [{ label: "Le regarder faire", fx: { ep: ["seance", 2000] }, to: "IVT_feu_seul_fin" }] },
  IVT_feu_seul_fin: { act: "IV", title: "La braise d'Ansgar", place: "tour", without: "charline",
    fx: { flag: "IVT:feu", item: "IVT_braise" },
    text: [
      "Le feu d'Hildre brûle de nouveau dans son foyer, d'un jaune très pur qui ne fume pas. Sur le manteau, sous la suie, d'autres lettres apparaissent, gravées sous l'inscription d'Hildre : *ET J'AI GARDÉ LE FEU POUR CELUI QUI VIENDRAIT LE DÉFAIRE.* Ansgar les lit en silence.",
      "Il remplit son pot de braises, et il en met une dans un second pot, plus petit, qu'il te tend. « Pour toi, dit-il. Tu vas plus haut que moi. » Il repartira demain matin, à pied, son pot contre la poitrine, vers Ferrance. Cinq jours. Il dit qu'il y arrivera.",
      { if: { has: "charline:rejoint" }, text: "« Si tu revois ma fille, dit-il en te serrant le bras avec son poignet, dis-lui que la Forge-Mère l'attend. Ne lui dis pas que c'est moi qui l'attends. Elle ne viendrait pas. »" },
    ],
    choices: [{ label: "Retourner dans la cour", back: "IVT_seuil" }] },
});

// ------------------------------------------------------------------ the wing of water (Ivo): Aubin's arc
Object.assign(P, {
  IVT_eau: { act: "IV", title: "L'aile de la cloche", place: "tour", backName: "le cloître d'Ivo",
    text: [
      "Derrière la porte à la cloche, un petit cloître, quatre galeries à arcades autour d'un préau. Mais le préau est un bassin. L'eau le remplit jusqu'au ras des galeries, une eau sombre, immobile, qui n'a pas gelé malgré le froid, et qui reflète les arcades avec une netteté de miroir. Au fond de la galerie nord, une niche vide, à la taille d'une petite cloche, avec un crochet de fer rouillé.",
      "Sur le rebord du bassin, gravé : *IVO. J'AI VEILLÉ POUR QU'IL NE DORME PAS.*",
      "L'eau bouge. Pas en surface : en dessous. Des formes pâles remontent lentement des profondeurs du bassin, qui est beaucoup plus profond qu'il ne devrait. Des visages. Des tonsures. Des robes de bure qui flottent. Douze. Ils s'arrêtent juste sous la surface, les yeux ouverts, et ils regardent vers la porte.",
      { with: "aubin", text: "Frère Aubin s'est arrêté au bord du bassin. Il tremble. « Gerbaud, dit-il. Benoît. Le prieur. » Il connaît chaque visage. Il dit chaque nom, à voix basse, comme on fait l'appel au chapitre. Quand il a fini, les douze visages se tournent vers lui, tous ensemble." },
      { without: "aubin", text: "Tu ne les connais pas. Mais tu reconnais leur robe : la bure de Saint-Ivo, la chapelle noyée de Morteau. Ils sont venus jusqu'ici par l'eau, ou l'eau d'ici les a toujours gardés. Ils te regardent sans hostilité, avec une patience terrible." },
    ],
    choices: [
      { label: "Laisser Aubin s'approcher d'eux", with: "aubin", to: "IVT_eau_freres" },
      { label: "T'approcher du bord", without: "aubin", to: "IVT_eau_seul" },
    ] },

  IVT_eau_freres: { act: "IV", title: "Les frères de Saint-Ivo", place: "tour", with: "aubin",
    fx: { ep: ["seance", 2000] },
    text: [
      "Aubin s'agenouille au bord du bassin. Le prieur Anthelme monte jusqu'à la surface, et sa tête la crève sans bruit, et l'eau coule de ses yeux aveugles. Il parle. Sa voix est celle de quelqu'un qui a de l'eau dans la gorge et qui n'en est pas gêné. « Frère Aubin. Tu n'étais pas là. »",
      "« Je n'étais pas là, dit Aubin. J'étais à la Perche. » Il ne baisse pas les yeux. « J'y suis allé tous les samedis pendant un an. Ce soir-là aussi. »",
      "« Nous savons, dit le prieur. Nous t'avons attendu toute la nuit, dans la nef, en chantant. Il fallait tenir. Tu sais ce qu'il faut tenir. » Les autres visages remontent, un à un, autour de lui. « Il fait froid, en bas, frère. Il fait froid depuis quatre cents ans. Quelqu'un doit y aller. Nous y sommes allés. Il manque un frère au chœur. »",
      { if: { has: "IV:ida_vue" }, text: "Aubin a encore dans les yeux la tente de la Perche, au camp, et l'enfant qui regardait tout par-dessus l'épaule d'Ida." },
      { if: { has: "ida=elle" }, text: "Aubin pense à Ivo, l'enfant, qui rit quand on lui dit : voilà *le frère*. Tu le vois y penser. Ça passe sur son visage comme une lumière sur l'eau." },
      { if: { has: "ida=dit" }, text: "Aubin pense à Ivo, l'enfant qu'il a tenu une fois, à Morteau, et à Ida qui ne veut pas le voir et qui le laisse venir quand même. Tu le vois y penser." },
      { if: { has: "ida=tu" }, text: "Toi, tu penses à Ida, à la Perche, et à l'enfant de six mois noué dans son dos. Aubin ne sait pas. Tu as promis de te taire. Tu le regardes, au bord de l'eau, en train de décider de sa vie sans savoir ce qu'elle contient." },
    ],
    choices: [
      { label: "Lui dire, maintenant, ce que tu as promis de taire à Morteau", if: { has: "ida=tu" }, why: "Tu n'as rien promis à Ida.", fx: { flag: "IVT:ida_dit", conf: { aubin: 10 }, regard: { iic_ida: "trahi" } }, to: "IVT_eau_ivo" },
      { label: "Le laisser répondre à ses frères", to: "IVT_eau_choix" },
    ] },
  IVT_eau_ivo: { act: "IV", title: "Ivo", place: "tour", with: "aubin",
    text: [
      "Tu le prends par le bras, et tu le lui dis, là, au bord du bassin, devant ses frères morts : Ida, la nuit de Morteau, l'enfant né au début de l'été. Il s'appelle Ivo. Il est au camp de Vaux, dans une tente qui porte l'enseigne de la Perche, et il rit quand on lui parle.",
      "Aubin se tait. Il se rassied sur ses talons, au bord de l'eau, et il met les mains sur ses yeux. Les douze visages le regardent. Le prieur Anthelme, sous la surface, ferme ses yeux aveugles, comme par délicatesse.",
      "« Ivo, dit Aubin enfin, à travers ses mains. Elle l'a appelé Ivo. » Il rit, un rire cassé. « Le nom du saint. Le nom de la chapelle où je n'étais pas. » Il enlève ses mains. Il a les yeux secs, maintenant, et très clairs. « Merci. Tu n'avais pas le droit. Merci. »",
    ],
    choices: [{ label: "Le laisser répondre à ses frères", to: "IVT_eau_choix" }] },
  IVT_eau_choix: { act: "IV", title: "Ce que répond Aubin", place: "tour", with: "aubin",
    text: [
      "Aubin regarde ses frères. Il regarde l'eau. Il te regarde. « Ils ont raison, dit-il. Il faut que quelqu'un tienne. Ivo, le vrai, le saint, a veillé quarante ans pour que celui d'en bas ne dorme pas, pour qu'il ne lâche pas. Mes frères ont tenu la nuit entière en chantant. Moi, je n'ai jamais rien tenu. » Il a un sourire. « Sauf un verre. »",
      { if: { any: [{ has: "ida=elle" }, { has: "ida=dit" }, { has: "IVT:ida_dit" }] }, text: "« Et il y a un enfant, dit-il, plus bas. Qui m'appellera *le frère*, un jour, si je suis là pour l'entendre. »" },
      { if: { conf: "aubin", min: 50 }, text: "« Dis-moi ce que tu en penses, toi. Je t'ai suivi{e} jusqu'ici. Je peux bien t'écouter jusqu'au bout. »", else: "« Je ne te demande pas ton avis, dit-il. Je te demande d'être là pendant que je décide. C'est déjà beaucoup. »" },
    ],
    choices: [
      { label: "« Reste prêtre. Chante pour eux, et pour ceux d'en haut qui ont besoin de toi. »", hide: { all: [{ mark: { min: 1 } }, { conf: "aubin", min: 50 }, { not: { has: "IVT:raccourci" } }] }, fx: { set: { aubin_arc: "pretre" }, flag: "IVT:eau", conf: { aubin: 10 }, fac: { ordre: 5 }, ep: ["histoire", 3000] }, to: "IVT_eau_pretre" },
      { label: "« Reste prêtre. Chante pour eux, et pour ceux d'en haut qui ont besoin de toi. »", hide: { not: { all: [{ mark: { min: 1 } }, { conf: "aubin", min: 50 }, { not: { has: "IVT:raccourci" } }] } }, fx: { set: { aubin_arc: "pretre" }, flag: ["IVT:eau", "IVT:marque_palie"], mark: -1, conf: { aubin: 10 }, fac: { ordre: 5 }, ep: ["histoire", 3000] }, to: "IVT_eau_pretre" },
      { label: "« Va-t'en vivre. L'enfant a besoin d'un père plus que tes frères d'un chantre. »", if: { any: [{ has: "ida=elle" }, { has: "ida=dit" }, { has: "IVT:ida_dit" }] }, why: "Aubin ne sait pas qu'il a quelqu'un à qui revenir.", fx: { set: { aubin_arc: "quitte" }, flag: "IVT:eau", conf: { aubin: 15 }, ep: ["histoire", 3000] }, to: "IVT_eau_quitte" },
      { label: "« Si quelqu'un doit tenir, là-haut, ce ne sera pas toi seul. Mais tu peux le promettre. »", fx: { set: { aubin_arc: "offrande" }, flag: "IVT:eau", conf: { aubin: 5 }, fear: { aubin: -5 }, ep: ["histoire", 3500] }, to: "IVT_eau_offrande" },
    ] },
  IVT_eau_pretre: { act: "IV", title: "L'office des noyés", place: "tour", with: "aubin",
    text: [
      "Aubin se relève. Il remonte ses manches. Il se tient au bord du bassin, face à ses frères, et il chante. Il chante l'office des morts de Saint-Ivo, celui qu'ils chantaient eux-mêmes la nuit où l'eau est montée, et il le chante en entier, par cœur, juste d'un bout à l'autre, de sa voix grave qui remplit le petit cloître jusqu'aux voûtes. Au verset où ils s'arrêtaient tous, il ne s'arrête pas. Il le finit.",
      "Les douze visages l'écoutent jusqu'au bout. Puis ils redescendent, lentement, l'un après l'autre, dans le noir du bassin, et le dernier à descendre est le prieur Anthelme, qui lève une main hors de l'eau et la pose une seconde sur la tête d'Aubin, comme on bénit un novice. L'eau du bassin s'éclaircit. On voit le fond : des dalles, une margelle, rien.",
      { if: { has: "IVT:marque_palie" }, text: "Ensuite, Aubin te prend la main gauche, sans demander. Il la plonge dans l'eau claire du bassin, la tienne dans la sienne, et il dit une prière que tu ne connais pas, très courte. L'eau est glacée. Quand il te lâche, la tache de ta paume a reculé, d'un doigt, et le bord en est pâle, comme une brûlure qui guérit." },
      "« Je reste, dit-il. Le dernier de Saint-Ivo. Il faut bien quelqu'un pour dire leurs noms. » Il a l'air en paix. Pas heureux. En paix.",
    ],
    choices: [{ label: "Retourner dans la cour", back: "IVT_seuil" }] },
  IVT_eau_quitte: { act: "IV", title: "La robe de bure", place: "tour", with: "aubin",
    text: [
      "Aubin regarde ses frères longtemps. Puis il défait la cordelière de sa robe, et il ôte le scapulaire, et il le plie, avec soin, comme on plie une nappe d'autel. Il s'agenouille, et il le pose sur l'eau du bassin. Le scapulaire flotte un moment, puis il s'enfonce, doucement, vers les visages.",
      "« Je ne peux pas tenir pour vous, mes frères, dit-il. Je ne l'ai jamais pu. Mais il y a quelqu'un, en bas, au camp, que je peux tenir. Il est petit. Il ne pèse presque rien. » Il se tait. « Pardonnez-moi d'avoir choisi le plus léger. »",
      "Le prieur Anthelme sourit, sous l'eau. C'est la première fois que tu vois sourire un mort. Il prend le scapulaire dans ses mains, il le serre contre lui, et il redescend, et les autres avec lui. L'eau du bassin s'éclaircit, et on voit le fond.",
      "Aubin se relève, en chemise et en chausses, une robe de bure sans scapulaire sur le dos, qui ne veut plus rien dire. Il a froid. Il rit. « Je viendrai avec toi jusqu'au bout, dit-il. Après, j'irai apprendre un métier. On a toujours besoin d'un homme qui sait recoudre. »",
    ],
    choices: [{ label: "Retourner dans la cour", back: "IVT_seuil" }] },
  IVT_eau_offrande: { act: "IV", title: "Le treizième", place: "tour", with: "aubin",
    text: [
      "Aubin se relève, et il entre dans le bassin. L'eau lui monte aux genoux, puis à la taille. Il s'arrête au milieu, parmi ses frères, et il leur parle à voix basse, et ils l'écoutent. Tu n'entends pas tout. Tu entends : « Pas maintenant. Là-haut. Quand il faudra. » Et le prieur Anthelme qui répond : « Nous t'attendrons. Nous sommes patients. »",
      "Les douze visages redescendent, et l'eau s'éclaircit autour d'Aubin, debout dans le bassin, trempé, les bras le long du corps. Il remonte sur la margelle en ruisselant. Il te regarde. « Quand on arrivera à la porte, dit-il, si quelqu'un doit rester, ce sera moi. Je ne te demande pas d'accord. Je te préviens. Je n'ai jamais tenu ma place. Je tiendrai celle-là. »",
      { with: "pip", text: "Pip vient se poser sur la tête mouillée d'Aubin, en silence, et il brille très fort, comme pour le sécher. Ou comme pour protester. Tu ne sais pas lequel des deux." },
    ],
    choices: [{ label: "Retourner dans la cour", back: "IVT_seuil" }] },

  IVT_eau_seul: { act: "IV", title: "Le bassin", place: "tour", without: "aubin",
    fx: { ep: ["seance", 2000] },
    text: [
      "Quand tu t'approches, les douze visages remontent jusqu'à la surface, et les têtes la crèvent, sans bruit. Ils te regardent tous. Le plus vieux, un moine aveugle au visage de cire, ouvre la bouche, et l'eau en coule. « Tu n'es pas de chez nous, dit-il. Il manque un frère au chœur. Tu ne peux pas le remplacer. »",
      "Puis les autres ouvrent la bouche aussi, et ils se mettent à chanter, très bas, un office que tu ne connais pas, en se rapprochant du bord, en tendant les mains hors de l'eau vers tes chevilles. Ils ne sont pas méchants. Ils sont seulement très seuls.",
    ],
    choices: [
      { label: "Te défendre", fight: { title: "Les noyés de Saint-Ivo", enemies: [{ id: "IVT_moine_noye", n: 3 }], terrain: "nature", spare: true,
        win: { fx: { ep: ["seance", 2500] }, to: "IVT_eau_seul_fin" }, lose: { fx: { pv: -6 }, to: "IVT_eau_seul_noye" }, calm: { to: "IVT_eau_seul_chant" },
        flee: { label: "Reculer dans la galerie", dom: "discretion", diff: -10, to: "IVT_eau_seul_noye" } } },
      { label: "Chanter avec eux, ce que tu sais de l'office", test: { dom: "social", diff: -20, label: "Chanter avec les noyés", help: [{ if: { arch: "barde" }, v: 15 }, { if: { arch: "pretre" }, v: 15 }, { with: "pip", v: 5 }] }, win: { to: "IVT_eau_seul_chant" }, lose: { to: "IVT_eau_seul_noye" } },
      { label: "Verser dans le bassin ta fiole d'eau claire", if: { item: "eau_claire" }, why: "Tu n'as pas d'eau claire.", fx: { drop: "eau_claire", ep: ["seance", 2000] }, to: "IVT_eau_seul_chant" },
    ] },
  IVT_eau_seul_chant: { act: "IV", title: "Le verset", place: "tour", without: "aubin",
    text: [
      "Tu chantes avec eux, ou tu fais ce que tu peux, et à un moment ils s'arrêtent tous ensemble, au même mot, comme on s'arrête au bord d'un précipice. Le silence dure. Tu comprends qu'ils attendent quelqu'un qui finisse le verset. Personne ne l'a jamais fini.",
      "Tu ne connais pas la suite. Tu dis ce qui te vient : « tenir ». Et puis, parce que ça ne suffit pas : « et lâcher, quand on peut ». Les noyés te regardent. Le vieux moine aveugle sourit, à peine. « Ce n'est pas le texte, dit-il. Mais c'est bien. » Et ils redescendent tous, lentement, dans le noir.",
    ],
    choices: [{ label: "Regarder l'eau s'éclaircir", to: "IVT_eau_seul_fin" }] },
  IVT_eau_seul_noye: { act: "IV", title: "Sous l'eau", place: "tour", without: "aubin",
    fx: { rest: true },
    text: [
      "Des mains froides se referment sur tes chevilles et te tirent. L'eau du bassin se referme sur toi. Elle est noire, glacée, et tu ne touches pas le fond, et autour de toi, dans le noir, les moines chantent toujours, et c'est presque beau. Puis quelque chose te repousse vers le haut, doucement, comme on remet un enfant dans son lit.",
      "Tu te réveilles sur les dalles de la galerie, trempé{e}, toussant de l'eau, des heures plus tard sans doute. Le bassin est calme. Les visages ont disparu. Sur ta poitrine, quelqu'un a posé une petite croix de buis, mouillée. Ils ne voulaient pas de toi. Ils voulaient quelqu'un d'autre.",
    ],
    choices: [{ label: "Te relever et regarder le bassin", to: "IVT_eau_seul_fin" }] },
  IVT_eau_seul_fin: { act: "IV", title: "Le bassin éclairci", place: "tour", without: "aubin",
    fx: { flag: "IVT:eau" },
    text: [
      "L'eau du bassin s'est éclaircie. On voit le fond, maintenant : des dalles, une margelle, et au milieu, une pierre ronde, gravée d'une cloche. Dans la galerie nord, la niche vide a l'air moins vide. Sur le rebord du bassin, sous l'inscription d'Ivo, d'autres lettres sont apparues, que l'eau cachait : *ET J'AI VEILLÉ AUSSI POUR QU'IL NE MEURE PAS SEUL.*",
      { if: { has: "aubin:rejoint" }, text: "Tu penses à Frère Aubin, qui n'est pas là. Tu te dis qu'il aurait su le verset. Tu te dis qu'il aurait peut-être préféré ne pas le savoir." },
    ],
    choices: [{ label: "Retourner dans la cour", back: "IVT_seuil" }] },
});

// ------------------------------------------------------------------ the wing of stone (Thavar): Thavary's arc
Object.assign(P, {
  IVT_pierre: { act: "IV", title: "L'aile de l'anneau", place: "tour", backName: "la salle de Thavar",
    text: [
      "Derrière la porte à l'anneau, une salle carrée, haute, nue, aux murs de grandes pierres appareillées sans mortier. Au fond, sur un socle, une statue de pierre grise, plus grande qu'un homme : un chevalier en armure ancienne, à genoux, la tête nue, la main droite tendue en avant, paume vers le haut, comme on tend la main pour recevoir quelque chose, ou pour le rendre. À l'annulaire de cette main, il n'y a rien. On voit seulement l'usure de la pierre, là où un anneau a été porté longtemps.",
      "Sur le socle : *THAVAR. J'AI TENU MA PART.*",
      "Derrière la statue, dans le mur, une porte basse, fermée d'une dalle d'un seul bloc, sans poignée ni serrure. Quand tu t'approches, la tête de pierre tourne. Lentement. Avec un bruit de meule. Les yeux sans prunelles se posent sur toi.",
      { with: "thavary", text: "Thavary s'est arrêtée au milieu de la salle. Elle regarde la statue, et la statue la regarde. Ils ont le même nez, la même mâchoire. « Mon aïeul, dit-elle, d'une voix qu'elle veut ferme. Ma grand-mère a la même gravure au-dessus de son lit. » Elle met un genou à terre, à la manière ancienne. La statue reste immobile." },
    ],
    choices: [
      { label: "Poser l'Anneau de Thavar sur la main de pierre", if: { relic: "anneau" }, why: "Tu n'as pas l'Anneau de Thavar.", fx: { ep: ["seance", 2500] }, to: "IVT_pierre_anneau" },
      { label: "Laisser Thavary s'avancer vers son aïeul", with: "thavary", to: "IVT_pierre_sang" },
      { label: "Chercher le mécanisme de la dalle", without: "thavary", test: { dom: "savoir", diff: -20, label: "Trouver comment s'ouvre la porte de Thavar", help: [{ if: { has: "maitre:maelle" }, v: 10 }, { with: "charline", v: 10 }] }, win: { fx: { ep: ["seance", 2500] }, to: "IVT_pierre_porte" }, lose: { to: "IVT_pierre_gardien" } },
      { label: "Forcer la dalle", without: "thavary", to: "IVT_pierre_gardien" },
    ] },
  IVT_pierre_anneau: { act: "IV", title: "L'anneau rendu", place: "tour",
    text: [
      "Tu glisses l'Anneau de Thavar à l'annulaire de pierre. Il y entre comme s'il n'en était jamais sorti. La statue referme les doigts dessus, lentement, et la main redescend contre la poitrine. Puis elle se rouvre. L'anneau est toujours là, dans la paume. La statue te le tend. Elle ne le garde pas.",
      "Derrière elle, la dalle glisse dans le mur, en silence.",
      { with: "thavary", text: "Thavary a regardé tout cela sans respirer. Quand tu reprends l'Anneau dans la main de pierre, elle ferme les yeux. « Il le rend, dit-elle. Il ne le garde pas. Il ne l'a jamais gardé. »" },
    ],
    choices: [
      { label: "Entrer dans la chambre de Thavar avec Thavary", with: "thavary", to: "IVT_pierre_chambre" },
      { label: "Entrer dans la chambre de Thavar", without: "thavary", to: "IVT_pierre_porte" },
    ] },
  IVT_pierre_sang: { act: "IV", title: "Le sang de Thavar", place: "tour", with: "thavary",
    text: [
      "Thavary se relève et s'avance jusqu'au socle. La statue la suit des yeux. Elle tire sa dague, se fait au gras du pouce une entaille nette, et elle pose le pouce sanglant dans la paume de pierre, au creux, là où devrait être l'anneau. « Thavary de Thavar, dit-elle. La dernière. Je viens chercher ce que tu as laissé. »",
      { if: { given: "anneau" }, text: "« L'Anneau est chez ma grand-mère, ajoute-t-elle. On le lui a rendu. Elle le garde. Je n'en ai pas besoin pour être de ta maison. »" },
      { if: { not: { any: [{ given: "anneau" }, { relic: "anneau" }] } }, text: "« L'Anneau est perdu, ajoute-t-elle, plus bas. Volé dans un défilé. Je n'ai que mon sang. Il faudra qu'il suffise. »" },
      "Un long moment, rien. Puis la main de pierre se referme, doucement, sur le pouce de Thavary, sans le serrer, comme une grande main sur une petite. Et derrière la statue, la dalle glisse dans le mur.",
    ],
    choices: [{ label: "Entrer avec elle", to: "IVT_pierre_chambre" }] },
  IVT_pierre_chambre: { act: "IV", title: "La chambre de Thavar", place: "tour", with: "thavary",
    fx: { item: "IVT_tablette", ep: ["seance", 2500] },
    text: [
      "C'est une cellule. Un lit de pierre, une table de pierre, une niche avec une lampe à huile vide. Rien d'autre. Sur la table, une tablette de plomb, couverte d'une écriture serrée, gravée au poinçon par une main qui n'avait pas l'habitude. Thavary la prend. Elle la lit à voix haute, lentement, parce que la langue est ancienne et qu'elle doit chercher les mots.",
      "*« Aldar m'a donné le Val d'Aune et ses moulins, et la vallée qui porte mon nom, pour prix de la clé. J'ai pris. J'ai fermé la chaîne de ma main. Il m'a regardé pendant que je la fermais. Il a dit : je tiendrai sans chaîne. Je l'ai cru. J'ai fermé quand même. Mes enfants auront des terres. Qu'ils sachent ce qu'elles ont coûté. »*",
      "Thavary repose la tablette. Elle se tait longtemps. Puis elle rit, d'un rire bref, affreux. « Le Val d'Aune, dit-elle. Avec ses moulins. » Elle te regarde. « C'est ce que Vendrel m'a offert. Les mêmes mots. Le même prix. Pour le même anneau. »",
      { if: { has: "thavary:aveu" }, text: "Tu le savais : elle te l'a dit cette nuit-là, à l'Isarde. Mais tu ne savais pas que le prix était si vieux. Elle non plus." },
      { if: { has: "thavary:secret" }, text: "Elle ne te l'avait jamais dit. Elle te le dit maintenant, devant la tablette de son aïeul, d'une voix plate, sans se justifier : la lettre, l'adresse convenue, le Val d'Aune contre l'Anneau. Elle ne dit pas si elle a répondu. Elle te regarde, et elle attend que tu demandes. Tu ne demandes pas." },
      { if: { conf: "thavary", min: 50 }, text: "« Je t'écoute, dit-elle enfin. Tu as été ma maison plus que cette maison-là. »", else: "« Ne me dis rien, dit-elle. Ou dis-le vite. »" },
    ],
    choices: [
      { label: "« Tiens ta part. Porte la vérité, et dis-la, à Hautecombe et partout. »", fx: { set: { thavary_arc: "honneur" }, flag: "IVT:pierre", conf: { thavary: 12 }, fac: { ordre: 5 }, ep: ["histoire", 3000] }, to: "IVT_pierre_honneur" },
      { label: "« Ceux qui ont payé ta maison avec ce mensonge paient encore. Fais-les payer. »", fx: { set: { thavary_arc: "vengeance" }, flag: "IVT:pierre", conf: { thavary: 5 }, fear: { thavary: 5 }, fac: { aldaran: -15 }, ep: ["histoire", 3000] }, to: "IVT_pierre_vengeance" },
      { label: "« Cette dette n'est pas la tienne. Pose-la. Tu es Thavary, et c'est assez. »", fx: { set: { thavary_arc: "liberee" }, flag: "IVT:pierre", conf: { thavary: 15 }, ep: ["histoire", 3500] }, to: "IVT_pierre_liberee" },
    ] },
  IVT_pierre_honneur: { act: "IV", title: "Je tiens ma part", place: "tour", with: "thavary",
    text: [
      "Thavary reprend la tablette de plomb et la glisse sous son pourpoint, contre sa poitrine, à la place où d'autres portent une relique. « Je la porterai à Hautecombe, dit-elle. Au Grand Maître. Puis à Hautmont, devant le roi, s'il vit encore, et devant la princesse. Puis à ma grand-mère. » Elle respire. « Thavar a gardé ça pour lui quatre cents ans. Moi, je vais le dire à tout le monde. C'est la seule part que je peux tenir. »",
      "Elle sort de la cellule. Devant la statue, elle s'arrête, et elle la regarde en face. « Tu aurais dû le dire, dit-elle à son aïeul. Je le dirai pour toi. Tu ne me dois rien. » La statue se tait. Mais sa main de pierre, tendue, paume vers le haut, a l'air moins lourde.",
      { if: { has: "iit:dette_thavary" }, text: "Sur le chemin du retour, elle te dit, sans te regarder : « Les gages des serviteurs. Tu les as payés pour moi, à Thavar. Je te les rendrai. Je ne l'ai jamais oublié. Maintenant je sais pourquoi ça comptait tant. »" },
    ],
    choices: [{ label: "Retourner dans la cour", back: "IVT_seuil" }] },
  IVT_pierre_vengeance: { act: "IV", title: "Le visage de Thavar", place: "tour", with: "thavary",
    text: [
      "Thavary sort de la cellule, l'épée au clair. Devant la statue, elle s'arrête, et elle frappe. Pas la main : le visage. Une fois, deux fois, trois fois, à grands coups de taille qui font jaillir des éclats et qui résonnent dans la salle comme une cloche fêlée. Quand elle s'arrête, l'épée est ébréchée, et la statue de Thavar n'a plus de visage. Seulement la main, tendue, intacte.",
      "« Aldaran a acheté ma maison pour fermer une chaîne, dit-elle, essoufflée. Et Aldaran voulait la racheter pour la rouvrir. » Elle rengaine. « Quand ce sera fini, je descendrai à Hautmont. Il y a là-bas des gens qui savent ce que vaut le Val d'Aune. Ils vont apprendre ce qu'il coûte. »",
      { if: { has: "vendrel:demasque" }, text: "Tu lui rappelles que Vendrel est mort, ou qu'on le dit. « Vendrel était un commis, dit-elle. Il y a des gens qui ont signé avant lui. Il y en aura après. »" },
      "Elle met la tablette de plomb dans ta besace, sans te demander. « Garde-la. Si je l'ai sur moi, je finirai par la jeter dans un puits. »",
    ],
    choices: [{ label: "Retourner dans la cour", back: "IVT_seuil" }] },
  IVT_pierre_liberee: { act: "IV", title: "Thavary", place: "tour", with: "thavary",
    text: [
      "Thavary reste longtemps debout dans la cellule. Puis elle défait, sur sa poitrine, la petite broche d'argent aux armes de Thavar qui tient son manteau, et elle la pose sur la table de pierre, à côté de la tablette. Elle défait aussi le ruban de couleur noué à la garde de son épée. Elle le pose avec la broche.",
      "« Thavar a fermé une chaîne pour avoir des terres, dit-elle. Mon arrière-grand-père les a perdues aux dés. Ma grand-mère les pleure. Vendrel me les a offertes. Et moi, je les ai voulues toute ma vie, sans jamais les avoir vues. » Elle secoue la tête. « Je ne les veux plus. Je ne veux plus rien de lui. Ni ses terres, ni sa honte. Je garde l'épée, parce qu'elle est bonne. »",
      "Elle sort de la cellule sans se retourner. Devant la statue, elle passe debout, du même pas. Dans la cour, elle respire, longuement, l'air glacé, comme quelqu'un qui sort d'une pièce où l'on a trop chauffé. « Thavary, dit-elle, pour elle-même, comme on essaie un nom. Thavary. » Elle a l'air de le trouver bien.",
      { with: "coliane", text: "Coliane, qui l'attendait dans la cour, lui jette une pomme sans prévenir. Thavary l'attrape. Elles se taisent. Elles n'en ont pas besoin." },
    ],
    choices: [{ label: "Retourner dans la cour", back: "IVT_seuil" }] },

  IVT_pierre_gardien: { act: "IV", title: "Le gardien de Thavar", place: "tour", without: "thavary",
    text: [
      "Quand tu poses la main sur la dalle, la statue se lève. Ce n'est pas un mouvement de pierre. C'est un mouvement d'homme, d'un homme qui a été longtemps à genoux et dont les articulations crient. Elle se dresse entre toi et la porte, plus haute que toi de deux têtes, et sa main tendue se referme en poing.",
      "« Ce que j'ai fait, dit une voix de pierre qui sort de partout et de nulle part, n'est à personne qu'à ma maison. »",
    ],
    choices: [
      { label: "Te battre", fight: { title: "Le gardien de Thavar", enemies: [{ id: "IVT_gardien_pierre", n: 1 }], terrain: "nature",
        win: { fx: { ep: ["seance", 3000] }, to: "IVT_pierre_porte" }, lose: { fx: { pv: -6 }, to: "IVT_pierre_repousse" },
        flee: { label: "Reculer jusqu'à la porte de la salle", dom: "discretion", diff: -10, to: "IVT_pierre_repousse" } } },
      { label: "Lui répondre que sa maison n'a plus personne pour garder son secret", test: { dom: "social", diff: -20, label: "Parler au gardien de Thavar", help: [{ if: { met: "thavary" }, v: 10 }, { if: { given: "anneau" }, v: 10 }] }, win: { fx: { ep: ["seance", 3000] }, to: "IVT_pierre_porte" }, lose: { to: "IVT_pierre_repousse" } },
    ] },
  IVT_pierre_repousse: { act: "IV", title: "Le gardien de Thavar", place: "tour", without: "thavary",
    text: [
      "Le poing de pierre te cueille à l'épaule et t'envoie rouler sur les dalles jusqu'au milieu de la salle. Quand tu te relèves, la statue est de nouveau à genoux sur son socle, la main tendue, la tête basse. Elle est à sa place, comme si elle y avait toujours été.",
      "Tu as l'épaule en feu, et la dalle est toujours fermée. Mais tu as remarqué, en roulant, une chose que tu n'avais pas vue debout : au pied du socle, sous la poussière, la pierre est usée en deux creux ronds, comme par des genoux. Quelqu'un est venu s'agenouiller ici, souvent, pendant longtemps.",
    ],
    choices: [
      { label: "T'agenouiller dans les deux creux, devant la statue", fx: { ep: ["seance", 2500] }, to: "IVT_pierre_porte" },
      { label: "Retourner dans la cour pour l'instant", back: "IVT_seuil" },
    ] },
  IVT_pierre_porte: { act: "IV", title: "La chambre de Thavar", place: "tour", without: "thavary",
    fx: { flag: "IVT:pierre", item: "IVT_tablette" },
    text: [
      "La dalle glisse dans le mur. Derrière, une cellule : un lit de pierre, une table de pierre, une lampe vide. Sur la table, une tablette de plomb, gravée au poinçon d'une écriture maladroite, que tu déchiffres lentement.",
      "*« Aldar m'a donné le Val d'Aune et ses moulins, et la vallée qui porte mon nom, pour prix de la clé. J'ai pris. J'ai fermé la chaîne de ma main. Il m'a regardé pendant que je la fermais. Il a dit : je tiendrai sans chaîne. Je l'ai cru. J'ai fermé quand même. Mes enfants auront des terres. Qu'ils sachent ce qu'elles ont coûté. »*",
      { if: { has: "thavary:rejoint" }, text: "Tu penses à Thavary, qui n'est pas là. Tu te demandes si tu lui montreras la tablette, et ce qu'elle en fera. Tu la ranges dans ta besace, enveloppée d'un linge, comme une chose qui pourrait se casser.", else: "Tu ranges la tablette dans ta besace, enveloppée d'un linge. Elle est lourde, pour sa taille." },
      "En sortant, tu passes devant la statue. Sa main est toujours tendue, paume vers le haut. Tu as l'impression qu'elle attend encore quelqu'un. Pas toi.",
    ],
    choices: [{ label: "Retourner dans la cour", back: "IVT_seuil" }] },
});

// ------------------------------------------------------------------ the walled wing (Aldar), flooded with mire: Gloup's arc
Object.assign(P, {
  IVT_vase: { act: "IV", title: "L'aile murée", place: "tour", backName: "la porte murée",
    text: [
      "La quatrième porte a été murée de briques, des briques plus récentes que la tour, liées d'un mortier grossier. Le pic de mineur sculpté au-dessus est à moitié effacé. Une coulée noire sort d'entre les briques, à hauteur de genou, et descend sur les dalles de la cour, lentement, jusqu'à un pas de la porte, où elle s'arrête, intimidée.",
      "Les briques sont froides. Derrière, tu entends quelque chose : un bruit très doux, régulier, mouillé. Comme beaucoup de petites respirations.",
      { with: "gloup", text: "Gloup s'est collé contre les briques, à plat, et il écoute. Il frissonne de tout son corps. Puis il se tourne vers toi, et il fait un bruit que tu n'as jamais entendu, un petit sifflement interrogatif. Il te demande la permission." },
    ],
    choices: [
      { label: "Desceller les briques, une à une", test: { dom: "combat", diff: -10, label: "Ouvrir le mur", help: [{ with: "thavary", v: 10 }, { if: { item: "pied_de_biche" }, v: 15 }] }, win: { fx: { ep: ["perso", 1000] }, to: "IVT_vase_salle" }, lose: { fx: { pv: -3, time: 3 }, to: "IVT_vase_salle" } },
      { label: "Gloup : il s'aplatit pour passer sous les briques", who: "gloup", fx: { conf: { gloup: 5 }, ep: ["perso", 1000] }, to: "IVT_vase_salle" },
      { label: "« Laisse-moi faire », dit Charline : le mortier ne résistera pas au feu", who: "charline", fx: { conf: { charline: 3 }, ep: ["perso", 1000] }, to: "IVT_vase_salle" },
    ] },
  IVT_vase_salle: { act: "IV", title: "La salle d'Aldar", place: "tour",
    fx: { clue: "v_tour" },
    text: [
      "Derrière le mur, une salle qui descend. Les dalles font place à des marches, et les marches à une rampe, et la rampe s'enfonce sous la tour, en pente douce, vers le noir. C'est une galerie de mine. Les parois portent encore les marques des pics, et le long du mur, rangés comme dans une sacristie, des outils de mineur couverts de rouille : pics, masses, coins, lampes de fer. Au-dessus de la galerie, gravé : *ALDAR. J'AI CREUSÉ.*",
      "La galerie est noyée. À vingt pas de l'entrée, la vase commence : une vase noire, épaisse, luisante, qui monte de plus en plus haut à mesure que la pente descend, et qui disparaît dans le noir. Sa surface n'est pas lisse. Elle est couverte de bulles. Des centaines de petites bulles qui gonflent, éclatent, se reforment.",
      "Sur le mur de droite, là où la vase commence, quelqu'un a gravé, plus tard, d'une autre main, plus fine, une inscription : *Ce qui pleure trop longtemps dans le noir finit par avoir des enfants.*",
      "Puis tu vois que les bulles ne sont pas des bulles. Ce sont de petites choses rondes, de la taille d'un poing ou d'une tête, faites de vase, avec deux points luisants qui pourraient être des yeux. Elles se forment dans la vase, elles roulent un peu, elles se défont, elles se reforment. Elles ne font aucun bruit, sauf ce bruit de respiration.",
    ],
    choices: [
      { label: "Regarder Gloup", with: "gloup", to: "IVT_vase_nids" },
      { label: "Descendre vers la vase", without: "gloup", to: "IVT_vase_seul" },
    ] },

  IVT_vase_nids: { act: "IV", title: "La naissance de Gloup", place: "tour", with: "gloup",
    fx: { ep: ["seance", 2500] },
    text: [
      "Gloup s'est arrêté au bord de la vase. Il ne tremble plus. Il regarde les petites choses rondes qui naissent et qui se défont, et elles le regardent aussi, toutes ensemble, avec leurs yeux luisants. Une d'elles roule jusqu'à lui. Elle le touche. Gloup fait un bruit doux, et l'autre fait le même bruit, exactement le même.",
      "Tu comprends. Il est né comme ça. Ici, ou dans un endroit comme ici, une fosse, une mare, une galerie où la souillure a dormi assez longtemps. Il est une de ces bulles, une qui ne s'est pas défaite. Qui a roulé jusqu'au Rouvre, et que des bêtes ont protégée, et que tu as trouvée.",
      "Puis la vase, au fond, se soulève. Pas une bulle : une forme. Une femme, faite de la même matière, avec des cheveux d'algue qui flottent. Elle ne te regarde pas. Elle regarde Gloup. « Mon petit, dit-elle. Te voilà revenu. » Sa voix est infiniment tendre. « Regarde tes frères. Ils n'ont pas de nom, eux. Ils n'ont pas eu ta chance. Reviens. Je te ferai grand. Tu les garderas. Personne ne te frappera plus jamais, personne ne te brûlera, et tu n'auras plus jamais froid. »",
      { if: { has: "gloup:lave" }, text: "Gloup a, sur le dos, une tache plus claire, là où on l'a lavé dans l'eau de la source du Rouvre. La femme de vase la regarde. Quelque chose passe sur son visage, qui ressemble à du dégoût, ou à du chagrin." },
      { with: "pip", text: "Pip est descendu jusqu'à Gloup. Il se pose à côté de lui, au bord de la vase, et sa lumière éclaire les petites choses rondes, qui se tournent vers elle, toutes, comme des fleurs." },
    ],
    choices: [{ label: "Attendre ce que fera Gloup", big: true, to: "IVT_vase_choix" }] },
  IVT_vase_choix: { act: "IV", title: "Ce que choisit Gloup", place: "tour", with: "gloup",
    text: [
      "Gloup se retourne vers toi. Il ne parle pas, il n'a jamais parlé. Mais il te regarde, et tu sais ce qu'il demande, parce que c'est ce qu'il demande depuis le premier jour, depuis la grotte du Rouvre : ce qu'il est. Une bête ou une tache. Un enfant de cette femme, ou autre chose.",
      { if: { conf: "gloup", min: 50 }, text: "Il fera ce que tu diras. Il l'a toujours fait. C'est peut-être pour ça qu'il faut faire attention à ce que tu vas dire.", else: "Tu n'es pas sûr{e} qu'il t'écoutera. Il regarde ses frères aussi longtemps qu'il te regarde toi." },
    ],
    choices: [
      { label: "Le laver, ici, devant elle, avec ta fiole d'eau claire", if: { item: "eau_claire" }, why: "Tu n'as pas d'eau claire.", fx: { drop: "eau_claire", set: { gloup_arc: "propre" }, flag: ["IVT:vase", "IVT:gloup_fiole"], conf: { gloup: 15 }, ep: ["histoire", 3000] }, to: "IVT_vase_propre" },
      { label: "Le laver, ici, devant elle, de ce qui reste en lui de la source du Rouvre", hide: { item: "eau_claire" }, if: { any: [{ has: "gloup:lave" }, { present: "aubin" }] }, why: "Il te faudrait de l'eau claire, ou quelqu'un qui sache bénir.", fx: { set: { gloup_arc: "propre" }, flag: "IVT:vase", conf: { gloup: 15 }, ep: ["histoire", 3000] }, to: "IVT_vase_propre" },
      { label: "« Tu es Gloup. Tu aimes le pain et les chansons. C'est tout ce que tu as besoin d'être. »", fx: { set: { gloup_arc: "lui" }, flag: "IVT:vase", conf: { gloup: 12 }, ep: ["histoire", 3000] }, to: "IVT_vase_lui" },
      { label: "« Ils n'ont personne. Si tu veux rester avec eux, je comprendrai. »", fx: { set: { gloup_arc: "eau" }, flag: "IVT:vase", conf: { gloup: 10 }, ep: ["histoire", 3000] }, to: "IVT_vase_eau" },
    ] },
  IVT_vase_propre: { act: "IV", title: "L'eau claire", place: "tour", with: "gloup",
    text: [
      { if: { has: "IVT:gloup_fiole" }, text: "Tu débouches ta fiole d'eau claire, et tu la verses sur Gloup, lentement, tout entière. Il ne recule pas. L'eau coule sur lui, et partout où elle passe, la vase noire se détache et tombe en gouttes sur les dalles.", else: "Tu n'as pas d'eau claire. Mais tu prends Gloup dans tes mains, et tu le tiens, et ce qui le lave, c'est autre chose : la prière d'Aubin s'il est là, ou ce qui reste en lui de la source du Rouvre, qui se réveille et qui monte. La vase noire se détache de lui et tombe en gouttes sur les dalles." },
      "Dessous, il y a Gloup. Le même, la même forme ronde, les mêmes yeux. Mais clair. Transparent comme une eau de source, avec une lueur pâle au milieu, et quand il bouge, on voit à travers lui les dalles de la galerie. Il se regarde. Il fait un bruit étonné.",
      "La femme de vase pousse un cri, un seul, très bref, comme quelqu'un qui se brûle. Puis elle s'enfonce dans la vase, et les petites choses rondes avec elle, et la galerie redevient silencieuse. Gloup roule jusqu'à toi, et se colle contre ta botte. Il est froid, maintenant, froid comme l'eau des montagnes. Il a l'air de trouver ça extraordinaire.",
      { if: { has: "IVT:gloup_fiole" }, text: "La fiole est vide. Tu la gardes quand même. Elle sent encore la pierre." },
    ],
    choices: [{ label: "Remonter vers la cour avec Gloup", back: "IVT_seuil" }] },
  IVT_vase_lui: { act: "IV", title: "Gloup", place: "tour", with: "gloup",
    text: [
      "Tu le dis. Tu dis son nom, et le pain, et les chansons, et la fois où il a passé le gué en éclaireur, et la fois où il a dormi dans ton manteau. Tu dis qu'il n'est ni une bête ni une tache. Qu'il est Gloup, et que ça suffit, et que personne d'autre au monde n'est Gloup.",
      "Gloup t'écoute jusqu'au bout. Puis il se retourne vers la femme de vase, et il fait un bruit. Un seul. Ce n'est pas un refus. Ce n'est pas un adieu non plus. C'est le bruit qu'il fait quand on lui donne du pain : content, et un peu surpris qu'on y ait pensé.",
      "La femme de vase le regarde longtemps. « Tu reviendras, dit-elle. Ils reviennent tous. » Elle s'enfonce dans la vase. Les petites choses rondes la suivent, sauf une, qui reste au bord, à regarder Gloup, jusqu'à ce qu'elle se défasse, elle aussi.",
      "Gloup remonte la galerie à côté de toi. Il est exactement le même qu'avant. Il roule un peu plus droit.",
    ],
    choices: [{ label: "Remonter vers la cour avec Gloup", back: "IVT_seuil" }] },
  IVT_vase_eau: { act: "IV", title: "Le retour à l'eau", place: "tour", with: "gloup",
    fx: { leave: "gloup" },
    text: [
      "Gloup te regarde longtemps. Puis il roule jusqu'à toi, et il se colle contre ta botte, très fort, comme il le faisait le premier soir. Il reste là. Tu restes immobile. Tu sens qu'il fait de petits bruits contre le cuir, des bruits que tu n'arrives pas à comprendre et que tu comprends quand même.",
      "Puis il se détache, et il roule jusqu'au bord de la vase, et il y entre. Pas d'un coup : lentement, en s'arrêtant, en se retournant une fois. Les petites choses rondes l'entourent. La femme de vase tend les bras. Mais Gloup ne va pas vers elle. Il s'arrête au milieu de ses frères, et il fait un bruit, le bruit de la chanson que tu lui as chantée à Brumefeuille, mal, et ils se taisent tous pour l'écouter.",
      "La femme de vase baisse les bras. « Tu leur apprends ses chansons, dit-elle. À lui. » Elle a l'air de ne pas comprendre. Elle s'enfonce dans le noir, seule. Gloup reste avec les autres, au bord de la lumière, à chanter. Quand tu te retournes en haut de la rampe, tu entends encore, très loin, des bulles qui éclatent en mesure.",
      { with: "pip", text: "Pip se tait jusqu'à la cour. Là, il se pose sur ton épaule, et il dit : « Il a choisi. On ne prend pas ce qui n'est pas à nous. » Sa lumière tremble. « Même quand on voudrait. »" },
    ],
    choices: [{ label: "Remonter vers la cour", back: "IVT_seuil" }] },

  IVT_vase_seul: { act: "IV", title: "Les enfants de la vase", place: "tour", without: "gloup",
    text: [
      "Tu descends la rampe jusqu'au bord de la vase. Les petites choses rondes se tournent toutes vers toi. Puis elles se mettent à rouler, ensemble, vers tes pieds, et en roulant elles grossissent, elles s'agglutinent, elles se soudent, et ce qui arrive sur toi n'a plus rien de petit : une vague de vase avec des dizaines d'yeux luisants.",
      { if: { has: "gloup=tue" }, text: "Tu penses au petit monstre de bave de la grotte du Rouvre, celui que tu as tué. Il avait les mêmes yeux." },
      { if: { met: "gloup" }, text: "Tu penses à Gloup, qui n'est pas là. Il avait les mêmes yeux." },
    ],
    choices: [
      { label: "Te battre", fight: { title: "Les enfants de la vase", enemies: [{ id: "IVT_rejeton", n: 4 }], terrain: "nature", spare: true,
        win: { fx: { ep: ["seance", 2500] }, to: "IVT_vase_seul_fin" }, lose: { fx: { pv: -6 }, to: "IVT_vase_seul_fin" }, calm: { to: "IVT_vase_seul_calme" },
        flee: { label: "Remonter la rampe en courant", dom: "discretion", diff: -10, to: "IVT_vase_seul_fin" } } },
      { label: "Brandir la braise d'Hildre", if: { item: "IVT_braise" }, why: "Tu n'as pas de feu qui leur fasse peur.", fx: { ep: ["seance", 2500] }, to: "IVT_vase_seul_braise" },
      { label: "Rester immobile, et leur parler doucement, comme à des bêtes", test: { dom: "nature", diff: -20, label: "Apaiser les enfants de la vase", help: [{ with: "pip", v: 10 }, { with: "coliane", v: 5 }] }, win: { fx: { ep: ["seance", 2500] }, to: "IVT_vase_seul_calme" }, lose: { fx: { pv: -4 }, to: "IVT_vase_seul_fin" } },
    ] },
  IVT_vase_seul_braise: { act: "IV", title: "Le feu d'Hildre", place: "tour", without: "gloup",
    text: [
      "Tu ouvres le petit pot de fer, et la braise d'Hildre brille, jaune et pure, dans le noir de la galerie. La vague de vase s'arrête net, à deux pas de toi. Les yeux clignent tous ensemble. Puis la vague se défait, recule, retombe en petites choses rondes qui roulent vers la vase en se bousculant, comme des enfants qu'on a grondés.",
      "Tu ne les poursuis pas. Tu restes là, la braise levée, jusqu'à ce que la dernière ait disparu sous la surface. Puis tu refermes le pot, et la galerie redevient noire, et tu entends de nouveau, très doux, le bruit de respiration.",
    ],
    choices: [{ label: "Remonter la rampe", to: "IVT_vase_seul_fin" }] },
  IVT_vase_seul_calme: { act: "IV", title: "Les enfants de la vase", place: "tour", without: "gloup",
    text: [
      "Tu restes immobile. Tu parles. Tu dis ce qui vient : des mots de berger, des mots qu'on dit aux chevaux qui ont peur. La vague ralentit. Elle s'arrête à tes pieds. Les yeux te regardent, de tout près. Puis la vague se défait, doucement, en petites choses rondes qui roulent autour de tes bottes, qui te reniflent, et qui s'en retournent vers la vase.",
      "Une seule reste un moment, contre ta cheville. Elle fait un petit bruit mouillé. Puis elle s'en va aussi. Tu as l'impression qu'elle t'a demandé quelque chose, et que tu n'as pas su répondre.",
    ],
    choices: [{ label: "Remonter la rampe", to: "IVT_vase_seul_fin" }] },
  IVT_vase_seul_fin: { act: "IV", title: "La galerie d'Aldar", place: "tour", without: "gloup",
    fx: { flag: "IVT:vase" },
    text: [
      { outcome: "lose", text: "La vase t'a roulé{e}, renversé{e}, recouvert{e}, et tu en es sorti{e} à quatre pattes, sans savoir comment, en crachant une eau noire qui avait un goût de feuilles pourries. Tu as perdu une botte. Tu as gardé ta vie." },
      "En haut de la rampe, tu te retournes. La vase a repris sa place, ses bulles, sa respiration. Rien n'a changé. Tu sais maintenant ce qu'Aldar a creusé, et ce qui en est sorti, et pourquoi on a muré la porte au lieu de la garder.",
      "Sur le linteau, de l'intérieur, sous *ALDAR. J'AI CREUSÉ.*, il y a une autre ligne, gravée plus tard, plus profondément, d'une main en colère : *ET J'AI MURÉ.*",
    ],
    choices: [{ label: "Retourner dans la cour", back: "IVT_seuil" }] },
});

// ------------------------------------------------------------------ the central room
Object.assign(P, {
  IVT_centre: { act: "IV", title: "La salle sans porte", place: "tour", backName: "la salle du centre",
    fx: { clue: "m_tour", flag: "IV:tour", ep: ["histoire", 5000] },
    text: [
      { if: { has: "IVT:raccourci" }, text: "Tu poses la main sur le mur, et les lignes grises qui courent dans la pierre se rejoignent sous ta paume tachée. Le mur s'ouvre comme une plaie : une fente, de la largeur d'un homme, aux bords humides. Il en sort un air froid qui sent la vase.", else: "Tu poses la main sur le mur, sur la sixième main de pierre, là où convergent les lignes de lumière. Elles s'allument toutes ensemble, dorées, et la pierre s'écarte en silence, de part et d'autre de la sixième main, juste assez pour laisser passer quelqu'un." },
      "Derrière, une salle ronde, sous une coupole basse, sans fenêtre. Pas d'autre porte que celle que tu viens d'ouvrir, et qui n'en était pas une. La lumière vient de la coupole elle-même, une pierre pâle qui luit faiblement, comme la neige la nuit. Au milieu, une table ronde de pierre, et autour, six chaises de pierre.",
      "Cinq chaises sont hautes, larges, sculptées. Sur leurs dossiers, un nom gravé : ALDAR, ORINE, THAVAR, HILDRE, IVO. La sixième est plus petite, plus simple, et elle a été reculée de la table d'un pas, comme pour un enfant qu'on n'invite pas tout à fait. Son dossier n'a pas de nom. Ses accoudoirs portent chacun un anneau de fer scellé dans la pierre, et sur la table, devant elle, il n'y a rien, alors que devant chacune des cinq autres, il y a une coupe de pierre.",
      "Tu comprends, en regardant la salle, comment la tour est faite. Une aile pour Hildre et son feu, une pour Ivo et son eau, une pour Thavar et sa pierre, une pour Aldar et sa mine. Quatre ailes, quatre fondateurs. Orine n'a pas d'aile ; elle a la première chaise à la table, en face de la sixième. Et au centre, cette salle où l'on n'entre pas.",
      { with: "pip", text: "Pip traverse la salle sans s'arrêter, droit vers la sixième chaise, et il se pose au creux du siège. Il y reste. Sa lumière devient très calme, très douce. « Il fait chaud, ici, dit-il, étonné. Quelqu'un a été assis là longtemps. » Il ne bouge plus." },
      { with: "thavary", text: "Thavary s'est arrêtée derrière la chaise de Thavar. Elle ne la touche pas." },
      { with: "charline", text: "Charline regarde la chaise d'Hildre, puis la sixième, puis de nouveau celle d'Hildre. « Elle a forgé les anneaux », dit-elle. Ce n'est pas une question." },
      { with: "aubin", text: "Frère Aubin a fait le signe de la main ouverte en entrant, par habitude. Puis il regarde la sixième chaise, et il refait le signe, plus lentement, autrement, sans que tu saches ce qu'il a changé." },
      { with: "coliane", text: "Coliane reste sur le seuil. « Je n'aime pas les salles sans porte, dit-elle. On ne sait jamais qui a fermé. »" },
    ],
    choices: [
      { label: "T'asseoir sur la sixième chaise", to: "IVT_centre_chaise" },
      { label: "Regarder de près la table de pierre", hide: { seen: "IVT_centre_table" }, to: "IVT_centre_table" },
      { label: "Sortir de la salle", big: true, to: "IVT_centre_sortie" },
    ] },
  IVT_centre_table: { act: "IV", title: "La table de pierre", place: "tour",
    fx: { ep: ["seance", 1500] },
    text: [
      "La table est d'un seul bloc de pierre grise, polie par le temps, ou par des mains. Au milieu, gravée en creux, une carte : la vallée de la Sorbe, les deux couronnes, le massif de la Fenne, et sous le glacier, un cercle, et dans le cercle, une porte. Six traits partent de la porte, vers les six chaises. Cinq sont gravés profond. Le sixième, celui qui va vers la chaise sans nom, est à peine marqué, comme si on l'avait commencé et qu'on avait renoncé.",
      "Devant chaque chaise des fondateurs, dans la coupe de pierre, il reste un fond de quelque chose qui a séché il y a très longtemps : une poussière brune. Du vin, peut-être. Ils ont bu, ici, ensemble. Ils ont trinqué. Devant la sixième, pas de coupe.",
      { if: { relics: { min: 2 } }, text: "Tes reliques, dans ta besace, sont devenues lourdes. Pas plus lourdes : plus présentes. Tu sens la forme de chacune contre ton flanc, comme si elles s'étaient tournées vers la carte." },
    ],
    choices: [{ back: "IVT_centre" }] },
  IVT_centre_chaise: { act: "IV", title: "La sixième chaise", place: "tour",
    fx: { ep: ["seance", 2500] },
    text: [
      { if: { seen: "IV_route_adieu_tour" }, text: "*Ne t'assieds pas à la table.* Tu entends la voix de ta maîtresse, dans la grange de Merle, qui ne savait plus pourquoi elle le disait. Tu t'assieds quand même." },
      "La pierre est tiède. Tu poses les bras sur les accoudoirs, et les anneaux de fer sont froids sous tes poignets. Et pendant un instant, un seul, la salle n'est plus vide.",
      "Ils sont là. Cinq, autour de la table, jeunes, très jeunes, des visages fatigués, des habits de voyage déchirés, du sang séché sur une manche. Une femme aux bras de forgeron qui ne regarde personne. Un homme en armure qui tourne et retourne un anneau sur son doigt. Une femme aux cheveux tirés, une plume à la main, qui écrit. Un homme aux mains de mineur, qui parle fort. Un moine maigre, qui se tait. Et ils te regardent, toi, assis{e} sur la sixième chaise, avec une expression que tu mets longtemps à comprendre, parce que tu ne l'attendais pas sur ces visages-là : la peur.",
      "« Tu tiendras ? » demande l'homme à l'anneau. Ce n'est pas ta voix qui répond. C'est une voix jeune, douce, que tu entends sortir de ta bouche : « Je tiendrai. Sans chaîne, s'il le faut. » Et la femme forgeronne pose sur la table, devant toi, deux anneaux de fer encore chauds.",
      "Puis la salle est vide. Les anneaux des accoudoirs sont froids. Tu as les poignets rouges, comme si tu les avais frottés longtemps contre quelque chose.",
      { with: "pip", text: "Pip, qui s'était posé sur le siège avant toi, est sur ton genou, maintenant. Il tremble. « J'ai rêvé, dit-il. Pendant que tu étais assis{e}. J'ai rêvé que j'étais dans une main. Une main qui avait chaud. » Il se tait. « Je ne sais pas à qui elle était. »" },
      { if: { mark: { min: 3 } }, text: "Et, pendant un instant encore, après les autres, tu as vu une femme debout derrière la sixième chaise. Faite de vase. Elle avait posé ses deux mains sur le dossier, de chaque côté de ta tête, et elle regardait les cinq avec une haine si ancienne qu'elle en était devenue tranquille." },
    ],
    choices: [{ label: "Te lever", back: "IVT_centre" }] },
  IVT_centre_sortie: { act: "IV", title: "Le soir sur la tour", place: "tour", takes: "evening",
    text: [
      "Quand tu ressors dans la cour, le soir est tombé. La vasque est noire, les portes des ailes ouvertes, ou murées, ou fermées, selon ce que tu y as laissé. Le mur aux six mains s'est refermé derrière toi, mais une ligne de lumière reste dans la pierre, très fine, autour de la sixième main, comme le contour d'une porte qu'on pourrait rouvrir.",
      "Vous passez la nuit dans la cour, autour d'un feu de mélèze. Personne ne dort beaucoup.",
      { with: "charline", if: { is: { charline_arc: "forge" } }, text: "Charline a posé le pot à braise de son père contre son ventre, sous son manteau. Elle dort un peu, assise, et le pot la réchauffe." },
      { with: "charline", if: { is: { charline_arc: "brule" } }, text: "Charline ne dort pas. Elle regarde la braise d'Hildre dans sa paume ouverte, et la braise ne la brûle pas." },
      { with: "charline", if: { is: { charline_arc: "pardon" } }, text: "Ansgar dort contre l'épaule de sa fille. Charline reste immobile toute la nuit, pour protéger son sommeil." },
      { with: "aubin", if: { is: { aubin_arc: "pretre" } }, text: "Frère Aubin dit complies, à mi-voix, pour vous tous, et pour douze autres qui ne sont pas là." },
      { with: ["aubin", "coliane"], if: { is: { aubin_arc: "quitte" } }, text: "Aubin, en chemise sous sa bure défaite, demande à Coliane si elle saurait lui apprendre à tailler un sifflet dans une branche. Pour un enfant. Il n'en dit pas plus." },
      { with: "aubin", if: { is: { aubin_arc: "offrande" } }, text: "Aubin regarde le glacier, au-dessus de la tour, toute la soirée. Il a l'air d'un homme qui mesure une distance." },
      { with: "thavary", if: { is: { thavary_arc: "honneur" } }, text: "Thavary a la main posée sur sa poitrine, sur la tablette de plomb, sous son pourpoint. Elle dort comme une sentinelle, assise, l'épée en travers des genoux." },
      { with: "thavary", if: { is: { thavary_arc: "vengeance" } }, text: "Thavary affûte la brèche de son épée, à petits coups, longtemps. Le bruit de la pierre sur le fer tient tout le monde éveillé. Personne ne lui demande d'arrêter." },
      { with: "thavary", if: { is: { thavary_arc: "liberee" } }, text: "Thavary dort. Vraiment, profondément, sur le dos, les bras ouverts, comme tu ne l'as jamais vue dormir. Elle ronfle un peu. Personne ne le lui dira." },
      { with: "gloup", if: { is: { gloup_arc: "propre" } }, text: "Gloup s'est installé tout près du feu. Plus près qu'il ne l'a jamais osé. Il regarde les flammes à travers lui-même, fasciné." },
      { with: "gloup", if: { is: { gloup_arc: "lui" } }, text: "Gloup s'est roulé dans ton manteau, comme d'habitude, et il fait ses petits bruits de bulles. Comme d'habitude. Tu n'as jamais trouvé ce bruit aussi beau." },
      { if: { is: { gloup_arc: "eau" } }, text: "Il manque quelque chose contre ta botte. Tu ne t'y fais pas. Vers minuit, il te semble entendre, sous la cour, très loin, une chanson faite de bulles. Tu tends l'oreille. Elle s'arrête." },
      { if: { has: "IVT:raccourci" }, text: "Personne ne parle de la vasque. Personne ne parle des ailes fermées. Tu sais qu'ils y pensent, chacun à la sienne." },
    ],
    choices: [{ label: "Au matin, retourner dans la cour", back: "IVT_seuil" }] },
  IVT_centre_retour: { act: "IV", title: "La salle sans porte", place: "tour",
    text: [
      "La sixième main s'écarte de nouveau sous ta paume. La salle ronde, la coupole pâle, la table, les six chaises. Rien n'a bougé. La sixième chaise est toujours reculée d'un pas, et les anneaux de ses accoudoirs sont toujours froids.",
      "Tu restes un moment sur le seuil. Tu ne t'assieds pas.",
    ],
    choices: [{ back: "IVT_seuil" }] },
});

// ------------------------------------------------------------------ fireside talks at the camp (banter)
Object.assign(P, {
  IV_feu_pip: { act: "IV", title: "Au feu du camp, avec Pip", place: "vaux", banter: true, with: "pip",
    text: [
      "Le soir, au feu, Pip ne tourne pas autour des flammes comme d'habitude. Il s'est posé sur une pierre, en face de toi, et il regarde la montagne, la tour là-haut, le glacier plus haut encore. « Tout le monde ici vient de quelque part, dit-il. Ils ont tous un village. Ils en parlent tout le temps. » Il se tait. « Moi, je viens d'une main. Une main de pierre, sous un château. Avant, je ne sais pas. »",
      "« Quelquefois, la nuit, dit-il encore, j'ai chaud. Pas froid : chaud. Comme si on me tenait. Et puis je me réveille, et c'est toi qui dors à côté. » Il te regarde. « Ce n'est pas toi qui me tenais. Je le saurais. »",
    ],
    choices: [
      { label: "« On trouvera à qui était cette main. »", fx: { conf: { pip: 8 } }, to: "@ret" },
      { label: "« Ça n'a pas d'importance. Tu es avec nous, maintenant. »", fx: { conf: { pip: 3 } }, to: "@ret" },
      { label: "Lui tendre la main, pour qu'il s'y pose", fx: { conf: { pip: 6 } }, to: "@ret" },
    ] },
  IV_feu_charline_gloup: { act: "IV", title: "Le feu qui ne brûle pas", place: "vaux", banter: true, with: ["charline", "gloup"],
    text: [
      "Gloup se tient toujours de l'autre côté du feu, le plus loin possible, depuis le premier jour. Ce soir, Charline le regarde faire, longtemps. Puis elle prend une flamme dans le feu, comme on prend une fleur, et la garde au creux de sa main. Elle la rend toute petite, bleue, presque froide. Elle la pose sur une pierre plate, à mi-chemin entre Gloup et elle.",
      "« Elle ne mord pas, dit-elle. Je te le promets. Moi non plus. » Gloup regarde la petite flamme. Il avance d'un pouce. Puis d'un autre. Au bout d'un moment, il est tout près, et la flamme bleue se reflète dans ses yeux noirs, et il fait un petit bruit étonné.",
    ],
    choices: [
      { label: "Les laisser faire, en silence", fx: { conf: { charline: 5, gloup: 5 } }, to: "@ret" },
      { label: "Dire à Charline que c'est la plus belle chose que tu lui aies vu faire", fx: { conf: { charline: 8 } }, to: "@ret" },
    ] },
  IV_feu_aubin_thavary: { act: "IV", title: "L'honneur et la miséricorde", place: "vaux", banter: true, with: ["aubin", "thavary"],
    text: [
      "Thavary et Frère Aubin se disputent, à mi-voix, de l'autre côté du feu. Ça a commencé à propos d'un voleur qu'on a fouetté à la barrière ce matin. Thavary dit que Garance a bien fait : un camp sans règle, c'est un camp mort. Aubin dit que le voleur avait volé du pain pour sa mère, et qu'on ne fouette pas la faim.",
      "« La miséricorde, dit Thavary, c'est ce que les riches appellent la faiblesse des autres. — Et l'honneur, répond Aubin, c'est ce que les pauvres appellent la fierté des riches. » Ils se regardent. Puis Thavary éclate de rire, d'un rire franc que tu ne lui connaissais pas. « Vous êtes impossible, mon frère. » Ils se tournent vers toi, tous les deux.",
    ],
    choices: [
      { label: "Donner raison à Thavary", fx: { conf: { thavary: 6, aubin: -2 } }, to: "@ret" },
      { label: "Donner raison à Aubin", fx: { conf: { aubin: 6, thavary: -2 } }, to: "@ret" },
      { label: "Leur dire qu'ils ont raison tous les deux, et aller porter du pain à la mère du voleur", fx: { conf: { aubin: 4, thavary: 4, pip: 4 }, food: -1 }, to: "@ret" },
    ] },
});

// ------------------------------------------------------------------ extras
var extras = {
  routes: [
    { id: "r_vaux", name: "La route de la Sorbe pourrie", from: "merle", to: "vaux", steps: 5, region: "souillee", twoWay: false,
      label: "Remonter la Sorbe vers la Fenne et le camp de Vaux-Saint-Pierre", if: { has: "acte:IV" }, why: "Tu n'as pas fini ce que tu avais à faire sur l'Isarde.",
      legs: [
        { step: 1, passage: "IV_r_champs", if: { not: { seen: "IV_r_champs" } } },
        { step: 2, passage: "IV_r_colonne", if: { not: { seen: "IV_r_colonne" } } },
        { step: 3, passage: "IV_r_bru", if: { not: { seen: "IV_r_bru" } } },
        { step: 4, passage: "IV_r_bac", if: { not: { seen: "IV_r_bac" } } },
        { step: 5, passage: "IV_r_fenne", if: { not: { seen: "IV_r_fenne" } } },
      ] },
    { id: "r_tour", name: "Le chemin des bergers", from: "vaux", to: "tour", steps: 2, region: "souillee",
      label: "Monter à la tour d'Hildre par le chemin des bergers", labelBack: "Redescendre au camp de Vaux-Saint-Pierre",
      legs: [
        { step: 1, passage: "IVT_r_melezes", if: { not: { seen: "IVT_r_melezes" } } },
        { step: 2, passage: "IVT_r_pont", if: { not: { seen: "IVT_r_pont" } } },
      ] },
  ],
  regions: {
    souillee: { name: "La terre souillée", ambiance: "champs", chance: 0.5, repeatChance: 0.4,
      events: ["EIV_puits", "EIV_betes", "EIV_deserteurs", "EIV_penitents", "EIV_flaque", "EIV_enfant", "EIV_nuit"],
      quiet: [
        "La route longe des champs gris où rien n'a poussé. Les corbeaux eux-mêmes ont quitté le pays. On n'entend que le vent, et le bruit de tes pas, et de temps en temps, très loin, un chien qui aboie dans une ferme vide.",
        "Une pluie fine se met à tomber, et tu regardes les gouttes sur ta manche, longtemps, pour t'assurer qu'elles sont claires. Elles le sont. Tu marches quand même plus vite.",
        "Le long d'un fossé, des saules morts, noirs et luisants, comme passés au goudron. Sous l'un d'eux, quelqu'un a laissé une paire de bottes, bien rangées, la pointe vers l'eau. Tu ne t'arrêtes pas.",
        "Tu croises une charrette qui redescend, vide, conduite par un homme seul qui a l'air de ne pas savoir pourquoi il redescend. Vous vous saluez de la tête. Ni l'un ni l'autre ne parle.",
      ],
      camp: [
        "Tu campes dans une grange ouverte, au milieu d'un champ gris. Le foin est sec. Tu dors mal : toute la nuit, tu entends, quelque part sous le plancher, un goutte-à-goutte qui ne s'arrête pas.",
        "Tu fais ton feu au pied d'un rocher, loin de toute eau. La montagne est toute proche, maintenant, et au-dessus, le glacier garde une lueur pâle longtemps après le coucher du soleil.",
        "Tu dors dans une chapelle de carrefour, une petite chambre de pierre avec cinq mains peintes au mur et un banc. Quelqu'un a laissé des chandelles. Tu en allumes une. Tu en laisses deux.",
      ] },
  },
  events: {
    EIV_puits: { passage: "EIV_puits", weight: 2 },
    EIV_betes: { passage: "EIV_betes", weight: 2 },
    EIV_deserteurs: { passage: "EIV_deserteurs", weight: 2 },
    EIV_penitents: { passage: "EIV_penitents", weight: 1 },
    EIV_flaque: { passage: "EIV_flaque", weight: 1 },
    EIV_enfant: { passage: "EIV_enfant", weight: 1 },
    EIV_nuit: { passage: "EIV_nuit", weight: 2 },
  },
  people: {
    IV_garance: { name: "Garance", f: true, face: { age: "mur", coif: "foulard", skin: "hale" }, desc: "Une tonnelière de Saulce, veuve, qui tient le camp de Vaux-Saint-Pierre avec un cahier de comptes et beaucoup de registres. Elle dit qu'elle ne commande rien : elle compte." },
    IV_fulcran: { name: "Fulcran", f: false, face: { age: "adulte", hair: "roux", beard: "barbe" }, desc: "Le maître des charretiers de Ferrance au camp de Vaux. Une voix de forge, une vingtaine de bœufs, et un sens des affaires qui n'exclut pas tout à fait le cœur." },
  },
  items: {
    IVT_braise: { name: "La braise d'Hildre", kind: "quete", keep: true, desc: "Une braise du premier feu d'Hildre, dans un petit pot de fer tapissé de cendre. Elle ne s'éteint pas, et elle ne brûle pas qui la porte." },
    IVT_tablette: { name: "La tablette de Thavar", kind: "document", keep: true, desc: "Une tablette de plomb, gravée au poinçon d'une écriture maladroite, trouvée dans la chambre de Thavar à la tour d'Hildre.",
      text: "« Aldar m'a donné le Val d'Aune et ses moulins, et la vallée qui porte mon nom, pour prix de la clé. J'ai pris. J'ai fermé la chaîne de ma main. Il m'a regardé pendant que je la fermais. Il a dit : je tiendrai sans chaîne. Je l'ai cru. J'ai fermé quand même. Mes enfants auront des terres. Qu'ils sachent ce qu'elles ont coûté. »" },
  },
  enemies: {
    IV_deserteur: { name: "Déserteur", look: "humain", pv: 44, att: 80, def: 28, dmg: 8, desc: "Un soldat de l'Isarde qui n'a plus de maître, plus de solde, et plus beaucoup de raisons de ne pas prendre ce qu'il trouve." },
    IV_cure_vase: { name: "Le gardien des dîmes", look: "ombre", pv: 140, att: 92, def: 30, dmg: 10, desc: "Ce que la vase a fait du curé de Vaux, sous son église : une forme en soutane qui garde encore ce qu'on lui avait confié." },
    IVT_moine_noye: { name: "Moine noyé de Saint-Ivo", look: "humain", pv: 46, att: 82, def: 28, dmg: 8, desc: "Un frère de Saint-Ivo, la robe de bure pleine d'eau, qui chante encore l'office de la nuit où le lac est monté." },
    IVT_gardien_pierre: { name: "Le gardien de Thavar", look: "humain", pv: 160, att: 95, def: 38, dmg: 11, desc: "La statue de Thavar le Fidèle, debout. Elle garde ce que sa maison n'a jamais voulu dire." },
    IVT_rejeton: { name: "Enfant de la vase", look: "ombre", pv: 30, att: 78, def: 24, dmg: 7, flank: true, desc: "Une petite chose ronde faite de souillure, avec deux yeux luisants. Seule, elle ne ferait de mal à personne. Elles ne sont jamais seules." },
  },
  quests: [
    { id: "IV_anselme", act: "IV", kind: "annexe", title: "Les fioles d'Anselme", start: "IV_anselme", echo: ["anselme=denonce", "anselme=source", "anselme=associe"] },
    { id: "IV_saintgilles", act: "IV", kind: "annexe", title: "Un toit pour ceux de Saint-Gilles", start: "IV_sg", echo: ["saintgilles=partage", "saintgilles=achete", "saintgilles=cave", "saintgilles=charretiers"] },
  ],
  banter: [
    { id: "IV_feu_pip", if: { all: [{ present: "pip" }, { place: "vaux" }, { seen: "IV_garance" }] } },
    { id: "IV_feu_charline_gloup", if: { all: [{ present: "charline" }, { present: "gloup" }, { place: "vaux" }] } },
    { id: "IV_feu_aubin_thavary", if: { all: [{ present: "aubin" }, { present: "thavary" }, { place: "vaux" }] } },
  ],
};

module.exports = { passages: P, extras: extras };
