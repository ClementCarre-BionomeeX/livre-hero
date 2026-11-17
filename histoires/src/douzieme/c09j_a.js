// Le Douzième Coup · chapter 9, the one who passes, first half (act III, 18 June 541, three days before the Grand
// Midi). Into Méridane by the West Gate (`j:billet_ville`, or bought, or the Swallows' culvert, or Perrine's hotte),
// and the lower town: hub `K09j_quai`, on the quay of the Patiente, by the dial of the port. The inn À la Patiente
// (dame Tiennette, the bargemen: `j:sait_barges_nuit` ; Perrine told where the thing will stop:
// `monde:perrine_avertie` | `j:perrine_tue`), rue des Aiguilliers (maître Gobin ; Tiphaine behind the curtain:
// `j:tiphaine_atelier`, `j:tiphaine_temoin` ; `j:sait_douze_anneaux`), the tanners' street (Aubierge:
// `monde:tannerie_partage` | `j:tannerie_garde`), the bridge of the Three Candles (la Guigne: `j:guigne_alliee`,
// `j:guigne_quai`, `j:sait_dessous`, `j:sait_voiture`), Saint-Gnomon-le-Vieux and its brass meridian
// (`j:vu_meridienne`), the wax hall (item `pain_cire`), the quay of the Barges by day (`j:vu_caisses`), a letter on
// a fountain in a hand the hero knows (`j:lu_placard`). Noon on the quay (M09).
var P = {};
var LINE = { has: "monde:line_route" };
var TIPH = { has: "monde:tiphaine_partie" };
var DETTE = { has: "j:moineau_doit" };

