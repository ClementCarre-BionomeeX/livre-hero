// Lot v2 of "Le Trésor des Taiseurs": the queen's treasure hall under drowned Sorne (act V). The stair and the seven
// secretaries, the hall (gold, coffers, the salt crown, the Charter under sea glass, the binding of the Register), the
// queen's voice through the tuning fork on the singing throne, the confrontations (Lothaire, Corisande or her men,
// Gildas the Keeper, Aveline's soldiers), the sea coming back (clock "maree"), the climb to the queen's tower, the
// companions' wishes, and VT_choix, from which the seven endings of lot v3 are reached.
var P = {};
// the conditions this lot reads often (data only)
function M(min, max) { var c = { clock: "maree", min: min }; if (max !== undefined) c.max = max; return c; }
var MER = M(6);
var LIBRE = { not: { any: [{ has: "lothaire:vaincu" }, { has: "lothaire:mort" }, { has: "lothaire:allie" }] } };
var CORI = { has: "corisande:pacte" };
var BQ_LOTH = { all: [LIBRE, { not: CORI }] };
var BQ_BERALD = { all: [{ not: LIBRE }, { not: CORI }] };
var LOTH_LUTRIN = { all: [BQ_LOTH, { has: "vn:lothaire_devant" }, { not: { has: "vt:banque_reglee" } }] };
var AVELINE_ICI = { all: [{ not: { has: "prevot:dejoue" } }, { not: { has: "vn:soldats_chasses" } }, { not: { has: "vn:soldats_dehors" } }] };
var GARDIEN = { all: [{ has: "gildas:chasse" }, { not: { present: "gildas" } }, { not: { has: "gildas:mort" } }] };
var ALLIE = { has: "lothaire:allie" };
var CHARTE = { relic: "f_sorne" };
var REGLE = { all: [{ has: "vt:banque_reglee" }, { any: [{ not: AVELINE_ICI }, { has: "vt:aveline_reglee" }] },
  { any: [{ not: GARDIEN }, { has: "vt:gardien_regle" }] }, { any: [{ not: ALLIE }, { has: "vt:allie_regle" }, { not: CHARTE }] }] };
var OR_ANY = { is: { or: ["remonte", "partie"] } };
var CONSEIL = { any: [{ has: "prevot:dejoue" }, { fac: "conseil", min: 10 }] };
var HOIST = { any: [{ has: "basse:bateau" }, { has: "basse:equipage" }, { present: "salome" }, CORI] };
var ARRIVEE = { any: [{ seen: "VT_charte" }, { has: "vt:vannes" }, M(5),
  { count: [{ seen: "VT_voix" }, { seen: "VT_voix_muette" }, { seen: "VT_or" }, { seen: "VT_coffres" }, { seen: "VT_feuillets" }, { seen: "VT_couronne" }], min: 2 }] };
var PRISE = { all: [{ has: "vt:ville_prise" }, { not: { has: "prevot:dejoue" } }] };

// ==================================================================== the stair, the seven secretaries, the hall
Object.assign(P, {
  VT_seuil: { act: "V", title: "L'escalier de la colline", place: "sorne", backName: "la chambre des sept",
    fx: { ep: ["seance", 2000] },
    text: [
      { first: true, text: "L'escalier descend en tournant dans la colline, taillé dans une pierre blonde qui garde la chaleur de la main. Les marches sont sèches. Trois siècles de mer au-dessus, et la poussière est restée là où elle est tombée : tes bottes y laissent des traces nettes. À chaque palier, une niche, et dans chaque niche une lampe de cuivre, la mèche encore dedans, noire et raide." },
      { first: true, if: { is: { vn_porte: "force" } }, text: "La fente des gardiens rejoint l'escalier au quatrième palier, par un trou que les Taiseurs ont bouché d'une seule pierre, posée sans mortier. Tu la pousses du pied. Elle roule sur les marches avec un bruit qui descend longtemps devant toi." },
      { again: true, text: "La chambre ronde au pied de l'escalier, le banc de pierre, les sept robes de clerc. La porte verte entrouverte." },
      { first: true, if: { has: "vn:maree_haute" }, text: "Tes bottes sont pleines de l'eau de la place des Quatre-Puits. Tu laisses sur les marches sèches des traces mouillées, les premières depuis trois siècles." },
      "Les marches {{echo#vt_escalier|sont usées au milieu par des pas anciens|gardent des pas qui descendent ensemble, nombreux, et une voix de femme qui compte : « Sept. Nous sommes sept. Que personne ne remonte »}}.",
      { first: true, text: "En bas, l'escalier finit dans une chambre ronde et basse, meublée d'un banc de pierre qui en fait le tour. Sept personnes y sont assises. Il reste d'elles des os dans des robes de clerc, les mains posées sur les genoux, la tête appuyée au mur. En face de l'escalier, une seconde porte de bronze est entrouverte, et par la fente passe une lumière verte qui bouge." },
      { if: M(4, 5), text: "Très haut au-dessus de toi, la mer gronde dans la ville. Ici, l'air est immobile et sent l'ambre." },
      { if: MER, text: "De l'escalier, derrière toi, monte un bruit d'eau : le flot a trouvé la dernière porte et il descend les marches une à une. Il te reste le temps de quelques gestes." },
      { if: { all: [LIBRE, { has: "vn:lothaire_devant" }] }, text: "Sur le banc, entre deux morts, une lanterne sourde est posée, encore chaude. Des traces de bottes fraîches traversent la poussière jusqu'à la porte verte. Lothaire est passé il y a peu." },
      { if: { all: [LIBRE, { not: { has: "vn:lothaire_devant" } }, { not: { has: "vn:lothaire_retarde" } }] }, text: "Au-dessus, dans l'escalier, des pas. Loin encore. Quelqu'un descend derrière toi." },
      { if: { all: [AVELINE_ICI, { has: "vn:soldats_porte" }] }, text: "Les soldats d'Aveline descendent derrière toi en file, les piques baissées pour ne pas heurter la voûte. Leur capitaine compte les marches à voix haute, dans sa langue." },
      { first: true, with: "lison", text: "Lison s'arrête devant le banc et regarde les sept morts un par un. « Les sept secrétaires du chancelier, dit-elle. Ma grand-mère raconte qu'ils sont partis en mer et qu'on ne les a jamais revus. Je {{oreille#vt_lison_sept|croyais à cette histoire|savais qu'ils s'étaient enfermés ici de leur plein gré, et je me suis toujours demandé si j'aurais eu ce courage}}. »" },
      { first: true, with: "gildas", text: "Frère Gildas s'incline devant le banc, très bas, à la façon du Mont devant l'autel. Il se relève sans un mot." },
      { first: true, with: "tibere", text: "Tibère ôte son chapeau, regarde les morts, et le remet aussitôt, gêné de son propre geste." },
    ],
    choices: [
      { label: "T'approcher des sept morts sur leur banc", hide: { any: [{ seen: "VT_secretaires" }, MER] }, to: "VT_secretaires" },
      { label: "Pousser la porte verte et entrer dans la salle", big: true, to: "VT_salle" },
    ] },

  VT_secretaires: { act: "V", title: "Les sept secrétaires", place: "sorne",
    fx: { questSeen: "VT_q_secretaires" },
    text: [
      "Tu lèves ta lanterne. Ce sont quatre femmes et trois hommes, à en juger par les robes et par la taille. Les robes sont de laine noire, bordées d'un galon de soie qui a gardé sa couleur, un violet de prune. Chacun tient sur ses genoux, entre ses doigts, un petit disque de la taille d'une pièce, gravé d'une bouche fermée.",
      "Les jetons {{pie#vt_jetons|sont de petits disques d'ambre gris, ternes et sans valeur|sont d'ambre chantant des Écueils, le même que tes instruments : chacun garde une note, et les sept ensemble font l'accord des Taiseurs}}.",
      "Au-dessus de chaque tête, sur le mur, quelqu'un a peint une ligne à l'ocre, que l'humidité a presque bue. Tu déchiffres un mot sur trois : *{{loupe#vt_secr_noms|Ici nous attendons la reine|Ivona Vasse, Pol Brac, Enora Kerhoas, Alan Danic, Gwenn Lannuzel, Tiphaine Ruellan, Judicaël Riou : nous avons fermé la porte de dedans, pour que la clé reste avec nous}}.*",
      "La femme du milieu a la main droite posée sur la main de son voisin. Elle est restée là trois cents ans.",
      { with: "fauvette", text: "Fauvette regarde les jetons, puis toi, puis les jetons. « Je demande, c'est tout, dit-elle. Je ne touche pas. » Elle met les mains dans son dos." },
      { with: "salome", text: "Salomé reste sur la dernière marche. Elle n'aime pas les morts assis : en mer, on les couche, on les coud dans une toile, on les rend à l'eau." },
    ],
    choices: [
      { label: "Lire les noms à voix haute, un par un", hide: { not: { voile: "vt_secr_noms" } }, to: "VT_secretaires_noms" },
      { label: "Prendre les sept jetons d'ambre", to: "VT_secretaires_jetons" },
      { label: "Les laisser à leur garde, et passer", fx: { quest: "VT_q_secretaires", flag: "vt:secretaires", set: { vt_secretaires: "paix" } }, back: "VT_seuil" },
    ] },

  VT_secretaires_noms: { act: "V", title: "Les noms sur le mur", place: "sorne",
    fx: { quest: "VT_q_secretaires", flag: "vt:secretaires", set: { vt_secretaires: "noms" }, ep: ["seance", 3000], fac: { taiseurs: 5 } },
    text: [
      "Tu lis les noms. Ta voix sonne bas sous la voûte. « Ivona Vasse. Pol Brac. Enora Kerhoas. Alan Danic. Gwenn Lannuzel. Tiphaine Ruellan. Judicaël Riou. »",
      "Au septième nom, les jetons sur les genoux des morts se mettent à vibrer, tous ensemble, très doucement. L'accord monte, tient, s'éteint. Ensuite la chambre est plus calme qu'avant.",
      { with: "lison", text: "Lison a pâli au premier nom. « Ivona Vasse, répète-t-elle. Il y a une Ivona dans la généalogie que ma grand-mère récite à Noël. Elle s'arrête toujours sur ce nom-là, et elle passe au suivant sans rien dire. » Elle pose deux doigts sur l'épaule de la morte, et les retire." },
      { with: "salome", text: "« Brac », dit Salomé derrière toi. Elle descend la dernière marche. Elle regarde l'homme assis à la place de Pol Brac, ses os longs, ses grandes mains. « Les Brac de Port-Vasier ont toujours dit qu'un des leurs avait servi la reine. Mon père disait que c'était une vantardise de buveur. » Elle reste un moment à côté de lui." },
      { if: { has: "basse:taiseurs" }, text: "L'Aîné, qui t'a suivi{e} dans l'escalier, s'agenouille devant le banc. Il touche le front de chaque mort avec le pouce, sept fois, et il dit les noms après toi, à voix basse, comme un répons." },
      "Tu {{miroir#vt_secr_miroir|as fait ce qu'il fallait, voilà tout|penses à Odeline, qu'on a enterrée au cimetière des Noyés sous un nom de ville, et tu te demandes qui dira le sien dans trois cents ans}}.",
    ],
    choices: [{ back: "VT_seuil" }] },

  VT_secretaires_jetons: { act: "V", title: "Les jetons d'ambre", place: "sorne",
    fx: { quest: "VT_q_secretaires", flag: ["vt:secretaires", "tresor:vt_jetons"], set: { vt_secretaires: "jetons" }, item: "vt_tr_jetons", clock: { tresors: 1 } },
    text: [
      "Tu dégages les jetons un par un. Les doigts des morts sont légers, secs, et ils lâchent sans résistance. Le septième est dans la main de la femme du milieu, celle qui tient la main de son voisin ; pour le prendre, il faut défaire les deux mains. Tu le fais.",
      "Les sept jetons tiennent dans ta paume. Ils sont tièdes. Quand tu fermes le poing, tu sens contre ta peau une vibration très fine, sept notes qui cherchent à s'accorder.",
      { with: "lison", text: "Lison te regarde faire sans t'arrêter. « Tu leur as pris la seule chose qu'ils avaient gardée », dit-elle. Puis elle remonte deux marches pour ne plus voir le banc." },
      { with: "fauvette", text: "Fauvette, elle, compte les jetons dans ta main, du bout du doigt. « Sept. Bien. » Elle hoche la tête, contente de ton travail, et un peu jalouse." },
      { with: "gildas", text: "Frère Gildas trace un signe au-dessus du banc, lentement, la main ouverte. Il ne te dit rien. Il le fait pour eux." },
    ],
    choices: [{ back: "VT_seuil" }] },

  VT_salle: { act: "V", title: "La salle du trésor", place: "sorne", hub: true, backName: "la salle du trésor",
    text: [
      { first: true, text: "La porte verte s'ouvre sur une salle ronde, haute comme une église, coiffée d'un dôme de verre de mer. Ce verre est épais, vert, coulé en losanges dans un réseau de plomb, et la lune passe au travers en grandes taches pâles qui bougent sur le sol au rythme de l'eau qui ruisselle encore dehors. Sous le dôme, l'air est sec et chaud. Il sent l'ambre, la cire et le métal." },
      { first: true, text: "L'or est partout. Il monte en tas le long des murs, en pièces, en lingots, en vaisselle couchée, jusqu'à hauteur d'homme. Au fond, sur une estrade de trois marches, un trône de pierre blonde veinée d'ambre ; au pied du trône, trois coffres fermés ; à côté, sur un coussin de pierre, une couronne grise. Au centre de la salle, un lutrin de bronze porte une cloche de verre, et sous la cloche, un parchemin plié, scellé d'un sceau rouge. La Charte." },
      { again: true, text: "La salle du trésor, son dôme vert, l'or le long des murs. Le trône au fond. Le lutrin au centre." },
      "Le sol {{echo#vt_salle_echo|est une mosaïque du delta, ses bras d'eau, ses îles|garde le bruit d'une porte qu'on ferme de l'intérieur, et la voix d'une femme, très calme : « Éteignez les lampes. Nous n'en aurons plus besoin »}}.",
      { if: { seen: "VT_charte" }, text: "La cloche de verre est vide sur son lutrin." },
      { if: { has: "vt:cloche_brisee" }, text: "Autour du lutrin, les éclats de verre vert crissent sous les bottes. Il y en a jusque sur l'or." },
      { if: M(4, 4), text: "Au-dessus de toi, la lumière du dôme a changé : la lune est plus basse, et quelque part, la mer fait le bruit d'un bassin qu'on remplit." },
      { if: M(5, 5), text: "Un filet d'eau descend l'escalier derrière toi et s'étale sur le seuil de la salle. La mer est revenue jusqu'à la dernière porte. Il te reste une heure, peut-être moins." },
      { if: MER, text: "L'eau coule dans l'escalier avec un bruit de torrent. Elle a couvert la chambre des secrétaires. Dans la salle, elle monte d'un doigt chaque fois que tu la regardes." },
      { if: LOTH_LUTRIN, text: "Au centre, devant le lutrin, un homme en manteau sombre est penché sur la cloche de verre, une lanterne posée à ses pieds. Lothaire Brunel. Il ne se retourne pas. « Entrez, dit-il. Je vous entends penser depuis l'escalier. »" },
      { if: { all: [ALLIE, { not: { has: "vt:allie_regle" } }] }, text: "Lothaire Brunel s'est arrêté au seuil, ses gants gris à la main. Il regarde l'or une fois, puis le lutrin, et ses yeux restent sur le lutrin." },
      { first: true, with: "tibere", text: "Tibère siffle entre ses dents, longuement, et s'arrête au milieu du sifflement." },
      { first: true, with: "fauvette", text: "Fauvette fait trois pas dans la salle, tourne sur elle-même, et éclate de rire, un rire bref qu'elle étouffe dans sa manche." },
      { first: true, with: "salome", text: "Salomé lève les yeux vers le dôme, vers l'eau qui coule sur le verre, et calcule. Tu la vois compter sur ses doigts." },
    ],
    choices: [
      { label: "Lothaire Brunel, penché sur le lutrin", big: true, hide: { not: LOTH_LUTRIN }, to: "VT_lo_entree" },
      { label: "Le lutrin, et la Charte sous sa cloche de verre", hide: { any: [{ seen: "VT_charte" }, { has: "vt:charte_perdue" }, LOTH_LUTRIN] }, to: "VT_lutrin" },
      { label: "L'or de la couronne, le long des murs", hide: { any: [MER, { seen: "VT_or_charger" }, { is: { or: "partie" } }] }, to: "VT_or" },
      { label: "Les trois coffres au pied du trône", hide: { any: [MER, { seen: "VT_coffres" }] }, to: "VT_coffres" },
      { label: "La couronne grise, sur son coussin de pierre", hide: { seen: "VT_couronne" }, to: "VT_couronne" },
      { label: "Le sceptre couché en travers des marches", hide: { any: [MER, { seen: "VT_sceptre" }] }, to: "VT_sceptre" },
      { label: "Le trône de pierre blonde", hide: { any: [MER, { seen: "VT_voix" }, { seen: "VT_voix_muette" }] }, to: "VT_trone" },
      { label: "Le pupitre de pierre aux six encoches, près du lutrin", hide: { any: [MER, { seen: "VT_feuillets" }] }, to: "VT_feuillets" },
      { label: "La mosaïque du delta, sous tes pieds", hide: { any: [MER, { seen: "VT_mosaique" }] }, to: "VT_mosaique" },
      { label: "Des lanternes dans l'escalier : faire face à ceux qui descendent", big: true, hide: { any: [{ not: ARRIVEE }, REGLE, MER, LOTH_LUTRIN] }, to: "VT_arrivee" },
      { label: "Monter par l'escalier du dôme, vers la tour de la Reine", big: true, hide: { any: [{ not: REGLE }, MER] }, to: "VT_puits" },
      { label: "La mer entre : prendre ce que tu tiens, et monter", big: true, hide: { not: MER }, to: "VT_flot" },
    ] },
});

