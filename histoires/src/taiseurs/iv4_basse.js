// Lot iv4_basse of "Le Trésor des Taiseurs": preparing the Great Ebb (end of act IV): the tide table, a boat, a crew,
// the Taiseurs, the Register read, the last stand against the provost, Corisande and Lothaire, the farewells and the
// last meal, three side quests (the pilot's son, the Fourcaud granary, the song of the Drowned), the night sailing.
var P = {};

// ==================================================================== the preparations (hub) and the council
Object.assign(P, {
  IVM_preparatifs: { act: "IV", title: "Trois jours avant la Grande Basse", place: "salveze", hub: true, backName: "la salle des préparatifs",
    text: [
      { first: true, text: "Tu étales les feuillets sur la table de la salle basse, côte à côte, dans l'ordre des caches. Le dernier, celui de la Banque, sent encore la pierre mouillée de la crypte. Mis bout à bout, les bords déchirés se répondent, et la phrase qui court de l'un à l'autre finit sur un nom que tout le monde connaît à Salvèze et que personne ne prononce : *Sorne*. Plus bas, d'une main plus serrée : *à la plus basse eau de l'an, quand le jour et la nuit pèsent le même poids*." },
      { first: true, text: "L'almanach du Conseil, cloué au mur de la taverne d'en face, donne la date : l'équinoxe tombe dans trois jours. Trois jours pour trouver comment on va en mer à l'heure où la mer s'en va, avec quoi, avec qui. La ville, dehors, a faim et couvre-feu. Les cloches du Beffroi sonnent la fermeture des ponts à la tombée du jour, et des patrouilles passent sous la fenêtre, hallebardes droites." },
      { first: true, text: "Il te faut la table des marées de la reine, celle qui disait l'heure exacte de la Grande Basse au-dessus de Sorne. Il te faut un bateau, un équipage, et l'accord de ceux qui gardent la porte depuis trois siècles. Le reste, tu l'apprendras en route." },
      { again: true, when: "day", text: "La salle basse, ses volets mi-clos, les feuillets sous un linge. Sur le mur, une craie tient les comptes : ce que tu as, ce qui manque. Dehors, une charrette de soldats passe vers le pont des Changeurs." },
      { again: true, when: "night", text: "La salle basse à la chandelle. Le couvre-feu a vidé la rue ; tu entends l'eau du canal contre les marches et, très loin, un chien. Les feuillets dorment sous leur linge." },
      { first: true, if: { has: "feuillet:repris" }, text: "Le feuillet repris dans le cabinet de Lothaire Brunel porte encore, épinglée au coin, une petite étiquette à l'encre violette, avec une date et un lieu. Tu la décroches et tu la jettes au feu." },
      { after: "ivb:cs_laisse", once: true, text: "Au matin du premier jour, un valet en livrée noire laisse à ta porte un billet sans cachet, d'une petite écriture droite. Un seul mot : *Bérold.* Et deux initiales : *C. M.*" },
      { after: "ivm:cotre_vole", text: "Sur la porte du Beffroi, une feuille neuve promet vingt ducats à qui rendra *La Vigilante*, le cotre du Guet. On y décrit une voile rouge." },
      { after: "ivm:prevot_laisse", before: "prevot:dejoue", when: "night", text: "Au nord, par la fenêtre, les feux de la route d'Aveline brillent un peu plus près que la veille." },
      { after: "ivm:carte_fausse", with: "salome", text: "La carte des Halles est clouée au mur, à côté des comptes. Salomé l'a regardée une fois, de près. « Les fonds y sont dessinés comme un jardin de curé », a-t-elle dit, et elle ne l'a plus regardée." },
      { after: "ivm:table", text: "Sur la table, l'astrolabe de marée tient les feuillets à plat de son poids de bronze." },
      { before: "ivm:table", text: "Sur le mur, à la craie : *la table de la reine ?* souligné deux fois." },
      { after: "basse:bateau", text: "Au port aux Sauniers, ton bateau attend, gréé, la cale vide, prêt pour la nuit." },
      { after: "basse:equipage", text: "L'équipage sait l'heure et le quai. Tu as entendu, dans la rue, une chanson de marins qui finit sur le nom de Sorne, et tu as souhaité qu'elle se taise." },
      { with: "lison", text: "Lison, assise sur le rebord de la fenêtre, une jambe dehors, surveille la rue et pèle une pomme ridée avec son couteau de batelière." },
      { with: "fauvette", text: "Fauvette dort à moitié sur le banc, la tête sur sa veste roulée, et ouvre un œil chaque fois qu'un pas résonne sur le pavé." },
      { without: "any", text: "Tu es seul{e} dans la salle. Tu t'entends respirer." },
    ],
    choices: [
      { label: "Réunir ceux qui sont là autour des feuillets", with: "any", hide: { seen: "IVM_conseil" }, to: "IVM_conseil" },
      { label: "Chercher la table des marées de la reine", hide: { item: "ivm_astrolabe" }, to: "IVM_table" },
      { label: "Trouver un bateau pour la nuit de la Grande Basse", hide: { has: "basse:bateau" }, to: "IVM_bateau" },
      { label: "Lever un équipage", hide: { all: [{ has: "ivm:eq_ecumeurs" }, { has: "ivm:eq_quai" }, { has: "ivm:eq_gouttieres" }] }, to: "IVM_equipage" },
      { label: "Faire venir les Taiseurs", hide: { any: [{ has: "basse:taiseurs" }, { has: "ivm:taiseurs_non" }] }, to: "IVM_taiseurs" },
      { label: "Faire lire le Registre de la Muette", hide: { has: "registre:lu" }, to: "IVM_registre" },
      { label: "Le prévôt, et la nuit qu'il prépare", hide: { any: [{ seen: "IVM_prevot" }, { has: "prevot:dejoue" }] }, to: "IVM_prevot" },
      { label: "Le prévôt, sous bonne garde", hide: { any: [{ seen: "IVM_prevot_deja" }, { seen: "IVM_prevot" }, { not: { has: "prevot:dejoue" } }] }, to: "IVM_prevot_deja" },
      { label: "Tenter encore quelque chose contre le prévôt", hide: { any: [{ has: "prevot:dejoue" }, { has: "ivm:prevot_tente" }, { not: { seen: "IVM_prevot" } }] }, to: "IVM_prevot_plan" },
      { label: "Répondre au billet de Corisande Marrel", hide: { any: [{ not: { has: "corisande:pacte" } }, { seen: "IVM_corisande" }] }, to: "IVM_corisande" },
      { label: "Aller voir Lothaire Brunel une dernière fois", hide: { any: [{ has: "lothaire:mort" }, { seen: "IVM_lothaire_allie" }, { seen: "IVM_lothaire_cachot" }, { seen: "IVM_lothaire_rival" }] }, to: "IVM_lothaire" },
      { label: "Un moment seul avec Lison", hide: { seen: "IVM_lison" }, with: "lison", to: "IVM_lison" },
      { label: "Accompagner Tibère chez sa fille", hide: { seen: "IVM_tibere" }, with: "tibere", to: "IVM_tibere" },
      { label: "Passer chez Rosalie Gaucelm, la fille de Tibère", hide: { any: [{ seen: "IVM_tibere" }, { seen: "IVM_rosalie_seul" }, { present: "tibere" }] }, to: "IVM_rosalie_seul" },
      { label: "Descendre au port avec Salomé", hide: { seen: "IVM_salome" }, with: "salome", to: "IVM_salome" },
      { label: "Monter sur les toits avec Fauvette", hide: { seen: "IVM_fauvette" }, with: "fauvette", to: "IVM_fauvette" },
      { label: "Parler à Frère Gildas", hide: { seen: "IVM_gildas" }, with: "gildas", to: "IVM_gildas" },
      { label: "Aller au cimetière des Noyés", hide: { any: [{ seen: "IVM_gildas_tombe" }, { not: { has: "gildas:mort" } }] }, to: "IVM_gildas_tombe" },
      { label: "Lire le billet qu'un frère convers a laissé pour toi", hide: { any: [{ seen: "IVM_gildas_lettre" }, { has: "gildas:mort" }, { present: "gildas" }, { not: { has: "gildas:rencontre" } }] }, to: "IVM_gildas_lettre" },
      { label: "Le vieux pilote et son fils", hide: { any: [{ has: "ivm:pilote" }, { not: { seen: "IVM_pilote" } }, { seen: "IVM_q_pilote" }] }, to: "IVM_q_pilote" },
      { label: "La rumeur du grain caché", hide: { seen: "IVM_q_grenier" }, to: "IVM_q_grenier" },
      { label: "La chanteuse aveugle du pont des Lanternes", hide: { seen: "IVM_q_chanson" }, to: "IVM_q_chanson" },
      { label: "Le dernier repas, la veille de la Grande Basse", if: { all: [{ has: "ivm:table" }, { has: "basse:bateau" }] }, why: "Il te faut d'abord la table des marées et un bateau.", hide: { seen: "IVM_repas" }, to: "IVM_repas" },
      { label: "Appareiller pour Sorne, à la nuit", big: true, if: { all: [{ has: "ivm:table" }, { has: "basse:bateau" }] }, why: "Sans la table des marées et sans bateau, la Grande Basse passera sans toi.", to: "IVM_fin" },
      { back: "IV_hub" },
    ] },

  IVM_conseil: { act: "IV", title: "Autour des feuillets", place: "salveze", with: "any",
    text: [
      "Tu tires les chaises, tu poses la chandelle au milieu, et tu racontes ce que disent les feuillets mis bout à bout. On t'écoute jusqu'au bout. À la fin, il y a un silence où l'on entend la mèche grésiller.",
      { with: "salome", text: "« Sorne, dit Salomé Brac. Mon grand-père disait que les filets s'y prennent dans des cheminées. J'ai toujours cru qu'il buvait. » Elle frotte la table du plat de la main, comme pour en chasser du sel. « {{oreille#ivm_salome_sorne|Une nuit de basse eau, j'en suis capable|Une nuit de basse eau au-dessus d'une ville noyée, avec des gens qui plongeront peut-être, et moi sur le pont à les compter}}. »" },
      { with: "lison", text: "« Ma grand-mère connaît le chemin, dit Lison. Elle ne l'a jamais fait. Le dernier qui l'a fait est mort il y a trois cents ans. » Elle coupe un quartier de pomme et le mange sur la lame. « {{oreille#ivm_lison_porte|Elle te donnera ce qu'il faut pour la porte, si on le lui demande bien|Elle donnera la parole de la porte à celui qui l'aura méritée, et elle a déjà choisi qui}}. »" },
      { with: "tibere", text: "Tibère se gratte la moustache. « Un bateau, ça se trouve. Des bras aussi, avec la faim qu'il y a. Ce qui ne se trouve pas, c'est quelqu'un qui tienne sa langue trois jours dans cette ville. » Il regarde ses mains. « {{oreille|Moi, je sais me taire, j'ai appris au Guet|Moi, j'ai parlé pendant des mois pour cinq ducats la semaine, et je le sais mieux que personne}}. »" },
      { with: "fauvette", text: "Fauvette a ramené ses genoux sous son menton. « Les Gouttières, je m'en charge, si vous avez de quoi les payer. La Reine ne prête jamais rien. Elle loue. »" },
      { with: "gildas", text: "Frère Gildas suit du doigt le bord déchiré du feuillet de la Banque, sans le toucher. « La Charte attend dans la salle de la reine. Les Taiseurs ont fermé Sorne avec une parole, et seule une parole l'ouvre. Il faudra la demander à ceux qui la gardent. » Il retire sa main." },
      { if: { has: "ivb:faux_actes" }, text: "À côté des feuillets, tu poses la liasse prise dans le coffre Marrel, nouée de son ruban noir. Les titres de la moitié du delta tiennent dans une main. Personne n'y touche." },
      "Tu inscris à la craie, sur le mur, ce qu'il faut : la table de la reine, un bateau, des bras, la parole. Puis, au-dessous, plus petit, ce qui reste en travers : le prévôt, la Banque, Lothaire Brunel.",
      { after: "voile:ivm_lison_porte", with: "lison", text: "Tu regardes Lison. Elle regarde la rue." },
    ],
    choices: [{ back: "IVM_preparatifs" }] },
});

// ==================================================================== the queen's tide table
Object.assign(P, {
  IVM_table: { act: "IV", title: "L'heure de la basse eau", place: "salveze",
    text: [
      "L'almanach donne le jour. L'heure, il la tait, et à Sorne l'heure est tout : la ville noyée se découvre six heures en tout, et la mer y revient en courant. Les tables des pilotes de Salvèze sont faites pour l'embouchure de la Salve ; au large, sur les hauts-fonds où Sorne repose, la marée tourne autrement.",
      "La reine avait sa table à elle. On en parle dans les vieux livres de bord : un astrolabe de marée, un disque de bronze à anneaux qu'on tournait sur la lune et sur le saint du jour, et qui disait l'heure de la plus basse eau au-dessus de la capitale. Deux pistes, dans la ville : l'inventaire des Archives de la République, où l'on a rangé ce qui restait du palais après la nuit des Comptoirs ; et un vieux pilote du port aux Sauniers, Gwenaël Lannec, dont les gens du quai disent qu'il a vu Sorne de ses yeux, une fois, enfant.",
      { with: "salome", text: "« J'ai mes livres de bord, dit Salomé. Trente ans de marées, de Port-Vasier aux Écueils. Avec ça et l'almanach, je te donne une heure à une heure près. » Elle hausse une épaule. « Une heure près, à Sorne, c'est une noyade ou une nuit perdue. »" },
      { if: { has: "metier:lire" }, text: "Tu as passé assez de soirées dans les registres pour savoir comment travaille un archiviste : ce qu'on cherche est toujours inscrit quelque part, sous un autre nom." },
    ],
    choices: [
      { label: "Les Archives de la République, sur l'île des Changeurs", hide: { seen: "IVM_archives" }, to: "IVM_archives" },
      { label: "Le vieux pilote, au port aux Sauniers", hide: { seen: "IVM_pilote" }, to: "IVM_pilote" },
      { label: "Faire confiance aux livres de bord de Salomé", who: "salome", hide: { any: [{ seen: "IVM_salome_calcul" }, { item: "ivm_astrolabe" }] }, to: "IVM_salome_calcul" },
      { label: "Un marchand des Halles vend, paraît-il, « la carte de Sorne »", hide: { seen: "IVM_halles_carte" }, to: "IVM_halles_carte" },
      { back: "IVM_preparatifs" },
    ] },

  IVM_archives: { act: "IV", title: "Les Archives de la République", place: "salveze", backName: "les Archives",
    text: [
      { first: true, text: "Les Archives occupent l'aile nord de la Monnaie, derrière une porte basse cloutée de bronze. Le couvre-feu a mis deux gardes devant ; ils te regardent passer avec l'ennui des hommes qu'on paie en retard. Dedans, l'odeur est celle du papier qui a eu froid pendant trois siècles : colle, cuir, poussière, et une pointe de souris." },
      { first: true, text: "Le maître des Archives, Eustache Vauquelin, est un homme long et voûté, en robe de serge noire élimée aux coudes, avec des lunettes qu'il porte sur le front et oublie là. Il te reçoit debout derrière son pupitre, la plume à la main, l'air d'un homme qu'on dérange au milieu d'une phrase depuis quarante ans." },
      { again: true, text: "Les Archives, leurs rayonnages qui montent dans l'ombre, la lampe de Vauquelin au fond. La plume gratte toujours." },
      { again: true, if: { has: "ivm:vauq_froid" }, text: "Vauquelin ne lève plus les yeux quand tu entres. Il tourne une page de plus, et sa plume gratte plus fort." },
      { first: true, text: "Au-dessus du pupitre, une plaque de cuivre : *{{loupe#ivm_plaque|Inventaire des biens de la Couronne, remis à la République l'an premier|Inventaire des biens de la Couronne, moins ce que les Marrel et les Delisle ont pris la nuit même, l'an premier}}*." },
    ],
    choices: [
      { label: "Parler au maître des Archives", hide: { seen: "IVM_vauquelin" }, to: "IVM_vauquelin" },
      { label: "Demander à voir le cabinet des instruments de la Couronne", if: { seen: "IVM_vauquelin" }, why: "Vauquelin garde les clés : il faut d'abord lui parler.", hide: { any: [{ seen: "IVM_archives_salle" }, { item: "ivm_astrolabe" }] }, to: "IVM_archives_salle" },
      { label: "Entrer de nuit, par les toits de la Monnaie", hide: { any: [{ seen: "IVM_archives_nuit" }, { item: "ivm_astrolabe" }, { not: { seen: "IVM_vauquelin" } }] }, to: "IVM_archives_nuit" },
      { back: "IVM_table" },
    ] },

  IVM_vauquelin: { act: "IV", title: "Maître Vauquelin", place: "salveze",
    text: [
      "« Un astrolabe de marée, répète Vauquelin. Pièce quatre cent douze de l'inventaire. Bronze, trois anneaux, une alidade cassée. » Il n'a pas besoin de chercher ; il récite. « Il est au cabinet des instruments, sous scellés. Le prévôt a fait mettre sous scellés tout ce qui touche à la Couronne, il y a un mois. » Il baisse sa plume. « {{oreille#ivm_vauq_scelles|Une mesure de prudence, en ces temps troublés|Un mois, jour pour jour après la venue de l'envoyé d'Aveline, et j'ai recopié l'ordre de ma main}}. »",
      "Il t'examine par-dessus le pupitre. « Vous n'êtes pas le premier à me le demander. Un homme aux gants gris est venu l'automne dernier. Je lui ai dit ce que je vous dis : sous scellés. » Il pose la plume. « {{oreille#ivm_vauq_prix|Je ne fais pas commerce de ce que je garde|Il m'a offert cent ducats, et j'ai dit non parce qu'il avait l'air de savoir ce que valait la pièce mieux que moi}}. »",
      { if: { has: "registre:lu" }, text: "« On raconte, dit-il plus bas, que vous auriez lu quelque chose. Un témoignage. » Ses lunettes descendent sur son nez sans qu'il les touche. « J'ai passé ma vie à garder des papiers que la poussière est seule à lire. »", else: "« On raconte, dit-il plus bas, que vous portez des feuillets très anciens. » Ses lunettes descendent sur son nez. « J'ai passé ma vie à garder des papiers que la poussière est seule à lire. Je donnerais beaucoup pour en lire un que tout le monde craint. »" },
      { with: "gildas", text: "Frère Gildas incline la tête devant le vieil homme, à la façon des copistes entre eux. Vauquelin lui rend le salut, surpris, et se tient un peu plus droit." },
    ],
    fx: { meet: "ivm_vauquelin" },
    choices: [
      { label: "« Le prévôt vend la ville. Ces scellés servent le duc. »", if: { any: [{ has: "prevot:demasque" }, { voile: "ivm_vauq_scelles" }] }, why: "Il te faudrait de quoi l'affirmer.", hide: { seen: "IVM_archives_salle" }, fx: { flag: "ivm:vauq_allie", fac: { conseil: -3 } }, to: "IVM_archives_salle" },
      { label: "« Lothaire Brunel reviendra, et il ne vous offrira plus cent ducats. »", hide: { not: { voile: "ivm_vauq_prix" } }, fx: { flag: "ivm:vauq_allie" }, to: "IVM_archives_salle" },
      { label: "Lui promettre une lecture des feuillets (Savoir)", test: { dom: "savoir", diff: -10, label: "Convaincre un érudit", help: [{ with: "gildas", v: 10 }, { if: { has: "metier:lire" }, v: 10 }] },
        win: { fx: { flag: "ivm:vauq_allie" }, to: "IVM_archives_salle" }, lose: { fx: { flag: "ivm:vauq_froid" }, to: "IVM_archives" } },
      { label: "Lui glisser une bourse (10 ducats)", fx: { gold: -200, flag: "ivm:vauq_allie" }, to: "IVM_archives_salle" },
      { back: "IVM_archives" },
    ] },

  IVM_archives_salle: { act: "IV", title: "Le cabinet des instruments", place: "salveze",
    text: [
      "Le cabinet est une pièce ronde au bout d'un couloir, sans fenêtre, tapissée d'armoires vitrées. Vauquelin ouvre la porte avec une clé qu'il porte au cou, et allume deux lampes. Derrière les vitres : des sphères armillaires, des sabliers, une horloge à poids démontée, des compas de mer rouillés, et sur un coussin de velours râpé, un disque de bronze gros comme une assiette, avec trois anneaux qui tournent l'un dans l'autre.",
      "Une bande de papier, cachetée de cire rouge au sceau du prévôt, barre la vitrine. Vauquelin la regarde comme on regarde un chien qui ne vous connaît pas. « Si je romps ça, dit-il, on le saura demain. »",
      "Sur l'étiquette de l'astrolabe, d'une écriture de clerc : *{{loupe#ivm_etiquette|Astrolabe de marée, usage inconnu, sans valeur marchande|Astrolabe de marée de la reine, réglé sur Sorne ; l'anneau du milieu cache la clé de lecture}}*.",
      "Dans la vitrine d'à côté, une petite bourse de cuir racorni est posée sur une pile de jetons de compte. Elle {{pie#ivm_bourse|contient des jetons de cuivre sans valeur, rangés là par erreur|contient, sous les jetons de cuivre, une pièce d'or à l'effigie d'une reine qui a la bouche ouverte}}.",
    ],
    choices: [
      { label: "Rompre le scellé et prendre l'astrolabe, avec l'accord du vieil homme", if: { has: "ivm:vauq_allie" }, why: "Vauquelin ne te le laissera pas sans une raison.", fx: { flag: "ivm:scelle_rompu", item: "ivm_astrolabe", ep: ["perso", 400] }, to: "IVM_astrolabe" },
      { label: "Défaire le scellé sans le briser, à la lame chaude (Discrétion)", test: { dom: "discretion", diff: -20, label: "Un scellé décollé", help: [{ with: "fauvette", v: 15 }, { if: { item: "crochets" }, v: 10 }, { if: { has: "metier:mains" }, v: 10 }] },
        win: { fx: { item: "ivm_astrolabe", flag: "ivm:scelle_propre", ep: ["perso", 500] }, to: "IVM_astrolabe" }, lose: { fx: { flag: "ivm:scelle_rompu", item: "ivm_astrolabe" }, to: "IVM_astrolabe" } },
      { label: "Montrer à Vauquelin ce qu'il y a sous les jetons", hide: { any: [{ not: { voile: "ivm_bourse" } }, { has: "tresor:ivm_ducat" }] }, to: "IVM_ducat" },
      { back: "IVM_archives" },
    ] },

  IVM_ducat: { act: "IV", title: "Le ducat à la bouche ouverte", place: "salveze",
    text: [
      "Vauquelin vide la bourse sur le drap vert de la vitrine. Les jetons de cuivre roulent ; au fond, une pièce d'or épaisse, frappée gauchement, tombe à plat. La reine y est de profil, couronnée de sel, la bouche entrouverte comme pour parler. Au revers, une ligne de lettres serrées.",
      "« Les ducats d'Ysaure ont été fondus l'année de sa chute, dit-il. Tous. C'était dans l'ordre du Conseil. » Il tourne la pièce sous la lampe. « {{oreille#ivm_vauq_ducat|Celui-ci a échappé au creuset par négligence|Celui-ci, un archiviste l'a caché là, sous les jetons, et c'était peut-être mon prédécesseur, et je l'aurais fait aussi}}. » Il te la tend. « Prenez-la. Ici, quelqu'un finirait par la fondre. »",
      "Au revers, sous la loupe, les lettres disent : *{{loupe|À Sorne, la reine paie ses dettes|Qui rend la parole à la reine n'aura jamais faim}}*.",
    ],
    fx: { item: "ivm_tr_ducat", clock: { tresors: 1 }, flag: "tresor:ivm_ducat", ep: ["perso", 300] },
    choices: [{ back: "IVM_archives_salle" }] },

  IVM_archives_nuit: { act: "IV", title: "Les toits de la Monnaie", place: "salveze", takes: "night",
    text: [
      "La Monnaie a des toits de plomb, plats et luisants de pluie, et des cheminées qui soufflent toute la nuit la chaleur des fourneaux. Tu passes de l'un à l'autre en suivant les gouttières ; en bas, la patrouille du pont relève la garde avec des jurons et un brasero.",
      "La lucarne des Archives est fermée d'une barre intérieure. Le plomb, autour, {{pie#ivm_plomb|est neuf et soudé au fer|a été soudé de travers, et un coin entier se soulève avec un doigt}}.",
      { with: "fauvette", text: "Fauvette passe devant toi sans rien demander, à plat ventre sur le plomb, et colle l'oreille à la vitre. « Personne. Le vieux dort dans sa chambre, au fond, il ronfle comme un soufflet. »" },
      { with: "lison", text: "Lison reste sur le faîtage, accroupie, à guetter le pont. Elle siffle une fois, bas : la patrouille regarde ailleurs." },
    ],
    choices: [
      { label: "Soulever le plomb tordu", hide: { not: { voile: "ivm_plomb" } }, to: "IVM_archives_salle_nuit" },
      { label: "Forcer la lucarne (Discrétion)", test: { dom: "discretion", diff: -20, label: "Une lucarne de nuit", help: [{ with: "fauvette", v: 20 }, { with: "lison", v: 10 }, { if: { item: "crochets" }, v: 10 }] },
        win: { to: "IVM_archives_salle_nuit" }, lose: { to: "IVM_archives_pris" } },
      { label: "Laisser Fauvette ouvrir", who: "fauvette", to: "IVM_archives_salle_nuit" },
      { label: "Redescendre : ce sera par le pilote", back: "IVM_table" },
    ] },

  IVM_archives_salle_nuit: { act: "IV", title: "Le cabinet, la nuit", place: "salveze",
    text: [
      "Le couloir sent la cire froide. Tu trouves le cabinet rond au bout, et sa porte, fermée d'une serrure plus vieille que la République, cède au deuxième crochet. La lanterne sourde ne montre qu'un rond de lumière : une sphère, un sablier, puis le disque de bronze sur son coussin de velours, avec la bande de papier rouge du prévôt.",
      "Tu glisses la lame sous la cire, tu la chauffes à la flamme, tu soulèves. Le scellé vient d'une pièce. Tu le reposes après, sur la vitrine refermée, tenu par la cire tiède. Demain, Vauquelin trouvera une vitrine vide et un scellé intact, et il se taira, ou il criera : tu l'ignoreras toujours.",
      { with: "fauvette", text: "Fauvette, en passant, a fait disparaître une bourse de jetons dans sa manche. Tu la lui reprends. Elle hausse les épaules. « C'est du cuivre. »" },
    ],
    fx: { item: "ivm_astrolabe", flag: "ivm:scelle_propre", ep: ["perso", 500] },
    choices: [{ label: "Examiner l'astrolabe à la lanterne", to: "IVM_astrolabe" }] },

  IVM_archives_pris: { act: "IV", title: "La patrouille du pont", place: "salveze",
    text: [
      "Le plomb gémit sous ton genou ; une ardoise glisse, tombe, éclate sur le pavé. En bas, la patrouille lève ses lanternes. « Là-haut ! » Quatre gardes du Guet, et un sergent qui siffle pour en appeler d'autres.",
      "Tu as le temps de rouler derrière une cheminée. La chaleur des fourneaux te brûle le dos à travers ta veste. Ils montent par l'échelle des ramoneurs, un par un ; le premier a déjà la tête au bord du toit.",
      { if: { has: "mandat:leve" }, text: "Le mandat est levé. Ils ne le savent peut-être pas encore, ou ils s'en moquent : un voleur sur les toits de la Monnaie reste un voleur.", else: "Ton visage est encore cloué sur les portes du Beffroi, à côté du mot *assassin*. Si on te prend ce soir, ce sera pour la corde." },
    ],
    choices: [
      { label: "Les recevoir au bord du toit", fight: { title: "Sur les toits de la Monnaie", enemies: [{ id: "ivm_garde", n: 2 }],
        win: { fx: { ep: ["perso", 400] }, to: "IVM_archives_salle_nuit" }, lose: { fx: { pv: -6, gold: -100 }, to: "IVM_archives_rachat" },
        flee: { label: "Sauter sur le toit voisin", dom: "discretion", diff: -10, to: "IVM_table" } } },
      { label: "« Sergent, combien vous paie le prévôt ce mois-ci ? » (Social)", test: { dom: "social", diff: -20, label: "Acheter un sergent mal payé", help: [{ with: "tibere", v: 20 }, { if: { gold: { min: 100 } }, v: 10 }] },
        win: { fx: { gold: -60 }, to: "IVM_archives_salle_nuit" }, lose: { fx: { pv: -4 }, to: "IVM_archives_rachat" } },
      { label: "Laisser Tibère parler au sergent", who: "tibere", to: "IVM_archives_salle_nuit", fx: { gold: -40 } },
    ] },

  IVM_archives_rachat: { act: "IV", title: "Au poste du pont", place: "salveze",
    text: [
      "Ils te tiennent par les bras jusqu'au poste du pont des Changeurs, une cahute de planches où brûle un brasero. Le sergent te fouille, garde ta bourse, regarde ton visage longtemps. Puis il souffle sur ses doigts et dit : « Je ne t'ai pas vu{e}. Je n'ai pas le temps de remplir un rôle d'écrou cette semaine, avec ce qui se prépare. »",
      "« Ce qui se prépare ? » demandes-tu. Il te pousse dehors. « {{oreille#ivm_sergent|Les fêtes de l'équinoxe, pardi|La nuit de l'équinoxe, on nous envoie tous au port et on laisse la porte des Sauniers à des gens que je ne connais pas}}. »",
      "Tu repars sans l'astrolabe et sans ta bourse. Il reste le vieux pilote.",
    ],
    choices: [{ label: "Chercher le vieux pilote", back: "IVM_table" }] },
});

