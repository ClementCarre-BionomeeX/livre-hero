// Act I · the Night of the Bells: the six roads cross for the first time. The book moves from one hero to the next
// (fx lead + away: the others are elsewhere in the city), reads how each road ended, then gathers them (fx regroup) for
// the flight out of a city where the white snow falls at midnight.
var ALL = ["enfant", "ysolde", "pie", "hylas", "corbe", "lisandre", "rodric", "linette", "givre", "sansnom", "ombeline", "gaspard"];
function to(hero) { return { lead: hero, away: ALL, leadQuiet: true }; }
function P(o) { return Object.assign({ act: "I", place: "pallanche", noLead: true }, o); }
module.exports = {
  // ---------------------------------------------------------------- 1 · the enfant, at dusk
  N_soir: P({ title: "Le soir de la Fête",
    fx: to("enfant"),
    text: [
      "Le soir de la Fête des Noms, Pallanche ne dort pas. Sur toutes les places, des lampions. Dans toutes les rues, des gens qui chantent le cantique des pèlerins, *que nul ne soit oublié*, en se tenant par le bras. Les files devant les pupitres des greffiers ne raccourcissent pas. On inscrit encore des noms à la lueur des torches.",
      "Tu es sorti de l'auberge de la rue des Cordiers parce que tu ne tenais plus en place. La grille de la Chancellerie est ouverte, ce soir, pour la cérémonie. Les gens y entrent par milliers.",
      { if: { has: "croise:pie_enfant" }, text: "Tu as passé deux soirs, à vêpres, à attendre devant la porte des Teinturiers, puis à la table du fond d'une taverne de quatre tables, sans oser t'approcher du vieil aveugle qui buvait seul au comptoir." },
    ],
    choices: [
      { label: "Aller chez la mère Tissot, et parler cette fois au vieil aveugle", hide: { not: { has: "croise:pie_enfant" } }, to: "N_tissot" },
      { label: "Entrer dans la tour avec la foule", to: "N_foule" },
    ] }),

  N_tissot: P({ title: "Maître Hylas",
    text: [
      { if: { has: "hylas:voie=attendre" }, text: "Il est là. Seul, au comptoir. La mère Tissot a fermé les volets, et il a la clé dans la main. Quand tu t'assieds à côté de lui, il ne tourne pas la tête. « Tu t'es enfin décidé », dit-il." },
      { if: { not: { has: "hylas:voie=attendre" } }, text: "Le comptoir est vide. La mère Tissot essuie un verre. « Le vieux ? Il est remonté à la tour, ce soir. Pour la première fois en trente ans, il n'a pas fini son vin. » Elle te tend une feuille pliée. « Il a dit : si quelqu'un des montagnes vient avec une lettre, donne-lui ça. »" },
      { if: { all: [{ has: "hylas:voie=attendre" }, { not: { has: "hylas:oublie_enfant" } }] }, text: "Il tend la main. Il touche ton visage, du bout des doigts, comme il lit. Le front, les yeux, le menton. Il garde la main là un long moment. « Tu as grandi », dit-il. Rien d'autre." },
      { if: { all: [{ has: "hylas:voie=attendre" }, { has: "hylas:oublie_enfant" }] }, text: "Tu lui montres la lettre. Il la lit du bout des doigts, en suivant les creux de la plume. C'est son écriture. Il le sait. Il ne sait pas l'avoir écrite. « Je t'attendais, dit-il lentement. Je ne savais pas que c'était toi. »" },
      { if: { not: { has: "hylas:voie=attendre" } }, text: "Sur la feuille, d'une écriture penchée qui déborde des lignes : *Ne sois pas dans la tour à minuit.*" },
    ],
    choices: [{ label: "Sortir. Il est presque minuit", fx: { flag: "nuit:enfant_hylas" }, to: "N_garde" }] }),

  N_foule: P({ title: "Dans la foule",
    text: [
      "La foule t'emporte jusqu'à la cour de la Chancellerie, puis dans un escalier immense, puis dans une galerie qui fait le tour d'une salle ronde, sans fenêtres, éclairée par cent lampes. En bas, un livre ouvert sur un lutrin. Des gradins pleins de gens en soie. Une femme en bleu, couronnée.",
      "Il fait froid, dans la salle. Personne n'a l'air de le remarquer.",
    ],
    choices: [{ label: "Attendre minuit", fx: { flag: "nuit:enfant_salle" }, to: "N_garde" }] }),

  // ---------------------------------------------------------------- 2 · Ysolde
  N_garde: P({ title: "Onze heures",
    fx: to("ysolde"),
    text: [
      { if: { has: "ysolde:voie=obeit" }, text: "On t'a mise de garde dans la grande salle, derrière le trône de la reine, avec dix de tes hommes. Tu as livré Hautvent. On te récompense. Tu as une écharpe neuve. En bas, dans les caves de la tour, il y a cent dix-huit personnes que tu as amenées ici à pied." },
      { if: { has: "ysolde:voie=deserte" }, text: "Tu es dans la foule, en manteau de roulier, la capuche sur la tête. On te cherche. Rodric est à côté de toi, plié en deux pour paraître moins grand, ce qui ne trompe personne. « Mes gens sont en bas », dit-il. « Ceux qu'ils ont repris. Trente. »" },
      { if: { has: "ysolde:voie=ruse" }, text: "Tu es de garde dans la grande salle, derrière le trône. Frère Sévrin est assis au troisième rang des gradins. Il ne te quitte pas des yeux. Dans une auberge près des abattoirs, une famille de Corvanne attend que tu viennes la chercher." },
      { after: "croise:parle_ysolde", if: { seen: "N_foule" }, text: "Dans la galerie, au-dessus, parmi les milliers de visages, il y en a un que tu reconnais. Quelqu'un des montagnes. La route des Cloches." },
      { after: "croise:eau_rodric", before: "croise:parle_ysolde", if: { seen: "N_foule" }, text: "Dans la galerie, au-dessus, parmi les milliers de visages, il y en a un que tu reconnais. Quelqu'un des montagnes. La route des Cloches." },
      "Minuit moins le quart approche. Mordace est au pied du lutrin. La chanteuse de la reine monte sur l'estrade.",
    ],
    choices: [
      { label: "Rester dans la salle, près de la reine. Quoi qu'il arrive", fx: { flag: "nuit:ysolde=reine" }, to: "N_chant" },
      { label: "Descendre aux caves, maintenant, pendant que tout le monde regarde la chanteuse", fx: { flag: "nuit:ysolde=caves" }, to: "N_caves" },
    ] }),

  N_caves: P({ title: "Les caves",
    text: [
      "Les escaliers sont vides : tout le monde est dans la salle. Tu descends, dix marches, cent marches. Les caves de la tour sont des salles basses, voûtées, sans portes, et dedans, assis par terre, en rang, les gens de Hautvent. Ils ne sont pas attachés. Ils n'en ont pas besoin. Ils regardent devant eux.",
      { if: { has: "ysolde:voie=deserte" }, text: "Rodric les appelle par leurs noms, un par un, à voix basse. Certains tournent la tête. Pas tous." },
      { if: { not: { has: "ysolde:voie=deserte" } }, text: "Tu reconnais Maëlle. Elle lève les yeux vers toi. Elle ne te reconnaît pas." },
    ],
    choices: [
      { label: "Les faire lever, un par un, et les faire sortir par la porte du linge", test: { dom: "social", label: "Commandement", help: [{ if: { has: "hautvent:parole" }, v: 10 }, { if: { has: "ysolde:voie=deserte" }, v: 10 }] },
        win: { fx: { flag: "hautvent:sortis", ep: ["histoire", 2000] }, to: "N_chant" }, lose: { fx: { flag: "hautvent:quelques_uns" }, to: "N_chant" } },
    ] }),

  // ---------------------------------------------------------------- 3 · Lisandre
  N_chant: P({ title: "Minuit moins le quart",
    fx: to("lisandre"),
    text: [
      "Tu montes sur l'estrade. Le luth est lourd. La salle se tait. Devant toi, le Grand Livre, ouvert, immense, couvert de noms. Derrière toi, la reine. À côté du lutrin, Mordace, qui ne te regarde pas : il regarde le sablier.",
      { if: { has: "lisandre:ilan_dit" }, text: "Au dernier rang des gradins, les manteaux bleus de Corvanne. Ilan est debout." },
      { if: { has: "nuit:ysolde=reine" }, text: "La chevalière de Brenne est dans la salle, la main sur la garde de son épée. Elle ne te quitte pas des yeux." },
      { if: { has: "lisandre:voie=chanter" }, text: "Tu as décidé de chanter ce qu'on t'a demandé." },
      { if: { has: "lisandre:voie=taire" }, text: "Tu as décidé de te taire." },
      { if: { has: "lisandre:voie=autre" }, text: "Tu as décidé de chanter autre chose. Tu ne sais toujours pas quoi." },
      "Mordace retourne le sablier.",
    ],
    choices: [
      { label: "Chanter la ballade de Hautvent", fx: { flag: "nuit:chant=ballade" }, to: "N_ballade" },
      { label: "Ne pas chanter", fx: { flag: "nuit:chant=silence", ep: ["perso", 800] }, to: "N_silence" },
      { label: "Chanter la chanson de port de ta mère, avec ta vraie voix", if: { souv: "lisandre:voix" }, why: "Tu ne sais plus où elle est.", fx: { flag: "nuit:chant=voix", ep: ["perso", 1500] }, to: "N_voix" },
      { label: "Chanter la chanson de soldat, pour la reine", if: { souv: "lisandre:isaure" }, why: "Tu ne t'en souviens plus.", fx: { flag: "nuit:chant=soldat", ep: ["perso", 1200] }, to: "N_soldat" },
    ] }),

  N_ballade: P({ title: "La ballade de Hautvent",
    text: [
      "Tu chantes. Ta voix ne tremble pas. *Hautvent, Hautvent, où souffle le vent de la trahison…* Le refrain revient, la salle le reprend au troisième passage, puis au quatrième, des milliers de voix. Les gens chantent les noms des traîtres de Hautvent avec toi. Ils chantent juste.",
      { if: { has: "lisandre:ballade=double" }, text: "Et sous les mots, ce que tu as caché. Tu vois, dans la galerie, une ou deux têtes qui se lèvent. Pas plus." },
      "Le dernier vers tombe avec le dernier grain du sablier.",
    ],
    choices: [{ label: "Minuit", to: "N_cloches" }] }),

  N_silence: P({ title: "Le silence",
    text: [
      "Tu poses le luth. Tu ne chantes pas. La salle attend. Les secondes passent. Quelqu'un tousse. La reine se penche en avant.",
      "Mordace ne s'est pas retourné. Il dit, sans élever la voix : « Le chœur. » Et du fond de la salle, quarante voix d'enfants, grêles, parfaitement justes, se mettent à chanter la ballade à ta place. Des enfants en gris, la tête rasée.",
    ],
    choices: [{ label: "Minuit", to: "N_cloches" }] }),

  N_voix: P({ title: "Une chanson de port",
    text: [
      "Tu poses le luth. Tu chantes la chanson que ta mère chantait en vendant le poisson, sur le port, avec ta voix d'avant : rauque, trop grave, fausse. Une chanson de rien du tout, sur une femme qui appelle ses enfants pour la soupe, un par un, par leur nom.",
      "Dans la galerie, une femme se met à pleurer. Puis une autre. Quelqu'un, quelque part, crie un prénom. Puis un autre. La salle se remplit de prénoms criés.",
      "Mordace s'est retourné. Il te regarde, pour la première fois.",
    ],
    choices: [{ label: "Minuit", to: "N_cloches" }] }),

  N_soldat: P({ title: "La cantinière et le sergent",
    text: [
      "Tu chantes la chanson de soldat. Grossière, joyeuse, absurde dans cette salle. Les gens de la cour se figent. Les manteaux bleus de Corvanne, eux, la reconnaissent. Ils se mettent à chanter le refrain.",
      "Derrière toi, la reine s'est levée. Elle chante. Faux. Avec l'accent de Corvanne. Elle te regarde, et tu vois, dans ses yeux, quelque chose revenir de très loin.",
      "« Lisandre », dit-elle, sans chercher.",
    ],
    choices: [{ label: "Minuit", fx: { flag: "isaure:revenue" }, to: "N_cloches" }] }),

  // ---------------------------------------------------------------- 4 · the belfry: Hylas or Pie
  N_cloches: P({ title: "Le grand beffroi",
    fx: { lead: "pie", away: ALL, leadQuiet: true },
    text: [
      "Au sommet de la tour, sous la plume et la clé de fer, il y a une salle que personne ne voit jamais : le grand beffroi. Cent cordes descendent du plafond, tendues, et vont, par des poulies, par des gaines de cuir, jusqu'aux cent clochers de la ville. Au centre, une roue de chêne, grande comme une meule, avec un seul levier.",
      { if: { has: "hylas:voie=cloches" }, text: "Le vieil aveugle est déjà là, assis sur la dernière marche, à bout de souffle. Il est venu par l'escalier. Il tient la porte ouverte pour toi. « Tu sens toujours la suie, dit-il. Bien. »" },
      { if: { has: "pie:choix=liste" }, text: "La page arrachée est dans ta chemise. *Les cent, ensemble, à minuit.* Personne ne t'a cru, en ville. Alors tu es venu." },
      { before: "pie:souvenir_donne", if: { has: "pie:choix=linette" }, text: "Linette est restée au grenier. Tu lui as dit de ne pas ouvrir. Elle a dit oui, maître." },
      { after: "pie:souvenir_donne", if: { has: "pie:choix=linette" }, text: "Linette est restée au grenier. Tu lui as dit de ne pas ouvrir. Elle a dit oui, sans demander pourquoi." },
      { if: { has: "pie:choix=boite" }, text: "La boîte de plomb est contre ta poitrine. Linette est quelque part en dessous, dans le chœur." },
      "Deux gardes noirs, de chaque côté de la roue. Le levier est en haut. Quelqu'un, en bas, va donner le signal.",
    ],
    choices: [
      { label: "Couper les cordes, autant que tu peux, avant le signal", test: { dom: "discretion", label: "Lame", help: [{ if: { has: "hylas:voie=cloches" }, v: 15 }, { if: { has: "pie:plan_clocher" }, v: 10 }] },
        win: { fx: { flag: "nuit:cordes=coupees", ep: ["histoire", 2000] }, to: "N_cordes" }, lose: { fx: { flag: "nuit:cordes=quelques" }, to: "N_cordes_rate" } },
      { label: "Bloquer la roue avec ta dague", test: { dom: "combat", label: "Force", diff: -10 },
        win: { fx: { flag: "nuit:roue=bloquee", ep: ["histoire", 2000] }, to: "N_roue" }, lose: { fx: { flag: "nuit:cordes=quelques" }, to: "N_cordes_rate" } },
    ] }),

  N_cordes: P({ title: "Quarante cordes",
    text: [
      "Saint Brice ne coupe pas, mais ta dague, si. Tu cours d'une corde à l'autre, les gardes derrière toi. Dix. Vingt. Quarante. À la quarante et unième, une main t'attrape au col. En bas, très loin, une voix crie : *Maintenant.* La roue tourne.",
      "Soixante cloches sonnent. Quarante se taisent.",
    ],
    choices: [{ label: "Minuit", to: "N_minuit" }] }),

  N_roue: P({ title: "La roue",
    text: [
      "Tu enfonces ta dague entre la roue et son axe au moment où la voix, en bas, crie : *Maintenant.* La roue tourne d'un quart de tour, grince, et s'arrête. La lame casse. La roue repart. Le quart de tour a suffi : les cloches ne sonnent pas ensemble. Elles sonnent les unes après les autres, en désordre, comme un jour ordinaire.",
    ],
    choices: [{ label: "Minuit", to: "N_minuit" }] }),

  N_cordes_rate: P({ title: "Les cent",
    text: [
      "Tu n'as pas le temps. Un garde te jette contre le mur. En bas, très loin, une voix crie : *Maintenant.* La roue tourne. Les cent cordes se tendent ensemble, d'un coup, avec un bruit de harpe qu'on arrache.",
      "Les cent cloches de Pallanche sonnent minuit en même temps.",
    ],
    choices: [{ label: "Minuit", to: "N_minuit" }] }),

  // ---------------------------------------------------------------- 5 · midnight, from the north gate: Corbe
  N_minuit: P({ title: "Minuit",
    fx: to("corbe"),
    text: [
      "Tu es sur le chemin de ronde de la porte du Nord, parce que c'est le seul endroit de la ville d'où l'on voit les collines. Les cloches sonnent.",
      "Et il neige.",
      "Pas des collines. Du ciel, au-dessus de la tour noire, en spirale, comme d'un trou. Une neige fine, sèche, blanche, qui crisse. Elle tombe sur les toits, sur les places, sur les lampions, sur les gens qui chantent, et les gens s'arrêtent de chanter.",
      { if: { any: [{ has: "nuit:cordes=coupees" }, { has: "nuit:roue=bloquee" }] }, text: "Elle tombe moins sur les quartiers du sud, où les cloches se sont tues, ou ont sonné en désordre. Elle tombe à gros flocons sur le centre." },
      { if: { has: "nuit:chant=voix" }, text: "Sur la place aux Clercs, au pied de la tour, des gens crient des prénoms. Là où ils crient, la neige fond en touchant le sol." },
      "Et dans la plaine, au pied des collines, quelque chose monte vers la porte. Plusieurs choses. Grandes. Blanches. Qui ne s'enfoncent pas.",
      { if: { has: "corbe:voie_bran=donne" }, text: "Bran est à côté de toi, sa hallebarde dans les mains. Il ne sait pas ce que c'est. Toi, tu sais." },
      { if: { has: "corbe:voie_bran=oui" }, text: "Le garde roux est à la herse. Il te regarde. Il attend que tu lui dises quoi faire." },
    ],
    choices: [
      { label: "Faire fermer la herse", test: { dom: "social", label: "Cri", help: [{ if: { any: [{ has: "corbe:voie_bran=donne" }, { has: "corbe:voie_bran=oui" }] }, v: 20 }] },
        win: { fx: { flag: "nuit:herse=fermee", ep: ["histoire", 1500] }, to: "N_herse" }, lose: { fx: { flag: "nuit:herse=ouverte" }, to: "N_herse_ouverte" } },
      { label: "Battre le tambour et chanter le chant des morts, du haut du rempart", if: { item: "tambour" }, why: "Tu n'as pas ton tambour.",
        test: { dom: "magie", label: "Chant", help: [{ if: { souv: "corbe:chant" }, v: 15 }, { if: { has: "gaspard:chant" }, v: 10 }] },
        win: { fx: { flag: "nuit:chant_corbe", ep: ["histoire", 1500] }, to: "N_chant_corbe" }, lose: { fx: { flag: "nuit:herse=ouverte" }, to: "N_herse_ouverte" } },
    ] }),

  N_herse: P({ title: "La herse",
    text: ["La herse tombe dans un bruit de fin du monde. Les choses blanches s'arrêtent devant, à dix pas. Elles attendent. Elles ont l'air de savoir qu'on finira par l'ouvrir."],
    choices: [{ label: "Descendre vers la tour", to: "N_place" }] }),

  N_chant_corbe: P({ title: "Le chant des morts",
    text: [
      "Tu bats le tambour. Tu chantes les trois vers. Ta voix porte, au-dessus des cloches. Les choses, en bas, s'arrêtent. Elles lèvent la tête vers toi. L'une d'elles, la plus petite, se met à se balancer.",
      "Elles ne repartent pas. Elles ne montent plus.",
    ],
    choices: [{ label: "Descendre vers la tour", to: "N_place" }] }),

  N_herse_ouverte: P({ title: "Dans les rues",
    text: ["Personne ne t'entend. La herse reste levée. Les choses blanches passent sous la voûte, lentement, sans toucher les gardes qui les regardent passer sans comprendre, et se répandent dans les rues. Tu cours devant elles, vers la tour."],
    choices: [{ label: "Courir vers la tour", to: "N_place" }] }),

  // ---------------------------------------------------------------- 6 · together
  N_place: P({ title: "La place aux Clercs",
    fx: { regroup: true, lead: "enfant", flag: "nuit:reunis" },
    text: [
      "La place aux Clercs, au pied de la tour, est blanche. Les pupitres des greffiers sont renversés. Des gens errent, au milieu de la neige, en se tenant les coudes, et se demandent les uns aux autres où ils sont.",
      "Toi, tu sais où tu es. Tu sais qui tu es. La neige te tombe sur les cheveux, sur les mains, et tu ne perds rien. Tu le sens : elle glisse.",
      "Il y a d'autres gens, sur la place, qui savent encore où ils sont. Tu les vois parce qu'ils sont les seuls à regarder autour d'eux au lieu de regarder le ciel.",
      { if: { has: "nuit:ysolde=caves" }, text: "Une femme à la carrure de soldat, qui sort par la porte du linge à la tête d'une file de gens hagards." },
      { if: { has: "nuit:ysolde=reine" }, text: "Une femme, l'épée à la main, qui sort de la tour en soutenant une dame en bleu qui a perdu sa couronne." },
      "Un jeune homme maigre, couvert de suie, qui saute d'une gouttière. Un vieillard aveugle, avec une canne d'ébène, qui descend les marches de la tour une à une. Une femme vêtue de peaux de renne, un arc à la main, qui arrive en courant de la rue du Nord. Une chanteuse en robe de cour, pieds nus, ses souliers à la main.",
      "Vous vous regardez. Vous ne vous connaissez pas. Vous êtes six. Vous êtes, peut-être, les six seules personnes de Pallanche qui se souviennent encore de tout.",
    ],
    choices: [{ label: "« Il faut sortir de la ville. »", to: "N_glaneurs" }] }),

  N_glaneurs: P({ title: "Les choses blanches",
    combat: { title: "Les Glaneurs", enemies: [{ id: "glaneur_petit", n: 3 }, "garde_noir"], terrain: "bati", range: "contact",
      flee: { dom: "discretion", label: "Suivre le jeune homme couvert de suie par les toits", fx: { flag: "nuit:fuite_toits" }, to: "N_aube" },
      win: { fx: { ep: ["seance", 3000], flag: "nuit:glaneurs_battus" }, to: "N_aube" },
      lose: { fx: { flag: "nuit:fuite_dure" }, to: "N_aube" } },
    text: [
      "Elles débouchent de toutes les rues à la fois. Trois choses blanches, plus grandes que des hommes, et derrière elles, un garde noir qui les mène comme on mène des chiens, une boîte de plomb ouverte à la main.",
      "Pour la première fois, vous êtes six à faire face.",
    ],
    choices: [] }),

  N_aube: P({ title: "L'aube sur Pallanche",
    fx: { flag: "acte1:fin", ep: ["histoire", 5000], catchup: 5, catchupAll: true, catchupWhy: "la Nuit des Cloches" },
    text: [
      "Vous sortez de Pallanche par une poterne des Teinturiers que le jeune homme maigre connaît, et vous marchez jusqu'à l'aube, jusqu'aux collines du nord. Personne ne vous suit. Personne ne se souvient qu'il faudrait vous suivre.",
      "Au lever du jour, vous vous asseyez dans l'herbe, au sommet d'une colline, et vous regardez la ville en bas.",
      { if: { any: [{ has: "nuit:cordes=coupees" }, { has: "nuit:roue=bloquee" }] }, text: "Le centre est blanc. Le sud ne l'est qu'à moitié. Par endroits, des toits rouges, des rues grises, des gens qui marchent comme si de rien n'était." },
      { if: { not: { any: [{ has: "nuit:cordes=coupees" }, { has: "nuit:roue=bloquee" }] } }, text: "Pallanche est blanche, d'un mur à l'autre, sous le soleil de juillet. Les cent clochers dépassent de la neige comme des mâts." },
      { if: { has: "nuit:chant=voix" }, text: "Sur la place aux Clercs, une tache grise, ronde, où la neige a fondu." },
      "Vous vous dites vos noms. Ça prend du temps. Vous les répétez, deux fois, trois fois, pour être sûrs.",
      { if: { all: [{ has: "nuit:enfant_hylas" }, { not: { has: "hylas:oublie_enfant" } }] }, text: "Le vieil aveugle ne dit pas grand-chose. Il est assis à côté de toi, et de temps en temps, il tourne la tête vers toi, comme pour vérifier que tu es toujours là." },
      { with: "rodric", text: "Rodric Trois-Cloches est assis un peu à l'écart, sa hache sur les genoux, et regarde la chevalière de Brenne comme on regarde un problème qu'on n'a pas encore résolu." },
      "Au nord, derrière les collines, les Hautes-Combes. Au-delà, ce que les clans appellent l'Outre-Blanc. Au sud, Vasselin, la cour, la Couronne. Quelqu'un, quelque part, a commencé à effacer le royaume. Il ne s'arrêtera pas à Pallanche.",
    ],
    choices: [{ label: "Fin de l'Acte I", to: "II_conseil", big: true }] }),
};