// ==================================================================== the gold, the coffers, the crown, the sceptre, the binding
Object.assign(P, {
  VT_or: { act: "V", title: "L'or de la couronne", place: "sorne",
    text: [
      "Tu t'approches du premier tas. Des ducats d'or à l'effigie d'une femme couronnée, la bouche close, par milliers ; des plats, des aiguières, des chandeliers couchés ; des barres empilées en croix, comme on empile du bois pour qu'il sèche. Tu prends une pièce. Elle est lourde, froide, et elle te laisse sur les doigts une poussière jaune.",
      "Les tas du devant {{pie#vt_or_plomb|brillent d'un or épais, et ils montent jusqu'à hauteur d'homme|sont de plomb sous une feuille d'or, un appât pour qui viendrait remplir ses sacs : le vrai or est au fond, contre le mur, en lingots bas et serrés, et il tiendrait dans trois coffres}}.",
      "Sur la tranche de chaque lingot, on a frappé une ligne au poinçon : *{{loupe#vt_or_lingots|Trésor de la couronne du delta|Rendu au peuple des marais, pour le sel qu'on lui a pris : celui qui le remonte le leur doit}}.*",
      { with: "tibere", text: "Tibère enfonce le bras jusqu'au coude dans un tas de pièces et le ressort couvert de poussière d'or. « Rosalie pourrait s'acheter un atelier entier, dit-il. Avec les aiguilles et les apprenties. » Il secoue la main au-dessus du tas, soigneusement, pour tout rendre." },
      { with: "fauvette", text: "Fauvette s'est accroupie devant un plat et regarde son reflet dedans, tordu par l'or. Elle ne prend rien. Pour une fois, elle a l'air de ne pas savoir par où commencer." },
      { if: { has: "metier:mains" }, text: "Tes mains te le disent avant tes yeux : les pièces du dessus pèsent toutes un peu moins que ce qu'elles devraient." },
    ],
    choices: [
      { label: "Trier : laisser le plomb, aller aux lingots du fond", hide: { not: { voile: "vt_or_plomb" } }, fx: { flag: "vt:or_trie", ep: ["perso", 800] }, to: "VT_or_tri" },
      { label: "Peser les pièces une à une, à la main, pour trouver le vrai", hide: { voile: "vt_or_plomb" }, test: { dom: "savoir", diff: -10, label: "Reconnaître l'or au poids", help: [{ if: { has: "metier:mains" }, v: 15 }, { with: "fauvette", v: 10 }, { with: "tibere", v: 5 }] },
        win: { fx: { flag: "vt:or_trie" }, to: "VT_or_tri" }, lose: { fx: { flag: "vt:or_trie", clock: { maree: 1 } }, to: "VT_or_tri" } },
      { label: "Remplir une besace au plus près, et ne pas t'attarder", fx: { set: { or: "partie" }, flag: "vt:or_plomb" }, back: "VT_salle" },
      { back: "VT_salle" },
    ] },

  VT_or_tri: { act: "V", title: "Les lingots du fond", place: "sorne",
    fx: { clock: { maree: 1 } },
    text: [
      { outcome: "lose", text: "Il te faut une heure entière de pesées, de pièces mordues, de lingots retournés, pour comprendre que le plomb est devant et l'or derrière. Tes mains sont noires jusqu'aux poignets." },
      "Derrière les tas brillants, contre le mur, les lingots sont rangés à plat, sur trois rangs, bas et mats. Ils ont la couleur du beurre. Chacun pèse le poids d'un enfant de deux ans. Tu en comptes deux cent quarante. À côté, trois coffres de chêne cerclés de fer attendent, vides, le couvercle ouvert : les Taiseurs ont tout préparé pour qu'on emporte l'or, à condition de savoir lequel.",
      "Au plafond, au-dessus des coffres, une poulie de bronze pend d'une poutre, et sa corde file vers le dôme, vers une ouverture ronde dans la paroi où monte un escalier.",
      { with: "salome", text: "Salomé tire sur la corde de la poulie, deux fois, de tout son poids, et écoute. « Un treuil, en haut, dit-elle. On peut hisser. Il faut du monde pour tourner, et un bateau en bas pour recevoir. »" },
      { with: "lison", text: "Lison passe la main sur la tranche d'un lingot, là où la ligne est frappée. Elle ne peut pas lire ce qui est dessous, mais elle sent les lettres. « Ils ont écrit dessus, dit-elle. Ils écrivaient partout. »" },
    ],
    choices: [
      { label: "Remplir les trois coffres et les hisser par le treuil", big: true, if: HOIST, why: "Il faudrait un bateau en bas de la tour, ou un équipage, ou une capitaine qui sache recevoir une charge.", to: "VT_or_charger" },
      { label: "Prendre ce que chacun peut porter, et laisser le reste", fx: { set: { or: "partie" } }, back: "VT_salle" },
      { label: "Laisser l'or à la mer", fx: { flag: "vt:or_laisse" }, back: "VT_salle" },
    ] },

  VT_or_charger: { act: "V", title: "Le treuil", place: "sorne",
    fx: { set: { or: "remonte" }, unflag: "vt:or_plomb", clock: { maree: 1 }, ep: ["seance", 3000] },
    text: [
      "Vous chargez les coffres, lingot par lingot, en vous les passant de main en main. À la centième barre, tout le monde se tait. À la deux-centième, quelqu'un se met à compter tout haut, pour tenir. Les coffres pleins sont si lourds qu'il faut les glisser sur des rouleaux de bois jusqu'à la poulie.",
      "La corde du treuil {{pie#vt_corde|est grosse comme le poignet, et neuve d'aspect sous sa gaine|est pourrie au cœur, sous une gaine de cuir ciré qui la fait paraître neuve : elle lâchera à la troisième charge}}.",
      { with: "tibere", text: "Tibère a pris le haut de l'escalier du dôme, où tourne le treuil. Tu l'entends souffler et jurer là-haut, une manivelle dans chaque main." },
      { with: "salome", text: "Salomé fait les nœuds. Un nœud de chaise double, un nœud de griffe, un tour mort sur la poutre. Elle n'a pas besoin de regarder ses mains." },
      { if: { has: "basse:equipage" }, text: "Tu envoies quelqu'un en haut de la tour, avec une lanterne, pour faire signe à tes gens de la grève : qu'ils amènent la barque au pied de la tour quand la mer sera haute." },
      { if: { all: [{ not: { has: "basse:equipage" } }, { has: "basse:bateau" }] }, text: "Ton bateau attendra au pied de la tour quand la mer sera revenue. Il faudra descendre les coffres jusqu'à lui, par l'autre côté, à la corde." },
    ],
    choices: [
      { label: "Doubler la corde du treuil avec la tienne", hide: { any: [{ not: { voile: "vt_corde" } }, { not: { item: "corde" } }] }, fx: { flag: "vt:corde_doublee", ep: ["perso", 800] }, back: "VT_salle" },
      { label: "Laisse-moi faire", who: "salome", hide: { voile: "vt_corde" }, fx: { flag: "vt:corde_doublee", conf: { salome: 5 } }, back: "VT_salle" },
      { label: "Hisser les trois coffres", back: "VT_salle" },
    ] },

  VT_coffres: { act: "V", title: "Les trois coffres", place: "sorne",
    fx: { clock: { maree: 1 } },
    text: [
      "Les trois coffres sont rangés au pied de l'estrade, côte à côte : trois caisses de chêne noir, bardées de fer, plus petites que les coffres de l'or et plus soignées. Sur chaque couvercle, une plaque de cuivre gravée.",
      "Sur la plaque de gauche : *{{loupe#vt_coffre_plaque|Pour la reine|Pour la reine, qui ne l'ouvrira pas : qui l'ouvre à sa place en paie le prix}}.* Au milieu : *Pour le chancelier.* À droite : *Pour qui viendra.*",
      "La serrure du coffre de gauche {{pie#vt_coffre_serrure|est une serrure à trois gardes, simple et solide|est une serrure à trois gardes, et à l'intérieur le couvercle est relié par un fil à une fiole de verre pleine d'une liqueur qui fume dès qu'on la brise}}.",
      "Le coffre du milieu est ouvert. Le coffre de droite {{pie#vt_coffre_fond|est vide, tapissé de velours rouge|est vide, mais son fond est plus haut de trois doigts que le dehors ne le laisse croire}}.",
      { with: "fauvette", text: "Fauvette s'est accroupie devant le coffre de gauche, la tête penchée, une oreille contre le bois. « Il y a quelque chose qui clapote, dedans, dit-elle. Je n'aime pas les coffres qui clapotent. »" },
    ],
    choices: [
      { label: "Ouvrir le coffre de gauche en coupant le fil d'abord, par la fente du couvercle", hide: { not: { voile: "vt_coffre_serrure" } }, fx: { ep: ["perso", 1000] }, to: "VT_coffre_ouvert" },
      { label: "Laisse-moi faire", who: "fauvette", hide: { voile: "vt_coffre_serrure" }, test: { dom: "discretion", diff: -10, label: "Fauvette ouvre un coffre qui clapote" },
        win: { fx: { conf: { fauvette: 5 } }, to: "VT_coffre_ouvert" }, lose: { to: "VT_coffre_piege" } },
      { label: "Crocheter le coffre de gauche", hide: { voile: "vt_coffre_serrure" }, test: { dom: "discretion", diff: -20, label: "Crocheter une serrure des Taiseurs", help: [{ if: { item: "crochets" }, v: 15 }, { if: { has: "passe:voleur" }, v: 10 }] },
        win: { to: "VT_coffre_ouvert" }, lose: { to: "VT_coffre_piege" } },
      { label: "Briser le couvercle du coffre de gauche", to: "VT_coffre_piege" },
      { label: "Soulever le faux fond du coffre de droite", hide: { any: [{ not: { voile: "vt_coffre_fond" } }, { seen: "VT_coffre_fond" }] }, to: "VT_coffre_fond" },
      { label: "Sonder le velours du coffre de droite, du bout des doigts", hide: { any: [{ voile: "vt_coffre_fond" }, { seen: "VT_coffre_fond" }] }, test: { dom: "savoir", diff: -10, label: "Trouver un double fond", help: [{ if: { has: "metier:mains" }, v: 20 }, { with: "fauvette", v: 10 }] },
        win: { to: "VT_coffre_fond" }, lose: { back: "VT_salle" } },
      { back: "VT_salle" },
    ] },

  VT_coffre_piege: { act: "V", title: "La fiole", place: "sorne",
    fx: { pv: -6, item: "vt_tr_collier", clock: { tresors: 1 }, flag: "tresor:vt_collier" },
    text: [
      "Le couvercle cède, et sous lui un tintement de verre brisé. Une fumée jaune monte du coffre, lourde, et coule sur le bord comme du lait qui déborde. Elle sent l'œuf pourri et l'amande. Tes yeux brûlent, ta gorge se ferme, tu recules en toussant jusqu'à heurter le trône.",
      { with: "gildas", text: "Frère Gildas t'arrache un pan de ta chemise, le mouille à sa gourde et te le plaque sur la bouche. « Respire dedans, dit-il. Lentement. Ça passera. » Il garde la main sur ton épaule jusqu'à ce que tu cesses de tousser." },
      { without: "gildas", text: "Tu respires dans ta manche, à petits coups, à genoux sur la pierre, jusqu'à ce que le monde arrête de tourner." },
      "Quand la fumée retombe, le coffre est noirci à l'intérieur. Des étoffes ont brûlé, des papiers sont en cendre. Au fond, sous la suie, il reste un collier d'ambre à grosses perles, chaque perle percée d'un fil d'or. Il a survécu. L'ambre a pris une teinte plus sombre, presque rouge.",
    ],
    choices: [{ back: "VT_salle" }] },

  VT_coffre_ouvert: { act: "V", title: "Le coffre de la reine", place: "sorne",
    fx: { item: ["vt_tr_collier", "vt_tr_ducats"], clock: { tresors: 2 }, flag: ["tresor:vt_collier", "tresor:vt_ducats"], ep: ["perso", 1200] },
    text: [
      "Le couvercle s'ouvre sans un bruit. Dans le coffre, posée sur un lit de laine, la fiole de verre est toujours entière, pleine d'une liqueur jaune. Tu la soulèves avec deux doigts et tu la poses loin, dans un coin, debout.",
      "Dessous, il y a ce que la reine gardait pour elle. Un collier d'ambre à grosses perles, chaque perle percée d'un fil d'or. Un miroir de main en argent, terni, dont le verre a disparu. Une bourse de cuir pleine de ducats anciens, frappés de la bouche fermée au revers. Et une paire de gants d'enfant, en peau blanche, cousus de fil bleu.",
      "Tu prends le collier et la bourse. Le reste, tu le laisses dans la laine.",
      { with: "lison", text: "Lison regarde les gants d'enfant longtemps. « Elle n'a pas eu d'enfant, dit-elle. Ce sont les siens à elle, quand elle était petite. » Elle referme le couvercle doucement sur eux." },
      { with: "tibere", text: "Tibère soupèse la bourse et la rend. « Ça, dit-il, c'est la paie d'une année de sergent. Dans une bourse. Pour une reine, c'est de la menue monnaie. »" },
    ],
    choices: [{ back: "VT_salle" }] },

  VT_coffre_fond: { act: "V", title: "Pour qui viendra", place: "sorne",
    fx: { item: ["vt_tr_bague", "vt_lettre_vasse"], clock: { tresors: 1 }, flag: "tresor:vt_bague", ep: ["perso", 1500] },
    text: [
      "Le velours rouge se soulève d'une pièce, collé sur une planchette. Dessous, dans un creux taillé à la mesure, il y a deux choses : une bague et une lettre.",
      "La bague est un anneau d'or lourd, un peu usé d'un côté, à la façon des bagues qu'on porte toute une vie. Le chaton est une intaille de cornaline : une femme couronnée, de profil, un doigt sur les lèvres. Le sceau de la reine. Celui qui a scellé la Charte.",
      "La lettre est pliée en quatre, sans adresse. Le papier a jauni, l'encre a tenu. L'écriture est penchée, rapide, celle d'un homme qui écrit beaucoup et qui a peu de temps. Tu la glisses dans ton sac pour la lire à la lumière.",
      { with: "gildas", text: "Frère Gildas reconnaît l'écriture avant toi. « Aymeric Vasse, dit-il. Nous avons au Mont trois lettres de sa main. On les montre aux novices, le jour de leurs vœux. »" },
      { if: { has: "metier:lire" }, text: "Tu connais ce genre de main : celle d'un chancelier qui dicte le jour et écrit la nuit. Les lettres de la fin des mots sont mangées, les majuscules sont soignées." },
    ],
    choices: [{ back: "VT_salle" }] },

  VT_couronne: { act: "V", title: "La couronne de sel", place: "sorne",
    text: [
      "La couronne repose sur un coussin de pierre sculpté avec ses glands et ses plis, au point qu'on croirait de la plume. Elle est simple : un cercle nu, haut de trois doigts, d'un gris pâle qui accroche la lune.",
      "La couronne {{pie#vt_couronne|est un cercle de sel gris et terne, qu'on écraserait entre deux doigts|est faite du sel de chaque saline du delta, cristallisé en couches sur une âme d'argent, et elle a passé trois siècles sous la mer sans perdre un grain}}.",
      "Sur la tranche du coussin, on a gravé une ligne : *{{loupe#vt_couronne_mot|Au peuple du sel, sa reine|Qu'on la pose sur une tête qui se taira pour que les autres parlent}}.*",
      { with: "salome", text: "Salomé passe un doigt sur la couronne, puis le porte à sa langue. Elle fait la grimace. « Du sel, dit-elle. Du vrai. Du sel de Grisemotte, et du sel des Écueils, plus amer. » Elle te regarde. « Ils ont fait une couronne avec ce qu'on gratte sur les bassins. »" },
      { with: "lison", text: "Lison s'approche et ne touche pas. « Les sauniers la lui ont faite pour son couronnement, dit-elle. Chaque saline a donné une poignée. C'est dans une chanson de Grisemotte, la seule que les sauniers chantent encore à voix haute. »" },
      { if: { has: "saline:ouverte" }, text: "Tu te rappelles les bassins de Grisemotte, la croûte blanche qui craque sous la raclette, la sueur des sauniers. La couronne en a la couleur exacte." },
    ],
    choices: [
      { label: "Poser la couronne sur ta tête", hide: { not: { voile: "vt_couronne_mot" } }, to: "VT_couronne_portee" },
      { label: "Prendre la couronne de sel", fx: { item: "vt_tr_couronne", clock: { tresors: 1 }, flag: "tresor:vt_couronne", ep: ["perso", 1500] }, back: "VT_salle" },
      { label: "La laisser sur son coussin de pierre", fx: { flag: "vt:couronne_laissee" }, back: "VT_salle" },
    ] },

  VT_sceptre: { act: "V", title: "Le sceptre", place: "sorne",
    text: [
      "Le sceptre est couché en travers des marches de l'estrade, comme si quelqu'un l'avait lâché en montant. Il est long comme le bras, tout d'or, et il se termine par une main fermée qui tient une perle noire grosse comme une noix.",
      "Le sceptre {{pie#vt_sceptre|est d'or massif, et la perle noire vaut une maison sur l'île des Changeurs|est de bois doré, et la perle est une bille de jais : le sceptre de procession que les Comptoirs ont fait faire le jour où ils ont montré la reine au peuple, muette, sur un balcon}}.",
      "Au bout de la poignée, une virole porte quelques mots gravés : *{{loupe#vt_sceptre_mot|Ysaure, reine du delta|Payé par la maison Marrel, trois ducats et six liards, pour la procession du lendemain}}.*",
      { with: "fauvette", text: "Fauvette le ramasse, le soupèse, le fait tourner dans sa main comme un bâton de jongleur. « Trop léger, dit-elle aussitôt. On m'en a vendu des comme ça, aux Halles. » Elle te le tend quand même." },
    ],
    choices: [
      { label: "Prendre le sceptre, faux comme il est : il servira de preuve", hide: { not: { any: [{ voile: "vt_sceptre" }, { voile: "vt_sceptre_mot" }] } }, fx: { item: "vt_tr_sceptre", clock: { tresors: 1 }, flag: ["tresor:vt_sceptre", "vt:sceptre_preuve"], ep: ["perso", 1000] }, back: "VT_salle" },
      { label: "Prendre le sceptre d'or", hide: { any: [{ voile: "vt_sceptre" }, { voile: "vt_sceptre_mot" }] }, fx: { item: "vt_tr_sceptre", clock: { tresors: 1 }, flag: "tresor:vt_sceptre" }, back: "VT_salle" },
      { label: "Le laisser sur les marches", back: "VT_salle" },
    ] },

  VT_feuillets: { act: "V", title: "La reliure du Registre", place: "sorne",
    text: [
      "À côté du lutrin, un pupitre de pierre porte une reliure ouverte : deux ais de bois couverts de cuir noir, un dos cousu, et à l'intérieur, au lieu de pages, six encoches taillées dans une planchette, chacune à la mesure d'un feuillet plié. Les six encoches sont vides.",
      "Sur le cuir de l'ais, on a gravé au fer : *{{loupe#vt_reliure|Registre de la Muette, en six cahiers|Six feuillets pour six caches, et la septième pour la Charte : qui les réunit tient la parole de la reine, et la doit à ceux qui l'ont perdue}}.*",
      { if: { relics: { min: 6 } }, text: "Tu portes sur toi les six feuillets. Tu le sais, mais tu les comptes quand même, un par un, comme on compte des pièces dans une main fermée." },
      { if: { relics: { min: 4, max: 5 } }, text: "Tu as sur toi plusieurs feuillets, dans leur toile cirée. Il manquera des encoches vides." },
      { if: { relics: { max: 3 } }, text: "Tu as sur toi peu de feuillets. La reliure restera presque vide." },
      { with: "gildas", text: "Frère Gildas a posé les deux mains à plat sur le pupitre, de chaque côté de la reliure. « On a fait relier au Mont la copie de ce Registre, autrefois, dit-il. La copie a brûlé. Celle-ci attend depuis trois cents ans. »" },
    ],
    choices: [
      { label: "Glisser tes feuillets dans les encoches", if: { relics: { min: 1 } }, why: "Il faudrait au moins un feuillet du Registre.", fx: { flag: "vt:registre_relie", clock: { maree: 1 } }, to: "VT_feuillets_lus" },
      { back: "VT_salle" },
    ] },

  VT_feuillets_lus: { act: "V", title: "Le Registre relié", place: "sorne",
    fx: { ep: ["seance", 3000] },
    text: [
      "Les feuillets entrent dans leurs encoches avec un petit bruit sec, chacun dans la sienne : ils ont été taillés pour elles. Quand le dernier est en place, la reliure se ferme presque seule, sous son propre poids, et le dos se tend.",
      { if: { relics: { min: 6 } }, text: "Le Registre est entier. Tu le soulèves : il pèse le poids d'un missel. Au dos, sous la reliure, un dernier texte apparaît, que l'encre des six feuillets réunis fait remonter, ligne à ligne." },
      { if: { relics: { max: 5 } }, text: "Le Registre a des trous. Les encoches vides font des jours dans la reliure, et quand tu la soulèves, elle penche du côté plein." },
      "Sur la dernière garde, une ligne : *{{loupe#vt_colophon|Écrit sous la dictée des mains de la reine, par Aymeric Vasse, chancelier|Ce qu'elle a dit avec ses mains, je l'ai écrit avec les miennes ; ce qu'elle disait avec sa bouche, la salle le garde : qu'on frappe le trône}}.*",
      { with: "gildas", text: "Frère Gildas lit par-dessus ton épaule, les lèvres serrées. Ses yeux sont mouillés. Il ne les essuie pas." },
      { with: "lison", text: "Lison touche le dos de la reliure, une seule fois, du bout du doigt. « Ma grand-mère voudrait le tenir, dit-elle. Juste le tenir. »" },
    ],
    choices: [{ back: "VT_salle" }] },
});

// ==================================================================== the lectern, the Charter, the sea door
Object.assign(P, {
  VT_lutrin: { act: "V", title: "Le lutrin", place: "sorne",
    text: [
      "Le lutrin est un pied de bronze haut comme toi, coulé d'une seule pièce, avec trois griffes de héron pour le poser sur la mosaïque. En haut, un plateau rond porte la cloche de verre de mer, épaisse d'un doigt, verte, scellée à sa base par un anneau de plomb.",
      "Sous la cloche, la Charte est pliée en trois, son sceau de cire rouge tourné vers toi. La cire n'a pas bougé. Le parchemin a pris la couleur du miel.",
      "Le lutrin {{pie#vt_lutrin|est un pied de bronze massif, fait pour durer|est une balance : le plateau descend d'un cheveu sous le poids de la Charte, et une tige file dans le pied jusque sous le sol, vers le mur du fond}}.",
      "Sur l'anneau de plomb, quelqu'un a gravé une ligne au burin : *{{loupe#vt_cloche|Ne touche que si tu sais|Qui prend la parole de la reine laisse son poids à la place}}.*",
      "Le verre de la cloche {{echo#vt_cloche_echo|a la couleur de l'eau des Écueils|garde la voix d'un homme âgé, celle du chancelier : « Accordez-la sur la note du phare. Elle ne s'ouvrira qu'à elle, ou au marteau »}}.",
      { with: "lison", text: "Lison pose la main sur le verre et la retire aussitôt. « Il chante, dit-elle. Tout bas. Tu ne l'entends pas ? »" },
    ],
    choices: [
      { label: "Frapper le diapason et l'approcher de la cloche", hide: { not: { item: "diapason" } }, fx: { ep: ["perso", 1000] }, to: "VT_lutrin_ouverte" },
      { label: "Laisse-moi faire", who: "lison", hide: { item: "diapason" }, fx: { conf: { lison: 5 } }, to: "VT_lutrin_ouverte" },
      { label: "Laisse-moi faire", who: "gildas", hide: { any: [{ item: "diapason" }, { present: "lison" }] }, fx: { conf: { gildas: 5 } }, to: "VT_lutrin_ouverte" },
      { label: "Fendre l'anneau de plomb à la pointe de ta lame", test: { dom: "discretion", diff: -10, label: "Ouvrir la cloche sans la briser", help: [{ with: "fauvette", v: 15 }, { if: { item: "crochets" }, v: 10 }, { if: { has: "metier:mains" }, v: 10 }] },
        win: { fx: { clock: { maree: 1 } }, to: "VT_lutrin_ouverte" }, lose: { to: "VT_lutrin_force" } },
      { label: "Briser la cloche", to: "VT_lutrin_force" },
      { back: "VT_salle" },
    ] },

  VT_lutrin_ouverte: { act: "V", title: "La cloche ouverte", place: "sorne",
    text: [
      { if: { item: "diapason" }, text: "Tu frappes le diapason contre la griffe du lutrin et tu l'approches du verre. La cloche répond. Sa note monte avec celle du bronze, pareille, et l'anneau de plomb se met à grésiller. Il se fend d'un bout à l'autre, très net, et tombe en deux morceaux sur le plateau." },
      { with: "lison", if: { not: { item: "diapason" } }, text: "Lison colle la bouche contre le verre et chante une seule note, longue, celle que les femmes des Joncs-Bas donnent pour appeler les barques au crépuscule. La cloche répond. L'anneau de plomb grésille, se fend, tombe en deux morceaux." },
      { with: "gildas", if: { all: [{ not: { item: "diapason" } }, { not: { present: "lison" } }] }, text: "Frère Gildas chante la note des vêpres du Mont, grave, tenue jusqu'au bout du souffle. La cloche répond, et l'anneau de plomb se fend en deux." },
      { outcome: "win", text: "La pointe de ta lame suit la jointure, fend le plomb sur toute la longueur. Il te faut une heure, et un calme que tu ne te connaissais pas. L'anneau tombe en deux morceaux." },
      "Tu soulèves la cloche à deux mains. Elle est lourde et tiède. Tu la poses sur la mosaïque, à côté du lutrin. La Charte est là, à portée de ta main, sur le plateau de bronze.",
      { if: { any: [{ voile: "vt_lutrin" }, { voile: "vt_cloche" }] }, text: "Le plateau, sous elle, a l'air de respirer. Il attend le poids qu'on lui prendra." },
    ],
    choices: [
      { label: "Poser une poignée de ducats sur le plateau, au poids de la Charte, en la retirant", hide: { not: { any: [{ voile: "vt_lutrin" }, { voile: "vt_cloche" }] } }, fx: { flag: "vt:contrepoids", ep: ["seance", 2000] }, to: "VT_charte" },
      { label: "Prendre la Charte", big: true, fx: { flag: "vt:vannes" }, to: "VT_charte" },
    ] },

  VT_lutrin_force: { act: "V", title: "Le verre brisé", place: "sorne",
    fx: { flag: ["vt:vannes", "vt:cloche_brisee"], pv: -2 },
    text: [
      "Le verre de mer résiste au premier coup, et au deuxième. Au troisième, il éclate tout entier, d'un bloc, en mille losanges verts qui sautent sur la mosaïque et jusque sur l'or. Un éclat t'ouvre le dos de la main. Le sang coule sur le plateau, à côté de la Charte, sans la toucher.",
      "La cloche partie, le plateau remonte d'un cheveu. Quelque part sous le sol, une tige glisse, et un bruit sourd roule sous la mosaïque, d'un bout à l'autre de la salle.",
      { with: "tibere", text: "Tibère te prend le poignet, regarde l'entaille, et la serre dans un mouchoir à carreaux qui a connu des jours meilleurs. « Tu vois, dit-il. Le marteau, ça marche toujours. Mais ça fait du bruit. »" },
    ],
    choices: [{ label: "Prendre la Charte", big: true, to: "VT_charte" }] },

  VT_charte: { act: "V", title: "La Charte des Hautes-Eaux", place: "sorne",
    fx: { relic: "f_sorne", ep: ["histoire", 5000] },
    text: [
      "Tu prends la Charte. Le parchemin est souple, plus souple que tu ne le croyais, et il sent la cire et le sel. Tu le déplies avec précaution sur ton avant-bras. L'écriture est grande, droite, appliquée : la main d'un clerc qui savait qu'on lirait ce texte devant des gens.",
      "*Nous, Ysaure, reine du delta de la Salve, disons et voulons que la terre gagnée sur la mer par les gens des marais, digue après digue, soit à eux et à leurs enfants, sans cens ni rachat, et que nul ne la leur prenne {{loupe#vt_charte_ligne|par force ou par acte|par force ou par acte, fût-ce un acte scellé de notre propre sceau : car le jour où l'on scellera un tel acte, nous aurons cessé de pouvoir parler}}.*",
      "En bas, la signature : *Ysaure*, d'une main nerveuse, avec une boucle sur l'Y. À côté, l'empreinte du sceau : une femme couronnée, de profil, un doigt sur les lèvres.",
      { if: { has: "vt:vannes" }, text: "Sous tes pieds, la mosaïque frémit. Un grondement monte du mur du fond, derrière le trône, et une plaque de bronze large comme une porte de grange se met à glisser de côté, au ras du sol. Par la fente, de l'eau noire entre en nappe, avec une odeur de vase. La salle se met à boire la mer." },
      { if: { has: "vt:contrepoids" }, text: "Le plateau du lutrin descend sous les ducats, juste ce qu'il faut, et s'arrête. La salle reste immobile. Quelque part sous le sol, une tige est restée à sa place." },
      { with: "lison", text: "Lison s'est approchée tout près. Elle regarde la signature, la boucle de l'Y, et elle respire par la bouche." },
      { with: "fauvette", text: "Fauvette se penche par-dessus ton bras. « Montre-moi où c'est écrit *terre*, dit-elle. Le mot. Juste le mot. » Tu le lui montres. Elle le regarde longtemps, pour s'en souvenir." },
      { with: "gildas", text: "Frère Gildas s'est signé, à la façon du Mont, deux doigts sur la bouche puis sur le cœur. « Je l'ai cherchée toute ma vie sans la chercher, dit-il. Je l'ai gardée sans l'avoir vue. »" },
      { if: { has: "basse:taiseurs" }, text: "L'Aîné, sur le seuil, a fermé les yeux. Ses deux compagnons se tiennent la main." },
    ],
    choices: [
      { label: "La porte des eaux s'ouvre : courir au mur du fond", big: true, hide: { not: { has: "vt:vannes" } }, fx: { clock: { maree: 1 } }, to: "VT_porte_eaux" },
      { label: "Ranger la Charte contre ta poitrine, dans la toile cirée", hide: { has: "vt:vannes" }, back: "VT_salle" },
    ] },

  VT_porte_eaux: { act: "V", title: "La porte des eaux", place: "sorne",
    text: [
      { if: { has: "vt:vannes" }, text: "La plaque de bronze a glissé de la largeur d'un homme. Derrière, un conduit voûté descend vers la mer, et la mer y monte, en flot court et noir. L'eau couvre déjà la moitié de la mosaïque. Elle pousse devant elle des ducats, des éclats de verre, une sandale de cuir vieille de trois siècles." },
      { if: { all: [{ not: { has: "vt:vannes" } }, MER] }, text: "Le flot descend l'escalier de la colline et se jette dans la salle par la porte verte. Il a déjà couvert le seuil. La porte verte, battante de bronze, bat contre le mur au rythme de l'eau, et il faudrait la fermer contre le courant, puis la tenir, pour gagner le temps de monter." },
      "Au-dessus de la serrure, une ligne gravée : *{{loupe#vt_porte_mot|La mer entre ici|Le contrepoids est sous la septième dalle ; qu'on le remette, et la porte se refermera d'elle-même}}.*",
      "Le bronze {{pie#vt_porte_pie|est épais d'une main, et la mer le pousse de toute sa masse|est épais d'une main, mais ses gonds sont neufs, graissés de suif de baleine : il suffirait d'un levier, ou d'un poids, pour le faire tourner contre le flot}}.",
      { with: "gildas", text: "Frère Gildas regarde la porte, puis le conduit, puis toi. Il a compris avant toi : le levier de fermeture est de l'autre côté du battant, sous l'eau. Celui qui le tirera restera derrière. Il retrousse ses manches, très lentement, comme avant d'écrire." },
      { with: "salome", text: "Salomé crie quelque chose que l'eau couvre. Elle a déjà défait la corde de sa ceinture." },
      { with: "tibere", text: "Tibère s'arc-boute contre le battant, l'épaule sur le bronze, et pousse en grognant. La porte recule d'un pouce, et revient de deux." },
    ],
    choices: [
      { label: "Soulever la septième dalle et remettre le contrepoids", hide: { not: { voile: "vt_porte_mot" } }, fx: { flag: "vt:porte_tenue", ep: ["seance", 3000] }, to: "VT_porte_tenue" },
      { label: "Laisse-moi faire", who: "lison", hide: { voile: "vt_porte_mot" }, test: { dom: "nature", diff: -10, label: "Lison cherche sous l'eau la dalle du contrepoids", help: [{ if: { has: "basse:taiseurs" }, v: 10 }] },
        win: { fx: { flag: "vt:porte_tenue", conf: { lison: 5 } }, to: "VT_porte_tenue" }, lose: { fx: { clock: { maree: 1 } }, to: "VT_porte_force" } },
      { label: "Laisser Frère Gildas passer de l'autre côté", hide: { not: { present: "gildas" } }, to: "VT_gi_sacrifice" },
      { label: "Caler le battant avec un coffre de lingots", hide: { not: { is: { or: "remonte" } } }, fx: { set: { or: "partie" }, flag: ["vt:porte_tenue", "vt:coffre_cale"] }, to: "VT_porte_tenue" },
      { label: "Pousser le battant tous ensemble, avec une barre", hide: { voile: "vt_porte_pie" }, to: "VT_porte_force" },
      { label: "Glisser une barre dans les gonds graissés et faire levier", hide: { not: { voile: "vt_porte_pie" } }, fx: { ep: ["perso", 800] }, to: "VT_porte_force" },
    ] },

  VT_porte_force: { act: "V", title: "Contre la mer", place: "sorne",
    text: [
      "Tu prends une barre de fer, une de celles qui roulaient les coffres, et tu la glisses entre le battant et le mur. L'eau te monte aux genoux, froide à couper le souffle. Elle tire sur tes jambes, elle tire sur la barre, elle tire sur tout.",
      { if: { voile: "vt_porte_pie" }, text: "Tu cales la barre contre le gond, là où le suif luit. Le bronze tourne mieux que tu ne le croyais : il suffit de pousser au bon endroit." },
      { with: "tibere", text: "Tibère se met à côté de toi, ses deux mains sur la barre au-dessus des tiennes. « Au Guet, dit-il entre ses dents, on fermait les portes des tavernes comme ça. À trois. Un. Deux. »" },
      { with: "salome", text: "Salomé passe sa corde autour du battant, fait un tour mort sur une colonne et halète, de tout son poids, en arrière." },
    ],
    choices: [
      { label: "Pousser", test: { dom: "combat", diff: -20, label: "Fermer une porte de bronze contre la mer", help: [{ with: "tibere", v: 15 }, { with: "salome", v: 15 }, { if: { voile: "vt_porte_pie" }, v: 20 }, { if: { has: "lothaire:allie" }, v: 5 }] },
        win: { fx: { flag: "vt:porte_tenue", ep: ["seance", 2500] }, to: "VT_porte_tenue" },
        lose: { fx: { flag: "vt:porte_tenue", pv: -5, clock: { maree: 1 }, set: { or: "partie" } }, to: "VT_porte_tenue" } },
      { label: "Laisser Frère Gildas passer de l'autre côté", hide: { not: { present: "gildas" } }, to: "VT_gi_sacrifice" },
    ] },

  VT_gi_sacrifice: { act: "V", title: "Le Gardien", place: "sorne",
    fx: { flag: ["gildas:mort", "vt:porte_tenue", "vt:gildas_porte"], leave: "gildas", fac: { taiseurs: 10, moines: 10 }, ep: ["histoire", 5000] },
    text: [
      "Frère Gildas pose son bâton contre le mur. Il ôte sa bure, la plie, et te la tend, comme un vêtement qu'on rend à la lingère. Dessous, il porte une chemise de laine grise et, à la ceinture, la cordelette à sept nœuds des frères du Mont.",
      { if: { has: "gildas:pardonne" }, text: "« Tu m'as laissé marcher avec toi jusqu'ici, dit-il. Je ne le méritais pas. Laisse-moi finir le chemin. »" },
      { if: { all: [{ has: "gildas:demasque" }, { not: { has: "gildas:pardonne" } }] }, text: "« Tu n'as pas à me pardonner, dit-il. Je ne te le demande pas. Je te demande de me laisser faire ça. »" },
      { if: { not: { has: "gildas:demasque" } }, text: "« Il y a une chose que je t'aurais dite, dit-il. Je te la dirai de l'autre côté de la porte, si Dieu le permet. Je ne crois pas qu'Il le permettra. »" },
      "Il passe de l'autre côté du battant. L'eau lui monte à la taille, à la poitrine. Il trouve le levier sous l'eau, à tâtons, et tu le vois prendre son souffle, une fois, très profondément, comme au début d'un psaume. Puis il plonge, et le battant de bronze se met à tourner contre le flot, lentement, puis plus vite, et se ferme dans un bruit de cloche.",
      "Le silence revient dans la salle. L'eau qui est entrée s'écoule par les rigoles de la mosaïque. De l'autre côté du bronze, plus rien.",
      "La porte {{echo#vt_gi_echo|vibre encore du choc, longtemps|garde une voix d'homme, celle d'un frère du Mont qui psalmodie très bas, d'une seule haleine : « Odeline, je te rends ce que je t'ai pris. Je n'ai que ça »}}.",
      "Tu {{miroir#vt_gi_miroir|serres sa bure contre toi, sans penser à rien|sais que tu l'as laissé faire parce qu'une part de toi voulait qu'il paie, et qu'une autre part, plus petite, voulait lui dire de rester}}.",
      { with: "lison", text: "Lison s'est assise sur une marche du trône, les coudes sur les genoux. Elle regarde la porte. « C'était le Gardien, dit-elle. C'était son travail, de fermer les portes. » Sa voix se casse sur le dernier mot." },
    ],
    choices: [
      { label: "Monter, maintenant, par l'escalier du dôme", big: true, hide: { not: MER }, to: "VT_puits" },
      { label: "Rester un moment devant la porte, puis revenir au trésor", hide: MER, back: "VT_salle" },
    ] },

  VT_porte_tenue: { act: "V", title: "La porte fermée", place: "sorne",
    text: [
      { outcome: "lose", text: "La porte se ferme, mais trop tard pour une part de ce qui était là. Le flot a emporté vers le conduit un des coffres de lingots, qui a glissé sur la mosaïque mouillée et basculé dans le noir avant que le bronze ne claque. Tu as de l'eau jusqu'aux cuisses, une épaule qui te lance, et une heure de moins." },
      { if: { has: "vt:coffre_cale" }, text: "Le coffre de lingots fait un bruit terrible en heurtant le bronze, mais il tient. La porte reste fermée sur lui, et tu sais déjà qu'on ne le dégagera plus." },
      { if: { voile: "vt_porte_mot" }, text: "Sous la septième dalle, dans un creux, il y a un poids de bronze en forme de bouche fermée. Tu le poses sur sa tige. La porte se referme d'elle-même, lentement, comme on referme un livre." },
      "Le battant claque. L'eau se retire de la mosaïque par les rigoles, en sifflant. Le bruit de la mer, de l'autre côté, devient sourd, lointain, un bruit de voisins.",
      { with: "any", text: "Vous restez un moment immobiles, trempés, à vous regarder sans rien dire." },
    ],
    choices: [
      { label: "Monter, maintenant, par l'escalier du dôme", big: true, hide: { not: MER }, to: "VT_puits" },
      { label: "Revenir au milieu de la salle", hide: MER, back: "VT_salle" },
    ] },
});

