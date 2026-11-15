// Lot iii4 of "Le Trésor des Taiseurs": the end of Act III. The news of the city reaches Orle, Corisande Marrel comes
// up to bargain (or Lothaire lays an ambush), the choices about Gildas, Tibère, Lison and Salomé, the Register read
// (three leaves or more), the side quests of the mountains (the frozen lake, the queen's mine, the ransomed village,
// the vintner's cask) and the way down to Salvèze (horse, raft or the old salt road), exit to IV_debut.

var P = {};
var X = { people: {}, items: {}, enemies: {}, clues: {}, veils: {}, quests: [], routes: [], places: {}, regions: {}, events: {} };

// ==================================================================== the news reaches Orle
Object.assign(P, {
  IIID_nouvelles: { act: "III", title: "Les nouvelles de la ville", place: "orle", hub: true, backName: "la place d'Orle et ses nouvelles",
    text: [
      { first: true, text: "Les nouvelles montent à Orle un jour de marché, toutes à la fois, par la route qui suit la rivière. D'abord un cavalier du Conseil, la casaque bleue crottée jusqu'aux épaules, sur un cheval qui fume et boite de l'antérieur gauche. Puis trois chariots bâchés qui s'arrêtent sur le pont de pierre, chargés de femmes, d'enfants, de ballots et de chaises retournées. Puis la cloche de l'église sonne à contretemps : le sacristain veut savoir, lui aussi." },
      { first: true, text: "Sur la place, les vignerons posent leurs fagots de sarments pour écouter. Les phrases passent d'un groupe à l'autre et changent en route. Le duc d'Aveline a franchi la frontière ; le duc d'Aveline masse ses troupes ; la Banque a fermé ses greniers ; on se bat dans Salvèze pour du pain ; le Conseil siège en cachette. Une femme pleure, le front contre l'auge de la fontaine. À l'écart, un homme en noir paie sa soupe en liards, qu'il compte trop vite." },
      { first: true, text: "Le miroir pèse dans ta poche depuis le Mont. Tu écoutes la place, et tu {{miroir#iiid_m_fuite|prends ces nouvelles avec l'attention du métier, pour savoir ce qu'elles valent|accueilles la guerre avec un soulagement honteux : elle remplit ta tête, et la nuit des Lanternes y trouve moins de place}}." },
      { first: true, with: "tibere", text: "Tibère a déjà la main en visière vers les chariots. « Des gens des Teinturiers, dit-il. Je reconnais les bâches, elles sont teintes au pastel. » Il dit le nom du quartier en regardant ses bottes. Sa fille y loge." },
      { first: true, with: "lison", text: "Lison regarde le cheval du courrier, qui tremble sur ses jambes. « Il a fait la route en deux jours. Quelqu'un paie cher pour que la nouvelle arrive avant les gens. »" },
      { first: true, with: "salome", text: "Salomé s'est accoudée au parapet du pont. L'Orle roule en crue, couleur de café au lait, chargée de branches. « Elle descend vite, ce printemps, dit-elle. Elle nous descendrait vite, nous aussi. »" },
      { first: true, with: "gildas", text: "Frère Gildas fait le signe des moines du Mont, deux doigts sur les lèvres puis sur la poitrine, et reste contre le mur de la halle, la capuche basse." },
      { again: true, text: "La place d'Orle, ses vignerons qui parlent bas, les chariots de Salvèze rangés le long du lavoir. Chaque charrette qui monte apporte une phrase de plus, et la place la répète jusqu'au soir." },
      { again: true, after: "IIID_cor_depart", text: "Les attelages de la Banque sont repartis vers le bas pays. Leurs roues ferrées ont laissé dans la boue de la place deux ornières profondes, que les enfants sautent à pieds joints." },
    ],
    choices: [
      { label: "Le courrier du Conseil, à l'auberge du Pressoir", hide: { seen: "IIID_courrier" }, to: "IIID_courrier" },
      { label: "Les chariots de Salvèze, sur le pont", hide: { seen: "IIID_refugies" }, to: "IIID_refugies" },
      { label: "Le déserteur enfermé dans le cellier du bailli", hide: { seen: "IIID_deserteur" }, to: "IIID_deserteur" },
      { label: "L'homme en noir qui compte ses liards", hide: { seen: "IIID_clerc" }, to: "IIID_clerc" },
      { label: "Les attelages aux armes de la Banque, sur la route d'en bas", big: true, if: { count: [{ seen: "IIID_courrier" }, { seen: "IIID_refugies" }, { seen: "IIID_deserteur" }, { seen: "IIID_clerc" }], min: 2 }, why: "Écoute d'abord ce que la place raconte.", hide: { seen: "IIID_corisande_arrivee" }, to: "IIID_corisande_arrivee" },
      { label: "Tibère, seul au bout du pont", hide: { seen: "IIID_tibere" }, to: "IIID_tibere" },
      { label: "Frère Gildas, à la chapelle des Vignerons", hide: { seen: "IIID_gildas" }, to: "IIID_gildas" },
      { label: "La lettre qu'on a laissée pour toi à l'auberge", hide: { seen: "IIID_gildas_lettre" }, to: "IIID_gildas_lettre" },
      { label: "Lison, sur la grève sous le pont", hide: { seen: "IIID_lison" }, to: "IIID_lison" },
      { label: "Le batelier qui te cherche, un paquet de dentelle à la main", hide: { seen: "IIID_lison_lettre" }, to: "IIID_lison_lettre" },
      { label: "Salomé, qui mesure la rivière", hide: { seen: "IIID_salome" }, to: "IIID_salome" },
      { label: "Les deux moines descendus du Mont", hide: { seen: "IIID_moines" }, to: "IIID_moines" },
      { label: "Étaler les feuillets du Registre sur une table, et les faire lire", if: { relics: { min: 1 } }, why: "Il te faut au moins un feuillet en main.", hide: { any: [{ seen: "IIID_registre" }, { not: { seen: "IIID_corisande_arrivee" } }] }, to: "IIID_registre" },
      { label: "Préparer la descente vers Salvèze", big: true, if: { has: "iiid:nuit" }, why: "La Banque est encore dans Orle.", hide: { not: { seen: "IIID_corisande_arrivee" } }, to: "IIID_veille" },
      { back: "III_hub" },
    ] },

  IIID_courrier: { act: "III", title: "Le courrier du Conseil", place: "orle", backName: "l'auberge du Pressoir",
    text: [
      "L'auberge du Pressoir sent le moût aigre et la laine mouillée. Le courrier du Conseil s'est assis près du feu sans ôter ses bottes. Il a vingt ans, des mains d'enfant gercées par les rênes, et une sacoche de cuir bouilli qu'il garde sur les genoux. Le fermoir porte le plomb aux deux tours de la République. Il s'appelle Gauvin, il le dit à l'aubergiste en commandant du vin chaud, et il ajoute qu'il repart à l'aube.",
      "« Trois plis, dit-il à qui veut l'entendre. Un pour le bailli, un pour l'abbé du Mont, et le troisième, {{oreille#iiid_gauvin|je le porte là où on me dit de le porter|je dois le remettre ici même à une dame de la Banque qui arrive, et on ne m'a pas payé depuis deux mois}}. » Il boit. « On se bat sur le pont aux Changes. On dit que le duc est à six jours de marche. Moi, je dis qu'on dit beaucoup. »",
      { with: "tibere", text: "Tibère s'est assis à la table voisine, le dos au mur, comme au Guet. Il regarde la sacoche, puis le courrier, puis toi. Il connaît les règles des courriers : le plomb se brise une fois, et le porteur répond du pli sur sa solde." },
      { if: { has: "metier:parole" }, text: "Les courriers fatigués parlent volontiers à qui leur paie à boire. Tu en as fait parler plus d'un, sur le quai, pour savoir où un colis s'était égaré." },
    ],
    fx: { meet: "iiid_gauvin" },
    choices: [
      { label: "Lui offrir de quoi payer ses deux mois, en échange d'un regard sur les plis", hide: { not: { voile: "iiid_gauvin" } }, fx: { gold: -3, conf: { tibere: 2 } }, to: "IIID_courrier_lettres" },
      { label: "Lui payer à boire, et le faire parler de ses plis", test: { dom: "social", diff: 0, label: "Faire parler un courrier fatigué", help: [{ if: { has: "metier:parole" }, v: 15 }, { with: "tibere", v: 10 }] },
        win: { to: "IIID_courrier_lettres" }, lose: { fx: { set: { iiid_courrier: "rate" } }, to: "IIID_courrier_lettres" } },
      { label: "Attendre qu'il s'endorme, et ouvrir la sacoche sans briser le plomb", test: { dom: "discretion", diff: -10, label: "Ouvrir un pli sans laisser de trace", help: [{ if: { item: "crochets" }, v: 10 }, { if: { has: "metier:mains" }, v: 15 }, { with: "lison", v: 5 }] },
        win: { to: "IIID_courrier_lettres" }, lose: { fx: { set: { iiid_courrier: "rate" } }, to: "IIID_courrier_lettres" } },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: 0, label: "Tibère parle relais et soldes avec le courrier" },
        win: { fx: { conf: { tibere: 3 } }, to: "IIID_courrier_lettres" }, lose: { fx: { set: { iiid_courrier: "rate" } }, to: "IIID_courrier_lettres" } },
      { label: "Laisser le courrier à son vin", back: "IIID_nouvelles" },
    ] },

  IIID_courrier_lettres: { act: "III", title: "Trois plis au plomb", place: "orle", backName: "l'auberge du Pressoir",
    text: [
      { if: { is: { iiid_courrier: "rate" } }, text: "Gauvin se réveille à moitié, ou se méfie à moitié, et il serre la sacoche contre lui. Tu n'as que le temps de voir le premier pli, celui de l'abbé, que le plomb a mal tenu. Les deux autres restent fermés. Il te regarde de travers jusqu'à ce que tu quittes la salle.",
        else: "La sacoche s'ouvre sur trois plis. Le plomb du premier, celui de l'abbé, a mal tenu pendant la route. Les deux autres se décollent à la vapeur de la bouilloire, et se recollent de même." },
      "Le pli de l'abbé Dom Évrard porte le sceau du Conseil. *Le Conseil des Comptoirs prie le Mont-Taciturne de prêter à la République l'argenterie de son trésor, contre reconnaissance, pour la défense commune.* La signature est celle du secrétaire. Le prêt est sans terme.",
      { if: { not: { is: { iiid_courrier: "rate" } } }, text: "Le pli du bailli d'Orle est de la main même du prévôt Delisle, une écriture penchée de vieil homme soigneux. *Ne levez aucune milice : la République négocie, et des hommes en armes sur l'Orle seraient pris pour une provocation. {{loupe#iiid_ponts|Gardez vos vignerons à leurs vignes|Au premier jour de mai, laissez les ponts de l'Orle sans garde, de jour comme de nuit}}. — H. D.* Le sceau est le sceau privé du prévôt, une tour sur une vague." },
      { if: { not: { is: { iiid_courrier: "rate" } } }, text: "Le troisième pli est adressé *à Madame Corisande Marrel, à son arrivée au Pressoir, Orle*. Le Conseil y écrit en termes polis : *Le Conseil prend acte de vos efforts. {{loupe#iiid_saisie|Il compte sur la Maison Marrel pour l'échéance de la Saint-Jean|Si la Maison Marrel n'apporte rien avant la Saint-Jean, le Conseil votera la saisie de ses réserves d'or pour payer le duc}}.*" },
      { with: "tibere", text: "Tibère lit par-dessus ton épaule, en remuant les lèvres. « Une dame de la Banque qui arrive ici, dit-il. À Orle. Elle a dû partir avant le courrier. »" },
    ],
    fx: { flag: "iiid:courrier" },
    choices: [
      { label: "Garder la lettre du prévôt, et laisser les deux autres dans la sacoche", hide: { is: { iiid_courrier: "rate" } }, fx: { item: "iiid_lettre_prevot", flag: "iiid:lettre_prevot", fac: { conseil: -3 } }, tag: "Le courrier en répondra", stain: true, back: "IIID_nouvelles" },
      { label: "Tout refermer proprement, et rendre la sacoche à son sommeil", back: "IIID_nouvelles" },
    ] },

  IIID_refugies: { act: "III", title: "Les chariots des Teinturiers", place: "orle", backName: "le pont d'Orle",
    text: [
      "Les trois chariots sont tirés par des bœufs loués à la journée, et le loueur attend sur le pont, les bras croisés, qu'on le paie. Sous les bâches teintes au pastel, une vingtaine de personnes : des teinturiers aux mains bleues jusqu'au coude, des lavandières, une grand-mère qui tient une poule dans son tablier. Une femme d'une trentaine d'années descend la première et parle pour tous. Elle s'appelle Blandine.",
      "« On a fermé les greniers du quai au Blé, dit-elle. La Banque a mis ses gens devant les portes, avec des gourdins, et un placard qui dit *réserves de la République*. Le pain est à six liards la livre. Les gens ont brûlé la halle aux Draps. Le Guet a chargé sur le pont aux Changes. {{oreille#iiid_blandine|On est partis parce qu'on avait peur pour les enfants|Mon homme a forcé le grenier Marrel avec les autres, le Guet a son nom, et on est partis la nuit même}}. »",
      "Elle porte sur l'épaule un sac de grain à moitié plein, noué d'une ficelle rouge. Le sac est {{pie#iiid_sac|un sac de seigle comme on en vend partout|un sac de toile fine marqué au besant des Marrel, sous la ficelle : le grain vient du grenier forcé}}.",
      { with: "tibere", text: "Tibère s'approche, le chapeau à la main, ce que tu lui vois faire pour la première fois. « La rue des Dames, dit-il. Une apprentie couturière, seize ans, Rosalie Gaucelm. » Blandine réfléchit. « La petite Gaucelm ? {{oreille#iiid_rosalie|Elle va bien, je crois. Elle a quitté le quartier avant les troubles|Elle coud les livrées des nouveaux gardes de la Banque. La Banque la loge dans les combles de l'hôtel Marrel, et la nourrit}}. »" },
      { if: { has: "poids:dette" }, text: "Six liards la livre. Tu fais le compte malgré toi, comme tu faisais le compte de tes dettes sur le quai, et le chiffre te serre la gorge." },
    ],
    fx: { meet: "iiid_blandine", clue: "iiid_c_greniers" },
    choices: [
      { label: "Payer le loueur de bœufs pour eux (2 ducats)", fx: { gold: -2, flag: "iiid:blandine", fac: { hautes: 2 } }, back: "IIID_nouvelles" },
      { label: "Lui dire, à voix basse, de jeter le sac marqué avant que le bailli le voie", hide: { not: { voile: "iiid_sac" } }, fx: { flag: "iiid:blandine", ep: ["perso", 300] }, back: "IIID_nouvelles" },
      { label: "Les laisser à leur marchandage", back: "IIID_nouvelles" },
    ] },
});

Object.assign(X.people, {
  iiid_gauvin: { name: "Gauvin", qui: "Courrier du Conseil des Comptoirs.", aspect: { allure: "vingt ans, bottes aux pieds", signe: "sacoche de cuir scellée, mains gercées", voix: "bavarde" }, f: false, face: { age: "jeune", coif: "court" }, desc: "Courrier du Conseil des Comptoirs, vingt ans, deux mois de solde en retard." },
  iiid_blandine: { name: "Blandine", qui: "Lavandière du quartier des Teinturiers, partie de Salvèze avec ses deux enfants.", aspect: { allure: "trentaine, parle pour tous", signe: "sac de grain noué d'une ficelle rouge" }, f: true, face: { age: "adulte", coif: "foulard" }, desc: "Lavandière du quartier des Teinturiers, partie de Salvèze avec un sac de grain et deux enfants." },
});
Object.assign(X.items, {
  iiid_lettre_prevot: { name: "La lettre du prévôt au bailli d'Orle", kind: "document", form: "lettre", hand: "soignee", unique: true,
    text: "*Au bailli d'Orle, de la part du prévôt de la République.*\n\nNe levez aucune milice : la République négocie, et des hommes en armes sur l'Orle seraient pris pour une provocation. {{loupe#iiid_ponts|Gardez vos vignerons à leurs vignes|Au premier jour de mai, laissez les ponts de l'Orle sans garde, de jour comme de nuit}}.\n\n— H. D.",
    desc: "Une écriture penchée de vieil homme soigneux, et le sceau privé du prévôt Delisle : une tour sur une vague." },
});
Object.assign(X.clues, {
  iiid_c_ponts: { rev: "S", text: "Le prévôt Delisle a écrit au bailli d'Orle, de sa main et sous son sceau privé, de laisser les ponts de l'Orle sans garde au premier jour de mai." },
  iiid_c_saisie: { rev: "B", text: "Le Conseil a écrit à Corisande Marrel qu'il voterait la saisie des réserves d'or de la Banque si elle n'apportait rien avant la Saint-Jean." },
  iiid_c_greniers: { rev: "B", text: "Les gens de la Banque gardent les greniers du quai au Blé, pleins, sous un placard qui dit « réserves de la République ». Le pain est à six liards la livre." },
});
Object.assign(X.veils, {
  iiid_ponts: { fx: { clue: "iiid_c_ponts", ep: ["perso", 400] } },
  iiid_saisie: { fx: { clue: "iiid_c_saisie", ep: ["perso", 300] } },
  iiid_rosalie: { fx: { flag: "iiid:rosalie_banque" } },
});

Object.assign(P, {
  IIID_deserteur: { act: "III", title: "Le cellier du bailli", place: "orle", backName: "le cellier du bailli",
    text: [
      "Le bailli d'Orle a fait enfermer le déserteur dans son cellier, entre les tonneaux de l'année et un tas de fagots. La porte a une grille à hauteur de visage. Le garde est un vieux vigneron armé d'une serpe, qui mange des noix assis sur un billot et jette les coquilles dans la rigole. « On le pend après-demain, dit-il, ou on l'envoie à Salvèze. Le bailli hésite : la corde coûte, le voyage aussi. »",
      "Derrière la grille, un garçon de dix-neuf ans en chemise, la cuirasse bleue d'Aveline posée à ses pieds comme une bassine. Il s'appelle Hector. Il a un accent du nord, des ongles rongés jusqu'au sang, et il parle vite, de peur qu'on parte avant la fin.",
      "« Le duc a six mille hommes au camp de Pont-Sauvin, à la frontière. Des piques, des arbalètes, deux trébuchets démontés sur des chariots. On attend les beaux jours. Les capitaines disent qu'on entrera dans Salvèze sans tirer un carreau, par la porte des Sauniers, qu'on nous ouvrira de l'intérieur. » Il s'accroche aux barreaux. « {{oreille#iiid_hector|J'ai déserté parce que j'avais faim, comme tout le monde là-bas|J'ai déserté le soir où mon sergent m'a fait pendre un meunier qui cachait son grain, et j'ai serré le nœud moi-même}}. »",
      "Il ajoute, plus bas : « Il y en a d'autres, des déserteurs. Une vingtaine, avec un ancien sergent, Romuald. Ils tiennent le village des Essarts, au-dessus des carrières. Eux, ils ont trouvé un métier. »",
      { with: "tibere", text: "Tibère regarde le garçon longtemps. « J'ai pendu deux hommes, au Guet, dit-il. Par ordre. On s'en souvient au moment de dormir, pas avant. »" },
    ],
    fx: { meet: "iiid_hector", clue: "iiid_c_porte", questSeen: "IIID_q_essarts" },
    choices: [
      { label: "Plaider pour lui auprès du bailli", test: { dom: "social", diff: -10, label: "Convaincre un bailli économe", help: [{ if: { has: "metier:parole" }, v: 10 }, { with: "gildas", v: 10 }, { if: { fac: "moines", min: 10 }, v: 10 }] },
        win: { fx: { flag: "iiid:hector", ep: ["perso", 500] }, to: "IIID_deserteur_libre" }, lose: { fx: { flag: "iiid:hector_salveze" }, back: "IIID_nouvelles" } },
      { label: "Payer la corde et le voyage au bailli, et repartir avec le garçon (5 ducats)", fx: { gold: -5, flag: "iiid:hector", ep: ["perso", 300] }, to: "IIID_deserteur_libre" },
      { label: "Revenir à la nuit et tirer le verrou pendant que le vieux garde dort", test: { dom: "discretion", diff: 0, label: "Ouvrir un cellier sous le nez d'un garde", help: [{ if: { item: "crochets" }, v: 10 }, { with: "lison", v: 10 }] },
        win: { fx: { flag: "iiid:hector", fac: { conseil: -2 } }, to: "IIID_deserteur_libre" }, lose: { fx: { pv: -2, flag: "iiid:hector_salveze" }, back: "IIID_nouvelles" } },
      { label: "Le laisser à la justice du bailli", fx: { flag: "iiid:hector_salveze" }, back: "IIID_nouvelles" },
    ] },

  IIID_deserteur_libre: { act: "III", title: "Hector", place: "orle", backName: "la ruelle derrière le cellier",
    text: [
      "Hector sort du cellier en clignant des yeux, la cuirasse sous le bras. Ses mains cherchent une occupation : il les essuie sur sa chemise, deux fois, trois fois. Puis il défait de son épaule un écusson de drap bleu cousu au fil d'argent : la tour couronnée d'Aveline, et sous elle le chiffre de sa compagnie.",
      "« Gardez-le. Aux Essarts, Romuald et les siens portent encore le même. Si vous montez là-haut, montrez-le : ils parleront avant de frapper, peut-être. » Il hésite. « Romuald était un bon sergent. {{oreille#iiid_romuald|Il a juste mal tourné, comme nous tous|Il a pris les Essarts parce qu'il veut de quoi racheter sa grâce au duc, et il pendra qui il faut pour l'avoir}}. »",
      "Puis il demande la route du sud, celle qui évite Pont-Sauvin, et il part à pied, la cuirasse jetée dans le premier fossé.",
      { with: "gildas", text: "Frère Gildas le regarde partir. « Il a tué un homme sur ordre, dit-il. Il marchera avec ça jusqu'au bout. Mieux vaut qu'il marche. »" },
    ],
    fx: { item: "iiid_ecusson" },
    choices: [{ back: "IIID_nouvelles" }] },

  IIID_clerc: { act: "III", title: "L'homme en noir", place: "orle", backName: "le banc de l'homme en noir",
    text: [
      "L'homme en noir porte un habit de bonne laine, élimé aux coudes par l'écritoire, et des doigts tachés d'encre jusqu'à la deuxième phalange. Il a posé sur ses genoux une besace de cuir, qu'il touche chaque fois que quelqu'un passe. Il s'appelle Théodule, il est greffier adjoint du Conseil des Comptoirs. Il le dit, puis il regrette visiblement de l'avoir dit.",
      "« {{oreille#iiid_theodule|Je viens voir ma sœur, qui a épousé un tonnelier d'Orle|Je n'ai pas de sœur ici. J'ai pris la route de nuit, et je prie pour qu'on me croie à Salvèze}}. » Il boit une gorgée de soupe froide. « À Salvèze ? Le Conseil siège la nuit, maintenant, chez le prévôt, rue des Archers. Plus de séance publique depuis la Chandeleur. Sans greffier. Le prévôt tient lui-même le procès-verbal. Moi, je recopiais au propre ce qu'on me donnait le matin. »",
      "La besace sur ses genoux est {{pie#iiid_besace|une besace de clerc, plate, qui ne contient guère qu'un quignon et un encrier|doublée d'une seconde poche cousue contre le dos, où l'on sent les arêtes de trois cahiers serrés}}.",
      { if: { has: "metier:lire" }, text: "Tu connais ces doigts-là. Les greffiers du Conseil se reconnaissent à l'encre noire de galle, qui résiste au savon, et à la corne du majeur droit, où porte la plume." },
    ],
    fx: { meet: "iiid_theodule", clue: "iiid_c_seances" },
    choices: [
      { label: "Lui demander les cahiers cousus dans sa besace, contre ta protection jusqu'à Salvèze", hide: { not: { voile: "iiid_besace" } }, fx: { item: "iiid_cahier", flag: "iiid:cahier", ep: ["perso", 400] }, to: "IIID_clerc_cahier" },
      { label: "Lui offrir de quoi payer l'auberge, et le laisser parler", fx: { gold: -1 }, test: { dom: "social", diff: -10, label: "Rassurer un greffier en fuite", help: [{ if: { has: "metier:lire" }, v: 15 }, { with: "gildas", v: 5 }] },
        win: { fx: { item: "iiid_cahier", flag: "iiid:cahier" }, to: "IIID_clerc_cahier" }, lose: { back: "IIID_nouvelles" } },
      { label: "Lui arracher sa besace", tag: "Marque +1", stain: true, fx: { mark: 1, item: "iiid_cahier", flag: "iiid:cahier", fac: { conseil: -3 } }, to: "IIID_clerc_cahier" },
      { label: "Le laisser à sa soupe froide", back: "IIID_nouvelles" },
    ] },

  IIID_clerc_cahier: { act: "III", title: "Les cahiers de nuit", place: "orle", backName: "le banc de l'homme en noir",
    text: [
      { outcome: "win", text: "Théodule décout la doublure lui-même, avec un canif à tailler les plumes, en surveillant la place. « Si on me demande, dit-il, je les ai brûlés. »" },
      "Trois cahiers de papier épais, cousus au fil de lin. L'écriture du greffier, ronde et régulière, recopie les séances de nuit du Conseil depuis la Chandeleur : les présents, les votes, les sommes. Les marges portent des corrections d'une autre main, penchée, que tu as peut-être déjà vue.",
      "« J'ai gardé les brouillons qu'on me donnait, dit Théodule. Pas les propres. Les brouillons. Ce sont eux qui disent ce qui a été voté avant qu'on le corrige. Lisez-les si vous avez de bons yeux. Moi, je n'ai plus envie de les lire. »",
      { with: "tibere", text: "Tibère feuillette le premier cahier en mouillant son pouce. « Onze maisons sur quarante, dit-il. Le Conseil, c'est onze maisons, la nuit. »" },
    ],
    choices: [{ back: "IIID_nouvelles" }] },

  IIID_corisande_arrivee: { act: "III", title: "Les attelages de la Banque", place: "orle", backName: "la cour du Pressoir",
    text: [
      "Ils montent la route d'en bas au pas lent des bêtes fatiguées : trois voitures de voyage aux portières noires, peintes du besant d'or des Marrel, et douze gardes à cheval en manteau noir à boutons dorés. Les vignerons se rangent contre les murs. Les enfants courent devant. Dans la cour du Pressoir, la première voiture s'arrête, et un homme en habit de commis descend déplier le marchepied.",
      "Corisande Marrel descend la dernière. Soixante-sept ans, une canne d'ébène à pommeau d'argent, un manteau de voyage gris fourré de petit-gris, et des yeux pâles qui font le tour de la cour en une fois, comme on compte une caisse. Elle a fait cinq jours de route dans une voiture de louage pour venir jusqu'ici. Elle te voit sur la place, et elle te salue d'une inclinaison de tête exacte, celle qu'on accorde à un égal.",
      { if: { all: [{ not: { has: "lothaire:mort" } }, { not: { has: "lothaire:vaincu" } }, { not: { has: "lothaire:allie" } }] }, text: "Derrière la dernière voiture, un cavalier seul, en gants gris, la bride courte. Lothaire Brunel. Il met pied à terre dans la cour, il te regarde un instant, et il conduit son cheval à l'écurie au lieu de suivre sa maîtresse à l'intérieur. Au cordon de son cou pend le cornet jumeau, poli comme le tien.",
        else: "Lothaire Brunel manque au voyage. Corisande s'appuie sur le bras de son commis, un homme maigre aux lunettes rondes, et c'est lui qui donne les ordres aux gardes." },
      { if: { all: [{ has: "iiic:tibere_faux" }, { not: { has: "lothaire:mort" } }, { not: { has: "lothaire:vaincu" } }, { not: { has: "lothaire:allie" } }] }, text: "En passant devant toi, Lothaire dit seulement, à mi-voix : « Les cols d'Aveline. J'y ai envoyé deux hommes, sur la foi d'une belle écriture de sergent. Ils y sont encore. »" },
      { if: { has: "mandat" }, text: "Le mandat contre toi court toujours, à Salvèze, pour le meurtre d'Odeline. Douze gardes de la Banque se tiennent dans la cour, à vingt pas. La vieille dame a choisi de te saluer." },
      "Le commis traverse la place jusqu'à toi. Il s'appelle Maître Philibert Fissot, premier commis de la Maison Marrel. « Madame vous prie à souper, dit-il, ce soir, dans la salle haute du Pressoir. {{oreille#iiid_fissot_souper|Elle souhaite simplement vous entendre|Elle n'a plus que vous à essayer, et elle déteste ça}}. »",
      { with: "lison", text: "Lison crache dans la poussière, pas trop près des bottes du commis. « Elle aurait pu envoyer une lettre. Elle est venue en personne. Ça veut dire qu'elle a peur. »" },
    ],
    fx: { meet: ["corisande", "iiid_fissot"] },
    choices: [
      { label: "Aller à l'écurie, où les gens de la Banque déchargent les voitures", hide: { seen: "IIID_cor_second" }, to: "IIID_cor_second" },
      { label: "Monter souper avec Corisande Marrel, dans la salle haute", big: true, takes: "evening", to: "IIID_corisande" },
    ] },

  IIID_cor_second: { act: "III", title: "L'écurie du Pressoir", place: "orle", backName: "l'écurie du Pressoir",
    text: [
      "L'écurie sent le foin mouillé et le cuir chaud. Les gardes de la Banque dessellent en silence. Maître Fissot surveille le déchargement d'un petit coffre ferré, cadenassé deux fois, que quatre hommes portent avec précaution. Le coffre est {{pie#iiid_coffre|lourd d'or, à voir la peine des porteurs|lesté de saumons de plomb sous un fond de cuir : il contient trois cents ducats et le reste est du poids pour impressionner}}.",
      "Fissot remarque ton regard et s'approche, les mains derrière le dos. « Madame est une femme de parole. Elle n'aime pas les détours. » Il baisse la voix. « {{oreille#iiid_ble|Les greniers ? Une mesure de prudence, en temps de troubles|Les greniers, c'est Madame : tant que le blé reste fermé, le Conseil ne peut pas saisir la Banque sans affamer la ville, et le Conseil le sait}}. »",
      { if: { all: [{ not: { has: "lothaire:mort" } }, { not: { has: "lothaire:vaincu" } }, { not: { has: "lothaire:allie" } }] }, text: "Au fond de l'écurie, la stalle de Lothaire est vide, le cheval déjà ressellé. Fissot suit ton regard. « Monsieur Brunel {{oreille#iiid_gue|repart à Salvèze ce soir, il a à faire là-bas|attend au gué des Saules avec six hommes, sur la route du bas, pour le cas où Madame échouerait}}. »" },
      { if: { any: [{ has: "lothaire:mort" }, { has: "lothaire:vaincu" }, { has: "lothaire:allie" }] }, text: "Six des gardes ressellent leurs chevaux à la tombée du jour. Fissot suit ton regard. « Ils {{oreille#iiid_gue_b|repartent devant pour préparer les relais|vont attendre au gué des Saules, sur la route du bas, pour le cas où Madame échouerait}}. »" },
      { with: "salome", text: "Salomé a reconnu un des gardes, un grand roux aux mains de marin. « Il plongeait pour la Banque, avec Maïwenn, dit-elle sans baisser la voix. Il a vite trouvé un travail au sec. »" },
    ],
    choices: [{ label: "Monter souper avec Corisande Marrel", big: true, takes: "evening", to: "IIID_corisande" }] },
});

