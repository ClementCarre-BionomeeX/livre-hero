// Les Fils de la Marée · act II, Sévan's day of masks. His report of act I decides where he wakes:
// - naturelle / poison: free, at the hospice; a day to follow the poison (S2_enquete: Nella in her cell, Léonce's shop,
//   the palace kitchen, the Grand Priest, the captain of the Guet), three things before the night, then the night.
// - temple: kept « en retraite » in a cell of the Temple by the Grand Priest (S2T_*), who wants the iron key.
// - public: in a cell of the Tour du Guet (S2G_*), beside Nella if she is there, a guest of the captain.
// What the others did first is read here: Léonce taken by the Guet (leonce=garde) or gone on Oriane's barge
// (leonce=enfui), the salt pot already seized (pot=garde), Nella taken back or sheltered.
var R = function (v) { return { is: { rapport: v } }; };
var PRISON = { has: "nella=prison" }, LIBRE = { has: "nella=libre" };
var FIN = { label: "Fin de la journée de Sévan", fx: { flag: "ch2:sevan" }, back: "C2" };
module.exports = {
  S2: { branch: [
    { if: R("temple"), fx: { until: 7 }, to: "S2T_cellule" },
    { if: R("public"), fx: { until: 7 }, to: "S2G_cellule" },
    { if: R("naturelle"), fx: { until: 7 }, to: "S2N_reveil" },
    { fx: { until: 7 }, to: "S2P_reveil" },
  ] },

  // ================================================================ free: the report said « natural »
  S2N_reveil: { act: "II", title: "Une bourse", place: "temple", ambiance: "temple",
    fx: { meet: "leonce" },
    text: [
      "À sept heures, on frappe à ta porte de l'hospice. Sur le seuil, un homme en masque de héron porte des lunettes par-dessus le carton. Léonce Brisard ôte le masque blanc de son visage avec un petit rire d'excuse : « Ridicule, n'est-ce pas ? La loi est la loi. »",
      "Il pose sur ta table une bourse de cuir qui tombe avec le bruit mat de l'or bien compté ; l'or seul a ce bruit-là, discret et satisfait comme un notaire après dîner. « De la part du Grand Argentier. Pour l'hospice. Deux cents ducats. Il a été touché par la sobriété de votre rapport. Il dit que la ville vous doit beaucoup. »",
      { if: { has: "traces=laissees" }, text: "Il ajoute, en remettant son masque : « Il garde précieusement votre petite fiole. Il dit que c'est un souvenir de la Doyenne. »" },
      "Puis, sur le pas de la porte : « La servante est toujours au Guet, vous savez. Pour un vol, maintenant. On dit qu'elle a pris une clef à la Doyenne. Une fille de rien, dans une cellule, avec une accusation qui ne pend personne. » Il hoche la tête tristement. « Les prisons sont malsaines en cette saison. On y attrape de ces fièvres. »",
    ],
    choices: [
      { label: "Garder la bourse : l'hospice en a besoin, et Morvan doit te croire acheté", fx: { gold: 200, set: { bourse: "gardee" }, regard: { morvan: "cordial" } }, to: "S2N_apres" },
      { label: "Lui rendre la bourse", fx: { set: { bourse: "rendue" }, regard: { morvan: "mefiant" } }, to: "S2N_apres" },
    ] },
  S2N_apres: { act: "II", title: "Les fièvres", place: "temple",
    text: [
      "La porte se referme. Tu restes devant ta table, la bourse d'un côté, ta tasse froide de l'autre. *On y attrape de ces fièvres.* La phrase demeure dans la chambre après celui qui l'a dite ; elle s'y installe, elle y prend ses aises, et tu l'entends encore quand le pas de Léonce a quitté l'escalier.",
      "Hier, tu as écrit que la Doyenne était morte de son mal, pour que Nella échappe à la corde des empoisonneurs. Tu as cru la sauver. Tu as seulement rendu sa mort plus discrète. Une servante qui meurt de fièvre en prison, le Conseil l'enterre sans enquête.",
      { if: LIBRE, text: "Nella est libre, quelque part dans Bas-Port, avec le Guet derrière elle. Léonce l'ignore, ou fait semblant. Tu cherches laquelle des deux hypothèses t'effraie le plus, et tu les trouves à égalité." },
      "Tu prends ton masque de médecin, le long bec de cuir bourré d'herbes qu'on porte depuis la grande peste : girofle, romarin, une pincée de camphre. Pour une fois, il te va bien.",
    ],
    choices: [{ label: "Te mêler aux masques", to: "S2_enquete" }] },

  // ================================================================ free: the report said « poison »
  S2P_reveil: { act: "II", title: "L'empoisonneuse", place: "temple", ambiance: "temple",
    text: [
      "Tu as dormi deux heures. Sous ta fenêtre de l'hospice, les premiers masques passent en barque en chantant une chanson toute neuve, composée cette nuit. *La servante au sel, la servante au sel, qui sale la soupe de la Doyenne…*",
      "À Escalombre, les chansons courent plus vite que les juges, et elles ont l'avantage de rimer.",
      { if: PRISON, text: "Un novice t'apporte le crieur de la ville, recopié sur une feuille : *Nella Ferrant, servante, accusée d'avoir empoisonné la Doyenne, sera jugée par le Conseil la troisième nuit, avant les lanternes. L'empoisonneur est pendu à la digue, au reflux.*" },
      { if: LIBRE, text: "Un novice t'apporte le crieur de la ville, recopié sur une feuille : *Nella Ferrant, servante en fuite, accusée d'avoir empoisonné la Doyenne. Récompense de cinq cents ducats à qui la livrera au Guet, offerte par la Maison des Sels.*" },
      "Tu as écrit la vérité, toute la vérité, sauf une ligne. Et c'est avec ta vérité qu'on va pendre une fille de dix-neuf ans.",
      "Pour la sauver sans te pendre toi-même, il te reste un moyen : trouver qui a mis le blanc dans le sel, et le prouver.",
    ],
    choices: [{ label: "Prendre ton masque de médecin et sortir", to: "S2_enquete" }] },

  // ================================================================ the free day: three things before the night
  S2_enquete: { act: "II", title: "Le bec de cuir", place: "temple", hub: true, noLead: true, backName: "la ville masquée",
    text: [
      { first: true, text: "Dans ton masque à long bec, tu es un médecin de peste parmi d'autres. Les gens s'écartent par habitude, d'un bon pas et sans regarder sous le bec. Tu as le temps de quatre choses avant le soir, si tu marches vite et si personne ne t'arrête." },
      { again: true, if: { clock: "s2", max: 1 }, text: "La matinée avance. Le soleil chauffe le carton des masques, les gens ont soif, et les tavernes débordent sur l'eau ; Escalombre, le jour où elle cache son visage, montre volontiers son gosier." },
      { again: true, if: { clock: "s2", min: 2, max: 2 }, text: "Midi sonne au Temple. Il te reste le temps de deux choses avant le soir." },
      { again: true, if: { clock: "s2", min: 3 }, text: "L'après-midi tire vers le soir. Il te reste le temps d'une chose." },
    ],
    choices: [
      { label: "La Tour du Guet : visiter Nella, comme prêtre du Temple", if: PRISON, why: "Nella n'est pas à la Tour.", to: "S2_tour", fx: { clock: { s2: 1 } }, hide: { seen: "S2_tour" } },
      { label: "Les arcades de la Maison des Sels : l'apothicairerie de Léonce Brisard", to: "S2_leonce", fx: { clock: { s2: 1 } }, hide: { seen: "S2_leonce" } },
      { label: "Les cuisines du palais : d'où venait le sel de la Doyenne", to: "S2_cuisine", fx: { clock: { s2: 1 } }, hide: { seen: "S2_cuisine" } },
      { label: "Le Temple : le père Anselme t'a fait demander", to: "S2_anselme", fx: { clock: { s2: 1 } }, hide: { seen: "S2_anselme" } },
      { label: "La capitaine Dorne : lui dire ce que ton rapport tait", to: "S2_ysabeau", fx: { clock: { s2: 1 } }, hide: { seen: "S2_ysabeau" }, big: true },
    ] },
  S2_suite: { branch: [
    { if: { clock: "s2", min: 4 }, to: "S2_soir" },
    { to: "S2_enquete" },
  ] },

  // ---------------------------------------------------------------- Nella's cell
  S2_tour: { act: "II", title: "La cellule de Nella", place: "tour", ambiance: "chateau",
    fx: { meet: "nella" },
    text: [
      "Un prêtre du Temple a le droit d'entrer chez un prisonnier pour l'entendre. C'est la loi, et Ysabeau Dorne applique la loi : on t'ouvre la porte du deuxième étage, puis on la referme derrière toi, et le verrou rend ce son net, définitif, que les serruriers de prison semblent rechercher comme les luthiers une note.",
      "Nella est assise sur le lit. Elle porte sous les yeux les cernes de deux nuits sans sommeil.",
      { if: { has: "sevan:averti" }, text: "Elle te reconnaît quand tu ôtes ton masque. « Vous m'aviez dit de partir. Je suis partie. On m'a reprise. » Sa voix est sans reproche. C'est pire." },
      { if: R("poison"), text: "« On va me pendre, maître. C'est ce que dit le gardien. Au reflux, demain soir. Il le dit gentiment, comme on parle du temps. »" },
      { if: R("naturelle"), text: "« On m'accuse d'avoir volé une clef. Je ne l'ai pas volée. Elle me l'a donnée. » Elle désigne l'écuelle de soupe posée par terre, intacte. « Je ne mange plus rien de ce qu'on m'apporte. Le gardien dit que ça vient de dehors, d'un bienfaiteur. »" },
      "Puis elle te regarde, droit. « Elle m'a donné une clef. Pourquoi à moi ? Je suis une servante. Pourquoi moi ? »",
    ],
    choices: [
      { label: "Lui dire qui était sa mère. Le secret de confession tombe ici", to: "S2_tour_mere", big: true, fx: { set: { nella_sait: "sevan" }, flag: "sevan:sceau_rompu" } },
      { label: "Garder le secret, comme tu l'as juré : « Elle avait ses raisons. Tu les sauras. »", to: "S2_tour_garde" },
    ] },
  S2_tour_mere: { act: "II", title: "Le sceau", place: "tour",
    fx: { regard: { nella: "allie" }, clue: "gouge_fils" },
    text: [
      "Tu t'assieds à côté d'elle sur le lit. Tu as gardé des centaines de confessions, et toutes sont restées scellées. Tu romps celle-ci à voix basse, pour que le gardien derrière la porte entende un murmure de prière.",
      "« Il y a dix-neuf ans, la Doyenne a eu un enfant. Le père était un batelier de Bas-Port, Tomas Gouge, le fils de la Mère Gouge. Il s'est noyé dans la passe de Sainte-Agathe avant la naissance. Elle a confié l'enfant à une famille de passeurs, les Ferrant, qui venaient de perdre une petite fille. Elle a payé leur barque. Elle t'a fait entrer au palais à quinze ans pour te voir tous les jours. »",
      "Nella reste immobile. Puis ses mains se mettent à trembler, d'elles-mêmes, et elle les regarde trembler comme les mains d'une autre.",
      "« Elle me lisait des vers, dit-elle. Elle me reprenait sur ma façon de tenir la tasse. » Elle rit, un rire cassé. « Elle aurait pu me le dire. Une seule fois. »",
      "Le gardien frappe à la porte. C'est l'heure.",
    ],
    choices: [{ label: "Partir", to: "S2_suite" }] },
  S2_tour_garde: { act: "II", title: "Ses raisons", place: "tour",
    text: [
      "« Elle avait ses raisons. Tu les sauras, je te le promets. Avant les lanternes. »",
      "Nella te regarde un long moment. « Vous savez. Vous savez quelque chose et vous ne le dites pas. » Elle détourne la tête vers la fenêtre. « Comme elle. »",
      "Tu lui donnes ta bénédiction. Elle la reçoit les yeux ouverts.",
      { if: R("naturelle"), text: "En sortant, tu emportes sous ton manteau l'écuelle de soupe intacte. Ce soir, dans ton laboratoire, tu sauras ce qu'elle contient." },
    ],
    choices: [{ label: "Partir", to: "S2_suite", fx: { flag: "sevan:ecuelle" } }] },

  // ---------------------------------------------------------------- Léonce's shop
  S2_leonce: { branch: [
    { if: { has: "leonce=enfui" }, to: "S2_leonce_vide" },
    { if: { has: "leonce=garde" }, to: "S2_leonce_guet" },
    { to: "S2_leonce_boutique" },
  ] },
  S2_leonce_vide: { act: "II", title: "Une boutique fermée", place: "sels", ambiance: "ville",
    text: [
      "Sous les arcades de la Maison des Sels, l'apothicairerie de Léonce Brisard a ses volets fermés, avec un papier cloué dessus : *Fermé pour la fête.* Les autres boutiques de l'arcade sont ouvertes, et vendent des masques, des rubans et du vin chaud.",
      "La voisine, une marchande de rubans en masque de chatte, te dit que l'apothicaire est parti ce matin avant le jour, avec deux malles, sur une barque à rideaux bleus. Une barque du palais : elle a reconnu les armes des Valcor sur la poupe.",
      "Tu forces la petite porte de derrière d'un coup d'épaule, comme à vingt ans, et ton épaule te rappelle aussitôt que tu en as cinquante et un. Dedans, des tiroirs vidés, des bocaux renversés, tout le désordre d'un lieu qu'on a quitté en regardant derrière soi. Dans la cheminée, des papiers brûlés, encore tièdes au toucher. Une seule chose oubliée sous l'établi : un pot de grès à moitié plein de poudre blanche, avec l'étiquette de la Maison des Sels.",
    ],
    choices: [{ label: "Emporter le pot, et partir", fx: { flag: "preuve:pot_leonce", clock: { preuves: 1 } }, to: "S2_suite" }] },
  S2_leonce_guet: { act: "II", title: "Les scellés", place: "sels", ambiance: "ville",
    text: [
      "Les volets de l'apothicairerie sont fermés, et la porte porte les scellés du Guet : une bande de toile noire, la tour d'or, la signature d'Ysabeau Dorne.",
      "Une marchande de rubans en masque de chatte te raconte la scène : la capitaine en personne, ce matin, avec six gardes, et une dame en noir qui portait un loup de velours. On a emmené l'apothicaire. Il pleurait. Il disait qu'il avait seulement fait ce qu'on lui demandait.",
      "Léonce Brisard est à la Tour du Guet. La partie de ton travail qui consistait à le trouver est faite, par quelqu'un d'autre et sans toi.",
    ],
    choices: [{ label: "Repartir", to: "S2_suite" }] },
  S2_leonce_boutique: { act: "II", title: "L'apothicairerie", place: "sels", ambiance: "ville",
    text: [
      "L'apothicairerie de Léonce Brisard est une longue boutique fraîche sous les arcades de la Maison des Sels. Tu en fais l'inventaire d'un coup d'œil : trois rangées de bocaux étiquetés à la main, deux balances, dont une de précision sous globe, et une odeur de camphre. Tout y est net, rangé, aligné ; c'est la boutique d'un homme qui dort bien, ou qui s'y applique. Léonce est derrière son comptoir, sans masque, en train de peser quelque chose avec des gestes de dentellière.",
      "Il lève les yeux. Il reconnaît ton bec de cuir, ou ta façon de te tenir. « Maître Aldric. » Il pose sa balance. « Vous venez acheter, ou vous venez voir ? »",
      "Il a peur. Ses doigts le disent : ils cherchent quelque chose à tenir et passent de la balance à l'encrier, puis de l'encrier au bord du comptoir.",
    ],
    choices: [
      { label: "Poser sur le comptoir la salière d'argent", if: { item: "saliere" }, why: "Il faudrait l'avoir.", to: "S2_leonce_preuve" },
      { label: "Poser sur le comptoir le flacon bleu à l'empreinte encrée", if: { item: "fiole_blanc" }, why: "Il faudrait l'avoir.", to: "S2_leonce_preuve" },
      { label: "Lui parler de médecin à apothicaire : ce qu'on risque, ce qu'on peut encore sauver", test: { dom: "social", diff: -15, label: "Social" },
        win: { to: "S2_leonce_preuve" }, lose: { to: "S2_leonce_ferme" } },
      { label: "Le prendre au collet et l'emmener au Guet", test: { dom: "combat", diff: 0, label: "Force" },
        win: { fx: { set: { leonce: "garde" }, clock: { preuves: 1 } }, to: "S2_leonce_traine" }, lose: { to: "S2_leonce_ferme" } },
    ] },
  S2_leonce_preuve: { act: "II", title: "Ce qu'on peut encore sauver", place: "sels",
    text: [
      "Léonce regarde ce que tu as posé sur le comptoir. Il ôte ses lunettes, les essuie et les remet, deux fois de suite.",
      "« Il m'a dit que c'était pour la garder tranquille. Que la Doyenne s'agitait, qu'elle parlait de donner le sel aux bateliers. Une poudre pour la calmer. » Il secoue la tête. « Ce n'est pas vrai. Je le savais. Je sais ce qu'est le blanc d'Orcanne. Il arrive par les navires de l'amiral, dans des caisses de citrons. »",
      "« Il a dit que si je parlais, je serais pendu le premier, parce que c'est ma main qui a pesé la poudre. C'est vrai, ça aussi. »",
      "Il te regarde. Il a vingt-huit ans. Il tremble.",
    ],
    choices: [
      { label: "« Écris-le. Tout. Signe. Je le porterai au Conseil, et je dirai que tu l'as écrit de toi-même. »", fx: { set: { leonce: "avoue" }, item: "aveu_leonce", clock: { preuves: 2 }, clue: "voiles" }, to: "S2_leonce_ecrit", big: true },
      { label: "« Va-t'en. Quitte la ville ce soir. Je ne t'ai pas vu. »", fx: { set: { leonce: "enfui" } }, to: "S2_leonce_part" },
    ] },
  S2_leonce_ecrit: { act: "II", title: "Une confession", place: "sels",
    text: [
      "Il écrit pendant une demi-heure, debout derrière son comptoir, d'une écriture d'apothicaire, petite et droite. Les dates. Les doses. Les pots de sel du lundi. La nuit de jeudi, la porte de l'eau, le pot de trop. Le flacon bleu glissé sous la paillasse d'une servante, sur l'ordre du Grand Argentier. Les caisses de citrons de l'amiral Drenn. Il remplit deux pages et ne rature qu'une fois.",
      "Il signe. Il sable. Il te tend la feuille.",
      "« Maintenant, il va me tuer, dit-il simplement. Ou vous allez me pendre. Je voudrais savoir lequel. »",
      "Tu restes sans réponse. Tu lui dis de fermer sa boutique et d'aller dormir à l'hospice du Temple, dans une chambre de malade. Il dit oui. Tu ignores s'il ira.",
    ],
    choices: [{ label: "Partir avec la feuille contre ta poitrine", to: "S2_suite" }] },
  S2_leonce_part: { act: "II", title: "La porte", place: "sels",
    text: [
      "Il te regarde comme si tu lui avais ouvert une cage. Les questions attendront. Avant même que tu aies franchi la porte, il commence à vider ses tiroirs dans un sac.",
      "Dehors, sous les arcades, tu fais le compte de ce que tu viens de faire. Tu as laissé partir la seule main qui peut accuser Morvan. Tu as peut-être sauvé un homme. Ce n'est pas l'homme qu'il fallait sauver.",
    ],
    choices: [{ label: "Repartir", to: "S2_suite" }] },
  S2_leonce_traine: { act: "II", title: "Le canal des Sels", place: "sels",
    text: [
      "Tu as cinquante et un ans, mais tu as porté des malades toute ta vie. Léonce Brisard pèse moins qu'un pêcheur noyé, et il se débat moins. Tu le traînes par le col jusqu'au quai, sous les yeux des masques qui rient à la farce de fête, et tu le jettes dans une barque du Guet qui passait.",
      "« Cet homme a empoisonné la Doyenne. Menez-le à la capitaine. »",
      "Les gardes hésitent. Puis le plus vieux reconnaît ta robe de médecin sous le manteau, hausse les épaules et pousse au large. Léonce pleure, assis au fond de la barque, les lunettes de travers.",
    ],
    choices: [{ label: "Repartir", to: "S2_suite" }] },
  S2_leonce_ferme: { act: "II", title: "Le comptoir", place: "sels",
    fx: { set: { leonce: "alerte" } },
    text: [
      "Léonce se reprend. Ses doigts trouvent la balance, et la balance les calme. « Je ne vois pas de quoi vous parlez, maître. Je vends des remèdes. » Il appelle son commis, un grand garçon en masque d'ours, qui vient se planter entre vous.",
      "Tu sors. Derrière toi, tu entends qu'on ferme les volets.",
      "Ce soir, Morvan saura que le médecin de la Doyenne est venu poser des questions à son apothicaire.",
    ],
    choices: [{ label: "Repartir", to: "S2_suite" }] },

  // ---------------------------------------------------------------- the palace kitchen
  S2_cuisine: { act: "II", title: "Les cuisines du palais", place: "palais", ambiance: "chateau",
    text: [
      "Les cuisines du palais sont en sous-sol, au ras de l'eau, sous des voûtes basses que la fumée a vernies de noir ; une porte y ouvre directement sur le canal : la porte de l'eau, celle des livreurs. Sur la marche, l'eau a laissé quatre lignes vertes, une par marée d'équinoxe. Le cuisinier, maître Aubin, porte un masque de bœuf et pleure dedans. Il a servi la Doyenne trente ans.",
      { if: { has: "pot=garde" }, text: "« Le sel ? La capitaine est venue ce matin avec la secrétaire. Elles ont tout pris. Le pot du lundi, le pot d'avant, les registres de livraison. » Il se mouche. « Elles avaient des têtes de gens qui ont trouvé quelque chose. »" },
      { if: { not: { has: "pot=garde" } }, text: "« Le sel de madame ? Il arrivait le lundi, de la Maison des Sels, dans un pot scellé. Personne n'y touchait, à part la petite Nella pour remplir la salière. » Il ouvre un placard. Un pot de grès, encore aux trois quarts plein, avec le cachet de cire de la Maison des Sels brisé. « Celui de cette semaine. Il est arrivé jeudi, pas lundi. Je me suis dit qu'ils avaient changé de jour. »" },
    ],
    choices: [
      { label: "Prendre le pot de jeudi", if: { not: { has: "pot=garde" } }, fx: { set: { pot: "sevan" }, flag: "preuve:pot", clock: { preuves: 1 } }, to: "S2_cuisine_pot" },
      { label: "Repartir", to: "S2_suite" },
    ] },
  S2_cuisine_pot: { act: "II", title: "Le pot de jeudi", place: "palais",
    text: [
      "Tu goûtes le sel du bout de la langue, une seule fois, et tu craches. Il est fin, il glisse, et derrière le goût du sel traîne un goût de métal que tu connais.",
      "Tu emportes le pot sous ton manteau. Maître Aubin te regarde faire en reniflant. « Elle salait tout, dit-il. Je lui disais : madame, ce n'est pas bon pour le cœur. »",
    ],
    choices: [{ label: "Repartir", to: "S2_suite" }] },

  // ---------------------------------------------------------------- the Grand Priest
  S2_anselme: { act: "II", title: "La sacristie", place: "temple", ambiance: "temple",
    fx: { meet: "anselme" },
    text: [
      "Le père Anselme t'attend dans la sacristie, à visage nu : un Grand Prêtre se passe de masque, la Marée le voit tel qu'il est. Il a fait servir du vin d'orange et te sert lui-même, d'une main qui mesure exactement deux doigts ; la charité du Temple a toujours su compter.",
      "« Sévan. Il y aura un Doyen après-demain. Si c'est Morvan, il nous mangera, et sans dire le bénédicité. Si c'est la nièce, elle nous ignorera, comme sa tante, qui a ignoré le Temple toute sa vie avec une constance digne d'une meilleure cause. Le Temple a six sièges, et une clef. Avec la clef, on peut ouvrir le coffre, ou le garder fermé. Ça vaut beaucoup de voix, un coffre. »",
      "Il tend la main, paume ouverte. « La clef de fer appartient au Temple. Rends-la au Temple. »",
      { if: { has: "anselme:menti" }, text: "Il ajoute, très doucement : « Hier, tu m'as dit que tu n'en savais rien. Je te pardonne. Rends-la. »" },
    ],
    choices: [
      { label: "Lui donner la clef de fer", if: { item: "clef_fer" }, why: "Tu ne l'as plus.", fx: { drop: "clef_fer", set: { clef2: "anselme" }, regard: { anselme: "cordial" } }, to: "S2_anselme_donne" },
      { label: "« Elle me l'a confiée, à moi. Je la porterai au Conseil. »", fx: { regard: { anselme: "hostile" }, flag: "anselme:refus" }, to: "S2_anselme_refus" },
    ] },
  S2_anselme_donne: { act: "II", title: "Le vin d'orange", place: "temple",
    text: [
      "Anselme referme la main sur la clef. Il ferme les yeux, comme pour une prière. Puis il la glisse sous sa robe, contre sa poitrine.",
      "« Le Temple s'en souviendra. » Il te ressert du vin. « Maintenant, va. Et quand le Conseil t'interrogera, souviens-toi que le Temple te protège. Seulement si tu restes un fils du Temple. »",
    ],
    choices: [{ label: "Repartir", to: "S2_suite" }] },
  S2_anselme_refus: { act: "II", title: "Le vin d'orange", place: "temple",
    text: [
      "Anselme repose sa main sur la table. Il reste calme. La colère, chez lui, a toujours été superflue.",
      "« Elle te l'a confiée. Elle t'a confié beaucoup de choses, je crois. » Il te regarde. « Les médecins qui veillent les mourantes la nuit, Sévan, on finit par se demander ce qu'ils leur donnent. Le Temple peut le demander, ou ne pas le demander. »",
      "Il se lève. L'entretien est fini.",
    ],
    choices: [{ label: "Repartir", to: "S2_suite" }] },

  // ---------------------------------------------------------------- the captain of the Guet
  S2_ysabeau: { act: "II", title: "La capitaine", place: "tour", ambiance: "chateau",
    fx: { meet: "ysabeau" },
    text: [
      "Ysabeau Dorne te reçoit dans son bureau en haut de la Tour, une pièce nue : une table, une carte de la lagune, une fenêtre sur la digue des Pendus. Elle est à visage découvert. La loi des masques, dit-elle, s'arrête à la porte du Guet, parce qu'il faut bien que quelqu'un, dans cette ville, ait un visage.",
      "« Maître Aldric. Vous avez quelque chose à me dire. Ça se voit depuis la porte. »",
      { if: R("naturelle"), text: "Ton rapport a dit : mort de son mal. Tu vas devoir avouer qu'il ment." },
      { if: R("poison"), text: "Ton rapport a dit : empoisonnée. Il a tu une ligne." },
    ],
    choices: [
      { label: "Lui dire le poison lent, et qui l'a fourni, sans parler du pavot", if: R("naturelle"), to: "S2_ysabeau_poison" },
      { label: "Lui dire tout : le poison lent, et le pavot de la dernière nuit", to: "S2_ysabeau_tout", big: true },
      { label: "Te raviser, et lui parler d'autre chose", to: "S2_ysabeau_rien" },
    ] },
  S2_ysabeau_poison: { act: "II", title: "Le rapport corrigé", place: "tour",
    fx: { set: { rapport: "poison", corrige: "oui" }, clock: { preuves: 1 }, regard: { ysabeau: "mefiant" } },
    text: [
      "Tu lui dis que ton rapport était faux. Que la Doyenne a été empoisonnée lentement, depuis l'automne. Que tu as menti pour épargner la corde à une servante.",
      "Ysabeau Dorne t'écoute jusqu'au bout. Puis elle dit : « Vous avez menti au Conseil pour sauver une servante, et maintenant vous me dites la vérité pour la sauver encore. Vous comprenez que la vérité, telle que vous me la dites, la désigne ? Elle portait le sel. »",
      "« Alors trouvez qui l'a mis dans le sel. »",
      "« C'est mon métier. » Elle écrit. « Je corrigerai votre rapport devant le Conseil, demain soir. Ne mentez plus, maître. Je n'aime pas les gens qui mentent pour de bonnes raisons. Ils recommencent. »",
    ],
    choices: [{ label: "Repartir", to: "S2_suite" }] },
  S2_ysabeau_tout: { act: "II", title: "Tout", place: "tour",
    fx: { set: { aveu: "ysabeau" }, clock: { preuves: 1 }, regard: { ysabeau: "admiratif" } },
    text: [
      "Tu lui dis tout. Le poison lent. Le sel. Les ongles. Et la nuit, le pavot.",
      { if: { has: "pavot=donne" }, text: "« Elle me l'a demandé. Je l'ai préparé. J'ai compté jusqu'à quatre-vingts. »" },
      { if: { has: "pavot=pris" }, text: "« Elle me l'a demandé. J'ai refusé. Je me suis endormi. Elle l'a pris dans ma sacoche. C'était ma fiole, et c'est moi qui ai dormi. »" },
      "Ysabeau Dorne pose sa plume. Elle regarde par la fenêtre la digue des Pendus et ses poteaux noirs, longuement, comme d'autres consultent un code.",
      "« La loi d'Escalombre ne connaît pas votre cas, maître. Elle connaît l'empoisonneur, et elle connaît le médecin. Pas le médecin qui fait ce que vous avez fait. » Elle se tourne vers toi. « Je ne vous arrête pas. Vous direz ça au Conseil, demain soir, vous-même. Si vous ne le dites pas, c'est moi qui le dirai. »",
    ],
    choices: [{ label: "Repartir", to: "S2_suite" }] },
  S2_ysabeau_rien: { act: "II", title: "Rien", place: "tour",
    text: [
      "Tu lui parles de la santé des prisonniers, des fièvres de la saison, de l'eau des citernes. Elle t'écoute poliment, avec la patience d'une femme qui attend la fin d'une averse.",
      "Quand tu te lèves pour partir, elle dit : « Maître Aldric. La prochaine fois que vous venez me dire quelque chose, dites-le. »",
    ],
    choices: [{ label: "Repartir", to: "S2_suite" }] },

  // ---------------------------------------------------------------- the night
  S2_soir: { act: "II", title: "La nuit à l'hospice", place: "temple", ambiance: "temple",
    fx: { until: 21 },
    text: [
      "Le soleil s'est couché sur les Passes. Les masques tombent dans toute la ville en même temps, et pendant une minute, sur les canaux, monte un grand soupir de soulagement, comme d'un seul visage.",
      "Tu rentres à l'hospice. Ta chambre est telle que tu l'as laissée : le lit fait au carré, les livres en pile, la bourse de Morvan à la même place, patiente comme tout ce qui vient de lui.",
      { if: { has: "sevan:ecuelle" }, text: "Tu verses la soupe de Nella dans un bol de verre et tu y plonges une lame d'argent. La lame noircit en trois minutes, du bout vers le manche. Quelqu'un, au Guet ou au-dehors, voulait qu'une servante meure de fièvre." },
      { if: { any: [{ has: "leonce=avoue" }, { has: "leonce=alerte" }, { has: "leonce=garde" }] }, text: "Vers dix heures, tu entends des rames sous ta fenêtre : un bruit étouffé, prudent, de rames qu'on a garnies de chiffons. Trois hommes descendent d'une barque sans lanterne, au ras de l'eau, au pied du mur de l'hospice. Tu reconnais les manteaux de la Maison des Sels." },
    ],
    choices: [
      { label: "Les attendre derrière ta porte, avec un tisonnier", if: { any: [{ has: "leonce=avoue" }, { has: "leonce=alerte" }, { has: "leonce=garde" }] }, to: "S2_nuit_combat" },
      { label: "Fuir par les toits de l'hospice, avec ce que tu as de précieux", if: { any: [{ has: "leonce=avoue" }, { has: "leonce=alerte" }, { has: "leonce=garde" }] }, to: "S2_nuit_fuite" },
      { label: "Dormir, si tu peux", if: { not: { any: [{ has: "leonce=avoue" }, { has: "leonce=alerte" }, { has: "leonce=garde" }] } }, to: "S2_nuit_calme" },
    ] },
  S2_nuit_combat: { act: "II", title: "Le tisonnier", place: "temple",
    combat: { title: "Les hommes de la Maison des Sels", enemies: [{ id: "sbire", n: 2 }], terrain: "bati",
      win: { fx: { flag: "sevan:sbires_battus", ep: 300 }, to: "S2_nuit_apres" }, lose: { fx: { set: { sevan_blesse: "sbires" } }, to: "S2_nuit_vole" },
      flee: { label: "Te jeter par la fenêtre dans le canal", dom: "nature", diff: 0, to: "S2_nuit_fuite" } },
    text: [
      "La porte cède au deuxième coup d'épaule. Le premier homme entre, un gourdin à la main, et tu lui abats le tisonnier sur le poignet. Le deuxième suit de près. Le troisième est resté dans la barque.",
    ] },
  S2_nuit_apres: { act: "II", title: "Après", place: "temple",
    text: [
      "Les deux hommes repartent comme ils sont venus, l'un en serrant son bras contre lui. La barque s'éloigne sans lanterne.",
      "Tu t'assieds sur ton lit. Tes mains tremblent. Tu les regardes trembler et tu penses à celles de la Doyenne, cette nuit-là, si légères.",
      "Morvan sait. Demain soir, il saura aussi où tu es.",
    ],
    choices: [FIN] },
  S2_nuit_vole: { act: "II", title: "Les poches", place: "temple",
    fx: { drop: ["aveu_leonce", "saliere", "fiole_blanc", "preuve_ongles"], set: { preuves_volees: "oui" }, clock: { preuves: -2 } },
    text: [
      "Un coup de gourdin te couche sur le carrelage. Tu sens des mains fouiller ton manteau, ta sacoche, le dessous de ton matelas. Elles savent ce qu'elles cherchent.",
      "Quand tu te relèves, la barque est partie. Tes poches sont vides de tout ce qui pouvait accuser quelqu'un.",
      { if: { item: "clef_fer" }, text: "La clef de fer leur a échappé. Tu l'avais cousue dans l'ourlet de ta robe, comme une vieille femme coud son or." },
    ],
    choices: [FIN] },
  S2_nuit_fuite: { act: "II", title: "Les toits", place: "temple",
    fx: { set: { sevan_cache: "gouge" } },
    text: [
      "Tu enjambes la fenêtre de la lingerie, tu longes la gouttière, tu descends par l'escalier du clocher et tu sors par la porte des morts, celle par où l'hospice rend ses défunts à la lagune. La porte des morts n'a pas de gardien : les morts, en général, sortent sans se faire prier.",
      "Derrière toi, tu entends ta porte céder.",
      "Tu marches longtemps dans les ruelles hautes. Puis tu descends vers Bas-Port, vers la taverne de l'Ancre Basse : dans cette ville, c'est le seul endroit où l'on cache les gens que le palais cherche.",
      "La Mère Gouge te regarde entrer, trempé, ta sacoche serrée contre la poitrine. « Un médecin du Temple, dit-elle. Ça faisait longtemps. Monte. »",
    ],
    choices: [FIN] },
  S2_nuit_calme: { act: "II", title: "Le sommeil", place: "temple",
    text: [
      "Le sommeil te fuit. Tu restes allongé, les yeux ouverts, à compter les cloches ; entre deux cloches la maison craque, l'eau travaille contre le mur, et chaque bruit prend à son tour la forme d'un pas. À trois heures, tu te lèves et tu écris, pour personne, tout ce que tu sais. Puis tu plies la feuille et tu la ranges avec la clef.",
      "Demain soir, la Nuit des Lanternes.",
    ],
    choices: [FIN] },

  // ================================================================ in the Temple's « retreat »
  S2T_cellule: { act: "II", title: "En retraite", place: "temple", ambiance: "temple",
    text: [
      "On t'a donné une cellule de novice au-dessus du cloître : un lit, une cruche, et une fenêtre grillagée de quatre barreaux qui donne sur la coupole verte. Un frère convers garde la porte. Il s'appelle Gildas, il a vingt ans, et il t'apporte ton pain en s'excusant.",
      "Tu es en retraite. C'est le mot du Grand Prêtre. Une retraite, au Temple de la Marée, est une prison dont la porte reste ouverte et que garde la seule obéissance ; c'est la moins coûteuse des geôles, et le Temple, bon ménager, s'en est toujours contenté.",
      "À neuf heures, le père Anselme entre et s'assied sur ton lit.",
    ],
    choices: [{ label: "L'écouter", to: "S2T_anselme" }] },
  S2T_anselme: { act: "II", title: "Le marché", place: "temple",
    fx: { meet: "anselme" },
    text: [
      "« Le Temple écrira ton rapport, comme je te l'ai promis. Il dira que la Doyenne a été empoisonnée par la Maison des Sels. Ça, c'est vrai, n'est-ce pas ? » Il sourit. « Il ne dira rien du pavot. Un médecin du Temple qui endort une Doyenne, c'est le Temple qui l'endort. »",
      "« Demain soir, devant le Conseil, je lirai ce rapport. Morvan tombera. La nièce n'a que huit voix. Le Conseil se tournera vers le Temple, parce que le Temple aura dit la vérité. » Il pose la main sur ton genou. « Six sièges, plus ceux qui fuiront Morvan. Il ne m'en faudra pas tant. »",
      "« Il me faut seulement la clef de fer, pour que personne n'ouvre ce coffre avant que j'aie été élu. Les testaments de Doyenne réservent des surprises. Et il me faut ton silence. »",
    ],
    choices: [
      { label: "Lui donner la clef, et ton silence", if: { item: "clef_fer" }, why: "Tu ne l'as plus.", fx: { drop: "clef_fer", set: { clef2: "anselme", sevan_temple: "soumis" }, regard: { anselme: "allie" } }, to: "S2T_soumis", big: true },
      { label: "Refuser", fx: { set: { sevan_temple: "refus" }, regard: { anselme: "hostile" } }, to: "S2T_refus", big: true },
    ] },
  S2T_soumis: { act: "II", title: "L'obéissance", place: "temple",
    text: [
      "Tu défais l'ourlet de ta robe, là où tu l'avais cousue. Anselme prend la clef comme on reçoit une hostie.",
      "« Tu as bien fait, mon fils. » Il se lève. « Repose-toi. Demain soir, tu viendras avec moi au Conseil, et tu diras ce que je te dirai de dire. »",
      "Il sort. Gildas referme la porte, sans la verrouiller. L'obéissance suffit, désormais.",
      "Tu passes la journée à regarder la coupole verte par la grille. Les masques défilent sur le canal en contrebas, et leurs rires montent jusqu'à toi, amortis, comme d'un monde où tu aurais vécu autrefois. Tu penses à une servante en cellule, et à une vieille femme qui t'a dit : *protège-la*.",
    ],
    choices: [
      { label: "Écrire une lettre à Nella, et la confier à Gildas", to: "S2T_lettre" },
      { label: "Prier, et attendre le soir", to: "S2T_soir" },
    ] },
  S2T_lettre: { act: "II", title: "Une lettre", place: "temple",
    fx: { flag: "sevan:lettre_nella" },
    text: [
      "Tu écris sur une page arrachée à ton bréviaire. Le secret reste hors de la page : tu as donné ton silence, et tu tiens au moins à cela. Tu écris : *Ne perds pas courage. Quelqu'un sait qui tu es, et pourquoi elle t'a choisie. Ce quelqu'un ne te laissera pas.* Tu signes d'une seule lettre.",
      "Gildas prend la lettre, la regarde, te regarde. « Pour la servante du Guet ? » Il la glisse dans sa manche. « Ma sœur lave le linge de la Tour. »",
    ],
    choices: [{ label: "Attendre le soir", to: "S2T_soir" }] },
  S2T_refus: { act: "II", title: "Le refus", place: "temple",
    text: [
      "« Non, mon père. »",
      "Anselme te regarde longtemps. Puis il se lève et va à la porte. « Gildas. Personne n'entre, personne ne sort. Il prie. » Il se retourne. « Tu as jusqu'à demain soir pour changer d'avis, Sévan. Après, le Temple dira au Conseil ce que tu as fait cette nuit-là. Avec tes mots. Je les ai gardés. »",
      "La porte se referme. Cette fois, tu entends la clef tourner deux fois, lentement, avec l'application d'une main qui veut être entendue.",
    ],
    choices: [
      { label: "Parler à Gildas à travers la porte", test: { dom: "social", diff: 0, label: "Social" },
        win: { to: "S2T_gildas" }, lose: { to: "S2T_soir" } },
      { label: "La fenêtre : la grille est vieille, le mortier s'effrite", test: { dom: "nature", diff: -10, label: "Effort" },
        win: { to: "S2T_evasion" }, lose: { to: "S2T_soir" } },
    ] },
  S2T_gildas: { act: "II", title: "Gildas", place: "temple",
    fx: { set: { sevan_temple: "sorti" }, flag: "gildas:allie" },
    text: [
      "Tu parles à Gildas tout l'après-midi, à travers la porte. Tu lui parles de l'hospice, des malades, des devoirs d'un médecin et de leurs limites. Tu lui parles d'une servante de dix-neuf ans qu'on va pendre pour un poison versé par d'autres.",
      "Vers six heures, la clef tourne. Gildas est là, pâle, un masque de convers à la main. « La porte des morts, maître. Personne ne la surveille. Je dirai que vous m'avez frappé. Frappez-moi un peu, s'il vous plaît, pour que ce soit vrai. »",
    ],
    choices: [{ label: "Sortir par la porte des morts", to: "S2T_dehors" }] },
  S2T_evasion: { act: "II", title: "La grille", place: "temple",
    fx: { set: { sevan_temple: "sorti" } },
    text: [
      "Tu grattes le mortier avec le manche de ta cuillère pendant quatre heures. Le mortier est de mauvaise chaux, mêlée de sable de lagune, et tu bénis l'économie du maçon. Tes doigts saignent. À six heures, un des barreaux bouge. À sept, tu passes la tête, puis les épaules, en t'écorchant tout le dos.",
      "Il y a deux toises jusqu'au toit du cloître. Tu les fais en tombant.",
    ],
    choices: [{ label: "Descendre vers le canal", to: "S2T_dehors" }] },
  S2T_dehors: { act: "II", title: "Dehors", place: "basport",
    fx: { set: { sevan_cache: "gouge" } },
    text: [
      "Les masques tombent au moment où tu sors du Temple. Un grand soupir passe sur les canaux. Tu marches dans les ruelles hautes, puis tu descends vers Bas-Port : dans cette ville, c'est le seul endroit où l'on cache ceux que les puissants cherchent.",
      "La Mère Gouge te regarde entrer à l'Ancre Basse, écorché de partout. « Un médecin du Temple, dit-elle. Ça faisait longtemps. Monte. »",
    ],
    choices: [FIN] },
  S2T_soir: { act: "II", title: "La coupole", place: "temple",
    text: [
      "Le soleil se couche sur la coupole verte. Les masques tombent sur les canaux. Tu es encore là, dans ta cellule de novice, et tu y seras demain.",
      { if: { has: "sevan_temple=refus" }, text: "Demain soir, Anselme t'emmènera au Conseil ou te laissera ici. Dans les deux cas, il parlera à ta place." },
      { if: { has: "sevan_temple=soumis" }, text: "Demain soir, Anselme t'emmènera au Conseil, et tu diras ce qu'il te dira de dire." },
    ],
    choices: [FIN] },

  // ================================================================ at the Tour du Guet
  S2G_cellule: { act: "II", title: "Le troisième étage", place: "tour", ambiance: "chateau",
    text: [
      "Ta cellule au troisième étage de la Tour du Guet a une fenêtre sur la lagune, un lit, une table, et même une chandelle. Ysabeau Dorne t'a fait donner ce qu'on donne aux prisonniers de qualité. Elle dit que tu es le premier homme, en quinze ans de service, à s'être livré lui-même. Elle le dit comme on note une curiosité d'histoire naturelle.",
      "Ce matin, la ville se masque. D'ici, tu vois les barques couleur de dragée descendre le Grand Canal, et tu entends les chansons. L'une d'elles parle de toi. *Le médecin au pavot, le médecin au pavot…* La rime est faible, mais l'air est entraînant.",
      { if: { has: "nella=prison" }, text: "Dans la nuit, à travers le mur, tu as entendu quelqu'un pleurer, puis se taire, puis frapper trois petits coups. Nella est dans la cellule voisine. Le mur fait deux pieds d'épaisseur, mais la cheminée est commune." },
      { if: { has: "mo_pris=j1" }, text: "En bas, dans la cour, un gamin de onze ans fait les cent pas en sifflant, entre deux gardes qui jouent aux dés." },
    ],
    choices: [{ label: "Attendre l'interrogatoire", to: "S2G_interro" }] },
  S2G_interro: { act: "II", title: "L'interrogatoire", place: "tour",
    fx: { meet: "ysabeau" },
    text: [
      "Ysabeau Dorne t'interroge pendant trois heures, avec un greffier. Elle pose chaque question deux fois, de deux manières, pour voir si la réponse change. La tienne reste la même.",
      "À la fin, elle renvoie le greffier. « Maître Aldric. Votre pavot a tué une mourante qui vous l'a demandé. Le poison lent, lui, l'aurait tuée de toute façon. Quelqu'un a mis le poison dans son sel. Ce quelqu'un n'est pas vous, et je ne crois pas que ce soit la servante. »",
      "« Qui ? »",
    ],
    choices: [
      { label: "« Léonce Brisard, l'apothicaire de la Maison des Sels. Et celui qui le paie. »", fx: { flag: "ysabeau:piste_leonce", regard: { ysabeau: "allie" } }, to: "S2G_piste" },
      { label: "« Je ne sais pas. Je sais seulement ce que j'ai vu. »", to: "S2G_piste" },
    ] },
  S2G_piste: { act: "II", title: "Ce que vous avez vu", place: "tour",
    text: [
      { if: { has: "ysabeau:piste_leonce" }, text: "Elle hoche la tête lentement. « La servante dit la même chose. L'apothicaire dans la cuisine, à onze heures. Deux témoins qui ne se sont pas parlé. » Elle se lève. « Je vais aller voir ce monsieur. »" },
      { if: { not: { has: "ysabeau:piste_leonce" } }, text: "Elle te regarde longtemps. « Vous savez, maître. Vous avez décidé de dire votre faute, et de taire celle des autres. C'est une forme d'orgueil. » Elle se lève." },
      { if: { item: "saliere" }, text: "Avant qu'elle sorte, tu lui tends la salière d'argent gardée dans ta sacoche, et tu lui dis de goûter le sel. Elle la prend entre deux doigts, comme une bête vivante." },
      { if: { item: "fiole_blanc" }, text: "Tu lui donnes aussi le flacon bleu trouvé sous la paillasse de Nella, et tu lui montres l'encre dans la cire. Elle regarde ses propres doigts, puis le flacon." },
      { if: { item: "preuve_ongles" }, text: "Tu lui donnes le papier plié, les ongles striés de blanc. « Gardez-les. Un jour, un autre médecin pourra les regarder. »" },
    ],
    choices: [{ label: "Rester seul", fx: { flag: "sevan:preuves_guet" }, to: "S2G_mur_br" }] },
  S2G_mur_br: { branch: [
    { if: { all: [{ has: "ysabeau:piste_leonce" }, { not: { is: { leonce: ["enfui", "avoue", "garde"] } } }] }, fx: { set: { leonce: "garde" } }, to: "S2G_mur" },
    { to: "S2G_mur" },
  ] },
  S2G_mur: { act: "II", title: "La cheminée", place: "tour",
    text: [
      "L'après-midi passe. Les chansons montent de la lagune. Tu t'assieds par terre, le dos contre la cheminée.",
      { if: { has: "nella=prison" }, text: "De l'autre côté du conduit, une voix de fille, très basse : « Maître Aldric ? C'est vous ? Le gardien dit que vous avez tué la Doyenne. Le gardien dit que vous l'avez dit vous-même. »" },
      { if: { not: { has: "nella=prison" } }, text: "La cellule voisine est vide. Le gardien t'apprend que la servante qu'on cherchait court toujours. Tu remercies la Marée, à moitié convaincu." },
    ],
    choices: [
      { label: "Lui dire la vérité sur la nuit, puis sur sa mère", if: { has: "nella=prison" }, to: "S2G_mur_mere", big: true, fx: { set: { nella_sait: "sevan" }, flag: "sevan:sceau_rompu" } },
      { label: "Lui dire la vérité sur la nuit, et garder l'autre secret", if: { has: "nella=prison" }, to: "S2G_mur_nuit" },
      { label: "Dormir contre la pierre chaude", if: { not: { has: "nella=prison" } }, to: "S2G_soir" },
    ] },
  S2G_mur_mere: { act: "II", title: "Par la cheminée", place: "tour",
    fx: { regard: { nella: "allie" } },
    text: [
      "Tu lui racontes la nuit : les mains d'Ermesinde, le pavot. Puis, parce qu'un conduit de cheminée autorise ce qu'un visage interdit, tu lui racontes la Saint-Martin et la confession. Tu lui racontes un batelier noyé dans la passe de Sainte-Agathe, et une Doyenne qui a fait entrer sa fille au palais à quinze ans pour la voir tous les jours.",
      "De l'autre côté, un long silence. Puis la voix de Nella revient, changée : « Elle me reprenait sur ma façon de tenir la tasse. »",
      "Elle se tait. Tu l'entends pleurer, et tu l'entends s'appliquer à pleurer en silence.",
    ],
    choices: [{ label: "Rester contre la cheminée jusqu'au soir", to: "S2G_soir" }] },
  S2G_mur_nuit: { act: "II", title: "Par la cheminée", place: "tour",
    fx: { regard: { nella: "curieux" } },
    text: [
      "Tu lui racontes la nuit : les mains d'Ermesinde, sa demande, le pavot. Tu lui avoues ton doute : avoir bien fait, ou mal.",
      "Nella se tait longtemps. Puis : « Elle avait mal depuis des mois. Je l'entendais la nuit. Elle mordait son oreiller pour qu'on ne l'entende pas. » Un temps. « Vous avez bien fait. Je crois. »",
    ],
    choices: [{ label: "Rester contre la cheminée jusqu'au soir", to: "S2G_soir" }] },
  S2G_soir: { act: "II", title: "Le soir à la Tour", place: "tour",
    fx: { until: 20 },
    text: [
      "Les masques tombent sur la lagune. Le gardien t'apporte ta soupe.",
      "Elle sent l'ail. La lame d'argent peut rester dans ta sacoche.",
    ],
    choices: [
      { label: "Renverser l'écuelle dans le seau, et appeler la capitaine", fx: { flag: "sevan:soupe_guet", clock: { preuves: 1 }, regard: { ysabeau: "allie" } }, to: "S2G_soupe" },
      { label: "Ne rien dire, et jeter la soupe par la fenêtre", to: "S2G_nuit" },
    ] },
  S2G_soupe: { act: "II", title: "La soupe", place: "tour",
    text: [
      "Ysabeau Dorne monte elle-même. Elle sent l'écuelle. Elle fait descendre le gardien et l'interroge dans l'escalier ; il jure que la soupe vient des cuisines, comme toutes les soupes. Elle fait monter le cuisinier. Le cuisinier jure qu'un homme de la Maison des Sels a apporté ce soir un panier « pour les prisonniers de qualité », avec des compliments.",
      "La capitaine remonte. Pour la première fois, sa voix tremble un peu. « Dans ma Tour. Ils ont fait ça dans ma Tour. »",
    ],
    choices: [FIN] },
  S2G_nuit: { act: "II", title: "La nuit", place: "tour",
    text: [
      "La soupe tombe dans la lagune, trois étages plus bas, sans un bruit.",
      "Morvan veut ton silence. Il le voulait déjà ce matin. Maintenant, tu le sais.",
    ],
    choices: [FIN] },
};