// ==================================================================== the old pilot
Object.assign(P, {
  IVM_pilote: { act: "IV", title: "Le ponton de Gwenaël Lannec", place: "salveze", backName: "le ponton du vieux pilote",
    text: [
      { first: true, text: "Gwenaël Lannec habite une gabare désarmée au bout du port aux Sauniers, amarrée à un ponton qui penche. Le mât a été scié à hauteur d'homme et sert de cheminée. Il a quatre-vingts ans, des mains comme des racines de saule, et il raccommode un filet assis sur un seau retourné, les pieds dans des sabots pleins de paille." },
      { first: true, text: "« Sorne », dit-il, quand tu prononces le mot. Il garde la tête baissée. « Tout le monde veut aller à Sorne cette année. Les gens de la Banque sont passés hier, avec un homme qui portait des gants gris sur le port comme à un bal. » Il tire sur sa navette. « {{oreille#ivm_lannec_gris|Je leur ai dit que j'étais trop vieux|Je leur ai dit que j'étais trop vieux, et il a souri comme s'il m'avait entendu penser à mon fils}}. »" },
      { again: true, text: "Le ponton de Lannec, le filet, le seau, la fumée qui sort du mât scié. Le vieil homme lève une main sans lâcher sa navette." },
      { after: "ivm:yannick_libre", text: "Sur le pont de la gabare, un homme jeune ravaude une voile à côté du vieux. Ils se passent le fil sans un mot." },
    ],
    choices: [
      { label: "Lui demander ce qu'il a vu, enfant", hide: { seen: "IVM_pilote_sorne" }, to: "IVM_pilote_sorne" },
      { label: "Lui demander son astrolabe de marée", if: { seen: "IVM_pilote_sorne" }, why: "Il n'en parlera pas avant d'avoir parlé de Sorne.", hide: { any: [{ item: "ivm_astrolabe" }, { seen: "IVM_pilote_accord" }] }, to: "IVM_pilote_accord" },
      { back: "IVM_table" },
    ] },

  IVM_pilote_sorne: { act: "IV", title: "Ce qu'a vu le petit Gwenaël", place: "salveze",
    text: [
      "Il pose son filet. « J'avais quinze ans. Mon père pêchait la sole sur les hauts-fonds, à une demi-journée au sud des Écueils. Une nuit d'équinoxe, la mer s'est retirée si loin que la barque a touché. On est descendus sur le sable, lui et moi, avec la lanterne. » Il regarde l'eau du port, grise et grasse. « Il y avait des toits. Des toits d'ardoise, avec des moules dessus, et une rue entre, pleine de flaques. Et une tour, au fond, avec une porte fermée. »",
      "« Mon père a voulu aller jusqu'à la porte. » Il reprend sa navette, la repose. « {{oreille#ivm_lannec_pere|On est remontés à temps, voilà tout|Je l'ai tiré par la manche en criant, et on est remontés à temps, et il ne m'a plus jamais emmené pêcher}}. »",
      "« Après ça, j'ai passé soixante ans à apprendre la marée par cœur. L'astrolabe, je l'ai gagné aux dés à un vieux Taiseur qui buvait trop, il y a cinquante ans. Il m'a dit qu'il venait du palais. » Il sourit avec la moitié de la bouche. « {{oreille#ivm_lannec_fils|Je le garde pour le vendre un jour|Je le garde pour payer la dette de mon fils, qui pourrit à la Tour aux Dettes parce qu'il a emprunté à la Banque pour une barque que la tempête a prise}}. »",
      { with: "salome", text: "Salomé s'est accroupie à côté de lui pour regarder le filet. « Maille de quatre doigts, dit-elle. Pour la sole. » Le vieux lève enfin les yeux, et ils se regardent comme deux personnes qui ont le même métier." },
    ],
    fx: { meet: "ivm_lannec", ep: ["perso", 300] },
    choices: [{ back: "IVM_pilote" }] },

  IVM_pilote_accord: { act: "IV", title: "Le prix de l'astrolabe", place: "salveze",
    text: [
      "Lannec descend dans la cale de la gabare et remonte avec un paquet de toile cirée, ficelé de ligne à maquereau. Il le garde ficelé sur ses genoux, les deux mains dessus.",
      "« Trente ducats, dit-il. {{oreille#ivm_lannec_trente|C'est le prix, je ne marchande pas|C'est ce que mon fils doit à la Banque, au liard près, et avec les intérêts de la semaine prochaine il en devra trente-cinq}}. »",
      { after: "ivm:yannick_libre", text: "Puis il secoue la tête et te met le paquet dans les mains. « Non. Mon fils est dehors. Prends-le. Ramène-le, si tu peux. Et si tu vois la porte de la tour, dis-lui bonjour de la part du petit Gwenaël. »" },
      { with: "salome", text: "« Et si vous veniez avec nous ? dit Salomé. Il me faut un pilote qui a vu le fond. » Le vieux rit, un rire qui finit en toux. « {{oreille|Je suis trop vieux pour la mer|Je viendrais, si mes jambes voulaient, et je mourrais content sur le sable}}. »" },
    ],
    choices: [
      { label: "Prendre le paquet qu'il te tend", hide: { not: { has: "ivm:yannick_libre" } }, fx: { item: "ivm_astrolabe" }, to: "IVM_astrolabe" },
      { label: "Payer trente ducats", hide: { has: "ivm:yannick_libre" }, fx: { gold: -600, item: "ivm_astrolabe" }, to: "IVM_astrolabe" },
      { label: "« Gardez votre astrolabe. Je vais chercher votre fils. »", hide: { any: [{ has: "ivm:pilote" }, { not: { voile: "ivm_lannec_fils" } }] }, to: "IVM_q_pilote" },
      { label: "« Si je reviens de Sorne, votre fils sort de la Tour. Je vous le jure. » (Social)", hide: { has: "ivm:yannick_libre" }, test: { dom: "social", diff: -10, label: "La parole contre l'astrolabe", help: [{ with: "salome", v: 15 }, { if: { has: "metier:parole" }, v: 10 }] },
        win: { fx: { item: "ivm_astrolabe", flag: "ivm:promesse_lannec" }, to: "IVM_astrolabe" }, lose: { fx: { item: "ivm_astrolabe", gold: -300, flag: "ivm:promesse_lannec" }, to: "IVM_astrolabe" } },
      { back: "IVM_pilote" },
    ] },

  IVM_astrolabe: { act: "IV", title: "L'astrolabe de la reine", place: "salveze",
    text: [
      "Tu poses le disque sur la table, à la lumière. Le bronze a verdi dans les creux, et les trois anneaux tournent encore, en frottant. Sur le plus grand, les mois et les saints ; sur le second, les phases de la lune ; sur le petit, au centre, des heures marquées d'un trait et d'un point. Au dos, une ligne gravée en lettres anciennes.",
      { outcome: "lose", text: "Le scellé rompu pend encore à ton pouce, un ruban rouge de papier et de cire. Demain, aux Archives, on saura qu'il a été rompu." },
      "Tu règles l'anneau des saints sur l'équinoxe, la lune sur son troisième quartier, et la pointe s'arrête entre deux heures de la nuit. Au dos, la ligne gravée dit : *{{loupe#ivm_heure|Ma mer obéit à la lune|Ajoute la demi-heure du sel : la mer se tait à Sorne une demi-heure plus tard qu'à la Salve}}*.",
      { with: "salome", text: "Salomé lit par-dessus ton épaule, compte sur ses doigts, et tape la table. « Entre la deuxième et la troisième heure. Si on appareille à la tombée du jour, on est au-dessus à minuit, et on attend que le fond se montre. »" },
      { if: { has: "lothaire:allie" }, text: "Tu penses à Lothaire Brunel, qui a cherché cet instrument pendant des années. Il aura sa part de la nuit, maintenant, du même côté que toi." },
    ],
    fx: { flag: "ivm:table", unflag: "ivm:table_approx", ep: ["seance", 1500] },
    choices: [{ label: "Ranger l'astrolabe et rentrer", back: "IVM_preparatifs" }] },

  IVM_salome_calcul: { act: "IV", title: "Les livres de bord de Salomé", place: "salveze", with: "salome",
    text: [
      "Salomé apporte trois cahiers à couverture de toile goudronnée, gonflés d'eau de mer, et les ouvre sur la table. Trente ans de marées, d'une écriture penchée de capitaine : l'heure, la hauteur, le vent. Parfois, en marge, une autre main, ronde et appliquée. Salomé tourne vite ces pages-là.",
      "Elle calcule à voix basse, en comptant sur ses doigts, et écrit le résultat sur un coin de la table, au charbon. « Entre minuit et la troisième heure. Je ne peux pas faire mieux. » Elle referme les cahiers. « {{oreille#ivm_salome_marge|Ce sont de bons livres, ils m'ont toujours suffi|Ce sont les livres de Maïwenn autant que les miens, et je ne les avais pas rouverts depuis trois ans}}. »",
      "Trois heures de marge, sur une nuit qui en compte six. Mieux que rien. Moins qu'il ne faudrait.",
      { after: "voile:ivm_salome_marge", text: "Tu poses ta main sur les cahiers fermés, une seconde. Salomé ne la chasse pas." },
    ],
    fx: { flag: ["ivm:table", "ivm:table_approx"], conf: { salome: 5 }, ep: ["perso", 400] },
    choices: [
      { label: "Chercher quand même l'heure exacte, aux Archives ou chez le pilote", back: "IVM_table" },
      { label: "S'en contenter", back: "IVM_preparatifs" },
    ] },

  IVM_halles_carte: { act: "IV", title: "La carte de Sorne", place: "salveze",
    text: [
      "Les Halles, en temps de faim, ressemblent à une grange après la récolte : des étals vides, des bâches, des gardes. Au fond, sous une lampe, un marchand à bonnet fourré vend ce qui ne se mange pas. Il a entendu parler de la Grande Basse comme tout le monde, et il a ce qu'il faut : une carte roulée, sur vélin, avec un sceau de cire.",
      "« La carte de Sorne, dit-il, copiée sur celle du pilote de la reine. Les rues, la tour, la marée. Cinquante ducats, parce que c'est vous. » Le vélin {{pie#ivm_carte_fausse|est jauni, taché, fendu aux plis comme un vieux document|a été jauni au thé et fendu au couteau, et le sceau est en cire à cacheter d'aujourd'hui}}.",
      "« {{oreille|Elle vient d'une grande maison ruinée|Je l'ai dessinée moi-même l'hiver dernier, d'après une gravure du Beffroi}} », ajoute-t-il.",
    ],
    choices: [
      { label: "Lui rendre sa carte, en lui montrant le thé et le couteau", hide: { not: { voile: "ivm_carte_fausse" } }, fx: { ep: ["perso", 200] }, to: "IVM_halles_aveu" },
      { label: "Acheter la carte (50 ducats)", fx: { gold: -1000, item: "ivm_carte_fausse", flag: "ivm:carte_fausse" }, back: "IVM_table" },
      { label: "Passer ton chemin", back: "IVM_table" },
    ] },

  IVM_halles_aveu: { act: "IV", title: "Le marchand au bonnet", place: "salveze",
    text: [
      "Le marchand regarde la carte, puis toi, puis la carte. Il la roule avec soin et la range sous son étal. « Bon, dit-il. On mange comme on peut. » Il se penche. « Pour la peine, je vous dis une chose vraie. Les gens de la Banque ont acheté toutes les cordes de chanvre du port, avant-hier. Toutes. Et des lanternes de mer, par caisses. »",
      "« {{oreille#ivm_marchand_cordes|Ils vont pêcher, sans doute|Ils partent pour Sorne la même nuit que vous, avec trois bateaux et des plongeurs payés double}}. »",
    ],
    choices: [{ back: "IVM_table" }] },
});