Object.assign(X.people, {
  iiid_hector: { name: "Hector", qui: "Un soldat d'Aveline de dix-neuf ans, déserteur.", aspect: { allure: "garçon accroché aux barreaux", habits: "chemise, cuirasse bleue à ses pieds", signe: "ongles rongés jusqu'au sang", voix: "accent du nord, rapide" }, f: false, face: { age: "jeune", coif: "court" }, desc: "Un soldat d'Aveline de dix-neuf ans, déserteur, accent du nord, ongles rongés." },
  iiid_theodule: { name: "Théodule", qui: "Greffier adjoint du Conseil des Comptoirs.", aspect: { allure: "homme en noir, inquiet", habits: "habit de laine élimé aux coudes", signe: "doigts noirs d'encre, besace sur les genoux" }, f: false, face: { age: "adulte", coif: "degarni" }, desc: "Greffier adjoint du Conseil des Comptoirs, en fuite, les doigts noirs d'encre de galle." },
  iiid_fissot: { name: "Maître Philibert Fissot", qui: "Premier commis de la Maison Marrel.", aspect: { allure: "maigre, précis", signe: "lunettes rondes" }, f: false, face: { age: "mur", coif: "degarni", marks: ["lunettes"] }, desc: "Premier commis de la Maison Marrel. Maigre, lunettes rondes, il compte tout, même les mots." },
});
Object.assign(X.items, {
  iiid_ecusson: { name: "L'écusson d'Aveline", kind: "outil", price: 2, unique: true, desc: "Un écusson de drap bleu brodé d'argent : la tour couronnée d'Aveline et le chiffre d'une compagnie. Hector te l'a laissé." },
  iiid_cahier: { name: "Les cahiers de nuit du Conseil", kind: "document", form: "registre", hand: "soignee", unique: true,
    text: "*Séance de nuit, troisième jour de mars. Présents : le prévôt et onze maisons. Vote sur la proposition de l'envoyé d'Aveline : {{loupe#iiid_vote|rejetée à l'unanimité|acceptée par six voix contre cinq ; le prévôt a gratté le chiffre et récrit « rejetée »}}.*\n\n*Séance de nuit, dixième jour de mars. Sur la garde des portes de la ville : {{loupe#iiid_portes|la garde de la porte des Sauniers est doublée|la garde de la porte des Sauniers est confiée aux gens du prévôt, et retirée au Guet}}.*\n\n*En marge, de la main penchée : « Ne pas recopier. »*",
    desc: "Trois cahiers cousus au fil de lin, les brouillons du greffier Théodule, avec des corrections d'une autre main, penchée." },
});
Object.assign(X.clues, {
  iiid_c_porte: { rev: "S", text: "Les capitaines d'Aveline disent à leurs hommes qu'ils entreront dans Salvèze sans combat, par la porte des Sauniers, qu'on leur ouvrira de l'intérieur." },
  iiid_c_seances: { rev: "S", text: "Depuis la Chandeleur, le Conseil siège la nuit chez le prévôt, rue des Archers, sans greffier : le prévôt tient lui-même le procès-verbal." },
  iiid_c_vote: { rev: "S", text: "Le troisième jour de mars, le Conseil a accepté par six voix contre cinq la proposition de l'envoyé d'Aveline. Le prévôt a gratté le chiffre et récrit « rejetée »." },
  iiid_c_portes: { rev: "S", text: "Le dixième jour de mars, la garde de la porte des Sauniers a été retirée au Guet et confiée aux gens du prévôt." },
  iiid_c_ble: { rev: "B", text: "Corisande Marrel garde les greniers fermés pour que le Conseil ne puisse pas saisir la Banque sans affamer la ville." },
});
Object.assign(X.veils, {
  iiid_vote: { fx: { clue: "iiid_c_vote", ep: ["perso", 400] } },
  iiid_portes: { fx: { clue: "iiid_c_portes", ep: ["perso", 400] } },
  iiid_hector: { fx: { ep: ["perso", 150] } },
  iiid_coffre: { fx: { flag: "iiid:coffre_creux" } },
  iiid_ble: { fx: { clue: "iiid_c_ble", ep: ["perso", 300] } },
});

// ==================================================================== Corisande Marrel at Orle
var LOT_ACTIF = { all: [{ not: { has: "lothaire:mort" } }, { not: { has: "lothaire:vaincu" } }, { not: { has: "lothaire:allie" } }] };
var LOT_ABSENT = { any: [{ has: "lothaire:mort" }, { has: "lothaire:vaincu" }, { has: "lothaire:allie" }] };
Object.assign(P, {
  IIID_corisande: { act: "III", title: "La salle haute du Pressoir", place: "orle", backName: "la table de Corisande Marrel",
    text: [
      { first: true, text: "La salle haute du Pressoir est basse de plafond, lambrissée de sapin, chauffée par un brasero que l'aubergiste a monté lui-même. Sur la table, une nappe de lin, deux couverts, un pain de seigle, un pâté de lièvre et un pichet de vin de l'Orle coupé d'eau. Corisande Marrel est assise dos à la cloison de planches, sa canne contre la cuisse. Elle désigne la chaise en face d'elle, face à la fenêtre." },
      { first: true, if: LOT_ACTIF, text: "La salle haute {{echo#iiid_cloison|garde l'odeur du sapin chaud et le silence des pièces où l'on a peu vécu|garde encore une voix d'homme, douce, d'il y a une heure : « Asseyez-le face à la fenêtre, Madame. Je serai derrière la cloison. Je vous dirai ce qu'il pense. »}}." },
      { first: true, if: LOT_ABSENT, text: "La salle haute {{echo#iiid_caisse|garde l'odeur du sapin chaud et le calme des pièces où l'on a peu vécu|garde encore la voix du commis, d'il y a une heure, très bas : « Madame, il reste trois semaines de caisse. Après, nous fermons les guichets. »}}." },
      { first: true, text: "« Je mange peu, dit-elle. Servez-vous. J'ai fait cinq jours de route pour vous parler, et je parle mal le ventre plein. » Elle rompt un morceau de pain et le laisse sur la nappe. « Vous avez trouvé ce que mon chercheur cherche depuis vingt ans. {{oreille#iiid_cor_respect|Je suis venue vous en féliciter|Je suis venue parce que je n'ai plus le temps de vous faire suivre, ni l'argent}}. »" },
      { first: true, if: { has: "iiir:breche_perdue" }, text: "« Trois de mes hommes vous ont croisé{e} sous le Mont, ajoute-t-elle, dans une galerie de carrier. Ils ont gardé votre bourse. Je la leur ai laissée : c'était leur salaire de la semaine. »" },
      { again: true, text: "Corisande Marrel attend que tu te rassoies. Le pâté reste entier devant elle. Le brasero craque. Derrière elle, la cloison de planches." },
      { with: "tibere", text: "Tibère est resté debout près de la porte, comme un garde. Corisande l'a regardé une fois en entrant, sans le saluer. Lui l'a regardée plus longtemps." },
      { with: "gildas", text: "Frère Gildas s'est assis sur le coffre, au fond, les mains dans les manches. Corisande le salue d'un « Mon père » sec et l'oublie." },
    ],
    choices: [
      { label: "Dire tout haut : « Monsieur Brunel peut venir s'asseoir avec nous. »", hide: { any: [{ not: { voile: "iiid_cloison" } }, { seen: "IIID_cor_lothaire" }] }, to: "IIID_cor_lothaire" },
      { label: "« Que doit la République, et à qui ? »", hide: { seen: "IIID_cor_dette" }, to: "IIID_cor_dette" },
      { label: "« Pourquoi voulez-vous le Registre ? »", hide: { seen: "IIID_cor_registre" }, to: "IIID_cor_registre" },
      { label: "« Et la ville, pendant ce temps ? »", hide: { seen: "IIID_cor_ville" }, to: "IIID_cor_ville" },
      { label: "« Dites ce que vous proposez. »", big: true, if: { count: [{ seen: "IIID_cor_dette" }, { seen: "IIID_cor_registre" }, { seen: "IIID_cor_ville" }], min: 1 }, why: "Elle attend que tu l'interroges d'abord.", to: "IIID_cor_offre" },
    ] },

  IIID_cor_lothaire: { act: "III", title: "Derrière la cloison", place: "orle", backName: "la table de Corisande Marrel",
    text: [
      "Un temps. Corisande reste tournée vers toi. Puis une porte basse s'ouvre dans le lambris, et Lothaire Brunel entre en se courbant, les gants gris à la main. Il tire une chaise du mur et s'assied de côté, un coude sur le dossier.",
      "« Vous avez le diapason, dit-il. Je l'oublie toujours. » Il te regarde avec la patience d'un homme qui attend que le poisson remonte. « Vous vous dites : il a peur que je le dise à sa maîtresse. Vous vous dites : il a un cornet comme le mien, et il entend que j'ai peur de lui. Les deux sont vrais. Madame, il {{oreille#iiid_lot_coffret|ment moins que les autres, c'est déjà beaucoup|sait peut-être, pour le coffret des Sourds et pour la corde de Maïwenn Brac ; il faut le faire taire avant qu'il vous le dise}}. »",
      "Corisande pose sa fourchette. « Vous resterez, Lothaire, puisque vous êtes là. Et vous vous tairez. Quand je négocie, je veux entendre ce qu'on me dit, et pas ce qu'on pense. On signe avec ce qu'on dit. »",
      { with: "salome", text: "Salomé s'est levée à moitié de son banc. Elle se rassoit. Ses mains restent posées à plat sur la table, blanches aux jointures." },
    ],
    fx: { flag: "iiid:lothaire_vu", ep: ["perso", 300] },
    choices: [{ back: "IIID_corisande" }] },

  IIID_cor_dette: { act: "III", title: "Quatre millions", place: "orle", backName: "la table de Corisande Marrel",
    text: [
      "« Quatre millions de ducats au duc d'Aveline, dit Corisande, payables à la Saint-Jean. La République les a empruntés pour la guerre des Salines il y a trente ans, et pour la digue du port, et pour les fêtes du prévôt d'avant. Ma maison porte la dette. Si la République fait défaut, le duc entre, et ma maison tombe avec la ville. » Elle dit ces chiffres comme on dit l'heure.",
      "« Combien de temps tenez-vous ? » demandes-tu. « {{oreille#iiid_cor_caisse2|La Banque peut tenir jusqu'à l'été, si on la laisse travailler|La Banque a trois semaines de caisse ; après, je ferme les guichets, et toute la ville apprend qu'il reste du vent dessous}}. »",
      "Elle boit une gorgée de vin coupé. « Le prévôt {{oreille#iiid_cor_prevot|négocie avec l'envoyé du duc pour obtenir un délai, et je l'en remercie|dîne avec Sauveterre trois soirs par semaine, rue des Archers, sans moi, et j'ignore ce qu'il lui vend}}. »",
      { if: { has: "iiid:courrier" }, text: "Tu penses au pli du Conseil, dans la sacoche du courrier, en bas : la saisie de ses réserves d'or si elle revient les mains vides. Elle a l'air d'une femme qui sait tout un jour avant les autres." },
    ],
    choices: [{ back: "IIID_corisande" }] },

  IIID_cor_registre: { act: "III", title: "Le Registre et les titres", place: "orle", backName: "la table de Corisande Marrel",
    text: [
      "« L'or de la reine paie le duc, dit-elle. Le Registre, lui, ne paie rien. Il annule. » Elle tire de sa manche un rouleau de parchemin jauni, noué d'un ruban noir, et le déroule entre les assiettes. « Voici le titre de ma maison sur les salines de Grisemotte. Il a trois siècles. C'est ce que vous voulez lire à voix haute devant le peuple, avec vos feuillets. »",
      "Le titre est d'une belle écriture de chancellerie. *Acte de cession des salines de Grisemotte à la Maison Marrel, {{loupe#iiid_acte|passé devant le Conseil en l'an premier de la République|gratté et récrit ; dessous, à l'encre ferrugineuse, la date d'origine : la nuit des Comptoirs, avant l'aube, sans témoin de la reine}}.*",
      "« Si la Charte est lue, dit Corisande, {{oreille#iiid_cor_titres|la moitié des titres du delta devient discutable, et les procès dureront cent ans|les miens tombent les premiers, et il me reste alors rien à mettre en gage le jour où il faudra emprunter pour nourrir la ville}}. Je veux le Registre pour une seule chose : qu'il cesse d'exister. »",
      { if: { has: "metier:lire" }, text: "Tu as lu des centaines d'actes de cession sur le quai, pour retrouver des héritiers. Celui-ci a la main appliquée des copies faites après coup, et un grattage au bas de la première ligne." },
    ],
    choices: [{ back: "IIID_corisande" }] },

  IIID_cor_ville: { act: "III", title: "La ville affamée", place: "orle", backName: "la table de Corisande Marrel",
    text: [
      "« La ville ? » Corisande regarde la fenêtre, où le jour baisse sur les vignes. « La ville mange le blé que ma maison achète en Aveline, à crédit, sur la parole de ma maison. Si je tombe, le crédit tombe avec moi. Les boulangers ferment en une semaine. Les gens que vous avez vus sur le pont, cet après-midi, ce sont les premiers. »",
      "« Vous avez fermé les greniers. » Elle soutient ton regard. « {{oreille#iiid_cor_glaces|J'ai mis le grain à l'abri des pillards, ce que ferait n'importe quel marchand|J'ai vu l'hiver des Glaces, à douze ans : on mangeait les chiens sur le quai aux Sauniers, mon père avait fermé les greniers lui aussi, et je m'étais juré de ne jamais lui ressembler}}. »",
      "Elle se tait un moment, puis elle reprend sa voix de comptoir. « Je suis vieille. Je vous demande de compter, et c'est tout. »",
      { if: { has: "passe:trouve" }, text: "L'hiver des Glaces. C'est l'hiver où Odeline t'a trouvé{e} sous son étal. Corisande Marrel l'ignore." },
    ],
    choices: [{ back: "IIID_corisande" }] },

  IIID_cor_offre: { act: "III", title: "L'offre de Corisande", place: "orle", backName: "la table de Corisande Marrel",
    text: [
      { first: true, text: "Corisande pose ses deux mains sur le pommeau de sa canne. « Voici. Vous me remettez les feuillets que vous portez, ceux que vous trouverez, et le chemin de la Grande Basse. Je fais lever le mandat contre vous : le témoin que Brunel a payé se rétractera. Je vous verse dix mille ducats. L'or de la reine paiera le duc, la République survivra, et le Registre brûlera dans ma cheminée, devant vous. »" },
      { first: true, text: "« Dix mille ducats, {{oreille#iiid_cor_lettres|payés comptant, à Salvèze, le jour où vous me remettrez les feuillets|payés en lettres sur ma maison, qui vaudront zéro si j'échoue ; vous êtes pris dans ma faillite autant que moi}}. Le mandat {{oreille#iiid_cor_mandat|sera levé dans la semaine|sera levé le jour où le Registre brûlera, et pas une heure avant}}. »" },
      { first: true, text: "Dix mille ducats. Tu {{miroir#iiid_m_prix|pèses l'offre froidement, comme Odeline t'a appris à peser un lot|as déjà dépensé la moitié de la somme, en pensée, et la boutique du quai a rouvert avec une enseigne neuve à ton nom}}." },
      { first: true, if: { has: "iiid:coffre_creux" }, text: "« Dix mille ducats, dis-tu, quand votre coffre de route en porte trois cents, sur un lit de plomb. » Corisande ne cille pas. « Le plomb fait taire les aubergistes, dit-elle. Mes lettres valent encore de l'or, pour quelques semaines. Après, nous verrons ensemble ce qu'elles valent. »" },
      { again: true, text: "Corisande attend. Son offre est sur la table, entre le pain et le titre déroulé, et elle la laisse là." },
      { if: { has: "iiid:cor_prevot" }, text: "Depuis que tu lui as parlé du prévôt, Corisande se tient plus droite, et ses doigts serrent le pommeau de la canne." },
    ],

    choices: [
      { label: "« Le prévôt vous vend, Madame. Et je peux le prouver. »", hide: { any: [{ seen: "IIID_cor_retourne" }, { not: { any: [{ voile: "iiid_cor_prevot" }, { item: "iiid_lettre_prevot" }, { item: "iiid_cahier" }] } }] }, to: "IIID_cor_retourne" },
      { label: "Accepter : lui serrer la main sur le marché", fx: { flag: "iiid:cor_accord", fac: { banque: 10, hautes: -5 } }, to: "IIID_cor_accepte" },
      { label: "Feindre d'accepter, pour descendre à Salvèze sans la Banque aux trousses", labels: [{ if: { has: "taiseurs:serment" }, label: "Lui répondre oui, en double parole, comme on te l'a appris aux Joncs" }],
        hide: { all: [LOT_ACTIF, { not: { has: "taiseurs:serment" } }] }, fx: { flag: "iiid:cor_feinte", fac: { banque: 5 } }, to: "IIID_cor_feinte" },
      { label: "Feindre d'accepter, pour descendre à Salvèze sans la Banque aux trousses", hide: { any: [LOT_ABSENT, { has: "taiseurs:serment" }] }, fx: { flag: ["iiid:cor_feinte", "iiid:feinte_eventee"] }, to: "IIID_cor_eventee" },
      { label: "Refuser", fx: { flag: "iiid:cor_refus", fac: { banque: -10, hautes: 5 } }, to: "IIID_cor_refus" },
    ] },

  IIID_cor_retourne: { act: "III", title: "Le prévôt", place: "orle", backName: "la table de Corisande Marrel",
    text: [
      { if: { item: "iiid_lettre_prevot" }, text: "Tu poses sur la nappe la lettre du prévôt au bailli d'Orle. Corisande la lit deux fois, en tenant le papier loin de ses yeux. Elle reconnaît la tour sur la vague, le sceau privé de Delisle. « Les ponts de l'Orle sans garde, au premier jour de mai, dit-elle. Par où croit-il que viendront les gens d'Aveline ? »" },
      { if: { all: [{ item: "iiid_cahier" }, { not: { item: "iiid_lettre_prevot" } }] }, text: "Tu ouvres sur la nappe le premier cahier du greffier Théodule, au troisième jour de mars. Corisande suit la ligne du doigt et s'arrête sur le chiffre gratté. « J'étais à cette séance, dit-elle. J'ai voté contre. On m'a dit que nous avions gagné. »" },
      { if: { all: [{ not: { item: "iiid_cahier" } }, { not: { item: "iiid_lettre_prevot" } }] }, text: "Tu lui répètes ce que tu as entendu sous ses propres mots : les dîners rue des Archers, trois soirs par semaine, sans elle. Corisande te regarde longtemps. « Vous m'avez écoutée comme Brunel écoute, dit-elle. Je le savais, et j'ai parlé quand même. C'est ma faute. »" },
      "Elle reste un moment immobile. Puis elle parle vite, à voix basse. « Amaury de Sauveterre entre chez le prévôt par la porte d'eau, sur le canal des Archers, après le couvre-feu. Une barque à deux rameurs, sans lanterne. Mon portier l'a vu quatre fois. J'ai cru qu'ils parlaient d'un délai. Ils parlent d'une reddition. »",
      "« Nous sommes quittes, vous et moi, ajoute-t-elle. Mais si le prévôt ouvre la ville, ma maison et vos feuillets brûlent dans le même feu. {{oreille#iiid_cor_alliee|Souvenez-vous que je vous ai dit ceci|Si vous le faites tomber, je vous devrai ma maison, et je paie mes dettes, même à vous}}. »",
    ],
    fx: { flag: "iiid:cor_prevot", clue: "iiid_c_amaury", ep: ["perso", 800] },
    choices: [{ back: "IIID_cor_offre" }] },

  IIID_cor_accepte: { act: "III", title: "La main de Corisande", place: "orle", backName: "la table de Corisande Marrel",
    text: [
      "Sa main est sèche et froide, et elle serre fort, en marchand. « Bien. » Elle fait signe à la porte ; Maître Fissot entre avec une écritoire et rédige, debout, un sauf-conduit au nom de la Maison Marrel, qu'elle signe et scelle du besant. « Montrez ceci à mes gens sur la route et aux portes de Salvèze. Les gens de la Banque vous laisseront passer. »",
      "Le sauf-conduit dit : *La Maison Marrel prie quiconque la sert de {{loupe#iiid_sauf|laisser passer le porteur et ses compagnons, et de leur prêter assistance|retenir le porteur aux portes de Salvèze et de saisir ses papiers pour la Maison, sans violence}}.*",
      "Tu as donné ta main. Tu {{miroir#iiid_m_main|l'as fait pour la ville, pour les boulangers, pour les gens du pont|l'as fait pour cesser d'avoir peur des créanciers, et la ville est venue après, comme une excuse}}.",
      { with: "lison", text: "Lison quitte la salle sans un mot. Tu entends ses pas dans l'escalier, puis la porte de la cour qui claque." },
      { with: "salome", text: "Salomé vide son verre et le repose à l'envers sur la nappe, comme on fait à Port-Vasier quand on a fini de boire avec quelqu'un." },
    ],
    fx: { item: "iiid_sauf_conduit", conf: { lison: -10, salome: -10, tibere: 3 } },
    choices: [{ label: "Raccompagner Corisande jusqu'à sa voiture", to: "IIID_cor_depart" }] },

  IIID_cor_feinte: { act: "III", title: "Oui", place: "orle", backName: "la table de Corisande Marrel",
    text: [
      { if: { has: "taiseurs:serment" }, text: "Tu réponds oui. Tu le dis comme Mère Ancolie te l'a appris aux Joncs-Bas, en logeant le refus dans le oui, au creux d'un mot qu'un étranger entend droit. Ta voix reste égale, parce qu'elle dit vrai : elle dit deux choses, et la seconde est pour toi." },
      { if: { all: [{ has: "taiseurs:serment" }, LOT_ACTIF] }, text: "Derrière la cloison, une chaise craque, puis plus rien. Lothaire Brunel écoute avec son cornet jumeau, et il entend une phrase lisse, sans rien dessous. C'est la première fois, peut-être. Corisande, elle, entend le oui." },
      { if: { not: { has: "taiseurs:serment" } }, text: "Tu dis oui, et tu tends la main. Tu penses à la route du bas, au fleuve, aux portes de Salvèze, et à tout ce que ce oui va t'éviter. Corisande Marrel a des yeux de comptoir et des oreilles ordinaires. Elle te serre la main, en marchand." },
      "Maître Fissot entre avec une écritoire et rédige, debout, un sauf-conduit au nom de la Maison Marrel. *La Maison Marrel prie quiconque la sert de {{loupe#iiid_sauf2|laisser passer le porteur et ses compagnons, et de leur prêter assistance|retenir le porteur aux portes de Salvèze et de saisir ses papiers pour la Maison, sans violence}}.* Elle le signe et le scelle du besant.",
      { with: "lison", text: "Lison a compris. Elle garde les yeux sur son assiette, et un coin de sa bouche remonte." },
    ],
    fx: { item: "iiid_sauf_conduit", ep: ["perso", 500] },
    choices: [{ label: "Raccompagner Corisande jusqu'à sa voiture", to: "IIID_cor_depart" }] },

  IIID_cor_eventee: { act: "III", title: "Ce que vous pensez", place: "orle", backName: "la table de Corisande Marrel",
    text: [
      "Tu dis oui, et tu tends la main. Corisande avance la sienne. La porte basse du lambris s'ouvre avant que vos doigts se touchent.",
      "Lothaire Brunel reste sur le seuil, courbé sous le linteau, le cornet jumeau encore à l'oreille. « Vous dites oui, dit-il doucement. Vous pensez : jusqu'à Salvèze. Vous pensez : la vieille le saura aux portes, trop tard. » Il range le cornet dans son gant. « Excusez-moi, Madame. Vous m'aviez demandé de me taire. »",
      "Corisande retire sa main et la pose sur sa canne. Elle a seulement l'air fatiguée. « Dommage, dit-elle. Vous auriez fait un bon commis. » Elle se lève seule. « Monsieur Brunel, faites ce que nous avons dit. »",
      { with: "tibere", text: "Tibère a la main sur sa masse. Lothaire le regarde, puis toi. « Pas ici, sergent. Pas devant Madame. »" },
    ],
    choices: [{ label: "La regarder descendre l'escalier", to: "IIID_cor_depart" }] },

  IIID_cor_refus: { act: "III", title: "Non", place: "orle", backName: "la table de Corisande Marrel",
    text: [
      "Tu dis non. Corisande hoche la tête, comme si tu venais de confirmer un chiffre qu'elle avait déjà calculé. Elle roule le titre des salines, renoue le ruban noir, le glisse dans sa manche.",
      "« Vous croyez que je suis le mal de cette ville, dit-elle. Je suis son banquier. On confond souvent. » Elle se lève, s'appuie sur la canne. « {{oreille#iiid_cor_refus|Je vous comprends, et je vous laisse à votre choix|Je vous envie un peu : à votre âge, j'aurais dit non, moi aussi, j'aurais eu tort, et j'aurais été plus heureuse}}. Brunel fera ce qu'il a à faire. Je le laisse faire. »",
      { with: "lison", text: "Lison, avare de mercis depuis le premier jour, pousse vers toi le pichet de vin, les yeux ailleurs." },
      { with: "salome", text: "Salomé lève son verre, une fois, vers toi seul." },
    ],
    fx: { conf: { lison: 5, salome: 5, tibere: -2 } },
    choices: [{ label: "La regarder descendre l'escalier", to: "IIID_cor_depart" }] },

  IIID_cor_depart: { act: "III", title: "La voiture noire", place: "orle", backName: "la cour du Pressoir", takes: "night",
    text: [
      "Dans la cour, les gardes ont allumé des torches. Les chevaux attendent l'aube, couverts. Corisande s'arrête au marchepied de sa voiture, et regarde le Mont-Taciturne, qu'on devine contre le ciel à ses trois lumières.",
      "« J'avais une sœur, dit-elle, qui voulait entrer au Mont. Mon père l'a mariée à un Fourcaud. Elle est morte en couches à vingt ans. » Elle monte. Par la portière, elle ajoute : « {{oreille#iiid_cor_adieu|Bonne route, quelle qu'elle soit|Évitez le gué des Saules cette nuit}}. »",
      { if: { has: "iiid:cor_accord" }, text: "Maître Fissot te salue d'une inclinaison de tête plus basse qu'à l'arrivée. Tu es devenu{e}, pour lui, un compte de la maison." },
      { if: { any: [{ has: "iiid:cor_refus" }, { has: "iiid:feinte_eventee" }] }, text: "Six chevaux manquent à l'écurie. Les gardes qui restent évitent ton regard." },
    ],
    choices: [
      { label: "Rentrer dormir à la grange du tonnelier, où vous logez", big: true, hide: { not: { any: [{ has: "iiid:cor_refus" }, { has: "iiid:feinte_eventee" }] } }, to: "IIID_embuscade" },
      { label: "Rentrer dormir à la grange du tonnelier, où vous logez", big: true, hide: { any: [{ has: "iiid:cor_refus" }, { has: "iiid:feinte_eventee" }] }, to: "IIID_nuit_calme" },
    ] },

  IIID_nuit_calme: { act: "III", title: "La grange du tonnelier", place: "orle", backName: "la grange du tonnelier",
    text: [
      "La grange du tonnelier sent les douelles de chêne et le soufre qu'on brûle dans les fûts vides. Vous dormez sur la paille, entre deux rangées de barriques. À l'aube, tu entends les voitures de la Banque descendre la route d'en bas, au pas, et leurs roues ferrées sur les pavés du pont.",
      { with: "tibere", text: "Tibère a veillé, assis contre une barrique, la masse sur les genoux. « Personne, dit-il quand tu te réveilles. Ça prouve peu de chose. »" },
      { with: "lison", text: "Lison dort roulée dans sa cape, la gaffe à portée de main. Elle a ouvert un œil à chaque bruit de la nuit, et l'a refermé." },
      "Tu touches tes feuillets dans leur toile cirée, un à un, comme on compte des enfants. Ils sont tous là.",
    ],
    fx: { flag: "iiid:nuit", rest: true },
    choices: [{ back: "IIID_nouvelles" }] },
});

