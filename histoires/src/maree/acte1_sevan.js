// Les Fils de la Marée · act I, the night and the morning: Sévan Aldric at the Doyenne's bedside, then the body.
// What he decides here shapes his whole book: the poppy given or taken (pavot), the traces of the night washed or
// left (traces), the salt-cellar and the blue flask (saliere, fiole), Nella warned or not (nella=libre when she runs),
// and the report he signs (rapport = naturelle | poison | temple | public), which sends his act II to four different
// places: his own rooms watched by Morvan, the trail of the poison, the Temple's cellars, or a cell of the Tour du Guet.
var T = { fuite: { has: "nella=libre" } };
module.exports = {
  P_nuit: { act: "I", title: "Deux heures, au palais", place: "palais", ambiance: "chateau",
    fx: { assign: { sevan: "sevan", jasse: "jasse", oriane: "oriane" }, set: { clef1: "oriane", clef2: "sevan", clef3: "ponton", nella: "palais" } },
    text: [
      "On a frappé à ta porte de l'hospice à une heure et demie. Un valet du palais, en livrée trempée jusqu'aux genoux : la marée monte déjà dans les rues basses, et il a pris le chemin de Bas-Port en courant. « La Doyenne vous demande, maître Aldric. Vous seul. »",
      "Tu as pris ta sacoche, ton manteau, et la barque du Temple. La lagune était noire et lisse. Sur les Passes, au loin, les fanaux de la flotte d'Orcanne faisaient une ligne de points jaunes, comme une rue posée sur la mer.",
      "Maintenant tu montes le petit escalier de service, celui qui sent la cire et le pain. Tu as cinquante et un ans, des genoux qui craquent, et tu soignes Ermesinde Valcor depuis onze ans. Depuis la Saint-Martin, tu la confesses aussi. Elle a choisi un médecin plutôt qu'un prêtre pour ça. Elle a dit : « Toi, au moins, tu sais ce qu'est un corps. »",
      "La porte de la chambre est entrouverte. Une seule chandelle brûle. La Doyenne est assise dans son lit, le dos contre trois oreillers, les mains posées à plat sur le drap.",
    ],
    choices: [{ label: "Entrer", to: "P_chevet" }] },

  P_chevet: { act: "I", title: "Les mains d'Ermesinde", place: "palais",
    fx: { clue: "ongles", meet: "ermesinde" },
    text: [
      "« Ferme la porte. » Sa voix est restée la même, une voix de séance, faite pour aller jusqu'au fond de la salle du Conseil. Le reste d'elle a fondu depuis l'automne. Les joues, les épaules, les cheveux qu'on retrouve en poignées sur l'oreiller.",
      "« Approche la chandelle. Regarde mes mains. »",
      "Tu prends ses mains. Elles sont froides et légères. En travers de chaque ongle court une strie blanche, nette, à la même hauteur sur les dix doigts, comme un trait tiré à la règle. Tu en as vu de pareilles une fois, à l'hospice, sur un teinturier qui manipulait l'orpiment. Le teinturier est mort en trois semaines.",
      "« Tu l'as vu il y a dix jours, dit-elle. Tu n'as rien dit. Moi non plus. On est deux vieux lâches. » Elle sourit. « On me sale, Sévan. Depuis l'automne. Je sais qui, je crois savoir comment, et je n'ai pas de preuve qu'un Conseil acceptera. J'ai mis ce que je sais dans le coffre. »",
      "Elle serre tes doigts. « Je n'ai plus que des semaines, et ce seront de mauvaises semaines. Je ne veux pas les leur donner. Tu as du lait de pavot dans ta sacoche. Prépare-le. Assez. »",
    ],
    choices: [
      { label: "Préparer le lait de pavot", to: "P_donne", big: true, fx: { set: { pavot: "donne" } } },
      { label: "Refuser", to: "P_refus", big: true },
    ] },

  P_donne: { act: "I", title: "Le lait de pavot", place: "palais",
    text: [
      "Tu poses la sacoche sur la table de nuit. Tes mains font ce qu'elles savent faire : le gobelet d'étain, l'eau tiède du broc, la fiole brune, le compte des gouttes. Tu comptes à voix basse. À vingt, d'ordinaire, tu t'arrêtes. Tu vas jusqu'à quatre-vingts.",
      "Elle boit lentement, en grimaçant. « C'est amer. Tu aurais pu y mettre du miel. » Puis elle se laisse aller contre les oreillers.",
      "« Écoute bien, maintenant, pendant que j'ai encore ma tête. Le coffre de la Chambre des Sceaux. Trois serrures. La clef d'argent est à Oriane. La clef de fer, tu l'as : je te l'ai donnée à toi, et le père Anselme ne me le pardonnera pas. La clef de bronze, je l'ai confiée à quelqu'un qui ne sait pas ce qu'elle ouvre. Le coffre doit s'ouvrir devant le Conseil, avant les lanternes. Avec ses trois clefs. Un coffre forcé ne vaut rien devant la loi. »",
      "Ses yeux se ferment, se rouvrent. « Ce que je t'ai dit en confession, à la Saint-Martin, tu le gardes. Jusqu'au coffre. Après, fais ce que tu crois juste. » Puis, plus bas : « Elle ne sait rien. Protège-la. »",
      "Elle s'endort vers trois heures. Tu gardes sa main. Son souffle s'espace, s'arrête, reprend, s'arrête. À quatre heures moins le quart, il ne reprend plus.",
    ],
    choices: [{ label: "Rester près d'elle jusqu'au jour", to: "P_aube", fx: { until: 5 } }] },

  P_refus: { act: "I", title: "Ce que tu ne feras pas", place: "palais",
    fx: { set: { pavot: "pris" } },
    text: [
      "« Je ne peux pas. » Tu entends ta propre voix, et elle sonne comme celle d'un novice. « Je vous donnerai de quoi dormir. Vingt gouttes. Pas plus. »",
      "Elle te regarde longtemps. « Alors reste. Assieds-toi là. Je n'aime pas la nuit toute seule. »",
      "Tu t'assieds dans le fauteuil. Elle parle. Le coffre de la Chambre des Sceaux, ses trois serrures. La clef d'argent d'Oriane. La clef de fer qu'elle t'a donnée à toi, au lieu du Temple, « et Anselme ne me le pardonnera pas ». La clef de bronze, « confiée à quelqu'un qui ne sait pas ce qu'elle ouvre ». Le coffre ouvert devant le Conseil, avant les lanternes, avec ses trois clefs, « parce qu'un coffre forcé ne vaut rien devant la loi ».",
      "« Ce que je t'ai dit à la Saint-Martin, tu le gardes jusqu'au coffre. Elle ne sait rien. Protège-la. »",
      "Elle se tait. Tu lui donnes les vingt gouttes. La chandelle baisse. La chaleur de la chambre, la fatigue, le bruit de la marée contre le quai : tu fermes les yeux une minute.",
      "Quand tu les rouvres, la fenêtre est grise. La chandelle est morte. Ta sacoche est ouverte sur la table de nuit, la fiole brune est vide à côté du gobelet, et Ermesinde Valcor est morte, les mains croisées sur le drap. Sur l'ardoise où elle notait ses rendez-vous, d'une écriture qui descend en travers : *Pardonne-moi d'avoir fouillé ta sacoche.*",
    ],
    choices: [{ label: "Te lever", to: "P_aube", fx: { until: 5 } }] },

  P_aube: { act: "I", title: "Avant la cloche", place: "palais",
    text: [
      "Il est cinq heures et demie. Dans une demi-heure, Nella montera l'eau chaude, comme chaque matin. Dans une heure, tout le palais sera dans cette chambre.",
      "Sur la table de nuit : le gobelet d'étain, avec au fond un dépôt brun. La fiole de pavot, vide.",
      { if: { has: "pavot=pris" }, text: "L'ardoise, et ses sept mots en travers." },
      "Le règlement du Temple est clair. Le médecin qui constate une mort décrit ce qu'il a trouvé et ce qu'il a fait. Ce que tu as trouvé, tu le sais. Ce que tu as fait, cette nuit, aucun règlement ne l'a prévu.",
    ],
    choices: [
      { label: "Laver le gobelet, ranger la fiole, effacer toute trace de la nuit", to: "P_traces", fx: { set: { traces: "effacees" } }, big: true },
      { label: "Laisser tout comme c'est, et sonner", to: "P_cloche", fx: { set: { traces: "laissees" } }, big: true },
    ] },

  P_traces: { act: "I", title: "L'eau du broc", place: "palais", fx: { until: 6 },
    text: [
      "Tu rinces le gobelet dans l'eau du broc, deux fois. Tu essuies l'étain avec ton mouchoir. La fiole retourne dans la sacoche, dans son étui de cuir.",
      { if: { has: "pavot=pris" }, text: "Tu prends l'ardoise. Tu mouilles ton pouce, et les sept mots deviennent une tache grise. Tu frottes jusqu'à ce que la tache disparaisse aussi." },
      "Puis tu ouvres la fenêtre. L'air de la lagune entre, froid, salé. Les cloches de Sainte-Agathe sonnent six heures, et toute la ville se réveille pour le premier jour des Hautes-Eaux.",
      "Tu tires le cordon de la sonnette.",
    ],
    choices: [{ label: "Attendre qu'on vienne", to: "S1_chambre" }] },

  P_cloche: { act: "I", title: "La sonnette", place: "palais", fx: { until: 6 },
    text: [
      "Tu tires le cordon de la sonnette. Quelque part dans le palais, une clochette tinte au bout de son fil.",
      "Tu laisses le gobelet, la fiole, la chandelle morte, comme on laisse un lieu après un accident. Celui qui viendra verra ce que tu as vu. Tu n'as jamais su mentir avec les mains.",
      "Les cloches de Sainte-Agathe sonnent six heures, et toute la ville se réveille pour le premier jour des Hautes-Eaux.",
    ],
    choices: [{ label: "Attendre qu'on vienne", to: "S1_chambre" }] },

  // ---------------------------------------------------------------- the morning: the body, the room, the people
  S1_chambre: { act: "I", title: "La chambre de la Doyenne", place: "palais", hub: true, noLead: true, backName: "la chambre de la Doyenne",
    text: [
      { first: true, text: "Nella arrive la première, un broc d'eau chaude dans les bras. Elle a dix-neuf ans, des taches de son sur le nez, des tresses noires roulées sous un bonnet. Elle voit le lit. Le broc tombe, l'eau fume sur le carrelage. Elle ne crie pas. Elle s'agenouille contre le lit et prend la main de la morte, comme toi tout à l'heure." },
      { first: true, text: "Ensuite, tout va vite. La capitaine du Guet, Ysabeau Dorne, en corselet, la balafre blanche de sa joue plus blanche que d'habitude. Le père Anselme, Grand Prêtre de la Marée, en robe verte, qui touche le front de la morte et dit la prière des noyés, puisque toute mort à Escalombre est une noyade. Puis, à sept heures, Hugues Morvan, le Grand Argentier, avec derrière lui un jeune homme blond à lunettes, les doigts tachés d'encre : Léonce Brisard, l'apothicaire de la Maison des Sels." },
      { again: true, text: "La chambre est pleine de gens qui parlent bas. Le corps est sous le drap, sauf le visage." },
      { if: { has: "traces=laissees" }, text: "Le gobelet et la fiole vide sont toujours sur la table de nuit. Léonce Brisard les a regardés en entrant, puis il a regardé ailleurs." },
      { before: "S1_morvan", text: "Morvan s'entretient à voix basse avec la capitaine, près de la fenêtre. Il a demandé à te parler « quand tu auras fini »." },
      { after: "S1_morvan", before: "S1_arrest", text: "La capitaine Dorne attend ton rapport. Elle a dit qu'elle le voulait avant la séance du Conseil, ce soir." },
      { after: "S1_arrest", text: "La porte de service bat encore. Nella n'est plus là." },
    ],
    choices: [
      { label: "Examiner le corps, comme un médecin", to: "S1_examen", hide: { seen: "S1_examen" } },
      { label: "Regarder le plateau du soir, resté sur la commode", to: "S1_plateau", hide: { seen: "S1_plateau" } },
      { label: "Parler à Nella, seule", to: "S1_nella", hide: { any: [{ seen: "S1_nella" }, { seen: "S1_arrest" }] } },
      { label: "Monter à la chambre de Nella, sous les toits", to: "S1_mansarde", hide: { any: [{ seen: "S1_mansarde" }, { seen: "S1_arrest" }] } },
      { label: "Répondre au père Anselme, qui te fait signe", to: "S1_anselme", hide: { seen: "S1_anselme" } },
      { label: "Aller voir ce que veut Hugues Morvan", to: "S1_morvan", hide: { seen: "S1_morvan" } },
      { label: "Écrire ton rapport", to: "S1_rapport", if: { seen: "S1_arrest" }, why: "Morvan attend encore de te parler.", big: true },
    ] },

  S1_examen: { act: "I", title: "Ce que dit un corps", place: "palais",
    fx: { clue: "haleine" },
    text: [
      "Tu demandes qu'on te laisse le lit. Anselme recule d'un pas, Ysabeau de deux, Morvan reste où il est.",
      "Tu examines Ermesinde comme tu examinerais une inconnue de l'hospice. Les ongles, déjà vus. Les cheveux, qui viennent par mèches entières quand tu passes la main. La peau du ventre, sèche, fendillée, avec des plaques brunes. Tu te penches sur la bouche : une odeur d'ail. La Doyenne avait horreur de l'ail. Son cuisinier le savait depuis vingt ans.",
      "Tout cela raconte des mois. Une poudre blanche, un peu chaque jour, dans quelque chose qu'elle mangeait seule.",
      "Et sous tout cela, dans les pupilles réduites à des têtes d'épingle, dans le teint gris des lèvres, il y a la nuit. Le pavot. Un médecin le verrait s'il le cherchait. Le seul médecin dans cette chambre, c'est toi.",
    ],
    choices: [
      { label: "Prélever des rognures d'ongles et une mèche, en cachette", to: "S1_examen_preuve", test: { dom: "discretion", diff: 0, label: "Discrétion" },
        win: { to: "S1_examen_preuve" }, lose: { to: "S1_examen_vu" } },
      { back: "S1_chambre" },
    ] },
  S1_examen_preuve: { act: "I", title: "Un papier plié", place: "palais",
    fx: { item: "preuve_ongles", ep: 200 },
    text: [
      "Tu tournes le dos à la chambre pour remonter le drap. Tes ciseaux coupent trois ongles, ta main prend une mèche sur l'oreiller. Le tout va dans un papier plié en quatre, et le papier dans la doublure de ta manche.",
      "Une rognure striée de blanc, ça se garde des années. Un jour, quelqu'un d'autre que toi pourra la regarder.",
    ],
    choices: [{ back: "S1_chambre" }] },
  S1_examen_vu: { act: "I", title: "Les ciseaux", place: "palais",
    fx: { item: "preuve_ongles", set: { leonce_voit: "ongles" } },
    text: [
      "Tu coupes trois ongles, tu prends une mèche, tu plies le papier. En te retournant, tu croises les lunettes de Léonce Brisard. L'apothicaire te regarde ranger le papier dans ta manche. Il a les mains croisées dans le dos.",
      "Il sourit poliment, comme on sourit à un confrère, et se penche vers Morvan pour lui dire quelque chose à l'oreille.",
    ],
    choices: [{ back: "S1_chambre" }] },

  S1_plateau: { act: "I", title: "Le plateau du soir", place: "palais",
    fx: { clue: "livraison" },
    text: [
      "Sur la commode, le plateau de la veille : un bol de bouillon figé, un morceau de pain, une pomme entamée, et la salière d'argent, la petite, en forme de coquille, que la Doyenne gardait pour elle. Ermesinde salait tout. Elle disait que c'était la seule vertu des gens de lagune.",
      "Tu soulèves le couvercle. Le sel est fin et très blanc. Le sel d'Escalombre est gris et gros, il crisse sous le doigt. Celui-là glisse.",
      { text: "« Le sel venait de chez nous, dit une voix polie derrière toi. Un pot par semaine, scellé. La Doyenne aimait notre fleur de sel. » Léonce Brisard est là, à deux pas, les mains dans le dos. Il regarde la salière. Puis il te regarde, toi." },
    ],
    choices: [
      { label: "Glisser la salière dans ta sacoche sans qu'il le voie", test: { dom: "discretion", diff: -10, label: "Discrétion" },
        win: { fx: { item: "saliere", clue: "saliere", set: { saliere: "sevan" }, ep: 200 }, to: "S1_plateau_pris" }, lose: { fx: { set: { saliere: "leonce" } }, to: "S1_plateau_rate" } },
      { label: "Reposer le couvercle, et laisser la salière où elle est", fx: { set: { saliere: "leonce" } }, to: "S1_plateau_laisse" },
    ] },
  S1_plateau_pris: { act: "I", title: "Une coquille d'argent", place: "palais",
    text: [
      "Tu te tournes vers Léonce pour lui demander à quelle heure on a monté ce plateau. Pendant qu'il répond, ta main gauche fait passer la salière de la commode à la sacoche ouverte à tes pieds. Une coquille d'argent pèse le poids d'une grosse noix.",
      "Le plateau a été monté à neuf heures, par Nella, comme tous les soirs. Léonce le dit deux fois, en détachant le nom.",
    ],
    choices: [{ back: "S1_chambre" }] },
  S1_plateau_rate: { act: "I", title: "L'argenterie", place: "palais",
    text: [
      "Ta main se referme sur la salière. Léonce, aimablement : « Vous emportez l'argenterie de la Doyenne, maître Aldric ? La capitaine Dorne va vouloir un inventaire. »",
      "Tu reposes la salière. Il te remercie d'un signe de tête, prend le plateau entier, et l'emporte vers l'office « pour qu'on ne mange pas ces restes ». Personne ne l'arrête. Il fait des choses ordinaires avec beaucoup d'assurance.",
    ],
    choices: [{ back: "S1_chambre" }] },
  S1_plateau_laisse: { act: "I", title: "Le couvercle", place: "palais",
    text: [
      "Tu reposes le couvercle. Léonce te remercie d'un signe de tête, comme si tu lui avais rendu un service, prend le plateau entier, et l'emporte vers l'office « pour qu'on ne mange pas ces restes ».",
      "Une heure plus tard, en repassant, tu verras la commode vide.",
    ],
    choices: [{ back: "S1_chambre" }] },

  S1_nella: { act: "I", title: "Nella", place: "palais",
    fx: { meet: "nella" },
    text: [
      "Tu la trouves dans le cabinet de toilette, assise sur le coffre à linge, le bonnet dans les mains. Elle a cessé de pleurer. Elle a le visage des gens qui comptent.",
      "« Je n'ai servi que le bouillon et le sel, maître. Comme tous les soirs. Le pain, la pomme, le bouillon, le sel. Elle salait tout. » Elle lève les yeux vers toi. « Ils vont dire que c'est moi. »",
      "Tu regardes ses yeux gris, son menton. À la Saint-Martin, dans cette chambre, Ermesinde t'a dit d'où venait cette fille. Tu as juré de le garder jusqu'au coffre.",
    ],
    choices: [
      { label: "Lui demander si elle a vu quelqu'un d'autre près des cuisines, hier soir", to: "S1_nella_leonce", hide: { seen: "S1_nella_leonce" } },
      { label: "Lui dire de partir. Tout de suite, par la porte de l'eau, chez son frère", to: "S1_nella_fuite", big: true },
      { label: "Lui dire de rester calme, et que la vérité se saura", to: "S1_nella_reste" },
    ] },
  S1_nella_leonce: { act: "I", title: "La porte de l'eau", place: "palais",
    fx: { clue: "leonce_cuisine" },
    text: [
      "Elle hésite. Puis elle le dit très bas, en regardant la porte. « Vers onze heures, je suis redescendue chercher la bassinoire. L'apothicaire de la Maison des Sels sortait de la cuisine. Par la porte de l'eau, celle des livreurs. Il m'a dit bonsoir. Il a dit qu'il apportait le pot de sel de la semaine. Le pot de la semaine, il arrive le lundi. On était jeudi. »",
      "Elle se tait. Dans la chambre, à côté, Léonce Brisard rit poliment à quelque chose que dit Morvan.",
    ],
    choices: [{ back: "S1_nella" }] },
  S1_nella_fuite: { act: "I", title: "La porte de l'eau", place: "palais",
    fx: { set: { nella: "libre", nella_par: "sevan" }, flag: "sevan:averti" },
    text: [
      "« Va-t'en. Maintenant. Pas par l'escalier : par la cuisine et la porte de l'eau. Va chez ton frère. Ne reviens pas au palais avant que je te fasse dire. »",
      "Elle te regarde. Elle comprend vite ; c'est ce que la Doyenne aimait chez elle. Elle remet son bonnet, prend son châle, et descend l'escalier de service sans courir.",
      "Quand tu reviens dans la chambre, personne n'a rien remarqué. Une servante, ça sort d'une pièce. Il faudra une heure à quelqu'un pour demander où elle est.",
    ],
    choices: [{ back: "S1_chambre" }] },
  S1_nella_reste: { act: "I", title: "La vérité se saura", place: "palais",
    text: [
      "« Reste calme. Dis ce que tu as fait, rien de plus. La vérité se saura. »",
      "Elle hoche la tête. Elle a l'air de te croire. C'est le pire.",
    ],
    choices: [{ back: "S1_chambre" }] },

  S1_mansarde: { act: "I", title: "Sous les toits", place: "palais",
    text: [
      "Les servantes dorment sous les toits, dans des chambres où l'on ne tient debout qu'au milieu. Celle de Nella sent la lavande et le linge humide. Un lit étroit, une cuvette, une Vierge de plâtre peinte en bleu, une boîte à couture.",
      "Tu soulèves la paillasse. Rien. Tu passes la main entre la paillasse et le cadre, du côté du mur. Tes doigts touchent du verre.",
      "Un flacon bleu, bouché de cire, plein d'une poudre blanche. Dans la cire, l'empreinte nette d'un pouce, et dans l'empreinte, de l'encre.",
    ],
    choices: [
      { label: "Prendre le flacon", fx: { item: "fiole_blanc", clue: "fiole", set: { fiole: "sevan" }, ep: 200 }, to: "S1_mansarde_pris", big: true },
      { label: "Le remettre en place et redescendre", fx: { clue: "fiole", set: { fiole: "garde" } }, to: "S1_mansarde_laisse" },
    ] },
  S1_mansarde_pris: { act: "I", title: "Le flacon bleu", place: "palais",
    text: [
      "Le flacon va dans la poche intérieure de ton manteau, contre la clef de fer. Tu remets la paillasse comme tu l'as trouvée.",
      "Quelqu'un l'a glissé là cette nuit, ou ce matin. Quelqu'un qui savait que la chambre de Nella serait fouillée. Il comptera le retrouver.",
    ],
    choices: [{ back: "S1_chambre" }] },
  S1_mansarde_laisse: { act: "I", title: "La paillasse", place: "palais",
    text: [
      "Tu remets le flacon exactement où il était, la paillasse par-dessus. Une preuve déplacée par le médecin de la Doyenne, ça s'appelle une preuve fabriquée. Il vaut mieux qu'Ysabeau Dorne la trouve elle-même, avec ses gens, devant témoins. Et qu'elle voie l'encre dans la cire.",
      "Tu redescends. Sur le palier, tu croises le jeune Léonce qui monte, un trousseau de clefs du palais à la main.",
    ],
    choices: [{ back: "S1_chambre" }] },

  S1_anselme: { act: "I", title: "Le Grand Prêtre", place: "palais",
    fx: { meet: "anselme" },
    text: [
      "Le père Anselme t'attend dans l'embrasure d'une fenêtre. Soixante-dix ans, le crâne rasé, des yeux pâles qui tombent aux coins. Il a été ton maître au Temple quand tu avais vingt ans. Il ne l'oublie jamais, et toi non plus.",
      "« Tu étais là, cette nuit. » Ce n'est pas une question. « On t'a fait chercher à une heure et demie, et pas moi. »",
      "Puis, plus bas : « La clef de fer. La clef du Temple. Elle était dans le tabernacle de la chapelle depuis cent ans. À la Saint-Martin, la Doyenne l'a fait prendre. Le sacristain dit qu'elle l'a donnée à quelqu'un. Je crois savoir à qui. »",
    ],
    choices: [
      { label: "« Elle me l'a donnée. Je la porterai au Conseil, comme elle l'a voulu. »", fx: { flag: "anselme:sait_clef", regard: { anselme: "mefiant" } }, to: "S1_anselme_fin" },
      { label: "« Je n'en sais rien, mon père. »", fx: { flag: "anselme:menti", regard: { anselme: "mefiant" } }, to: "S1_anselme_fin" },
    ] },
  S1_anselme_fin: { act: "I", title: "Le Grand Prêtre", place: "palais",
    text: [
      { if: { has: "anselme:sait_clef" }, text: "Anselme ferme les yeux un instant. « Elle a toujours aimé humilier le Temple. Elle le fait encore morte. » Il pose la main sur ton bras, légèrement. « Le Temple a six sièges au Conseil, Sévan. Et une clef qui lui appartient. Pense à ce que tu dois au Temple. »" },
      { if: { has: "anselme:menti" }, text: "Anselme sourit, de ce sourire qui te faisait trembler à vingt ans. « Bien sûr. » Il pose la main sur ton bras, légèrement. « Si jamais tu en apprenais quelque chose, tu te souviendrais que le Temple a six sièges au Conseil, et une clef qui lui appartient. »" },
      "Il s'en va vers le lit dire une autre prière, à voix haute, pour que tout le monde l'entende.",
    ],
    choices: [{ back: "S1_chambre" }] },

  S1_morvan: { act: "I", title: "Le Grand Argentier", place: "palais",
    fx: { meet: ["morvan", "leonce", "ysabeau"], time: 1 },
    text: [
      "Hugues Morvan est un homme lourd, avec une barbe grise taillée court et des yeux bleus très calmes. Il porte le deuil depuis une heure : un manteau noir doublé de fourrure de loutre, cousu pour un autre deuil et gardé prêt.",
      "« Maître Aldric. Quelle nuit pour vous. » Il te prend le coude et t'emmène vers la fenêtre. Dehors, la lagune est haute, verte, et les premières barques masquées descendent le Grand Canal en chantant.",
      "« La capitaine Dorne voudra un rapport. Le Conseil aussi. Je ne suis pas médecin. Mais j'ai vu ses mains, comme vous. » Il baisse la voix. « On l'a empoisonnée, n'est-ce pas ? Une petite main, sans doute. Quelqu'un qui portait ses plateaux. »",
      { if: { has: "traces=laissees" }, text: "Il glisse la main dans son manteau et en sort, entre deux doigts, ta fiole de pavot vide. « Léonce l'a ramassée sur la table de nuit, pour éviter un malentendu. Un médecin qui laisse traîner son pavot au chevet d'une morte, les gens bavardent. Je la garde. Vous voyez ? Je vous rends service. » Il la remet dans sa poche." },
      { if: { has: "leonce_voit=ongles" }, text: "« Léonce me dit que vous avez pris des souvenirs. Des ongles. C'est touchant. Vous me les montrerez, un jour. »" },
      "« Écrivez ce que vous avez vu, maître. Le poison. Le reste regarde la capitaine. »",
    ],
    choices: [{ label: "Le laisser parler, et revenir près du lit", to: "S1_arrest_br" }] },
  S1_arrest_br: { branch: [
    { if: { has: "nella=libre" }, to: "S1_arrest" },
    { fx: { set: { nella: "prison" } }, to: "S1_arrest" },
  ] },

  S1_arrest: { act: "I", title: "La fouille", place: "palais",
    text: [
      { if: T.fuite, text: "Vers neuf heures, la capitaine Dorne demande où est la servante qui portait les plateaux. On la cherche à l'office, à la lingerie, sous les toits. Une laveuse dit l'avoir vue descendre vers la porte de l'eau, son châle sur la tête. Ysabeau Dorne envoie quatre gardes à Bas-Port. Morvan dit : « Une innocente ne s'enfuit pas. » Il le dit doucement, à la cantonade, pour que les murs l'apprennent." },
      { if: { all: [T.fuite, { has: "fiole=garde" }] }, text: "Une heure plus tard, un garde redescend des combles avec un flacon bleu trouvé sous la paillasse de la fugitive. Léonce Brisard, qui l'accompagnait, dit en le voyant : « Du blanc d'Orcanne. On en vend pour les rats. » Ysabeau Dorne prend le flacon et le tourne longtemps vers la fenêtre, le pouce sur la cire." },
      { if: { not: T.fuite }, text: "Vers neuf heures, Léonce Brisard monte aux combles « pour aider le Guet », avec deux gardes. Il redescend un quart d'heure plus tard." },
      { if: { all: [{ not: T.fuite }, { has: "fiole=garde" }] }, text: "Un garde tient un flacon bleu trouvé sous la paillasse de Nella. « Du blanc d'Orcanne, dit Léonce. On en vend pour les rats. » La capitaine prend le flacon, le tourne longtemps vers la fenêtre, le pouce sur la cire. Puis elle dit : « Nella Ferrant, tu viens avec nous. » Nella ne dit rien. Elle te regarde en passant, une seule fois." },
      { if: { all: [{ not: T.fuite }, { not: { has: "fiole=garde" } }] }, text: "Ils n'ont rien trouvé. Léonce a l'air contrarié, comme un homme qui a perdu ses clefs. Morvan, lui, ne se trouble pas : « Elle portait le sel. Elle a eu toute la nuit pour jeter ce qu'il fallait. » La capitaine hésite longtemps. Puis elle dit : « Nella Ferrant, tu viens avec nous. Pour tes réponses. » Nella te regarde en passant, une seule fois." },
      { if: { not: T.fuite }, text: "On l'emmène à la Tour du Guet. Le transfert se fera par l'eau, à une heure, par le canal des Sels, quand la barque de la prison sera revenue." },
    ],
    choices: [{ back: "S1_chambre" }] },

  // ---------------------------------------------------------------- the report
  S1_rapport: { act: "I", title: "Le rapport", place: "palais", fx: { until: 11 },
    text: [
      "On t'a donné le petit cabinet de la Doyenne pour écrire, avec son encre et son sable. La plume a son odeur de violette. Onze heures sonnent à Sainte-Agathe.",
      "Le rapport du médecin du Temple sera lu ce soir devant le Conseil des Lanternes. Ce que tu écris, quarante personnes l'entendront. Ensuite, la ville.",
      "Tu sais trois choses. Ermesinde Valcor a été empoisonnée lentement, depuis des mois, par une poudre blanche dans son sel. Elle en serait morte avant l'été. Et cette nuit, c'est ton pavot qui l'a endormie.",
      { if: { has: "pavot=donne" }, text: "Ta main l'a versé. Quatre-vingts gouttes. Tu les as comptées." },
      { if: { has: "pavot=pris" }, text: "Sa main à elle l'a pris dans ta sacoche, pendant que tu dormais. Tu ne sais pas si cela fait de toi un innocent." },
      { if: { has: "nella=libre" }, text: "Nella court quelque part dans Bas-Port, avec quatre gardes derrière elle." },
      { if: { not: { has: "nella=libre" } }, text: "Nella attend dans une salle basse du palais la barque de la prison." },
    ],
    choices: [
      { label: "Écrire « mort de son mal, dans son sommeil ». Pas un mot du poison, pas un mot du pavot", fx: { set: { rapport: "naturelle" } }, to: "S1_r_naturelle", big: true },
      { label: "Écrire le poison lent, tout ce que tu as vu. Pas un mot du pavot", fx: { set: { rapport: "poison" } }, to: "S1_r_poison", big: true },
      { label: "Ne rien écrire encore, et aller tout dire au père Anselme, sous le sceau du Temple", fx: { set: { rapport: "temple" } }, to: "S1_r_temple", big: true },
      { label: "Écrire tout : le poison, et le pavot de cette nuit", fx: { set: { rapport: "public" } }, to: "S1_r_public", big: true },
    ] },

  S1_r_naturelle: { act: "I", title: "Mort de son mal", place: "palais",
    text: [
      "*La Doyenne Ermesinde Valcor est morte dans la nuit, de la maladie de langueur qui la minait depuis l'automne. La mort est venue dans le sommeil, sans souffrance. Sévan Aldric, médecin du Temple de la Marée.*",
      "Tu sables l'encre. C'est court. C'est propre. Cela protège Nella d'une accusation de meurtre, et toi de tout le reste. Cela couvre aussi celui qui a salé la Doyenne pendant six mois.",
      "Tu remets le rapport à Ysabeau Dorne. Elle le lit deux fois. « Rien d'autre, maître ? » Tu dis : rien d'autre.",
      { if: { has: "traces=laissees" }, text: "En sortant, tu croises Morvan dans la galerie. Il a lu le rapport par-dessus l'épaule de la capitaine. Il te salue, très aimablement, et touche sa poche, là où est ta fiole." },
    ],
    choices: [{ label: "Rentrer au Temple, et laisser la ville à d'autres pour aujourd'hui", to: "S1_fin" }] },
  S1_r_poison: { act: "I", title: "Le poison lent", place: "palais",
    fx: { clock: { preuves: 1 } },
    text: [
      "*La Doyenne Ermesinde Valcor a été empoisonnée. Les ongles striés, la chute des cheveux, l'odeur de la bouche, l'état de la peau disent tous la même chose : une poudre d'arsenic, donnée chaque jour en petite quantité depuis l'automne, dans ce qu'elle mangeait. La mort est survenue cette nuit. Sévan Aldric, médecin du Temple de la Marée.*",
      "Tout est vrai. La dernière phrase aussi : la mort est survenue cette nuit. Tu n'as pas écrit comment.",
      "Ysabeau Dorne lit le rapport, le replie. « Une poudre dans ce qu'elle mangeait. Vous savez qui portait ce qu'elle mangeait, maître. » Tu le sais. Tout le monde le sait.",
      { if: { not: { has: "nella=libre" } }, text: "Ce soir, Nella Ferrant sera accusée devant le Conseil d'avoir empoisonné la Doyenne. À Escalombre, l'empoisonneur est pendu à la digue, au reflux." },
      { if: { has: "nella=libre" }, text: "Ce soir, une servante en fuite sera accusée devant le Conseil d'avoir empoisonné la Doyenne. À Escalombre, l'empoisonneur est pendu à la digue, au reflux, quand on le trouve." },
    ],
    choices: [{ label: "Rentrer au Temple", to: "S1_fin" }] },
  S1_r_temple: { act: "I", title: "Sous le sceau du Temple", place: "temple",
    fx: { regard: { anselme: "curieux" } },
    text: [
      "Tu prends la barque du Temple. Le père Anselme t'attend dans la sacristie, comme s'il savait. Peut-être savait-il.",
      "Tu t'agenouilles. Tu dis tout : les ongles, le sel, les mois. La nuit, le pavot. « J'ai tué la Doyenne, mon père, ou je l'ai laissée se tuer. Je ne sais pas lequel des deux est le pire. »",
      "Anselme écoute sans bouger. Quand tu as fini, il pose la main sur ta tête. « Ce que tu as dit ici reste ici. Le Temple écrira le rapport. Le Temple dira ce qu'il faut dire. Toi, tu ne diras plus rien à personne, sans moi. » Sa main pèse un peu plus. « Tu me dois cela, Sévan. Tu me dois beaucoup, maintenant. »",
      "Il ne parle pas de la clef de fer. Il n'a pas besoin. Elle est dans ta poche, et vous y pensez tous les deux.",
    ],
    choices: [{ label: "Te relever", to: "S1_fin" }] },
  S1_r_public: { act: "I", title: "Tout", place: "palais",
    fx: { regard: { ysabeau: "admiratif" }, clock: { preuves: 1 }, drop: "clef_fer", set: { clef2: "garde" } },
    text: [
      "Tu écris tout. Le poison lent, les ongles, le sel. Et en dessous, d'une écriture qui ne tremble pas plus que d'habitude : *Cette nuit, à sa demande, la Doyenne a reçu de moi une dose de lait de pavot dont elle ne s'est pas réveillée. Elle se savait perdue. Elle souffrait. Je réponds de ce geste devant le Conseil et devant la Marée. Sévan Aldric.*",
      { if: { has: "pavot=pris" }, text: "Tu as écrit « reçu de moi ». C'est elle qui a pris la fiole. Mais c'est ta fiole, et c'est toi qui as dormi. Tu laisses la phrase comme elle est." },
      "Tu portes le rapport toi-même à Ysabeau Dorne. Elle le lit debout, dans la galerie. Elle le relit. Puis elle te regarde, et sa balafre se tend quand elle serre les dents.",
      "« Maître Aldric, je dois vous arrêter. » Elle le dit avec une sorte de respect. « Pour la mort de la Doyenne. Vous serez entendu par le Conseil. » Elle fait signe à deux gardes. « Pas de fers. Il n'en a pas besoin. »",
      "Elle tend la main. « La clef de fer. Je sais que la Doyenne vous l'a confiée. Elle restera au Guet, sous scellés, jusqu'au Conseil. » Tu la lui donnes.",
    ],
    choices: [{ label: "Suivre les gardes jusqu'à la barque de la prison", to: "S1_fin" }] },

  S1_fin: { act: "I", title: "Fin de la matinée", place: "palais",
    text: [
      { if: { is: { rapport: "public" } }, text: "La barque de la prison glisse sur le canal des Sels. Les masques qui passent en chantant se taisent en voyant ta robe de médecin entre deux hallebardes. À la Tour du Guet, on te donne une cellule au troisième étage, avec une fenêtre sur la lagune." },
      { if: { is: { rapport: ["naturelle", "poison", "temple"] } }, text: "Tu rentres à l'hospice par les ruelles hautes, parce que les basses sont déjà sous l'eau. Dans ta chambre, tu poses la clef de fer sur la table, et tu la regardes longtemps." },
      "Il est midi. À Bas-Port, la marée monte dans les rues, et un passeur apprend la nouvelle.",
    ],
    choices: [{ label: "Suivre Jasse Ferrant, à Bas-Port", fx: { team: "jasse" }, to: "J1_barque", big: true }] },
};