// ==================================================================== a boat
Object.assign(P, {
  IVM_bateau: { act: "IV", title: "Un bateau pour la basse eau", place: "salveze",
    text: [
      "Il faut une coque qui tienne la mer jusqu'aux hauts-fonds, assez plate pour s'échouer sans se briser quand l'eau se retire, assez grande pour rapporter ce qu'on trouvera. Une gabare, en somme, ou un bateau de pêche du large. Le port aux Sauniers en compte une quarantaine, et le prévôt en a réquisitionné la moitié « pour la défense de la ville ». Les autres se louent au prix de l'or.",
      { if: { has: "salome:jointe" }, text: "*La Bavarde* est là, amarrée au quai des gabares, avec ses voiles au tiers ferlées et son nom peint en lettres jaunes à la poupe. Elle a passé l'hiver loin de Port-Vasier.", else: "Il te faut un capitaine et une coque. Il faudra en trouver une au port, ou en prendre une." },
      { with: "salome", text: "« On prend *La Bavarde*, dit Salomé, et la question est réglée. » Elle réfléchit. « {{oreille#ivm_bavarde_ver|Elle a besoin d'un coup de brai, rien de plus|Elle a besoin qu'on regarde sa quille, et j'ai peur de ce qu'on y trouvera}}. »" },
      { if: { has: "corisande:pacte" }, text: "Corisande Marrel t'a fait dire qu'une place t'attendait sur sa galère. Tu préfères un pont à toi." },
      { if: { has: "iv:port" }, text: "Au bout de la jetée, *La Grise* décharge son sel. Son patron te reconnaît, toi qu'il a enfoui{e} sous ses sacs, et lève le menton. « Je fais Grisemotte et retour, pas la haute mer, crie-t-il. Mais au marché des coques, la veuve du *Saint-Gué* te laissera son bateau pour vingt ducats, si tu vas la voir sans le courtier. »" },
    ],
    choices: [
      { label: "*La Bavarde*, au quai des gabares", hide: { not: { has: "salome:jointe" } }, to: "IVM_bavarde" },
      { label: "Acheter une gabare au port", hide: { seen: "IVM_gabares" }, to: "IVM_gabares" },
      { label: "Prendre le cotre du Guet, à l'arsenal", hide: { seen: "IVM_cotre" }, to: "IVM_cotre" },
      { back: "IVM_preparatifs" },
    ] },

  IVM_bavarde: { act: "IV", title: "La Bavarde", place: "salveze",
    text: [
      "La gabare de Salomé a la coque noire de goudron, le pont blanc de sel, et une odeur de corde mouillée et de poisson qui ne s'en ira jamais. Sous la lisse, quelqu'un a gravé au couteau deux initiales enlacées, un S et un M.",
      "Tu descends dans la cale avec une lanterne. Les membrures sont saines, mais la quille, à la hauteur du mât, {{pie#ivm_quille|a l'air saine, noire et dure sous le goudron|est piquée de trous fins comme des coups d'aiguille : le taret est entré, et la quille cassera au premier échouage}}.",
      { with: "salome", text: "Salomé descend derrière toi, et s'accroupit. Elle tâte le bois de la paume, très longtemps." },
      { if: { has: "salome:maiwenn" }, with: "salome", text: "« Maïwenn calfatait elle-même, dit-elle enfin. Elle disait qu'on ne confie pas sa vie à des mains qu'on ne paie pas assez. » Elle se relève. « Elle avait raison pour tout, sauf pour la Banque. »" },
    ],
    choices: [
      { label: "Montrer à Salomé les trous du taret", hide: { not: { voile: "ivm_quille" } }, to: "IVM_bavarde_radoub" },
      { label: "Faire mettre la gabare à sec pour la regarder (Nature)", hide: { voile: "ivm_quille" }, test: { dom: "nature", diff: -10, label: "Juger une quille", help: [{ with: "salome", v: 20 }] },
        win: { to: "IVM_bavarde_radoub" }, lose: { fx: { flag: "ivm:quille_faible", set: { ivm_bateau: "bavarde" } }, to: "IVM_bavarde_partir" } },
      { label: "Elle tiendra : la déclarer prête", hide: { voile: "ivm_quille" }, fx: { flag: "ivm:quille_faible", set: { ivm_bateau: "bavarde" } }, to: "IVM_bavarde_partir" },
      { back: "IVM_bateau" },
    ] },

  IVM_bavarde_radoub: { act: "IV", title: "Le radoub", place: "salveze",
    text: [
      "On tire *La Bavarde* sur la cale du vieux chantier, à la marée haute, avec des cordes, des rouleaux et douze bras. Quand l'eau se retire, la quille apparaît, noire, luisante, criblée de petits trous ronds. Salomé y enfonce son couteau : la lame entre jusqu'au manche.",
      "« Il faut changer une longueur de quille, dit le maître calfat du chantier, un homme sans dents qui sent la poix. Trois jours, si j'ai le chêne. » Il crache. « {{oreille#ivm_calfat|Le chêne, je n'en ai plus, c'est la guerre|Le chêne, j'en ai, mais la Banque me l'a payé d'avance pour ses propres bateaux}}. »",
      { with: "salome", text: "Salomé se tait. Elle a posé la main à plat sur la coque de son bateau, comme sur le cou d'un cheval." },
    ],
    choices: [
      { label: "« Ce chêne est payé par la Banque. Combien pour qu'il change d'avis ? »", hide: { not: { voile: "ivm_calfat" } }, fx: { gold: -300, set: { ivm_bateau: "bavarde" }, flag: "basse:bateau", ep: ["perso", 500] }, to: "IVM_bavarde_partir" },
      { label: "Faire venir les gens du quai pour le travail (Social)", test: { dom: "social", diff: -10, label: "Trois jours de chantier", help: [{ with: "tibere", v: 10 }, { if: { has: "ivm:eq_quai" }, v: 20 }] },
        win: { fx: { set: { ivm_bateau: "bavarde" }, flag: "basse:bateau", ep: ["perso", 500] }, to: "IVM_bavarde_partir" },
        lose: { fx: { set: { ivm_bateau: "bavarde" }, flag: ["basse:bateau", "ivm:quille_faible"] }, to: "IVM_bavarde_partir" } },
      { label: "Laisser Salomé faire le travail elle-même, de nuit", who: "salome", fx: { set: { ivm_bateau: "bavarde" }, flag: "basse:bateau", conf: { salome: 5 }, pv: -3 }, to: "IVM_bavarde_partir" },
    ] },

  IVM_bavarde_partir: { act: "IV", title: "Prête pour la nuit", place: "salveze",
    text: [
      "*La Bavarde* retrouve l'eau du port avec un bruit de bois qui se gonfle. On charge de l'eau douce, du biscuit, des cordes, des lanternes de mer, et une ancre de rechange que Salomé exige sans donner de raison.",
      { if: { has: "ivm:quille_faible" }, text: "Le bateau flotte bien. Tu écoutes la coque craquer en tirant sur son amarre, et tu te dis que tous les bateaux craquent.", else: "La quille neuve est blonde sous le goudron frais. On la voit à travers l'eau claire du matin, comme un os neuf dans une vieille jambe." },
      { with: "salome", text: "« Elle tiendra », dit Salomé. {{oreille|Puis elle va vérifier les drisses|Elle ajoute, plus bas : « Elle a tenu pour nous deux, elle tiendra pour moi seule »}}." },
    ],
    fx: { flag: "basse:bateau", ep: ["perso", 400] },
    choices: [{ back: "IVM_preparatifs" }] },

  IVM_gabares: { act: "IV", title: "Le marché des coques", place: "salveze",
    text: [
      "Au bout du port, là où l'eau sent la vase et le goudron, deux bateaux portent un balai attaché en haut du mât : à vendre. Le courtier, un petit homme en manteau de loutre qui sent la violette, te les présente de loin, sans descendre sur le ponton.",
      "*La Pimpante* est une gabare de sel repeinte de frais, rouge et bleu, avec des voiles neuves. Elle {{pie#ivm_pimpante|brille comme au premier jour, une affaire à quarante ducats|a des bordages pourris sous la peinture fraîche, et une voie d'eau qu'on a bouchée avec de l'étoupe et du suif}}.",
      "*Le Saint-Gué*, à côté, est un vieux bateau de pêche du large, gris, rapiécé, à soixante ducats. Sa coque {{pie#ivm_saintgue|est grise, rapiécée, fatiguée|est en chêne de l'ancien temps, chevillée de bois, plus solide que le ponton où il est amarré}}.",
      "« {{oreille|Le Saint-Gué, son patron est parti chez sa sœur|Le Saint-Gué, son patron s'est noyé à la Saint-Michel, et sa veuve vendra à n'importe quel prix pour payer les cierges}} », dit le courtier.",
    ],
    choices: [
      { label: "Acheter *La Pimpante* (40 ducats)", fx: { gold: -800, set: { ivm_bateau: "pimpante" }, flag: ["basse:bateau", "ivm:quille_faible"] }, to: "IVM_gabare_achat" },
      { label: "Acheter *Le Saint-Gué* (60 ducats)", fx: { gold: -1200, set: { ivm_bateau: "saintgue" }, flag: "basse:bateau" }, to: "IVM_gabare_achat" },
      { label: "Aller trouver la veuve du patron du *Saint-Gué* sans passer par le courtier", hide: { not: { voile: "ivm_saintgue" } }, fx: { gold: -400, set: { ivm_bateau: "saintgue" }, flag: "basse:bateau", ep: ["perso", 400] }, to: "IVM_veuve_saintgue" },
      { label: "Aller trouver la veuve du *Saint-Gué*, comme l'a dit le patron de *La Grise*", hide: { any: [{ voile: "ivm_saintgue" }, { not: { has: "iv:port" } }] }, fx: { gold: -400, set: { ivm_bateau: "saintgue" }, flag: "basse:bateau", ep: ["perso", 300] }, to: "IVM_veuve_saintgue" },
      { back: "IVM_bateau" },
    ] },

  IVM_veuve_saintgue: { act: "IV", title: "La veuve du Saint-Gué", place: "salveze",
    text: [
      "Elle habite deux pièces au-dessus d'une corderie, avec quatre enfants et une marmite où cuit une soupe de têtes de poisson. Quand tu dis le nom du bateau, elle s'assied sur le coffre, le torchon dans les mains.",
      "« Le courtier en veut soixante, et il m'en laisse quinze, dit-elle. Donnez-m'en vingt, à moi, et prenez-le. » Elle regarde ses enfants. « {{oreille|Je ne veux plus le voir dans le port|Je veux qu'il parte loin, et qu'il ramène quelque chose, pour que mon homme n'ait pas fait ce bateau pour rien}}. »",
      "Dans le coffre, sous les papiers du bateau, elle trouve un compas de bronze dans une boîte de buis. « C'était le sien. Prenez-le aussi. Moi, je ne sais pas m'en servir. »",
    ],
    fx: { item: "ivm_tr_compas", clock: { tresors: 1 }, flag: "tresor:ivm_compas" },
    choices: [{ label: "Aller prendre possession du *Saint-Gué*", to: "IVM_gabare_achat" }] },

  IVM_gabare_achat: { act: "IV", title: "Un bateau à toi", place: "salveze",
    text: [
      "Tu signes chez le greffier du port, qui écrit lentement et te fait payer trois liards d'encre. Puis tu montes à bord, seul{e}, et tu marches de l'étrave à la poupe en écoutant le pont sous tes pieds.",
      { if: { is: { ivm_bateau: "pimpante" } }, text: "Dans la cale de *La Pimpante*, il y a déjà deux doigts d'eau. Tu te dis que c'est la pluie.", else: "*Le Saint-Gué* a un pont ferme comme un plancher de maison, une cale sèche, et une vieille odeur de poisson installée pour toujours. Sur le banc de nage, quelqu'un a gravé un trait pour chaque sortie : des centaines." },
      { if: { has: "tresor:ivm_compas" }, text: "Tu poses le compas du patron noyé dans son logement, près de la barre. La rose tourne, hésite, et trouve le nord." },
      { with: "salome", text: "Salomé fait le tour du bateau, tire sur les haubans, et revient. « Ça ira. *La Bavarde* me manquera. Ça ira. »" },
    ],
    fx: { ep: ["perso", 400] },
    choices: [{ back: "IVM_preparatifs" }] },

  IVM_cotre: { act: "IV", title: "L'arsenal du Guet", place: "salveze", takes: "night",
    text: [
      "Le Guet garde ses bateaux dans l'arsenal de la Tour Ronde, un bassin fermé par une chaîne et une herse. Le cotre *La Vigilante*, long et bas, avec une voile rouge et six avirons de chaque bord, est le plus rapide de Salvèze. Il est amarré au fond, sous la lanterne de la garde.",
      "Deux hommes jouent aux dés sur un tonneau, à côté du treuil de la chaîne. Le troisième dort. La chaîne {{pie#ivm_chaine|est neuve, épaisse comme un bras|est neuve, mais la goupille du treuil est rouillée et se casse d'un coup de talon}}.",
      { with: "lison", text: "Lison regarde le bassin avec une envie de voleuse de barques. « Six avirons. Il me faut quatre bras et toi. »" },
    ],
    choices: [
      { label: "Casser la goupille du treuil d'un coup de talon, et filer", hide: { not: { voile: "ivm_chaine" } }, fx: { set: { ivm_bateau: "cotre" }, flag: "basse:bateau", ep: ["perso", 600] }, to: "IVM_cotre_pris" },
      { label: "Te glisser dans le bassin à la nage (Discrétion)", test: { dom: "discretion", diff: -20, label: "Voler le cotre du Guet", help: [{ with: "lison", v: 20 }, { with: "fauvette", v: 10 }] },
        win: { fx: { set: { ivm_bateau: "cotre" }, flag: "basse:bateau", ep: ["perso", 600] }, to: "IVM_cotre_pris" }, lose: { to: "IVM_cotre_combat" } },
      { label: "Entrer par la porte, l'arme à la main", to: "IVM_cotre_combat" },
      { back: "IVM_bateau" },
    ] },

  IVM_cotre_combat: { act: "IV", title: "Le bassin de la Tour Ronde", place: "salveze",
    text: [
      "Les dés roulent dans l'eau. Les deux joueurs se lèvent, le troisième se réveille en criant, et la cloche de l'arsenal se met à sonner. Il faut être sur le cotre avant que la garde de la Tour descende l'escalier.",
    ],
    choices: [
      { label: "Te battre sur le quai du bassin", fight: { title: "L'arsenal du Guet", enemies: [{ id: "ivm_garde", n: 3 }],
        win: { fx: { set: { ivm_bateau: "cotre" }, flag: "basse:bateau", ep: ["perso", 800] }, to: "IVM_cotre_pris" },
        lose: { fx: { pv: -5 }, to: "IVM_cotre_perdu" },
        flee: { label: "Plonger dans le bassin et nager sous la herse", dom: "nature", diff: -10, to: "IVM_cotre_perdu" } } },
    ] },

  IVM_cotre_pris: { act: "IV", title: "La Vigilante", place: "salveze",
    text: [
      "Le cotre glisse hors du bassin sous la herse levée, avirons rentrés, porté par le jusant. Derrière, la cloche sonne encore, puis plus rien. Tu le mènes à travers les canaux noirs jusqu'au fond du port aux Sauniers, où on le cache sous une bâche, derrière un chaland de sel.",
      "Au matin, on repeint la voile en brun avec de la lie de vin et de la suie. *La Vigilante* devient un bateau de pêche comme un autre, tant qu'on oublie de regarder les tolets de bronze.",
      { with: "tibere", text: "Tibère tourne autour, les mains dans le dos. « J'ai servi dix ans sur ce cotre, dit-il. On poursuivait les contrebandiers avec. » Il tapote l'étrave. « {{oreille|Bon bateau|Bon bateau, et c'est la première fois que j'y monte sans avoir honte}}. »" },
    ],
    fx: { flag: "ivm:cotre_vole", fac: { conseil: -5 } },
    choices: [{ back: "IVM_preparatifs" }] },

  IVM_cotre_perdu: { act: "IV", title: "Le bac de la Sablière", place: "salveze",
    text: [
      "Tu sors de l'eau sous le pont des Teinturiers, trempé{e}, une écorchure au bras, sans le cotre. Sur la berge, une femme en tablier de cuir te regarde sortir de la Salve avec l'air de quelqu'un qui a vu pire. C'est la passeuse du bac de la Sablière, que tout le quai appelle la mère Coquerel.",
      "« Tu cherches un bateau ? » Elle montre de la tête son bac, un grand plat de chêne à fond carré, qui passe les charrettes d'une rive à l'autre. « Il va lentement. Il reste droit par tous les temps. Et il s'échoue sur le sable comme une vache qui se couche. » Elle te tend un morceau de couverture. « {{oreille#ivm_coquerel|Je te le loue pour pas cher|Je te le donne, parce qu'Odeline Carrus m'a retrouvé ma bague de mariage dans la vase il y a vingt ans, et que je n'ai jamais pu la payer}}. »",
    ],
    fx: { set: { ivm_bateau: "bac" }, flag: "basse:bateau", ep: ["perso", 300] },
    choices: [{ back: "IVM_preparatifs" }] },
});

// ==================================================================== a crew
Object.assign(P, {
  IVM_equipage: { act: "IV", title: "Des bras", place: "salveze",
    text: [
      "Il faut des gens pour ramer quand le vent tombe, pour tenir les cordes quand on descendra dans la ville noyée, pour monter la garde sur le sable. Des gens qui sauront se taire jusqu'à la nuit, et se battre si la Banque vient. La faim en a rendu beaucoup disponibles. Elle en a rendu beaucoup prêts à se vendre au plus offrant.",
      { if: { has: "ivm:eq_ecumeurs" }, text: "Les Écumeurs de Riwal ont dit oui." },
      { if: { has: "ivm:eq_quai" }, text: "Les gens du quai des Lanternes ont dit oui." },
      { if: { has: "ivm:eq_gouttieres" }, text: "Les Gouttières ont dit oui, pour un prix." },
    ],
    choices: [
      { label: "Les Écumeurs de la Veuve Corbière, qui ont deux barques au port", hide: { seen: "IVM_ecumeurs" }, to: "IVM_ecumeurs" },
      { label: "Les gens du quai des Lanternes", hide: { seen: "IVM_quai" }, to: "IVM_quai" },
      { label: "Les Gouttières, et leur Reine", hide: { seen: "IVM_gouttieres" }, to: "IVM_gouttieres" },
      { back: "IVM_preparatifs" },
    ] },

  IVM_ecumeurs: { act: "IV", title: "Les barques de Riwal", place: "salveze",
    text: [
      "Riwal, le second de la Veuve Corbière, a amené deux barques de Port-Vasier, chargées de blé de contrebande qu'il vend au marché noir à six fois son prix. Il te reçoit sous la tente de toile tendue entre les deux mâts, assis sur un sac de grain, souriant de toutes ses dents.",
      "« Sorne, dit-il. La Veuve en rêve depuis quarante ans. » Il croque une noisette. « La Banque m'a déjà fait une offre. Dix ducats par homme et par nuit. {{oreille#ivm_riwal_offre|Je l'ai refusée, bien sûr|Je ne l'ai pas encore refusée, et je ne la refuserai que si vous offrez mieux}}. »",
      { if: { fac: "ecumeurs", min: 10 }, text: "Il te regarde un moment de plus. « La Veuve parle de toi, à Port-Vasier. En bien. C'est rare. »" },
      { with: "salome", text: "« Riwal, dit Salomé, tu vendrais ta mère si elle flottait. » Riwal rit. « Elle flotte, Salomé. Elle est en liège. »" },
    ],
    choices: [
      { label: "« La Veuve m'a donné sa parole à Port-Vasier. Tu la tiens pour elle. »", if: { fac: "ecumeurs", min: 10 }, why: "Il faudrait que la Veuve Corbière t'estime.", fx: { flag: ["ivm:eq_ecumeurs", "basse:equipage"], set: { ivm_equipage: "ecumeurs" }, ep: ["perso", 500] }, to: "IVM_ecumeurs_marche" },
      { label: "Lui offrir une part du trésor : un dixième", fx: { flag: ["ivm:eq_ecumeurs", "basse:equipage", "ivm:part_ecumeurs"], set: { ivm_equipage: "ecumeurs" } }, to: "IVM_ecumeurs_marche" },
      { label: "« Tu n'as pas encore refusé la Banque. Je le dirai à la Veuve. »", hide: { not: { voile: "ivm_riwal_offre" } }, test: { dom: "social", diff: -10, label: "Tenir Riwal par sa patronne", help: [{ with: "salome", v: 15 }] },
        win: { fx: { flag: ["ivm:eq_ecumeurs", "basse:equipage"], set: { ivm_equipage: "ecumeurs" }, ep: ["perso", 600] }, to: "IVM_ecumeurs_marche" },
        lose: { fx: { flag: "ivm:riwal_banque" }, to: "IVM_ecumeurs_non" } },
      { back: "IVM_equipage" },
    ] },

  IVM_ecumeurs_marche: { act: "IV", title: "Marché conclu", place: "salveze",
    text: [
      "Riwal crache dans sa paume et te la tend. Elle est sèche et dure. « Huit hommes et mes deux barques. Ils savent ramer, plonger, et tenir un couteau. Ils lisent mal, ce qui vaut mieux. »",
      { if: { has: "ivm:part_ecumeurs" }, text: "« Un dixième, répète-t-il. De tout ce qui remonte. Je compterai moi-même. » Il compte déjà, tu le vois à ses yeux." },
      "Il glisse une noisette dans ta main. « {{oreille|La nuit de l'équinoxe, au fond du port, à la tombée du jour|La nuit de l'équinoxe, au fond du port, et si la Banque est sur l'eau avant nous, je verrai de quel côté souffle le vent}}. »",
    ],
    fx: { fac: { ecumeurs: 5 } },
    choices: [{ back: "IVM_equipage" }] },

  IVM_ecumeurs_non: { act: "IV", title: "Le sourire de Riwal", place: "salveze",
    text: [
      "Riwal sourit encore plus largement. « Dis-le à la Veuve, dit-il. Elle est à trois jours d'ici. La Grande Basse est dans deux. » Il se lève, et l'entretien est fini.",
      "En sortant de la tente, tu croises un commis en manteau noir à boutons d'or qui y entre, une sacoche sous le bras.",
    ],
    choices: [{ back: "IVM_equipage" }] },

  IVM_quai: { act: "IV", title: "Le quai des Lanternes, en temps de faim", place: "salveze",
    text: [
      "Le quai des Lanternes n'a plus de lanternes. On les a brûlées pour se chauffer, ou vendues pour le métal. La boutique d'Odeline a toujours ses scellés sur la porte, et ses trois marches sont propres : quelqu'un les balaie.",
      "Tu trouves les brocanteurs autour d'un brasero, devant la boutique de Wilfrid le ferrailleur, à faire cuire des châtaignes sur une plaque de fer. Ils se taisent quand tu arrives. Puis Wilfrid, un colosse aux bras couverts de rouille, te tend une châtaigne brûlante.",
      "« On sait que tu n'as pas tué la vieille, dit-il. {{oreille#ivm_ambrun|On l'a toujours su|On l'a su le jour où on a vu ta tête au cimetière, et on n'a rien dit au Guet, et on en a honte}}. »",
      { if: { has: "mandat:leve" }, text: "La mère Coquerel, la passeuse du bac, lève la tête. « Et le Conseil le sait aussi, maintenant. »", else: "La mère Coquerel, la passeuse du bac, crache dans le brasero. « Et le Guet peut bien coller ta figure sur toutes les portes. »" },
    ],
    choices: [
      { label: "Leur demander de venir à Sorne", to: "IVM_quai_veillee" },
      { label: "« Vous avez honte. Alors venez. »", hide: { not: { voile: "ivm_ambrun" } }, fx: { conf: { tibere: 2 } }, to: "IVM_quai_veillee" },
      { back: "IVM_equipage" },
    ] },

  IVM_quai_veillee: { act: "IV", title: "Autour du brasero", place: "salveze",
    text: [
      "Ils écoutent jusqu'au bout. Tu leur dis Sorne, la Charte, ce que la reine a perdu et ce que la Banque a pris. Tu leur dis qu'il y a de l'or, et que l'or ira à qui il ira. Wilfrid remue les châtaignes. Le mot d'argent reste dans les gorges.",
      "« Odeline nous retrouvait tout, dit enfin la mère Coquerel. Les bagues, les clés, les lettres. Les enfants, une fois. » Elle se lève, s'essuie les mains sur son tablier. « {{oreille|On vient|On vient, et c'est la première chose qu'on retrouve pour elle}}. »",
      "Ils seront six : Wilfrid, la mère Coquerel, deux fondeurs de plomb, un relieur qui n'a plus de livres à relier, et le fils du marchand de lanternes, qui a quinze ans et une fronde.",
      { if: { has: "passe:voleur" }, text: "Le relieur te regarde avec un demi-sourire. Il se souvient du gamin qui avait essayé de voler la boutique d'Odeline, il y a des années. Il se tait, et te serre la main un peu plus longtemps." },
    ],
    fx: { flag: ["ivm:eq_quai", "basse:equipage"], set: { ivm_equipage: "quai" }, ep: ["perso", 500] },
    choices: [{ back: "IVM_equipage" }] },

  IVM_gouttieres: { act: "IV", title: "Le grenier de la Reine", place: "salveze",
    text: [
      "La Reine des Gouttières tient sa cour dans un grenier de tisserand au-dessus de trois rues, où l'on monte par une échelle qu'on retire derrière vous. Margaux Pelle a cinquante ans, un châle de cachemire volé à une marquise, et des bagues à tous les doigts sauf au pouce. Elle épluche une orange, en ces temps de faim, lentement, pour qu'on voie.",
      "« Des toits jusqu'à la mer, dit-elle. Mes enfants ne savent pas nager. » Elle détache un quartier. « Mais ils savent grimper, ouvrir, porter, et se taire. Ça se paie. » Elle te regarde par-dessus l'orange. « {{oreille#ivm_margaux|Un quart de ce que tu remonteras|Un quart de ce que tu remonteras, ou la tête de Lothaire Brunel, qui a fait pendre trois des miens l'an dernier pour un coffre qu'il avait volé lui-même}}. »",
      { with: "fauvette", text: "Fauvette s'est assise sur une poutre, les jambes dans le vide. « Il te le fera pour moins, Margaux. Il m'a ramenée vivante deux fois. » La Reine sourit sans lever les yeux. « Toi, tu payes en reconnaissance. Moi, je paie mes enfants en pain. »" },
    ],
    fx: { meet: "margaux" },
    choices: [
      { label: "Accepter le quart", fx: { flag: ["ivm:eq_gouttieres", "basse:equipage", "ivm:part_gouttieres"], set: { ivm_equipage: "gouttieres" } }, to: "IVM_gouttieres_prix" },
      { label: "« Lothaire Brunel. Si je le croise à Sorne, il est à vous. »", hide: { any: [{ not: { voile: "ivm_margaux" } }, { has: "lothaire:mort" }] }, fx: { flag: ["ivm:eq_gouttieres", "basse:equipage", "ivm:promesse_lothaire"], set: { ivm_equipage: "gouttieres" } }, to: "IVM_gouttieres_prix" },
      { label: "« Lothaire Brunel est mort. Vos trois sont payés. »", hide: { any: [{ not: { voile: "ivm_margaux" } }, { not: { has: "lothaire:mort" } }] }, fx: { flag: ["ivm:eq_gouttieres", "basse:equipage"], set: { ivm_equipage: "gouttieres" }, ep: ["perso", 500] }, to: "IVM_gouttieres_prix" },
      { label: "Laisser Fauvette marchander", who: "fauvette", test: { dom: "social", diff: -10, label: "Fauvette devant sa Reine", help: [{ with: "fauvette", v: 20 }] },
        win: { fx: { flag: ["ivm:eq_gouttieres", "basse:equipage"], set: { ivm_equipage: "gouttieres" }, conf: { fauvette: 5 } }, to: "IVM_gouttieres_prix" },
        lose: { fx: { flag: ["ivm:eq_gouttieres", "basse:equipage", "ivm:part_gouttieres"], set: { ivm_equipage: "gouttieres" } }, to: "IVM_gouttieres_prix" } },
      { back: "IVM_equipage" },
    ] },

  IVM_gouttieres_prix: { act: "IV", title: "Les enfants de la Reine", place: "salveze",
    text: [
      "Margaux Pelle frappe deux fois dans ses mains. Quatre silhouettes descendent des poutres : deux garçons, une fille aux cheveux ras, un homme sans âge avec une corde enroulée en bandoulière. « Les meilleurs, dit-elle. Ils vont où on leur dit, ils prennent ce qu'on leur montre. » Elle sourit. « Et ils me racontent tout. »",
      "Elle te tend le dernier quartier d'orange. Tu le prends. C'est la première orange que tu vois depuis l'automne.",
      { with: "fauvette", text: "En redescendant l'échelle, Fauvette te souffle : « Le grand à la corde, c'est Pivert. Il ouvre n'importe quoi. Il ment aussi sur n'importe quoi. »" },
    ],
    fx: { ep: ["perso", 400] },
    choices: [{ back: "IVM_equipage" }] },
});

