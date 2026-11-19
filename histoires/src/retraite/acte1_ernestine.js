// La Super Retraite · act I, Ernestine (29 December 1899). The forge at five, the shining nails nobody buys, the
// banker's secret order for a vault door and the empty vault (c_coffre, secrets e_coffre and e_bail; coffre=porte or
// refus), the town (hub, three visits: Levain's moulds, the creamery, the station and Maître Gratin, the empty
// warehouse), the evening's failed steel loaf, and the baker who knocks at night (world choice pacte).
// Ends with ch1:ernestine and comes back to C1.
var PACTE_A = { has: "pacte=allies" }, PACTE_R = { has: "pacte=rivaux" };
var VILLE = [{ seen: "E1_levain" }, { seen: "E1_cremerie" }, { seen: "E1_gare" }, { seen: "E1_entrepot" }];
module.exports = {
  E1_forge: { act: "I", title: "Cinq heures du matin", place: "forge",
    fx: { meet: ["meme"] },
    text: [
      "À cinq heures du matin, au faubourg de l'oued, le seul bruit est celui de ton soufflet. Il respire comme un vieux cheval. À chaque coup, le feu de la forge blanchit, gronde, lance au plafond noir des étincelles qui meurent en montant, comme des pensées qu'on n'aurait pas le temps de finir.",
      "Tu t'appelles Ernestine Chrome. Tu as vingt-deux ans, des bras que les garçons du faubourg évitent de défier au bras de fer, un tablier de cuir troué par mille brûlures, et un secret de famille : l'acier blanc.",
      "Ton père l'a cherché toute sa vie. Il fondait ensemble le fer, un peu de chrome venu de la capitale dans des boîtes en fer-blanc, un peu de nickel acheté à un horloger, et il cherchait la température. Il est mort l'an dernier, à la veille de la trouver. Tu l'as trouvée trois semaines après l'enterrement, une nuit, seule, en réparant le soufflet de tes mains pour qu'il souffle plus fort que tous les soufflets de Mirevaux. Le métal qui est sorti du creuset cette nuit-là ne rouille pas. Il ne rouillera jamais. Tu l'appelles *inoxydable*. Personne au faubourg ne sait le prononcer.",
      "Sur son tabouret, près du feu, ta grand-mère se tient droite comme un tisonnier. Mémé Chrome a quatre-vingts ans, elle est sourde depuis le siècle dernier, et elle dit une phrase par jour. Une seule. Elle la choisit. On ne sait jamais à quelle heure elle tombera, et toute la famille, depuis trente ans, vit dans l'attente respectueuse de cette phrase.",
      "Sur l'établi, il y a une lettre de la Caisse de la Super Retraite. Tu la relis pour la troisième fois. *La forge sise au faubourg de l'oued étant la propriété de la Caisse, le bail de Mademoiselle Chrome est payable au 1er janvier : deux cents francs.*",
      "Dans les seaux, autour de l'enclume, il y a quatre mille clous d'acier blanc. Ils brillent à la lumière du feu comme des sardines. Ils valent, à un centime le clou, quarante francs. Personne n'en veut.",
    ],
    choices: [{ label: "Prendre un seau de clous et aller le vendre au Carrefour", to: "E1_clous" }] },

  E1_clous: { act: "I", title: "Des clous qui brillent", place: "carrefour",
    fx: { meet: ["tarage"] },
    text: [
      "Au Carrefour, le marché s'installe dans le froid. Tu poses ton seau au bord de la fontaine gelée, entre une marchande d'oignons et un rémouleur, et tu attends.",
      "Un charpentier s'arrête, prend un clou, le tourne entre ses doigts. « Il brille trop, dit-il. Un clou qui brille, on dirait qu'il cache quelque chose. »",
      "Une ménagère s'arrête. « Il ne rouille pas ? Jamais ? » Elle le repose avec méfiance. « Et comment je saurai qu'il est vieux ? »",
      "Un vieil homme s'arrête, longtemps. « Mon père a planté des clous toute sa vie, dit-il. Ils ont tous rouillé. C'est comme ça qu'on sait qu'on a vécu. » Il s'en va, ému, les mains vides.",
      "Au milieu de la place, dans sa guérite à côté de la bascule publique, le père Tarage te fait signe. Il te montre, sur sa petite balance, le clou que tu lui avais donné l'an dernier et qu'il a jeté dans la fontaine pour voir. Il brille encore. Il lève le pouce, solennel. C'est ton seul client satisfait en un an, et il ne t'a rien payé.",
      "C'est alors qu'un homme en livrée noire s'arrête devant ton seau. Il porte des gants blancs. Il a un visage de pierre, d'une immobilité si parfaite qu'on croirait qu'il économise ses expressions pour une grande occasion.",
      "« Mademoiselle Chrome. Je suis Isidore, au service de Monsieur Sorbier. Monsieur souhaiterait vous voir. » Une pause. « Discrètement. »",
    ],
    choices: [{ label: "Suivre le valet à la Banque", fx: { meet: ["isidore"] }, to: "E1_banque" }] },

  E1_banque: { act: "I", title: "Le bureau du banquier", place: "banque",
    fx: { meet: ["sorbier"] },
    text: [
      "Isidore te fait entrer par une petite porte de service, sur le côté de la Banque, et monter un escalier dérobé tapissé de velours rouge. En haut, un bureau lambrissé d'acajou, une cheminée où brûlent des bûches d'olivier, un tapis d'Orient, un globe terrestre, et derrière un bureau aussi large qu'une barque, Hector Sorbier.",
      "Il se lève pour toi. Il se lève pour tout le monde, mais il le fait si bien qu'on croit être la seule. « Mademoiselle Chrome. La fille de Gaspard. Mes condoléances, un an après. Votre père était un artiste. »",
      "Il te fait asseoir. Il ne s'assoit pas. Il marche lentement devant la cheminée, les mains derrière le dos, en parlant d'une voix douce qui semble chaque fois sur le point de vous faire un cadeau.",
      "« J'ai besoin d'une porte. Une porte de coffre-fort. La mienne a vingt ans ; elle grince, elle rouille, elle fait honte au siècle qui vient. On m'a dit que vous faisiez un acier qui ne rouille jamais. » Il s'arrête. « Je la veux pour demain soir. Une porte silencieuse, avec une serrure à deux clés. Une pour moi. Une pour vous, que vous me remettrez. Deux cents francs. Cent maintenant. »",
      "Deux cents francs. Le bail de la forge.",
      "« Venez, dit-il. Vous prendrez les mesures. »",
    ],
    choices: [{ label: "Descendre à la cave avec lui", to: "E1_cave" }] },
  E1_cave: { act: "I", title: "Le coffre", place: "banque",
    fx: { clue: "c_coffre", secret: "e_coffre" },
    text: [
      "La cave de la Banque Sorbier est une crypte. Des voûtes de pierre, un sol de dalles, une odeur de salpêtre et de cire. Isidore porte la lampe. Au fond, dans le mur, la porte du coffre : une vieille porte de fer à rivets, piquée de rouille, haute comme deux hommes, avec un volant au milieu comme un gouvernail de navire.",
      "Sorbier tourne le volant. La porte grince, avec un long gémissement de bête blessée, et s'ouvre.",
      "Tu entres pour mesurer l'encadrement. Tu te retournes, ton mètre pliant à la main. Et tu vois l'intérieur du coffre de la Caisse de la Super Retraite de Mirevaux, qui reçoit chaque semaine un franc de mille neuf cent douze personnes depuis cinq ans.",
      "Il contient une chaise, un encrier et un courant d'air.",
      "Tu prends tes mesures. Tu les prends très lentement, très soigneusement, avec les mains d'une forgeronne qui pense très vite.",
      "Derrière toi, la voix douce de Sorbier : « Nous avons déplacé les fonds, par prudence. Le siècle change, Mademoiselle. Les siècles qui changent attirent les voleurs. » Un temps. « Je compte, naturellement, sur votre discrétion. Vous savez sans doute que votre forge appartient à la Caisse. Une personne discrète, voyez-vous, n'a jamais de problème de bail. »",
      "Isidore tient la lampe. Son visage de pierre ne bouge pas. Mais la lampe, une seconde, tremble.",
    ],
    choices: [
      { label: "« Vous aurez votre porte demain soir, Monsieur. »", fx: { set: { coffre: "porte" }, gold: 100, secret: "e_bail", regard: { sorbier: "cordial" } }, to: "E1_banque_fin" },
      { label: "« Trouvez un autre forgeron, Monsieur. »", fx: { set: { coffre: "refus" }, secret: "e_bail", regard: { sorbier: "mefiant" } }, to: "E1_banque_fin" },
    ] },
  E1_banque_fin: { act: "I", title: "La porte de bronze", place: "banque",
    text: [
      { if: { has: "coffre=porte" }, text: "Sorbier te donne cent francs, en deux billets neufs qui craquent. Il te raccompagne jusqu'à la petite porte de service, en te parlant de ton père, de l'avenir, du siècle qui vient. Sur le seuil, il te serre la main. La sienne est tiède et sèche. La tienne garde le froid du coffre." },
      { if: { has: "coffre=refus" }, text: "Sorbier ne cesse pas de sourire. « C'est dommage, dit-il. Je trouverai un autre forgeron, bien sûr. Il fera une porte qui rouille. » Il te raccompagne jusqu'à la petite porte de service. « Le bail, Mademoiselle. Le premier janvier. Bonne journée. »" },
      "Dehors, le Carrefour est plein de soleil froid. Sur le mur de la Banque, une affiche neuve : *GRAND CONCOURS DU PAIN ÉTERNEL. Mille francs et une Super Retraite à vie à qui présentera un pain qui passera le siècle.*",
      "En partant, Sorbier t'a glissé, avec un clin d'œil : « Un pain d'acier, Mademoiselle. Voilà qui passerait le siècle. Pensez-y. »",
      "Tu y penses. Tu penses aussi à une chaise, un encrier et un courant d'air.",
    ],
    choices: [{ label: "Faire le tour de la ville avant de rentrer", to: "E1_ville" }] },

  E1_ville: { act: "I", title: "La ville", place: "carrefour", hub: true, backName: "la ville",
    text: [
      { first: true, text: "Tu reprends ton seau de clous. La ville tourne autour du Carrefour comme une roue autour de son moyeu, et partout, sur les murs, les affiches de la Caisse : un vieil homme rond, en chapeau neuf, qui sourit. Tu as envie de lui demander s'il sait ce qu'il y a dans le coffre." },
      { again: true, text: "Le soleil tourne. Tes clous brillent toujours. La ville ne parle que du concours." },
    ],
    choices: [
      { label: "Répondre à Victorin Levain, qui te fait signe depuis la Grande Boulangerie", hide: { seen: "E1_levain" }, to: "E1_levain" },
      { label: "Livrer ses clous à la crémière, ta seule cliente", hide: { seen: "E1_cremerie" }, to: "E1_cremerie" },
      { label: "Porter les boulons commandés par la gare", hide: { seen: "E1_gare" }, to: "E1_gare" },
      { label: "Passer devant l'Entrepôt aux grains, à vendre", hide: { seen: "E1_entrepot" }, to: "E1_entrepot" },
      { label: "Rentrer à la forge et forger ton pain d'acier", if: { count: VILLE, min: 3 }, why: "Tu n'as pas fini ton tour.", to: "E1_soir", big: true },
    ] },

  E1_levain: { act: "I", title: "Trois mille moules", place: "levain",
    fx: { meet: ["levain"] },
    text: [
      "Victorin Levain te reçoit au milieu de sa Grande Boulangerie, dans le fracas de la machine à vapeur, comme un capitaine sur le pont de son navire. La machine pétrit, souffle, siffle ; les mitrons courent autour d'elle avec des sacs, comme des fourmis autour d'une reine.",
      "« Chrome ! Vos clous qui brillent ! Toute la ville en rit ! » Il te tape sur l'épaule ; tu ne bouges pas d'un millimètre, et il retire sa main avec un léger étonnement. « Moi, je ne ris pas. Moi, je commande. »",
      "Il veut trois mille moules à pain en fer, rectangulaires, pour son pain de garde. Il t'en montre un exemplaire : une brique grise, posée sur un comptoir. Tu la soulèves. Elle pèse comme une vraie brique. Tu donnes dessus un petit coup de marteau, pour voir. Ton marteau rebondit. Le pain de garde est plus dur que ton fer.",
      "« Il passera le siècle, dit Levain avec émotion. Trois mille moules pour le premier janvier, et je fournis toute l'armée. Six cents francs. »",
      "Six cents francs. De quoi payer trois baux. De quoi forger, pour le siècle prochain, trois mille boîtes où l'on mettra du pain qui ne vivra jamais.",
    ],
    choices: [
      { label: "Accepter la commande", fx: { flag: "e:moules", regard: { levain: "cordial" } }, to: "E1_levain_fin" },
      { label: "« Je forge pour ce qui vit, Monsieur Levain. »", fx: { regard: { levain: "rancunier" } }, to: "E1_levain_fin" },
    ] },
  E1_levain_fin: { act: "I", title: "La vapeur", place: "levain",
    text: [
      { if: { has: "e:moules" }, text: "Levain te serre la main avec une vigueur de presse hydraulique. « Les premiers moules demain soir, Chrome. Mes mitrons passeront les prendre. » Tu repars avec une commande de six cents francs et l'impression bizarre d'avoir vendu à un homme les cercueils de son propre pain." },
      { if: { not: { has: "e:moules" } }, text: "Levain te regarde comme on regarde un cheval qui refuse l'avoine. « Ce qui vit, répète-t-il. Le pain, Chrome, ça ne vit pas. Ça se vend. » Ses mitrons rient avec un temps de retard. Tu repars. Derrière toi, la machine à vapeur siffle comme une moquerie." },
      "En sortant, tu croises un mitron qui porte sur l'épaule une planche de pains de garde. Il en fait tomber un. Le pain de garde rebondit sur les pavés, sans une miette, et va se loger sous une charrette. Personne ne le ramasse.",
    ],
    choices: [{ label: "Reprendre ton tour", to: "E1_ville" }] },

  E1_cremerie: { act: "I", title: "La seule cliente", place: "cremerie",
    fx: { meet: ["augustine"] },
    text: [
      "Augustine Salée est la seule personne de Mirevaux qui t'ait jamais acheté des clous qui brillent. Elle s'en sert pour ses barattes : le beurre salé ronge le fer ordinaire en un hiver, et les tiens ne bougent pas. Elle te paie en beurre, ce qui est, dit-elle, la monnaie la plus honnête du monde.",
      "« Deux cents clous, dit-elle en comptant. Et une motte de demi-sel pour ta grand-mère, qui n'a plus de dents mais qui a encore du goût. »",
      "Sur son comptoir de marbre, sous une cloche de verre, il y a un carnet de cotisant de la Caisse, ouvert comme une bible. Trois cent douze tampons. Elle le caresse du plat de la main.",
      "« Cinq ans, dit-elle. Un franc chaque samedi. À soixante ans, j'aurai plus d'argent que je n'en ai jamais eu avant. Je fermerai la boutique, et je regarderai le beurre des autres. »",
    ],
    choices: [
      { label: "« Augustine… j'ai vu le coffre de la Caisse, ce matin. »", hide: { not: { has: "coffre=porte" } }, fx: { flag: "e1:augustine_averti", regard: { augustine: "mefiant" } }, to: "E1_cremerie_dit" },
      { label: "« J'ai refusé une commande de Sorbier, ce matin. Il m'a fait descendre au coffre. »", hide: { not: { has: "coffre=refus" } }, fx: { flag: "e1:augustine_averti", regard: { augustine: "mefiant" } }, to: "E1_cremerie_dit" },
      { label: "Prendre la motte de beurre et repartir", fx: { flag: "e:beurre" }, to: "E1_ville" },
    ] },
  E1_cremerie_dit: { act: "I", title: "Le beurre et le marbre", place: "cremerie",
    text: [
      "Tu lui dis ce que tu as vu. La chaise. L'encrier. Le courant d'air.",
      "Augustine Salée t'écoute sans un mot. Puis elle prend un couteau et coupe la motte de demi-sel en deux, d'un geste sec, comme on tranche une question.",
      "« Les fonds sont déplacés, dit-elle. Par prudence. Monsieur Sorbier l'a dit au Comité, le mois dernier. Le siècle change, les voleurs rôdent. » Elle enveloppe le beurre dans du papier. « Tu es jeune, Ernestine. Tu vois un coffre vide et tu crois que l'argent n'existe pas. Moi, je vois quatorze retraités payés chaque vendredi. »",
      "Elle te tend le paquet. Ses mains tremblent un peu. Tu ne sais pas si c'est le froid de la boutique.",
      "« Ne répète pas ça au Carrefour, dit-elle. Mille neuf cent douze personnes ont confiance. La confiance, c'est comme le beurre. Ça ne se refait pas, une fois fondu. »",
    ],
    choices: [{ label: "Reprendre ton tour", fx: { flag: "e:beurre" }, to: "E1_ville" }] },

  E1_gare: { act: "I", title: "Le train de la capitale", place: "gare",
    fx: { meet: ["gratin"] },
    text: [
      "La gare de Mirevaux a une horloge, un quai, un chef de gare à casquette rouge, et vingt-huit boulons à remplacer sur l'aiguillage du nord. Tu les remplaces. Tes boulons brillent sur la voie comme des pièces de monnaie oubliées.",
      "À midi, le train de la capitale entre en gare dans un grand soupir de vapeur. Il en descend des voyageurs, des sacs de courrier, et un petit homme rond en redingote à col de velours, suivi de quatre porteurs chargés de malles. Il a une moustache cirée, des lunettes rondes, et à la chaîne de son gilet, une loupe d'horloger qui se balance comme un pendule.",
      "Il s'arrête net devant l'aiguillage. Il a vu tes boulons. Il s'accroupit, il visse sa loupe à son œil, il examine un boulon pendant une longue minute dans un silence religieux.",
      "« Remarquable, dit-il enfin. L'éclat. L'éclat, Mademoiselle ! » Il se relève, essuie sa loupe. « Maître Anatole Gratin, commissaire-priseur, de la capitale. Je viens estimer le Pain Éternel de la Caisse, pour le concours. Mais ceci… » Il désigne le boulon. « Ceci vaut quarante francs pièce. »",
      "Le chef de gare, qui te l'a payé un sou, s'étrangle.",
      "« Quarante francs, répète Maître Gratin, ravi. Je ne dis pas qu'on en donnerait quarante francs. Je dis qu'il les *vaut*. Ce sont deux choses très différentes, et c'est de la seconde que je vis. »",
    ],
    choices: [
      { label: "Lui offrir un clou qui brille", fx: { regard: { gratin: "admiratif" }, flag: "e:gratin_clou" }, to: "E1_gare_fin" },
      { label: "« Et un pain, Maître, combien vaut-il ? »", to: "E1_gare_fin" },
    ] },
  E1_gare_fin: { act: "I", title: "La valeur", place: "gare",
    text: [
      { if: { has: "e:gratin_clou" }, text: "Maître Gratin prend le clou entre deux doigts comme un diamant, le glisse dans une petite boîte de velours tirée de sa poche, et referme la boîte avec un claquement satisfait. « Je le ferai figurer dans mon catalogue de printemps. Clou, acier blanc, Mirevaux, 1899. Estimation : soixante francs. » Il te salue. Tu as donné un clou qui ne valait rien et tu en as fait un objet de soixante francs, en une phrase, sans le forger une seconde fois." },
      { if: { not: { has: "e:gratin_clou" } }, text: "« Un pain ? » Maître Gratin a un petit rire de gorge. « Un pain ne vaut rien, Mademoiselle. On le mange. Ce qui ne se mange pas, en revanche… » Il lève l'index. « Ce qui ne se mange pas, ce qui ne sert à rien, ce qui ne s'use pas : cela peut valoir tout ce qu'on voudra. Il suffit que quelqu'un d'autorisé le dise. »" },
      "Les porteurs chargent ses malles dans un fiacre. Il monte, se penche à la portière. « À l'Assemblée, Mademoiselle. Le 31, à minuit. J'y estimerai ce qu'on me présentera. » Il sourit. « J'ai déjà mon chiffre. »",
      "Le fiacre s'éloigne vers le Grand Hôtel. Tu restes sur le quai, à côté de l'horloge, à te demander comment un homme peut avoir déjà le chiffre d'un objet qui n'existe pas encore.",
    ],
    choices: [{ label: "Reprendre ton tour", to: "E1_ville" }] },

  E1_entrepot: { act: "I", title: "L'Entrepôt aux grains", place: "entrepot",
    text: [
      "Au sud du Carrefour se dresse l'Entrepôt aux grains : un grand bâtiment de fonte et de verre, trois étages de poutrelles rivetées, une verrière en dôme, de hautes vitrines sur la rue. Il a été construit il y a quinze ans, dans l'optimisme, pour le blé de toute la province. Depuis la mauvaise récolte, il est vide.",
      "Tu colles ton front à la vitrine. Dedans, il n'y a que la lumière, qui tombe de la verrière en grandes nappes blanches sur un plancher poussiéreux, et des pigeons qui se disputent un grain oublié.",
      "Sur la porte, un écriteau : *À vendre ou à louer. S'adresser à la Caisse de la Super Retraite.* Décidément, la Caisse possède tout.",
      "Tu restes là un moment. Tu imagines, sans savoir pourquoi, des choses posées dans cette vitrine. Des choses qui brillent. Des choses qui dureraient. Des gens qui s'arrêteraient devant, comme tu t'arrêtes, le front contre la vitre, et qui ne sauraient pas dire pourquoi ils ont envie de les regarder.",
      "Un pigeon s'envole sous la verrière. Le bruit de ses ailes résonne dans l'Entrepôt vide comme des applaudissements.",
    ],
    choices: [{ label: "Reprendre ton tour", fx: { flag: "e:entrepot" }, to: "E1_ville" }] },

  E1_soir: { act: "I", title: "Le pain d'acier", place: "forge", takes: "evening",
    text: [
      "Le soir, tu chauffes le creuset jusqu'au blanc. Mémé Chrome, sur son tabouret, n'a toujours pas dit sa phrase du jour. Elle regarde le feu.",
      "Un pain d'acier. Sorbier l'a dit en riant ; toi, tu ne ris pas. Tu sais faire un acier qui ne passe pas. Il te faut seulement lui donner la forme d'un pain.",
      "Tu essaies.",
    ],
    choices: [
      { label: "Forger une barre au marteau, et lui donner la forme d'une baguette", via: "marteau", to: "E1_essai" },
      { label: "Modeler un moule de sable à la main, et y couler l'acier", via: "sable", to: "E1_essai" },
      { label: "Graver une fausse croûte au burin sur un lingot", via: "burin", to: "E1_essai" },
    ] },
  E1_essai: { act: "I", title: "Le concombre", place: "forge",
    text: [
      { via: "marteau", text: "Tu frappes pendant deux heures. Tu étires la barre, tu l'arrondis, tu l'effiles aux deux bouts. Ce qui refroidit sur l'enclume, à la fin, a exactement la forme d'une baguette, et ressemble exactement à une matraque de gendarme." },
      { via: "sable", text: "Tu modèles dans le sable humide un creux en forme de pain, du plat de la main, avec tendresse. Tu y verses l'acier. Ce qui en sort a la forme d'un pain modelé à la main par quelqu'un qui n'a jamais regardé un pain : bosselé, tordu, vaguement végétal. On dirait un concombre qui aurait mal tourné." },
      { via: "burin", text: "Tu graves au burin, sur un lingot d'acier blanc, des lignes qui imitent les grignes d'une croûte. Le travail est fin, précis, patient. Le résultat ressemble à un lingot qui aurait reçu des coups de griffe. Un chat de très grande taille, à la rigueur, pourrait le prendre pour une baguette." },
      "Tu poses ton objet sur l'enclume. Tu le regardes. Il est éternel, il est brillant, il est raté.",
      "Le problème, tu le vois maintenant avec la clarté désagréable des choses évidentes : tu ne sais pas ce qu'est une croûte. Tu sais le métal. Tu ne sais pas comment la pâte se gonfle dans la chaleur, comment les grignes s'ouvrent, où se placent les bulles. Pour faire un pain d'acier, il faudrait un vrai pain, un pain parfait, pour lui prendre sa forme comme on prend l'empreinte d'un visage. Il faudrait un boulanger.",
      "Mémé Chrome, sur son tabouret, ouvre la bouche. Tu retiens ton souffle. Mais elle la referme. Ce n'est pas encore l'heure.",
      "Il est neuf heures du soir quand on frappe à la porte de la forge.",
    ],
    choices: [{ label: "Ouvrir, le marteau à la main", to: "E1_porte" }] },

  E1_porte: { act: "I", title: "Le boulanger", place: "forge",
    text: [
      "Sur le seuil, un jeune homme couvert de farine. Il a vingt-quatre ou vingt-cinq ans, des avant-bras de lutteur forain, de la farine jusqu'aux sourcils, et une buée blanche autour de la tête comme un saint de vitrail. Sous son bras, une baguette. Une vraie. Dure comme une bûche, à cette heure-ci.",
      "« On est fermé, dis-tu.",
      "— Il y a de la lumière.",
      "— La lumière, c'est le feu. Le feu, ça ne ferme pas. »",
      "Il regarde par-dessus ton épaule. Il voit l'enclume. Il voit, sur l'enclume, ton pain d'acier raté. Il voit l'affiche du concours clouée au mur. Tu regardes, toi, sa baguette. Puis ton objet. Puis sa baguette. Puis lui.",
      "« Vous concourez, dis-tu.",
      "— Vous aussi. »",
      "Tu le connais de vue. Tout Mirevaux connaît le fils Croûte, de la rue des Mitrons, dont le pain est le meilleur de la ville le matin et le plus dur le soir. Barnabé, il s'appelle. Il a la réputation de parler trop et de pétrir mieux encore.",
      "Mémé Chrome, sur son tabouret, prononce soudain, d'une voix claire et forte, sans quitter le feu des yeux : « Le pain et le fer. Il y a longtemps qu'on n'avait pas vu ça. »",
      "Puis elle se tait. La phrase du jour est tombée. Elle était pour lui.",
    ],
    choices: [
      { label: "« Vous avez le pain. J'ai l'acier. On pourrait gagner à deux. »", monde: "pacte", option: "allies", hide: PACTE_R, fx: { set: { pacte: "allies" } }, to: "E1_pacte" },
      { label: "« Le fer, c'est l'affaire des forgerons, Monsieur. »", monde: "pacte", option: "rivaux", hide: PACTE_A, fx: { set: { pacte: "rivaux" } }, to: "E1_pacte" },
    ] },
  E1_pacte: { act: "I", title: "L'enclume", place: "forge",
    text: [
      { if: PACTE_A, text: "Il te regarde longtemps, sa baguette morte sous le bras. Puis il entre, et il s'assoit sur l'enclume, à côté de ton pain raté, comme on s'assoit sur un banc d'église." },
      { if: PACTE_A, text: "Vous parlez jusqu'à deux heures du matin. Il t'explique la croûte : la chaleur qui saisit la pâte, l'eau qui s'en va, les grignes qui s'ouvrent comme des lèvres, et le chant, à la sortie du four, que les boulangers écoutent comme des marins écoutent les sirènes. Tu lui expliques l'acier blanc : le chrome, le nickel, la température que ton père a cherchée toute sa vie et que tu as trouvée trois semaines après sa mort." },
      { if: PACTE_A, text: "« Un moule de terre réfractaire, dis-tu enfin, pris sur votre plus belle baguette. On cuit la terre, le pain brûle dedans et laisse son creux. Et dans le creux, je coule l'acier. » Tu le vois voir la même chose que toi : une baguette d'acier blanc qui aurait la croûte, les grignes, les bulles, tout, sauf la mort." },
      { if: PACTE_A, text: "« Demain matin, dit-il. Cinq heures. C'est l'heure où elle est parfaite. »" },
      { if: PACTE_R, text: "Il hausse les épaules. « Et le pain, c'est l'affaire des boulangers, Mademoiselle. » Il lorgne ton concombre d'acier avec une expression que tu n'aimes pas du tout." },
      { if: PACTE_R, text: "Vous vous disputez une heure, debout, de part et d'autre de l'enclume. Il dit que ton acier ressemble à un concombre. Tu dis que son pain ressemble à un gourdin dès le coucher du soleil. Vous avez raison tous les deux, et c'est le plus vexant." },
      { if: PACTE_R, text: "Il repart. Tu refermes la porte un peu trop fort. Puis tu restes devant l'enclume, à regarder ton objet raté, et tu comprends une chose qui t'agace profondément : ton acier a besoin de son pain. Tu jurerais qu'en ce moment même, sur le pont de l'oued, il comprend la même chose, et qu'il en est tout aussi agacé." },
      "Le feu baisse. Mémé Chrome dort, droite sur son tabouret, les mains sur les genoux, avec le sourire de quelqu'un qui a bien choisi sa phrase.",
    ],
    choices: [{ label: "Couvrir le feu pour la nuit", fx: { flag: "ch1:ernestine" }, to: "C1" }] },
};
