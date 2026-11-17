// Le Douzième Coup · chapter 1 (act I, the Trois-Noyers, ninth day before the Grand Midi of 601, dawn). The first page
// gives each player a role (`role: "qui"`): the one who will pass the Gate (Line's apprentice, `role:passe`) or the one
// who stays and walks (a gleaner of the edge, `role:reste`). Each reads a prologue of their own; both meet at Line's
// table (B01, in bornes.js).
var P = {};

Object.assign(P, {
  D_seuil: { act: "I", title: "Les Trois-Noyers, neuf jours avant le Grand Midi", place: "troisnoyers",
    text: [
      "Le coq du père Lubin chante à quatre heures et demie, comme tous les matins. Il est le seul habitant des Trois-Noyers à n'avoir pas lu l'affiche.",
      "L'affiche est clouée depuis hier à la porte de l'église, sous le sablier d'or de la Régence : *Par ordre de Madame la Régente, gouvernant au nom de la reine endormie, le village des Trois-Noyers sera vidé de ses gens, de ses bêtes et de ses meubles avant le sixième jour qui précède le Grand Midi, la lisière de la Dormante se trouvant à moins de trois cents toises du clocher.* Le clerc qui l'a rédigée a une belle main et le sens de la mesure : il a compté les toises, il a oublié de dire où iraient les gens.",
      "Alors on charge. Dans la rue unique, entre les maisons de torchis, les charrettes attendent à la file, les bœufs soufflent dans le froid de l'aube, et l'on descend des greniers des choses qu'on n'avait pas vues depuis trente ans. Au bout de la rue, du côté du levant, il y a les prés. Au bout des prés, l'herbe change de couleur. Après, les alouettes se taisent ; c'est là.",
      "Deux personnes, ce matin, ne chargent aucune charrette. La première s'éveille dans le grenier de l'horlogère, au bruit de quarante horloges qui marchent du même pas. La seconde sort de la lisière avant le jour, un sac sur l'épaule, par un fossé que la Garde ne connaît pas. Avant la fin de la nuit prochaine, l'une des deux aura passé une porte, et l'autre aura commencé de marcher.",
      "Laquelle es-tu ?",
    ],
    choices: [
      { label: "Celle qui passera la porte : tu es en apprentissage chez Line, l'horlogère", role: "qui", option: "passe", fx: { flag: "role:passe" }, to: "K01j_grenier", big: true },
      { label: "Celle qui restera, et qui marchera : tu glanes dans la lisière", role: "qui", option: "reste", fx: { flag: "role:reste" }, to: "K01r_fosse", big: true },
    ] },
});