// ==================================================================== the Taiseurs
Object.assign(P, {
  IVM_taiseurs: { act: "IV", title: "Ceux qui gardent la porte", place: "salveze",
    text: [
      "Sorne a été fermée par les Taiseurs, il y a trois siècles, et ce sont eux qui savent la rouvrir. Leurs barques connaissent les passes des hauts-fonds ; leur doyenne connaît la parole de la porte. Sans eux, tu iras jusqu'à la tour noyée, et tu frapperas.",
      { if: { any: [{ has: "taiseurs:serment" }, { has: "lison:loyale" }] }, text: "Au matin du premier jour, un gamin des marais pose un brin de jonc tressé sur le rebord de ta fenêtre et repart en courant. Trois nœuds, un tour, trois nœuds : aux Joncs-Bas, cela veut dire *ce soir, au port*.", else: "Les Taiseurs gardent le silence. Ils savent où tu es ; ils savent tout ce qui se passe à Salvèze, par les dentellières, les bateliers, les marchandes d'anguilles. Ils attendent de voir ce que tu feras sans eux." },
      { if: { has: "joncs:brules" }, text: "Depuis l'incendie des pilotis, les Joncs-Bas vivent sous des abris de roseaux. Les barques qui restent, on les compte sur les doigts." },
      { with: "lison", if: { not: { has: "lison:loyale" } }, text: "Lison regarde ses mains. « {{oreille#ivm_lison_grandmere|Ma grand-mère fera ce qu'elle voudra|Ma grand-mère attend que je lui dise de qui je suis, et je ne le sais pas encore}}. »" },
    ],
    choices: [
      { label: "Aller au port à la nuit, comme le dit le jonc tressé", if: { any: [{ has: "taiseurs:serment" }, { has: "lison:loyale" }] }, why: "Les Taiseurs ne t'ont pas fait signe.", to: "IVM_ancolie_barque" },
      { label: "Demander à Lison d'aller chercher sa grand-mère", who: "lison", hide: { has: "lison:loyale" }, to: "IVM_taiseurs_lison" },
      { label: "Demander au Gardien de les appeler", who: "gildas", hide: { any: [{ has: "taiseurs:serment" }, { has: "lison:loyale" }] }, to: "IVM_taiseurs_gildas" },
      { label: "Lire à la loupe la dentelle que vend la marchande du pont des Muets", if: { item: "loupe" }, why: "Il faudrait la loupe d'ambre.", hide: { any: [{ has: "taiseurs:serment" }, { has: "lison:loyale" }, { seen: "IVM_taiseurs_dentelle" }] }, to: "IVM_taiseurs_dentelle" },
      { back: "IVM_preparatifs" },
    ] },

  IVM_taiseurs_lison: { act: "IV", title: "Lison choisit", place: "salveze", with: "lison",
    text: [
      "Lison prend son temps pour répondre. Elle attache sa natte avec un bout de ligne, la défait, la rattache. Dehors, une barque passe sur le canal, et elle la suit des yeux jusqu'au pont.",
      "« Ma grand-mère m'a envoyée pour te surveiller, dit-elle. Tu le sais. Pour reprendre le cornet si tu le salissais. » Elle te regarde enfin. « Si je vais la chercher, c'est que je suis de ton côté. Il n'y aura pas de retour. » Elle se lève. « {{oreille#ivm_lison_choix|Alors je vais la chercher|Alors je vais la chercher, et je lui dirai que c'est moi qui ai choisi, pour qu'elle te pardonne à toi}}. »",
    ],
    choices: [
      { label: "« Va. »", fx: { flag: "lison:loyale", conf: { lison: 15 } }, to: "IVM_ancolie_barque" },
      { label: "« Je ne te demande pas ça. Reste ce que tu es. »", fx: { conf: { lison: 5 } }, to: "IVM_taiseurs_lison_non" },
    ] },

  IVM_taiseurs_lison_non: { act: "IV", title: "Ce que Lison ne fera pas", place: "salveze", with: "lison",
    text: [
      "Lison se rassied. Elle a l'air soulagée et vexée en même temps, et le sait, et t'en veut un peu de l'avoir vu.",
      "« Alors je lui envoie un mot, dit-elle. Juste un mot. Elle décidera. » Elle prend un brin de jonc dans sa poche, y fait trois nœuds, un tour, trois nœuds, et le donne au premier gamin qui passe sous la fenêtre avec une pièce de deux liards.",
      "Le soir même, le gamin revient avec un autre brin : un nœud, un tour, un nœud. Lison le regarde longtemps. « Elle vient, dit-elle. Pour te voir, toi. »",
    ],
    choices: [{ label: "Aller au port à la nuit", to: "IVM_ancolie_barque" }] },

  IVM_taiseurs_gildas: { act: "IV", title: "Le Gardien", place: "salveze", with: "gildas",
    text: [
      "Frère Gildas t'écoute les yeux baissés, les mains dans ses manches. Quand tu as fini, il reste longtemps sans bouger, et tu entends le canal sous la fenêtre.",
      { if: { has: "gildas:demasque" }, text: "« Je suis encore le Gardien, dit-il. Mère Ancolie ne m'a pas relevé. Elle attendait, je crois, de savoir ce que vous feriez de moi. » Il lève la tête. « Ce que je demanderai, je le demanderai en mon nom. Ils sauront ce que ce nom vaut, maintenant. »", else: "« Les Taiseurs écoutent le Gardien, dit-il. C'est ma charge. » Il lève la tête. « Je peux les appeler. Ils viendront. Ils ne viendront pas pour vous ; ils viendront pour la Charte. »" },
      "Il sort de sa manche un petit sifflet d'os, percé d'un seul trou, et le pose sur la table. « À minuit, au bout du port, trois fois. »",
    ],
    choices: [
      { label: "Aller siffler au bout du port, à minuit", fx: { conf: { gildas: 5 } }, to: "IVM_ancolie_barque" },
    ] },

  IVM_taiseurs_dentelle: { act: "IV", title: "La dentellière du pont des Muets", place: "salveze",
    text: [
      "Sur le pont des Muets, une femme des marais vend de la dentelle à l'aune, assise sur un pliant, un châle sur les genoux. La dentelle se vend mal en temps de faim ; elle est là quand même, tous les jours, depuis le début du couvre-feu.",
      "Tu prends un col, tu le retournes contre le jour, tu poses la loupe dessus. Les fils dessinent des fleurs de marais, des joncs, des vagues. Sous l'ambre, dans les jours de la dentelle, un motif plus serré : *{{loupe#ivm_dentelle|Fleurs de nénuphar, point de Grisemotte|Celui qui porte le cornet peut parler à la vendeuse ; qu'il dise le nom de sa mère}}*.",
    ],
    choices: [
      { label: "Dire à la vendeuse : « Ma mère était une Vasse des Joncs-Bas. »", hide: { not: { voile: "ivm_dentelle" } }, fx: { ep: ["perso", 500] }, to: "IVM_ancolie_barque" },
      { label: "Parler à la vendeuse à double sens, comme on parle aux Joncs-Bas (Social)", test: { dom: "social", diff: -20, label: "La double parole", help: [{ if: { has: "taiseurs:connus" }, v: 10 }, { if: { has: "metier:parole" }, v: 10 }] },
        win: { to: "IVM_ancolie_barque" }, lose: { to: "IVM_taiseurs_refus" } },
      { label: "Acheter le col et partir", fx: { gold: -40 }, to: "IVM_taiseurs_refus" },
    ] },

  IVM_taiseurs_refus: { act: "IV", title: "Le pont des Muets", place: "salveze",
    text: [
      "La vendeuse te rend ta monnaie, plie sa dentelle, replie son pliant, et s'en va sans hâte vers le port. Le lendemain, sa place sur le pont est vide. Un autre jour, une autre femme y vend des oignons.",
      "Les Taiseurs resteront dans leurs roseaux. Tu iras à Sorne avec tes seules coques, et tu frapperas à la porte de la tour avec ce que tu as : le cornet, les feuillets, ce que tu as entendu en route.",
    ],
    fx: { flag: "ivm:taiseurs_non" },
    choices: [{ back: "IVM_preparatifs" }] },

  IVM_ancolie_barque: { act: "IV", title: "Les barques de la nuit", place: "salveze", takes: "night",
    text: [
      "Le port aux Sauniers, après le couvre-feu, n'est qu'un clapotis noir et quelques lanternes de garde au bout des môles. Tu attends sur les marches du vieux débarcadère, les pieds au ras de l'eau. Une heure passe. Puis, sans un bruit d'aviron, des barques plates sortent de l'ombre du chenal, longues et basses, chargées de silhouettes immobiles.",
      { if: { has: "joncs:brules" }, text: "Elles sont quatre. Aux Joncs-Bas, avant l'incendie, il y en avait quarante.", else: "Tu en comptes douze, puis tu cesses de compter. Les Joncs-Bas sont venus presque entiers." },
      "Dans la première, assise sur un coffre, une vieille femme aveugle tient sur ses genoux un carreau de dentellière couvert d'un linge. On l'aide à monter les marches. Elle tend la main devant elle, trouve ton visage, et le touche du bout des doigts, le front, les yeux, la bouche, comme on lit.",
      { with: "lison", text: "Lison s'est mise un pas derrière toi. Sa grand-mère tourne la tête vers elle, sans la voir. « Tu es là aussi, toi », dit Mère Ancolie, et Lison répond « Oui », et c'est tout." },
    ],
    fx: { meet: "ancolie" },
    choices: [{ label: "Parler à Mère Ancolie", to: "IVM_ancolie" }] },

  IVM_ancolie: { act: "IV", title: "Mère Ancolie", place: "salveze",
    text: [
      "On l'installe sous l'auvent d'un hangar à sel, sur son coffre, avec une couverture. Elle refuse le vin, accepte l'eau. Ses mains bougent sans cesse : elles tirent des fils invisibles au-dessus du carreau.",
      "« Cinq feuillets, dit-elle. Tu as fait en un an ce que nous n'avons pas osé faire en trois siècles. » Ses doigts s'arrêtent. « {{oreille#ivm_ancolie_fierte|C'est un bel ouvrage|C'est un bel ouvrage, et j'ai eu peur de toi chaque jour de cette année}}. »",
      { if: { has: "taiseurs:serment" }, text: "« Tu as juré, aux Joncs, dit-elle. Tu tiens ta langue mieux que je ne l'espérais. » Elle sourit. « Moins bien que je ne le craignais. »", else: "« Tu n'as pas juré, dit-elle. Tu as le droit au serment par ta mère, et tu ne l'as pas pris. » Elle hausse ses épaules maigres. « {{oreille|C'est ton affaire|Ta mère non plus ne l'aurait pas pris, à ton âge, et c'est pour ça qu'elle t'a mis entre les mains d'Odeline}}. »" },
      "« Avant la parole, une question. » Elle tourne vers toi ses yeux blancs. « La Charte, quand tu la tiendras. Qu'en feras-tu ? »",
    ],
    choices: [
      { label: "« Je la lirai devant le Conseil et devant le peuple. »", fx: { set: { ivm_charte: "lire" }, fac: { hautes: 5 } }, to: "IVM_parole" },
      { label: "« Je la rendrai aux Taiseurs. Elle est à vous. »", fx: { set: { ivm_charte: "rendre" }, fac: { taiseurs: 10 } }, to: "IVM_parole" },
      { label: "« Je ne le sais pas encore. »", fx: { set: { ivm_charte: "doute" } }, to: "IVM_parole" },
      { label: "Te taire", fx: { set: { ivm_charte: "silence" }, fac: { taiseurs: 5 } }, to: "IVM_parole" },
    ] },

  IVM_parole: { act: "IV", title: "La parole de la porte", place: "salveze",
    text: [
      { if: { is: { ivm_charte: "lire" } }, text: "« Devant le peuple, répète-t-elle. La reine voulait cela. Elle n'a pas pu. » Elle hoche la tête lentement." },
      { if: { is: { ivm_charte: "rendre" } }, text: "« À nous, répète-t-elle. Pour qu'on la cache encore trois siècles ? » Elle rit, d'un petit rire sec. « Nous verrons si tu le penses encore là-bas. »" },
      { if: { is: { ivm_charte: "doute" } }, text: "« Bien, dit-elle. Ceux qui savent déjà, je m'en méfie. »" },
      { if: { is: { ivm_charte: "silence" } }, text: "Elle attend. Tu te tais. Elle sourit, et c'est la première fois que tu la vois sourire tout à fait. « Voilà une réponse que je comprends. »" },
      "Elle se penche vers toi, si près que tu sens l'odeur de fumée et de lin de son châle. Les barques, derrière, se sont tues. Elle dit, à voix basse, une phrase de comptine des marais : « {{oreille#ivm_parole|L'eau s'en va, la reine dort, ne la réveille pas avant l'aube|L'eau s'en va, la reine attend ; dis à la porte : je rends ce qui fut pris, et frappe trois fois sur la pierre qui chante}}. »",
      "Puis elle se redresse. « Les barques iront devant toi dans les passes. Elles connaissent les fonds. À la tour, elles s'arrêteront. Ce qui est dedans t'attend, toi. »",
      { with: "lison", text: "Lison s'est accroupie à côté du coffre de sa grand-mère, la tête contre son genou, comme une enfant. La vieille femme pose la main sur ses cheveux." },
    ],
    fx: { flag: "basse:taiseurs", fac: { taiseurs: 5 }, ep: ["seance", 1500] },
    choices: [
      { label: "« Redites-la-moi. Je n'ai pas tout entendu. »", hide: { voile: "ivm_parole" }, fx: { devoile: "ivm_parole" }, to: "IVM_parole_redite" },
      { back: "IVM_preparatifs" },
    ] },

  IVM_parole_redite: { act: "IV", title: "La parole, en clair", place: "salveze",
    text: [
      "Mère Ancolie soupire. « Les jeunes n'écoutent plus qu'avec leurs oreilles. » Elle répète, lentement, et cette fois tu entends la seconde phrase sous la première, comme une voix sous l'eau : *je rends ce qui fut pris*, et les trois coups sur la pierre qui chante.",
      "« Ne l'écris pas, dit-elle. Ce qui est écrit, la Banque le lit. »",
    ],
    choices: [{ back: "IVM_preparatifs" }] },
});

