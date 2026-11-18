// L'Île Folle-Aiguille · side story « Les derniers mots du capitaine Audren » (owes its question to Conrad's Heart of
// Darkness: what does one tell the woman who waited, when the man she waited for came back a monster and died crying
// out his horror?). Act II, Victorine in Morlenc: a captain just landed from ten years at a trading post on the Côte des
// Palmes lies dying of fever two floors above her room at the Cormoran. She nurses him three nights. He raves about
// fires. He leaves a journal. His betrothed, who has waited ten years in the upper town, asks for his last words.
// Victorine burns the journal unread or reads it, then tells her a merciful lie (uz:ment), the truth (uz:verite), or
// gives her the journal and lets her read it herself (uz:journal). Wired in A2v_jours.
module.exports = {
  passages: {
    UZ_chambre: { act: "II", title: "Les derniers mots du capitaine Audren", place: "quai_hollandes", ambiance: "nuit",
      fx: { meet: "audren" },
      text: [
        "L'aubergiste du Cormoran frappe à sa porte à minuit, en bonnet de nuit, une chandelle à la main. Il y a, au troisième, un capitaine débarqué ce matin d'un trois-mâts de retour de la Côte des Palmes, qui brûle de fièvre et qui crie. Il paie bien. Il a demandé qu'on n'appelle personne. L'aubergiste a pensé que la dame du deuxième, qui est médecin, ne compte pas pour personne.",
        "Le capitaine Audren Le Scouarnec a quarante ans et en paraît soixante-dix. Il est jaune, d'un jaune de vieil ivoire, avec des yeux trop grands dans un visage creusé jusqu'à l'os. Il a été, dit sa malle, agent principal du comptoir de la Compagnie des Palmes, sur le grand fleuve, pendant dix ans. La malle est pleine de choses : des ivoires sculptés, des masques, des bracelets de cuivre, des lances. Et, au fond, un gros carnet relié de toile cirée, fermé d'une ficelle.",
        "La fièvre est celle des fleuves, la mauvaise, celle qui revient tous les trois jours et qui finit par ne plus repartir. Victorine sait, au premier regard, qu'il ne verra pas la fin de la semaine. Elle le soigne quand même. Quinquina, éponge, eau. Il délire. Il parle à des gens qui ne sont pas là, en deux langues, la sienne et une autre, chantante, dont elle ne comprend pas un mot. Il crie, la nuit, toujours la même chose : « Les feux. Les feux. Éteignez les feux. »",
      ],
      choices: [{ label: "Le veiller jusqu'au bout", to: "UZ_mort" }] },
    UZ_mort: { act: "II", title: "Les derniers mots du capitaine Audren", place: "quai_hollandes", ambiance: "nuit",
      text: [
        "Il a des moments de lucidité. Dans l'un d'eux, la deuxième nuit, il lui demande son nom, et ce qu'elle fait là. Puis il lui demande, très poliment, de faire parvenir après sa mort une lettre à Mademoiselle Amélie Kerdudal, rue des Juges, en haute ville. Sa fiancée. Ils devaient se marier il y a dix ans, à son premier retour. Il n'est jamais revenu. Il lui a écrit tous les mois. Elle l'a attendu. Il dit qu'elle a attendu dix ans un homme qui n'existe plus.",
        "La troisième nuit, vers quatre heures, il se redresse sur ses oreillers, d'un coup, les yeux grands ouverts, fixés sur un coin vide de la chambre. Il ne délire plus. Il voit quelque chose. Il dit, d'une voix parfaitement nette, avec une sorte d'émerveillement terrifié : « Toutes les cases. Toutes. Et les enfants dedans. Et j'ai compté. » Puis il crie, un cri long, qui réveille l'auberge entière. Puis il retombe. Il est mort.",
        "Le matin, Victorine trouve la lettre pour Amélie Kerdudal dans la malle, cachetée, prête depuis longtemps, à en juger par le papier jauni. Elle trouve aussi le carnet de toile cirée, fermé de sa ficelle. Dix ans de comptoir. Elle le tient dans ses mains. Il est lourd. Elle ne sait pas ce qu'il contient. Elle croit le deviner, après ce qu'elle a entendu à quatre heures du matin.",
      ],
      choices: [
        { label: "Ouvrir le carnet, et lire", to: "UZ_lu" },
        { label: "Le brûler dans le poêle sans l'ouvrir", to: "UZ_brule" },
      ] },
    UZ_lu: { act: "II", title: "Les derniers mots du capitaine Audren", place: "quai_hollandes", ambiance: "ville",
      text: [
        "Elle le lit en une matinée, assise au chevet du mort, avant qu'on vienne le chercher. Les premières pages sont celles d'un jeune homme ardent, qui décrit le fleuve, les forêts, les villages, avec un lyrisme naïf, et qui parle d'Amélie à chaque page. Puis les pages changent. Les comptes d'ivoire. Les quotas. Les villages qui ne livrent pas assez. Les mesures. Les mesures prises. Les feux.",
        "Elle lit des choses qu'elle ne répétera jamais à personne. Des choses écrites d'une écriture soignée, régulière, comptable, avec des dates, des chiffres, des noms de villages, et parfois, en marge, une phrase d'une autre encre, comme celle-ci, à la date d'un incendie : Pensé à A. toute la soirée. Lui écrire demain. Il lui a écrit le lendemain. Elle le sait : la date de la lettre est dans le carnet.",
        "La dernière page est récente, d'une main tremblante. Il y a écrit qu'il rentrait pour mourir, et qu'il ne voulait pas qu'Amélie sache. Il y a écrit aussi, au-dessous, d'une écriture plus grande : Qu'elle sache. Puis il a rayé cette ligne, d'un trait. Puis, au-dessous du trait, il a écrit : Je ne sais pas. Victorine ferme le carnet. Elle se lave les mains, longtemps, à la cuvette, sans savoir pourquoi.",
      ],
      choices: [{ label: "Monter rue des Juges, chez Mademoiselle Kerdudal", to: "UZ_amelie" }] },
    UZ_brule: { act: "II", title: "Les derniers mots du capitaine Audren", place: "quai_hollandes", ambiance: "ville",
      text: [
        "Elle ouvre la porte du poêle. Elle y jette le carnet, avec sa ficelle. La toile cirée grésille, se tord, puis les pages s'ouvrent dans la chaleur comme les feuilles d'un chou qu'on cuit, et elle voit, une seconde, des colonnes de chiffres, des dates, une écriture régulière, avant que tout noircisse. Elle referme le poêle. Elle se dit qu'elle n'avait pas le droit de lire ce qu'un homme a écrit pour lui-même. Elle se dit aussi qu'elle avait peur de lire.",
        "Elle sait seulement ce qu'elle a entendu. Les feux. Les cases. Les enfants dedans. J'ai compté. Elle ne sait pas si c'est du délire ou un souvenir. Elle a vu des fiévreux inventer des massacres, et des assassins mourir en parlant de leur mère. Elle se dit que le doute est une forme de charité. Elle se dit que c'est la plus commode.",
        "Il reste la lettre cachetée, pour Amélie Kerdudal, et les derniers mots. On viendra les lui demander. On demande toujours les derniers mots. Elle s'habille, elle met la lettre dans son sac, et elle monte vers la haute ville, sous une pluie fine, en préparant des phrases qu'elle ne dira pas.",
      ],
      choices: [{ label: "Monter rue des Juges, chez Mademoiselle Kerdudal", to: "UZ_amelie" }] },
    UZ_portrait: { act: "II", title: "Les derniers mots du capitaine Audren", place: "haute_ville", ambiance: "ville",
      text: [
        "Au-dessus de la cheminée, dans un cadre doré que personne n'a laissé ternir, un jeune homme en uniforme de la Compagnie, la main sur un globe, regarde un peu au-dessus de la tête des visiteurs, avec cet air de promettre quelque chose au plafond qu'ont tous les portraits de départ. Vingt-cinq ans. Des cheveux blonds, une bouche généreuse, un menton de bon élève. Le peintre a mis dans ses yeux une lumière bleue de bon augure.",
        "Victorine le regarde, et elle revoit l'homme qu'elle a veillé trois nuits : la peau jaune tendue sur les pommettes, les cheveux blancs collés de sueur, les mains qui griffaient le drap, les yeux grands ouverts sur des choses qu'il était seul à voir. Elle cherche, d'un visage à l'autre, un trait commun. Elle trouve le menton. Il avait gardé le menton.",
        "Sous le portrait, sur le piano fermé, une partition ouverte, jaunie, aux coins roulés par l'humidité. Une romance à deux voix. Les deux voix sont annotées au crayon, deux écritures différentes, des respirations, des nuances, un « plus doux ici » d'une main de jeune fille, et, d'une main d'homme, en marge de la dernière mesure, une petite étoile.",
        "Amélie Kerdudal suit son regard. Elle dit qu'ils l'ont chantée la veille de son départ. Elle dit qu'elle n'a jamais refermé le cahier. Elle dit que la servante a le droit d'épousseter le piano, mais qu'elle n'a pas le droit de toucher à la page. Elle dit cela avec un sourire bref, comme on avoue une petite folie qu'on a décidé de garder. Victorine regarde l'étoile, et elle ne dit rien.",
      ],
      choices: [
        { back: "UZ_amelie", label: "Revenir s'asseoir en face d'elle" }
      ] },
    UZ_servante: { act: "II", title: "Les derniers mots du capitaine Audren", place: "haute_ville", ambiance: "ville",
      text: [
        "La servante est une vieille femme en coiffe, au visage plissé comme une pomme d'hiver, qui reconduit Victorine dans l'entrée pour qu'elle reprenne son manteau, et qui, au lieu de le lui tendre, le garde contre elle, en le pliant et en le dépliant. Elle parle très vite, très bas, comme on vide une bouteille avant qu'on vous l'arrache.",
        "Dix ans, dit-elle. Trois prétendants, trois bons partis, renvoyés. Un notaire, un capitaine du port, un veuf très riche de la place du Change, qui revenait chaque année au premier de l'an, avec un bouquet, et qui a fini par épouser une cousine. Mademoiselle allait au port chaque fois qu'un navire de la Compagnie entrait. Chaque fois. Elle a compté, un jour : cent quarante navires. Elle mettait sa robe grise, celle qu'il aimait.",
        "Elle dit que Mademoiselle a brodé son trousseau la première année. Puis qu'elle l'a défait, la quatrième, parce que les modes avaient changé, et qu'elle l'a rebrodé. Puis défait encore, la huitième, parce qu'elle avait maigri. Elle dit qu'il dort dans un coffre, au grenier, le troisième trousseau, et qu'il ne servira plus, sauf à l'enterrer, peut-être.",
        "Puis la servante lève les yeux, et elle dit, d'une voix soudain dure : « Les lettres étaient belles, madame. Toutes. Elle me les lisait, le soir. Je ne sais pas lire. Si vous avez quelque chose à lui dire qui n'est pas beau, dites-le-moi d'abord, à moi, que je sache où mettre mes mains. » Elle rend enfin le manteau. Elle ne bouge pas de l'entrée.",
      ],
      choices: [
        { back: "UZ_amelie", label: "Retourner au salon, où Amélie Kerdudal attend" }
      ] },
    UZ_amelie: { act: "II", title: "Les derniers mots du capitaine Audren", place: "haute_ville", ambiance: "ville",
      text: [
        { first: true, text: "La maison est haute et étroite, en granit gris, avec un rideau de dentelle à chaque fenêtre. Mademoiselle Amélie Kerdudal reçoit Victorine dans un salon où rien n'a bougé depuis dix ans, à en juger par la couleur des tentures. Elle a trente-deux ans. Elle est vêtue de noir. Elle sait déjà : on le lui a dit ce matin, au port. Elle se tient très droite, avec un visage d'une beauté fatiguée, et des yeux qui n'ont pas pleuré, parce qu'elle a fini ses larmes, dit-elle, il y a longtemps, à force d'attendre." },
        { first: true, text: "Elle prend la lettre. Elle ne l'ouvre pas. Elle la pose sur ses genoux. Elle dit qu'elle a toutes les autres, cent vingt, rangées par date dans un coffret de bois de rose. Elle dit qu'elles sont belles. Il parlait du fleuve, des oiseaux, des enfants des villages qui couraient après sa pirogue. Il disait qu'il faisait du bien, là-bas. Il disait qu'il revenait bientôt. Elle dit qu'elle le croyait. Elle dit qu'elle le croit encore." },
        { first: true, if: { seen: "UZ_lu" }, text: "Victorine pense aux enfants des villages. Elle pense à la date d'une lettre, dans le carnet, le lendemain d'un incendie. Elle se demande laquelle de ces cent vingt lettres porte cette date. Elle sent ses mains devenir froides." },
        { first: true, if: { seen: "UZ_brule" }, text: "Victorine pense aux enfants des villages. Elle pense aux cases, et aux feux, et à une écriture régulière qui a noirci dans un poêle avant qu'elle puisse la lire. Elle ne sait rien. Elle sait trop." },
        { first: true, text: "Puis Amélie Kerdudal lève vers elle ses yeux secs, et lui pose la question. Elle dit qu'elle sait qu'il est mort la nuit, et que Victorine était là. Elle demande quels ont été ses derniers mots." },
        { again: true, text: "Amélie Kerdudal attend, très droite, la lettre fermée sur ses genoux, et le salon garde ses dix ans de silence." }
      ],
      choices: [
        { label: "Regarder le portrait, au-dessus de la cheminée", to: "UZ_portrait", hide: { seen: "UZ_portrait" } },
        { label: "Demander à la vieille servante, dans l'entrée, comment ont passé ces dix ans", to: "UZ_servante", hide: { seen: "UZ_servante" } },
        { label: "Lui dire qu'il est mort en disant son nom", fx: { flag: "uz:ment" }, to: "UZ_ment" },
        { label: "Lui répéter ce qu'il a dit, mot pour mot", fx: { flag: "uz:verite" }, to: "UZ_verite" },
        { label: "Lui donner le carnet, et la laisser décider de le lire", fx: { flag: "uz:journal" }, to: "UZ_journal", if: { seen: "UZ_lu" }, why: "Elle a jeté le carnet au feu." },
      ] },
    UZ_ment: { act: "II", title: "Les derniers mots du capitaine Audren", place: "haute_ville", ambiance: "ville",
      text: [
        "Victorine dit qu'il a dit son nom. Amélie. Elle dit qu'il s'est redressé, vers quatre heures, avec les yeux ouverts, comme s'il voyait quelqu'un, et qu'il a dit Amélie, très doucement, et qu'il est mort. Elle le dit d'une voix égale, en regardant la jeune femme dans les yeux. C'est le premier mensonge de cette taille qu'elle fait dans sa vie de médecin. Il sort très facilement. Ça l'effraie.",
        "Amélie Kerdudal ferme les yeux. Pour la première fois, elle pleure. Des larmes silencieuses, qui coulent sans que son visage bouge. Elle dit merci. Elle dit qu'elle le savait. Elle dit qu'elle savait qu'il penserait à elle, à la fin. Elle prend la main de Victorine et la serre, très fort, entre ses deux mains froides. Elle dit que Victorine lui a fait un cadeau qu'elle gardera toute sa vie.",
        "Victorine redescend vers le port sous la pluie. Elle pense qu'elle a donné à une femme exactement ce qu'elle voulait entendre, et que c'est ce que faisaient les cent vingt lettres. Elle pense qu'elle vient d'écrire la cent vingt et unième. Elle pense que, de tous les gens qui ont menti à Amélie Kerdudal, elle est la seule qui l'ait fait par pitié. Elle se demande si c'est une excuse ou une circonstance aggravante.",
        { if: { seen: "UZ_lu" }, text: "Le soir, elle brûle le carnet dans le poêle de sa chambre, page par page, en lisant chacune une dernière fois. Elle pense que personne, désormais, ne saura ce qui s'est passé sur ce fleuve, sauf elle. Elle pense que les enfants des cases méritaient mieux qu'une seule lectrice, qui se tait. Elle ne trouve personne à qui le donner." },
      ],
      choices: [{ label: "Retourner à l'auberge du Cormoran", fx: { quest: "UZ" }, back: "A2v_jours" }] },
    UZ_verite: { act: "II", title: "Les derniers mots du capitaine Audren", place: "haute_ville", ambiance: "ville",
      text: [
        "Victorine dit la vérité. Elle répète les mots, exactement, sans rien ajouter, sans rien expliquer, de sa voix de médecin qui rapporte un symptôme : « Toutes les cases. Toutes. Et les enfants dedans. Et j'ai compté. » Elle dit qu'il a crié, ensuite. Elle dit qu'il ne lui a rien dit d'autre, cette nuit-là. Elle dit qu'il lui avait parlé d'elle, la veille, et qu'il avait demandé qu'on lui porte cette lettre.",
        "Amélie Kerdudal ne bouge pas. Elle ne comprend pas, d'abord. Puis elle comprend, et Victorine voit la compréhension descendre sur son visage comme une marée qui monte, lentement, en recouvrant tout. Elle regarde la lettre sur ses genoux. Elle regarde le coffret de bois de rose, sur la console. Elle dit, d'une voix lointaine, qu'il parlait des enfants des villages qui couraient après sa pirogue.",
        "Elle se lève. Elle ouvre le coffret. Elle prend les cent vingt lettres, toutes, et la cent vingt et unième, et elle les regarde. Elle ne les brûle pas. Elle ne les déchire pas. Elle les range, une par une, dans l'ordre, et elle referme le coffret, et elle donne un tour de clef. Puis elle dit, sans se retourner, qu'elle remercie Madame la médecin de sa franchise. Elle dit qu'elle a attendu dix ans un homme qui n'existait pas, et qu'elle préfère le savoir, parce qu'au moins maintenant elle peut cesser d'attendre.",
        "Victorine apprend, avant l'appareillage, que Mademoiselle Kerdudal a quitté le noir, et qu'elle a donné le coffret de bois de rose, scellé, à l'Académie de Morlenc, avec une lettre demandant qu'on l'ouvre dans cinquante ans et qu'on le compare aux registres de la Compagnie des Palmes. Victorine pense qu'elle a brisé une femme. Elle pense aussi qu'elle a peut-être armé une justice. Elle ne sait pas laquelle des deux pensées est la vraie. Elle les garde toutes les deux.",
      ],
      choices: [{ label: "Retourner à l'auberge du Cormoran", fx: { quest: "UZ" }, back: "A2v_jours" }] },
    UZ_journal: { act: "II", title: "Les derniers mots du capitaine Audren", place: "haute_ville", ambiance: "ville",
      text: [
        "Victorine ne répond pas à la question. Elle sort de son sac le carnet de toile cirée, avec sa ficelle, et elle le pose sur la table, entre elles deux. Elle dit que les derniers mots du capitaine Audren sont là-dedans. Tous. Dix ans. Elle dit qu'elle les a lus. Elle dit qu'elle ne les répétera pas. Elle dit que c'est à Amélie de choisir si elle veut les connaître, et qu'aucune autre personne au monde n'a le droit de choisir pour elle, pas même une médecin, pas même lui.",
        "Amélie Kerdudal regarde le carnet longtemps. Elle ne le touche pas. Elle demande si c'est terrible. Victorine dit oui. Elle demande s'il y parle d'elle. Victorine dit oui, souvent, jusqu'à la fin. Elle demande si, en le lisant, elle l'aimera encore. Victorine dit qu'elle ne sait pas. Elle dit que c'est la seule réponse honnête qu'elle puisse faire.",
        "La jeune femme pose la main à plat sur la couverture de toile cirée. Elle reste ainsi, sans ouvrir, une minute entière. Puis elle défait la ficelle. Victorine se lève pour partir. Amélie lui demande de rester. Elle dit qu'elle ne veut pas être seule pour la première page. Victorine se rassoit. Elle reste trois heures, dans le salon aux tentures fanées, pendant que la pluie coule sur la dentelle des rideaux, à regarder une femme lire, sans un mot, sans une larme, en tournant les pages avec une lenteur de prière, et à voir son visage changer de page en page, comme on voit vieillir quelqu'un en accéléré.",
        "Quand elle a fini, Amélie Kerdudal referme le carnet. Elle dit, d'une voix très calme, qu'elle va le porter elle-même au procureur de Morlenc. Elle dit que c'était à elle de le faire, puisque c'est à elle qu'il écrivait le lendemain. Elle remercie Victorine de lui avoir laissé le choix. Elle dit que c'est la première chose, dans toute cette histoire, qui lui ait appartenu. Victorine redescend vers le port. Elle se dit qu'elle a épargné à une femme le mensonge, et qu'elle ne lui a rien épargné d'autre. Elle se dit que c'était peut-être la seule chose à lui épargner.",
      ],
      choices: [{ label: "Retourner à l'auberge du Cormoran", fx: { quest: "UZ" }, back: "A2v_jours" }] },
  },
  extras: {
    people: {
      audren: { name: "Audren Le Scouarnec", aka: ["le capitaine Audren", "le capitaine du troisième"], qui: "Ancien agent du comptoir de la Compagnie des Palmes, rentré à Morlenc pour y mourir de la fièvre des fleuves." },
      kerdudal: { name: "Amélie Kerdudal", aka: ["la fiancée de la rue des Juges", "Mademoiselle Kerdudal"], f: true, qui: "Fiancée du capitaine Audren, qui l'a attendu dix ans en haute ville de Morlenc." },
    },
    quests: [
      { id: "UZ", act: "II", kind: "annexe", title: "Les derniers mots du capitaine Audren", start: "UZ_chambre", doit: "coeurtenebres", echo: ["uz:ment", "uz:verite", "uz:journal"] },
    ],
  },
};
