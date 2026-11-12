// More road events for Act I, two per region (montagne, cretes, plaine, marches; wired in base.js). Several heroes
// travel these roads, so the text never agrees an adjective with "tu". Each one returns to the road.
function P(o) { return Object.assign({ act: "I", noLead: true, place: null }, o); }
var BACK = [{ label: "Reprendre la route", to: "@route" }];
module.exports = {
  // ---------------------------------------------------------------- montagne
  E_fanchon_i: P({ title: "La carriole bâchée",
    text: [
      "Une carriole bâchée, une mule pelée, et sur le siège une femme en châle rouge qui chante faux à pleine voix. Fanchon la colporteuse, qui monte deux fois l'an vers les villages d'en haut avec des aiguilles, des rubans, et des nouvelles qu'elle invente quand elle n'en a pas.",
      "« Des nouvelles de la plaine ! crie-t-elle. Deux sous ! La reine va marier son fils, le Greffier-Majeur ne dort jamais, et on a vu de la neige blanche au nord, en plein été, d'une blancheur qu'on n'avait jamais vue ! » Elle rit. « Celle-là, je l'ai inventée ce matin. Elle est bonne, non ? »",
    ],
    choices: [
      { label: "Lui acheter un ruban", fx: { gold: -1, ep: ["perso", 100] }, to: "E_fanchon_i_ruban" },
      { label: "La saluer et passer", to: "@route" },
    ] }),
  E_fanchon_i_ruban: P({ title: "Le ruban bleu",
    text: ["Elle te vend un ruban bleu, en jurant qu'il vient de Vasselin, de la boutique de la couturière de la reine. Il vient sûrement de Pont-de-Saule. Puis elle repart en chantant, et sa voix fausse t'accompagne longtemps dans la montée."],
    choices: BACK }),
  E_chevrier: P({ title: "Le chevrier",
    text: [
      "Un gamin de dix ans garde des chèvres sur une pente impossible, pieds nus, un bâton plus grand que lui à la main. Il te regarde passer. Il siffle. Une chèvre lui répond. Il siffle autrement. Une autre répond.",
      "« Elles ont chacune leur nom, dit-il, fier. Je les siffle. Elles le savent. Même la nuit. Même dans le brouillard. Mon père dit qu'une chèvre qui ne connaît pas son nom, c'est une chèvre perdue. »",
    ],
    choices: [{ label: "Le laisser à ses chèvres", fx: { ep: ["perso", 100] }, to: "@route" }] }),

  // ---------------------------------------------------------------- cretes
  E_aigle: P({ title: "L'aigle",
    text: [
      "Au-dessus de la crête, un aigle tourne, très haut, en larges cercles. Puis il descend, d'un coup, et se pose sur un rocher, à vingt pas. Il te regarde. Il a une bague de cuir à la patte, avec un grelot.",
      "Un aigle de chasse. Échappé, ou dont le maître ne se souvient plus de lui. Il attend un ordre. Il n'en vient pas.",
    ],
    choices: [
      { label: "Tendre le bras", test: { dom: "nature", label: "L'aigle", help: [{ if: { lead: "corbe" }, v: 15 }] },
        win: { fx: { ep: ["perso", 400] }, to: "E_aigle_bras" }, lose: { fx: { pv: -2 }, to: "E_aigle_griffe" } },
      { label: "Le laisser", to: "@route" },
    ] }),
  E_aigle_bras: P({ title: "Sur le bras",
    text: ["Il vient. Il pèse, et ses serres percent la manche. Il te regarde de son œil d'or, de tout près. Puis il repart, vers le nord, sans un cri, comme s'il avait seulement voulu vérifier qu'il savait encore se poser sur un bras. Le grelot tinte longtemps, de plus en plus loin."],
    choices: BACK }),
  E_aigle_griffe: P({ title: "Les serres",
    text: ["Il vient, trop vite, et se trompe de bras, ou de cible. Les serres te labourent l'épaule. Il repart en criant, vers le nord. Tu t'assieds un moment sur la crête, la main sur l'épaule, à le regarder disparaître, et à te dire qu'il ne savait plus, lui non plus."],
    choices: BACK }),
  E_refuge_crete: P({ title: "La cabane du guetteur",
    text: [
      "Sur la crête, une cabane de pierres, avec une réserve de bois et une marmite. La cabane des guetteurs du feu, qui allumaient, autrefois, un brasier ici pour prévenir la vallée en cas d'invasion. Personne n'est venu depuis longtemps. Sur le linteau, des noms gravés, ceux des guetteurs, avec des dates.",
      "Le dernier nom est gravé à moitié. Le couteau est encore planté dans le bois, à côté.",
    ],
    choices: [
      { label: "Dormir à l'abri, et repartir à l'aube", fx: { pv: 5 }, to: "@route" },
      { label: "Finir le nom", fx: { ep: ["perso", 300] }, to: "E_refuge_crete_nom" },
    ] }),
  E_refuge_crete_nom: P({ title: "La moitié d'un nom",
    text: ["Tu prends le couteau. Tu regardes les lettres. *Aubri.* La suite, tu ne la sais pas. Aubrion ? Aubriot ? Tu graves un *n*, au hasard. Ça fait un nom. Ce n'est peut-être pas le sien. Quelqu'un, peut-être, montera un jour et le reconnaîtra quand même."],
    choices: BACK }),

  // ---------------------------------------------------------------- plaine
  E_moissonneurs: P({ title: "Les moissonneurs",
    text: [
      "Un champ de blé, et une équipe de moissonneurs qui fauchent en ligne, en chantant. À la pause, ils te font signe de venir. Pain, lard, un pichet de vin coupé d'eau. On ne refuse pas, à la moisson.",
      "Le chef d'équipe, un grand roux, compte ses hommes. Il en compte onze. Il recompte. « On était douze, ce matin, dit-il. J'en suis sûr. » Les autres se regardent. Personne ne sait qui manque. Il y a une faux de trop, couchée dans le chaume.",
    ],
    choices: [{ label: "Partager leur repas", fx: { food: 1, pv: 2 }, to: "@route" }] }),
  E_relais: P({ title: "Le relais de poste",
    text: [
      "Un relais de poste, au croisement de deux routes. Des chevaux qu'on change, un postillon qui boit. Sur le mur, le tableau des courriers attendus, à la craie. Un nom, en haut, revient trois fois, rayé, réécrit, rayé encore.",
      "« Un courrier de la reine, dit le maître de poste. Il devait passer il y a quatre jours. Il n'est pas passé. Je le réécris chaque matin. Chaque soir, je l'efface. Je ne sais plus pourquoi je l'attends, ni ce qu'il porte. Mais je l'attends. »",
    ],
    choices: [
      { label: "Lui proposer d'écrire, à côté, le jour où il est parti", fx: { ep: ["perso", 200] }, to: "E_relais_craie" },
      { label: "Le laisser à son tableau", to: "@route" },
    ] }),
  E_relais_craie: P({ title: "La craie",
    text: ["Il te regarde. Il prend la craie. Il écrit, à côté du nom, ce qu'il sait encore : *parti de Vasselin, un lundi, sur un cheval pie.* Il recule. Il relit. « Comme ça, dit-il, je saurai au moins ce que j'efface. » Il te sert un verre. Il ne te laisse pas payer."],
    choices: BACK }),

  // ---------------------------------------------------------------- marches
  E_tour_signaux: P({ title: "La tour des signaux",
    text: [
      "Une tour de signaux de l'armée, sur une butte. En haut, un soldat agite des fanions vers la tour suivante, à une lieue. Il s'arrête, il attend la réponse. La tour suivante répond. Il note dans un carnet.",
      "« On se transmet les noms des déserteurs, dit-il, quand tu montes. De tour en tour, jusqu'à Pallanche. » Il regarde son carnet. « Ce matin, j'en ai reçu un. Je l'ai transmis. Et puis je me suis rendu compte que c'était mon frère. » Il ferme le carnet. « Je l'ai transmis quand même. C'est mon travail. »",
    ],
    choices: [{ label: "Redescendre", fx: { ep: ["perso", 200] }, to: "@route" }] }),
  E_gue_marches: P({ title: "Le gué aux pierres",
    text: [
      "Un gué, sur une rivière grise. Des pierres plates, pour passer à pied sec. Sur chaque pierre, quelqu'un a peint une lettre, à la chaux. En marchant de pierre en pierre, on lit une phrase. Tu traverses, et tu lis : *NE M'OUBLIEZ PAS.*",
      "Sur l'autre rive, une vieille femme repeint les lettres, une à une, avec un pot de chaux. « Mon fils, dit-elle. Il s'est noyé ici. Il y a longtemps. Je ne sais plus son nom. Alors j'ai écrit ça. C'est ce qu'il aurait dit. »",
    ],
    choices: [
      { label: "L'aider à repeindre", fx: { ep: ["perso", 300] }, to: "E_gue_marches_chaux" },
      { label: "Passer", to: "@route" },
    ] }),
  E_gue_marches_chaux: P({ title: "La chaux",
    text: ["Tu prends un pinceau. Vous repeignez les lettres ensemble, pierre par pierre, les pieds dans l'eau froide. Quand c'est fini, elle te regarde traverser, une dernière fois, pour vérifier. Tu lis la phrase à voix haute, en marchant. Elle hoche la tête. « C'est ça, dit-elle. C'est ça qu'il aurait dit. »"],
    choices: BACK }),
};