// ==================================================================== the throne and the queen's voice
Object.assign(P, {
  VT_trone: { act: "V", title: "Le trône de pierre", place: "sorne",
    text: [
      "Le trône est taillé dans un seul bloc de pierre blonde, veinée d'ambre comme une pierre de rivière est veinée de quartz. Pas de coussin, pas de dorure. Un siège large et bas, un dossier droit, deux accoudoirs usés en creux à l'endroit des mains. On s'y asseyait longtemps.",
      "La pierre {{pie#vt_trone_pie|est belle et froide, comme toutes les pierres de la salle|est une pierre chantante, la plus grande que tu aies vue : les veines d'ambre la traversent de part en part, et elle garde la voix de la salle comme une éponge garde l'eau}}.",
      "Sur l'accoudoir droit, à l'endroit de la main, quatre encoches de la largeur d'un ongle, et une cinquième, plus profonde.",
      { if: { item: "diapason" }, text: "Le diapason, dans ta poche, s'est mis à vibrer tout seul, une note très fine, que tu sens contre ta cuisse plus que tu ne l'entends." },
      { with: "gildas", text: "Frère Gildas regarde le trône sans s'approcher. « Au Mont, dit-il, il y a une salle des voix, où l'on m'a appris à me taire en dedans. La pierre y est de la même veine. Je me suis toujours demandé d'où on l'avait tirée. »" },
      { if: { seen: "VT_feuillets_lus" }, text: "*Qu'on frappe le trône*, disait la reliure." },
    ],
    choices: [
      { label: "Frapper le diapason contre le trône", big: true, hide: { any: [{ not: { item: "diapason" } }, { has: "ivm:parole" }] }, fx: { recharge: { echo: 5 }, clock: { maree: 1 } }, to: "VT_voix" },
      { label: "Dire à la pierre « je rends ce qui fut pris », puis frapper trois fois le diapason sur l'accoudoir", big: true, hide: { any: [{ not: { item: "diapason" } }, { not: { has: "ivm:parole" } }] }, fx: { recharge: { echo: 5 }, ep: ["perso", 1500] }, to: "VT_voix" },
      { label: "Poser les mains à plat sur la pierre, et écouter", hide: { seen: "VT_voix_muette" }, fx: { clock: { maree: 1 } }, to: "VT_voix_muette" },
      { back: "VT_salle" },
    ] },

  VT_voix: { act: "V", title: "La voix de la reine", place: "sorne",
    fx: { flag: "vt:voix", ep: ["histoire", 4000] },
    text: [
      "Tu frappes le diapason contre l'accoudoir, à l'endroit des encoches. Le bronze rend sa note, et la pierre la reprend, plus grave, plus large, si large qu'elle passe dans tes os. Les veines d'ambre s'allument une à une, d'un feu jaune qui court dans le bloc. Puis la note se répand dans la salle, le long des murs, sous le dôme, et l'or tout entier se met à bruire, des milliers de pièces qui tremblent ensemble.",
      "Le diapason, dans ta main, est chaud et lourd, chargé à ras bord.",
      "La salle {{echo#vt_voix_un|résonne longtemps, d'une seule note grave|se remplit d'une voix de femme, jeune, claire, qui rit : « Aymeric, ils ont signé. Tous les sauniers, tous les pêcheurs, même ceux des Écueils qui ne savent pas tenir une plume, ils ont mis leur croix. La terre qu'ils ont prise à la mer est à eux, et à leurs enfants »}}.",
      "Près du lutrin, l'air {{echo#vt_voix_deux|tremble au-dessus du plateau vide|garde la même voix, plus tard, plus basse : « Les Comptoirs me demandent de la déchirer. J'ai dit à Marrel que la parole d'une reine ne se déchire pas. Marrel a souri. Je n'aime pas quand Marrel sourit »}}.",
      { with: "lison", text: "Lison s'est figée au milieu d'un pas. Ses lèvres bougent. Elle répète les mots de la reine, un temps après elle, comme on apprend une chanson." },
      { with: "tibere", text: "Tibère a retiré son chapeau, de nouveau, et cette fois il le garde à la main." },
      { if: { has: "vt:registre_relie" }, text: "Sur le pupitre, la reliure du Registre tremble avec le reste, et ses feuillets bruissent dans leurs encoches." },
    ],
    choices: [{ label: "Écouter encore", big: true, to: "VT_voix_nuit" }] },

  VT_voix_nuit: { act: "V", title: "La nuit des Comptoirs", place: "sorne",
    text: [
      "La note baisse et se resserre autour du trône, et la salle devient plus petite, plus sombre, avec la sensation qu'il y a du monde, beaucoup de monde, debout le long des murs.",
      "Le trône {{echo#vt_voix_trois|garde sa note, très basse, comme une respiration|garde la voix de la reine, la nuit, vite, presque sans souffle : « Ils viennent. J'entends leurs bottes sur la rampe. Écris, Aymeric, écris vite. Écris que je n'étais pas folle. Écris que je les ai tous vus, les quarante, et que je les ai nommés pendant que j'avais encore de quoi les nommer. Écris que c'est le jeune Marrel qui tient le couteau, et que sa main tremble plus que la mienne »}}.",
      "Ensuite il y a un bruit de porte, des pas nombreux, une table renversée. Puis plus rien que la note, qui revient seule, et qui tient.",
      { with: "salome", text: "Salomé a croisé les bras très serré sur sa poitrine. Elle regarde le sol." },
      { with: "fauvette", text: "Fauvette s'est collée contre ton dos, sans y penser, et quand elle s'en aperçoit, elle ne bouge pas." },
      { if: { has: "lothaire:allie" }, text: "Lothaire Brunel a ôté le cornet jumeau de son oreille. Il le tient à la main, loin de lui, et il a le visage d'un homme qui vient d'entendre son nom dans une conversation." },
    ],
    choices: [
      { label: "Frapper encore le diapason contre le trône, pour entendre la suite", once: true, fx: { recharge: { echo: 5 }, clock: { maree: 1 } }, to: "VT_voix_demande" },
      { label: "Écouter ce que la pierre garde encore", to: "VT_voix_demande" },
    ] },

  VT_voix_demande: { act: "V", title: "Ce qu'elle demande", place: "sorne",
    text: [
      "La note change. Elle devient plus douce, plus proche. On dirait qu'elle se tourne vers toi.",
      "Devant le trône, l'air {{echo#vt_demande|se trouble et se calme|garde la voix de la reine, la dernière fois qu'elle a parlé, au matin, seule, avec une voix brûlée par la nuit : « Toi qui m'entends, qui que tu sois, et je sais que quelqu'un m'entendra puisque j'ai fait faire la pierre pour ça : rends-leur ma parole. Lis la Charte tout haut, une fois, devant ceux qui m'ont faite muette, ou devant leurs enfants. Après, fais-en ce que tu voudras. Je ne suis plus reine. Toi, tu respires encore »}}.",
      "Plus bas, au pied des marches, la pierre {{echo#vt_voix_gardien|garde une vibration très faible, qui s'efface|garde encore une phrase, plus basse, dite pour quelqu'un d'autre : « Et qu'un Gardien veille. Qu'il garde le silence aussi longtemps qu'il faudra, et qu'il sache le jour où il faut le rompre. Celui-là sera le dernier »}}.",
      "La note s'éteint. Pour de bon, cette fois. Les veines d'ambre pâlissent dans le trône. L'or cesse de bruire.",
      "Tu {{miroir#vt_voix_miroir|as entendu une reine morte, et tu n'en reviens pas|as entendu quelqu'un te demander de parler à sa place, et tu penses à Odeline, à qui tu as refusé d'écouter la dernière fois qu'elle voulait te dire quelque chose}}.",
    ],
    choices: [{ label: "Rester dans le silence qui revient", big: true, to: "VT_voix_apres" }] },

  VT_voix_apres: { act: "V", title: "Le silence", place: "sorne",
    fx: { ep: ["seance", 3000], fac: { taiseurs: 5 } },
    text: [
      "Le silence qui revient est d'une autre qualité que celui d'avant. Tu entends l'eau ruisseler sur le dôme, ta propre respiration, celle des autres. Quelqu'un renifle.",
      { if: { voile: "vt_demande" }, text: "Tu sais maintenant ce qu'elle voulait : qu'on dise, une fois, à voix haute, ce qu'on l'avait empêchée de dire. L'or et la terre venaient après." },
      { if: { voile: "vt_voix_gardien" }, with: "gildas", text: "Frère Gildas est resté au pied des marches, là où la pierre a parlé du Gardien. Il a les yeux fermés. « Le dernier, dit-il. Elle a dit le dernier. » Il rouvre les yeux, et il te regarde comme on regarde quelqu'un qui va hériter d'une maison." },
      { with: "lison", text: "Lison s'essuie les yeux avec le dos du poignet, d'un geste brusque. « Ma grand-mère donnerait ses deux mains pour avoir entendu ça, dit-elle. Ses deux mains, et elle ne pourrait plus faire de dentelle, et elle s'en ficherait. »" },
      { with: "tibere", text: "Tibère se racle la gorge. « Je n'ai jamais rien entendu de pareil, dit-il. Et j'ai entendu des aveux, au Guet. Des centaines. » Il remet son chapeau. Ses mains tremblent un peu." },
      { with: "salome", text: "Salomé a relevé la tête. « Maïwenn aurait aimé ça, dit-elle à mi-voix. Une reine qui riait. »" },
      { if: { has: "basse:taiseurs" }, text: "L'Aîné s'avance jusqu'au trône et pose le front contre la pierre, longtemps. Quand il se redresse, il a l'air plus vieux et plus léger à la fois." },
    ],
    choices: [{ back: "VT_salle" }] },

  VT_voix_muette: { act: "V", title: "La pierre qui bourdonne", place: "sorne",
    fx: { flag: "vt:voix_muette", ep: ["seance", 1500] },
    text: [
      "Tu poses les mains à plat sur les accoudoirs, là où la reine posait les siennes. La pierre est tiède. Sous tes paumes, très loin, quelque chose bourdonne, une note retenue qui voudrait sortir et qui cherche la clé.",
      { with: "lison", text: "Lison s'agenouille au pied du trône et chante la note des Joncs-Bas, celle qui appelle les barques. La pierre frémit. Une veine d'ambre s'allume, une seule, et s'éteint. « Il lui faudrait le diapason, dit Lison. Ma voix n'est pas assez juste. Ou pas assez vieille. »" },
      { with: "gildas", text: "Frère Gildas chante la note des vêpres. La pierre lui répond par un murmure, si bas qu'on croirait le vent. Tu crois entendre, dedans, une voix de femme qui rit. Puis plus rien." },
      { without: "any", text: "Tu restes longtemps les mains sur la pierre. Il te semble, à la fin, entendre un rire de femme, très loin. C'est peut-être le sang dans tes oreilles." },
      { if: { has: "ivm:parole" }, text: "Tu dis à la pierre, très bas, la phrase de Mère Ancolie : *je rends ce qui fut pris*. Tu frappes trois fois l'accoudoir du plat de la main. Les cinq encoches s'allument d'un ambre pâle, l'une après l'autre, et s'éteignent. Sous tes paumes, le rire de femme passe, net, une seule fois." },
      { if: { not: { item: "diapason" } }, text: "Le trône garde ce qu'il sait. Il faudrait l'instrument de Sorne pour le lui faire rendre." },
      { if: { item: "diapason" }, text: "Le trône garde ce qu'il sait. Dans ta poche, le diapason vibre sur la même note que la pierre." },
    ],
    choices: [
      { label: "Sortir le diapason de ta poche", hide: { not: { item: "diapason" } }, back: "VT_trone" },
      { back: "VT_salle" },
    ] },
});

