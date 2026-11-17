// The second reading, « La nuit d'avant »: every passage here is `second: true`. From eight in the evening to dawn,
// the hero lives the night that made the morning: the girl in the pink domino, the ball, the lottery, the belfry, the
// uncle's safe, the quay, the wash-house, the apothecary, the cloakroom, the note and the riddles written for oneself;
// it ends at dawn on `hirondelle`, with a noon told according to what was prepared.
var PARTIE = { all: [{ has: "papiers:pris" }, { item: "passage" }, { any: [{ has: "lazare:enferme" }, { has: "nom:faux" }] }] };

module.exports = {
  // ------------------------------------------------------------------ the shop, eight o'clock
  S_echoppe: { act: "II", title: "L'échoppe, la veille au soir", place: "echoppe", second: true,
    text: [
      "La veille de la Mi-Carême, à huit heures du soir, les arcades du marché sentent la friture, la poudre de riz et le vin chaud. Des masques passent déjà par bandes, en avance sur la fête, et leurs rires roulent sous les voûtes comme des billes dans un couloir. Tu ranges tes plumes. Tu as écrit aujourd'hui trois lettres d'amour, une réclamation au fisc et une menace de mort, d'un boucher à son gendre, que tu as adoucie en chemin jusqu'à en faire une invitation à dîner.",
      "Tu as aussi, depuis ce matin, une impression étrange, que tu n'arrives pas à chasser : celle de te souvenir de demain. Un souvenir à l'envers, flou, insistant, comme un mot qu'on a sur le bout de la langue et qui serait dans une autre langue.",
      "Le volet est à moitié baissé quand une main gantée de rose le retient. Une jeune fille se glisse dessous, en domino de soie rose, capuchon rabattu, un loup de velours sur les yeux. Elle s'assoit sur le tabouret des clients sans y être invitée, croise les bras, et te regarde à travers les trous de son loup. Sous le velours, sur l'arête du nez, tu devines des taches de rousseur.",
    ],
    choices: [
      { label: "Écouter ce qu'elle a à dire", hide: { seen: "S_devinette" }, to: "S_devinette" },
      { label: "L'appeler par son nom : Mademoiselle Ardel", hide: { seen: "S_clarisse_nom" }, to: "S_clarisse_nom" },
    ] },

  S_devinette: { act: "II", title: "La devinette du domino rose", place: "echoppe", second: true, puzzle: "n_clarisse",
    text: [
      "« On m'a dit que vous saviez garder un secret, dit-elle. On dit ça de beaucoup de gens. Je veux m'en assurer à ma façon. »",
    ],
    choices: [
      { label: "L'appeler par son nom : Mademoiselle Ardel", hide: { seen: "S_clarisse_nom" }, to: "S_clarisse_nom" },
    ] },

  S_clarisse_nom: { act: "II", title: "Mademoiselle Ardel", place: "echoppe", second: true,
    fx: { meet: ["clarisse"] },
    text: [
      "Elle se fige. Puis, lentement, elle ôte son loup. Elle a dix-neuf ans, un visage vif et pointu semé de rousseur, des yeux gris qui ne se baissent pas, et une petite cicatrice blanche au menton, de celles qu'on se fait en tombant d'un mur qu'on n'avait pas le droit d'escalader.",
      "« Comment savez-vous ? » Tu ne sais pas comment tu sais. Tu dis : les taches de rousseur, le gant, l'affiche. Elle fronce les sourcils. « L'affiche n'est pas encore posée. Mon oncle la fait coller cette nuit. » Elle te regarde longtemps. « Vous êtes bizarre. Tant mieux. J'ai besoin de quelqu'un de bizarre. »",
    ],
    choices: [
      { label: "Lui demander ce qu'elle attend de toi", to: "S_clarisse_plan" },
    ] },

  S_clarisse_plan: { act: "II", title: "Ce que veut Clarisse", place: "echoppe", second: true,
    fx: { meet: ["clarisse"], gold: 240 },
    text: [
      { if: { has: "enigme:n_clarisse" }, text: "« L'encre, dit-elle, satisfaite. Bien. Les gens qui ont les doigts noirs d'encre mentent moins que les autres : on voit tout de suite ce qu'ils touchent. » Elle ôte son loup. Elle a dix-neuf ans, un visage vif et pointu semé de rousseur, des yeux gris qui ne se baissent pas." },
      "« Je m'appelle Clarisse Ardel. Demain à midi, à Saint-Brice, mon oncle Gaspard me marie à Monsieur Médard Coquelin, banquier, soixante-huit ans, quatre millions, deux veuvages et une haleine de cave. Mon oncle lui doit une somme qui ferait rougir un ministre. Je suis le remboursement. »",
      "Elle parle vite, d'une voix nette, comme on récite une leçon apprise devant un miroir. « Mon père m'a laissé la savonnerie. Mon oncle en est le tuteur jusqu'à mes vingt et un ans. Il a tout joué, tout, au pharaon, au cercle du Commerce, et ce qu'il n'a pas perdu, il l'a emprunté à Coquelin. Le jour de mes noces, la tutelle passe au mari, et le mari efface la dette. Tout le monde y gagne, sauf la mariée. »",
      "« Ma grand-mère maternelle vit à Gênes. Elle m'attend. L'Hirondelle part demain à midi, avec la marée. Il me faut trois choses : mon passeport, que mon oncle garde dans le coffre de son cabinet ; un passage, que je ne peux pas acheter moi-même sans que tout le port le sache ; et un endroit où dormir jusqu'à midi sans qu'on me trouve. » Elle pose sur la planche une bourse de soie qui tinte. « J'ai vendu les boucles d'oreilles de ma mère. Quatre écus. C'est tout ce que j'ai à moi. »",
      "« Ce soir, à dix heures, mon oncle m'emmène au bal de l'Opéra, au bras de mon fiancé, pour me montrer à la ville une dernière fois en demoiselle. Si je n'y suis pas, il me fera enfermer à clef jusqu'à midi. Il faut que j'y aille, et il faut que j'en sorte. » Elle se lève. « On dit à l'Opéra que vous avez fait l'acteur, le marin, l'écrivain, que vous êtes passé{e} partout et resté{e} nulle part. On dit que vous écrivez les lettres des amoureux sans jamais les lire. Aidez-moi. Je n'ai personne d'autre. »",
    ],
    choices: [
      { label: "Lui promettre de l'aider", to: "S_veille" },
    ] },

  S_veille: { act: "II", title: "Avant le bal", place: "echoppe", second: true, hub: true, backName: "ton échoppe",
    text: [
      { first: true, text: "Clarisse est repartie dans la nuit, son domino rose sous un manteau de laine. « À dix heures, a-t-elle dit. Cherchez le domino rose. Il n'y en aura qu'un. J'ai fait acheter tous les autres. » Tu restes seul{e} dans ton échoppe, avec la bourse de soie, la lampe, et deux heures devant toi." },
      { first: true, text: "Et ce souvenir de demain, de plus en plus net, comme une encre sympathique qui monterait sous la chaleur : un banc, un canal, une mouette, des devinettes de ta main." },
      { again: true, text: "Ton échoppe, la lampe, la bourse de soie sur la planche. Dehors, les arcades se remplissent de masques." },
    ],
    choices: [
      { label: "Chercher ton vieux costume de Pierrot au fond du coffre", hide: { seen: "S_costume" }, to: "S_costume" },
      { label: "Écrire à la grand-mère de Gênes, pour annoncer Clarisse", hide: { seen: "S_lettre_nonna" }, to: "S_lettre_nonna" },
      { label: "Noter sur un papier ce souvenir de demain", hide: { seen: "S_demain" }, to: "S_demain" },
      { label: "Passer chez la costumière de l'arcade voisine", hide: { seen: "S_voisine" }, to: "S_voisine" },
      { label: "Partir pour le bal de l'Opéra", if: { seen: "S_costume" }, fx: { until: 22 }, to: "S_bal" },
    ] },

  S_costume: { act: "II", title: "Le Pierrot", place: "echoppe", second: true,
    text: [
      { if: { voie: "comedien" }, text: "Le costume dort au fond de ton coffre depuis que la troupe est partie sans toi, plié dans un drap avec de la lavande : la blouse blanche à gros boutons noirs, la collerette, le pantalon large. Le masque de carton laqué, avec sa larme peinte, tu l'as joué cent fois, à Lyon, à Nîmes, à Marseille, devant des salles qui jetaient des pommes et d'autres qui jetaient des fleurs, et il a gardé, à l'intérieur, la forme exacte de ton visage." },
      { if: { not: { voie: "comedien" } }, text: "Le costume dort au fond de ton coffre depuis une Mi-Carême d'il y a cinq ans, où une voisine costumière te l'avait laissé en paiement d'une lettre : la blouse blanche à gros boutons noirs, la collerette, le pantalon large, et un masque de carton laqué, d'un blanc de craie, avec une larme noire peinte sous l'œil gauche. Il t'attend depuis, intact." },
      "Tu l'essaies devant le bout de miroir accroché au pilier. Un Pierrot te regarde. Il a l'air triste et rusé, comme tous les Pierrots, ce qui est la définition même du personnage : un niais qui sait des choses.",
      "En le nouant derrière ta tête, tes doigts hésitent. Sur le clou de la porte pend le petit cadenas de laiton de ta boîte aux lettres, gros comme une noisette, avec sa clef. Sans savoir pourquoi, tu le décroches et tu le mets dans ta poche.",
    ],
    choices: [
      { back: "S_veille" },
    ] },

  S_lettre_nonna: { act: "II", title: "Carissima", place: "echoppe", second: true,
    fx: { ep: ["perso", 150] },
    text: [
      "Tu écris en italien, que tu as appris sur les quais, avec les mots des quais adoucis pour une vieille dame : *Madame, votre petite-fille arrivera par l'Hirondelle, si Dieu, la marée et un capitaine génois le permettent. Elle arrive avec une valise et une colère. Gardez-lui la colère. Elle lui servira.*",
      "Tu plies la lettre, tu la cachettes de cire noire, et tu écris l'adresse. *Signora Teresa Molinari, salita San Matteo, Genova.* Tu la glisses dans ta poche. Elle partira avec Clarisse, ou elle ne partira pas.",
    ],
    choices: [
      { back: "S_veille" },
    ] },

  S_demain: { act: "II", title: "Le souvenir de demain", place: "echoppe", second: true,
    text: [
      "Tu prends un papier, et tu notes ce qui te vient, sans réfléchir, comme on note un rêve au réveil avant qu'il s'enfuie : *un banc au bord de l'eau. Une rose de papier. Une reine en carton. Un pavot. Un vestiaire. Une hirondelle. Une cloche. Et un Arlequin qui rit.*",
      "Tu relis. Cela ressemble à une liste de courses dressée par un poète ivre. Et pourtant, en relisant le dernier mot, tu sens un froid te descendre dans le dos, entre les omoplates, comme une goutte d'eau tombée d'une gouttière.",
      "Tu brûles le papier dans le poêle. L'impression reste.",
    ],
    choices: [
      { back: "S_veille" },
    ] },

  // ------------------------------------------------------------------ the ball
  S_bal: { act: "II", title: "Le bal de l'Opéra", place: "opera", second: true, hub: true, backName: "la salle de bal",
    text: [
      { first: true, text: "À dix heures du soir, la veille de la Mi-Carême, la salle entière de l'Opéra est un incendie de lumière. Les quatre lustres de cristal flambent de cinq cents bougies chacun, les loges dorées regorgent de masques qui crient et qui boivent, le plancher posé sur le parterre ploie sous mille danseurs, et l'orchestre, juché sur son estrade, joue une polka si vite qu'on dirait une poursuite. L'air est épais de musc, de poudre, de vin chaud, de sueur et de fleurs coupées, et la chaleur monte en vagues jusqu'au plafond peint, où des dieux grecs regardent ce sabbat avec une lassitude d'habitués." },
      { first: true, text: "Des Turcs, des Colombines, des diables, des médecins à long nez, des ours, des bergères, des évêques à barbe postiche. Ici, le carnaval tourne à la contagion. Chacun est quelqu'un d'autre, et chacun en profite pour être enfin lui-même, ce qui est beaucoup plus inquiétant." },
      { again: true, text: "Le bal tourne sous les lustres, la polka galope, les masques crient. Dans un coin, un Arlequin à losanges reste adossé à sa colonne." },
    ],
    choices: [
      { label: "Chercher le domino rose", hide: { seen: "S_bal_clarisse" }, to: "S_bal_clarisse" },
      { label: "Observer l'oncle et son entourage, près de la loge d'honneur", hide: { seen: "S_bal_gaspard" }, to: "S_bal_gaspard" },
      { label: "Aborder l'Arlequin qui ne danse pas", if: { seen: "S_bal_gaspard" }, hide: { seen: "S_lazare_bal" }, to: "S_lazare_bal" },
      { label: "Aller saluer le banquier au buffet", if: { seen: "S_bal_clarisse" }, hide: { seen: "S_coquelin_bal" }, to: "S_coquelin_bal" },
      { label: "Boire avec le Grand Turc derrière son pilier", hide: { seen: "S_grand_turc" }, to: "S_grand_turc" },
      { label: "Faire les poches de l'Arlequin", if: { seen: "S_lazare_bal" }, hide: { any: [{ seen: "S_lazare_carnet" }, { seen: "S_lazare_poches" }, { has: "lazare:enferme" }, { has: "lazare:mefiant" }] }, test: { dom: "discretion", diff: 0, label: "Discrétion" }, win: { to: "S_lazare_carnet" }, lose: { fx: { flag: "lazare:mefiant" }, to: "S_lazare_poches" } },
      { label: "Inviter la Reine des Blanchisseuses à danser", hide: { seen: "S_bal_babet" }, to: "S_bal_babet" },
      { label: "Attirer l'Arlequin dans le magasin des costumes", if: { seen: "S_lazare_bal" }, hide: { any: [{ has: "lazare:enferme" }, { has: "lazare:mefiant" }] }, test: { dom: "social", diff: 0, label: "Social" }, win: { fx: { flag: "lazare:enferme" }, to: "S_lazare_enferme" }, lose: { fx: { flag: "lazare:mefiant" }, to: "S_lazare_piege_rate" } },
      { label: "Monter vers l'estrade pour la loterie de minuit", if: { has: "bal:plan" }, hide: { seen: "S_loterie" }, fx: { time: 2 }, to: "S_loterie" },
      { label: "Tenter encore la devinette de la loterie", if: { seen: "S_loterie" }, hide: { item: "domino" }, to: "S_loterie" },
      { label: "Sortir avec le domino noir par la porte des artistes", if: { seen: "S_loterie_gagnee" }, fx: { time: 1 }, to: "S_sortie" },
    ] },

  S_bal_clarisse: { act: "II", title: "Le domino rose", place: "opera", second: true,
    fx: { flag: "bal:plan", meet: ["gaspard", "coquelin"] },
    text: [
      "Il n'y a qu'un domino rose dans toute la salle, en effet, et il danse avec un vieillard. Monsieur Médard Coquelin porte un habit noir sans masque, comme les banquiers, qui n'en ont pas besoin, et il danse la valse avec une raideur de cuiller dans une confiture. Il tient sa fiancée comme on tient un titre de propriété, à bout de bras, pour mieux le lire.",
      "Tu attends la fin de la valse, et tu t'inclines devant le domino rose. Coquelin te regarde de haut en bas, toi et ta larme peinte, et rend sa fiancée avec un soupir de soulagement, car il a mal aux genoux.",
      "Tu danses. Clarisse danse mal, trop vite, en menant, et elle te parle à l'oreille entre deux tours. « À une heure, la loterie sera tirée, et tout le monde regardera l'estrade. Il me faut un autre domino que celui-ci : mon oncle a fait acheter tous les roses pour qu'on me voie de partout. Trouvez-m'en un d'une autre couleur. Ensuite, la porte des artistes, derrière la scène, sur la rue des Cordiers. » Elle tourne. « Et méfiez-vous de tout le monde. Mon oncle a des yeux dans toute la salle. »",
    ],
    choices: [
      { back: "S_bal" },
    ] },

  S_bal_gaspard: { act: "II", title: "La loge d'honneur", place: "opera", second: true,
    fx: { meet: ["gaspard", "lazare"] },
    text: [
      "Gaspard Ardel tient la loge d'honneur comme on tient une table de jeu, une coupe à la main, souriant à tout le monde, et rongeant l'ongle de son pouce dès que personne ne le regarde. Sa moustache est trop noire. Ses gants sont prune. Il suit des yeux le domino rose dans la foule, chaque tour, chaque pas, avec l'attention d'un joueur qui a misé sa maison sur un numéro et qui regarde tourner la roue.",
      "Un Arlequin monte le rejoindre dans la loge, maigre, souple, en costume à losanges, un loup noir sur le haut du visage. Gaspard se penche vers lui sans le regarder. Tu n'entends pas les mots, mais tu vois le geste : un doigt ganté de prune qui désigne le domino rose dans la salle, puis qui se pose sur la poitrine de l'Arlequin. *Toi. Elle.*",
      "L'Arlequin s'incline, très bas, très comique, comme au théâtre. Il redescend dans la salle et s'adosse à une colonne, face à la piste. Il rit avec tout le monde. Ses yeux suivent le domino rose.",
      "Tu as froid, au milieu de ce four. Tu le connais, d'un endroit qui t'échappe.",
    ],
    choices: [
      { back: "S_bal" },
    ] },

  S_lazare_bal: { act: "II", title: "L'Arlequin", place: "opera", second: true,
    text: [
      "Tu t'adosses à la même colonne que lui, comme un danseur qui reprend son souffle. Il te jette un regard en coin, et sourit aussitôt, de ce sourire léger, sans fond, qui va et vient sur son visage comme une lumière dans une maison vide.",
      "« Joli Pierrot. Tu danses avec la plus belle fille du bal et tu as l'air d'aller à un enterrement. C'est le métier, je suppose. » Il te tend la main. « Lazare. Valet de pied, Arlequin de nuit, ami de tout le monde. » Il garde ta main un instant de trop. « Et toi ? Comment on t'appelle, quand tu n'es pas Pierrot ? »",
    ],
    choices: [
      { label: "Lui dire ton vrai nom", hide: { any: [{ has: "nom:donne" }, { has: "nom:faux" }] }, fx: { flag: "nom:donne" }, to: "S_nom_donne" },
      { label: "Lui donner un faux nom", hide: { any: [{ has: "nom:donne" }, { has: "nom:faux" }] }, fx: { flag: "nom:faux" }, to: "S_nom_faux" },
    ] },

  S_nom_donne: { act: "II", title: "Ton nom", place: "opera", second: true,
    text: [
      "« {hero}. » Tu le dis comme on dit son nom à quelqu'un de sympathique dans un bal, sans y penser, et au moment où il sort de ta bouche, tu as l'impression très nette de l'entendre dans une autre voix, plus tard, au bord de l'eau.",
      "« {hero} », répète Lazare, avec gourmandise, comme on goûte un vin. « Je m'en souviendrai. J'ai une mémoire terrible pour les noms. C'est mon seul talent. » Il te tape sur l'épaule et retourne à sa colonne.",
    ],
    choices: [
      { back: "S_bal" },
    ] },

  S_nom_faux: { act: "II", title: "Un autre nom", place: "opera", second: true,
    text: [
      "« Lunaire, dis-tu. Pierrot Lunaire. C'est mon vrai nom. Mes parents avaient de l'humour, et peu d'avenir. »",
      "Lazare éclate de rire, un vrai rire, cette fois, surpris. « Lunaire ! Je m'en souviendrai. J'ai une mémoire terrible pour les noms. C'est mon seul talent. » Il te tape sur l'épaule. Tu sens, sous le rire, qu'il a rangé ce nom dans un tiroir, avec soin, comme une pièce de monnaie dont il vérifiera plus tard si elle est fausse.",
    ],
    choices: [
      { back: "S_bal" },
    ] },

  S_lazare_enferme: { act: "II", title: "Le magasin des costumes", place: "opera", second: true,
    fx: { ep: ["perso", 300] },
    text: [
      "Tu reviens vers lui, l'air mystérieux, et tu lui glisses que la demoiselle au domino rose a laissé tomber un billet doux dans le magasin des costumes, sous l'escalier de la scène, et que tu n'oses pas aller le chercher, parce que tu n'es qu'un Pierrot. Les yeux de Lazare s'allument. Un billet doux de la fiancée, la veille des noces, c'est de l'or pour un valet : on le vend à l'oncle, ou on le vend à la fiancée, selon les cours.",
      "Il te suit dans l'escalier, puis dans le magasin, une longue cave voûtée où pendent mille costumes de cent opéras, rois, sorcières, soldats, anges, si serrés qu'ils forment une foule muette dans le noir, une foule de pendus. Il s'enfonce entre les robes en cherchant à terre. Tu recules jusqu'à la porte, et tu tournes la grosse clef, deux tours.",
      "Il frappe. Il appelle. Il rit, puis il ne rit plus. Mais la polka, au-dessus, couvre tout, et la porte est de chêne. On l'ouvrira demain matin, quand les machinistes viendront chercher les costumes du *Barbier de Séville*. Tu glisses la clef dans ta poche, et tu remontes dans la lumière.",
    ],
    choices: [
      { back: "S_bal" },
    ] },

  S_lazare_piege_rate: { act: "II", title: "L'Arlequin ne mord pas", place: "opera", second: true,
    text: [
      "Tu lui parles d'un billet doux tombé dans le magasin des costumes. Lazare t'écoute, la tête penchée, avec un sourire très doux. « Un billet doux, dit-il. Dans une cave. Que tu as vu tomber, et que tu n'as pas ramassé. » Il secoue la tête. « Tu mens très mal, Pierrot. Tu as dû être un très mauvais comédien. Ou un très bon. »",
      "Il reste à sa colonne. Mais à présent, ses yeux te suivent, toi aussi, autant que le domino rose.",
    ],
    choices: [
      { back: "S_bal" },
    ] },

  S_bal_babet: { act: "II", title: "La Reine au bal", place: "opera", second: true,
    fx: { meet: ["babet"] },
    text: [
      "Les blanchisseuses ont leur coin, près du buffet, et elles y règnent par le nombre, le bruit et la largeur. Au milieu d'elles, une femme énorme aux bras rouges, couronnée de carton doré, mange un pâté à pleines mains : la Reine désignée, qu'on couronnera demain à six heures. Mère Babet.",
      "Tu l'invites. Elle te regarde comme un poisson qui aurait demandé la main d'une poissonnière. Puis elle rit à faire trembler les verres, s'essuie les doigts sur ta collerette, et t'entraîne dans une mazurka qui tient de la charge de cavalerie.",
      "« T'as une tête à avoir un service à demander, mon Pierrot, dit-elle en te broyant les côtes. Demande. Une Reine, c'est fait pour accorder des grâces. Après, je retourne à mon pâté. »",
    ],
    choices: [
      { label: "Lui demander de porter le domino rose à la place de la demoiselle", hide: { has: "babet:leurre" }, fx: { flag: "babet:leurre" }, to: "S_babet_leurre" },
      { back: "S_bal" },
    ] },

  S_babet_leurre: { act: "II", title: "Une Reine en rose", place: "opera", second: true,
    text: [
      "Tu lui expliques en trois tours de mazurka : la demoiselle, le vieux, l'oncle, l'Arlequin qui guette. Mère Babet s'arrête net au milieu de la piste, et deux couples se cognent contre elle comme contre une digue.",
      "« Le vieux Coquelin, dit-elle. Il a fait saisir le lavoir de la mère Gendre, l'hiver dernier, pour trois écus. » Elle crache par terre, au bal de l'Opéra. « Je mettrai le rose. Je suis plus large qu'elle, mais l'Arlequin regardera la couleur, pas la taille : les hommes regardent toujours la couleur. Je danserai jusqu'à trois heures avec le dos tourné. Et je mangerai son pâté, au vieux. »",
    ],
    choices: [
      { back: "S_bal" },
    ] },

  S_loterie: { act: "II", title: "La loterie des masques", place: "opera", second: true, puzzle: "n_loterie",
    text: [
      "Minuit. L'orchestre s'arrête au milieu d'une mesure. Tous les masques se tournent vers l'estrade, où le maître de cérémonie, en Grand Turc, brandit un bocal de verre plein de billets. Une danseuse fait tourner au-dessus de sa tête un grand domino de velours noir, à capuchon, avec son loup, qui ondule dans la lumière des lustres comme une aile de corbeau.",
    ],
    choices: [
      { back: "S_bal" },
    ] },

  S_loterie_gagnee: { act: "II", title: "Le domino noir", place: "opera", second: true,
    text: [
      "« Le masque ! » Tu l'as crié avant la fin du dernier vers, et le Grand Turc te regarde avec une stupeur de sultan détrôné. La salle siffle : « Tricheur ! Il connaissait la réponse ! » Tu montes sur l'estrade sous les huées et les applaudissements, également mérités, et la danseuse te jette le domino noir sur les épaules.",
      "Derrière le troisième pilier, à l'abri d'une tenture, Clarisse t'attend. L'échange prend dix secondes. Le domino rose tombe, le noir monte, le capuchon se rabat sur les boucles rousses, le loup de velours noir se pose sur les taches de rousseur. Une autre femme sort de derrière le pilier.",
      { if: { has: "babet:leurre" }, text: "Une troisième femme ramasse le domino rose par terre, l'enfile non sans peine, avec un craquement de coutures, rabat le capuchon sur sa couronne de carton, et retourne danser, de dos, au milieu de la piste. Contre la colonne, l'Arlequin garde les yeux sur le rose." },
      { if: { not: { has: "babet:leurre" } }, text: "Le domino rose reste à terre, derrière le pilier, comme une peau de serpent abandonnée. Tu le roules et tu le fourres sous une banquette. Quelqu'un finira par remarquer que la couleur a disparu de la piste. Il faut faire vite." },
    ],
    choices: [
      { back: "S_bal" },
    ] },

  // ------------------------------------------------------------------ the streets, one o'clock
  S_sortie: { act: "II", title: "La porte des artistes", place: "canal", second: true,
    text: [
      "Une heure. La porte des artistes donne sur la rue des Cordiers, une ruelle noire, puante, encombrée de décors réformés, où un château fort en toile peinte achève de pourrir contre un mur. Le froid vous saute au visage après la fournaise du bal. Clarisse rit, d'un rire vif, haut, essoufflé, et se tait aussitôt, la main sur la bouche.",
      { if: { not: { any: [{ has: "babet:leurre" }, { has: "lazare:enferme" }] } }, text: "Derrière vous, par la porte entrouverte, une voix familière et gaie appelle quelqu'un dans la salle, puis une autre voix, plus rude, répond. Quelqu'un a remarqué que le rose avait disparu." },
      "Saint-Brice est à l'autre bout de la ville. Deux chemins : le long du canal, à découvert, sous les lanternes ; ou par les ruelles du quartier des tanneurs, dans le noir, là où rôdent les gens qu'on paie pour chercher.",
    ],
    choices: [
      { label: "Longer le canal, sous les lanternes", to: "S_canal_nuit" },
      { label: "Couper par les ruelles, dans le noir", test: { dom: "discretion", diff: 0, label: "Discrétion" }, win: { to: "S_ruelles" }, lose: { to: "S_ruelles_vus" } },
    ] },

  S_canal_nuit: { act: "II", title: "Le long du canal", place: "canal", second: true,
    text: [
      "Vous courez le long du canal des Teinturiers, sous les lanternes qui se reflètent dans l'eau bleue et rouge. Clarisse court comme une fille qui a grandi en sautant des murs, la main dans la tienne, le domino noir claquant derrière elle comme un drapeau de pirate. Tu passes devant un banc, au bord de l'eau, et tu ralentis malgré toi, sans savoir pourquoi. Une mouette dort sur le dossier, la tête sous l'aile.",
      "Au lavoir du Pont-Rouge, des blanchisseuses de nuit trempent leur linge à la lueur d'une lampe. Elles lèvent la tête, vous regardent passer, se disent quelque chose. L'une rit.",
    ],
    choices: [
      { label: "Monter vers Saint-Brice", fx: { time: 1 }, to: "S_clocher_nuit" },
    ] },

  S_ruelles: { act: "II", title: "Le quartier des tanneurs", place: "canal", second: true,
    text: [
      "Les ruelles des tanneurs sentent la chaux, l'écorce et la peau morte, une odeur si épaisse qu'on la sent sur la langue. Vous avancez dans le noir complet, à tâtons, la main gauche sur le mur gluant, la droite tenant celle de Clarisse. Deux lanternes passent au bout d'une rue, portées par des hommes en livrée prune. Tu tires Clarisse dans un renfoncement de porte. Les lanternes passent à trois pas. Le cuir craque. Un homme jure. Puis le noir revient.",
      "Clarisse respire contre ton épaule, très vite. « Vous êtes doué{e} pour ça, chuchote-t-elle. Vous êtes sûr{e} d'avoir été écrivain ? »",
    ],
    choices: [
      { label: "Monter vers Saint-Brice", fx: { time: 1 }, to: "S_clocher_nuit" },
    ] },

  S_ruelles_vus: { act: "II", title: "Les lanternes", place: "canal", second: true,
    text: [
      "Tu heurtes une poubelle de tannerie, qui roule sur les pavés avec un fracas de tonnerre en fer-blanc. Au bout de la ruelle, deux lanternes se retournent. « Là ! » Des pas qui courent. Tu tires Clarisse dans une autre ruelle, puis dans une cour, puis sous un porche, et là, faute de mieux, tu fais ce que font tous les fuyards de toutes les comédies : tu la prends dans tes bras, son capuchon contre ton masque, comme deux amoureux de carnaval qui se sont trouvé un coin sombre.",
      "Les lanternes passent. L'une s'arrête. Une voix grasse dit : « Laisse, c'est des amoureux. » L'autre dit : « Justement. » Et puis : « Une rousse, on a dit. Celle-là, on voit pas ses cheveux. » Les pas s'éloignent.",
      "Clarisse se détache de toi et rajuste son loup. Elle tremble de rire, ou de froid. « Mon oncle paie mal, dit-elle. Il a toujours mal payé. C'est la seule chose qui nous sauve. »",
    ],
    choices: [
      { label: "Monter vers Saint-Brice", fx: { time: 1 }, to: "S_clocher_nuit" },
    ] },

  // ------------------------------------------------------------------ the belfry, two o'clock
  S_clocher_nuit: { act: "II", title: "Le sonneur, la nuit", place: "clocher", second: true,
    fx: { meet: ["tiburce"] },
    text: [
      "Deux heures. Le clocher de Saint-Brice dresse sa tour noire contre un ciel sans lune, et le vent siffle dans les abat-sons comme dans les côtes d'un squelette. Le sonneur loge au pied de la tour, dans une cahute de planches accotée au mur. Tu frappes. Rien. Tu frappes plus fort. Une voix de tonnerre éclate à l'intérieur : « QUOI ? »",
      "La porte s'ouvre sur un géant voûté en chemise de nuit, une chandelle à la main, roux et blanc de cheveux, l'air d'un ours qu'on a tiré de sa caverne en plein hiver. Il te regarde, toi et ta larme peinte. « Y A PAS DE MESSE POUR LES PIERROTS. »",
      "Clarisse s'avance, et rabat son capuchon. Ses boucles rousses s'éclairent à la chandelle. Le géant la regarde. Sa bouche s'ouvre. « La petite Ardel, dit-il, et pour la première fois, il parle bas. J'ai sonné ton baptême. J'ai sonné l'enterrement de ton père. Demain, ils veulent que je sonne... » Sa phrase reste en l'air.",
    ],
    choices: [
      { label: "Lui demander de la cacher sous la Bourdonne jusqu'à midi", to: "S_tiburce_oui" },
    ] },

  S_tiburce_oui: { act: "II", title: "Le mot", place: "clocher", second: true,
    text: [
      "Tiburce écoute, la main en cornet derrière sa bonne oreille, en hochant la tête à chaque mot comme s'il les comptait. Quand tu as fini, il pose sa chandelle, prend une clef longue comme un avant-bras sur un clou, et dit simplement : « BON. »",
      "Puis il se penche vers toi. « ET DEMAIN, QUI VIENT LA CHERCHER ? MOI, J'OUVRE À PERSONNE. IL ME FAUT UN MOT. »",
      "Tu réfléchis. Un mot que tu sauras demain, même sans mémoire, parce que la route de demain te le donnera. Un mot qui sera la dernière chose que tu auras apprise avant de monter. « Hirondelle », dis-tu.",
      "« HIRONDELLE, répète Tiburce. Et s'il le sait plus, le mot, ton Pierrot de demain ? » Tu touches ta poitrine, à l'endroit du cœur, où il n'y a encore rien. « Il portera une rose de papier. — BON. »",
    ],
    choices: [
      { label: "Monter avec Clarisse jusqu'à la chambre des cloches", to: "S_chambre_nuit" },
    ] },

  S_chambre_nuit: { act: "II", title: "Sous la Bourdonne", place: "clocher", second: true,
    fx: { ep: ["histoire", 300] },
    text: [
      "Cent vingt marches dans le noir, avec la lanterne de Tiburce qui balance en dessous et projette vos ombres en spirale sur la pierre, géantes, tordues, comme les ombres de deux damnés qu'on reconduirait au jour. Puis la trappe, l'échelle, et la chambre des cloches, cage de poutres noires ouverte au vent. La Bourdonne pend au milieu, énorme, verdie, silencieuse, une montagne de bronze endormie sur son joug de chêne.",
      "Tiburce étale un sac de chanvre sous la robe de la cloche, y pose une couverture, une miche, une gourde, et redescend sans un mot, avec la délicatesse surprenante des géants. La lanterne reste. Elle éclaire d'en dessous le visage de Clarisse, ses taches de rousseur, et les ombres de la cloche au-dessus de vous, comme une voûte d'église qui serait suspendue à un fil.",
      "Elle s'assoit sous le bronze, les genoux sous le menton, et elle rit, d'un rire vif, haut, un peu essoufflé, dans l'odeur de cire et de vieux bois. Tu sais que tu entendras ce rire demain. Ce savoir te vient d'un lendemain.",
    ],
    choices: [
      { label: "Lui demander pourquoi elle t'a choisi{e}, toi", hide: { seen: "S_pourquoi" }, to: "S_pourquoi" },
      { label: "Lui demander ce qu'elle emporte", hide: { seen: "S_mere_clarisse" }, to: "S_mere_clarisse" },
      { label: "Lui demander comment est mort son père", hide: { seen: "S_heritage" }, to: "S_heritage" },
      { label: "Partir pour la maison Ardel, chercher le passeport", to: "S_ardel_nuit" },
    ] },

  S_pourquoi: { act: "II", title: "Pourquoi toi", place: "clocher", second: true,
    text: [
      "« Parce que vous avez écrit la lettre de la mère Gendre, dit-elle. L'hiver dernier. Quand Coquelin a fait saisir son lavoir. Une lettre au juge, que tout le quartier a lue, parce que le juge l'a fait afficher pour se moquer, et que tout le monde a trouvé qu'elle se moquait de lui bien mieux. » Elle sourit. « Je l'ai recopiée trois fois. Je l'ai apprise par cœur. Je me suis dit : la personne qui a écrit ça n'a peur de rien, et sait mentir avec la vérité. »",
      "Elle te regarde. « Et puis vous êtes la seule personne de Lambrun à qui mon oncle ne doit pas d'argent. Ça m'a semblé une recommandation. »",
    ],
    choices: [
      { back: "S_chambre_nuit" },
    ] },

  S_heritage: { act: "II", title: "Le père de Clarisse", place: "clocher", second: true,
    text: [
      "Clarisse se tait longtemps. Le vent fait vibrer le bord de la cloche, et l'on entend ce ronronnement de bronze, presque inaudible, qui ne s'arrête jamais.",
      "« Il est tombé dans une cuve de soude, à la savonnerie, une nuit d'avril, il y a quatre ans. On l'a sorti le matin. On a dit : un vertige, il travaillait trop. » Elle regarde ses mains. « Il ne travaillait jamais la nuit. Il disait que le savon se fait le jour, comme le pain et les enfants. Et mon oncle avait perdu, la semaine d'avant, la moitié de sa part au cercle. »",
      "« Je ne sais rien, dit-elle encore. Je n'ai aucune preuve. Je sais seulement que mon oncle tient ses comptes dans un grand livre noir, dans son coffre, avec mon passeport, et qu'il ne laisse personne y toucher, pas même son notaire. Un joueur qui tient si bien ses comptes, c'est qu'il a peur de les oublier. »",
    ],
    choices: [
      { back: "S_chambre_nuit" },
    ] },

  // ------------------------------------------------------------------ the Ardel house
  S_ardel_nuit: { act: "II", title: "La maison Ardel, la nuit", place: "ardel", second: true,
    text: [
      "Deux heures et demie. La maison Ardel dort d'un œil. Les fenêtres des étages sont noires, mais il y a de la lumière au rez-de-chaussée, chez les domestiques, et des allées et venues de lanternes dans la cour : on cherche encore la demoiselle, on revient, on repart. Le maître est encore dehors, au bal, ou au cercle, ou les deux, à boire pour se donner du courage ou à jouer pour s'en donner l'occasion.",
      "Derrière la maison, la savonnerie respire dans le noir. Ses cuves chauffent toute la nuit, et une vapeur blanche, grasse, monte des lucarnes et retombe sur les toits en une bruine tiède qui sent l'huile et la soude.",
    ],
    choices: [
      { label: "Passer par la savonnerie et monter par la gouttière", test: { dom: "nature", diff: 0, label: "Nature" }, win: { to: "S_savonnerie" }, lose: { to: "S_savonnerie_chute" } },
      { label: "Frapper à la porte de l'office et parler à la cuisinière", to: "S_cuisine_nuit" },
    ] },

  S_savonnerie: { act: "II", title: "La savonnerie", place: "ardel", second: true,
    text: [
      "Tu entres dans la savonnerie par une lucarne, et tu restes un instant suspendu{e} à une poutre, au-dessus d'un spectacle d'enfer. Six cuves de fonte, larges comme des bassins, bouillonnent dans la pénombre rouge des foyers, chacune pleine d'une pâte jaune et lente qui crève en grosses bulles avec un bruit de bouche. La vapeur te brûle les yeux à travers ton masque. Des passerelles de bois courent au-dessus des cuves, sans garde-fou. Tu penses à un homme qui ne travaillait jamais la nuit.",
      "Tu traverses par la passerelle, pas à pas, au-dessus de la soude, et tu trouves au bout une échelle, puis la gouttière, puis une fenêtre du premier étage que personne n'a fermée, parce que personne n'imagine qu'on puisse venir de ce côté-là.",
    ],
    choices: [
      { label: "Entrer dans le cabinet de Gaspard Ardel", to: "S_cabinet" },
    ] },

  S_savonnerie_chute: { act: "II", title: "La gouttière", place: "ardel", second: true,
    text: [
      "La gouttière cède sous ta main avec un gémissement de fer rouillé, et tu tombes de la hauteur d'un homme, dans un tas de cendres de soude qui te reçoit comme un édredon empoisonné. Tes mains brûlent. Ta blouse blanche est grise. Un chien aboie dans la cour, puis se tait.",
      "Tu te relèves, tu secoues ta blouse, tu fais le tour, et tu frappes, en Pierrot cendreux, à la porte de l'office.",
    ],
    choices: [
      { label: "Parler à la cuisinière", to: "S_cuisine_nuit" },
    ] },

  S_cuisine_nuit: { act: "II", title: "La cuisinière", place: "ardel", second: true,
    text: [
      "La cuisinière des Ardel ouvre la porte avec une pipe en terre dans la bouche et un rouleau à pâtisserie dans la main, et elle te regarde, toi, ta larme et ton costume, sans le moindre étonnement. Un soir de Mi-Carême, elle a déjà ouvert à deux diables et un évêque.",
      "Tu lui dis que tu viens pour la demoiselle. Elle tire sur sa pipe, longtemps. « Pour la ramener, ou pour l'aider ? » Tu dis : pour l'aider. Elle hoche la tête, et s'écarte. « L'escalier de service. Le cabinet de Monsieur, c'est au premier, la porte au fond. J'ai rien vu, j'ai rien entendu, je fais la pâte des brioches de la noce. » Elle crache. « Si y a pas de noce, je les mangerai moi-même. »",
    ],
    choices: [
      { label: "Entrer dans le cabinet de Gaspard Ardel", to: "S_cabinet" },
    ] },

  S_cabinet: { act: "II", title: "Le cabinet", place: "ardel", second: true, hub: true, backName: "le cabinet",
    text: [
      { first: true, text: "Le cabinet de Gaspard Ardel est une pièce étroite, tendue de cuir de Cordoue, encombrée de meubles trop beaux pour elle : un bureau de marqueterie, deux fauteuils à oreilles, une pendule de bronze qui représente la Fortune debout sur sa roue. Sur le mur du fond, dans un cadre doré, un portrait en pied de feu Monsieur Ardel père, le fondateur, la main sur un pain de savon comme sur une Bible, regarde la pièce avec une moue de banquier." },
      { first: true, text: "Le portrait est monté sur des charnières. Derrière, encastré dans le mur, un coffre d'acier anglais, dont la serrure est un cadran à quatre molettes de cuivre." },
      { again: true, text: "Le cabinet de cuir, la Fortune sur sa roue, le portrait ouvert sur le coffre. La pendule avance." },
    ],
    choices: [
      { label: "Fouiller le bureau", hide: { seen: "S_bureau" }, to: "S_bureau" },
      { label: "Tourner les molettes du coffre", hide: { has: "papiers:pris" }, to: "S_coffre" },
      { label: "Repartir sans les papiers, avant que Monsieur rentre", hide: { has: "papiers:pris" }, to: "S_retour_gaspard" },
    ] },

  S_bureau: { act: "II", title: "Le bureau de Gaspard", place: "ardel", second: true,
    text: [
      "Des reconnaissances de dettes, en liasses, nouées de faveurs roses, comme des lettres d'amour : cercle du Commerce, cercle des Négociants, un tripot du port, un certain Monsieur Isaac, un autre certain Monsieur Isaac. Le total, griffonné au crayon sur un buvard, fait un chiffre qu'on n'écrit pas sans trembler, et la main qui l'a écrit tremblait.",
      "Et dans un tiroir, sous un pistolet de duel chargé, une lettre de Médard Coquelin, d'une écriture de comptable : *Mon cher Ardel, le prêt sera effacé le jour des noces, à midi. Si les noces n'ont pas lieu à midi, il sera exigible à midi et une minute. Vous connaissez mon amitié et mon exactitude.* Au-dessous, de la main de Gaspard, en travers : *le vingt-quatre. La noce. Ma délivrance.*",
    ],
    choices: [
      { back: "S_cabinet" },
    ] },

  S_coffre: { act: "II", title: "Le coffre", place: "ardel", second: true, puzzle: "n_coffre",
    text: [
      "Tu fais pivoter le portrait sur ses charnières. Feu Monsieur Ardel père s'écarte à regret. Le coffre t'attend, avec ses quatre molettes de cuivre, qui brillent à la lueur de ta chandelle comme quatre yeux de chat.",
    ],
    choices: [
      { back: "S_cabinet" },
    ] },

  S_coffre_ouvert: { act: "II", title: "Le coffre ouvert", place: "ardel", second: true,
    text: [
      "Un déclic. La lourde porte d'acier pivote sans un bruit, sur des gonds huilés avec un soin d'avare. Dedans, sur l'étagère du haut, quelques rouleaux d'or, très peu, beaucoup moins que la serrure ne le promettait. Sur l'étagère du milieu, un passeport pour Gênes au nom de Clarisse Ardel, avec le cachet de la préfecture, et une lettre en italien, d'une écriture de vieille dame, *Carissima nipote*, jamais remise. Tu prends les deux.",
      "Sur l'étagère du bas, un grand livre noir, relié de toile, épais comme un missel. Tu l'ouvres. Des colonnes, des dates, des sommes, d'une écriture soignée, appliquée, qui ne tremble pas ici. *Héritage Ardel, part de Clarisse.* Et en face, mois après mois, les retraits, les prêts, les pertes, jusqu'à zéro. Puis en dessous de zéro.",
      "À la date d'un jour d'avril, il y a quatre ans, une seule ligne, d'une encre plus noire : *Mon frère refuse. Il faut en finir.*",
    ],
    choices: [
      { label: "Prendre aussi le grand livre noir", hide: { has: "preuve:prise" }, fx: { flag: "preuve:prise" }, to: "S_retour_gaspard" },
      { label: "Laisser le grand livre et refermer le coffre", hide: { has: "preuve:prise" }, to: "S_retour_gaspard" },
    ] },

  S_retour_gaspard: { act: "II", title: "Monsieur rentre", place: "ardel", second: true,
    text: [
      "Une porte claque en bas. Des pas dans l'escalier, des voix. La voix douce et lasse de Gaspard Ardel, plus lasse que douce, à présent, et une autre, plus rude, qui lui répond. Ils montent.",
      "Le cabinet a deux sorties : la porte, par où ils arrivent, et un grand rideau de velours, devant la fenêtre.",
    ],
    choices: [
      { label: "Te cacher derrière le rideau", test: { dom: "discretion", diff: 0, label: "Discrétion" }, win: { to: "S_rideau" }, lose: { fx: { flag: "mouille" }, to: "S_rideau_vu" } },
    ] },

  S_rideau: { act: "II", title: "Derrière le rideau", place: "ardel", second: true,
    text: [
      "Tu te plaques contre la vitre froide, derrière le velours qui sent la poussière et le cigare. Ils entrent. Une allumette, une lampe. Gaspard Ardel se laisse tomber dans un fauteuil, et l'on entend le petit bruit sec, régulier, de ses dents sur l'ongle de son pouce.",
      { if: { has: "lazare:enferme" }, text: "« Où est Lazare ? dit-il. — Personne l'a vu depuis minuit, Monsieur. — Lazare disparaît toujours quand on a besoin de lui. C'est un talent. Je le paierai quand même. Je paie toujours ceux qui disparaissent : ce sont les seuls qui ne reviennent pas réclamer. »" },
      { if: { not: { has: "lazare:enferme" } }, text: "« Lazare la cherche, dit la voix rude. Il dit qu'elle est partie avec un Pierrot. Il dit qu'il retrouvera le Pierrot avant midi, que les Pierrots finissent toujours sur un banc. — Qu'il trouve. Qu'il trouve, et je lui donne ce qu'il voudra. »" },
      "Un silence. Puis Gaspard Ardel, très bas, comme pour lui-même : « Midi et une minute. » Il se lève, et la lampe s'éloigne, et la porte se referme. Tu attends cent battements de cœur, et tu sors par la fenêtre, par la gouttière, dans la nuit.",
    ],
    choices: [
      { label: "Gagner le quai de Gênes", fx: { time: 1 }, to: "S_quai_nuit" },
    ] },

  S_rideau_vu: { act: "II", title: "Par la fenêtre", place: "ardel", second: true,
    text: [
      "Tu te jettes derrière le rideau au moment où la porte s'ouvre, et le rideau, vieux, lourd, se décroche de sa tringle et te tombe dessus. Tu te débats sous le velours comme un fantôme de théâtre. Un cri. Une main t'empoigne. Tu frappes au hasard, tu sens céder un nez, tu ouvres la fenêtre, et tu sautes.",
      "En dessous, c'est le canal. L'eau de mars te saisit comme une poigne de glace. Tu remontes, tu craches, tu nages vers l'autre rive dans le noir, pendant qu'en haut des lanternes s'agitent et qu'une voix douce et lasse crie, sans douceur : « Un Pierrot ! Trouvez-moi ce Pierrot ! »",
    ],
    choices: [
      { label: "Gagner le quai de Gênes", fx: { time: 1 }, to: "S_quai_nuit" },
    ] },

  // ------------------------------------------------------------------ the quay, three o'clock
  S_quai_nuit: { act: "II", title: "L'Hirondelle, la nuit", place: "quai", second: true,
    fx: { meet: ["rosso"] },
    text: [
      "Trois heures. Le quai de Gênes est désert et noir, et l'estuaire, au-delà, est un trou sans fond où clapote une eau invisible. Les barques dorment bord à bord en grinçant de leurs amarres comme des chiens qui rêvent. L'Hirondelle est au bout, son oiseau de bois doré luisant faiblement à la proue, ailes ouvertes sur le vide.",
      { if: { has: "mouille" }, text: "Tu grelottes dans ta blouse trempée, qui colle à ta peau comme un linceul. Le vent de l'estuaire te traverse." },
      "Tu frappes sur la coque, à grands coups, comme un huissier. Au bout d'un long moment, une écoutille s'ouvre et une tête en sort, coiffée d'un bonnet de nuit et d'un cigare éteint. « Qui est le fils de chien qui... » Le capitaine Rosso te regarde, toi, ton masque, ta larme. Il soupire. « Un Pierrot. Évidemment. C'est la Mi-Carême. Qu'est-ce que tu veux, Pierrot ? »",
      "Tu veux des passages pour Gênes, sans nom, pour demain midi. Rosso sort sur le pont. « Une place, une écu et demi. Payée d'avance. Pas de nom, ça fait pas plus cher, parce que je sais pas écrire. »",
    ],
    choices: [
      { label: "Payer deux places", if: { gold: { min: 180 } }, hide: { item: "passage" }, fx: { gold: -180, item: "passage", flag: "passage:deux" }, to: "S_recu_nuit" },
      { label: "Payer une seule place, pour Clarisse", if: { gold: { min: 90 } }, hide: { item: "passage" }, fx: { gold: -90, item: "passage", flag: "passage:une" }, to: "S_recu_nuit" },
    ] },

  S_recu_nuit: { act: "II", title: "Le reçu", place: "quai", second: true,
    text: [
      "Rosso fait le reçu à la lueur de sa lanterne, en dessinant les chiffres avec une application de petit garçon, et le signe d'une croix énorme. Tu le prends. Tu le retournes. Tu sors ta plume et ton encrier de poche, et sur le revers, appuyé{e} contre le bastingage, tu écris quatre lignes, vite, d'une écriture qui court : une cloche pendue qui ne meurt pas, une langue qui ne parle pas, et ce qui dort sous sa robe.",
      "Puis tu rends le reçu au capitaine. « Demain matin, un Pierrot viendra. Il n'aura plus de mémoire. Rendez-lui ceci. »",
      "Rosso te regarde longtemps, le reçu entre ses gros doigts. « J'ai transporté des évêques, des forçats, des chanteuses et un éléphant, dit-il. On ne m'avait jamais fait celle-là. » Il range le reçu dans son caban. « Midi, la marée. Pas une minute après. »",
    ],
    choices: [
      { label: "Demander au capitaine de voir la cabine", hide: { seen: "S_cabine_nuit" }, to: "S_cabine_nuit" },
      { label: "Aller au lavoir du Pont-Rouge", to: "S_lavoir_nuit" },
    ] },

  // ------------------------------------------------------------------ the wash-house, half past three
  S_lavoir_nuit: { act: "II", title: "Le lavoir, la nuit", place: "lavoir", second: true,
    fx: { meet: ["babet"] },
    text: [
      "Trois heures et demie. Le lavoir du Pont-Rouge est une grande ombre posée sur l'eau, vide, silencieux, avec ses caisses de bois alignées comme des cercueils ouverts. Au bout, sous une lanterne, une femme énorme est assise sur le bord, les pieds dans le canal, une couronne de carton doré de travers sur la tête, et elle souffle comme un soufflet de forge.",
      { if: { has: "babet:leurre" }, text: "Le domino rose est roulé en boule à côté d'elle, fendu dans le dos de la nuque aux reins. « Trois heures, dit Mère Babet. J'ai dansé trois heures, de dos. Ton Arlequin m'a suivie de colonne en colonne comme un chien suit une saucisse. Il s'est aperçu à la fin, quand j'ai mangé le pâté. Une demoiselle, ça mange pas comme ça. » Elle rit. « Il était vert. Il est parti en courant soulever les nappes. »" },
      { if: { not: { has: "babet:leurre" } }, text: "« Mon Pierrot du bal ! dit Mère Babet. T'as filé avant la fin. Moi aussi. Ces dames de l'Opéra dansent comme des piquets. » Elle tape à côté d'elle sur la planche. « Assieds-toi. Tu sens la soude. »" },
      "Tu t'assois à côté d'elle. Tu sors un papier et ta plume, et tu écris, contre ton genou, à la lueur de la lanterne : quatre lignes sur une fleur rouge dans les blés et noire dans les fioles. Tu plies le papier, tu le lui donnes avec deux sous.",
      "« Demain matin, dis-tu, un Pierrot viendra, qui ne saura plus qui il est. Il portera une rose de papier. Donnez-lui ceci. Et méfiez-vous des masques, demain. » Elle te regarde comme si tu avais bu. Puis tu te penches et tu l'embrasses sur le front, sous la couronne. Elle ne dit rien du tout, ce qui ne lui est pas arrivé depuis son baptême.",
    ],
    choices: [
      { label: "Frapper au volet de Maître Ferrat, rue des Herbes", fx: { gold: -2, until: 4 }, to: "S_ferrat_nuit" },
    ] },

  // ------------------------------------------------------------------ the apothecary, four o'clock
  S_ferrat_nuit: { act: "II", title: "L'apothicaire, à quatre heures", place: "herbes", second: true,
    fx: { meet: ["ferrat"], gold: -30, item: "oubli" },
    text: [
      "Quatre heures. Tu frappes au volet de la boutique au pavot. Au bout de la troisième fois, il s'ouvre sur une chandelle et un bonnet de coton, et sous le bonnet, deux lunettes rondes. Maître Ferrat accueille la chose avec le calme parfait qu'il a, assure-t-on rue des Herbes, depuis sa naissance.",
      "Tu lui demandes ce que tu es venu{e} lui demander, et que tu as compris, en traversant la ville, sans pouvoir dire d'où te venait cette certitude : de quoi oublier une nuit. Ferrat te regarde par-dessus ses lunettes. « Pavot et datura. Trois heures de sommeil, et la nuit effacée. Si on vous prend demain, vous ne saurez rien, et vous ne pourrez rien dire. C'est ça ? » Tu dis oui. Il hoche la tête. « C'est la première fois qu'on me demande d'oublier une nuit qu'on n'a pas finie. C'est intéressant. Trente sous. »",
      "Il prépare la fiole, une petite fiole brune, bouchée de liège et de cire. Pendant qu'il dose, tu sors ton cadenas de laiton. Tu passes la chaînette dans la tresse de soie de ton masque, derrière ta tête, et tu fermes le cadenas sur ta nuque. Déclic. Puis tu lui tends la petite clef.",
      "« Gardez-la. S'il la demande par son nom, c'est qu'il sera assez réveillé pour décider. Et s'il demande si vous gardez quelque chose pour lui, donnez-lui ceci. » Tu prends une de ses ordonnances, et tu écris au dos quatre lignes sur un endroit qui garde les manteaux des gens qui dansent. Ferrat range la clef dans le bocal de racine de guimauve, l'ordonnance dans son tiroir, et garde ses questions pour lui.",
    ],
    choices: [
      { label: "Lui demander ce que fait l'herbe exactement", hide: { seen: "S_ferrat_effets" }, to: "S_ferrat_effets" },
      { label: "Porter le sac de Clarisse au vestiaire de l'Opéra", if: { has: "papiers:pris" }, fx: { until: 5 }, to: "S_vestiaire_nuit" },
      { label: "Aller à ton échoppe écrire le billet", if: { not: { has: "papiers:pris" } }, fx: { until: 5 }, to: "S_ecrire" },
    ] },

  // ------------------------------------------------------------------ the cloakroom, five o'clock
  S_vestiaire_nuit: { act: "II", title: "Le vestiaire, à cinq heures", place: "opera", second: true,
    fx: { gold: -2 },
    text: [
      "Cinq heures. Le bal s'achève dans l'Opéra comme une marée qui se retire en laissant des épaves. Les derniers masques dorment sur les banquettes. Dans un coin, un Grand Turc ronfle déjà, son turban sur les yeux. Au vestiaire, la vieille dame en bonnet de dentelle tricote au milieu des manteaux, comme une Parque.",
      "Tu as acheté en chemin, chez un fripier qui ne dormait pas, un sac de tapisserie à fleurs passées. Dedans, le passeport, la lettre de la grand-mère, et ce que Clarisse t'a confié pour la route, une chemise de nuit, une brosse en écaille, un petit portrait au pastel de sa mère. Tu épingles à la doublure, avec une épingle à cheveux de Clarisse, un papier où tu as écrit quatre lignes sur un oiseau qui part pour Gênes avec deux places sur le dos.",
      "La dame du vestiaire te donne un carton à bord doré, numéro 7, peint en rouge. Tu lui donnes un sou de plus, pour qu'elle ne rende le sac à personne d'autre, même avec le ticket. « Si quelqu'un d'autre a le ticket, dit-elle, c'est qu'il vous l'a pris, et ça me regarde pas. » Tu dis : justement.",
      "Puis tu ôtes ton soulier gauche, et tu glisses le ticket sous la semelle de feutre.",
    ],
    choices: [
      { label: "Aller à ton échoppe écrire le billet", to: "S_ecrire" },
    ] },

  // ------------------------------------------------------------------ the note
  S_ecrire: { act: "II", title: "Le billet", place: "echoppe", second: true, hub: true, backName: "ta planche",
    text: [
      { first: true, text: "Ton échoppe, au petit jour encore noir. Tu allumes la lampe, tu tailles toutes tes plumes, en rang, une à une, parce que tes mains tremblent et qu'il faut les occuper. Puis tu prends une feuille de ton meilleur papier, et tu écris à quelqu'un que tu ne connais pas encore, et qui sera toi dans une heure." },
      { first: true, text: "*Ne retire pas le masque avant midi. Tu ne te souviens de rien : c'est voulu. Tout ce que tu dois savoir, je te l'ai laissé en chemin. Suis les fleurs. Ne fais confiance à personne qui connaît ton nom.*" },
      { first: true, text: "Tu t'arrêtes, la plume levée. Il reste à dire l'essentiel : qui est l'ennemi. Et le dire de façon que l'ennemi, s'il lit par-dessus ton épaule endormie, ne comprenne pas qu'on l'a reconnu." },
      { again: true, text: "Ta planche, la lampe, les plumes en rang. Le billet attend sa dernière ligne, ou sa signature." },
    ],
    choices: [
      { label: "Chiffrer la ligne sur l'Arlequin avec le numéro du vestiaire", if: { item: "papiers" }, hide: { any: [{ has: "billet:chiffre" }, { has: "billet:clair" }, { has: "billet:muet" }] }, to: "S_chiffrer" },
      { label: "Écrire en clair : l'Arlequin ment", hide: { any: [{ has: "billet:chiffre" }, { has: "billet:clair" }, { has: "billet:muet" }] }, fx: { flag: "billet:clair" }, to: "S_billet_clair" },
      { label: "N'écrire rien de plus sur l'Arlequin", hide: { any: [{ has: "billet:chiffre" }, { has: "billet:clair" }, { has: "billet:muet" }] }, fx: { flag: "billet:muet" }, to: "S_billet_muet" },
      { label: "Glisser le grand livre noir sous la porte du banquier Coquelin", if: { has: "preuve:prise" }, hide: { has: "preuve:coquelin" }, fx: { flag: "preuve:coquelin" }, to: "S_coquelin_porte" },
      { label: "Plier la rose de papier", if: { any: [{ has: "billet:chiffre" }, { has: "billet:clair" }, { has: "billet:muet" }] }, to: "S_rose" },
    ] },

  S_chiffrer: { act: "II", title: "La ligne à chiffrer", place: "echoppe", second: true, puzzle: "n_billet",
    text: [
      "Le numéro du vestiaire est dans ton soulier. Tu le sens sous ton talon, comme une petite pierre qui aurait des idées. Personne d'autre que toi ne saura où le chercher : il faudra que tu le trouves pour lire ce que tu vas écrire, et quand tu l'auras trouvé, tu seras déjà assez loin sur la route pour comprendre.",
    ],
    choices: [
      { back: "S_ecrire" },
    ] },

  S_billet_chiffre: { act: "II", title: "Vingt lettres", place: "echoppe", second: true,
    text: [
      "**S HYSLXBPU LZA H NHZWHYK.** Tu relis la ligne en reculant chaque lettre de sept crans, et la phrase se redresse sous tes yeux comme un noyé qu'on retourne. Tu ajoutes : *Si tu doutes, la clef de cette ligne est le numéro que tu as laissé à l'Opéra.* Puis tu signes : *Toi.*",
      "Tu as l'impression, en posant la plume, d'avoir déjà lu ce billet. Ce qui, quand on y pense, est la moindre des choses.",
    ],
    choices: [
      { back: "S_ecrire" },
    ] },

  S_billet_clair: { act: "II", title: "En clair", place: "echoppe", second: true,
    text: [
      "*L'Arlequin ment. Fuis-le.* Tu l'écris en lettres capitales, nettes, lisibles d'un coup d'œil, au bas du billet. Puis tu signes : *Toi.*",
      "C'est simple, c'est clair, c'est franc, et cela se lira aussi bien par-dessus une épaule endormie. Tu le sais. Tu le laisses quand même. Il y a des nuits où l'on préfère la franchise à la prudence, et ce n'est pas toujours la plus mauvaise façon de perdre.",
    ],
    choices: [
      { back: "S_ecrire" },
    ] },

  S_billet_muet: { act: "II", title: "Rien de plus", place: "echoppe", second: true,
    text: [
      "Tu poses la plume. *Ne fais confiance à personne qui connaît ton nom.* Cela suffira. Tu te connais : tu as toujours été méfiant{e}, quand tu ne savais rien. C'est quand tu sais que tu fais confiance. Demain, tu ne sauras rien. Tu signes : *Toi.*",
    ],
    choices: [
      { back: "S_ecrire" },
    ] },

  S_coquelin_porte: { act: "II", title: "La porte du banquier", place: "echoppe", second: true,
    fx: { ep: ["histoire", 300] },
    text: [
      "La maison Coquelin est à deux rues, sur le quai des Changeurs, haute, étroite et propre comme un coffre-fort. Tu glisses le grand livre noir sous la porte, à plat, avec une feuille épinglée sur la couverture, de ta main : *À Monsieur Coquelin, de la part d'un ami de l'exactitude. Page d'avril, il y a quatre ans. Et le reste.*",
      "Coquelin est un vieil homme avide et sans cœur. C'est aussi un banquier, c'est-à-dire un homme qui déteste par-dessus tout prêter à qui triche sur ses comptes. Tu comptes sur le banquier.",
    ],
    choices: [
      { back: "S_ecrire" },
    ] },

  S_rose: { act: "II", title: "La rose de papier", place: "echoppe", second: true,
    text: [
      "Il reste la première devinette, celle qui ouvrira toutes les autres. Tu prends une feuille de vergé blanc, et tu plies une rose, pétale par pétale, comme te l'avait appris une costumière de ta jeunesse, et sur un pétale, à l'intérieur, en lettres minuscules, tu écris quatre lignes sur une reine d'un jour qui rend blanc ce que la ville a sali.",
      "Puis tu brûles tous tes brouillons dans le poêle, un à un. Un coin de feuille résiste au feu, où l'on lit encore le mot *hirond*. Tu le laisses. Tu n'as plus le temps.",
      "Tu épingles la rose sur ta blouse, à la place du cœur. Tu plies le billet en quatre et tu le glisses dans ta poche. Tu tailles une dernière plume, pour rien. Puis tu souffles la lampe.",
    ],
    choices: [
      { label: "Aller t'asseoir sur le banc du canal des Teinturiers", to: "S_banc_nuit" },
    ] },

  // ------------------------------------------------------------------ the bench, at dawn
  S_banc_nuit: { act: "II", title: "Le banc, à l'aube", place: "canal", second: true,
    text: [
      "Le jour hésite encore. Le canal des Teinturiers coule devant toi, noir, puis gris, puis bleu d'un côté et rouge de l'autre, à mesure que la lumière remonte de l'eau. Une mouette se pose sur le dossier du banc, à un pied de ton visage, et penche la tête d'un côté, puis de l'autre.",
      "Tu sors la fiole brune. Tu fais sauter la cire avec l'ongle. Tu penses à tout ce que tu as fait cette nuit, une dernière fois, comme on fait l'inventaire d'une maison avant de la quitter : le domino rose, la loterie, la cloche, le coffre, le capitaine, la Reine, l'apothicaire, le vestiaire, le billet, la rose. Dans une heure, il n'en restera rien. Il restera quelqu'un qui te ressemble, et qui devra tout retrouver tout{e} seul{e}, en suivant des fleurs.",
      "Tu lui souhaites bonne chance. Tu lui en veux un peu d'avance.",
    ],
    choices: [
      { label: "Boire la fiole d'un trait", if: PARTIE, fx: { flag: "clarisse:partie" }, to: "F_hirondelle" },
      { label: "Boire la fiole d'un trait", if: { not: PARTIE }, to: "F_hirondelle" },
    ] },

  F_hirondelle: { act: "II", title: "L'Hirondelle", place: "canal", end: true, second: true,
    fx: { flag: "fin:hirondelle" },
    text: [
      "C'est amer, puis c'est doux, puis ce n'est plus rien. Le canal s'incline. La mouette s'agrandit. Tu t'allonges sur le banc, la tête sur ton bras, et la nuit se replie au-dessus de toi comme une page qu'on tourne, et tu dors.",
      "Ce qui suit, tu ne le sauras jamais tout à fait. Ou tu le sais déjà.",
      { if: { all: [{ has: "nom:faux" }, { not: { has: "lazare:enferme" } }] }, text: "À six heures, Lazare parcourt les quais en demandant à tout le monde un certain Lunaire. Les blanchisseuses rient. Les teinturiers haussent les épaules. Il passe à vingt pas d'un banc où dort un Pierrot parmi trente autres, et il ne s'arrête pas : il cherche un nom, et ce Pierrot-là n'en a plus." },
      { if: { has: "lazare:enferme" }, text: "À dix heures, les machinistes de l'Opéra, venus chercher les costumes du *Barbier de Séville*, ouvrent la porte du magasin et y trouvent un Arlequin endormi dans une robe de Rosine, qui leur demande l'heure avec une voix de mourant. On lui dit l'heure. Il se met à courir, mais Lambrun est grande, un matin de Mi-Carême, et il ne sait pas quel banc chercher." },
      { if: { all: [{ has: "billet:clair" }, { not: PARTIE }] }, text: "À six heures, un Arlequin s'assoit à côté de toi sur le banc, sort le billet de ta poche avec deux doigts légers, le lit, sourit à la dernière ligne, et le remet en place. Puis il attend, en sifflotant, que tu te réveilles." },
      { if: { has: "clarisse:partie" }, text: "Le matin se passe comme il était écrit, ou presque. Un Pierrot sans mémoire suit des fleurs de papier à travers la ville, de la Reine à l'apothicaire, de l'Opéra au quai, et monte à onze heures cent vingt marches de pierre jusqu'à une jeune fille rousse qui l'attend sous une cloche, et qui rit en le voyant." },
      { if: { all: [{ has: "clarisse:partie" }, { has: "passage:deux" }] }, text: "À midi moins le quart, sur le quai de Gênes, au milieu de la foule qui hurle autour du bonhomme Carême, un domino noir et un Pierrot montent la passerelle de l'Hirondelle. Le capitaine Rosso compte deux têtes, crache par-dessus bord, et fait larguer. Le Pierrot ne sait pas très bien pourquoi il part. Il a dans sa poche une lettre cachetée de cire noire pour une vieille dame de Gênes, et dans la main, la main d'une fille qui lui expliquera tout pendant la traversée. Il trouve que c'est une assez bonne façon de commencer une vie." },
      { if: { all: [{ has: "clarisse:partie" }, { has: "passage:une" }] }, text: "À midi moins le quart, sur le quai de Gênes, un domino noir monte seul la passerelle de l'Hirondelle, se retourne, et fait un signe à un Pierrot resté sur le quai, au milieu de la foule. Le Pierrot répond au signe sans savoir qui il salue. Il sait seulement qu'il a bien fait, et que c'est la première fois de sa vie qu'il en est si sûr sans savoir pourquoi." },
      { if: { all: [{ not: { has: "clarisse:partie" } }, { not: { has: "preuve:coquelin" } }] }, text: "Le matin se passe comme tu l'as lu. Un Pierrot suit des fleurs. Un Arlequin le suit. À midi, dans la chambre des cloches, un couteau coupe une tresse de soie, et la Bourdonne sonne la noce à toute volée, pendant que l'Hirondelle part pour Gênes sans personne. Il manquait une chose, cette nuit, pour que les fleurs ne servent qu'à toi." },
      { if: { all: [{ not: { has: "clarisse:partie" } }, { has: "preuve:coquelin" }] }, text: "Le matin se passe comme tu l'as lu, jusqu'à midi. À midi, sur le parvis de Saint-Brice, Monsieur Médard Coquelin descend de voiture avec son notaire et un grand livre noir sous le bras. Il reste au pied des marches, ouvre le livre à la page d'avril, devant tout le monde, et le tend au commissaire de police, qui passait par là parce que Coquelin l'avait prié de passer. Gaspard Ardel lit la page, et devient de la couleur de ses gants. La noce est annulée. Clarisse, ramenée du clocher par les valets de son oncle, voit les agents l'emmener à sa place." },
      { if: { all: [{ has: "clarisse:partie" }, { has: "preuve:coquelin" }] }, text: "Sur le parvis de Saint-Brice, à midi, la mariée manque. Il y a Monsieur Médard Coquelin, un grand livre noir ouvert à la page d'avril, un commissaire de police, et Gaspard Ardel qui devient de la couleur de ses gants. Le banquier réclame la justice, avec l'exactitude qu'il met à réclamer un prêt." },
      { if: { has: "clarisse:partie" }, text: "Et dans la chambre des cloches, Tiburce, seul, tire la corde de toutes ses forces. La Bourdonne s'ébranle et sonne sur Lambrun. Elle sonne à toute volée, comme pour un baptême, pendant que sur le quai le bonhomme Carême prend feu, et que l'Hirondelle, entre les fumées, déploie sa voile vers Gênes." },
      { if: { has: "babet:leurre" }, text: "Sur le canal, la Reine des Blanchisseuses, sur son trône de jupons, bénie par le curé, regarde passer la voile au loin, et lève son battoir comme un sceptre." },
    ] },
};