Object.assign(X.items, {
  iiid_sauf_conduit: { name: "Le sauf-conduit de la Maison Marrel", kind: "document", form: "billet", hand: "soignee", unique: true,
    text: "*La Maison Marrel prie quiconque la sert de {{loupe#iiid_sauf|laisser passer le porteur et ses compagnons, et de leur prêter assistance|retenir le porteur aux portes de Salvèze et de saisir ses papiers pour la Maison, sans violence}}.*\n\n*Pour la Maison : C. Marrel.*",
    desc: "Une feuille de vélin, de la main de Maître Fissot, signée de Corisande Marrel et scellée du besant d'or." },
});
Object.assign(X.clues, {
  iiid_c_amaury: { rev: "S", text: "Amaury de Sauveterre entre chez le prévôt par la porte d'eau du canal des Archers, après le couvre-feu, dans une barque sans lanterne. Le portier de Corisande l'a vu quatre fois." },
  iiid_c_diners: { rev: "S", text: "Le prévôt dîne avec Amaury de Sauveterre trois soirs par semaine, rue des Archers, sans Corisande Marrel." },
  iiid_c_titres: { rev: "B", text: "Le titre de la Maison Marrel sur les salines de Grisemotte a été gratté : dessous, la date d'origine est la nuit des Comptoirs, avant l'aube, sans témoin de la reine." },
  iiid_c_caisse: { rev: "B", text: "La Banque Marrel a trois semaines de caisse." },
});
Object.assign(X.veils, {
  iiid_cor_prevot: { fx: { clue: "iiid_c_diners", ep: ["perso", 300] } },
  iiid_acte: { fx: { clue: "iiid_c_titres", ep: ["perso", 400] } },
  iiid_cor_caisse2: { fx: { clue: "iiid_c_caisse" } },
  iiid_caisse: { fx: { clue: "iiid_c_caisse" } },
  iiid_sauf: { fx: { flag: "iiid:sauf_lu" } },
  iiid_sauf2: { fx: { flag: "iiid:sauf_lu" } },
  iiid_cor_alliee: { fx: { flag: "iiid:cor_dette", ep: ["perso", 200] } },
  iiid_m_prix: { fx: { ep: ["perso", 200] } },
  iiid_m_main: { fx: { ep: ["perso", 200] } },
});

// ==================================================================== the night ambush
Object.assign(P, {
  IIID_embuscade: { act: "III", title: "La nuit dans la grange", place: "orle", backName: "la grange du tonnelier",
    text: [
      "La grange du tonnelier sent les douelles de chêne et le soufre. Vous vous couchez sur la paille, entre deux rangées de barriques, et la nuit tombe sur Orle comme une couverture mouillée. Vers la deuxième heure, les chiens du bourg se mettent à aboyer l'un après l'autre, du bas vers le haut, à mesure que quelque chose monte la rue.",
      { if: LOT_ACTIF, text: "Par une fente des planches, tu vois des lanternes sourdes dans les vignes, six, peut-être sept, qui avancent en ligne. Celle de tête s'arrête à vingt pas de la porte. Une voix douce, que tu reconnais, dit : « Ne vous levez pas. Je viens seulement chercher ce que Madame a payé et que vous avez refusé de vendre. »" },
      { if: { all: [LOT_ACTIF, { has: "iiid:lothaire_vu" }] }, text: "« Vous m'avez fait asseoir à la table de Madame, ce soir, dit la voix douce derrière la porte. Je viens vous rendre la politesse. »" },
      { if: LOT_ABSENT, text: "Par une fente des planches, tu vois des lanternes sourdes dans les vignes, six, qui avancent en ligne. Les manteaux noirs à boutons dorés. Un homme épais, à la voix de caserne, donne ses ordres à mi-voix : deux devant, deux derrière, deux sur le toit de l'appentis." },
      { if: { has: "tibere:vendu" }, text: "Ils vont droit au fond de la grange, là où tu as caché les feuillets sous la troisième barrique. Quelqu'un leur a dit où chercher." },
      { with: "lison", text: "Lison est déjà debout, la gaffe en main, collée au mur. Elle te montre du menton la petite porte de derrière, qui donne sur les vignes." },
      { with: "salome", if: { has: "salome:maiwenn" }, text: "Salomé a entendu la voix. Elle s'est levée sans bruit, son coutelas à la main, et elle regarde la porte avec une figure que tu lui connais pas." },
    ],
    choices: [
      { label: "Tu savais pour le gué : ils trouvent une grange vide, et vous dans leur dos", hide: { not: { any: [{ voile: "iiid_gue" }, { voile: "iiid_gue_b" }, { voile: "iiid_cor_adieu" }] } }, fx: { ep: ["perso", 800] }, to: "IIID_emb_retourne" },
      { label: "Les attendre derrière la porte, l'arme au poing", hide: LOT_ABSENT, fight: { title: "La grange du tonnelier", enemies: [{ id: "iiid_lothaire", n: 1 }, { id: "iiid_garde", n: 3 }],
        win: { to: "IIID_emb_victoire" }, lose: { to: "IIID_emb_defaite" }, flee: { label: "Filer par la petite porte, dans les vignes", dom: "discretion", diff: -10, to: "IIID_emb_fuite" } } },
      { label: "Les attendre derrière la porte, l'arme au poing", hide: LOT_ACTIF, fight: { title: "La grange du tonnelier", enemies: [{ id: "iiid_garde", n: 4 }],
        win: { to: "IIID_emb_victoire" }, lose: { to: "IIID_emb_defaite" }, flee: { label: "Filer par la petite porte, dans les vignes", dom: "discretion", diff: -10, to: "IIID_emb_fuite" } } },
      { label: "Ouvrir la porte et parler à Lothaire", hide: LOT_ABSENT, to: "IIID_emb_parole" },
      { label: "Sortir par la petite porte avec les feuillets, et te perdre dans les vignes", test: { dom: "discretion", diff: -10, label: "Traverser les vignes sous les lanternes", help: [{ with: "lison", v: 10 }, { if: { arch: "voleur" }, v: 10 }] },
        win: { to: "IIID_emb_fuite" }, lose: { fx: { pv: -3 }, to: "IIID_emb_defaite" } },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "discretion", diff: 0, label: "Lison vous mène par les rangs de vigne" }, win: { fx: { conf: { lison: 3 } }, to: "IIID_emb_fuite" }, lose: { to: "IIID_emb_defaite" } },
      { label: "Laisser Salomé sortir la première", who: "salome", hide: { any: [LOT_ABSENT, { not: { has: "salome:maiwenn" } }] }, to: "IIID_emb_salome" },
    ] },

  IIID_emb_retourne: { act: "III", title: "La grange vide", place: "orle", backName: "la grange du tonnelier",
    text: [
      "Tu as fait bourrer de paille deux manteaux sous les couvertures, et vous avez passé la nuit tapis dans le premier rang de vigne, au-dessus de la grange, les feuillets serrés contre toi. Les lanternes montent, se déploient, entourent la porte. Deux hommes entrent. Un cri étouffé, un juron : la paille.",
      "Tu descends sur eux par le haut du chemin, au moment où ils sortent en se bousculant. Les chevaux sont attachés plus bas, à l'abreuvoir, gardés par un garçon de quinze ans qui lâche les rênes et s'enfuit dès qu'il te voit. Tu coupes les longes. Six chevaux de la Banque partent au galop dans les vignes, vers la rivière.",
      { if: LOT_ACTIF, text: "Lothaire reste un moment immobile au milieu de la cour, sa lanterne à la main, et regarde ses chevaux disparaître. « Le gué des Saules, dit-il sans se retourner. Quelqu'un a parlé. » Il range son cornet. « La prochaine fois, je vous écouterai de plus près. » Il repart à pied, avec ses hommes, vers la route d'en bas." },
      { if: LOT_ABSENT, text: "Le chef des gardes jure longtemps, puis fait le compte de ses hommes et repart à pied vers la route d'en bas. Corisande lui demandera pourquoi ses gens rentrent à Salvèze en marchant." },
      { with: "tibere", text: "Tibère rit, pour la première fois depuis Salvèze, d'un rire qui le plie en deux contre une barrique." },
    ],
    fx: { flag: ["iiid:nuit", "iiid:emb_gagne"], fac: { banque: -5 }, ep: ["seance", 1200] },
    choices: [{ back: "IIID_nouvelles" }] },

  IIID_emb_victoire: { act: "III", title: "Le matin dans la grange", place: "orle", backName: "la grange du tonnelier",
    text: [
      "Le dernier des manteaux noirs s'enfuit dans les vignes en laissant sa lanterne. Il y a du sang sur la paille, et une barrique crevée qui répand du vin nouveau jusqu'à la porte. Les chiens d'Orle aboient encore longtemps après.",
      { if: LOT_ACTIF, text: "Lothaire Brunel s'est relevé contre le chambranle, une main pressée sur son flanc, l'autre levée, paume ouverte. « Assez, dit-il. Assez pour ce soir. » Il recule dans la nuit sans te quitter des yeux. « Vous pensez : je devrais le finir. Vous pensez : je ne suis pas encore comme lui. » Il disparaît entre les rangs de vigne." },
      "Au matin, le bailli monte constater, entend l'histoire, regarde le sang, et décide que des voleurs de vin sont venus de la vallée. Il te fait signer un papier. Tu signes.",
      { with: "tibere", text: "Tibère panse une estafilade à son avant-bras avec un mouchoir et de l'eau-de-vie. « J'ai connu le Guet en pire, dit-il. Pas souvent. »" },
    ],
    fx: { flag: ["iiid:nuit", "iiid:emb_gagne", "iiid:lothaire_blesse"], ep: ["seance", 1500] },
    choices: [{ back: "IIID_nouvelles" }] },

  IIID_emb_defaite: { act: "III", title: "Ce qu'ils ont pris", place: "orle", backName: "la grange du tonnelier",
    text: [
      "Tu te réveilles sur la paille, la tempe ouverte, avec le goût du fer dans la bouche. Le jour se lève. La grange est retournée : les barriques renversées, les sacs éventrés, ta besace vidée sur le sol.",
      "Les feuillets sont là. Tu les avais glissés, la veille, dans la bonde d'un fût vide, et ils les ont cherchés partout ailleurs. Ta bourse, elle, a disparu.",
      { if: LOT_ACTIF, text: "Lothaire est resté penché sur toi un long moment, cette nuit, pendant que tu étais à moitié assommé{e}. Tu te souviens de sa voix douce : « Pensez à la route. Pensez à la route que vous prendrez. » Et tu y as pensé. Tu as pensé au fleuve, à la descente, à Salvèze. Il a entendu." },
      { if: LOT_ABSENT, text: "Un des gardes, en partant, a ramassé sur la table la carte de la vallée où tu avais marqué les passages de la descente. Tu la cherches longtemps. Elle est partie avec eux." },
      { with: "tibere", text: "Tibère a un œil fermé et violet. « Ils étaient sept, dit-il. On était moins. » C'est sa façon de te consoler." },
    ],
    fx: { flag: ["iiid:nuit", "iiid:route_connue"], gold: -15, pv: -4 },
    choices: [{ back: "IIID_nouvelles" }] },

  IIID_emb_fuite: { act: "III", title: "Les vignes, la nuit", place: "orle", backName: "le haut des vignes",
    text: [
      "Les rangs de vigne montent en terrasses jusqu'à la lisière des châtaigniers. Vous les remontez courbés, les feuillets serrés contre la poitrine, en écoutant derrière vous la grange se faire retourner : les barriques qui roulent, les coups dans les planches, les jurons. Une lanterne sort, balaie les premiers rangs, rentre.",
      "Vous passez le reste de la nuit dans la cabane d'un vigneron, sous le toit de lauze, sur une litière de sarments. À l'aube, les lanternes ont disparu. La grange est un champ de bataille de douelles et de paille, et rien n'y manque, sauf une poule.",
      { with: "lison", text: "Lison s'étire sur les sarments. « On a dormi comme des rois, dit-elle. Des rois en fuite, mais des rois. »" },
    ],
    fx: { flag: "iiid:nuit", ep: ["seance", 800] },
    choices: [{ back: "IIID_nouvelles" }] },

  IIID_emb_parole: { act: "III", title: "Lothaire à la porte", place: "orle", backName: "la grange du tonnelier",
    text: [
      "Tu ouvres la porte. Lothaire Brunel est seul dans la cour, sa lanterne posée à ses pieds, ses hommes en retrait dans les vignes. Il a le cornet jumeau à l'oreille.",
      { if: { has: "taiseurs:serment" }, text: "« Bonsoir, dit-il. Vous pensez... » Il s'arrête. Il écoute. Tu penses comme on t'a appris aux Joncs, en double, et ce qu'il entend est lisse comme l'eau d'un bassin. Pour la première fois, tu vois Lothaire Brunel hésiter." },
      { if: { not: { has: "taiseurs:serment" } }, text: "« Bonsoir, dit-il. Vous pensez : combien sont-ils. Sept. Vous pensez : sous la troisième barrique. » Il sourit. « Je plaisante. Vous avez pensé à la bonde du fût vide. »" },
      "« Madame veut les feuillets ce soir, reprend-il. {{oreille#iiid_lot_peur|Moi, je fais ce que Madame veut|Moi, si je rentre les mains vides, Madame me remplace par ce commis à lunettes, et je perds le seul toit qui me protège de ce que j'ai fait aux Écueils}}. »",
    ],
    choices: [
      { label: "« Le coffret des Sourds, Lothaire. Corisande sait-elle ce qu'il contenait ? »", hide: { not: { voile: "iiid_lot_coffret" } }, fx: { flag: ["iiid:nuit", "iiid:lothaire_tenu"], ep: ["seance", 1200] }, to: "IIID_emb_tenu" },
      { label: "« Rentre à Salvèze. Dis-lui que tu n'as rien trouvé. Tu sais mentir. »", hide: { not: { voile: "iiid_lot_peur" } }, test: { dom: "social", diff: -10, label: "Retourner la peur de Lothaire contre lui", help: [{ if: { has: "taiseurs:serment" }, v: 20 }] },
        win: { fx: { flag: ["iiid:nuit", "iiid:lothaire_tenu"] }, to: "IIID_emb_tenu" }, lose: { to: "IIID_emb_defaite" } },
      { label: "Lui parler, simplement, de ce que ces feuillets vont rendre à des gens", test: { dom: "social", diff: -20, label: "Faire reculer un homme qui entend tout", help: [{ if: { has: "taiseurs:serment" }, v: 30 }, { if: { has: "metier:parole" }, v: 10 }] },
        win: { fx: { flag: ["iiid:nuit", "iiid:lothaire_tenu"] }, to: "IIID_emb_tenu" }, lose: { to: "IIID_emb_defaite" } },
      { label: "Dégainer", fight: { title: "La cour de la grange", enemies: [{ id: "iiid_lothaire", n: 1 }, { id: "iiid_garde", n: 3 }],
        win: { to: "IIID_emb_victoire" }, lose: { to: "IIID_emb_defaite" }, flee: { label: "Rentrer et filer par les vignes", dom: "discretion", diff: -10, to: "IIID_emb_fuite" } } },
    ] },

  IIID_emb_tenu: { act: "III", title: "Lothaire recule", place: "orle", backName: "la grange du tonnelier",
    text: [
      "Lothaire reste immobile un long moment. La lanterne fume à ses pieds. Puis il ramasse la lanterne, ôte le cornet de son oreille, et le range dans son gant, lentement, comme on rengaine.",
      "« Vous écoutez bien, dit-il. Mieux que moi, peut-être, puisque vous écoutez sans vous en servir. » Il lève la main ; dans les vignes, les lanternes reculent une à une. « Je dirai à Madame que la grange était vide. C'est presque vrai. » Il redescend la rue, et les chiens d'Orle aboient derrière lui jusqu'au pont.",
      { with: "salome", if: { has: "salome:maiwenn" }, text: "Salomé a regardé toute la scène depuis la porte, le coutelas à la main. Quand il est parti, elle te dit seulement : « Tu me le laisseras. Un jour. »" },
    ],
    fx: { fac: { banque: -3 } },
    choices: [{ back: "IIID_nouvelles" }] },

  IIID_emb_salome: { act: "III", title: "Salomé et Lothaire", place: "orle", backName: "la grange du tonnelier", with: "salome",
    text: [
      "Salomé sort la première, avant que tu puisses la retenir. Elle traverse la cour à grands pas, droit sur la lanterne de tête. Lothaire recule d'un pas, le seul que tu lui aies jamais vu faire en arrière.",
      "« L'écueil des Sourds, dit Salomé. Il y a trois ans. La corde de Maïwenn. » Lothaire a le cornet jumeau à l'oreille, et il entend ce qu'elle pense, et ce qu'elle pense lui fait poser la main sur sa garde. « {{oreille#iiid_lot_corde|La mer prend qui elle veut, Madame Brac, j'en suis désolé|La corde était usée ; je l'ai aidée à céder, d'un coup de lame, et j'ai remonté le coffret seul}}. »",
      "Les hommes de la Banque regardent leur maître et restent sur place. C'est une affaire entre deux personnes, et ils sont payés à la semaine.",
    ],
    choices: [
      { label: "La laisser faire", fight: { title: "Salomé et Lothaire", enemies: [{ id: "iiid_lothaire", n: 1 }],
        win: { fx: { flag: ["iiid:nuit", "iiid:lothaire_blesse", "iiid:salome_venge"], conf: { salome: 15 }, ep: ["seance", 1500] }, to: "IIID_emb_victoire" }, lose: { to: "IIID_emb_defaite" } } },
      { label: "Lui prendre le poignet : « Vivant, il témoigne. Mort, il se tait. »", fx: { flag: ["iiid:nuit", "iiid:salome_retenue"], conf: { salome: -5 } }, to: "IIID_emb_tenu" },
    ] },
});

// ==================================================================== Tibère and Rosalie
Object.assign(P, {
  IIID_tibere: { act: "III", title: "Le bout du pont", place: "orle", backName: "le bout du pont", with: "tibere",
    text: [
      "Tibère est accoudé au parapet, au bout du pont, là où l'Orle fait un remous contre la pile. Il tient une lettre pliée en quatre, dont le cachet de cire grise est rompu. Il la regarde comme on regarde une carte qu'on n'a pas le droit de jouer. Quand tu arrives, il la glisse dans son pourpoint.",
      { if: { not: { has: "tibere:espion" } }, text: "« {{oreille#iiid_tib_lettre|Une lettre de ma sœur, de Salvèze. Rien d'important|Une lettre de Brunel : il me paie cinq ducats la semaine pour dire où tu dors, et il me rappelle qu'il loge Rosalie sous son toit}}, dit-il. La ville va mal. » Il crache dans le remous. « Ma fille est là-bas. »" },
      { if: { all: [{ has: "tibere:espion" }, { not: { has: "tibere:double" } }] }, text: "« C'est lui, dit-il sans que tu demandes. Brunel. Il veut savoir où tu caches les feuillets, et par où tu descendras. » Il garde la lettre contre lui. « Il dit que Rosalie est logée et nourrie à l'hôtel Marrel. {{oreille#iiid_tib_menace|Il dit que tout va bien pour elle|Il dit que ça peut s'arrêter du jour au lendemain}}. »" },
      { if: { has: "tibere:double" }, text: "Il te tend la lettre sans attendre. « Brunel. Il veut savoir où tu caches les feuillets et par où tu descendras. Je vais lui répondre que tu prends la route du sel. » Il a un sourire de joueur. « Tu prendras le fleuve. »" },
      { if: { has: "iiid:rosalie_banque" }, text: "Tu penses à ce que Blandine a dit sous ses mots, sur le pont : Rosalie coud les livrées des gardes de la Banque, dans les combles de l'hôtel Marrel." },
    ],
    choices: [
      { label: "« Montre-moi cette lettre, Tibère. Celle de Brunel. »", hide: { any: [{ has: "tibere:espion" }, { not: { voile: "iiid_tib_lettre" } }] }, fx: { flag: ["tibere:espion", "tibere:aveu"] }, to: "IIID_tibere_aveu" },
      { label: "« Que vas-tu lui répondre ? »", hide: { any: [{ not: { has: "tibere:espion" } }, { has: "tibere:double" }] }, to: "IIID_tibere_choix" },
      { label: "« Brûle-la. Et envoie à Rosalie ce que tu as gagné avec. »", hide: { not: { has: "tibere:double" } }, to: "IIID_tibere_loyal" },
      { label: "Le laisser seul avec sa lettre", hide: { any: [{ has: "tibere:double" }, { not: { has: "tibere:espion" } }] }, to: "IIID_tibere_vend" },
      { label: "Le laisser seul avec sa lettre", hide: { all: [{ has: "tibere:espion" }, { not: { has: "tibere:double" } }] }, back: "IIID_nouvelles" },
    ] },

  IIID_tibere_aveu: { act: "III", title: "La lettre au cachet gris", place: "orle", backName: "le bout du pont", with: "tibere",
    text: [
      "Tibère te regarde longtemps. Puis il sort la lettre et te la tend, et sa main tremble un peu, lui qui a la main si sûre au combat. Le cachet est gris, sans armes. L'écriture est fine et régulière. *Où dort-il. Où sont les feuillets. Par où descendra-t-il. Votre fille va bien ; elle mange à notre table. — L. B.*",
      "« Depuis le premier jour, dit Tibère. Depuis la boutique d'Odeline. Cinq ducats la semaine. Je lui ai dit tout ce que tu faisais, au début. Puis de moins en moins. Puis des bêtises. » Il essuie sa moustache du dos de la main. « {{oreille#iiid_tib_honte|Je l'ai fait pour l'argent, voilà tout|Je l'ai fait pour qu'elle mange, et pour qu'elle sache que son père servait encore à quelque chose}}. »",
      "Il se redresse, les bras le long du corps, comme devant le capitaine du Guet le jour où on lui a pris sa plaque. « Décide. Je ne discuterai pas. »",
    ],
    fx: { ep: ["perso", 600] },
    choices: [{ label: "Décider de ce que tu fais de lui", to: "IIID_tibere_choix" }] },

  IIID_tibere_choix: { act: "III", title: "Ce que Tibère répondra", place: "orle", backName: "le bout du pont", with: "tibere",
    text: [
      "Le remous tourne contre la pile du pont, emporte une branche, la ramène, l'emporte. Tibère attend, la lettre de Brunel à la main.",
      "« Si je ne réponds pas, dit-il, Rosalie perd son lit et son pain dans la semaine. Si je réponds la vérité, tu perds tes feuillets. {{oreille#iiid_tib_choix|Je ferai ce que tu diras|Je l'ai presque fait hier soir ; j'avais la lettre écrite, et je l'ai gardée dans ma botte}}. »",
      { if: { has: "iiid:rosalie_banque" }, text: "Tu sais où dort Rosalie : sous les toits de l'hôtel Marrel, au milieu des livrées de la Banque. Brunel peut la mettre à la rue d'un mot, ou pire." },
    ],
    choices: [
      { label: "« Tu vas lui répondre. Et tu vas lui mentir : la route du sel. Nous prendrons le fleuve. »", test: { dom: "social", diff: 0, label: "Rendre courage à un homme qui a honte", help: [{ if: { conf: "tibere", min: 40 }, v: 15 }, { if: { voile: "iiid_tib_honte" }, v: 15 }, { if: { has: "iiid:rosalie_banque" }, v: 10 }] },
        win: { fx: { flag: "tibere:double", conf: { tibere: 15 }, ep: ["perso", 800] }, to: "IIID_tibere_loyal" }, lose: { fx: { conf: { tibere: -5 } }, to: "IIID_tibere_vend" } },
      { label: "« Va-t'en. Va retrouver ta fille. Tu ne me dois plus rien. »", fx: { flag: "tibere:parti", leave: "tibere", conf: { tibere: -5 } }, to: "IIID_tibere_part" },
      { label: "« Fais ce que tu veux. Moi, je ne te dirai plus rien. »", fx: { conf: { tibere: -10 } }, to: "IIID_tibere_vend" },
    ] },

  IIID_tibere_loyal: { act: "III", title: "Le feu de la forge", place: "orle", backName: "la forge d'Orle", with: "tibere",
    text: [
      "Tibère t'emmène à la forge du bourg, où le maréchal ferre un mulet. Il demande la permission, d'un signe, et pose la lettre de Brunel sur les braises. Le papier se tord, noircit, s'envole en flocons gris par la hotte.",
      "Puis il sort de son pourpoint une bourse de cuir plate, la soupèse, et te la donne. « Quarante ducats. Ce que Brunel m'a payé depuis le printemps, moins ce que j'ai bu. Fais-les porter à Rosalie, rue des Dames, par le courrier ou par les gens des chariots. {{oreille#iiid_tib_fille|Dis-lui que c'est de la part d'un ami|Dis-lui que c'est de son père, et que son père a cessé de jouer}}. »",
      { if: { has: "iiid:blandine" }, text: "Blandine redescend à Salvèze avec le premier chariot vide, après-demain, pour chercher sa mère. Elle portera la bourse. Tu lui fais confiance, et Tibère te fait confiance, et c'est une drôle de chaîne." },
      "Il remet son chapeau. « Pour la route, dit-il, j'ai répondu à Brunel que tu prends la route du sel. Il t'attendra là-bas. »",
    ],
    fx: { flag: "iiid:tibere_bourse", conf: { tibere: 10 }, ep: ["perso", 500] },
    choices: [{ back: "IIID_nouvelles" }] },

  IIID_tibere_part: { act: "III", title: "Le chariot du matin", place: "orle", backName: "le pont d'Orle",
    text: [
      "Tibère part au matin, sur le premier chariot vide qui redescend vers Salvèze, assis à côté du bouvier, sa masse en travers des genoux. Il te salue d'une main levée, à l'ancienne, deux doigts au bord du chapeau. Tu le regardes passer le pont.",
      "Au milieu du pont, il se retourne et crie quelque chose que le bruit de la rivière emporte. Tu crois entendre « la rue des Dames ». Ou « pardon ». Les deux, peut-être.",
      { if: { has: "iiid:tibere_bourse" }, text: "Il emporte avec lui les quarante ducats de Brunel, pour Rosalie." },
    ],
    fx: { ep: ["perso", 300] },
    choices: [{ back: "IIID_nouvelles" }] },

  IIID_tibere_vend: { act: "III", title: "La lettre dans la botte", place: "orle", backName: "le bout du pont",
    text: [
      "Tu laisses Tibère au bout du pont. Le soir, il mange avec vous à l'auberge, parle peu, boit moins que d'habitude. Il se couche tôt.",
      "Au matin, sa paillasse est vide et froide. Sa masse a disparu, et sa besace. Sur la paille, à la place où il dormait, une pièce de cinq ducats posée bien à plat, comme on paie une dette.",
      "Le garçon d'écurie dit qu'un cavalier à manteau noir est passé à la nuit, et qu'un homme moustachu l'a rejoint au bout du pont, une lettre à la main. Ils sont partis ensemble vers la route d'en bas.",
      "Tu {{miroir#iiid_m_tibere|n'avais rien vu venir|l'avais vu venir depuis le bout du pont, et tu as préféré le laisser choisir seul, pour pouvoir dire ensuite que c'était lui}}.",
    ],
    fx: { flag: ["tibere:vendu", "tibere:parti"], leave: "tibere", gold: 5, conf: { tibere: -20 } },
    choices: [{ back: "IIID_nouvelles" }] },
});

