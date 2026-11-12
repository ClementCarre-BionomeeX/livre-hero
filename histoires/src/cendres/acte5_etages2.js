// Act V · two more rooms of the tower on the last night, off the Bureau des Cessions: Mordace's own cell (a child's
// drawing of a house pinned to the wall: item dessin_mordace, a second way to reach him at the top), and the clock
// room, where the tower's hours are struck. The child leads ("tu").
var A = { act: "V", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  V_e_chambre: P({ title: "La cellule", place: "pallanche",
    text: [
      "Une porte étroite, au troisième, que rien ne distingue des autres. Derrière, une cellule. Un lit de planches, une couverture grise pliée au carré, une table, une chaise, une cruche. Rien d'autre. C'est la chambre du Greffier-Majeur. On dirait celle d'un novice.",
      "Au mur, au-dessus du lit, une seule chose, épinglée. Un dessin d'enfant, au crayon, sur un papier jauni, cassé aux plis. Une maison. Des volets coloriés en bleu, avec application, sans dépasser. Un arbre dans la cour, aux grandes feuilles découpées. Un puits. Un chien jaune, très gros, plus gros que la maison.",
      "En bas, d'une écriture d'écolier : *Ma maison. M., onze ans.*",
      { if: { all: [{ has: "hylas:mahaut" }, { present: "hylas" }] }, text: "Hylas passe les doigts sur le papier, sans le toucher tout à fait. « Mahaut m'en avait parlé, dit-il. Le figuier, le puits, le chien jaune. Il lui décrivait sa maison tous les soirs, à onze ans, pour ne pas l'oublier. » Il se tait. « Il l'a cédée. Mais il a gardé le dessin. Il ne sait plus ce que c'est. Il l'a gardé quand même. »" },
    ],
    choices: [
      { label: "Prendre le dessin", fx: { item: "dessin_mordace", ep: ["perso", 800] }, to: "V_e_chambre_dessin" },
      { label: "Le laisser à son mur", to: "V_t_cessions" },
    ] }),
  V_e_chambre_dessin: P({ title: "Le papier", place: "pallanche",
    text: ["Tu ôtes l'épingle. Le papier est léger, presque rien. Il y a, au dos, une tache de pomme, et l'empreinte d'un pouce d'enfant dans le crayon. Tu le plies en suivant les plis anciens, pour ne pas en faire de nouveaux, et tu le glisses contre ta poitrine, sous ta chemise."],
    choices: [{ back: "V_t_cessions" }] }),

  V_e_horloge: P({ title: "La salle de l'horloge", place: "pallanche",
    text: [
      "Sous le clocher de la tour, la salle de l'horloge. Des roues dentées, grandes comme des meules, qui tournent lentement dans un bruit de moulin. Des poids de fonte qui descendent dans un puits. Un marteau, qui attend l'heure pour frapper.",
      "Le cadran, vu de derrière, est à l'envers. Les aiguilles avancent. Minuit approche. À minuit, quelque chose doit s'achever, là-haut. Toute la tour l'attend, tu le sens dans les murs. Et c'est l'horloge qui le sonnera.",
    ],
    choices: [
      { label: "Bloquer les roues", test: { dom: "nature", label: "Les roues", help: [{ if: { present: "rodric" }, v: 20 }, { if: { present: "ysolde" }, v: 10 }, { if: { item: "corde" }, v: 10 }] },
        win: { fx: { flag: "v:horloge", ep: ["perso", 1500] }, to: "V_e_horloge_bloquee" }, lose: { fx: { pv: -3 }, to: "V_e_horloge_rate" } },
      { back: "V_t_cessions" },
    ] }),
  V_e_horloge_bloquee: P({ title: "Minuit moins le quart", place: "pallanche",
    text: [
      "Vous coincez une barre de fer entre deux dents de la grande roue. Elle force. Les poids tirent, la fonte gémit, toute la charpente craque. Puis la roue s'arrête. Le marteau reste levé.",
      "Il est minuit moins le quart, dans la tour. Il le restera. Ça ne changera peut-être rien. Mais quelque part, là-haut, quelqu'un qui écrit en comptant les coups devra compter sans eux.",
    ],
    choices: [{ back: "V_t_cessions" }] }),
  V_e_horloge_rate: P({ title: "La roue", place: "pallanche",
    text: ["La barre glisse. La roue l'arrache de tes mains, la plie comme une paille, la recrache contre le mur. Tu as les paumes en sang. Les poids continuent de descendre, lentement, dans le puits. L'horloge n'a même pas ralenti."],
    choices: [{ back: "V_t_cessions" }] }),

  V_t_dessin: P({ title: "Le dessin", place: "pallanche",
    text: [
      "Tu sors le dessin de ta chemise. Tu le déplies. Tu le poses sur le Grand Livre, sous sa plume, sur la ligne qu'il était en train d'écrire.",
      "Il le regarde. Il ne le reconnaît pas. Il lit l'écriture d'écolier, en bas, *M., onze ans*, et ses lèvres bougent. La plume s'arrête.",
      "« Je ne sais pas ce que c'est, dit-il. Je l'ai toujours eu. Je ne sais pas pourquoi. » Il touche le chien jaune, du bout du doigt. « Il est trop gros », dit-il. Et il a l'air surpris de l'avoir dit.",
    ],
    choices: [
      { label: "« C'était ta maison. Raconte. »", test: { dom: "social", label: "Mordace", help: [{ if: { has: "hylas:mahaut" }, v: 20 }, { if: { has: "v:plateau" }, v: 15 }, { if: { present: "hylas" }, v: 15 }, { if: { has: "iii:berceuse" }, v: 10 }] },
        win: { fx: { flag: "mordace:fin=pardonne", ep: ["perso", 2000] }, to: "V_t_pardonne" }, lose: { to: "V_t_dessin_rate" } },
    ] }),
  V_t_dessin_rate: P({ title: "Le chien jaune", place: "pallanche",
    text: ["Il regarde le dessin encore un moment. Puis il le plie, soigneusement, en suivant les plis, et il le glisse dans sa manche. « Merci », dit-il, poliment, comme on remercie un enfant qui vous a fait un cadeau. Et il reprend sa plume."],
    choices: [{ label: "Reculer", to: "V_t_mordace" }] }),
};
