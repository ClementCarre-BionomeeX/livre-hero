// Le Douzième Coup · dénouement « defaire », part B : the afternoon of 21 June 541 (hub `Fd_parvis`), the Palace and
// the remedy (`monde:d_remede_dit`), the last sand (`monde:d_sable_puits` | `monde:d_sable_garde` | `monde:d_sable_vieux`),
// the duke at dusk (`Fd_duc` : `monde:d_duc_pris` | `monde:d_duc_cour`), the fountain (`Fd_soir`), and the three
// tomorrows (`monde: "demain541"` : `monde:d_meridane` | `monde:d_route` | `monde:d_cahiers`). Each tomorrow ends on
// an `end` passage flagged `fin:defaire`. Personal marks : `j:d_perrine_vrai`, `monde:d_perrine_route`,
// `monde:d_tannerie_dit`, `monde:d_brindille`, `r:d_pain`, `r:d_lison_vue`, `j:d_loupe`.
var P = {};
var J = { has: "role:passe" }, R = { has: "role:reste" };
var REMEDE = { has: "monde:aelis_remede" };
var SORTIS = { has: "monde:noyers_sortis" };
var PIECE = { has: "monde:florizel_piece" };
var P_DEBOUT = { has: "monde:perrine_debout" }, P_SORTIE = { has: "monde:perrine_sortie" };
var PREUVE = { any: [{ has: "monde:d_jeune_reine" }, { has: "monde:oderic_affiche" }, { has: "monde:lettres_garde" }, { has: "monde:lu:lettre" }, { has: "monde:lu:sceau" }, { has: "monde:oderic_demasque" }] };
var FIN = { flag: "fin:defaire" };