Object.assign(X.enemies, {
  iiid_lothaire: { name: "Lothaire Brunel", look: "humain", pv: 70, att: 64, def: 26, dmg: 8, desc: "Gants gris, lame courte, et le cornet jumeau à l'oreille : il entend venir chacun de tes coups avant que tu le portes." },
  iiid_garde: { name: "Garde de la Banque", look: "humain", pv: 32, att: 56, def: 22, dmg: 7, desc: "Manteau noir à boutons dorés, épée courte, payé à la semaine." },
});
Object.assign(X.veils, {
  iiid_tib_lettre: { fx: { ep: ["perso", 300] } },
  iiid_tib_honte: { fx: { conf: { tibere: 3 } } },
  iiid_lot_corde: { fx: { flag: "salome:maiwenn", ep: ["perso", 500] } },
  iiid_m_tibere: { fx: { ep: ["perso", 200] } },
});

// ==================================================================== Gildas
var G_SAIT = { has: "gildas:demasque" };
Object.assign(P, {
  IIID_gildas: { act: "III", title: "La chapelle des Vignerons", place: "orle", backName: "la chapelle des Vignerons", with: "gildas",
    text: [
      "La chapelle des Vignerons tient dans une seule nef de pierre blonde, au bout du bourg, avec un autel taillé dans une vieille maie de pressoir. Les ex-voto pendent aux murs : des serpettes, des sabots d'enfant, une grappe de cire. Frère Gildas est à genoux sur la dalle nue, devant l'autel, la capuche baissée. Il prie sans remuer les lèvres, à la manière du Mont.",
      { if: { all: [G_SAIT, { has: "gildas:pardonne" }] }, text: "Il se relève en t'entendant, lentement, une main sur le genou. Depuis le Mont, depuis que tu sais et que tu lui as laissé sa place, il marche un pas derrière toi au lieu d'un pas devant. « Je prie pour elle tous les jours, dit-il. Je ne demande rien pour moi. Il est trop tôt, et c'est à elle que je devrais le demander. »" },
      { if: { all: [G_SAIT, { not: { has: "gildas:pardonne" } }] }, text: "Il se relève en t'entendant et reste debout devant l'autel, les mains ouvertes le long du corps. Depuis le Mont, depuis que tu sais, il attend. Il ne t'a pas demandé pardon. Il a dit ce qu'il avait fait, et il attend ce que tu en feras." },
      { if: { not: G_SAIT }, text: "Il se relève en t'entendant et te sourit, du sourire fatigué qu'il a depuis Salvèze. « Les vignerons d'Orle prient pour la vendange, dit-il, et pour leurs fils qui partent à la guerre. Les deux prières se ressemblent beaucoup. »" },
      { if: { not: G_SAIT }, text: "Tu le regardes épousseter sa bure, et tu {{miroir#iiid_m_gildas|lui fais confiance, comme on fait confiance à un moine|lui fais confiance parce que tu as besoin qu'au moins une personne, dans toute cette affaire, soit innocente}}." },
      { if: { has: "iiir:gildas_rappele" }, text: "« Tu m'as rappelé sous le Mont pour lire, dit-il. Je lirai. Le reste, tu le décideras ici, au grand jour, et je ne discuterai pas. »" },
      { if: { relics: { min: 3 } }, text: "« Tu as maintenant assez de feuillets pour que le Registre parle, ajoute-t-il. Si tu veux, je le lirai. C'est mon métier, et c'est peut-être pour cela qu'on m'a gardé en vie. »" },
    ],
    choices: [
      { label: "Lui demander, enfin, d'où vient la cicatrice qu'il cache sous sa capuche", hide: { any: [G_SAIT, { not: { has: "gildas:cicatrice" } }] }, to: "IIID_gildas_aveu" },
      { label: "Décider de ce que tu fais de lui", hide: { any: [{ not: G_SAIT }, { has: "gildas:pardonne" }, { seen: "IIID_gildas_decide" }] }, to: "IIID_gildas_decide" },
      { label: "Lui demander de lire le Registre", if: { relics: { min: 3 } }, why: "Il faut au moins trois feuillets pour que le Registre se lise.", hide: { any: [{ seen: "IIID_registre" }, { all: [G_SAIT, { not: { has: "gildas:pardonne" } }] }] }, to: "IIID_registre" },
      { label: "Le laisser à sa prière", back: "IIID_nouvelles" },
    ] },

  IIID_gildas_aveu: { act: "III", title: "Le bougeoir de cuivre", place: "orle", backName: "la chapelle des Vignerons", with: "gildas",
    text: [
      "Gildas te regarde un long moment. Puis il repousse sa capuche des deux mains. À la racine des cheveux, au-dessus de la tempe gauche, une cicatrice en croissant, rose encore, mal refermée sur les bords.",
      "« Un bougeoir de cuivre, dit-il. La nuit des Lanternes, à minuit, dans la boutique d'Odeline. Je suis le Gardien des Taiseurs. Je venais l'empêcher de vendre le Beffroi à la Banque. Elle m'a frappé. Je l'ai repoussée. Elle est tombée dans l'escalier de la cave. Elle était morte quand je suis descendu. J'ai cherché le cornet, je ne l'ai pas trouvé, j'ai remis le bougeoir sur l'établi et je suis parti. »",
      "Il dit tout cela d'une voix égale, sans s'arrêter, comme on récite une leçon apprise par cœur à force de se la répéter la nuit. « J'ai voulu te le dire cent fois. J'ai choisi de me taire. C'est le seul mensonge que je sais faire. »",
      { with: "lison", text: "Lison a pâli. Elle savait qu'il était le Gardien. Elle ignorait le reste, ou elle a voulu l'ignorer." },
    ],
    fx: { flag: ["gildas:aveu", "gildas:demasque", "odeline:verite"], ep: ["histoire", 3000] },
    choices: [{ label: "Décider de ce que tu fais de lui", to: "IIID_gildas_decide" }] },

  IIID_gildas_decide: { act: "III", title: "Ce que tu fais de Gildas", place: "orle", backName: "la chapelle des Vignerons", with: "gildas",
    text: [
      "La chapelle est fraîche. Une guêpe tardive bute contre le vitrail. Gildas attend, debout, à trois pas de toi, les mains vides.",
      "Tu {{miroir#iiid_m_odeline|penses à Odeline, à ce qu'elle aurait voulu|penses à la porte que tu as claquée, ce soir-là, et à ce que tu lui as crié avant de partir ; Gildas l'a poussée, et toi, tu l'as laissée seule}}.",
      { if: { has: "poids:amour" }, text: "Tu penses aussi à quelqu'un, à Salvèze, à qui tu n'as jamais rien dit. On garde des choses en soi, et elles font des dégâts, que ce soient des aveux ou des tendresses." },
    ],
    choices: [
      { label: "« Je te pardonne. Viens avec moi jusqu'au bout. »", fx: { flag: "gildas:pardonne", conf: { gildas: 20 }, fac: { taiseurs: 5 }, ep: ["perso", 800] }, to: "IIID_gildas_pardon" },
      { label: "« Tu viens à Salvèze, et tu diras devant le Guet ce que tu as fait. Ensuite, on verra. »", fx: { flag: "iiid:gildas_temoin", conf: { gildas: 5 } }, to: "IIID_gildas_sursis" },
      { label: "« Va-t'en. Je ne veux plus te voir. »", fx: { flag: "gildas:chasse", leave: "gildas", conf: { gildas: -20 }, fac: { taiseurs: -5 } }, to: "IIID_gildas_chasse" },
    ] },

  IIID_gildas_pardon: { act: "III", title: "Le pardon", place: "orle", backName: "la chapelle des Vignerons", with: "gildas",
    text: [
      "Gildas ferme les yeux. Il reste ainsi longtemps, et quand il les rouvre, ils sont secs. « Je ne sais pas ce qu'on fait d'un pardon, dit-il. Au Mont, on apprend à se taire. Personne ne nous apprend à recevoir. »",
      "Il tire de sa manche une petite feuille pliée, couverte de signes serrés. « La clé des Taiseurs pour le Registre. Les secrétaires d'Aymeric Vasse écrivaient la parole de la reine en signes de main, notés à l'encre. Je l'ai recopiée de mémoire, au Mont, il y a trente ans. Elle est à toi, avec le reste. »",
      { with: "lison", text: "Lison détourne la tête et se tait. Plus tard, sur la place, elle te dira seulement : « Moi, je n'aurais pas pu. Je ne sais pas si tu as raison. »" },
    ],
    fx: { item: "iiid_cle_signes" },
    choices: [{ back: "IIID_nouvelles" }] },

  IIID_gildas_sursis: { act: "III", title: "Le sursis", place: "orle", backName: "la chapelle des Vignerons", with: "gildas",
    text: [
      "Gildas incline la tête. « C'est juste, dit-il. Le Guet de Salvèze m'entendra. Je le lui dois, et je le dois aux voisins d'Odeline, qui ont cru que tu l'avais poussée. »",
      "Il reprend sa besace au pied de l'autel. Il marchera avec vous jusqu'à la ville, un pas en arrière, et il dormira à l'écart de votre feu. Le soir, tu le verras prier seul, à l'écart du camp, à genoux sur les cailloux.",
      { if: { has: "mandat" }, text: "Si Gildas parle devant le Guet, le mandat contre toi tombe. Tu y as pensé avant lui. Il y a pensé aussi, et il l'a gardé pour lui." },
    ],
    choices: [{ back: "IIID_nouvelles" }] },

  IIID_gildas_chasse: { act: "III", title: "Le chemin du Mont", place: "orle", backName: "la chapelle des Vignerons",
    text: [
      "Gildas ramasse sa besace et son bâton. Il passe devant toi sans te toucher et s'arrête sur le seuil de la chapelle, dans le soleil. « Le Registre a besoin d'un lecteur, dit-il. Frère Romaric, au Mont, sait lire les signes. Moins bien que moi. Assez. »",
      "Il prend le chemin qui monte vers l'abbaye. Tu le regardes jusqu'au premier lacet. Il garde les yeux sur le chemin.",
      "Le soir, l'aubergiste du Pressoir te remet une lettre qu'un novice a descendue du Mont.",
    ],
    choices: [{ back: "IIID_nouvelles" }] },

  IIID_gildas_lettre: { act: "III", title: "La lettre du Gardien", place: "orle", backName: "l'auberge du Pressoir", without: "gildas", after: "gildas:chasse",
    text: [
      "L'aubergiste te tend un pli de papier épais, fermé d'un simple fil de lin noué. Pas de sceau, pas de nom dessus. L'écriture est celle d'un copiste, droite et régulière, sans une rature.",
      "*Je descends à Salvèze par la vieille route du sel, seul. {{loupe#iiid_gildas_lettre|Je prierai pour toi à chaque halte|J'irai au Guet dire ce que j'ai fait la nuit des Lanternes, pour que le mandat tombe ; ensuite je serai à la Grande Basse, sur la digue de Sorne, comme le Gardien doit y être}}. Ne me cherche pas.*",
      "*Je te laisse la clé des signes du Registre. Elle t'aidera à le lire, ou à le faire lire. — G.*",
      "Dans le pli, une seconde feuille, couverte de petits signes de main dessinés à l'encre, chacun suivi d'un mot.",
    ],
    fx: { item: "iiid_cle_signes" },
    choices: [{ back: "IIID_nouvelles" }] },
});

// ==================================================================== Lison
Object.assign(P, {
  IIID_lison: { act: "III", title: "La grève sous le pont", place: "orle", backName: "la grève sous le pont", with: "lison",
    text: [
      "Sous la dernière arche du pont, la grève est faite de galets ronds et de bois flotté. Lison est assise sur une souche blanchie, sa gaffe en travers des genoux. Une barque plate des marais est tirée sur les galets à côté d'elle, et le batelier qui l'a menée jusqu'ici, un vieil homme des Joncs, mange du pain plus loin, sans vous regarder.",
      "Elle tient un carré de dentelle grise, pas plus grand que la main. « Ma grand-mère, dit-elle. Elle a fait remonter ça par le fleuve. Neuf jours de barque pour un mouchoir. »",
      { if: { has: "iiic:muret_message" }, text: "« Celle du muret me disait de ne pas te laisser entrer seul{e} au Mont, ajoute Lison. Celle-ci me rappelle aux Joncs. Ma grand-mère change d'avis comme le vent sur les marais, et chaque fois elle a ses raisons. »" },
      "La dentelle est fine, d'un motif de joncs et de poissons. {{loupe#iiid_dentelle|Un ouvrage des Joncs-Bas, comme on en vend sur les quais|Sous la loupe, les fils dessinent des lettres : « Ramène le cornet aux Joncs avant la Grande Basse. Le reste est l'affaire du Gardien. »}}",
      { if: { has: "lison:loyale" }, text: "« Je sais ce qu'elle dit, ajoute Lison. Je l'ai lue avec les doigts, comme elle m'a appris. » Elle plie la dentelle en quatre, puis en huit, et la glisse dans sa manche. « Je lui répondrai à Salvèze. En face. Elle m'a appris à dire les choses en face, aussi. »" },
      { if: { not: { any: [{ has: "lison:loyale" }, { has: "lison:partie" }] } }, text: "« Elle veut que je rentre, dit Lison, avec le cornet. {{oreille#iiid_lison_reste|Elle a sans doute raison|Si tu me demandes de rester, je reste, et je ne remettrai plus les pieds aux Joncs}}. »" },
    ],
    choices: [
      { label: "« Reste. »", hide: { any: [{ has: "lison:loyale" }, { has: "lison:partie" }] }, to: "IIID_lison_choix" },
      { label: "« Va retrouver ta grand-mère. Je garde le cornet. »", hide: { any: [{ has: "lison:loyale" }, { has: "lison:partie" }] }, fx: { flag: "lison:partie", leave: "lison", conf: { lison: -10 }, fac: { taiseurs: -5 } }, to: "IIID_lison_part" },
      { label: "T'asseoir à côté d'elle, sur la souche, sans rien dire", hide: { not: { has: "lison:loyale" } }, fx: { conf: { lison: 5 } }, to: "IIID_lison_choix" },
      { label: "La laisser au bord de l'eau", back: "IIID_nouvelles" },
    ] },

  IIID_lison_choix: { act: "III", title: "Lison reste", place: "orle", backName: "la grève sous le pont", with: "lison",
    text: [
      { if: { not: { has: "lison:loyale" } }, text: "Lison regarde la rivière un long moment. Puis elle se lève, va jusqu'au vieux batelier, et lui parle à voix basse dans la langue des Joncs. Le vieil homme hoche la tête, range son pain, remet sa barque à l'eau, et s'en va vers l'aval sans un regard en arrière." },
      { if: { not: { has: "lison:loyale" } }, text: "Elle revient s'asseoir. « Voilà, dit-elle. Je viens de désobéir à une femme de quatre-vingt-quatre ans, aveugle, qui m'a élevée. » Elle te donne un coup d'épaule. « Tâche d'en valoir la peine. »" },
      { if: { has: "lison:loyale" }, text: "Vous restez assis côte à côte sur la souche, à regarder l'Orle charrier ses branches. Lison lance des galets plats qui ricochent quatre fois, cinq fois, et compte à voix basse dans la langue des Joncs." },
      { tendre: true, text: "Au bout d'un moment, sa tête se pose contre ton épaule. Elle la laisse là, sans rien dire, jusqu'à ce que le soleil passe derrière le Mont.", else: "Au bout d'un moment, elle se lève, essuie ses mains sur ses cuisses, et te tend la main pour t'aider à te relever." },
    ],
    fx: { flag: "lison:loyale", conf: { lison: 10 }, fac: { taiseurs: -3 } },
    choices: [{ back: "IIID_nouvelles" }] },

  IIID_lison_part: { act: "III", title: "La barque des Joncs", place: "orle", backName: "la grève sous le pont",
    text: [
      "Lison se lève, ramasse sa gaffe, et pousse la barque à l'eau avec le vieux batelier. Elle monte à l'avant. « Je dirai à ma grand-mère que tu gardes le cornet, dit-elle. Elle te fera chercher. Elle fait toujours chercher. »",
      "La barque s'éloigne dans le courant. Au premier coude de la rivière, Lison lève la gaffe au-dessus de sa tête, une fois, et tu ne sais pas si c'est un salut ou une menace. Chez elle, c'est souvent les deux.",
    ],
    choices: [{ back: "IIID_nouvelles" }] },

  IIID_lison_lettre: { act: "III", title: "La dentelle de Lison", place: "orle", backName: "le quai d'Orle", without: "lison", after: "lison:partie",
    text: [
      "Un batelier des marais t'attend au bas du pont, un paquet de toile cirée à la main. Il te le remet sans un mot, en tirant sur son bonnet, et repart vers sa barque.",
      "Dans la toile, une bande de dentelle grise, d'un motif de joncs et de poissons, que tu reconnais au premier coup d'œil : c'est le point de Lison, plus lâche et plus vif que celui de sa grand-mère. {{loupe#iiid_lison_dentelle|Un simple ruban de dentelle, un souvenir|Sous la loupe, les fils forment des lettres : « Je suis au port aux Sauniers. J'ai dit non à ma grand-mère. Ma barque t'attend. L. »}}",
      "Tu enroules la dentelle autour de ton poignet. Elle sent l'eau des marais.",
    ],
    choices: [{ back: "IIID_nouvelles" }] },
});

// ==================================================================== Salomé and the monks
Object.assign(P, {
  IIID_salome: { act: "III", title: "Les radeaux de fûts", place: "orle", backName: "la berge des radeaux", with: "salome",
    text: [
      "Salomé t'emmène en aval du pont, sur la berge où les vignerons d'Orle assemblent leurs radeaux de printemps : des fûts vides liés par des perches de châtaignier, qu'on charge de barriques pleines et qu'on laisse descendre jusqu'à Salvèze avec la crue. Trois hommes y travaillent, au maillet et à la corde mouillée.",
      "« Quatre jours jusqu'à la ville, dit-elle, si la rivière garde ce niveau. Il y a les rapides de la Gorge-aux-Moines, à mi-chemin. Les vignerons y perdent un radeau sur dix. » Elle tâte un nœud, le resserre. « {{oreille#iiid_salome_barre|Une rivière, c'est de l'eau douce, ça se mène|Depuis Maïwenn, j'ai jamais tenu une barre sans penser qu'elle allait casser dans ma main}}. »",
      { if: { has: "iiic:salome_mere" }, text: "Elle a noué à son poignet le sachet de toile de Katell. Quand elle serre un nœud, le sachet bat contre la corde mouillée, et elle le remet en place du pouce." },
      { if: { has: "salome:maiwenn" }, text: "« Brunel descendra par la route, ajoute-t-elle. Les hommes de la Banque montent à cheval. Sur l'eau, il me faudra trois jours de moins pour arriver avant lui. Je veux arriver avant lui. »" },
      { if: { has: "salome:plonge" }, text: "Elle a replongé aux Écueils. Tu le vois à sa façon de regarder l'eau : comme une chose qu'on connaît, et qu'on a cessé de craindre tout à fait." },
    ],
    choices: [
      { label: "Lui demander de tenir la barre du radeau", fx: { flag: "iiid:radeau", conf: { salome: 5 } }, back: "IIID_nouvelles" },
      { label: "La laisser aux vignerons et à leurs nœuds", back: "IIID_nouvelles" },
    ] },

  IIID_moines: { act: "III", title: "Les moines du Mont", place: "orle", backName: "le porche de l'église",
    text: [
      "Deux moines du Mont attendent sous le porche de l'église, assis sur le banc de pierre des mendiants. L'un est vieux et voûté, de grosses lunettes cerclées de corne sur le nez : Frère Romaric, le bibliothécaire, le seul frère qui ait le droit de parler. L'autre, plus jeune, porte un sac de toile et garde les yeux baissés.",
      "« Dom Évrard nous envoie, dit Romaric. Le Conseil veut l'argenterie du Mont pour payer le duc. L'abbé la donnera, ou il la cachera ; il n'a pas encore décidé. {{oreille#iiid_prosper|Il prie pour la paix|Il dit que si la ville tombe, le duc d'Aveline fermera le Mont comme il a fermé ses abbayes du nord, et qu'il préfère encore la donner à toi}}. »",
      "Il pose la main sur le sac. « Le Mont peut faire trois choses. Envoyer des frères à Salvèze, pour ouvrir nos maisons aux affamés. Sonner nos cloches, le jour où il le faudra : toutes les églises du delta suivent celles du Mont. Et témoigner : nos livres disent que la reine a été muette par le couteau, et non par la folie. »",
      { if: { fac: "moines", max: -10 }, text: "Romaric ajoute, plus bas : « L'abbé se souvient de ce que tu as fait au Mont. Il nous envoie quand même. Il dit que la mémoire est un luxe, en temps de guerre. »" },
      { if: { has: "tresor:iiim_calice" }, text: "« Le cellérier pleure son calice, dit Romaric sans te regarder. Le vrai. Il dit qu'un pèlerin l'a emporté. L'abbé fait semblant de le croire. »" },
      { if: { all: [{ has: "tresor:iiim_heures" }, { item: "iiim_tr_heures" }] }, text: "Le jeune moine regarde ton sac, d'où dépasse un coin de velours pourpre. Il fait un signe de main, très vite. Romaric traduit : « Il dit : garde-les au sec. »" },
    ],
    choices: [
      { label: "Demander au Mont ses frères, ses cloches et son témoignage", test: { dom: "social", diff: 0, label: "Gagner l'appui du Mont-Taciturne", help: [{ if: { fac: "moines", min: 10 }, v: 20 }, { with: "gildas", v: 10 }, { if: { voile: "iiid_prosper" }, v: 15 }, { if: { has: "taiseurs:serment" }, v: 10 }] },
        win: { fx: { flag: "iiid:moines_allies", fac: { moines: 10 }, ep: ["seance", 1000] }, to: "IIID_moines_pacte" }, lose: { fx: { flag: "iiid:moines_cloches", fac: { moines: 3 } }, to: "IIID_moines_pacte" } },
      { label: "Lui demander de lire le Registre de la Muette", if: { relics: { min: 3 } }, why: "Il faut au moins trois feuillets pour que le Registre se lise.", hide: { seen: "IIID_registre" }, to: "IIID_registre" },
      { label: "Le remercier, et le laisser à son banc", back: "IIID_nouvelles" },
    ] },

  IIID_moines_pacte: { act: "III", title: "Ce que promet le Mont", place: "orle", backName: "le porche de l'église",
    text: [
      { if: { has: "iiid:moines_allies" }, text: "Romaric hoche la tête, plusieurs fois, comme s'il comptait. « Trois choses, dit-il. Les frères descendront avec la crue, sur les radeaux des vignerons. Les cloches sonneront quand tu enverras ce signe. » Il te tend une médaille de plomb frappée d'une bouche close. « Et je témoignerai moi-même, devant le Conseil, si on me le demande. J'ai quatre-vingts ans. Le Conseil me fait moins peur que l'escalier de la bibliothèque. »",
        else: "Romaric secoue la tête, désolé. « L'abbé ne risquera pas ses frères dans la ville. Pas encore. Mais les cloches, il te les donne : le jour où il le faudra, envoie ce signe, et le Mont sonnera. » Il te tend une médaille de plomb frappée d'une bouche close." },
      "Le jeune moine se lève, reprend son sac, et fait un signe de main qui t'échappe. Romaric sourit. « Il dit : que la parole te garde. Chez nous, c'est une bénédiction. Chez vous, je crois, ce serait une menace. »",
    ],
    fx: { item: "iiid_medaille" },
    choices: [{ back: "IIID_nouvelles" }] },
});