// ==================================================================== those who come down: the sequence, Lothaire
var RETOUR = [
  { label: "Retourner face à l'escalier", hide: { not: { seen: "VT_arrivee" } }, back: "VT_arrivee" },
  { label: "Retourner au trésor", hide: { seen: "VT_arrivee" }, back: "VT_salle" },
];
Object.assign(P, {
  VT_arrivee: { act: "V", title: "Ceux qui descendent", place: "sorne", backName: "le pied de l'escalier",
    text: [
      { first: true, text: "Des lanternes dans l'escalier de la colline. Tu les vois d'abord comme des taches jaunes sur la pierre blonde, puis des ombres, puis des pas, des voix, le cliquetis du métal contre la roche. La nuit de la Grande Basse a amené jusqu'ici tous ceux qui voulaient la même chose que toi, et chacun l'a voulue pour d'autres raisons." },
      { again: true, text: "Le pied de l'escalier, la porte verte, les lanternes qui bougent sur les marches." },
      { if: { all: [BQ_LOTH, { not: { has: "vt:banque_reglee" } }, { not: { has: "vn:lothaire_seul" } }] }, text: "Lothaire Brunel descend le premier, ses gants gris à la main, le cornet jumeau à l'oreille. Derrière lui, deux spadassins de la Banque portent une arbalète chacun, armée, le carreau couché dans la rainure." },
      { if: { all: [BQ_LOTH, { not: { has: "vt:banque_reglee" } }, { has: "vn:lothaire_seul" }] }, text: "Lothaire Brunel descend seul, une lanterne à la main. Ses hommes l'ont quitté sur la chaussée. Il marche sans se presser, comme un homme qui vient chercher son dû." },
      { if: { all: [BQ_BERALD, { not: { has: "vt:banque_reglee" } }] }, text: "Une douzaine d'hommes de la Banque descendent en file, avec des pelles, des pinces, des cordes, et quatre arbalètes. À leur tête, un homme carré, une chaîne d'argent sur la poitrine : Léandre Escoffe, le capitaine des gardes de Corisande Marrel." },
      { if: { all: [CORI, { not: { has: "vt:banque_reglee" } }] }, text: "Quatre porteurs descendent une chaise à bras, avec précaution, marche après marche. Dans la chaise, enveloppée d'un manteau de loutre, Corisande Marrel. Derrière elle, des arbalétriers en manteau noir à boutons d'or. Elle est venue en personne." },
      { if: { all: [AVELINE_ICI, { not: { has: "vt:aveline_reglee" } }] }, text: "Plus haut dans l'escalier brillent des cuirasses bleues : les soldats d'Aveline, piques basses, avec leur capitaine et un tonneau qu'ils portent à deux, sur une perche." },
      { if: { all: [GARDIEN, { not: { has: "vt:gardien_regle" } }] }, text: "Et derrière tous les autres, sans lanterne, une silhouette en bure grise qui descend à pas comptés, le capuchon baissé. Tu la reconnais à sa façon de poser le pied." },
      { if: { all: [ALLIE, CHARTE, { not: { has: "vt:allie_regle" } }] }, text: "À côté de toi, Lothaire Brunel garde les yeux sur la Charte, contre ta poitrine." },
      { if: REGLE, text: "L'escalier est vide, à présent. Il ne reste que des traces dans la poussière et des taches de lanterne sur la pierre." },
      { if: M(5, 5), text: "L'eau suit les derniers venus dans l'escalier, en nappe mince, qui coule de marche en marche." },
    ],
    choices: [
      { label: "Faire face à Lothaire Brunel", hide: { any: [{ not: BQ_LOTH }, { has: "vt:banque_reglee" }, MER] }, to: "VT_lo_entree" },
      { label: "Faire face à Léandre Escoffe et aux hommes de la Banque", hide: { any: [{ not: BQ_BERALD }, { has: "vt:banque_reglee" }, MER] }, to: "VT_be_entree" },
      { label: "Aller au-devant de Corisande Marrel", hide: { any: [{ not: CORI }, { has: "vt:banque_reglee" }, MER] }, to: "VT_co_entree" },
      { label: "Faire face aux soldats d'Aveline", hide: { any: [{ not: AVELINE_ICI }, { has: "vt:aveline_reglee" }, MER] }, to: "VT_av_entree" },
      { label: "Aller vers la silhouette en bure", hide: { any: [{ not: GARDIEN }, { has: "vt:gardien_regle" }, MER] }, to: "VT_gi_gardien" },
      { label: "Te tourner vers Lothaire, qui regarde la Charte", hide: { any: [{ not: ALLIE }, { not: CHARTE }, { has: "vt:allie_regle" }, MER] }, to: "VT_la_regard" },
      { label: "Retourner au trésor", hide: { any: [{ not: REGLE }, MER] }, back: "VT_salle" },
      { label: "Monter par l'escalier du dôme, vers la tour de la Reine", big: true, hide: { any: [{ not: REGLE }, MER] }, to: "VT_puits" },
      { label: "La mer entre : prendre ce que tu tiens, et monter", big: true, hide: { not: MER }, to: "VT_flot" },
    ] },

  VT_lo_entree: { act: "V", title: "Lothaire Brunel", place: "sorne",
    fx: { clock: { maree: 1 }, meet: "lothaire" },
    text: [
      { if: { has: "vn:lothaire_devant" }, text: "Lothaire se redresse, lentement, et se tourne vers toi. Il a posé ses gants sur le plateau du lutrin, à côté de la cloche. Il a essayé d'ouvrir le verre : l'anneau de plomb porte trois entailles de couteau, et il saigne d'un doigt." },
      { if: { not: { has: "vn:lothaire_devant" } }, text: "Lothaire s'arrête sur la dernière marche et regarde la salle par-dessus ta tête : l'or, le dôme, le trône, le lutrin. Il ne montre rien. Seule sa main gauche, qui tient le cornet jumeau, s'est crispée." },
      "« Nous voilà, dit-il de sa voix douce. Vous et moi, au bout du chemin, et entre nous de quoi acheter une province. » Il sourit. « Je {{oreille#vt_lo_offre|vous propose le tiers de l'or, et la paix|vous laisserai le tiers de l'or le temps de remonter, et j'ai deux carreaux d'arbalète dans l'escalier pour le reprendre}}. »",
      { if: { all: [{ has: "ivb:lothaire_libre" }, { not: { seen: "VN_lothaire" } }] }, text: "« Vous pensez toujours trop fort, ajoute-t-il. Je vous l'ai dit chez Madame, le soir où je vous ai laissé{e} derrière moi. Cela ne vous a pas encore perdu{e}. »" },
      "Il penche la tête, écoute. « Vous pensez *jamais*. Et dessous, plus bas, vous pensez *combien*. C'est humain. »",
      { with: "salome", if: { has: "salome:maiwenn" }, text: "Lothaire évite de regarder Salomé. Il l'a vue avant toi. « Votre capitaine {{oreille#vt_lo_maiwenn|n'a rien à me reprocher qu'un peu de concurrence|sait ce que j'ai fait sur l'écueil des Sourds, et chaque nuit depuis je me demande si elle replongera, un jour, pour me noyer}}, dit-il. »" },
      { if: { has: "vn:lothaire_marche" }, text: "« Nous avions un marché, ajoute-t-il. Ensemble jusqu'à la porte, et chacun pour soi devant le trésor. Nous y sommes. »" },
    ],
    choices: [
      { label: "Le laisser parler", to: "VT_lo_parle" },
      { label: "« Laissez Salomé vous parler de la corde. »", hide: { any: [{ not: { present: "salome" } }, { not: { has: "salome:maiwenn" } }] }, to: "VT_lo_salome" },
      { label: "Te battre", fight: { title: "Lothaire Brunel", enemies: [{ id: "vt_lothaire", n: 1 }, { id: "vt_spadassin", n: 2 }],
        win: { to: "VT_lo_vaincu" }, lose: { fx: { pv: -4 }, to: "VT_lo_charte" } } },
    ] },

  VT_lo_parle: { act: "V", title: "Ce que vous pensez", place: "sorne",
    text: [
      "Lothaire fait trois pas dans la salle, les mains derrière le dos, comme un acheteur dans une boutique. Il ne touche à rien. Il s'arrête devant un tas de pièces, en prend une, la mord, et la repose avec un petit sourire.",
      "« Corisande veut l'or pour payer le duc, dit-il. Le duc veut la Charte pour casser la République. Les Taiseurs veulent qu'on laisse tout à la mer. Et vous, vous ne savez pas ce que vous voulez, c'est ce qui vous rend si bruyant. » Il se tourne vers toi. « Madame {{oreille#vt_lo_madame|m'a toujours bien payé, et je la sers|m'a fait porter un billet hier soir : après cette nuit, elle n'aura plus besoin de mes services ; je sais ce que ça veut dire, chez elle}}. »",
      "Il tapote le cornet jumeau. « Je vous entends. Vous m'entendez. Nous sommes les deux seules personnes de cette salle qui savent ce que pensent les autres. C'est une solitude, vous verrez. »",
      { with: "tibere", if: { has: "tibere:espion" }, text: "Tibère a la main sur sa masse. Lothaire le salue d'un signe de tête, aimable. « Sergent. Vos cinq ducats vous attendent, si vous les voulez encore. » Tibère {{oreille#vt_lo_tibere|crache par terre|pense à Rosalie, et à ce qu'il a fait de ces cinq ducats, semaine après semaine}}." },
      { if: { has: "taiseurs:serment" }, text: "Tu sens sa curiosité quand il t'écoute : il entend deux pensées en même temps, l'une devant l'autre, et il ne sait plus laquelle est la tienne." },
    ],
    choices: [
      { label: "« Elle vous a congédié par billet. Venez avec nous contre elle. »", hide: { not: { voile: "vt_lo_madame" } }, fx: { ep: ["seance", 2500] }, to: "VT_lo_allie" },
      { label: "Lui dire que Corisande le jettera quand elle aura l'or", hide: { voile: "vt_lo_madame" }, test: { dom: "social", diff: -20, label: "Retourner Lothaire contre sa maîtresse", help: [{ if: { has: "vn:lothaire_marche" }, v: 10 }, { if: { has: "metier:parole" }, v: 10 }] },
        win: { to: "VT_lo_allie" }, lose: { fx: { conf: { lison: -2 } }, to: "VT_lo_entree" } },
      { label: "Lui offrir les tas du devant, en pensant à l'or de toutes tes forces", hide: { not: { voile: "vt_or_plomb" } }, if: { has: "taiseurs:serment" }, why: "Il entend ce que tu penses. Il faudrait savoir se taire en dedans, comme les Taiseurs.", fx: { ep: ["seance", 3000] }, to: "VT_lo_ruse" },
      { label: "« Vos deux arbalétriers, dans l'escalier : qu'ils descendent, ou qu'ils remontent. »", hide: { not: { voile: "vt_lo_offre" } }, test: { dom: "combat", diff: -10, label: "Désarmer les arbalétriers de l'escalier", help: [{ with: "fauvette", v: 15 }, { with: "tibere", v: 10 }] },
        win: { fx: { ep: ["seance", 2000] }, to: "VT_lo_vaincu" }, lose: { fx: { pv: -5 }, to: "VT_lo_charte" } },
      { label: "Te battre", fight: { title: "Lothaire Brunel", enemies: [{ id: "vt_lothaire", n: 1 }, { id: "vt_spadassin", n: 2 }],
        win: { to: "VT_lo_vaincu" }, lose: { fx: { pv: -4 }, to: "VT_lo_charte" } } },
    ] },

  VT_lo_vaincu: { act: "V", title: "Les gants gris", place: "sorne",
    fx: { flag: ["lothaire:vaincu", "vt:banque_reglee"], item: "ivb_cornet_jumeau", ep: ["histoire", 3500], fac: { banque: -5 } },
    text: [
      { outcome: "win", text: "Lothaire tombe à genoux sur la mosaïque, la main sur le flanc. Ses spadassins ont jeté leurs armes, ou ne se relèvent pas. Il respire vite, la bouche ouverte, et pour la première fois depuis que tu le connais il a l'air d'un homme de son âge." },
      { outcome: "lose", text: "Ce sont les arbalétriers qui cèdent les premiers : Lothaire les a payés pour tirer, pas pour se battre. Ils posent leurs armes sur les marches et remontent sans se retourner. Lothaire reste seul au pied de l'escalier." },
      "Tu lui prends le cornet jumeau. Il te le laisse prendre. Il regarde sa main vide, puis toi. « Vous verrez, dit-il. On ne l'enlève jamais tout à fait. On l'entend encore quand on l'a posé. »",
      "« Liez-moi, si ça vous rassure, dit-il. Je ne bougerai pas. Je n'ai nulle part où aller. Corisande ne me reprendra pas, et le duc ne paie que ceux qui apportent quelque chose. »",
      { with: "salome", text: "Salomé s'approche de lui, le coutelas à la main. Elle le regarde longtemps. Puis elle rengaine, et elle s'en va de l'autre côté de la salle." },
    ],
    choices: [
      { label: "Le lier au banc des secrétaires, et le laisser là jusqu'à la remontée", fx: { flag: "vt:lothaire_lie" }, to: "VT_lo_lie" },
      { label: "L'achever", tag: "Marque +1", stain: true, fx: { mark: 1 }, to: "VT_lo_mort" },
    ] },

  VT_lo_lie: { act: "V", title: "Le banc des secrétaires", place: "sorne",
    text: [
      "Tu l'assieds sur le banc de pierre, entre deux morts, et tu lui lies les poignets derrière le dos avec sa propre ceinture. Il se laisse faire. Il regarde le squelette à côté de lui, sa robe de clerc, ses mains posées sur les genoux.",
      "« Ils ont attendu trois cents ans, dit-il. Moi, j'attendrai bien une heure. » Il ferme les yeux. « Vous me ferez monter quand la mer viendra ? Ou vous me laisserez avec eux ? Ne répondez pas. Je l'entendrai bien assez tôt. »",
    ],
    choices: RETOUR },

  VT_lo_mort: { act: "V", title: "La fin de Lothaire Brunel", place: "sorne",
    fx: { flag: ["lothaire:mort", "vt:banque_reglee"], unflag: "lothaire:vaincu" },
    text: [
      { with: "salome", if: { seen: "VT_lo_salome" }, text: "Salomé l'a fait. Elle essuie son coutelas sur le manteau de Lothaire, d'un geste lent, des deux côtés de la lame. Puis elle s'assied par terre, le dos contre un coffre, et elle se met à trembler, de la tête aux pieds, sans pleurer." },
      { if: { not: { seen: "VT_lo_salome" } }, text: "Il ne se défend pas. Il te regarde jusqu'au bout, avec une curiosité tranquille, comme s'il voulait entendre ce que tu penses à ce moment-là. Tu espères qu'il ne l'entend pas." },
      "Lothaire Brunel est mort sur la mosaïque du delta, la joue posée sur une île. Ses gants gris sont tombés à côté de lui.",
      "Tu {{miroir#vt_lo_miroir|as fait ce qu'il fallait faire, au bout du compte|as pensé à Maïwenn, au coffret, à la corde, et tu as aussi pensé qu'il était le seul à t'entendre, et que tu ne voulais plus qu'on t'entende}}.",
    ],
    choices: RETOUR },

  VT_lo_salome: { act: "V", title: "La corde", place: "sorne",
    text: [
      { with: "salome", text: "Salomé s'avance entre toi et Lothaire. Elle a le coutelas à la main, la lame tournée vers le sol. « L'écueil des Sourds, dit-elle. Il y a trois ans. Maïwenn est descendue au coffre de l'épave, et toi tu tenais la corde. »" },
      "Lothaire ôte le cornet jumeau de son oreille. Il le pose sur le lutrin, à côté de lui. « Je vais vous le dire sans ça, dit-il. Pour une fois. » Il regarde Salomé. « J'ai coupé la corde. Le coffret était petit, il tenait dans une main, et j'ai pensé que je ne le partagerais pas. Je l'ai pensé une seconde. Une seconde suffit. »",
      { with: "salome", text: "Salomé ne bouge pas. Le coutelas tremble dans sa main, de plus en plus, puis plus du tout." },
      { with: "salome", if: { has: "salome:plonge" }, text: "« J'ai replongé, dit-elle. Pour elle. Tu ne le savais pas. Je suis descendue sur l'écueil, et je l'ai trouvée. Elle avait encore la corde à la taille. Coupée net. »" },
    ],
    choices: [
      { label: "Laisser Salomé décider", with: "salome", to: "VT_lo_mort" },
      { label: "Retenir le bras de Salomé", fx: { conf: { salome: -5 } }, to: "VT_lo_epargne" },
      { label: "« Il vivra avec ça. C'est pire. »", hide: { not: { voile: "vt_lo_maiwenn" } }, fx: { conf: { salome: 10 } }, to: "VT_lo_epargne" },
    ] },

  VT_lo_epargne: { act: "V", title: "Le coutelas baissé", place: "sorne",
    fx: { flag: ["lothaire:vaincu", "vt:banque_reglee", "vt:salome_epargne"], item: "ivb_cornet_jumeau", ep: ["histoire", 3000] },
    text: [
      { with: "salome", text: "Salomé baisse le coutelas. Elle le regarde comme on regarde un outil qu'on n'a plus envie de tenir, et elle le rengaine. « Tu remonteras, dit-elle à Lothaire. Et tu le diras. Devant le Guet, devant le Conseil, devant la Veuve Corbière, devant qui je voudrai. Chaque fois que je te le demanderai, tu le diras. »" },
      "Lothaire hoche la tête. Il ne reprend pas son cornet sur le lutrin. Tu le prends. Il te regarde le prendre, et il a l'air soulagé.",
      { with: "salome", text: "Salomé s'en va s'asseoir sur les marches du trône. Elle a les mains à plat sur les genoux, et elle respire, longuement, comme quelqu'un qui remonte d'une plongée." },
    ],
    choices: RETOUR },

  VT_lo_allie: { act: "V", title: "Contre Corisande", place: "sorne",
    fx: { flag: ["lothaire:allie", "vt:banque_reglee", "vt:allie_regle", "vt:lothaire_tourne"], fac: { banque: -10 }, ep: ["histoire", 3500] },
    text: [
      "Lothaire te regarde un long moment sans rien dire. Puis il rit, un vrai rire, bref, qui le surprend lui-même.",
      "« Par billet, dit-il. Vingt ans de service, et un billet, plié en quatre, cacheté à la cire noire. Oui. » Il ôte ses gants, un doigt après l'autre, et les glisse dans sa ceinture. « Elle a un petit-fils en otage chez le duc, vous savez. Bérold. Il est aux cadets d'Aveline depuis l'automne. Elle ne l'a dit à personne. Je l'ai entendu, un soir, sous ses mots. C'est pour lui qu'elle paiera le duc, bien plus que pour la ville. »",
      "Il fait signe à ses hommes, dans l'escalier. Les arbalètes se lèvent vers la voûte, désarmées. « Je vous suis. Jusqu'en haut de la tour. Ensuite, nous verrons ce que vous pensez de moi. »",
      { with: "lison", text: "Lison le regarde de travers. « S'il t'entend penser à le pousser dans la mer, dit-elle à mi-voix, tâche de le penser fort. »" },
    ],
    choices: RETOUR },

  VT_lo_ruse: { act: "V", title: "L'or du devant", place: "sorne",
    fx: { flag: ["lothaire:vaincu", "vt:banque_reglee", "vt:lothaire_plomb"], fac: { banque: -5 } },
    text: [
      "Tu lui montres les grands tas du devant, ceux qui brillent jusqu'à hauteur d'homme. Et tu penses à l'or. Tu penses à son poids, à son éclat, à ce qu'il vaut. Tu as appris aux Joncs-Bas à mettre une pensée devant l'autre, et tu la mets là, bien en avant, et derrière elle tu fermes une porte.",
      "Lothaire écoute. Il écoute longtemps. Puis il hoche la tête. « Le tiers, dit-il. Les tas du devant. Marché conclu. » Il fait descendre ses hommes. Ils remplissent leurs sacs à pleines pelles, jusqu'à ne plus pouvoir les soulever, et ils remontent l'escalier pliés en deux, en soufflant.",
      "Lothaire se retourne une fois, sur la troisième marche. Il te regarde. Il a un doute. Mais son sac pèse, et un sac qui pèse rassure.",
      { with: "fauvette", text: "Fauvette attend qu'ils aient disparu, puis elle s'assied par terre et rit dans ses mains jusqu'à en avoir les larmes aux yeux. « Du plomb, dit-elle. Il remonte trois cents marches avec du plomb sur le dos. »" },
    ],
    choices: RETOUR },

  VT_lo_charte: { act: "V", title: "Les gants gris sur la Charte", place: "sorne",
    fx: { flag: ["vt:banque_reglee", "vt:charte_perdue", "vt:charte_lothaire"], clock: { maree: 1 } },
    text: [
      "Tu te retrouves sur la mosaïque, la joue contre une île, le souffle coupé. Au-dessus de toi, Lothaire reprend son équilibre, essuie sa lame, et se penche.",
      { if: CHARTE, text: "Il glisse la main sous ton manteau, avec une délicatesse de tailleur, et en sort la Charte dans sa toile cirée. « Pardon », dit-il, et il le pense." },
      { if: { not: CHARTE }, text: "Il te laisse là. Il va au lutrin, brise la cloche d'un coup de pommeau, et prend la Charte sur son plateau. Un grondement monte sous le sol, et il se met à courir." },
      "« Le duc la paiera le prix d'une ville, dit-il en reculant vers l'escalier. Je vous en enverrai une part. Je le pense, en ce moment. Je ne le penserai plus demain. »",
      "Il remonte l'escalier de la colline avec ses hommes, vite. Tu entends ses pas longtemps, de plus en plus haut, puis plus rien.",
      { with: "any", text: "On t'aide à te relever. Chacun garde pour soi qu'il fallait le prévoir." },
    ],
    choices: [
      { label: "Te relever, la main vide", hide: { not: CHARTE }, fx: { relicLose: "f_sorne" }, back: "VT_salle" },
      { label: "Te relever", hide: CHARTE, back: "VT_salle" },
    ] },

  VT_la_regard: { act: "V", title: "Lothaire et la Charte", place: "sorne",
    fx: { clock: { maree: 1 } },
    text: [
      "Lothaire Brunel s'est rapproché de toi pendant que les autres regardaient l'escalier. Il ne fait rien. Il est là, à un pas, et ses yeux vont de ton visage à la toile cirée contre ta poitrine.",
      "« Je pourrais la lire ? demande-t-il. Une fois. Je l'ai cherchée vingt ans pour quelqu'un d'autre. Je {{oreille#vt_la_veut|voudrais seulement savoir ce qu'elle dit|pourrais la porter au duc demain matin, et je n'aurais plus jamais à porter de gants pour personne}}. »",
      "Il entend que tu hésites. Il sourit, un peu triste. « Vous avez raison d'hésiter. Moi aussi, j'hésite. »",
      { if: { has: "ivm:lothaire_bord" }, text: "Tu l'as sorti des cachots de la Tour Ronde de tes mains, et il le sait. Ça pèse quelque chose, chez lui. Tu ne sais pas combien." },
    ],
    choices: [
      { label: "Lui confier la Charte", hide: { not: { has: "ivm:lothaire_bord" } }, to: "VT_la_tient" },
      { label: "Lui confier la Charte", hide: { has: "ivm:lothaire_bord" }, to: "VT_la_trahit" },
      { label: "« Vous pensez au duc, et à vos gants. Lisez-la par-dessus mon épaule. »", hide: { not: { voile: "vt_la_veut" } }, fx: { ep: ["seance", 2000] }, to: "VT_la_tient" },
      { label: "La garder contre toi, et le lui dire en face", fx: { flag: "vt:allie_regle" }, back: "VT_arrivee" },
    ] },

  VT_la_tient: { act: "V", title: "Ce que lit Lothaire", place: "sorne",
    fx: { flag: ["vt:allie_regle", "vt:lothaire_fidele"], ep: ["seance", 2500] },
    text: [
      "Lothaire lit la Charte. Il la lit lentement, en remuant les lèvres, comme un écolier. Arrivé à la signature, il s'arrête, et il pose le bout du doigt sur la boucle de l'Y, sans appuyer.",
      "« Elle écrivait vite, dit-il. Comme quelqu'un qui a beaucoup à dire et peu de temps. » Il ôte le cornet jumeau de son oreille et le regarde. « Je l'ai entendue, tout à l'heure, sur son trône. J'ai entendu beaucoup de gens mentir, dans ma vie. Elle, elle disait la vérité, et elle savait qu'on allait la lui prendre. »",
      "Il te rend la Charte. Ses mains ont envie de trembler, et il les en empêche.",
      "« Gardez-la, dit-il. Je la vendrais. Je me connais. »",
    ],
    choices: [{ back: "VT_arrivee" }] },

  VT_la_trahit: { act: "V", title: "Le héron", place: "sorne",
    fx: { flag: ["vt:allie_regle"], unflag: "lothaire:allie", relicLose: "f_sorne" },
    text: [
      "Lothaire prend la Charte. Il la tient à deux mains, il la regarde, et tu vois sur son visage passer une chose très rapide, très ancienne : la patience d'un héron qui a attendu toute la journée au bord de l'eau.",
      "Il recule d'un pas. Puis de deux. « Pardonnez-moi, dit-il, et il le pense vraiment. Le duc la paiera le prix d'une ville. » Et il court vers l'escalier de la colline, plus vite que tu ne l'aurais cru possible pour un homme de son âge.",
    ],
    choices: [
      { label: "Le rattraper dans l'escalier", test: { dom: "discretion", diff: -10, label: "Rattraper un héron dans un escalier", help: [{ with: "fauvette", v: 20 }, { with: "lison", v: 10 }] },
        win: { to: "VT_la_reprise" }, lose: { fx: { flag: ["vt:charte_perdue", "vt:charte_lothaire"], pv: -3 }, back: "VT_arrivee" } },
      { label: "Laisse-moi faire", who: "fauvette", fx: { conf: { fauvette: 5 } }, to: "VT_la_reprise" },
    ] },

  VT_la_reprise: { act: "V", title: "Sur les marches", place: "sorne",
    fx: { relic: "f_sorne", ep: ["seance", 2500] },
    text: [
      { with: "fauvette", text: "Fauvette le rattrape au troisième palier. Elle ne le frappe pas : elle lui passe entre les jambes, et la Charte change de mains pendant qu'il tombe. Quand il se relève, elle est déjà trois marches plus bas, la toile cirée sous le bras. « Elle est mieux chez nous », lui dit-elle." },
      { without: "fauvette", text: "Tu le rattrapes au troisième palier, où l'escalier tourne court. Tu le saisis par le manteau. Il se retourne, et il te tend la Charte avant même que tu la demandes, avec un petit haussement d'épaules." },
      "Lothaire s'assied sur une marche, essoufflé. « Il fallait que j'essaie, dit-il. Vous comprenez. Je m'en serais voulu de ne pas essayer. » Il rit doucement. « Je redescends avec vous. Je n'ai plus d'endroit où aller, de toute façon. »",
    ],
    choices: [{ back: "VT_arrivee" }] },
});

