// Act IV · two more corners of the camp at Brenne on the eve of battle (the child leads, "tu" masculine), off IV_br:
// the lime tree of the fort's yard, which the queen's engineers want for the palisade (with Ysolde; the stag stone,
// iv:tilleul=sauve or =abattu); and the well, where Hersende, the smith's wife, asks the child to carry word to her
// sister Perrine at Hautvent (iv:perrine, read in IV_br_hautvent).
var A = { act: "IV", noLead: true, place: "brenne" };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "IV_br" }];
module.exports = {
  IV_br_tilleul: P({ title: "Le tilleul du fort",
    text: [
      "Dans la cour du fort, au pied du tilleul, des sapeurs de la reine ont posé leurs haches et leurs cordes. Un ingénieur en manteau vert, un rouleau de plans sous le bras, montre l'arbre du doigt. La palissade du côté de la Lisse manque de pieux, et c'est le plus gros tronc à une lieue à la ronde.",
      "Ysolde s'est arrêtée net, au milieu de la cour. Elle regarde l'arbre. Elle se tait. Elle a cette façon de ne rien dire qui fait reculer les sergents.",
      { if: { has: "ysolde:cerf" }, text: "« Il y a une pierre, dans les racines, dit-elle enfin, à toi seul, très bas. Avec un cerf dessus. Et une devise que je n'ai jamais pu lire en entier. Si on l'abat, je la lirai. » Le veut-elle ? Elle le garde pour elle." },
    ],
    choices: [
      { label: "Parler à l'ingénieur, et lui trouver d'autres pieux", test: { dom: "social", label: "L'ingénieur", help: [{ if: { present: "rodric" }, v: 15 }, { if: { has: "iv:tap_promis" }, v: 10 }] },
        win: { fx: { flag: ["iv:tilleul", "iv:tilleul=sauve"], ep: ["perso", 800], conf: { ysolde: 5 } }, to: "IV_br_tilleul_sauve" }, lose: { fx: { flag: ["iv:tilleul", "iv:tilleul=abattu"] }, to: "IV_br_tilleul_abattu" } },
      { label: "Regarder Ysolde, et la laisser décider", fx: { flag: ["iv:tilleul", "iv:tilleul=abattu"], ep: ["perso", 400] }, to: "IV_br_tilleul_abattu" },
    ] }),
  IV_br_tilleul_sauve: P({ title: "Les pieux de Hautvent",
    text: [
      "Tu parles à l'ingénieur. De pieux, de chênes, de la forêt de Varre à deux heures de là, des tisserands de Hautvent qui ont des poutres de métier dont personne ne se sert plus. Il t'écoute d'abord avec impatience, puis avec intérêt, puis il déroule ses plans sur la margelle du puits et il fait des calculs. Il les roule. « Varre, dit-il. Deux charrettes. Ça ira. »",
      "Les sapeurs reprennent leurs haches et s'en vont. Ysolde n'a pas bougé. Quand ils sont partis, elle s'approche du tilleul, elle pose la main à plat sur l'écorce, comme on la pose sur l'épaule d'un vieux soldat. « Mon grand-père, dit-elle, préférait gêner les manœuvres. » Elle ne te remercie pas. Elle reste avec l'arbre. Tu la laisses.",
    ],
    choices: BACK }),
  IV_br_tilleul_abattu: P({ title: "La devise",
    text: [
      "Les haches mordent. Ysolde regarde, sans détourner les yeux, du premier coup au dernier. L'arbre tombe vers la Lisse, avec un bruit de vaisseau qui se brise, et toute la cour se tait. Les sapeurs ébranchent. On scie. Il ne reste qu'une souche, et dans les racines arrachées, une pierre grise, à nu, pour la première fois depuis cinquante ans.",
      "Ysolde s'agenouille. Elle gratte la terre avec ses doigts. Le cerf, la tête levée, les bois en couronne. Et autour, la devise entière, enfin : *JE GARDE LE PREMIER PONT.* Elle la lit à voix haute, une fois. Elle se relève. Elle a de la terre jusqu'aux poignets. Elle regarde vers la Lisse, vers le pont qu'elle a demandé. Elle se tait pour le reste de la soirée.",
    ],
    choices: BACK }),
  IV_br_puits: P({ title: "Le puits du fort",
    text: [
      "Au puits, les femmes des soldats tirent l'eau du soir. Une grosse femme aux bras rouges te dévisage, puis te fait signe. Hersende, la femme de Hugues le forgeron. Elle a appris que tu allais à Hautvent, ou que tu y étais allé, ou que tu irais : dans un camp, les nouvelles vont plus vite que les gens.",
      "« Ma sœur est là-bas, dit-elle. Perrine. Une tache de vin sur la joue, ici. On l'a emmenée l'an dernier, avec les autres, à la Chancellerie. Elle est revenue en hiver. On me dit qu'elle file et qu'elle tisse comme avant. On me dit aussi qu'elle ne sait plus qu'elle a une sœur. » Elle remonte son seau. « Je ne peux pas passer les lignes. Vous, vous passez partout. »",
      { with: "ysolde", if: { has: "ysolde:perrine" }, text: "Elle voit Ysolde, derrière toi. « Vous m'aviez demandé son nom, l'an dernier, capitaine, dit-elle. Avant la colonne. Vous êtes la seule à me l'avoir demandé. »" },
      { without: "ysolde", if: { has: "ysolde:perrine" }, text: "Elle te regarde mieux. « La capitaine m'avait demandé son nom, l'an dernier, dit-elle. Avant la colonne. Elle est la seule à me l'avoir demandé. Dites-le-lui, si vous la voyez. »" },
    ],
    choices: [
      { label: "« Qu'est-ce que je dois lui dire ? »", fx: { flag: "iv:perrine", ep: ["perso", 500] }, to: "IV_br_puits_mot" },
      { label: "« Je ne sais pas si je pourrai. »", to: "IV_br_puits_non" },
    ] }),
  IV_br_puits_mot: P({ title: "Le pâté de lièvre",
    text: [
      "Hersende réfléchit longtemps. Puis elle dit : « Dites-lui que le pâté de lièvre, c'est avec du genièvre, et qu'elle l'a toujours oublié, et que c'est pour ça que le sien est meilleur que le mien. Elle comprendra. Ou elle ne comprendra pas. Mais elle en refera un. » Elle s'essuie les mains à son tablier. Elle repart avec ses seaux. Elle ne se retourne pas. Tu répètes la phrase pour toi, deux fois, pour ne pas l'oublier. *Avec du genièvre.*",
      { if: { seen: "IV_br_hautvent" }, text: "Tu redescends à Hautvent avant la nuit, par le chemin de la rivière. Sous un auvent, une femme file, une tache de vin sur la joue. Tu lui dis la phrase, mot pour mot. Elle s'arrête de filer. « Du genièvre, répète-t-elle. Oui. » Le soir, toute la rue sent le pâté de lièvre. Elle ne sait pas pour qui elle le fait. Elle en garde une part sur la fenêtre, dans un linge." },
    ],
    choices: BACK }),
  IV_br_puits_non: P({ title: "L'eau du soir",
    text: ["Hersende hoche la tête. « Personne ne sait s'il pourra, dit-elle. Demain, il y a une bataille. » Elle te tend la louche, comme elle l'aurait tendue à n'importe qui. L'eau a le goût du fer. Tu bois. Tu rends la louche. Elle repart avec ses seaux, de son pas lourd, et tu restes au bord du puits à regarder le fond, où il n'y a rien à voir qu'un rond de ciel et ta propre tête, toute petite."],
    choices: BACK }),
};
