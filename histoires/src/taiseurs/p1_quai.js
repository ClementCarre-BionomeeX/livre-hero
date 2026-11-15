// Lot p1_quai of "Le Trésor des Taiseurs": the opening of the book. The morning after the night of the Lanterns on the
// quai des Lanternes in Salvèze: Odeline found dead, the neighbours, the Watch (Tibère Gaucelm), the hero's statement,
// the shop (ground floor, workshop, cellar), the bone ear-trumpet (PQ_cave), the quay crossroads (PQ_quai) and its
// side quests (lost things waiting for their owners, the scrivener's debt, the lanterns of the night, the lender).

var TIB = { with: "tibere", v: 10 };
var CORNET = { item: "cornet" };

module.exports = {
  passages: {
    // ================================================================== the morning (fixed opening)
    P_matin: { act: "P", title: "L'aube sur le canal", place: "quai",
      fx: { questSeen: "P_odeline" },
      text: [
        "L'aube monte sur le canal des Lanternes, grise, avec une odeur de suif froid et d'eau remuée. Des centaines de lanternes de papier dérivent encore au fil du courant, éteintes pour la plupart, et viennent buter contre les marches de pierre des escaliers d'eau. Sur le pont des Noyés, derrière toi, deux ivrognes chantent la même chanson à un couplet d'écart.",
        "Tu as les jambes lourdes, la bouche sèche du vin de la fête et de la fumée dans les cheveux. Tu as passé la nuit sur le pont, entre les feux et les barques, à regarder les gens poser leurs lanternes sur l'eau en disant tout bas un nom.",
        { if: { has: "poids:amour" }, text: "Tu as dansé deux fois avec la personne que tu aimes, et la seconde fois elle a ri d'une chose que tu avais dite. Tu emportes ce rire chez toi, avec précaution." },
        { if: { has: "poids:dette" }, text: "Sur le pont, tu as changé deux fois de côté pour éviter un visage. On te doit un délai ; tu dois quinze ducats. La fête a duré assez longtemps pour que tu l'oublies une heure." },
        { if: { has: "poids:rien" }, text: "Tu as dormi deux heures sur un banc, ta veste roulée sous la tête, et tu te réveilles reposé{e}, ce qui t'étonne chaque fois." },
        "La boutique est la troisième après le pont. Au-dessus des trois marches pend l'enseigne : une main de bois peinte qui tient une clé, et dessous, en lettres d'or écaillées, *Carrus — Choses perdues, choses retrouvées*. Les volets sont clos. La porte cède sous ta main. Odeline pousse le verrou chaque soir à onze heures, fête comprise, depuis quarante ans.",
        "La clochette tinte au-dessus de ta tête. Dans la boutique, l'air est plus froid que sur le quai. Au fond, derrière le comptoir, la porte basse de la cave est ouverte, et le froid monte de là.",
      ],
      choices: [
        { label: "Descendre à la cave", to: "P_odeline" },
        { label: "Appeler Odeline depuis le comptoir", fx: { flag: "pq:appele" }, to: "P_odeline" },
      ] },

    P_odeline: { act: "P", title: "Au pied de l'escalier", place: "quai",
      text: [
        { if: { has: "pq:appele" }, text: "Tu dis son nom. La boutique te le rend, et rien d'autre. Tu le dis plus fort. Alors tu fais le tour du comptoir et tu te penches sur l'escalier de la cave." },
        "Odeline est en bas des marches, couchée sur la terre battue, la tête contre le dernier degré et le bras gauche replié sous elle. Sa robe de laine grise est remontée sur un genou. Elle porte encore son tablier de travail, les poches pleines : tu vois dépasser le manche d'une brosse, un bout de ficelle, la petite loupe dont elle se sert pour lire les poinçons.",
        "Tu descends. Tu poses la main sur sa joue, et la joue a le froid de toute une nuit. Ses yeux sont entrouverts. Une mèche blanche s'est défaite sur sa tempe. Sa bouche est un peu tirée sur le côté, avec l'air agacé qu'elle prenait devant une serrure têtue.",
        "Quelque part dans la cave, l'eau du canal goutte à travers le mur, toujours au même rythme. Au-dessus de toi, la clochette de la porte achève de se balancer.",
      ],
      choices: [
        { label: "Lui fermer les yeux, et rester un moment près d'elle", to: "P_veille" },
        { label: "Remonter et appeler le quai", to: "P_appel" },
      ] },

    P_veille: { act: "P", title: "Un moment", place: "quai",
      fx: { ep: ["perso", 200] },
      text: [
        "Tu lui fermes les yeux avec le pouce, l'un puis l'autre. Les paupières restent closes au second essai. Tu t'assieds sur la dernière marche, à côté de sa tête, et tu remets la mèche blanche derrière son oreille, parce qu'elle détestait les cheveux dans la figure.",
        { if: { has: "passe:trouve" }, text: "Elle t'a trouvé{e} sous son étal, l'hiver des Glaces, roulé{e} dans un sac à farine. Elle racontait l'histoire aux clients en riant : « Le plus bel objet perdu de ma carrière, et le seul qu'on ne m'a jamais réclamé. »" },
        { if: { has: "passe:voleur" }, text: "Tu avais quatorze ans et la main dans son tiroir-caisse. Elle t'a tenu{e} par le col jusqu'à ce que tu cesses de te débattre, puis elle t'a demandé si tu savais crocheter une serrure à gorges. Tu as dit oui. Elle a dit : « Montre-moi. »" },
        { if: { has: "passe:gage" }, text: "Ton père t'a laissé{e} ici un matin de marché, avec un baluchon et une reconnaissance de dette. Odeline a rangé le papier dans le registre, entre une montre de cuivre et une paire de bottes, et elle t'a donné un balai. Le papier y est encore." },
        "Elle disait que l'on perd toujours une chose deux fois : le jour où elle tombe, et le jour où l'on cesse de la chercher. Tu restes assis{e} jusqu'à ce que l'eau du mur ait goutté cent fois. Tu {{miroir#pq_veille|ne penses à rien, sinon à elle|penses, une seconde, que personne au monde ne sait que tu étais ici à dix heures}}. Puis tu remontes.",
      ],
      choices: [{ label: "Remonter et appeler le quai", to: "P_appel" }] },

    P_appel: { act: "P", title: "Le quai se réveille", place: "quai",
      text: [
        "Tu sors sur les marches et tu appelles. Ta voix part sur l'eau, rebondit sur les façades d'en face, et les volets s'ouvrent l'un après l'autre.",
        "Clarmonde Pujol arrive la première, de la pension d'à côté, un châle sur sa chemise de nuit et un bonnet de travers. Elle a cinquante ans, des bras de lavandière et un trousseau de clés à la ceinture qu'elle n'enlève jamais. Derrière elle, Prosper Galabru, le brocanteur d'en face, en bras de chemise, une bougie à la main en plein jour. Maître Lagrue, l'écrivain public, descend de son échoppe avec son chapeau, qu'il ôte sur la dernière marche.",
        "En bas, sur l'escalier d'eau, le vieux Couzi lève la tête de sa barque. Il a sa gaffe à la main et, empilées derrière lui, trois douzaines de lanternes mouillées. Il amarre sa barque sans un mot et monte, lentement, une marche à la fois.",
        "« Titou ! crie Clarmonde par-dessus son épaule. Cours au poste du Guet. Dis qu'il y a une morte chez Carrus. Cours, je te dis ! » Un gamin en chemise file le long du quai, pieds nus.",
      ],
      choices: [{ label: "Les faire entrer", to: "P_voisins" }] },

    P_voisins: { act: "P", title: "Les voisins", place: "quai",
      text: [
        "Ils entrent dans la boutique en se serrant les uns contre les autres, et descendent voir à tour de rôle. Clarmonde descend la première et remonte les yeux rouges. Elle va droit au fourneau du fond, l'allume et met de l'eau à chauffer, parce qu'il faut bien faire quelque chose de ses mains.",
        "Maître Lagrue regarde depuis le haut des marches, son chapeau contre la poitrine. C'est un homme maigre aux doigts tachés d'encre, qui écrit pour les autres les lettres d'amour, les suppliques et les testaments, à deux liards la page. « Quarante ans, dit-il. {{oreille|Quarante ans qu'elle monte et descend cet escalier|Et je lui dois encore deux ducats, que Dieu me pardonne}}. » Il ne s'adresse à personne en particulier.",
        "Prosper Galabru, lui, reste près des étagères. Il regarde les objets, un par un, avec l'œil du métier : le prix de chaque chose passe sur son visage. Il s'en aperçoit, rougit, et pose sa bougie sur le comptoir.",
        "Le vieux Couzi descend jusqu'en bas, s'agenouille sur la terre battue avec un craquement de genoux, et dit à voix basse la prière des Noyés, celle qu'on dit sur les lanternes. Il la dit en entier. Personne ne l'interrompt.",
        { if: { has: "metier:parole" }, text: "Tu les connais tous depuis des années. Tu sais qui prête à qui sur ce quai, qui a vendu quoi à Odeline, qui lui doit encore. Ce matin, tu les regardes autrement, et tu ne sais pas pourquoi." },
      ],
      choices: [{ label: "Attendre le Guet", to: "P_commis" }] },

    P_commis: { act: "P", title: "Le commis du Guet", place: "quai",
      text: [
        "Le Guet arrive sous la forme d'un jeune homme essoufflé, avec une écritoire pendue au cou, une corne d'encre à la ceinture et un bonnet de laine aux armes de la République, la tour d'argent sur fond bleu. Il s'appelle Désiré Mauran ; il est commis au poste du quai depuis l'automne. Il a dix-neuf ans et l'air d'en avoir quinze.",
        "« Le sergent arrive, dit-il. {{oreille|Il finit son rapport de la nuit, il arrive|Il était prêt avant que le gamin finisse sa phrase, et il m'a dit de ne pas me presser}}. » Il ouvre son écritoire sur le comptoir, trempe sa plume, et note les noms de tous ceux qui sont là, en demandant à chacun de les épeler. Il écrit Galabru avec deux L, se reprend, gratte.",
        "Puis il se tourne vers toi. « C'est vous qui l'avez trouvée ? À quelle heure ? » Tu dis : à l'aube, en rentrant. Il écrit *à l'aube*. Il regarde la porte de la cave sans s'en approcher.",
      ],
      choices: [{ label: "Attendre le sergent", to: "P_tibere" }] },

    P_tibere: { act: "P", title: "Le sergent Gaucelm", place: "quai",
      fx: { met: "tibere" },
      text: [
        "Le sergent entre en baissant la tête sous le linteau. C'est un homme large, la cinquantaine, le crâne dégarni, une moustache grise tombante et une vieille balafre qui lui coupe la joue gauche de l'oreille au coin de la bouche. Son manteau du Guet a été bleu ; il a des reprises aux coudes. Il sent le vin de la veille et l'ail.",
        "« Tibère Gaucelm, sergent, dit-il, à la cantonade. Qu'on me laisse de la place. » Il prend la bougie de Prosper sur le comptoir et descend à la cave.",
        "Tu entends ses bottes sur les marches, puis plus rien. Tu comptes. Avant que tu sois arrivé{e} à trente, il remonte. Il pose la bougie, souffle dessus, et s'essuie les doigts à son manteau.",
        "« Elle a manqué une marche dans le noir, dit-il. Sa chandelle s'est éteinte en route, elle a mis le pied à côté. La nuque. Elle n'a pas souffert. » Il se tourne vers le commis. « Écris : accident. Chute dans l'escalier de la cave, la nuit des Lanternes. Pas de trace de violence. »",
        "Désiré Mauran écrit. Sa plume crisse sur le papier.",
      ],
      choices: [
        { label: "« Elle connaissait cet escalier mieux que sa propre main. »", to: "P_objection" },
        { label: "« Vous êtes resté en bas le temps de dire trois Ave. »", to: "P_objection2" },
        { label: "Te taire, et regarder le sergent", to: "P_constat" },
      ] },

    P_objection: { act: "P", title: "L'escalier", place: "quai",
      text: [
        "Tibère te regarde pour la première fois. Il a des yeux gris pâle, injectés de rouge, très fatigués. « Je n'en doute pas, dit-il. Et à soixante-huit ans, dans le froid, avec une chandelle de suif qui coule, on rate une marche qu'on connaît par cœur. J'ai vu des débardeurs se tuer sur la passerelle qu'ils prenaient tous les jours depuis vingt ans. »",
        "Il tire de sa poche un dé d'os, le fait rouler entre ses doigts, le remet. « Vous étiez son apprenti{e}. Je comprends. On veut toujours que ce soit la faute de quelqu'un. Souvent, c'est la faute d'une marche. »",
        "Clarmonde, près du fourneau, hoche la tête, les lèvres serrées. Maître Lagrue regarde ses mains.",
      ],
      choices: [{ label: "Laisser le sergent finir", to: "P_constat" }] },

    P_objection2: { act: "P", title: "Trois Ave", place: "quai",
      text: [
        "Prosper Galabru tousse dans son poing. Le commis lève les yeux de son papier. Tibère te dévisage, sans colère, avec une sorte d'intérêt las.",
        "« Trois Ave, dit-il. J'en ai vu trois cents, des morts dans des escaliers. Vingt-six ans de Guet. La tête en bas, le cou de travers, la chandelle à deux pas : c'est une chute. Si vous voulez que je reste en bas une heure à lui tenir la main, je peux. Elle sera aussi morte, et le rapport dira la même chose. »",
        "Il se gratte la balafre. « Vous avez une raison de penser autre chose ? Quelqu'un qui lui voulait du mal ? Dites-le maintenant, devant le commis. »",
        "Tu ouvres la bouche. Tu n'as rien de précis à dire : un froid dans la boutique, une porte sans verrou, une marche qu'elle connaissait. Tu la refermes.",
      ],
      choices: [{ label: "Laisser le sergent finir", to: "P_constat" }] },

    P_constat: { act: "P", title: "Le constat", place: "quai",
      text: [
        "Le sergent dicte le reste au commis, sans hâte, les pouces dans son ceinturon. *Odeline Carrus, veuve, chercheuse de choses perdues, soixante-huit ans, trouvée morte au pied de l'escalier de sa cave le matin suivant la nuit des Lanternes, par son apprenti{e}.* Désiré demande ton nom ; tu le donnes ; il l'écrit : {hero}.",
        "« Les Noyés viendront la prendre pour la veillée, dit Tibère. La confrérie fait ça pour les gens du quai. » Il regarde autour de lui les étagères, les tiroirs étiquetés, les objets en attente sous leur ficelle. « Ça fait un sacré fourbi, tout ça. Vous allez avoir des visites, {{oreille|je vous préviens, je connais le quai|j'en connais au moins une, et c'est moi qui l'ai prévenue}}. Quand quelqu'un meurt sur ce quai, les créanciers sentent ça avant le curé. »",
        "Le commis souffle sur son encre. « Il me faut votre déposition, dit-il, sans te regarder. Pour le registre. Ce que vous avez fait hier, quand vous l'avez vue pour la dernière fois. Je peux la prendre ici. Ou vous passez au poste, dans la journée. »",
      ],
      choices: [
        { label: "Faire ta déposition tout de suite", to: "P_deposition" },
        { label: "Dire au commis que tu passeras au poste dans la journée", to: "P_porteurs" },
      ] },

    P_deposition: { act: "P", title: "La déposition", place: "quai",
      fx: { flag: "guet:mensonge", ep: ["perso", 200] },
      text: [
        "Désiré trempe sa plume. « Quand l'avez-vous vue en vie pour la dernière fois ? »",
        "Tu dis que tu ne l'as pas vue depuis le matin. Tu dis que tu es parti{e} vers midi aider à monter les feux sur le pont des Noyés, et que tu as passé la nuit là-bas. Désiré l'écrit. Il te fait relire, et tu signes.",
        "Tibère, appuyé au comptoir, regarde le canal par la fenêtre pendant que tu parles. « Bon, dit-il. Voilà qui est fait. »",
      ],
      choices: [{ label: "Laisser le Guet repartir", to: "P_porteurs" }] },

    P_porteurs: { act: "P", title: "Les Noyés", place: "quai",
      fx: { ep: ["perso", 200] },
      text: [
        "Les porteurs de la confrérie des Noyés arrivent vers la troisième heure du jour : quatre hommes en tabliers noirs, avec une civière de toile et une couverture brodée d'une lanterne blanche. Ils descendent, remontent, et ils ont des gestes d'une douceur étonnante pour des mains si larges. Odeline passe devant toi sous la couverture, les pieds en avant, et sort de sa boutique pour la dernière fois.",
        "On la veillera à la chapelle des Noyés, au bout du quai, jusqu'à ce que le prêtre fixe le jour. Clarmonde suit la civière jusqu'à la porte, en serrant son châle. Les autres se dispersent l'un après l'autre, en te touchant le bras au passage.",
        { if: { has: "guet:mensonge" }, text: "Le commis range son écritoire. Le sergent, sur le seuil, se retourne. « Je reste sur le quai jusqu'à midi, pour finir le rapport, dit-il. Si quelque chose vous revient, je suis sur la borne du pont. »", else: "Le commis range son écritoire. « Au poste, dans la journée, dit-il. N'oubliez pas, sinon c'est moi qui me fais tirer l'oreille. » Le sergent, sur le seuil, se retourne. « Je reste sur le quai jusqu'à midi, pour finir le rapport. Si quelque chose vous revient, je suis sur la borne du pont. »" },
        "Et puis la boutique est vide, et c'est la tienne.",
      ],
      choices: [{ label: "Le quai des Lanternes, où la journée commence sans elle", big: true, to: "PQ_quai" }] },

    // ================================================================== the quay (hub)
    PQ_quai: { act: "P", title: "Le quai des Lanternes", place: "quai", hub: true, backName: "le quai des Lanternes",
      text: [
        { first: true, text: "Le quai des Lanternes s'étire le long du canal, du pont des Noyés jusqu'au poste du Guet : une rangée de maisons étroites à pans de bois, penchées les unes contre les autres, avec des boutiques au rez-de-chaussée et du linge aux fenêtres. Brocanteurs, chercheurs de choses perdues, un rempailleur, un écrivain public, une pension, une taverne au bout, le Lumignon. Devant chaque porte, un escalier de pierre descend jusqu'à l'eau." },
        { first: true, text: "Ce matin, le canal est couvert de lanternes mortes. Sur le quai, les gens vont et viennent comme chaque jour, mais ils baissent la voix en passant devant la boutique d'Odeline, et certains se signent. La main de bois de l'enseigne tourne un peu au vent, avec sa clé." },
        { again: true, when: "day", text: "Le quai des Lanternes, ses façades penchées, ses escaliers d'eau. Une marchande d'oublies crie sa marchandise sur le pont. Devant la boutique d'Odeline, quelqu'un a posé un brin de buis sur la première marche." },
        { again: true, when: "night", text: "Le quai, de nuit. Une lanterne à la porte du Lumignon, une autre au poste du Guet. Le canal clapote contre les marches. La boutique d'Odeline est noire, et l'enseigne grince." },
        { again: true, after: "guet:mensonge", once: true, text: "Tu repenses à la soirée d'hier, comme on repasse un chemin pour retrouver une chose tombée. Tu {{miroir#pq_soiree|as quitté la boutique vers midi, et tu ne l'as plus revue|as poussé la porte de la boutique vers dix heures, tu as crié contre elle, tu lui as lancé qu'elle mourrait seule avec ses secrets, et tu as claqué la porte derrière toi}}. Le reste de la nuit, tu l'as passé sur le pont, au milieu des feux. Tu t'en souviens très bien." },
        { after: "cornet:trouve", text: "Le cornet d'os pèse dans ta poche. Les voix du quai n'ont plus tout à fait le même son." },
        { with: "tibere", text: "Tibère marche un pas derrière toi, la main sur sa masse, et salue les gens qu'il connaît d'un hochement de menton. Il en connaît beaucoup." },
        { with: "tibere", after: "cornet:trouve", once: true, text: "Il tapote le rapport glissé dans sa ceinture. « J'écris {{oreille#pq_accident|ce que j'ai vu, et j'ai vu une chute|ce qu'on m'a payé pour écrire : accident, et vite}}. Le capitaine signe, le greffe range, et l'affaire est close. »" },
        { after: "odeline:meurtre", text: "Tu regardes chaque visage du quai et tu te demandes lequel est passé devant cette porte, à minuit." },
      ],
      choices: [
        { label: "La boutique d'Odeline", to: "PQ_boutique" },
        { label: "La pension de Clarmonde Pujol, la porte d'à côté", to: "PQ_clarmonde" },
        { label: "L'échoppe de Maître Lagrue, l'écrivain public", to: "PQ_lagrue" },
        { label: "L'étal de Prosper Galabru, le brocanteur d'en face", to: "PQ_galabru" },
        { label: "L'escalier d'eau, où le vieux Couzi trie ses lanternes", to: "PQ_couzi" },
        { label: "Tibère Gaucelm, assis sur la borne du pont", hide: { any: [{ has: "pq:tibere_pris" }, { has: "tibere:refuse" }] }, to: "PQ_tibere" },
        { label: "Le poste du Guet, au bout du quai, pour ta déposition", hide: { has: "guet:mensonge" }, to: "PQ_guet" },
        { label: "Le Lumignon, la taverne du bout du quai", to: "PQ_lumignon" },
        { label: "La chapelle des Noyés, où l'on veille Odeline", to: "PQ_chapelle" },
        { label: "L'homme au manteau fourré qui attend devant ta porte", hide: { seen: "PQ_escarbol" }, to: "PQ_escarbol" },
        { label: "Écouter le quai, le cornet d'os à l'oreille", hide: { any: [{ not: CORNET }, { seen: "PQ_ecoute" }] }, to: "PQ_ecoute" },
        { label: "Prendre Tibère à part, sous l'arche du pont", hide: { any: [{ not: { present: "tibere" } }, { not: { voile: "pq_accident" } }, { seen: "PQ_tibere_paye" }] }, to: "PQ_tibere_paye" },
        { label: "Mettre bout à bout ce que tu as vu et entendu", hide: { any: [{ has: "odeline:meurtre" }, { not: { clues: "O", min: 3 } }] }, to: "PQ_doute" },
        { label: "Partir en ville, où l'on parle déjà de la mort d'Odeline", big: true,
          hide: { not: { any: [{ has: "pq:tibere_pris" }, { has: "tibere:refuse" }] } },
          if: { all: [{ has: "cornet:trouve" }, { has: "guet:mensonge" }] }, why: "Il te reste à fouiller la boutique et à faire ta déposition au Guet.", to: "PF_ville" },
        { label: "Prendre le chemin de la ville, où l'on parle déjà de la mort d'Odeline", big: true,
          hide: { any: [{ has: "pq:tibere_pris" }, { has: "tibere:refuse" }] },
          if: { all: [{ has: "cornet:trouve" }, { has: "guet:mensonge" }] }, why: "Il te reste à fouiller la boutique et à faire ta déposition au Guet.", to: "PQ_tibere_seuil" },
      ] },

    // ================================================================== the shop: ground floor
    PQ_boutique: { act: "P", title: "La boutique d'Odeline", place: "quai", hub: true, backName: "la boutique d'Odeline",
      text: [
        { first: true, text: "La boutique est une longue pièce basse, plus profonde que large, qui sent la cire, la poussière et l'eau du canal. Des étagères montent jusqu'aux solives, chargées d'objets ficelés, chacun avec son étiquette de carton de l'écriture serrée d'Odeline : un parapluie, une selle d'enfant, un luth sans cordes, des clés par dizaines sur des anneaux de fil de fer. Au milieu, le comptoir de chêne, poli par quarante ans de coudes. Près de la porte, la petite vitrine aux coussins de velours, pour les choses fines." },
        { first: true, text: "Au fond, un escalier de bois monte à l'atelier, où elle dormait aussi, dans une alcôve. À côté, la porte basse de la cave. Tu l'as laissée ouverte. Tu vas la fermer, puis tu la rouvres, parce qu'il faudra bien redescendre." },
        { again: true, when: "day", text: "La boutique, ses étagères, ses étiquettes. Le jour entre en biais par les volets entrouverts et fait briller les clés sur leurs anneaux." },
        { again: true, when: "night", text: "La boutique, de nuit, à la lueur d'une chandelle. Les objets ficelés font des ombres sur les murs. Tu entends le canal sous le plancher." },
        { with: "tibere", text: "Tibère fait le tour des étagères, les mains derrière le dos, en lisant les étiquettes à mi-voix. « Une selle d'enfant, dit-il. Qui perd une selle d'enfant ? »" },
        { after: "cornet:trouve", text: "La porte de la cave est fermée, maintenant. Tu as remis le crochet." },
      ],
      choices: [
        { label: "Le comptoir et le registre d'Odeline", to: "PQ_comptoir" },
        { label: "Les étagères des objets en attente", to: "PQ_etageres" },
        { label: "La vitrine aux coussins de velours", to: "PQ_vitrine" },
        { label: "Monter à l'atelier", to: "PQ_atelier" },
        { label: "L'escalier de la cave", to: "PQ_escalier" },
        { label: "La porte d'entrée et sa clochette", hide: { seen: "PQ_porte" }, to: "PQ_porte" },
        { label: "Sortir sur le quai", back: "PQ_quai" },
      ] },

    PQ_comptoir: { act: "P", title: "Le registre", place: "quai",
      fx: { questSeen: "PQ_objets" },
      text: [
        "Le registre est sous le comptoir, à sa place, avec son ruban de soie verte pour marquer la page. Un gros livre relié de toile, gondolé par l'humidité, que tu as vu Odeline ouvrir chaque matin de ta vie. Chaque ligne, un objet : la date, l'endroit où on l'a trouvé, qui l'a trouvé, ce qu'on a payé au trouveur, et dans la dernière colonne, quand il est revenu à son propriétaire, le nom et la récompense.",
        "Les trois dernières lignes de la veille portent, dans la marge, une croix à l'encre rouge et deux mots : *{{loupe#pq_prevenir|à prévenir|à prévenir, et à écouter : celle de la Banque a peur, le débardeur a honte, la batelière a menti}}*. Odeline avait retrouvé les propriétaires. Elle n'a pas eu le temps de les faire venir.",
        "*Un hochet d'argent à grelots, trouvé dans la vase du canal des Tanneurs. — Quiterie Castagné, batelière, au port aux Sauniers, barque* La Poule d'eau*. Passe sous le pont des Noyés chaque matin.*",
        "*Une bague-cachet d'argent, un héron gravé. — Sabine Molinier, commise aux écritures, Banque Marrel. Boit son vin au Lumignon.*",
        "*Un couteau de débardeur, manche de corne, initiales G. R. — Gratien, débardeur, quai du Sel. Au Lumignon avant l'embauche.*",
        "Dans le tiroir-caisse, sous les trois objets enveloppés dans du papier, il reste vingt-cinq liards et un bouton de nacre.",
      ],
      choices: [
        { label: "Prendre les trois objets, pour les rendre, et l'argent de la caisse", hide: { has: "pq:objets_pris" }, fx: { flag: "pq:objets_pris", gold: 25, item: ["pq_hochet", "pq_cachet", "pq_couteau"] }, to: "PQ_objets" },
        { label: "Lire les dernières pages du registre, celles des dettes", to: "PQ_dettes" },
        { label: "Inscrire au registre les trois objets rendus", hide: { any: [{ quest: "PQ_objets" }, { not: { all: [{ has: "pq:rendu_hochet" }, { has: "pq:rendu_cachet" }, { has: "pq:rendu_couteau" }] } }] }, to: "PQ_objets_fin" },
        { label: "Fermer le registre", back: "PQ_boutique" },
      ] },

    PQ_objets: { act: "P", title: "Trois paquets", place: "quai",
      text: [
        "Tu prends les trois paquets et les vingt-cinq liards. Le hochet est petit, lourd pour sa taille, avec trois grelots qui tintent au moindre geste ; quelqu'un l'a fait graver d'une date, la Saint-Michel de l'an dernier. La bague-cachet est une belle pièce d'argent, un peu usée, au héron gravé à l'envers pour marquer la cire. Le couteau est un outil de travail, la lame cent fois aiguisée, le manche de corne fendu et recollé à la poix.",
        "C'était la règle d'Odeline : un objet retrouvé appartient à son propriétaire pendant un an et un jour ; ensuite seulement, il appartient à la boutique. La récompense, on la demande poliment, et on prend ce qu'on vous donne.",
        { if: { has: "metier:parole" }, text: "Tu sais déjà comment tu vas t'y prendre avec chacun. La batelière, on lui parle debout sur le quai, à hauteur d'yeux. La commise de banque, on lui parle bas. Le débardeur, on le laisse parler le premier." },
        "Elle disait aussi : « Celui qui retrouve une chose qu'il croyait perdue dit toujours une vérité, dans la minute qui suit. Écoute bien cette minute-là. »",
      ],
      choices: [{ back: "PQ_comptoir" }] },

    PQ_dettes: { act: "P", title: "Les reconnaissances", place: "quai",
      text: [
        "Les dernières pages du registre servent à autre chose. Odeline y collait les reconnaissances de dettes, les siennes et celles des autres, avec de la colle de farine, une par page.",
        "*Je soussigné Bénézet Lagrue, écrivain public, reconnais devoir à dame Odeline Carrus la somme de deux ducats, prêtés à la Toussaint, à rendre à Pâques.* La signature est superbe, avec des boucles. Sous la date, Odeline a ajouté au crayon : *rien reçu*.",
        "*Prosper Galabru doit douze liards pour le cadre doré.* Un simple bout de papier, sans signature, avec un *payé* barré.",
        "Et puis une feuille plus récente, d'un papier épais et cher, pliée en quatre et glissée là sans colle : *Je soussignée Odeline Carrus reconnais devoir à Maître Félicien Escarbol, prêteur, rue des Chaudronniers, la somme de trois ducats, à rendre à la Saint-Jean, avec intérêt au denier dix.* Daté de deux mois. Tu ignorais qu'elle empruntait.",
        { if: { has: "passe:gage" }, text: "Plus loin, collée depuis si longtemps que le papier a pris la couleur de la page, la reconnaissance de ton père. Tu connais son écriture par cette seule feuille. Odeline a écrit en travers, d'une encre plus récente : *éteinte*. Tu découvres le mot ce matin." },
        { if: { has: "metier:lire" }, text: "Tu relis la feuille d'Escarbol deux fois. Elle est en règle, avec une faiblesse : aucun témoin n'a signé. Un billet sans témoin vaut ce que vaut la parole de celui qui le présente." },
      ],
      choices: [
        { label: "Garder les reconnaissances de dettes sur toi", hide: { has: "pq:dettes_prises" }, fx: { flag: "pq:dettes_prises", item: "pq_reconnaissances" }, back: "PQ_comptoir" },
        { label: "Refermer le registre", back: "PQ_comptoir" },
      ] },

    PQ_etageres: { act: "P", title: "Les objets en attente", place: "quai",
      text: [
        "Les étagères de droite portent les objets de l'année, ficelés, étiquetés, en attente de leur propriétaire. Celles de gauche, les objets qui ont passé l'an et le jour : ceux-là sont à vendre, et le prix est noté au dos de l'étiquette, au crayon, pour qu'on puisse le changer.",
        "Tu passes la main sur les cartons. Un luth sans cordes, quatre liards. Une botte de cavalier, pied gauche, un liard. Un portrait de chien, huit liards. Un psautier relié de veau, deux ducats, qu'Odeline a toujours refusé de baisser. Tu pourrais les réciter les yeux fermés.",
        "Tout au bout, dans une boîte à épingles ouverte, un camée ovale enveloppé de feutre, avec une étiquette où elle a écrit : *camée {{pie#pq_camee|de coquillage, monture dorée, trois liards|de sardoine à deux couches, monture d'or rouge, une reine de profil : ne pas vendre au poids}}*. Tu ne te rappelles pas l'avoir vu en vitrine.",
        { if: { has: "metier:mains" }, text: "Sous tes doigts, la monture est plus lourde que du laiton, et plus chaude. Tu retournes le camée : un poinçon minuscule, une couronne sur une vague. Tu vois ce poinçon pour la première fois." },
      ],
      choices: [
        { label: "Prendre le camée : les objets de plus d'un an sont à la boutique, et la boutique est à toi", hide: { has: "tresor:pq_camee" }, fx: { item: "pq_tr_camee", clock: { tresors: 1 }, flag: "tresor:pq_camee", ep: ["perso", 150] }, back: "PQ_boutique" },
        { label: "Laisser les étagères comme elle les a laissées", back: "PQ_boutique" },
      ] },

    PQ_vitrine: { act: "P", title: "La vitrine", place: "quai",
      text: [
        "La vitrine est une caisse de chêne vitrée sur le dessus, posée près de la porte, avec six coussins de velours rouge passé. Odeline y mettait les petites choses de prix : un sablier de voyage monté sur ivoire, une paire de boucles d'oreilles de grenat, {{pie#pq_etui|un étui à aiguilles d'écaille blonde|un étui de corne teinte à double fond, où dort un papier plié en huit}}, un dé à coudre d'argent.",
        "Le sixième coussin est vide. Le velours garde la marque d'un objet rond, de la taille d'un écu, avec une petite traînée à côté, celle d'une chaînette ou d'un manche. L'étiquette est restée, de la main d'Odeline : *{{loupe#pq_oeil|Monocle de quartz fumé, anneau de corne. Non à vendre|L'œil de pie de ma mère. À garder du Beffroi et des Gouttières}}.*",
        "Le couvercle de la vitrine ferme par un petit loquet de cuivre. Le loquet est mis. Le bois est intact, sans marque de levier.",
        { if: { has: "metier:mains" }, text: "Tu soulèves le couvercle, tu le reposes. Le loquet joue trop facilement : un fil de fer passé dans la fente le soulève. Sur le cuivre, une rayure fraîche, brillante." },
      ],
      choices: [{ back: "PQ_boutique" }] },

    // ================================================================== the shop: the workshop upstairs
    PQ_atelier: { act: "P", title: "L'atelier", place: "quai", backName: "l'atelier d'Odeline",
      text: [
        { first: true, text: "L'atelier occupe tout l'étage, sous le toit. Un grand établi devant la fenêtre, pour la lumière du nord ; des outils pendus au mur dans l'ordre exact de leur taille ; une armoire à quarante tiroirs étiquetés, *vis*, *clous de tapissier*, *clés sans serrure*, *serrures sans clé*. Au fond, derrière un rideau de serge, l'alcôve où Odeline dormait." },
        { first: true, text: "Sous le toit, la lucarne qui donne sur les gouttières est fermée, mais son crochet pend dans le vide au lieu d'être mis dans l'œillet. Odeline le mettait chaque soir, à cause des chats." },
        { again: true, text: "L'atelier sous le toit, l'établi, l'armoire aux quarante tiroirs, le rideau de l'alcôve." },
        "Tu {{miroir#pq_estime|regardes l'atelier comme tu l'as toujours regardé|regardes l'atelier en estimant malgré toi ce qu'il vaut, et combien on t'en donnerait}}.",
        { with: "tibere", text: "Tibère reste en haut de l'escalier, la tête courbée sous les poutres. « Je n'ai jamais aimé les greniers, dit-il. On y range ce qu'on ne veut plus voir. »" },
      ],
      choices: [
        { label: "Les quarante tiroirs de l'armoire", to: "PQ_tiroirs" },
        { label: "L'alcôve, derrière le rideau", to: "PQ_alcove" },
        { label: "Redescendre à la boutique", back: "PQ_boutique" },
      ] },

    PQ_tiroirs: { act: "P", title: "Les quarante tiroirs", place: "quai",
      fx: { clue: "pq_c_fouille", ep: ["perso", 150] },
      text: [
        "Tu ouvres le premier tiroir par habitude, pour y prendre un clou, et tu t'arrêtes. L'atelier {{echo#pq_tiroirs_echo|est silencieux sous le toit, avec le canal qui clapote en bas|garde un bruit de tiroirs tirés un à un, quarante fois, et une respiration d'homme, lente, qui ne s'impatiente jamais}}.",
        "Chaque tiroir a son étiquette de carton à l'intérieur, sur le dessus du contenu, pour qu'on sache d'un coup d'œil ce qu'il y a dedans. Odeline les tournait toujours vers l'avant, lisibles depuis l'établi. Ce matin, dans les quarante tiroirs, toutes les étiquettes sont tournées vers le fond. Les vis sont avec les vis, les clés avec les clés. Tout est là, rangé.",
        { if: { has: "metier:mains" }, text: "Tu tires un tiroir à fond. Sur le bois du fond, des traces de doigts dans la poussière, larges, qui ont tâté les coins à la recherche d'un double fond." },
      ],
      choices: [{ back: "PQ_atelier" }] },

    PQ_alcove: { act: "P", title: "L'alcôve", place: "quai",
      text: [
        "Le lit est fait, la couverture tirée au carré. Odeline ne s'est pas couchée. Sur le coffre qui lui sert de table de nuit, il y a un bréviaire qu'elle n'ouvrait jamais, un bonnet de nuit plié, et une petite fiole de verre brun bouchée à la cire, avec l'étiquette du droguiste de la rue aux Herbes : *Sirop de pavot. Dix gouttes le soir, vingt si la douleur.* La fiole est presque vide. Elle date de la Chandeleur.",
        "Tu ne savais pas qu'elle avait mal. Tu {{miroir#pq_toux|ne l'as jamais entendue se plaindre|l'entendais tousser la nuit depuis l'automne, à travers la cloison, et tu tirais ta couverture sur ta tête pour dormir}}.",
        "Au-dessus du lit, un ouvrage de broderie encadré, jauni, de ceux que les filles des marais font à dix ans pour apprendre leurs points : un héron, un roseau, et une ligne de lettres que tu as toujours prises pour de simples motifs : *{{loupe#pq_broderie|O. V., dix ans, aux Joncs|Odeline Vasse a juré de se taire. Le héron garde ce que le roseau cache}}*.",
      ],
      choices: [
        { label: "Te rappeler ce qu'elle disait des cachettes", hide: { has: "pq:conseil" }, to: "PQ_souvenir" },
        { label: "Prendre la fiole de pavot", hide: { has: "pq:fiole" }, fx: { flag: "pq:fiole", item: "pq_fiole" }, back: "PQ_atelier" },
        { label: "Refermer le rideau", back: "PQ_atelier" },
      ] },

    PQ_souvenir: { act: "P", title: "Une leçon", place: "quai",
      fx: { flag: "pq:conseil", ep: ["perso", 150] },
      text: [
        "Tu avais douze ou treize ans. Un client avait laissé une bourse sur le comptoir, et Odeline t'avait demandé où tu la cacherais, toi, si tu voulais la garder. Tu avais dit : sous une latte du plancher. Elle avait ri.",
        "« Tout le monde regarde sous les lattes. Les voleurs, le Guet, les héritiers. » Elle avait pris la bourse et l'avait jetée dans la caisse aux clous rouillés, celle qui traînait sur l'établi de la cave, au milieu des pointes tordues et des pentures. « Personne ne vole des clous rouillés. Le précieux, on le range avec ce qui ne vaut rien. Et on le range bas. »",
        "Elle avait vérifié trois jours après. La bourse était toujours là, sous les clous.",
      ],
      choices: [{ back: "PQ_alcove" }] },

    // ================================================================== the cellar
    PQ_escalier: { act: "P", title: "L'escalier de la cave", place: "quai", backName: "l'escalier de la cave",
      text: [
        { first: true, text: "L'escalier de la cave a douze marches de chêne, raides, usées au milieu en forme de cuvette. Une rampe de bois brut court le long du mur de gauche ; de l'autre côté, le vide. Odeline descendait de profil, la main sur la rampe, un bougeoir dans l'autre main. Tu l'as vue faire dix mille fois." },
        "Les marches {{echo#pq_escalier_echo|craquent sous ton poids, comme elles ont toujours craqué|gardent un bruit de cuivre contre un os, un souffle d'homme coupé net, puis une voix d'homme qui dit tout bas, en haut : « Non. Non. Odeline. »}}.",
        { again: true, text: "Les douze marches de chêne, la rampe brute, le noir en bas." },
        { with: "tibere", text: "Tibère regarde l'escalier depuis le haut, sans descendre, avec une moue de connaisseur. « Un escalier de cave, dit-il. J'en ai fait monter, des gens, dans ces escaliers-là. Et descendre. »" },
      ],
      choices: [
        { label: "Examiner les marches, une à une", hide: { seen: "PQ_marche" }, to: "PQ_marche" },
        { label: "Suivre la rampe de la main", hide: { seen: "PQ_rampe" }, to: "PQ_rampe" },
        { label: "Descendre à la cave", to: "PQ_cave_bas" },
        { label: "Remonter dans la boutique", back: "PQ_boutique" },
      ] },

    PQ_marche: { act: "P", title: "La troisième marche", place: "quai",
      fx: { clue: "pq_c_marche", ep: ["perso", 150] },
      text: [
        "Tu prends la chandelle et tu descends à genoux, une marche après l'autre, le nez sur le bois, comme elle t'a appris à chercher une bague dans un parquet.",
        "Sur la troisième marche en partant du haut, contre le bord, une goutte de sang séché, ronde et noire, de la taille d'un liard. Tu la grattes de l'ongle ; elle s'écaille. Plus bas, les marches sont propres. Le sang d'Odeline est en bas, sur la terre battue, sous le dernier degré.",
      ],
      choices: [{ back: "PQ_escalier" }] },

    PQ_rampe: { act: "P", title: "La rampe", place: "quai",
      fx: { clue: "pq_c_bure", ep: ["perso", 150] },
      text: [
        "Tu fais glisser ta paume le long de la rampe, de haut en bas, lentement. Le bois est poli par les mains là où l'on s'y tient, rugueux ailleurs.",
        "À mi-hauteur, une écharde relevée retient un fil de laine brune, épais et rêche, long comme un doigt : de la bure.",
      ],
      choices: [{ back: "PQ_escalier" }] },

    PQ_cave_bas: { act: "P", title: "La cave", place: "quai", backName: "la cave",
      text: [
        { first: true, text: "La cave est longue et basse, voûtée de briques. Le mur du fond est celui du canal ; il suinte, et une brique plus sombre que les autres pleure un filet d'eau dans une rigole. Le long du mur de droite, des tonneaux d'objets pas encore lavés : de la vase sèche, des clous, des boucles de ceinture, tout ce que les pêcheurs et les gamins rapportent du canal. Au milieu, l'établi de lavage d'Odeline, avec ses bassines, ses brosses, ses fioles d'acide et de vinaigre, et la vieille caisse aux clous rouillés." },
        { first: true, text: "Au pied de l'escalier, la terre battue est plus sombre sur une largeur de main. Tu poses le pied à côté." },
        "Quelque part, l'eau du canal {{echo#pq_cave_echo|goutte à travers le mur, toujours au même rythme|répète une voix de femme, furieuse et cassée : « Tu ne l'auras pas. Je l'ai rangée là où tu ne chercheras jamais. »}}.",
        { again: true, text: "La cave, ses voûtes de briques, le mur qui pleure. L'établi de lavage, ses bassines." },
        { with: "tibere", text: "Tibère est descendu derrière toi. Il se tient près des tonneaux, les pouces dans le ceinturon, et il regarde partout sauf la tache au pied de l'escalier." },
        { after: "cornet:trouve", text: "La caisse aux clous est ouverte sur l'établi, son double fond posé à côté." },
      ],
      choices: [
        { label: "Le bougeoir de cuivre, sur l'établi", hide: { seen: "PQ_bougeoir" }, to: "PQ_bougeoir" },
        { label: "Fouiller l'établi de lavage, outil par outil", hide: { any: [{ has: "cornet:trouve" }, { seen: "PQ_cave_rate" }] },
          test: { dom: "discretion", diff: -10, label: "Trouver ce qu'Odeline a caché", help: [{ if: { has: "metier:mains" }, v: 20 }, { if: { item: "crochets" }, v: 5 }, TIB] },
          win: { to: "PQ_cave" }, lose: { to: "PQ_cave_rate" } },
        { label: "Vider la caisse aux clous rouillés, jusqu'au fond", hide: { any: [{ has: "cornet:trouve" }, { not: { has: "pq:conseil" } }] }, to: "PQ_cave_clous" },
        { label: "Laisse-moi faire, dit Tibère, qui a fouillé cent caves de receleurs", who: "tibere", hide: { has: "cornet:trouve" }, to: "PQ_tibere_cave" },
        { label: "Faire descendre Prosper Galabru, qui a fabriqué la caisse", hide: { any: [{ has: "cornet:trouve" }, { not: { has: "pq:galabru_caisse" } }] }, to: "PQ_galabru_cave" },
        { label: "Démonter l'établi et la caisse, planche par planche", hide: { any: [{ has: "cornet:trouve" }, { not: { seen: "PQ_cave_rate" } }] }, to: "PQ_demonter" },
        { label: "La brique qui pleure, dans le mur du canal", hide: { any: [{ has: "tresor:pq_sou" }, { all: [{ not: { voile: "pq_mur" } }, { not: { has: "metier:mains" } }] }] }, to: "PQ_brique" },
        { label: "Remonter l'escalier", back: "PQ_escalier" },
      ] },

    PQ_bougeoir: { act: "P", title: "Le bougeoir", place: "quai",
      fx: { clue: "pq_c_bougeoir", ep: ["perso", 150] },
      text: [
        "C'est le bougeoir de la cave, celui qu'Odeline prend pour descendre : une coupelle de cuivre sur un pied rond, avec une poignée en anneau. Elle le laisse toujours garni d'une chandelle neuve, en haut des marches, sur le clou.",
        "Il est sur l'établi, au fond de la cave. Il n'a pas de chandelle. Le cuivre est propre, frotté jusqu'au rouge, sans une coulure de suif, et il est posé à l'envers, la coupelle contre le bois et le pied en l'air.",
      ],
      choices: [{ back: "PQ_cave_bas" }] },

    PQ_cave_rate: { act: "P", title: "Des outils", place: "quai",
      text: [
        "Tu vides l'établi. Les brosses, les bassines, les fioles, les chiffons raidis de vert-de-gris. Tu sondes le plateau, tu tapes sur les pieds, tu passes la main dessous. Tu renverses la caisse aux clous sur la terre battue et tu tries des pointes tordues jusqu'à t'en écorcher les doigts.",
        "Rien. Des outils, des clous, et l'odeur du vinaigre. Au-dessus, dans la boutique, quelqu'un a entendu le vacarme : la clochette tinte, une voix demande si tout va bien, puis s'en va.",
        "Tu restes assis{e} sur un tonneau, les mains sales. La caisse vide est à tes pieds. Elle te paraît plus lourde qu'elle ne devrait, pour une caisse vide, mais tu as les bras fatigués.",
      ],
      choices: [{ back: "PQ_cave_bas" }] },

    PQ_cave_clous: { act: "P", title: "La caisse aux clous", place: "quai",
      text: [
        "Le précieux, on le range avec ce qui ne vaut rien. Et on le range bas.",
        "Tu tires la caisse aux clous au bord de l'établi et tu la vides à pleines mains dans une bassine, jusqu'au fond. Le fond est en sapin, noirci par la rouille. Tu le mesures avec ton pouce, dedans, puis dehors. Il manque deux doigts. Tu appuies au coin, là où le bois est le plus usé. La planche bascule.",
      ],
      choices: [{ label: "Soulever le double fond", to: "PQ_cave" }] },

    PQ_demonter: { act: "P", title: "Planche par planche", place: "quai",
      fx: { ep: ["perso", 100] },
      text: [
        "Tu prends le pied-de-biche pendu au mur et tu t'y mets. Le plateau de l'établi, d'abord, que tu soulèves et retournes : rien dessous qu'une toile d'araignée. Puis la caisse aux clous, que tu poses entre tes genoux. Tu fais sauter une planche du côté, puis l'autre.",
        "Au troisième coup, le fond se fend, et il est double. Entre les deux planches, il y a une boîte plate de la taille d'un livre. Tu as brisé la caisse qu'Odeline avait fait faire. Elle t'aurait traité{e} de bûcheron. Tu l'entends presque.",
      ],
      choices: [{ label: "Sortir la boîte plate", to: "PQ_cave" }] },

    PQ_cave: { act: "P", title: "Le cornet d'os", place: "quai",
      fx: { item: ["cornet", "lettre_odeline"], flag: ["cornet:trouve", "odeline:lettre"], ep: ["seance", 800] },
      text: [
        "Sous le double fond, il y a un paquet plat enveloppé dans un mouchoir de lin. Le mouchoir est brodé, dans un coin, d'un V de fil blanc et d'un petit héron. Tu le défais.",
        "Dedans, un cornet. Il est long comme ta main, taillé dans un os poli par les doigts jusqu'à la couleur du miel, évasé d'un côté, étroit de l'autre, cerclé de deux bagues d'argent noirci. Sur le flanc court une ligne gravée, des signes fins et serrés que tu ne sais pas lire. Il est tiède. Il a passé la nuit dans une caisse, à la cave, et il est tiède.",
        "Sous le mouchoir, pliée en quatre et glissée dans la doublure de la boîte, une lettre. Ton nom n'est pas écrit dessus. Il y a seulement, de l'écriture d'Odeline, plus tremblée que d'habitude : *À toi, si je ne suis plus là pour te le dire.*",
        { with: "tibere", text: "Tibère se penche par-dessus ton épaule, voit le cornet, et se redresse. « Un cornet pour les sourds, dit-il. Elle devenait dure d'oreille ? » Il le dit d'un ton léger. Ses yeux restent sur l'os un moment de trop." },
      ],
      choices: [
        { label: "Lire la lettre", to: "PQ_lettre" },
        { label: "Porter le cornet à ton oreille", to: "PQ_premier_mot" },
      ] },

    PQ_lettre: { act: "P", title: "La lettre d'Odeline", place: "quai",
      text: [
        "Tu déplies la lettre près de la chandelle. Une seule feuille, écrite des deux côtés, à l'encre brune.",
        "*Je t'ai appris à trouver ce que les gens perdent. Je ne t'ai jamais appris à écouter ce qu'ils taisent.* Et plus bas : *Le cornet est à toi. Porte-le, et écoute.*",
        "Tu lis le reste deux fois. C'est court, et c'est bien elle : sèche, pressée, avec des mots qui s'arrêtent avant la fin de ce qu'ils voulaient dire. Elle signe d'un O. Elle savait qu'elle allait mourir. Elle parlait de sa mort comme d'une chose prévue, rangée, étiquetée, avec le reste.",
        "Tu replies la lettre dans ses plis et tu la glisses contre ta poitrine, sous ta chemise.",
      ],
      choices: [
        { label: "Porter le cornet à ton oreille", hide: { seen: "PQ_premier_mot" }, to: "PQ_premier_mot" },
        { label: "Remonter dans la boutique", hide: { not: { seen: "PQ_premier_mot" } }, back: "PQ_boutique" },
      ] },

    PQ_premier_mot: { act: "P", title: "Ce qu'on entend", place: "quai",
      fx: { ep: ["perso", 300] },
      text: [
        "Tu portes l'extrémité étroite du cornet à ton oreille, comme on le fait pour les sourds. D'abord, rien : le goutte-à-goutte du mur, ton propre souffle, agrandis. Puis, au-dessus de toi, la clochette tinte, et deux voix entrent dans la boutique. Clarmonde Pujol, et Prosper Galabru. Ils apportent une soupe, ils se demandent où tu es passé{e}, ils parlent bas.",
        "« Il faudra bien que quelqu'un s'occupe de la boutique, dit Clarmonde. {{oreille|Ça ne pourra jamais se tenir sans elle|Si la boutique ferme, je reprends le bail pour ma nièce, et la cave avec}}. »",
        "« Je donnerais {{oreille|n'importe quoi pour qu'elle soit encore là|trente ducats pour le stock, et l'homme de l'île en donnerait cent}}, dit Prosper. »",
        "Certains de leurs mots tremblent. Il n'y a pas d'autre façon de le dire : ils tremblent dans ton oreille, et quand tu y prêtes attention, ils s'ouvrent, et dessous il y a autre chose, dit de la même voix, plus bas. Tu ôtes le cornet. Les voix redeviennent des voix. Tu le remets. Les mots tremblent de nouveau.",
        "Tu restes un long moment en bas des marches, le cornet dans la main, à côté de la tache sombre sur la terre battue.",
      ],
      choices: [
        { label: "Lire la lettre", hide: { seen: "PQ_lettre" }, to: "PQ_lettre" },
        { label: "Remonter dans la boutique", back: "PQ_boutique" },
      ] },

    PQ_brique: { act: "P", title: "La brique qui pleure", place: "quai",
      fx: { item: "pq_tr_sou", clock: { tresors: 1 }, flag: "tresor:pq_sou", ep: ["perso", 200] },
      text: [
        { if: { voile: "pq_mur" }, text: "Derrière la brique qui pleure, a dit Clarmonde. Tu t'approches du mur du canal, la chandelle haute.", else: "Tu t'approches du mur du canal. Tes mains ont remarqué avant toi que la brique qui pleure n'a pas le même joint que ses voisines : un mortier gris, plus récent, qui s'effrite." },
        "La brique sombre bouge sous ta dague. Tu la fais jouer, l'eau te coule sur les poignets, et elle vient. Derrière, dans un creux du mur, un petit rouleau de toile cirée, ficelé serré.",
        "Dans la toile, une seule pièce d'or, large, épaisse, usée sur les reliefs. D'un côté, une couronne posée sur trois vagues ; de l'autre, un profil de femme et une légende à demi effacée, où tu lis *YSAVR* et *SORNA*. Une monnaie de la reine. Tu en as vu une, une fois, à la Monnaie, sous verre.",
        "Odeline n'avait pas un liard devant elle. Elle gardait ça dans le mur.",
      ],
      choices: [{ back: "PQ_cave_bas" }] },

    // ================================================================== Tibère Gaucelm
    PQ_tibere: { act: "P", title: "La borne du pont", place: "quai", backName: "la borne du pont",
      text: [
        { first: true, text: "Tibère Gaucelm est assis sur la borne d'amarrage au pied du pont des Noyés, les jambes écartées, un quignon de pain dans une main et un bout de saucisse sèche dans l'autre. Son rapport est posé sur son genou, plié en deux, avec une pierre dessus contre le vent. Il te voit venir et ne se lève pas." },
        { again: true, text: "Tibère n'a pas bougé de sa borne. Le pain a diminué. Le rapport est toujours sous sa pierre." },
        { if: CORNET, text: "« Le rapport ? dit-il en tapotant le papier. J'écris {{oreille#pq_accident|ce que j'ai vu, et j'ai vu une chute|ce qu'on m'a payé pour écrire : accident, et vite}}. Le capitaine signe, le greffe range, et dans un an il n'y aura plus que vous pour vous en souvenir. »", else: "« Le rapport ? dit-il en tapotant le papier. J'écris ce que j'ai vu, et j'ai vu une chute. Le capitaine signe, le greffe range, et dans un an il n'y aura plus que vous pour vous en souvenir. »" },
        { if: CORNET, text: "Il mord dans sa saucisse. « Et après, {{oreille#pq_gants|je le porte au capitaine du poste, comme d'habitude|j'en porte une copie à l'homme aux gants gris, sur l'île, avant le capitaine}}. C'est la règle. »", else: "Il mord dans sa saucisse. « Et après, je le porte au capitaine du poste, comme d'habitude. C'est la règle. »" },
        { if: CORNET, text: "Tu tiens le cornet dans ta poche, la main refermée dessus. Il te suffit de tourner la tête un peu, de le porter à ton oreille sous prétexte de te gratter la nuque. Le sergent ne remarque rien. Ou bien il remarque, et il s'en moque." },
        { if: { voile: "pq_gants" }, once: true, text: "L'homme aux gants gris. Tu as vu passer sur le quai, ces dernières semaines, un homme bien mis, les mains toujours gantées de gris, qui s'arrêtait devant la boutique sans entrer. Odeline fermait les volets quand elle le voyait." },
      ],
      choices: [
        { label: "Lui demander pourquoi il traîne encore sur le quai", hide: { seen: "PQ_tibere_offre" }, to: "PQ_tibere_offre" },
        { label: "Reparler de sa proposition", hide: { not: { seen: "PQ_tibere_offre" } }, to: "PQ_tibere_offre" },
        { label: "« On vous a payé pour écrire ce mot-là. »", hide: { any: [{ not: { voile: "pq_accident" } }, { seen: "PQ_tibere_paye" }] }, to: "PQ_tibere_paye" },
        { label: "Lui parler de sa fille", hide: { any: [{ not: { voile: "pq_rosalie" } }, { seen: "PQ_tibere_rosalie" }] }, to: "PQ_tibere_rosalie" },
        { label: "Le laisser à son pain", back: "PQ_quai" },
      ] },

    PQ_tibere_offre: { act: "P", title: "Une proposition", place: "quai",
      text: [
        "Tibère essuie son couteau sur sa cuisse, le replie, et te regarde par en dessous. « Le Guet me raye des rôles à la fin de la semaine, dit-il. Dettes de jeu. Le capitaine a été patient, il dit. Vingt-six ans de service, et on me rend ma masse un samedi. »",
        "« Vous, vous héritez d'une boutique pleine d'objets, de dettes et de voisins. Ça attire du monde, ces choses-là, et pas des gens qui frappent. Je peux vous servir de garde, {{oreille#pq_solde|sans solde, pour l'instant|payé ailleurs : cinq ducats la semaine pour dire où vous allez et qui vous voyez}}. Je connais la ville. Je connais le Guet. Et je sais encore me servir de ça. » Il pose la main sur la masse de sergent pendue à sa ceinture.",
        "« J'ai une fille, ajoute-t-il, sans que tu aies rien demandé. {{oreille#pq_rosalie|Elle est grande, elle se débrouille sans moi|Rosalie, seize ans, apprentie couturière, qui change de trottoir quand elle me voit}}. Alors j'ai le temps. »",
        { if: { has: "poids:dette" }, text: "Tu penses aux quinze ducats que tu dois, et aux gens à qui tu les dois. Un sergent sur le seuil, même rayé des rôles, les ferait réfléchir." },
      ],
      choices: [
        { label: "Accepter : un sergent sur le seuil fera réfléchir les créanciers", to: "PQ_tibere_pris" },
        { label: "Accepter, en sachant qui le paie : mieux vaut garder sous les yeux celui qui te surveille", hide: { not: { voile: "pq_solde" } }, fx: { flag: "pq:tibere_su" }, to: "PQ_tibere_pris" },
        { label: "Lui demander d'abord ce qu'il a vraiment vu, en bas", hide: { seen: "PQ_tibere_vu" }, to: "PQ_tibere_vu" },
        { label: "Refuser : tu n'as besoin de personne", to: "PQ_tibere_refuse" },
        { label: "Réfléchir encore", back: "PQ_tibere" },
      ] },

    PQ_tibere_vu: { act: "P", title: "En bas", place: "quai",
      text: [
        "« Ce que j'ai vu ? » Tibère repose son pain. « Une vieille femme au pied d'un escalier, le cou tordu. Une chandelle nulle part. Une cave froide. » Il hausse les épaules. « J'ai vu ce qu'on voit dans ces cas-là. »",
        { if: CORNET, text: "« Et je n'ai {{oreille#pq_regard|rien vu d'autre, il n'y avait rien d'autre à voir|pas regardé plus loin que le bout de ma bougie, parce que je savais déjà ce que j'allais écrire}}, dit-il. »", else: "« Et je n'ai rien vu d'autre, dit-il. Il n'y avait rien d'autre à voir. »" },
        { if: { clues: "O", min: 2 }, text: "Tu lui parles de ce que tu as trouvé dans la boutique. Il t'écoute sans t'interrompre, en mâchant lentement. Quand tu as fini, il regarde longtemps l'eau du canal. « Vingt-six ans de Guet, dit-il enfin. Et on ne m'a jamais demandé de bien faire mon travail. Seulement de le faire vite. »" },
      ],
      choices: [
        { label: "Accepter son offre", to: "PQ_tibere_pris" },
        { label: "Refuser son offre", to: "PQ_tibere_refuse" },
        { label: "Réfléchir encore", back: "PQ_tibere" },
      ] },

    PQ_tibere_rosalie: { act: "P", title: "Rosalie", place: "quai",
      fx: { conf: { tibere: 5 }, ep: ["perso", 150] },
      text: [
        "Tu lui demandes comment va Rosalie, l'apprentie couturière. Tibère s'arrête de mâcher. Il te regarde comme on regarde un homme qui vient de sortir une carte de sa manche.",
        "« Qui vous a parlé de Rosalie ? » Tu dis : tout le quai la connaît. C'est faux, et il le sait, et il décide de te croire. « Elle va bien, dit-il. Elle coud des boutonnières chez la veuve Aubrac, rue des Ciseaux. Elle a de bons doigts. Sa mère avait de bons doigts. »",
        "« Je l'attends le dimanche à la sortie de Saint-Rieul. Elle passe de l'autre côté de la rue. Je ne lui en veux pas. J'ai joué la dot de sa sœur aînée aux dés, l'hiver où sa sœur est morte de la fièvre. » Il dit ça d'une voix égale, en regardant le canal. Puis il reprend son pain et mord dedans, et vous restez un moment ainsi, sans rien dire, toi debout, lui sur sa borne.",
      ],
      choices: [{ back: "PQ_tibere" }] },

    PQ_tibere_paye: { act: "P", title: "Le mot payé", place: "quai",
      fx: { flag: ["odeline:meurtre", "pq:tibere_paye"], ep: ["perso", 400] },
      text: [
        "Tu le dis à voix basse, tout près : on l'a payé pour écrire *accident*. Tibère devient d'une couleur de suif. Il te prend par le bras, avec une poigne de sergent qui a traîné des ivrognes toute sa vie, et t'emmène sous l'arche du pont, à l'ombre, là où l'eau couvre les voix.",
        "« Qui vous a dit ça ? » Tu ne réponds pas. Il te lâche le bras. Il regarde l'eau. « Il y a huit jours, dit-il enfin, un homme est venu me trouver au poste. Bien mis, des gants gris, une voix douce. Il m'a payé dix ducats d'avance pour lui rapporter ce qui se passe sur le quai, chez Carrus surtout. Et en partant, il a dit : *s'il arrive quelque chose à la vieille dame, ce sera un accident. Vous l'écrirez vite.* »",
        { if: { has: "pq:tibere_attendait" }, text: "Tu lui répètes ce que t'a dit le petit Titou : quand il est arrivé au poste, le sergent était assis, habillé, son manteau sur le dos et sa masse à la ceinture. Tibère ferme les yeux une seconde. « J'attendais ce gamin depuis huit jours, dit-il. Je ne savais pas lequel ce serait. Je savais qu'il viendrait. »" },
        "« Il l'a dit il y a huit jours, répète Tibère. Avant. Ce matin, quand le gamin est arrivé au poste en criant, c'est à cette phrase que j'ai pensé d'abord. Pas à elle. » Il se frotte la balafre. « J'ai écrit accident. C'est peut-être vrai. Je n'en sais rien. Je ne suis pas descendu assez longtemps pour le savoir. »",
        "« Le nom de l'homme, je ne le sais pas. Il vient de l'île des Changeurs ; il a l'accent de là-bas, et des bottes plus propres que les miennes un jour de procession. Il me retrouve au Lumignon le jeudi. »",
      ],
      choices: [
        { label: "Le prendre avec toi : il dira à l'homme aux gants gris ce que tu voudras", hide: { has: "pq:tibere_pris" }, fx: { flag: "pq:tibere_su", conf: { tibere: 10 } }, to: "PQ_tibere_pris" },
        { label: "Le chasser : qu'il aille rapporter ailleurs", hide: { has: "pq:tibere_pris" }, to: "PQ_tibere_refuse" },
        { label: "Revenir sur le quai", hide: { not: { has: "pq:tibere_pris" } }, back: "PQ_quai" },
      ] },

    PQ_tibere_pris: { act: "P", title: "Un garde", place: "quai",
      fx: { join: "tibere", flag: "pq:tibere_pris", ep: ["perso", 300] },
      text: [
        "Tibère se lève, secoue les miettes de son manteau, glisse le rapport dans sa ceinture et cale sa masse. Debout, il est plus grand que dans ton souvenir, et plus vieux. « Bon, dit-il. Où va-t-on ? »",
        { if: { has: "pq:tibere_su" }, text: "Tu sais ce qu'il rapportera, et à qui. Il sait peut-être que tu le sais. Vous marchez côte à côte avec cette chose entre vous, et vous la portez à deux.", else: "Il ne parle pas d'argent. Tu te demandes de quoi il vivra. Il a l'air de se le demander aussi, ou de faire semblant." },
        "Sur le quai, Clarmonde Pujol vous voit passer et lève les sourcils jusqu'à son bonnet.",
      ],
      choices: [{ label: "Revenir sur le quai avec lui", back: "PQ_quai" }] },

    PQ_tibere_refuse: { act: "P", title: "Non merci", place: "quai",
      fx: { flag: "tibere:refuse" },
      text: [
        "Tibère hausse les épaules, sans vexation apparente. « Comme vous voudrez. Le quai est à tout le monde. » Il se rassied sur sa borne, reprend son pain, et se remet à regarder le canal.",
        "Plus tard, en te retournant au bout du quai, tu le vois encore là. Puis, une heure après, adossé à la porte du Lumignon. Puis au coin de la rue des Chaudronniers. Il garde toujours la même distance, et toujours un œil sur toi.",
      ],
      choices: [{ back: "PQ_quai" }] },

    PQ_tibere_cave: { act: "P", title: "Le sergent fouille", place: "quai", with: "tibere",
      text: [
        { with: "tibere", text: "Tibère ôte son manteau, le plie sur un tonneau et s'approche de l'établi en se frottant les mains. « Les receleurs du port, dit-il, ils ont tous la même idée : un double fond. Ils croient tous l'avoir inventé. » Il ne fouille rien. Il prend les objets un par un, les soupèse, les repose." },
        { with: "tibere", text: "La caisse aux clous rouillés, il la soulève à deux mains, la secoue, l'écoute. Puis il la pose et frappe le fond du plat de la main, dedans, puis dehors. « Deux doigts de trop », dit-il. Il te la tend. « C'est vous l'héritier. À vous l'honneur. »" },
      ],
      choices: [{ label: "Soulever le double fond", to: "PQ_cave" }] },

    PQ_tibere_seuil: { act: "P", title: "Au pied du pont", place: "quai",
      text: [
        "Au pied du pont des Noyés, une ombre se décolle de la borne et se met à marcher à côté de toi. Tibère Gaucelm, sa masse à la ceinture, son rapport sous le bras.",
        "« Vous partez en ville, dit-il. La ville est plus grande que le quai, et plus mouillée. Là-bas, une personne seule qui hérite d'une boutique et qui pose des questions, ça finit dans un canal. Je me propose encore. {{oreille#pq_seuil|Une dernière fois, sans rien demander|Il faut que je vous suive de toute façon, j'ai été payé pour ça}}. »",
      ],
      choices: [
        { label: "Le prendre avec toi", big: true, hide: { has: "pq:tibere_rapporte" }, fx: { join: "tibere", flag: "pq:tibere_pris", ep: ["perso", 300] }, to: "PF_ville" },
        { label: "Le prendre avec toi, en sachant qui le paie : il rapportera ce que tu voudras bien lui laisser voir", big: true, hide: { not: { has: "pq:tibere_rapporte" } }, fx: { join: "tibere", flag: ["pq:tibere_pris", "pq:tibere_su"], ep: ["perso", 300] }, to: "PF_ville" },
        { label: "Lui dire de rester sur sa borne", big: true, fx: { flag: "tibere:refuse" }, to: "PF_ville" },
      ] },

    PQ_guet: { act: "P", title: "Le poste du Guet", place: "quai",
      fx: { flag: "guet:mensonge", ep: ["perso", 200] },
      text: [
        "Le poste du Guet est une salle basse au bout du quai, avec un râtelier de hallebardes, un poêle de faïence et une grande table où Désiré Mauran recopie des rapports au propre en tirant la langue. Il se lève quand tu entres, se rassied, retrempe sa plume.",
        "« Votre déposition, oui. » Il ouvre le registre. « Le sergent {{oreille#pq_desire|est un bon sergent, quoi qu'on raconte au poste|m'a donné un liard ce matin pour que j'écrive vite et que je reste en haut des marches}}. Il a déjà fait son rapport, le capitaine l'a. Il ne manque que vous. »",
        "Il trempe sa plume. « Quand l'avez-vous vue en vie pour la dernière fois ? »",
        "Tu dis que tu ne l'as pas vue depuis le matin. Tu dis que tu es parti{e} vers midi aider à monter les feux sur le pont des Noyés, et que tu as passé la nuit là-bas. Désiré l'écrit. Il te fait relire, et tu signes.",
        { if: CORNET, text: "Ta propre voix, pendant que tu parles, sonne plate dans le cornet. Tes mots à toi restent immobiles." },
      ],
      choices: [{ back: "PQ_quai" }] },

    // ================================================================== Clarmonde Pujol, the landlady
    PQ_clarmonde: { act: "P", title: "La Chandelle verte", place: "quai", backName: "la cuisine de Clarmonde",
      fx: { meet: "pq_clarmonde" },
      text: [
        { first: true, text: "La pension de Clarmonde Pujol s'appelle la Chandelle verte, à cause de l'enseigne, une chandelle de fer peinte qui a été verte. Six chambres pour les bateliers de passage, une cuisine au rez-de-chaussée où l'on mange tous ensemble sur une table de planches, et une odeur permanente de soupe aux poireaux. Clarmonde est à la cuisine, devant un baquet d'oignons, les yeux encore rouges, et elle ne sait plus si c'est le chagrin ou les oignons." },
        { again: true, text: "Clarmonde, à sa cuisine, entre son baquet et son fourneau. Elle te fait signe de t'asseoir d'un coup de couteau vers le banc." },
        { if: CORNET, text: "« Pauvre Odeline, dit-elle. Elle était {{oreille|la meilleure voisine qu'on puisse avoir sur ce quai|dure en affaires, et elle me débauchait mes pensionnaires pour porter ses tonneaux}}. » Elle renifle, coupe un oignon en deux. « Et pas un sou devant elle, avec ça. Elle {{oreille#pq_mur|vivait de rien, la pauvre femme|cachait son or dans le mur de la cave, derrière la brique qui pleure : je l'ai vue faire, un soir, par le soupirail}}. »", else: "« Pauvre Odeline, dit-elle. Elle était la meilleure voisine qu'on puisse avoir sur ce quai. » Elle renifle, coupe un oignon en deux. « Et pas un sou devant elle, avec ça. Elle vivait de rien, la pauvre femme. »" },
        { if: CORNET, text: "« Tu vas garder la boutique ? Tu devrais. Tu {{oreille|as le métier dans les mains, elle le disait|n'as pas les reins pour la tenir, et tout le quai le sait}}. »", else: "« Tu vas garder la boutique ? Tu devrais. Tu as le métier dans les mains, elle le disait. »" },
        { with: "tibere", text: "Tibère s'est installé au bout du banc et s'est servi du pain sans demander. Clarmonde le regarde faire avec la tête qu'on fait à un chien mouillé qui entre dans la cuisine." },
      ],
      choices: [
        { label: "Lui demander ce qu'elle a entendu, cette nuit", to: "PQ_clarmonde_nuit" },
        { label: "« Vous avez entendu quelque chose à minuit. »", hide: { any: [{ not: { voile: "pq_minuit" } }, { seen: "PQ_clarmonde_minuit" }] }, to: "PQ_clarmonde_minuit" },
        { label: "« Vous avez entendu la dispute. »", hide: { any: [{ not: { voile: "pq_dispute" } }, { seen: "PQ_clarmonde_dispute" }] }, to: "PQ_clarmonde_dispute" },
        { label: "Titou, son neveu, qui joue aux osselets sur le seuil", hide: { seen: "PQ_titou" }, to: "PQ_titou" },
        { label: "La laisser à ses oignons", back: "PQ_quai" },
      ] },

    PQ_clarmonde_nuit: { act: "P", title: "La nuit des Lanternes", place: "quai",
      text: [
        "Clarmonde pose son couteau. Elle s'essuie les mains à son tablier, lentement, un doigt après l'autre.",
        { if: CORNET, text: "« Hier soir ? J'avais six pensionnaires, tous saouls, et la fête sous les fenêtres. J'ai {{oreille#pq_dispute|dormi comme une souche, avec le vin chaud que j'avais bu|entendu ta voix chez elle vers dix heures, vous criiez tous les deux, et la porte a claqué si fort que mes casseroles ont sonné}}. »", else: "« Hier soir ? J'avais six pensionnaires, tous saouls, et la fête sous les fenêtres. J'ai dormi comme une souche, avec le vin chaud que j'avais bu. »" },
        { if: CORNET, text: "« Et après, {{oreille#pq_minuit|plus rien jusqu'au matin, le quai dormait|vers minuit, un coup de métal, un cri court, quelque chose qui roulait dans l'escalier, et puis un pas d'homme, lourd, qui est resté longtemps dans la boutique}}. » Elle reprend son couteau. « Voilà. C'est tout ce que je sais. Je l'ai dit au petit commis. »", else: "« Et après, plus rien jusqu'au matin, le quai dormait. » Elle reprend son couteau. « Voilà. C'est tout ce que je sais. Je l'ai dit au petit commis. »" },
        { if: { has: "poids:amour" }, text: "Elle ajoute, sans te regarder : « Et toi, tu étais sur le pont avec qui tu sais. Tout le quai t'a vu{e} danser. Ça au moins, ce n'est pas un secret. »" },
      ],
      choices: [{ back: "PQ_clarmonde" }] },

    PQ_clarmonde_minuit: { act: "P", title: "Minuit", place: "quai",
      fx: { flag: "odeline:meurtre", ep: ["perso", 300] },
      text: [
        "Tu le dis tout bas : un coup de métal, un cri, un pas d'homme. Clarmonde lâche son oignon. Elle regarde la porte de sa cuisine, puis la fenêtre, puis toi.",
        "« Je n'ai rien vu, dit-elle très vite. J'ai entendu. J'étais couchée, j'ai entendu le coup, le cri, la chute. J'ai cru qu'elle avait fait tomber un tonneau. Et puis le pas. Un homme. Il marchait doucement, comme quelqu'un qui cherche, qui ouvre et qui referme. Longtemps. J'ai tiré ma couverture. »",
        "« Et à la fin, la clochette de sa porte. Toute petite. Un seul coup, étouffé, comme si on la tenait dans la main en passant dessous. » Elle se signe. « J'avais peur, voilà. J'ai eu peur, et ce matin j'ai dit au commis que je dormais. Si j'étais descendue… »",
        "Elle se tait. Dehors, un batelier appelle quelqu'un sur le canal.",
      ],
      choices: [{ back: "PQ_clarmonde" }] },

    PQ_clarmonde_dispute: { act: "P", title: "Dix heures", place: "quai",
      text: [
        "Clarmonde ne fait pas semblant. Elle te regarde bien en face, longtemps, et elle a la bonté de baisser la voix.",
        "« Oui, je vous ai entendus. Je n'ai pas compris les mots. Je sais que c'était toi. » Elle hausse les épaules. « Les vieilles gens et les jeunes, ça crie. Moi aussi, je criais sur ma mère. »",
        "« Je {{oreille#pq_taire|n'en parlerai à personne, ce ne sont pas mes affaires|n'en parlerai à personne tant que tu me laisses la cave d'Odeline pour y loger ma nièce}}, dit-elle. Au commis, j'ai dit que je dormais. Je dirai pareil à qui demandera. »",
      ],
      choices: [
        { label: "Lui promettre la cave pour sa nièce, quand tout sera réglé", hide: { not: { voile: "pq_taire" } }, fx: { flag: "pq:clarmonde_muette", ep: ["perso", 150] }, to: "PQ_clarmonde_accord" },
        { label: "La remercier, et en rester là", back: "PQ_clarmonde" },
      ] },

    PQ_clarmonde_accord: { act: "P", title: "La cave pour la nièce", place: "quai",
      text: [
        "Tu dis : la cave, pour sa nièce, quand tout sera réglé. Clarmonde s'arrête de couper. Elle rougit d'un coup, jusqu'au bonnet, et elle a la décence de paraître gênée d'avoir été comprise.",
        "« Je n'ai rien demandé, dit-elle. » Puis : « Elle s'appelle Margueritte. Elle est brodeuse. Elle est sage. » Puis elle te sert un bol de soupe aux poireaux, d'office, et le pose devant toi avec un morceau de lard dedans, un honneur qu'elle réserve d'ordinaire au curé.",
      ],
      choices: [{ back: "PQ_clarmonde" }] },

    // ================================================================== Maître Lagrue, the public scrivener
    PQ_lagrue: { act: "P", title: "L'échoppe de l'écrivain public", place: "quai", backName: "l'échoppe de Maître Lagrue",
      fx: { meet: "pq_lagrue" },
      text: [
        { first: true, text: "L'échoppe de Bénézet Lagrue est un réduit sous l'escalier d'une maison, ouvert sur le quai, à peine assez large pour un pupitre, deux tabourets et un brasero. Au mur, des modèles de lettres épinglés : *Pour demander la main d'une veuve. Pour réclamer un salaire. Pour annoncer un décès à la famille.* Il écrit pour une femme en deuil qui pleure sans bruit, et il trempe sa plume entre chaque ligne avec une grande délicatesse." },
        { again: true, text: "Maître Lagrue lève le nez de son pupitre et pose sa plume." },
        { if: CORNET, text: "Quand la femme est partie, il te fait asseoir. « Une sainte femme, dit-il, la main sur le cœur, {{oreille|que Dieu la garde dans sa paix|qui m'a prêté deux ducats et ne me les a jamais réclamés, jusqu'à la semaine dernière}}. » Il soupire. « Elle venait parfois me faire {{oreille#pq_copie|relire ses factures, sa vue baissait|recopier au propre des lettres qu'elle ne voulait pas écrire de sa main, la dernière pour un homme de l'île des Changeurs}}. »", else: "Quand la femme est partie, il te fait asseoir. « Une sainte femme, dit-il, la main sur le cœur, que Dieu la garde dans sa paix. » Il soupire. « Elle venait parfois me faire relire ses factures, sa vue baissait. »" },
        { with: "tibere", text: "Tibère reste debout dehors, adossé au mur, et Lagrue jette vers lui des regards inquiets, comme un débiteur qui a reconnu un sergent." },
      ],
      choices: [
        { label: "Lui montrer sa reconnaissance de dette", hide: { any: [{ not: { item: "pq_reconnaissances" } }, { quest: "PQ_lagrue" }] }, fx: { questSeen: "PQ_lagrue" }, to: "PQ_lagrue_dette" },
        { label: "Lui parler des deux ducats qu'il devait à Odeline", hide: { any: [{ item: "pq_reconnaissances" }, { not: { seen: "PQ_dettes" } }, { quest: "PQ_lagrue" }] }, fx: { questSeen: "PQ_lagrue" }, to: "PQ_lagrue_dette" },
        { label: "« Quelle lettre, pour l'île des Changeurs ? »", hide: { any: [{ not: { voile: "pq_copie" } }, { seen: "PQ_lagrue_lettre" }] }, to: "PQ_lagrue_lettre" },
        { label: "Le laisser à ses modèles", back: "PQ_quai" },
      ] },

    PQ_lagrue_dette: { act: "P", title: "Deux ducats", place: "quai",
      text: [
        "Tu poses la reconnaissance sur son pupitre, à côté de l'encrier. Il reconnaît sa propre signature, avec ses boucles, et il devient gris.",
        "« Deux ducats, oui. » Il lisse le papier du plat de la main. « {{oreille#pq_lagrue_bu|Je comptais les lui rendre à Pâques, comme il est écrit|Je les ai bus, et la moitié de ce que j'ai gagné à la Saint-Martin avec}}. J'ai des frais, vous comprenez. L'encre, le papier, le charbon. »",
        "Il ouvre une boîte de fer-blanc sous son pupitre et compte ce qu'il y a dedans, à voix basse. Vingt liards, à peu près. « C'est tout ce que j'ai. Je peux vous donner ça, et le reste… plus tard. »",
      ],
      choices: [
        { label: "Prendre les vingt liards, et lui laisser le reste jusqu'à Pâques", fx: { gold: 20, set: { lagrue: "paye" }, quest: "PQ_lagrue", ep: ["perso", 200] }, to: "PQ_lagrue_paye" },
        { label: "Laisse-moi faire, dit Tibère en entrant dans l'échoppe", who: "tibere", fx: { gold: 40, set: { lagrue: "paye" }, quest: "PQ_lagrue", ep: ["perso", 200], conf: { tibere: 3 } }, to: "PQ_lagrue_paye" },
        { label: "Déchirer la reconnaissance devant lui", fx: { set: { lagrue: "quitte" }, quest: "PQ_lagrue", ep: ["perso", 300] }, to: "PQ_lagrue_quitte" },
        { label: "Lui proposer d'éteindre la dette en écritures : ce qu'il a copié pour Odeline", fx: { set: { lagrue: "service" }, quest: "PQ_lagrue", ep: ["perso", 300] }, to: "PQ_lagrue_lettre" },
      ] },

    PQ_lagrue_paye: { act: "P", title: "Le compte", place: "quai",
      text: [
        { with: "tibere", text: "Tibère se penche par-dessus le pupitre, très aimable, et lui parle de la prison pour dettes de la Tour aux Rats, du pain qu'on y mange, des puces. Lagrue écoute en hochant la tête, sort de sa doublure une seconde bourse que personne n'avait vue, et paie les deux ducats en entier, en petites pièces." },
        { without: "tibere", text: "Lagrue compte les vingt liards dans ta main, un par un, en les faisant sonner. Il te fait signer un reçu, de sa belle écriture, et il signe en dessous, avec ses boucles. Le reste à Pâques. Vous savez l'un et l'autre ce que vaut ce genre de promesse." },
        "Il range la reconnaissance acquittée dans son pupitre. « Elle aurait fait pareil, dit-il. Elle était juste. C'est ce qu'on disait d'elle : juste. Pas gentille. Juste. »",
      ],
      choices: [{ back: "PQ_lagrue" }] },

    PQ_lagrue_quitte: { act: "P", title: "Le papier déchiré", place: "quai",
      fx: { item: "pq_tr_plume", clock: { tresors: 1 }, flag: "tresor:pq_plume" },
      text: [
        "Tu déchires la reconnaissance en deux, puis en quatre, et tu poses les morceaux sur son pupitre. Lagrue les regarde. Ses yeux se remplissent d'eau, tout d'un coup, sans que son visage bouge.",
        "Il fouille dans son pupitre et en sort un étui de cuir, très usé, qu'il ouvre devant toi : une plume à écrire tout en métal, le corps d'argent ciselé de feuilles de vigne, le bec d'or. « Prenez ça. {{oreille|C'est tout ce qui me reste de mon père, il était greffier|Je l'ai prise sur le bureau de l'évêque de Varenne il y a trente ans, quand j'étais son secrétaire, et je n'ai jamais osé la vendre}}. »",
        "Il referme l'étui sur tes doigts. « J'écris mieux avec une plume d'oie, de toute façon. »",
      ],
      choices: [{ back: "PQ_lagrue" }] },

    PQ_lagrue_lettre: { act: "P", title: "La lettre aux Changeurs", place: "quai",
      fx: { flag: "pq:lettre_changeurs", ep: ["perso", 300] },
      text: [
        "Lagrue regarde dehors, des deux côtés du quai, puis il tire le rideau de toile de son échoppe. Dans la pénombre, il parle bas, en articulant, à la façon des gens qui récitent.",
        "« Il y a douze jours. Elle est venue avec un brouillon de sa main, qu'elle a brûlé dans mon brasero après. Je l'ai copié au propre sur du beau papier, et elle a cacheté elle-même. Pas de nom sur l'adresse : *À l'homme qui achète les choses de la reine, à l'hôtel de pierre blanche, île des Changeurs.* »",
        "« Et dedans : *J'ai trouvé la première porte. Deux mille ducats, pas un liard de moins. Venez après les Lanternes, seul, et pas avant. Si vous envoyez quelqu'un d'autre, je brûle ce que j'ai.* » Il s'arrête. « Deux mille ducats. J'ai cru qu'elle avait perdu la tête. Je l'ai copié quand même. On me paie pour écrire, pas pour comprendre. »",
        "Il rouvre le rideau. La lumière du quai revient sur son pupitre, sur ses modèles de lettres. « Je n'ai rien dit, n'est-ce pas ? »",
      ],
      choices: [{ back: "PQ_lagrue" }] },

    // ================================================================== Prosper Galabru, the junk dealer
    PQ_galabru: { act: "P", title: "L'étal de Galabru", place: "quai", backName: "l'étal de Prosper Galabru",
      fx: { meet: "pq_galabru" },
      text: [
        { first: true, text: "L'étal de Prosper Galabru déborde de sa boutique jusqu'au milieu du quai : des chaises dépareillées, des ferrures de coffre, un rouet, des épées de parade sans tranchant, des cadres vides, une armure de cuir pour enfant pendue à un clou. Prosper était menuisier avant d'être brocanteur ; il a gardé les mains, larges et pleines de copeaux, et l'habitude de tapoter le bois pour l'écouter." },
        { again: true, text: "Prosper Galabru, entre ses chaises et ses cadres, le chiffon à la main. Il essuie toujours quelque chose." },
        { if: CORNET, text: "« Quel malheur, dit-il, et il pose son chiffon. Si tu veux vendre le stock, {{oreille#pq_rachat|je te fais un prix d'ami, en souvenir d'elle|je le revends dans la semaine à l'homme de l'île, qui m'a fait promettre de le lui garder}}. Il faut bien vivre. »", else: "« Quel malheur, dit-il, et il pose son chiffon. Si tu veux vendre le stock, je te fais un prix d'ami, en souvenir d'elle. Il faut bien vivre. »" },
        "Au milieu de l'étal, sur un carré de velours noir, une seule chose brille : une broche en forme de couronne, {{pie#pq_broche|d'or fin, sertie de petites perles d'eau douce, une couronne de sel à l'ancienne|de cuivre doré à la feuille, sertie de perles de verre soufflé, l'épingle soudée à l'étain}}. Une étiquette dit : *Pièce de la reine Ysaure. Vingt liards.*",
        { with: "tibere", text: "Tibère soupèse une épée de parade, fait la grimace, la repose. « De la tôle », dit-il, assez fort pour que Prosper l'entende." },
      ],
      choices: [
        { label: "Demander à Prosper d'où vient la broche", hide: { seen: "PQ_galabru_broche" }, to: "PQ_galabru_broche" },
        { label: "Lui demander ce qu'il a fabriqué pour Odeline, du temps où il était menuisier", hide: { any: [{ seen: "PQ_galabru_caisse" }, { has: "cornet:trouve" }] }, to: "PQ_galabru_caisse" },
        { label: "« Quel homme de l'île ? »", hide: { any: [{ not: { voile: "pq_rachat" } }, { seen: "PQ_galabru_ile" }] }, to: "PQ_galabru_ile" },
        { label: "Laisser Prosper à son chiffon", back: "PQ_quai" },
      ] },

    PQ_galabru_broche: { act: "P", title: "La broche", place: "quai",
      text: [
        "Prosper prend la broche du bout des doigts, avec précaution, et la fait jouer dans la lumière. « Une pièce de la reine, dit-il. {{oreille#pq_source|Je la tiens d'une vieille famille de l'île, de très bonne source|Je l'ai fait dorer aux Halles le mois dernier, et j'en vends deux par semaine aux pèlerins}}. On en trouve encore, tu sais, dans les vieilles maisons. Pour toi, vingt liards. Odeline me l'aurait prise à quinze, mais elle marchandait comme une poissonnière. »",
        { if: { has: "metier:mains" }, text: "Tu la prends dans ta main. Elle est légère. Tu la trouves un peu trop légère, ou bien c'est l'or des reines qui pèse moins que celui des banquiers. Tu as du mal à décider." },
        "Il la repose sur son velours, bien au milieu.",
      ],
      choices: [
        { label: "Acheter la broche, vingt liards", hide: { item: "pq_tr_broche" }, fx: { gold: -20, item: "pq_tr_broche", flag: "pq:broche_achetee" }, back: "PQ_galabru" },
        { label: "« Dorée aux Halles, le mois dernier ? »", hide: { not: { voile: "pq_source" } }, fx: { gold: 5, flag: "pq:galabru_honte" }, to: "PQ_galabru_honte" },
        { label: "« Du cuivre doré à la feuille, du verre soufflé, et une épingle soudée à l'étain. Vingt liards ? »", hide: { any: [{ not: { has: "pq:broche_fausse" } }, { voile: "pq_source" }, { has: "pq:galabru_honte" }] }, fx: { gold: 5, flag: "pq:galabru_honte" }, to: "PQ_galabru_honte" },
        { label: "Laisser la broche sur son velours", back: "PQ_galabru" },
      ] },

    PQ_galabru_honte: { act: "P", title: "Aux Halles", place: "quai",
      text: [
        "Prosper ouvre la bouche, la referme. Il regarde la broche, puis toi, puis le canal. Il rit, un rire court, sans joie.",
        "« Elle aussi, elle faisait ça, dit-il. Elle me regardait mentir et elle attendait que j'aie fini. » Il prend cinq liards dans sa poche de tablier et te les met dans la main. « Pour que tu oublies où sont les Halles. » Puis il retourne l'étiquette de la broche, et écrit au dos, au crayon : *souvenir*.",
      ],
      choices: [{ back: "PQ_galabru" }] },

    PQ_galabru_caisse: { act: "P", title: "Le menuisier", place: "quai",
      text: [
        "Prosper se gratte la barbe, longtemps. « Pour Odeline ? Des étagères, des tas d'étagères. Le comptoir, je l'ai raboté. La vitrine, c'est moi. Et… » Il hésite.",
        { if: { any: [{ has: "metier:parole" }, { seen: "PQ_cave_rate" }] }, text: "Tu lui parles de la caisse aux clous, trop lourde pour une caisse vide. Il te regarde avec une surprise qui devient du respect. « Tu as de bonnes mains, dit-il. Oui. Je lui ai fait cette caisse il y a vingt ans, avec un fond de deux doigts. Elle m'a fait jurer de l'oublier. Je l'ai oubliée vingt ans. Elle est morte : je peux m'en souvenir, maintenant. »", else: "« Et une caisse, une fois, dit-il enfin. Pour la cave. Une caisse à clous, avec un fond de deux doigts. Elle m'a fait jurer de l'oublier. Je l'ai oubliée vingt ans. Elle est morte : je peux m'en souvenir, maintenant. »" },
        "Il s'essuie les mains à son tablier. « Si tu veux, je descends avec toi. Je saurai l'ouvrir sans la casser. C'est moi qui ai fait le verrou. »",
      ],
      choices: [
        { label: "Descendre avec lui à la cave", fx: { flag: "pq:galabru_caisse" }, to: "PQ_galabru_cave" },
        { label: "Le remercier, et descendre plus tard", fx: { flag: "pq:galabru_caisse" }, back: "PQ_galabru" },
      ] },

    PQ_galabru_cave: { act: "P", title: "Le verrou du menuisier", place: "quai",
      text: [
        "Prosper descend l'escalier de la cave en se tenant à la rampe à deux mains, et il passe loin de la tache sombre, au pied des marches, en se signant. Il va droit à l'établi. Il reconnaît la caisse aux clous du premier coup d'œil.",
        "Il la vide dans une bassine, sans un mot, puis il enfonce l'ongle de son pouce dans une fente du coin, où le bois est plus usé, et il pousse en tournant. Il y a un petit claquement. « Voilà, dit-il. Je te laisse. Ce qu'il y a dedans, je ne veux pas le savoir. » Il remonte, plus vite qu'il n'est descendu.",
      ],
      choices: [{ label: "Soulever le double fond", to: "PQ_cave" }] },

    PQ_galabru_ile: { act: "P", title: "L'homme de l'île", place: "quai",
      fx: { flag: "pq:gants_gris", ep: ["perso", 150] },
      text: [
        "Prosper rougit jusqu'aux oreilles. Il prend son chiffon, frotte un cadre qui n'en a pas besoin.",
        "« Un client, dit-il. Il est passé il y a dix jours. Un homme poli, très bien mis, avec des gants gris qu'il n'enlève jamais, même pour toucher la marchandise. Il a demandé si Odeline vendait. J'ai dit non. Il m'a dit que si un jour elle vendait, ou si un jour elle n'était plus là, il paierait le stock entier, au prix que je dirais, et une commission pour moi. »",
        "« Le stock entier, répète Prosper. Les clés sans serrure, les bottes dépareillées, tout. Il ne cherchait pas un objet. Il voulait la boutique entière, pour la fouiller tranquille. » Il te regarde. « Je n'ai rien signé. Je te le jure sur la tête de ma mère. »",
      ],
      choices: [{ back: "PQ_galabru" }] },

    // ================================================================== Le Lumignon, and the three lost things
    PQ_lumignon: { act: "P", title: "Le Lumignon", place: "quai", backName: "le Lumignon",
      text: [
        { first: true, text: "Le Lumignon est la taverne du bout du quai, une salle basse aux poutres noires, avec un comptoir de zinc cabossé, des tonneaux en guise de tables et une cheminée où l'on fait griller des anguilles. Le matin, les débardeurs y boivent un coup avant l'embauche ; à midi, les petits commis de l'île y mangent la soupe, parce qu'elle est moins chère qu'au pont." },
        { again: true, text: "Le Lumignon, sa fumée d'anguille, son comptoir de zinc. Les mêmes têtes aux mêmes tonneaux." },
        { if: { has: "pq:objets_pris" }, text: "Près de la porte, un grand débardeur au crâne rasé boit seul, les coudes sur son tonneau. Au fond, près de la cheminée, une femme en robe sombre de commise, des lunettes sur le nez, mange sa soupe en lisant un livre de comptes." },
        { with: "tibere", text: "Le tavernier salue Tibère par son nom, et lui sert un vin sans attendre qu'il le demande. Tibère le boit d'un trait, debout." },
      ],
      choices: [
        { label: "Le débardeur au crâne rasé, près de la porte", hide: { any: [{ not: { item: "pq_couteau" } }] }, to: "PQ_gratien" },
        { label: "La commise aux lunettes, près de la cheminée", hide: { any: [{ not: { item: "pq_cachet" } }] }, to: "PQ_sabine" },
        { label: "« Vous avez entendu quelque chose sur la Banque. »", hide: { any: [{ not: { voile: "pq_sabine" } }, { seen: "PQ_sabine_faux" }] }, to: "PQ_sabine_faux" },
        { label: "Écouter la salle, le cornet d'os à l'oreille", hide: { any: [{ not: CORNET }, { seen: "PQ_lumignon_salle" }] }, to: "PQ_lumignon_salle" },
        { label: "Ressortir sur le quai", back: "PQ_quai" },
      ] },

    PQ_gratien: { act: "P", title: "Le couteau", place: "quai",
      fx: { flag: "pq:rendu_couteau", drop: "pq_couteau", meet: "pq_gratien", ep: ["perso", 200] },
      text: [
        "Tu poses le couteau sur son tonneau, le manche de corne vers lui. Le débardeur le regarde, puis toi. Il le prend, le soupèse, ouvre la lame avec le pouce, d'un geste qu'il a fait dix mille fois. Il s'appelle Gratien Rouvel. Il a de grandes mains calleuses et une cicatrice blanche au menton.",
        "« Je l'ai perdu au Carnaval, dit-il. Le couteau de mon père. Je croyais qu'il était au fond du canal. » Il paie à boire, pour toi, sans demander. « Combien je vous dois ? »",
        "Tu dis : ce que tu veux. Il pose trois liards, réfléchit, en ajoute deux. « Je {{oreille#pq_gratien|travaille au quai du Sel, comme mon père, quand il y a du travail|travaille pour Escarbol cette semaine, à vider les boutiques des morts, et j'en ai honte}}, dit-il. Le travail, on le prend où il est. »",
      ],
      choices: [{ label: "Laisser Gratien à son verre", fx: { gold: 5 }, back: "PQ_lumignon" }] },

    PQ_sabine: { act: "P", title: "La bague-cachet", place: "quai",
      fx: { flag: "pq:rendu_cachet", drop: "pq_cachet", meet: "pq_sabine", ep: ["perso", 200] },
      text: [
        "Tu poses la bague-cachet sur son livre de comptes, sur la colonne qu'elle additionnait. La femme pâlit d'un coup. Elle ôte ses lunettes, prend la bague, la retourne, regarde le héron gravé, et elle la passe à son doigt si vite qu'elle s'écorche la jointure.",
        "« Sabine Molinier, dit-elle, à voix basse. Commise aux écritures. Merci. Vous n'avez pas idée. On scelle tout avec ça, à la Banque. Sans elle, on me demandait des comptes. » Elle tire de sa bourse un ducat et le pose sur la table, ce qui est beaucoup trop.",
        "« Je l'avais {{oreille#pq_sabine|perdue un soir en courant après une barque, bêtement|jetée dans le canal moi-même, un soir, après qu'on m'a fait sceller la créance d'une morte qui ne l'était pas encore}}. » Elle remet ses lunettes, rouvre son livre. Ses doigts tremblent un peu sur la plume.",
      ],
      choices: [{ label: "Prendre le ducat", fx: { gold: 20 }, back: "PQ_lumignon" }, { label: "Lui laisser son ducat", fx: { fac: { banque: 2 } }, back: "PQ_lumignon" }] },

    PQ_sabine_faux: { act: "P", title: "La créance", place: "quai",
      fx: { flag: "pq:creance_banque", ep: ["perso", 250] },
      text: [
        "Tu t'assieds en face d'elle et tu parles bas : une créance, une morte qui ne l'était pas encore. Sabine Molinier ferme son livre. Elle regarde autour d'elle, la salle, le comptoir, la porte.",
        "« Il y a deux mois, dit-elle, on m'a fait sceller le rachat d'une créance. Une petite dette, trois ducats, due par une Carrus, du quai des Lanternes, à un prêteur de la rue des Chaudronniers. La Banque a racheté le billet avant même qu'il soit signé. Le prêteur prêtait l'argent de la Banque, et il touchait sa commission. »",
        "« Et dans la marge, d'une autre main : *à faire valoir sur la boutique et son contenu, à la mort de la débitrice.* » Elle remet ses lunettes. « J'ai trouvé ça laid. J'ai scellé quand même. Le soir, j'ai jeté ma bague dans le canal. Le lendemain, j'ai eu peur de perdre ma place, et j'ai demandé à tous les chercheurs du quai de la retrouver. » Un petit rire. « Elle l'a retrouvée, elle. »",
      ],
      choices: [{ back: "PQ_lumignon" }] },

    PQ_lumignon_salle: { act: "P", title: "Les voix du Lumignon", place: "quai",
      fx: { ep: ["perso", 150] },
      text: [
        "Tu t'assieds près de la cheminée, une écuelle d'anguille devant toi, et tu portes le cornet à ton oreille, la main contre la tempe. La salle se met à parler deux fois.",
        "Au comptoir, deux débardeurs parlent de la fête. « J'ai mis {{oreille|une lanterne pour mon frère, comme chaque année|une lanterne pour mon frère, et j'ai prié qu'il reste au fond, avec ce qu'il me devait}}. »",
        "Près de la porte, le tavernier rend la monnaie à un batelier. « Le vin {{oreille|est du clairet de l'année, tout ce qu'il y a de plus honnête|est coupé d'un tiers d'eau du canal, comme tous les lendemains de fête}}. »",
        "À une table, deux commis de l'île se penchent l'un vers l'autre. « On dit que la Banque {{oreille|se porte comme le Beffroi, solide pour trois siècles|n'a plus de quoi payer les commis à la Saint-Jean, si le duc ne patiente pas}}. »",
        "Tu reposes le cornet. Le tavernier te regarde, et il te sert un vin que tu n'as pas demandé. Il est coupé d'eau.",
      ],
      choices: [{ back: "PQ_lumignon" }] },

    // ================================================================== old Couzi and the lanterns of the night
    PQ_couzi: { act: "P", title: "L'escalier d'eau", place: "quai", backName: "l'escalier d'eau",
      fx: { meet: "pq_couzi" },
      text: [
        { first: true, text: "Au pied de l'escalier d'eau, le vieux Couzi trie sa pêche sur la dernière marche, les pieds dans l'eau. Il a soixante-quinze ans, une barbe blanche coupée au couteau, des avant-bras secs et noueux. Il défait les lanternes repêchées une à une : le papier huilé dans un panier, pour le feu ; les cadres de cuivre dans un autre ; et dans un troisième, à part, avec précaution, celles qui portent un nom écrit, pour la confrérie." },
        { again: true, text: "Couzi, sur sa marche, entre ses trois paniers. Le tas de lanternes mouillées a diminué, et le canal en charrie encore." },
        { if: CORNET, text: "« Je fais ça {{oreille|pour la confrérie, par piété, depuis quarante ans|pour la confrérie, et je garde le cuivre des cadres, qui paie mon vin}}, dit-il sans lever les yeux. Les noms, on les brûle à Pâques, avec une prière. Les noyés aiment qu'on brûle leur nom. »", else: "« Je fais ça pour la confrérie, par piété, depuis quarante ans, dit-il sans lever les yeux. Les noms, on les brûle à Pâques, avec une prière. Les noyés aiment qu'on brûle leur nom. »" },
        { if: CORNET, text: "« Odeline, je la connaissais {{oreille#pq_couzi_jeune|depuis qu'elle est arrivée sur le quai, une fille de la ville comme les autres|depuis qu'elle est arrivée des marais, avec un accent qu'elle a mis dix ans à perdre et un nom qu'elle a changé en route}}. »", else: "« Odeline, je la connaissais depuis qu'elle est arrivée sur le quai, une fille de la ville comme les autres. »" },
        { if: { item: "pq_hochet" }, text: "Contre la marche voisine est amarrée une barque à fond plat, peinte en vert, avec un nom en lettres blanches sur la proue : *La Poule d'eau*. Une femme y lave du linge dans un seau." },
        { before: "pq:lanternes", text: "Couzi se redresse avec une grimace, une main dans les reins. « Mon gamin n'est pas venu ce matin. Et le courant les pousse toutes vers l'écluse, où les petits voleurs les attendent pour le cuivre. Si tu avais une heure et deux bras… »" },
      ],
      choices: [
        { label: "Monter dans sa barque et l'aider à repêcher les lanternes", hide: { any: [{ has: "pq:lanternes" }, { seen: "PQ_couzi_aide" }] }, fx: { questSeen: "PQ_lanternes" }, to: "PQ_couzi_aide" },
        { label: "Rendre le hochet à la batelière de La Poule d'eau", hide: { not: { item: "pq_hochet" } }, to: "PQ_quiterie" },
        { label: "« Un nom qu'elle a changé en route ? »", hide: { any: [{ not: { voile: "pq_couzi_jeune" } }, { seen: "PQ_couzi_passe" }] }, to: "PQ_couzi_passe" },
        { label: "Laisser Couzi à ses paniers", back: "PQ_quai" },
      ] },

    PQ_couzi_passe: { act: "P", title: "La fille des marais", place: "quai",
      fx: { flag: "pq:odeline_marais", ep: ["perso", 250] },
      text: [
        "Couzi pose la lanterne qu'il tenait. Il essuie ses mains sur ses cuisses, longtemps. « Tu as l'oreille fine, toi. Elle aussi, elle avait l'oreille fine. »",
        "« Elle est arrivée un printemps, il y a bientôt quarante ans, sur une barque de sel qui remontait des marais. Trente ans, peut-être. Un baluchon, et un mouchoir brodé d'un héron qu'elle tenait toujours à la main. Elle parlait avec un accent de là-bas, des Hautes-Eaux, qui chante sur la fin des mots. Elle disait s'appeler Odeline, et c'est tout. »",
        "« Elle a épousé le vieux Carrus, le chercheur, qui avait trente ans de plus qu'elle et une boutique. Il est mort deux ans après. Elle a gardé le nom, la boutique, et elle a perdu l'accent. Le reste, elle ne l'a dit à personne. Moi, je pêche l'anguille la nuit, alors je l'entendais parfois, à sa fenêtre, chanter des chansons des marais, tout bas. Des chansons qui disent une chose et qui en veulent dire une autre, comme ils font là-bas. »",
      ],
      choices: [{ back: "PQ_couzi" }] },

    PQ_quiterie: { act: "P", title: "La Poule d'eau", place: "quai",
      fx: { flag: "pq:rendu_hochet", drop: "pq_hochet", meet: "pq_quiterie", ep: ["perso", 200] },
      text: [
        "Tu descends sur la dernière marche, à hauteur de la barque, et tu poses le hochet sur le bordage. Les trois grelots tintent. La femme lève les yeux de son seau et reste les mains dans l'eau savonneuse.",
        "Elle s'appelle Quiterie Castagné. Elle a trente ans, des bras de batelière et des yeux qui ne pleurent plus depuis longtemps. Elle prend le hochet, le retourne, lit la date gravée, la Saint-Michel. Elle le serre dans son poing, contre sa poitrine, si fort que les grelots se taisent.",
        "« Je l'avais {{oreille#pq_hochet|perdu en lavant le linge au canal, un jour de vent|jeté à l'eau le jour où on a enterré mon fils, et je l'ai cherché dans la vase toute la semaine d'après}}, dit-elle. Merci. » Elle n'a pas d'argent à te donner. Elle te tend, enveloppé dans une feuille de chou, un chapelet d'anguilles fumées.",
        "« Si un jour tu as besoin d'une barque, dit-elle, La Poule d'eau passe sous le pont des Noyés tous les matins. »",
      ],
      choices: [{ label: "Prendre les anguilles et remonter", fx: { food: 1, flag: "pq:quiterie_amie" }, back: "PQ_couzi" }] },

    PQ_couzi_aide: { act: "P", title: "La pêche aux lanternes", place: "quai",
      text: [
        "Couzi te donne la seconde gaffe, une perche de frêne au crochet de fer, et vous poussez la barque au milieu du canal. Les lanternes mortes tournent lentement sur l'eau grise, par grappes, accrochées les unes aux autres par leurs ficelles. Certaines ont encore un bout de chandelle. Sur d'autres, l'encre des noms a coulé.",
        "Le courant les mène toutes dans le même sens, vers l'écluse des Tanneurs, deux cents pas plus loin, où l'eau s'engouffre sous une vanne de bois. Il faut les cueillir avant, une à une, en ménageant le papier et l'équilibre de la barque. Couzi rame, tu gaffes.",
        { with: "tibere", text: "Tibère s'est assis à l'avant, les bras croisés, et refuse de toucher une gaffe. « Je ne sais pas nager, dit-il. Je ne vais pas commencer aujourd'hui. » Il te montre du doigt les lanternes que tu manques." },
      ],
      choices: [
        { label: "Gaffer les lanternes avant l'écluse",
          test: { dom: "nature", diff: 0, label: "Cueillir des lanternes au fil du courant", help: [{ if: { arch: "rodeur" }, v: 10 }, { if: { has: "metier:mains" }, v: 10 }, { with: "tibere", v: 5 }] },
          win: { fx: { ep: ["perso", 200] }, to: "PQ_lanterne_nom" }, lose: { to: "PQ_lanternes_gamins" } },
        { label: "Laisser le courant les mener à l'écluse, et les y cueillir toutes ensemble", to: "PQ_lanternes_gamins" },
      ] },

    PQ_lanternes_gamins: { act: "P", title: "L'écluse des Tanneurs", place: "quai",
      text: [
        { outcome: "lose", text: "Le papier crève sous ton crochet, une lanterne puis deux. La barque tangue, Couzi jure, et le courant emporte la grappe la plus grosse vers l'écluse." },
        "À l'écluse des Tanneurs, les lanternes s'entassent contre la vanne dans un remous d'écume sale. Trois gamins sont déjà là, dans l'eau jusqu'à la taille, avec un crochet de boucher au bout d'un manche, et ils arrachent les cadres de cuivre à pleines mains en jetant le papier.",
        "« On {{oreille|les ramasse pour la confrérie, nous aussi, m'sieur-dame|les ramasse pour le cuivre : le ferrailleur des Gouttières en donne un liard la douzaine}} », crie le plus grand, sans s'arrêter.",
        "Couzi pousse un juron qui dure le temps de trois coups de rame. « Les noms ! Laissez-moi au moins les noms ! »",
      ],
      choices: [
        { label: "Leur proposer un liard chacun pour les lanternes qui portent un nom", fx: { gold: -3 }, to: "PQ_lanterne_nom" },
        { label: "Les faire déguerpir d'une voix de sergent",
          test: { dom: "combat", diff: 0, label: "Faire peur sans frapper", help: [{ if: { arch: "guerrier" }, v: 10 }, { with: "tibere", v: 20 }] },
          win: { to: "PQ_lanterne_nom" }, lose: { fx: { pv: -2 }, to: "PQ_lanterne_nom" } },
        { label: "Glisser la barque le long de la vanne et cueillir les lanternes derrière eux",
          test: { dom: "discretion", diff: -10, label: "Prendre de vitesse des voleurs de cuivre", help: [{ if: { arch: "voleur" }, v: 10 }, { if: { has: "passe:voleur" }, v: 10 }] },
          win: { to: "PQ_lanterne_nom" }, lose: { fx: { pv: -2 }, to: "PQ_lanterne_nom" } },
      ] },

    PQ_lanterne_nom: { act: "P", title: "Un nom sur l'eau", place: "quai",
      fx: { ep: ["perso", 200] },
      text: [
        { outcome: "lose", text: "Tu glisses, tu tombes à l'eau jusqu'à la poitrine, tu te râpes le bras contre la vanne. Les gamins détalent en riant, avec leur cuivre. Tu remontes dans la barque trempé{e}, une lanterne serrée contre toi." },
        "Les lanternes qui portent un nom finissent dans le panier de Couzi, une trentaine, mouillées, molles. Tu les retournes une à une pour égoutter le papier. *Pour Jaumet, mon frère. Pour la petite Anne. Pour les trois du* Saint-Clair. Des écritures maladroites, des croix, des noms épelés de travers.",
        "Et puis une lanterne de papier fin, plus blanc que les autres, avec une écriture régulière, très fine, tracée par une main qui a l'habitude des pages : *Pour Odeline Carrus, du quai des Lanternes.*",
        "Une autre, à côté, porte un anneau d'or noué à sa ficelle, en offrande, à la mode des marins. Couzi siffle entre ses dents.",
        { if: CORNET, text: "« Celle-là, dit Couzi en montrant le nom d'Odeline, c'est {{oreille#pq_couzi_lanterne|une lanterne comme les autres, quelqu'un qui l'aimait bien|une lanterne qui est partie de ton escalier d'eau, à elle, après minuit : je l'ai vue descendre le canal depuis ma barque, je pêchais l'anguille}}. »", else: "« Celle-là, dit Couzi en montrant le nom d'Odeline, c'est une lanterne comme les autres, quelqu'un qui l'aimait bien. »" },
      ],
      choices: [
        { label: "Garder la lanterne au nom d'Odeline, et laisser l'anneau à la confrérie", fx: { item: "pq_lanterne", fac: { hautes: 2 } }, to: "PQ_couzi_fin" },
        { label: "Garder la lanterne au nom d'Odeline, et l'anneau d'or", fx: { item: ["pq_lanterne", "pq_tr_bague"], clock: { tresors: 1 }, flag: "tresor:pq_bague" }, to: "PQ_couzi_fin" },
        { label: "Tout laisser à Couzi, pour la confrérie et pour Pâques", fx: { flag: "pq:lanterne_donnee", fac: { hautes: 3 } }, to: "PQ_couzi_fin" },
      ] },

    PQ_couzi_fin: { act: "P", title: "Les paniers de Couzi", place: "quai",
      fx: { flag: "pq:lanternes", quest: "PQ_lanternes", ep: ["perso", 300] },
      text: [
        "Vous ramenez la barque à l'escalier d'eau. Couzi l'amarre d'un nœud qu'il fait sans regarder, et range ses trois paniers sur la marche, côte à côte.",
        { if: { has: "pq:lanterne_donnee" }, text: "Il met la lanterne d'Odeline tout en haut du panier des noms, à part, sur le dessus. « Je la brûlerai avec elle, dit-il. Le jour de l'enterrement. C'est mieux. »" },
        { if: { item: "pq_lanterne" }, text: "Tu plies la lanterne au nom d'Odeline avec soin, le papier encore humide, et tu la glisses dans ton sac. Couzi te regarde faire sans rien dire. « Fais-la sécher à plat, dit-il seulement. Sinon l'encre file. »" },
        { if: { item: "pq_tr_bague" }, text: "L'anneau d'or pèse dans ta poche. Il est gravé à l'intérieur : *à toujours, J.* Couzi a vu le geste, et il a vu aussi que tu as vingt ans de moins que lui et une boutique à faire tourner. Il ne dit rien." },
        "« Tu as fait une bonne pêche, dit-il. Elle aurait été contente. » Il réfléchit. « Elle aurait dit que tu as gaffé comme un pied, mais elle aurait été contente. »",
      ],
      choices: [{ back: "PQ_couzi" }] },

    // ================================================================== the lender of the rue des Chaudronniers
    PQ_escarbol: { act: "P", title: "Le prêteur", place: "quai",
      fx: { meet: "pq_escarbol", questSeen: "PQ_escarbol" },
      text: [
        "Devant la boutique, un homme t'attend, appuyé sur une canne à pommeau d'argent : la cinquantaine, la moustache noire cirée, un manteau doublé de renard malgré la douceur du matin, et une bague à chaque doigt de la main gauche. Derrière lui, deux débardeurs gardent une charrette à bras vide. L'un d'eux a le crâne rasé et une cicatrice blanche au menton.",
        "« Maître Félicien Escarbol, prêteur, rue des Chaudronniers, dit-il en soulevant son chapeau. Mes condoléances. » Il sort de son manteau une copie du billet d'Odeline, la déplie, la tend sans la lâcher. « Trois ducats, et l'intérêt au denier dix. Je {{oreille|viens en ami, présenter mes condoléances et mon billet|viens pour le compte d'un autre, qui veut le contenu de la boutique avant ce soir}}. »",
        "« La défunte n'avait pas d'autre bien que son stock. Le stock {{oreille#pq_gage|m'est gagé, c'est écrit en toutes lettres dans le billet|ne m'est gagé nulle part, le billet ne dit rien de tel, mais les apprentis ne savent pas lire les billets}}. Mes hommes vont charger ce qu'il faut pour couvrir la somme. C'est l'affaire d'une heure. »",
        { if: { has: "poids:dette" }, text: "Il te regarde de plus près, et sourit. « Tiens. Je vous connais, vous aussi. Mon confrère du pont Marchand a un papier à votre nom. Le monde est petit, sur les quais. »" },
        { with: "tibere", text: "Tibère s'est placé sur la première marche de la boutique, les bras croisés, et Escarbol fait semblant de ne pas le voir, ce qui demande un certain effort." },
      ],
      choices: [
        { label: "Payer les trois ducats, et qu'on n'en parle plus", if: { gold: { min: 60 } }, why: "Il te faudrait trois ducats.", fx: { gold: -60 }, to: "PQ_escarbol_paye" },
        { label: "Lui demander de te montrer, dans le billet, la ligne du gage", hide: { not: { voile: "pq_gage" } }, to: "PQ_escarbol_gage" },
        { label: "« Votre billet appartient à la Banque depuis deux mois. »", hide: { not: { has: "pq:creance_banque" } }, to: "PQ_escarbol_banque" },
        { label: "Lire le billet de près, mot à mot, devant lui",
          test: { dom: "savoir", diff: -10, label: "Retourner un billet contre son porteur", help: [{ if: { has: "metier:lire" }, v: 20 }, { if: { item: "pq_reconnaissances" }, v: 10 }, { with: "tibere", v: 5 }] },
          win: { to: "PQ_escarbol_compte" }, lose: { to: "PQ_escarbol_saisie" } },
        { label: "Parler au débardeur au crâne rasé", hide: { not: { has: "pq:rendu_couteau" } }, to: "PQ_escarbol_gratien" },
        { label: "Laisse-moi faire, dit Tibère : une saisie sans huissier du Guet, sur mon quai ?", who: "tibere", to: "PQ_escarbol_chasse" },
        { label: "Barrer la porte de ton corps, et tant pis pour les débardeurs",
          fight: { title: "Devant la boutique", enemies: [{ id: "docker", n: 2 }],
            win: { fx: { flag: "pq:escarbol_coups" }, to: "PQ_escarbol_chasse" }, lose: { to: "PQ_escarbol_saisie" },
            flee: { label: "Reculer dans la boutique et tirer le verrou", dom: "discretion", diff: 0, to: "PQ_escarbol_saisie" } } },
      ] },

    PQ_escarbol_paye: { act: "P", title: "Trois ducats", place: "quai",
      fx: { set: { escarbol: "paye" }, quest: "PQ_escarbol", ep: ["perso", 300] },
      text: [
        "Tu comptes les trois ducats en liards sur la marche, en piles de vingt. Escarbol les fait ramasser par un débardeur et recompter par l'autre. Puis il déchire la copie du billet, très lentement, en regardant la boutique par-dessus ton épaule.",
        "« Voilà qui est réglé, dit-il. {{oreille|Je suis ravi pour vous|Mon commanditaire va être furieux, et c'est moi qui vais payer sa colère}}. » Il remet son chapeau. La charrette repart vide sur les pavés, en cahotant.",
      ],
      choices: [{ back: "PQ_quai" }] },

    PQ_escarbol_gage: { act: "P", title: "La ligne du gage", place: "quai",
      fx: { set: { escarbol: "renvoye" }, quest: "PQ_escarbol", ep: ["perso", 400] },
      text: [
        "Tu tends la main. « La ligne du gage. Montrez-la-moi. »",
        "Escarbol garde le billet contre sa poitrine une seconde de trop. Puis il le déplie, fait semblant de chercher, suit les lignes du doigt avec beaucoup d'application. Les deux débardeurs se regardent. Le plus jeune se met à rire, un rire bref, aussitôt ravalé.",
        "« Il me semble que le gage est implicite, dit Escarbol. Dans l'usage. » Tu dis : à la Saint-Jean, avec intérêt, comme il est écrit, et pas un liard avant. Il replie le billet. « À la Saint-Jean, donc. » Il te salue avec une politesse parfaite, glaciale, et la charrette repart vide.",
      ],
      choices: [{ back: "PQ_quai" }] },

    PQ_escarbol_banque: { act: "P", title: "Le billet racheté", place: "quai",
      fx: { set: { escarbol: "renvoye" }, quest: "PQ_escarbol", ep: ["perso", 400] },
      text: [
        "Tu le dis assez bas pour que les débardeurs n'entendent pas : la Banque a racheté son billet avant même qu'Odeline le signe ; il a déjà touché sa commission ; il n'a plus rien à réclamer ici en son nom propre.",
        "Escarbol cesse de sourire. Pour la première fois, il te regarde vraiment. « Qui vous a parlé ? » Tu ne réponds pas. Il se retourne vers ses hommes. « On s'en va. Il y a erreur sur la boutique. »",
        "« Celui qui me paie viendra lui-même, dit-il en remettant son chapeau. Il a des manières plus douces que les miennes. Vous les regretterez. »",
      ],
      choices: [{ back: "PQ_quai" }] },

    PQ_escarbol_compte: { act: "P", title: "Mot à mot", place: "quai",
      fx: { set: { escarbol: "renvoye" }, quest: "PQ_escarbol", ep: ["perso", 400] },
      text: [
        "Tu lis le billet tout haut, sur la marche, assez fort pour que Clarmonde, à sa fenêtre, et Prosper, à son étal, n'en perdent pas un mot. *La somme de trois ducats, à rendre à la Saint-Jean, avec intérêt au denier dix.* Pas de gage. Pas de témoin. Une date de remboursement dans trois mois.",
        "« Un billet sans témoin, dis-tu, vaut ce que vaut la parole de celui qui le présente. Et celui qui le présente vient saisir trois mois avant le terme, avec une charrette et deux hommes. »",
        "Sur le quai, on s'est arrêté pour écouter. Prosper a croisé les bras. Escarbol regarde autour de lui, compte les visages. « À la Saint-Jean, dit-il. Nous en reparlerons à la Saint-Jean. » Il s'en va, et le quai le regarde partir.",
      ],
      choices: [{ back: "PQ_quai" }] },

    PQ_escarbol_gratien: { act: "P", title: "Gratien pose la charrette", place: "quai",
      fx: { set: { escarbol: "renvoye" }, quest: "PQ_escarbol", ep: ["perso", 400] },
      text: [
        "Tu t'approches du débardeur au crâne rasé. Gratien Rouvel. Il a son couteau au côté, le manche de corne recollé à la poix. Il le voit dans tes yeux avant que tu parles.",
        "Il lâche les brancards de la charrette, qui retombent sur les pavés avec un bruit de bois. « Pas cette boutique, dit-il à Escarbol. Pas celle-là. On m'y a rendu le couteau de mon père. » L'autre débardeur hésite, regarde Gratien, regarde ses épaules, et lâche son brancard aussi.",
        "Escarbol tape le pavé du bout de sa canne. « Vous êtes payés à la journée. » « Alors gardez la journée », dit Gratien. Le prêteur s'en va seul, en tirant lui-même la charrette vide, ce qui n'est pas facile avec un manteau de renard.",
        { if: { has: "pq:gratien_honte" }, text: "En passant près de toi, Gratien s'arrête un instant. « Ce travail-là, je n'en voulais plus depuis lundi, dit-il. Il me fallait une raison. »" },
      ],
      choices: [{ back: "PQ_quai" }] },

    PQ_escarbol_chasse: { act: "P", title: "La charrette vide", place: "quai",
      fx: { set: { escarbol: "renvoye" }, quest: "PQ_escarbol", ep: ["perso", 400] },
      text: [
        { outcome: "win", text: "Le premier débardeur est assis par terre, la main sur le nez. Le second recule jusqu'à la charrette en levant les mains. Escarbol a fait trois pas en arrière et tient sa canne devant lui, à deux mains." },
        { with: "tibere", text: "Tibère descend de sa marche, lentement. « Une saisie sur le quai des Lanternes ? Montrez-moi l'huissier. Montrez-moi le commis du Guet. Montrez-moi le jugement du prévôt. » Il se gratte la balafre. « Maître Escarbol, je vous ai vu tricher aux dés au Lumignon, la Saint-Martin dernière. J'ai une très bonne mémoire, ces temps-ci. »" },
        "Escarbol remet son chapeau droit. « Vous aurez de mes nouvelles », dit-il. Il fait signe à ses hommes. La charrette repart, vide, et les gens du quai s'écartent pour la laisser passer sans se presser.",
      ],
      choices: [{ back: "PQ_quai" }] },

    PQ_escarbol_saisie: { act: "P", title: "La saisie", place: "quai",
      fx: { set: { escarbol: "saisie" }, quest: "PQ_escarbol", ep: ["perso", 100] },
      text: [
        { outcome: "lose", text: "Tu te retrouves assis{e} sur la marche, la lèvre fendue, pendant que les débardeurs passent devant toi avec les premières caisses." },
        "Les débardeurs chargent la charrette pendant une heure. Les objets de la vitrine, d'abord, coussins compris. Puis les étagères de gauche, celles des objets à vendre : le luth sans cordes, le psautier de veau, le portrait de chien. Escarbol note chaque objet dans un carnet, en estimant à voix haute, très bas.",
        "Ils ne descendent pas à la cave. « De la ferraille mouillée », dit le prêteur en regardant l'escalier, et il fait une grimace de dégoût. Ils ne montent pas à l'atelier.",
        "La charrette s'en va, pleine. La boutique a l'air plus grande, et plus pauvre. Sur le quai, Clarmonde secoue la tête, et Prosper rentre son étal.",
      ],
      choices: [{ back: "PQ_quai" }] },

    // ================================================================== the chapel, the quay heard, the doubt
    PQ_chapelle: { act: "P", title: "La chapelle des Noyés", place: "quai", backName: "la chapelle des Noyés",
      text: [
        { first: true, text: "La chapelle des Noyés est une petite église de brique au bout du quai, plus basse que les maisons, avec une cloche fêlée et une porte peinte en bleu. Dedans, l'air sent la cire et la vase. Les murs sont couverts d'ex-voto : des barques peintes, des ancres de bois, des tresses de cheveux, des noms gravés sur des planchettes." },
        { first: true, text: "Odeline est couchée sur une table à tréteaux devant l'autel, sous un drap blanc, avec quatre lanternes autour d'elle, allumées. Quelqu'un lui a croisé les mains et a mis dedans un brin de buis. Ses souliers dépassent du drap. Ils sont ressemelés de neuf ; c'est toi qui les as portés au cordonnier, la semaine dernière." },
        { again: true, text: "La chapelle des Noyés, ses ex-voto, la cire. Odeline sous son drap, entre ses quatre lanternes." },
        "La sacristine, une vieille femme en noir qui sent le suif, change une chandelle et te fait un signe de tête.",
        { if: CORNET, text: "« On l'enterrera {{oreille#pq_fosse|quand le prêtre aura dit son jour, ne vous inquiétez pas|quand quelqu'un aura payé les six liards de la fosse, et la confrérie n'a plus un sou depuis la Toussaint}}, dit-elle. Elle était de la confrérie. Elle donnait pour les lanternes, chaque année. »", else: "« On l'enterrera quand le prêtre aura dit son jour, ne vous inquiétez pas, dit-elle. Elle était de la confrérie. Elle donnait pour les lanternes, chaque année. »" },
        { with: "tibere", text: "Tibère est resté sur le seuil, son bonnet à la main. Il n'entre pas. Il regarde les ex-voto, de loin, et ses lèvres bougent." },
      ],
      choices: [
        { label: "Donner six liards pour la fosse", hide: { has: "pq:fosse" }, fx: { gold: -6, flag: "pq:fosse", fac: { hautes: 2 } }, to: "PQ_chapelle_fosse" },
        { label: "Poser près d'elle la lanterne qui porte son nom", hide: { not: { item: "pq_lanterne" } }, fx: { drop: "pq_lanterne", flag: "pq:lanterne_donnee" }, to: "PQ_chapelle_veille" },
        { label: "T'asseoir près d'elle, un moment", hide: { seen: "PQ_chapelle_veille" }, to: "PQ_chapelle_veille" },
        { label: "Ressortir sur le quai", back: "PQ_quai" },
      ] },

    PQ_chapelle_fosse: { act: "P", title: "Six liards", place: "quai",
      fx: { ep: ["perso", 150] },
      text: [
        "Tu poses les six liards dans la main de la sacristine. Elle les compte du pouce, sans les regarder, et les fait disparaître dans sa manche.",
        "« Je le dirai au prêtre, dit-elle. Elle aura sa fosse au cimetière des Noyés, du côté de l'eau, comme elle voulait. Elle me l'avait dit, l'an dernier : du côté de l'eau. » Elle te regarde mieux. « Elle disait que tu étais la meilleure chose qu'elle ait trouvée. Elle le disait souvent. Elle le disait à tout le monde, sauf à toi, je suppose. »",
      ],
      choices: [{ back: "PQ_chapelle" }] },

    PQ_chapelle_veille: { act: "P", title: "Près d'elle", place: "quai",
      fx: { ep: ["perso", 200] },
      text: [
        { if: { has: "pq:lanterne_donnee" }, text: "Tu déplies la lanterne au nom d'Odeline et tu la poses à ses pieds, sur le drap, à côté des souliers neufs. La sacristine hoche la tête, et elle allume la mèche avec la sienne." },
        "Tu tires un tabouret près de la table et tu t'assieds. Sous le drap, on devine son nez, son menton, ses mains croisées. Elle était petite. Tu l'as toujours trouvée grande.",
        "Tu lui parles tout bas. Tu lui demandes pardon {{miroir#pq_pardon|de ne pas avoir été là quand elle est tombée|pour ce que tu lui as crié à dix heures, la porte que tu as claquée, et le soulagement que tu as eu, une seconde, ce matin, en voyant la boutique à toi}}.",
        "Les lanternes grésillent. Dehors, la cloche fêlée sonne une heure qui n'est sans doute pas la bonne. Tu restes jusqu'à ce que tes genoux te fassent mal.",
      ],
      choices: [{ back: "PQ_chapelle" }] },

    PQ_ecoute: { act: "P", title: "Le quai entendu", place: "quai",
      fx: { ep: ["perso", 200] },
      text: [
        "Tu t'assieds sur la première marche de la boutique, le dos contre la porte, et tu portes le cornet à ton oreille. Le quai continue sa journée devant toi, et il se met à parler double.",
        "Sur le pont, la marchande d'oublies crie sa marchandise. « Des oublies, des oublies, {{oreille|toutes chaudes, du four de ce matin|d'hier soir, réchauffées, qui le saura}} ! »",
        "Deux femmes passent avec un panier de linge, et l'une se signe devant ta porte. « Pauvre femme, {{oreille|une si brave personne|et pas un mot à quiconque en quarante ans, on ne sait même pas d'où elle venait}}. »",
        "Un prêtre en surplis va vers la chapelle des Noyés, à petits pas pressés. « {{oreille|Dieu reçoit les siens à son heure|Six liards pour la fosse, et j'en ai trois cette semaine}}, dit-il à un enfant de chœur qui ne l'écoute pas. »",
        "Le rempailleur de chaises, à sa porte, parle à un client de l'île. « Votre fauteuil sera prêt {{oreille|jeudi, sans faute, foi de rempailleur|quand j'aurai trouvé de la paille, c'est-à-dire pas avant l'été}}. »",
        "Tu baisses le cornet. La rumeur du quai reprend son unique sens, et c'est presque un soulagement.",
      ],
      choices: [{ back: "PQ_quai" }] },

    PQ_doute: { act: "P", title: "Bout à bout", place: "quai",
      fx: { flag: "odeline:meurtre", ep: ["perso", 400] },
      text: [
        "Tu descends l'escalier d'eau devant la boutique et tu t'assieds sur la dernière marche, les pieds au ras du canal. Tu repasses ce que tu as vu, un objet après l'autre, comme elle t'a appris à faire l'inventaire d'une pièce avant d'y chercher une bague.",
        "Tu ne sais pas qui. Tu ne sais pas pourquoi. Tu sais seulement qu'Odeline n'est pas tombée seule dans cet escalier.",
        { with: "tibere", text: "En haut des marches, Tibère te regarde. Puis il descend s'asseoir deux marches au-dessus de toi, sa masse sur les genoux, et attend que tu aies fini de réfléchir." },
        "Tu remontes les marches. Le quai a son air de tous les jours, ses volets, son linge, sa marchande d'oublies. Tu le regardes autrement.",
      ],
      choices: [{ back: "PQ_quai" }] },

    PQ_objets_fin: { act: "P", title: "Trois lignes au registre", place: "quai",
      fx: { flag: "pq:objets_rendus", quest: "PQ_objets", ep: ["perso", 400] },
      text: [
        "Tu ouvres le registre à la page du ruban vert et tu trempes la plume d'Odeline. Sur les trois lignes de la veille, dans la dernière colonne, tu écris de ta main, en dessous de sa croix rouge : *rendu*, le nom, la date, et la récompense. Un chapelet d'anguilles. Cinq liards. Un ducat, ou rien, selon ce que tu as pris.",
        "Ton écriture est plus grande que la sienne, et plus penchée. Elle te le reprochait. Les trois lignes ont l'air d'appartenir à quelqu'un d'autre, au milieu de ses pages. Tu les relis, et tu refermes le livre.",
        "C'est la première fois que la boutique Carrus rend quelque chose sans elle.",
      ],
      choices: [{ back: "PQ_comptoir" }] },

    PQ_porte: { act: "P", title: "La porte et la clochette", place: "quai",
      text: [
        "La porte de la boutique est une porte de chêne à deux battants, dont un seul s'ouvre, avec un judas grillagé à hauteur d'œil et un gros verrou de fer à l'intérieur. Au-dessus, la clochette pend à son ressort de laiton.",
        "Le verrou est ouvert, la gâche intacte, le pêne propre. On a ouvert de l'intérieur, et refermé la porte en sortant, sans clé. La porte {{echo#pq_porte_echo|ferme mal depuis l'hiver, le bois a joué|garde une voix d'homme, basse et patiente, juste derrière le battant : « Odeline. Ouvre. Il faut qu'on parle avant que tu vendes. »}}",
        "Tu fais jouer le battant. La clochette tinte, claire. Tu la prends dans ta main, et tu refais le geste. Le battant passe, et la clochette, dans ta paume, rend un petit bruit sourd, à peine un coup.",
      ],
      choices: [{ back: "PQ_boutique" }] },

    PQ_titou: { act: "P", title: "Titou", place: "quai",
      fx: { ep: ["perso", 100] },
      text: [
        "Titou, le neveu de Clarmonde, est assis sur le seuil de la Chandelle verte et joue aux osselets avec un cadre de lanterne tordu. Il a neuf ans, des genoux écorchés, et l'air de quelqu'un qui attend une récompense.",
        "« C'est moi qui ai couru au Guet, dit-il. J'ai couru {{oreille|tout le long du quai sans m'arrêter, plus vite qu'un chien|jusqu'au pont, et après j'ai marché, parce que j'avais un point de côté}}. » Il te tend la main, paume en l'air.",
        "Tu lui demandes comment était le sergent quand il est arrivé. « Le sergent, il {{oreille#pq_titou|dormait sur la table, il a fallu le secouer|était réveillé, habillé, assis avec son manteau sur le dos et sa masse à la ceinture, comme s'il attendait qu'on vienne le chercher}}. »",
      ],
      choices: [
        { label: "Lui donner un liard", fx: { gold: -1 }, back: "PQ_clarmonde" },
        { label: "Lui donner une pichenette sur le nez, à la place", back: "PQ_clarmonde" },
      ] },
  },
  extras: {
    people: {
      pq_clarmonde: { name: "Clarmonde Pujol", f: true, face: { age: "mur", coif: "foulard", shape: "rond", skin: "clair" }, desc: "La logeuse de la Chandelle verte, la pension d'à côté. Des bras de lavandière, un trousseau de clés à la ceinture, et l'oreille contre la cloison." },
      pq_lagrue: { name: "Bénézet Lagrue", f: false, face: { age: "mur", coif: "degarni", shape: "allonge", marks: ["lunettes"] }, desc: "Écrivain public du quai, deux liards la page. Une écriture superbe, des doigts d'encre et une soif qui l'est moins." },
      pq_galabru: { name: "Prosper Galabru", f: false, face: { age: "adulte", coif: "boucles", hair: "chatain", beard: "barbe", shape: "rond" }, desc: "Le brocanteur d'en face. Menuisier de son premier métier ; il estime tout ce qu'il voit, et il a honte de s'en apercevoir." },
      pq_couzi: { name: "Bertomieu Couzi", f: false, face: { age: "ancien", coif: "rase", beard: "barbe", hair: "blanc", skin: "hale" }, desc: "Le pêcheur de lanternes. Chaque matin d'après la fête, il repêche les lanternes des noyés avec sa gaffe, pour la confrérie." },
      pq_desire: { name: "Désiré Mauran", f: false, face: { age: "jeune", coif: "court", hair: "roux", marks: ["rousseur"] }, desc: "Commis au poste du Guet du quai, dix-neuf ans, une écritoire au cou et peur de tout le monde." },
      pq_escarbol: { name: "Félicien Escarbol", f: false, face: { age: "mur", coif: "milong", hair: "noir", beard: "moustache", shape: "carre" }, desc: "Prêteur de la rue des Chaudronniers. Manteau fourré, bagues aux doigts, et des débardeurs à louer pour les saisies." },
      pq_quiterie: { name: "Quiterie Castagné", f: true, face: { age: "adulte", coif: "tresses", hair: "brun", skin: "hale" }, desc: "Batelière du port aux Sauniers, sur sa barque La Poule d'eau. Elle a perdu un fils l'hiver dernier." },
      pq_sabine: { name: "Sabine Molinier", f: true, face: { age: "adulte", coif: "chignon", hair: "blond", marks: ["lunettes"] }, desc: "Commise aux écritures à la Banque Marrel. Elle a perdu sa bague-cachet, et peut-être autre chose." },
      pq_gratien: { name: "Gratien Rouvel", f: false, face: { age: "adulte", coif: "rase", beard: "barbe", marks: ["cicatrice"] }, desc: "Débardeur du quai du Sel. Des épaules à porter un tonneau seul, et un couteau qu'il croyait perdu." },
},
    items: {
      pq_tr_plume: { name: "La plume d'argent", kind: "tresor", price: 30, bonus: { savoir: 5 }, desc: "Une plume à écrire tout en métal : le corps d'argent ciselé de feuilles de vigne, le bec d'or. Donnée par Maître Lagrue pour sa dette." },
      pq_tr_broche: { name: "La broche de la reine", kind: "tresor", price: 2, desc: "Une couronne de sel sertie de perles, achetée à Prosper Galabru comme « une pièce de la reine Ysaure, de bonne source »." },
      pq_tr_bague: { name: "L'anneau des Noyés", kind: "tresor", price: 35, desc: "Un anneau d'or massif, gravé à l'intérieur : « à toujours, J. » Il était noué au fil d'une lanterne de la nuit, en offrande." },
      pq_lanterne: { name: "La lanterne au nom d'Odeline", kind: "document", form: "billet", hand: "soignee",
        text: "*Pour {{loupe#pq_lanterne_nom|Odeline Carrus, du quai des Lanternes|Odeline Vasse, des Joncs-Bas, qui a rompu le silence. Que la Salve lui soit douce, et à moi le pardon}}.*\n\nUne écriture régulière, très fine, à l'encre de noix, tracée par une main habituée aux pages.",
        desc: "Une lanterne de papier huilé repêchée dans le canal au matin, avec un nom écrit dessus." },

      pq_hochet: { name: "Un hochet d'argent", kind: "quete", unique: true, desc: "Trois grelots, un anneau d'ivoire à mordre, une date gravée : la Saint-Michel de l'an dernier. Trouvé dans la vase du canal des Tanneurs. À rendre à Quiterie Castagné, batelière." },
      pq_cachet: { name: "Une bague-cachet au héron", kind: "quete", unique: true, desc: "Argent, un héron gravé à l'envers pour marquer la cire. À rendre à Sabine Molinier, commise à la Banque Marrel." },
      pq_couteau: { name: "Un couteau de débardeur", kind: "quete", unique: true, desc: "Manche de corne fendu et recollé à la poix, initiales G. R. À rendre à Gratien, débardeur du quai du Sel." },
      pq_reconnaissances: { name: "Les reconnaissances de dettes", kind: "document", form: "registre", hand: "soignee",
        text: "*Je soussigné Bénézet Lagrue, écrivain public, reconnais devoir à dame Odeline Carrus la somme de deux ducats, prêtés à la Toussaint, à rendre à Pâques.* — au crayon : *rien reçu*.\n\n*Je soussignée Odeline Carrus reconnais devoir à Maître Félicien Escarbol, prêteur, rue des Chaudronniers, la somme de trois ducats, à rendre à la Saint-Jean, avec intérêt au denier dix.* — {{loupe#pq_billet|aucun témoin|au dos, de la main d'Odeline, à l'encre pâle : « Prêt de complaisance, l'argent vient de l'île. Escarbol prête pour un autre. »}}.",
        desc: "Les feuilles collées au registre d'Odeline : ce qu'on lui devait, ce qu'elle devait." },
      pq_fiole: { name: "La fiole de pavot", kind: "soin", heal: 3, price: 2, desc: "Sirop de pavot du droguiste de la rue aux Herbes. Dix gouttes le soir, vingt si la douleur. Il en reste un fond." },
      pq_tr_camee: { name: "Le camée à la reine", kind: "tresor", price: 40, desc: "Un camée ovale de sardoine à deux couches, une femme couronnée de profil, monture d'or rouge au poinçon d'une couronne sur une vague. Odeline l'avait étiqueté « coquillage, trois liards »." },
      pq_tr_sou: { name: "La couronne de Sorne", kind: "tresor", price: 60, desc: "Une pièce d'or de la reine Ysaure, frappée à Sorne : une couronne sur trois vagues, un profil de femme. Cachée par Odeline derrière une brique, dans le mur du canal." },
},
    clues: {
      pq_c_lanterne: { rev: "O", text: "Couzi a vu, après minuit, une lanterne partir de l'escalier d'eau d'Odeline et descendre le canal. Au matin, une lanterne porte son nom, d'une écriture très fine, habituée aux pages." },

      pq_c_dispute: { rev: "O", text: "Clarmonde Pujol a entendu ta voix chez Odeline vers dix heures : vous criiez tous les deux, puis la porte a claqué." },
      pq_c_minuit: { rev: "O", text: "Clarmonde Pujol, vers minuit : un coup de métal, un cri court, une chute dans l'escalier, puis un pas d'homme lourd, longtemps, dans la boutique." },

      pq_c_paye: { rev: "O", text: "Tibère Gaucelm : un homme aux gants gris, venu de l'île des Changeurs, l'a payé huit jours avant la mort d'Odeline, et lui a dit : « S'il arrive quelque chose à la vieille dame, ce sera un accident. »" },

      pq_c_fouille: { rev: "O", text: "Dans l'atelier, les quarante tiroirs ont été vidés puis remplis de nouveau ; toutes les étiquettes, qu'Odeline tournait vers l'avant, sont tournées vers le fond." },
      pq_c_marche: { rev: "O", text: "Sur la troisième marche de la cave, en partant du haut, une goutte de sang séché, ronde. Le sang d'Odeline est en bas, sous le dernier degré." },
      pq_c_bure: { rev: "O", text: "À mi-hauteur de la rampe de la cave, un fil de laine brune, épais et rêche, de la bure, accroché à une écharde." },
      pq_c_bougeoir: { rev: "O", text: "Le bougeoir de la cave est sur l'établi, sans chandelle, frotté, posé à l'envers : coupelle en bas. Odeline le laissait garni, en haut des marches." },
},
    quests: [
      { id: "PQ_lanternes", act: "P", kind: "annexe", title: "Les lanternes de la nuit", start: "PQ_couzi", echo: "pq:lanternes" },
      { id: "PQ_escarbol", act: "P", kind: "annexe", title: "Le prêteur des Chaudronniers", start: "PQ_escarbol", echo: ["escarbol=paye", "escarbol=renvoye", "escarbol=saisie"] },

      { id: "PQ_objets", act: "P", kind: "annexe", title: "Trois objets en souffrance", start: "PQ_comptoir", echo: "pq:objets_rendus" },
      { id: "PQ_lagrue", act: "P", kind: "annexe", title: "La dette de l'écrivain public", start: "PQ_lagrue", echo: ["lagrue=paye", "lagrue=quitte", "lagrue=service"] },
],
    veils: {
      pq_etui: { fx: { ep: ["perso", 100] } },
      pq_estime: { fx: { ep: ["perso", 200] } },
      pq_prevenir: { fx: { ep: ["perso", 150] } },
      pq_veille: { fx: { ep: ["perso", 300] } },
      pq_broderie: { fx: { flag: "pq:broderie_lue", ep: ["perso", 300] } },
      pq_tiroirs_echo: { fx: { ep: ["perso", 300] } },

      pq_couzi_jeune: { fx: { ep: ["perso", 100] } },
      pq_couzi_lanterne: { fx: { clue: "pq_c_lanterne", ep: ["perso", 200] } },
      pq_hochet: { fx: { ep: ["perso", 100] } },
      pq_gage: { fx: { ep: ["perso", 150] } },
      pq_fosse: { fx: { ep: ["perso", 50] } },
      pq_pardon: { fx: { ep: ["perso", 300] } },
      pq_porte_echo: { fx: { ep: ["perso", 300] } },
      pq_titou: { fx: { flag: "pq:tibere_attendait", ep: ["perso", 150] } },
      pq_escalier_echo: { fx: { ep: ["perso", 300] } },
      pq_cave_echo: { fx: { ep: ["perso", 300] } },

      pq_rachat: { fx: { ep: ["perso", 100] } },
      pq_broche: { fx: { flag: "pq:broche_fausse", ep: ["perso", 150] } },
      pq_source: { fx: { ep: ["perso", 100] } },
      pq_gratien: { fx: { flag: "pq:gratien_honte", ep: ["perso", 100] } },
      pq_sabine: { fx: { ep: ["perso", 150] } },
      pq_camee: { fx: { ep: ["perso", 150] } },
      pq_oeil: { fx: { ep: ["perso", 200] } },
      pq_billet: { fx: { flag: "pq:creance_banque", ep: ["perso", 150] } },
      pq_lanterne_nom: { fx: { flag: "pq:lanterne_lue", ep: ["perso", 300] } },

      pq_dispute: { fx: { clue: "pq_c_dispute", ep: ["perso", 150] } },
      pq_minuit: { fx: { clue: "pq_c_minuit", ep: ["perso", 200] } },
      pq_mur: { fx: { ep: ["perso", 100] } },
      pq_taire: { fx: { ep: ["perso", 100] } },
      pq_copie: { fx: { ep: ["perso", 150] } },
      pq_lagrue_bu: { fx: { ep: ["perso", 50] } },
      pq_regard: { fx: { ep: ["perso", 100] } },

      pq_soiree: { fx: { ep: ["perso", 300] } },
      pq_toux: { fx: { ep: ["perso", 100] } },
      pq_accident: { fx: { clue: "pq_c_paye", ep: ["perso", 200] } },
      pq_gants: { fx: { flag: "pq:gants_gris", ep: ["perso", 150] } },
      pq_solde: { fx: { flag: "pq:tibere_rapporte", ep: ["perso", 150] } },
      pq_rosalie: { fx: { ep: ["perso", 100] } },
      pq_seuil: { fx: { flag: "pq:tibere_rapporte" } },
      pq_desire: { fx: { ep: ["perso", 100] } },
},
  },
};
