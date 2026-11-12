// Act II · side quests. North: the lineage-singer of the Corbeau (camp), the frozen herb garden of the moutier.
// South, in Vasselin: the actors who lost their play, the lighthouse that forgets to burn, and the house of phials
// (the grey trade in forgetting, which the ferryman of the road may have pointed at).
var N = { act: "II", noLead: true };
function P(o) { return Object.assign({}, N, o); }
module.exports = {
  // ------------------------------------------------------------ nord · les lignées du clan
  II_Q_torgal: P({ title: "Le chanteur des lignées", place: "corbeau",
    fx: { questSeen: "II_Q_lignees" },
    text: [
      "Au bord du camp, sous un auvent de peau, le vieux Torgal est assis devant un tambour plat. C'est lui qui chante les lignées, au rite de printemps : qui est né de qui, depuis la première tente, quarante générations, sans une erreur, d'une traite, toute une nuit. Tu l'as entendu chaque printemps de ta vie. Tu t'endormais toujours vers la vingtième génération.",
      "Il frappe le tambour. Il chante trois noms. Il s'arrête. Il recommence. Il chante trois noms. Il s'arrête au même endroit.",
      "« Après Haldis, dit-il sans te regarder, il y a un trou. Je sais qu'il y a quelqu'un. Je sais qu'il y a une femme, et que d'elle viennent trente générations. Je ne sais plus son nom. Si je ne la chante pas, les trente ne tiennent à rien. »",
    ],
    choices: [
      { label: "« Où est-ce qu'on peut le retrouver ? »", to: "II_Q_torgal2" },
      { label: "Le laisser à son tambour", refuse: true, to: "II_N_camp" },
    ] }),
  II_Q_torgal2: P({ title: "L'aire", place: "corbeau",
    text: [
      "« Nulle part, dit Torgal. On ne l'écrit pas. On le chante. » Il frappe le tambour, une fois. « Mais les corbeaux. Le vieux Grand-Bec, sur l'aire de la falaise. Il a cent ans, il était déjà vieux quand j'étais petit. Chaque printemps il se perche au-dessus du rite et il écoute la nuit entière. Les corbeaux retiennent tout ce qu'on chante. C'est pour ça qu'ils sont noirs. »",
      "La falaise est à une heure de marche, au-dessus du camp, à pic sur la neige. Dans le clan, on n'y monte que pour les rites. Et pour les bêtises.",
      { if: { has: "corbe:corbeau_soigne" }, text: "Le corbeau sur ton épaule pousse un cri bref, et regarde vers la falaise." },
    ],
    choices: [{ label: "Monter à l'aire", test: { dom: "nature", label: "La falaise", help: [{ if: { item: "corde" }, v: 15 }, { if: { has: "corbe:corbeau_soigne" }, v: 15 }, { if: { present: "pie" }, v: 5 }] },
      win: { fx: { ep: ["seance", 600] }, to: "II_Q_aire" }, lose: { fx: { pv: -3 }, to: "II_Q_aire_dure" } }] }),
  II_Q_aire_dure: P({ title: "Les ongles", place: "corbeau",
    text: ["Tu montes. Tu glisses. Tu remontes, avec les ongles, le ventre contre la pierre, comme quand tu avais neuf ans et que tu avais parié une peau de lièvre. Tu arrives en haut en saignant des deux mains. La peau de lièvre, à l'époque, tu l'avais gagnée."],
    choices: [{ label: "L'aire", to: "II_Q_aire" }] }),
  II_Q_aire: P({ title: "Grand-Bec", place: "corbeau",
    text: [
      "L'aire est un amas de branches, d'os et de laine volée, large comme une table de banquet. Grand-Bec est là. Il est énorme, pelé, gris aux plumes du cou, et il te regarde arriver avec un mépris très ancien.",
      "Et il n'est pas seul. Sur le rebord, de l'autre côté de l'aire, un Glaneur. Un petit, accroupi, immobile, qui attend. Il attend que le vieux corbeau meure, pour manger tout ce qu'il a entendu en cent ans.",
    ],
    choices: [
      { label: "Chasser le Glaneur", to: "II_Q_aire_combat" },
      { label: "Ne pas bouger, et chanter à Grand-Bec les générations que tu connais", test: { dom: "magie", label: "Le chant", help: [{ if: { has: "corbe:corbeau_soigne" }, v: 10 }, { if: { present: "hylas" }, v: 10 }] },
        win: { fx: { flag: "nord:lignee=chant", ep: ["perso", 1200] }, to: "II_Q_aire_chant" }, lose: { to: "II_Q_aire_combat" } },
    ] }),
  II_Q_aire_combat: P({ title: "Le rebord", place: "corbeau",
    combat: { title: "Le Glaneur de l'aire", enemies: ["glaneur_petit", "glaneur_petit"], terrain: "nature", range: "contact",
      flee: { dom: "nature", label: "Redescendre, et laisser le vieux corbeau à son sort", to: "II_Q_aire_fuite" },
      win: { fx: { flag: "nord:lignee=combat", ep: ["seance", 900] }, to: "II_Q_aire_nom" }, lose: { fx: { pv: -3 }, to: "II_Q_aire_fuite" } },
    text: ["Tu te lèves. Le Glaneur se lève aussi, et un deuxième sort de sous les branches, où il était couché. Grand-Bec ne bouge pas. Il a vu pire."],
    choices: [] }),
  II_Q_aire_chant: P({ title: "Les générations", place: "corbeau",
    text: [
      "Tu chantes. Mal, et sans tambour, avec des trous. Tu chantes ce que tu as retenu à force de t'endormir dessus : les premières tentes, les grands noms, les cousins. Grand-Bec écoute, la tête de travers.",
      "Quand tu arrives à Haldis, tu t'arrêtes. Le silence dure. Le Glaneur, sur le rebord, se penche, avide.",
      "Et Grand-Bec ouvre le bec et dit, d'une voix de vieille femme enrouée, une voix qui n'est pas la sienne, qu'il a entendue au rite il y a peut-être cent ans : « Sigrun. »",
      "Le Glaneur se jette sur le mot. Trop tard : tu l'as. Il repart bredouille, en clopinant sur la neige, et ne se retourne pas.",
    ],
    choices: [{ label: "Redescendre au camp", to: "II_Q_torgal_fin" }] }),
  II_Q_aire_nom: P({ title: "Sigrun", place: "corbeau",
    text: [
      "Le dernier Glaneur tombe de l'aire en neige poudreuse. Grand-Bec te regarde un long moment. Puis il ouvre le bec, et il dit, d'une voix de vieille femme enrouée, une voix qu'il a entendue au rite il y a peut-être cent ans : « Sigrun. »",
      "Rien d'autre. Il se remet à lisser ses plumes, comme si tu n'existais plus.",
    ],
    choices: [{ label: "Redescendre au camp", to: "II_Q_torgal_fin" }] }),
  II_Q_aire_fuite: P({ title: "En bas", place: "corbeau",
    text: ["Tu redescends. Tu n'as pas le nom. Torgal hoche la tête quand tu le lui dis, sans reproche. Il recommence à chanter, trois noms, et il s'arrête au même endroit. Tu l'entendras s'arrêter là, chaque soir, jusqu'à ce que tu quittes le camp."],
    choices: [{ fx: { quest: "II_Q_lignees" }, back: "II_N_camp" }] }),
  II_Q_torgal_fin: P({ title: "Après Haldis", place: "corbeau",
    text: [
      "Torgal t'écoute dire le nom. Il ne te remercie pas : ça ne se fait pas, au clan, entre gens de la même lignée. Il frappe le tambour, et il chante, d'une traite. Haldis. Sigrun. Et les trente générations qui suivent, qui tiennent de nouveau à quelque chose.",
      "Des gens sortent des tentes pour écouter. Il n'est pas l'heure du rite. Ils écoutent quand même. Quand il arrive à ton nom, tout au bout, il ne s'arrête pas, et personne ne crache.",
    ],
    choices: [{ fx: { quest: "II_Q_lignees", flag: "nord:lignee", conf: { corbe: 10 } }, back: "II_N_camp" }] }),

  // ------------------------------------------------------------ nord · le jardin du frère Herbier
  II_Q_jardin: P({ title: "Le jardin des simples", place: "moutier",
    fx: { questSeen: "II_Q_jardin" },
    text: [
      "Derrière la chapelle, le jardin des simples : des carrés de buis, des étiquettes de bois peintes, et tout est blanc. Au milieu, dans un bloc de glace, un vieux moine à genoux, un sécateur à la main, le nez sur une touffe d'herbe.",
      "Dans la poche de son tablier, qui dépasse de la glace, un carnet. Tu le dégages avec ta dague. La dernière page, d'une écriture tremblée : « Veille-neige. Fleurit sous la neige, au-dessus des éboulis, côté levant. Infusée, garde la mémoire une nuit entière, même contre le sommeil. Le Prieur dit que c'est une superstition. Le Prieur oublie de plus en plus. J'en cueille demain. »",
      "Il n'a pas eu de demain.",
    ],
    choices: [
      { label: "Monter aux éboulis chercher la veille-neige", to: "II_Q_jardin_eboulis" },
      { label: "Remettre le carnet dans sa poche", refuse: true, to: "II_N3_cloitre" },
    ] }),
  II_Q_jardin_eboulis: P({ title: "Les éboulis", place: "moutier",
    text: [
      "Côté levant, au-dessus des éboulis, une pente de neige blanche qui ne fond pas. Tu fouilles avec les mains, pendant une heure, jusqu'à ne plus sentir tes doigts. Il n'y a rien. Puis, sous un surplomb, une touffe de petites fleurs grises, presque transparentes, qui poussent à l'envers, la corolle vers le bas, vers la terre.",
      "Elles ont un parfum de pain chaud. Ici, ça n'a aucun sens.",
    ],
    choices: [{ label: "Les cueillir comme le frère l'aurait fait", test: { dom: "nature", label: "La veille-neige", help: [{ if: { present: "ombeline" }, v: 20 }, { if: { present: "hylas" }, v: 10 }, { if: { has: "passe:alpage" }, v: 10 }] },
      win: { fx: { item: ["tisane_veille", "tisane_veille"], flag: "nord:veille_neige", ep: ["perso", 900] }, to: "II_Q_jardin_ok" },
      lose: { fx: { item: "tisane_veille", ep: ["perso", 300] }, to: "II_Q_jardin_rate" } }] }),
  II_Q_jardin_ok: P({ title: "Deux poignées", place: "moutier",
    text: [
      "Tu coupes les tiges au ras, sans arracher la racine, comme ta mère coupait l'herbe de rite. Deux poignées. Assez pour deux nuits.",
      "En redescendant, tu poses une fleur sur le bloc de glace du frère, à hauteur de son nez. C'est idiot. Tu le fais quand même.",
    ],
    choices: [{ fx: { quest: "II_Q_jardin" }, back: "II_N3_cloitre" }] }),
  II_Q_jardin_rate: P({ title: "Une poignée", place: "moutier",
    text: ["Les fleurs se défont au premier contact, en poussière grise. Tu en sauves une poignée, une seule, en coupant plus doucement. Assez pour une nuit. Le reste s'en va dans le vent, avec son odeur de pain."],
    choices: [{ fx: { quest: "II_Q_jardin" }, back: "II_N3_cloitre" }] }),

  // ------------------------------------------------------------ sud · la troupe
  II_Q_troupe: P({ title: "Les Gonfaloniers", place: "vasselin",
    fx: { questSeen: "II_Q_troupe" },
    text: [
      "Sur la place aux Herbes, la troupe des Gonfaloniers a monté son tréteau, comme chaque été. Tu les connais : tu as écrit pour eux, quand tu avais seize ans et pas encore de charge à la cour. Une farce, et une tragédie dont personne ne se souvient, avec raison.",
      "Ils devaient jouer ce soir La Reine des Marais, leur grand succès. Le directeur, maître Gilles, te reconnaît et se jette sur toi. « Lisandre. Le ciel t'envoie. Ou le diable, je m'en moque. Dame Orane ne sait plus son rôle. Pas un mot. Elle l'a joué deux cents fois. Elle est assise dans le chariot, elle tient le texte, elle le lit comme s'il était écrit dans une langue étrangère. »",
    ],
    choices: [
      { label: "Aller voir dame Orane", to: "II_Q_troupe_orane" },
      { label: "Leur souhaiter bonne chance", refuse: true, to: "II_S_vasselin" },
    ] }),
  II_Q_troupe_orane: P({ title: "Dame Orane", place: "vasselin",
    text: [
      "Dame Orane a cinquante ans, une voix qui portait jusqu'au fond des halles, et les mains posées sur le texte, à plat, comme sur un mort.",
      "« Je n'ai pas oublié, dit-elle. Je l'ai vendu. » Elle sourit. « La Reine des Marais perd son fils au quatrième acte. Moi aussi, j'ai perdu le mien, au printemps. Chaque soir, au quatrième acte, je le perdais une deuxième fois, et le public pleurait, et on me payait. Alors j'ai trouvé un homme, au port, qui achète ce genre de choses. Je lui ai vendu le rôle. Je croyais que je ne vendais que le rôle. »",
      "Elle se souvient de son fils, dit-elle. Mais plus de son visage. Seulement qu'elle l'a eu.",
    ],
    choices: [
      { label: "Jouer la Reine à sa place, ce soir", to: "II_Q_troupe_scene" },
      { label: "Lui demander où trouver l'homme du port", fx: { flag: "sud:fioles_piste" }, to: "II_Q_troupe_port" },
    ] }),
  II_Q_troupe_port: P({ title: "L'homme du port", place: "vasselin",
    text: [
      "« Il a une boutique de verrerie, quai des Cordiers. Il souffle des fioles. Il est très doux. Il ne marchande pas. » Elle te regarde. « N'y allez pas pour moi. Ce qui est vendu est vendu. »",
      "Elle se remet à lire le texte, sans rien comprendre.",
    ],
    choices: [
      { label: "Jouer la Reine à sa place, ce soir", to: "II_Q_troupe_scene" },
      { fx: { quest: "II_Q_troupe" }, back: "II_S_vasselin" },
    ] }),
  II_Q_troupe_scene: P({ takes: "evening", title: "La Reine des Marais", place: "vasselin",
    text: [
      "Tu apprends le rôle dans l'après-midi, dans le chariot, avec dame Orane qui te donne la réplique en lisant. Le soir, la place est pleine. Tu mets la couronne de fer-blanc, la robe verte. Tu entres.",
      "Les trois premiers actes passent comme un rêve. Le public rit où il faut. Au quatrième acte, le fils meurt.",
      { with: "pie", text: "Dans la foule, au premier rang, Pie a l'air de quelqu'un qui n'est jamais allé au théâtre de sa vie, et c'est le cas." },
    ],
    choices: [{ label: "Jouer le quatrième acte", test: { dom: "social", label: "La scène", help: [{ if: { not: { has: "lisandre:disgrace" } }, v: 5 }, { if: { has: "sud:vendange" }, v: 10 }, { if: { present: "hylas" }, v: 5 }] },
      win: { fx: { flag: "sud:theatre=joue", gold: 8, ep: ["perso", 1200] }, to: "II_Q_troupe_ok" },
      lose: { fx: { flag: "sud:theatre=rate", gold: 3, ep: ["perso", 400] }, to: "II_Q_troupe_rate" } }] }),
  II_Q_troupe_ok: P({ title: "Le quatrième acte", place: "vasselin",
    text: [
      "Tu ne joues pas la Reine. Tu joues dame Orane, que tu as regardée toute la journée, ses mains à plat sur le texte. La place se tait. Quelque part, une femme sanglote. Quand le rideau tombe, personne n'applaudit d'abord, puis tout le monde à la fois.",
      "Dans la coulisse, dame Orane t'attend. Elle a pleuré aussi. « C'était ça, dit-elle. C'était exactement ça. » Elle ne se souvient toujours pas du visage. Mais elle sait de nouveau ce que ça faisait, de le perdre, et elle te remercie de le lui avoir rendu, ce qui est la chose la plus étrange qu'on t'ait jamais dite.",
    ],
    choices: [{ fx: { quest: "II_Q_troupe", conf: { lisandre: 10 } }, back: "II_S_vasselin" }] }),
  II_Q_troupe_rate: P({ title: "Une belle voix", place: "vasselin",
    text: ["Tu joues bien. Tu as une belle voix, de beaux gestes, et au quatrième acte, tu pleures avec élégance. Le public applaudit poliment. Maître Gilles te paie, te remercie, et te dit, très gentiment, que tu devrais t'en tenir aux chansons."],
    choices: [{ fx: { quest: "II_Q_troupe" }, back: "II_S_vasselin" }] }),

  // ------------------------------------------------------------ sud · le phare
  II_Q_phare: P({ title: "Le phare de la Pointe", place: "vasselin",
    fx: { questSeen: "II_Q_phare" },
    text: [
      "À la halle, on ne parle que de ça : trois navires à la côte en dix jours, sur les brisants de la Pointe. Le phare ne s'allume plus tous les soirs. Un soir sur deux, puis un sur trois. Le gardien jure qu'il l'allume. Les capitaines jurent que non.",
      "Et sur la grève, au matin, il y a des gens qui ramassent ce que la mer apporte. Ils ne sont pas tristes du tout.",
    ],
    choices: [
      { label: "Aller passer la nuit au phare", to: "II_Q_phare_nuit" },
      { label: "Laisser ça aux gens du port", refuse: true, to: "II_S_vasselin" },
    ] }),
  II_Q_phare_nuit: P({ takes: "evening", title: "Le gardien", place: "vasselin",
    text: [
      "Le gardien s'appelle Yvon. Il a soixante ans, une barbe jaunie par la fumée des lampes, et il monte les cent douze marches à la tombée du jour avec une cruche d'huile. Il allume. Il redescend. Il s'assied dans sa cuisine, devant son feu.",
      "Une heure plus tard, il se lève, il fronce les sourcils, et il dit : « Il faut que j'aille allumer. » Il monte. La lanterne brûle. Il la regarde, sans comprendre. Il l'éteint, pour la rallumer. Et il oublie de la rallumer.",
      "Le mal ne vient pas de lui. Tu le comprends en regardant par la fenêtre de la lanterne : sur la grève, en bas, des hommes avec des falots attendent, et regardent le phare s'éteindre.",
    ],
    choices: [
      { label: "Rester en haut toute la nuit pour garder la lanterne allumée", fx: { flag: "sud:phare=veille" }, to: "II_Q_phare_naufrageurs" },
      { label: "Descendre à la grève parler aux hommes aux falots", to: "II_Q_phare_greve" },
    ] }),
  II_Q_phare_greve: P({ title: "Les falots", place: "vasselin",
    text: [
      "Ils sont six, avec des gaffes et des haches. Leur chef est un homme poli, en bon manteau. « Le vieux oublie, dit-il. On n'y est pour rien. On a juste remarqué qu'il oubliait mieux quand on lui faisait boire un petit quelque chose, le soir. Une goutte. Ça se vend au port, ça ne coûte rien. »",
      "Il sourit. « La mer donne. On ramasse. Vous n'êtes pas d'ici, madame. »",
    ],
    choices: [{ label: "« Si. »", to: "II_Q_phare_naufrageurs" }] }),
  II_Q_phare_naufrageurs: P({ title: "La grève", place: "vasselin",
    combat: { title: "Les naufrageurs de la Pointe", enemies: ["brigand", "brigand", "brigand"], terrain: "nature", range: "contact",
      flee: { dom: "nature", label: "Remonter au phare et barricader la porte", to: "II_Q_phare_barricade" },
      win: { fx: { flag: "sud:phare=sauve", ep: ["seance", 1200] }, to: "II_Q_phare_aube" }, lose: { fx: { pv: -3 }, to: "II_Q_phare_barricade" } },
    text: [
      "Ils montent vers le phare, à six, quand ils voient que la lanterne brûle toujours. Au large, une voile. Un navire qui cherche le port.",
      { with: "rodric", text: "Rodric se met dans l'encadrement de la porte du phare, sa hache à deux mains, et ne dit rien. Il ne passera pas grand monde." },
      { with: "ysolde", text: "Ysolde dégaine. « Six, dit-elle. Ce n'est pas assez. »" },
    ],
    choices: [] }),
  II_Q_phare_barricade: P({ takes: "morning", title: "Jusqu'à l'aube", place: "vasselin",
    text: [
      "Vous tenez l'escalier, en haut, avec la lanterne dans le dos. Ils cognent à la porte une partie de la nuit, puis ils se lassent : la voile est passée, elle a trouvé le chenal. Ils repartent avec leurs falots.",
      "Au matin, le gardien te trouve endormie contre la lanterne, qui brûle encore. Il ne se souvient pas de toi. Il te remercie quand même.",
    ],
    choices: [{ fx: { quest: "II_Q_phare", flag: "sud:phare=tenu" }, back: "II_S_vasselin" }] }),
  II_Q_phare_aube: P({ title: "La goutte", place: "vasselin",
    text: [
      "Sur le chef des naufrageurs, dans la poche de son bon manteau, une fiole vide, en verre fin, avec un bouchon de cire grise. Tu la portes à ton nez : elle ne sent rien. Absolument rien.",
      "Tu la donnes au capitaine du port, avec les six hommes ficelés. Il te remercie. Le soir même, le phare brûle jusqu'à l'aube, et Yvon, qui ne boit plus que de l'eau, n'oublie plus de monter.",
    ],
    choices: [{ fx: { quest: "II_Q_phare", flag: "sud:fioles_piste", conf: { lisandre: 5 } }, back: "II_S_vasselin" }] }),

  // ------------------------------------------------------------ sud · la maison des fioles
  II_Q_fioles: P({ title: "Quai des Cordiers", place: "vasselin",
    fx: { questSeen: "II_Q_fioles" },
    text: [
      "Quai des Cordiers, entre un marchand de voiles et une taverne, une petite boutique de verrerie. Des carafes, des verres à pied, des encriers, et, sur une étagère du fond, des fioles. Des centaines. Toutes pareilles, toutes vides, avec leur bouchon de cire grise.",
      "Le verrier est un homme rond, doux, qui souffle une bulle au bout de sa canne quand tu entres. Il ne s'arrête pas. « Je ne vends que du verre, madame. Ce que les gens mettent dedans, ce n'est pas mon affaire. »",
    ],
    choices: [
      { label: "Lui demander qui les remplit", test: { dom: "social", label: "Le verrier", help: [{ if: { present: "linette" }, v: 15 }, { if: { has: "sud:passeur_parle" }, v: 15 }, { if: { present: "pie" }, v: 10 }] },
        win: { to: "II_Q_fioles_aveu" }, lose: { to: "II_Q_fioles_nuit" } },
      { label: "Revenir la nuit, par l'arrière-cour", to: "II_Q_fioles_nuit" },
    ] }),
  II_Q_fioles_aveu: P({ title: "La cave", place: "vasselin",
    text: [
      "Le verrier pose sa canne. Il a l'air soulagé, comme les gens qui attendent depuis longtemps qu'on leur pose la question.",
      "« Il y a une femme, à la cave. Elle les remplit. Ce n'est pas une sorcière, c'est une greffière, une vraie, qui a la plume. Elle a été renvoyée de la tour, l'an dernier, pour avoir écrit une page de trop. Elle vend aux pauvres ce que la tour vend aux riches. Moins cher. Je lui souffle les fioles. Je ne descends jamais. »",
      "Il te montre une trappe, derrière le four.",
    ],
    choices: [{ label: "Descendre", to: "II_Q_fioles_cave" }] }),
  II_Q_fioles_nuit: P({ takes: "night", title: "L'arrière-cour", place: "vasselin",
    text: [
      "La nuit, l'arrière-cour est éclairée par une lucarne au ras du sol. Une cave. Devant la lucarne, deux hommes en gris, armés, qui jouent aux dés sur un tonneau et regardent toutes les ombres.",
    ],
    choices: [
      { label: "Les éviter", test: { dom: "discretion", label: "La cour", help: [{ if: { present: "pie" }, v: 20 }] }, win: { to: "II_Q_fioles_cave" }, lose: { to: "II_Q_fioles_combat" } },
      { label: "Les affronter", to: "II_Q_fioles_combat" },
    ] }),
  II_Q_fioles_combat: P({ title: "Les gris", place: "vasselin",
    combat: { title: "Les gardes de la cave", enemies: ["garde_noir", "brigand"], terrain: "ville", range: "contact",
      flee: { dom: "discretion", label: "Disparaître dans les ruelles du port", to: "II_Q_fioles_fuite" },
      win: { fx: { ep: ["seance", 900] }, to: "II_Q_fioles_cave" }, lose: { fx: { pv: -3 }, to: "II_Q_fioles_fuite" } },
    text: ["Les dés roulent par terre. Ils ne crient pas pour donner l'alarme. Ils ne veulent pas plus que toi qu'on vienne voir."],
    choices: [] }),
  II_Q_fioles_fuite: P({ takes: "morning", title: "Les ruelles", place: "vasselin",
    text: ["Tu t'enfuis par les ruelles du port, et quand tu reviens, le lendemain, la boutique est fermée, les volets cloués. Sur la porte, un écriteau : À LOUER. Le verrier est parti. La cave aussi, avec ce qu'il y avait dedans."],
    choices: [{ fx: { quest: "II_Q_fioles", flag: "sud:fioles=parties" }, back: "II_S_vasselin" }] }),
  II_Q_fioles_cave: P({ title: "La greffière", place: "vasselin",
    text: [
      "La cave est basse, chaude, propre. Une table, une lampe, un lutrin. Une femme de quarante ans, en robe grise de greffière, la plume à la main, écrit dans un petit livre noir. À côté d'elle, une file de fioles pleines : on dirait de l'eau, et ça ne reflète pas la lampe.",
      "Elle lève la tête. Elle n'a pas peur. « Vous venez acheter ou vous venez casser, dit-elle. Les deux arrivent. »",
      "« Je m'appelle Bertrade. J'étais à la tour. Je copiais les cessions. Un jour, j'en ai copié une de trop, et j'ai lu le nom qu'il y avait dedans, et c'était celui de ma sœur, et je ne me souvenais plus d'avoir eu une sœur. Alors je suis partie avec la plume. » Elle sourit. « Je vends l'oubli à ceux qui en ont besoin et qui n'ont pas les moyens de la tour. Une veuve. Un soldat qui revient. Une actrice. Je ne force personne. »",
    ],
    choices: [
      { label: "Briser les fioles", fx: { flag: "sud:fioles=brisees", ep: ["perso", 1200] }, to: "II_Q_fioles_brisees" },
      { label: "Lui demander de rendre ce qu'elle a pris à dame Orane", hide: { not: { seen: "II_Q_troupe_orane" } }, test: { dom: "social", label: "Bertrade", help: [{ if: { has: "sud:theatre=joue" }, v: 15 }, { if: { present: "hylas" }, v: 15 }] },
        win: { fx: { flag: ["sud:fioles=rendu", "sud:orane_rendue"], ep: ["perso", 1500] }, to: "II_Q_fioles_rendu" }, lose: { to: "II_Q_fioles_non" } },
      { label: "La laisser à son commerce, et prendre son livre noir", test: { dom: "discretion", label: "Le livre", help: [{ if: { present: "pie" }, v: 20 }] },
        win: { fx: { flag: "sud:fioles=livre", clue: "n_bertrade", ep: ["perso", 900] }, to: "II_Q_fioles_livre" }, lose: { to: "II_Q_fioles_non" } },
    ] }),
  II_Q_fioles_brisees: P({ title: "Le verre", place: "vasselin",
    text: [
      "Tu balaies la table d'un revers de bras. Les fioles éclatent sur les dalles. Ce qu'il y avait dedans ne coule pas : ça monte, comme une buée, et ça passe par la lucarne, et ça s'en va dans la ville, chercher qui ça peut.",
      "Bertrade regarde la buée s'en aller. « Vous croyez que c'est rendu, dit-elle. Ce n'est pas rendu. C'est lâché. Ça va tomber sur n'importe qui. Une femme, ce soir, va se mettre à pleurer un fils qu'elle n'a jamais eu. » Elle range sa plume. « Mais vous avez raison. Ça ne m'appartenait pas. »",
      "Elle part avant l'aube. Tu ne la revois pas.",
    ],
    choices: [{ fx: { quest: "II_Q_fioles" }, back: "II_S_vasselin" }] }),
  II_Q_fioles_rendu: P({ title: "La fiole d'Orane", place: "vasselin",
    text: [
      "Bertrade cherche longtemps sur l'étagère, en comparant les étiquettes à son livre. Elle te tend une fiole. « Je ne rends jamais, dit-elle. Mais elle, je me souviens d'elle. Elle a payé et elle a pleuré, et c'est rare, les gens qui pleurent en payant. »",
      "Tu portes la fiole à dame Orane, dans son chariot. Elle la débouche. Elle respire. Et elle pose la main sur sa bouche, et elle reste comme ça, très longtemps, à regarder quelque chose qui n'est pas dans le chariot.",
      "« Il avait les cheveux qui rebiquaient, dit-elle enfin. Là. Derrière. Je les mouillais le matin. Ça ne servait à rien. »",
    ],
    choices: [{ fx: { quest: "II_Q_fioles", conf: { lisandre: 10, hylas: 5 } }, back: "II_S_vasselin" }] }),
  II_Q_fioles_livre: P({ title: "Le livre noir", place: "vasselin",
    text: [
      "Pendant qu'elle te parle, une main passe derrière son dos et le petit livre noir change de table. Elle ne le remarque que quand vous êtes déjà sur l'escalier.",
      "Dans la ruelle, tu l'ouvres à la lampe. Des colonnes : un nom, une chose vendue, un prix. Et, à la dernière page, d'une autre main, plus serrée : « Remise mensuelle à M. Une fiole sur dix. »",
    ],
    choices: [{ fx: { quest: "II_Q_fioles" }, back: "II_S_vasselin" }] }),
  II_Q_fioles_non: P({ title: "Remontez", place: "vasselin",
    text: ["Bertrade secoue la tête. « Remontez, madame. Revenez quand vous aurez besoin de moi. Tout le monde revient. » Tu remontes. Le verrier, au-dessus, souffle une bulle sans te regarder. Le lendemain, la boutique est ouverte comme d'habitude."],
    choices: [{ fx: { quest: "II_Q_fioles", flag: "sud:fioles=laissees" }, back: "II_S_vasselin" }] }),

  // ------------------------------------------------------------ nord · la pêche au lac noir
  II_Q_peche: P({ title: "Le lac qui ne gèle pas", place: "lacnoir",
    fx: { questSeen: "II_Q_peche" },
    text: [
      "Le lac noir ne gèle jamais. Au clan, on dit que c'est parce qu'il est trop profond pour avoir froid. Les vieux y pêchaient, avant, des truites noires, grasses, qu'on ne mangeait qu'en hiver, parce qu'elles donnaient des rêves.",
      "Tu as une ligne de crin dans ton sac, et un hameçon d'os. L'eau est immobile, sans un reflet.",
    ],
    choices: [
      { label: "Pêcher jusqu'au soir", test: { dom: "nature", label: "Le lac noir", help: [{ if: { has: "passe:alpage" }, v: 10 }, { if: { present: "rodric" }, v: 5 }] },
        win: { fx: { food: 3, flag: "nord:truites", ep: ["perso", 500] }, to: "II_Q_peche_reve" }, lose: { fx: { food: 1 }, to: "II_Q_peche_rien" } },
      { label: "Laisser le lac tranquille", refuse: true, to: "II_N2_grotte" },
    ] }),
  II_Q_peche_reve: P({ takes: "morning", title: "Les truites noires", place: "lacnoir",
    text: [
      "Elles mordent au crépuscule, d'un coup, toutes ensemble, comme si on leur avait donné un signal. Tu en sors quatre, lourdes, noires du dos au ventre. Vous les faites griller sur des pierres, à l'entrée de la grotte.",
      "Cette nuit-là, tout le monde rêve. Tu rêves d'une roue de moulin qui tourne à l'envers, et d'eau qui remonte la rivière, et d'un enfant debout sur la roue, qui ne tombe pas. Au matin, chacun garde son rêve pour soi. Personne n'a envie de comparer.",
    ],
    choices: [{ fx: { quest: "II_Q_peche" }, back: "II_N2_grotte" }] }),
  II_Q_peche_rien: P({ takes: "night", title: "L'eau noire", place: "lacnoir",
    text: ["Rien ne mord. À la nuit, une seule truite, maigre, qui se décroche au bord et retombe dans l'eau sans faire de rond. Le lac se referme dessus comme un livre. Tu manges ton pain sec."],
    choices: [{ fx: { quest: "II_Q_peche" }, back: "II_N2_grotte" }] }),

  // ------------------------------------------------------------ nord · les cairns des Bouches
  II_Q_bouches: P({ title: "Les cairns des Bouches", place: "col",
    fx: { questSeen: "II_Q_bouches" },
    text: [
      "Derrière la grande pierre plate, en demi-cercle, des cairns. Un par Bouche, depuis la première. Tu les as vus enfant, de loin : on ne s'en approche pas. Il y en a vingt-trois.",
      "De près, tu vois ce qu'on ne t'avait jamais dit. Les cairns n'ont pas de nom. Pas un. Sur chaque pierre du sommet, il y a eu quelque chose de gravé, et quelqu'un l'a gratté, au silex, avec soin. Une Bouche donne son nom à la Mère. On ne le garde pas pour elle, même ici.",
      "Le vingt-troisième est celui de ta grand-mère. Elle s'appelait Aude. Tu le sais parce que ta mère te l'a dit une fois, tout bas, comme on dit une chose défendue.",
    ],
    choices: [
      { label: "Graver « Aude » sur la pierre du sommet", fx: { flag: "nord:bouches=aude", conf: { corbe: 5 }, ep: ["perso", 800] }, to: "II_Q_bouches_grave" },
      { label: "Laisser les cairns comme le clan les a voulus", fx: { flag: "nord:bouches=laisse" }, to: "II_Q_bouches_laisse" },
    ] }),
  II_Q_bouches_grave: P({ title: "Aude", place: "col",
    text: [
      "Tu graves avec la pointe de ton couteau. Pas des lettres : tu n'en connais aucune. Le signe d'Aude, que ta mère a tracé une fois devant toi, avec un bâton dans la cendre, avant de l'effacer du pied. Tu n'as jamais su pourquoi elle tenait tant à ce que tu le voies. Maintenant tu sais.",
      "Quand tu te relèves, un vieux du clan te regarde, de loin. Il ne dit rien. Il ne crache pas. Il s'en va. Le soir, en passant devant les cairns, tu vois qu'au pied du vingt-troisième, quelqu'un a posé une plume de corbeau.",
    ],
    choices: [{ fx: { quest: "II_Q_bouches" }, back: "II_N5_col" }] }),
  II_Q_bouches_laisse: P({ title: "Vingt-trois", place: "col",
    text: ["Tu poses la main sur le vingt-troisième cairn, une seconde. La pierre est froide. Ta grand-mère n'y a pas de nom, et c'est ce qu'elle a voulu, ou ce qu'on a voulu pour elle. Tu ne sauras jamais lequel. Tu retournes au feu."],
    choices: [{ fx: { quest: "II_Q_bouches" }, back: "II_N5_col" }] }),

  // ------------------------------------------------------------ sud · les écuries du tournoi
  II_Q_ecuries: P({ title: "Les écuries", place: "vasselin",
    fx: { questSeen: "II_Q_ecuries" },
    text: [
      "Des écuries du tournoi monte un hennissement, puis un autre, aigu, affolé. Un palefrenier sort en courant, revient avec un seau, ressort. Tu entres.",
      "Trois chevaux de bataille sont couchés dans la paille, les yeux blancs, l'écume aux lèvres. Ils ne sont pas malades. Ils ont peur. Ils ont peur de tout : de la paille, de la lanterne, de leur propre ombre, comme des poulains qui n'auraient jamais vu le monde.",
      "Ce sont les chevaux de trois chevaliers qui ont refusé, ce matin, de signer la liste de la Tour.",
    ],
    choices: [
      { label: "Fouiller les mangeoires", test: { dom: "savoir", label: "Les mangeoires", help: [{ if: { present: "ysolde" }, v: 15 }, { if: { present: "hylas" }, v: 10 }, { if: { present: "rodric" }, v: 10 }] },
        win: { fx: { flag: "sud3:ecuries", ep: ["perso", 900] }, to: "II_Q_ecuries_avoine" }, lose: { to: "II_Q_ecuries_rien" } },
      { back: "II_S3_soir" },
    ] }),
  II_Q_ecuries_avoine: P({ title: "L'avoine grise", place: "vasselin",
    text: [
      "Dans les trois mangeoires, au fond, sous l'avoine, une poudre grise, fine comme de la cendre. Elle ne sent rien. Absolument rien.",
      "Un cheval de guerre est un cheval qui a appris à ne pas avoir peur. On lui a pris ce qu'il avait appris. Demain, à la mêlée, ces trois chevaliers seront à pied, et la liste de la Tour aura trois noms de plus, ou trois chevaliers de moins.",
      { with: "ysolde", text: "Ysolde s'agenouille près du plus grand, un gris pommelé, et lui souffle dans les naseaux, longuement, comme on fait aux poulains. Il se calme un peu. « On peut leur réapprendre, dit-elle. Pas en une nuit. »" },
      "Tu vides les mangeoires, tu préviens les trois chevaliers. Demain, ils se battront sur des chevaux d'emprunt, et ils sauront contre qui.",
    ],
    choices: [{ fx: { quest: "II_Q_ecuries" }, back: "II_S3_soir" }] }),
  II_Q_ecuries_rien: P({ title: "La paille", place: "vasselin",
    text: ["Tu ne trouves rien. Le palefrenier dit que ça arrive, les chevaux qui deviennent fous la veille d'un tournoi. Il le dit trop vite. Tu ressors avec l'impression d'avoir regardé au mauvais endroit, au bon moment."],
    choices: [{ fx: { quest: "II_Q_ecuries" }, back: "II_S3_soir" }] }),
};
