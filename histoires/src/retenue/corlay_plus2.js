// Corlay, second pass: the warehouses emptied in the night (Gervais the foreman, the carts for the wool or for the
// people), Tassin dragged into the gallery, the key handed to Pernelle, the garden door seen from the stairs, and Aude
// at Dame Hesdin's. Eight new endings.
var A = "I";
module.exports = {
  _add: {
    C_cabinet: [
      { label: "Faire vider tes entrepôts des Foulons, cette nuit", if: { savoir: "veine" }, to: "C_entrepots" },
      { label: "Donner la clé à Pernelle, et la laisser décider", if: { has: "corlay:pernelle" }, to: "C_pernelle_cle" },
    ],
    C_tassin_seul: [
      { label: "Emmener Tassin dans la galerie, cette nuit, de gré ou de force", if: { savoir: "galerie" }, to: "C_tassin_force" },
    ],
    C_vote_nuit: [
      { label: "Te relever : une lumière brûle encore au cabinet", if: { lu: "O_pernelle" }, to: "C_escalier" },
    ],
    C_aude: [
      { label: "Aller avec Aude chez Dame Hesdin", if: { lu: "C_hesdin" }, to: "C_aude_hesdin" },
    ],
  },

  // ------------------------------------------------------------------ the warehouses
  C_entrepots: { act: A, title: "La laine de la saison", place: "hauteville", fx: { time: 0.25 },
    text: [
      "Tu ranges la lettre du vieux dans ton gilet. Le vieux Vellard se trompe peut-être sur la digue. Il a peut-être raison. Dans les deux cas, ta laine est au bord de la Sorge, dans trois entrepôts de briques, et elle vaut quarante mille écus.",
      "« Pernelle. Envoyez le valet réveiller Gervais, aux Foulons. Qu'il prenne ses hommes, toutes les charrettes de la fabrique, et qu'il monte la laine dans les greniers de la Côte. Cette nuit. »",
      "Pernelle Daguet écrit l'ordre, les yeux sur la feuille. Puis elle demande : « Et la clé, Monsieur ? »",
    ],
    choices: [
      { label: "La ranger au coffre, et descendre surveiller le chargement", to: "C_gervais", fx: { time: 1.25 } },
      { label: "La prendre sur toi, et descendre surveiller le chargement", to: "C_gervais", fx: { flag: "corlay:cle_poche", time: 1.25 } },
    ] },
  C_gervais: { act: A, title: "Les charrettes", place: "foulons", fx: {},
    text: [
      "À minuit et demi, la rue des Teinturiers est pleine de torches. Trente hommes chargent les balles de laine sur douze charrettes, en chemise malgré le froid. Les chevaux fument. Aux fenêtres, des femmes en bonnet regardent sans comprendre.",
      { if: { has: "corlay:cle_poche" }, text: "Tu sens la clé contre ta cuisse, sous ton manteau, à chaque pas." },
      "Gervais vient à toi en s'essuyant les mains. Il est ton contremaître depuis vingt ans. Il a soixante ans, une femme et quatre petits-enfants, et il habite au-dessus de l'entrepôt du milieu.",
      "« Monsieur. Les hommes demandent pourquoi on charge à minuit. Moi aussi, je demande. »",
    ],
    choices: [
      { label: "« Une commande de Lyon. Il faut que tout soit en haut avant l'aube. »", to: "C_mensonge" },
      { label: "Lui dire la vérité, à lui seul, à voix basse", to: "C_gervais_verite" },
    ] },
  C_mensonge: { act: A, title: "Une commande de Lyon", place: "foulons", fx: { time: 3.5 },
    text: [
      "Gervais te regarde un moment. Il hoche la tête. Il retourne aux charrettes et il crie : « Lyon ! Allez ! »",
      "Les charrettes montent la Côte une à une, toute la nuit. Tu restes sous l'auvent de l'entrepôt, dans ton manteau, à compter les balles. Trois cents. Quatre cents. Les femmes ont refermé leurs volets.",
      "À quatre heures, la pluie. À cinq heures, la dernière charrette passe le coin de la rue, avec les registres de la fabrique et le coffre de la paie. Les hommes rentrent chez eux, trempés, et se couchent.",
      "Tu montes dans la dernière charrette, à côté du charretier.",
    ],
    choices: [{ label: "Monter la Côte", to: "C_laine" }] },
  C_laine: { act: A, title: "Quatre cents balles", place: "hauteville", end: true, fx: { time: 1.5 },
    text: [
      "À cinq heures et demie, tu es devant les greniers de la Côte, à mi-pente, quand la digue cède.",
      "Le bruit arrive avant l'eau. Puis la vague passe sous toi, dans la vallée, et elle emporte la rue des Teinturiers, les trois entrepôts vides, le lavoir, les maisons basses. La laine est au sec, au-dessus de ta tête, dans les greniers.",
      "Gervais monte la Côte à huit heures, couvert de boue. Il a sauvé sa femme et un petit-fils par la fenêtre du grenier. Les trois autres, il les cherche encore.",
      "Il s'arrête devant toi. Il regarde les greniers. Il compte, lui aussi : douze charrettes, trente hommes, une nuit entière, à un quart d'heure de la rue du Lavoir.",
      "« Lyon », dit-il.",
      "Il s'en va. Toute la ville connaîtra l'histoire avant midi : le premier drapier a sauvé sa laine cette nuit, en sachant, et il a laissé dormir les gens. Le Conseil se réunit dans une ville qui compte ses morts. Pour la Charge des Vannes, ton nom reste dans les gorges. Ta laine se vend très bien cet hiver-là, à cause de la disette.",
    ] },
  C_gervais_verite: { act: A, title: "À voix basse", place: "foulons", fx: { time: 0.25 },
    text: [
      "Tu le prends par le bras, à l'écart, sous l'auvent. Tu lui dis la digue, la fissure, le vieux Vellard, l'orage. Tu lui dis que tu ignores si c'est vrai.",
      "Gervais écoute sans t'interrompre. Puis il lève les yeux vers les fenêtres où les femmes regardent.",
      "« Douze charrettes, Monsieur. Elles portent quarante balles chacune. Ou bien vingt personnes, avec les vieux et les petits. » Il attend. « Je vous demande lesquelles. Je vous demande pas pourquoi. »",
    ],
    choices: [
      { label: "« Les gens. Laisse la laine. »", to: "C_charrettes" },
      { label: "« Les gens. Et toi, porte cette clé à la digue, par la berge. »", hide: { not: { has: "corlay:cle_poche" } }, to: "C_gervais_digue" },
    ] },
  C_charrettes: { act: A, title: "Les charrettes de la fabrique", place: "foulons", end: true, fx: { flag: "foulons:leves", time: 5 },
    text: [
      "Les hommes déchargent les balles dans la boue de la rue. Puis ils frappent aux portes. À une heure et demie, les charrettes montent la Côte pleines de vieilles en chemise, d'enfants endormis, de berceaux, de cages à poules. Tu marches à côté de la première, une torche à la main, et les gens te regardent sans y croire.",
      "À cinq heures et demie, sur le parvis de Saint-Rieul, tout le quartier entend la digue céder. La vague passe sur les Foulons, sur tes entrepôts ouverts, sur quatre cents balles de laine couchées dans la rue. Elle les emporte toutes.",
      "Le quartier est vivant. Il a tout perdu, et toi aussi : la saison entière, quarante mille écus.",
      "À huit heures, au Conseil, Dame Hesdin te regarde entrer. Tu as de la boue jusqu'aux genoux.",
      "« On dit que vous avez vidé les Foulons cette nuit, Corlay. Avec vos charrettes. » Elle croise les mains. « Et la clé des vannes ? Elle était où, pendant ce temps ? »",
      "Elle était dans ton coffre. Toute la nuit. Tu as sauvé les gens et laissé partir la digue. La ville te remerciera pour les uns. Elle te demandera des comptes pour l'autre, et tu en as pour longtemps à répondre.",
    ] },
  C_gervais_digue: { act: A, title: "Le contremaître et la clé", place: "berge", fx: { flag: "foulons:leves", time: 1.5 },
    text: [
      "Tu sors la clé de sous ton manteau. Gervais la prend à deux mains, comme un outil dont il connaît le poids.",
      "« La cabane des Loutres, au pied de la digue. Une rousse, Jacquette. Puis le garde-vannes. Il faut quatre bras pour la roue. »",
      "Gervais appelle son fils, Matthieu, un garçon large comme une porte. Ils partent par la berge au pas de course, sans lanterne. Les autres hommes déchargent la laine dans la rue et frappent aux portes.",
      "Tu restes sous l'auvent. Vers deux heures, les charrettes montent la Côte pleines de monde. Vers trois heures et demie, à la fenêtre de la Maison des Vannes, une deuxième lanterne s'allume, puis une troisième.",
    ],
    choices: [{ label: "Attendre le jour avec le quartier, sur le parvis", to: "C_fouleur", fx: { time: 2 } }] },
  C_fouleur: { act: A, title: "Ce que dit le quartier", place: "hauteville", end: true, fx: { time: 2.5 },
    text: [
      "Au jour, il pleut à verse. La Sorge monte d'un mètre et demi. Les Foulons ont de l'eau jusqu'aux fenêtres basses, et les maisons sont vides. La digue tient.",
      "Gervais remonte à huit heures, les mains en sang, avec son fils. Le garde-vannes a tourné la clé. La rousse, Matthieu et lui ont tourné la roue. Quarante tours.",
      "Au Conseil, on te fait un triomphe. Le premier drapier a vidé ses entrepôts pour monter les gens, il a envoyé ses propres hommes à la vanne, il a perdu sa laine. Tu laisses dire. On vote. Six voix pour toi, et Dame Hesdin aussi.",
      "Le soir, Gervais vient au cabinet chercher la paie de ses hommes pour la nuit. Il la compte devant toi.",
      "« Vous avez eu la clé dans la poche depuis dix heures, Monsieur. » Il range l'argent. « Moi je le sais. Vous, vous le savez. Ça fait deux. On verra combien ça fait dans vingt ans. »",
    ] },

  // ------------------------------------------------------------------ Tassin in the gallery
  C_tassin_force: { act: A, title: "Prenez votre manteau", place: "hauteville", fx: { time: 0.5 },
    text: [
      "« Prenez votre manteau, maître Tassin. Nous allons voir. »",
      "Tassin recule d'un pas. « Monsieur, il est onze heures du soir. L'escalier de service… »",
      "« Le garde-vannes le descend tous les jours à soixante-quatorze ans, avec ses jambes. Vous en avez quarante-cinq. »",
      "Tu prends la clé sur le bureau. Pernelle Daguet est déjà debout, son écritoire sous le bras. Le valet vert court faire atteler.",
      "Le pont des Moulins est gardé : tu as donné cet ordre toi-même. Tu fais prendre à la voiture le chemin des carriers, par le plateau, qui rejoint l'autre bout de la digue sans passer la Sorge.",
    ],
    choices: [{ label: "Partir par le plateau", to: "C_carriers" }] },
  C_carriers: { act: A, title: "Le chemin des carriers", place: "lac", fx: { time: 1.25 },
    text: [
      "Le chemin des carriers longe le lac par le haut, dans les sapins. La voiture cahote dans les ornières. Le vent se lève vers une heure et fait claquer la capote.",
      "Tassin parle tout le long de la route. Il parle de ses calculs, des plans de Ferréol, des coefficients de la pierre. Il parle de sa mère, qui l'empêchait d'aller à la rivière quand il était petit. Puis il se tait, et il regarde le lac en contrebas, noir, immense, plus haut que tu l'aies jamais vu.",
      "Pernelle Daguet écrit à la lueur de la lanterne. Tu te demandes comment elle fait, avec les cahots.",
      "Au bout du chemin, la digue, et à son bout la Maison des Vannes. Une seule lanterne à la fenêtre.",
    ],
    choices: [{ label: "Frapper chez le garde-vannes", to: "C_galerie_tassin" }] },
  C_galerie_tassin: { act: A, title: "L'escalier de service", place: "digue", fx: { time: 0.5 },
    text: [
      "Anselme Vellard ouvre lui-même. Il voit la clé, puis toi, puis Tassin. Il sourit, pour la première fois depuis longtemps, d'un sourire qui fait peur.",
      "« Maître Tassin. Vous venez enfin voir mes suintements. »",
      "L'escalier de service descend en colimaçon dans la pierre, si étroit que tes épaules frottent. En bas, la galerie est noyée jusqu'à la taille. L'eau est glacée. Le vieux marche devant avec la lanterne. Tassin te suit, puis Pernelle, la robe relevée dans une main et l'écritoire dans l'autre.",
      "À l'endroit des plâtres, le vieux lève la lanterne. La pierre pleure par une fente longue comme un homme couché. On entend l'eau passer derrière, un bruit sourd, continu.",
      "Tassin reste figé. L'eau lui arrive à la poitrine. Ses gants de chevreau flottent devant lui.",
    ],
    choices: [
      { label: "Lui prendre la main, et la poser sur la pierre", test: { dom: "social", diff: 0, label: "Le tenir debout" }, win: { to: "C_tassin_main" }, lose: { to: "C_tassin_fuit" } },
    ] },
  C_tassin_main: { act: A, title: "La pierre qui chante", place: "digue", fx: { flag: "corlay:tassin_vu", time: 0.25 },
    text: [
      "Tu prends la main de Tassin dans l'eau, et tu la poses à plat sur la veine. Il se laisse faire. Il ferme les yeux.",
      "Il reste longtemps ainsi. Puis il ouvre les yeux, il sort un mètre pliant de sa poche, et il mesure la fente, à la lueur de la lanterne, en dictant les chiffres à voix haute. Pernelle les écrit. Le vieux les connaît déjà. Il les dit en même temps que lui.",
      "« Elle cède avant le jour, dit Tassin. Avec la crue, avant six heures. » Il a la voix de quelqu'un qui récite une leçon. « J'aurais dû descendre il y a quinze jours. Je n'ai pas voulu. »",
    ],
    choices: [{ label: "Aller à la roue, tous les quatre", to: "C_roue_quatre" }] },
  C_tassin_fuit: { act: A, title: "L'ingénieur s'enfuit", place: "digue", fx: { flag: "corlay:tassin_fui", time: 0.25 },
    text: [
      "Tu tends la main vers lui. Tassin pousse un cri, un cri d'enfant, et il se jette en arrière dans l'eau. Il se relève, il retombe, il atteint l'escalier à quatre pattes. Tu entends ses pas monter en courant, puis la porte d'en haut qui claque.",
      "Le vieux regarde l'escalier un moment. « Il reviendra peut-être, dit-il. Ou pas. Nous sommes trois. Une femme, un vieux et un drapier. » Il se tourne vers Pernelle. « Vous savez pousser, Mademoiselle ? »",
      "Pernelle Daguet pose son écritoire sur une console, au sec. « J'apprendrai. »",
    ],
    choices: [{ label: "Aller à la roue, tous les trois", to: "C_roue_quatre" }] },
  C_roue_quatre: { act: A, title: "La roue", place: "digue", fx: { time: 3 },
    text: [
      "La chambre de la vanne. La roue de fer à douze rayons. Le vieux tourne la clé dans le moyeu, et il prend un rayon lui-même, ses mains maigres posées bien à plat.",
      { if: { has: "corlay:tassin_vu" }, text: "Tassin prend le rayon d'en face. Il a ôté ses gants. Ses mains sont blanches et molles, des mains de bureau, et elles saignent au cinquième tour." },
      { if: { has: "corlay:tassin_fui" }, text: "Pernelle prend le rayon d'en face. Elle pèse cinquante kilos. Elle pousse avec tout son corps, les dents serrées, sans un mot." },
      "Tu pousses le troisième rayon. La roue avance d'un pouce, puis d'un autre. Au quinzième tour, la digue rugit sous vos pieds et l'eau se met à hurler dans le conduit de fond.",
      "Au quarantième, il est quatre heures et demie. Il pleut au-dehors. Le lac commence à descendre.",
      { if: { has: "corlay:tassin_fui" }, text: "En remontant l'escalier, tu trouves Tassin assis sur la dernière marche, trempé, les gants à la main. Il s'est arrêté là. Il te regarde passer sans un mot." },
    ],
    choices: [
      { label: "Lui faire écrire un second rapport, ici, ce matin", to: "C_second_rapport" },
    ] },
  C_second_rapport: { act: A, title: "Le second rapport", place: "digue", fx: { time: 1 },
    text: [
      "Dans la cuisine de la Maison des Vannes, Pernelle pose une feuille blanche devant Tassin, l'encrier, la plume. Le vieux dort dans son fauteuil, la bouche ouverte.",
      "Tassin écrit d'une main qui tremble. *Je soussigné, ingénieur du Conseil, certifie être descendu cette nuit dans la galerie basse de la Grande Digue, pour la première fois.* Il écrit la fente, les mesures, l'heure. Il écrit que son premier rapport est faux. Il s'arrête.",
      "« Je dois écrire pourquoi il est faux, Monsieur ? »",
      "Pernelle a levé les yeux vers toi. Tassin aussi. La plume est en l'air.",
    ],
    choices: [
      { label: "« Écrivez tout. Qui vous l'a demandé, et quand. »", to: "C_ingenieur" },
      { label: "« Écrivez que vous vous êtes trompé. Ça suffira. » Et garder la feuille sur toi", to: "C_deux_rapports" },
    ] },
  C_ingenieur: { act: A, title: "Deux rapports sur la table", place: "hauteville", end: true, fx: { time: 2 },
    text: [
      "À huit heures, maître Tassin se lève devant le Conseil des Sept Maisons. Il a les mains bandées. Il pose ses deux rapports sur la table ovale, le premier à gauche, le second à droite, et il les lit l'un après l'autre, de la même voix.",
      "Le second dit qui a demandé le premier, et quand. Il dit ton nom.",
      "Tu restes assis. Tu sens les six autres se tourner vers toi. Tu reconnais tout. Tu dis seulement : « J'ai demandé un rapport avant le vote. J'ai eu celui que je voulais. Cette nuit, je suis allé voir. »",
      "Dame Hesdin te regarde longtemps. Puis elle dit : « C'est la première fois que vous allez voir, Corlay. Il est encore temps pour une première fois. Pour vingt ans, il en faut davantage. »",
      "La Charge des Vannes va au fils Vellard, à quatre voix contre trois, sous la tutelle du Conseil. Tu gardes la présidence jusqu'au printemps. Tassin quitte Corvèze la semaine suivante. Avant de partir, il t'envoie ses gants de chevreau dans un paquet, sans un mot. Tu cherches longtemps ce qu'il a voulu dire. Tu les gardes.",
    ] },
  C_deux_rapports: { act: A, title: "Une feuille dans ton gilet", place: "hauteville", end: true, fx: { time: 2 },
    text: [
      "Tassin écrit qu'il s'est trompé. Il signe. Tu plies la feuille en quatre et tu la glisses dans ton gilet, contre la lettre du vieux.",
      "À huit heures, au Conseil, tu racontes la nuit : le mur, la roue, le lac qui descend. Tu dis que ton ingénieur s'était trompé, que tu as eu des doutes, que tu es allé voir. Tassin est assis au fond de la salle. Il hoche la tête quand tu le nommes.",
      "On vote. Cinq voix pour toi. Dame Hesdin et le vieux Rouvray contre.",
      "Le soir, Tassin vient te voir au cabinet. Il reste debout. Il demande la feuille. Tu lui réponds qu'elle est dans ton coffre, avec d'autres papiers, et qu'elle y est bien.",
      "Il comprend. Il travaillera pour la Charge des Vannes vingt ans. Il descendra dans la galerie chaque mois, désormais, et il signera ce que tu lui diras de signer. Toi, tu as la Charge, et un ingénieur qui ne pourra jamais te dire non. Pernelle Daguet range dans son propre pupitre la copie qu'elle a faite de la feuille, ce matin-là.",
    ] },

  // ------------------------------------------------------------------ the key handed to Pernelle
  C_pernelle_cle: { act: A, title: "Tenez ce compte-là", place: "hauteville", fx: { time: 0.25 },
    text: [
      "Tu prends la clé sur le bureau. Elle est lourde, froide, plus longue que ton avant-bras. Tu la poses sur le pupitre de Pernelle Daguet, sur son registre ouvert.",
      "« Vous tenez mes comptes depuis douze ans. Tenez celui-là. »",
      "Pernelle regarde la clé un long moment, les mains sur son registre. « Monsieur sait ce que je vais en faire ? »",
      "« Je crois que oui. C'est pour ça que je ne la porte pas moi-même. »",
      "Elle se lève. Elle met son manteau gris, son chapeau. Elle roule la clé dans la toile cirée, avec la lettre. Elle sort par l'escalier de service.",
    ],
    choices: [{ label: "Retourner au souper, et attendre", to: "C_attente_corlay" }] },
  C_attente_corlay: { act: A, title: "Le souper qui n'en finit pas", place: "hauteville", fx: { time: 5 },
    text: [
      "Tu reviens à table. Tu sers le vin. Aubrac raconte une histoire de foire que tu as déjà entendue six fois. Tu ris au bon moment.",
      "Aude te regarde. Elle a vu Pernelle traverser le vestibule en manteau. Elle attend le départ des invités.",
      "Au lit, elle demande : « Où va Pernelle, à onze heures du soir ? »",
      "« Faire ce que j'aurais dû faire il y a trois ans. »",
      "Aude allume la bougie pour te regarder. Puis elle l'éteint, et elle te prend la main, dans le noir. Vous restez éveillés tous les deux. À quatre heures, la pluie. À cinq heures et demie, la maison reste immobile.",
    ],
    choices: [{ label: "Te lever, au jour", to: "C_secretaire" }] },
  C_secretaire: { act: A, title: "Le pupitre vide", place: "hauteville", end: true, fx: { time: 2 },
    text: [
      "Au jour, le lac a baissé d'un mètre. On le voit du salon : une bande de vase claire tout autour, comme un cerne.",
      "Pernelle Daguet rentre à sept heures, trempée, les mains écorchées. Elle pose la clé sur ton bureau. Elle s'assoit à son pupitre et elle ouvre son registre.",
      "« La passeuse, le garde-vannes et moi, Monsieur. Quarante tours. J'ai inscrit la nuit au compte de la maison, à la ligne des frais extraordinaires. »",
      "À huit heures, au Conseil, tu poses la clé sur la table ovale. Tu dis qu'elle a été saisie sur le pont, sur ton ordre, et rendue cette nuit, sur ton ordre aussi. On te demande pourquoi tu as changé d'avis. Tu réponds que ta secrétaire t'a montré tes comptes.",
      "On rit. On croit à une figure de style. On vote, et la Charge est à toi, à quatre voix contre trois. Le soir, Pernelle te remet sa démission, d'une écriture parfaite. Elle a trouvé une place chez Dame Hesdin. Tu signes. Tu as eu le bon geste une seule fois, et c'est elle qui l'a porté jusqu'en bas.",
    ] },

  // ------------------------------------------------------------------ the garden door, from the stairs
  C_escalier: { act: A, title: "La lumière du cabinet", place: "hauteville", fx: { time: 0.25 },
    text: [
      "Le sommeil te fuit. Une lumière passe sous la porte de la chambre, dans le couloir, puis descend. Tu te lèves sans réveiller Aude.",
      "Du palier, tu vois le cabinet ouvert. La carte de la vallée est poussée sur le côté. Le coffre est ouvert. Pernelle Daguet en sort la toile cirée, avec des gestes précis, sans hâte, comme elle range un dossier.",
      "Elle descend l'escalier de service. Tu la suis jusqu'à la fenêtre du palier. En bas, dans la rue, sous une lanterne, il y a un homme large d'épaules avec une manche de sergent. Pernelle ouvre la porte du jardin. Elle lui met le paquet dans les bras.",
    ],
    choices: [
      { label: "Ouvrir la fenêtre et appeler la garde de la maison", to: "C_garde_maison" },
      { label: "Remonter te coucher sans un bruit", to: "C_silence" },
    ] },
  C_garde_maison: { act: A, title: "Au voleur", place: "hauteville", end: true, fx: { time: 5 },
    text: [
      "Tu ouvres la fenêtre. Tu cries. Les deux valets de nuit sortent de l'office avec des gourdins, et le sergent part en courant dans la rue Haute, le paquet contre la poitrine. Pernelle reste sur le seuil du jardin, les mains vides, la tête haute.",
      "Rambert arrive à une heure avec six hommes. Il cherche le sergent dans toute la Haute-Ville. À deux heures, on lui dit qu'un cheval du guet est sorti par la poterne. Rambert envoie deux cavaliers derrière.",
      "Tu attends au salon, à la fenêtre, toute la nuit. À trois heures et demie, au bout de la vallée, la lumière de la Maison des Vannes devient deux lumières, puis trois.",
      "À quatre heures, la pluie. À cinq heures, l'eau monte dans la Sorge, haute et brune. Les Foulons sont noyés jusqu'aux fenêtres basses. La digue tient.",
      "Au Conseil, à huit heures, tu dis qu'on t'a volé la clé des vannes cette nuit, chez toi, par ta propre secrétaire, avec la complicité d'un sergent du guet. Dame Hesdin te demande ce que la clé faisait dans ton coffre. Tu gardes pour toi la seule réponse vraie. Pernelle Daguet reste en prison jusqu'au procès. Au procès, elle apporte ses registres.",
    ] },
  C_silence: { act: A, title: "Ce que tu n'as pas vu", place: "hauteville", end: true, fx: { time: 6.5 },
    text: [
      "Tu remontes l'escalier, une marche après l'autre, en enjambant la septième, qui grince. Tu te recouches. Aude dort sur le côté, le visage vers le mur.",
      "Tu entends la porte du jardin se refermer, très doucement. Puis, longtemps après, le galop d'un cheval sur les pavés de la rue Haute.",
      "À quatre heures, la pluie. Au jour, le lac a baissé d'un mètre. Tu le vois du salon, en buvant ton café.",
      "Au cabinet, la carte est remise droite sur le mur. Pernelle est à son pupitre. Elle te dit bonjour. Tu lui dis bonjour. Le coffre est fermé.",
      "À huit heures, au Conseil, le capitaine Rambert vient te dire à l'oreille que la clé saisie hier a disparu. Tu réponds : « Quelle clé ? » Rambert te regarde, puis il comprend qu'il vaut mieux comprendre. On vote. La Charge est à toi, à quatre voix contre trois.",
      "Pernelle Daguet tient tes comptes encore dix ans. Vous gardez cette nuit pour vous, l'un et l'autre. Une fois par an, à la Toussaint, tu trouves sur ton bureau un baromètre nettoyé, et tu sais qui l'a nettoyé.",
    ] },

  // ------------------------------------------------------------------ Aude at Dame Hesdin's
  C_aude_hesdin: { act: A, title: "Rue Haute, une heure du matin", place: "hauteville", fx: { time: 0.5 },
    text: [
      "Tu prends la clé au coffre. Aude prend ton bras. Vous remontez à pied la rue Haute, sous une seule lanterne, jusqu'à la maison à l'enclume.",
      "Dame Hesdin vous reçoit en robe de chambre, une canne à la main, furieuse d'être réveillée. Elle voit Aude. Elle se calme un peu. Elle voit la clé. Elle s'assoit.",
      "Tu parles. Cette fois, tu dis tout, dans l'ordre : la séance d'il y a trois ans, le rapport, le pont. Aude se tient derrière toi. Tu sens sa main entre tes omoplates, à plat, comme pour t'empêcher de reculer.",
      "Quand tu as fini, Dame Hesdin se tourne vers Aude. « Vous l'avez amené. » Puis vers toi. « Vous voulez que je fasse quoi, à une heure du matin, avec une clé et soixante-dix ans ? »",
    ],
    choices: [{ label: "« Vous avez quarante forgerons. Moi, j'ai des fouleurs qui dorment aux Foulons. »", to: "C_forgerons" }] },
  C_forgerons: { act: A, title: "Les forges", place: "berge", fx: { flag: "foulons:leves", time: 3 },
    text: [
      "Dame Hesdin fait sonner la cloche des forges. À une heure et demie, quarante hommes en tablier de cuir sont dans sa cour, avec des torches. Elle donne la clé à son maître fondeur, un colosse qui s'appelle Barthélemy, et six hommes avec lui pour la berge. Les autres descendent aux Foulons, frapper aux portes.",
      "Tu descends avec eux, sans qu'on te le demande. Tu frappes aux portes de la rue des Teinturiers avec les forgerons, en habit de soirée. Des gens qui t'ont toujours vu de loin, sur ton cheval, t'ouvrent en chemise et te reconnaissent.",
      "À trois heures et quart, au bout de la vallée, trois lanternes. À quatre heures, la pluie. À cinq heures, la Sorge monte, brune, jusqu'aux fenêtres basses. Les Foulons sont vides. La digue tient.",
    ],
    choices: [{ label: "Monter au Conseil, à huit heures", to: "C_forges" }] },
  C_forges: { act: A, title: "La voix de Dame Hesdin", place: "hauteville", end: true, fx: { time: 2 },
    text: [
      "À huit heures, tu entres au Conseil derrière Dame Hesdin, avec la boue des Foulons sur tes souliers vernis.",
      "Dame Hesdin parle la première, et la dernière. Elle dit la nuit. Elle dit la séance d'il y a trois ans, et elle dit qu'elle s'est tue, elle aussi, après avoir voté contre. Elle dit que le président du Conseil est venu chez elle à une heure du matin avec la clé et sa femme, et qu'il a tout dit.",
      "Puis elle propose que la Charge des Vannes aille aux forges Hesdin pour cinq ans, le temps de vider le lac et de refaire la digue, et qu'on la rende ensuite à qui saura la tenir.",
      "On vote. Tu lèves la main pour elle. Aubrac et Malzieu te regardent, stupéfaits, et ils lèvent la main à leur tour, parce qu'ils ont toujours voté comme toi.",
      "En sortant, Aude te prend le bras sur les marches de l'Hôtel. Tu as perdu la Charge, la laine de tes entrepôts, et sans doute la présidence au printemps. Tu marches à côté d'elle sous la pluie. Tu te sens léger, pour la première fois depuis trois ans, et tu cherches encore quoi faire de cette légèreté.",
    ] },
};
