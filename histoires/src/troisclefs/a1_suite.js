// Act I, the common thread (second half): after the flight. The Clef Tordue watched from across the water, the
// Douairière on her doorstep, what she left for each post, Loridan at dawn, and the chain of the Morne.
// Reads: monde:a1:fuite=propre, monde:a1:lettre_remise, monde:a1:lettre_gardee, monde:a1:epreuve, monde:a1:coup_vu,
// monde:a1:empreintes, monde:a1:itineraires. Sets: monde:a1:douairiere_prise, monde:cadenas:doute (if the letter was
// left for him). Personal: a1:siffle, a1:signalement.
var POSTE = function (m, o, v) { return [{ if: { role: "a1", is: "main" }, to: m }, { if: { role: "a1", is: "oeil" }, to: o }, { to: v }]; };

module.exports = {
  passages: {
    A1c_apres: { act: "I", title: "Le toit du lavoir", place: "basfonds", ambiance: "nuit", charniere: true,
      fx: { until: 23 },
      text: [
        "La maison a une règle pour les soirs où l'on se perd : on ne rentre pas, on se retrouve en face. En face de la Clef Tordue, de l'autre côté de la rue de la Morne, il y a le lavoir, et le lavoir a un toit plat, goudronné, bordé d'un muret, d'où l'on voit la porte charretière sans en être vu.",
        "Tu y montes par la gouttière. Le goudron est encore tiède du jour. Tu te couches à plat ventre contre le muret, et tu attends, en écoutant ton cœur redescendre.",
        "La ville haute siffle encore, très loin, de guérite en guérite. Ici, les Bas-Fonds dorment, ou font semblant. Sous la porte de la Clef Tordue passe un trait de lumière.",
      ],
      choices: [{ label: "Compter ceux qui arrivent", to: "A1c_bilan", big: true }] },

    A1c_bilan: { act: "I", title: "Trois sur un toit", place: "basfonds", ambiance: "nuit",
      text: [
        "Vous êtes trois sur le goudron. Personne ne manque. C'est la première chose qu'on vérifie, et on la vérifie des yeux, sans rien dire, parce que la voix tremblerait.",
        { if: { has: "monde:a1:fuite=propre" }, text: "Vous êtes sortis de l'impasse sans qu'un garde puisse jurer de vos figures. Le Cadenas a un mort, un billet, et trois ombres qu'on lui a décrites : c'est peu pour un homme qui aime les preuves.", else: "Vous êtes sortis de l'impasse à grand bruit. Vingt hommes du guet vous ont vus courir, de dos, de près ; demain il y aura sur les murs trois signalements, et ils seront bons." },
        { if: { has: "monde:a1:epreuve" }, text: "{qui:a1:main} tire de sa chemise un feuillet plié, noirci à la mine de plomb, où des lettres sortent en blanc : *…qu'il en soit ainsi à chaque Septaine, dans les mêmes termes…* Voilà ce que le vieil homme voulait remettre." },
        { if: { has: "monde:a1:coup_vu" }, text: "{qui:a1:oeil} montre entre deux doigts une pincée de poussière noire, vitreuse, qui crisse. Du mâchefer de forge. Celui qui a frappé en avait plein ses coutures." },
        { if: { has: "monde:a1:lettre_gardee" }, text: "{qui:a1:voix} a gardé la demi-feuille du mort, celle qui commence par *À Monsieur le Prévôt.* Elle est à vous, à présent, avec tout ce qu'elle pèse." },
        { if: { has: "monde:a1:lettre_remise" }, text: "{qui:a1:voix} a laissé sur l'établi, sous la main du mort, la demi-feuille qui commence par *À Monsieur le Prévôt.* Il l'a lue, à l'heure qu'il est." },
        "On a tué un vieil homme pour le faire taire, et l'on vous a fait venir pour que le crime ait des visages. Ceux qui ont arrangé cela ont une demi-journée d'avance, trois clefs, et des voitures.",
        "En bas, dans la rue, il y a un bruit de bottes.",
      ],
      choices: [{ label: "Regarder par-dessus le muret", to: "A1c_auberge" }] },

    A1c_auberge: { act: "I", title: "La porte de la Clef Tordue", place: "basfonds", ambiance: "nuit",
      text: [
        "Ils sont douze, avec des lanternes, et ils se rangent en demi-cercle devant la porte charretière sans faire plus de bruit qu'il ne faut. Le prévôt est au milieu. Il lève le poing pour frapper.",
        "La porte s'ouvre avant le coup.",
        "La Douairière est sur son seuil. Elle a mis son châle noir, celui des enterrements, et son trousseau pend à sa ceinture. Elle tient une chandelle, haut, de façon à voir les figures. Elle n'a pas l'air d'une femme qu'on réveille : elle a l'air d'une femme qui attendait une voiture.",
        "« Géraud Corbineau. Trente ans que tu passes devant ma porte en regardant ailleurs. Il fallait donc un mort. »",
        "« Il en fallait un, madame Berlue. » La voix lente monte jusqu'au toit, très nette, dans le silence de la rue. « Maître Balancier, le Remonteur. Ce soir, chez lui, d'un coup derrière la tête. On a vu monter trois personnes. On m'a écrit trois noms, qui sont de votre maison. »",
        "Elle ne bouge pas. Seule la flamme de la chandelle remue.",
        "« Symphorien. » Elle a dit le prénom tout bas ; vous l'entendez quand même. Puis, de sa voix de comptoir : « Mes trois enfants sont partis hier pour la mer, voir du pays. Tu peux fouiller le grenier, tu y trouveras trois paillasses froides. Et puisqu'il te faut quelqu'un des Rossignols, Géraud, tu as devant toi celle qui les a faits. J'ai soixante-huit ans, je sais ouvrir toutes les portes de cette ville, et je ne courrai pas. »",
        "Elle pose la chandelle sur la borne, et elle tend les poignets.",
        { if: { has: "monde:a1:lettre_remise" }, text: "Le prévôt ne les prend pas tout de suite. Il la regarde. « J'ai trouvé une demi-feuille, sous la main du mort. Elle m'était adressée. Elle ne parle pas de trois voleurs. » Un temps. « Je vous emmène, parce que j'ai un billet, un cadavre et des ordres. Mais je vous emmène aux Plombs, et non au cachot ; et je garde la demi-feuille dans ma poche, et non au greffe. Comprenez-le comme vous voudrez. »", else: "Le prévôt la regarde longtemps. « Vous les couvrez. » « Je les connais. Ce n'est pas la même chose, et tu le sais, puisque tu as amené douze hommes pour arrêter une vieille. » Il lui passe les fers lui-même, sans serrer." },
      ],
      fx: { flag: "monde:a1:douairiere_prise" },
      choices: [
        { label: "Siffler les trois notes de la maison, une fois, pour qu'elle sache", fx: { flag: "a1:siffle", ep: ["perso", 500] }, to: "A1c_siffle" },
        { label: "Ne pas bouger. C'est ce qu'elle veut, et c'est ce qui coûte", fx: { ep: ["perso", 500] }, to: "A1c_tais" },
      ] },
    A1c_siffle: { act: "I", title: "Trois notes", place: "basfonds", ambiance: "nuit",
      text: [
        "Trois notes, très bas, comme en sifflerait un oiseau de nuit. Douze gardes lèvent la tête vers tous les toits à la fois, et ne voient que du noir.",
        "Elle, elle n'a pas levé la tête. Mais ses épaules, sous le châle, se sont défaites d'un cran, comme celles de quelqu'un qui pose un fardeau ; et elle a souri au prévôt, d'un sourire dont il n'a pas su que faire.",
        "« Un rossignol, dit-elle. Il y en a encore, dans ce quartier. Allons, Géraud. J'ai de mauvaises jambes, et tes Plombs sont en haut. »",
      ],
      choices: [{ label: "La regarder s'en aller", to: "A1c_fifrelin" }] },
    A1c_tais: { act: "I", title: "Le muret", place: "basfonds", ambiance: "nuit",
      text: [
        "Tu ne bouges pas. Tu as les doigts dans le goudron et le front contre le muret, et tu ne bouges pas, parce qu'elle a dit *la mer* assez haut pour que vous l'entendiez, et que c'était un ordre.",
        "Elle part entre deux lanternes, droite, son trousseau sonnant à chaque pas. Au coin de la rue, elle se retourne vers sa maison. Elle regarde la porte, l'enseigne, la cheminée de travers. Elle ne regarde pas le lavoir. Elle a trop de métier pour cela.",
      ],
      choices: [{ label: "La regarder s'en aller", to: "A1c_fifrelin" }] },

    A1c_fifrelin: { act: "I", title: "Ce qu'elle a laissé", place: "basfonds", ambiance: "nuit",
      text: [
        "Quand la dernière lanterne a tourné le coin, quelque chose remue au bord du toit, et Fifrelin se hisse par la gouttière, un sac sur le dos. Il a les yeux rouges, et il vous tuerait si vous le lui faisiez remarquer.",
        "« Elle savait. Depuis la soupe. Elle a dit : *ce soir, on va me les prendre ou me prendre, et j'aime mieux que ce soit moi, j'ai l'âge.* Elle m'a fait monter vos affaires par la lucarne avant qu'ils cognent. » Il jette le sac sur le goudron. Vos trois baluchons en sortent, et l'or, compté.",
        "« Elle a dit aussi… » Il renifle, se reprend, et récite, les yeux au ciel, comme une leçon. « *Qu'ils aillent au bout. Les trois clefs, la Tour, tout. On ne sort des Plombs qu'en payant ou avec une grâce, je ne dois rien à personne, et il n'y a que le Bronze, à Aiguemorne, qui donne des grâces. Qu'ils se débrouillent pour qu'il m'en donne une.* Et puis elle a dit que si vous reveniez sans, elle vous reniait. Voilà. »",
        "Il fouille au fond du sac. « Et y a ça. Un pour chacun. Elle a écrit dessus, je sais pas lire. »",
      ],
      choices: [{ label: "Prendre le paquet qui porte ton poste", to: POSTE("A1c_don_main", "A1c_don_oeil", "A1c_don_voix") }] },
    A1c_don_main: { act: "I", title: "« À la main »", place: "basfonds", ambiance: "nuit",
      text: [
        "Un étui de cuir, long comme la paume, usé jusqu'à la trame. Dedans, sept crochets d'acier bleu, si fins qu'ils semblent dessinés à la plume, et dont les manches d'os ont pris la forme de deux doigts qui ne sont pas les tiens.",
        "Ce sont les siens. Ceux avec lesquels elle a ouvert, il y a quarante ans, la caisse du Mont-de-Piété, et dont toute la ville basse parle encore. Un billet, de sa grande écriture de cuisine : *À la main. Ils sont plus vieux que toi et ils en savent plus long. Écoute-les. Ne force jamais.*",
      ],
      fx: { item: "passe_douairiere" },
      choices: [{ label: "Les glisser dans ta chemise", to: "A1c_adieu_fifrelin" }] },
    A1c_don_oeil: { act: "I", title: "« À l'œil »", place: "basfonds", ambiance: "nuit",
      text: [
        "Une lorgnette de cuivre, à trois tirages, pas plus longue qu'un doigt quand elle est fermée. Le cuir en est neuf ; le verre, ancien, d'une eau parfaite.",
        "Tu la portes à ton œil. La citadelle te saute au visage : le rempart, une guérite, et un garde qui se gratte. Un billet, de sa grande écriture de cuisine : *À l'œil. Je l'ai prise à un capitaine de vaisseau qui regardait trop loin et pas assez près. Fais les deux. Compte toujours les portes avant les gens.*",
      ],
      fx: { item: "lorgnette" },
      choices: [{ label: "La glisser dans ta manche", to: "A1c_adieu_fifrelin" }] },
    A1c_don_voix: { act: "I", title: "« À la voix »", place: "basfonds", ambiance: "nuit",
      text: [
        "Une bague. Un anneau d'or pâle, lourd, avec un chaton d'agate où l'on a gravé en creux des armes : trois merlettes sur une bande, sous une couronne de vicomte.",
        "C'est un cachet. Appuyé dans la cire, il fait de n'importe quel papier la lettre d'une maison très ancienne, dont il ne reste, s'il faut en croire la légende de la Clef Tordue, que cette bague et une tante à l'hospice. Un billet, de sa grande écriture de cuisine : *À la voix. Mon second mari la portait. Il n'était pas vicomte, mais il le disait si bien que j'ai failli l'épouser pour cela. Un mensonge a besoin d'un objet. Ne le prête à personne.*",
      ],
      fx: { item: "cachet_merlettes" },
      choices: [{ label: "La passer à ton doigt, chaton en dedans", to: "A1c_adieu_fifrelin" }] },

    A1c_adieu_fifrelin: { act: "I", title: "Celui qui reste", place: "basfonds", ambiance: "nuit",
      text: [
        "« Et toi ? » demande quelqu'un.",
        "Fifrelin hausse une épaule, celle qui dépasse de sa veste. « Moi je reste. Faut quelqu'un pour tenir la maison. Faut quelqu'un pour lui monter la soupe, là-haut : aux Plombs, on mange ce que la famille apporte, et sa famille, c'est moi et trois courants d'air. » Il crache par-dessus le muret. « Et puis faut des yeux ici, pour quand vous reviendrez. Je saurai tout. Je sais toujours tout. »",
        "Il se redresse, et pendant une seconde il a l'air de ce qu'il est : un enfant de onze ans, sur un toit, à minuit, qui vient de perdre la seule grande personne qu'il ait eue.",
        "« Le monsieur aux gants gris vous attend au quai. Depuis une heure. Assis. Dans une barque. » Il a déjà une jambe par-dessus le muret. « Revenez avec les clefs. Ou revenez pas. »",
      ],
      fx: { leave: "fifrelin" },
      choices: [{ label: "Descendre au quai", to: "A1c_loridan", big: true }] },

    // ------------------------------------------------------------ Loridan at the quay
    A1c_loridan: { act: "I", title: "Une barque, et un homme assis", place: "basfonds", ambiance: "eau", backName: "la barque de Loridan",
      text: [
        { first: true, text: "Le quai est noir. La Morne y fait un bruit de langue. Tout au bout, amarrée à un anneau, il y a une barque à fond plat, et dans cette barque, sur le banc du milieu, très droit, un homme en drap noir qui a posé ses mains gantées sur ses genoux." },
        { first: true, text: "« Asseyez-vous. Vous faites pencher le bateau en restant debout. » Vespasien Loridan n'a pas tourné la tête. « J'ai appris pour Mme Berlue il y a un quart d'heure. Je vous attendais avant ; j'avais prévu que vous auriez besoin de quitter la ville. Je n'avais pas prévu pourquoi. »" },
        { first: true, text: "On lui dit pourquoi. On lui dit l'impasse, l'atelier, les quarante horloges, le vieil homme la joue sur son établi." },
        { first: true, text: "Il écoute sans un geste. À la fin, il ôte son gant droit, lentement, doigt après doigt, et se passe la main sur les yeux. C'est la première fois que vous lui voyez la main nue plus d'un instant. Elle tremble." },
        { first: true, text: "« Quarante et un ans qu'il montait cet escalier. » Sa voix de sacristie a perdu son égalité. « Qui va le lui dire ? »" },
        { first: true, text: "Personne ne répond. Il remet son gant, et redevient l'homme qui paie." },
        { again: true, text: "Loridan attend, les mains sur les genoux. La barque bouge à peine." },
      ],
      fx: { clue: "c_dire" },
      choices: [
        { label: "« Le dire à qui ? »", to: "A1c_l_qui", once: true },
        { label: "« Vous le connaissiez. »", to: "A1c_l_connu", once: true },
        { label: "« Qui l'a tué ? »", to: "A1c_l_tue", once: true },
        { label: "« Et la Douairière ? »", to: "A1c_l_douairiere", once: true },
        { label: "« On part. Dites-nous par où. »", to: "A1c_l_route", big: true },
      ] },
    A1c_l_qui: { act: "I", title: "« À qui ? »", place: "basfonds", ambiance: "eau",
      text: [
        "« À la personne que je sers. » Il regarde l'eau. « Elle avait de l'amitié pour lui. C'est un mot faible. Disons qu'il était, depuis très longtemps, ce qu'elle avait de plus proche d'un voisin. »",
        "« Elle habite près de la Tour ? »",
        "Loridan a un mouvement des lèvres qui, sur une autre figure, serait un sourire, et sur la sienne ressemble à une douleur. « On ne peut pas habiter plus près. Ne m'en demandez pas davantage ce soir. Je ne vous mens jamais ; je préfère me taire que commencer. »",
      ],
      fx: { clue: "c_voisin" },
      choices: [{ back: "A1c_loridan" }] },
    A1c_l_connu: { act: "I", title: "Deux visites", place: "basfonds", ambiance: "eau",
      text: [
        "« Je suis allé chez lui deux fois, la semaine passée. La première pour lui apprendre ce qu'on voulait lui faire poser. Il ne m'a pas cru. La seconde, il avait vérifié. » Loridan parle lentement, en homme qui fait ses comptes. « Je lui ai dit que des gens viendraient. Des gens qui ne seraient d'aucune des trois clefs. Je lui ai dit de leur remettre ce qu'il aurait pu prendre, et de ne rien tenter seul. »",
        "Il se tait un moment.",
        "« Il a tenté seul. Il est allé chez le Syndic demander des explications, comme on va chez un confrère. C'était un homme droit. Il croyait que les choses se disent en face. » La voix se durcit, pour la première fois. « C'est moi qui l'ai mis sur ce chemin. Je ne l'oublierai pas, et je vous serais obligé de ne pas me le rappeler. »",
      ],
      choices: [{ back: "A1c_loridan" }] },
    A1c_l_tue: { act: "I", title: "Qui y gagne", place: "basfonds", ambiance: "eau",
      text: [
        "« Qui a frappé, je l'ignore. Je n'y étais pas, et je ne fais pas de suppositions sur les bras. » Il lève un doigt ganté. « Qui y gagne, je le sais. Le Remonteur refusait de poser dans la Tour une certaine pièce. Il est mort avant d'avoir dit pourquoi. Et l'on a fait en sorte que le guet, toute la semaine, coure après trois voleurs au lieu de se demander ce que contenait une caisse. »",
        { if: { has: "monde:a1:coup_vu" }, text: "On lui montre la pincée de mâchefer. Il la regarde sans y toucher. « De la crasse de forge. Il y a un endroit, dans ce pays, où l'on en a plein les rues. Vous y serez dans trois jours. »" },
        { if: { has: "monde:a1:epreuve" }, text: "On lui montre le frottis. Il le lit deux fois, à la lueur d'un briquet, et le rend. « Gardez-le comme vos yeux. C'est un morceau de ce qu'ils veulent faire dire au Juge, pour toujours. Le jour où il faudra convaincre quelqu'un, ce papier vaudra plus que nos trois mille écus. »" },
        "« Vous voilà chargés d'un meurtre que vous n'avez pas commis. Je ne peux pas vous en décharger. Je peux seulement vous dire que le chemin qui mène aux trois clefs est aussi celui qui mène à ceux qui l'ont ordonné. »",
      ],
      choices: [{ back: "A1c_loridan" }] },
    A1c_l_douairiere: { act: "I", title: "Les Plombs", place: "basfonds", ambiance: "eau",
      text: [
        "« Aux Plombs, d'après ce qu'on m'a dit, et non au cachot. C'est une attention du prévôt, et elle m'étonne. » Il réfléchit. « On ne pend pas sur un billet anonyme, même à Aiguemorne. Il faudra un procès. Les procès de cette importance attendent la Septaine, pour que le Juge les tranche : elle sera donc l'une des Sept Causes. Elle a six semaines devant elle. »",
        "« Et après ? »",
        "« Après, le Bronze dira. » Il vous regarde l'un après l'autre. « C'est une raison de plus de tenir à ce que le Bronze dise quelque chose de juste, cette fois encore. Et non ce qu'on aura gravé d'avance. »",
        { if: { has: "a1:plombs_vus" }, text: "Tu penses à une fenêtre du second, la quatrième, avec un mouchoir à carreaux bleus. Vous serez deux, là-haut, à qui tu dois une porte ouverte." },
      ],
      choices: [{ back: "A1c_loridan" }] },
    A1c_l_route: { act: "I", title: "Par où", place: "basfonds", ambiance: "eau",
      text: [
        "« Par l'eau. Les portes sont gardées depuis dix heures, et vos figures y seront demain. La rivière a une chaîne, au pont de l'Octroi, qu'on lève à l'aube pour les gabares : vous la passerez avec les premières. »",
        "Il tire de son habit trois papiers pliés, et une bourse. « Trois passeports, au nom de trois compagnons limeurs qui vont chercher de l'ouvrage à Ferrières. Ils sont vrais ; les compagnons seuls sont inventés. Et de quoi faire la route. »",
        { if: { has: "monde:a1:itineraires" }, text: "« Vous savez leurs trois chemins. C'est plus que je n'espérais. Commencez par le Fer : le Syndic a deux jours d'avance, sa cloche se coule dans trois semaines, et c'est le seul des trois qui croie sa clef en sûreté parce qu'elle est sous de la fonte. »", else: "« Commencez par Ferrières. Le Syndic y a porté sa clef ; sa cloche se coule dans trois semaines, et tout ce que la vallée compte de bras sera tourné vers elle ce jour-là. Pour les deux autres, vous apprendrez les chemins en marchant. »" },
        { if: { has: "monde:a1:empreintes" }, text: "On lui montre les trois lames de cire. Il ne les touche pas. « Vous avez les trois serrures. Alors vous n'avez pas besoin d'emporter les trois clefs : il vous suffit de les tenir une heure, le temps d'un moulage. Un homme qui retrouve sa clef à sa place ne fait pas sonner le tocsin. Pensez-y. »" },
        { if: { has: "p:reponse_due" }, text: "« Je n'oublie pas ce que je dois. Une réponse, à la question de votre choix, le jour de la première clef. Choisissez-la bien. »" },
        "Il se lève, enfin, et passe du bateau au quai sans que la barque remue. « Je vous retrouverai là-bas. Vous n'aurez pas à me chercher. »",
      ],
      fx: { gold: 400, item: "passeport_limeur" },
      choices: [{ label: "Détacher la barque, et attendre l'aube sous le pont", to: "A1c_chaine", big: true }] },

    // ------------------------------------------------------------ the chain of the Morne
    A1c_chaine: { act: "I", title: "La chaîne de l'Octroi", place: "basfonds", ambiance: "eau",
      fx: { until: 6 },
      text: [
        "L'aube vient sur la Morne comme une eau plus claire sur une eau sale. Vous avez passé la nuit sous l'arche du Pont-aux-Clefs, dans la barque, sans dormir, à regarder pâlir les enseignes.",
        "Le pont de l'Octroi est le dernier de la ville. Une chaîne y barre la rivière d'une pile à l'autre, à fleur d'eau, grosse comme la cuisse ; un treuil la lève au premier coup de six heures, et un sergent, dans une logette, regarde passer les bateaux en comptant les têtes.",
        "Six gabares attendent déjà, flanc à flanc, dans la brume. La plus petite a des bâches. Un marinier à barbe rousse, à l'avant, recoud quelque chose.",
        "Six heures sonnent à la citadelle, avec leur petit retard. La chaîne commence à monter, ruisselante.",
      ],
      choices: [
        { label: "Aborder la petite gabare : « On cherche de l'embauche pour l'aval. Trois paires de bras. »", test: { dom: "social", diff: 5, label: "Social", help: [{ if: { has: "a1:large_patron" }, v: 30 }] }, win: { fx: { ep: ["perso", 500] }, to: "A1c_chaine_ok" }, lose: { fx: { flag: "a1:signalement" }, to: "A1c_chaine_ko" } },
        { label: "Rester dans la barque, entre deux gabares, couché{e} sous un prélart", test: { dom: "discretion", diff: 5, label: "Discrétion" }, win: { fx: { ep: ["perso", 500] }, to: "A1c_chaine_ok" }, lose: { fx: { flag: "a1:signalement" }, to: "A1c_chaine_ko" } },
        { label: "Prendre une perche et pousser comme un marinier, le dos au sergent", test: { dom: "combat", diff: 5, label: "Combat" }, win: { fx: { ep: ["perso", 500] }, to: "A1c_chaine_ok" }, lose: { fx: { flag: "a1:signalement" }, to: "A1c_chaine_ko" } },
      ] },
    A1c_chaine_ok: { act: "I", title: "Passé", place: "basfonds", ambiance: "eau",
      text: [
        "La chaîne pend au-dessus de vos têtes, noire, dégouttante, pendant le temps qu'il faut pour passer dessous. Le sergent de l'Octroi compte les gabares, bâille, et tire un trait sur son ardoise.",
        "Puis l'arche est derrière vous, et la ville avec. La Morne s'élargit entre des saules. Il y a des vaches dans la brume, un moulin, un homme qui pêche. Personne ici n'a entendu parler de la Serrure-Reine.",
      ],
      choices: [{ label: "Te retourner une fois", to: "A1c_fin" }] },
    A1c_chaine_ko: { act: "I", title: "« Trois de trop »", place: "basfonds", ambiance: "eau",
      text: [
        "« Hé ! Là-bas ! » Le sergent de l'Octroi s'est levé dans sa logette. « J'ai compté trois têtes de trop sur l'eau ce matin, et on m'a porté cette nuit un papier où il y en a trois. Accostez ! »",
        "Personne n'accoste. La chaîne est levée ; les mariniers, qui n'aiment pas l'Octroi, ont subitement tous affaire en aval, et six gabares s'engouffrent sous l'arche en même temps, dans un grand bruit de perches et d'injures fraternelles. Vous êtes au milieu, portés, cachés, sauvés par la mauvaise humeur d'une corporation.",
        "Le sergent n'a pas de bateau. Il a une plume. Il écrit, penché, en vous suivant des yeux, et tu sais que ce qu'il écrit vous précédera sur les routes.",
      ],
      choices: [{ label: "Te retourner une fois", to: "A1c_fin" }] },

    A1c_fin: { act: "I", title: "Aiguemorne, de loin", place: "basfonds", ambiance: "eau",
      text: [
        "De loin, Aiguemorne est belle. C'est un piton noir, posé sur la brume, hérissé de toits où le soleil levant allume une à une les cent enseignes de fer ; et tout en haut, plus haute que tout, la Tour, avec son cadran nu, tournée vers vous comme un visage.",
        "Quelque part sous ce cadran, une vieille femme qui sait ouvrir toutes les portes de la ville vient de se laisser enfermer derrière la seule qu'elle ne puisse pas. Un vieil homme est couché sur un établi. Et derrière un chêne ferré de trois serrures, quelque chose a entendu sonner six heures, et attend.",
        { if: { is: { reve: "atelier" } }, text: "Tu avais voulu une enseigne dans cette ville. Tu en sors par la rivière, couché{e} sur des bâches, avec un faux nom. Il faudra revenir par la grande porte, ou ne pas revenir." },
        { if: { is: { reve: "plombs" } }, text: "Tu regardes la ligne grise, sous la Tour. Hier, tu y avais quelqu'un. Ce matin, tu y as deux personnes. C'est une façon d'avoir de la famille." },
        { if: { is: { reve: "nom" } }, text: "Ton nom est là-haut, dans un registre, sous la clef du Doyen. Tu t'en éloignes au fil de l'eau, et c'est pourtant, tu le sens, le plus court chemin pour y arriver." },
        { if: { is: { reve: "large" } }, text: "Tu as tant voulu quitter cette ville. Te voilà sur l'eau, la carte du colporteur contre la peau, et tu la regardes s'en aller avec une gorge serrée que tu n'avais pas prévue." },
        "Six semaines. Trois clefs. La première est au nord-est, sous trois pieds de fonte, dans une vallée où les souliers ramassent du mâchefer.",
      ],
      fx: { quest: "I_tour", ep: ["histoire", 4000] },
      choices: [{ label: "Tourner le dos à la ville", to: "A2c_route", exit: true, big: true }] },
  },

  extras: {
    items: {
      passe_douairiere: { name: "Les crochets de la Douairière", kind: "outil", bonus: { discretion: 10 }, desc: "Sept crochets d'acier bleu, à manches d'os. Ils ont ouvert la caisse du Mont-de-Piété. Ne force jamais." },
      lorgnette: { name: "La lorgnette du capitaine", kind: "outil", bonus: { nature: 10 }, desc: "Cuivre, trois tirages, un verre d'une eau parfaite. Compte les portes avant les gens." },
      cachet_merlettes: { name: "Le cachet aux merlettes", kind: "outil", bonus: { social: 10 }, desc: "Une bague d'or pâle, gravée de trois merlettes sous une couronne de vicomte. Un mensonge a besoin d'un objet." },
      passeport_limeur: { name: "Passeport de compagnon limeur", kind: "quete", desc: "Un vrai passeport, pour un compagnon qui n'existe pas, allant chercher de l'ouvrage à Ferrières." },
    },
    clues: {
      c_dire: { rev: "C", text: "Loridan, apprenant la mort du Remonteur, la main nue et tremblante : « Qui va le lui dire ? »" },
      c_voisin: { rev: "C", text: "Selon Loridan, le Remonteur était pour la personne qu'il sert « ce qu'elle avait de plus proche d'un voisin ». Habite-t-elle près de la Tour ? « On ne peut pas habiter plus près. »" },
    },
  },
};