// ==================================================================== the Bank: Léandre Escoffe's men, or Corisande herself
var SAUVEUR = { any: [{ present: "lison" }, { present: "fauvette" }] };
var TIBERE_BANQUE = { all: [{ has: "tibere:vendu" }, { not: { present: "tibere" } }] };
Object.assign(P, {
  VT_be_entree: { act: "V", title: "Les hommes de la Banque", place: "sorne",
    fx: { clock: { maree: 1 } },
    text: [
      "Les hommes de la Banque s'arrêtent au bas de l'escalier en voyant l'or. Les pelles baissent. L'un d'eux dit un juron très doux, presque une prière. Léandre Escoffe les fait taire d'un geste et s'avance seul sur la mosaïque, la main sur la garde de son épée.",
      "« Au nom de la maison Marrel, dit-il. Tout ce qui est ici est gagé à la Banque par l'acte de la Saint-Michel. Rangez-vous. » Il a la voix d'un homme qui a appris la phrase par cœur sur le bateau. « Madame {{oreille#vt_be_ordre|veut l'or et le parchemin, voilà tout|m'a dit de brûler le parchemin ici même, et de ne laisser remonter personne qui l'aurait lu}}. »",
      "Derrière lui, ses hommes ont les yeux sur l'or, et pas sur toi. L'un d'eux murmure à son voisin, assez fort pour que tu l'entendes : « La Banque {{oreille#vt_be_solde|paie bien, au moins|ne nous a rien versé depuis la Chandeleur ; on nous a promis le dixième de ce qu'on remonterait, et je n'y crois plus}}. »",
      { if: TIBERE_BANQUE, text: "Parmi eux, un peu à l'écart, il y a Tibère. Il porte le manteau noir à boutons d'or de la Banque, et il a l'air de s'y trouver à l'étroit. Il évite tes yeux. « Je {{oreille#vt_tibere_vendu|fais mon travail, c'est tout|ai payé la dette de Rosalie avec ce qu'ils m'ont donné pour toi, et je ne dors plus}}, dit-il sans que tu lui aies rien demandé. »" },
      { if: { has: "ivm:banque_flotte" }, text: "Tu comptes les hommes au pied de l'escalier : une quarantaine, et six plongeurs en chemise mouillée. Les trois bateaux de la Banque sont vides, cette nuit, jusqu'au mousse." },
      { with: "tibere", text: "Tibère reconnaît deux visages dans la file. « Gaucher, dit-il. Et le grand Mathelin. On a fait le Guet ensemble, au pont des Muets. » Les deux hommes baissent la tête." },
      { if: ALLIE, text: "Lothaire Brunel s'avance à côté de toi. Léandre le voit, et son visage se ferme. « Vous, dit-il. Madame vous fait chercher dans toute la ville. »" },
    ],
    choices: [
      { label: "« Vos hommes n'ont rien touché depuis la Chandeleur. Moi, je paie ce soir. »", hide: { not: { voile: "vt_be_solde" } }, fx: { ep: ["seance", 2500] }, to: "VT_be_paye" },
      { label: "« Il a ordre de ne laisser remonter aucun témoin. Vous en serez. »", hide: { not: { voile: "vt_be_ordre" } }, fx: { ep: ["seance", 2500] }, to: "VT_be_tibere" },
      { label: "« Tibère. Il est encore temps. Viens. »", hide: { any: [{ not: TIBERE_BANQUE }, { not: { voile: "vt_tibere_vendu" } }] }, to: "VT_tibere_retour" },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: -10, label: "Tibère parle aux anciens du Guet", help: [{ if: { has: "tibere:aveu" }, v: 10 }] },
        win: { fx: { conf: { tibere: 5 } }, to: "VT_be_tibere" }, lose: { to: "VT_be_combat" } },
      { label: "Laisser Lothaire leur parler", hide: { not: ALLIE }, test: { dom: "social", diff: 0, label: "Lothaire connaît les gens de la Banque" },
        win: { to: "VT_be_tibere" }, lose: { to: "VT_be_combat" } },
      { label: "Dégainer", to: "VT_be_combat" },
    ] },

  VT_be_combat: { act: "V", title: "Sur la mosaïque", place: "sorne",
    text: [
      "Léandre tire son épée, une lame de cavalier, trop longue pour une salle, et il s'en sert quand même. Ses arbalétriers se déploient sur les marches de l'escalier. Les hommes aux pelles reculent vers les murs, entre les tas d'or, et les lâchent pour des coutelas.",
      { with: "salome", text: "Salomé se place à ta gauche, le coutelas bas. « Les arbalètes d'abord, dit-elle. Les autres ne veulent pas se battre. Ils veulent l'or. »" },
    ],
    choices: [
      { label: "Te battre", big: true, fight: { title: "Léandre Escoffe et les gens de la Banque", enemies: [{ id: "vt_berald", n: 1 }, { id: "vt_arbaletrier", n: 2 }, { id: "vt_garde", n: 1 }],
        win: { fx: { flag: ["vt:banque_reglee", "vt:berald_vaincu"], fac: { banque: -10 }, ep: ["histoire", 3500] }, to: "VT_be_vaincu" },
        lose: { fx: { pv: -4, clock: { maree: 1 } }, to: "VT_be_defaite" } } },
    ] },

  VT_be_vaincu: { act: "V", title: "La chaîne d'argent", place: "sorne",
    text: [
      "Léandre Escoffe est assis contre un tas de lingots, la jambe en sang, son épée trop longue à trois pas de lui. Ses hommes ont jeté leurs armes. Ils se tiennent contre le mur, les mains ouvertes, à regarder l'or qu'ils ne toucheront pas.",
      "« Madame sera déçue, dit Léandre. Elle déteste être déçue. » Il ôte sa chaîne d'argent et la pose sur la mosaïque, devant lui, sans un mot de plus.",
      { with: "tibere", text: "Tibère ramasse les arbalètes, une par une, et les jette dans le conduit des rigoles. Puis il donne aux deux anciens du Guet une tape sur l'épaule, et un conseil à l'oreille, que tu n'entends pas." },
      "Les gens de la Banque remontent l'escalier en portant leur capitaine. Tu les entends longtemps sur les marches.",
    ],
    choices: RETOUR },

  VT_be_paye: { act: "V", title: "La paie de la Chandeleur", place: "sorne",
    fx: { flag: ["vt:banque_reglee", "vt:berald_paye"], fac: { banque: -5, hautes: 3 } },
    text: [
      "Tu le dis assez fort pour que toute la file l'entende. Les pelles s'immobilisent. Les hommes de la Banque se regardent, puis regardent Léandre, puis regardent l'or.",
      "« Le dixième, dis-tu. Ce que la Banque vous promet sans vous le donner. Prenez-le, et remontez. » Le plus vieux pose sa pelle contre le mur, très lentement. Puis un autre. Puis tous.",
      { if: { is: { or: "remonte" } }, text: "Tu leur ouvres un des coffres que tu as chargés. Ils y puisent à deux mains, sérieusement, en comptant, et ils emportent leur dixième dans leurs sacs. Le coffre est moins plein, et le poids qui restera à hisser est moins lourd." },
      { if: { not: { is: { or: "remonte" } } }, text: "Tu leur montres les lingots du fond, derrière les tas qui brillent. Ils remplissent leurs sacs, chacun le sien, et pas plus." },
      "Léandre Escoffe regarde ses hommes partir avec leur paie. Il reste seul au pied de l'escalier. « La faute est à moi, dit-il enfin, d'une voix fatiguée. J'aurais dû les payer de ma poche. » Il remonte derrière eux, sans se retourner.",
    ],
    choices: [
      { label: "Les laisser partir", back: "VT_arrivee" },
    ] },

  VT_be_tibere: { act: "V", title: "Les anciens du Guet", place: "sorne",
    fx: { flag: ["vt:banque_reglee", "vt:berald_parti"], ep: ["histoire", 3000] },
    text: [
      { with: "tibere", if: { not: { voile: "vt_be_ordre" } }, text: "Tibère s'avance vers la file, les pouces dans le ceinturon. Il laisse Léandre de côté et parle aux hommes, un par un, par leur nom quand il le connaît. « Gaucher. Tu as une femme à Salvèze, et deux gosses. Mathelin. Ta mère est toujours sur le quai aux Herbes ? Qu'est-ce que vous faites là, avec des pelles, à trois cents marches sous la mer, pour une femme qui ne vous paie plus ? »" },
      { if: { voile: "vt_be_ordre" }, text: "Tu le dis à la file, pas à Léandre. Qu'il a ordre de brûler la Charte ici et de ne laisser remonter personne qui l'aurait lue. Que la nuit est longue, et que ceux qui auront vu Léandre faire ça sont aussi des gens qui l'auront lue, de près ou de loin. Les hommes se regardent." },
      { if: ALLIE, text: "Lothaire ajoute, de sa voix douce : « Je travaille pour Madame depuis vingt ans. Hier, elle m'a congédié par billet. Vous croyez qu'elle vous écrira, à vous ? »" },
      "Un homme pose sa pelle. Un autre sa pince. Puis la file entière recule vers l'escalier, d'un pas tranquille. Léandre les regarde partir. Il ne les retient pas.",
      "« Bon, dit-il. » Il remet son épée au fourreau, très soigneusement. « Je dirai à Madame que la mer est montée trop vite. C'est presque vrai. »",
    ],
    choices: RETOUR },

  VT_tibere_retour: { act: "V", title: "Tibère", place: "sorne",
    fx: { join: "tibere", unflag: "tibere:parti", flag: ["vt:tibere_revenu", "vt:banque_reglee"], conf: { tibere: 15 }, ep: ["histoire", 3500] },
    text: [
      "Tibère te regarde enfin. Il a les yeux rouges, et la moustache qui tremble. « Il est trop tard, dit-il. Tu le sais. »",
      "Tu ne réponds rien. Tu attends. Tu as appris à attendre, cette année, plus que dans toute ta vie.",
      "Tibère ôte le manteau noir à boutons d'or. Il le plie, mal, et le pose sur les marches. Puis il traverse la mosaïque et vient se mettre à côté de toi, la masse à la main, face aux hommes de la Banque. « J'ai fait le Guet avec la moitié de ces gars-là, dit-il à voix haute. Le premier qui lève une arbalète, je lui dis le nom de sa mère devant tout le monde. »",
      "Les arbalètes restent basses. Léandre Escoffe regarde ses hommes, puis Tibère, puis toi. Il fait un geste de la main, las, et la file remonte l'escalier. Il les suit.",
    ],
    choices: RETOUR },

  VT_be_defaite: { act: "V", title: "Le brasero", place: "sorne",
    fx: { flag: ["vt:banque_reglee", "vt:berald_gagne"] },
    text: [
      "Tu es à terre, un genou sur la mosaïque, le souffle court. Les arbalétriers te tiennent en joue. Les gens de la Banque allument un brasero de campagne au milieu de la salle, avec du charbon descendu dans un sac.",
      { if: CHARTE, text: "Un garde te prend la Charte dans sa toile cirée et la tend à son chef, qui la tient au-dessus des braises sans la regarder." },
      { if: { not: CHARTE }, text: "Un garde brise la cloche du lutrin, prend la Charte et la tend à son chef. Sous le sol, quelque chose gronde. Le chef la tient au-dessus des braises sans la regarder." },
      { with: "lison", text: "Lison plonge. Elle passe entre deux gardes, la main droite tendue, et elle prend la Charte dans le feu même, au moment où le coin s'allume. Elle roule sur la mosaïque en étouffant la flamme contre sa poitrine. Quand elle se relève, sa main est rouge et cloquée jusqu'au poignet, et la Charte a un coin noir, un seul." },
      { with: "fauvette", without: "lison", text: "Fauvette est plus rapide que les arbalètes. Elle arrache la Charte au-dessus du brasero et file entre les tas d'or. Un carreau la manque d'un pouce. Elle revient vers toi par l'autre côté de la salle, la Charte serrée contre son ventre, intacte." },
      { if: { is: { or: "remonte" } }, text: "Les hommes de la Banque emportent deux des trois coffres de lingots. Ils les remontent par l'escalier de la colline, à quatre par coffre, en jurant." },
      { if: { not: SAUVEUR }, text: "Il n'y a personne pour plonger dans le feu. La Charte brûle d'un coin à l'autre, et la cire du sceau coule sur les braises avec une odeur de miel." },
      { if: { not: { seen: "VT_co_rompt" } }, text: "Puis ils s'en vont. Léandre te salue en passant, sans moquerie. « Madame aura ce qu'elle voulait, dit-il. Ou presque. »" },
      { if: { seen: "VT_co_rompt" }, text: "Puis ils s'en vont. Corisande Marrel passe devant toi dans sa chaise à bras et ne te regarde pas. « Je préférais le savoir ici, dit-elle aux porteurs. Je le savais. »" },
    ],
    choices: [
      { label: "Te relever", hide: { any: [{ not: SAUVEUR }, { not: CHARTE }] }, fx: { conf: { lison: 5, fauvette: 5 } }, to: "VT_be_apres" },
      { label: "Te relever", hide: { any: [{ not: SAUVEUR }, CHARTE] }, fx: { relic: "f_sorne", conf: { lison: 5, fauvette: 5 } }, to: "VT_be_apres" },
      { label: "Te relever, et regarder les cendres", hide: SAUVEUR, fx: { relicLose: "f_sorne", flag: ["vt:charte_perdue", "vt:charte_brulee"] }, to: "VT_be_apres" },
    ] },

  VT_be_apres: { act: "V", title: "Ce qui reste", place: "sorne",
    text: [
      { if: CHARTE, text: "La Charte est contre toi, dans sa toile cirée, avec un coin noir qui sent le roussi. Le texte est entier. La signature est entière." },
      { if: { not: CHARTE }, text: "Il reste sur la mosaïque un cercle de cendres et une flaque de cire rouge, durcie. Tu y laisses ta main un moment." },
      { with: "lison", text: "Lison trempe sa main brûlée dans une flaque d'eau de mer, en serrant les dents. « Ma grand-mère, dit-elle, m'aurait battue si je l'avais laissée brûler. »" },
    ],
    choices: [
      { label: "Compter ce qui reste de l'or, et retourner face à l'escalier", hide: { not: { is: { or: "remonte" } } }, fx: { set: { or: "partie" } }, back: "VT_arrivee" },
      { label: "Retourner face à l'escalier", hide: { is: { or: "remonte" } }, back: "VT_arrivee" },
    ] },

  VT_co_entree: { act: "V", title: "Corisande Marrel", place: "sorne",
    fx: { clock: { maree: 1 }, meet: "corisande" },
    text: [
      "Les porteurs posent la chaise à bras au pied de l'escalier, sur la mosaïque. Corisande Marrel n'en descend pas. Elle regarde la salle sans hâte, l'or, le trône, le lutrin, et son regard ne s'attarde nulle part. Elle a l'air d'une femme qui inspecte un entrepôt qu'elle vient d'acheter.",
      "« Nous avons un accord, dit-elle. L'or à la Banque, qui paiera le duc à la Saint-Jean. Le Registre au feu, avec la Charte. La ville vivra, et personne n'ira chercher dans des parchemins de trois siècles de quoi faire pendre des gens qui sont morts. » Elle tend la main vers un brasero que ses gens viennent d'allumer près d'elle. « Je {{oreille#vt_co_feu|brûlerai ce parchemin pour que la ville vive en paix|brûlerai ce parchemin parce qu'un Marrel tenait le couteau, et que je refuse d'entendre mon nom lu sur une place}}. »",
      "Elle ajoute, plus bas : « La ville {{oreille#vt_co_berold|a besoin de cet or avant la Saint-Jean|a besoin de cet or, et Bérold aussi : si le duc n'est pas payé à la Saint-Jean, il me rendra mon petit-fils dans un coffre}}. »",
      { if: { has: "ivm:cori_arbaletes" }, text: "Derrière la chaise, les douze arbalétriers ont pris position sur les marches. Tu les as comptés sur sa galère. Ils sont tous là." },
      { if: LIBRE, text: "Lothaire Brunel se tient à côté de la chaise, ses gants gris à la main. Corisande lui parle sans le regarder, comme on parle à un meuble utile. « Madame {{oreille#vt_co_lothaire|peut compter sur moi jusqu'au bout|ignore que je l'ai entendue parler de moi au passé, hier soir, à son secrétaire}}, dit Lothaire. »" },
      { if: TIBERE_BANQUE, text: "Tibère se tient derrière les porteurs, en manteau noir à boutons d'or. Il évite tes yeux. « Je {{oreille#vt_tibere_vendu|fais mon travail, c'est tout|ai payé la dette de Rosalie avec ce qu'ils m'ont donné pour toi, et je ne dors plus}}, dit-il sans que tu lui aies rien demandé. »" },
      { if: { has: "registre:lu" }, text: "Elle jette un regard à la reliure, sur son pupitre. Un regard très court." },
    ],
    choices: [
      { label: "« Notre accord tient. »", to: "VT_co_tient" },
      { label: "« Bérold. Je sais pour Bérold. »", hide: { not: { voile: "vt_co_berold" } }, fx: { ep: ["histoire", 3000] }, to: "VT_co_berold" },
      { label: "« C'est le couteau que vous voulez brûler. Pas la Charte. »", hide: { not: { voile: "vt_co_feu" } }, fx: { ep: ["seance", 2500] }, to: "VT_co_nom" },
      { label: "« Lothaire. Elle parle de vous au passé. »", hide: { any: [{ not: LIBRE }, { not: { voile: "vt_co_lothaire" } }] }, fx: { ep: ["seance", 2500] }, to: "VT_co_lothaire" },
      { label: "« Tibère. Il est encore temps. Viens. »", hide: { any: [{ not: TIBERE_BANQUE }, { not: { voile: "vt_tibere_vendu" } }, { seen: "VT_tibere_retour" }] }, to: "VT_tibere_retour" },
      { label: "« Il ne tient plus. La Charte sera lue. »", to: "VT_co_rompt" },
    ] },

  VT_co_tient: { act: "V", title: "L'accord", place: "sorne",
    fx: { flag: ["vt:banque_reglee", "vt:pacte_tenu"], set: { or: "remonte" }, fac: { banque: 10 }, ep: ["seance", 2500] },
    text: [
      "Corisande Marrel hoche la tête, une seule fois. Elle a l'air moins soulagée que tu ne le croyais : plutôt fatiguée, comme quelqu'un qui a gagné une partie très longue et qui a mal au dos.",
      "« Mes gens hisseront l'or, dit-elle. *La Constance* attendra au pied de votre tour quand la mer sera haute. Pour la Charte, je vous laisse jusqu'en haut. Je préfère la brûler à l'air libre, devant témoins. On dira que la Banque n'a pas eu peur de la regarder. »",
      "Ses porteurs se mettent au travail, avec ses arbalétriers, en silence. Les coffres se remplissent de lingots, mieux et plus vite que tu ne l'aurais fait.",
      { with: "lison", text: "Lison te regarde. Elle ne dit rien. Elle se détourne et va s'asseoir sur les marches du trône, le dos tourné à la chaise à bras." },
      { with: "salome", text: "Salomé crache par terre, du côté de la chaise. Les porteurs regardent ailleurs." },
    ],
    choices: RETOUR },

  VT_co_rompt: { act: "V", title: "Les arbalètes", place: "sorne",
    fx: { unflag: "corisande:pacte", flag: "vt:pacte_rompu", fac: { banque: -15 } },
    text: [
      "Corisande Marrel ne s'étonne pas. Elle lève deux doigts, sans hâte. Sur les marches, les arbalétriers épaulent.",
      "« Je préfère le savoir ici que sur le sable, dit-elle. Je vous l'avais dit. » Elle se tourne vers ses porteurs. « Reculez-moi. »",
      { if: LIBRE, text: "Lothaire Brunel tire sa canne-épée, à regret, en soupirant, comme on enfile des bottes mouillées." },
    ],
    choices: [
      { label: "Te battre", big: true, fight: { title: "Les arbalétriers de Corisande", enemies: [{ id: "vt_arbaletrier", n: 3 }, { id: "vt_garde", n: 2 }],
        win: { fx: { flag: ["vt:banque_reglee", "vt:cori_vaincue"], ep: ["histoire", 3500] }, to: "VT_co_vaincue" },
        lose: { fx: { pv: -5, clock: { maree: 1 } }, to: "VT_be_defaite" } } },
    ] },

  VT_co_vaincue: { act: "V", title: "La chaise à bras", place: "sorne",
    text: [
      "Les arbalétriers ont jeté leurs armes, ou gisent sur les marches. Les porteurs se sont enfuis dans l'escalier. Corisande Marrel est restée seule dans sa chaise à bras, au milieu de la salle, les mains croisées sur son manteau de loutre.",
      "« Bien, dit-elle. Il me reste à remonter trois cents marches à pied. À mon âge. » Elle se lève, avec une lenteur calculée, et refuse ta main d'un geste. « Vous allez faire lire votre parchemin. Il y aura des procès pendant vingt ans. La Banque tombera, et avec elle la moitié des boutiques de la ville. Vous le savez ? »",
      "Elle s'en va vers l'escalier. Sur la première marche, elle s'arrête, sans se retourner. « Vous m'avez déçue, dit-elle. Moins que je ne le craignais. »",
    ],
    choices: RETOUR },

  VT_co_berold: { act: "V", title: "Bérold", place: "sorne",
    fx: { unflag: "corisande:pacte", flag: ["vt:banque_reglee", "vt:cori_berold"], fac: { banque: 5 } },
    text: [
      "Corisande Marrel ne bouge pas. Ses mains, sur la loutre, se serrent l'une sur l'autre jusqu'à ce que les bagues lui mordent les doigts. C'est la seule chose qui bouge.",
      "« Qui vous l'a dit ? » Tu ne réponds pas. Elle regarde ton oreille, longtemps. « Ah. Bien sûr. »",
      "Elle parle très bas, pour toi seul{e}. « Il a dix-sept ans. Il voulait être soldat. Le duc l'a pris aux cadets à l'automne, avec les fils de trois autres maisons. Nous avons tous fait semblant que c'était un honneur. Si le duc n'est pas payé à la Saint-Jean, il sera le premier à payer. »",
      "Tu lui dis ce que tu proposes. Une part de l'or pour Bérold, une part seulement, versée au duc par ta main et pour son nom à lui. La Charte, lue. La Banque, laissée à son sort.",
      "Elle réfléchit le temps de trois respirations. « Vous me prenez ma maison, et vous me rendez mon petit-fils, dit-elle. C'est un marché de chercheur de choses perdues. » Elle fait signe à ses arbalétriers de baisser leurs armes. « Je n'ai jamais aimé cette maison. »",
    ],
    choices: RETOUR },

  VT_co_nom: { act: "V", title: "Le couteau", place: "sorne",
    fx: { unflag: "corisande:pacte", flag: ["vt:banque_reglee", "vt:cori_nom"] },
    text: [
      "Corisande Marrel te regarde. Pour la première fois, elle a l'air d'une vieille femme dans une chaise trop grande.",
      "« Ma grand-mère le disait en riant, dit-elle. *Un Marrel tenait le couteau.* À table, aux fêtes, comme une bonne histoire. Je n'ai jamais pu rire. » Elle regarde le brasero qui fume à côté d'elle. « Je ne voulais pas que mon nom soit lu sur une place. C'est tout. La ville, Aveline, la Saint-Jean, c'était vrai aussi. Mais c'était ça d'abord. »",
      "Elle reste silencieuse un moment. « Faites lire votre parchemin, dit-elle enfin. Je ne vous en empêcherai pas. Je n'en ai plus la force, ce soir. »",
    ],
    choices: [
      { label: "« Le nom sera lu. Le vôtre n'y est pas. »", fx: { flag: "vt:cori_apaisee", fac: { banque: 5 } }, back: "VT_arrivee" },
      { label: "« Tous les noms seront lus. »", fx: { flag: "vt:cori_tous" }, back: "VT_arrivee" },
    ] },

  VT_co_lothaire: { act: "V", title: "Au passé", place: "sorne",
    fx: { unflag: "corisande:pacte", flag: ["vt:banque_reglee", "lothaire:allie", "vt:allie_regle", "vt:lothaire_tourne"], fac: { banque: -10 }, ep: ["histoire", 3000] },
    text: [
      "Lothaire Brunel ne répond pas tout de suite. Il regarde Corisande, qui regarde ailleurs. Il remet son cornet jumeau à l'oreille, et il l'écoute, elle, longtemps. Elle ne dit rien. Il n'en a pas besoin.",
      "« Oui, dit-il enfin, très doucement. Au passé. Le billet est déjà écrit, n'est-ce pas, Madame ? Dans votre écritoire, avec les autres. » Corisande se tait. Elle assume toujours ce qu'elle a fait ; c'est une de ses qualités.",
      "Lothaire traverse la mosaïque et vient se placer à côté de toi. Les arbalétriers se regardent : ils connaissent Lothaire depuis plus longtemps que leur paie. Un à un, ils désarment.",
      "Corisande soupire. « Vingt ans, dit-elle. Vous avez toujours eu le sens du moment, Brunel. » Elle fait signe à ses porteurs. « Remontez-moi. Il fait froid, ici. »",
    ],
    choices: RETOUR },
});