// ==================================================================== the Register read
Object.assign(P, {
  IVM_registre: { act: "IV", title: "Le Registre de la Muette", place: "salveze",
    text: [
      "Les feuillets sont écrits dans une langue morte depuis trois siècles : celle des signes de la reine, notés par ses secrétaires en petits dessins à l'encre brune, mains, doigts, bouches fermées, et en vieux salvézan entre les lignes. Pour lire le témoignage d'Ysaure, il faut quelqu'un qui connaisse les deux, et il faut assez de feuillets pour que la phrase tienne d'un bord à l'autre.",
      { if: { relics: { min: 3 } }, text: "Tu en as assez. La phrase tient.", else: "Il t'en manque. Tant que tu as moins de trois feuillets, les signes ne font que des morceaux de phrases." },
    ],
    choices: [
      { label: "Le porter à Mère Ancolie, sous l'auvent du hangar à sel", if: { relics: { min: 3 } }, why: "Il faut au moins trois feuillets.", hide: { not: { seen: "IVM_ancolie" } }, to: "IVM_registre_ancolie" },
      { label: "Le porter à Maître Vauquelin, aux Archives", if: { relics: { min: 3 } }, why: "Il faut au moins trois feuillets.", hide: { not: { seen: "IVM_vauquelin" } }, to: "IVM_registre_vauquelin" },
      { label: "Demander à Frère Gildas de le lire", who: "gildas", if: { relics: { min: 3 } }, why: "Il faut au moins trois feuillets.", to: "IVM_registre_gildas" },
      { label: "Chercher qui peut le lire : les Archives, ou les Taiseurs", hide: { any: [{ seen: "IVM_ancolie" }, { seen: "IVM_vauquelin" }] }, back: "IVM_preparatifs" },
      { back: "IVM_preparatifs" },
    ] },

  IVM_registre_ancolie: { act: "IV", title: "Les doigts sur les feuillets", place: "salveze",
    text: [
      "Mère Ancolie est aveugle. Ses doigts lisent pour elle. Les secrétaires de la reine traçaient les signes en appuyant si fort sur le vélin que le trait l'a creusé ; trois siècles plus tard, il reste un sillon sous le doigt. Elle passe la pulpe de l'index sur chaque ligne, lentement, et elle dit à voix haute ce qu'elle lit.",
      "« Ma grand-mère m'a appris à lire comme ça, dit-elle sans s'arrêter. Sa grand-mère à elle avait appris à la cour. Personne d'autre ne le sait plus. » Son doigt s'arrête sur un signe. « Toi, tu le sauras. »",
    ],
    fx: { conf: { lison: 3 } },
    choices: [{ label: "Écouter", to: "IVM_registre_lecture" }] },

  IVM_registre_vauquelin: { act: "IV", title: "Sur le pupitre de Vauquelin", place: "salveze",
    text: [
      "Vauquelin ferme la porte des Archives à clé, met ses lunettes sur son nez pour une fois, et allume trois chandelles. Quand tu poses les feuillets sur son pupitre, il les regarde sans y toucher, comme on regarde un enfant qui dort.",
      "Il sort d'un tiroir un vieux cahier relié de vert : un lexique des signes de la cour, compilé par un de ses prédécesseurs. « Il dort dans ce tiroir depuis cent ans, dit-il. {{oreille#ivm_vauq_lexique|Je l'ai trouvé par hasard, en classant|Je le lis tous les soirs depuis trente ans, pour le jour où quelqu'un m'apporterait cela}}. »",
      "Il lit lentement, le doigt sur le lexique, l'autre main au-dessus du vélin, sans le toucher.",
    ],
    choices: [{ label: "Écouter", to: "IVM_registre_lecture" }] },

  IVM_registre_gildas: { act: "IV", title: "Le copiste", place: "salveze", with: "gildas",
    text: [
      "Frère Gildas pose les feuillets à plat, dans l'ordre, et se lave les mains dans la cuvette avant de les toucher. Il lit les signes comme il les a appris au Mont, dans la salle des voix, à vingt ans : sans hésiter, à mi-voix, d'une voix égale.",
      { if: { has: "gildas:demasque" }, text: "Au milieu du deuxième feuillet, il s'arrête. Le signe sous son doigt est celui de *chute*. Il le dit, et reprend." },
    ],
    choices: [{ label: "Écouter", to: "IVM_registre_lecture" }] },

  IVM_registre_lecture: { act: "IV", title: "Le témoignage de la reine", place: "salveze",
    text: [
      "*« Moi, Ysaure, qu'on dit muette, je témoigne par les mains de mes secrétaires, parce que les Comptoirs m'ont pris la langue la nuit des Comptoirs. Les hommes qui me l'ont prise portaient les couleurs des maisons {{loupe#ivm_reg_maisons|de la ville|Marrel, Delisle, Fourcaud et Vernier, et le premier à tenir le couteau fut l'aîné des Marrel, de sa main}}. »*",
      "*« J'ai signé la Charte des Hautes-Eaux de mon sang et de ma cire. Les terres que les familles des marais ont prises à la mer sont à elles et à leurs enfants. Tout acte qui dira autrement est faux. Les actes de propriété que les Comptoirs montreront au duc {{loupe#ivm_reg_actes|sont de leur main|ont été écrits la nuit même par le clerc Delisle sur des peaux grattées, et chacun porte, sous l'encre neuve, l'ancien texte d'un bail de pêche}}. »*",
      "*« Je ne demande pas vengeance. Je demande qu'on lise. »*",
      "La voix qui lit s'arrête. Il reste la dernière ligne, d'une encre plus pâle, ajoutée d'une autre main : *{{loupe#ivm_reg_vasse|Fait à Sorne, par Aymeric Vasse, chancelier|Fait à Sorne par Aymeric Vasse, qui a tenu la main de la reine pendant qu'on la soignait, et qui a juré de se taire jusqu'à ce qu'on puisse l'entendre}}*.",
    ],
    fx: { flag: "registre:lu", ep: ["histoire", 3000] },
    choices: [{ label: "Replier les feuillets", to: "IVM_registre_fin" }] },

  IVM_registre_fin: { act: "IV", title: "Ce que dit le Registre", place: "salveze",
    text: [
      "Un long silence. Tu replies les feuillets dans leur toile cirée, un par un, et tes mains tremblent un peu, ce qui t'étonne.",
      { after: "voile:ivm_reg_actes", text: "Les actes de propriété de la moitié du delta sont des baux de pêche grattés. Il suffit d'une loupe pour le voir, et d'une Charte pour le dire." },
      { with: "lison", text: "Lison s'est détournée vers le mur. Quand elle revient, elle a les yeux secs et la mâchoire serrée. « Trois cents ans, dit-elle. Pour qu'on lise. »" },
      { with: "tibere", text: "Tibère se racle la gorge. « Les Delisle, dit-il. Déjà. » Il n'ajoute rien." },
      { with: "fauvette", text: "Fauvette a écouté jusqu'au bout sans bouger, ce qui est rare. « On lui a coupé la langue, dit-elle, et elle a quand même parlé. » Elle hoche la tête, comme si elle notait la chose pour plus tard." },
      { if: { has: "prevot:demasque" }, text: "Haumont Delisle descend du clerc qui a gratté les peaux. Trois siècles plus tard, il vend la ville avec la même main." },
    ],
    choices: [{ back: "IVM_preparatifs" }] },
});

// ==================================================================== the provost, one last time
Object.assign(P, {
  IVM_prevot: { act: "IV", title: "La nuit du prévôt", place: "salveze",
    text: [
      "Le deuxième jour, un crieur du Conseil passe dans les rues avec son tambour. *Par ordre du prévôt, la nuit de l'équinoxe, la garde de la ville se portera tout entière au port, pour empêcher le pillage de la mer par les gens sans aveu.* Le tambour reprend. Les gens haussent les épaules : le Conseil a toujours aimé les mots longs.",
      { if: { has: "prevot:demasque" }, text: "Toi, tu sais lire un ordre du prévôt. Haumont Delisle vide les remparts la nuit où toute la ville regardera la mer. Amaury de Sauveterre n'a pas quitté Salvèze. À dix lieues au nord, sur la route d'Aveline, les feux d'un camp brillent chaque soir un peu plus près.", else: "Du prévôt, tu sais peu de chose. Tu sais qu'un sergent t'a parlé, ou aurait pu te parler, d'une porte des Sauniers laissée à des inconnus. Tu sais que l'envoyé d'Aveline n'a pas quitté Salvèze. Tu sais compter les feux, le soir, sur la route du nord." },
      "Si on le laisse faire, la nuit de la Grande Basse sera aussi celle de la trahison. Pendant que tu chercheras la Charte sous la mer, Salvèze ouvrira ses portes au duc.",
      { if: { has: "ivm:scelle_rompu" }, text: "Le même jour, deux sergents du prévôt passent aux Archives : au cabinet des instruments, un scellé a été rompu. Maître Vauquelin leur répond qu'il ne sait rien, et il garde les yeux sur son inventaire." },
      { if: { has: "ivm:scelle_propre" }, text: "Le même jour, deux sergents du prévôt passent aux Archives, vérifient les scellés du cabinet des instruments un par un, les trouvent intacts, et repartent sans regarder dans les vitrines." },
      { with: "tibere", text: "Tibère a écouté le tambour s'éloigner. « J'ai monté la garde à la porte des Sauniers pendant six ans, dit-il. Le treuil de la herse, le capitaine, les rondes. » Il te regarde. « {{oreille#ivm_tibere_porte|Je connais la maison|Je connais la maison, et le capitaine Grelot me doit encore vingt ducats de dés, et la vie}}. »" },
      { with: "fauvette", text: "Fauvette, sur le rebord de la fenêtre, se ronge l'ongle du pouce. « Une herse, ça se coince. Avec un clou au bon endroit. »" },
    ],
    choices: [
      { label: "Tenter quelque chose cette nuit", to: "IVM_prevot_plan" },
      { label: "Pas le temps : Sorne d'abord", fx: { flag: "ivm:prevot_laisse" }, back: "IVM_preparatifs" },
    ] },

  IVM_prevot_plan: { act: "IV", title: "La porte des Sauniers", place: "salveze",
    text: [
      "La porte des Sauniers est la seule porte de terre de Salvèze : deux tours rondes, une herse, un pont-levis sur le fossé, et derrière, la route d'Aveline. Celui qui la tient tient la ville. Trois façons d'empêcher qu'on l'ouvre : retourner celui qui la commande, rendre la herse impossible à lever, ou prendre au prévôt la preuve de l'ordre qu'il a donné.",
      "Une seule nuit pour essayer, avant de partir. Tu le sais en le pensant : ce sera difficile.",
    ],
    choices: [
      { label: "Parler au capitaine de la porte", fx: { flag: "ivm:prevot_tente" }, to: "IVM_grelot" },
      { label: "Saboter le treuil de la herse", fx: { flag: "ivm:prevot_tente" }, to: "IVM_treuil" },
      { label: "Prendre l'ordre écrit chez le secrétaire du prévôt", fx: { flag: "ivm:prevot_tente" }, to: "IVM_maclou" },
      { back: "IVM_preparatifs" },
    ] },

  IVM_grelot: { act: "IV", title: "Le capitaine Grelot", place: "salveze", takes: "night",
    text: [
      "Le capitaine Gildebert Grelot boit seul dans la salle de garde de la tour ouest, devant un feu de tourbe. C'est un homme carré, grisonnant, avec un ventre de sergent et des yeux de chien battu. Sur la table, à côté du pichet, une feuille pliée en quatre, cachetée de cire verte.",
      "« L'ordre est l'ordre, dit-il. La garde au port, la nuit de l'équinoxe. La porte restera fermée, avec mes douze hommes. » Il remplit son gobelet. « {{oreille#ivm_grelot|Douze hommes, c'est assez pour une porte fermée|On m'a dit de les mettre aux remparts de l'est, et de laisser la porte à des gens qui montreront un sceau, et j'ai dit oui parce que j'ai quatre enfants}}. »",
      { with: "tibere", text: "Tibère s'assied en face de lui sans y être invité. « Gildebert. » Le capitaine lève les yeux, et blêmit, puis rit. « Gaucelm. Je te croyais mort sous une table. » « Presque », dit Tibère." },
    ],
    choices: [
      { label: "« Des gens qui montreront un sceau. Le sceau d'Aveline, capitaine. »", hide: { not: { voile: "ivm_grelot" } }, test: { dom: "social", diff: -10, label: "Retourner le capitaine", help: [{ with: "tibere", v: 20 }, { if: { has: "prevot:demasque" }, v: 15 }, { if: { has: "registre:lu" }, v: 5 }, { if: { has: "ivm:porte_soupcon" }, v: 10 }] },
        win: { to: "IVM_prevot_dejoue" }, lose: { to: "IVM_prevot_echec" } },
      { label: "Le convaincre que le prévôt vend la ville (Social)", hide: { voile: "ivm_grelot" }, test: { dom: "social", diff: -30, label: "Retourner le capitaine", help: [{ with: "tibere", v: 20 }, { if: { has: "prevot:demasque" }, v: 15 }, { if: { has: "ivm:porte_soupcon" }, v: 10 }] },
        win: { to: "IVM_prevot_dejoue" }, lose: { to: "IVM_prevot_echec" } },
      { label: "Laisser Tibère lui rappeler sa dette", who: "tibere", hide: { not: { voile: "ivm_tibere_porte" } }, fx: { conf: { tibere: 10 } }, to: "IVM_prevot_dejoue" },
    ] },

  IVM_treuil: { act: "IV", title: "Le treuil de la herse", place: "salveze", takes: "night",
    text: [
      "Le treuil est dans la chambre haute de la tour est : un grand tambour de chêne, deux roues à rayons, une chaîne grasse qui descend dans le noir jusqu'à la herse. Un garde dort sur un banc, un autre fait les cent pas sur le chemin de ronde.",
      "L'axe du tambour tourne dans deux coussinets de bronze. Le coussinet de gauche {{pie#ivm_coussinet|est neuf, graissé, solide|est fendu, et un coin de fer enfoncé dans la fente bloquera l'axe pour une journée entière}}.",
      { with: "fauvette", text: "Fauvette est déjà sous le tambour, couchée sur le dos, et tâte l'axe des doigts. Elle te fait signe : deux doigts, puis un poing. Deux gardes. Puis elle sourit." },
      { if: { has: "ivm:eq_gouttieres" }, text: "Deux enfants de la Reine attendent sur le toit de la tour, prêts à descendre par la cheminée s'il faut faire diversion." },
    ],
    choices: [
      { label: "Enfoncer un coin de fer dans la fente du coussinet", hide: { not: { voile: "ivm_coussinet" } }, test: { dom: "discretion", diff: -10, label: "Un coin sans bruit", help: [{ with: "fauvette", v: 20 }, { if: { has: "ivm:eq_gouttieres" }, v: 10 }] },
        win: { to: "IVM_prevot_dejoue" }, lose: { to: "IVM_treuil_combat" } },
      { label: "Scier la chaîne à la lime (Discrétion)", test: { dom: "discretion", diff: -30, label: "Une chaîne de herse", help: [{ with: "fauvette", v: 20 }, { if: { has: "ivm:eq_gouttieres" }, v: 10 }, { if: { item: "crochets" }, v: 5 }] },
        win: { to: "IVM_prevot_dejoue" }, lose: { to: "IVM_treuil_combat" } },
      { label: "Laisser Fauvette faire", who: "fauvette", test: { dom: "discretion", diff: -20, label: "Fauvette sous le tambour", help: [{ with: "fauvette", v: 20 }] },
        win: { fx: { conf: { fauvette: 10 } }, to: "IVM_prevot_dejoue" }, lose: { to: "IVM_treuil_combat" } },
    ] },

  IVM_treuil_combat: { act: "IV", title: "La chambre de la herse", place: "salveze",
    text: [
      "Une lime grince, un outil tombe. Le garde du banc se dresse en criant, celui du chemin de ronde arrive en courant, et un troisième monte l'escalier. Il faut les faire taire avant que la cloche de la tour réveille le quartier.",
    ],
    choices: [
      { label: "Les faire taire", fight: { title: "La chambre de la herse", enemies: [{ id: "ivm_garde", n: 3 }],
        win: { fx: { ep: ["perso", 800] }, to: "IVM_treuil_fin" },
        lose: { fx: { pv: -6 }, to: "IVM_prevot_echec" },
        flee: { label: "Descendre par la chaîne dans le fossé", dom: "discretion", diff: -10, to: "IVM_prevot_echec" } } },
    ] },

  IVM_treuil_fin: { act: "IV", title: "La herse bloquée", place: "salveze",
    text: [
      "Les trois gardes sont ligotés dans un coin, bâillonnés avec leurs propres ceintures. Tu as tout le temps : tu démontes la goupille du tambour, tu jettes la clavette dans le fossé, tu enfonces un coin dans le coussinet à coups de talon. Il faudra un forgeron et une demi-journée pour faire tourner le tambour.",
      "La herse restera baissée. Le prévôt pourra vider les remparts, sa porte restera fermée.",
    ],
    choices: [{ label: "Repartir avant la relève", to: "IVM_prevot_dejoue" }] },

  IVM_maclou: { act: "IV", title: "Le cabinet du secrétaire", place: "salveze", takes: "night",
    text: [
      "Le secrétaire du prévôt, le clerc Anséric, travaille tard dans un cabinet au rez-de-chaussée de l'hôtel Delisle, derrière une fenêtre à petits carreaux qui donne sur une cour de service. Il recopie des ordres à la chandelle, les scelle, les range dans une boîte de fer. À minuit, il souffle sa chandelle et monte se coucher. La boîte reste sur la table.",
      "Tu entres par la fenêtre. Dans la boîte, une vingtaine d'ordres de garde, tous pareils, tous scellés de cire verte. Un seul porte, en marge, un petit trait de plume.",
      "Tu le décachettes. *{{loupe#ivm_ordre|Ordre au capitaine de la porte des Sauniers : la garde ira au port, la porte restera close|Ordre au capitaine de la porte des Sauniers : à l'heure de la basse mer, laissez passer ceux qui montreront le sceau à la tour d'Aveline. Delisle, de sa main}}.*",
    ],
    choices: [
      { label: "Prendre l'ordre et le porter au capitaine de la porte", hide: { not: { voile: "ivm_ordre" } }, fx: { item: "ivm_ordre", ep: ["perso", 600] }, to: "IVM_prevot_dejoue" },
      { label: "Prendre toute la boîte et chercher plus tard (Savoir)", hide: { voile: "ivm_ordre" }, test: { dom: "savoir", diff: -20, label: "Lire un ordre à double fond", help: [{ with: "gildas", v: 15 }, { if: { has: "metier:lire" }, v: 15 }] },
        win: { fx: { item: "ivm_ordre" }, to: "IVM_prevot_dejoue" }, lose: { to: "IVM_prevot_echec" } },
      { label: "Repartir les mains vides", to: "IVM_prevot_echec" },
    ] },

  IVM_prevot_dejoue: { act: "IV", title: "La porte restera close", place: "salveze",
    text: [
      { if: { has: "ivm:prevot_tente" }, text: "À l'aube, tu repasses devant la porte des Sauniers. Rien n'a changé : les deux tours, la herse baissée, un garde qui bâille. Rien n'a changé, et c'est tout ce que tu voulais." },
      { if: { item: "ivm_ordre" }, text: "Le capitaine Grelot a lu l'ordre deux fois, à la lumière de sa tourbe, la bouche ouverte. Puis il l'a plié, glissé dans son pourpoint, et il a dit : « Mes douze hommes restent ici. Et je garde ça pour le Conseil. »" },
      { if: { seen: "IVM_grelot" }, text: "Grelot s'est levé, a vidé son gobelet dans le feu, et a mis son casque. « Mes hommes resteront à la porte, dit-il. On dira que j'étais saoul et que j'ai mal lu. Ce ne sera pas tout à fait faux. »" },
      { if: { has: "ivm:prevot_sceau" }, text: "Le capitaine Grelot a tenu la matrice de cire sous sa lampe, longtemps. « Avec ça, on scelle n'importe quel ordre au nom du prévôt, dit-il. Et on prend des greniers pendant que la ville a faim. » Il l'a mise dans sa poche. « Mes hommes restent ici. »" },
      { if: { seen: "IVM_treuil_fin" }, text: "Au matin, le forgeron du Guet monte à la tour est avec ses outils. Il en redescend au soir, en jurant que la pièce manque et qu'il faut la faire venir de la Monnaie." },
      "Quelque part dans l'hôtel Delisle, un vieil homme apprendra demain que sa porte ne s'ouvrira pas. L'envoyé d'Aveline l'apprendra peu après, et ses feux, sur la route du nord, attendront.",
    ],
    fx: { flag: "prevot:dejoue", fac: { conseil: 10 }, ep: ["seance", 2500] },
    choices: [{ back: "IVM_preparatifs" }] },

  IVM_prevot_echec: { act: "IV", title: "La porte du prévôt", place: "salveze",
    text: [
      "Tu rentres à l'aube, les mains vides, avec le goût de fer d'une nuit ratée. La porte des Sauniers est toujours là, bien gardée, bien graissée, prête à s'ouvrir.",
      "Il te reste une chose à faire, et tu la fais : tu écris trois billets, de ta plus belle main, et tu les fais porter à trois maisons du Conseil qui n'aiment pas les Delisle. *La nuit de l'équinoxe, regardez la porte des Sauniers, pas la mer.* Peut-être qu'ils les liront. Peut-être qu'ils les brûleront.",
      { with: "tibere", text: "Tibère porte lui-même le troisième billet. Il revient une heure plus tard. « Remis en main propre, dit-il. Le vieux Vernier m'a regardé comme une crotte de chien. Mais il a lu. »" },
    ],
    fx: { flag: "ivm:alerte" },
    choices: [{ back: "IVM_preparatifs" }] },

  IVM_prevot_deja: { act: "IV", title: "L'envoyé s'en va", place: "salveze",
    text: [
      "Le prévôt Delisle est gardé dans ses appartements de l'hôtel de ville, sous la garde de six arbalétriers du Conseil, en attendant que les Comptoirs décident ce qu'on fait d'un prévôt. La porte des Sauniers a un nouveau capitaine et une herse neuve.",
      "Amaury de Sauveterre quitte la ville le deuxième jour, à cheval, par cette même porte, avec ses deux valets et sa malle. Il s'arrête en te voyant sur le bord de la route, se penche sur l'encolure. « Vous m'avez coûté une ville, dit-il aimablement. Le duc en trouvera une autre. » Il rassemble ses rênes. « {{oreille#ivm_amaury|Sans rancune, croyez-le|Le duc veut toujours ses quatre millions à la Saint-Jean, et s'il ne les a pas, il viendra avec ses piques, porte ouverte ou fermée}}. »",
    ],
    fx: { ep: ["perso", 500] },
    choices: [{ back: "IVM_preparatifs" }] },
});

