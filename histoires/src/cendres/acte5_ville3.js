// Act V · two more sights of Pallanche under the snow, off V_ville (the child leads, "tu"): the bakers' street where
// the ovens still burn (Gaspard), and the Pont-Neuf where the snow rises off the river. Plus, in Act III, the library
// of the dead in Valcendre's market and the fountain of the great square, and in Act IV the sergeant's last round at
// Pont-de-Saule.
var A = { act: "V", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var T = { act: "III", noLead: true };
function P3(o) { return Object.assign({}, T, o); }
module.exports = {
  V_v_fours: P({ title: "La rue des Fours", place: "pallanche",
    text: [
      "Rue des Fours, sous la neige, les fours brûlent. Ils brûlent seuls, sans une main pour les nourrir. Les boulangers sont devant, immobiles, la pelle à la main, souriants. Dans les fours, le pain cuit, et recuit, et noircit, et l'odeur de pain brûlé emplit la rue.",
      { with: "gaspard", text: "Gaspard entre dans le premier fournil. Il prend la pelle des mains du boulanger, doucement, comme on prend un enfant des bras d'une mère endormie. Il sort le pain noir. Il remet du bois. Il passe au fournil suivant. Il fait toute la rue, en silence. Derrière lui, l'odeur change. Ça sent le pain." },
      { without: "gaspard", text: "Tu entres dans le premier fournil. Tu sors le pain noir, à la pelle, et tu le jettes dans la neige. Tu en fais trois. Il y en a cinquante, d'après les cheminées. Il faut monter. Tu laisses les autres brûler." },
    ],
    choices: [{ fx: { ep: ["perso", 500], flag: "v:fours" }, back: "V_ville" }] }),
  V_v_pont: P({ title: "Le Pont-Neuf", place: "pallanche",
    text: [
      "Sur le Pont-Neuf, la neige monte. Elle sort de la rivière, en flocons, de la Pallante noire, et elle monte, lentement, vers le ciel, vers la colonne au-dessus de la tour. La rivière se vide de ce qu'elle a vu : six cents ans de noyés, de lavandières, de bateliers, de baisers sous les arches.",
      "Sous la deuxième arche, le tripot de planches est vide. Les dés sont sur la table. Un six et un as.",
    ],
    choices: [
      { label: "Attraper un flocon", fx: { ep: ["perso", 300] }, to: "V_v_pont_flocon" },
      { label: "Descendre au tripot, sous l'arche", to: "V_v_pont_des" },
      { back: "V_ville" },
    ] }),
  V_v_pont_des: P({ title: "Les dés", place: "pallanche",
    text: [
      "Tu prends les dés. Ils sont froids. Tu les lances. Un six et un as, encore. Tu les relances. Un six et un as. Ils ne savent plus faire que ça : le dernier coup joué ici, avant la neige. Des dés pipés par la mémoire. Tu les laisses sur la table, comme tu les as trouvés.",
    ],
    choices: [{ back: "V_ville" }] }),
  V_v_pont_flocon: P({ title: "Un flocon", place: "pallanche",
    text: ["Tu tends la main. Un flocon s'y pose, intact, gros comme une lentille. Dedans, le temps d'un battement de cœur, tu vois une femme qui lave du linge, à genoux sur la berge, il y a deux cents ans, et qui chante, et qui lève la tête vers toi comme si elle t'avait vu. Puis le flocon repart, vers le haut. Tu le laisses aller : il est libre. Mais tu l'as vue."],
    choices: [{ back: "V_ville" }] }),

  III_v_fontaine: P3({ title: "La fontaine de la grand-place", place: "valcendre",
    text: [
      "Au coin de la grand-place, une fontaine, un bassin rond de dix pas de tour. De l'eau qui coule, la seule eau de Valcendre, claire, qui fait du bruit. Des enfants de la ville, des enfants morts depuis trois cents ans, y font flotter des bateaux de papier.",
      "Sur chaque bateau, un nom écrit à l'encre. Ils les lancent, ils les regardent faire le tour du bassin, et quand un bateau coule, ils applaudissent. « Ça veut dire que quelqu'un, en haut, a pensé à lui, dit une fillette. Le nom repart. Il est content. »",
    ],
    choices: [
      { label: "Faire un bateau, toi aussi", fx: { ep: ["perso", 400] }, to: "III_v_fontaine_bateau" },
      { back: "III_v_porte" },
    ] }),
  III_v_fontaine_bateau: P3({ title: "Un bateau de papier", place: "valcendre",
    text: [
      "La fillette te donne une feuille. Tu plies le bateau comme Pim te l'a appris, au bief, un dimanche. Tu écris dessus un nom : celui de Pim, et le tien reste dans ta poche. Tu le poses sur l'eau.",
      "Il fait un tour. Deux. Au troisième, il penche, et il coule, d'un coup, en silence. Les enfants applaudissent. Quelqu'un, là-haut, a donc pensé à Pim. Tu espères que cela marche aussi dans l'autre sens : que, quelque part, quelqu'un est assis au bord d'un bief, et pense à toi.",
    ],
    choices: [{ back: "III_v_porte" }] }),

  IV_ps_ronde: P({ takes: "evening", act: "IV", title: "La ronde du sergent", place: "pontsaule",
    text: [
      "Le soir, le sergent roux fait sa ronde, seul, une lanterne à la main, sa hallebarde sur l'épaule. Il passe le pont, il fait le tour de la halle, il vérifie les portes. Le bourg n'offre personne à arrêter. Il fait la ronde quand même.",
      "Il te propose de l'accompagner. Vous marchez. Il parle peu. À chaque porte, il frappe deux coups, et il dit le nom de ceux qui habitent là. Tous. « Pour qu'ils sachent que quelqu'un sait, dit-il. La nuit, c'est là qu'on oublie le plus. »",
    ],
    choices: [
      { label: "Finir la ronde avec lui", fx: { ep: ["perso", 400] }, to: "IV_ps" },
      { label: "Lui demander pourquoi il saute une porte", to: "IV_ps_ronde_porte" },
    ] }),
  IV_ps_ronde_porte: P({ act: "IV", title: "La porte sans nom", place: "pontsaule",
    text: [
      "Au bout de la rue du pont, il passe une porte sans frapper. Une porte bleue, propre, avec un pot de géraniums sur le seuil. Tu lui demandes. Il s'arrête. Il revient sur ses pas. Il regarde la porte longtemps.",
      "« Aucune idée, dit-il. Il y a quelqu'un, là. Il y a toujours eu quelqu'un. Les géraniums sont arrosés. » Il lève la main, pour frapper. Le nom reste introuvable. Il frappe quand même, deux coups. « Bonne nuit, dit-il à la porte. Toi. » Derrière, une lampe s'allume.",
    ],
    choices: [{ label: "Finir la ronde avec lui", fx: { ep: ["perso", 500] }, to: "IV_ps" }] }),
};
