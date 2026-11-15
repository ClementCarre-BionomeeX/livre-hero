// Lot iii3 of "Le Trésor des Taiseurs": the fourth cache under the Mont-Taciturne. The descent through the galleries of the
// Taiseurs (a door that opens to silence, seven speaking mouths, the bridge of avowal), the hall of Reflections and the
// mirror without silvering, which turns to the hero; the remembrance of the night of the Lanterns; the truth about Brother
// Gildas and what the hero does with it; two side quests (the trapped quarryman, the wall of names), the offerings to the
// queen, a singing stone; the way back up to the abbey.
var P = {};

// ==================================================================== the descent
Object.assign(P, {
  IIIR_seuil: { act: "III", title: "La porte basse", place: "mont", backName: "la porte basse de la crypte",
    text: [
      { first: true, text: "Frère Isidore, le portier, marche devant toi avec une lampe de corne et ne se retourne pas une fois. Il te fait descendre sous la salle des voix par un escalier de cave, puis traverser une crypte où les premiers abbés dorment dans des niches murées, chacun sous une croix et une date. Au fond, derrière l'ossuaire, une porte basse est taillée dans le roc de la montagne, plus vieille que l'église. Isidore y glisse une clé de bronze vert, la tourne à deux mains, et la porte s'ouvre sur un air froid qui sent l'eau et la pierre mouillée." },
      { first: true, text: "Le portier te tend sa lampe. Puis il fait trois signes, lentement, pour que tu les retiennes : la main plate sur la bouche, deux doigts qui descendent, le poing fermé contre le cœur. Il les répète une fois, et il remonte l'escalier en emportant sa chandelle." },
      { first: true, with: "gildas", text: "Frère Gildas a regardé les signes par-dessus ton épaule. « Tais-toi, descends, tiens bon, traduit-il. On le dit aux novices la première fois qu'ils descendent. » Il remonte sa capuche jusqu'aux sourcils." },
      { again: true, text: "La porte basse, au fond de la crypte, entre l'ossuaire et la montagne. L'air qui en monte a toujours la même odeur d'eau." },
      "La pierre du seuil est {{echo#iiir_e_seuil|usée en creux par trois siècles de pas|pleine d'une voix de vieillard, très proche : « Gildas, tu descendras seul et tu remonteras seul. Ce que tu garderas, tu le garderas sans aide. »}}. Tu prends la lampe {{miroir#iiir_m_lampe|pour éclairer la descente|pour avoir quelque chose à tenir, et que ta main cesse de chercher la rampe d'un escalier de cave}}.",
      { with: "tibere", text: "Tibère se penche dans l'ouverture, renifle, et crache de côté. « Ça sent la mine. J'ai fait trois mois à la prison des carrières, au Guet, de garde. Je n'aime pas les trous. »" },
      { with: "lison", text: "Lison passe la main sur le chambranle, là où quelqu'un a gravé, à hauteur d'enfant, un petit croissant. Elle retire sa main sans rien dire." },
    ],
    choices: [
      { label: "Descendre dans la montagne", big: true, hide: { seen: "IIIR_galeries" }, to: "IIIR_escalier" },
      { label: "Redescendre aux galeries des Taiseurs", hide: { not: { seen: "IIIR_galeries" } }, back: "IIIR_galeries" },
      { back: "IIIM_porte" },
    ] },

  IIIR_escalier: { act: "III", title: "L'escalier des muets", place: "mont", takes: 1,
    text: [
      "L'escalier descend dans le roc en tournant sur lui-même, assez large pour un homme et sa lampe. Les marches ont été taillées au pic, puis polies par les pieds, et chacune garde au milieu un creux où l'eau dort. Toutes les sept marches, une main est gravée dans la paroi, l'index sur les lèvres. Les mains sont {{pie#iiir_p_mains|grossières, faites au burin de carrier|faites au burin fin, et chacune replie un doigt de plus que la précédente : elles comptent, et la septième est un poing}}.",
      "Tu comptes les marches {{miroir#iiir_m_marches|pour passer le temps|parce qu'il y en avait quatorze chez Odeline, et que tu les as comptées une à une, le matin où tu l'as trouvée}}. Au bout de trois cents, tu cesses. L'air se fait plus froid, puis plus humide, puis il se met à bouger contre ton visage, comme s'il y avait une grande salle en bas.",
      { with: "tibere", text: "Tibère descend derrière toi en jurant à chaque marche, à voix basse, par égard pour les moines. « Mes genoux, dit-il. Mes genoux ont voté contre. »" },
      { with: "salome", text: "Salomé Brac touche la paroi à chaque tour, du plat de la main, comme on touche le bordé d'une barque pour savoir s'il fait eau. « Il y a de la mer quelque part, là-dessous, dit-elle. Ou de l'eau qui s'en souvient. »" },
      { with: "gildas", text: "Frère Gildas descend sans lampe, en dernier, les doigts sur les mains gravées. Il les compte à voix basse, en latin, et quand il arrive au poing, il s'arrête un instant avant de repartir." },
      { with: "lison", text: "Lison descend en sautant les marches deux par deux, puis elle cesse de sauter. Elle a vu, comme toi, que les creux des marches sont plus profonds à gauche : depuis trois siècles, les gens qui descendent ici tiennent la paroi de la main droite." },
    ],
    choices: [{ label: "Continuer jusqu'au bas de l'escalier", to: "IIIR_porte_bouche" }] },

  IIIR_porte_bouche: { act: "III", title: "La porte à la bouche", place: "mont",
    text: [
      "L'escalier finit sur une porte de pierre noire, d'un seul bloc, plus haute que deux hommes. Elle est lisse de haut en bas, sans un anneau. Au milieu, à hauteur de visage, un sculpteur a taillé une bouche de femme, les lèvres closes, si fine que la pierre semble tiède. Entre les lèvres court une fente large comme un fil.",
      "Au-dessus de la bouche, une ligne est gravée en lettres anciennes : *{{loupe#iiir_l_porte|Dis ton nom à la reine, et entre|La reine ne peut plus entendre les noms. Tais-toi le temps de cent battements, et la pierre t'entendra}}.*",
      "La porte est {{echo#iiir_e_porte|froide et muette sous ta main|pleine d'une voix jeune et lasse : « Tais-toi, frère, et compte jusqu'à cent. Elle t'ouvrira quand elle n'entendra plus rien. »}}.",
      { if: { has: "metier:mains" }, text: "Tu passes la paume sur la pierre, autour de la bouche. Tes doigts trouvent une veine plus lisse, de la largeur d'un pouce, qui descend de la fente jusqu'au sol et disparaît dans la dalle." },
      { with: "lison", text: "Lison regarde la bouche de très près, sans la toucher. « Chez nous, les portes, on les écoute avant de leur parler », dit-elle. Elle ne dit pas si c'est un proverbe ou un conseil." },
      { with: "tibere", text: "Tibère a déjà mesuré la porte des yeux, et l'interstice en bas, et le levier qu'il faudrait. « Avec une barre de fer et deux hommes, dit-il, ça se discute. »" },
    ],
    choices: [
      { label: "Dire à voix haute, devant la bouche, le nom de la reine", to: "IIIR_porte_parole" },
      { label: "Faire signe à tous de se taire, et compter jusqu'à cent", hide: { not: { any: [{ voile: "iiir_e_porte" }, { voile: "iiir_l_porte" }] } }, to: "IIIR_porte_silence" },
      { label: "« Faites comme moi. »", who: "gildas", fx: { flag: "iiir:porte_gildas" }, to: "IIIR_porte_silence" },
      { label: "« Laisse-moi l'écouter. »", who: "lison", fx: { flag: "iiir:porte_lison" }, to: "IIIR_porte_silence" },
      { label: "Forcer la porte au levier, par l'interstice du bas", test: { dom: "combat", diff: -10, label: "Faire pivoter un bloc de pierre", help: [{ with: "tibere", v: 15 }, { with: "salome", v: 10 }] },
        win: { to: "IIIR_porte_force" }, lose: { fx: { pv: -4 }, to: "IIIR_porte_force" } },
    ],
    silence: { label: "Te taire, et attendre devant la bouche", to: "IIIR_porte_silence" } },

  IIIR_porte_parole: { act: "III", title: "Le nom de la reine", place: "mont",
    text: [
      "« Ysaure », dis-tu, distinctement, devant les lèvres de pierre.",
      "Ta voix part dans la fente. Derrière la pierre, très loin, quelque chose de petit et de dur roule, tinte contre une paroi, et retombe. Puis plus rien. La porte n'a pas bougé d'un cheveu.",
      { if: { has: "metier:mains" }, text: "Ta paume posée sur la veine lisse a senti la pierre frémir pendant que tu parlais, et s'arrêter ensuite." },
      { with: "tibere", text: "« Elle a peut-être un autre nom, propose Tibère. Les reines en ont plusieurs. La Muette, la Folle. » Il dit « la Folle » un peu fort, et derrière la pierre, la petite chose roule encore, et retombe encore." },
      { with: "salome", text: "Salomé a penché la tête. « Tu as entendu ? Chaque fois qu'on parle, ça retombe. Comme un plomb de sonde qui touche et remonte. »" },
    ],
    choices: [{ label: "Réfléchir devant la porte", back: "IIIR_porte_bouche" }] },

  IIIR_porte_silence: { act: "III", title: "Cent battements", place: "mont",
    fx: { ep: ["perso", 900] },
    text: [
      { after: "iiir:porte_gildas", text: "Frère Gildas passe devant toi. Il pose les deux mains à plat sur la porte, de chaque côté de la bouche, baisse la tête, et ne bouge plus. Il ne vous explique rien. Il attend que vous ayez compris." },
      { after: "iiir:porte_lison", text: "Lison pose l'oreille contre la pierre, près des lèvres, et lève une main ouverte vers vous : silence. Elle garde l'oreille collée, les yeux fermés, comme on écoute un enfant dormir à travers une cloison." },
      "Vous vous taisez. C'est plus long qu'on croit, cent battements de cœur, dans le noir, avec une lampe qui grésille. Tu entends l'eau qui goutte quelque part, ta propre respiration, le cuir de ta ceinture qui craque quand tu respires.",
      { with: "tibere", text: "Vers le soixantième battement, Tibère s'éclaircit la gorge. Derrière la pierre, la petite chose roule et retombe. Il reçoit quatre regards à la fois. Vous recommencez à zéro." },
      "Puis, derrière les lèvres, quelque chose roule longuement, sans retomber cette fois, et va frapper un loquet avec un bruit de clé. La porte tourne sur un pivot caché en son milieu, sans grincer, et vous laisse passer de chaque côté.",
      { with: "gildas", text: "Frère Gildas retire ses mains de la pierre. Ses paumes y ont laissé deux traces de buée qui s'effacent lentement." },
    ],
    choices: [{ label: "Entrer dans les galeries", big: true, to: "IIIR_galeries" }] },

  IIIR_porte_force: { act: "III", title: "La porte forcée", place: "mont",
    fx: { flag: "iiir:porte_forcee", ep: ["perso", 600] },
    text: [
      { outcome: "win", text: "La barre mord dans l'interstice. Tu pèses, la pierre résiste, puis cède d'un coup avec un craquement sec qui court dans tout le bloc : le pivot central a cassé. La porte s'incline, et reste penchée, ouverte d'une épaule, comme un meuble dont on a scié un pied." },
      { outcome: "lose", text: "La barre glisse, et ta main va s'écraser contre l'arête de la porte. La douleur te remonte jusqu'à l'épaule. Mais quelque chose a bougé dans la pierre, et quand tu pèses de nouveau, de ton autre main, le pivot central casse avec un craquement sec. La porte s'incline, ouverte d'une épaule." },
      "Le bruit roule loin devant vous dans la montagne, de galerie en galerie, et revient sur lui-même plusieurs fois avant de s'éteindre. Puis, très loin, quelqu'un frappe. Trois coups, une pause, trois coups. Quelque chose a répondu.",
      { with: "tibere", text: "Tibère essuie ses mains sur ses cuisses. « Ça, dit-il, c'est un homme. Les fantômes ne frappent pas par trois. »" },
      { with: "gildas", text: "Frère Gildas regarde le pivot cassé longtemps. « Elle avait trois cents ans », dit-il. Il passe le premier par l'ouverture." },
    ],
    choices: [{ label: "Te glisser par l'ouverture, dans les galeries", big: true, to: "IIIR_galeries" }] },
});

// ==================================================================== the crossroads of the Mutes (hub) and the singing stone
Object.assign(P, {
  IIIR_galeries: { act: "III", title: "Le carrefour des Muets", place: "mont", hub: true, backName: "le carrefour des Muets",
    text: [
      { first: true, text: "La galerie débouche dans une salle ronde, haute comme une nef, creusée à même la montagne. Sept galeries en partent comme les rayons d'une roue. Au centre, un puits à margelle de pierre blanche descend dans le noir, et l'on entend tout au fond une eau qui court. Contre la paroi, entre les galeries, sept statues de moines, grandeur d'homme, se tiennent debout, l'index sur les lèvres, et de l'autre main chacune montre une galerie." },
      { first: true, text: "Une huitième niche est vide. Sur son socle, quelqu'un a sculpté deux pieds nus de femme, et rien au-dessus." },
      { again: true, text: "Le carrefour des Muets : le puits, les sept moines de pierre, la niche vide aux deux pieds nus. Ta lampe fait bouger leurs ombres sur la voûte." },
      "Le puits est {{echo#iiir_e_puits|silencieux, à part l'eau tout au fond|plein d'un murmure de plusieurs voix qui récitent ensemble, très bas : « La reine a sept muets, qui ne disent rien ; le premier garde l'or, le dernier garde le sien »}}.",
      { with: "lison", first: true, text: "Lison fait le tour des statues. « La comptine du Beffroi, dit-elle. Sept muets. Ils l'ont mise partout, hein. Même dans le noir. »" },
      { after: "mont:ouverte", text: "Tu poses la lampe sur la margelle {{miroir#iiir_m_puits|pour avoir les mains libres|parce que tes mains tremblent depuis le miroir, et que la flamme le montrait à tout le monde}}." },
      { after: "gildas:chasse", without: "gildas", text: "Une lampe brûle au fond de la galerie basse, vers l'autel. Frère Gildas y est resté. Tu ne vas pas voir." },
      { after: "iiir:carrier_sauve", text: "Contre la paroi, la pioche de Sulpice Varon, oubliée ou laissée exprès, appuyée sous le moine du milieu." },
    ],
    choices: [
      { label: "La galerie des offrandes, où quelque chose brille", to: "IIIR_offrandes" },
      { label: "La galerie basse, vers une lueur d'autel", to: "IIIR_autel" },
      { label: "La galerie gravée de noms", to: "IIIR_noms" },
      { label: "Les coups sourds, derrière l'éboulis", hide: { has: "iiir:carrier_fin" }, to: "IIIR_eboulis" },
      { label: "La dalle qui chante, près du puits", to: "IIIR_pierre" },
      { label: "Dormir quelques heures près du puits", hide: { any: [{ not: { has: "miroir:vu" } }, { seen: "IIIR_veille" }] }, to: "IIIR_veille" },
      { label: "La galerie où souffle un vent tiède, vers les sept bouches", big: true, hide: { seen: "IIIR_reflets" }, to: "IIIR_bouches" },
      { label: "La salle des Reflets", hide: { not: { seen: "IIIR_reflets" } }, to: "IIIR_reflets" },
      { label: "Remonter vers l'abbaye, avec ce que tu portes", big: true, hide: { not: { has: "mont:ouverte" } }, to: "IIIR_remontee" },
      { label: "Remonter l'escalier jusqu'à la porte basse", hide: { has: "mont:ouverte" }, back: "IIIR_seuil" },
    ] },

  IIIR_pierre: { act: "III", title: "La dalle qui chante", place: "mont", backName: "la dalle qui chante",
    text: [
      { first: true, text: "Près du puits, une dalle ronde est enchâssée dans le sol, d'une pierre plus pâle que le reste, veinée de jaune. Une goutte tombe de la voûte toutes les dix respirations, toujours au même endroit, et la dalle répond chaque fois par une note longue et basse que tu sens dans tes dents avant de l'entendre. L'eau a creusé à cet endroit un petit bassin parfait." },
      { again: true, text: "La dalle pâle, la goutte, la note longue qui monte du sol." },
      "L'air au-dessus de la dalle est {{echo#iiir_e_pierre|immobile et frais|plein d'une voix de vieille femme, enjouée : « Odeline, pose ta main là. Tu sens ? C'est la reine qui respire. » Et une voix de petite fille : « Elle respire mal. »}}.",
      { if: { item: "diapason" }, text: "Le diapason, dans ta poche, s'est mis à vibrer tout seul, de la même note que la dalle." },
      { with: "salome", text: "Salomé s'accroupit et met la main à plat sur la dalle, entre deux gouttes. « Aux Écueils, dit-elle, les pierres chantaient comme ça. Maïwenn disait qu'il fallait leur répondre. » Elle retire sa main." },
    ],
    choices: [
      { label: "Frapper le diapason contre la dalle, et le laisser boire la note", if: { item: "diapason" }, why: "Il faudrait le diapason de Sorne.", fx: { recharge: { echo: 3 }, note: "Le diapason a bu la note de la dalle. Il chante de nouveau, plein." }, back: "IIIR_galeries" },
      { back: "IIIR_galeries" },
    ] },
});

// ==================================================================== the seven mouths
Object.assign(P, {
  IIIR_bouches: { act: "III", title: "La salle des sept bouches", place: "mont", backName: "la salle des sept bouches",
    text: [
      { first: true, text: "Au bout de la galerie, la paroi s'aplanit en un mur lisse, et dans ce mur sont scellées sept bouches de bronze, à hauteur de lèvres, chacune ouverte sur un tube qui s'enfonce dans le roc. Chaque bouche souffle. Tu passes de l'une à l'autre, l'oreille tendue. La première rend un vent sec. La deuxième, très loin, le chant des moines à l'office. La troisième, une eau qui court, large, assez pour qu'un homme y passe à quatre pattes. La quatrième, des gouttes. La cinquième, un bourdon grave. La sixième, un ronflement de forge. La septième, rien." },
      { again: true, text: "Les sept bouches de bronze soufflent leurs sept bruits. La septième se tait toujours." },
      "Au-dessus des bouches, une phrase est gravée en lettres hautes : *{{loupe#iiir_l_bouches|La reine suit la voix qui ne ment pas|La reine suit la voix qu'elle reconnaît. Parle, et suis celle qui te répond}}.* La salle elle-même est {{echo#iiir_e_bouches|sèche et sonore|pleine d'un rire de jeune moine, et d'une autre voix qui le gronde : « La septième, frère. Parle-lui, elle te répond. Les autres ne t'ont jamais connu. »}}.",
      { with: "tibere", text: "Tibère a collé son oreille à la sixième bouche. « On forge, là-haut ? » « Le vent dans un conduit, peut-être », dis-tu. Il hoche la tête comme quelqu'un qui préférait la forge." },
      { with: "salome", text: "Salomé passe le long du mur sans se presser, et s'arrête à la septième. Elle siffle deux notes, très bas, et tend l'oreille. Son visage change." },
    ],
    choices: [
      { label: "Parler dans la septième bouche, celle qui se tait", hide: { not: { any: [{ voile: "iiir_e_bouches" }, { voile: "iiir_l_bouches" }] } }, to: "IIIR_bouches_ecoute" },
      { label: "« Écoute ça. »", who: "salome", to: "IIIR_bouches_ecoute" },
      { label: "Dire ton nom dans chaque bouche, une à une, et attendre", to: "IIIR_bouches_ecoute", fx: { time: 1 } },
      { label: "Écouter chaque bouche longtemps, et choisir", test: { dom: "nature", diff: -10, label: "Lire des bruits dans le noir", help: [{ with: "lison", v: 10 }, { with: "salome", v: 15 }, { if: { has: "metier:parole" }, v: 5 }] },
        win: { to: "IIIR_bouches_ecoute" }, lose: { to: "IIIR_bouches_rate" } },
      { label: "Ramper dans la troisième bouche, celle de l'eau, la plus large", to: "IIIR_bouches_rate" },
      { back: "IIIR_galeries" },
    ] },

  IIIR_bouches_ecoute: { act: "III", title: "La voix qui répond", place: "mont",
    fx: { ep: ["perso", 1000] },
    text: [
      "Tu te penches sur la septième bouche et tu dis ton nom. « {hero}. » Le bronze l'avale. Tu attends, le souffle court, et rien ne revient. Puis, au moment où tu te redresses, ton nom revient : ta voix, à toi, un peu plus grave, un peu plus lente, qui le dit dans le tube depuis très loin.",
      "En même temps, le mur pivote. Une section de la largeur d'une porte tourne sur elle-même autour de la septième bouche, et découvre une galerie étroite qui descend en pente douce. Un air plus froid en monte, et une lumière grise, sans flamme, qui vient de plus bas.",
      { with: "salome", text: "« Un écho, dit Salomé. Rien qu'un écho. Le seul tube qui rende ce qu'on lui donne. » Elle a l'air presque déçue, et elle sourit." },
      { with: "gildas", text: "Frère Gildas a fermé les yeux au moment où ta voix est revenue. Il les rouvre. « La première fois, dit-il, on croit que c'est quelqu'un d'autre. »" },
    ],
    choices: [{ label: "Descendre par la galerie étroite", big: true, to: "IIIR_pont" }] },

  IIIR_bouches_rate: { act: "III", title: "La citerne", place: "mont",
    fx: { pv: -3 },
    text: [
      "Le tube de l'eau descend plus vite que tu croyais. Tu glisses sur le dos dans un courant glacé qui te prend jusqu'au cou, tu cognes une épaule, puis le tube te recrache dans une citerne ronde où l'eau t'arrive à la poitrine. Ta lampe est restée en haut. Il fait noir, et il fait froid à en perdre les doigts.",
      { without: "any", text: "Personne pour t'entendre jurer. Tu jures quand même." },
      { with: "any", text: "Au-dessus de toi, dans le tube, des voix t'appellent, déformées par le bronze. Une corde descend, puis une lumière." },
      "À tâtons sur le fond, tes doigts rencontrent des cailloux, des os d'animaux, une lame de couteau rongée. Puis, à la lumière qu'on te descend, tu vois un caillou rond {{pie#iiir_p_clochette|poli par l'eau, gris comme les autres|d'argent noirci, creux, une clochette sans battant que l'eau a roulée trois siècles}} sous ta botte.",
      "Et dans le noir, au-dessus de la citerne, par une fente de la voûte, tu entends quelqu'un parler. C'est ta voix. Elle répète ton nom, celui que tu as crié en tombant, avec un peu de retard. Elle vient d'un autre tube, à côté du tien : la septième bouche.",
    ],
    choices: [
      { label: "Ramasser le caillou d'argent", hide: { any: [{ not: { voile: "iiir_p_clochette" } }, { has: "tresor:iiir_clochette" }] }, fx: { item: "iiir_tr_clochette", clock: { tresors: 1 }, flag: "tresor:iiir_clochette", ep: ["perso", 400] }, to: "IIIR_bouches_corde" },
      { label: "Fouiller le fond à pleines mains, au cas où", if: { has: "metier:mains" }, why: "Il faudrait des mains de fouilleur.", hide: { any: [{ voile: "iiir_p_clochette" }, { has: "tresor:iiir_clochette" }] }, fx: { item: "iiir_tr_clochette", clock: { tresors: 1 }, flag: "tresor:iiir_clochette", ep: ["perso", 400] }, to: "IIIR_bouches_corde" },
      { label: "Remonter à la corde, au plus vite", to: "IIIR_bouches_corde" },
    ] },

  IIIR_bouches_corde: { act: "III", title: "Remonter de la citerne", place: "mont",
    text: [
      { if: { item: "iiir_tr_clochette" }, text: "Tu remontes avec la clochette serrée dans le poing. Elle est lourde pour sa taille. Sur le rebord, quelqu'un a gravé une couronne minuscule et trois mots : *pour qu'elle appelle*." },
      { with: "any", text: "On te hisse par le tube, à la corde, en te râpant les coudes sur le bronze. On te frotte les bras avec un manteau. Tu claques des dents si fort que tu as du mal à parler." },
      { without: "any", text: "Tu remontes seul{e}, le long d'une chaîne scellée dans la citerne pour les moines qui la curent, et tu ressors par une trappe à côté des bouches, trempé{e} jusqu'aux os." },
      "Tu sais maintenant laquelle répond. Tu te penches sur la septième bouche, tu dis ton nom en grelottant, et ta voix te revient, grelottante elle aussi.",
    ],
    choices: [{ label: "Attendre que le mur tourne", to: "IIIR_bouches_ecoute" }] },
});

