// Act V · more of the tower on the last night (the child leads, "tu" masculine): the pages' dormitory and the hall of
// seals, off V_t_cessions; and a way past the Gleaners of the archives for whoever learned, under Saint-Gilles, what
// a Gleaner will eat instead of names (iv:ossuaire=nourri).
var A = { act: "V", noLead: true, place: "pallanche" };
function P(o) { return Object.assign({}, A, o); }
var BUREAU = [{ back: "V_t_cessions" }];
module.exports = {
  V_e_dortoir: P({ title: "Le dortoir des pages",
    text: [
      "Tout en haut, sous les combles, un dortoir. Cent lits de fer, en quatre rangées, cent couvertures grises pliées au carré. Les pages écrivent, en dessous. Les lits sont restés faits cette nuit, les coins des couvertures pliés à l'équerre.",
      "Sous chaque lit, gravé dans le plancher avec un clou ou une épingle, quelque chose. Les noms sont interdits. Alors, des dessins. Un chat. Une maison. Un bateau. Une femme avec un chignon. Ce que chaque enfant avait gardé, en dessous, en cachette, là où les greffiers ne regardent pas.",
      { with: "linette", text: "Linette va droit au onzième lit du deuxième rang. Elle s'accroupit. Ce qu'il y a dessous, elle le garde pour elle. Elle le touche du bout des doigts, et elle se relève, et elle dit : « Il y est encore. » C'est tout." },
    ],
    choices: [
      { label: "Graver quelque chose, toi aussi, sous un lit vide", fx: { ep: ["perso", 400] }, to: "V_e_dortoir_grave" },
      { back: "V_t_cessions" },
    ] }),
  V_e_dortoir_grave: P({ title: "Sous le lit",
    text: ["Tu trouves un lit dont le plancher, dessous, est vierge. Un enfant aux mains vides, ou trop craintif. Tu prends ton couteau. Tu graves une roue de moulin, avec ses aubes, de travers. Puis, à côté, petit, un sifflet, un chien, une étoile. Ce que tu veux. Le dessin est pour le prochain enfant qui dormira là, s'il y en a un, et qui regardera dessous, une nuit, et qui saura que quelqu'un est passé avant lui et n'a pas oublié."],
    choices: BUREAU }),
  V_e_sceaux: P({ title: "La salle des sceaux",
    text: [
      "Une petite salle carrée, aux murs couverts de casiers, et dans chaque casier, un sceau d'argent. Le sceau de chaque greffier de la Chancellerie, depuis la fondation. On les range ici à leur mort. Les plus vieux sont noirs comme du charbon. Les plus récents brillent encore. Tu estimes leur nombre à quatre cents.",
      "Sur chaque sceau, gravé à l'envers, un emblème, et autour, un nom. Ici, le nom est permis. La condition est d'être mort.",
      { with: "hylas", text: "Hylas passe la main le long des casiers, à tâtons, jusqu'à un casier vide, au bout du dernier rang. Il y a une étiquette, au-dessus, déjà écrite. Il la lit du bout des doigts. C'est la sienne. Ils ont préparé la place." },
    ],
    choices: [
      { label: "Laisser Hylas faire ce qu'il veut de son sceau", hide: { not: { present: "hylas" } }, to: "V_e_sceaux_hylas" },
      { label: "Chercher le sceau de Mordace", to: "V_e_sceaux_mordace" },
      { back: "V_t_cessions" },
    ] }),
  V_e_sceaux_hylas: P({ title: "Le sceau de Hylas",
    text: [
      "Hylas décroche son sceau de sa ceinture. Le sceau d'argent qu'il porte depuis l'âge de quatorze ans, qui a scellé des milliers de cessions. Il le soupèse. Il le pose sur la table, au milieu de la salle.",
      "Puis il prend un autre sceau, au hasard, un vieux, tout noir, dans un casier, et il frappe. Une fois. Le sien se fend en deux, net, comme une noix. Il ramasse les deux moitiés. Il les met dans le casier vide, sous son étiquette. « Voilà, dit-il. La place est prise. Ils ne pourront plus m'y mettre. »",
    ],
    choices: [{ fx: { conf: { hylas: 10 }, ep: ["perso", 800] }, back: "V_t_cessions" }] }),
  V_e_sceaux_mordace: P({ title: "Le casier de Mordace",
    text: ["La recherche est vaine : le Greffier-Majeur est vivant, son sceau est là-haut, à sa ceinture. Mais au bout du dernier rang, un casier est déjà étiqueté à son nom, comme celui des autres. Dedans, on a déjà mis quelque chose. Un petit sceau, de bois, taillé au couteau, maladroitement : un chien, gravé à l'envers. Un sceau d'enfant. Il l'a rangé là lui-même, à onze ans, peut-être, le jour où on lui a donné le vrai. Tu le laisses où il est."],
    choices: BUREAU }),
  V_t_nourrir: P({ title: "Ce qu'ils mangent",
    text: [
      "Tu as déjà vu un Glaneur manger autre chose que des noms. Sous Saint-Gilles, un carnet de fossoyeur, page après page, les jours ordinaires de quelqu'un. Ils ont faim. Ils sont faits de cette faim, et de rien d'autre.",
      "Autour de toi, sur six étages, des registres. Des registres de comptes, des inventaires de chandelles, des relevés de cire, des listes de fournitures, trois siècles de papier vierge de tout nom. Tu en prends un. Tu l'ouvres. Tu le tends vers le premier Glaneur.",
    ],
    choices: [
      { label: "Les nourrir, registre après registre, en reculant vers l'escalier", test: { dom: "magie", label: "Les Glaneurs", help: [{ if: { present: "gaspard" }, v: 20 }, { if: { present: "givre" }, v: 10 }, { if: { has: "glaneur_petit:nourri" }, v: 10 }] },
        win: { fx: { ep: ["perso", 3000] }, to: "V_t_nourris" }, lose: { to: "V_t_glaneurs" } },
    ] }),
  V_t_nourris: P({ title: "Six étages de comptes",
    text: [
      "Le premier se penche, lèche la page. L'encre pâlit : *quatre livres de chandelles, à deux sous la livre.* Il lèche la suivante. Les autres s'approchent. Tu leur tends des registres, l'un après l'autre, et tu montes, une marche, puis une autre, en leur jetant des inventaires.",
      "Au sixième palier, l'histoire de la tour a perdu ses comptes, ses chandelles et sa cire. Les Glaneurs sont couchés sur les marches, repus, comme des chiens après la curée. Ils te regardent passer, immobiles.",
    ],
    choices: [{ label: "Monter au sommet", to: "V_t_sommet" }] }),
};
