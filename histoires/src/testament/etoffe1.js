// More of the house and of its people, for both readings: the coachman's gossip, the empty armchair, the chapel at
// nightfall, the distillery, Aurore's bedroom and its little box with a word lock, Hector's offer, Bérénice praying at
// midnight, Odile teaching the hero to smell, the walk back from the chapel at four in the morning.
module.exports = {
  // ------------------------------------------------------------------ act I
  A_cocher: { act: "I", title: "Le cocher", place: "route", second: false,
    text: [
      "Tu baisses la vitre et tu demandes au cocher s'il a connu Madame Castellane.",
      "« Tout le monde l'a connue, dit-il par-dessus son épaule, et personne. » Il crache dans les iris, avec respect. « Mon père la menait déjà, quand elle était jeune. Il disait qu'elle riait tout le temps, à l'époque, et qu'un été elle a arrêté de rire d'un coup, comme on ferme un robinet. Un chagrin d'amour, qu'on a dit. Un petit clerc de rien du tout, qu'on a dit aussi, à l'étude du vieux Maître Aubanel. » Il fait claquer son fouet au-dessus des chevaux, qui n'en pensent rien. « Mais à Sauvebonne, on dit tant de choses. On a même dit que j'étais honnête. »",
    ],
    choices: [
      { label: "Descendre devant la grille", fx: { until: 18 }, to: "A_grille" },
    ] },

  A_fauteuil: { act: "I", title: "Le fauteuil vide", place: "salon",
    text: [
      "Tu t'approches du fauteuil près de la fenêtre. Un grand fauteuil à oreilles, tendu d'un velours lilas usé jusqu'à la trame aux accoudoirs, là où deux mains se sont posées pendant trente ans. Le coussin garde encore le creux d'un corps maigre, comme la neige garde la trace d'un oiseau.",
      "La fleur d'iris fanée est restée là où elle est tombée. Personne n'y touche. Dans la maison d'une parfumeuse, on respecte les fleurs mortes comme ailleurs les reliques.",
      "Sur le guéridon, à portée de main, un livre ouvert, à l'envers, comme on le pose quand on compte le reprendre : l'*Almanach des énigmes* de cette année. Une devinette est cochée au crayon, et en marge, d'une écriture qui tremble déjà un peu : *qu'elle ne parte pas.*",
    ],
    choices: [
      { back: "A_salon" },
    ] },

  A_chapelle_soir: { act: "I", title: "La chapelle au crépuscule", place: "chapelle",
    fx: { flag: "chapelle:vue" },
    text: [
      "Au bout de l'allée des cyprès, la chapelle de famille, petite, blonde, avec un clocheton où la cloche ne sonne plus. La porte est ouverte. Dedans, une veilleuse rouge, des lys dans des vases, et devant l'autel, une dalle neuve où l'on a gravé, il y a deux jours, le nom de la morte.",
      "Tu t'agenouilles un instant, par politesse, plus que par piété. Au pied de la dalle, une petite plaque de bronze porte le chiffre de la Maison, un A et un C entrelacés dans des iris, scellée par deux vis à tête plate. Le marbrier a peint par-dessus les têtes de vis, au vernis brun, pour qu'elles ne rouillent pas. Le vernis est intact, lisse, brillant comme un ongle.",
      "Il fait froid. Les lys sentent fort. Tu ressors.",
    ],
    choices: [
      { back: "A_jardin" },
    ] },

  A_distillerie: { act: "I", title: "La distillerie", place: "jardin",
    text: [
      "Derrière l'orangerie, une longue bâtisse basse au toit de tuiles : la distillerie de la Bastide, où Madame Castellane faisait ses essais loin des ouvriers de la ville. Jaume t'ouvre avec une clef de la taille d'un avant-bras.",
      "Dedans, dans l'odeur froide de cuivre et de cendre, trois alambics dorment côte à côte sur leurs fourneaux éteints, ventrus, coiffés de leurs chapiteaux comme des moines géants à capuchon, et leurs serpentins descendent en spirale dans des cuves d'eau noire. Sur les étagères, des bonbonnes, des entonnoirs, des filtres. Au mur, à la craie, des chiffres, des dates, des noms d'essences, et un mot souligné trois fois : *patience.*",
      "« L'iris, dit Jaume, c'est la plus lente. On arrache la racine, on la sèche trois ans, on la pile, on la distille, et ce qui sort, c'est une espèce de beurre gris qui sent la violette et la terre. Trois ans pour une cuillerée. Elle disait que c'était la seule fleur qui lui ressemblait. »",
    ],
    choices: [
      { back: "A_jardin" },
    ] },

  // ------------------------------------------------------------------ act II
  B_chambre_aurore: { act: "II", title: "La chambre d'Aurore", place: "salon",
    text: [
      "La chambre de Madame Castellane est au bout du couloir du premier, et la porte n'est pas fermée à clef, parce que personne n'aurait osé. Tu entres avec ta bougie, et la chambre te reçoit comme une personne : un grand lit à baldaquin aux rideaux tirés, une table de toilette couverte de flacons, une chaise où pend encore une robe de chambre lilas, et cette odeur d'Aurore, poudrée, tiède, si présente qu'on se surprend à baisser la voix.",
      "Sur la table de nuit, un missel qu'elle ne lisait pas, un verre d'eau qu'on n'a pas vidé, et un petit coffret de bois de rose, grand comme un livre de prières, fermé par une serrure à lettres. Sur le couvercle, gravé au fer : *Le nom de celle que j'aime le mieux.*",
      { second: true, text: "Hier, tu as tourné ces lettres longtemps, sans savoir. Ce soir, tu sais lequel." },
    ],
    choices: [
      { label: "Composer un nom sur la serrure du coffret", hide: { has: "enigme:p_coffret" }, to: "B_coffret" },
      { back: "B_nuit" },
    ] },

  B_coffret: { act: "II", title: "Le coffret de bois de rose", place: "salon", puzzle: "p_coffret",
    text: [
      "Tu t'assois au bord du lit de la morte, le coffret sur les genoux. Les lettres de cuivre roulent sous ton pouce avec un petit bruit de dents de souris.",
    ],
    choices: [
      { back: "B_chambre_aurore" },
    ] },

  B_coffret_ouvert: { act: "II", title: "La lettre du coffret", place: "salon",
    fx: { item: "lettre_odile", ep: ["histoire", 300] },
    text: [
      "Le couvercle se soulève. Dedans, sur un lit de satin lilas, une seule chose : une lettre, cachetée de cire lilas, et sur l'enveloppe, de la grande écriture nette : *Pour Odile. Après.*",
      "Tu la tiens longtemps à la main. Tu es le juge de ce qui sera trouvé. Tu n'es pas le destinataire de ce qui est écrit.",
      "Tu la glisses dans ta veste, contre toi, sans la décacheter.",
    ],
    choices: [
      { back: "B_chambre_aurore" },
    ] },

  B_hector_offre: { act: "II", title: "L'offre", place: "salon",
    text: [
      "Hector t'attend au tournant du couloir, adossé au mur, une bouteille de vin cuit à la main et deux verres dans l'autre, comme un homme qui aurait prévu de te rencontrer par hasard.",
      "« Trinquons, dit-il. À la justice. » Il te sert sans attendre la réponse. « Je ne vous demanderai rien. Je suis un homme d'honneur, ce qui me coûte très cher. Je vous dis seulement qu'à l'aube, quand vous aurez lu le dernier papier, quel qu'il soit, il y aura dans la poche de votre redingote cinq cents livres. Pour vos peines. Les clercs ont beaucoup de peines, je le sais, j'ai eu des créanciers clercs. »",
      "Il choque son verre contre le tien. « Vous n'aurez rien à faire. Seulement à lire. Vous lisez si bien. »",
    ],
    choices: [
      { label: "Boire son vin, et ne rien promettre", fx: { flag: "hector:trinque" }, to: "B_nuit" },
      { label: "Poser ton verre plein sur la console", fx: { flag: "hector:refus" }, to: "B_hector_refus" },
    ] },

  B_hector_refus: { act: "II", title: "Le verre plein", place: "salon",
    text: [
      "Tu poses ton verre sur la console, plein, sans un mot. Hector le regarde, puis te regarde, et pendant une seconde son beau visage glisse tout à fait, comme une pâtisserie qui s'effondre. Puis il se rattrape, sourit, vide ton verre d'un trait.",
      "« Vous avez raison, dit-il. Il est trop sucré. » Il s'éloigne dans le couloir en sifflant, et au tournant, sans se retourner, il ajoute : « Les juges incorruptibles finissent toujours mal dans les romans. C'est ce qui les rend si agréables à lire. »",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  B_chambre_hector1: { act: "II", title: "La chambre du neveu", place: "salon", second: false,
    fx: { flag: "hector:papier" },
    text: [
      "Hector est au salon, à faire une réussite en buvant le vin cuit de sa tante. Tu montes à sa chambre par l'escalier de service, en te disant que c'est ton rôle, et en sachant très bien que c'est faux.",
      "Un sac de cuir, trois gilets, une douzaine de cravates, une liasse de reconnaissances de dettes nouée d'un ruban rose comme des lettres d'amour. Sur la table, une rame de papier neuf, à peine entamée, sous sa bande de la papeterie Roux de Sauvebonne. Un encrier de voyage, débouché. Une plume fraîchement taillée.",
      "Et un paquet de vieilles lettres, d'une grande écriture nette que tu reconnais : des lettres de Madame Castellane à son neveu, toutes de refus, *non, Hector*, *pas un sou, Hector*, *apprends à perdre, Hector*. Sous chaque signature, quelqu'un a repassé les lettres au crayon, très légèrement, comme un écolier qui décalque un modèle.",
      "Des pas dans l'escalier. Tu remets tout en place et tu sors par l'autre porte.",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  B_chapelle_minuit: { act: "II", title: "Bérénice à la chapelle", place: "chapelle",
    text: [
      "À minuit, la chapelle est éclairée. Bérénice est agenouillée devant la dalle neuve, son chapelet entre les doigts, et elle prie à voix haute, en latin, très vite, comme on court pour attraper une voiture.",
      "Elle t'entend entrer, ne se retourne pas, finit sa dizaine. Puis elle se relève, époussette ses genoux, et te regarde avec ses yeux secs.",
      "« Elle sentait Dieu dans les roses, dit-elle. Pas à l'église. Dans les roses, dans le jasmin, dans la fleur d'oranger. Elle disait que le bon Dieu avait mis plus de soin dans un pétale que dans tout le Lévitique. » Elle serre son chapelet. « Je lui ai écrit pendant vingt ans pour la convertir. Elle ne m'a jamais répondu. Je crois qu'elle avait raison de ne pas répondre. Je crois que c'est ça que je ne lui pardonne pas. »",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  B_odile_nez: { act: "II", title: "La leçon d'odeurs", place: "bureau",
    text: [
      "Tu demandes à Odile ce qu'elle sent, quand elle ferme les yeux devant l'orgue. Elle te regarde, surprise, comme si personne ne lui avait jamais posé la question. Puis elle débouche trois flacons, l'un après l'autre, et te les tend sous le nez.",
      "« Pas avec le nez, dit-elle. Avec la mémoire. Le nez ne fait que porter. Fermez les yeux. Qu'est-ce que c'est ? »",
    ],
    choices: [
      { label: "Fermer les yeux et sentir", test: { dom: "nature", diff: 0, label: "Nature" }, win: { fx: { flag: "nez:appris", ep: ["perso", 200] }, to: "B_odile_nez_fin" }, lose: { to: "B_odile_nez_fin" } },
    ] },

  B_odile_nez_fin: { act: "II", title: "Ce que tu as senti", place: "bureau",
    text: [
      { outcome: "win", text: "Le premier : une cave, une cannelle, une église un jour de fête. « Benjoin », dis-tu. Le deuxième : une peau au soleil. « Ambre. » Le troisième, tu ne sais pas le nommer, mais tu sais où tu l'as senti : dans l'étude, sur les doigts de Maître Brissac, quand il revient de signer. « De l'encre », dis-tu. Odile sourit, pour la première fois. « De la noix de galle. Vous avez un nez, finalement. On vous a menti. »" },
      { outcome: "lose", text: "Tu sens trois fois la même chose : du parfum. Odile rebouche les flacons sans rien dire, avec une gentillesse qui est pire qu'un reproche. « Ça viendra, dit-elle. Ou pas. Madame disait que la moitié des gens ont un nez pour se moucher, et l'autre moitié pour mentir. »" },
    ],
    choices: [
      { back: "B_bureau" },
    ] },

  B_fine_minuit: { act: "II", title: "Fine, à une heure", place: "salon",
    text: [
      "Fine s'est endormie sur sa chaise basse, la tête contre le manteau de la cheminée, la bouche ouverte. La marmite frissonne toujours. Sur la table, sous un torchon, la fournée du soir refroidit : des pompes à l'huile dorées, des fougasses aux olives, de quoi nourrir une compagnie de dragons.",
      "Le four à pain, dans le mur, est encore tiède. Sa porte de fonte est entrouverte, et dedans la braise couve sous la cendre, rose, comme un œil à demi fermé.",
      "Fine ronfle. Tu prends une fougasse. Elle est encore chaude. Personne ne t'en voudra : c'est une nuit où chacun prend quelque chose.",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  // ------------------------------------------------------------------ act III
  C_hector_chapelle: { act: "III", title: "Hector, devant la dalle", place: "chapelle",
    text: [
      "Hector s'est approché de la dalle neuve et la regarde, les mains dans les poches, longtemps.",
      "« Elle m'a appris à faire disparaître une pièce, dit-il à mi-voix. J'avais six ans. Elle m'a dit : *Hector, le secret, c'est que les gens regardent la main qui bouge. Toi, regarde toujours l'autre.* » Il sort la main droite de sa poche. Elle tremble un peu. « Je n'ai jamais su faire que ça. Regarder la mauvaise main. »",
      { second: true, text: "Il te jette un coup d'œil. Il sait que tu sais. Tu le vois à la manière dont il garde la main gauche dans sa poche, serrée sur quelque chose." },
    ],
    choices: [
      { back: "C_chapelle" },
    ] },

  C_retour_aube: { act: "III", title: "Quatre heures du matin", place: "jardin",
    text: [
      "Tu reviens de la chapelle par l'allée des cyprès, lentement. Il est quatre heures. Le ciel n'a pas encore commencé à pâlir, mais il a changé de noir : un noir plus mince, plus las, comme une étoffe qu'on a trop lavée. Les iris se taisent. La fontaine aussi, on dirait.",
      "Odile marche à côté de toi, sa bougie éteinte à la main. Elle ne dit rien pendant un long moment.",
      "« Quand j'avais cinq ans, dit-elle enfin, une dame venait au bord du champ du ruisseau, le dimanche. Elle me faisait fermer les yeux et elle me mettait une fleur sous le nez. Il fallait dire laquelle. Si je trouvais, j'avais une dragée. » Elle s'arrête devant le cadran solaire. « J'avais toujours la dragée. Je ne sais pas pourquoi je vous dis ça. Il est quatre heures. À quatre heures, on dit des choses. »",
    ],
    choices: [
      { label: "Attendre l'aube et le notaire, au salon", second: false, fx: { until: 6 }, to: "C_aube" },
      { label: "Attendre l'aube, au salon", second: true, fx: { until: 5 }, to: "S_aube" },
    ] },

  C_nez_encre: { act: "III", title: "L'encre", place: "chapelle",
    fx: { clue: "i_encre" },
    text: [
      "Tu prends le codicille et tu le portes à ton visage. Tu fermes les yeux, comme Odile te l'a appris : pas avec le nez, avec la mémoire.",
      "Le papier sent la chapelle, la cire, les lys. Et dessous, aigre, métallique, l'odeur des doigts de Maître Brissac quand il revient de signer : la noix de galle, le vitriol. Une encre qui n'a pas fini de sécher. Une encre de trois jours, au plus.",
      "Tu rouvres les yeux. Odile te regarde, et elle hoche la tête, une fois.",
    ],
    choices: [
      { back: "C_chapelle" },
    ] },

  C_brissac_odile: { act: "III", title: "Le notaire et la demoiselle", place: "salon", second: false,
    text: [
      "Pendant qu'Hector relit son codicille à la fenêtre, Maître Brissac fait signe à Odile d'approcher. Elle vient. Il lui parle bas, si bas que tu n'entends rien, et elle répond par un signe de tête, puis par un autre.",
      "Au moment où elle s'éloigne, il lui prend la main, une seconde, et la garde dans la sienne. Puis il la lâche, et regarde ses propres doigts, comme si la main d'Odile y avait laissé quelque chose.",
      "Tu as travaillé six ans chez Maître Brissac. Tu ne l'as jamais vu toucher la main de personne, pas même pour la serrer.",
    ],
    choices: [
      { back: "C_aube" },
    ] },
};