Object.assign(X.items, {
  iiid_cle_signes: { name: "La clé des signes", kind: "document", form: "billet", hand: "soignee", unique: true,
    text: "*Main ouverte, paume en haut : la terre. Main fermée sur la bouche : le serment. Deux doigts en croix : la nuit. Pouce sur la gorge : {{loupe#iiid_cle|le silence|le couteau}}. Main posée à plat sur le cœur : la reine.*\n\n*La parole de la reine se lit dans l'ordre des signes, jamais dans celui des mots.*",
    desc: "Une feuille couverte de signes de main dessinés à l'encre, chacun suivi d'un mot. La clé des secrétaires d'Aymeric Vasse, recopiée de mémoire par Frère Gildas." },
  iiid_medaille: { name: "La médaille du Mont", kind: "outil", price: 1, unique: true, desc: "Une médaille de plomb frappée d'une bouche close. Envoyée au Mont-Taciturne, elle fait sonner ses cloches, et toutes celles du delta après elles." },
});
Object.assign(X.veils, {
  iiid_lison_reste: { fx: { conf: { lison: 3 } } },
  iiid_dentelle: { fx: { flag: "iiid:ordre_ancolie" } },
  iiid_lison_dentelle: { fx: { flag: "iiid:lison_signe", ep: ["perso", 300] } },
  iiid_gildas_lettre: { fx: { flag: "iiid:gildas_guet" } },
  iiid_m_odeline: { fx: { ep: ["perso", 400] } },
  iiid_m_gildas: { fx: { ep: ["perso", 200] } },
});

// ==================================================================== the Register read
var LIT_GILDAS = { all: [{ present: "gildas" }, { has: "gildas:pardonne" }] };
Object.assign(P, {
  IIID_registre: { act: "III", title: "Les feuillets sur la table", place: "orle", backName: "la salle haute du Pressoir", takes: "night",
    text: [
      { first: true, text: "Tu demandes la salle haute du Pressoir pour la nuit, deux chandelles de cire et une nappe propre. Tu sors les feuillets de leur toile cirée et tu les poses côte à côte, sans les toucher plus qu'il ne faut. Ils sont faits d'un vélin épais, jauni sur les bords, et d'une même main : de petits dessins serrés, des mains ouvertes, fermées, posées, croisées, et entre eux quelques mots de liaison." },
      { again: true, text: "Les feuillets attendent sur la nappe, entre deux chandelles neuves. Tu les reprends un à un, plus lentement que la première fois." },
      { if: { relic: "f_beffroi" }, text: "Le feuillet du Beffroi, le premier, porte en marge une couronne de sel dessinée à la plume, que tu as regardée cent fois sans la comprendre." },
      { if: { relic: "f_saline" }, text: "Le feuillet de la Saline sent encore la saumure. Le sel a mangé un coin, mais pas l'encre." },
      { if: { relic: "f_ecueils" }, text: "Le feuillet des Écueils est taché de cire d'ambre, celle du phare de l'Ouïe, en trois gouttes alignées." },
      { if: { relic: "f_mont" }, text: "Le feuillet du Mont, le dernier venu, est le plus propre. Il a passé trois siècles derrière le miroir." },
      { if: { relics: { max: 2 } }, text: "C'est peu. Les signes s'arrêtent au bord d'un feuillet et reprennent au bord d'un autre, sans suite, comme une conversation dont on entendrait une phrase sur trois." },
      { if: LIT_GILDAS, with: "gildas", text: "Frère Gildas s'assied en face de toi, retrousse ses manches, et pose ses deux mains à plat de part et d'autre des feuillets, sans les toucher. « Je lirai, dit-il. Toi, garde la loupe. Ce que la reine a fait écrire en signes, je le dis. Ce que ses secrétaires ont caché sous l'encre, c'est toi qui le verras. »" },
      { if: { all: [{ not: LIT_GILDAS }, { seen: "IIID_moines" }] }, text: "Frère Romaric monte l'escalier en soufflant, une marche après l'autre, et s'assied devant les feuillets. Il pose ses lunettes de corne, les essuie, les remet. « Les signes des secrétaires, dit-il. Je les ai appris dans un livre, il y a cinquante ans. Je n'ai jamais rien eu à lire avec. »" },
      { if: { item: "iiid_cle_signes" }, text: "Tu poses à côté des feuillets la clé des signes que Gildas t'a laissée. Les dessins de la feuille et ceux du vélin se répondent, un pour un." },
    ],
    choices: [
      { label: "Laisser Gildas lire", if: { relics: { min: 3 } }, why: "Il faut au moins trois feuillets pour que le Registre se lise.", hide: { not: LIT_GILDAS }, fx: { set: { iiid_lecteur: "gildas" } }, to: "IIID_registre_charte" },
      { label: "Laisser Frère Romaric lire", if: { relics: { min: 3 } }, why: "Il faut au moins trois feuillets pour que le Registre se lise.", hide: { any: [LIT_GILDAS, { not: { seen: "IIID_moines" } }] }, fx: { set: { iiid_lecteur: "prosper" } }, to: "IIID_registre_charte" },
      { label: "Faire descendre Frère Romaric du Mont pour qu'il lise", if: { relics: { min: 3 } }, why: "Il faut au moins trois feuillets pour que le Registre se lise.", hide: { any: [LIT_GILDAS, { seen: "IIID_moines" }] }, fx: { set: { iiid_lecteur: "prosper" }, gold: -1 }, to: "IIID_registre_charte" },
      { label: "Essayer de lire toi-même ce que disent les feuillets", hide: { seen: "IIID_registre_partiel" }, to: "IIID_registre_partiel" },
      { label: "Remettre les feuillets dans leur toile", back: "IIID_nouvelles" },
    ] },

  IIID_registre_charte: { act: "III", title: "La Charte des Hautes-Eaux", place: "orle", backName: "la salle haute du Pressoir",
    text: [
      { if: { is: { iiid_lecteur: "gildas" } }, text: "Gildas lit d'une voix basse et lente, en suivant les signes du bout de l'index, à un doigt du vélin. Il traduit au fur et à mesure, et sa voix change : ce sont les mots d'une autre qui passent par sa bouche.",
        else: "Romaric lit en suivant les signes de sa loupe de corne, et il s'arrête souvent pour consulter la clé, ou sa mémoire. Sa voix de vieil homme chevrote, puis s'affermit à mesure, comme si les signes lui rendaient des forces." },
      "« *Moi, Ysaure, reine du delta, privée de langue et non de raison, je témoigne par les mains de mes secrétaires.* » Un silence. « *J'ai signé la Charte des Hautes-Eaux en l'an dix de mon règne, devant le peuple des marais assemblé à Sorne. Elle dit : la terre gagnée sur la mer appartient à qui l'a gagnée, à ses enfants et aux enfants de ses enfants, et nul marchand ne peut l'acheter sans l'accord de tous ceux qui l'ont gagnée.* »",
      "Sous la loupe, entre les signes, une encre plus pâle remonte, d'une autre main, plus pressée. *{{loupe#iiid_reg_un|Copie fidèle, scellée par le chancelier|L'original de la Charte est à Sorne, dans la salle du trésor, sous le sceau de la reine, avec la couronne de sel. Qui le lira devant le peuple rendra la terre aux marais}}.* — A. V.",
      { if: { has: "taiseurs:connus" }, text: "A. V. Aymeric Vasse, le chancelier, le premier des Taiseurs. Sa main à lui, sous la main de la reine." },
    ],
    choices: [{ label: "« Continuez. »", to: "IIID_registre_comptoirs" }] },

  IIID_registre_comptoirs: { act: "III", title: "La nuit des Comptoirs", place: "orle", backName: "la salle haute du Pressoir",
    text: [
      "« *La nuit de la Saint-Martin, les maisons Marrel, Delisle, Fourcaud et Vernier sont entrées dans mon palais avec leurs gens d'armes. Ma garde était payée par elles depuis l'été. On m'a tirée de mon lit. On m'a menée dans la salle des Comptes, sous le palais, là où l'on garde l'or.* »",
      "La voix du lecteur s'arrête. Puis elle reprend, plus bas. « *Ricard Marrel a dit : elle témoignera devant le duc. Gaultier Delisle a dit : alors qu'elle ne parle plus. Le bourreau de la ville a fait ce qu'on lui demandait. J'ai entendu Ricard Marrel compter à voix haute pendant ce temps, comme on compte une caisse, pour ne pas entendre.* »",
      "Sous les signes, la main pressée du chancelier a ajouté : *{{loupe#iiid_reg_deux|Que Dieu garde la reine|La reine a écrit ce feuillet de sa main gauche, la droite brisée ; les secrétaires ont seulement recopié les signes au propre}}.*",
      { if: { is: { iiid_lecteur: "gildas" } }, with: "gildas", text: "Gildas a fermé les yeux. Il dit les dernières phrases de mémoire, sans regarder le vélin. Il les connaît. Au Mont, on les apprend aux Gardiens, une fois, la nuit de leur serment." },
      { if: { is: { iiid_lecteur: "prosper" } }, text: "Romaric retire ses lunettes et se frotte les yeux. « Le livre de l'abbaye dit : muette par le couteau. Je l'ai lu cent fois. Je croyais que c'était une image. »" },
      { with: "lison", text: "Lison s'est levée et regarde par la fenêtre. Sa grand-mère lui a raconté cette nuit-là, enfant, comme une histoire pour s'endormir. Elle apprend ce soir que c'était vrai mot pour mot." },
    ],
    choices: [{ label: "« Et les terres ? »", to: "IIID_registre_actes" }] },

  IIID_registre_actes: { act: "III", title: "Les faux actes", place: "orle", backName: "la salle haute du Pressoir",
    text: [
      "« *Au matin, ils ont fait écrire par mes propres clercs des actes de cession, datés de l'an premier d'une République qui avait six heures. Les salines de Grisemotte à Marrel. Les pêcheries de Port-Vasier à Fourcaud. Les prés salés des Joncs à Vernier. Le péage de l'Orle à Delisle. Ils ont gratté la date, ensuite, pour que l'encre ait l'air d'une autre nuit.* »",
      "« *Ceux qui liront ceci un jour : les actes portent tous la même faute. Mes clercs les ont écrits sous la menace, et ils ont mis à chacun, au bas de la troisième ligne, un point de trop après mon nom. Cherchez le point.* »",
      "Sous la loupe, la main du chancelier, une dernière fois : *{{loupe#iiid_reg_trois|Fin du feuillet|Les copies des faux actes sont aux Archives de la République, dans le coffre des Comptoirs ; l'une d'elles porte le point et la date grattée, et suffit à les faire tous tomber}}.*",
      { if: { voile: "iiid_acte" }, text: "Tu revois le titre des salines que Corisande a déroulé entre les assiettes, et le grattage au bas de la première ligne." },
    ],
    choices: [{ label: "Laisser le lecteur finir", to: "IIID_registre_fin" }] },

  IIID_registre_fin: { act: "III", title: "Le Registre lu", place: "orle", backName: "la salle haute du Pressoir",
    text: [
      "Les chandelles ont brûlé jusqu'aux bobèches. Le lecteur pose les mains à plat sur la nappe, de part et d'autre des feuillets, et se tait. Dehors, les coqs d'Orle commencent à se répondre d'une cour à l'autre.",
      "La reine a parlé. Par la main gauche, par les mains de ses secrétaires, par une bouche qui n'était pas la sienne, à trois siècles de distance, dans une auberge de vignerons. Les feuillets qui manquent diront le reste : la fuite, Sorne, le trésor. Mais ce qui compte est dit. La Charte existe, et les titres sont faux.",
      { if: { is: { iiid_lecteur: "gildas" } }, with: "gildas", text: "Gildas ouvre les yeux. « J'ai gardé ce secret toute ma vie, dit-il. J'ai tué pour lui, sans le vouloir. C'est la première fois que je l'entends à voix haute, dans une pièce avec une fenêtre. » Il regarde le jour qui se lève. « On devrait toujours lire ces choses-là le matin. »" },
      { if: { is: { iiid_lecteur: "prosper" } }, text: "Romaric essuie ses lunettes. « Je témoignerai de ce que j'ai lu cette nuit, dit-il, devant qui tu voudras. C'est la seule chose qu'un bibliothécaire sait faire : dire ce qui est écrit. »" },
      "Tu {{miroir#iiid_m_registre|ranges les feuillets avec soin, avec les gestes du métier|ranges les feuillets et tu penses, malgré toi, à ce que Corisande donnerait pour qu'ils brûlent cette nuit, et le chiffre te fait honte}}.",
    ],
    fx: { flag: "registre:lu", ep: ["histoire", 5000], fac: { hautes: 10, taiseurs: 5 } },
    choices: [{ back: "IIID_nouvelles" }] },

  IIID_registre_partiel: { act: "III", title: "Une phrase sur trois", place: "orle", backName: "la salle haute du Pressoir",
    text: [
      "Tu passes la nuit penché{e} sur les feuillets, la loupe à la main. Les signes de main se lisent mal sans la clé des secrétaires ; certains reviennent, que tu finis par reconnaître : une main posée à plat sur le cœur, un pouce sur la gorge, une main ouverte paume en haut.",
      { if: { item: "iiid_cle_signes" }, text: "Avec la clé de Gildas, tu reconnais ces signes-là : la reine, le couteau, la terre. Mais sans les feuillets qui manquent, les phrases s'arrêtent au bord du vélin." },
      "Sous la loupe, entre les signes, une encre plus pâle remonte par endroits, une main pressée. *{{loupe#iiid_reg_partiel|… et que Dieu garde la reine …|… la terre gagnée sur la mer appartient à qui l'a gagnée … l'original à Sorne, dans la salle du trésor …}}* Le reste est perdu dans les marges des feuillets que tu n'as pas.",
      "Au matin, tu en sais un peu plus qu'hier, et beaucoup moins qu'il ne faudrait. Il faudra d'autres feuillets, et une meilleure lectrice ou un meilleur lecteur que toi.",
    ],
    fx: { flag: "iiid:registre_partiel", ep: ["seance", 800] },
    choices: [
      { label: "Revenir à la table, et chercher qui saura lire", hide: { relics: { max: 2 } }, back: "IIID_registre" },
      { back: "IIID_nouvelles" },
    ] },
});

Object.assign(X.clues, {
  iiid_c_point: { rev: "B", text: "Les faux actes de cession de la nuit des Comptoirs portent tous, au bas de la troisième ligne, un point de trop après le nom de la reine. Une copie porte le point et la date grattée : elle est aux Archives, dans le coffre des Comptoirs." },
  iiid_c_charte: { rev: "R", text: "L'original de la Charte des Hautes-Eaux est à Sorne, dans la salle du trésor, sous le sceau de la reine, avec la couronne de sel." },
});
Object.assign(X.veils, {
  iiid_reg_un: { fx: { clue: "iiid_c_charte", ep: ["perso", 500] } },
  iiid_reg_trois: { fx: { clue: "iiid_c_point", ep: ["perso", 500] } },
  iiid_reg_partiel: { fx: { clue: "iiid_c_charte" } },
  iiid_reg_deux: { fx: { ep: ["perso", 300] } },
  iiid_m_registre: { fx: { ep: ["perso", 200] } },
});

// ==================================================================== the way down to Salvèze
var SEL_PIEGE = { all: [{ any: [{ has: "tibere:double" }, { has: "tibere:vendu" }, { has: "iiid:route_connue" }] }, { not: { has: "iiid:lothaire_tenu" } }] };
Object.assign(P, {
  IIID_veille: { act: "III", title: "La dernière veillée à Orle", place: "orle", backName: "la grange du tonnelier", takes: "evening",
    text: [
      "Le dernier soir, tu fais le compte de ce que tu emportes. Les instruments dans leurs étuis, le cornet, la loupe, le diapason, le miroir. Les feuillets dans la toile cirée. Des provisions pour quatre jours : du pain de seigle, du lard, un fromage de chèvre sec, une gourde de vin d'Orle. Et les nouvelles, qui pèsent plus lourd que le reste.",
      { if: { has: "registre:lu" }, text: "Le Registre a parlé. Tu emportes aussi ses phrases, et elles tiennent toutes seules dans ta tête : la Charte, la salle des Comptes, le point de trop au bas de la troisième ligne." },
      { if: { has: "iiid:registre_partiel" }, text: "Le Registre t'a donné une phrase sur trois. Tu les retournes en marchant, en cherchant les deux autres." },
      { if: { has: "iiid:moines_allies" }, text: "Sur la berge, les vignerons chargent les radeaux de printemps, et six moines du Mont y prennent place entre les barriques, leurs sacs sur les genoux, pour descendre ouvrir leurs maisons aux affamés de Salvèze." },
      { if: { has: "iiid:moines_cloches" }, text: "Tu as dans ta poche la médaille de plomb du Mont, frappée d'une bouche close. Le jour venu, elle fera sonner les cloches du delta." },
      { if: { has: "iiid:gildas_temoin" }, with: "gildas", text: "Frère Gildas prie à l'écart, à genoux sur les cailloux de la cour. Il ira au Guet. Il l'a promis, et il tient ses promesses comme il tient sa langue." },
      { if: { has: "iiid:gildas_guet" }, without: "gildas", text: "Quelque part sur la vieille route du sel, un moine marche seul vers le Guet de Salvèze." },
      { if: { has: "iiid:ordre_ancolie" }, with: "lison", text: "Lison a recousu la dentelle de sa grand-mère dans la doublure de sa cape. Elle dit que c'est pour s'en souvenir quand elle lui répondra." },
      { if: { has: "iiid:lison_signe" }, without: "lison", text: "La dentelle de Lison est enroulée à ton poignet. Une barque t'attend au port aux Sauniers." },
      { if: { has: "iiid:tibere_bourse" }, text: "Les quarante ducats de Brunel sont partis vers la rue des Dames, avec Blandine et le premier chariot vide." },
      { if: { has: "iiid:salome_venge" }, with: "salome", text: "Salomé a nettoyé son coutelas trois fois. Elle garde pour elle tout ce qui touche à Lothaire depuis la grange. Elle dort mieux, ou elle fait semblant mieux." },
      { if: { has: "iiid:salome_retenue" }, with: "salome", text: "Salomé te parle moins depuis la grange. Elle te passe le pain quand même." },
      { if: { has: "iiid:cor_accord" }, text: "Le sauf-conduit de la Maison Marrel est dans ton pourpoint. Corisande t'attend à Salvèze, et elle a l'habitude qu'on paie ce qu'on doit." },
      { if: { has: "iiid:sauf_lu" }, text: "Tu sais ce que dit le sauf-conduit sous la loupe. Tu le gardes quand même. Un papier qui ment peut encore ouvrir une porte." },
      { if: { has: "iiid:hector" }, text: "Hector doit être loin au sud, à cette heure, sans sa cuirasse." },
      { if: { has: "iiid:hector_salveze" }, text: "Le bailli a fait partir Hector ce matin vers Salvèze, assis sur un chariot de vin, les mains liées devant lui." },
      { if: { has: "iiid:cahier" }, text: "Les trois cahiers de Théodule sont cousus dans la doublure de ton sac, comme il les portait. Le greffier est reparti vers le sud à l'aube, sa besace plate sur l'épaule." },
      { if: { all: [{ has: "iiid:cor_feinte" }, { not: { has: "iiid:feinte_eventee" } }] }, text: "Corisande Marrel croit tenir ta parole. Maître Fissot a déjà porté ton nom au grand livre de la maison, à la colonne des créances." },
      { if: { has: "iiid:mine_plomb" }, text: "Tu as voulu changer les deux lingots de la reine chez l'orfèvre d'Orle. Il en a gratté un au couteau : du plomb, sous une peau d'argent. Il te les a rendus avec un liard, pour la peine." },
      "Il reste à choisir le chemin. L'Orle en crue, la route des Combes, ou la vieille route du sel, par les crêtes.",
    ],
    choices: [
      { label: "À cheval, par la route des Combes : trois chevaux du maquignon (12 ducats)", fx: { gold: -12, set: { iiid_route: "cheval" } }, to: "IIID_cheval" },
      { label: "À cheval, en réquisitionnant les chevaux du relais de la Banque avec le sauf-conduit", hide: { not: { item: "iiid_sauf_conduit" } }, fx: { set: { iiid_route: "cheval" }, flag: "iiid:relais_banque" }, to: "IIID_cheval" },
      { label: "En radeau, sur la crue, avec Salomé à la barre", hide: { not: { has: "iiid:radeau" } }, fx: { set: { iiid_route: "radeau" } }, to: "IIID_radeau" },
      { label: "En radeau, sur la crue, en payant un vigneron pour le piloter (4 ducats)", hide: { has: "iiid:radeau" }, fx: { gold: -4, set: { iiid_route: "radeau" } }, to: "IIID_radeau" },
      { label: "À pied, par la vieille route du sel de la reine", fx: { set: { iiid_route: "sel" } }, to: "IIID_sel" },
    ] },

  IIID_cheval: { act: "III", title: "Le pont de Saint-Vrain", place: null, takes: "day",
    text: [
      "La route des Combes descend la vallée de l'Orle par la rive droite, entre les vignes et les carrières, et elle passe la rivière cinq fois sur cinq ponts de pierre. Vous chevauchez au trot, les bêtes fraîches, et les villages défilent : des volets clos, des enfants sur les murets, un curé qui vous bénit sans savoir qui vous êtes.",
      { if: { has: "iiid:relais_banque" }, text: "Au relais de la Banque, le palefrenier a lu le sauf-conduit, puis l'a relu, en remuant les lèvres, et vous a donné ses trois meilleures bêtes en soupirant." },
      "Le deuxième soir, au pont de Saint-Vrain, vous vous arrêtez dans les saules. Sur le pont, à la lueur d'une lanterne sourde, quatre hommes en cuirasse bleue mesurent le tablier à la toise et notent sur une tablette. Un cinquième, en manteau gris, leur tient la lanterne. Sur l'épaule de son manteau, une broderie : {{pie#iiid_broderie|un simple écusson de ville|la tour sur une vague, la livrée des gens du prévôt Delisle}}.",
      { if: { has: "iiid:lettre_prevot" }, text: "Les ponts de l'Orle sans garde, au premier jour de mai. Tu as la lettre dans ton pourpoint." },
      { if: { has: "iiid:romuald_pont" }, text: "Sous la première arche, dans les orties, tu reconnais des cuirasses bleues sans écusson, couchées à plat ventre. Les hommes de Romuald tiennent le pont, comme leur sergent l'a promis. Ils attendent un signal." },
    ],
    choices: [
      { label: "Les observer depuis les saules, sans bouger, jusqu'à ce qu'ils partent", test: { dom: "discretion", diff: 0, label: "Rester invisible dans les saules", help: [{ with: "lison", v: 10 }, { if: { arch: "rodeur" }, v: 10 }] },
        win: { fx: { clue: "iiid_c_eclaireurs", ep: ["seance", 800] }, to: "IIID_cheval2" }, lose: { to: "IIID_cheval_combat" } },
      { label: "Avancer sur le pont, l'écusson d'Aveline à l'épaule, et leur parler comme un des leurs", hide: { not: { item: "iiid_ecusson" } }, test: { dom: "social", diff: -10, label: "Te faire passer pour un éclaireur d'Aveline", help: [{ if: { has: "tresor:iiid_bague" }, v: 10 }, { if: { has: "metier:parole" }, v: 10 }, { with: "tibere", v: 10 }] },
        win: { fx: { clue: "iiid_c_eclaireurs", flag: "iiid:eclaireurs_dupes", ep: ["seance", 1200] }, to: "IIID_cheval2" }, lose: { to: "IIID_cheval_combat" } },
      { label: "Siffler les hommes de Romuald, sous l'arche, et prendre les éclaireurs entre deux feux", hide: { not: { has: "iiid:romuald_pont" } }, fx: { clue: "iiid_c_eclaireurs", flag: "iiid:saint_vrain_tenu", fac: { conseil: 3 }, ep: ["seance", 1200] }, to: "IIID_cheval2" },
      { label: "Les charger avant qu'ils remontent à cheval", to: "IIID_cheval_combat" },
      { label: "Les contourner par le gué, plus bas, et continuer", to: "IIID_cheval2" },
    ] },

  IIID_cheval_combat: { act: "III", title: "Sur le pont", place: null,
    text: [
      "La lanterne se tourne vers les saules. Un cri en langue du nord. Les cuirasses bleues lâchent la toise et tirent l'épée, et l'homme en manteau gris s'enfuit à toutes jambes vers l'autre rive.",
    ],
    combat: { title: "Le pont de Saint-Vrain", enemies: [{ id: "soldat_aveline", n: 3 }], terrain: "nature",
      win: { fx: { clue: "iiid_c_eclaireurs", ep: ["seance", 1000] }, to: "IIID_cheval2" }, lose: { fx: { pv: -3, gold: -5 }, to: "IIID_cheval2" },
      flee: { label: "Remonter en selle et passer le gué au galop", dom: "nature", diff: -10, to: "IIID_cheval2" } },
    choices: [] },

  IIID_cheval2: { act: "III", title: "La route des Combes", place: null,
    text: [
      { outcome: "win", text: "Sur le pont désert, une tablette de cire tombée dans la poussière. Des chiffres : la largeur du tablier, la hauteur des parapets, le poids que porte l'arche. Et au bas, gravé d'une pointe : *1er mai, deux colonnes, sans garde.*" },
      { outcome: "lose", text: "Tu reprends la route avec une épaule raide et la bourse plus légère. Les cuirasses bleues sont reparties vers le nord, plus vite que vous vers le sud." },
      { if: { has: "iiid:saint_vrain_tenu" }, text: "Les éclaireurs ont jeté leur toise dans l'Orle pour courir plus vite. Romuald a repêché leur tablette au bout d'une pique, l'a lue, te l'a donnée, et il a repris sa place sous l'arche." },
      "Les jours suivants, la vallée s'élargit. Les vignes laissent place aux prés, puis aux saulaies, puis aux premiers roseaux. L'air sent le sel bien avant qu'on voie l'eau. Sur la route, vous croisez des chariots qui montent, chargés de familles, et pas un qui descend.",
      { if: { has: "iiid:eclaireurs_dupes" }, text: "Le sergent d'Aveline t'a donné, en guise d'adieu, le mot de passe de la semaine : *Sainte-Gemme*. Il t'a souhaité bonne chasse." },
    ],
    choices: [{ label: "Descendre vers Salvèze", big: true, to: "IIID_fin" }] },

  IIID_radeau: { act: "III", title: "La Gorge-aux-Moines", place: null, takes: "day",
    text: [
      "Le radeau de fûts descend la crue comme une feuille sur un caniveau, en tournant parfois sur lui-même. Pendant deux jours, l'Orle est large et brune, et vous n'avez qu'à pousser à la perche pour éviter les arbres arrachés. Les vignes défilent, puis les carrières, puis les falaises.",
      { with: "salome", text: "Salomé tient la longue rame de queue des deux mains, debout, les jambes écartées. Elle se tait. Elle lit l'eau." },
      { without: "salome", text: "Le vigneron qui pilote s'appelle Martial. Il a fait la descente vingt fois, et il chante pour se donner du courage à chaque méandre." },
      "Le troisième jour, la rivière se resserre entre deux murs de calcaire gris, et le grondement monte. La Gorge-aux-Moines. {{echo#iiid_gorge|L'eau gronde contre les rochers et couvre tout le reste|Contre la paroi, une voix de vieux batelier, qui chantait ici il y a cent ans : « À gauche du rocher du Moine, toujours à gauche, même quand l'eau te tire à droite »}}.",
    ],
    choices: [
      { label: "Tenir à gauche du rocher du Moine, contre le courant", hide: { not: { voile: "iiid_gorge" } }, fx: { ep: ["seance", 1200] }, to: "IIID_radeau2" },
      { label: "Laisse-moi faire", who: "salome", test: { dom: "nature", diff: -10, label: "Salomé mène le radeau dans les rapides" }, win: { fx: { conf: { salome: 5 } }, to: "IIID_radeau2" }, lose: { fx: { food: -2, pv: -3 }, to: "IIID_radeau2" } },
      { label: "Pousser à la perche de toutes tes forces pour suivre le courant", test: { dom: "nature", diff: -10, label: "Passer les rapides de la Gorge-aux-Moines", help: [{ with: "tibere", v: 5 }, { with: "lison", v: 10 }, { if: { arch: "rodeur" }, v: 10 }] },
        win: { to: "IIID_radeau2" }, lose: { fx: { food: -2, pv: -4, gold: -5 }, to: "IIID_radeau2" } },
    ] },

  IIID_radeau2: { act: "III", title: "Le delta", place: null,
    text: [
      { outcome: "lose", text: "Le radeau heurte le rocher du Moine de travers. Deux fûts se détachent, une barrique roule à l'eau, et toi avec. Tu remontes sur les perches en crachant de l'eau brune, les feuillets serrés contre ta poitrine dans leur toile cirée. Tes provisions, elles, descendent la rivière sans vous." },
      { outcome: "win", text: "Le radeau passe la gorge dans un nuage d'écume, frôle le rocher du Moine à une longueur de bras, et ressort dans une eau large et calme, comme on sort d'une colère." },
      "Le quatrième jour, l'Orle se jette dans la Salve, et la Salve dans les roseaux. Le ciel s'élargit. Des hérons se lèvent devant le radeau. À l'horizon, sous une brume grise, une tache plus sombre, hérissée de clochers et de fumées : Salvèze.",
      { if: { has: "iiid:moines_allies" }, text: "Derrière vous, à une demi-lieue, les radeaux des vignerons portent les six moines du Mont, assis entre les barriques, immobiles comme des ballots." },
    ],
    choices: [{ label: "Descendre vers Salvèze", big: true, to: "IIID_fin" }] },

  IIID_sel: { act: "III", title: "La vieille route du sel", place: null, takes: "day",
    text: [
      "La vieille route du sel quitte la vallée par le flanc et monte sur les crêtes, à travers les buis et les genévriers. Elle est pavée de grandes dalles usées, creusées au milieu par trois siècles de mules chargées de sel qui montaient vers les Combes. Elle est à l'abandon. L'herbe pousse entre les dalles.",
      "Toutes les lieues, une borne de granit, haute comme un enfant, porte une couronne grossièrement taillée et un chiffre. Sur la vingtième, la mousse a mangé presque tout, mais le chiffre se lit encore : *{{loupe#iiid_borne|Sorne, vingt lieues|Sorne, vingt lieues. À la Grande Basse, la route continue sous l'eau : suis les bornes jusqu'à la porte}}.*",
      "Quand tu poses la main sur la borne, elle vibre un peu, comme une cloche qu'on aurait touchée la veille. Une pierre chantante, plantée sur la route de la reine.",
      { if: { has: "passe:voleur" }, text: "Tu as passé ton enfance à éviter les grandes routes. Celle-ci te plaît : on y voit venir les gens de loin, et personne ne vient." },
    ],
    choices: [
      { label: "Frapper le diapason sur la borne, pour lui rendre ses notes", once: true, fx: { recharge: { echo: 3 }, ep: ["perso", 200] }, to: "IIID_sel2" },
      { label: "Continuer sur les crêtes", to: "IIID_sel2" },
    ] },

  IIID_sel2: { act: "III", title: "Le col des Sauniers", place: null,
    text: [
      "Le troisième jour, la route passe un col étroit, entre deux rochers que les muletiers appelaient les Sauniers, et redescend vers le delta en lacets. D'en haut, on voit tout : les roseaux, la Salve, la mer grise au fond, et Salvèze sous ses fumées.",
      { if: { all: [SEL_PIEGE, LOT_ACTIF] }, text: "Au milieu du col, un cheval broute, attaché à un genévrier. Lothaire Brunel est assis sur une dalle, les gants gris posés à côté de lui, et il mange une pomme. Quatre manteaux noirs l'entourent. « La route du sel, dit-il. On me l'avait dit. J'ai cru que c'était un mensonge, et j'ai failli aller vous attendre au fleuve. » Il croque. « Vous pensez : Tibère. »" },
      { if: { all: [SEL_PIEGE, LOT_ACTIF, { has: "iiid:lothaire_blesse" }] }, text: "Il se lève avec une raideur au flanc, et sa main gauche y revient d'elle-même, là où la grange l'a marqué." },
      { if: { all: [SEL_PIEGE, { has: "iiid:emb_gagne" }] }, text: "Parmi les manteaux noirs, tu reconnais des hommes de la grange, ceux qui sont rentrés à Salvèze à pied ou en sang. Ils te reconnaissent aussi, et ils reculent d'un pas." },
      { if: { all: [SEL_PIEGE, LOT_ABSENT] }, text: "Au milieu du col, six manteaux noirs se lèvent des rochers, et leur chef, un homme épais à la voix de caserne, vous barre la route, la main levée. « La Maison Marrel vous attendait par ici. On nous avait bien renseignés. »" },
      { if: { not: SEL_PIEGE }, text: "Le col est vide. Un berger passe avec ses chèvres, vous salue, vous demande des nouvelles de la ville, et repart en hochant la tête quand vous les lui donnez." },
    ],
    choices: [
      { label: "Dégainer", hide: { not: SEL_PIEGE }, fight: { title: "Le col des Sauniers", enemies: [{ id: "iiid_garde", n: 4 }], terrain: "nature",
        win: { fx: { ep: ["seance", 1500], fac: { banque: -5 } }, to: "IIID_fin" }, lose: { fx: { gold: -10, pv: -4 }, to: "IIID_fin" },
        flee: { label: "Dévaler les lacets en coupant par les buis", dom: "nature", diff: -10, to: "IIID_fin" } } },
      { label: "Leur couper la route en descendant par le vieux chemin des muletiers, à travers les éboulis", hide: { not: SEL_PIEGE }, test: { dom: "nature", diff: -10, label: "Descendre un éboulis sans te rompre le cou", help: [{ if: { has: "iiid:emb_gagne" }, v: 10 }, { if: { arch: "rodeur" }, v: 15 }, { with: "salome", v: 5 }] },
        win: { fx: { ep: ["seance", 1000] }, to: "IIID_fin" }, lose: { fx: { pv: -5 }, to: "IIID_fin" } },
      { label: "Leur montrer le sauf-conduit de la Maison Marrel", hide: { any: [{ not: SEL_PIEGE }, { not: { item: "iiid_sauf_conduit" } }] }, fx: { flag: "iiid:sauf_montre" }, to: "IIID_fin" },
      { label: "Descendre vers Salvèze", big: true, hide: SEL_PIEGE, to: "IIID_fin" },
    ] },

  IIID_fin: { act: "III", title: "Les murs de Salvèze", place: null, takes: "evening",
    text: [
      "Salvèze est là, au bout de la dernière lieue, et elle a changé de visage depuis ton départ. Des fumées montent de trois quartiers à la fois. Les cloches sonnent à toute heure, pas pour les offices. Sur les remparts du côté de la terre, on a dressé des palissades neuves, de bois blanc, et des hommes en armes s'y promènent.",
      { if: { is: { iiid_route: "radeau" } }, text: "Vous arrivez par l'eau, au crépuscule, parmi les barques des pêcheurs d'anguilles qui rentrent. Le port aux Sauniers est à une portée de voix. Personne ne surveille les radeaux de vin." },
      { if: { is: { iiid_route: "cheval" } }, text: "Vous arrivez par la route de terre, au crépuscule. La porte des Sauniers est gardée par le Guet, qui fouille les chariots. Plus loin, au bord des marais, tu vois la porte des Sauniers, et devant elle des hommes en manteau gris, à la livrée d'une tour sur une vague." },
      { if: { is: { iiid_route: "sel" } }, text: "Vous arrivez par la vieille route du sel, qui finit dans les salines désaffectées au pied des remparts. Les dalles de la reine s'enfoncent sous la vase, et continuent, tu le sais, plus loin que la vase." },
      { if: { has: "iiid:sauf_montre" }, text: "Les gardes de la Banque se sont rangés devant le sauf-conduit, à regret, et vous ont laissé descendre. Ils vous suivent à distance depuis le col." },
      { if: { has: "mandat" }, text: "Le mandat t'attend derrière ces murs, avec ton nom dessus. Il faudra entrer sans qu'on te voie." },
      { with: "tibere", text: "Tibère regarde la ville en plissant les yeux. « La rue des Dames est là-bas, dit-il. Derrière la halle aux Draps. Ou derrière ce qu'il en reste. »" },
      { with: "lison", text: "Lison sent l'air. « Ça sent le brûlé et la marée basse, dit-elle. Ça sent la maison. »" },
      { with: "gildas", text: "Frère Gildas a rabattu sa capuche. Il regarde la ville où il a tué une femme, sans rien dire." },
      { with: "salome", text: "Salomé compte les mâts dans le port. « La moitié manque, dit-elle. Ils sont partis avant la guerre. Les marins sentent ces choses-là. »" },
      "Tu {{miroir#iiid_m_retour|rentres pour sauver la ville, pour finir ce qu'Odeline a commencé|rentres parce que c'est la seule ville où quelqu'un a guetté ton retour, un soir, et que tu voudrais qu'on le guette encore}}.",
    ],
    choices: [{ label: "Entrer dans Salvèze", big: true, exit: true, to: "IV_debut" }] },
});

