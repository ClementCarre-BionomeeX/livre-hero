// L'Île Folle-Aiguille · side story « Le certificat de décès » (owes its question to Zola's La Mort d'Olivier Bécaille:
// how sure must a doctor be that a man is dead, and what if the dead man prefers to stay so?). Act II, Victorine at
// Morlenc, during the two days of her inquiry: a neighbour fetches her to a garret to sign the death certificate of a
// sickly clerk who fell at dawn. Cold, no pulse, the mirror stays clear; but the eyes are wrong. The young wife weeps;
// the neighbour, a medical student, is in a hurry for the burial. Victorine signs (tv:signe), waits twenty-four hours
// before signing (tv:attend), or puts the body to the needle test (tv:epreuve). Wired in XJ_enquete.
module.exports = {
  passages: {
    TV_mansarde: { act: "II", title: "Le certificat de décès", place: "basse_fosse", ambiance: "ville",
      fx: { meet: "kerguiduff" },
      text: [
        "Un jeune homme frappe à l'auberge du Cormoran, à huit heures du matin, en s'excusant. Il est étudiant en médecine, il s'appelle Simonneau, il loge dans une mansarde de la rue des Cordiers, et son voisin de palier est mort à l'aube. Il faut un médecin pour le certificat, sans quoi on ne peut pas enterrer. Les médecins du quartier ne se dérangent pas avant midi. On lui a dit qu'il y avait une femme docteur au Cormoran, qui se levait tôt.",
        "La mansarde est sous le toit, au sixième, une pièce unique, propre, pauvre, avec une fenêtre à tabatière ouverte sur les toits mouillés et le cri des goélands. Sur le lit, un homme de trente ans, maigre, au teint de cire, les mains croisées sur un drap tiré jusqu'au menton. Quelqu'un lui a fermé la bouche avec un mouchoir noué sur le crâne. Deux bougies.",
        "Au pied du lit, sur une chaise, une jeune femme de vingt ans, Rosalie Kerguiduff, en camisole, les cheveux défaits, pleure sans bruit, la tête dans les mains. Le mort s'appelait Benoni Kerguiduff. Il était copiste à la Compagnie des Bancs. Ils étaient arrivés de la campagne il y a un mois, pour une place qu'il devait prendre lundi. Il était souvent malade, dit Simonneau. Des crises, depuis l'enfance. Il est tombé ce matin en se levant, et ne s'est pas relevé."
      ],
      choices: [
        { label: "Examiner le corps", to: "TV_examen" }
      ] },
    TV_fiole: { act: "II", title: "Le certificat de décès", place: "basse_fosse", ambiance: "ville",
      text: [
        "Sur la table de nuit, entre la bougie et un missel, il y a une petite fiole de verre brun, bouchée de liège, presque vide. Victorine la débouche. Elle la flaire. Une odeur d'amande amère, de terre mouillée, et dessous, cette douceur un peu écœurante qu'elle connaît bien.",
        "Du laudanum. Coupé d'autre chose, qu'elle ne reconnaît pas tout à fait. Une préparation d'apothicaire, ou d'étudiant.",
        "« Ses gouttes, dit Simonneau, derrière elle, d'une voix égale. Pour ses crises. Je les lui préparais. Il dormait mal. » Il tend la main vers la fiole. Victorine la remet sur la table, sans la lui donner. Elle regarde l'étiquette : il n'y en a pas.",
        "Elle se dit qu'un homme qui fait des crises de mort apparente, et qu'on drogue pour dormir, peut glisser de l'une à l'autre sans que personne sache où finit le sommeil. Elle se dit aussi qu'elle voit des crimes partout depuis qu'elle a vu la cravate. Elle garde les deux pensées, côte à côte, comme deux fioles sans étiquette."
      ],
      choices: [
        { label: "Revenir au chevet", back: "TV_examen" }
      ] },
    TV_examen: { act: "II", title: "Le certificat de décès", place: "basse_fosse", ambiance: "ville",
      text: [
        { first: true, text: "Elle fait ce qu'il faut faire. Le pouls, au poignet, au cou : rien. L'oreille sur la poitrine, longtemps : rien, ou ce bruit de mer lointaine qu'on entend dans tout corps et dans tout coquillage. Le miroir de poche devant les lèvres : il reste clair. La peau est froide, d'un froid de pierre de chapelle. Les membres sont souples, encore. C'est l'heure, se dit-elle. La raideur viendra à midi." },
        { first: true, text: "Elle soulève une paupière. Et elle s'arrête." },
        { first: true, text: "L'œil est clair. Brillant. La pupille est petite, mais elle n'a pas ce voile gris, cette mollesse de fruit trop mûr qu'ont les yeux des morts au bout de trois heures. On dirait un œil qui regarde de très loin, du fond d'un puits." },
        { first: true, text: "Elle repose la paupière. Elle se dit qu'elle se trompe. Elle a vu cent morts, à Varnèse. Elle a vu, aussi, une fois, dans un livre de la Faculté, des gravures de cercueils ouverts, des ongles arrachés sur le bois du couvercle, et les mots de catalepsie, de mort apparente, d'inhumation précipitée, que les professeurs prononçaient avec un sourire, comme on parle des fantômes." },
        { first: true, text: "Simonneau, derrière elle, consulte sa montre. « Les pompes funèbres passent à onze heures, dit-il. Avec le certificat, on peut l'enterrer demain matin. Il faut faire vite, avec la chaleur. Et pour elle, c'est mieux. Plus c'est court... » Il pose la main sur l'épaule de la jeune femme. Elle ne la repousse pas." },
        { again: true, text: "Le corps, les deux bougies, le mouchoir noué sur le crâne. Simonneau consulte sa montre." }
      ],
      choices: [
        { label: "Regarder la table de nuit, où traîne une fiole", to: "TV_fiole", hide: { seen: "TV_fiole" } },
        { label: "Parler à la jeune veuve", to: "TV_veuve" }
      ] },
    TV_etudiant: { act: "II", title: "Le certificat de décès", place: "basse_fosse", ambiance: "ville",
      text: [
        "Sur le palier, sous la lucarne, Simonneau s'adosse au mur, les mains dans les poches, avec l'aisance des jeunes gens qui ont lu beaucoup de livres et vu peu de morts. Victorine lui demande depuis quand il connaît les Kerguiduff.",
        "Depuis leur arrivée, dit-il. Un mois. Il les a aidés à monter leurs malles. Il a prêté des livres au mari, qui ne les lisait pas, et des journaux à la femme, qui les lisait. Il a soigné les crises, comme il pouvait, puisqu'il est presque médecin. Il dit « presque » avec un sourire, comme on s'excuse d'une modestie.",
        "Elle lui demande s'il a vu le mari tomber, ce matin. Il hésite une demi-seconde. Il dit qu'il a entendu le bruit, à travers la cloison, et qu'il est venu. Elle lui demande à quelle heure. Il dit six heures. Puis cinq heures et demie. Puis il dit qu'il ne sait plus, qu'il dormait, qu'un mort ne vous laisse pas le temps de regarder la pendule.",
        "Il la regarde en face, avec des yeux clairs, francs, un peu trop francs. « Vous me soupçonnez de quelque chose, docteur ? C'est flatteur. Je ne suis qu'un étudiant de troisième année qui veut rendre service à une veuve. » Il sourit. « Signez, et je vous laisse tranquille. »"
      ],
      choices: [
        { label: "Rentrer dans la mansarde", back: "TV_veuve" }
      ] },
    TV_veuve: { act: "II", title: "Le certificat de décès", place: "basse_fosse", ambiance: "ville",
      text: [
        { first: true, text: "Victorine s'assied près de Rosalie. Elle lui demande comment c'était, ces crises, depuis l'enfance." },
        { first: true, text: "La jeune femme essuie ses yeux. Il tombait, dit-elle. Il devenait raide, ou mou, ça dépendait. Il ne respirait presque plus. Une fois, chez sa mère, il est resté comme ça un jour et une nuit, et le curé était venu. Puis il s'était réveillé, et il avait demandé à boire. Elle l'a oublié, ce matin, dans sa peur, et le jeune monsieur n'en sait rien." },
        { first: true, text: "Elle ajoute, très bas, en regardant ses mains : « Il était gentil. Il était souvent malade. On ne s'amusait pas beaucoup. » Puis elle rougit, et elle se remet à pleurer, plus fort, comme pour effacer la phrase." },
        { first: true, text: "Simonneau a entendu. Il ne dit rien. Il regarde par la fenêtre à tabatière les toits mouillés, et il consulte encore sa montre. Victorine remarque qu'il est rasé de frais, qu'il porte une cravate propre, un matin de deuil, à huit heures, et qu'il connaît, dans la mansarde, la place exacte de la cafetière." },
        { again: true, text: "Rosalie pleure toujours, sur sa chaise, au pied du lit. Simonneau, sur le seuil, attend." }
      ],
      choices: [
        { label: "Prendre Simonneau à part, sur le palier", to: "TV_etudiant", hide: { seen: "TV_etudiant" } },
        { label: "Signer le certificat, puisque tous les signes y sont", fx: { flag: "tv:signe" }, to: "TV_signe" },
        { label: "Refuser de signer avant vingt-quatre heures, et rester", fx: { flag: "tv:attend" }, to: "TV_attend" },
        { label: "Prendre une aiguille dans sa trousse, et la planter sous un ongle", fx: { flag: "tv:epreuve" }, to: "TV_epreuve" }
      ] },
    TV_signe: { act: "II", title: "Le certificat de décès", place: "basse_fosse", ambiance: "ville",
      text: [
        "Elle signe. Les signes y sont : le pouls, le souffle, le miroir, le froid. L'œil est une impression. Une médecin signe sur des faits, et refuse sur des faits. Elle écrit l'heure, la cause probable, une crise du cœur chez un sujet fragile. Simonneau la remercie avec chaleur. Il la raccompagne jusqu'à l'escalier.",
        "Elle passe la journée à son enquête, chez des logeuses et des directeurs d'hôpital. Le soir, elle n'y pense plus. La nuit, elle y pense.",
        "Le lendemain, à l'heure de l'enterrement, elle se trouve, sans savoir comment, au fond du cimetière des pauvres, derrière un if, à regarder descendre en terre un cercueil de sapin, avec une jeune femme en noir et un étudiant en cravate propre qui la soutient par le bras. La terre tombe. Le fossoyeur pellette. Le trou se remplit.",
        "Elle reste longtemps, quand tout le monde est parti. Elle s'approche de la tombe fraîche. Elle se penche. Elle écoute. Elle n'entend que les goélands, et le bruit de la mer contre le quai, et son propre cœur, qui frappe trop fort, comme un poing contre un couvercle. Elle s'en va. Elle ne saura jamais. C'est ce qu'elle a signé."
      ],
      choices: [
        { label: "Retourner à son enquête sur le chirurgien", fx: { quest: "TV" }, back: "XJ_enquete" }
      ] },
    TV_attend: { act: "II", title: "Le certificat de décès", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Elle dit qu'elle ne signera pas avant demain matin. Que c'est la loi des prudents, sinon celle de Morlenc. Simonneau proteste, poliment, puis moins poliment. Elle s'assied sur la chaise, près du lit, et ne bouge plus. Il finit par s'en aller, en claquant la porte. Rosalie dort, plus tard, en travers du pied du lit, épuisée.",
        "La nuit vient. Les bougies baissent. Victorine veille. Elle a pris le poignet du mort dans sa main, et elle le tient, comme on tient la main d'un malade. Vers trois heures, elle croit sentir quelque chose. Un battement, un seul, très loin, comme un pas dans une cave. Elle attend. Rien. Puis un autre, une minute plus tard.",
        "À l'aube, Benoni Kerguiduff ouvre les yeux. Il les ouvre tout à fait, et il regarde le plafond, et il ne bouge pas. Puis il tourne la tête, lentement, vers Victorine. Il chuchote : « J'ai tout entendu. »",
        "Il a tout entendu. Le miroir. La montre. Les pompes funèbres à onze heures. La main sur l'épaule. La place de la cafetière. Il ne pouvait pas bouger un cil. Il a entendu sa femme dire qu'on ne s'amusait pas beaucoup. Il a entendu la porte claquer.",
        "Il regarde Rosalie, endormie en travers du lit, les joues encore mouillées. Il la regarde longtemps, avec une tendresse effrayante. Puis il dit à Victorine, très bas, d'une voix de papier : « Laissez-moi partir. Signez. Je m'en irai par l'escalier de service, avant qu'elle se réveille. Je prendrai un autre nom. Elle sera libre. Elle a vingt ans. C'est la seule chose que je peux lui donner que je n'ai pas déjà ratée. »",
        "Victorine ne signe pas. Elle ne le retient pas non plus. Quand Rosalie se réveille, à huit heures, le lit est vide, la fenêtre à tabatière ouverte, et la médecin assise sur sa chaise, qui lui dit, en pesant chaque mot, que son mari n'est pas mort, qu'il est parti, et qu'il lui laisse le choix de le chercher ou non."
      ],
      choices: [
        { label: "Retourner à son enquête sur le chirurgien", fx: { quest: "TV" }, back: "XJ_enquete" }
      ] },
    TV_epreuve: { act: "II", title: "Le certificat de décès", place: "basse_fosse", ambiance: "ville",
      text: [
        "Elle ouvre sa trousse. Elle en tire une longue aiguille d'acier. Simonneau demande ce qu'elle fait. Elle dit : l'épreuve de l'ongle. C'est dans les livres. Un mort ne sent rien. Rosalie pousse un cri et se cache les yeux.",
        "Elle prend la main gauche du mort. Elle choisit l'annulaire, celui de l'alliance. Elle enfonce l'aiguille sous l'ongle, lentement, jusqu'à la lunule.",
        "Il ne se passe rien. Une seconde. Deux. Trois. Simonneau souffle, avec un petit rire nerveux.",
        "Puis le corps se cabre. Tout entier, d'un coup, comme une truite qu'on sort de l'eau. Un hurlement sort de la gorge, étouffé par le mouchoir noué sur la mâchoire, un hurlement de bête qu'on égorge. La main se referme sur l'aiguille. Les yeux s'ouvrent, grands, fous, et roulent dans les orbites, cherchant quelque chose à quoi s'accrocher.",
        "Rosalie s'évanouit. Simonneau recule jusqu'au mur, livide, et il ne dit plus rien du tout.",
        "Il faut une heure pour que le copiste puisse parler. Il a tout entendu, lui aussi : la montre, les pompes funèbres, la main sur l'épaule. Il le dit avec les yeux seulement, en regardant Simonneau, puis sa femme qui revient à elle, puis Victorine, qui lui panse le doigt.",
        "Il gardera l'ongle noir, dit-il en riant faiblement, et il préfère ça à un cercueil. Il lui serre la main avec sa main bandée. Il ne lui pardonne pas tout à fait. Il la remercie quand même."
      ],
      choices: [
        { label: "Retourner à son enquête sur le chirurgien", fx: { quest: "TV" }, back: "XJ_enquete" }
      ] }
  },
  extras: {
    people: {
      kerguiduff: { name: "Benoni Kerguiduff", aka: ["le copiste de la mansarde"], qui: "Copiste de la Compagnie des Bancs, trente ans, sujet depuis l'enfance à des crises où il paraît mort." }
    },
    quests: [
      { id: "TV", act: "II", kind: "annexe", title: "Le certificat de décès", start: "TV_mansarde", doit: "olivierbecaille", echo: ["tv:signe", "tv:attend", "tv:epreuve"] }
    ]
  }
};
