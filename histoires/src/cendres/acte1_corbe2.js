// Act I · Corbe's day in Pallanche, between her night in the stable by the north gate and the Nuit des Cloches (Corbe
// leads, "tu" feminine). Opened from CO_fin. A clan girl who cannot read in a city of signs: the shop signs, the
// cattle market, the river, the scribe at the corner who writes letters for those who cannot. The exit keeps CO_fin's
// effect (ch:corbe:2 → C_carrefour).
var CO = { act: "I", place: "pallanche", noLead: true };
function P(o) { return Object.assign({}, CO, o); }
var BACK = [{ back: "CO_V_ville" }];
module.exports = {
  CO_V_ville: P({ title: "La ville d'en bas", hub: true,
    text: [
      { first: true, text: "Le jour, Pallanche est pire que la nuit. Il y a des gens partout, qui ne se regardent pas, qui se bousculent sans s'excuser, qui crient des choses à personne. Les maisons sont collées les unes aux autres, si hautes qu'on ne voit le ciel qu'en bande, tout en haut. Ça sent la fumée, le crottin, le pain, la pisse, le poisson. Tout à la fois." },
      "Partout, des signes. Sur les portes, sur les murs, sur des planches pendues au-dessus des boutiques. Des traits noirs, serrés, qui veulent dire quelque chose à tout le monde, sauf à toi.",
    ],
    choices: [
      { label: "Les planches peintes, au-dessus des boutiques", hide: { seen: "CO_V_enseignes" }, to: "CO_V_enseignes" },
      { label: "Le marché aux bêtes, à l'odeur", hide: { seen: "CO_V_marche" }, to: "CO_V_marche" },
      { label: "La rivière, au bout de la rue", hide: { seen: "CO_V_riviere" }, to: "CO_V_riviere" },
      { label: "Un homme assis à une table, au coin d'une place, avec une plume", hide: { seen: "CO_V_ecrivain" }, to: "CO_V_ecrivain" },
      { label: "Un cercle de badauds, devant une taverne, et un ours", hide: { seen: "CO_V_ours" }, to: "CO_V_ours" },
      { label: "Revenir à l'écurie, et attendre la nuit", fx: { flag: "ch:corbe:2" }, to: "C_carrefour", big: true },
    ] }),
  CO_V_enseignes: P({ title: "Les enseignes",
    text: [
      "Au-dessus des boutiques, il n'y a pas que des traits. Il y a des images. Une botte. Une clé. Un pain. Un gros poisson doré. Des ciseaux ouverts. Tu les regardes, une à une, et tu comprends : chez le pain, on vend du pain. Chez la clé, on fait des clés. Les gens d'ici savent lire les traits, mais ils ont gardé les images, pour les autres. Pour ceux comme toi.",
      "Ça te fait quelque chose. Tu ne sais pas quoi. Comme si quelqu'un, il y a longtemps, dans cette ville, avait pensé à toi.",
    ],
    choices: [
      { label: "Entrer chez la clé", fx: { ep: ["perso", 200] }, to: "CO_V_cle" },
      { back: "CO_V_ville" },
    ] }),
  CO_V_cle: P({ title: "Chez la clé",
    text: ["Un vieil homme, des besicles au bout du nez, lime une clé dans un étau. Il lève les yeux. Il voit tes peintures, tes pieds nus, ton couteau. Il ne s'affole pas. « Une serrure à ouvrir ? » Tu secoues la tête. Tu montres l'enseigne, dehors, puis lui. Il comprend. Il rit. « C'est mon grand-père qui l'a peinte. Il ne savait pas lire non plus. » Il te donne une clé tordue, ratée, de son panier de rebuts. « Tiens. Elle n'ouvre rien. Mais c'est une clé. »"],
    choices: BACK }),
  CO_V_marche: P({ title: "Le marché aux bêtes",
    text: [
      "Le marché aux bêtes, enfin une odeur que tu connais. Des vaches, des cochons, des moutons aux oreilles fendues, des chevaux qu'on fait trotter au licol. Des hommes qui crient des chiffres et se tapent dans la main.",
      "Dans un enclos, à l'écart, un renne. Un seul. Vieux, la ramure cassée, la robe mitée. Un marchand l'a acheté à un clan, quelque part au nord, il y a longtemps, pour le montrer dans les foires. Il est attaché court. Il regarde le nord. Il te sent. Il tourne la tête vers toi, et il brame, une fois, doucement.",
    ],
    choices: [
      { label: "Lui chanter le chant des troupeaux, tout bas", fx: { ep: ["perso", 400], flag: "corbe:renne_ville" }, to: "CO_V_renne" },
      { back: "CO_V_ville" },
    ] }),
  CO_V_renne: P({ title: "Le chant des troupeaux",
    text: ["Tu t'accroupis contre l'enclos. Tu chantes, tout bas, le chant qu'on chante aux rennes le soir, pour les ramener vers le camp. Il s'approche. Il pose son museau sur ta main, à travers les planches. Le marchand, plus loin, te regarde, les sourcils froncés. Il ne dit rien. Quand tu te relèves, le renne ne regarde plus le nord. Il te regarde partir. C'est pire. Tu ne te retournes pas."],
    choices: BACK }),
  CO_V_riviere: P({ title: "La rivière",
    text: [
      "Au bout de la rue, la Pallante. Tu n'as jamais vu autant d'eau. Les torrents des Combes sont étroits, blancs, ils crient. Celle-ci est large, brune, et elle ne dit rien. Elle avance. Elle porte des bateaux, des planches, des choses mortes, et elle s'en moque.",
      "Des femmes lavent du linge, à genoux sur les pierres. Elles chantent. Une d'elles te fait signe : il y a de la place. Tu t'agenouilles. Tu plonges les mains. L'eau n'est pas froide. Elle n'est pas propre non plus. Tu te laves le visage quand même. Tes peintures coulent, un peu, et s'en vont avec le reste.",
    ],
    choices: [{ fx: { ep: ["perso", 200] }, back: "CO_V_ville" }] }),
  CO_V_ecrivain: P({ title: "L'écrivain public",
    text: [
      "Au coin d'une place, un homme assis à une petite table, une plume, de l'encre, des feuilles. Devant lui, une file de gens : une servante, un vieux soldat, une femme avec un bébé. Chacun lui parle à voix basse, et il écrit. Ce qu'ils disent, il le met en traits. Puis il plie la feuille, et ils paient.",
      "C'est son métier. Écrire à la place de ceux qui ne savent pas. Tu fais la queue. Tu ne sais pas pourquoi. Quand ton tour arrive, il lève les yeux. « Une lettre ? Pour qui ? »",
    ],
    choices: [
      { label: "« Pour ma mère. Askel. Au clan du Corbeau. »", fx: { gold: -1, ep: ["perso", 400], flag: "corbe:lettre_askel" }, to: "CO_V_ecrivain_lettre" },
      { label: "« Écris mon nom. Juste mon nom. »", fx: { gold: -1, ep: ["perso", 400], item: "nom_corbe" }, to: "CO_V_ecrivain_nom" },
      { back: "CO_V_ville" },
    ] }),
  CO_V_ecrivain_lettre: P({ title: "La lettre",
    text: ["Tu dictes. Tu ne sais pas quoi dire, d'abord. Puis tu dis : la ville, les signes, la rivière, le renne dans l'enclos, le garde en noir. Il écrit tout. À la fin, il te relit. Tu écoutes tes propres mots dans sa bouche, et ils sont devenus autres, plus droits, plus sûrs que toi. « Elle sait lire, votre mère ? » Non. « Alors il faudra que quelqu'un la lui lise. » Il plie la feuille. Tu la ranges contre ta peau. Tu ne sais pas qui la lui lira. Tu la garderas en attendant."],
    choices: BACK }),
  CO_V_ecrivain_nom: P({ title: "Ton nom",
    text: ["Il te demande comment ça s'écrit. Tu ne sais pas. Il réfléchit, il essaie, il dit les lettres à voix haute en les traçant. *C. O. R. B. E.* Il te tend la feuille. Cinq signes noirs, au milieu de tout ce blanc. C'est toi. Tu le regardes longtemps. Tu ne le reconnais pas. Tu le plies en quatre, puis en huit. Tu le glisses dans ta ceinture. Tu sais que tu ne le perdras pas."],
    choices: BACK }),
};
