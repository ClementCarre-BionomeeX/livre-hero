// Le Douzième Coup · chapter 5, the one who passes, second half (act II, Roquebise in 541, the wedding afternoon and
// night). The wedding table and its cup, the games on the sloping square, a song asked of the stranger
// (`monde:chanson`). At night a black coach climbs to the glassworks: the first of twelve glass vats is taken from its
// mould before the gentleman who pays (`monde:cuves_vues`). The overdriven furnace throws sparks on the thatch of the
// potters' Great Kiln (`monde:four_sauve`). At dawn, the hour-stone of the nineteenth league (B05).
var P = {};

Object.assign(P, {
  K05j_tantot: { act: "II", title: "La noce à table", place: "roquebise",
    text: [
      "Tu remontes la rampe en courant. On en est au bouilli. Ta place t'attend, au bas bout de la troisième table, entre Girard et un cousin sourd, sous un tilleul qui laisse tomber dans les assiettes de petites fleurs jaunes dont personne ne se plaint.",
      "Une noce de Roquebise se mange dans l'ordre : la soupe, le bouilli, le rôti, les tourtes, le fromage, et de nouveau la soupe, pour ceux qui auraient oublié le début. On boit le vin clair des coteaux dans des pichets verts. On parle tous ensemble. À la table haute, sous un dais de draps, les mariés ne mangent rien ; ils ont l'air de deux personnes assises sur une charrette qui roule.",
      "Entre le rôti et les tourtes, l'oncle se lève, tape sur son gobelet, et obtient le silence en commençant par le perdre. « La coupe ! » crie-t-on de partout.",
    ],
    choices: [{ label: "Regarder", to: "K05j_coupe_bue" }] },
  K05j_coupe_bue: { act: "II", title: "Boire devant tout le bourg", place: "roquebise",
    text: [
      { after: "j:coupe_verre_donnee", text: "La cousine apporte la coupe de verre sur son coussin. On l'emplit. Le vin, dedans, devient une chose qu'on n'avait jamais vue à Roquebise : il se voit. Il est rouge dans le vert, traversé de soleil, et les deux noms blancs y flottent comme à la surface d'une eau. Ysabeau boit la première, à deux mains, puis tourne la coupe d'un demi-tour et la tend à Colas par l'autre anse." },
      { after: "j:coupe_verre_donnee", text: "Il boit. Il repose la coupe. Elle rend sur la table un son d'argent, et le bourg entier, qui retenait son souffle, le relâche en une acclamation. Au bout de la table haute, un petit homme rouge sans sourcils, que personne n'avait invité et que personne n'ose chasser, se rengorge sous un tilleul." },
      { if: { all: [{ has: "j:coupe_ecuelle" }, { not: { has: "j:coupe_travers" } }] }, text: "Colas apporte lui-même l'écuelle, cuite d'une heure, encore tiède, grise, sans vernis. Il y a gravé les deux noms à la pointe. Elle n'a pas d'anses : Ysabeau la prend à deux mains, comme on prend la figure de quelqu'un, boit, et la lui passe de la même façon. Leurs doigts se touchent autour de la terre. Les vieilles hochent la tête : on n'a jamais vu coupe plus pauvre, ni mariés plus obligés de se tenir." },
      { after: "j:coupe_travers", text: "Colas apporte lui-même l'écuelle, cuite d'une heure, encore tiède. Le feu n'a rien arrangé : elle penche, elle a son ventre, son bord qui retombe. Il y a gravé les deux noms à la pointe, de biais, pour suivre. Ysabeau la lève. Le bourg la voit, et un rire immense monte des trois tables." },
      { after: "j:coupe_travers", text: "« Elle est comme le mariage ! crie l'oncle. De travers, et ça tient le vin ! » Ysabeau boit du côté qui retombe, s'en met sur le menton, rit, et la passe à Colas, qui boit de l'autre. On en parlera quarante ans, et toujours en riant : à Roquebise, c'est la seule manière sûre de conjurer un sort." },
      { before: "monde:coupe_noce", text: "Colas se lève. Il tient à deux mains une coupe crue, grise, tendre, tournée du matin. Un murmure court. Il l'emplit lui-même. La terre boit le vin plus vite que lui : la paroi fonce, luit, mollit entre ses doigts. Ysabeau y trempe les lèvres. Quand vient le tour de Colas, une anse lui reste dans la main." },
      { before: "monde:coupe_noce", text: "Il boit quand même, ce qui reste, de la boue rouge plein la bouche, devant tout le bourg, et il s'essuie du revers de sa manche brodée. Personne ne rit. Les vieilles se regardent. Ysabeau lui prend la main, celle qui tient l'anse, et la garde sur la nappe, bien en vue, la mâchoire dure." },
      { before: "monde:coupe_noce", text: "« Il a essayé », dit Girard, à côté de toi, tout bas. C'est aussi ce que tout le monde pense, et ce que personne ne retiendra." },
      "Puis les violons reprennent, et l'on pousse les tables.",
    ],
    choices: [{ label: "La fête", to: "K05j_fete" }] },

  K05j_fete: { act: "II", title: "La place qui penche", backName: "la fête, sur la place", place: "roquebise", hub: true,
    text: [
      { first: true, text: "L'après-midi d'une noce appartient à tout le monde. La place qui penche se couvre de jeux : on a planté le mât du papegai devant l'église, pendu les pots du casse-pots entre deux tilleuls, tracé à la craie le couloir de la course à la cruche. Les violons se sont juchés sur un tombereau. Les vieux ont gardé les tables, et ce qu'il y a dessus." },
      { again: true, before: "K05j_soir", text: "La fête bat son plein sur la place. Les ombres des tilleuls s'allongent vers la fontaine." },
    ],
    choices: [
      { label: "Le mât du papegai", to: "K05j_papegai", hide: { seen: "K05j_papegai" } },
      { label: "Le casse-pots", to: "K05j_cassepots", hide: { seen: "K05j_cassepots" } },
      { label: "La course à la cruche", to: "K05j_cruche", hide: { seen: "K05j_cruche" } },
      { label: "La table des notables, où brille un gilet de drap fin", to: "K05j_ragot", hide: { seen: "K05j_ragot" } },
      { label: "Margot, assise près des violons, qui bat la mesure du pied", to: "K05j_margot_danse", hide: { seen: "K05j_margot_danse" } },
      { label: "Perrine, qui vend ses rubans entre deux danses", to: "K05j_perrine_noce", hide: { seen: "K05j_perrine_noce" } },
      { label: "Le petit four de Tiennot, où cuit ton écuelle", to: "K05j_ecuelle_cuite", hide: { not: { any: [{ item: "ecuelle_droite" }, { item: "ecuelle_travers" }] } } },
      { label: "Line, qui te tire par la manche vers le haut du bourg", to: "K05j_lucarne", hide: { seen: "K05j_lucarne" } },
      { label: "La table des vieux", to: "K05j_vieux", hide: { seen: "K05j_vieux" } },
      { label: "Le soir tombe : on allume les lanternes", to: "K05j_soir", big: true },
    ] },

  // ------------------------------------------------------------ the games
  K05j_papegai: { act: "II", title: "Le papegai", place: "roquebise",
    text: [
      "Le papegai est un oiseau de bois peint en vert, gros comme le poing, cloué au sommet d'une perche de quarante pieds. On le tire à l'arc, chacun trois flèches, et qui l'abat est roi de la noce jusqu'au lendemain : il ouvre le bal, il embrasse la mariée, et il paie à boire, ce qui tempère les vocations.",
      "Depuis une heure, les meilleurs archers du bourg plantent leurs flèches dans le ciel. L'oiseau a perdu une aile. Il tient par un clou.",
      "On te met un arc dans les mains, parce que tu passes.",
    ],
    choices: [
      { label: "Viser le clou", test: { dom: "combat", diff: 5, label: "Tirer", help: [{ if: { voie: "coureur" }, v: 20 }, { if: { item: "arc" }, v: 5 }] },
        win: { fx: { flag: "j:roi_papegai", gold: -1, ep: ["perso", 400] }, to: "K05j_papegai_fin" }, lose: { to: "K05j_papegai_fin" } },
      { label: "Rendre l'arc : tu n'es pas d'ici", to: "K05j_fete" },
    ] },
  K05j_papegai_fin: { act: "II", title: "Roi jusqu'à demain", place: "roquebise",
    text: [
      { outcome: "win", text: "La première flèche passe à un pied. La seconde frôle la perche. Tu laisses retomber ton souffle, comme avant de poser un rubis, et tu lâches la troisième entre deux battements. Le clou saute. L'oiseau vert tourne sur lui-même, hésite, et descend en vrille au milieu d'un hurlement." },
      { outcome: "win", text: "On te porte. On te coiffe d'une couronne de buis qui pique. Tu embrasses la mariée sur les deux joues, devant le marié qui applaudit, et tu paies la tournée, qui te coûte un écu et te vaut d'être tutoyé{e} par tout Roquebise. « Le roi vient de la route ! crie l'oncle. C'est bon signe pour le commerce ! »" },
      { outcome: "lose", text: "Tes trois flèches partent rejoindre les autres, quelque part au-dessus de l'église. La troisième redescend dans la soupière des vieux, où elle est accueillie avec philosophie. Le papegai tient toujours par son clou. On te reprend l'arc avec la courtoisie qu'on a pour les étrangers et les maladroits." },
    ],
    choices: [{ back: "K05j_fete" }] },
  K05j_cassepots: { act: "II", title: "Le casse-pots", place: "roquebise",
    text: [
      "Trois pots de rebut pendent à une corde, entre deux tilleuls, à hauteur de bras levé. Dans l'un, des dragées et un écu. Dans l'autre, de l'eau. Dans le troisième, dit-on, un pigeon, qui n'a rien demandé. On te bande les yeux avec un foulard qui sent la lavande, on te fait tourner trois fois, on te donne un bâton.",
      "Le bourg crie des conseils. Ils sont tous faux : c'est la règle du jeu.",
    ],
    choices: [
      { label: "Te fier à tes oreilles, et frapper", test: { dom: "nature", diff: 0, label: "À l'oreille", help: [{ if: { voie: "coureur" }, v: 10 }, { if: { voie: "rouage" }, v: 10 }, { if: { voie: "tetu" }, v: 5 }] },
        win: { fx: { gold: 1, ep: ["perso", 200] }, to: "K05j_cassepots_fin" }, lose: { to: "K05j_cassepots_fin" } },
    ] },
  K05j_cassepots_fin: { act: "II", title: "Ce qu'il y avait dedans", place: "roquebise",
    text: [
      { outcome: "win", text: "Tu cesses d'écouter les gens. Tu écoutes la corde. À gauche, un pot rend au vent un son plein, mat : l'eau. Au milieu, quelque chose remue et roucoule. Tu frappes à droite, de bas en haut, un coup sec. Le grès éclate ; une pluie de dragées te tombe dans le col, et un écu te sonne sur le crâne." },
      { outcome: "lose", text: "Tu frappes où l'on te dit. Le grès éclate, et un seau d'eau froide te descend sur la tête, jusque dans les souliers. Le bourg se tord. On t'ôte le bandeau : Line est au premier rang, ravie, et tu la soupçonnes d'avoir crié plus fort que les autres." },
      "Un gamin frappe après toi et délivre le pigeon, qui monte droit au-dessus des toits, fait un tour, et prend la direction du levant sans un regard pour la noce.",
    ],
    choices: [{ back: "K05j_fete" }] },
  K05j_cruche: { act: "II", title: "La course à la cruche", place: "roquebise",
    text: [
      "C'est le jeu des filles du bourg, et l'on y admet les garçons pour rire d'eux. Il s'agit de descendre la place, de la porte de l'église à la fontaine, une cruche pleine posée sur la tête, sans y mettre la main. Qui arrive en bas la cruche la plus pleine a gagné. La place penche ; le pavé est de tessons.",
      "Les filles de Roquebise font cela depuis l'âge de six ans, en parlant, en se retournant, l'une d'elles en tricotant. Elles ont le cou droit et un sourire en coin.",
    ],
    choices: [
      { label: "Poser la cruche sur ta tête, et descendre", test: { dom: "discretion", diff: 5, label: "L'équilibre", help: [{ if: { voie: "leste" }, v: 15 }, { if: { voie: "heurier" }, v: 5 }] },
        win: { fx: { item: "ruban", ep: ["perso", 300] }, to: "K05j_cruche_fin" }, lose: { to: "K05j_cruche_fin" } },
      { label: "Les regarder faire, ce qui est déjà un spectacle", to: "K05j_fete" },
    ] },
  K05j_cruche_fin: { act: "II", title: "En bas de la place", place: "roquebise",
    text: [
      { outcome: "win", text: "Tu descends comme on porte un mouvement d'horloge ouvert : les genoux souples, le regard loin, le souffle égal. La cruche pèse, oscille, se reprend. Tu arrives à la fontaine avec de l'eau jusqu'au bord. Les filles te considèrent en silence, puis la plus grande ôte le ruban de ses cheveux et te le noue au poignet. « Tu as volé ça à quelqu'un, dit-elle, cette façon de marcher. On ne naît pas avec. »" },
      { outcome: "lose", text: "Tu fais onze pas. Au douzième, un tesson roule sous ton talon ; la cruche part en avant, tu pars en arrière, et l'eau trouve le chemin de ton dos. Les filles de Roquebise ne rient pas : elles applaudissent, lentement, ce qui est bien pire." },
    ],
    choices: [{ back: "K05j_fete" }] },

  // ------------------------------------------------------------ people at the feast
  K05j_ragot: { act: "II", title: "La table des notables", place: "roquebise",
    text: [
      "Maître Fulcran Ragot est de la noce : il prête à la moitié du bourg, et l'on invite ses créanciers comme on invite le curé, pour qu'ils ne se vexent pas. Il préside la table des notables, rose, aimable, la serviette au col.",
      { after: "j:montre_donnee", text: "Il a ta montre à la main. Il la fait admirer au tabellion, à l'apothicaire, au maître de la halle. « Un chef-d'œuvre de maîtrise, que je tiens d'un valet de ferme. Ne me demandez pas comment : je ne demande jamais. Je la porte à la foire, où les amateurs sont à genoux devant ce genre de chose. » Le couvercle s'ouvre, se ferme. Tu vois passer le L, à chaque fois." },
      { after: "j:montre_donnee", text: "Il t'aperçoit et te salue du menton, sans gêne aucune. « Mon jeune ami ! Sans rancune ? Tenez : je suis beau joueur. Il y a là-bas un jeu de quilles. Trois boules. Si vous abattez les neuf, je vous rends votre bijou pour trente écus, qui est ce qu'il m'a coûté. Si vous en laissez une debout, vous me devez un service, à ma convenance. Je n'ai jamais assez de gens qui savent lire. »" },
      { after: "j:noyer_billet", text: "Il te reconnaît. Son sourire tient bon, comme un vernis sur une fêlure. « Le jeune légiste des Noyers. Asseyez-vous donc. Non ? Vous avez raison : nous n'aurions rien à nous dire que vous n'ayez déjà calculé. » Il se retourne vers le tabellion. Tu as coûté à cet homme quatre écus et un noyer : il fera en sorte de s'en souvenir à la première occasion." },
      { after: "j:noyer_perrine", text: "Il te reconnaît, et cherche Perrine des yeux, par-dessus ton épaule. Ne la voyant pas, il se détend. « Votre amie n'est pas là ? Charmante enfant. Dites-lui que mon bois sèche, à présent. Quatre ans, comme le veut le règlement. » Il boit une gorgée. « Je compte seulement à partir d'aujourd'hui. »" },
      { after: "j:noyer_croix", text: "Il te voit, et ne te reconnaît pas : tu étais du décor, sous le noyer, avec les poules. Il parle au tabellion d'un fût de quatorze pieds sans un nœud, dont on tirera les caisses de vingt régulateurs. Il en parle avec amour." },
    ],
    choices: [
      { label: "Prendre les trois boules", hide: { not: { has: "j:montre_donnee" } }, test: { dom: "combat", diff: 5, label: "Les quilles", help: [{ if: { voie: "tetu" }, v: 10 }, { if: { voie: "leste" }, v: 10 }, { if: { has: "j:roi_papegai" }, v: 5 }] },
        win: { fx: { flag: "j:quilles_gagnees", ep: ["perso", 400] }, to: "K05j_quilles" }, lose: { fx: { flag: "j:doit_ragot" }, to: "K05j_quilles" } },
      { back: "K05j_fete" },
    ] },
  K05j_quilles: { act: "II", title: "Neuf quilles", place: "roquebise",
    text: [
      { outcome: "win", text: "La première boule en couche quatre. La deuxième, trois. Il en reste deux, écartées, les deux du fond : celles que les joueurs appellent les belles-mères. Tu prends ton temps. Tu lances de biais ; la boule touche la première, qui tourne, tombe en travers et fauche l'autre du bout du pied. Le tabellion applaudit avant de se rappeler à qui il doit de l'argent." },
      { outcome: "win", text: "Maître Ragot pose la montre sur la nappe. « Trente écus. » Tu ne les as pas, il le sait, et son sourire revient. « Je la porte donc à la foire. Vous m'y trouverez, au quartier des horlogers, sous l'enseigne du Noyer d'Or : j'ai choisi le nom ce matin. Apportez trente écus avant le Grand Midi, et elle est à vous. Parole de marchand, devant ces messieurs. »" },
      { outcome: "lose", text: "La première boule en couche quatre. La deuxième, trois. La troisième passe entre les deux dernières, exactement, comme une charrette entre deux bornes. Elles ne tremblent même pas." },
      { outcome: "lose", text: "« Un service, dit maître Ragot, enchanté. À ma convenance. Vous me trouverez à la foire, au quartier des horlogers ; j'aurai un papier à vous faire lire, ou à vous faire porter. Ce n'est rien, vous verrez. Ce n'est jamais rien. »" },
    ],
    choices: [{ back: "K05j_fete" }] },
  K05j_margot_danse: { act: "II", title: "Mademoiselle Marguerite", place: "roquebise",
    text: [
      "Margot est assise sur une borne, près du tombereau des violons, le panier vide à ses pieds. Sa tête répond de ce panier, même vide : la tante l'a dit. Ses souliers rouges battent la mesure sous sa jupe, tous les deux, en avance sur la musique.",
      "À dix pas, le grand potier roux, le frère du marié, fait depuis un quart d'heure le même trajet : trois pas vers elle, un arrêt, deux pas en arrière. Il s'appelle Denis. Il a les mains plus larges que des assiettes et ne sait qu'en faire.",
      "« Il va user le pavé, dit Margot sans tourner la tête. Il fait ça depuis la Chandeleur. Je ne peux tout de même pas aller le chercher : j'ai un panier. »",
    ],
    choices: [
      { label: "« Je garde le panier. Sur ma tête. »", fx: { flag: "j:margot_danse", regard: { margot: "redevable" } }, to: "K05j_margot_danse2" },
      { label: "Aller dire deux mots au grand roux", fx: { flag: "j:margot_danse" }, to: "K05j_margot_danse2" },
      { label: "Laisser faire le pavé", to: "K05j_fete" },
    ] },
  K05j_margot_danse2: { act: "II", title: "La bourrée", place: "roquebise",
    text: [
      "Il faut peu de chose. Un panier qui change de mains, un mot à un grand garçon écarlate : « Elle dit que vous usez le pavé. » Denis Hureau traverse les dix pas d'une seule enjambée, comme on passe un gué, et tend une main large comme une assiette. Margot y pose la sienne.",
      "Ils dansent la bourrée de Roquebise, qui se danse face à face, sans se toucher, en frappant du talon. Les souliers rouges font sur les tessons un bruit de grêle. Elle rit, la tête en arrière. Lui ne rit pas : il la regarde danser avec le sérieux qu'il met à surveiller une cuisson.",
      "Tu tiens le panier vide sur tes genoux. Tu les regardes. Elle brodera son nom sur un drap, avec le sien à lui, et une date, et un blanc. Ce soir, les souliers sont neufs, et le drap n'est pas encore tissé.",
    ],
    choices: [{ back: "K05j_fete" }] },
  K05j_perrine_noce: { act: "II", title: "Trois aunes de rouge", place: "roquebise", shop: "ii_perrine",
    text: [
      { first: true, text: "Perrine a étalé son drap rouge sur une marche de l'église. Un jour de noce, le ruban part tout seul : les garçons en achètent pour les filles, les filles en achètent pour qu'on croie qu'un garçon leur en a donné. Elle mesure à l'aune, sur son bras, vite, et son aune a la réputation d'être courte." },
      { first: true, text: "« Demain Arvoise, dit-elle entre deux clientes. On part à la fraîche, avant le jour. Cinq lieues, et je veux être sur la rive avant la presse : ils attendent dix mille personnes pour leur bénédiction. Dix mille. Sur un pont. » Elle crache de côté, proprement. « Moi, je vends sur la berge. »" },
      { again: true, text: "Perrine mesure, coupe, encaisse. Le drap rouge se vide." },
    ],
    choices: [
      { label: "« Perrine. Ce pont. Je sais quelque chose. »", to: "K05j_perrine_pont", if: { has: "monde:su:pont" }, hide: { any: [{ not: { has: "monde:su:pont" } }, { seen: "K05j_perrine_pont" }] } },
      { back: "K05j_fete" },
    ] },
  K05j_perrine_pont: { act: "II", title: "Ce qui vient", place: "roquebise",
    text: [
      "Tu as dans le Cahier trois lignes en bâtons. Tu ne peux pas les lui montrer. Tu peux les lui dire, et voir ce qu'elle en fait.",
      "Perrine t'écoute en pliant un ruban. Elle le plie de plus en plus lentement.",
      "« Demain. À l'heure de la bénédiction. » Elle ne demande pas comment tu le sais. Elle te regarde les mains, les souliers, la figure, comme la veille, et tu la vois refaire son compte avec un chiffre de plus. « La troisième pile. C'est ce que disait mon père. » Sa voix est plate. « Il l'a dit au maître d'œuvre, il l'a dit au bailli, il l'a dit au curé. On l'a traité de passeur. »",
    ],
    choices: [
      { label: "« Je le tiens de quelqu'un qui ne se trompe pas. Je ne peux pas te dire qui. »", fx: { flag: ["j:perrine_sait_pont", "j:perrine_dit_vrai"], conf: { perrine: 10 } }, to: "K05j_perrine_pont2" },
      { label: "« J'ai regardé le courant, ce matin, de la terrasse. Ton père avait raison. »", fx: { flag: "j:perrine_sait_pont", conf: { perrine: -5 } }, to: "K05j_perrine_pont2" },
    ] },
  K05j_perrine_pont2: { act: "II", title: "La règle, deuxième article", place: "roquebise",
    text: [
      { after: "j:perrine_dit_vrai", text: "« Quelqu'un qui ne se trompe pas. » Perrine range le ruban dans sa hotte. « J'en connais un : c'est mon almanach, et je sais comment on le fabrique. » Elle se tait un instant. « Tu ne mens pas. Tu caches, ce qui n'est pas pareil, et que la règle permet. Bon. »" },
      { before: "j:perrine_dit_vrai", text: "« De la terrasse. À cinq lieues. Tu as vu travailler l'eau sous une pile, à cinq lieues. » Perrine range le ruban dans sa hotte, sans te regarder. « Règle de la maison, deuxième article. Tu viens de le casser, et tu le casses mal. Je te le passe une fois, parce que ce que tu dis, mon père l'a dit avant toi. »" },
      "Elle se lève. Elle est pâle sous son hâle. « Dix mille personnes. Et moi qui comptais leur vendre des images. » Elle serre les bretelles de sa hotte, à vide, pour occuper ses mains. « Demain, on arrive tôt. On va trouver ce maître Baudri. Il ne nous écoutera pas : c'est un homme qui a fait un pont. Mais on y va quand même. Je ne vais pas regarder ça de la berge deux fois dans ma vie. »",
    ],
    choices: [{ back: "K05j_perrine_noce" }] },
  K05j_ecuelle_cuite: { act: "II", title: "Le petit four", place: "roquebise",
    text: [
      "Tiennot a quitté la noce un moment pour son petit four, qui tient dans un coin de sa cour et qu'il nourrit de fagots comme on gave une oie. Il en tire tes essais avec une pince, un par un, et les pose sur la brique.",
      { if: { item: "ecuelle_droite" }, text: "Ton écuelle a pris la couleur du pain. Elle sonne clair. « Une cuisson de biscuit, sans vernis : elle boira un peu, les premiers temps. » Il la tourne au jour. « Elle durera plus que nous. C'est ce qu'il y a de vexant, avec la terre cuite. »" },
      { if: { item: "ecuelle_travers" }, text: "Ton écuelle a pris la couleur du pain et gardé toutes ses opinions. Elle penche. Elle sonne clair. « Elle durera plus que nous, dit Tiennot en la tournant au jour. C'est ce qu'il y a de vexant, avec la terre cuite : même les ratées. »" },
      "Sur la brique, à côté, un carreau refroidit. Il est bleu : pas encore franc, un peu d'ardoise dans un coin, mais bleu. Tiennot le regarde sans y toucher, comme on regarde dormir quelqu'un.",
    ],
    fx: { drop: ["ecuelle_droite", "ecuelle_travers"], item: "ecuelle_cuite" },
    choices: [{ back: "K05j_fete" }] },
  K05j_lucarne: { act: "II", title: "Une bouteille grande comme papa", place: "roquebise",
    text: [
      "Line te mène par des venelles qu'elle connaît depuis ses sept ans, derrière la verrerie, à l'endroit où le mur sert d'appui à un tas de fagots. Elle grimpe. Tu grimpes. Il y a là une lucarne, à hauteur de visage, d'où sort une haleine de four.",
      "Dedans, c'est une nef. Le feu y fait le jour : un fourneau long comme une grange, à trois gueules, devant lequel passent des hommes nus jusqu'à la ceinture, luisants, qui ne parlent pas. Au milieu de la halle, dans une fosse, quelque chose est debout, bardé de cercles de fer, haut comme un homme et large comme un tonneau à vendange : un moule de terre, qui fume par toutes ses coutures.",
      "« C'est là-dedans, souffle Line. La bouteille. Elle est grande comme papa. » Elle réfléchit, le menton sur le rebord. « Qu'est-ce qu'on boit, dans une bouteille grande comme papa ? Et il en faut douze. Douze fois papa. » Elle compte sur ses doigts, y renonce. « Celui qui a soif comme ça, je ne voudrais pas le rencontrer. »",
      "Un compagnon lève la tête vers la lucarne. Vous dégringolez des fagots.",
    ],
    fx: { flag: "j:moule_vu" },
    choices: [{ back: "K05j_fete" }] },
  K05j_vieux: { act: "II", title: "La table des vieux", place: "roquebise",
    text: [
      "Les vieux de Roquebise ont gardé leur table, leurs pichets et la flèche tombée dans leur soupière, qu'ils ont plantée dans une miche en guise de trophée. Ils parlent du temps, c'est-à-dire de celui qu'il faisait.",
      "« Les bornes, dit l'un, à propos de rien, sont plus vieilles que la route. Mon grand-père le tenait du sien. On a pavé d'une pierre à l'autre parce qu'elles étaient là, toutes droites, toutes à une lieue. Qui les avait plantées, et pour aller où, quand il n'y avait encore ni roi ni ville ? »",
      "« Les Fondateurs, dit un autre. Les premiers horlogers. Ils ont trouvé l'endroit du Mont-Cadran, ils ont planté la première, et ils ont tiré leur ligne. »",
      "« Ils n'ont rien trouvé, dit un troisième, le plus vieux, qui n'a plus qu'une dent et s'en sert pour parler. Ils ont entendu. Il y a quelque chose qui bat, là-dessous. Ma mère était de Méridane : elle disait qu'enfant, l'oreille contre le pavé de la place, on le sentait dans les dents. Un coup. Et longtemps après, un autre. Les Horlogers ont mis une tour dessus et une cloche au-dessus, pour qu'on écoute la cloche. »",
      "Les autres haussent les épaules. On lui verse à boire, pour le faire taire, ce qui a toujours réussi.",
    ],
    choices: [{ back: "K05j_fete" }] },

  // ------------------------------------------------------------ the evening and the song
  K05j_soir: { act: "II", title: "Les lanternes", place: "roquebise", takes: "evening",
    text: [
      "Le soir vient par le bas de la butte et monte lentement les rues. On pend aux tilleuls des lanternes de terre ajourée, une spécialité du bourg : chacune jette sur le pavé une dentelle de lumière qui tourne. Les Bordier arrivent des Hautes-Bordes, le foin rentré, le grand devant, son violon sous le bras. Il joue comme on a dit : fort, et tout droit. On danse mieux.",
      { after: "j:roi_papegai", text: "Tu ouvres le bal, puisque tu es roi. Tu l'ouvres avec la mariée, qui te mène, heureusement, et tout le bourg tape dans ses mains pour t'indiquer la mesure." },
      "Vers neuf heures, quand les violons soufflent, l'oncle remonte sur son banc. « Une chanson ! Chacun la sienne ! Les Noyers d'abord, puis ceux de la route ! » Josse chante la sienne, d'une voix de basse qui cherche ses notes dans ses souliers. Perrine chante une chanson de passeurs, où la rivière a le dernier mot. Puis les regards viennent à toi.",
      "« Et {hero} ? Une chanson de ton pays ! »",
      "Tu n'en sais qu'une que personne ici ne peut connaître. C'est un air que Line fredonne à l'établi, entre ses dents, quand un mouvement lui résiste : quatre phrases qui tournent et reviennent au même point, comme une roue. Tu ne lui as jamais demandé d'où elle le tenait.",
    ],
    choices: [
      { label: "Chanter l'air de l'établi", fx: { flag: "monde:chanson", ep: ["histoire", 400] }, to: "K05j_chanson" },
      { label: "Chanter ce que tout le monde chante, et te fondre dans le refrain", to: "K05j_chanson_non" },
    ] },
  K05j_chanson: { act: "II", title: "Quatre phrases qui tournent", place: "roquebise",
    text: [
      "Tu chantes. Tu n'as pas de paroles : Line n'en a jamais mis. Tu chantes sur des *la*, d'abord trop bas, puis juste. L'air fait son tour et revient ; tu le reprends.",
      "Le grand Bordier l'a au second passage. Son violon entre dessous, fort, tout droit, et lui donne des épaules. Au troisième, une cousine y pose des mots, n'importe lesquels, ceux qui viennent à une noce : les mariés, la fontaine, le vin clair. Au quatrième, la place entière le chante, et il n'est plus à toi.",
      "Tu cherches Line. Elle est debout sur un banc, les mains derrière le dos. Elle ne chante pas. Elle écoute, la tête penchée, la bouche entrouverte, et ses lèvres bougent en silence : elle apprend. Elle met l'air de côté, soigneusement, comme elle met les ressorts dans sa boîte.",
      "Tu comprends alors d'où elle le tenait. Tu cherches le commencement de cette chanson, celui qui l'a faite, le premier soir. Tu tournes avec elle, et tu reviens au même point.",
    ],
    choices: [{ label: "Laisser la place chanter", to: "K05j_nuit" }] },
  K05j_chanson_non: { act: "II", title: "Le refrain de tout le monde", place: "roquebise",
    text: [
      "Tu entonnes *La Belle au pont d'Arvoise*, que les rouliers braillaient ce matin sur la chaussée et dont tu as retenu le refrain. Toute la place le connaît et te le prend des mains au deuxième vers. Tu chantes avec les autres, ni mieux ni plus mal, et l'on t'en sait gré : un étranger qui chante vos chansons est à moitié du pays.",
      "Line, debout sur un banc, chante aussi, très faux, très fort. Entre deux couplets, tu l'entends fredonner autre chose, pour elle seule, trois notes qui cherchent une suite et n'en trouvent pas. Elle hausse une épaule et revient au refrain.",
    ],
    choices: [{ label: "Laisser la place chanter", to: "K05j_nuit" }] },

  // ------------------------------------------------------------ the night at the glassworks
  K05j_nuit: { act: "II", title: "Une voiture noire", place: "roquebise", takes: "night",
    text: [
      "Il est onze heures passées. Les enfants dorment sur les bancs, en tas. On danse encore, plus lentement. Tu es assis{e} sur la margelle de la fontaine, sous saint Gnomon, quand une voiture entre dans le bourg par la porte du levant.",
      "Elle est noire, haute, attelée de quatre chevaux de poste couverts d'écume. Elle ne s'arrête pas à la noce. Le cocher la mène au pas le long de la place, du côté de l'ombre, avec le soin qu'on met à traverser une église pendant l'office. Sur la portière, une lanterne de tilleul éclaire un instant un écusson : une tour à cadran, rouge et or.",
      "Elle monte vers le haut du bourg. Le ronflement de la verrerie, que tu n'entendais plus à force de l'entendre, change de ton : on a ouvert les grandes portes.",
      "Une main te tire par la manche. « C'est lui, chuchote Line. Celui qui a soif. Viens. »",
    ],
    choices: [
      { label: "La suivre jusqu'à la lucarne aux fagots", fx: { flag: "j:nuit_lucarne" }, to: "K05j_approche" },
      { label: "Y aller seul{e}, et la renvoyer se coucher", fx: { flag: "j:nuit_seul" }, to: "K05j_approche" },
      { label: "Rester à la fontaine : ce qui se passe là-haut regarde la Guilde", to: "K05j_feu" },
    ] },
  K05j_approche: { act: "II", title: "Derrière la verrerie", place: "roquebise",
    text: [
      { after: "j:nuit_seul", text: "« Va te coucher. » Line te regarde avec un mépris sans mélange. Elle fait demi-tour. Tu montes par les venelles, seul{e}. Arrivé{e} au tas de fagots, tu trouves, déjà installée sous la lucarne, une petite forme en chemise qui a pris par les jardins. Elle met un doigt sur sa bouche." },
      { after: "j:nuit_lucarne", text: "Vous montez par les venelles. Line marche devant, pieds nus, sans une hésitation, dans un noir où tu te cognes aux murs." },
      "La voiture est dans la cour, dételée. Le cocher, un homme long, en houppelande, fait les cent pas devant le portail, une lanterne à la main ; il passe à dix pieds du tas de fagots, revient, repasse. Chaque fois, sa lumière balaie le mur.",
      "Il faut monter entre deux passages, sans qu'un fagot roule.",
    ],
    choices: [
      { label: "Attendre qu'il tourne le dos, et grimper", test: { dom: "discretion", diff: 5, label: "Discrétion", help: [{ if: { voie: "leste" }, v: 15 }, { if: { voie: "coureur" }, v: 10 }, { if: { has: "j:moule_vu" }, v: 10 }] },
        win: { fx: { ep: ["seance", 600] }, to: "K05j_demoulage" }, lose: { fx: { flag: "j:pris_cocher" }, to: "K05j_demoulage" } },
    ] },
  K05j_demoulage: { act: "II", title: "La première cuve", place: "roquebise", fx: { flag: "monde:cuves_vues", meet: "aubespin" },
    text: [
      { outcome: "lose", text: "Un fagot roule. La lanterne s'arrête, revient, monte le long du mur et vous trouve tous les deux, collés à la brique. « Tiens donc », dit le cocher, sans élever la voix. Il a une poigne de maréchal. Il vous porte plus qu'il ne vous mène jusqu'à la grande porte, un dans chaque main, et vous dépose sur le seuil, dans la lumière du four." },
      { outcome: "win", text: "Vous êtes à la lucarne. La halle, dessous, est éclairée comme pour une messe." },
      "On a ôté les cercles de fer. Six compagnons, avec des leviers, des coins, des précautions de chirurgiens, détachent le moule par quartiers ; la terre cuite tombe en plaques. Maître Verdelet tourne autour, la bouche ouverte, sans un son. Ce qui paraît dessous n'a d'abord pas de forme : c'est de la lueur, debout.",
      "Puis on voit. Une cuve de verre, d'une seule pièce, haute d'une toise, ronde, à fond bombé, épaisse de deux doigts et pourtant si claire que le feu du fourneau passe au travers et s'y déforme à peine. Elle a encore une chaleur à elle, rose, qui s'en va. Elle ne porte ni bulle ni fil. On dirait que quelqu'un a moulé de l'air.",
      "Un homme s'approche, que tu n'avais pas remarqué dans l'ombre des piliers. Il est en habit de voyage, gris, bien coupé, sans un galon. Trente ans. Il ôte son gant, pose la main à plat sur le verre, comme un médecin, et l'y laisse le temps d'un Pater. Puis il frappe la paroi d'une bague qu'il porte au petit doigt. La cuve chante : une note grave, pleine, qui dure, et qui fait trembler dans leurs casiers toutes les bouteilles de la verrerie.",
      "« Elle est sans défaut, maître Verdelet. » Il a une voix douce, précise, qui sourit. « Vous voyez bien que cela se pouvait. Il m'en faut onze autres. »",
    ],
    choices: [{ label: "Écouter", to: "K05j_demoulage2" }] },
  K05j_demoulage2: { act: "II", title: "Plus fin que l'eau", place: "roquebise",
    text: [
      "« Onze ! » Le verrier retrouve la parole pour s'étrangler. « Monsieur le sous-maître, celle-ci m'a pris dix jours ! J'ai brûlé trois moules ! Mes fours n'ont pas refroidi depuis la Pentecôte, mes hommes dorment debout... »",
      "« Vous avez jusqu'à la veille du Grand Midi. Six jours. Poussez vos feux. » Le monsieur gris remet son gant, doigt après doigt. « Je double la somme. Je la triple, si la douzième est à la Tour à l'heure dite. Vous serez l'homme le plus glorieux d'Aurime, maître Verdelet. Je vous en donne ma parole, et ma parole, vous l'aurez remarqué, se réalise. »",
      "Il tire de son gilet une fiole grosse comme le pouce. Il la débouche au-dessus de la cuve, et il y laisse tomber quelque chose : une pincée, pas davantage, d'une poudre qui luit. Elle est grise. Elle est de la couleur que tu portes dans une cage de laiton, contre ta poitrine.",
      "Le sable descend dans la cuve. Il n'y tombe pas : il y coule, lentement, comme dans une eau plus lourde. Autour de la grande forme de verre, l'air change. Un papillon de nuit, qui tournait au-dessus du four, entre dans ce cercle et y reste, les ailes ouvertes, à hauteur d'homme, posé sur rien.",
      "Les compagnons reculent. Verdelet se signe. Le monsieur gris regarde le papillon avec une attention tendre, penché, les mains derrière le dos. La lueur du four lui vient en plein visage.",
      "Il a un œil gris, et l'autre brun.",
    ],
    fx: { flag: "j:vu_vairons" },
    choices: [
      { label: "Rester où tu es, sans un souffle", hide: { has: "j:pris_cocher" }, to: "K05j_demoulage3" },
      { label: "Te tenir droit{e} : il se retourne vers la porte", hide: { not: { has: "j:pris_cocher" } }, to: "K05j_aubespin" },
    ] },
  K05j_demoulage3: { act: "II", title: "Le papillon", place: "roquebise",
    text: [
      "Le temps d'un Ave, pas davantage. Au fond de la cuve, la pincée grise a fini de couler ; sa lueur s'éteint. Le papillon reprend son vol au point exact où il l'avait laissé, et s'en va vers le four, où il lui arrive ce qui arrive aux papillons.",
      "« Elle tient, dit le monsieur gris, pour lui-même. Elle tient ce qu'on y met. » Il rebouche sa fiole. « À la veille du Grand Midi, maître Verdelet. Bonne nuit. Dormez, si vous y tenez : vos fours, eux, veilleront. »",
      "Il sort. Derrière lui, le maître verrier reste un long moment immobile devant son chef-d'œuvre. Puis il se tourne vers ses hommes, et tu vois sur sa figure sans sourcils quelque chose qui ressemble à de la peur, et qui se change en ordre : « Poussez. Les trois gueules. Tout le bois. »",
      "À côté de toi, Line n'a pas remué. Elle a les deux mains agrippées au rebord de la lucarne. « Tu as vu ses yeux ? dit-elle, très bas. Il n'a pas regardé le papillon comme on regarde une bête. Il l'a regardé comme je regarde les ressorts. »",
    ],
    choices: [{ label: "Redescendre des fagots", to: "K05j_feu" }] },
  K05j_aubespin: { act: "II", title: "Le sous-maître", place: "roquebise", fx: { flag: "j:aubespin_connait" },
    text: [
      "Au fond de la cuve, la pincée grise finit de couler. Le papillon reprend son vol. Le monsieur gris rebouche sa fiole, se retourne, et vous découvre sur le seuil, entre les mains de son cocher : une petite fille en chemise, et toi.",
      "Il vient à vous sans hâte. De près, il est plus jeune encore, soigné, presque beau ; les deux yeux ne s'accordent pas, et l'on ne sait auquel répondre. « Des curieux. À cet âge, c'est une vertu. » Il se penche vers Line. « Tu as vu le papillon, mademoiselle ? » Line fait oui. « Et qu'en as-tu pensé ? »",
      "« Qu'il ne savait pas qu'il était arrêté », dit Line.",
      "Le sous-maître se redresse lentement. Il la considère comme il a considéré la cuve. « C'est très exactement cela. Tu iras loin, ou l'on t'en empêchera. » Puis l'œil gris et l'œil brun viennent à toi, descendent, s'arrêtent à ton gilet, où passe un bout de chaînette de laiton. « Et toi. Tu as les doigts de quelqu'un qui lime. Chez qui apprends-tu ? »",
    ],
    choices: [
      { label: "« Chez une horlogère de campagne. Vous ne la connaissez pas. »", fx: { flag: "j:aubespin_vrai" }, to: "K05j_aubespin2" },
      { label: "« Chez personne. Je porte la hotte d'une colporteuse. »", test: { dom: "social", diff: 5, label: "Mentir", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { voie: "leste" }, v: 10 }] },
        win: { fx: { flag: "j:aubespin_dupe" }, to: "K05j_aubespin2" }, lose: { fx: { flag: "j:aubespin_doute" }, to: "K05j_aubespin2" } },
    ] },
  K05j_aubespin2: { act: "II", title: "Un bout de chaîne", place: "roquebise",
    text: [
      { after: "j:aubespin_vrai", text: "« Une horlogère. De campagne. » Il sourit. « Il n'y a pas d'horlogères, mon enfant. La Guilde ne reçoit pas les femmes : c'est le troisième article de nos statuts, et le plus sot. Ou bien ta maîtresse travaille hors de la règle, ou bien elle n'existe pas encore. » Il a dit cela légèrement, pour le plaisir du mot. Tu sens tes cheveux se dresser sur ta nuque." },
      { after: "j:aubespin_dupe", text: "Tu dis cela d'un ton de hotte, avec les épaules qu'il faut. Il regarde tes épaules. Il y trouve, en effet, la marque fraîche de deux bretelles. « Une colporteuse. Voilà qui explique la curiosité : c'est une denrée que ces gens-là revendent. » Il se détourne à demi, déjà ailleurs." },
      { after: "j:aubespin_doute", text: "« Une hotte. » Il te prend le poignet, sans brusquerie, et te retourne la main sous la lumière : la pulpe de l'index, usée en biais ; l'ongle du pouce, fendu par la lime. « Ceci n'est pas une main de portefaix. Tu mens, et je ne sais pas pourquoi : cela m'intéresse plus que si je le savais. » Il te rend ta main." },
      "« Je ne retiens pas les enfants. » Il fait un signe au cocher, qui vous lâche. « Vous direz ce que vous avez vu, on ne vous croira pas, et dans six jours cela n'aura plus aucune importance. Va te coucher, mademoiselle. Et toi... » L'œil brun s'attarde sur le bout de chaînette. « Nous nous reverrons peut-être. Je monte à Méridane pour la fête. Si tu limes aussi bien que tu regardes, viens frapper à la colline des Jurés, et demande le sous-maître Aubespin. J'ai toujours l'usage d'une paire de mains qui ne posent pas de questions. »",
      "Il vous salue, tous les deux, d'une inclinaison exacte, et retourne à sa cuve.",
      "Dehors, Line marche dix pas en silence. « Il est poli, dit-elle. Je n'aime pas quand c'est poli comme ça. Les ressorts aussi sont polis. »",
    ],
    choices: [{ label: "Redescendre vers la place", to: "K05j_feu" }] },

  // ------------------------------------------------------------ the fire
  K05j_feu: { act: "II", title: "Des flammèches", place: "roquebise", urgent: 75,
    text: [
      { if: { not: { seen: "K05j_demoulage" } }, text: "Tu restes à la fontaine. Les danseurs s'en vont par couples. Vers minuit, le ronflement de la verrerie monte d'un ton, puis d'un autre, et la fumée blanche, au-dessus des toits, devient rousse par le bas." },
      { if: { seen: "K05j_demoulage" }, text: "Vous n'avez pas atteint la place que le ronflement de la verrerie, derrière vous, monte d'un ton, puis d'un autre. Les trois gueules. Tout le bois." },
      "La cheminée carrée se met à cracher. Ce sont d'abord des étincelles, qui montent droit et s'éteignent. Puis le vent de la nuit se lève, celui qui vient du levant, et les couche sur le bourg : une neige rouge, lente, qui descend la butte en tournant. Elle tombe sur les tuiles vernies, où elle meurt. Elle tombe plus bas, dans la rue des Potiers.",
      "Quelqu'un crie. Au bas de la rue, contre le flanc du Grand Four, le chaume de l'appentis fume en trois endroits. Dessous, vingt cordes de chêne sec.",
      "Les violons s'arrêtent. Tout Roquebise se lève d'un bloc et reste debout une seconde, à regarder, comme une personne qui cherche ses clefs.",
    ],
    choices: [
      { label: "Courir à la fontaine, et mettre les gens en chaîne jusqu'au four", test: { dom: "social", diff: 5, label: "Commander", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { voie: "tetu" }, v: 10 }, { if: { has: "j:roi_papegai" }, v: 15 }, { if: { has: "j:sait_flammeches" }, v: 5 }] },
        win: { fx: { flag: ["monde:four_sauve", "j:feu_chaine"], ep: ["seance", 900] }, to: "K05j_feu_fin" }, lose: { fx: { flag: "j:feu_chaine" }, to: "K05j_feu_fin" } },
      { label: "Monter sur l'appentis, et arracher le chaume qui brûle", test: { dom: "combat", diff: 5, label: "Arracher", help: [{ if: { voie: "tetu" }, v: 15 }, { if: { voie: "coureur" }, v: 10 }, { if: { voie: "leste" }, v: 10 }, { if: { has: "j:sait_flammeches" }, v: 5 }] },
        win: { fx: { flag: ["monde:four_sauve", "j:feu_toit"], pv: -1, ep: ["seance", 900] }, to: "K05j_feu_fin" }, lose: { fx: { flag: "j:feu_toit", pv: -3 }, to: "K05j_feu_fin" } },
      { label: "Courir à l'église, et sonner le tocsin", fx: { flag: "j:feu_tocsin", ep: ["seance", 400] }, to: "K05j_feu_fin", timeout: true },
    ] },
  K05j_feu_fin: { act: "II", title: "Le Grand Four", place: "roquebise",
    text: [
      { if: { all: [{ has: "j:feu_chaine" }, { has: "monde:four_sauve" }] }, text: "Tu sautes sur la margelle, et tu cries. Tu cries des noms, ceux que tu as appris dans la journée : Colas, Denis, Tiennot, les Bordier. Tu cries une place à chacun. Un bourg de potiers sait ce que c'est que de se passer des planches de main en main ; il suffit de le lui rappeler. En cent battements de cœur, deux files descendent de la fontaine au four, l'une de seaux pleins, l'autre de seaux vides, et saint Gnomon tire la langue sur trois cents personnes qui travaillent en silence." },
      { if: { all: [{ has: "j:feu_chaine" }, { not: { has: "monde:four_sauve" } }] }, text: "Tu sautes sur la margelle, et tu cries. Ta voix porte mal ; tu ne connais pas assez de noms. On court en tous sens, chacun avec son seau, chacun vers son propre toit. La chaîne se forme enfin, grâce à la tante Guillemette, qui a la voix qu'il faut. Elle se forme trop tard." },
      { if: { all: [{ has: "j:feu_toit" }, { has: "monde:four_sauve" }] }, text: "Tu grimpes par le tas de bois. Le chaume brûle en trois ronds, qui s'élargissent. Tu arraches à pleines mains, par brassées, la paille qui fume et la paille autour, et tu jettes tout dans la rue, où des femmes piétinent. Tes manches prennent ; tu les bats sur ta cuisse. Denis Hureau est monté à côté de toi, avec une fourche. À vous deux, vous dénudez la charpente plus vite que le feu ne la mange." },
      { if: { all: [{ has: "j:feu_toit" }, { not: { has: "monde:four_sauve" } }] }, text: "Tu grimpes par le tas de bois. Le chaume brûle en trois ronds, qui se rejoignent. Tu arraches à pleines mains ; la paille te revient dans la figure, en flammes. Une latte cède sous ton genou. Tu tombes à travers l'appentis, sur les bûches, avec la moitié du toit, et Denis Hureau te tire de là par le col, les cheveux roussis, pendant que le feu descend derrière toi dans le chêne sec." },
      { after: "j:feu_tocsin", text: "Tu cours à l'église. La corde est dans le porche. Tu t'y pends, et la cloche de Roquebise, qui avait sonné la noce le matin, sonne le feu à toute volée. On l'entend des Hautes-Bordes. Tout le bourg descend avec des seaux ; les fermes d'en bas montent. Cela fait beaucoup de monde, et cela prend le temps que mettent les gens à venir." },
      { after: "monde:four_sauve", text: "À deux heures du matin, l'appentis est une carcasse noire, trempée, qui fume. Le tas de chêne a roussi sur une face. Le Grand Four n'a pas eu chaud : le vieux gardien en fait le tour, la main à plat sur la brique, comme on tâte un cheval après la course, et il pleure sans s'en cacher. « Il est froid, dit-il. Il est froid, mes enfants. »" },
      { before: "monde:four_sauve", text: "Le chêne prend d'un coup, avec un bruit de drap qu'on déchire. Vingt cordes. La flamme monte plus haut que le dôme, s'y couche, l'enveloppe. On jette des seaux dans cette fournaise comme on crache dans la mer. Vers deux heures, on entend, par-dessus le feu, un claquement sec, long, qui court dans la brique de bas en haut. Tous les potiers de Roquebise connaissent ce bruit-là, en petit. Ils se taisent." },
      { before: "monde:four_sauve", text: "Le Grand Four s'est fendu. Deux cents ans, douze mille pots par cuisson. Le vieux gardien est assis sur sa chaise, qu'on a sauvée, au milieu de la rue. Il regarde la lézarde, large comme la main, où rougeoie encore le dedans. « On mangera des racines », dit-il à personne." },
      "En remontant vers la place, noir{e} de suie, tu croises la voiture à l'écusson. Elle redescend du haut du bourg au pas, quatre chevaux frais aux traits, et la foule aux seaux s'écarte pour la laisser passer. Le rideau de la portière est tiré. Il ne s'écarte pas.",
    ],
    choices: [{ label: "Attendre le jour", to: "K05j_aube" }] },
  K05j_aube: { act: "II", title: "Le lendemain d'une noce", place: "roquebise", takes: "morning",
    text: [
      "Le jour se lève sur un bourg qui sent le brûlé et le vin répandu. On dort où l'on est tombé. Les lanternes de terre pendent encore aux tilleuls, éteintes.",
      { after: "monde:four_sauve", text: "Ysabeau et Colas sont assis côte à côte sur le seuil de leur maison, rue des Potiers, en habits de noce noircis, un seau entre eux deux. Ils ont passé leur nuit de noces à la chaîne. Elle dort sur son épaule. Lui regarde le Grand Four, entier, au bas de la rue, et il a la figure d'un homme à qui l'on a rendu son héritage." },
      { before: "monde:four_sauve", text: "Ysabeau et Colas sont assis côte à côte sur le seuil de leur maison, rue des Potiers, en habits de noce noircis. Ils regardent la lézarde. « On le rebâtira, dit Ysabeau. On ne sait plus comment. On apprendra. » Colas ne répond pas. Il a pris sa main, celle qui a l'alliance, et il la tient." },
      "Les Noyers restent deux jours chez la tante : il faut aider. Ils monteront ensuite à Méridane pour la foire, comme chaque année. Bérarde t'embrasse, à ta surprise et à la sienne. Josse te donne une poignée de main et une miche. Girard dort, les souliers de Pâques aux pieds, ce qui dit l'état de la nuit.",
      "Line n'est nulle part. On la cherche un peu, pour la forme : elle sera au grenier, ou dans un arbre.",
      "« En route ! » dit Perrine, sous sa hotte, les yeux rouges, de la suie sur le nez. La tienne t'attend contre le mur ; elle te paraît plus lourde qu'hier. Tu ajustes les bretelles. Au bas de la rampe, la borne de la dix-neuvième lieue a perdu sa couronne de buis.",
    ],
    fx: { item: "pain" },
    choices: [{ label: "Descendre à la borne", to: "B05", big: true }] },
});

