// Les Trois-Bornes (the hamlet), the ridge path and its events.
module.exports = {
  P_depart: { act: "P", title: "Les Trois-Bornes", place: "hameau",
    fx: { meet: "mere_ternes" },
    text: [
      "Tu arrives aux Trois-Bornes à l'heure où les chiens se taisent et où les femmes rentrent le linge. Six maisons de pierre sèche, une forge qui fume encore, une auberge à l'enseigne de fer, et au milieu, plantées dans l'herbe rase comme trois dents, les bornes qui ont donné leur nom au hameau.",
      "Au-dessus de tout, la crête. Et sur la crête, découpé contre un ciel couleur d'étain, le château : des tours tronquées, un rempart rapiécé de troncs entiers, une fumée grasse qui monte droit malgré le vent.",
      "Dans ta poche, la lettre de ton maître a pris la forme de ta main à force d'être tenue. Tu la connais par cœur. *Regarde sous le château.*",
      { if: { has: "passe:profite" }, text: "Une vieille femme sur le seuil de l'auberge te regarde passer, et quelque chose dans ses yeux te dit qu'elle a connu des gens comme toi : ceux qui achètent les terres des autres quand l'eau tourne. Tu baisses la tête sans savoir pourquoi." },
      { if: { has: "passe:ordre" }, text: "Sur le linteau de la forge, quelqu'un a gravé une main ouverte, l'ancien signe de l'Ordre. On l'a grattée depuis, mais pas assez." },
    ],
    choices: [
      { label: "Pousser la porte de la Lanterne éteinte avant la nuit", to: "P_auberge" },
      { label: "Faire d'abord le tour du hameau", to: "P_hameau" },
    ] },

  P_hameau: { act: "P", title: "Les Trois-Bornes", place: "hameau", hub: true, routes: true,
    text: [
      { if: { night: true }, text: "La nuit est tombée sur le hameau. Seule la fenêtre de l'auberge est encore jaune ; la forge rougeoie sous sa cendre.", else: "Le hameau vit à son rythme lent : un âne tourne une meule, deux enfants se disputent un cerceau, Durn bat le fer sous son auvent." },
      "La question qui t'a fait venir tient en une ligne, dans ton carnet : *qu'y a-t-il sous le château des trolls ?*",
      { if: { has: "durn:marteau" }, text: "Le bruit de la forge a changé depuis que Durn a retrouvé son marteau. Il chante, presque." },
      { if: { all: [{ has: "P:sortie" }, { not: { has: "durn:marteau" } }, { item: "marteau_durn" }] }, text: "Le marteau de Durn pèse dans ton sac. Il n'attend que toi." },
    ],
    choices: [
      { label: "L'auberge de la Lanterne éteinte", to: "P_auberge" },
      { label: "La forge de Durn", to: "P_forge" },
      { label: "Les trois bornes, au milieu du pré", to: "P_bornes", hide: { has: "P:bornes" } },
      { label: "Retourner voir les bornes", to: "P_bornes_retour", hide: { not: { has: "P:bornes" } } },
    ] },

  P_auberge: { act: "P", title: "La Lanterne éteinte", place: "hameau", shop: "lanterne",
    fx: { clue: "p1_rumeur", meet: "mere_ternes" },
    text: [
      "La salle est basse, enfumée, plus chaude que tu ne l'espérais. Trois buveurs autour d'une table, un chat sur le manteau de la cheminée, et derrière le comptoir une femme sans âge qui essuie le même gobelet depuis que tu es entré : Mère Ternes.",
      "« Le château ? » Elle repose le gobelet. « Les trolls l'ont pris il y a quatre ans. On s'y était fait : ils descendaient voler un mouton, on leur jetait des pierres, chacun son métier. Et puis à la Saint-Martin, plus rien. Plus un troll sur le sentier. Ils restent là-haut. » Elle baisse la voix. « Ils gardent quelque chose. Ou quelque chose les garde. »",
      { if: { has: "passe:fui" }, text: "Un des buveurs te dévisage. « T'as la tête de quelqu'un qui part avant les autres », dit-il, sans méchanceté. Tu ne réponds pas." },
      "Elle vend de l'onguent de sa fabrication, des herbes, de quoi manger pour la route, et loue une paillasse pour deux pièces.",
    ],
    choices: [
      { label: "Louer une paillasse et dormir jusqu'au matin · 2 p.", if: { gold: { min: 2 } }, why: "Il te faut 2 pièces.", fx: { gold: -2, pv: "max", rest: true, time: 10 }, to: "P_auberge_matin" },
      { label: "Payer une tournée aux buveurs et les écouter · 3 p.", hide: { has: "P:tournee" }, if: { gold: { min: 3 } }, why: "Il te faut 3 pièces.", fx: { gold: -3, flag: "P:tournee" }, to: "P_tournee" },
      { label: "Ressortir", to: "P_hameau" },
    ] },

  P_auberge_matin: { act: "P", title: "Au matin", place: "hameau",
    text: [
      "Tu dors d'un sommeil sans rêve, ce qui ne t'arrive plus souvent. Au matin, Mère Ternes a posé une écuelle de bouillie devant ta place sans que tu demandes rien. « Pour la route », dit-elle. « On ne monte pas là-haut le ventre vide. »",
    ],
    choices: [{ label: "Remercier et sortir", to: "P_hameau" }] },

  P_tournee: { act: "P", title: "Une tournée", place: "hameau",
    fx: { fac: { bornes: 5 }, ep: ["perso", 200] },
    text: [
      "La bière est mauvaise et les langues se délient vite. Le plus vieux des trois, un charbonnier aux mains noires jusqu'au coude, se penche vers toi.",
      "« Les trolls, c'est pas eux le souci. Le souci, c'est ce qu'ils ont trouvé en creusant leurs caves. Mon cousin portait du charbon là-haut, avant. Il disait qu'il y avait une salle sous les cuisines où le roi lui-même descendait plus. Une salle qui chante. »",
      "Le deuxième hausse les épaules. « Ton cousin buvait plus que nous. »",
      "« Il buvait pas tant que ça, le jour où il est redescendu avec les cheveux blancs. »",
      "On ne t'en dira pas plus, mais tu remarques une chose : quand tu parles de descendre au château, aucun des trois ne te traite de fou.",
    ],
    choices: [{ label: "Laisser les buveurs à leur bière", to: "P_auberge" }] },

  P_forge: { act: "P", title: "La forge de Durn", place: "hameau", shop: "forge",
    fx: { meet: "durn" },
    text: [
      "Durn ne lève pas les yeux de l'enclume avant d'avoir fini sa chaude. C'est un homme énorme et doux, avec des avant-bras couturés de brûlures et une voix qu'il n'élève jamais.",
      { if: { not: { has: "durn:marteau" } }, text: "« Tu montes là-haut. » Ce n'est pas une question. Il essuie ses mains. « Alors écoute. Il y a trois lunes, les trolls ont forcé ma remise. Ils ont pris du fer, deux chaudrons, et mon marteau. Celui de mon père, manche de frêne, une borne gravée sur la tête. Je forge avec un autre, mais ce n'est pas pareil. Si tu le vois là-haut… »" },
      { if: { has: "durn:marteau" }, text: "« Toi. » Il sourit, ce qui change tout son visage. « Entre. La forge est à toi quand tu veux. »" },
      "Il vend ce qu'il forge : des lames honnêtes, des haches de bûcheron, des vestes matelassées. Rien de beau, tout de solide.",
    ],
    choices: [
      { label: "Rendre son marteau à Durn", if: { item: "marteau_durn" }, hide: { has: "durn:marteau" }, why: "Il faudrait d'abord le trouver.", to: "P_forge_marteau" },
      { label: "Ressortir", to: "P_hameau" },
    ] },

  P_forge_marteau: { act: "P", title: "Le marteau de Durn", place: "hameau",
    fx: { drop: "marteau_durn", flag: "durn:marteau", quest: "P_marteau", fac: { bornes: 15 }, ep: ["seance", 1500] },
    text: [
      "Tu poses le marteau sur l'enclume. Durn le regarde longtemps sans y toucher. Puis il le prend, le soupèse, passe le pouce sur la borne gravée, et ses yeux brillent d'une façon qu'il ne cherche pas à cacher.",
      "« Mon père a forgé la grille de l'église de Brumefeuille avec ça. » Il se racle la gorge. « Je n'ai pas d'argent à te donner qui vaille ça. Mais j'ai une cotte que je gardais pour un seigneur qui n'est jamais venu la chercher. Elle est à toi. Et si un jour tu as besoin d'une lame, d'un fer, de n'importe quoi, tu viens ici. »",
    ],
    choices: [
      { label: "Accepter la cotte de mailles", fx: { item: "cotte" }, to: "P_hameau" },
      { label: "« Garde-la. Forge-moi plutôt une bonne lame quand je repasserai. »", fx: { flag: "durn:lame-promise", fac: { bornes: 5 } }, to: "P_hameau" },
    ] },

  P_bornes: { act: "P", title: "Les trois bornes", place: "hameau",
    fx: { flag: "P:bornes" },
    text: [
      "Les bornes sont plus hautes que toi, rongées de lichen jaune. Les gens du hameau passent à côté sans les regarder, comme on ne regarde pas un meuble trop ancien.",
      "La première porte une roue, la deuxième une gerbe. La troisième est couverte de mains sculptées, paume ouverte, doigts écartés, disposées en cercle autour d'un trou poli par la pluie.",
    ],
    choices: [
      { label: "Compter les mains et chercher ce que dit la pierre", test: { dom: "savoir", diff: 0, label: "lire la pierre" },
        win: { fx: { clue: "p1_borne", ep: ["perso", 300] }, to: "P_bornes_lu" },
        lose: { fx: { note: "La pierre garde son secret. Tu compteras les mains une autre fois." }, to: "P_hameau" } },
      { label: "Laisser les bornes à leur sommeil", to: "P_hameau" },
    ] },

  P_bornes_lu: { act: "P", title: "La sixième main", place: "hameau",
    text: [
      "Cinq mains. Puis, à la place de la sixième, une cicatrice : la pierre a été frappée, longtemps, méthodiquement, jusqu'à ce que la forme disparaisse. On voit encore la trace des ciseaux.",
      "On n'efface pas ainsi un ornement. On efface un nom.",
    ],
    choices: [{ label: "Revenir au milieu du hameau", to: "P_hameau" }] },

  P_bornes_retour: { act: "P", title: "Les trois bornes", place: "hameau",
    text: [
      "Les bornes n'ont pas bougé. La troisième, avec ses cinq mains et sa cicatrice, te semble regarder la crête.",
      { if: { has: "P:sortie" }, text: "Depuis que tu es descendu sous le château, tu ne peux plus la regarder sans penser aux empreintes sur les murs des caves, toutes tournées vers le bas." },
    ],
    choices: [{ label: "Revenir au milieu du hameau", to: "P_hameau" }] },

  // ---------------------------------------------------------------- the ridge path
  R1_bergere: { act: "P", title: "La bergère de la crête",
    fx: { meet: "bergere", clue: "p1_bergere" },
    text: [
      "À mi-pente, un troupeau de brebis noires s'écarte devant toi en bêlant. Leur gardienne est assise sur un rocher, une femme maigre au visage tanné, un bâton en travers des genoux. Isaure, dit-elle, sans que tu demandes.",
      "« T'as pas vu un chien ? Gris, une oreille cassée. Poivre. » Elle regarde vers le château. « Il a couru après un lièvre, il y a six jours. Le lièvre est entré sous le rempart, et Poivre derrière. Les trolls ont un chenil, côté nord. Je l'entends aboyer, la nuit. Enfin, je crois que c'est lui. »",
      "Elle se tait un moment, puis ajoute, plus bas : « Et je vois une lumière, aussi. Toute petite. Elle sort du château, elle tourne un peu, et elle rentre vite, comme si elle avait peur du dehors. »",
    ],
    choices: [
      { label: "« Je le ramènerai si je peux. »", fx: { flag: "bergere:promesse", questSeen: "P_chien" }, to: "@route" },
      { label: "Lui souhaiter bonne chance et continuer", fx: { questSeen: "P_chien" }, to: "@route" },
    ] },

  E_eboulis: { title: "L'éboulis",
    text: [
      "Le sentier disparaît sous un éboulis récent : des blocs gros comme des tonneaux, encore instables, et en dessous, rien qu'une pente de cailloux qui file jusqu'au torrent.",
    ],
    choices: [
      { label: "Traverser en choisissant chaque appui", test: { dom: "nature", diff: 0, label: "passer l'éboulis" },
        win: { fx: { ep: ["perso", 150] }, to: "@route" },
        lose: { fx: { pv: -3, note: "Une pierre roule sous ton pied. Tu te rattrapes, mais pas sans t'ouvrir le genou." }, to: "@route" } },
      { label: "Faire le grand tour par les genêts (le temps passe)", fx: { time: 3 }, to: "@route" },
    ] },

  E_chevres: { title: "Les chèvres sauvages",
    text: [
      "Une harde de chèvres sauvages te regarde passer du haut d'un rocher, avec cet air d'ennui supérieur qu'ont toutes les chèvres. Une jeune s'approche, renifle ton sac, et repart en emportant un bout de ta ceinture.",
    ],
    choices: [
      { label: "Essayer d'en attraper une pour le repas", test: { dom: "nature", diff: -10, label: "chasser" },
        win: { fx: { food: 1, note: "Tu as de quoi manger un jour de plus." }, to: "@route" },
        lose: { fx: { note: "Les chèvres s'égaillent en riant, tu en jurerais." }, to: "@route" } },
      { label: "Les laisser à leur rocher", to: "@route" },
    ] },
};
