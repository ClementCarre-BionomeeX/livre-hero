// L'Île Folle-Aiguille · act V, chapter V.3 followed by the doctor: the departure. The ship (wreck, sandbank, the cook's
// men to bargain with, or ready), settled into navire:ok / navire:perdu / mutins:partis; the professor left on the
// Table (gaudremont:ramene or gaudremont:reste); the privateer, if his guns still point at the spur; the baron on the
// last morning; the old man; and the last choice of the book (fins_choix.js).
var F = require("./fins_choix.js");
var BARON = F.BARON;
var DAGREL_VIF = F.DAGREL_VIF;
var MALANDAIN = { not: { has: "malandain:mort" } };
var MENACE = { all: [{ any: [{ has: "chevalier:ultimatum" }, { has: "desinvolte:hostile" }] }, { not: { has: "desinvolte:alliee" } }] };
var FONDEURS = { any: [{ has: "xd:pacte" }, { has: "hugon:passage" }, { has: "lingots:partage" }, { has: "fargue:promet_fondeurs" }, { has: "hugon:soins" }] };
var ARGENT = { any: [{ has: "lingots:loyaux" }, { all: [{ has: "tresor:couchant" }, { not: { has: "tresor:couchant_mutins" } }] }] };
module.exports = {
  passages: {
    A5x_debut: { act: "V", title: "Le dernier matin", place: "misericorde", hub: true, noLead: true, backName: "la nef", ambiance: "mer",
      text: [
        { first: true, text: "Elle fait sa dernière tournée dans la nef, à l'aube, comme chaque matin depuis le débarquement : les fiévreux, les blessés, les mourants, un par un, de la porte à l'autel, le pouls, la langue, le pansement. Elle connaît leurs noms. Elle connaît le nom de leurs mères. Elle le regrettera." },
        { first: true, if: { has: "chapelle:soins" }, text: "Ils sont moins nombreux qu'ils auraient dû l'être. Elle a passé deux nuits sans dormir pendant le siège, à recoudre et à cautériser, et deux hommes qui auraient dû mourir marchent ce matin, en s'appuyant sur des cannes de bambou. Elle ne s'en félicite pas. Elle les regarde marcher, simplement, plus longtemps qu'il ne faudrait." },
        { first: true, if: { has: "morts:enterres" }, text: "Dans la cour, il y a la fosse où l'on a enterré les ossements de la nef, le premier jour, avec une croix de deux planches. Quelqu'un y a posé des fleurs du verger. Elle ne sait pas qui. Elle ne demande pas." },
        { first: true, if: { has: "wh:emmene" }, text: "La chienne jaune du muet dort en travers du seuil, son collier d'os autour du cou. Elle a aboyé chaque nuit du siège, contre des gens qui savaient déjà où l'on était, et la garnison a fini par l'aimer comme on aime une sentinelle qui ne dort jamais. Elle lève la tête quand Victorine passe, et la suit, à deux pas, jusqu'à l'autel." },
        { first: true, if: { has: "evac:vivres" }, text: "Il reste des vivres, ceux qu'on a sauvés de la Cormorane le jour de l'évacuation : du biscuit, du lard, trois barriques d'eau. Assez pour la traversée, si l'on ne traîne pas, et si l'on ne se dispute pas, ce qui est beaucoup demander à des marins." },
        { first: true, if: { has: "chapelle:demunis" }, text: "Il ne reste presque rien à manger. On a vécu des fruits du Haut-Verger, de poisson, de tortues, et de la charité des Doux. Les hommes ont maigri. Elle aussi. Elle se trouve, dans le reflet de l'eau de la source, une tête de supérieure de couvent." },
        { first: true, text: "Le rocher chante, à l'ouest. Le vent de retour souffle." },
        { again: true, text: "La tournée continue, de la porte à l'autel. Dehors, le rocher chante toujours, et le vent de retour n'attendra pas indéfiniment." },
      ],
      choices: [
        { label: "S'asseoir au chevet du gabier qui brûle de fièvre", to: "XZ_fievre", hide: { seen: "XZ_fievre" } },
        { label: "Recevoir la file de ceux qui veulent dicter leur testament", to: "XZ_testaments", hide: { seen: "XZ_testaments" } },
        { label: "Aller à la porte, où la fille des Doux apporte les fruits", to: "XZ_ecorce", hide: { seen: "XZ_ecorce" } },
        { label: "Entrer dans la sacristie, où la capitaine a ouvert le livre de bord", to: "YA_jugement", hide: { any: [{ seen: "YA_jugement" }, { not: { all: [{ has: "ya:cache" }, { any: [{ has: "ya:aveu" }, { has: "ya:averti" }, { has: "ya:dit_capitaine" }] }] } }] } },
        { label: "Décrocher le portrait d'Hector", to: "YH_matin", hide: { any: [{ seen: "YH_matin" }, { not: { has: "yh:vu" } }] } },
        { label: "Courir au seuil, où la sentinelle vient de crier", to: "ZR_porte", hide: { seen: "ZR_porte" } },
        { label: "Descendre à l'anse", to: "A5x_etat", big: true },
      ] },
    A5x_etat: { act: "V", title: "Le dernier matin", branch: [
      { if: { has: "cormorane:sabotee" }, fx: { flag: "navire:perdu" }, to: "A5x_epave" },
      { if: { all: [{ has: "cormorane:mutins" }, { not: { has: "cormorane:reprise" } }] }, to: "A5x_mutins" },
      { if: { has: "cormorane:echouee" }, to: "A5x_echouee" },
      { fx: { flag: "navire:ok" }, to: "A5x_professeur_b" },
    ] },

    A5x_epave: { act: "V", title: "L'épave", place: "anse_morte", ambiance: "mer",
      text: [
        "La Cormorane est couchée au fond de l'anse, dans dix pieds d'eau claire, la coque ouverte par l'explosion de la sainte-barbe. Des poissons bleus entrent et sortent par la brèche.",
        "La capitaine Ribaud la regarde depuis la plage, les bras croisés, sans une larme, avec le visage d'une veuve qui a décidé d'être veuve plus tard, quand elle aura le temps.",
        "« Nous resterons, dit-elle. Ou un navire viendra. Les deux, probablement, dans cet ordre. »",
      ],
      choices: [{ label: "Et maintenant", to: "A5x_professeur_b" }] },
    A5x_echouee: { act: "V", title: "Le banc de sable", place: "anse_morte", ambiance: "mer",
      text: [
        "La Cormorane est échouée sur le banc, gîtée comme un ivrogne contre un mur. La marée de midi est la dernière assez haute pour la sortir de là avant la nouvelle lune.",
        { if: FONDEURS, text: "Sur la plage, il y a trente Fondeurs, en tabliers de cuir, qui clignent sous le soleil. Hugon est devant. « Le navire, dit-il. On vient tirer. On tire où ? »" },
      ],
      choices: [
        { label: "Mettre les Fondeurs aux aussières", hide: { not: FONDEURS }, fx: { flag: ["navire:ok", "cormorane:renflouee", "fondeurs:tirent"] }, to: "A5x_renflouee" },
        { label: "Tout le monde sur le cabestan", test: { dom: "nature", diff: 1, label: "Déséchouer la Cormorane" }, win: { fx: { flag: ["navire:ok", "cormorane:renflouee"] }, to: "A5x_renflouee" }, lose: { fx: { flag: "navire:perdu" }, to: "A5x_echec" } },
      ] },
    A5x_renflouee: { act: "V", title: "La marée", place: "anse_morte", ambiance: "mer",
      text: [
        "Tout le monde tire. Les matelots aux cabestans, les canots aux avirons, et sur la plage, à la longue aussière, une chaîne de gens qui tirent ensemble, les pieds dans l'eau, en grognant.",
        { if: { has: "fondeurs:tirent" }, text: "Les Fondeurs tirent sans chanter, d'une force sourde, régulière, de gens qui ont tourné une roue pendant vingt ans. Au quatrième effort, la Cormorane se redresse avec un grand soupir de bois." },
        "Elle flotte. Victorine s'aperçoit qu'elle a tiré aussi, à l'aussière, entre un matelot et un Fondeur, et qu'elle a les paumes en sang. Elle les panse elle-même, assise dans le sable, en riant toute seule, comme une folle, ou comme une femme heureuse ; on confond facilement.",
      ],
      choices: [{ label: "Et maintenant", to: "A5x_professeur_b" }] },
    A5x_echec: { act: "V", title: "La marée", place: "anse_morte", ambiance: "mer",
      text: [
        "On tire jusqu'au soir. L'aussière casse deux fois. La deuxième fois, elle fauche la jambe d'un matelot. Victorine l'ampute sur la plage, au couteau et à la scie de charpentier, pendant que la marée redescend et que la Cormorane se couche un peu plus, avec des craquements de vieux os.",
        "Le matelot vivra. Le navire, non.",
      ],
      choices: [{ label: "Et maintenant", to: "A5x_professeur_b" }] },

    A5x_mutins: { act: "V", title: "La Cormorane", place: "anse_morte", ambiance: "mer",
      text: [
        "La Cormorane est à l'ancre au milieu de l'anse, et les mutins embarquent. Les sacs, les barriques d'eau, les caisses. Ils partiront à la marée du soir, avec le vent de retour.",
        { if: MALANDAIN, text: "Malandain commande, debout sur le gaillard. On l'entend crier jusqu'à la chapelle." },
        { if: { all: [{ not: MALANDAIN }, { not: { has: "fargue:retourne" } }] }, text: "Le maître-coq est sur la dunette, à la place du capitaine. Il a mis son foulard rouge. Il la voit, sur la plage, et il lève la main, une fois, comme on salue de loin quelqu'un qu'on a connu dans une autre vie." },
        { if: { all: [{ not: MALANDAIN }, { has: "fargue:retourne" }] }, text: "C'est Lagadec qui commande, avec un œil fermé. Il commande mal, en criant beaucoup." },
        { if: { has: "parlement:refuse" }, text: "Elle a refusé le marché du maître-coq, sous le drapeau blanc, devant la porte. Elle se demande ce qu'aurait donné l'autre réponse. Elle se demande souvent ce qu'aurait donné l'autre réponse ; c'est son vice principal, avec le tabac." },
      ],
      choices: [
        { label: "Prendre un canot, et aller parlementer", test: { dom: "social", diff: 1, label: "Rendre un navire à ses propriétaires" }, win: { fx: { flag: ["navire:ok", "mutins:abandonnes"] }, to: "A5x_parlement" }, lose: { fx: { flag: "mutins:partis" }, to: "A5x_partis" } },
        { label: "Leur offrir l'argent contre le navire", hide: { not: ARGENT }, fx: { flag: ["navire:ok", "mutins:payes"] }, to: "A5x_rachat" },
        { label: "Les laisser partir", fx: { flag: "mutins:partis" }, to: "A5x_partis" },
      ] },
    A5x_parlement: { act: "V", title: "Le parlement", place: "anse_morte", ambiance: "mer",
      text: [
        "Elle rame elle-même, avec la capitaine. Elle monte à l'échelle de coupée en jupe, ce qui fait rire les hommes, et cesse de les faire rire quand elle arrive en haut.",
        "Elle leur parle des fièvres. Des fièvres de la côte d'en face, où il faudra faire de l'eau. Du scorbut, au vingtième jour, quand les gencives saignent et que les vieilles blessures se rouvrent. De ce qui arrive à un navire sans médecin, sans capitaine, sans pilote, avec quarante mille piastres à bord et des hommes qui ne savent pas compter. Elle leur parle des frégates du roi, qui croisent devant Brisegrève, et de la Croix-des-Marées.",
        "Puis elle se tait. Elle les laisse faire le compte eux-mêmes.",
        "Ils le font. Ils regagnent la plage avec leurs sacs, à la nuit, l'un après l'autre. On leur laisse la plage, des outils, de la poudre, des graines, et ce qu'ils portent. L'île les gardera. Ils seront, dans dix ans, une tribu de plus, avec ses légendes, et ils diront qu'ils ont choisi de rester.",
      ],
      choices: [{ label: "Et maintenant", to: "A5x_professeur_b" }] },
    A5x_rachat: { act: "V", title: "Le rachat", place: "anse_morte", ambiance: "mer",
      text: [
        "Elle leur fait porter l'argent à la plage, sac par sac, lingot par lingot, et les mutins descendent du navire à mesure, pour le recevoir.",
        "C'est un échange de prisonniers, en somme. On rend un navire contre un trésor. On rend la mer contre l'île. Les mutins comptent, et recomptent, et ne voient pas qu'ils viennent d'acheter, très cher, le droit de mourir riches sur un rocher.",
        "La Cormorane rentrera les cales vides. Elle rentrera.",
      ],
      choices: [{ label: "Et maintenant", to: "A5x_professeur_b" }] },
    A5x_partis: { act: "V", title: "La marée du soir", place: "anse_morte", ambiance: "mer",
      text: [
        "La Cormorane lève l'ancre à la marée du soir, et sort de l'anse au plus près, avec le rocher qui chante dans son dos.",
        "La capitaine Ribaud la regarde partir jusqu'au bout, sans bouger, sans rien dire. Puis elle se retourne, et elle a, pendant une seconde, le visage d'une très vieille femme. Puis cela passe.",
      ],
      choices: [{ label: "Et maintenant", to: "A5x_professeur_b" }] },

    A5x_professeur_b: { act: "V", title: "Le professeur", branch: [
      { if: { has: "xt:gaudremont_haut" }, to: "A5x_professeur" },
      { to: "A5x_menace" },
    ] },
    A5x_professeur: { act: "V", title: "Le professeur", place: "table", ambiance: "nature",
      text: [
        "Le professeur Gaudrémont est toujours là-haut, sur la Table, la jambe cassée, avec ses notes, ses dessins, ses œufs, et la promesse d'un enfant.",
        "Les deux hommes qu'on a envoyés avec une corde sont revenus hier soir, en loques, l'un avec une morsure au mollet grosse comme une assiette. Ils n'ont pas trouvé le pont. Ils ont trouvé autre chose, dont ils refusent de parler, et ils boivent.",
        "On part ce soir, ou demain. Il faut quelqu'un qui sache marcher sur cette montagne.",
      ],
      choices: [
        { label: "Y monter elle-même, avec Benoît", hide: { has: "benoit:parti" }, test: { dom: "nature", diff: 1, label: "La Table" }, win: { fx: { flag: "gaudremont:ramene" }, to: "A5x_professeur_ramene" }, lose: { fx: { flag: "gaudremont:reste" }, to: "A5x_professeur_reste" } },
        { label: "Demander aux gens de l'île", hide: { not: { any: [FONDEURS, { has: "xs:allies" }] } }, fx: { flag: "gaudremont:ramene" }, to: "A5x_professeur_ramene" },
        { label: "Le laisser à son plateau", fx: { flag: "gaudremont:reste" }, to: "A5x_professeur_reste" },
      ] },
    A5x_professeur_ramene: { act: "V", title: "Le retour du professeur", place: "table", ambiance: "nature",
      text: [
        "On le ramène le soir, sur une civière de bambou, à quatre porteurs, et il parle pendant toute la descente.",
        "Il parle des oiseaux qui courent. Des lézards qui marchent debout. D'une harde de bêtes à cornes qui a passé à vingt pas de lui pendant trois nuits, à la lune, et dont il a fait quarante dessins. Il a maigri de vingt livres. Il a une barbe de huit jours, pleine de miettes d'œuf. Il est le plus heureux des hommes, et il le dit, à tue-tête, à tous les porteurs, qui n'en peuvent plus.",
        "« L'Académie ! crie-t-il, quand on le pose dans la nef. L'Académie va s'étrangler ! Elle va s'étrangler dans sa perruque ! Docteur, vous témoignerez. Vous avez vu ma jambe. On ne se casse pas une jambe pareille en tombant d'une chaise à Morlenc ! »",
        { if: { has: "xt:oeuf" }, text: "Il a toujours l'œuf, dans sa veste, ou ce qui en est sorti, qui pépie, et qui mord." },
      ],
      choices: [{ label: "Et maintenant", to: "A5x_menace" }] },
    A5x_professeur_reste: { act: "V", title: "Le professeur", place: "table", ambiance: "nature",
      text: [
        "On n'ira pas le chercher.",
        "Elle écrit une lettre, qu'un Doux du Haut-Verger portera là-haut, peut-être, par les sentiers que les Doux connaissent : on part ; on reviendra ; on dira à l'Académie. Elle sait qu'on ne reviendra pas. Elle sait que le professeur le sait.",
        "Elle se dit, pour se consoler, qu'il est le seul homme de l'expédition à avoir trouvé exactement ce qu'il cherchait, et qu'il est peut-être le seul à ne pas vouloir rentrer.",
      ],
      choices: [{ label: "Et maintenant", to: "A5x_menace" }] },

    A5x_menace: { act: "V", title: "La Désinvolte", branch: [
      { if: { all: [MENACE, { not: { has: "mutins:partis" } }, { not: { has: "chevalier:paye" } }] }, to: "A5x_chevalier" },
      { to: "A5x_baron_b" },
    ] },
    A5x_chevalier: { act: "V", title: "Les quatorze canons", place: "anse_morte", ambiance: "mer",
      text: [
        "La Désinvolte entre dans l'anse à midi, toutes voiles dehors, et mouille à une encablure, le travers à l'éperon.",
        { if: { has: "chevalier:blesse" }, text: "Sabran Quéru commande, du haut de la dunette, avec sa dent d'or. « Le Chevalier a la fièvre, crie-t-il. Il délire. Il parle d'une dame. Moi, je parle d'argent. Tout, ou je tire. »" },
        { if: { not: { has: "chevalier:blesse" } }, text: "Le Chevalier descend lui-même dans un canot, et vient jusqu'à la plage, et salue Victorine de son chapeau. « Madame, dit-il, vous m'avez fait creuser beaucoup, ou pas assez. Je viens chercher mon dû. Vous savez ce que c'est, je crois : vous avez eu des dettes. »" },
        { if: { has: "victorine:insulte_chevalier" }, text: "« Un voleur avec une nappe, ajoute-t-il, en souriant. Je n'ai jamais oublié. Je l'ai fait broder sur une serviette. »" },
        { if: { has: "victorine:pacte_chevalier" }, text: "Elle lui a promis un marché, moitié-moitié, sous sa tente, dans la clairière. Elle s'en souvient. Lui aussi. Il a la mémoire des dettes des autres, comme tous les gens qui n'en paient aucune." },
      ],
      choices: [
        { label: "Lui donner l'argent", fx: { flag: "chevalier:paye" }, to: "A5x_paye" },
        { label: "Lui dire qu'Héloïse l'attend encore", hide: { any: [{ not: { has: "xb2:heloise_dite" } }, { has: "chevalier:blesse" }] }, test: { dom: "social", diff: 0, label: "Une femme à Morlenc" }, win: { fx: { flag: "desinvolte:apaisee" }, to: "A5x_heloise" }, lose: { fx: { flag: "chevalier:paye" }, to: "A5x_paye" } },
        { label: "Tenir l'éperon jusqu'à la nuit", test: { dom: "combat", diff: 1, label: "Tenir sous les boulets" }, win: { fx: { flag: "desinvolte:partie" }, to: "A5x_tenu" }, lose: { fx: { flag: ["chevalier:paye", "chapelle:bombardee"] }, to: "A5x_paye" } },
      ] },
    A5x_heloise: { act: "V", title: "Héloïse", place: "anse_morte", ambiance: "mer",
      text: [
        "Elle le prend à part, au bord de l'eau, et elle lui dit ce qu'Héloïse lui a dit, à Morlenc, sur le sofa du petit salon, entre deux crises de larmes et un flacon de sels. Elle le lui dit sans ornement. Elle a toujours pensé que les ornements gâtaient les diagnostics.",
        "Le Chevalier l'écoute en regardant la mer. Il a cessé de sourire. Sans son sourire, il a l'air de son frère, en plus fatigué.",
        "« Elle a dit ça ?",
        "— Elle a dit ça. Et pire. »",
        "Il reste longtemps silencieux. Puis il remet son chapeau. « Je vais à Morlenc, dit-il. Avant vous. Je ne prends rien. J'ai quelque chose à reprendre là-bas, qui pèse moins lourd et qui vaut plus cher. » Il la salue. « Vous êtes une femme épouvantable, docteur. »",
        "La Désinvolte lève l'ancre le soir même.",
      ],
      choices: [{ label: "Le soir", to: "A5x_baron_b" }] },
    A5x_paye: { act: "V", title: "Le prix", place: "anse_morte", ambiance: "mer",
      text: [
        { if: { has: "chapelle:bombardee" }, text: "Les boulets tombent tout l'après-midi. Le clocher de la Miséricorde s'effondre avec sa cloche, qui sonne une dernière fois en tombant. Victorine opère sous les boulets, dans la nef, trois blessés, dont un meurt. Au soir, on agite un drap blanc." },
        "Les chaloupes du brigantin font la navette jusqu'à la nuit. Tout ce qu'on avait part, sac par sac.",
        "On garde la vie, les vivres, et le navire, si l'on en a un. Victorine tient la comptabilité de ce qui part, sur un carnet, ligne par ligne, avec une précision rageuse. Personne ne lui a demandé de le faire. Elle a besoin de compter quelque chose.",
      ],
      choices: [{ label: "Le soir", to: "A5x_baron_b" }] },
    A5x_tenu: { act: "V", title: "L'éperon", place: "misericorde", ambiance: "nuit",
      text: [
        "Les boulets tombent tout l'après-midi. Ils fracassent les créneaux, éventrent le verger, tuent un homme qu'elle ne peut pas sauver, et un mulet qu'elle ne cherche pas à sauver. Mais l'éperon tient.",
        { if: { has: "chapelle:clocher" }, text: "Du clocher, la capitaine fait tirer les deux pierriers. Une pièce de la Désinvolte se tait." },
        "À l'aube, l'anse est vide.",
      ],
      choices: [{ label: "Le matin", to: "A5x_baron_b" }] },

    A5x_baron_b: { act: "V", title: "Le baron", branch: [
      { if: BARON, to: "A5x_baron" },
      { to: "A5x_vieux_b" },
    ] },
    A5x_baron: { act: "V", title: "Le baron", place: "anse_morte", ambiance: "mer",
      text: [
        "Le baron Clavières l'attend sur la plage, au soleil couchant, assis sur une malle, la perruque de travers, le menton dans la main.",
        { if: { has: "livre=baron" }, text: "Il a le livre sur les genoux. Il le tient à deux mains. « Je le brûlerai à Morlenc, dit-il. Dans ma cheminée. Pas ici. Je veux le voir brûler chez moi, sous le portrait de mon père. Vous trouvez ça puéril ? — Je trouve ça très humain, dit-elle. C'est pire. »" },
        { if: { has: "baron:force" }, text: "Il ne la regarde pas. Il a menacé un matelot de son pistolet, sous la terre, pour lui arracher le livre. Il ne s'en remettra pas. Il le sait. C'est ce qui le rend presque supportable." },
        { if: { has: "victorine:dettes_remises" }, text: "Il sort de sa poche un papier, la reconnaissance de dettes d'Hector, les trois mille quatre cents livres, et le déchire, devant elle, en quatre, puis en huit, et le jette au vent. Les morceaux s'envolent vers la mer comme des mouettes. Elle les regarde partir et ne sent rien. Elle croyait qu'elle sentirait quelque chose." },
        { if: { any: [{ has: "livre=echevins" }, { has: "livre=jeanne" }] }, text: "« Vous allez me détruire, dit-il calmement. Et six familles avec moi. Des enfants, des veuves, des domestiques. Une banque, et tous ceux qui ont de l'argent dedans. » Il la regarde. « Je ne vous en veux pas. J'aurais fait pareil. J'aurais demandé plus cher, voilà tout. »" },
        { if: { has: "livre=brule" }, text: "« Brûlé, dit-il. Le livre est brûlé. » Il rit, sans joie. « Vingt et un ans que j'ai peur d'un livre, et il a fallu qu'un autre le brûle à ma place. Je n'ai même pas eu ça. »" },
        { if: { has: "hugon:sait_baron" }, text: "Derrière lui, à vingt pas, deux Fondeurs l'observent, debout dans le soleil qui les aveugle. Ils sont là depuis le matin. Ils ne font rien. Ils regardent le fils de celui qui a payé. Le baron fait semblant de ne pas les voir, et il les voit tout le temps." },
        { if: { has: "yc:billet_garde" }, text: "Victorine ouvre sa trousse, et en sort une feuille d'une autre couleur, pliée en quatre, qui a fait le voyage entre le laudanum et les lancettes. L'hypothèque de la Cormorane. Elle la lui tend. « Vous l'avez méritée ? demande-t-il. — Non. J'ai besoin de place dans ma trousse. » Il la prend, et cette fois il ne la déchire pas. Il la plie, et la garde, contre sa poitrine." },
        { if: { has: "yc:part_engagee" }, text: "« Vous savez qui nous attend sur le quai de Morlenc, dit-il. Un petit homme chauve aux ongles faits, avec un portefeuille. Il n'aura pas besoin de parler. Il me tendra une feuille, et je lui donnerai sa part, et il me saluera très poliment. » Il sourit. « Je vais le haïr toute ma vie. Ce sera une occupation. »" },
        { if: { has: "yc:confession" }, text: "Elle remarque, pendant qu'il parle, que ses mains sont tranquilles, posées sur ses genoux. Il ne les regarde pas une seule fois." },
        { if: { has: "table:baron" }, text: "« La table de votre moine, dit-il encore, que je vous ai achetée trop cher à Lannoz. Je la garde. Je la ferai encadrer. Elle me rappellera le seul marché de ma vie où j'ai été honnêtement volé. »" },
      ],
      choices: [{ label: "Et le vieil homme ?", to: "A5x_vieux_b" }] },
    A5x_vieux_b: { act: "V", title: "Le vieil homme", branch: [
      { if: DAGREL_VIF, to: "A5x_vieux" },
      { if: { has: "dagrel:pris" }, to: "A5x_lie" },
      { to: "A5x_choix" },
    ] },
    A5x_vieux: { act: "V", title: "Le vieil homme", place: "anse_morte", ambiance: "mer",
      text: [
        "Il descend à la plage au soleil couchant, à pied, en sandales d'écorce, un sac de toile à l'épaule, et vient droit à elle.",
        "« Docteur, dit-il. Je voudrais partir. Une place à fond de cale. Ou une corde à Morlenc. Je n'ai pas de préférence. On m'a dit que vous étiez la personne intelligente de cette expédition. Alors je m'adresse à vous, pour une fois que j'en trouve une. »",
        { if: { has: "livre=dagrel" }, text: "Il a son livre sous le bras. Il ne le lui propose pas. Il ne le cache pas non plus." },
        { if: BARON, text: "Le baron, sur sa malle, s'est levé. Il regarde l'homme qui a fait la fortune de son père. Il a la main sur la crosse d'ivoire. Il ne tire pas. Il attend qu'elle décide. Tout le monde, ce soir, attend qu'elle décide. Elle trouve ça très injuste, et parfaitement logique." },
      ],
      choices: [{ label: "Choisir", to: "A5x_choix" }] },
    A5x_lie: { act: "V", title: "Le vieil homme", place: "anse_morte", ambiance: "mer",
      text: [
        "On l'amène à la plage les poignets liés. Il salue Victorine d'une inclinaison de tête parfaite.",
        "« La Croix-des-Marées, dit-il. Votre baron me l'a promise. Je compte sur vous pour qu'il tienne parole. Les banquiers tiennent rarement parole, mais on peut toujours espérer d'un banquier ruiné. »",
      ],
      choices: [{ label: "Choisir", to: "A5x_choix" }] },

    A5x_choix: { act: "V", title: "Le dernier choix", place: "anse_morte", ambiance: "mer",
      text: [
        "Le rocher chante. Le soleil descend sur la mer.",
        { if: { has: "navire:ok" }, text: "La Cormorane attend dans l'anse. La capitaine Ribaud attend sur la plage, les mains dans le dos. Elle a dit à Victorine, tout à l'heure, sans la regarder : « C'est vous qui décidez. Moi, je mène le navire. Je n'ai jamais rien su faire d'autre, et c'est déjà beaucoup. »" },
        { if: { has: "navire:perdu" }, text: "Il n'y a pas de navire. Il y a la plage, et ceux qui sont dessus, et elle au milieu, avec sa trousse." },
        { if: { has: "mutins:partis" }, text: "La Cormorane est partie. Le vent l'a emportée. Il reste la plage." },
        "Elle pense à Varnèse, à son cabinet de la rue des Cordiers, à la sonnette de nuit, aux pêcheurs qui toussent. Elle pense qu'elle aimerait les revoir. Elle pense que c'est la première fois depuis Hector qu'elle a envie de rentrer quelque part.",
      ],
      choices: F.choix("victorine") },
  },
  extras: {},
};
