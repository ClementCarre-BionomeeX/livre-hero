// Act II, « La mer des Brumes » (days 3 to 9): the open sea, the emptied water casks, the captain's illness, what the
// hold holds, the storm of the equinox and the man overboard, the call at Ronce, the night watches, the longboat, the
// second's cabin, and the mutiny when the crew has had enough.
module.exports = {
  D_large: {
    act: "II", title: "Le large", place: "pont",
    text: [
      "La première nuit au large, la Sterne trouve son allure : un balancement long et régulier, qui monte du ventre du navire et que le corps finit par oublier, comme il oublie son propre pouls. On allume le fanal de poupe ; au-delà de son cercle jaune, la mer cesse d'être une étendue pour devenir une présence, que l'on entend respirer le long de la coque. Les hommes de la bordée de repos descendent au gaillard, ceux du quart s'installent à l'abri du gaillard d'avant, et chacun s'arrange pour mettre une cloison entre la nuit et lui.",
      { with: "gabin", text: "Gabin est resté sur le pont. Il a sorti de sa poche une petite boussole de cuivre et la regarde trembler sur sa paume. « C'était à mon père, dit-il. Il disait qu'une boussole ne ment jamais, que ce sont les hommes qui lisent mal. »" },
      { with: "armelle", text: "Armelle passe, une lanterne à la main, pour sa ronde du soir dans la cale. À chaque membrure, elle frappe la coque du plat de la main et tend l'oreille, comme un médecin qui ausculte une poitrine." },
    ],
    choices: [{ label: "Rester sur le pont", to: "H_pont" }],
  },

  // ------------------------------------------------------------------ the water
  D_tonneaux: {
    act: "II", title: "Les tonneaux", place: "cale",
    text: [
      "Guénolé te secoue dans ta couchette avant le jour. « Viens voir. Viens voir ce qu'ils ont fait. »",
      "Dans la cale, à la lueur de trois lanternes, l'eau clapote entre les varangues, plus haut qu'elle ne devrait. Sur le rang du bas, quatorze tonneaux sonnent creux. Les hommes de la bordée sont là, en chemise, pieds nus dans l'eau douce perdue ; et des marins qui contemplent leur soif à venir observent un silence que bien des curés leur envieraient.",
      "Puis une voix le rompt. Un gabier sort de derrière l'établi de la charpentière avec le coffre à outils d'Armelle ouvert dans les bras. « Sa grosse vrille. Elle est plus là. » Toutes les têtes se tournent vers Armelle, qui descend l'échelle à cet instant, sa lanterne à la main.",
      "Le second arrive derrière elle. Il regarde les tonneaux, puis les hommes, puis Armelle, et il dit d'une voix très calme : « Personne ne touche à personne. Kerbrat, tu vas rester dans ta cale jusqu'à ce qu'on y voie clair. Pour ta sécurité. »",
      "Armelle te regarde. Les hommes aussi, et leur regard attend quelque chose de toi.",
    ],
    fx: { clue: "e_armelle", stock: { equipage: -8 }, ep: ["seance", 300] },
    choices: [
      { label: "Prendre la défense d'Armelle devant les hommes", test: { dom: "social", diff: -10, label: "Social", help: [{ with: "armelle", v: 10 }] }, win: { fx: { conf: { armelle: 15 }, regard: { armelle: "allie" } }, to: "D_defense" }, lose: { fx: { conf: { armelle: 5 }, stock: { equipage: -4 } }, to: "D_defense_non" } },
      { label: "Laisser le second décider", fx: { conf: { armelle: -15 }, flag: "armelle:consignee" }, to: "D_consignee" },
    ],
  },
  D_defense: {
    title: "Les tonneaux", place: "cale",
    text: [
      "Tu te mets entre Armelle et les hommes. Tu leur demandes qui, ici, a déjà vu Armelle Kerbrat abîmer un outil, gâcher une planche ou laisser un homme manquer de quoi que ce soit à bord. Tu leur demandes aussi si une charpentière qui voudrait percer des tonneaux prendrait sa propre vrille, et laisserait ensuite son coffre ouvert pour qu'on remarque l'absence.",
      "Un silence. Puis Guénolé crache dans l'eau. « C'est vrai, ça. » Les hommes remontent l'échelle un par un, en grognant. Le second sourit, du sourire d'un joueur qui perd une partie de cartes sans enjeu.",
      { with: "armelle", text: "Armelle garde ses remerciements. Elle ramasse son coffre à outils, le referme, et te dit seulement : « Je trouverai qui. Et toi, tu m'aideras. »" },
    ],
    choices: [{ label: "Regarder les tonneaux de plus près", to: "H_cale" }],
  },
  D_defense_non: {
    title: "Les tonneaux", place: "cale",
    text: [
      "Tu parles, mais l'eau perdue parle plus fort que toi. Les hommes grondent. Le second lève la main, et ils se taisent. « Le subrécargue a raison de défendre les gens du bord. Mais moi, je dois défendre le bord. Kerbrat reste à sa cale. »",
      { with: "armelle", text: "Armelle hausse les épaules. « J'y vis déjà, dans ma cale. » Elle te regarde. « Merci d'avoir essayé. »" },
    ],
    choices: [{ label: "Regarder les tonneaux de plus près", to: "H_cale" }],
  },
  D_consignee: {
    title: "Les tonneaux", place: "cale",
    text: [
      "Tu te tais. Le second hoche la tête, satisfait, et fait signe aux hommes de remonter. Armelle te regarde passer, sa lanterne à la main, et ses yeux te disent clairement ce qu'elle pense de toi.",
    ],
    choices: [{ label: "Regarder les tonneaux de plus près", to: "H_cale" }],
  },
  D_examen: {
    title: "Les tonneaux percés", place: "cale", back: true,
    text: [
      "Tu fais rouler les tonneaux vides un par un, à la lanterne, et tu les examines comme on examine des blessés. Tous ont été percés de la même façon : un trou net et rond, de la grosseur d'un petit doigt, au ras du fond, du côté de la coque, là où l'œil d'un passant ne va jamais. Pas une écharde autour. Il a fallu un outil bien affûté, et une main habituée à s'en servir.",
      { with: "armelle", text: "Armelle s'accroupit à côté de toi et passe le doigt dans un trou. « Une vrille de charpentier. De la grosseur de la mienne. » Elle se relève. « Qui que ce soit, il a dû la cacher quelque part. Une vrille comme ça, ça ne se jette pas : ça vaut deux jours de solde. »" },
    ],
    fx: { clue: "e_vrille" },
  },
  S_hamac: {
    title: "Le hamac d'Erwan", place: "gaillard",
    text: [
      "La bordée est sur le pont à virer de bord, et le gaillard est vide, à l'exception d'un homme qui ronfle dans un hamac du fond. Tu passes de hamac en hamac sans te presser, avec l'air de quelqu'un qui cherche sa pipe.",
      { with: "pierrick", text: "Pierrick fait le guet au pied de l'échelle, en sifflotant faux avec un parfait naturel." },
      "Le hamac d'Erwan Le Goff est roulé serré autour de son sac. Dedans, enveloppée dans une chemise sale, il y a une vrille de charpentier, longue comme l'avant-bras. Sa mèche est encore collée de sciure de chêne humide.",
    ],
    fx: { clue: "e_sciure" },
    choices: [{ label: "Remettre tout en place, et ressortir", to: "H_gaillard" }],
  },
  S_hamac_rate: {
    title: "Le gaillard", place: "gaillard",
    text: [
      "Tu as à peine touché le premier hamac qu'une voix t'arrête. « Tu cherches quelque chose ? » Rozenn est sur le seuil de sa cambuse, sa louche à la main. Tu marmonnes une histoire de pipe perdue. Elle hausse un sourcil, d'une façon qui t'apprend le peu de cas qu'elle fait de ta pipe, et retourne à son chaudron. Il faudra revenir à un autre moment.",
    ],
    choices: [{ back: "H_gaillard" }],
  },

  // ------------------------------------------------------------------ the captain's grog
  S_guet: {
    title: "L'escalier de la dunette", place: "arriere",
    text: [
      "Tu t'assieds dans le noir, sous l'escalier de la dunette, à l'endroit où la coursive fait un coude. De là, tu tiens sous ton regard la porte du capitaine et le bas des marches. Le navire craque ; et dans l'obscurité, chacun de ses craquements prend la valeur d'un pas. Au-dessus de toi, sur la dunette, ceux de l'homme de quart vont et viennent, six dans un sens, six dans l'autre, d'une régularité d'horloge qui finit par compter les minutes à ta place.",
      { temps: ["grain", "tempete"], text: "La pluie tambourine sur le pont, au-dessus de ta tête. Elle couvre tous les bruits, les tiens comme ceux des autres." },
      "À huit heures, quelqu'un descend l'escalier, un pot de grès fumant à la main. Une veste bleue, à boutons de corne. Le second s'arrête devant la porte du capitaine, regarde à droite, puis à gauche, et pose le pot sur une marche.",
    ],
    choices: [
      { label: "Te glisser plus près pour voir ce qu'il fait", test: { dom: "discretion", diff: -10, label: "Discrétion", help: [{ with: "pierrick", v: 10 }] }, win: { to: "S_guet_vu" }, lose: { to: "S_guet_rate" } },
    ],
  },
  S_guet_vu: {
    title: "L'escalier de la dunette", place: "arriere",
    text: [
      "Tu avances à quatre pattes jusqu'au coin de la coursive. Le second sort de sa poche un petit cornet de papier, l'ouvre et en verse le contenu dans le pot : une poudre verte, en pluie fine. Il remue du doigt, se lèche le doigt, fait la grimace et l'essuie sur sa veste.",
      "Puis il frappe, entre, et tu l'entends dire d'une voix chaleureuse : « Votre grog, capitaine. Bien chaud, comme vous l'aimez. »",
      "Tu attends qu'il ressorte et qu'il remonte. Tu attends encore. Quand le capitaine ronfle, tu entres dans la chambre et tu prends le pot vide sur la table de chevet. Au fond, sous un reste de rhum, il y a une pâte verte de feuilles écrasées. Tu y trempes le bout de la langue : c'est amer comme le fiel.",
    ],
    fx: { clue: "c_feuilles", ep: ["seance", 1000] },
    choices: [{ label: "Emporter le pot", to: "H_arriere" }],
  },
  S_guet_rate: {
    title: "L'escalier de la dunette", place: "arriere",
    text: [
      "Une latte grince sous ton genou. Le second se retourne d'un bloc, le pot à la main.",
      "« Tiens. Tu ne dors pas ? » Il sourit. Il te regarde longtemps, sans cesser de sourire. « Le capitaine a besoin de repos. Moi aussi. Toi aussi, sûrement. Bonne nuit. » Il attend que tu sois rentré{e} dans ta cabine pour frapper chez le capitaine.",
    ],
    fx: { flag: "morvan:alerte" },
    choices: [{ back: "H_arriere" }],
  },
  K_grog: {
    title: "Le grog du soir", place: "gaillard",
    text: [
      "À huit heures moins le quart, tu es dans la cambuse de Rozenn. Tu lui annonces seulement que, désormais, tu monteras toi-même le grog du capitaine, et que le pot passera de ses mains aux tiennes, sans escale. Elle te regarde un moment, puis te tend le pot sans poser de question.",
      "Au pied de l'escalier de la dunette, le second t'attend. Il voit le pot dans tes mains, et quelque chose traverse son visage, très vite. « Tu as pris mon travail ? »",
      "« Le capitaine m'a fait demander », dis-tu. Il s'efface pour te laisser passer, avec une petite révérence. « Prends-en bien soin, alors. »",
      "Les jours suivants, Daoulas purge le capitaine et le fait boire de l'eau, rien que de l'eau, qu'il tire lui-même du tonneau. Le troisième jour, le vieil homme réclame de la soupe, déclare que l'eau claire est une boisson de grenouille et menace de débarquer son chirurgien sur le premier caillou venu ; Daoulas en conclut qu'il est sauvé.",
    ],
    fx: { flag: "cap:soigne", quest: "II_capitaine", regard: { morvan: "hostile", coet: "redevable" }, ep: ["histoire", 2000] },
    choices: [{ back: "H_pont" }],
  },

  // ------------------------------------------------------------------ the hold
  S_cale_nuit: {
    title: "La cale, la nuit", place: "cale",
    text: [
      "La nuit, la cale devient un autre lieu. Les fanaux sont éteints, sauf un, au pied de l'échelle, dont la flamme éclaire tout juste sa propre vitre. Les caisses dressent des murailles noires, entre lesquelles on avance comme dans les ruelles d'une ville morte ; l'eau frappe la coque à hauteur de ton oreille, à l'épaisseur d'une planche ; et les rats, qui ont la nuit pour eux, vaquent à leurs affaires avec l'aplomb de bourgeois dans leur quartier.",
      { with: "armelle", text: "Armelle a apporté son pied-de-biche, enveloppé dans un chiffon pour qu'il ne sonne pas contre le bois. « Si on nous prend, dit-elle, c'est moi qui ai eu l'idée. Moi, ils me pendront pas, ils ont besoin d'une charpentière. »" },
      { without: "armelle", text: "Sur l'établi d'Armelle, tu prends un pied-de-biche. Il est lourd et froid." },
      "Il faut défaire des cordages, déplacer des caisses en silence, et soulever les couvercles sans faire crier les clous.",
    ],
    choices: [
      { label: "Ouvrir une caisse du milieu de la pile", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ with: "armelle", v: 15 }, { item: "lanterne_sourde", v: 5 }] }, win: { to: "S_cale_ouverte" }, lose: { to: "S_cale_rate" } },
      { label: "Renoncer pour cette nuit", back: "H_cale" },
    ],
  },
  S_cale_ouverte: {
    title: "Les caisses", place: "cale",
    text: [
      "Le couvercle cède avec un soupir de clous. Dessus, du drap de Flandre, gris et bleu, plié serré. Tu soulèves la première pièce, puis la deuxième. Dessous, le drap s'arrête. Le reste de la caisse est plein de sable gris, tassé, et de galets ronds de la taille d'un poing : des galets de grève, encore couverts de sel.",
      "Tu ouvres une deuxième caisse, plus loin : une couche de drap, puis du sable. Une caisse d'outils : trois haches sur le dessus, puis des briques. Tu débouches une barrique de vin avec la pointe du couteau et tu goûtes. C'est de l'eau de mer.",
      { with: "armelle", text: "Armelle a posé le pied-de-biche. Elle prend une poignée de sable et la laisse couler entre ses doigts. « Quatre-vingt-dix caisses de draps, dit-elle très bas. Et nous trente dessus. »" },
      { with: "gabin", text: "Gabin est descendu derrière vous sans bruit. Il regarde le sable, et il comprend plus vite que tu ne l'aurais voulu. « Mon oncle a assuré ça », dit-il. Il le dit comme on constate." },
      "Tu refermes tout dans l'état où tu l'as trouvé, en remettant chaque clou dans son trou.",
    ],
    fx: { clue: "m_sable", flag: "cale:ouverte", quest: "II_cale", ep: ["histoire", 2000] },
    choices: [{ back: "H_cale" }],
  },
  S_cale_rate: {
    title: "La cale, la nuit", place: "cale",
    text: [
      "Une caisse glisse et en cogne une autre. Le bruit roule dans toute la cale. Une lanterne apparaît en haut de l'échelle : l'homme de quart descend deux échelons et lève sa lumière. Tu restes immobile derrière une pile. Il regarde longtemps, puis il remonte en grommelant contre les rats, qui ont bon dos.",
      "Il vaut mieux en rester là pour cette nuit.",
    ],
    choices: [{ back: "H_cale" }],
  },

  // ------------------------------------------------------------------ the storm
  T_tempete: {
    act: "II", title: "La tempête", place: "pont",
    text: [
      "Depuis l'aube, le ciel a pris une couleur de plomb fondu, et la houle arrive du sud-ouest en collines lentes, huileuses, que nul vent ne pousse encore. À dix heures, le peu de brise qui restait tombe d'un coup ; les voiles pendent, les poulies se taisent, et dans ce calme chacun entend respirer son voisin. Guénolé dit à voix basse : « Ça y est. » Puis il hurle de toutes ses forces : « Tout le monde sur le pont ! »",
      "Le vent revient d'un bloc, comme un mur. La Sterne se couche, ses vergues effleurent la mer, puis elle se relève en grondant. La pluie arrive à l'horizontale, chargée de sel. Les lames grandissent à vue d'œil ; en une heure, elles dépassent le grand hunier, et le navire descend dans leurs creux comme on descend dans une fosse dont on voit monter les parois.",
      { if: { has: "cap:soigne" }, text: "Le capitaine Coët est monté sur le pont, soutenu par Daoulas. Il s'est fait attacher à la rambarde de la dunette, et il donne ses ordres d'une voix éraillée, dont le vent emporte la moitié ; l'autre moitié suffit, car elle est faite d'injures que tout le bord connaît par cœur." },
      { if: { not: { has: "cap:soigne" } }, text: "Le capitaine est resté en bas. C'est le second qui commande, accroché à la barre avec Kerlo, et il commande bien : ses ordres tombent juste, au bon moment, d'une voix claire." },
      "On tend des lignes de vie de l'avant à l'arrière. Chacun reçoit sa tâche. On te crie la tienne.",
    ],
    fx: { meteo: { is: "tempete", hours: 10 }, ep: ["seance", 500] },
    choices: [
      { label: "Monter dans la mâture aider à serrer les huniers", test: { dom: "nature", diff: -10, label: "Nature", help: [{ if: { has: "passe:marin" }, v: 20 }, { with: "pierrick", v: 5 }] }, win: { fx: { stock: { equipage: 6 } }, to: "T_voiles" }, lose: { fx: { blessure: "main" }, to: "T_voiles_rate" } },
      { label: "Descendre aux pompes", fx: { fatigue: 2, stock: { coque: 6 } }, to: "T_pompes" },
      { label: "Courir à la cale arrimer les caisses qui se détachent", test: { dom: "combat", diff: -10, label: "Combat (force)", help: [{ with: "armelle", v: 15 }] }, win: { fx: { stock: { coque: 4 } }, to: "T_arrimer" }, lose: { fx: { blessure: "cotes" }, to: "T_arrimer_rate" } },
    ],
  },
  T_voiles: {
    title: "Dans la mâture", place: "pont",
    text: [
      "Tu grimpes dans les haubans derrière un gabier, la pluie dans les yeux. En haut, la vergue du hunier fouette l'air comme un fléau à battre le blé. Tu t'allonges dessus, les pieds sur le marchepied, et tu tires sur la toile mouillée avec les autres, à pleins bras, jusqu'à ce qu'elle cède et qu'on puisse la saisir.",
      "Quand tu redescends, les jambes en coton, Guénolé te tape dans le dos à te faire tomber. Les hommes qui étaient là-haut avec toi te regardent avec une considération nouvelle.",
    ],
    choices: [{ label: "Reprendre ton souffle sur le pont", to: "T_homme" }],
  },
  T_voiles_rate: {
    title: "Dans la mâture", place: "pont",
    text: [
      "Tu grimpes dans les haubans derrière un gabier. Une rafale te décroche un pied ; tu te rattrapes à un cordage qui file entre tes doigts sur une brasse et t'arrache la peau de la paume. Tu tiens. Tu remontes. Tu aides à serrer la toile avec une main qui brûle comme si tu l'avais posée sur un fourneau.",
      "En bas, tu examines ta paume : une bande rouge et luisante la traverse de part en part.",
    ],
    choices: [{ label: "Serrer ta main contre toi, et continuer", to: "T_homme" }],
  },
  T_pompes: {
    title: "Aux pompes", place: "cale",
    text: [
      "Dans la cale, l'eau monte. Elle entre par les écoutilles, par les sabords, par les coutures de la coque qui travaillent à chaque lame. Six hommes pompent à la grande pompe, six à la petite, et tu prends ta place au bringuebale.",
      { after: "fait:pompe", text: "La grande pompe, avec ses cuirs neufs, crache un plein seau à chaque coup. Un vieux matelot crie, entre deux souffles : « Bénie soit la Kerbrat ! »" },
      { before: "fait:pompe", text: "La grande pompe aspire mal. Ses cuirs fuient, et il faut deux coups de bras pour un seau. L'eau gagne, lentement, d'un pouce par heure." },
      "Tu pompes pendant quatre heures, jusqu'à douter que tes bras t'appartiennent encore.",
    ],
    choices: [{ label: "Remonter respirer un peu d'air", to: "T_homme" }],
  },
  T_arrimer: {
    title: "Dans la cale", place: "cale",
    text: [
      "Dans la cale, une pile de caisses s'est rompue. À chaque roulis, elles glissent d'un bord à l'autre comme des béliers et cognent la coque. Tu attrapes un cordage, un matelot en attrape un autre, et vous les coincez une à une contre les varangues, en sautant de côté chaque fois que le navire repart dans l'autre sens.",
      { with: "armelle", text: "Armelle cloue des taquets dans le plancher à grands coups de masse, entre deux roulis, et chaque coup tombe juste." },
      "Quand la dernière est saisie, tu t'aperçois que l'une d'elles s'est fendue en route. Il en coule du sable gris.",
    ],
    choices: [{ label: "Remonter sur le pont", to: "T_homme" }],
  },
  T_arrimer_rate: {
    title: "Dans la cale", place: "cale",
    text: [
      "Une caisse arrive sur toi au roulis, plus vite que tu ne l'avais prévu, et te plaque contre une varangue. Quelque chose craque dans ton flanc. Tu restes un moment le souffle coupé, puis tu respires, et chaque inspiration est un couteau.",
      "Les hommes finissent de saisir les caisses sans toi. L'une d'elles, fendue, laisse couler un filet de sable gris sur le plancher.",
    ],
    choices: [{ label: "Remonter sur le pont en te tenant les côtes", to: "T_homme" }],
  },
  T_homme: {
    title: "Un homme à la mer", place: "pont", urgent: 20,
    text: [
      "Une lame plus haute que les autres monte à bâbord, verte et noire, sous une crête blanche qui fume ; elle prend son temps, comme une chose sûre de son fait. Quelqu'un crie. La lame tombe sur le pont de tout son poids, balaie tout de l'avant à l'arrière, et repart par-dessus le bastingage de tribord.",
      { with: "pierrick", text: "Quand l'eau s'est retirée, la place de Pierrick est vide. Tu le vois dans l'écume, à vingt brasses : une petite tête rousse qui monte et descend, et un bras levé." },
      { without: "pierrick", text: "Quand l'eau s'est retirée, un jeune gabier, Loïc, a disparu. Tu le vois dans l'écume, à vingt brasses : une tête qui monte et descend, et un bras levé." },
    ],
    choices: [
      { label: "Lancer la bouée de liège", if: { item: "bouee" }, hide: { not: { item: "bouee" } }, fx: { drop: "bouee" }, to: "T_sauve_bouee" },
      { label: "Prendre un bout de filin et sauter", test: { dom: "nature", diff: -20, label: "Nature", help: [{ if: { has: "passe:marin" }, v: 15 }] }, win: { to: "T_sauve" }, lose: { fx: { blessure: "cotes" }, to: "T_perdu" } },
      { label: "Crier « Un homme à la mer ! » et tenir bon", timeout: true, to: "T_perdu" },
    ],
  },
  T_sauve_bouee: {
    title: "La bouée", place: "pont",
    text: [
      "Tu décroches la couronne de liège et tu la lances de toutes tes forces, en gardant la ligne dans l'autre main. Elle tombe à deux brasses de la tête qui se débat. Une lame l'emporte, puis la rapproche. Une main l'attrape.",
      "Quatre hommes tirent sur la ligne avec toi. Quand on hisse le naufragé sur le pont, il crache de l'eau de mer, tousse, pleure, et rit.",
      { with: "pierrick", text: "Pierrick garde la bouée serrée contre lui pendant une heure. Puis il vient s'asseoir à côté de toi, trempé, et pose la tête contre ton épaule." },
    ],
    fx: { stock: { equipage: 12 }, conf: { pierrick: 20 }, ep: ["histoire", 2000], flag: "homme:sauve" },
    choices: [{ label: "Attendre la fin de la tempête", to: "T_apres" }],
  },
  T_sauve: {
    title: "À la mer", place: "pont",
    text: [
      "Tu fais un nœud de chaise autour de ta taille, tu jettes l'autre bout à Guénolé, et tu sautes. L'eau est un poing glacé qui t'écrase la poitrine. Tu nages vers la tête, tu la perds, tu la retrouves au sommet d'une lame. Tu attrapes une poignée de chemise, et tes doigts se referment dessus pour de bon.",
      "Sur le pont, ils sont six à tirer. Quand on vous hisse tous les deux, tes jambes ont cessé de t'appartenir.",
      { with: "pierrick", text: "Pierrick te serre si fort qu'il te fait mal. Il tremble de la tête aux pieds." },
    ],
    fx: { stock: { equipage: 15 }, conf: { pierrick: 25 }, ep: ["histoire", 2500], flag: "homme:sauve", fatigue: 2 },
    choices: [{ label: "Attendre la fin de la tempête", to: "T_apres" }],
  },
  T_perdu: {
    title: "À la mer", place: "pont",
    text: [
      "Avant que tu aies bougé, quelqu'un passe en courant devant toi, un bout de filin noué autour de la taille, et plonge par-dessus le bastingage. Une veste bleue, à boutons de corne.",
      "Le second nage comme un phoque. Il disparaît derrière une lame, reparaît, disparaît encore. Puis la ligne se tend, et on hale, à six, puis à dix. Morvan Le Hir remonte sur le pont, ruisselant, un bras passé sous celui du naufragé.",
      { with: "pierrick", text: "Pierrick s'accroche au cou du second en hoquetant. Morvan rit, lui frotte la tête, et le pousse vers la cambuse. « File te sécher, moussaillon. Tu me dois une chandelle. »" },
      "Tout l'équipage l'acclame. Quand il passe près de toi, il te fait un clin d'œil.",
    ],
    fx: { stock: { equipage: 5 }, sway: { commandement: { guenole: "pour", rozenn: "pour" } }, regard: { pierrick: "admiratif" }, flag: "homme:morvan" },
    choices: [{ label: "Attendre la fin de la tempête", to: "T_apres" }],
  },
  T_apres: {
    title: "Après la tempête", place: "pont",
    text: [
      "La tempête souffle jusqu'au soir, puis s'essouffle d'un coup, comme une bête fatiguée. La nuit tombe sur une mer encore haute, mais apaisée. On compte les hommes : tout le monde est là. On compte les dégâts : un hunier en lambeaux, le bout-dehors brisé, et dans la cale, à tribord, une couture ouverte sous la ligne de flottaison, par où l'eau entre à gros bouillons.",
      { after: "fait:pompe", text: "Les pompes tiennent l'eau à distance. Armelle dit qu'avec ses cuirs neufs, on pourrait pomper jusqu'à Marbecq. Mais elle aimerait autant boucher la voie." },
      { before: "fait:pompe", text: "Les pompes ont du mal à suivre. Armelle dit qu'il faut boucher la voie au plus vite, et que d'ici là il faudra pomper jour et nuit." },
      "Ce soir-là, au gaillard, les hommes parlent de l'équinoxe sur un autre ton que celui du calendrier.",
    ],
    fx: { flag: "voie:ouverte", stock: { coque: -20 } },
    choices: [{ label: "Aller dormir enfin", takes: "morning", to: "N_matin" }],
  },
  T_voie: {
    title: "La voie d'eau", place: "cale",
    text: [
      "Armelle travaille à la lueur de deux fanaux, dans l'eau jusqu'aux genoux. Tu lui passes les outils, les planches, l'étoupe et le brai chaud dans son pot. Elle enfonce l'étoupe dans la couture ouverte à coups de maillet et de ciseau, couche après couche, puis cloue par-dessus un emplâtre de planches doublées de toile goudronnée.",
      "« Une coque, dit-elle sans s'arrêter, c'est comme une famille. Ça tient tant que chaque planche tient à sa voisine. Une qui lâche, et toutes boivent. »",
      "Au bout de quatre heures, l'eau se contente de suinter.",
    ],
    fx: { flag: "voie:bouchee", stock: { coque: 15 }, conf: { armelle: 5 }, ep: ["seance", 800], fatigue: 1 },
    choices: [{ back: "H_cale" }],
  },
  T_voie_bordee: {
    title: "La voie d'eau", place: "cale",
    text: [
      "Guénolé met trois hommes au travail. Ils bouchent la voie avec ce qu'ils ont : de l'étoupe, des coins et une voile pliée, pendant que les autres pompent. C'est un travail de matelots, grossier et mouillé, mais l'eau entre moins vite.",
    ],
    fx: { flag: "voie:bouchee", stock: { coque: 6 }, fatigue: 1 },
    choices: [{ back: "H_cale" }],
  },

  // ------------------------------------------------------------------ Ronce
  R_arrivee: {
    act: "II", title: "L'île Ronce", place: "pont",
    text: [
      "Le septième jour, la brume se déchire sur une île : un dos de rocher couvert d'ajoncs jaunes, et tout en haut, un phare blanc. La Sterne mouille dans une anse, sur une eau verte et calme, à un jet de pierre d'une plage de galets.",
      { if: { has: "cap:soigne" }, text: "Le capitaine, assis sur un tabouret près de la barre, donne l'ordre de faire de l'eau à la source de l'île, et de repartir à cinq heures." },
      { if: { not: { has: "cap:soigne" } }, text: "C'est le second qui commande le mouillage. Il annonce qu'on repart à cinq heures. Quand Guénolé lui demande s'il faut remplir les tonneaux, il hausse les épaules : « Si les hommes veulent porter des barriques sur un sentier de chèvres, qu'ils le fassent. On aura de l'eau à Marbecq. »" },
    ],
    fx: { set: { escale: "ronce", mer: "port" }, reveal: "ronce" },
    choices: [{ label: "Prendre la chaloupe jusqu'à la plage", to: "H_ronce" }, { label: "Rester à bord", to: "H_pont" }],
  },
  R_source: {
    title: "La source", place: "ronce",
    text: [
      "Le ruisseau descend entre deux pentes d'ajoncs jusqu'à une vasque de pierre, où l'eau sort de la roche froide et claire, avec un goût de fer. Pour remplir ce qui manque à la Sterne, il faudrait des hommes, des barriques vides, des perches, et plusieurs voyages.",
    ],
    choices: [
      { label: "Demander des bras à Guénolé", if: { any: [{ stock: "equipage", min: 35 }, { has: "guenole:allie" }] }, why: "Les hommes n'ont pas envie de porter des barriques pour toi.", to: "R_source_ok" },
      { label: "Payer les porteurs sur le coffre de bord (dix écus)", if: { stock: "coffre", min: 10 }, fx: { stock: { coffre: -10 } }, to: "R_source_ok" },
      { label: "Remplir ce que tu peux avec tes compagnons", with: "any", fx: { stock: { eau: 4 }, fatigue: 1 }, to: "R_source_peu" },
    ],
  },
  R_source_ok: {
    title: "La source", place: "ronce",
    text: [
      "Une douzaine d'hommes descendent de la chaloupe avec des barriques vides et des perches. Toute la journée, la noria monte et descend le sentier, deux hommes par barrique, en chantant. À quatre heures, quatorze tonneaux pleins sont arrimés dans la cale de la Sterne, autant qu'on en a perdu.",
      "Le soir, au gaillard, on boit l'eau de Ronce à la tasse en disant qu'elle a le goût de la terre, et c'est un compliment.",
    ],
    fx: { stock: { eau: 14, equipage: 6 }, flag: "eau:ronce", quest: "II_ronce", ep: ["seance", 1000] },
    choices: [{ back: "H_ronce" }],
  },
  R_source_peu: {
    title: "La source", place: "ronce",
    text: [
      "Vous faites ce que vous pouvez : quatre barriques, portées à deux sur un sentier de chèvres, en glissant sur les galets. Le soir, tu as les épaules en sang. Quatre tonneaux, c'est peu, et c'est toujours ça.",
    ],
    choices: [{ back: "H_ronce" }],
  },
  R_phare: {
    title: "Le phare", place: "ronce",
    text: [
      "Le phare est une tour ronde et trapue, blanchie à la chaux, avec une maison basse collée contre son pied. Trois chèvres broutent devant la porte. Une vieille femme en foulard, le visage tanné comme une selle, te regarde monter le sentier, immobile, les mains sur un bâton.",
      "Soizic te fait asseoir sur un banc, contre le mur chaud, et te sert un bol de lait de chèvre. Elle parle peu et lentement, avec de longs silences entre les phrases, comme si chacune devait traverser la lande avant d'arriver.",
      "« La Sterne. De chez Corbière. » Elle regarde le navire, en bas, dans l'anse. « Il y a deux ans, j'ai vu passer une chaloupe d'un autre navire de chez Corbière. La Bergeronnette. Cinq hommes dedans. Ils sont venus faire de l'eau ici, avant de repartir sur Marbecq. »",
      "Elle boit une gorgée de lait. « Ils avaient des barils pleins, du biscuit dans des sacs secs, une boussole, une voile toute neuve. Ils avaient le ventre plein et des vestes sèches. Ils avaient les yeux secs aussi. J'en ai vu, des naufragés, depuis trente ans. Ceux-là ramaient comme des pêcheurs qui rentrent au port. »",
      { with: "gabin", text: "Gabin a posé son bol. Il regarde la vieille femme, immobile." },
    ],
    fx: { meet: "soizic", clue: "m_soizic", ep: ["seance", 800] },
    choices: [
      { label: "Lui demander ce qu'elle sait des Dents", to: "R_phare_dents" },
      { label: "La remercier, et redescendre", back: "H_ronce" },
    ],
  },
  R_phare_dents: {
    title: "Le phare", place: "ronce",
    text: [
      "« Les Dents ? » Soizic montre le sud, où la brume recommence. « Six lieues de rochers, et une seule passe. Le phare de Marbecq est derrière, sur sa colline. Il est haut, et il ne bouge pas. »",
      "« Mais sur la Mâchoire, la pointe de l'ouest, les nuits de grosse mer, il y a une autre lueur. L'écume qui brille sur les roches. Elle est plus basse, et elle danse. Celui qui gouverne dessus en croyant voir le phare, il est mort. » Elle pose son bol. « Le phare ne danse pas. Souviens-toi de ça. »",
    ],
    choices: [{ back: "H_ronce" }],
  },
  R_greve: {
    title: "La grève", place: "ronce",
    text: [
      "Tu longes la grève vers l'ouest, sur des galets qui roulent sous tes pieds. La marée a laissé une laisse de varech, de bois flotté et de bouts de cordage blanchis. Plus loin, un vieux filet de pêche, à moitié enterré dans le sable, porte encore ses flotteurs de liège.",
      "Au bout de l'anse, couchée contre un rocher, une figure de proue en bois peint, rongée par le sel : un oiseau aux ailes repliées, la queue relevée. Presque toute la peinture est partie. Il reste un peu de jaune sur la gorge.",
      { with: "gabin", text: "Gabin s'arrête devant la figure de proue. « Une bergeronnette, dit-il. Elle a la queue qui bouge, comme ça, tout le temps. Mon père disait que c'était l'oiseau le plus gai du monde. » Il s'accroupit, touche le bois, puis se relève et s'éloigne, le dos tourné à la plage." },
      { with: "pierrick", text: "Pierrick a déjà dégagé le filet et défait les flotteurs de liège. « Ça peut servir. Ça sert toujours. »" },
    ],
    fx: { item: ["liege", "filin"] },
    choices: [
      { label: "Rejoindre Gabin", with: "gabin", fx: { conf: { gabin: 5 } }, back: "H_ronce" },
      { label: "Revenir vers la chaloupe", back: "H_ronce" },
    ],
  },
  R_depart: {
    act: "II", title: "Le départ de Ronce", place: "pont",
    text: [
      { if: { is: { terre: "oui" } }, text: "La cloche du bord sonne le rappel. Tu redescends à la plage, et la chaloupe te ramène au navire avec les derniers hommes." },
      "À cinq heures, on vire l'ancre. Deux matelots remontent de la plage les derniers barils pleins et, sur l'ordre du second, les déposent dans la chaloupe au lieu de les descendre dans la cale. Puis on hisse la chaloupe à sa place, entre les mâts, et on la couvre de sa bâche.",
      "La Sterne sort de l'anse au moment où Soizic allume son feu, là-haut. La brume se referme derrière vous comme une porte ; le phare devient une tache rouge, puis une rougeur, puis un souvenir.",
    ],
    fx: { set: { escale: null, mer: "brumes" } },
    choices: [{ label: "Rester sur le pont", to: "H_pont" }],
  },

  // ------------------------------------------------------------------ the night watch, the longboat, the second's cabin
  Q_quart: {
    title: "Le quart de nuit", place: "pont", back: true,
    text: [
      "Tu prends le quart avec la bordée de Kerlo, de minuit à quatre heures. Le timonier parle à peine. Ses yeux vont du compas à la voile, et de la voile au compas. Tu tiens la lanterne de l'habitacle, et tu apprends à lire la rose des vents qui tremble dans son bol de cuivre.",
      { temps: "brume", text: "La brume colle à tout ; elle supprime la proue, puis le grand mât, puis ta propre main au bout de ton bras, et laisse le navire seul avec ses bruits. On sonne la cloche toutes les deux minutes, et on écoute. Une fois, très loin, une autre cloche répond, d'un côté que l'oreille renonce à désigner ; Kerlo met un rayon de barre, à tout hasard, comme on cède le pas à un inconnu dans une rue obscure." },
      { temps: ["calme", "brise"], text: "Le ciel est clair. Kerlo te montre l'Étoile du Nord, au bout de la queue de la Petite Ourse, et la façon de la garder sur l'épaule gauche quand on fait route au sud-ouest." },
      { temps: ["frais", "grain", "tempete"], text: "Le vent fouette la pluie sur la dunette. Kerlo tient la barre à deux mains, les jambes écartées. Chaque lame arrive par le travers avec le bruit d'un mur qui s'effondre." },
      { after: "R_depart", once: true, text: "À minuit, le second monte sur la dunette pour la relève. Il se penche sur le compas, puis dit à Kerlo, à mi-voix : « Sud-sud-ouest, un quart sud. Le courant nous drosse. » Kerlo tourne la roue en silence. Cet après-midi, dans le carré, tu as regardé la carte du capitaine : la route portée au crayon passe un quart plus au nord." },
      { before: "R_depart", once: true, text: "Vers trois heures, Kerlo dit tout à coup, sans quitter le compas des yeux : « Les Dents, j'y suis passé quatre fois. Trois fois avec Tréguer, une fois sans. La fois sans, on a touché. Une heure à se dégager sur le flot. Depuis, je dors mal en mer des Brumes. »" },
      "À quatre heures, la relève monte. Tu descends dormir, et le compas continue de trembler derrière tes paupières.",
    ],
    fx: { fatigue: 1, ep: ["perso", 200] },
    choices: [
      { label: "Retenir la route que le second a donnée", after: "R_depart", hide: { any: [{ clue: "m_route" }, { not: { seen: "R_depart" } }] }, fx: { clue: "m_route" }, back: "H_pont" },
    ],
  },
  S_chaloupe: {
    act: "II", title: "La chaloupe", place: "pont",
    text: [
      "Tu attends que l'homme de quart soit à l'avant pour te glisser sous la bâche de la chaloupe. Il y fait noir comme dans la poche d'un usurier, et ça sent le goudron.",
      { item: "lanterne_sourde", if: { item: "lanterne_sourde" }, text: "Tu entrouvres le volet de ta lanterne sourde. Un trait de lumière, mince comme une lame, se pose sur ce qui se trouve là." },
      "À tâtons, tu dresses l'inventaire : deux barils pleins, bien calés sous les bancs ; un sac de biscuit dans une toile cirée ; une voile roulée, toute neuve ; un compas de route dans sa boîte ; un coffre de mer fermé à clé. Sur le couvercle, des initiales gravées au fer : M. L. H.",
    ],
    fx: { clue: "m_chaloupe", ep: ["seance", 1000] },
    choices: [
      { label: "Percer les barils et jeter le compas à la mer", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ with: "pierrick", v: 15 }, { item: "lanterne_sourde", v: 5 }] }, win: { fx: { flag: "chaloupe:videe", quest: "III_chaloupe" }, to: "S_chaloupe_videe" }, lose: { fx: { flag: "morvan:alerte" }, to: "S_chaloupe_vu" } },
      { label: "Tout laisser en place, et ressortir sans bruit", back: "H_pont" },
    ],
  },
  S_chaloupe_videe: {
    title: "La chaloupe", place: "pont",
    text: [
      "Tu enfonces la pointe de ton couteau au ras du fond de chaque baril, et l'eau s'écoule sans bruit dans les fonds de la chaloupe, puis par le trou du nable. Tu glisses le compas sous ta chemise, et à l'arrière tu le laisses tomber par-dessus bord, dans le remous du sillage.",
      "Celui qui comptait sur cette chaloupe pour atteindre Marbecq devra boire la mer et lire les étoiles.",
    ],
    choices: [{ label: "Ressortir de sous la bâche", back: "H_pont" }],
  },
  S_chaloupe_vu: {
    title: "La chaloupe", place: "pont",
    text: [
      "Tu viens de percer un baril quand la bâche se soulève. Une lanterne. Le second, en chemise, te regarde.",
      "« Tu cherches un endroit tranquille pour dormir ? » Il ne sourit pas. Il te tend la main pour t'aider à sortir, et sa main est très forte. « La chaloupe, c'est ce qui reste quand il ne reste rien. On n'y touche pas. Personne. » Il rabat la bâche derrière toi.",
    ],
    choices: [{ label: "Regagner le pont", back: "H_pont" }],
  },
  S_chambre: {
    title: "La chambre du second", place: "arriere",
    text: [
      "Le second est sur la dunette avec Kerlo. Tu entres dans sa chambre comme on entre chez soi, et tu refermes la porte. C'est une chambre tenue comme la conscience d'une dévote, où chaque chose est à sa place et où rien ne traîne : une couchette au carré, un portemanteau, une tablette avec le livre de bord, une rangée de livres, un rasoir et un miroir.",
      "Sous la couchette, son second coffre, celui des affaires de tous les jours, s'ouvre sans clé. Sous les chemises pliées, il y a un portefeuille de cuir, et dans le portefeuille, une lettre pliée en quatre, au cachet de cire verte de la maison Corbière.",
    ],
    fx: { item: "lettre_corbiere", clue: "m_lettre", flag: "sait:morvan_corbiere", tie: "morvan_corbiere", ep: ["histoire", 2000] },
    choices: [{ label: "Tout remettre en place et ressortir", to: "H_arriere" }],
  },
  S_chambre_rate: {
    title: "La chambre du second", place: "arriere",
    text: [
      "Tu as la main sur le loquet quand la porte s'ouvre de l'intérieur. Le second, en manches de chemise, une plume derrière l'oreille. « Tu me cherchais ? »",
      "Tu inventes une question sur le coffre de bord. Il y répond très aimablement, planté dans l'embrasure. Quand tu t'en vas, tu sens son regard dans ton dos jusqu'au bout de la coursive.",
    ],
    fx: { flag: "morvan:alerte" },
    choices: [{ back: "H_arriere" }],
  },

  // ------------------------------------------------------------------ the mutiny
  M_mutinerie: {
    act: "II", title: "La mutinerie", place: "pont",
    text: [
      "On frappe à ta porte à coups de poing. Quand tu sors, la coursive est pleine d'hommes armés de barres d'anspect, de coutelas, et d'un mousquet. Guénolé est à leur tête, et il a l'air plus malheureux que menaçant.",
      "« On veut de l'eau, dit-il. De l'eau à volonté, et notre solde, et qu'on fasse demi-tour sur Gavre. On a soif, on a peur, et on ne veut pas finir comme la Bergeronnette. » Derrière lui, les hommes grondent. On a enfermé le capitaine dans sa chambre. Daoulas est assis par terre devant la porte, les mains sur les genoux.",
      "Le second fend la foule et lève les deux mains. « Les gars. Les gars. Personne ne va pendre personne. » Il se tourne vers Guénolé. « Je prends le commandement, puisque le capitaine ne peut plus. Vous aurez votre eau ce soir. Pour le reste, on en parlera. » Les hommes se regardent et baissent leurs armes, un peu. Ils l'aiment bien, le second.",
      "Puis tous les yeux se tournent vers toi, et vers la clé du coffre de bord pendue à ton cou.",
    ],
    fx: { set: { commandement: "morvan" }, flag: "mutinerie" },
    choices: [
      { label: "Te ranger du côté des hommes", fx: { camp: "gaillard", stock: { equipage: 20 }, regard: { guenole: "cordial" } }, to: "M_avec" },
      { label: "Parler aux hommes : l'eau, la solde, et la vérité", test: { dom: "social", diff: -10, label: "Social", help: [{ clues: "M", min: 3, v: 15 }, { with: "armelle", v: 10 }] }, win: { to: "M_parle" }, lose: { fx: { stock: { equipage: 10 } }, to: "M_avec" } },
      { label: "Défendre l'autorité du capitaine, l'arme à la main", test: { dom: "combat", diff: -20, label: "Combat", help: [{ with: "armelle", v: 15 }, { if: { has: "passe:garde" }, v: 10 }] }, win: { fx: { camp: "capitaine", stock: { equipage: 15 }, blessure: "arcade" }, to: "M_tenu" }, lose: { to: "F_derive" } },
    ],
  },
  M_avec: {
    title: "La mutinerie", place: "pont",
    text: [
      "Tu ôtes la clé du coffre de ton cou et tu la tends à Guénolé. « Votre solde est là-dedans. Comptez-la vous-mêmes. » Le maître d'équipage regarde la clé, puis toi, et il la refuse d'un geste. « Garde-la. Mais paie-nous. »",
      "On paie la solde le soir même, au pied du grand mât, et on rend l'eau à volonté. Le second commande la Sterne, et il ne parle plus de faire demi-tour. Personne n'ose lui en reparler.",
    ],
    fx: { stock: { coffre: -60 }, set: { rations: "pleine" }, flag: "coffre:avance" },
    choices: [{ back: "H_pont" }],
  },
  M_parle: {
    title: "La mutinerie", place: "pont",
    text: [
      "Tu montes sur un tonneau. Tu parles de l'eau d'abord, parce que c'est ce qu'ils ont en tête : combien il en reste, combien de jours jusqu'à Marbecq, et comment on la partagera. Puis tu parles de la solde, et tu promets de la payer ce soir. Enfin, parce qu'ils t'écoutent, tu leur dis que quelqu'un, à bord, veut empêcher la Sterne d'arriver, et que ce n'est ni le capitaine ni toi.",
      "Les hommes se regardent. Guénolé a posé sa barre d'anspect. « Qui ? » demande quelqu'un. « Je vous le dirai devant tout le monde, quand j'aurai de quoi le prouver », réponds-tu.",
      "Le second te regarde par-dessus les têtes. Son sourire a disparu.",
    ],
    fx: { stock: { equipage: 25, coffre: -60 }, set: { commandement: null, rations: "pleine" }, unflag: "mutinerie", flag: ["coffre:avance", "morvan:alerte"], regard: { guenole: "allie", morvan: "hostile" }, sway: { commandement: { guenole: "contre" } }, ep: ["histoire", 2500] },
    choices: [{ label: "Descendre du tonneau", to: "H_pont" }],
  },
  M_tenu: {
    title: "La mutinerie", place: "pont",
    text: [
      "Tu tires ton arme et tu te places devant la porte du capitaine, à côté de Daoulas. Le premier qui avance prend un coup de plat de lame sur l'épaule ; le deuxième te frappe au visage avec le manche d'un coutelas, et le sang te coule dans l'œil. Mais tu tiens.",
      { with: "armelle", text: "Armelle est à côté de toi, sa hache à deux mains, et l'envie d'aller voir de plus près quitte tout le monde." },
      "Les hommes reculent. Guénolé baisse la tête le premier. Le second lève les mains, en riant presque. « Bon. Le subrécargue a parlé. » La mutinerie meurt là, dans la coursive, sans un mort. Le soir, on rend quand même l'eau à volonté.",
    ],
    fx: { set: { commandement: null, rations: "pleine" }, unflag: "mutinerie", regard: { coet: "redevable", guenole: "mefiant" }, ep: ["histoire", 2000] },
    choices: [{ label: "Aller faire soigner ton visage", to: "H_arriere" }],
  },
};
