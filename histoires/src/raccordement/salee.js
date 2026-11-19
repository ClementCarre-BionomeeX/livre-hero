// Le Grand Raccordement · Salée's five chapters (second person). 1: the butter road at dawn, the technicians, the
// plaquette, the green door. 2: back to Mirevaux, the barriers, the camp, the meter at the crèmerie. 3: the Carrefour
// before noon, her mother, Gaston. 4: Mirevaux in ashes, Ripaille's convoy (join it, or follow it). 5: the bikers at
// dawn. Each chapter ends with ch<n>:salee and goes back to its crossroads.
var COMPRIS = { has: "midi:compris" };
module.exports = {
  // ---------------------------------------------------------------- 1 · the butter road
  S1_route: { act: "I", title: "La route du beurre", place: "route",
    fx: { meet: ["honorine"] },
    text: [
      "Tu roules depuis cinq heures. La route de Mirevaux au Domaine est droite comme un trait de règle, noire, encore fraîche de la nuit, et de part et d'autre, jusqu'au bout du monde, s'étendent les champs de panneaux solaires. À cette heure, ils dorment. Ils ont la tête basse, tous ensemble, des millions de visages de verre penchés vers le sable, comme une foule à un enterrement très long.",
      "Tu t'appelles Salée. Tu as dix-neuf ans, des cheveux roux que tu coupes toi-même avec les ciseaux à fromage, une cape de cuir rapiécée qui a été celle de ton père, et une moto à side-car que tu as remontée pièce par pièce dans l'arrière-boutique. Tu l'appelles la Baratte, parce qu'elle secoue tout ce qu'on lui confie, et qu'au bout du voyage la crème est devenue du beurre.",
      "Dans le side-car, il y a quarante mottes de beurre salé de la crèmerie Salée, au Carrefour de Mirevaux, enveloppées chacune dans un papier sulfurisé où l'on a imprimé, en or, le petit ange de la Maison Croûte & Chrome : joufflu, la trompette aux lèvres, un pied levé. Ta mère vend son beurre à la Maison depuis vingt ans, et la Maison le revend sous son ange, trois fois plus cher, au Domaine. Ta mère dit que c'est le prix de l'ange. Elle dit cela sans amertume, comme on parle de la météo.",
      "Avant chaque départ, ta mère, Honorine, tapote du doigt l'ange de la première motte, deux fois, pour que le beurre arrive ferme. Ce matin, elle était au fond de la cave, et tu es partie sans qu'elle le fasse. Tu y as pensé pendant vingt kilomètres. C'est le genre de chose qui ne compte pas, jusqu'au jour où elle compte.",
    ],
    choices: [
      { label: "Arrêter la Baratte et tapoter l'ange de la première motte, deux fois", fx: { flag: "s:rite", ferveur: 1 }, to: "S1_techniciens" },
      { label: "Mettre les gaz : le beurre arrivera ferme si tu arrives vite", fx: { flag: "s:gaz" }, to: "S1_techniciens" },
    ] },
  S1_techniciens: { act: "I", title: "Le barrage", place: "route",
    fx: { meet: ["phebus", "lumen"], item: "plaquette" },
    text: [
      { if: { has: "s:rite" }, text: "Tu arrêtes la Baratte au bord de la route, tu soulèves la bâche, tu tapotes l'ange, deux fois. Le papier est froid. Tu te sens bête, et un peu mieux. Le moteur, qui calait à chaque arrêt depuis un mois, repart du premier coup." },
      { if: { has: "s:gaz" }, text: "Tu mets les gaz. La Baratte tousse, crache, et fonce. Le vent du matin te gifle les joues. Le beurre arrivera ferme, ou il arrivera mou, mais il arrivera tôt." },
      "Au kilomètre trente, une barrière blanche coupe la route en deux. Une camionnette blanche est garée en travers, gyrophare orange. Deux hommes en combinaison blanche se tiennent devant, coiffés de visières miroir, si bien que tu te vois deux fois en arrivant, toute petite, rousse et poussiéreuse, sur ta moto qui fume.",
      "Derrière eux, au bord du champ, d'autres hommes vissent sur chaque panneau un petit boîtier blanc frappé d'un soleil carré. Des câbles neufs courent dans le sable comme des serpents qu'on vient d'acheter.",
      "« Consortium des Panneaux Réunis, dit le premier. Je suis Phébus. Voici Lumen.",
      "— Lumen », dit le second, avec un temps de retard.",
      "« Où allez-vous ? »",
    ],
    choices: [
      { label: "« Au Domaine. Je livre le beurre. »", fx: { flag: "s:dit" }, to: "S1_cour" },
      { label: "« À la plage. »", fx: { flag: "s:plage" }, to: "S1_cour" },
    ] },
  S1_cour: { act: "I", title: "La porte verte", place: "service",
    text: [
      { if: { has: "s:dit" }, text: "Phébus note quelque chose sur une tablette. « Domaine Croûte & Chrome. Livraison de matière grasse. » Il relève sa visière d'un centimètre, et tu vois un œil bleu très pâle, qui ne cligne pas. « Vous y allez souvent ? Dans la Salle froide ? » Tu ne réponds pas. Il rabaisse sa visière, satisfait de quelque chose." },
      { if: { has: "s:plage" }, text: "Phébus te regarde à travers sa visière. Il n'y a pas de plage à quatre cents kilomètres. « À la plage, répète Lumen, avec un temps de retard. » Phébus ne rit pas. Personne ne rit. Il note quelque chose sur une tablette, longuement." },
      "Il soulève la barrière. En passant, Lumen te glisse dans la main une plaquette sur papier glacé, avec un soleil carré sur la couverture. « Lisez, dit-il. C'est l'avenir. » Tu la fourres dans ta cape sans la regarder. Tu as l'habitude des prospectus : tu en emballes le fromage.",
      "À sept heures moins le quart, tu arrives aux grilles du Domaine, tu en fais le tour par le chemin des fournisseurs, et tu entres dans la cour des cuisines, qui sent le linge et le pain d'hier. La porte de service est au fond, en fer peint en vert, toujours la même. Ce qui a changé, c'est ce qu'on a vissé dessus : de ton côté, une petite plaque blanche avec une cellule noire, comme un œil fermé, et un soleil carré.",
      "Tu coupes le moteur. La Baratte tousse deux fois, puis se tait. De l'autre côté de la porte, quelqu'un respire.",
    ],
    choices: [{ label: "Frapper trois coups, comme chaque matin", fx: { flag: "ch1:salee" }, to: "C1" }] },

  // ---------------------------------------------------------------- 2 · back to Mirevaux
  S2_retour: { act: "I", title: "Les barrières", place: "route",
    text: [
      "Tu repars du Domaine à dix heures, le side-car vide, la tête pleine. Dans ta poche, le second talkie-walkie du poste de garde, avec son petit ange doré sur le côté, pèse plus lourd qu'une motte. Le garde te l'a donné en disant *canal 4* et en rougissant jusqu'aux oreilles, ce qui, sur une peau aussi sombre, se voit surtout aux oreilles.",
      { if: { has: "mesure=oui" }, text: "Tu as vu le chiffre du technicien, ce matin, dans la Salle froide. Tu as vu le sourire du gros homme en blanc quand il l'a lu. C'est le sourire de ta mère quand elle trouve une motte oubliée au fond de la cave, encore bonne. Le sourire de quelqu'un qui a déjà décidé quoi en faire." },
      { if: { has: "mesure=non" }, text: "Le gros homme en blanc est reparti sans son chiffre, ce matin. Tu as vu son visage, en remontant dans sa voiture. Ce n'est pas le visage de quelqu'un qui renonce. C'est le visage de quelqu'un qui reviendra par la porte de derrière." },
      "Sur la route, le Consortium ferme les champs. À chaque kilomètre, une barrière blanche, une camionnette, un gyrophare. Des hommes en combinaison blanche cadenassent les portails, tirent les derniers câbles, vérifient les boîtiers. Ils travaillent vite, sans se parler, comme des gens qui ont une heure fixe à respecter et une prime au bout.",
      "Au kilomètre vingt, au bord de la route, il y a la casse des Ferrailleurs : des montagnes de métal rouillé, trois camions, un fourneau de fonte qui fume jour et nuit. Tu passes devant depuis des années sans t'arrêter. Ce matin, un homme du Consortium y est garé, et il parle avec une femme large, lente, couverte de chaînes, un chalumeau à la ceinture. Il lui tend une enveloppe épaisse. Elle compte ce qu'il y a dedans sans l'ouvrir tout à fait, du pouce, comme on compte des cartes.",
    ],
    choices: [
      { label: "Ralentir pour regarder", fx: { flag: "s:camp" }, to: "S2_cremerie" },
      { label: "Accélérer : ce ne sont pas tes affaires", to: "S2_cremerie" },
    ] },
  S2_cremerie: { act: "I", title: "Le compteur de la crèmerie", place: "cremerie",
    text: [
      { if: { has: "s:camp" }, text: "Tu ralentis. La femme aux chaînes lève les yeux vers toi, longuement, sans cesser de compter. Elle a une balafre en travers de la joue et le regard tranquille des gens qui achètent tout au poids. Puis l'homme du Consortium dit quelque chose, et tu entends un seul mot, emporté par le vent : *statue*. Tu remets les gaz." },
      "La crèmerie Salée est au Carrefour de Mirevaux, entre la fontaine et l'Entrepôt Croûte & Chrome, depuis 1899. Une boutique carrelée de blanc, fraîche, avec des mottes sous des cloches de verre et une odeur de sel si ancienne qu'elle est entrée dans les murs. Sur la vitrine, en lettres d'or écaillées : *Crèmerie Salée · Maison fondée par Augustine Salée.*",
      "Ta mère, Honorine, est derrière le comptoir, les manches retroussées, les avant-bras rouges, les cheveux roux et gris noués en chignon serré. Devant elle, un homme du Consortium lui fait signer quelque chose sur une tablette, pendant qu'un second visse dans l'arrière-boutique un compteur blanc frappé d'un soleil carré.",
      "« Abonnement Lumière, dit ta mère sans lever les yeux. Ils disent que c'est obligatoire à partir de midi. Ils disent que le premier mois est offert. » Elle signe, avec le doigt, sur l'écran. Sa signature ressemble à un coup de couteau dans le beurre. « Rien n'est jamais offert. Mais il faut bien de la lumière pour le froid de la cave. »",
      "L'homme du Consortium entoure de rouge, sur le calendrier des livraisons accroché au mur, la case de midi. *Raccordement*, écrit-il dedans, d'une belle écriture ronde. Puis il s'en va.",
    ],
    choices: [
      { label: "Décrocher le calendrier et le garder sur toi", fx: { flag: "s:calendrier" }, to: "S2_fin" },
      { label: "Dire à ta mère ce que tu as vu au Domaine", fx: { flag: "s:raconte" }, to: "S2_fin" },
    ] },
  S2_fin: { act: "I", title: "Onze heures et demie", place: "cremerie",
    text: [
      { if: { has: "s:calendrier" }, text: "Tu décroches le calendrier. Ta mère te regarde faire sans rien demander. Elle a l'habitude : tu décroches des choses depuis l'âge de quatre ans, et tu les raccroches rarement au même endroit. La case de midi est entourée de rouge, et le rouge a bavé un peu, comme si quelqu'un avait appuyé trop fort." },
      { if: { has: "s:raconte" }, text: "Tu racontes le Domaine, la Salle froide, l'ange d'acier, le gros homme en blanc, le chiffre. Ta mère t'écoute en salant une motte. Quand tu as fini, elle sale encore un peu, pour la forme. « Les riches ont leurs anges, dit-elle. Nous, on a le nôtre. » Elle tapote du doigt, deux fois, le petit ange doré sur le papier de la motte. Tu ne sais pas si c'est une prière ou un geste de crémière. Elle non plus, sans doute." },
      "Dehors, au Carrefour, la vie continue, ou fait semblant. Le marché du mardi s'installe autour de la fontaine. Les feux rouges passent au vert et au rouge pour des voitures qui roulent au pas. Sur la façade de l'Entrepôt Croûte & Chrome, l'enseigne dorée, un Enjambeur grand comme un homme, souffle dans sa trompette au-dessus de la porte.",
      "Dans ta poche, le talkie-walkie grésille, puis une voix de garçon, très polie, très sérieuse, dit : « Ici Basile, canal 4. On a reçu une plaquette. »",
      "Toi aussi. Elle est dans ta cape, avec le fromage d'hier.",
    ],
    choices: [{ label: "Déplier la plaquette", fx: { flag: "ch2:salee" }, to: "C2" }] },

  // ---------------------------------------------------------------- 3 · the crèmerie before noon
  S3_cremerie: { act: "II", title: "Le Carrefour", place: "carrefour",
    fx: { meet: ["gaston"] },
    text: [
      "À midi moins le quart, le Carrefour de Mirevaux est plein. C'est jour de marché. Il y a des cageots de tomates, des poules en cage, un rémouleur, un marchand de pneus, des enfants qui courent entre les étals avec l'air de chercher quelque chose qu'ils ne trouveront pas. Au milieu, la fontaine coule. À côté, la vieille bascule du marché, une plate-forme de fonte grande comme une table, attend qu'on y pèse quelque chose ; depuis qu'il y a des balances électroniques, on n'y pèse plus que des enfants, pour rire, le dimanche.",
      "Devant la crèmerie, un garçon de seize ans, maigre, sérieux, coiffé d'un casque de moto trop grand, achète une motte de beurre. C'est Gaston, le fils du quincaillier. Il fait le signe de croix devant les églises, les ambulances, les couchers de soleil, et, tu le vois faire, devant le petit ange doré du papier sulfurisé, avant de glisser la motte dans son sac.",
      "« Pour qu'elle tienne », dit-il, en voyant que tu le regardes. Il a l'air un peu gêné, et pas du tout de rire.",
      { if: COMPRIS, text: "Tu sais ce qui va arriver à midi. Tu l'as lu avec Basile, au talkie. Tu regardes le Carrefour, le marché, les enfants, la fontaine, et tu sens dans ton ventre la même chose que la nuit où ton père est parti : le monde qui continue comme si de rien n'était, une minute de trop." },
      { if: { not: COMPRIS }, text: "Tu ignores ce qui va arriver à midi. Personne ne le sait. Tu regardes le ciel par habitude de motarde, pour voir s'il pleuvra. Il est blanc, sans un nuage, et le soleil a l'air un peu trop gros, comme une motte qu'on aurait laissée trop près du feu." },
      "Dans la crèmerie, ta mère range la cave. Elle descend les mottes du jour une à une, par l'escalier de pierre, parce qu'il fait déjà trop chaud au rez-de-chaussée. La cave est profonde, voûtée, la plus fraîche de la rue. On dit qu'Augustine Salée l'a creusée elle-même, en 1899, avec une pioche et du sel.",
    ],
    choices: [
      { label: "Baisser le rideau de fer de la crèmerie", fx: { set: { s3: "rideau" } }, to: "S3_midi" },
      { label: "Aider ta mère à descendre les mottes à la cave", fx: { set: { s3: "cave" } }, to: "S3_midi" },
    ] },
  S3_midi: { act: "II", title: "Midi moins une", place: "cremerie",
    text: [
      { if: { has: "s3=rideau" }, text: "Tu tires le rideau de fer sur la vitrine. Il descend avec un fracas de tonnerre, et tout le marché se retourne. Ta mère remonte de la cave, furieuse. « À midi moins le quart ? Un jour de marché ? » Tu ne sais pas quoi lui dire. Tu dis : « Fais-moi confiance. » Elle te regarde comme on regarde une motte qui a un drôle de goût, puis elle hausse les épaules et retourne à la cave." },
      { if: { has: "s3=cave" }, text: "Tu descends les mottes avec ta mère, quarante, puis quarante autres. La cave sent la pierre mouillée et le sel. Vous travaillez sans parler, comme toujours. À la dernière motte, ta mère s'arrête sur une marche et te regarde. « Tu as une drôle de tête, ce matin. » Tu dis que c'est le soleil. C'est vrai." },
      "Midi moins une. Au fond de la crèmerie, le compteur blanc du Consortium fait un petit bruit, *clic*, comme une montre qu'on remonte.",
      "Tu regardes les mottes de la vitrine. Sous leurs cloches de verre, elles se couvrent de minuscules perles brillantes, comme le front d'un homme qui ment.",
      "Tu prends le talkie. « Basile, dis-tu. Le beurre transpire. »",
    ],
    choices: [{ label: "Lever les yeux vers le soleil", fx: { flag: "ch3:salee" }, to: "C3" }] },

  // ---------------------------------------------------------------- 4 · ashes
  S4_cendres: { act: "II", title: "Les cendres de Mirevaux", place: "carrefour",
    text: [
      "À cinq heures du soir, Mirevaux fume. Les toits ont pris feu les uns après les autres, à partir de midi, chacun sous son propre panneau, comme des bougies qu'on allume pour un anniversaire très triste. Les rues sont pleines de voitures arrêtées aux feux rouges, sagement, en file, portières ouvertes ; leurs conducteurs sont partis à pied, en laissant les clés. Les feux, eux, fonctionnent encore. Ils passent au vert pour personne.",
      "Au Carrefour, la fontaine coule toujours. C'est la seule chose de la ville qui ne sache rien. Les étals du marché ont brûlé avec leurs tomates. La bascule est intacte, noire de suie. L'horloge de la banque, au coin de la rue des Notaires, s'est arrêtée sur midi, et ses aiguilles ont fondu l'une sur l'autre, en croix.",
      "L'Entrepôt Croûte & Chrome a perdu sa verrière. Trois étages de verre ont éclaté d'un coup, à midi deux, et sont tombés en pluie dans la rue. L'enseigne dorée s'est décrochée ; l'ange de la façade gît sur le trottoir, sur le dos, la trompette tordue, comme un oiseau tombé du nid. Mais les caves de l'Entrepôt sont profondes, et par les soupiraux sort encore un souffle tiède qui sent la crème : des tonnes de beurre, là-dessous, qui ont tenu à moitié.",
      { if: { has: "honorine=sauvee" }, text: "Ta mère est assise sur le rebord de la fontaine, un linge mouillé sur la nuque. Elle regarde la crèmerie, ou ce qu'il en reste : les murs, le carrelage noirci, la cave qui a tenu. Elle tient sur ses genoux le livre de comptes de la maison, sauvé, et elle le feuillette comme on caresse un chat." },
      { if: { has: "honorine=blessee" }, text: "Ta mère est assise sur le rebord de la fontaine, les deux mains bandées dans des torchons mouillés. Elle s'est brûlée en remontant de la cave par l'escalier plein de beurre. Elle ne se plaint pas. Elle dit que c'est le métier qui rentre. Elle te regarde comme si tu étais la seule chose de la ville qui avait tenu." },
      "Ton talkie grésille. Basile, au Domaine. Les gardes sont partis. Il est seul dans la Salle froide, avec l'ange d'acier, et de sa fenêtre il voit déjà des phares sur la route.",
    ],
    choices: [{ label: "Écouter les moteurs qui arrivent au Carrefour", to: "S4_ripaille" }] },
  S4_ripaille: { act: "II", title: "Ripaille", place: "carrefour",
    fx: { meet: ["ripaille"], clue: "c_ferrailleurs" },
    text: [
      "Ils arrivent par la route du Domaine, trois camions et une vingtaine de motos, en file, phares allumés, et ils se garent autour de la fontaine sans couper les moteurs. Ce sont les Ferrailleurs. Ils portent des blousons cloutés de capsules de bière, des chaînes, des lunettes de soudeur, et ils achètent tout ce qui est en métal, au poids, pour le fondre.",
      "La femme aux chaînes descend du premier camion. C'est elle que tu as vue ce matin, au camp, compter l'enveloppe du Consortium. Elle s'appelle Ripaille. Elle grimpe sur le rebord de la fontaine, lentement, et elle parle aux gens de Mirevaux d'une voix tranquille, sans crier, comme une marchande de quatre-saisons.",
      "« J'achète le métal. Les grilles, les gouttières, les casseroles, les vélos fondus. Je paie en billets neufs. » Elle en montre une liasse. Les billets sont frappés d'un soleil carré. « Ce soir, on va au Domaine. Il n'y a plus de gardes, plus de grilles, plus de lumière. Il y a des tonnes de métal. Ceux qui veulent venir viennent. »",
      "Elle descend du rebord, passe près de toi, s'arrête. Elle te regarde, puis la Baratte, puis le second talkie qui dépasse de ta poche, avec son petit ange doré.",
      "« Toi, tu es la livreuse, dit-elle. Tu connais le chemin des fournisseurs. » Elle baisse la voix. « Le métal, on le fond. Sauf la statue. La statue, on la livre entière. C'est payé d'avance. »",
    ],
    choices: [
      { label: "« Je viens. »", monde: "convoi", option: "rejoindre", hide: { has: "s4=seule" }, fx: { set: { s4: "convoi" } }, to: "S4_fin" },
      { label: "« Non. » Et les suivre de loin, seule, sur la Baratte", monde: "convoi", option: "suivre", hide: { has: "s4=convoi" }, fx: { set: { s4: "seule" } }, to: "S4_fin" },
    ] },
  S4_fin: { act: "II", title: "La file des phares", place: "route",
    text: [
      { if: { has: "s4=convoi" }, text: "Tu viens. Ripaille hoche la tête, une fois, comme on conclut une affaire au marché. Tu prends ta place dans la file, entre deux motos qui sentent l'huile brûlée. Ta mère te regarde partir depuis la fontaine. Elle lève la main, deux doigts tendus, et fait dans l'air, vers toi, un petit geste que tu ne lui connais pas : comme on étale du beurre sur une tartine. C'est peut-être une bénédiction. C'est peut-être un conseil." },
      { if: { has: "s4=seule" }, text: "Tu dis non. Ripaille hausse les épaules, sans colère. « Comme tu veux. » Les camions partent. Tu attends qu'ils soient loin, puis tu enfourches la Baratte et tu les suis, tous feux éteints, à la lueur de la ville qui brûle. Ta mère te regarde partir depuis la fontaine. Elle lève la main, deux doigts tendus, et fait dans l'air, vers toi, un petit geste que tu ne lui connais pas : comme on étale du beurre sur une tartine." },
      "Tu appelles Basile au talkie. Tu lui dis où tu es. Tu lui dis avec qui. Il met longtemps à répondre. Quand il répond, il dit seulement : « Je t'attends à la porte verte. » Puis, après un silence : « Article 88. » Tu ignores ce que c'est. Tu sens que c'est important.",
      "La route du Domaine, la nuit, entre les champs de panneaux. Ils dorment de nouveau, tête basse, comme ce matin. Ils ont l'air innocents. Ils ont l'air de ne se souvenir de rien.",
    ],
    choices: [{ label: "Rouler vers le camp des Ferrailleurs", fx: { flag: "ch4:salee" }, to: "C4" }] },

  // ---------------------------------------------------------------- 5 · the bikers
  S5_aube: { act: "III", title: "Les motards", place: "carrefour",
    text: [
      "Ils arrivent avec le jour. D'abord une moto, puis trois, puis vingt : les Ferrailleurs qui reviennent du Domaine, les camions vides ou à moitié pleins, et d'autres, beaucoup d'autres, des motards de la route que l'Effondrement a jetés hors des villes, sans maison, sans lumière, sans rien d'autre que leur machine et le plein qui reste. Ils viennent au Carrefour parce que la fontaine coule. Ils coupent leurs moteurs.",
      "Ils voient l'ange.",
      "Il se tient sur la bascule du marché, doré, de travers, la trompette aux lèvres, un pied levé au-dessus de la ville brûlée. Il est le seul objet frais du pays. Il sent la crème. Le premier soleil le fait luire doucement, sans éclat, comme une joue.",
      "Un grand motard barbu descend de sa machine. Il s'approche. Il ôte son casque. Il reste longtemps devant l'ange, muet. Puis il pose un genou à terre, sur le pavé couvert de suie. Derrière lui, un autre. Puis un autre. Le jeune Gaston, avec son casque trop grand, se signe et s'agenouille le premier rang, les yeux brillants. Ripaille, la dernière, reste debout, les bras croisés, avec ses chaînes ; puis elle décroise les bras.",
      "Tu es debout près de la fontaine, les mains brûlées, dans ta cape de cuir. Personne ne te regarde. Tout le monde regarde l'ange.",
    ],
    choices: [
      { label: "Te mettre à genoux avec eux, sans rien dire", monde: "aube", option: "genoux", hide: { has: "salee=mere" }, fx: { set: { salee: "genoux" }, ferveur: 1 }, to: "S5_fin" },
      { label: "Aller saler le beurre qui reste dans la cave de ta mère", monde: "aube", option: "mere", hide: { has: "salee=genoux" }, fx: { set: { salee: "mere" } }, to: "S5_fin" },
    ] },
  S5_fin: { act: "III", title: "Ce que Salée ne dit pas", place: "carrefour",
    text: [
      { if: { has: "salee=genoux" }, text: "Tu t'agenouilles. Le pavé est chaud. À côté de toi, le grand motard barbu murmure quelque chose qui ressemble à une prière et qui est peut-être une liste de courses. Tu lèves les yeux vers l'ange que tu as fait de tes mains, cette nuit, avec un garçon qui ne parle plus. Tu ne dis rien. Tu sens que tu ne diras rien, ni aujourd'hui, ni demain, ni dans trente ans. C'est plus simple de les laisser prier. C'est peut-être même plus vrai." },
      { if: { has: "salee=mere" }, text: "Tu tournes le dos à l'ange et tu descends à la cave de la crèmerie. Il y reste quarante mottes, molles, sauvées. Tu les sales. Tu les sales beaucoup, plus que ta mère ne l'a jamais fait, une poignée, puis une autre, parce que tu as lu quelque part, ou rêvé, que le sel fait tenir le beurre au chaud. Quand tu remontes, les motards sont toujours à genoux. L'un d'eux te demande si tu vends du beurre. Tu dis oui. Tu dis : du demi-sel. Le mot lui plaît. Il le répète aux autres." },
      "Le soleil monte. Sur le pavé, devant la bascule, la première goutte de beurre tombe de la trompette de l'ange, toute petite, dorée, et s'écrase sans bruit.",
      "Quelqu'un, dans la foule, la recueille sur le bout du doigt.",
    ],
    choices: [{ label: "Regarder le soleil toucher la trompette", fx: { flag: "ch5:salee" }, to: "C5" }] },
};