// ======================================================================== the apprentice's morning (the one who passes)
Object.assign(P, {
  K01j_grenier: { act: "I", title: "Le grenier aux quarante horloges", place: "troisnoyers",
    text: [
      "Tu n'as pas besoin d'ouvrir les yeux pour savoir l'heure. Sous ton plancher, dans la boutique, quarante horloges battent ensemble : les comtoises à gros ventre, les cartels, les pendules de voyage, le régulateur à poids qui donne le ton aux autres. Line dit qu'une horloge qui retarde est une horloge qui ment, et elle a horreur du mensonge chez les objets ; chez les gens, elle le tient pour inévitable.",
      "Tu couches ici depuis neuf ans. Elle t'a trouvé{e} à six ans sur la route de Vauxelles, le soir où l'on vidait ce village-là, assis{e} sur une borne avec une cuiller dans la main. Personne n'a su dire à qui tu étais. « À moi, donc », a dit Line, sur le ton dont elle dit : « Ce ressort est cassé. » Elle t'a appris à lire sur un almanach, à compter sur des rouages, et à te taire pendant qu'on règle un échappement.",
      { if: { has: "poche:bille" }, text: "Sous ton oreiller, ta main trouve la bille de verre bleu. Tu l'avais déjà, sur la borne de Vauxelles. C'est la seule chose au monde qui soit plus ancienne que ta mémoire." },
      { if: { has: "poche:ficelle" }, text: "À ton poignet, la ficelle à nœuds. Tu en as défait onze cet hiver. Il en reste un, le plus vieux, que tu as noué à sept ans : *savoir d'où tu viens*." },
      { if: { has: "poche:sifflet" }, text: "Le sifflet de sureau pend à son clou, au-dessus de ta paillasse. Tu l'as taillé le jour où Line t'a envoyé{e} seul{e} régler l'horloge du moulin, « pour que je t'entende si tu tombes dans le bief »." },
      "Les quarante horloges sonnent cinq heures, d'une seule voix. Dans le silence qui suit, tu entends tousser, en bas. Puis : « Descends. Aujourd'hui, je n'ai pas le temps de t'appeler deux fois. »",
    ],
    choices: [{ label: "Descendre à la boutique", to: "K01j_boutique" }] },
  K01j_boutique: { act: "I", title: "La boutique de Line", place: "troisnoyers", fx: { meet: "line" },
    text: [
      "La boutique a des volets clos et une seule chandelle, qui suffit : le cuivre de quarante balanciers la multiplie. Sur l'établi, tout est à sa place depuis que tu sais marcher : les brucelles par ordre de taille, les limes à pivot, le tour à archet, la boîte de laiton où dorment les rubis. Ce matin, il y a autre chose. Deux cahiers de papier gris, sans couverture, pas encore cousus ; une aiguille courbe ; et, sous un verre retourné, un sablier de poche dans une cage de laiton.",
      "Line est assise de travers sur son tabouret, sa loupe relevée sur le front. Elle a soixante-neuf ans, des mains qui ne tremblent que loin de l'établi, et des yeux gris qui te regardent toujours comme un mouvement à réviser. Elle tient un mouchoir roulé dans son poing.",
      "« Trois jours, dit-elle. Ils nous donnent trois jours pour déménager. On ne déménage pas quarante horloges en trois jours ; on n'en déménagera donc aucune, ce qui simplifie. » Elle pose la main à plat sur les deux cahiers. « Assieds-toi. Je vais te dire ce que nous faisons cette nuit, et tu m'écouteras jusqu'au bout, parce que j'ai mis soixante ans à préparer cette phrase. »",
    ],
    choices: [{ label: "T'asseoir, et écouter", to: "K01j_recit" }] },
  K01j_recit: { act: "I", title: "Soixante ans pour une phrase", place: "troisnoyers", backName: "l'établi de Line", hub: true,
    text: [
      { first: true, text: "« Je suis née à la ferme des Noyers. Tu la connais sous son autre nom : la Ferme-Vieille, de l'autre côté de la lisière, depuis ce printemps. J'avais neuf ans l'année du Grand Midi. Cette année-là, neuf jours avant la fête, quelqu'un est sorti de notre grange. Quelqu'un qui n'y était pas entré. »" },
      { first: true, text: "Elle te laisse le temps de trouver cela absurde. « Il y a dans cette grange, pris dans le mur du fond, un cadre de pierre plus vieux que la ferme et plus vieux que la route. Les Fondateurs ont planté leurs bornes en ligne droite jusqu'à la Tour ; la ligne part de cette pierre-là. Mon grand-père y accrochait ses faux. C'est une porte. Elle donne sur le dernier temps où le balancier de Méridane battait librement : neuf jours avant qu'il s'arrête, jour pour jour. »" },
      { first: true, text: "« Cette nuit, il y aura soixante ans, jour pour jour. Quelqu'un doit passer. J'ai fait le compte assez souvent pour savoir que ce n'est pas moi. » Elle te regarde par-dessus le mouchoir. « Pose tes questions. Dans l'ordre, s'il te plaît : j'ai horreur qu'on démonte par le milieu. »" },
      { again: true, text: "Line attend, la main sur les cahiers. Dehors, une charrette grince, s'arrête, repart." },
    ],
    choices: [
      { label: "« Qui est sorti de la grange ? »", to: "K01j_q_qui", hide: { seen: "K01j_q_qui" } },
      { label: "« Pourquoi passer ? Qu'est-ce qu'on irait faire là-bas ? »", to: "K01j_q_pourquoi", hide: { seen: "K01j_q_pourquoi" } },
      { label: "Montrer les deux cahiers gris", to: "K01j_q_cahiers", hide: { seen: "K01j_q_cahiers" } },
      { label: "« Vous toussez depuis l'hiver. »", to: "K01j_q_toux", hide: { seen: "K01j_q_toux" } },
      { label: "« Et on revient comment ? »", to: "K01j_q_retour", if: { seen: "K01j_q_pourquoi" }, why: "Tu ne sais pas encore ce qu'il s'agit de faire là-bas.", hide: { seen: "K01j_q_retour" } },
      { label: "Te lever : il y a une journée à faire", to: "K01j_taches", if: { all: [{ seen: "K01j_q_pourquoi" }, { seen: "K01j_q_cahiers" }] }, why: "Line n'a pas fini.", big: true },
    ] },
  K01j_q_qui: { act: "I", title: "Celui de la grange", place: "troisnoyers",
    text: [
      "« Quelqu'un de ton âge. Avec de la paille dans les cheveux, l'air de tomber d'un grenier, et des souliers comme on n'en faisait pas. » Line a un sourire bref, le premier depuis la toux. « J'ai gardé ce visage soixante ans. Je l'ai reconnu sur une borne de la route de Vauxelles, avec une cuiller à la main et trois ans de crasse dessus. Ne fais pas cette tête. Je t'aurais ramassé{e} de toute façon ; seulement, je t'aurais peut-être appris autre chose que les horloges. »",
      "Quarante balanciers vont et viennent. Tu cherches ce qu'on répond à cela, et tu trouves que les quarante balanciers répondent très bien.",
      "« Je ne te dirai rien de ce que tu as fait là-bas, reprend-elle. D'abord parce que je n'en ai vu qu'un bout, par le bas, comme les enfants voient tout. Ensuite parce que ce que j'ai vu, tu peux encore le faire autrement. J'ai passé ma vie à me demander si c'était une bonne nouvelle. »",
    ],
    choices: [{ back: "K01j_recit" }] },
  K01j_q_pourquoi: { act: "I", title: "Le balancier", place: "troisnoyers",
    text: [
      "Line prend sur l'établi un pendule de démonstration, un fil et une bille de plomb, et l'écarte de la verticale. « Sous la Tour des Heures, il y a un balancier que personne n'a fabriqué. Il était là avant le royaume ; on a bâti la Tour dessus comme on bâtit un moulin sur une rivière. Le jour du Grand Midi, quelqu'un l'a pris, comme ceci », elle tient la bille en l'air, au bout de sa course, « et ne l'a plus lâché. »",
      "« Un balancier qu'on tient, ce n'est pas un balancier arrêté. Il tire. Il tire depuis soixante ans, et la Dormante est la mesure exacte de ce qu'il tire. J'ai relevé la lisière tous les mois depuis l'âge de vingt ans. La courbe n'a rien de mystérieux, c'est une courbe de ressort qui fatigue. » Elle lâche la bille, qui repart. « Au soixantième Grand Midi, dans neuf jours, ce qui le tient cédera. Alors il ne reviendra pas à sa place. Il ira à l'autre bout, d'un coup, et la lisière avec lui. Jusqu'où, je n'ai pas de papier assez grand pour le calculer. »",
      "« La Chronique dit que c'est maître Coudrier, le Grand Maître de la Guilde, qui a fait cela par orgueil, et que le royaume doit sa survie aux ducs de Hautgué. La Chronique a été écrite à Hautgué. Je veux savoir qui a tenu le balancier, pourquoi, et comment on lâche. De ce côté-ci du temps, il n'y a plus personne à qui le demander. De l'autre, il reste neuf jours. »",
    ],
    choices: [{ back: "K01j_recit" }] },
  K01j_q_cahiers: { act: "I", title: "Les cahiers jumeaux", place: "troisnoyers",
    text: [
      "Les deux cahiers sont taillés dans la même rame, feuille pour feuille : vingt-quatre pages chacun, d'un papier gris à gros grain. Line en ouvre un. Elle trace un trait de plume au milieu de la première page, puis ouvre l'autre à la même page. Le trait y est, encore humide.",
      "« Ne t'extasie pas, ils se touchent. Séparés, ils ne se répondent qu'en deux sortes d'endroits : là où le temps est mince, et ce sont les bornes d'heures ; et encore faut-il que les deux soient ouverts à la fois. Je les coudrai ce soir d'un fil trempé dans le sable. Sans le fil, ce sont deux cahiers. »",
      "« Tu en emportes un. L'autre reste de ce côté-ci, dans des mains qui marcheront vers Méridane par la route royale, de borne en borne, pendant que tu feras la même route soixante ans plus tôt. Ce que tu apprendras, tu l'écriras. Ce qu'on trouvera ici, dans ce que la Dormante a gardé, on te l'écrira. À vous deux, vous verrez les deux bouts de la même chose. »",
      "« Quelles mains ? » demandes-tu. Line fait la grimace de quelqu'un qui avale un remède. « J'ai engagé un guide. Les seules gens qui sachent marcher dans la lisière sont ceux qui la pillent. J'ai donc engagé ce qu'il y a de pire, en choisissant ce qu'il y a de mieux dedans. Tu verras cela à la soupe. »",
    ],
    choices: [
      { label: "« Un glaneur. Vous confiez le second cahier à un glaneur. »", fx: { flag: "j:mefiance" }, to: "K01j_q_glaneur" },
      { label: "« Quelqu'un qui connaît la lisière. Bien. »", fx: { flag: "j:ouvert" }, to: "K01j_q_glaneur" },
    ] },
  K01j_q_glaneur: { act: "I", title: "Ce qu'il y a de mieux dans le pire", place: "troisnoyers",
    text: [
      { after: "j:mefiance", text: "« À un glaneur, oui. À qui veux-tu ? Au sergent ? Au curé, qui a chargé sa charrette le premier ? » Line hausse une épaule. « Les honnêtes gens des Trois-Noyers ont une qualité, ils obéissent aux affiches. Ce n'est pas celle qu'il me faut. »" },
      { after: "j:ouvert", text: "« Bien, bien. Ne lui dis pas cela trop vite. Ces gens-là se méfient des compliments, ils ont l'habitude qu'on les leur fasse juste avant de compter les cuillers. »" },
      "« La personne que j'ai fait demander a ton âge, connaît chaque fossé d'ici aux Hautes-Bordes, et n'a jamais vendu qui que ce soit à la Garde, ce qui dans ce métier vaut un brevet de sainteté. Il y a une raison pour qu'elle entre là-dedans presque toutes les nuits et qu'elle en rapporte si peu. Je crois la connaître. Je la lui laisse : c'est son bien. »",
    ],
    choices: [{ back: "K01j_recit" }] },
  K01j_q_toux: { act: "I", title: "Le mouchoir", place: "troisnoyers", fx: { secret: "j_malade" },
    text: [
      "Line ouvre le poing. Le mouchoir est taché de rouge, d'un rouge frais sur des taches brunes ; elle le regarde avec l'attention sans pitié qu'elle accorde aux pièces usées.",
      "« Depuis la Saint-Martin. J'ai fait le compte de cela aussi : je verrai le Grand Midi, ou je le manquerai de peu. C'est pour cette raison que ce n'est pas moi qui passe. Une porte pareille, on n'y envoie pas un mouvement qui s'arrête en route. »",
      "Elle referme le poing et te plante dans les yeux son regard gris. « Maintenant, jure. Tu n'en diras rien à {autre}. J'ai engagé un guide, et il lui faudra bientôt du courage pour deux ; je refuse qu'on marche vers Méridane avec une vieille mourante sur le dos. Il me faut des jambes. Les pleureurs, j'en trouverai toujours assez. Jure-le sur ce que tu voudras, pourvu que tu y tiennes. »",
      "Tu jures. Sur quoi, tu ne le sauras plus très bien ensuite ; sur elle, probablement.",
    ],
    choices: [{ back: "K01j_recit" }] },
  K01j_q_retour: { act: "I", title: "Le retour", place: "troisnoyers",
    text: [
      "Line retourne le verre et prend le sablier entre deux doigts. Le sable, dedans, est d'un gris de perle. Il luit faiblement, comme luit le bois pourri dans les caves.",
      "« Du sable d'heures. Les Fondateurs le tiraient du balancier ; il en reste ce qu'il en traîne, et ce que la lisière en sue par les nuits froides. J'en avais amassé de quoi faire deux passages et un retour : quarante ans de grattage sur les bornes, pincée par pincée. » Sa bouche se pince. « L'hiver dernier, on est entré dans ma cave. On m'a pris trois mesures sur quatre. Ce qui reste là-dedans ouvre la porte une fois, dans un sens. »",
      "« Pour revenir, il te faudra du sable de là-bas. Il y en avait, en 541, à la Guilde, par boisseaux. Ou bien tu trouveras là-bas quelque chose qui rendra le retour inutile. » Elle repose le sablier sous son verre. « Je ne t'envoie pas à la foire. Je te le dis comme c'est. »",
    ],
    choices: [
      { label: "Demander à voir la cave", to: "K01j_cave", hide: { seen: "K01j_cave" } },
      { back: "K01j_recit" },
    ] },
  K01j_cave: { act: "I", title: "La cave au sable", place: "troisnoyers",
    text: [
      "On descend à la cave par une trappe, sous le régulateur. C'est un caveau voûté, sec, où Line garde ses huiles et ses ressorts de rechange. Au fond, quatre pots de grès alignés sur une planche ; trois sont vides et retournés, comme on retourne les verres des morts.",
      "« Ils n'ont rien cassé, dit Line du haut de l'échelle. La trappe était fermée de l'intérieur, le régulateur n'a pas bougé d'un pouce. J'ai cherché tout un dimanche par où l'on était entré. »",
    ],
    choices: [
      { label: "Chercher à ton tour", test: { dom: "savoir", diff: 0, label: "Savoir", help: [{ if: { voie: "rouage" }, v: 10 }, { if: { voie: "leste" }, v: 15 }] },
        win: { fx: { flag: "j:soupirail", ep: ["perso", 300] }, to: "K01j_cave_trace" }, lose: { to: "K01j_cave_rien" } },
      { label: "Remonter", back: "K01j_recit" },
    ] },
  K01j_cave_trace: { act: "I", title: "Deux empans", place: "troisnoyers",
    text: [
      "Tu promènes la chandelle le long des murs, au ras du sol, comme on cherche une fuite d'huile. Derrière le tas de charbon, le soupirail : un trou carré, grillé d'une barre, par où l'on verse les sacs. La barre tient. Mais la pierre où elle s'appuie a une rayure neuve, claire dans le noir de suie, et le mortier de droite a été gratté puis rebouché avec de la mie de pain noircie.",
      "On a ôté la barre et on l'a remise. Le trou a deux empans de large. Un homme n'y passe pas les épaules ; un enfant, oui, ou quelqu'un de très maigre, qui savait qu'une horlogère ne regarde jamais son charbon.",
      "Dans la poussière de charbon, sous le soupirail, il reste l'empreinte d'un pied nu, étroit, avec le gros orteil écarté des autres.",
    ],
    choices: [{ label: "Remonter, et le dire à Line", to: "K01j_cave_dit" }, { label: "Remonter sans rien dire pour l'instant", back: "K01j_recit" }] },
  K01j_cave_dit: { act: "I", title: "Le charbon", place: "troisnoyers",
    text: [
      "Line écoute, la tête penchée. « Le charbon. Quarante ans que je descends dans cette cave, et je n'ai jamais regardé le charbon. » Elle a un petit rire, qui tourne en toux, qu'elle écrase dans le mouchoir. « Un pied nu, en janvier. Voilà quelqu'un qui en voulait. »",
      "Elle ne dit rien de plus. Mais tu la vois ranger cela quelque part, soigneusement, comme elle range les vis qu'on retrouve après coup, et dont on se demande d'où elles viennent.",
    ],
    choices: [{ back: "K01j_recit" }] },
  K01j_cave_rien: { act: "I", title: "Des murs", place: "troisnoyers",
    text: [
      "Tu fais le tour du caveau, la chandelle haute. Des murs de moellons, une voûte, un tas de charbon, des toiles d'araignée que personne n'a dérangées. Si quelqu'un est entré ici, il est entré comme entre le froid.",
    ],
    choices: [{ label: "Remonter", back: "K01j_recit" }] },

  K01j_taches: { act: "I", title: "Une journée à faire", place: "troisnoyers",
    text: [
      "Line compte sur ses doigts, ce qu'elle ne fait que pour les choses graves. « Il me manque le fil : la Goton a ma dernière bobine de fil gris, je la lui avais prêtée pour un linceul, il y a des années, et elle a oublié de mourir. Il me manque la clef de la grange, que le bedeau garde avec celles de toutes les fermes vidées. Et il vous faudra manger. Vous vous partagerez cela, toi et l'autre, quand l'autre sera là. »",
      "Elle prend sur l'établi une montre d'argent, grosse comme un oignon, la remonte de sept tours et te la tend. « Elle est réglée sur le régulateur. Elle ne variera pas d'un quart d'heure en neuf jours, si tu la remontes chaque matin et si tu ne t'en sers pas pour casser des noix. Là-bas, ce sera la seule chose qui marche à l'heure d'ici. »",
      "La montre est tiède. Sur le boîtier, à l'intérieur, une main d'enfant a gravé à la pointe, il y a très longtemps, une lettre de travers : *L*.",
    ],
    fx: { item: "montre_line" },
    choices: [
      { label: "Monter faire ton sac", to: "K01j_sac" },
    ] },
  K01j_sac: { act: "I", title: "Ce qu'on emporte", place: "troisnoyers",
    text: [
      "Faire un sac pour un voyage dont on ignore jusqu'au siècle demande de la méthode. Tu étales sur ta paillasse ce que tu possèdes : la somme tient en peu de place, et la moitié est à Line.",
      "Un sac de toile qui a porté des mouvements d'horloge jusqu'à Vauxelles. Tes outils de poche, la petite trousse roulée dans son cuir : trois tournevis, une brucelle, une lime douce. Ils viennent, cela va de soi. Pour le reste, le sac a un fond, et il faut choisir.",
    ],
    fx: { item: "trousse" },
    choices: [
      { label: "Le pot d'onguent de consoude, pour les coups", fx: { item: "onguent" }, to: "K01j_rue" },
      { label: "La corde de chanvre qui sert à descendre les poids d'horloge", fx: { item: "corde" }, to: "K01j_rue" },
      { label: "La lanterne sourde de l'atelier", fx: { item: "lanterne" }, to: "K01j_rue" },
    ] },
  K01j_rue: { act: "I", title: "La rue, au petit jour", place: "troisnoyers",
    text: [
      "Tu sors chercher l'eau. La rue des Trois-Noyers n'a jamais été si peuplée ni si muette. On charge sans se parler, avec les gestes économes des gens qui ont déjà déménagé une fois, ou dont les parents l'ont fait : aux Trois-Noyers, tout le monde vient d'un village qui n'est plus sur les cartes.",
      "Devant chez le charron, une armoire de noce refuse de passer la porte, et quatre hommes la regardent en silence, comme on regarde un parent qui fait un caprice. Les enfants ont été chargés des poules. Les poules, que personne n'a prévenues, défendent le territoire.",
      "Au puits, il y a des chevaux. Six, sellés, la bride longue, et autant de casaques noires au sablier d'or. Un homme botté, une moustache courte, écrit debout dans un carnet. Il lève les yeux quand ton seau touche la margelle.",
    ],
    choices: [{ label: "Tirer ton eau", to: "K01j_brassac" }] },
  K01j_brassac: { act: "I", title: "Le capitaine au carnet", place: "troisnoyers", fx: { meet: "brassac" },
    text: [
      "« Tu loges chez l'horlogère. » Ce n'est pas une question ; il tourne une page et lit. « Adeline Noyer, soixante-neuf ans, née à la ferme des Noyers. Quarante ans de relevés sur la lisière, adressés chaque année à la Maîtrise des Sables, qui n'a jamais répondu. » Il referme le carnet sur son doigt. « Capitaine Brassac. Je réponds, moi. C'est mon défaut. »",
      "Il a une voix égale, sans menace, la voix d'un homme qui range. « Ta maîtresse ne charge aucune charrette. À trois jours de l'évacuation, je trouve cela digne d'intérêt. Tu lui diras que je passerai la voir dans la journée. Tu lui diras aussi que les fermes de la lisière sont au roi, c'est-à-dire à la Régence, et que leurs clefs devaient m'être remises ce matin. Il en manque une. »",
    ],
    choices: [
      { label: "« Je le lui dirai, capitaine. »", fx: { flag: "j:brassac_poli" }, to: "K01j_brassac_fin" },
      { label: "« Elle répare des horloges. Vous avez l'heure, vous, au moins ? »", fx: { flag: "j:brassac_insolent", regard: { brassac: "mefiant" } }, to: "K01j_brassac_fin" },
      { label: "Faire l'innocent{e} : « Une clef ? Quelle clef ? »", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { voie: "diseur" }, v: 10 }] },
        win: { fx: { flag: "j:brassac_dupe", ep: ["perso", 200] }, to: "K01j_brassac_fin" }, lose: { fx: { flag: "j:brassac_insolent", regard: { brassac: "mefiant" } }, to: "K01j_brassac_fin" } },
    ] },
  K01j_brassac_fin: { act: "I", title: "Le seau", place: "troisnoyers",
    text: [
      { after: "j:brassac_poli", text: "Il incline la tête d'un demi-pouce, ce qui chez lui doit tenir lieu de cordialité, et rouvre son carnet." },
      { after: "j:brassac_insolent", text: "Il te considère un moment, sans colère. Puis il écrit une ligne dans son carnet, lentement, en formant les lettres. On a rarement l'occasion de voir son propre nom entrer dans un registre ; l'impression est désagréable et dure longtemps." },
      { after: "j:brassac_dupe", text: "« La clef d'une grange, dit-il, déjà moins sûr de son affaire. Laisse. » Il te fait signe de passer, de la main dont on chasse une mouche. Tu remportes ton seau et ton air idiot, qui a très bien servi." },
      "Tu remontes la rue, l'eau battant contre ta jambe. Derrière toi, un des gardes demande quelque chose à voix basse, et le capitaine répond, de sa voix qui range : « Ce soir. Elle ne fera rien avant ce soir. »",
      "À la porte de la boutique, quelqu'un attend, adossé au mur, un sac à l'épaule. Quelqu'un de ton âge, maigre, hâlé, les pieds nus dans des sabots trop grands, et qui regarde la rue comme on regarde un pays étranger.",
    ],
    choices: [{ label: "Rentrer, avec l'inconnu sur tes talons", to: "B01" }] },
});

