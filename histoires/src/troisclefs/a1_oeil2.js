// Act I, the eye (post `a1` = oeil), second half: the impasse des Poids by day, the neighbour and her mirror, the
// sewer under the rampart, then the tail of the Remonteur (apothecary, market, church, the Sablier) and the second
// shadow. Sets: monde:a1:remonteur_parle (the old man gave the nine o'clock rendezvous), monde:a1:egouts (the collector
// is known), monde:a1:ugolin_vu (the colossus was seen at the corner), monde:a1:ugolin_connait (he knows the eye's face).
// Personal: a1:o_vu (the old man noticed his follower), a1:o_priere (overheard him in church).
var PARLE = function () { return { has: "monde:a1:remonteur_parle" }; };

module.exports = {
  passages: {
    // ------------------------------------------------------------ the impasse by day
    A1o_impasse: { act: "I", title: "L'impasse des Poids, le matin", place: "poids", hub: true, backName: "l'impasse des Poids",
      text: [
        { first: true, text: "L'impasse des Poids est une fente au pied du rempart, large de deux brouettes. Six maisons noires s'y font face, trois et trois, si près que les voisines se passent le sel par les fenêtres. Au fond, deux blocs de fonte gros comme des veaux, les contrepoids d'une herse qu'on a démontée il y a cent ans, barrent à demi le passage ; derrière eux, la dernière maison, plus étroite que les autres, porte au-dessus de sa porte un cadran de pierre sans fer." },
        { first: true, text: "Les volets de l'étage sont clos. Par leurs jours, tu vois passer quelqu'un, qui va d'un mur à l'autre et revient." },
        { first: true, text: "Tu choisis ton poste : l'encoignure d'une porte condamnée, d'où l'on tient à la fois l'entrée de l'impasse et la maison du fond. En face, au premier, une fenêtre est ouverte. Une vieille femme y est assise devant un petit miroir fixé à l'appui par une tige de fer, incliné vers la rue. Elle tricote sans regarder ses mains." },
        { again: true, text: "L'impasse, ses six maisons, les contrepoids. La vieille est toujours à son miroir. Au fond, derrière les volets, quelqu'un marche." },
        { first: true, if: { present: "fifrelin" }, text: "Fifrelin s'est assis sur un des contrepoids et joue aux osselets, tout seul, avec l'application d'un enfant qui n'écoute rien." },
      ],
      choices: [
        { label: "Saluer la voisine au miroir", to: "A1o_voisine", hide: { any: [{ seen: "A1o_voisine_ok" }, { seen: "A1o_voisine_ko" }] } },
        { label: "Regarder de près cette plaque de fonte, au pied du rempart", to: "A1o_regard", hide: { any: [{ has: "monde:a1:egouts" }, { seen: "A1o_egout_perdu" }] } },
        { label: "Attendre onze heures, et le vieil homme", to: "A1o_sortie", big: true },
      ] },
    A1o_voisine: { act: "I", title: "La veuve Tournemine", place: "poids",
      text: [
        "Le petit miroir t'a vu{e} venir depuis le coin : elle n'a pas eu à lever la tête. Ces miroirs-là s'appellent des espions, et la ville haute en a un à chaque étage.",
        "« Vous cherchez Maître Balancier. » C'est une affirmation. La veuve Tournemine a la voix des gens qui parlent seuls depuis longtemps et ont perdu l'habitude d'être contredits. « Tout le monde le cherche, cette semaine. Trente ans que j'habite en face, il ne venait personne. À présent, c'est un défilé. »",
      ],
      choices: [
        { label: "Admirer son tricot, puis son miroir, puis sa mémoire", test: { dom: "social", diff: 10, label: "Social" }, win: { fx: { clue: "c_visiteur", ep: ["perso", 400] }, to: "A1o_voisine_ok" }, lose: { to: "A1o_voisine_ko" } },
        { label: "« Un défilé ? Racontez-moi cela, je suis du quartier depuis hier. »", test: { dom: "savoir", diff: 10, label: "Savoir" }, win: { fx: { clue: "c_visiteur", ep: ["perso", 400] }, to: "A1o_voisine_ok" }, lose: { to: "A1o_voisine_ko" } },
      ] },
    A1o_voisine_ok: { act: "I", title: "Le défilé", place: "poids",
      text: [
        "Elle pose son tricot. C'est un événement : il faut à la veuve Tournemine ses deux mains pour compter.",
        "« Mardi, un monsieur en noir. Très bien mis, des gants gris, la figure d'un bedeau. Il est resté une heure. Il est revenu vendredi, le soir, une heure encore. En partant, il a serré la main de Maître Balancier sur le seuil, longtemps, des deux mains, comme on fait aux enterrements. Et Maître Balancier pleurait. Je l'ai vu dans mon espion. Un homme de soixante-dix ans ! »",
        "« Et depuis ? »",
        "« Depuis, avant-hier, un valet du Syndic, avec une lettre. Et hier soir, pendant la fête… » Elle baisse la voix, bien qu'il n'y ait personne. « Un homme. Grand comme la porte. Il n'a pas frappé. Il s'est mis au coin, là, sous ma fenêtre, et il a regardé la maison. Une heure. Sans bouger, comme un meuble. Je n'ai pas osé moucher ma chandelle. »",
        "Elle reprend ses aiguilles. « Je l'ai dit au guet ce matin. On m'a répondu que regarder une maison n'était pas défendu. Je regarde bien la rue, moi. »",
      ],
      fx: { flag: "a1:o_deux_ombres" },
      choices: [{ back: "A1o_impasse" }] },
    A1o_voisine_ko: { act: "I", title: "Un espion bien tenu", place: "poids",
      text: [
        "La veuve Tournemine te regarde dans son miroir, ce qui lui permet de te voir sans t'accorder son visage.",
        "« Je ne cause pas aux gens de la rue. Je les regarde. » Les aiguilles reprennent. « Et je me souviens d'eux. Vous avez un accroc à la manche gauche, et vous venez de la ville basse : cela se voit à la façon de marcher au milieu. »",
        "Tu regagnes ton encoignure. Tu as désormais, au premier étage, un témoin qui tricote.",
      ],
      fx: { flag: "a1:o_tournemine" },
      choices: [{ back: "A1o_impasse" }] },

    // ------------------------------------------------------------ the collector under the rampart
    A1o_regard: { act: "I", title: "La plaque de fonte", place: "poids",
      text: [
        "Au pied du rempart, entre le second contrepoids et le mur, il y a dans le pavé une plaque de fonte ronde, à deux anneaux, marquée d'une clef et d'une date que les semelles ont mangée. Une rigole y mène. Par ses trous monte une haleine froide, qui sent la cave et l'eau morte.",
        "Toutes les citadelles ont un ventre. Celle d'Aiguemorne se vide par un vieux collecteur, qui prend les eaux de la cour, celles du rempart, celles de l'impasse, et les porte à la Morne par-dessous la ville. Les égoutiers y descendent une fois l'an, à la Saint-Jean, avec des cierges bénits.",
        { if: { present: "fifrelin" }, text: "Fifrelin a ramassé ses osselets. « J'y suis jamais allé, dit-il, ce qui dans sa bouche est un aveu rare. Y en a qui disent que ça ressort au lavoir. Y en a qui disent que ça ressort pas. »" },
      ],
      choices: [
        { label: "Lever la plaque et descendre voir où cela mène", takes: 1, test: { dom: "nature", diff: 0, label: "Nature", help: [{ if: { item: "lanterne" }, v: 20 }, { if: { present: "fifrelin" }, v: 10 }] }, win: { fx: { flag: "monde:a1:egouts", ep: ["perso", 700] }, to: "A1o_egout" }, lose: { fx: { pv: -2 }, to: "A1o_egout_perdu" } },
        { label: "Laisser la plaque où elle est", back: "A1o_impasse" },
      ] },
    A1o_egout: { act: "I", title: "Le collecteur du rempart", place: "poids", ambiance: "souterrain",
      text: [
        "Dix échelons de fer, scellés dans un puits de brique, et tu prends pied dans le noir, sur une banquette large de deux semelles. À ta droite coule quelque chose que tu entends sans le voir, lentement, avec des petits bruits de bouche.",
        "Le collecteur est une galerie voûtée, haute juste assez pour un homme courbé. Ceux qui l'ont bâti y ont mis de la belle pierre, bien appareillée, comme on en mettait alors jusque dans ce que personne ne verrait ; les siècles l'ont tapissée d'une mousse blanche, pendante, qui te frôle le front à chaque pas comme des doigts. L'air y est épais. On a le sentiment, au bout d'un moment, de marcher à l'intérieur de quelque chose qui digère.",
        "Tu comptes. Quarante pas vers l'aval, une première fourche : un boyau à gauche, d'où vient un filet d'air ; la galerie à droite, qui descend. Tu prends à droite, en marquant l'angle d'une croix à la craie. Cent pas. Une grille, rongée, qui pend sur un seul gond. Une seconde fourche, où tu prends encore la pente. Puis l'air change, devient mouillé, vivant, et la voûte s'ouvre d'un coup sur un rond de jour gris : la Morne, entre deux piles du lavoir, à dix pieds des battoirs.",
        "À droite, à droite, toujours la pente. Tu remontes en effaçant tes croix du pouce, sauf la première.",
      ],
      choices: [{ label: "Ressortir dans l'impasse", back: "A1o_impasse" }] },
    A1o_egout_perdu: { act: "I", title: "À gauche", place: "poids", ambiance: "souterrain",
      text: [
        "Dix échelons de fer, et le noir. Tu avances sur une banquette glissante, une main au mur, dans une galerie où pend une mousse blanche qui te frôle le front comme des doigts.",
        "À la première fourche, tu prends à gauche, parce que l'air y vient. C'est l'erreur. Le boyau monte, se resserre, tourne ; tu marches courbé{e}, puis à genoux, dans une eau qui te glace jusqu'aux coudes ; et tu débouches enfin, au bout d'un temps que tu renonces à mesurer, sous une grille scellée par où tombe un jour de cave et le bruit de trente hommes qui mangent. Les cuisines de la citadelle. Tu es sous la soupe du guet.",
        "Le retour est long. Tu ressors de la plaque de fonte trempé{e}, moulu{e}, sentant des choses que le savon mettra huit jours à discuter, et sans autre science que celle-ci : il y a un chemin, et tu ne l'as pas trouvé.",
      ],
      choices: [{ label: "Reprendre ton poste, en te tenant sous le vent", back: "A1o_impasse" }] },

    // ------------------------------------------------------------ the tail
    A1o_sortie: { act: "I", title: "Onze heures", place: "poids",
      fx: { until: 11 },
      text: [
        "Onze heures sonnent au-dessus de toi, si près que le pavé en tremble. Au fond de l'impasse, un volet remue. Puis la porte au cadran s'ouvre de la largeur d'un corps.",
        "Maître Symphorien Balancier est un petit vieillard propre, voûté par quarante ans d'escaliers, en houppelande brune et bonnet de drap. Il a des bésicles, des mains tachées d'huile, et il porte sous le bras un parapluie, par ce ciel sans nuage, comme d'autres portent une canne à épée. Il referme sa porte à deux tours. Il vérifie les deux tours. Il regarde l'impasse, les fenêtres, le miroir de la veuve.",
        "Puis il se met en marche, vite, le long du mur, et passe à trois pas de ton encoignure sans tourner la tête, avec la raideur d'un homme qui s'interdit de la tourner.",
      ],
      choices: [
        { label: "Le laisser prendre trente pas, et suivre sur l'autre trottoir", test: { dom: "discretion", diff: 10, label: "Discrétion", help: [{ if: { has: "a1:o_lavoir" }, v: 10 }, { if: { present: "fifrelin" }, v: 10 }] }, win: { fx: { ep: ["perso", 400] }, to: "A1o_file1" }, lose: { fx: { flag: "a1:o_vu" }, to: "A1o_file1" } },
        { label: "Prendre les devants : tu sais qu'il va chez l'apothicaire", if: { has: "a1:o_lavoir" }, fx: { ep: ["perso", 400] }, to: "A1o_apothicaire", hide: { not: { has: "a1:o_lavoir" } } },
      ] },
    A1o_file1: { act: "I", title: "La rue Saint-Éloi", place: "ferronniers",
      text: [
        { outcome: "lose", text: "Au premier coin, il s'arrête devant une vitre d'horloger et y reste, le dos raide. Il ne regarde pas les montres. Il regarde la rue, dans la vitre, et toi dedans. Quand il repart, c'est d'un pas plus court, les épaules remontées." },
        { outcome: "win", text: "Il se retourne deux fois avant le coin. Les deux fois, tu es quelqu'un d'autre : une personne qui renoue son soulier, une personne qui marchande des cerises." },
        "La rue Saint-Éloi descend du rempart vers la place du marché. C'est la rue des petits métiers de la ville haute, barbiers, écrivains publics, marchands de chandelles ; et le vieil homme y marche comme sur une digue, sans s'arrêter, en saluant du bonnet des gens qui le saluent de loin et pressent le pas ensuite.",
        "Tu le remarques au troisième. On le connaît, on l'estime, et depuis quelques jours on évite d'être vu en train de lui parler. Dans une ville de serruriers, les nouvelles passent sous les portes.",
        "Il entre sous une enseigne à la couleuvre : l'apothicaire.",
      ],
      choices: [
        { label: "Entrer derrière lui, pour un sou de réglisse", to: "A1o_apothicaire" },
        { label: "L'attendre dehors, adossé{e} à la fontaine", to: "A1o_marche" },
      ] },
    A1o_apothicaire: { act: "I", title: "À la Couleuvre", place: "ferronniers",
      text: [
        "La boutique est longue, sombre, tapissée de pots de faïence bleue jusqu'au plafond. Il y flotte une odeur de camphre et de rose sèche. Un crocodile empaillé pend à une poutre, comme chez tous les apothicaires, pour l'honneur de la science.",
        "Tu examines les réglisses. Au comptoir, le vieil homme a posé son parapluie.",
        "« Mes gouttes, Maître Thériaque. Et vous doublerez. »",
        "« Doubler la digitale ? » L'apothicaire est un long homme jaune, qui parle en regardant par-dessus ses lunettes. « Maître Balancier, à votre âge, on ne double que les précautions. Vous montez trop d'escaliers. »",
        "« Ce n'est pas l'escalier. » Un silence. « Et donnez-moi de quoi dormir. Quelque chose de fort. De quoi dormir sans rêver d'une voix. »",
        "L'apothicaire le regarde un moment, puis descend un pot sans rien demander. Les deux hommes ont l'air de gens qui ont déjà eu cette conversation et se sont promis de ne pas la finir.",
      ],
      fx: { ep: ["perso", 300], clue: "j_voix" },
      choices: [
        { label: "Acheter un pot d'onguent, pour faire bonne mesure", if: { gold: { min: 12 } }, fx: { gold: -12, item: "onguent" }, to: "A1o_marche" },
        { label: "Sortir derrière lui", to: "A1o_marche" },
      ] },
    A1o_marche: { act: "I", title: "Le marché Saint-Éloi", place: "ferronniers",
      text: [
        "La place du marché, à cette heure, est une mer. Les maraîchères de la plaine y tiennent leurs paniers au ras du pavé ; les bouchers y crient ; un arracheur de dents y opère en musique, sur une estrade, avec un tambour pour couvrir les objections. Le vieil homme s'y engage de biais, son parapluie devant lui comme une étrave.",
        "Tu le tiens par le bonnet de drap, qui flotte à trente pas dans la foule. C'est ici qu'on perd les gens. C'est ici aussi, les vieux du métier te l'ont dit, qu'on apprend si l'on est seul à les suivre : dans une foule, tout le monde change de direction sans cesse, sauf ceux qui en ont une.",
      ],
      choices: [
        { label: "Garder le bonnet de drap, et regarder qui d'autre le garde", test: { dom: "nature", diff: 0, label: "Nature", help: [{ if: { has: "a1:o_deux_ombres" }, v: 20 }, { if: { present: "fifrelin" }, v: 10 }] }, win: { fx: { flag: "monde:a1:ugolin_vu", clue: "r_ombre", ep: ["perso", 600] }, to: "A1o_marche_ok" }, lose: { to: "A1o_marche_ko" } },
      ] },
    A1o_marche_ok: { act: "I", title: "La seconde ombre", place: "ferronniers",
      text: [
        "Tu le vois parce qu'il ne fait pas comme les autres. La foule tourne autour des étals ; lui la traverse, tout droit, et elle s'ouvre devant lui sans qu'il ait à pousser, comme l'eau devant un bac.",
        "C'est un homme d'une taille et d'une largeur qui ne se cachent pas, et il n'essaie pas. Tête nue, rasée, bosselée, posée sans cou sur des épaules de portefaix. Un manteau de drap, ouvert sur un tablier de cuir. Il a l'oreille gauche écrasée, en chou. Il marche à vingt pas derrière le bonnet de drap, du même pas que lui, sans hâte et sans ruse, comme on suit une charrette qu'on est sûr de rattraper.",
        "À sa ceinture, sous le manteau, quelque chose de lourd tire le cuir vers le bas.",
        "Le vieil homme ne se retourne pas. Il le sait là. C'est à cela que sert le parapluie : à avoir quelque chose dans la main.",
      ],
      fx: { meet: "ugolin" },
      choices: [{ label: "Suivre les deux, de plus loin", to: "A1o_eglise" }] },
    A1o_marche_ko: { act: "I", title: "Trente bonnets de drap", place: "ferronniers",
      text: [
        "Le tambour de l'arracheur de dents bat une charge. Une cliente crie, la foule reflue en riant, et pendant dix secondes tu ne vois plus que des dos. Quand la place se rouvre, il y a devant toi trente bonnets de drap, tous bruns, tous pressés.",
        "Tu retrouves le bon à l'autre bout, par chance, devant le porche d'une église où il s'engouffre. Si quelqu'un d'autre le suivait, tu n'as pas eu d'yeux pour lui.",
      ],
      choices: [{ label: "Entrer dans l'église", to: "A1o_eglise" }] },

    // ------------------------------------------------------------ the church
    A1o_eglise: { act: "I", title: "Saint-Éloi-des-Limeurs", place: "ferronniers", ambiance: "temple",
      text: [
        "Saint-Éloi-des-Limeurs est l'église des gens de métier : basse, enfumée, chaude de cierges. On y a pendu en ex-voto, le long des piliers, des outils par centaines, limes, tenailles, compas, que la reconnaissance des ouvriers guéris a dorés pour l'occasion. Cela fait un atelier où l'on prierait.",
        "Le vieil homme va droit à une chapelle de côté, sous un vitrail où saint Éloi ferre un cheval dont il a d'abord ôté la jambe. Il allume un cierge à un autre. Il le plante. Il s'agenouille, avec la lenteur d'un mécanisme qu'on n'a pas graissé, et pose son front sur ses mains jointes.",
        { if: { has: "monde:a1:ugolin_vu" }, text: "Le colosse n'est pas entré. Par le porche ouvert, tu vois son ombre sur le parvis, immobile, large comme une porte de grange." },
        "L'église est presque vide. Deux bancs derrière lui, il y a une place.",
      ],
      choices: [
        { label: "T'agenouiller derrière lui, et écouter ce qu'il dit à ses mains", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { has: "a1:o_vu" }, v: -15 }] }, win: { fx: { flag: "a1:o_priere", clue: "j_tousse", ep: ["perso", 600] }, to: "A1o_priere" }, lose: { fx: { flag: "a1:o_vu" }, to: "A1o_priere_ko" } },
        { label: "Allumer un cierge à côté du sien, et lui parler", to: "A1o_approche_eglise" },
        { label: "Rester au fond, et attendre qu'il ressorte", to: "A1o_sablier" },
      ] },
    A1o_priere: { act: "I", title: "Ce qu'on dit aux morts", place: "ferronniers", ambiance: "temple",
      text: [
        "Il parle. Très bas, les lèvres contre ses pouces, à quelqu'un qui est dans le cierge.",
        "« … une sottise, Perrine. Tu me l'aurais défendue. Tu m'aurais dit : *Symphorien, tu graisses, tu remontes, tu te tais ; ton père a fait pareil et il est mort dans son lit.* » Un souffle, qui pourrait être un rire. « Seulement, ton père à toi ne l'a pas entendu tousser, l'hiver. Quarante ans que je l'entends, par le plancher. Une petite toux sèche, en janvier. J'ai monté du miel, une année. Je l'ai laissé devant la porte. Le pot est redescendu vide, par le tour, avec un brin de laine noué à l'anse. Je l'ai toujours. »",
        "Le cierge grésille.",
        "« Et ils veulent que je pose leur moulin à paroles par-dessus. Que je visse, que je règle, et qu'on mure le reste. Ils m'ont dit : *après la Nuit, Balancier, vous n'aurez plus à monter.* » Les mains jointes se serrent. « Je n'ai pas demandé ce qu'il deviendrait. J'ai eu peur de la réponse. J'ai honte, Perrine. Alors je vais faire une sottise. »",
        "Il se signe. Tu as le temps de baisser le front avant qu'il se relève.",
      ],
      choices: [
        { label: "Le laisser sortir, et le rejoindre sous le porche", to: "A1o_approche_eglise" },
        { label: "Rester à genoux : tu en sais assez, il ne faut pas l'effaroucher", to: "A1o_sablier" },
      ] },
    A1o_priere_ko: { act: "I", title: "Un banc qui craque", place: "ferronniers", ambiance: "temple",
      text: [
        "Le prie-Dieu craque sous ton genou. Ce n'est rien, un bruit d'église. Mais le vieil homme a les nerfs d'un lièvre : ses épaules se figent, sa prière s'arrête au milieu d'un mot, et il reste ainsi, sans se retourner, à attendre.",
        "Puis il se signe, très vite, ramasse son parapluie, et gagne la porte du côté, celle des baptêmes, sans avoir éteint ni regardé.",
      ],
      choices: [{ label: "Sortir derrière lui", to: "A1o_sablier" }] },
    A1o_approche_eglise: { act: "I", title: "Deux cierges", place: "ferronniers", ambiance: "temple",
      text: [
        "Tu prends un cierge au tronc, tu l'allumes au sien, et tu le plantes à côté. C'est une chose qu'on fait, dans les églises, entre inconnus. Cela n'engage à rien. Il te regarde tout de même, par-dessus ses bésicles, avec des yeux d'un bleu lavé, fatigués, où la méfiance et l'envie de parler se battent à visage découvert.",
        { if: { has: "a1:o_vu" }, text: "Il te reconnaît. Tu es la personne de la vitre. Sa main se referme sur le manche du parapluie." },
      ],
      choices: [
        { label: "« La mère Gervaise dit que vous ne dormez plus. Elle s'inquiète. »", if: { has: "a1:o_lavoir" }, test: { dom: "social", diff: 10, label: "Social", help: [{ if: { has: "a1:o_vu" }, v: -15 }, { if: { has: "a1:o_priere" }, v: 15 }] }, win: { fx: { flag: "monde:a1:remonteur_parle", ep: ["seance", 1500] }, to: "A1o_parle" }, lose: { fx: { flag: "a1:o_vu" }, to: "A1o_approche_ko" }, hide: { not: { has: "a1:o_lavoir" } } },
        { label: "« Il y a un homme sur le parvis qui vous attend. Je ne suis pas avec lui. »", if: { has: "monde:a1:ugolin_vu" }, test: { dom: "social", diff: 10, label: "Social", help: [{ if: { has: "a1:o_vu" }, v: -15 }, { if: { has: "a1:o_priere" }, v: 15 }] }, win: { fx: { flag: "monde:a1:remonteur_parle", ep: ["seance", 1500] }, to: "A1o_parle" }, lose: { fx: { flag: "a1:o_vu" }, to: "A1o_approche_ko" }, hide: { not: { has: "monde:a1:ugolin_vu" } } },
        { label: "« Maître Balancier, je viens de la part de gens qui ne sont d'aucune des trois clefs. »", test: { dom: "social", diff: -5, label: "Social", help: [{ if: { has: "a1:o_vu" }, v: -15 }, { if: { has: "a1:o_priere" }, v: 15 }] }, win: { fx: { flag: "monde:a1:remonteur_parle", ep: ["seance", 1500] }, to: "A1o_parle" }, lose: { fx: { flag: "a1:o_vu" }, to: "A1o_approche_ko" } },
      ] },
    A1o_approche_ko: { act: "I", title: "Un parapluie", place: "ferronniers", ambiance: "temple",
      text: [
        "« Je ne vous connais pas. » Il l'a dit trop haut ; un sacristain lève la tête. Le vieil homme recule d'un pas, son parapluie entre vous deux, pointe basse, tenu à deux mains comme une pique.",
        "« Dites à ceux qui vous envoient que j'ai compris. Qu'on me laisse seulement jusqu'à demain. » Sa voix tremble, et ce n'est pas l'âge. « Jusqu'à demain. C'est tout ce que je demande. »",
        "Il s'en va par la porte des baptêmes. Il t'a pris{e} pour un autre, ou pour l'envoyé{e} d'un autre, et rien de ce que tu dirais maintenant ne te ferait changer de camp à ses yeux.",
      ],
      choices: [{ label: "Le suivre encore, de très loin", to: "A1o_sablier" }] },

    // ------------------------------------------------------------ noon at the Sablier
    A1o_sablier: { act: "I", title: "Au Sablier", place: "heures", branch: [
      { if: PARLE(), to: "A1o_apresmidi" }, { to: "A1o_sablier_salle" }] },
    A1o_sablier_salle: { act: "I", title: "Au Sablier", place: "heures",
      fx: { until: 12 },
      text: [
        "Le Sablier fait l'angle de la place aux Heures. C'est le cabaret des horlogers, et cela se sent : on y mange à midi sonnant, on y paie à la demie, et le patron retourne sur chaque table, quand on s'assied, un sablier d'un quart d'heure, afin que nul ne s'éternise sur une chopine.",
        "Le vieil homme a sa table, au fond, sous une horloge de bois. Il s'y assied le dos au mur. On lui apporte sans qu'il demande un bouillon, un œuf, un verre d'eau rougie. Autour de lui, la salle est pleine de confrères en tablier vert, qui parlent boutique ; et il y a, entre sa table et les autres, un vide d'une largeur de chaise que personne ne franchit.",
        { if: { has: "monde:a1:ugolin_vu" }, text: "Par la vitre, tu vois le colosse traverser la place et s'adosser à la fontaine aux quarante cadrans, face à la porte. Il croise les bras." },
        "Le sablier du vieil homme coule. Il te reste un quart d'heure, et une salle entière qui regarde.",
      ],
      choices: [
        { label: "T'asseoir à sa table, franchement, en commandant un bouillon", test: { dom: "social", diff: -10, label: "Social", help: [{ if: { has: "a1:o_vu" }, v: -10 }, { if: { has: "a1:o_priere" }, v: 20 }, { if: { has: "a1:o_lavoir" }, v: 10 }] }, win: { fx: { flag: "monde:a1:remonteur_parle", ep: ["seance", 1500] }, to: "A1o_parle" }, lose: { fx: { flag: "a1:o_vu" }, to: "A1o_sablier_ko" } },
        { label: "Lui faire porter un billet par la servante, plié dans la serviette", test: { dom: "savoir", diff: 0, label: "Savoir", help: [{ if: { has: "a1:o_priere" }, v: 20 }] }, win: { fx: { flag: "monde:a1:remonteur_parle", ep: ["seance", 1500] }, to: "A1o_parle_billet" }, lose: { to: "A1o_sablier_ko" } },
        { label: "Envoyer Fifrelin lui vendre des allumettes, avec trois mots à l'oreille", if: { present: "fifrelin" }, test: { dom: "social", diff: 15, label: "Social" }, win: { fx: { flag: "monde:a1:remonteur_parle", ep: ["seance", 1500], conf: { fifrelin: 10 } }, to: "A1o_parle_billet" }, lose: { to: "A1o_sablier_ko" }, hide: { not: { present: "fifrelin" } } },
        { label: "Ne pas l'approcher : le regarder manger, et voir qui d'autre le regarde", fx: { ep: ["perso", 200] }, to: "A1o_apresmidi" },
      ] },
    A1o_sablier_ko: { act: "I", title: "Un sablier renversé", place: "heures",
      text: [
        "Il se lève si brusquement que son sablier roule sur la table et tombe. Toute la salle se tait.",
        "« Je n'ai rien à dire à personne. » Il a parlé pour la salle, pour la vitre, pour la fontaine au-delà de la vitre. Il jette une pièce près de l'œuf qu'il n'a pas touché. « À personne ! »",
        "Il sort. Les tabliers verts suivent des yeux son bonnet de drap, puis reviennent vers toi, tous ensemble, avec cette curiosité sans bienveillance des gens de guilde pour ce qui n'en est pas. Le patron ramasse le sablier et le retourne sur ta table.",
      ],
      choices: [{ label: "Payer, et sortir", to: "A1o_apresmidi" }] },

    // ------------------------------------------------------------ he speaks
    A1o_parle: { act: "I", title: "Quatre mots sous un porche", place: "ferronniers",
      text: [
        "Il te regarde longtemps. Quelque chose cède, dans sa figure, comme un ressort trop tendu qu'on lâche d'un cran.",
        "« Pas ici. » Il te prend le coude, d'une main qui tremble et qui serre, et te tire à l'écart, sous un porche, derrière un pilier. Il sent le tabac froid et l'huile fine. « Vous êtes à l'homme aux gants gris ? » Tu ne dis ni oui ni non. Il hoche la tête, comme si c'était une réponse. « Alors c'est à vous. Il m'avait dit : *le jour où vous ne pourrez plus, il viendra quelqu'un.* Je ne peux plus. »",
        "Il regarde par-dessus ton épaule, vers la rue.",
        "« Ce soir. Neuf heures. Chez moi, par la cour, la porte sera poussée. Venez tous, si vous êtes plusieurs : ce que j'ai à remettre, je veux le remettre devant témoins, à des gens qui ne soient ni du Fer, ni de la Cendre, ni du Sang. » Sa main te lâche. « Et dites à votre monsieur que je regrette. J'aurais voulu lui dire adieu là-haut. Il comprendra. »",
        "« Adieu à qui ? »",
        "Mais il a déjà repris son parapluie, et il s'en va le long du mur, vite, en homme qui a dit quatre mots de trop et s'en trouve plus léger.",
      ],
      fx: { clue: "c_adieu" },
      choices: [{ label: "Le laisser aller", to: "A1o_apresmidi" }] },
    A1o_parle_billet: { act: "I", title: "Un coin de serviette", place: "heures",
      text: [
        "Il lit. Ou il écoute. Tu le vois de loin : sa cuiller s'arrête, ses bésicles se lèvent, et son regard fait le tour de la salle, table après table, jusqu'à te trouver.",
        "Il ne fait aucun signe. Il finit son bouillon, jusqu'à la dernière cuillerée, avec une lenteur d'homme qui réfléchit en mangeant. Puis il tire un crayon de sa houppelande, écrit quelque chose au revers de sa note, la plie sous le sablier, paie, et sort.",
        "Tu laisses passer un moment. Sous le sablier, d'une écriture fine et tremblée : *Ce soir, neuf heures, chez moi, par la cour. Venez tous. À des gens qui ne soient ni du Fer, ni de la Cendre, ni du Sang, je remettrai ce que j'ai. Brûlez ceci.*",
        "Tu le brûles à la chandelle du comptoir, en allumant ta pipe ou en faisant semblant.",
      ],
      choices: [{ label: "Payer ton bouillon, et regagner la place", to: "A1o_apresmidi" }] },

    // ------------------------------------------------------------ the afternoon
    A1o_apresmidi: { act: "I", title: "L'après-midi", place: "heures", hub: true, backName: "la place aux Heures",
      fx: { until: 14 },
      text: [
        { first: true, text: "Le vieil homme est rentré chez lui. Tu l'as vu remonter la rue Saint-Éloi, tourner dans l'impasse, donner ses deux tours. Les volets de l'étage sont clos ; derrière, de nouveau, quelqu'un marche." },
        { first: true, if: PARLE(), text: "Neuf heures, par la cour. Il reste une demi-journée à tuer, et la Douairière dit qu'un œil qui n'a rien à regarder doit regarder autour." },
        { first: true, if: { not: PARLE() }, text: "Il n'a rien dit. Il a peur de toi comme du reste, et il se terre. Il reste une demi-journée, et la Douairière dit qu'on apprend autant d'un homme par ceux qui l'attendent que par lui." },
        { again: true, text: "La place aux Heures, sa fontaine aux quarante cadrans. L'après-midi s'avance." },
        { if: { has: "monde:a1:ugolin_vu" }, text: "Le colosse a quitté la fontaine. Il descend sans se presser vers la rue des Ferronniers." },
      ],
      choices: [
        { label: "Filer le colosse, pour voir où couche une armoire", to: "A1o_ugolin", if: { has: "monde:a1:ugolin_vu" }, hide: { any: [{ not: { has: "monde:a1:ugolin_vu" } }, { seen: "A1o_ugolin" }] } },
        { label: "Retourner à l'impasse, et reconnaître cette plaque de fonte", to: "A1o_regard", hide: { any: [{ has: "monde:a1:egouts" }, { seen: "A1o_regard" }] } },
        { label: "Faire le tour des écrivains publics de la rue Saint-Éloi", to: "A1o_ecrivain", hide: { seen: "A1o_ecrivain" } },
        { label: "Reprendre ton poste dans l'impasse jusqu'au soir", to: "A1o_guet", big: true },
      ] },
    A1o_ecrivain: { act: "I", title: "L'écrivain public", place: "ferronniers",
      text: [
        "Ils sont trois, rue Saint-Éloi, assis dans des guérites de planches, à vendre de l'orthographe aux amoureux et aux plaideurs. Tu fais les trois. Un vieil homme inquiet, qui a quelque chose à dire et personne à qui le dire, finit toujours par l'écrire ; et ceux qui écrivent mal le font écrire.",
        "Le troisième, un bossu aux doigts noirs, connaît Maître Balancier. « Il sait ses lettres mieux que moi. Il n'est jamais venu pour écrire. » Il taille sa plume. « Il est venu hier pour acheter. Du papier fort, de celui que prennent les graveurs, une main entière. Et de la mine de plomb, en bâton. J'ai demandé : *vous dessinez, à présent ?* Il m'a répondu : *je prends des preuves.* Et il a ri d'une façon qui m'a ôté l'envie d'en demander plus. »",
      ],
      fx: { clue: "s_papier", ep: ["perso", 300] },
      choices: [{ back: "A1o_apresmidi" }] },

    // ------------------------------------------------------------ the colossus
    A1o_ugolin: { act: "I", title: "Filer une armoire", place: "ferronniers",
      text: [
        "Suivre cet homme est la chose la plus facile du monde, et la plus désagréable. Il dépasse la foule d'une tête. Il ne se retourne jamais. Il marche au milieu de la chaussée, et les charrettes font le détour.",
        "Il descend la rue des Ferronniers sous les cent enseignes. On le salue ici, de loin, de ce salut qu'on doit au chien d'un homme riche. Il ne répond pas.",
        "Devant l'hôtel du Syndic, une haute maison à bossages qui porte sur sa porte un marteau d'or, il passe sans ralentir. Il prend la venelle d'à côté.",
      ],
      choices: [
        { label: "T'engager dans la venelle derrière lui", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { present: "fifrelin" }, v: 10 }] }, win: { fx: { clue: "r_marteau_or", ep: ["perso", 700] }, to: "A1o_ugolin_ok" }, lose: { fx: { flag: "monde:a1:ugolin_connait", pv: -3 }, to: "A1o_ugolin_ko" } },
        { label: "Rester au coin : tu sais à quelle maison il appartient", fx: { clue: "r_marteau_or", ep: ["perso", 300] }, back: "A1o_apresmidi" },
      ] },
    A1o_ugolin_ok: { act: "I", title: "La porte de service", place: "ferronniers",
      text: [
        "La venelle longe le flanc de l'hôtel. À mi-chemin, une porte basse, pour les livraisons. Le colosse y frappe du plat de la main, une fois. On lui ouvre aussitôt : quelqu'un attendait derrière.",
        "Tu es dans un renfoncement, à dix pas, entre deux tonneaux d'eau de pluie. Tu vois le valet qui ouvre, sa livrée prune, et tu l'entends.",
        "« Monsieur vous fait dire que c'est pour ce soir. Pas avant huit heures : il veut que la réception soit finie et qu'on l'ait vu monter en voiture. » Le valet tend quelque chose, un pli. « Et ceci, à porter au prévôt, par un gamin, à huit heures juste. Pas vous. Un gamin. »",
        "Le colosse prend le pli entre deux doigts, comme une chose sale. Il n'a rien dit. La porte se referme sur lui.",
        "Tu restes entre tes tonneaux, avec dans la bouche un goût de fer. Ce soir. Huit heures. Et un billet pour le prévôt, écrit d'avance.",
      ],
      fx: { clue: "r_billet", flag: "a1:o_sait_ce_soir" },
      choices: [{ label: "Remonter, vite", back: "A1o_apresmidi" }] },
    A1o_ugolin_ko: { act: "I", title: "« Tu me suis »", place: "ferronniers",
      text: [
        "La venelle est vide. Tu fais trois pas, et une main descend sur ta nuque.",
        "Il était dans une porte. Un homme de cette taille, dans une porte, et tu ne l'as pas vu : la Douairière ne te le pardonnerait pas. La main te soulève. Tes talons quittent le pavé. Il te tourne vers lui, sans effort, comme on regarde une pièce qu'on vient de forger.",
        "« Tu me suis. » La voix est un souffle rauque, sans colère. Ses yeux sont petits, clairs, presque doux. « Depuis le marché. J'ai rien dit, parce que j'avais à faire. » Il te repose. Sa main reste sur ton épaule, et son pouce appuie, à un endroit entre le cou et la clavicule où tu ignorais avoir un nerf. « Je frappe sur du fer tout le jour. Les gens, c'est plus mou. Va-t'en. »",
        "Tu t'en vas, le bras mort jusqu'au coude. Il a vu ta figure de près. Il l'a regardée comme il regarde tout : en cherchant où frapper.",
      ],
      fx: { meet: "ugolin", clue: "r_marteau_or" },
      choices: [{ label: "Remonter vers la place, en te tenant l'épaule", back: "A1o_apresmidi" }] },

    // ------------------------------------------------------------ evening watch
    A1o_guet: { act: "I", title: "Le poste du soir", place: "poids",
      fx: { until: 18 },
      text: [
        "Tu reprends l'encoignure de la porte condamnée. Le soleil a quitté l'impasse depuis longtemps ; il n'en reste qu'une bande jaune, très haut, sur le rempart.",
        "Les heures de guet sont les plus longues du métier, et les vieux disent que ce sont elles qui font les bons yeux. Tu regardes. Une servante vide un seau. Un chat traverse. La veuve Tournemine allume sa chandelle, et son petit miroir prend feu.",
        { if: { has: "monde:a1:ugolin_vu" }, text: "À six heures, il revient. Il se plante au coin, sous la fenêtre de la veuve, et il regarde la maison du fond. Tu comptes : un quart d'heure. Il s'en va. À sept heures, il revient, et repart. Il ne se cache pas. Il a l'air d'un homme qui vérifie qu'une pièce est toujours au feu." },
        { if: { has: "a1:o_sait_ce_soir" }, text: "Tu sais ce qu'il attend. Huit heures. Tu as pensé à frapper chez le vieil homme, à lui crier de ne pas ouvrir ; tu l'as fait, à la brune, trois coups à la porte de la cour. Rien n'a bougé. Il n'ouvre plus à personne avant neuf heures, il l'a décidé, et un homme qui a peur tient mieux ses décisions qu'un brave." },
        "À sept heures et demie, il faut choisir : rester, ou courir chercher les deux autres, qui ne savent rien de tout cela et arriveront à neuf.",
      ],
      choices: [
        { label: "Rester jusqu'au bout, les yeux sur cette porte", to: "A1o_huit" },
        { label: "Courir à la Clef Tordue prévenir la Douairière", to: "A1o_course" },
      ] },
    A1o_huit: { act: "I", title: "Huit heures", place: "poids", ambiance: "nuit",
      text: [
        "Huit heures sonnent, avec leur petit retard entre le septième coup et le dernier.",
        "L'impasse est noire. La fenêtre du fond est jaune. Tu regardes cette porte comme tu n'as jamais rien regardé.",
        "Tu ne vois rien. C'est ce que tu te répéteras ensuite, et ce sera vrai. Tu surveillais l'impasse ; la maison du Remonteur a une cour, et la cour a une porte sur la venelle du rempart, que tu ne tiens pas de ton encoignure. À la demie, la lumière de l'étage n'a pas bougé. Personne n'est entré par-devant. Personne n'est sorti.",
        "Vers neuf heures moins le quart, des pas dans la venelle de derrière, lourds, qui s'éloignent sans hâte. Puis plus rien, que la chandelle de la veuve, et là-haut cette lumière jaune, immobile, patiente, d'une lampe que plus personne ne mouche.",
        "Tu as gardé la mauvaise porte. Tu ne le sais pas encore.",
      ],
      fx: { ep: ["perso", 300] },
      choices: [{ label: "Attendre les deux autres dans l'ombre des contrepoids", to: "A1c_rdv", big: true }] },
    A1o_course: { act: "I", title: "La descente", place: "basfonds",
      text: [
        "Tu descends la ville en courant : la rue Saint-Éloi, le marché vide, le Pont-aux-Clefs, où le sergent a allumé sa lanterne. La Clef Tordue a ses volets mis.",
        "La Douairière t'écoute debout, sans t'interrompre, en essuyant un verre. Quand tu as fini, elle pose le verre.",
        "« Tu as bien fait de venir, et tu aurais bien fait de rester. C'est le genre de soir. » Elle décroche son châle. « Les deux autres sont déjà partis pour là-haut, chacun de son côté ; je ne peux plus les rappeler. Remonte. Sois-y avant eux. Et s'il y a du guet dans cette impasse à neuf heures, mes enfants, souvenez-vous que la maison a deux portes, et qu'il vaut mieux en sortir par une troisième. »",
        "Elle te regarde un instant, comme on regarde quelqu'un pour s'en souvenir. « Va. »",
        "Tu remontes. Neuf heures vont sonner quand tu atteins les contrepoids, hors d'haleine. La lumière de l'étage est jaune, et ne bouge pas.",
      ],
      fx: { ep: ["perso", 300], flag: "a1:o_prevenu" },
      choices: [{ label: "Attendre les deux autres dans l'ombre des contrepoids", to: "A1c_rdv", big: true }] },
  },

  extras: {
    clues: {
      c_visiteur: { rev: "C", text: "La veuve Tournemine : un monsieur en noir, à gants gris, a visité deux fois le Remonteur la semaine d'avant. En partant, il lui a serré la main « des deux mains, comme aux enterrements », et le vieil homme pleurait." },
      j_voix: { rev: "J", text: "Chez l'apothicaire, le Remonteur demande de quoi « dormir sans rêver d'une voix »." },
      j_tousse: { rev: "J", text: "Le Remonteur, priant sa défunte : « Quarante ans que je l'entends tousser, l'hiver, par le plancher. » Un pot de miel laissé devant la porte est redescendu vide « par le tour, avec un brin de laine noué à l'anse »." },
      r_ombre: { rev: "R", text: "Un colosse à tête rase, l'oreille gauche en chou, tablier de cuir sous le manteau, suivait le Remonteur à vingt pas, sans se cacher." },
      c_adieu: { rev: "C", text: "Le Remonteur connaissait l'homme aux gants gris, qui lui avait promis : « Le jour où vous ne pourrez plus, il viendra quelqu'un. » Il regrette de n'avoir pu « lui dire adieu là-haut »." },
      s_papier: { rev: "S", text: "La veille de sa mort, le Remonteur a acheté du papier de graveur et de la mine de plomb : « Je prends des preuves. »" },
      r_marteau_or: { rev: "R", text: "Le colosse qui suivait le Remonteur est de la maison du Syndic : il entre à l'hôtel au marteau d'or par la porte de service." },
      r_billet: { rev: "R", text: "À la porte de service du Syndic, un valet au colosse : « C'est pour ce soir, pas avant huit heures. » Et un pli à faire porter au prévôt « par un gamin, à huit heures juste »." },
    },
  },
};
