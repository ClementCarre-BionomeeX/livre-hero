// The house and the first reading. The rooms are shared by both readings (paragraphs and choices tagged `second` where
// they differ); the hourly rounds, the Sibyl's riddles of the first night and the dawn on `vitrine` are `second: false`.
module.exports = {
  // ------------------------------------------------------------------ arrival, ten o'clock
  A_arrivee: { act: "I", title: "La dernière garde", place: "loge",
    fx: { meet: ["pigache", "aristide"], clue: "i_fairepart" },
    text: [
      { second: false, text: "La grille du numéro 9 grince comme une bête qu'on réveille. La maison Orsenne se dresse au fond d'une cour pavée, haute, grise, ruisselante, avec ses fenêtres à meneaux, ses gargouilles qui crachent la pluie, et sa tour ronde, plus haute que le toit, coiffée d'un bonnet d'ardoise et percée tout en haut d'une seule lucarne ronde, aveugle, comme l'œil d'un cyclope crevé." },
      { second: true, text: "La grille grince. La pluie, la cour, les gargouilles, la tour au bonnet d'ardoise. Tu as déjà vu tout cela, il y a une heure, il y a huit heures, il y a une vie. Le sable qui a remonté dans le verre t'a laissé un goût de poussière dans la bouche." },
      "Dans le vestibule dallé de noir et de blanc, un petit homme rond en redingote tachée de cire t'attend, un marteau d'ivoire passé à la ceinture comme un pistolet. Maître Pigache, commissaire-priseur. À côté de lui, un monsieur de quarante ans, beau, un peu gras, en gilet de soie, qui regarde sa montre : Aristide Orsenne, le neveu, l'héritier, le vendeur.",
      "« Deux écus pour la nuit, dit Pigache, qui parle en chiffres comme d'autres en vers. Mille deux cent quarante-sept lots. Une ronde par heure. Vente demain à dix heures. Le lot n° 1 est la Sibylle, mise à prix vingt mille écus, à cause de son œil. » Il tapote son marteau. « Ne touchez à rien. Tout est compté. »",
      "Au mur du vestibule, encadré de noir, le faire-part : *Hippolyte Orsenne, inhumé le 16 octobre, au cimetière des Recollets. Cercueil fermé, selon sa volonté.*",
      { second: true, text: "Tout est dit mot pour mot, geste pour geste, comme au théâtre le soir de la deuxième représentation. Pigache tapote son marteau au même endroit de sa phrase. Aristide regarde sa montre au même instant. Tu as envie de leur souffler leurs répliques." },
      "Aristide te serre la main avec chaleur, puis te tend une flasque d'argent. « Pour la nuit. Mon oncle avait une cave admirable. Il fait froid dans cette maison, et les morts y ont plus de compagnie que les vivants. »",
    ],
    choices: [
      { label: "Prendre la flasque et les remercier", to: "A_loge" },
    ] },

  A_loge: { act: "I", title: "La loge du gardien", place: "loge", hub: true, backName: "la loge",
    text: [
      { first: true, text: "Ils sont partis. La grille a grincé, la voiture a roulé, et la maison s'est refermée sur toi comme une main sur une pièce de monnaie. La loge du gardien est une cage vitrée dans un coin du vestibule, avec une chaise, un poêle, une table, un registre, et une sonnette qui ne sonne nulle part. De là, à la lueur de ta lanterne, tu vois le grand escalier qui monte dans le noir, les portes des salles, la porte de la cave, et au fond, une petite porte basse, cloutée, celle de la tour." },
      { first: true, text: "La maison craque. Toutes les vieilles maisons craquent. Celle-ci craque avec une régularité de respiration." },
      { again: true, text: "La loge vitrée, le poêle, le registre ouvert. Autour de toi, la maison respire dans le noir." },
    ],
    choices: [
      { label: "Ouvrir le registre de garde", hide: { seen: "A_registre" }, to: "A_registre" },
      { label: "Visiter la cuisine, sous l'escalier", hide: { seen: "A_cuisine" }, to: "A_cuisine" },
      { label: "Feuilleter le catalogue de la vente", hide: { seen: "A_catalogue" }, to: "A_catalogue" },
      { label: "Aller jusqu'à la grille regarder la rue", hide: { seen: "A_cour" }, to: "A_cour" },
      { label: "Écrire dans le registre tout ce que tu sais", second: true, if: { seen: "A_registre" }, hide: { seen: "S_registre2" }, to: "S_registre2" },
      { label: "Ouvrir à Aristide, qui revient chercher ses gants", second: true, hide: { any: [{ seen: "S_aristide_nuit" }, { seen: "S_melie" }, { seen: "S_trois" }] }, fx: { until: 0 }, to: "S_aristide_nuit" },
      { label: "Boire une gorgée de la flasque d'Aristide", hide: { has: "flasque:bue" }, fx: { flag: "flasque:bue" }, to: "A_flasque" },
      { label: "Entrer dans la galerie des naturalia", to: "A_galerie" },
      { label: "Monter à la salle des automates", to: "A_automates" },
      { label: "Pousser la porte de la chambre des miroirs", to: "A_miroirs" },
      { label: "Monter à la bibliothèque", to: "A_bibliotheque" },
      { label: "Descendre à la cave", to: "A_cave" },
      { label: "Passer dans le jardin", to: "A_jardin" },
      { label: "Aller voir la porte de la tour", to: "A_tour_porte" },
      { label: "Faire la ronde de onze heures", second: false, hide: { seen: "A_ronde23" }, fx: { until: 23 }, to: "A_ronde23" },
      { label: "Faire la ronde de minuit", second: false, if: { seen: "A_ronde23" }, hide: { seen: "A_ronde0" }, fx: { until: 0 }, to: "A_ronde0" },
      { label: "Faire la ronde d'une heure", second: false, if: { seen: "A_ronde0" }, hide: { seen: "A_ronde1" }, fx: { until: 1 }, to: "A_ronde1" },
      { label: "Faire la ronde de deux heures", second: false, if: { seen: "A_ronde1" }, hide: { seen: "A_ronde2" }, fx: { until: 2 }, to: "A_ronde2" },
      { label: "Faire la ronde de trois heures", second: false, if: { seen: "A_ronde2" }, hide: { seen: "A_ronde3" }, fx: { until: 3 }, to: "A_ronde3" },
      { label: "Faire la ronde de quatre heures", second: false, if: { seen: "A_ronde3" }, hide: { seen: "A_ronde4" }, fx: { until: 4 }, to: "A_ronde4" },
      { label: "Faire la ronde de cinq heures", second: false, if: { seen: "A_ronde4" }, hide: { seen: "A_ronde5" }, fx: { until: 5 }, to: "A_ronde5" },
      { label: "Attendre l'aube dans la loge", second: false, if: { seen: "A_ronde5" }, fx: { until: 6 }, to: "F_vitrine" },
      { label: "Guetter à deux heures, derrière les buis du jardin", second: true, hide: { any: [{ seen: "S_melie" }, { seen: "S_trois" }] }, fx: { until: 2 }, to: "S_melie" },
      { label: "Guetter la Sibylle à trois heures, derrière l'horloge", second: true, hide: { seen: "S_trois" }, fx: { until: 3 }, to: "S_trois" },
      { label: "Attendre l'aube, la Larme dans ta main", second: true, if: { all: [{ seen: "S_trois" }, { item: "larme" }] }, fx: { until: 6, flag: "larme:rendue" }, to: "F_cabinet" },
      { label: "Attendre l'aube dans la loge", second: true, if: { all: [{ seen: "S_trois" }, { not: { item: "larme" } }] }, fx: { until: 6 }, to: "F_cabinet" },
    ] },

  A_flasque: { act: "I", title: "La flasque", place: "loge",
    text: [
      "Tu dévisses le bouchon d'argent. Une odeur de prune, de bois brûlé et de quelque chose de plus fade, au fond, comme de la fleur de tilleul. Tu bois une gorgée. C'est fort, c'est doux, c'est chaud. Ça descend dans ta poitrine comme une couverture.",
      "La cave du vieil Orsenne était admirable, en effet. Tu rebouches la flasque avec un regret de gourmet, et tu la poses sur la table de la loge, à portée de main.",
    ],
    choices: [
      { back: "A_loge" },
    ] },

  // ------------------------------------------------------------------ the rooms
  A_galerie: { act: "I", title: "La galerie des naturalia", place: "galerie", hub: true, backName: "la galerie",
    text: [
      { first: true, text: "La galerie est longue comme une nef, et ta lanterne n'en éclaire qu'une chapelle à la fois. Des deux côtés, des vitrines, et dans les vitrines, tout ce que la nature a fait de travers : des coquillages en forme d'oreilles, des pierres en forme de pains, des coraux en forme de cerveaux, des oiseaux de paradis sans pattes, piqués sur des tiges comme des fleurs. Au plafond, retenu par des chaînes, un crocodile de quinze pieds pend au-dessus de ta tête, le ventre jaune, la gueule entrouverte sur cent dents, et son ombre, quand tu lèves la lanterne, rampe au plafond comme s'il nageait encore." },
      { first: true, text: "Au fond, dressé sur ses pattes de derrière, un ours brun de la taille d'un homme et demi tend vers toi deux bras ouverts, comme un hôte trop affectueux. Et entre l'ours et le crocodile, sur une colonne de marbre, un grand sablier de verre de Venise, plus haut qu'un enfant, dont tout le sable dort dans le bulbe du bas." },
      { again: true, text: "La galerie, ses vitrines, le crocodile au plafond, l'ours aux bras ouverts, et le grand sablier sur sa colonne." },
    ],
    choices: [
      { label: "Examiner le grand sablier", hide: { seen: "A_sablier" }, to: "A_sablier" },
      { label: "Ouvrir le socle du sablier", if: { any: [{ has: "enigme:o1" }, { second: true }] }, hide: { item: "clef_cuivre" }, fx: { item: "clef_cuivre" }, to: "A_socle" },
      { label: "Regarder la vitrine basse des pierres", hide: { seen: "A_pierres" }, to: "A_pierres" },
      { label: "Suivre la cordelette noire derrière l'ours", second: true, hide: { seen: "A_ours_corde" }, to: "A_ours_corde" },
      { label: "Regarder les bocaux du fond", hide: { seen: "A_bocaux" }, to: "A_bocaux" },
      { label: "Lever la lanterne vers le crocodile", hide: { seen: "A_crocodile" }, to: "A_crocodile" },
      { label: "S'approcher de l'ours", hide: { seen: "A_ours" }, to: "A_ours" },
      { back: "A_loge" },
    ] },

  A_sablier: { act: "I", title: "Le sablier de Mnémosyne", place: "galerie",
    fx: { clue: "i_plaque" },
    text: [
      "Le verre est si fin qu'il semble fait de bulles de savon soufflées l'une dans l'autre. Les deux bulbes sont reliés par une taille de guêpe, et le sable qui dort dans celui du bas a une couleur étrange : gris pâle, presque blanc, avec des reflets de nacre, comme de la cendre d'os broyée très fin.",
      "Sur la colonne, une plaque de cuivre : *Sablier de Mnémosyne. Venise, 1612. Qui me retourne à l'aube retrouve sa nuit.* Et dessous, à la main, au crayon, d'une écriture de vieillard : *Je l'ai retourné quarante fois. Il n'a jamais rien rendu. — H. O.*",
      { second: true, text: "Tu poses la main sur le verre. Il est tiède. Le sable, dans le bulbe du bas, a la forme exacte d'une nuit, si une nuit pouvait avoir une forme." },
    ],
    choices: [
      { back: "A_galerie" },
    ] },

  A_socle: { act: "I", title: "Le socle", place: "galerie",
    text: [
      "Entre le crocodile et l'ours, a écrit la Sibylle. Tu passes les doigts sous la colonne de marbre. Un panneau de bois peint en faux marbre cède sous ta pression avec un déclic, et révèle un tiroir plat, garni de velours vert. Dedans, une petite clef de cuivre, ouvragée, et une étiquette : *Pour ouvrir une dame. Avec respect.*",
    ],
    choices: [
      { back: "A_galerie" },
    ] },

  A_bocaux: { act: "I", title: "Les bocaux", place: "galerie",
    text: [
      "Au fond de la galerie, sur quatre étagères qui montent jusqu'au plafond, des centaines de bocaux d'alcool jaune où flottent des choses. Un serpent à deux têtes, enroulé sur lui-même comme une phrase qui hésite. Un agneau à six pattes. Une main de singe, ouverte, la paume tournée vers la vitre. Un fœtus de requin, pâle, avec des yeux énormes et étonnés. Des poissons des abysses, noirs, armés de dents trop longues pour leur bouche et de petites lanternes sur le front.",
      "Ta lanterne fait bouger les reflets, et les reflets font bouger les choses. Tu sais que c'est la lumière. Tu le sais très bien. Tu baisses quand même la lanterne.",
      { if: { voie: "etudiant" }, text: "Tu reconnais, dans un bocal du bas, le célèbre axolotl d'Orsenne, dont tu as vu la gravure dans ton manuel : une salamandre mexicaine qui ne devient jamais adulte. On dit qu'Orsenne lui parlait. On dit aussi qu'il lui répondait." },
    ],
    choices: [
      { back: "A_galerie" },
    ] },

  A_crocodile: { act: "I", title: "Le crocodile", place: "galerie",
    text: [
      "Tu lèves la lanterne. Le crocodile pend dans ses chaînes, à trois mètres au-dessus de toi, et la lumière glisse le long de son ventre écailleux, de sa queue, de ses pattes repliées comme des mains de vieillard, jusqu'à sa gueule. Elle est entrouverte d'un pouce. Entre les dents, quelque chose de pâle dépasse, comme un bout de langue en papier.",
      "Il est trop haut. Il faudrait une échelle, et une raison.",
    ],
    choices: [
      { back: "A_galerie" },
    ] },

  A_ours: { act: "I", title: "L'ours", place: "galerie",
    text: [
      "L'ours te domine de deux têtes. Ses yeux de verre brun reflètent ta lanterne en deux petites flammes jumelles. Il sent la poussière, le camphre et l'arsenic, l'odeur de toutes les bêtes empaillées, qui est l'odeur de l'éternité vue par un pharmacien.",
      "Sur son socle, une étiquette : *Ours des Pyrénées, tué par H. O. en 1771, qui le regrette.* Et en dessous, d'une autre main, sèche et nette : *Préparé par M. Vasseur.*",
    ],
    choices: [
      { back: "A_galerie" },
    ] },

  A_automates: { act: "I", title: "La salle des automates", place: "automates", hub: true, backName: "la salle des automates",
    text: [
      { first: true, text: "La salle des automates est ronde, sous une coupole peinte d'un ciel nocturne où des étoiles dorées s'écaillent. Tout autour, sur des socles, des personnages de cire, d'émail et de laiton attendent, figés au milieu d'un geste : un joueur de tympanon aux baguettes levées, un petit écrivain chinois devant son pupitre, un singe musicien, un magicien qui soulève un gobelet. Au fond, une horloge astronomique haute comme une armoire montre les phases de la lune, les signes du zodiaque et l'heure, avec des aiguilles immobiles." },
      { first: true, text: "Et au centre, sur une estrade tendue de velours rouge, assise à un secrétaire miniature, une dame de porcelaine en robe de soie bleue tient une plume d'oie au-dessus d'une feuille blanche. Son visage est d'une beauté calme, un peu ironique. Son œil droit est de verre noir. Son œil gauche est un diamant bleu, gros comme une noisette, si profond que ta lanterne s'y noie. La Sibylle." },
      { again: true, text: "La salle ronde sous son ciel écaillé, les automates figés, l'horloge arrêtée, et la Sibylle à son secrétaire, la plume levée." },
    ],
    choices: [
      { label: "Regarder de près la Sibylle", hide: { seen: "A_sibylle" }, to: "A_sibylle" },
      { label: "Donner trois tours de clef au joueur de tympanon", hide: { seen: "A_tympanon" }, to: "A_tympanon" },
      { label: "Soulever les gobelets du magicien", hide: { seen: "A_magicien" }, to: "A_magicien" },
      { label: "Regarder le singe au violon", hide: { seen: "A_singe" }, to: "A_singe" },
      { label: "Faire repartir l'horloge astronomique malgré la consigne", second: true, if: { seen: "A_horloge" }, hide: { seen: "S_horloge_remontee" }, to: "S_horloge_remontee" },
      { label: "Examiner l'horloge astronomique", hide: { seen: "A_horloge" }, to: "A_horloge" },
      { label: "Ouvrir le dos de la Sibylle avec la clef de cuivre", if: { item: "clef_cuivre" }, hide: { seen: "A_dos" }, to: "A_dos" },
      { label: "Parler dans le tube, sous le chignon de la Sibylle", second: true, if: { seen: "A_dos" }, hide: { any: [{ has: "enigme:s_tube" }, { has: "tour:ouverte" }] }, to: "S_tube" },
      { label: "Glisser une question sous la plume de la Sibylle", second: true, hide: { any: [{ has: "enigme:o5" }, { has: "tour:ouverte" }] }, to: "A_sib5" },
      { label: "Monter à la tour", second: true, if: { has: "tour:ouverte" }, to: "S_escalier" },
      { back: "A_loge" },
    ] },

  A_sibylle: { act: "I", title: "La Sibylle", place: "automates",
    text: [
      "De près, la Sibylle est plus belle et plus inquiétante. Sa peau de porcelaine a de très fines craquelures, comme une vieille femme qui serait restée jeune par entêtement. Ses doigts articulés tiennent la plume avec une grâce exacte. Sa poitrine, sous la soie, est une cage de laiton où dorment des roues, des cames et des ressorts, et l'on devine, par une fente du corsage, un cylindre gravé de mille petites dents.",
      "Le diamant de son œil gauche te regarde. Il avale la lanterne, et la rend plus bleue, très loin, au fond, comme une lumière vue du fond d'un puits.",
      "Sur le socle : *Lot n° 1. La Sibylle, automate écrivain, par Jaquet, de Neuchâtel, 1774. Répond par écrit à trois questions. Œil gauche : la Larme de Golconde, 41 carats.*",
    ],
    choices: [
      { back: "A_automates" },
    ] },

  A_horloge: { act: "I", title: "L'horloge arrêtée", place: "automates",
    fx: { clue: "i_horloge" },
    text: [
      "L'horloge astronomique est un meuble de noyer noirci, haut comme une armoire, avec un cadran d'émail bleu où tournent, à l'ordinaire, le soleil, la lune et sept planètes d'argent. Rien ne tourne. Les aiguilles sont arrêtées sur trois heures dix-sept, et la lune, dans sa fenêtre ronde, montre une face pleine et blafarde, comme une figure qui aurait vu quelque chose.",
      "Une carte est glissée sous la vitre, de la main de Pigache : *Arrêtée à l'heure du décès, le 13 octobre, par respect. Ne pas remonter avant la vente.*",
    ],
    choices: [
      { back: "A_automates" },
    ] },

  A_dos: { act: "I", title: "Le dos de la Sibylle", place: "automates",
    text: [
      "La petite clef de cuivre entre dans une serrure cachée sous le chignon de la Sibylle. Tu la tournes, avec respect. Le dos de la dame s'ouvre comme une armoire. Dedans, une forêt de laiton : des roues dentées, des leviers, des cames, et le grand cylindre qui commande la main. Tout cela est immobile. Tout cela est bien huilé.",
      "Mais ce qui t'arrête, c'est autre chose. Du fond de la mécanique partent trois fines tringles d'acier, neuves, brillantes, qui ne servent à rien dans un automate de 1774. Elles passent par un trou dans l'estrade, descendent sous le plancher, ou montent, tu ne sais plus, et un tube de cuivre les accompagne, terminé à hauteur de la nuque de la Sibylle par un petit pavillon de trompette, fermé d'un couvercle gravé : *Dis mon nom à la mère des Muses.*",
      { second: false, text: "Tu souffles dans le pavillon. Le souffle monte, descend, se perd, et rien ne répond, qu'un très faible écho, comme si la maison avait avalé ta voix." },
    ],
    choices: [
      { back: "A_automates" },
    ] },

  A_miroirs: { act: "I", title: "La chambre des miroirs", place: "miroirs", hub: true, backName: "la chambre des miroirs",
    text: [
      { first: true, text: "La chambre des miroirs est une pièce octogonale, sans fenêtre, entièrement tapissée de glaces de Venise du sol au plafond. Tu entres avec ta lanterne, et tu entres avec toi cent fois. Cent gardiens, cent lanternes, en files qui s'enfoncent et se courbent à l'infini, de plus en plus verts, de plus en plus lointains, comme des noyés qui descendraient en procession vers le fond d'un lac. Tu lèves la main. Cent mains se lèvent, avec un retard d'une fraction de seconde, qui doit être une illusion." },
      { again: true, text: "La chambre des miroirs et ses cent gardiens qui s'enfoncent dans le vert." },
    ],
    choices: [
      { label: "Tenir la page du crocodile devant un miroir", if: { item: "page_miroir" }, hide: { has: "enigme:o4" }, to: "A_page" },
      { label: "Fixer le reflet le plus lointain", hide: { seen: "A_reflet_loin" }, to: "A_reflet_loin" },
      { back: "A_loge" },
    ] },

  A_page: { act: "I", title: "La page à l'envers", place: "miroirs", puzzle: "o4",
    text: [
      "Tu tiens la page devant une glace, face au miroir, et tu lis par-dessus ton épaule ce que le miroir en fait.",
    ],
    choices: [
      { back: "A_miroirs" },
    ] },

  A_reflet_loin: { act: "I", title: "Le reflet le plus lointain", place: "miroirs",
    text: [
      "Tu fixes la file de reflets, de plus en plus loin, jusqu'à ce que les gardiens deviennent des points de lumière verte. Et là, tout au fond, à la centième ou à la millième glace, il te semble qu'un des reflets ne tient pas de lanterne. Il est plus grand. Plus maigre. Plus voûté. Il porte une robe de chambre.",
      "Tu clignes des yeux. Il n'y a que toi, cent fois.",
    ],
    choices: [
      { back: "A_miroirs" },
    ] },

  A_bibliotheque: { act: "I", title: "La bibliothèque", place: "bibliotheque", hub: true, backName: "la bibliothèque",
    text: [
      { first: true, text: "La bibliothèque occupe toute la hauteur de deux étages, avec deux galeries de fer forgé qui en font le tour et des échelles qui coulissent sur des rails. Des milliers de livres, reliés de veau, de maroquin, de parchemin, dorment en rangs serrés, et leur odeur de colle, de cuir et de poussière sucrée est si dense qu'on la respire comme un brouillard. Le plafond, tout en haut, est un plancher de bois peint : au-dessus, il n'y a plus que la tour." },
      { again: true, text: "La bibliothèque, ses galeries de fer, ses milliers de dos de cuir, et le plafond de bois, sous la tour." },
    ],
    choices: [
      { label: "Regarder le portrait au-dessus du bureau", hide: { seen: "A_portrait" }, to: "A_portrait" },
      { label: "Monter à la galerie haute, vers la porte scellée", hide: { seen: "A_chambre_scellee" }, to: "A_chambre_scellee" },
      { label: "Écouter le plafond", hide: { seen: "A_plafond" }, to: "A_plafond" },
      { label: "Regarder le coffre neuf, derrière les Buffon", hide: { seen: "A_coffre_vu" }, to: "A_coffre_vu" },
      { label: "Tourner les molettes du coffre d'Aristide", second: true, hide: { has: "preuve:aristide" }, to: "S_coffre" },
      { back: "A_loge" },
    ] },

  A_plafond: { act: "I", title: "Le plafond", place: "bibliotheque",
    fx: { clue: "i_pas" },
    text: [
      "Tu poses la lanterne et tu tends l'oreille. La pluie sur les ardoises, loin. Le craquement des rayonnages. Et puis, juste au-dessus du plafond peint, à l'aplomb du grand bureau, un pas. Un pas lent, glissé, un pas de pantoufle, qui traverse, s'arrête, revient.",
      "La tour est fermée. Le défunt en a emporté la clef. Le pas s'arrête au-dessus de ta tête, exactement, comme s'il t'écoutait l'écouter.",
    ],
    choices: [
      { back: "A_bibliotheque" },
    ] },

  A_coffre_vu: { act: "I", title: "Le coffre du neveu", place: "bibliotheque",
    text: [
      "Derrière les in-folio de l'*Histoire naturelle* de Buffon, quelqu'un a poussé un petit coffre de voyage en acier, neuf, qui jure au milieu des reliures comme un huissier dans une chapelle. Une étiquette de cuir porte les initiales *A. O.* Une serrure à quatre molettes. Sur le couvercle, gravé à la demande du client : *Délivrance.*",
      "Un coffre neuf, dans une maison où tout sera vendu demain. Le neveu y garde quelque chose qu'il emportera avant les enchères.",
    ],
    choices: [
      { back: "A_bibliotheque" },
    ] },

  A_cave: { act: "I", title: "La cave", place: "reserve", hub: true, backName: "l'escalier de la cave",
    text: [
      { first: true, text: "L'escalier de la cave descend en colimaçon dans une odeur de salpêtre et de vin tourné. Les marches sont humides, creusées au milieu par trois siècles de pieds. En bas, un couloir voûté, où ta lanterne fait luire des gouttes au plafond, mène à une porte bardée de fer, fermée par un cadenas anglais à quatre molettes. Sur le linteau, gravé au couteau : *À l'heure du maître.*" },
      { again: true, text: "Le couloir voûté, les gouttes qui luisent, la porte de fer et son cadenas à molettes." },
    ],
    choices: [
      { label: "Coller l'oreille à la porte", hide: { seen: "A_oreille" }, to: "A_oreille" },
      { label: "Tourner les molettes du cadenas", hide: { has: "enigme:o3" }, to: "A_cadenas" },
      { label: "Entrer dans la réserve", if: { has: "enigme:o3" }, to: "A_reserve" },
      { back: "A_loge" },
    ] },

  A_oreille: { act: "I", title: "Derrière la porte", place: "reserve",
    text: [
      "Tu colles l'oreille au fer froid. D'abord rien, que ton sang. Puis un bruit très fin, régulier, patient : une lime. Quelqu'un lime quelque chose, de l'autre côté, dans le noir, avec la patience d'un prisonnier qui a vingt ans devant lui. Le bruit s'arrête. Tu retiens ton souffle. Il reprend.",
    ],
    choices: [
      { back: "A_cave" },
    ] },

  A_cadenas: { act: "I", title: "Le cadenas", place: "reserve", puzzle: "o3",
    text: [
      "Quatre molettes de laiton, froides et graissées de frais. *À l'heure du maître.*",
    ],
    choices: [
      { back: "A_cave" },
    ] },

  A_reserve: { act: "I", title: "La réserve", place: "reserve",
    fx: { meet: ["gobe"], clue: ["i_gobe", "i_copies"] },
    text: [
      { first: true, text: "La réserve est une longue cave voûtée, pleine de caisses de la vente, numérotées à la craie, empilées jusqu'aux voûtes. Au fond, sous une lampe à réflecteur, un établi couvert d'outils d'orfèvre, de flacons, de pinceaux, de moules de plâtre. Et devant l'établi, un petit homme pâle, en manchettes de lustrine, une loupe d'horloger vissée à l'œil, qui se retourne d'un bloc en te voyant, une lime à la main, comme un chat surpris dans le garde-manger." },
      { first: true, text: "« Fortuné Gobe, dit-il très vite, à voix basse. Restaurateur. Maître Pigache m'a engagé pour nettoyer les lots avant la vente. Il n'aime pas qu'on le sache : les acheteurs croient que tout est d'origine. » Il essuie sa lime. « Vous ne m'avez pas vu. Je ne vous ai pas vu. C'est la règle de la maison. »" },
      "Sur l'établi, à côté des outils, des choses que tu reconnais : une seconde corne de narval, en plâtre peint, si bien imitée qu'on en sentirait le froid ; un second oiseau mécanique en argent, sans mécanisme ; et dans un écrin de velours, un œil de verre bleu, taillé à facettes comme un diamant, gros comme une noisette.",
      { again: true, text: "La réserve, les caisses à la craie, l'établi sous sa lampe, et Gobe qui travaille en te tournant le dos." },
    ],
    choices: [
      { label: "Lui demander ce qu'il restaure", hide: { seen: "A_gobe_parle" }, to: "A_gobe_parle" },
      { label: "Regarder de près l'œil de verre bleu", hide: { seen: "A_oeil_verre" }, to: "A_oeil_verre" },
      { label: "Prendre le billet qui traîne sur l'établi", second: true, hide: { item: "note_gobe" }, fx: { item: "note_gobe" }, to: "S_billet_gobe" },
      { label: "Lui proposer un marché", second: true, if: { has: "note:lue" }, hide: { any: [{ has: "gobe:temoin" }, { seen: "S_gobe_refus" }] }, test: { dom: "social", diff: 0, label: "Social" }, win: { fx: { flag: "gobe:temoin" }, to: "S_gobe_accord" }, lose: { to: "S_gobe_refus" } },
      { back: "A_cave" },
    ] },

  A_jardin: { act: "I", title: "Le jardin", place: "jardin", hub: true, backName: "le jardin",
    text: [
      { first: true, text: "Le jardin est une fosse mouillée entre quatre murs trop hauts, où la pluie tombe sans bruit sur des buis trop taillés et des statues trop blanches. Au fond, une petite porte de bois dans le mur donne sur la ruelle. Et au-dessus de tout, collée à la maison, la tour ronde monte dans la nuit, toute vêtue de lierre noir, jusqu'à sa lucarne aveugle." },
      { again: true, text: "Le jardin mouillé, les statues, la porte au fond, et la tour vêtue de lierre." },
    ],
    choices: [
      { label: "Regarder la tour depuis le jardin", hide: { seen: "A_tour_jardin" }, to: "A_tour_jardin" },
      { back: "A_loge" },
    ] },

  A_tour_jardin: { act: "I", title: "La tour, vue d'en bas", place: "jardin",
    text: [
      "Tu lèves la lanterne vers la tour. Le lierre y grimpe en grosses tresses noires, épais comme un bras, jusqu'au sommet. La lucarne ronde, tout en haut, est une lentille, un œil de verre bombé, qui reflète faiblement le ciel bas, et qui pivote, lentement, d'un cran, pendant que tu la regardes.",
      "Tu baisses la lanterne. Quand tu la relèves, la lentille est immobile.",
    ],
    choices: [
      { back: "A_jardin" },
    ] },

  A_tour_porte: { act: "I", title: "La porte de la tour", place: "tour",
    text: [
      "Au fond du vestibule, la petite porte basse de la tour, cloutée de fer, fermée à clef. *Le défunt en a emporté la clef, Dieu sait où.* Sous la porte, une ligne de lumière, très faible, jaune, la couleur d'une bougie.",
      "Tu frappes. La lumière s'éteint.",
    ],
    choices: [
      { back: "A_loge" },
    ] },

  // ------------------------------------------------------------------ the rounds of the first night
  A_ronde23: { act: "I", title: "Onze heures", place: "automates", second: false,
    text: [
      "Onze heures. Tu fais ta première ronde, la lanterne basse, le trousseau à la main. Les salles sont telles que tu les as laissées. La galerie. La chambre des miroirs. Et la salle des automates, où quelque chose t'arrête sur le seuil.",
      "La Sibylle a bougé. Pas beaucoup : sa tête s'est inclinée d'un doigt sur le côté, et sa plume s'est posée sur la feuille. La feuille blanche ne l'est plus. Une écriture penchée, à l'encre violette, couvre le haut de la page, encore humide, brillante sous ta lanterne.",
      "Tu regardes autour de toi. Les automates sont immobiles. L'horloge est arrêtée. La maison respire.",
    ],
    choices: [
      { label: "Lire la feuille de la Sibylle", hide: { has: "enigme:o1" }, to: "A_sib1" },
      { back: "A_automates" },
    ] },

  A_sib1: { act: "I", title: "La première feuille", place: "automates", second: false, puzzle: "o1",
    text: [
      "Tu te penches sur la feuille, sans la toucher. *Ne touchez à rien.*",
    ],
    choices: [
      { back: "A_automates" },
    ] },

  A_o1: { act: "I", title: "Entre le crocodile et l'ours", place: "automates", second: false,
    text: [
      "Le sablier. Le grand sablier de verre de Venise, dans la galerie, entre le crocodile et l'ours.",
      "Tu relèves les yeux vers la Sibylle. Elle a reposé sa plume dans l'encrier. Son visage de porcelaine n'a pas changé. Il te semble pourtant qu'il est content.",
    ],
    choices: [
      { back: "A_automates" },
    ] },

  A_ronde0: { act: "I", title: "Minuit", place: "galerie", second: false,
    text: [
      "Minuit. Douze coups sonnent à Saint-Eustache, de l'autre côté de la rue, et ils entrent dans la maison un à un, comme des visiteurs. Tu fais ta ronde.",
      "Dans la galerie, le crocodile a tourné. Il pendait la tête vers la porte ; il la tourne à présent vers le fond, vers l'ours et le sablier, et ses chaînes oscillent encore très légèrement, comme un pendule qu'on vient de lâcher.",
      "Et dans la salle des automates, sous la plume de la Sibylle, une nouvelle feuille, couverte d'encre violette.",
    ],
    choices: [
      { label: "Lire la deuxième feuille", hide: { has: "enigme:o2" }, to: "A_sib2" },
      { label: "Aller ouvrir à qui sonne à la grille", hide: { seen: "A_visiteur" }, to: "A_visiteur" },
      { back: "A_galerie" },
    ] },

  A_sib2: { act: "I", title: "La deuxième feuille", place: "automates", second: false, puzzle: "o2",
    text: [
      "La feuille sent encore l'encre fraîche, et la plume de la Sibylle est mouillée jusqu'à la barbe.",
    ],
    choices: [
      { back: "A_automates" },
    ] },

  A_o2: { act: "I", title: "La gueule du crocodile", place: "galerie", second: false,
    text: [
      "Le crocodile. Tu retournes à la galerie, tu traînes une échelle de bibliothèque jusque sous la bête, tu montes, et tu te retrouves nez à nez avec quinze pieds de cuir verni et cent dents jaunes, dans une odeur de camphre et de Nil desséché.",
      "Tu glisses deux doigts entre les dents. Une page pliée en deux, jaunie, couverte de capitales violettes. Tu la tires. Au moment où elle sort, la mâchoire du crocodile se referme d'un quart de pouce, avec un petit claquement sec de ressort, et tu manques de tomber de l'échelle.",
      "Un ressort. Un piège de théâtre. Quelqu'un dans cette maison a le sens de la mise en scène.",
    ],
    choices: [
      { back: "A_galerie" },
    ] },

  A_ronde1: { act: "I", title: "Une heure", place: "reserve", second: false,
    text: [
      "Une heure. En descendant l'escalier du vestibule pour ta ronde, tu entends un bruit sous tes pieds. Un choc de bois sur de la pierre, sourd, puis un juron étouffé. Le bruit vient de la cave.",
      "Tu descends. Le couloir voûté est vide. La porte de fer est fermée, cadenassée. Mais sous la porte, une ligne de lumière jaune, et derrière, le bruit fin, patient, d'une lime.",
    ],
    choices: [
      { back: "A_cave" },
    ] },

  A_ronde2: { act: "I", title: "Deux heures", place: "jardin", second: false,
    fx: { clue: "i_melie", meet: ["melie"] },
    text: [
      "Deux heures. Tu fais le tour du jardin sous la pluie, la lanterne voilée. La petite porte du fond grince. Tu te plaques contre un buis.",
      "Une femme entre, en châle gris, un panier au bras, d'où monte une vapeur qui sent le poireau et le lard. Elle traverse le jardin sans lumière, d'un pas sûr, en femme qui le connaît par cœur, et s'arrête au pied de la tour, devant le lierre. Elle lève la tête. Elle siffle, doucement, trois notes.",
      "Rien. Elle attend. Puis elle se retourne, et ta lanterne mal voilée lui éclaire le visage : une femme sèche, cinquante ans, une cicatrice blanche sur la joue. Elle te voit. Elle ne crie pas. Elle te regarde avec une colère froide.",
      "« La soupe, dit-elle. Pour le chat. Il y avait un chat, dans cette maison. Le neveu l'a oublié avec le reste. » Elle repart vers la porte du fond avec son panier plein, qui fume pour une seule personne. Elle la referme sans bruit.",
    ],
    choices: [
      { label: "Ouvrir la petite porte derrière elle", hide: { seen: "A_ruelle" }, to: "A_ruelle" },
      { back: "A_jardin" },
    ] },

  A_ronde3: { act: "I", title: "Trois heures", place: "galerie", second: false,
    text: [
      { if: { has: "flasque:bue" }, text: "Trois heures moins dix. Tu t'assois une minute dans la loge pour te réchauffer avant ta ronde. La chaleur du poêle, la chaleur de la prune d'Aristide, le bruit de la pluie. Tes paupières pèsent. Tu fermes les yeux une seconde." },
      { if: { has: "flasque:bue" }, text: "Quand tu les rouvres, l'horloge de Saint-Eustache sonne la demie. Trois heures et demie. Tu as dormi quarante minutes d'un sommeil de pierre, sans rêve, avec un goût fade de tilleul dans la bouche. Tu te lèves d'un bond et tu cours faire ta ronde, la tête lourde." },
      { if: { not: { has: "flasque:bue" } }, text: "Trois heures. Tu montes l'escalier pour ta ronde quand un fracas énorme éclate dans la galerie, un fracas de bois, de verre et de chute, qui fait trembler toute la maison. Tu cours. Dans la galerie, l'ours est tombé de son socle, face contre terre, les bras ouverts sur les dalles, au milieu d'une vitrine pulvérisée. Il a l'air d'un ivrogne qui aurait voulu t'embrasser." },
      { if: { not: { has: "flasque:bue" } }, text: "Tu passes un quart d'heure à le relever, à balayer le verre, à replacer les coquillages. Le socle est intact. Les vis sont intactes. Rien n'explique la chute, sauf une petite cordelette de soie noire, cassée net, qui pend de la patte de l'ours." },
      "Le reste de la maison est calme. Dans la salle des automates, la Sibylle est à son secrétaire, la plume levée, son œil bleu ouvert sur la nuit.",
    ],
    choices: [
      { back: "A_galerie" },
    ] },

  A_ronde4: { act: "I", title: "Quatre heures", place: "automates", second: false,
    text: [
      "Quatre heures. Dans la salle des automates, une feuille neuve sous la plume de la Sibylle. L'écriture est plus tremblée que les autres, plus lente, comme si la main qui la guide se fatiguait.",
      "Et au-dessus de ta tête, à travers la coupole peinte, un pas. Le même pas de pantoufle que dans la bibliothèque. Il va, il vient, il s'arrête au-dessus de la Sibylle.",
    ],
    choices: [
      { label: "Lire la question de la Sibylle", hide: { has: "enigme:o5" }, to: "A_sib5" },
      { back: "A_automates" },
    ] },

  A_sib5: { act: "I", title: "La question", place: "automates", puzzle: "o5",
    text: [
      "Tu prends la plume que la Sibylle a laissée sur l'encrier. Elle est tiède.",
    ],
    choices: [
      { back: "A_automates" },
    ] },

  A_o5: { act: "I", title: "Presque", place: "automates",
    text: [
      "Tu écris ta réponse sous la question, d'une main qui tremble un peu, et tu reposes la plume.",
      "Pendant un long moment, rien. Puis la main de la Sibylle se soulève, avec un petit bruit de rouages, et vient chercher la plume entre tes doigts. Elle la trempe dans l'encre violette. Elle écrit, sous ta réponse, un seul mot, de son écriture penchée : *Presque.*",
      "Et la plume se repose. Et au-dessus de la coupole, le pas s'éloigne.",
    ],
    choices: [
      { back: "A_automates" },
    ] },

  A_ronde5: { act: "I", title: "Cinq heures", place: "tour", second: false,
    text: [
      "Cinq heures. La pluie a cessé. Le silence, dans la maison, est plus inquiétant que tous les craquements de la nuit. Tu fais ta dernière ronde, salle par salle, et tu finis devant la petite porte de la tour.",
      "La ligne de lumière, sous la porte, a disparu. Mais sur le seuil, sur la dalle, il y a trois brins de lierre noir, tout frais, mouillés, et une petite flaque, comme les traces de quelqu'un qui serait entré dans la tour par le dehors.",
      { if: { has: "enigme:o4" }, text: "*Je ne suis pas mort.* Tu regardes la porte. Tu poses la main sur le bois. Il est tiède, comme la plume." },
    ],
    choices: [
      { back: "A_loge" },
    ] },

  F_vitrine: { act: "I", title: "Les vitrines vides", place: "automates", end: true, second: false,
    fx: { flag: "fin:vitrine", meet: ["quatremain", "bejot"] },
    text: [
      "À six heures, la grille grince. Ils arrivent tous ensemble, dans le petit jour sale : Maître Pigache, Aristide Orsenne, un monsieur en noir à lorgnon qui porte une serviette de cuir, et un gros homme à écharpe tricolore qui bâille. « Monsieur Quatremain, de la Compagnie du Phénix, présente Pigache. Il vient vérifier le lot n° 1 avant la vente. Et le commissaire Béjot, par précaution. On ne vend pas quatre-vingt mille écus sans un commissaire. »",
      "Ils montent à la salle des automates. Monsieur Quatremain chausse son lorgnon, se penche sur la Sibylle, sort une petite loupe, une petite lampe, un petit flacon. Il regarde l'œil gauche longtemps. Puis il se redresse, très pâle.",
      "« Verre, dit-il. Très bon verre. Taillé par un maître. Mais verre. »",
      "Le silence qui suit a la qualité exacte du silence d'un tribunal. Puis Pigache se met à compter les lots de la salle, à voix haute, en courant d'un socle à l'autre, et trouve qu'il en manque trois : un oiseau mécanique en argent, une dent de narval, une balle de plomb montée sur une épingle, dont personne n'avait jamais compris pourquoi elle était au catalogue.",
      "Aristide Orsenne se tourne vers toi. Il a l'air navré, sincèrement, d'un homme à qui l'on vient d'apprendre que son chien a mordu un enfant. « Vous aviez toutes les clefs, dit-il doucement. Vous étiez seul{e}. Commissaire, je suis désolé. Faites votre métier. »",
      { if: { clue: "i_gobe" }, text: "Tu parles de Gobe, le restaurateur de la cave. Pigache te regarde avec des yeux ronds. « Quel restaurateur ? Je n'ai engagé personne. » On descend. La réserve est vide, l'établi est propre, et la porte de fer est grande ouverte." },
      { if: { clue: "i_melie" }, text: "Tu parles de la femme au châle gris. « Madame Vasseur ? dit Aristide. Je l'ai renvoyée il y a un mois. Elle me déteste. Elle a pu vous payer. » Le commissaire note, avec la satisfaction d'un homme dont la journée se simplifie." },
      { if: { has: "flasque:bue" }, text: "Tu dis que tu as dormi, à trois heures, d'un sommeil anormal. Aristide prend la flasque sur la table de la loge, la débouche, la sent, et la vide d'un trait devant tout le monde. « De la prune, dit-il. De la meilleure. Vous avez trop bu. » Il ne chancelle pas. Il a dû en boire une autre." },
      "On te passe les menottes, dans la salle ronde, sous le ciel écaillé, devant les automates figés qui ont tout vu et ne diront rien. La Sibylle te regarde de son œil de verre bleu, et son œil de verre noir, et elle a l'air, pour la première fois, triste.",
      "En traversant la galerie, entre deux agents, tu passes devant le grand sablier. Tout son sable est en bas. *Qui me retourne à l'aube retrouve sa nuit.* Tu tends la main, d'un geste absurde, désespéré, comme on se raccroche à une branche en tombant. Ta main menottée touche le verre. Il est tiède. Tu le pousses. Le sablier bascule sur son axe, et le sable, au lieu de couler, se met à monter.",
    ] },
};
