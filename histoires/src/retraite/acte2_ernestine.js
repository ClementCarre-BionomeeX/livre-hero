// La Super Retraite · act II, Ernestine (30 December 1899). The model baguette arrives and the clay mould is made
// (test); the day (hub, three visits): the vault door at the bank (coffre=porte: the key kept or handed over; the ledger
// c_registre), Isidore's trunks (c_gare, isidore=allie), Maître Gratin at the forge (c_lettre), Levain's men
// (levain:sait), Mémé's sentence; then the night casting (aparte; world choice baguettes). Ends with ch2:ernestine.
var PACTE_A = { has: "pacte=allies" }, PACTE_R = { has: "pacte=rivaux" };
var UNE = { has: "baguettes=une" }, DEUX = { has: "baguettes=deux" };
var JOUR = [{ seen: "E2_banque" }, { seen: "E2_isidore" }, { seen: "E2_gratin" }, { seen: "E2_levain" }];
module.exports = {
  E2_aube: { act: "II", title: "Le pain de cinq heures", place: "forge",
    text: [
      "Le 30 décembre, à cinq heures et demie du matin, il fait si froid que le feu de la forge a l'air d'avoir froid lui aussi.",
      { if: PACTE_A, text: "On frappe. Barnabé Croûte est sur le seuil, essoufflé, un torchon dans les bras. Il a couru à travers la ville. Tu prends le torchon. Dedans, il y a deux baguettes, dont une plus belle que l'autre. La plus belle est chaude comme un petit animal. Et elle chante : un crépitement de pluie fine, de bois sec, qui monte du torchon jusqu'à ton visage. Tu n'avais jamais écouté un pain. Tu restes penchée au-dessus, sans un mot. Quand tu relèves la tête, il est parti. Il sait qu'on ne parle pas à un forgeron qui a du travail." },
      { if: PACTE_R, text: "On frappe. Sur le seuil, une petite fille de douze ans, en tablier trop grand, un torchon dans les bras. « De la part de personne », dit-elle, et elle te tend le torchon. Dedans, il y a deux baguettes, et la plus belle chante. Tu restes penchée au-dessus un moment. « Dis à personne merci, dis-tu. Et dis-lui que personne pétrit drôlement bien. » La petite fille hoche la tête, compte quelque chose sur ses doigts, et part en courant." },
      "Tu poses la plus belle sur l'établi, dans la lumière du feu. L'autre, tu la ranges sous l'établi, dans le torchon. Au cas où. Tu la regardes comme ton père regardait un lingot avant de le travailler : longtemps, sans la toucher. Les grignes. Les bulles. La courbe du bout. Tout cela doit passer dans la terre, puis dans le métal, sans perdre un cheveu.",
      "Tu prépares la terre réfractaire, celle des creusets, mêlée de sable fin et de crin de cheval. Il faut l'appliquer sur le pain sans l'écraser, couche par couche, comme on habille un nouveau-né.",
    ],
    choices: [
      { label: "Prendre l'empreinte", test: { dom: "savoir", diff: 0, label: "Le moule" },
        win: { fx: { set: { moule: "fin" }, ep: 150 }, to: "E2_moule" }, lose: { fx: { set: { moule: "epais" } }, to: "E2_moule" } },
    ] },
  E2_moule: { act: "II", title: "Le moule", place: "forge",
    text: [
      { outcome: "win", text: "Tes doigts ont la légèreté d'un horloger. La terre épouse chaque grigne, chaque bulle, chaque pore de la croûte. Quand tu as fini, le pain a disparu sous une gaine grise, et on devine encore dessous, comme sous un drap, sa forme exacte." },
      { outcome: "lose", text: "La terre est trop épaisse à un endroit, près du quignon. Tu la reprends, tu l'amincis, mais une petite bulle, une seule, s'est effacée sous ton pouce. Personne ne le verra. Toi, tu le sauras jusqu'à la fin de tes jours." },
      "Tu fends le bloc en deux dans sa longueur avec un fil de laiton, d'un seul geste, et tu mets les deux moitiés à cuire dans le four de la forge. Le pain brûlera dedans tout l'après-midi. Il laissera son creux, sa forme à l'envers, comme les gens laissent la leur dans un fauteuil.",
      "Mémé Chrome te regarde faire. Ses lèvres bougent. Tu attends. Rien. Ce n'est pas encore l'heure.",
      "Tu as la journée devant toi. Dans la poche de ton tablier, il y a un mètre pliant, et dans ta tête, une chaise, un encrier et un courant d'air.",
    ],
    choices: [{ label: "Commencer ta journée", to: "E2_jour" }] },

  E2_jour: { act: "II", title: "Le 30 décembre", place: "forge", hub: true, backName: "ta journée",
    text: [
      { first: true, text: "Le moule cuit. Le creuset attend. La journée, elle, est pleine de gens qui frappent à ta porte, ce qui n'arrive jamais. On dirait que la ville entière a appris qu'il se préparait quelque chose au faubourg de l'oued." },
      { again: true, text: "Le four de la forge ronronne. Le pain brûle dans sa gaine de terre. Mémé Chrome surveille." },
    ],
    choices: [
      { label: "Porter la porte du coffre à la Banque, et la poser", hide: { any: [{ seen: "E2_banque" }, { not: { has: "coffre=porte" } }] }, to: "E2_banque" },
      { label: "Aller à la Banque demander un délai pour le bail", hide: { any: [{ seen: "E2_banque" }, { has: "coffre=porte" }] }, to: "E2_banque" },
      { label: "Recevoir le valet de Sorbier, qui attend à la porte", hide: { seen: "E2_isidore" }, to: "E2_isidore" },
      { label: "Recevoir Maître Gratin, qui descend d'un fiacre", hide: { seen: "E2_gratin" }, to: "E2_gratin" },
      { label: "Recevoir les mitrons de la Grande Boulangerie", hide: { seen: "E2_levain" }, to: "E2_levain" },
      { label: "Rallumer le creuset : c'est la nuit de la coulée", if: { count: JOUR, min: 3 }, why: "La journée n'est pas finie.", to: "E2_soir", big: true },
    ] },

  E2_banque: { act: "II", title: "La cave de la Banque", place: "banque",
    text: [
      { if: { has: "coffre=porte" }, text: "Tu as forgé la porte cette nuit, entre deux et quatre heures du matin, pendant que la ville dormait : une plaque d'acier blanc de deux doigts d'épaisseur, une serrure à triple panneton, des gonds montés sur billes qui ne font aucun bruit. Il faut quatre déménageurs et un cheval pour la porter jusqu'à la Banque. Tu la poses toi-même, dans la cave, à la place de l'ancienne. Elle tourne sur ses gonds sans un soupir, comme une porte de rêve." },
      { if: { has: "coffre=porte" }, text: "Sorbier vient voir. Il fait jouer la porte, il écoute le silence, il sourit. « Parfait. » Il tend la main, paume ouverte. « Votre clé, Mademoiselle. Il n'en existe que deux, n'est-ce pas ? »" },
      { if: { has: "coffre=refus" }, text: "Tu demandes à voir Monsieur Sorbier pour le bail. Un employé te fait attendre dans un couloir de la cave, sur une banquette, à côté de l'escalier. Au bout du couloir, dans le mur, une porte de coffre neuve, en fer, posée hier par un serrurier de la rue Basse. Elle est entrouverte. Elle rouille déjà sur les bords." },
      "Le long du couloir, contre le mur, il y a quatre malles de voyage en cuir fauve, cerclées de laiton, flambant neuves, empilées deux par deux. Sur chacune, une étiquette de bagages vierge, attachée à la poignée par une ficelle. Elles attendent. Elles ont l'air de chiens bien dressés qui attendent leur maître devant la porte.",
      "Dans le coffre, sur la chaise, il y a un registre ouvert. Un grand registre relié de toile verte, avec une plume posée en travers.",
    ],
    choices: [
      { label: "Lui remettre ta clé, comme convenu", hide: { not: { has: "coffre=porte" } }, fx: { regard: { sorbier: "cordial" }, flag: "e:cle_rendue" }, to: "E2_registre" },
      { label: "Lui remettre ta clé, et garder la troisième que tu as forgée cette nuit sans rien dire", hide: { not: { has: "coffre=porte" } }, test: { dom: "discretion", diff: 0, label: "Visage de marbre" },
        win: { fx: { item: "cle_coffre", flag: "e:cle_gardee" }, to: "E2_registre" }, lose: { fx: { flag: "e:cle_rendue", regard: { sorbier: "mefiant" } }, to: "E2_cle_vue" } },
      { label: "Te glisser jusqu'au registre pendant que l'employé a le dos tourné", hide: { has: "coffre=porte" }, test: { dom: "discretion", diff: -10, label: "Pas de loup" },
        win: { fx: { clue: "c_registre", flag: "e:registre" }, to: "E2_banque_fin" }, lose: { to: "E2_banque_fin" } },
    ] },
  E2_cle_vue: { act: "II", title: "Trois clés", place: "banque",
    text: [
      "Tu lui tends une clé. Ta main est parfaitement calme. Mais Isidore, qui se tient derrière son maître, laisse tomber ses yeux, une fraction de seconde, sur la poche de ton tablier, où la troisième clé fait une petite bosse. Sorbier suit son regard.",
      "Il sourit. Il tend de nouveau la main, sans un mot.",
      "Tu lui donnes la troisième clé. Il les fait sauter toutes les deux dans sa paume, comme des dés. « L'acier est une affaire de confiance, Mademoiselle Chrome. Comme l'argent. » Il les met dans son gilet.",
      "Isidore regarde le mur. Son visage ne dit rien. Mais tu sais maintenant qu'il voit tout.",
    ],
    choices: [{ label: "Jeter un œil au registre, en passant", fx: { clue: "c_registre", flag: "e:registre" }, to: "E2_banque_fin" }] },
  E2_registre: { act: "II", title: "Le registre vert", place: "banque",
    fx: { clue: "c_registre", flag: "e:registre" },
    text: [
      { if: { has: "e:cle_gardee" }, text: "Tu lui tends une clé. Ta main est parfaitement calme ; ton visage aussi, celui que ton père appelait *ton visage d'enclume*. La troisième clé, celle que tu as forgée cette nuit avec le reste du métal, dort dans la doublure de ton tablier, contre ta hanche. Sorbier range la sienne et la tienne dans son gilet, et il te remercie." },
      { if: { has: "e:cle_rendue" }, text: "Tu lui tends ta clé. Il la range dans son gilet, avec la sienne, et il te remercie." },
      "Pendant qu'il remonte l'escalier, tu fais semblant de vérifier un gond. Le registre vert est ouvert sur la chaise, à la dernière page. Tu lis à l'envers, comme on lit les gravures.",
      "*Cotisants inscrits au 30 décembre 1899 : 1 912. Retraités : 14.* Et en bas, à la ligne *En caisse au 31 décembre*, quelqu'un a écrit un chiffre, puis l'a gratté au canif, si soigneusement qu'il n'en reste qu'un fantôme. Tu te penches. Le fantôme est rond. C'est un zéro.",
    ],
    choices: [{ label: "Remonter, et sortir par la petite porte", to: "E2_banque_fin" }] },
  E2_banque_fin: { act: "II", title: "Le Carrefour", place: "carrefour",
    text: [
      { if: { has: "coffre=refus" }, text: "On te fait enfin entrer chez Sorbier, qui t'écoute avec une bienveillance parfaite, te refuse tout délai avec une bienveillance parfaite, et te souhaite une bonne année avec une bienveillance parfaite. Le bail, le premier janvier. Deux cents francs." },
      { if: { all: [{ has: "coffre=refus" }, { has: "e:registre" }] }, text: "Mais pendant que l'employé était allé le prévenir, tu as eu le temps de traverser le couloir, de te pencher sur le registre vert ouvert dans le coffre, et de lire la dernière page à l'envers : *Cotisants : 1 912. Retraités : 14.* Et à la ligne *En caisse au 31 décembre*, un chiffre gratté au canif, dont il ne reste qu'un fantôme rond. Un zéro." },
      "Dehors, sur le Carrefour, la file des cotisants dépasse la fontaine. Les gens tapent des pieds pour se réchauffer. Ils tiennent leur franc dans leur poing. Tu passes devant eux, et tu n'arrives pas à les regarder.",
    ],
    choices: [{ label: "Filer à la forge", to: "E2_jour" }] },

  E2_isidore: { act: "II", title: "Les cerclages", place: "forge",
    fx: { meet: ["isidore"] },
    text: [
      "Isidore attend devant ta porte, dans le froid, droit, ganté, depuis on ne sait combien de temps. Il a l'air d'une statue qu'on aurait livrée à la mauvaise adresse.",
      "« Monsieur souhaite seize cerclages d'acier, pour des malles. En acier qui ne rouille pas. Pour un long voyage. » Il te tend un papier avec des mesures, d'une écriture penchée et parfaite. « Pour ce soir. »",
      "Seize cerclages. Quatre malles. Un long voyage. Tu les forges pendant qu'il attend, assis sur le banc près du feu, à côté de Mémé Chrome. Ils se tiennent tous les deux très droits, sans un mot, comme deux personnes qui se reconnaissent.",
      "Quand tu as fini, il paie, il range les cerclages dans un sac de toile, et il se lève.",
    ],
    choices: [
      { label: "« Votre maître part, Isidore ? »", test: { dom: "social", diff: -10, label: "Faire parler une statue" },
        win: { fx: { clue: "c_gare", set: { isidore: "allie" }, regard: { isidore: "allie" }, ep: 200 }, to: "E2_isidore_parle" }, lose: { to: "E2_isidore_fin" } },
      { label: "Le laisser partir", to: "E2_isidore_fin" },
    ] },
  E2_isidore_parle: { act: "II", title: "Ce que porte un valet", place: "forge",
    text: [
      "Isidore s'arrête sur le seuil. Il regarde la neige qui ne tombe pas. Il regarde Mémé Chrome, qui le regarde aussi.",
      "« Train de nuit du 31, dit-il. Minuit quarante. Deux billets en première. Monsieur et Maître Gratin. » Il lisse ses gants. « Quatre malles. Je les ai portées. Elles sont lourdes comme des pièces d'argent, Mademoiselle, parce qu'elles sont pleines de pièces d'argent. »",
      "Il se tait un instant. Quand il reprend, sa voix n'a pas changé, mais quelque chose en dessous a bougé, comme une dalle.",
      "« J'ai servi Monsieur onze ans. Je lui ai ouvert onze mille portes. Il ne m'a pas acheté de billet. » Il remet son chapeau. « Ma mère cotise. Un franc chaque samedi. »",
      "Il sort. Mémé Chrome le suit des yeux jusqu'au pont.",
    ],
    choices: [{ label: "Reprendre ta journée", to: "E2_jour" }] },
  E2_isidore_fin: { act: "II", title: "La statue", place: "forge",
    text: [
      "Isidore s'incline de deux degrés exactement et s'en va, le sac de cerclages à l'épaule, de son pas égal, vers le pont de l'oued. Il ne se retourne pas.",
      "Seize cerclages pour quatre malles. Tu les as forgés de tes mains. Ils ne rouilleront jamais. Ils iront loin.",
    ],
    choices: [{ label: "Reprendre ta journée", to: "E2_jour" }] },

  E2_gratin: { act: "II", title: "L'expert", place: "forge",
    fx: { meet: ["gratin"] },
    text: [
      "Un fiacre s'arrête devant la forge, ce qui n'est jamais arrivé dans l'histoire du faubourg. Les enfants du quartier l'entourent comme une vache égarée. Il en descend Maître Anatole Gratin, en redingote à col de velours, la loupe d'horloger au gilet.",
      "« Mademoiselle Chrome ! Je passais. » Personne ne passe au faubourg de l'oued. « On dit que vous préparez quelque chose pour le concours. »",
      "Il fait le tour de la forge à petits pas, en touchant tout du bout de sa canne. Il s'arrête devant un fer à cheval pendu au mur, le visse à son œil, l'examine.",
      "« Fer à cheval, faubourg, fin de siècle. Patine d'usage. Quarante mille francs. »",
      "Il le repose. Il examine une pince. « Huit mille. » Un seau. « Deux mille, le seau seul. » Mémé Chrome. Il la regarde à travers sa loupe pendant un long moment. Mémé Chrome le regarde aussi. Il range sa loupe sans rien dire.",
      "« Je m'entraîne, explique-t-il. Demain soir, je dois dire un chiffre très gros, d'une voix très sûre. C'est un art. »",
      "Quand il ressort, il se prend les pieds dans le seuil, se rattrape à ta porte, et une enveloppe glisse de la poche intérieure de sa redingote. Elle tombe sur la terre battue, à tes pieds, le rabat ouvert. Il ne s'en aperçoit pas. Il est déjà dans son fiacre, et le fiacre déjà sur le pont.",
    ],
    choices: [
      { label: "Ramasser l'enveloppe et la lire", fx: { item: "lettre_gratin", clue: "c_lettre", flag: "e:gratin_lettre" }, to: "E2_gratin_fin" },
      { label: "Ramasser l'enveloppe et la lui renvoyer demain, fermée", fx: { flag: "e:gratin_honnete" }, to: "E2_gratin_fin" },
    ] },
  E2_gratin_fin: { act: "II", title: "Le chiffre", place: "forge",
    text: [
      { if: { has: "e:gratin_lettre" }, text: "Tu lis. *Mon cher Maître, trois millions, comme convenu. Peu importe l'objet : vous l'estimerez. Le reste vous sera remis sur le quai. H. S.*" },
      { if: { has: "e:gratin_lettre" }, text: "*Peu importe l'objet.* Tu relèves les yeux vers ton four, où ton moule cuit, où le pain de Barnabé brûle pour laisser sa forme. Peu importe l'objet. Tu pourrais leur apporter un fer à cheval, un seau, un concombre d'acier. Il vaudrait trois millions. Et le coffre serait toujours vide." },
      { if: { has: "e:gratin_honnete" }, text: "Tu poses l'enveloppe sur l'établi, rabat ouvert, sans la regarder. Tu as été élevée par un homme qui disait qu'on ne lit pas les lettres des autres, même quand elles tombent à vos pieds, surtout quand elles tombent à vos pieds. Tu y penses pendant une heure. Tu ne la lis pas. C'est une forme d'acier, aussi." },
    ],
    choices: [{ label: "Reprendre ta journée", to: "E2_jour" }] },

  E2_levain: { act: "II", title: "Les mitrons", place: "forge",
    fx: { meet: ["levain"], flag: "levain:sait" },
    text: [
      { if: { has: "e:moules" }, text: "Quatre mitrons de la Grande Boulangerie arrivent avec une charrette pour les premiers moules. Tu leur en donnes trois cents, empilés comme des briques. Ils les chargent en silence. Ils ont les épaules d'hommes qui portent des sacs de farine depuis l'âge de dix ans." },
      { if: { not: { has: "e:moules" } }, text: "Quatre mitrons de la Grande Boulangerie arrivent, sans charrette, les mains dans les poches. Ils disent qu'ils viennent de la part de Monsieur Levain, pour savoir si Mademoiselle Chrome a changé d'avis sur les moules. Ils le disent en regardant partout, sauf vers toi." },
      "Le plus grand des quatre, un rouquin à la mâchoire carrée, s'approche de ton four. Il renifle. « Ça sent le pain, dit-il. Pourquoi ça sent le pain, chez une forgeronne ? »",
      "Il soulève, du bout de sa pelle, le couvercle du four. Il voit les deux moitiés du moule de terre, en train de cuire, avec dedans, encore visible à travers une fente, la croûte dorée d'une baguette qui brûle doucement.",
      "Il repose le couvercle. Il te regarde. Il a compris quelque chose ; pas tout, mais assez pour son patron.",
      "Les quatre mitrons repartent. Sur le pont, le rouquin se met à courir.",
    ],
    choices: [{ label: "Reprendre ta journée", to: "E2_jour" }] },

  E2_soir: { act: "II", title: "La nuit de la coulée", place: "forge", takes: "night",
    text: [
      "La nuit tombe vite le 30 décembre. À dix heures, il gèle si fort que les galets de l'oued craquent dans le noir.",
      "Tu sors le moule du four. Le pain a brûlé ; il n'en reste qu'une poussière noire, que tu fais tomber en soufflant. Dans chaque moitié de terre, le creux est parfait. Une baguette à l'envers. Une absence en forme de pain.",
      "Tu charges le creuset. Fer, chrome, nickel, dans les proportions que ton père a écrites au crayon dans un carnet de comptes, entre deux factures de fers à cheval. Tu actionnes le soufflet. Le feu monte au blanc, puis au-delà du blanc, là où il devient presque bleu.",
      { if: PACTE_A, text: "Barnabé arrive à dix heures. Il entre sans frapper, cette fois. Il regarde le moule ouvert sur l'établi, et il reste longtemps silencieux devant le creux de son pain, comme un homme devant une photographie de lui-même enfant." },
      { if: PACTE_R, text: "Barnabé arrive à dix heures. Il frappe. Il dit qu'il vient voir comment on traite son pain. Tu lui dis que son pain est mort à quatre heures et qu'il a très bien brûlé. Il regarde le moule ouvert sur l'établi, et il oublie, pendant une bonne minute, qu'il était venu pour se disputer." },
      "Mémé Chrome est sur son tabouret, sous trois châles.",
    ],
    choices: [{ label: "Fermer le moule", to: "E2_coulee" }] },
  E2_coulee: { act: "II", title: "La coulée", place: "forge", aparte: true,
    text: [
      "Vous refermez les deux moitiés, vous les serrez dans des cerclages, vous les plantez debout dans le bac de sable, l'ouverture en haut.",
      "Tu prends le creuset avec les longues pinces. Le métal est si blanc qu'il éclaire tout : les poutres noires, les seaux de clous, le visage de Barnabé, celui de ta grand-mère. Il fait jour dans la forge à onze heures du soir.",
      "« Une seule coulée, dis-tu. Le métal ne pardonne pas. »",
      "Tu regardes le creuset. Il y a assez de métal pour deux. Sous l'établi, il y a un second moule, que tu as pris cet après-midi sur la deuxième baguette du torchon, celle que le boulanger avait glissée *au cas où*.",
      "« Il y a assez de métal pour deux », dis-tu.",
    ],
    choices: [
      { label: "« Une seule. Une baguette éternelle, il ne doit y en avoir qu'une. »", monde: "baguettes", option: "une", hide: DEUX, fx: { set: { baguettes: "une" } }, to: "E2_coulee_fin" },
      { label: "« Deux. Une pour le concours. Une pour nous. »", monde: "baguettes", option: "deux", hide: UNE, fx: { set: { baguettes: "deux" } }, to: "E2_coulee_fin" },
    ] },
  E2_coulee_fin: { act: "II", title: "L'acier demeure", place: "forge",
    text: [
      { if: DEUX, text: "Tu verses. Le métal coule dans le premier moule avec un bruit de soie déchirée, puis dans le second, jusqu'à la dernière goutte. Le creuset est vide. Tu n'as jamais rien versé aussi exactement de ta vie." },
      { if: UNE, text: "Tu verses. Le métal coule dans le moule avec un bruit de soie déchirée. Ce qui reste au fond du creuset, tu le jettes dans un seau d'eau, où il siffle et se fige en une petite étoile tordue. Tu la donneras plus tard à la petite fille au tablier trop grand." },
      "Puis vous attendez, assis côte à côte sur l'enclume, deux heures, sans un mot. Le froid dans le dos. Le feu devant.",
      "À une heure du matin, tu brises le moule au marteau.",
      "Elle est là. Une baguette d'acier blanc, avec la croûte de Barnabé, ses grignes, ses bulles, la petite cambrure du bout que fait sa main. Elle brille comme un miroir qu'on aurait roulé. Elle pèse comme un gourdin. Elle est belle comme une chose trouvée au fond de la mer.",
      "Et en refroidissant sur l'enclume, elle fait un bruit. Un crépitement minuscule, cristal par cristal. Barnabé tend l'oreille, et toi aussi.",
      "Elle chante.",
      "Tu prends ton burin. Tu sais exactement quoi graver ; tu l'as su toute la journée. Sous le quignon, en lettres fines : *N° 1 · Barnabé & Ernestine · 1899 · L'acier demeure.*",
      { if: DEUX, text: "Sous la seconde, seulement : *N° 2.* Barnabé demande pourquoi la seconde n'a pas de phrase. Tu dis que la seconde n'est pas à montrer." },
      { if: UNE, text: "Barnabé demande pourquoi un numéro, s'il n'y en a qu'une. « Parce qu'on ne sait jamais », dis-tu." },
      "Il lit à voix haute : « L'acier demeure. » Puis il ajoute, après un silence : « Le pain passe. » Tu le regardes. Vous venez d'écrire, sans le savoir, la première réclame d'une maison qui n'existe pas encore.",
      "Mémé Chrome ouvre les yeux, regarde la baguette sur l'enclume, et dit d'une voix claire : « Ce qui brille trop longtemps, on finit par vous le voler. » Puis elle les referme. C'était la phrase du jour, et elle l'avait gardée pour la fin.",
    ],
    choices: [{ label: "Couvrir le feu, et laisser la baguette refroidir jusqu'au matin", fx: { flag: "ch2:ernestine", ep: 200 }, to: "C2" }] },
};