// ==================================================================== Aveline's soldiers, and the Keeper
Object.assign(P, {
  VT_av_entree: { act: "V", title: "Les cuirasses bleues", place: "sorne",
    fx: { clock: { maree: 1 } },
    text: [
      "Les soldats d'Aveline se rangent en ligne au pied de l'escalier, sur deux rangs, piques basses. Ils sont huit, et leur capitaine, un homme sec à la barbe grise taillée en pointe, qui porte une cuirasse rayée de cuivre. Deux d'entre eux posent leur tonneau sur la mosaïque avec précaution.",
      "Le capitaine regarde l'or sans ciller. Il cherche des yeux le lutrin, puis toi. « Au nom du duc d'Aveline, seigneur légitime du delta par le droit de la reine Ysaure, dit-il dans un salvézan rocailleux. Remettez-moi la Charte. Le duc {{oreille#vt_av_ordre|vous laissera repartir avec votre vie et un peu d'or|m'a ordonné de ne laisser remonter personne qui l'aurait vue, et de faire le feu sur la tour quand je la tiendrai}}. »",
      "Le tonneau {{pie#vt_av_tonneau|est un tonneau de vin pour la troupe, cerclé de fer|est plein d'huile de baleine et de poix, une mèche soufrée sort de la bonde : de quoi faire en haut d'une tour un feu qu'on verra de Salvèze}}.",
      { if: { has: "vn:aveline_doute" }, text: "Au second rang, tu reconnais le jeune lieutenant blond de la place. Il te reconnaît aussi. « Mon capitaine, dit-il sans te quitter des yeux, {{oreille#vt_av_lieut|nous sommes à vos ordres|il y a des gens de chez nous à Salvèze, et moi une fiancée rue des Tanneurs, et je ne veux pas qu'on brûle la ville où elle coud}}. »" },
      { if: { has: "vn:aveline_aube" }, text: "Tu sais ce que veut dire ce tonneau : la flotte du duc attend au large, et elle remontera vers Salvèze à l'aube, au signal." },
      { if: { has: "vn:chaloupes" }, text: "Leurs chaloupes, tu le sais, sont parties avec la mer. Eux ne le savent peut-être pas encore." },
      { with: "tibere", text: "Tibère regarde les soldats comme il regardait les recrues du Guet, autrefois : en comptant les boucles mal serrées et les bottes qui prennent l'eau." },
    ],
    choices: [
      { label: "Percer le tonneau, et laisser l'huile couler dans les rigoles", hide: { not: { voile: "vt_av_tonneau" } }, test: { dom: "discretion", diff: -10, label: "Saboter le feu du duc sous le nez de huit soldats", help: [{ with: "fauvette", v: 20 }, { with: "lison", v: 10 }] },
        win: { fx: { ep: ["seance", 2500] }, to: "VT_av_tonneau" }, lose: { to: "VT_av_combat" } },
      { label: "« Lieutenant. Votre fiancée coud rue des Tanneurs. Le feu partira de cette tour. »", hide: { not: { voile: "vt_av_lieut" } }, fx: { ep: ["histoire", 3000] }, to: "VT_av_lieutenant" },
      { label: "« Vos chaloupes sont parties. Sans nous, vous mourrez ici. »", hide: { not: { has: "vn:chaloupes" } }, fx: { ep: ["seance", 2500] }, to: "VT_av_treve" },
      { label: "« Votre capitaine a ordre de ne laisser remonter personne. Vous non plus, peut-être. »", hide: { not: { voile: "vt_av_ordre" } }, test: { dom: "social", diff: -10, label: "Semer le doute dans les rangs d'Aveline", help: [{ with: "tibere", v: 15 }, { if: { has: "metier:parole" }, v: 10 }] },
        win: { to: "VT_av_treve" }, lose: { to: "VT_av_combat" } },
      { label: "Laisse-moi faire", who: "tibere", hide: { voile: "vt_av_ordre" }, test: { dom: "social", diff: -20, label: "Tibère parle aux soldats comme un sergent", help: [{ if: { has: "vn:aveline_doute" }, v: 10 }] },
        win: { fx: { conf: { tibere: 5 } }, to: "VT_av_treve" }, lose: { to: "VT_av_combat" } },
      { label: "Te battre", to: "VT_av_combat" },
    ] },

  VT_av_combat: { act: "V", title: "Les piques", place: "sorne",
    text: [
      "Le capitaine dégaine. « En ligne », dit-il, et les piques s'abaissent toutes ensemble, au même angle, avec un bruit de bois sec. Ils avancent sur la mosaïque au pas, sans se presser. Ils ont fait ça cent fois, sur des champs plus grands que celui-ci.",
      { with: "salome", text: "Salomé jure entre ses dents. « Des piques, dans une salle. Il faut passer dessous. »" },
    ],
    choices: [
      { label: "Te battre", big: true, fight: { title: "Les soldats d'Aveline", enemies: [{ id: "vt_capitaine", n: 1 }, { id: "vt_soldat", n: 3 }],
        win: { fx: { flag: ["vt:aveline_reglee", "vt:signal_empeche", "vt:aveline_vaincus"], ep: ["histoire", 4000] }, to: "VT_av_vaincus" },
        lose: { fx: { pv: -5, clock: { maree: 1 } }, to: "VT_av_defaite" } } },
    ] },

  VT_av_vaincus: { act: "V", title: "La cuirasse rayée de cuivre", place: "sorne",
    text: [
      "Le capitaine est assis contre le pied du lutrin, son épée cassée en travers des genoux. Ses soldats ont lâché leurs piques. Le tonneau a roulé dans un coin, renversé, et l'huile de baleine s'écoule par la bonde dans les rigoles de la mosaïque, noire et luisante, jusqu'au conduit.",
      "« Le duc fera le feu ailleurs, dit le capitaine. Sur une autre tour. Il a le temps. » Il crache un peu de sang. « Moi, je ne l'ai plus. »",
      { if: { has: "vn:aveline_doute" }, text: "Le jeune lieutenant blond aide son capitaine à se relever, sans te regarder. En passant devant toi, il dit très bas : « Merci. » Tu ne sais pas de quoi." },
      "Les soldats d'Aveline remontent l'escalier de la colline, lentement, en portant leurs blessés.",
    ],
    choices: RETOUR },

  VT_av_tonneau: { act: "V", title: "L'huile dans les rigoles", place: "sorne",
    fx: { flag: ["vt:aveline_reglee", "vt:signal_empeche"] },
    text: [
      { with: "fauvette", text: "Fauvette s'est faufilée derrière le second rang pendant que le capitaine parlait. Un coup de rasoir dans le cercle de fer, un coup de pointe dans la douve, et l'huile se met à couler sur la mosaïque en filet noir. Elle est déjà revenue à côté de toi quand le premier soldat le remarque." },
      { without: "fauvette", text: "Tu fais un pas de côté, un seul, comme pour t'écarter des piques, et tu enfonces ta lame dans la douve du tonneau, au ras du fond. L'huile se met à couler sur la mosaïque en filet noir." },
      "L'huile suit les rigoles, comme les Taiseurs l'ont voulu pour l'eau, et file vers le conduit. Le capitaine la regarde partir. Il ne dit rien pendant longtemps.",
      "« Bien, dit-il enfin. Il n'y aura pas de feu sur votre tour. » Il range son épée. « Je ne me bats pas pour une Charte quand je n'ai plus de quoi l'annoncer. Le duc me fera pendre, ou il me donnera une autre compagnie. Il hésite toujours entre les deux. »",
      "Les soldats d'Aveline remontent l'escalier en bon ordre, sans tonneau.",
    ],
    choices: RETOUR },

  VT_av_lieutenant: { act: "V", title: "La rue des Tanneurs", place: "sorne",
    fx: { flag: ["vt:aveline_reglee", "vt:signal_empeche", "vt:lieutenant"] },
    text: [
      "Le jeune lieutenant devient tout rouge. Il regarde son capitaine, puis toi, puis ses hommes. « Elle s'appelle Aveline, dit-il, absurde. Comme le duché. Elle trouvait ça drôle. » Il ôte son casque.",
      "« Mon capitaine, je ne porterai pas ce tonneau en haut de la tour. » Il le dit d'une voix qui tremble, et il le répète d'une voix qui ne tremble plus. Deux soldats du second rang posent leur pique contre le mur. Puis un troisième.",
      "Le capitaine regarde ses hommes. Il compte. Il fait toujours ses comptes, c'est son métier. « Lieutenant, dit-il enfin, vous serez pendu. » Il soupire. « Moi aussi, probablement. » Il fait signe de laisser le tonneau là où il est.",
      "Ils remontent l'escalier sans lui. Le tonneau reste au milieu de la mosaïque, seul, avec sa mèche qui pend.",
    ],
    choices: RETOUR },

  VT_av_treve: { act: "V", title: "La trêve", place: "sorne",
    fx: { flag: ["vt:aveline_reglee", "vt:signal_empeche", "vt:aveline_treve"], ep: ["seance", 2000] },
    text: [
      "Les soldats se regardent. Le capitaine sent sa troupe lui glisser entre les doigts, et il le sent bien avant de le voir : c'est un vieux soldat.",
      { if: { has: "vn:chaloupes" }, text: "« Parties ? » Un soldat du second rang se retourne vers l'escalier, comme s'il pouvait voir la mer de là. « Les chaloupes sont parties, mon capitaine. » Le silence lui répond. Les piques se relèvent, une par une." },
      { with: "tibere", text: "Tibère s'adresse au second rang, comme à des recrues un jour de paie. « Vous êtes payés à la pièce ou à la semaine ? À la semaine. Bon. Alors personne ne vous paiera double pour mourir ici. »" },
      "Tu leur proposes une place à bord, pour remonter avec la mer, contre le tonneau et leurs armes. Le capitaine réfléchit longtemps. « Le tonneau, dit-il enfin. Gardez-le. Il n'y aura pas de feu ce matin. Le duc attendra, il sait attendre. »",
      "Les soldats d'Aveline s'assoient contre le mur, les piques couchées, et ils regardent l'or avec des yeux d'enfants pauvres. Aucun n'y touche.",
    ],
    choices: RETOUR },

  VT_av_defaite: { act: "V", title: "Le feu du duc", place: "sorne",
    fx: { flag: ["vt:aveline_reglee", "vt:aveline_gagne"] },
    text: [
      "Tu te retrouves au sol, une pique en travers de la poitrine, pas enfoncée, posée là pour te tenir. Le capitaine se penche.",
      { if: CHARTE, text: "Il prend la Charte dans ta toile cirée, la regarde à peine, et la glisse sous sa cuirasse. « Le duc vous remercie », dit-il." },
      { if: { not: CHARTE }, text: "Il fait briser la cloche du lutrin et prend la Charte sur son plateau. Un grondement monte sous la mosaïque. Il la glisse sous sa cuirasse sans la regarder." },
      "« Le feu, dit-il à ses hommes. En haut de la tour, avant l'aube. » Deux soldats reprennent le tonneau sur sa perche, et la troupe disparaît dans l'escalier du dôme, vers la tour de la Reine, en courant.",
      "Ils t'ont laissé{e} en vie. Ils sont pressés. Le jour se lève dans deux heures, et le duc attend son feu.",
    ],
    choices: [
      { label: "Te relever", hide: { not: CHARTE }, fx: { relicLose: "f_sorne", flag: ["vt:charte_perdue", "vt:charte_aveline"] }, back: "VT_arrivee" },
      { label: "Te relever", hide: CHARTE, fx: { flag: ["vt:charte_perdue", "vt:charte_aveline"] }, back: "VT_arrivee" },
    ] },

  VT_gi_gardien: { act: "V", title: "Le Gardien", place: "sorne",
    fx: { clock: { maree: 1 } },
    text: [
      "La silhouette en bure grise traverse la salle sans regarder l'or. Elle s'arrête à trois pas de toi et rabat son capuchon. Frère Gildas. Il a maigri. À la racine des cheveux, la cicatrice est blanche, nette, et il ne la cache plus.",
      "« Je suis venu par le chemin des Taiseurs, dit-il. Celui des égouts de la reine, sous le port. Je le connaissais. Je ne l'avais jamais pris. » Il regarde le lutrin, puis toi. « Tu m'as chassé, et tu as eu raison. Je suis ici pour autre chose que toi. Je suis le Gardien, et le Gardien est là pour que la Charte retourne à la mer si ceux qui la prennent n'en sont pas dignes. »",
      "L'escalier, derrière lui, {{echo#vt_gi_escalier|ruisselle de l'eau qu'il a apportée sur sa bure|garde les pas de cet homme, il y a un instant, et sa voix basse sur chaque marche : « Odeline. Odeline. Odeline »}}.",
      "Tu {{miroir#vt_gi_gardien_miroir|le regardes avec une sorte de calme, qui te surprend|as envie qu'il se batte, pour avoir une raison de le frapper, et tu as honte de cette envie}}.",
      { with: "lison", text: "Lison s'est placée entre vous deux, à demi. « Le Gardien, dit-elle. Ma grand-mère disait que s'il venait, c'est que nous avions déjà perdu. »" },
    ],
    choices: [
      { label: "Lui répéter ce que la reine a demandé, mot pour mot", hide: { not: { voile: "vt_demande" } }, fx: { ep: ["histoire", 3500] }, to: "VT_gi_cede" },
      { label: "Lui répondre en double parole, comme un Taiseur à un autre", hide: { not: { has: "taiseurs:serment" } }, fx: { ep: ["seance", 2500] }, to: "VT_gi_cede" },
      { label: "« La Charte sera lue. Après, elle sera à qui voudra. »", test: { dom: "social", diff: -20, label: "Convaincre le Gardien", help: [{ if: { has: "gildas:demasque" }, v: 10 }, { if: { voile: "vt_lettre_deux" }, v: 15 }, { with: "lison", v: 10 }] },
        win: { to: "VT_gi_cede" }, lose: { to: "VT_gi_combat" } },
      { label: "Lui tendre la Charte, pour qu'il la rende à la mer", hide: { not: CHARTE }, to: "VT_gi_part" },
      { label: "Te battre contre lui", to: "VT_gi_combat" },
    ] },

  VT_gi_combat: { act: "V", title: "Le bâton ferré", place: "sorne",
    text: [
      "Gildas défait la cordelette à sept nœuds de sa ceinture, l'enroule sur son poing, et prend son bâton ferré à deux mains, à la façon des frères convers qui gardent les troupeaux du Mont contre les loups. « Je ne te ferai pas de mal si je peux l'éviter, dit-il. Je l'ai déjà dit une fois à quelqu'un. »",
    ],
    choices: [
      { label: "Te battre", big: true, fight: { title: "Le Gardien des Taiseurs", enemies: [{ id: "vt_gardien", n: 1 }], spare: true,
        win: { fx: { flag: ["vt:gardien_regle", "vt:gardien_vaincu"], ep: ["histoire", 3000] }, to: "VT_gi_vaincu" },
        lose: { fx: { pv: -4 }, to: "VT_gi_defaite" },
        calm: { to: "VT_gi_cede" } } },
    ] },

  VT_gi_cede: { act: "V", title: "Le dernier", place: "sorne",
    fx: { flag: ["vt:gardien_regle", "vt:gardien_cede"], fac: { taiseurs: 5, moines: 5 } },
    text: [
      "Gildas t'écoute jusqu'au bout. Puis il baisse la tête, et il reste ainsi, longtemps, les mains ouvertes le long du corps.",
      { if: { voile: "vt_demande" }, text: "« *Qu'il sache le jour où il faut le rompre*, dit-il. Elle a dit ça ? » Tu hoches la tête. Il ferme les yeux. « Trente ans que je garde le silence pour elle. Et elle, elle voulait qu'on parle. »" },
      { if: { has: "taiseurs:serment" }, text: "Il entend ta double parole, et ce qu'il y a sous elle. Un Taiseur à un Taiseur : il ne peut plus te traiter en étranger. « Tu as le droit, dit-il. Tu as le serment. La Charte est à toi autant qu'à moi. »" },
      "Il s'agenouille sur la mosaïque, face au trône, et il parle, cette fois, à voix haute, sans tourner ses phrases. « J'ai tué Odeline Carrus. Je ne le voulais pas. Elle m'a frappé, je l'ai repoussée, elle est tombée. Je suis le Gardien des Taiseurs, et le dernier, si Dieu le veut. » Il le dit d'une traite, et il se tait.",
    ],
    choices: [
      { label: "« Viens. Remonte avec nous. »", fx: { join: "gildas", unflag: "gildas:chasse", flag: "vt:gildas_revenu", conf: { gildas: 15 } }, back: "VT_arrivee" },
      { label: "« Va. Tu as fait ton travail. »", fx: { flag: "vt:gildas_va" }, back: "VT_arrivee" },
    ] },

  VT_gi_part: { act: "V", title: "La Charte au Gardien", place: "sorne",
    fx: { relicLose: "f_sorne", flag: ["vt:gardien_regle", "vt:charte_perdue", "vt:charte_mer"], fac: { taiseurs: 15 }, ep: ["seance", 2000] },
    text: [
      "Tu lui tends la Charte. Gildas la prend à deux mains, comme on prend un enfant qu'on vous confie, et il la regarde longtemps sans l'ouvrir.",
      "« Tu sais ce que tu fais ? » demande-t-il. Tu hoches la tête. Tu n'en es pas sûr{e}. Il le voit, et il hoche la tête aussi.",
      "Il la glisse contre sa poitrine, sous sa bure, à l'endroit où l'on garde les lettres. « Elle retournera à la mer, dit-il, sur l'écueil où le phare de l'Ouïe écoute. Elle y dormira, entière. » Il remet son capuchon. « Que Dieu te garde. Je ne le mérite pas, mais toi, peut-être. »",
      "Il s'en va par où il est venu.",
      { with: "lison", text: "Lison le regarde partir. « Ma grand-mère serait d'accord avec toi, dit-elle. Moi, je ne sais pas. »" },
    ],
    choices: [{ back: "VT_arrivee" }] },

  VT_gi_vaincu: { act: "V", title: "La cordelette à sept nœuds", place: "sorne",
    text: [
      "Gildas est à genoux, son bâton à trois pas de lui. Il a du sang au coin de la bouche. Il ne se relève pas. Il te regarde, et il attend, sans peur, la suite.",
      "« Je savais que tu étais plus fort{e}, dit-il. Je voulais en être sûr. » Il ramasse sa cordelette, la renoue à sa ceinture, nœud après nœud, avec soin. « Le Gardien s'est battu. Le Gardien a perdu. La Charte est à celui qui l'a gagnée : c'est la règle d'Aymeric. »",
      "Il se lève et s'en va vers l'escalier, en s'appuyant au mur.",
    ],
    choices: RETOUR },

  VT_gi_defaite: { act: "V", title: "Le Gardien et la Charte", place: "sorne",
    fx: { flag: ["vt:gardien_regle", "vt:charte_perdue", "vt:charte_mer"] },
    text: [
      "Le bâton ferré t'a fauché les jambes. Tu es à terre. Gildas se tient au-dessus de toi, essoufflé, et il ne frappe pas.",
      { if: CHARTE, text: "Il se penche et prend la Charte dans ta toile cirée. Il le fait doucement, en s'excusant presque." },
      { if: { not: CHARTE }, text: "Il va au lutrin et soulève la cloche d'une seule main, en chantant une note très basse. L'anneau de plomb se fend. Il prend la Charte et pose à sa place, sur le plateau, son propre bréviaire, au poids." },
      "« Elle retournera à la mer, dit-il. Elle y dormira, entière. C'est tout ce que je peux faire pour elle, et pour toi. » Il s'en va par où il est venu, sans courir.",
    ],
    choices: [
      { label: "Te relever", hide: { not: CHARTE }, fx: { relicLose: "f_sorne" }, back: "VT_arrivee" },
      { label: "Te relever", hide: CHARTE, back: "VT_arrivee" },
    ] },
});

