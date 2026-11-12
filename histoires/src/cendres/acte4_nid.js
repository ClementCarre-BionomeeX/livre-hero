// Act IV · "Le Nid", an adventure inside the adventure, opened from the moutier: under the cirque of the Moissons, in
// the galleries where the Glaneurs who stayed behind after the Rupture have made their nest. A hub of four galleries
// (the cradles, the larder of names, the ice bridge, the bottom), and the old Glaneuse at the bottom, whom Gaspard can
// speak to. The child leads ("tu").
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var GASPARD = { present: "gaspard" };
module.exports = {
  IV_N_entree: P({ title: "Les enfants du moutier", place: "moutier",
    fx: { questSeen: "IV_Q_nid" },
    text: [
      "Frère Odon t'arrête sous les arcades. Il a l'air d'un homme qui a hésité trois jours avant de parler.",
      "« Les enfants des réfugiés, dit-il. Ceux qui vont jouer en haut du cirque. Trois sont revenus, cette semaine, sans savoir leur nom. Pas malades. Pas tristes. Ils jouent, ils mangent, ils dorment. Ils ne savent plus comment ils s'appellent. » Il baisse la voix. « Il y a une crevasse, sous le cirque des Moissons. Elle souffle du froid, l'été. Les bergers disent que les Glaneurs qui n'ont pas pu repasser le col, l'an dernier, sont descendus là-dedans. Qu'ils ont fait leur nid. »",
      { with: "gaspard", text: "Gaspard est devenu très calme. « C'est vrai, dit-il. Je le sens d'ici. Ça sent le pain rassis. C'est l'odeur qu'on a, quand on n'a plus rien mangé de vrai depuis longtemps. »" },
    ],
    choices: [
      { label: "Monter au cirque et descendre dans la crevasse", to: "IV_N_descente" },
      { label: "« Plus tard. »", to: "IV_moutier" },
    ] }),
  IV_N_descente: P({ title: "La crevasse", place: "moutier",
    text: [
      "La crevasse s'ouvre au fond du cirque, sous un surplomb de glace bleue. Un souffle en sort, régulier, glacé, comme une respiration. Elle descend à pic sur trente toises, puis on ne voit plus rien.",
      "Il faudra descendre à la corde, sur la glace, dans le noir.",
    ],
    choices: [{ label: "Descendre", test: { dom: "nature", label: "La crevasse", help: [{ if: { item: "corde" }, v: 20 }, { if: { present: "corbe" }, v: 10 }, { if: { present: "ysolde" }, v: 5 }] },
      win: { fx: { ep: ["seance", 800] }, to: "IV_N_galeries" }, lose: { fx: { pv: -4 }, to: "IV_N_chute" } }] }),
  IV_N_chute: P({ title: "La glissade", place: "moutier",
    text: ["La corde file. Tu glisses les dix dernières toises sur la glace, sur le dos, sans rien pour te retenir, et tu arrives au fond dans un tas de neige poudreuse qui t'avale jusqu'au cou. Tu as mal partout. Au-dessus, la lumière du jour n'est plus qu'un trait."],
    choices: [{ label: "Te relever", to: "IV_N_galeries" }] }),

  IV_N_galeries: P({ title: "Le Nid", place: "moutier", hub: true,
    text: [
      { first: true, text: "Le fond de la crevasse ouvre sur des galeries. Pas des grottes : des couloirs, réguliers, ronds, creusés dans la glace par quelque chose qui a pris son temps. Les parois sont lisses comme du verre. Il y a de la lumière, une lumière pâle, qui vient de la glace elle-même, de choses prises dedans." },
      "Cinq galeries partent de la salle où tu te tiens. De l'une monte un bruit de grattement, comme des petites griffes. Une autre sent la cire et l'écorce. Une troisième s'ouvre sur du vide, et un pont. La quatrième descend, et souffle le froid. De la cinquième, très basse, viennent des voix.",
    ],
    choices: [
      { label: "La galerie qui gratte", hide: { seen: "IV_N_berceaux" }, to: "IV_N_berceaux" },
      { label: "La galerie qui sent la cire", hide: { seen: "IV_N_reserve" }, to: "IV_N_reserve" },
      { label: "Le pont sur le vide", hide: { seen: "IV_N_pont" }, to: "IV_N_pont" },
      { label: "Une galerie basse, d'où viennent des voix", hide: { seen: "IV_N_echos" }, to: "IV_N_echos" },
      { label: "Descendre vers le froid", if: { any: [{ seen: "IV_N_berceaux" }, { seen: "IV_N_reserve" }] }, why: "Tu veux d'abord comprendre ce qu'est cet endroit.", to: "IV_N_fond", big: true },
      { label: "Remonter à la corde", to: "IV_N_remonter" },
    ] }),

  IV_N_berceaux: P({ title: "Les berceaux", place: "moutier",
    text: [
      "Une salle basse, ronde, et par terre, des choses. Une cuillère. Un gant d'enfant. Une toupie. Un dé. Un sabot. Des choses perdues, des centaines, couvertes d'une fine couche de givre, et sous le givre, elles bougent.",
      "Tu t'approches. Le gant d'enfant a des pattes. Pas encore tout à fait : quatre bosses, sous la laine, qui poussent. Le dé a un museau. La toupie s'est allongée et tourne lentement sur elle-même, et elle a deux yeux de neige.",
      "C'est ainsi qu'ils naissent. D'une chose oubliée, qui a attendu assez longtemps qu'on vienne la chercher, et que personne n'est venu chercher.",
      { with: "gaspard", text: "Gaspard regarde longtemps une pelle à four, dans un coin, à moitié changée. Il ne dit rien. Il la ramasse, et il la serre contre lui, et la pelle cesse de bouger." },
    ],
    choices: [
      { label: "Les écraser avant qu'ils éclosent", to: "IV_N_berceaux_combat" },
      { label: "Les ramasser, un par un, et les remonter au jour", fx: { flag: "iv:nid_berceaux=sauves", ep: ["perso", 1500] }, to: "IV_N_berceaux_sac" },
    ] }),
  IV_N_berceaux_combat: P({ title: "L'éclosion",
    combat: { title: "Les nouveau-nés", enemies: ["glaneur_petit", "glaneur_petit", "glaneur_petit"], terrain: "nature", range: "contact",
      flee: { dom: "nature", label: "Ressortir à reculons", to: "IV_N_galeries" },
      win: { fx: { flag: "iv:nid_berceaux=ecrases", ep: ["seance", 1200] }, to: "IV_N_berceaux_fin" }, lose: { fx: { pv: -3 }, to: "IV_N_galeries" } },
    text: ["Au premier sabot que tu écrases, les autres éclosent d'un coup, tous ensemble, comme une couvée qu'on dérange. Ils sont petits, maladroits, affamés. Ils ont faim de toi."],
    choices: [] }),
  IV_N_berceaux_fin: P({ title: "Le givre", place: "moutier",
    text: ["Quand c'est fini, il ne reste par terre que des choses ordinaires, cassées, mouillées. Une cuillère tordue. Un gant déchiré. Elles ne bougent plus. Tu ne sais pas si tu as tué quelque chose, ou seulement empêché quelque chose de naître. Tu ne sais pas s'il y a une différence."],
    choices: [{ back: "IV_N_galeries" }] }),
  IV_N_berceaux_sac: P({ title: "Le sac", place: "moutier",
    text: [
      "Ça prend longtemps. Tu les mets dans ton sac, dans tes poches, dans ta chemise. Au contact de ta main chaude, le givre fond, et ils redeviennent des choses : une cuillère, un gant, un dé. Ils ont l'air soulagés, si une cuillère peut avoir l'air de quelque chose.",
      "Tu les déposeras au moutier, sur la table du réfectoire. Frère Odon les exposera, sous le cloître, avec un écriteau : OBJETS TROUVÉS. Personne ne viendra les chercher. Mais quelqu'un, un jour, reconnaîtra peut-être un gant.",
    ],
    choices: [{ back: "IV_N_galeries" }] }),

  IV_N_reserve: P({ title: "La réserve", place: "moutier",
    text: [
      "La galerie s'élargit en une salle longue, et le long des murs, prises dans la glace, des bandes d'écorce peintes. Des centaines. Des milliers. Les offrandes du clan du Corbeau, celles qu'on pose sur la peau de renne devant la tente de la Bouche, chaque nuit, depuis des siècles. Des noms.",
      "C'est ici qu'elles finissent. Pas chez la Mère Blanche. Dans un garde-manger.",
      { with: "corbe", text: "Corbe s'arrête net. Elle pose la main à plat sur la glace, sur une bande d'écorce où l'on voit encore, à l'ocre rouge, un corbeau maladroit, une écriture d'enfant. « C'est la mienne, dit-elle. J'avais six ans. J'avais donné le nom de mon chien. » Elle ne retire pas la main." },
      { if: { has: "nord:lignee" }, text: "Au milieu du mur, une bande plus vieille que les autres, presque noire, porte un nom à l'ocre, très effacé : SIGRUN." },
    ],
    choices: [
      { label: "Briser la glace et libérer les noms", test: { dom: "combat", label: "La glace", help: [{ if: { present: "corbe" }, v: 15 }, { if: { present: "rodric" }, v: 15 }, { if: { present: "ysolde" }, v: 10 }] },
        win: { fx: { flag: "iv:nid_noms", ep: ["perso", 2000] }, to: "IV_N_reserve_libre" }, lose: { fx: { pv: -2 }, to: "IV_N_reserve_rate" } },
      { label: "Laisser la réserve", to: "IV_N_galeries" },
    ] }),
  IV_N_reserve_libre: P({ title: "Les noms", place: "moutier",
    text: [
      "La glace craque d'un bout à l'autre de la salle, en une longue plainte, et cède. Les bandes d'écorce tombent par terre, par milliers, en tas, avec un bruit de feuilles mortes.",
      "Et les noms qui étaient dessus montent. Pas en lumière, pas en neige : en voix. Toute la salle se remplit de voix qui disent chacune un nom, une fois, à voix basse, et s'éteignent. Ça dure longtemps. Ça dure jusqu'à ce que le dernier ait été dit.",
      { with: "corbe", text: "Là-haut, sur la montagne, quelque part, quelqu'un vient peut-être de retrouver le nom de son chien." },
      { without: "corbe", text: "Là-haut, sur la montagne, quelque part, quelqu'un vient peut-être de retrouver un nom qu'il croyait donné pour toujours." },
    ],
    choices: [{ back: "IV_N_galeries" }] }),
  IV_N_reserve_rate: P({ title: "Trop épais", place: "moutier",
    text: ["La glace ne cède pas. Tu t'y brises les phalanges. Elle a été faite pour durer, par quelque chose qui avait tout le temps. Tu laisses les noms à leur mur, en te promettant de revenir. Tu sais déjà que tu ne reviendras pas."],
    choices: [{ back: "IV_N_galeries" }] }),

  IV_N_pont: P({ title: "Le pont de glace", place: "moutier",
    text: [
      "Une salle immense, sans fond. Un pont de glace la traverse, large d'un pied, sans parapet. De l'autre côté, sur une corniche, une forme assise contre la paroi. Un homme. Un homme mort, en robe grise, gelé, qui tient sur ses genoux une épée courte et une sacoche.",
      "Un greffier. Il est venu ici avant toi. Il n'est jamais remonté.",
    ],
    choices: [
      { label: "Traverser", test: { dom: "nature", label: "Le pont", help: [{ if: { present: "pie" }, v: 15 }, { if: { present: "corbe" }, v: 10 }, { if: { present: "givre" }, v: 5 }] },
        win: { fx: { ep: ["seance", 800] }, to: "IV_N_greffier" }, lose: { fx: { pv: -5 }, to: "IV_N_pont_chute" } },
      { label: "Ne pas tenter le sort", to: "IV_N_galeries" },
    ] }),
  IV_N_pont_chute: P({ title: "La corniche", place: "moutier",
    text: ["Au milieu du pont, ton pied part. Tu te rattrapes au bord, des deux mains, les jambes dans le vide. Tu remontes à la force des bras, en hurlant, et tu fais le reste du chemin à quatre pattes, sans aucune honte."],
    choices: [{ label: "La corniche", to: "IV_N_greffier" }] }),
  IV_N_greffier: P({ title: "Le greffier", place: "moutier",
    text: [
      "Il est jeune. Il a dû mourir de froid, assis, en attendant. Dans la sacoche, un carnet. Les premières pages sont des relevés : des galeries, des mesures, une carte du Nid, précise, d'une main de géomètre. *Mission du Greffier-Majeur : établir le nombre et l'état des Glaneurs demeurés en deçà du col.*",
      "Les dernières pages ne sont plus des relevés. *Je ne retrouve plus le pont. Je ne retrouve plus mon nom. Il est écrit sur la première page, je le lis, et il ne me dit rien. Je crois qu'ils l'ont mangé pendant que je dormais. Il fait chaud, maintenant. C'est bon signe, ou très mauvais.*",
      "L'épée courte, sur ses genoux, a une lame d'un gris très pâle, comme de la glace, et elle ne gèle pas.",
    ],
    choices: [{ label: "Prendre l'épée, lui fermer les yeux, et repasser le pont", fx: { item: "lame_nid", flag: "iv:nid_greffier", ep: ["perso", 1000] }, to: "IV_N_galeries" }] }),

  IV_N_fond: P({ title: "Le fond", place: "moutier",
    text: [
      "La dernière galerie descend longtemps, en spirale, et s'ouvre sur une salle ronde, haute comme une église. Au milieu, couchée en rond, comme une chienne sur sa portée, une Glaneuse. Énorme. Vieille. Si vieille que son sceau au front a fondu, et coulé, et refait une croûte noire sur tout son visage.",
      "Elle ne dort pas. Elle te regarde arriver. Elle n'a pas faim : elle a mangé. Autour d'elle, des petits, une dizaine, serrés contre son flanc.",
      { if: { seen: "IV_N_berceaux" }, text: "Elle sait ce que tu as fait, là-haut, dans la salle des berceaux. Ça se voit à la façon dont elle te regarde." },
    ],
    choices: [
      { label: "La combattre", to: "IV_N_combat" },
      { label: "Laisser Gaspard lui parler", hide: { not: GASPARD }, to: "IV_N_gaspard" },
      { label: "Lui parler toi-même", test: { dom: "magie", label: "La Glaneuse", help: [{ if: { has: "iv:nid_berceaux=sauves" }, v: 20 }, { if: { present: "givre" }, v: 15 }, { if: { has: "iv:nid_berceaux=ecrases" }, v: -20 }, { if: { has: "iv:nid_echo" }, v: 10 }] },
        win: { fx: { flag: "iv:nid=pacte", ep: ["perso", 3000] }, to: "IV_N_pacte" }, lose: { to: "IV_N_combat" } },
    ] }),
  IV_N_combat: P({ title: "La Glaneuse",
    combat: { title: "La vieille Glaneuse", enemies: ["geant", "glaneur_petit"], terrain: "nature", range: "contact",
      flee: { dom: "nature", label: "Remonter la spirale en courant", to: "IV_N_fuite" },
      win: { fx: { flag: "iv:nid=detruit", ep: ["seance", 6000] }, to: "IV_N_detruit" }, lose: { fx: { pv: -6 }, to: "IV_N_fuite" } },
    text: ["Elle se lève. Elle se lève longtemps : elle est plus grande debout que tu ne l'imaginais. Ses petits se cachent derrière elle. Elle ouvre la bouche, et dedans, il y a des voix."],
    choices: [] }),
  IV_N_gaspard: P({ title: "Gaspard et la Glaneuse", place: "moutier",
    text: [
      "Gaspard s'avance seul au milieu de la salle. Il s'assied par terre, devant elle, en tailleur, comme on s'assied devant un four pour surveiller la cuisson. Il ne dit rien pendant longtemps. Elle le renifle.",
      "Puis il parle. Pas en mots. Ou en mots que tu ne connais pas, des mots de pâte et de levain, des mots de quelqu'un qui a été une chose blanche et affamée et qui est redevenu un homme parce qu'un enfant lui a donné du pain. Ça dure une heure. Tu ne bouges pas.",
      "Quand il se relève, la Glaneuse a posé la tête sur ses pattes. « Elle ne savait pas qu'on pouvait revenir, dit Gaspard. Personne ne le lui avait dit. Elle va remonter le col, au printemps, quand il se rouvrira. Avec les petits. Ils ne mangeront plus d'enfants. Je lui ai promis qu'on leur laisserait des miettes, au cairn du col. Des petites choses. Des choses qu'on peut perdre. »",
      "Il ouvre la main. Trois petites lueurs, qu'elle gardait sous son ventre et qu'elle lui a rendues. Trois noms. Ceux des enfants du moutier. Il les verse dans ta paume, et tu refermes les doigts dessus.",
    ],
    choices: [{ label: "Remonter", fx: { flag: ["iv:nid=pacte", "gaspard:nid"], conf: { gaspard: 15 }, ep: ["perso", 3000] }, to: "IV_N_sortie" }] }),
  IV_N_pacte: P({ title: "La promesse", place: "moutier",
    text: [
      "Tu t'assieds devant elle, comme devant une bête qu'on ne veut pas effrayer. Tu lui parles de Sauvelune, de la porte, des miettes. Tu lui dis qu'il y a des choses qu'on peut donner sans rien perdre : la couleur d'une écuelle, le nombre des marches du temple. Que les enfants du moutier n'en font pas partie.",
      "Elle t'écoute. Elle comprend, ou elle fait semblant, comme les vieilles bêtes. À la fin, elle pousse vers toi, du bout du museau, trois petites lueurs qu'elle gardait sous son ventre. Trois noms. Ceux des enfants du moutier. Tu les prends dans ta main fermée.",
    ],
    choices: [{ label: "Remonter", to: "IV_N_sortie" }] }),
  IV_N_detruit: P({ title: "La neige", place: "moutier",
    text: [
      "Elle tombe en neige, d'un coup, toute, et la neige recouvre ses petits, qui se défont avec elle. Dans la poudreuse, il reste des choses : une centaine de lueurs, petites, qui flottent au ras du sol et cherchent où aller.",
      "Tu reconnais trois d'entre elles, sans savoir comment. Ce sont les plus neuves. Tu les prends dans ta main fermée. Les autres, tu les laisses monter par la spirale, vers le jour, chercher seules.",
    ],
    choices: [{ label: "Remonter", to: "IV_N_sortie" }] }),
  IV_N_fuite: P({ title: "La spirale", place: "moutier",
    text: ["Tu remontes la spirale en courant, sans te retourner, avec derrière toi le bruit d'un très grand corps qui ne se presse pas. Elle ne te suit pas jusqu'en haut. Elle n'en a pas besoin. Elle sait que tu ne redescendras pas."],
    choices: [{ label: "Remonter à la corde", to: "IV_N_remonter" }] }),

  IV_N_sortie: P({ title: "Trois noms", place: "moutier",
    text: [
      "Au moutier, les trois enfants jouent dans le cloître, avec des osselets. Tu ouvres la main au-dessus de chacun. Ils ne remarquent rien. Puis la plus petite lève la tête, et dit, à personne en particulier : « Je m'appelle Jehanne. » Et elle se remet à jouer.",
      "Frère Odon pleure dans sa manche. Il dit que c'est le froid.",
    ],
    choices: [{ fx: { quest: "IV_Q_nid", flag: "iv:nid_enfants" }, back: "IV_moutier" }] }),
  IV_N_remonter: P({ title: "Le jour", place: "moutier",
    text: ["Tu remontes à la corde, longtemps, jusqu'à la lumière. Au moutier, les trois enfants jouent toujours dans le cloître, sans nom. Frère Odon ne te demande rien. Il a vu ta tête."],
    choices: [{ fx: { quest: "IV_Q_nid" }, back: "IV_moutier" }] }),
};