// ==================================================================== Corisande and Lothaire
Object.assign(P, {
  IVM_corisande: { act: "IV", title: "La galère de Corisande", place: "salveze",
    text: [
      "Le billet est écrit d'une petite écriture droite, sans fioriture : *Ce soir, au bassin de la Banque. C. M.* Au bassin, une galère de commerce attend, longue, noire et or, avec trente avirons et un pavillon au besant : *La Constance*. Corisande Marrel est assise sous le tendelet de poupe, dans un manteau de loutre, une chaufferette sous les pieds.",
      "« Nous partons la même nuit, dit-elle. Vous avec votre coque, moi avec la mienne. Nous avons un accord : l'or à la Banque, qui paiera le duc ; le Registre au feu, qui ne servirait qu'à des procès. » Elle tend la main vers un brasero, et la retire. « {{oreille#ivm_cori_accord|Je tiendrai ma parole, comme vous tiendrez la vôtre|Je tiendrai ma parole tant que la vôtre me servira, et j'ai mis douze arbalétriers à bord au cas où vous changeriez d'avis}}. »",
      { if: { has: "registre:lu" }, text: "« On me dit que vous l'avez fait lire. » Elle te regarde, et pour une fois elle a l'air d'une vieille femme. « {{oreille#ivm_cori_anthelme|Je ne crois pas aux histoires de couteau|J'ai toujours su qu'un Marrel avait tenu le couteau, ma grand-mère le disait en riant, et je n'ai jamais pu rire}}. »" },
      "« Vous pouvez encore changer d'avis, ajoute-t-elle. Je préfère le savoir maintenant que sur le sable. »",
    ],
    fx: { meet: "corisande" },
    choices: [
      { label: "« Notre accord tient. »", fx: { flag: "ivm:pacte_confirme", fac: { banque: 5 } }, to: "IVM_corisande_fin" },
      { label: "« Il ne tient plus. La Charte sera lue. »", fx: { unflag: "corisande:pacte", flag: "ivm:pacte_rompu", fac: { banque: -15 } }, to: "IVM_corisande_fin" },
      { label: "« Vos douze arbalétriers ne m'aident pas à vous croire. »", hide: { not: { voile: "ivm_cori_accord" } }, fx: { flag: "ivm:cori_arbaletes" }, to: "IVM_corisande_fin" },
    ] },

  IVM_corisande_fin: { act: "IV", title: "Le tendelet de poupe", place: "salveze",
    text: [
      { if: { has: "ivm:pacte_confirme" }, text: "Corisande hoche la tête une fois, sèchement, comme on signe. « Alors à Sorne. » Elle te tend une main sèche et froide, que tu serres." },
      { if: { has: "ivm:pacte_rompu" }, text: "Corisande reste immobile. Elle regarde l'eau du bassin, longtemps. « J'ai soixante-sept ans, dit-elle. J'ai vu tomber trois maisons, et je les ai achetées. » Elle se lève. « Alors à Sorne, et que la meilleure coque gagne. Vous pouvez descendre. Mes arbalétriers ont ordre de vous laisser passer ce soir. Demain, je ne promets rien. »" },
      { if: { has: "ivm:cori_arbaletes" }, text: "Elle sourit pour la première fois. « Lothaire disait que vous aviez de bonnes oreilles. » Elle fait un signe ; sur le pont, douze hommes en manteau noir déposent leurs arbalètes et les rangent dans un coffre. « Le coffre reste à bord. La clé, je la garde. Nous sommes quittes de franchise. »" },
    ],
    choices: [{ back: "IVM_preparatifs" }] },

  IVM_lothaire: { act: "IV", title: "Lothaire Brunel", place: "salveze",
    text: [
      { if: { has: "lothaire:allie" }, text: "Lothaire Brunel s'est caché dans un entrepôt de laine, rue des Foulons, depuis qu'il a choisi ton côté contre la Banque. Il t'a fait savoir où. Il sait que tu viendras." },
      { if: { all: [{ has: "lothaire:vaincu" }, { not: { has: "lothaire:allie" } }] }, text: "Lothaire Brunel est aux cachots de la Tour Ronde, depuis que tu l'as vaincu. Le geôlier te dit qu'il refuse le pain, qu'il veille toute la nuit, et qu'il répond aux gardes avant qu'ils aient parlé." },
      { if: { not: { any: [{ has: "lothaire:allie" }, { has: "lothaire:vaincu" }] } }, text: "Lothaire Brunel n'est nulle part et partout : dans le regard de Riwal, dans les cordes achetées au port, dans les plongeurs payés double. Un soir, il te fait dire qu'il t'attend sur le pont des Muets, à la cloche du couvre-feu." },
    ],
    choices: [
      { label: "L'entrepôt de la rue des Foulons", hide: { not: { has: "lothaire:allie" } }, to: "IVM_lothaire_allie" },
      { label: "Les cachots de la Tour Ronde", hide: { any: [{ has: "lothaire:allie" }, { not: { has: "lothaire:vaincu" } }] }, to: "IVM_lothaire_cachot" },
      { label: "Le pont des Muets, au couvre-feu", hide: { any: [{ has: "lothaire:allie" }, { has: "lothaire:vaincu" }] }, to: "IVM_lothaire_rival" },
      { back: "IVM_preparatifs" },
    ] },

  IVM_lothaire_allie: { act: "IV", title: "L'entrepôt de laine", place: "salveze",
    text: [
      "Il est assis sur une balle de laine brute, en manches de chemise, les gants gris posés à côté de lui. Ses mains nues sont blanches, fines, avec une cicatrice de corde en travers de la paume droite. Il reste assis.",
      "« La Banque part avec trois bateaux, dit-il. *La Constance*, deux chaloupes, quarante hommes, six plongeurs. Ils partiront une heure avant vous, par la passe du sud. » Il te regarde. « Vous pensez que je pourrais vous mentir. Vous avez raison. {{oreille#ivm_lot_vrai|Mais ce soir, non|Mais ce soir, non, parce que si la Banque trouve l'or sans moi, je suis un homme mort, et vous êtes la seule coque où je puisse monter}}. »",
      { with: "salome", if: { has: "salome:maiwenn" }, text: "Salomé est restée sur le seuil. Elle regarde la cicatrice dans la paume de Lothaire, et Lothaire referme la main. Le nom de Maïwenn reste dans les gorges. Il est dans l'entrepôt avec eux, aussi présent que la laine." },
      { if: { has: "taiseurs:serment" }, text: "« Vous pensez en deux couches, maintenant, dit-il avec une sorte d'admiration. J'entends celle du dessus. C'est fatigant. »" },
    ],
    choices: [
      { label: "Le prendre à bord", fx: { flag: "ivm:lothaire_bord" }, to: "IVM_lothaire_fin" },
      { label: "Lui dire de partir seul pour Sorne, sur une autre coque", fx: { flag: "ivm:lothaire_seul" }, to: "IVM_lothaire_fin" },
      { label: "« Salomé décidera. »", with: "salome", fx: { conf: { salome: 10 }, flag: "ivm:lothaire_salome" }, to: "IVM_lothaire_fin" },
    ] },

  IVM_lothaire_fin: { act: "IV", title: "Les gants gris", place: "salveze",
    text: [
      { if: { has: "ivm:lothaire_bord" }, text: "Il remet ses gants, un doigt après l'autre. « À la tombée du jour. Je serai à l'avant, où on pourra me surveiller. »" },
      { if: { has: "ivm:lothaire_seul" }, text: "Il remet ses gants, un doigt après l'autre. « Seul, alors. J'ai l'habitude. » Il sourit. « On se verra sur le sable. Ne me tournez pas le dos. »" },
      { if: { has: "ivm:lothaire_salome" }, with: "salome", text: "Salomé regarde Lothaire très longtemps. « À l'avant, dit-elle enfin. Les mains devant toi, où je les vois. Et tu ne plonges pas. Jamais. » Lothaire hoche la tête. Il garde son sérieux, pour une fois." },
    ],
    choices: [{ back: "IVM_preparatifs" }] },

  IVM_lothaire_cachot: { act: "IV", title: "Les cachots de la Tour Ronde", place: "salveze",
    text: [
      "La cellule est une niche de pierre où l'on tient assis, le dos courbé. Lothaire est assis contre le mur, les genoux sous le menton, sans ses gants. Il ouvre les yeux avant que la clé ait tourné.",
      "« Vous venez me dire adieu, dit-il. Et vous vous demandez si vous ne devriez pas me sortir de là. » Il sourit sans bouger. « Non, ne dites rien. Je l'entends. Vous pensez que je connais la Banque, ses bateaux, ses plongeurs. C'est vrai. Vous pensez que je vous trahirai. {{oreille#ivm_lot_cachot|C'est possible|C'est certain, si on me laisse le choix, et c'est pourquoi il ne faudra pas me le laisser}}. »",
    ],
    choices: [
      { label: "Le faire sortir, sous ta garde (20 ducats au geôlier)", fx: { gold: -400, flag: ["lothaire:allie", "ivm:lothaire_bord"] }, to: "IVM_lothaire_fin" },
      { label: "« Je ne vous laisserai pas le choix. » Le faire sortir enchaîné", hide: { not: { voile: "ivm_lot_cachot" } }, fx: { gold: -200, flag: ["ivm:lothaire_bord", "ivm:lothaire_enchaine"] }, to: "IVM_lothaire_fin" },
      { label: "Le laisser à sa niche", fx: { flag: "ivm:lothaire_cachot" }, back: "IVM_preparatifs" },
    ] },

  IVM_lothaire_rival: { act: "IV", title: "Le pont des Muets", place: "salveze", takes: "night",
    text: [
      "La cloche du couvre-feu finit de sonner quand il apparaît au milieu du pont, en manteau gris, les mains gantées sur le parapet. Le pont est désert. L'eau du canal passe dessous, noire, avec des reflets de lanternes de garde.",
      "« La Banque part avant vous, dit-il. Avec plus de monde. Je pourrais vous dire de rester chez vous. » Il penche la tête. « Vous pensez : pourquoi me le dit-il ? Parce que vous m'intéressez. Parce que vous entendez, comme moi, et que nous sommes deux dans cette ville. » Il se tourne vers l'eau. « {{oreille#ivm_lot_rival|Je vous retrouverai sur le sable|Corisande veut le Registre au feu, et moi je veux voir la reine ; nous ne voulons pas la même chose, elle et moi, depuis longtemps}}. »",
      { if: { has: "ivb:lothaire_libre" }, text: "« La dernière fois, ajoute-t-il, je vous ai laissé{e} dans mon cabinet, la clé tournée de mon côté. Vous en êtes sorti{e}. Je l'ai noté dans mon carnet, à l'encre violette. »" },
      { if: { has: "taiseurs:serment" }, text: "Il fronce les sourcils, agacé : il n'entend de toi que la couche du dessus, et il sait qu'il y en a une autre." },
    ],
    choices: [
      { label: "« Venez avec moi, alors. »", labels: [{ if: { has: "taiseurs:serment" }, label: "Ne rien dire, et lui tendre la main" }], hide: { not: { voile: "ivm_lot_rival" } }, test: { dom: "social", diff: -20, label: "Retourner Lothaire Brunel", help: [{ if: { has: "taiseurs:serment" }, v: 15 }, { if: { has: "registre:lu" }, v: 10 }] },
        win: { fx: { flag: ["lothaire:allie", "ivm:lothaire_bord"] }, to: "IVM_lothaire_fin" }, lose: { to: "IVM_lothaire_adieu" } },
      { label: "Le menacer", to: "IVM_lothaire_adieu" },
      { label: "Le laisser parler, et partir", to: "IVM_lothaire_adieu" },
    ] },

  IVM_lothaire_adieu: { act: "IV", title: "Le gant gris", place: "salveze",
    text: [
      "Lothaire rit doucement. « Non. » Il retire un de ses gants gris, le plie en deux, et le pose sur le parapet entre vous deux. « Pour que vous me reconnaissiez de loin. » Puis il s'en va vers l'île des Changeurs, sans se retourner.",
      "Le gant est en chevreau fin, doublé de soie. Dans le pouce, quelqu'un a cousu un petit papier plié. *{{loupe#ivm_gant|L. B., chercheur, au service de la Banque|À rendre à Salomé Brac, si je ne reviens pas : la corde de Maïwenn, je l'ai coupée de ce couteau}}*. Le couteau n'y est pas. Seulement le papier.",
    ],
    fx: { item: "ivm_gant", flag: "ivm:gant" },
    choices: [{ back: "IVM_preparatifs" }] },
});

// ==================================================================== the farewells
Object.assign(P, {
  IVM_lison: { act: "IV", title: "La barque de Lison", place: "salveze", with: "lison", takes: "night",
    text: [
      "Lison t'emmène sur sa barque par les petits canaux, ceux que les patrouilles évitent parce que les ponts y sont trop bas pour un casque. Elle rame debout à l'arrière, d'un seul aviron, sans bruit. Tu es assis{e} à l'avant, les genoux contre la poitrine, et la ville passe au-dessus de vous : des linges qui sèchent, une fenêtre allumée, un chat sur une corniche.",
      "« Quand j'étais petite, dit-elle, je croyais que Salvèze était bâtie sur l'eau pour que les gens des marais ne puissent pas y marcher. » Elle donne un coup d'aviron. « {{oreille#ivm_lison_ville|Je n'ai pas changé d'avis|J'ai changé d'avis le jour où tu m'as demandé de t'apprendre le nom des canaux, et je t'en veux un peu}}. »",
      "Sous le pont des Vanniers, elle laisse la barque dériver. L'eau clapote contre la pierre. « Ma grand-mère a dit que je devais choisir. » Elle s'assied sur le banc de nage, face à toi. « {{oreille#ivm_lison_choisi|J'ai choisi la mission, comme toujours|J'ai choisi depuis longtemps, et ce n'est pas la mission}}. »",
      { if: { has: "lison:loyale" }, text: "Tu sais déjà ce qu'elle a choisi. Elle l'a dit devant sa grand-mère, sur le débarcadère, les poings serrés. Elle te le redit quand même, plus bas, ici, sous le pont." },
      "Tu {{miroir#ivm_miroir_lison|l'écoutes, et tu penses à la marée de demain|l'écoutes, et tu penses que tu as peur de revenir de Sorne sans elle plus que de ne pas en revenir}}.",
    ],
    fx: { conf: { lison: 5 } },
    choices: [
      { label: "Prendre sa main", tendre: true, to: "IVM_lison_aube" },
      { label: "« Moi aussi. »", hide: { not: { voile: "ivm_lison_choisi" } }, to: "IVM_lison_aube" },
      { label: "Lui dire qu'il faut rentrer", fx: { flag: "ivm:lison_distance" }, to: "IVM_lison_aube" },
    ] },

  IVM_lison_aube: { act: "IV", title: "Sous le pont des Vanniers", place: "salveze", with: "lison",
    text: [
      { if: { not: { has: "ivm:lison_distance" } }, tendre: true, text: "Elle se tait. Elle pose son front contre le tien, et vous restez comme ça sous le pont, dans l'odeur d'eau froide et de pierre, jusqu'à ce que la barque touche la berge d'elle-même. Elle t'embrasse une fois, vite, comme on vole quelque chose, puis elle rit de toi parce que tu restes figé{e}.", else: "Elle hoche la tête et reprend l'aviron. Vous restez sous le pont un moment encore, sans parler, à écouter l'eau. Quand elle se remet à ramer, elle sifflote." },
      { if: { has: "ivm:lison_distance" }, text: "« Oui, dit-elle. Il faut rentrer. » Elle reprend l'aviron, rame un peu trop fort, et te mouille exprès en tournant au pont suivant." },
      "Vous rentrez à l'aube par le canal des Lanternes, devant la boutique d'Odeline. Lison regarde les trois marches propres. « C'est moi qui les balaie, dit-elle. Depuis l'automne. {{oreille#ivm_lison_marches|Ça m'occupe|Odeline m'avait gardée à dîner un soir, quand j'avais douze ans et que je m'étais perdue en ville}}. »",
    ],
    fx: { conf: { lison: 5 } },
    choices: [{ back: "IVM_preparatifs" }] },

  IVM_tibere: { act: "IV", title: "La rue des Dames", place: "salveze", with: "tibere",
    text: [
      "Tibère a mis son pourpoint du Guet, brossé, avec les boutons qui restent. Il s'est rasé. Il a coupé sa moustache, puis l'a regretté, et ça se voit. Dans la rue des Dames, devant l'atelier de couture, il s'arrête au milieu du pavé, planté là.",
      "« Elle ne voudra pas, dit-il. La dernière fois, elle m'a fermé la porte sur les doigts. » Il te montre son petit doigt, tordu. « {{oreille#ivm_tibere_doigt|C'était il y a longtemps|C'était le jour où j'ai mis en gage la machine à coudre de sa mère pour une partie de dés, et je l'ai perdue}}. »",
      { if: { has: "tibere:aveu" }, text: "Il a avoué ce qu'il faisait pour Lothaire Brunel, à l'acte des aveux, et ça ne lui a rien coûté de plus que ce qu'il avait déjà perdu. Ce qu'il va faire maintenant lui coûte davantage." },
      { if: { has: "ivb:tibere_rosalie" }, text: "« Elle m'a parlé, chez la Lesueur, dit-il. Trois phrases. Je les ai apprises par cœur, comme un mot de passe. » Il les garde pour lui." },
    ],
    choices: [
      { label: "Frapper à sa place", to: "IVM_tibere_rosalie" },
      { label: "« La machine à coudre. Rachète-la-lui. »", hide: { not: { voile: "ivm_tibere_doigt" } }, fx: { gold: -300, flag: "ivm:machine" }, to: "IVM_tibere_rosalie" },
      { label: "Le pousser vers la porte", to: "IVM_tibere_rosalie" },
    ] },

  IVM_tibere_rosalie: { act: "IV", title: "Rosalie Gaucelm", place: "salveze", with: "tibere",
    text: [
      "La porte s'ouvre sur une pièce basse pleine de tissu, de lampes et de jeunes filles penchées. Rosalie est la plus petite, avec les cheveux de son père et des épingles plein la bouche. Elle voit son père, retire les épingles une à une, les plante dans la pelote à son poignet. Elle laisse la porte ouverte.",
      { if: { has: "iv:rosalie_sauvee" }, text: "Rosalie dort toujours à la pension de Clarmonde Pujol, sous le toit, et elle vient coudre ici le jour. Le seuil de l'atelier est vide : plus de garde aux gants gris pour la ramener le soir." },
      { if: { has: "ivm:machine" }, text: "Derrière Tibère, deux portefaix posent sur le seuil une machine à coudre en fonte noire, avec un pédalier doré. Rosalie la regarde. Elle pose la main sur le volant, le fait tourner d'un quart de tour. Il grince, comme avant." },
      "« Je pars en mer demain, dit Tibère. Pour une affaire. Une bonne affaire, une fois. » Il tient son chapeau à deux mains. « {{oreille#ivm_tibere_fille|Je voulais te le dire, voilà|Je voulais que tu le saches, au cas où, et que tu saches que je ne joue plus depuis cent quarante jours, je les ai comptés}}. »",
      { if: { has: "iv:rosalie_message" }, with: "tibere", text: "« On m'a dit que tu pensais à moi tous les jours », dit Rosalie. Tibère tourne la tête vers toi, puis vers sa fille, et il ne dit pas non." },
      "Rosalie le regarde longtemps. « {{oreille#ivm_rosalie|Bon voyage, alors|Reviens, et je te laisserai me raconter, et je verrai si je te crois}} », dit-elle. Puis elle retourne à son ouvrage. La porte reste ouverte jusqu'à ce que vous soyez au bout de la rue.",
    ],
    fx: { meet: "rosalie", conf: { tibere: 15 }, flag: "ivm:rosalie" },
    choices: [{ back: "IVM_preparatifs" }] },

  IVM_rosalie_seul: { act: "IV", title: "L'atelier de la rue des Dames", place: "salveze", without: "tibere",
    text: [
      "Tu trouves Rosalie Gaucelm à l'atelier de la rue des Dames, penchée sur un ourlet sous une lampe. Elle a les cheveux de son père, la mâchoire aussi. Quand tu dis son nom à lui, elle pique son aiguille dans la pelote et attend.",
      { if: { any: [{ has: "tibere:vendu" }, { has: "tibere:parti" }] }, text: "Tu lui dis ce que tu peux de son père : qu'il a fait des choses bonnes et des choses mauvaises, et que les bonnes l'emportent en nombre. Tu espères que c'est vrai.", else: "Tu lui dis que son père a été un compagnon fidèle, à sa façon, et qu'il parlait d'elle." },
      { if: { has: "iv:rosalie_sauvee" }, text: "Elle dort toujours à la pension de Clarmonde Pujol, et elle coud ici le jour. Plus personne ne garde le seuil." },
      { if: { has: "iv:rosalie_message" }, text: "« La dernière fois, vous m'avez dit qu'il pensait à moi tous les jours, dit-elle. J'y ai pensé tous les jours, moi aussi. »" },
      "« {{oreille#ivm_rosalie_seule|Il parle de tout le monde quand il a bu|Il parlait de moi, vraiment, et j'aurais voulu l'entendre une fois}} », dit-elle. Elle reprend son aiguille. « Merci d'être passé{e}. »",
    ],
    fx: { meet: "rosalie" },
    choices: [{ back: "IVM_preparatifs" }] },

  IVM_salome: { act: "IV", title: "Le quai des gabares", place: "salveze", with: "salome",
    text: [
      "Salomé est assise sur une bitte d'amarrage, au bout du quai, et regarde vers la mer, cachée d'ici : on voit seulement l'embouchure de la Salve, grise, et le ciel au-dessus, plus clair. Elle a son couteau à la main et un morceau de bois, et ses mains restent immobiles.",
      "« À Sorne, dit-elle, il faudra quelqu'un pour descendre dans les maisons noyées. Dans l'eau qui reste au fond des salles. » Elle tourne le bois entre ses doigts. « Riwal a des plongeurs. Les Taiseurs aussi. » Elle te regarde. « {{oreille#ivm_salome_plonge|Je resterai à bord, c'est mieux|Je ne sais pas si je pourrai rester sur le pont à regarder l'eau se refermer sur quelqu'un d'autre, une deuxième fois}}. »",
      { if: { has: "salome:maiwenn" }, text: "« Maïwenn plongeait mieux que moi, dit-elle. Elle n'a pas été trahie par l'eau. » Elle ferme son couteau. Le claquement de la lame fait lever une mouette." },
      { if: { has: "ivb:coffret" }, with: "salome", text: "Le coffret de *La Pimpante* est posé à ses pieds, sur le quai, vide, avec la corde coupée toujours nouée à la poignée. De temps en temps, elle pose la main sur le nœud." },
      { if: { has: "ivb:salome_epargne" }, with: "salome", text: "« J'ai baissé le coutelas, dans son cabinet, dit-elle. Je croyais que ça me laisserait vide. Je dors, depuis. La première nuit, j'ai dormi douze heures. »" },
      { if: { has: "ivm:gant" }, text: "Tu as dans ta poche un gant gris, et dans le gant un papier. Tu le sens contre ta cuisse pendant toute la conversation." },
    ],
    choices: [
      { label: "« Alors plonge. Je tiendrai ta corde. »", hide: { not: { voile: "ivm_salome_plonge" } }, fx: { flag: "salome:plonge", conf: { salome: 15 } }, to: "IVM_salome_corde" },
      { label: "Lui donner le papier du gant gris", hide: { any: [{ not: { has: "ivm:gant" } }, { not: { voile: "ivm_gant" } }] }, fx: { flag: "salome:maiwenn", drop: "ivm_gant", conf: { salome: 10 } }, to: "IVM_salome_gant" },
      { label: "Rester à côté d'elle sans rien dire", fx: { conf: { salome: 5 } }, back: "IVM_preparatifs" },
    ] },

  IVM_salome_corde: { act: "IV", title: "La corde de Salomé", place: "salveze", with: "salome",
    text: [
      "Salomé te regarde, puis elle rit, un rire bref, surpris. Elle se lève, descend à son bord, et revient avec un rouleau de corde blanche, neuve, roulée serrée. Elle te le met dans les bras.",
      "« Tu la vérifieras toi-même, dit-elle. Chaque toise. Avant que je descende. » Elle te tient le poignet une seconde. « {{oreille|Et tu ne la lâches pas|Et si je ne tire pas trois fois, tu tires, même si je me débats, même si je te maudis}}. »",
    ],
    fx: { item: "ivm_corde_salome" },
    choices: [{ back: "IVM_preparatifs" }] },

  IVM_salome_gant: { act: "IV", title: "Le papier du gant", place: "salveze", with: "salome",
    text: [
      "Salomé lit le papier. Elle lit lentement. Elle le relit. Puis elle le plie, le met dans sa chemise, contre sa peau, et regarde de nouveau la mer.",
      "« Je le savais, dit-elle. Depuis trois ans. » Sa voix est égale. « Maintenant, je n'ai plus besoin de le savoir seule. »",
      "Elle reste assise. Tu restes à côté. La marée monte dans le port, et l'eau touche les marches une à une.",
    ],
    choices: [{ back: "IVM_preparatifs" }] },

  IVM_fauvette: { act: "IV", title: "Les toits", place: "salveze", with: "fauvette", takes: "evening",
    text: [
      "Fauvette t'emmène sur le toit le plus haut des Gouttières, une terrasse de plomb entre quatre cheminées, d'où l'on voit toute la ville : le Beffroi, l'île des Changeurs, le port, et la mer au bout, une ligne grise sous un ciel rose. Elle s'assied au bord, les pieds dans le vide. Toi, un peu en retrait.",
      "« Je n'ai jamais vu la mer de près, dit-elle. Ni le large. » Elle lance un caillou, qui tombe longtemps. « {{oreille#ivm_fauvette_mer|Ça ne doit pas être grand-chose|J'ai peur de l'eau, et je n'ai jamais osé le dire à personne parce qu'on ne prend pas les peureux}}. »",
      "Puis, sans transition, elle sort de sa veste un morceau d'ardoise et un bout de craie. « Écris mon nom. » Tu l'écris : *FAUVETTE*. Elle le regarde longtemps, en bougeant les lèvres. « Et l'autre. Celui d'avant. Celui que je ne connais pas. » Tu la regardes. Elle hausse les épaules. « Écris *Fauvette*, alors. Deux fois. Pour quand je saurai lire. »",
      { if: { has: "fauvette:temoin" }, text: "Elle a dit ce qu'elle a vu la nuit des Lanternes : un moine sortant de la boutique à minuit. Elle a cessé d'en parler. Ce soir, elle regarde le Beffroi en tenant l'ardoise contre elle." },
    ],
    fx: { conf: { fauvette: 10 } },
    choices: [
      { label: "« Tu resteras près de moi sur le bateau. »", hide: { not: { voile: "ivm_fauvette_mer" } }, fx: { conf: { fauvette: 5 }, flag: "ivm:fauvette_mer" }, to: "IVM_fauvette_ardoise" },
      { label: "Lui apprendre la première lettre", to: "IVM_fauvette_ardoise" },
    ] },

  IVM_fauvette_ardoise: { act: "IV", title: "L'ardoise", place: "salveze", with: "fauvette",
    text: [
      "Tu lui prends la main, tu fermes ses doigts sur la craie, et tu traces un F avec elle, lentement. Elle se laisse faire, ce qui ne lui ressemble pas. La deuxième fois, elle le trace seule, de travers. La troisième, droit.",
      { if: { has: "ivm:fauvette_mer" }, text: "« Près de toi, dit-elle. D'accord. » Elle range l'ardoise dans sa veste, contre sa poitrine. « Mais si je vomis, tu ne le racontes à personne. »" },
      "Quand vous redescendez, il fait nuit. Elle a la craie derrière l'oreille, comme un clerc.",
    ],
    choices: [{ back: "IVM_preparatifs" }] },

  IVM_gildas: { act: "IV", title: "Frère Gildas", place: "salveze", with: "gildas",
    text: [
      "Frère Gildas prie dans la petite église des Bateliers, au bout du quai, à genoux sur les dalles froides, sans prie-Dieu. Tu t'assieds sur le banc derrière lui. Il finit sa prière, se signe, et reste à genoux.",
      { if: { has: "gildas:pardonne" }, text: "« Vous m'avez pardonné, dit-il. Je ne sais toujours pas quoi faire de ce pardon. Je le porte comme on porte un enfant qui n'est pas à soi : avec précaution, et la peur de le laisser tomber. »" },
      { if: { all: [{ has: "gildas:demasque" }, { not: { has: "gildas:pardonne" } }] }, text: "« Vous savez ce que j'ai fait, dit-il. Vous me gardez près de vous quand même. Je ne sais pas si c'est de la prudence ou de la pitié. » Il regarde l'autel. « Les deux me conviennent. »" },
      { if: { not: { has: "gildas:demasque" } }, text: "« Demain, Sorne, dit-il. J'ai prié pour la reine. Pour Odeline Carrus aussi. » Il reste un moment immobile. « Et pour moi. »" },
      "L'église sent la cire et le goudron ; les ex-voto des bateliers pendent aux murs, des petits bateaux de bois, des ancres de plomb, des cordes nouées. Sous la voûte basse, l'air {{echo#ivm_echo_eglise|est immobile, chargé d'encens froid|garde une voix de vieille femme, rauque et gaie : « Gildas, petit, tu tiens ta plume comme une truelle », et un rire de garçon qui lui répond}}.",
      "Tu {{miroir#ivm_miroir_gildas|le regardes, et tu ne sais pas ce que tu ressens|le regardes, et tu sais que tu lui en veux encore, et que tu as besoin de lui demain, et que les deux sont vrais}}.",
    ],
    choices: [
      { label: "« Vous la connaissiez depuis longtemps. »", hide: { not: { voile: "ivm_echo_eglise" } }, to: "IVM_gildas_odeline" },
      { label: "Le laisser à sa prière", back: "IVM_preparatifs" },
    ] },

  IVM_gildas_odeline: { act: "IV", title: "Odeline et le petit Gildas", place: "salveze", with: "gildas",
    text: [
      "Frère Gildas se retourne lentement. « Elle m'a appris à écrire, dit-il. Aux Joncs-Bas. J'avais sept ans, elle en avait vingt, elle était déjà la meilleure copiste des Vasse. Elle me tapait sur les doigts avec une baguette de saule. » Il regarde ses mains. « J'ai copié pendant quarante ans avec les gestes qu'elle m'a donnés. »",
      "Il se relève, les genoux raides. « Je ne vous ai jamais dit cela. Je ne l'ai jamais dit à personne. »",
    ],
    fx: { conf: { gildas: 10 }, ep: ["perso", 500] },
    choices: [{ back: "IVM_preparatifs" }] },

  IVM_gildas_tombe: { act: "IV", title: "Le cimetière des Noyés", place: "salveze",
    text: [
      "Le cimetière des Noyés est un pré en pente qui descend jusqu'au canal, planté de croix de bois et de pieux où l'on accroche les lanternes de la fête. Odeline y est enterrée, au bout du troisième rang. Frère Gildas est à quatre rangs d'elle, sous une croix neuve, sans nom ; le Mont a refusé qu'on grave le sien.",
      "Le vent passe dans les croix. Au-dessus des tombes, le pré {{echo#ivm_echo_noyes|bruisse d'herbe et de pluie|garde la voix d'un moine qui psalmodie à mi-voix, très bas, la prière des morts, et qui s'arrête au milieu, et recommence}}.",
      "Tu {{miroir|poses une pierre sur chacune des deux tombes, par habitude|poses une pierre sur la tombe d'Odeline, puis une autre sur celle de Gildas, et tu te demandes laquelle des deux tu pleures}}.",
    ],
    choices: [{ back: "IVM_preparatifs" }] },

  IVM_gildas_lettre: { act: "IV", title: "Le billet du frère convers", place: "salveze", without: "gildas",
    text: [
      "Un frère convers du Mont, en route vers le port pour y vendre le vin de l'abbaye, a laissé pour toi un billet chez le marchand de chandelles. Le papier est plié en quatre, l'écriture régulière, droite, sans une rature : une main de copiste.",
      "*Je sais que vous partez. Je prie pour vous chaque soir à complies. Je ne vous demande rien. {{loupe#ivm_billet_gildas|Que Dieu garde votre route|La parole de la porte de Sorne est une comptine des marais : demandez à Mère Ancolie celle de la reine qui dort. Pardonnez-moi, ou ne me pardonnez pas : allez-y quand même}}. — G.*",
    ],
    choices: [{ back: "IVM_preparatifs" }] },
});

