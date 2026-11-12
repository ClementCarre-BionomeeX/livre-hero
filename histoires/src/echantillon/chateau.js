// The trolls' castle: approaches, courtyard, kitchens, kennel, hoard, throne, the cellars and the split stone.
module.exports = {
  P_abords: { act: "P", title: "Sous le rempart", place: "chateau", hub: true, routes: true,
    text: [
      { if: { not: { seen: "P_porte" } }, text: "De près, le château est pire que de loin. Les trolls ont comblé les brèches du rempart avec des troncs entiers, des portes de grange, une carriole renversée. Tout l'ensemble penche. Une odeur de suif rance et de chien mouillé descend jusqu'à toi.", else: "Le rempart rapiécé se dresse au-dessus de toi, toujours aussi bancal, toujours aussi puant." },
      "Trois façons d'entrer, à première vue : la grande porte, gardée ; le côté nord, où l'on entend des chiens ; et derrière, une cheminée de cuisine qui crache sa fumée par une brèche à hauteur d'homme.",
      { if: { has: "P:sortie" }, text: "Tu sais maintenant ce qui dort sous ces pierres. La route vers la Sorbe et Brumefeuille descend sur l'autre versant." },
    ],
    choices: [
      { label: "La grande porte", hide: { has: "P:dedans" }, to: "P_porte" },
      { label: "Le côté nord, vers les aboiements", hide: { has: "P:chenil-vu" }, to: "P_chenil_dehors" },
      { label: "La brèche de la cheminée, derrière les cuisines", hide: { has: "P:dedans" }, to: "P_breche" },
      { label: "Rentrer dans la cour", if: { has: "P:dedans" }, hide: { not: { has: "P:dedans" } }, to: "P_cour" },
    ] },

  P_porte: { act: "P", title: "La grande porte", place: "chateau",
    text: [
      "Deux trolls gardent la porte, assis sur des tonneaux. L'un ronfle, l'autre cure ses dents avec un os de mouton. Ils sont gris, verruqueux, larges comme des armoires ; celui qui est éveillé te voit, et cesse de se curer les dents.",
      "« Hé. » Il pousse son voisin du coude. « Hé. Viande. »",
    ],
    choices: [
      { label: "Dégainer avant que le second ne se réveille", fight: { title: "La grande porte", enemies: [{ id: "troll_garde", n: 2 }],
        flee: { label: "Reculer jusqu'au sentier", to: "P_abords" },
        win: { fx: { flag: ["P:dedans", "P:gardes-morts"], ep: ["seance", 1200] }, to: "P_porte_apres" },
        lose: { fx: { flag: "P:assomme" }, to: "P_reveil_cour" } } },
      { label: "« Je viens voir le roi. J'apporte des nouvelles d'en bas. »", test: { dom: "social", diff: -10, label: "bluffer" },
        win: { fx: { flag: ["P:dedans", "P:invite"], ep: ["perso", 500] }, to: "P_cour" },
        lose: { fx: { note: "Le troll éclate d'un rire de pierre qui roule. Il se lève." }, to: "P_porte_combat" } },
      { label: "Revenir sur tes pas", to: "P_abords" },
    ] },

  P_porte_combat: { act: "P", title: "La grande porte", place: "chateau",
    text: ["Le second troll s'est réveillé. Ils viennent ensemble, sans se presser, comme on vient ramasser un sac."],
    choices: [
      { label: "Te battre", fight: { title: "La grande porte", enemies: [{ id: "troll_garde", n: 2 }],
        flee: { label: "Fuir vers le sentier", to: "P_abords" },
        win: { fx: { flag: ["P:dedans", "P:gardes-morts"], ep: ["seance", 1200] }, to: "P_porte_apres" },
        lose: { fx: { flag: "P:assomme" }, to: "P_reveil_cour" } } },
      { label: "Fuir vers le sentier", to: "P_abords" },
    ] },

  P_porte_apres: { act: "P", title: "La porte est ouverte", place: "chateau",
    fx: { gold: 7, item: "cle_chenil" },
    text: [
      "Les deux trolls sont à terre. À la ceinture du plus gros pend une clé de fer noir, grosse comme ta main ; dans une bourse graisseuse, quelques pièces volées au hameau.",
      "Personne n'est accouru. Dans un château de trolls, des cris à la porte ne font lever personne.",
    ],
    choices: [{ label: "Entrer dans la cour", to: "P_cour" }] },

  P_reveil_cour: { act: "P", title: "Réveil dans la paille", place: "chateau",
    fx: { flag: "P:dedans", pv: 4 },
    text: [
      "Tu reprends connaissance dans la paille d'un enclos, la tête comme une cloche. On t'a jeté là avec les chèvres volées. Personne ne t'a pris ton sac : les trolls n'ont pas pensé que tu étais autre chose que de la viande à garder fraîche.",
      "L'enclos donne sur la cour. La porte n'est fermée que d'une corde.",
    ],
    choices: [{ label: "Défaire la corde et te glisser dans la cour", to: "P_cour" }] },

  P_breche: { act: "P", title: "La brèche de la cheminée", place: "chateau",
    text: [
      "Derrière le château, la pente est presque à pic. Une cheminée de cuisine a été prolongée par un tuyau de tôle, et à sa base, le mur s'est effondré en une brèche où passe un homme courbé. De l'intérieur montent une chaleur grasse et le bruit d'une louche contre un chaudron.",
    ],
    choices: [
      { label: "Te glisser par la brèche sans te faire voir", test: { dom: "discretion", diff: 0, label: "se faufiler" },
        win: { fx: { flag: "P:dedans", ep: ["perso", 400] }, to: "P_cuisines" },
        lose: { fx: { flag: "P:dedans", pv: -2, note: "Une pierre cède sous ta main ; tu tombes plus que tu n'entres." }, to: "P_cuisines" } },
      { label: "Revenir vers l'avant du château", to: "P_abords" },
    ] },

  P_chenil_dehors: { act: "P", title: "Le côté nord", place: "chateau",
    fx: { flag: "P:chenil-vu" },
    text: [
      "Le côté nord est un ancien jardin devenu fosse à ordures. Contre le rempart, une cage de rondins renferme une demi-douzaine de chiens efflanqués, volés dans toutes les fermes à dix lieues. Ils se jettent contre les barreaux en te voyant, sauf un, gris, une oreille cassée, qui te regarde sans aboyer.",
      { if: { has: "bergere:promesse" }, text: "Poivre. Tu as promis." },
      "La porte de la cage est fermée par un cadenas de fer noir. De l'extérieur, le rempart est trop haut ; le chenil, lui, s'ouvre aussi sur la cour.",
    ],
    choices: [
      { label: "Forcer le cadenas", if: { item: "pied_de_biche" }, why: "Il te faudrait un pied-de-biche, ou la clé.", test: { dom: "combat", diff: 0, label: "forcer" },
        win: { to: "P_chien_libre" }, lose: { fx: { note: "Le cadenas tient. Les chiens hurlent ; il vaut mieux partir avant qu'on vienne voir." }, to: "P_abords" } },
      { label: "Ouvrir avec la clé de fer noir", if: { item: "cle_chenil" }, why: "Tu n'as pas la clé.", to: "P_chien_libre" },
      { label: "Revenir plus tard", to: "P_abords" },
    ] },

  P_chenil: { act: "P", title: "Le chenil", place: "chateau",
    text: [
      "Côté cour, le chenil n'est qu'une grille de rondins. Les chiens s'y entassent dans la paille sale. Le gris à l'oreille cassée lève la tête vers toi.",
    ],
    choices: [
      { label: "Ouvrir avec la clé de fer noir", if: { item: "cle_chenil" }, why: "Il faut la clé du chenil. Les gardes de la porte l'ont, ou la cuisinière sait où elle est.", to: "P_chien_libre" },
      { label: "Faire sauter le cadenas au pied-de-biche", if: { item: "pied_de_biche" }, why: "Il te faudrait un pied-de-biche.", to: "P_chien_libre" },
      { label: "Revenir au milieu de la cour", to: "P_cour" },
    ] },

  P_chien_libre: { act: "P", title: "Poivre", place: "chateau",
    fx: { flag: "bergere:chien", quest: "P_chien", ep: ["seance", 800], fac: { bornes: 5 } },
    text: [
      "La grille s'ouvre. Les chiens jaillissent comme une eau qu'on libère, filent entre tes jambes, franchissent le jardin et disparaissent dans la pente en jappant. Ils connaissent le chemin de leurs fermes mieux que toi.",
      "Le gris passe le dernier. Il s'arrête une seconde, te renifle la main, et repart vers la crête, vers l'endroit où une femme maigre attend sur un rocher depuis six jours.",
    ],
    choices: [{ label: "Continuer", to: [{ if: { has: "P:dedans" }, to: "P_cour" }, { to: "P_abords" }] }] },

  P_cour: { act: "P", title: "La cour des trolls", place: "chateau", hub: true,
    fx: { flag: "P:dedans" },
    text: [
      "La cour est une boue piétinée où traînent des os, des roues de charrette, un tonneau éventré. Le donjon, au fond, a perdu son toit ; les trolls ont tendu dessus des peaux cousues. Une rumeur de voix graves vient de là, et une odeur de viande grillée.",
      { if: { has: "P:invite" }, text: "Les trolls que tu croises te regardent passer avec curiosité : on leur a dit que tu venais voir le roi. Personne ne songe à t'arrêter." },
      { if: { has: "P:roi-passe" }, text: "Depuis ton passage dans la grande salle, les trolls se tiennent à distance. Le bruit court déjà." },
      "D'ici, tu vois les cuisines à gauche, le chenil contre le rempart nord, un appentis qui doit servir de remise à butin, et l'escalier du donjon.",
    ],
    choices: [
      { label: "Les cuisines", to: "P_cuisines" },
      { label: "Le chenil", hide: { has: "bergere:chien" }, to: "P_chenil" },
      { label: "La remise à butin", hide: { has: "P:butin" }, to: "P_remise" },
      { label: "Monter à la grande salle du roi", hide: { has: "P:roi-passe" }, to: "P_trone" },
      { label: "Descendre sous le château", if: { has: "P:roi-passe" }, hide: { any: [{ not: { has: "P:roi-passe" } }, { has: "P:sortie" }] }, to: "P_escalier" },
      { label: "Ressortir du château", to: "P_abords" },
    ] },

  P_cuisines: { act: "P", title: "Les cuisines", place: "chateau",
    fx: { meet: "aglae" },
    text: [
      { if: { not: { seen: "P_aglae_libre" } }, text: "Les cuisines sont une caverne noire de suie, éclairée par un feu où rôtit un mouton entier. Une femme y tourne la broche : une humaine, petite, le visage couvert de cendre, une chaîne à la cheville. Elle te voit et ne crie pas.", else: "Les cuisines sont vides. Le feu baisse sous la broche abandonnée ; personne ne le nourrira plus." },
      { if: { not: { seen: "P_aglae_libre" } }, text: "« Aglaé », souffle-t-elle. « Cuisinière. Ça fait deux hivers. » Elle jette un œil vers la porte. « Tu veux voir le roi, ou tu veux voir en dessous ? Parce qu'en dessous, il faut d'abord passer le roi. Il dort sur l'escalier, comme un chien sur un os. »" },
    ],
    choices: [
      { label: "« Je vais te sortir d'ici. »", hide: { has: "aglae:libre" }, to: "P_aglae" },
      { label: "Lui demander ce qu'il y a sous le château", hide: { has: "P:aglae-parle" }, fx: { flag: "P:aglae-parle", clue: "p1_aglae" }, to: "P_aglae_parle" },
      { label: "Retourner dans la cour", to: "P_cour" },
    ] },

  P_aglae_parle: { act: "P", title: "Ce que sait Aglaé", place: "chateau",
    text: [
      "Aglaé baisse encore la voix. « La nuit, ça chante. Sous mes pieds, sous les dalles. Pas une chanson : une voix toute seule, sans bouche. La première fois, elle a dit mon nom. Je ne l'avais dit à personne ici. »",
      "Elle tourne la broche, deux fois. « Grauk a peur. Le roi. Il a fait murer la porte des caves, puis il l'a fait rouvrir, parce que la voix grattait de l'autre côté. Maintenant il dort devant. Il dit qu'il la garde. Moi je crois qu'elle le garde, lui. »",
      "« Si tu veux passer, il y a trois façons. Le tuer, et bonne chance. Lui parler : il aime qu'on lui pose des devinettes, et il aime encore plus en gagner. Ou attendre qu'il ait mangé : après le mouton, il dort comme une pierre. »",
    ],
    choices: [{ label: "Hocher la tête", to: "P_cuisines" }] },

  P_aglae: { act: "P", title: "La chaîne", place: "chateau",
    text: [
      "La chaîne d'Aglaé est rivée à un anneau scellé dans le mur. L'anneau est vieux, la pierre est molle de suie et de graisse.",
    ],
    choices: [
      { label: "Arracher l'anneau du mur", test: { dom: "combat", diff: -10, label: "force", help: [{ if: { item: "pied_de_biche" }, v: 20 }] },
        win: { to: "P_aglae_libre" }, lose: { fx: { pv: -2, note: "L'anneau bouge à peine. Tes mains saignent." }, to: "P_cuisines" } },
      { label: "Crocheter le collier de cheville avec la pointe de ta dague", if: { item: "dague" }, why: "Il te faudrait une pointe fine.", test: { dom: "discretion", diff: 0, label: "crocheter" },
        win: { to: "P_aglae_libre" }, lose: { fx: { note: "La pointe glisse. Tu recommenceras." }, to: "P_cuisines" } },
      { label: "Lui promettre de revenir la chercher", to: "P_cuisines" },
    ] },

  P_aglae_libre: { act: "P", title: "Aglaé", place: "chateau",
    fx: { flag: "aglae:libre", quest: "P_aglae", ep: ["seance", 1000], food: 2, item: "cle_chenil" },
    text: [
      "La chaîne tombe. Aglaé reste un instant immobile, comme si elle ne savait plus quoi faire de ses deux pieds. Puis elle fourre dans ton sac deux pains et un morceau de mouton enveloppé dans un torchon, et décroche d'un clou une grosse clé de fer noir.",
      "« Le chenil. Ils me la confiaient pour nourrir les chiens. » Elle s'arrête sur le seuil de la brèche. « J'ai une sœur à Brumefeuille. Si tu passes par là-bas, dis-lui que je rentre à pied. Ça me prendra le temps qu'il faudra. »",
    ],
    choices: [{ label: "La regarder disparaître dans la pente", to: "P_cuisines" }] },

  P_remise: { act: "P", title: "La remise à butin", place: "chateau",
    text: [
      "L'appentis est rempli jusqu'au toit d'un butin absurde : des chaudrons, des sabots dépareillés, une cloche de chapelle, une selle, des dizaines de cuillères. Tout ce qui brille ou qui tinte. Quelque chose bouge sous un tas de sacs.",
    ],
    choices: [
      { label: "Fouiller quand même", fight: { title: "Les rats de la remise", enemies: [{ id: "rat", n: 3 }],
        win: { fx: { flag: "P:butin" }, to: "P_remise_fouille" }, lose: { fx: { flag: "P:butin" }, to: "P_remise_fouille" },
        flee: { label: "Ressortir en secouant tes bottes", to: "P_cour" } } },
      { label: "Laisser le butin aux rats", to: "P_cour" },
    ] },

  P_remise_fouille: { act: "P", title: "Dans le butin", place: "chateau",
    fx: { gold: 15, item: ["marteau_durn", "pied_de_biche"], questSeen: "P_marteau", ep: ["perso", 400] },
    text: [
      "Une fois les rats chassés, tu fouilles. Il faut une bonne heure pour trouver ce qui vaut quelque chose : une poignée de pièces au fond d'un chaudron, un pied-de-biche, et, coincé sous la selle, un marteau de forge à manche de frêne. Une borne est gravée sur sa tête.",
    ],
    choices: [{ label: "Retourner dans la cour", fx: { time: 1 }, to: "P_cour" }] },

  P_trone: { act: "P", title: "La grande salle", place: "chateau",
    fx: { meet: "roi_troll" },
    text: [
      "La grande salle n'a plus de toit, seulement les peaux cousues qui battent au vent comme une voile mal tendue. Au fond, sur un trône fait d'une porte de grange posée sur deux tonneaux, Grauk.",
      "Le roi des trolls est vieux. Sa peau a la couleur des pierres de rivière, ses yeux sont petits et pâles, et il porte en couronne un cercle de fer qui a dû être la jante d'une roue. Derrière lui, une porte basse, murée puis rouverte. Il est assis devant comme on s'assoit devant un feu qui pourrait s'échapper.",
      "« Un petit », dit-il, d'une voix étonnamment douce. « Encore un qui veut descendre. Ils veulent tous descendre. »",
      { if: { has: "P:aglae-parle" }, text: "Tu repenses à ce qu'a dit Aglaé : la force, les devinettes, ou le sommeil d'après le mouton." },
    ],
    choices: [
      { label: "Le défier", fight: { title: "Grauk, roi des trolls", enemies: ["roi_troll"],
        talk: { label: "Lui proposer plutôt une devinette", diff: -10, win: { fx: { flag: ["P:roi-passe", "P:roi-devinette"], quest: "P_roi", ep: ["seance", 1500] }, to: "P_roi_devinette" } },
        win: { fx: { flag: ["P:roi-passe", "P:roi-mort"], quest: "P_roi", ep: ["seance", 2000], mark: 0 }, to: "P_roi_mort" },
        lose: { fx: { flag: ["P:roi-passe", "P:roi-vaincu"], quest: "P_roi" }, to: "P_roi_vainqueur" } } },
      { label: "« Une devinette, roi Grauk. Si tu perds, je descends. »", test: { dom: "social", diff: -10, label: "la devinette", help: [{ if: { has: "P:aglae-parle" }, v: 15 }, { if: { has: "P:bornes" }, v: 5 }] },
        win: { fx: { flag: ["P:roi-passe", "P:roi-devinette"], quest: "P_roi", ep: ["seance", 1500] }, to: "P_roi_devinette" },
        lose: { fx: { note: "Grauk trouve la réponse en trois souffles et rit si fort que les peaux du toit en tremblent." }, to: "P_roi_rate" } },
      { label: "Revenir quand il aura mangé, et passer pendant qu'il dort", if: { has: "P:aglae-parle" }, why: "Tu ne sais pas encore quand il dort.", to: "P_roi_sommeil" },
      { label: "Te retirer", to: "P_cour" },
    ] },

  P_roi_rate: { act: "P", title: "Grauk rit", place: "chateau",
    text: [
      "« Perdu, petit. » Grauk se cale contre la porte basse. « Reviens quand tu auras une meilleure devinette. Ou une meilleure épée. Ou un meilleur sommeil que le mien. » Il ferme les yeux. Il ne dort pas.",
    ],
    choices: [{ label: "Te retirer dans la cour", to: "P_cour" }] },

  P_roi_sommeil: { act: "P", title: "Le sommeil du roi", place: "chateau",
    text: [
      "Tu attends dans l'ombre de la cour que le mouton d'Aglaé, ou ce qu'il en reste, monte vers la grande salle. Une heure. Deux. Enfin, un ronflement roule sous les peaux du toit, si profond que la boue de la cour en frissonne.",
      "Grauk dort affalé contre la porte basse, une main posée dessus comme on garde un loquet. Il faut passer sous son bras.",
    ],
    choices: [
      { label: "Te glisser sous le bras du roi", test: { dom: "discretion", diff: -10, label: "passer sans bruit", help: [{ if: { night: true }, v: 10 }, { if: { item: "lanterne" }, v: 5 }] },
        win: { fx: { flag: ["P:roi-passe", "P:roi-dort"], quest: "P_roi", ep: ["seance", 1500], time: 3 }, to: "P_escalier" },
        lose: { fx: { time: 3, note: "Grauk ouvre un œil pâle." }, to: "P_roi_reveil" } },
      { label: "Renoncer pour cette fois", fx: { time: 3 }, to: "P_cour" },
    ] },

  P_roi_reveil: { act: "P", title: "Un œil pâle", place: "chateau",
    text: [
      "« Tu sens la cuisine », murmure le roi sans bouger. « Tu sens Aglaé. » Il ne se lève pas. « Va. Va donc voir. Puisque tout le monde veut voir. Tu me diras, toi, si elle chante encore. »",
      "Il retire sa main de la porte.",
    ],
    choices: [{ label: "Passer la porte basse", fx: { flag: ["P:roi-passe", "P:roi-laisse"], quest: "P_roi", ep: ["seance", 1000] }, to: "P_escalier" }] },

  P_roi_devinette: { act: "P", title: "La devinette", place: "chateau",
    text: [
      "« Qu'est-ce qui garde la porte, et que la porte garde ? »",
      "Grauk réfléchit longtemps, les yeux fermés. Puis il les rouvre, et pour la première fois il te regarde vraiment. « Moi », dit-il. « C'est moi. » Il se lève, lourdement, et s'écarte de la porte basse. « Tu as gagné, petit. Descends. Et si elle te parle, ne lui réponds pas. »",
    ],
    choices: [{ label: "Passer la porte basse", to: "P_escalier" }] },

  P_roi_mort: { act: "P", title: "Le roi est tombé", place: "chateau",
    text: [
      "Grauk s'effondre contre la porte qu'il gardait, et la porte s'ouvre sous son poids. Il respire encore un peu. « Elle va être contente », dit-il. Puis plus rien.",
      "Dans la cour, les trolls ont entendu. Aucun ne monte.",
    ],
    choices: [{ label: "Enjamber le roi et descendre", to: "P_escalier" }] },

  P_roi_vainqueur: { act: "P", title: "Le roi a gagné", place: "chateau",
    fx: { pv: 6 },
    text: [
      "Tu te réveilles sur les dalles froides, de l'autre côté de la porte basse. Le roi t'y a jeté, comme on jette un os dans un puits pour savoir s'il est profond.",
      "Sa voix passe par la fente du battant. « Tu voulais descendre, petit. Descends. »",
    ],
    choices: [{ label: "Te relever", to: "P_escalier" }] },

  P_escalier: { act: "P", title: "L'escalier", place: "chateau",
    text: [
      "L'escalier tourne dans l'épaisseur du roc. Les marches sont usées en creux, plus anciennes que le château, plus anciennes que les trolls. Au bout de quarante marches, la lumière d'en haut ne descend plus.",
    ],
    choices: [
      { label: "Allumer ta lanterne", if: { item: "lanterne" }, why: "Tu n'as pas de lanterne.", to: "P_caves" },
      { label: "Faire naître une lueur au creux de ta main", test: { dom: "magie", diff: 0, label: "lumière" },
        win: { fx: { ep: ["perso", 300] }, to: "P_caves" }, lose: { fx: { note: "La lueur vacille et meurt. Tu descends à tâtons." }, to: "P_caves_noir" } },
      { label: "Descendre à tâtons, une main sur la paroi", to: "P_caves_noir" },
    ] },

  P_caves_noir: { act: "P", title: "Dans le noir", place: "chateau",
    fx: { pv: -2 },
    text: [
      "Tu descends dans le noir complet. Tu te cognes, tu glisses, tu t'écorches les paumes. Sous tes doigts, la paroi n'est pas lisse : elle est couverte de creux, de formes, des centaines de formes. Ce n'est qu'au bas des marches, quand une faible clarté apparaît au loin, que tu comprends ce que tu touchais.",
    ],
    choices: [{ label: "Avancer vers la clarté", to: "P_caves" }] },

  P_caves: { act: "P", title: "Les caves", place: "chateau",
    fx: { clue: "p1_mains" },
    text: [
      "Des mains. Partout. Des empreintes de mains enfoncées dans la roche comme dans de l'argile, des milliers, du sol jusqu'à la voûte, toutes tournées vers le bas. Des mains d'hommes, de femmes, d'enfants. On dirait que quelqu'un, il y a très longtemps, a voulu retenir le sol tout entier.",
      "Au bout de la galerie, une lumière toute petite flotte à hauteur d'épaule. Elle ne bouge pas. Elle t'attend.",
      "Et sous tes pieds, très loin, très bas, quelque chose chante. Une seule note, tenue, sans souffle.",
    ],
    choices: [
      { label: "Aller vers la petite lumière", to: "P_pierre" },
      { label: "Écouter la note, et chercher d'où elle vient", test: { dom: "savoir", diff: -10, label: "comprendre" },
        win: { fx: { flag: "P:voix-comprise", ep: ["perso", 500] }, to: "P_voix" },
        lose: { fx: { pv: -2, note: "La note entre dans tes dents, dans tes os. Tu recules, le nez en sang." }, to: "P_pierre" } },
    ] },

  P_voix: { act: "P", title: "La note", place: "chateau",
    text: [
      "Tu poses la paume à plat sur le sol, comme les mains du mur. La note monte dans ton bras. Ce n'est pas une voix : ce sont deux. L'une est très grave, très lente, si lente qu'un mot doit lui prendre une saison. L'autre est plus haute, plus proche, et elle imite la première, mal, comme on imite quelqu'un pour se moquer de lui.",
      "C'est la seconde qui connaît ton nom. Elle le dit.",
      "Tu retires ta main.",
    ],
    choices: [{ label: "Aller vers la petite lumière", to: "P_pierre" }] },

  P_pierre: { act: "P", title: "La pierre fendue", place: "chateau",
    fx: { join: "pip", flag: "pip:rencontre" },
    text: [
      "La petite lumière a des yeux. Deux points sombres, ronds, curieux, au milieu d'une clarté de la taille d'une pomme. Elle te regarde de haut en bas, puis s'approche jusqu'à te frôler le nez.",
      "« Tu n'es pas un troll », dit-elle, avec une voix de grelot. « Je m'appelle Pip. Je crois. On m'appelle comme ça. Personne ne m'appelle, en fait. »",
      "Derrière Pip, au centre d'une salle ronde, une pierre dressée, haute comme deux hommes, fendue du haut en bas. Par la fente suinte une lumière violette, épaisse, qui ne ressemble à rien de ce que tu connais. Au pied de la pierre, un éclat s'est détaché. Il bat. Comme un pouls.",
      "« C'est chaud », dit Pip. « Ne le touche pas. Enfin, si tu veux. Moi je ne le touche pas. »",
    ],
    choices: [
      { label: "Ramasser l'éclat", tag: "Marque +1", stain: true, fx: { item: "eclat", mark: 1, flag: "choix:eclat=pris", conf: { pip: -10 } }, to: "P_eclat_pris" },
      { label: "Le laisser où il est", fx: { flag: "choix:eclat=laisse", conf: { pip: 10 } }, to: "P_eclat_laisse" },
    ] },

  P_eclat_pris: { act: "P", title: "L'éclat", place: "chateau",
    fx: { ep: ["histoire", 2500] },
    text: [
      "L'éclat est tiède dans ta paume, et il cesse de battre dès que tu le touches, comme un animal qui fait le mort. Puis il recommence, au rythme de ton propre cœur.",
      "Tu te sens plus léger. Plus fort. Les formes de la magie, qui d'ordinaire te résistent comme du bois humide, te semblent soudain sèches et prêtes à prendre feu. Sur le dos de ta main, une petite tache violette est apparue, de la taille d'une lentille.",
      "Pip s'est éloigné d'un pas. Il ne dit rien.",
    ],
    choices: [{ label: "Chercher une sortie", to: "P_sortie" }] },

  P_eclat_laisse: { act: "P", title: "La pierre garde son éclat", place: "chateau",
    fx: { ep: ["histoire", 2500] },
    text: [
      "Tu laisses l'éclat battre seul au pied de la pierre. Il a l'air de t'en vouloir, si une pierre peut en vouloir à quelqu'un.",
      "Pip tourne deux fois autour de ta tête, très vite. « Bien », dit-il. « Bien, bien. Je ne sais pas pourquoi c'est bien. Mais c'est bien. »",
    ],
    choices: [{ label: "Chercher une sortie", to: "P_sortie" }] },

  P_sortie: { act: "P", title: "Le ruisseau sous la crête", place: "chateau",
    fx: { flag: "P:sortie", quest: "P_pierre", reveal: "brumefeuille", ep: ["histoire", 3000] },
    text: [
      "Pip te guide par une galerie basse où coule un ruisseau souterrain. « Il sort de l'autre côté », dit-il. « Je suis déjà allé jusqu'au bout. Pas plus loin. Dehors, c'est grand. »",
      "Le ruisseau débouche sous un rocher, sur le versant opposé de la crête. Le jour, ou ce qu'il en reste, te fait cligner des yeux. En contrebas s'étend une plaine de champs et de haies, et plus loin, des marais noyés de brume où brille un clocher : Brumefeuille.",
      "Pip se pose sur ton épaule, tout léger. « Je viens avec toi », dit-il. « Si tu veux. Elle chante moins fort quand tu es là. »",
      "Tu as vu ce qui dort sous le château. Tu ne sais pas encore ce que c'est. Mais tu sais où la route continue.",
    ],
    choices: [{ label: "Faire le tour de la crête jusqu'au rempart", to: "P_abords" }] },

  B_pip_feu: { act: "I", title: "Au coin du feu", banter: true,
    text: [
      "Pip se pose sur une braise et la regarde de très près, sans se brûler. « Tu crois qu'on était quelque chose, avant ? Toi, tu étais un bébé. Moi, je ne sais pas. Peut-être que j'étais tenu. J'ai l'impression d'avoir été tenu. »",
      { if: { item: "eclat" }, text: "Il évite de regarder ton sac, là où bat l'éclat. « Ça bat plus vite la nuit », dit-il. « Tu as remarqué ? »" },
      { if: { not: { item: "eclat" } }, text: "« La pierre m'appelait, avant. Depuis qu'on est partis, elle se tait. C'est reposant. »" },
    ],
    choices: [
      { label: "« Tenu par qui ? »", fx: { conf: { pip: 5 }, flag: "pip:tenu" }, to: "@ret" },
      { label: "« Dors, Pip. Demain on marche. »", fx: { conf: { pip: 2 } }, to: "@ret" },
    ] },
};
