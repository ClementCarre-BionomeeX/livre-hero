// Les Trois Clefs d'Aiguemorne · act V, the vote and the gesture. Back at the grille (hinge A5c_grille): what each
// quarter has given. The vote `sentence` (verite: the lantern; releve: the pen; silence: the Tongue; perpetuelle: the
// purse; tie: chaos), counted at A5c_urne (hinge). If the pen wins, a second vote `releve_qui` (main | oeil | voix;
// tie: elle). Then each goes to their own face of the plinth and, unseen, turns or holds back:
// monde:v:fer | monde:v:cendre | monde:v:sang = tourne | retenu. Hinge A5c_minuit, then the switch A5c_minuit_b:
// three keys turned → the voted ending (a5_fins) ; otherwise A5c_echec → F_large (if there is a way out) or F_mur.
var POSTE = function (m, o, v) { return [{ if: { role: "a5", is: "main" }, to: m }, { if: { role: "a5", is: "oeil" }, to: o }, { to: v }]; };
var TROIS = { all: [{ has: "monde:v:fer=tourne" }, { has: "monde:v:cendre=tourne" }, { has: "monde:v:sang=tourne" }] };
var SORTIE = { any: [{ has: "monde:a5:voie" }, { has: "monde:douce:alliee" }, { has: "monde:a5:comte" }, { all: [{ has: "monde:a5:foule" }, { has: "monde:a5:douairiere" }] }] };
var S = function (o) { return { scrutin: "sentence", is: o }; };
var Q = function (o) { return { scrutin: "releve_qui", is: o }; };
module.exports = {
  passages: {
    A5c_grille: { act: "V", title: "Devant la grille", place: "horloge_close", ambiance: "temple", charniere: true,
      text: [
        "Vous revenez à la grille l'un après l'autre, par trois côtés, comme on revient d'une commission.",
        "Vous vous regardez. Vous avez tous les trois la figure de gens qui viennent de dépenser quelque chose.",
        "**La trappe.**",
        { if: { all: [{ has: "monde:a5:q_main" }, { has: "monde:a5:q_voix" }] }, text: "Elle a tenu. Ils l'ont essayée à douze, et ils sont redescendus s'asseoir ; puis la Voix a parlé par le guichet, et le Syndic a donné, devant témoins, jusqu'au premier coup de minuit." },
        { if: { all: [{ has: "monde:a5:q_main" }, { not: { has: "monde:a5:q_voix" } }] }, text: "Elle a tenu. Ils l'ont essayée à douze, et elle tient encore ; mais le Syndic a dit « Montez », et l'on entend sous le plancher un bruit de caisses que l'on empile." },
        { if: { all: [{ not: { has: "monde:a5:q_main" } }, { has: "monde:a5:q_voix" }] }, text: "Elle a cédé. Il y a eu des casques sur le palier. Puis une voix cordiale a crié d'en bas que l'on avait donné jusqu'au premier coup de minuit, et qu'un marché était un marché ; les casques sont redescendus, à regret, en laissant un homme au bord du trou." },
        { if: { all: [{ not: { has: "monde:a5:q_main" } }, { not: { has: "monde:a5:q_voix" } }] }, text: "Elle a cédé. Ils sont sur le palier. Entre eux et vous, il y a le chêne, que retient la ceinture d'un horloger nouée à un chandelier ; et l'on commence, de l'autre côté, à y donner de l'épaule." },
        "**La ville.**",
        { if: { has: "monde:a5:q_oeil" }, text: "Les quatre gonds du cadran sont nets. Si les vantaux reçoivent l'ordre de s'ouvrir, ils s'ouvriront tout grands, sur quarante toises de nuit." },
        { if: { not: { has: "monde:a5:q_oeil" } }, text: "Trois gonds du cadran sont nets. Le quatrième est resté dans sa gangue. Si les vantaux reçoivent l'ordre de s'ouvrir, celui de droite obéira ; l'autre fera ce qu'il pourra." },
        { if: { has: "monde:a5:foule" }, text: "Et il y a du monde pour regarder. La rampe est jaune de lanternes." },
        "**Les Clavaires.**",
        { if: { has: "monde:a5:comte" }, text: "Le comte de Brandelis est au pied de l'échelle, l'épée nue, entre les casaques rousses et vous. Il a tenu une parole. On en parlera dans sa maison." },
        { if: { has: "monde:a5:doyen=avec" }, text: "Le Doyen des Morts s'est assis sur le premier barreau, et il se repose avec une lenteur exemplaire." },
        { if: { has: "monde:a5:doyen=contre" }, text: "Le Doyen des Morts a redemandé les clefs, doucement, comme on redemande un livre prêté." },
        "Maître Crochemore a rejoint le seuil. Il tient sa montre ouverte, et il vous montre le cadran : la grande aiguille touche presque la petite.",
        "Derrière la grille, la plume s'est arrêtée.",
        "« Vous voilà, dit-elle. Je vous ai exposé quatre voies. Je vous tourne le dos, à présent : je ne veux pas lire sur vos figures. Votez comme on vote chez vous. »",
        "Chez vous, on vote dans un chapeau. Maître Crochemore ôte le sien, sans qu'on le lui demande, et le pose à l'envers sur la dalle, au pied du Juge.",
      ],
      choices: [{ label: "Chercher dans ta poche de quoi voter", to: "A5c_vote", big: true }] },

    A5c_vote: { act: "V", title: "Quatre objets", place: "horloge_close", ambiance: "temple",
      text: [
        "On a toujours voté, dans la maison Berlue, avec ce que l'on avait sur soi. Ce soir, chacun a la même chose : ce que la Recluse a nommé.",
        "Il y a ta lanterne, que tu peux souffler et poser dans le chapeau. Il y a une plume, qu'elle vous a passée entre deux barreaux, taillée de frais. Il y a ta clef, que tu peux y mettre, pour dire qu'elle servira à ôter la Langue. Et il y a ta bourse, plate comme elle l'a toujours été.",
        { if: { is: { reve: "atelier" } }, text: "Tu penses à une enseigne, rue des Ferronniers. Dix mille écus en achèteraient la rue." },
        { if: { is: { reve: "plombs" } }, text: "Tu penses à une ligne grise, sur un mur des Plombs, où quelqu'un des tiens compte les jours. Trois cents écus. Ou une cinquième Cause dite à voix haute, qui annulerait la dette et toutes les autres." },
        { if: { is: { reve: "nom" } }, text: "Tu penses à un registre, et à la femme qui en a tenu le double pendant quarante-trois ans, de cette main tachée d'encre que tu vois par la grille." },
        { if: { is: { reve: "large" } }, text: "Tu penses à la mer, que cette femme a suivie du doigt sur une carte pendant un hiver, la douzième année, avant de rendre la carte." },
        "Tu regardes les deux autres. Ils regardent leurs mains. Six semaines de routes, trois villes, trois clefs, et l'on en vient où la Douairière avait dit que l'on viendrait : *à la fin, mes enfants, il n'y a jamais qu'un chapeau.*",
        "Tu mets dans le chapeau, la main fermée :",
      ],
      choices: [
        { label: "Ta lanterne : qu'elle se lève, et qu'elle rende sa Sentence devant la ville", voix: "sentence", option: "verite", to: "A5c_urne" },
        { label: "La plume : qu'elle sorte sans bruit, et que l'un de vous s'asseye à sa place", voix: "sentence", option: "releve", to: "A5c_urne" },
        { label: "Ta clef : qu'elle sorte, et que le Bronze se taise pour toujours", voix: "sentence", option: "silence", to: "A5c_urne" },
        { label: "Ta bourse : qu'on la remette aux Clavaires, et qu'ils paient", voix: "sentence", option: "perpetuelle", to: "A5c_urne" },
      ] },

    A5c_urne: { act: "V", title: "Le chapeau de Maître Crochemore", place: "horloge_close", ambiance: "temple", charniere: true,
      text: [
        "Ta main sort du chapeau, vide.",
        "Tu attends que les deux autres aient fait de même. Il y a dans cette Chambre un silence de cent cinq ans, où l'on entend très bien un objet que l'on pose sur un autre.",
        "Maître Crochemore se baisse. Il prend son chapeau à deux mains, comme un plat, et il regarde dedans.",
      ],
      choices: [{ label: "Voir ce qu'il en tire", to: "A5c_depouille", big: true }] },

    A5c_depouille: { act: "V", title: "Le dépouillement", place: "horloge_close", branch: [
      { if: S("verite"), to: "A5c_dit_verite" }, { if: S("releve"), to: "A5c_dit_releve" }, { if: S("silence"), to: "A5c_dit_silence" },
      { if: S("perpetuelle"), to: "A5c_dit_perpetuelle" }, { to: "A5c_dit_chaos" }] },

    A5c_dit_verite: { act: "V", title: "La lanterne", place: "horloge_close", ambiance: "temple",
      text: [
        "Il en tire les lanternes. Il les pose sur la dalle, et il rend le reste sans le montrer.",
        "« La lanterne, » annonce-t-il, de la voix dont il annonce l'heure.",
        "Derrière la grille, la chaise a remué. Elle s'est retournée. On voit ses yeux gris, et, pour la première fois, quelque chose qui les dérange.",
        "« Vous me donnez à voir, dit-elle. Soit. » Elle se tait un moment. « J'aurais choisi la Langue. Je vous le dis maintenant que cela ne pèse plus : c'est ce que j'avais commandé à Loridan, le premier jour, et je n'ai pas changé d'avis en six semaines. Vous en avez eu un autre. Il est meilleur pour la ville, peut-être, et plus dur pour moi ; c'est ordinairement à ce signe que l'on reconnaît un bon jugement. »",
        "Elle lève sa main tachée d'encre et la regarde trembler, avec curiosité.",
        "« Notez que j'ai peur. Cela ne m'était pas arrivé depuis l'âge de vingt ans. Je trouve la sensation instructive. »",
      ],
      choices: [{ label: "Lui demander comment l'on tourne", to: "A5c_consigne", big: true }] },

    A5c_dit_releve: { act: "V", title: "La plume", place: "horloge_close", ambiance: "temple",
      text: [
        "Il en tire les plumes. Il les pose sur la dalle, et il rend le reste sans le montrer.",
        "« La plume, » annonce-t-il, de la voix dont il annonce l'heure.",
        "Derrière la grille, la chaise a remué. Elle s'est retournée.",
        "« Vous gardez donc le Juge, dit-elle, et vous changez le prisonnier contre un locataire. C'est une réforme. J'ai passé ma vie à en rendre de pareilles : on ôte la cruauté d'une chose, et l'on garde la chose. » Elle hoche la tête. « J'aurais choisi la Langue. Je vous le dis maintenant que cela ne pèse plus. Votre voie est plus douce pour la ville. Elle lui laisse les yeux fermés ; il y a des dormeurs qu'il vaut mieux ne pas secouer la nuit. »",
        "Elle pose les deux mains sur sa tablette.",
        "« Reste à savoir qui. Je ne choisirai pas : j'ai trop d'intérêt à la chose, puisque je lègue ma chaise. Elle est dure. On s'y fait en trois ans. Il y a de l'encre pour sept. »",
        "Maître Crochemore a déjà remis son chapeau à l'envers sur la dalle.",
      ],
      choices: [{ label: "Voter une seconde fois", to: "A5c_releve_qui", big: true }] },

    A5c_releve_qui: { act: "V", title: "Qui prendra la plume", place: "horloge_close", ambiance: "temple",
      text: [
        "Vous êtes trois. Il y a une main, qui sait ce que valent une serrure et un rouage. Il y a un œil, qui a vu la ville d'en bas et d'en haut. Il y a une voix, qui a plaidé ce matin au nom de sept Causes devant trente mille personnes.",
        "Qui s'assiéra là jugera Aiguemorne pendant sept ans, par écrit, dans une logette de six pieds sur quatre dont les deux autres garderont les clefs. On en sort quand on veut. On y rentre, parce que l'on a donné sa parole à deux amis et à une vieille femme.",
        "On a le droit de voter pour soi. On a le droit d'avoir peur que les autres le fassent.",
        "Tu as trois cailloux de la rampe au fond de ta poche, depuis ce matin : un gris, un noir, un rouge.",
      ],
      choices: [
        { label: "Le gris : la main", voix: "releve_qui", option: "main", to: "A5c_urne2" },
        { label: "Le noir : l'œil", voix: "releve_qui", option: "oeil", to: "A5c_urne2" },
        { label: "Le rouge : la voix", voix: "releve_qui", option: "voix", to: "A5c_urne2" },
      ] },

    A5c_urne2: { act: "V", title: "Trois cailloux", place: "horloge_close", ambiance: "temple", charniere: true,
      text: [
        "Le caillou tombe au fond du feutre avec un petit bruit mat.",
        "Tu attends les deux autres. Derrière la grille, la Recluse a repris sa plume ; elle écrit, pour s'occuper les mains, et tu te demandes ce que l'on peut bien écrire pendant que l'on vous choisit un successeur.",
        "Maître Crochemore reprend son chapeau.",
      ],
      choices: [{ label: "Regarder les cailloux", to: "A5c_releve_dit", big: true }] },

    A5c_releve_dit: { act: "V", title: "Le nom", place: "horloge_close", ambiance: "temple",
      text: [
        { if: Q("main"), text: "Du gris. « La main, » dit Maître Crochemore ; et il ajoute, plus bas, avec une fierté de maître dont l'apprenti passe compagnon : « Il y aura donc, dans cette boîte, quelqu'un qui sait comment elle est faite. Mon aïeul n'y avait pas pensé. »" },
        { if: Q("oeil"), text: "Du noir. « L'œil, » dit Maître Crochemore. Il regarde le chapeau, puis le Bronze, dont les yeux sont pleins. « Il lui en manquait. »" },
        { if: Q("voix"), text: "Du rouge. « La voix, » dit Maître Crochemore. Il a un petit salut. « Vous avez commencé la journée en plaidant sept Causes. Vous la finirez en les jugeant. On a vu des carrières plus lentes. »" },
        { if: { not: { any: [Q("main"), Q("oeil"), Q("voix")] } }, text: "Un gris, un noir, un rouge. Maître Crochemore les fait rouler dans sa paume. « Trois cailloux, trois couleurs. Chacun a désigné son voisin, ou soi-même ; cela revient à ne désigner personne. »" },
        { if: { any: [Q("main"), Q("oeil"), Q("voix")] }, text: "Les cailloux ont nommé quelqu'un, qui ne dit rien. Deux regards vont à cette figure, puis ailleurs : il y a des choses que l'on a voulues et que l'on n'ose pas avoir obtenues." },
        { if: { any: [Q("main"), Q("oeil"), Q("voix")] }, text: "« Bien, dit la voix derrière la grille. Je vous montrerai où sont les plumes neuves, et la façon de plier une Sentence pour qu'elle passe au tour. Le reste s'apprend seul. Je l'ai appris seule. »" },
        { if: { not: { any: [Q("main"), Q("oeil"), Q("voix")] } }, text: "Derrière la grille, il y a un bruit que vous n'aviez pas encore entendu : elle rit. C'est un rire bref, rouillé, de quelqu'un qui retrouve un outil au fond d'un tiroir. « Personne. Vous m'offrez donc ma propre chaise, avec la porte ouverte. Je l'accepte. J'ai soixante-cinq ans, j'ai mes habitudes, et il y a sept Causes dont je sais la fin. Je jugerai sept ans de plus. Mais je sortirai le dimanche ; et dans sept ans, vous me trouverez quelqu'un. »" },
      ],
      choices: [{ label: "Lui demander comment l'on tourne", to: "A5c_consigne", big: true }] },

    A5c_dit_silence: { act: "V", title: "La clef", place: "horloge_close", ambiance: "temple",
      text: [
        "Il en tire les clefs. Il les pose sur la dalle, et il rend le reste sans le montrer.",
        "« La Langue, » annonce-t-il. Sa voix a tremblé sur le mot. C'est l'ouvrage de son nom que l'on vient de condamner, et il l'a annoncé lui-même.",
        "Derrière la grille, la chaise a remué. Elle s'est retournée.",
        "« C'est ce que j'avais commandé, dit-elle. Je vous le dis à présent : je n'ai jamais voulu autre chose, depuis le premier billet porté à Loridan. J'ai craint, tout à l'heure, de vous l'avoir soufflé. Je vois à vos figures que vous y êtes venus par vos propres chemins, et qu'ils ont été plus longs que le mien. »",
        "Elle se lève. Elle porte la main, dans l'ombre au-dessus de sa tête, à quelque chose que vous ne voyez pas.",
        "« L'anche est là, dans la gorge, à portée de mon bras. Je l'ai dévissée cent fois, la nuit, pour le plaisir de savoir que je pouvais. Je l'ai toujours remise. Il fallait que quelqu'un d'autre le décide : une Recluse qui fait taire son Juge, c'est une désertion. Trois voleurs qui le lui prennent, c'est un événement. »",
        "Maître Crochemore a ôté ses bésicles. Il les essuie longuement.",
      ],
      choices: [{ label: "Lui demander comment l'on tourne", to: "A5c_consigne", big: true }] },

    A5c_dit_perpetuelle: { act: "V", title: "La bourse", place: "horloge_close", ambiance: "temple",
      text: [
        "Il en tire les bourses. Il les pose sur la dalle, l'une près de l'autre ; elles font, à plat, un bruit de linge.",
        "« La bourse, » annonce-t-il. Et il remet son chapeau sur sa tête, tout de suite, comme un homme qui ne veut plus qu'on s'en serve.",
        "Derrière la grille, la chaise a remué. Elle s'est retournée. Les yeux gris passent sur vous trois, sans hâte.",
        "« Je vous avais dit que je ne vous en voudrais pas. Je tiendrai parole : c'est une infirmité que j'ai. » Elle range ses feuilles, en fait une pile, pose l'encrier dessus. « J'aurais choisi la Langue. Cela ne pèse plus rien, et je vous le dis pour la tenue du dossier. Vous aurez trente mille écus. Comptez-les devant lui : il rogne. »",
        "Elle roule sa paillasse, d'un geste de quarante-cinq ans.",
        "« On me donnera un jardin, je pense. Le Syndic est un homme qui paie ce qu'il doit, par orgueil. Je n'ai jamais vu de jardin que par ouï-dire. Il paraît qu'il y pleut. »",
        "Maître Crochemore regarde le mur.",
      ],
      choices: [{ label: "Lui demander comment l'on tourne", to: "A5c_consigne", big: true }] },

    A5c_dit_chaos: { act: "V", title: "Trois objets", place: "horloge_close", ambiance: "temple",
      text: [
        "Il en tire trois objets, qui ne vont pas ensemble. Il les aligne sur la dalle.",
        "« Trois aiguilles sur trois heures, dit-il. Je m'y attendais. Je m'y suis fait à Brandelis. »",
        "Derrière la grille, la chaise a remué. Elle s'est retournée. Elle regarde la dalle, longuement, avec l'attention qu'elle doit donner aux pièces d'un procès.",
        "« Vous n'êtes pas d'accord. » Il y a dans sa voix quelque chose qui ressemble à du contentement. « J'ai gouverné quarante-cinq ans une ville qui l'était toujours, puisqu'elle n'avait qu'une bouche. Vous êtes trois, et vous voilà trois avis devant ma porte. C'est la première assemblée libre que je voie. Elle est petite. »",
        "« J'aurais choisi la Langue, je vous le dis pour mémoire. Cela ferait un quatrième avis, et ne vous avancerait pas. »",
        "Elle se lève.",
        "« Il vous reste une chose sur laquelle vous pouvez tomber d'accord sans rien décider : ouvrir. Tournez, si vous le voulez tous les trois. Ce qui arrivera ensuite, nous le verrons ensemble, vous, moi, et ceux qui regardent d'en bas. Je n'ai jamais rendu une Sentence sans l'avoir écrite. Il me plairait d'essayer une fois. »",
      ],
      choices: [{ label: "Lui demander comment l'on tourne", to: "A5c_consigne", big: true }] },

    A5c_consigne: { act: "V", title: "La consigne", place: "horloge_close", ambiance: "temple",
      text: [
        "« C'est simple, dit-elle, et cela ne se fait qu'une fois. »",
        "« Chacun va à son pan. La clef entre de toute sa tige. Vous attendez le premier coup de minuit : la cloche est au-dessus de nous, vous la sentirez dans vos genoux avant de l'entendre. Au premier coup, un quart de tour à droite. Franchement. Les trois pênes sont liés par une barre sous mes pieds ; si les trois poussent, elle cède, et tout le reste suit. Si deux poussent et qu'un se retient, elle tient, et il ne se passe rien. Rien du tout. Personne ne saura lequel. Le socle a été fait pour cela. »",
        "Elle a dit ces derniers mots plus lentement.",
        "« Je vous le répète parce que c'est la loi de cette machine, et que je n'en ai pas fait d'autre. Vous avez voté à trois. Vous tournez un par un. Il y a entre les deux la distance d'une conscience ; le bâtisseur l'a mesurée, et il l'a mise en bronze. Si l'une de ces trois mains, devant son pan, trouve qu'elle ne peut pas, qu'elle reste fermée. Je resterai. J'en ai l'usage. »",
        { if: { all: [{ not: { has: "monde:a5:q_main" } }, { not: { has: "monde:a5:q_voix" } }] }, text: "Le chêne de la porte a craqué. La ceinture de Maître Crochemore s'est tendue comme une corde de viole." },
        "Maître Crochemore lève sa montre. « Une minute, » dit-il.",
        "Vous vous séparez sans un mot. Il n'y a rien à dire que l'on n'ait dit en six semaines.",
      ],
      choices: [{ label: "Aller à ton pan", to: POSTE("A5m_geste", "A5o_geste", "A5v_geste"), big: true }] },

    // ───────────────────────────── The gesture, each alone ─────────────────────────────
    A5m_geste: { act: "V", title: "Le marteau", place: "horloge_close", ambiance: "temple",
      text: [
        "Tu t'agenouilles devant la rosace au marteau. Le bronze du socle est si froid qu'il te brûle le genou à travers le drap.",
        "La clef de Fer entre de toute sa tige, avec ce petit choc feutré que font les belles serrures quand elles reconnaissent quelqu'un. Tu as ouvert dans ta vie des portes de cave, des coffres, des cadenas de péniche. Tu n'avais jamais tenu une clef qui attendît ta permission.",
        "Tu ne vois pas les deux autres. Tu entends, à gauche, un froissement de robe ; à droite, rien.",
        "Sous tes genoux, la dalle a frémi. C'est la cloche, là-haut, qui prend son élan.",
        "Le premier coup de minuit tombe sur la Tour.",
      ],
      choices: [
        { label: "Tourner", fx: { set: { "monde:v:fer": "tourne" } }, to: "A5m_tourne", big: true },
        { label: "Garder le poignet droit, et ne pas tourner", fx: { set: { "monde:v:fer": "retenu" }, flag: "a5:retenu" }, to: "A5m_retient" },
      ] },

    A5m_tourne: { act: "V", title: "Un quart de tour", place: "horloge_close", ambiance: "temple",
      text: [
        "Tu tournes. Franchement, comme elle l'a dit.",
        "La clef rencontre quelque chose de lourd, de vivant, qui résiste à la manière d'une vanne ; puis ce quelque chose prend ton effort et l'emporte plus loin que ta main, dans l'épaisseur du socle, où il va chercher deux autres efforts que tu ne connais pas.",
        "Tu tiens. Le deuxième coup de minuit tombe.",
      ],
      choices: [{ label: "Attendre", to: "A5c_minuit", big: true }] },

    A5m_retient: { act: "V", title: "La main fermée", place: "horloge_close", ambiance: "temple",
      text: [
        "Ta main se ferme sur l'anneau, et reste où elle est.",
        "Tu fais le mouvement de l'épaule, pour toi, pour le bronze, pour personne. La clef ne bouge pas. Le fer est tiède, à présent, de la chaleur de ta paume.",
        "Tu as tes raisons. Elles tiennent en une ligne ou en six semaines, et tu es seul{e} à les connaître : le socle a été fait pour cela.",
        "Le deuxième coup de minuit tombe.",
      ],
      choices: [{ label: "Attendre", to: "A5c_minuit", big: true }] },

    A5o_geste: { act: "V", title: "La larme", place: "horloge_close", ambiance: "temple",
      text: [
        "Tu t'accroupis devant la rosace à la larme, le dos au pavillon. Tu sens derrière toi ce grand entonnoir de pierre, et au bout, à travers deux vantaux, la ville qui regarde un cadran.",
        "La clef de Cendre entre de toute sa tige, sans un bruit. Elle est noire, mate, légère : on l'a faite dans une ville où l'on enterre, et elle a la discrétion des choses de là-bas.",
        "Tu ne vois pas les deux autres. Tu vois le dos du Juge, et dans ce dos le trait fin d'une porte de six pieds.",
        "Sous tes talons, la dalle a frémi. C'est la cloche, là-haut, qui prend son élan.",
        "Le premier coup de minuit tombe sur la Tour.",
      ],
      choices: [
        { label: "Tourner", fx: { set: { "monde:v:cendre": "tourne" } }, to: "A5o_tourne", big: true },
        { label: "Garder le poignet droit, et ne pas tourner", fx: { set: { "monde:v:cendre": "retenu" }, flag: "a5:retenu" }, to: "A5o_retient" },
      ] },

    A5o_tourne: { act: "V", title: "Un quart de tour", place: "horloge_close", ambiance: "temple",
      text: [
        "Tu tournes. Franchement, comme elle l'a dit.",
        "La clef rencontre un poids, une chose qui résiste à la manière d'une rame dans un courant ; puis ce poids prend ton effort et l'emmène dans l'épaisseur du socle, où il va chercher deux autres efforts que tu ne vois pas.",
        "Tes yeux sont sur le trait de la porte, dans le dos du Bronze. Tu regardes ce trait comme tu n'as jamais rien regardé.",
        "Le deuxième coup de minuit tombe.",
      ],
      choices: [{ label: "Attendre", to: "A5c_minuit", big: true }] },

    A5o_retient: { act: "V", title: "La main fermée", place: "horloge_close", ambiance: "temple",
      text: [
        "Ta main se ferme sur l'anneau, et reste où elle est.",
        "Tu as passé six semaines à regarder pour les autres. Tu as vu trois villes, trois Clavaires, et ce soir la tienne, d'en haut. Tu sais ce que tu as vu. Les deux autres ont voté sur ce que tu leur en as dit ; il y a des choses qui ne passent pas dans un rapport.",
        "La clef ne bouge pas. Tes yeux restent sur le trait de la porte, dans le dos du Bronze.",
        "Le deuxième coup de minuit tombe.",
      ],
      choices: [{ label: "Attendre", to: "A5c_minuit", big: true }] },

    A5v_geste: { act: "V", title: "Le trèfle", place: "horloge_close", ambiance: "temple",
      text: [
        "Tu t'agenouilles devant la rosace au trèfle, dans ta robe noire, face au mur nu.",
        "La clef de Sang entre de toute sa tige. Elle est lourde, un peu vulgaire, dorée au pouce par un homme qui l'a beaucoup maniée en pensant à ses dettes. Elle tient dans la serrure comme une épée dans un fourreau qui n'est pas le sien, et qui lui va.",
        "Tu ne vois personne. Tu as parlé toute la journée : au greffe, aux cabinets, à la place, au guichet. Il n'y a plus d'auditoire. Le bâtisseur a voulu que la dernière chose que fasse la voix se fasse en silence.",
        "Sous tes genoux, la dalle a frémi. C'est la cloche, là-haut, qui prend son élan.",
        "Le premier coup de minuit tombe sur la Tour.",
      ],
      choices: [
        { label: "Tourner", fx: { set: { "monde:v:sang": "tourne" } }, to: "A5v_tourne", big: true },
        { label: "Garder le poignet droit, et ne pas tourner", fx: { set: { "monde:v:sang": "retenu" }, flag: "a5:retenu" }, to: "A5v_retient" },
      ] },

    A5v_tourne: { act: "V", title: "Un quart de tour", place: "horloge_close", ambiance: "temple",
      text: [
        "Tu tournes. Franchement, comme elle l'a dit.",
        "La clef rencontre une masse, qui résiste à la manière d'une foule que l'on veut convaincre ; puis cette masse prend ton effort et l'emporte dans l'épaisseur du socle, où il va chercher deux autres efforts que tu ne vois pas.",
        "Tu regardes le mur, et la ligne de suie que cent cinq ans de lanternes y ont laissée.",
        "Le deuxième coup de minuit tombe.",
      ],
      choices: [{ label: "Attendre", to: "A5c_minuit", big: true }] },

    A5v_retient: { act: "V", title: "La main fermée", place: "horloge_close", ambiance: "temple",
      text: [
        "Ta main se ferme sur l'anneau, et reste où elle est.",
        "Tu as porté la parole de trois personnes pendant six semaines, et tu as dit plus d'une fois ce que l'on attendait de toi. Devant ce mur, il n'y a que la tienne. Elle dit autre chose.",
        "La clef ne bouge pas. Tu regardes la ligne de suie.",
        "Le deuxième coup de minuit tombe.",
      ],
      choices: [{ label: "Attendre", to: "A5c_minuit", big: true }] },

    // ───────────────────────────── Midnight ─────────────────────────────
    A5c_minuit: { act: "V", title: "Minuit", place: "horloge_close", ambiance: "temple", charniere: true,
      fx: { until: 24 },
      text: [
        "Trois coups. Quatre.",
        "La cloche d'Aiguemorne pèse onze mille livres. Elle sonne au-dessus de la coupole, et chaque coup descend dans la Chambre comme une pierre dans un puits ; le Bronze en vibre, de ses genoux à ses yeux pleins, d'une longue note basse qui lui est propre et que la ville, depuis cent cinq ans, prend pour un soupir.",
        "Cinq. Six.",
        "Tu as la main sur ta clef. Tu ne vois personne.",
      ],
      choices: [{ label: "Sept", to: "A5c_minuit_b", big: true }] },

    A5c_minuit_b: { act: "V", title: "Le septième coup", place: "horloge_close", branch: [
      { if: { not: TROIS }, to: "A5c_echec" },
      { if: S("verite"), to: "F_verite1" },
      { if: { all: [S("releve"), { any: [Q("main"), Q("oeil"), Q("voix")] }] }, to: "F_releve1" },
      { if: S("releve"), to: "F_releve_elle1" },
      { if: S("silence"), to: "F_silence1" }, { if: S("perpetuelle"), to: "F_perp1" }, { to: "F_chaos1" }] },

    A5c_echec: { act: "V", title: "Rien", place: "horloge_close", ambiance: "temple",
      text: [
        "Huit. Neuf.",
        "Il ne se passe rien.",
        "Tu l'avais compris au septième coup, à ce que la clef te rendait dans la main : une résistance morte, de mur. Le socle n'a pas bougé. Aucun soufflet ne s'est bandé dans les profondeurs. Derrière le Juge, les deux vantaux du cadran sont restés joints, et le trait de la porte, dans son dos, est demeuré un trait.",
        "Dix. Onze. Douze.",
        "Le dernier coup s'en va longuement par la coupole. Puis il y a le silence ; et dans ce silence, montant de quarante toises, une rumeur que vous n'aviez jamais entendue : trente mille personnes, les yeux fermés, qui attendent une voix, et à qui rien ne vient.",
        "Vous vous relevez. Vous revenez devant la grille, par trois côtés. Vous ne vous regardez pas tout de suite.",
        "« Une main s'est retenue, dit la Recluse. Ou deux. Ou les trois : la machine ne distingue pas. » Sa voix est égale. « Je ne demande pas laquelle, et je vous défends de vous le demander ce soir. C'est le seul jugement qui se soit rendu ici sans moi depuis quarante-cinq ans. Je le reçois. Il est sans appel. »",
        "Elle se lève. Elle porte la main au-dessus de sa tête, dans l'ombre de la gorge du Bronze. On entend un pas de vis, long, gras, bien entretenu.",
        "« Tenez. » Entre deux barreaux, elle vous passe une lame de bronze large de trois doigts, longue comme un avant-bras, mince, courbe, dorée par cent ans de souffle. « La Langue. C'est ce que Loridan vous avait commandé le premier soir, pour trois mille écus. Vous l'avez. Le marché est rempli, et vous ne me devez rien. Sans elle, ni moi ni leur cylindre ne dirons un mot par cette bouche. Le reste est mon affaire. »",
        "Derrière vous, la porte a craqué.",
        "« Allez-vous-en, mes enfants. S'il y a par où. »",
      ],
      choices: [{ label: "Chercher par où", to: "A5c_echec_b", big: true }] },

    A5c_echec_b: { act: "V", title: "Par où", place: "horloge_close", branch: [
      { if: SORTIE, to: "F_large1" }, { to: "F_mur1" }] },
  },

  extras: {
    scrutins: {
      sentence: { title: "Ce que l'on fera de la porte ouverte", options: { verite: "La lanterne", releve: "La plume", silence: "La Langue", perpetuelle: "La bourse" }, tie: "chaos", tieSay: "Trois objets dans un chapeau, qui ne vont pas ensemble.", secret: true },
      releve_qui: { title: "Qui prendra la plume", options: { main: "La main", oeil: "L'œil", voix: "La voix" }, tie: "elle", tieSay: "Un gris, un noir, un rouge : personne.", secret: true },
    },
  },
};
