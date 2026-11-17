// The second reading, « La nuit retournée »: every passage here is `second: true`. The hourglass gives the night back;
// the watchman knows the forger in the cellar, the soup at two o'clock, the swap at three; finds the speaking tube and
// the man in the tower; opens the nephew's strongbox; and meets the dawn on `cabinet`.
module.exports = {
  S_sablier: { act: "II", title: "Le sable qui monte", place: "galerie", second: true,
    text: [
      "Le sable monte. Il quitte le bulbe du bas en un mince filet gris, nacré, qui coule vers le haut à travers la taille de verre, avec un chuchotement de soie, comme une phrase qu'on retire. Les agents qui te tiennent les bras ne le voient pas. Personne ne le voit. Monsieur Quatremain essuie son lorgnon. Aristide regarde sa montre. Et les aiguilles de sa montre, que tu vois par-dessus son épaule, tournent à l'envers.",
      "La galerie se défait autour de toi comme un décor qu'on démonte. La lumière grise du matin recule par les fenêtres. Les bocaux s'éteignent un à un. Le crocodile, au plafond, tourne la tête vers la porte, lentement, à rebours. Tu entends la pluie remonter vers les nuages. Tu entends les voix de la nuit se dire à l'envers, toutes ensemble, en un murmure de foule. Le sable finit de monter.",
      "Et la grille grince.",
      "Tu es dans la cour pavée, sous la pluie, devant le numéro 9, rue des Antiquaires. Il est dix heures du soir. Tu as les mains libres, une lanterne, un trousseau de dix-sept clefs, et dans la tête, intacte, une nuit entière qui n'a pas encore eu lieu.",
    ],
    choices: [
      { label: "Entrer dans le vestibule", to: "A_arrivee" },
    ] },

  // ------------------------------------------------------------------ the speaking tube
  S_tube: { act: "II", title: "Le tube", place: "automates", second: true, puzzle: "s_tube",
    text: [
      "Tu approches ta bouche du pavillon de cuivre, dans la nuque de la Sibylle. Il sent le métal froid et, très loin au fond, la fumée de pipe.",
    ],
    choices: [
      { back: "A_automates" },
    ] },

  S_tube_ouvert: { act: "II", title: "La voix dans le tube", place: "automates", second: true,
    fx: { flag: "tour:ouverte" },
    text: [
      "Un silence, très long. Puis le tube de cuivre se met à parler, d'une voix lointaine, cassée, ironique, qui descend en spirale et arrive à ton oreille comme du fond d'un puits.",
      "« Enfin. Il y a un mois que j'attends quelqu'un qui sache lire. Les notaires lisent les chiffres, mon neveu lit les cotes, Pigache lit les étiquettes. Vous, vous avez lu une dame. » Un rire, qui se transforme en toux. « Regardez sa main gauche. »",
      "La main gauche de la Sibylle, posée sur le secrétaire, fermée depuis 1774, s'ouvre avec un petit bruit de rouages, doigt par doigt, comme une fleur de porcelaine. Dans la paume, une grosse clef de fer, rouillée, longue comme la main : la clef de la tour.",
      "« Montez, dit le tube. Doucement. L'escalier a deux cents ans et moi soixante-dix-huit, et nous craquons tous les deux. »",
    ],
    choices: [
      { label: "Monter à la tour", to: "S_escalier" },
    ] },

  S_escalier: { act: "II", title: "L'escalier de la tour", place: "tour", second: true,
    text: [
      "La petite porte cloutée s'ouvre sur un escalier en colimaçon si étroit qu'il faut monter de biais. Les marches de pierre sont couvertes d'un tapis de poussière, et dans la poussière, un sentier de pas, tous les mêmes, des pas de pantoufle, qui montent et descendent depuis un mois. Le lierre a passé par les meurtrières, et ses tiges noires pendent à l'intérieur comme des cheveux.",
      "Tu montes. Quatre-vingt-dix marches. Au sommet, une trappe ouverte, et une lumière étrange, mouvante, colorée, comme une lanterne magique dans une chapelle.",
    ],
    choices: [
      { label: "Passer la trappe", to: "S_chambre_noire" },
    ] },

  // ------------------------------------------------------------------ the garden at two
  S_melie: { act: "II", title: "La soupe de deux heures", place: "jardin", second: true,
    fx: { meet: ["melie"] },
    text: [
      "Deux heures. Tu attends derrière le même buis, sous la même pluie. La petite porte du fond grince à l'heure dite. La femme au châle gris entre, avec son panier qui fume, traverse le jardin sans lumière, et s'arrête au pied de la tour. Elle lève la tête. Elle siffle trois notes.",
      "Cette fois, tu regardes en haut au lieu de la regarder, elle. Tout en haut de la tour, la lentille ronde pivote d'un cran, et à côté d'elle, une petite trappe s'ouvre dans l'ardoise. Une corde descend, avec un crochet. Mélie Vasseur y suspend son panier. La corde remonte. La trappe se ferme.",
    ],
    choices: [
      { label: "Lui dire que tu sais pour qui est la soupe", hide: { seen: "S_melie_sait" }, to: "S_melie_sait" },
      { back: "A_jardin" },
    ] },

  S_melie_sait: { act: "II", title: "Mélie", place: "jardin", second: true,
    text: [
      "Tu sors de derrière le buis. Elle se retourne d'un bloc, la main dans son tablier, où brille quelque chose de court et de pointu, un scalpel de préparatrice. Tu lui dis, doucement, que tu sais qui mange la soupe, et que tu ne diras rien à personne qui ne doive le savoir.",
      "Elle te regarde longtemps, la pluie ruisselant sur sa cicatrice. « Trente ans, dit-elle enfin. Trente ans que je lui empaille ses bêtes, que je lui cire ses parquets, que je lui supporte ses idées. Il m'a dit, il y a un mois : Mélie, je vais mourir un peu, pour voir. Je lui ai dit qu'il était fou. Il m'a dit que c'était bien possible. »",
      "Elle écarte le lierre au pied de la tour. Derrière, une petite porte de fer, rongée, invisible du jardin. Elle sort une clef de son corsage. « Montez. Il vous attend sans doute. Il attend tout le monde, et personne ne vient. » Elle ajoute, plus bas : « Méfiez-vous de lui. Il est méchant comme un enfant, et il a toujours raison. C'est épuisant. »",
    ],
    choices: [
      { label: "Monter à la tour par la porte du lierre", fx: { flag: "tour:ouverte" }, to: "S_escalier" },
      { label: "La retenir encore un instant", hide: { seen: "S_melie_tour" }, to: "S_melie_tour" },
      { back: "A_jardin" },
    ] },

  // ------------------------------------------------------------------ the camera obscura
  S_chambre_noire: { act: "II", title: "La chambre noire", place: "tour", second: true, hub: true, backName: "la chambre noire",
    fx: { flag: "orsenne:vivant", meet: ["hippolyte"], ep: ["histoire", 500] },
    text: [
      { first: true, text: "La chambre au sommet de la tour est ronde, sans fenêtre, plongée dans le noir, sauf au centre, où une grande table blanche, ronde comme une meule, reçoit d'en haut, par la lentille du toit et un miroir incliné, une image vivante de la ville. Toute la rue des Antiquaires est là, sur la table, en couleurs, minuscule et parfaite : les pavés mouillés qui luisent sous les réverbères, une voiture qui passe sans bruit, un chat qui traverse, un ivrogne qui s'appuie à une borne. Le monde entier, posé sur une nappe, comme un plat servi à un ogre." },
      { first: true, text: "Penché sur la table, en robe de chambre de velours vert, un vieillard long et maigre regarde la ville avec une loupe, en mangeant la soupe de Mélie dans le pot même. Il a une barbe blanche, de longs cheveux blancs, des mains tachées qui ne tremblent pas. Il lève les yeux vers toi, et ses yeux gris, très pâles, ont l'éclat amusé et cruel d'un enfant qui vient de faire tomber un ours sur un gardien." },
      { first: true, text: "« Hippolyte Orsenne, dit-il. Décédé. Asseyez-vous. Il n'y a qu'une chaise : prenez-la, les morts ont de bonnes jambes. »" },
      { again: true, text: "La chambre noire, la ville minuscule sur la table blanche, et le vieil Orsenne penché dessus avec sa loupe." },
    ],
    choices: [
      { label: "Lui demander pourquoi il a fait le mort", hide: { seen: "S_pourquoi" }, to: "S_pourquoi" },
      { label: "Lui demander comment il fait écrire la Sibylle", hide: { seen: "S_sibylle_secret" }, to: "S_sibylle_secret" },
      { label: "Lui parler de son neveu et de la Larme", hide: { seen: "S_neveu" }, to: "S_neveu" },
      { label: "Lui parler de la rose blanche, sous le portrait", if: { seen: "A_portrait" }, hide: { seen: "S_pauline" }, to: "S_pauline" },
      { label: "Lui raconter qui tu es", hide: { seen: "S_gardien" }, to: "S_gardien" },
      { label: "Lui demander l'histoire de la Larme", hide: { seen: "S_larme_histoire" }, to: "S_larme_histoire" },
      { label: "Regarder la ville sur la table blanche", hide: { seen: "S_table_ville" }, to: "S_table_ville" },
      { label: "Ranger les quatre pièces de sa vie", if: { seen: "S_pourquoi" }, hide: { has: "orsenne:confiance" }, to: "S_pieces" },
      { label: "Le convaincre de descendre à six heures, devant tout le monde", if: { has: "orsenne:confiance" }, hide: { any: [{ has: "orsenne:parait" }, { has: "orsenne:part" }] }, fx: { flag: "orsenne:parait" }, to: "S_parait" },
      { label: "L'aider à partir avant l'aube, avec Mélie et ses quatre pièces", if: { has: "orsenne:confiance" }, hide: { any: [{ has: "orsenne:parait" }, { has: "orsenne:part" }] }, fx: { flag: "orsenne:part" }, to: "S_part" },
      { back: "A_loge" },
    ] },

  S_pourquoi: { act: "II", title: "Pourquoi mourir", place: "tour", second: true,
    text: [
      "Orsenne pose sa loupe. « Pourquoi ? Par curiosité. C'est le seul vice que je me sois jamais connu, et il m'a coûté une fortune, une épouse et une réputation. » Il sourit. « J'ai soixante-dix-huit ans. J'ai un cœur qui s'arrête quand il veut et qui repart par politesse. J'ai voulu savoir ce que deviendrait ma collection après moi. Alors j'ai acheté un médecin, un cercueil, et trois sacs de sable de rivière. On les a enterrés le seize octobre, avec beaucoup d'émotion. J'ai regardé le cortège passer sur cette table. J'avais le meilleur point de vue de la ville. »",
      "« Ce que j'ai vu ? Mon neveu a vendu ma cave le lendemain, ma voiture le surlendemain, Mélie le troisième jour, et il a fait venir Pigache le quatrième. Il ne m'a pas surpris. Personne ne m'a surpris, en un mois. Sauf vous, ce soir. »",
      "Il fait tourner sa loupe entre ses doigts. « Douze cent quarante-sept lots. Je m'en moque, de presque tous. Ce sont des choses. Il y en a quatre qui sont ma vie. La dent de narval que mon père m'a rapportée de Dieppe, l'été de mes sept ans, quand j'ai vu la mer pour la première fois. La balle de plomb qui m'a manqué de l'épaisseur d'un ongle, à vingt ans, à la guerre, et que j'ai ramassée dans la boue. L'oiseau d'argent qui chante, que j'ai offert à Pauline le jour de nos noces, j'en avais trente. Et le sablier de Mnémosyne, que j'ai acheté le lendemain de sa mort, vingt ans plus tard, parce qu'il promettait de rendre les nuits. » Il hausse les épaules. « Il n'en a jamais rendu aucune. Mais on ne sait jamais. »",
    ],
    choices: [
      { back: "S_chambre_noire" },
    ] },

  S_sibylle_secret: { act: "II", title: "Les tringles", place: "tour", second: true,
    text: [
      "Orsenne soulève un tapis. Dans le plancher, une trappe, et sous la trappe, un puits étroit où descendent trois tringles d'acier et un tube de cuivre. Au bout des tringles, en haut, une manivelle, une pédale, un levier gradué, et un pupitre où est posée une feuille d'exercice couverte d'encre violette.",
      "« La Sibylle de Jaquet écrit trois réponses, gravées sur son cylindre, toujours les mêmes, des fadaises pour les dames, dit-il. Je l'ai désaccouplée de son cylindre il y a dix ans, et je l'ai raccordée à ma main. J'écris ici ; elle écrit en bas. Il m'a fallu deux ans pour qu'elle copie mon écriture sans trembler. » Il fait jouer le levier. « J'ai les mains d'un horloger et le cœur d'un farceur. Ma femme disait que c'était un mélange explosif. Elle avait raison. Elle avait toujours raison. »",
      "« Et l'ours ? » demandes-tu. Il a l'air ravi. « Une cordelette de soie, une poulie, et la patience de Mélie. Il fallait bien vous occuper à trois heures. Je voulais voir si vous resteriez à la Sibylle, ou si vous courriez au bruit. Vous avez couru, la première fois. » Il te regarde de côté. « La première fois ? Tiens. Pourquoi ai-je dit ça ? »",
    ],
    choices: [
      { back: "S_chambre_noire" },
    ] },

  S_neveu: { act: "II", title: "Le neveu", place: "tour", second: true,
    text: [
      "Tu lui racontes ce que tu sais : le restaurateur de la cave, les copies, l'œil de verre, la flasque, la substitution de trois heures, l'assurance du Phénix, l'accusation de six heures. Orsenne écoute sans t'interrompre, la loupe immobile, et son visage ne bouge qu'une fois, au mot *Phénix*.",
      "« Quatre-vingt mille écus, dit-il. Il fait voler la pierre, il fait condamner le gardien, il touche l'assurance, et il vend la Larme à un diamantaire d'Anvers qui la fera retailler en trois pierres que personne ne reconnaîtra. » Il repose la loupe. « C'est intelligent. C'est la première chose intelligente que mon neveu ait faite de sa vie. Je suis presque fier. »",
      "Puis, plus bas, sans ironie : « La Larme, je m'en moque. C'est un caillou qui a coûté trois vies avant d'arriver chez moi. Mais vous, on vous mettrait en prison pour un caillou. Cela, je ne l'avais pas prévu. Je prévois mal les gens, depuis que je n'en vois plus. »",
    ],
    choices: [
      { back: "S_chambre_noire" },
    ] },

  S_pieces: { act: "II", title: "Les quatre pièces", place: "tour", second: true, puzzle: "s_vie",
    text: [
      "Orsenne ouvre un coffre au pied de son lit de camp. Dedans, emballées dans de la paille, les pièces qu'on cherchera demain : la dent de narval, l'oiseau d'argent, la balle de plomb. Il y ajoute, en le désignant du menton vers la trappe, *le sablier, en bas, dans la galerie, qu'on ne peut pas monter par l'escalier, hélas, il est trop grand*. Il pose sur la table blanche, sur la rue des Antiquaires minuscule, quatre petites cartes où il a dessiné chaque objet.",
    ],
    choices: [
      { back: "S_chambre_noire" },
    ] },

  S_vie_rangee: { act: "II", title: "Rangée", place: "tour", second: true,
    text: [
      "La dent, la balle, l'oiseau, le sablier. La mer, la guerre, Pauline, et l'absence de Pauline. Orsenne regarde les quatre cartes en ligne sur la ville, longtemps, et il hoche la tête.",
      "« C'est cela, dit-il. Vous rangez mieux que moi. Moi, je les mets toujours dans le même ordre, mais je ne m'en souviens qu'en les touchant. » Il rassemble les cartes. « Bon. Je vous fais confiance. C'est très désagréable, je n'en ai plus l'habitude. Que voulez-vous que je fasse de ma mort ? »",
    ],
    choices: [
      { back: "S_chambre_noire" },
    ] },

  S_parait: { act: "II", title: "Ressusciter", place: "tour", second: true,
    text: [
      "Tu lui dis : descendez. À six heures, quand ils seront tous dans la salle des automates, le neveu, le priseur, l'assureur et le commissaire, descendez l'escalier en robe de chambre, et dites bonjour.",
      "Orsenne te regarde avec une stupeur qui se change lentement en délice, comme un enfant à qui l'on propose de mettre le feu à l'école. « Ressusciter, dit-il. Devant un commissaire. Devant mon neveu. Devant la Compagnie du Phénix. » Il se frotte les mains, des mains qui ne tremblent pas. « C'est la plus belle idée qu'on m'ait proposée depuis la mort de ma femme. Allez. Je descends à six heures. Je mettrai mes pantoufles brodées. »",
    ],
    choices: [
      { back: "S_chambre_noire" },
    ] },

  S_part: { act: "II", title: "Partir", place: "tour", second: true,
    text: [
      "Tu lui dis : partez. Avec Mélie, avec vos quatre pièces, ce soir, par la porte du lierre. Restez mort. Allez voir la mer.",
      "Orsenne se tait longtemps. Puis il fait signe que oui. « Mort, dit-il. C'est reposant, à la réflexion. On ne vous demande plus rien. » Vous descendez ensemble, à trois, par l'escalier de la tour, le coffre de paille entre vous, jusqu'à une charrette de maraîcher qui attend dans la ruelle, sous une bâche, avec un cheval qui dort debout.",
      "Avant de monter, le vieil homme te prend la main. Il y glisse une petite chose ronde et froide : la balle de plomb, sur son épingle. « Elle m'a manqué. Qu'elle vous manque aussi. » Puis il monte à côté de Mélie, et la charrette s'en va sous la pluie, sans lanterne, vers la porte de la mer.",
    ],
    choices: [
      { back: "A_jardin" },
    ] },

  // ------------------------------------------------------------------ the cellar again
  S_billet_gobe: { act: "II", title: "Le billet de l'établi", place: "reserve", second: true,
    text: [
      "Pendant que Gobe te tourne le dos, penché sur l'œil de verre bleu, tu fais glisser un billet plié qui dépasse sous un moule de plâtre. Une écriture élégante, pressée, que tu as vue sur une étiquette de cuir : *A. O.*",
      "*3 h. 12 · 1 · 18 · 13 · 5. La Sibylle. Ne pas réveiller le gardien s'il dort ; s'il ne dort pas, il dormira. — A.*",
    ],
    choices: [
      { label: "Déchiffrer le billet", hide: { has: "enigme:s_note" }, to: "S_note" },
      { back: "A_reserve" },
    ] },

  S_note: { act: "II", title: "Les cinq nombres", place: "reserve", second: true, puzzle: "s_note",
    text: [
      "Tu comptes sur tes doigts, à la lueur de la lampe de Gobe.",
    ],
    choices: [
      { back: "A_reserve" },
    ] },

  S_note_lue: { act: "II", title: "Larme", place: "reserve", second: true,
    text: [
      "*Larme.* À trois heures, la Larme. La Sibylle. *Ne pas réveiller le gardien s'il dort ; s'il ne dort pas, il dormira.* La flasque de prune, sur la table de ta loge, avec son goût fade de tilleul au fond. Et la signature d'Aristide Orsenne, l'héritier, le neveu, qui vole sa propre pierre.",
      "Gobe s'est retourné. Il a vu le billet dans ta main. Sa lime tremble.",
    ],
    choices: [
      { back: "A_reserve" },
    ] },

  S_gobe_accord: { act: "II", title: "Le marché", place: "reserve", second: true,
    text: [
      "Tu lui parles à voix basse, sans le menacer : la police d'assurance, quatre-vingt mille écus, la Compagnie du Phénix, qui a des avocats et la mémoire longue ; le neveu, qui aura besoin d'un coupable si le gardien en réchappe, et qui a sous la main un faussaire de génie dont personne ne connaît le nom.",
      "Gobe ôte sa loupe. Ses yeux nus sont petits, verts, et très fatigués. « Il me paie trois cents écus, dit-il. J'en dois deux cents. Je fais des copies parce que personne ne veut acheter mes originaux. » Il se mouche. « À trois heures, je ferai l'échange. Et je vous donnerai la vraie, à vous, dans votre main. Et à six heures, je dirai la vérité au monsieur du Phénix, si vous me jurez qu'il me laissera repartir. » Il remet sa loupe. « Je suis lâche, mais je suis honnête dans ma lâcheté. »",
    ],
    choices: [
      { back: "A_reserve" },
    ] },

  S_gobe_refus: { act: "II", title: "Pas de marché", place: "reserve", second: true,
    text: [
      "Gobe t'écoute, la loupe à l'œil, et secoue la tête. « Vous êtes un gardien. Lui, c'est un héritier. Entre un gardien et un héritier, Monsieur, la justice ne choisit jamais longtemps. » Il retourne à son œil de verre. « Allez faire votre ronde. Et ne buvez rien. »",
    ],
    choices: [
      { back: "A_reserve" },
    ] },

  // ------------------------------------------------------------------ the strongbox
  S_coffre: { act: "II", title: "Le coffre d'Aristide", place: "bibliotheque", second: true, puzzle: "s_coffre",
    text: [
      "Tu écartes les in-folio de Buffon. Le coffre neuf est là, avec son mot gravé. *Délivrance.* Tu penses à ce qui, pour un neveu criblé de dettes, a été une délivrance, et à la date où elle a eu lieu.",
    ],
    choices: [
      { back: "A_bibliotheque" },
    ] },

  S_coffre_ouvert: { act: "II", title: "Les papiers du neveu", place: "bibliotheque", second: true,
    text: [
      "Le couvercle se soulève. Dedans, une liasse de billets de banque, un passeport pour la Belgique au nom d'Aristide Orsenne, un billet de diligence pour Anvers, départ demain à midi. Et deux papiers, que tu déplies sous ta lanterne.",
      "Le premier est la police de la Compagnie du Phénix : *la Larme de Golconde, assurée contre le vol pour quatre-vingt mille écus, au bénéfice de Monsieur Aristide Orsenne, souscrite le 17 octobre.* Le lendemain de l'enterrement.",
      "Le second est une lettre, en français d'étranger, sur papier à en-tête d'un diamantaire d'Anvers : *Monsieur, je recevrai la pierre que vous savez le 24. Elle sera retaillée en trois dans la semaine. Personne ne la reconnaîtra plus jamais, pas même sa mère.*",
    ],
    choices: [
      { back: "A_bibliotheque" },
    ] },

  // ------------------------------------------------------------------ three o'clock
  S_trois: { act: "II", title: "Trois heures, derrière l'horloge", place: "automates", second: true,
    text: [
      { if: { has: "flasque:bue" }, text: "Tu t'installes derrière l'horloge astronomique, dans l'ombre, et tu attends. La prune d'Aristide te chauffe la poitrine. Tes paupières pèsent. Tu luttes. Tu perds. Quand tu rouvres les yeux, l'horloge de Saint-Eustache sonne la demie, et la Sibylle te regarde de deux yeux qui ne sont plus les mêmes." },
      { if: { not: { has: "flasque:bue" } }, text: "Tu t'installes derrière l'horloge astronomique, dans l'ombre, la lanterne fermée. Trois heures sonnent à Saint-Eustache. Au même instant, dans la galerie, un fracas énorme : l'ours tombe. Tu ne bouges pas. Tu sais ce qui tombe, et pourquoi." },
      { if: { not: { has: "flasque:bue" } }, text: "Une minute plus tard, la porte de la salle s'entrouvre. Un petit homme pâle entre sans lumière, une loupe vissée à l'œil, un écrin de velours à la main. Fortuné Gobe. Il monte sur l'estrade, sort de sa manche une pince d'orfèvre, et se penche sur le visage de la Sibylle avec la tendresse d'un chirurgien." },
    ],
    choices: [
      { label: "Le laisser faire l'échange, comme convenu", if: { all: [{ has: "gobe:temoin" }, { not: { has: "flasque:bue" } }] }, hide: { item: "larme" }, fx: { item: "larme" }, to: "S_trois_accord" },
      { label: "Le saisir au poignet", if: { all: [{ not: { has: "gobe:temoin" } }, { not: { has: "flasque:bue" } }] }, hide: { any: [{ item: "larme" }, { has: "gobe:fui" }] }, test: { dom: "combat", diff: 0, label: "Combat" }, win: { fx: { item: "larme", flag: "gobe:pris" }, to: "S_trois_pris" }, lose: { fx: { flag: "gobe:fui" }, to: "S_trois_fui" } },
      { label: "Courir à la Sibylle", if: { has: "flasque:bue" }, hide: { has: "gobe:fui" }, fx: { flag: "gobe:fui" }, to: "S_trois_fui" },
      { back: "A_automates" },
    ] },

  S_trois_accord: { act: "II", title: "Dans ta main", place: "automates", second: true,
    text: [
      "Gobe travaille deux minutes, sans un bruit. Le diamant sort de l'orbite de porcelaine avec un petit soupir de cire. Le verre bleu y entre. Gobe descend de l'estrade, vient à l'horloge sans hésiter, comme s'il avait toujours su que tu étais derrière, et dépose dans ta main la Larme de Golconde.",
      "Elle est froide, lourde, plus lourde qu'une pierre de cette taille. Tu la regardes à la lueur de ta lanterne entrouverte, et tu comprends ce que voulait dire Orsenne : au fond, très loin, il y a de la lumière bleue, et la lumière bleue a l'air de te regarder avec une indifférence absolue. « Trois vies, chuchote Gobe. On dit qu'elle a coûté trois vies. Moi, je ne veux pas être la quatrième. » Il s'en va.",
    ],
    choices: [
      { back: "A_automates" },
    ] },

  S_trois_pris: { act: "II", title: "La main dans le sac", place: "automates", second: true,
    text: [
      "Tu bondis de derrière l'horloge au moment où le diamant sort de l'orbite. Ta main se referme sur le poignet de Gobe comme un étau. Il pousse un petit cri d'oiseau, lâche la pince, et la Larme roule sur le velours de l'estrade, roule, roule, et tu la rattrapes au bord, du bout des doigts.",
      "Gobe se laisse attacher à la chaise de la loge avec la cordelette de soie de l'ours, sans résister, en pleurant un peu. « C'est lui, répète-t-il. C'est toujours lui. Moi, je copie. »",
    ],
    choices: [
      { back: "A_automates" },
    ] },

  S_trois_fui: { act: "II", title: "L'œil de verre", place: "automates", second: true,
    text: [
      "Trop tard. La Sibylle te regarde d'un œil bleu qui ne t'avale plus : il te renvoie ta lanterne, poliment, comme un œil de verre. Une porte claque en bas, vers le jardin. Des pas qui courent dans l'allée. La petite porte du fond qui grince, puis la ruelle, puis plus rien.",
      "La Larme de Golconde est partie pour Anvers dans la poche d'un faussaire, et la nuit, cette fois encore, se referme sur toi comme un piège bien huilé.",
    ],
    choices: [
      { back: "A_automates" },
    ] },

  // ------------------------------------------------------------------ dawn
  F_cabinet: { act: "II", title: "Le cabinet Orsenne", place: "automates", end: true, second: true,
    fx: { flag: "fin:cabinet", meet: ["quatremain", "bejot"] },
    text: [
      "À six heures, la grille grince. Ils arrivent tous ensemble, dans le petit jour sale : Pigache, Aristide, Monsieur Quatremain et son lorgnon, le commissaire Béjot et son écharpe. Tu les attends dans la salle des automates, debout à côté de la Sibylle, comme un huissier de cour.",
      "Monsieur Quatremain se penche sur l'œil gauche, avec sa loupe, sa lampe, son flacon. Il se redresse, très pâle. « Verre, dit-il. Très bon verre. Mais verre. » Aristide Orsenne se tourne vers toi avec la même tristesse sincère que la première fois. « Vous aviez toutes les clefs. Commissaire, je suis désolé. »",
      { if: { has: "larme:rendue" }, text: "Tu ouvres la main. La Larme de Golconde est dans ta paume, et la lumière grise du matin s'y enfonce, s'y perd, et revient bleue. Monsieur Quatremain la prend avec deux doigts, la regarde à la loupe, et la remet dans l'orbite de la Sibylle. Elle y entre exactement. « Le gardien a la pierre, dit-il lentement. Le gardien a la pierre, et la pierre était remplacée. Monsieur Orsenne, qui a remplacé votre pierre ? »" },
      { if: { has: "gobe:temoin" }, text: "Fortuné Gobe monte de la cave, sa loupe à la main, et raconte tout, d'une voix blanche, sans regarder Aristide : les copies, les trois cents écus, le billet de trois heures, la flasque. Monsieur Quatremain écrit tout, sans un mot, avec une petite plume d'acier." },
      { if: { has: "gobe:pris" }, text: "Tu fais monter Gobe de la loge, attaché à sa chaise. Il pleure, il renifle, et il désigne Aristide d'un menton tremblant avant même qu'on lui pose la question." },
      { if: { has: "gobe:fui" }, text: "Le faussaire est loin, avec la vraie pierre. Il ne reste de lui, dans la cave, qu'un établi propre et une porte de fer ouverte." },
      { if: { has: "preuve:aristide" }, text: "Tu poses sur le secrétaire de la Sibylle la police du Phénix, souscrite le lendemain de l'enterrement, et la lettre du diamantaire d'Anvers. *Personne ne la reconnaîtra plus jamais, pas même sa mère.* Monsieur Quatremain lit, relit, et se tourne vers le commissaire. Le commissaire Béjot soupire comme un homme dont la journée vient de se compliquer, et se tourne vers Aristide Orsenne." },
      { if: { has: "orsenne:parait" }, text: "C'est alors qu'un pas descend l'escalier. Un pas lent, glissé, un pas de pantoufle. Tout le monde se retourne. Sur le seuil de la salle ronde paraît un vieillard long et maigre, en robe de chambre de velours vert et pantoufles brodées d'or, la barbe peignée, qui salue la compagnie d'une inclination de tête. Pigache laisse tomber son marteau. Le commissaire fait un signe de croix. Aristide Orsenne devient de la couleur exacte de la Sibylle. « Bonjour, mon neveu, dit Hippolyte Orsenne. Je vois que tu as pris soin de mes affaires. »" },
      { if: { all: [{ has: "orsenne:parait" }, { has: "larme:rendue" }] }, text: "« La vente est annulée, dit le vieil homme à Pigache, pour cause de résurrection du propriétaire. Je vous dois une commission. Je vous la paierai avec la plus grande lenteur. » Puis il se tourne vers toi, et devant tout le monde, il te tend la main. « Merci d'avoir gardé ma maison. Vous êtes la première personne en un mois qui ait regardé mes choses comme si elles valaient quelque chose. »" },
      { if: { has: "orsenne:part" }, text: "Dans la galerie, Pigache compte les lots, et trouve qu'il en manque trois : un oiseau d'argent, une dent de narval, une balle de plomb sur une épingle. Il te regarde. Tu ne dis rien. Tu as dans ta poche une balle de plomb, sur une épingle, qui ne t'a pas manqué. Quelque part sur la route de la mer, une charrette de maraîcher roule sous la pluie, avec un mort et une préparatrice qui se disputent sur l'itinéraire." },
      { if: { all: [{ not: { has: "orsenne:vivant" } }] }, text: "Au-dessus de la coupole peinte, un pas glisse, s'arrête, revient. Personne ne l'entend, sauf toi. L'homme de la tour est resté un plafond au-dessus de toi, cette fois encore. Tu as gardé la maison sans savoir pour qui." },
      { if: { all: [{ not: { has: "larme:rendue" } }, { not: { has: "preuve:aristide" } }, { not: { has: "orsenne:parait" } }] }, text: "Tu as su, cette nuit, ce qui allait arriver, et tu n'as pas pu l'empêcher. On te passe les menottes une seconde fois, dans la même salle, devant les mêmes automates. Mais en traversant la galerie, tu détournes les yeux du sablier. Il a rendu ce qu'il pouvait rendre." },
      { if: { any: [{ has: "larme:rendue" }, { has: "preuve:aristide" }, { has: "orsenne:parait" }] }, text: "Ce sont les poignets d'Aristide Orsenne qui reçoivent les menottes, dans la salle ronde, sous le ciel peint, devant les automates figés qui ont tout vu. Il ne proteste pas. Il regarde sa montre, une dernière fois, comme pour savoir à quelle heure exactement sa délivrance l'a quitté." },
      "Tu redescends dans la galerie, seul{e}, dans la lumière du matin. Le grand sablier de Mnémosyne est sur sa colonne, entre le crocodile et l'ours, et tout son sable dort dans le bulbe du bas. Tu poses la main sur le verre. Il est froid, cette fois. Il a rendu une nuit. Il n'en rendra pas d'autre.",
    ] },
};
