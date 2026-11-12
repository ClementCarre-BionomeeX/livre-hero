// Act IV · Pont-de-Saule a year later, reached on foot from Sauvelune: the market town where the white snow fell on the
// first of September, the "taille des noms" that a clerk of the Chancellerie collects in phials, the red sergeant of
// Act I, and the grain merchant. The child leads ("tu").
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var SERGENT = { has: "EN:sergent" };
module.exports = {
  IV_ps_arrivee: P({ title: "Pont-de-Saule, un an après", place: "pontsaule",
    fx: { questSeen: "IV_Q_pontsaule" },
    text: [
      "Le pont aux sept arches est toujours là. La halle aussi. Mais le marché ne tient plus que la moitié de la place, et sur l'autre moitié, on a monté une baraque de planches neuves, peinte en gris, avec une enseigne : RECETTE DE LA TAILLE. Et dessous, plus petit : *On accepte les paiements en nature.*",
      "Devant la baraque, une file. Des paysans de la vallée, leur bonnet à la main. Ils entrent avec l'air de gens qui vont chez le barbier se faire arracher une dent. Ils ressortent en souriant.",
    ],
    choices: [{ label: "Entrer dans le bourg", to: "IV_ps" }] }),
  IV_ps: P({ title: "Pont-de-Saule", place: "pontsaule", hub: true, shop: "colporteuse",
    text: [
      "Le bourg est plus calme qu'avant. Les chiens n'aboient plus.",
      { when: "day", text: "Sur le pont, des enfants pêchent sans rien prendre, et ils ne se disputent pas les places." },
      { when: "night", text: "Sur le pont, une seule lanterne, celle du corps de garde." },
      { if: { has: "iv:pontsaule=libere" }, text: "La baraque grise est fermée, les volets cloués. Quelqu'un a gratté le mot TAILLE sur l'enseigne." },
    ],
    choices: [
      { label: "La baraque grise", before: "iv:pontsaule=libere", hide: { seen: "IV_ps_recette" }, to: "IV_ps_recette" },
      { label: "Le corps de garde, au bout du pont", hide: { any: [{ quest: "IV_Q_pontsaule" }, { seen: "IV_ps_fuite" }] }, to: "IV_ps_sergent" },
      { label: "Le marchand de grain, sous la halle", hide: { seen: "IV_ps_grain" }, to: "IV_ps_grain" },
      { label: "Les enfants qui pêchent sur le pont", when: "day", hide: { seen: "IV_ps_pont" }, to: "IV_ps_pont" },
      { label: "Le lavoir, au bord de la Sauve", hide: { seen: "IV_ps_lavoir" }, to: "IV_ps_lavoir" },
      { label: "La maison du passeur, près du gué, où Agathe est née", hide: { seen: "IV_ps_mariette" }, to: "IV_ps_mariette" },
      { label: "Un marchand de complaintes, sous la halle", hide: { seen: "IV_ps_complainte" }, to: "IV_ps_complainte" },
      { label: "La ronde du sergent, le soir", hide: { any: [{ seen: "IV_ps_ronde" }, { not: { seen: "IV_ps_sergent" } }, { seen: "IV_ps_fuite" }] }, to: "IV_ps_ronde" },
      { label: "L'auberge du Saule, au bout du pont", to: "IV_ps_auberge" },
      { label: "Remonter à Sauvelune", to: "IV_sv_place", big: true },
    ] }),

  IV_ps_recette: P({ title: "La recette de la taille", place: "pontsaule",
    text: [
      "Dans la baraque, un comptoir, un registre, une balance. Et derrière le comptoir, un petit homme rond en robe grise de clerc, avec des lunettes et un sourire de notaire. Sur une étagère, derrière lui, des fioles de verre, bouchées de cire grise, alignées comme des pots de confiture.",
      "« Maître Fulbert, receveur pour la Chancellerie, dit-il. La taille de cette année est de deux écus par feu. Personne n'a deux écus, depuis la neige. Alors la Chancellerie, dans sa bonté, accepte autre chose. » Il tapote une fiole. « Un souvenir par écu. Un petit. Le goût d'une poire. Le nom d'une vache. Ça ne fait pas mal. »",
      "Un vieil homme, devant toi, signe d'une croix et tend la main. Fulbert pose une plume sur son poignet. Le vieil homme sourit, un peu perdu, et sort.",
    ],
    choices: [
      { label: "Lui demander ce que la Chancellerie fait des fioles", test: { dom: "social", label: "Fulbert", help: [{ if: { item: "registre_anselin" }, v: 15 }, { if: { present: "hylas" }, v: 15 }, { if: { present: "linette" }, v: 10 }] },
        win: { fx: { flag: "iv:pontsaule_sait", ep: ["perso", 800] }, to: "IV_ps_recette_aveu" }, lose: { to: "IV_ps_recette_rien" } },
      { label: "Ressortir", to: "IV_ps" },
    ] }),
  IV_ps_recette_aveu: P({ title: "Les fioles", place: "pontsaule",
    text: [
      "Fulbert hésite, puis se penche, ravi d'avoir enfin quelqu'un à qui parler de son métier. « On les monte à Pallanche une fois par mois. Au Grand Livre. Le Greffier-Majeur dit que chaque souvenir qu'on lui cède est un poids de moins sur le royaume. » Il baisse la voix. « Entre nous, je crois qu'il les garde. Il y a des étages entiers de bocaux, là-haut. »",
      "Il sourit. Il croit sincèrement faire le bien. Ça se voit. C'est le pire.",
    ],
    choices: [{ label: "Ressortir", to: "IV_ps" }] }),
  IV_ps_recette_rien: P({ title: "Le règlement", place: "pontsaule",
    text: ["« Le règlement ne m'autorise pas à en parler, jeune homme », dit-il, aimable. Il trempe sa plume. « Vous payez en écus, ou en nature ? » Tu ressors. Derrière toi, la file avance d'un pas."],
    choices: [{ label: "Ressortir", to: "IV_ps" }] }),

  IV_ps_sergent: P({ title: "Le sergent roux", place: "pontsaule",
    text: [
      "Le corps de garde est toujours là. Le sergent aussi : gros, roux, la barbe plus grise. Il est seul. Les cinq autres soldats sont partis à la guerre, sur la Lisse. Il garde un pont que personne n'attaque.",
      { if: SERGENT, text: "Il te regarde entrer. Il fronce les sourcils. Puis il se lève, si vite que sa chaise tombe. « Toi, dit-il. Le petit de la neige. Sauvelune. » Il a pâli. « Je t'ai envoyé à Pallanche. Je t'ai dit qu'ils te soigneraient la tête. » Il ramasse sa chaise, la repose, s'assied dessus lourdement. « Le premier septembre, la neige est tombée sur mon pont. Et je me suis souvenu de toi. »" },
      { if: { not: SERGENT }, text: "Il te regarde entrer sans te reconnaître. « Encore un de la montagne, dit-il. Vous descendez tous. Il n'y a plus rien là-haut ? »" },
    ],
    choices: [
      { label: "Lui parler de la baraque grise", fx: { flag: "iv:sergent_allie" }, to: "IV_ps_sergent_taille" },
      { label: "Le laisser à son pont", to: "IV_ps" },
    ] }),
  IV_ps_sergent_taille: P({ title: "La taille", place: "pontsaule",
    text: [
      "Il écoute. Il se gratte la barbe. « Fulbert a un ordre de la Chancellerie, scellé, dit-il. Moi, j'ai un ordre de la reine qui dit de protéger le bourg. » Il regarde par la fenêtre, vers la baraque grise. « Personne ne m'a jamais dit contre quoi. »",
      { if: SERGENT, text: "« Je t'ai mal reçu, l'an dernier, ajoute-t-il. Je voudrais faire mieux cette fois. »" },
      "Il décroche sa hallebarde du râtelier. Elle n'a pas servi depuis des années, ça se voit à la poussière.",
    ],
    choices: [
      { label: "Fermer la baraque grise avec lui", to: "IV_ps_fermer" },
      { label: "« Raccroche-la. Ils te le feraient payer. »", to: "IV_ps" },
    ] }),
  IV_ps_fermer: P({ title: "La baraque grise", place: "pontsaule",
    text: [
      "Vous entrez ensemble. Le sergent pose sa hallebarde sur le comptoir, en travers du registre, et il dit : « Recette fermée, maître Fulbert. Ordre de la garnison. »",
      "Fulbert ouvre la bouche. Derrière lui, deux hommes en gris se lèvent d'un banc où tu ne les avais pas vus, la main à la ceinture.",
    ],
    choices: [
      { label: "Les affronter", to: "IV_ps_combat" },
      { label: "Parler à la file, dehors, pour qu'elle entende", test: { dom: "social", label: "La file", help: [{ if: { has: "iv:pontsaule_sait" }, v: 20 }, { if: { present: "lisandre" }, v: 15 }, { if: { present: "ombeline" }, v: 10 }] },
        win: { fx: { flag: "iv:pontsaule=libere", ep: ["perso", 2000] }, to: "IV_ps_file" }, lose: { to: "IV_ps_combat" } },
    ] }),
  IV_ps_combat: P({ title: "Les gris",
    combat: { title: "Les gardes de la recette", enemies: ["garde_noir", "garde_noir"], terrain: "ville", range: "contact",
      flee: { dom: "discretion", label: "Ressortir par la porte de derrière", to: "IV_ps_fuite" },
      win: { fx: { flag: "iv:pontsaule=libere", ep: ["seance", 1800] }, to: "IV_ps_libre" }, lose: { fx: { pv: -4 }, to: "IV_ps_fuite" } },
    text: ["Le sergent roux se bat comme un vieux soldat, sans grâce, en économisant ses pas. Il n'a pas oublié. Ça se voit à sa figure : il est le premier surpris."],
    choices: [] }),
  IV_ps_file: P({ title: "La file", place: "pontsaule",
    text: [
      { before: "iv:pontsaule_sait", text: "Tu sors sur les marches. Tu parles à la file. Tu dis Sauvelune, le registre qui pâlit, les noms qui s'en vont des linteaux. Tu dis : *ce que vous lui donnez, il ne vous le rendra pas. Et il en veut plus.*" },
      { after: "iv:pontsaule_sait", text: "Tu sors sur les marches. Tu parles à la file. Tu dis Sauvelune, le registre qui pâlit, les étages de bocaux dans la tour de Pallanche. Tu dis : *ce que vous lui donnez, il le garde. Et il en veut plus.*" },
      "La file t'écoute. Puis un homme, au milieu, un vieux qui venait de céder le goût des poires, dit d'une voix lente : « J'ai payé. Et je ne sais même pas ce que j'ai payé. » Et il remonte les marches, et il entre dans la baraque, et il demande sa fiole.",
      "Les autres le suivent. Fulbert, derrière son comptoir, regarde la foule entrer, et les deux hommes en gris se rasseoir, très lentement, sur leur banc.",
    ],
    choices: [{ label: "Laisser le bourg reprendre ce qui est à lui", to: "IV_ps_libre" }] }),
  IV_ps_libre: P({ title: "Les fioles rendues", place: "pontsaule",
    text: [
      "On rend les fioles. Le registre de Fulbert dit qui a donné quoi, et il faut lui reconnaître ça : il tenait ses comptes. Chacun reprend la sienne, la débouche, respire. Un vieil homme retrouve le goût des poires et s'assied sur les marches pour pleurer. Une femme retrouve le nom de sa vache, et rit.",
      "Fulbert part le soir même, à pied, vers Pallanche, son registre sous le bras. Le sergent le regarde passer le pont. « Il va faire son rapport, dit-il. Et ils enverront quelqu'un d'autre. » Il remet sa hallebarde au râtelier, sans l'essuyer. « Mais pas tout de suite. Et moi, je serai là. »",
    ],
    choices: [{ label: "Revenir sur la place", fx: { quest: "IV_Q_pontsaule" }, to: "IV_ps" }] }),
  IV_ps_fuite: P({ title: "La porte de derrière", place: "pontsaule",
    text: ["Vous sortez par derrière, le sergent en boitant, une coupure au bras. La baraque reste ouverte. Le lendemain, il y a une nouvelle affiche sur la porte du corps de garde : le sergent est relevé de ses fonctions, par ordre de la Chancellerie. Il la regarde longtemps. Puis il l'arrache, et il reste."],
    choices: [{ label: "Revenir sur la place", fx: { quest: "IV_Q_pontsaule" }, to: "IV_ps" }] }),

  IV_ps_grain: P({ title: "Le marchand de grain", place: "pontsaule",
    text: [
      "Le marchand de grain est sous la halle, derrière ses sacs à moitié vides. Avant, il te regardait passer sans te voir.",
      { if: { has: "nord:rendu=sauvelune" }, text: "Aujourd'hui, il te voit. « Le petit du meunier, dit-il. Le petit de Joris. » Il te tend la main par-dessus les sacs. « Joris me vendait le meilleur seigle de la vallée. Je ne savais plus d'où il venait. Je le sais de nouveau. » Il baisse la voix. « Je ne sais pas ce que tu as fait, petit. Mais je te dois une moisson. »" },
      { if: { not: { has: "nord:rendu=sauvelune" } }, text: "Aujourd'hui non plus. Il te vend de la farine sans te regarder. Mais en te rendant la monnaie, il dit, à personne en particulier : « Il y avait un meunier, en haut. Il me vendait du seigle. Je ne sais plus où. » Il fronce les sourcils. « Le meilleur seigle de la vallée. » Il te donne un sac de plus, sans savoir pourquoi." },
    ],
    choices: [{ label: "Prendre la farine pour la route", fx: { food: 3, ep: ["perso", 400] }, to: "IV_ps" }] }),
};
