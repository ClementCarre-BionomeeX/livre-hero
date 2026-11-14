// Act I · road of Corbe, in two chapters. Chapter 1, "Le rite au bord de la neige": the summer snow on the Hautes-Combes,
// a clan who rejoices, a Glaneur fed with names, a lost child in the white, Bran's letter, and the rite Corbe is chosen
// for. Chapter 2, "La route des crêtes": following the Glaneur south along the crests (the arrow, the ruined oven), and
// at the north gate of Pallanche, a guard in black who has her brother's face.
var CO = { place: "corbeau", noLead: true };
function P(o) { return Object.assign({ act: "I" }, CO, o); }
var ROAD = { place: null, noLead: true };
function R(o) { return Object.assign({ act: "I" }, ROAD, o); }
module.exports = {
  // ================================================================ chapter 1 · le rite au bord de la neige
  CO_aube: P({ title: "Les Hautes-Combes",
    fx: { meet: "hrodna", questSeen: "CO_rite" },
    text: [
      "Tu te réveilles parce que les corbeaux se taisent. Ils crient toute la nuit, d'habitude, dans les pins au-dessus du camp, et ils se taisent seulement quand quelque chose de grand passe. Un ours. Un orage. Un mort.",
      "Tu sors de la tente en peau de renne. Il fait froid. Il ne fait jamais froid, en juillet, sur les Combes. Et sur l'alpage, sur les tentes, sur les claies à viande, sur le dos des rennes qui ne bougent pas, il y a de la neige. Une neige fine, blanche, sèche, qui crisse sous le pied nu comme du sel.",
      "Elle ne fond pas. Le soleil se lève sur elle et elle ne fond pas.",
      "Autour de toi, les tentes s'ouvrent, une à une. Personne ne crie. Les gens du Corbeau sortent, regardent, et tombent à genoux dans la neige. Hrodna, la cheffe, a déjà le visage peint. Elle te regarde, au-dessus de tout le clan agenouillé, et elle sourit pour la première fois depuis que tu la connais.",
      "« Elle vient, dit-elle. La Mère Blanche. Comme l'aïeule l'avait chanté. Et c'est toi qu'elle a choisie, Corbe. Dans trois jours, au col de l'Ourse. »",
    ],
    choices: [{ label: "Te mettre à genoux avec les autres", to: "CO_camp" }] }),

  CO_camp: P({ title: "Le camp du Corbeau", hub: true,
    text: [
      "Le camp chante depuis l'aube. On a sorti les tambours, on a égorgé deux rennes, on brûle de la graisse et des genévriers. Les enfants se roulent dans la neige. Les vieux pleurent. On te touche quand tu passes, les épaules, les cheveux, comme on touche une pierre sacrée.",
      { if: { has: "corbe:glaneur_vu" }, text: "Devant la tente de Hrodna, sur une peau de renne, des offrandes : des colliers, des couteaux, un tambour d'enfant. Et des bandes d'écorce où sont peints des signes. Des noms." },
      "Ta mère, Askel, ne sort pas de sa tente.",
    ],
    choices: [
      { label: "Aller voir ta mère", to: "CO_askel", hide: { seen: "CO_askel" } },
      { label: "Un cri de femme, au bord de la neige", to: "CO_ylva", hide: { seen: "CO_ylva" } },
      { label: "Le colporteur des vallées, qui monte vers le camp", to: "CO_colporteur", hide: { seen: "CO_colporteur" } },
      { label: "Brindille, qui regarde le nord au bord du troupeau", to: "CO_Q_renne", hide: { seen: "CO_Q_renne" } },
      { label: "Ton tambour, fendu ce matin", to: "CO_Q_tambour", hide: { seen: "CO_Q_tambour" } },
      { label: "Les vieilles qui broient les couleurs", to: "CO_k_couleurs", hide: { seen: "CO_k_couleurs" } },
      { label: "Embla, devant ta tente, avec un peigne d'os", to: "CO_k_tresses", hide: { seen: "CO_k_tresses" } },
      { label: "Les chasseurs qui partent sur la piste de la louve blanche", to: "CO_L_depart", hide: { seen: "CO_L_depart" } },
      { label: "La veillée des offrandes, à la nuit tombée", to: "CO_veillee", if: { all: [{ seen: "CO_askel" }] }, why: "Pas avant d'avoir vu ta mère.", hide: { seen: "CO_veillee" } },
      { label: "Préparer le rite", to: "CO_preparer", if: { seen: "CO_veillee" }, why: "La veillée d'abord.", big: true },
    ] }),

  CO_askel: P({ title: "Askel",
    text: [
      "Ta mère est assise au fond de sa tente, dans le noir, et elle coud. Elle coud la robe du rite, blanche, en peau de renne écrue, avec des plumes de corbeau au col. Elle ne lève pas les yeux.",
      "« Ils ont attendu cent ans, dit-elle. Mon arrière-grand-mère l'attendait. La tienne l'attendait. L'aïeule chantait qu'elle viendrait en été, et qu'il faudrait une Bouche pour lui parler. Ils ont choisi la meilleure voix du clan. »",
      "Elle mord le fil. « Ils ont choisi la mienne, il y a trente ans. Puis la neige n'est pas venue. Alors ils ont attendu que j'aie une fille. »",
      "Tu demandes ce qui arrive à la Bouche. Elle coud. Longtemps. Puis : « Elle entre dans la neige avec son nom peint sur le visage. Elle en ressort sans. »",
    ],
    choices: [
      { label: "« Et Bran ? Qu'est-ce qu'il dirait ? »", fx: { flag: "corbe:bran_dit" }, to: "CO_askel_bran" },
      { label: "La laisser coudre", to: "CO_camp" },
    ] }),

  CO_askel_bran: P({ title: "Le nom brûlé",
    text: [
      "Ses mains s'arrêtent. Ce nom-là, on ne le dit plus sous les tentes. Il y a six hivers, ton frère est descendu vers les villes, et le clan a brûlé son nom dans le feu de la Saint-Corbeau. Depuis, il n'a jamais existé.",
      "« Il dirait que c'est une neige de ville », dit ta mère, très bas. Elle reprend son aiguille. « Il disait toujours ça, de tout ce qu'il n'aimait pas. »",
    ],
    choices: [{ back: "CO_camp" }] }),

  // the lost child
  CO_ylva: P({ title: "Ylva",
    fx: { meet: "ylva", questSeen: "CO_ylva" },
    text: [
      "Une femme crie, au bord de l'alpage, là où commence la neige épaisse qui monte vers le col. Sa fille, Ylva, sept ans, est partie dans la neige ce matin. Pour voir la Mère. On voit ses traces : des petits pieds nus qui montent tout droit, et qui deviennent de moins en moins profonds, comme si elle devenait légère.",
      "Personne ne la suit. On dit que la Mère l'a prise. On dit que c'est un honneur.",
    ],
    choices: [
      { label: "Suivre les traces dans la neige", test: { dom: "nature", label: "Pistage" },
        win: { fx: { ep: ["perso", 700] }, to: "CO_ylva_trouvee" }, lose: { fx: { time: 3 }, to: "CO_ylva_tard" } },
      { label: "Prendre un tambour du clan, et le battre très fort, pour qu'elle entende le camp", test: { dom: "magie", label: "Tambour", help: [{ if: { item: "tambour" }, v: 10 }] },
        win: { fx: { ep: ["perso", 700] }, to: "CO_ylva_tambour" }, lose: { fx: { time: 3 }, to: "CO_ylva_tard" } },
      { label: "Rester. C'est un honneur", fx: { flag: "ylva:perdue", quest: "CO_ylva" }, to: "CO_ylva_perdue" },
    ] }),

  CO_ylva_trouvee: P({ title: "Dans le blanc",
    text: [
      "Tu la trouves à une heure de marche, assise dans la neige, en robe de laine, les lèvres bleues. Elle ne pleure pas. Elle regarde le col. Quand tu la soulèves, elle te demande qui tu es, très poliment.",
      "Sa mère pleure en la reprenant. Ylva lui demande qui elle est, très poliment. Sa mère s'arrête de pleurer.",
      "Le soir, Ylva sait de nouveau le nom de sa mère. Elle ne sait plus celui de son père, ni le sien. On l'appelle Ylva. Elle répond, comme on répond à un surnom.",
    ],
    choices: [{ fx: { flag: "ylva:sauvee", quest: "CO_ylva" }, back: "CO_camp" }] }),

  CO_ylva_tambour: P({ title: "Le tambour",
    text: [
      "Tu bats le tambour au bord de la neige jusqu'à ce que tes mains saignent. Le corbeau peint sur la peau a l'air de crier avec toi. Au bout d'une heure, une petite silhouette redescend du blanc, à pas lents, comme quelqu'un qui marche en dormant, et vient s'asseoir à tes pieds pour écouter.",
      "Elle ne reconnaît pas sa mère, d'abord. Puis si. C'est le tambour qu'elle reconnaît, dit-elle. Le tambour du clan.",
    ],
    choices: [{ fx: { flag: "ylva:sauvee", quest: "CO_ylva" }, back: "CO_camp" }] }),

  CO_ylva_tard: P({ title: "Trop haut",
    text: [
      "Quand tu montes enfin, les traces s'arrêtent au milieu de la pente. Elles ne repartent pas. Autour, la neige seule, lisse comme une peau tendue. Tu restes là jusqu'au soir. Le vent efface les traces sous tes yeux.",
    ],
    choices: [{ fx: { flag: "ylva:perdue", quest: "CO_ylva" }, back: "CO_camp" }] }),

  CO_ylva_perdue: P({ title: "Un honneur",
    text: ["Le soir, sa mère chante devant sa tente, au milieu des autres femmes, le visage peint comme elles. Le chant de joie. Elle chante faux. Elle chante jusqu'au matin."],
    choices: [{ back: "CO_camp" }] }),

  // the letter
  CO_colporteur: P({ title: "Mathias des vallées",
    fx: { meet: "mathias" },
    text: [
      "Mathias monte aux Combes deux fois l'an avec du sel, des aiguilles et du fer, et redescend avec des peaux. Il arrive ce jour-là sur son mulet, les yeux ronds devant la neige. Il te prend à part, derrière les claies à viande, et te tend un carré de vélin plié, cacheté de cire jaune.",
      "« C'est un garde de Pallanche qui me l'a donné. Un grand, roux, avec ta mâchoire. Il a dit que tu saurais. » Il hésite. « Il a payé d'avance. Et cher. »",
      "Tu ne sais pas lire. Personne ne sait lire, au clan. Les registres sont la façon dont les gens des villes enferment les choses.",
    ],
    choices: [
      { label: "Demander à Mathias de te la lire", fx: { flag: "corbe:lettre_lue", quest: "CO_lettre", ep: ["perso", 600] }, to: "CO_lettre" },
      { label: "La jeter au feu sans l'ouvrir. Ce nom est brûlé", fx: { flag: "corbe:lettre_brulee", quest: "CO_lettre" }, to: "CO_lettre_feu" },
      { label: "La garder sans l'ouvrir", fx: { item: "lettre_bran", flag: "corbe:lettre_gardee", quest: "CO_lettre" }, to: "CO_camp" },
    ] }),

  CO_lettre: P({ title: "La lettre",
    fx: { item: "lettre_bran" },
    text: [
      "Mathias lit lentement, en suivant les lignes du doigt.",
      "*Corbe. Je sais ce qui tombe sur les Combes. Il en tombe aussi ici, la nuit, dans les rues, et personne ne le voit. Ne fais pas le rite. Ce n'est pas elle. Viens à Pallanche avant la Nuit des Cloches. Demande la porte du Nord. — B.*",
      "Mathias replie le vélin et te le rend sans te regarder. Il repart le soir même, sans avoir vendu son sel.",
    ],
    choices: [{ label: "Garder la lettre contre ta peau", to: "CO_camp" }] }),

  CO_lettre_feu: P({ title: "La cire jaune",
    text: ["La cire fond, le vélin se tord et noircit, et pendant une seconde, avant de devenir cendre, des signes apparaissent en rouge dans les flammes. Tu ne sais pas les lire. Tu les regardes jusqu'au bout."],
    choices: [{ back: "CO_camp" }] }),

  // the night of the offerings: a Glaneur fed with names
  CO_veillee: P({ takes: "night", title: "La veillée des offrandes",
    fx: { flag: "corbe:glaneur_vu" },
    text: [
      "À la nuit, tout le clan se tient en cercle au bord de la neige, avec des torches. Hrodna bat le grand tambour. Et quelque chose descend du col.",
      "Ça a la forme d'un homme, en plus grand. Ça a l'air fait de neige tassée, avec des mains trop longues. Ça marche sans enfoncer. Ça s'arrête devant le cercle, à dix pas, et le clan se tait.",
      "Le vieux Tarve s'avance. Il a quatre-vingts ans, il ne marche plus qu'avec deux bâtons. Il tend une bande d'écorce peinte. Il dit, d'une voix claire, son propre nom. La chose se penche, pose une main sur son front, et Tarve sourit comme un enfant.",
      "Puis il se retourne vers le clan, et il demande où il est.",
      "Hrodna pleure de joie. D'autres s'avancent derrière Tarve, en file, une bande d'écorce à la main.",
    ],
    choices: [
      { label: "Tirer une flèche sur la chose", if: { item: "arc_court" }, why: "Tu n'as pas ton arc.", fx: { flag: "corbe:tire", ep: ["perso", 500] }, to: "CO_veillee_fleche" },
      { label: "Te mettre dans la file, avec les autres", to: "CO_veillee_file" },
      { label: "Regarder, sans bouger, jusqu'à ce qu'elle reparte", fx: { flag: "corbe:regarde" }, to: "CO_veillee_regarde" },
    ] }),

  CO_veillee_fleche: P({ title: "La flèche",
    text: [
      "La flèche traverse la chose comme on traverse de la fumée et va se planter dans la neige derrière. La chose ne se retourne pas. Le clan, si. Tous. Hrodna lâche son tambour.",
      "La chose finit par repartir vers le col, sans hâte, puis vers le sud, sur la crête. Ses traces ne s'enfoncent pas.",
      "Cette nuit-là, personne ne te parle. Au matin, quelqu'un a peint un trait noir sur ta tente.",
    ],
    choices: [{ fx: { flag: "clan:colere" }, back: "CO_camp" }] }),

  CO_veillee_file: P({ title: "Dans la file",
    text: [
      "Tu avances. Devant toi, une femme, puis un garçon. La chose est à trois pas, puis à deux. Tu sens le froid qu'elle fait, un froid qui ne vient pas de l'air. La femme devant toi donne son nom. Elle sourit.",
      "C'est ton tour. La chose se penche. Tu vois, au milieu de ce qui devrait être son front, une tache noire, lisse comme de la cire.",
    ],
    choices: [
      { label: "Donner un souvenir, pas ton nom : la première neige, la vraie", tag: "Souvenir donné", stain: true, if: { souv: "corbe:neige" }, why: "Tu ne l'as plus.",
        fx: { souv: "corbe:neige", flag: "corbe:a_donne", ep: ["perso", 1200] }, to: "CO_veillee_donne" },
      { label: "Reculer hors de la file", to: "CO_veillee_regarde" },
    ] }),

  CO_veillee_donne: P({ title: "Ce que la neige prend",
    text: [
      "La main se pose sur ton front. Tu penses à la neige de ton enfance, la vraie, celle qui mord, qui sent le fer, qui fond dans la bouche. Tu la tends, comme on tend un morceau de viande à un chien qu'on ne connaît pas.",
      "La main se retire. La chose te regarde. Puis elle passe à la suivante.",
      "Tu ne sais plus ce que c'est, de la neige qui fond. Tu as beau chercher, tu ne trouves que celle-ci, blanche, sèche, qui crisse comme du sel. Il te semble que la neige a toujours été comme ça.",
    ],
    choices: [{ back: "CO_camp" }] }),

  CO_veillee_regarde: P({ title: "Treize",
    text: [
      "Tu comptes. Treize s'avancent. Treize reviennent en souriant et en demandant où ils sont. Puis la chose repart, vers le col, puis vers le sud, sur la crête qui mène aux vallées, sans laisser de traces profondes.",
      "Les treize dorment cette nuit-là dans la tente de Hrodna, serrés les uns contre les autres. Personne ne leur a dit leurs noms. Le clan dit que c'est la Mère qui les a.",
    ],
    choices: [{ back: "CO_camp" }] }),

  // end of chapter 1
  CO_preparer: P({ title: "Le col de l'Ourse",
    text: [
      "Au troisième jour, à l'aube, Askel te peint le visage. Ton nom, en signes du clan, en ocre et en suie, du front au menton. Elle ne te regarde pas dans les yeux. Elle te met la robe blanche, attache les plumes au col. Hrodna attend dehors, avec tout le clan, et les tambours.",
      "Le col de l'Ourse est à une demi-journée de marche. L'endroit le plus beau du monde. Sous la neige, aujourd'hui, il ressemble à tous les autres.",
      { if: { item: "lettre_bran" }, text: "La lettre de Bran est sous ta robe, contre ta peau. Elle te gratte." },
      "Et de l'autre côté du col, vers le sud, il y a la crête. Celle qu'a prise la chose. Celle qui descend, en quatre jours de marche, jusqu'aux villes.",
    ],
    choices: [
      { label: "Marcher avec le clan jusqu'au col, et entrer dans la neige", fx: { flag: "corbe:voie=rite" }, to: "CO_rite" },
      { label: "Prendre la crête, seule, pour suivre la chose et savoir si c'est la Mère", fx: { flag: "corbe:voie=suivre" }, to: "CO_depart" },
      { label: "Prendre la crête pour aller à Pallanche, à la porte du Nord", hide: { not: { has: "corbe:lettre_lue" } }, fx: { flag: "corbe:voie=bran" }, to: "CO_depart" },
    ] }),

  CO_rite: P({ takes: "evening", title: "Le rite",
    text: [
      "Le clan s'arrête au bord du col. Toi, tu continues. La neige monte aux chevilles, puis aux genoux. Derrière toi, les tambours. Devant toi, le blanc.",
      "Tu chantes le chant des morts, les trois vers que tu ne comprends pas, comme l'aïeule te l'a appris. Ta voix porte loin. Le blanc t'écoute. Tu le sens qui t'écoute.",
      "Rien ne vient. Tu attends jusqu'au soir. Rien ne vient. Personne ne prend ton nom.",
      "À la nuit, tu te retournes. Le clan est toujours là, au bord du col, avec ses torches, qui attend que tu reviennes sans nom. Tu ne peux pas redescendre avec ton nom. Tu ne peux pas.",
      "Alors tu prends la crête, vers le sud, sur les traces de la chose. C'est le seul chemin qui ne mène pas au clan.",
    ],
    choices: [{ label: "Marcher dans la nuit", fx: { flag: "corbe:rite_vide", ep: ["perso", 1000] }, to: "CO_depart" }] }),

  CO_depart: P({ title: "La crête",
    text: [
      "Il fait nuit sur les Hautes-Combes quand tu t'arrêtes. Tu as ton arc, ton tambour, quatre jours de viande séchée. Derrière toi, le camp. Devant toi, la crête, et sur la crête, des traces qui ne s'enfoncent pas.",
    ],
    choices: [{ label: "Dormir là, au bord du blanc", fx: { flag: "ch:corbe:1", resume: "CO_crete" }, to: "C_carrefour" }] }),

  // ================================================================ chapter 2 · la route des crêtes
  CO_crete: P({ title: "Au matin, sur la crête",
    text: [
      "Tu te réveilles couverte de givre. La crête court vers le sud, sur le fil, entre deux vides : à droite, les vallées vertes, à gauche, les Combes blanches. Les traces de la chose la suivent.",
      { if: { has: "corbe:voie=rite" }, text: "Derrière toi, sur le col, une fumée monte encore du camp. Ils doivent chanter pour la Bouche. Ils ne savent pas encore." },
      { if: { has: "corbe:voie=bran" }, text: "La lettre gratte contre ta peau à chaque pas." },
    ],
    choices: [{ label: "Suivre la crête vers le sud", travel: "r_combes" }] }),

  CO_fleche: R({ title: "La flèche dans la neige",
    text: [
      { before: "corbe:tire", text: "Au premier soir, tu rattrapes la chose. Elle est debout au milieu de la crête, immobile, face au sud. Tu bandes ton arc. Peut-être pour rien. Tu tires." },
      { after: "corbe:tire", text: "Au premier soir, tu rattrapes la chose. Elle est debout au milieu de la crête, immobile, face au sud. Tu bandes ton arc. Tu sais, depuis la veillée, que ça ne sert à rien. Tu tires quand même." },
      "La flèche passe au travers et se plante dans la neige, un peu plus loin. La chose ne se retourne pas. Elle repart. Tu n'as pas le temps d'aller chercher ta flèche.",
      { if: { has: "croise:fleche_corbe" }, text: "Le lendemain, quand tu reviens la chercher, elle n'est plus là. À sa place, des traces de chaussures de montagne, usées, qui suivent la chose, comme toi." },
      { if: { has: "croise:fleche_laissee" }, text: "Le lendemain, quand tu reviens la chercher, elle est toujours plantée là, droite. Mais quelqu'un est passé à côté, a fait le tour, et ne l'a pas touchée. Des chaussures de montagne, usées. Tu reprends ta flèche." },
    ],
    choices: [{ fx: { flag: "corbe:fleche" }, back: "@route" }] }),

  CO_four: R({ title: "Le four",
    fx: { questSeen: "CO_four" },
    text: [
      "À mi-chemin, dans un creux à l'abri du vent, les ruines d'une bergerie. Un four à pain de pierre sèche, à moitié effondré.",
      { if: { has: "gaspard:tue" }, text: "Devant le four, il y a un tas de neige tassée, en forme d'homme, défait, qui ne fond pas. Une main trop longue dépasse encore. Quelqu'un est passé avant toi, et s'est battu." },
      { if: { has: "gaspard:pain" }, text: "Devant le four, il n'y a personne. Des miettes de pain sur la pierre, et des traces de pas trop grands qui repartent, lentement, vers l'est." },
      { if: { not: { any: [{ has: "gaspard:tue" }, { has: "gaspard:pain" }] } }, text: "Devant le four, accroupie, les mains tendues vers la gueule froide, il y a une chose de neige. Plus petite que l'autre, sans tache au front. Elle se balance. Elle murmure. *Le levain… qui a pris le levain…*" },
    ],
    choices: [
      { label: "Lui chanter le chant des morts", hide: { any: [{ has: "gaspard:tue" }, { has: "gaspard:pain" }] }, test: { dom: "magie", label: "Chant", help: [{ if: { souv: "corbe:chant" }, v: 15 }, { if: { item: "tambour" }, v: 5 }] },
        win: { fx: { flag: "gaspard:chant", quest: "CO_four", ep: ["perso", 1000] }, to: "CO_four_chant" },
        lose: { fx: { quest: "CO_four" }, to: "CO_four_rate" } },
      { label: "Passer ton chemin", fx: { quest: "CO_four" }, to: "@route" },
    ] }),

  CO_four_chant: R({ title: "Un nom",
    text: [
      "Tu t'assieds à côté de lui et tu chantes, très bas, les trois vers. Il s'arrête de se balancer. Il tourne vers toi ce qui lui tient lieu de visage. Au troisième vers, il dit quelque chose. Un mot. Deux syllabes, comme une porte qui s'ouvre et se referme.",
      "« Gaspard. »",
      "Il le répète, étonné. Il se remet à se balancer, mais plus lentement. Quand tu repars, il chante, lui aussi, sans les paroles.",
    ],
    choices: [{ back: "@route" }] }),

  CO_four_rate: R({ title: "Le levain",
    text: ["Tu chantes. Il n'écoute pas. Il parle de levain, de pâte, d'enfourner avant l'aube. Tu repars, et sa voix te suit longtemps dans le vent, plus loin que tu ne l'aurais cru."],
    choices: [{ back: "@route" }] }),

  CO_bergers: R({ title: "Les bergers de la Sauve",
    text: [
      "Une cabane de bergers, au-dessus d'une vallée verte. Les bergers sont là, trois hommes, une femme, et ils ne voient pas la neige qui couvre la moitié de leur pâture. Ils la traversent avec leurs bêtes sans la voir. Les bêtes, si. Elles refusent d'y aller.",
      "Ils te donnent du lait, et du fromage, et te demandent d'où tu viens. Tu dis : des Combes. Ils te regardent sans comprendre. « Les Combes ? Il n'y a rien, là-haut. »",
    ],
    choices: [{ fx: { food: 1 }, back: "@route" }] }),

  // the north gate
  CO_portes: R({ title: "La porte du Nord",
    text: [
      "La crête descend enfin vers la plaine, et la ville est là. Tu n'en as jamais vu. Elle est plus grande que toutes les Combes, elle pue la fumée et la merde de cheval, et elle sonne. Toutes ses cloches à la fois. Tu en as mal aux dents.",
      "Les traces de la chose s'arrêtent au pied des collines. La neige s'arrête là, et la piste avec elle.",
    ],
    choices: [{ label: "Descendre vers la porte", to: "@route" }] }),

  CO_pallanche: P({ title: "Le garde en noir", place: "pallanche",
    fx: { meet: "bran", questSeen: "CO_bran" },
    text: [
      "À la porte du Nord, la foule de la Fête : des charrettes, des pèlerins, des mendiants. Et des gardes, en noir, avec des hallebardes, qui regardent chaque visage.",
      "L'un d'eux est plus grand que les autres. Roux. Il a ta mâchoire. Il a la cicatrice au sourcil que tu lui as faite à sept ans avec une pierre, en visant un corbeau.",
      "Il regarde ton visage. Il regarde tes peaux de renne, tes plumes, ton arc. Il dit, d'une voix lasse, la voix de quelqu'un qui le dit cent fois par jour : « Pas d'arme en ville pendant la Fête. Ton arc, la sauvage. Tu le reprendras en sortant. »",
      { if: { has: "corbe:lettre_lue" }, text: "Il ne te reconnaît pas. Il t'a écrit il y a huit jours. Il ne te reconnaît pas." },
    ],
    choices: [
      { label: "Lui dire son nom. « Bran. »", to: "CO_bran_nom" },
      { label: "Lui donner ton souvenir de lui. Qu'il ait au moins ça", tag: "Souvenir donné", stain: true, if: { souv: "corbe:frere" }, why: "Tu ne l'as plus.",
        fx: { souv: "corbe:frere", flag: "corbe:frere_donne", ep: ["perso", 1500] }, to: "CO_bran_souvenir" },
      { label: "Lui tendre ton arc, et passer en silence", fx: { flag: "corbe:bran_tu", drop: "arc_court" }, to: "CO_bran_tu" },
    ] }),

  CO_bran_nom: P({ title: "Bran", place: "pallanche",
    text: [
      "Il fronce les sourcils. « Je m'appelle Brann, dit-il. Avec deux n. Garde Brann, de la porte du Nord. » Il a un accent de la ville, un peu traînant. « Tu me connais ? »",
      "Tu lui dis le clan, les Combes, la tente de votre mère, la cicatrice. Il écoute, poliment. Il passe un doigt sur son sourcil.",
      "« J'ai vendu des choses au Bureau, dit-il enfin. Pour avoir la place. Il fallait être d'ici. Je ne sais plus quoi. » Il hésite. « Est-ce que j'avais une sœur ? »",
    ],
    choices: [
      { label: "« Oui. »", fx: { flag: "corbe:voie_bran=oui", quest: "CO_bran", ep: ["histoire", 3000] }, to: "CO_fin" },
      { label: "« Non. Je me suis trompée. » Il a l'air heureux, ici", fx: { flag: "corbe:voie_bran=non", quest: "CO_bran", ep: ["histoire", 3000] }, to: "CO_fin" },
    ] }),

  CO_bran_souvenir: P({ title: "Ce que tu lui donnes", place: "pallanche",
    text: [
      "Tu ne sais pas comment on fait. Tu fais comme la chose, sur l'alpage : tu poses la main sur son front, au milieu de la foule, et tu penses à lui. Le grand frère qui portait les agneaux sur ses épaules. Le garçon qui riait des chants de l'aïeule. Celui qui est parti un matin d'automne sans dire au revoir, et dont tu as brûlé le nom, toi aussi, avec les autres, en chantant.",
      "Tu le lui donnes. Tout.",
      "Il recule d'un pas. Il te regarde. Il dit : « Corbe. » Et il se met à pleurer, là, devant la porte du Nord, sa hallebarde à la main, devant les autres gardes qui ne savent pas où se mettre.",
      "Toi, tu regardes ce grand garde roux qui pleure. Il pleure, et la raison t'échappe. Tu sais que c'est à cause de toi.",
    ],
    choices: [{ label: "Le laisser te prendre dans ses bras", fx: { flag: "corbe:voie_bran=donne", quest: "CO_bran", ep: ["histoire", 3000] }, to: "CO_fin" }] }),

  CO_bran_tu: P({ title: "L'arc", place: "pallanche",
    text: [
      "Il prend ton arc, l'accroche à un râtelier avec les autres, et te donne un jeton de bois. Il passe déjà au suivant. Tu entres dans la ville avec un jeton de bois à la main, et ton frère derrière toi, qui ne se retourne pas.",
    ],
    choices: [{ label: "Entrer dans la ville", fx: { flag: "corbe:voie_bran=tu", quest: "CO_bran", ep: ["histoire", 3000] }, to: "CO_fin" }] }),

  CO_fin: P({ title: "Corbe, à Pallanche", place: "pallanche",
    fx: { flag: "prologue:corbe", quest: "CO_rite", catchup: 4, catchupWhy: "la route des crêtes" },
    text: [
      "Tu dors cette nuit-là dans une écurie, près de la porte du Nord, parce que c'est l'endroit de la ville dont l'odeur rappelle le plus les Combes. Les cloches sonnent toutes les heures. À chaque fois, tu te réveilles, la main sur le couteau.",
      { if: { has: "corbe:voie_bran=oui" }, text: "Bran est venu, à la relève, s'asseoir à côté de toi dans la paille. Il n'a rien dit. Il est resté. Il ne sait pas pourquoi." },
      { if: { has: "corbe:voie_bran=donne" }, text: "Bran dort à côté de toi, dans la paille, en uniforme noir, ta main dans la sienne. Tu ne sais pas qui il est. Tu sais qu'il ne faut pas la lâcher." },
      { if: { has: "corbe:voie_bran=non" }, text: "À la relève, le garde roux est passé devant l'écurie. Il a ralenti. Il a regardé la paille. Il est reparti." },
      "Demain soir, la Nuit des Cloches. Les gens de la ville en parlent comme d'une fête.",
    ],
    choices: [
      { label: "Passer le jour dans la ville, en attendant", to: "CO_V_ville" },
      { label: "Attendre la nuit", fx: { flag: "ch:corbe:2" }, to: "C_carrefour" },
    ] }),
};
