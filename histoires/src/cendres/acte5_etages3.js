// Act V · more of the tower on the last night (the child leads, "tu" masculine): the pages' dormitory and the hall of
// seals, off V_t_cessions; and a way past the Gleaners of the archives for whoever learned, under Saint-Gilles, what
// a Gleaner will eat instead of names (iv:ossuaire=nourri).
var A = { act: "V", noLead: true, place: "pallanche" };
function P(o) { return Object.assign({}, A, o); }
var BUREAU = [{ label: "Revenir dans le Bureau", to: "V_t_cessions" }];
module.exports = {
  V_e_dortoir: P({ title: "Le dortoir des pages",
    text: [
      "Tout en haut, sous les combles, un dortoir. Cent lits de fer, en quatre rangées, cent couvertures grises pliées au carré. Les pages ne sont pas là : elles écrivent, en dessous. Les lits n'ont pas servi cette nuit.",
      "Sous chaque lit, gravé dans le plancher avec un clou ou une épingle, quelque chose. Pas des noms : on n'a pas le droit. Des dessins. Un chat. Une maison. Un bateau. Une femme avec un chignon. Ce que chaque enfant avait gardé, en dessous, en cachette, là où les greffiers ne regardent pas.",
      { with: "linette", text: "Linette va droit au onzième lit du deuxième rang. Elle s'accroupit. Elle ne te montre pas ce qu'il y a dessous. Elle le touche du bout des doigts, et elle se relève, et elle dit : « Il y est encore. » C'est tout." },
    ],
    choices: [
      { label: "Graver quelque chose, toi aussi, sous un lit vide", fx: { ep: ["perso", 400], flag: "v:dortoir" }, to: "V_e_dortoir_grave" },
      { label: "Revenir dans le Bureau", to: "V_t_cessions" },
    ] }),
  V_e_dortoir_grave: P({ title: "Sous le lit",
    text: ["Tu trouves un lit dont le plancher, dessous, est vierge. Un enfant qui n'a rien gardé, ou qui n'a pas osé. Tu prends ton couteau. Tu graves une roue de moulin, avec ses aubes, de travers. Puis, à côté, petit, un sifflet, un chien, une étoile. Ce que tu veux. Ce n'est pas pour toi. C'est pour le prochain enfant qui dormira là, s'il y en a un, et qui regardera dessous, une nuit, et qui saura que quelqu'un est passé avant lui et n'a pas oublié."],
    choices: BUREAU }),
  V_e_sceaux: P({ title: "La salle des sceaux",
    text: [
      "Une petite salle carrée, aux murs couverts de casiers, et dans chaque casier, un sceau d'argent. Le sceau de chaque greffier de la Chancellerie, depuis la fondation. On les range ici à leur mort. Les plus vieux sont noirs. Les plus récents brillent encore.",
      "Sur chaque sceau, gravé à l'envers, un emblème, et autour, un nom. Ici, on a le droit d'avoir un nom. Il faut juste être mort.",
      { with: "hylas", text: "Hylas passe la main le long des casiers, à tâtons, jusqu'à un casier vide, au bout du dernier rang. Il y a une étiquette, au-dessus, déjà écrite. Il la lit du bout des doigts. C'est la sienne. Ils ont préparé la place." },
    ],
    choices: [
      { label: "Laisser Hylas faire ce qu'il veut de son sceau", hide: { not: { present: "hylas" } }, to: "V_e_sceaux_hylas" },
      { label: "Chercher le sceau de Mordace", to: "V_e_sceaux_mordace" },
      { label: "Revenir dans le Bureau", to: "V_t_cessions" },
    ] }),
  V_e_sceaux_hylas: P({ title: "Le sceau de Hylas",
    text: [
      "Hylas décroche son sceau de sa ceinture. Le sceau d'argent qu'il porte depuis l'âge de quatorze ans, qui a scellé des milliers de cessions. Il le soupèse. Il le pose sur la table, au milieu de la salle.",
      "Puis il prend un autre sceau, au hasard, un vieux, tout noir, dans un casier, et il frappe. Une fois. Le sien se fend en deux, net, comme une noix. Il ramasse les deux moitiés. Il les met dans le casier vide, sous son étiquette. « Voilà, dit-il. La place est prise. Ils ne pourront plus m'y mettre. »",
    ],
    choices: [{ label: "Revenir dans le Bureau", fx: { flag: "v:sceau_hylas", conf: { hylas: 10 }, ep: ["perso", 800] }, to: "V_t_cessions" }] }),
  V_e_sceaux_mordace: P({ title: "Le casier de Mordace",
    text: ["Il n'y en a pas. Le Greffier-Majeur n'est pas mort, son sceau est là-haut, à sa ceinture. Mais au bout du dernier rang, un casier est déjà étiqueté à son nom, comme celui des autres. Dedans, on a déjà mis quelque chose. Un petit sceau, de bois, taillé au couteau, maladroitement : un chien, gravé à l'envers. Un sceau d'enfant. Il l'a rangé là lui-même, à onze ans, peut-être, le jour où on lui a donné le vrai. Tu le laisses où il est."],
    choices: BUREAU }),
  V_t_nourrir: P({ title: "Ce qu'ils mangent",
    text: [
      "Tu as déjà vu un Glaneur manger autre chose que des noms. Sous Saint-Gilles, un carnet de fossoyeur, page après page, les jours ordinaires de quelqu'un. Ils ont faim. C'est tout ce qu'ils sont.",
      "Autour de toi, sur six étages, des registres. Des registres de comptes, des inventaires de chandelles, des relevés de cire, des listes de fournitures, trois siècles de papier sans un seul nom dedans. Tu en prends un. Tu l'ouvres. Tu le tends vers le premier Glaneur.",
    ],
    choices: [
      { label: "Les nourrir, registre après registre, en reculant vers l'escalier", test: { dom: "magie", label: "Les Glaneurs", help: [{ if: { present: "gaspard" }, v: 20 }, { if: { present: "givre" }, v: 10 }, { if: { has: "glaneur_petit:nourri" }, v: 10 }] },
        win: { fx: { flag: "v:glaneurs_nourris", ep: ["perso", 3000] }, to: "V_t_nourris" }, lose: { to: "V_t_glaneurs" } },
    ] }),
  V_t_nourris: P({ title: "Six étages de comptes",
    text: [
      "Le premier se penche, lèche la page. L'encre pâlit : *quatre livres de chandelles, à deux sous la livre.* Il lèche la suivante. Les autres s'approchent. Tu leur tends des registres, l'un après l'autre, et tu montes, une marche, puis une autre, en leur jetant des inventaires.",
      "Au sixième palier, il n'y a plus de comptes, plus de chandelles, plus de cire dans l'histoire de la tour. Les Glaneurs sont couchés sur les marches, repus, comme des chiens après la curée. Ils te regardent passer sans bouger.",
    ],
    choices: [{ label: "Monter au sommet", to: "V_t_sommet" }] }),
};