// ==================================================================== the bridge of avowal
Object.assign(P, {
  IIIR_pont: { act: "III", title: "Le pont de l'aveu", place: "mont", backName: "le pont de l'aveu",
    text: [
      "La galerie débouche sur le vide. Une faille fend la montagne de haut en bas, si profonde que la lumière grise s'y perd, et un pont de pierre la franchit d'une seule arche, large d'un pas. Au milieu de l'arche, une dalle carrée repose sur un axe : on voit l'axe dépasser des deux côtés, et la dalle ne tient à plat que par un loquet. De l'autre côté, une porte ouverte, et la lumière grise qui en sort.",
      "À l'entrée du pont, sur un poteau de pierre, est enchâssé un disque d'ambre gros comme une paume, d'un jaune trouble. Sous le disque, l'inscription tient en cinq mots : *{{loupe#iiir_l_pont|Passe qui dit ce qu'il tait|L'ambre entend comme le cornet. Une vérité qui ne coûte rien fait basculer la dalle}}.*",
      { if: { item: "cornet" }, text: "Le cornet d'os, dans ta poche, est chaud. Tu le sens à travers l'étoffe, et tu sais d'où vient l'ambre de ce disque." },
      { with: "tibere", text: "Tibère se penche au-dessus de la faille, recule, et se signe d'une main qui en a perdu l'habitude." },
      { with: "lison", text: "Lison lit l'inscription à voix basse, deux fois. Puis elle regarde ailleurs, très vite." },
      { with: "gildas", text: "Frère Gildas se tient au bord, les mains dans les manches. Il regarde la dalle du milieu comme un homme regarde une chose qu'il a déjà traversée." },
    ],
    choices: [
      { label: "Dire devant l'ambre ce que tu dois, et à qui", if: { has: "poids:dette" }, why: "Ce n'est pas ce qui te pèse.", fx: { set: { iiir_pont: "dette" } }, to: "IIIR_pont_vrai" },
      { label: "Dire devant l'ambre que tu aimes quelqu'un, et pourquoi tu cherches", if: { has: "poids:amour" }, why: "Ce n'est pas ce qui te pèse.", fx: { set: { iiir_pont: "amour" } }, to: "IIIR_pont_vrai" },
      { label: "Dire devant l'ambre comment tu dors depuis qu'elle est morte", if: { has: "poids:rien" }, why: "Ce n'est pas ce qui te pèse.", fx: { set: { iiir_pont: "rien" } }, to: "IIIR_pont_vrai" },
      { label: "Dire devant l'ambre que tu as menti au Guet", fx: { set: { iiir_pont: "guet" } }, to: "IIIR_pont_vrai" },
      { label: "Dire une vérité commode : que tu es fatigué{e}", to: "IIIR_pont_bascule" },
      { label: "« J'ai quelque chose à dire, moi. »", who: "tibere", hide: { has: "tibere:aveu" }, fx: { set: { iiir_tibere: "espion" } }, to: "IIIR_pont_tibere" },
      { label: "« J'ai quelque chose à dire, moi. »", who: "tibere", hide: { not: { has: "tibere:aveu" } }, fx: { set: { iiir_tibere: "rosalie" } }, to: "IIIR_pont_tibere" },
      { label: "« Laisse. C'est mon tour. »", who: "lison", to: "IIIR_pont_lison" },
      { label: "« Je vais le dire, moi. Ça fait trois ans. »", who: "salome", to: "IIIR_pont_salome" },
      { label: "« Je connais ce pont. »", who: "gildas", to: "IIIR_pont_gildas" },
      { label: "Passer à la corde, sans rien dire, par le bord de l'arche", if: { item: "corde" }, why: "Il faudrait une corde.", test: { dom: "nature", diff: -20, label: "Franchir une arche large d'un pas", help: [{ with: "salome", v: 10 }, { with: "lison", v: 10 }, { if: { arch: "voleur" }, v: 10 }] },
        win: { to: "IIIR_pont_passe" }, lose: { to: "IIIR_pont_chute" } },
      { back: "IIIR_galeries" },
    ] },

  IIIR_pont_vrai: { act: "III", title: "Devant l'ambre", place: "mont",
    fx: { flag: "iiir:pont", ep: ["perso", 1200] },
    text: [
      "Tu te mets devant le disque d'ambre. Tu as l'impression ridicule de parler à un moine. Tu parles quand même, assez haut pour que les autres entendent, parce qu'une vérité à voix basse ressemble trop à un secret.",
      { if: { is: { iiir_pont: "dette" } }, text: "« Je dois de l'argent à des gens du port, dis-tu. Plus que je n'en gagne en un an. Depuis qu'Odeline est morte, je pense à eux plus souvent qu'à elle. »" },
      { if: { is: { iiir_pont: "amour" } }, text: "« J'aime quelqu'un qui ne le sait pas, dis-tu. Ou qui fait semblant. Je cherche ce trésor pour avoir quelque chose à lui montrer en revenant. »" },
      { if: { is: { iiir_pont: "rien" } }, text: "« Je dors bien, dis-tu. Depuis qu'elle est morte, je dors très bien. Toutes les nuits. Ça me fait peur. »" },
      { if: { is: { iiir_pont: "guet" } }, text: "« J'ai menti au Guet, dis-tu. J'ai dit que je n'avais pas vu Odeline depuis le matin. Je l'ai vue le soir. On s'est disputé{e}s. »" },
      "L'ambre se met à luire, faiblement, d'une lumière de miel, et un loquet claque quelque part sous l'arche. La dalle du milieu s'est verrouillée. Le disque reste allumé un long moment, puis s'éteint.",
      { with: "tibere", if: { is: { iiir_pont: "guet" } }, text: "Tibère te regarde sans rien dire. Il était du Guet, ce matin-là. Il finit par hausser les épaules. « Tout le monde ment au Guet, dit-il. Moi aussi, quand j'y étais. »" },
      { with: "lison", text: "Lison te touche le coude en passant devant toi sur le pont, une seule fois, du bout des doigts." },
    ],
    choices: [{ label: "Traverser le pont", big: true, to: "IIIR_pont_passe" }] },

  IIIR_pont_bascule: { act: "III", title: "La dalle bascule", place: "mont",
    text: [
      "« Je suis fatigué{e} », dis-tu devant l'ambre. C'est vrai. Le disque reste terne. Tu t'engages sur l'arche, tu poses le pied sur la dalle du milieu, et la dalle tourne sur son axe avec un bruit de meule.",
      "Tu te jettes en avant. Tes mains cherchent le bord de l'autre moitié de l'arche, et la faille souffle sous toi un air glacé qui sent l'eau très loin en bas.",
    ],
    choices: [
      { label: "T'agripper au bord de l'arche", test: { dom: "nature", diff: -10, label: "Se rattraper au-dessus du vide", help: [{ with: "tibere", v: 10 }, { with: "salome", v: 10 }, { with: "lison", v: 10 }] },
        win: { fx: { pv: -2 }, to: "IIIR_pont_passe" }, lose: { to: "IIIR_pont_chute" } },
    ] },

  IIIR_pont_tibere: { act: "III", title: "Ce que dit Tibère", place: "mont", with: "tibere",
    fx: { flag: "iiir:pont", ep: ["perso", 1000] },
    text: [
      "Tibère se plante devant le disque d'ambre, les pouces dans le ceinturon, comme devant un sergent. Il prend son souffle deux fois avant de parler.",
      { if: { is: { iiir_tibere: "espion" } }, text: "« Je prends cinq ducats la semaine à Lothaire Brunel, dit-il. Pour lui dire où tu dors, qui tu vois, ce que tu trouves. Je le fais depuis le premier jour. Depuis la cave. » Il ne te regarde pas. « Je lui ai écrit hier encore, à Orle. Je lui ai écrit que tu descendais dans la montagne. »" },
      { if: { is: { iiir_tibere: "rosalie" } }, text: "« Ma fille brûle mes lettres sans les ouvrir, dit-il. Je le sais parce que je suis resté dans la rue, la dernière fois, à regarder la fumée sortir de sa cheminée. Je continue à lui écrire. Je continue pour pouvoir dire que j'écris. »" },
      "L'ambre luit. Sous l'arche, le loquet claque. Tibère reste encore un moment devant le disque, comme s'il attendait une monnaie, puis il se détourne.",
      { if: { is: { iiir_tibere: "espion" } }, text: "« Voilà, dit-il. Maintenant tu sais. Tu peux me pousser du pont, c'est le bon endroit. »" },
    ],
    choices: [
      { label: "« Traverse, Tibère. On en reparlera en haut. »", hide: { not: { is: { iiir_tibere: "espion" } } }, fx: { flag: ["tibere:espion", "tibere:aveu"], conf: { tibere: 10 } }, to: "IIIR_pont_passe" },
      { label: "« Tu lui écriras que je suis tombé{e} dans la faille. »", hide: { not: { is: { iiir_tibere: "espion" } } }, fx: { flag: ["tibere:espion", "tibere:aveu", "tibere:double"], conf: { tibere: 15 } }, to: "IIIR_pont_passe" },
      { label: "Lui prendre la lampe des mains, et passer devant lui sans un mot", hide: { not: { is: { iiir_tibere: "espion" } } }, fx: { flag: ["tibere:espion", "tibere:aveu"], conf: { tibere: -10 } }, to: "IIIR_pont_passe" },
      { label: "Lui poser la main sur l'épaule, et traverser", hide: { not: { is: { iiir_tibere: "rosalie" } } }, fx: { conf: { tibere: 10 } }, to: "IIIR_pont_passe" },
    ] },

  IIIR_pont_lison: { act: "III", title: "Ce que dit Lison", place: "mont", with: "lison",
    fx: { flag: "iiir:pont", ep: ["perso", 1000] },
    text: [
      "Lison passe devant toi et se plante devant le disque d'ambre, les bras croisés, le menton haut. Elle regarde l'ambre comme elle regarde les douaniers du port.",
      { before: "lison:mission", text: "« Ma grand-mère m'a envoyée sur le quai pour te surveiller, dit-elle. Et pour reprendre le cornet, si tu n'étais pas digne de le porter. C'est moi qui devais en juger. Je juge encore. »" },
      { after: "lison:mission", text: "« J'ai peur de rentrer aux Joncs, dit-elle. Quand tout sera fini. J'ai peur d'y être une étrangère, et ici aussi. »" },
      { after: "lison:mission", tendre: true, text: "« Ma grand-mère m'a rappelée trois fois, ajoute-t-elle. Je suis restée. Je dis que c'est pour le cornet. » Elle décroise les bras. « C'est pour toi. »" },
      "L'ambre luit, d'un jaune très doux. Sous l'arche, le loquet claque. Lison s'engage sur le pont sans se retourner, à grands pas, pour qu'on ne voie pas son visage.",
    ],
    choices: [{ label: "La suivre sur le pont", fx: { flag: "lison:mission", conf: { lison: 10 } }, to: "IIIR_pont_passe" }] },

  IIIR_pont_salome: { act: "III", title: "Ce que dit Salomé", place: "mont", with: "salome",
    fx: { flag: "iiir:pont", ep: ["perso", 1000] },
    text: [
      "Salomé Brac se met devant l'ambre et s'y appuie d'une main, comme au mât de *La Bavarde* par gros temps.",
      "« J'ai peur de replonger, dit-elle. Tout le monde croit que c'est le chagrin. C'est la peur. J'ai peur de la trouver, en bas, si je replonge. J'ai peur de la reconnaître. » Elle avale sa salive. « Voilà. Ouvre-toi, sale caillou. »",
      "L'ambre luit. Sous l'arche, le loquet claque. Salomé retire sa main du disque et regarde sa paume, comme si quelque chose y était resté collé.",
      { after: "salome:maiwenn", text: "« Elle est remontée, maintenant, en un sens, ajoute-t-elle. Grâce à toi. Ça ne change rien à la peur. »" },
    ],
    choices: [{ label: "Traverser derrière elle", fx: { conf: { salome: 10 } }, to: "IIIR_pont_passe" }] },

  IIIR_pont_gildas: { act: "III", title: "Ce que dit Gildas", place: "mont", with: "gildas",
    fx: { flag: ["iiir:pont", "iiir:pont_gildas"], ep: ["perso", 1000] },
    text: [
      "Frère Gildas va se placer devant le disque d'ambre. Il garde les mains dans ses manches et les yeux sur l'ambre. Il parle du ton dont il te lit une ligne de vieux latin.",
      "« J'ai fait tomber une femme que je connaissais depuis quarante ans, dit-il. Je l'ai laissée en bas des marches. »",
      "L'ambre s'allume d'un coup, d'un jaune vif, presque blanc, et le loquet sous l'arche claque si fort que l'écho en revient de la faille. Le disque reste allumé longtemps après les autres fois, si les autres fois existent. Gildas attend qu'il s'éteigne. Puis il traverse le pont, d'un pas égal, et t'attend de l'autre côté.",
      { with: "tibere", text: "Tibère te regarde. Tu le regardes. Il ouvre la bouche, et la referme." },
      { after: "gildas:demasque", text: "Tu sais déjà de quelle femme il parle. Lui aussi sait que tu le sais." },
    ],
    choices: [
      { label: "« Quelle femme, Gildas ? »", hide: { has: "gildas:demasque" }, to: "IIIR_gildas_aveu" },
      { label: "Traverser, et garder la question pour plus tard", to: "IIIR_pont_passe" },
    ] },

  IIIR_pont_chute: { act: "III", title: "La corniche", place: "mont",
    fx: { pv: -5, flag: "iiir:par_eau" },
    text: [
      "Tu tombes. Pas longtemps : trois toises, quatre peut-être, et une corniche te reçoit sur l'épaule et la hanche, si fort que tu restes un moment sans souffle, la joue contre la pierre mouillée. En dessous de la corniche, la faille continue, et tout en bas, très loin, une eau noire fait un bruit de foule.",
      { with: "any", text: "Au-dessus, on crie ton nom. Une lampe se penche sur le vide, une corde descend et se balance à une toise de ta main." },
      "La corniche suit la faille vers l'intérieur de la montagne. Elle a été taillée : il y a des marches, des encoches pour les mains, et une rigole d'eau qui court le long de la paroi. Elle va dans le même sens que la porte de l'autre côté du pont, mais par en dessous.",
    ],
    choices: [
      { label: "Attraper la corde, et remonter sur le pont", with: "any", to: "IIIR_pont_passe" },
      { label: "Suivre la corniche et la rigole, vers l'intérieur", to: "IIIR_reflets" },
    ] },

  IIIR_pont_passe: { act: "III", title: "L'autre rive", place: "mont",
    text: [
      "De l'autre côté du pont, la porte ouverte donne sur un escalier court qui monte vers la lumière grise. Elle vient de plus haut que la montagne : en levant les yeux, tu vois au plafond de l'escalier un puits de jour, étroit comme une cheminée, qui perce le roc jusqu'au ciel. Tout en haut, un petit carré blanc. Le jour entre là, et il descend jusqu'ici par réflexions, de miroir en miroir.",
      { outcome: "win", text: "Tu t'appuies au chambranle, le cœur battant contre les côtes, et tu attends qu'il se calme." },
      { after: "iiir:pont", text: "Derrière toi, le disque d'ambre luit encore un moment, puis s'éteint. La dalle du milieu reste verrouillée sur son axe : l'arche tiendra, pour qui repassera." },
      { with: "any", text: "Les autres te rejoignent un à un. Chacun garde pour soi ce qui a été dit devant l'ambre." },
    ],
    choices: [{ label: "Monter vers la lumière", big: true, to: "IIIR_reflets" }] },

});

