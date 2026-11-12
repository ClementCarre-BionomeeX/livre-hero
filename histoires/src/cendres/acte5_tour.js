// Act V · La tour du Registre: the road back west under the white snow, Pallanche frozen in its queue, the ascent of
// the Tower (the hall of the cessions where souvenirs can be taken back, the scriptorium where the pages write the
// Great Cession, the archives and their Gleaners), and Mordace at the top, writing. Several ways to end Mordace:
// fight (mordace:fin=tue), Pie forges his own cession (cede), Hylas talks him down (pardonne), Givre eats his cold
// (rechauffe). The child leads ("tu").
var A = { act: "V", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  V_route: P({ title: "La neige", place: null,
    fx: { flag: "acte5:debut", catchup: 17, catchupAll: true, catchupWhy: "la Lisse" },
    text: [
      "Vous marchez vers l'ouest toute la nuit, dans la neige blanche. Elle tombe à gros flocons, lents, sans vent. Elle ne fond pas. Elle ne mouille pas. Elle se pose.",
      "Sur la route, des gens arrêtés. Un charretier sur son siège, les rênes à la main, qui regarde devant lui. Une femme assise sur une borne, avec un panier. Un enfant qui tient un cerceau. Ils ne dorment pas. Ils sourient. Ils ont l'air de gens à qui on a enlevé un poids, et qui ne savent plus quoi faire de leurs mains.",
      "Tu t'arrêtes devant la femme au panier. Tu lui demandes son nom. Elle cherche, poliment. Elle ne trouve pas. Ça n'a pas l'air de lui faire de peine.",
      { with: "ombeline", text: "Ombeline s'agenouille devant elle et lui prend les mains. « Elle n'a plus mal nulle part, dit-elle. Plus rien. C'est ce qu'il donne. C'est exactement ce que je donne aux mourants, moi. » Elle se relève. « Mais elle n'est pas en train de mourir. »" },
      { with: "givre", text: "Givre court d'un passant à l'autre, et renifle, et ne mange rien. Il n'y a rien à manger. Ils ont déjà tout donné." },
    ],
    choices: [{ label: "Continuer vers Pallanche", to: "V_r_chemin" }] }),

  V_compagnons: P({ title: "Ceux qui marchent avec toi", place: null,
    text: [
      "À l'aube, vous vous arrêtez sous un pont. La neige tombe en rideau devant l'arche. Tu regardes ceux qui sont là.",
      { with: "ysolde", text: "Ysolde a écrit son propre nom sur le dos de sa main, à l'encre, et ceux de ses quarante hommes sur son avant-bras. « Au cas où », dit-elle." },
      { with: "pie", text: "Pie fait tourner un jeton de plomb entre ses doigts, un de ceux qu'il a fabriqués par milliers. « Je sais imiter son écriture, dit-il, mieux que lui. Je l'ai fait un an. » Il range le jeton. « Je dis ça comme ça. »" },
      { with: "linette", text: "Linette récite à voix basse tout ce qu'elle a lu depuis qu'elle sait qui elle est. Les enseignes de Pallanche, les noms sur les tentes de Brenne, les marques sur les tonneaux. Elle a peur d'en perdre un." },
      { with: "hylas", text: "Hylas a les mains croisées sur sa canne. « Il avait onze ans quand il est venu me voir, dit-il, sans qu'on lui demande rien. Il avait vu brûler sa maison, à la guerre d'avant. Il voulait que je la lui enlève, la maison. Je lui ai dit qu'on ne vend pas l'oubli. Je l'ai pris comme apprenti à la place. Je croyais lui rendre service. »" },
      { with: "corbe", text: "Corbe frappe son tambour, très doucement, du bout des doigts, pour que le silence ne gagne pas." },
      { with: "lisandre", text: "Lisandre chante. Rien de précis. Des bouts de tout. Pour vérifier qu'elle sait encore." },
      { with: "sansnom", text: "Ton frère regarde la neige. « Elle vient de chez nous, dit-il. Je la reconnais. Mais elle tombe à l'envers. »" },
      { with: "gaspard", text: "Gaspard partage les dernières miches. Il les coupe en parts exactement égales, avec un soin de boulanger." },
      { with: "rodric", text: "Rodric fait tinter ses trois cloches, l'une après l'autre. « Maëlle, Ilse, Hautvent, dit-il. Elles s'appellent comme ça. Je les ai renommées. »" },
    ],
    choices: [
      { label: "Parler à Ysolde", hide: { not: { present: "ysolde" } }, to: "V_a_ysolde" },
      { label: "Parler à Pie", hide: { not: { present: "pie" } }, to: "V_a_pie" },
      { label: "Parler à Hylas", hide: { not: { present: "hylas" } }, to: "V_a_hylas" },
      { label: "Parler à Corbe", hide: { not: { present: "corbe" } }, to: "V_a_corbe" },
      { label: "Parler à Lisandre", hide: { not: { present: "lisandre" } }, to: "V_a_lisandre" },
      { label: "Parler à ton frère", hide: { not: { present: "sansnom" } }, to: "V_a_sansnom" },
      { label: "Parler à Gaspard", hide: { not: { present: "gaspard" } }, to: "V_a_gaspard" },
      { label: "Parler à Rodric", hide: { not: { present: "rodric" } }, to: "V_a_rodric" },
      { label: "Parler à Linette", hide: { not: { present: "linette" } }, to: "V_a_linette" },
      { label: "Parler à Ombeline", hide: { not: { present: "ombeline" } }, to: "V_a_ombeline" },
      { label: "Appeler Givre", hide: { not: { present: "givre" } }, to: "V_a_givre" },
      { label: "Entrer dans Pallanche sans rien dire", to: "V_ville", big: true },
    ] }),

  V_ville: P({ title: "Pallanche sous la neige", place: "pallanche",
    text: [
      "Pallanche est blanche, et silencieuse, et pleine. Les gens sont dehors, partout, debout, assis, arrêtés au milieu d'un geste. Les cent cloches se taisent.",
      "Sur la place aux Clercs, la queue est toujours là. Elle fait trois fois le tour de la place. Les gens n'ont pas bougé depuis hier soir. Ils tiennent leurs jetons de plomb dans la main, et la neige s'accumule sur leurs épaules, et ils sourient.",
      "Au centre, la tour des Greffiers. De son sommet monte une colonne blanche, droite, épaisse comme la tour elle-même, qui s'élève dans le ciel jusqu'à se perdre. Ce n'est pas de la neige qui tombe. C'est de la neige qui monte. Tout ce qu'on cède, cette nuit, monte par là.",
      { if: { has: "lisse:cession" }, text: "Au milieu de la queue, des soldats en bleu, qui ne savent pas qu'ils ont été bleus. Ils ont été écrits les premiers." },
    ],
    choices: [
      { label: "La Veuve, au milieu de la queue, en chapeau", hide: { any: [{ seen: "V_v_veuve" }, { not: { seen: "IV_pal_veuve" } }] }, to: "V_v_veuve" },
      { label: "Le clocher de Saint-Aubin, ouvert", hide: { seen: "V_v_cloche" }, to: "V_v_cloche" },
      { label: "Le bout de la queue, rue des Bassins, où quelque chose bouge", hide: { seen: "V_v_glaneurs" }, to: "V_v_glaneurs" },
      { label: "Les voix sous les arcades", hide: { any: [{ seen: "V_v_liseurs" }, { not: { has: "liseurs:sauves" } }] }, to: "V_v_liseurs" },
      { label: "Une chandelle, à une petite porte, côté jardin", hide: { any: [{ seen: "V_v_baudoin" }, { not: { has: "baudoin:iv=dedans" } }] }, to: "V_v_baudoin" },
      { label: "De la lumière à l'hospice, derrière Saint-Gilles", hide: { any: [{ seen: "V_v_aude" }, { not: { seen: "IV_Q_hospice" } }] }, to: "V_v_aude" },
      { label: "Des enfants qui courent le long de la queue", hide: { any: [{ seen: "V_v_jetons" }, { not: { has: "iv:jetons=envers" } }] }, to: "V_v_jetons" },
      { label: "Une couleur, du côté des Teinturiers", hide: { any: [{ seen: "V_v_bleu" }, { not: { has: "iv:bleu=rendu" } }] }, to: "V_v_bleu" },
      { label: "Une fillette qui pleure, dans la queue", hide: { seen: "V_v_fillette" }, to: "V_v_fillette" },
      { label: "Une odeur de pain brûlé, rue des Fours", hide: { seen: "V_v_fours" }, to: "V_v_fours" },
      { label: "Le Pont-Neuf, où la neige monte", hide: { seen: "V_v_pont" }, to: "V_v_pont" },
      { label: "La rue des Teinturiers, où le ruisseau a gelé", hide: { seen: "V_v_teinturiers" }, to: "V_v_teinturiers" },
      { label: "Une note d'orgue, qui ne s'arrête pas", hide: { seen: "V_v_orgue" }, to: "V_v_orgue" },
      { label: "Le marché aux bêtes, désert", hide: { seen: "V_v_renne" }, to: "V_v_renne" },
      { label: "L'écrivain public, à sa table, qui écrit sous la neige", hide: { seen: "V_v_ecrivain" }, to: "V_v_ecrivain" },
      { label: "Une école, rue des Chanoines, au toit sans neige", hide: { seen: "V_v_ecole" }, to: "V_v_ecole" },
      { label: "Le cimetière de Saint-Gilles, d'où vient un bruit de maillet", hide: { seen: "V_v_cimetiere" }, to: "V_v_cimetiere" },
      { label: "La halle aux Tailleurs, où une affiche est collée à la porte", hide: { seen: "V_v_cols" }, to: "V_v_cols" },
      { label: "Une lanterne qui va et vient, dans le jardin de la Faculté", hide: { seen: "V_v_jardin" }, to: "V_v_jardin" },
      { label: "De la musique, dans un hôtel de la rue des Chanoines", hide: { seen: "V_v_bal" }, to: "V_v_bal" },
      { label: "Remonter la queue, depuis le bout", hide: { seen: "V_q_bout" }, to: "V_q_bout" },
      { label: "Entrer dans la tour", to: "V_t_porche", big: true },
    ] }),

  V_t_porche: P({ title: "Le porche", place: "pallanche",
    text: [
      "Le porche est ouvert. Il n'y a pas de gardes. Les dix greffiers des dix pupitres sont assis à leur place, la plume levée, immobiles, souriants. Ils ont cédé aussi.",
      "Un escalier monte, large, dans le noir. On entend, très haut, un grattement régulier, comme une souris dans un mur. Une plume.",
    ],
    choices: [{ label: "Monter", to: "V_t_cessions" }] }),

  V_t_cessions: P({ title: "Le Bureau des Cessions", place: "pallanche",
    text: [
      "Au premier étage, le Bureau des Cessions. Une salle immense, voûtée, et sur des rayonnages qui montent jusqu'au plafond, des bocaux. Des milliers de bocaux de verre, fermés à la cire noire, et dans chacun, une lueur. Pâle, vive, bleue, dorée. Chacune est un souvenir cédé. Ils bourdonnent comme des ruches.",
      "Les étiquettes sont écrites à la main. *Jehan Peyrol, portefaix : le visage de sa fille.* *Marion Lebas : le jour de ses noces.* Tu marches entre les rayonnages, et les lueurs se tournent vers toi au passage, comme des fleurs.",
      { once: true, text: "Il y a des étiquettes que tu connais." },
    ],
    choices: [
      { label: "Chercher celles des tiens", hide: { seen: "V_t_bocaux" }, to: "V_t_bocaux" },
      { label: "Ouvrir tous les bocaux", hide: { has: "v:bocaux_ouverts" }, fx: { flag: "v:bocaux_ouverts", ep: ["perso", 2000] }, to: "V_t_bocaux_ouverts" },
      { label: "La salle des cartes, au deuxième", hide: { seen: "V_e_cartes" }, to: "V_e_cartes" },
      { label: "La chapelle des greffiers", hide: { seen: "V_e_chapelle" }, to: "V_e_chapelle" },
      { label: "Le couloir qui sent la soupe", hide: { seen: "V_e_cuisines" }, to: "V_e_cuisines" },
      { label: "Une porte étroite, au troisième", hide: { seen: "V_e_chambre" }, to: "V_e_chambre" },
      { label: "Le bruit de moulin, sous le clocher", hide: { seen: "V_e_horloge" }, to: "V_e_horloge" },
      { label: "L'escalier qui descend, derrière le guichet", hide: { seen: "V_ar_escalier" }, to: "V_ar_escalier" },
      { label: "Le dortoir, sous les combles", hide: { seen: "V_e_dortoir" }, to: "V_e_dortoir" },
      { label: "Une petite salle aux murs couverts de casiers", hide: { seen: "V_e_sceaux" }, to: "V_e_sceaux" },
      { label: "Une petite porte, derrière les bocaux, avec une plaque de cuivre", hide: { seen: "V_e_reclamations" }, to: "V_e_reclamations" },
      { label: "Monter au scriptorium", to: "V_t_scriptorium" },
    ] }),

  V_t_bocaux: P({ title: "Les bocaux", place: "pallanche",
    text: [
      { with: "ysolde", text: "*Ysolde de Brenne, capitaine : le pont de Lisse, la nuit du quatorze brumaire.* La lueur est rouge sombre. Ysolde prend le bocal dans ses mains. Elle le tient longtemps." },
      { if: { has: "isaure:brisee" }, text: "*Isaure d'Esquarre : Aymeric, de sa naissance à sa mort.* Le bocal est vide. Quelqu'un l'a déjà rendu." },
      { if: { not: { has: "isaure:brisee" } }, text: "*Isaure d'Esquarre : Aymeric, de sa naissance à sa mort.* La lueur est petite, blanche, et elle tourne sur elle-même comme un enfant qui joue." },
      { with: "pie", if: { has: "pie:a_vendu" }, text: "*Pie, sans nom de famille : un souvenir.* Pie regarde l'étiquette. Il rit, très bas. « Je ne sais même plus lequel. »" },
      { without: "pie", if: { has: "pie:a_vendu" }, text: "*Pie, sans nom de famille : un souvenir.* L'étiquette ne dit pas lequel." },
      "Et, tout en bas d'un rayonnage, à hauteur d'enfant : *Mordace, onze ans : la maison.* Le bocal est fermé par trois cachets de cire. La lueur, dedans, est orange. Elle bouge comme un feu.",
    ],
    choices: [
      { label: "Laisser Ysolde ouvrir le sien", hide: { not: { present: "ysolde" } }, fx: { flag: "ysolde:lisse_rendu", conf: { ysolde: 10 } }, to: "V_t_ysolde_bocal" },
      { label: "Prendre le bocal de Mordace", fx: { item: "bocal_mordace", flag: "v:bocal_mordace" }, to: "V_t_cessions" },
      { label: "Revenir dans la salle", to: "V_t_cessions" },
    ] }),

  V_t_ysolde_bocal: P({ title: "Le pont, la nuit", place: "pallanche",
    text: [
      "Ysolde brise la cire avec son pouce. La lueur rouge monte, hésite, et entre en elle par les yeux.",
      "Elle ne tombe pas. Elle ne crie pas. Elle reste debout, dans le Bureau des Cessions, et pendant une minute elle est ailleurs : sur une rive, la nuit, avec une torche, et elle regarde.",
      "Quand elle revient, elle dit seulement : « Il y avait une petite fille avec une chèvre. Elle me regardait. » Puis : « Bien. Je l'ai. Je ne la rends plus. »",
    ],
    choices: [{ label: "Revenir dans la salle", to: "V_t_cessions" }] }),

  V_t_bocaux_ouverts: P({ title: "Les ruches", place: "pallanche",
    text: [
      "Tu prends le premier bocal et tu le brises par terre. La lueur monte, tourne, et file vers la porte, vers l'escalier, vers la place. Tu en brises un autre. Puis tes compagnons s'y mettent, à coups de canne, de pommeau, de talon.",
      "Ça dure une heure. À la fin, la salle est pleine de verre brisé et vide de lumière. Des milliers de lueurs sont sorties par les fenêtres, et sur la place aux Clercs, dans la queue, des gens commencent à pleurer, un par un, sans savoir pourquoi, puis à se souvenir pourquoi.",
      "La colonne blanche, au-dessus de la tour, a pâli. Un peu.",
    ],
    choices: [{ label: "Monter au scriptorium", to: "V_t_scriptorium" }] }),

  V_t_scriptorium: P({ title: "Le scriptorium", place: "pallanche",
    text: [
      "Au quatrième, les cent pupitres, les cent pages en gris. Elles écrivent. Toutes. Vite, sans s'arrêter, la même phrase, encore et encore, sur des feuilles qu'un greffier ramasse et monte par l'escalier, à mesure.",
      "Tu lis par-dessus une épaule. *Cédé à la Couronne, pour la paix de tous : ce qui fait mal.* Puis un nom. Puis la même phrase. Puis un autre nom. Elles recopient le Grand Livre des vivants, nom par nom, avec la formule devant.",
      { with: "linette", text: "Linette s'est arrêtée sur le seuil. « Je sais faire ça, dit-elle. Je l'ai fait toute la nuit, il y a quinze jours. » Elle regarde les pages. « Elles ne savent pas ce qu'elles écrivent. Moi je sais, maintenant. »" },
    ],
    choices: [
      { label: "Laisser Linette parler aux pages", hide: { not: { present: "linette" } }, to: "V_t_linette" },
      { label: "Redescendre chercher leurs noms, au deuxième", to: "V_t_gris" },
      { label: "Renverser les encriers", to: "V_t_encre" },
      { label: "Passer, et monter aux archives", to: "V_t_archives" },
    ] }),

  V_t_linette: P({ title: "Page Onze", place: "pallanche",
    text: [
      "Linette monte sur un pupitre, au milieu de la salle. Elle tape dans ses mains, deux coups secs, comme le maître des pages. Cent têtes rasées se lèvent.",
      "« Je m'appelle Linette, dit-elle. Avant, j'étais Page Onze. Vous aussi, vous avez un nom. Il est dans le registre gris, en bas, au deuxième. Je l'ai lu. Je les ai tous lus. » Elle saute du pupitre. Elle va de page en page, et à chacune, elle dit un nom, à l'oreille.",
      "Il y en a cent. Elle les sait tous. Les plumes s'arrêtent, une à une.",
    ],
    choices: [{ label: "Monter aux archives", fx: { flag: "v:pages_nommees", conf: { linette: 15, pie: 10 }, ep: ["perso", 2500] }, to: "V_t_archives" }] }),

  V_t_encre: P({ title: "L'encre", place: "pallanche",
    text: [{ if: { has: "v:pages_rate" }, text: "Tu lis. Tu butes. Les noms sortent de ta bouche déformés, cassés ; ce ne sont plus les leurs, ce sont des bruits. Au vingtième, tu t'arrêtes. Tu refermes le registre et tu le gardes. Quelqu'un, plus tard, saura les lire mieux que toi. En attendant, il reste l'encre." }, "Vous renversez les encriers, un par un. Les pages s'arrêtent, regardent leurs feuilles noyées, et attendent. Un greffier, au fond, se lève et va chercher de l'encre neuve, sans hâte. Il en reviendra avec un seau. Ça ne fera gagner qu'une heure. Une heure, c'est quelque chose."],
    choices: [{ label: "Monter aux archives", fx: { flag: "v:encre" }, to: "V_t_archives" }] }),

  V_t_archives: P({ title: "Les archives", place: "pallanche",
    text: [
      "Les archives, où Hylas a passé trente ans. Les rayonnages tournent en spirale autour de l'escalier, sur six étages. Et sur chaque palier, quelque chose bouge.",
      "Des Glaneurs. Pas des petits. Des Glaneurs au sceau noir, grands comme des hommes, qui descendent les rayonnages à l'envers, comme des araignées, et qui se placent entre toi et l'escalier.",
    ],
    choices: [
      { label: "Passer quand même", to: "V_t_glaneurs" },
      { label: "Leur donner autre chose à manger", hide: { not: { has: "iv:ossuaire=nourri" } }, to: "V_t_nourrir" },
      { label: "Prendre l'escalier des copistes, derrière les rayonnages", hide: { not: { has: "v:escalier_copistes" } }, to: "V_v_copistes" },
    ] }),

  V_t_glaneurs: P({ title: "Les gardiens des archives",
    combat: { title: "Les Glaneurs des archives", enemies: [{ id: "glaneur", n: 2 }, "glaneur_archives"], terrain: "ville", range: "contact",
      win: { fx: { ep: ["seance", 5000] }, to: "V_t_sommet" },
      lose: { fx: { pv: -6 }, to: "V_t_sommet" } },
    text: ["Ils attaquent ensemble, sans bruit, et dans leurs mains il y a des lueurs volées qui éclairent leur visage absent."],
    choices: [] }),

  V_t_sommet: P({ title: "Le cabinet", place: "pallanche",
    text: [
      "Le dernier escalier. Une porte ouverte. Le cabinet du Greffier-Majeur, sous la plume et la clé de fer. Il y fait chaud : un feu énorme brûle dans la cheminée.",
      "Le toit n'est plus là. Il a été soufflé vers le haut, et par l'ouverture monte la colonne blanche, droite, jusqu'au ciel, et au-delà. Au pied de la colonne, sur un lutrin, le Grand Livre, ouvert. Les feuilles des pages, montées par les greffiers, s'y collent d'elles-mêmes, une à une, et s'envolent en neige.",
      "Mordace écrit. Il ne se retourne pas.",
      { if: { has: "v:horloge" }, text: "Entre deux lignes, il lève la tête vers le clocher, comme quelqu'un qui attend un coup qui ne vient pas. Il compte sur ses doigts. Il recommence. Il fronce les sourcils, et il écrit plus vite." },
      { if: { item: "plateau_mordace" }, text: "Tu poses le plateau sur un coin du lutrin, à côté de sa main. La soupe fume. Il la regarde. Sa plume s'arrête, une seconde. Il reconnaît l'écriture du billet. Il ne dit rien. Il reprend sa plume. Mais il ne l'a pas repoussé." },
      "« Je savais que tu viendrais, dit-il. Assieds-toi près du feu. Tu dois avoir froid. Moi, j'ai toujours froid. »",
    ],
    choices: [{ label: "« Arrête. »", to: "V_t_mordace" }] }),

  V_t_mordace: P({ title: "Mordace", place: "pallanche",
    text: [
      { first: true, text: "« Je ne peux pas, dit-il, en écrivant. Ce n'est plus moi qui écris. C'est la digue. Ton père l'a lâchée, il y a un an. Moi, je la remplis. Tout ce qui fait mal, à tout le monde, en une nuit. Au matin, il n'y aura plus de guerre, ni de deuil, ni de honte. Plus de pont de Lisse. Plus de maison qui brûle. »" },
      { first: true, text: "Il s'arrête, la plume en l'air. « Il n'y aura plus rien à oublier. »" },
      { again: true, text: "Mordace a repris sa plume. Il écrit. Il ne se retourne toujours pas." },
      { first: true, if: { has: "lisse:cession" }, text: "« Tu m'as montré que ça marchait, à la Lisse. Corvanne dort bien, cette nuit. » Il reprend sa plume." },
      { first: true, if: { has: "lisse:paix" }, text: "« Tu as fait la paix sur la Lisse en faisant se souvenir deux armées. C'était beau. Ça tiendra trois ans. Peut-être cinq. Moi, je fais la paix pour toujours. »" },
    ],
    choices: [
      { label: "Le combattre", to: "V_t_combat" },
      { label: "Laisser Hylas lui parler", hide: { not: { present: "hylas" } }, to: "V_t_hylas" },
      { label: "Laisser Pie s'approcher du Grand Livre", hide: { not: { present: "pie" } }, to: "V_t_pie" },
      { label: "Lâcher Givre", hide: { not: { present: "givre" } }, if: { conf: "givre", min: 45 }, why: "Givre ne te fait pas encore assez confiance pour ça.", to: "V_t_givre" },
      { label: "Lui montrer le dessin de la cellule", hide: { any: [{ not: { item: "dessin_mordace" } }, { item: "bocal_mordace" }] }, fx: { drop: "dessin_mordace" }, to: "V_t_dessin" },
      { label: "Lui montrer la fiche de ses onze ans", hide: { any: [{ not: { item: "fiche_mordace" } }, { item: "bocal_mordace" }, { seen: "V_t_fiche" }] }, to: "V_t_fiche" },
      { label: "Lui rendre le bocal de ses onze ans", hide: { not: { item: "bocal_mordace" } }, fx: { drop: "bocal_mordace" }, to: "V_t_bocal" },
    ] }),

  V_t_combat: P({ title: "Le Greffier-Majeur",
    combat: { title: "Mordace", enemies: ["mordace", { id: "glaneur_petit", n: 2 }], terrain: "ville", range: "contact",
      win: { fx: { flag: "mordace:fin=tue", ep: ["seance", 8000] }, to: "V_t_mort" },
      lose: { fx: { pv: -8, flag: "mordace:fin=tue" }, to: "V_t_mort" } },
    text: ["Il pose la plume. Il se retourne. Il n'a pas d'arme. Il n'en a pas besoin : il lève la main, et ce que tu sais de toi commence à couler hors de toi, comme le sable d'un sac percé. Les Glaneurs descendent de la colonne."],
    choices: [] }),

  V_t_mort: P({ title: "Le froid", place: "pallanche",
    text: [
      "Il tombe à côté du lutrin. Il ne saigne presque pas. Il a froid, c'est tout. Il remonte son col de fourrure jusqu'au menton.",
      "« Tu n'as rien arrêté, dit-il. La plume continue sans moi. » Il a raison : sur le lutrin, la plume écrit toute seule, et les pages continuent de monter. « Il faut quelqu'un des deux côtés, pour fermer. Tu le sais. »",
      "Il ferme les yeux. Il meurt dans la seule pièce chaude de la ville, en grelottant.",
      { with: "hylas", text: "Hylas s'agenouille près de lui et lui ferme les yeux, à tâtons. Il dit son nom, son vrai nom, celui d'avant la Chancellerie, que personne n'a dit depuis trente ans. Un nom de la Lisse." },
    ],
    choices: [{ label: "Te tourner vers la colonne", to: "V_p_colonne" }] }),

  V_t_hylas: P({ title: "Le maître et l'apprenti", place: "pallanche",
    text: [
      "Hylas s'avance, en tâtant le parquet de sa canne. Il s'arrête à deux pas de Mordace.",
      "« Tu avais onze ans, dit-il. Tu m'as demandé de t'enlever ta maison qui brûlait. Je t'ai dit non. Je t'ai dit qu'il fallait la porter. Je ne t'ai jamais aidé à la porter. Je t'ai donné un pupitre, et du travail, et j'ai cru que c'était pareil. »",
      "Mordace a cessé d'écrire.",
      "« Je ne te demande pas d'arrêter, dit Hylas. Je te demande de me la montrer. Ta maison. Je ne l'ai jamais vue. Je suis aveugle, et toi tu ne l'as jamais regardée. On pourrait la regarder ensemble. »",
    ],
    choices: [
      { label: "Les laisser", test: { dom: "social", label: "Hylas", help: [{ if: { conf: "hylas", min: 50 }, v: 20 }, { if: { item: "bocal_mordace" }, v: 25 }, { if: { has: "v:cloche" }, v: 10 }, { if: { item: "plateau_mordace" }, v: 10 }, { if: { has: "v:liseurs" }, v: 5 }, { if: { has: "enfant:pardonne_hylas" }, v: 10 }, { if: { has: "proces:plume=rendu" }, v: 10 }] },
        win: { fx: { flag: "mordace:fin=pardonne", conf: { hylas: 20 }, ep: ["perso", 6000] }, to: "V_t_pardonne" },
        lose: { to: "V_t_combat" } },
    ] }),

  V_t_pardonne: P({ title: "La maison", place: "pallanche",
    text: [
      "Mordace pose la plume. Il regarde ses mains. Il dit, très bas, avec une voix d'enfant : « Elle avait des volets bleus. »",
      { with: "hylas", text: "Hylas hoche la tête. « Raconte. »" },
      { without: "hylas", text: "Tu dis : « Raconte. »" },
      "Il raconte. Les volets bleus, le figuier dans la cour, sa mère qui chantait faux en lavant, la nuit où les soldats sont venus, de quel côté de la Lisse il ne sait plus. Ça dure longtemps. Il pleure à la fin, sans bruit, et il dit : « J'ai chaud. » Il a l'air étonné.",
      "Sur le lutrin, la plume continue d'écrire toute seule. Ça, il ne peut plus l'arrêter. Mais il se lève, et il vient se mettre à côté de toi, devant la colonne. « Je vais t'aider, dit-il. Je connais le livre mieux que personne. Je l'ai écrit. »",
    ],
    choices: [{ label: "Te tourner vers la colonne", fx: { flag: "mordace:aide" }, to: "V_p_colonne" }] }),

  V_t_pie: P({ title: "Le faussaire", place: "pallanche",
    text: [
      "Pendant que Mordace parle, Pie s'est glissé jusqu'au lutrin, comme on se glisse jusqu'à une poche. Mordace ne le voit pas. Personne ne voit jamais Pie quand il ne veut pas.",
      "Il prend une plume sur la table. Il la trempe. Et sur une feuille vierge, de l'écriture exacte de Mordace, penchée, débordant des lignes, avec le paraphe et le sceau, il écrit une ligne.",
      "Il la glisse dans le Grand Livre, à la page en cours, juste sous la main de Mordace.",
    ],
    choices: [
      { label: "Le laisser faire", fx: { flag: "mordace:fin=cede", conf: { pie: 15 }, ep: ["perso", 6000] }, to: "V_t_cede" },
      { label: "L'arrêter. Personne ne mérite ça", fx: { conf: { pie: -5 } }, to: "V_t_mordace" },
    ] }),

  V_t_cede: P({ title: "Mordace, cédé", place: "pallanche",
    text: [
      "*Mordace, Greffier-Majeur : cédé, pour la paix de tous, en entier.*",
      "La feuille se colle au Grand Livre, comme les autres. Elle s'envole en neige, comme les autres.",
      "Mordace s'arrête d'écrire. Il regarde sa plume. Il regarde la pièce, le feu, la colonne, toi. Il a l'air poli, intéressé, un peu perdu. « Pardon, dit-il. Je crois que je me suis trompé d'étage. » Il pose la plume. Il descend l'escalier, sans hâte, un homme maigre dans une robe trop chaude, et en bas, sur la place, il ira se ranger dans la queue, et il sourira.",
      "Pie repose la plume sur la table, très soigneusement. « C'était mon meilleur faux, dit-il. Je ne le referai jamais. »",
      "Sur le lutrin, le Grand Livre continue de s'écrire tout seul.",
    ],
    choices: [{ label: "Te tourner vers la colonne", to: "V_p_colonne" }] }),

  V_t_givre: P({ title: "Givre", place: "pallanche",
    text: [
      "Tu poses la main sur le dos de Givre. Il a la taille d'un loup, maintenant, et ses yeux de glace brillent. Il a mangé tes miettes pendant un an.",
      "Tu lui dis : « Va. » Il traverse la pièce en deux bonds, il se dresse contre Mordace, et il mord. Pas la chair. Le froid. Il le mord au col, là où Mordace tient sa fourrure fermée, et il tire, et il sort de lui quelque chose de blanc, de long, de très vieux, comme une écharpe de givre, et il l'avale.",
      "Mordace tombe à genoux. Il ouvre son col. Il respire. « J'ai chaud », dit-il, et il a l'air terrifié.",
      "Givre revient s'asseoir à tes pieds. Il a doublé de taille. Sa queue est toute grise.",
    ],
    choices: [{ label: "Regarder Mordace", fx: { flag: "mordace:fin=rechauffe", conf: { givre: 15 }, ep: ["perso", 6000] }, to: "V_t_rechauffe" }] }),

  V_t_rechauffe: P({ title: "Le chaud", place: "pallanche",
    text: [
      "Il a les joues rouges. Il pleure, à cause de la chaleur, comme un enfant qui rentre de la neige. Il ne peut plus écrire : ses mains tremblent trop.",
      "« Il y avait un figuier, dit-il. Dans la cour. » Il ne dit rien d'autre. Il se recroqueville près du feu, et il ne fait plus attention à toi.",
      "Sur le lutrin, la plume continue d'écrire toute seule.",
    ],
    choices: [{ label: "Te tourner vers la colonne", to: "V_p_colonne" }] }),

  V_t_bocal: P({ title: "Onze ans", place: "pallanche",
    text: [
      "Tu poses le bocal sur le lutrin, sur le Grand Livre, sous sa main. *Mordace, onze ans : la maison.* La lueur orange bat contre le verre comme un cœur.",
      "Il le regarde. Il ne le touche pas. « Je l'ai fermé moi-même, dit-il. Trois cachets. Je l'ai cédé à mon propre bureau, le jour où j'en ai eu un. »",
      "Tu brises la cire. La lueur sort, et entre en lui, et il ne recule pas.",
      "Pendant longtemps, il ne dit rien. La plume, dans sa main, ne bouge plus.",
    ],
    choices: [{ label: "Attendre", fx: { flag: "mordace:fin=pardonne" }, to: "V_t_pardonne" }] }),
};
