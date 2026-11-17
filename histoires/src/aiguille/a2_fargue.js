// L'Île Folle-Aiguille · act II, chapter II.1 followed by the cook (second reading only). Lucien Fargue's days of the
// fitting-out, from the inside: his daughter at the nuns', the money that is short, three silver coins that tell him who
// paid; the baron's study; the men he chooses; the pitted man he turns away (who will go to the Chevalier); the ship's
// boy who says « Hersant ». His choices here (spare the novice or not, win the gabière, keep the boy out of it) are read
// in the voyage and on the island.
module.exports = {
  passages: {
    A2f_aube: { act: "II", title: "La Chanson", place: "morlenc_cambuse", ambiance: "ville", second: true,
      text: [
        "Lucien Fargue se réveille avant l'aube, comme tous les jours depuis trente ans, dans une chambre de la Basse-Fosse qu'il loue à une veuve de pêcheur pour quatre sous la nuit : un lit, une chaise, une fenêtre sur une cour où sèche le linge des autres. Il se lave à l'eau froide, se rase avec soin, noue son foulard rouge devant un morceau de miroir. Il chantonne. Il chantonne toujours. Les gens croient que c'est de la gaieté. C'est une habitude, comme on garde la main sur la rampe d'un escalier qu'on connaît : pour ne pas tomber.",
        "Il a quarante-huit ans. Il a été mousse, matelot, gabier, quartier-maître, prisonnier, cuisinier. Il a tué des hommes, quatre de sa main dont il se souvient, et d'autres dont il ne se souvient pas, ce qui est pire. Il a sauvé une vie, une fois, en laissant deux doigts dans une porte. Il a une fille. Il lui reste, ce matin, onze livres et six sous.",
        "Sur la chaise, une lettre des Sœurs de la Basse-Fosse, arrivée hier. Il l'a lue trois fois. Il n'a pas besoin de la relire.",
      ],
      choices: [{ label: "Aller chez les Sœurs", to: "A2f_soeurs" }] },
    A2f_soeurs: { act: "II", title: "La porte bleue", place: "basse_fosse", ambiance: "ville",
      fx: { meet: ["marthe", "lisette"] },
      text: [
        "Sœur Marthe le reçoit au parloir, debout, les mains dans ses manches, comme on reçoit un créancier qu'on respecte. Elle ne lui demande pas d'argent. Elle lui dit les chiffres : trois mois de pension en retard, les remèdes du médecin de la Haute-Ville, le charbon. Puis elle lui dit ce que le médecin a dit, et cela n'a pas de chiffre.",
        "« Le soleil avant le printemps, monsieur Fargue. Le soleil du sud, et du repos, et de la viande. Sinon… » Elle n'achève pas. Elle n'a pas besoin. « Il y a trois piastres arrivées le mois dernier, avec le reste. Comme chaque hiver. La Providence. » Elle les pose sur la table, trois grosses pièces d'argent mat. « J'ai pensé que vous voudriez les voir. Elles ne passent nulle part ; il faut les vendre au poids. »",
        "Fargue regarde les piastres. Une croix aux bras évasés. Une ancre. *MISERICORDIA · SVPER · AQVAS.*",
        "Il les regarde longtemps. Puis il rit, d'un rire très doux, qui fait peur à Sœur Marthe sans qu'elle sache pourquoi.",
        "« Ignace, dit-il à mi-voix. Vieux voleur. Vieux voleur sentimental. »",
      ],
      choices: [{ label: "Monter voir Lisette", fx: { flag: "fargue:piastres" }, to: "A2f_lisette" }] },
    A2f_lisette: { act: "II", title: "Lisette", place: "basse_fosse", ambiance: "ville",
      text: [
        "Lisette coud près de la fenêtre aux géraniums. Quand elle le voit, son visage s'allume, et ses joues trop roses rosissent encore. Elle se lève trop vite ; elle tousse ; elle rit de sa toux.",
        "« Papa ! Tu pars ? Sœur Marthe dit que tu pars ! Sur un trois-mâts, vers le sud ! » Elle lui prend les mains, la droite et la gauche, celle aux trois doigts, qu'elle embrasse comme elle l'a toujours fait, sur les deux moignons lisses, pour les consoler. « Rapporte-moi du soleil. Dans un bocal. »",
        "Fargue s'assied à côté d'elle. Il lui raconte le navire, la capitaine qui ne sourit pas, le bosco qui jure, la cormorane dorée de la proue. Il la fait rire. Il chante, à mi-voix, la berceuse de sa mère, que sa mère à elle chantait aussi, avant. Lisette s'appuie contre son épaule. Elle est très légère. Elle est beaucoup trop légère.",
      ],
      choices: [
        { label: "« Je te rapporterai le soleil, et de quoi y vivre. Je te le jure. »", fx: { flag: "fargue:serment" }, to: "A2f_lisette_fin" },
        { label: "Ne rien promettre, et la tenir contre toi", fx: { flag: "fargue:silence_lisette" }, to: "A2f_lisette_fin" },
      ] },
    A2f_lisette_fin: { act: "II", title: "Lisette", place: "basse_fosse",
      text: [
        "Quand il redescend, il laisse sur la table du parloir les onze livres, les six sous, et les trois piastres. Sœur Marthe les compte, puis le regarde. « Et vous, monsieur Fargue ? Avec quoi partez-vous ?",
        "— Avec une idée, ma sœur. C'est léger, ça ne coûte rien, et ça rapporte quand on s'en sert bien. »",
        "Dans la rue des Tanneurs, il cesse de chantonner. Il marche longtemps, jusqu'au fleuve, et il regarde les navires. Il connaît le prix exact d'une vie, maintenant : le prix d'un voyage au soleil, et d'une maison blanche au bord de la mer, et de la viande tous les jours. C'est un prix qu'un cuisinier ne gagne pas en trente ans de ragoûts. C'est un prix qui se trouve, en revanche, sous la terre d'une île qu'il connaît.",
      ],
      choices: [{ label: "Aller chez le baron", to: "A2f_baron" }] },
    A2f_baron: { act: "II", title: "Le cabinet du baron", place: "haute_ville", ambiance: "chateau",
      fx: { meet: "claviere" },
      text: [
        "Le baron Clavières le reçoit dans son cabinet de l'hôtel, entre un globe terrestre et un portrait de son père, Hugo, peint en habit d'échevin, une main sur un coffre. Fargue regarde le portrait. Il se souvient de cet homme, vaguement : un soir, dans une taverne du port, il y a vingt-deux ans, un bourgeois gras qui comptait des pièces sur la table en face de Jéricho Dagrel. Le peintre l'a flatté.",
        "Le baron sait que Fargue est cuisinier. Il sait qu'un armateur ruiné le lui a recommandé comme « l'homme qui connaît la mer du Couchant mieux que les cartes ». Il ne sait pas le reste. S'il savait le reste, Fargue ne serait pas assis dans ce fauteuil ; il serait au bout d'une corde, sur la place de la Prévôté, et le baron dînerait tranquille.",
        "« Il me faut des hommes sûrs, dit le baron. Des hommes qui creusent et qui se taisent. La capitaine Ribaud prendra les siens. Je veux quelques-uns des miens. Vous m'en trouverez quatre. »",
        "Fargue sourit. « Des hommes qui creusent et qui se taisent, monsieur le baron, ça se trouve. Il suffit de bien les nourrir. »",
      ],
      choices: [
        { label: "Lui demander ce qu'il cherche vraiment, là-bas", to: "A2f_baron_livre" },
        { label: "Ne rien demander, et prendre l'argent des quatre hommes", fx: { gold: 200 }, to: "A2f_hommes" },
      ] },
    A2f_baron_livre: { act: "II", title: "Le cabinet du baron", place: "haute_ville", ambiance: "chateau",
      text: [
        "« Monsieur le baron cherche de l'argent, dit Fargue, l'air de rien, en époussetant son tricorne. Tout le monde cherche de l'argent. Mais on dit au port que monsieur le baron cherche aussi un livre. »",
        "Le baron se fige. Une demi-seconde. Puis il sourit, très largement.",
        "« Qui dit cela ?",
        "— Le port, monsieur le baron. Le port dit tout. Il ne sait rien, il dit tout. » Fargue remet son tricorne. « Moi, je ne sais que la cuisine. Mais si un jour on trouvait un livre, là-bas, sous la terre, entre deux sacs d'argent, je saurais à qui le rapporter. À qui il ferait le plus de plaisir. Et le plus de peine. »",
        "Le baron ne répond rien. Il ouvre un tiroir, en sort une bourse, la pose sur le bureau. Elle est plus lourde que celle qu'il avait préparée. Fargue la prend en s'inclinant.",
      ],
      choices: [{ label: "Sortir en chantonnant", fx: { gold: 400, flag: "fargue:livre_baron" }, to: "A2f_hommes" }] },
    A2f_hommes: { act: "II", title: "Les hommes", place: "basse_fosse", ambiance: "ville",
      fx: { meet: ["lagadec", "malandain", "coquerel", "boucaut"] },
      text: [
        "Il les trouve en deux jours, dans les tavernes de la Basse-Fosse, là où on trouve les hommes que personne ne cherche.",
        "Isidore Lagadec, d'abord, le Hareng, maigre comme un clou, aux yeux sans cils. Ils ont été à bord de la Maraude ensemble, dans la bordée de tribord ; Lagadec ne pose jamais de question, ce qui le rend précieux et inquiétant. Hilaire Boucaut, le voilier, de la même bordée, habile de ses mains et lâche de tout le reste ; il suivra le plus fort, et Fargue entend être le plus fort. Ulric Malandain, canonnier, une montagne de chair et de rancune, qui a tué un homme d'un coup de poing pour une question de place à table. Barthélemy Coquerel, enfin, qui rit de tout, même de ce qui ne fait pas rire, et surtout de ça.",
        "Quatre hommes. Avec Gabet, qu'il garde pour la veille, cinq. Il en faudrait huit, dix, pour tenir un trois-mâts. Les autres, il les trouvera à bord. Un équipage, c'est comme une soupe : il suffit de bien choisir le moment pour y mettre le sel.",
      ],
      choices: [{ label: "Passer à la Truie-qui-file, où quelqu'un t'attend", to: "A2f_sabran" }] },
    A2f_sabran: { act: "II", title: "Le Grêlé", place: "basse_fosse", ambiance: "ville", takes: "evening",
      fx: { meet: "sabran" },
      text: [
        "Sabran Quéru l'attend au fond de la taverne, sous l'escalier, dans sa redingote bleue de capitaine trop belle pour lui. Il a commandé deux verres. Il sourit, et sa dent d'or brille.",
        "« La Chanson, dit-il doucement. Lucien. Ça fait combien ? Vingt et un ans ? Tu n'as pas changé. Toujours ce foulard rouge. Toujours cette main. » Il désigne la main gauche du menton. « Tu sais qu'Ignace est mort ? Dans une auberge de falaise, au Ponant. Avec la carte. Et la carte, devine où elle est. »",
        "Fargue s'assied. Il ne touche pas au verre.",
        "« À bord de la Cormorane, dit Sabran. Avec toi. Comme c'est bien fait. » Il se penche. « On s'associe, Lucien. Comme au bon vieux temps. Tu fais ta petite mutinerie à bord ; moi, j'ai un brigantin, six hommes, et un ami qui a un navire plus gros. On se retrouve là-bas. On partage. »",
      ],
      choices: [
        { label: "Refuser, avec le mépris qu'il mérite", fx: { flag: "sabran:refuse_fargue" }, to: "A2f_sabran_non" },
        { label: "Faire semblant d'accepter, pour savoir qui est son ami", fx: { flag: ["sabran:refuse_fargue", "fargue:sait_chevalier"] }, to: "A2f_sabran_ruse" },
      ] },
    A2f_sabran_non: { act: "II", title: "Le Grêlé", place: "basse_fosse", ambiance: "ville",
      text: [
        "« Non, dit Fargue.",
        "— Non ?",
        "— Non, Sabran. Toi, tu as tué pour le plaisir, là-bas. Dans la chapelle. Moi, j'ai tué pour l'argent, et je m'en confesse. On n'est pas de la même église. » Il se lève. « Si je te revois sur mon chemin, je te tue. Pas pour l'argent. Pour le plaisir. Tu vois : tu m'auras appris quelque chose. »",
        "Sabran le regarde partir sans bouger. Il sourit toujours. « Tu le regretteras, Lucien, dit-il doucement dans son dos. J'ai un ami qui adore les gens qui refusent. Il les collectionne. »",
      ],
      choices: [{ label: "Sortir dans la nuit", to: "A2f_mousse" }] },
    A2f_sabran_ruse: { act: "II", title: "Le Grêlé", place: "basse_fosse", ambiance: "ville",
      text: [
        "Fargue sourit, prend le verre, boit. « Ton ami au navire plus gros. Qui est-ce ? »",
        "Sabran rit, ravi. « Le Chevalier. Alexis Quémeneur. Le frère du second de ta Cormorane, figure-toi. Une famille, ces Quémeneur ! L'un sert, l'autre se sert. » Il lève son verre. « Alors, on s'associe ? »",
        "Fargue repose le sien, vide, et se lève. « Non, Sabran. Je voulais seulement savoir à qui je devrais tirer dessus. Maintenant je sais. Merci pour le vin. »",
        "Sabran cesse de sourire. Fargue est déjà dehors.",
      ],
      choices: [{ label: "Sortir dans la nuit", to: "A2f_mousse" }] },
    A2f_mousse: { act: "II", title: "Hersant", place: "cormorane", ambiance: "mer",
      text: [
        "Le mousse arrive à bord le lendemain, avec le baron et la médecin de Varnèse. Fargue le voit de la cambuse, par la porte entrouverte : un enfant du Ponant, maigre, aux mains de corde, qui regarde la mâture comme on regarde une église.",
        "Le soir, il vient à la cambuse, attiré par la chanson. Ils viennent tous, attirés par la chanson. Fargue lui donne un bol de bouillon et lui demande son nom.",
        "« {joueur}. {joueur} Hersant. »",
        "Fargue sent le couteau s'arrêter sur l'oignon. Il ne l'arrête pas ; c'est sa main qui s'arrête, toute seule, comme une porte qui se ferme. Une seconde. Il la force à repartir. La peau de l'oignon tombe dans le seau en une seule spirale.",
        "Hersant. Lazare Hersant. Un gamin boiteux, sur le pont de la Maraude, qui pleurait la nuit dans les voiles, qui portait les seaux, qui avait reçu une balle dans le genou dans la chapelle, la nuit de la chapelle. Fargue l'avait porté sur son dos jusqu'à la chaloupe, après. Il avait oublié l'avoir porté. Il s'en souvient maintenant, d'un seul coup, du poids exact.",
        "Il regarde le mousse. Il voit le père dans le front, dans la façon de tenir le bol. Il sourit. « Hersant, dit-il. Un nom du Ponant, ça. Mange. »",
      ],
      choices: [
        { label: "Décider de garder ce mousse hors de tout ça", fx: { flag: "fargue:protege_mousse" }, to: "A2f_bord" },
        { label: "Décider qu'un mousse qui a vu la carte peut servir", fx: { flag: "fargue:use_mousse" }, to: "A2f_bord" },
      ] },
    A2f_bord: { act: "II", title: "Le pont", place: "cormorane", ambiance: "mer",
      fx: { meet: ["arnoult", "marjolaine"] },
      text: [
        "Les jours suivants, Fargue regarde l'équipage de la capitaine comme on regarde un étal au marché : en tâtant. Il sait qui boit, qui joue, qui doit, qui hait. Il le sait parce qu'ils viennent tous à la cambuse, le soir, et qu'un homme qui a chaud et le ventre plein parle plus qu'il ne voudrait.",
        "Il y a Petit-Jules, le novice, quinze ans, qui le regarde comme un saint et s'assied à ses pieds pour l'entendre chanter. Un garçon comme ça, on en fait ce qu'on veut. Il y a Marjolaine Cotentin, la gabière, dont le frère a été pendu pour la montre d'un échevin, et qui regarde le baron comme on regarde une cible. Il y a les autres, plus solides, plus vieux, à la capitaine depuis des années ; ceux-là, on ne les aura pas, et il ne faut pas essayer.",
      ],
      choices: [
        { label: "Commencer à gagner Petit-Jules", fx: { penche: { arnoult: -2 }, flag: "fargue:jules" }, to: "A2f_bord_marjo" },
        { label: "Laisser le petit en dehors de ça", fx: { flag: "fargue:epargne_jules" }, to: "A2f_bord_marjo" },
      ] },
    A2f_bord_marjo: { act: "II", title: "Le pont", place: "cormorane", ambiance: "mer",
      text: [
        "Un soir, sur le gaillard d'avant, Fargue s'assied à côté de Marjolaine, qui regarde la potence de la place de la Prévôté, très loin, au bout du quai. Il lui tend une pomme. Elle la prend sans le regarder.",
        "« Ton frère, dit Fargue. Pour une montre. » Il croque sa propre pomme. « Le monde est mal fait, ma belle. Il y a des gens qui pendent pour une montre, et d'autres qui ont des montres parce qu'ils ont pendu. Il arrive que la roue tourne. Il suffit de l'aider un peu. »",
        "Marjolaine tourne enfin la tête vers lui.",
      ],
      choices: [
        { label: "Lui dire, à mots couverts, ce que tu prépares", fx: { penche: { marjolaine: -2 }, flag: "fargue:marjolaine" }, to: "A2f_fin" },
        { label: "Lui souhaiter bonne nuit, et en rester là", to: "A2f_fin" },
      ] },
    A2f_fin: { act: "II", title: "Le dixième jour", place: "cormorane", ambiance: "mer",
      text: [
        "Le dixième jour, Fargue fait l'inventaire de sa cambuse et de son équipage, avec le même soin. Le lard, les pois, le biscuit. Lagadec, Boucaut, Malandain, Coquerel. Gabet pour demain. Et les autres, ceux qu'il gagnera à bord, à la soupe, au fil des semaines, quand la mer aura usé leur patience et que l'île sera en vue.",
        "Le soir, il écrit à Lisette une lettre qu'il ne postera pas. Il l'écrit pour lui. *Ma fille, je pars chercher le soleil. Je te le rapporterai. Ne crois pas ce qu'on te dira de moi, s'il arrive qu'on te dise quelque chose. Ou crois-le, si tu veux, mais aime-moi quand même. C'est tout ce que je te demande, et c'est beaucoup.*",
        "Il plie la lettre en quatre et la glisse dans son tablier, contre son cœur.",
      ],
      choices: [{ label: "La veille", to: "C2_fin", big: true }] },
  },
  extras: {
    places: {
      morlenc_cambuse: { ambiance: "ville", name: "La chambre de Fargue", map: "morlenc", region: "morlenc", x: 38, y: 74, desc: "Une chambre louée à une veuve de pêcheur, dans une cour de la Basse-Fosse : un lit, une chaise, du linge qui sèche." },
    },
  },
};