// ======================================================================== the gleaner's morning (the one who stays)
Object.assign(P, {
  K01r_fosse: { act: "I", title: "Le fossé aux Aulnes", place: "troisnoyers", fx: { stock: { sable: 2 }, secret: "r_soeur" },
    text: [
      "On sort de la Dormante comme on sort la tête de l'eau. Pendant les vingt derniers pas, le fossé est encore sourd : tes sabots s'enfoncent dans une herbe raide qui ne plie pas, l'air a l'épaisseur du lait, et tu entends ton propre cœur avec une netteté de tambour. Puis tu passes la souche fendue, et tout revient à la fois : les grenouilles, le vent dans les aulnes, un chien très loin. Tu restes un moment accroupi{e}, à respirer du bruit.",
      "À ta ceinture, le sablier de corne que te loue la Courtepaille. Il restait deux pincées quand tu as fait demi-tour ; il en reste deux, tu as compté juste. On apprend vite à compter juste. Ceux qui comptent large sont encore là-bas, debout dans les prés, et les enfants de la bande leur accrochent des chapeaux.",
      "Tu es allé{e} cette nuit jusqu'à la croix des Hautes-Bordes. De là, par temps de lune, on voit la butte de Roquebise : une bosse noire, à deux lieues, avec ses fours éteints. Tu la regardes le temps d'une pincée. Puis tu reviens, et sur le chemin du retour il faut bien ramasser quelque chose, puisque c'est le métier.",
    ],
    choices: [
      { label: "Cette nuit, tu as pris l'argenterie d'un buffet : six cuillers et une timbale", fx: { flag: "r:butin_argent", item: "cuillers" }, to: "K01r_camp" },
      { label: "Cette nuit, tu as pris une poupée de chiffon sur un lit d'enfant, sans savoir pourquoi", fx: { flag: "r:butin_poupee", item: "poupee" }, to: "K01r_camp" },
      { label: "Cette nuit, tu n'as rien pris. Tu avais trop regardé la butte", fx: { flag: "r:butin_rien" }, to: "K01r_camp" },
    ] },
  K01r_camp: { act: "I", title: "Le creux des Noisetiers", place: "troisnoyers", fx: { meet: "courtepaille" },
    text: [
      "La bande campe dans un creux de noisetiers, à mi-chemin du village et de la lisière : quatre bâches, un feu qu'on n'allume que de jour, une charrette à bras, et l'âne, qui est le seul de la compagnie à avoir des papiers en règle. Une douzaine de dormeurs sous les bâches. On glane la nuit, on dort le matin, on vend l'après-midi ; c'est une vie réglée, quoi qu'en disent les affiches.",
      "La Courtepaille ne dort pas. Elle ne dort jamais quand il reste quelqu'un dehors : c'est sa manière d'être une mère pour la bande, avec celle de retenir les dettes. Elle est assise sur le timon de la charrette, large comme un buffet, ses trois jupes étalées, une balance de changeur sur les genoux.",
      "« Tiens ! Voilà Roquebise qui rentre. » Elle t'a donné ce nom-là le premier jour, et il t'est resté. « Fais voir. »",
      { after: "r:butin_argent", text: "Elle pèse les cuillers une à une, mord la timbale, et rit avant d'avoir fini de parler. « De l'argent de fermier. Moitié étain, moitié vanité. Je t'en compte quatre écus, et j'y perds ; mais j'ai le cœur tendre au petit jour. Quatre de moins sur ce que tu me dois. Tu les gardes en poche, tes cuillers, jusqu'à la charrette du brocanteur : c'est lui qui paie. »" },
      { after: "r:butin_poupee", text: "Elle prend la poupée par une jambe, la retourne, cherche la couture où les paysannes cachent un écu. Il n'y a que du son. « Ça, mon petit, ce n'est pas glaner. C'est du sentiment, et le sentiment ne se revend qu'aux Veilleurs, qui paient en prières. » Elle te la relance. « Garde-la. Tu me dois toujours neuf écus. »" },
      { after: "r:butin_rien", text: "Elle regarde ton sac plat, puis toi, puis le sac. « Rien. Deux pincées de mon sable, une nuit entière, et rien. » Elle ne rit pas, ce qui est rare et mauvais signe. « Tu es encore allé{e} regarder ta butte. Un jour tu iras la regarder d'une pincée trop près. Et j'aurai perdu un sablier de corne, qui me coûte plus cher que toi. »" },
    ],
    choices: [{ label: "T'asseoir près du feu éteint", to: "K01r_offre" }] },
  K01r_offre: { act: "I", title: "Ce que sait la Courtepaille", place: "troisnoyers", fx: { secret: "r_vol" },
    text: [
      "« Écoute plutôt. J'ai de l'ouvrage pour toi, et de l'ouvrage propre, pour changer. » La Courtepaille range sa balance dans une de ses poches, qui en contient d'autres. « La vieille aux horloges cherche quelqu'un pour la mener cette nuit dans la lisière. Jusqu'à la Ferme-Vieille, pas plus loin. Six écus, payés d'avance. Elle a demandé la meilleure paire de jambes de ma bande. Je lui ai dit que la meilleure était aussi la plus bête, vu qu'elle ne rapporte rien, et elle a répondu que c'était celle-là qu'il lui fallait. »",
      "Elle se penche. Son haleine sent l'oignon et l'eau-de-vie. « Et elle paie en sable, la vieille, si on sait lui demander. Elle en a. » Un temps. « Elle en a moins qu'à la Noël, remarque. » Et elle rit, cette fois, longtemps, en te regardant.",
      "Tu lui as vendu trois mesures de sable d'heures, au mois de janvier, contre quarante écus et la promesse de se taire. Tu étais passé{e} par le soupirail à charbon, pieds nus dans la neige pour ne pas laisser de clous. Quarante écus : de quoi louer un sablier pendant un an, et aller regarder une butte presque toutes les nuits. Tu n'as jamais su ce que la vieille voulait en faire, de son sable. Tu vas l'apprendre ce matin, à sa table, et c'est elle qui te servira la soupe.",
      "« Vas-y, dit la Courtepaille. Sois poli{e}. Essuie tes pieds. » Elle rit encore. « Et prends garde au village : la Garde y est depuis hier soir. Le capitaine cherche des langues, et il a de quoi les délier. »",
    ],
    choices: [
      { label: "« Et si elle sait que c'est moi ? »", to: "K01r_offre_peur", hide: { seen: "K01r_offre_peur" } },
      { label: "Prendre ton sac et partir pour le village", to: "K01r_rouget" },
    ] },
  K01r_offre_peur: { act: "I", title: "Les honnêtes gens", place: "troisnoyers",
    text: [
      "« Elle ne sait rien. Les honnêtes gens ne savent jamais rien, c'est ce qui les rend honnêtes. » La Courtepaille se cure une dent avec l'ongle du petit doigt, qu'elle porte long pour cet usage et pour ouvrir les médaillons. « Et quand bien même ! Elle a besoin de toi cette nuit. On ne dénonce pas son guide avant d'être rentré. Après, c'est une autre affaire, et après, tu cours plus vite qu'elle. »",
      "« Il y a une chose que je voudrais savoir, moi, reprend-elle plus bas. Ce qu'une horlogère de soixante-neuf ans va chercher dans une ferme vide, la nuit, à trois jours de l'évacuation. Tu ouvriras les yeux. Ce que tu verras, tu me le diras : je te remettrai deux écus sur ta dette. Trois, si c'est drôle. »",
    ],
    choices: [{ label: "Prendre ton sac et partir pour le village", to: "K01r_rouget" }] },
  K01r_rouget: { act: "I", title: "Rouget", place: "troisnoyers", fx: { met: "rouget" },
    text: [
      "Au bord du creux, quelque chose tombe d'un noisetier et se relève : Rouget. Quatorze ans, des taches de son jusque sur les oreilles, une veste d'homme dont il roule les manches en boudins. Il a écouté. Il écoute toujours ; à défaut de famille, il s'est fait une vocation.",
      "« Emmène-moi. » Il trotte à côté de toi, de biais, comme les chiens qui ont peur qu'on les renvoie. « À la Ferme-Vieille, j'y suis allé avant toi, d'abord. Je sais où le fermier cachait son eau-de-vie. Et la vieille, je lui porterai son panier. Les vieilles m'adorent, je leur rappelle un petit-fils qu'elles n'ont pas eu. »",
      "Il a dit tout cela très vite. Ce qu'il n'a pas dit tient dans sa façon de regarder derrière lui, vers les bâches : la Courtepaille l'a acheté il y a quatre ans à un meunier de Port-Régent, contre un sac de farine, et quand la bande repliera le camp, dans trois jours, on ne lui a pas encore dit dans quelle charrette il monterait.",
    ],
    choices: [
      { label: "« Pas cette nuit. Mais je ne partirai pas d'ici sans te prévenir. Parole. »", fx: { conf: { rouget: 10 }, flag: "r:rouget_parole" }, to: "K01r_chemin" },
      { label: "« Cette nuit, c'est une affaire à deux, et tu fais du bruit en respirant. »", fx: { conf: { rouget: -5 } }, to: "K01r_chemin" },
      { label: "Lui donner un écu pour qu'il surveille le camp à ta place", if: { gold: { min: 1 } }, fx: { gold: -1, conf: { rouget: 5 }, flag: "r:rouget_guet" }, to: "K01r_chemin" },
    ] },
  K01r_chemin: { act: "I", title: "Le chemin du village", place: "troisnoyers",
    text: [
      "Le chemin creux monte entre deux haies vers les Trois-Noyers. Tu le prends rarement de jour. De jour, un glaneur dans la rue d'un village, c'est un renard dans une cour : on ne lui a encore rien vu faire, et l'on a déjà compté les poules.",
      "À l'entrée du village, une famille charge une charrette à ridelles : le père, deux garçons, une vieille assise sur un coffre, qui tient une cage avec un merle. La femme te voit. Elle rentre d'un geste, sans hâte, le chaudron de cuivre qu'elle venait de poser dehors ; puis elle se ravise, regarde vers la lisière, et te regarde, toi, d'un autre air.",
      "« Tu en es, toi, dit-elle à mi-voix. De ceux qui vont dedans. » Elle s'essuie les mains à son tablier. « Chez ma sœur, à la métairie des Aulnes, prise depuis Pâques. Sur la cheminée, il y a le portrait de notre mère, dans un cadre de buis. Rien que le portrait. Je te donnerais deux écus. » Son mari l'appelle. Elle ne se retourne pas. « Je m'appelle Thomasse. Je pars après-demain. »",
      { if: { has: "poche:sifflet" }, text: "Dans la cage, le merle siffle trois notes. Tu les lui rends, sur ton sifflet de sureau, sans y penser. La vieille au coffre tourne vers toi un visage où il manque toutes les dents, et te sourit avec ce qui reste." },
    ],
    fx: { flag: "r:thomasse_demande" },
    choices: [
      { label: "« Je verrai. » Entrer dans le village", to: "K01r_puits" },
    ] },
  K01r_puits: { act: "I", title: "Le puits", place: "troisnoyers", fx: { meet: "brassac" },
    text: [
      "Il faut passer devant le puits pour aller chez l'horlogère, et au puits il y a des chevaux : six, sellés, avec les fontes de cuir noir de la Garde du Sable. Tu connais ces fontes. On y range, entre autres commodités, la corde.",
      "Les gardes font boire leurs bêtes. Leur capitaine écrit debout dans un carnet, botté, sanglé, une moustache courte, l'air de quelqu'un qui tient le monde pour un registre mal tenu et qui s'est offert à le recopier. Tu rases le mur de l'auberge. Il ne lève pas la tête. Il dit seulement, de la voix dont on lit une ligne :",
      "« Seize ans environ. Hâlé{e}, pieds nus dans des sabots. Dit “Roquebise”, de la bande à la femme Courtepaille. Entre dans la lisière par le fossé aux Aulnes, quatre nuits sur sept. » Il tourne la page. « Approche. Si je voulais te pendre, tu aurais déjà les pieds qui ne touchent plus. »",
    ],
    choices: [{ label: "Approcher", to: "K01r_brassac" }] },
  K01r_brassac: { act: "I", title: "Dix écus", place: "troisnoyers",
    text: [
      "De près, le capitaine Brassac sent le cuir et le savon. Il ne te regarde pas avec mépris, et c'est plus inquiétant : il te regarde avec exactitude.",
      "« La vieille horlogère t'a fait demander pour cette nuit. Ne prends pas cet air, j'ai payé un écu pour le savoir, à quelqu'un de ta bande qui en vaut moins. Elle a quelque chose dans cette lisière. Une cache, un passage, une porte, elle-même dit “une porte” dans des lettres qu'elle envoie depuis quarante ans à des gens qui les classent. Je veux savoir où, et je veux le savoir avant qu'elle y soit. »",
      "Il sort de sa fonte une bourse et compte sur la margelle du puits, sans se presser, cinq écus au sablier. « Cinq maintenant. Cinq quand je la tiendrai. Dix écus, c'est ce que tu dois à ta patronne, à un près ; tu vois que je tiens mes comptes. Et je raye ton nom de ce carnet. Les noms que je ne raye pas, je finis toujours par les rencontrer. »",
    ],
    choices: [
      { label: "Ramasser les cinq écus : « La Ferme-Vieille. Cette nuit. »", fx: { gold: 5, secret: "r_garde", flag: "r_garde_pris", regard: { brassac: "cordial" } }, to: "K01r_brassac_pris" },
      { label: "Laisser les écus sur la margelle : « Je glane. Je ne vends pas les gens. »", fx: { flag: "r:brassac_refus", regard: { brassac: "hostile" }, ep: ["perso", 200] }, to: "K01r_brassac_refus" },
      { label: "Jouer l'idiot{e} : « Une porte ? Dans un pré ? »", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { voie: "diseur" }, v: 10 }, { if: { voie: "leste" }, v: 5 }] },
        win: { fx: { flag: "r:brassac_dupe", ep: ["perso", 200] }, to: "K01r_brassac_dupe" }, lose: { fx: { flag: "r:brassac_refus", regard: { brassac: "mefiant" } }, to: "K01r_brassac_refus" } },
    ] },
  K01r_brassac_pris: { act: "I", title: "Cinq écus au sablier", place: "troisnoyers",
    text: [
      "Les écus sont froids. Ils tiennent tous les cinq dans ta paume ; tu t'étonnes qu'une chose pareille pèse si peu.",
      "« La Ferme-Vieille, répète le capitaine en écrivant. Bien. » Il se dispense de sourire comme de remercier ; il fait un trait dans son carnet, en face d'une ligne, et tu comprends que la ligne, c'est toi, et que le trait ne la raye pas encore. « Tu la mèneras comme convenu. Tu ne changeras rien à tes façons. Quand tu verras nos lanternes, tu te coucheras à plat ventre et tu y resteras. »",
      "Tu t'éloignes. Cinq écus, cela fait dix nuits de sable, dix nuits à la croix des Hautes-Bordes. Tu te le répètes jusqu'à la porte de l'horlogère, où tu t'aperçois que tu as cessé de compter les nuits et que tu comptes les marches.",
    ],
    choices: [{ label: "Frapper chez l'horlogère", to: "K01r_porte" }] },
  K01r_brassac_refus: { act: "I", title: "La margelle", place: "troisnoyers",
    text: [
      { outcome: "lose", text: "« Une porte dans un pré », répète le capitaine, et il attend. Tu soutiens son regard aussi longtemps que tu peux, c'est-à-dire trop peu. Il a vu mentir des gens plus vieux que toi, et mieux payés." },
      "Brassac reprend ses écus un à un, sans humeur, et les remet dans la bourse. « C'est une réponse. Je la note. » Il la note en effet. « Tu la mèneras donc cette nuit pour six écus, quand tu pouvais la mener pour seize. On m'avait dit que tu étais le plus bête de la bande ; je vois qu'on me renseigne bien. »",
      "Un des gardes ricane. Le capitaine le fait taire d'un regard, et c'est à toi qu'il parle encore, plus bas : « Quand tu verras nos lanternes, cette nuit, ne cours pas. Ceux qui courent, mes hommes leur tirent dans les jambes, et dans la lisière un homme qui tombe ne se relève pas toujours du bon côté. »",
    ],
    choices: [{ label: "Tourner le dos, et aller frapper chez l'horlogère", to: "K01r_porte" }] },
  K01r_brassac_dupe: { act: "I", title: "Le plus bête de la bande", place: "troisnoyers",
    text: [
      "Tu ouvres la bouche, tu la laisses ouverte, tu regardes les écus avec une convoitise que tu n'as pas à feindre, et tu dis que la vieille t'a parlé d'un panier à porter. Un panier lourd. Qu'elle a mal aux genoux. Qu'elle veut voir la ferme où elle est née, une dernière fois, rapport à l'affiche.",
      "Brassac t'écoute jusqu'au bout. Puis il regarde son carnet, où quelqu'un lui a vendu pour un écu le meilleur glaneur de la lisière, et il a le visage d'un homme à qui l'on a refilé un cheval boiteux. « Une dernière fois, dit-il. Avec un panier. » Il reprend ses écus. « File. »",
      "Tu files. À dix pas, tu l'entends dire à ses gardes de seller pour le soir tout de même : c'est un homme qui vérifie. Mais il ne sait rien de plus qu'en arrivant, et toi, tu sais maintenant qu'il y a une porte.",
    ],
    choices: [{ label: "Aller frapper chez l'horlogère", to: "K01r_porte" }] },
  K01r_porte: { act: "I", title: "La porte de l'horlogère", place: "troisnoyers",
    text: [
      "La maison de l'horlogère est la dernière de la rue, celle dont les volets restent clos. On l'entend avant de la voir : un battement serré, nombreux, régulier, qui passe à travers le bois comme le bourdon d'une ruche. La première fois que tu es venu{e} ici, c'était par derrière, par le soupirail, et tu avais cru que la cave était pleine d'insectes.",
      "Aujourd'hui tu arrives par la porte. Tu essuies tes pieds, comme on te l'a dit. Tu remarques que tu tiens ton sac devant toi, à deux mains, comme font les gens qui viennent rendre quelque chose.",
      "Quelqu'un remonte la rue derrière toi avec un seau : quelqu'un de ton âge, les mains blanches, un tablier de cuir, et sur le visage cette expression d'application qu'ont les gens qui dorment dans un lit. L'apprenti{autre:e} de la vieille, sans doute. {autre:Il} s'arrête, te toise, et pousse la porte.",
    ],
    choices: [{ label: "Entrer derrière {autre:lui}", to: "B01" }] },
});

