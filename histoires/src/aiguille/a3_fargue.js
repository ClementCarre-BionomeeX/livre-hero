// L'Île Folle-Aiguille · act III, chapter III.2 followed by the cook (second reading only): the Sargasso calms from the
// inside. Fargue counts his men on three fingers, sounds the novice in the galley (and hears a « rat » in the sail
// locker), knows the pilot knows him, plays chess with the baron, asks the doctor about his daughter, writes a letter he
// will not send. His choices are read on the island: who he spared, who he silenced, what he let the child keep.
var JOURS = [{ seen: "A3f_cambuse" }, { seen: "A3f_brousse" }, { seen: "A3f_echecs" }, { seen: "A3f_eau" }, { seen: "A3f_medecin" }];
module.exports = {
  passages: {
    A3f_debut: { act: "III", title: "La Chanson", place: "sargues", ambiance: "nuit", second: true,
      text: [
        "Lucien Fargue ne dort pas pendant les calmes. Personne ne dort, mais lui, au moins, il a des raisons.",
        "Il s'assied la nuit sur un rouleau de cordage, à l'avant, une pipe éteinte entre les dents, et il compte. Il compte sur les doigts de sa main gauche, ceux qui lui restent, et sur ceux qui lui manquent, par habitude. Isidore Lagadec, qui était de la Maraude, qui a peur de lui, et qui le suivrait en enfer pour ne pas y aller seul. Ulric Malandain, qui n'a peur de rien, et qui le suivrait n'importe où pourvu qu'il y ait quelqu'un à frapper au bout. Coquerel, qui rit. Boucaut, qui suit celui qui gagne.",
        { if: { marin: "gabet" }, text: "Gabet, qui lui doit la vie, et le lui fait payer en grimaces." },
        { if: { has: "fargue:marjolaine" }, text: "Marjolaine Cotentin, qui hait le baron pour une montre et une corde, et qui a dit oui à Morlenc, sur le quai, avec des larmes de rage." },
        "Il compte les autres, ensuite. Gobert, Lemerle, Fréville : jamais. Daguenet, Rivoal, Tarlet, le petit Jules : peut-être. Le peut-être, c'est tout le métier.",
        "Il fait le compte trois fois. Il trouve chaque fois le même chiffre. Il suffit. Il suffira, si les peut-être penchent du bon côté au bon moment. C'est pour cela qu'il fait la soupe.",
      ],
      choices: [{ label: "La marmite", to: "A3f_jours" }] },

    A3f_jours: { act: "III", title: "La marmite", place: "sargues", hub: true, noLead: true, backName: "la cambuse", ambiance: "mer", second: true,
      text: [
        { first: true, text: "La cambuse est la seule pièce du navire où il fait plus chaud que dehors, et c'est là que tout le monde vient. On y vient pour un quignon, une tasse de café, une chanson, un mot. Fargue donne à chacun ce qu'il est venu chercher, et un peu plus. Le surplus, c'est l'investissement." },
        { again: true, text: "Le fourneau ronfle. La soupe bout. Le navire attend le vent." },
      ],
      choices: [
        { label: "Parler à Petit-Jules, dans la cambuse", to: "A3f_cambuse", hide: { seen: "A3f_cambuse" } },
        { label: "Regarder le pilote", to: "A3f_brousse", hide: { any: [{ seen: "A3f_brousse" }, { not: { has: "brousse:abord" } }] } },
        { label: "Monter jouer aux échecs avec le baron", to: "A3f_echecs", hide: { seen: "A3f_echecs" } },
        { label: "Assister à la distribution de l'eau", to: "A3f_eau", hide: { seen: "A3f_eau" } },
        { label: "Descendre un bouillon à la médecin", to: "A3f_medecin", hide: { seen: "A3f_medecin" } },
        { label: "Éplucher des oignons, seul, une nuit sans sommeil", to: "XH_nuit", hide: { seen: "XH_nuit" } },
        { label: "S'asseoir près de Malandain, qui aiguise son couteau", to: "XH_malandain", hide: { seen: "XH_malandain" }, if: { count: JOURS, min: 1 }, why: "Malandain n'a encore rien demandé." },
        { label: "Monter un café à la gabière, sur le beaupré", to: "XH_marjolaine", hide: { seen: "XH_marjolaine" } },
        { label: "Servir une soupe à Lagadec, qui boit tard", to: "XH_lagadec", hide: { seen: "XH_lagadec" } },
        { label: "Recevoir la médecin, qui cherche des citrons", to: "XH_choucroute", hide: { seen: "XH_choucroute" }, if: { count: JOURS, min: 2 }, why: "Les gencives ne saignent pas encore." },
        { label: "Écouter la bordée murmurer contre l'oiseau mort", to: "YB_f_oiseau", hide: { seen: "YB_f_oiseau" } },
        { label: "Le vent revient", to: "A3f_lettre", big: true, if: { count: JOURS, min: 3 }, why: "Le calme dure encore." },
      ] },

    A3f_cambuse: { act: "III", title: "Le novice", place: "cormorane", ambiance: "nuit", second: true,
      text: [
        { if: { not: { has: "fargue:epargne_jules" } }, text: "Petit-Jules s'assied sur le tabouret, à ses pieds, comme tous les soirs. Fargue lui parle de la fin du voyage, de l'argent, des deux bords qu'il faudra choisir. Il ne lui demande rien. Il lui dit les choses avant. C'est la méthode : on ne recrute pas un garçon, on le laisse se recruter lui-même, et il vous en aime d'autant plus qu'il croit avoir choisi." },
        { if: { has: "fargue:epargne_jules" }, text: "Ce n'est pas Jules qui est assis sur le tabouret, ce soir. C'est Lagadec. Le petit, Fargue l'a laissé en dehors, à Morlenc, et il s'y tient : il le renvoie se coucher chaque fois qu'il traîne trop près des marmites. Il parle à Lagadec des deux bords, de l'argent, de l'heure." },
        "Au milieu d'une phrase, dans la cloison, du côté de la soute aux voiles, quelque chose tinte. Un petit bruit de métal, un coude contre la tôle du tuyau. Puis plus rien.",
        "Fargue se tait. Il connaît tous les bruits de ce navire. Les rats ne portent pas de coudes.",
        "Il sait qui Gobert a envoyé curer le tuyau, cet après-midi.",
      ],
      choices: [
        { label: "Aller voir dans la soute", to: "A3f_soute" },
        { label: "« Un rat. » Et continuer, en choisissant mieux ses mots", fx: { flag: ["complot:entendu", "fargue:laisse_entendre"] }, to: "A3f_cambuse_fin" },
      ] },
    A3f_soute: { act: "III", title: "La soute aux voiles", place: "cormorane", ambiance: "nuit", second: true,
      text: [
        "Fargue ouvre la trappe de la soute aux voiles, une lanterne à la main. Entre deux rouleaux de toile, collé{joueur:e} au tuyau, noir de suie de la tête aux pieds, il y a l'enfant du Fanal. Les yeux grands ouverts. L'enfant ne respire plus. L'enfant a tout entendu.",
        "Fargue le regarde longtemps. Il voit l'enfant, et il voit, derrière, un autre enfant, il y a vingt et un ans, un garçon qui boitait, sur un pont, la nuit de la Miséricorde, et qui regardait avec les mêmes yeux ce qu'il n'aurait pas dû voir. Il avait dit à ce garçon-là : tu n'as rien vu. Le garçon avait hoché la tête. Il n'a jamais rien dit, en vingt et un ans. Il en a fait un aubergiste.",
      ],
      choices: [
        { label: "« Tu as fini le tuyau ? Va te laver. Tu n'as rien entendu. »", fx: { flag: ["complot:entendu", "fargue:epargne_mousse"] }, to: "A3f_soute_fin" },
        { label: "Le prendre par le col et lui dire, très doucement, ce qui arrive aux mousses qui parlent", fx: { flag: ["complot:entendu", "fargue:menace_mousse"] }, to: "A3f_soute_fin" },
      ] },
    A3f_soute_fin: { act: "III", title: "La soute aux voiles", place: "cormorane", ambiance: "nuit", second: true,
      text: [
        { if: { has: "fargue:epargne_mousse" }, text: "L'enfant sort de la soute sans un mot, en le frôlant, et Fargue le regarde partir vers l'avant, noir comme un ramoneur, droit comme un piquet. Il sait que l'enfant ira trouver la capitaine, ou la médecin. Il le laisse faire. Une capitaine qui sait n'est pas plus dangereuse qu'une capitaine qui se doute ; elle est seulement plus prudente, et la prudence fait perdre du temps à ceux qui l'ont. Et puis, l'enfant du Fanal, il ne veut pas qu'on lui fasse de mal. Il l'a décidé à Morlenc. C'est une décision qu'il n'a pas les moyens de prendre, et il la prend quand même." },
        { if: { has: "fargue:menace_mousse" }, text: "L'enfant tremble sous sa main, sans pleurer. Fargue lui dit, très doucement, sans méchanceté, comme on explique une recette, ce qu'on fait aux mousses qui parlent, sur certains navires, et comment on les retrouve, et dans quel état. Puis il le lâche, lui essuie la joue de son pouce, laisse une trace blanche dans la suie, et lui sourit. « Va te laver. Je t'aime bien, tu sais. Ne m'oblige pas. » L'enfant part. Fargue reste seul dans la soute aux voiles, la lanterne à la main, et il a honte, pour la première fois depuis longtemps, et la honte a le goût exact de ce qu'il a dit au garçon qui boitait, il y a vingt et un ans." },
      ],
      choices: [{ label: "Retourner à la cambuse", to: "A3f_cambuse_fin" }] },
    A3f_cambuse_fin: { act: "III", title: "La cambuse", place: "cormorane", ambiance: "nuit", second: true,
      text: [
        "Il récure ses marmites jusqu'à minuit, en chantant à mi-voix, plus juste que jamais.",
      ],
      choices: [{ back: "A3f_jours" }] },

    A3f_brousse: { act: "III", title: "Le pilote", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Fargue l'a reconnu le premier jour, sur la passerelle de Brisegrève, sous la barbe blanche et les cheveux blancs et les dix-neuf ans de cachot : Nathanaël Brousse, le pilote de la Maraude, celui qui savait lire les aiguilles. Celui qu'ils ont laissé sur le récif, une nuit, avec une balle dans le ventre, parce qu'il n'y avait de place que pour trois sur la planche.",
        "Il ne l'a pas regardé une seule fois depuis. Il ne le regardera pas. Mais il sait, à la façon dont le pilote baisse la tête quand il passe avec sa marmite, que Brousse l'a reconnu aussi, à la voix, au premier couplet.",
        "Un homme qui vous reconnaît, sur un navire, c'est un homme qui parle un jour. La nuit, en pleine mer, quand tout le monde dort sur le pont, il est très facile de tomber.",
      ],
      choices: [
        { label: "Aller lui parler, la nuit, à la lisse", to: "A3f_brousse_parle" },
        { label: "Attendre une nuit sans lune", fx: { flag: "fargue:tue_brousse", perte: "brousse" }, to: "A3f_brousse_nuit" },
        { label: "Le laisser vivre, et ne rien faire", fx: { flag: "fargue:laisse_brousse" }, to: "A3f_brousse_fin" },
      ] },
    A3f_brousse_parle: { act: "III", title: "Le pilote", place: "sargues", ambiance: "nuit", second: true,
      text: [
        "La nuit, Fargue s'accoude à la lisse de bâbord, à côté de lui, sans un mot. Ils regardent les herbes, qui luisent sous les étoiles comme une prairie de cuivre. Longtemps.",
        "« Nathanaël, dit enfin Fargue.",
        "— La Chanson. » Brousse ne tourne pas la tête. « Vingt et un ans. Tu as grossi.",
        "— Toi, tu as maigri. On ne peut pas tout avoir. » Un temps. « Je ne savais pas que tu avais survécu au récif. Je te jure que je ne le savais pas. Il n'y avait de place que pour trois.",
        "— Il y avait de la place pour quatre, dit Brousse. Le petit Hersant ne pesait rien. Tu as choisi. »",
        "Fargue ne répond pas. Puis : « Une part. Une part entière, de quartier-maître, quand ce sera fini. Et ta bouche fermée jusque-là. Tu as dix-neuf ans à rattraper, et l'argent rattrape très vite. »",
        "Le pilote se tait si longtemps que Fargue croit qu'il ne répondra pas. Puis : « Je veux autre chose. Je veux voir Dagrel. S'il est vivant, je veux le voir. S'il est mort, je veux voir sa tombe. Et je veux cracher dessus. Après, je me tairai. »",
        "Fargue rit, doucement. « Dagrel est mort, Nathanaël.",
        "— Alors ça ne te coûtera rien de me le montrer. »",
      ],
      choices: [{ label: "Lui tendre la main gauche, celle aux trois doigts", fx: { flag: "brousse:pacte" }, to: "A3f_brousse_fin" }] },
    A3f_brousse_nuit: { act: "III", title: "La nuit sans lune", place: "sargues", ambiance: "nuit", second: true,
      text: [
        "La nuit sans lune vient le neuvième jour. Le navire dort sur le pont, en tas, sous les tauds. Le pilote dort à part, comme toujours, à bâbord, contre la lisse, la tête sur son bras.",
        "Fargue ne fait rien lui-même. Il n'a jamais rien fait lui-même, quand il pouvait l'éviter ; c'est la différence entre un quartier-maître et un matelot. Il dit un mot à Malandain, au souper. C'est tout.",
        "Au matin, le pilote n'est plus à bord. On le cherche partout. On trouve son bonnet accroché à un taquet de la lisse de bâbord. Les herbes jaunes, sous la coque, n'ont pas bougé ; elles gardent ce qu'elles prennent. La capitaine fait lire une prière par Fréville. On dit qu'il était faible, qu'il avait le vertige, qu'il regardait trop l'eau. Le maître-coq fait une soupe aux poissons volants, ce soir-là, en l'honneur du mort, et tout le monde dit qu'elle est la meilleure du voyage.",
        "Il ne chante pas en la faisant. C'est la seule différence.",
      ],
      choices: [{ label: "Servir la soupe", to: "A3f_brousse_fin" }] },
    A3f_brousse_fin: { act: "III", title: "Le pilote", place: "sargues", ambiance: "mer", second: true,
      text: [
        { if: { has: "fargue:laisse_brousse" }, text: "Il laisse vivre le pilote. Il ne sait pas pourquoi. Il se dit que c'est par calcul, qu'un mort à bord pendant les calmes rendrait la capitaine nerveuse. Il sait que c'est faux." },
        "Le soir, Fargue regarde ses mains, la droite qui tient la louche, la gauche à qui il manque deux doigts. Il les a laissés dans une porte, une nuit, pour sauver quelqu'un. Il ne se souvient plus très bien de qui.",
      ],
      choices: [{ back: "A3f_jours" }] },

    A3f_echecs: { act: "III", title: "La partie", place: "cormorane", ambiance: "mer", second: true,
      fx: { meet: "claviere" },
      text: [
        "Le baron Clavières joue aux échecs comme il fait des affaires : en sacrifiant des pions avec élégance, et en rageant pendant trois jours quand on lui prend une pièce. Fargue joue comme il cuisine : avec patience, en goûtant chaque coup, sans jamais montrer qu'il a déjà mis le sel.",
        "Ils jouent dans la grand-chambre, fenêtres de poupe ouvertes sur les herbes, le baron en robe de chambre, Fargue en tablier. C'est le seul endroit du navire où un maître-coq s'assied devant un baron, et tous deux le savent, et tous deux en jouissent, chacun à sa manière.",
        "« Échec, dit Fargue.",
        "— Vous êtes un homme étonnant, Fargue. Vous avez lu, vous parlez bien, vous jouez mieux que mon notaire. Que faites-vous dans une cambuse ?",
        "— Je regarde les gens manger, monsieur le baron. C'est là qu'on les connaît. »",
        { if: { has: "fargue:echecs_gagne" }, text: "Le professeur Gaudrémont, deux cabines plus loin, réclame sa revanche chaque soir depuis Morlenc, et chaque soir Fargue monte jouer avec le baron à sa place. Le professeur appelle cela une trahison de classe, et il a parfaitement raison." },
        { if: { has: "fargue:echecs_perdu" }, text: "Pendant que le baron réfléchit, Fargue pense à une boîte d'acajou, deux cabines plus loin, et à une seconde aiguille montée sur un cercle gradué, qui sait quand la première ment." },
        "Le baron rit. Il bouge son roi. Fargue regarde l'échiquier, puis le coffre de fer vissé au plancher, puis la clef à la chaîne de montre.",
      ],
      choices: [
        { label: "« Et si ce que vous cherchez là-bas n'était pas de l'argent, monsieur le baron ? »", fx: { flag: "fargue:sonde_baron" }, to: "A3f_echecs_sonde" },
        { label: "Le laisser gagner, cette fois", fx: { regard: { claviere: "cordial" } }, to: "A3f_echecs_fin" },
      ] },
    A3f_echecs_sonde: { act: "III", title: "La partie", place: "cormorane", ambiance: "mer", second: true,
      text: [
        "La main du baron s'arrête au-dessus de sa tour. Une demi-seconde. Puis elle se pose.",
        "« Qu'est-ce que vous voulez dire, Fargue ?",
        "— Rien, monsieur le baron. Les gens de mer racontent des histoires. Ils disent qu'il y a, sur certaines îles, des choses qui valent plus que l'argent. Des papiers. Des livres. » Il pousse un pion. « Des choses qu'on paierait cher pour les avoir, ou plus cher encore pour que d'autres ne les aient pas. »",
        "Le baron le regarde longtemps, par-dessus l'échiquier. Puis il sourit, de son plus beau sourire. « Vous racontez bien, Fargue. Vous devriez écrire. » Il prend le pion. « Échec et mat, je crois. »",
        "Fargue regarde l'échiquier. C'est vrai. Il n'a pas vu venir le coup. C'est la première fois. Il se dit que l'homme d'en face, pour la première fois aussi, a eu peur, et que la peur rend certains hommes très intelligents.",
      ],
      choices: [{ label: "Saluer le vainqueur", to: "A3f_echecs_fin" }] },
    A3f_echecs_fin: { act: "III", title: "La partie", place: "cormorane", ambiance: "mer", second: true,
      text: [
        "Il range les pièces dans leur boîte, une à une, les blancs d'un côté, les noirs de l'autre. Le roi blanc en dernier. Il le tient un moment entre le pouce et l'index de sa main gauche, puis il le couche dans la boîte.",
      ],
      choices: [{ back: "A3f_jours" }] },

    A3f_eau: { act: "III", title: "La pinte", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Le neuvième jour, à la cuve d'eau, Ulric Malandain tend son gobelet une deuxième fois, et Gobert refuse, et le pont se tait. Fargue l'entend depuis la cambuse. Il sait ce qui va se passer dans une minute : Malandain va frapper, Gobert va tomber, la capitaine va sortir son pistolet, et tout ce qu'il a construit depuis Morlenc va se jouer trop tôt, ici, en plein calme, sur une pinte d'eau.",
        "Il sort de la cambuse en s'essuyant les mains.",
      ],
      choices: [
        { label: "Donner sa propre pinte à Malandain, en riant", fx: { penche: { tarlet: -1, rivoal: -1 }, flag: "fargue:pinte" }, to: "A3f_eau_fin" },
        { label: "Laisser Gobert frapper le premier, et compter qui le soutient", fx: { penche: { malandain: -1, daguenet: 1 }, flag: "fargue:compte" }, to: "A3f_eau_compte" },
      ] },
    A3f_eau_compte: { act: "III", title: "La pinte", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Il reste sur le seuil de la cambuse, les bras croisés. Gobert frappe le premier, du cabillot, à la tempe ; Malandain tombe à genoux, se relève, rugit. Six hommes se jettent entre eux. Fargue regarde lesquels : Daguenet, Fréville, Lemerle, Rivoal, Gobert lui-même, et la capitaine qui descend de la dunette, un pistolet à la main. Personne ne se jette du côté de Malandain. Pas même Coquerel. Pas même Lagadec.",
        "Malandain fait huit jours de fers. Fargue lui porte sa soupe tous les soirs, avec un morceau de lard, et un mot : « Pas encore. »",
        "Il a appris ce qu'il voulait savoir. Il paiera la leçon plus tard : Daguenet, qui hésitait, a vu ce jour-là que la capitaine avait un pistolet et le bras pour s'en servir.",
      ],
      choices: [{ label: "Retourner à la cambuse", to: "A3f_eau_fin" }] },
    A3f_eau_fin: { act: "III", title: "La pinte", place: "sargues", ambiance: "mer", second: true,
      text: [
        { if: { has: "fargue:pinte" }, text: "Malandain boit d'un trait, rend le gobelet, et retourne à l'avant sans un mot. Gobert le regarde partir, puis regarde Fargue, d'un regard de vieux chien qui a compris qu'on vient de lui sauver la vie et qui ne pardonnera jamais qu'on l'ait fait. Tarlet et Rivoal, eux, ont vu qu'un homme a donné son eau à un homme qui avait soif. Le soir, ils boivent leur pinte assis à côté de la cambuse." },
        "Fargue n'a pas soif. Il ne boit que du vin, a-t-il dit. Il a menti. Il a soif à en crever, toute la nuit.",
      ],
      choices: [{ back: "A3f_jours" }] },

    A3f_medecin: { act: "III", title: "Le bouillon", place: "cormorane", ambiance: "mer", second: true,
      text: [
        "Il descend un bouillon à la médecin, un soir, avec un morceau de pain blanc, et il s'assied sur le tabouret des malades sans y être invité. Il la regarde manger. Il parle de choses et d'autres. Puis il pose la question qu'il est venu poser, sans la regarder : une jeune fille de dix-neuf ans, la poitrine, le sang le matin, le soleil du sud. Est-ce que ça guérit ?",
        "Victorine Davrigny pose sa cuiller. Elle le regarde, de ses yeux gris de médecin, longtemps, et Fargue comprend qu'elle a compris de qui il parle.",
        "« Le soleil soulage, dit-elle. Il ne guérit pas. Il lui donnera un an, peut-être deux. Peut-être plus, si elle est heureuse. On ne sait jamais, avec le bonheur ; c'est le seul remède dont la Faculté ignore la dose. »",
      ],
      choices: [{ label: "Reprendre le bol vide", fx: { flag: ["victorine:lisette", "victorine:verite_fargue"] }, to: "A3f_medecin_fin" }] },
    A3f_medecin_fin: { act: "III", title: "Le bouillon", place: "cormorane", ambiance: "mer", second: true,
      text: [
        "Il remonte l'échelle. Sur le pont, la nuit est chaude, immense, étoilée jusqu'à l'eau. Il pense : un an, deux. Il pense à la maison blanche au bord de la mer, aux géraniums, à la viande tous les jours. Il pense que deux ans, cela vaut une île, et un baron, et un équipage, et quelques hommes de plus ou de moins.",
        "Il pense aussi que la médecin ne lui a pas menti, et qu'il faudra s'en souvenir, quand ce sera le moment de décider qui on garde.",
      ],
      choices: [{ back: "A3f_jours" }] },

    A3f_lettre: { act: "III", title: "La lettre", place: "sargues", ambiance: "nuit", second: true,
      text: [
        "La dernière nuit des calmes, Fargue écrit une lettre à la lueur du fourneau, sur une feuille de papier à beurre, au crayon.",
        "*Ma Lisette,*",
        "*Il fait chaud. Je t'en garde un peu dans un bocal, comme promis. Il y a ici des herbes jaunes sur la mer, à perte de vue, comme un champ de blé qu'on aurait noyé ; tu aimerais. Il y a des poissons qui volent. Il y a un professeur qui crie. Il y a un enfant qui me rappelle quelqu'un, et une médecin qui ne ment pas.*",
        "*Je rentrerai au printemps. Je t'emmènerai au soleil. Je ne te dirai jamais comment j'ai payé le voyage, et tu ne me le demanderas pas, parce que tu es ma fille et que tu sais déjà tout ce que je ne dis pas.*",
        "*Ton papa, qui chante.*",
        "Il plie la lettre en quatre, la relit, puis il ouvre le fourneau et la jette dedans. Il regarde le papier se tordre et noircir. Il n'a jamais envoyé une seule des lettres qu'il lui a écrites. Il en a écrit trois cents.",
        "Le matin, le vent revient, d'un coup, comme une porte qui claque.",
      ],
      choices: [{ label: "Le vent", to: "C3b_fin", big: true }] },
  },
  extras: {},
};
