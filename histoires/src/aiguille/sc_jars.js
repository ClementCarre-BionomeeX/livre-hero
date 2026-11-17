// L'Île Folle-Aiguille · side story « Le jars » (owes its question to Gogol's How Ivan Ivanovich Quarrelled with Ivan
// Nikiforovich: how big does a quarrel grow when two friends have nothing else to do, and can it be cooked down?). Act
// IV, Fargue in the mutineers' camp: two old topmen, both named Ivon, friends for thirty years, fall out over a brass
// spyglass that one won't trade, and the word « jars » that the other said. In three days the feud fills the beach:
// smoke, latrines, petitions to Malandain. Fargue cooks them a dinner of reconciliation (sc:repas), lets them settle
// it by a contest (sc:duel), or makes the whole camp laugh at them (sc:rire). Wired in A4f_jours.
module.exports = {
  passages: {
    SC_longuevue: { act: "IV", title: "Le jars", place: "plage", ambiance: "nature", second: true,
      fx: { meet: "lelann" },
      text: [
        "Sur la plage du camp, il y a deux abris de voile côte à côte, si proches que leurs piquets se touchent. Dans l'un, Ivon Le Lann. Dans l'autre, Ivon Kerhallet. Deux gabiers de cinquante ans, nés dans la même paroisse, embarqués ensemble à douze ans, mutinés ensemble par fidélité l'un à l'autre plus que par conviction. On les appelle les deux Ivon. Le Lann est gros, rouge, lent, avec un ventre de chanoine. Kerhallet est maigre, jaune, vif, avec un nez de bécasse. Ils partagent tout depuis quarante ans : le tabac, la gamelle, les puces.",
        "Le Lann possède, depuis une partie de dés gagnée à Morlenc contre un capitaine en retraite, une longue-vue de cuivre, superbe, à trois tirages, gainée de galuchat, qu'il astique tous les soirs avec sa manche et dont il ne se sert jamais. Kerhallet la veut. Il ne sait pas pourquoi. Il la veut. Il offre sa part de tabac pour un mois. Le Lann refuse. Il offre son couteau à manche de corne. Le Lann refuse. Il offre un cochon, qu'il n'a pas, qu'il aura quand on sera riches. Le Lann refuse encore, et dit, en caressant la longue-vue : « Qu'est-ce que tu en ferais, toi ? Tu regarderais quoi ? Tu as des yeux de poule. »",
        "Kerhallet devient vert. Il se lève. Il dit, tout haut, devant tout le feu : « Et toi, gros jars. »",
        "Le silence tombe. Le Lann pose la longue-vue. Il regarde son ami de quarante ans. Il dit, très lentement : « Répète. »",
        "Kerhallet répète. Le Lann se lève, rentre dans son abri, et tire le rideau de voile."
      ],
      choices: [
        { label: "Laisser passer la nuit, et voir comment ça tourne", to: "SC_guerre" }
      ] },
    SC_guerre: { act: "IV", title: "Le jars", place: "plage", ambiance: "nature", second: true,
      fx: { meet: "kerhallet" },
      text: [
        "Ça tourne mal. Le lendemain, Kerhallet déplace son feu de trois pieds, de façon que la fumée entre droit dans l'abri de Le Lann. Le Lann, le surlendemain, creuse ses latrines juste derrière l'abri de Kerhallet, sous le vent. Kerhallet plante une rangée de piquets entre les deux abris, pour marquer la frontière. Le Lann la déplace d'un pied, la nuit. Kerhallet la remet. Le Lann la redéplace.",
        "Le troisième jour, chacun va trouver Malandain avec une plainte. Le Lann a dicté la sienne à un mutin qui sait écrire, et elle fait quatre pages : il y est question d'honneur, de volaille, d'insulte publique, de diffamation zoologique. Kerhallet n'a pas de plainte écrite ; il a une liste orale de griefs qui remonte à trente-huit ans et à une affaire de hamac mal accroché à Port-Louvel, qu'il récite debout, les poings sur les hanches.",
        "Malandain les écoute tous les deux, la tête dans les mains. Puis il se tourne vers Fargue, qui touille sa marmite à côté. « Toi, dit-il. Débrouille-toi. Moi, j'ai une île à garder. S'ils se tuent, je ne veux pas le savoir. S'ils ne se tuent pas, je ne veux plus les entendre. »",
        "Le camp entier a pris parti. Il y a les Le Lann et les Kerhallet, comme deux paroisses un jour de pardon. On se dispute le soir autour du feu pour savoir si jars est une insulte plus grave que poule. On parie. Les deux Ivon ne se parlent plus. Ils mangent dos à dos. Ils ont l'air de deux vieux chiens malades."
      ],
      choices: [
        { label: "Aller voir Le Lann dans son abri", to: "SC_lelann", hide: { seen: "SC_lelann" } },
        { label: "Aller voir Kerhallet derrière ses piquets", to: "SC_kerhallet", hide: { seen: "SC_kerhallet" } },
        { label: "Décider de ce qu'on fait de ces deux-là", to: "SC_choix", if: { all: [{ seen: "SC_lelann" }, { seen: "SC_kerhallet" }] }, why: "Fargue veut d'abord les entendre l'un et l'autre." }
      ] },
    SC_lelann: { act: "IV", title: "Le jars", place: "plage", ambiance: "nature", second: true,
      text: [
        "Le Lann est couché dans son abri, sur le dos, la longue-vue sur le ventre, comme un gisant avec son épée. Il reste couché. Il dit que la longue-vue, il la donnerait bien, si on la lui demandait gentiment. Le mot, voilà ce qui le tient.",
        "« Jars, dit-il. Tu sais ce que c'est, un jars ? C'est un gros oiseau bête qui marche en se dandinant et qui siffle quand on approche. Il m'a traité de ça. Devant tout le monde. Lui. Lui qui m'a vu pleurer à Port-Louvel, quand ma mère est morte. Lui qui m'a tenu la tête quand j'ai eu le scorbut. Lui qui sait tout. Il a choisi le seul mot qui me fait mal. Il savait. C'est ça que je ne lui pardonne pas : qu'il savait. »",
        "Il se tourne vers la toile. Il dit, plus bas : « Ma mère gardait des oies. Le jars me courait après, quand j'étais petit. Il me pinçait les mollets. Ils se moquaient tous de moi. Ivon aussi. Il riait. Il avait sept ans. »",
        "Il se tait. Il astique la longue-vue avec sa manche, longtemps, sans la regarder."
      ],
      choices: [
        { label: "Revenir au feu", back: "SC_guerre" }
      ] },
    SC_kerhallet: { act: "IV", title: "Le jars", place: "plage", ambiance: "nature", second: true,
      text: [
        "Kerhallet est assis derrière ses piquets, sur une souche, à tailler un nouveau piquet avec son couteau à manche de corne, avec une application de sculpteur. Il parle sans lever les yeux, très vite.",
        "« Il a dit que j'avais des yeux de poule. Moi. Moi qui ai vu la terre avant la vigie, trois fois, au cap. Moi qui vois les dauphins à deux milles. Il le sait. Il sait que j'ai la meilleure vue de la bordée. Il sait aussi que depuis l'an dernier, le soir, je vois flou. Que je mets une heure à enfiler une aiguille. Que je ne vois plus les dauphins. Je ne l'ai dit qu'à lui. Et lui, devant tout le monde : yeux de poule. »",
        "Il s'arrête de tailler. Il regarde la longue-vue, de loin, posée sur le ventre de Le Lann, à travers la toile entrouverte.",
        "« Je la voulais pour ça, la longue-vue, dit-il. Pour voir encore les dauphins. Le pourquoi, je le gardais. Il aurait compris. C'est ça que je voulais éviter. »",
        "Il reprend son piquet. Il taille trop fort. La pointe casse."
      ],
      choices: [
        { label: "Revenir au feu", back: "SC_guerre" }
      ] },
    SC_choix: { act: "IV", title: "Le jars", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Le soir, Fargue fait le compte, en touillant sa marmite. Deux hommes de cinquante ans, au bout du monde, sur une île qu'ils ne quitteront peut-être jamais, entourés de couteaux et de fièvres, qui se font la guerre pour un oiseau de basse-cour et une longue-vue. Il a vu des guerres commencer pour moins. Il en a vu finir pour moins aussi.",
        "Chacun a touché, sans le vouloir, la seule plaie que l'autre lui avait montrée, et chacun l'ignore. Le camp, qui s'amuse, se gardera bien de le leur apprendre."
      ],
      choices: [
        { label: "Leur préparer, à tous les deux, un dîner dont ils ne pourront pas se lever fâchés", fx: { flag: "sc:repas" }, to: "SC_repas" },
        { label: "Proposer qu'ils règlent ça par un concours, devant tout le camp", fx: { flag: "sc:duel" }, to: "SC_duel" },
        { label: "Raconter toute l'affaire au feu, en grand, pour que le camp en rie avec eux", fx: { flag: "sc:rire" }, to: "SC_rire" }
      ] },
    SC_repas: { act: "IV", title: "Le jars", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Il passe la journée à cuisiner. Il tue une poule sauvage, de celles qui courent dans la forêt. Il la farcit de noix de coco, de piment, de citron vert, de ce qu'il trouve. Il la fait rôtir lentement, sur un lit de braise, dans un trou de sable, toute l'après-midi. L'odeur monte sur la plage et fait taire le camp.",
        "Le soir, il dresse une table : une planche sur deux tonneaux, au bout de la plage, loin du feu. Deux places, face à face. Il va chercher les deux Ivon, chacun de son côté, en leur disant qu'on l'attend pour un conseil. Ils arrivent en même temps. Ils se voient. Ils veulent repartir. Fargue pose la poule sur la table.",
        "« Asseyez-vous, dit-il. C'est une poule. Elle a de très mauvais yeux, et elle était grosse comme un jars. Je l'ai cuisinée pour deux. Celui qui se lève avant la fin, je ne lui fais plus jamais à manger. »",
        "Ils s'assoient. Ils mangent. En silence, d'abord. Puis Le Lann dit que la farce est bonne. Kerhallet dit qu'il y manque du sel. Le Lann dit qu'il a toujours trouvé qu'il manquait du sel à tout, depuis Port-Louvel. Kerhallet dit que c'est parce qu'à Port-Louvel, la cantinière... Et ils sont partis, et à minuit ils sont encore là, à se rappeler des noms morts depuis trente ans, et la poule n'est plus qu'une carcasse, et ils pleurent tous les deux, et ils rient.",
        "Le lendemain, la longue-vue est dans l'abri de Kerhallet. Le Lann dit qu'il la lui a prêtée. Pour les dauphins. Il ne demande pas quels dauphins."
      ],
      choices: [
        { label: "Revenir au fourneau", fx: { quest: "SC" }, back: "A4f_jours" }
      ] },
    SC_duel: { act: "IV", title: "Le jars", place: "plage", ambiance: "nature", second: true,
      text: [
        "Il propose, au feu, un concours. Celui qui gagne prend la longue-vue et le dernier mot. Le perdant se tait à jamais sur l'affaire. Le camp applaudit. Malandain dit oui, pourvu que ce soit sans couteau.",
        "On débat de l'épreuve. On propose la lutte : Kerhallet refuse, il est maigre. On propose la course : Le Lann refuse, il est gros. Fargue propose la vue : celui des deux qui verra le premier, au large, la prochaine chose qui bouge sur la mer, une voile, un oiseau, un dauphin, aura gagné.",
        "Kerhallet pâlit. Le Lann le regarde. Ils savent tous les deux. Le camp ne sait pas.",
        "Ils s'assoient côte à côte sur la dune, face à la mer, à l'aube. Le camp derrière. Ils attendent. Une heure. Deux. Puis Le Lann voit. Fargue le voit voir : un aileron, très loin, à droite, qui fend l'eau grise. Le Lann ne dit rien. Il regarde ailleurs, à gauche, avec beaucoup d'attention.",
        "Au bout d'un long moment, Kerhallet plisse les yeux, se lève à moitié, tend le bras, crie : « Là ! Un dauphin ! » Il le crie avec une telle joie que tout le camp se lève pour voir. Le Lann dit qu'il n'avait rien vu. Il donne la longue-vue. Il ne dira plus jamais rien sur l'affaire. Il a perdu. Il a l'air plus content que le gagnant."
      ],
      choices: [
        { label: "Revenir au fourneau", fx: { quest: "SC" }, back: "A4f_jours" }
      ] },
    SC_rire: { act: "IV", title: "Le jars", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Le soir, au feu, Fargue se lève, la louche à la main, et il raconte. Il raconte comme un conteur de foire, avec des voix. La longue-vue de galuchat. Les yeux de poule. Le jars. Les piquets qui avancent d'un pied la nuit. Les latrines sous le vent. La plainte de quatre pages sur la diffamation zoologique. Le hamac mal accroché à Port-Louvel, en 1802.",
        "Le camp rit. Il rit d'abord des deux Ivon, en les montrant du doigt. Puis Fargue fait l'oie. Il fait le jars, en se dandinant autour du feu, le cou tendu, en sifflant. Il fait la poule qui cherche son grain sans le voir. Il fait les deux à la fois, l'un après l'autre, si bien que le camp rit à en tomber dans le sable, et que les deux Ivon, assis chacun de son côté, essaient de garder leur dignité, et n'y arrivent pas.",
        "C'est Le Lann qui craque le premier, avec un rire de chanoine qui lui secoue le ventre. Kerhallet résiste encore une minute, et puis il rit aussi, à petits coups secs, en se cachant derrière sa main.",
        "Ils se réconcilient le lendemain, à peu près. Mais le camp les appelle, depuis, le Jars et la Poule. Se fâcher, ils ne le peuvent plus. Ils ont un ennemi commun, maintenant : tout le monde. Fargue se demande, en touillant sa marmite, s'il a réparé une amitié ou s'il l'a seulement rendue ridicule. Il soupçonne qu'à cinquante ans, sur une île, c'est la même chose."
      ],
      choices: [
        { label: "Revenir au fourneau", fx: { quest: "SC" }, back: "A4f_jours" }
      ] }
  },
  extras: {
    people: {
      lelann: { name: "Ivon Le Lann", aka: ["le gros Ivon"], qui: "Gabier mutin de cinquante ans, gros et rouge, ami d'enfance d'Ivon Kerhallet, propriétaire d'une longue-vue de cuivre pillée chez le baron." },
      kerhallet: { name: "Ivon Kerhallet", aka: ["le petit Ivon"], qui: "Gabier mutin de cinquante ans, maigre et vif, au nez de bécasse, ami d'enfance d'Ivon Le Lann ; il voit flou depuis l'an dernier." }
    },
    quests: [
      { id: "SC", act: "IV", kind: "annexe", title: "Le jars", start: "SC_longuevue", doit: "deuxivan", echo: ["sc:repas", "sc:duel", "sc:rire"] }
    ]
  }
};