// ==================================================================== the sea comes back, the climb, the tower
var LIE = { all: [{ has: "vt:lothaire_lie" }, { not: { seen: "VT_lo_banc" } }] };
var SANS_OR_POSSIBLE = { any: [{ has: "taiseurs:serment" }, CORI, { all: [CHARTE, { relics: { min: 5 } }, { has: "prevot:dejoue" }] }] };
var SIGNAL = { all: [{ not: { has: "prevot:dejoue" } }, { not: { has: "vt:signal_empeche" } }, { any: [AVELINE_ICI, { has: "vt:charte_aveline" }] }] };
Object.assign(P, {
  VT_flot: { act: "V", title: "La mer dans la salle", place: "sorne",
    fx: { flag: "vt:flot" },
    text: [
      "La mer arrive par l'escalier de la colline avec un bruit de foule. Elle a franchi la porte verte, couvert le seuil, et elle s'étale sur la mosaïque en nappe brune qui monte à vue d'œil. Les tas d'or du devant s'effondrent un à un dans l'eau, avec un bruit de grêle.",
      { if: { not: { has: "vt:banque_reglee" } }, text: "Les gens de la Banque, au pied de l'escalier, ont fait demi-tour en voyant l'eau. Tu les entends remonter en jurant, en se bousculant, et l'un d'eux tombe, et les autres l'enjambent." },
      { if: { all: [AVELINE_ICI, { not: { has: "vt:aveline_reglee" } }] }, text: "Les soldats d'Aveline, eux, ont tenu leur cap. Ils ont traversé la salle au pas de course, leur tonneau sur sa perche, et ils se sont engouffrés dans l'escalier du dôme, vers la tour. Le capitaine a crié un ordre que tu as compris sans connaître la langue : *le feu*." },
      { if: { all: [GARDIEN, { not: { has: "vt:gardien_regle" } }] }, text: "La silhouette en bure grise a disparu dans l'escalier de la colline, contre le flot, comme on remonte un torrent." },
      { with: "salome", text: "Salomé t'empoigne par le col. « En haut, dit-elle. Tout de suite. Le reste, c'est de la vase. »" },
      { with: "fauvette", text: "Fauvette a déjà grimpé sur une marche du trône. Elle a les poches pleines, et un regard de chat sur une poutre." },
      "Tu {{miroir#vt_flot_miroir|cherches des yeux ce que tu pourrais encore sauver|cherches des yeux une raison de rester, parce que remonter veut dire choisir, et que tu as peur de choisir}}.",
    ],
    choices: [
      { label: "Fermer la porte verte contre le flot, le temps de monter", hide: { has: "vt:porte_tenue" }, to: "VT_porte_eaux" },
      { label: "Courir à l'escalier du dôme", big: true, to: "VT_puits" },
      { label: "Un dernier coffre, là, au pied du trône", to: "VT_rester" },
    ] },

  VT_rester: { act: "V", title: "Encore un", place: "sorne",
    text: [
      "Tu redescends les marches du trône, dans l'eau jusqu'aux genoux, puis aux cuisses. Le coffre est là, à trois pas, à demi couvert. Tu l'empoignes par une poignée de fer. Il ne bouge pas. Le courant te fait tourner sur toi-même, et ton pied glisse sur une pièce.",
      "L'eau est à ta taille. Elle tire. Le dôme, au-dessus, a pris la couleur de l'eau qu'il a sur le dos.",
      { with: "any", text: "Quelqu'un crie ton nom depuis l'escalier du dôme. Une fois, deux fois, plus fort, avec une voix que tu ne lui connaissais pas." },
      { without: "any", text: "Il n'y a que l'eau, qui parle pour tout le monde." },
      "Le coffre ou l'escalier. Tu n'auras pas le temps des deux.",
    ],
    choices: [
      { label: "Lâcher le coffre et nager vers l'escalier du dôme", big: true, fx: { pv: -3 }, to: "VT_puits" },
      { label: "Prendre ton souffle, et tirer le coffre sous l'eau", to: "VF_noyade" },
    ] },

  VT_puits: { act: "V", title: "L'escalier du dôme", place: "sorne",
    text: [
      "L'escalier du dôme tourne dans l'épaisseur du mur, étroit, éclairé de loin en loin par une meurtrière où passe une lumière verte, puis grise, puis rose. Il monte plus haut que la salle, plus haut que la colline, dans le fût de la tour de la Reine qui domine Sorne. Tu comptes les marches jusqu'à deux cents, puis tu arrêtes de compter.",
      { if: MER, text: "Sous tes pieds, l'eau monte dans l'escalier derrière toi, marche après marche, sans se presser. Elle s'arrête quelque part vers la cent-cinquantième. Les Taiseurs avaient mesuré." },
      { if: { all: [{ is: { or: "remonte" } }, { has: "vt:corde_doublee" }] }, text: "Le treuil grince à chaque tour de manivelle. Les coffres de lingots montent dans le puits central, un à un, au bout de leur corde doublée, et la corde tient." },
      { if: { all: [{ is: { or: "remonte" } }, CORI, { has: "vt:pacte_tenu" }] }, text: "Les porteurs de Corisande tournent le treuil à quatre, sans un mot, comme on tourne une meule." },
      { with: "tibere", text: "Tibère monte derrière toi en soufflant, une main sur le mur. « Deux cents marches, dit-il. Au Guet, on me faisait monter au Beffroi pour punition. Je n'aurais jamais cru le regretter. »" },
      { if: { has: "vt:lothaire_delie" }, text: "Lothaire Brunel monte devant toi, les poignets encore liés, sans un mot. De temps en temps, il s'arrête pour souffler, et il repart avant que tu le pousses." },
    ],
    choices: [
      { label: "Lothaire, lié sur le banc des secrétaires", big: true, hide: { not: LIE }, to: "VT_lo_banc" },
      { label: "Hisser les coffres de lingots par le puits", hide: { any: [LIE, { not: { is: { or: "remonte" } } }, { has: "vt:corde_doublee" }, { has: "vt:pacte_tenu" }] }, to: "VT_puits_chute" },
      { label: "Monter, une besace de lingots à l'épaule", big: true, hide: { any: [LIE, { not: { is: { or: null } } }] }, fx: { set: { or: "partie" } }, to: "VT_tour" },
      { label: "Monter les mains vides", hide: { any: [LIE, { not: { is: { or: null } } }, { not: SANS_OR_POSSIBLE }] }, to: "VT_tour" },
      { label: "Monter jusqu'au sommet de la tour", big: true, hide: { any: [LIE, { is: { or: null } }, { all: [{ is: { or: "remonte" } }, { not: { has: "vt:corde_doublee" } }, { not: { has: "vt:pacte_tenu" } }] }] }, to: "VT_tour" },
    ] },

  VT_puits_chute: { act: "V", title: "La corde", place: "sorne",
    fx: { set: { or: "partie" } },
    text: [
      "Le premier coffre monte. Le deuxième monte. Au troisième, à mi-hauteur du puits, la corde fait un bruit de toile qu'on déchire, et tu vois la gaine de cuir s'ouvrir sur un cœur de chanvre noir, pourri, qui part en filaments.",
      "Le coffre tombe. Il heurte la paroi, rebondit, et disparaît dans l'eau de la salle avec un bruit sourd. Une gerbe d'eau remonte le puits et retombe en pluie sur vos têtes, salée, mêlée de poussière d'or.",
      { with: "salome", text: "Salomé se penche au-dessus du puits, longtemps, pour voir. Puis elle se redresse. « On en a deux, dit-elle. C'est déjà plus que ce que la mer rend d'habitude. »" },
      { with: "tibere", text: "Tibère regarde la corde cassée dans ses mains. « Un tiers de la dette du duc, dit-il. Au fond de l'eau. » Il jette la corde dans le puits, avec une sorte de respect." },
      "Deux coffres sur trois. Ce qui est remonté sera assez pour une fortune, et trop peu pour une république.",
    ],
    choices: [
      { label: "Laisse-moi faire", who: "salome", fx: { conf: { salome: 10 } }, to: "VT_salome_plonge" },
      { label: "Monter jusqu'au sommet de la tour", big: true, to: "VT_tour" },
    ] },

  VT_tour: { act: "V", title: "La tour de la Reine", place: "sorne", hub: true, backName: "le sommet de la tour",
    fx: { ep: ["histoire", 4000] },
    text: [
      { first: true, text: "Tu débouches au sommet de la tour par une trappe de bronze. Le jour se lève. Sorne a disparu : la mer couvre tout, grise et lisse, du rempart aux collines. Seules dépassent la flèche cassée de la cathédrale, la tête de quelques statues sur la chaussée des Muets, et cette tour où tu te tiens, au milieu de l'eau. Le vent sent le sel et la pluie qui vient." },
      { first: true, text: "La plate-forme est ronde, bordée d'un parapet bas. Au centre, un trépied de fer rouillé, où les gardes de la reine allumaient un feu les nuits de tempête. Au nord, très loin, une ligne de roseaux, et plus loin encore, la fumée de Salvèze qui monte droite dans le matin." },
      { again: true, text: "Le sommet de la tour, le parapet, la mer autour. Le jour monte." },
      { if: { has: "basse:bateau" }, text: "Au pied de la tour, ton bateau tire sur son ancre. Quelqu'un à bord agite un bras." },
      { if: { has: "basse:taiseurs" }, text: "La barque des Taiseurs dérive à cinquante brasses, sans rames. L'Aîné est debout, les yeux levés vers toi." },
      { if: { any: [CORI, { has: "vt:pacte_tenu" }] }, text: "*La Constance* est mouillée à l'est de la tour, ses trente avirons levés. Corisande Marrel est assise sous le tendelet de poupe. Elle attend." },
      { if: { has: "vt:charte_lothaire" }, text: "Sur la chaussée des Muets, la mer a rattrapé Lothaire Brunel. Il s'est hissé sur les épaules de la quatrième statue, celle qui tient un livre de pierre, et il y tient, trempé, une toile cirée serrée contre sa poitrine. La mer lui monte aux genoux." },
      { if: { all: [{ not: { has: "prevot:dejoue" } }] }, text: "À l'ouest, les trois hautes coques d'Aveline sont mouillées au large, voiles carguées. Elles attendent un signal." },
      { if: SIGNAL, text: "Au bord du parapet, côté nord, les soldats d'Aveline ont dressé leur tonneau sur le trépied. Le capitaine bat le briquet. La mèche soufrée fume déjà." },
      { if: { is: { or: "remonte" } }, text: "Les coffres de lingots sont alignés contre le parapet, sous une toile. On les descendra dans le bateau à la corde, quand il le faudra." },
      { if: { is: { or: "partie" } }, text: "Ce que tu as remonté d'or tient dans des besaces, posées contre le parapet, mouillées." },
      { if: { has: "gildas:mort" }, text: "Tu as encore sa bure pliée sur ton bras. Tu ne sais pas quoi en faire." },
      { if: { has: "vt:flot" }, text: "L'eau de la salle t'a trempé{e} jusqu'à la taille. Le vent du matin te glace, et tu claques des dents en regardant la mer." },
      { if: { has: "vt:salome_coffre" }, with: "salome", text: "Le dernier coffre, celui que Salomé a remonté du fond du puits, est encore couvert de vase. Elle s'est assise dessus, enroulée dans une couverture, une main à plat sur le couvercle." },
      { if: { has: "vt:gildas_revenu" }, with: "gildas", text: "Frère Gildas se tient contre le parapet, un peu à l'écart, sa bure trempée collée aux jambes. Il est remonté avec vous, cette fois." },
      { if: { has: "vt:gildas_va" }, text: "Frère Gildas est reparti par les égouts de la reine, seul, comme il était venu. Tu te demandes où ils débouchent, et s'il y est arrivé." },
      { if: { has: "vt:gardien_vaincu" }, text: "Ton bras garde le souvenir du bâton ferré de Frère Gildas. La douleur monte de l'épaule au poignet chaque fois que tu serres le poing." },
    ],
    choices: [
      { label: "Les soldats d'Aveline, au bord du parapet", big: true, hide: { any: [{ not: SIGNAL }, { seen: "VT_signal" }] }, to: "VT_signal" },
      { label: "Aller chercher Lothaire sur sa statue", hide: { any: [{ not: { has: "vt:charte_lothaire" } }, { seen: "VT_rattrape" }, SIGNAL] }, if: { any: [{ has: "basse:bateau" }, { has: "basse:equipage" }, { has: "basse:taiseurs" }, { present: "salome" }] }, why: "Il faudrait un bateau au pied de la tour.", to: "VT_rattrape" },
      { label: "Corisande Marrel te fait signe depuis sa galère", hide: { any: [{ not: { has: "vt:pacte_tenu" } }, { not: CORI }, { seen: "VT_co_tour" }, SIGNAL] }, to: "VT_co_tour" },
      { label: "Lire la Charte à voix haute, face à la mer et aux bateaux", hide: { any: [{ not: CHARTE }, { seen: "VT_lecture" }, SIGNAL] }, to: "VT_lecture" },
      { label: "Demander à Tibère ce qu'il veut, de tout ça", hide: { any: [{ not: { present: "tibere" } }, { seen: "VT_avis_tibere" }, SIGNAL] }, to: "VT_avis_tibere" },
      { label: "Demander à Lison ce qu'elle veut", hide: { any: [{ not: { present: "lison" } }, { seen: "VT_avis_lison" }, SIGNAL] }, to: "VT_avis_lison" },
      { label: "Demander à Salomé ce qu'elle veut", hide: { any: [{ not: { present: "salome" } }, { seen: "VT_avis_salome" }, SIGNAL] }, to: "VT_avis_salome" },
      { label: "Demander à Fauvette ce qu'elle veut", hide: { any: [{ not: { present: "fauvette" } }, { seen: "VT_avis_fauvette" }, SIGNAL] }, to: "VT_avis_fauvette" },
      { label: "Demander à Frère Gildas ce qu'il veut", hide: { any: [{ not: { present: "gildas" } }, { seen: "VT_avis_gildas" }, SIGNAL] }, to: "VT_avis_gildas" },
      { label: "Demander à Lothaire Brunel ce qu'il veut", hide: { any: [{ not: { has: "lothaire:allie" } }, { seen: "VT_avis_lothaire" }, SIGNAL] }, to: "VT_avis_lothaire" },
      { label: "Faire signe à l'Aîné des Taiseurs", hide: { any: [{ not: { has: "basse:taiseurs" } }, { seen: "VT_avis_aine" }, SIGNAL] }, to: "VT_avis_aine" },
      { label: "Décider de ce que tu fais de tout ça", big: true, hide: SIGNAL, to: "VT_choix" },
    ] },

  VT_signal: { act: "V", title: "Le feu du duc", place: "sorne",
    text: [
      "Le capitaine d'Aveline te voit sortir de la trappe. Il ne lâche pas son briquet. Ses soldats se placent entre toi et le trépied, piques basses, au bord du vide.",
      { if: { has: "vt:charte_aveline" }, text: "Sous sa cuirasse, un coin de toile cirée dépasse : la Charte." },
      "« Trop tard, dit-il. Le feu, la flotte, la porte des Sauniers. Le prévôt attend ce feu depuis un mois. » Il frappe le briquet. Une étincelle. Une autre. La mèche grésille.",
      "Le tonneau {{pie#vt_signal_tonneau|est dressé sur le trépied, bien calé|est dressé sur le trépied, mais un pied du trépied est rongé par la rouille jusqu'au fil : un coup d'épaule le ferait basculer par-dessus le parapet}}.",
      { if: { has: "vn:aveline_doute" }, text: "Le jeune lieutenant blond tient la lanterne pour son capitaine. Sa main tremble, et la lanterne avec." },
      { with: "salome", text: "Salomé regarde les trois coques au large, puis le trépied, puis toi. « Je connais les signaux de mer d'Aveline, dit-elle vite. Un feu, c'est *venez*. Deux feux, c'est *danger, restez au large*. »" },
    ],
    choices: [
      { label: "Basculer le trépied d'un coup d'épaule", hide: { not: { voile: "vt_signal_tonneau" } }, test: { dom: "combat", diff: 0, label: "Passer les piques et pousser le trépied", help: [{ with: "tibere", v: 15 }, { with: "fauvette", v: 10 }] },
        win: { fx: { ep: ["histoire", 3000] }, to: "VT_signal_eteint" }, lose: { fx: { pv: -5 }, to: "VT_ville_prise" } },
      { label: "Laisse-moi faire", who: "salome", test: { dom: "nature", diff: -10, label: "Allumer un second feu, pour dire à la flotte de rester au large", help: [{ if: { has: "basse:bateau" }, v: 10 }] },
        win: { fx: { conf: { salome: 10 }, flag: "vt:double_feu", ep: ["histoire", 3000] }, to: "VT_signal_eteint" }, lose: { to: "VT_ville_prise" } },
      { label: "« Lieutenant. La rue des Tanneurs. »", hide: { not: { voile: "vt_av_lieut" } }, fx: { ep: ["histoire", 3000] }, to: "VT_signal_eteint" },
      { label: "Te jeter sur eux avant que la mèche prenne", fight: { title: "Le feu du duc", enemies: [{ id: "vt_capitaine", n: 1 }, { id: "vt_soldat", n: 2 }],
        win: { fx: { ep: ["histoire", 3500] }, to: "VT_signal_eteint" }, lose: { fx: { pv: -5 }, to: "VT_ville_prise" } } },
    ] },

  VT_signal_eteint: { act: "V", title: "Pas de feu", place: "sorne",
    fx: { flag: ["vt:signal_empeche", "vt:aveline_reglee"] },
    text: [
      { if: { has: "vt:double_feu" }, text: "Salomé a allumé un second feu à l'autre bout du parapet, avec de l'étoupe et l'huile du tonneau, et elle l'entretient à coups de manteau. Deux feux, sur la tour de la Reine. Au large, les trois coques d'Aveline restent où elles sont. Puis l'une d'elles vire de bord, lentement, vers le nord." },
      { if: { not: { has: "vt:double_feu" } }, text: "Le tonneau bascule par-dessus le parapet, la mèche allumée, et tombe dans la mer avec un bruit sourd, très loin en bas. Une fumée blanche, une odeur de soufre, et plus rien. Au large, les trois coques d'Aveline attendent un feu qui ne vient pas." },
      { if: { voile: "vt_av_lieut" }, text: "Le jeune lieutenant a soufflé la mèche entre ses doigts. Il regarde ses doigts brûlés, puis son capitaine, sans rien dire." },
      "Le capitaine d'Aveline range son briquet. Il a l'air d'un homme qui vient de perdre une partie de cartes à laquelle il ne tenait pas tant que ça. « Le duc attendra, dit-il. Il sait attendre. Votre prévôt, lui, va devoir vivre avec ce qu'il a promis. »",
      { if: { has: "vt:charte_aveline" }, text: "Il sort la Charte de sous sa cuirasse et te la tend, sans cérémonie. « Elle ne me sert plus à rien sans le feu, dit-il. Et je n'aime pas porter les choses des autres. »" },
    ],
    choices: [
      { label: "Prendre la Charte", hide: { not: { has: "vt:charte_aveline" } }, fx: { relic: "f_sorne", unflag: ["vt:charte_perdue", "vt:charte_aveline"] }, back: "VT_tour" },
      { label: "Laisser les soldats s'asseoir contre le parapet", hide: { has: "vt:charte_aveline" }, back: "VT_tour" },
    ] },

  VT_ville_prise: { act: "V", title: "Le feu sur la tour", place: "sorne",
    fx: { flag: "vt:ville_prise" },
    text: [
      "La mèche prend. Le tonneau s'embrase d'un coup, avec un bruit de voile qui se gonfle, et une colonne de fumée noire monte de la tour de la Reine, droite, haute, visible de tout le delta.",
      "Au large, les trois coques d'Aveline hissent leurs voiles. Elles virent vers le nord, toutes ensemble, vers l'embouchure de la Salve. Le capitaine les regarde partir, la main en visière.",
      "« À midi, dit-il, la porte des Sauniers sera ouverte. Le prévôt Delisle l'a promis au duc, et c'est un homme qui tient ses promesses, quand elles lui rapportent. » Il se tourne vers toi. « Vous pouvez garder votre or. Le duc vous le prendra à Salvèze, avec le reste. »",
      "Au nord, très loin, la fumée de Salvèze monte toujours droite dans le matin. Dans quelques heures, il y aura des bannières bleues sur le Beffroi.",
      { with: "lison", text: "Lison regarde la fumée noire sans un mot. Puis elle tourne le dos à la mer." },
    ],
    choices: [{ label: "Regarder vers Salvèze", big: true, to: "VF_duc" }] },

  VT_rattrape: { act: "V", title: "La quatrième statue", place: "sorne",
    fx: { relic: "f_sorne", unflag: ["vt:charte_perdue", "vt:charte_lothaire"], flag: ["lothaire:vaincu", "vt:lothaire_repeche"], ep: ["histoire", 3000] },
    text: [
      "Le bateau s'approche de la chaussée des Muets à la rame, entre les têtes des statues qui dépassent de l'eau. Lothaire Brunel te regarde venir de son perchoir, les bras serrés autour du cou de pierre. Il est trempé, il grelotte, et il a perdu ses gants.",
      "« Je ne sais pas nager, dit-il quand vous êtes assez près. Je ne l'ai jamais dit à personne. » Il rit, les dents serrées. « Vous voyez, je vous le dis sans cornet. »",
      "Il te tend la Charte avant que tu la demandes, au bout de son bras, au-dessus de l'eau. Puis il se laisse glisser dans le bateau, maladroitement, et reste assis au fond, la tête dans les mains.",
      { with: "salome", text: "Salomé le regarde longtemps, la rame à la main. Elle pourrait le pousser à l'eau d'un geste. Elle ne le fait pas. Elle rame." },
    ],
    choices: [{ back: "VT_tour" }] },

  VT_lecture: { act: "V", title: "La Charte lue", place: "sorne",
    fx: { flag: "vt:charte_lue_tour", fac: { hautes: 10, taiseurs: 5 }, ep: ["histoire", 4000] },
    text: [
      "Tu montes sur le parapet. Le vent te tire par le manteau. Tu déplies la Charte, tu la tiens à deux mains contre le vent, et tu lis, à voix haute, aussi fort que tu peux, face à la mer, face aux bateaux, face à la côte où dorment les Joncs-Bas.",
      "*Nous, Ysaure, reine du delta de la Salve, disons et voulons que la terre gagnée sur la mer par les gens des marais, digue après digue, soit à eux et à leurs enfants…*",
      "Ta voix porte loin, sur l'eau calme du matin. Sur le bateau, à bord de la barque des Taiseurs, sur la galère, on se tait pour écouter.",
      { if: { any: [CORI, { has: "vt:pacte_tenu" }] }, text: "Sous son tendelet, Corisande Marrel écoute aussi. Elle a croisé les mains sur son manteau. Elle ne bouge pas jusqu'à la signature. À la signature, elle baisse la tête." },
      { if: { has: "basse:taiseurs" }, text: "L'Aîné, debout dans sa barque, a ôté son capuchon de dentelle. Les deux autres Taiseurs ont fait de même. Ils écoutent tête nue." },
      { if: { voile: "vt_demande" }, text: "*Lis-la tout haut, une fois, devant ceux qui m'ont faite muette, ou devant leurs enfants.* Tu y penses en lisant la dernière ligne." },
      "Tu {{miroir#vt_lecture_miroir|lis pour la reine, et pour les gens des marais|lis aussi pour Odeline, à qui tu as crié qu'elle mourrait seule avec ses secrets, et dont tu portes ce matin le dernier secret à voix haute}}.",
      { with: "lison", text: "Quand tu redescends du parapet, Lison te prend la main, une seconde, et la lâche." },
    ],
    choices: [{ back: "VT_tour" }] },
});

// ==================================================================== what they want, and the choice
Object.assign(P, {
  VT_avis_tibere: { act: "V", title: "Ce que veut Tibère", place: "sorne", with: "tibere",
    fx: { conf: { tibere: 5 } },
    text: [
      { with: "tibere", text: "Tibère s'est assis sur un coffre, sa masse entre les genoux. Il regarde Salvèze au loin, la fumée droite. Il met longtemps à répondre." },
      { with: "tibere", text: "« Prends l'or, dit-il enfin. La ville a faim. Les greniers sont fermés, les gens mangent du son. Le reste, les parchemins, les reines, c'est bon pour les Archives. » Il frotte sa moustache. « Moi, je {{oreille#vt_avis_tibere|veux juste ma part, comme tout le monde|voudrais que Rosalie me voie revenir avec quelque chose dont je n'aurai pas honte, une seule fois, et je ne sais même pas si c'est de l'or}}. »" },
      { with: "tibere", if: { has: "vt:tibere_revenu" }, text: "« Et merci, ajoute-t-il, plus bas. Pour l'escalier. Pour m'avoir appelé. »" },
    ],
    choices: [{ back: "VT_tour" }] },

  VT_avis_lison: { act: "V", title: "Ce que veut Lison", place: "sorne", with: "lison",
    fx: { conf: { lison: 5 } },
    text: [
      { with: "lison", text: "Lison est assise sur le parapet, les jambes dans le vide, au-dessus de la mer. Elle ne te regarde pas quand tu t'assieds à côté d'elle." },
      { with: "lison", text: "« Ma grand-mère voudrait qu'on laisse tout à la mer, dit-elle. La Charte, l'or, la couronne. Que tout redevienne silence. » Elle jette un caillou dans l'eau. « Je {{oreille#vt_avis_lison|pense qu'elle a raison, comme d'habitude|veux qu'on lise la Charte sur la place du Beffroi, devant le Conseil, devant tout le monde, et je veux être au premier rang quand on la lira, et je veux que ma grand-mère l'entende de là-bas}}. »" },
      { with: "lison", tendre: true, else: "Elle se tait un moment, puis elle hausse les épaules. « C'est toi qui choisis. Moi, je rame. »", text: "Elle se tait un moment. Puis, sans te regarder : « Et je {{oreille#vt_avis_lison_toi|veux rentrer aux Joncs, c'est tout|veux que tu viennes avec moi, après, quoi que tu choisisses}}. »" },
    ],
    choices: [{ back: "VT_tour" }] },

  VT_avis_salome: { act: "V", title: "Ce que veut Salomé", place: "sorne", with: "salome",
    fx: { conf: { salome: 5 } },
    text: [
      { with: "salome", text: "Salomé regarde la mer, à l'endroit où était la ville. Elle a les mains sur le parapet, à plat, comme sur une barre." },
      { with: "salome", text: "« L'or, je m'en fiche, dit-elle. J'en ai vu remonter des épaves, de l'or. Il ne rend jamais personne. » Elle tourne la tête vers toi. « Ce que je veux, c'est le {{oreille#vt_avis_salome|compte de la Banque, à la fin, et qu'elle le paie|nom de Maïwenn sur la liste des gens des marais, quand on rendra les terres, parce qu'elle était de Port-Vasier, qu'elle n'avait rien, et qu'elle est morte pour un coffret de la Banque}}. »" },
      { with: "salome", if: { has: "salome:maiwenn" }, text: "« Et Lothaire, ajoute-t-elle, je veux qu'il le dise. Devant des gens. Pas à moi : je le sais. Devant des gens. »" },
    ],
    choices: [{ back: "VT_tour" }] },

  VT_avis_fauvette: { act: "V", title: "Ce que veut Fauvette", place: "sorne", with: "fauvette",
    fx: { conf: { fauvette: 5 } },
    text: [
      { with: "fauvette", text: "Fauvette est accroupie contre le parapet, à l'abri du vent, et elle compte quelque chose dans sa main. Quand tu t'approches, elle ferme le poing." },
      { with: "fauvette", text: "« Garde l'or, dit-elle aussitôt. File. Loin. Emmène-moi, si tu veux, je sais me rendre utile sur un bateau. » Elle rouvre le poing : trois ducats de la reine, à la bouche fermée. « Je {{oreille#vt_avis_fauvette|veux juste de quoi ne plus jamais avoir faim|veux apprendre à lire. La Charte. Le mot terre, et les autres. Je veux savoir ce que ça fait, d'avoir un endroit écrit quelque part à son nom}}. »" },
      { with: "fauvette", if: { has: "fauvette:temoin" }, text: "Elle regarde vers la trappe, vers l'escalier, vers ce qui reste au fond. Elle ne parle pas du moine. Elle n'en a plus besoin." },
    ],
    choices: [{ back: "VT_tour" }] },

  VT_avis_gildas: { act: "V", title: "Ce que veut Gildas", place: "sorne", with: "gildas",
    fx: { conf: { gildas: 5 } },
    text: [
      { with: "gildas", text: "Frère Gildas est debout au bord de la plate-forme, sa bure claquant au vent. Il regarde la mer à l'endroit où est la salle, sous l'eau." },
      { with: "gildas", text: "« Le Gardien voudrait que tout retourne à la mer, dit-il. C'est son serment. » Il se tourne vers toi. « Moi, Gildas, je voudrais qu'on lise la Charte, une fois. Elle l'a demandé. Ensuite, que tu fasses ce que ta conscience voudra. Je suis le dernier à pouvoir t'en parler. »" },
      "Tu {{miroir#vt_avis_gildas_miroir|l'écoutes comme on écoute un compagnon de route|l'écoutes, et tu te rends compte que tu le crois, lui, plus que n'importe qui ici, et que ça te fait peur}}.",
    ],
    choices: [{ back: "VT_tour" }] },

  VT_avis_lothaire: { act: "V", title: "Ce que veut Lothaire", place: "sorne",
    text: [
      "Lothaire Brunel s'est assis à l'écart, contre la trappe, le cornet jumeau posé sur ses genoux. Il ne le porte plus. Il le regarde.",
      "« Ce que je veux ? Vous me le demandez. » Il sourit. « Personne ne me l'a demandé depuis vingt ans. » Il réfléchit, et il a l'air de chercher pour de bon. « Faites {{oreille#vt_avis_lothaire|ce que vous voudrez, ça m'est égal|ce que vous voudrez, mais ne la vendez pas : je ne veux pas avoir eu raison sur vous}}. »",
    ],
    choices: [{ back: "VT_tour" }] },

  VT_avis_aine: { act: "V", title: "L'Aîné", place: "sorne",
    fx: { fac: { taiseurs: 3 } },
    text: [
      "L'Aîné fait approcher sa barque du pied de la tour. Il lève la tête vers toi et parle à voix haute, contre le vent, ce qui ne lui ressemble pas.",
      "« Les Taiseurs demandent que tu rendes la Charte à la mer, dit-il. C'est notre serment depuis trois cents ans. Nous {{oreille#vt_avis_aine|le tiendrons jusqu'au bout, quoi qu'il en coûte|sommes fatigués de nous taire, et si tu la lis, nous serons des milliers à pleurer de soulagement dans les marais}}. »",
      "Il fait le signe de la paume ouverte, le pouce replié : *nous écoutons*.",
    ],
    choices: [{ back: "VT_tour" }] },

  VT_choix: { act: "V", title: "Ce que tu en fais", place: "sorne",
    fx: { ep: ["histoire", 3000] },
    text: [
      "Le soleil est levé. Il éclaire la mer, la tour, les bateaux, et la fumée de Salvèze au loin. Tout le monde, sur la plate-forme et sur l'eau, te regarde. Ils attendent que tu dises ce que tu fais de tout ça.",
      { if: CHARTE, text: "La Charte est contre ta poitrine, dans sa toile cirée. Tu sens le sceau sous tes doigts." },
      { if: { not: CHARTE }, text: "La Charte n'est plus à toi. Tu as les mains vides de ce qui comptait le plus, et elles te semblent légères et lourdes à la fois." },
      { if: { all: [{ has: "vt:charte_brulee" }, { not: CHARTE }] }, text: "Tu as encore dans la gorge l'odeur de miel de la cire qui a coulé sur les braises." },
      { if: { all: [{ has: "vt:charte_mer" }, { not: CHARTE }] }, text: "La Charte s'en va vers l'écueil de l'Ouïe, sous la bure de Frère Gildas. Elle y dormira entière." },
      { if: { all: [{ has: "vt:gardien_cede" }, CHARTE] }, text: "Le Gardien te l'a laissée, à genoux devant le trône. Elle est à toi, à présent, autant qu'aux Taiseurs." },
      { if: { has: "vt:or_laisse" }, text: "L'or de la reine est resté en bas, sur les dalles, sous la mer revenue. Tu l'as laissé de ta main." },
      { if: { has: "vt:couronne_portee" }, text: "Dans ton sac, la couronne de sel pèse le poids d'un pain. Ton front garde son froid." },
      { if: { has: "vn:porte_verite" }, text: "Devant la dernière porte, tu as dit au septième visage pourquoi tu étais là. Ta voix tremblait. Elle tient, maintenant." },
      { if: { relics: { min: 6 } }, text: "Le Registre est entier, avec la Charte : six feuillets et la parole de la reine." },
      { if: { is: { or: "remonte" } }, text: "Les coffres de lingots sont alignés contre le parapet. De quoi payer le duc, ou une province." },
      { if: { is: { or: "partie" } }, text: "L'or que tu as remonté tient dans quelques besaces. De quoi vivre très loin, longtemps." },
      { if: { has: "prevot:dejoue" }, text: "Le prévôt Delisle est tombé. À Salvèze, le Conseil attend." },
      { if: { all: [{ not: { has: "prevot:dejoue" } }, { not: PRISE }] }, text: "Le prévôt Delisle est toujours en place, à Salvèze, et il attendait un feu qui n'est pas venu." },
      { if: CORI, text: "Corisande Marrel, sous son tendelet, attend que tu tiennes ta parole." },
      { if: { has: "taiseurs:serment" }, text: "Tu as prêté serment aux Joncs-Bas. Tu sais ce que les Taiseurs feraient à ta place." },
      { if: { voile: "vt_demande" }, text: "*Rends-leur ma parole. Après, fais-en ce que tu voudras.*" },
      "Tu {{miroir#vt_choix_miroir|choisis pour la ville, pour les marais, pour la reine|choisis aussi pour toi, pour ce que tu pourras te dire le soir, et tu sais que ce sera la seule chose qui comptera dans vingt ans}}.",
    ],
    choices: [
      { label: "Porter la Charte et le Registre devant le Conseil et le peuple de Salvèze", big: true, labels: [{ if: { voile: "vt_demande" }, label: "Rendre sa parole à la reine : lire la Charte devant ceux qui l'ont faite muette" }],
        hide: PRISE, if: { all: [CHARTE, { relics: { min: 5 } }, { has: "prevot:dejoue" }] }, why: "Il faut la Charte, au moins quatre feuillets du Registre, et un prévôt qui ne vend plus la ville.", to: "VF_charte" },
      { label: "Remettre l'or au Conseil pour payer le duc, et confier la Charte aux Taiseurs", hide: PRISE, if: { all: [{ is: { or: "remonte" } }, CONSEIL] }, why: "Il faut les trois coffres d'or remontés, et un Conseil prêt à t'entendre : le prévôt déjoué, ou la confiance des Comptoirs.", to: "VF_republique" },
      { label: "Tenir ta parole à Corisande : l'or à la Banque, le Registre au feu", hide: { any: [PRISE, { not: CORI }] }, to: "VF_banque" },
      { label: "Tout rendre à la mer, et prendre la place du Gardien", hide: PRISE, if: { has: "taiseurs:serment" }, why: "Il faudrait avoir prêté le serment des Taiseurs.", to: "VF_silence" },
      { label: "Garder l'or, et partir loin de Salvèze", hide: PRISE, if: OR_ANY, why: "Il faudrait avoir remonté de l'or.", to: "VF_fortune" },
      { label: "Redescendre dans la salle noyée, pour ce qui reste de l'or", hide: PRISE, to: "VF_noyade" },
      { label: "Regarder vers Salvèze", big: true, hide: { not: PRISE }, to: "VF_duc" },
    ] },
});