// ==================================================================== the gallery of offerings (treasures)
Object.assign(P, {
  IIIR_offrandes: { act: "III", title: "La galerie des offrandes", place: "mont", backName: "la galerie des offrandes",
    text: [
      { first: true, text: "La galerie est bordée de niches, des deux côtés, sur trois rangs, comme un columbarium. Dans chaque niche, une chose posée sur un carré d'étoffe que le temps a rendu gris : un peigne, une bague, un bol de sel durci, une poupée de jonc, une fiole bouchée de cire, une mèche de cheveux nouée d'un fil rouge. Sous chaque niche, une date gravée, et un mot : un nom de famille des marais." },
      { first: true, text: "Ce sont les offrandes des Taiseurs à leur reine, une par famille et par an, depuis trois siècles. Les plus anciennes sont au fond, dans le noir. Les plus récentes, près de l'entrée, ont encore leurs couleurs." },
      { again: true, text: "Les niches des offrandes, rang sur rang, et leurs petites choses posées sur l'étoffe grise." },
      "Au-dessus de l'entrée, une règle est gravée : *{{loupe#iiir_l_offrandes|Ce qu'on donne à la reine reste à la reine|Ce qu'on donne à la reine reste à la reine, sauf pour la servir. Qui prend pour elle laisse son nom dans la niche}}.*",
      "Dans une niche du milieu, sept peignes sont alignés sur la même étoffe, {{pie#iiir_p_peigne|tous d'ivoire jauni, tous pareils|six d'os teint au thé, et le septième d'ivoire véritable, à dents d'argent, avec au dos un Y couronné}}. Plus loin, seul dans une grande niche, un reliquaire doré gros comme un pain de seigle est serti de pierres rouges {{pie#iiir_p_reliquaire|qui valent à elles seules une maison sur l'île des Changeurs|en verre coloré, sur une âme de plomb doré à la feuille ; dedans roule une langue de cire}}.",
      "Tu regardes les peignes {{miroir#iiir_m_peignes|avec l'œil du métier|en pensant au peigne d'écaille d'Odeline, resté sur sa table de nuit, que tu n'as pas eu le courage de toucher}}.",
      { with: "lison", text: "Lison s'arrête devant une niche de l'entrée : une petite nasse à anguilles, tressée serré. Sous la niche, *Vasse*, et une date d'il y a six ans. « Ma mère l'a faite, dit-elle. Je l'ai portée jusqu'ici à dix-huit ans. On m'avait bandé les yeux pour la descente. » Elle ne touche pas la nasse." },
    ],
    choices: [
      { label: "Prendre le peigne d'ivoire, et laisser ton nom dans la niche", hide: { any: [{ not: { voile: "iiir_p_peigne" } }, { not: { voile: "iiir_l_offrandes" } }, { has: "tresor:iiir_peigne" }] }, fx: { set: { iiir_peigne: "nom" } }, to: "IIIR_offr_peigne" },
      { label: "Prendre le peigne d'ivoire", hide: { any: [{ not: { voile: "iiir_p_peigne" } }, { voile: "iiir_l_offrandes" }, { has: "tresor:iiir_peigne" }] }, fx: { set: { iiir_peigne: "pris" }, fac: { taiseurs: -3 } }, to: "IIIR_offr_peigne" },
      { label: "Prendre le grand reliquaire doré", hide: { has: "iiir:reliquaire" }, to: "IIIR_offr_reliquaire" },
      { label: "Laisser toi-même une offrande à la reine", hide: { has: "iiir:offrande" }, to: "IIIR_offr_don" },
      { back: "IIIR_galeries" },
    ] },

  IIIR_offr_peigne: { act: "III", title: "Le peigne de la reine", place: "mont",
    fx: { item: "iiir_tr_peigne", clock: { tresors: 1 }, flag: "tresor:iiir_peigne", ep: ["perso", 800] },
    text: [
      "Le peigne est plus léger que les six autres. L'ivoire a la couleur d'un vieux miel, et les dents d'argent ont noirci sans se tordre. Au dos, le Y couronné est si petit qu'il faut l'incliner sous la lampe pour le voir. Il a été fait pour une main de femme, et pour des cheveux longs.",
      { if: { is: { iiir_peigne: "nom" } }, text: "Tu prends ton couteau et tu graves ton nom sur le bord de la niche, à côté de la date. La pierre est tendre. Les lettres sont maladroites. *{hero}, pour la reine.*" },
      { if: { is: { iiir_peigne: "pris" } }, text: "Tu le glisses dans ta veste. Sur l'étoffe grise, la place du peigne reste marquée en plus clair, sept dents nettes dans la poussière." },
      { with: "lison", if: { is: { iiir_peigne: "pris" } }, text: "Lison a vu. Elle regarde la marque dans la poussière, puis toi. « Chez nous, on coupe une main pour moins que ça, dit-elle. Dans les histoires. » Elle n'a pas l'air de plaisanter tout à fait." },
      { with: "gildas", text: "Frère Gildas regarde le peigne dans ta main. « Celui-là, dit-il, a été apporté par une femme qui avait coiffé la reine, la dernière année. Elle l'a descendu ici à soixante-dix ans. »" },
    ],
    choices: [{ back: "IIIR_offrandes" }] },

  IIIR_offr_reliquaire: { act: "III", title: "Le reliquaire doré", place: "mont",
    fx: { flag: "iiir:reliquaire", item: "iiir_faux_reliquaire", fac: { taiseurs: -2 } },
    text: [
      "Le reliquaire pèse comme un pavé. Tu le soulèves à deux mains de sa niche, et il laisse sur l'étoffe un rectangle plus clair où la poussière n'est jamais venue. Les pierres rouges brillent à la lampe. Quelque chose roule à l'intérieur, mou, avec un bruit de noix.",
      { after: "voile:iiir_p_reliquaire", text: "Tu sais ce que c'est. Tu le prends quand même, pour le poids de l'or sur le plomb, qui vaut bien quelques liards à un fondeur, et parce qu'il ressemble assez à un trésor pour tromper un acheteur pressé." },
      "Sous la niche, la date est récente, une trentaine d'années, et le mot gravé est un nom de la ville : *Marrel*.",
      { with: "tibere", text: "Tibère siffle entre ses dents. « La Banque fait des offrandes aux Taiseurs, maintenant ? » « Ou elle voulait qu'on le croie », dit quelqu'un. C'est toi." },
    ],
    choices: [{ back: "IIIR_offrandes" }] },
});

// ==================================================================== the altar of the Taiseurs (the confession)
Object.assign(P, {
  IIIR_autel: { act: "III", title: "L'autel des Taiseurs", place: "mont", backName: "l'autel des Taiseurs",
    text: [
      { first: true, text: "La galerie basse mène à une chapelle taillée dans le roc, pas plus grande qu'une chambre. Un autel de pierre noire, sans croix. Dessus, une rangée de tablettes de cire dans des cadres de buis, comme celles où les écoliers apprennent leurs lettres, chacune avec son stylet attaché par un cordon. À côté, un petit réchaud de fer et une spatule plate, pour chauffer la cire et l'effacer." },
      { first: true, text: "C'est ici que les Taiseurs se confessent. Ils écrivent la faute dans la cire, ils la lissent avec la spatule chaude, et ils écrivent par-dessus une prière. Ce qui est dit à la reine reste à la reine." },
      { again: true, text: "La chapelle basse, l'autel noir, les tablettes de cire alignées." },
      "Une chandelle a brûlé ici il y a peu. La cire en est encore molle au bord, et le réchaud est tiède sous ta main. L'autel est {{echo#iiir_e_autel|froid, et la cire des chandelles y a coulé en longues larmes figées|plein d'une voix d'homme, basse, égale, que tu connais : « Je l'ai repoussée, et elle est tombée. Odeline Vasse, au pied de son escalier, la nuit des Lanternes. Je n'ai pas couru chercher de l'aide. J'ai cherché le cornet. »}}.",
      "La dernière tablette de la rangée a été lissée et réécrite de frais. Une seule ligne, d'une écriture d'onciale très régulière : *{{loupe#iiir_l_tablette|Seigneur, garde ma langue, et garde celle de mes frères|J'ai fait tomber Odeline Vasse dans son escalier. Je ne voulais pas sa mort. Je voulais assez son silence pour monter chez elle. G.}}*",
      "Derrière l'autel, dans une niche, un coffret de bois {{pie#iiir_p_coffret|vermoulu, vide, qu'on a oublié là|vermoulu, à double fond ; sous la planchette, sur un lit de sel, repose une langue d'or de la taille d'une vraie}}.",
      { with: "gildas", text: "Frère Gildas est resté à l'entrée de la chapelle, dans l'ombre de la galerie. Il ne s'approche pas de l'autel." },
    ],
    choices: [
      { label: "Rester devant l'autel avec ce que tu as entendu", hide: { any: [{ not: { voile: "iiir_e_autel" } }, { seen: "IIIR_autel_entendu" }] }, to: "IIIR_autel_entendu" },
      { label: "Rester devant l'autel avec ce que tu as lu", hide: { any: [{ not: { voile: "iiir_l_tablette" } }, { voile: "iiir_e_autel" }, { seen: "IIIR_autel_entendu" }] }, to: "IIIR_autel_entendu" },
      { label: "Soulever le double fond du coffret", hide: { any: [{ not: { voile: "iiir_p_coffret" } }, { has: "tresor:iiir_langue" }] }, to: "IIIR_autel_langue" },
      { label: "Fouiller le coffret, par habitude de fouilleur", if: { has: "metier:mains" }, why: "Il faudrait des mains de fouilleur.", hide: { any: [{ voile: "iiir_p_coffret" }, { has: "tresor:iiir_langue" }] }, to: "IIIR_autel_langue" },
      { label: "Écrire toi-même dans la cire", hide: { seen: "IIIR_autel_cire" }, to: "IIIR_autel_cire" },
      { label: "Frère Gildas, agenouillé devant l'autel", without: "gildas", hide: { any: [{ not: { has: "gildas:chasse" } }, { has: "gildas:mort" }, { seen: "IIIR_autel_gildas" }] }, to: "IIIR_autel_gildas" },
      { label: "Prendre le chemin des Gardiens, derrière l'autel, vers la crypte", hide: { not: { all: [{ has: "mont:ouverte" }, { any: [{ item: "iiir_cle_gardiens" }, { present: "gildas" }] }] } }, to: "IIIR_chemin_gardiens" },
      { back: "IIIR_galeries" },
    ] },

  IIIR_autel_entendu: { act: "III", title: "Ce que garde l'autel", place: "mont",
    fx: { flag: ["gildas:demasque", "odeline:verite"], ep: ["histoire", 2500] },
    text: [
      { after: "voile:iiir_e_autel", text: "La voix s'est tue, et le diapason, dans ta main, vibre encore un peu. Tu la connais. Tu l'as entendue lire du latin à la lueur d'une chandelle, réciter les Laudes, te dire « prends garde à la marche » dans un escalier de clocher." },
      { after: "voile:iiir_l_tablette", before: "voile:iiir_e_autel", text: "Tu relis la ligne sous la loupe, une seconde fois, parce que la première ne compte pas. Tu connais l'écriture. C'est celle des notes en marge que Frère Gildas te laisse sur les vieux textes, pour t'aider." },
      "Odeline n'est pas tombée seule. Quelqu'un était là, en haut des marches, à minuit, et ce quelqu'un est descendu avec toi dans la montagne. Il a cherché le cornet. Il a remis les choses en place. Il est reparti, et le lendemain il est venu prier pour elle.",
      { if: { has: "gildas:mort" }, text: "Il est mort, et tu le sais maintenant. Il reste la cire et la voix." },
      { with: "gildas", text: "Tu te retournes. Frère Gildas est toujours à l'entrée de la chapelle. Il a vu ton visage, et il sait ce que tu as entendu. Il ne recule pas. Il attend." },
      { without: "gildas", text: "Frère Gildas n'est pas avec toi. Mais la chandelle de l'autel est encore molle, et le réchaud encore tiède : il est quelque part dans la montagne, devant toi." },
      { with: "tibere", text: "Tibère a pâli. « J'ai écrit accident, dit-il. Sur le rapport. J'ai écrit accident en trois lignes. »" },
    ],
    choices: [
      { label: "Te tourner vers Frère Gildas", with: "gildas", big: true, to: "IIIR_gildas_aveu" },
      { label: "Ressortir de la chapelle, et le trouver", without: "gildas", back: "IIIR_galeries" },
    ] },

  IIIR_autel_cire: { act: "III", title: "Écrire dans la cire", place: "mont",
    text: [
      "Tu prends une tablette vierge, et le stylet. La cire est froide et ferme. Tu restes longtemps la pointe levée.",
      "Tu écris {{miroir#iiir_m_cire|une prière pour Odeline, la seule que tu saches en entier|ce que tu n'as dit à personne : « Je lui ai dit qu'elle mourrait seule. Elle est morte seule. » Puis tu chauffes la spatule et tu effaces, et tu écris une prière par-dessus}}.",
      "Tu reposes la tablette au bout de la rangée, à côté de la dernière. Les deux écritures se ressemblent, à cette distance : deux lignes droites dans de la cire jaune.",
      { with: "lison", text: "Lison t'a regardé{e} faire sans rien dire. Quand tu reposes le stylet, elle pose le sien, qu'elle tenait aussi, sans avoir rien écrit." },
    ],
    choices: [{ back: "IIIR_autel" }] },

  IIIR_autel_langue: { act: "III", title: "La langue d'or", place: "mont",
    fx: { item: "iiir_tr_langue", clock: { tresors: 1 }, flag: "tresor:iiir_langue", ep: ["perso", 900] },
    text: [
      "Le double fond cède sous l'ongle. Dessous, dans un lit de gros sel gris qui a absorbé toute l'humidité de trois siècles, repose une langue d'or. Elle a la taille d'une vraie langue, la forme d'une vraie langue, avec le sillon au milieu, et elle pèse dans la paume autant qu'un oiseau.",
      "Sur la face du dessous, un orfèvre a gravé en lettres minuscules : *Pour qu'elle parle devant Dieu.*",
      { with: "gildas", text: "Frère Gildas a détourné les yeux. « On la descendait à l'autel une fois l'an, dit-il. Pour la Saint-Ysaure, qui n'est dans aucun calendrier. On la posait là. Puis on la remettait dans le sel. »" },
      { with: "salome", text: "Salomé la regarde par-dessus ton épaule. « De l'or de bijoutier, dit-elle. Pas de l'or de lingot. Quelqu'un l'a aimée, ta reine. »" },
    ],
    choices: [{ back: "IIIR_autel" }] },
});

// ==================================================================== the wall of names (side quest)
Object.assign(P, {
  IIIR_noms: { act: "III", title: "Le mur des noms", place: "mont", backName: "le mur des noms",
    fx: { questSeen: "IIIR_q_noms" },
    text: [
      { first: true, text: "Cette galerie est plus haute que les autres, et ses deux parois sont couvertes de noms, du sol jusqu'où la lampe porte, en lignes serrées comme dans un registre. Chaque nom a sa date, et les familles sont groupées : les Vasse sur toute une travée, les Huchet, les Brac de la côte, d'autres que tu ne connais pas. Ce sont les Taiseurs morts dans le serment, depuis trois siècles." },
      { first: true, text: "Ici et là, un nom a été gratté au ciseau, jusqu'à la pierre vive. Il en reste un rectangle rugueux au milieu des lettres nettes, comme une dent arrachée." },
      { again: true, text: "Le mur des noms, ses lignes serrées, ses rectangles grattés." },
      "Au bas de la travée des Vasse, une boîte de bois contient des ciseaux de graveur, un maillet, et un anneau de fer {{pie#iiir_p_anneau|rouillé, bon pour la ferraille|rouillé dehors, d'or dedans, avec un chaton gravé d'un croissant : le sceau d'un secrétaire de la reine}}.",
      "Dans la travée des Vasse, à hauteur d'épaule, un rectangle gratté porte encore, dessous, les creux d'une ligne : *{{loupe#iiir_l_odeline|une pierre éraflée, sans rien de lisible|Odeline Vasse, des Joncs-Bas, entrée au silence à sept ans}}.*",
      "La galerie est {{echo#iiir_e_noms|silencieuse, et l'air y est plus sec qu'ailleurs|pleine d'un bruit de maillet sur un ciseau, régulier, et d'une voix de vieil homme : « Plus profond, Gildas. Ceux qui partent, on les efface. On ne les pleure pas »}}.",
      { with: "lison", text: "Lison suit la travée des Vasse du bout des doigts, en remontant les dates. Elle s'arrête sur un nom, celui de son grand-père, noyé l'année de sa naissance. Puis ses doigts arrivent au rectangle gratté, et s'arrêtent aussi." },
    ],
    choices: [
      { label: "Graver de nouveau le nom d'Odeline, au ciseau", hide: { any: [{ has: "iiir:noms" }, { not: { any: [{ voile: "iiir_l_odeline" }, { voile: "iiir_e_noms" }, { voile: "iiir_e_pierre" }] } }] }, to: "IIIR_noms_graver" },
      { label: "Graver de nouveau le nom d'Odeline, au ciseau", if: { voile: "iiir_l_odeline" }, why: "Il faudrait savoir quel nom a été gratté là.", hide: { any: [{ has: "iiir:noms" }, { voile: "iiir_l_odeline" }, { voile: "iiir_e_noms" }, { voile: "iiir_e_pierre" }] }, to: "IIIR_noms_graver" },
      { label: "« Qui a gratté ce nom, Gildas ? »", with: "gildas", hide: { any: [{ seen: "IIIR_noms_gildas" }, { not: { any: [{ voile: "iiir_l_odeline" }, { voile: "iiir_e_noms" }] } }] }, to: "IIIR_noms_gildas" },
      { label: "Prendre l'anneau d'or dans la boîte", hide: { any: [{ not: { voile: "iiir_p_anneau" } }, { has: "tresor:iiir_sceau" }] }, fx: { item: "iiir_tr_sceau", clock: { tresors: 1 }, flag: "tresor:iiir_sceau", ep: ["perso", 700] }, back: "IIIR_noms" },
      { label: "Laisser le mur tel qu'il est", hide: { has: "iiir:noms" }, to: "IIIR_noms_laisser" },
      { back: "IIIR_galeries" },
    ] },

  IIIR_noms_gildas: { act: "III", title: "Le ciseau", place: "mont", with: "gildas",
    text: [
      "Frère Gildas regarde le rectangle gratté. Il ne fait pas semblant de chercher lequel.",
      "« Moi, dit-il. J'avais dix-sept ans. Frère Ignace m'a donné le ciseau et le maillet, et il est resté derrière moi pendant que je le faisais. Elle était partie à la ville l'hiver d'avant. On m'a appris son nom en même temps qu'on m'a appris à l'effacer. »",
      "Il se tait un moment. « C'était un travail propre, ajoute-t-il. Frère Ignace l'a dit. »",
      { if: { has: "gildas:demasque" }, text: "Tu le regardes, et tu penses à l'escalier de la cave. Lui aussi y pense. Vous ne le dites ni l'un ni l'autre." },
    ],
    choices: [{ back: "IIIR_noms" }] },

  IIIR_noms_graver: { act: "III", title: "Le nom d'Odeline", place: "mont",
    fx: { flag: "iiir:noms", set: { iiir_nom: "grave" }, quest: "IIIR_q_noms", fac: { taiseurs: 5 }, ep: ["seance", 1500] },
    text: [
      "Tu prends un ciseau et le maillet dans la boîte. Tu n'as jamais gravé la pierre. Tu le fais mal, et lentement, et les éclats te sautent au visage. Tu traces le nom dans le rectangle gratté, par-dessus les creux de l'ancien, en suivant ce qui reste des lettres comme on suit une piste.",
      "*Odeline Vasse, des Joncs-Bas.* Tu hésites sur la suite. Puis tu ajoutes, en plus petit, de ta propre autorité : *Carrus, du quai des Lanternes.*",
      { with: "lison", text: "Lison te prend le maillet des mains pour la dernière ligne, parce que tu tapes de travers. Elle grave la date de la mort, proprement, en vraie fille des marais qui a appris à tailler les pieux. Quand elle a fini, elle souffle sur la poussière." },
      { with: "gildas", text: "Frère Gildas tient la lampe pendant que tu graves, et ne dit rien. Sa main ne tremble pas. Quand tu as fini, il lit le nom, à voix basse, en entier." },
      { with: "tibere", text: "Tibère se racle la gorge. « Si on m'avait dit que je verrais ça, dit-il. Un chercheur qui rend quelque chose. »" },
      "Le nom est maladroit au milieu des lignes parfaites. On le voit de loin. C'est ce que tu voulais.",
    ],
    choices: [{ back: "IIIR_noms" }] },

  IIIR_noms_laisser: { act: "III", title: "Le rectangle gratté", place: "mont",
    fx: { flag: "iiir:noms", set: { iiir_nom: "laisse" }, quest: "IIIR_q_noms", ep: ["perso", 600] },
    text: [
      "Tu poses la main sur le rectangle rugueux. La pierre est froide, plus froide que les lettres autour. Odeline a quitté ce mur à trente ans, de son plein gré, pour vendre des choses perdues sur un quai. Elle ne voulait pas y être.",
      "Tu {{miroir#iiir_m_mur|laisses le mur comme elle l'a voulu|laisses le mur tel qu'il est parce que tu ne sais plus ce qu'elle voulait, et que tu as peur de te tromper encore une fois sur elle}}.",
      { with: "lison", text: "Lison hoche la tête, une fois. « Chez nous, dit-elle, on dirait que tu as bien fait. Moi, je ne sais pas. »" },
    ],
    choices: [{ back: "IIIR_noms" }] },
});

