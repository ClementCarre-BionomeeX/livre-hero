// L'Île Folle-Aiguille · side story « Le bras de la fermière » (owes its question to Hardy's The Withered Arm: can a
// hatred one does not even admit leave its mark on another's body, and what is a cure worth when it is bought with a
// dead boy?). Act III, Victorine at Brisegrève: Aziliz Kerbellec, the young wife of the farmer who sells hay to the
// fort, has had a withering left arm since spring. The healer of the coast has told her the only cure: touch the neck
// of a hanged man before he is buried. Last night a farm boy, Yannig Gourin, hanged himself in the hayloft. His mother,
// Jeanne, works at the farm, and once dreamed she seized the young wife by that very arm. Victorine takes Aziliz to the
// chapel at night (sl:touche), forbids the cure and treats the arm (sl:soigne), or brings the two women together
// first (sl:jeanne). Optional: SL_examen, SL_jeanne. Wired in A3v_brisegreve.
module.exports = {
  passages: {
    SL_visite: { act: "III", title: "Le bras de la fermière", place: "brisegreve", ambiance: "village",
      fx: { meet: "aziliz" },
      text: [
        "Elle attend au bas de la coupée, sur la cale, depuis l'aube, une femme de vingt-cinq ans en coiffe blanche et en tablier du dimanche, avec un panier d'œufs au bras droit, pour payer. Le bras gauche, elle le tient serré contre elle, sous un châle, comme on porte un enfant malade. Quand on la fait monter, elle salue Victorine d'une révérence de fermière, profonde, maladroite, et elle dit, avant même qu'on lui ait demandé son nom : « On m'a dit que vous étiez une vraie. »",
        "Elle s'appelle Aziliz Kerbellec. Elle a épousé, il y a un an, Gweltaz Kerbellec, le fermier qui vend le foin au fort, un homme de quarante ans, riche, taciturne, qu'elle respecte. Au printemps, un matin, elle s'est réveillée avec une douleur dans le bras gauche, et sur le bras, sous le coude, quatre marques bleuâtres, comme des doigts. Depuis, le bras maigrit. Il sèche, dit-elle. Comme une branche qu'on a cassée et qui tient encore à l'arbre.",
        "Elle a tout essayé. Les onguents du rebouteux. Les prières à la fontaine des Trois-Sœurs. Le vieux sorcier de la côte, le dernier, qui vit seul dans une cabane d'algues, au bout de la grève. Il lui a regardé le bras, il a regardé un œuf cassé dans un verre d'eau, et il lui a dit qu'on lui avait jeté un sort, quelqu'un qui la hait sans le savoir, et qu'il n'y avait qu'un remède : toucher, de ce bras, le cou d'un pendu, avant qu'on le mette en terre. Le sang tourne, dit-il. Le mal s'en va avec le mort.",
        "Aziliz se tait un moment. Puis elle dit, très bas, en regardant le pont : « Il y a un pendu, depuis hier soir. Chez nous. Dans le grenier à foin. Un garçon de la ferme. On l'enterre demain. » Elle relève les yeux. Ils sont pleins d'une espérance affreuse. « Vous qui êtes une vraie, dites-moi si je dois. »"
      ],
      choices: [
        { label: "Examiner le bras, d'abord", to: "SL_examen", hide: { seen: "SL_examen" } },
        { label: "Monter à la ferme des Kerbellec, l'après-midi", to: "SL_ferme" }
      ] },
    SL_examen: { act: "III", title: "Le bras de la fermière", place: "brisegreve", ambiance: "village",
      text: [
        "Victorine fait asseoir Aziliz dans sa cabine, retire le châle, relève la manche. Le bras gauche est plus mince que le droit d'un bon tiers, la peau fine, luisante, d'une pâleur de cire, froide au toucher. La main se ferme mal. Le pouls, au poignet, est faible, mais présent. Sous le coude, les quatre marques ont pâli, mais on les voit encore, quatre ovales grisâtres, régulièrement espacés, et à l'intérieur du bras, plus large, une cinquième. Un pouce.",
        "Victorine pose sa propre main sur le bras, à l'endroit des marques, pour mesurer. Les doigts de Victorine sont trop courts. La main qui a laissé cela était plus grande, plus forte. Une main de femme qui travaille.",
        "Elle connaît des paralysies qui viennent de la peur, d'un choc, d'un chagrin. Elle en a vu à l'hospice, chez des femmes qui n'avaient plus voulu se servir d'un membre, et dont le membre, docile, avait fini par obéir et par mourir. Elle connaît des nerfs qu'on écrase en dormant sur un bras. Elle ne connaît rien qui laisse la trace d'une main, en dormant, dans un lit où personne n'est entré.",
        "Aziliz la regarde faire, avec une confiance entière. Elle dit, comme une chose sans importance, qu'elle a rêvé, la nuit où c'est venu, qu'une femme lourde était assise sur sa poitrine et lui tordait le bras en grimaçant. Elle n'a pas vu son visage. Elle dit que c'est une bêtise, un rêve. Victorine note le rêve, dans son cahier, à côté des mesures."
      ],
      choices: [
        { back: "SL_visite", label: "Retourner près d'Aziliz, sur le pont" }
      ] },
    SL_ferme: { act: "III", title: "Le bras de la fermière", place: "brisegreve", ambiance: "village",
      fx: { meet: "jeanne_gourin" },
      text: [
        { first: true, text: "La ferme des Kerbellec est sur le plateau, derrière le bourg, à l'abri d'un talus planté de hêtres tordus par le vent du large. Une grande cour carrée, un fumier fumant, un puits, une longère de granit, et la grange au fond, haute, avec sa porte de grenier ouverte en haut du pignon, sur le noir. Personne ne regarde cette porte. Tout le monde l'évite du regard, avec application." },
        { first: true, text: "Le garçon s'appelait Yannig Gourin. Dix-sept ans. Né à la ferme, de Jeanne Gourin, qui y travaille depuis vingt ans, et d'un père dont personne ne dit le nom, parce que tout le monde le connaît. On l'avait accusé, la veille, d'avoir volé deux écus dans la boîte du fermier. On l'avait fouillé, devant les autres. On n'avait rien trouvé. Le soir, il est monté au grenier." },
        { first: true, text: "Il repose à la chapelle du bourg, sur deux tréteaux, en attendant d'être porté en terre demain, au coin des réprouvés, parce que le recteur n'a pas voulu de lui dans le cimetière bénit. Sa mère le veille. Elle n'a pas quitté la chapelle depuis hier. Et le fermier, Gweltaz Kerbellec, est assis dans sa cuisine, devant un bol de cidre qu'il ne boit pas, et regarde le mur." },
        { again: true, text: "La cour carrée, le fumier, le puits, et la porte du grenier ouverte sur le noir, que personne ne regarde." }
      ],
      choices: [
        { label: "Descendre à la chapelle, où Jeanne Gourin veille son fils", to: "SL_jeanne", hide: { seen: "SL_jeanne" } },
        { label: "Décider, avec Aziliz, ce qu'elle fera cette nuit", to: "SL_nuit", if: { seen: "SL_jeanne" }, why: "Victorine veut d'abord voir la mère du garçon." }
      ] },
    SL_jeanne: { act: "III", title: "Le bras de la fermière", place: "brisegreve", ambiance: "nuit",
      text: [
        "La chapelle du bourg est petite, basse, glacée. Deux cierges. Deux tréteaux. Un drap. Sous le drap, un corps long et maigre d'adolescent, les pieds dépassant, en chaussettes de laine reprisées. Sur une chaise, à côté, une femme de trente-cinq ans, grande, forte, les mains énormes et rouges posées sur les genoux. Elle ne prie pas. Elle regarde les chaussettes.",
        "Victorine s'assied sur le banc, derrière elle. Au bout d'un long moment, Jeanne Gourin parle, sans se retourner. Elle dit que les chaussettes, c'est elle qui les a reprisées, dimanche. Elle dit qu'il était doux, son Yannig, trop doux pour un bâtard, qu'il aurait fallu qu'il soit méchant, qu'elle le lui disait, qu'il ne voulait pas. Elle dit qu'il n'a rien volé. Elle dit que son père le savait.",
        "Puis elle dit, de la même voix, sans transition, qu'elle a fait un rêve, au printemps. Une nuit, la nuit après les noces du fermier. Elle a rêvé qu'elle entrait dans la chambre de la mariée, et qu'elle s'asseyait sur elle, et qu'elle lui prenait le bras, le gauche, celui de l'alliance, et qu'elle le serrait, le tordait, de toutes ses forces, en lui crachant au visage tout ce qu'elle n'avait jamais dit. Elle s'est réveillée en sueur, la main droite crispée, avec une crampe jusqu'à l'épaule.",
        "Elle tourne enfin la tête vers Victorine. Elle a des yeux secs, terribles. « Le lendemain, dit-elle, la petite avait mal au bras. Je l'ai vue le frotter, dans la cour. J'ai eu peur de moi, madame. Éveillée, je lui voulais rien du tout. Mon sommeil, lui, lui en voulait. » Elle regarde ses grandes mains rouges. Elle ne sait pas ce qu'Aziliz a l'intention de faire, cette nuit."
      ],
      choices: [
        { back: "SL_ferme", label: "Retourner à la ferme des Kerbellec" }
      ] },
    SL_nuit: { act: "III", title: "Le bras de la fermière", place: "brisegreve", ambiance: "nuit",
      text: [
        "Aziliz attend Victorine à la barrière de la cour, à la nuit tombée, son châle sur le bras. Elle est très pâle. Elle dit qu'elle est prête. Qu'elle ira à la chapelle à minuit, quand la mère dormira peut-être, et qu'elle touchera le cou du garçon, une seule fois, et qu'elle s'en ira. Elle dit que le sorcier a dit : il faut que personne ne voie.",
        "Victorine pense au corps sous le drap, aux chaussettes reprisées. Elle pense à Jeanne Gourin, sur sa chaise, qui ne dormira pas. Elle pense aux quatre marques sous le coude, et au pouce, à l'intérieur. Elle pense au fermier dans sa cuisine, devant son bol, qui regarde le mur, et qui est le père du pendu, et le mari de la jeune femme, et l'homme qui a laissé fouiller son fils devant les valets pour deux écus.",
        "Aziliz ne sait rien de tout cela. Elle attend que la vraie médecin lui dise ce qu'elle doit faire."
      ],
      choices: [
        { label: "L'accompagner à la chapelle, à minuit, puisqu'elle le veut", fx: { flag: "sl:touche" }, to: "SL_touche" },
        { label: "Lui interdire le remède, et lui bander le bras pour une cure de deux mois", fx: { flag: "sl:soigne" }, to: "SL_soigne" },
        { label: "Lui dire qui veille le mort, et qui elle a rêvé, avant qu'elle décide", fx: { flag: "sl:jeanne" }, to: "SL_deux" }
      ] },
    SL_touche: { act: "III", title: "Le bras de la fermière", place: "brisegreve", ambiance: "nuit",
      text: [
        "Elles entrent dans la chapelle à minuit. Les cierges ont baissé. Jeanne Gourin est toujours sur sa chaise, mais sa tête est tombée sur sa poitrine ; elle dort, d'un sommeil de pierre, le premier depuis deux jours. Aziliz s'approche des tréteaux sur la pointe des pieds. Victorine reste à la porte.",
        "Aziliz soulève le drap, d'une main tremblante, juste assez pour découvrir le cou. Le cou du garçon est blanc, avec un sillon violet, profond, oblique, sous la mâchoire. Elle tend le bras gauche, le bras mort. Elle pose ses doigts sur le sillon. Elle pousse un cri, un petit cri aigu, qui monte sous la voûte. Elle dit que le sang tourne. Elle dit qu'elle le sent. Elle chancelle.",
        "Jeanne Gourin se réveille. Elle voit une femme penchée sur son fils, la main sur sa gorge. Elle reconnaît le bras. Elle se lève, elle est énorme dans la lumière des cierges, elle a ses grandes mains ouvertes. Aziliz recule, en tenant son bras contre elle, et elle voit les mains, et elle les reconnaît, elle aussi. Les deux femmes restent face à face, de part et d'autre du mort, sans un mot, pendant que les cierges coulent.",
        "Puis la porte s'ouvre, derrière Victorine. Gweltaz Kerbellec entre, une lanterne à la main, venu veiller son fils pour la première fois, la nuit, en cachette. Il voit sa femme. Il voit Jeanne. Il voit le drap soulevé. Il pose la lanterne par terre. Il ne dit rien. Il s'agenouille au pied des tréteaux, et il met son front contre les chaussettes reprisées. Victorine sort. Le bras d'Aziliz, au matin, est le même qu'avant. Elle dit qu'elle le sent plus chaud. Victorine ne la contredit pas."
      ],
      choices: [
        { label: "Retourner à Brisegrève", fx: { quest: "SL" }, back: "A3v_brisegreve" }
      ] },
    SL_soigne: { act: "III", title: "Le bras de la fermière", place: "brisegreve", ambiance: "nuit",
      text: [
        "Victorine dit non. Elle le dit avec toute l'autorité de sa voix de médecin, qui est grande. Elle dit que le cou d'un mort ne guérit rien, qu'il y a sous ce drap un enfant de dix-sept ans qui a déjà payé assez, et qu'on ne lui demandera pas en plus de servir de remède. Elle dit qu'elle va soigner le bras, elle, avec des moyens de médecin.",
        "Elle le soigne, le soir même, dans la cuisine de la ferme, à la chandelle. Des frictions, à l'huile camphrée, longues, profondes, de l'épaule au poignet. Des mouvements, qu'elle lui apprend, avec une balle de laine à serrer cent fois par jour. Une attelle légère pour la nuit, pour que la main ne se recroqueville pas. Elle écrit tout sur une feuille, en grosses lettres, pour que le mari puisse le lire. Le mari, assis au bout de la table, devant son bol, ne lève pas les yeux.",
        "Aziliz obéit. Elle serre la balle de laine. Elle dit merci. Mais elle regarde, de temps en temps, par la fenêtre de la cuisine, du côté du bourg, où la chapelle a encore deux points de lumière. Victorine voit ce regard. Elle sait qu'elle a raison. Elle sait aussi qu'un remède auquel on ne croit pas a déjà perdu la moitié de sa force.",
        "Le lendemain, on enterre Yannig Gourin au coin des réprouvés. Victorine, de la coupée, voit passer le petit cortège sur le chemin du plateau : une femme grande et forte, seule derrière la charrette. Le fermier n'y est pas. La fermière non plus. Aziliz, dit-on au bourg, est restée dans sa cuisine, à serrer une balle de laine, cent fois, en pleurant, sans savoir sur quoi."
      ],
      choices: [
        { label: "Retourner à Brisegrève", fx: { quest: "SL" }, back: "A3v_brisegreve" }
      ] },
    SL_deux: { act: "III", title: "Le bras de la fermière", place: "brisegreve", ambiance: "nuit",
      text: [
        "Victorine lui dit tout. Qui était le garçon, et de qui il était le fils, des deux côtés. Qui le veille. Ce que Jeanne Gourin a rêvé, la nuit des noces. Les grandes mains rouges. Aziliz écoute, adossée à la barrière, son bras mort contre elle. Elle devient plus pâle, puis elle rougit, puis elle pâlit de nouveau. Elle dit : « Je savais pour Riwal. Tout le monde savait. Je ne savais pas pour le rêve. »",
        "Elle reste longtemps silencieuse. Puis elle dit qu'elle veut aller à la chapelle. Pas à minuit. Maintenant. Et pas pour toucher le mort. Pour voir la mère.",
        "Dans la chapelle, Jeanne Gourin se lève en la voyant entrer. Les deux femmes se regardent, de part et d'autre des tréteaux. Aziliz parle la première. Elle dit qu'elle ne savait pas, pour les deux écus. Elle dit qu'elle aurait empêché la fouille. Elle dit qu'elle est désolée. Elle le dit maladroitement, en fermière, sans les beaux mots. Jeanne la regarde, puis regarde le bras. Elle dit, d'une voix sourde : « Montre. »",
        "Aziliz écarte le châle. Jeanne prend le bras mort entre ses grandes mains rouges, très doucement, comme on prend un oiseau tombé du nid, et elle le tient, longtemps, sans rien dire, en pleurant enfin. Victorine sort, et les laisse. Elle ne saura pas si le bras a guéri. Au matin, derrière la charrette qui porte Yannig Gourin au coin des réprouvés, il y a deux femmes qui marchent côte à côte, et la plus petite tient le bras de la plus grande, du bras gauche."
      ],
      choices: [
        { label: "Retourner à Brisegrève", fx: { quest: "SL" }, back: "A3v_brisegreve" }
      ] }
  },
  extras: {
    people: {
      aziliz: { name: "Aziliz Kerbellec", qui: "Jeune fermière du plateau de Brisegrève, mariée depuis un an, dont le bras gauche sèche depuis le printemps." },
      jeanne_gourin: { name: "Jeanne Gourin", qui: "Servante de la ferme Kerbellec depuis vingt ans, grande, forte, aux mains rouges, mère d'un garçon de dix-sept ans qui s'est pendu." },
      gweltaz: { name: "Gweltaz Kerbellec", qui: "Fermier taciturne de Brisegrève, qui vend le foin au fort, mari d'Aziliz et père d'un fils qu'il n'a jamais reconnu." }
    },
    quests: [
      { id: "SL", act: "III", kind: "annexe", title: "Le bras de la fermière", start: "SL_visite", doit: "brasdesseche", echo: ["sl:touche", "sl:soigne", "sl:jeanne"] }
    ]
  }
};
