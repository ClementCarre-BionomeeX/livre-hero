// Act I · « Le noyé de l'écluse »: the morning after the Feast of Lanterns. Gervaise Maupas knocks at the hero's door
// at the Pot d'Étain; the bridge where her son was taken at dawn; the lock of the Tanneurs, where the drowned man was
// found, and the sergeant who arrested him. The act ends when the hero sets out on the case.

module.exports = {
  A_reveil: { act: "I", title: "Le Pot d'Étain", place: "pont",
    text: [
      "On frappe à ta porte comme on frappe chez un médecin : vite, fort, sans s'arrêter.",
      "Le jour est à peine levé. Par la fenêtre, l'Aune roule une eau grise, lente, encombrée de débris de la nuit : des carcasses de petites barques en papier, des chandelles mortes, des rubans. Sur le Pont des Changeurs, les boutiquiers lèvent leurs volets un à un, en bâillant. Les cloches de la Haute-Ville sonnent sept heures.",
      "Tu as la bouche pâteuse du vin chaud d'hier, et une chemise jetée sur le dossier de la chaise. On frappe encore.",
      "« S'il vous plaît, dit une voix de femme derrière la porte. S'il vous plaît. On m'a dit que c'était ici. »",
    ],
    choices: [
      { label: "Ouvrir", to: "A_gervaise" },
    ] },

  A_gervaise: { act: "I", title: "Gervaise Maupas", place: "pont",
    fx: { meet: ["gervaise", "hugon", "gaspard"] },
    text: [
      "C'est une femme d'une cinquantaine d'années, petite et large, un foulard noué serré sur des cheveux gris. Elle a les avant-bras rouges et crevassés des lavandières, et elle tient contre son ventre un panier vide, comme si elle avait oublié de le poser en sortant de chez elle.",
      { if: { has: "passe:rixe" }, text: "« C'est vous, dit-elle. Hier soir, à la Lanterne Sourde. Les deux hommes, avec les couteaux. Vous les avez séparés sans rien casser. Tout le quartier en parle. » Elle reprend son souffle. « Il me faut quelqu'un qui n'a pas peur. »" },
      { if: { has: "passe:lettre" }, text: "« La patronne m'a dit que vous saviez lire, dit-elle. Lire et écrire. Et que vous ne posiez pas trop de questions. » Elle reprend son souffle. « Moi, il va falloir que j'en pose. Et je ne sais pas lesquelles. »" },
      { if: { has: "passe:hasard" }, text: "« J'ai frappé à toutes les portes, dit-elle. Vous êtes la seule personne qui a ouvert. » Elle te regarde comme on regarde un pont dont on n'est pas sûr qu'il tiendra, et dont on a besoin quand même." },
      "« Je m'appelle Gervaise Maupas. Mon fils s'appelle Hugon. Il a dix-neuf ans, il est batelier, il travaille sur les barges de sel. Ce matin, à l'ouverture des boutiques, le guet l'a pris sur le Pont des Changeurs. Ils disent qu'il a tué l'essayeur. »",
      "Le mot essayeur t'est inconnu. Elle le voit.",
      "« Maître Ombreuil. Gaspard Ombreuil. L'essayeur-juré de la Monnaie, celui qui dit si les écus sont bons. On l'a trouvé à l'aube contre les portes de l'écluse des Tanneurs, noyé. Et mon fils avait sa bague dans la poche. Il voulait la vendre à la changeuse du pont. » Elle serre son panier. « Il dit qu'il ne l'a pas tué, et il s'arrête là. Il se tait même devant moi, sa mère. »",
      "« On le juge dans trois jours, à la cloche du soir, devant les échevins. Si personne ne dit rien d'autre, ils le pendront. Tout le monde sait qu'il s'était battu avec Maître Ombreuil, la veille. Tout le monde. »",
      "Elle fouille dans son tablier et pose sur ta table deux écus d'argent et un anneau de cuivre, mince, usé jusqu'à la corde. « C'est tout ce que j'ai. L'anneau, c'est celui de mon mariage. Il ne vaut rien, mais c'est tout ce que j'ai. »",
    ],
    choices: [
      { label: "Prendre l'affaire, et lui rendre son argent et son anneau", fx: { flag: "gervaise:gratuit", regard: { gervaise: "redevable" } }, via: "gratuit", to: "A_accepte" },
      { label: "Prendre l'affaire, et les deux écus ; lui rendre l'anneau", fx: { gold: 40, regard: { gervaise: "cordial" } }, via: "paye", to: "A_accepte" },
      { label: "Lui dire que ce n'est pas ton affaire", to: "A_refus" },
    ] },

  A_refus: { act: "I", title: "La porte refermée", place: "pont",
    text: [
      "Elle reprend ses deux écus et son anneau en silence. Elle ne supplie pas. Elle hoche la tête, deux fois, comme quelqu'un qui s'y attendait, et elle redescend l'escalier en tenant la rampe.",
      "Tu fais ton sac. Le soleil se lève sur le Pont des Changeurs. Par la fenêtre, tu la vois traverser le pont, petite, son panier contre le ventre. Devant le comptoir de la changeuse, elle s'arrête, longtemps. Puis elle repart vers la Haute-Ville, là où est la tour du Guet, et la foule du matin la recouvre.",
    ],
    choices: [
      { label: "Descendre en courant et la rattraper sur le pont", via: "rattrape", to: "A_accepte" },
      { label: "Payer ta chambre et quitter Orbeval", to: "F_depart" },
    ] },

  F_depart: { act: "I", title: "Le Pot d'Étain", place: "pont", end: true,
    fx: { flag: "fin:depart" },
    text: [
      "Tu prends la route du sud par la porte des Rouliers, à l'heure où les charrettes de légumes entrent en ville. Derrière toi, les cloches d'Orbeval sonnent neuf heures, puis dix, de plus en plus petites.",
      "Trois jours plus tard, dans une auberge de bord de route, un colporteur raconte en mangeant sa soupe qu'on a pendu un jeune batelier à Orbeval, pour l'essayeur de la Monnaie. Il le raconte entre deux autres nouvelles, une histoire de grêle et le prix du sel. Personne à la table ne demande le nom du garçon.",
      "Toi non plus.",
    ] },

  A_accepte: { act: "I", title: "Gervaise Maupas", place: "pont",
    text: [
      { via: "gratuit", text: "Elle ne reprend pas tout de suite ses écus. Elle les regarde sur la table, puis elle te regarde, et quelque chose dans sa figure se défait et se refait. « Vous êtes sûr{e} ? » Tu ramasses les pièces et l'anneau, et tu les lui mets dans la main. Elle referme les doigts dessus." },
      { via: "paye", text: "Tu prends les deux écus. Tu lui rends l'anneau. Elle le remet à son doigt, et elle a l'air soulagée : on ne doit rien à quelqu'un qu'on a payé." },
      { via: "rattrape", text: "Tu la rattrapes devant le comptoir de la changeuse, au milieu du pont. Elle se retourne. Elle ne te demande pas pourquoi tu as changé d'avis. Elle te prend le bras, et elle le serre, fort." },
      "« Il est à la tour du Guet, dit-elle. En haut de la ville. On peut lui porter du pain le matin, mais on ne peut pas lui parler longtemps. Moi, il ne me parle pas. Vous, peut-être. »",
      "« La sergente qui l'a pris s'appelle Hallard. Elle est encore à l'écluse, avec l'éclusier. Elle n'est pas méchante. Elle est pressée. Ici, tout le monde est pressé que ce soit fini. »",
      "Elle hésite. « Et il y a la fille. La fille de l'essayeur. Oriane. Mon fils… » Elle cherche ses mots, ne les trouve pas, secoue la tête. « Vous verrez bien. Moi, je retourne à mon linge. Si je ne lave pas, on ne mange pas, et il faudra bien qu'il mange, mon garçon, quand il sortira. »",
    ],
    choices: [
      { label: "Descendre aux Tanneurs, à l'écluse", to: "A_pont_matin" },
    ] },

  A_pont_matin: { act: "I", title: "Le Pont des Changeurs", place: "pont",
    fx: { meet: ["isaline"] },
    text: [
      "Le Pont des Changeurs est une rue posée sur l'eau. Les maisons y ont trois étages, les boutiques s'ouvrent des deux côtés, et entre elles on ne voit le fleuve que par des fentes. Ce matin, il y a du monde : on parle bas, par petits groupes, et chaque groupe regarde le même endroit.",
      "C'est un comptoir de changeuse, au milieu du pont. Une plaque de marbre, une balance de cuivre sous un globe de verre, des piles de pièces de tous les pays rangées dans des godets. Derrière, une vieille femme à lunettes, le dos très droit, fait sonner des écus un par un sur le marbre et les range sans lever la tête. On te dit son nom à voix basse, comme s'il pouvait la déranger : Dame Isaline Veillon. C'est à elle que le garçon a voulu vendre la bague.",
      "« Elle l'a reconnue tout de suite, dit un apprenti boulanger, avec son panier de pains sur la tête. Elle a fermé le globe de la balance dessus, elle a dit au garçon d'attendre, et elle a sifflé le guet. Il n'a même pas couru. »",
      "Au bout du pont, le quai descend vers les Tanneurs. L'odeur change en cent pas : le pain, la cire et la poussière d'argent laissent place à l'eau croupie, au cuir mouillé, à la chaux.",
    ],
    choices: [
      { label: "Continuer jusqu'à l'écluse", to: "A_ecluse" },
    ] },

  A_ecluse: { act: "I", title: "L'écluse des Tanneurs", place: "tanneurs",
    fx: { meet: ["barthe", "hallard"] },
    text: [
      "L'écluse des Tanneurs est un bassin de pierre noire long comme une église, fermé à chaque bout par deux grandes portes de chêne bardées de fer. L'eau y dort, verte et lisse. Au-dessus, le canal arrive des Orfèvres ; au-dessous, il descend vers l'Aune et le port. Une maisonnette d'éclusier, des perches, des chaînes, un treuil.",
      "Une trentaine de personnes regardent les portes d'aval, comme si le mort allait y revenir. Un vieil homme à barbe blanche, le pantalon trempé jusqu'aux cuisses, les tient à distance avec sa perche et une patience usée : l'éclusier. On l'appelle Barthe.",
      "Au bord du bassin, une femme en manteau de cuir du guet prend des notes sur une tablette de cire, le pied posé sur une borne. Elle a des cheveux roux coupés court, une vieille cicatrice qui lui tire le coin de la bouche, et l'air de quelqu'un qui n'a pas dormi depuis la veille de la fête. La sergente Hallard.",
      { regard: { hallard: "cordial" }, text: "Elle lève les yeux sur toi, et quelque chose dans ta façon de te tenir, de regarder d'abord les mains des gens, puis leurs pieds, lui fait plisser les yeux. « Toi, tu as porté le manteau du guet. Ça se voit. Où ça ? »" },
      { regard: { hallard: "neutre" }, text: "Elle lève les yeux sur toi, et elle t'a déjà rangé{e} parmi les badauds. « Il n'y a plus rien à voir. On l'a emporté à l'Hôtel-Dieu. Circulez. »" },
    ],
    choices: [
      { label: "Lui dire que tu viens de la part de Gervaise Maupas", to: "A_hallard" },
    ] },

  A_hallard: { act: "I", title: "La sergente Hallard", place: "tanneurs", takes: 1,
    fx: { clue: ["m_sibylle_porte", "m_fuite_theo"], meet: ["sibylle", "theophane"] },
    text: [
      { regard: { hallard: "cordial" }, text: "Tu lui dis le nom de ta ville et les trois années. Elle grogne : ça ne vaut pas grand-chose, le guet d'une autre ville, mais c'est mieux que rien. « Et maintenant tu travailles pour la mère du gamin. » Ce n'est pas une question. « Bon. Au moins tu sauras ce que c'est, une affaire qu'on boucle trop vite. »" },
      { regard: { hallard: "neutre" }, text: "Au nom de Gervaise Maupas, elle soupire. « La mère. Évidemment. » Elle te regarde mieux, cette fois, des pieds à la tête. « Elle a trouvé quelqu'un pour fouiller. Bon. Fouillez. Mais vous ne me gênez pas, et vous ne me mentez pas. L'un me prend mon temps, l'autre ma patience. »" },
      "Elle t'emmène un peu à l'écart, contre le mur de la maison de l'éclusier, là où le vent ne porte pas les voix.",
      "« Barthe l'a trouvé à cinq heures et demie, contre les portes d'aval, le visage dans l'eau. Les portes l'avaient bien abîmé ; on a eu du mal à le sortir. Il avait le manteau de l'essayeur, un manteau gris doublé de martre, il n'y en a pas deux comme ça en ville. La veuve est venue à l'Hôtel-Dieu. Elle l'a reconnu depuis la porte de la salle des morts. Au manteau. Elle n'a pas voulu approcher. »",
      "« À sept heures, le petit Maupas a posé la bague de l'essayeur sur le comptoir de la Veillon. La veille au soir, devant toute la Lanterne Sourde, Ombreuil l'avait giflé et menacé de le faire jeter dans l'Aune s'il revoyait sa fille. Le gamin avait les manches trempées et les mains écorchées. Il n'a pas d'endroit où il était cette nuit, ou il ne veut pas le dire. » Elle referme sa tablette. « Mettez-vous à la place des échevins. »",
      "« Il y a une chose qui me gêne, dit-elle encore, plus bas. Le second de l'essayeur, Théophane Lescot, a disparu cette nuit-là. Sa chambre, chez la mère Garnaude, a été vidée de son sac. Il a laissé ça. »",
      "Elle sort de son manteau une feuille pliée en quatre et te la tend.",
      "« Une lettre d'adieu. Il dit qu'il a volé la Monnaie et qu'il s'en va. Les échevins disent : un voleur qui s'enfuit, un amoureux qui tue, deux affaires, deux coupables, l'un parti, l'autre en cellule, tout le monde est content. » Elle hausse les épaules. « Peut-être qu'ils ont raison. Moi j'ai quatre hommes et vingt affaires. Gardez la lettre jusqu'à l'audience, rapportez-la-moi avant la cloche. »",
      "Elle te donne aussi un jeton de cuivre aux armes de la ville. « Avec ça, on vous ouvrira la tour du Guet, aux heures de visite, et la salle des morts de l'Hôtel-Dieu. On enterre l'essayeur après-demain, à trois heures. Après ça, il n'y aura plus rien à regarder. »",
      "« Le matin, je suis à mon bureau de la tour. Le soir, je fais ma ronde ici, le long du canal. Si vous trouvez quelque chose, vous me l'apportez. À moi d'abord. »",
    ],
    choices: [
      { label: "Prendre la lettre et le jeton", fx: { item: ["lettre_adieu", "jeton"], clue: "m_lettre" }, to: "A_portes" },
    ] },

  A_portes: { act: "I", title: "Les portes d'aval", place: "tanneurs",
    text: [
      "La sergente est repartie vers la Haute-Ville, ses deux hommes derrière elle. La foule se disperse : il n'y a vraiment plus rien à voir.",
      "Tu restes un moment au bord du bassin. Les portes d'aval sont fermées. Elles sont plus hautes que deux hommes l'un sur l'autre, noires d'eau, couvertes d'une barbe d'algues que le courant peigne dans le même sens. Contre elles, à la surface, flottent encore des débris de la fête : des lambeaux de papier rouge, une chandelle, une rose.",
      "Barthe s'est assis sur la marche de sa maison et bourre une pipe qu'il n'allume pas. Plus haut, sur le canal, on aperçoit le pont des Lavandières, une passerelle de planches. Une lavandière y bat son linge. Le battoir claque, régulier, et l'écho revient des murs.",
      "Trois jours. La cloche du soir, dans trois jours. Tu as un jeton de cuivre, une lettre d'adieu, et une ville entière qui préférerait que tu ne demandes rien.",
    ],
    choices: [
      { label: "Te mettre au travail", fx: { quest: "I_affaire", questSeen: "II_enquete" }, to: "H_tanneurs" },
    ] },
};