Object.assign(P, {
  Fd_parvis: { act: "V", title: "Le parvis, un jour de fête", place: "tour", ambiance: "ville", hub: true, backName: "le parvis",
    text: [
      { first: true, text: "Cinq mille personnes vous tournent le dos. Elles ont eu leur midi, elles ont crié leur chiffre, et elles s'en vont dîner, par les six rues, avec la hâte paisible des foules qui ont faim. On se pousse, on s'attend, on se perd. Un homme cherche sa femme en l'appelant *Marion*, et trois Marion se retournent." },
      { first: true, text: "Personne ne vous regarde. Vous êtes deux jeunes gens sales au pied d'une tour, un jour où tout le monde est propre. On vous prend pour des ramoneurs, ou pour des amoureux. Une marchande d'oublies vous en tend deux, d'office, et réclame un liard." },
      { first: true, if: J, text: "{autre} tient son oublie sans la manger. {autre:Il} regarde les gens marcher. {autre:Il} les a tous vus, un par un, pendant six ans, gris, la bouche ouverte, et {autre:il} en a fouillé plus d'un. {autre:Il} recule d'un pas chaque fois qu'un passant {autre:le} frôle : on ne s'habitue pas en une heure à ce que les statues vous disent pardon." },
      { first: true, if: R, text: "Tu tiens ton oublie sans la manger. Tu regardes les gens marcher. Tu les as tous vus, un par un, pendant six ans, gris, la bouche ouverte. Tu en as fouillé plus d'un. Un gros homme te frôle et dit *pardon* ; tu recules d'un pas. Tu lui as pris sa tabatière, chez toi, il y a deux hivers. Il l'a dans sa poche. Tu la vois qui bombe." },
      { again: true, text: "Le parvis se vide par les six rues. Il y reste des tréteaux, un dais rouge, et l'odeur de la friture." },
    ],
    choices: [
      { label: "Les tréteaux du Mystère", hide: { seen: "Fd_treteaux" }, to: "Fd_treteaux" },
      { label: "Le dais rouge, et le capitaine", hide: { seen: "Fd_dais" }, to: "Fd_dais" },
      { label: "La borne de la rue aux Oies", hide: { any: [SORTIS, { seen: "Fd_oies" }] }, to: "Fd_oies" },
      { label: "Chercher une hotte, et celle qui la porte", hide: { any: [R, { seen: "Fdj_perrine" }] }, to: "Fdj_perrine" },
      { label: "La colline des Jurés, et ton établi", hide: { any: [R, { seen: "Fdj_colline" }] }, to: "Fdj_colline" },
      { label: "La rue des Aiguilliers", hide: { any: [R, { not: { has: "monde:tiphaine_partie" } }, { seen: "Fdj_tiphaine" }] }, to: "Fdj_tiphaine" },
      { label: "L'homme à la moustache rousse", hide: { any: [J, { seen: "Fdr_boulanger" }] }, to: "Fdr_boulanger" },
      { label: "Les charretiers en blouse bleue", hide: { any: [J, { seen: "Fdr_verriers" }] }, to: "Fdr_verriers" },
      { label: "La rue de trois couleurs", hide: { any: [J, { seen: "Fdr_tannerie" }] }, to: "Fdr_tannerie" },
      { label: "L'arche des Trois-Chandelles", hide: { any: [J, { seen: "Fdr_arche" }] }, to: "Fdr_arche" },
      { label: "Monter au Palais : on y porte l'enfant", to: "Fd_palais", big: true },
    ] },

  Fd_treteaux: { act: "V", title: "La douzième porte", place: "tour", ambiance: "ville",
    text: [
      "On démonte déjà. Deux valets roulent la toile aux douze portes ; un troisième compte la recette dans un chapeau. Maître Florizel est assis au bord des planches, en pourpoint cerise, les jambes pendantes, et il s'évente avec son rôle.",
      { if: { not: PIECE }, text: "La douzième porte s'est ouverte au douzième coup, comme depuis trente ans, sur une planche noire et une araignée. Le Chapitre a vérifié qu'il n'y avait personne. Cinq mille spectateurs se sont signés. C'est un succès : c'est le même que l'an dernier." },
      { if: { all: [PIECE, { has: "monde:piece_silence" }] }, text: "La douzième porte s'est ouverte au douzième coup, et il en est sorti quelqu'un. Une fille en robe sans couleur, qui a marché jusqu'au bord et qui a regardé la place. Elle n'a rien dit. Cinq mille personnes ont cessé de mâcher. Cela a duré le temps d'un Ave ; puis une vieille, au troisième rang, a dit tout haut : « Eh bien, c'est à nous », et tout le monde est allé dîner, très vite, en parlant d'autre chose." },
      { if: { all: [PIECE, { has: "monde:piece_mot" }] }, text: "La douzième porte s'est ouverte au douzième coup, et il en est sorti quelqu'un. Une fille en robe sans couleur, qui a levé les yeux vers le cadran et qui a dit, de la voix dont on réveille un dormeur dans son fauteuil : « Il est midi passé. Allez. » Cinq mille personnes sont restées la bouche ouverte, puis elles ont ri, d'un seul rire, comme on rit quand on a eu peur ; et elles sont allées." },
      { if: { all: [PIECE, { has: "monde:piece_corde" }] }, text: "La douzième porte s'est ouverte au douzième coup, et il en est sorti quelqu'un. Une fille pieds nus, qui a levé le bras, trouvé une corde, et tiré de tout son poids. Et la Patiente, au même instant, a sonné douze au-dessus d'elle. Florizel jure qu'il l'avait réglé ainsi. Personne ne le croit, et lui moins que personne." },
      { if: { all: [PIECE, { not: { any: [{ has: "monde:piece_silence" }, { has: "monde:piece_mot" }, { has: "monde:piece_corde" }] } }] }, text: "La douzième porte s'est ouverte au douzième coup, et il en est sorti quelqu'un. Le Chapitre a eu un haut-le-corps ; la place a retenu son souffle, puis elle a battu des mains, longtemps, comme on applaudit une chose qu'on attendait sans le savoir." },
      { if: PIECE, text: "« On me fouettera, dit Florizel avec satisfaction. Le chanoine Poupart a déjà envoyé son bedeau. J'ai répondu que la Douzième avait paru d'elle-même, et qu'un directeur de troupe n'a pas d'ordres à donner aux Heures. » Il s'évente. « La recette est double. On se fait fouetter pour moins. »" },
      { if: { all: [J, { has: "j:douzieme_jouee" }] }, text: "Colombe sort de derrière la toile, sa robe sur le bras, trois épingles à la bouche. Elle te cherche des yeux dans ce qui reste de foule ; elle te trouve. Elle ôte les épingles. « Je vous ai rêvé{e}. Vous étiez la salle. Vous m'avez dit que cela tenait. » Elle te regarde bien. « Ce n'était pas un rêve. — Non. — Alors cela tenait vraiment ? » Tu dis oui. Elle fait oui aussi, gravement, et retourne plier ses portes." },
      { if: { all: [J, { not: { has: "j:douzieme_jouee" } }] }, text: "Colombe plie son manteau bleu dans une malle. Elle a seize ans, des yeux verts, une figure patiente. Elle ne te connaît que d'un pré, il y a quatre jours. Elle te fait un signe de tête, comme à quelqu'un qu'on a croisé avant un grand jour et qu'on retrouve après." },
      { if: R, text: "Tu regardes les douze portes peintes qu'on roule. Chez toi, elles avaient soixante ans de pluie, et la douzième battait au vent des jours où il y en avait. Tu avais regardé derrière. Ici, deux valets les emportent sur l'épaule, en jurant, vers une charrette. Elles serviront l'an prochain." },
    ],
    choices: [{ back: "Fd_parvis" }] },

  Fd_dais: { act: "V", title: "Passez à ma droite", place: "tour", ambiance: "ville",
    text: [
      "Les quatre porteurs ont relevé le dais. La Reine en sort, à pied, l'enfant contre elle : elle a refusé la chaise. Elle traverse le parvis au milieu d'une haie qui se fait toute seule. On ôte les chapeaux. Personne ne sait qu'il y a une raison de plus que d'habitude.",
      { if: { has: "monde:hardouin_tour" }, text: "Le capitaine Hardouin est au pied de la Tour avec ses six archers, la main à la garde, rasé de frais. Il a tenu cette porte depuis dix heures sur la foi d'un{e} inconnu{e}, et il s'est demandé toute la matinée s'il était fou. Il voit descendre sa Reine. Il voit, à l'entrée de la ruelle, quatre bourgeois à ruban vert qui s'éloignent en regardant leurs souliers." },
      { if: { has: "monde:hardouin_tour" }, text: "« Messieurs ! » Sa voix porte sur toute la place. « Passez à ma droite. » Ils passent. On ne discute pas avec six arcs un jour de fête. Le plus gros a sous le bras un papier qui a plus de cire que d'écriture ; le capitaine le lui prend avec deux doigts, comme un linge." },
      { if: { not: { has: "monde:hardouin_tour" } }, text: "Le capitaine Hardouin arrive du Palais au pas de course, six archers derrière, rasé de travers. Il avait gardé la mauvaise porte : on la lui avait désignée par écrit. Il s'arrête devant sa Reine, cherche une phrase, et ne trouve que son salut. À l'entrée de la ruelle, il y avait quatre bourgeois à ruban vert. Il n'y a plus que quatre places chaudes sur le pavé." },
      { if: { has: "r:hardouin_sait" }, text: "Il vous voit. Il fronce le sourcil sur les sabots, le charbon, comme sur un visage qu'on a connu au régiment. « J'ai rêvé d'un ordre, ce matin, dit-il lentement. Debout. Un ordre signé de ma main, que je n'avais pas écrit. » Il secoue la tête. « On dit des sottises, les jours de grand soleil. »" },
      { if: J, text: "La Reine s'arrête devant toi. Elle ne te nomme pas : elle a compris qu'il valait mieux, aujourd'hui, que tu n'aies pas de nom. « Capitaine. Ces deux personnes entrent au Palais quand elles veulent, par la porte qu'elles veulent. Vous ne leur demanderez rien. Moi-même, je leur ai tout demandé. »" },
      { if: R, text: "La Reine s'arrête devant vous. Elle te regarde, toi, les sabots à la main. Elle t'a demandé pardon, dans une chambre, pendant que le gris lui montait aux poignets. Tu vois qu'elle s'en souvient, comme d'un rêve dont on a gardé la dernière phrase. « Capitaine. Ces deux personnes entrent au Palais quand elles veulent. Vous ne leur demanderez rien. »" },
      "« Le duc ? » demande-t-elle, sans tourner la tête. « À la Louvière, Madame. Il chasse. Il rentre à la brune. — Bien. Je l'attendrai. J'ai, depuis ce matin, une grande habitude d'attendre. »",
    ],
    choices: [{ back: "Fd_parvis" }] },

  Fd_oies: { act: "V", title: "Un homme en blouse neuve", place: "tour", ambiance: "ville",
    text: [
      "Josse Noyer est descendu de sa borne. Il a quarante-quatre ans, une blouse neuve, des mains de laboureur, et il cherche deux enfants dans une foule qui s'en va. Il ne crie pas : on ne crie pas, aux Trois-Noyers. Il regarde par-dessus les têtes, avec méthode, quart de place par quart de place.",
      { if: { has: "monde:girard_attele" }, text: "Il sait où est le garçon : au pont du bief, avec la jument, puisqu'il le lui a dit. C'est la petite qu'il cherche. Elle a demandé à descendre, à la demie de dix, et il l'a posée par terre." },
      { if: { not: { has: "monde:girard_attele" } }, text: "Il les avait tous les deux contre lui à onze heures. Il a tourné la tête au premier coup. Au douzième, il avait la main sur une épaule, et il lui en manquait une." },
      { if: { all: [J, { has: "monde:mot_josse" }] }, text: "Il te voit. Il a un sursaut. « Toi. Je t'ai parlé. Tout à l'heure, ou cette nuit. Tu m'as demandé ce qu'il fallait dire à ma fille, et j'avais des choses dans la bouche qui n'étaient pas de mon âge. » Il se frotte la nuque. « Elle avait des lunettes. Soixante-neuf ans. J'ai trop bu de ce vin de foire. »" },
      { if: { all: [J, { has: "monde:mot_josse" }] }, text: "Tu dis qu'il n'a rien bu. Que ce qu'il t'a confié, tu n'auras à le porter à personne : sa fille a neuf ans, elle est au septième peuplier, et elle l'attend en tenant sa boîte. « Vous lui direz vous-même. Vous avez soixante ans pour cela. » Il te regarde sans comprendre le chiffre. Il comprend le reste, et il part, à grandes enjambées, du côté du canal." },
      { if: { all: [J, { not: { has: "monde:mot_josse" } }] }, text: "Il te reconnaît : tu as dormi dans sa grange, et tu as rendu une horloge à sa cuisine. « Tu as vu ma petite ? » Tu dis : au septième peuplier, sur le halage, avec sa boîte. Il ne demande pas d'où tu le tiens. Il te serre le bras, une fois, fort, et il part du côté du canal." },
      { if: { all: [R, { any: [{ has: "r:josse_eveille" }, { has: "r:josse_trouve" }] }] }, text: "Tu le connais. Chez toi, tu l'as trouvé à cette borne, gris, la main en visière, et tu as su de qui il était le père à la façon dont il regardait le canal. Il te dévisage, lui, comme on dévisage un inconnu charbonneux. {autre} lui dit où est la petite. Il part. Tu le regardes courir : il court mal, les coudes écartés. Son fils court de même." },
      { if: { all: [R, { not: { any: [{ has: "r:josse_eveille" }, { has: "r:josse_trouve" }] } }] }, text: "{autre} lui dit où est la petite : au septième peuplier, avec sa boîte. Il part, à grandes enjambées. Tu le regardes aller. Il a les sourcils d'un seul trait. Tu les as vus, ce matin, sur une enfant de neuf ans, et hier sur une vieille." },
    ],
    choices: [{ back: "Fd_parvis" }] },

  // ----- the one who passes
  Fdj_perrine: { act: "V", title: "Deux sous", place: "tour", ambiance: "ville",
    text: [
      { if: P_DEBOUT, text: "Elle est en bas, contre le pignon jaune, au bord de l'eau, son drap rouge défait autour du cou. Devant elle, le mur est couvert de traits de charbon, par paquets de cinq, jusqu'à hauteur de son bras levé. Elle les regarde. Elle a ôté sa cire, et elle écoute la ville avec la figure de quelqu'un qui recompte." },
      { if: P_DEBOUT, text: "« Deux cent trente et un. » Elle ne se retourne pas : elle a reconnu ton pas. « J'en avais sorti deux cent trente et un par le bief quand ça a resonné. Ils reviennent. Regarde-les. » Sur le quai, des gens rentrent en ville, à pied, des enfants sur les bras, l'air de s'être dérangés pour rien. « Ils disent que je les ai fait courir pour une cloche qui a sonné comme d'habitude. Il y en a un qui veut que je lui rembourse ses souliers. »" },
      { if: P_DEBOUT, text: "Elle se retourne. Elle a les yeux rouges, et elle rit. « Je vais les lui rembourser. C'est le plus beau compte faux que j'aie jamais tenu. »" },
      { if: P_SORTIE, text: "Tu la trouves à la porte d'Occident, qui rentre. Elle a sa hotte, ses trois piles, de la poussière jusqu'aux genoux. Elle était passée le septième peuplier à onze heures, comme tu l'avais voulu ; elle s'était assise sur le talus, le dos à la ville, pour ne pas voir. Elle a entendu douze coups. Elle a compté deux fois sur ses doigts, et elle est revenue en courant." },
      { if: P_SORTIE, text: "« Tu m'as fait sortir pour rien. » Elle pose sa hotte. Elle te regarde les mains. « Non. Pas pour rien. Tu as les paumes d'un qui a tiré sur quelque chose. » Elle te les prend, les retourne. « Ça a failli. »" },
      { if: { not: { any: [P_DEBOUT, P_SORTIE] } }, text: "Elle est au bord de la place, sa hotte au dos, le bras levé, deux doigts en l'air. « ...deux sous ! » Elle achève son prix. La cliente paie. Perrine mord la pièce, la met dans sa poche, et tend l'almanach, à la page de juin." },
      { if: { all: [{ not: { any: [P_DEBOUT, P_SORTIE] } }, { has: "j:perrine_eveil_vrai" }] }, text: "Puis elle te voit, et elle devient très pâle sous son hâle. « J'ai rêvé debout. Tu me disais *soixante.* Je comptais mes almanachs périmés. » Elle regarde la pile, dans sa hotte. « Ils sont de l'année. » Elle te regarde. « Ce n'était pas un rêve. Tu as la figure de quelqu'un qui en revient. »" },
      { if: { all: [{ not: { any: [P_DEBOUT, P_SORTIE] } }, { not: { has: "j:perrine_eveil_vrai" } }] }, text: "Puis elle te voit. « Te voilà. Tu avais dit que tu serais mort{e} ou parti{e}. Tu es sale, c'est tout. » Elle te regarde mieux, et son sourire de côté s'en va. « Non. Ce n'est pas tout. »" },
      "Elle attend. Elle a mordu des pièces toute sa vie, et elle sait quand on lui en doit une.",
    ],
    choices: [
      { label: "Lui dire d'où tu viens, et que tu n'y retourneras pas", fx: { flag: "j:d_perrine_vrai" }, to: "Fdj_perrine_fin", big: true },
      { label: "Lui dire seulement que tu restes", to: "Fdj_perrine_fin", big: true },
    ] },

  Fdj_perrine_fin: { act: "V", title: "L'article dernier", place: "tour", ambiance: "ville",
    text: [
      { after: "j:d_perrine_vrai", text: "Tu lui dis tout. Un village qui n'est pas encore bâti comme tu l'as connu. Une vieille horlogère qui a neuf ans. Une porte de pierre dans une grange. Soixante ans, que tu as vus, et qui n'auront pas lieu. Tu lui dis que tu ne peux pas rentrer chez toi, parce que chez toi, depuis midi, c'est ici." },
      { after: "j:d_perrine_vrai", text: "Elle t'écoute sans un mot, les bras croisés. À la fin, elle dit : « Tu parlais drôle. Tu ne savais pas le prix du pain. Tu regardais les clochers comme si tu les avais vus tomber. J'avais fait le compte de trois façons, et il ne tombait juste d'aucune. » Elle hoche la tête. « Il tombe juste de celle-là. C'est idiot. Mais il tombe juste. »" },
      { before: "j:d_perrine_vrai", text: "Tu dis que tu restes. Que tu avais une route devant toi, et qu'il n'y en a plus ; que c'est une bonne nouvelle, et que tu lui expliqueras un jour pourquoi elle a la figure d'une mauvaise." },
      { before: "j:d_perrine_vrai", text: "« Un jour. » Elle soupèse le mot comme une pièce étrangère. « Tu me paies encore en promesse. Bon. J'ai l'habitude, avec toi. Tu finis par payer. »" },
      "Elle reprend sa hotte. Elle la charge d'un coup de rein. « Moi, je fais la Saint-Jean à Arvoise. Ma mère y est. Elle a quarante ans, et je trouve tout à coup que c'est un bel âge, et qu'il faut que j'aille le lui dire. » Elle te regarde. « Ensuite l'abbaye, à la mi-août. Roquebise aux vendanges. Les Trois-Noyers à la Saint-Michel. C'est ma tournée. Elle n'a pas changé. »",
      "« L'article dernier, dis-tu. — Tu l'as toujours ? » Tu le lui récites. *On ne quitte pas un associé : on prend un autre chemin pour la même foire.* Elle sourit, de côté.",
      "« Alors dis-moi quelle foire. Je te dirai si elle est sur mon chemin. »",
    ],
    choices: [
      { label: "« Les Trois-Noyers. À la Saint-Michel, j'y serai. »", fx: { flag: "monde:d_perrine_route" }, back: "Fd_parvis" },
      { label: "« Ici. La Guilde. Repasse au Grand Midi. »", back: "Fd_parvis" },
    ] },

  Fdj_colline: { act: "V", title: "Pour demain", place: "guilde", ambiance: "ville",
    text: [
      "La cour des Jurés. Le père Loquet s'est réveillé sur son tabouret et jure qu'il n'a pas dormi. Dans la galerie, le juré Lunel a rouvert les yeux ; son lecteur, quinze ans, est rentré de la fête en courant, la bouche pleine, et il a repris le livre sur la chaise, à la page.",
      "On ne sait rien, ici. On a entendu douze coups. On a trouvé que la Patiente avait pris son temps entre le onzième et le dernier : le juré Rouet dit *un Pater*, le juré Cliquet *à peine un Ave*, et ils en disputeront jusqu'à la Toussaint.",
      "Tu montes à l'atelier du levant. Dix établis. Le tien est sous la meilleure fenêtre, ciré, avec ses outils neufs rangés par taille sur une peau de chamois, et la loupe à manche d'ébène où l'on a gravé tes deux lettres.",
      "Le billet est toujours sous la loupe. *Pour demain. Vous verrez qu'après aujourd'hui nous aurons le temps de tout. M. A.*",
      "Il avait raison, d'une façon qu'il n'avait pas calculée. Tu as le temps de tout. Tu as soixante ans devant toi, dont tu connais une version, et qu'il faudra vivre dans une autre.",
      { if: { has: "monde:d_jeune_guilde" }, text: "Il sera au dernier établi, sous la fenêtre du nord, à faire des goupilles. Il lèvera les yeux quand tu prendras cette loupe. Vous saurez tous les deux qui l'a payée." },
      { if: { has: "monde:d_jeune_banni" }, text: "Il a passé la porte d'Occident, à l'heure qu'il est. Il a laissé là six limes, trois brucelles, et deux lettres gravées pour quelqu'un d'autre. C'est tout ce qui reste de lui dans cette maison, avec une rose de Pâques sous une cloche." },
      { if: { has: "monde:d_jeune_reine" }, text: "Il est au Palais, sous clef. Il pensera à cet établi. Il y a pensé avant de penser à la Reine : il avait commandé la loupe le dix, et le dais le douze." },
    ],
    choices: [
      { label: "Prendre la loupe : elle est à ton nom", fx: { flag: "j:d_loupe" }, back: "Fd_parvis" },
      { label: "La laisser sur le chamois, le manche vers la main", back: "Fd_parvis" },
    ] },

  Fdj_tiphaine: { act: "V", title: "La cage finie", place: "basse", ambiance: "ville",
    text: [
      "Rue des Aiguilliers, sous la tabatière de maître Gobin. Tiphaine est à l'établi, en culotte d'apprenti, les cheveux sous un bonnet. Elle a le burin à la main, et devant elle une cage de montre, ronde, ajourée, dont elle souffle la limaille.",
      "« Je l'ai finie. » Elle te la montre avant de te saluer. « Je me suis réveillée le burin dans les doigts. Je ne sais pas qui me l'y avait remis. Il restait quatre traits. »",
      "Elle penche la tête, deux doigts à la gorge. Elle écoute. Elle a chanté dix ans sous une cloche, et elle sait ce qu'elle entend.",
      "« Elle est retombée. Le douzième. Je l'ai senti dans la table. » Elle te regarde. « On a rendu. » Tu dis oui. « À deux. » Oui. « Et l'on est sorti ensemble, par la même porte. » Tu dis oui encore. Elle ferme les yeux. « Alors la ligne était vraie. Je l'avais lue onze nuits, et je n'avais personne à qui la dire. Mère Ancille appelait ce chapitre un chapitre pour personne. »",
      "« J'écrirai à l'abbaye. Je leur dirai qu'il a servi. » Elle pose la cage sur un chiffon. « Elles ne me croiront pas. Elles me croiront moins encore quand j'ajouterai que le quarantième n'est plus tout à fait blanc. »",
      "Maître Gobin passe la tête par la trappe. Il regarde la cage. Il la prend, la mire au jour, la repose. Il ne dit rien. Chez lui, c'est le plus haut degré de l'éloge.",
    ],
    choices: [{ back: "Fd_parvis" }] },

  // ----- the one who stays
  Fdr_boulanger: { act: "V", title: "À l'Épi", place: "tour", ambiance: "ville",
    text: [
      "« ...et de douze ! » Il a fini son rire, un rire de four, et il a soulevé la petite à bout de bras pour qu'elle voie le cadran. Il est roux de moustache, large, enfariné jusque dans les sourcils. Il a une couronne de pain passée au bras.",
      { if: { seen: "K16r_boulanger_eveil" }, text: "Il te voit, à dix pas, et il s'arrête. Il fronce tout son front. « Toi. » Il cherche. « Je t'ai donné une couronne. Tout à l'heure. Tu étais assis{e} là, par terre, entre mes jambes et la noce. » Il regarde son bras : la couronne y est, entière. « Je l'ai donc rêvé. C'est le soleil. »" },
      { if: { seen: "K16r_boulanger_eveil" }, text: "Tu dis qu'il ne l'a pas rêvé. Qu'elle était tiède, et que tu en as gardé la moitié pour quelqu'un. Il te considère : les sabots, le charbon, les côtes. Il fait le même compte qu'il a déjà fait, et il arrive au même total." },
      { if: { not: { seen: "K16r_boulanger_eveil" } }, text: "Tu t'es caché{e} entre ses mollets et une robe de noces, ce matin, chez toi, pendant que deux noirs passaient. Il était gris, la bouche ouverte sur ce rire-là. Tu ne lui as rien pris : il n'avait que du pain, et le pain des dormants est une pierre. Il te voit. Il fait le compte d'un corps, comme d'autres celui d'une bourse." },
      "« T'as l'air d'avoir faim. » Il décroche la couronne. « Prends. Ma belle-sœur attendra. »",
      "Tu la prends. Elle est tiède. Tu mords dedans, debout, au milieu d'une place, en plein jour, sans regarder derrière toi. C'est du pain. Ce n'est rien, du pain. Tu t'aperçois que tu pleures en mangeant, et tu continues de manger : on ne lâche pas un morceau pour si peu.",
      "« Eh là, dit le boulanger, embarrassé. Il est si mauvais ? » La petite te regarde avec intérêt. « Rue des Fourniers. À l'Épi. Tu repasseras. J'ai un mitron qui se marie à la Saint-Jean, et un pétrin qui cherche des bras. Tu as des bras ? » Tu montres tes bras. Il les tâte, en connaisseur. « Ça se remplume. »",
    ],
    choices: [{ label: "Garder la moitié de la couronne", fx: { flag: "r:d_pain" }, back: "Fd_parvis" }] },

  Fdr_verriers: { act: "V", title: "La troisième après la fontaine", place: "tour", ambiance: "ville",
    text: [
      "Les trois charretiers rattellent, à l'angle de la ruelle. Les douze cuves sont restées à la porte basse, dans leur paille : on leur a dit que le sous-maître qui les avait commandées ne viendrait pas les prendre, et qu'on verrait demain. Ils s'en moquent. Ils sont payés.",
      "Tu t'approches. Le bleu de leurs blouses est celui de chez toi, qui tourne au vert sous les bras. Tu n'as pas parlé à quelqu'un de Roquebise depuis six ans : on ne parle pas aux gens pris, on les éveille pour un renseignement, et l'on regarde ailleurs.",
      "« Vous êtes de la Bise. » Le vieux aux oreilles décollées se retourne. « Et toi aussi, à l'accent. De quel côté ? — Rue des Potiers. La troisième après la fontaine. » Il rit. « Chez les Tiennot ? Tu n'es pas des Tiennot. Je les connais tous, il y en a six, et la dernière a six mois. »",
      "Tu dis que tu es de la famille, de loin. C'est vrai. C'est de très loin, et dans un sens qu'il ne devinerait pas.",
      "« La petite Lison, dit le gros à la fossette. Née à la Sainte-Luce. Elle braille comme une forge. Le Tiennot dit qu'elle chantera. » Le jeune, qui penche la tête de côté, ne dit rien. Il te regarde la bouche. Il a un air de se demander où il a vu cette bouche-là ; et tu sais où, toi : il la verra dans vingt ans sur sa fille, si tout va comme le puits te l'a montré, et rien ne dit que tout ira.",
      "« On repart demain à l'aube, dit le vieux. Quatre jours. Si tu veux une place sur la paille, à la place du verre, c'est vide. »",
      "Tu regardes la charrette. Elle va chez toi. C'est un chez toi où ta porte a un autre marteau, où ta mère n'est pas née, et où ta grand-mère a six mois et braille. Il y a une place sur la paille.",
    ],
    choices: [{ label: "Dire que tu y penseras", fx: { flag: "r:d_lison_vue" }, back: "Fd_parvis" }] },

  Fdr_tannerie: { act: "V", title: "Le jaune", place: "basse", ambiance: "ville",
    text: [
      "Le bras de rivière, ses trois bandes : le rouge, le bleu d'encre, et le jaune vif, presque gai, qui descend de chez les teinturiers. Les roues tournent. Les peaux s'égouttent aux galeries. Il y a une odeur à faire reculer un cheval, et tu la respires à fond : c'est celle d'un quartier qui travaille.",
      "Les quatre seuils. Les quatre fichus noirs.",
      { if: { has: "monde:tannerie_partage" }, text: "Elles sont autour de la table, toutes les quatre, devant quatre bols où il reste de quoi tenir dix jours. Elles ont entendu douze coups. Elles n'ont pas levé la tête : la fête est pour ceux qui ont le temps." },
      { if: { not: { has: "monde:tannerie_partage" } }, text: "Elles sont chacune sur son pas de porte, à regarder dans sa maison. Elles ont entendu douze coups. Elles n'ont pas levé la tête : la fête est pour ceux qui ont le temps." },
      "Tu vas à la plus vieille. Tu ne sais pas comment on entre chez les gens : tu as toujours trouvé les portes ouvertes et personne pour répondre. Tu restes sur le seuil. Tu dis : « C'est pour vos petites. Le mal de cave. Je l'ai eu. »",
      "Elle regarde tes ongles. Elles regardent toutes tes ongles, à présent, les lunules blanches, qu'elles connaissent mieux que le médecin.",
      "« Et tu es debout. — C'est une écorce. Du fièvrier. On la fait bouillir jusqu'au brun, une poignée pour une pinte, dix-neuf jours sans en sauter un. » La plus jeune a un rire dur. « Du fièvrier. On en a eu de quoi faire dix jours, pour quatre, par une sœur de Sainte-Aure. Il en vient une galère par an. » Tu montres la rivière. La bande jaune.",
      "« Ça. C'est quoi, qui fait ça ? »",
      "Elles regardent. Elles ont lavé leur linge dans ce jaune toute leur vie. La vieille ouvre la bouche. Elle la referme. Puis elle part, en sabots, sans fichu, vers le haut de la rue, où est la teinturerie Maugras et ses balles du Levant empilées jusqu'au toit ; et les trois autres derrière elle, en courant, comme courent les femmes qui n'ont plus couru depuis leurs noces.",
      "Quatre fois dix-neuf. Tu avais fait ce compte dans une rue arrêtée, et il sortait faux de ce côté-ci. Tu le refais. Il y avait une chose que tu n'avais pas comptée : toi, de ce côté-ci, avec ta bouche.",
    ],
    choices: [{ label: "Regarder couler le jaune", fx: { flag: "monde:d_tannerie_dit" }, back: "Fd_parvis" }] },

  Fdr_arche: { act: "V", title: "D'abord", place: "basse", ambiance: "ville",
    text: [
      "Sous l'arche des Trois-Chandelles, l'eau clapote de nouveau. Il y a la paillasse, la petite dessus, et à côté un garçon maigre, debout avant d'avoir compris, une lame de savetier au poing.",
      "« T'es qui ? » La lame ne tremble pas. Tu dis : quelqu'un du pont. Il regarde tes sabots, ton charbon. Il range la lame. Les gens de dessous les ponts se reconnaissent à ce qui leur manque.",
      { if: { has: "monde:brindille_remede" }, text: "La petite a les yeux ouverts. Elle te voit, et sa figure se plisse tout entière. « C'est le mauvais, dit-elle à son frère, d'une voix de rien. La personne du mauvais. Elle m'a fait boire. » Moineau te regarde. « Quand ? J'ai pas bougé d'ici. » Tu dis : pendant qu'il dormait assis. D'abord. Comme il l'avait fait jurer. Il a compris le mot. Il ne comprend pas le reste, et il s'en passe." },
      { if: { not: { has: "monde:brindille_remede" } }, text: "La petite a quatre ans, et des lèvres grises. Elle dort. Moineau lui tient le poignet, de deux doigts, comme on tient un fil. « Ça a resonné, dit-il. Le médecin a dit : jusqu'à la Saint-Jean. Pour trois écus. » Il a une voix sans rien dedans. « Ça fait trois jours. »" },
      "Tu t'accroupis. Tu lui dis l'écorce. Tu lui dis où : chez les teinturiers, en balles, ce qui fait le jaune de la rivière. Qu'il y en a de quoi guérir tout le quartier, et qu'on l'ignorait ce matin. Qu'il faut dix-neuf jours, une prise par jour, la moitié pour elle, qui est petite.",
      "« C'est combien ? — Rien. Tu vas chez Maugras. Tu dis que c'est pour boire. Si on te chasse, tu attends la nuit. » Il te regarde. Il a quinze ans, il vole depuis qu'il marche, et tu viens de lui donner un conseil du métier. Il a un sourire, vite repris.",
      "« Et toi, t'y gagnes quoi ? » Tu cherches. Chez toi, on ne faisait rien pour rien : c'était la règle des camps, et elle t'a tenu{e} en vie. « J'ai une sœur, dis-tu. J'avais. » C'est la première fois que tu le dis au passé. Il n'insiste pas. Il te tend la main, par-dessus la paillasse, à plat, comme font les Hirondelles quand un marché est conclu.",
    ],
    choices: [{ label: "Taper dans sa main", fx: { flag: "monde:d_brindille" }, back: "Fd_parvis" }] },

  // ----- the Palace
  Fd_palais: { act: "V", title: "La chambre de l'enfant", place: "palais", ambiance: "chateau", charniere: true, backName: "le Palais", fx: { flag: "monde:d_remede_dit" },
    text: [
      { first: true, text: "On vous laisse entrer par la porte des Simples. Les gardes blancs s'écartent sans un mot : ils ont une consigne, et un capitaine qui la leur a répétée trois fois, d'une voix drôle." },
      { first: true, text: "La chambre d'Aélis est au bout d'une galerie, avec son lit trop grand et sa pendule, qu'elle avait arrêtée elle-même pour voir. Quelqu'un l'a remise en route. On a couché l'enfant. La Reine est assise au bord du lit, en blanc, sans ses dames ; et le médecin Anthelme, un petit homme sec, en noir, se tient à la fenêtre, le poignet levé au jour. Il lit sa manchette." },
      { first: true, if: { has: "monde:anthelme_sait" }, text: "« Dix-neuf. Sans en sauter. » Il le dit tout haut, lentement. « C'est mon écriture. C'est du plomb de mon crayon. Je n'ai aucun souvenir de l'avoir écrit, et je lis là-dessus, en abrégé, le nom d'une écorce qu'on vend aux teinturiers. » Il se retourne. Il vous voit. « C'est vous. L'un de vous deux. J'ai rêvé qu'on me parlait, la tête levée vers cette croisée. »" },
      { first: true, if: { not: { has: "monde:anthelme_sait" } }, text: "Il n'y a rien sur sa manchette que le pouls du matin. Il se retourne à votre pas. Il a la figure d'un homme qui a cherché toute la nuit et qui a trouvé, à l'aube, qu'il lui restait l'été." },
      { first: true, if: R, text: "Tu vas à lui. Tu lui tends ton poignet, sans qu'il le demande. Il le prend, d'autorité ; il regarde tes ongles avant ta figure. « Vous l'avez eue. Les lunules. À quel âge ? — Sept ans. — Et vous voilà, avec un cœur de cheval de labour. » Tu lui dis l'écorce, la pinte, le brun, les dix-neuf jours. Tu le lui as peut-être déjà dit, dans une note où il regardait une fenêtre. Tu le lui redis dans une chambre, de vive voix, à l'heure qu'il est." },
      { first: true, if: J, text: "{autre} va droit au médecin et lui tend son poignet. Il le prend ; il regarde les ongles. « Vous l'avez eue. À quel âge ? — Sept ans. » Et {autre} lui dit l'écorce, la pinte, le brun, les dix-neuf jours, de cette voix rauque qui compte sur ses doigts. Tu regardes la Reine écouter. Elle avait demandé la porte où le remède se vend au poids. Elle n'avait pas songé qu'il pouvait entrer par l'autre, en sabots." },
      { first: true, text: "« Du fièvrier ! » Anthelme se frappe le front. « Je l'ai eu dans les mains. Cela donne un jaune ! Maugras en a des balles jusqu'au toit, rue des Teinturiers, à trois cents pas d'ici. » Il est à la porte avant d'avoir fini. On l'entend crier dans la galerie qu'on lui selle une mule, non, qu'on ne selle rien, qu'il ira plus vite à pied." },
      { first: true, if: REMEDE, text: "Aélis ouvre le poing sur le drap. La fiole de grès y est, tiède. « J'en ai déjà, dit-elle. Dix-huit. Il a oublié. Les grands oublient toujours ce qu'ils ont fait eux-mêmes. » La Reine rit. C'est un rire court, étonné, qu'elle n'avait pas eu depuis la mort du Roi, et qui lui fait monter les larmes." },
      { first: true, if: { not: REMEDE }, text: "La Reine n'a pas bougé. Elle tient la main de l'enfant, et elle regarde la porte par où le médecin est sorti. « Trois cents pas, dit-elle. J'ai arrêté une ville pour un remède qui était à trois cents pas. » Elle ne pleure pas. Elle y mettra de l'ordre plus tard, seule, la nuit, comme font les reines." },
      { first: true, text: "Vous lui dites le reste à deux, l'un commençant, l'autre achevant. Qu'il y en a d'autres. Rue de trois couleurs, quatre maisons. Sous les Trois-Chandelles, une petite de quatre ans. Dans toute la ville basse, les hivers mouillés. La Reine écoute. « Maugras vendra à la Couronne, dit-elle. Tout. Aujourd'hui. Et la Couronne donnera. Ce sera le premier édit que j'aurai signé en sachant ce qu'il y a dans la marge. »" },
      { again: true, text: "La chambre de l'enfant. La pendule va. La Reine est au bord du lit." },
    ],
    choices: [
      { label: "Redescendre au puits, seul{e}, avec ton sachet", hide: { any: [J, { seen: "Fdr_sable" }] }, to: "Fdr_sable" },
      { label: "T'asseoir un moment au pied du lit", hide: { any: [R, { seen: "Fdj_lit" }] }, to: "Fdj_lit" },
      { label: "Attendre la brune, à la fontaine des Jurés", to: "Fd_duc", big: true },
    ] },

  Fdj_lit: { act: "V", title: "Celui où il y a quelqu'un", place: "palais", ambiance: "chateau",
    text: [
      "Tu t'assois sur le tabouret, au pied du lit. Aélis te regarde par-dessus son drap. Elle a huit ans, et l'air de quelqu'un qui a une question depuis longtemps.",
      "« Tu avais dit que tu choisirais. Toi, ou l'autre. » Tu dis que tu as choisi. « Tu as pris lequel ? — Celui-ci. » Elle regarde sa chambre, la pendule, sa mère. « Il y a quelqu'un, dans celui-ci ? »",
      "Tu comptes. Il y a une colporteuse, qui fait sa tournée. Une petite de neuf ans, avec une boîte. Un vieux à moustache qui te dira de te tenir droit{e}. Il y a quelqu'un en sabots, qui n'a plus que toi au monde, et qui te l'a dit dans un escalier sans en faire un reproche.",
      "« Oui. Il y a du monde. »",
      "« Et dans l'autre ? » Tu ne réponds pas tout de suite. Il y avait une vieille femme sur une chaise à sangles, qui t'avait tout appris, et qui t'attendait. Elle t'attendra toujours, dans un soixante-neuvième été qui ne viendra pas. Tu lui devais de rentrer. Tu lui devais aussi, peut-être, de faire qu'elle n'ait jamais eu à attendre.",
      "« Il y avait quelqu'un aussi », dis-tu. Aélis hoche la tête. Elle sait ce que c'est : elle a huit ans, et elle a déjà perdu un père.",
      "« Alors tu lui écriras », décide-t-elle. Tu ne lui dis pas qu'il n'y a pas d'adresse. Tu penses à une enfant de neuf ans, et tu te dis que la lettre peut se remettre en main propre, par petits morceaux, pendant soixante ans.",
    ],
    choices: [{ back: "Fd_palais" }] },

  Fdr_sable: { act: "V", title: "Le temps de gens qui n'ont pas été", place: "tour", ambiance: "chateau",
    text: [
      "Tu redescends. On te laisse passer la porte de fer : le Grand Maître a dit ton signalement au portier, *des sabots et l'air de compter.* Les quatre-vingts marches. La salle ronde est vide, les six flammes mouchées, sauf une.",
      "Le puits bat. Tu t'assois au bord, les jambes dans le vide, comme on s'assoit à un ponton.",
      "Tu vides le sachet dans ta paume. Tu comptes. Tu n'avais jamais été si riche : il y a là de quoi acheter une ferme, chez toi, avec ses bêtes. Ici, cela ne vaut rien. Personne ne sait ce que c'est. C'est le seul endroit du monde où tu pouvais apporter ce trésor sans qu'on te le prenne, et c'est celui où il ne s'échange contre rien.",
      "Chaque grain est un morceau de ce que les gens de ta plaine n'ont pas vécu. Tu le sais par un chapitre qu'on t'a récité. Il y a là-dedans des hivers de Roquebise, des vendanges d'Arvoise, des matines de Sainte-Aure. Il y a six ans d'une petite de cinq ans.",
      { if: { not: { has: "monde:d_vieux_libre" } }, text: "Il y a, là-haut, un vieil homme qui aura fini à la Saint-Jean, et qui sait soixante ans de choses que personne ne doit refaire. Une pincée par matin le tiendrait jusqu'à ce qu'il ait tout dicté." },
      "Tu regardes le fond. Cela va, cela vient. Cela ne demande rien.",
    ],
    choices: [
      { label: "Ouvrir la main au-dessus du puits : rendre cela aussi", fx: { flag: "monde:d_sable_puits" }, to: "Fdr_sable_fin", big: true },
      { label: "Resserrer le lacet, et le garder au cou", fx: { flag: "monde:d_sable_garde" }, to: "Fdr_sable_fin", big: true },
      { label: "Le monter au vieil homme : une pincée par matin, contre ce qu'il sait", hide: { has: "monde:d_vieux_libre" }, fx: { flag: "monde:d_sable_vieux" }, to: "Fdr_sable_fin", big: true },
    ] },

  Fdr_sable_fin: { act: "V", title: "La main ouverte", place: "tour", ambiance: "chateau",
    text: [
      { after: "monde:d_sable_puits", text: "Tu ouvres la main. Les grains tombent. Ils mettent longtemps : on les voit luire, gris, tout le long de la pierre noire, puis on ne les voit plus. Il n'y a pas de bruit. En bas, le pas ne change pas d'un cheveu. Il a repris ce qu'on lui avait tiré, et il n'en fait pas une affaire." },
      { after: "monde:d_sable_puits", text: "Tu secoues le sachet au-dessus du vide. Tu le retournes comme une poche. Puis tu le remets à ton cou, vide : on ne jette pas une chose qu'on a portée six ans, même quand elle ne sert plus qu'à se rappeler son poids." },
      { after: "monde:d_sable_garde", text: "Tu remets tout dans le sachet, grain par grain. Tu serres le lacet. Il retrouve sa place, contre ta poitrine, où il a fait un creux." },
      { after: "monde:d_sable_garde", text: "Tu ne t'en serviras pas. Tu le sais. Mais c'est tout ce qui reste d'un pays, et il y a des gens qui gardent bien une mèche de cheveux. Un jour, quelqu'un te demandera ce que tu portes là. Tu diras : *du sable.* On te croira : c'est ce que c'est." },
      { after: "monde:d_sable_vieux", text: "Tu remontes. Tu trouves le vieil homme où on l'a mis. Il a encore vieilli, depuis midi : la peau des tempes, les mains. Tu poses ton sachet sur la table, devant lui, et tu dis le marché. Une pincée par matin. Contre quoi il dicte. Tout. Les cercles, les années, comment la chose a grandi, ce qu'il a essayé, ce qui a manqué. Ce qu'il ne faut pas refaire." },
      { after: "monde:d_sable_vieux", text: "Il regarde le sachet. Il te regarde. « Vous me vendez du temps. À moi. » Son rire sans bruit lui secoue les épaules. « J'ai formé un élève, et je ne le savais pas. » Il devient grave. « J'accepte. Il y en a pour un mois. Je dicterai trente jours. Ce sera le quarantième chapitre : *De ce qu'il en coûte.* Et le trente et unième matin, vous ne monterez pas. Je vous le demande. Je veux finir sans rien devoir. »" },
      "Tu remontes l'escalier. Dehors, le soleil a tourné, et la ville sent la soupe.",
    ],
    choices: [{ label: "Attendre la brune, à la fontaine des Jurés", to: "Fd_duc", big: true }] },

  // ----- dusk : the duke comes home
  Fd_duc: { act: "V", title: "Le retour de chasse",
    branch: [
      { if: PREUVE, to: "Fd_duc_pris", fx: { flag: "monde:d_duc_pris" } },
      { to: "Fd_duc_cour", fx: { flag: "monde:d_duc_cour" } },
    ] },

  Fd_duc_pris: { act: "V", title: "L'empêchement", place: "palais", ambiance: "ville",
    text: [
      "À la brune, le duc Oderic rentre par la porte de la Louvière, avec ses douze gentilshommes et un cerf en travers d'une mule. Il a entendu de là-bas douze coups. Il les a comptés deux fois. Il a fini sa chasse, parce qu'un homme qui rentre trop tôt a l'air de savoir quelque chose.",
      "La Reine l'attend en haut des marches du Palais, debout, en blanc, sans dais. Le capitaine Hardouin est à sa droite. Il y a de la lumière à toutes les fenêtres.",
      "« Mon frère. » Sa voix porte jusqu'aux mules. « Vous avez manqué la cérémonie. Vous m'en aviez demandé la permission, et j'avais trouvé cela délicat. »",
      { if: { has: "monde:d_jeune_reine" }, text: "« J'ai entendu, depuis, un sous-maître de la Guilde. Il parle bien. Il m'a dit une somme, un quai, et le mot que vous aviez pour moi : *l'empêchement.* » Le duc ne bronche pas. Il a toujours eu le mot propre ; il le cherche, et pour la première fois il ne lui vient que des mots sales." },
      { if: { all: [{ not: { has: "monde:d_jeune_reine" } }, { has: "monde:oderic_affiche" }] }, text: "« Il y a, clouée à la porte de Saint-Gnomon depuis ce matin, une feuille où toute la ville basse a lu ce que vous comptiez faire de moi. Je l'ai lue aussi. On me l'a apportée avec la soupe. » Le duc ne bronche pas. Il a toujours eu le mot propre ; il le cherche." },
      { if: { all: [{ not: { has: "monde:d_jeune_reine" } }, { not: { has: "monde:oderic_affiche" } }] }, text: "« J'ai dans ma manche un papier de votre main, et l'épreuve d'un sceau que vous aviez commandé pour après moi. On me les a remis. Je ne vous dirai pas qui. » Le duc ne bronche pas. Il a toujours eu le mot propre ; il le cherche." },
      "« Capitaine. » Hardouin descend trois marches. « Monseigneur me rendra son épée. Il passera à ma droite. » On voit le duc mesurer la cour, les douze gentilshommes, les arcs aux fenêtres. Il a fait ce calcul toute sa vie, et il sait lire un total. Il défait son ceinturon.",
      { if: J, text: "Tu regardes cela de la grille, avec {autre}. Chez {autre:lui}, cet homme a eu une statue, un port à son nom, et trois générations de Régents. {autre:Il} le regarde donner son épée. « C'est tout ? demande-t-{autre:il}. — C'est tout. — Chez moi, il a régné vingt ans. » {autre:Il} crache par terre, proprement. « Il a pas l'air si grand, à pied. »" },
      { if: R, text: "Tu regardes cela de la grille. Chez toi, cet homme a eu une statue sur le port, un port à son nom, et sa petite-fille jurait encore ce matin. Tu le regardes donner son épée. C'est tout. Il n'a pas l'air si grand, à pied. Tu craches par terre, proprement, et tu te sens mieux." },
    ],
    choices: [{ label: "La fontaine des Jurés", to: "Fd_soir", big: true }] },

  Fd_duc_cour: { act: "V", title: "Deux fois du chapon", place: "palais", ambiance: "ville",
    text: [
      "À la brune, le duc Oderic rentre par la porte de la Louvière, avec ses douze gentilshommes et un cerf en travers d'une mule. Il a entendu de là-bas douze coups. Il les a comptés deux fois. Il a fini sa chasse.",
      "La Reine l'attend en haut des marches du Palais, debout, en blanc. Elle sait. On le lui a dit, dans une chambre ou dans un escalier ; elle l'avait su à moitié le jour où elle a signé. Mais elle n'a dans sa manche ni lettre, ni sceau, ni témoin : il lui reste la parole de deux inconnus, dont l'un n'est pas encore né.",
      "« Mon frère. Vous avez manqué la cérémonie. — Je m'en console en vous voyant, Madame. On m'a dit que vous étiez montée à la Tour. — J'en suis redescendue. » Elle le regarde. Il soutient cela très bien. « Vous souperez avec moi. »",
      "Il soupe. Il reprend deux fois du chapon. Il a, toute la soirée, la gaieté d'un homme qui a perdu douze mille écus et qui cherche qui a parlé. Il ne trouvera pas. Il recommencera autre chose, plus tard, autrement : c'est un homme patient.",
      "Mais la Reine, à présent, compte aussi. Elle a fait changer ce soir le capitaine de la porte de la Louvière. Elle fera goûter ses plats. Elle a devant elle soixante ans de règne, ou ce que Dieu en donnera, à souper en face de quelqu'un dont elle connaît le prix.",
      { if: J, text: "« Il s'en tire », dit {autre}, à la grille. Tu dis que oui. Qu'on n'avait rien à mettre sous les yeux d'un Conseil. {autre} hausse une épaule. « Chez moi, il a eu un port à son nom. Ici, il a une reine qui le regarde manger. C'est moins. » {autre:Il} réfléchit. « C'est pas rien. »" },
      { if: R, text: "Il s'en tire. Tu le vois par la grille, qui monte les marches en offrant son bras. Chez toi, il a eu un port à son nom. Ici, il aura une reine qui le regarde manger. C'est moins. Ce n'est pas rien : tu as connu des gens que cela aurait tués." },
    ],
    choices: [{ label: "La fontaine des Jurés", to: "Fd_soir", big: true }] },

  // ----- evening, at the fountain
  Fd_soir: { act: "V", title: "La margelle, le soir d'un jour entier", place: "tour", ambiance: "ville", charniere: true, aparte: true, backName: "la fontaine",
    text: [
      { first: true, text: "La fontaine des Jurés coule. Vous vous y êtes assis trois fois aujourd'hui, dans une ville de pierre, pour décider d'un chemin. Vous vous y asseyez une quatrième, au frais, pendant qu'on allume les lanternes de la fête. L'eau fait son bruit. Des enfants vous éclaboussent, exprès." },
      { first: true, if: { not: SORTIS }, text: "Les Noyer passent, qui rentrent à l'auberge : Josse, son chapeau à la main, le garçon qui mène la jument par la bride, et la petite, juchée sur le marchepied, qui tient sa boîte de fer à plat sur ses genoux." },
      { first: true, if: SORTIS, text: "Une charrette entre par la porte d'Occident, à la lanterne. Ce sont les Noyer. Ils avaient passé le septième peuplier avant la fête, comme on le leur avait dit ; ils ont entendu douze coups, de la route, et la petite a tant fait qu'on a tourné la jument. Josse mène par la bride. Line est sur le marchepied, sa boîte de fer sur les genoux." },
      { first: true, if: { all: [J, { has: "monde:cadran_poussiere" }] }, text: "Elle te voit. Elle saute. Elle vient droit à toi, les sourcils en un seul trait. « Il y avait un cadran dans la poussière. Au pied de l'arbre. Avec midi dessus, et une roue de rencontre dessous. » Elle te regarde les mains. « C'est toi. Personne d'autre ne dessine les dents de travers. »" },
      { first: true, if: { all: [J, { not: { has: "monde:cadran_poussiere" } }] }, text: "Elle te voit. Elle saute. Elle vient droit à toi, les sourcils en un seul trait. « Tu avais dit de courir. J'ai couru. » Elle te regarde les mains. « Tu as tiré sur une corde. Laquelle ? » Tu montres la Tour. Elle lève la tête, longtemps. « Je veux voir comment c'est fait dedans. »" },
      { first: true, if: { all: [R, { has: "r:acompte_line" }] }, text: "Elle saute du marchepied. Elle va à {autre}. Puis elle te voit, et elle s'arrête : elle a l'œil pour ce qui n'est pas à sa place. Elle ouvre sa boîte, et te montre, dans un coin, sur un chiffon, une pincée de quelque chose de gris. « C'était contre la racine. Ça luit le soir. Tu sais ce que c'est ? » Tu dis que oui. Que c'est un acompte. Elle fronce le sourcil. « Sur quoi ? — Sur trois mesures. Je te dirai quand tu auras soixante ans. » Elle te trouve très bête, et elle referme la boîte avec soin." },
      { first: true, if: { all: [R, { not: { has: "r:acompte_line" } }] }, text: "Elle saute du marchepied. Elle va à {autre}. Puis elle te voit, et elle s'arrête : elle a l'œil pour ce qui n'est pas à sa place. Tu la regardes. Tu lui as volé trois mesures de sable par un soupirail, un hiver, dans cinquante-neuf ans. Tu ne les lui voleras pas. Tu as l'impression curieuse de lui devoir encore quelque chose, et de ne plus savoir quoi." },
      { first: true, text: "Elle retourne à sa charrette. Josse vous salue du chapeau. « On repart demain, à la fraîche. Il y a de la place sur la paille. »" },
      { first: true, text: "Il reste à dire ce qu'on fait demain. C'est une question que vous ne vous étiez jamais posée : il n'y avait pas de demain, depuis neuf jours, il y avait un midi. Vous en avez un derrière vous, à présent. Devant, il y a tout le reste, et personne ne l'a écrit." },
      { first: true, if: J, text: "{autre} trempe ses pieds dans le bassin. « J'ai jamais eu à choisir où aller, dit-{autre:il}. J'allais où y avait à prendre. » {autre:Il} remue les orteils. « Y a plus rien à prendre nulle part. C'est bête : ça fait de la place. »" },
      { first: true, if: R, text: "Tu trempes tes pieds dans le bassin. Tu n'as jamais eu à choisir où aller : tu allais où il y avait à prendre. Il n'y a plus rien à prendre nulle part. Cela fait de la place, et tu ne sais pas encore t'en servir." },
      { again: true, text: "La margelle, le soir. Les lanternes de la fête, et l'eau." },
    ],
    choices: [
      { label: "Vous deux : rester à Méridane. Il y a une Guilde, un puits, et un four.", monde: "demain541", option: "meridane", fx: { flag: "monde:d_meridane" }, to: "Fd_meridane", big: true },
      { label: "Vous deux : la charrette des Noyer, demain, à la fraîche", monde: "demain541", option: "route", fx: { flag: "monde:d_route" }, to: "Fd_route", big: true },
      { label: "Vous deux : chacun son chemin, et les Cahiers pour s'écrire", monde: "demain541", option: "cahiers", fx: { flag: "monde:d_cahiers" }, to: "Fd_cahiers", big: true },
    ] },

  // ===== tomorrow, 1 : Méridane
  Fd_meridane: { act: "V", title: "Le lendemain d'une fête", place: "tour", ambiance: "ville",
    text: [
      "Le vingt-deux juin, la ville balaie. Il y a du papier, des fleurs, des coquilles d'œufs rouges dans tous les ruisseaux. Les Noyer sont partis à la fraîche ; la petite s'est retournée sur le marchepied jusqu'au tournant, et elle n'a pas fait signe : elle regardait la Tour.",
      { if: J, text: "Tu montes à la colline des Jurés. Le Grand Maître t'attend dans la cour, les talons joints, son chapeau d'aplomb. « Vous avez sonné le douzième de la Patiente, avec un nœud de poids. La Guilde n'a pas de grade pour cela. Je vous en fais un : vous êtes compagnon. Vous sauterez l'apprentissage ; je trouve que vous l'avez fait. » Il te tend une chaîne d'acier, avec la petite clef des heures. « Tenez-vous droit{e}. »" },
      { if: R, text: "{autre} monte à la colline des Jurés, et tu {autre:le} suis, parce que tu n'as nulle part d'autre où aller, et que c'est une raison qui en vaut une autre. Le Grand Maître vous attend dans la cour, les talons joints. Il donne à {autre} une chaîne d'acier. Puis il se tourne vers toi, et il te regarde longtemps." },
      { if: R, text: "« Vous, je n'ai pas d'établi à vous offrir. Vous avez des mains de champs. Mais écoutez ceci. *Celui d'en bas doit venir d'une heure que le coup n'a pas prise.* Vous êtes, de tout ce royaume, la seule personne sur qui cette barre ne pèse rien, et vous le resterez tant que vous vivrez. Il y a cent ans que la Guilde n'a plus de Gardien du puits : on ne trouvait personne qui pût toucher le cuir sans s'y prendre. » Sa moustache remue. « Je n'ai pas trouvé. On me l'a apporté{e}. »" },
      { if: J, text: "Il se tourne vers {autre}. Il {autre:lui} dit une chose que tu n'attendais pas : qu'il y a cent ans que la Guilde n'a plus de Gardien du puits, faute de quelqu'un qui pût toucher le cuir sans s'y prendre ; et que la seule personne du royaume sur qui la barre ne pèse rien est là, en sabots, dans sa cour. {autre} ouvre la bouche. {autre:Il} la referme. On ne {autre:lui} avait jamais offert une place. On {autre:lui} avait offert des couverts." },
      { if: { has: "r:d_pain" }, text: "Tu dis qu'il y a un pétrin, rue des Fourniers, qui cherche des bras, et que tu as à moitié promis. « Vous pétrirez la nuit, répond le Grand Maître, et vous descendrez à prime. Un Gardien qui sait ce que vaut le pain écoutera mieux le puits. Je me suis toujours méfié des gens qui ne font qu'un métier. »" },
    ],
    choices: [
      { label: "Prendre la chaîne", hide: R, to: "Fdj_mer", big: true },
      { label: "Dire oui", hide: J, to: "Fdr_mer", big: true },
    ] },

  Fdj_mer: { act: "V", title: "Compagnon", place: "guilde", ambiance: "ville",
    text: [
      "Tu as ton établi, sous la fenêtre du levant. Tu y fais ce qu'on te donne : des roues de minuterie, un échappement à verge pour la pendule du Chapitre, le rhabillage d'une montre de dame dont le coq est faussé. À ta gauche, il y a un garçon de seize ans qui porte les lunettes de son maître, par permission, les jours de travail fin.",
      { if: { has: "j:d_loupe" }, text: "Tu te sers de la loupe à manche d'ébène. Elle est bonne. Les premiers jours, tu en retournais le manche pour ne pas voir les lettres. Puis tu as cessé. Un outil est un outil, et celui-là t'a été donné par un homme qui, sur ce point au moins, ne s'était pas trompé." },
      { if: { not: { has: "j:d_loupe" } }, text: "La loupe à manche d'ébène est restée sur son chamois. Personne n'y touche. Tu travailles avec celle de la maison, qui a un éclat au bord. On te trouve têtu{e}, à l'établi d'à côté, et on le dit avec respect : c'est une vertu, dans cette cour." },
      "Tu sais des choses qu'on n'a pas encore trouvées. L'échappement à ancre. Le spiral. La fusée à chaîne, que Line te faisait démonter les yeux bandés. Tu les sors une à une, lentement, en ayant l'air de chercher. Le Grand Maître n'est pas dupe. « Vous inventez beaucoup, pour un compagnon. » Il n'en demande pas plus. Il a décidé une fois pour toutes que ton pays était loin, et qu'on y travaillait bien.",
      "Le soir, tu descends au puits. {autre} y est, assis{autre:e} au bord, les jambes dans le vide. Vous écoutez le pas ensemble, le temps d'un psaume. Vous ne dites pas grand-chose. Vous avez appris à vous connaître par écrit ; la parole vient après, et elle prend son temps.",
      { if: { has: "monde:d_perrine_route" }, text: "À la Saint-Michel, tu as demandé trois jours. Tu as fait la route des Trois-Noyers à pied. Il y avait une colporteuse sous le troisième noyer, sa hotte par terre, qui t'attendait en comptant sa recette, et une enfant qui avait démonté l'horloge de la cuisine pour te montrer qu'elle savait la remonter." },
    ],
    choices: [{ label: "Le Grand Midi de l'an 542", to: "Fd_fin_meridane", big: true }] },

  Fdr_mer: { act: "V", title: "Gardien du puits", place: "tour", ambiance: "chateau",
    text: [
      "On t'a donné une clef : celle de la porte de fer, au papillon. Tu l'as au cou, à la place du sachet, ou à côté. C'est la première clef que tu aies eue de ta vie qui ouvre une porte par le bon côté.",
      "Tu descends à prime. Quatre-vingts marches. Tu t'assois au bord, les jambes dans le vide, et tu écoutes. Tu sais écouter : on apprend cela dans les fossés. Le pas est égal. Il l'est tous les matins. Tu le marques d'un trait de craie sur le mur, par paquets de cinq, comme une marchande d'almanachs te l'a montré.",
      { if: { has: "r:d_pain" }, text: "La nuit, tu pétris, rue des Fourniers, à l'Épi. Le boulanger chante faux. La petite te regarde manger, le matin, avec un intérêt de naturaliste. Tu as pris six livres depuis la Saint-Jean. On ne te voit plus les côtes ; tu les cherches parfois, sous ta chemise, par habitude." },
      { if: { has: "monde:d_jeune_guilde" }, text: "L'homme de trente ans descend aussi, à prime, par ordre. Il s'assoit de l'autre côté du puits. Les premiers matins, vous ne vous êtes rien dit. Puis il t'a demandé comment c'était, la marge. Tu le lui as dit. Tout. Il a écouté sans t'interrompre, et le lendemain il est revenu. On ne peut pas appeler cela de l'amitié. C'est une chose qui tient lieu de pardon, entre gens qui comptent." },
      { if: { has: "monde:d_sable_vieux" }, text: "Trente matins de suite, tu es monté{e} poser une pincée sur une vieille main. Il a dicté. Josquin écrivait. Le trente et unième, tu n'es pas monté{e} : il l'avait demandé. Le cahier est dans le coffre du Grand Maître, sous deux clefs. Il s'appelle *De ce qu'il en coûte*, et il commence par : *J'avais trente ans, de belles mains, et j'ai voulu une chambre.*" },
      "Le soir, {autre} descend te rejoindre, de la limaille plein les manches. Vous écoutez ensemble. {autre:Il} t'apprend à lire les cadrans d'équation ; tu {autre:lui} apprends à ouvrir une serrure avec une aiguille. Le Grand Maître vous a surpris. Il a regardé l'aiguille, la serrure. Il a dit : « C'est de l'horlogerie », et il est remonté.",
      "Il y a des nuits où tu rêves d'une rue en pente. Tu te réveilles. Tu descends plus tôt, ces matins-là. Le pas est égal, et il te tient compagnie.",
    ],
    choices: [{ label: "Le Grand Midi de l'an 542", to: "Fd_fin_meridane", big: true }] },

  Fd_fin_meridane: { act: "V", title: "Douze, comme d'habitude", place: "tour", ambiance: "ville", end: true, epilogue: true, fx: FIN,
    text: [
      "Le vingt et un juin 542, il fait beau. Cinq mille personnes sont sur le parvis, la tête levée. Les tréteaux du Sablier ont douze portes neuves. Une marchande d'almanachs crie l'an 542 à deux sous.",
      { if: J, text: "Tu es dans la Cage, sous douze pieds de bronze, les oreilles pleines de cire, la corde aux mains. Elle a une épissure, à présent, à la place de ton nœud : un cordier l'a refaite. Tu as demandé qu'on te garde le vieux bout. Il est sur ton établi." },
      { if: R, text: "Tu es dans la Chambre basse, assis{e} au bord, la main à un pouce du cuir. Tu n'y touches pas. Il n'y a rien à toucher : le levier est en haut, où il doit être, et le coin de bronze est dans le coffre du Grand Maître, avec une étiquette." },
      "Onze coups. On les compte, sur la place, d'une seule voix.",
      { if: J, text: "Tu tires. Il n'y a rien à dire, cette fois : aucune heure ne demande qu'on la nomme, quand elle tombe où elle doit. Le marteau revient." },
      { if: R, text: "Tu écoutes le fil. Il ne porte rien, que le tremblement ordinaire d'une cloche qu'on met en branle. Là-haut, quelqu'un tire, sans rien dire, et tu le sais." },
      "Douze.",
      "« Douze ! » crie la place. Les pigeons partent. Une balle rouge monte, et elle retombe. Personne ne remarque rien : il n'y a rien à remarquer. C'est midi, un jour de fête, dans une ville où il a toujours été midi après onze heures.",
      "Vous êtes deux à savoir que cela aurait pu ne pas être. C'est un secret qui tient chaud. Vous le remontez chaque année, à la corde et au cuir, comme on remonte une horloge : pour qu'elle continue de ne rien dire d'extraordinaire.",
    ] },

  // ===== tomorrow, 2 : the Noyer cart
  Fd_route: { act: "V", title: "Le septième peuplier", ambiance: "champs",
    text: [
      "On part à la fraîche. La jument s'appelle la Grise. Girard mène, le fouet au cou ; Josse marche à la tête, par habitude de ménager la bête ; et vous êtes sur la paille, avec la petite, qui a ouvert sa boîte et qui trie.",
      "Le halage. Le bassin, où les barges ont repris leur dérive. Les peupliers, deux rangs, qui montrent l'envers de leurs feuilles. Tu les comptes sans le vouloir. Cinq. Six.",
      "Le septième est grêle, un peu de travers. Hier, il y avait là quelque chose : un bord, où l'on passait la main dans un vent qui appuyait d'un seul côté. La Grise le dépasse au pas. Il ne se passe rien. Il fait le même vent des deux côtés de l'arbre.",
      { if: J, text: "{autre} s'est retourné{autre:e} sur la paille. {autre:Il} regarde le tronc s'éloigner. Chez {autre:lui}, c'était la fin du premier cercle : on y brûlait une pincée de plus par heure, passé cet arbre-là. {autre:Il} respire à fond. {autre:Il} n'a rien au cou qui coule. « On est dehors, dit-{autre:il}. — Il n'y a plus de dedans. » {autre:Il} hoche la tête. Il {autre:lui} faudra des années pour le croire avec ses jambes." },
      { if: R, text: "Tu t'es retourné{e} sur la paille. Tu regardes le tronc s'éloigner. Chez toi, c'était la fin du premier cercle : on brûlait une pincée de plus par heure, passé cet arbre-là. Tu respires à fond. Tu n'as rien au cou qui coule. Tu es dehors. Il n'y a plus de dedans ; il te faudra des années pour le croire avec tes jambes." },
      { if: { has: "r:chien_nomme" }, text: "Au pré de la Foire, un chien jaune court le long des roues en aboyant, par devoir. Une enfant le rappelle : « Tambour ! » Il n'obéit pas. Il a la figure d'un chien qui a quelque chose à dire à cette charrette en particulier." },
      "Quatre jours de route. L'abbaye, où l'on chante les heures à l'heure. Arvoise et son pont. On dort dans des granges. On mange ce que Josse achète, en comptant. La petite pose des questions, et elle range les réponses.",
      { if: J, text: "Elle t'en pose sur les montres. Elle en pose à {autre} sur tout le reste : les fossés, les serrures, comment on dort dehors. {autre} répond à tout, gravement, comme à une cliente." },
      { if: R, text: "Elle en pose à {autre} sur les montres. Elle t'en pose à toi sur tout le reste : les fossés, les serrures, comment on dort dehors. Tu réponds à tout. Tu lui dois bien des réponses." },
    ],
    choices: [
      { label: "Les Trois-Noyers", hide: R, to: "Fdj_ferme", big: true },
      { label: "Les Trois-Noyers, et dix lieues de plus", hide: J, to: "Fdr_roquebise", big: true },
    ] },

  Fdj_ferme: { act: "V", title: "Un cadre de pierre", ambiance: "champs",
    text: [
      "La ferme des Noyers. Les trois arbres, la cour, le puits. Bérarde sort sur le seuil en s'essuyant les mains ; elle compte les têtes dans la charrette, trouve le compte bon, et rentre mettre deux écuelles de plus sans demander qui.",
      "Tu vas à la grange. Tu y vas seul{e}.",
      "Le cadre de pierre est au fond, entre deux tas de foin, plus vieux que les murs. Il a ses douze signes sur le linteau, usés. Tu poses la main dessus. Il est froid. C'est de la pierre. Tu passes dessous : tu arrives de l'autre côté du cadre, dans la même grange, devant une fourche.",
      "Il y a neuf jours, tu es sorti{e} de là en venant d'un soir de l'an 601. Il y avait derrière toi une vieille femme debout, qui tenait une lampe, et qui ne pleurait pas parce qu'elle avait décidé de ne pas le faire devant toi. Elle avait attendu soixante ans de t'envoyer. Tu es arrivé{e}. Tu as fait ce qu'elle voulait. Et le prix en est qu'elle n'aura jamais eu à le vouloir.",
      { if: { secret: "j_malade" }, text: "Elle mourait. Tu le savais, et tu avais juré de le taire. Elle ne mourra pas de cela, à présent : elle a neuf ans, de bons poumons, et soixante étés que personne ne lui a pris. Tu n'as trahi ton serment devant personne. Il s'est défait tout seul, avec le reste." },
      { if: { has: "monde:marque_poutre" }, text: "Sur la poutre, à hauteur d'yeux, il y a deux lettres que tu as taillées le premier soir. Elles sont fraîches. Elles devaient attendre soixante ans qu'on les lise. Elles n'attendront personne : celui ou celle qui devait les lire dort ce soir dans la soupente, à dix pas." },
      "« Qu'est-ce que tu regardes ? » Line est dans la porte, sa boîte sous le bras. Tu dis : une porte. « C'est pas une porte. Il y a pas de mur. » Elle vient voir. Elle passe dessous, repasse, tâte le linteau. « C'est fait pour quoi ? »",
      "« Je te le dirai. — Quand ? — Par morceaux. » Elle te regarde, les sourcils en un seul trait. Elle a neuf ans, elle est têtue comme une mule, et tu vas lui apprendre tout ce qu'elle t'a appris. Tu commenceras demain, par le nœud des poids.",
    ],
    choices: [{ label: "La Saint-Michel", to: "Fd_fin_route", big: true }] },

  Fdr_roquebise: { act: "V", title: "Chez les Tiennot", ambiance: "champs",
    text: [
      "Tu laisses {autre} aux Trois-Noyers. Tu dis : je reviens. Tu fais les dix lieues à pied, en deux jours, par des chemins que tu connais dans l'autre sens et dans un autre siècle. Il y a des haies où tu te souvenais de fossés. Il y a un moulin où tu te souvenais d'une ruine. Tu passes devant la Ferme-Vieille, qui est une ferme neuve.",
      "Roquebise est sur sa butte. Elle fume. Tu n'avais jamais vu fumer une verrerie : chez toi, elles étaient froides depuis la nuit du Bond, et avant le Bond tu étais trop jeune pour regarder les cheminées.",
      "Tu montes la rue des Potiers. Elle est en pente. Tu connais chaque pavé, et aucun visage. Des femmes te regardent passer, de leurs seuils, comme on regarde un{e} étranger{e} : avec les yeux, sans la tête.",
      "La troisième après la fontaine. Le marteau de la porte est un autre. Le crépi est blanc. Il y a un banc, que tu n'as pas connu, et sur ce banc une femme qui berce un paquet de langes d'où sort un poing.",
      "« Vous cherchez ? — Rien. Je passe. » Tu regardes le poing. « Elle s'appelle comment ? — Lison. Elle est de la Sainte-Luce. Elle braille. » La femme rit. Elle a ta bouche. C'est ton arrière-grand-mère ; elle a vingt-cinq ans.",
      "Tu demandes si tu peux. Elle te tend le paquet, sans méfiance : on prête les enfants, dans cette rue. Tu le prends comme on prend du verre. Dedans, il y a une figure rouge, fâchée, et deux yeux qui ne regardent encore rien.",
      "C'est ta grand-mère. Elle aura une chanson pour chaque besogne, et tu les sauras toutes. Elle donnera son nom à une petite, dans cinquante ans, si les mêmes gens se trouvent ; et rien ne dit qu'ils se trouveront. Tu ne peux rien y faire. Tu peux être là. Tu auras soixante-six ans cette année-là, et de bons yeux.",
      "Tu lui chantes quelque chose, tout bas. C'est une chanson pour écosser les pois. Elle te vient d'elle. La petite cesse de brailler, par surprise. La mère dit : « Tiens. Vous la connaissez ? C'est de chez nous. — Oui, dis-tu. C'est de chez nous. »",
    ],
    choices: [{ label: "Redescendre vers les Trois-Noyers", to: "Fd_fin_route", big: true }] },

  Fd_fin_route: { act: "V", title: "Sous le troisième noyer", ambiance: "champs", end: true, epilogue: true, fx: FIN,
    text: [
      "À la Saint-Michel, on gaule les noix. Josse a loué deux journaliers, et il en a deux de plus pour rien, qui mangent comme quatre et qui ne savent pas tenir une gaule.",
      { if: J, text: "Tu as un coin de l'appentis, avec une planche pour établi. Tu y as remonté l'horloge de la cuisine, puis celle du curé, puis une montre qu'un marchand de bœufs avait laissée tomber dans l'abreuvoir. On vient d'assez loin. Line tient les brucelles. Elle ne dit rien pendant que tu travailles, et elle refait tout, le soir, seule, pour voir si elle l'aurait fait mieux." },
      { if: R, text: "Tu es revenu{e} de Roquebise avec une blouse bleue, qu'on t'a vendue pour un service, et un panier de verre à colporter. Tu fais dix lieues dans un sens, dix dans l'autre. Tu sais tous les chemins. Tu as un métier où l'on marche, où l'on porte, et où l'on rend la monnaie : c'est la glane à l'endroit." },
      { if: { all: [J, { has: "monde:d_perrine_route" }] }, text: "Une colporteuse est arrivée à midi, sa hotte au dos, avec les almanachs de l'an 542 et des nouvelles de partout. Elle a posé sa charge sous le troisième noyer. Elle t'a regardé{e} ; elle a dit : « Même foire », et elle a demandé de la soupe." },
      { if: { all: [R, { has: "monde:d_perrine_route" }] }, text: "Une colporteuse est arrivée à midi, sa hotte au dos, avec les almanachs de l'an 542 et des nouvelles de partout. Elle a posé sa charge sous le troisième noyer. Elle a regardé {autre} ; elle a dit : « Même foire », et elle a demandé de la soupe. Elle t'a vendu un almanach deux sous. Tu les lui devais." },
      "Le soir, vous vous asseyez tous les deux sur la margelle du puits de la cour. D'ici, on voit la plaine jusqu'au bout. Il n'y a pas de lisière. Il n'y a jamais eu de lisière : il y a des blés coupés, une route, et très loin, quand le temps est clair, une pointe qui est la Tour.",
      { if: R, text: "Tu as cessé de dire *chez moi.* Tu dis *là-bas*, en montrant la butte de Roquebise, où une petite de neuf mois apprend à se tenir assise. Tu iras tous les mois. On te connaît, rue des Potiers. On t'appelle par ton nom. On dit que tu es de la famille, de loin, et l'on ne sait pas si bien dire." },
      { if: J, text: "{autre} a cessé de dire *chez moi.* {autre:Il} dit *là-bas*, en montrant la butte de Roquebise. {autre:Il} y va tous les mois, avec son panier de verre. {autre:Il} en revient avec une figure que tu as appris à ne pas questionner, et une chanson de plus." },
      "Vous avez deux Cahiers, cousus de fil gris, par une vieille femme qui n'aura pas vécu. Vous n'en avez plus besoin : vous êtes à portée de voix. Line les a trouvés. Elle en a défait un, page à page, pour voir comment c'était fait, et elle l'a recousu. Elle dit que c'est mal fait, et qu'elle ferait mieux.",
      "Elle le fera. Elle a soixante ans pour cela, et personne à attendre.",
    ] },

  // ===== tomorrow, 3 : each their own road
  Fd_cahiers: { act: "V", title: "La porte d'Occident, à l'ouverture", place: "basse", ambiance: "ville",
    text: [
      "Vous vous séparez à la porte d'Occident, à l'ouverture, quand les maraîchers entrent avec leurs ânes. Il y a une borne-cadran, à gauche de la voûte, où tu as creusé, il y a quatre jours ou dans soixante ans.",
      { if: J, text: "{autre} a un bâton, un pain de l'Épi sous le bras, et ses sabots neufs : la Reine les a fait faire, sans qu'on demande, par son propre sabotier, qui n'en avait jamais fait et qui y a mis de l'ébène au talon. {autre:Il} les regarde. « Je vais user ça en trois semaines. — Où tu vas ? — Voir. » {autre:Il} montre la route, au-delà du septième peuplier. « J'ai marché six ans dans un pays pris. Je veux savoir ce que ça fait, un pays où y a quelqu'un à toutes les fenêtres. »" },
      { if: R, text: "Tu as un bâton, un pain sous le bras, et des sabots neufs : la Reine les a fait faire par son sabotier, qui y a mis de l'ébène au talon. Tu les useras en trois semaines. {autre} demande où tu vas. Tu dis : voir. Tu as marché six ans dans un pays pris. Tu veux savoir ce que cela fait, un pays où il y a quelqu'un à toutes les fenêtres." },
      "Vous avez chacun votre Cahier. Vous les ouvrez sur la borne, l'un à côté de l'autre, pour essayer. Tu écris un mot dans le tien. Il paraît dans l'autre, lettre à lettre, de la même encre, avec le petit retard d'un écho.",
      "Ils marchent. Ils ont été cousus par une vieille femme, dans soixante ans, pour une séparation ; et ils servent à une autre, qu'elle n'avait pas prévue. Elle aurait dit que c'était de l'ouvrage bien employé.",
      { if: J, text: "« Aux bornes, dit {autre}. Y en a une à chaque lieue, sur la route royale. J'écrirai. En bâtons. — Tu sais les autres lettres, à présent. — Je sais. Mais en bâtons, tu sauras que c'est moi. » {autre:Il} te regarde. {autre:Il} cherche une chose à dire qui soit à la hauteur, et {autre:il} n'a jamais su. {autre:Il} te donne la moitié du pain." },
      { if: R, text: "« Aux bornes, dis-tu. Y en a une à chaque lieue. J'écrirai. En bâtons. » {autre} dit que tu sais les autres lettres, à présent. Tu sais. Mais en bâtons, {autre:il} saura que c'est toi. Tu cherches une chose à dire qui soit à la hauteur. Tu n'as jamais su. Tu {autre:lui} donnes la moitié du pain." },
    ],
    choices: [
      { label: "Rentrer en ville, le Cahier sous le bras", hide: R, to: "Fdj_cah", big: true },
      { label: "Passer la voûte", hide: J, to: "Fdr_cah", big: true },
    ] },

  Fdj_cah: { act: "V", title: "Ce qui s'écrit aux bornes", place: "guilde", ambiance: "ville",
    text: [
      "Tu as ton établi, à la Guilde, sous la fenêtre du levant. Tu as une chaîne d'acier et le grade de compagnon, que le Grand Maître t'a donné en disant que tu avais fait ton apprentissage en une matinée.",
      "Le dimanche, tu descends au port, à la borne-cadran du quai. Tu ouvres le Cahier. Tu attends. Quelquefois il ne vient rien : {autre} est entre deux bornes, ou dort, ou a oublié le jour. Quelquefois il vient une ligne, en bâtons, tracée lentement.",
      "*ARVOISE. Y A UN PONT. LES GENS PASSENT DESSUS SANS REGARDER.* Puis, un autre dimanche : *L'ABBAYE. ELLES CHANTENT. J'AI ÉCOUTÉ TOUTE LA NUIT À LA PORTE. ON M'A PORTÉ DU LAIT.* Puis : *HAUTGUÉ. C'EST LA MER. ON M'AVAIT PAS DIT QUE ÇA BOUGEAIT TOUT LE TEMPS.*",
      "Tu réponds. Tu écris ce qu'on fait ici : la pendule du Chapitre, Josquin qui porte des lunettes trop grandes, le puits qui bat. Tu écris que la petite Aélis court dans la galerie. Tu écris plus long que {autre:lui}. Tu as toujours écrit plus long.",
      { if: { has: "monde:d_perrine_route" }, text: "Tu as écrit aussi, une fois, que tu partais trois jours, pour la Saint-Michel, vers un village à trois noyers où une colporteuse avait dit qu'elle passerait. La réponse est venue le dimanche d'après, en bâtons : *BON.* Et dessous, plus petit : *DIS-LUI QUE JE LUI DOIS DEUX SOUS. ELLE SAURA PAS POURQUOI.*" },
      "Un dimanche d'hiver, il vient ceci : *ROQUEBISE. LA TROISIÈME APRÈS LA FONTAINE. Y A UNE PETITE DE UN AN. JE RESTE UN PEU.* Tu regardes les bâtons sécher. Tu comprends qu'{autre:il} a trouvé où poser son sac, et que c'est aussi près de chez {autre:lui} qu'on peut l'être quand on n'a plus de chez soi.",
    ],
    choices: [{ label: "Tourner la page", to: "Fd_fin_cahiers", big: true }] },

  Fdr_cah: { act: "V", title: "Quelqu'un à toutes les fenêtres", ambiance: "champs",
    text: [
      "Tu marches. Tu n'as jamais marché ainsi : sans sablier au cou, sans regarder où tombe ton ombre, sans compter ce qu'il te reste. Tu t'arrêtes quand tu es las{se}. Tu repars quand tu veux. Il faut du temps pour apprendre que le temps est gratuit.",
      "Arvoise. Il y a un pont. Les gens passent dessus sans regarder. Tu t'arrêtes au milieu, tu te penches. L'eau court. Tu restes là une heure, à regarder courir de l'eau, et un sergent te demande si tu comptes te jeter. Tu dis que non. Que tu regardes. Il te trouve simple, et il a raison.",
      "L'abbaye. Elles chantent. Tu avais marché dans cette note, chez toi, prise en l'air, pendant qu'on montait la nef : il fallait avancer pour l'entendre. Ici, tu t'assois contre la porte, et la note vient à toi, puis une autre, puis toutes. Tu écoutes la nuit entière. À matines, une sœur t'apporte du lait et ne te demande rien.",
      "Tu écris aux bornes. En bâtons. Tu sais les autres lettres. Mais {autre} a appris à te lire ainsi, et tu trouves qu'on ne change pas la figure qu'on a pour quelqu'un.",
      "Hautgué. C'est la mer. On ne t'avait pas dit que cela bougeait tout le temps. Il y a une galère du Levant à quai, qui décharge des balles jaunes, et sur le quai un commis de la Couronne qui les compte toutes, par édit. Tu regardes cela. Tu sais d'où vient l'édit.",
      { if: { has: "monde:d_sable_garde" }, text: "Tu as toujours ton sachet. Un soir, sur la grève, tu l'ouvres. Tu regardes les grains à la lune. Ils luisent un peu. C'est tout ce qui reste de soixante ans. Tu le refermes. Tu n'es pas triste. Tu es quelqu'un qui porte une chose lourde et qui a trouvé comment la mettre sur l'épaule." },
      "Puis tu reviens, par l'intérieur. Roquebise est sur sa butte, et elle fume. La troisième après la fontaine. Il y a un banc, et une petite d'un an, qui se tient debout en se cramponnant à ce banc, et qui te regarde arriver comme si elle t'attendait.",
    ],
    choices: [{ label: "Ouvrir le Cahier, à la borne de Roquebise", to: "Fd_fin_cahiers", big: true }] },

  Fd_fin_cahiers: { act: "V", title: "Aux bornes", ambiance: "champs", end: true, epilogue: true, fx: FIN,
    text: [
      "Le vingt et un juin 542, à midi, deux Cahiers sont ouverts, à douze lieues l'un de l'autre.",
      { if: J, text: "Le tien est sur la borne du parvis, au pied de la Tour. Tu descends de la Cage, les mains chaudes : tu viens de sonner douze, comme d'habitude, sans rien nommer. La place dîne." },
      { if: R, text: "Le tien est sur la borne de Roquebise, à la fontaine. Tu as du verre plein ton panier, une blouse bleue qui tourne au vert sous les bras, et une petite de dix-huit mois assise sur ton pied, qui t'a adopté{e} comme on adopte un chien." },
      "De là où tu es, on n'entend pas l'autre endroit. On sait seulement l'heure. Vous aviez dit : au Grand Midi, à la borne.",
      { if: J, text: "Tu écris : *Douze. Elle a sonné juste. Le puits va bien. Tu manques à la margelle.* Tu attends. L'encre sèche." },
      { if: J, text: "Puis il vient, lettre à lettre, en bâtons : *J'AI ENTENDU. D'ICI. DOUZE LIEUES. LE VENT PORTAIT.* Et dessous : *ELLE DIT MON NOM. ELLE LE DIT MAL. JE REVIENS AUX VENDANGES VOIR TA TÊTE.*" },
      { if: R, text: "Il vient, de son écriture penchée, pressée, que tu lirais entre mille : *Douze. Elle a sonné juste. Le puits va bien. Tu manques à la margelle.*" },
      { if: R, text: "Tu prends la mine. Tu écris, en bâtons, lentement : *J'AI ENTENDU. D'ICI. DOUZE LIEUES. LE VENT PORTAIT.* Tu regardes la petite, sur ton pied. Tu ajoutes : *ELLE DIT MON NOM. ELLE LE DIT MAL. JE REVIENS AUX VENDANGES VOIR TA TÊTE.*" },
      "Vous refermez les Cahiers, chacun de son côté, sans savoir que l'autre le fait au même instant. Le fil gris tient. Il a été cousu pour durer soixante ans. On ne lui en demandera pas tant : aux vendanges, vous serez à portée de voix.",
    ] },
});

module.exports = { passages: P, extras: {} };
