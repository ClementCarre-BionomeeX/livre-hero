// L'Île Folle-Aiguille · side story « Le dernier » (owes its question to The Last of the Mohicans: what do we owe to the
// last of a kind, and who has the right to carry its body home as proof?). Act IV, on the Table: at the edge of a pool,
// every evening, comes a great grey flightless bird, old, heavy, alone. The professor watches it for two days and
// understands: there is no other. No nest, no tracks, no call answered. He wants its skin and its skeleton for the
// Academy that laughed at him twenty years ago. The child lets him shoot (wu:tir), frightens the bird away before he can
// (wu:effraie), or persuades him to draw it and leave it (wu:dessin). Wired in XT_haut.
module.exports = {
  passages: {
    WU_mare: { act: "IV", title: "Le dernier", place: "table", ambiance: "nature",
      text: [
        "Elle vient à l'heure où le soleil touche les arbres écailleux de l'ouest, toujours à la même heure, toujours par le même sentier, en se dandinant. Un oiseau gris, énorme, haut comme toi, rond comme une barrique, avec des moignons d'ailes ridicules, des pattes jaunes et épaisses comme celles d'un canard qui aurait trop mangé, et un bec crochu, massif, qui lui donne un air d'évêque en colère. Elle boit à la mare, longuement, en levant la tête après chaque gorgée pour laisser l'eau descendre. Puis elle reste là, immobile, à regarder le soleil couchant, jusqu'à la nuit.",
        "Le professeur l'a vue le premier soir. Il a failli s'évanouir. Il l'a regardée toute la nuit, à la lune, couché dans la fougère, en prenant des notes, sans dormir. Le deuxième jour, il a cherché. Il a cherché toute la journée, avec toi, sur un quart de lieue autour de la mare. Il a cherché les nids, les traces, les plumes, les crottes, les œufs, un autre oiseau. Il n'a rien trouvé. Il n'y a que les traces de celle-là, qui vont de la mare à un fourré, et du fourré à la mare.",
        "Le deuxième soir, quand elle a fini de boire, elle lève la tête et pousse un cri. Un cri grave, long, roucoulant, plein d'une douceur grotesque, qui roule sur la mousse et va se perdre dans la forêt. Puis elle attend, la tête penchée. Rien ne répond. Elle crie encore. Rien. Elle attend longtemps. Puis elle rentre dans son fourré, en se dandinant, comme une vieille femme qui revient de la messe.",
        "Le professeur est blanc. Il dit, à voix très basse : « Elle appelle. Elle appelle tous les soirs. Il n'y a personne. C'est la dernière. »",
      ],
      choices: [{ label: "Attendre ce qu'il va faire", to: "WU_fusil" }] },
    WU_fusil: { act: "IV", title: "Le dernier", place: "table", ambiance: "nuit",
      text: [
        "Il nettoie son fusil, à la lueur du feu, pendant une heure, avec un soin d'horloger. Il parle en même temps, sans te regarder, d'une voix égale. Il dit qu'il a soixante ans. Qu'il a passé vingt ans à se faire rire au nez par des hommes qui n'ont jamais quitté leur fauteuil. Qu'un dessin, ces gens-là le déchirent ; qu'un récit, ils le traitent de fable ; qu'une plume, ils la disent de poule teinte. Mais qu'une peau, montée, debout, dans une vitrine du Muséum de Morlenc, avec un squelette à côté, ils ne pourront rien contre.",
        "Il dit que l'oiseau mourra de toute façon, bientôt, seul, de vieillesse, dans son fourré, et que les fourmis le mangeront, et qu'il n'en restera rien, et que le monde ne saura jamais qu'il a existé. Il dit qu'il ne la tuera pas pour lui. Il la tuera pour elle, pour qu'elle existe dans la mémoire des hommes, ce qui est la seule éternité qu'il connaisse. Il dit cela avec une ferveur sincère. Puis il dit, plus bas, qu'il sait aussi, bien sûr, qu'il la tuera pour lui. Il n'est pas sot.",
        "Il charge le fusil. Il dit qu'il tirera demain, au coucher du soleil, quand elle sera à la mare, de dos, en train de crier. Une seule balle, derrière la tête. Elle ne sentira rien. Il te demande de ne pas regarder, si tu préfères. Il te dit bonne nuit. Il dort, ou il fait semblant. Toi, tu restes éveillé{e}, dans la fougère, à regarder le fourré, où rien ne bouge.",
      ],
      choices: [
        { label: "Le laisser tirer, et l'aider à porter le corps", fx: { flag: "wu:tir" }, to: "WU_tir" },
        { label: "Aller au fourré avant l'aube, et chasser l'oiseau loin de la mare", fx: { flag: "wu:effraie" }, to: "WU_effraie" },
        { label: "Le réveiller, et lui demander de la dessiner, et de la laisser vivre", fx: { flag: "wu:dessin" }, to: "WU_dessin" },
      ] },
    WU_tir: { act: "IV", title: "Le dernier", place: "table", ambiance: "nature",
      text: [
        "Le lendemain, au coucher du soleil, elle vient à la mare, boit, lève la tête, et crie. Le coup de feu part au milieu du cri. Elle tombe sur le côté, d'un coup, sans un battement de ses ailes ridicules, et le cri s'arrête net, et le silence qui le remplace est plus grand que tous les silences que tu as entendus, plus grand que celui de la Table, plus grand que celui de la nef. Les oiseaux de la forêt se taisent. Puis ils reprennent.",
        "Le professeur s'approche. Il s'agenouille. Il pose la main sur la plume grise, très doucement, comme on touche un front. Il pleure. Puis il sort son couteau, et il commence à la dépouiller, avec une précision de chirurgien, en t'expliquant chaque geste, d'une voix qui tremble à peine. Ça prend toute la nuit. Tu tiens la lanterne. Au matin, il y a une peau roulée dans du sel, un sac d'os, et un petit tas de choses qui ne servent à rien, que tu enterres au pied de la mare.",
        "Il porte la peau lui-même, tout le reste de l'expédition, dans son sac, sur son dos, comme une relique. Il ne laisse personne y toucher. Le soir, au bord du feu, il la sort, quelquefois, et la caresse, et ne dit rien. Tu l'entends, une nuit, pousser à voix basse, pour lui seul, le cri grave et roucoulant. Il l'imite très bien. Personne ne répond.",
      ],
      choices: [{ label: "Revenir vers la forêt d'en haut", fx: { quest: "WU" }, back: "XT_haut" }] },
    WU_effraie: { act: "IV", title: "Le dernier", place: "table", ambiance: "nuit",
      text: [
        "Tu te lèves avant l'aube, sans bruit. Le professeur ronfle. Tu vas au fourré, avec une branche, et tu frappes les feuillages en criant, et l'oiseau sort, énorme, terrifié, en sifflant, et tu le poursuis, et tu le chasses devant toi, loin, à travers la mousse, vers l'est, en courant, jusqu'à ce qu'il disparaisse entre les arbres écailleux, de son trot dandinant, en jetant derrière lui des regards d'évêque outragé.",
        "Le professeur l'attend toute la soirée à la mare, le fusil sur les genoux. Elle ne vient pas. Il l'attend le lendemain. Elle ne vient pas. Il comprend. Il te regarde, longtemps, au bord du feu, sans colère, avec une tristesse si profonde que tu préférerais la colère. Il dit : « Tu l'as chassée de la seule eau qu'elle connaissait, à son âge. » Il dit : « Tu as peut-être raison. » Il ne te reparle plus de l'oiseau.",
        "Le dernier jour, en redescendant vers la falaise, tu entends, très loin, à l'est, dans la forêt, un cri grave et roucoulant. Puis rien. Le professeur l'a entendu aussi. Il s'arrête. Il tend l'oreille, comme toi. Le cri ne revient pas. Il reprend sa marche sans un mot. Le soir, il écrit dans son carnet une page entière, que tu n'as pas le droit de lire, et qu'il arrache ensuite, et qu'il brûle.",
      ],
      choices: [{ label: "Revenir vers la forêt d'en haut", fx: { quest: "WU" }, back: "XT_haut" }] },
    WU_dessin: { act: "IV", title: "Le dernier", place: "table", ambiance: "nuit",
      text: [
        "Tu le réveilles. Tu lui dis ce que tu penses, maladroitement, à voix basse, à côté du feu. Qu'on peut la dessiner. La décrire. La mesurer, même, si elle se laisse approcher, comme les vaches de la Pointe. Que si l'Académie ne croit pas les dessins, c'est l'Académie qui a tort, et pas l'oiseau, et qu'on ne tue pas la dernière de quelque chose pour avoir raison contre des hommes en fauteuil. Il t'écoute, assis, son fusil sur les genoux. Puis il dit : « Tu parles comme un enfant. » Puis : « C'est assez rare, à mon âge, d'entendre parler un enfant. »",
        "Il la dessine. Trois jours. Il la dessine de face, de profil, en train de boire, en train de crier. Il compte ses plumes, il mesure ses traces, il note l'heure exacte de ses visites et la durée de chaque cri. Le troisième soir, elle s'approche de lui, à cinq pas, avec la curiosité tranquille des bêtes qui n'ont jamais vu d'homme, et elle le regarde dessiner, la tête penchée. Il ne bouge pas. Il pleure en dessinant. Ses larmes tombent sur le papier et font des taches, qu'il entoure, ensuite, d'un trait de crayon, en notant en marge : *larmes de l'observateur, sans valeur scientifique*.",
        "L'Académie rira, sans doute, il le sait. Il te le dit, en rangeant ses dessins dans une toile cirée. Il dit qu'il a soixante ans, qu'il a été ridicule toute sa vie, et qu'il peut bien l'être encore un peu, pour une vieille dame grise qui crie tous les soirs au bord d'une mare. Le dernier soir, quand elle crie, il lui répond. Il imite son cri, très bien, grave et roucoulant. Elle tourne la tête vers lui, longtemps, immobile. Puis elle rentre dans son fourré. Tu ne sauras jamais si c'était une bonne chose de lui avoir répondu.",
      ],
      choices: [{ label: "Revenir vers la forêt d'en haut", fx: { quest: "WU" }, back: "XT_haut" }] },
  },
  extras: {
    quests: [
      { id: "WU", act: "IV", kind: "annexe", title: "Le dernier", start: "WU_mare", doit: "mohicans", echo: ["wu:tir", "wu:effraie", "wu:dessin"] },
    ],
  },
};
