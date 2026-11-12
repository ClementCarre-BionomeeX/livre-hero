// Act II · more of the frozen moutier of the Veilleurs for Corbe's company (Corbe leads, "tu" feminine, she cannot
// read), off II_N3_cloitre: the guest house where pilgrims froze at table, and the cellar where the cellarer froze with
// his candle. Plus, in Act III, two more sights of the white plain (the child leads, "tu"): a whole village walking
// with its houses on its back, and a watchtower of the old war.
var N = { act: "II", noLead: true };
function P(o) { return Object.assign({}, N, o); }
var T = { act: "III", noLead: true };
function P3(o) { return Object.assign({}, T, o); }
var READER = { any: [{ present: "hylas" }, { present: "pie" }, { present: "ysolde" }, { present: "enfant" }, { present: "linette" }] };
module.exports = {
  II_n3_hotellerie: P({ title: "L'hôtellerie", place: "moutier",
    text: [
      "L'hôtellerie des pèlerins, à l'entrée du moutier. Une longue table, des bancs, une cheminée éteinte. Et à table, douze pèlerins, figés dans la glace, la cuillère levée, le bâton appuyé au mur, les capuchons rabattus. Ils mangeaient la soupe quand la main du géant s'est posée sur le toit.",
      "Leurs coquilles cousues sur l'épaule disent d'où ils viennent : de la mer, de loin, du sud. Ils allaient au col de l'Ourse, au tombeau du saint, là-haut, sous les cairns. Ils n'y arriveront pas.",
      "Sur la table, au milieu des écuelles, un livre ouvert. Le registre de l'hôtellerie. Ils ont signé en arrivant.",
    ],
    choices: [
      { label: "Faire lire leurs noms, à voix haute", if: READER, why: "Personne ici ne sait lire.", fx: { ep: ["perso", 500], flag: "nord:pelerins" }, to: "II_n3_hotellerie_noms" },
      { label: "Leur fermer les yeux, un par un", fx: { ep: ["perso", 300] }, to: "II_n3_hotellerie_yeux" },
      { label: "Revenir au cloître", to: "II_N3_cloitre" },
    ] }),
  II_n3_hotellerie_noms: P({ title: "Douze noms", place: "moutier",
    text: [
      "On lit pour toi. Douze noms, douze villes. *Bérenger, de Port-Salin. Ermessinde et Garsende, sœurs, de Vasselin. Un vieux soldat sans prénom, de la Lisse.* Chaque nom résonne dans la salle froide, et revient, un peu, de la voûte.",
      "Au dernier nom, quelque chose craque. Le pèlerin du bout de la table, le plus jeune, a bougé un doigt. Juste un doigt. La glace autour de sa main a une fêlure, fine comme un cheveu. Rien d'autre ne bouge. Mais la fêlure est là.",
    ],
    choices: [{ label: "Revenir au cloître", to: "II_N3_cloitre" }] }),
  II_n3_hotellerie_yeux: P({ title: "Les yeux", place: "moutier",
    text: ["Tu ne peux pas leur fermer les yeux. La glace les tient ouverts. Alors tu rabats les capuchons, un par un, plus bas, pour qu'ils ne voient plus la salle vide. C'est ce qu'on fait au clan, pour les morts qu'on ne peut pas porter. Tu ne sais pas s'ils sont morts. Tu le fais quand même."],
    choices: [{ label: "Revenir au cloître", to: "II_N3_cloitre" }] }),

  II_n3_cellier: P({ title: "Le cellier", place: "moutier",
    text: [
      "Sous la cuisine, un escalier, une porte basse, et le cellier. Des tonneaux, des jambons pendus, des sacs de grain, des pots de miel. De quoi nourrir un moutier tout un hiver. Au milieu, le frère cellérier, figé, une chandelle à la main, la flamme gelée dans la glace comme une fleur dans de l'ambre.",
      "La flamme brille encore. Pas assez pour éclairer. Assez pour qu'on la voie.",
    ],
    choices: [
      { label: "Prendre des vivres pour la route", fx: { food: 4 }, to: "II_n3_cellier_vivres" },
      { label: "Essayer de reprendre la chandelle", test: { dom: "magie", label: "La flamme", help: [{ if: { item: "tambour" }, v: 10 }, { if: { present: "givre" }, v: 15 }] },
        win: { fx: { flag: "nord:chandelle", ep: ["perso", 900] }, to: "II_n3_cellier_flamme" }, lose: { fx: { pv: -2 }, to: "II_n3_cellier_froid" } },
    ] }),
  II_n3_cellier_vivres: P({ title: "Le grain des frères", place: "moutier",
    text: ["Tu remplis les sacs. Du lard, des pommes ridées, un fromage dur, une gourde de vin. En partant, tu t'arrêtes devant le cellérier. Tu lui dis merci, à voix haute, comme on remercie un hôte. C'est la coutume. Il ne répond pas. La flamme, dans sa main, tremble un peu, ou c'est toi."],
    choices: [{ label: "Revenir au cloître", to: "II_N3_cloitre" }] }),
  II_n3_cellier_flamme: P({ title: "La flamme gelée", place: "moutier",
    text: [
      "Tu poses les mains autour de la glace, autour de la flamme. Tu bats le rythme du tambour, du bout des doigts, sur la glace. Lentement. Elle se fend, juste autour de la mèche. La flamme se libère. Elle vacille. Puis elle grandit, et elle éclaire le cellier, d'une lumière jaune, chaude, ordinaire.",
      "Le frère cellérier ne bouge pas. Mais la glace, autour de lui, fond un peu, à hauteur du cœur, là où la flamme est la plus proche. Ça coule, goutte à goutte, sur son tablier.",
      "Tu laisses la chandelle dans sa main, et tu n'emportes du cellier qu'un jambon et un pot de miel. Tu ne sais pas combien de temps elle brûlera. Une chandelle de cellier, ça dure une nuit. Peut-être que c'est assez.",
    ],
    choices: [{ label: "Revenir au cloître", fx: { food: 2 }, to: "II_N3_cloitre" }] }),
  II_n3_cellier_froid: P({ title: "Le froid", place: "moutier",
    text: ["La glace te brûle les paumes, d'un froid qui mord jusqu'au coude. Tu retires les mains. La peau reste collée, un peu. La flamme n'a pas bougé. Tu remontes l'escalier en soufflant sur tes doigts, et tu prends quand même un fromage en passant."],
    choices: [{ label: "Revenir au cloître", fx: { food: 1 }, to: "II_N3_cloitre" }] }),

  // ---------------------------------------------------------------- Acte III : la plaine
  III_p_village: P3({ title: "Le village qui marche", place: "plaine",
    text: [
      "Sur la plaine, un village entier marche. Pas seulement les gens : les maisons. Chacun porte sur le dos un morceau de la sienne, une porte, un volet, une poutre, un pan de toit, une fenêtre avec son rideau. Le forgeron porte son enclume. Le curé porte la cloche, à deux bras, contre sa poitrine.",
      "« On a été oubliés tous ensemble, dit une femme, qui porte une table. Le même jour. Alors on est venus tous ensemble. On ne veut pas s'oublier entre nous. » Elle cale la table sur son dos. « Quand on sera arrivés, on remontera tout. Comme c'était. »",
    ],
    choices: [
      { label: "Lui demander le nom du village", fx: { ep: ["perso", 400] }, to: "III_p_village_nom" },
      { label: "Porter un moment la cloche du curé", fx: { pv: -1, ep: ["perso", 500], flag: "iii:village" }, to: "III_p_village_cloche" },
    ] }),
  III_p_village_nom: P3({ title: "Le nom", place: "plaine",
    text: ["Elle s'arrête. Elle se retourne vers les autres. Ils s'arrêtent tous, avec leurs morceaux de maisons. Ils se regardent. Personne ne le sait. « On le retrouvera en arrivant, dit enfin le forgeron. Il sera gravé sur la borne. » Il soulève son enclume. Personne ne porte de borne. Personne ne le leur fait remarquer."],
    choices: [{ label: "Revenir sur la plaine", to: "III_plaine" }] }),
  III_p_village_cloche: P3({ title: "La cloche", place: "plaine",
    text: [
      "Le curé te la confie avec soulagement. Elle est lourde, froide, et elle ne sonne pas quand tu marches, alors qu'elle devrait. Tu la portes une heure. Le curé marche à côté de toi, les mains vides, et il te raconte son village, tout ce dont il se souvient : la fontaine, la fête, le boulanger qui trichait sur le poids.",
      "Quand tu la lui rends, il te bénit, à la façon d'en bas, deux doigts levés. Puis il reprend sa cloche, et le village repart, en file, vers les tours blanches, avec ses maisons sur le dos.",
    ],
    choices: [{ label: "Revenir sur la plaine", to: "III_plaine" }] }),
};
