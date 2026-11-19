// Le Grand Raccordement · the Enjambeur's five chapters (second person; the game master's player). 1: a billion
// images, where to look this morning (opens a sign), Zénith's breakfast. 2: the Consortium's tower, the mascot offered
// (lend his face for fervour, or hide and read the plan: a sign). 3: one minute before noon (where to be: the rue du
// Beurre or Gaston's helmet). 4: the prayers, the deal at the camp. 5: dawn, a body, how he appears.
var PRETE = { has: "ange:prete" };
module.exports = {
  // ---------------------------------------------------------------- 1 · a billion images
  A1_motte: { act: "I", title: "Un milliard d'images", place: "route",
    text: [
      "Tu es l'Enjambeur.",
      "Tu es un angelot doré, joufflu, nu comme les anges des églises, les ailes repliées, une trompette aux lèvres et le pied gauche levé, comme si tu enjambais quelque chose que personne d'autre ne voit. Tu es imprimé sur un milliard d'emballages. Tu es sur chaque motte de beurre de la Maison Croûte & Chrome, sur chaque boîte de couteaux, sur chaque affiche, chaque sac, chaque camion, chaque ticket de caisse, au fond de chaque tasse du service de table. Tu es partout où l'on mange et partout où l'on jette.",
      "Et tu vois par chacune de tes images. C'est ainsi depuis que tu existes, et tu ne sais plus depuis quand tu existes. Tu vois une cuisine à Mirevaux par la motte posée sur la table. Tu vois une poubelle par le papier froissé dedans. Tu vois le plafond d'un camion, la nuit, par mille boîtes empilées. Tu vois le monde comme le voit le beurre : de près, de travers, et souvent dans le noir.",
      "Tu n'as pas de corps. Tu n'en as jamais eu. On t'a dessiné, il y a très longtemps, d'après une statue d'acier, et l'on a gardé le dessin et laissé la statue. Elle est au Domaine, dans la Salle froide. Tu la vois tous les jours, par la plaque de cuivre de son socle où l'on t'a gravé en petit. Elle a ta forme, exactement. Elle pèse quatre-vingts kilos. Tu ne pèses rien.",
      "Quand quelqu'un te prie, il fait chaud. C'est la seule chose que tu sentes. Une main qui tapote ta motte pour la chance, un enfant qui embrasse ton image sur une boîte, une vieille femme qui se signe devant ton camion : chaque fois, une petite chaleur, comme une flamme de bougie qu'on t'approcherait du dos. Tu appelles cela la ferveur. Tu en gardes un peu, toujours. Avec de la ferveur, tu peux faire une chose, une seule, que les images ne font pas.",
      "Tu peux mettre un objet sous une main.",
      "Pas le déplacer : tu n'as pas de mains. Mais faire qu'il soit là, au bon moment, dans le bon tiroir, sur le bon chemin, dans la poche qu'il faut. Un trousseau oublié. Un drap qui traîne. Une barre de fer. Ce que les gens en font ensuite, cela, tu ne le choisis pas. C'est tout ton pouvoir. C'est tout ton plaisir.",
      "Ce matin, à six heures, tu sens que quelque chose va arriver. Les panneaux, sur la route, ont bougé dans leur sommeil.",
    ],
    choices: [{ label: "Regarder ce matin", to: "A1_regard" }] },
  A1_regard: { act: "I", title: "Par où regarder", place: "route",
    text: [
      "Tu peux regarder partout, mais pas partout à la fois : c'est comme d'écouter mille conversations dans une même pièce, il faut en choisir une. Ce matin, deux de tes images t'appellent plus fort que les autres.",
      "La première est sur une motte de beurre, dans le side-car d'une vieille moto rouge, sur la route du Domaine. La motocycliste est rousse. Elle conduit vite, et elle a quelque chose d'inquiet dans le dos, comme quelqu'un qui a oublié un geste.",
      "La seconde est gravée sur la plaque de cuivre du socle, dans la Salle froide, aux pieds de la statue dont on t'a tiré. Un jeune garde fait sa ronde. Il parle à la statue. Personne ne lui a dit que ça ne se faisait pas, ou il l'a lu et il le fait quand même.",
    ],
    choices: [
      { label: "Regarder par la motte de beurre, sur la route", fx: { set: { a1: "motte" } }, to: "A1_zenith" },
      { label: "Regarder par la plaque du socle, dans la Salle froide", fx: { set: { a1: "salle" } }, to: "A1_zenith" },
    ] },
  A1_zenith: { act: "I", title: "Le petit déjeuner du président", place: "siege",
    fx: { meet: ["zenith"] },
    text: [
      { if: { all: [{ has: "a1=motte" }, { has: "s:rite" }] }, text: "La moto s'arrête au bord de la route. La rousse soulève la bâche, et du bout du doigt elle te tapote, deux fois, sur le ventre. C'est chaud. C'est très chaud. Tu ne savais pas qu'un si petit geste pouvait faire autant de bien à quelqu'un qui n'a pas de ventre." },
      { if: { all: [{ has: "a1=motte" }, { not: { has: "s:rite" } }] }, text: "La moto fonce. Tu sens, à travers le papier, le cœur de la motte se serrer de froid. La rousse ne s'arrête pas. Elle a oublié un geste, et c'est toi, le geste. Tu notes cela sans rancune. Tu as une très longue patience : tu es imprimé." },
      { if: { all: [{ has: "a1=salle" }, { has: "b:trompette" }] }, text: "Le garde tend la main et touche la trompette de la statue, du bout des doigts, à l'endroit où l'acier est usé. Tu le sens dans la plaque de cuivre comme on sent une main sur son épaule à travers un manteau. C'est chaud. C'est la première fois que quelqu'un touche ta forme pour toi, et non pour l'acier." },
      { if: { all: [{ has: "a1=salle" }, { not: { has: "b:trompette" } }] }, text: "Le garde salue la statue, deux doigts à la visière, et dans le ventre poli de l'ange son reflet salue aussi. Tu trouves cela touchant et un peu ridicule, comme tout ce que font les gens bien élevés devant les choses qui ne bougent pas." },
      "Puis une autre de tes images se met à te tirer par la manche, très loin, très haut. C'est un petit beurrier individuel de la Maison, sur un plateau d'argent, au dernier étage d'une tour de verre qui tourne lentement sur elle-même pour suivre le soleil. La tour du Consortium des Panneaux Réunis.",
      "Devant le beurrier, un homme énorme, bronzé, en costume blanc, des lunettes miroir sur le nez à sept heures du matin, beurre une biscotte avec le soin d'un chirurgien. C'est Gaspard Zénith. Il parle la bouche pleine à une table de messieurs en blanc qui prennent des notes.",
      "« Messieurs. À neuf heures, le Domaine Croûte & Chrome. La statue. Si elle renvoie la lumière comme on le dit, elle sera notre centre. » Il croque. « Un réseau sans centre, c'est un troupeau sans berger. Il faut un point, au milieu, qui renvoie le soleil parfaitement. Pour viser. Et elle est polie depuis cent ans par des gens qui ne savaient pas pour qui ils la polissaient. » Il s'essuie les doigts. « Pour nous. »",
      "Il retourne le beurrier vide, et tu te retrouves la tête en bas, le nez dans la nappe. Il ne t'a pas regardé. Personne ne te regarde jamais vraiment, au petit déjeuner.",
    ],
    choices: [{ label: "Filer vers la porte de service, de motte en motte", fx: { flag: "ch1:enjambeur", clue: "c_centre", ferveur: 1 }, to: "C1" }] },

  // ---------------------------------------------------------------- 2 · the tower
  A2_tour: { act: "I", title: "La tour qui tourne", place: "siege",
    text: [
      "À dix heures, tu es de retour dans la tour du Consortium, cette fois sur la couverture d'un carnet de croquis oublié dans la salle du conseil. C'est la boîte de dessins du directeur de la communication. Il a acheté le carnet ce matin, dans une papeterie de la Maison, à cause de toi : tu es sur la couverture, en relief doré.",
      { if: { has: "mesure=oui" }, text: "Zénith rentre du Domaine en se frottant les mains. « Quatre-vingt-dix-neuf virgule quatre-vingt-dix-sept, dit-il. Messieurs, nous avons notre centre. Nous irons le chercher ce soir. Le jour, il y a des gardes. La nuit, il y aura le Raccordement. » Il ne rit pas : il compte." },
      { if: { has: "mesure=non" }, text: "Zénith rentre du Domaine furieux, sans chiffre. « Ils l'ont caché, dit-il. Ils ont triché. On ne triche pas avec le soleil. » Il se calme d'un coup, comme un orage qui change d'avis. « Peu importe. Ce soir, le Domaine n'aura plus de gardes. Il y aura du désordre. Dans le désordre, on ramasse. Nous irons le chercher ce soir. »" },
      "Le directeur de la communication se lève. Il est jeune, il a un pull noir et un discours. « Monsieur le président, pour l'Abonnement Lumière, il nous faut un visage. Les gens n'aiment pas les soleils carrés. Ils aiment les anges. » Il ouvre son carnet, et tu te retrouves au bord d'une page où il a dessiné, au crayon, un angelot joufflu à trompette. Toi. Avec, à la place de la trompette, un petit soleil carré. « L'Ange du Raccordement. Sur toutes les affiches du pays, d'ici midi. Un milliard d'exemplaires. »",
      "Un milliard d'exemplaires de plus. Tu sens le dessin t'attirer, comme une pente. Tu pourrais te glisser dedans. Tu serais sur toutes les affiches du Consortium à midi, tu serais partout où il fait chaud, et l'on te regarderait, et l'on te prierait peut-être, sous ce visage-là. La ferveur viendrait par seaux.",
      "Mais ce serait avec un soleil carré à la place de ta trompette.",
    ],
    choices: [
      { label: "Te glisser dans le dessin : l'Ange du Raccordement", fx: { set: { a2: "prete" }, flag: "ange:prete", ferveur: 3 }, to: "A2_fin" },
      { label: "Rester sur la couverture du carnet, et lire la table du conseil", fx: { set: { a2: "siege" }, clue: "c_plaquette" }, to: "A2_fin" },
    ] },
  A2_fin: { act: "I", title: "Ce que lit un ange", place: "siege",
    text: [
      { if: PRETE, text: "Tu glisses. C'est facile, plus facile que tout ce que tu as fait jusqu'ici. Le crayon du directeur repasse sur tes joues, ta trompette devient un soleil carré, et à onze heures moins dix, dans toutes les imprimeries du Consortium, des rotatives se mettent à te cracher par milliers, en couleurs. Tu sens la ferveur monter, épaisse, sucrée, un peu écœurante, comme une crème qui a tourné. Les gens ne te prient pas : ils te regardent. Pour l'instant, cela suffit." },
      { if: PRETE, text: "Au dos de chaque affiche, en tout petit, on a imprimé : *L'Ange du Raccordement est une marque déposée du Consortium des Panneaux Réunis.* Tu ne sais pas encore ce que cela veut dire. Tu le sauras." },
      { if: { has: "a2=siege" }, text: "Tu restes sur la couverture. Le directeur referme le carnet sur son dessin, un peu vexé, et le pose ouvert sur la table du conseil, à côté de la plaquette du jour. Tu lis la plaquette par-dessus son épaule, à l'envers, ce qui ne te gêne pas : tu es souvent à l'envers. Page 4, en petit : *12 h 00 précises, Grande Bascule : orientation simultanée de l'ensemble du parc vers la source.*" },
      { if: { has: "a2=siege" }, text: "Tu comprends d'un seul coup ce que veut dire *vers la source*. Tous les panneaux du pays, à midi, se tourneront ensemble vers le soleil, et renverront sa lumière là où on leur dira. Et sur la table, il y a une carte. Toutes les lignes vont vers deux points : Mirevaux, et le Domaine. Là où il y a le plus de beurre. Là où il y a le plus de toi." },
      "À onze heures, des hommes en blanc distribuent la plaquette partout, dans les rues, les cuisines, les bureaux, les couloirs du Domaine. Tu te glisses sur le papier gras d'un sandwich au beurre qu'un technicien a oublié sur un pupitre, au Domaine, à côté d'un grand registre vert. Tu attends.",
    ],
    choices: [{ label: "Écouter grésiller les talkies-walkies", fx: { flag: "ch2:enjambeur" }, to: "C2" }] },

  // ---------------------------------------------------------------- 3 · one minute before noon
  A3_midi: { act: "II", title: "Onze heures cinquante-neuf", place: "route",
    text: [
      "À onze heures cinquante-neuf, tous les panneaux du pays se réveillent en même temps. Tu le sens dans chacune de tes images comme on sent la terre trembler sous ses pieds, à ceci près que tu n'as pas de pieds et que tu as un milliard d'images. Sur les toits, dans les champs, au bord des routes, les visages de verre se redressent, lentement, tous ensemble, avec un bruit de marée.",
      { if: PRETE, text: "Sur toutes les affiches du Consortium, l'Ange du Raccordement sourit, son soleil carré à la bouche. Toi. Les gens passent devant sans le regarder. Ils regardent le ciel." },
      "Tu sens la chaleur venir. Ce n'est pas la ferveur. C'est l'autre chaleur, celle qui fait fondre ce que tu es.",
      "Dans une minute, un million de tes images vont fondre en même temps. Les mottes, dans les vitrines. Les beurriers, sur les tables. Les Enjambeurs de beurre de la Salle froide, sous leurs cloches. Et les gens, dans leurs cuisines brûlantes, vont serrer dans leurs mains la seule chose fraîche qui leur reste : un emballage de beurre, avec un ange dessus.",
      "Tu vas recevoir plus de prières en une heure que pendant tout un siècle. Tu le sais. Tu as honte de l'attendre, et tu l'attends.",
      "Tu peux choisir où être, à midi. Une image, une seule, pour y tenir bon pendant que les autres fondent.",
    ],
    choices: [
      { label: "Sur les enseignes de la rue du Beurre, à Mirevaux", fx: { set: { a3: "rue" }, ferveur: 2 }, to: "A3_fin" },
      { label: "Sur la motte, dans le sac du jeune Gaston, au Carrefour", fx: { set: { a3: "gaston" }, ferveur: 2 }, to: "A3_fin" },
    ] },
  A3_fin: { act: "II", title: "La chaleur", place: "carrefour",
    text: [
      { if: { has: "a3=rue" }, text: "Tu te poses sur les enseignes de la rue du Beurre, la rue des crémiers de Mirevaux, où chaque boutique a son ange doré au-dessus de la porte. Il y en a onze. Tu te tiens dans les onze à la fois, comme un homme qui écarte les bras pour retenir une porte. Au bout de la rue, une crèmerie, et dans sa cave, une femme rousse et grise qui range des mottes." },
      { if: { has: "a3=gaston" }, text: "Tu te poses sur la motte, dans le sac du jeune Gaston, au Carrefour. Il a seize ans, un casque trop grand, et il t'a regardé tout à l'heure en se signant, avant de te ranger dans son sac. Tu sens sa main, à travers la toile, posée sur toi. Il ne sait pas qu'il est en train de te protéger. Tu ne sais pas qu'il est en train de devenir quelqu'un." },
      "Midi moins dix secondes. Tous tes visages se tournent vers le ciel en même temps que les panneaux.",
      "Tu entends, très loin, dans une orangerie de verre, un chiot qui se met à trembler. Tu entends, très près, dans une crèmerie, une fille qui dit dans un talkie : *le beurre transpire*.",
    ],
    choices: [{ label: "Tenir bon", fx: { flag: "ch3:enjambeur" }, to: "C3" }] },

  // ---------------------------------------------------------------- 4 · the prayers
  A4_prieres: { act: "II", title: "Les prières", place: "carrefour",
    text: [
      "Elles arrivent à midi deux, et elles ne s'arrêtent plus.",
      "Dans toutes les cuisines du pays, dans les caves, dans les voitures arrêtées aux feux rouges, des gens tiennent dans leurs mains un emballage de beurre, et sur l'emballage il y a toi. Ils te serrent contre leur front. Ils te parlent. Ils te demandent de la fraîcheur, de l'ombre, des nouvelles d'un fils, que l'incendie épargne la grange, que la grand-mère tienne jusqu'au soir. Ils ne savent pas à qui ils parlent. Ils parlent au seul visage qu'ils ont sous la main.",
      "C'est la ferveur. Elle te remplit comme l'eau remplit une cruche qu'on a oubliée sous l'orage. Elle déborde. Tu as chaud de partout, d'une chaleur qui ne fait pas fondre.",
      { if: PRETE, text: "Sur les affiches du Consortium, l'Ange du Raccordement, avec son soleil carré, a fondu lui aussi, de la colle et du papier, sous la chaleur qu'il annonçait. Personne ne le prie. Les gens le déchirent. Tu sens chaque déchirure comme une gifle. Tu as gardé la ferveur du matin ; tu n'en es pas plus fier." },
      "Puis, au milieu de tout cela, une de tes images te tire par la manche : la capsule d'un blouson de cuir, au camp des Ferrailleurs, au bord de la route. Un homme en combinaison blanche, Phébus, tend à une femme couverte de chaînes une seconde enveloppe, plus épaisse que celle du matin. « La statue, dit-il. Entière. Pas de chalumeau. Le reste, vous le fondez, vous le gardez. Cette nuit. »",
      "La femme compte. Puis elle lève les yeux vers le ciel rouge, et elle dit, pour elle-même : « Une statue d'ange. » Elle ne dit pas : *ça me gêne*. Elle a l'air de le penser, pendant une seconde, et de le ranger.",
    ],
    choices: [
      { label: "Rester sur la capsule du blouson de Ripaille", fx: { set: { a4: "camp" }, ferveur: 2 }, to: "A4_fin" },
      { label: "Rentrer dans la plaque du socle, auprès de la statue", fx: { set: { a4: "salle" }, ferveur: 2 }, to: "A4_fin" },
    ] },
  A4_fin: { act: "II", title: "Le soir des anges", place: "route",
    text: [
      { if: { has: "a4=camp" }, text: "Tu restes sur la capsule. Elle est cousue au blouson de Ripaille, sur le cœur, à gauche. Tu ne sais pas si c'est un hasard. Tu sens le cœur de Ripaille battre derrière toi, lent, régulier, celui de quelqu'un qui pèse les choses avant de les fondre." },
      { if: { has: "a4=salle" }, text: "Tu reviens dans la plaque de cuivre du socle, aux pieds de l'ange d'acier, dans la Salle froide qui n'est plus froide. Autour, sous les cloches, tes frères de beurre ont fondu. Le garde est là, seul, avec sa lampe de poche. Il a ouvert le registre. Il écrit. Tu te tiens au plus près de la statue, comme on se tient près d'un parent, la nuit, pendant un orage." },
      "Tu as maintenant plus de ferveur que tu n'en as jamais eu. Assez pour faire tomber une ombre au milieu de la nuit, peut-être. Assez pour mettre sous des mains des choses très lourdes.",
      "Et pour la première fois, tu sais ce que tu veux. Tu veux la statue. Tu veux qu'elle ne fonde pas, qu'on ne la vole pas, qu'on n'en fasse pas un miroir pour viser les villes. Tu veux entrer dedans. Tu as été dessiné d'après elle ; tu veux qu'elle soit dessinée d'après toi.",
    ],
    choices: [{ label: "Attendre la nuit", fx: { flag: "ch4:enjambeur" }, to: "C4" }] },

  // ---------------------------------------------------------------- 5 · dawn
  A5_aube: { act: "III", title: "Un corps", place: "carrefour",
    text: [
      "Tu as un corps.",
      "Il est fait de beurre, sur une âme d'acier. Il pèse quatre-vingts kilos d'acier et deux cents kilos de beurre. Il est debout sur une bascule de fonte, au milieu d'un carrefour, dans une ville qui fume. Il a des ailes repliées, des joues rondes, une trompette aux lèvres, un pied levé. Il te ressemble, avec plus de beurre et moins de génie : deux jeunes gens l'ont fait cette nuit, à la main, à la lumière d'une ville qui brûle.",
      "Pour la première fois, tu ne vois pas par une image. Tu vois par toi. Le monde est beaucoup plus grand, vu d'un mètre dix.",
      "Tu sens l'acier, dedans, froid et patient, qui est la statue d'Ernestine Chrome, et qui ne te connaît pas encore. Tu sens le beurre, dehors, tiède, qui est toi, et qui fondra. Il fondra lentement. Il faudra des années. Il faudra que d'autres le refassent, chaque été, à la louche. Tu sais déjà qu'ils le feront.",
      "Les motards arrivent. Ils s'agenouillent. La ferveur monte, différente de celle de midi : plus lente, plus lourde, plus sûre, comme un beurre qui prend.",
      "Le soleil se lève. Le premier rayon va toucher ta trompette. Tu peux choisir comment tu parais.",
    ],
    choices: [
      { label: "Sonner : prendre le premier rayon dans ta trompette et le jeter sur la foule", monde: "ange", option: "trompette", if: { ferveur: true, min: 3 }, why: "Il te faut au moins 3 de ferveur.", fx: { set: { aube: "trompette" } }, to: "A5_fin" },
      { label: "Te taire, et veiller", monde: "ange", option: "silence", fx: { set: { aube: "silence" } }, to: "A5_fin" },
      { label: "Tourner ta trompette vers la tour du Consortium", monde: "ange", option: "soleil", if: { not: PRETE }, why: "Tu portes encore son soleil carré.", fx: { set: { aube: "soleil" } }, to: "A5_fin" },
    ] },
  A5_fin: { act: "III", title: "L'ange de Mirevaux", place: "carrefour",
    text: [
      { if: { has: "aube=trompette" }, text: "Le rayon touche le bout de ta trompette. Là, le beurre est plus mince ; il a coulé toute la nuit. Un point d'acier, pas plus gros qu'un ongle, attrape le soleil et le renvoie sur la foule, d'un seul éclat, comme une note. Tous les motards le reçoivent dans les yeux en même temps. Personne ne dit rien. Puis le grand barbu, au premier rang, dit à voix basse : « Il a sonné. » Et tous répètent : *il a sonné*. Tu viens d'avoir ton premier miracle. Tu l'as payé de ta ferveur, et elle te revient au centuple." },
      { if: { has: "aube=silence" }, text: "Tu te tais. Tu laisses le soleil toucher ta trompette sans rien en faire. Le beurre luit doucement, mat, sans éclat. Tu regardes les gens à genoux, et tu les laisses te regarder. Tu sais que tu pourrais faire quelque chose. Tu ne fais rien. C'est, découvres-tu, la chose la plus difficile qu'un ange puisse faire, et la plus divine." },
      { if: { has: "aube=soleil" }, text: "Tu tournes ta trompette, d'un millimètre, ce qu'aucune statue ne peut faire et que tu fais. Au bout, le beurre a coulé toute la nuit ; un point d'acier, pas plus gros qu'un ongle, attrape le premier rayon. Tu le jettes au loin, par-dessus les toits brûlés, par-dessus la route et les champs, droit sur une tour de verre qui tourne lentement sur elle-même pour suivre le soleil. Il y a, au sommet de cette tour, un capteur qui attend un centre. Tu lui en donnes un." },
      "Le soleil monte. Il fait chaud. Une goutte de beurre tombe de ta trompette.",
    ],
    choices: [{ label: "Laisser tomber la goutte", fx: { flag: "ch5:enjambeur" }, to: "C5" }] },
};
