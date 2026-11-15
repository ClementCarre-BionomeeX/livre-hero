// Lot ii5 of "Le Trésor des Taiseurs": the climax of Act II (the storm, Lothaire's raid on the Joncs-Bas, the fire, the
// stolen leaf or the feat that keeps it, Salomé against Lothaire, Tibère's report, the oath of the Taiseurs, Lison's
// choice, the barge upriver) and four side quests of the marshes (the drowned chapel, the eel-fishers' monster, the
// lace love letter, the ferryman of the fugitives).

var P = {};
// Help that the side quests bring to the hard rolls of the raid.
var AIDE_MARAIS = [{ with: "lison", v: 10 }, { if: { has: "iit:anguilles" }, v: 10 }, { if: { has: "iit:passeur" }, v: 10 }];

// ==================================================================== the storm rises
Object.assign(P, {
  IIT_raid: { act: "II", title: "Le coup de suroît", place: "joncs", takes: "evening",
    text: [
      "Tu reviens aux Joncs-Bas par le chenal du nord, à l'heure où les hérons rentrent. À l'ouest, le ciel a pris une couleur de plomb neuf, et une barre noire monte de la mer, basse, épaisse, ourlée de blanc. Les roseaux se couchent tous du même côté. Sur les pilotis, les femmes décrochent la dentelle des séchoirs et la roulent dans des toiles cirées.",
      "Dans ton sac, entre deux chemises, les feuillets de la Muette font un paquet plat, serré dans une toile huilée. Tu le sens contre ton dos à chaque coup de rame. Deux caches ouvertes en un mois : aux Joncs, on te salue maintenant par ton nom, et on baisse la voix après ton passage.",
      { with: "lison", text: "Lison lève le nez vers la barre noire. « {{oreille#iit_lison_ciel|Belle soirée pour rentrer|Ma grand-mère a rêvé de feu trois nuits de suite}} », dit-elle, et elle rame plus fort." },
      { with: "salome", text: "Salomé renifle le vent comme on goûte un vin. « Coup de suroît avant minuit. Ça va souffler à décoiffer les clochers. » Elle compte les barques amarrées au ponton, puis elle les recompte." },
      { with: "gildas", text: "Frère Gildas tire sa capuche sur son front. Le vent plaque sa bure contre ses jambes, et il garde les yeux sur la maison commune, la grande halle de roseaux sur ses pilotis noirs, au milieu du village." },
      { with: "tibere", text: "Tibère regarde vers le sud, du côté de la tour des douanes, plus souvent que vers le ciel. Il dit qu'il a mal au genou, que c'est la pluie qui vient." },
      "Le ponton de la maison commune {{echo#iit_ponton|grince sous les pas des retardataires|rend une voix d'homme, ce matin, basse et pressée : « Trois barques par le sud, deux par le chenal, à la marée de minuit. Le vieux chêne mort pour repère »}}. Des enfants courent sur les planches avec des seaux. On rentre les filets.",
    ],
    choices: [
      { label: "Prévenir les pêcheurs : on viendra cette nuit par le sud et par le chenal", hide: { not: { voile: "iit_ponton" } }, fx: { flag: "iit:prevenu", ep: ["perso", 400] }, to: "IIT_amarres" },
      { label: "Aider les pêcheurs à doubler les amarres", hide: { has: "iit:prevenu" }, to: "IIT_amarres" },
      { label: "Monter chez Mère Ancolie avant la pluie", to: "IIT_veille" },
    ] },

  IIT_amarres: { act: "II", title: "Les amarres", place: "joncs",
    text: [
      "Le vent arrive d'un coup, comme une porte qu'on ouvre. Tu as de l'eau jusqu'aux genoux sur le ponton bas, une aussière dans les mains, et tu tires avec trois pêcheurs pendant qu'un quatrième fait le nœud autour du pieu. Les barques plates cognent les unes contre les autres. L'odeur de vase remonte, épaisse, avec celle de la poix des coques.",
      { after: "iit:anguilles", text: "Cyprien Huchet, le doyen des pêcheurs d'anguilles, te reconnaît et te tape sur l'épaule. « Celui ou celle qui a fait taire la Vieille peut bien tenir un bout de corde. » Ses hommes rient, et tirent plus fort." },
      { after: "iit:prevenu", text: "Tu leur dis ce que le ponton t'a rendu. Les pêcheurs se regardent. Ils te croient sur parole, et ils te demandent seulement où. Une demi-heure plus tard, six hommes avec des gaffes et des tridents à anguilles se couchent dans les roseaux du sud, près du chêne mort, et deux barques bouchent l'entrée du chenal avec une chaîne de nasses." },
      "Un vieux pêcheur, la barbe trempée, crie dans le vent : « Les douaniers {{oreille#iit_douane_barques|sont rentrés à leur tour de bonne heure|nous ont loué nos barques plates hier, et payé d'avance, en argent de la Banque}} ! Ils auront plus chaud que nous ! »",
      { with: "tibere", text: "Tibère tire avec toi en silence. Une fois, sa main glisse, et il reste un moment immobile, l'aussière sciant ses paumes, à regarder vers le sud." },
      { with: "salome", text: "Salomé passe d'une barque à l'autre en refaisant les nœuds des autres, sans demander la permission, et les pêcheurs la laissent faire." },
    ],
    choices: [
      { label: "Monter chez Mère Ancolie, trempé{e} jusqu'aux os", big: true, to: "IIT_veille" },
    ] },

  IIT_veille: { act: "II", title: "La veille chez Mère Ancolie", place: "joncs", takes: "night",
    text: [
      "La maison de Mère Ancolie est la plus haute des Joncs : trois pièces sur des pilotis de chêne, un escalier de bois raide, une lampe à huile qui tremble à chaque rafale. La vieille femme est assise à son carreau de dentellière, les fuseaux entre ses doigts. Elle travaille dans le noir aussi bien qu'à la lampe, et le cliquetis des fuseaux continue quand tu entres.",
      "« Assieds-toi, dit-elle. Tu sens la vase et le chanvre. La pluie sera là avant que tu aies séché. » Elle tend la main, paume ouverte, vers le paquet que tu portes. Ses doigts passent sur la toile huilée sans l'ouvrir. « {{oreille#iit_ancolie_veille|Range tes papiers, le vent les prendrait|Garde-les sur toi, sous la chemise. Le sac, on l'arrache. La peau, il faut la couper}}. »",
      "La pluie arrive. Elle frappe le toit de roseaux comme une poignée de gravier, puis sans arrêt. Par la fenêtre, tu vois les lanternes du village s'éteindre une à une, sauf celle de la maison commune, où les familles des pilotis du bord se sont réfugiées pour la nuit, avec les vieux et les enfants.",
      { with: "lison", text: "Lison s'est assise par terre, le dos contre le genou de sa grand-mère, comme une petite fille. Elle fait semblant de dormir. Mère Ancolie lui pose la main sur la tête sans cesser de travailler de l'autre." },
      { with: "gildas", text: "Frère Gildas reste debout près de la porte. Mère Ancolie tourne vers lui ses yeux blancs. « Le Mont envoie toujours ses frères quand il pleut, Gildas. » « Je suis venu parce qu'on m'a appelé, Mère. » Elle sourit à ses fuseaux." },
      { with: "tibere", if: { all: [{ not: { has: "tibere:espion" } }, { not: { has: "tibere:double" } }] }, text: "Tibère se sèche les mains au-dessus de la lampe. Il a les paumes à vif. « C'est une nuit à rester chez soi, dit-il. {{oreille#iit_tibere_rapport|Personne de sensé ne sortira par ce temps|Je lui ai écrit que tu rentrais ce soir, et que les feuillets dormaient ici. Il a payé dix ducats pour cette ligne}}. »" },
      { with: "tibere", if: { all: [{ has: "tibere:espion" }, { not: { has: "tibere:double" } }] }, text: "Tibère se sèche les mains au-dessus de la lampe sans te regarder. Tu sais pour qui il écrit, et il sait que tu sais. « {{oreille#iit_tibere_honte|Je n'ai rien envoyé cette semaine|J'ai envoyé la dernière lettre mardi, avec la date de ton retour. C'était avant d'avoir honte}}, dit-il au feu. »" },
      { with: "tibere", if: { has: "tibere:double" }, text: "Tibère se sèche les mains au-dessus de la lampe. « J'ai écrit à notre ami aux gants gris que tu restais trois jours de plus à la Saline, dit-il à voix basse. Il m'a répondu merci. {{oreille#iit_tibere_doute|Il m'a cru, j'en suis sûr|Il m'a répondu trop vite. Il a une autre oreille aux Joncs que la mienne}}. »" },
      { with: "tibere", after: "iis:rapport_noye", text: "« Brunel m'a écrit qu'il n'avait rien reçu de la Saline, ajoute Tibère. Il m'a retenu cinq ducats sur la semaine. Le gamin de la gabare jure que le sac a pris l'eau. »" },
    ],
    choices: [
      { label: "Glisser les feuillets sous ta chemise, contre ta peau", hide: { any: [{ not: { voile: "iit_ancolie_veille" } }, { has: "iit:sur_soi" }] }, fx: { flag: "iit:sur_soi" }, to: "IIT_veille_peau" },
      { label: "Prendre Tibère à part, sous l'auvent, dans la pluie", with: "tibere", hide: { not: { voile: "iit_tibere_rapport" } }, to: "IIT_tibere" },
      { label: "Attendre la nuit, en écoutant les fuseaux", big: true, to: "IIT_alerte" },
    ] },

  IIT_veille_peau: { act: "II", title: "Contre la peau", place: "joncs",
    text: [
      "Tu défais la toile huilée et tu sépares les pages. L'une reste dans le sac, roulée dans sa toile, pour le poids et pour l'apparence. L'autre passe sous ta chemise, à plat contre tes côtes, et tu serres ta ceinture par-dessus. Le parchemin est froid, puis il prend la chaleur de ton corps.",
      "Mère Ancolie entend le froissement. Elle hoche la tête une fois, sans lever les yeux de ses fuseaux. « Une page dans la main, une page dans le ventre. Ma mère disait ça des sous, les jours de foire. »",
      { with: "lison", text: "Lison ouvre un œil, te regarde faire, et le referme. Elle a vu où tu as mis la page. Elle gardera ça pour elle." },
    ],
    choices: [
      { label: "Glisser aussi la seconde page sous ta chemise, et rouler tes notes dans la toile à sa place", fx: { flag: "iit:leurre" }, to: "IIT_alerte" },
      { label: "Attendre la nuit, en écoutant les fuseaux", big: true, to: "IIT_alerte" },
    ] },

  IIT_tibere: { act: "II", title: "Sous l'auvent", place: "joncs", with: "tibere",
    text: [
      "L'auvent de roseaux laisse passer l'eau par fils entiers. Tibère s'adosse au pilier, son chapeau ruisselant à la main. Tu te tais. Ce que tu as entendu, il le lit sur ta figure. Il a été sergent vingt ans : il sait reconnaître le moment où un homme a compris.",
      "« Dix ducats, dit-il. Il paie mieux quand c'est important. Cinq la semaine, d'habitude, et dix pour une date. » Il essuie son visage avec sa manche mouillée, et l'eau change de place. « Rosalie a besoin d'un métier à tisser. Je me suis dit qu'un métier, c'était une raison. {{oreille#iit_tibere_rosalie|Je me le redis encore maintenant|C'est faux. J'ai joué les dix ducats le soir même, et je les ai perdus}}. »",
      "Il attend. Derrière lui, la nuit est pleine de roseaux qui se battent. Quelque part au sud, sur l'eau, une lumière s'allume et s'éteint, deux fois.",
      "« Ça, c'est pour moi, dit Tibère. Il attend que je réponde avec ma lanterne. Une fois : rien n'a changé. Deux fois : on a bougé. Trois fois : n'y venez pas. »",
    ],
    choices: [
      { label: "« Tu vas lui répondre. Et tu vas lui mentir. »", fx: { flag: ["tibere:espion", "tibere:aveu", "tibere:double"], conf: { tibere: 10 }, ep: ["perso", 500] }, to: "IIT_tibere_double" },
      { label: "« Prends une barque et va-t'en. Ce soir. »", fx: { flag: ["tibere:espion", "tibere:aveu", "tibere:parti"], leave: "tibere", conf: { tibere: -15 } }, to: "IIT_tibere_chasse" },
      { label: "« Reste. Tu te battras devant moi cette nuit, et je verrai. »", fx: { flag: ["tibere:espion", "tibere:aveu"], conf: { tibere: 5 } }, to: "IIT_alerte" },
    ] },

  IIT_tibere_double: { act: "II", title: "Trois coups de lanterne", place: "joncs", with: "tibere",
    text: [
      "Tibère allume sa lanterne sourde à l'abri de son chapeau. Il ouvre le volet de fer vers le sud, une fois, deux fois, trois fois. Puis il le referme, et il reste un moment la main dessus, comme sur la tête d'un chien.",
      "Au sud, la lumière répond. Une fois. Puis, après un long temps, encore une fois.",
      "« Il a compris : n'y venez pas, dit Tibère. Il va croire que j'ai peur, ou que je suis découvert. {{oreille#iit_tibere_calcul|Dans les deux cas il recule|Dans les deux cas il vient quand même, mais il divise ses hommes pour couvrir la Saline}}. » Il se redresse. Il a l'air plus vieux et plus léger à la fois. « Je te dois une nuit. Je te la paie maintenant. »",
    ],
    choices: [
      { label: "Rentrer attendre avec les autres", big: true, to: "IIT_alerte" },
    ] },

  IIT_tibere_chasse: { act: "II", title: "La barque de Tibère", place: "joncs",
    text: [
      "Tibère obéit. Il descend l'échelle, détache la plus petite barque du ponton et pose sa masse de sergent au fond. La pluie lui colle les cheveux au crâne. Il te regarde une dernière fois, d'en bas, la gaffe à la main.",
      "« Si tu vois Rosalie, dit-il, ne lui dis rien de moi. Ni le bon ni le mauvais. Elle a assez à porter. »",
      "Il pousse sur la gaffe. La barque glisse dans les roseaux et la nuit la prend tout de suite. Au sud, la lumière s'allume deux fois, et attend une réponse. L'eau reste noire.",
    ],
    choices: [
      { label: "Remonter chez Mère Ancolie", big: true, to: "IIT_alerte" },
    ] },
});
// ==================================================================== the raid
Object.assign(P, {
  IIT_alerte: { act: "II", title: "Minuit aux Joncs", place: "joncs", urgent: 25,
    text: [
      { after: "iit:leurre", text: "Les deux pages sont à plat contre tes côtes, sous ta ceinture serrée. Dans la toile huilée, au fond du sac, tes notes, tes relevés et le brouillon de tes déchiffrements tiennent leur place, roulés au même format. Le sac garde son poids et sa forme." },
      "Un chien aboie au sud, puis tous les chiens des Joncs. Tu es à la fenêtre avant d'avoir décidé de te lever. Une ligne de feu monte du côté des roseaux, se courbe dans la pluie, et se plante dans les pilotis de la maison commune. Une deuxième. Une troisième. Les flèches sont enveloppées d'étoupe et de poix ; la pluie les fait fumer sans les éteindre.",
      "Sur l'eau, des lanternes bougent : des barques plates, longues, chargées d'hommes. Tu reconnais les manteaux sombres des douaniers de la tour, leurs casques ronds, et, devant eux, d'autres hommes plus légers, sans casque, qui sautent déjà sur les passerelles. Ils ont des gants gris.",
      { after: "iis:machefer_enfui", text: "Sur la première barque, un grand homme à la barbe noire, une balafre blanche en travers du nez, tient la lanterne. Mâchefer a trouvé un autre payeur." },
      "Sous la maison commune, le feu prend dans la poix étalée sur les pilotis : il monte par-dessous, à l'abri de la pluie, et le vent du large le couche vers les maisons voisines. Une cloche sonne, à coups désordonnés. Quelqu'un crie le nom d'un enfant.",
      { after: "iit:prevenu", text: "Au sud, près du chêne mort, les pêcheurs couchés dans les roseaux se lèvent d'un coup. Une barque de spadassins chavire sous les gaffes ; une autre recule. La chaîne de nasses tient le chenal. Ils sont moins nombreux à arriver que prévu, et ils arrivent en désordre." },
      { after: "tibere:double", text: "Tu comptes les barques : quatre, pas davantage. Le reste a pris la route de la Saline, comme Tibère l'avait dit. {{oreille#iit_alerte_tibere|« Il a mordu », souffle Tibère à côté de toi|« Il a mordu à moitié, souffle Tibère. Et l'autre moitié, c'est qu'on lui a parlé d'ici, quelqu'un des Joncs »}}." },
      { after: "iit:herle", text: "Sur une barque de la douane, à la proue, une lanterne se lève deux fois, puis se baisse. Herlé. La barque traîne, rame mal, et reste en arrière des autres." },
      { with: "lison", text: "Lison a déjà sa gaffe à la main. « Ma grand-mère, la maison commune, la passerelle, dit-elle très vite. Choisis. Je prends ce que tu laisses. »" },
      "Mère Ancolie garde ses fuseaux en main. « Va », dit-elle.",
    ],
    choices: [
      { label: "Courir à la maison commune, où dorment les familles", timeout: true, to: "IIT_feu" },
      { label: "Rester avec Mère Ancolie : les gants gris montent l'escalier", to: "IIT_ancolie_feu" },
      { label: "Tenir la passerelle du sud, l'arme à la main", to: "IIT_passerelle" },
    ] },

  IIT_feu: { act: "II", title: "La maison commune en feu", place: "joncs",
    text: [
      "Tu cours sur les planches glissantes. La maison commune est une longue halle de roseaux et de chêne, posée sur quarante pilotis, avec une seule grande porte du côté du village et une trappe à filets dans le plancher. Sous elle, le feu ronfle. La fumée sort entre les lattes, jaune, épaisse, et l'odeur de poix brûlée prend à la gorge.",
      "La porte est fermée par une chaîne passée dans les anneaux, et un cadenas neuf, de ceux qu'on vend en ville. Derrière, on frappe, on hurle. Quelqu'un a pensé à tout : les spadassins ont bouclé les gens dedans avant d'allumer.",
      { with: "gildas", text: "Frère Gildas arrive derrière toi en relevant sa bure. Il pose la main à plat sur la porte, la retire aussitôt. « Le bois chauffe. Il nous reste peu de temps. »" },
      { after: "voile:iit_douane_barques", text: "Dans l'eau, sous la halle, flotte une barque plate des Joncs, vide, avec un pot de poix renversé dedans. Une des barques louées aux douaniers." },
    ],
    choices: [
      { label: "Briser la chaîne, à la hache ou à l'épaule", test: { dom: "combat", diff: -10, label: "Faire sauter la chaîne", help: [{ with: "tibere", v: 15 }, { with: "salome", v: 10 }] },
        win: { fx: { ep: ["perso", 600] }, to: "IIT_enfants" }, lose: { fx: { pv: -4 }, to: "IIT_enfants" } },
      { label: "Ouvrir le cadenas avec les crochets", if: { item: "crochets" }, why: "Il te faudrait des crochets de serrurier.", test: { dom: "discretion", diff: 0, label: "Crocheter dans la fumée", help: [{ if: { has: "passe:voleur" }, v: 15 }, { if: { has: "metier:mains" }, v: 10 }] },
        win: { fx: { ep: ["perso", 600] }, to: "IIT_enfants" }, lose: { fx: { pv: -4 }, to: "IIT_enfants" } },
      { label: "Passer par-dessous, par l'eau, jusqu'à la trappe à filets", test: { dom: "nature", diff: -10, label: "Nager sous le feu", help: [{ with: "lison", v: 15 }, { with: "salome", v: 10 }] },
        win: { fx: { ep: ["perso", 600] }, to: "IIT_enfants" }, lose: { fx: { pv: -5 }, to: "IIT_enfants" } },
      { label: "Laisse-moi faire", who: "gildas", test: { dom: "magie", diff: 0, label: "Frère Gildas fait céder le fer" },
        win: { fx: { ep: ["perso", 600] }, to: "IIT_enfants" }, lose: { fx: { pv: -3 }, to: "IIT_enfants" } },
    ] },

  IIT_enfants: { act: "II", title: "Le grenier aux filets", place: "joncs",
    text: [
      { outcome: "win", text: "Ça cède. La porte s'ouvre sur une fumée chaude, et les gens sortent en se tenant les uns aux autres, les vieux portés par les jeunes, les femmes avec les nourrissons sous leur châle. Ils toussent, ils pleurent, ils vivent." },
      { outcome: "lose", text: "Ça cède, mais tard, et mal. Tu as la main et l'avant-bras brûlés, la manche collée à la peau. La porte s'ouvre enfin sur une fumée chaude, et les gens sortent en se tenant les uns aux autres, les vieux portés par les jeunes." },
      "Une femme te prend par le bras. « Mes deux petits et le vieil Adalbert ! Au grenier aux filets ! » Elle montre l'échelle, au fond, qui monte sous le toit. Le toit tient encore, à cause de la pluie qui le noie par-dessus. Mais les flammes ont trouvé l'intérieur des murs.",
      "Tu jettes ton sac sur le plancher de la galerie pour avoir les deux mains, et tu montes. Au grenier, entre les filets pendus, deux enfants serrés contre un vieillard qui ne peut plus marcher. Tu prends le plus petit sous le bras, tu fais descendre l'autre devant toi, et le vieil homme s'accroche à ton dos avec une force qui te surprend.",
      { with: "lison", text: "En bas, Lison reçoit les enfants l'un après l'autre et les passe à une barque. Elle te crie quelque chose que le vent emporte." },
      "Quand tu reposes le pied sur la galerie, la place où tu as jeté ton sac est vide.",
    ],
    choices: [
      { label: "Chercher ton sac des yeux, dans la fumée", big: true, to: "IIT_lothaire" },
    ] },

  IIT_ancolie_feu: { act: "II", title: "L'escalier de Mère Ancolie", place: "joncs",
    text: [
      "Deux hommes montent l'escalier raide, l'un derrière l'autre, la lame courte à la main. Le premier pousse la porte du pied. Il voit une vieille femme aveugle à son carreau, et toi debout entre elle et lui.",
      "Mère Ancolie reste assise. Elle parle aux spadassins d'une voix tranquille, comme à des clients. « {{oreille#iit_ancolie_lame|Prenez ce que vous cherchez, messieurs. Je suis vieille, et je n'y vois pas|Le second a peur du feu. La lampe est à ta gauche, et le seuil est plein d'huile de lin}}. »",
      "Le premier spadassin rit. Il a une cicatrice au menton et des gants gris trempés. « On cherche des papiers, la mère. Et {{oreille#iit_spadassin|des babioles en os|le cornet de la vieille : Brunel paie double pour un deuxième cornet}}. » Il te regarde. « Ou on les trouve ici, ou on les trouve sur toi. »",
      { with: "lison", text: "Lison s'est glissée derrière le rideau de la chambre, la gaffe ferrée à la main. Tu vois le bout du fer dépasser du tissu." },
    ],
    choices: [
      { label: "Renverser la lampe sur le seuil plein d'huile", hide: { not: { voile: "iit_ancolie_lame" } }, fx: { ep: ["perso", 700], flag: "iit:ancolie_sauve" }, to: "IIT_ancolie_barque" },
      { label: "Dégainer", fight: { title: "L'escalier de Mère Ancolie", enemies: [{ id: "iit_spadassin", n: 2 }],
        win: { fx: { ep: ["perso", 700], flag: "iit:ancolie_sauve" }, to: "IIT_ancolie_barque" },
        lose: { fx: { pv: -3, flag: "iit:ancolie_blessee" }, to: "IIT_ancolie_barque" },
        flee: { label: "Saisir Mère Ancolie et sauter par la fenêtre", dom: "nature", diff: -10, to: "IIT_ancolie_barque" } } },
      { label: "« Les papiers sont à la maison commune. Allez-y, si vous avez le temps. »", test: { dom: "social", diff: -10, label: "Mentir à un homme de Lothaire", help: [{ if: { has: "metier:parole" }, v: 15 }] },
        win: { fx: { ep: ["perso", 500], flag: "iit:ancolie_sauve" }, to: "IIT_ancolie_barque" }, lose: { fx: { flag: "iit:ancolie_blessee" }, to: "IIT_ancolie_barque" } },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "discretion", diff: 0, label: "Lison frappe depuis le rideau" },
        win: { fx: { ep: ["perso", 600], conf: { lison: 5 }, flag: "iit:ancolie_sauve" }, to: "IIT_ancolie_barque" }, lose: { fx: { flag: "iit:ancolie_blessee" }, to: "IIT_ancolie_barque" } },
    ] },

  IIT_ancolie_barque: { act: "II", title: "La barque sous la maison", place: "joncs",
    text: [
      { if: { has: "iit:ancolie_sauve" }, text: "Les deux spadassins dégringolent l'escalier, l'un sur l'autre, dans une flaque d'huile qui flambe. Mère Ancolie se lève enfin. Elle pose la main sur ton épaule et se laisse guider, à petits pas, jusqu'à la trappe du plancher, sous laquelle une barque est amarrée au pilotis.",
        else: "Le spadassin à la cicatrice a frappé Mère Ancolie du plat de la lame en passant. Elle saigne à la tempe, sans un cri. Les hommes sont repartis vers la maison commune, en riant. Tu la soulèves : elle pèse le poids d'une brassée de fuseaux et d'os. Elle te dit où est la trappe." },
      "Pour la porter par l'échelle de la trappe, tu poses ton sac sur le plancher. Mère Ancolie s'installe au fond de la barque, entre deux nasses, droite, les mains sur les genoux. « Ma dentelle, dit-elle. Mon carreau est resté là-haut. » Puis : « Laisse. J'en referai. »",
      { with: "lison", text: "Lison saute dans la barque à côté de sa grand-mère et prend la gaffe. « Je l'emmène dans les roseaux du nord. Va. » Elle pousse, et la barque disparaît sous les pilotis." },
      { without: "lison", text: "Une barque de pêcheurs passe sous la maison. Tu leur confies Mère Ancolie. Ils l'emmènent vers les roseaux du nord, où les femmes du village se cachent avec les enfants." },
      "Tu remontes l'échelle. Le plancher est vide : ton sac a disparu. La porte est ouverte sur la nuit, et sur la galerie, quelqu'un s'éloigne vers la maison commune.",
    ],
    choices: [
      { label: "Courir après lui, vers la maison commune", big: true, to: "IIT_lothaire" },
    ] },

  IIT_passerelle: { act: "II", title: "La passerelle du sud", place: "joncs",
    text: [
      "La passerelle du sud relie le village aux roseaux : trente pas de planches sur des pieux, large comme deux hommes, sans garde-fou. C'est par là que les barques de la Banque débarquent leurs gens. Tu te plantes au milieu. La pluie te coule dans les yeux.",
      "Ils arrivent à trois de front, puis à deux, parce que la passerelle est étroite : deux spadassins aux gants gris, et derrière eux un douanier en manteau sombre, la hallebarde courte en avant. Plus loin, sur une barque, une lanterne éclaire un homme qui donne des ordres d'une voix calme.",
      { with: "salome", text: "Salomé se met à ta gauche, le coutelas de bord à la main. « Une passerelle, c'est un pont de bateau, dit-elle. Je connais. »" },
      { with: "tibere", text: "Tibère se met à ta droite et fait tourner sa masse de sergent. « Douanier, crie-t-il, rentre chez toi ! Ta solde ne vaut pas une nuit pareille ! »" },
    ],
    choices: [
      { label: "Tenir la passerelle", fight: { title: "La passerelle du sud", enemies: [{ id: "iit_spadassin", n: 2 }, { id: "iit_douanier", n: 1 }],
        win: { fx: { ep: ["perso", 900] }, to: "IIT_douaniers" },
        lose: { fx: { pv: -3 }, to: "IIT_noye" },
        flee: { label: "Couper les cordes de la passerelle et sauter à l'eau", dom: "nature", diff: -10, to: "IIT_noye" } } },
      { label: "Scier les liens de la passerelle avant qu'ils y soient", test: { dom: "nature", diff: -10, label: "Couper la passerelle sous leurs pieds", help: [{ with: "salome", v: 15 }, { with: "lison", v: 10 }] },
        win: { fx: { ep: ["perso", 700] }, to: "IIT_douaniers" }, lose: { fx: { pv: -2 }, to: "IIT_noye" } },
      { label: "Héler le capitaine des douanes, sur sa barque", to: "IIT_douaniers" },
    ] },
});
// ==================================================================== the customs men, the water, Lothaire
Object.assign(P, {
  IIT_douaniers: { act: "II", title: "Le capitaine des douanes", place: "joncs",
    text: [
      { outcome: "win", text: "Le dernier spadassin bascule dans l'eau noire avec un bruit de sac. Le douanier recule sur la passerelle, la hallebarde basse, et regarde vers la barque à la lanterne pour savoir ce qu'il doit faire." },
      "Sur la barque, l'homme qui donne les ordres lève sa lanterne. Un manteau de douane à revers rouges, une barbe grise taillée court, un visage de fonctionnaire las. Le capitaine Sévrac, de la tour des douanes du delta. Tu l'as vu passer sur le chenal, les jours de marché, compter les barques de sel avec un bâton à encoches.",
      "« Au nom de la République, crie-t-il, {{oreille#iit_sevrac|la douane recherche des marchandises volées aux Archives|la Banque paie mes hommes : trois mois d'arriérés de solde, versés ce matin. Et je ne veux pas un mort sur mon registre}} ! Rendez-les, et chacun rentre chez soi ! »",
      { after: "IIT_dent_sevrac", text: "Il te reconnaît. Tu le vois à la façon dont sa lanterne s'arrête sur ta figure, une seconde de trop. La dentelle, la tour, le garçon aux oreilles décollées." },
      { after: "iit:herle", text: "Dans la barque de Sévrac, un jeune douanier tient la seconde lanterne. Herlé. Il te reconnaît. Il regarde vers la maison commune en flammes, puis vers son capitaine, et sa main tremble sur la hampe." },
      { with: "tibere", text: "Tibère se penche vers toi. « Un capitaine qui crie la loi aussi fort, c'est qu'il n'est pas sûr de l'avoir avec lui. Je connais le ton. Je l'ai pris souvent. »" },
    ],
    choices: [
      { label: "« Capitaine, rentrez avec vos hommes vivants. La Banque paiera aussi si vous ne trouvez rien. »", hide: { not: { voile: "iit_sevrac" } }, fx: { ep: ["perso", 800], fac: { hautes: 5 } }, to: "IIT_douaniers_retrait" },
      { label: "Désigner Herlé à son capitaine : « Demandez à votre homme qui a mis le feu. »", hide: { not: { has: "iit:herle" } }, fx: { ep: ["perso", 600] }, to: "IIT_douaniers_retrait" },
      { label: "Lui rappeler qu'un incendie volontaire, sous la loi de la République, se paie de la corde", test: { dom: "social", diff: -10, label: "Faire reculer la douane", help: [{ with: "tibere", v: 15 }, { if: { has: "metier:lire" }, v: 10 }] },
        win: { fx: { ep: ["perso", 600] }, to: "IIT_douaniers_retrait" }, lose: { fx: { flag: "iit:douane_reste" }, to: "IIT_lothaire" } },
      { label: "Le laisser crier, et courir vers la maison commune", fx: { flag: "iit:douane_reste" }, to: "IIT_lothaire" },
    ] },

  IIT_douaniers_retrait: { act: "II", title: "Le sifflet", place: "joncs",
    fx: { flag: "iit:douane_partie" },
    text: [
      "Sévrac te regarde longtemps, la lanterne levée. Puis il porte un sifflet de cuivre à ses lèvres et souffle trois coups longs. Sur l'eau, les barques de la douane s'arrêtent, tournent, s'éloignent vers le sud, vers leur tour. Les spadassins qui restent se retrouvent seuls, et ils le comprennent tous en même temps.",
      "« Je n'ai rien vu ici, dit Sévrac. Il pleuvait. » Il te tourne le dos.",
      { after: "iit:herle", text: "Herlé, dans la barque qui s'éloigne, te fait un signe de la main, très bas, dans le dos de son capitaine." },
      "Tu portes la main à ton dos. La courroie de ton sac pend sur ton épaule, coupée net. Dans la mêlée, ou pendant que tu parlais, quelqu'un est passé derrière toi. Sur la galerie de la maison commune, au milieu de la fumée, une silhouette en gants gris lève quelque chose vers la lumière du feu.",
    ],
    choices: [
      { label: "Courir vers la maison commune", big: true, to: "IIT_lothaire" },
    ] },

  IIT_noye: { act: "II", title: "Sous les pilotis", place: "joncs",
    text: [
      "L'eau te prend d'un coup, froide, noire, pleine de bois flotté et de cendre. Tu coules, tu remontes, tu te cognes la tête à un pilotis. Au-dessus de toi, entre les planches, le feu fait des lignes orange. La pluie bat l'eau si fort qu'on dirait qu'elle bout.",
      "Une gaffe t'accroche par le col. On te tire sur le fond d'une barque, au milieu des nasses, comme une anguille de belle taille.",
      { after: "iit:anguilles", text: "C'est Cyprien Huchet, le doyen des pêcheurs. « On a une dette, toi et moi, dit-il en te tapant dans le dos pour te faire cracher l'eau. La voilà payée. »", else: "C'est un pêcheur des Joncs, un vieux, qui te regarde vomir l'eau de la lagune avec une patience de héron. « Tu bois mal, dit-il. Faut fermer la bouche. »" },
      { before: "IIT_lothaire", text: "Tu portes la main à ton dos. Ton sac a disparu : la courroie a cédé quand tu es tombé{e}, ou quelqu'un l'a coupée. Sur la galerie de la maison commune, une silhouette en gants gris le tient à bout de bras, dans la lumière du feu." },
      { after: "IIT_lothaire", text: "Le pêcheur te remonte sur la galerie. Lothaire est parti. Tu as perdu ton arme un moment, puis tu la retrouves dans le fond de la barque, entre deux anguilles qui se tordent." },
    ],
    choices: [
      { label: "Grimper le long d'un pilotis jusqu'à la galerie", big: true, hide: { seen: "IIT_lothaire" }, to: "IIT_lothaire" },
      { label: "Te hisser sur la galerie, d'où l'on voit les roseaux", big: true, hide: { not: { seen: "IIT_lothaire" } }, to: "IIT_dechirant" },
    ] },

  IIT_lothaire: { act: "II", title: "Lothaire sur la galerie", place: "joncs",
    text: [
      "Lothaire Brunel se tient sous l'auvent de la maison commune, au bout de la galerie qui ne brûle pas encore, aussi sec que dans un salon. Un spadassin tient une lanterne au-dessus de lui. Il a ouvert ton sac sur la rambarde, sorti la toile huilée, déplié un coin. Il regarde l'écriture de la Muette avec une tendresse de collectionneur.",
      { after: "IIT_passerelle", text: "Dans la mêlée de la passerelle, quelqu'un a coupé la courroie de ton sac. Tu ne l'as senti qu'après." },
      { after: "iis:gaucher_dupe", text: "« Rambert m'a rapporté de la Saline une boîte de plomb vide, dit Lothaire sans lever les yeux. L'idée m'a plu. Depuis, j'ouvre les sacs moi-même. »" },
      "Sous la galerie, une barque à proue noire attend, un homme à la gaffe. Lothaire roule le feuillet dans la toile et le laisse tomber dans les mains de l'homme, sans même regarder. « Quesnel », dit-il, et la barque s'écarte des pilotis.",
      "Puis il se tourne vers toi. « Bonsoir, {hero}. Vous pensez : comment a-t-il su. Vous pensez aussi : il est seul. Je ne suis jamais seul. » Il touche du doigt, sous son col, le cordon d'un petit cornet d'os pareil au tien. « Quesnel {{oreille#iit_chenal|connaît ces marais mieux que vous|n'a qu'une route à cette marée : le chenal des Anguilles, avant que l'eau baisse et le colle à la vase}}. »",
      { after: "iie:fidele", text: "« Je vous avais prévenu{e}, aux Écueils, ajoute-t-il. Les Joncs sont en bois, et l'hiver a été sec. »" },
      { if: { has: "iie:lothaire_blesse" }, text: "Le gant de sa main gauche est recousu au dos, d'un fil gris, là où le coutelas de Salomé l'a fendu aux Écueils." },
      "« Madame Marrel, ajoute-t-il, {{oreille#iit_lothaire_ordre|ne vous veut aucun mal, croyez-le|m'a dit de brûler les pages qui parlent des titres, et de lui porter celles qui parlent du chemin}}. »",
      { after: "iis:tibere_rapport_faux", text: "« Votre sergent m'a écrit de la Saline que vous cherchiez en vain du côté des Joncs, dit-il encore. J'ai cru la moitié de sa lettre. Celle qui parlait des Joncs. »" },
      { if: { all: [{ has: "iit:sur_soi" }, { not: { has: "iit:leurre" } }] }, text: "Il penche la tête. « Une seule page dans le sac. Vous avez gardé l'autre contre vous, je l'entends crisser quand vous respirez. Gardez-la. Une page par nuit, c'est un bon rythme. »" },
      { with: "salome", if: { not: { has: "salome:maiwenn" } }, text: "Ses yeux passent sur Salomé, et s'arrêtent. « Capitaine Brac. {{oreille#iit_corde|Je suis navré, pour votre femme|J'ai coupé la corde de votre femme avec ce couteau-ci, sur l'écueil des Sourds, pour un coffret qui tenait dans la main}}. » Salomé reste immobile. Elle a entendu les mots du dessus : des regrets polis." },
      { with: "salome", if: { has: "salome:maiwenn" }, text: "Salomé est à côté de toi. Elle regarde Lothaire, et Lothaire la regarde. Elle sait pour la corde, et il entend qu'elle le sait. Pour la première fois, la voix douce de Lothaire Brunel hésite. « Capitaine Brac », dit-il seulement." },
    ],
    choices: [
      { label: "Dire à Salomé ce que Lothaire vient de penser", with: "salome", hide: { any: [{ not: { voile: "iit_corde" } }, { has: "salome:maiwenn" }] }, fx: { flag: "salome:maiwenn", ep: ["perso", 800] }, to: "IIT_salome" },
      { label: "Laisser passer Salomé", big: true, with: "salome", hide: { not: { has: "salome:maiwenn" } }, to: "IIT_salome" },
      { label: "Dégainer", fight: { title: "Lothaire Brunel", enemies: [{ id: "iit_lothaire", n: 1 }, { id: "iit_spadassin", n: 1 }],
        win: { fx: { ep: ["perso", 1500], flag: "iit:lothaire_battu" }, to: "IIT_dechirant" },
        lose: { fx: { pv: -4 }, to: "IIT_noye" },
        flee: { label: "Sauter de la galerie dans l'eau", dom: "nature", diff: 0, to: "IIT_noye" } } },
      { label: "« Vous entendez ce que je pense ? Alors écoutez ceci. »", to: "IIT_lothaire_pense" },
    ] },

  IIT_lothaire_pense: { act: "II", title: "Ce que tu penses", place: "joncs",
    text: [
      "Tu le regardes, et tu penses, très fort, une seule chose, la plus nette que tu peux : la maison qui brûle derrière lui, les quarante pilotis, les enfants dans les barques. Tu penses : *vous serez pendu pour ça, un jour, et je viendrai voir.*",
      "Lothaire écoute. Il a un petit mouvement des lèvres, comme on goûte un vin trop jeune. « Vous dites : rendez-le. Vous pensez : je vous ferai pendre. C'est plus honnête. » Il se penche sur la rambarde. « Et en dessous, encore, vous pensez à la maison. Vous avez raison de penser à la maison. »",
      { if: { has: "taiseurs:serment" }, text: "Puis il fronce les sourcils. Tu as appris, chez Mère Ancolie, à penser en deux couches. Ce qu'il entend de toi, c'est la couche du dessus. Il le sait, et ça l'agace." },
      "Il enjambe la rambarde, se laisse glisser le long d'un pilotis et tombe dans une barque cachée sous la galerie. Son spadassin le suit. La lanterne s'éteint dans l'eau.",
    ],
    choices: [
      { label: "Regarder où va la barque", big: true, to: "IIT_dechirant" },
    ] },

  IIT_salome: { act: "II", title: "Salomé et Lothaire", place: "joncs", with: "salome",
    text: [
      "Salomé passe devant toi. Elle marche sur la galerie comme sur le pont de *La Bavarde* par gros temps, les genoux souples, le coutelas de bord tenu bas. La pluie lui colle les cheveux gris au crâne.",
      "Lothaire tire une épée longue et fine. Il sourit, parce qu'il entend tout ce que les gens pensent avant qu'ils frappent. Puis le sourire s'en va. Salomé a la tête vide. Elle frappe. Elle frappe comme on écope, à coups réguliers, têtus, et il recule pas à pas jusqu'au bout de la galerie, là où les planches fument.",
      "Le coutelas lui ouvre l'avant-bras. L'épée tombe entre deux lattes, dans l'eau. Lothaire est à genoux sur les planches chaudes, les gants gris levés, et Salomé a la lame sous son menton.",
      "« Dis-moi, lui dit Salomé. {{oreille#iit_salome_choix|Lève-toi, que je te tue debout|Dis-moi qu'elle a crié. Dis-moi qu'elle n'a pas crié. Je ne sais pas laquelle des deux je veux}}. »",
      "Lothaire ouvre la bouche. Pour une fois, les mots lui manquent. Derrière lui, la barque à proue noire s'enfonce dans les roseaux.",
    ],
    choices: [
      { label: "Te taire, et laisser Salomé décider", fx: { conf: { salome: 5 } }, to: "IIT_salome_frappe" },
      { label: "« Salomé. Maïwenn ne remonte pas avec son sang. »", fx: { conf: { salome: 10 } }, to: "IIT_salome_retient" },
      { label: "« Il ne le sait pas, Salomé. Il n'a pas regardé. »", hide: { not: { voile: "iit_salome_choix" } }, fx: { conf: { salome: 15 }, ep: ["perso", 600] }, to: "IIT_salome_retient" },
    ] },

  IIT_salome_frappe: { act: "II", title: "La main", place: "joncs", with: "salome",
    fx: { flag: "iit:lothaire_main", ep: ["perso", 800] },
    text: [
      "Salomé prend la main droite de Lothaire, celle qui tient les couteaux, et la plaque à plat sur la planche. Elle y enfonce le coutelas de bord, à travers le gant gris, jusqu'au bois. Lothaire hurle. C'est un cri aigu, de petit homme, et il dure.",
      "« Pour la corde », dit Salomé.",
      { if: { has: "iie:lothaire_blesse" }, text: "« La gauche aux Écueils, la droite aux Joncs, ajoute-t-elle. Il te faudra une autre main pour couper une corde. »" },
      "Elle retire la lame. Elle le pousse du pied, et Lothaire Brunel tombe de la galerie dans l'eau noire, la main serrée contre la poitrine. Une barque de spadassins le repêche plus loin, dans la lumière du feu, et file vers le sud.",
      "Salomé essuie son coutelas sur sa cuisse. Elle a les mains qui tremblent, maintenant. « Je ne l'ai pas tué, dit-elle, comme on rend compte d'une cargaison. Note-le quelque part. »",
    ],
    choices: [
      { label: "Te retourner vers les roseaux, et vers le feu", big: true, to: "IIT_dechirant" },
    ] },

  IIT_salome_retient: { act: "II", title: "La lame baissée", place: "joncs", with: "salome",
    fx: { flag: "iit:lothaire_epargne", ep: ["perso", 800] },
    text: [
      "Salomé reste longtemps la lame sous le menton de Lothaire. La pluie coule entre eux deux. Puis elle recule d'un pas, et un autre.",
      "« Va-t'en, dit-elle. Va le dire à ta banquière, que la Brac t'a laissé vivre. Qu'elle sache ce que ça vaut. »",
      "Lothaire se relève en tenant son bras ouvert. Il te regarde, il la regarde, et il saute de la galerie. Une barque de spadassins le repêche plus loin et file vers le sud.",
      "Salomé lâche le coutelas sur les planches. Elle s'assied, le dos contre la rambarde, les bras sur les genoux. « Trois ans que je le tue tous les soirs avant de dormir, dit-elle. Ce soir je vais dormir sans. »",
    ],
    choices: [
      { label: "Te retourner vers les roseaux, et vers le feu", big: true, to: "IIT_dechirant" },
    ] },
});
// ==================================================================== the choice: the house or the leaf
// What Lothaire's men took: the whole bundle (the Écueils leaf); the Saline leaf alone when the other was kept against
// the skin (iit:sur_soi); only the notes when both leaves were under the shirt (iit:leurre).
var PERTE_ECUEILS = { all: [{ relic: "f_ecueils" }, { not: { has: "iit:sur_soi" } }] };
var PERTE_SALINE = { all: [{ relic: "f_saline" }, { has: "iit:sur_soi" }, { not: { has: "iit:leurre" } }] };
var PERTE = [
  { label: "Compter ce qui te reste", big: true, hide: { not: PERTE_ECUEILS }, to: "IIT_perte_ecueils" },
  { label: "Compter ce qui te reste", big: true, hide: { not: PERTE_SALINE }, to: "IIT_perte_saline" },
  { label: "Compter ce qui te reste", big: true, hide: { any: [PERTE_ECUEILS, PERTE_SALINE] }, to: "IIT_perte_rien" },
];
Object.assign(P, {
  IIT_dechirant: { act: "II", title: "La maison ou le feuillet", place: "joncs",
    text: [
      { after: "iit:lothaire_battu", text: "Lothaire a reculé sous tes coups jusqu'au bout de la galerie, le gant gris serré sur une entaille. Il a souri, il a enjambé la rambarde, et il s'est laissé tomber dans une barque. Il est vivant. Il est loin." },
      "Dans les roseaux, au sud-ouest, une lanterne masquée glisse entre les tiges : la barque à proue noire de Quesnel, et ton feuillet roulé dans sa toile. Elle va vite. Dans un moment, il n'en restera qu'une lueur, puis rien.",
      "Derrière toi, la maison commune brûle par le bout. Le vent du large couche les flammes vers la rangée des dentellières, six maisons de roseaux serrées les unes contre les autres, avec leurs séchoirs et leurs coffres de dentelle. Si le feu passe la ruelle d'eau, il prendra le village entier. Les gens font la chaîne avec des seaux, des marmites, des chapeaux. C'est trop peu.",
      { with: "lison", text: "Lison crie, debout dans une barque, une hache à la main : « Il faut couper les passerelles et abattre le toit dans l'eau ! Maintenant, ou jamais ! Il faut tous les bras ! » Elle te regarde. Elle a vu la lanterne, elle aussi." },
      { without: "lison", text: "Un pêcheur crie, debout dans une barque, une hache à la main : « Il faut couper les passerelles et abattre le toit dans l'eau ! Il faut tous les bras ! »" },
      { with: "gildas", text: "Frère Gildas porte un seau dans chaque main. Il passe près de toi sans s'arrêter. « Ce qui est écrit peut se réécrire, dit-il. Le reste, je ne sais pas. »" },
    ],
    choices: [
      { label: "Rester, et sauver la maison commune", big: true, to: "IIT_sauver" },
      { label: "Sauter dans une barque et poursuivre le feuillet", fx: { flag: "joncs:brules" }, to: "IIT_poursuite" },
      { label: "Couper par la vasière jusqu'au chenal des Anguilles, et revenir avant que le feu passe", hide: { not: { voile: "iit_chenal" } },
        test: { dom: "nature", diff: -20, label: "Devancer Quesnel par la vase", help: AIDE_MARAIS.concat([{ with: "salome", v: 5 }, { if: { has: "iit:prevenu" }, v: 10 }]) },
        win: { fx: { ep: ["perso", 1000] }, to: "IIT_exploit" }, lose: { fx: { flag: "joncs:brules", pv: -3 }, to: "IIT_exploit_rate" } },
    ] },

  IIT_sauver: { act: "II", title: "Abattre le toit", place: "joncs",
    text: [
      "Tu tournes le dos aux roseaux. Tu {{miroir#iit_miroir_maison|choisis le village, sans hésiter|choisis le village, et une part de toi compte déjà ce que vaut une page de la Muette au poids des vies}}. Tu prends la hache qu'on te tend.",
      "La maison commune a deux passerelles qui la relient aux maisons voisines, et un toit de roseaux sur une charpente de perches, qui flambe à l'est et fume à l'ouest. Le plan de Lison est simple et terrible : couper les passerelles pour ôter au feu son chemin, puis tirer le toit entier dans la lagune avec des cordes et des gaffes, avant qu'il tombe à l'intérieur.",
      { with: "tibere", text: "Tibère a pris une gaffe à anguilles. « J'ai fait le Guet trente hivers, et les incendies des Halles deux fois. On attaque par le vent, jamais contre. » Les pêcheurs l'écoutent, parce qu'il crie comme quelqu'un qui sait." },
      { with: "salome", text: "Salomé fait passer une aussière autour de la poutre faîtière, à mains nues, sur le toit qui fume, avec l'aisance de quelqu'un qui a grimpé à des mâts toute sa vie." },
    ],
    choices: [
      { label: "Couper les passerelles à la hache", test: { dom: "combat", diff: -10, label: "Trancher le chêne mouillé", help: [{ with: "tibere", v: 10 }, { with: "salome", v: 10 }] },
        win: { fx: { ep: ["perso", 900] }, to: "IIT_sauver_fin" }, lose: { fx: { pv: -3 }, to: "IIT_sauver_fin" } },
      { label: "Tenir la chaîne : placer les gens, les barques, les seaux", test: { dom: "social", diff: -10, label: "Faire d'une foule une chaîne", help: [{ with: "tibere", v: 15 }, { if: { fac: "hautes", min: 10 }, v: 10 }] },
        win: { fx: { ep: ["perso", 900], fac: { hautes: 5 } }, to: "IIT_sauver_fin" }, lose: { fx: { pv: -2 }, to: "IIT_sauver_fin" } },
      { label: "Tirer le toit dans l'eau, aux cordes et aux gaffes", test: { dom: "nature", diff: -10, label: "Abattre un toit en feu", help: AIDE_MARAIS.concat([{ with: "salome", v: 10 }]) },
        win: { fx: { ep: ["perso", 900] }, to: "IIT_sauver_fin" }, lose: { fx: { pv: -4 }, to: "IIT_sauver_fin" } },
      { label: "Laisse-moi faire", who: "gildas", test: { dom: "magie", diff: -10, label: "Frère Gildas appelle la pluie sur le toit" },
        win: { fx: { ep: ["perso", 900] }, to: "IIT_sauver_fin" }, lose: { fx: { pv: -2 }, to: "IIT_sauver_fin" } },
    ] },

  IIT_sauver_fin: { act: "II", title: "Le toit dans la lagune", place: "joncs",
    fx: { flag: "joncs:sauves", fac: { hautes: 10, taiseurs: 5 }, ep: ["histoire", 2500] },
    text: [
      { outcome: "win", text: "Tout va très vite, ensuite. Les passerelles tombent dans l'eau l'une après l'autre. Le toit s'arrache de ses perches avec un bruit de grand arbre, s'incline, et glisse d'un seul bloc dans la lagune, où il siffle et s'éteint en fumant." },
      { outcome: "lose", text: "Tu te brûles, tu glisses, tu prends une poutre sur l'épaule. Mais les autres tiennent là où tu lâches. Les passerelles tombent dans l'eau. Le toit s'arrache de ses perches, s'incline, et glisse d'un seul bloc dans la lagune, où il siffle et s'éteint en fumant." },
      "La maison commune reste debout, sans toit, ouverte à la pluie, noire jusqu'à hauteur d'homme. La rangée des dentellières est mouillée et intacte. Le feu, privé de nourriture, meurt sur les pilotis en crachant.",
      "Personne n'est mort aux Joncs-Bas cette nuit. On le dit, on le répète, d'une barque à l'autre, comme on se passe un seau. Tu t'assieds sur les planches. Tu as les mains noires et le dos vide. Dans les roseaux, au sud-ouest, la nuit est noire, sans une lanterne.",
    ],
    choices: PERTE },

  IIT_poursuite: { act: "II", title: "Dans les roseaux", place: "joncs",
    text: [
      "Tu {{miroir#iit_miroir_poursuite|cours reprendre ce qui appartient aux Joncs|cours après Lothaire parce qu'il t'a pris quelque chose à toi, et tu le sais}}. Tu sautes dans la première barque venue, une plate à fond noir qui sent l'anguille. La gaffe, la pluie dans la figure, et les roseaux qui se referment derrière toi. Les cris du village s'éloignent. La lueur du feu, dans ton dos, éclaire encore les plumets des roseaux au-dessus de ta tête.",
      { with: "salome", text: "Salomé a sauté avec toi. Elle prend la gaffe sans rien demander. « Tu pousses comme un curé. Assieds-toi devant et regarde. »" },
      { with: "lison", text: "Lison est restée. Tu l'as vue sur la galerie, une hache à la main, le visage tourné vers toi. Elle s'est tue." },
      "Devant, une lanterne se balance entre les tiges. Tu la suis par les chenaux, à droite, à gauche, si vite que tu perds le nord. Puis la lanterne s'arrête. Une barque plate sort des roseaux, en travers du chenal : deux spadassins, debout, la lame courte en main. On t'attendait.",
    ],
    choices: [
      { label: "Les aborder", fight: { title: "L'embuscade des roseaux", enemies: [{ id: "iit_spadassin", n: 2 }], terrain: "nature",
        win: { fx: { ep: ["perso", 900] }, to: "IIT_lothaire_roseaux" },
        lose: { fx: { pv: -3 }, to: "IIT_retour_brule" },
        flee: { label: "Te jeter dans les roseaux et les contourner à la nage", dom: "nature", diff: -10, to: "IIT_lothaire_roseaux" } } },
      { label: "Les contourner par un chenal mort, sous les roseaux couchés", test: { dom: "discretion", diff: -10, label: "Passer sans être vu{e}", help: [{ with: "salome", v: 10 }, { if: { has: "iit:passeur" }, v: 15 }] },
        win: { fx: { ep: ["perso", 700] }, to: "IIT_lothaire_roseaux" }, lose: { fx: { pv: -2 }, to: "IIT_retour_brule" } },
    ] },

  IIT_lothaire_roseaux: { act: "II", title: "Le banc de vase", place: "joncs",
    text: [
      "Au bout du chenal, la lanterne est posée sur un banc de vase. La barque de Lothaire s'y est échouée, la marée basse l'a prise. Lothaire Brunel est assis sur le plat-bord, trempé, les gants gris ruisselants, et il t'attend comme on attend un client en retard.",
      { if: { has: "iit:lothaire_main" }, text: "Il tient sa main droite contre lui, enveloppée d'un mouchoir rouge. Il est pâle. Il te voit regarder la main. « Votre capitaine a la mémoire longue, dit-il. Je la croyais en vase, elle aussi. »" },
      { if: { all: [{ has: "iit:lothaire_main" }, { has: "iie:lothaire_blesse" }] }, text: "La gauche, celle que Salomé a entaillée aux Écueils, repose sur son genou, et elle tremble." },
      "« Ce n'est pas moi qui ai le feuillet, dit-il. Vous le savez maintenant. Quesnel l'emporte par un autre chenal, et la marée lui est favorable. Vous avez choisi le mauvais bateau, {hero}. » Il regarde derrière toi, vers la lueur orange au-dessus des roseaux. « Et la mauvaise nuit. Je vous entends penser à la maison, d'ici. »",
      "À ses pieds, dans la barque, il y a un étui à documents en cuir noir, fermé d'une boucle, et une épée longue rangée dans son fourreau.",
      "« {{oreille#iit_lothaire_seul|Je pourrais vous tuer, mais ce serait vulgaire|Mes hommes sont partis. Je suis seul, j'ai froid, et je ne sais pas nager dans la vase}}. »",
    ],
    choices: [
      { label: "Dégainer", fight: { title: "Lothaire sur le banc de vase", enemies: [{ id: "iit_lothaire", n: 1 }], terrain: "nature",
        win: { fx: { ep: ["perso", 1500], flag: "iit:lothaire_battu" }, to: "IIT_roseaux_lettre" },
        lose: { fx: { pv: -4 }, to: "IIT_retour_brule" },
        flee: { label: "Repousser ta barque dans le chenal", dom: "nature", diff: 0, to: "IIT_retour_brule" } } },
      { label: "Prendre l'étui à ses pieds pendant qu'il se croit à l'abri", hide: { not: { voile: "iit_lothaire_seul" } }, test: { dom: "discretion", diff: -10, label: "Arracher l'étui", help: [{ with: "salome", v: 10 }] },
        win: { fx: { ep: ["perso", 900] }, to: "IIT_roseaux_lettre" }, lose: { to: "IIT_retour_brule" } },
      { label: "« Que veut-elle vraiment, votre banquière ? »", to: "IIT_lothaire_dit" },
      { label: "Le laisser à sa vase, et faire demi-tour vers le feu", to: "IIT_retour_brule" },
    ] },

  IIT_roseaux_lettre: { act: "II", title: "L'étui noir", place: "joncs",
    fx: { item: "iit_lettre_marrel" },
    text: [
      { outcome: "win", text: "Lothaire tombe à genoux dans la vase, désarmé. Tu as la lame au-dessus de lui. Il lève les yeux, et il entend ce que tu penses, et il sourit à moitié, parce qu'il entend aussi que tu ne le feras pas." },
      "Une barque arrive par le chenal, à force de rames : trois spadassins qui reviennent chercher leur maître. Tu as le temps de prendre une seule chose. Tu prends l'étui noir.",
      "Les spadassins tirent Lothaire hors de la vase comme un sac et repartent vers le sud. Il te regarde partir, lui aussi. « Gardez-le, crie-t-il. C'est de la correspondance. Vous aimez lire, je crois. »",
      "Dans l'étui, une lettre pliée en quatre, cachetée d'un besant d'or sur cire noire.",
    ],
    choices: [
      { label: "Faire demi-tour vers la lueur du feu", big: true, to: "IIT_retour_brule" },
    ] },

  IIT_retour_brule: { act: "II", title: "Ce qui reste des Joncs", place: "joncs",
    fx: { flag: "joncs:brules", fac: { hautes: -5 }, ep: ["histoire", 1500] },
    text: [
      { if: { seen: "IIT_lothaire_roseaux" }, text: "Tu reviens à force de gaffe, perdu{e} deux fois dans les chenaux, guidé{e} par la lueur qui baisse. Quand tu sors des roseaux, les flammes sont tombées. Il reste la fumée.", else: "Tu reviens à force de gaffe, la tête qui bourdonne, guidé{e} par la lueur qui baisse. Quand tu sors des roseaux, les flammes sont tombées. Il reste la fumée." },
      "La maison commune n'existe plus : quarante pilotis noirs qui sortent de l'eau, et sur l'eau, une croûte de cendre et de roseaux brûlés qui tourne lentement. Le feu a passé la ruelle d'eau. La rangée des dentellières a brûlé jusqu'à la quatrième maison. Les deux dernières tiennent encore, noires d'un côté.",
      "Deux morts. La vieille Ermengaude, qui est retournée chercher son carreau de dentelle, et un garçon de douze ans qu'on a trouvé sous la passerelle effondrée. On les a allongés sur la galerie de la maison de Mère Ancolie, sous une voile de barque.",
      { with: "lison", text: "Lison est assise à côté des deux corps, les mains noires, la hache entre les genoux. Elle garde les yeux sur les corps quand tu montes. Puis elle te regarde. « Tu l'as ? » demande-t-elle. Tu te tais. Elle hoche la tête." },
    ],
    choices: PERTE },

  IIT_exploit: { act: "II", title: "Le chenal des Anguilles", place: "joncs",
    text: [
      "Tu cours sur la vasière avec les patins de planche des pêcheurs aux pieds, en suivant les perches qui balisent le gué. La vase aspire, souffle, sent l'œuf pourri et le sel. La pluie tombe moins dru. Derrière toi, le feu fait un halo rouge sur les nuages bas.",
      { if: { has: "iit:anguilles" }, text: "Deux pêcheurs de Cyprien courent avec toi. Ils connaissent la vasière pied à pied et te tirent par la manche quand tu vas mettre le pied là où la vase avale." },
      { if: { has: "iit:passeur" }, text: "Maclou le passeur est sorti des roseaux à ta hauteur, sa perche à la main. Il te montre le raccourci des fugitifs : une ligne de pieux sous la vase, qu'on sent avec le talon." },
      "Tu arrives à l'embouchure du chenal des Anguilles juste comme la barque à proue noire s'y engage. La marée baisse. L'eau se retire du chenal à vue d'œil. La barque racle, ralentit, s'arrête. Quesnel saute dans la vase jusqu'aux cuisses et pousse en jurant. Le rouleau de toile huilée est passé dans sa ceinture.",
      "Il te voit. Il tire son couteau. « {{oreille#iit_quesnel|Approche, et je te saigne comme une anguille|Lothaire me paie au feuillet. S'il le perd, il dira que c'est moi qui l'ai vendu, et on me retrouvera dans un canal}}. »",
    ],
    choices: [
      { label: "« Dis à Lothaire que je te l'ai pris de force. Tu saignes déjà : il te croira. »", hide: { not: { voile: "iit_quesnel" } }, fx: { ep: ["perso", 800] }, to: "IIT_exploit_retour" },
      { label: "Te battre dans la vase", fight: { title: "Quesnel dans la vase", enemies: [{ id: "iit_quesnel", n: 1 }], terrain: "nature",
        win: { fx: { ep: ["perso", 1200] }, to: "IIT_exploit_retour" },
        lose: { fx: { pv: -4, flag: "joncs:brules" }, to: "IIT_exploit_rate" },
        flee: { label: "Reculer sur la vasière", dom: "nature", diff: -10, to: "IIT_exploit_rate" } } },
      { label: "Te glisser derrière la barque pendant qu'il pousse, et couper le rouleau de sa ceinture", test: { dom: "discretion", diff: -10, label: "Voler un voleur dans la vase", help: [{ if: { has: "passe:voleur" }, v: 15 }, { if: { item: "crochets" }, v: 5 }] },
        win: { fx: { ep: ["perso", 1000] }, to: "IIT_exploit_retour" }, lose: { fx: { flag: "joncs:brules" }, to: "IIT_exploit_rate" } },
    ] },

  IIT_exploit_retour: { act: "II", title: "Le feuillet repris", place: "joncs",
    fx: { flag: ["iit:feuillet_garde", "joncs:sauves"], fac: { hautes: 10, taiseurs: 10 }, ep: ["histoire", 4000] },
    text: [
      "Le rouleau de toile huilée est dans ta main. Tu sens le parchemin à travers, sec. Quesnel recule dans la vase, tourne le dos, et s'en va à quatre pattes vers le sud, sans se retourner.",
      "Tu reviens par la vasière, à la course, et tu arrives aux Joncs par l'est, avec les barques des pêcheurs de l'embouchure qui ont vu le feu et sont venues. Ils sont vingt. Ils ont des cordes et des gaffes. Avec eux, avec les gens du village qui tiennent depuis une heure, vous tirez le toit de la maison commune dans la lagune d'un seul coup, et il s'éteint en sifflant.",
      { with: "lison", text: "Lison a tenu la chaîne pendant que tu courais. Elle te voit monter sur la galerie, la toile huilée à la main. Elle se tait. Elle te prend la toile, la soupèse, te la rend, et éclate d'un rire qui ressemble à un sanglot." },
      "Les Joncs-Bas ont perdu un toit et deux passerelles. Personne n'est mort. Et la Banque est repartie les mains vides. Les pêcheurs le racontent déjà, en l'arrangeant.",
    ],
    choices: [
      { label: "T'asseoir enfin, et attendre l'aube", big: true, to: "IIT_aube" },
    ] },

  IIT_exploit_rate: { act: "II", title: "La vase", place: "joncs",
    fx: { flag: "joncs:brules" },
    text: [
      "La vase te prend jusqu'aux hanches. Tu tires, elle tient. Le temps de te dégager, à plat ventre, en nageant dans la boue, la marée a tourné d'un rien, juste assez : la barque à proue noire flotte de nouveau, et Quesnel s'éloigne dans le chenal en poussant sur sa gaffe.",
      "Tu reviens par la vasière, couvert{e} de boue jusqu'aux yeux. Au-dessus des roseaux, la lueur du feu a changé de couleur. Elle est plus large et plus basse. Le feu a passé la ruelle d'eau.",
    ],
    choices: [
      { label: "Courir au village", big: true, to: "IIT_retour_brule" },
    ] },

  IIT_perte_ecueils: { act: "II", title: "Le feuillet des Écueils", place: "joncs",
    fx: { relicLose: "f_ecueils" },
    text: [
      "Le feuillet que Lothaire a emporté, c'est celui des Écueils : la page que le phare de l'Ouïe gardait, celle que tu as remontée de la mer avec le diapason. Tu revois l'écriture serrée de la Muette, le sel séché dans les plis du parchemin.",
      { if: { relic: "f_saline" }, text: "Il te reste celui de la Saline. Tu le sors de ta chemise ou de ta poche, tu le déplies, tu le regardes longtemps, comme pour t'assurer qu'il est toujours le même." },
      "La Banque a une page du Registre. Elle sait maintenant à quoi ressemble l'écriture de la reine, et ce qu'elle dit. Tu le penses, et tu te demandes si Lothaire l'entend encore, de là où il est.",
    ],
    choices: [{ label: "Attendre l'aube", big: true, to: "IIT_aube" }] },

  IIT_perte_saline: { act: "II", title: "Le feuillet de la Saline", place: "joncs",
    fx: { relicLose: "f_saline" },
    text: [
      "Le feuillet que Lothaire a emporté, c'est celui de la Saline : la page du moulin à marée, celle que les chants des sauniers t'ont ouverte. Tu revois le grain blanc incrusté dans le parchemin, et l'écriture serrée de la Muette.",
      "La Banque a une page du Registre. Elle sait maintenant à quoi ressemble l'écriture de la reine, et ce qu'elle dit. Tu le penses, et tu te demandes si Lothaire l'entend encore, de là où il est.",
    ],
    choices: [{ label: "Attendre l'aube", big: true, to: "IIT_aube" }] },

  IIT_perte_rien: { act: "II", title: "La toile vide", place: "joncs",
    fx: { flag: "iit:feuillet_garde" },
    text: [
      "Tu te mets à rire, tout seul, au milieu des cendres. La toile huilée que Lothaire a jetée à Quesnel ne contenait que tes notes, tes relevés, et le brouillon de tes déchiffrements. Les feuillets eux-mêmes sont sous ta chemise, à plat contre tes côtes, là où tu les as glissés chez Mère Ancolie.",
      "Lothaire Brunel a fait brûler un village pour ton écriture. Quand il dépliera la toile, il saura, lui aussi, ce que tu penses de lui.",
    ],
    choices: [{ label: "Attendre l'aube", big: true, to: "IIT_aube" }] },
});
// ==================================================================== dawn, the oath, Lison, the barge
Object.assign(P, {
  IIT_lothaire_dit: { act: "II", title: "Ce que veut la Banque", place: "joncs",
    fx: { clue: "iit_b_titres" },
    text: [
      "Lothaire se met à rire, doucement, en se frottant les mains l'une contre l'autre pour les réchauffer. « Vous me demandez ça maintenant, avec votre village qui brûle dans votre dos. C'est presque touchant. »",
      "« Madame Marrel veut ce que veut toute personne raisonnable : que la République paie le duc, et que les terres restent à ceux qui les ont payées. » Il désigne la lueur rouge d'un mouvement du menton. « Vous connaissez la loi des terres vacantes ? Un village brûle, ses gens s'en vont. Au bout d'un an et un jour, les terres reviennent à la République, qui les vend au plus offrant. Le plus offrant, ce sera nous. Au denier la perche. »",
      "Il hausse les épaules. « Je ne fais pas les lois. Je les lis mieux que les autres. »",
    ],
    choices: [
      { label: "Faire demi-tour vers la lueur du feu", big: true, to: "IIT_retour_brule" },
    ] },

  IIT_aube: { act: "II", title: "L'aube après la tempête", place: "joncs", takes: "morning",
    text: [
      { first: true, text: "Le jour se lève sur un ciel lavé, d'un bleu de faïence, avec de longs nuages blancs qui filent vers les terres. La lagune est plate. Des roseaux arrachés flottent partout, des planches, un chapeau, une nasse crevée. Les hérons sont revenus, et ils pêchent au milieu des débris." },
      { again: true, text: "Le matin avance sur les Joncs. On cloue, on lave, on compte. La lampe de Mère Ancolie brûle en plein jour, là-haut, et c'est le signe qu'elle attend." },
      { if: { has: "joncs:sauves" }, text: "La maison commune est debout, sans toit, noire jusqu'à hauteur d'homme, et les femmes y ont déjà tendu une voile de barque en guise de plafond. Dans la rangée des dentellières, on étend la dentelle mouillée sur les rambardes pour la faire sécher. Quelqu'un chante, faux, et on le laisse chanter.",
        else: "À la place de la maison commune, quarante pilotis noirs sortent de l'eau. La rangée des dentellières est un alignement de poutres. Les gens des maisons brûlées se sont répartis chez les autres. On compte les carreaux de dentelle sauvés : onze, sur soixante. Le village se tait." },
      { first: true, after: "iit:douane_partie", text: "Au sud, la tour des douanes garde ses volets fermés. À l'aube, un douanier sans casque a déposé sur le ponton un sac de farine et une barrique d'eau douce, puis il est reparti." },
      { first: true, after: "iit:douane_reste", text: "Au sud, deux barques de la douane croisent devant le chenal, lentement. Un commis y compte les pilotis noircis et les note sur une tablette. Les pêcheurs le regardent faire en silence." },
      { if: { has: "iit:ancolie_blessee" }, text: "Mère Ancolie a un bandeau de toile autour de la tête, taché de brun à la tempe. Elle refuse qu'on la plaigne. Elle s'est fait apporter un carreau neuf, et elle a recommencé à travailler, plus lentement." },
      { with: "gildas", text: "Frère Gildas a passé la nuit sur les brûlures des autres. Il a les manches roussies jusqu'aux coudes et les doigts luisants de graisse de mouton. Il dort assis, contre un pilotis, la tête droite." },
      { with: "tibere", if: { has: "tibere:double" }, text: "Tibère a une estafilade sur la joue, recousue de travers par une pêcheuse. Les gens des Joncs lui apportent du poisson grillé. Il ne sait que faire de leurs remerciements, et il mange pour avoir la bouche pleine." },
      { with: "tibere", if: { not: { has: "tibere:espion" } }, text: "Tibère regarde la lagune, assis sur le ponton, et il laisse refroidir le poisson qu'on lui apporte. Il a les yeux de quelqu'un qui a compté quelque chose toute la nuit." },
      { with: "salome", text: "Salomé a nettoyé son coutelas trois fois. Elle s'est assise au bout du ponton, les jambes au-dessus de l'eau, et elle regarde vers la mer." },
      { if: { has: "iit:feuillet_garde" }, text: "Les feuillets sont là, contre toi. Tu les as comptés deux fois depuis l'aube." },
    ],
    choices: [
      { label: "Lire la lettre de l'étui noir, à la lumière du matin", hide: { any: [{ not: { item: "iit_lettre_marrel" } }, { seen: "IIT_lettre" }] }, to: "IIT_lettre" },
      { label: "Aller t'asseoir avec Lison sur le ponton", with: "lison", hide: { seen: "IIT_aube_lison" }, to: "IIT_aube_lison" },
      { label: "Aller voir Frère Gildas parmi les blessés", with: "gildas", hide: { seen: "IIT_aube_gildas" }, to: "IIT_aube_gildas" },
      { label: "Aller t'asseoir près de Salomé, au bout du ponton", with: "salome", hide: { seen: "IIT_aube_salome" }, to: "IIT_aube_salome" },
      { label: "T'asseoir à côté de Tibère, qui laisse refroidir son poisson", with: "tibere", hide: { any: [{ seen: "IIT_aube_tibere" }, { has: "tibere:espion" }, { has: "tibere:double" }] }, to: "IIT_aube_tibere" },
      { label: "Aider les femmes à fouiller ce que le feu a laissé", hide: { seen: "IIT_cendres" }, to: "IIT_cendres" },
      { label: "Répondre à Mère Ancolie, qui te fait appeler", big: true, to: "IIT_serment" },
    ] },

  IIT_lettre: { act: "II", title: "La lettre de l'étui noir", place: "joncs",
    text: [
      "Tu brises le cachet au besant d'or. Le papier est épais, de celui qu'on fabrique à Salvèze pour les actes. L'écriture est fine, penchée, d'une main âgée et sûre. Tu la lis une fois, puis une deuxième, comme Odeline t'a appris : la première pour ce qui est écrit, la seconde pour ce qui manque.",
      "*Monsieur Brunel, je vous ai fait remettre les fonds pour les hommes et pour la douane. {{loupe#iit_lettre_loupe|Rapportez-moi ce que vous trouverez, intact si possible|Le duc acceptera l'or de la Muette en paiement de la dette, à une condition, écrite de sa main : que la Charte des Hautes-Eaux cesse d'exister}}. Je vous fais confiance pour la discrétion, qui est votre métier. — C. M.*",
      { if: { not: { item: "loupe" } }, text: "Le papier a un grain bizarre entre les lignes, comme un papier qu'on aurait mouillé puis séché. Il faudrait une loupe pour en être sûr{e}." },
    ],
    choices: [
      { label: "Ranger la lettre", back: "IIT_aube" },
    ] },

  IIT_aube_lison: { act: "II", title: "Sur le ponton", place: "joncs", with: "lison",
    text: [
      "Lison a les jambes au-dessus de l'eau, les mains noires de suie, et une galette de sarrasin froide qu'elle tient sans la manger. Tu t'assieds à côté d'elle. Elle te tend la moitié de la galette sans te regarder.",
      { if: { has: "joncs:brules" }, text: "« Tu l'as poursuivi, dit-elle. J'aurais fait pareil. Peut-être. » Elle mord dans la galette. « {{oreille#iit_lison_aube|Je ne t'en veux pas|Je t'en veux, et je m'en veux de t'en vouloir, parce que j'aurais fait pareil}}. »",
        else: "« Tu es resté{e}, dit-elle. Je t'ai vu hésiter. Une seconde, pas plus. » Elle mord dans la galette. « {{oreille#iit_lison_aube_reste|C'était bien, voilà tout|J'ai cru que tu partirais, et j'avais déjà décidé de te le pardonner}}. »" },
      "Elle regarde vers la maison de sa grand-mère. « Elle va te proposer le serment. Ce matin. Elle a sorti le fil blanc, je l'ai vu. » Elle hésite. « Fais-le ou refuse-le, mais pour toi. Ni pour elle ni pour moi. »",
      { tendre: true, text: "Elle pose sa tête sur ton épaule, le temps qu'un héron passe. Puis elle se relève et s'essuie les mains sur ses cuisses.", else: "Elle se relève et s'essuie les mains sur ses cuisses." },
    ],
    choices: [
      { label: "Aller chez Mère Ancolie", big: true, fx: { conf: { lison: 5 } }, to: "IIT_serment" },
    ] },

  IIT_serment: { act: "II", title: "Le fil blanc", place: "joncs",
    text: [
      { if: { has: "joncs:sauves" }, text: "Mère Ancolie t'attend dans la maison commune sans toit, assise sur un banc au milieu de la grande salle noircie. Le ciel lui fait un plafond. Autour d'elle, une vingtaine de gens des Joncs, debout, en silence : des dentellières, des pêcheurs, des vieux. Tous ont une cordelette de fil blanc nouée au poignet gauche.",
        else: "Mère Ancolie t'attend sur la galerie de sa maison, face aux pilotis noirs de la maison commune. Les deux morts ont été emportés à l'aube vers l'île des tombes. Autour d'elle, une vingtaine de gens des Joncs, debout, en silence : des dentellières, des pêcheurs, des vieux. Tous ont une cordelette de fil blanc nouée au poignet gauche." },
      "Elle tient sur ses genoux un écheveau de fil blanc et une paire de ciseaux de dentellière en forme de héron. « Approche, dit-elle. Assieds-toi par terre, devant moi, que je puisse toucher ta tête. »",
      "Tu t'assieds. Ses doigts te trouvent le front, les tempes, la nuque, comme on lit un motif. « Ta mère était une Vasse, dit-elle. Ça te donne le droit. Le devoir, c'est toi qui le prends, ou qui le laisses. Cette nuit, tu as vu ce que coûte notre silence, et ce que coûte celui des autres. »",
      { after: "tresor:iij_sceau", text: "Ses doigts descendent jusqu'à ta ceinture, trouvent le cachet d'argent des pilotis et en suivent le croissant. « Et ceci te donne le sceau, dit-elle. Garde-le pour le jour où il faudra signer. »" },
      "« Le Registre de la Muette, continue-t-elle, {{oreille#iit_r_noms|dit des choses que la ville a oubliées|nomme, maison par maison, ceux qui tenaient la reine pendant qu'on lui coupait la langue. Marrel y est en tête, et Delisle juste après}}. Tu en portes des pages. Les Taiseurs les gardent depuis trois cents ans. Je te propose d'être des nôtres. »",
      { with: "gildas", text: "Frère Gildas se tient au fond, près d'un pilotis, les mains dans ses manches. Mère Ancolie tourne vers lui ses yeux blancs. « Le Mont sera témoin. » « Le Mont est témoin », répond Gildas, d'une voix égale." },
    ],
    choices: [
      { label: "« Dites-moi les mots, d'abord. »", big: true, to: "IIT_serment_mots" },
      { label: "« Non, Mère. Pas aujourd'hui, et peut-être jamais. »", to: "IIT_refus" },
    ] },

  IIT_serment_mots: { act: "II", title: "Les mots du serment", place: "joncs",
    text: [
      "Mère Ancolie coupe un fil blanc, long comme un avant-bras, avec les ciseaux en héron. Elle le tient tendu entre ses deux mains. Puis elle parle, à voix haute, pour que tout le monde entende. Les gens des Joncs disent les mots avec elle, à mi-voix, comme une prière qu'on sait par cœur.",
      "« {{oreille#iit_serment_un|Que l'eau rende ce qu'elle a pris, et que le sel garde ce qu'on lui confie|Que ma langue soit coupée comme celle de la reine si je dis la parole qui est sous la parole à qui ne l'a pas reçue}}. »",
      "« {{oreille#iit_serment_deux|Que nos morts dorment, et que nos dentelles sèchent|Que le Registre reste dans le silence jusqu'au jour où le silence aura gagné, et pas un jour avant}}. »",
      "« {{oreille#iit_serment_trois|Que le Mont veille sur nous comme il a toujours veillé|Que le Gardien me retrouve si je manque à ce serment, où que je sois, et quoi qu'il lui en coûte}}. »",
      "Les pilotis {{echo#iit_serment_echo|gouttent dans l'eau, un à un, et c'est le seul bruit|rendent cent voix de femmes, il y a cent ans, qui disent les mêmes mots, et un enfant qui pleure au milieu}}. Mère Ancolie attend, le fil tendu entre ses mains.",
    ],
    choices: [
      { label: "Tendre ton poignet gauche, et jurer", big: true, labels: [{ if: { voiles: { min: 3 }, lens: "oreille" }, label: "Tendre ton poignet gauche, et jurer les mots du dessous" }], to: "IIT_jure" },
      { label: "« Je jure, Mère, si vous jurez avec moi que ce jour-là viendra. »", hide: { not: { voile: "iit_serment_deux" } }, fx: { flag: "iit:serment_condition" }, to: "IIT_jure" },
      { label: "Refuser, et garder ton poignet nu", to: "IIT_refus" },
    ] },

  IIT_jure: { act: "II", title: "Le serment", place: "joncs",
    fx: { flag: "taiseurs:serment", fac: { taiseurs: 15, hautes: 5 }, conf: { lison: 10 }, ep: ["histoire", 3000] },
    text: [
      "Mère Ancolie noue le fil blanc autour de ton poignet. Trois nœuds, serrés, avec ses doigts de dentellière qui savent où va chaque fil. Puis elle trempe le bout de son doigt dans un bol d'eau de la lagune, et le pose sur ta langue. L'eau a le goût de vase et de sel.",
      { if: { has: "iit:serment_condition" }, text: "Avant de nouer le troisième nœud, elle s'arrête. Elle sourit, d'un sourire très vieux. « Tu marchandes ton serment, comme une Vasse. Je jure avec toi. Ce jour-là viendra. Je serai morte, mais toi, tu le verras peut-être. » Autour, quelqu'un tousse." },
      "« Voilà, dit-elle. Maintenant, écoute bien, c'est la première leçon et la seule que je te donnerai aujourd'hui. L'homme aux gants gris entend la couche du dessus de ta pensée. Apprends à penser en deux couches, comme on parle. Dessus, ce que tu veux qu'il entende. Dessous, ce que tu fais. »",
      "Elle pose la main sur ta tête. « Tu es des nôtres. Désormais, tout ce que tu diras aura un fond. »",
      "Tu {{miroir#iit_miroir_serment|jures pour les Joncs, pour la reine, pour les morts|jures pour avoir enfin une famille qui te dise nous, et Odeline t'avait refusé ce mot}}.",
      { with: "lison", text: "Lison noue elle-même, sous le tien, un second fil, rouge, celui des batelières. Elle garde pour elle ce qu'il veut dire. Sa grand-mère l'entend faire, et se tait aussi." },
      { with: "gildas", text: "Frère Gildas incline la tête vers toi, lentement, comme les moines saluent au chœur. Il te regarde longtemps, ensuite, d'un regard fermé, que tu sais mal lire." },
    ],
    choices: [
      { label: "Te relever", big: true, to: "IIT_lison_choix_q" },
    ] },

  IIT_refus: { act: "II", title: "Le poignet nu", place: "joncs",
    fx: { flag: "iit:serment_refuse", fac: { taiseurs: -5 } },
    text: [
      "Tu {{miroir#iit_miroir_refus|refuses parce qu'un serment de silence ne se prête pas à la légère|refuses parce qu'Odeline a refusé avant toi, et que tu veux encore lui ressembler}}. Mère Ancolie baisse le fil blanc. Elle le roule autour de ses doigts, sans hâte, et le range dans sa manche. Autour, les gens des Joncs se regardent. Une dentellière fait claquer sa langue.",
      "« Bien, dit la vieille femme. Odeline aussi a dit non, un jour, et elle avait toute sa tête. Tu restes une parente. On te nourrira, on te logera, on te prêtera une barque. Le reste, on te le taira. » Elle tend la main et te touche la joue. « {{oreille#iit_refus|C'est ton droit, et je le respecte|J'ai peur pour toi, parce que tu entends sans savoir te taire, et l'homme aux gants gris aussi}}. »",
      { with: "lison", text: "Lison te regarde avec une expression que tu lui découvres : du soulagement, peut-être, ou de l'envie." },
    ],
    choices: [
      { label: "Te relever", big: true, to: "IIT_lison_choix_q" },
    ] },

  IIT_lison_choix_q: { act: "II", title: "Après le fil blanc", place: "joncs",
    text: [
      "Les gens des Joncs se dispersent par petits groupes, vers les barques, vers les maisons, vers les pilotis à relever. On te touche l'épaule en passant. Un enfant te regarde le poignet, longtemps, avant que sa mère le tire par la main.",
      { with: "lison", text: "Mère Ancolie a gardé Lison près d'elle, la main posée sur son bras. Elle a quelque chose à lui dire, et elle veut que tu l'entendes." },
      { without: "lison", text: "Lison est sur un toit, au bout du village, et elle cloue des bottes de roseaux avec des gestes rageurs. Elle t'a vu. Elle continue de clouer." },
    ],
    choices: [
      { label: "Rester pour entendre ce que Mère Ancolie dit à Lison", with: "lison", big: true, to: "IIT_lison" },
      { label: "Descendre au ponton, où attend une gabare de sel", without: "lison", big: true, to: "IIT_depart" },
    ] },

  IIT_lison: { act: "II", title: "Le choix de Lison", place: "joncs", with: "lison",
    text: [
      "Mère Ancolie se tourne vers sa petite-fille. « Lison. Tu as fait ce que je t'avais demandé : tu as gardé le cornet, et celui qui le porte. C'est fini. » Elle désigne de la main les pilotis, les maisons, les gens. « Les Joncs ont besoin de toi. Tu restes. »",
      "Lison se tient droite, les poings fermés sur les cuisses. Elle regarde sa grand-mère, puis toi, puis l'eau.",
      "« {{oreille#iit_lison_choix|Oui, grand-mère, je reste, c'est entendu|Je reste, si personne ne me demande de partir. Une personne. Une seule fois}}, dit-elle. »",
      { if: { has: "joncs:brules" }, text: "Derrière elle, les pilotis noirs de la maison commune. Il faudra trois ans pour la reconstruire, et tous les bras du village." },
    ],
    choices: [
      { label: "« Viens avec moi, Lison. »", if: { any: [{ conf: "lison", min: 40 }, { voile: "iit_lison_choix" }] }, why: "Lison ne te fait pas encore assez confiance pour désobéir à sa grand-mère.", fx: { flag: "lison:loyale", conf: { lison: 15 }, fac: { taiseurs: -5 } }, to: "IIT_lison_vient" },
      { label: "« Reste. Ils ont besoin de toi plus que moi. »", fx: { flag: "lison:partie" }, to: "IIT_lison_reste" },
      { label: "« Mère Ancolie, envoyez-la avec moi. Elle gardera le cornet de près. »", fx: { conf: { lison: -3 } }, to: "IIT_lison_envoyee" },
    ] },

  IIT_lison_envoyee: { act: "II", title: "Les yeux de la Mère", place: "joncs",
    text: [
      "Mère Ancolie tourne vers toi ses yeux blancs. Ses doigts tapotent le bras de Lison, deux fois, comme on compte des mailles. « Tu demandes à la grand-mère, dit Mère Ancolie. Tu as appris quelque chose chez nous. »",
      { with: "lison", text: "Mère Ancolie lâche le bras de Lison. « Lison, tu suis le cornet. Tu me le gardes, et tu me le ramènes le jour où je te le ferai dire. » Lison ramasse sa gaffe ferrée contre le mur et la met sur son épaule. « {{oreille#iit_lison_envoyee|Oui, grand-mère|Oui, grand-mère. Et toi, la prochaine fois, c'est à moi que tu le demandes}} », dit Lison." },
      { with: "lison", text: "Lison passe devant toi, le menton haut, les yeux sur le ponton. Elle obéit à sa grand-mère, et son dos raide le dit à tout le village." },
      "Un vieux pêcheur hoche la tête. Aux Joncs, une petite-fille qui part sur l'ordre de la Mère, c'est une affaire réglée.",
    ],
    choices: [
      { label: "Descendre au ponton, où attend une gabare de sel", big: true, to: "IIT_depart" },
    ] },

  IIT_lison_vient: { act: "II", title: "Contre l'ordre", place: "joncs", with: "lison",
    text: [
      "Lison se lève avant la fin de ta phrase. Elle va chercher sa gaffe ferrée contre le mur, et elle la met sur son épaule. Puis elle s'agenouille devant sa grand-mère et lui baise les deux mains.",
      "« Je reviendrai, dit-elle. Avec ce qui manque. »",
      "Mère Ancolie lui prend le visage entre ses paumes et le palpe longtemps, comme pour l'apprendre par cœur. « {{oreille#iit_ancolie_lison|Tu me désobéis, petite|Je t'ai dit de rester pour que tu aies à choisir de partir. Va}}. »",
      "Autour, les gens des Joncs détournent les yeux, par politesse. Une vieille pêcheuse sourit dans son col.",
    ],
    choices: [
      { label: "Descendre au ponton, où attend une gabare de sel", big: true, to: "IIT_depart" },
    ] },

  IIT_lison_reste: { act: "II", title: "Lison reste", place: "joncs", with: "lison",
    fx: { leave: "lison", conf: { lison: -5 } },
    text: [
      "Lison hoche la tête une fois, sèchement. « Bon », dit-elle. Elle détache le fil rouge qu'elle avait au poignet et te le met dans la main, sans explication.",
      "« Tu sais ramer, maintenant, à peu près, dit-elle. Garde-toi de te noyer dans l'Orle : c'est une rivière de rien du tout, ce serait ridicule. » Elle te tourne le dos et s'en va vers les pilotis noirs, où des hommes mesurent des perches pour une charpente.",
      "Elle marche sans se retourner. Mère Ancolie, elle, tourne vers toi ses yeux blancs. « Elle a choisi, dit-elle. Elle choisit toujours ce qui fait le plus mal. C'est de famille. »",
    ],
    choices: [
      { label: "Descendre au ponton, où attend une gabare de sel", big: true, to: "IIT_depart" },
    ] },

  IIT_depart: { act: "II", title: "La gabare de sel", place: "joncs",
    text: [
      "Une gabare de sel attend au ponton, chargée à ras bord de sacs de la Saline, avec une voile carrée rapiécée et un patron qui fume une pipe de terre. Elle remonte la Salve, puis l'Orle jusqu'aux Combes, et elle prend des passagers qui paient en sel ou en silence.",
      "Mère Ancolie t'a fait porter un panier : du poisson fumé, des galettes, une gourde d'eau-de-vie de prune, et un rouleau de dentelle fine, enveloppé de lin. « Pour l'abbé du Mont, a-t-elle dit. Il saura la lire. »",
      { after: "iij:promesse_cornet", text: "Le gamin qui a porté le panier récite une phrase qu'on lui a fait apprendre : « La Mère dit que tu as promis de rendre l'os quand tout serait fini. Elle dit que rien n'est fini. »" },
      { if: { not: { has: "iit:feuillet_garde" } }, text: "Quelque part au sud, Lothaire Brunel remonte vers la ville avec une page de la Muette dans son étui. Tu y penses en deux couches, comme on t'a appris, ou comme tu apprendras." },
      { with: "salome", text: "Salomé a envoyé un gamin de Port-Vasier porter ses ordres au second de *La Bavarde*. « Une gabare de rivière, dit-elle en regardant la coque plate avec mépris. Enfin. Il faut bien que quelqu'un t'empêche de couler. »" },
      { with: "tibere", text: "Tibère charge les sacs avec les mariniers sans qu'on le lui demande. Il a besoin de porter quelque chose." },
    ],
    choices: [
      { label: "Monter à bord", big: true, fx: { quest: "II_eaux", ep: ["histoire", 3000] }, to: "IIT_fin" },
    ] },

  IIT_fin: { act: "II", title: "Vers l'amont", place: "joncs",
    text: [
      "La gabare quitte les Joncs-Bas à la gaffe, puis le vent la prend, et la voile carrée se gonfle en claquant. Les pilotis rapetissent. Sur la galerie de sa maison, Mère Ancolie est assise à son carreau. Elle ne te voit pas partir. Elle t'entend.",
      { if: { has: "joncs:sauves" }, text: "Au-dessus de la maison commune, la voile de barque tendue en guise de toit claque dans le vent, blanche comme un drap qui sèche." },
      { if: { has: "joncs:brules" }, text: "Au-dessus des pilotis noirs, une fumée mince monte encore, droite dans l'air calme, et se défait plus haut." },
      { if: { has: "taiseurs:serment" }, text: "Le fil blanc te serre un peu le poignet. Tu le tournes entre tes doigts, et tu penses, pour t'entraîner, à deux choses à la fois." },
      { after: "iit:serment_refuse", text: "Ton poignet gauche est nu. Sur sa galerie, Mère Ancolie lève la main une fois, paume ouverte, comme on salue aux Joncs un parent qui s'en va." },
      { with: "lison", text: "Lison est à l'avant, assise sur un sac de sel, et elle regarde droit devant elle, vers l'amont. Elle garde le dos tourné aux Joncs tout le temps qu'on les voit. C'est sa façon de dire adieu." },
      "Devant, le delta se resserre. Les roseaux laissent place à des prés salés, puis à des saules, puis à des berges. Au nord, derrière les collines, il y a les Combes d'Orle, les carrières, les vignes, et une abbaye où l'on se tait.",
    ],
    choices: [
      { label: "Remonter le fleuve vers les Combes d'Orle", big: true, exit: true, to: "III_debut" },
    ] },
});
// ==================================================================== side quest: the drowned chapel
Object.assign(P, {
  IIT_chapelle: { act: "II", title: "La sonneuse des noyés", place: "joncs",
    fx: { meet: "iit_romee" },
    text: [
      "Au bout du ponton, une très vieille femme est assise dans une barque noire, une rame posée en travers des genoux. Elle a un capuchon de laine brune, des mains énormes, et sur le banc à côté d'elle un rouleau de courroie de cuir neuf. Les pêcheurs l'appellent la sonneuse. Elle s'appelle Romée.",
      "« Chaque dimanche depuis cinquante ans, dit-elle, je vais sonner la cloche de Notre-Dame-des-Joncs pour les noyés de la semaine. La chapelle est à une heure de gaffe, à l'ouest, sous l'eau depuis le raz de marée qui a pris Sorne. Le clocher dépasse. La cloche y est encore. » Elle soupèse la courroie. « Elle ne sonne plus depuis un mois. Le battant est tombé dans la nef. Je suis trop vieille pour descendre le chercher. »",
      "« {{oreille#iit_romee|Les noyés ont besoin de l'entendre pour trouver la terre|Ceux qui passent la nuit dans les roseaux ont besoin de l'entendre pour savoir que la voie est libre}}. »",
    ],
    choices: [
      { label: "Monter dans la barque de Romée", big: true, fx: { questSeen: "IIT_chapelle" }, to: "IIT_chap_clocher" },
      { label: "« Une autre fois, la mère. »", back: "II_hub" },
    ] },

  IIT_chap_clocher: { act: "II", title: "Le clocher dans les roseaux", place: "joncs", backName: "le clocher de Notre-Dame-des-Joncs",
    text: [
      "Après une heure de gaffe entre les roseaux, le clocher sort de l'eau d'un coup : une tour carrée de pierre grise, mangée de lichen orange, avec un toit d'ardoise à moitié tombé et une baie ouverte aux quatre vents. Autour, sous la surface, on devine le toit de la nef, une arête sombre où des moules s'accrochent. La marée baisse. Une porte apparaît, au ras de l'eau, dans le flanc de la tour.",
      "Tu montes l'escalier à vis jusqu'à la chambre des cloches. La cloche est là, grosse comme un tonneau, verte, couverte d'une écriture qu'on ne lit plus. Le battant manque. La courroie qui le tenait pend, un bout de cuir noir.",
      "Les murs du clocher {{echo#iit_chap_clocher|suintent, couverts de sel et de fientes de mouettes|rendent un bruit de pas, et une voix d'homme, essoufflée, il y a un mois : « Elle sonne trop fort, cette cloche. On l'entend jusqu'à la tour. Le capitaine veut qu'elle se taise »}}.",
      "En bas, Romée a amarré sa barque à l'anneau de la porte. « La nef est à sec jusqu'aux genoux, à cette heure, crie-t-elle. Tu as le temps d'une marée. Pas plus. »",
    ],
    choices: [
      { label: "Descendre dans la nef par la porte basse", big: true, to: "IIT_chap_nef" },
    ] },

  IIT_chap_nef: { act: "II", title: "La nef noyée", place: "joncs", backName: "la nef noyée",
    text: [
      { first: true, text: "La nef est une grotte. L'eau t'arrive aux genoux, verte, froide, et la lumière entre par les fenêtres hautes en longues barres qui tremblent. Les bancs ont pourri sur place ; il en reste des lignes de pieux noirs. Sur les murs, sous une croûte de sel, des fresques : des barques, des poissons, une femme couronnée qui tient un doigt sur ses lèvres." },
      { again: true, text: "La nef noyée, l'eau verte jusqu'aux genoux, les barres de lumière. La marée attend son heure." },
      "Au pied de l'autel, à demi enfoui dans la vase, le battant de la cloche : une masse de fer en forme de poire, longue comme un bras. À côté, le bout de sa courroie. Le cuir {{pie#iit_chap_courroie|a pourri dans l'humidité|est coupé net, d'un coup de lame, et les bords sont encore clairs}}.",
      "L'autel {{pie#iit_chap_autel|est un bloc de pierre plein, scellé dans le sol|est creux : la pierre du dessus est une dalle posée, et elle sonne vide sous l'ongle}}. Devant lui, une dalle funéraire porte une inscription usée : *{{loupe#iit_chap_dalle|Ici reposent les fidèles des Joncs, que la mer les garde|Ici Aymeric Vasse a lu à six familles ce que la reine avait dit, et chaque famille a juré de garder une page jusqu'au jour de la Grande Basse}}*.",
      "La nef {{echo#iit_chap_echo|est pleine du clapotis de l'eau contre les piliers|rend une voix de vieil homme, très ancienne, qui chuchote : « Sous l'autel, frère. Ce qu'on ne peut pas porter à Sorne restera ici, avec la messe des noyés »}}. Un des piliers, gris veiné de vert, bourdonne doucement quand le vent passe dans les fenêtres hautes.",
    ],
    choices: [
      { label: "Ramasser le battant", big: true, hide: { seen: "IIT_chap_anguilles" }, to: "IIT_chap_anguilles" },
      { label: "Soulever la dalle de l'autel", hide: { any: [{ seen: "IIT_chap_autel" }, { not: { any: [{ voile: "iit_chap_autel" }, { voile: "iit_chap_echo" }] } }] }, to: "IIT_chap_autel" },
      { label: "Gratter le sel de la fresque, sur le mur nord", hide: { seen: "IIT_chap_fresque" }, to: "IIT_chap_fresque" },
      { label: "Poser le diapason contre le pilier qui bourdonne", if: { item: "diapason" }, why: "Il te faudrait le diapason de Sorne.", hide: { seen: "IIT_chap_pilier" }, to: "IIT_chap_pilier" },
      { label: "Remonter au clocher avec le battant", big: true, hide: { not: { seen: "IIT_chap_anguilles" } }, to: "IIT_chap_battant" },
    ] },

  IIT_chap_pilier: { act: "II", title: "Le pilier qui chante", place: "joncs",
    fx: { recharge: { echo: 3 } },
    text: [
      "Tu frappes le diapason sur ton genou et tu en poses le pied contre le pilier. La note entre dans la pierre. La pierre la reprend, plus grave, plus large, et la nef entière se met à chanter, l'eau frissonne autour de tes jambes en petits cercles serrés.",
      "Quand le son s'éteint, le bronze vert est chaud dans ta main. Il vibre encore, comme un chat qui ronronne. Le diapason a repris des forces.",
    ],
    choices: [{ back: "IIT_chap_nef" }] },

  IIT_chap_autel: { act: "II", title: "La dalle de l'autel", place: "joncs",
    text: [
      "La dalle du dessus est large comme une porte et épaisse comme une main. Elle est simplement posée, scellée par trois siècles de vase et de sel. Sur son bord, quelqu'un a gravé une petite bouche fermée d'un trait.",
    ],
    choices: [
      { label: "La faire glisser à la force des bras", test: { dom: "combat", diff: -10, label: "Soulever la pierre de l'autel", help: [{ with: "tibere", v: 10 }, { with: "salome", v: 10 }] },
        win: { to: "IIT_chap_ciboire" }, lose: { fx: { pv: -2 }, to: "IIT_chap_ciboire" } },
      { label: "Faire levier avec un banc pourri et un caillou, en savant", test: { dom: "savoir", diff: 0, label: "Un levier, un appui", help: [{ with: "gildas", v: 10 }, { if: { has: "metier:mains" }, v: 10 }] },
        win: { to: "IIT_chap_ciboire" }, lose: { fx: { pv: -2 }, to: "IIT_chap_ciboire" } },
    ] },

  IIT_chap_ciboire: { act: "II", title: "Sous l'autel", place: "joncs",
    fx: { item: "iit_tr_ciboire", clock: { tresors: 1 }, flag: "tresor:iit_ciboire", ep: ["perso", 600] },
    text: [
      { outcome: "lose", text: "La dalle glisse d'un coup et te pince les doigts contre la pierre. Tu jures. L'écho de la nef te renvoie ton juron trois fois." },
      "Sous la dalle, une cavité sèche, tapissée de plomb. Dedans, enveloppé dans une toile cirée devenue raide comme du bois, un ciboire d'argent à couvercle, haut comme une main ouverte. Sur le pied, une couronne de sel en relief, et une bouche fermée d'un trait.",
      "Dans la coupe, une poignée de grains de sel, gros comme des pois, jaunis par le temps. Le sel de la Muette, gardé ici pour la messe des noyés.",
    ],
    choices: [{ back: "IIT_chap_nef" }] },

  IIT_chap_anguilles: { act: "II", title: "Les anguilles noires", place: "joncs",
    text: [
      "Tu tires le battant de la vase. Elle lâche avec un bruit de baiser, et la nef s'anime d'un coup : sous l'eau verte, des formes noires se déroulent entre les pieux des bancs, trois, quatre, longues comme des hommes. Des anguilles noires, les grosses, celles qui nichent dans les épaves. Tu as dérangé leur trou.",
      "Romée crie quelque chose depuis la porte. L'eau monte déjà d'un doigt.",
    ],
    choices: [
      { label: "Te battre, le battant à la main", fight: { title: "La nef noyée", enemies: [{ id: "iit_anguille_noire", n: 3 }], terrain: "nature", spare: true,
        win: { fx: { ep: ["perso", 500] }, to: "IIT_chap_battant" },
        lose: { fx: { pv: -3 }, to: "IIT_chap_maree" },
        flee: { label: "Courir vers la porte avec le battant", dom: "nature", diff: -10, to: "IIT_chap_maree" },
        calm: { to: "IIT_chap_battant" } } },
      { label: "Rester immobile, laisser passer les anguilles, puis gagner la porte pas à pas", test: { dom: "discretion", diff: -10, label: "Être une pierre dans l'eau", help: [{ with: "lison", v: 15 }] },
        win: { fx: { ep: ["perso", 400] }, to: "IIT_chap_battant" }, lose: { fx: { pv: -2 }, to: "IIT_chap_maree" } },
    ] },

  IIT_chap_maree: { act: "II", title: "La marée dans la nef", place: "joncs",
    text: [
      "Une anguille te mord au mollet et serre. Tu la frappes du battant, elle lâche. L'eau est à ta taille, maintenant, et elle monte vite, poussée par le flot qui entre par toutes les fenêtres basses à la fois. Tu avances vers la porte en serrant le fer contre ta poitrine.",
      "La porte est à moitié sous l'eau. Tu plonges, tu passes, tu te cognes l'épaule au chambranle, et tu sors dans la lumière, en crachant. Romée t'attrape par le col avec ses mains énormes et te hisse dans la barque comme un sac de sel. « Tu l'as ? » Tu l'as.",
    ],
    choices: [
      { label: "Monter au clocher avec le battant", big: true, to: "IIT_chap_battant" },
    ] },

  IIT_chap_battant: { act: "II", title: "La cloche des noyés", place: "joncs",
    fx: { quest: "IIT_chapelle", flag: "iit:chapelle", fac: { hautes: 5 }, ep: ["seance", 900] },
    text: [
      "Romée monte l'escalier à vis derrière toi, une marche après l'autre, en soufflant. Elle te passe la courroie neuve. Tu raccroches le battant à l'anneau, tu serres, tu vérifies. Puis Romée prend la corde, crache dans ses paumes, et tire.",
      "La cloche sonne. Le son sort de la baie et s'étend sur le marais, grave, large, sans fin, et les roseaux en frémissent à perte de vue. Des oiseaux s'envolent de partout à la fois. Romée tire trois coups longs, puis un court, puis trois longs encore.",
      { after: "voile:iit_romee", text: "Trois longs, un court, trois longs. Au loin, dans les roseaux, quelqu'un allume une lanterne et l'éteint aussitôt." },
      "Quand elle lâche la corde, elle a les yeux mouillés. « Voilà, dit-elle. Ils savent où est la terre, maintenant. » Elle te regarde. « Toi aussi, tu le sauras. Quand tu entendras ça, la nuit, c'est que la voie est libre. Souviens-t'en. »",
      { after: "tresor:iit_ciboire", text: "Elle aperçoit le ciboire d'argent dans ton sac et le touche du bout d'un doigt, sans le prendre. « La messe des noyés n'a plus de prêtre depuis Sorne, dit Romée. Garde-le pour celle qu'on dira un jour. »" },
    ],
    choices: [{ back: "II_hub" }] },
});