// ==================================================================== the trapped quarryman (side quest), the breach of the Bank
Object.assign(P, {
  IIIR_eboulis: { act: "III", title: "L'éboulis", place: "mont", backName: "l'éboulis",
    fx: { questSeen: "IIIR_q_carrier" },
    text: [
      { first: true, text: "La quatrième galerie s'arrête au bout de quarante pas sur un éboulis frais : des blocs de calcaire blanc, de la poussière qui n'a pas eu le temps de noircir, un étai de bois cassé net qui dépasse des pierres. Ce n'est pas un ouvrage des Taiseurs. L'étai est du chêne neuf, équarri à la hache de carrier." },
      { first: true, text: "Derrière les pierres, quelqu'un frappe. Trois coups, une pause, trois coups. Puis une voix d'homme, éraillée, qui crie quelque chose que les pierres mangent à moitié." },
      { first: true, after: "iiir:porte_forcee", text: "Les coups ont commencé quand tu as forcé la porte. La poussière, au pied de l'éboulis, est encore en train de retomber." },
      { again: true, text: "L'éboulis de calcaire blanc, l'étai cassé." },
      "L'air au pied de l'éboulis est {{echo#iiir_e_eboulis|poussiéreux et sec|plein d'une voix polie d'homme de la ville : « Creuse, Varon. Trois ducats la toise, et dix de plus si tu trouves la salle. Le pèlerin paie toujours. »}}.",
    ],
    choices: [
      { label: "Appeler l'homme à travers les pierres", hide: { seen: "IIIR_carrier" }, to: "IIIR_carrier" },
      { label: "Lui parler encore", hide: { not: { seen: "IIIR_carrier" } }, back: "IIIR_carrier" },
      { back: "IIIR_galeries" },
    ] },

  IIIR_carrier: { act: "III", title: "L'homme derrière les pierres", place: "mont",
    fx: { meet: "iiir_varon" },
    text: [
      "Tu colles ta bouche à une fente entre deux blocs. La voix répond aussitôt, toute proche, de l'autre côté : un homme couché, à en juger par le son, à moins d'une toise.",
      "« Sulpice Varon, carrier à Orle, dit-il. Trois jours que je suis là. J'ai encore de l'eau, il en suinte du plafond. J'ai plus de lampe. » Il tousse. « J'ai {{oreille#iiir_o_varon|suivi une vieille galerie de la carrière, par curiosité|suivi une vieille galerie de la carrière pour un pèlerin qui paie en or de la Banque, et je l'ai étayée trop vite}}. Ça a cédé derrière moi. Et devant. »",
      "« Les moines savent que je suis là ? {{oreille#iiir_o_varon2|Ma femme doit me chercher|Ma femme sait où je suis, et le pèlerin aussi, et personne n'est venu}}. »",
      { with: "tibere", text: "Tibère tâte l'éboulis, bloc par bloc, comme un sergent qui fouille un tonneau. « Il y a une clé, dit-il. Un gros, en bas à gauche, qui tient tout. On le tire, ça descend. Lui avec. »" },
      { with: "salome", text: "Salomé regarde l'étai cassé, puis la voûte. « Il faut caler avant de tirer. Comme un mât qu'on démâte. Une corde, un levier, et quelqu'un qui sait compter. »" },
    ],
    choices: [
      { label: "Dégager les blocs à la main, un par un, en calant à mesure", test: { dom: "combat", diff: -10, label: "Défaire un éboulis sans le faire tomber", help: [{ with: "tibere", v: 15 }, { with: "salome", v: 15 }, { if: { item: "corde" }, v: 10 }] },
        win: { to: "IIIR_carrier_sauve" }, lose: { to: "IIIR_carrier_rate" } },
      { label: "Chercher dans la voûte le bloc qui porte tout, et le caler d'abord", test: { dom: "savoir", diff: -10, label: "Lire une voûte de carrière", help: [{ with: "gildas", v: 10 }, { if: { has: "metier:mains" }, v: 10 }] },
        win: { to: "IIIR_carrier_sauve" }, lose: { to: "IIIR_carrier_rate" } },
      { label: "« Le pèlerin vous a laissé là, Varon. Dites-moi tout, et je creuse. »", hide: { not: { any: [{ voile: "iiir_o_varon" }, { voile: "iiir_e_eboulis" }] } }, fx: { flag: "iiir:varon_parle" }, to: "IIIR_carrier_sauve" },
      { label: "Lui promettre d'envoyer les moines, et repartir", to: "IIIR_carrier_laisse" },
      { back: "IIIR_eboulis" },
    ] },

  IIIR_carrier_rate: { act: "III", title: "La voûte cède", place: "mont",
    fx: { pv: -4 },
    text: [
      "Le bloc que tu tires vient trop vite. Au-dessus, quelque chose craque, et la moitié de l'éboulis te descend dessus dans un fracas de pierres et de poussière. Tu te jettes en arrière. Une pierre te frappe la cuisse, une autre l'épaule. Pendant un moment, tu ne vois rien, tu tousses, tu n'entends plus rien, puis tu entends tousser de l'autre côté.",
      "Quand la poussière retombe, l'éboulis a changé de forme. Il s'est affaissé sur lui-même, et en haut, sous la voûte, s'ouvre un trou assez large pour une tête et des épaules. Une main sort par le trou. Elle est grise de poussière, avec un ongle noir.",
      { with: "any", text: "Vous tirez l'homme à plusieurs par le bras, puis par le col, puis par la ceinture. Il hurle quand sa jambe passe le rebord." },
      { without: "any", text: "Tu le tires seul{e}, par le bras, puis par le col, puis par la ceinture. Il hurle quand sa jambe passe le rebord." },
    ],
    choices: [{ label: "L'allonger, et regarder sa jambe", to: "IIIR_carrier_sauve" }] },

  IIIR_carrier_sauve: { act: "III", title: "Sulpice Varon", place: "mont",
    fx: { flag: ["iiir:carrier_sauve", "iiir:carrier_fin"], item: "iiir_pioche", ep: ["seance", 1200] },
    text: [
      "Sulpice Varon est un homme de quarante ans, sec et blanc de poussière des cheveux aux bottes, avec des mains énormes et des yeux qui clignent à la lampe comme ceux d'un hibou. Il boit l'eau de ta gourde jusqu'à la dernière goutte.",
      { outcome: "lose", text: "Sa jambe gauche est cassée sous le genou. Tu la cales entre deux planches de l'étai, avec ta ceinture. Il serre les dents si fort que tu les entends." },
      { after: "iiir:varon_parle", text: "Tu lui as dit ce que tu savais du pèlerin, avant même de creuser, et il t'a tout dit en échange, à travers les pierres, pendant que tu travaillais : le nom, l'or, la galerie." },
      "« Le pèlerin s'appelle Lambert, dit-il. Il est venu à la carrière avec un plan d'abbaye et une bourse. Il voulait que je trouve un chemin vers la salle aux miroirs, par en dessous, sans passer par les moines. J'ai trouvé une vieille galerie des anciens qui montait dans la bonne direction. J'ai creusé trois semaines. » Il crache de la poussière. « Ses hommes attendent à l'entrée de ma galerie, côté carrière. Trois. Ils ont des épées. Ils attendent que je leur ouvre. »",
      "Il te tend sa pioche, le manche poli par vingt ans de mains. « Prenez-la. Moi, je ne creuse plus jamais pour personne. »",
    ],
    choices: [
      { label: "Aller voir l'entrée de sa galerie, côté carrière", to: "IIIR_breche" },
      { label: "L'aider à remonter vers l'abbaye, et laisser la galerie aux moines", fx: { quest: "IIIR_q_carrier", flag: "iiir:carrier", fac: { moines: 5 } }, back: "IIIR_galeries" },
    ] },

  IIIR_carrier_laisse: { act: "III", title: "La promesse au carrier", place: "mont",
    fx: { flag: ["iiir:carrier", "iiir:carrier_fin"], quest: "IIIR_q_carrier" },
    text: [
      "« Je préviendrai les moines, dis-tu par la fente. Ils connaissent la montagne. Ils viendront avec des leviers. »",
      "Un silence, de l'autre côté. Puis : « Ils viendront. » Il le dit comme on répète une leçon pour la retenir.",
      "Tu repars. Pendant longtemps, en t'éloignant, tu entends encore les trois coups, la pause, et les trois coups. Puis tu tournes dans une autre galerie, et tu ne les entends plus.",
      { with: "tibere", text: "Tibère marche derrière toi sans un mot jusqu'au carrefour. Là, il dit seulement : « On les enverra. » Et il compte sur ses doigts les heures qu'il faut pour remonter." },
    ],
    choices: [{ back: "IIIR_galeries" }] },

  IIIR_breche: { act: "III", title: "La brèche de la carrière", place: "mont",
    text: [
      "La galerie de Varon descend en boyau, étayée de chêne neuf tous les deux pas. Au bout, elle débouche dans une vieille salle des anciens, ronde, et de l'autre côté, par une brèche taillée de frais, on voit la lumière d'une lanterne et on entend des dés rouler sur une planche.",
      "Trois hommes sont assis dans la brèche, autour d'une caisse retournée. Gants gris, lames courtes, manteaux de voyage : la Banque. L'un d'eux dit, sans lever les yeux de ses dés : « {{oreille#iiir_o_spad|Le carrier a dû trouver quelque chose, depuis le temps|Si le carrier n'est pas sorti ce soir, on rebouche et on dit à Lambert qu'il est mort en creusant}}. »",
      { with: "tibere", text: "Tibère a reconnu quelque chose. Il te souffle à l'oreille : « Le grand, à gauche. Il était au Guet avec moi. Il s'appelait déjà Crespin. Il trichait déjà aux dés. »" },
    ],
    choices: [
      { label: "Entrer dans la lumière, l'arme au poing", fight: { title: "La brèche de la carrière", enemies: [{ id: "iiir_spadassin", n: 3 }], win: { to: "IIIR_breche_win" }, lose: { to: "IIIR_breche_lose" }, flee: { label: "Reculer dans le boyau", dom: "discretion", diff: -10, to: "IIIR_breche_ruse" } } },
      { label: "Parler depuis l'ombre, au nom de Lambert", test: { dom: "social", diff: -10, label: "Renvoyer trois hommes payés", help: [{ if: { voile: "iiir_e_eboulis" }, v: 15 }, { if: { has: "metier:parole" }, v: 10 }] }, win: { fx: { set: { iiir_breche: "parole" } }, to: "IIIR_breche_ruse" }, lose: { to: "IIIR_breche_lose" } },
      { label: "« Crespin. Tu triches toujours avec le dé fendu ? »", who: "tibere", fx: { set: { iiir_breche: "tibere" } }, to: "IIIR_breche_ruse" },
      { label: "Abattre l'étai de la brèche à la pioche, et refermer la montagne", if: { item: "iiir_pioche" }, why: "Il faudrait un outil de carrier.", test: { dom: "discretion", diff: -10, label: "Faire tomber une voûte au bon moment", help: [{ with: "salome", v: 10 }, { with: "lison", v: 10 }] }, win: { fx: { set: { iiir_breche: "voute" } }, to: "IIIR_breche_ruse" }, lose: { to: "IIIR_breche_lose" } },
    ] },

  IIIR_breche_win: { act: "III", title: "La brèche refermée", place: "mont",
    fx: { flag: ["iiir:carrier", "iiir:breche"], quest: "IIIR_q_carrier", fac: { banque: -5, moines: 5 }, ep: ["seance", 2000], gold: 120 },
    text: [
      "Le dernier homme lâche son épée et file par la brèche vers la carrière en tenant son bras. Les deux autres ne bougent plus, ou à peine. La lanterne a roulé dans un coin et brûle de travers.",
      "Sur la caisse, parmi les dés, une bourse de la Banque, cachetée de cire grise, et un plan de l'abbaye dessiné à l'encre, avec la salle des Reflets marquée d'une croix et la mention : *par la carrière, côté nord, Varon*. Tu prends la bourse. Tu brûles le plan à la lanterne.",
      "Puis tu prends la pioche du carrier, et tu abats l'étai de la brèche. La voûte descend en grondant, et la montagne se referme sur le chemin de la Banque.",
    ],
    choices: [{ back: "IIIR_galeries" }] },

  IIIR_breche_lose: { act: "III", title: "Les gants gris", place: "mont",
    fx: { flag: ["iiir:carrier", "iiir:breche_perdue"], quest: "IIIR_q_carrier", gold: -60, pv: -3 },
    text: [
      "Tu te réveilles sur le sol de la vieille salle ronde, la bouche pleine de poussière et la tête qui sonne. La lanterne est partie. Ta bourse aussi, ou ce qu'elle contenait : ils t'ont laissé le cuir, par une sorte de politesse.",
      "Les trois hommes sont repartis par la brèche, vers la carrière. Ils ont emporté le plan. Ils ont vu ton visage, et Lambert saura dans deux jours que tu es descendu{e} sous le Mont.",
      "En partant, ils ont abattu leur propre étai. La brèche est fermée. Ils n'avaient pas envie qu'on les suive.",
      { with: "any", text: "On t'aide à te relever. Quelqu'un te met de l'eau sur la nuque. Vous repartez lentement vers le carrefour." },
    ],
    choices: [{ back: "IIIR_galeries" }] },

  IIIR_breche_ruse: { act: "III", title: "Sans tirer l'épée", place: "mont",
    fx: { flag: ["iiir:carrier", "iiir:breche"], quest: "IIIR_q_carrier", fac: { moines: 5 }, ep: ["seance", 1800] },
    text: [
      { if: { is: { iiir_breche: "parole" } }, text: "Tu parles depuis l'ombre du boyau, d'une voix de commis pressé. « Lambert vous fait dire de remonter. Le carrier est mort. La galerie s'effondre. On paie la semaine entière, et on ne vous a jamais vus. » Les trois hommes se regardent. Ils ramassent les dés, la lanterne, la caisse. Ils partent vers la carrière sans se retourner, ravis de partir." },
      { if: { is: { iiir_breche: "tibere" } }, text: "Tibère entre dans la lumière, les mains vides, en souriant. Crespin le reconnaît, et pâlit. Ils parlent un moment, à voix basse, de dettes anciennes et d'une nuit de dés à la caserne du Pont-Neuf. Puis Crespin ramasse ses dés, siffle ses deux hommes, et ils s'en vont. « Il me devait quarante liards depuis douze ans, dit Tibère en revenant. On est quittes, maintenant. »" },
      { if: { is: { iiir_breche: "voute" } }, text: "Tu choisis l'étai le plus chargé, celui qui gémit déjà. Trois coups de pioche, et tu te jettes en arrière. La voûte de la brèche descend d'un bloc entre toi et les gants gris, dans un nuage de poussière blanche. De l'autre côté, on jure, on tousse, on s'éloigne." },
      { outcome: "flee", text: "Tu recules dans le boyau. Ils te suivent, puis s'arrêtent à l'entrée de la galerie des anciens, qu'ils n'aiment pas. « Laisse, dit l'un. Lambert paiera quand même. » Ils repartent vers la carrière, et en partant ils abattent eux-mêmes leur étai, pour qu'on ne les suive pas." },
      "Le chemin de la Banque sous la montagne est fermé. Varon, assis contre la paroi, sa pioche ou sa jambe sur les genoux, se met à rire tout bas, de soulagement.",
    ],
    choices: [{ back: "IIIR_galeries" }] },


});