Object.assign(P, {
  K09j_route: { act: "III", title: "La porte d'Occident, à prime", place: "foire", ambiance: "ville", takes: "morning",
    text: [
      "Tu as rebouché sous la dalle avant le jour. La Foire s'éveille mal, par morceaux : un volet, une toux, un coq dans un panier. Du côté de la ville, la porte d'Occident est encore fermée, et il y a déjà trois cents personnes devant.",
      "Prime sonne. C'est la Patiente qui le dit, par-dessus les murs, de six coups qui prennent leur temps ; et à la seconde où le sixième s'éteint, sans un cri, sans un ordre, les vantaux s'ouvrent. On n'a pas de consigne à donner aux portiers de Méridane. Ils ont une cloche.",
      "« Billet de logement », dit le sergent au premier. La journée commence.",
      { with: "perrine", text: "Perrine a sa hotte au dos et son air de tous les jours. « Moi, je passe : j'ai ma cousine, et le sergent m'achète un almanach tous les ans pour sa femme. Toi... » Elle te jauge. « Je peux dire que tu portes pour moi. Ça marche une fois sur deux. L'autre fois, on me garde la hotte en gage. »" },
      { if: LINE, text: "Line est restée au champ des charrettes, avec son père. Elle t'a fait jurer de regarder comment on remonte la grosse, et de le lui dire, *avec les dents des roues*." },
    ],
    choices: [
      { label: "Montrer ton billet", hide: { not: { has: "j:billet_ville" } }, to: "K09j_ville", big: true },
      { label: "Acheter un billet à l'homme du coin de la tour", hide: { has: "j:billet_ville" }, if: { gold: { min: 3 } }, why: "Il en veut trois écus.", fx: { gold: -3, flag: "j:billet_ville" }, to: "K09j_ville" },
      { label: "Laisser Perrine dire que tu portes pour elle", hide: { any: [{ has: "j:billet_ville" }, { not: { present: "perrine" } }] }, test: { dom: "social", diff: 0, label: "Avoir l'air d'une hotte", help: [{ if: { voie: "diseur" }, v: 10 }, { if: { has: "j:coche_perrine" }, v: 10 }] },
        win: { fx: { flag: "j:entre_hotte" }, to: "K09j_ville" }, lose: { fx: { gold: -1, flag: "j:entre_hotte" }, to: "K09j_ville" } },
      { label: "Chercher, le long du fossé, un gamin à tignasse de paille", hide: { any: [{ has: "j:billet_ville" }, { not: DETTE }] }, fx: { flag: "j:entre_egout" }, to: "K09j_egout" },
      { label: "Offrir tes bras à la barge de cire, qui entre par la voûte du canal", hide: { has: "j:billet_ville" }, test: { dom: "combat", diff: 0, label: "Décharger de la cire", help: [{ if: { voie: "tetu" }, v: 15 }, { if: { has: "j:coche_perche" }, v: 10 }] },
        win: { fx: { flag: "j:entre_cire" }, to: "K09j_ville" }, lose: { fx: { flag: "j:entre_cire", pv: -1 }, to: "K09j_ville" } },
    ] },
  K09j_egout: { act: "III", title: "Le trou du rempart", place: "foire", ambiance: "ville",
    text: [
      "Il est assis sur le bord du fossé, les pieds dans le vide, et il mange une pomme qui n'est pas à lui. Il te voit venir sans cesser de mâcher.",
      "« Le bouseux. » Moineau jette le trognon. « Tu veux entrer, t'as pas de papier. Ça, c'est pas la lame que je te dois : c'est gratis, c'est pour la politesse. La lame, tu la gardes pour quand ça comptera. »",
      "Il te mène à cent pas de la porte, là où le canal passe sous le mur par une voûte grillée. La grille a quatre barreaux. Le troisième tourne sur lui-même, sort de son plomb, et laisse un passage pour quelqu'un de mince, ou pour quelqu'un de moins mince qui veut bien y laisser de la peau. Il y a de l'eau jusqu'aux genoux, froide, et une odeur de tannerie qui vient de loin.",
      "« Tout droit. Tu sors sous un lavoir. Les laveuses te verront, elles diront rien : elles ont toutes un petit chez nous. » Il remet le barreau derrière toi, d'un quart de tour. Sa voix te suit sous la voûte. « Le pont des Trois-Chandelles ! Tu demandes la Guigne ! »",
    ],
    choices: [{ label: "Avancer sous la voûte", to: "K09j_ville", big: true }] },
  K09j_ville: { act: "III", title: "Méridane", place: "basse", ambiance: "ville",
    text: [
      { after: "j:entre_egout", text: "Tu sors sous un lavoir, entre deux rangs de femmes à genoux, qui te regardent émerger de l'eau, grelottant{e}, ton sac sur la tête, et reprennent leurs battoirs sans un mot." },
      { after: "j:entre_hotte", text: "Le sergent a regardé Perrine, puis toi, puis la hotte, et il a choisi de croire la plus bavarde des trois. Tu passes sous la voûte dans le sillage d'un almanach." },
      { after: "j:entre_cire", text: "Tu entres dans Méridane à reculons, un pain de cire de trente livres sur chaque épaule, au pas d'une barge. Personne ne demande de billet à un homme de peine : on lui demande de se ranger." },
      "Tu es dedans.",
      "La première chose, c'est le bruit, qui a changé d'espèce. La Foire criait. La ville bourdonne : quarante mille personnes entre des murs de pierre, des roues sur du pavé, des enseignes de fer qui grincent, de l'eau qui court sous les rues. La seconde, c'est l'odeur, tan, goudron, friture, cire chaude. La troisième te prend au premier carrefour, et tu t'arrêtes net au milieu de la chaussée, au risque d'une charrette.",
      "Il y a une horloge au coin de la rue. Il y en a une autre au coin suivant, sur une fontaine. Une troisième au pignon d'une auberge, une quatrième au-dessus d'un porche ; des cadrans de pierre, de fer peint, de faïence, à tous les carrefours, aussi loin que porte la vue. Et toutes marquent la même heure. Tu vérifies, de l'une à l'autre, en marchant, comme on compte sa monnaie. Elles sont d'accord à l'épaisseur d'une aiguille.",
      "À la Foire, quarante horlogers avaient quarante heures. Ici, une ville entière en a une seule. Des hommes en livrée grise passent avec une clef pendue au cou, lèvent le nez vers un cadran, le trouvent juste, et vont au suivant : les régleurs jurés. On ne se demande pas l'heure, à Méridane. On la reçoit, comme le jour.",
      "La rue descend. Au bout, il y a des mâts.",
    ],
    choices: [{ label: "Descendre vers les mâts", to: "K09j_quai", big: true }] },

  K09j_quai: { act: "III", title: "Le quai de la Patiente", backName: "le quai de la Patiente", place: "basse", ambiance: "eau", hub: true,
    text: [
      { first: true, text: "La ville basse est bâtie sur l'eau autant qu'à côté. La Thiorne, ici, n'a plus rien de la rivière d'Arvoise : large, lente, verte, coupée de canaux qui entrent sous les maisons. Des gabares à quai sur trois rangs. Des grues à roue, où tournent des hommes comme des écureuils. Des ponts bossus, chacun avec sa niche et sa lanterne." },
      { first: true, text: "Au milieu du quai, sur un socle de trois marches, un pilier de pierre porte un cadran à deux faces, l'une vers la ville, l'autre vers l'eau, pour les mariniers. C'est le cadran du port. Les gens d'ici disent *la Petite*, par rapport à l'autre, qu'on voit d'en bas dans toute sa hauteur : le Mont-Cadran monte derrière les toits, par étages, et la Tour est plantée dessus comme une aiguille dans une pelote." },
      { first: true, text: "D'ici, tu vois ses cadrans. Tu vois l'aiguille des minutes, longue comme un mât, faire son petit saut." },
      { again: true, text: "Le quai, les gabares, le cadran du port sur ses trois marches. Là-haut, la Tour." },
    ],
    choices: [
      { label: "L'auberge au pignon peint d'une cloche : *À la Patiente*", to: "K09j_patiente" },
      { label: "La rue des Aiguilliers, sous le rempart", to: "K09j_aiguilliers" },
      { label: "Le quartier de la Tannerie, d'où vient l'odeur", to: "K09j_tannerie" },
      { label: "Le pont des Trois-Chandelles", to: "K09j_pont3" },
      { label: "L'église Saint-Gnomon-le-Vieux", to: "K09j_paroisse" },
      { label: "La halle à la cire", to: "K09j_cire" },
      { label: "Le quai des Barges, derrière sa chaîne", to: "K09j_barges_jour" },
      { label: "Une fontaine, où des gens lisent quelque chose", hide: { seen: "K09j_fontaine" }, to: "K09j_fontaine" },
      { label: "Attendre midi au pied du cadran", hide: { seen: "K09j_midi" }, to: "K09j_midi", big: true },
      { label: "Laisser venir la brune", hide: { not: { seen: "K09j_midi" } }, to: "K09j_brune", big: true },
    ] },

  K09j_patiente: { act: "III", title: "À la Patiente", backName: "la salle de la Patiente", place: "basse", ambiance: "ville",
    text: [
      { first: true, text: "C'est une auberge de mariniers : trois étages qui penchent sur le quai, un pignon où l'on a peint une cloche bleue, une salle basse à poutres noires, longue comme une gabare. On y mange du poisson, on y boit du petit vin de Saint-Gnomon, et l'on s'y dispute en trois patois de rivière." },
      { first: true, text: "Derrière le comptoir, une femme de cinquante ans, large, lente, les manches roulées sur des bras de lavandière, essuie des pots sans regarder ses mains. Elle regarde la salle. Rien n'y bouge qu'elle ne l'ait vu." },
      { first: true, with: "perrine", text: "« Tiennette ! » Perrine a posé sa hotte et s'est jetée sur le comptoir, par-dessus. La grosse femme la reçoit, l'embrasse sur les deux joues, la repose, et lui dit, pour tout bonjour : « Tu as maigri, et tu as un associé. Lequel des deux est la cause de l'autre ? »" },
      { again: true, text: "La salle basse de la Patiente, ses poutres, son bruit. Dame Tiennette essuie ses pots." },
    ],
    choices: [
      { label: "Dame Tiennette", to: "K09j_tiennette" },
      { label: "La table des mariniers, au fond", hide: { seen: "K09j_mariniers" }, to: "K09j_mariniers" },
      { label: "Perrine, qui monte sa hotte à la soupente", hide: { any: [{ not: { present: "perrine" } }, { seen: "K09j_perrine_fin" }] }, to: "K09j_perrine_chambre" },
      { back: "K09j_quai" },
    ] },
  K09j_tiennette: { act: "III", title: "Dame Tiennette", place: "basse", ambiance: "ville", fx: { meet: "tiennette" },
    text: [
      { first: true, text: "« Tu regardes mon enseigne. Tout le monde la regarde. » Elle pose un pot, en prend un autre. « Mon grand-père a ouvert cette maison l'année où l'on a refondu le battant de la grosse. Il disait qu'un aubergiste et une cloche font le même métier : ils attendent, et ils disent l'heure aux gens qui ne la demandent pas. »" },
      { first: true, text: "« Je loge trente mariniers, six rouliers et ce que la Foire m'envoie. Je sais ce qui monte et ce qui descend sur cette rivière mieux que le fermier des octrois, qui me doit de l'argent. Si tu veux une soupe, c'est deux sous. Si tu veux savoir quelque chose, c'est selon. »" },
      { first: true, with: "perrine", text: "Elle te considère plus longuement, à cause de Perrine. « La petite ne s'associe pas. Elle a quitté trois patrons et un fiancé. Si elle te garde, c'est que tu ne lui coûtes rien ou que tu lui rapportes ce qui ne se compte pas. Dans les deux cas, tu manges à ma table. »" },
      { again: true, text: "Dame Tiennette essuie. « Selon », répète-t-elle, quand tu approches." },
    ],
    choices: [
      { label: "« Les barges de Hautgué. Qu'est-ce qu'elles emportent ? »", hide: { seen: "K09j_tiennette_barges" }, to: "K09j_tiennette_barges" },
      { label: "« On dit quoi, en bas, de ce qui se prépare en haut ? »", hide: { seen: "K09j_tiennette_haut" }, to: "K09j_tiennette_haut" },
      { back: "K09j_patiente" },
    ] },
  K09j_tiennette_barges: { act: "III", title: "Du foin jusqu'au plat-bord", place: "basse", ambiance: "ville",
    text: [
      "Dame Tiennette pose son torchon. C'est, chez elle, un signe de considération.",
      "« Monseigneur de Hautgué a un hôtel sur le quai des Barges, à cent pas d'ici. Une belle maison, trente fenêtres. Depuis la Saint-Médard, il la vide. De nuit. Les meubles d'abord, que tout le monde a vus. Puis des caisses, que personne n'a le droit de voir, et que mes mariniers chargent, puisqu'il faut bien des bras. »",
      "« Ils me disent le poids. Un marinier sait ce que pèse une caisse à la façon dont la gabare s'assoit. Du foin, à ce que porte l'étiquette. » Elle a un petit souffle par le nez. « Il n'y a que deux choses qui pèsent ce poids-là sous ce volume. L'une est le plomb. Monseigneur n'a aucune raison d'envoyer du plomb à Hautgué. »",
      { after: "j:sait_chasse", text: "Tu dis qu'il chasse, le matin du Grand Midi, avec des relais jusqu'à la mer. Elle hoche la tête, lentement. « Et son or l'attendra là-bas. Un homme qui met sa vaisselle à l'abri et lui-même à cheval, le même jour, sait de quel côté le toit va tomber. »" },
      "« Trois barges ce soir, à la marée de nuit. Les dernières. Après, la maison sera une coquille. » Elle reprend son torchon. « Je ne t'ai rien dit. Je te l'ai dit pour la petite. »",
    ],
    choices: [{ back: "K09j_tiennette" }] },
  K09j_tiennette_haut: { act: "III", title: "Ce qu'on dit en bas", place: "basse", ambiance: "ville",
    text: [
      "« En bas, on dit ce qu'on voit. » Elle compte sur ses doigts mouillés. « On voit que la petite princesse n'a plus paru au balcon depuis Pâques. On voit que la Reine descend à pied aux églises, ce qu'une reine ne fait que pour demander. On voit monter de la cire. On voit des fardiers bâchés prendre la rue du Cadran à trois heures du matin, avec de la paille aux roues, et les lanterniers payés pour regarder ailleurs. »",
      "« Et l'on trouve des papiers. Sur les fontaines, sous les portes. Écrits à la main, d'une écriture d'enfant sage. *On veut arrêter l'heure.* » Elle hausse une épaule. « Les gens les lisent, rient, et s'en servent pour allumer le feu. Arrêter l'heure ! Ici ! On leur a réglé la vie sur une cloche depuis quatre cents ans. Ils croiraient plus volontiers qu'on veut arrêter la rivière. »",
      "Elle te regarde. « Toi, tu ne ris pas. »",
    ],
    choices: [{ back: "K09j_tiennette" }] },
  K09j_mariniers: { act: "III", title: "La marée de nuit", place: "basse", ambiance: "ville",
    text: [
      "Ils sont six, à une table qui a la forme de leurs coudes. Des hommes d'eau douce, larges, lents, la figure cuite. Ils jouent aux dés un pichet que personne ne veut gagner, parce que le gagnant paie le suivant.",
      "Tu t'assois au bout du banc. On te laisse t'asseoir. On ne te parle pas.",
    ],
    choices: [
      { label: "Parler rivière : la *Diligente*, l'écluse, le patron Fiacre", test: { dom: "social", diff: 5, label: "Se faire accepter à une table", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { has: "j:ecluse_reparee" }, v: 20 }, { if: { has: "j:coche_perche" }, v: 10 }, { if: { present: "perrine" }, v: 5 }] },
        win: { fx: { flag: "j:sait_barges_nuit" }, to: "K09j_mariniers_fin" }, lose: { to: "K09j_mariniers_fin" } },
      { label: "Payer le pichet", if: { gold: { min: 1 } }, why: "Tu n'as pas un écu.", fx: { gold: -1, flag: "j:sait_barges_nuit" }, to: "K09j_mariniers_fin" },
    ] },
  K09j_mariniers_fin: { act: "III", title: "Simonnet, pilote", place: "basse", ambiance: "ville",
    text: [
      { after: "j:ecluse_reparee", before: "K09j_tiennette_barges", text: "« C'est toi, le pignon de l'écluse de Fer ? » Un vieux a levé le nez de ses dés. « Fiacre l'a conté hier soir. Il dit que tu as remis la crémaillère avec un bout de lime et que tu n'as rien demandé. Pousse-toi, Gros-Louis, fais de la place à l'horloger. »" },
      { after: "j:sait_barges_nuit", text: "On te verse un verre. La conversation revient d'elle-même à ce qui occupe la table : les trois barges du duc, ce soir. « Marée à dix heures, dit un grand roux, qui s'appelle Simonnet et qui pilote la première. On charge à la brune. On largue quand la Petite sonne dix. Le sergent La Verdure veut vingt bras de plus ; il en a recruté jusque sur le coche. Trente sous la nuit, et défense de lire. »" },
      { after: "j:sait_barges_nuit", text: "« Défense de lire ! » Le vieux crache un noyau. « À des mariniers ! Il a peur qu'on apprenne. » On rit. Simonnet ne rit pas. « Moi, je sais lire, dit-il. Juste assez. Sur la dernière caisse d'hier, sous *FOIN*, il y avait une autre étiquette, qu'on avait grattée. Il restait une couronne. »" },
      { before: "j:sait_barges_nuit", text: "Tu parles de la rivière. Ils t'écoutent en hommes qui en ont vu d'autres, et à la troisième phrase un grand roux te corrige le nom d'une écluse. La conversation se referme sur toi comme l'eau sur une pierre. Tu sauras au moins ceci, qu'ils disent entre eux sans se gêner : on charge ce soir pour le duc, à la brune, et l'on est payé pour ne pas savoir quoi." },
    ],
    choices: [{ back: "K09j_patiente" }] },
  K09j_perrine_chambre: { act: "III", title: "Troisième article de la règle", place: "basse", ambiance: "ville",
    text: [
      "La soupente est sous le toit, entre des sacs d'oignons. Une paillasse, une lucarne, par où l'on voit la Tour en entier, des fondations à la lanterne. Perrine a posé sa hotte. Elle s'assoit dessus, les mains entre les genoux. Elle ne compte rien.",
      { after: "j:perrine_attend", text: "« Là-bas, c'est ici. » Elle montre le plancher du doigt. « Tu m'as dit : je te le dirai là-bas, quand je saurai si cela peut se changer. Nous y sommes. J'ai attendu trois jours sans rien demander, ce qui ne m'était pas arrivé depuis ma première communion. Alors ? »" },
      { after: "j:perrine_prevenue", text: "« Hors des murs, le jour. Tu me l'as dit sur la route. J'ai compté : si je vends la veille, je perds douze écus, et je les perds de bon cœur. » Elle lève les yeux. « Hier, tu ne savais pas jusqu'où. Tu as passé une nuit à la Foire, et tu as ta figure des jours où tu sais. Alors ? »" },
      { after: "j:perrine_mentie", text: "« Tu m'as dit : rien. Sur la route. » Elle parle sans colère, ce qui est pire. « Depuis, je t'ai vu{e} regarder cette Tour comme on regarde un chien qui va mordre. Je t'ai vu{e} compter des coups de cloche. Je ne suis pas instruite, mais je sais lire une figure. Je te donne une seconde fois. Je n'en donne pas trois. »" },
      { before: ["j:perrine_attend", "j:perrine_prevenue", "j:perrine_mentie"], text: "« Tu sais des choses d'avance. Le pont, tu le savais. Je ne t'ai pas demandé comment : on ne demande pas à une poule d'où vient l'œuf. Mais nous voici dans la ville, la fête est dans trois jours, et tu regardes cette Tour comme on regarde un chien qui va mordre. Dis-moi ce qui vient. »" },
      "Par la lucarne, la grande aiguille fait son saut.",
    ],
    choices: [
      { label: "Tout lui dire : le onzième coup, la ville prise, et jusqu'où", fx: { flag: ["monde:perrine_avertie", "j:perrine_sait_tout"], conf: { perrine: 15 }, ep: ["perso", 600] }, to: "K09j_perrine_fin" },
      { label: "« Le vingt et un, à midi, sois de l'autre côté de la deuxième borne. Je ne peux pas te dire pourquoi. »", fx: { flag: "monde:perrine_avertie", conf: { perrine: 5 } }, to: "K09j_perrine_fin" },
      { label: "« Je me suis trompé{e}. Il ne vient rien. Vends ta foire. »", fx: { flag: "j:perrine_tue", conf: { perrine: -15 } }, to: "K09j_perrine_fin" },
    ] },
  K09j_perrine_fin: { act: "III", title: "Ce que ça fait de savoir", place: "basse", ambiance: "ville",
    text: [
      { after: "j:perrine_sait_tout", text: "Tu le dis. Tu commences par le milieu, parce qu'il n'y a pas de bon bout : onze coups, et le douzième qui ne vient pas. La ville prise. Les gens, l'eau, les oiseaux. Une lieue autour, la Foire dedans. Tu dis que tu le sais parce que tu es né{e} après, dans un pays qui s'est fait au bord de cela, et que tu es revenu{e} par une porte, dans une grange." },
      { after: "j:perrine_sait_tout", text: "Elle ne t'interrompt pas. Quand tu as fini, elle reste un long moment à regarder ses mains, qu'elle a ouvertes, les dix doigts écartés, et dont elle ne trouve pas l'emploi." },
      { after: "j:perrine_sait_tout", text: "« Tiennette, dit-elle. Les trente mariniers. Le sergent de la porte, et sa femme, qui veut son almanach. » Sa voix se casse sur le dernier mot ; elle la reprend. « Tu portes ça depuis la ferme. Tu as marché quatre jours à côté de moi avec ça dans le sac, et tu m'as acheté des rubans. » Elle se lève. Elle te prend la tête à deux mains, rudement, et te cogne le front contre le sien, une fois. « Bon. La deuxième borne. J'y serai, et j'y traînerai Tiennette par son tablier si elle fait des façons. Et toi, tu vas faire quoi, d'ici là ? » Tu dis : empêcher. Elle hoche la tête. « Alors je vends demain, je range après-demain, et le reste du temps je porte ta hotte. Pour changer. »" },
      { after: "monde:perrine_avertie", before: "j:perrine_sait_tout", text: "« La deuxième borne. » Elle le répète comme une adresse. « Pas la première. La deuxième. Donc la Foire est dedans. » Elle a compris plus que tu n'as dit : elle sait compter les lieues. Elle regarde par la lucarne. « Tu ne peux pas me dire pourquoi. Bon. Mon père disait : quand le passeur te crie de sauter, tu sautes, tu demanderas le motif sur la berge. » Elle se retourne. « J'y serai. Avec Tiennette, si je peux la décoller de son comptoir. Mais sur la berge, tu me dois le motif. Je l'inscris. »" },
      { after: "j:perrine_tue", text: "Elle te regarde. Elle te regarde assez longtemps pour que tu aies le temps de changer d'avis, et tu ne changes pas d'avis. « Bon », dit-elle. Elle se lève, rouvre sa hotte, en sort ses almanachs, et se met à les compter. « Vingt-deux. Vingt-trois. » Elle ne lèvera plus la tête tant que tu seras dans cette soupente. Tu descends l'escalier avec, dans la bouche, le goût exact de ce que tu viens de faire : elle sera sur la place, le jour, avec son drap rouge, parce que tu le lui as dit." },
    ],
    choices: [{ back: "K09j_patiente" }] },

  K09j_aiguilliers: { act: "III", title: "La rue des Aiguilliers", backName: "la rue des Aiguilliers", place: "basse", ambiance: "ville",
    text: [
      { first: true, text: "Elle est étroite, tordue, collée au rempart, qui lui prend le soleil jusqu'à midi. On y fait depuis toujours les petites choses de métal : aiguilles, épingles, hameçons, ressorts. Chaque porte a son établi sous la fenêtre et son ouvrier penché, une loupe à l'œil, de sorte que la rue entière a l'air de chercher quelque chose par terre." },
      { first: true, text: "À mi-rue, une boutique plus basse que les autres, à l'enseigne d'un sablier renversé. *Gobin, horloger. Répare ce que les autres rendent.*" },
      { again: true, text: "La rue des Aiguilliers, ses établis, ses dos courbés. L'enseigne au sablier renversé." },
    ],
    choices: [
      { label: "Pousser la porte de maître Gobin", to: "K09j_gobin" },
      { back: "K09j_quai" },
    ] },
  K09j_gobin: { act: "III", title: "Ce que les autres rendent", backName: "la boutique de maître Gobin", place: "basse", ambiance: "ville", fx: { meet: "gobin" },
    text: [
      { first: true, text: "Un grelot. Une pièce tapissée de pendules du plancher aux solives, toutes arrêtées, chacune avec une étiquette au cou : ce sont des malades. Au fond, sous une lampe à boule d'eau, un très vieux petit homme, le nez sur un mouvement, qui dit sans se retourner : « Posez-la sur le comptoir, je verrai jeudi. »" },
      { first: true, text: "Tu dis que tu n'apportes rien. Il se retourne. Il a soixante-dix ans, des yeux laiteux derrière des verres épais comme des culs de bouteille, et des doigts d'une finesse qui fait honte aux tiens. Il te regarde les mains avant la figure. « Du métier. Pas d'ici : vous tenez la brucelle comme on ne l'enseigne nulle part. De qui êtes-vous ? »" },
      { first: true, if: TIPH, text: "Derrière lui, un rideau de serge ferme l'arrière-boutique. Il a bougé." },
      { again: true, text: "Maître Gobin, sous sa boule d'eau, au milieu de ses pendules malades." },
      { again: true, if: TIPH, after: "K09j_tiphaine_gobin", text: "Derrière le rideau de serge, une lime va et vient, d'un mouvement très sûr." },
    ],
    choices: [
      { label: "« Il est venu hier une jeune fille, sous un fichu rouge. »", hide: { any: [{ not: TIPH }, { seen: "K09j_tiphaine_gobin" }] }, to: "K09j_tiphaine_gobin" },
      { label: "« Vous connaissez le Grand Maître ? »", hide: { seen: "K09j_gobin_coudrier" }, to: "K09j_gobin_coudrier" },
      { label: "« Et le sous-maître ? »", hide: { any: [{ not: { seen: "K09j_gobin_coudrier" } }, { seen: "K09j_gobin_aubespin" }] }, to: "K09j_gobin_aubespin" },
      { back: "K09j_aiguilliers" },
    ] },
  K09j_tiphaine_gobin: { act: "III", title: "Un neveu de province", place: "basse", ambiance: "ville", fx: { flag: "j:tiphaine_atelier" },
    text: [
      "Maître Gobin ôte ses lunettes, les essuie, les remet. « Une jeune fille. Non. Il m'est arrivé hier un neveu de province. Tiphain. Un garçon très doué, un peu mince de la voix. » Il a dit cela avec un sérieux parfait. Puis, vers le rideau : « Sors, mon neveu. C'est de la famille. »",
      "Le rideau s'ouvre. Elle a un tablier de cuir, une culotte, une chemise trop large, et ses cheveux courts qui rebiquent sous un bonnet d'ouvrier. Elle tient une lime. Elle a, sur le pouce, une coupure fraîche, dont elle est visiblement très fière.",
      "« Il m'a reconnue à la porte, dit-elle. À la façon de frapper. Il a dit : *tu frappes comme tu remontais les sonneries, trois coups et tu attends.* Il n'a pas dit que c'était grand dommage. » Elle regarde le vieil homme. « Il a dit : *il y a une cage à refaire, je n'y vois plus assez.* »",
      { after: "j:tiphaine_encouragee", text: "« Je lui ai montré mes mains. Comme vous aviez dit. » Elle les ouvre : l'encre rouge du scriptorium n'est pas tout à fait partie, et il y a déjà de la limaille dedans. « Il les a regardées longtemps. »" },
      "« Le troisième article, dit maître Gobin, défend de recevoir une femme. Il ne dit rien des neveux. J'ai soixante-dix ans, je n'y vois plus, et j'ai refusé pendant quatre ans la meilleure main qui ait passé cette porte, parce qu'un papier le voulait. Les Jurés ne descendent pas dans cette rue. S'ils y descendent, ils trouveront un garçon. »",
      "Tiphaine pose sa lime. « Je sais pourquoi vous êtes là. Vous allez à la colline. On vote dans trois jours, et le Grand Maître n'a pour lui qu'un chapitre copié par un apprenti. » Elle s'essuie les mains au tablier. « Moi, j'ai les quarante. Là. » Elle se touche le front. « Si quelqu'un, là-haut, veut entendre le Livre entier, de la bouche de quelqu'un qui l'a lu onze nuits, je monte. En culotte ou en voile, comme ils voudront. »",
    ],
    choices: [
      { label: "« Je le dirai au Grand Maître. Tenez-vous prête. »", fx: { flag: "j:tiphaine_temoin", ep: ["histoire", 400] }, to: "K09j_gobin" },
      { label: "« Restez derrière ce rideau. Là-haut, on a déjà envoyé un homme prendre le Livre. »", to: "K09j_gobin" },
    ] },
  K09j_gobin_coudrier: { act: "III", title: "Barnabé", place: "basse", ambiance: "ville",
    text: [
      "« Barnabé ? » Le vieil homme a un rire de crécelle. « Nous avons fait notre apprentissage sur le même banc. Il y a cinquante ans. Il avait déjà cette figure de porte fermée. Moi, j'étais le plus adroit ; lui, le plus têtu. On a donné la maîtrise au têtu, et l'on a bien fait : pour garder une chose pendant quarante ans sans y toucher, l'adresse est un défaut. »",
      "« Il descend ici deux fois l'an, à pied, sans sa chaîne. Il m'apporte ce que la colline ne sait plus réparer, et que la colline ne veut pas qu'on sache qu'elle ne sait plus. Nous ne parlons pas. Nous travaillons. C'est un homme qui n'a jamais eu qu'une idée, qui est que la Tour n'appartient à personne, pas même à lui. Les gens à une seule idée sont très ennuyeux à table, et très précieux le jour où tout le monde en change. »",
      "Il reprend sa loupe. « Il a une serrure à son cabinet, là-haut, que j'ai faite. Douze anneaux, un pour chaque Heure. Il m'a demandé qu'on ne puisse pas l'ouvrir en sachant seulement des chiffres : il fallait savoir *quelque chose*. Je lui ai fait cela. Je ne vous dirai pas quoi. Je l'ai oublié exprès, le lendemain. »",
    ],
    choices: [{ label: "L'écouter jusqu'au bout", fx: { flag: "j:sait_douze_anneaux" }, to: "K09j_gobin" }] },
  K09j_gobin_aubespin: { act: "III", title: "Le petit Melchior", place: "basse", ambiance: "ville",
    text: [
      "La loupe redescend.",
      "« Melchior. » Il le dit sans rire. « On l'a trouvé à la porte de la Guilde, dans un panier, il y a trente ans, un matin de Grand Midi. On en a fait un enfant de la maison. À six ans, il démontait les serrures des dortoirs. À dix, il a demandé pourquoi la Chambre basse était fermée, et on lui a répondu : parce que. Il n'a jamais accepté cette réponse-là. Il en a fait le tour pendant vingt ans. »",
      "« C'est la meilleure tête que la colline ait eue depuis les Fondateurs. Barnabé le sait ; il l'a formé. Il l'aime, à sa façon de porte. Et il a commis avec lui la seule faute que je lui connaisse : il lui a tout appris, sauf pourquoi l'on s'arrête. » Maître Gobin tapote son établi. « Un enfant à qui l'on a dit *parce que* devient un homme qui veut voir. Vous en ferez ce que vous pourrez. Moi, je répare ce qu'on me rend. »",
      { after: "j:aubespin_connait", text: "Tu penses à un papillon, dans une cuve, et à la voix qui demandait à une petite fille ce qu'elle en avait pensé. Il voulait vraiment le savoir." },
    ],
    choices: [{ back: "K09j_gobin" }] },

  K09j_tannerie: { act: "III", title: "La Tannerie", backName: "la rue des Tanneurs", place: "basse", ambiance: "ville",
    text: [
      { first: true, text: "On y arrive par le nez. Un bras de rivière, large de trois toises, coule entre deux rangs de maisons à galeries, et il change de couleur à chaque porte : brun sous les cuves à tan, rouge sous celles de garance, d'un bleu d'encre plus bas. Des peaux pendent aux galeries, par centaines, comme un linge de géants." },
      { first: true, text: "Les gens d'ici ont les bras teints jusqu'au coude et la voix forte de ceux qui travaillent dans le bruit de l'eau. Ils te regardent passer sans hostilité. Ils regardent surtout tes souliers, qu'ils trouvent mal tannés." },
      { first: true, text: "Dans la rue, sur quatre seuils, il y a une femme assise, les mains vides, un fichu noir sur la tête. Aucune des quatre ne travaille." },
      { again: true, text: "La rivière de trois couleurs, les peaux pendues. Les seuils aux fichus noirs." },
    ],
    choices: [
      { label: "Chercher la porte d'Aubierge", hide: { any: [{ not: { seen: "K08j_mere" } }, { seen: "K09j_aubierge" }] }, to: "K09j_aubierge" },
      { label: "T'asseoir un moment sur le parapet, en face des quatre seuils", hide: { any: [{ seen: "K08j_mere" }, { seen: "K09j_seuils" }] }, to: "K09j_seuils" },
      { back: "K09j_quai" },
    ] },
  K09j_seuils: { act: "III", title: "Quatre fichus noirs", place: "basse", ambiance: "ville",
    text: [
      "Tu t'assois. Une tanneuse, qui rince une peau à tes pieds, suit ton regard.",
      "« La langueur. Il y en a quatre dans la rue, depuis Pâques. Des petits de cinq, six ans. Ça leur prend les ongles, puis les lèvres, et ils dorment. » Elle tord la peau, d'un coup de reins. « Là-haut, ils en ont une aussi, à ce qu'on dit. Pour celle-là, on a mis un placard à la porte de la ville, et cent écus d'or. Pour les nôtres, il vient un homme en robe noire, le samedi, qui vend de l'eau grise. »",
      "Elle étale la peau sur le parapet. « Les mères ne travaillent plus. On leur fait leur part, entre voisines. Ce n'est pas de la charité : c'est qu'on ne sait pas laquelle de nous sera la cinquième. »",
      { after: "monde:su:remede", text: "Tu sais un nom. Tu le dis, à cette femme aux bras rouges, parce qu'elle est là : le fièvrier, un arbre des îles, que les sœurs de Sainte-Aure font demander aux navires. Elle t'écoute en rinçant. « Un an, alors. » Elle ne se moque pas. « Je le dirai aux quatre. Ça leur fera un mot à garder. »" },
    ],
    choices: [{ back: "K09j_tannerie" }] },
  K09j_aubierge: { act: "III", title: "Le premier bol", place: "basse", ambiance: "ville",
    text: [
      { after: "j:ecorce_aubierge", text: "Elle t'ouvre avant que tu aies frappé : elle guettait la rue. Elle a les yeux rouges d'une nuit sans dormir, et quelque chose de changé dans la tenue, comme une personne qui porte un seau plein et qui a peur de le renverser." },
      { after: "j:ecorce_aubierge", text: "Dans la pièce du fond, une petite fille est couchée sur un lit clos, les mains à plat sur la couverture. Les ongles sont gris. Sur le coffre, un bol, vide, et une râpe à muscade où il reste une poussière rousse. « Elle a bu le premier hier soir. Elle l'a recraché. Je lui ai fait boire le second. Elle a pleuré, tellement c'est amer. » Aubierge se tord les mains. « Elle n'avait plus pleuré depuis la Pentecôte. Elle n'en avait plus la force. »" },
      { after: "j:ecorce_aubierge", text: "Elle te fait asseoir. Elle reste debout. « Les trois autres le savent. Je n'ai pas pu me taire : nous sommes quatre à veiller sur les mêmes seuils depuis Pâques, on ne cache pas une chose pareille. Elles sont venues ce matin. Elles ne m'ont rien demandé. Elles se sont assises là, toutes les trois, et elles ont regardé le bol. »" },
      { after: "j:ecorce_aubierge", text: "« Vous m'avez dit : trois semaines, sans en manquer un. Il y en a pour une. Je sais compter. » Sa voix tremble. « Si je partage en quatre, elles auront cinq jours chacune. Dites-moi ce que je dois faire. C'est vous qui me l'avez donnée. »" },
      { before: "j:ecorce_aubierge", text: "Elle t'ouvre, te reconnaît, et son visage fait un effort de politesse. « Vous étiez du coche, avec la marchande aux rubans. Entrez. » Dans la pièce du fond, une petite fille dort sur un lit clos, les mains à plat, les ongles gris." },
      { before: "j:ecorce_aubierge", after: "monde:remede_mere", text: "« Je l'ai dit aux trois autres. Le nom de l'arbre. Nous avons fait écrire une lettre par le curé de Saint-Gnomon, pour un capitaine de Hautgué qui est le cousin d'une de nous. » Elle te regarde avec une sorte de reconnaissance fatiguée. « Un an. Elle n'a pas un an. Mais il y en aura d'autres après elle, dans cette rue, et celles-là auront l'arbre. On me dit que c'est une consolation. J'essaie. »" },
      { before: ["j:ecorce_aubierge", "monde:remede_mere"], text: "Vous restez un moment de chaque côté du lit. Elle ne te demande pas pourquoi tu es venu{e}. Elle a pris l'habitude des gens qui viennent, s'assoient et ne peuvent rien." },
    ],
    choices: [
      { label: "« Gardez tout pour elle. Une enfant sauvée vaut mieux que quatre qu'on retarde. »", hide: { not: { has: "j:ecorce_aubierge" } }, fx: { flag: "j:tannerie_garde" }, to: "K09j_aubierge_fin" },
      { label: "« Je ne choisirai pas pour vous. Je vous ai dit ce que l'infirmière m'a dit. »", hide: { not: { has: "j:ecorce_aubierge" } }, fx: { flag: "monde:tannerie_partage" }, to: "K09j_aubierge_fin" },
      { back: "K09j_tannerie" },
    ] },
  K09j_aubierge_fin: { act: "III", title: "L'arithmétique de sœur Radegonde", place: "basse", ambiance: "ville",
    text: [
      { after: "j:tannerie_garde", text: "Elle ferme les yeux. Elle attendait qu'on le lui dise, pour ne pas l'avoir décidé seule. « Tout pour elle. » Elle le répète, et elle regarde la porte, derrière laquelle trois femmes sont assises. « Je le leur dirai moi-même. Je leur dirai que c'est vous. Elles vous haïront un peu moins que moi. » Elle serre la râpe dans son tablier. « Si la mienne se lève, à la Saint-Jean, j'irai laver chez les trois autres jusqu'à la fin de mes jours. Appelez cela une dette : je sais payer les dettes. »" },
      { after: "monde:tannerie_partage", text: "Elle te regarde longtemps. Puis elle hoche la tête, lentement, comme on accepte un poids qu'on avait reconnu pour sien. « Vous avez raison. Ce n'est pas à vous. »" },
      { after: "monde:tannerie_partage", text: "Elle va à la porte, et l'ouvre. Les trois sont là, sur le seuil d'en face, sur le parapet, debout dans la rue. Elle rentre, prend la râpe, prend l'écorce, et la pose sur la table, au milieu. Puis elle va chercher un couteau." },
      { after: "monde:tannerie_partage", text: "Tu sors pendant qu'elles entrent. Tu sais le compte. Sœur Radegonde te l'a fait, tout haut, sans pitié, parce que c'est son métier : *si je partage, j'en soigne deux pendant dix jours, et je les enterre ensemble.* Tu te demandes, en remontant la rue de trois couleurs, si elle savait tout, et si elle avait jamais vu quatre femmes autour d'une table." },
    ],
    choices: [{ back: "K09j_tannerie" }] },

  K09j_pont3: { act: "III", title: "Le pont des Trois-Chandelles", backName: "le pont des Trois-Chandelles", place: "basse", ambiance: "eau",
    text: [
      { first: true, text: "Un vieux pont bossu, à trois arches, sur le plus sale des canaux. Dans le parapet, une niche, et dans la niche trois chandelles de suif, allumées en plein jour, devant une sainte si usée qu'on ne sait plus laquelle. Des passants y laissent un liard, sans s'arrêter, en gens qui paient un péage." },
      { first: true, text: "Sous l'arche du milieu, hors de l'eau, il y a une banquette de pierre, large de deux toises. On y descend par des crampons de fer. D'en haut, on ne voit que de l'ombre, et dans l'ombre, par moments, le blanc d'un œil." },
      { first: true, if: DETTE, text: "*Tu demandes la Guigne, et tu dis : Moineau me doit une lame.*" },
      { again: true, text: "Le pont bossu, la niche, les trois chandelles. Dessous, l'ombre a des yeux." },
    ],
    choices: [
      { label: "Descendre par les crampons", to: "K09j_guigne" },
      { back: "K09j_quai" },
    ] },
  K09j_guigne: { act: "III", title: "La Guigne", backName: "sous le pont", place: "basse", ambiance: "eau", fx: { meet: "guigne" },
    text: [
      { first: true, text: "Ils sont une trentaine, là-dessous, de cinq à quinze ans, assis, couchés, accroupis sur la banquette, entre des paillasses et des paniers. Personne ne bouge quand tes pieds touchent la pierre. Trente paires d'yeux te pèsent, te déshabillent, et font l'addition." },
      { first: true, text: "Au fond, adossée à la pile, une fille de seize ans, maigre, noire de cheveux, se cure les ongles avec une lame de rasoir montée dans une bague. Elle a la paupière gauche qui tombe, à demi fermée sur l'œil, ce qui lui donne l'air de viser. Elle ne lève pas la tête." },
      { first: true, text: "« Je suis née un vendredi treize, pendant un orage, d'une mère qui en est morte. La sage-femme a dit : celle-là aura la guigne. On m'a appelée comme ça. » Elle souffle sur sa lame. « Il y a eu erreur sur la personne. Je l'ai pas, la guigne. Je la porte aux autres. C'est d'un bien meilleur rapport. »" },
      { first: true, if: DETTE, text: "Tu dis la phrase. Elle lève enfin son œil ouvert. « Moineau s'est fait prendre. Par toi. Et tu l'as rendu. » Elle regarde, quelque part dans l'ombre, une tignasse de paille qui se fait petite. « Alors il te doit, et quand un des miens doit, c'est moi qui paie. Une lame. Tu choisis laquelle. Choisis bien, t'en as qu'une. »" },
      { first: true, after: "j:hirondelles_battues", before: "j:moineau_doit", text: "« C'est toi qui as cogné Gros-Jacquot et le Bancal, à la Foire. » Elle lève son œil ouvert, sans rancune. « Ils l'avaient cherché. Je leur avais dit de pas sortir le bâton pour un sac de papier. Tu me dois rien, je te dois rien. Si tu veux quelque chose, c'est au tarif. »" },
      { first: true, before: ["j:moineau_doit", "j:hirondelles_battues"], text: "« Je te connais pas. » Elle lève son œil ouvert. « T'es descendu{e} ici sans qu'on t'ait poussé{e}, ce qui est bête ou courageux. Dans les deux cas, c'est au tarif. »" },
      { again: true, text: "La Guigne, adossée à sa pile, sa bague à la main. Les petits te font place sur la banquette." },
    ],
    choices: [
      { label: "« Je veux entrer ce soir sur le quai des Barges, sans passer la chaîne. »", hide: { has: "j:guigne_quai" }, if: { any: [{ all: [DETTE, { not: { has: "j:lame_payee" } }] }, { has: "j:guigne_alliee" }, { gold: { min: 2 } }] }, why: "Elle en veut deux écus, ou la lame que Moineau te doit.", to: "K09j_guigne_quai" },
      { label: "« Il y a une voiture noire, sans armes. Je veux savoir où elle couche. »", hide: { has: "j:sait_voiture" }, if: { any: [{ all: [DETTE, { not: { has: "j:lame_payee" } }] }, { has: "j:guigne_alliee" }, { gold: { min: 2 } }] }, why: "Elle en veut deux écus, ou la lame que Moineau te doit.", to: "K09j_guigne_voiture" },
      { label: "« On dit que vous connaissez les dessous de la ville. »", hide: { has: "j:sait_dessous" }, if: { any: [{ all: [DETTE, { not: { has: "j:lame_payee" } }] }, { has: "j:guigne_alliee" }, { gold: { min: 2 } }] }, why: "Elle en veut deux écus, ou la lame que Moineau te doit.", to: "K09j_guigne_dessous" },
      { label: "Une petite, sur une paillasse, qui a les ongles gris", hide: { seen: "K09j_guigne_petite" }, to: "K09j_guigne_petite" },
      { back: "K09j_pont3" },
    ] },
  K09j_guigne_quai: { act: "III", title: "Par le bief des Teinturiers", place: "basse", ambiance: "eau",
    text: [
      "« Le quai des Barges. » Elle siffle entre ses dents. « Tu vas voler le duc. Non : t'as pas la figure. Tu vas regarder le duc voler. C'est plus dangereux, les gens te pardonnent moins. »",
      "« Il y a un bief qui sort de la Tannerie et qui passe sous l'hôtel de Hautgué. Il débouche sous le quai, entre deux pieux, derrière la troisième barge. L'eau est rouge, à cause de la garance. On y a de quoi respirer jusqu'au menton, sauf à la marée, et la marée est à dix heures : tu sors avant, ou tu sors pas. » Elle fait un signe. Deux petits se lèvent. « Le Furet et la Puce te mèneront à la brune. Ils t'attendront au bout. Si ça crie là-haut, ils t'attendront pas. »",
    ],
    choices: [
      { label: "Payer d'une lame : celle que Moineau te doit", hide: { any: [{ not: DETTE }, { has: "j:lame_payee" }, { has: "j:guigne_alliee" }] }, fx: { flag: ["j:guigne_quai", "j:lame_payee"] }, to: "K09j_guigne" },
      { label: "Payer deux écus", hide: { has: "j:guigne_alliee" }, if: { gold: { min: 2 } }, why: "Tu n'as pas deux écus.", fx: { gold: -2, flag: "j:guigne_quai" }, to: "K09j_guigne" },
      { label: "« Entre nous, on ne compte plus. »", hide: { not: { has: "j:guigne_alliee" } }, fx: { flag: "j:guigne_quai" }, to: "K09j_guigne" },
    ] },
  K09j_guigne_voiture: { act: "III", title: "Rue du Puits-d'Or", place: "basse", ambiance: "eau",
    text: [
      "« Noire, sans armes, deux chevaux bais, un cocher long qui met des chaussons. » Elle n'a pas eu à réfléchir. « Elle est à la colline. Elle couche pas à la colline. Elle couche rue du Puits-d'Or, dans la remise d'un loueur, sous un autre nom, pour que le portier des Jurés puisse dire qu'il l'a pas vue sortir. »",
      { after: "j:cocher_pris", text: "« Le cocher long, on l'a plus vu depuis trois jours. Y a un petit rouquin à sa place, qui sait pas tenir ses guides. » Tu sais où est le cocher long : dans un cellier, à neuf lieues, avec un confesseur." },
      "« Elle est sortie quatre nuits sur six, depuis la Saint-Médard. Toujours le même tour : la colline, la rue du Cadran, la porte basse de la Tour. Elle y reste jusqu'à matines. Mes petits la suivent pour le plaisir ; elle a un marchepied où l'on tient à deux. » Elle te regarde de son œil ouvert. « Ces nuits-là, y a un truc. Les chandelles de la niche. Elles font un saut. Je sais pas le dire autrement. On les regarde, et d'un coup elles ont un doigt de moins. »",
    ],
    choices: [
      { label: "Payer d'une lame : celle que Moineau te doit", hide: { any: [{ not: DETTE }, { has: "j:lame_payee" }, { has: "j:guigne_alliee" }] }, fx: { flag: ["j:sait_voiture", "j:lame_payee"] }, to: "K09j_guigne" },
      { label: "Payer deux écus", hide: { has: "j:guigne_alliee" }, if: { gold: { min: 2 } }, why: "Tu n'as pas deux écus.", fx: { gold: -2, flag: "j:sait_voiture" }, to: "K09j_guigne" },
      { label: "« Entre nous, on ne compte plus. »", hide: { not: { has: "j:guigne_alliee" } }, fx: { flag: "j:sait_voiture" }, to: "K09j_guigne" },
    ] },
  K09j_guigne_dessous: { act: "III", title: "Ce qui passe sous la ligne", place: "basse", ambiance: "eau",
    text: [
      "« Les dessous. » Pour la première fois, elle range sa lame. « Y a les égouts, que tout le monde sait. Y a les biefs. Et y a le Droit. »",
      "« C'est un boyau. Maçonné, voûté, haut comme un homme, sec. Il part de sous Saint-Gnomon-le-Vieux, et il monte tout droit, sans un coude, sous les rues, sous les maisons, sous le rempart de la Ville-Haute. Tout droit, tu m'entends : il passe sous des caves sans les saluer. Celui qui l'a creusé se moquait bien de ce qu'il y avait dessus. » Elle trace une ligne dans la poussière de la banquette. « On l'a suivi une fois, à six, avec des chandelles. On a marché une heure. Au bout, y a une grille de bronze, grosse comme mon bras, et derrière la grille on entend. »",
      "« On entend quoi ? »",
      "« Un pas. » Elle a baissé la voix, et les petits, autour, se sont tus. « Un seul. Lent. Très lourd. Comme quelqu'un qui marcherait sur place, dans une cave, depuis toujours. Boum. Et puis rien, le temps de compter quatre. Et boum. On est redescendus en courant. J'y remets pas les pieds pour dix écus. Mais je sais où est l'entrée, et pour ce prix-là je te la montre. »",
    ],
    choices: [
      { label: "Payer d'une lame : celle que Moineau te doit", hide: { any: [{ not: DETTE }, { has: "j:lame_payee" }, { has: "j:guigne_alliee" }] }, fx: { flag: ["j:sait_dessous", "j:lame_payee", "monde:lu:droit"], ep: ["histoire", 400] }, to: "K09j_guigne" },
      { label: "Payer deux écus", hide: { has: "j:guigne_alliee" }, if: { gold: { min: 2 } }, why: "Tu n'as pas deux écus.", fx: { gold: -2, flag: ["j:sait_dessous", "monde:lu:droit"], ep: ["histoire", 400] }, to: "K09j_guigne" },
      { label: "« Entre nous, on ne compte plus. »", hide: { not: { has: "j:guigne_alliee" } }, fx: { flag: ["j:sait_dessous", "monde:lu:droit"], ep: ["histoire", 400] }, to: "K09j_guigne" },
    ] },
  K09j_guigne_petite: { act: "III", title: "La sœur de Moineau", place: "basse", ambiance: "eau",
    text: [
      "Elle a quatre ans, peut-être. On l'a couchée à l'écart, sur la meilleure paillasse, sous une couverture de cheval. Elle dort. Ses mains, sur la laine, ont les ongles gris.",
      "Moineau est assis à côté, les genoux au menton. Il ne fait plus le malin. « C'est ma sœur. Elle s'appelle Brindille. Elle dort depuis l'Ascension. » Il te regarde par en dessous. « Le sac, hier. C'était pour le médecin. Il veut trois écus pour descendre sous un pont. »",
      "La Guigne est venue, sans bruit. Elle se tient derrière toi. « On en a enterré deux cet hiver. On les met dans la rivière, la nuit, avec une pierre ; on n'a pas de quoi pour le curé. » Sa voix est plate. « Là-haut, pour la leur, ils brûlent une barge de cierges par semaine. »",
      { after: "monde:su:remede", text: "Tu dis le nom. Le fièvrier ; un arbre des îles ; une écorce, bouillie, trois semaines. Tu dis qu'il n'y en a pas un copeau dans le royaume, que les sœurs de Sainte-Aure en font venir, qu'il faudra un an." },
      { after: "monde:su:remede", text: "La Guigne ne dit rien pendant le temps d'un Pater. « Un an. » Elle regarde la petite. « Elle l'a pas. » Puis elle te regarde, toi, de son œil ouvert, et pour la première fois elle ne vise pas. « Mais t'es descendu{e} sous un pont pour nous le dire, à nous. Personne nous dit rien, à nous. On nous dit *circulez*. » Elle crache dans le canal. « Ce que tu demanderas ici, tu l'auras. Je compte plus. »" },
      { before: "monde:su:remede", text: "Tu n'as rien à leur donner. Tu restes un moment accroupi{e} près de la paillasse. Moineau te sait gré de n'avoir rien dit." },
    ],
    choices: [
      { label: "Border la couverture sur les petites mains", hide: { not: { has: "monde:su:remede" } }, fx: { flag: "j:guigne_alliee", regard: { guigne: "redevable" }, ep: ["perso", 400] }, to: "K09j_guigne" },
      { back: "K09j_guigne" },
    ] },

  K09j_paroisse: { act: "III", title: "Saint-Gnomon-le-Vieux", backName: "Saint-Gnomon-le-Vieux", place: "basse", ambiance: "temple",
    text: [
      { first: true, text: "C'est la plus vieille église de la ville, et elle est petite, sombre, enfoncée de six marches dans le sol, comme une chose sur laquelle la rue a monté. On y loge, pendant la fête, les pèlerins à billet : il y a de la paille dans les bas-côtés et un bedeau à trousseau qui compte les têtes." },
      { first: true, text: "Dans le dallage de la nef, il y a une ligne. Une règle de laiton, large de deux doigts, encastrée dans la pierre, qui traverse l'église de biais, du portail au chevet, sans égard pour les piliers. Elle est graduée. Tout en haut de la voûte, un trou gros comme une noisette laisse tomber une pièce de soleil, qui se promène sur les dalles." },
      { again: true, text: "La vieille église, sa paille, son bedeau. La règle de laiton brille dans le dallage." },
    ],
    choices: [
      { label: "Suivre la règle de laiton", hide: { seen: "K09j_meridienne" }, to: "K09j_meridienne" },
      { back: "K09j_quai" },
    ] },
  K09j_meridienne: { act: "III", title: "La Méridienne", place: "basse", ambiance: "temple", fx: { flag: "j:vu_meridienne", ep: ["histoire", 300] },
    text: [
      "Tu la suis, le nez à terre, comme tu as suivi toute ta vie le trajet d'un ressort. Des traits gravés, des chiffres romains, des signes : le Bélier, le Taureau. À chaque midi de l'année, la pièce de soleil vient couper cette ligne en un point, plus près du portail l'hiver, plus près de l'autel l'été. C'est un cadran, long de trente pas, sur lequel le soleil lui-même écrit la date.",
      "Le bedeau t'a rejoint{e}, faisant sonner ses clefs. Il aime qu'on regarde sa ligne. « C'est d'ici que tout part. Les Fondateurs ont posé cette règle avant la première pierre de la Tour. Ils ont attendu un midi, ils ont marqué, et ils ont tiré le trait : au nord, jusqu'au Mont-Cadran ; au couchant, de borne en borne, jusqu'au bout du royaume. Votre route royale, c'est cette ligne-là, qui est sortie par le portail. »",
      "Tu regardes vers le chevet. La règle de laiton n'y finit pas. Elle passe sous la marche de l'autel, et tu la retrouves derrière, où elle bute contre le mur du fond. Là, on a scellé dans la pierre une plaque de bronze, ronde, large comme une meule, avec un anneau. Autour de l'anneau, des lettres presque effacées.",
      "*Sous la ligne va ce qui porte l'heure.*",
      "« Ça, dit le bedeau, c'est la cave des Fondateurs. Personne ne l'a levée de mémoire d'homme. Il faudrait un palan. Il paraît qu'il y a un escalier, et au bout de l'escalier, rien : un couloir, qui s'en va tout droit sous la ville. Vers où, je vous le demande. » Il rit, et remonte ses clefs. « Les Fondateurs aimaient les lignes droites. »",
      { after: "j:sait_dessous", text: "*Il part de sous Saint-Gnomon-le-Vieux, et il monte tout droit.* La Guigne t'a parlé d'un boyau, d'une grille de bronze, et d'un pas. Tu regardes la plaque. Tu sais vers où." },
    ],
    choices: [{ back: "K09j_paroisse" }] },

  K09j_cire: { act: "III", title: "La halle à la cire", place: "basse", ambiance: "ville",
    text: [
      { first: true, text: "Une halle de bois, ouverte sur le canal, où l'on décharge les pains de cire qui viennent des ruchers de la plaine. Ils sont jaunes, ronds, gros comme des meules de fromage, et la halle entière sent le miel et l'église. Des ciergiers en tablier blanc les pèsent, les marquent, les font rouler vers des charrettes aux armes du Palais." },
      { first: true, text: "« Tout pour là-haut », dit un peseur, qui a vu ton œil. « Depuis la Saint-Médard, le Palais nous prend la halle entière. Les paroisses se plaignent : on dit la messe à la chandelle de suif, à Méridane, la semaine du Grand Midi ! Deux mille cierges par nuit. Ils éclairent une chambre comme on éclaire une cathédrale. »" },
      { first: true, after: "K08j_anthelme_mal", text: "*On a remarqué que la lumière le retient un peu.* Tu sais quelle chambre." },
      { again: true, text: "La halle, ses pains jaunes, son odeur de miel. Les charrettes du Palais attendent." },
    ],
    choices: [
      { label: "Acheter une livre de cire, coupée au fil", hide: { item: "pain_cire" }, if: { gold: { min: 1 } }, why: "Tu n'as pas un écu.", fx: { gold: -1, item: "pain_cire" }, to: "K09j_cire" },
      { label: "Ramasser les rognures, sous la table du peseur", hide: { any: [{ item: "pain_cire" }, { not: { has: "j:entre_cire" } }] }, fx: { item: "pain_cire" }, to: "K09j_cire" },
      { back: "K09j_quai" },
    ] },
  K09j_barges_jour: { act: "III", title: "Le quai des Barges", backName: "la chaîne du quai", place: "basse", ambiance: "eau",
    text: [
      { first: true, text: "Le quai des Barges est un bassin à part, fermé du côté de la ville par une chaîne à hauteur de poitrine et deux hommes à rubans verts. Derrière, une grande maison à trente fenêtres, dont vingt-huit ont leurs volets clos : l'hôtel de Hautgué. Devant, à quai, trois gabares longues, pontées, bâchées, aux couleurs du duc." },
      { first: true, text: "Elles sont vides, et hautes sur l'eau. On voit, sur leurs flancs, la ligne noire où la rivière montait hier, à deux pieds au-dessus de la ligne d'aujourd'hui. Ces bateaux-là ont l'habitude de s'asseoir." },
      { first: true, after: "j:engage_barges", text: "Tu as dans ta poche un jeton de cuivre percé, marqué d'un H. *À la brune. Tu demandes le sergent La Verdure.* La chaîne, ce soir, se lèvera pour toi." },
      { again: true, text: "La chaîne, les rubans verts, les trois gabares vides. L'hôtel aux volets clos." },
    ],
    choices: [
      { label: "Flâner le long de la chaîne, en comptant les fenêtres", hide: { seen: "K09j_barges_guet" }, test: { dom: "discretion", diff: 5, label: "Regarder sans être regardé", help: [{ if: { voie: "leste" }, v: 15 }, { if: { present: "perrine" }, v: 10 }] },
        win: { fx: { flag: "j:vu_caisses" }, to: "K09j_barges_guet" }, lose: { to: "K09j_barges_guet" } },
      { back: "K09j_quai" },
    ] },
  K09j_barges_guet: { act: "III", title: "Une cour, par une porte cochère", place: "basse", ambiance: "eau",
    text: [
      { outcome: "win", text: "Tu t'assois sur une borne, tu ôtes un soulier, tu cherches un caillou qui n'y est pas. De là, par la porte cochère entrouverte, on a la cour de l'hôtel en enfilade." },
      { outcome: "win", text: "Elle est pleine de caisses. Des caisses de sapin neuf, toutes de la même taille, cerclées de fer, empilées sur quatre rangs, avec chacune son étiquette. Deux hommes en clouent une. Avant que le couvercle descende, tu vois ce qu'il y a dedans, couché dans la paille : une chose longue, à branches, qui a jeté un éclair blanc. Un chandelier. D'argent, à sept bras, haut comme un enfant. On ne fait ces choses-là que pour les autels et pour les rois." },
      { outcome: "win", text: "L'un des hommes prend un pinceau, et écrit sur le couvercle, en grosses lettres : *FOIN.*" },
      { outcome: "lose", text: "Tu flânes. Tu flânes trop : un des rubans verts te suit de l'œil, puis du menton, puis il fait trois pas le long de sa chaîne. « Toi. Le quai est à Monseigneur. On y passe, on n'y traîne pas. » Tu passes. Tu n'as vu que des volets." },
    ],
    choices: [{ back: "K09j_barges_jour" }] },

  K09j_fontaine: { act: "III", title: "D'une écriture d'enfant sage", place: "basse", ambiance: "ville", fx: { flag: "j:lu_placard" },
    text: [
      "C'est une fontaine à mascaron, au coin de deux rues, avec son horloge au-dessus. Quelqu'un a collé sur la margelle, à la mie de pain, un quart de feuille écrit à la main. Dix personnes le lisent ou se le font lire. Un porteur d'eau rit. Une femme se signe, par précaution.",
      "*BONNES GENS DE MÉRIDANE. On veut arrêter l'heure. Il se votera sur la colline, le jour du Grand Midi, une chose que le Livre défend. Demandez à messieurs les Jurés pourquoi l'on monte du verre à la Tour, la nuit, par la rue du Cadran. Demandez-leur ce qui advint l'an 481, entre le troisième coup de none et le quatrième. Pardon de vous alarmer.*",
      "Tu relis la dernière ligne. *Pardon de vous alarmer.* L'écriture est ronde, appliquée, sans une rature, avec les jambages bien fermés d'un garçon à qui l'on a tapé sur les doigts.",
      { after: "K07j_interdit", text: "Tu connais cette main. Tu as lu, il y a deux jours, dans une salle de chapitre, un cahier où elle avait recopié un texte de quatre cents ans avec toutes ses fautes, une à une, comme des clous. Le cahier est parti pour Méridane sur une mule. Son copiste, depuis, n'a pas chômé." },
      { before: "K07j_interdit", after: "K07j_clocher", text: "*Pardon.* Tu as rencontré, dans un clocher de village, un garçon de seize ans qui commençait toutes ses phrases par ce mot-là." },
      "Un homme en livrée grise arrive, une clef au cou, décolle le papier d'un ongle, le plie, et l'empoche. Il lève le nez vers l'horloge de la fontaine. Elle est juste. Il s'en va.",
    ],
    choices: [{ back: "K09j_quai" }] },

  K09j_midi: { act: "III", title: "Midi dans les murs", place: "basse", ambiance: "eau",
    text: [
      "Tu t'assois au pied du cadran du port, sur la marche d'en haut. Il est midi moins un rien. Autour de toi, le quai fait ce que font les quais : on roule, on crie, on hale.",
      "Puis tout s'arrête. Hier, à une lieue, cela t'avait paru un effet de foule. Ici, c'est une loi. Le grutier lâche sa roue. Le marinier pose sa perche. La marchande de harengs ferme la bouche au milieu d'un prix. Sur les trois rangs de gabares, sur les ponts, aux fenêtres, quarante mille personnes lèvent la tête du même côté, sans se consulter, comme des blés sous le vent.",
      "Le premier coup tombe, et tu comprends ce que disait Girard. À une lieue, on le sent dans les pieds. Ici, les vitres de la Patiente rendent le son, l'eau du bassin se ride d'un seul frisson, de bord à bord, et quelque chose te pousse doucement la poitrine, comme une main à plat.",
      "Tu comptes avec eux. Ils comptent des lèvres. Les enfants, sur les doigts. Douze. La ville repart au milieu du geste qu'elle avait laissé : la marchande finit son prix.",
      "Ils l'ont tous entendu. Tous, jusqu'au dernier mousse, jusqu'à la petite de quatre ans qui dort sous un pont. C'est cela, *avoir ouï*. Dans trois jours, on leur en donnera onze.",
      "Tu ouvres le Cahier contre la pierre du cadran.",
    ],
    choices: [{ label: "Écrire", to: "M09", big: true }] },
});

