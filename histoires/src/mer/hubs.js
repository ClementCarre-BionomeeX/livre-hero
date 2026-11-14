// The crossroads aboard the Sterne (deck, forecastle, hold, aftercastle), the two crossroads of Port-Aubier and those of
// the two ports of call, the night in the cabin and the morning. These passages carry no act: the act in progress stays
// the one the story is in.
var MOVES = {
  pont: { label: "Monter sur le pont", to: "H_pont" },
  gaillard: { label: "Aller au gaillard d'avant", to: "H_gaillard" },
  cale: { label: "Descendre dans la cale", to: "H_cale" },
  arriere: { label: "Gagner le château arrière", to: "H_arriere" },
};
function moves(here) { return Object.keys(MOVES).filter(function (k) { return k !== here; }).map(function (k) { return { label: MOVES[k].label, to: MOVES[k].to }; }); }
var SLEEP = { label: "Aller dormir dans ta cabine", when: "night", takes: "morning", to: "N_matin" };
var AT_SEA = { is: { escale: null } };
module.exports = { moves: moves, SLEEP: SLEEP, passages: {
  // ------------------------------------------------------------------ le pont
  H_pont: {
    fxEvery: { set: { terre: null } },
    title: "Le pont de la Sterne", place: "pont", hub: true, veillee: true, backName: "le pont",
    text: [
      { if: { is: { escale: "aubier" } }, text: "Le pont est encombré de cordages, de cages à poules et de caisses pas encore descendues. Des portefaix vont et viennent sur la planche. Au-dessus de vous, les gabiers envergent les voiles en s'interpellant d'un mât à l'autre." },
      { if: { is: { escale: "gavre" } }, text: "La Sterne est amarrée au môle de Gavre, ses voiles serrées sur les vergues. Des enfants de pêcheurs la regardent du quai en se poussant du coude." },
      { if: { is: { escale: "ronce" } }, text: "La Sterne est mouillée dans l'anse de Ronce, sur une eau verte et calme. La chaloupe fait la navette avec la plage." },
      { if: AT_SEA, when: "day", again: true, text: "Le pont, le grand mât qui craque, les hommes au travail, et la mer de tous les côtés." },
      { if: AT_SEA, when: "night", text: "La nuit, le pont n'est éclairé que par le fanal de poupe et la lampe de l'habitacle, où Kerlo surveille le compas. Les hommes de quart parlent bas." },
      { if: AT_SEA, temps: "calme", text: "Les voiles pendent sans un souffle. Le navire roule mollement sur une houle longue, et le bois grince à chaque roulis." },
      { if: AT_SEA, temps: "brise", text: "La brise tient les voiles bien gonflées. La Sterne file, couchée juste ce qu'il faut, et l'étrave chante dans l'eau." },
      { if: AT_SEA, temps: "frais", text: "Le vent est fort. Les embruns passent par-dessus l'étrave et mouillent le pont jusqu'au grand mât ; les hommes marchent les jambes écartées." },
      { if: AT_SEA, temps: "grain", text: "La pluie tombe en paquets froids. Les hommes ont passé leurs cirés, et Guénolé fait réduire la toile en criant contre le vent." },
      { if: AT_SEA, temps: "brume", text: "La brume enveloppe tout. Du pied du grand mât, la proue et la poupe se perdent dans le blanc. La cloche du bord sonne toutes les deux minutes." },
      { if: AT_SEA, temps: "tempete", text: "Le pont est un champ de bataille : des lignes de vie tendues de l'avant à l'arrière, des hommes accrochés, de l'eau partout." },
      { after: "R_depart", before: ["chaloupe:videe", "morvan:fers"], once: true, if: AT_SEA, text: "La chaloupe est saisie à sa place, entre le grand mât et l'artimon, sous sa bâche goudronnée. Elle te paraît plus basse sur ses cales qu'à Port-Aubier." },
      { after: "morvan:fers", text: "Morvan Le Hir est aux fers au pied du grand mât, une chaîne à la cheville. Les hommes passent devant lui sans le regarder." },
    ],
    choices: [
      { label: "Monter à la hune avec le mousse", if: AT_SEA, hide: { any: [{ seen: "P_hune" }, { not: AT_SEA }] }, when: "day", takes: 1, to: "P_hune" },
      { label: "Prendre le quart de nuit avec Kerlo", if: AT_SEA, hide: { not: AT_SEA }, when: "night", takes: 4, to: "Q_quart" },
      { label: "Soulever la bâche de la chaloupe", after: "R_depart", hide: { any: [{ seen: "S_chaloupe" }, { not: AT_SEA }] }, when: "night", takes: 1, to: "S_chaloupe" },
      { label: "Faire assembler l'équipage pour accuser le second", after: "C_apres", hide: { any: [{ has: "morvan:fers" }, { has: "morvan:fui" }, { seen: "A_accuser" }] }, to: "A_accuser" },
      { label: "Demander une seconde assemblée : le retour à Port-Aubier", after: "C_apres", if: { clues: "M", min: 3 }, why: "Il te faudrait au moins trois preuves de ce qui se trame pour convaincre l'équipage de faire demi-tour.", hide: { any: [{ seen: "C_retour" }, { has: "morvan:fui" }] }, to: "C_retour" },
      { label: "Descendre à terre", if: { is: { escale: "aubier" } }, hide: { not: { is: { escale: "aubier" } } }, to: "H_quai" },
      { label: "Descendre à terre", if: { is: { escale: "gavre" } }, hide: { not: { is: { escale: "gavre" } } }, to: "H_gavre" },
      { label: "Prendre la chaloupe jusqu'à la plage", if: { is: { escale: "ronce" } }, hide: { not: { is: { escale: "ronce" } } }, to: "H_ronce" },
      SLEEP,
    ].concat(moves("pont")),
  },
  P_hune: {
    title: "La hune", place: "pont", back: true,
    text: [
      { without: "pierrick", text: "Pierrick, le mousse, te regarde poser le pied sur les enfléchures avec un sourire en coin. « Pas comme ça. Les mains sur les haubans, jamais sur les enfléchures : un échelon peut casser, un hauban jamais. » Il grimpe devant toi comme on monte un escalier." },
      { with: "pierrick", text: "Pierrick grimpe devant toi comme on monte un escalier, et se retourne tous les trois échelons pour voir où tu en es." },
      "La hune est une plate-forme de planches grande comme une table, à mi-hauteur du grand mât. Le roulis, en bas à peine sensible, y devient un balancement de vingt pieds d'un bord à l'autre. Tu t'accroches au mât, puis tu oses regarder.",
      "La mer s'étend jusqu'au bord du ciel, rayée d'écume. La Sterne, vue d'en haut, est étroite comme une cosse de pois. Sur le pont, les hommes sont des chapeaux.",
      { without: "pierrick", text: "« Je m'appelle Pierrick, dit le mousse. Personne ne monte ici, à part la vigie et moi. Les autres ont le vertige ou la flemme. » Il te regarde. « Toi, t'as pas vomi. C'est bien. Si tu veux, je te montre le navire. Je connais les cachettes. »" },
      { with: "pierrick", text: "« Tu vois, dit Pierrick, d'ici on voit tout. Qui va où, qui parle à qui. Personne ne lève jamais la tête. »" },
    ],
    choices: [
      { label: "Accepter que Pierrick te montre le navire", without: "pierrick", fx: { join: "pierrick", conf: { pierrick: 10 } }, back: "H_pont" },
      { label: "Lui répondre que tu n'as pas besoin d'un guide", without: "pierrick", fx: { met: "pierrick" }, back: "H_pont" },
    ],
  },

  // ------------------------------------------------------------------ le gaillard d'avant
  H_gaillard: {
    fxEvery: { set: { terre: null } },
    title: "Le gaillard d'avant", place: "gaillard", hub: true, backName: "le gaillard d'avant",
    text: [
      { first: true, text: "Le gaillard d'avant est le domaine de l'équipage : un entrepont bas où l'on ne tient debout qu'en courbant la tête, trente hamacs accrochés aux barrots, des coffres de mer alignés le long de la coque, et une odeur de laine mouillée, de goudron et de pieds. Au fond, derrière une cloison, la cambuse de Rozenn, et son fourneau de briques posé sur un lit de sable." },
      { again: true, when: "day", text: "Le gaillard, ses hamacs roulés pour la journée, et le fumet de la soupe qui vient de la cambuse." },
      { again: true, when: "night", text: "Le gaillard de nuit : les hamacs pleins qui se balancent tous ensemble au roulis, les ronflements, une lanterne qui fume." },
      { after: "marche:sabotage", before: "eau:coupable", if: { stock: "equipage", max: 45 }, text: "Les hommes se taisent quand tu entres, et reprennent leur conversation quand tu es passé{e}." },
      { if: { stock: "equipage", min: 75 }, text: "Quelqu'un siffle une gigue en ravaudant une voile. Un autre t'offre une chique, que tu peux refuser sans vexer personne." },
      { if: { is: { rations: "demi" } }, text: "Depuis qu'on rationne l'eau, chaque homme garde son quart de pinte sous sa chemise, et le surveille." },
    ],
    choices: [
      { label: "Te mêler aux matelots", takes: 1, to: "K_gaillard" },
      { label: "Fouiller le hamac d'Erwan pendant que la bordée est sur le pont", after: "D_examen", when: "day", hide: { any: [{ clue: "e_sciure" }, { has: "eau:coupable" }] }, takes: 1,
        test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ with: "pierrick", v: 15 }] }, win: { to: "S_hamac" }, lose: { to: "S_hamac_rate" } },
      SLEEP,
    ].concat(moves("gaillard")),
  },
  K_gaillard: {
    title: "Avec les matelots", place: "gaillard", back: true, rumeur: "gaillard", taverne: { mise: 2, adversaire: "un gabier aux dents gâtées" },
    text: [
      { first: true, text: "Tu t'assois sur un coffre, entre deux matelots qui épissent un cordage. Ils se poussent pour te faire de la place, sans enthousiasme. Un subrécargue, pour eux, c'est l'homme qui compte la solde, et qui la compte toujours trop juste." },
      { again: true, text: "Tu retrouves ton coffre, entre les épisseurs. On te fait de la place." },
    ],
  },

  // ------------------------------------------------------------------ la cale
  H_cale: {
    fxEvery: { set: { terre: null } },
    title: "La cale", place: "cale", hub: true, atelier: true, backName: "la cale",
    text: [
      { first: true, text: "La cale de la Sterne est une longue caverne de bois, éclairée par des fanaux pendus aux barrots. Les caisses de la cargaison y sont arrimées en piles serrées, calées de coins et de cordages. Plus loin, les tonneaux d'eau, couchés sur trois rangs. Au pied du grand mât, les deux pompes, et contre la cloison avant, l'établi d'Armelle, ses outils pendus au mur dans un ordre parfait." },
      { again: true, text: "La cale, les caisses arrimées, les tonneaux couchés, l'odeur de bois, de goudron et d'eau croupie." },
      { if: AT_SEA, temps: ["frais", "grain", "tempete"], text: "Chaque coup de mer fait gémir la membrure. Les piles de caisses tirent sur leurs cordages." },
      { after: "voie:ouverte", before: "voie:bouchee", text: "L'eau gargouille entre les varangues. On l'entend monter, un doigt par heure, et les hommes de pompe se relaient sans arrêt." },
      { after: "voie:bouchee", text: "Un emplâtre de planches et d'étoupe couvre la voie d'eau, à tribord, sous la ligne de flottaison. Il suinte à peine." },
      { after: "marche:sabotage", text: "Sur le rang du bas, quatorze tonneaux sonnent creux sous la main." },
    ],
    choices: [
      { label: "Parler à la charpentière qui jure contre sa pompe", without: "armelle", hide: { any: [{ seen: "A_armelle" }, { gone: "armelle" }] }, to: "A_armelle" },
      { label: "Examiner les tonneaux vides", after: "marche:sabotage", hide: { clue: "e_vrille" }, takes: 1, to: "D_examen" },
      { label: "Rationner l'eau : deux tonneaux par jour au lieu de trois", after: "marche:sabotage", hide: { is: { rations: "demi" } }, fx: { set: { rations: "demi" }, stock: { equipage: -3 } }, to: "K_rations" },
      { label: "Rendre l'eau à volonté", after: "marche:sabotage", hide: { not: { is: { rations: "demi" } } }, fx: { set: { rations: "pleine" }, stock: { equipage: 4 } }, to: "K_rations" },
      { label: "Ouvrir une caisse de la cargaison, à la faveur de la nuit", after: "A_appareillage", when: "night", hide: { any: [{ seen: "S_cale_nuit" }, { has: "cale:ouverte" }] }, takes: 1, to: "S_cale_nuit" },
      { label: "Boucher la voie d'eau avec Armelle", with: "armelle", after: "voie:ouverte", hide: { has: "voie:bouchee" }, takes: 4, to: "T_voie" },
      { label: "Faire boucher la voie d'eau par les hommes de Guénolé", without: "armelle", after: "voie:ouverte", hide: { has: "voie:bouchee" }, takes: 3, to: "T_voie_bordee" },
      { label: "Prendre ton tour aux pompes", after: "voie:ouverte", hide: { has: "voie:bouchee" }, takes: 2, fx: { stock: { coque: 4, equipage: 2 }, fatigue: 1 }, to: "K_pompes" },
      SLEEP,
    ].concat(moves("cale")),
  },
  K_rations: {
    title: "L'eau", place: "cale", back: true,
    text: [
      { if: { is: { rations: "demi" } }, text: "Guénolé fait mettre un cadenas sur la manche à eau et en garde la clé autour du cou. Désormais, chaque homme reçoit sa ration au gobelet, matin et soir, sous ses yeux. Les matelots regardent le cadenas comme on regarde un mauvais présage." },
      { if: { is: { rations: "pleine" } }, text: "Guénolé ôte le cadenas de la manche à eau. Les hommes boivent à la tasse, longuement, en te regardant par-dessus le bord. Personne ne te remercie, mais l'air du gaillard est moins lourd ce soir." },
    ],
  },
  K_pompes: {
    title: "Aux pompes", place: "cale", back: true,
    text: [
      "Tu prends le bringuebale avec un matelot en face de toi, et vous pompez au rythme d'une chanson que tout le monde connaît sauf toi. Au bout d'une heure, tu ne sens plus tes épaules ; au bout de deux, tu les sens trop. L'eau claque dans la dalle et s'en va par-dessus bord.",
      { after: "fait:pompe", text: "La grande pompe, avec ses cuirs neufs, tire à chaque coup un plein seau. Les hommes disent du bien d'Armelle, ce qui est rare." },
      { before: "fait:pompe", text: "Les cuirs usés de la grande pompe laissent filer la moitié de l'eau qu'ils aspirent. Il faut deux coups pour en faire un." },
    ],
  },

  // ------------------------------------------------------------------ le château arrière
  H_arriere: {
    fxEvery: { set: { terre: null } },
    title: "Le château arrière", place: "arriere", hub: true, backName: "le château arrière",
    text: [
      { first: true, text: "Sous la dunette, une coursive étroite dessert les chambres de l'arrière : celle du capitaine, au fond, avec ses fenêtres sur le sillage ; le carré où l'on mange ; la chambre du second ; l'infirmerie de Maître Daoulas ; la cabine de Gabin, et la tienne, un placard avec une couchette et une tablette où tu poses le coffre de bord." },
      { again: true, text: "La coursive de l'arrière, ses portes basses, la lampe de cuivre qui balance au plafond." },
      { after: "marche:malade", before: ["cap:soigne", "cap:mort"], text: "Une odeur de vomi et de vinaigre vient de la chambre du capitaine." },
      { after: "cap:mort", text: "La porte de la chambre du capitaine est fermée. On a mis son chapeau dessus, accroché au loquet." },
    ],
    choices: [
      { label: "Ouvrir le coffre de bord et payer une avance sur solde à l'équipage", after: "A_appareillage", hide: { has: "coffre:avance" }, to: "K_coffre" },
      { label: "Fouiller la chambre du second pendant qu'il est sur le pont", after: ["D_tonneaux"], if: { clues: "M", min: 2 }, why: "Tu n'as encore aucune raison de soupçonner le second.", hide: { any: [{ item: "lettre_corbiere" }, { seen: "S_chambre_rate" }, { has: "morvan:fers" }, { has: "morvan:fui" }] }, when: "day", takes: 1,
        test: { dom: "discretion", diff: -10, label: "Discrétion", help: [{ with: "pierrick", v: 15 }] }, win: { to: "S_chambre" }, lose: { to: "S_chambre_rate" } },
      { label: "Porter toi-même le grog du soir au capitaine", after: "c:verite", hide: { any: [{ has: "cap:soigne" }, { has: "cap:mort" }] }, to: "K_grog" },
      { label: "Guetter, dans l'escalier de la dunette, qui monte le grog au capitaine", after: "K_halos", when: "night", hide: { any: [{ clue: "c_feuilles" }, { has: "cap:soigne" }, { has: "cap:mort" }, { seen: "S_guet" }] }, takes: 2, to: "S_guet" },
      SLEEP,
    ].concat(moves("arriere")),
  },
  K_coffre: {
    title: "Le coffre de bord", place: "arriere",
    text: [
      "Tu ouvres le coffre de bord sur ta couchette. Il contient l'argent du voyage, en écus, en piles de dix roulées dans du papier : de quoi payer les droits de port de Marbecq, les escales et l'imprévu. Une avance de solde sur cet argent, c'est l'armateur qui la paie, et c'est à toi qu'il la reprochera.",
      { after: "rumeur:coffre", text: "Depuis ce matin, au gaillard, on dit que tu gardes la solde des hommes là-dedans. Une avance fera taire la rumeur, ou lui donnera raison." },
    ],
    choices: [
      { label: "Payer à chaque homme une semaine de solde d'avance (soixante écus)", if: { stock: "coffre", min: 60 }, fx: { stock: { coffre: -60, equipage: 15 }, flag: "coffre:avance", unflag: "rumeur:coffre" }, to: "K_coffre_paye" },
      { label: "Refermer le coffre", back: "H_arriere" },
    ],
  },
  K_coffre_paye: {
    title: "La paie", place: "gaillard",
    text: [
      "Tu fais l'appel au pied du grand mât, le registre de bord ouvert sur un tonneau, et chaque homme vient prendre ses pièces en touchant son bonnet. Guénolé surveille, les bras croisés. À la fin, il te dit : « Ça, ils s'en souviendront. Dans un sens ou dans l'autre. »",
      { with: "armelle", text: "Armelle prend sa part la dernière, la compte, et la glisse dans sa botte. « Pour mes filles », dit-elle." },
    ],
    fx: { regard: { guenole: "cordial" } },
    choices: [{ label: "Ranger le registre", back: "H_arriere" }],
  },

  // ------------------------------------------------------------------ la nuit et le matin
  N_matin: {
    title: "Le matin", place: "arriere", backName: "ta cabine",
    text: [
      "Tu te réveilles dans ta couchette, au son de la cloche qui pique le changement de quart. Par le hublot de ta cabine, la mer.",
      { if: { day: { min: 2, max: 2 } }, text: "La côte est encore en vue, une ligne bleue sur bâbord. Au réveil, ton estomac a mis un moment à comprendre où il était." },
      { if: { day: { min: 4, max: 4 } }, text: "Plus de terre en vue, dans aucune direction. Pierrick prétend qu'on la sent encore, à l'odeur, par vent d'est." },
      { after: "marche:brumes", before: "R_arrivee", text: "Le hublot est blanc de brume. Tu entends la cloche du bord, et celle-là seulement." },
      { after: "voie:ouverte", before: "voie:bouchee", text: "En bas, les pompes ont battu toute la nuit." },
      { after: "R_depart", before: "C_assemblee", text: "Quelqu'un a gratté sur la porte de ta cabine, au couteau, le dessin d'un cercueil. Tu le regardes longtemps, puis tu t'habilles." },
      { after: "cap:mort", text: "Sur le pont, l'équipage est rassemblé tête nue. Le capitaine Coët est mort cette nuit." },
    ],
    fxEvery: { rest: true },
    choices: [{ label: "Monter sur le pont", to: "H_pont" }],
  },

  // ------------------------------------------------------------------ Port-Aubier
  H_quai: {
    fxEvery: { set: { terre: "oui" } },
    title: "Le quai des Morutiers", place: "aubier_quai", hub: true, backName: "le quai de la Sterne",
    text: [
      { first: true, text: "La Sterne est amarrée bord à quai, sa planche posée sur les pavés. C'est un trois-mâts de belle taille, noir de coque avec une bande jaune à la hauteur des sabords, et une figure de proue en forme d'oiseau aux ailes repliées. Le bois de la coque a été repeint de frais ; les voiles, elles, ont vu beaucoup de mers." },
      { first: true, text: "Sur le quai, une file de portefaix monte les dernières caisses de la cargaison à bord. Un homme en habit de drap bleu, debout près de la planche, coche chaque caisse sur une liste." },
      { again: true, text: "Le quai des Morutiers, les portefaix, les mouettes, et la Sterne qui tire sur ses amarres." },
      { after: "A_signer", text: "La file des portefaix a disparu. Il ne reste sur le quai que des brins de paille et des cordages coupés." },
    ],
    choices: [
      { label: "Monter à bord de la Sterne", hide: { seen: "A_bord" }, to: "A_bord" },
      { label: "Monter à bord", hide: { not: { seen: "A_bord" } }, to: "H_pont" },
      { label: "Regarder les portefaix charger les caisses", hide: { any: [{ seen: "A_caisses" }, { seen: "A_signer" }] }, takes: 1, to: "A_caisses" },
      { label: "Signer le manifeste avec le second", hide: { any: [{ seen: "A_signer" }, { has: "manifeste:signe" }] }, to: "A_signer" },
      { back: "H_ville" },
    ],
  },
  H_ville: {
    fxEvery: { set: { terre: "oui" } },
    title: "La ville basse", place: "aubier_ville", hub: true, backName: "la ville basse",
    text: [
      { first: true, text: "La ville basse de Port-Aubier grimpe en escaliers de granit depuis les quais. Tout ce qui sert à la mer s'y vend : poulies, cordages, biscuit, instruments, assurances et prières. La Chambre des Assurances occupe un bel hôtel à colonnes sur la place du Change ; plus bas, l'apothicairerie de Maître Haudry fait l'angle de la rue des Cordiers, et l'accastilleur étale ses marchandises jusque sur le trottoir." },
      { first: true, text: "Thibaut Lerac, l'ancien subrécargue de la maison Corbière, habite à deux rues, au-dessus d'une boutique de chandelles. Corbière te l'a dit, en ajoutant qu'il ne fallait pas le déranger." },
      { again: true, text: "La ville basse, ses escaliers, ses enseignes de fer qui grincent au vent de mer." },
    ],
    choices: [
      { label: "Entrer à la Chambre des Assurances", hide: { seen: "V_assurances" }, takes: 1, to: "V_assurances" },
      { label: "Pousser la porte de l'apothicairerie de Maître Haudry", takes: 1, to: "V_haudry" },
      { label: "Passer chez l'accastilleur", to: "V_accastilleur" },
      { label: "Frapper chez Thibaut Lerac", hide: { has: "lerac:parle" }, takes: 1, to: "V_lerac" },
      { label: "Descendre au quai de la Sterne", to: "H_quai" },
    ],
  },
  V_accastilleur: {
    title: "Chez l'accastilleur", place: "aubier_ville", back: true, shop: "accastilleur",
    text: [
      { first: true, text: "La boutique de l'accastilleur est un capharnaüm qui sent le chanvre et le suif : des poulies pendues au plafond en grappes, des rouleaux de filin, des barils de clous, des lanternes, des compas dans leur boîte, et derrière le comptoir un vieux qui grave une carte au burin, des lunettes au bout du nez." },
      { again: true, text: "L'accastilleur lève les yeux de sa gravure, te reconnaît, et reprend son burin." },
      { with: "armelle", once: true, text: "Armelle va droit aux cuirs de pompe, en prend une rondelle, la plie, la sent, et la repose. « Celles du fond. Celles-là sont de l'an dernier. »" },
    ],
  },

  // ------------------------------------------------------------------ Gavre
  H_gavre: {
    fxEvery: { set: { terre: "oui" } },
    title: "Le port de Gavre", place: "gavre", hub: true, backName: "le port de Gavre",
    text: [
      { first: true, text: "Gavre tient dans le creux d'un fer à cheval de rochers noirs : un môle, deux cents maisons de pierre aux volets bleus, des filets qui sèchent sur des perches, et, sur la pointe, une chapelle blanche dont le clocher sert d'amer à tous les pêcheurs de la côte." },
      { first: true, text: "Sur le quai, l'auberge du Cormoran ouvre ses fenêtres sur le port. Plus haut dans la rue, une enseigne peinte d'une rose des vents : la boutique de Nolwenn Guivarc'h, cartes et instruments." },
      { again: true, text: "Le port de Gavre, ses filets, ses volets bleus, l'odeur de poisson et de goudron chaud." },
    ],
    choices: [
      { label: "Entrer à l'auberge du Cormoran", takes: 1, to: "G_auberge" },
      { label: "Monter à la chapelle des noyés", hide: { seen: "G_chapelle" }, takes: 1, to: "G_chapelle" },
      { label: "Pousser la porte de Nolwenn Guivarc'h, cartes et instruments", to: "G_nolwenn" },
      { back: "H_pont" },
    ],
  },

  // ------------------------------------------------------------------ Ronce
  H_ronce: {
    fxEvery: { set: { terre: "oui" } },
    title: "La plage de Ronce", place: "ronce", hub: true, backName: "la plage de Ronce",
    text: [
      { first: true, text: "L'île Ronce est un dos de rocher couvert d'ajoncs, long d'une demi-lieue, posé seul au milieu de la mer des Brumes. La chaloupe vous dépose sur une plage de galets ronds, au fond d'une anse. Un sentier monte vers le phare, une tour trapue blanchie à la chaux, et un autre longe un ruisseau jusqu'à la source." },
      { again: true, text: "La plage de galets, la chaloupe tirée au sec, le phare blanc en haut de l'île." },
    ],
    choices: [
      { label: "Suivre le ruisseau jusqu'à la source", hide: { has: "eau:ronce" }, takes: 1, to: "R_source" },
      { label: "Monter au phare", hide: { seen: "R_phare" }, takes: 1, to: "R_phare" },
      { label: "Longer la grève", hide: { seen: "R_greve" }, takes: 1, to: "R_greve" },
      { label: "Rembarquer dans la chaloupe", to: "H_pont" },
    ],
  },
} };
