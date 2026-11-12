// Act III · Bourdonne, the town of forgotten bells: every bell of a forgotten place ends up here, and rings when someone
// up in the world remembers. The Sonneuse; Sauvelune's bell (gone home if Corbe sang it back, or silent: ring it with a
// souvenir); the three hundred of Lisse sitting under their church bell; Linette as she was before; the memory of prince
// Aymeric; the Sonneuse remembers Hylas; and the great bell of Valcendre, which only an Orsan can ring. The child leads.
var A = { act: "III", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  III_c_dieu: P({ title: "Le petit dieu", place: null,
    text: [
      "Le petit dieu de bois marche à côté de toi. Il t'arrive au genou. Il a un visage rond, usé par les mains, et une bouche peinte qui sourit. Une fente dans le ventre, pour les offrandes.",
      "Il te regarde de temps en temps, plein d'espoir. Tu fouilles tes poches.",
    ],
    choices: [
      { label: "Lui donner une pièce", if: { gold: { min: 1 } }, why: "Tu n'as rien.", fx: { gold: -1, flag: "iii:dieu_prie" }, to: "III_c_dieu_prie" },
      { label: "Lui dire une prière, n'importe laquelle", fx: { flag: "iii:dieu_prie" }, to: "III_c_dieu_prie" },
      { label: "Continuer", to: "@route" },
    ] }),

  III_c_dieu_prie: P({ title: "Une prière", place: null,
    text: [
      "Il s'arrête. Il ferme les yeux. Tu vois ses épaules de bois se détendre, comme quelqu'un qui pose un fardeau. Quand il les rouvre, il te fait un petit salut maladroit.",
      "Puis il te tend quelque chose qu'il avait dans sa fente : un grain de blé, un seul, doré, tiède. Et il repart vers la file, d'un pas plus léger.",
    ],
    choices: [{ label: "Continuer", fx: { item: "grain_dieu" }, to: "@route" }] }),

  III_c_seule: P({ title: "La cloche seule", place: null,
    text: [
      "Au milieu du blanc, sans tour, sans rien, une cloche posée par terre, sur sa lèvre, comme un chapeau oublié. Une petite cloche de chapelle, verte de vert-de-gris.",
      "Quand tu passes à côté, elle sonne. Un coup. Seule.",
      "Quelque part, là-haut, quelqu'un vient de penser à un endroit. Une seconde. Puis il est passé à autre chose. La cloche se tait.",
    ],
    choices: [{ label: "Continuer vers les clochers", to: "@route" }] }),

  III_c_ville: P({ title: "Bourdonne", place: "cloches", hub: true,
    text: [
      { first: true, text: "Une ville de clochers. Rien que des clochers, serrés comme des arbres, de toutes les tailles, de toutes les époques, en pierre, en bois, en brique. Pas de maisons. Des rues entre les tours, pavées de blanc. Et dans chaque tour, une cloche." },
      "La plupart se taisent. De temps en temps, quelque part, une cloche sonne un coup, deux, puis s'arrête. Le son traverse la ville, et les gens qui y vivent lèvent la tête pour savoir laquelle.",
      { if: { has: "iii:sonneuse" }, text: "La Sonneuse t'attend sur sa pierre, au milieu de la grand-place, son trousseau de clés de clocher sur les genoux." },
    ],
    choices: [
      { label: "La vieille femme assise au milieu de la place", hide: { has: "iii:sonneuse" }, to: "III_c_sonneuse" },
      { label: "Chercher la cloche de Sauvelune", if: { has: "iii:sonneuse" }, why: "Il faudrait demander à quelqu'un.", hide: { seen: "III_c_sauvelune" }, to: "III_c_sauvelune" },
      { label: "La tour aux cent clochettes", if: { has: "iii:sonneuse" }, why: "Il faudrait demander à quelqu'un.", hide: { seen: "III_c_pallanche" }, to: "III_c_pallanche" },
      { label: "Le clocher carré, au pied duquel des gens attendent assis", if: { has: "iii:sonneuse" }, why: "Il faudrait demander à quelqu'un.", hide: { seen: "III_c_lisse" }, to: "III_c_lisse" },
      { label: "La petite fille qui rit, dans la rue des carillons", if: { has: "iii:sonneuse" }, why: "Il faudrait demander à quelqu'un.", hide: { seen: "III_c_linette" }, to: "III_c_linette" },
      { label: "Le garçon en habit de prince qui court entre les tours", hide: { any: [{ seen: "III_c_aymeric" }, { not: { has: "iii:sonneuse" } }, { has: "isaure:aymeric_rendu" }] }, to: "III_c_aymeric" },
      { label: "La cloche verte, au coin de la place", hide: { any: [{ seen: "III_b_vaure" }, { not: { has: "iii:sonneuse" } }] }, to: "III_b_vaure" },
      { label: "La tour de brique, où des enfants récitent", hide: { any: [{ seen: "III_b_ecole" }, { not: { has: "iii:sonneuse" } }] }, to: "III_b_ecole" },
      { label: "La tour faite de planches de navire", hide: { any: [{ seen: "III_b_navire" }, { not: { has: "iii:sonneuse" } }] }, to: "III_b_navire" },
      { label: "Une fosse qui fume, au bout d'une ruelle", hide: { any: [{ seen: "III_b_fondeur" }, { not: { has: "iii:sonneuse" } }] }, to: "III_b_fondeur" },
      { label: "La rue des chapelles, où deux vieux attendent", hide: { any: [{ seen: "III_b_noces" }, { not: { has: "iii:sonneuse" } }] }, to: "III_b_noces" },
      { label: "Une clochette qui sonne à chaque pas, dans une ruelle", hide: { any: [{ seen: "III_c_lepreux" }, { not: { has: "iii:sonneuse" } }] }, to: "III_c_lepreux" },
      { label: "Une cloche fendue, posée à même les pavés", hide: { any: [{ seen: "III_c_muette" }, { not: { has: "iii:sonneuse" } }] }, to: "III_c_muette" },
      { label: "Le bourdon, au centre de la ville", if: { all: [{ seen: "III_c_sauvelune" }, { seen: "III_c_lisse" }] }, why: "Pas avant d'avoir trouvé ce que tu cherches ici.", to: "III_c_bourdon", big: true },
    ] }),

  III_c_sonneuse: P({ title: "La Sonneuse", place: "cloches",
    fx: { flag: "iii:sonneuse", meet: "sonneuse" },
    text: [
      "Elle est vieille comme une souche, enveloppée de châles, et elle tient sur ses genoux un trousseau de clés grosses comme des poignards. Elle te regarde arriver avec un plaisir évident.",
      "« Un visiteur ! Qui marche dans le bon sens ! » Elle tapote la pierre à côté d'elle. « J'étais sonneuse à Vaure-sur-Lac. Il y a deux cents ans, on a fait un barrage, et le lac a monté, et Vaure est dessous. Plus personne ne s'en souvient. Ma cloche est là-bas, au coin. Elle n'a pas sonné depuis cent cinquante ans. »",
      "« Ici viennent toutes les cloches des endroits oubliés. Chaque fois que quelqu'un, là-haut, se souvient d'un endroit, sa cloche sonne. Un coup par pensée. » Elle sourit de toutes ses gencives. « Je les connais toutes. Demande. »",
      { with: "hylas", text: "Puis elle voit Hylas, derrière toi. Son sourire s'efface. « Toi, dit-elle. Le greffier. Tu es déjà venu. Tu es reparti avec quelque chose qui n'était pas à toi. »" },
    ],
    choices: [
      { label: "Lui demander ce qu'elle veut dire, à Hylas", hide: { not: { present: "hylas" } }, to: "III_c_sonneuse_hylas" },
      { label: "La remercier, et te mettre à chercher la cloche de Sauvelune", to: "III_c_ville" },
    ] }),

  III_c_sonneuse_hylas: P({ title: "Ce qu'il a pris", place: "cloches",
    text: [
      "Hylas ne bouge pas. La Sonneuse le regarde longtemps, puis te regarde toi, et quelque chose change sur son visage. Elle ne dit plus rien. Elle hausse les épaules, comme quelqu'un qui décide que ce n'est pas à elle de le dire.",
      "« Demande-lui, dit-elle seulement. C'est son histoire. Les miennes, c'est les cloches. »",
      "Hylas a les yeux fermés. Il ne les a pas fermés depuis qu'il voit.",
    ],
    choices: [{ label: "Ne pas insister, pour l'instant", fx: { flag: "iii:hylas_soupcon" }, to: "III_c_ville" }] }),

  III_c_sauvelune: P({ title: "Le clocher de Sauvelune", place: "cloches",
    text: [
      { first: true, text: "La Sonneuse te mène elle-même, en clopinant, jusqu'à un clocher de pierre grise, le dernier venu, au bout d'une rue. Tu le reconnais. Le clocher du temple de Sauvelune, avec la fissure au-dessus de la porte et le nid d'hirondelles sous l'avant-toit." },
      { again: true, text: "Tu redescends au pied du clocher de Sauvelune." },
      { if: { has: "nord:rendu=sauvelune" }, text: "Il est vide. La cloche n'y est plus. Sur le plancher du beffroi, une trace ronde, propre, là où elle était posée. La Sonneuse se gratte la tête. « Elle est arrivée il y a un mois, et repartie il y a quelques jours. D'un coup. Je n'avais jamais vu ça. Quelqu'un, là-haut, a dû se souvenir très fort. »" },
      { if: { not: { has: "nord:rendu=sauvelune" } }, text: "La cloche est là. Elle est arrivée il y a un mois. Elle est encore tiède. Elle se tait. Personne, là-haut, ne pense à Sauvelune. Personne sauf toi, et tu n'es plus là-haut." },
    ],
    choices: [
      { label: "Pleurer, ou rire, tu ne sais pas", hide: { not: { has: "nord:rendu=sauvelune" } }, fx: { flag: "iii:sauvelune_partie", ep: ["perso", 1000] }, to: "III_c_ville" },
      { label: "La faire sonner toi-même, à la main", hide: { has: "nord:rendu=sauvelune" }, to: "III_c_sauvelune_main" },
      { label: "Lui donner un souvenir, pour qu'elle sonne toute seule, pour toujours", tag: "Souvenir donné", stain: true, hide: { has: "nord:rendu=sauvelune" }, if: { souv: "enfant:chanson" }, why: "Tu ne l'as plus.",
        fx: { souv: "enfant:chanson", flag: "sauvelune:sonne", ep: ["perso", 2500] }, to: "III_c_sauvelune_don" },
      { label: "Redescendre sur la place", hide: { has: "nord:rendu=sauvelune" }, after: "III_c_sauvelune_main", to: "III_c_ville" },
    ] }),

  III_c_sauvelune_main: P({ title: "Un coup", place: "cloches",
    text: [
      "Tu montes au beffroi. Tu prends la corde. Tu tires.",
      "La cloche sonne un coup, puis rien. Tu tires encore. Un coup. Elle ne sonne qu'une fois par pensée, et la seule pensée, c'est la tienne. Tu peux tirer toute la journée.",
      "La Sonneuse, en bas, hoche la tête. « Il faut que ce soit eux, là-haut. Ou que tu lui donnes quelque chose qui sonne tout seul. »",
    ],
    choices: [{ label: "Redescendre", to: "III_c_sauvelune" }] }),

  III_c_sauvelune_don: P({ title: "La chanson des foins", place: "cloches",
    text: [
      "Tu poses la main sur le bronze. Tu chantes, très bas. *Fauche le pré, fauche la nuit…* La chanson qu'on chante en rond autour des meules, le soir de la fête, celle que ta mère chantait faux et que Joris ne chantait jamais. Tu la chantes jusqu'au bout. Tu la laisses dans le bronze.",
      "Quand tu retires ta main, la cloche se met à sonner. Seule. Lentement. Un coup, puis un autre, puis un autre, au rythme d'une ronde.",
      "Tu ne sais plus ce que tu viens de chanter. Tu sais seulement qu'elle ne s'arrêtera pas. Là-haut, quelqu'un, quelque part, va penser à Sauvelune sans savoir pourquoi, et puis quelqu'un d'autre, et puis un autre.",
      "La Sonneuse a les larmes aux yeux. « Ça fait cent cinquante ans que je n'ai pas entendu ça. Une cloche qu'on aime. »",
    ],
    choices: [{ label: "Redescendre", to: "III_c_ville" }] }),

  III_c_pallanche: P({ title: "Les cent clochettes", place: "cloches",
    text: [
      "Une tour de bois très haute, et dedans, accrochées à des poutres, des clochettes. Des dizaines. Des cloches de quartier, de couvent, de corporation, de porte.",
      { if: { has: "anseau:cloches" }, text: "« Pallanche, dit la Sonneuse. Une partie. Celles qu'on n'a pas sauvées. » Elle compte. « Il en manque beaucoup. Quelqu'un, là-haut, a dû empêcher les autres de venir. Un sonneur têtu, peut-être. »" },
      { if: { not: { has: "anseau:cloches" } }, text: "« Pallanche, dit la Sonneuse. Toutes. Arrivées en une seule nuit. Je n'avais jamais vu ça : cent cloches d'un coup. » Elle les regarde avec pitié. « Elles ne sonnent pas. La ville a oublié qu'elle avait des cloches. »" },
      { with: "pie", text: "Pie lève la tête vers une petite cloche fêlée, tout en haut. « La cloche des Teinturiers. C'est elle qui m'a réveillé tous les matins de ma vie. » Il ne dit rien d'autre. Il reste là longtemps." },
    ],
    choices: [
      { label: "Grimper jusqu'à la petite cloche fêlée, tout en haut, et la toucher", fx: { ep: ["perso", 300] }, to: "III_c_pallanche_felee" },
      { label: "Revenir sur la place", to: "III_c_ville" },
    ] }),
  III_c_pallanche_felee: P({ title: "La cloche fêlée", place: "cloches",
    text: ["Tu grimpes, de poutre en poutre. La petite cloche est fêlée du haut en bas, d'une fente à peine plus large qu'un fil. Tu poses le doigt sur le bronze. Elle ne sonne pas. Elle frémit. Et dans le frémissement, tu entends, très loin, une rue étroite qui sent l'indigo, un ruisseau de trois couleurs, des volets qu'on ouvre, un matin. Pas un son. Un réveil. Elle se souvient de tous les matins qu'elle a sonnés. C'est tout ce qu'elle garde. C'est déjà beaucoup."],
    choices: [{ label: "Redescendre, et revenir sur la place", to: "III_c_ville" }] }),

  III_c_lisse: P({ title: "Le clocher carré", place: "cloches",
    text: [
      "Un clocher carré, de pierre jaune, à la manière de Corvanne. Au pied, assis par terre, dans la rue, des gens. Beaucoup. Trois cents, peut-être. Des femmes, des vieux, des enfants. Ils ne marchent pas avec les autres. Ils attendent.",
      "« Lisse-en-Corvanne, dit la Sonneuse. Ils sont arrivés tous ensemble, il y a deux ans et demi. Ils ne veulent pas partir. Ils disent qu'ils attendent quelqu'un. »",
      { with: "ysolde", text: "Derrière toi, Ysolde s'est arrêtée net. Elle regarde les gens assis. Elle ne se souvient pas d'eux. Ils lèvent la tête, et eux se souviennent d'elle." },
      { without: "ysolde", text: "Une vieille femme se lève, s'approche, te regarde. « Tu n'es pas elle, dit-elle, déçue. On attend la capitaine. Celle du pont. Il faut qu'elle sache nos noms. On ne partira pas avant. »" },
    ],
    choices: [
      { label: "Laisser Ysolde aller à eux", hide: { not: { present: "ysolde" } }, to: "III_c_lisse_ysolde" },
      { label: "Leur demander leurs noms, pour les lui porter", hide: { present: "ysolde" }, fx: { flag: "iii:lisse_noms", ep: ["perso", 1500] }, to: "III_c_lisse_noms" },
    ] }),

  III_c_lisse_ysolde: P({ title: "La capitaine", place: "cloches",
    fx: { flag: "iii:lisse_ysolde" },
    text: [
      "Ysolde avance. Les gens se lèvent. Ils ne s'écartent pas. Ils l'entourent.",
      "Une femme dit son nom. Puis celui de son fils, qu'elle tient par la main, huit ans. Puis un vieux dit le sien. Puis tous, l'un après l'autre, sans hâte, sans colère, en la regardant dans les yeux. Ça dure longtemps. Ysolde reste debout. Elle les écoute tous.",
      { if: { has: "ysolde:lisse_sait" }, text: "Elle savait ce qu'elle avait fait. Elle ne savait pas à qui. Maintenant, elle sait." },
      { if: { not: { has: "ysolde:lisse_sait" } }, text: "Elle ne savait pas. Ils le lui disent, simplement. Le pont, la nuit, l'ordre. Elle sur la rive. Elle qui regarde." },
      "Quand le dernier a parlé, elle tombe à genoux. Personne ne la touche. La vieille femme dit : « Voilà. Maintenant tu sais. Nous, on peut partir. »",
    ],
    choices: [
      { label: "« Attendez. » Ysolde se relève. Elle veut qu'ils viennent témoigner, là-haut", fx: { flag: "lisse:temoins_veulent", conf: { ysolde: 10 }, ep: ["perso", 2500] }, to: "III_c_lisse_temoins" },
      { label: "Les laisser partir", fx: { flag: "lisse:partis", ep: ["perso", 1500] }, to: "III_c_lisse_partis" },
    ] }),

  III_c_lisse_noms: P({ title: "Trois cents noms", place: "cloches",
    text: [
      "Ils te les disent. Un par un. Trois cents. Tu les répètes, à voix basse, pour les garder. Tu n'y arriveras pas. Tu en gardes une poignée : une femme qui s'appelait Berthe Aulier, son fils Colin, huit ans. Un vieux, Mathieu Gros-Louis, qui était passeur.",
      "« Dis-les-lui, dit la vieille femme. Si tu la vois. On attendra encore un peu. »",
    ],
    choices: [{ label: "Revenir sur la place", to: "III_c_ville" }] }),

  III_c_lisse_temoins: P({ title: "Les témoins", place: "cloches",
    text: [
      "« Là-haut, dit Ysolde, il y a une guerre qui recommence à cause de ce pont, et personne ne sait pourquoi. Corvanne a oublié ses morts. Esquarre a oublié son crime. Moi, j'avais tout oublié. » Elle les regarde. « Si vous partez, ça continuera. Si vous venez, et que vous dites vos noms devant les deux royaumes, ça s'arrêtera peut-être. »",
      "Ils se regardent. La vieille femme dit : « On ne revient pas, d'ici. Personne. Sauf si quelqu'un nous ramène. » Elle te regarde, toi. Elle ne sait pas pourquoi elle te regarde.",
    ],
    choices: [{ label: "Revenir sur la place", to: "III_c_ville" }] }),

  III_c_lisse_partis: P({ title: "Ils partent", place: "cloches",
    text: ["Ils se lèvent, tous ensemble, et rejoignent la file des marcheurs, vers la porte. Le clocher carré, derrière eux, se tait. Ysolde les regarde partir jusqu'au dernier. Puis elle se relève, époussette ses genoux, et dit : « Allons-y », de sa voix de capitaine. C'est la seule voix qu'elle a."],
    choices: [{ label: "Revenir sur la place", to: "III_c_ville" }] }),

  III_c_linette: P({ title: "La petite fille qui rit", place: "cloches",
    text: [
      "Dans la rue des carillons, une petite fille de six ans joue à la marelle sur les pavés blancs. Elle rit toute seule. Elle a des taches de rousseur, un nez retroussé, une robe trop grande, et elle saute à cloche-pied en chantant une comptine des bas-quartiers.",
      { with: "pie", text: "Pie s'arrête si brusquement que tu lui rentres dedans. Il regarde la petite fille. Il a la bouche ouverte. « Linette », dit-il, tout bas." },
      "Elle lève la tête. Elle sourit. « Tu connais mon frère ? demande-t-elle. Il s'appelle Pie. Il est très fort. Il va venir me chercher. Il l'a promis. »",
      "La Sonneuse, derrière toi, dit à voix basse : « Celle d'avant. Quand on vend quelqu'un aux Greffiers, ce qu'il était arrive ici. Le reste continue là-haut, sans. »",
    ],
    choices: [
      { label: "Laisser Pie aller à elle", hide: { not: { present: "pie" } }, to: "III_c_linette_pie" },
      { label: "Lui dire que tu connais Pie", hide: { present: "pie" }, fx: { flag: "linette_avant:vue" }, to: "III_c_linette_dit" },
    ] }),

  III_c_linette_pie: P({ title: "Il l'a promis", place: "cloches",
    fx: { flag: ["linette_avant:vue", "linette_avant:pie"] },
    text: [
      "Pie s'agenouille devant elle. Elle le regarde, la tête penchée. Elle ne le reconnaît pas : il a vingt ans de plus que le frère dont elle se souvient.",
      "« Tu es qui, toi ? »",
      "Pie ouvre la bouche. Il la referme. Il fait apparaître une pièce derrière son oreille à elle. Elle éclate de rire. « Mon frère sait faire ça aussi ! Mieux que toi ! »",
      "« Sûrement », dit Pie. Sa voix casse. Il reste à genoux à faire des tours de pièce pendant une heure, dans la rue des carillons, pour une petite fille qui attend son frère.",
    ],
    choices: [{ label: "Revenir sur la place, quand il est prêt", fx: { conf: { pie: 10 } }, to: "III_c_ville" }] }),

  III_c_linette_dit: P({ title: "Il va venir", place: "cloches",
    text: ["« Je le connais. Il te cherche. » Elle hoche la tête, très sérieuse. « Je sais. Il l'a promis. » Puis elle retourne à sa marelle. Tu la regardes sauter. Tu te demandes laquelle des deux Linette il voudrait, s'il devait choisir. Tu espères qu'il n'aura pas à choisir."],
    choices: [{ label: "Revenir sur la place", to: "III_c_ville" }] }),

  III_c_aymeric: P({ title: "Le prince", place: "cloches",
    text: [
      "Un garçon de dix ans, en pourpoint de velours bleu brodé de lys, court entre les tours en riant, poursuivi par personne. Il s'arrête devant toi, essoufflé. « Tu as vu ma mère ? Elle est reine. Elle devait venir. »",
      "Il n'est pas vraiment là. Il est fait de ce qu'elle se rappelait de lui : il change, quand on le regarde. Tantôt il a dix ans, tantôt quatre, tantôt il en a seize et une épée. Il est mort il y a dix ans. Il est ici parce qu'elle l'a donné.",
      { with: "lisandre", text: "Lisandre s'est accroupie devant lui. « Elle va venir, lui dit-elle. Elle te cherche. Je lui dirai où tu es. » Elle le dit avec la voix des ballades tristes. Puis elle se relève, et elle n'a plus cette voix du tout." },
    ],
    choices: [{ label: "Le regarder repartir en courant", fx: { flag: "aymeric:vu" }, to: "III_c_ville" }] }),

  III_c_bourdon: P({ title: "Le bourdon", place: "cloches",
    text: [
      "Au centre de la ville, une tour plus haute que toutes les autres, blanche, fine, pointue. Dedans, une cloche énorme, noire de vieillesse, avec sur le flanc un ours couronné, en relief.",
      "« Valcendre, dit la Sonneuse. La plus vieille d'ici. Elle est arrivée avant moi, avant toutes. Elle n'a jamais sonné. » Elle baisse la voix. « On dit qu'elle ne sonnera pas pour une pensée. Seulement pour une main. Une main de là-bas. »",
      "Tu montes. La corde est là, épaisse comme ton bras, toute neuve, comme si personne ne l'avait jamais touchée.",
    ],
    choices: [{ label: "Tirer la corde", to: "III_c_bourdon_sonne" }] }),

  III_c_bourdon_sonne: P({ title: "Une main de là-bas", place: "cloches",
    fx: { flag: ["acte3:cloches_fini", "enfant:bourdon"], ep: ["histoire", 4000] },
    text: [
      "Tu tires. Rien. Tu tires encore, de tout ton poids.",
      "Elle sonne.",
      "Ce n'est pas un son. C'est un tremblement, qui part de la tour, traverse la ville, fait sonner toutes les autres cloches d'un seul coup, des milliers, et roule sur la plaine blanche jusqu'aux tours lointaines. Les marcheurs, dans la plaine, s'arrêtent tous et se tournent vers toi.",
      "Quand tu redescends, la Sonneuse est à genoux au pied de la tour. Elle ne te regarde pas en face.",
      { with: "hylas", text: "Hylas est adossé au mur. Il pleure, sans bruit, ses yeux qui voient grands ouverts." },
      "Au loin, à l'horizon, devant les tours blanches, une forêt d'arbres noirs est apparue, qui n'y était pas.",
    ],
    choices: [{ label: "Repartir vers la plaine", to: "III_plaine" }] }),
};