module.exports = {
  passages: P,
  extras: {
    items: {
      montre_line: { name: "La montre de Line", kind: "divers", keep: true, nodepot: true, price: 0, desc: "Une montre d'argent grosse comme un oignon, réglée sur l'heure des Trois-Noyers. À l'intérieur du boîtier, une lettre gravée de travers : L." },
      trousse: { name: "Trousse d'horloger", kind: "divers", keep: true, price: 0, desc: "Trois tournevis, une brucelle, une lime douce, roulés dans un cuir." },
      cuillers: { name: "Six cuillers et une timbale", kind: "divers", price: 4, desc: "De l'argent de fermier : moitié étain, moitié vanité." },
      poupee: { name: "Poupée de chiffon", kind: "divers", price: 0, desc: "Une poupée bourrée de son, une robe taillée dans un tablier, deux boutons dépareillés pour les yeux." },
    },
    people: {
      thomasse: { name: "Thomasse", f: true, face: { age: "adulte", skin: "hale", hair: "brun", coif: "foulard", eyes: "ronds", iris: "brun", nose: "large", lips: "pleines", shape: "rond" },
        aspect: { allure: "une fermière de quarante ans", signe: "s'essuie les mains à son tablier" }, qui: "Une fermière des Trois-Noyers, qui part après-demain.", desc: "Une fermière des Trois-Noyers. Sa sœur tenait la métairie des Aulnes, prise depuis Pâques." },
    },
  },
};