// ==================================================================== the last meal
Object.assign(P, {
  IVM_repas: { act: "IV", title: "Le dernier repas", place: "salveze", takes: "evening",
    text: [
      "La veille de la Grande Basse, tu fais dresser une table dans la salle basse avec tout ce que trois jours de faim ont laissé dans la ville : un pain de seigle, un fromage de chèvre, des anguilles fumées que quelqu'un a apportées des marais, un pot de lentilles au lard, et deux bouteilles de vin de l'Orle qui ont fait le chemin depuis les Combes dans le fond de ton sac.",
      { with: "tibere", text: "Tibère coupe le pain, parce qu'il a toujours coupé le pain, au Guet, pour les hommes de sa ronde. Il fait les parts égales, à la mie près." },
      { with: "lison", text: "Lison s'assied à côté de toi, et pose sa jambe contre la tienne sous la table, comme par hasard, et l'y laisse." },
      { with: "salome", text: "Salomé boit son vin à petites gorgées, les coudes sur la table. Elle raconte une histoire de tempête au large des Écueils, et tout le monde rit au mauvais moment, et elle aussi." },
      { with: "fauvette", text: "Fauvette mange comme on mange quand on a eu faim toute sa vie : vite, en surveillant le plat. Puis, au deuxième morceau de fromage, plus lentement." },
      { with: "gildas", text: "Frère Gildas bénit le pain en silence, du bout des doigts, et mange peu. Il écoute. Une fois, il sourit." },
      { if: { has: "ivm:eq_quai" }, text: "Wilfrid le ferrailleur et la mère Coquerel sont venus avec un panier de châtaignes et une bouteille de cidre trouble. Ils restent debout près de la porte jusqu'à ce qu'on leur fasse une place." },
      { if: { has: "ivm:lothaire_bord" }, text: "Lothaire Brunel mange au bout de la table, seul, ses gants gris à côté de son assiette. On le laisse seul. Il répond quand même, de temps en temps, à des choses qu'on n'a pas dites." },
      { without: "any", text: "Tu manges seul{e}, en face de la chaise vide où tu as posé les feuillets. Dehors, la ville bruit. Tu bois à la santé d'Odeline." },
    ],
    choices: [
      { label: "Lever ton verre", to: "IVM_repas_nuit" },
    ] },

  IVM_repas_nuit: { act: "IV", title: "Avant l'aube", place: "salveze",
    text: [
      "Tu lèves ton verre. Les mots te manquent, alors tu dis le nom d'Odeline, et les autres le répètent, ceux qui l'ont connue et les autres aussi.",
      { with: "tibere", text: "« Et à la reine, dit Tibère. Qui a eu de la patience. »" },
      { with: "lison", text: "« À ceux qui se taisent, dit Lison, et à ceux qui écoutent. » {{oreille#ivm_lison_toast|Elle boit d'un trait|Elle ajoute, sous la table, pour toi : « Et à toi, tête de mule »}}." },
      { with: "salome", text: "« À Maïwenn », dit Salomé, et tout le monde boit, même ceux qui ignorent qui c'est." },
      { with: "fauvette", text: "Fauvette lève son verre d'eau. « À la craie. » Les autres se regardent. Toi, tu comprends." },
      "Plus tard, quand tout le monde dort sur les bancs et les manteaux, tu restes à la fenêtre. Le canal est noir. Tu {{miroir#ivm_miroir_repas|penses à la Charte, à l'or, à la marée|penses que tu as passé un an à retrouver ce qu'une reine a perdu, et que c'est la première fois de ta vie que tu as des gens à perdre}}.",
    ],
    fx: { flag: "ivm:repas", rest: true, ep: ["seance", 1000] },
    choices: [{ back: "IVM_preparatifs" }] },
});

// ==================================================================== side quest: the pilot's son
Object.assign(P, {
  IVM_q_pilote: { act: "IV", title: "La Tour aux Dettes", place: "salveze",
    text: [
      "La Tour aux Dettes se dresse au coin du marché aux Poissons, carrée, aveugle, avec une seule porte et un guichet. On y enferme ceux qui doivent plus qu'ils n'ont, jusqu'à ce que quelqu'un paie, ou qu'ils meurent. La Banque Marrel y loge à elle seule un tiers des prisonniers.",
      "Yannick Lannec a trente ans, la barbe de son père, et une toux qui ne lui ressemble pas. Il te parle à travers la grille du parloir, les doigts accrochés aux barreaux. « Trente ducats, dit-il. J'en ai emprunté douze, pour une barque. La tempête l'a prise. Le reste, ce sont les intérêts. » Il tousse. « {{oreille#ivm_yannick|Mon père ne doit pas payer pour moi|Mon père vendra l'astrolabe pour moi, et il en mourra, parce que c'est tout ce qui lui reste de la mer}}. »",
      "Le greffier de la Tour, un petit homme jaune derrière son guichet, tient le registre des écrous. Sur la page de Yannick, la reconnaissance de dette est épinglée : *{{loupe#ivm_dette|Douze ducats au denier cinq, payables à la Saint-Martin|Douze ducats au denier vingt ; le cinq a été écrit par-dessus, d'une autre encre, après la signature}}*.",
      { if: { has: "ivm:promesse_lannec" }, text: "L'astrolabe de son père est dans ton sac. Tu l'as payé d'une parole, et la parole est derrière cette grille, avec la toux." },
    ],
    fx: { meet: "ivm_yannick" },
    choices: [
      { label: "Montrer au greffier l'encre du « cinq »", hide: { not: { voile: "ivm_dette" } }, test: { dom: "savoir", diff: 0, label: "Une dette grattée", help: [{ if: { has: "metier:lire" }, v: 15 }, { with: "gildas", v: 10 }] },
        win: { fx: { gold: -60, flag: "ivm:yannick_libre", ep: ["perso", 800] }, to: "IVM_q_pilote_fin" }, lose: { fx: { gold: -300, flag: "ivm:yannick_libre" }, to: "IVM_q_pilote_fin" } },
      { label: "Payer la dette entière (30 ducats)", fx: { gold: -600, flag: "ivm:yannick_libre" }, to: "IVM_q_pilote_fin" },
      { label: "Le faire sortir de nuit, par le toit", to: "IVM_q_pilote_nuit" },
      { label: "Revenir plus tard", back: "IVM_preparatifs" },
    ] },

  IVM_q_pilote_nuit: { act: "IV", title: "Le toit de la Tour aux Dettes", place: "salveze", takes: "night",
    text: [
      "La Tour aux Dettes est aveugle, mais elle a un toit, et ce toit a une trappe pour les ramoneurs. Les débiteurs restent : ils n'ont nulle part où aller. La trappe est sans garde.",
      { with: "fauvette", text: "Fauvette ouvre la trappe en dix battements de cœur, avec une épingle à cheveux et un juron." },
      "En bas, dans le noir, une salle pleine de paillasses et de souffles. Yannick dort près du mur, roulé dans une couverture. Il faut le réveiller sans réveiller les autres, le hisser jusqu'à la trappe, et repartir par les toits.",
    ],
    choices: [
      { label: "Descendre le chercher (Discrétion)", test: { dom: "discretion", diff: -20, label: "Une évasion par le toit", help: [{ with: "fauvette", v: 20 }, { with: "lison", v: 10 }, { if: { has: "ivm:eq_gouttieres" }, v: 10 }] },
        win: { fx: { flag: "ivm:yannick_libre", ep: ["perso", 800] }, to: "IVM_q_pilote_fin" }, lose: { fx: { flag: "ivm:yannick_reste", pv: -4 }, to: "IVM_q_pilote_fin" } },
      { label: "Laisser Fauvette descendre", who: "fauvette", fx: { flag: "ivm:yannick_libre", conf: { fauvette: 5 } }, to: "IVM_q_pilote_fin" },
    ] },

  IVM_q_pilote_fin: { act: "IV", title: "Le père et le fils", place: "salveze",
    text: [
      { if: { has: "ivm:yannick_libre" }, text: "Tu ramènes Yannick au ponton de son père à l'aube. Le vieux Gwenaël est assis sur son seau, son filet sur les genoux. Il voit son fils, pose la navette, et reste assis : il tend seulement la main, paume ouverte, et Yannick la prend. Ils restent comme ça, le père assis, le fils debout, en silence, pendant que le soleil se lève sur le port." },
      { if: { has: "ivm:yannick_reste" }, text: "Une paillasse craque, quelqu'un crie, une lanterne s'allume dans l'escalier. Tu remontes par la trappe sans Yannick, les mains écorchées. Le lendemain, tu vas dire au vieux Gwenaël que tu as essayé. Il hoche la tête. « Tu as essayé. C'est plus que les autres. » Il te donne quand même de quoi manger, du pain et une sole grillée sur une tôle." },
      { if: { has: "ivm:yannick_libre" }, text: "Plus tard, Gwenaël tire de son gilet une bague de laiton épaisse, gravée d'une rose des vents usée. « La bague des pilotes du port. On me l'a donnée à vingt ans. » Il la pose dans ta paume. « {{oreille|Pour la peine|Pour que la mer te reconnaisse, là-bas, et te laisse revenir}}. »" },
    ],
    fx: { flag: "ivm:pilote", quest: "IVM_q_pilote", ep: ["seance", 1200] },
    choices: [
      { label: "Prendre la bague", hide: { any: [{ not: { has: "ivm:yannick_libre" } }, { has: "tresor:ivm_bague" }] }, fx: { item: "ivm_tr_bague", clock: { tresors: 1 }, flag: "tresor:ivm_bague" }, back: "IVM_preparatifs" },
      { back: "IVM_preparatifs" },
    ] },
});

// ==================================================================== side quest: the Fourcaud granary
Object.assign(P, {
  IVM_q_grenier: { act: "IV", title: "La rumeur du grain", place: "salveze",
    text: [
      "Sur le quai, les femmes font la queue depuis l'aube devant la boulangerie municipale, qui reste fermée. Une rumeur court d'une femme à l'autre, à voix basse, comme toutes les rumeurs de faim : la maison Fourcaud aurait du grain. Beaucoup de grain. Caché dans son entrepôt du canal des Tanneurs, qui est vide, tout le monde l'a vu, on y a mené les échevins.",
      "Une laveuse aux mains rouges te prend par la manche. « Toi, tu trouves les choses. Trouve ça. » Elle te lâche. « {{oreille#ivm_laveuse|On n'a pas de quoi te payer|On n'a pas de quoi te payer, et j'ai trois enfants qui mangent de la colle de relieur bouillie}}. »",
    ],
    choices: [
      { label: "Aller voir l'entrepôt des Fourcaud", fx: { questSeen: "IVM_q_grenier" }, to: "IVM_q_entrepot" },
      { label: "Tu n'as pas le temps", refuse: true, back: "IVM_preparatifs" },
    ] },

  IVM_q_entrepot: { act: "IV", title: "L'entrepôt du canal des Tanneurs", place: "salveze", takes: "night",
    text: [
      "L'entrepôt des Fourcaud est un long bâtiment de briques sur le canal, avec une porte d'eau et une porte de rue. Dedans, à la lanterne : un sol de planches balayé, des sacs vides pliés en piles, une odeur de farine qui ne s'en va pas. Au fond, le mur de briques {{pie#ivm_faux_mur|est épais, noirci, aussi vieux que le reste|est neuf, la brique du bas est d'une autre cuisson, et le mortier sent encore la chaux}}.",
      "Deux gardiens de la maison Fourcaud dorment dans la loge, près de la porte de rue, à côté d'un chien qui veille.",
      { with: "tibere", text: "Tibère renifle. « Ça sent le blé, et pas le blé d'il y a un an. Le blé de la semaine. »" },
    ],
    choices: [
      { label: "Ouvrir le faux mur à la barre", hide: { not: { voile: "ivm_faux_mur" } }, to: "IVM_q_grenier_fin" },
      { label: "Sonder les murs un par un (Savoir)", hide: { voile: "ivm_faux_mur" }, test: { dom: "savoir", diff: -10, label: "Trouver le grain", help: [{ if: { has: "metier:mains" }, v: 15 }, { with: "tibere", v: 10 }] },
        win: { to: "IVM_q_grenier_fin" }, lose: { to: "IVM_q_gardiens" } },
      { label: "Faire venir les femmes de la queue, avec des barres et des sacs", fx: { flag: "ivm:grenier_foule" }, to: "IVM_q_gardiens" },
    ] },

  IVM_q_gardiens: { act: "IV", title: "Les gardiens des Fourcaud", place: "salveze",
    text: [
      "Le chien aboie. Les deux gardiens sortent de la loge, gourdin à la main, et un troisième homme les suit, en manteau noir à boutons d'or, une épée courte au côté : un homme de la Banque, prêté aux Fourcaud pour la saison.",
      { if: { has: "ivm:grenier_foule" }, text: "Derrière toi, sur le quai, trente femmes et quelques hommes avancent avec des barres de fer, des pelles, des sacs vides. Le gardien le plus jeune regarde la foule, puis son gourdin, puis la foule." },
    ],
    choices: [
      { label: "Les écarter de force", fight: { title: "L'entrepôt des Fourcaud", enemies: [{ id: "ivm_garde", n: 2 }],
        win: { to: "IVM_q_grenier_fin" }, lose: { fx: { pv: -5, flag: "ivm:grenier_rate" }, to: "IVM_q_grenier_fin" } } },
      { label: "« Ces femmes ont faim, et vous aussi. Ouvrez. » (Social)", test: { dom: "social", diff: -10, label: "Désarmer des gardiens", help: [{ if: { has: "ivm:grenier_foule" }, v: 25 }, { with: "tibere", v: 10 }] },
        win: { to: "IVM_q_grenier_fin" }, lose: { fx: { flag: "ivm:grenier_rate" }, to: "IVM_q_grenier_fin" } },
    ] },

  IVM_q_grenier_fin: { act: "IV", title: "Le blé des Fourcaud", place: "salveze",
    text: [
      { if: { not: { has: "ivm:grenier_rate" } }, text: "Les briques neuves tombent sous les barres, et derrière, dans une seconde salle aussi longue que la première, le blé est là : des sacs empilés jusqu'aux poutres, des centaines, marqués au fer de la maison Fourcaud. La nouvelle descend le quai plus vite que l'eau du canal. Au matin, on fait la queue devant l'entrepôt, et on repart avec un sac, et on se dit qu'il y a encore une justice, sans tout à fait y croire." },
      { if: { has: "ivm:grenier_rate" }, text: "Tu repars sans avoir ouvert le mur, une main sur ta côte. Mais tu as fait du bruit, et le quartier a entendu. Le lendemain, une foule enfonce la porte de l'entrepôt à coups de poutre, sans toi, et le blé des Fourcaud sort sac par sac sous les yeux du Guet, qui regarde ailleurs." },
      "Dans une niche du faux mur, au milieu des gravats, il y a une cassette de fer. Dedans, des lettres de change, et un sceau d'argent aux armes des Fourcaud, une tour et trois épis, qui {{pie#ivm_sceau|est d'argent massif, poli par les doigts|est d'argent massif, et sa poignée creuse contient une matrice de cire au sceau du prévôt Delisle}}.",
    ],
    fx: { flag: "ivm:grenier", quest: "IVM_q_grenier", fac: { hautes: 5 }, item: "ivm_tr_sceau", clock: { tresors: 1 }, ep: ["seance", 1200] },
    choices: [
      { label: "Porter la matrice du sceau du prévôt au capitaine de la porte des Sauniers", hide: { any: [{ not: { voile: "ivm_sceau" } }, { has: "prevot:dejoue" }, { has: "ivm:prevot_tente" }] }, fx: { flag: ["ivm:prevot_tente", "ivm:prevot_sceau"] }, to: "IVM_prevot_dejoue" },
      { back: "IVM_preparatifs" },
    ] },
});

