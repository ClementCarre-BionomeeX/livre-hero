// Act V · three more corners of Pallanche under the white snow, off V_ville (the child leads, "tu" masculine): the
// Teinturiers street where the three-coloured stream has frozen (Bérengère, if Hylas found her in Act I), the organ of
// Saint-Gilles that plays one note, and the cattle market where an old reindeer waits (Corbe's, if she sang to it).
var A = { act: "V", noLead: true, place: "pallanche" };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "V_ville" }];
module.exports = {
  V_v_teinturiers: P({ title: "Rue des Teinturiers",
    text: [
      "Rue des Teinturiers, le ruisseau a gelé. Pas en blanc : en trois couleurs, comme il coulait. Bleu à gauche, rouge à droite, jaune au milieu, une glace de vitrail, avec, prises dedans, des feuilles, une plume, un bouchon. Les cuves fument encore, dans les ateliers. Personne ne remue la laine.",
      "Devant les boutiques, les gens sont arrêtés, souriants, leurs jetons à la main, en route vers la place. Ils ont tous les mains teintes jusqu'aux coudes. On ne se débarrasse pas de l'indigo en une nuit. Même en oubliant.",
      { if: { all: [{ present: "hylas" }, { has: "hylas:berengere" }] }, text: "Hylas s'est arrêté devant une boutique. Il n'a pas besoin de voir l'enseigne. Il connaît l'odeur des écheveaux. Sur le seuil, une vieille femme, un jeton à la main, qui sourit à la neige." },
    ],
    choices: [
      { label: "Laisser Hylas lui parler", hide: { not: { all: [{ present: "hylas" }, { has: "hylas:berengere" }] } }, to: "V_v_berengere" },
      { label: "Casser la glace du ruisseau, pour qu'il coule", fx: { ep: ["perso", 300] }, to: "V_v_teinturiers_glace" },
      { back: "V_ville" },
    ] }),
  V_v_teinturiers_glace: P({ title: "Les trois couleurs",
    text: ["Tu frappes la glace du talon. Elle se fend, en étoile, bleu, rouge, jaune. Dessous, l'eau coule encore, lentement, sans bruit, toujours en trois couleurs, qui ne se mélangent pas. Tu y trempes la main. Elle ressort bleue, d'un côté, rouge de l'autre. Un teinturier, à côté de toi, baisse les yeux vers ta main. Il fronce les sourcils, comme quelqu'un qui reconnaît un geste. Il ne bouge pas. Mais il a froncé les sourcils."],
    choices: BACK }),
  V_v_berengere: P({ title: "Bérengère",
    text: [
      "Hylas s'avance. Il pose sa main sur le chambranle, puis sur l'épaule de la vieille femme. Elle tourne la tête vers lui, avec son sourire de neige.",
      { if: { has: "hylas:berengere=dit" }, text: "« Tu ne passes jamais sous le Pont-Neuf, dit-il. Tu fais le tour par le pont des Moulins. Toujours. » Elle le regarde. Le sourire vacille. « Comment vous savez ça ? » Il ne répond pas. Il lui prend le jeton dans la main, doucement, et il le garde. Elle le laisse faire. « Je vous connais, dit-elle. Je ne sais pas d'où. »" },
      { if: { not: { has: "hylas:berengere=dit" } }, text: "« Vous m'avez vendu un ruban bleu, dit-il. L'an dernier. Vous m'avez rendu trop de monnaie. » Elle le regarde. Elle cherche. « J'en vends beaucoup, des rubans », dit-elle, gentiment. Il hoche la tête. Il lui prend le jeton dans la main. Elle le laisse faire. Elle ne sait pas pourquoi elle le laisse faire." },
      "Il revient vers toi, le jeton de plomb serré dans son poing. Il ne dit rien. Derrière lui, sur le seuil, Bérengère ne regarde plus la place. Elle regarde ses mains vides, puis la rue, puis le dos du vieil homme qui s'en va.",
    ],
    choices: [{ fx: { flag: "v:berengere", conf: { hylas: 10 }, ep: ["perso", 800] }, back: "V_ville" }] }),
  V_v_orgue: P({ title: "Une seule note",
    text: [
      "Saint-Gilles est ouverte. Dedans, une seule note, tenue, qui ne s'arrête pas : l'orgue. À la tribune, l'organiste est assis, immobile, souriant, un doigt posé sur une touche, et la note sonne depuis hier soir, un grave qui fait trembler les vitraux.",
      "La note n'est pas pure. Il y a un tuyau, dans les graves, qui grince comme une porte. Toute la nuit, toute la ville, sous la neige, a entendu une porte qui grince, sans savoir laquelle.",
    ],
    choices: [
      { label: "Monter à la tribune, et lever son doigt", fx: { ep: ["perso", 400] }, to: "V_v_orgue_doigt" },
      { back: "V_ville" },
    ] }),
  V_v_orgue_doigt: P({ title: "Le silence",
    text: [
      "Tu prends sa main. Elle est froide. Tu soulèves le doigt. La note s'arrête. Le silence tombe dans l'église comme un drap mouillé.",
      "L'organiste cligne des yeux. Il regarde ses mains sur le clavier. Il regarde la nef vide. Puis, lentement, sans te voir, il pose les deux mains, et il joue le début d'un choral, et quand la basse descend vers la note qui grince, il l'évite, et il en joue une autre, qui n'est pas dans la partition. Il ne sait pas pourquoi. Ses mains le savent.",
      { with: "hylas", text: "En bas, dans la nef, Hylas s'est assis au dernier rang. Il chante, à mi-voix, avec sa voix cassée. Il connaît les paroles." },
    ],
    choices: [{ fx: { flag: "v:orgue" }, back: "V_ville" }] }),
  V_v_renne: P({ title: "Le marché aux bêtes",
    text: [
      "Le marché aux bêtes est désert. Les enclos sont ouverts. Les vaches, les cochons sont partis, ou restés debout, sous la neige, sans comprendre. Les marchands sont dans la queue, avec leurs jetons.",
      "Au fond, dans un enclos à l'écart, un renne. Vieux, la ramure cassée, la robe mitée. Il est attaché court. La neige blanche lui monte aux genoux. Il ne regarde pas la tour. Il regarde le nord.",
      { if: { all: [{ present: "corbe" }, { has: "corbe:renne_ville" }] }, text: "Corbe s'arrête. Elle le reconnaît. Lui aussi : il tourne la tête, il tend le museau vers elle, et il brame, une fois, doucement, comme il y a un an." },
    ],
    choices: [
      { label: "Couper la corde", fx: { ep: ["perso", 500], flag: "v:renne" }, to: "V_v_renne_libre" },
      { label: "Lui apporter une brassée de foin, d'abord", hide: { seen: "V_v_renne_foin" }, to: "V_v_renne_foin" },
      { back: "V_ville" },
    ] }),
  V_v_renne_foin: P({ title: "Le foin",
    text: ["Dans la grange du marché, du foin, sous la neige qui tombe à l'envers par le toit crevé. Tu en prends une brassée. Tu la poses devant lui. Il la regarde. Il ne mange pas. Il a oublié qu'il avait faim, comme les gens de la queue. Puis il baisse la tête, et il prend une bouchée, une seule, lentement. Il mâche. Il te regarde en mâchant. C'est un début."],
    choices: [
      { label: "Couper la corde", fx: { ep: ["perso", 500], flag: "v:renne" }, to: "V_v_renne_libre" },
      { back: "V_ville" },
    ] }),
  V_v_renne_libre: P({ title: "Le nord",
    text: [
      "Tu coupes la corde. Le renne ne bouge pas, d'abord. Il ne sait plus qu'il pourrait. Puis il fait un pas. Puis un autre. Il sort de l'enclos. Il traverse le marché, lentement, à travers la neige qui monte, et il prend la rue du Nord, vers la porte, et il ne se retourne pas.",
      { with: "corbe", text: "Corbe chante derrière lui, tout bas, le chant qu'on chante aux rennes le soir. Pas pour le ramener. Pour lui donner la direction. Il la prend." },
      "Tu ne sais pas s'il arrivera. C'est loin, le nord, pour un vieux renne. Mais il marche. Il est le seul, cette nuit, dans toute la ville, à marcher dans l'autre sens.",
    ],
    choices: BACK }),
};
