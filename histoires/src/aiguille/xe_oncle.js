// L'Île Folle-Aiguille · side story « Le garçon vendu », the uncle's house. The same night, once the child knows the
// boy's name, the Haute-Ville: the hôtel d'Escalis, lit for a supper. At the kitchen door, the old nurse, Mathurine,
// who tells why the boy had to vanish before midsummer, and gives his mother's locket for him (item medaillon_escalis).
// Then the uncle's study, by the back stair, and his account book (florian:preuve); or the uncle himself, charming,
// with a purse for silence (florian:bourse taken, or thrown back: florian:bourse_jetee). Read at Lannoz and after.
module.exports = {
  passages: {
    XE_o_rue: { act: "II", title: "L'hôtel d'Escalis", place: "haute_ville", ambiance: "nuit",
      text: [
        "Tu ne rentres pas au Cormoran. Tu remontes la ville, en courant, par les escaliers de la rue des Recteurs, jusqu'à la Haute-Ville, où les maisons ont des grilles, des cours, des lanternes à chaque porte, et où le guet passe à cheval.",
        "L'hôtel d'Escalis, un portier ivre te l'indique pour un sou : une grande maison de pierre blonde, rue Sainte-Ursule, avec un fronton sculpté de deux lions qui se disputent une couronne. Toutes les fenêtres du premier étage sont éclairées. On entend une musique de chambre, des rires, des verres. Des voitures attendent dans la cour, les cochers endormis sur leurs sièges.",
        "Monsieur Gonzague d'Escalis donne à souper, ce soir. Le soir où son neveu part pour les plantations.",
        "Sur le côté, dans la ruelle, une porte basse, une marche usée, une odeur de bouillon et de graisse : les cuisines.",
      ],
      choices: [
        { label: "Frapper à la porte des cuisines", to: "XE_o_nourrice" },
        { label: "Entrer par la grande porte, et demander Monsieur d'Escalis", to: "XE_o_oncle" },
      ] },
    XE_o_nourrice: { act: "II", title: "Mathurine", place: "haute_ville", ambiance: "nuit",
      text: [
        "C'est une vieille femme qui ouvre, en tablier, un torchon sur l'épaule, une coiffe de Plouvenec sur des cheveux blancs. Elle te regarde de haut en bas, avec la méfiance d'une cuisinière pour un enfant des rues qui sent la pluie. Puis tu dis le nom de Florian, et son visage change.",
        "Elle te fait entrer, t'assied près du feu, te met un bol de bouillon dans les mains, et ferme la porte de l'office derrière elle.",
        "« Mathurine, dit-elle. Je l'ai nourri. Au sein, jusqu'à deux ans. Sa mère n'avait pas de lait. » Elle s'assied en face de toi. « Dis-moi tout. »",
        "Tu lui dis le quai, la gourde, le clerc en noir, le brick jaune. Elle écoute sans t'interrompre, les mains croisées sur son tablier, et à la fin, elle ne pleure pas. Elle hoche la tête, lentement, comme quelqu'un qui reçoit enfin la confirmation d'une chose qu'elle sait depuis longtemps.",
        "« Il aura dix-huit ans à la Saint-Jean, dit-elle. Dans six semaines. Ce jour-là, tout est à lui : la maison, les terres d'Escalis, les moulins, les fermes de la vallée. Le testament de son père le dit. Monsieur Gonzague est tuteur jusque-là. Après, il n'est plus rien. Un cadet. Un cadet qui a des dettes de jeu et une maîtresse rue des Carmes. » Elle regarde vers le plafond, d'où descend la musique. « Il fête le départ de son neveu. Il appelle ça le départ. »",
      ],
      choices: [{ label: "« Qu'est-ce que je peux faire ? »", to: "XE_o_medaillon" }] },
    XE_o_medaillon: { act: "II", title: "Le médaillon", place: "haute_ville", ambiance: "nuit",
      text: [
        "Elle se lève, va à un buffet, ouvre un tiroir, et en sort un petit objet enveloppé dans un mouchoir. Un médaillon d'argent, ovale, à charnière. Dedans, une miniature : une jeune femme blonde, aux yeux bleus étonnés, qui ressemble à Florian comme une sœur.",
        "« Sa mère, dit Mathurine. Madame Anne. Elle me l'a confié en mourant, pour lui, à ses dix-huit ans. Je le garde ici, parce que là-haut, Monsieur Gonzague l'aurait vendu. » Elle te le met dans la main. « Si tu le revois, donne-lui ça. Il saura que tu viens de moi. Il saura que quelqu'un l'attend ici. »",
        "Elle te regarde, et cette fois ses yeux brillent.",
        "« Et si tu as du courage, il y a, là-haut, au deuxième, un bureau où Monsieur range ses papiers. L'escalier de service y mène, derrière la lingerie. Il paie ses gens avec un registre. Il paie tout le monde avec un registre. Même ceux qu'il ne devrait pas payer. » Elle se tait. « Je n'ai pas dit ça. Je suis vieille. Je radote. »",
      ],
      choices: [
        { label: "Monter par l'escalier de service", fx: { item: "medaillon_escalis" }, to: "XE_o_bureau" },
        { label: "Remercier, et repartir avant d'être vu{e}", fx: { item: "medaillon_escalis" }, to: "XE_o_fin" },
      ] },
    XE_o_bureau: { act: "II", title: "Le bureau", place: "haute_ville", ambiance: "nuit",
      text: [
        "L'escalier de service est étroit, raide, obscur, et sent la cire et le linge frais. Tu passes devant la lingerie, devant une porte entrouverte où une femme de chambre recoud un ourlet en chantonnant, et tu montes.",
        "Le bureau est au bout d'un couloir, porte fermée, sans clef dans la serrure. En bas, la musique. Des pas, dans l'escalier d'honneur, de l'autre côté de la cloison. Un valet qui passe avec un plateau.",
      ],
      choices: [{ label: "Entrer, et chercher le registre", test: { dom: "discretion", diff: 1, label: "Le bureau de l'oncle" }, win: { fx: { flag: "florian:preuve" }, to: "XE_o_registre" }, lose: { to: "XE_o_pris" } }] },
    XE_o_registre: { act: "II", title: "Le registre", place: "haute_ville", ambiance: "nuit",
      text: [
        "Tu trouves le registre sur le bureau même, ouvert, avec la plume dans l'encrier, comme si Monsieur d'Escalis avait écrit sa dernière ligne juste avant de descendre à table. Un gros livre relié de basane verte, avec des colonnes, des dates, des sommes.",
        "Les gages de la cuisinière. Le foin des chevaux. Une robe de soie, rue des Carmes. Et, à la date d'aujourd'hui, de la même écriture que le reste, appliquée, paisible :",
        "*À Maître Hoël Pichard, clerc, pour l'affaire du Fructueux, soixante livres. Au capitaine Grosjean, pour sa conscience, vingt livres. Solde à la Saint-Jean.*",
        "Tu n'as ni papier ni crayon. Tu arraches la page. Elle cède avec un bruit de soie déchirée qui te semble s'entendre jusqu'à la cour. Tu la plies, la glisses dans ta chemise, contre ta peau, et tu redescends, plus vite que tu n'es monté{e}, sans que personne te voie.",
      ],
      choices: [{ label: "Sortir par les cuisines", to: "XE_o_fin" }] },
    XE_o_pris: { act: "II", title: "Le valet", place: "haute_ville", ambiance: "nuit",
      text: [
        "La porte grince. Une voix, derrière toi, dans le couloir : « Qu'est-ce que tu fais là, toi ? »",
        "Un valet en livrée, perruque poudrée, un plateau d'argent à la main. Il pose le plateau. Il t'attrape par le col, te soulève à moitié, et te descend l'escalier de service sur la pointe des pieds, sans un mot, jusqu'aux cuisines, où il te jette dans les bras de Mathurine.",
        "« Un de tes neveux, la vieille ? dit-il. Garde-le en bas. Si Monsieur l'avait vu, il l'aurait fait fouetter, et toi renvoyer. » Il remonte. Il ne dira rien. Il est payé avec un registre, lui aussi, et il sait ce que valent les registres.",
        "Mathurine te pousse dehors par la porte de la ruelle, et te serre la main très fort avant de refermer.",
      ],
      choices: [{ label: "Repartir dans la nuit", to: "XE_o_fin" }] },
    XE_o_oncle: { act: "II", title: "Monsieur d'Escalis", place: "haute_ville", ambiance: "chateau",
      text: [
        "Le portier ne veut pas te laisser entrer. Tu cries le nom de Florian, dans la cour, de toutes tes forces. Les cochers se réveillent. À une fenêtre du premier, un rideau s'écarte.",
        "Cinq minutes plus tard, Monsieur Gonzague d'Escalis descend lui-même dans le vestibule, en habit de soirée, une serviette encore à la main. Un homme de quarante ans, rond, rose, souriant, aux yeux humides de bon vivant, qui sent la poudre à la violette et le vin de Bourgogne. Il congédie le portier d'un geste. Il se penche vers toi avec bienveillance.",
        "« Tu as vu mon neveu partir ? dit-il. Ah, le pauvre garçon. Il a voulu partir. Il voulait voir le monde. Les jeunes gens ont de ces idées. » Il te regarde, et ses yeux humides ne sourient pas. « Il a dû boire un peu trop. Il boit, tu sais. C'est un chagrin pour la famille. Il vaut mieux que ça ne se sache pas. »",
        "Il glisse la main dans son gilet, en sort une petite bourse de soie, la soupèse, et te la tend.",
        "« Pour ta peine, et pour ton silence. Il y a là de quoi manger un an. Les enfants comme toi ont souvent faim, je crois. »",
      ],
      choices: [
        { label: "Prendre la bourse", fx: { flag: "florian:bourse", gold: 20 }, to: "XE_o_bourse" },
        { label: "La lui jeter à la figure", fx: { flag: "florian:bourse_jetee" }, to: "XE_o_jetee" },
      ] },
    XE_o_bourse: { act: "II", title: "La bourse", place: "haute_ville", ambiance: "nuit",
      text: [
        "Tu prends la bourse. Elle est lourde, tiède de la chaleur de son gilet.",
        "Monsieur d'Escalis sourit, te tapote la joue avec deux doigts gantés, comme on flatte un chien, et remonte souper. Le portier te raccompagne à la grille avec une politesse nouvelle.",
        "Dans la rue, tu ouvres la bourse. Vingt pièces d'argent, toutes neuves. Le prix d'un an de pain, ou d'un garçon de dix-sept ans, selon le marché. Tu sais déjà que tu ne sauras jamais quoi en faire sans y penser.",
      ],
      choices: [{ label: "Rentrer au Cormoran", to: "XE_o_fin" }] },
    XE_o_jetee: { act: "II", title: "La bourse", place: "haute_ville", ambiance: "nuit",
      text: [
        "La bourse le frappe en pleine joue, et éclate, et les pièces roulent sur le dallage de marbre du vestibule, sous les meubles, dans les coins, avec un bruit de grêle.",
        "Monsieur d'Escalis ne bouge pas. Il porte la main à sa joue, lentement. Puis il sourit, et c'est un sourire très différent du premier.",
        "« Fais-le sortir, dit-il au portier, sans hausser la voix. Et retiens bien son visage. »",
        "On te jette dehors. La grille claque. Derrière, par la fenêtre du premier, la musique reprend, un menuet, gai, sautillant. Tu restes un moment dans la rue, sous la pluie, à trembler, et ce n'est pas de froid : c'est que tu viens de te faire un ennemi qui a des laquais, et que tu l'as fait exprès.",
      ],
      choices: [{ label: "Rentrer au Cormoran", to: "XE_o_fin" }] },
    XE_o_fin: { act: "II", title: "La Haute-Ville", place: "haute_ville", ambiance: "nuit",
      text: [
        "Tu redescends vers le port par les escaliers, dans la nuit mouillée, avec la Haute-Ville derrière toi, ses grilles, ses lanternes, et ses lions de pierre qui se disputent une couronne.",
        { if: { item: "medaillon_escalis" }, text: "Dans ta poche, le médaillon d'argent de Madame Anne. Tu ne sais pas si tu reverras Florian d'Escalis. Le Fructueux part pour les îles, et la Cormorane aussi. La mer est grande. Mais Mathurine t'a regardé{e} comme si c'était certain." },
        { if: { has: "florian:preuve" }, text: "Contre ta peau, la page arrachée du registre, avec ses soixante livres pour l'affaire du Fructueux. Elle te gratte à chaque pas. Elle pèse plus lourd que la bourse de soie n'aurait pesé." },
      ],
      choices: [{ label: "Rentrer au Cormoran", fx: { quest: "XE1" }, to: "A2mv_nuit" }] },
  },
  extras: {
    items: {
      medaillon_escalis: { name: "Le médaillon de Madame Anne", kind: "divers", keep: true, price: 0, desc: "Un médaillon d'argent ovale. Dedans, une jeune femme blonde aux yeux bleus étonnés : la mère de Florian d'Escalis. Mathurine, la nourrice, te l'a confié pour lui." },
    },
  },
};
