// Act II · the northern company, chapter 1, "La montée aux Combes": the road up the crest, the tracks of something far
// bigger than a Glaneur, and the camp of the Corbeau, where the clan has changed since Corbe left. Corbe leads ("tu");
// the others appear by name when they walk with her.
var N = { act: "II", noLead: true };
function P(o) { return Object.assign({}, N, o); }
module.exports = {
  II_N_depart: P({ title: "Vers le nord", place: "collines",
    text: [
      "La route du nord quitte la plaine au premier village et grimpe tout de suite, raide, entre des châtaigniers, puis des pins, puis plus rien. Tu marches devant. Tu as toujours marché devant.",
      { with: "enfant", text: "L'enfant de Sauvelune marche juste derrière toi. Il regarde les Combes, au loin, comme on regarde une maison." },
      { with: "ysolde", text: "La chevalière ferme la marche, la main jamais loin de son épée. Elle a gratté les armes de Brenne de son bouclier, au couteau, pendant la nuit." },
      { with: "pie", text: "Le voleur de Pallanche se plaint du raidillon depuis la première heure. Il n'a jamais vu une montagne. Il a peur, et il le cache en parlant." },
      { with: "hylas", text: "Le vieil aveugle marche à ton bras dans les passages difficiles. Il ne se plaint pas. Il compte ses pas, à voix basse." },
      { with: "rodric", text: "Rodric porte le sac le plus lourd sans qu'on le lui demande. Il chante, en corvannais, des chansons de marche dont il ne traduit pas les paroles." },
      { with: "linette", text: "Linette suit son frère d'un pas exact, en robe grise, sans regarder le paysage." },
    ],
    choices: [{ label: "Prendre la crête", travel: "r_ii_nord" }] }),

  II_N_bergers: P({ title: "La cabane vide", place: null,
    text: [
      "La cabane des bergers, au-dessus de la vallée de la Sauve. Tu t'y es arrêtée en descendant, il y a moins d'une semaine. On t'y a donné du lait.",
      "La pâture est blanche, d'un bout à l'autre. La cabane est ouverte. Il y a du lait tourné dans un seau, un fromage sous un linge, un manteau sur un clou, un couteau sur la table. Les chiens sont là, maigres, qui gardent un troupeau qui n'a plus de berger. Ils grognent quand vous approchez, puis ils vous suivent.",
    ],
    choices: [
      { label: "Ouvrir l'enclos et laisser les bêtes descendre vers la vallée", fx: { flag: "nord:betes_libres", ep: ["perso", 400] }, to: "@route" },
      { label: "Prendre le fromage et le manteau, et repartir", fx: { food: 2 }, to: "@route" },
    ] }),

  II_N_traces: P({ title: "Les grandes traces", place: null,
    fx: { flag: "nord:grandes_traces", questSeen: "II_N_geant" },
    text: [
      "À mi-chemin, sur le fil de la crête, il y a des traces dans la neige. Des pas. Tu connais les pas des Glaneurs : longs, plats, qui ne s'enfoncent pas. Ceux-là s'enfoncent. Chacun est grand comme une barque. Entre deux pas, il y a la longueur de quatre hommes couchés.",
      "Ils viennent du col de l'Ourse et y retournent. Ils sont passés plusieurs fois.",
      { with: "pie", text: "Pie s'assied dans une des empreintes. Il y tient en entier, les genoux sous le menton. Il ne fait pas de plaisanterie." },
      { with: "ysolde", text: "Ysolde mesure une empreinte avec son épée. Puis elle la mesure une deuxième fois." },
    ],
    choices: [{ label: "Reprendre la route, plus vite", back: "@route" }] }),

  II_N_arrivee: P({ title: "Le silence du camp", place: null,
    text: [
      "Tu entends le camp avant de le voir, d'habitude : les chiens, les tambours, les enfants, les corbeaux. Aujourd'hui, depuis la dernière crête, tu n'entends rien.",
      "Les tentes sont là. La fumée monte. Les gens sont dehors, assis devant les tentes, au soleil, dans la neige. Ils ne parlent pas. Les corbeaux sont sur les claies à viande, immobiles.",
    ],
    choices: [{ label: "Descendre au camp", to: "@route" }] }),

  II_N_camp: P({ title: "Le camp du Corbeau", place: "corbeau", hub: true,
    fx: { meet: "hrodna" },
    text: [
      { first: true, text: "Ils lèvent la tête quand tu passes entre les tentes. Certains te reconnaissent. Beaucoup ne te reconnaissent pas." },
      { if: { all: [{ not: { seen: "II_N_camp" } }, { has: "corbe:voie=rite" }] }, text: "Une femme se lève et recule en te voyant, la main sur la bouche. On t'a vue entrer dans la neige au col de l'Ourse. On ne t'a pas vue en revenir. Pour eux, la Bouche est partie, et ce qui marche devant eux n'a pas de nom." },
      { if: { all: [{ not: { seen: "II_N_camp" } }, { not: { has: "corbe:voie=rite" } }] }, text: "Un homme crache par terre devant toi. Tu es partie la veille du rite. Le clan a attendu sa Bouche au col jusqu'au soir, avec les tambours. Elle n'est pas venue." },
      { if: { all: [{ not: { seen: "II_N_camp" } }, { has: "clan:colere" }] }, text: "Sur ta tente, le trait noir est toujours là. Quelqu'un l'a repassé." },
      "Au centre du camp, la tente de Hrodna. Devant, sur la peau de renne des offrandes, des bandes d'écorce peintes, des dizaines. Plus qu'il n'y a de gens au clan.",
    ],
    choices: [
      { label: "La tente de Hrodna", to: "II_N_hrodna", hide: { seen: "II_N_hrodna" } },
      { label: "La tente de ta mère", to: "II_N_askel", hide: { seen: "II_N_askel" } },
      { label: "Ylva", to: "II_N_ylva", hide: { any: [{ seen: "II_N_ylva" }, { not: { any: [{ has: "ylva:sauvee" }, { has: "ylva:perdue" }] } }] } },
      { label: "Les anciens, qui regardent l'enfant de Sauvelune", hide: { any: [{ seen: "II_N_anciens" }, { not: { present: "enfant" } }] }, to: "II_N_anciens" },
      { label: "Le cercle des guerriers, autour de la chevalière", hide: { any: [{ seen: "II_N_guerriers" }, { not: { present: "ysolde" } }] }, to: "II_N_guerriers" },
      { label: "Le feu des enfants, où le voleur s'est assis", hide: { any: [{ seen: "II_N_enfants" }, { not: { present: "pie" } }] }, to: "II_N_enfants" },
      { label: "La canne de l'aveugle, que réclame un vieux du clan", hide: { any: [{ seen: "II_N_canne" }, { not: { present: "hylas" } }] }, to: "II_N_canne" },
      { label: "Le vieux Torgal, sous son auvent, qui s'arrête toujours au même endroit", hide: { seen: "II_Q_torgal" }, to: "II_Q_torgal" },
      { label: "Une tente au bord du camp, où un nouveau-né pleure", hide: { seen: "II_Q_nouveau_ne" }, to: "II_Q_nouveau_ne" },
      { label: "Les traîneaux, sur le tarn gelé", hide: { seen: "II_k_course" }, to: "II_k_course" },
      { label: "La vieille Gunnhild, qui raconte aux enfants", hide: { seen: "II_k_conteuse" }, to: "II_k_conteuse" },
      { label: "Le cercle de lutte, où un grand roux regarde Rodric", hide: { any: [{ seen: "II_N_lutte" }, { not: { present: "rodric" } }] }, to: "II_N_lutte" },
      { label: "Linette, entourée par les enfants du clan", hide: { any: [{ seen: "II_N_signes" }, { not: { present: "linette" } }] }, to: "II_N_signes" },
      { label: "Les chasseurs qui rentrent, les mains vides", hide: { seen: "II_N_chasseurs" }, to: "II_N_chasseurs" },
      { label: "Le feu du soir", if: { all: [{ seen: "II_N_hrodna" }, { seen: "II_N_askel" }] }, why: "Pas avant d'avoir vu Hrodna et ta mère.", to: "II_N_feu", big: true },
    ] }),

  II_N_hrodna: P({ title: "La Bouche", place: "corbeau",
    fx: { questSeen: "II_N_rite" },
    text: [
      "Hrodna est assise au fond de sa tente, le visage peint en blanc, du front au menton, sans un signe. Elle te regarde entrer. Elle sourit, d'un sourire calme que tu ne lui as jamais vu.",
      "« Je n'ai plus de nom, dit-elle. Je l'ai donné, la deuxième nuit, quand la Mère est revenue. Puisque sa Bouche ne venait pas, il fallait quelqu'un pour lui parler. » Elle pose la main à plat sur la neige qui couvre le sol de la tente. « Elle ne me répond pas. Elle ne parle qu'à ceux qui ont un nom à donner. Toi, tu en as encore un. »",
      "« Le col de l'Ourse s'ouvre, Corbe. Chaque nuit un peu plus. Ce qui passe par là devient plus grand. Ou tu vas au col avec ton nom, et tu le fermes, ou tu l'ouvres. Mais tu ne peux plus rester entre les deux. »",
    ],
    choices: [
      { label: "« Je n'irai pas au col. Pas comme ça. »", fx: { flag: "nord:refuse_hrodna", ep: ["perso", 500] }, to: "II_N_camp" },
      { label: "« J'irai. Quand je saurai ce que je ferme, ou ce que j'ouvre. »", fx: { flag: "nord:promet_hrodna", conf: { corbe: 5 }, ep: ["perso", 500] }, to: "II_N_camp" },
    ] }),

  II_N_askel: P({ title: "Askel", place: "corbeau",
    fx: { meet: "askel", questSeen: "II_N_chants" },
    text: [
      "Ta mère coud. Une autre robe blanche. Elle ne lève pas les yeux. « Tu es revenue », dit-elle, et c'est un simple constat.",
      "Tu t'assieds en face d'elle. Longtemps. Puis elle pose son aiguille. « L'aïeule ne chantait pas tout, dit-elle. Les trois vers qu'elle t'a appris, ce sont les derniers d'un chant plus long. Le reste, elle l'avait gravé dans la grotte des Corbeaux, au-dessus du lac noir, pour que personne ne le chante par hasard. J'y suis montée une fois. Je n'ai pas su lire. »",
      "Elle reprend son aiguille. « Personne ne sait lire, ici. C'est ce dont on nous a appris à être fiers. »",
    ],
    choices: [
      { label: "« Montre-moi le chemin. »", fx: { flag: "nord:grotte_connue" }, to: "II_N_camp" },
      { label: "Lui demander pour qui est la robe", to: "II_N_askel_robe" },
    ] }),

  II_N_askel_robe: P({ title: "La robe", place: "corbeau",
    text: ["« Pour moi », dit-elle. Et elle mord le fil."],
    choices: [{ label: "« Montre-moi le chemin de la grotte. »", fx: { flag: "nord:grotte_connue" }, to: "II_N_camp" }] }),

  II_N_ylva: P({ title: "Ylva", place: "corbeau",
    text: [
      { if: { has: "ylva:sauvee" }, text: "Ylva joue seule au bord de la neige. Elle chante en jouant, un air que tu reconnais au bout de trois notes : les trois vers. Personne ne les lui a appris. Elle chante juste. Elle s'arrête en te voyant, et te demande, très poliment, qui tu es." },
      { if: { has: "ylva:perdue" }, text: "La mère d'Ylva est assise devant sa tente, le visage peint en blanc, sans un signe. Elle a donné son nom, la deuxième nuit, pour aller rejoindre sa fille. Elle sourit. Elle t'offre du lait." },
    ],
    choices: [{ back: "II_N_camp" }] }),

  II_N_anciens: P({ title: "Les anciens", place: "corbeau",
    fx: { flag: "nord:anciens_enfant" },
    text: [
      "Trois vieilles femmes, assises sur des peaux, regardent l'enfant de Sauvelune depuis que vous êtes arrivés. Quand il passe devant elles, la plus vieille se lève, à grand-peine, et vient lui prendre le visage dans ses mains, comme Hylas fait pour lire.",
      "Elle dit un mot. Un seul, dans la langue que le clan ne parle plus qu'aux morts. Puis elle se rassoit, et les deux autres se mettent à pleurer.",
      "Quand tu leur demandes ce que veut dire le mot, elles font semblant de ne pas comprendre la question.",
    ],
    choices: [{ back: "II_N_camp" }] }),

  II_N_guerriers: P({ title: "La chevalière", place: "corbeau",
    text: [
      "Les guerriers du clan ont fait cercle autour d'Ysolde. Ils ont reconnu la cotte, la façon de se tenir, l'épée longue. Une femme d'armes des villes, aux Combes. Le plus jeune, Haskel, a tiré son couteau.",
      "Ysolde ne tire pas son épée. Elle te regarde.",
    ],
    choices: [
      { label: "Dire au clan qu'elle est sous ta tente, et donc sous ta protection", test: { dom: "social", label: "Autorité", help: [{ if: { has: "nord:promet_hrodna" }, v: 15 }, { if: { has: "clan:colere" }, v: -15 }] },
        win: { fx: { flag: "nord:ysolde_protegee", conf: { ysolde: 10 }, ep: ["perso", 600] }, to: "II_N_guerriers_ok" },
        lose: { to: "II_N_guerriers_duel" } },
      { label: "Laisser Ysolde régler ça elle-même", to: "II_N_guerriers_duel" },
    ] }),

  II_N_guerriers_ok: P({ title: "Sous ta tente", place: "corbeau",
    text: ["Haskel range son couteau. Les autres s'écartent. Ils ne la regardent pas moins. Ysolde passe au milieu d'eux sans se presser et vient s'asseoir près de toi. « Merci », dit-elle, très bas. C'est la première fois qu'elle te dit quelque chose qui n'est pas un ordre."],
    choices: [{ back: "II_N_camp" }] }),

  II_N_guerriers_duel: P({ title: "Haskel", place: "corbeau",
    text: [
      "Ysolde ôte son baudrier, pose l'épée dans la neige, et ouvre les mains. Haskel se jette sur elle. Elle le reçoit, le fait passer par-dessus sa hanche, et il se retrouve sur le dos, dans la neige, la main de la chevalière posée à plat sur sa poitrine. Elle ne serre pas. Elle attend.",
      "Le cercle se défait en riant. Haskel aussi finit par rire. Le soir, il lui apporte de la viande.",
    ],
    choices: [{ fx: { flag: "nord:ysolde_respectee", conf: { ysolde: 5 } }, back: "II_N_camp" }] }),

  II_N_enfants: P({ title: "Le feu des enfants", place: "corbeau",
    text: [
      "Pie est assis au feu des enfants du clan. Il leur fait des tours : une pièce qui disparaît, une bague qui passe d'une main à l'autre, un caillou qui sort d'une oreille. Les enfants ne rient pas. Ils regardent.",
      "Puis une fillette tend la main, prend la pièce, et la fait disparaître à son tour, mieux que lui. Elle dit : « Encore. » Pie lui en apprend un autre. Puis un autre.",
      "Quand tu reviens, une heure plus tard, ils sont douze autour de lui, et il leur apprend à crocheter une serrure de coffre avec une arête de poisson.",
    ],
    choices: [{ fx: { flag: "nord:pie_enfants", conf: { pie: 5 } }, back: "II_N_camp" }] }),

  II_N_canne: P({ title: "La canne", place: "corbeau",
    text: [
      "Un vieux du clan s'est planté devant Hylas et montre du doigt la canne d'ébène, la plume et la clé d'argent gravées sur le pommeau. Il dit, en mauvais esquarrois : « Ça. Brûle. Ici. » Les gens du Corbeau brûlent ce qui vient des registres.",
      "Hylas tient sa canne à deux mains. Il ne voit pas l'homme. Il l'entend respirer.",
    ],
    choices: [
      { label: "Dire à Hylas de la donner. On ne discute pas avec le feu, ici", fx: { flag: "nord:canne_brulee", drop: "canne" }, to: "II_N_canne_feu" },
      { label: "Expliquer au vieux que c'est la canne d'un aveugle, et rien d'autre", test: { dom: "social", label: "Parole" },
        win: { fx: { flag: "nord:canne_gardee", ep: ["perso", 500] }, to: "II_N_camp" }, lose: { fx: { flag: "nord:canne_brulee", drop: "canne" }, to: "II_N_canne_feu" } },
    ] }),

  II_N_canne_feu: P({ title: "Le feu", place: "corbeau",
    text: ["Hylas tend la canne. Le vieux la jette au feu. L'ébène brûle lentement, avec une odeur de musc. Hylas reste debout à côté du feu jusqu'à ce que le pommeau d'argent tombe dans la braise. Il le ramasse, brûlant, et le met dans sa poche. Puis il demande ton bras."],
    choices: [{ back: "II_N_camp" }] }),

  // the fire: end of chapter 1
  II_N_feu: P({ backName: "le feu du camp", takes: "evening", title: "Le feu du soir", place: "corbeau",
    text: [
      "Le soir, le clan allume un feu au centre du camp, comme toujours. Personne ne chante. Vous êtes assis un peu à l'écart, sur une peau, à partager une viande trop dure.",
      { if: { has: "nord:grotte_connue" }, text: "Demain, la grotte des Corbeaux, au-dessus du lac noir. Une journée de marche." },
      "Au nord, au-dessus du col de l'Ourse, le ciel a une lueur blanche, qui n'est pas la lune.",
    ],
    choices: [
      { label: "Parler avec l'enfant de Sauvelune", with: "enfant", once: true, to: "II_N_feu_enfant" },
      { label: "Parler avec Ysolde", with: "ysolde", once: true, to: "II_N_feu_ysolde" },
      { label: "Parler avec Pie", with: "pie", once: true, to: "II_N_feu_pie" },
      { label: "Parler avec Hylas", with: "hylas", once: true, to: "II_N_feu_hylas" },
      { label: "Dormir", fx: { flag: "ch2:nord:1", resume: "II_N2_aube" }, to: "C2_carrefour" },
    ] }),

  II_N_feu_enfant: P({ title: "Le mot", place: "corbeau",
    text: [
      { after: "nord:anciens_enfant", text: "Il te demande ce qu'a dit la vieille femme. Tu lui dis que tu ne sais pas. C'est vrai, à moitié : tu connais le mot. C'est un mot du chant des morts. Tu ne sais pas ce qu'il veut dire. Tu sais seulement à quel endroit du chant il vient : juste avant le nom de celui qu'on appelle." },
      { before: "nord:anciens_enfant", text: "Il te demande ce que le clan chante, les soirs où il chante. Tu lui dis : le chant des morts, et que tu n'en sais que trois vers." },
      "Il hoche la tête. Il regarde le col. « Chez moi, dit-il, on chantait une comptine. *Neige d'été, neige d'oubli.* » Il la chante. Elle a le même air que les trois vers.",
    ],
    choices: [{ fx: { conf: { enfant: 5 } }, back: "II_N_feu" }] }),

  II_N_feu_ysolde: P({ title: "Les remparts", place: "corbeau",
    text: [
      "Ysolde regarde le feu. Elle dit : « Chez moi, au fort, les sentinelles mangent leur pain sur le chemin de ronde, à l'aube. Il sent le levain et le fer mouillé. » Elle se tait. « Je ne sais pas pourquoi je te dis ça. J'ai peur de l'oublier, je crois. Je le dis à quelqu'un pour qu'il le garde. »",
      "Tu le gardes. Tu ne le lui dis pas.",
    ],
    choices: [{ fx: { conf: { ysolde: 5 } }, back: "II_N_feu" }] }),

  II_N_feu_pie: P({ title: "La fillette", place: "corbeau",
    text: [
      { after: "nord:pie_enfants", text: "Pie a l'air content de lui. « Elle s'appelle Brune, la petite. Celle de la pièce. » Il fait tourner une pièce entre ses doigts. « Elle a huit ans. Elle sait déjà tout faire. Elle n'a peur de rien. » La pièce disparaît. « Ma sœur était comme ça. »" },
      { before: "nord:pie_enfants", text: "Pie fait tourner une pièce entre ses doigts. « Il y a une petite, au feu des enfants, qui n'a pas quitté mes mains des yeux depuis qu'on est là. Huit ans, peut-être. Elle ne rit pas. Elle n'a peur de rien. » La pièce disparaît. « Ma sœur était comme ça. »" },
      { if: { has: "pie:choix=linette" }, text: "Il regarde Linette, qui dort, assise, le dos droit, comme on dort au scriptorium. Il s'en tient là." },
    ],
    choices: [{ fx: { conf: { pie: 5 } }, back: "II_N_feu" }] }),

  II_N_feu_hylas: P({ title: "Ce qu'on brûle", place: "corbeau",
    text: [
      "« Ton clan brûle les registres, dit Hylas. La Chancellerie brûle ce qui n'est pas dans les registres. » Il tend les mains vers le feu. « Je me suis toujours demandé lequel des deux avait commencé. »",
      "Tu lui dis que le clan ne brûle pas les gens. Il sourit. « Pas encore. »",
    ],
    choices: [{ fx: { conf: { hylas: 5 } }, back: "II_N_feu" }] }),
};
