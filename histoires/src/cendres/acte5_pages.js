// Act V · another way to stop the hundred pages of the scriptorium, meant for when Linette is not there (the child leads, "tu" masculine): go
// down to the second floor, find the grey register where the pages' names were taken, and read them out yourself,
// badly, one by one. Same flag as Linette's way (v:pages_nommees), opened from V_t_scriptorium when she is not there.
var A = { act: "V", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  V_t_gris: P({ title: "Le registre gris", place: "pallanche",
    text: [
      "Tu redescends au deuxième, en courant, dans l'escalier où les greffiers montent les feuilles. Ils ne te voient pas. Au fond du couloir, une porte marquée d'une plume grise. Une petite salle, sans fenêtre, avec un seul pupitre, et sur le pupitre, un registre relié de toile grise.",
      "*Registre des enfants trouvés, confiés à la Chancellerie pour y être formés à l'écriture.* Des colonnes. Une date, un lieu, un nom. Puis, dans la dernière colonne, un numéro : *Page Un, Page Deux, Page Trois.* Cent lignes. Cent noms barrés d'un trait fin.",
    ],
    choices: [
      { label: "Prendre le registre, et remonter", fx: { item: "registre_gris" }, to: "V_t_gris_remonter" },
    ] }),
  V_t_gris_remonter: P({ title: "Les cent noms", place: "pallanche",
    text: [
      "Tu remontes au quatrième. Les pages écrivent toujours, la même phrase, toujours plus vite. Tu ouvres le registre sur un pupitre vide. Les noms sont barrés, mais on les lit encore, sous le trait. Ils sont écrits d'une main de greffier, petite, serrée, pressée.",
      "Tu ne lis pas bien. Tu n'as jamais bien lu. Et il y en a cent.",
    ],
    choices: [
      { label: "Les lire, à voix haute, un par un", test: { dom: "savoir", label: "Les noms", diff: -10, help: [{ if: { present: "linette" }, v: 30 }, { if: { present: "hylas" }, v: 20 }, { if: { present: "pie" }, v: 10 }, { if: { present: "lisandre" }, v: 10 }, { if: { has: "v:archives=rendues" }, v: 10 }, { if: { has: "hy:page=nom" }, v: 10 }] },
        win: { fx: { flag: "v:pages_nommees", ep: ["perso", 2000], drop: "registre_gris" }, to: "V_t_gris_noms" },
        lose: { fx: { flag: "v:pages_rate" }, to: "V_t_encre" } },
    ] }),
  V_t_gris_noms: P({ title: "Un par un", place: "pallanche",
    text: [
      "Tu lis le premier nom. *Mathieu, trouvé sous le porche de Saint-Gilles.* Rien ne se passe. Tu le relis, plus fort. Au troisième rang, une page lève la tête. Un garçon, le crâne rasé, une tache d'encre sur la joue. Il te regarde. Sa plume s'arrête.",
      "Tu lis le deuxième. Tu te trompes, tu recommences. Une fille, au fond, lève la tête. Tu continues. Tu butes sur les noms longs, tu épelles ceux que tu ne sais pas dire, tu lis lentement, comme un enfant qui apprend. Ce n'est pas grave. Ils n'ont pas besoin qu'on lise bien. Ils ont besoin qu'on lise.",
      "Au centième, il n'y a plus une plume qui bouge dans la salle. Cent enfants te regardent, et la phrase s'arrête, au milieu, sur cent feuilles : *Cédé à la Couronne, pour la paix de...*",
      { with: "linette", text: "Linette, debout à côté de toi, te souffle les noms que tu n'arrives pas à lire. Elle ne les lit pas dans le registre. Elle les sait. Elle te laisse quand même les dire, toi, à voix haute. Elle dit qu'il faut que ce soit quelqu'un d'en haut." },
      { with: "hylas", text: "Hylas, de l'autre côté, a dit avec toi, à mi-voix, de mémoire, la moitié des noms avant que tu les lises. Il les connaissait. Il ne dit pas comment." },
    ],
    choices: [{ label: "Monter aux archives", to: "V_t_archives" }] }),
};
