// L'Île Folle-Aiguille · act III, chapter III.1 followed by the doctor, more days towards Brisegrève: the helmswoman's
// tooth and her eyes, the cook's broth and his fingers, the old topman who dictates a letter before he dies. Wired in
// A3v_jours.
module.exports = {
  passages: {
    XN_lemerle: { act: "III", title: "La timonière", place: "cormorane", ambiance: "mer",
      text: [
        "Annick Lemerle a une joue de la taille d'une pomme et l'humeur d'un dogue à qui l'on a pris son os. Depuis trois jours, elle gouverne la Cormorane la mâchoire serrée, sans dire un mot, ce qui chez elle ne change rien, et sans manger, ce qui inquiète le maître-coq. C'est lui, d'ailleurs, qui vient chercher Victorine, en tablier. « La timonière a une dent, docteur. Elle refuse de quitter la barre. Elle dit que la dent peut attendre et que le vent, lui, n'attend pas. »",
        "Victorine monte sur la dunette avec sa trousse. Lemerle est à la roue, immobile, longue, sa tresse noire rabattue sur l'épaule, les yeux sur le grand hunier. Elle ne tourne pas la tête.",
        "« Ouvrez la bouche, dit Victorine. — J'ai le cap à tenir. — Tenez-le la bouche ouverte. Les marins y arrivent très bien, quand ils chantent. »",
        "Lemerle ouvre la bouche, d'un pouce, sans lâcher la roue. Une molaire du bas, noire, sur un abcès gros comme une noisette. Victorine a arraché des dents dans des granges, dans des églises, sur un tonneau de cidre, une fois sur le dos d'un âne qui avançait ; jamais à une femme debout qui gouverne un trois-mâts par vent de travers.",
      ],
      choices: [{ label: "L'arracher là, debout, entre deux coups de roue", test: { dom: "savoir", diff: 0, label: "Une molaire, au roulis" },
        win: { to: "XN_lemerle_dent" }, lose: { fx: { penche: { lemerle: -1 } }, to: "XN_lemerle_dent" } }] },
    XN_lemerle_dent: { act: "III", title: "La timonière", place: "cormorane", ambiance: "mer",
      text: [
        { outcome: "win", text: "Victorine attend le creux de la lame, quand le pont se pose un instant à plat, comme un plateau sur une table. Elle tire. La molaire vient d'un bloc, avec ses trois racines, et Lemerle n'a bougé que des sourcils. Le cap n'a pas varié d'un quart. Le maître-coq, qui regarde, applaudit sans bruit, du bout des doigts, comme à l'opéra." },
        { outcome: "lose", text: "La lame arrive en travers au moment où Victorine tire. La dent casse. Il faut reprendre les racines une à une, au davier, pendant que la Cormorane roule et que Lemerle, qui a lâché la roue d'une main pour s'agripper à l'habitacle, laisse le navire lofer de deux quarts. Le second crie depuis le passavant. Lemerle reprend la roue, crache le sang par-dessus la lisse, et regarde Victorine comme on regarde une maladresse qu'on n'oubliera pas." },
        "Victorine lui fait mordre une compresse d'eau-de-vie. Et c'est en lui tenant le menton, pour regarder la gencive à la lumière, qu'elle voit l'autre chose : un voile, très fin, dans l'œil gauche, comme la buée sur une vitre ; et dans l'œil droit, au fond, le début du même voile. Elle fait passer sa main devant l'œil gauche. La pupille la suit tard, mal, comme un chien qui a perdu l'odeur.",
        "Lemerle a compris qu'elle a compris. Elle ne dit rien pendant une longue minute. Le vent chante dans les haubans un air qui n'a ni début ni fin.",
        "« Les étoiles, dit-elle enfin, d'une voix pâteuse, à cause de la compresse. Celles de la quatrième grandeur, je ne les vois plus depuis l'an dernier. La troisième, les nuits claires. Je gouverne au compas, à la toile, au vent sur ma joue, au bruit de l'eau sous l'étrave. Je gouverne mieux que le second avec ses deux yeux. Vingt-deux ans que je tiens une barre. Si la capitaine l'apprend, je suis à terre, à Morlenc, à vendre du hareng sur le quai. Si vous le lui dites, je vous croirai honnête. Je vous en voudrai quand même. »",
      ],
      choices: [
        { label: "Garder le secret, et lui apprendre à ménager l'œil qui reste", to: "XN_lemerle_secret" },
        { label: "« Vous tenez la vie de quarante personnes. La capitaine le saura. »", to: "XN_lemerle_dit" },
      ] },
    XN_lemerle_secret: { act: "III", title: "La timonière", place: "cormorane", ambiance: "mer",
      text: [
        "Victorine lui dit ce qu'il faut savoir : pas de soleil en face sans le bord du chapeau, de l'eau de bleuet le soir, et surtout pas de ces collyres de foire qui achèvent en un mois ce que l'âge mettrait dix ans à faire. Elle lui dit aussi qu'il existe, à Morlenc, un vieux juif de la rue des Lunetiers qui abaisse les cataractes à l'aiguille, et qu'une fois sur deux on y voit après. Une fois sur deux, c'est beaucoup, en médecine. C'est presque de la magie.",
        "Lemerle écoute, les yeux sur le hunier. Puis elle hoche la tête, une seule fois, et ce hochement de tête vaut, chez elle, un serment devant notaire.",
        "Le soir, à la cambuse, il y a dans l'écuelle de Victorine un morceau de lard que personne d'autre n'a eu. Fargue jure ne pas savoir d'où il vient.",
      ],
      choices: [{ label: "Redescendre à l'infirmerie", fx: { flag: "lemerle:yeux_secret", penche: { lemerle: 1 } }, back: "A3v_jours" }] },
    XN_lemerle_dit: { act: "III", title: "La timonière", place: "cormorane", ambiance: "mer",
      text: [
        "La capitaine Ribaud écoute Victorine dans sa chambre, debout, sans l'interrompre. Puis elle reste longtemps à regarder la carte du Ponant, sous le compas à pointes sèches.",
        "« Je le savais, dit-elle. Je l'ai vue l'an dernier chercher Rigel. Rigel ! On voit Rigel depuis le fond d'un puits. » Elle repose le compas. « Je l'ai gardée parce qu'elle gouverne mieux que mon second et que je préfère une timonière aveugle à un timonier bavard. Maintenant que c'est dit à voix haute, je dois faire quelque chose. C'est ça, le malheur des choses dites à voix haute, docteur : elles obligent. »",
        "Le lendemain, Benoît Quémeneur double Lemerle à la barre pour les quarts de nuit. Elle ne proteste pas. Elle ne parle plus à Victorine, ni ce jour-là, ni les suivants ; quand elles se croisent sur le pont, la timonière regarde le hunier, comme si la médecin était une étoile de la quatrième grandeur.",
      ],
      choices: [{ label: "Redescendre à l'infirmerie", fx: { flag: "lemerle:yeux_dit", penche: { lemerle: -1 } }, back: "A3v_jours" }] },

    XN_fargue: { act: "III", title: "Le bouillon", place: "cormorane", ambiance: "nuit",
      text: [
        "Chaque soir, à la cloche de huit heures, le maître-coq descend à l'infirmerie un bouillon pour les malades, dans une marmite de cuivre qu'il porte à deux mains, enveloppée d'un torchon, comme un enfant de chœur porte le Saint-Sacrement. Il le sert lui-même, louche par louche, en annonçant chaque fois ce qu'il y a dedans avec une précision de pharmacien : « Os de bœuf salé, deux heures. Oignons. Une gousse d'ail, pas deux, l'ail échauffe. Un brin de thym de Varnèse, docteur, j'en ai pris un sac en souvenir de votre pays. »",
        "Ce soir-là, les malades dorment. Il reste du bouillon. Fargue en remplit deux écuelles, en tend une à Victorine, et s'assied sur un coffre, l'autre écuelle entre ses mains, comme un homme qui a fini sa journée et ne sait pas encore s'il a envie de dormir.",
        "Le fanal tangue au-dessus d'eux. Son ombre, à lui, se balance sur le bordé, plus grande que lui, et un peu en retard sur lui, comme si elle avait d'autres pensées.",
        "« Vous cuisinez comme un médecin, dit Victorine. — Et vous soignez comme une cuisinière, docteur. Au feu doux, en goûtant souvent. C'est le plus beau compliment que je sache faire. »",
      ],
      choices: [
        { label: "Regarder sa main gauche, qui tient l'écuelle", to: "XN_fargue_doigts" },
        { label: "Lui demander où il a appris à faire un bouillon pareil", to: "XN_fargue_cuisine" },
      ] },
    XN_fargue_doigts: { act: "III", title: "Le bouillon", place: "cormorane", ambiance: "nuit",
      text: [
        "Trois doigts. Le pouce, l'index, le majeur. À la place des deux autres, deux moignons lisses, cicatrisés depuis longtemps, rosés à la lumière.",
        "Il a vu qu'elle regardait. Il lève la main, la tourne, comme pour la lui montrer de plus près, avec la complaisance d'un homme qui raconte cette histoire-là depuis longtemps.",
        "« Un requin, docteur. Au large du cap des Tempêtes. J'avais laissé traîner la main dans l'eau, depuis la chaloupe. On est bête, à vingt ans. »",
        "Victorine prend la main, par habitude de métier, comme elle prendrait celle de n'importe qui. Les deux moignons s'arrêtent à la même hauteur, au ras de la deuxième phalange, en une seule ligne droite, nette comme le fil d'une règle. La peau s'est refermée par-dessus sans bourrelet ni cicatrice déchiquetée. Les requins, dans son expérience, ont moins de méthode.",
        "Elle lui rend sa main. « Vous avez eu de la chance. Le requin était soigneux. »",
        "Fargue sourit, finit son bouillon, et s'en va en sifflotant. Il oublie la marmite. Il revient la chercher une heure plus tard, ce qui ne lui arrive jamais.",
      ],
      choices: [{ label: "Laver les écuelles, et y penser", fx: { flag: "victorine:doigts" }, back: "A3v_jours" }] },
    XN_fargue_cuisine: { act: "III", title: "Le bouillon", place: "cormorane", ambiance: "nuit",
      text: [
        "« En prison », dit Fargue, comme on dit « à Morlenc ».",
        "Il raconte. Une forteresse dont il tait le nom, où la soupe était faite par un ancien cuisinier d'évêque condamné pour avoir empoisonné un chanoine, sans preuves, mais avec beaucoup de talent. Le cuisinier d'évêque l'avait pris pour aide, parce qu'il avait des mains de voleur, c'est-à-dire légères. Il lui avait appris le bouillon, la sauce, la patience, et l'art de mettre dans une soupe de prison un goût de dimanche avec trois os et une feuille de laurier volée au gouverneur.",
        "« Il disait : la cuisine, c'est de la médecine pour les gens qui ne sont pas encore malades. Vous voyez qu'on était faits pour s'entendre, vous et moi. » Il ramasse les écuelles. « Il est mort de vieillesse, en prison. Le seul de nous tous. Le chanoine, je crois, l'avait bien cherché. »",
        "Il s'en va avec la marmite. Victorine reste avec le goût du thym de Varnèse dans la bouche, et l'impression d'avoir été servie, avec une politesse parfaite, une histoire vraie à la place d'une autre.",
      ],
      choices: [{ label: "Retrouver les malades", back: "A3v_jours" }] },

    XN_guivarch: { act: "III", title: "Le vieux gabier", place: "cormorane", ambiance: "nuit",
      text: [
        "Le père Guivarc'h a soixante-trois ans, le plus vieil homme du bord, et il a signé pour ce voyage en mentant de dix ans sur son âge, ce que tout le monde savait, et en taisant ce qu'il avait au ventre, ce que personne ne savait. Il le sait, lui. Il est venu en mer pour ne pas mourir à terre, dans un lit, comme un bourgeois. Il est en train de réussir.",
        "Victorine le palpe. La chose est dure, grosse comme le poing, accrochée sous les côtes à droite ; elle a déjà jauni le blanc de ses yeux et creusé ses joues jusqu'à l'os. Une semaine. Peut-être deux. Il lit la réponse sur la figure de la médecin avant qu'elle l'ait formée.",
        "« Bon, dit-il. Alors j'ai une lettre à faire écrire. Je sais pas les lettres, docteur. Je sais les nœuds. »",
        "Il dicte, allongé dans le hamac de l'infirmerie, les yeux au plafond de planches où la lanterne fait danser une tache de lumière, ronde et jaune, qu'il suit du regard comme on suit la lune. La lettre est pour une femme de Morlenc, Marie-Josèphe Corlay, rue des Cordiers, qu'il a quittée il y a trente-quatre ans, un matin, sans rien dire, pour un embarquement de trois mois qui n'a jamais fini.",
        "« Écrivez : *Marie-Jo. Je te dois quarante livres et une paire de draps. Les quarante livres sont dans la bourse, avec cette lettre. Les draps, je les ai usés. Ton Yves.* » Il ferme les yeux. « C'est tout. »",
      ],
      choices: [
        { label: "Écrire exactement ce qu'il dit, et rien d'autre", to: "XN_guivarch_vraie" },
        { label: "« Il n'y a rien d'autre à lui dire, en trente-quatre ans ? »", to: "XN_guivarch_belle" },
      ] },
    XN_guivarch_vraie: { act: "III", title: "Le vieux gabier", place: "cormorane", ambiance: "nuit",
      text: [
        "Victorine écrit, de sa belle écriture d'ordonnance, les quatre lignes, la signature, et, sous la signature, une croix que le vieil homme trace lui-même, en tenant la plume comme un épissoir. Elle plie la lettre, la cachette à la cire verte de la pharmacie, et la glisse avec les quarante livres dans une bourse de toile qu'il serre contre sa poitrine.",
        "« Elle comprendra, dit-il. Elle a toujours compris ce que je ne disais pas. C'est pour ça que je suis parti, d'ailleurs. On ne peut rien cacher à une femme pareille. Même pas qu'on l'aime. »",
      ],
      choices: [{ label: "Veiller avec lui", fx: { flag: "guivarch:lettre_vraie" }, to: "XN_guivarch_mer" }] },
    XN_guivarch_belle: { act: "III", title: "Le vieux gabier", place: "cormorane", ambiance: "nuit",
      text: [
        "Le vieil homme ne répond pas tout de suite. La tache de lumière tourne au plafond. Dehors, la mer frappe le bordé, très doucement, comme quelqu'un qui demande à entrer et a tout son temps.",
        "Puis il parle. Il parle d'une fenêtre, rue des Cordiers, avec un pot de basilic. D'un bal à la Saint-Jean, où il lui a marché sur les pieds quatorze fois, elle les avait comptés. D'une nuit où elle a ri si fort que les voisins ont tapé au mur, et de ce qu'elle avait dit pour le faire rire, lui, qu'il a gardé trente-quatre ans et qu'il dit maintenant, une fois, à voix basse, et que Victorine écrit sans rien en changer, parce qu'on ne retouche pas ce genre de phrase.",
        "La lettre fait trois pages. Il la signe d'une croix, puis il demande qu'on ajoute en bas, en petit : *Les quarante livres sont pour les draps.* « Elle aime que les comptes soient justes. »",
        "Victorine cachette la lettre. Ses mains tremblent un peu. Elle met ça sur le compte du roulis.",
      ],
      choices: [{ label: "Veiller avec lui", fx: { flag: "guivarch:lettre_belle" }, to: "XN_guivarch_mer" }] },
    XN_guivarch_mer: { act: "III", title: "L'immersion", place: "cormorane", ambiance: "mer",
      text: [
        "Yves Guivarc'h meurt quatre jours plus tard, un peu avant l'aube, à l'heure où l'on change le quart, pendant que la cloche pique huit coups. Il les compte, les lèvres remuant. Au huitième, il s'arrête de compter.",
        "On le coud dans son hamac, avec deux boulets aux pieds. Le voilier, selon l'usage, passe le dernier point à travers le nez, pour s'assurer, et Victorine, qui sait qu'il est mort, laisse faire, parce que les usages aussi sont une forme de soin.",
        "La capitaine lit l'office, debout à la coupée, tête nue. La mer est d'huile, grise, sans une ride, et le ciel au-dessus est de la même couleur, si bien qu'on ne sait plus où finit l'un et où commence l'autre, et que la planche, quand on la bascule, semble verser le vieil homme dans le ciel. Le hamac glisse, entre dans l'eau sans un bruit, et descend, longtemps visible, une forme blanche qui s'éloigne dans le vert, puis dans le noir, toujours plus lente, comme si au fond quelque chose la retenait par la main pour la faire attendre.",
        "Victorine garde la bourse, la lettre et les quarante livres dans la poche où l'on met les choses qu'on ne prête pas. Rue des Cordiers, à Morlenc. Elle a promis.",
      ],
      choices: [{ label: "Redescendre, et ranger le hamac vide", back: "A3v_jours" }] },
  },
  extras: {
    people: {
      guivarch: { name: "Yves Guivarc'h", aka: ["le père Guivarc'h", "le vieux gabier"], f: false,
        qui: "Le plus vieil homme du bord, soixante-trois ans, qui a menti de dix ans sur son âge pour signer." },
    },
  },
};