module.exports = {
  passages: P,
  extras: {
    people: {
      aubespin: { name: "Le sous-maître Aubespin", f: false, aka: ["Aubespin", "le sous-maître", "Melchior Aubespin"], face: { age: "adulte", skin: "clair", hair: "chatain", coif: "court", eyes: "amande", iris: "gris", nose: "fin", lips: "fines", shape: "ovale" },
        aspect: { allure: "trente ans, soigné, presque beau", habits: "un habit de voyage gris, sans un galon", voix: "douce, précise, qui sourit" }, qui: "Le sous-maître de la Guilde des Horlogers, en 541.", desc: "Melchior Aubespin, second de la Guilde des Horlogers-Jurés. Il a commandé douze cuves de verre à Roquebise." },
    },
    items: {
      ecuelle_cuite: { name: "Écuelle de ta main", kind: "divers", price: 0, aged: "ecuelle_vieille", agedSay: "Une écuelle de terre cuite, sans vernis, que soixante ans de terre ont à peine tachée. Quelqu'un l'a tournée qui ne savait pas tourner, et l'a mise là pour toi.", desc: "Une écuelle que tu as tournée à Roquebise, cuite au petit four de Tiennot. Elle durera plus que toi." },
      ecuelle_vieille: { name: "Écuelle de 541", kind: "divers", keep: true, price: 0, desc: "Une écuelle de terre cuite, tournée par {autre} soixante ans avant que tu la déterres." },
    },
    chronique: [
      { id: "roquebise", head: "An 541 · Roquebise", v: [
        { if: { has: "monde:four_sauve" }, text: "« Sept jours avant le Grand Midi, le feu prit à Roquebise au bois du Grand Four, par la faute des verriers. Le four fut préservé par les gens de la noce Hureau, et cuit encore. »" },
        { text: "« Sept jours avant le Grand Midi, le feu prit à Roquebise au bois du Grand Four, par la faute des verriers. Le four se fendit et ne fut jamais relevé : c'est de ce temps que les potiers du bourg cuisent chacun chez soi, et moins bien. »" }] },
      { id: "marge_noce", head: "En marge, de la main de Line", v: [
        { if: { has: "monde:chanson" }, text: "*L'air que je chante à l'établi, je l'ai appris ce soir-là, sur un banc, à la noce d'Ysabeau. Je n'ai jamais su de qui il était. Je l'ai demandé à la seule personne qui pouvait le savoir. Elle le tenait de moi.*" }] },
    ],
  },
};
