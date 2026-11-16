// Act II, what follows the coup: the three back together (A2c_apres), the pour seen by those who struck before it
// (A2c_coulee), the strike (A2c_tenue), the vote `greve_a2` (tenir / vendre / partir, a tie means partir), the two short
// roads (vendre, partir ; the long one, tenir, is in a2_tenir), then the forge where Maître Crochemore makes or studies
// the key, his first doubt, Mademoiselle Quincarnon at the gate, Sans-Bruit, Loridan and his one answer, and the road.
// Sets: monde:mineurs:allies (a2_tenir) | monde:mineurs:trahis | monde:mineurs:seuls · monde:croch:doute1 ·
// sentence:connue (when the mould and the engraver's bill were both read) · monde:celeste:libre | monde:celeste:trahie ·
// relic cle_fer. Leads to A3c_route.
var POSTE = function (m, o, v) { return [{ if: { role: "a2", is: "main" }, to: m }, { if: { role: "a2", is: "oeil" }, to: o }, { to: v }]; };
var JUSTE = { all: [{ has: "monde:a2:clef=moulee" }, { has: "monde:a2:clef_juste" }] };
var DEUX = { all: [{ has: "monde:a2:clef=moulee" }, { not: "monde:a2:clef_juste" }] };
var PRISE = { has: "monde:a2:clef=prise" };
var AVANT = { any: [{ scrutin: "plan_a2", is: "celeste" }, { scrutin: "plan_a2", is: "coffre" }] };
var APRES_CELESTE = [{ if: { has: "monde:a2:celeste_promesse" }, to: "A2c_celeste" }, { to: "A2c_douce" }];
module.exports = {
  passages: {
    A2c_apres: { act: "II", title: "Trois boîtes de fer-blanc", place: "soufflet", charniere: true,
      text: [
        { if: { scrutin: "plan_a2", is: "celeste" }, text: "Minuit passé. Sous le toit du Soufflet d'Or, la chandelle est par terre, entre trois paillasses. Du côté du manoir, les violons ont repris, ou se sont tus pour de bon : d'ici, on ne sait pas." },
        { if: { scrutin: "plan_a2", is: "coffre" }, text: "Cinq heures et demie. Sous le toit du Soufflet d'Or, on n'a pas allumé : le jour entre par la fente du volet, gris, froid, et se pose sur trois paillasses où personne n'a dormi." },
        { if: { scrutin: "plan_a2", is: "greve" }, text: "Vous vous retrouvez derrière le second terril, dans une rigole de mâchefer, à plat ventre, tous les trois, la figure noire. Au-dessous de vous, la halle fume par ses douze lanterneaux. La corne de la Gueule sonne toujours." },
        { if: { not: { any: [{ scrutin: "plan_a2", is: "celeste" }, { scrutin: "plan_a2", is: "coffre" }, { scrutin: "plan_a2", is: "greve" }] } }, text: "Vous vous retrouvez derrière le second terril, dans une rigole de mâchefer, à plat ventre, tous les trois, la figure noire, sans vous être donné rendez-vous : c'est l'endroit où chacun de vous serait allé. Au-dessous, la halle fume par ses douze lanterneaux. La corne de la Gueule sonne toujours." },
        "On pose les trois boîtes côte à côte. Deux sont vides, et le resteront. On ouvre la troisième.",
        { if: JUSTE, text: "Trois creux dans la cire verte : un côté, l'autre côté, le bout. Ils sont nets comme des sceaux. On y lit sept dents, pas deux de la même hauteur, et sur la tranche une rainure en S." },
        { if: DEUX, text: "Deux creux dans la cire verte, nets comme des sceaux : un côté, l'autre côté. Le troisième est une cicatrice. On y devine la tranche d'un panneton, et le commencement d'une rainure." },
        { if: PRISE, text: "Elle est vide, elle aussi. Ce qu'on pose à côté pèse une demi-livre et fait, sur le bois, le bruit d'une chose vraie : la clef de Fer, noire, longue comme la main, l'anneau en trèfle de marteaux." },
        "Maître Crochemore est là. Il a chaussé sa loupe d'horloger, qui lui fait un œil énorme et un œil ordinaire.",
        { if: JUSTE, text: "Il regarde longtemps. Il tourne la boîte au jour. Il souffle dessus. « C'est propre », dit-il enfin ; et comme le mot lui paraît maigre pour un président, il ajoute : « C'est même lisible. Je vois les coups de lime de l'aïeul. Il limait de gauche à droite, comme moi. » Il referme le couvercle avec une douceur de nourrice. « Vous aurez votre clef. Et cet homme, là-bas, garde la sienne en croyant qu'elle est seule au monde. Je trouve cela d'un comique achevé. »" },
        { if: DEUX, text: "Il regarde longtemps. Sa mâchoire travaille. « Deux faces. La tranche manque, avec une rainure dont je vois le départ et dont j'ignore l'arrivée. » Il ôte sa loupe. « Je taillerai. Je taillerai sur ce que je sais des serrures de l'aïeul, et je comblerai le reste par le raisonnement. Mais sachez-le dès ce soir : devant la porte de la Tour, cette clef-là entrera, et elle réfléchira avant de tourner. Il faudra une main qui sache attendre une serrure. »" },
        { if: PRISE, text: "Il la regarde d'abord, les mains au dos, comme on regarde une relique ou un scorpion. « Vous l'avez prise. » Sa voix est sans reproche ; elle compte. « Bien. Alors il le sait, ou il le saura dans l'heure. Il fermera sa vallée. Il écrira à ses deux compères, et son courrier ira plus vite que nous. » Il la prend enfin, la soupèse, et quelque chose passe sur sa figure, qui n'a rien à voir avec la prudence. « Cent cinq ans. C'est lui qui l'a forgée. Je tiens sa main. »" },
        { if: { has: "monde:a2:folio" }, text: "Il y a encore, sortie de la chemise de la main, une grande feuille pliée en quatre, coupée au canif : le folio 412 du Grand Livre. On la lit à trois, sans rien dire." },
        { if: { has: "monde:douce:rancune" }, text: "On apprend, par Radegonde, qui le tient du laitier, qu'il y a eu chasse sur le toit de la halle : les gardes y ont pris un gros homme à nez cassé, tombé d'une gouttière. La femme grise, personne ne l'a revue." },
        { if: { has: "monde:a2:cloche_vu" }, text: "Il y a une figure de trop dans cette affaire : la vôtre. Quelqu'un, sous la halle, en a vu une, de près, et a eu le temps de l'apprendre." },
      ],
      choices: [
        { label: "Attendre midi : la coulée se fera, clef ou non", to: "A2c_coulee", big: true, if: AVANT },
        { label: "Regarder ce qui se passe en bas", to: "A2c_tenue", big: true, if: { not: AVANT } },
      ] },

    A2c_coulee: { act: "II", title: "La Grosse Dette", place: "fonderie",
      text: [
        { if: { not: "monde:a2:clef=prise" }, text: "À midi, vous êtes sous la halle, tous les trois, au pied du beffroi d'essai, dans la suite du président des Heures. Vous avez les mains propres et la conscience tranquille des gens qui n'ont rien pris. Sur la tribune, à quarante pas, Maître Quincarnon porte la clef sur son gilet ventre-de-biche, et la touche en parlant." },
        { if: { has: "monde:a2:clef=prise" }, text: "Il a fait fouiller la ville avant le jour, maison par maison, et fermer les trois portes. Il n'a pas remis la coulée : un bronze à point n'attend personne, pas même un Syndic volé. À midi, vous êtes sur le toit de la halle, à plat ventre contre un lanterneau, où une enfant du Crassier vous a menés par les terrils, pour dix sous ; et vous voyez, à trente pieds sous vous, un gros homme en velours ventre-de-biche, assis au milieu de sa tribune, qui n'a rien sur son gilet et qui sourit à trente Parrains comme on sourit avec une rage de dents." },
        "Sainte-Barbe sonne. Maître Tugdual se signe, crache dans ses mains, lève la perce au-dessus du four du milieu. « Au nom de Dieu ! »",
        "D'abord il ne vient rien : une bave rouge, un fil. Puis les trois fours crèvent ensemble, et le bronze sort. Il est blanc, d'un blanc de linge au grand soleil, frangé de vert. Il avance dans les rigoles avec lenteur, avec poids ; et la nef entière, qui était noire, devient rose. Quatre cents hommes, tête nue, la perche au poing, sortent de l'ombre d'un seul coup.",
        "La chaleur vous prend à la figure. Une fumée blanche monte de la fosse, droite, épaisse. On entend la cloche boire : un bruit énorme, sous terre, de bête qui tète.",
        "À la troisième minute, la corne de la Gueule se met à sonner, hors de toute heure. Trois coups longs. Un silence. Trois coups. Un silence. Trois coups. Et quelque chose manque à l'air, que personne n'entendait plus depuis trente ans : le battement des pompes.",
        { if: { not: "monde:a2:clef=prise" }, text: "La main du Syndic monte à son gilet et se referme sur la clef. Il reste ainsi trois secondes, à regarder couler son bien. Puis il se lève, dit deux mots à son gendre, descend de la tribune le poing sur la poitrine, et gagne l'escalier du teneur : un homme qui compte, quand il a peur, range. Vous le regardez passer à dix pas. Il descend mettre à l'abri une chose dont vous avez le portrait dans une boîte." },
        { if: { has: "monde:a2:clef=prise" }, text: "Le Syndic s'est levé au premier coup. Sa main est montée à son gilet, par habitude, et n'y a rien trouvé ; il l'a regardée, cette main, une seconde. Puis il a descendu les marches de sa tribune." },
        "C'est sur son fauteuil vide que tombe, à travers la fumée, le bout d'une corde. Une forme grise descend le long, les pieds d'abord, sans un à-coup, arrive à hauteur du dossier, tend la main vers l'endroit où devait être un gilet, et ne trouve qu'un coussin de velours.",
        "Sans-Bruit avait tout prévu, hormis qu'un homme assis depuis dix-neuf ans se lèverait ce jour-là. Elle reste une seconde au bout de son chanvre, au-dessus de rien. Puis la maîtresse rigole saute sous la tribune, avec un bruit de canon, et elle remonte à la force des poignets, à travers une pluie blanche qui lui mord la mante. Personne n'a levé la tête. Vous seuls.",
      ],
      choices: [{ label: "Regarder vers la grande porte", to: "A2c_tenue", big: true }] },

    A2c_tenue: { act: "II", title: "« Polycarpe ! »", place: "fonderie", backName: "la grande porte de la halle",
      text: [
        "Les pompes se sont tues. C'est la première chose, et il faut un moment pour en mesurer le poids : une mine qu'on cesse de vider se remplit. La Gueule boit trois pieds d'eau par jour. Dans une semaine, les tailles neuves seront noyées ; dans un mois, il n'y aura plus de charbon à Ferrières, ni de fonte, ni de Syndic.",
        "Les mineurs du poste de jour ne sont pas remontés. Ils sont trois cents, au fond, assis dans l'accrochage, avec du pain pour quatre jours. Ils ont renvoyé la cage vide. Sur le plancher de la cage, il y avait une baguette de coudrier, couverte d'encoches.",
        "Et à la grande porte de la halle, il y a les femmes. Cent, deux cents. Des fichus, des tabliers de toile à sac. Elles sont venues sans bâtons, les mains nues, et elles disent un nom, toutes ensemble, sur trois notes, comme on appelle quelqu'un au fond d'un jardin : « Po-ly-carpe ! » Personne, dans la vallée, n'avait prononcé ce prénom à voix haute depuis la mort de son père.",
        "Il est venu. Il a cet orgueil. Il s'est planté sur le seuil, les pouces au gilet, quarante casaques rousses derrière lui ; et une femme aux cheveux blancs est sortie du rang, lavée, sans suie, en plein jour, pour la première fois depuis dix-neuf ans.",
        "« Trois choses, a dit Zénobie. Le Livre sur la place, ouvert, et qu'on le lise à côté de nos bâtons. Les morts du Levant rendus à leurs familles. La paye en monnaie du roi. »",
        "« Vous aurez faim avant que ma mine ait soif », a répondu Maître Quincarnon, avec bonhomie. Et il a fait fermer la porte.",
        "On en est là. La ville retient son souffle. Les rousses gardent l'Économat, le manoir, la halle. Le bronze refroidit dans sa fosse, où personne n'ira le voir avant trois jours. Maître Crochemore a remballé ses outils, et demande à quelle heure on part.",
        { if: PRISE, text: "Car il faut partir, et vite : le Syndic sait qu'on l'a volé, et les trois portes sont gardées. Reste à savoir ce qu'on laisse derrière soi." },
        { if: { not: "monde:a2:clef=prise" }, text: "Car rien ne vous retient plus. Le Syndic ne sait rien ; la porte du Minerai s'ouvrira au président des Heures et à ses commis. Reste à savoir ce qu'on laisse derrière soi." },
      ],
      choices: [{ label: "En parler à trois, derrière le terril", to: "A2c_greve_vote", big: true }] },

    A2c_greve_vote: { act: "II", title: "Ce qu'on laisse derrière soi", place: "crassier",
      text: [
        "Vous avez ce que vous étiez venus chercher. Dans la maison Berlue, c'est le moment où l'on s'en va, sans se retourner, et où l'on ne se mêle pas des affaires des gens chez qui l'on a travaillé.",
        "Seulement il y a ceci. Vous êtes, dans toute la vallée, les seuls qui sachiez entrer dans le caveau du Grand Livre : par le mot, par la trappe, ou par les deux. Cela vaut quelque chose, et cela vaut la même chose pour deux personnes.",
        { if: { has: "monde:a2:grise" }, text: "Zénobie a tenu sa parole. Elle vous a laissé le champ libre ; elle a marché du même pas. Et elle a dit, au four à chaux, la main à plat sur une main de votre maison : *je veux le Livre.*" },
        "**Le sou : tenir.** Ouvrir le caveau à Zénobie, cette nuit, et sortir le Grand Livre au jour. On y perd une nuit, peut-être deux, dans une vallée fermée. Si le Livre se lit sur la place, la grève est gagnée avant que personne ait eu faim.",
        "**Le bouton : vendre.** Monter au manoir. Dire au Syndic par où l'on entre chez lui, où se cachent les baguettes de onze années, où dort la femme aux cheveux blancs. Un homme qui compte paie ce genre de nouvelles ce qu'elles valent, et ouvre ses portes à qui les lui apporte.",
        "**Le clou : partir.** Ce soir, par la porte du Minerai ou par les terrils. La clef d'abord. Les mineurs se sont levés sans vous ; ils sauront bien finir de même.",
        "*Chacun met sa pièce dans le chapeau, le poing fermé. S'il en sort trois différentes, on fait ce que fait la maison quand elle ne sait pas : on part.*",
      ],
      choices: [
        { label: "Le sou : tenir", voix: "greve_a2", option: "tenir", to: "A2c_greve_urne" },
        { label: "Le bouton : vendre", voix: "greve_a2", option: "vendre", to: "A2c_greve_urne" },
        { label: "Le clou : partir", voix: "greve_a2", option: "partir", to: "A2c_greve_urne" },
      ] },
    A2c_greve_urne: { act: "II", title: "Le chapeau", place: "crassier", charniere: true,
      text: [
        "Ta pièce est tombée sur les deux autres. Le chapeau est dans le mâchefer, entre vous trois.",
        "En bas, les femmes ont cessé d'appeler. Elles se sont assises devant la porte fermée, par terre, en rangs, et elles attendent. On dirait qu'elles ont fait cela toute leur vie.",
      ],
      choices: [{ label: "Retourner le chapeau", to: "A2c_greve_tranche", big: true }] },
    A2c_greve_tranche: { act: "II", title: "Le compte", place: "crassier", branch: [
      { if: { scrutin: "greve_a2", is: "tenir" }, to: "A2c_tenir" },
      { if: { scrutin: "greve_a2", is: "vendre" }, to: "A2c_vendre" },
      { to: "A2c_partir" }] },

    // ───────────────────────────── To sell ─────────────────────────────
    A2c_vendre: { act: "II", title: "Le prix d'une nouvelle", place: "manoir",
      text: [
        "Les boutons l'emportent. On vendra.",
        "On monte au Manoir-Forge à la nuit tombante, par l'allée, sans se cacher. Maître Florimond vous reçoit comme on reçoit une facture. Il vous laisse une demi-heure dans le vestibule, sur le damier, à écouter battre la maison.",
        "Puis une porte s'ouvre, et l'on vous fait entrer chez Monsieur.",
        "Maître Quincarnon n'a pas quitté son habit de la coulée. Il est assis à son bureau, entre deux flambeaux, devant un registre. Il n'a plus sa bonhomie ; ou plutôt il l'a ôtée, comme on ôte une perruque en rentrant chez soi, et l'on voit dessous une figure de quarante-neuf ans, lourde, attentive, sans rien de méchant, où tout est à sa place.",
        "« Trois commis du président. » Il vous regarde les mains, l'une après l'autre. « Je me disais aussi. Asseyez-vous. Je vous écoute, et je vous préviens que je sais déjà la moitié de ce que vous allez me vendre : c'est mon habitude. Tâchez de me vendre l'autre. »",
        "On la lui vend. On parle bas, chacun son tour, comme la Douairière vous l'a appris : la trappe de fonte, la barre limée, le puits d'aérage qu'on a oublié de murer. Le four à chaux, derrière le troisième terril, et la planche qu'un garçon y tient. L'endroit où Thècle porte chaque soir une baguette de coudrier.",
        "Il écoute, la plume posée, les yeux mi-clos, et l'on voit ses lèvres remuer à mesure : il additionne.",
      ],
      choices: [{ label: "Attendre le total", to: "A2c_vendre_2", big: true }] },
    A2c_vendre_2: { act: "II", title: "Trois cents écus", place: "manoir",
      fx: { gold: 300, flag: "monde:mineurs:trahis", ep: ["histoire", 800] },
      text: [
        "« Trois cents écus chacun », dit Maître Quincarnon.",
        "Il ouvre un tiroir, en tire trois rouleaux cachetés, et les aligne sur le bureau, du bout du doigt, à distance égale. C'est de la monnaie du roi. Elle n'a jamais passé par l'Économat.",
        { if: PRISE, text: "« Je sais ce que vous m'avez pris. » Il le dit sans élever la voix. « Je ne vous le redemande pas ce soir : vous ne l'avez pas sur vous, vous n'êtes pas des enfants. Je vous ouvre ma porte du Minerai, à minuit, et je vous donne trois jours d'avance. Après, je vous fais chercher par toute la terre. C'est un marché. Vous m'avez rendu ma mine ; je vous rends votre peau. Nous serons quittes, et vous verrez que je le suis toujours. »" },
        { if: { not: "monde:a2:clef=prise" }, text: "« Vous sortirez par ma porte du Minerai, demain matin, avec votre horloger, que je ne veux plus voir. Vous direz à Aiguemorne que Ferrières est une vallée tranquille. » Il referme le tiroir. « Je ne vous demande pas ce que vous étiez venus faire chez moi. Vous me le diriez mal. Des gens qui savent trouver une trappe ne viennent pas pour une pendule ; mais vous m'avez rendu ma mine, et je paie ce que je dois. »" },
        "Il sonne. Le capitaine Escarbille entre, écoute dix mots, et sort en bouclant son ceinturon.",
        "Vous êtes encore dans l'allée quand vingt lanternes descendent vers le Crassier, au pas de course. Vous les regardez tourner l'épaule du troisième terril. Il y a un cri de femme, un seul, très loin ; puis des coups sourds, comme d'une planche qu'on enfonce.",
        "Le rouleau pèse dans ta poche. Trois cents écus : le prix exact qu'on demande, aux Plombs d'Aiguemorne, pour ouvrir la porte à un prisonnier pour dettes. La Douairière aurait trouvé le compte plaisant. Tu ne sais pas si elle aurait ri.",
      ],
      choices: [{ label: "Redescendre", to: "A2c_vendre_3", big: true }] },
    A2c_vendre_3: { act: "II", title: "La porte du Minerai", place: "soufflet",
      text: [
        "On passe la porte du Minerai avec le jour, derrière la chaise de poste du président. Les rousses saluent. La bascule ne pèse personne.",
        "La ville est grise, et elle travaille. Les pompes ont repris à quatre heures du matin : on les entend de la route, régulières, comme un cœur qu'on a fait repartir. La cage a remonté le poste de jour par fournées de douze, entre deux haies de hallebardes. On dit que la femme aux cheveux blancs est à l'Économat, dans la cave aux jetons, et qu'elle n'a pas dit un mot.",
        "Sur le bord du chemin, à la sortie des corons, une grande femme osseuse est debout, les mains dans son tablier. Thècle. Elle vous regarde passer, tous les trois, l'un après l'autre. Elle garde la bouche fermée et les mains où elles sont. Elle regarde, comme on regarde un compte pour s'en souvenir.",
        "Maître Crochemore, dans sa chaise, a baissé le store de son côté. Il n'a pas desserré les dents depuis la veille. Au premier relais, il descend, vient à vous, et dit une seule chose, de sa voix de séance :",
        "« J'ai horreur des pendules qu'on règle en volant un quart d'heure. Je croyais que nous étions du même avis. »",
        "Il remonte. La chaise repart. On marche derrière.",
      ],
      choices: [{ label: "Suivre la chaise jusqu'à la première forge", to: "A2c_clef", big: true }] },

    // ───────────────────────────── To leave ─────────────────────────────
    A2c_partir: { act: "II", title: "La maison s'en va", place: "soufflet",
      fx: { flag: "monde:mineurs:seuls" },
      text: [
        { if: { scrutin: "greve_a2", is: "partir" }, text: "Les clous l'emportent. On part.", else: "Un sou, un bouton, un clou. La maison ne sait pas ; quand elle ne sait pas, elle part." },
        "On fait les sacs sous le toit du Soufflet d'Or. Cela prend peu de temps : on est venu avec des limes, on s'en va avec des limes, et une boîte.",
        { if: { all: [{ has: "monde:a2:grise" }, { role: "a2", is: "oeil" }] }, text: "Tu es allé{e} le dire au hangar des trieuses, parce qu'on ne s'en va pas de chez quelqu'un sans le dire. Thècle a écouté, les mains dans son tablier. Elle a répondu : « Chacun sa besogne. Vous, c'est les serrures. Nous, c'est de durer. » Et elle a repris son marteau." },
        { if: { all: [{ has: "monde:a2:grise" }, { not: { role: "a2", is: "oeil" } }] }, text: "{qui:a2:oeil} l'a dit au hangar des trieuses, parce qu'on ne s'en va pas de chez quelqu'un sans le dire. Thècle a écouté, les mains dans son tablier. Elle a répondu : « Chacun sa besogne. Vous, c'est les serrures. Nous, c'est de durer. » Et elle a repris son marteau." },
        { if: PRISE, text: "Les trois portes sont gardées. On sortira par les terrils, à la nuit, derrière Barbette ou quelque autre enfant qui connaît les trous ; le président suivra par la porte du Minerai, en chaise, avec ses passeports et une colère de trois jours." },
        { if: { not: "monde:a2:clef=prise" }, text: "On sort par la porte du Minerai, à la tombée du jour, derrière la chaise du président. Les rousses saluent. La bascule ne pèse personne." },
        "Radegonde vous regarde descendre son escalier, vos sacs sur l'épaule. Elle essuie un étain. « Vous avez bien choisi votre jour, dit-elle. Demain, je n'aurai plus de pain à vendre. »",
      ],
      choices: [{ label: "Prendre la route", to: "A2c_partir_2", big: true }] },
    A2c_partir_2: { act: "II", title: "Une vallée qui se tait", place: "boisnoir", ambiance: "nuit",
      text: [
        "Du haut de la côte, à l'entrée du Bois-Noir, on se retourne. C'est une faiblesse ; la Douairière la défendait.",
        "Ferrières est au fond de son trou, sous la lune. Les terrils fument. Les lanterneaux de la halle se sont éteints un à un, à mesure que le bronze refroidissait. Et il y a une chose qu'on n'avait jamais entendue en trois jours, et qui monte jusqu'ici : le silence. Plus de pompes. Plus de martinet : on l'a arrêté à la brune, faute de bras. La maison qui bat a cessé de battre.",
        "Devant la grande porte, il y a une tache claire, immobile. Ce sont les fichus des femmes. Elles sont encore assises.",
        "On ne saura pas, d'ici, comment cela finit. On l'apprendra dans une auberge, dans trois semaines, d'un roulier ; ou on ne l'apprendra jamais. Les vallées sont pleines d'histoires dont les voleurs n'ont vu que le premier acte.",
        "Maître Crochemore s'est retourné, lui aussi. Il a regardé longtemps. Puis il a dit, sans que personne lui demande rien : « Ils ont raison pour la pendule. » Et il s'est remis en marche.",
      ],
      choices: [{ label: "Marcher jusqu'à la première forge", to: "A2c_clef", big: true }] },

    // ───────────────────────────── The key ─────────────────────────────
    A2c_clef: { act: "II", title: "Une nuit de lime", place: "boisnoir", ambiance: "nuit", charniere: true,
      fx: { relic: "cle_fer", ep: ["histoire", 1500] },
      text: [
        { if: { has: "monde:mineurs:allies" }, text: "La forge du maréchal de la Gueule est une baraque de planches, sur le carreau, où l'on ferre les chevaux du fond. On l'a ouverte pour le président comme on ouvre une église. Deux mineurs tirent le soufflet. Un troisième tient la lampe, et ne respire pas." },
        { if: { not: "monde:mineurs:allies" }, text: "La première forge est à deux lieues, au hameau de la Croix-de-Fer : un maréchal qui dort, et qu'on réveille avec un écu. Il vous laisse son feu, son enclume, et va se recoucher en disant que les gens de la ville ont de drôles d'heures." },
        { if: { not: "monde:a2:clef=prise" }, text: "Maître Crochemore ôte son habit, retrousse ses manches de dentelle, et noue un tablier de cuir sur sa culotte de soie. On le voit, pour la première fois, sans public. Il coule son plâtre. Il le démoule. Il choisit, dans une trousse de serge, un barreau d'acier de ressort, bleu, long comme la main, et le serre dans l'étau." },
        { if: { not: "monde:a2:clef=prise" }, text: "Puis il lime. Il lime toute la nuit, à petits coups, de gauche à droite, la loupe à l'œil, sans une parole, en présentant de temps à autre son ouvrage au plâtre comme on présente un enfant à une toise. Les copeaux tombent sur son tablier, bleus, frisés. Vers quatre heures, il trempe : un sifflement, une odeur d'huile. Il essuie. Il se retourne." },
        { if: JUSTE, text: "« Voilà. » Elle est dans sa paume, grise, neuve, luisante, avec ses sept dents et sa rainure en S. « C'est la sœur de l'autre. Mettez-les côte à côte dans le noir : le Juge lui-même s'y tromperait. » Il a les yeux rouges, les doigts en sang, et l'air d'un homme parfaitement heureux." },
        { if: DEUX, text: "« Voilà. » Elle est dans sa paume, grise, neuve, luisante, avec ses sept dents. « Les deux flancs sont justes au cheveu. La rainure, je l'ai conduite en S, parce que je vois le départ du S et que l'aïeul n'aimait pas les angles. Si j'ai deviné, elle tourne. Si je me suis trompé d'un demi-point, elle entre, elle accroche, et il faudra la prier. » Il te la met dans la main. « Je ne me trompe guère. Mais je ne signe pas. »" },
        { if: PRISE, text: "Maître Crochemore n'a rien à tailler, puisqu'on a pris le fer. Il demande pourtant le feu, l'étau, sa loupe ; et il passe la nuit devant la clef de l'aïeul, à la mesurer au compas, dent par dent, et à en lever le dessin sur une feuille. « Si on nous la reprend, dit-il, je veux pouvoir la refaire. Et puis je ne l'avais jamais vue. Personne des miens ne l'a vue depuis cent cinq ans : on nous a bâti le Juge, et on nous a ôté les clefs. »" },
        "Vous avez la clef de Fer. Il en reste deux.",
      ],
      choices: [{ label: "Regarder le président : il a quelque chose à dire", to: "A2c_croch_doute", big: true }] },
    A2c_croch_doute: { act: "II", title: "Un homme qui raisonne", place: "boisnoir", ambiance: "nuit",
      fx: { flag: "monde:croch:doute1", clue: "s_doute" },
      text: [
        "Il a quelque chose à dire, et cela lui coûte : on le voit à ce qu'il range ses limes une à une, par taille, ce qu'il ne fait jamais.",
        { if: { any: [{ has: "monde:a2:moule_lu" }, { has: "monde:a2:croch_sait_cloche" }] }, text: "« Cette cloche. » Il ne se retourne pas. « Elle porte, fondu dans le bronze, que le Juge a nommé Hyacinthe Belorgey Gouverneur perpétuel. Le Juge ne parle que dans six semaines. J'ai retourné cela trois jours. Un fondeur peut-il savoir ce que dira, dans six semaines, une machine qui pense ? »", else: "« Ce banquet, ce gendre qu'on promène, ces trente Parrains qui touchent la clef comme on touche une promesse. » Il ne se retourne pas. « Toute cette vallée se conduit comme si elle savait déjà ce que dira le Juge dans six semaines. J'ai retourné cela trois jours. Peut-on savoir d'avance ce que dira une machine qui pense ? »" },
        "Personne ne répond. Il s'en passe.",
        "« Mon arrière-grand-père a construit un jugement. Douze mille pièces. Des cames, des pesées, une balance à sept fléaux qui met les Causes en regard et laisse tomber la plus lourde. Je l'ai lu dans ses cahiers. Je l'ai cru toute ma vie ; je le crois. » Sa voix tremble un peu, et se raffermit. « Or on ne dicte rien à une balance. On ne lui souffle pas un nom. Si quelqu'un sait le nom d'avance, c'est qu'on a ôté la balance, et mis à la place quelque chose qui répète. »",
        { if: { has: "monde:a2:discorde" }, text: "Il se retourne enfin. « Vous m'avez parlé d'un mémoire de graveur, dans le secrétaire de cet homme. Un cylindre de mille deux cents lignes. Savez-vous ce que c'est qu'un cylindre gravé, dans mon métier ? C'est une serinette. C'est la boîte à musique qu'on donne aux enfants : elle joue un air, toujours le même, tant qu'on la remonte. » Il a pâli. « Ils veulent mettre une serinette dans le Juge de Bronze. »" },
        { if: { all: [{ has: "monde:a2:discorde" }, { any: [{ has: "monde:a2:moule_lu" }, { has: "monde:a2:croch_sait_cloche" }] }] }, text: "Mille deux cents lignes gravées d'avance, un nom fondu d'avance, et *perpétuel* dans le bronze : une Sentence écrite une fois, et que le Juge redira tous les sept ans, à jamais, tant qu'il y aura trois clefs pour le remonter. Voilà ce que préparent les trois Clavaires. Voilà ce que le vieux Balancier avait compris." },
        "« Je vais avec vous jusqu'au bout, dit Maître Crochemore. Je vous avais suivis pour qu'on ne casse rien. À présent je veux voir ce qu'ils ont fait à l'œuvre. » Il reprend son habit puce, le secoue, l'enfile. « Et s'il se trouve que je me trompe, que la balance est à sa place et que le Bronze pense, je vous ferai mes excuses à tous les trois, par écrit, sur vélin. »",
      ],
      choices: [
        { label: "Reprendre la route", to: APRES_CELESTE, big: true, if: { not: { all: [{ has: "monde:a2:discorde" }, { any: [{ has: "monde:a2:moule_lu" }, { has: "monde:a2:croch_sait_cloche" }] }] } } },
        { label: "Reprendre la route", to: APRES_CELESTE, big: true, if: { all: [{ has: "monde:a2:discorde" }, { any: [{ has: "monde:a2:moule_lu" }, { has: "monde:a2:croch_sait_cloche" }] }] }, fx: { flag: "sentence:connue", ep: ["histoire", 1500] } },
      ] },

    // ───────────────────────────── Mademoiselle Quincarnon ─────────────────────────────
    A2c_celeste: { act: "II", title: "Une demoiselle sur une borne", place: "boisnoir",
      text: [
        "À la sortie de la vallée, là où le chemin de Ferrières rejoint la grand-route, il y a une croix de fonte et une borne. Sur la borne, quelqu'un est assis.",
        "C'est une jeune femme en manteau de voyage gris, un sac de tapisserie sur les genoux, un carton à chapeau à ses pieds. Elle a de la boue jusqu'aux chevilles. Elle a dû partir avant le jour, à pied, par les jardins, et marcher deux lieues dans des souliers de bal.",
        "Mademoiselle Céleste Quincarnon se lève en vous voyant. Elle se tait. Elle n'a jamais rien demandé deux fois de sa vie ; elle a demandé celle-ci une fois, sur une terrasse, et on lui a répondu.",
        "Maître Crochemore s'arrête net. « Qu'est-ce que c'est que cela ? »",
        { if: { role: "a2", is: "voix" }, text: "C'est à toi qu'elle regarde. C'est toi qui as donné ta parole : *quand nous passerons la porte, vous la passerez avec nous.* Les deux autres attendent. Une parole de la voix engage la maison ; mais c'est la voix qui la tient ou qui la reprend." },
        { if: { not: { role: "a2", is: "voix" } }, text: "C'est {qui:a2:voix} qu'elle regarde. Une parole de la voix engage la maison ; mais c'est la voix qui la tient ou qui la reprend. Tu attends, comme attend l'autre, sans rien montrer." },
        { if: { has: "monde:mineurs:trahis" }, text: "Elle sait ce qu'on a fait hier soir chez son père : elle a entendu, de sa chambre, les lanternes descendre. Elle est venue quand même. Cela dit assez ce qu'est la maison d'où elle sort." },
      ],
      choices: [
        { label: "Lui prendre son carton à chapeau : « Venez. »", to: "A2c_celeste_tenu", if: { role: "a2", is: "voix" }, fx: { flag: "monde:celeste:libre", ep: ["perso", 800] } },
        { label: "« Mademoiselle, la route que nous prenons n'est pas pour vous. »", to: "A2c_celeste_rompu", if: { role: "a2", is: "voix" }, fx: { flag: "monde:celeste:trahie" } },
        { label: "Attendre ce que dira la voix de la maison", to: "A2c_douce", big: true, if: { not: { role: "a2", is: "voix" } } },
      ] },
    A2c_celeste_tenu: { act: "II", title: "Parole tenue", place: "boisnoir",
      text: [
        "Elle te laisse prendre le carton. Elle garde le sac.",
        "« Je ne vous encombrerai pas longtemps, dit-elle, de sa voix nette. J'ai une tante à Aiguemorne, rue des Ferronniers, qui a épousé contre l'avis de mon père et qu'il n'a pas revue depuis. C'est une recommandation. Vous me laisserez à la première diligence. » Elle regarde la route, derrière vous, vide jusqu'au tournant. « Il ne me fera pas courir après. Il enverrait Ugolin, s'il osait dire à quelqu'un que sa fille est partie. Il n'osera pas avant le mariage, et il n'y aura pas de mariage. »",
        "Elle fait dix pas. Elle s'arrête, ôte ses souliers de bal, les regarde, et les pose sur la borne, côte à côte, bien droits, les pointes vers Ferrières.",
        "« Voilà, dit Mademoiselle Quincarnon. Qu'il les mette au Livre. »",
        "Elle marche pieds nus jusqu'au relais. Maître Crochemore, qui a d'abord protesté, lui offre son bras au deuxième quart de lieue, et lui explique l'échappement à ancre. Elle écoute. C'est la première personne qui l'écoute depuis Aiguemorne ; il en est tout changé.",
      ],
      choices: [{ label: "Marcher jusqu'au relais", to: "A2c_douce", big: true }] },
    A2c_celeste_rompu: { act: "II", title: "Parole reprise", place: "boisnoir",
      text: [
        "Elle t'écoute jusqu'au bout. Elle a été élevée à cela.",
        "Tu dis ce qu'on dit : les routes, les prévôts, trois personnes qu'on cherche pour un meurtre, et ce qu'on ferait d'elle si l'on vous prenait ensemble. Tout est vrai. Elle le sait aussi bien que toi.",
        "« Vous aviez dit *oui*, sur la terrasse. » Sa voix est égale. « Vous l'aviez dit vite. J'aurais dû me méfier d'un *oui* qui venait si vite : mon père les dit de même, à ceux qui lui empruntent. »",
        "Elle ramasse son carton à chapeau. Elle regarde la grand-route, d'un côté, puis de l'autre, puis le chemin par où elle est venue ; et elle prend le quatrième, un sentier de terre qui monte dans les genêts et qui ne mène, que tu saches, nulle part.",
        "« Mademoiselle ! crie Maître Crochemore. Ce sentier ne va à rien ! »",
        "« Alors il me convient », dit-elle sans se retourner.",
        "On la voit longtemps, grise sur le jaune des genêts, son sac à la main, qui monte.",
      ],
      choices: [{ label: "Reprendre la route", to: "A2c_douce", big: true }] },

    // ───────────────────────────── Sans-Bruit ─────────────────────────────
    A2c_douce: { act: "II", title: "Un gant sur une branche", place: "boisnoir",
      text: [
        { if: { all: [{ has: "monde:a2:celeste_promesse" }, { not: { role: "a2", is: "voix" } }, { has: "monde:celeste:libre" }] }, text: "{qui:a2:voix} a pris le carton à chapeau. La demoiselle marche avec vous, pieds nus, jusqu'au relais ; elle a laissé ses souliers de bal sur la borne, les pointes vers Ferrières." },
        { if: { all: [{ has: "monde:a2:celeste_promesse" }, { not: { role: "a2", is: "voix" } }, { has: "monde:celeste:trahie" }] }, text: "{qui:a2:voix} a parlé des routes et des prévôts. La demoiselle a écouté, ramassé son carton, et pris un chemin de genêts qui ne mène à rien. On l'a vue longtemps monter." },
        "Le Bois-Noir, de jour, sent la résine et la meule de charbonnier. La route y fait un coude, au pied d'un hêtre.",
        { if: { has: "monde:douce:estime" }, text: "À une branche basse du hêtre, à hauteur d'yeux, quelqu'un a pendu un gant de dentelle noire. Dans le gant, un billet, plié en quatre, d'une écriture penchée et sans fautes : *La Cendre est dans la main d'un mort, à Ossevaux, et ce mort a des gardiens qui chantent. N'y allez pas par les portes. Je paie ce que je dois ; nous voilà quittes, et je reprends mon avance. S. B.*" },
        { if: { has: "monde:douce:rancune" }, text: "Contre le tronc du hêtre, quelqu'un a planté un couteau, et sous le couteau un mouchoir à carreaux, raide de sang séché. C'est celui de Pipeau. Il n'y a pas de billet. Elle a jugé que cela se passait d'écriture." },
        { if: { all: [{ not: "monde:douce:estime" }, { not: "monde:douce:rancune" }, { has: "monde:a2:douce_vue" }] }, text: "Dans la boue du coude, il y a des traces de roues fraîches, étroites, d'une voiture légère menée vite. Elles vont au sud. Sans-Bruit a manqué la clef de Fer ; elle n'a pas perdu une heure à la regretter. Elle a de nouveau une journée d'avance." },
        { if: { all: [{ not: "monde:douce:estime" }, { not: "monde:douce:rancune" }, { not: "monde:a2:douce_vue" }] }, text: "Dans la boue du coude, il y a des traces de roues fraîches, étroites, d'une voiture légère menée vite, et sur le talus l'empreinte d'un soulier de femme, petit, qui n'a pas appuyé. Elles vont au sud." },
        { if: { has: "gants:payeur" }, text: "Celui qui la paie a déjà la clef de Sang. Vous tenez le Fer. Il reste la Cendre ; et elle y court." },
        "Au bout du bois, là où les arbres s'ouvrent, un homme est assis sur une meule éteinte. Il a un manteau couleur de muraille, un chapeau sans plume, et des gants gris.",
      ],
      choices: [{ label: "Aller à lui", to: "A2c_loridan", big: true }] },

    // ───────────────────────────── Loridan ─────────────────────────────
    A2c_loridan: { act: "II", title: "Le jour de la première clef", place: "boisnoir",
      fx: { gold: 150, clue: "c_premiere" },
      text: [
        "« Vous avez deux jours de retard sur mon calcul », dit Vespasien Loridan. Il n'a pas levé les yeux du petit livre qu'il lisait. « Je m'en félicite. Si vous aviez été à l'heure, c'est que vous auriez bâclé. »",
        "Il ferme le livre. C'est un bréviaire. Il se lève, regarde chacun de vous à la figure, puis aux mains, puis à la figure encore, comme un médecin.",
        { if: PRISE, text: "« Vous avez pris le fer. Je le sais par la route : il y a des cavaliers roux à tous les relais, qui cherchent trois limeurs et un horloger. » Il a un mouvement des lèvres. « La personne que je sers aurait préféré qu'il n'en sût rien. Elle m'a aussi chargé de vous dire, au cas où, que ce qui est fait est fait, et qu'elle a dormi quarante-cinq ans à côté de choses plus fâcheuses. »", else: "« Il ne sait rien. Je le sais par la route : aucun cavalier, aucune affiche nouvelle. » Il a un mouvement des lèvres qui, sur une autre figure, serait de la joie. « La personne que je sers m'avait dit : *s'ils sont ceux que je crois, il gardera sa clef et la croira seule.* Elle sera contente. Elle l'est rarement. »" },
        "Il tire de son manteau trois petites bourses, de la même toile grise que ses gants. « Cent cinquante écus chacun, sur le compte. Pour la route d'Ossevaux, qui est longue, et où l'on paie jusqu'à l'eau. »",
        { if: { has: "monde:mineurs:allies" }, text: "« On m'a conté aussi l'affaire du Livre. Toute la province la contera dans huit jours. » Il vous regarde avec une attention nouvelle. « Ce n'était pas dans le marché. Elle me demandera pourquoi vous l'avez fait. Je lui dirai que je n'en sais rien ; et elle sourira, parce qu'elle le saura. »" },
        { if: { has: "monde:mineurs:trahis" }, text: "« On m'a conté aussi ce qui s'est passé au four à chaux. » Sa voix n'a pas changé ; ses gants se sont croisés. « Cela n'était pas dans le marché, ni contre le marché. Je le lui dirai comme on me l'a dit. Elle a nourri des gens de cette sorte toute sa vie ; je ne sais pas ce qu'elle en pensera. Je sais ce que j'en pense, et l'on ne me paie pas pour le dire. »" },
        "« Mme Berlue vit. Elle est aux Plombs, au troisième rang, cellule neuf. Quelqu'un paie sa pistole : elle a un lit, du feu, et elle bat ses geôliers aux cartes. Le prévôt Corbineau a pris la route derrière vous. Il a deux jours de retard, et il les regagne. »",
        { if: { has: "p:reponse_due" }, text: "Il remet son bréviaire dans sa poche. « Et je vous dois une réponse. Le jour de la première clef : nous y sommes. J'avais dit *une*. Vous êtes trois, j'aurais dû compter. Soit : une chacun, à l'oreille. Vous verrez entre vous si vous vous les répétez. »" },
      ],
      choices: [
        { label: "« Qui nous paie ? »", to: "A2c_loridan_qui", if: { has: "p:reponse_due" }, fx: { unflag: "p:reponse_due" } },
        { label: "« Pourquoi la Langue du Juge, et rien d'autre ? »", to: "A2c_loridan_langue", if: { has: "p:reponse_due" }, fx: { unflag: "p:reponse_due" } },
        { label: "« Que vous a dit la Douairière pour nous ? »", to: "A2c_loridan_berlue", if: { has: "p:reponse_due" }, fx: { unflag: "p:reponse_due" } },
        { label: "Empocher la bourse, et écouter la route", to: "A2c_fin", big: true, if: { not: "p:reponse_due" } },
      ] },
    A2c_loridan_qui: { act: "II", title: "À l'oreille", place: "boisnoir",
      fx: { clue: "c_nourri", ep: ["histoire", 800] },
      text: [
        "Il se penche. Il sent l'encens froid et le drap propre.",
        "« Je ne vous dirai pas son nom. Elle n'en a plus : on le lui a ôté il y a longtemps, avec le reste. Je vous dirai ceci, qui est vrai, et vous en ferez ce que vous pourrez. »",
        "Il baisse encore la voix.",
        "« Vous avez mangé de son pain. Tous les trois. L'hospice des Enfants de la Morne, la soupe des Bas-Fonds en hiver, le quai qu'on a rebâti après la crue : c'est elle. Elle a nourri la ville basse pendant quarante-cinq ans sans en avoir jamais vu une rue. »",
        "Il se redresse. Ses gants gris tremblent un peu, comme l'autre nuit, dans la barque.",
        "« Ne me demandez pas comment on nourrit une ville sans la voir. C'est la question suivante, et je n'en devais qu'une. »",
      ],
      choices: [{ label: "Reprendre ta place", to: "A2c_fin", big: true }] },
    A2c_loridan_langue: { act: "II", title: "À l'oreille", place: "boisnoir",
      fx: { clue: "s_langue", ep: ["histoire", 800] },
      text: [
        "Il se penche. Il sent l'encens froid et le drap propre.",
        "« Parce qu'on peut tout changer dans un automate, les rouages, les poids, ce qui le fait mouvoir. On l'a déjà fait, et on s'apprête à le refaire. Mais il n'a qu'une langue : une anche de bronze, que le premier Crochemore a accordée lui-même, et dont il a emporté le secret. Sans elle, le Juge remue les lèvres et ne rend aucun son. »",
        "Il te regarde, pour voir si tu suis.",
        "« Ceux qui veulent lui faire dire, la Nuit des Clefs, ce qu'ils ont écrit d'avance, ont besoin qu'il parle. La personne que je sers préfère qu'il se taise plutôt que de mentir avec sa voix. Elle tient à cette voix. Elle y a des droits que je ne peux pas vous expliquer. »",
        "Il se redresse. « C'est une réponse. Elle est entière. Vous ne la comprendrez tout à fait qu'en haut de la Tour. »",
      ],
      choices: [{ label: "Reprendre ta place", to: "A2c_fin", big: true }] },
    A2c_loridan_berlue: { act: "II", title: "À l'oreille", place: "boisnoir",
      fx: { flag: "a2:lor_berlue", ep: ["perso", 800], pv: 6 },
      text: [
        "Il se penche. Il sent l'encens froid et le drap propre. Et pour la première fois depuis que tu le connais, il a l'air embarrassé.",
        "« Je l'ai vue jeudi. On m'a laissé un quart d'heure, à travers un guichet. Elle m'a fait répéter trois fois, pour être sûre que je ne changerais pas un mot ; je ne change jamais un mot, mais elle ne me connaît pas. »",
        "Il ferme les yeux, et récite, de sa voix de sacristie, avec un accent des Bas-Fonds qui lui va comme une casaque à un évêque :",
        "« *Dis-leur que la soupe est mauvaise et que le lit est bon. Dis-leur que je ne veux voir personne à ce guichet avant qu'ils aient les trois : celui qui revient pour moi avec une clef ou deux, je lui tire les oreilles à travers la grille. Dis à la main de ne pas forcer. Dis à l'œil de dormir. Dis à la voix de se taire une fois sur trois. Et dis-leur…* »",
        "Il rouvre les yeux.",
        "« Ici, elle s'est arrêtée. Elle a regardé ses cartes. Puis elle a dit : *Non. Ça, je leur dirai moi-même.* »",
        "Tu marches mieux, après, sans bien savoir pourquoi.",
      ],
      choices: [{ label: "Reprendre ta place", to: "A2c_fin", big: true }] },

    A2c_fin: { act: "II", title: "La route d'Ossevaux", place: "boisnoir", charniere: true,
      fx: { ep: ["histoire", 2000] },
      text: [
        "Loridan est reparti comme il était venu, à pied, par le chemin du canal, son bréviaire à la main. Il a dit qu'on le reverrait le jour de la deuxième clef, et qu'il tâcherait, d'ici là, de ne pas mourir.",
        "Vous êtes au bord du Bois-Noir. Devant vous, la grand-route descend vers le sud. Elle passera au large d'Aiguemorne, dont on verra le piton un soir, de loin, sans y entrer. Puis viendra la Blanche-Lande, une plaine de craie que le vent peigne ; et au bout, à six jours d'ici, une ville blanche sur un plateau blanc.",
        "« Ossevaux, dit Maître Crochemore. La ville où l'on est plus nombreux dessous que dessus. J'y ai une cousine, enterrée. »",
        { if: { has: "monde:celeste:libre" }, text: "Mademoiselle Quincarnon a pris la diligence d'Aiguemorne, pieds nus, avec son carton à chapeau. Elle a serré la main du président. Elle vous a regardés tous les trois, et elle a dit : « Je me souviendrai que quelqu'un m'a ouvert une porte. On m'en avait toujours fermé. »" },
        "On fait le compte, comme la Douairière l'exigeait à chaque sortie de ville : ce qu'on a, ce qu'on sait, ce qu'on doit.",
        { if: JUSTE, text: "*Ce qu'on a.* Une clef de Fer, sœur de la vraie, et un Syndic qui dort tranquille." },
        { if: DEUX, text: "*Ce qu'on a.* Une clef de Fer taillée sur deux faces et un raisonnement, et un Syndic qui dort tranquille." },
        { if: PRISE, text: "*Ce qu'on a.* La clef de Fer, la vraie, et un Syndic qui ne dort plus." },
        { if: { has: "remonteur:verite" }, text: "*Ce qu'on sait.* Qui a tué Maître Balancier, de quelle main, et sur l'ordre de quels cachets.", else: "*Ce qu'on sait.* Trop peu sur la mort de Maître Balancier ; mais l'homme qui a frappé couche à Ferrières, et la main qui a payé y tient ses livres." },
        { if: { has: "sentence:connue" }, text: "Et ce que les trois Clavaires veulent faire dire au Bronze, à jamais." },
        { if: { has: "monde:mineurs:allies" }, text: "*Ce qu'on doit.* Rien à Ferrières. C'est Ferrières qui doit, et l'on y a dit qu'on s'en souviendrait." },
        { if: { has: "monde:mineurs:trahis" }, text: "*Ce qu'on doit.* À Ferrières, quelque chose qui ne se paie pas en écus, et qu'une grande femme osseuse a inscrit en vous regardant passer." },
        { if: { has: "monde:mineurs:seuls" }, text: "*Ce qu'on doit.* À Ferrières, rien qu'on ait signé. On est parti avant la fin." },
        "Il reste cinq semaines avant la Nuit des Clefs. Il reste deux clefs.",
      ],
      choices: [{ label: "Descendre vers la plaine", to: "A3c_route", big: true }] },
  },

  extras: {
    scrutins: {
      greve_a2: { title: "La grève de Ferrières", options: { tenir: "Tenir", vendre: "Vendre", partir: "Partir" }, tie: "partir", tieSay: "Un sou, un bouton, un clou : la maison ne sait pas, elle part." },
    },
    clues: {
      s_doute: { rev: "S", text: "Maître Crochemore : « On ne dicte rien à une balance. Si quelqu'un sait d'avance ce que dira le Juge, c'est qu'on a mis à la place quelque chose qui répète. »" },
      c_premiere: { rev: "C", text: "Loridan, le jour de la première clef : la personne qu'il sert « a dormi quarante-cinq ans à côté de choses plus fâcheuses ». Quelqu'un paie la pistole de la Douairière aux Plombs." },
      c_nourri: { rev: "C", text: "Loridan, à l'oreille : celle qui paie n'a plus de nom. Elle a fondé l'hospice des Enfants de la Morne et nourri la ville basse quarante-cinq ans « sans en avoir jamais vu une rue »." },
      s_langue: { rev: "S", text: "Loridan, à l'oreille : on peut tout changer dans le Juge, sauf sa langue, une anche de bronze. Ceux qui ont écrit d'avance ce qu'il dira ont besoin qu'il parle." },
    },
  },
};