// ==================================================================== the hall of Reflections and the cache
Object.assign(P, {
  IIIR_reflets: { act: "III", title: "La salle des Reflets", place: "mont", backName: "la salle des Reflets",
    text: [
      { first: true, text: "La salle est si grande que ta lampe n'en trouve pas les murs. C'est la lumière du jour qui les trouve pour toi. Elle tombe du puits de jour, tout en haut de la voûte, sur un grand disque de bronze poli incliné au sommet de la salle, et de là elle descend, renvoyée de miroir en miroir : des disques de bronze sur des pivots de fer, scellés aux parois, puis des miroirs d'argent plus petits, ternis, dans des cadres de pierre. La lumière fait des taches pâles sur le roc, ici, là, plus loin, comme une piste." },
      { first: true, text: "Au centre de la salle, un bassin rond, de trois toises de large, plein d'une eau noire si immobile que la voûte s'y reflète entière, avec ses miroirs et sa lumière. Au fond de la salle, dans la paroi, une niche est fermée par une dalle ronde percée d'un trou de la taille d'un poing. La lumière n'y va pas." },
      { first: true, if: { has: "iiir:par_eau" }, text: "Tu arrives par en dessous, trempé{e}, en suivant la rigole de la corniche : elle débouche au bord du bassin par une grille de fer, et tu sors de l'eau noire comme un noyé qui remonte." },
      { first: true, if: { has: "iiir:par_eau" }, with: "any", text: "Les autres arrivent par l'escalier, en haut, et te cherchent des yeux." },
      { again: true, text: "La salle des Reflets, ses disques de bronze et d'argent, la lumière qui descend de l'un à l'autre, le bassin noir au milieu." },
      { again: true, after: "mont:ouverte", text: "La niche du fond est ouverte. La dalle ronde a glissé de côté, et la lumière entre maintenant dans la niche vide." },
      "La salle est {{echo#iiir_e_reflets|silencieuse, à part l'eau qui goutte dans le bassin|pleine d'un chant à trois voix, très lent, que les moines du Mont chantent encore à l'office sans en savoir le sens : « Le bronze au soleil, l'argent au bronze, l'eau à l'argent, et l'eau à la reine »}}. Les miroirs de bronze sont {{pie#iiir_p_miroirs|montés sur des pivots tous pareils, noirs de trois siècles|montés sur des pivots noirs de trois siècles, sauf trois, dont l'axe a été graissé il y a peu : la graisse brille encore}}.",
      "Sur la margelle du bassin, une ligne est gravée tout autour : *{{loupe#iiir_l_bassin|Regarde-toi, et passe ton chemin|Ce que tu cherches, l'eau le montre, et l'eau ne montre que toi}}.* Au fond du bassin, sous l'eau noire, il y a {{pie#iiir_p_coupe|un caillou blanc, rond, qui accroche la lumière|une coupe d'argent scellée dans la pierre, pleine d'un seul cristal de sel clair comme l'eau}}.",
      { without: "gildas", before: "IIIR_reflets_gildas", if: { not: { has: "gildas:mort" } }, text: "Quelqu'un est assis sur la margelle du bassin, de dos, en bure grise, la capuche relevée. Il a posé un bâton de pèlerin en travers de ses genoux. Au bruit de tes pas, il tourne la tête. C'est Frère Gildas." },
      { with: "salome", first: true, text: "Salomé lève la tête vers le puits de jour et cligne des yeux. « Un phare à l'envers, dit-elle. Ils ont fait descendre le ciel dans la montagne. »" },
      { with: "tibere", first: true, text: "Tibère tourne sur lui-même, la bouche ouverte, et la referme. « Je vais avoir des choses à raconter, dit-il. Personne ne me croira. Ça m'arrangera. »" },
    ],
    choices: [
      { label: "Aller à Frère Gildas, assis au bord du bassin", big: true, without: "gildas", hide: { any: [{ seen: "IIIR_reflets_gildas" }, { has: "gildas:mort" }] }, to: "IIIR_reflets_gildas" },
      { label: "Tourner les miroirs dans l'ordre du chant", hide: { any: [{ not: { voile: "iiir_e_reflets" } }, { has: "mont:ouverte" }] }, to: "IIIR_reflets_lumiere" },
      { label: "Tourner les trois miroirs aux pivots graissés", hide: { any: [{ not: { voile: "iiir_p_miroirs" } }, { voile: "iiir_e_reflets" }, { has: "mont:ouverte" }] }, to: "IIIR_reflets_lumiere" },
      { label: "« Le livre des signes le dit, pour qui sait le lire. »", who: "gildas", hide: { has: "mont:ouverte" }, fx: { flag: "iiir:gildas_ouvre" }, to: "IIIR_reflets_lumiere" },
      { label: "Suivre la lumière d'un miroir à l'autre, et chercher l'ordre", hide: { has: "mont:ouverte" }, test: { dom: "savoir", diff: -10, label: "Retrouver le chemin de la lumière", help: [{ if: { has: "iiim:chant_compris" }, v: 20 }, { if: { has: "metier:lire" }, v: 10 }, { with: "salome", v: 10 }] },
        win: { to: "IIIR_reflets_lumiere" }, lose: { to: "IIIR_reflets_rate" } },
      { label: "Descendre dans le bassin, chercher ce qui brille au fond", hide: { seen: "IIIR_reflets_eau" }, to: "IIIR_reflets_eau" },
      { label: "Te pencher sur le bassin noir, toi aussi", hide: { any: [{ not: { has: "miroir:vu" } }, { seen: "IIIR_bassin_soi" }] }, to: "IIIR_bassin_soi" },
      { label: "Reprendre le miroir sans tain, et lire encore", hide: { not: { has: "miroir:vu" } }, back: "IIIR_miroir" },
      { label: "Parler à Frère Gildas de la nuit des Lanternes", with: "gildas", hide: { any: [{ not: { has: "miroir:vu" } }, { seen: "IIIR_gildas_aveu" }, { has: "gildas:demasque" }] }, to: "IIIR_gildas_question" },
      { label: "« Je sais ce que vous avez fait, Gildas. »", with: "gildas", hide: { any: [{ not: { has: "gildas:demasque" } }, { seen: "IIIR_gildas_aveu" }] }, to: "IIIR_gildas_aveu" },
      { back: "IIIR_galeries" },
    ] },

  IIIR_reflets_gildas: { act: "III", title: "Celui qui attendait", place: "mont",
    fx: { join: "gildas" },
    text: [
      "Frère Gildas se lève quand tu approches, sans hâte, et pose son bâton contre la margelle. Il a de la boue fraîche au bas de sa bure et une égratignure au dos de la main. Il te salue du signe des moines, deux doigts sur les lèvres puis sur la poitrine.",
      "« Je suis venu par le chemin des Gardiens, dit-il. Il part de derrière l'autel. Il est plus court, et plus mauvais. Je suis arrivé hier soir. » Il regarde la niche du fond, puis toi. « Je savais que tu viendrais par les bouches et le pont. C'est le chemin de ceux qui cherchent. L'autre est pour ceux qui gardent. »",
      "« Pourquoi êtes-vous venu ? » demandes-tu. Il réfléchit, comme il réfléchit toujours avant de répondre, et tu as le temps de voir que sa capuche est relevée jusqu'aux sourcils.",
      "« Pour être là, dit-il, quand le miroir se tournera vers toi. »",
      { with: "lison", text: "Lison s'est arrêtée à trois pas, la gaffe à la main, la pointe vers le sol. Elle ne salue pas Gildas. Elle le regarde comme on regarde un homme de sa famille qu'on n'attendait pas à un enterrement." },
    ],
    choices: [{ label: "Le laisser se joindre à vous", back: "IIIR_reflets" }] },

  IIIR_reflets_rate: { act: "III", title: "L'éblouissement", place: "mont",
    fx: { pv: -2, fac: { moines: -3 } },
    text: [
      "Tu fais tourner un disque de bronze sur son pivot, puis un autre. La lumière bascule d'un coup, traverse la salle et te frappe en plein visage. Tu ne vois plus que du blanc. Tu recules, tu heurtes un cadre de pierre, et un petit miroir d'argent se décroche de la paroi et se brise sur le sol en mille éclats noirs.",
      "Quand tes yeux reviennent, tu vois ce que le miroir cachait. Derrière lui, dans la paroi, un graveur a tracé un schéma de la salle, au trait : le puits de jour, les disques, les miroirs d'argent, le bassin, la niche, et des flèches qui vont de l'un à l'autre dans un ordre précis. Le bronze au soleil, l'argent au bronze, l'eau à l'argent, l'eau à la niche.",
      { with: "gildas", text: "Frère Gildas ramasse un éclat du miroir brisé et le garde dans sa paume. « Celui-là avait trois cents ans aussi », dit-il, sans reproche." },
    ],
    choices: [{ label: "Tourner les miroirs dans l'ordre du schéma", to: "IIIR_reflets_lumiere" }] },

  IIIR_reflets_eau: { act: "III", title: "Le bassin noir", place: "mont",
    fx: { pv: -1 },
    text: [
      "Tu enjambes la margelle et tu entres dans l'eau. Elle est si froide qu'elle te coupe le souffle, et plus profonde qu'elle n'en a l'air : elle te monte à la poitrine, puis aux épaules. Le fond est lisse, taillé, en pente douce vers le centre.",
      { if: { not: { has: "tresor:iiir_coupe" } }, text: "Au centre, tu plonges la tête. Tes mains trouvent la chose blanche du fond : une coupe d'argent scellée dans la pierre par trois pattes de plomb, et dedans, pris dans le métal, un seul cristal de sel gros comme un œuf, clair comme de l'eau. Tu tires, tu tords, le plomb cède." },
      "Avant de remonter, sous l'eau, tu ouvres les yeux. D'en dessous, la surface du bassin est un miroir, et dans ce miroir tu vois la voûte entière, avec tous ses disques et toute sa lumière, et le chemin que la lumière devrait suivre se dessine d'un coup, comme une carte : bronze, argent, eau. Et l'eau renvoie vers la niche.",
      "Tu ressors en crachant, les dents claquantes.",
      { with: "any", text: "On te jette un manteau sur les épaules." },
    ],
    choices: [
      { label: "Garder la coupe de sel", hide: { has: "tresor:iiir_coupe" }, fx: { item: "iiir_tr_coupe", clock: { tresors: 1 }, flag: "tresor:iiir_coupe", ep: ["perso", 700] }, to: "IIIR_reflets_lumiere" },
      { label: "Tourner les miroirs dans l'ordre que l'eau t'a montré", hide: { has: "mont:ouverte" }, to: "IIIR_reflets_lumiere" },
      { back: "IIIR_reflets" },
    ] },

  IIIR_reflets_lumiere: { act: "III", title: "Le chemin de la lumière", place: "mont",
    text: [
      { if: { has: "mont:ouverte" }, text: "La niche est déjà ouverte. Tu poses la coupe de sel à côté de toi, et tu restes un moment à regarder la lumière." },
      { if: { not: { has: "mont:ouverte" } }, text: "Le premier disque de bronze est le plus lourd. Il tourne sur son pivot avec un grondement sourd, et la lumière du puits de jour glisse sur la paroi, cherche, trouve un miroir d'argent. Le miroir d'argent, à son tour, pivote dans son cadre de pierre sous ta main, et la lumière plonge vers le bassin." },
      { after: "iiir:gildas_ouvre", if: { not: { has: "mont:ouverte" } }, text: "C'est Frère Gildas qui t'indique chaque miroir, du bout de son bâton, sans hésiter, dans l'ordre. Tu fais tourner. Il ne touche à rien." },
      { if: { not: { has: "mont:ouverte" } }, text: "La lumière frappe l'eau noire du bassin, au centre, à l'endroit exact où la voûte s'y reflète, et l'eau la renvoie, plus pâle, en une tache tremblante qui traverse la salle et va tomber droit dans le trou de la dalle ronde, au fond de la niche." },
      { if: { not: { has: "mont:ouverte" } }, text: "Pendant un moment, rien. Puis dans la pierre, derrière la dalle, quelque chose chauffe, se dilate, glisse. Un contrepoids descend avec un bruit de chaîne. La dalle ronde roule sur le côté dans sa rainure, lentement, et la lumière entre dans la niche." },
    ],
    choices: [
      { label: "Aller à la niche", big: true, hide: { has: "mont:ouverte" }, to: "IIIR_cache" },
      { back: "IIIR_reflets" },
    ] },

  IIIR_cache: { act: "III", title: "La quatrième cache", place: "mont",
    fx: { relic: "f_mont", item: "miroir", flag: "mont:ouverte", quest: "III_mont", ep: ["histoire", 5000] },
    text: [
      "La niche est profonde comme un four à pain. Au fond, sur une tablette de pierre, deux choses, posées côte à côte. Un étui de plomb long comme l'avant-bras, scellé à la cire rouge, avec le croissant des Taiseurs imprimé dans la cire. Et un petit objet enveloppé de soie noire, de la taille d'une main.",
      "Tu brises le sceau. Dans l'étui, roulé serré, un feuillet de parchemin épais, couvert d'une écriture brune et régulière. Le quatrième feuillet du Registre de la Muette.",
      "Puis tu défais la soie. C'est un miroir. Un petit miroir rond dans un cadre de corne, d'argent noirci, si noirci qu'il ne renvoie rien : tu le tournes vers ton visage, et tu ne vois qu'une surface sombre, mate, comme une eau sous un ciel de nuit. Le miroir sans tain des Taiseurs.",
      { with: "gildas", text: "Frère Gildas s'est approché derrière toi. Il ne regarde pas le feuillet. Il regarde le miroir dans ta main." },
      { with: "lison", text: "Lison souffle entre ses dents. « Le dernier, dit-elle. Grand-mère disait qu'il ne fallait jamais le donner à quelqu'un qui avait peur de lui-même. » Elle te regarde. « Elle ne disait pas comment on le savait. »" },
      { with: "tibere", text: "Tibère regarde l'étui de plomb, puis le miroir, puis toi. Il fait le compte, en ancien sergent, de ce que tout ça vaudrait à la Banque. Puis il secoue la tête, comme pour chasser une mouche." },
    ],
    choices: [
      { label: "Lire le feuillet", to: "IIIR_feuillet" },
      { label: "Regarder le miroir", big: true, to: "IIIR_miroir" },
    ] },

  IIIR_feuillet: { act: "III", title: "Le quatrième feuillet", place: "mont",
    fx: { ep: ["perso", 1000] },
    text: [
      "L'écriture est celle d'un secrétaire, sans fioriture. En tête, de la même main : *Ce que la reine a dit par signes, le quatrième jour, devant moi, Aymeric Vasse, chancelier, et devant deux témoins.*",
      "*Qu'ils sont venus à sa chambre à la deuxième heure de la nuit des Comptoirs, sept hommes, des sept premières maisons. Que l'aîné des Marrel tenait la lanterne. Que le vieux Delisle a lu un acte qu'elle n'a pas voulu signer. Qu'on lui a tenu les mains. Qu'elle a craché au visage de celui qui lisait. Que c'est alors qu'ils ont décidé de la langue, et non avant, et que le vieux Delisle a dit : « Puisqu'elle ne signe pas, elle ne parlera pas non plus. »*",
      "*Qu'elle ne pleurait pas pendant qu'elle faisait ces signes. Que c'est moi qui pleurais, et qu'elle m'a fait signe d'écrire plus vite.*",
      "Au bas du feuillet, une dernière ligne : *{{loupe#iiir_l_feuillet|Écrit de ma main, fidèlement, sans rien retrancher. A. V.|Écrit de ma main. La reine a fait un dernier signe, que j'ai retranché : elle leur pardonnait. Je ne l'ai pas écrit. Que Dieu me juge. A. V.}}*",
      { with: "gildas", text: "Frère Gildas lit par-dessus ton épaule, en silence, et quand il arrive au bas de la page, il ferme les yeux un moment." },
      { with: "lison", text: "Lison a lu le nom de Delisle, et elle a souri d'un côté de la bouche, sans gaieté. « Le prévôt descend de celui-là. Trois cents ans, et la même famille au même étage. »" },
    ],
    choices: [{ label: "Rouler le feuillet dans son étui", back: "IIIR_cache" }] },
});

// ==================================================================== the mirror turns to the hero
Object.assign(P, {
  IIIR_miroir: { act: "III", title: "Le miroir sans tain", place: "mont", backName: "le miroir sans tain",
    text: [
      { first: true, text: "Tu tiens le miroir {{miroir#iiir_m_tiens|à bout de bras, comme un objet de valeur|à bout de bras, comme une chose qui pourrait mordre}}. Il ne montre rien. Tu le penches vers la lumière, vers le bassin, vers ton visage encore. Rien. Une surface noire et mate. Tu relèves les yeux, déçu{e}, vers la salle." },
      { first: true, text: "C'est alors que tu le sens. Le miroir reste noir, et c'est en toi que quelque chose bouge, dans la façon dont tu te racontes ce moment. Ce que tu te dis de toi-même, depuis des semaines, a pris l'épaisseur d'un texte, et ce texte se met à pâlir par endroits, comme une encre qui boit. Tu as fait tout ce chemin {{miroir#iiir_m_chemin|pour le Registre de la reine et pour la mémoire d'Odeline|pour ne pas rester sur le quai, dans la boutique, devant l'escalier de la cave}}." },
      { again: true, text: "Tu reprends le miroir sans tain. La surface noire ne montre rien, et les phrases sur toi recommencent à pâlir." },
      "Tu es {{miroir#iiir_m_calme|calme|calme comme on l'est quand on a très peur et qu'on a appris à ne pas le montrer}}. Tu sais ce que tu vas lire. Tu crois le savoir.",
      { with: "gildas", text: "Frère Gildas s'est assis sur la margelle du bassin, à distance, les mains dans les manches. Il te regarde lire. Il ne peut pas voir ce que tu lis. Il sait ce que c'est." },
      { with: "lison", text: "Lison s'est éloignée de quelques pas, par délicatesse, et elle fait semblant d'examiner un miroir d'argent. Elle y regarde, en fait, ton reflet." },
    ],
    choices: [
      { label: "Lire ce que tu te caches de la nuit des Lanternes", to: "IIIR_lire_dispute" },
      { label: "Lire ce que tu as dit au Guet, le matin", to: "IIIR_lire_guet" },
      { label: "Lire pourquoi tu cherches ce trésor", to: "IIIR_lire_raisons" },
      { label: "Lire d'où tu viens", to: "IIIR_lire_passe" },
      { label: "Baisser le miroir", big: true, if: { all: [{ seen: "IIIR_lire_dispute" }, { seen: "IIIR_lire_guet" }] }, why: "Tu n'as pas encore lu ce qui pèse le plus.", hide: { has: "miroir:vu" }, to: "IIIR_miroir_vu" },
      { label: "Baisser le miroir", hide: { not: { has: "miroir:vu" } }, back: "IIIR_reflets" },
    ] },

  IIIR_lire_dispute: { act: "III", title: "Ce que tu te caches de la nuit", place: "mont",
    text: [
      "La nuit des Lanternes. Tu te souviens de cette soirée {{miroir#iiir_m_soiree|comme d'une dispute ordinaire, une de plus, entre une vieille femme têtue et son apprenti|comme de la seule fois où tu as voulu lui faire mal, et où tu as su exactement comment}}.",
      "Elle refusait de dire ce qu'elle vendait. Tu as insisté. Elle s'est tue. Tu lui as dit {{miroir#iiir_m_phrase|quelque chose de dur, dont tu as oublié les mots|« Tu mourras seule avec tes secrets »}}. Puis tu es sorti{e} en claquant la porte, {{miroir#iiir_m_porte|parce que tes amis t'attendaient au pont pour les lanternes|parce que tu avais peur de ce qu'elle allait finir par te dire si tu restais}}.",
      "Tu as regardé les lanternes sur le canal jusqu'à deux heures. Tu as bu. Tu {{miroir#iiir_m_lanternes|as passé une bonne soirée|as pensé à elle toute la soirée, et à chaque lanterne que quelqu'un posait sur l'eau pour un mort, tu as détourné la tête}}.",
      { after: "voile:iiir_m_phrase", text: "Les mots sont là, maintenant, sur la page de toi-même, nets et noirs. Tu les avais rangés si loin que tu les croyais perdus. Ton métier est de chercher les choses perdues. Tu sais qu'on ne perd presque rien." },
    ],
    choices: [
      { label: "Revivre la nuit des Lanternes", big: true, hide: { seen: "IIIR_souv_soir" }, to: "IIIR_souv_soir" },
      { back: "IIIR_miroir" },
    ] },

  IIIR_lire_guet: { act: "III", title: "Ce que tu as dit au Guet", place: "mont",
    text: [
      "Le matin, au Guet, on t'a fait asseoir sur un banc, et un commis a écrit ce que tu disais. Tu as dit {{miroir#iiir_mensonge|que tu n'avais pas vu Odeline depuis le matin de la veille|que tu n'avais pas vu Odeline depuis le matin de la veille, et c'était faux : tu l'avais vue à dix heures du soir, tu lui avais crié dessus, et tu as menti pour que personne ne sache que la dernière chose qu'elle a entendue de toi était cette phrase}}.",
      "Tu t'es dit, depuis, {{miroir#iiir_m_guet|que ce mensonge était sans importance|que si tu avais dit la vérité, le Guet aurait peut-être cherché qui était venu après toi}}.",
      { if: { is: { iiir_pont: "guet" } }, text: "Tu l'as dit devant l'ambre, sur le pont. Tu as dit le mensonge. Tu n'avais pas dit pourquoi." },
      { with: "tibere", text: "Tibère te regarde lire, et il voit ton visage changer. Il était du Guet ce matin-là. Il baisse les yeux le premier." },
      { with: "gildas", after: "voile:iiir_mensonge", text: "Frère Gildas s'est levé de la margelle. Il te regarde, et pour la première fois depuis que tu le connais, il a l'air d'un homme qui va parler sans avoir réfléchi d'abord." },
    ],
    choices: [
      { label: "Lever les yeux vers Frère Gildas", with: "gildas", hide: { any: [{ not: { voile: "iiir_mensonge" } }, { seen: "IIIR_gildas_aveu" }] }, to: "IIIR_gildas_regard" },
      { back: "IIIR_miroir" },
    ] },

  IIIR_lire_raisons: { act: "III", title: "Pourquoi tu cherches", place: "mont",
    text: [
      "Tu cherches le trésor de la Muette. Tu te l'es dit cent fois, à toi, aux autres, à Lothaire Brunel : pour Odeline, pour finir ce qu'elle avait commencé. Les mots pâlissent sur la page.",
      { if: { has: "poids:dette" }, text: "Tu cherches le trésor {{miroir#iiir_m_dette|pour finir le travail d'Odeline|parce que tu dois de l'argent à des gens du port, et que le deuil ne paie pas les intérêts}}." },
      { if: { has: "poids:amour" }, text: "Tu cherches le trésor {{miroir#iiir_m_amour|pour finir le travail d'Odeline|pour revenir riche devant quelqu'un qui te regardait de haut, et le voir baisser les yeux}}." },
      { if: { has: "poids:rien" }, text: "Tu cherches le trésor {{miroir#iiir_m_rien|pour finir le travail d'Odeline|parce qu'une chasse au trésor fait assez de bruit pour couvrir le bruit qu'Odeline ne fait plus dans la boutique}}." },
      { if: { has: "metier:parole" }, text: "Tu fais parler les gens {{miroir#iiir_m_parole|parce que c'est ton métier|pour qu'on ne te demande jamais de parler de toi}}." },
      { if: { has: "metier:mains" }, text: "Tu fouilles {{miroir#iiir_m_mains|parce que tes mains trouvent avant ta tête|parce que tant que tes mains cherchent, ta tête se tait}}." },
      { if: { has: "metier:lire" }, text: "Tu lis les registres {{miroir#iiir_m_lire|parce que ce qu'on perd laisse une trace écrite|parce que l'écrit ne te regarde pas pendant que tu le lis}}." },
      { with: "lison", tendre: true, text: "Tu as gardé Lison près de toi {{miroir#iiir_m_lison|parce qu'elle connaît les eaux|parce que tu as peur du jour où elle remontera dans sa barque sans toi}}." },
      { with: "tibere", text: "Tu as gardé Tibère près de toi {{miroir#iiir_m_tibere|parce qu'il sait se battre|parce qu'il ressemble au père que tu t'es inventé à dix ans, assis sur la troisième marche}}." },
    ],
    choices: [{ back: "IIIR_miroir" }] },

  IIIR_lire_passe: { act: "III", title: "D'où tu viens", place: "mont",
    text: [
      "Tu es arrivé{e} chez Odeline il y a longtemps. Tu connais cette histoire par cœur. Tu l'as racontée à des clients pour les faire sourire. Les phrases se mettent à pâlir aussi.",
      { if: { has: "passe:trouve" }, text: "Ton premier souvenir est {{miroir#iiir_m_trouve|l'étal d'Odeline, l'hiver des Glaces, et la soupe qu'elle t'a donnée|une main de femme qui sent la vase et le sel, qui te pose sous un étal, et une voix des marais qui dit : « Attends ici. Elle viendra »}}." },
      { if: { has: "passe:voleur" }, text: "Tu as essayé de voler Odeline {{miroir#iiir_m_voleur|parce que sa boutique était la plus facile du quai|parce qu'une femme des marais, au port, t'avait donné un liard et le nom de cette boutique-là, et pas d'une autre}}." },
      { if: { has: "passe:gage" }, text: "Ton père t'a laissé en gage {{miroir#iiir_m_gage|et il n'est jamais revenu|et il est revenu une fois, l'année de tes dix ans ; tu l'as vu par la vitrine, et tu as couru à la cave attendre qu'il parte}}." },
      { after: "voile:lettre_trois", text: "Tu sais, depuis la lettre d'Odeline, d'où tu viens. Tu le sais {{miroir#iiir_m_vasse|comme on sait une chose apprise|comme on sait une chose qu'on a toujours sue, et qu'on attendait qu'un autre dise}}." },
      "Odeline t'a gardé{e}. Tu t'es toujours dit qu'elle l'avait fait {{miroir#iiir_m_garde|par bonté, ou parce qu'il lui fallait un apprenti|parce qu'elle t'aimait, et tu ne le lui as jamais dit, à elle, que tu le savais}}.",
    ],
    choices: [{ back: "IIIR_miroir" }] },

  IIIR_miroir_vu: { act: "III", title: "Le miroir baissé", place: "mont",
    fx: { flag: "miroir:vu", ep: ["histoire", 3000] },
    text: [
      "Tu baisses le miroir. Les phrases sur toi reprennent leur encre, ou presque : certaines restent pâles, et tu sais maintenant ce qu'il y a dessous. Tout ce que tu viens de lire, tu le savais déjà. Tu as appris que tu le savais.",
      "Tu enveloppes le miroir dans sa soie noire et tu le glisses dans ta veste, contre ta poitrine, du côté du cornet. Il est froid. Il se réchauffe.",
      { if: { has: "souvenir=reste" }, text: "Dans le souvenir, tu es resté{e}. Dans la vie, tu es parti{e}. Les deux sont écrits maintenant, l'un sous l'autre." },
      { if: { has: "souvenir=parti" }, text: "Dans le souvenir aussi, tu es parti{e}. Tu l'as refait exprès, les yeux ouverts, pour qu'il n'y ait plus de version arrangée." },
      { with: "lison", text: "Lison revient près de toi, sans rien demander, et s'assied à côté, l'épaule contre ton épaule, un moment." },
      { with: "tibere", text: "Tibère te tend sa gourde. C'est du vin coupé d'eau. Tu bois." },
      { with: "salome", text: "Salomé, de loin, te fait un signe de la tête : celui qu'on fait à un plongeur qui remonte." },
      { with: "gildas", text: "Frère Gildas est toujours assis sur la margelle. Il te regarde. Il a la capuche relevée jusqu'aux sourcils, et les mains si serrées l'une dans l'autre que ses jointures sont blanches." },
    ],
    choices: [
      { label: "Regarder Frère Gildas se pencher sur le bassin", with: "gildas", hide: { any: [{ seen: "IIIR_gildas_penche" }, { seen: "IIIR_gildas_aveu" }] }, to: "IIIR_gildas_penche" },
      { label: "« Un moine est sorti de la boutique à minuit, la nuit des Lanternes. »", with: "gildas", hide: { any: [{ not: { has: "fauvette:temoin" } }, { seen: "IIIR_gildas_aveu" }] }, to: "IIIR_gildas_fauvette" },
      { label: "« Qu'avez-vous fait, la nuit des Lanternes, Gildas ? »", with: "gildas", hide: { any: [{ seen: "IIIR_gildas_aveu" }, { has: "gildas:demasque" }] }, to: "IIIR_gildas_question" },
      { label: "« Sur le pont, vous avez parlé d'une femme. »", with: "gildas", hide: { any: [{ not: { has: "iiir:pont_gildas" } }, { seen: "IIIR_gildas_aveu" }] }, to: "IIIR_gildas_aveu" },
      { label: "« Je sais, Gildas. »", with: "gildas", hide: { any: [{ not: { has: "gildas:demasque" } }, { seen: "IIIR_gildas_aveu" }] }, to: "IIIR_gildas_aveu" },
      { back: "IIIR_reflets" },
    ] },


});

