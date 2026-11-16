// Le Douzième Coup · chapter 10, the one who stays, first half (act III, 19 June 601, two days before the sixtieth
// Grand Midi). Into the taken lower town of Méridane. Three ways in: the vault of the canal, walking on held water
// (`r:entre_voute`, `r:voute_tombe`) ; the West Gate and its post of the Sand Guard (`r:entre_porte`, with
// `r:barriere_ordre` they let the hero through and follow: `r:suivi_ville`). Hub `K10r_basse`: the quay and the
// barrel that has been falling for sixty years, À la Patiente (closed « pour lessive » with `monde:perrine_avertie` ;
// otherwise dame Tiennette at her counter, `r:tiennette_eveillee`), the mansion of Hautgué with its dais stretched
// for the 22nd (`r:vu_hotel_vide`, item `memoire_graveur`, `r:preuve_601`), rue des Aiguilliers and old Gobin
// (`r:gobin_eveille`, `r:sait_treize`), Saint-Gnomon-le-Vieux, its brass line and the mouth of the Droit
// (`r:sait_droit`, `r:vu_droit`), the bridge of the Three Candles (`r:vu_brindille`, `r:brindille_veilleuse`),
// Jehan on the threshold (`r:jehan_entre` | `r:jehan_porte`). Noon at the dial of the port (M10).
var P = {};
var UNE_PINCEE = { stock: "sable", min: 3 };
var JEHAN = { present: "jehan" };
var ROUGET = { present: "rouget" };