// ==================================================================== side quest: the Old One of the mudflats
Object.assign(P, {
  IIT_anguilles: { act: "II", title: "Les nasses crevées", place: "joncs",
    fx: { meet: "iit_ysore" },
    text: [
      "Au bout du ponton des pêcheurs, une rangée de nasses d'osier sèche au soleil, et chacune est crevée : des trous ronds, larges comme une tête, les brins d'osier cassés vers l'intérieur. Cyprien Huchet, le doyen des pêcheurs, les montre d'un geste du menton.",
      "« La Vieille, dit-il enfin. L'anguille des Vasières-Rouges. Elle remonte du large tous les vingt ans, à ce qu'on dit, et elle mange les nasses avec ce qu'il y a dedans. {{oreille#iit_ang_cyprien|Elle nous a pris trois semaines de pêche|Elle a retourné la barque de mon petit-fils, mardi, et il a fallu le repêcher par les cheveux. Sa mère ne le sait pas}}. »",
      "Au fumoir, une vieille femme vide des anguilles en chantonnant, le couteau rapide, sans regarder ses mains. C'est Ysoré, la sœur de Cyprien. Elle chante une berceuse des marais, à mi-voix : « {{oreille#iit_ang_berceuse|Dors, anguille, dors dans la vase, la lune est sur l'eau|Va-t'en, Vieille, va-t'en au large, la mer est à toi, et le marais est à nous}}. »",
      "« Il faudrait quelqu'un, dit Cyprien, qui monte la garde cette nuit aux Vasières-Rouges. Quelqu'un qui n'a pas peur, ou qui a peur moins que nous. On paiera en argent et en anguilles. »",
    ],
    choices: [
      { label: "Entrer au fumoir parler à Ysoré", hide: { seen: "IIT_ang_ysore" }, fx: { questSeen: "IIT_anguilles" }, to: "IIT_ang_ysore" },
      { label: "Examiner les nasses crevées", hide: { seen: "IIT_ang_nasses" }, fx: { questSeen: "IIT_anguilles" }, to: "IIT_ang_nasses" },
      { label: "Accepter de guetter la Vieille cette nuit", big: true, fx: { questSeen: "IIT_anguilles" }, to: "IIT_ang_affut" },
      { label: "« Pas cette nuit, Cyprien. »", back: "II_hub" },
    ] },

  IIT_ang_nasses: { act: "II", title: "Les morsures", place: "joncs",
    text: [
      "Tu prends une nasse sur tes genoux. L'osier est mouillé, gluant, et sent le poisson pourri. Les déchirures {{pie#iit_ang_morsure|sont larges comme un seau, voilà tout|portent la marque de dents en double rangée, et un éclat de dent long comme un doigt, jaune et vieux, est resté planté dans l'osier : la bête a cent ans au moins}}.",
      "Cyprien te regarde faire. Ses avant-bras sont couverts de cicatrices blanches, de petites morsures d'anguilles de toute une vie. Aucune ne ressemble à ça.",
    ],
    choices: [{ back: "IIT_anguilles" }] },

  IIT_ang_affut: { act: "II", title: "L'affût des Vasières-Rouges", place: "joncs", takes: "night",
    text: [
      "Les Vasières-Rouges sont un grand plat de boue, rouge sombre à cause du fer, coupé de chenaux où l'eau reste à marée basse. Les pêcheurs y posent leurs nasses en ligne, sur des piquets. Tu t'installes dans une barque plate, au milieu, avec une lanterne sourde, une gaffe, et un seau de têtes de poisson pour appât.",
      { with: "lison", text: "Lison s'est allongée au fond de la barque, sur une toile, les bras sous la nuque. « Réveille-moi quand elle arrive. Ou quand tu as peur. Le premier des deux. »" },
      "Vers minuit, l'eau du chenal se soulève sans vent. Une vague lente passe sous la barque, la soulève, la repose. Puis une tête sort de l'eau, à quatre longueurs : large comme un tonneau, plate, grise, avec deux yeux de verre trouble, et une gueule qui s'ouvre sur une double rangée de dents jaunes. Derrière la tête, le corps continue de sortir, longtemps.",
      "La Vieille regarde ta lanterne. Elle a l'air de réfléchir.",
    ],
    choices: [
      { label: "Lui chanter la berceuse d'Ysoré, les mots du dessous", hide: { not: { any: [{ voile: "iit_ang_berceuse" }, { voile: "iit_ysore" }] } }, fx: { ep: ["perso", 800] }, to: "IIT_ang_chant" },
      { label: "Frapper la première, à la gaffe", fight: { title: "La Vieille des vasières", enemies: [{ id: "iit_vieille", n: 1 }], terrain: "nature", spare: true,
        win: { fx: { ep: ["perso", 1200], flag: "iit:vieille_morte" }, to: "IIT_ang_morte" },
        lose: { fx: { pv: -4 }, to: "IIT_ang_fuite" },
        flee: { label: "Pousser la barque dans les roseaux", dom: "nature", diff: -10, to: "IIT_ang_fuite" },
        calm: { fx: { ep: ["perso", 800] }, to: "IIT_ang_chant" } } },
      { label: "Éteindre la lanterne et la suivre quand elle replongera", test: { dom: "discretion", diff: -10, label: "Suivre une bête qui ne te voit plus", help: [{ with: "lison", v: 15 }, { with: "salome", v: 10 }] },
        win: { fx: { ep: ["perso", 700] }, to: "IIT_ang_repaire" }, lose: { fx: { pv: -3 }, to: "IIT_ang_fuite" } },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "nature", diff: -10, label: "Lison mène la Vieille au chenal du large, à coups d'appât" },
        win: { fx: { ep: ["perso", 700], conf: { lison: 5 } }, to: "IIT_ang_chant" }, lose: { to: "IIT_ang_fuite" } },
    ] },

  IIT_ang_chant: { act: "II", title: "La Vieille s'en va", place: "joncs",
    fx: { flag: ["iit:vieille_partie", "iit:anguilles"], fac: { hautes: 5, taiseurs: 5 } },
    text: [
      "Tu chantes, d'abord mal, puis mieux. Les mots du dessous, ceux qu'Ysoré cachait sous la berceuse. *Va-t'en, Vieille, va-t'en au large.* Ta voix tremble au-dessus de l'eau noire. La Vieille écoute, la tête levée, et ses yeux de verre restent sur toi.",
      "Puis elle se détourne. Lentement, elle plonge, et la vague de son corps passe sous la barque, très longue, vers le chenal du large. Tu la suis des yeux, au remous. Puis il reste l'eau plate, et la lune dessus.",
      { with: "lison", text: "Lison s'est redressée sur un coude. Elle te regarde comme on regarde quelqu'un pour la première fois. « Ma grand-mère chante ça aussi, dit-elle. Je croyais que c'était pour endormir les enfants. »" },
      "À l'endroit d'où elle est sortie, la marée découvre maintenant la carcasse noire d'une vieille gabare, couchée dans la vase, la quille en l'air.",
    ],
    choices: [
      { label: "Aller voir la carcasse avant que la mer remonte", big: true, to: "IIT_ang_repaire" },
      { label: "Rentrer annoncer la nouvelle à Cyprien", to: "IIT_ang_fin" },
    ] },

  IIT_ang_morte: { act: "II", title: "La Vieille morte", place: "joncs",
    fx: { flag: "iit:anguilles", fac: { hautes: 5 } },
    text: [
      "La Vieille meurt longtemps. Elle se tord dans le chenal, elle frappe l'eau, elle se couche enfin dans la vase, et sa queue bat encore une heure après. Les pêcheurs, qui guettaient de loin, arrivent avec des cordes et des crocs. Il en faut douze pour la tirer sur le plat.",
      "Elle mesure trois barques de long. On la mesure deux fois pour être sûr. On allume un feu sur la vase. On boit.",
      "Au matin, quand on la ramène aux Joncs, Ysoré sort du fumoir, regarde la bête, et se signe. « Ça fera des anguilles maigres pendant vingt ans, dit-elle. C'était leur mère. » Les pêcheurs regardent leurs pieds.",
    ],
    choices: [
      { label: "Aller voir d'où elle sortait, à marée basse", big: true, to: "IIT_ang_repaire" },
      { label: "Toucher ton dû auprès de Cyprien", to: "IIT_ang_fin" },
    ] },

  IIT_ang_repaire: { act: "II", title: "La carcasse de la gabare", place: "joncs",
    fx: { item: "iit_tr_anneau", clock: { tresors: 1 }, flag: "tresor:iit_anneau", ep: ["perso", 500] },
    text: [
      "La carcasse est celle d'une gabare de sel, très ancienne, couchée sur le flanc, la coque ouverte comme un panier. La Vieille y nichait : l'intérieur est tapissé d'une vase lisse, polie par son corps, et semé d'os de poissons, de carapaces, de choses brillantes qu'elle a avalées et recrachées.",
      "Au milieu des os, un anneau. Tu le ramasses, tu le frottes sur ta manche. Un anneau de sceau, lourd, gravé d'un écu {{pie#iit_ang_anneau|de laiton, de ceux qu'on vend aux foires|d'or rouge massif : un écu à trois fers de lance, les armes des Fourcaud, l'une des quarante maisons, avant la nuit des Comptoirs}}.",
      "La quille porte un nom, à demi effacé, peint en lettres de l'ancien temps : *La Patiente de Sorne*.",
    ],
    choices: [
      { label: "Retourner chez Cyprien avant le flot", big: true, to: "IIT_ang_fin" },
    ] },

  IIT_ang_fuite: { act: "II", title: "Dans la vase", place: "joncs",
    fx: { flag: "iit:anguilles_ratee" },
    text: [
      "La Vieille retourne la barque d'un coup de tête. Tu te retrouves dans le chenal, sous l'eau, dans le noir, avec quelque chose d'énorme qui passe et repasse autour de tes jambes. Tu nages vers la vase. Tu t'y enfonces jusqu'à la poitrine, et tu y restes, sans bouger, longtemps.",
      "À l'aube, les pêcheurs te trouvent planté{e} dans la boue rouge comme un piquet de nasse. Ils te tirent à la corde. La Vieille est partie, avec toutes les nasses de la ligne.",
      "« Au moins, dit Cyprien, maintenant tu sais pourquoi on ne pêche plus aux Vasières-Rouges. »",
    ],
    choices: [
      { label: "Rentrer au ponton, couvert{e} de boue", big: true, to: "IIT_ang_fin" },
    ] },

  IIT_ang_fin: { act: "II", title: "La part des pêcheurs", place: "joncs",
    fx: { quest: "IIT_anguilles" },
    text: [
      { if: { has: "iit:vieille_partie" }, text: "Cyprien écoute ton récit en hochant la tête. Puis il va au fumoir, et tu l'entends parler à sa sœur. Ysoré sort, s'essuie les mains à son tablier, et te regarde longtemps. « Tu as entendu ce qu'il y avait dessous, dit-elle. Ma mère me l'a appris. Toi, qui te l'a appris ? » Elle hausse les épaules, sans attendre la réponse, et retourne à ses anguilles." },
      { if: { has: "iit:vieille_morte" }, text: "Cyprien te paie devant tout le ponton, en comptant les pièces à voix haute, et les pêcheurs frappent leurs crocs contre le bois. On te donne une anguille fumée longue comme le bras." },
      { if: { has: "iit:anguilles_ratee" }, text: "Cyprien te donne quand même une anguille fumée, et une tape sur l'épaule qui te fait tousser. « Tu as tenu la nuit, dit-il. C'est déjà ça. On ira poser nos nasses ailleurs. Le marais est grand. »" },
      { if: { has: "iit:anguilles" }, text: "« Si un jour tu as besoin de bras sur l'eau, ajoute-t-il, les pêcheurs des Joncs savent où tu dors. »" },
      { after: "tresor:iit_anneau", text: "Cyprien tourne l'anneau des Fourcaud entre ses doigts gras de poisson. « Ma grand-mère disait que les Fourcaud avaient des terres jusqu'à la mer, avant. » Il te le rend. « La Vieille te l'a donné. Garde-le. »" },
    ],
    choices: [
      { label: "Prendre ta part", fx: { gold: 40, food: 2 }, hide: { has: "iit:anguilles_ratee" }, back: "II_hub" },
      { label: "Prendre l'anguille fumée", fx: { food: 1 }, hide: { not: { has: "iit:anguilles_ratee" } }, back: "II_hub" },
    ] },
});
// ==================================================================== side quest: the lace letter
Object.assign(P, {
  IIT_dentelle: { act: "II", title: "Le col de Gwenola", place: "joncs",
    fx: { meet: "iit_domitille" },
    text: [
      "Au bout de la passerelle des dentellières, loin du tabouret de Thècle, une jeune femme travaille seule, le carreau sur les genoux, les fuseaux qui claquent très vite. Gwenola, dix-neuf ans, des mains de souris et des yeux rouges de trop coudre à la chandelle. Elle te fait signe d'approcher sans lever la tête.",
      "Sur le carreau, un col presque fini, d'un blanc de lait, avec des lettres prises dans le motif, des lettres qu'on lit en penchant la tête. « Tu vas chez les douaniers, toi, parfois, dit-elle à voix basse. Ou tu pourrais. Ce col est {{oreille#iit_dom|pour la fête de la dentelle, à la Saint-Jean|pour Herlé, un garçon de la tour des douanes. Mon père le noierait, et Thècle me chasserait de la passerelle}}. »",
      "Elle coupe le dernier fil avec les dents. « Il faut qu'il l'ait avant la grande marée. Avant. Tu comprends ? »",
    ],
    choices: [
      { label: "Prendre le col, et promettre de le porter", big: true, fx: { questSeen: "IIT_dentelle", item: "iit_col_lettre" }, to: "IIT_dent_col" },
      { label: "« Je ne porte pas de lettres aux douaniers. »", back: "II_hub" },
    ] },

  IIT_dent_col: { act: "II", title: "Ce que dit le col", place: "joncs",
    text: [
      "Gwenola te montre comment lire : on tient le col à contre-jour, et les lettres sortent du fond, en relief. Elle suit les mots du doigt, en rougissant, comme si c'était toi qui les avais écrits.",
      "*{{loupe#iit_dent_col|Fil de lin, fil de soie, je pense à toi le soir, au bout de la passerelle, quand l'eau est haute|Ne viens pas avec eux à la grande marée. Mon père a loué sa barque à ta tour, et il a vu l'argent des gants gris. Si tu viens quand même, viens sans casque, et je saurai que tu es avec nous}}.*",
      "« C'est une chanson, dit-elle. Une chanson de dentellière. Il comprendra. »",
      { if: { not: { item: "loupe" } }, text: "Le motif du fond est trop serré pour un col de fête. On dirait qu'il y a une seconde écriture prise dans les jours, plus fine que la première." },
    ],
    choices: [
      { label: "Partir vers la tour des douanes, au sud du chenal", big: true, to: "IIT_dent_tour" },
    ] },

  IIT_dent_tour: { act: "II", title: "La tour des douanes", place: "joncs",
    text: [
      "La tour des douanes garde l'entrée du grand chenal, au sud des Joncs : une tour carrée de brique sur des pilotis de pierre, avec un drapeau de la République qui pend, mouillé, et une chaîne de fer tendue d'une berge à l'autre au ras de l'eau. Un douanier somnole sur le ponton, la hallebarde contre l'épaule. Une odeur de soupe aux choux descend des fenêtres.",
      "Herlé est là-haut, quelque part. Pour monter, il faut une raison, ou une échelle.",
      { with: "tibere", text: "Tibère regarde la tour avec un œil de métier. « Une garnison de douane, à cette heure, c'est la soupe, puis la sieste. L'échelle des latrines est derrière, côté roseaux. Il y en a toujours une. »" },
    ],
    choices: [
      { label: "Apporter un panier d'anguilles au cuisinier, et demander Herlé", test: { dom: "social", diff: 0, label: "Passer pour un pêcheur", help: [{ if: { has: "iit:anguilles" }, v: 15 }, { if: { has: "metier:parole" }, v: 10 }] },
        win: { fx: { ep: ["perso", 400] }, to: "IIT_dent_herle" }, lose: { to: "IIT_dent_sevrac" } },
      { label: "Monter par l'échelle des latrines, côté roseaux", test: { dom: "discretion", diff: -10, label: "Grimper sans être vu{e}", help: [{ with: "tibere", v: 10 }, { if: { has: "passe:voleur" }, v: 10 }] },
        win: { fx: { ep: ["perso", 400] }, to: "IIT_dent_herle" }, lose: { to: "IIT_dent_sevrac" } },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: 0, label: "Tibère parle de sergent à douanier" },
        win: { fx: { ep: ["perso", 400] }, to: "IIT_dent_herle" }, lose: { to: "IIT_dent_sevrac" } },
    ] },

  IIT_dent_sevrac: { act: "II", title: "Le capitaine Sévrac", place: "joncs",
    fx: { meet: "iit_sevrac" },
    text: [
      "Une main se pose sur ton épaule. Un homme en manteau de douane à revers rouges, barbe grise taillée court, un bâton à encoches sous le bras. Le capitaine Sévrac. Il te regarde de haut en bas, puis regarde le col que tu tiens.",
      "« De la dentelle, dit-il. Pour qui ? » Tu le lui dis, ou il le devine. Il prend le col, le tient au jour, lit la chanson à mi-voix, et a un sourire las. « Fil de lin, fil de soie. Ces filles des Joncs. » Il le rend. « {{oreille#iit_sevrac_col|Porte-le-lui, et ne reviens plus|Tant mieux s'il a une fille là-bas. Il hésitera le jour venu, et moi aussi j'aimerais hésiter}}. »",
      "Il crie un nom vers les fenêtres. Un garçon descend en courant, la tunique à moitié boutonnée.",
    ],
    choices: [
      { label: "Donner le col au garçon", big: true, to: "IIT_dent_herle" },
    ] },

  IIT_dent_herle: { act: "II", title: "Herlé", place: "joncs",
    fx: { meet: "iit_herle" },
    text: [
      "Herlé a vingt ans, des oreilles décollées, une moustache qui essaie, et le regard d'un chien qu'on a souvent grondé. Il prend le col comme on prend un oiseau tombé du nid, et il le tient contre sa poitrine sans le regarder, parce qu'on le regarde, lui.",
      "« Dis-lui que {{oreille#iit_herle|je viendrai à la fête de la Saint-Jean, sans faute|le capitaine a reçu de l'argent de la Banque, et une date. Je ne sais pas laquelle. Je sais que c'est bientôt, et que je serai dans les barques}}, dit-il. Dis-lui ça. »",
      "Il tourne le col entre ses doigts, cherche à lire les lettres du fond, en vain. Il te regarde, plein d'espoir, comme si tu pouvais l'aider.",
    ],
    choices: [
      { label: "Lui dire ce que le col dit dessous", hide: { not: { voile: "iit_dent_col" } }, fx: { flag: "iit:herle", ep: ["perso", 600] }, to: "IIT_dent_reponse" },
      { label: "« Le jour où ils viendront, Herlé, ne viens pas avec eux. »", test: { dom: "social", diff: -10, label: "Retourner un douanier", help: [{ if: { voile: "iit_herle" }, v: 20 }, { if: { seen: "IIT_dent_sevrac" }, v: 10 }] },
        win: { fx: { flag: "iit:herle", ep: ["perso", 500] }, to: "IIT_dent_reponse" }, lose: { to: "IIT_dent_reponse" } },
      { label: "Prendre sa réponse, et partir", to: "IIT_dent_reponse" },
    ] },

  IIT_dent_reponse: { act: "II", title: "La réponse de Herlé", place: "joncs",
    fx: { drop: "iit_col_lettre" },
    text: [
      { if: { has: "iit:herle" }, text: "Herlé devient très pâle. Il regarde vers les Joncs, au nord, où l'on voit la fumée des fumoirs au-dessus des roseaux. « Je serai dans les barques, dit-il. On n'a pas le choix, nous. Mais je porterai la lanterne de proue. Si je la lève deux fois, c'est que je suis avec vous. »",
        else: "Herlé hoche la tête, plusieurs fois, sans rien ajouter. Il a l'air de quelqu'un qui a entendu une question à laquelle il a peur de répondre." },
      "Il fouille dans sa tunique et en sort un ruban de laine rouge, celui qu'on noue aux hampes de la douane les jours de parade. Il y fait trois nœuds, serrés, réguliers, avec un soin d'écolier. « Pour elle. Elle saura lire les nœuds. C'est elle qui m'a appris. »",
    ],
    choices: [
      { label: "Rapporter le ruban à Gwenola", big: true, to: "IIT_dent_retour" },
    ] },

  IIT_dent_retour: { act: "II", title: "Trois nœuds", place: "joncs",
    fx: { quest: "IIT_dentelle", flag: "iit:dentelle", item: "iit_tr_col", clock: { tresors: 1 }, ep: ["seance", 800] },
    text: [
      "Gwenola prend le ruban, défait les nœuds un à un en les comptant du bout de la langue, comme on compte les points d'une dentelle. Au troisième, elle se met à pleurer sans bruit, et elle continue de travailler en pleurant, parce que Thècle regarde.",
      { if: { has: "iit:herle" }, text: "« Il sera dans les barques, dit-elle. Avec nous. » Elle essuie ses yeux du dos de la main. « Tu as fait plus que porter un col. »" },
      "Elle sort de son tablier un petit paquet de lin. Dedans, un col très ancien, jaune comme un vieil ivoire, d'une finesse à faire peur. « Celui de mon arrière-grand-mère. On dit qu'il vient de Sorne. Je n'ai rien d'autre à te donner, et je préfère te le donner à toi qu'à la fête. »",
      "Le col est travaillé d'un motif de sept petites bouches fermées, qui se suivent tout autour, comme des perles.",
    ],
    choices: [{ back: "II_hub" }] },
});

