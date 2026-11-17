// L'Île Folle-Aiguille · side story « La table de pharaon » (owes its question to The Gambler: is the passion for play
// a vice of the poor, a vice of the rich, or the same vice in two coats?). Morlenc, the Merchants' Circle, the night the
// baron takes the doctor to show her off: he loses, at faro, against a lender who already holds half his notes; the
// last one he signs pledges the Cormorane. The widow of a gambler sits down at the table (yc:gagne: she wins the note
// back, then gives it to him, yc:billet_rendu, or keeps it, yc:billet_garde; yc:perdu: she loses her advance), or she
// leaves (yc:refus, and the baron pledges his share of the treasure, yc:part_engagee). At sea, at dawn, the baron alone
// with his hands (yc:confession, or yc:mepris).
module.exports = {
  passages: {
    YC_cercle: { act: "II", title: "Le Cercle des Négociants", place: "haute_ville", ambiance: "ville",
      text: [
        "Le baron vient la chercher au Cormoran à dix heures du soir, en voiture fermée, et l'emmène, sans lui dire où, parce qu'il trouve amusant, dit-il, d'exhiber à ses amis la seule femme de Morlenc qui sache ce qu'il y a sous leur gilet. Le Cercle des Négociants occupe un hôtel de la Haute-Ville aux fenêtres toujours closes, où l'on entre par une porte cochère, où l'on monte par un escalier de marbre, et où l'on ne sait jamais l'heure, parce que toutes les pendules y sont arrêtées sur minuit, par une délicatesse de la maison envers ceux qui ont une femme à la maison.",
        "Dans la grande salle, sous un lustre qui brûle cent bougies et répand une chaleur de serre, des hommes en habit noir sont assis autour de tables vertes, penchés, immobiles, avec des figures que Victorine connaît. Elle les a vues dix ans. Ce sont les figures du dimanche soir d'Hector : les lèvres sèches, les yeux trop fixes, un sourire qui s'est arrêté en route et qui n'avance plus. On dirait une salle d'hôpital où les malades auraient payé leur lit très cher.",
        "Au fond, une table de pharaon. Le banquier, celui qui tient les cartes, est un petit homme chauve aux ongles faits, aux yeux tout ronds et sans couleur, dont personne ne prononce le nom ; on l'appelle « Monsieur ». Monsieur a prêté à la moitié de la salle. Le baron s'assied en face de lui, en lui serrant la main, comme on serre la main d'un vieil ami qui vous tient à la gorge.",
        "Victorine reste debout derrière sa chaise. Elle regarde les cartes sortir du sabot. Elle sait compter. Hector disait qu'elle portait malheur à la table, parce qu'elle comptait. Il avait raison : on perd moins quand on compte, et lui n'aimait pas qu'on perde moins.",
      ],
      choices: [{ label: "Regarder jouer le baron", to: "YC_perte" }] },
    YC_perte: { act: "II", title: "Le Cercle des Négociants", place: "haute_ville", ambiance: "ville",
      text: [
        "Il perd. Il perd avec élégance, en plaisantant, en commandant du champagne, en pontant chaque fois plus haut, et chaque fois que la carte tombe du mauvais côté, sa main gauche, sous la table, se crispe sur le genou de son pantalon de soie, et se décrispe, et se crispe. Victorine regarde cette main. Elle ne regarde plus que cette main.",
        "À une heure, il signe un billet. À deux heures, il en signe un autre. À trois heures, Monsieur pose devant lui, sur le tapis vert, une feuille d'une autre couleur, et le baron la lit, et pâlit, et la signe aussi. Victorine lit à l'envers ; elle a l'habitude, c'est ainsi qu'on lit les ordonnances des confrères. *Hypothèque sur la coque, les agrès et la cargaison du trois-mâts* la Cormorane, *port de Morlenc.*",
        "Le navire. Le navire qui part après-demain. Le baron vient de le mettre sur la table, entre deux coupes de champagne, et il va le perdre au prochain tirage, ou au suivant, et une barque d'huissier montera à bord demain, et le voyage s'arrêtera là, à quai, et la dette de Victorine reviendra chez elle avec le facteur.",
        "Le baron se lève, en souriant, pour aller se rafraîchir. Il chancelle un peu. Sa chaise reste vide, face à Monsieur, qui bat les cartes, et qui lève vers Victorine ses yeux sans couleur, poliment, avec la curiosité tranquille d'un naturaliste devant une espèce qu'il ne connaît pas encore.",
        "« Madame joue ? »",
      ],
      choices: [
        { label: "S'asseoir, et jouer le billet de la Cormorane contre ta propre avance", test: { dom: "savoir", diff: 1, label: "Compter les cartes du sabot" },
          win: { to: "YC_gagne" }, lose: { fx: { flag: "yc:perdu", gold: -100 }, to: "YC_perdu" } },
        { label: "« Madame ne joue jamais. Madame a été mariée. »", to: "YC_refus" },
      ] },
    YC_gagne: { act: "II", title: "Le pharaon", place: "haute_ville", ambiance: "ville",
      text: [
        "Elle s'assied. Ses mains sont froides, très calmes. Elle sait exactement ce qu'il reste dans le sabot, à trois cartes près, parce qu'elle a compté depuis minuit sans le vouloir, comme on compte les marches d'un escalier qu'on monte tous les jours. Elle ponte peu. Elle ponte quand il faut. Elle ne regarde pas Monsieur ; elle regarde les cartes, avec l'attention qu'elle met à regarder une plaie.",
        "La salle, peu à peu, se tait. Les joueurs des autres tables se lèvent, viennent voir, restent debout. Une femme au pharaon, au Cercle, ce n'est jamais arrivé. Une femme qui gagne, personne n'en parlera jamais, parce que personne ne voudra avoir été là.",
        "À quatre heures, Monsieur pose sur le tapis, devant elle, la feuille de l'autre couleur. Il la pose avec une politesse parfaite, et un petit salut de la tête, comme on remet à une dame un gant qu'elle a laissé tomber.",
        "« Madame a la main de quelqu'un qui a beaucoup regardé jouer, dit-il. C'est la meilleure main. Ceux qui jouent n'apprennent rien. » Il bat les cartes. « Madame ne reviendra pas, j'imagine. C'est dommage. Les gens qui gagnent sont rares, et ils me reposent. »",
        "Le baron revient à ce moment-là, rafraîchi, et la trouve assise à sa place, la feuille de son navire entre les doigts.",
      ],
      choices: [
        { label: "La lui tendre, sans un mot", to: "YC_rendu" },
        { label: "La plier en quatre, et la mettre dans ta trousse", to: "YC_garde" },
      ] },
    YC_rendu: { act: "II", title: "Le pharaon", place: "haute_ville", ambiance: "ville",
      text: [
        "Le baron prend la feuille. Il la regarde, il la retourne, il la regarde encore, comme s'il ne savait pas lire. Puis il la déchire, lentement, en tout petits morceaux, qu'il laisse tomber dans une coupe de champagne vide.",
        "Dans la voiture, au retour, il ne dit rien pendant longtemps. Puis, devant le Cormoran, quand elle descend : « Vous ne m'avez rien demandé. — Non. — Vous auriez pu me demander n'importe quoi. — Je sais. » Il la regarde, avec dans les yeux quelque chose qui ressemble à de la terreur, ou à du respect. Chez lui, c'est souvent la même chose.",
      ],
      choices: [{ label: "Monter dormir trois heures", fx: { quest: "YC", flag: "yc:billet_rendu", regard: { claviere: "redevable" } }, back: "A2v_jours" }] },
    YC_garde: { act: "II", title: "Le pharaon", place: "haute_ville", ambiance: "ville",
      text: [
        "Le baron la regarde plier la feuille. Il ne dit rien. Il a perdu son navire au pharaon, et une femme l'a regagné, et cette femme vient de le mettre dans sa trousse, entre le laudanum et les lancettes. Il comprend qu'il a désormais une créancière de plus. Il comprend aussi, et cela lui fait presque plaisir, qu'elle est la seule de toutes qu'il ne pourra pas acheter.",
        "« Vous me la rendrez, docteur ? — Un jour. Quand vous l'aurez méritée. — Et si je ne la mérite jamais ? — Alors elle sera bien gardée. »",
        "Dans la voiture, il rit tout le long du chemin, d'un rire qui fait mal à entendre.",
      ],
      choices: [{ label: "Monter dormir trois heures", fx: { quest: "YC", flag: "yc:billet_garde", regard: { claviere: "mefiant" } }, back: "A2v_jours" }] },
    YC_perdu: { act: "II", title: "Le pharaon", place: "haute_ville", ambiance: "ville",
      text: [
        "Elle s'assied. Elle compte. Elle a raison deux fois, trois fois, puis la carte tombe du mauvais côté, contre toutes les raisons, comme elle tombait du mauvais côté pour Hector, un dimanche sur deux, pendant dix ans. Le sabot n'a pas d'opinion. Il ne connaît pas les veuves.",
        "Elle perd cent livres. L'avance du baron pour la pharmacie, moins ce qu'elle a déjà dépensé. Elle se lève. Elle a les mains très froides, et sur sa figure, elle le sait sans miroir, l'expression des dimanches soir : les lèvres sèches, les yeux trop fixes, et un sourire arrêté en route.",
        "Le baron revient, regarde le tapis, puis elle. Il gagne la main suivante, par hasard, et la suivante, et l'hypothèque lui revient sans qu'il ait rien fait, par la seule grâce d'un sabot qui n'a pas d'opinion. Il en rit beaucoup. Elle ne rit pas. Elle a compris, ce soir, une chose qu'elle aurait préféré ne jamais comprendre : pourquoi Hector revenait.",
      ],
      choices: [{ label: "Rentrer à pied, sous la pluie", fx: { quest: "YC" }, back: "A2v_jours" }] },
    YC_refus: { act: "II", title: "Le Cercle des Négociants", place: "haute_ville", ambiance: "ville",
      text: [
        "Monsieur s'incline. Il a l'air un peu déçu, comme un collectionneur qui voit filer un spécimen.",
        "Le baron revient, se rassied, perd encore. À l'aube, il ne peut plus signer pour le navire, déjà engagé ; il signe pour autre chose. Victorine, de derrière sa chaise, lit à l'envers : *une part sur le produit de l'expédition de la Cormorane, à valoir sur les créances du soussigné*. Il vient de vendre à Monsieur un morceau d'un trésor que personne n'a encore vu, sur une île que personne n'a encore trouvée, au cours du jour.",
        "La partie reprend. Il gagne, enfin, au matin, assez pour racheter l'hypothèque du navire, et pas assez pour racheter la part. Monsieur la range dans son portefeuille avec les autres, très soigneusement, comme une fleur séchée dans un herbier.",
        "Dans la voiture, le baron dort, la bouche ouverte. Victorine regarde défiler les rues grises de Morlenc, et pense qu'il y a désormais, à bord de la Cormorane, un passager invisible, petit, chauve, aux ongles faits, qui attendra sur le quai le retour du navire, et qui ne prendra jamais froid.",
      ],
      choices: [{ label: "Rentrer au Cormoran", fx: { quest: "YC", flag: "yc:part_engagee" }, back: "A2v_jours" }] },

    // ---------------------------------------------------------------- at sea, at dawn
    YC_aube: { act: "III", title: "Les mains du baron", place: "cormorane", ambiance: "nuit",
      text: [
        "À l'aube, en remontant d'un accouchement de chèvre, la seule chèvre du bord, qui a choisi la nuit la plus agitée du voyage, Victorine voit de la lumière sous la porte de la grand-chambre. Elle frappe. Personne ne répond. Elle entre.",
        "Le baron est assis à son bureau d'acajou, en habit, comme s'il sortait du Cercle. Devant lui, deux chandelles presque consumées, un jeu de cartes étalé en éventail, une bouteille vide, et rien d'autre. Il a joué toute la nuit, seul, contre lui-même, une patience, puis une autre. Il regarde ses mains, posées à plat de chaque côté des cartes, comme on regarde deux bêtes qu'on ne connaît pas.",
        { if: { has: "victorine:cartes=baron" }, text: "Victorine pense au braconnier de Varnèse, à plat ventre sur sa table de cuisine. *Un homme qui gagne, ça ne regarde pas ses mains.*" },
        "« Docteur, dit-il sans lever les yeux. Vous avez été mariée à un joueur. Combien de temps faut-il, d'après votre expérience, pour que ça passe ? »",
        "Elle réfléchit, honnêtement. « Hector est mort avant. »",
        "Le baron rit. Puis il parle. De son père, qui jouait aussi, mais seulement avec la vie des autres. De la banque, qui fuit par tous ses joints, comme un vieux navire. Des billets chez Monsieur, au Cercle, et ailleurs, chez d'autres Monsieur. De cette île, qui est la dernière carte du sabot. « Si elle tombe du mauvais côté, docteur, je me tire une balle dans la tête sur le quai de Morlenc, devant tout le monde. J'ai déjà choisi l'endroit. Devant la Bourse. C'est bien, non ? Il y aura du monde. »",
      ],
      choices: [
        { label: "S'asseoir en face de lui, et l'écouter jusqu'au bout", to: "YC_aube_ecoute" },
        { label: "« Vous me faites perdre mon temps, monsieur le baron. J'ai une chèvre qui saigne. »", to: "YC_aube_mepris" },
      ] },
    YC_aube_ecoute: { act: "III", title: "Les mains du baron", place: "cormorane", ambiance: "nuit",
      text: [
        "Elle s'assied. Elle l'écoute, jusqu'au bout, comme on écoute un malade, sans l'interrompre, sans le juger, en regardant de temps en temps ses mains, qui finissent par se calmer, par s'ouvrir, par se poser enfin sur le bureau comme des mains ordinaires.",
        "Quand il se tait, le jour est levé. Les fenêtres de poupe sont pleines de mer, d'un gris de perle, et le sillage s'en va derrière eux vers le nord, vers Morlenc, droit et blanc, comme une ligne tirée au bas d'un compte.",
        "« Merci, dit-il. Personne ne m'avait jamais écouté. On m'a toujours payé, ou fait payer. » Il range les cartes. « Ne le dites à personne. Je serais obligé de vous détester. »",
      ],
      choices: [{ label: "Retourner à la chèvre", fx: { quest: "YC", flag: "yc:confession", regard: { claviere: "cordial" } }, back: true }] },
    YC_aube_mepris: { act: "III", title: "Les mains du baron", place: "cormorane", ambiance: "nuit",
      text: [
        "Elle sort. Elle ferme la porte derrière elle, pas fort, juste assez.",
        "Dans la coursive, elle s'arrête, la main sur la cloison, le cœur battant, et elle s'aperçoit qu'elle a les larmes aux yeux, de rage, et qu'elle ne sait pas contre qui. Contre le baron, sûrement. Contre Hector, toujours. Contre elle-même, qui a passé dix ans à écouter un homme regarder ses mains, et qui vient de refuser une heure à un autre, parce qu'elle n'en peut plus.",
        "La chèvre, elle, va très bien. Elle a eu un chevreau. Il est blanc. Tout le monde à bord l'appelle déjà Baron, sauf Victorine.",
      ],
      choices: [{ label: "Retourner à la chèvre", fx: { quest: "YC", flag: "yc:mepris", regard: { claviere: "mefiant" } }, back: true }] },
  },
  extras: {
    people: {
      monsieur: { name: "Monsieur", aka: ["le banquier du pharaon", "Monsieur"], f: false,
        qui: "Le petit homme chauve qui tient la table de pharaon au Cercle des Négociants, et qui a prêté à la moitié de la salle." },
    },
    quests: [
      { id: "YC", act: "II", kind: "annexe", title: "La table de pharaon", start: "YC_cercle", doit: "joueur", echo: ["yc:billet_rendu", "yc:billet_garde", "yc:perdu", "yc:part_engagee"] },
    ],
  },
};