Object.assign(P, {
  K10r_route: { act: "III", title: "Le mur doré", place: "foire", ambiance: "champs", takes: "morning",
    text: [
      "Tu as rebouché sous la dalle avant le jour, à la clarté blanche des dix mille. Les Veilleurs du chaume t'ont donné du pain et n'ont rien demandé. Tu as devant toi une lieue de dos, puis un mur.",
      "Il est d'or pâle, ce mur, à toute heure : la ville a gardé sur ses pierres le soleil de son dernier midi, et le rend. On le voit de loin par-dessus les têtes, avec ses tours rondes, ses toits, et, plantée derrière, plus haute que tout, grise de la base à la lanterne, la Tour.",
      "Trois chemins y mènent. La Passerelle, à dix pieds en l'air, où les manteaux blancs ne laissent monter que la Régente et les pèlerins à billet. La grande allée, dessous, entre quatre mille épaules, jusqu'à la porte d'Occident, qui a dedans un poste de la Garde. Et le halage, à main droite, le long du canal, qui s'en va vers le rempart sans passer devant personne.",
      { with: "jehan", text: "« La porte, vingt hommes, dit Jehan. Le canal, une voûte et pas un. La Garde laisse l'eau tranquille : on lui a appris que l'eau prise porte, et elle ne l'a jamais cru tout à fait. » Il serre son ceinturon d'un cran. « Je te mène jusqu'au mur. Après, on verra ce que valent mes jambes. »" },
      { with: "rouget", text: "Rouget a mis du pain dans sa chemise, pour plus tard, et le mange maintenant. « Moi je dis le canal. À la porte, ils fouillent. J'ai des choses sur moi qui ont changé de propriétaire hier, elles sont encore timides. »" },
      { after: "r:barriere_ordre", text: "À la Seconde, on t'a laissé{e} passer sur un ordre. Tu sais de qui. Un homme qui t'ouvre une barrière t'en ouvrira deux, et pour la même raison." },
    ],
    choices: [
      { label: "Le halage, et la voûte du canal", to: "K10r_halage", big: true },
      { label: "La grande allée, et la porte d'Occident", to: "K10r_poste", big: true },
    ] },

  K10r_halage: { act: "III", title: "Le septième peuplier", place: "foire", ambiance: "eau",
    text: [
      "Le chemin de halage est vide. Les gens de la Foire regardaient la Tour : personne, à midi, ne regardait un canal. Tu marches entre l'eau et une file de peupliers dont les feuilles sont tournées toutes du même côté, sur leur envers d'argent, par un vent de soixante ans.",
      { after: "K09r_girard", text: "Tu repasses devant la charrette bleue. Le garçon est debout sur son siège, le fouet en l'air, la bouche ouverte sur un cri pour sa jument. Tu ne t'arrêtes pas. Tu touches la ridelle, en passant, comme on touche un bénitier." },
      "Le canal est plein jusqu'au bord, d'une eau verte, lisse, où sont pris trois gabares, un train de bois, un cygne, et le reflet entier du rempart. Le cygne a une patte hors de l'eau. Une goutte lui pend au bout de la palme.",
      "Au pied du mur, le canal entre sous une voûte basse, large d'une gabare. Il y a une herse, là-haut, dans sa rainure, avec ses dents. On la baissait à la brune. On ne l'a pas baissée le 21 juin 541, puisqu'il n'y a pas eu de brune.",
      "Le halage s'arrête à la voûte : les chevaux passaient par la porte, et les mariniers poussaient à la perche. Pour entrer, il n'y a que l'eau.",
      "Tu sais ce qu'elle fait. Tous les glaneurs le savent, on le leur apprend avant leurs prières : elle porte qui marche d'un bon pas, et elle se réveille sous qui s'attarde.",
    ],
    choices: [
      { label: "Marcher sur le canal, d'un pas égal, jusque sous la voûte",
        test: { dom: "nature", diff: 10, label: "Soixante pas sans une hésitation", help: [{ if: { voie: "coureur" }, v: 15 }, { if: { voie: "leste" }, v: 10 }, { if: { has: "r:pas_de_quatre" }, v: 10 }] },
        win: { fx: { flag: "r:entre_voute", ep: ["perso", 500] }, to: "K10r_voute" },
        lose: { fx: { flag: ["r:entre_voute", "r:voute_tombe"], pv: -2 }, to: "K10r_voute" } },
      { label: "Laisser l'eau, et prendre par la porte", to: "K10r_poste" },
    ] },

  K10r_voute: { act: "III", title: "Sous la herse", place: "basse", ambiance: "eau",
    text: [
      { outcome: "win", text: "Tu marches. Il faut le faire comme on récite : sans penser aux mots. L'eau cède d'un doigt sous chaque pas et se raffermit derrière, et tu laisses sur le canal une file d'empreintes qui se referment une à une, comme des yeux." },
      { outcome: "win", text: "La voûte te prend. Il y fait noir et frais. Au-dessus de ta tête passent les dents de la herse, rouillées d'une rouille de 541, puis vingt pieds de rempart. Une gabare est engagée là, de biais, son marinier arc-bouté sur sa perche ; tu passes le long de son bordage, une main sur le goudron, sans ralentir." },
      { outcome: "lose", text: "Tu marches. Tu en fais quarante, d'un pas de procession. Sous la voûte, il y a une gabare engagée de biais, son marinier arc-bouté sur sa perche, et il te regarde : il regardait là où tu viens d'arriver. Tu marques un temps. C'est un temps de trop." },
      { outcome: "lose", text: "Le canal s'ouvre sous toi comme une trappe. Tu as de l'eau jusqu'aux aisselles, froide, vivante, qui pue le tan ; elle clapote dans un rond d'une toise, et tout autour elle reste de verre. Tu te hisses au bordage de la gabare, à la force des coudes, en t'écorchant. Le marinier n'a pas cessé de regarder l'endroit où tu n'es plus." },
      { outcome: "lose", with: "rouget", text: "Rouget a passé, lui, en sifflant, les mains dans les poches. Il te tend deux doigts du haut du plat-bord. « Faut pas réfléchir, sur l'eau. C'est comme chez la Courtepaille : celui qui réfléchit, il coule. »" },
      "Au bout de la voûte, le jour revient, doré. Le canal débouche entre deux quais de pierre, sous un lavoir à toit d'ardoise. Deux rangs de femmes y sont à genoux, le battoir levé, la bouche ouverte sur une chanson. Un drap est pris dans l'air entre quatre bras, gonflé comme une voile, avec toutes ses gouttes autour.",
      "Tu montes par l'escalier des laveuses. Tu es dans Méridane.",
    ],
    choices: [{ label: "Passer entre les battoirs", to: "K10r_dedans", big: true }] },

  K10r_poste: { act: "III", title: "La porte d'Occident", backName: "la porte d'Occident", place: "basse", ambiance: "ville",
    text: [
      "La grande allée finit sous une voûte à deux tours. Les vantaux sont ouverts : ils l'étaient à midi. Dans l'ouverture, pris en plein passage, il y a une charrette de foin, un âne, un sergent de 541 la main tendue vers un billet, et une file de gens endimanchés qui attendent leur tour depuis soixante ans avec la patience des images.",
      "Derrière eux, on a bâti. Une baraque de planches noires, adossée à la tour de gauche, avec une cheminée, un râtelier de piques et un sablier d'or peint sur la porte. La Garde du Sable tient l'entrée de la ville du côté du dedans : qui veut passer doit d'abord se faufiler entre les dormants de la voûte, à la file, de profil, et sortir un par un devant le guichet.",
      "Ils sont six de garde, avec du sable double à la ceinture. Un bas-officier à moustache grise mange une soupe, debout, sans quitter la voûte des yeux.",
      { with: "jehan", text: "Jehan s'est arrêté derrière la charrette de foin. « Hurepel, dit-il tout bas. C'est le sergent Hurepel. Il m'a appris à tenir une pique. » Il regarde ses galons arrachés. « Il sait compter les déserteurs. On lui en donne la liste tous les mois, et il l'apprend. »" },
    ],
    choices: [
      { label: "Te présenter au guichet : on a des ordres pour toi", hide: { not: { has: "r:barriere_ordre" } }, fx: { flag: ["r:entre_porte", "r:suivi_ville"] }, to: "K10r_poste_fin" },
      { label: "Te couler le long de la charrette, pendant qu'il souffle sur sa soupe",
        test: { dom: "discretion", diff: 15, label: "Passer entre deux cuillerées", help: [{ if: { voie: "leste" }, v: 15 }, { if: { present: "rouget" }, v: 10 }] },
        win: { fx: { flag: "r:entre_porte", ep: ["perso", 500] }, to: "K10r_poste_fin" },
        lose: { to: "K10r_poste_pris" } },
      { label: "Passer la casaque noire, et saluer comme à l'exercice", hide: { any: [{ not: { item: "casaque_garde" } }, JEHAN] },
        test: { dom: "social", diff: 10, label: "Avoir l'air d'une corvée", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { voie: "tetu" }, v: 5 }] },
        win: { fx: { flag: "r:entre_porte" }, to: "K10r_poste_fin" },
        lose: { to: "K10r_poste_pris" } },
      { label: "Laisser la porte, et aller voir du côté du canal", hide: { has: "r:entre_voute" }, to: "K10r_halage" },
    ] },

  K10r_poste_pris: { act: "III", title: "Le sergent Hurepel", place: "basse", ambiance: "ville",
    text: [
      "« Halte. » Il n'a pas crié. Il a posé son écuelle sur le rebord du guichet, et les cinq autres ont pris leurs piques sans qu'il le demande.",
      "Il te regarde des pieds à la tête. Il regarde ton cou, le cordon, le sablier dessous. « Glaneur. Sans billet, sans bande, par la grande porte, à huit heures du matin, deux jours avant le Serment. Ou tu es très bête, ou l'on t'a dit que tu pouvais. »",
      { with: "jehan", text: "Puis il voit, derrière toi, la casaque aux galons arrachés. Sa moustache ne bouge pas. « Jehan. » Un silence. « Tu es sur ma liste depuis Arvoise. J'ai dit au lieutenant que tu étais mort : c'était plus court à écrire. » Il reprend son écuelle. « Je ne t'ai pas vu. Je n'ai pas vu non plus avec qui tu marchais. J'ai vu une charrette de foin, elle est là depuis soixante ans, je la connais. Passez. »" },
      { if: { not: JEHAN }, text: "Il tend la main. Dans une ville où le sable coule double, la Garde a pris l'habitude d'en vivre." },
    ],
    choices: [
      { label: "Passer, sans dire merci : il aime mieux cela", hide: { not: JEHAN }, fx: { flag: ["r:entre_porte", "r:hurepel_ferme_yeux"], conf: { jehan: 5 } }, to: "K10r_poste_fin" },
      { label: "Verser dans sa paume ce qu'il faut de sable", hide: JEHAN, if: UNE_PINCEE, why: "Il te faudrait trois pincées, et il les compte.", fx: { flag: "r:entre_porte", stock: { sable: -3 } }, to: "K10r_poste_fin" },
      { label: "Renverser sa soupe, et courir sous la voûte", hide: JEHAN,
        fight: { title: "Le poste de la porte d'Occident", enemies: [{ id: "garde_sable", n: 2 }], terrain: "ville",
          win: { fx: { flag: ["r:entre_porte", "r:poste_force"], ep: ["perso", 600] }, to: "K10r_poste_fin" },
          lose: { fx: { flag: "r:entre_voute", pv: -3, stock: { sable: -2 } }, to: "K10r_poste_jete" } } },
    ] },

  K10r_poste_jete: { act: "III", title: "Par où passent les chats", place: "foire", ambiance: "eau",
    text: [
      "On te reconduit à coups de hampe, entre les dormants de la voûte, jusqu'à la charrette de foin. On t'a pris deux pincées, pour la peine, et rendu le reste, parce que le sergent Hurepel a des principes : il confisque, il ne vole pas.",
      "« Par la porte, on passe avec un papier, dit-il. Les chats passent ailleurs. Je ne garde pas ailleurs. »",
      "C'est presque une adresse. Tu contournes la tour, tu suis le fossé, et tu trouves le canal, qui entre sous le rempart par une voûte où personne n'a jamais baissé la herse. L'eau prise porte qui marche. Tu marches, cette fois, en personne qui n'a plus rien à perdre, et c'est la bonne manière.",
      "Un lavoir, deux rangs de femmes à genoux, un drap pris en l'air avec ses gouttes. Tu es dans Méridane.",
    ],
    choices: [{ label: "Monter l'escalier des laveuses", to: "K10r_dedans", big: true }] },

  K10r_poste_fin: { act: "III", title: "Du côté du dedans", place: "basse", ambiance: "ville",
    text: [
      { after: "r:suivi_ville", text: "Le sergent a un registre, et dans ce registre une ligne, d'une écriture que tu connais, dont le d penche en arrière. Il la lit deux fois. « Passe. » Il ne te fouille pas. Il fait seulement un signe du menton à un garde jeune, sans pique, en souliers mous, qui pose sa soupe et qui sort derrière toi, à trente pas, en regardant les enseignes." },
      { after: "r:suivi_ville", text: "On t'ouvre. On t'ouvre depuis la Seconde, et l'on te fait suivre par un garçon qui a ordre d'être vu. Quelqu'un tient à savoir où tu vas dans cette ville, et tient à ce que tu le saches." },
      { after: "r:poste_force", text: "Tu as laissé derrière toi deux hommes assis par terre, une écuelle renversée, et un sergent qui n'a pas couru : il a tiré un carnet, et il a écrit. Demain, toute la Garde de la ville aura ta taille, ta veste et la couleur de tes cheveux." },
      { if: { not: { any: [{ has: "r:suivi_ville" }, { has: "r:poste_force" }] } }, text: "Tu es passé{e}. Derrière toi, sous la voûte, le sergent de 541 tend toujours la main vers un billet, et celui de 601 finit sa soupe." },
      "La rue descend, entre des maisons à pignons. Au premier carrefour, il y a une horloge. Elle marque midi.",
    ],
    choices: [{ label: "Descendre vers les mâts", to: "K10r_dedans", big: true }] },

  K10r_dedans: { act: "III", title: "Méridane, à midi", place: "basse", ambiance: "ville", fx: { stock: { sable: -2 } },
    text: [
      "{autre} t'a décrit un bourdonnement : quarante mille personnes entre des murs, des roues, des enseignes, de l'eau sous les rues. Tu entres dans la même ville, par la même pente, et tu entends ton pas.",
      "Ils sont tous là. Une ville prise un jour de fête a ses rues pleines : des familles en habits neufs qui montaient vers la colline, un porteur d'eau, deux soldats, une noce, un chien. Ils ont tous la tête levée du même côté, par-dessus les toits, et la bouche un peu ouverte. On a mis soixante ans à s'habituer, dehors, à l'idée de cette ville. Dedans, personne n'a encore eu le temps d'être surpris.",
      "À chaque carrefour, une horloge. Sur une fontaine, à un pignon, au-dessus d'un porche : de pierre, de fer peint, de faïence. Elles marquent toutes midi, à l'épaisseur d'un trait. Tu passes sous la première, et son aiguille fait un saut. Elle donne midi et un rien, pour toi seul{e}, dans une rue où il est midi. Tu t'éloignes. Elle garde son rien d'avance. Tu viens de dérégler Méridane, d'une horloge, pour la première fois depuis les Fondateurs.",
      "Et le coup est là. À la Foire, il tenait la plaine comme une voûte. Ici, entre les murs, il est dans les murs : il sort des pierres, des vitres, de ta propre poitrine, sitôt que tu avances. Le onzième. Il a la voix d'une chose énorme qui allait dire quelque chose.",
      "Ton sablier, sous ta chemise, a pris un autre train. Tu le sors. Le fil gris tombe deux fois plus gros que sur la route. La ville boit.",
      { with: "rouget", text: "Rouget ne siffle plus. Il marche au milieu de la rue, les coudes serrés, pour ne toucher personne. « Y en a trop, dit-il. À la Foire, c'étaient des dos. Là, ils ont des figures. »" },
      { with: "jehan", text: "Jehan est resté au coin, sous l'horloge. Il a la main sur la pierre du mur, comme pour s'y tenir." },
    ],
    choices: [{ label: "Aller jusqu'à l'eau", to: "K10r_basse", big: true }] },

  K10r_basse: { act: "III", title: "La ville basse", backName: "le quai de la ville basse", place: "basse", ambiance: "eau", hub: true,
    text: [
      { first: true, text: "La Thiorne est là, large, verte, arrêtée. Des gabares à quai sur trois rangs, chacune avec son chien sur le rouf. Des ponts bossus. Des grues à roue, et dans chaque roue un homme, pris au milieu d'un pas, le pied en l'air, comme un écureuil dans une cage qu'on aurait clouée." },
      { first: true, text: "Au milieu du quai, sur trois marches, un pilier porte un cadran à deux faces. Tu le reconnais sans l'avoir vu : *les gens l'appellent la Petite.* Au-dessus des toits, par étages, monte le Mont-Cadran ; et la Tour, vue d'en bas, de tout son long, n'a plus l'air d'un monument. Elle a l'air d'un clou qu'on a planté dans la ville pour qu'elle ne bouge plus." },
      { first: true, text: "Le pied de la Tour est gris de perle, et le gris descend sur les premiers toits, comme une neige qui aurait choisi sa maison." },
      { again: true, text: "Le quai, les gabares, la Petite sur ses trois marches. Midi à toutes les horloges, sauf à celles que tu as frôlées." },
      { after: "r:suivi_ville", text: "À trente pas, le garde en souliers mous s'est assis sur une bitte et se cure les ongles. Il se lève quand tu te lèves." },
      { with: "jehan", before: "r:jehan_entre", text: "Jehan n'a pas quitté son coin de rue. On voit d'ici sa casaque noire, contre le mur doré." },
    ],
    choices: [
      { label: "Le quai : les grues, les gabares, une marchande", to: "K10r_quai" },
      { label: "L'auberge à la cloche bleue", to: "K10r_patiente" },
      { label: "Au bout du quai, un hôtel à perron, volets ouverts", to: "K10r_hotel" },
      { label: "Une rue étroite, sous le rempart, pleine de dos courbés", to: "K10r_aiguilliers" },
      { label: "Un vieux pont, avec trois chandelles dans une niche", to: "K10r_pont3" },
      { label: "Une petite église enfoncée de six marches", to: "K10r_gnomon" },
      { label: "Jehan, resté au coin de la rue", hide: { any: [{ not: JEHAN }, { has: "r:jehan_entre" }, { has: "r:jehan_porte" }] }, to: "K10r_jehan_seuil" },
      { label: "Les trois marches de la Petite : il sera bientôt midi au soleil", hide: { seen: "M10" }, to: "K10r_midi", big: true },
      { label: "Monter vers la colline, par la rue aux fontaines", hide: { not: { seen: "M10" } }, to: "K10r_carrefour", big: true },
    ] },

  // --- The quay ---
  K10r_quai: { act: "III", title: "Trois liards la douzaine", backName: "le quai des gabares", place: "basse", ambiance: "eau",
    text: [
      { first: true, text: "Tu longes l'eau. À la troisième gabare, un mousse a lancé une amarre : elle est en l'air, déroulée, avec sa boucle ouverte au-dessus d'un pieu, et le marinier du quai lève les deux mains pour la recevoir. Elle arrivera. On voit qu'elle arrivera." },
      { first: true, text: "Une marchande de harengs occupe la borne d'amarrage, son baril entre les genoux. Elle a un hareng dans chaque main, levés comme des preuves, et elle crie. Tu passes devant sa bouche. Dans le onzième coup, tout près, à la hauteur de ton oreille, il y a un mot resté en l'air, gras, enroué : *...douzaine !* Tu recules d'un pas, tu avances : *...liards la douzaine !* On peut lui faire dire son prix autant de fois qu'on veut, en marchant." },
      { first: true, with: "rouget", text: "Rouget le lui fait dire six fois, d'avant en arrière, avec un sérieux d'organiste. « Trois liards. C'était pas cher, de leur temps. » Il regarde les harengs. Il te regarde. Il met les mains dans son dos." },
      { first: true, text: "Devant la grande grue, on a tendu une corde, entre quatre piquets, autour d'un carré de pavés vide. Un écriteau de la Régence, noirci, y pend : *Défense de passer. Péril.* Tu lèves la tête." },
      { again: true, text: "L'amarre en l'air, la marchande et ses deux harengs, le carré de corde sous la grande grue." },
    ],
    choices: [
      { label: "Regarder ce qu'il y a au-dessus du carré de corde", hide: { seen: "K10r_tonneau" }, to: "K10r_tonneau" },
      { label: "Prendre un hareng dans le baril", hide: { has: "r:hareng" }, fx: { flag: "r:hareng" }, to: "K10r_hareng" },
      { back: "K10r_basse" },
    ] },

  K10r_hareng: { act: "III", title: "Un hareng de l'an 541", place: "basse", ambiance: "eau",
    text: [
      "Tu plonges la main dans le baril. La saumure te vient aux doigts, mouillée, froide, dans le rond de ton bras ; le reste du baril garde sa surface de verre. Tu tires un hareng. Il est gras, argenté, raide de sel, et il a soixante ans.",
      "Tu le flaires. Il sent le hareng de ce matin. Tu en manges la moitié, debout, devant la femme qui le vend. Il est bon. Il a même ce goût particulier des choses qu'on n'a pas payées.",
      { with: "rouget", text: "Rouget a fini le sien avant que tu aies ôté l'arête. « On pourrait vivre, ici, dit-il, la bouche pleine. Y a de quoi manger pour quarante mille, et ils mangent pas. » Il s'essuie les doigts à sa veste. « La Courtepaille dit que ça porte malheur, de manger chez les pris. Elle dit aussi que ça porte malheur de pas manger. »" },
      "Tu regardes la marchande. Elle a une alliance de cuivre, un tablier propre, une dent de moins sur le devant. Tu poses trois liards sur le bord du baril. Ce sont des liards de la Régence, à l'effigie d'un homme qu'elle n'a jamais vu. Ils resteront là. Elle les trouvera en baissant les yeux, un jour, si quelqu'un fait qu'elle les baisse.",
    ],
    choices: [{ back: "K10r_quai" }] },

  K10r_tonneau: { act: "III", title: "Ce qui tombe depuis soixante ans", place: "basse", ambiance: "eau",
    text: [
      "À trente pieds au-dessus du carré, il y a une barrique. Elle a quitté son élingue : on voit le chanvre rompu, ses brins écartés comme une main, à une toise plus haut. Elle est en l'air, de biais, cerclée de fer, grosse comme un veau. Dans la roue de la grue, l'homme a tourné la tête. Sur le quai, un débardeur a levé les bras, et il a eu le temps d'ouvrir la bouche.",
      "Elle tombe depuis le onzième coup. Elle en est au tiers du chemin.",
      "Tu comprends la corde et l'écriteau. Ce qui est pris reste où il est, tant que personne n'approche. Mais les montres repartent dans la poche de qui marche, et la saumure mouille la main qu'on y met. Le premier glaneur qui est passé là-dessous, en 542, a fait un pas dans le carré, le nez par terre, cherchant du sable. La barrique a repris sa chute, d'un pied, le temps qu'il traverse. Il y a soixante ans de glaneurs dans le tiers qu'elle a descendu.",
      { with: "rouget", text: "« Si on court ? dit Rouget. Si on court très vite, elle descend moins. » Il mesure de l'œil. Il a déjà un pied sur la corde." },
      "Au milieu du carré, sur le pavé, quelque chose brille : une fiole, tombée d'une ceinture, pleine aux trois quarts, grise. Celui qui l'a perdue n'est pas revenu la chercher. Personne, depuis, n'a trouvé qu'elle valait une barrique.",
    ],
    choices: [
      { label: "Traverser le carré en courant, et rafler la fiole", hide: { has: "r:fiole_grue" },
        test: { dom: "nature", diff: 15, label: "Six pas sous une barrique", help: [{ if: { voie: "coureur" }, v: 20 }, { if: { voie: "leste" }, v: 10 }] },
        win: { fx: { flag: "r:fiole_grue", stock: { sable: 4 }, ep: ["perso", 500] }, to: "K10r_tonneau_fin" },
        lose: { fx: { flag: "r:fiole_grue", stock: { sable: 4 }, pv: -3 }, to: "K10r_tonneau_fin" } },
      { label: "Envoyer la fronde de Rouget : une pierre, et la fiole roule jusqu'à la corde", hide: { any: [{ has: "r:fiole_grue" }, { not: ROUGET }] }, fx: { flag: ["r:fiole_grue", "r:fiole_fronde"], stock: { sable: 3 }, conf: { rouget: 10 } }, to: "K10r_tonneau_fin" },
      { label: "Laisser la fiole où elle est : elle a déjà coûté assez", hide: { has: "r:fiole_grue" }, back: "K10r_quai" },
      { back: "K10r_quai" },
    ] },

  K10r_tonneau_fin: { act: "III", title: "Un pied de moins", place: "basse", ambiance: "eau",
    text: [
      { outcome: "win", text: "Six pas. Tu ne lèves pas la tête : on ne regarde pas ce qu'on veut devancer. Tu sens seulement, sur ta nuque, un déplacement d'air, lent, large, comme une porte de grange qui tourne. Ta main trouve la fiole. Tu es de l'autre côté de la corde avant d'avoir respiré." },
      { outcome: "win", text: "Tu te retournes. La barrique est plus basse, d'un bon pied. Le débardeur a toujours les bras en l'air." },
      { outcome: "lose", text: "Tu cours. Au quatrième pas, ton pied tourne sur un pavé gras de 541, et tu t'étales, de tout ton long, la main sur la fiole. Tu ne lèves pas la tête. Tu entends, pour la première fois depuis la porte, un bruit qui ne vient pas de toi : un sifflement de bois dans l'air, grave, qui grossit. Tu roules. Tu passes sous la corde sur le dos." },
      { outcome: "lose", text: "La barrique s'arrête à huit pieds du pavé, de biais, avec ses cercles. Tu as les deux genoux en sang, et tu as dépensé, à toi seul{e}, autant de chute que dix glaneurs prudents." },
      { after: "r:fiole_fronde", text: "Rouget choisit son caillou, le pèse, fait tourner. La pierre entre dans le carré, et tu la vois faire une chose que tu n'avais jamais vue : elle ralentit. Elle est partie d'une fronde de 601, elle arrive dans un air de 541, et elle achève sa course comme dans du miel. Elle touche la fiole du bout du nez. La fiole roule, lentement, sur trois pavés, et vient s'arrêter contre le piquet." },
      { after: "r:fiole_fronde", text: "« J'ai pas visé là, avoue Rouget. J'ai visé plus fort. » Il ramasse la fiole sous la corde, sans passer un doigt de l'autre côté. Là-haut, la barrique n'a pas bougé d'une ligne. « Mais ça compte quand même. »" },
      "La fiole est d'un verre épais, bouché de cire noire, au poinçon de la Maîtrise. Trois quarts. Tu la verses dans ton sablier, grain à grain, sur la borne d'amarrage, à côté de la marchande qui crie son prix.",
    ],
    choices: [{ back: "K10r_quai" }] },

  // --- À la Patiente ---
  K10r_patiente: { act: "III", title: "La cloche bleue", backName: "la salle de la Patiente", place: "basse", ambiance: "ville",
    text: [
      { first: true, text: "Trois étages qui penchent sur le quai, un pignon où l'on a peint une cloche. Le bleu a tenu : rien ne passe, ici, de ce qui fait passer les couleurs." },
      { first: true, if: { has: "monde:perrine_avertie" }, text: "La porte est fermée. Une ardoise y pend, à un clou, d'une grosse écriture de femme qui sait compter mieux qu'écrire : *Fermé ce jour pour lessive.* Le 21 juin 541, jour du Grand Midi, quand toute la rivière avait soif, la meilleure auberge du quai a fermé pour une lessive." },
      { first: true, if: { has: "monde:perrine_avertie" }, text: "Tu fais le tour par la cour. La porte de la cuisine a un loquet, qui cède. La salle basse est rangée, les bancs sur les tables, les pots à l'envers sur leur planche. Le feu est couvert. Sur le comptoir, bien en vue, il y a une clef, et sous la clef un papier plié : *Pour le rat de cave : la soupe est au cellier, le lard aussi. Ne brûlez pas ma maison.* Elle est partie en femme qui compte revenir." },
      { first: true, if: { not: { has: "monde:perrine_avertie" } }, text: "La salle basse est pleine. Trente mariniers, attablés devant du poisson, tournés vers la fenêtre d'où l'on voit la Tour. Un pichet, incliné, tient son vin au bord du bec. Un chat, sous un banc, a la patte sur une arête." },
      { first: true, if: { not: { has: "monde:perrine_avertie" } }, text: "Derrière le comptoir, il y a une femme de cinquante ans, large, les manches roulées sur des bras de lavandière. Elle essuie un pot. Elle tourne le dos à la fenêtre : elle regarde sa salle. Elle est la seule personne, de toute cette ville, que le onzième coup ait prise en train de surveiller autre chose que lui." },
      { again: true, if: { has: "monde:perrine_avertie" }, text: "La salle rangée, les bancs sur les tables, la clef sur le comptoir." },
      { again: true, if: { not: { has: "monde:perrine_avertie" } }, text: "La salle pleine, le pichet incliné, la grosse femme à son comptoir." },
    ],
    choices: [
      { label: "Poser une pincée sur la main qui tient le pot", hide: { any: [{ has: "monde:perrine_avertie" }, { has: "r:tiennette_eveillee" }] }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: "r:tiennette_eveillee" }, to: "K10r_tiennette" },
      { label: "Descendre au cellier, puisqu'on t'y invite", hide: { any: [{ not: { has: "monde:perrine_avertie" } }, { has: "r:soupe_tiennette" }] }, fx: { flag: "r:soupe_tiennette", pv: 4 }, to: "K10r_cellier" },
      { label: "Monter l'échelle, derrière le four", hide: { seen: "K10r_soupente_jour" }, to: "K10r_soupente_jour" },
      { back: "K10r_basse" },
    ] },

  K10r_tiennette: { act: "III", title: "Le temps d'un Pater", place: "basse", ambiance: "ville",
    text: [
      "La main est chaude, rouge, fendue aux jointures. Tu y poses la pincée. Le gris fond dans la peau.",
      "Le torchon achève son tour dans le pot. La femme lève les yeux, sans sursaut, de l'air de quelqu'un qu'on dérange dans une addition. Elle te voit. Elle voit sa salle, derrière toi, et trente hommes qui ne mâchent pas.",
      "« Bon, dit-elle. C'est donc vrai. » Elle pose le pot. « La petite me l'avait dit, à sa façon, en comptant ses almanachs : elle ne voulait plus me parler, et elle parlait à sa hotte, tout haut, pour que j'entende. J'ai pensé qu'elle avait pris le soleil. On ne ferme pas une auberge le jour du Grand Midi sur la foi d'une hotte. »",
      "Elle regarde ta figure, tes habits, la coupe de ta veste, qu'elle ne connaît à aucun tailleur de la rivière. « Combien ? » Tu dis soixante ans. Elle ne bronche pas. Elle a un geste, seulement, vers le pichet penché, qu'elle redresse, par habitude, et qui ne se laisse pas redresser.",
      "« Écoutez, je n'ai pas longtemps, je le sens dans mes doigts. Il y avait un{autre:e} étranger{autre:e}, ici, qui couchait dans ma soupente. Quelqu'un de bien, qui mangeait comme quatre et qui avait toujours la main sur sa poitrine. Si c'est vous qui venez après, montez. C'est par l'échelle, derrière le four. » Sa voix ralentit. « Et la petite est sur la place, là-haut, avec son drap rouge. Elle vend. Dites-lui que je ne suis pas fâchée. Dites-lui que la soupe... »",
      "Le torchon s'arrête. Elle a les yeux sur sa salle.",
    ],
    choices: [{ back: "K10r_patiente" }] },

  K10r_cellier: { act: "III", title: "Pour le rat de cave", place: "basse", ambiance: "ville",
    text: [
      "Le cellier est sous la salle, à fleur d'eau. Une marmite de fonte, couverte d'une assiette. Tu ôtes l'assiette. C'est une soupe au lard et aux fèves, figée dans sa graisse, où la cuiller tient debout. Elle a tiédi pour toi dès que tu as mis la main à l'anse.",
      "Tu manges assis{e} sur un tonneau. Quelqu'un, il y a soixante ans, a su qu'une personne viendrait dans cette maison après que tout le monde en serait sorti. Elle ne savait pas qui. Elle a laissé de la soupe.",
      { with: "rouget", text: "Rouget racle le fond avec son pain. « Elle nous connaît pas, dit-il, et elle nous donne. La Courtepaille me connaît, et elle compte les croûtes. » Il réfléchit. « J'aime mieux quand on me connaît pas. »" },
      { after: "monde:lu:hoquet", text: "*J'écris dans une soupente à cordages, au-dessus du four, chez une femme qui nourrit*, disait le Cahier. Tu manges sa soupe. Elle a été faite pour la même faim, à deux jours et soixante ans d'écart." },
    ],
    choices: [{ back: "K10r_patiente" }] },

  K10r_soupente_jour: { act: "III", title: "Trois gouttes de suif", place: "basse", ambiance: "ville",
    text: [
      "On y monte par une échelle. Des glènes de chanvre, lovées, jusqu'aux chevrons. Une paillasse sur un rouleau de grelin, avec le creux d'un corps. Une lucarne, à hauteur de coude, que la Tour remplit d'un bord à l'autre.",
      "Sur une solive, à la tête de la paillasse, il y a trois gouttes de suif, rondes, jaunies, et au milieu la marque d'un cul de chandelle. On en a collé une là. On l'a regardée brûler.",
      { after: "monde:lu:hoquet", text: "Tu sais laquelle. *La chandelle a perdu un doigt, et je ne l'ai pas vue faire.* Tu mets le pouce sur la goutte du milieu. C'est ici que {autre} a compris qu'on lui avait pris un psaume. Tu es dans la chambre où quelqu'un a découvert ton pays." },
      { before: "monde:lu:hoquet", text: "Tu t'assois sur la paillasse. Elle garde la forme de quelqu'un de ta taille, à peu près, qui dormait sur le côté gauche, la main sous la joue." },
      "Par la lucarne, la Tour. Son cadran marque midi. La grande aiguille est debout sur le douze, exacte, comme un doigt levé, et elle attend la permission de retomber.",
      "Ce soir, s'il te faut un toit dans cette ville, tu sais où il y a un lit fait.",
    ],
    choices: [{ back: "K10r_patiente" }] },

  // --- The mansion of Hautgué ---
  K10r_hotel: { act: "III", title: "L'hôtel de Hautgué", backName: "le perron de Hautgué", place: "basse", ambiance: "chateau",
    text: [
      { first: true, text: "C'est la plus belle maison du quai : un perron à deux rampes, des fenêtres hautes, un cerf sculpté au fronton. Devant, six barges à l'amarre, vides, propres, bâchées, le nez tourné vers l'aval." },
      { first: true, text: "La porte est ouverte à deux battants. Un suisse en livrée verte se tient sur le seuil, la canne au poing, et regarde la Tour avec le reste du quai. Tu passes sous son bras." },
      { first: true, text: "Dedans, on entend ton pas sur le marbre. L'antichambre est vide, l'escalier sans chien, l'office sans cuisinière : une maison de cent domestiques, le jour de la plus grande fête du royaume, tenue par un suisse et par un vieil homme en noir, que tu trouves dans la grande salle, debout, un plumeau à la main." },
      { again: true, text: "Le marbre, l'escalier, le silence d'une maison qu'on a vidée exprès." },
      { after: "monde:lu:lettre", before: "r:vu_hotel_vide", text: "*Le vingt et un, je chasse à la Louvière depuis l'aube. Faites que douze gentilshommes m'y aient vu.* {autre} a tenu cette lettre dans un escalier de cette maison. Le maître n'y est pas. Il a emmené tout son monde voir un cerf." },
    ],
    choices: [
      { label: "La grande salle, où le vieil homme époussette", hide: { has: "r:vu_hotel_vide" }, fx: { flag: "r:vu_hotel_vide", ep: ["histoire", 600] }, to: "K10r_hotel_salle" },
      { label: "Le cabinet du duc, en haut de l'escalier", hide: { has: "r:preuve_601" }, to: "K10r_hotel_cabinet" },
      { back: "K10r_basse" },
    ] },

  K10r_hotel_salle: { act: "III", title: "Des bancs pour quarante", place: "basse", ambiance: "chateau",
    text: [
      "La salle est longue, lambrissée de chêne, sous un plafond à caissons. On y a travaillé le matin même. Tu le lis comme une piste.",
      "Au fond, sur une estrade de trois marches, on a tendu un dais : velours vert, crépines d'or, un cerf brodé. Dessous, un fauteuil, seul. Devant l'estrade, sur quatre rangs, des bancs à dossier, recouverts de housses. Tu les comptes. Quarante places. Sur chaque housse, épinglé, un carton, et sur chaque carton un nom de baron.",
      "Le vieil homme en noir est devant le premier banc. Il a une liste dans la main gauche, et de la droite, avec son plumeau, il ôte une poussière au carton du milieu. Il sourit un peu. C'est le sourire d'un intendant dont la table est mise.",
      "Un dais se tend pour un prince qui tient conseil. On a tendu celui-ci le 21 juin au matin, dans la maison d'un homme qui chassait le cerf à deux lieues de là, et qui ne pouvait pas savoir, à l'aube, que le royaume aurait besoin de lui à midi.",
      { after: "monde:lu:lettre", text: "*Vous tiendrez la grande salle prête pour le vingt-deux, le dais tendu, les bancs pour quarante.* Gaucelin a obéi, à la lettre, jusqu'aux housses. Il a seulement mis soixante ans de plus que prévu à attendre ses invités." },
      { before: "monde:lu:lettre", text: "La Chronique dit que la Providence avait conduit Monseigneur à la chasse. La Providence avait aussi fait porter quarante cartons chez le calligraphe." },
      "Tu lis la liste, par-dessus l'épaule de drap noir. Elle est datée, en haut, de la même main soignée : *Conseil du 22 juin 541. Pour pourvoir au gouvernement.* On ne te croira pas sur ta parole. On croira peut-être un intendant, sa liste, et quarante bancs qui n'ont pas bougé.",
    ],
    choices: [{ back: "K10r_hotel" }] },

  K10r_hotel_cabinet: { act: "III", title: "Un écrin vide", place: "basse", ambiance: "chateau",
    text: [
      "Le cabinet est au premier, derrière une porte de cuir. Un bureau à cylindre, des trophées, un presse-papier en forme de sanglier. Le lustre brûle encore : on a oublié de l'éteindre en partant pour la chasse, et il brûle depuis, sans chaleur et sans rien user, comme tout ce qu'on a allumé ici avant midi.",
      "Dans la cheminée, des cendres de papier, froides, écrasées au tisonnier. On a brûlé avant de sortir.",
      { after: "monde:lu:sceau", text: "Tu cherches ce que {autre} t'a décrit : une matrice d'argent, grosse comme une noix, avec une légende à l'envers. Tu ouvres les tiroirs un par un. Au troisième, sous des cartes de vénerie, il y a un écrin de maroquin vert. Il est vide. Le velours garde, en creux, la forme d'un sceau et de son manche." },
      { before: "monde:lu:sceau", text: "Tu ouvres les tiroirs un par un, en glaneur : par le fond. Au troisième, sous des cartes de vénerie, il y a un écrin de maroquin vert. Il est vide. Le velours garde, en creux, la forme d'un sceau et de son manche." },
      "Un homme qui part pour la chasse n'emporte pas de sceau. Celui-ci a pris le sien. Mais on ne brûle pas un écrin, et l'on ne pense pas à ce qui est dessous.",
    ],
    choices: [
      { label: "Soulever le velours de l'écrin",
        test: { dom: "savoir", diff: 5, label: "Chercher comme un graveur range", help: [{ if: { voie: "rouage" }, v: 10 }, { if: { voie: "heurier" }, v: 10 }, { if: { has: "monde:lu:sceau" }, v: 20 }] },
        win: { fx: { flag: "r:preuve_601", item: "memoire_graveur", ep: ["histoire", 800] }, to: "K10r_hotel_memoire" },
        lose: { to: "K10r_hotel_memoire" } },
      { back: "K10r_hotel" },
    ] },

  K10r_hotel_memoire: { act: "III", title: "Livré le douze", place: "basse", ambiance: "chateau",
    text: [
      { outcome: "win", text: "Le velours est collé sur un carton, et le carton vient. Dessous, plié en quatre, il y a ce que les graveurs glissent toujours au fond de leurs écrins, pour qu'on sache à qui revenir : un mémoire." },
      { outcome: "win", text: "*Thomassin, graveur en la rue des Orfèvres. Pour Monseigneur le duc de Hautgué. Un sceau d'argent, aux armes pleines, la légende en capitales : ODERIC RÉGENT D'AURIME. Livré en mains propres le 12 juin 541. Quarante écus. Reçu.*" },
      { outcome: "win", text: "Le 12 juin. Neuf jours avant que la Reine fût empêchée de rien. Tu replies le papier dans ta chemise, contre ta peau, où le Cahier a laissé sa place. Il y a au Palais une Régente de vingt-huit ans, qui porte le nom de cet homme et qui gouverne avec ce sceau." },
      { outcome: "win", after: "r:regente_parle", text: "Elle t'a dit, à l'abbaye, qu'il lui fallait un papier. En voici un, signé d'un graveur, avec le prix." },
      { outcome: "lose", text: "Tu retournes l'écrin, tu tâtes le fond, tu le secoues. Il ne rend rien. Tu le reposes dans son tiroir, sous les cartes. Il te reste la salle d'en bas, avec ses bancs : elle parle assez haut pour qui sait compter jusqu'à quarante." },
    ],
    choices: [{ back: "K10r_hotel" }] },

  // --- Rue des Aiguilliers ---
  K10r_aiguilliers: { act: "III", title: "La rue qui cherche par terre", backName: "la rue des Aiguilliers", place: "basse", ambiance: "ville",
    text: [
      { first: true, text: "Elle est étroite, tordue, collée au rempart. Chaque porte a son établi sous la fenêtre. Mais c'était fête : les établis sont nets, les loupes pendent à leur clou, et les ouvriers sont sur le pas des portes, en chemise blanche, tournés vers le bout de la rue, d'où l'on voit un coin de la Tour entre deux toits." },
      { first: true, text: "Un seul travaille. À mi-rue, sous une enseigne au sablier renversé, derrière une vitre à petits carreaux, un très vieux petit homme est penché sur un mouvement, une loupe vissée dans l'œil, sous une lampe à boule d'eau. Il n'a pas levé la tête pour le onzième coup. Il a dû l'entendre comme on entend la pluie." },
      { again: true, text: "La rue des Aiguilliers, ses chemises blanches, le vieil homme à sa vitre." },
    ],
    choices: [
      { label: "Pousser la porte au grelot", to: "K10r_gobin" },
      { back: "K10r_basse" },
    ] },

  K10r_gobin: { act: "III", title: "Ce que les autres rendent", backName: "la boutique au sablier renversé", place: "basse", ambiance: "ville",
    text: [
      { first: true, text: "Le grelot sonne, pour toi, d'un son neuf dans cette rue. La pièce est tapissée de pendules, du plancher aux solives, chacune avec une étiquette au cou. Elles étaient arrêtées : c'étaient des malades. Tu avances entre elles, et sur ton passage, l'une après l'autre, elles se mettent à battre, de travers, chacune selon son mal. Tu traînes après toi, jusqu'au fond de la boutique, un sillage de boiteuses." },
      { first: true, text: "Le vieil homme a les doigts sur une roue grosse comme une lentille. Devant lui, sur l'établi, rangées par taille, des brucelles, des limes, une burette. À sa gauche, un second établi, plus bas, plus neuf, avec un tabouret." },
      { first: true, if: { has: "monde:tiphaine_partie" }, text: "Le tabouret est vide. Les outils, dessus, sont rangés d'une autre main : en éventail, par ordre d'usage. Dans l'étau, une pièce d'acier bleui, à demi limée, que quelqu'un a laissée pour sortir. Une veste d'homme, trop large, pend au dossier." },
      { first: true, text: "Au mur, entre deux pendules, une feuille est clouée, jaunie, tracée à la plume. C'est l'épure d'un anneau, vu de face et déroulé à plat, avec des cotes." },
      { again: true, text: "Les pendules malades, le vieil homme sous sa boule d'eau, l'épure au mur." },
    ],
    choices: [
      { label: "Regarder l'épure de près", hide: { has: "r:sait_treize" }, fx: { flag: "r:sait_treize", ep: ["histoire", 400] }, to: "K10r_epure" },
      { label: "Poser une pincée sur la main qui tient la brucelle", hide: { has: "r:gobin_eveille" }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: "r:gobin_eveille" }, to: "K10r_gobin_eveil" },
      { back: "K10r_aiguilliers" },
    ] },

  K10r_epure: { act: "III", title: "Treize faces", place: "basse", ambiance: "ville",
    text: [
      "L'anneau est de bronze, d'après les hachures. Large d'un pouce, épais de deux lignes. On l'a dessiné déroulé, comme une frise, et la frise est divisée en cases égales, où l'on a écrit des chiffres : I, II, III, et la suite.",
      "Tu comptes les cases. Il y en a treize. Les douze premières ont leur chiffre. La treizième est blanche, et le dessinateur a écrit dedans, tout petit, de la même plume : *lisse. B. y tient.*",
      "En marge, une note : *Douze anneaux pareils sur un même axe. Pour la porte du G.M., logis du nord. Livré à la Chandeleur 524. Il m'a payé en me disant que j'étais le seul à qui il n'aurait pas à expliquer pourquoi. Il se trompait : je n'ai pas compris. J'ai fait.*",
      "Treize faces pour douze chiffres. Un horloger ne laisse pas une case vide par distraction : il la laisse parce qu'elle sert.",
    ],
    choices: [{ back: "K10r_gobin" }] },

  K10r_gobin_eveil: { act: "III", title: "Jeudi", place: "basse", ambiance: "ville",
    text: [
      "La brucelle achève son geste : la petite roue entre dans son pivot. Le vieil homme souffle dessus, satisfait. Puis il dit, sans se retourner : « Posez-la sur le comptoir, je verrai jeudi. »",
      "Tu dis que tu n'apportes rien. Il se retourne. Il a des yeux laiteux derrière des verres épais comme des culs de bouteille, et il regarde tes mains avant ta figure.",
      "« Du métier, non. Des mains qui ramassent. Mais vous avez au cou quelque chose qui coule, je l'entends d'ici, et cela ne coule pas à la mesure. » Il tend l'oreille. Autour de vous, les pendules malades battent, chacune son mal. « Et mes pensionnaires marchent. Toutes. Je ne les ai pas guéries. » Il ôte sa loupe. « Le coup s'est arrêté. Je comptais sans y penser, j'en étais à onze. Barnabé a donc perdu. »",
      "Il ne demande pas combien de temps. Il a soixante-dix ans de boutique : il sait qu'une pendule arrêtée ne dit pas depuis quand.",
      { after: "r:sait_treize", text: "Tu montres l'épure. Il hausse les épaules, avec tendresse. « Sa porte. Il voulait une serrure qu'on ouvre en sachant quelque chose, et qu'on n'ouvre pas en étant malin. Je lui ai dit : Barnabé, les voleurs sont malins. Il m'a dit : justement. » Sa voix ralentit. « La treizième face. Tout le monde croit qu'elle est là pour faire joli. Elle est là pour la dernière. Celle qu'on ne... »" },
      { before: "r:sait_treize", text: "« Si vous montez là-haut, dit-il, et sa voix ralentit, regardez ma feuille, au mur. C'est sa porte. Il y a une face de trop. Elle est là pour la dernière. Celle qu'on ne... »" },
      { if: { has: "monde:tiphaine_partie" }, text: "Il a tourné la tête, à la fin, vers le tabouret vide. Il est resté ainsi, la loupe à la main, avec sur la figure une inquiétude de grand-père." },
      { if: { not: { has: "monde:tiphaine_partie" } }, text: "Il a remis sa loupe, à la fin, d'un geste d'habitude. Il est resté ainsi, penché sur une roue qui est en place." },
    ],
    choices: [{ back: "K10r_gobin" }] },

  // --- Saint-Gnomon-le-Vieux ---
  K10r_gnomon: { act: "III", title: "La pièce de soleil", backName: "la nef de Saint-Gnomon", place: "basse", ambiance: "temple",
    text: [
      { first: true, text: "C'est une église petite, sombre, enfoncée de six marches dans le sol. Il y a de la paille dans les bas-côtés, et sur la paille des pèlerins de 541, assis, leurs souliers à côté d'eux, la tête levée vers une voûte où il n'y a rien à voir. Un bedeau compte des têtes, le doigt tendu, les lèvres sur un chiffre." },
      { first: true, text: "Dans le dallage, une règle de laiton traverse la nef de biais, du portail au chevet, graduée. Tout en haut de la voûte, un trou gros comme une noisette laisse tomber une pièce de soleil." },
      { first: true, text: "Elle bouge. C'est la seule chose de cette église qui ne t'ait pas attendu{e} : le soleil de 601 passe par le trou de 541, et sa pièce d'or se promène sur les dalles, sur la paille, sur le genou d'un pèlerin, à son pas de soleil. Elle n'est pas encore à la règle. Il s'en faut de trois dalles." },
      { first: true, text: "Sur la ligne de laiton, au point où la pièce touchera, on a scellé une étoile de cuivre, usée par les pieds. Autour : *ICI MIDI, QUOI QU'ON SONNE.*" },
      { again: true, text: "La nef, la paille, la règle de laiton. La pièce de soleil a encore avancé." },
      { after: "monde:lu:droit", before: "r:sait_droit", text: "*Il part de sous Saint-Gnomon-le-Vieux, et il monte tout droit, sans un coude.* {autre} tient cela d'une fille de pont. La règle de laiton file vers le chevet, vers la colline, vers la Tour. Elle montre un chemin autant qu'une heure." },
    ],
    choices: [
      { label: "Suivre la règle jusqu'au chevet", hide: { has: "r:sait_droit" },
        test: { dom: "savoir", diff: 10, label: "Lire un pavé comme un plan", help: [{ if: { has: "monde:lu:droit" }, v: 30 }, { if: { voie: "heurier" }, v: 10 }, { if: { voie: "rouage" }, v: 5 }] },
        win: { fx: { flag: "r:sait_droit", ep: ["histoire", 500] }, to: "K10r_droit" },
        lose: { to: "K10r_gnomon_rate" } },
      { label: "La trappe du chevet", hide: { any: [{ not: { has: "r:sait_droit" } }, { has: "r:vu_droit" }] }, to: "K10r_droit" },
      { back: "K10r_basse" },
    ] },

  K10r_gnomon_rate: { act: "III", title: "Derrière l'autel", place: "basse", ambiance: "temple",
    text: [
      "La règle passe sous le banc de communion, sous l'autel, et bute contre le mur du chevet. Tu frappes les dalles du talon. Elles sonnent plein. Tu soulèves la nappe, tu tâtes le retable, tu fais le tour d'un saint de bois qui te regarde faire.",
      "Il y a ici quelque chose. Une ligne qu'on a tirée avec ce soin à travers une église ne s'arrête pas à un mur pour le plaisir. Mais la pierre ne dit rien à qui ne sait pas où frapper.",
      { with: "rouget", text: "« Faut demander à ceux d'ici, dit Rouget. Dans une ville, y a toujours des gamins qui savent les trous. C'est comme ça que je savais ceux de Roquebise. »" },
    ],
    choices: [{ back: "K10r_gnomon" }] },

  K10r_droit: { act: "III", title: "La bouche du Droit", place: "basse", ambiance: "temple", fx: { flag: "r:vu_droit", stock: { sable: -1 }, ep: ["histoire", 500] },
    text: [
      "Derrière l'autel, la règle de laiton ne s'arrête pas : elle plonge. La dernière dalle, contre le mur, a un anneau couché dans une rainure, noir de crasse, que cent bedeaux ont pris pour une tache. Tu tires. Elle pivote sur un axe, avec une douceur de chose bien faite.",
      "Un escalier, vingt marches, sèches. En bas, un boyau.",
      "Il est maçonné, voûté, haut comme un homme. La règle de laiton continue par terre, au milieu, graduée, et s'en va dans le noir. Tu lèves ta veilleuse. Aussi loin qu'elle porte, les deux murs filent sans un coude, sans une porte, sans une niche, tirés au cordeau, vers la colline. Celui qui a creusé cela avait un point à atteindre et se moquait de ce qu'il y avait dessus.",
      "Il en vient un souffle. Il est froid, égal, et il n'a pas d'odeur. Et au fond du noir, très loin, là où les deux murs se touchent, il y a une lueur : un point gris, de perle, pas plus gros qu'une tête d'épingle, qui ne tremble pas.",
      "Ton sablier s'est emballé. Tu le sens contre ta peau, qui vibre comme un grillon. Tu fais dix pas dans le boyau, pour savoir. Le fil tombe trois fois plus gros. À ce train, tout ce que tu portes au cou ne te mènerait pas au bout.",
      "Tu remontes. Tu rabats la dalle. Il existe donc un chemin qui va de cette église au pied de la Tour sans passer devant un garde ; et il coûte, en sable, plus qu'un glaneur n'en ramasse en un mois.",
      { with: "jehan", text: "Jehan a regardé le boyau par-dessus ton épaule. « La Maîtrise ne le connaît pas. On nous faisait garder toutes les rues de la colline, et jamais une cave. » Il réfléchit. « Ou alors il le connaît, lui, et il n'a pas voulu que nous le sachions. »" },
    ],
    choices: [{ back: "K10r_gnomon" }] },

  // --- The bridge of the Three Candles ---
  K10r_pont3: { act: "III", title: "Le pont des Trois-Chandelles", backName: "le pont des Trois-Chandelles", place: "basse", ambiance: "eau",
    text: [
      { first: true, text: "Un vieux pont bossu, à trois arches, sur un canal qui a gardé sa crasse de 541 avec le reste. Dans le parapet, une niche, une sainte usée, et devant elle trois chandelles de suif. Elles brûlent. Leurs flammes sont droites, sans un frisson, et la cire n'a pas coulé d'une larme depuis soixante ans. Tu passes la main au-dessus. Elles éclairent, et elles sont froides." },
      { first: true, text: "Un passant est pris devant la niche, le bras tendu, un liard entre deux doigts. Il payait son péage à la sainte." },
      { first: true, text: "Sous l'arche du milieu, hors de l'eau, il y a une banquette de pierre. Des crampons de fer y descendent." },
      { again: true, text: "Le pont bossu, les trois flammes froides, l'homme au liard." },
    ],
    choices: [
      { label: "Descendre par les crampons", to: "K10r_arche" },
      { back: "K10r_basse" },
    ] },

  K10r_arche: { act: "III", title: "Sous l'arche", backName: "la banquette, sous le pont", place: "basse", ambiance: "eau", fx: { flag: "r:vu_brindille" },
    text: [
      { first: true, text: "C'est un logis. Des paillasses, des couvertures de cheval, un chaudron sur trois pierres, une planche avec des écuelles ébréchées, rangées par taille. Vingt enfants ont vécu ici. Ils n'y sont pas : c'était jour de Grand Midi, quarante mille bourses en l'air, et toute la bande était montée faire sa moisson là où l'on regardait la Tour." },
      { first: true, text: "Il en reste deux. Sur la meilleure paillasse, à l'écart, une petite de quatre ans, couchée sous une couverture, les mains sur la laine. Elle a les ongles gris, et les lèvres. Elle dormait avant le onzième coup, d'un sommeil qui n'avait rien à voir avec lui." },
      { first: true, text: "À côté d'elle, assis par terre, les genoux au menton, un gamin maigre, qui a laissé monter les autres. Il lui tient le poignet. D'ici, on ne voit de la fête qu'une voûte et de l'eau. Il regarde la figure de la petite, avec cette attention qu'on met à surveiller un feu qui baisse." },
      { first: true, after: "monde:su:remede", text: "La langueur grise. Tu as écrit le nom du remède dans le Cahier, il y a huit jours, en bâtons. Il est allé jusqu'à des religieuses, et de là, peut-être, jusque sous ce pont, à des gens à qui l'on a dit qu'il faudrait un an. Cette enfant n'avait pas un an. Elle en a eu soixante, d'un seul coup, sans vieillir d'un jour ni mourir d'un ongle." },
      { first: true, before: "monde:su:remede", text: "La langueur grise. Tu connais ces ongles : ta sœur a eu les mêmes, à Roquebise, et toutes les mères de chez toi savent ce qu'on fait bouillir. Ici, en 541, personne ne le savait. Cette enfant devait mourir dans l'été. Le onzième coup l'a prise en chemin, et la garde." },
      { again: true, text: "Les paillasses, les écuelles par rang de taille. Le garçon tient le poignet de la petite." },
      { after: "r:brindille_veilleuse", text: "Ta veilleuse brûle à la tête de la paillasse, avec son ruban." },
    ],
    choices: [
      { label: "Laisser une veilleuse à ruban à la tête de la paillasse", hide: { any: [{ has: "r:brindille_veilleuse" }, { not: { item: "veilleuse" } }] }, fx: { flag: "r:brindille_veilleuse", drop: "veilleuse", ep: ["perso", 400] }, to: "K10r_arche" },
      { label: "Poser une pincée sur la main du garçon", hide: { has: "r:moineau_eveille" }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: "r:moineau_eveille" }, to: "K10r_moineau" },
      { back: "K10r_pont3" },
    ] },

  K10r_moineau: { act: "III", title: "Le frère", place: "basse", ambiance: "eau",
    text: [
      "Il a un sursaut de bête. En un clin d'œil il est debout, entre toi et la paillasse, une lame de savetier au poing, sortie de sa manche. Puis il voit que tu as les mains ouvertes.",
      "« T'es qui ? T'es pas du pont. » Il écoute. Il a l'oreille des gens qui vivent sous une arche : il sait ce que fait la ville à chaque heure. « Ça sonne plus. Y a plus les roues. » Sa lame baisse. « Y a plus l'eau. »",
      "Tu lui dis, vite, ce qu'on peut dire le temps d'un Pater : que la cloche s'est arrêtée, que la ville dort, que sa sœur dort avec, et que rien de ce qui dort ici n'empire.",
      "Il regarde la petite. Il comprend cela avant le reste. « Elle bouge plus. Le gris, il monte plus. » Il a la voix qui tremble. « Alors faut pas que ça resonne. Tu m'entends ? Si ça resonne, elle a jusqu'à la Saint-Jean. Le médecin l'a dit, pour trois écus. »",
      { after: "monde:su:remede", text: "Tu dis qu'il y a un remède, une écorce, et que chez toi on en trouve. Il te regarde comme on regarde quelqu'un qui promet. « Alors tu l'apportes avant. Tu la lui fais boire d'abord, et après ils sonnent ce qu'ils veulent. » Il ralentit. Ses doigts se rouvrent sur le poignet de sa sœur. « D'abord. Tu jures. Sur ta... »" },
      { before: "monde:su:remede", text: "Tu dis qu'on en guérit, chez toi : une écorce, bouillie, trois semaines. Il te regarde comme on regarde quelqu'un qui promet. « Alors tu l'apportes avant. Tu la lui fais boire d'abord, et après ils sonnent ce qu'ils veulent. » Il ralentit. Ses doigts se rouvrent sur le poignet de sa sœur. « D'abord. Tu jures. Sur ta... »" },
      "Il s'est rassis, les genoux au menton. Tu remontes par les crampons, avec une commission de plus, donnée par un voleur qui n'a pas toutes ses dents de grand : si quelqu'un doit rendre son heure à cette ville, il y a sous un pont une enfant à qui il faut d'abord porter trois semaines de tisane.",
    ],
    choices: [{ label: "Reprendre les crampons", fx: { flag: "r:promesse_brindille", ep: ["perso", 500] }, to: "K10r_pont3" }] },

  // --- Jehan ---
  K10r_jehan_seuil: { act: "III", title: "Un nom qu'on crache", place: "basse", ambiance: "ville", with: "jehan",
    text: [
      "Il est toujours contre son mur, sous l'horloge, la main à plat sur la pierre. Il regarde, en haut de la ville, par-dessus tous les toits, la colline grise.",
      "« J'ai fait le chemin jusqu'ici en me disant que je verrais bien. Je vois. » Il a la figure d'un garçon de dix-sept ans qui se tient comme à l'exercice pour ne pas se tenir autrement. « Chez nous, quand un enfant mentait, on lui disait : *tu finiras comme le Maudit.* Quand le lait tournait : *c'est un tour du Maudit.* On crache en disant son nom. On me l'a appris à quatre ans, à cracher. Je crachais très bien. »",
      "Il ôte sa main du mur, la regarde. « Ma grand-mère est morte l'hiver de mes douze ans. Elle m'a fait venir. Elle m'a dit comment s'appelait son père, avant qu'on change, en 542, dans un village où personne ne nous connaissait. » Il ne le dit pas. Il regarde la colline. « Il avait un oncle, là-haut. Dans cette maison grise. Je suis entré dans la Garde l'année d'après, pour porter un autre habit que ma peau. »",
      "Il se tait. Autour de vous, quarante mille personnes attendent le douzième coup, et la Chronique sait par la faute de qui.",
    ],
    choices: [
      { label: "« Viens voir par toi-même ce qu'il a laissé. Je monte demain. »", fx: { flag: "r:jehan_entre", conf: { jehan: 10 }, ep: ["perso", 500] }, to: "K10r_jehan_fin" },
      { label: "« Une chronique, c'est écrit par celui qui reste. Regarde qui est resté. »", fx: { flag: ["r:jehan_entre", "r:jehan_doute_chronique"], conf: { jehan: 15 }, ep: ["perso", 500] }, to: "K10r_jehan_fin" },
      { label: "« Garde la porte. Il me faut quelqu'un derrière moi qui sache tenir une sortie. »", fx: { flag: "r:jehan_porte", conf: { jehan: 5 } }, to: "K10r_jehan_fin" },
    ] },

  K10r_jehan_fin: { act: "III", title: "Trois pas derrière", place: "basse", ambiance: "ville", with: "jehan",
    text: [
      { after: "r:jehan_doute_chronique", text: "Il tourne la tête, lentement, vers le bout du quai, où l'on voit un perron, un cerf au fronton. Puis vers la colline. « Celui qui reste. » Il n'avait jamais retourné la phrase. On lui a appris à saluer avant de réfléchir : il réfléchit, cette fois, et sa main ne sait plus où se mettre. « Je viens. Si c'est vrai, je veux l'avoir lu de mes yeux. Si c'est faux, je veux savoir sur qui j'ai craché. »" },
      { after: "r:jehan_entre", before: "r:jehan_doute_chronique", text: "« Ce qu'il a laissé. » Il respire, un grand coup, comme avant une charge. « Bien. Je viens. Je marcherai derrière. Si quelqu'un, là-haut, sait lire les figures, il vaut mieux que la mienne arrive après la tienne. »" },
      { after: "r:jehan_porte", text: "Il se redresse. Une consigne, c'est une chose à quoi il sait obéir, et tu vois ses épaules reprendre leur place. « La porte d'Occident, et la voûte du canal. Je tiens les deux. Hurepel me doit de ne m'avoir pas vu : je saurai le lui rappeler. » Il te salue, le poing sur le cœur, et rougit. « Tu me diras. Ce qu'il y a dans la maison grise. Tu me le diras, même si c'est ce qu'on raconte. »" },
      { after: "r:jehan_entre", text: "Il quitte son mur. Il passe sous l'horloge, qui fait son saut pour lui aussi. C'est le premier pas qu'un homme de ce sang ait fait dans Méridane depuis soixante ans, et la ville, qui regarde ailleurs, ne s'en aperçoit pas." },
    ],
    choices: [{ back: "K10r_basse" }] },

  // --- Noon ---
  K10r_midi: { act: "III", title: "La Petite", place: "basse", ambiance: "eau",
    text: [
      "Le cadran du port a deux faces, l'une vers la ville, l'autre vers l'eau. Elles marquent midi toutes deux. Tu montes les trois marches, et l'aiguille de ta face fait son saut. Tu as désaccordé la Petite d'avec elle-même : midi vers l'eau, midi et un rien vers la ville.",
      "Le soleil est au-dessus de la rivière. Dans une église enfoncée de six marches, à trois rues d'ici, une pièce d'or touche en ce moment une étoile de cuivre. Il est midi au ciel. Il est midi à quarante mille figures levées. Les deux midis ont soixante ans d'écart, et tu es la seule personne à les avoir ensemble sous la main.",
      "La marche du milieu, côté rivière, porte un anneau de fer où l'on amarrait les bachots. La pierre qui tient l'anneau a du jeu. Tu la fais venir avec ton couteau.",
      "Dessous, c'est du sable de rivière, sec, propre. Ta main y entre jusqu'au poignet, et rencontre de la toile cirée.",
      { with: "rouget", text: "Rouget s'est assis sur la marche d'en haut, les pieds pendants. Il a vu d'où tu tires le livre. Il ne demande rien. Il a compris depuis Arvoise qu'il y a dans ta chemise une affaire plus grosse que lui, et il la garde comme il garde tout : en regardant ailleurs, très fort." },
    ],
    choices: [{ label: "Ouvrir le Cahier", to: "M10", big: true }] },
});

module.exports = { passages: P, extras: {
  items: {
    memoire_graveur: { name: "Mémoire du graveur Thomassin", kind: "divers", keep: true, flat: true, price: 0, desc: "Un papier plié en quatre, trouvé sous le velours d'un écrin vide, à l'hôtel de Hautgué. « Un sceau d'argent, légende : ODERIC RÉGENT D'AURIME. Livré le 12 juin 541. Quarante écus. Reçu. »" },
  },
} };