// ==================================================================== small scenes: the mosaic, the crown worn, the dive, the tied man, the galley
Object.assign(P, {
  VT_mosaique: { act: "V", title: "La mosaïque du delta", place: "sorne",
    text: [
      "Tu t'accroupis. La mosaïque couvre tout le sol de la salle : le delta de la Salve vu d'en haut, ses sept bras, ses îles, ses bancs de vase, en tesselles de pierre bleue, de grès, de nacre et de verre vert. Salvèze est là, en haut, une tache de pierre blanche. Sorne, en bas, est une tesselle d'or, une seule.",
      "Chaque île porte une tesselle de nacre plus grande que les autres. L'île des Joncs-Bas {{pie#vt_mosaique|est une tesselle de nacre parmi cent autres|est une tesselle de nacre montée sur un couvercle de bronze : elle sonne creux sous le talon, et ses joints sont propres}}.",
      "Tout autour, en bordure, court une inscription en lettres noires : *{{loupe#vt_mosaique_bord|Le delta, de la Salve à la mer|Chaque terre gagnée a son nom sous sa tesselle : qu'on les relève le jour où on les rendra}}.*",
      { with: "lison", text: "Lison s'est accroupie à côté de toi. Elle pose le doigt sur les Joncs-Bas, puis suit un bras d'eau jusqu'à la Saline. « C'est juste, dit-elle. Le chenal des Anguilles, le banc du Héron. Tout est juste. Trois cents ans, et tout est encore juste. »" },
    ],
    choices: [
      { label: "Soulever la tesselle des Joncs-Bas", hide: { not: { any: [{ voile: "vt_mosaique" }, { voile: "vt_mosaique_bord" }] } }, fx: { clock: { maree: 1 } }, to: "VT_mosaique_cache" },
      { label: "Laisse-moi faire", who: "lison", hide: { any: [{ voile: "vt_mosaique" }, { voile: "vt_mosaique_bord" }] }, test: { dom: "savoir", diff: -10, label: "Lison reconnaît la tesselle qui sonne faux" },
        win: { fx: { clock: { maree: 1 }, conf: { lison: 5 } }, to: "VT_mosaique_cache" }, lose: { back: "VT_salle" } },
      { back: "VT_salle" },
    ] },

  VT_mosaique_cache: { act: "V", title: "Sous les Joncs-Bas", place: "sorne",
    fx: { item: "vt_carte_terres", flag: "vt:carte_terres", ep: ["seance", 2500], fac: { hautes: 5 } },
    text: [
      "La tesselle se soulève avec son couvercle, d'un bloc, à la pointe de ta lame. Dessous, dans une boîte de plomb à la mesure du creux, un rouleau de vélin ficelé de soie violette.",
      "Tu le déroules à moitié. C'est une carte, tracée à l'encre brune, du delta tout entier, île par île, digue par digue. Sur chaque terre gagnée, un nom de famille, d'une écriture fine : *Vasse, Brac, Hamon, Kerhoas, Danic*… Des centaines. Les terres de la Charte, et ceux à qui elles revenaient, la dernière année du règne.",
      "Avec ça, n'importe quel greffier pourrait dire, champ par champ, qui a pris quoi à qui.",
      { with: "salome", text: "Salomé se penche par-dessus ton épaule, cherche, trouve. « Brac, dit-elle. Le banc de la Pointe. Mon arrière-grand-père disait qu'on avait eu une terre, autrefois. Je croyais qu'il mentait pour avoir à boire. »" },
      { with: "fauvette", text: "Fauvette regarde la carte sans pouvoir la lire. « Il y a un nom par endroit, demande-t-elle. Chaque endroit a un nom de gens ? » Tu dis oui. Elle reste un moment à regarder les noms qu'elle ne sait pas lire." },
    ],
    choices: [{ back: "VT_salle" }] },

  VT_couronne_portee: { act: "V", title: "Une tête qui se taira", place: "sorne",
    fx: { item: "vt_tr_couronne", clock: { tresors: 1 }, flag: ["tresor:vt_couronne", "vt:couronne_portee"], ep: ["seance", 2000] },
    text: [
      "Tu prends la couronne à deux mains. Elle est légère, beaucoup plus légère que tu ne le pensais, et froide comme une pierre de rivière. Tu la poses sur ta tête.",
      "Le sel crisse un peu contre tes cheveux. Le dôme, au-dessus, verse sur toi sa lumière verte.",
      "Tu {{miroir#vt_couronne_miroir|te sens ridicule, une couronne de sel sur la tête dans une salle vide|te sens chez toi, pour la première fois depuis la nuit des Lanternes, et cela te fait plus peur que n'importe quelle porte de bronze}}.",
      { with: "lison", text: "Lison te regarde, les bras croisés. « Elle te va mal, dit-elle. C'est bon signe. Ceux à qui elles vont bien, il faut s'en méfier. »" },
      { with: "tibere", text: "Tibère ôte son chapeau avec une grande révérence, et le remet aussitôt. « Majesté », dit-il, et il rit tout seul." },
      "Tu l'ôtes, et tu la ranges dans ton sac, enveloppée dans un linge.",
    ],
    choices: [{ back: "VT_salle" }] },

  VT_salome_plonge: { act: "V", title: "Salomé plonge", place: "sorne", with: "salome",
    fx: { set: { or: "remonte" }, flag: ["salome:plonge", "vt:salome_coffre"], ep: ["histoire", 3000] },
    text: [
      { with: "salome", text: "Salomé ôte ses bottes, sa veste, sa ceinture. Elle noue la corde cassée autour de sa taille, d'un nœud de chaise, et te tend l'autre bout sans rien dire. Ses mains ne tremblent pas. Sa mâchoire, si." },
      { with: "salome", if: { not: { has: "salome:plonge" } }, text: "« Trois ans, dit-elle. Trois ans que je ne suis pas descendue. » Elle regarde le puits, l'eau noire au fond. « Tiens la corde. Ne la lâche pas. Quoi qu'il arrive, ne la lâche pas. » Tu comprends à qui elle pense." },
      { with: "salome", if: { has: "salome:plonge" }, text: "« J'ai replongé une fois, dit-elle. Je peux bien replonger deux fois. Tiens la corde. »" },
      "Elle descend le puits à la force des bras, entre dans l'eau sans un bruit, et disparaît. Tu comptes. Trente. Soixante. La corde se tend, se détend, se tend. Quatre-vingt-dix. Tu tiens la corde à t'en blanchir les doigts.",
      { with: "salome", text: "Elle remonte d'un coup, crachant de l'eau, le visage blanc. Elle a passé une élingue autour du coffre, au fond, à tâtons, sous trois toises d'eau. « Hissez, dit-elle. Hissez, bon sang. » Elle rit, en grelottant, et elle ne sait pas pourquoi elle rit." },
    ],
    choices: [{ label: "Hisser le dernier coffre, et monter jusqu'au sommet de la tour", big: true, to: "VT_tour" }] },

  VT_lo_banc: { act: "V", title: "Le banc des secrétaires", place: "sorne",
    text: [
      "Tu redescends jusqu'à la chambre des secrétaires. Lothaire est toujours sur son banc, entre deux morts, les poignets liés derrière le dos. Il t'a entendu{e} venir de loin.",
      { if: MER, text: "L'eau est déjà dans la chambre. Elle lui monte aux genoux, elle monte aux genoux des morts, et les robes de clerc flottent autour des os." },
      "« Vous voilà, dit-il. J'ai écouté vos pensées dans l'escalier pendant toute la descente. Vous ne saviez pas encore ce que vous alliez faire. » Il sourit. « Moi non plus, d'ailleurs. Je ne sais pas ce que je ferais à votre place. »",
      "Tu {{miroir#vt_banc_miroir|hésites, parce qu'il le mérite peut-être|hésites, et tu sais exactement pourquoi : parce que personne d'autre que lui ne t'entend, et que le laisser là ferait taire la seule oreille qui sache ce que tu penses}}.",
    ],
    choices: [
      { label: "Le détacher du banc, et le faire monter devant toi", fx: { flag: "vt:lothaire_delie", ep: ["perso", 800] }, back: "VT_puits" },
      { label: "Le laisser à la mer, avec les sept", tag: "Marque +1", stain: true, fx: { flag: ["lothaire:mort", "vt:lothaire_noye"], unflag: "lothaire:vaincu", mark: 1 }, back: "VT_puits" },
    ] },

  VT_co_tour: { act: "V", title: "Par-dessus l'eau", place: "sorne",
    text: [
      "*La Constance* s'approche du pied de la tour à petits coups d'avirons. Corisande Marrel s'est levée sous le tendelet. Elle doit crier pour que tu l'entendes, et elle déteste crier : sa voix monte jusqu'à toi, sèche, cassée par le vent.",
      "« L'or d'abord, dit-elle. Mes gens le descendront. Ensuite la Charte, et le feu, ici, sur l'eau, devant tout le monde. » Elle se tait, reprend son souffle. « La Banque {{oreille#vt_co_tour|paiera le duc à la Saint-Jean, et la ville vivra|paiera le duc pour qu'il me rende Bérold, mon petit-fils, qu'il tient en otage aux cadets ; la ville vivra par-dessus le marché, et je m'en contenterai}}. »",
      { if: { voile: "vt_co_berold" }, text: "Tu sais déjà, pour Bérold. Elle te regarde, et elle sait que tu sais." },
    ],
    choices: [
      { label: "« Une part de l'or pour Bérold, par ma main. La Charte sera lue. »", hide: { not: { any: [{ voile: "vt_co_tour" }, { voile: "vt_co_berold" }] } }, fx: { unflag: "corisande:pacte", flag: ["vt:cori_berold", "vt:pacte_rompu"], ep: ["histoire", 3000] }, back: "VT_tour" },
      { label: "Lui faire signe que l'accord tient", back: "VT_tour" },
    ] },
});

// ==================================================================== END PASSAGES

module.exports = {
  passages: P,
  extras: {
    people: {},
    items: {
      vt_tr_jetons: { name: "Les jetons des sept secrétaires", kind: "tresor", price: 140, desc: "Sept disques d'ambre chantant gravés d'une bouche fermée, tièdes dans la main. Ensemble, ils font l'accord des Taiseurs." },
      vt_tr_collier: { name: "Le collier d'ambre de la reine", kind: "tresor", price: 180, desc: "De grosses perles d'ambre percées d'un fil d'or, trouvées dans le coffre de la reine Ysaure." },
      vt_tr_ducats: { name: "La bourse de la reine", kind: "tresor", price: 60, desc: "Une bourse de cuir pleine de ducats anciens, frappés de la bouche fermée au revers." },
      vt_tr_bague: { name: "Le sceau de la reine", kind: "tresor", price: 250, desc: "Un anneau d'or lourd, usé d'un côté, au chaton de cornaline : une femme couronnée, de profil, un doigt sur les lèvres. Le sceau qui a scellé la Charte des Hautes-Eaux." },
      vt_tr_couronne: { name: "La couronne de sel", kind: "tresor", price: 300, desc: "Un cercle de sel gris cristallisé sur une âme d'argent : le sel de chaque saline du delta, donné par les sauniers pour le couronnement de la reine Ysaure." },
      vt_tr_sceptre: { name: "Le sceptre de procession", kind: "tresor", price: 3, desc: "Un sceptre de bois doré au bout duquel une main fermée tient une bille de jais. Payé par la maison Marrel pour montrer la reine au peuple, le lendemain de la nuit des Comptoirs." },
      vt_carte_terres: { name: "La carte des terres gagnées", kind: "document", form: "carte", desc: "Un rouleau de vélin ficelé de soie violette, trouvé sous la tesselle des Joncs-Bas dans la mosaïque de Sorne : le delta île par île, et sur chaque terre gagnée, le nom de la famille à qui elle revenait, la dernière année du règne d'Ysaure.",
        text: "*Terres gagnées sur la mer, rôle de la dernière année.*\n\n*Banc de la Pointe : Brac. Chenal des Anguilles : Vasse, Hamon. Île du Héron : Kerhoas. Grisemotte, bassins du sud : Danic, Lannuzel. {{loupe#vt_carte_marge|Le reste comme à l'ancien rôle|En marge, de la main du chancelier : le même jour, les Comptoirs ont fait dresser un autre rôle, où ces noms sont grattés et les leurs écrits dessus}}.*" },
      vt_lettre_vasse: { name: "La lettre pour qui viendra", kind: "document", form: "lettre", hand: "penchee", desc: "Une lettre sans adresse, de la main d'Aymeric Vasse, trouvée sous le faux fond d'un coffre, dans la salle du trésor de Sorne.",
        text: "*À celui ou celle qui lira ceci,*\n\n*Si tu as trouvé ce fond, tu sais regarder. {{loupe#vt_lettre_un|Prends ce qu'il te plaira, l'or est à qui le trouve|L'or est à ceux des marais ; le sceau est à toi, pour signer ce que tu feras de la Charte, et pour que ce soit toi qui en répondes}}.*\n\n*La reine m'a demandé une chose avant qu'on lui prenne la langue. {{loupe#vt_lettre_deux|Qu'on se souvienne d'elle|Que la Charte soit lue tout haut, une fois, devant ceux qui l'ont faite muette, et qu'après on en fasse ce qu'on voudra}}. Je n'ai pas pu. Je te le laisse.*\n\n*Aymeric Vasse, chancelier, la dernière nuit.*" },
    },
    enemies: {
      vt_lothaire: { name: "Lothaire Brunel", look: "humain", pv: 120, att: 88, def: 34, dmg: 11, desc: "Gants gris, canne-épée, le cornet jumeau à l'oreille : il entend ton coup avant que tu le portes." },
      vt_spadassin: { name: "Spadassin de la Banque", look: "humain", pv: 46, att: 80, def: 28, dmg: 9, desc: "Manteau noir, lame courte, une arbalète en bandoulière. Payé triple pour la nuit." },
      vt_berald: { name: "Léandre Escoffe", look: "humain", pv: 120, att: 86, def: 32, dmg: 10, desc: "Le capitaine des gardes de Corisande Marrel : une chaîne d'argent sur la poitrine, des mains de débardeur, une épée de cavalier." },
      vt_garde: { name: "Garde de la Banque", look: "humain", pv: 46, att: 80, def: 28, dmg: 9, desc: "Manteau noir à boutons d'or, épée courte. Un ancien du Guet, souvent." },
      vt_arbaletrier: { name: "Arbalétrier de la Banque", look: "humain", pv: 40, att: 84, def: 24, dmg: 10, ranged: true, desc: "Une arbalète à cric, un carquois de carreaux, et l'ordre de ne pas rater." },
      vt_soldat: { name: "Soldat d'Aveline", look: "humain", pv: 50, att: 84, def: 32, dmg: 9, desc: "Cuirasse bleue, pique courte pour les couloirs, discipline de fer." },
      vt_capitaine: { name: "Capitaine d'Aveline", look: "humain", pv: 130, att: 90, def: 34, dmg: 11, desc: "Une cuirasse bleue rayée de cuivre, une épée bâtarde, vingt ans de guerres du nord." },
      vt_gardien: { name: "Le Gardien des Taiseurs", look: "humain", pv: 110, att: 82, def: 30, dmg: 9, desc: "Un frère du Mont en bure grise, un bâton ferré, et trente ans d'exercices dans la salle des voix." },
    },
    quests: [
      { id: "VT_q_secretaires", act: "V", kind: "annexe", title: "Les sept secrétaires", start: "VT_secretaires", echo: "vt:secretaires" },
    ],
    veils: {
      vt_mosaique: { fx: { ep: ["perso", 400] } },
      vt_mosaique_bord: { fx: { ep: ["perso", 400] } },
      vt_carte_marge: { fx: { ep: ["perso", 600] } },
      vt_lo_offre: { fx: { ep: ["perso", 500] } },
      vt_lo_madame: { fx: { ep: ["perso", 600] } },
      vt_lo_maiwenn: { fx: { ep: ["perso", 500] } },
      vt_be_solde: { fx: { ep: ["perso", 500] } },
      vt_be_ordre: { fx: { ep: ["perso", 500] } },
      vt_tibere_vendu: { fx: { ep: ["perso", 600] } },
      vt_co_feu: { fx: { ep: ["perso", 600] } },
      vt_co_berold: { fx: { ep: ["perso", 800] } },
      vt_co_tour: { fx: { ep: ["perso", 800] } },
      vt_co_lothaire: { fx: { ep: ["perso", 500] } },
      vt_av_ordre: { fx: { ep: ["perso", 500] } },
      vt_av_tonneau: { fx: { ep: ["perso", 500] } },
      vt_av_lieut: { fx: { ep: ["perso", 600] } },
      vt_signal_tonneau: { fx: { ep: ["perso", 500] } },
      vt_demande: { fx: { ep: ["histoire", 2000] } },
      vt_voix_gardien: { fx: { ep: ["perso", 800] } },
      vt_voix_trois: { fx: { ep: ["perso", 800] } },
      vt_avis_tibere: { fx: { flag: "vt:avis_tibere", conf: { tibere: 5 } } },
      vt_avis_lison: { fx: { flag: "vt:avis_lison", conf: { lison: 5 } } },
      vt_avis_lison_toi: { fx: { flag: "vt:avis_lison_toi" } },
      vt_avis_salome: { fx: { flag: "vt:avis_salome", conf: { salome: 5 } } },
      vt_avis_fauvette: { fx: { flag: "vt:avis_fauvette", conf: { fauvette: 5 } } },
      vt_avis_lothaire: { fx: { flag: "vt:avis_lothaire" } },
      vt_avis_aine: { fx: { flag: "vt:avis_aine", fac: { taiseurs: 3 } } },
      vt_secr_noms: { fx: { ep: ["perso", 600] } },
      vt_jetons: { fx: { ep: ["perso", 300] } },
      vt_or_plomb: { fx: { ep: ["perso", 600] } },
      vt_or_lingots: { fx: { flag: "vt:or_dette", ep: ["perso", 500] } },
      vt_corde: { fx: { ep: ["perso", 400] } },
      vt_coffre_serrure: { fx: { ep: ["perso", 400] } },
      vt_coffre_fond: { fx: { ep: ["perso", 400] } },
      vt_couronne: { fx: { ep: ["perso", 500] } },
      vt_couronne_mot: { fx: { ep: ["perso", 500] } },
      vt_sceptre_mot: { fx: { ep: ["perso", 400] } },
      vt_reliure: { fx: { ep: ["perso", 500] } },
      vt_colophon: { fx: { ep: ["perso", 800] } },
      vt_lettre_deux: { fx: { ep: ["perso", 800] } },
    },
  },
};