Object.assign(X.clues, {
  iiid_c_eclaireurs: { rev: "S", text: "Au pont de Saint-Vrain, sur l'Orle, des éclaireurs d'Aveline mesurent le tablier à la toise, guidés par un homme à la livrée du prévôt. Leur tablette porte : « 1er mai, deux colonnes, sans garde »." },
  iiid_c_bornes: { rev: "R", text: "Sur la vieille route du sel, la vingtième borne dit, sous la mousse : « À la Grande Basse, la route continue sous l'eau : suis les bornes jusqu'à la porte. »" },
});
Object.assign(X.veils, {
  iiid_borne: { fx: { clue: "iiid_c_bornes", ep: ["perso", 300] } },
  iiid_broderie: { fx: { flag: "iiid:livree_prevot" } },
  iiid_m_retour: { fx: { ep: ["perso", 300] } },
});

// ==================================================================== the old men of the hall (how the side quests of the heights are heard of)
Object.assign(P, {
  IIID_rumeurs: { act: "III", title: "Les vieux de la halle", place: "orle", backName: "le banc des vieux, sous la halle",
    text: [
      "Contre le pilier du fond de la halle, trois vieux vignerons tiennent un banc à eux seuls, un pichet entre les genoux. Ils ont posé la serpe l'année où leurs fils l'ont prise. Depuis, ils passent leurs journées à raconter ce qui se passe plus haut que les vignes, et ils parlent volontiers à qui remplit le pichet.",
      "« Aux Essarts, dit le premier, les charbonniers paient un tribut chaque dimanche à des soldats d'Aveline qui ont pris leur église. Deux moutons, un sac de seigle, une barrique. Le bailli le sait. Il regarde ailleurs. »",
      "Le deuxième parle du lac de Combe-Blanche, au fond d'un cirque, à six heures de marche. Un ancien moine du Mont y pêche sous la glace depuis trente ans, seul, et descend une fois l'an acheter du sel. « La truite, qu'il dit. Trente ans de truites. » Puis il parle des Argentières, la vieille mine d'argent de la reine, au-dessus des derniers mélèzes. La Banque l'a rachetée et fermée. Une gardienne de chèvres y voit monter des chercheurs, et les voit redescendre les mains vides.",
      "Le troisième ne parle que du clos Vachon, sur le chemin des vignes basses. Le vieux Vachon se meurt, et son gendre vend déjà les quarante barriques du cellier à un commissionnaire de Salvèze. « Avec le trésor des Vachon dedans, dit-il, et il rit. Celui de la reine. Ça fait trois cents ans que les Vachon en parlent au cabaret. »",
      { if: { has: "metier:parole" }, text: "Tu reconnais le ton : celui des vieux du quai, qui mêlent le vrai au reste pour qu'on leur remplisse le verre. Tu fais le tri en écoutant." },
      { with: "tibere", text: "Tibère remplit lui-même le pichet, sans qu'on lui demande. « Des vieux qui parlent, dit-il, ça vaut mieux qu'un registre. Ils n'ont plus rien à vendre. »" },
    ],
    fx: { questSeen: ["IIID_q_essarts", "IIID_q_lac", "IIID_q_mine", "IIID_q_fut"] },
    choices: [
      { label: "Leur payer un pichet (un ducat)", fx: { gold: -1, ep: ["perso", 100] }, back: "III_hub" },
      { back: "III_hub" },
    ] },
});

// ==================================================================== side quest: the frozen lake
Object.assign(P, {
  IIID_lac: { act: "III", title: "Le lac de Combe-Blanche", place: "iiid_lac", hub: true, routes: true, backName: "la cabane au bord du lac",
    text: [
      { first: true, text: "Le lac de Combe-Blanche dort au fond d'un cirque de rochers, sous les neiges, à six heures de marche au-dessus d'Orle. Il est encore gelé, d'une glace grise et mate qui craque au soleil de midi avec des bruits de bois sec. Au milieu, une pierre noire dépasse de la glace, ronde comme un dos de bête. Sur la rive, une cabane de pierres sèches, un tas de bois, et un trou rond creusé dans la glace à dix pas du bord, avec une ligne qui y descend." },
      { first: true, text: "Un vieil homme est assis devant le trou, sur un tabouret à trois pieds, enveloppé dans une peau de mouton. Il tient la ligne entre deux doigts nus et rougis. Il te regarde arriver sans se lever, comme on regarde le temps changer." },
      { again: true, text: "Le lac gris, la pierre noire au milieu, la cabane. La ligne de l'ermite descend toujours dans son trou rond." },
      { again: true, after: "iiid:lac", text: "Le trou de pêche est refermé par une glace neuve. La ligne de l'ermite pend, enroulée, à un clou de la cabane." },
      { again: true, after: "tresor:iiid_coupe", text: "Séraphin te demande de faire chanter la coupe d'ambre une fois. Tu passes un doigt mouillé sur le bord. Il écoute la note jusqu'au bout, les yeux fermés, puis il te remercie d'un signe de tête." },
    ],
    choices: [
      { label: "Parler au vieil homme qui pêche", hide: { seen: "IIID_lac_ermite" }, to: "IIID_lac_ermite" },
      { label: "Avancer sur la glace, vers la pierre noire", hide: { any: [{ not: { seen: "IIID_lac_ermite" } }, { has: "iiid:lac" }] }, to: "IIID_lac_glace" },
      { label: "Revoir Séraphin, avant de redescendre", hide: { any: [{ not: { has: "iiid:lac" } }, { seen: "IIID_lac_fin" }] }, to: "IIID_lac_fin" },
    ] },

  IIID_lac_ermite: { act: "III", title: "Séraphin", place: "iiid_lac", backName: "la cabane au bord du lac",
    text: [
      "Il s'appelle Séraphin. Il a été moine au Mont, il y a longtemps, et il en est parti le jour où il a eu envie de parler. « Ça m'a pris à quarante ans, dit-il, comme une fièvre. Depuis, je parle au lac. Il répond mal, mais il écoute. » Il a des yeux très clairs, délavés par la neige, et une barbe jaunie par la fumée.",
      "« Je pêche la truite, dit-il. {{oreille#iiid_seraphin|Il y en a de belles, sous la glace, au printemps|Je pêche un coffre. Celui de Clovis, le secrétaire de la reine, qui est passé sur ce lac gelé la nuit de la Saint-Martin, il y a trois cents ans, et que la glace a pris avec ce qu'il portait}}. »",
      "Il tire sur sa ligne, la remonte, la redescend. Au bout, un crochet de fer à quatre branches, un grappin de puits. « La glace partira dans six jours, sept peut-être. Après, l'eau sera trop trouble jusqu'à l'automne. Et moi, je n'ai plus l'âge de passer un autre hiver ici. »",
      { if: { item: "diapason" }, text: "Il regarde le diapason à ta ceinture, longtemps. « Celui-là, dit-il, je l'ai vu une fois, entre les mains de l'abbé d'avant. Le lac garde les voix, tu sais. Comme toutes les eaux froides. »" },
      { with: "gildas", text: "Frère Gildas et Séraphin se sont reconnus d'un regard. Ils échangent un signe de main, un seul, et Séraphin sourit." },
    ],
    fx: { meet: "iiid_seraphin" },
    choices: [
      { label: "« Je vais vous aider à le trouver, ce coffre. »", hide: { not: { voile: "iiid_seraphin" } }, fx: { conf: { gildas: 2 }, ep: ["perso", 300] }, back: "IIID_lac" },
      { label: "« Que cherchez-vous vraiment, sous cette glace ? »", hide: { voile: "iiid_seraphin" }, fx: { devoile: "iiid_seraphin" }, to: "IIID_lac_aveu" },
      { label: "Le laisser à sa ligne", back: "IIID_lac" },
    ] },

  IIID_lac_aveu: { act: "III", title: "Le coffre de Clovis", place: "iiid_lac", backName: "la cabane au bord du lac",
    text: [
      "Séraphin rit doucement. « Tu as de bons yeux, ou de bonnes oreilles. » Il pose la ligne sur la glace et se frotte les doigts. « Un coffre. Celui de Clovis, le secrétaire de la reine. La nuit de la Saint-Martin, il fuyait vers le Mont avec ce qu'il avait pu sauver, et il a pris par le lac pour gagner une journée. La glace l'a pris, lui et le coffre. On a retrouvé son corps au printemps, sur la rive. Le coffre, jamais. »",
      "« Je le pêche depuis trente-deux ans. J'ai remonté une boucle d'argent, une charnière de cuivre, et un soulier. » Il montre du menton la cabane. « Ils sont cloués au-dessus de ma porte. »",
    ],
    choices: [{ back: "IIID_lac" }] },

  IIID_lac_glace: { act: "III", title: "La pierre noire", place: "iiid_lac", backName: "la pierre noire, au milieu du lac",
    text: [
      "La glace porte, en grinçant. Tu avances vers la pierre noire en traînant les pieds, comme Séraphin te l'a montré, pour répartir le poids. Sous tes semelles, à travers la glace grise, l'eau est noire et profonde. La pierre, de près, est une roche ronde et lisse, couverte de lichen orange, et quand tu poses la main dessus, elle vibre, très faiblement, comme une cloche qu'on aurait frappée la veille.",
      "Autour de toi, le lac {{echo#iiid_lac_voix|craque sous le soleil, et le vent siffle dans les rochers du cirque|rend une voix d'homme, essoufflée, d'il y a trois siècles : « Trente pas vers la cascade gelée, depuis la Pierre ! Trente pas, Clovis, et tu es sur la rive ! » Puis un craquement, un cri, et l'eau}}.",
      { with: "salome", text: "Salomé s'est arrêtée à dix pas derrière toi, sur la glace. Elle regarde l'eau noire en dessous, et ses mains se ferment toutes seules." },
    ],
    choices: [
      { label: "Frapper le diapason sur la pierre noire", once: true, fx: { recharge: { echo: 3 }, ep: ["perso", 200] }, back: "IIID_lac_glace" },
      { label: "Compter trente pas depuis la pierre, vers la cascade gelée", hide: { not: { voile: "iiid_lac_voix" } }, fx: { ep: ["perso", 500] }, to: "IIID_lac_trou" },
      { label: "Sonder la glace au hasard, avec le grappin de l'ermite", test: { dom: "savoir", diff: -20, label: "Deviner où la glace a pris un homme il y a trois siècles", help: [{ if: { has: "metier:mains" }, v: 10 }, { if: { arch: "rodeur" }, v: 10 }] },
        win: { to: "IIID_lac_trou" }, lose: { to: "IIID_lac_froid" } },
    ] },

  IIID_lac_trou: { act: "III", title: "Trois toises d'eau claire", place: "iiid_lac", backName: "le trou dans la glace",
    text: [
      "Séraphin vient avec sa hache de glace, et vous creusez à deux, chacun son tour, jusqu'à ce que l'eau monte dans le trou. Il fait sombre dessous, puis tes yeux s'habituent, et la glace laisse passer une lumière verte. Trois toises plus bas, sur un fond de cailloux blancs, une forme carrée, sombre, prise dans les algues.",
      "« Le voilà, dit Séraphin d'une voix qui se casse. Trente-deux ans, et il était à trente pas de la pierre. » Il regarde le trou, la ligne, ses mains. « Le grappin ne mordra pas sur un coffre aussi lisse. Il faudrait que quelqu'un descende. »",
      { if: { has: "salome:plonge" }, with: "salome", text: "Salomé ôte déjà ses bottes. « Trois toises, dit-elle. C'est rien. C'est de l'eau froide et douce, avec une corde. J'ai replongé pour pire. »" },
      { if: { not: { has: "salome:plonge" } }, with: "salome", text: "Salomé regarde le trou sans bouger. « Je te tiens la corde, dit-elle. Je descends pas. Pas encore. »" },
    ],
    choices: [
      { label: "Laisse-moi faire", who: "salome", hide: { not: { has: "salome:plonge" } }, test: { dom: "nature", diff: 0, label: "Salomé plonge sous la glace" },
        win: { fx: { conf: { salome: 10 } }, to: "IIID_lac_coffre" }, lose: { fx: { pv: -2 }, to: "IIID_lac_froid" } },
      { label: "Plonger toi-même, une corde à la taille", test: { dom: "nature", diff: -20, label: "Plonger sous la glace d'un lac de montagne", help: [{ if: { item: "corde" }, v: 10 }, { with: "salome", v: 10 }, { with: "tibere", v: 5 }] },
        win: { to: "IIID_lac_coffre" }, lose: { to: "IIID_lac_froid" } },
      { label: "Pêcher le coffre au grappin, en visant l'anse de fer", test: { dom: "savoir", diff: -10, label: "Accrocher une anse à trois toises de fond", help: [{ if: { has: "metier:mains" }, v: 15 }, { with: "gildas", v: 5 }] },
        win: { to: "IIID_lac_coffre" }, lose: { to: "IIID_lac_froid" } },
    ] },

  IIID_lac_froid: { act: "III", title: "L'eau noire", place: "iiid_lac", backName: "la rive du lac",
    text: [
      "La glace cède d'un coup, sans prévenir, avec un bruit de vitre. L'eau te prend jusqu'à la poitrine, puis par-dessus la tête, et le froid te serre comme une main. Tu remontes, tu cognes la glace, tu trouves le trou à tâtons.",
      { with: "any", text: "Des mains t'attrapent par le col et te tirent sur la glace, à plat ventre. On te traîne jusqu'à la cabane." },
      { without: "any", text: "Séraphin te tend sa ligne, et tu t'y agrippes. Il tire, avec une force étonnante pour son âge. Tu rampes jusqu'à la cabane." },
      "Le vieil homme te frotte avec de la neige, puis avec de la graisse, puis il te roule dans sa peau de mouton près du feu. Le trou se referme déjà. « Le lac a gardé Clovis, dit-il. Il garde aussi son coffre. C'est peut-être bien comme ça. » Il te donne la boucle d'argent clouée au-dessus de sa porte. « Prends ça. Ça vaut un peu. Ça m'a coûté trente-deux ans. »",
    ],
    fx: { pv: -5, flag: "iiid:lac", set: { iiid_lac: "perdu" }, quest: "IIID_q_lac", item: "iiid_boucle" },
    choices: [{ back: "IIID_lac" }] },

  IIID_lac_coffre: { act: "III", title: "Le coffre de Clovis", place: "iiid_lac", backName: "la cabane au bord du lac",
    text: [
      "Le coffre remonte dans un nuage de vase, ruisselant, plus petit qu'on l'imaginait : une boîte de chêne cerclée de fer, longue comme un avant-bras, que le froid a gardée intacte. La serrure est rouillée en bloc. Séraphin la fait sauter d'un coup de hache, les mains tremblantes.",
      "Dedans, dans un sac de cuir ciré, une coupe. Elle est {{pie#iiid_coupe|taillée dans un ambre sombre, belle et rare, comme on en voit chez les orfèvres des Changeurs|taillée dans l'ambre chantant des Écueils, le même que les instruments des Taiseurs : quand tu fais glisser un doigt mouillé sur le bord, elle rend une note longue et pure}}. Sous la coupe, une lettre roulée dans un étui d'os.",
      "*À Aymeric. {{loupe#iiid_clovis|Je porte la coupe au Mont, comme convenu. Dieu nous garde|La reine vit. Elle a passé le lac à pied, cette nuit, avant moi, appuyée sur deux frères. Elle a écrit avec sa main gauche : « Qu'on garde la coupe pour le jour où l'on boira à la Charte. »}} — Clovis.*",
      "Séraphin a pris la lettre et la lit, et relit, et se tait longtemps. Puis il te tend la coupe. « La lettre, je la garde. La coupe est à toi. Tu l'as pêchée. »",
    ],
    fx: { ep: ["seance", 1500] },
    choices: [
      { label: "Prendre la coupe", fx: { item: "iiid_tr_coupe", clock: { tresors: 1 }, flag: ["tresor:iiid_coupe", "iiid:lac"], set: { iiid_lac: "coupe" }, quest: "IIID_q_lac" }, to: "IIID_lac_fin" },
      { label: "La laisser à Séraphin : « Buvez-y, le jour venu. »", fx: { flag: "iiid:lac", set: { iiid_lac: "rendue" }, quest: "IIID_q_lac", fac: { moines: 5, taiseurs: 5 }, ep: ["perso", 600] }, to: "IIID_lac_fin" },
    ] },

  IIID_lac_fin: { act: "III", title: "La ligne enroulée", place: "iiid_lac", backName: "la cabane au bord du lac",
    text: [
      "Séraphin enroule sa ligne autour de sa main, lentement, et l'accroche à un clou au-dessus de sa porte, à côté de la boucle d'argent et du soulier. « Trente-deux ans, dit-il. Je crois que je vais redescendre au Mont. Pour parler. Ils auront besoin de quelqu'un qui parle, avec ce qui vient. »",
      { if: { is: { iiid_lac: "rendue" } }, text: "La coupe d'ambre est posée sur sa table, à côté du pain. Il la touche de temps en temps du bout du doigt, pour l'entendre." },
      { if: { is: { iiid_lac: "perdu" } }, text: "Il regarde le lac, où le trou s'est refermé. « Il reviendra au printemps prochain, peut-être. Le lac rend ce qu'il veut. »" },
      "Il te raccompagne jusqu'au bord du cirque, et te montre le chemin du bas d'un geste de la main, le signe du Mont pour *va en paix*, puis il ajoute, à voix haute, parce qu'il a le droit : « Va en paix. »",
    ],
    choices: [{ back: "IIID_lac" }] },
});

