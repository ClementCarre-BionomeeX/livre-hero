// Le Grand Raccordement · Basile's five chapters (second person). 1: the six o'clock round in the Salle froide, the
// Héraut, the chief and the new lock. 2: after the technical visit, Octave and the register. 3: the orangerie before
// noon. 4: the evening at the Domaine, alone on guard (the iron bars, or article 88). 5: the dawn, and his last words.
// Each chapter ends with ch<n>:basile and goes back to its crossroads.
var COMPRIS = { has: "midi:compris" };
module.exports = {
  // ---------------------------------------------------------------- 1 · six o'clock
  B1_ronde: { act: "I", title: "La ronde de six heures", place: "salle",
    text: [
      "À six heures du matin, la Salle froide du Domaine Croûte & Chrome est l'endroit le plus froid du pays, et peut-être du monde. On l'entretient à quatre degrés, jour et nuit, été comme hiver, pour le confort des sculptures. La porte en est capitonnée de cuir. Le souffle des visiteurs y fait de petits nuages qui montent vers le plafond à caissons, et s'y perdent, comme des prières qu'on n'a pas eu le temps de finir.",
      "Tu t'appelles Basile. Tu as vingt ans, la peau couleur d'acajou ciré, un uniforme bleu nuit trop large aux épaules, et une semaine et un jour d'ancienneté. L'uniforme était celui de ton père. Le règlement aussi : un petit livre relié de toile, que tu portes dans la poche de poitrine, annoté au crayon par deux générations de gardes. Tu le sais par cœur. Tu le récites en marchant, à mi-voix, pour te tenir compagnie.",
      "« Article 3. Le garde ne touche pas les collections. Article 4. Le garde ne s'assied pas dans la Salle froide. Article 5. Le garde ne parle pas aux collections. »",
      "Tu parles aux collections. Tout le monde a ses faiblesses.",
      "Le long des murs, sous des cloches de verre hautes comme des hommes, se dressent les Enjambeurs de beurre de la Maison : un par année depuis 1921, sculptés chaque printemps par le maître beurrier pour la vitrine de l'Entrepôt de Mirevaux, puis rapatriés ici, à l'abri, comme des saints dans une crypte. Ce sont tous le même ange, joufflu, doré, la trompette aux lèvres, un pied levé. Mais chaque maître beurrier y a mis sa main, si bien que l'ange de 1938 a l'air inquiet, celui de 1971 a des favoris, et celui de l'année dernière ressemble au directeur commercial.",
      "Au milieu de la Salle, sur un socle de marbre noir, se tient l'original.",
    ],
    choices: [{ label: "Faire face au Héraut d'inox", to: "B1_heraut" }] },
  B1_heraut: { act: "I", title: "Le Héraut d'inox", place: "salle",
    text: [
      "Il mesure un mètre dix. Il est d'acier blanc, poli jusqu'à la folie, et dans cette lumière de cave il ne brille pas : il rayonne de l'intérieur, comme une eau très pure au fond d'un puits. C'est un ange enfant, nu comme les anges des églises, les joues rondes, les ailes repliées. Il souffle dans une trompette longue comme ton bras. Son pied gauche est levé, au-dessus du vide, et il le tient ainsi depuis plus d'un siècle, avec une patience qui te fait honte chaque fois que tu bâilles.",
      "On dit qu'Ernestine Chrome l'a forgé pour la vitrine du premier magasin, à Mirevaux, et que la Maison l'a fait venir au Domaine quand il est devenu trop précieux pour la rue. On dit que c'est d'après lui qu'on a dessiné le petit ange doré des mottes, des boîtes et des affiches. On dit qu'il vaut plus cher que le palais. On dit beaucoup de choses dans le vestiaire des gardes. Toi, tu sais seulement que lorsque tu te tiens devant lui, ton reflet dans son ventre d'acier est petit, tordu et très sérieux, et que tu as envie de te tenir plus droit.",
      "« Bonjour, dis-tu. Il fait quatre degrés. Le chef dit qu'aujourd'hui des messieurs du Consortium viennent te voir à neuf heures. Pour une visite technique. Je ne sais pas ce que c'est. Je le saurai à neuf heures. »",
      "L'ange ne répond pas. C'est ce qu'il a de mieux.",
      "Sur la trompette, à l'endroit où les doigts de l'ange la tiennent, l'acier est un peu plus clair qu'ailleurs, comme usé. Les vieux gardes disent que c'est l'endroit où l'on touche pour la chance. Les vieux gardes disent aussi que c'est interdit, article 3.",
    ],
    choices: [
      { label: "Toucher la trompette, une fois, pour la chance", fx: { flag: "b:trompette", ferveur: 1 }, to: "B1_gourdon" },
      { label: "Saluer réglementairement, deux doigts à la visière", fx: { flag: "b:salut" }, to: "B1_gourdon" },
    ] },
  B1_gourdon: { act: "I", title: "Le chef Gourdon", place: "salle",
    fx: { meet: ["gourdon"] },
    text: [
      { if: { has: "b:trompette" }, text: "L'acier est si froid qu'il te mord le bout des doigts. Tu retires la main. Sur la trompette, ton empreinte reste une seconde, une petite brume, puis s'efface. Dans le ventre de l'ange, ton reflet a l'air coupable. Tu as l'impression, très nette et parfaitement absurde, que quelqu'un, quelque part, vient de te remercier." },
      { if: { has: "b:salut" }, text: "Tu salues. Deux doigts à la visière, le talon claque, le règlement est content. Dans le ventre de l'ange, ton reflet salue aussi, en plus petit, et un peu de travers." },
      "La porte capitonnée s'ouvre avec un soupir de cuir, et le chef Gourdon entre dans la Salle froide comme on entre dans un bain qu'on sait trop froid : la poitrine en avant, la moustache hérissée, le règlement à la main. C'est un homme carré, rouge de froid ou de nature, avec vingt-six ans de service, un sifflet chromé autour du cou et une voix de dogue enrhumé qui a appris à crier les virgules.",
      "« Stagiaire ! Article 9 ! Le garde se tient à un mètre cinquante des collections ! Vous êtes à un mètre douze ! Je l'ai à l'œil, le mètre douze ! » Il recule de trente-huit centimètres, pour l'exemple. « Ordres du jour. Primo : à sept heures, livraison de beurre, porte de service. La livreuse de Mirevaux, la petite rousse à la moto. Vous recevez, vous comptez, vous signez. Secundo : à neuf heures, visite technique du Consortium des Panneaux Réunis, ici même, en présence de Monsieur. Vous vous tenez droit, vous ne dites rien, vous ne touchez à rien. Tertio… »",
      "Il fronce le sourcil. Tertio n'est pas dans le règlement, et cela le contrarie visiblement.",
      "« Tertio. Cette nuit, le Consortium a fait poser sur la porte de service une serrure à eux. Un Verrou Lumière, ils appellent ça. Personne ne m'a demandé. Je n'ai pas la clé. Ils disent qu'il n'y a pas de clé. » Il regarde le Héraut, comme pour le prendre à témoin. « Une serrure sans clé, stagiaire. Le règlement ne prévoit pas ça. »",
      "Il ouvre le tiroir du poste de garde, en sort un talkie-walkie, le tien, puis un second, identique, qui traîne là depuis des années, avec le petit ange doré de la Maison sur le côté. Il te met le premier dans la main et laisse l'autre dans le tiroir.",
      "« Canal 4. Débrouillez-vous avec la porte. »",
    ],
    choices: [
      { label: "« Chef, et le second talkie ? »", fx: { flag: "b:talkie" }, to: "B1_fin" },
      { label: "« Bien, chef. »", to: "B1_fin" },
    ] },
  B1_fin: { act: "I", title: "Canal 4", place: "salle",
    fx: { clue: "c_verrou" },
    text: [
      { if: { has: "b:talkie" }, text: "« Le second ? » Le chef te regarde comme on regarde une question mal posée. « Le second, c'est pour le collègue. Vous n'avez pas de collègue. Le règlement prévoit deux gardes par poste. Le budget en prévoit un. » Il referme le tiroir. Tu le rouvres dès qu'il a tourné les talons, et tu glisses le second talkie dans ta poche. Tu ne sais pas encore pourquoi. Le règlement non plus." },
      { if: { not: { has: "b:talkie" } }, text: "Le chef sort. Le tiroir est resté entrouvert, et le second talkie-walkie te regarde avec son petit ange doré. Tu le glisses dans ta poche. Article 21 : le garde veille au matériel. Personne ne dira que tu as laissé traîner le matériel." },
      "Tu passes par la galerie des cuisines pour gagner la porte de service. Elle est en fer peint en vert, au fond de la cour, et sur sa face intérieure, au-dessus de la vieille serrure du chef, on a vissé cette nuit un boîtier blanc et lisse, sans trou de clé, avec une petite cellule noire au milieu et, gravé dessous, un soleil carré : *Verrou Lumière™ · une solution du Consortium des Panneaux Réunis.*",
      "Tu poses la main dessus. Il est tiède. Il est le seul objet tiède du Domaine.",
      "Dehors, de l'autre côté de la porte, dans la cour, un moteur de moto tousse, deux fois, puis se tait.",
    ],
    choices: [{ label: "Attendre la livreuse, la main sur la porte", fx: { flag: "ch1:basile" }, to: "C1" }] },

  // ---------------------------------------------------------------- 2 · the register
  B2_registre: { act: "I", title: "La galerie des collections", place: "salle",
    fx: { meet: ["octave"] },
    text: [
      "Après la visite, la Salle froide sent le costume blanc et l'après-rasage. Tu ouvres la porte capitonnée pour aérer, ce que le règlement interdit, et tu restes un moment sur le seuil, entre le froid et le reste du monde, à écouter ton cœur se calmer.",
      { if: { has: "mesure=oui" }, text: "Sur le socle du Héraut, une étiquette autocollante, collée de travers par un technicien : *Réservé · Consortium des Panneaux Réunis · Ne pas déplacer.* Tu as envie de la décoller. Article 3. Tu ne touches pas les collections. L'étiquette, elle, les touche." },
      { if: { has: "mesure=non" }, text: "Le Héraut d'inox se tient sur son socle comme ce matin. Ils n'ont pas eu leur chiffre. Tu sais, sans savoir comment, que cela ne leur suffira pas." },
      "Dans la galerie, quelqu'un marche sans bruit. C'est Octave, le jeune majordome de Monsieur, vingt-cinq ans, habit noir, gants blancs, un visage où rien ne bouge. On dit au vestiaire qu'il a souri une fois, à son embauche, et que le chef de cuisine a trouvé ça déplacé. Il porte sous le bras un grand livre relié de cuir vert.",
      "« Le registre des collections, dit-il, sans que tu aies rien demandé. Monsieur souhaite qu'on vérifie que tout est encore là. » Il ouvre le livre sur le pupitre de la galerie. « Tout est encore là. Monsieur souhaitera qu'on le vérifie de nouveau à midi. »",
      "Il tourne les pages pour toi, avec la pointe d'un gant. Chaque trésor du Domaine a sa ligne, à l'encre violette : le nom, l'auteur, la hauteur, la date d'entrée. Les Enjambeurs de beurre, un par an. Les baguettes d'acier de 1899, dans leur écrin. Et, à la première page, d'une écriture penchée et ancienne :",
      "*Le Héraut d'inox, par Ernestine Chrome. Hauteur : un mètre dix.*",
      "Au bout de la ligne, il reste une colonne vide, intitulée *Sorties*.",
    ],
    choices: [
      { label: "« Pourquoi est-ce qu'ils le veulent ? »", fx: { clue: "c_registre" }, to: "B2_octave" },
      { label: "« Et si quelqu'un voulait le sortir ? »", fx: { clue: "c_registre", flag: "b:sortie" }, to: "B2_octave" },
    ] },
  B2_octave: { act: "I", title: "Ce que dit un majordome", place: "salle",
    text: [
      { if: { has: "b:sortie" }, text: "Octave lève les yeux du registre. C'est, chez lui, un geste considérable. « Le règlement des collections, article 88, dit-il. En cas de péril, le garde évacue les collections par la porte de service et note la sortie au registre. » Il referme le livre. « Je ne crois pas que quiconque ait jamais lu l'article 88 jusqu'au bout. Il est à la page des articles que personne ne lit. »" },
      "« Le Consortium veut le Héraut parce qu'il brille, dit Octave. Monsieur Zénith a parlé, dans la voiture, d'un point focal. D'un centre. » Il prononce les mots comme on tient des gants sales. « Je crois qu'ils ont besoin, au milieu de tous leurs panneaux, d'une chose qui renvoie la lumière parfaitement, pour viser. Le Héraut est la seule chose du pays qui la renvoie ainsi. Il a été poli pendant cent ans. Par nous. »",
      "Il marque une pause, très courte.",
      "« Monsieur a dit non. Monsieur Zénith a dit que le Raccordement ne demandait pas l'avis des abonnés. Monsieur a pleuré. Monsieur pleure facilement. Mais il avait raison de pleurer, pour une fois. »",
      "Ton talkie grésille dans ta poche, sur le canal 4. Une voix de fille, sur fond de moteur : « … ici la Baratte, je suis sur la route, il y a des camionnettes partout, je te rappelle quand je comprends quelque chose… » Puis plus rien.",
      "Octave regarde ta poche, puis toi. Il ne demande rien. Il a l'air de ranger l'information quelque part, sur une étagère haute, entre les verres à liqueur.",
    ],
    choices: [
      { label: "Promettre au Héraut, à voix basse, qu'il ne quittera pas la Salle sans toi", fx: { flag: "b:promesse", ferveur: 1 }, to: "B2_fin" },
      { label: "Aller demander des ordres au chef Gourdon", fx: { flag: "b:ordres" }, to: "B2_fin" },
    ] },
  B2_fin: { act: "I", title: "Onze heures", place: "salle",
    text: [
      { if: { has: "b:promesse" }, text: "Tu attends qu'Octave soit parti. Puis tu te tiens devant l'ange, à un mètre cinquante exactement, et tu dis, très bas, ce que tu as à dire. Tu ne sais pas pourquoi tu le dis. Dans le ventre d'acier, ton reflet a l'air d'y croire. C'est déjà ça." },
      { if: { has: "b:ordres" }, text: "Le chef Gourdon est au poste de garde, en train de lire, pour la quatrième fois, la notice du Verrou Lumière. « Des ordres ? Article 1, stagiaire : le garde garde. Vous gardez. Le reste, c'est la direction. » Il retourne à sa notice. Elle est en douze langues. Il l'a commencée par le finnois." },
      "À onze heures, un homme du Consortium passe dans toutes les pièces du Domaine en distribuant une plaquette sur papier glacé, la même pour tous, avec un soleil carré sur la couverture. Il en pose une sur le pupitre du registre, à côté de la ligne du Héraut, sans la regarder. Sur le papier gras d'un sandwich qu'il a oublié là, un petit ange doré souffle dans sa trompette.",
      "Ton talkie grésille de nouveau.",
    ],
    choices: [{ label: "Répondre : « Ici Basile, canal 4. »", fx: { flag: "ch2:basile" }, to: "C2" }] },

  // ---------------------------------------------------------------- 3 · the orangerie
  B3_orangerie: { act: "II", title: "L'orangerie", place: "orangerie",
    fx: { meet: ["hippolyte", "monseigneur"] },
    text: [
      "À midi moins le quart, le chef Gourdon t'envoie à l'orangerie. Monsieur a voulu entendre le discours du Grand Raccordement au milieu de ses orangers, sur le poste de radio de son grand-père, parce qu'il trouve que les grandes choses s'entendent mieux sous le verre. Le règlement prévoit qu'un garde accompagne Monsieur partout où il se rend avec sa radio. Le règlement a prévu beaucoup de choses.",
      "L'orangerie est une serre de fer et de verre longue de cent mètres, construite pour un arrière-grand-père qui aimait les oranges. Les orangers n'en ont jamais donné. Ils ont des feuilles d'un vert profond, ciré, et des fleurs blanches qui sentent le savon de luxe, et ils poussent là depuis cent ans dans des bacs de bois peints, comme des invités qui ne savent plus pourquoi ils sont venus. Au-dessus, le toit de verre forme une voûte immense, un ciel de cathédrale découpé en losanges par des poutrelles de fer.",
      "Hippolyte Croûte-Chrome IV est assis dans un fauteuil d'osier, au milieu de l'allée, en robe de chambre de soie, un mouchoir à la main. Il est grand, mou, élégant, avec un visage doux et triste de lévrier. À ses pieds, sur un coussin, dort un lévrier véritable, un chiot couleur crème aux pattes trop longues : Monseigneur. On dit qu'il n'a jamais aboyé. On dit que c'est de race.",
      "Octave se tient derrière le fauteuil, immobile, comme une seconde ombre mieux habillée que la première.",
      "La radio grésille. Une voix de tonnerre en sort, une voix qui fait des affaires : « … Gaspard Zénith, président du Consortium des Panneaux Réunis. Mes chers abonnés, dans quinze minutes, le soleil cessera d'être gaspillé… »",
      "Monsieur Hippolyte se tamponne les yeux. « C'est beau, le progrès, dit-il. On ne sait jamais ce que c'est, et c'est toujours beau. »",
      { if: COMPRIS, text: "Toi, tu sais ce que c'est. Tu l'as lu dans la plaquette, avec Salée, au talkie. À midi, tous les panneaux du pays tourneront ensemble vers le soleil. Tu lèves les yeux vers la voûte. Cent mètres de verre. Tu penses à une loupe au-dessus d'une fourmi." },
      { if: { not: COMPRIS }, text: "Tu ne sais pas ce que c'est. Tu lèves les yeux vers la voûte, par habitude de garde, pour vérifier que rien ne menace. Cent mètres de verre, propres, bleus. Le soleil est très blanc, aujourd'hui. Il a l'air de se rapprocher." },
    ],
    choices: [
      { label: "Ouvrir toutes les portes de l'orangerie, sans demander", fx: { set: { b3: "portes" } }, to: "B3_midi" },
      { label: "Rester au garde-à-vous derrière Monsieur, comme le veut le règlement", fx: { set: { b3: "garde" } }, to: "B3_midi" },
    ] },
  B3_midi: { act: "II", title: "Midi moins une", place: "orangerie",
    text: [
      { if: { has: "b3=portes" }, text: "Tu ouvres les portes, une à une, les six, sur toute la longueur de la serre. Elles grincent comme des portes qu'on n'a pas ouvertes depuis la naissance de Monsieur. L'air du dehors entre, chaud, sec, et les orangers frémissent. Monsieur Hippolyte te regarde faire, étonné, puis il hoche la tête. « C'est très bien, dit-il. Il faut aérer, pour le progrès. » Octave, lui, regarde la voûte, puis toi, et pour la première fois de la journée il fait un pas de côté, vers la porte la plus proche." },
      { if: { has: "b3=garde" }, text: "Tu te tiens derrière le fauteuil, au garde-à-vous, à côté d'Octave. Le règlement est content. Vous êtes deux statues noires dans une cathédrale de verre, et entre vous, un homme en robe de chambre écoute la radio en pleurant doucement. Monseigneur dort. Il fait de plus en plus chaud." },
      "À midi moins une, le chiot ouvre les yeux. Il se lève sur ses pattes trop longues, il regarde la voûte, et il se met à trembler.",
      "Ton talkie grésille. La voix de Salée, à Mirevaux, très proche, très calme, du calme des gens qui ont peur : « Basile. Le beurre transpire. »",
    ],
    choices: [{ label: "Lever les yeux vers le soleil", fx: { flag: "ch3:basile" }, to: "C3" }] },

  // ---------------------------------------------------------------- 4 · the evening
  B4_soir: { act: "II", title: "Le soir au Domaine", place: "salle",
    text: [
      "Le soir tombe sur le Domaine comme une cendre. L'orangerie n'est plus qu'une carcasse de fer noir, longue de cent mètres, d'où monte encore une fumée blanche qui sent l'orange brûlée. Les toits du palais sont noirs par endroits. Les pelouses ont jauni en une heure, puis roussi, puis gris. Les grilles dorées sont ouvertes, figées à mi-course, et personne ne sait si c'est pour laisser entrer ou pour laisser sortir.",
      { if: { has: "compteur=coupe" }, text: "Depuis que vous avez abaissé le levier rouge, les panneaux du Domaine dorment, tête basse, comme avant. Le palais tient debout. Le reste du pays, au-delà des grilles, brûle encore." },
      { if: { has: "compteur=billets" }, text: "Depuis la pluie de bons d'achat, les panneaux du Domaine dorment, tête basse, comme avant. Il en reste dans les escaliers du local technique, des milliers, chacun avec son petit ange, et les valets les balaient en tas sans oser les jeter." },
      { if: { has: "compteur=octave" }, text: "À trois heures, Octave est descendu au local technique avec la clé maîtresse et a coupé le compteur général lui-même, sans un mot, de la main gauche, en tenant sa veste de la droite. Les panneaux du Domaine dorment, tête basse. Le palais tient debout. Le reste du pays, au-delà des grilles, brûle encore." },
      "Les gardes sont partis. Ils ont des familles à Mirevaux, dans les villages, sur la route, et le téléphone ne marche plus. Le chef Gourdon les a laissés partir un par un, en notant l'heure de chaque départ dans le cahier de service, d'une écriture de plus en plus grosse.",
      "Il est le dernier. Il te trouve à la Salle froide, qui n'est plus froide. Le climatiseur s'est tu à midi. Sous leurs cloches de verre, les Enjambeurs de beurre se sont affaissés, l'un après l'autre, en un siècle de flaques dorées. Celui de 1938 a fondu le premier, ce qui ne surprend personne. Seul, au milieu, sur son socle, le Héraut d'inox se tient droit et brille, indifférent, la trompette levée.",
      "« Stagiaire. » Le chef a la voix éraillée de fumée. « Je rentre. Ma femme est à Mirevaux. Le règlement prévoit un garde dans la Salle froide, de nuit. Il ne prévoit pas lequel. » Il regarde l'ange, puis toi. « Ce sera vous. »",
      "Il te tend la main. Tu ne savais pas que le chef avait une main ; tu ne lui avais jamais vu que le règlement au bout. Elle est chaude et sèche. Puis il remet sa casquette, et il s'en va, à pied, par la grande allée, vers les grilles ouvertes, sans se retourner.",
    ],
    choices: [
      { label: "Aller arracher deux barres de fer à la carcasse de l'orangerie, au cas où", fx: { set: { b4: "barres" } }, to: "B4_nuit" },
      { label: "Relire l'article 88 du règlement, jusqu'au bout", fx: { set: { b4: "article" } }, to: "B4_nuit" },
    ] },
  B4_nuit: { act: "II", title: "Le garde de nuit", place: "salle",
    text: [
      { if: { has: "b4=barres" }, text: "L'orangerie fume encore. Tu enroules ta veste autour de tes mains et tu tires sur les poutrelles de la voûte effondrée, jusqu'à ce que deux barres cèdent, longues de deux mètres, droites, noires. Elles sont encore chaudes au cœur, d'une chaleur sourde qui remonte à travers le tissu. Tu les rapportes à la Salle froide et tu les poses contre le socle, de part et d'autre de l'ange, comme deux lances. Tu ne sais pas encore pourquoi. Tes mains, elles, ont l'air de le savoir." },
      { if: { has: "b4=article" }, text: "Article 88. *En cas de péril, le garde évacue les collections par la porte de service et note la sortie au registre. Le garde ne laisse pas les collections sans garde. Si le garde ne peut pas les garder où elles sont, il les garde où elles vont.* Ton père a souligné la dernière phrase, deux fois, au crayon. En marge, il a écrit : *Personne ne lit jusque-là.* Tu l'as lu jusque-là." },
      "La nuit vient. Tu allumes la lampe de poche. La Salle froide sent le beurre chaud et l'acier froid. Par la fenêtre haute, tu vois, au loin, sur la route de Mirevaux, une file de phares qui approche, très lentement, comme une procession.",
      "Ton talkie grésille. C'est Salée. Elle ne dit pas grand-chose. Elle dit où elle est. Elle dit avec qui.",
      "Tu ne réponds pas tout de suite. Tu regardes l'ange. Puis tu ouvres le registre des collections sur le pupitre de la galerie, à la première page, à la ligne du Héraut, et tu prends le stylo du pupitre, et tu écris, dans la colonne des sorties, d'une main qui ne tremble presque pas :",
      "*Sorti le soir même. Destination :*",
      "Tu t'arrêtes là. Tu ne connais pas la destination. Tu sais seulement qu'il en faudra une.",
    ],
    choices: [{ label: "Mettre ton initiale dans la marge, et attendre les phares", fx: { flag: "ch4:basile" }, to: "C4" }] },

  // ---------------------------------------------------------------- 5 · dawn
  B5_aube: { act: "III", title: "Ce que Basile dit à l'aube", place: "carrefour",
    text: [
      "Tu es assis sur le rebord de la fontaine du Carrefour, les mains ouvertes sur les genoux. Elles te font mal d'une manière nouvelle, profonde, que tu ne connaissais pas : deux brûlures en travers des paumes, deux lignes nettes, rouges, qui ont pris la forme exacte des barres. Tu les regardes comme on lit une lettre.",
      "Tu as parlé toute la nuit. À Salée, au talkie, à l'ange, à toi-même, aux barres, à la route. Tu as récité le règlement deux fois en entier pour tenir le rythme, et une troisième fois en sautant des articles. Tu as crié, aussi, sur la route, quand la camionnette est passée. La fumée de l'orangerie, la poussière, le froid du désert et tout cela ensemble t'ont pris la voix. Quand tu ouvres la bouche, il en sort un souffle, une petite brume, comme sur la trompette, ce matin, à quatre degrés.",
      "Devant toi, sur la bascule, l'ange de beurre se tient debout, doré, de travers, la trompette aux lèvres. Il ne ressemble à rien de ce que tu avais imaginé. Il ressemble à un enfant qu'on aurait habillé trop vite pour une fête.",
      "Salée s'assied à côté de toi. Elle a les mêmes brûlures aux mains. Elle ne dit rien non plus.",
      "Au bout d'un long moment, tu trouves au fond de ta gorge assez de voix pour une seule phrase. Une seule. Tu le sens. Après celle-là, il n'y en aura plus avant longtemps.",
    ],
    choices: [
      { label: "« On ne le dira à personne. Jamais. Je le jure. »", monde: "voix", option: "serment", hide: { has: "basile=garde" }, fx: { set: { basile: "serment" } }, to: "B5_fin" },
      { label: "« Je retourne là-bas. Quelqu'un doit garder le socle. »", monde: "voix", option: "garde", hide: { has: "basile=serment" }, fx: { set: { basile: "garde" } }, to: "B5_fin" },
    ] },
  B5_fin: { act: "III", title: "La dernière phrase", place: "carrefour",
    text: [
      { if: { has: "basile=serment" }, text: "Tu le dis. Ta voix se casse au milieu du mot *jamais*, et le reste sort en chuchotement. Salée te regarde. Elle prend ta main brûlée dans sa main brûlée, paume contre paume, et elle serre, ce qui fait très mal à tous les deux. C'est sa réponse. C'est un serment de beurre et de fer, et c'est le seul contrat de ta vie que tu n'as pas lu jusqu'au bout avant de le signer." },
      { if: { has: "basile=garde" }, text: "Tu le dis. Ta voix se casse au milieu du mot *socle*. Salée te regarde longtemps, comme on regarde quelqu'un partir sur une route qu'on ne prendra pas. Elle hoche la tête. Tu te lèves. Une nuit de marche jusqu'au Domaine, dans l'autre sens, les mains vides. Il y a un socle de marbre noir dans une salle qui n'est plus froide, et le règlement prévoit un garde. Il ne prévoit pas qu'il y ait quelque chose dessus." },
      "Le soleil se lève derrière les toits. La première lumière tombe sur l'ange de beurre, et le beurre luit, doux, mat, chaud. Rien ne brille. Rien ne renvoie rien. C'est exactement ce que vous vouliez.",
      "Tu ouvres la bouche une dernière fois, pour rien, pour essayer. Il n'en sort qu'un souffle. Tu la refermes. Tu ne la rouvriras pas avant trente et un ans.",
    ],
    choices: [{ label: "Regarder le soleil toucher la trompette", fx: { flag: "ch5:basile" }, to: "C5" }] },
};
