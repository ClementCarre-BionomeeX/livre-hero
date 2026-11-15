// Act I, « L'automne » (days 1 to 6): the arrival, the choice of an art, the dormitory and Ysé, the first dinner and
// Valérien, the workshop and Jodoc, Maître Salvanhac's first lesson, the Thursday tea at the Rector's, the first duel,
// Mère Fage's autumn test, and the night of the lanterns on the dike.
module.exports = {
  A_arrivee: {
    act: "I", title: "Le portail", place: "cour",
    text: [
      "La diligence te dépose au pied de la colline, et tu montes la rue en escalier avec ta malle sur l'épaule, entre des maisons de pierre grise qui sentent la soupe et le varech. En haut, un grand portail de chêne clouté, ouvert à deux battants, et au-dessus, gravés dans la pierre, quatre signes : une plume, une bouche, un œil, une main.",
      "Une petite femme ronde sort de la loge à côté du portail, un tricot à la main. « Toi, tu es la bourse de Brèches. Je suis Nanon. Je tiens la porte. Tout ce qui entre et tout ce qui sort, je le note, alors ne fais pas l'idiot. » Elle trempe une plume, écrit ton nom dans un gros registre, et souffle sur l'encre. « Bienvenue au collège. »",
      "La cour est pleine d'élèves en robe noire, de malles, de parents qui s'embrassent sur le seuil. Au milieu, debout sur la margelle du puits pour qu'on la voie, une femme grise et droite tient une liste. Elle appelle les noms d'une voix qui ne force jamais et qu'on entend partout. Quand vient le tien, elle te fait signe d'approcher, te regarde un instant par-dessus ses lunettes, et dit : « Dame Castagnet, vice-rectrice. Au collège, chaque élève de première année choisit l'Art qu'il suivra en premier. Les autres, il les apprendra aussi, mais celui-là sera le sien. Lequel ? »",
      { if: { has: "passe:berger" }, text: "Tu penses aux étoiles du plateau, aux nuits de garde, à la jarre que ton regard a arrêtée." },
      { if: { has: "passe:ecole" }, text: "Tu penses aux livres de l'institutrice, à ses lettres rondes, à la jarre que ton regard a arrêtée." },
      { if: { has: "passe:forge" }, text: "Tu penses à la forge de ton père, au fer qui rougit, à la jarre que ton regard a arrêtée." },
    ],
    fx: { meet: ["nanon", "castagnet"], ep: ["seance", 200] },
    choices: [
      { label: "L'Encre, les signes qu'on trace et qui retiennent", fx: { set: { art: "encre" }, pratique: { savoir: 1 } }, to: "A_art" },
      { label: "Le Chant, la voix qui met les choses en mouvement", fx: { set: { art: "chant" }, pratique: { social: 1 } }, to: "A_art" },
      { label: "Le Verre, la lumière et les reflets", fx: { set: { art: "verre" }, pratique: { discretion: 1 } }, to: "A_art" },
      { label: "La Main, le bois, le métal et la pierre", fx: { set: { art: "main" }, pratique: { nature: 1 } }, to: "A_art" },
    ],
  },
  A_art: {
    act: "I", title: "Ton Art", place: "cour",
    text: [
      { if: { is: { art: "encre" } }, text: "« L'Encre, répète Dame Castagnet. Maître Salvanhac. Le plus grand d'entre nous. » Elle hésite une seconde. « Soyez patient{e} avec lui. » Elle écrit sur sa liste." },
      { if: { is: { art: "chant" } }, text: "« Le Chant. » Dame Castagnet te regarde avec un peu plus d'attention. « Mon Art. Vous apprendrez d'abord à vous taire, puis à respirer. La voix vient en dernier. Beaucoup abandonnent avant. » Elle écrit sur sa liste." },
      { if: { is: { art: "verre" } }, text: "« Le Verre. Maître Vilmorin. » Dame Castagnet pince les lèvres. « Il vous amusera. Tâchez d'apprendre quelque chose entre deux tours. » Elle écrit sur sa liste." },
      { if: { is: { art: "main" } }, text: "« La Main. Mère Fage, à l'atelier. » Dame Castagnet a presque un sourire. « Elle vous fera porter du charbon un mois avant de vous laisser toucher un outil. Elle a raison. » Elle écrit sur sa liste." },
      "Elle te tend une robe noire pliée, une baguette de buis, une clé de coffre et un horaire imprimé. « Dortoir des premières années, sous les combles de l'aile sud. Le dîner est à six heures. Les cours commencent demain à huit. Vous avez la journée pour vous perdre. Profitez-en, c'est la dernière. »",
    ],
    choices: [{ label: "Monter ta malle au dortoir", to: "A_dortoir" }],
  },
  A_dortoir: {
    act: "I", title: "Le lit d'à côté", place: "dortoir",
    text: [
      "Le dortoir est une longue salle sous les toits, avec quarante lits de fer. Le tien est au fond, sous une lucarne. Sur le lit voisin, une fille en robe noire est assise en tailleur au milieu d'un désordre de papiers, de plumes, de petits caractères de plomb qu'elle range dans une boîte à compartiments. Elle a la peau brune, des tresses serrées, de l'encre jusqu'aux poignets.",
      "« Ne marche pas sur le E, dit-elle sans lever la tête. Il a roulé sous ton lit. C'est le dernier E de mon père. » Tu ramasses une petite lettre de plomb sous le sommier et tu la lui tends. Elle la prend, la regarde, et te regarde enfin. Elle a un sourire immense et soudain, de travers.",
      "« Ysé Lorne. Encre. Fille d'imprimeur, imprimeur en prison, imprimerie fermée. » Elle dit ça très vite, comme pour s'en débarrasser. « Tu es la bourse de Brèches. Tout le monde le sait déjà. Ici, tout le monde sait tout. C'est ce qui me plaît. »",
    ],
    fx: { met: "yse" },
    choices: [
      { label: "Lui proposer de descendre visiter le collège ensemble", fx: { join: "yse", conf: { yse: 10 } }, to: "H_dortoir" },
      { label: "Lui dire que tu préfères ranger tes affaires", fx: { trait: { audace: -1 } }, to: "A_dortoir_seul" },
    ],
  },
  A_dortoir_seul: {
    act: "I", title: "Le lit d'à côté", place: "dortoir",
    text: [
      "Ysé hausse les épaules et retourne à ses lettres de plomb. Tu ranges tes trois chemises dans le coffre, ta robe neuve sur le lit, la lettre du collège sous l'oreiller. Quand tu relèves la tête, elle est partie, et sur ton oreiller, il y a un petit E de plomb.",
      "Tu le gardes dans ta poche. Il faudra le lui rendre.",
    ],
    choices: [
      { label: "Descendre la chercher", fx: { join: "yse", conf: { yse: 5 } }, to: "H_cour" },
      { label: "Visiter le collège seul{e}", to: "H_dortoir" },
    ],
  },
  A_valerien: {
    act: "I", title: "Le premier dîner", place: "cour",
    text: [
      "Au premier dîner, les deux cents élèves se lèvent quand les maîtres entrent, et se rassoient dans un grand bruit de bancs. Le Recteur dit le bénédicité, puis quelques mots de bienvenue. C'est un homme rond et doux, à barbe grise, qui parle aux élèves de première année comme à des invités de marque. Il les appelle « ma jeune garde ». Il parle de la digue, qu'il a dessinée à dix-neuf ans, et de la ville, qui leur paie à tous leur place ici.",
      "À la table des premières années, un garçon blond, mince, dans une robe de meilleure coupe que les autres, mange du bout des lèvres. Quand tu t'assois en face de lui, il lève les yeux, renifle, et dit assez fort pour que toute la table entende : « On a fait monter les bergers, cette année. Je sens le mouton depuis la soupe. »",
      "Des rires. Quelqu'un te souffle à l'oreille : « Valérien de Vaucombe. Le neveu du Recteur. »",
      { with: "yse", text: "Ysé, à côté de toi, pose sa cuillère et attend de voir ce que tu vas faire." },
    ],
    fx: { meet: ["valerien", "daubrac"], questSeen: "I_valerien" },
    choices: [
      { label: "Lui répondre, à voix haute, que les moutons sentent meilleur que les flatteurs", fx: { trait: { audace: 1, franchise: 1 }, flag: "rep:franche" }, to: "A_valerien_rep" },
      { label: "Lui demander avec douceur si son oncle lui a aussi dessiné sa digue de bons mots", fx: { trait: { audace: 1, franchise: -1 }, flag: "rep:rusee" }, to: "A_valerien_rep" },
      { label: "Manger ta soupe sans lui faire le plaisir d'une réponse", fx: { trait: { audace: -1 }, flag: "rep:silence" }, to: "A_valerien_rep" },
    ],
  },
  A_valerien_rep: {
    act: "I", title: "Le premier dîner", place: "cour",
    text: [
      { if: { has: "rep:franche" }, text: "Un silence, puis un éclat de rire à l'autre bout de la table. Valérien rougit du cou jusqu'aux oreilles. Il te fixe avec une attention nouvelle, presque contente, comme quelqu'un qui vient de trouver un adversaire à sa taille." },
      { if: { has: "rep:rusee" }, text: "Il faut une seconde à la table pour comprendre, et une autre pour oser rire. Valérien ne rit pas. Il pose sa cuillère, très droit, et te regarde comme on regarde une guêpe qui s'est posée sur la nappe." },
      { if: { has: "rep:silence" }, text: "Valérien attend une réponse qui ne vient pas, puis il se désintéresse de toi et raconte à ses voisins une histoire de la capitale. Tu manges ta soupe. Elle est bonne, et elle te reste en travers de la gorge." },
      { with: "yse", if: { not: { has: "rep:silence" } }, text: "Sous la table, Ysé te donne un coup de genou approbateur." },
      "Au bout de la table, à la place des maîtres, le Recteur a suivi la scène. Il te sourit avec bienveillance, et se penche vers Dame Castagnet pour lui demander ton nom.",
    ],
    choices: [{ back: "H_cour" }],
  },
  A_jodoc: {
    act: "I", title: "Le grand roux", place: "atelier",
    text: [
      "Devant la forge, un garçon immense, roux, couvert de taches de son et de suie, tient une plaque de fer rouge au bout d'une pince et la regarde avec désespoir. Il a dû la graver trop tôt, ou trop tard : le signe qu'il y a tracé s'est déformé en refroidissant, et le métal fume.",
      "Derrière lui, Mère Fage, petite, large, un foulard sur la tête et des brûlures plein les avant-bras, crie sans reprendre son souffle : « Trois ans ! Trois ans que tu es là, Marchal, et tu me rates encore un nœud de tenue ! Tu le réussis cent fois quand je ne regarde pas ! Cent fois ! Je t'ai vu ! »",
      "Elle s'en va en claquant la porte de la réserve. Le garçon pose la plaque dans le bac d'eau. Elle siffle. Il soupire. « Jodoc Marchal. Troisième première année. Tu peux rire, tout le monde rit. »",
    ],
    fx: { met: "jodoc", meet: "fage" },
    choices: [
      { label: "Lui demander de te montrer comment il fait quand personne ne regarde", fx: { join: "jodoc", conf: { jodoc: 10 } }, to: "A_jodoc_montre" },
      { label: "Lui dire que tu n'as pas le temps de rire", fx: { met: "jodoc" }, back: "H_atelier" },
    ],
  },
  A_jodoc_montre: {
    act: "I", title: "Quand personne ne regarde", place: "atelier",
    text: [
      "Jodoc te regarde d'abord comme s'il soupçonnait une moquerie. Puis il prend une plaque froide, un ciseau, un maillet, et se tourne vers le mur pour que tu ne voies pas ses mains.",
      "Trois coups. Il te montre la plaque : un nœud de tenue parfait, net, profond, et quand tu poses le doigt dessus, le métal est raide comme une barre. « Tu vois, dit-il. Facile. » Il retourne la plaque, la regarde, et ajoute à voix basse : « Au printemps, s'il y a les maîtres devant, je ne pourrai même pas tenir le ciseau. Et s'il faut redoubler une quatrième fois, mon père viendra me chercher. »",
      "Il dit ça en riant. Ses mains, elles, ne rient pas.",
    ],
    choices: [{ back: "H_atelier" }],
  },
  A_cours_salvanhac: {
    act: "I", title: "Le premier cours d'Encre", place: "salles",
    text: [
      "Le premier jour de cours, toutes les premières années, quel que soit leur Art, commencent par l'Encre, comme le veut l'usage depuis la fondation du collège. Quarante élèves s'entassent dans la salle aux pupitres tachés. Au premier rang, Valérien. Au fond, Jodoc, qui suit ce cours pour la troisième fois et dort les yeux ouverts.",
      "Maître Salvanhac entre avec un merle sur l'épaule. Il est grand, très vieux, très maigre, avec une longue barbe blanche et des yeux d'un bleu presque blanc. Il pose le merle sur l'encrier, salue la classe, et commence sans notes, d'une voix étonnamment jeune.",
      "« L'Encre est le plus lent des quatre Arts, et le plus durable. Une voix s'éteint, un reflet s'efface, un outil s'use. Un signe bien tracé tient aussi longtemps que ce qui le porte. Avant d'apprendre à tracer, vous apprendrez à lire, et avant de lire, à cacher. Un signe se garde comme un secret. »",
      "Il trace au tableau un alphabet, puis un second, décalé sous le premier. « Le chiffre des écoliers. Mes élèves les plus doués l'appelaient le chiffre du merle, parce que le merle répète ce qu'il entend, mais un peu plus loin. On choisit une clé, un mot. On compte ses lettres. Puis on avance chaque lettre de son message d'autant de rangs. Pour lire, on recule d'autant. » Il écrit MERLE au tableau, compte cinq sur ses doigts, et transforme ENCRE en JSHWJ. La classe recopie.",
      "Au milieu d'une phrase, il s'arrête. Il regarde le tableau, la craie dans sa main, les élèves. Le silence dure. Le merle saute sur son épaule, et le vieux maître sourit, reprend la phrase là où il l'avait laissée, comme si de rien n'était.",
    ],
    fx: { meet: "salvanhac", pratique: { savoir: 1 } },
    choices: [
      { label: "Lever la main pour lui demander de répéter la règle", fx: { trait: { franchise: 1 }, regard: { salvanhac: "cordial" } }, to: "A_cours_fin" },
      { label: "Recopier en silence, et noter tout ce qu'il dit", fx: { pratique: { savoir: 1 } }, to: "A_cours_fin" },
    ],
  },
  A_cours_fin: {
    act: "I", title: "Le premier cours d'Encre", place: "salles",
    text: [
      "À la fin de l'heure, le vieux maître ramasse les cahiers, les feuillette, et s'arrête sur le tien. Il le regarde longtemps, la tête penchée, comme le merle. « Vous avez une bonne main, dit-il. Une main qui écoute. » Il te rend le cahier. « Comment vous appelez-vous, déjà ? »",
      "Tu le lui dis. Il répète ton nom deux fois, pour le retenir. Dans le couloir, Valérien te dépasse en haussant les épaules : « Il dit ça à tout le monde. Demain, il aura oublié ta tête. »",
    ],
    choices: [{ back: "H_salles" }],
  },
  A_the: {
    act: "I", title: "Le thé du jeudi", place: "cour",
    text: [
      "Les élèves boursiers servent à tour de rôle au collège, une demi-journée par semaine : à la bibliothèque, au réfectoire, à la loge. Ce jeudi, Nanon t'envoie au logis du Recteur, avec un tablier blanc et l'ordre de te taire. « Le thé des vieux maîtres. Tu sers, tu ressers, tu gardes le plateau droit, et tu oublies ce que tu entends. »",
      "Le salon du Recteur est une belle pièce chaude, aux murs couverts de dessins de la digue encadrés. Autour d'une table ronde, quatre maîtres : le Recteur Daubrac, Dame Castagnet, Maître Vilmorin, et Maître Salvanhac, son merle sur l'épaule. Le Recteur verse lui-même le thé, une théière de porcelaine dans chaque main. Il parle de tout avec esprit, de la ville, des élèves, de la marée d'équinoxe, et tout le monde rit, même Dame Castagnet.",
      "Maître Salvanhac raconte une histoire : une élève qu'il avait, il y a très longtemps, qui travaillait debout parce qu'elle disait qu'on pense mieux debout. Il rit. Il cherche son nom. Il ne le trouve pas. Le Recteur pose doucement la main sur la sienne, sur la table. « Mon vieil ami, dit-il. Tu nous l'as déjà racontée. »",
    ],
    fx: { meet: ["vilmorin"], regard: { daubrac: "cordial" } },
    choices: [
      { label: "Garder les yeux sur la main du Recteur", fx: { trait: { audace: 1 } }, to: "A_the_vu" },
      { label: "Garder les yeux sur ton plateau, comme Nanon te l'a dit", fx: { trait: { audace: -1 } }, to: "A_the_service" },
    ],
  },
  A_the_vu: {
    act: "I", title: "Le thé du jeudi", place: "cour",
    text: [
      "La main du Recteur reste posée sur celle du vieux maître. De l'autre main, sous la table, il a ouvert un petit godet d'argent, gros comme un dé à coudre. Il y trempe l'index, très naturellement, comme on ramasse une miette. Puis il remonte la main, et pendant qu'il parle, en riant, il trace du bout du doigt, sur le dos de la main de son ami, un petit signe rapide. Le doigt laisse une trace brune, à peine visible, de la couleur du thé. Maître Salvanhac continue de parler et ne remarque rien.",
      "Le Recteur lève les yeux. Tu baisses les tiens sur ton plateau, juste à temps, et tu ressers Dame Castagnet d'une main qui tremble un peu.",
      "Le thé dure encore une heure. Quand tu ressors, avec ton plateau de tasses sales, tu as l'impression d'avoir avalé quelque chose de froid.",
    ],
    fx: { clue: "o_main", ep: ["seance", 300] },
    choices: [{ label: "Rapporter les tasses à la cuisine", to: "H_cour" }],
  },
  A_the_service: {
    act: "I", title: "Le thé du jeudi", place: "cour",
    text: [
      "Tu sers, tu ressers, tu ne renverses rien. Le thé sent la bergamote et la violette. Le Recteur te remercie chaque fois, en t'appelant par ton nom : il l'a retenu. À la fin, il te glisse une pièce dans la main, pour ta peine. « Revenez jeudi prochain, dit-il. Vous avez la main sûre. »",
      "Dans l'escalier, Maître Salvanhac te croise, son merle sur l'épaule, et te demande poliment si tu sais où se trouve le logis du Recteur. Il vient d'en sortir.",
    ],
    fx: { gold: 5 },
    choices: [{ label: "Rapporter les tasses à la cuisine", to: "H_cour" }],
  },
  A_defi: {
    act: "I", title: "Le défi", place: "cour", duel: "d_automne", duelLabel: "Saluer Valérien et prendre ta garde",
    text: [
      "Le cinquième jour, à la récréation du matin, Valérien de Vaucombe traverse la cour des tilleuls, une baguette de buis à la main, suivi de trois garçons de sa table. Il s'arrête devant toi, salue avec une politesse exagérée, et dit, assez fort pour toute la cour :",
      { if: { has: "rep:franche" }, text: "« Le berger a de l'esprit. Voyons s'il a autre chose. »" },
      { if: { has: "rep:rusee" }, text: "« On m'a dit que tu parlais de mon oncle. On va voir si ta baguette est aussi fine que ta langue. »" },
      { if: { has: "rep:silence" }, text: "« Le berger ne parle pas. Peut-être qu'il se bat. Ou peut-être qu'il ne fait rien du tout. »" },
      "« Premier sang, à la baguette. Trois touches. Celui qui fait couler le sang a perdu. C'est la règle du collège, et Dame Castagnet ferme les yeux. »",
      "Les élèves font cercle. Personne ne va chercher un maître.",
      { with: "jodoc", text: "Jodoc se place derrière toi, les bras croisés, comme un mur." },
      { with: "yse", text: "Ysé te souffle : « Il attaque toujours le premier. Toujours. Il a appris l'escrime à la capitale, et là-bas, on attaque. »" },
    ],
    choices: [
      { label: "Refuser le duel", fx: { trait: { audace: -2 } }, to: "A_refus" },
    ],
  },
  A_duel_gagne: {
    act: "I", title: "Le premier sang", place: "cour",
    text: [
      "La troisième touche claque sur l'épaule de Valérien. Le cercle hurle. Valérien reste un moment immobile, la baguette baissée, puis il te salue, correctement cette fois, sans exagération. « Bien », dit-il seulement.",
      "Il s'en va, droit, ses trois amis derrière lui. Avant de passer la porte du réfectoire, il se retourne et te regarde, et dans ce regard, il y a autre chose que de la haine. De l'intérêt.",
      { with: "jodoc", text: "Jodoc te soulève de terre et te repose. « Le neveu du Recteur ! dit-il. Devant tout le monde ! »" },
      "Au premier étage, derrière une fenêtre, un rideau retombe.",
    ],
    fx: { regard: { valerien: "curieux" }, quest: "I_valerien" },
    choices: [{ back: "H_cour" }],
  },
  A_duel_perdu: {
    act: "I", title: "Le premier sang", place: "cour",
    text: [
      "La troisième touche de Valérien te cueille au poignet, sèche, précise. Le cercle applaudit. Valérien baisse sa baguette et te regarde, un peu essoufflé. « Pas mal, pour un berger, dit-il. Pas assez. »",
      "Il s'en va avec ses amis. La cour se vide. Ton poignet te brûle. Tu as appris quelque chose, et tu le comprendras plus tard.",
      { with: "yse", text: "Ysé ramasse ta baguette et te la rend. « La prochaine fois, dit-elle. Il y a toujours une prochaine fois, avec ce genre-là. »" },
    ],
    fx: { regard: { valerien: "distant" } },
    choices: [{ back: "H_cour" }],
  },
  A_refus: {
    act: "I", title: "Le refus", place: "cour",
    text: [
      "Tu dis non. Simplement. Tu ne te battras pas pour amuser la cour.",
      "Valérien te regarde, surpris, puis il éclate de rire, et ses amis avec lui. « Le berger a peur pour sa laine. » Le cercle se défait, en riant. On te bouscule un peu en passant.",
      "Le soir, au réfectoire, on bêle quand tu t'assois. Le lendemain, on bêle encore, un peu moins. Au troisième jour, on a trouvé autre chose. Valérien, lui, ne t'adresse plus la parole. Il a l'air presque déçu.",
    ],
    fx: { regard: { valerien: "distant" } },
    choices: [{ back: "H_cour" }],
  },
  A_epreuve: {
    act: "I", title: "L'épreuve d'automne", place: "atelier",
    text: [
      "L'après-midi du sixième jour, Mère Fage réunit toutes les premières années à l'atelier pour l'épreuve d'automne. Elle ne compte pas pour le grand examen, dit-elle, elle compte pour elle. Chacun doit graver un nœud de tenue dans une plaque de fer, devant elle, avant que le sablier ne se vide. Le métal doit se raidir.",
      "Les élèves passent un à un. Certains réussissent, beaucoup ratent, Valérien réussit sans y penser. Quand vient le tour de Jodoc, l'atelier se tait, parce que tout le monde connaît l'histoire.",
    ],
    choices: [
      { label: "Regarder Jodoc passer l'épreuve", if: { has: "jodoc:entraine1" }, hide: { not: { has: "jodoc:entraine1" } }, to: "A_epreuve_jodoc_ok" },
      { label: "Regarder Jodoc passer l'épreuve", if: { not: { has: "jodoc:entraine1" } }, hide: { has: "jodoc:entraine1" }, to: "A_epreuve_jodoc_ko" },
    ],
  },
  A_epreuve_jodoc_ok: {
    act: "I", title: "L'épreuve d'automne", place: "atelier",
    text: [
      "Jodoc prend le ciseau. Ses mains tremblent. Il te cherche des yeux dans la foule des élèves, et tu lui fais un signe. Il se met à graver. Tu vois ses lèvres bouger : il se raconte tout bas une de tes histoires de moutons.",
      "Trois coups. Il pose le ciseau. Mère Fage passe le doigt sur la plaque, longuement, en silence. Elle fait un trait sur sa liste, et elle passe à l'élève suivant. Jodoc reste planté là, la plaque à la main, comme quelqu'un qui vient de recevoir un coup de soleil.",
      "Dans le dos de Mère Fage, l'atelier entier applaudit.",
    ],
    fx: { flag: "jodoc:passe", quest: "I_jodoc", conf: { jodoc: 15 } },
    choices: [{ label: "Passer à ton tour", test: { dom: "nature", diff: -5, label: "Nature", help: [{ if: { has: "passe:forge" }, v: 15 }, { if: { is: { art: "main" } }, v: 10 }] }, win: { to: "A_epreuve_ok" }, lose: { to: "A_epreuve_ko" } }],
  },
  A_epreuve_jodoc_ko: {
    act: "I", title: "L'épreuve d'automne", place: "atelier",
    text: [
      "Jodoc prend le ciseau. Ses mains tremblent. Le premier coup glisse. Le deuxième entame à peine le fer. Au troisième, la plaque saute de l'établi et tombe dans la sciure. Mère Fage la ramasse, la regarde, et fait un trait sur sa liste, les lèvres serrées.",
      "Jodoc retourne au fond de l'atelier, le visage écarlate, et s'assoit sur un tas de charbon. Quand on ne le regarde plus, il prend une plaque froide dans le tas, et grave un nœud parfait en trois coups, pour personne.",
    ],
    choices: [{ label: "Passer à ton tour", test: { dom: "nature", diff: -5, label: "Nature", help: [{ if: { has: "passe:forge" }, v: 15 }, { if: { is: { art: "main" } }, v: 10 }] }, win: { to: "A_epreuve_ok" }, lose: { to: "A_epreuve_ko" } }],
  },
  A_epreuve_ok: {
    act: "I", title: "L'épreuve d'automne", place: "atelier",
    text: [
      "Le fer résiste, puis cède sous le ciseau, et quand tu poses le doigt sur le nœud, il est raide et chaud. Mère Fage passe derrière toi, grogne, et fait un trait sur sa liste. Un grognement de Mère Fage, au collège, vaut une médaille.",
    ],
    fx: { flag: "epreuve:ok", pratique: { nature: 1 } },
    choices: [{ back: "H_atelier" }],
  },
  A_epreuve_ko: {
    act: "I", title: "L'épreuve d'automne", place: "atelier",
    text: [
      "Le sablier se vide avant que le métal se raidisse. Ton nœud est juste, mais trop lent. Mère Fage le regarde, et dit, sans méchanceté : « Ça viendra. Tu as la forme. Il te manque le temps. » Elle fait un trait sur sa liste.",
    ],
    fx: { pratique: { nature: 1 } },
    choices: [{ back: "H_atelier" }],
  },
  A_lanternes: {
    act: "I", title: "La nuit des lanternes", place: "digue",
    text: [
      "Une fois l'an, le soir du sixième jour de l'automne, Hautsignes pose des lanternes sur la digue. C'est la nuit des noyés : chaque famille en allume une pour ceux que la mer a pris, et le collège descend tout entier en procession, en robe noire, une lanterne de papier à la main.",
      "La digue est couverte de petites lumières tremblantes, de la ville jusqu'à la Tête. Il y en a des centaines. La mer est calme, et les lanternes s'y reflètent comme une seconde digue, à l'envers.",
      "Au milieu, devant la grande plaque de bronze, le Recteur fait un discours. Il parle de la nuit de la première épreuve, de la tempête, des pierres qui se sont mises à chanter pour la première fois, du jeune homme de dix-neuf ans qu'il était. Sa voix tremble un peu, et la foule l'écoute avec amour.",
      "À l'écart, au bout de la digue, Maître Salvanhac regarde la mer, seul, sans lanterne. Le merle n'est pas sur son épaule.",
      { with: "jodoc", text: "Jodoc a allumé trois lanternes : une pour sa grand-mère, deux pour des cousins pêcheurs. Il les pose avec un soin infini." },
      { with: "yse", text: "Ysé n'a personne à pleurer à Hautsignes. Elle te donne la moitié de sa chandelle pour allumer la tienne." },
    ],
    fx: { item: "lanterne", ep: ["seance", 400] },
    choices: [
      { label: "Poser ta lanterne près de la grande plaque, avec le collège", fx: { regard: { daubrac: "cordial" } }, to: "A_lanterne_plaque" },
      { label: "Descendre les marches et poser ta lanterne côté mer, là où il n'y a personne", fx: { trait: { audace: 1 } }, to: "A_lanterne_mer" },
      { label: "Aller porter ta lanterne à Maître Salvanhac", to: "A_lanterne_maitre" },
    ],
  },
  A_lanterne_plaque: {
    act: "I", title: "La nuit des lanternes", place: "digue",
    text: [
      "Tu poses ta lanterne au pied de la plaque, parmi celles du collège. Le Recteur, qui descend de l'estrade, s'arrête près de toi et pose la main sur ton épaule. « Notre bourse de Brèches. Vous ne connaissez aucun noyé, ici. C'est bien de penser à eux quand même. »",
      "Il garde la main sur ton épaule un instant de trop, en regardant les lanternes. Puis il s'en va saluer les notables.",
    ],
    choices: [{ label: "Remonter au collège avec les autres", to: "A_lanternes_fin" }],
  },
  A_lanterne_mer: {
    act: "I", title: "La nuit des lanternes", place: "digue",
    text: [
      "Tu descends les marches glissantes jusqu'à la petite grève, au pied de la digue, côté mer. Il fait noir, et les vagues claquent contre les blocs. Une seule lanterne brûle déjà là, posée sur une pierre plate contre le granit.",
      "Une femme est assise sur les galets, à côté, emmitouflée dans un châle, une grande femme aux mains rouges. Elle lève la tête quand tu poses ta lanterne près de la sienne. « Tu es perdu{e}, petit ? Le collège est là-haut. »",
      "Tu lui réponds que tu voulais poser ta lumière là où il n'y en avait pas. Elle te regarde longtemps, puis elle hoche la tête. « Il y en a une, maintenant. Deux. C'est bien. » Ce sont ses derniers mots. Vous restez assis{e} là un moment, tous les deux, à regarder les lanternes trembler.",
    ],
    fx: { meet: "maud" },
    choices: [{ label: "Remonter au collège", to: "A_lanternes_fin" }],
  },
  A_lanterne_maitre: {
    act: "I", title: "La nuit des lanternes", place: "digue",
    text: [
      "Tu marches jusqu'au bout de la digue, jusqu'à la Tête, où le grand signe bourdonne sous les pieds. Maître Salvanhac est là, les mains derrière le dos, face au large.",
      "Tu lui tends ta lanterne. Il la prend, la regarde, te regarde. « Pour qui ? » demande-t-il. Tu lui dis : pour qui il voudra. Il réfléchit, longuement, en fronçant ses sourcils blancs. Puis il pose la lanterne sur le grand signe, à ses pieds, et reste à la regarder.",
      "« Il y avait quelqu'un, dit-il enfin. Ici. Il y a très longtemps. » Il secoue la tête. « Je ne sais plus. C'est une chose terrible, mon enfant, de savoir qu'on a oublié quelqu'un, et de ne pas savoir qui. »",
    ],
    fx: { regard: { salvanhac: "cordial" } },
    choices: [{ label: "Remonter au collège avec lui", to: "A_lanternes_fin" }],
  },
  A_lanternes_fin: {
    act: "I", title: "La nuit des lanternes", place: "dortoir",
    text: [
      "Le collège remonte la colline en procession, à la lueur des dernières chandelles. Au dortoir, on ouvre les lucarnes pour voir la digue de loin : une ligne de petites lumières sur la mer noire, qui s'éteignent une à une.",
      "Demain, l'automne sera fini pour le collège. Les cours d'hiver commencent, et avec eux, dit-on, l'annonce du sujet du grand examen.",
    ],
    fx: { quest: "I_annee" },
    choices: [{ label: "Te coucher", to: "H_dortoir" }],
  },
};
