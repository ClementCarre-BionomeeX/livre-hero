// Act V · three more corners of Pallanche under the white snow, off V_ville (the child leads, "tu" masculine): the
// Teinturiers street where the three-coloured stream has frozen (Bérengère, if Hylas found her in Act I), the organ of
// Saint-Gilles that plays one note, and the cattle market where an old reindeer waits (Corbe's, if she sang to it).
var A = { act: "V", noLead: true, place: "pallanche" };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "V_ville" }];
module.exports = {
  V_v_teinturiers: P({ title: "Rue des Teinturiers",
    text: [
      "Rue des Teinturiers, le ruisseau a gelé, en trois couleurs, comme il coulait. Bleu à gauche, rouge à droite, jaune au milieu, une glace de vitrail, avec, prises dedans, des feuilles, une plume, un bouchon. Les cuves fument encore, dans les ateliers. La laine y repose, sans une main pour la remuer.",
      "Devant les boutiques, les gens sont arrêtés, souriants, leurs jetons à la main, en route vers la place. Ils ont tous les mains teintes jusqu'aux coudes. L'indigo résiste à une nuit d'oubli : il faut un mois de savon.",
      { if: { all: [{ present: "hylas" }, { has: "hylas:berengere" }] }, text: "Hylas s'est arrêté devant une boutique. L'enseigne lui est inutile : il connaît l'odeur des écheveaux. Sur le seuil, une vieille femme, un jeton à la main, qui sourit à la neige." },
    ],
    choices: [
      { label: "Laisser Hylas lui parler", hide: { not: { all: [{ present: "hylas" }, { has: "hylas:berengere" }] } }, to: "V_v_berengere" },
      { label: "Casser la glace du ruisseau, pour qu'il coule", fx: { ep: ["perso", 300] }, to: "V_v_teinturiers_glace" },
      { back: "V_ville" },
    ] }),
  V_v_teinturiers_glace: P({ title: "Les trois couleurs",
    text: ["Tu frappes la glace du talon. Elle se fend, en étoile, bleu, rouge, jaune. Dessous, l'eau coule encore, lentement, sans bruit, toujours en trois couleurs, chacune dans son lit. Tu y trempes la main. Elle ressort bleue, d'un côté, rouge de l'autre. Un teinturier, à côté de toi, baisse les yeux vers ta main. Il fronce les sourcils, comme quelqu'un qui reconnaît un geste. Il reste immobile. Mais le pli est là, entre ses sourcils."],
    choices: BACK }),
  V_v_berengere: P({ title: "Bérengère",
    text: [
      "Hylas s'avance. Il pose sa main sur le chambranle, puis sur l'épaule de la vieille femme. Elle tourne la tête vers lui, avec son sourire de neige.",
      { if: { has: "hylas:berengere=dit" }, text: "« Tu ne passes jamais sous le Pont-Neuf, dit-il. Tu fais le tour par le pont des Moulins. Toujours. » Elle le regarde. Le sourire vacille. « Comment vous savez ça ? » Il garde le silence. Il lui prend le jeton dans la main, doucement, et il le garde. Elle le laisse faire. « Je vous connais, dit-elle. D'où, je l'ignore. »" },
      { if: { not: { has: "hylas:berengere=dit" } }, text: "« Vous m'avez vendu un ruban bleu, dit-il. L'an dernier. Vous m'avez rendu trop de monnaie. » Elle le regarde. Elle cherche. « J'en vends beaucoup, des rubans », dit-elle, gentiment. Il hoche la tête. Il lui prend le jeton dans la main. Elle le laisse faire, sans savoir pourquoi." },
      "Il revient vers toi, le jeton de plomb serré dans son poing, muet. Derrière lui, sur le seuil, Bérengère a détourné les yeux de la place. Elle regarde ses mains vides, puis la rue, puis le dos du vieil homme qui s'en va.",
    ],
    choices: [{ fx: { conf: { hylas: 10 }, ep: ["perso", 800] }, back: "V_ville" }] }),
  V_v_orgue: P({ title: "Une seule note",
    text: [
      "Saint-Gilles est ouverte. Dedans, une seule note, tenue, interminable : l'orgue. À la tribune, l'organiste est assis, immobile, souriant, un doigt posé sur une touche, et la note sonne depuis hier soir, un grave qui fait trembler les vitraux.",
      "La note est sale. Un tuyau, dans les graves, grince comme une porte. Toute la nuit, toute la ville, sous la neige, a entendu une porte qui grince, sans savoir laquelle.",
    ],
    choices: [
      { label: "Monter à la tribune, et lever son doigt", fx: { ep: ["perso", 400] }, to: "V_v_orgue_doigt" },
      { back: "V_ville" },
    ] }),
  V_v_orgue_doigt: P({ title: "Le silence",
    text: [
      "Tu prends sa main. Elle est froide. Tu soulèves le doigt. La note s'arrête. Le silence tombe dans l'église comme un drap mouillé.",
      "L'organiste cligne des yeux. Il regarde ses mains sur le clavier. Il regarde la nef vide. Puis, lentement, sans te voir, il pose les deux mains, et il joue le début d'un choral, et quand la basse descend vers la note qui grince, il l'évite, et il en joue une autre, absente de la partition. Pourquoi, il l'ignore. Ses mains le savent.",
      { with: "hylas", text: "En bas, dans la nef, Hylas s'est assis au dernier rang. Il chante, à mi-voix, avec sa voix cassée. Il connaît les paroles." },
    ],
    choices: [{ back: "V_ville" }] }),
  V_v_renne: P({ title: "Le marché aux bêtes",
    text: [
      "Le marché aux bêtes est désert. Les enclos sont ouverts. Les vaches, les cochons sont partis, ou restés debout, sous la neige, l'air stupide, ce qui chez un cochon est un exploit. Les marchands sont dans la queue, avec leurs jetons.",
      "Au fond, dans un enclos à l'écart, un renne. Vieux, la ramure cassée d'un côté, la robe mitée par plaques grandes comme la main. Il est attaché court. La neige blanche lui monte aux genoux. Il tourne le dos à la tour. Il regarde le nord.",
      { if: { all: [{ present: "corbe" }, { has: "corbe:renne_ville" }] }, text: "Corbe s'arrête. Elle le reconnaît. Lui aussi : il tourne la tête, il tend le museau vers elle, et il brame, une fois, doucement, comme il y a un an." },
    ],
    choices: [
      { label: "Couper la corde", fx: { ep: ["perso", 500], flag: "v:renne" }, to: "V_v_renne_libre" },
      { label: "Lui apporter une brassée de foin, d'abord", hide: { seen: "V_v_renne_foin" }, to: "V_v_renne_foin" },
      { back: "V_ville" },
    ] }),
  V_v_renne_foin: P({ title: "Le foin",
    text: ["Dans la grange du marché, du foin, sous la neige qui tombe à l'envers par le toit crevé. Tu en prends une brassée. Tu la poses devant lui. Il la regarde, la bouche close. Il a oublié qu'il avait faim, comme les gens de la queue. Puis il baisse la tête, et il prend une bouchée, une seule, lentement. Il mâche. Il te regarde en mâchant. C'est un début."],
    choices: [
      { label: "Couper la corde", fx: { ep: ["perso", 500], flag: "v:renne" }, to: "V_v_renne_libre" },
      { back: "V_ville" },
    ] }),
  V_v_renne_libre: P({ title: "Le nord",
    text: [
      "Tu coupes la corde. Le renne reste d'abord immobile. La liberté lui est sortie de l'esprit. Puis il fait un pas. Puis un autre. Il sort de l'enclos. Il traverse le marché, lentement, à travers la neige qui monte, et il prend la rue du Nord, vers la porte, le cou tendu.",
      { with: "corbe", text: "Corbe chante derrière lui, tout bas, le chant qu'on chante aux rennes le soir. Elle chante pour lui donner la direction, sans chercher à le ramener. Il la prend." },
      "Arrivera-t-il ? C'est loin, le nord, pour un vieux renne. Mais il marche. Il est le seul, cette nuit, dans toute la ville, à marcher dans l'autre sens.",
    ],
    choices: BACK }),
};