module.exports = {
  passages: P,
  extras: {
    people: {
      tiennette: { name: "Dame Tiennette", f: true, aka: ["dame Tiennette", "Tiennette"], face: { age: "mur", skin: "clair", hair: "chatain", coif: "foulard", eyes: "lourds", iris: "brun", nose: "large", lips: "pleines", shape: "rond" },
        aspect: { allure: "cinquante ans, des bras de lavandière", habits: "les manches roulées, un torchon", signe: "essuie ses pots sans regarder ses mains" }, qui: "Elle tient l'auberge À la Patiente.", desc: "Hôtesse de la Patiente, sur le quai de la ville basse, et cousine de la mère de Perrine. Elle sait ce qui monte et ce qui descend sur la rivière." },
      gobin: { name: "Maître Gobin", f: false, aka: ["maître Gobin", "Gobin"], face: { age: "ancien", skin: "clair", hair: "blanc", coif: "degarni", beard: "sans", eyes: "ronds", iris: "clair", nose: "fin", lips: "fines", shape: "ovale", marks: ["lunettes"] },
        aspect: { allure: "soixante-dix ans, tout petit", habits: "des verres épais comme des culs de bouteille", signe: "des doigts très fins" }, qui: "Horloger de la rue des Aiguilliers.", desc: "Il répare ce que les autres rendent. Il a fait son apprentissage sur le même banc que le Grand Maître, et n'y voit plus guère." },
      guigne: { name: "La Guigne", f: true, aka: ["la Guigne"], face: { age: "jeune", skin: "hale", hair: "noir", coif: "milong", eyes: "tombants", iris: "noir", nose: "fin", lips: "fines", shape: "allonge" },
        aspect: { allure: "seize ans, maigre, noire de cheveux", habits: "une lame de rasoir montée en bague", signe: "la paupière gauche à demi fermée" }, qui: "Elle commande les Hirondelles, sous le pont.", desc: "Née un vendredi treize. Elle règne sur les enfants des ponts de la ville basse, qu'on appelle les Hirondelles, et paie toujours ce qu'ils doivent." },
    },
    items: {
      pain_cire: { name: "Livre de cire", kind: "divers", keep: true, price: 1, desc: "Un quartier de cire jaune, coupé au fil dans un pain de la halle. Il sent le miel. On le pétrit entre les doigts, tiède, et il prend la forme qu'on veut." },
    },
  },
};