// ==================================================================== side quest: the ferryman of the fugitives
Object.assign(P, {
  IIT_passeur: { act: "II", title: "Le passeur", place: "joncs", takes: "evening",
    fx: { meet: "iit_maclou" },
    text: [
      "À l'heure où le soleil tombe dans les roseaux, une perche frappe trois coups sous ta galerie. En bas, dans une barque plate peinte en vert sale pour se confondre avec les joncs, un homme maigre, sans âge, un chapeau de paille sur la nuque. Maclou. Les gens des Joncs disent qu'il pêche. Les gens des Joncs disent beaucoup de choses.",
      "« Cette nuit, dit-il, je passe une femme de la Saline et ses deux petits. Le maître saunier de Grisemotte réclame les enfants pour les dettes du mari, qui est mort dans les bassins. À la Saline, ça se fait. Ils seront au sel jusqu'à vingt ans. » Il crache dans l'eau. « Il y a la chaîne de la douane à passer. Il me faut une deuxième paire de bras. »",
      "« Je fais ça {{oreille#iit_maclou|pour l'argent, comme tout le monde|pour ma fille, que je n'ai pas su passer à temps, il y a douze ans. Elle est au sel encore, si elle vit}}, ajoute-t-il, comme pour couper court. »",
    ],
    choices: [
      { label: "Descendre dans la barque verte", big: true, fx: { questSeen: "IIT_passeur" }, to: "IIT_pass_firmine" },
      { label: "« Pas cette nuit, Maclou. »", back: "II_hub" },
    ] },

  IIT_pass_firmine: { act: "II", title: "Firmine", place: "joncs",
    fx: { meet: "iit_firmine" },
    text: [
      "Ils attendent dans une hutte de roseaux, sur une butte, à une demi-heure des Joncs : une femme de trente ans aux mains rongées par le sel jusqu'au sang, et deux enfants, un garçon de huit ans et une fillette de cinq, qui te regardent en silence. Firmine. Elle a un baluchon, et un couteau de saunière à la ceinture.",
      "Elle tend à Maclou trois pièces, sorties d'un nœud de son mouchoir. « C'est ce qu'il me reste de mon homme. Il les avait trouvées dans le vieux bassin, sous la vase. » Les pièces sont {{pie#iit_pass_pieces|de cuivre noirci, des liards d'avant|d'or fin, frappées d'une reine qui tient un doigt sur ses lèvres : des ducats à la Muette, qui valent chacun le prix d'une barque}}.",
      "Maclou les prend sans les regarder et les fourre dans sa poche. « Ça ira », dit-il.",
    ],
    choices: [
      { label: "« Firmine, ces pièces valent cent fois ce que tu crois. Garde-les. »", hide: { not: { voile: "iit_pass_pieces" } }, fx: { flag: "iit:firmine_dit", fac: { hautes: 5 } }, to: "IIT_pass_nuit" },
      { label: "Te taire, et monter dans la barque", to: "IIT_pass_nuit" },
    ] },

  IIT_pass_nuit: { act: "II", title: "Les roseaux de nuit", place: "joncs", takes: "night",
    text: [
      { if: { has: "iit:firmine_dit" }, text: "Maclou a rendu les pièces à Firmine, en grommelant, et il a pris à la place un sac de sel qu'elle avait dans son baluchon. « Garde ton or, a-t-il dit. Avec ça, tu achètes une maison à Port-Vasier. Avec mon prix, tu n'achètes rien. »" },
      "La barque verte glisse dans les roseaux sans un bruit. Maclou pousse à la perche, à petits coups, et chaque fois qu'il la retire de l'eau, il la retient pour qu'elle s'égoutte sans bruit. Les enfants sont couchés au fond, sous une toile. La fillette s'est endormie. Le garçon regarde les étoiles.",
      { after: "iit:chapelle", text: "Très loin, à l'ouest, une cloche sonne : trois coups longs, un court, trois longs. Maclou lève la tête et sourit, pour la première fois. « La vieille Romée, dit-il. La voie est libre jusqu'au chenal. Elle sonne de nouveau. » Il pousse plus vite." },
      "Puis, droit devant, entre les tiges, une lanterne posée sur l'eau, immobile. Et sous la lanterne, tendue d'une berge à l'autre au ras de l'eau, la chaîne de la douane.",
    ],
    choices: [
      { label: "Approcher de la chaîne", big: true, to: "IIT_pass_chaine" },
    ] },

  IIT_pass_chaine: { act: "II", title: "La chaîne", place: "joncs",
    text: [
      "La chaîne est fixée de chaque côté à un pieu de chêne, avec un cadenas. Au milieu du chenal, une barque de garde, amarrée, et dedans deux douaniers qui jouent aux dés à la lueur de la lanterne, en se disputant à voix basse. Il y a deux toises d'eau libre entre la chaîne et la barque de garde.",
      { if: { has: "iit:herle" }, text: "L'un des deux douaniers a des oreilles décollées. Herlé. Il lève les yeux vers les roseaux, comme s'il avait entendu quelque chose." },
      "Maclou se tourne vers toi. Il attend que tu choisisses. C'est pour ça qu'il t'a pris.",
    ],
    choices: [
      { label: "Siffler doucement les trois nœuds de Gwenola vers Herlé", hide: { not: { has: "iit:herle" } }, fx: { ep: ["perso", 500] }, to: "IIT_pass_rive" },
      { label: "Soulever la chaîne à mains nues et faire passer la barque dessous", test: { dom: "discretion", diff: -10, label: "Une chaîne, deux douaniers, pas un bruit", help: [{ with: "lison", v: 15 }, { if: { has: "iit:chapelle" }, v: 10 }] },
        win: { fx: { ep: ["perso", 700] }, to: "IIT_pass_rive" }, lose: { to: "IIT_pass_pris" } },
      { label: "Aller parler aux douaniers comme un pêcheur égaré, pendant que Maclou passe", test: { dom: "social", diff: -10, label: "Distraire la garde", help: [{ if: { has: "metier:parole" }, v: 15 }, { with: "tibere", v: 10 }] },
        win: { fx: { ep: ["perso", 700] }, to: "IIT_pass_rive" }, lose: { to: "IIT_pass_pris" } },
      { label: "Aborder la barque de garde", fight: { title: "La chaîne de la douane", enemies: [{ id: "iit_douanier", n: 2 }],
        win: { fx: { ep: ["perso", 700], fac: { conseil: -5 } }, to: "IIT_pass_rive" },
        lose: { to: "IIT_pass_pris" },
        flee: { label: "Plonger dans les roseaux", dom: "nature", diff: -10, to: "IIT_pass_pris" } } },
    ] },

  IIT_pass_pris: { act: "II", title: "La nuit à la tour", place: "joncs",
    fx: { gold: -20 },
    text: [
      "Une main te saisit au col. Tu te débats, tu tombes à l'eau, on te repêche à la gaffe, et tu te retrouves assis{e} au fond de la barque de garde, une lanterne dans la figure. Derrière toi, dans le noir, tu entends la perche de Maclou qui s'éloigne, de l'autre côté de la chaîne. Ils sont passés pendant qu'on s'occupait de toi.",
      "Tu passes la nuit dans une cave de la tour des douanes, avec des sacs de sel saisis. Au matin, le capitaine Sévrac te fait payer une amende de pêche de nuit, sans te demander ton nom, et te renvoie aux Joncs. « Je n'ai vu personne d'autre, dit-il. Il faisait noir. »",
    ],
    choices: [
      { label: "Rentrer aux Joncs, retrouver Maclou", big: true, to: "IIT_pass_fin" },
    ] },

  IIT_pass_rive: { act: "II", title: "L'autre côté de la chaîne", place: "joncs",
    fx: { item: "iit_tr_muette", clock: { tresors: 1 }, flag: "tresor:iit_muette" },
    text: [
      "De l'autre côté de la chaîne, le chenal s'élargit, et l'eau sent la mer. Au bout, dans l'aube grise, un bateau de pêche de Port-Vasier attend, voile brune affalée, et un homme fait signe d'une lanterne.",
      "Firmine fait monter les enfants. Puis elle se retourne vers toi.",
      { if: { has: "iit:firmine_dit" }, text: "Elle te met une des pièces dans la main et te referme les doigts dessus, très fort, avec sa main râpeuse de saunière. « Une pour toi. Tu aurais pu te taire. » Elle monte à bord sans attendre de réponse.",
        else: "Elle te serre la main, très fort. Quand le bateau a pris le large, Maclou sort une des trois pièces de sa poche et te la tend. « Ta part. » Il la regarde à peine. Tu la regardes, toi, longtemps." },
      "La voile brune monte. Le garçon, à l'arrière, lève la main, et la garde levée jusqu'à ce que la brume le prenne.",
    ],
    choices: [
      { label: "Rentrer avec Maclou", big: true, to: "IIT_pass_fin" },
    ] },

  IIT_pass_fin: { act: "II", title: "Ce que doit un passeur", place: "joncs",
    fx: { quest: "IIT_passeur", flag: "iit:passeur", fac: { hautes: 5 }, ep: ["seance", 800] },
    text: [
      "Maclou te dépose sous ta galerie, comme il t'a pris. Il reste un moment assis dans sa barque, la perche en travers des genoux.",
      "« Douze ans que je passe des gens, dit-il. J'en ai passé cent quarante. Pas un n'est revenu me dire merci, et c'est très bien : c'est que ça a marché. » Il se lève. « Si un jour tu as besoin de passer quelque chose, ou quelqu'un, ou toi-même : frappe trois coups sous le ponton du sud. Je connais tous les chenaux du marais, même ceux qui n'existent pas encore. »",
      { if: { not: { has: "iit:firmine_dit" } }, text: "Il pousse sur sa perche. Puis il se retourne. « La pièce, dit-il. Tu savais ce qu'elle valait, toi. Je l'ai vu à ta figure. » Il s'en va sans attendre de réponse." },
      { if: { all: [{ has: "tresor:iit_muette" }, { has: "iit:firmine_dit" }] }, text: "Il voit la pièce d'or dans ta main fermée. « Celle de Firmine, dit Maclou. Ne la dépense pas aux Joncs : ici, on la reconnaîtrait. »" },
    ],
    choices: [{ back: "II_hub" }] },
});
// ==================================================================== the morning after: companions and ashes
Object.assign(P, {
  IIT_aube_gildas: { act: "II", title: "Frère Gildas et les brûlés", place: "joncs", with: "gildas",
    text: [
      "Frère Gildas a installé les blessés sur la galerie la plus large, sur des nattes de jonc. Il passe de l'un à l'autre avec un pot de graisse de mouton et des bandes de lin, et il parle à chacun à voix basse, un mot, pas davantage. Les brûlés se calment sous ses mains.",
      { if: { has: "joncs:brules" }, text: "Au bout de la galerie, les deux morts sont sous la voile de barque. Gildas s'arrête devant eux plus longtemps que devant les autres. La galerie {{echo#iit_gildas_echo|craque doucement sous le poids des nattes|rend la voix de Gildas, cette nuit, très basse : « Encore une, Seigneur. Encore une que je n'ai pas su garder »}}.",
        else: "La galerie {{echo#iit_gildas_echo_b|craque doucement sous le poids des nattes|rend la voix de Gildas, cette nuit, très basse, penché sur un enfant brûlé : « Pas celui-là, Seigneur. Prends-moi d'abord, j'ai plus de dettes »}}." },
      "« Ils guériront, dit Gildas sans lever la tête. Presque tous. Le feu marque, mais il marque surtout ceux qui ont regardé. » Il essuie ses mains sur sa bure. « Tu devrais dormir. Tu as regardé plus que les autres. »",
    ],
    choices: [{ back: "IIT_aube" }] },

  IIT_aube_salome: { act: "II", title: "Salomé au bout du ponton", place: "joncs", with: "salome",
    text: [
      "Tu t'assieds à côté de Salomé, au bout du ponton. Elle te tend sa gourde. C'est du rhum de Port-Vasier, noir et sucré, à cette heure du matin.",
      { if: { has: "salome:maiwenn" }, text: "« Trois ans, dit-elle. Trois ans que je me demande si j'avais mal fait le nœud. » Elle regarde l'eau. « {{oreille#iit_salome_aube|Maintenant je sais, et ça ne change rien|Maintenant je sais que ce n'était pas moi. Et je ne sais pas quoi faire de mes mains, sans cette faute à porter}}. »",
        else: "« Lothaire Brunel, dit-elle. Je l'ai vu de près, cette nuit, pour la première fois. » Elle regarde l'eau. « {{oreille#iit_salome_aube_b|Un homme ordinaire, avec des gants|Il avait un couteau de plongeur à la ceinture. Le même que celui de Maïwenn. Je l'aurais reconnu entre mille}}. »" },
      { if: { has: "iit:lothaire_epargne" }, text: "« Je l'ai laissé partir, dit-elle. Je ne sais pas encore si c'était pour Maïwenn ou pour moi. »" },
      "Elle se tait un moment. Une sterne pique dans l'eau devant vous, et remonte avec un éclat d'argent dans le bec.",
      { if: { has: "iie:maiwenn_enterree" }, text: "« Quand on aura fini, toi et moi, dit-elle, je retournerai à l'Ouïe. Je m'assiérai dans l'enclos des gardiens, à côté d'elle, et je lui raconterai la fin. » Elle reprend sa gourde. « Ne me laisse pas l'oublier. »" },
      { if: { has: "iie:salome_reste" }, text: "« J'ai promis à Maïwenn de redescendre le jour où Brunel serait mort, dit-elle. Brunel vit encore. » Elle reprend sa gourde. « Alors elle attendra. Elle a toujours su attendre, au fond. »" },
      { if: { not: { any: [{ has: "iie:maiwenn_enterree" }, { has: "iie:salome_reste" }] } }, text: "« Quand on aura fini, toi et moi, dit-elle, je retournerai aux Sourds. Je plongerai. Je la remonterai, s'il en reste quelque chose. Ou je lui dirai au revoir là-bas. » Elle reprend sa gourde. « Ne me laisse pas l'oublier. »" },
    ],
    choices: [{ back: "IIT_aube" }] },

  IIT_aube_tibere: { act: "II", title: "Tibère sur le ponton", place: "joncs", with: "tibere",
    text: [
      "Tibère est assis sur le ponton, une écuelle de poisson froid à côté de lui. Il a les mains bandées. Il te voit venir et se pousse pour te faire de la place, puis le regrette, ça se voit.",
      "« Ils savaient tout, dit-il. L'heure, le côté, la maison commune. Quelqu'un leur a bien parlé. » Il regarde la lagune. « {{oreille#iit_tibere_aube|Un pêcheur payé, sans doute, il y en a toujours un|Moi. Dix ducats pour une ligne. J'ai vu brûler ce que j'avais vendu, et j'ai porté des seaux pour me laver les mains}}. »",
    ],
    choices: [
      { label: "« C'est toi qui leur as parlé, Tibère. »", hide: { not: { voile: "iit_tibere_aube" } }, fx: { flag: ["tibere:espion", "tibere:aveu"], ep: ["perso", 600] }, to: "IIT_aube_tibere_aveu" },
      { label: "Le laisser à ses pensées", back: "IIT_aube" },
    ] },

  IIT_aube_tibere_aveu: { act: "II", title: "Dix ducats", place: "joncs", with: "tibere",
    text: [
      "Tibère avoue sans détour. Il pose son écuelle à côté de lui, très doucement, comme une chose fragile.",
      "« Depuis Salvèze, dit-il. Cinq ducats la semaine pour dire où tu vas, qui tu vois, ce que tu trouves. Dix pour une date. Brunel paie bien, et il paie à l'heure. Je me disais que je ne lui donnais que ce qu'il aurait su autrement. » Il regarde ses mains bandées. « Ce matin, je ne me le dis plus. »",
      "« Je peux partir. Ou je peux rester, et lui écrire ce que tu voudras qu'il lise. Il continue de me payer. Il croit que je suis à lui. C'est un outil, ça. Un outil sale, mais un outil. »",
    ],
    choices: [
      { label: "« Reste. Et désormais, c'est moi qui dicte tes lettres. »", fx: { flag: "tibere:double", conf: { tibere: 10 } }, back: "IIT_aube" },
      { label: "« Va-t'en, Tibère. Retourne à ta fille, si elle veut de toi. »", fx: { flag: "tibere:parti", leave: "tibere", conf: { tibere: -10 } }, back: "IIT_aube" },
    ] },

  IIT_cendres: { act: "II", title: "Ce que le feu a laissé", place: "joncs",
    text: [
      { if: { has: "joncs:brules" }, text: "Les femmes fouillent les cendres de la rangée des dentellières à mains nues, à marée basse, en marchant dans l'eau noire jusqu'aux chevilles. Elles remontent des fuseaux calcinés, des épingles, une marmite, un carreau à moitié brûlé dont la dentelle pend en lambeaux roussis.",
        else: "Dans la maison commune sans toit, les femmes trient ce que l'eau et la fumée ont abîmé. Les carreaux de dentelle s'alignent sur un banc, noircis sur les bords. On décolle les épingles une à une, on lave la suie à l'eau douce." },
      "Une dentellière te tend un lambeau de dentelle ancienne, jauni, que le feu a épargné par miracle, parce qu'il était roulé dans un pot de grès. Elle a oublié comment le lire, dit-elle. Seule Mère Ancolie le sait encore. Les motifs disent : *{{loupe#iit_dentelle_cendre|Fil blanc, fil noir, la marée monte et la marée descend|La septième page dort avec la couronne de sel, dans la salle où la reine a signé. Seule la plus basse mer de l'année en ouvre le chemin}}*.",
      "Plus loin, une gamine a trouvé dans la vase la cloche de bronze verdi de la maison commune, tombée avec le faîte. La cloche {{pie#iit_cloche|est fendue, perdue, bonne à fondre|est fendue au bord, mais le bronze est bon, et la fente se reprendra à la forge : elle sonnera de nouveau}}.",
    ],
    choices: [{ back: "IIT_aube" }] },
});
// ==================================================================== side quests: two more corners
Object.assign(P, {
  IIT_chap_fresque: { act: "II", title: "La femme couronnée", place: "joncs",
    text: [
      "Tu grattes la croûte de sel avec l'ongle. La fresque apparaît par plaques : une femme couronnée, debout dans une barque, un doigt posé sur les lèvres. Derrière elle, six barques plus petites, avec chacune une figure qui tient un rouleau contre sa poitrine. Les couleurs ont tourné au brun et au vert, sauf le bleu de la robe, qui est resté vif.",
      "Le bleu {{pie#iit_chap_bleu|est un bleu de peintre ordinaire, du pastel des Combes|est du lapis broyé, la couleur la plus chère qui soit : on a payé cette robe plus cher que toute la chapelle}}.",
      "Le mur {{echo#iit_chap_mur|suinte et goutte dans l'eau de la nef|rend un chant de femmes, très lointain, sur l'air de la berceuse des anguilles, avec d'autres mots : « Six pages aux six familles, et la septième à la mer »}}.",
    ],
    choices: [{ back: "IIT_chap_nef" }] },

  IIT_ang_ysore: { act: "II", title: "Ysoré au fumoir", place: "joncs",
    text: [
      "Le fumoir est une cabane basse, noire de suie à l'intérieur, où des centaines d'anguilles pendent à des perches au-dessus d'un feu de tourbe. Ysoré y travaille assise sur un billot, les manches retroussées, et elle te fait signe d'entrer sans s'arrêter de couper.",
      "« La berceuse ? dit-elle. C'est ma mère qui la chantait. Et sa mère avant. » Elle fend une anguille d'un seul geste, de la tête à la queue. « {{oreille#iit_ysore|C'est pour endormir les petits, rien de plus|Elle a deux paroles. Celle du dessus endort les enfants. Celle du dessous dit : va-t'en, Vieille, va-t'en au large, et la Vieille obéit. On la chante une fois tous les vingt ans, et on oublie d'en parler entre-temps}}. »",
      "Elle te tend un morceau d'anguille fumée, encore chaud, au bout de son couteau.",
    ],
    choices: [{ back: "IIT_anguilles" }] },
});
module.exports = {
  passages: P,
  extras: {
    people: {
      iit_quesnel: { name: "Quesnel", qui: "Le second de Lothaire Brunel, un homme des canaux.", aspect: { allure: "large, patient, à la gaffe", signe: "barque à proue noire" }, f: false, face: { age: "adulte", coif: "court", beard: "barbe", marks: ["cicatrice"] }, desc: "Le second de Lothaire Brunel : un homme des canaux, large, patient, payé au feuillet." },
      iit_sevrac: { name: "Le capitaine Sévrac", qui: "Capitaine de la tour des douanes du delta.", aspect: { allure: "fonctionnaire las", visage: "barbe grise taillée court", habits: "manteau de douane à revers rouges", signe: "bâton à encoches sous le bras" }, f: false, face: { age: "mur", coif: "court", beard: "barbe" }, desc: "Capitaine de la tour des douanes du delta. Un fonctionnaire las, qui compte les barques de sel avec un bâton à encoches et attend sa solde depuis trois mois." },
      iit_romee: { name: "Romée", qui: "La sonneuse des noyés.", aspect: { allure: "vieille femme dans une barque noire", habits: "capuchon de laine brune", signe: "mains énormes, courroie de cuir neuf" }, f: true, face: { age: "ancien", coif: "foulard" }, desc: "La sonneuse des noyés. Chaque dimanche depuis cinquante ans, elle rame jusqu'à la chapelle noyée de Notre-Dame-des-Joncs pour en sonner la cloche." },
      iit_ysore: { name: "Ysoré Huchet", qui: "La sœur de Cyprien Huchet, au fumoir des Joncs.", aspect: { allure: "vieille femme au couteau rapide", voix: "berceuses à mi-voix" }, f: true, face: { age: "ancien", coif: "chignon" }, desc: "La sœur de Cyprien Huchet. Elle vide les anguilles au fumoir des Joncs en chantant des berceuses à double fond." },
      iit_domitille: { name: "Gwenola", qui: "Une jeune dentellière des Joncs-Bas.", aspect: { allure: "dix-neuf ans, mains de souris", visage: "yeux rougis par la chandelle" }, f: true, face: { age: "jeune", coif: "tresses", hair: "brun" }, desc: "Une jeune dentellière des Joncs-Bas, qui brode des chansons à double fil." },
      iit_herle: { name: "Herlé", qui: "Un jeune douanier de la tour du chenal.", aspect: { allure: "vingt ans, regard de chien grondé", visage: "oreilles décollées, moustache naissante", habits: "tunique de douanier" }, f: false, face: { age: "jeune", coif: "court", beard: "moustache" }, desc: "Un jeune douanier de la tour du chenal, aux oreilles décollées. Il lit les nœuds que Gwenola lui a appris." },
      iit_maclou: { name: "Maclou", qui: "Un passeur des marais, qui connaît tous les chenaux.", aspect: { allure: "homme maigre, d'âge incertain", habits: "chapeau de paille sur la nuque", signe: "barque plate peinte en vert sale" }, f: false, face: { age: "mur", coif: "degarni", skin: "hale" }, desc: "Le passeur des fugitifs. Il connaît tous les chenaux du marais, et il fait passer ceux que la Saline et la Banque réclament." },
      iit_firmine: { name: "Firmine", qui: "Une saunière de Grisemotte, veuve, en fuite avec ses deux enfants.", aspect: { allure: "trente ans, deux enfants contre elle", signe: "mains rongées par le sel, couteau de saunière" }, f: true, face: { age: "adulte", coif: "foulard" }, desc: "Une saunière de Grisemotte, veuve, qui fuit avec ses deux enfants le maître saunier qui les réclame pour dette." },
    },
    items: {
      iit_lettre_marrel: { name: "La lettre de l'étui noir", kind: "document", form: "lettre", hand: "soignee", desc: "Une lettre cachetée d'un besant d'or sur cire noire, prise dans l'étui de Lothaire Brunel.",
        text: "*Monsieur Brunel, je vous ai fait remettre les fonds pour les hommes et pour la douane. {{loupe#iit_lettre_loupe|Rapportez-moi ce que vous trouverez, intact si possible|Le duc acceptera l'or de la Muette en paiement de la dette, à une condition, écrite de sa main : que la Charte des Hautes-Eaux cesse d'exister}}. Je vous fais confiance pour la discrétion, qui est votre métier. — C. M.*" },
      iit_col_lettre: { name: "Le col de Gwenola", kind: "document", form: "billet", desc: "Un col de dentelle blanche, avec des lettres prises dans le motif. On le lit à contre-jour.",
        text: "*{{loupe#iit_dent_col|Fil de lin, fil de soie, je pense à toi le soir, au bout de la passerelle, quand l'eau est haute|Ne viens pas avec eux à la grande marée. Mon père a loué sa barque à ta tour, et il a vu l'argent des gants gris. Si tu viens quand même, viens sans casque, et je saurai que tu es avec nous}}.*" },
      iit_tr_ciboire: { name: "Le ciboire des noyés", kind: "tresor", price: 160, desc: "Un ciboire d'argent à couvercle, trouvé sous l'autel de Notre-Dame-des-Joncs. Sur le pied, une couronne de sel et une bouche fermée d'un trait." },
      iit_tr_anneau: { name: "L'anneau des Fourcaud", kind: "tresor", price: 140, desc: "Un anneau de sceau en or rouge, aux trois fers de lance des Fourcaud, recraché par la Vieille des vasières dans la carcasse de *La Patiente de Sorne*." },
      iit_tr_col: { name: "Le col aux sept bouches", kind: "tresor", price: 120, desc: "Un col de dentelle très ancien, jaune comme l'ivoire, au motif de sept petites bouches fermées. On dit qu'il vient de Sorne." },
      iit_tr_muette: { name: "Un ducat à la Muette", kind: "tresor", price: 100, desc: "Une pièce d'or fin frappée d'une reine qui tient un doigt sur ses lèvres. La dernière frappe date de la nuit des Comptoirs." },
    },
    enemies: {
      iit_spadassin: { name: "Spadassin de Lothaire", look: "humain", pv: 26, att: 48, def: 20, dmg: 6, desc: "Gants gris, lame courte, payé à la semaine et doublé pour la nuit." },
      iit_douanier: { name: "Douanier du delta", look: "humain", pv: 22, att: 44, def: 18, dmg: 5, desc: "Manteau sombre, casque rond, hallebarde courte, trois mois de solde en retard." },
      iit_lothaire: { name: "Lothaire Brunel", look: "humain", pv: 72, att: 60, def: 24, dmg: 8, desc: "Une épée longue et fine, des gants gris, et un cornet d'os au cou : il entend venir les coups qu'on pense." },
      iit_quesnel: { name: "Quesnel", look: "humain", pv: 55, att: 54, def: 22, dmg: 7, desc: "Le second de Lothaire, dans la vase jusqu'aux cuisses, un couteau de pêcheur à la main." },
      iit_anguille_noire: { name: "Anguille noire", look: "serpent", pv: 16, att: 40, def: 15, dmg: 4, desc: "Les grosses anguilles qui nichent dans les épaves noyées. Elles mordent, et elles tiennent." },
      iit_vieille: { name: "La Vieille des vasières", look: "serpent", pv: 70, att: 52, def: 18, dmg: 8, desc: "Une anguille de cent ans, longue comme trois barques, la gueule large comme un tonneau." },
    },
    quests: [
      { id: "IIT_chapelle", act: "II", kind: "annexe", title: "La cloche des noyés", start: "IIT_chapelle", echo: "iit:chapelle" },
      { id: "IIT_anguilles", act: "II", kind: "annexe", title: "La Vieille des vasières", start: "IIT_anguilles", echo: ["iit:vieille_partie", "iit:vieille_morte", "iit:anguilles_ratee"] },
      { id: "IIT_dentelle", act: "II", kind: "annexe", title: "Le col de Gwenola", start: "IIT_dentelle", echo: "iit:dentelle" },
      { id: "IIT_passeur", act: "II", kind: "annexe", title: "Le passeur des fugitifs", start: "IIT_passeur", echo: "iit:passeur" },
    ],
    clues: {
      iit_b_ordre: { rev: "B", text: "Corisande Marrel a ordonné à Lothaire Brunel de brûler les feuillets qui parlent des titres, et de lui porter ceux qui parlent du chemin." },
      iit_b_titres: { rev: "B", text: "Loi des terres vacantes : un village abandonné un an et un jour retourne à la République, qui le vend au plus offrant. La Banque compte racheter ainsi les Hautes-Eaux brûlées." },
      iit_b_lettre: { rev: "B", text: "Le duc d'Aveline acceptera l'or de la Muette en paiement de la dette, à condition que la Charte des Hautes-Eaux cesse d'exister." },
      iit_r_noms: { rev: "R", text: "Le Registre nomme, maison par maison, ceux qui tenaient la reine pendant qu'on lui coupait la langue : Marrel en tête, Delisle juste après." },
      iit_r_dalle: { rev: "R", text: "Dans la chapelle noyée, Aymeric Vasse a lu à six familles ce que la reine avait dit ; chaque famille a juré de garder une page jusqu'à la Grande Basse." },
      iit_r_dentelle: { rev: "R", text: "La septième page dort avec la couronne de sel, dans la salle où la reine a signé ; seule la plus basse mer de l'année en ouvre le chemin." },
    },
    veils: {
      iit_lothaire_ordre: { fx: { clue: "iit_b_ordre" } },
      iit_lettre_loupe: { fx: { clue: "iit_b_lettre", ep: ["perso", 400] } },
      iit_r_noms: { fx: { clue: "iit_r_noms", ep: ["perso", 400] } },
      iit_chap_dalle: { fx: { clue: "iit_r_dalle", ep: ["perso", 400] } },
      iit_dentelle_cendre: { fx: { clue: "iit_r_dentelle", ep: ["perso", 400] } },
      iit_serment_un: { fx: { ep: ["perso", 300] } },
      iit_serment_trois: { fx: { ep: ["perso", 300] } },
      iit_ang_morsure: { fx: { ep: ["perso", 200] } },
      iit_maclou: { fx: { conf: { lison: 2 }, ep: ["perso", 200] } },
      iit_tibere_rosalie: { fx: { conf: { tibere: 3 } } },
      iit_alerte_tibere: { fx: { ep: ["perso", 200] } },
      iit_ancolie_lison: { fx: { conf: { lison: 5 } } },
      iit_gildas_echo: { fx: { ep: ["perso", 300] } },
      iit_salome_aube: { fx: { conf: { salome: 5 } } },
      iit_cloche: { fx: { fac: { hautes: 3 } } },
    },
    achievements: {
      iit_marais: { title: "Les gens du marais", desc: "Sonner la cloche des noyés, éloigner ou vaincre la Vieille, porter le col de Gwenola et passer la chaîne avec Maclou.",
        if: { all: [{ has: "iit:chapelle" }, { has: "iit:anguilles" }, { has: "iit:dentelle" }, { has: "iit:passeur" }] } },
      iit_rien_perdu: { title: "Pas une page", desc: "Traverser la nuit de la tempête sans laisser un feuillet à Lothaire Brunel, ni un toit aux flammes.",
        if: { all: [{ has: "iit:feuillet_garde" }, { has: "joncs:sauves" }] } },
    },
  },
};
