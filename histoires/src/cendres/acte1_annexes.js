// Act I · one side quest per road, opened from each hero's hub: Corbe's white reindeer, Hylas's wall of the dead
// greffiers, Lisandre's letter for a demoiselle of the queen, Pie's little thief who sold a memory for bread, Ysolde's
// father's old horse, and the greasy pole of the Fête des foins. Each hero leads ("tu") in their own scene.
function P(place, o) { return Object.assign({ act: "I", noLead: true, place: place }, o); }
module.exports = {
  // ------------------------------------------------------------ Corbe · le renne blanc
  CO_Q_renne: P("corbeau", { title: "Le renne blanc",
    fx: { questSeen: "CO_Q_renne" },
    text: [
      "Au bord du troupeau, une femelle de renne s'est écartée des autres. Elle a de la neige blanche sur le dos, comme tous, mais chez elle, la neige ne glisse pas quand elle s'ébroue. Elle s'est posée dans le poil et elle y reste. La bête regarde le nord. Elle ne mange plus.",
      "Le vieux Arnald, qui garde le troupeau, crache par terre. « Elle est à la Mère, maintenant. Elle ne connaît plus son nom, plus ses petits, plus le troupeau. Cette nuit, elle partira vers le col, et si on la suit, on ne revient pas. »",
      "C'est ta renne. Celle que tu as nourrie au biberon de corne, il y a quatre ans, quand sa mère est morte dans l'avalanche. Tu l'appelais Brindille, parce qu'elle était maigre.",
    ],
    choices: [
      { label: "L'attacher, et rester avec elle toute la nuit", test: { dom: "nature", label: "Brindille", help: [{ if: { has: "passe:alpage" }, v: 5 }, { if: { item: "corde" }, v: 10 }] },
        win: { fx: { flag: "co:renne=ramenee", ep: ["perso", 700] }, to: "CO_Q_renne_nuit" }, lose: { fx: { flag: "co:renne=partie" }, to: "CO_Q_renne_partie" } },
      { label: "La laisser partir vers le col", fx: { flag: "co:renne=laissee" }, to: "CO_Q_renne_laissee" },
      { label: "La tuer proprement, pour la viande, avant qu'elle parte", fx: { flag: "co:renne=tuee", food: 3 }, to: "CO_Q_renne_tuee" },
    ] }),
  CO_Q_renne_nuit: P("corbeau", { takes: "morning", title: "La nuit avec Brindille",
    text: [
      "Tu l'attaches à un pieu, avec une longe courte, et tu t'assieds contre son flanc. Toute la nuit, elle tire vers le nord. Toute la nuit, tu lui parles. Tu lui dis son nom. Tu lui dis le biberon de corne, l'avalanche, la fois où elle a mangé ta ceinture.",
      "Vers l'aube, elle cesse de tirer. Elle tourne la tête vers toi. Elle te renifle les cheveux, longtemps, comme on renifle quelque chose qu'on a perdu et qu'on vient de retrouver dans une poche. La neige glisse de son dos quand elle s'ébroue.",
      "Arnald, au matin, la regarde brouter avec les autres, et ne dit rien. Il a l'air de quelqu'un qui vient d'apprendre une chose qu'il aurait préféré ne pas savoir : que ça se soigne, peut-être. Et qu'on n'a jamais essayé.",
    ],
    choices: [{ label: "Revenir au camp", fx: { quest: "CO_Q_renne" }, to: "CO_camp" }] }),
  CO_Q_renne_partie: P("corbeau", { title: "La longe",
    text: ["Au milieu de la nuit, tu t'endors. Quand tu te réveilles, la longe est rongée, et il y a des traces dans la neige, droites, vers le nord. Tu les suis jusqu'à la crête. Après la crête, tu ne vois plus de traces. Juste le blanc, et le col, très loin, avec sa lumière."],
    choices: [{ label: "Revenir au camp", fx: { quest: "CO_Q_renne" }, to: "CO_camp" }] }),
  CO_Q_renne_laissee: P("corbeau", { title: "Vers le col",
    text: ["Tu ouvres l'enclos. Elle sort, sans te regarder, et elle marche vers le nord d'un pas tranquille, comme une bête qui rentre à l'étable. Tu la regardes jusqu'à ce qu'elle ne soit plus qu'un point gris sur le blanc. Elle ne s'est pas retournée. Pourquoi est-ce qu'elle se serait retournée ? Elle ne sait plus qui tu es."],
    choices: [{ label: "Revenir au camp", fx: { quest: "CO_Q_renne" }, to: "CO_camp" }] }),
  CO_Q_renne_tuee: P("corbeau", { title: "Le couteau",
    text: ["Tu lui parles à l'oreille, et tu le fais d'un seul geste, comme on te l'a appris. Elle ne se débat pas. Le soir, la viande sèche sur les claies, et tout le camp mange. On te remercie. Tu ne manges pas."],
    choices: [{ label: "Revenir au camp", fx: { quest: "CO_Q_renne" }, to: "CO_camp" }] }),

  // ------------------------------------------------------------ Hylas · le mur des greffiers
  HY_Q_mur: P("pallanche", { title: "La chapelle des greffiers",
    fx: { questSeen: "HY_Q_mur" },
    text: [
      "La chapelle de la tour est petite, froide, et elle sent la cire. Tu la connais par cœur : quarante-deux pas de long, onze bancs, une marche usée devant l'autel. Tu y venais, quand tu avais encore des yeux, pour lire les noms.",
      "Les noms sont sur le mur du fond. Ceux des greffiers morts, depuis la fondation de la Chancellerie, gravés dans la pierre, un par un, avec leurs années. Trois cents ans de plumes.",
      "Le chapelain, frère Gauvain, te prend par le bras. « Maître Hylas. On a gravé de nouveaux noms ce printemps. Je ne les ai pas commandés. Je voudrais que vous les lisiez. Moi, je n'ose pas. »",
    ],
    choices: [
      { label: "Poser les mains sur le mur", to: "HY_Q_mur_lire" },
      { label: "« Une autre fois, frère. »", to: "HY_tour" },
    ] }),
  HY_Q_mur_lire: P("pallanche", { title: "Les noms dans la pierre",
    text: [
      "Tu poses les mains sur la pierre. Elle est froide, lisse aux vieux noms, que trois siècles de doigts ont usés. Tu descends, colonne par colonne, jusqu'aux dernières lignes, où la pierre est encore vive et coupe un peu sous le pouce.",
      "Frère Clotaire. Tu l'as enterré en hiver. Frère Amaury. Il était sourd. Puis trois noms que tu connais, de greffiers vivants, que tu as croisés la semaine dernière dans l'escalier. Avec leur année de naissance. Et, après le trait, une année de mort : celle-ci.",
      "Puis, tout en bas, le dernier nom. Tu le lis deux fois avec le pouce, pour être sûr.",
      "C'est le tien.",
    ],
    choices: [
      { label: "Le dire au chapelain", fx: { flag: "hy:mur=dit" }, to: "HY_Q_mur_dit" },
      { label: "Dire que ce sont de vieux noms, et ressortir", fx: { flag: "hy:mur=tu" }, to: "HY_Q_mur_tu" },
    ] }),
  HY_Q_mur_dit: P("pallanche", { title: "Frère Gauvain",
    text: [
      "Le chapelain ne dit rien pendant longtemps. Puis il dit, très bas : « Qui grave le nom d'un homme avant sa mort ? » Tu connais la réponse. Un greffier. Un greffier qui inscrit les choses avant qu'elles arrivent, pour qu'elles arrivent comme elles sont écrites.",
      "« Je vais prier pour vous, maître Hylas. » Tu le remercies. Tu ne lui dis pas que ce n'est pas pour toi qu'il faudrait prier. C'est pour celui qui a tenu le ciseau, et qui a appris à écrire dans ta propre main.",
    ],
    choices: [{ label: "Revenir dans la tour", fx: { quest: "HY_Q_mur", ep: ["perso", 800] }, to: "HY_tour" }] }),
  HY_Q_mur_tu: P("pallanche", { title: "De vieux noms",
    text: ["« De vieux noms, frère. Des erreurs du tailleur de pierre. » Il te croit, parce qu'il veut te croire. Tu sors de la chapelle à ton pas habituel, ta canne devant toi. Dans l'escalier, tu t'arrêtes, et tu poses le front contre le mur, une minute, pas plus. Puis tu reprends ta canne."],
    choices: [{ label: "Revenir dans la tour", fx: { quest: "HY_Q_mur", ep: ["perso", 500] }, to: "HY_tour" }] }),

  // ------------------------------------------------------------ Lisandre · la lettre de Clémence
  LI_Q_clemence: P("vasselin", { title: "Clémence",
    fx: { questSeen: "LI_Q_clemence" },
    text: [
      "Dans l'embrasure d'une fenêtre de la galerie, Clémence de Varades, demoiselle d'honneur de la reine, dix-sept ans, l'air d'une personne qui se noie, t'attrape par la manche.",
      "« Dame Lisandre. Il faut que vous m'écriviez une lettre. En vers. Il est sergent, à Brenne, dans les Marches, je l'ai vu une fois quand la reine est allée voir le fort, il m'a aidée à descendre de voiture, il ne m'a pas dit un mot, il avait une cicatrice au menton, il ne sait sûrement pas lire, je ne sais même pas son nom. » Elle reprend son souffle. « Je vous paierai. »",
    ],
    choices: [
      { label: "Lui écrire la plus belle lettre de ta vie", test: { dom: "social", label: "La lettre", help: [{ if: { seen: "LI_aubrac" }, v: 5 }] },
        win: { fx: { flag: "li:clemence=lettre", gold: 5, ep: ["perso", 700] }, to: "LI_Q_clemence_lettre" }, lose: { fx: { flag: "li:clemence=lettre", gold: 2 }, to: "LI_Q_clemence_fade" } },
      { label: "Lui dire d'écrire elle-même, avec ses mots", fx: { flag: "li:clemence=elle", ep: ["perso", 900] }, to: "LI_Q_clemence_elle" },
    ] }),
  LI_Q_clemence_lettre: P("vasselin", { title: "En vers",
    text: ["Tu l'écris en une heure, dans sa chambre, avec elle qui lit par-dessus ton épaule et rougit à chaque rime. C'est une belle lettre. C'est même une très belle lettre. En la pliant, tu te rends compte que c'est la première chose sincère que tu écris depuis un an, et qu'elle est adressée à un inconnu, de la part d'une autre."],
    choices: [{ label: "Revenir à la cour", fx: { quest: "LI_Q_clemence" }, to: "LI_cour" }] }),
  LI_Q_clemence_fade: P("vasselin", { title: "Une lettre de cour",
    text: ["Tu écris une lettre de cour. Les rimes tombent juste, les compliments aussi. Clémence la lit, la relit, et dit « Merci » d'une petite voix déçue. Elle a raison. Il n'y a rien dedans."],
    choices: [{ label: "Revenir à la cour", fx: { quest: "LI_Q_clemence" }, to: "LI_cour" }] }),
  LI_Q_clemence_elle: P("vasselin", { title: "Ses mots",
    text: [
      "Elle proteste. Tu insistes. Tu lui donnes du papier, une plume, et tu t'en vas. Le soir, elle vient te montrer : six lignes, pleines de fautes, sans une rime. *Vous m'avez aidée à descendre. Je pense à vos mains depuis. Je ne sais pas votre nom. Moi c'est Clémence. Si vous voulez répondre, quelqu'un peut vous lire ceci.*",
      "C'est mieux que tout ce que tu as écrit cette année. Tu ne le lui dis pas. Tu lui dis seulement de l'envoyer.",
    ],
    choices: [{ label: "Revenir à la cour", fx: { quest: "LI_Q_clemence" }, to: "LI_cour" }] }),

  // ------------------------------------------------------------ Pie · Mouche
  PI_Q_mouche: P("pallanche", { title: "Mouche",
    fx: { questSeen: "PI_Q_mouche" },
    text: [
      "Mouche a huit ans, pas de parents, et la plus petite main de Pallanche. C'est toi qui lui as appris à couper une bourse. Elle t'attend sur les toits du marché aux Toiles, assise sur une gouttière, les pieds dans le vide.",
      "« Pie, dit-elle. J'ai fait une bêtise. » Elle a de quoi manger, ça se voit : un pain entier, frais, à côté d'elle. « Je suis allée au Bureau. Ils m'ont donné six sous pour un souvenir. J'en ai pris un que je n'aimais pas. » Elle fronce les sourcils. « Le problème, c'est que je ne sais plus lequel. Et depuis, j'ai peur des chiens. Je n'avais pas peur des chiens. »",
    ],
    choices: [
      { label: "Aller voler le reçu au Bureau", test: { dom: "discretion", label: "Le Bureau", help: [{ if: { seen: "PI_bureau" }, v: 15 }] },
        win: { fx: { flag: "pi:mouche=recu", ep: ["perso", 800] }, to: "PI_Q_mouche_recu" }, lose: { fx: { pv: -2 }, to: "PI_Q_mouche_rate" } },
      { label: "Lui dire que ça passera", fx: { flag: "pi:mouche=rien" }, to: "PI_Q_mouche_rien" },
    ] }),
  PI_Q_mouche_recu: P("pallanche", { title: "Le reçu",
    text: [
      "Le registre des reçus est dans une armoire derrière le comptoir, et la serrure ne mérite pas son nom. Tu trouves la ligne du jour : *Mouche, dite Mouche, huit ans environ. Cédé : le chien des Poissonniers, l'hiver dernier. Six sous.*",
      "Tu lis ça à Mouche, sur le toit, le soir. Elle écoute. Elle ne se souvient pas. Mais quand tu lui racontes, à ta façon, comment le chien des Poissonniers l'a coincée dans une impasse et comment elle s'est sauvée par le toit, elle hoche la tête, lentement. « C'est pour ça que j'ai peur, dit-elle. Ça a un sens, maintenant. » Elle a l'air soulagée. Elle a toujours peur des chiens.",
    ],
    choices: [{ label: "Revenir dans les bas-quartiers", fx: { quest: "PI_Q_mouche", conf: { pie: 5 } }, to: "PI_ville" }] }),
  PI_Q_mouche_rate: P("pallanche", { title: "Le chien de garde",
    text: ["Le Bureau a un chien de garde, la nuit. Un gros. Tu ressors par la lucarne avec un bout de ton pantalon en moins et une morsure au mollet, et tu rentres raconter ça à Mouche, qui rit tellement qu'elle en oublie d'avoir peur, pendant cinq bonnes minutes."],
    choices: [{ label: "Revenir dans les bas-quartiers", fx: { quest: "PI_Q_mouche" }, to: "PI_ville" }] }),
  PI_Q_mouche_rien: P("pallanche", { title: "Ça passera",
    text: ["« Ça passera », dis-tu. Elle te croit, parce que c'est toi. Tu partages son pain. Au-dessous, dans la rue, un chien aboie, et elle se serre contre toi sans s'en rendre compte. Tu ne bouges pas. Tu ne sais pas quoi faire d'autre."],
    choices: [{ label: "Revenir dans les bas-quartiers", fx: { quest: "PI_Q_mouche" }, to: "PI_ville" }] }),

  // ------------------------------------------------------------ Ysolde · le cheval de ton père
  YS_Q_cheval: P("brenne", { title: "Sombrevent",
    fx: { questSeen: "YS_Q_cheval" },
    text: [
      "Derrière l'écurie, l'intendant a fait attacher un vieux cheval noir au poteau du boucher. Il a vingt-deux ans, les genoux couronnés, une salière au-dessus de chaque œil. Sombrevent. Le cheval de ton père, qui l'a monté à chacune de ses campagnes. Le jour où ton père est mort, c'est Sombrevent qui l'a ramené au fort, en travers de la selle, sans que personne le conduise.",
      "« La garnison manque de viande, capitaine, dit l'intendant. Et il ne sert plus à rien. »",
      "Sombrevent tourne la tête vers toi. Il ne te reconnaît peut-être pas. Toi, tu le reconnais.",
    ],
    choices: [
      { label: "« Il sert à quelque chose. Détachez-le. »", fx: { flag: "ys:cheval=garde", food: -1, ep: ["perso", 700] }, to: "YS_Q_cheval_garde" },
      { label: "Le faire toi-même, proprement, puisqu'il faut le faire", fx: { flag: "ys:cheval=abattu", food: 2, ep: ["perso", 500] }, to: "YS_Q_cheval_abattu" },
    ] }),
  YS_Q_cheval_garde: P("brenne", { title: "Le pré du bas",
    text: [
      "L'intendant obéit, en pinçant les lèvres. Tu emmènes Sombrevent toi-même au pré du bas, sous les remparts, où l'herbe est encore bonne. Il te suit sans longe, à ton épaule, comme il suivait ton père.",
      "Il ne sert à rien. Il mangera de l'avoine que les hommes auraient pu manger. Tu le sais. Tu restes quand même un moment au bord du pré, à le regarder brouter, et pour la première fois depuis ton retour à Brenne, tu as l'impression d'être chez toi.",
    ],
    choices: [{ label: "Revenir dans la cour", fx: { quest: "YS_Q_cheval" }, to: "YS_cour" }] }),
  YS_Q_cheval_abattu: P("brenne", { title: "Le poteau",
    text: ["Tu renvoies le boucher. Tu prends le merlin. Tu parles d'abord à Sombrevent, à l'oreille, et tu lui dis des choses que tu ne dirais à personne. Puis tu le fais, d'un coup, sans trembler, comme ton père te l'a appris. Le soir, la garnison mange, et l'intendant te salue plus bas que d'habitude. Tu ne sais pas si c'est du respect."],
    choices: [{ label: "Revenir dans la cour", fx: { quest: "YS_Q_cheval" }, to: "YS_cour" }] }),

  // ------------------------------------------------------------ l'enfant · le mât de cocagne
  EN_Q_mat: P("sauvelune", { title: "Le mât de cocagne",
    fx: { questSeen: "EN_Q_mat" },
    text: [
      "Au bout de la place, le mât de cocagne : un tronc de sapin écorcé, haut comme trois hommes, enduit de suif. En haut, une couronne de foin avec, pendus, un jambon, une bouteille d'eau-de-vie, un couteau neuf et un ruban bleu.",
      "Les garçons du village s'y cassent les dents depuis midi. Le meilleur est arrivé aux deux tiers et a glissé jusqu'en bas sur le ventre, sous les rires. Le suif est noir de terre, maintenant, et plus personne n'ose.",
      "Tess Ferrand, au premier rang, les bras croisés, te regarde. Elle ne dit rien. Elle n'en a pas besoin.",
    ],
    choices: [
      { label: "Grimper", test: { dom: "nature", label: "Le mât", help: [{ if: { has: "passe:moulin" }, v: 10 }, { if: { has: "passe:alpage" }, v: 10 }] },
        win: { fx: { flag: "en:mat", ep: ["perso", 600] }, to: "EN_Q_mat_haut" }, lose: { to: "EN_Q_mat_bas" } },
      { label: "Laisser ça aux autres", refuse: true, to: "EN_place" },
    ] }),
  EN_Q_mat_haut: P("sauvelune", { title: "En haut",
    text: [
      "Tu frottes tes mains dans la poussière, tu serres le tronc entre tes genoux, et tu montes, une main, un genou, une main. À mi-hauteur, tu sens que tu glisses. Tu ne regardes pas en bas. Tu ne regardes pas Tess. Tu montes.",
      "En haut, il y a du vent, et tout Sauvelune sous toi : le moulin, le temple, les toits, les meules de foin. Tu restes là une seconde de trop, pour voir.",
      "Tu décroches le ruban bleu. Pas le jambon. On te hue gentiment. Tu redescends en glissant, et tu le donnes à Tess, qui le prend sans un mot et le noue dans ses cheveux.",
    ],
    choices: [{ label: "Revenir sur la place", fx: { quest: "EN_Q_mat" }, to: "EN_place" }] }),
  EN_Q_mat_bas: P("sauvelune", { title: "Sur le ventre",
    text: ["Tu arrives plus haut que le meilleur. Puis tu glisses, et tu redescends tout le mât sur le ventre, avec le suif noir dans ta chemise, sous les rires de tout Sauvelune. Tess rit aussi. Elle te tend la main pour te relever, et elle ne la lâche pas tout de suite."],
    choices: [{ label: "Revenir sur la place", fx: { quest: "EN_Q_mat" }, to: "EN_place" }] }),
};