// ==================================================================== the remembrance: the night of the Lanterns
var NUIT = "La nuit des Lanternes";
Object.assign(P, {
  IIIR_souv_soir: { act: "III", title: "La boutique, à dix heures", souvenir: NUIT,
    text: [
      "Dix heures du soir, la nuit des Lanternes. Tu descends de ta chambre par l'escalier de l'atelier, ton manteau sur le bras. En bas, la boutique sent la cire, le cuir et la poussière de quarante ans de choses perdues. Par la vitrine, tu vois passer les premières lanternes sur le canal, posées sur des planchettes, chacune avec son nom de noyé écrit sur le papier.",
      "Odeline est à l'établi, sous la lampe, ses lunettes au bout du nez. Elle écrit une lettre. Quand elle t'entend, elle pose la main à plat sur la feuille, sans hâte, comme on pose la main sur un chat pour qu'il ne saute pas. À côté d'elle, sur l'étagère près de la porte de la cave, il y a le bougeoir de cuivre, éteint.",
      "Tu remarques tout. Tu n'avais rien remarqué, ce soir-là. Le souvenir te rend ce que tu as vu sans regarder : la tache d'encre sur son index, le châle mauve qu'elle mettait quand elle avait froid à l'intérieur, la petite boîte de l'établi refermée et poussée contre le mur.",
      "« Tu sors ? » dit-elle, sans lever les yeux. « Les autres m'attendent au pont, dis-tu. » C'était vrai. C'est encore vrai.",
      "Cet après-midi-là, un homme aux gants gris est venu à la boutique. Il est resté une heure dans l'arrière-boutique avec elle. Elle t'avait envoyé{e} faire une course à l'autre bout du quai.",
    ],
    choices: [
      { label: "« Qui était l'homme aux gants gris, cet après-midi ? »", fx: { set: { iiir_souv: "gants" } }, to: "IIIR_souv_question" },
      { label: "« Qu'est-ce que tu écris, que je ne dois pas voir ? »", fx: { set: { iiir_souv: "lettre" } }, to: "IIIR_souv_question" },
    ] },

  IIIR_souv_question: { act: "III", title: "Ce qu'elle vend", souvenir: NUIT,
    text: [
      { if: { is: { iiir_souv: "gants" } }, text: "« Un client », dit Odeline. Elle trempe sa plume. « Un client qui achète. Ça arrive encore, figure-toi. »" },
      { if: { is: { iiir_souv: "lettre" } }, text: "« Une lettre », dit Odeline. Elle trempe sa plume. « À quelqu'un qui n'est pas toi. Ça arrive encore, figure-toi. »" },
      "Tu insistes. Tu as posé ton manteau sur le comptoir. Tu veux savoir ce qu'elle vend, et à qui, et pourquoi elle le cache, et tu le lui dis.",
      "Elle lève enfin les yeux par-dessus ses lunettes. « Ce que je vends ? {{oreille#iiir_od_vend|Des vieilleries, rien qui te regarde|De quoi te laisser une boutique sans dettes quand je ne serai plus là}}. »",
      "Puis elle ôte ses lunettes, les plie, les pose sur la lettre. « Tu veux vraiment le savoir ? Alors assieds-toi. Et tais-toi une minute, pour une fois. »",
    ],
    choices: [
      { label: "« Quand tu ne seras plus là ? »", hide: { not: { voile: "iiir_od_vend" } }, to: "IIIR_souv_malade" },
      { label: "Rester debout : « Dis-le, c'est tout. »", to: "IIIR_souv_dispute" },
    ],
    silence: { who: "odeline", label: "T'asseoir, et te taire", to: "IIIR_souv_tais" } },

  IIIR_souv_malade: { act: "III", title: "Quand je ne serai plus là", souvenir: NUIT,
    fx: { flag: "iiir:malade" },
    text: [
      "« Quand tu ne seras plus là ? » répètes-tu. Ce soir-là, tu n'as pas entendu ces mots, puisqu'elle ne les a pas dits. Tu les entends maintenant, par le cornet de la mémoire, et tu poses la question qu'il fallait poser.",
      "Odeline te regarde un moment, surprise. Puis elle hausse les épaules. « {{oreille#iiir_od_mal|Je suis vieille, voilà tout|J'ai une grosseur sous le sein gauche depuis la Saint-Michel, et le barbier du pont dit six mois, peut-être huit}}. Les vieilles femmes meurent. C'est leur spécialité. »",
      "Elle remet ses lunettes. Elle reprend sa plume. La conversation est finie, pour elle. Elle était finie, ce soir-là, avant même de commencer.",
    ],
    choices: [{ label: "Insister quand même, comme tu l'as fait", to: "IIIR_souv_dispute" }] },

  IIIR_souv_tais: { act: "III", title: "Une minute", souvenir: NUIT,
    text: [
      "Tu t'assieds sur le tabouret de l'établi, en face d'elle. Tu te tais. Ce soir-là, tu ne l'as pas fait. Le souvenir te laisse le faire, un moment, par curiosité.",
      "Odeline te regarde longtemps. Elle ouvre la bouche. Elle va le dire. Tu vois les mots arriver, la façon qu'elle a de lisser la lettre du plat de la main avant de parler, comme avant de te montrer une chose rare.",
      "Puis, dehors, sur le quai, quelqu'un crie ton nom, deux fois, en riant : les autres, qui t'attendent au pont. Au Beffroi, la demie de dix heures sonne. Odeline referme la bouche.",
      "Et le souvenir te remet debout. Il ne garde pas ce silence. Tu étais debout, ce soir-là, et tu as parlé le premier.",
    ],
    choices: [{ label: "Te lever, comme tu l'as fait", to: "IIIR_souv_dispute" }] },

  IIIR_souv_dispute: { act: "III", title: "La dispute", souvenir: NUIT,
    text: [
      "Tu as haussé le ton. Tu t'entends : ta voix de ce soir-là, plus aiguë que tu croyais, qui reproche, qui accuse, qui compte. Les dettes de la boutique, les créanciers, les mois sans un client, et elle qui fait des affaires dans ton dos avec des gens qui portent des gants.",
      "Odeline ne hausse pas le ton. Elle ne le haussait jamais. « Il y a des choses, dit-elle, {{oreille#iiir_od_aime|qu'on ne dit pas à ses apprentis, voilà tout|qu'on ne dit pas aux gens qu'on aime, quand elles peuvent les tuer}}. »",
      "Tu as les mains qui tremblent. Tu les mets dans tes poches. Tu sais ce qui vient. Tu sais ce que tu vas dire, et tu voudrais dire autre chose.",
    ],
    choices: [
      { label: "Lui dire que tu l'aimes", fx: { set: { iiir_dit: "aime" } }, to: "IIIR_souv_phrase" },
      { label: "Lui dire que tu as peur pour elle", fx: { set: { iiir_dit: "peur" } }, to: "IIIR_souv_phrase" },
      { label: "Lui dire ce que tu lui as dit", fx: { set: { iiir_dit: "vrai" } }, to: "IIIR_souv_phrase" },
    ] },

  IIIR_souv_phrase: { act: "III", title: "La phrase", souvenir: NUIT,
    fx: { ep: ["perso", 1500] },
    text: [
      { if: { is: { iiir_dit: "aime" } }, text: "Tu ouvres la bouche pour lui dire que tu l'aimes." },
      { if: { is: { iiir_dit: "peur" } }, text: "Tu ouvres la bouche pour lui dire que tu as peur pour elle." },
      { if: { is: { iiir_dit: "vrai" } }, text: "Tu ouvres la bouche, et tu ne cherches pas à te sauver." },
      "Ta bouche dit : « Tu mourras seule avec tes secrets. »",
      { if: { not: { is: { iiir_dit: "vrai" } } }, text: "Le souvenir ne connaît que cette phrase. Tu as beau pousser d'autres mots devant elle, c'est elle qui sort, avec ta voix de ce soir-là, nette, chaque syllabe à sa place." },
      "Odeline ne répond pas tout de suite. Elle ôte ses lunettes. Elle frotte, du pouce, la marque rouge qu'elles lui laissent sur le nez. Elle a l'air très fatiguée, et pas surprise.",
      "« {{oreille#iiir_od_seule|Peut-être bien|Pas seule. Tu seras là. Tu es toujours là, à l'aube}} », dit-elle. Et elle se remet à écrire.",
    ],
    choices: [{ label: "Prendre ton manteau sur le comptoir", to: "IIIR_souv_porte" }] },

  IIIR_souv_porte: { act: "III", title: "La porte", souvenir: NUIT,
    text: [
      "Tu as ton manteau sur le bras et la main sur la poignée. La porte de la boutique a une clochette de cuivre au-dessus, qui sonne quand on entre et quand on sort. Dehors, le quai est plein de monde et de lumière, et quelqu'un crie encore ton nom, plus loin, vers le pont.",
      "Derrière toi, la plume d'Odeline gratte le papier. Elle ne lève pas la tête. La lampe fait sur l'établi un rond jaune où il n'y a qu'elle, sa lettre, ses mains.",
      "Tu es parti{e}. Tu le sais. Rien de ce que tu feras dans ce souvenir ne changera l'aube, l'escalier, ce que tu as trouvé en bas des marches. Mais le souvenir t'attend, la main sur la poignée, comme s'il te laissait le choix.",
    ],
    choices: [
      { label: "Partir quand même, et claquer la porte", fx: { set: { souvenir: "parti" } }, to: "IIIR_souv_parti" },
      { label: "Lâcher la poignée, et rester", fx: { set: { souvenir: "reste" } }, to: "IIIR_souv_reste" },
    ] },

  IIIR_souv_parti: { act: "III", title: "La porte claque", souvenir: NUIT, back: true,
    text: [
      "Tu ouvres. La clochette sonne. Tu sors, et tu tires la porte derrière toi de toute ta force. Elle claque si fort que la vitre tremble dans son plomb. Tu ne te retournes pas. Tu l'as fait ce soir-là, et tu le refais, les yeux ouverts, pour qu'il n'y ait plus de version arrangée.",
      "Le quai, les lanternes, le pont. Les autres te tendent un gobelet de vin chaud. Quelqu'un pose sur l'eau une lanterne pour un pêcheur noyé à la Saint-Martin, et la lanterne s'en va en tournant doucement vers la Salve.",
      "Derrière toi, à trois cents pas, la vitrine de la boutique est encore éclairée. Elle le restera jusqu'à minuit. Tu ne le sauras jamais, puisque tu ne t'es pas retourné{e}. Le souvenir s'arrête au pont, dans le bruit de la foule.",
    ] },

  IIIR_souv_reste: { act: "III", title: "Rester", souvenir: NUIT, back: true,
    text: [
      "Tu lâches la poignée. La clochette ne sonne pas. Tu poses ton manteau sur le comptoir, et tu vas t'asseoir sur la troisième marche de l'escalier de l'atelier, celle d'où tu la regardais travailler quand tu étais petit{e}.",
      "Odeline ne dit rien. Elle écrit. Au bout d'un moment, sans lever la tête, elle pousse vers toi, sur l'établi, la boîte de dattes sèches qu'elle garde pour les clients difficiles. Tu en prends une. Dehors, on cesse de crier ton nom.",
      "Le souvenir tient jusqu'à onze heures, à peu près. Puis il s'use, il se défait sur les bords comme une étoffe trop lavée, parce qu'il ne sait pas la suite : tu n'étais pas là pour la voir. Odeline pâlit sous la lampe. La boutique pâlit autour d'elle.",
      "Et très loin, quelque part dans un autre soir, tu entends quand même une porte claquer, et une vitre trembler dans son plomb. Celle-là, c'est la vraie.",
    ] },


});

// ==================================================================== the truth about Gildas: the ways to it
Object.assign(P, {
  IIIR_gildas_penche: { act: "III", title: "Le visage dans l'eau", place: "mont", with: "gildas",
    fx: { flag: "gildas:cicatrice" },
    text: [
      "Frère Gildas se lève de la margelle, s'agenouille au bord du bassin, et plonge les deux mains dans l'eau noire pour se mouiller le visage. Il reste penché un moment au-dessus de l'eau, et l'eau, comme le dit la margelle, ne lui montre que lui.",
      "La capuche glisse en arrière. Sous la couronne grise de la tonsure, à la racine des cheveux, au-dessus de l'œil gauche, il y a une cicatrice. Elle est récente, rose encore, en arc, longue comme un doigt, et les points de couture ont laissé de chaque côté des petites marques blanches.",
      "Gildas sent ton regard. Il ne remonte pas sa capuche. Il reste à genoux, les mains dans l'eau, et il attend.",
      { with: "tibere", text: "Tibère a vu aussi. Il a vu des fronts ouverts toute sa vie, au Guet, les soirs de paie. Il regarde la cicatrice, puis toi, et ne dit rien." },
    ],
    choices: [
      { label: "« D'où vient cette cicatrice, Gildas ? »", big: true, to: "IIIR_gildas_aveu" },
      { label: "Détourner les yeux, et le laisser remonter sa capuche", back: "IIIR_reflets" },
    ] },

  IIIR_gildas_fauvette: { act: "III", title: "Ce qu'a vu Fauvette", place: "mont", with: "gildas",
    text: [
      "Tu le répètes mot pour mot, tel qu'on te l'a dit sur un toit des Gouttières, la bouche pleine d'une pomme volée : un moine, la nuit des Lanternes, à minuit, qui sortait de la boutique d'Odeline, la capuche sur les yeux, une main sur le front.",
      "Frère Gildas t'écoute jusqu'au bout. Il hoche la tête, lentement, une fois.",
      "« Une fille rousse, dit-il. Sur le toit d'en face, contre la cheminée. Je l'ai vue. Elle m'a vu. J'ai pensé qu'elle le dirait au Guet le lendemain. J'ai attendu le Guet trois semaines. »",
    ],
    choices: [{ label: "« Alors dites-le, vous. »", big: true, to: "IIIR_gildas_aveu" }] },

  IIIR_gildas_question: { act: "III", title: "La question", place: "mont", with: "gildas",
    text: [
      "« Qu'avez-vous fait, la nuit des Lanternes ? »",
      "Frère Gildas ne répond pas. Il te regarde. Il a la tranquillité d'un homme qui tient une phrase prête depuis longtemps, et qui la pèse une dernière fois avant de la poser.",
      "La lumière du puits de jour se déplace sur la paroi, d'un miroir à l'autre. L'eau goutte dans le bassin. Tu comptes les gouttes. Tu en comptes onze.",
    ],
    choices: [
      { label: "« Répondez. »", to: "IIIR_gildas_aveu" },
      { label: "Lui laisser du temps, et parler d'autre chose", back: "IIIR_reflets" },
    ],
    silence: { who: "gildas", label: "Attendre, aussi longtemps qu'il faudra", to: "IIIR_gildas_aveu" } },

  IIIR_gildas_regard: { act: "III", title: "Ce que Gildas a vu", place: "mont", with: "gildas",
    text: [
      "Tu lèves les yeux du miroir. Frère Gildas est debout devant toi, à deux pas. Il a vu ton visage pendant que tu lisais.",
      "« Tu as menti au Guet, dit-il. Tu as dit que tu ne l'avais pas vue depuis le matin. »",
      "Ce n'est pas une question. Tu ne lui as jamais dit ce que tu as déclaré au Guet. Personne, à part le commis et toi, ne sait ce qu'il y a sur cette feuille.",
      "« Je savais que tu mentais, dit Gildas. Depuis le premier jour. Je savais que tu l'avais vue le soir, et que vous vous étiez disputé{e}s, parce qu'elle me l'a dit. À minuit. » Il s'arrête. « Tu as menti au Guet sur une heure. Moi, je n'ai rien dit à personne, sur tout le reste. C'est pire. Il est temps. »",
    ],
    choices: [{ label: "« Dites-le. »", big: true, to: "IIIR_gildas_aveu" }] },

  IIIR_gildas_aveu: { act: "III", title: "L'aveu", place: "mont", with: "gildas",
    fx: { flag: ["gildas:demasque", "gildas:aveu", "odeline:verite"], ep: ["histoire", 3500] },
    text: [
      { after: "IIIR_gildas_penche", text: "Frère Gildas touche la cicatrice du bout des doigts, comme on vérifie qu'une chose est toujours là. « D'un bougeoir de cuivre », dit-il." },
      "Frère Gildas se met debout, face à toi. Il rabat sa capuche sur ses épaules, tout à fait, et la cicatrice est là, sous la lumière grise, au-dessus de son œil gauche.",
      "« C'est moi, dit-il. J'étais dans la boutique d'Odeline à minuit, la nuit des Lanternes. Je l'ai repoussée, et elle est tombée dans l'escalier de la cave. Elle est morte en bas. Je ne voulais pas sa mort. C'est moi quand même. »",
      "Il le dit d'une voix égale, la même qui t'a lu tant de lignes de vieux latin, la même qui disait les Laudes. Il garde les yeux dans les tiens.",
      { after: "gildas:demasque", if: { not: { has: "gildas:aveu" } }, text: "Tu le savais. Le savoir et l'entendre de sa bouche sont deux choses différentes, et tu découvres laquelle des deux fait mal." },
      "Tu {{miroir#iiir_m_aveu|restes calme, les mains le long du corps|restes calme parce que si tu bouges, tu ne sais pas ce que tes mains feront}}.",
    ],
    choices: [
      { label: "« Racontez. Tout. Depuis le début. »", big: true, to: "IIIR_gildas_nuit" },
      { label: "Le frapper", to: "IIIR_combat" },
    ],
    silence: { who: "gildas", label: "Ne rien dire, et attendre qu'il continue", to: "IIIR_gildas_nuit" } },

  IIIR_gildas_nuit: { act: "III", title: "Minuit, sur le quai", place: "mont", with: "gildas",
    fx: { item: "iiir_lettre_banque" },
    text: [
      "« On a su au Mont qu'elle avait écrit à la Banque, dit Gildas. Qu'elle allait vendre le secret du Beffroi. Je suis le Gardien. Je suis descendu à Salvèze pour lui parler. Rien que pour lui parler. Je me le suis dit pendant les quatre jours de route. »",
      "« Je suis arrivé à minuit. La porte n'était pas fermée à clé. Elle était à l'établi, avec une lettre. Elle m'a reconnu tout de suite. Elle a dit : *Tu as vieilli, Gildas.* Puis elle a dit : *L'enfant est sorti{e}, on s'est disputé{e}s, tu tombes bien, je suis de mauvaise humeur.* »",
      "« Je lui ai demandé de ne pas vendre. Elle a dit que le silence ne nourrissait personne, et qu'elle avait quelqu'un à nourrir après elle. J'ai pris la lettre sur l'établi. Elle a pris le bougeoir sur l'étagère, et elle m'a frappé. » Il touche son front. « J'ai levé le bras, pour le coup suivant. Je l'ai repoussée. Pas fort. Derrière elle, la porte de la cave était ouverte. »",
      "« Elle est tombée en arrière. J'ai descendu les marches derrière elle. Quatorze. Elle était morte en bas. Je lui ai fermé les yeux. Puis j'ai cherché le cornet, dans toute la boutique, jusqu'à trois heures. Je ne l'ai pas trouvé. J'ai remis le bougeoir sur l'étagère. J'ai gardé la lettre. Je suis sorti par le quai. »",
      "« J'ai attendu le jour à l'église des Noyés. Le jour, je suis venu prier pour elle, et tu étais là. Tu m'as ouvert la porte. Je ne t'ai jamais menti. Je me suis tu. »",
      "Il sort de sa bure une feuille pliée en quatre, froissée, tachée d'une goutte brune à un coin, et il te la tend.",
      "Tu écoutes {{miroir#iiir_m_ecoute|sans rien sentir, avec une attention de greffier|avec une attention de greffier, parce que tant que tu notes les heures et les marches, tu n'as pas à sentir le reste}}.",
    ],
    choices: [{ label: "Prendre la lettre, et le silence qui suit", big: true, to: "IIIR_gildas_apres" }] },

  IIIR_gildas_apres: { act: "III", title: "Le silence d'après", place: "mont", with: "gildas",
    text: [
      "Personne ne parle pendant longtemps. La lumière du puits de jour a encore bougé ; elle n'éclaire plus la niche, elle est montée sur la voûte. Frère Gildas reste debout là où il a parlé, les mains vides, la capuche sur les épaules.",
      "La lettre d'Odeline est dans ta main. Tu reconnais l'écriture, la tache d'encre de l'index au coin. *Monsieur Brunel*, commence-t-elle.",
      { with: "lison", text: "Lison s'est mise entre Gildas et le pont, sans y penser, la gaffe à la main. Elle a les lèvres serrées en un trait blanc." },
      { with: "tibere", text: "Tibère s'est assis par terre, le dos contre la margelle, comme un homme qui a couru. Il regarde ses mains." },
      { with: "salome", text: "Salomé a croisé les bras. « Toi, au moins, tu as un homme qui avoue, dit-elle à mi-voix. Moi, j'ai un homme qui sourit. »" },
      { if: { has: "iiir:malade" }, text: "Tu penses à une grosseur sous le sein gauche, au barbier du pont, à six mois, peut-être huit. Gildas ne le sait pas." },
    ],
    choices: [
      { label: "Lire la lettre d'Odeline à la Banque", to: "IIIR_lettre_banque" },
      { label: "Te tourner vers Lison", with: "lison", hide: { seen: "IIIR_lison_gardien" }, to: "IIIR_lison_gardien" },
      { label: "Te tourner vers Tibère", with: "tibere", hide: { seen: "IIIR_tibere_rapport" }, to: "IIIR_tibere_rapport" },
      { label: "« Elle était malade, Gildas. Elle allait mourir avant l'été. »", hide: { any: [{ not: { has: "iiir:malade" } }, { seen: "IIIR_gildas_malade" }] }, to: "IIIR_gildas_malade" },
      { label: "Décider de ce que tu fais de lui", big: true, to: "IIIR_verdict" },
    ] },

  IIIR_lettre_banque: { act: "III", title: "La lettre à la Banque", place: "mont",
    text: [
      "Tu déplies la lettre. Elle est datée du jour des Lanternes, et la plume a buté deux fois sur le papier, à l'endroit où Odeline appuyait trop.",
      "*Monsieur Brunel. Je maintiens mon prix : deux mille ducats, la moitié avant, la moitié quand vous aurez vu de vos yeux ce qu'il y a sous l'horloge. Je ne dirai pas un mot de plus avant la première moitié. Vous m'avez demandé ce matin si j'avais peur. {{loupe#iiir_l_lettre|Je suis trop vieille pour avoir peur. Je vous attends demain à la même heure.|Si c'est toi qui lis ceci, avec la loupe, c'est que j'ai eu raison d'avoir peur. Prends l'argent s'il vient. Ne prends rien d'autre de ces gens. Et pardonne-moi la porte.}} O. Carrus.*",
      { after: "voile:iiir_l_lettre", text: "*Pardonne-moi la porte.* Elle a écrit ça avant minuit. Avant Gildas. Après toi." },
      { if: { not: { item: "loupe" } }, text: "L'encre a cette brillance particulière que tu as appris à reconnaître, par endroits, comme si une autre écriture attendait dessous." },
    ],
    choices: [{ back: "IIIR_gildas_apres" }] },

  IIIR_lison_gardien: { act: "III", title: "Ce que savait Lison", place: "mont", with: ["lison", "gildas"],
    fx: { conf: { lison: 5 } },
    text: [
      "Lison ne te regarde pas. Elle regarde Gildas. « Le Gardien, dit-elle. Quand j'étais petite, on disait ce mot-là pour faire peur aux enfants qui répétaient les chansons. *Le Gardien viendra.* » Elle avale sa salive.",
      "« Grand-mère m'a dit, avant que je parte pour le quai, {{oreille#iiir_o_lison|que le Gardien n'avait rien à voir avec tout ça|que le Gardien était descendu à Salvèze pour parler à la vieille Carrus, et qu'il était remonté sans rien dire. Parler. Elle a dit parler}}. »",
      { after: "voile:iiir_o_lison", text: "Elle se tourne enfin vers toi. « Tu m'as entendue, hein. Avec ton cornet. » Elle a les yeux secs et très brillants. « Oui, je savais qu'il était allé chez elle. Je ne savais pas le reste. Je n'ai pas voulu le savoir. C'est presque pareil, je sais. »" },
      { before: "voile:iiir_o_lison", text: "Elle se tait, et elle reprend sa place entre Gildas et le pont." },
    ],
    choices: [{ back: "IIIR_gildas_apres" }] },

  IIIR_tibere_rapport: { act: "III", title: "Le rapport de Tibère", place: "mont", with: ["tibere", "gildas"],
    text: [
      "Tibère parle sans lever la tête, à ses mains. « Le matin, au Guet, c'est moi qu'on a envoyé constater. J'ai regardé l'escalier, j'ai regardé le corps. J'ai écrit *accident, la nuit, les marches raides, une femme âgée*. Trois lignes. »",
      "« {{oreille#iiir_o_tibere|J'ai rien vu de spécial|J'ai vu le bougeoir sur l'étagère, propre, trop propre, avec une goutte de cire tombée à côté au lieu de dessous. J'ai vu, et j'ai écrit accident, parce qu'un meurtre, c'est six semaines d'enquête et pas de prime}}. »",
      { after: "voile:iiir_o_tibere", text: "Il relève la tête vers toi, et il sait que tu as entendu. « Voilà, dit-il. Ça aussi, tu peux l'écrire sur la liste. »" },
      "Frère Gildas regarde Tibère. « Vous avez écrit ce que vous pouviez prouver, sergent, dit-il. Moi, j'ai essuyé le bougeoir. »",
    ],
    choices: [{ back: "IIIR_gildas_apres" }] },

  IIIR_gildas_malade: { act: "III", title: "Six mois", place: "mont", with: "gildas",
    text: [
      "Tu le lui dis : la grosseur, la Saint-Michel, le barbier du pont, six mois, huit peut-être. Ce qu'elle cachait sous son châle mauve. Ce qu'elle t'a dit sous le cornet, dans le souvenir, et qu'elle ne t'a jamais dit dans la vie.",
      "Frère Gildas t'écoute. Quelque chose bouge dans son visage pour la première fois, à peine, au coin de la bouche. Il ferme les yeux.",
      "« Elle ne me l'a pas dit, dit-il. *Quelqu'un à nourrir après elle.* Je croyais qu'elle parlait de l'argent. » Il rouvre les yeux. « Ça ne change rien à ce que j'ai fait. Je l'ai poussée. Ça change ce qu'elle avait à perdre. Elle avait moins. Elle en avait encore. »",
    ],
    choices: [{ back: "IIIR_gildas_apres" }] },
});