// ==================================================================== side quest: the queen's silver mine
Object.assign(P, {
  IIID_mine: { act: "III", title: "Les Argentières de la reine", place: "iiid_mine", hub: true, routes: true, backName: "l'entrée des Argentières",
    text: [
      { first: true, text: "Les Argentières s'ouvrent au fond d'un vallon pelé, au-dessus des derniers mélèzes : des terrils de pierre grise qui dégringolent jusqu'au torrent, des fondations de cabanes sans toit, une roue à eau effondrée dans son bief. Au-dessus de l'entrée principale, une galerie basse étayée de mélèze noir, on a taillé dans le roc une couronne, et dessous trois pics croisés." },
      { first: true, text: "Une femme d'une soixantaine d'années garde une vingtaine de chèvres sur les terrils. Elle a un bâton, un chien jaune et un capuchon de laine rouge. Elle te regarde venir avec l'air de quelqu'un qui a déjà vu monter des chercheurs, et les a vus redescendre." },
      { again: true, text: "Les terrils gris, la roue effondrée, la galerie noire sous sa couronne taillée. Les chèvres de Josette broutent ce qu'elles trouvent entre les pierres." },
      { again: true, after: "iiid:mine", text: "Une pierre de plus a roulé devant l'entrée de la galerie. Josette l'a laissée là, comme une porte." },
      { again: true, after: "tresor:iiid_lampe", text: "Josette regarde la lampe d'argent pendue à ton sac. « Celle du maître mineur, dit-elle. Mon grand-père en parlait. Allume-la de temps en temps, qu'elle ne s'ennuie pas. »" },
      { again: true, after: "tresor:iiid_lingot", text: "« Et tu as pris le troisième depuis le mur, ajoute-t-elle. Le bon. Les autres, je les laisse aux chercheurs de la Banque. »" },
    ],
    choices: [
      { label: "Parler à la gardienne de chèvres", hide: { seen: "IIID_mine_josette" }, to: "IIID_mine_josette" },
      { label: "Entrer dans la galerie, sous la couronne", hide: { has: "iiid:mine" }, to: "IIID_mine_galerie" },
    ] },

  IIID_mine_josette: { act: "III", title: "Josette", place: "iiid_mine", backName: "l'entrée des Argentières",
    text: [
      "Elle s'appelle Josette. Son grand-père était le dernier mineur des Argentières, et son arrière-grand-père, et ainsi de suite jusqu'à la reine. « La Banque a racheté la mine il y a cinquante ans, dit-elle. Ils sont venus avec des ingénieurs de Salvèze, ils ont creusé deux ans, ils ont rien trouvé, ils sont repartis. Il reste les chèvres et moi. »",
      "« {{oreille#iiid_josette|Il n'y a plus rien là-dedans, que de l'eau et des chauves-souris|Mon grand-père m'a dit : suis les trois pics croisés sur les bois, jusqu'au mur ; derrière le mur, il y a la part de la reine. J'ai jamais osé, à cause du noir}}, dit-elle. Si vous entrez, prenez une chandelle de rechange. Les lampes s'éteignent, au fond. Le mauvais air. »",
      { if: { has: "passe:gage" }, text: "Elle te demande d'où tu viens, et tu lui dis : d'un père qui t'a laissé{e} en gage, un jour, chez une brocanteuse. Elle hoche la tête. « Moi, c'est une mine qu'on m'a laissée en gage. On garde ce qu'on nous laisse. »" },
    ],
    fx: { meet: "iiid_josette" },
    choices: [{ back: "IIID_mine" }] },

  IIID_mine_galerie: { act: "III", title: "La galerie aux trois pics", place: "iiid_mine", backName: "la galerie des Argentières",
    text: [
      "La galerie descend en pente douce, assez haute pour marcher courbé. Les étais de mélèze sont noirs, durs comme du fer, et chacun porte des marques taillées au couteau : des chiffres, des croix, des initiales de mineurs morts depuis trois siècles. L'eau suinte des parois et coule dans une rigole au milieu.",
      "Au premier carrefour, trois galeries partent dans le noir. Sur l'étai d'angle, à hauteur d'œil, une inscription grattée dans le bois : *{{loupe#iiid_etai|Galerie du Roy. Galerie de l'Eau. Galerie Neuve|Galerie du Roy, murée par ordre du chancelier, la nuit des Comptoirs. Suivre les trois pics. Ne pas suivre l'eau}}.*",
      { if: { item: "lanterne" }, text: "Ta lanterne sourde fait un cercle jaune sur la roche mouillée. Le volet de fer cliquette quand tu marches." },
    ],
    choices: [
      { label: "Suivre les étais marqués de trois pics croisés", hide: { not: { any: [{ voile: "iiid_josette" }, { voile: "iiid_etai" }] } }, fx: { ep: ["perso", 400] }, to: "IIID_mine_mur" },
      { label: "Suivre le courant d'air, qui doit mener quelque part", test: { dom: "nature", diff: -10, label: "Te retrouver dans une mine abandonnée", help: [{ if: { item: "lanterne" }, v: 10 }, { if: { arch: "rodeur" }, v: 10 }, { with: "tibere", v: 5 }] },
        win: { to: "IIID_mine_mur" }, lose: { to: "IIID_mine_puits" } },
      { label: "Suivre la rigole d'eau, qui descend", to: "IIID_mine_puits" },
    ] },

  IIID_mine_puits: { act: "III", title: "Le puits noyé", place: "iiid_mine", backName: "le puits noyé",
    text: [
      "La galerie de l'Eau s'arrête net au bord d'un puits. Tu le vois trop tard. Le sol se dérobe, tu glisses sur la roche mouillée, et tu tombes dans une eau glacée jusqu'à la taille, deux toises plus bas. Ta chandelle s'éteint. Dans le noir complet, l'eau monte et descend contre tes jambes, lentement, comme une respiration.",
      "Quand tu rallumes, tu vois les échelons de fer scellés dans la paroi, rongés de rouille, qui remontent vers une autre galerie. Sur la roche, au-dessus du premier échelon, quelqu'un a gravé trois pics croisés.",
    ],
    choices: [
      { label: "Remonter par les échelons rouillés", test: { dom: "nature", diff: -10, label: "Grimper sur des échelons pourris", help: [{ if: { item: "corde" }, v: 10 }, { if: { arch: "guerrier" }, v: 5 }] },
        win: { to: "IIID_mine_mur" }, lose: { fx: { pv: -4 }, to: "IIID_mine_mur" } },
    ] },

  IIID_mine_mur: { act: "III", title: "Le mur du chancelier", place: "iiid_mine", backName: "le mur du chancelier",
    text: [
      "La galerie du Roy finit sur un mur. Il est fait de pierres bien appareillées, jointes au mortier, et au centre une pierre plus grande porte un sceau gravé : une bouche close dans un cercle. Le mur est {{pie#iiid_mur|épais, solide, bâti pour durer|mince au centre : la pierre au sceau tient sur un pivot de fer, et le mortier autour d'elle est peint sur du bois}}.",
      "L'air est épais. La flamme de ta chandelle penche, s'allonge, bleuit à la pointe. Il faut faire vite.",
      "La galerie elle-même {{echo#iiid_mine_voix|est silencieuse, à part l'eau qui goutte|garde une voix d'homme, basse, pressée : « Poussez sur la gauche du sceau, pas au milieu. Au milieu, elle bloque. »}}.",
    ],
    choices: [
      { label: "Pousser la pierre au sceau sur la gauche", hide: { not: { any: [{ voile: "iiid_mur" }, { voile: "iiid_mine_voix" }] } }, fx: { ep: ["perso", 500] }, to: "IIID_mine_chambre" },
      { label: "Abattre le mur à coups de pic", test: { dom: "combat", diff: -10, label: "Abattre un mur de mine avant que l'air manque", help: [{ with: "tibere", v: 15 }, { if: { arch: "guerrier" }, v: 10 }] },
        win: { to: "IIID_mine_chambre" }, lose: { to: "IIID_mine_eboule" } },
      { label: "Desceller les pierres une à une, au couteau", test: { dom: "discretion", diff: -10, label: "Desceller un mur sans le faire tomber", help: [{ if: { item: "crochets" }, v: 5 }, { if: { has: "metier:mains" }, v: 15 }] },
        win: { to: "IIID_mine_chambre" }, lose: { to: "IIID_mine_eboule" } },
    ] },

  IIID_mine_eboule: { act: "III", title: "L'éboulement", place: "iiid_mine", backName: "l'entrée des Argentières",
    text: [
      "Le mur cède d'un coup, et le plafond avec lui. Un grondement, un nuage de poussière, des pierres qui tombent dans le noir. Tu recules à quatre pattes, la main sur la bouche, et tu sens la galerie se refermer derrière toi.",
      "Quand la poussière retombe, la galerie du Roy est bouchée jusqu'à la voûte. Dans ta main gauche, tu serres une chose que tu as attrapée sans réfléchir, en tombant : une lampe de mineur, ronde, à l'anse courbe, lourde. Tu ressors à la lumière en toussant. Josette t'attend à l'entrée, le chien contre ses jambes. Elle regarde la lampe, puis la galerie, puis toi. « Bon, dit-elle. Le noir l'a gardée, la part de la reine. »",
    ],
    fx: { pv: -4, item: "iiid_tr_lampe", clock: { tresors: 1 }, flag: ["tresor:iiid_lampe", "iiid:mine"], set: { iiid_mine: "eboulee" }, quest: "IIID_q_mine" },
    choices: [{ back: "IIID_mine" }] },

  IIID_mine_chambre: { act: "III", title: "La part de la reine", place: "iiid_mine", backName: "la chambre du Roy",
    text: [
      "La pierre au sceau tourne, et derrière, une chambre ronde taillée dans le roc, pas plus grande qu'une cuisine. Des coffres de chêne se sont effondrés en poussière sur leur contenu. Une lampe de mineur pend encore à un crochet de fer, ronde, à l'anse courbe, noire de suie.",
      "Au sol, une rangée de lingots, longs comme la main, frappés d'une couronne. Ils sont {{pie#iiid_lingots|d'argent fin, une vingtaine, alignés comme des briques|de plomb argenté au pinceau, tous sauf un : le troisième depuis le mur, plus petit, est d'argent pur, frappé de la couronne de sel}}.",
      "Tu décroches la lampe. Sous la suie, sous ton pouce, l'argent apparaît.",
    ],
    choices: [
      { label: "Prendre le troisième lingot depuis le mur, et la lampe", hide: { not: { voile: "iiid_lingots" } }, fx: { item: ["iiid_tr_lingot", "iiid_tr_lampe"], clock: { tresors: 2 }, flag: ["tresor:iiid_lingot", "tresor:iiid_lampe", "iiid:mine"], set: { iiid_mine: "lingot" }, quest: "IIID_q_mine", ep: ["seance", 1500] }, back: "IIID_mine" },
      { label: "Prendre les deux lingots du dessus, et la lampe", fx: { item: "iiid_tr_lampe", clock: { tresors: 1 }, flag: ["tresor:iiid_lampe", "iiid:mine", "iiid:mine_plomb"], set: { iiid_mine: "plomb" }, quest: "IIID_q_mine", ep: ["seance", 800] }, back: "IIID_mine" },
      { label: "Prendre la lampe seulement, et laisser la part de la reine à Josette", fx: { item: "iiid_tr_lampe", clock: { tresors: 1 }, flag: ["tresor:iiid_lampe", "iiid:mine"], set: { iiid_mine: "josette" }, quest: "IIID_q_mine", fac: { hautes: 5 }, ep: ["seance", 1000] }, back: "IIID_mine" },
    ] },
});

// ==================================================================== the high Combes: region events
Object.assign(P, {
  IIID_ev_chamois: { title: "Le chasseur de chamois", place: null,
    text: [
      "Au détour du sentier, un homme est assis sur un rocher, un chamois mort en travers des épaules, une arbalète de chasse posée à côté de lui. Il mange du pain et du lard, et il t'en offre sans se lever.",
      "« {{oreille#iiid_chasseur|Je chasse pour le marché d'Orle|Je chasse pour les déserteurs des Essarts, qui me paient en monnaie d'Aveline, et je m'en veux un peu}}, dit-il. Vous montez où ? Méfiez-vous des Essarts. Et de la glace, au lac. Elle part bientôt. »",
    ],
    choices: [{ label: "Reprendre la route", back: "@route" }] },

  IIID_ev_porteurs: { title: "Les porteurs de sel", place: null,
    text: [
      "Une file de femmes monte le sentier, chacune avec un sac de sel sur le dos, retenu par une sangle passée sur le front. Elles viennent des salines du delta, à pied, parce que les barques sont réquisitionnées. Elles vendront le sel aux bergers des hauts, trois fois son prix.",
      "La dernière s'arrête pour souffler à côté de toi. « À Salvèze, le sel vaut plus que l'or, cette semaine. La Banque achète tout. » Elle repart avant que tu puisses demander pourquoi.",
    ],
    choices: [
      { label: "Lui acheter une poignée de sel pour les provisions (1 ducat)", once: true, fx: { gold: -1, food: 1 }, back: "@route" },
      { label: "Reprendre la route", back: "@route" },
    ] },

  IIID_ev_loups: { title: "Les loups des hauts", place: null,
    text: [
      "Le premier loup apparaît sur une crête, à cinquante pas, et s'assied. Puis un deuxième, à droite, dans les genévriers. Puis un troisième, derrière. Ils sont maigres, gris, la fin de l'hiver dans les côtes, et ils ont fait le calcul.",
    ],
    choices: [
      { label: "Leur faire face", fight: { title: "Les loups des hauts", enemies: [{ id: "loup", n: 3 }], terrain: "nature", spare: true,
        win: { fx: { ep: ["perso", 400] }, to: "@route" }, lose: { fx: { food: -1 }, to: "@route" }, flee: { label: "Reculer jusqu'aux rochers", dom: "nature", diff: 0, to: "@route" }, calm: { to: "@route" } } },
      { label: "Jeter ton lard le plus loin possible, et passer pendant qu'ils se battent dessus", fx: { food: -1 }, back: "@route" },
    ] },
});

Object.assign(X.people, {
  iiid_seraphin: { name: "Séraphin", qui: "Ancien moine du Mont, ermite au bord du lac de Combe-Blanche.", aspect: { allure: "vieux pêcheur de truites", visage: "yeux délavés par la neige, barbe jaunie", signe: "ligne et grappin de puits" }, f: false, face: { age: "ancien", coif: "degarni", beard: "barbe" }, desc: "Ancien moine du Mont, ermite au bord du lac de Combe-Blanche. Il en est parti le jour où il a eu envie de parler." },
  iiid_josette: { name: "Josette", qui: "Gardienne de chèvres aux Argentières, petite-fille du dernier mineur de la reine.", aspect: { allure: "chevrière des hauteurs", signe: "ses chèvres entre les pierres" }, f: true, face: { age: "mur", coif: "foulard" }, desc: "Gardienne de chèvres aux Argentières, petite-fille du dernier mineur de la reine." },
});
Object.assign(X.items, {
  iiid_tr_coupe: { name: "La coupe d'ambre chantant", kind: "tresor", price: 90, unique: true, desc: "Une coupe taillée dans l'ambre des Écueils. Un doigt mouillé sur le bord lui fait rendre une note longue et pure. La reine voulait qu'on y boive à la Charte." },
  iiid_tr_lingot: { name: "Le lingot à la couronne de sel", kind: "tresor", price: 120, unique: true, desc: "Un petit lingot d'argent pur des Argentières, frappé de la couronne de sel de la reine Ysaure." },
  iiid_tr_lampe: { name: "La lampe d'argent des mineurs", kind: "tresor", price: 60, unique: true, desc: "Une lampe de mineur ronde, à l'anse courbe, en argent massif sous trois siècles de suie. Celle du maître mineur de la reine." },
  iiid_boucle: { name: "La boucle d'argent de Clovis", kind: "objet", price: 8, unique: true, desc: "Une boucle de ceinture en argent, pêchée par Séraphin dans le lac de Combe-Blanche." },
});
Object.assign(X.veils, {
  iiid_seraphin: { fx: { ep: ["perso", 200] } },
  iiid_lac_voix: { fx: { ep: ["perso", 200] } },
  iiid_clovis: { fx: { flag: "iiid:reine_lac", ep: ["perso", 400] } },
  iiid_coupe: { fx: { ep: ["perso", 200] } },
  iiid_josette: { fx: { ep: ["perso", 200] } },
  iiid_lingots: { fx: { ep: ["perso", 300] } },
});
X.quests.push(
  { id: "IIID_q_lac", act: "III", kind: "annexe", title: "Le coffre sous la glace", start: "IIID_lac", echo: "iiid:lac" },
  { id: "IIID_q_mine", act: "III", kind: "annexe", title: "La part de la reine", start: "IIID_mine", echo: "iiid:mine" }
);
X.places.iiid_lac = { ambiance: "montagne", region: "iiid_hauts", name: "Le lac de Combe-Blanche", map: "delta", x: 74, y: 16, arrive: "IIID_lac", desc: "Un lac de montagne au fond d'un cirque de rochers, gelé jusqu'au printemps. Un ermite y pêche." };
X.places.iiid_mine = { ambiance: "souterrain", region: "iiid_hauts", name: "Les Argentières de la reine", map: "delta", x: 60, y: 16, arrive: "IIID_mine", desc: "La vieille mine d'argent de la reine Ysaure, abandonnée au-dessus des derniers mélèzes." };
X.routes.push(
  { id: "r_iiid_lac", name: "Le sentier du cirque", from: "orle", to: "iiid_lac", steps: 1, region: "iiid_hauts",
    label: "Monter au lac de Combe-Blanche par le sentier du cirque", labelBack: "Redescendre à Orle-le-Bourg par le sentier du cirque" },
  { id: "r_iiid_mine", name: "Le chemin des mulets d'argent", from: "orle", to: "iiid_mine", steps: 1, region: "iiid_hauts",
    label: "Monter aux Argentières par le chemin des mulets d'argent", labelBack: "Redescendre à Orle-le-Bourg par le chemin des mulets d'argent" }
);
X.regions.iiid_hauts = { name: "Les hautes Combes", ambiance: "montagne", chance: 0.5, repeatChance: 0.4,
  events: ["IIID_ev_chamois", "IIID_ev_porteurs", "IIID_ev_loups"],
  quiet: [
    "Le sentier quitte les vignes pour les châtaigniers, puis les châtaigniers pour les mélèzes. L'air fraîchit à chaque lacet. En bas, Orle n'est plus qu'une tache blonde au bord de la rivière.",
    "Une source sort de la roche dans une auge de bois creusé, avec une écuelle de fer attachée par une chaîne. L'eau est si froide qu'elle fait mal aux dents.",
    "Des marmottes sifflent d'un rocher à l'autre et plongent dans leurs trous à ton approche. Le ciel est d'un bleu dur, sans un nuage.",
  ],
  camp: [
    "Tu passes la nuit dans un abri de berger, quatre murs de pierre sèche et un toit de lauzes, avec une litière de fougères sèches qui sent le mouton.",
    "Tu dors au pied d'un gros mélèze, enroulé{e} dans ton manteau. Au milieu de la nuit, une chouette se pose au-dessus de toi et t'observe jusqu'à l'aube.",
  ] };
X.events.IIID_ev_chamois = { passage: "IIID_ev_chamois", weight: 2 };
X.events.IIID_ev_porteurs = { passage: "IIID_ev_porteurs", weight: 2 };
X.events.IIID_ev_loups = { passage: "IIID_ev_loups", weight: 1 };

// ==================================================================== side quest: the ransomed village
Object.assign(P, {
  IIID_essarts: { act: "III", title: "Les Essarts", place: "iiid_essarts", hub: true, routes: true, backName: "la place des Essarts",
    text: [
      { first: true, text: "Les Essarts tiennent sur un replat au-dessus des carrières : douze maisons basses de pierre et de bardeaux, des meules de charbon de bois qui fument sous leur chape de terre, des enclos à moutons. Les gens ont les mains noires jusqu'aux coudes et les yeux rouges de fumée. Au bout du village, l'église, petite et trapue, a ses portes fermées, et un drapeau bleu pend de son clocher : la tour couronnée d'Aveline." },
      { first: true, text: "Sur la place, deux moutons attendent, attachés à un piquet, à côté d'un sac de seigle et d'une barrique. Personne ne les garde. C'est le tribut du dimanche." },
      { again: true, before: "iiid:essarts", text: "Les meules fument, les moutons du tribut attendent à leur piquet, et le drapeau bleu pend au clocher." },
      { again: true, after: "iiid:essarts", text: "Le drapeau bleu a disparu du clocher. Les portes de l'église sont ouvertes, et une vieille femme balaie le parvis." },
    ],
    choices: [
      { label: "Parler à la femme qui commande les charbonniers", hide: { seen: "IIID_ess_bertrande" }, to: "IIID_ess_bertrande" },
      { label: "Aller à l'église, où campent les déserteurs", hide: { any: [{ not: { seen: "IIID_ess_bertrande" } }, { has: "iiid:essarts" }] }, to: "IIID_ess_camp" },
    ] },

  IIID_ess_bertrande: { act: "III", title: "Bertrande", place: "iiid_essarts", backName: "la place des Essarts",
    text: [
      "Bertrande est la syndique des Essarts, parce qu'elle sait compter et que les hommes l'écoutent quand elle crie. Elle a cinquante ans, les bras épais, un tablier de cuir brûlé par les braises. Elle te parle sans cesser de surveiller une meule qui fume trop blanc.",
      "« Ils sont arrivés à la Chandeleur, une vingtaine, avec leur sergent, Romuald. Ils ont pris l'église pour dormir, et nous pour manger. Deux moutons, un sac de seigle, une barrique, chaque dimanche. Ils ont pendu le berger qui a refusé. » Elle crache. « {{oreille#iiid_bertrande|On paie, et on vit. C'est déjà ça|Ma fille leur fait la cuisine dans l'église depuis un mois. Elle rentre le soir sans rien dire, et je n'ose pas lui demander}}. »",
      "« Ce ne sont pas ceux du bois de la Gâche, ajoute-t-elle. D'autres. Mieux tenus. Romuald a été sergent vingt ans. Il fait monter la garde, il fait l'appel le matin. Il dit qu'ils attendent la paix. »",
      { if: { has: "iiid:hector" }, text: "Tu penses à Hector, dans le cellier du bailli, qui t'a parlé de Romuald avec un respect mêlé de peur." },
    ],
    fx: { meet: "iiid_bertrande" },
    choices: [{ back: "IIID_essarts" }] },

  IIID_ess_camp: { act: "III", title: "L'église des déserteurs", place: "iiid_essarts", backName: "le parvis de l'église",
    text: [
      "Deux sentinelles en cuirasse bleue gardent le parvis, piques croisées. Elles te laissent approcher jusqu'à vingt pas, puis l'une d'elles siffle, et Romuald sort de l'église en s'essuyant les mains à un chiffon. Quarante ans, une balafre qui lui ferme à moitié l'œil gauche, la barbe taillée court, la cuirasse astiquée. Derrière lui, dans la nef, une quinzaine d'hommes jouent aux dés sur l'autel.",
      { if: { item: "iiid_ecusson" }, text: "Il voit l'écusson d'Aveline à ta ceinture, et ses yeux s'arrêtent dessus. « La troisième compagnie, dit-il. Hector. Il est vivant ? » Il a l'air content, pour une seconde." },
      { if: { has: "iiid:hector_salveze" }, text: "« On dit que le bailli d'Orle tient dans son cellier un garçon de la troisième compagnie, dit-il. Hector. Il l'enverra à Salvèze, et Salvèze le pendra. » Il te regarde. « Vous étiez à Orle. Vous l'avez laissé là. »" },
      "« Nous ne faisons de mal à personne, dit-il, quand on nous nourrit. {{oreille#iiid_ess_grace|Nous attendons la paix pour rentrer chez nous, voilà tout|Le duc a promis la grâce à tout déserteur qui lui tiendra un pont de l'Orle au premier jour de mai ; je tiens celui de Saint-Vrain avec mes hommes, et ce village me nourrit jusque-là}}. »",
    ],
    choices: [
      { label: "« La grâce du duc ? Le duc pendra ses déserteurs dès qu'il aura passé le pont. »", hide: { not: { any: [{ voile: "iiid_ess_grace" }, { voile: "iiid_romuald" }] } }, to: "IIID_ess_parole" },
      { label: "Lui proposer de parler, à l'écart de ses hommes", hide: { any: [{ voile: "iiid_ess_grace" }, { voile: "iiid_romuald" }] }, to: "IIID_ess_parole" },
      { label: "Revenir la nuit avec les charbonniers, et leur faire croire qu'une colonne de la République arrive", to: "IIID_ess_ruse" },
      { label: "Le défier, ici, devant ses hommes", fight: { title: "Le parvis des Essarts", enemies: [{ id: "iiid_romuald", n: 1 }, { id: "iiid_deserteur", n: 2 }],
        win: { fx: { set: { iiid_essarts: "combat" }, fac: { hautes: 5 } }, to: "IIID_ess_fin" }, lose: { to: "IIID_ess_perdu" },
        flee: { label: "Reculer jusqu'aux meules", dom: "discretion", diff: -10, to: "IIID_ess_perdu" } } },
    ] },

  IIID_ess_parole: { act: "III", title: "Romuald", place: "iiid_essarts", backName: "le parvis de l'église",
    text: [
      "Romuald t'emmène derrière l'église, dans le petit cimetière où ses hommes ont creusé deux tombes neuves. Il s'assied sur le muret. « Parle. »",
      { if: { any: [{ voile: "iiid_ess_grace" }, { voile: "iiid_romuald" }] }, text: "Tu lui dis ce que tu as entendu sous ses mots : le pont de Saint-Vrain, le premier mai, la grâce. Il hoche la tête. Il te regarde de son œil valide, longtemps. « Et si c'était vrai, dit-il, que le duc pend ses déserteurs ? »" },
      "« J'ai vingt hommes, dit-il. Ils ont faim, ils ont peur, et ils ont déserté parce qu'on leur faisait pendre des meuniers. {{oreille#iiid_ess_peur|Je les ramènerai chez eux, d'une façon ou d'une autre|Je sais bien que le duc nous pendra, au fond ; mais un sergent sans ordre devient fou en un mois, et je me suis donné cet ordre-là}}. »",
    ],
    choices: [
      { label: "« Garde le pont de Saint-Vrain, oui. Mais garde-le contre le duc, pour la République. Elle paie mal, elle oublie moins. »", test: { dom: "social", diff: -10, label: "Retourner un sergent déserteur", help: [{ if: { voile: "iiid_ess_peur" }, v: 20 }, { if: { item: "iiid_ecusson" }, v: 10 }, { with: "tibere", v: 10 }, { if: { has: "iiid:cor_prevot" }, v: 5 }] },
        win: { fx: { set: { iiid_essarts: "pont" }, flag: "iiid:romuald_pont", fac: { conseil: 5, hautes: 5 }, ep: ["seance", 1500] }, to: "IIID_ess_fin" }, lose: { to: "IIID_ess_refus" } },
      { label: "« Prenez la route du sud, par les crêtes, comme Hector. Laissez le village. »", test: { dom: "social", diff: 0, label: "Convaincre des déserteurs de partir", help: [{ if: { item: "iiid_ecusson" }, v: 15 }, { if: { has: "iiid:hector" }, v: 10 }] },
        win: { fx: { set: { iiid_essarts: "partis" } }, to: "IIID_ess_fin" }, lose: { to: "IIID_ess_refus" } },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: 0, label: "Tibère parle à Romuald de sergent à sergent" },
        win: { fx: { set: { iiid_essarts: "pont" }, flag: "iiid:romuald_pont", conf: { tibere: 5 }, fac: { conseil: 5 } }, to: "IIID_ess_fin" }, lose: { to: "IIID_ess_refus" } },
    ] },

  IIID_ess_refus: { act: "III", title: "Le sergent dit non", place: "iiid_essarts", backName: "le parvis de l'église",
    text: [
      "Romuald se lève du muret. « Non, dit-il. Mes hommes ont besoin d'un ordre, et le seul que j'ai, c'est celui du duc. » Il siffle, et quatre hommes sortent de l'église, la main sur l'épée.",
      "« Va-t'en maintenant, et je te laisse partir. Reviens, et je te pends au clocher avec le berger. »",
    ],
    choices: [
      { label: "Dégainer quand même", fight: { title: "Le cimetière des Essarts", enemies: [{ id: "iiid_romuald", n: 1 }, { id: "iiid_deserteur", n: 2 }],
        win: { fx: { set: { iiid_essarts: "combat" }, fac: { hautes: 5 } }, to: "IIID_ess_fin" }, lose: { to: "IIID_ess_perdu" } } },
      { label: "Revenir la nuit avec les charbonniers", to: "IIID_ess_ruse" },
    ] },

  IIID_ess_ruse: { act: "III", title: "La colonne de la nuit", place: "iiid_essarts", backName: "les meules des Essarts", takes: "night",
    text: [
      "Bertrande rassemble les charbonniers à la nuit tombée. Trente torches de résine, les tambours de la fête de la Saint-Jean, deux trompes de berger, et tous les chaudrons du village. Le plan est simple : faire croire, depuis la forêt, qu'une colonne de la République monte vers les Essarts.",
      "Les meules de charbon fument dans le noir, et leur fumée cache la lisière. Tu places les gens en ligne, loin les uns des autres, pour que les torches aient l'air d'une armée.",
    ],
    choices: [
      { label: "Donner le signal : torches, tambours, trompes, tout à la fois", test: { dom: "savoir", diff: -10, label: "Monter une fausse armée avec des charbonniers", help: [{ if: { arch: "barde" }, v: 15 }, { with: "lison", v: 10 }, { with: "tibere", v: 10 }, { if: { item: "iiid_ecusson" }, v: 5 }] },
        win: { fx: { set: { iiid_essarts: "ruse" }, fac: { hautes: 5 }, ep: ["seance", 1200] }, to: "IIID_ess_fin" }, lose: { to: "IIID_ess_perdu" } },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "discretion", diff: 0, label: "Lison se glisse dans l'église et coupe les sangles des cuirasses" },
        win: { fx: { set: { iiid_essarts: "ruse" }, conf: { lison: 5 } }, to: "IIID_ess_fin" }, lose: { to: "IIID_ess_perdu" } },
    ] },

  IIID_ess_perdu: { act: "III", title: "Le tribut double", place: "iiid_essarts", backName: "la place des Essarts",
    text: [
      "Tu te réveilles dans une étable, sur la paille, la tête bandée. Bertrande est assise sur un seau renversé, à côté de toi. « Ils t'ont jeté{e} sur la place, dit-elle. Romuald a dit qu'il te laissait la vie pour la bonne raison qu'Hector lui avait parlé de toi. Le tribut sera double, dimanche. »",
      "Elle a l'air fatiguée, sans colère, comme on l'est après un orage qui a couché le blé. Tu repars des Essarts le lendemain, la bourse vide et le drapeau bleu toujours au clocher.",
    ],
    fx: { pv: -3, gold: -10, flag: "iiid:essarts", set: { iiid_essarts: "perdu" }, quest: "IIID_q_essarts" },
    choices: [{ back: "IIID_essarts" }] },

  IIID_ess_fin: { act: "III", title: "Le clocher des Essarts", place: "iiid_essarts", backName: "la place des Essarts",
    text: [
      { if: { is: { iiid_essarts: "combat" } }, text: "Romuald est à genoux sur le parvis, le souffle court, son épée à deux pas. Ses hommes ont jeté leurs piques. Avant le soir, ils sont partis par la route du sud, sans leurs cuirasses, et Romuald marche le dernier, sans se retourner." },
      { if: { is: { iiid_essarts: "ruse" } }, text: "Au premier roulement de tambour, l'église se vide comme une ruche qu'on enfume. Les déserteurs s'enfuient dans la nuit par la route du sud, à moitié habillés, en laissant tout derrière eux. Les charbonniers rient jusqu'à l'aube." },
      { if: { is: { iiid_essarts: "partis" } }, text: "Le lendemain matin, les déserteurs sortent de l'église en file, leurs paquets sur le dos, et prennent la route des crêtes vers le sud. Romuald s'arrête devant Bertrande et lui rend les deux moutons du dernier dimanche, sans un mot." },
      { if: { is: { iiid_essarts: "pont" } }, text: "Le lendemain matin, Romuald fait l'appel sur le parvis, puis il amène lui-même le drapeau bleu du clocher et le plie. « Le pont de Saint-Vrain, dit-il. Nous le tiendrons. Mais contre lui. » Ses hommes descendent vers l'Orle en colonne, au pas, et les gens des Essarts les regardent passer sans comprendre." },
      "Dans l'église, derrière l'autel, il reste le coffre de la compagnie : de la monnaie d'Aveline, une poignée de liards, une chevalière d'or et une lettre pliée. La chevalière porte les armes d'un capitaine de Pont-Sauvin. La lettre est du camp du duc. *Aux déserteurs de nos compagnies : {{loupe#iiid_lettre_duc|le duc pardonne à qui revient servir|le duc pardonne à qui tiendra un pont de l'Orle au premier jour de mai ; les gens du prévôt de Salvèze vous le livreront sans garde}}.*",
      "Bertrande te serre la main de sa grosse main noire, puis elle va chercher sa fille à l'église.",
    ],
    fx: { item: "iiid_tr_bague", clock: { tresors: 1 }, flag: ["tresor:iiid_bague", "iiid:essarts"], quest: "IIID_q_essarts", fac: { hautes: 5 }, ep: ["seance", 1500] },
    choices: [{ back: "IIID_essarts" }] },
});