// ==================================================================== side quest: the song of the Drowned
Object.assign(P, {
  IVM_q_chanson: { act: "IV", title: "La chanteuse du pont des Lanternes", place: "salveze",
    text: [
      "Sur le pont des Lanternes, à l'endroit où l'on jette les lanternes de la fête, une vieille femme aveugle chante pour quelques liards, assise sur une borne, une sébile entre les pieds. On l'appelle Jacquemine. Elle chante toujours la même chose, en ces jours-là : *La Complainte de la Noyée*, l'histoire de la ville qui dort sous la mer et se montre une nuit par an.",
      "*Quand la lune pèse autant que le jour, / la mer s'en va boire au large ; / qui marche alors dans la ville d'en bas / trouve la reine à sa table...* Elle s'arrête toujours au même endroit, reprend au début, s'arrête encore. Un couplet manque.",
      "Tu poses une pièce dans la sébile. « Le couplet d'après ? » Jacquemine sourit avec trois dents. « {{oreille#ivm_jacquemine|Personne ne le sait plus|Mon maître le chantait, et il disait le chemin, rue après rue, et je l'ai oublié le jour où il est mort, et j'en ai honte depuis quarante ans}}. »",
    ],
    fx: { meet: "ivm_jacquemine", questSeen: "IVM_q_chanson" },
    choices: [
      { label: "Frapper le diapason sur la pierre du pont, là où son maître chantait", if: { item: "diapason" }, why: "Il faudrait le diapason de Sorne.", to: "IVM_q_chanson_echo" },
      { label: "Chercher le couplet dans les recueils des Archives", hide: { not: { seen: "IVM_vauquelin" } }, test: { dom: "savoir", diff: -10, label: "Un couplet perdu", help: [{ if: { has: "metier:lire" }, v: 15 }, { with: "gildas", v: 10 }, { if: { has: "ivm:vauq_allie" }, v: 10 }, { if: { has: "ivm:vauq_froid" }, v: -10 }] },
        win: { fx: { flag: "ivm:couplet" }, to: "IVM_q_chanson_fin" }, lose: { to: "IVM_q_chanson_fin" } },
      { label: "Demander le couplet au vieux pilote Lannec", hide: { not: { seen: "IVM_pilote_sorne" } }, fx: { flag: "ivm:couplet" }, to: "IVM_q_chanson_fin" },
      { label: "Lui laisser une pièce et passer", fx: { gold: -2 }, refuse: true, back: "IVM_preparatifs" },
    ] },

  IVM_q_chanson_echo: { act: "IV", title: "Ce que le pont a entendu", place: "salveze",
    text: [
      "Tu frappes le diapason sur la borne où elle est assise. La note monte, claire, et reste suspendue. Jacquemine lève la tête, la bouche ouverte. Autour de vous, le pont {{echo#ivm_couplet|reprend ses bruits ordinaires de charrettes et de sabots|rend une voix d'homme, grave, un peu fausse, qui chante : « Trois cheminées à main de mer, / la quatrième est sans fumée ; / passe la porte qui n'a pas de seuil, / la reine attend sous la marée »}}.",
      "La note s'éteint. Jacquemine a les larmes aux yeux. « C'était lui », dit-elle.",
    ],
    choices: [
      { label: "Lui chanter le couplet", hide: { not: { voile: "ivm_couplet" } }, fx: { flag: "ivm:couplet" }, to: "IVM_q_chanson_fin" },
      { label: "Lui dire que la note s'est perdue", hide: { voile: "ivm_couplet" }, to: "IVM_q_chanson_fin" },
    ] },

  IVM_q_chanson_fin: { act: "IV", title: "La Complainte entière", place: "salveze",
    text: [
      { if: { has: "ivm:couplet" }, text: "Tu lui redis le couplet, une fois, puis une deuxième, et elle le chante avec toi, de sa voix cassée, en battant la mesure sur la sébile. *Trois cheminées à main de mer, / la quatrième est sans fumée...* À la fin, elle reste un moment sans bouger. Puis elle chante la complainte entière, d'un bout à l'autre, pour la première fois depuis quarante ans, et des gens s'arrêtent sur le pont pour l'écouter.", else: "Tu reviens bredouille. Jacquemine hausse les épaules. « Quarante ans que je le cherche. Je peux attendre un peu. » Elle reprend sa complainte au début, et s'arrête au même endroit." },
      "Avant que tu partes, elle détache de son poignet un chapelet de grains d'ambre jaune, tiédis par la peau. « Mon maître l'avait rapporté des Écueils. Il disait que l'ambre de là-bas chante, si on l'écoute. » Elle le pose dans ta main. Les grains {{pie#ivm_chapelet|sont d'un ambre ordinaire, usé par les doigts|sont de l'ambre chantant des Écueils, le même que celui des instruments, et ils vibrent faiblement contre le bronze du diapason}}.",
    ],
    fx: { flag: "ivm:chanson", quest: "IVM_q_chanson", item: "ivm_tr_chapelet", clock: { tresors: 1 }, ep: ["seance", 1000] },
    choices: [
      { label: "Appuyer le diapason contre les grains d'ambre", hide: { any: [{ not: { voile: "ivm_chapelet" } }, { not: { item: "diapason" } }, { has: "tresor:ivm_chapelet" }] }, once: true, fx: { recharge: { echo: 3 }, flag: "tresor:ivm_chapelet" }, back: "IVM_preparatifs" },
      { back: "IVM_preparatifs" },
    ] },
});

// ==================================================================== the night sailing
Object.assign(P, {
  IVM_fin: { act: "IV", title: "L'appareillage", place: "salveze", takes: "night",
    text: [
      "Le soir de l'équinoxe, le jour et la nuit pèsent le même poids, et le soleil se couche juste à l'ouest, au bout de la Salve, dans une brume rouge. Au port aux Sauniers, on charge les dernières choses à la lumière des lanternes sourdes : l'eau, le biscuit, les cordes, les barres de fer, les feuillets dans leur toile cirée, roulés contre ta poitrine.",
      { if: { is: { ivm_bateau: "bavarde" } }, text: "*La Bavarde* largue ses amarres la première, sa voile au tiers déjà gonflée, et l'eau noire glisse le long de sa coque." },
      { if: { is: { ivm_bateau: "saintgue" } }, text: "*Le Saint-Gué* largue ses amarres, lourd et sûr, avec son pont ferme et ses centaines de traits gravés sur le banc de nage." },
      { if: { is: { ivm_bateau: "pimpante" } }, text: "*La Pimpante* largue ses amarres, rouge et bleue sous les lanternes. Quelqu'un est déjà à la pompe." },
      { if: { is: { ivm_bateau: "cotre" } }, text: "Le cotre volé glisse hors de sa cachette, voile brune, avirons sortis, rapide comme une anguille." },
      { if: { is: { ivm_bateau: "bac" } }, text: "Le bac de la mère Coquerel se dégage du quai en raclant la pierre, large et plat, une voile de fortune tendue sur un mât de charrette. Il avance comme une vache qui se promène. Il avance." },
      { if: { has: "ivm:eq_ecumeurs" }, text: "Les deux barques de Riwal suivent dans ton sillage, huit hommes aux avirons, sans une lumière." },
      { if: { has: "ivm:eq_quai" }, text: "Wilfrid le ferrailleur rame à l'avant, torse nu malgré le froid, et la mère Coquerel tient l'écope comme un sceptre." },
      { if: { has: "ivm:eq_gouttieres" }, text: "Les enfants de la Reine des Gouttières se sont perchés dans le gréement, où ils se sentent chez eux." },
      { if: { has: "basse:taiseurs" }, text: "À la sortie du chenal, des barques plates sortent des roseaux sans un bruit et prennent la tête, une lanterne voilée à l'étrave de la première. Les Taiseurs connaissent les passes. Tu suis leur lumière." },
      { if: { not: { has: "basse:equipage" } }, text: "Vous êtes peu, sur le pont. Trop peu, peut-être. Tu comptes les mains, tu comptes les avirons, et tu cesses de compter." },
      { if: { has: "corisande:pacte" }, text: "Au large, sur bâbord, *La Constance* allume ses fanaux de poupe : Corisande Marrel part la même nuit, comme convenu." },
      { if: { all: [{ not: { has: "corisande:pacte" } }, { not: { has: "ivm:lothaire_bord" } }] }, text: "Une heure avant toi, trois coques sont parties par la passe du sud, sans fanaux. La Banque est déjà sur l'eau." },
      { if: { all: [{ has: "ivm:lothaire_bord" }, { not: { has: "ivm:lothaire_enchaine" } }] }, text: "Lothaire Brunel est assis à l'avant, les mains devant lui, gantées de gris, où tout le monde peut les voir." },
      { if: { has: "ivm:lothaire_enchaine" }, text: "Lothaire Brunel est assis à l'avant, une chaîne de geôle aux poignets, ses gants gris enfilés par-dessus. À chaque vague, un maillon cogne le bordage." },
      { if: { has: "ivm:lothaire_cachot" }, text: "Le bateau passe sous la Tour Ronde. À l'un des soupiraux, au ras de l'eau, une main nue se pose sur le barreau, et reste là jusqu'à ce que tu aies passé." },
      { if: { has: "ivm:riwal_banque" }, text: "Au fond du port, les deux barques de Riwal ont quitté leur poste avant toi. Tu les retrouves au large, dans le sillage des fanaux de la Banque." },
      { if: { all: [{ has: "ivm:promesse_lothaire" }, { has: "ivm:lothaire_bord" }] }, text: "Dans le gréement, le grand Pivert garde les yeux sur l'homme assis à l'avant. La Reine des Gouttières lui a dit quel homme chercher, et il l'a trouvé avant le sable." },
      { if: { all: [{ has: "ivm:promesse_lothaire" }, { not: { has: "ivm:lothaire_bord" } }] }, text: "Dans le gréement, le grand Pivert garde les yeux sur les lumières qui vous précèdent au large. La Reine lui a dit quel homme chercher sur le sable." },
      { if: { has: "prevot:dejoue" }, text: "Derrière toi, la ville s'éloigne. Sur les remparts du nord, des torches veillent, et la porte des Sauniers reste close.", else: "Derrière toi, la ville s'éloigne. Sur les remparts du nord, il n'y a plus de torches. Tu regardes cet endroit noir jusqu'à ce que le Beffroi le cache." },
      { if: { has: "ivm:table_approx" }, text: "Salomé a dit entre minuit et la troisième heure. Tu as fait larguer une heure plus tôt que prévu, pour avoir de la marge, et tu tiens le sablier sur tes genoux." },
      { if: { has: "ivm:repas" }, text: "Tu as encore dans la bouche le goût du vin de l'Orle d'hier soir, et sur la main la marque d'un verre qu'on a cogné trop fort." },
      { if: { has: "ivm:alerte" }, text: "Tu penses aux trois billets. Tu sauras au retour s'ils ont été lus." },
      { with: "lison", text: "Lison est à la barre ou à l'aviron, partout à la fois. En passant, elle te touche l'épaule, sans s'arrêter." },
      { with: "salome", text: "Salomé, à la poupe, regarde le ciel, puis l'eau, puis l'astrolabe, puis le ciel. « Vent de terre, dit-elle. Ça ira. »" },
      { with: "tibere", text: "Tibère a posé sa masse contre le mât et s'est assis dessus, les bras croisés, l'œil sur l'arrière. Ses dés sont restés à terre. Il compte les lumières qui vous suivent." },
      { with: "fauvette", text: "Fauvette s'est assise au pied du mât, contre ta jambe, très pâle, l'ardoise dans sa veste." },
      { with: "gildas", text: "Frère Gildas récite les complies à mi-voix, à l'arrière, tourné vers la terre qui s'en va." },
      "La Salve s'élargit, s'aplatit, devient la mer. Le ciel est clair, la lune presque pleine. Devant, au sud-ouest, quelque part sous l'eau qui commence déjà à se retirer, une ville dort depuis trois siècles. Tu {{miroir#ivm_miroir_fin|regardes devant toi, et tu n'as pas peur|regardes devant toi, et tu as peur, et tu y vas quand même, et c'est peut-être cela qu'Odeline voulait t'apprendre}}.",
    ],
    fx: { ep: ["histoire", 4000] },
    choices: [
      { label: "Cap sur Sorne-la-Noyée", big: true, exit: true, to: "V_debut" },
    ] },
});


// ==================================================================== extras
var X = {
  people: {
    ivm_yannick: { name: "Yannick Lannec", qui: "Le fils du vieux pilote Lannec, prisonnier pour dette à la Tour aux Dettes.", aspect: { allure: "trente ans, pêcheur amaigri", visage: "la barbe de son père", voix: "toux tenace" }, f: false, face: { age: "adulte", coif: "court", beard: "barbe" }, desc: "Le fils du vieux pilote, trente ans, pêcheur sans barque, prisonnier pour dette à la Tour aux Dettes." },
    ivm_jacquemine: { name: "Jacquemine", qui: "Une chanteuse aveugle du pont des Lanternes.", aspect: { allure: "vieille femme assise sur une borne", visage: "sourire à trois dents", signe: "sébile entre les pieds", voix: "chante la Complainte de la Noyée" }, f: true, face: { age: "ancien", coif: "foulard", marks: ["aveugle"] }, desc: "Une chanteuse aveugle du pont des Lanternes. Elle chante la Complainte de la Noyée, à laquelle il manque un couplet." },
    ivm_grelot: { name: "Gildebert Grelot", qui: "Capitaine de la porte des Sauniers.", aspect: { allure: "homme carré, ventre de sergent", visage: "grisonnant, yeux de chien battu", signe: "gobelet toujours plein" }, f: false, face: { age: "mur", coif: "court", hair: "gris", beard: "moustache" }, desc: "Capitaine de la porte des Sauniers. Un ventre de sergent, des yeux de chien battu, quatre enfants et des dettes de dés." },
    ivm_vauquelin: { name: "Eustache Vauquelin", qui: "Maître des Archives de la République.", aspect: { allure: "long, voûté", habits: "robe de serge noire élimée aux coudes", signe: "lunettes oubliées sur le front", voix: "récite l'inventaire de mémoire" }, f: false, face: { age: "ancien", coif: "degarni", marks: ["lunettes"] }, desc: "Maître des Archives de la République. Long, voûté, en robe de serge noire ; il récite l'inventaire de mémoire." },
    ivm_lannec: { name: "Gwenaël Lannec", qui: "Vieux pilote du port aux Sauniers.", aspect: { allure: "quatre-vingts ans, assis sur un seau", habits: "sabots pleins de paille", signe: "mains comme des racines de saule, filet" }, f: false, face: { age: "ancien", coif: "court", hair: "blanc", beard: "barbe" }, desc: "Vieux pilote du port aux Sauniers. Il a vu Sorne à quinze ans, une nuit d'équinoxe, et ne l'a jamais oubliée." },
  },
  items: {
    ivm_astrolabe: { name: "L'astrolabe de marée de la reine", kind: "outil", unique: true, bonus: { nature: 10 }, desc: "Un disque de bronze verdi à trois anneaux : les saints, la lune, les heures. Réglé, il dit l'heure de la plus basse eau au-dessus de Sorne." },
    ivm_carte_fausse: { name: "La « carte de Sorne »", kind: "tresor", price: 2, desc: "Un vélin jauni, des rues, une tour, un sceau de cire. Le marchand des Halles en voulait cinquante ducats." },
    ivm_tr_ducat: { name: "Le ducat à la bouche ouverte", kind: "tresor", price: 400, desc: "Une pièce d'or d'Ysaure, échappée à la fonte de l'an premier. La reine y a la bouche entrouverte." },
    ivm_ordre: { name: "L'ordre de la porte des Sauniers", kind: "document", form: "lettre", desc: "Un ordre de garde scellé de cire verte, pris dans la boîte du clerc Anséric.", text: "*Ordre au capitaine de la porte des Sauniers : {{loupe|la garde ira au port la nuit de l'équinoxe, la porte restera close|à l'heure de la basse mer, laissez passer ceux qui montreront le sceau à la tour d'Aveline}}.*\n\n*Delisle.*" },
    ivm_gant: { name: "Le gant gris de Lothaire", kind: "document", form: "billet", desc: "Un gant de chevreau fin, doublé de soie. Un papier plié est cousu dans le pouce.", text: "*{{loupe|L. B., chercheur, au service de la Banque|À rendre à Salomé Brac, si je ne reviens pas : la corde de Maïwenn, je l'ai coupée de ce couteau}}.*" },
    ivm_corde_salome: { name: "La corde de Salomé", kind: "outil", unique: true, bonus: { nature: 5 }, desc: "Vingt toises de chanvre blanc, neuves, roulées serrées. Salomé veut que tu en vérifies chaque toise avant qu'elle descende." },
    ivm_tr_bague: { name: "La bague des pilotes", kind: "tresor", price: 80, bonus: { nature: 5 }, desc: "Une bague de laiton épaisse, gravée d'une rose des vents usée. Les pilotes du port aux Sauniers la reçoivent à vingt ans." },
    ivm_tr_sceau: { name: "Le sceau des Fourcaud", kind: "tresor", price: 250, desc: "Un sceau d'argent massif aux armes des Fourcaud, une tour et trois épis. La poignée est creuse." },
    ivm_tr_chapelet: { name: "Le chapelet d'ambre de Jacquemine", kind: "tresor", price: 150, desc: "Des grains d'ambre jaune, tiédis par la peau. Le maître de la chanteuse aveugle les avait rapportés des Écueils." },
    ivm_tr_compas: { name: "Le compas du Saint-Gué", kind: "tresor", price: 120, bonus: { nature: 5 }, desc: "Un compas de mer en bronze, dans une boîte de buis usée aux angles. La rose est peinte à la main, le nord marqué d'une fleur de lis effacée." },
  },
  enemies: {
    ivm_garde: { name: "Garde du Guet en armes", look: "humain", pv: 44, att: 78, def: 28, dmg: 8, desc: "Casque rond, brigandine, hallebarde courte. Le couvre-feu l'a rendu nerveux et mal payé." },
  },
  quests: [
    { id: "IVM_q_pilote", act: "IV", kind: "annexe", title: "Le fils du pilote", start: "IVM_q_pilote", echo: "ivm:pilote" },
    { id: "IVM_q_grenier", act: "IV", kind: "annexe", title: "Le blé des Fourcaud", start: "IVM_q_grenier", echo: "ivm:grenier" },
    { id: "IVM_q_chanson", act: "IV", kind: "annexe", title: "La Complainte de la Noyée", start: "IVM_q_chanson", echo: "ivm:chanson" },
  ],
  veils: {
    ivm_heure: { fx: { flag: "ivm:heure_juste", ep: ["perso", 500] } },
    ivm_parole: { fx: { flag: "ivm:parole", ep: ["perso", 800] } },
    ivm_reg_actes: { fx: { ep: ["perso", 800] } },
    ivm_reg_maisons: { fx: { ep: ["perso", 400] } },
    ivm_reg_vasse: { fx: { ep: ["perso", 400] } },
    ivm_lannec_fils: { fx: { questSeen: "IVM_q_pilote" } },
    ivm_marchand_cordes: { fx: { flag: "ivm:banque_flotte" } },
    ivm_lot_vrai: { fx: { flag: "ivm:banque_flotte" } },
    ivm_sergent: { fx: { flag: "ivm:porte_soupcon" } },
    ivm_vauq_scelles: { fx: { flag: "ivm:porte_soupcon" } },
    ivm_amaury: { fx: { flag: "ivm:duc_saintjean" } },
    ivm_cori_anthelme: { fx: { ep: ["perso", 400] } },
    ivm_couplet: { fx: { ep: ["perso", 500] } },
    ivm_miroir_lison: { fx: { ep: ["perso", 300] } },
    ivm_miroir_gildas: { fx: { ep: ["perso", 300] } },
    ivm_miroir_repas: { fx: { ep: ["perso", 300] } },
    ivm_miroir_fin: { fx: { ep: ["perso", 500] } },
    ivm_echo_noyes: { fx: { ep: ["perso", 300] } },
    ivm_tibere_fille: { fx: { conf: { tibere: 5 } } },
    ivm_rosalie: { fx: { ep: ["perso", 300] } },
    ivm_salome_sorne: { fx: { conf: { salome: 3 } } },
    ivm_lison_marches: { fx: { conf: { lison: 3 } } },
    ivm_ancolie_fierte: { fx: { fac: { taiseurs: 3 } } },
  },
};

module.exports = { passages: P, extras: X };