// ==================================================================== what the hero does with Gildas
Object.assign(P, {
  IIIR_verdict: { act: "III", title: "Ce que tu fais de lui", place: "mont", with: "gildas", backName: "Gildas, devant le bassin",
    text: [
      { if: { not: { has: "iiir:gildas_battu" } }, text: "Frère Gildas attend. Il est resté à sa place. Il a dit ce qui était. Il te laisse le reste." },
      { after: "iiir:gildas_battu", text: "Frère Gildas s'est relevé à moitié, assis contre la margelle, le front ouvert. Le sang descend dans son sourcil et il ne l'essuie pas. Il attend." },
      "« Je ne te demande rien, dit-il. Dis ce que tu veux faire de moi. Je le ferai. »",
      { after: "voile:iiir_l_feuillet", text: "Tu penses au feuillet, dans son étui de plomb, contre ta hanche. À la dernière ligne, sous la loupe. *Elle leur pardonnait. Je ne l'ai pas écrit.*" },
      { if: { has: "taiseurs:serment" }, text: "Tu as prêté le serment des Taiseurs. Cet homme en est le Gardien. Ce qu'il a fait, il l'a fait au nom de ce que tu as juré." },
    ],
    choices: [
      { label: "« La reine leur pardonnait. Aymeric ne l'a pas écrit. Moi, je l'écris. »", hide: { not: { voile: "iiir_l_feuillet" } }, fx: { set: { iiir_pardon: "reine" } }, to: "IIIR_pardon" },
      { label: "Lui pardonner", fx: { set: { iiir_pardon: "simple" } }, to: "IIIR_pardon" },
      { label: "Le chasser : qu'il reste ici, sous sa montagne", to: "IIIR_chasse" },
      { label: "« Vous descendrez à Salvèze avec moi, et vous le direz au Guet. »", to: "IIIR_livrer" },
      { label: "Le frapper", hide: { has: "iiir:gildas_battu" }, to: "IIIR_combat" },
    ],
    silence: { who: "gildas", label: "Ne rien répondre, et remonter avec lui", to: "IIIR_sursis" } },

  IIIR_pardon: { act: "III", title: "Le pardon", place: "mont", with: "gildas",
    fx: { flag: "gildas:pardonne", conf: { gildas: 15 }, fac: { taiseurs: 5 }, ep: ["seance", 2500] },
    text: [
      { if: { is: { iiir_pardon: "reine" } }, text: "« La reine leur a pardonné, dis-tu. À ceux qui lui ont coupé la langue. Aymeric Vasse a retranché ce signe-là, et trois siècles de Taiseurs sont nés de ce qu'il a retranché. » Tu sors le feuillet de son étui et tu lui montres la dernière ligne, sous la loupe. « Je ne veux pas qu'on retranche encore. »" },
      { if: { is: { iiir_pardon: "simple" } }, text: "« Je vous pardonne », dis-tu. Les mots sont plus petits que tu croyais. Ils tiennent dans la bouche. Tu les dis une seconde fois, pour vérifier qu'ils sont vrais, et ils le sont, à peu près, ce soir." },
      "Frère Gildas ne remercie pas. Il hoche la tête, une fois, lentement, comme il a hoché la tête à tant de lignes de latin qu'il trouvait justes. Puis il rabat sa capuche sur son front, et il ramasse son bâton contre la margelle.",
      "« Je n'ai pas de quoi rembourser, dit-il. Je marcherai devant toi jusqu'à Sorne. C'est tout ce que j'ai. »",
      { with: "lison", text: "Lison détourne la tête. « Chez nous, dit-elle, on aurait fait autrement. » Puis, plus bas : « Chez nous, on a souvent tort. »" },
      { with: "tibere", text: "Tibère se relève en grognant, une main sur la margelle. « Moi, dit-il, je l'aurais livré. Mais je ne suis pas un exemple. »" },
    ],
    choices: [{ back: "IIIR_reflets" }] },

  IIIR_chasse: { act: "III", title: "Sous la montagne", place: "mont", with: "gildas",
    fx: { flag: "gildas:chasse", leave: "gildas", conf: { gildas: -10 }, item: "iiir_cle_gardiens" },
    text: [
      "« Restez ici, dis-tu. Sous votre montagne. Avec votre autel, vos tablettes et vos noms. Je ne veux plus vous voir marcher derrière moi. »",
      "Frère Gildas incline la tête. Il sort de sa bure une clé de fer à long panneton et la pose sur la margelle du bassin, entre vous. « Le chemin des Gardiens, dit-il. Il part de derrière l'autel. Si la Banque vient par la carrière, c'est par là qu'on sort vite. »",
      "Puis il te regarde une dernière fois, et il dit : « Va jusqu'à Sorne. Elle l'aurait voulu, en fin de compte. Elle voulait que tu aies quelque chose. »",
      "Il prend son bâton. Il traverse la salle des Reflets, passe sous les miroirs, et s'enfonce dans la galerie de l'autel, sans lampe, une main sur la paroi. Tu entends ses sandales longtemps. Puis tu ne les entends plus.",
      { with: "lison", text: "Lison suit des yeux le dos de Gildas jusqu'au noir. « Il va prier, dit-elle. Ils ne savent faire que ça, ici, quand on les chasse. »" },
    ],
    choices: [{ back: "IIIR_reflets" }] },

  IIIR_livrer: { act: "III", title: "Le Guet", place: "mont", with: "gildas",
    fx: { flag: "gildas:livre", conf: { gildas: 5 } },
    text: [
      "« Vous descendrez à Salvèze avec moi, dis-tu. Et quand ce sera fini, vous irez au Guet. Vous direz ce que vous m'avez dit, au même commis, sur le même banc. On écrira votre déposition à côté de la mienne. »",
      "Frère Gildas hoche la tête. « J'irai, dit-il. Je te demande une chose. Laisse-moi lire le Registre jusqu'au bout avant. Il faut quelqu'un qui sache lire la main d'Aymeric. Après, le Guet. »",
      { after: "mandat", text: "« Et c'est toi qu'on recherche, à Salvèze, ajoute-t-il, pour ce que j'ai fait. Ma déposition lèvera ton mandat. Le Guet aime qu'on lui apporte un coupable qui signe. »" },
      { with: "tibere", text: "Tibère approuve d'un grognement. « Je l'accompagnerai, moi, au Guet. Je connais le chemin. J'ai même encore la clé de la porte de derrière. »" },
      "Tu remarques qu'il a l'air soulagé, pour la première fois depuis que tu le connais.",
    ],
    choices: [{ back: "IIIR_reflets" }] },

  IIIR_sursis: { act: "III", title: "Rien", place: "mont", with: "gildas",
    fx: { flag: "iiir:gildas_sursis" },
    text: [
      "Tu ne réponds pas. Tu ne sais pas ce que tu veux faire de lui, et tu refuses de le décider ici, sous la montagne, avec le miroir contre ta poitrine et la lettre d'Odeline dans la main.",
      "Frère Gildas comprend. Il ramasse son bâton. Quand tu te remets en marche, il te suit, à trois pas derrière, comme avant. Il a remis sa capuche. La cicatrice ne se voit plus.",
      "Vous le savez tous les deux : c'est une question que tu emportes, et qu'il porte avec toi.",
    ],
    choices: [{ back: "IIIR_reflets" }] },

  IIIR_combat: { act: "III", title: "Le bâton en travers", place: "mont", with: "gildas",
    text: [
      "Tu marches sur lui. Frère Gildas ne recule pas. Il prend son bâton de pèlerin à deux mains, en travers devant lui, à hauteur de poitrine, comme on tient une barre de porte. Il ne lève pas le bout ferré.",
      "« Je parerai, dit-il. Je ne frapperai pas. »",
      { with: "any", text: "Personne ne t'arrête. Quelqu'un, derrière toi, a fait un pas, et s'est arrêté de lui-même." },
    ],
    choices: [
      { label: "Frapper", fight: { title: "Frère Gildas", enemies: [{ id: "iiir_gildas", n: 1 }], spare: true,
        win: { to: "IIIR_combat_fin" }, lose: { to: "IIIR_combat_lose" }, calm: { to: "IIIR_combat_fin" },
        flee: { label: "Laisser retomber tes bras, à bout de souffle", dom: "combat", diff: 10, to: "IIIR_combat_lose" } } },
      { label: "Baisser les poings", back: "IIIR_verdict" },
    ] },

  IIIR_combat_fin: { act: "III", title: "À terre", place: "mont", with: "gildas",
    fx: { flag: "iiir:gildas_battu" },
    text: [
      "Le bâton de Gildas vole et roule sur la pierre jusqu'au bassin. Gildas tombe sur un genou, puis sur le côté, contre la margelle. Il ne se protège pas le visage. Ton dernier coup lui a rouvert le front, à l'endroit exact de la cicatrice, et le sang coule dans son œil.",
      "Il est à terre, à ta merci. Il te regarde avec son œil valide. Il attend la suite. Tu as la respiration courte et les mains qui brûlent.",
      "Tu {{miroir#iiir_m_coup|frappes pour Odeline|frappes pour Odeline, et aussi pour la phrase que tu lui as dite, que tu ne peux pas frapper}}.",
    ],
    choices: [
      { label: "T'arrêter là", big: true, back: "IIIR_verdict" },
      { label: "Frapper encore, jusqu'au bout", tag: "Marque +1", stain: true, to: "IIIR_combat_mort" },
    ] },

  IIIR_combat_mort: { act: "III", title: "Au bord du bassin", place: "mont", with: "gildas",
    fx: { flag: "gildas:mort", leave: "gildas", mark: 1, fac: { taiseurs: -15, moines: -10 } },
    text: [
      "Tu frappes encore. Ses bras restent le long de son corps. Après, il ne bouge plus.",
      "Le silence de la salle des Reflets revient d'un coup, avec l'eau qui goutte dans le bassin et la lumière qui glisse d'un miroir à l'autre. Frère Gildas est étendu sur le flanc, contre la margelle, une main ouverte sur la pierre, la paume en l'air.",
      "Tu restes debout. Tu regardes tes mains. Elles ne tremblent pas. Ça, plus tard, tu t'en souviendras plus que du reste.",
      { with: "lison", text: "Lison s'est détournée. Elle a vomi contre la paroi, sans bruit. Elle s'essuie la bouche du revers de la main et ne te regarde pas." },
      { with: "tibere", text: "Tibère s'agenouille près du corps et lui ferme les yeux, du pouce, comme on le fait au Guet. « On le portera à l'autel, dit-il. C'est à côté. »" },
      { with: "salome", text: "Salomé dit seulement : « Voilà. » Et elle va ramasser le bâton qui a roulé près du bassin, et elle le pose sur le corps." },
    ],
    choices: [
      { label: "Porter le corps jusqu'à l'autel des Taiseurs", to: "IIIR_autel_corps" },
    ] },

  IIIR_combat_lose: { act: "III", title: "Le bâton qui pare", place: "mont", with: "gildas",
    fx: { pv: "max" },
    text: [
      "Tu frappes, et le bâton est là. Tu frappes encore, et le bâton est encore là. Il ne te touche jamais. Il te renvoie, coup après coup, ta propre force, jusqu'à ce que ton pied glisse sur la pierre mouillée au bord du bassin et que tu tombes à genoux, à bout de souffle.",
      "Frère Gildas pose son bâton. Il s'agenouille en face de toi. Il prend ta main écorchée dans les siennes, la retourne, regarde les jointures ouvertes, et il les soigne, avec un linge propre et une pommade qui sent la sauge, comme il l'a fait vingt fois depuis Salvèze.",
      "« Je ne me battrai pas contre toi, dit-il. Tu peux recommencer autant qu'il faudra. Ou décider autre chose. »",
    ],
    choices: [{ label: "Te relever", back: "IIIR_verdict" }] },


});