// ==================================================================== side quest: the vintner's cask
Object.assign(P, {
  IIID_clos: { act: "III", title: "Le clos Vachon", place: "iiid_clos", hub: true, routes: true, backName: "la cour du clos Vachon",
    text: [
      { first: true, text: "Le clos Vachon est un carré de vignes ceint de murs, à mi-pente au-dessus de l'Orle, avec une maison de maître trop grande pour ce qu'il en reste et un cellier voûté creusé dans la colline. Dans la cour, une charrette attend, attelée, et deux porteurs en tablier de cuir chargent des barriques vides en sifflant." },
      { first: true, text: "Sur le perron, un homme d'une trentaine d'années, gilet brodé et bottes neuves, compte des pièces dans sa main. Une femme du même âge, en noir, se tient sur le seuil, les bras croisés, et le regarde compter." },
      { again: true, text: "La cour du clos, le perron, la porte basse du cellier. On entend tousser à l'étage." },
      { again: true, after: "iiid:clos", text: "La charrette est partie. Les volets de l'étage sont fermés, et une couronne de buis pend à la porte." },
    ],
    choices: [
      { label: "Monter voir le vieux Vachon, qui tousse à l'étage", hide: { seen: "IIID_clos_vachon" }, to: "IIID_clos_vachon" },
      { label: "Descendre au cellier", hide: { any: [{ not: { seen: "IIID_clos_vachon" } }, { has: "iiid:clos" }] }, to: "IIID_clos_cave" },
    ] },

  IIID_clos_vachon: { act: "III", title: "Le vieux Vachon", place: "iiid_clos", backName: "la chambre du vieux Vachon",
    text: [
      "Le vieux Vachon est couché dans un lit clos, sous trois couvertures, et il a le teint des gens qui ont encore une semaine. Sa fille, Apolline, est montée avec toi. Elle lui essuie la bouche avec un linge. En bas, le gendre, Cosme, a repris ses comptes à voix haute : il vend les quarante barriques du cellier à un commissionnaire de Salvèze, pour l'armée, à trois ducats la pièce.",
      "« Le trésor des Vachon, dit le vieux, en riant, ce qui le fait tousser. Tout le monde en parle, à Orle. Mon père l'a reçu de son père, et ainsi de suite jusqu'à la reine. {{oreille#iiid_vachon|C'est une histoire de vignerons, pour faire rêver les gendres|Il est dans le vin que personne n'a jamais bu : le fût de l'année des Glaces, au fond, le plus laid, et je ne veux pas que Cosme le vende}}. »",
      "Il serre la main de sa fille. « Le fût doré, à l'entrée, c'est pour les gendres. Il faut bien qu'ils trouvent quelque chose. »",
      { if: { has: "passe:trouve" }, text: "L'année des Glaces. Encore elle. On dirait que cet hiver-là a enterré la moitié des secrets du pays." },
    ],
    fx: { meet: ["iiid_vachon", "iiid_apolline", "iiid_cosme"] },
    choices: [{ back: "IIID_clos" }] },

  IIID_clos_cave: { act: "III", title: "Le cellier du clos", place: "iiid_clos", backName: "le cellier du clos Vachon",
    text: [
      "Le cellier est une longue voûte de pierre, fraîche, où l'on entend l'eau goutter quelque part. Quarante barriques sur leurs chantiers de chêne, deux rangées de vingt, numérotées à la craie. À l'entrée, sur un tréteau à part, une barrique {{pie#iiid_doree|cerclée de cuivre doré, ciselée de grappes, une pièce de maître|cerclée de laiton mince sur un bois neuf, vieilli au brou de noix : elle date de cinq ans à peine}}.",
      "Au fond, contre le mur, dans l'ombre, la dernière barrique est {{pie#iiid_laide|la plus laide, gercée, cerclée de fer rouillé, bonne pour le feu|cerclée de fer rouillé sur un chêne de trois siècles, et son fond sonne plus court que les autres de deux doigts : un double fond}}. Une date à la craie, presque effacée : l'année des Glaces.",
      "Cosme est descendu derrière toi, avec ses deux porteurs. Il s'appuie au chambranle. « Le vieux vous a parlé du trésor, je parie. Allez-y, cherchez. Mais ce que vous trouvez dans mes barriques est à moi. »",
    ],
    choices: [
      { label: "Ouvrir la barrique dorée, à l'entrée", to: "IIID_clos_faux" },
      { label: "Ouvrir le vieux fût de l'année des Glaces, au fond", hide: { not: { any: [{ voile: "iiid_vachon" }, { voile: "iiid_laide" }] } }, to: "IIID_clos_gendre" },
      { label: "Sonder les quarante barriques du plat de la main, une par une", test: { dom: "savoir", diff: -10, label: "Trouver un double fond à l'oreille", help: [{ if: { has: "metier:mains" }, v: 20 }, { with: "salome", v: 5 }, { if: { has: "iiid:doree_vue" }, v: 10 }] },
        win: { to: "IIID_clos_gendre" }, lose: { to: "IIID_clos_faux" } },
    ] },

  IIID_clos_faux: { act: "III", title: "La barrique dorée", place: "iiid_clos", backName: "le cellier du clos Vachon",
    text: [
      "Tu fais sauter la bonde de la barrique dorée. Elle est vide de vin. Au fond, posé sur un lit de paille, un calice : un gobelet à pied, ciselé de grappes, qui brille comme un soleil dans la lumière de la lanterne. Il est {{pie#iiid_calice|d'or massif, lourd dans la main, une fortune|de plomb doré à la feuille, et la dorure part déjà sous l'ongle}}.",
      "Cosme pousse un cri de joie et te l'arrache presque des mains. « Le trésor des Vachon ! » Il le soupèse, il le mord, il le regarde à la lanterne. Les porteurs rient. Derrière vous, sur la dernière marche de l'escalier, Apolline se tait.",
    ],
    choices: [
      { label: "Laisser le calice à Cosme, et lui souhaiter bonne vente", hide: { not: { voile: "iiid_calice" } }, fx: { set: { iiid_clos: "gendre_dupe" } }, to: "IIID_clos_gendre" },
      { label: "Lui reprendre le calice : tu l'as trouvé", fx: { item: "iiid_faux_calice" }, to: "IIID_clos_gendre" },
      { label: "Le laisser à Cosme", hide: { voile: "iiid_calice" }, to: "IIID_clos_gendre" },
    ] },

  IIID_clos_gendre: { act: "III", title: "Le fût de l'année des Glaces", place: "iiid_clos", backName: "le cellier du clos Vachon",
    text: [
      { if: { is: { iiid_clos: "gendre_dupe" } }, text: "Cosme remonte au soleil avec son calice, pour le montrer aux porteurs. Il te laisse seul{e} au cellier, avec Apolline et quarante barriques sans intérêt." },
      { if: { not: { is: { iiid_clos: "gendre_dupe" } } }, text: "Quand tu vas vers le fond du cellier, vers le vieux fût, Cosme te suit des yeux, puis il fait un signe à ses porteurs, qui se plantent entre toi et l'escalier. « Celui-là aussi est à moi, dit-il. Tout ce qui est dans ce cellier est à moi. {{oreille#iiid_cosme|J'ai épousé la fille, j'ai droit au vin|Je dois quatre cents ducats au commissionnaire de la Banque, et il me prend le clos à la Saint-Jean si je ne paie pas}}. »" },
    ],
    choices: [
      { label: "Ouvrir le vieux fût tranquillement", hide: { not: { is: { iiid_clos: "gendre_dupe" } } }, to: "IIID_clos_vrai" },
      { label: "« Le commissionnaire de la Banque vous prendra le clos de toute façon, Cosme. Avec ou sans trésor. »", hide: { any: [{ is: { iiid_clos: "gendre_dupe" } }, { not: { voile: "iiid_cosme" } }] }, test: { dom: "social", diff: 0, label: "Ouvrir les yeux d'un gendre endetté", help: [{ if: { has: "metier:parole" }, v: 10 }, { if: { has: "poids:dette" }, v: 10 }] },
        win: { fx: { set: { iiid_clos: "gendre_calme" } }, to: "IIID_clos_vrai" }, lose: { to: "IIID_clos_bagarre" } },
      { label: "Écarter les porteurs", hide: { is: { iiid_clos: "gendre_dupe" } }, to: "IIID_clos_bagarre" },
    ] },

  IIID_clos_bagarre: { act: "III", title: "Les porteurs", place: "iiid_clos", backName: "le cellier du clos Vachon",
    text: [
      "Les deux porteurs s'avancent, les manches retroussées, des bras épais comme des douelles. Cosme reste derrière eux, la lanterne levée.",
    ],
    combat: { title: "Le cellier du clos Vachon", enemies: [{ id: "docker", n: 2 }], spare: true,
      win: { fx: { set: { iiid_clos: "bagarre" } }, to: "IIID_clos_vrai" }, lose: { fx: { set: { iiid_clos: "bagarre" }, pv: -2 }, to: "IIID_clos_vrai" },
      calm: { to: "IIID_clos_vrai" } },
    choices: [] },

  IIID_clos_vrai: { act: "III", title: "Le double fond", place: "iiid_clos", backName: "le cellier du clos Vachon",
    text: [
      { outcome: "lose", text: "Tu te relèves contre une barrique, la lèvre fendue. Les porteurs ont reculé : Apolline est descendue avec l'arbalète de chasse de son père, armée, et elle la tient très droite." },
      "Le vieux fût de l'année des Glaces s'ouvre mal, en grinçant. Dedans, deux doigts de lie séchée, noire, qui sent le vinaigre de trois siècles. Puis le fond sonne creux sous le couteau. Tu le fais sauter. Dessous, dans une cavité grande comme un tiroir, un sac de cuir rongé, et dans le sac, des pièces d'or : des nobles de la reine, frappés de la couronne de sel, une centaine, que les rats n'ont pas pu manger.",
      "Apolline s'agenouille à côté de toi et en prend une, qu'elle frotte sur sa manche. Ses yeux restent secs. « Il me l'avait dit, quand j'étais petite, dit-elle. Je croyais que c'était pour me faire dormir. »",
      { if: { is: { iiid_clos: "gendre_calme" } }, text: "Cosme regarde les pièces, puis sa femme. Il a l'air, d'un coup, beaucoup plus jeune et beaucoup moins sûr de lui. « Avec ça, je paie le commissionnaire, dit-il, et on garde le clos. » Apolline le regarde longtemps. « On », répète-t-elle." },
    ],
    choices: [
      { label: "Tout laisser à Apolline", fx: { flag: "iiid:clos", set: { iiid_clos_or: "apolline" }, quest: "IIID_q_fut", fac: { hautes: 5 }, ep: ["seance", 1500] }, to: "IIID_clos_fin" },
      { label: "Accepter la part qu'Apolline te tend, le quart du sac", fx: { item: "iiid_tr_nobles", clock: { tresors: 1 }, flag: ["tresor:iiid_nobles", "iiid:clos"], set: { iiid_clos_or: "part" }, quest: "IIID_q_fut", ep: ["seance", 1200] }, to: "IIID_clos_fin" },
      { label: "Prendre tout le sac", tag: "Marque +1", stain: true, fx: { mark: 1, item: "iiid_tr_nobles", clock: { tresors: 1 }, gold: 30, flag: ["tresor:iiid_nobles", "iiid:clos"], set: { iiid_clos_or: "tout" }, quest: "IIID_q_fut", fac: { hautes: -5 } }, to: "IIID_clos_fin" },
    ] },

  IIID_clos_fin: { act: "III", title: "Le lit clos", place: "iiid_clos", backName: "la chambre du vieux Vachon",
    text: [
      "Tu remontes à l'étage avec Apolline. Le vieux Vachon a les yeux ouverts. Elle lui met une pièce d'or dans la main, et il referme les doigts dessus. « Bon, dit-il. Bon. »",
      { if: { is: { iiid_clos_or: "tout" } }, text: "Il regarde le sac qui pend à ta ceinture, puis toi. Il se tait. Apolline aussi. Tu sors de la chambre avec un poids qui tient à autre chose qu'à l'or." },
      { if: { is: { iiid_clos_or: "apolline" } }, text: "« Garde le clos, dit-il à sa fille. Et donne à boire à celui-là, du bon, celui de l'année de ta naissance. » Apolline te sert un verre de vin noir, épais, qui sent la violette et la pierre." },
      { if: { is: { iiid_clos_or: "part" } }, text: "« Un quart, dit-il. C'est juste. C'est ce que prenait la reine, sur nos vendanges. » Il rit, et tousse, et rit encore." },
      { if: { item: "iiid_faux_calice" }, text: "En partant, tu sens le calice doré cogner contre ta hanche dans ta besace. Le vieux t'a regardé{e} le prendre sans rien dire, avec une lueur dans l'œil." },
    ],
    choices: [{ back: "IIID_clos" }] },
});

Object.assign(X.people, {
  iiid_bertrande: { name: "Bertrande", qui: "Syndique des charbonniers des Essarts.", aspect: { allure: "cinquante ans, bras épais", habits: "tablier de cuir brûlé par les braises", signe: "bras noirs jusqu'aux coudes", voix: "forte, qu'on écoute" }, f: true, face: { age: "mur", coif: "foulard" }, desc: "Syndique des charbonniers des Essarts, les bras noirs jusqu'aux coudes." },
  iiid_vachon: { name: "Le vieux Vachon", qui: "Vigneron du clos Vachon, au-dessus de l'Orle.", aspect: { allure: "vieillard alité sous trois couvertures", voix: "rire qui le fait tousser" }, f: false, face: { age: "ancien", coif: "degarni" }, desc: "Vigneron du clos Vachon, au-dessus de l'Orle. Il garde le secret de son père, et de la reine." },
  iiid_apolline: { name: "Apolline Vachon", qui: "La fille du vieux Vachon.", aspect: { allure: "silencieuse au chevet de son père", habits: "robe noire de deuil" }, f: true, face: { age: "adulte", coif: "chignon" }, desc: "La fille du vieux Vachon. Elle porte le noir avant l'heure." },
  iiid_cosme: { name: "Cosme", qui: "Le gendre du vieux Vachon.", aspect: { allure: "compte à voix haute", habits: "gilet brodé, bottes neuves" }, f: false, face: { age: "adulte", coif: "court" }, desc: "Le gendre du vieux Vachon. Gilet brodé, bottes neuves, quatre cents ducats de dettes." },
});
Object.assign(X.enemies, {
  iiid_romuald: { name: "Romuald, sergent d'Aveline", look: "humain", pv: 64, att: 60, def: 24, dmg: 8, desc: "Vingt ans de service, une balafre sur l'œil gauche, une cuirasse astiquée. Il se bat comme on fait l'exercice." },
  iiid_deserteur: { name: "Déserteur d'Aveline", look: "humain", pv: 28, att: 52, def: 20, dmg: 6, desc: "Cuirasse bleue cabossée, pique raccourcie, la faim dans les yeux." },
});
Object.assign(X.items, {
  iiid_tr_bague: { name: "La chevalière du capitaine de Pont-Sauvin", kind: "tresor", price: 50, unique: true, desc: "Une chevalière d'or aux armes d'un capitaine d'Aveline, trouvée dans le coffre des déserteurs des Essarts." },
  iiid_tr_nobles: { name: "Les nobles de la reine", kind: "tresor", price: 150, unique: true, desc: "Des pièces d'or frappées de la couronne de sel, sorties du double fond d'un fût de l'année des Glaces." },
  iiid_faux_calice: { name: "Le calice doré du clos Vachon", kind: "tresor", price: 3, unique: true, desc: "Un gobelet ciselé de grappes, qui brille comme de l'or. C'est du plomb doré à la feuille, posé là pour les gendres." },
});
Object.assign(X.clues, {
  iiid_c_grace: { rev: "S", text: "Le duc d'Aveline promet la grâce aux déserteurs qui tiendront un pont de l'Orle au premier jour de mai ; une lettre de son camp dit que les gens du prévôt de Salvèze leur livreront les ponts sans garde." },
});
Object.assign(X.veils, {
  iiid_lettre_duc: { fx: { clue: "iiid_c_grace", ep: ["perso", 500] } },
  iiid_bertrande: { fx: { ep: ["perso", 200] } },
  iiid_ess_peur: { fx: { ep: ["perso", 200] } },
  iiid_vachon: { fx: { ep: ["perso", 200] } },
  iiid_doree: { fx: { flag: "iiid:doree_vue" } },
});
X.quests.push(
  { id: "IIID_q_essarts", act: "III", kind: "annexe", title: "Le tribut des Essarts", start: "IIID_essarts", echo: "iiid:essarts" },
  { id: "IIID_q_fut", act: "III", kind: "annexe", title: "Le fût de l'année des Glaces", start: "IIID_clos", echo: "iiid:clos" }
);
X.places.iiid_essarts = { ambiance: "village", region: "iiid_hauts", name: "Les Essarts", map: "delta", x: 60, y: 28, arrive: "IIID_essarts", desc: "Un village de charbonniers sur un replat au-dessus des carrières d'Orle." };
X.places.iiid_clos = { ambiance: "village", region: "iiid_hauts", name: "Le clos Vachon", map: "delta", x: 70, y: 30, arrive: "IIID_clos", desc: "Un clos de vignes ceint de murs, à mi-pente au-dessus de l'Orle, et son cellier creusé dans la colline." };
X.routes.push(
  { id: "r_iiid_essarts", name: "Le chemin des charbonniers", from: "orle", to: "iiid_essarts", steps: 1, region: "iiid_hauts",
    label: "Monter aux Essarts par le chemin des charbonniers", labelBack: "Redescendre à Orle-le-Bourg par le chemin des charbonniers" },
  { id: "r_iiid_clos", name: "Le chemin des vignes basses", from: "orle", to: "iiid_clos", steps: 1, region: "iiid_hauts",
    label: "Descendre au clos Vachon par le chemin des vignes basses", labelBack: "Remonter à Orle-le-Bourg par le chemin des vignes basses" }
);

X.epilogue = [
  { if: { has: "iiid:lac" }, text: "**Séraphin.** Il redescendit au Mont à la fonte des neiges et demanda à reprendre l'habit. L'abbé le lui rendit, à condition qu'il se taise. Il parla au lac une dernière fois, puis il tint parole." },
  { if: { all: [{ has: "iiid:mine" }, { has: "iiid:mine_plomb" }] }, text: "**Josette.** Elle entra un jour seule dans la chambre du Roy et y prit le troisième lingot depuis le mur, celui que tu avais laissé. Elle s'acheta un troupeau, et une maison au bord du torrent." },
  { if: { all: [{ has: "iiid:mine" }, { is: { iiid_mine: "josette" } }] }, text: "**Josette.** Elle descendit la part de la reine à dos de chèvre, pendant tout un été. Elle posa le seul lingot d'argent pur sur la tombe de son grand-père, et laissa le plomb où il était." },
  { if: { all: [{ has: "iiid:mine" }, { is: { iiid_mine: "eboulee" } }] }, text: "**Les Argentières.** La galerie du Roy resta bouchée. Josette y mena ses chèvres jusqu'à sa mort, et ne laissa plus entrer personne." },
  { if: { has: "iiid:romuald_pont" }, text: "**Romuald.** Ses hommes tinrent le pont de Saint-Vrain le premier jour de mai, contre ceux qui devaient le passer. Romuald ne rentra jamais au nord : il épousa une charbonnière des Essarts." },
  { if: { all: [{ has: "iiid:essarts" }, { not: { has: "iiid:romuald_pont" } }, { not: { is: { iiid_essarts: "perdu" } } }] }, text: "**Les Essarts.** Les charbonniers rouvrirent leur église et sonnèrent la cloche le premier dimanche sans tribut. Bertrande garda les deux moutons." },
  { if: { is: { iiid_essarts: "perdu" } }, text: "**Les Essarts.** Les déserteurs y restèrent jusqu'à l'été, puis partirent une nuit avec le dernier mouton. Bertrande fit sonner la cloche le lendemain matin." },
  { if: { has: "iiid:hector" }, text: "**Hector.** Il passa la frontière du sud à pied, sans sa cuirasse, et entra chez un meunier. Il ne parla jamais de l'armée du duc." },
  { if: { has: "iiid:hector_salveze" }, text: "**Hector.** Le bailli d'Orle l'envoya à Salvèze sur un chariot de vin. On ne sut pas ce que le Conseil fit de lui." },
  { if: { all: [{ has: "iiid:clos" }, { not: { has: "tresor:iiid_nobles" } }] }, text: "**Apolline Vachon.** Elle garda le clos, paya les dettes de son mari et vendangea l'automne suivant. Le vieux fût de l'année des Glaces resta au fond du cellier, vide, à sa place." },
  { if: { all: [{ has: "tresor:iiid_nobles" }, { is: { iiid_clos_or: "part" } }] }, text: "**Apolline Vachon.** Elle paya le commissionnaire avec les trois quarts du sac et garda le clos. Elle donna à son premier fils le nom de son père." },
  { if: { all: [{ has: "tresor:iiid_nobles" }, { is: { iiid_clos_or: "tout" } }] }, text: "**Le clos Vachon.** Cosme le vendit au commissionnaire de la Banque avant la vendange. Apolline partit vivre à Orle, chez une cousine, avec la pièce d'or que son père avait gardée dans la main." },
];

// @@PASSAGES@@

module.exports = { passages: P, extras: X };