// ==================================================================== after the mirror: the offering, the water, the vigil, Gildas at the altar
Object.assign(P, {
  IIIR_offr_don: { act: "III", title: "Une offrande", place: "mont",
    text: [
      "Près de l'entrée de la galerie, il reste des niches vides, au rang du bas. Tu t'accroupis devant l'une d'elles. La pierre est propre. Personne ne l'a encore choisie.",
      "Les familles des marais descendent ici une chose par an, pour une reine morte depuis trois siècles. Tu n'as pas de famille dans ces registres, ou tu en as une que tu ne connais pas. Tu as une boutique sur un quai, et une morte au cimetière des Noyés.",
      "Tu cherches dans tes poches {{miroir#iiir_m_don|quelque chose de convenable|quelque chose qui coûte, parce qu'une offrande qui ne coûte rien ressemble à la vérité commode du pont}}.",
    ],
    choices: [
      { label: "La dague qu'Odeline t'a offerte pour tes seize ans", if: { item: "dague" }, why: "Tu ne l'as plus.", fx: { drop: "dague", set: { iiir_offrande: "dague" } }, to: "IIIR_offr_don2" },
      { label: "Une mèche de tes cheveux, nouée d'un fil arraché à ta manche", fx: { set: { iiir_offrande: "meche" } }, to: "IIIR_offr_don2" },
      { label: "La clochette sans battant, rendue à la reine", if: { item: "iiir_tr_clochette" }, why: "Il faudrait l'avoir trouvée.", fx: { drop: "iiir_tr_clochette", set: { iiir_offrande: "clochette" } }, to: "IIIR_offr_don2" },
      { back: "IIIR_offrandes" },
    ] },

  IIIR_offr_don2: { act: "III", title: "Carrus", place: "mont",
    fx: { flag: "iiir:offrande", fac: { taiseurs: 5 }, ep: ["perso", 800] },
    text: [
      { by: "iiir_offrande", cases: {
        dague: "Tu poses la dague sur la pierre nue, à plat, le manche vers l'entrée. Elle est courte et bien équilibrée, et le cuir de la poignée garde la forme de ta main. Odeline l'avait payée trop cher à un coutelier du pont, et elle avait menti sur le prix.",
        meche: "Tu coupes une mèche de tes cheveux avec ton couteau, tu la noues avec un fil tiré de ta manche, et tu la poses sur la pierre nue. Elle a l'air de rien. Toutes les mèches de cette galerie ont l'air de rien.",
        clochette: "Tu poses la clochette d'argent sur la pierre nue. Elle a passé trois siècles au fond d'une citerne. Elle retrouve une niche, avec une couronne gravée sur le rebord et trois mots : *pour qu'elle appelle*.",
      } },
      "Puis, avec la pointe de ton couteau, tu graves sous la niche la date d'aujourd'hui, et un nom de famille qui n'est pas des marais : *Carrus*.",
      { with: "lison", text: "Lison regarde le nom. « Il n'y a jamais eu de Carrus ici », dit-elle. « Maintenant si », dis-tu. Elle ne répond pas, mais elle se penche et souffle la poussière de pierre dans les lettres, pour qu'on les lise mieux." },
      { with: "gildas", text: "Frère Gildas lit le nom de loin, et fait sur sa poitrine le signe des trois doigts." },
    ],
    choices: [{ back: "IIIR_offrandes" }] },

  IIIR_bassin_soi: { act: "III", title: "Ton visage dans l'eau", place: "mont",
    text: [
      "Tu t'agenouilles au bord du bassin, là où Frère Gildas s'est penché. L'eau noire est redevenue immobile. Elle ne montre que toi, comme le dit la margelle, avec la voûte et ses miroirs derrière ta tête.",
      "Tu as {{miroir#iiir_m_visage|les traits tirés de quelqu'un qui a descendu trois cents marches|les traits de quelqu'un qui a cessé d'attendre qu'on lui pardonne, et qui ne sait pas encore par quoi remplacer cette attente}}. Autour de la bouche, tu ressembles {{miroir#iiir_m_bouche|à n'importe quel chercheur fatigué|à Odeline, quand elle refusait de répondre et serrait les lèvres pour ne pas sourire}}.",
      "Tu plonges la main dans l'eau. Ton visage se défait en cercles. Quand l'eau se calme, il revient, le même.",
      { with: "any", text: "Derrière toi, on attend que tu te relèves. Personne ne te presse." },
    ],
    choices: [{ back: "IIIR_reflets" }] },

  IIIR_veille: { act: "III", title: "La nuit sous la montagne", place: "mont", takes: 6,
    fx: { rest: true },
    text: [
      "Vous dormez près du puits, roulés dans les manteaux, sur la pierre que la dalle qui chante fait vibrer toutes les dix respirations. Sous la montagne, le jour et la nuit se réduisent à la lampe qu'on baisse, et à la goutte qui tombe.",
      "Le miroir sans tain est contre ta poitrine, sous ta chemise, enveloppé de sa soie. Tu dors {{miroir#iiir_m_dors|bien, pour la première fois depuis longtemps|mal, et c'est la première fois depuis la nuit des Lanternes que tu dors mal, et c'est presque un soulagement, comme une fièvre qui sort}}.",
      { with: "gildas", text: "Frère Gildas ne dort pas. Il est assis contre une statue de moine, le bâton en travers des genoux, et il veille, comme on veille un mort ou une écurie." },
      { with: "any", text: "Autour de toi, des respirations. Quelqu'un se retourne, quelqu'un tousse, quelqu'un murmure un nom dans son sommeil." },
    ],
    choices: [
      { label: "Lison, qui ne dort pas non plus", with: "lison", to: "IIIR_veille_lison" },
      { label: "Tibère, qui te fait signe de lui prêter le miroir", with: "tibere", to: "IIIR_veille_tibere" },
      { label: "Salomé, assise au bord du puits", with: "salome", to: "IIIR_veille_salome" },
      { label: "Te rendormir jusqu'au matin", back: "IIIR_galeries" },
    ] },

  IIIR_veille_lison: { act: "III", title: "Lison, dans le noir", place: "mont", with: "lison",
    fx: { conf: { lison: 5 } },
    text: [
      "Lison se glisse près de toi, sur ton manteau, sans demander. Elle parle tout bas, pour ne pas réveiller les autres. « Qu'est-ce que tu as lu, dans ce truc ? »",
      "Tu le lui dis. La phrase. La porte. Le Guet. Tu le dis très vite, d'une traite, comme on avale un remède. Elle écoute sans t'interrompre.",
      "« Chez nous, dit-elle ensuite, on dit {{oreille#iiir_o_lison2|que les morts n'entendent plus ce qu'on leur a dit de travers|que les morts gardent la dernière phrase, et qu'il faut leur en apporter une autre au cimetière, à voix haute, pour qu'ils puissent choisir}}. »",
      { tendre: true, text: "Elle reste. Elle pose sa tête contre ton épaule, dans le noir, et tu sens ses cheveux, qui sentent la vase et la fumée de tourbe. Elle ne dit plus rien. Toi non plus. Vous vous endormez comme ça, contre la margelle, et au matin vous faites semblant de rien.", else: "Elle reste assise à côté de toi un long moment, les genoux dans les bras, à regarder la lampe baissée. Puis elle retourne à sa place." },
    ],
    choices: [{ back: "IIIR_galeries" }] },

  IIIR_veille_tibere: { act: "III", title: "Tibère et le miroir", place: "mont", with: "tibere",
    fx: { conf: { tibere: 5 } },
    text: [
      "« Prête-le-moi, souffle Tibère. Rien qu'une minute. Je veux voir si ça marche sur un vieux sergent. »",
      "Tu le lui tends. Il défait la soie avec ses gros doigts, maladroitement, et il tient le miroir noir devant son visage, à bout de bras, comme toi. Puis il relève les yeux, et tu le vois les fermer très vite.",
      "Il remballe le miroir et te le rend. « {{oreille#iiir_o_tibere2|Rien d'intéressant, dit-il. Un vieux qui a besoin de dormir|Rosalie, dit-il. À quatre ans, sur mes épaules, au Beffroi, le jour des automates. Je l'avais rangée si loin. Je l'avais oubliée comme ça}}. »",
      "Il se recouche, le dos tourné, et tu l'entends respirer longtemps comme quelqu'un qui ne dort pas.",
    ],
    choices: [{ back: "IIIR_galeries" }] },

  IIIR_veille_salome: { act: "III", title: "Salomé, au bord du puits", place: "mont", with: "salome",
    fx: { conf: { salome: 5 } },
    text: [
      "Salomé a laissé pendre ses jambes dans le puits, au-dessus de l'eau qui court tout en bas. Elle lance des petits cailloux et compte jusqu'au bruit.",
      "« Sept, dit-elle. Sept temps. Ça fait profond. » Elle lance un autre caillou. « À Sorne, il faudra quelqu'un qui plonge, tu sais. Les rues sont sous la mer, même à la Grande Basse. Il y aura des portes sous l'eau. »",
      "« {{oreille#iiir_o_salome|On verra sur place|Si tu as pu regarder dans ce machin noir, je peux bien regarder au fond de l'eau}} », dit-elle.",
    ],
    choices: [{ back: "IIIR_galeries" }] },

  IIIR_autel_gildas: { act: "III", title: "Gildas à l'autel", place: "mont",
    text: [
      "Frère Gildas est à genoux devant l'autel noir, une tablette de cire sur les genoux. Il écrit. Il ne lève pas la tête quand tu entres. Une chandelle brûle à côté de lui, droite, sans fumée.",
      "Tu restes à l'entrée de la chapelle. Il finit sa ligne, chauffe la spatule sur le réchaud, lisse la cire, et écrit une prière par-dessus. Puis il repose la tablette au bout de la rangée.",
      "« Je reste, dit-il. C'est ce que tu as dit. Je n'ai rien à te demander. » Il te regarde enfin. « Mais si tu as quelque chose à me demander, à moi, sur le Registre, sur Sorne, je répondrai. Ici. »",
    ],
    choices: [
      { label: "« Venez. On a besoin de quelqu'un qui lise la main d'Aymeric. »", fx: { unflag: "gildas:chasse", join: "gildas", flag: "iiir:gildas_rappele", conf: { gildas: 10 } }, to: "IIIR_autel_rappel" },
      { label: "Le laisser à sa cire", back: "IIIR_autel" },
    ] },

  IIIR_autel_rappel: { act: "III", title: "Le rappel", place: "mont",
    text: [
      "Frère Gildas se lève. Il souffle la chandelle entre deux doigts. Il prend son bâton contre l'autel.",
      "« Pour le Registre, dit-il. Pour Sorne. Pas pour moi. Tu ne m'as pas pardonné, et tu as raison de ne pas le faire en passant, dans une chapelle, parce qu'il te manque un homme qui lit le latin. »",
      "Il passe devant toi dans la galerie, et il marche en tête, la lampe à la main, comme au premier jour.",
    ],
    choices: [{ back: "IIIR_galeries" }] },

  IIIR_autel_corps: { act: "III", title: "Le corps à l'autel", place: "mont",
    text: [
      { with: "any", text: "Vous le portez à plusieurs, par les bras et les jambes, à travers la salle des Reflets, sur le pont de l'aveu, où la dalle reste verrouillée, puis dans la galerie basse. Il est plus lourd qu'il n'en avait l'air." },
      { without: "any", text: "Tu le portes seul{e}, sur ton dos, comme un sac de sel. Il est plus lourd qu'il n'en avait l'air. Le pont de l'aveu reste verrouillé sous vous deux." },
      "Tu l'allonges sur l'autel noir, à côté des tablettes de cire. Tu lui croises les mains sur la poitrine. Tu rabats sa capuche sur son front, sur la cicatrice ouverte.",
      "La dernière tablette, la sienne, est toujours au bout de la rangée. *Seigneur, garde ma langue.* Tu la poses sous ses mains croisées. Les moines la trouveront là.",
      "Tu {{miroir#iiir_m_corps|fais ce qu'il fallait faire|fais ce qu'il fallait faire pour un mort, avec soin, parce que c'est la seule chose de cette journée que tu puisses faire correctement}}.",
    ],
    choices: [{ back: "IIIR_galeries" }] },

  IIIR_chemin_gardiens: { act: "III", title: "Le chemin des Gardiens", place: "mont",
    text: [
      "Derrière l'autel, une fente dans la paroi, qu'on ne voit qu'en la cherchant, s'ouvre sur un boyau qui monte raide. Des chaînes de fer sont scellées dans le roc pour les mains. Il faut grimper plus que marcher, souvent à genoux.",
      { with: "gildas", text: "Frère Gildas passe devant, sans lampe, et t'indique chaque prise du bout des doigts. « Les Gardiens le prennent seuls, dit-il. On dit qu'il est fait pour qu'un homme puisse le monter avec un mort sur le dos. Je ne sais pas si c'est vrai. »" },
      { without: "gildas", text: "La clé de Gildas ouvre une grille rouillée à mi-hauteur. Au-delà, sur la paroi, quelqu'un a gravé à la pointe, il y a très longtemps, des dizaines de petits traits par cinq, comme un prisonnier compte les jours." },
      "Le boyau débouche, au bout d'une heure, derrière l'ossuaire de la crypte, par une dalle qui pivote. Tu sors entre deux crânes posés sur une étagère, et tu te retrouves à dix pas de la porte basse.",
    ],
    choices: [{ label: "Traverser la crypte vers l'escalier", big: true, to: "IIIR_sortie" }] },
});

// ==================================================================== the way back up
Object.assign(P, {
  IIIR_remontee: { act: "III", title: "Les trois cents marches", place: "mont", takes: 1,
    text: [
      "Vous traversez de nouveau le carrefour des Muets, sous les sept moines de pierre, et vous attaquez l'escalier. Les mains gravées défilent dans l'autre sens : le poing d'abord, puis la main qui se déplie un doigt après l'autre, jusqu'à la main ouverte.",
      "Tu montes {{miroir#iiir_m_monte|d'un bon pas, le feuillet contre ta hanche|d'un pas qui pèse moins qu'à la descente, et ce poids en moins te fait honte, puis la honte s'use vers la deux-centième marche}}.",
      { after: "iiir:porte_forcee", text: "En haut, la porte à la bouche est toujours de travers sur son pivot cassé. Tu passes de biais, par l'ouverture d'une épaule." },
      { before: "iiir:porte_forcee", text: "En haut, la porte à la bouche s'ouvre de l'intérieur sans rien demander : un levier de bronze, à hauteur de main, que tu n'avais pas vu en descendant. Les Taiseurs ne gardaient que l'entrée." },
      { with: "tibere", text: "Tibère monte en comptant les marches à voix haute, cette fois, et en se trompant exprès pour faire rire Lison, ou quelqu'un." },
      { with: "gildas", text: "Frère Gildas monte en dernier, comme à la descente. Tu entends son bâton sur chaque marche, toujours au même rythme." },
      { if: { has: "iiir:carrier_sauve" }, text: "Sulpice Varon monte avec vous, appuyé sur une épaule, puis sur une autre. Il remercie à chaque palier, et vous finissez par lui demander d'arrêter." },
    ],
    choices: [{ label: "Pousser la porte basse de la crypte", big: true, to: "IIIR_sortie" }] },

  IIIR_sortie: { act: "III", title: "La crypte, au retour", place: "mont",
    text: [
      "Frère Isidore est assis sur la dernière marche de la crypte, une chandelle à ses pieds, comme s'il n'avait pas bougé depuis que tu es descendu{e}. Peut-être n'a-t-il pas bougé. Il se lève en te voyant, regarde l'étui de plomb à ta ceinture, puis ton visage, et il fait le signe de la porte : deux mains jointes qui s'écartent.",
      "Tu remontes l'escalier de cave, tu traverses la salle des voix, tu sors dans le cloître. Le jour te fait mal aux yeux. Il fait doux. Les moines passent avec leurs hottes, leurs livres, leurs sandales. Rien n'a changé, à part toi, et le poids du miroir contre ta poitrine.",
      { if: { has: "gildas:pardonne" }, with: "gildas", text: "Frère Gildas sort derrière toi et reste un moment sous les arcades, à regarder le ciel par le carré du cloître. Le portier lui fait le signe des trois doigts. Gildas répond par un autre signe, que tu ne connais pas." },
      { if: { has: "gildas:livre" }, with: "gildas", text: "Frère Gildas sort derrière toi. Il marche à ta droite, comme un homme qu'on escorte, et il a l'air de trouver ça juste." },
      { if: { has: "iiir:gildas_sursis" }, with: "gildas", text: "Frère Gildas sort derrière toi, à trois pas, la capuche relevée. Tu sens sa présence dans ton dos comme une question qu'on n'a pas encore posée." },
      { if: { has: "gildas:chasse" }, without: "gildas", text: "Frère Gildas est resté sous la montagne. Le portier regarde l'escalier derrière toi, longtemps, puis il referme la porte basse à clé." },
      { if: { has: "gildas:mort" }, text: "Tu fais comprendre au portier, avec tes mains, ce qu'il y a sur l'autel en bas. Isidore pâlit. Il fait le signe des morts, et il descend, seul, avec sa chandelle." },
      { if: { has: "iiir:carrier_sauve" }, text: "Le frère infirmier emporte Sulpice Varon sur une civière vers l'infirmerie. Le carrier te salue de la main jusqu'au coin du cloître." },
      { if: { has: "iiir:breche" }, text: "Tu dis au portier, par signes et par mots, que la Banque a creusé sous l'abbaye par la carrière, et que la brèche est refermée. Il hoche la tête lentement, et il va prévenir l'abbé en courant, ce qui ne se fait pas ici." },
    ],
    choices: [{ label: "Sortir dans la cour de l'abbaye", big: true, back: "IIIM_porte" }] },

  // @@SUITE@@
});

module.exports = {
  passages: P,
  extras: {
    people: {
      iiir_varon: { name: "Sulpice Varon", qui: "Carrier d'Orle, emmuré dans une vieille galerie.", aspect: { allure: "carrier couché derrière l'éboulis", signe: "pioche de carrier", voix: "toute proche, qui tousse" }, f: false, face: { age: "adulte", coif: "court", beard: "barbe" }, desc: "Carrier d'Orle, payé par le pèlerin de la Banque pour creuser un chemin vers la salle des Reflets par en dessous. Il s'est emmuré lui-même." },
    },
    items: {
      iiir_tr_clochette: { name: "La clochette sans battant", kind: "tresor", price: 40, unique: true, desc: "Une petite clochette d'argent noirci, sans battant, roulée trois siècles par l'eau d'une citerne. Sur le rebord : *pour qu'elle appelle*." },
      iiir_tr_peigne: { name: "Le peigne de la reine", kind: "tresor", price: 90, unique: true, desc: "Un peigne d'ivoire couleur de vieux miel, à dents d'argent, marqué au dos d'un Y couronné. Une coiffeuse de la reine l'a descendu sous le Mont à soixante-dix ans." },
      iiir_tr_langue: { name: "La langue d'or", kind: "tresor", price: 250, unique: true, desc: "Une langue d'or de bijoutier, de la taille d'une vraie. Dessous : *Pour qu'elle parle devant Dieu.* L'offrande des Taiseurs à la reine qu'on avait fait taire." },
      iiir_tr_sceau: { name: "Le sceau du secrétaire", kind: "tresor", price: 60, unique: true, bonus: { savoir: 5 }, desc: "Un anneau d'or caché sous une gaine de fer rouillé, au chaton gravé d'un croissant : le sceau d'un des secrétaires d'Aymeric Vasse. Au doigt, il rappelle les vieilles écritures." },
      iiir_tr_coupe: { name: "La coupe de sel", kind: "tresor", price: 70, unique: true, desc: "Une coupe d'argent pleine d'un seul cristal de sel, clair comme de l'eau, pris dans le métal. On la tenait sous le bassin de la salle des Reflets." },
      iiir_faux_reliquaire: { name: "Le reliquaire doré", kind: "tresor", price: 2, unique: true, desc: "Un gros reliquaire de plomb doré, serti de verre rouge. Dedans roule une langue de cire. Une offrande de la Maison Marrel, il y a trente ans." },
      iiir_lettre_banque: { name: "La lettre d'Odeline à la Banque", kind: "document", form: "lettre", hand: "tremblee", unique: true,
        text: "*Monsieur Brunel. Je maintiens mon prix : deux mille ducats, la moitié avant, la moitié quand vous aurez vu de vos yeux ce qu'il y a sous l'horloge. Je ne dirai pas un mot de plus avant la première moitié. Vous m'avez demandé ce matin si j'avais peur. {{loupe#iiir_l_lettre|Je suis trop vieille pour avoir peur. Je vous attends demain à la même heure.|Si c'est toi qui lis ceci, avec la loupe, c'est que j'ai eu raison d'avoir peur. Prends l'argent s'il vient. Ne prends rien d'autre de ces gens. Et pardonne-moi la porte.}} O. Carrus.*",
        desc: "La lettre qu'Odeline écrivait à dix heures du soir, la nuit des Lanternes. Frère Gildas l'a gardée sur lui depuis. Une goutte brune tache un coin." },
      iiir_cle_gardiens: { name: "La clé du chemin des Gardiens", kind: "outil", price: 0, unique: true, desc: "Une clé de fer à long panneton. Elle ouvre la grille du chemin des Gardiens, qui monte de l'autel des Taiseurs à la crypte de l'abbaye." },
      iiir_pioche: { name: "La pioche de Varon", kind: "outil", price: 4, unique: true, bonus: { nature: 5 }, desc: "Une pioche de carrier au manche poli par vingt ans de mains. Son propriétaire a juré de ne plus jamais creuser pour personne." },
    },
    enemies: {
      iiir_spadassin: { name: "Gant gris de la carrière", look: "humain", pv: 26, att: 54, def: 22, dmg: 6, desc: "Un homme de main de la Banque, payé à la semaine pour attendre au bout d'une galerie." },
      iiir_gildas: { name: "Frère Gildas", look: "humain", pv: 40, att: 20, def: 6, dmg: 2, desc: "Il tient son bâton à deux mains, en travers, et il pare. Il ne frappe pas." },
    },
    quests: [
      { id: "IIIR_q_carrier", act: "III", kind: "annexe", title: "Le carrier emmuré", start: "IIIR_eboulis", echo: "iiir:carrier" },
      { id: "IIIR_q_noms", act: "III", kind: "annexe", title: "Le nom gratté", start: "IIIR_noms", echo: "iiir:noms" },
    ],
    clues: {
      iiir_c_autel: { rev: "O", short: "L'autel des Taiseurs : la voix de Gildas", text: "Sous le diapason, l'autel des Taiseurs rend la voix de Frère Gildas : « Je l'ai repoussée, et elle est tombée. Odeline Vasse, au pied de son escalier, la nuit des Lanternes. »" },
      iiir_c_tablette: { rev: "O", short: "La tablette de cire signée G.", text: "Sous la prière d'une tablette de confession, à l'autel des Taiseurs : « J'ai fait tomber Odeline Vasse dans son escalier. Je ne voulais pas sa mort. Je voulais assez son silence pour monter chez elle. G. »" },
      iiir_c_pelerin: { rev: "B", short: "Le pèlerin paie le carrier", text: "Sous le Mont, la voix du pèlerin Lambert : « Creuse, Varon. Trois ducats la toise, et dix de plus si tu trouves la salle. »" },
    },
    veils: {
      iiir_e_autel: { fx: { clue: "iiir_c_autel" } },
      iiir_l_tablette: { fx: { clue: "iiir_c_tablette" } },
      iiir_e_eboulis: { fx: { clue: "iiir_c_pelerin", ep: ["perso", 300] } },
      iiir_e_pierre: { fx: { ep: ["perso", 400] } },
      iiir_e_seuil: { fx: { ep: ["perso", 200] } },
      iiir_p_mains: { fx: { ep: ["perso", 150] } },
    },
    epilogue: [
      { if: { all: [{ has: "iiir:carrier" }, { has: "iiir:carrier_sauve" }] }, text: "**Sulpice Varon.** Il ne creusa plus jamais. Il tint la cantine des carriers d'Orle, et il refusa toujours de servir un homme en gants gris." },
    ],
    // @@EXTRAS@@
  },
};
