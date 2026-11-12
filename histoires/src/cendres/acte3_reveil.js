// Act III · L'Outre-Blanc, opening: the child of Sauvelune wakes on the white plain with those whose hands he caught
// (the others are sent away: rupture:avec:<hero>), Givre the snow fox, the walkers, and the plain as a hub from which
// the places of the forgotten open one by one. The child leads ("tu", masculine).
var A = { act: "III", noLead: true };
function P(o) { return Object.assign({}, A, o); }
function avec(h) { return { has: "rupture:avec:" + h }; }
var NOBODY = { not: { any: [avec("ysolde"), avec("pie"), avec("hylas"), avec("corbe"), avec("lisandre")] } };
module.exports = {
  III_reveil: P({ title: "Le blanc", place: "plaine",
    fx: { lead: "enfant", leadQuiet: true, flag: "acte3:debut", catchup: 11, catchupAll: true, catchupWhy: "la chute",
      awayUnless: { ysolde: avec("ysolde"), pie: avec("pie"), hylas: avec("hylas"), corbe: avec("corbe"), lisandre: avec("lisandre"),
        rodric: false, linette: false, ombeline: false, gaspard: false, givre: false, sansnom: false } },
    text: [
      "Tu te réveilles couché sur le dos. Au-dessus de toi, il n'y a pas de ciel. Il y a du blanc, uni, lumineux, sans soleil, comme l'intérieur d'une coquille d'œuf.",
      "Tu n'as pas froid. Tu n'as pas chaud. Tu te lèves. Le sol est blanc aussi, ni neige ni sable, quelque chose de doux qui ne garde pas la trace des pas.",
      { if: { souv: "enfant:reve" }, text: "Tu connais cet endroit. C'est ton rêve, ton plus vieux souvenir, celui que tu faisais enfant et que tu n'as jamais raconté à personne. Une plaine blanche sans fin. Il ne manque que la voix qui chante." },
      { if: { not: { souv: "enfant:reve" } }, text: "Tu as l'impression d'être déjà venu. Tu ne sais pas quand. C'est comme un mot qu'on cherche et qui ne vient pas." },
      { if: avec("ysolde"), text: "À trois pas, Ysolde se relève, l'épée déjà à la main. Elle regarde autour d'elle comme on inspecte un terrain avant la bataille. Il n'y a rien à inspecter." },
      { if: avec("pie"), text: "Pie est assis, les jambes allongées, et se tâte les poches une à une. Tout y est. Il a l'air presque déçu." },
      { if: avec("hylas"), text: "Hylas est debout, immobile, la tête levée. « Je vois », dit-il. Sa voix tremble. « Du blanc. Seulement du blanc. Mais je vois. »" },
      { if: avec("corbe"), text: "Corbe est à genoux, les mains à plat sur le sol, et elle écoute. « Il n'y a pas de morts ici, dit-elle. Ou alors ils sont tous vivants. »" },
      { if: avec("lisandre"), text: "Lisandre chante une note, une seule, pour essayer. Elle ne résonne pas. Elle s'arrête net, comme si le blanc l'avait avalée." },
      { if: NOBODY, text: "Tu es seul. Tu tournes sur toi-même. Personne. Tu as lâché toutes les mains, ou aucune ne t'a suivi. Tu cries des noms. Le blanc les avale." },
    ],
    choices: [{ label: "Quelque chose bouge, à tes pieds", to: "III_givre" }] }),

  III_givre: P({ title: "Givre", place: "plaine",
    text: [
      "Un renard. Un renardeau, plutôt, gros comme un chat, tout blanc, fait de neige tassée, avec deux yeux de glace. Il est en train de manger quelque chose dans la trace de tes pas. Des miettes. Il lève la tête, une miette au bout du museau.",
      "Tu sens une petite absence. Quelque chose que tu savais il y a un instant. Où tu as mis ton couteau, la dernière fois. Il l'a mangé.",
      "Il te regarde. Il remue la queue, un peu.",
    ],
    choices: [
      { label: "Le laisser manger. Ce n'est qu'un couteau", fx: { join: "givre", conf: { givre: 10 }, ep: ["perso", 500] }, to: "III_givre_suit" },
      { label: "Le chasser d'un geste", fx: { join: "givre", conf: { givre: -5 } }, to: "III_givre_revient" },
      { label: "Lui tendre la main, et lui offrir un vrai souvenir", tag: "Souvenir donné", stain: true, if: { souv: "enfant:moulin" }, why: "Tu ne l'as plus.",
        fx: { souv: "enfant:moulin", join: "givre", conf: { givre: 30 }, flag: "givre:moulin", ep: ["perso", 1500] }, to: "III_givre_moulin" },
    ] }),

  III_givre_suit: P({ title: "Il suit", place: "plaine",
    text: ["Il finit sa miette. Puis il trotte derrière toi, à trois pas, en reniflant tes talons. Chaque fois que tu oublies quelque chose, une broutille, un mot, il le mange. Tu finis par trouver ça reposant."],
    choices: [{ label: "Regarder autour de toi", to: "III_plaine" }] }),

  III_givre_revient: P({ title: "Il revient", place: "plaine",
    text: ["Il bondit en arrière, file à vingt pas, s'assied, te regarde. Quand tu repars, il suit, à distance. Quand tu t'arrêtes, il s'arrête. Au bout d'une heure, il est revenu à trois pas, et il mange tes miettes avec un air de reproche."],
    choices: [{ label: "Regarder autour de toi", to: "III_plaine" }] }),

  III_givre_moulin: P({ title: "Le moulin", place: "plaine",
    text: [
      "Tu penses au bruit de la roue du moulin, la nuit, à travers le plancher. Le tac-tac qui t'a bercé toute ta vie. Tu le lui tends, sans savoir comment, juste en le pensant très fort.",
      "Il le prend. Délicatement. Il le mange en fermant les yeux. Et il grandit, un peu, d'un coup, comme une flamme qu'on attise.",
      "Tu essaies de te rappeler ce qui te berçait, enfant, quand tu n'arrivais pas à dormir. Il n'y a rien. Le renardeau vient se coucher contre ta jambe. Il ronronne. Ça fait tac-tac.",
    ],
    choices: [{ label: "Regarder autour de toi", to: "III_plaine" }] }),

  III_plaine: P({ title: "La plaine blanche", place: "plaine", hub: true,
    text: [
      { first: true, text: "Au loin, des silhouettes. Elles marchent toutes dans la même direction, sans se presser. Des gens. Des milliers. Ils viennent de partout et vont vers un endroit que tu ne vois pas." },
      "La plaine n'a pas d'horizon. Mais en la regardant longtemps, on finit par voir des choses, au loin, comme des îles dans la brume : un clocher, puis dix, serrés, sur la gauche. Une forêt d'arbres noirs. Et tout au fond, droit devant, des tours blanches, pointues.",
      { if: { has: "acte3:cloches_fini" }, text: "Du côté des clochers, la ville des cloches sonne à peine, très doucement, comme on respire en dormant." },
    ],
    choices: [
      { label: "Parler aux gens qui marchent", hide: { seen: "III_marcheurs" }, to: "III_marcheurs" },
      { label: "Aller vers les clochers, sur la gauche", hide: { has: "acte3:cloches_fini" }, travel: "r_iii_cloches" },
      { label: "La forêt d'arbres noirs", if: { has: "acte3:cloches_fini" }, why: "Tu n'as aucune raison d'y aller. Pas encore.", hide: { has: "acte3:enfance_fini" }, travel: "r_iii_enfance" },
      { label: "Les tours blanches, droit devant", if: { all: [{ has: "acte3:cloches_fini" }, { has: "acte3:enfance_fini" }] }, why: "Elles sont trop loin. Chaque fois que tu marches vers elles, elles reculent.", travel: "r_iii_valcendre" },
      { label: "Le bruit de fer, sur la droite", if: { seen: "III_marcheurs" }, why: "Tu n'entends rien encore. Il faudrait d'abord écouter ceux qui marchent.", hide: { seen: "III_Q_gue" }, to: "III_Q_gue" },
      { label: "L'étendue lisse, où des gens sont couchés au bord", if: { has: "acte3:cloches_fini" }, why: "Tu ne la vois pas encore.", hide: { seen: "III_Q_lac" }, to: "III_Q_lac" },
      { label: "Givre, qui renifle le vent", hide: { any: [{ seen: "III_Q_givre" }, { not: { present: "givre" } }, { not: { has: "acte3:cloches_fini" } }] }, to: "III_Q_givre" },
      { label: "Marcher un moment avec Ysolde", hide: { any: [{ seen: "III_m_ysolde" }, { not: { present: "ysolde" } }, { not: { seen: "III_marcheurs" } }] }, to: "III_m_ysolde" },
      { label: "Marcher un moment avec Pie", hide: { any: [{ seen: "III_m_pie" }, { not: { present: "pie" } }, { not: { seen: "III_marcheurs" } }] }, to: "III_m_pie" },
      { label: "Marcher un moment avec Hylas, qui voit", hide: { any: [{ seen: "III_m_hylas" }, { not: { present: "hylas" } }, { not: { seen: "III_marcheurs" } }] }, to: "III_m_hylas" },
      { label: "Marcher un moment avec Corbe, pieds nus", hide: { any: [{ seen: "III_m_corbe" }, { not: { present: "corbe" } }, { not: { seen: "III_marcheurs" } }] }, to: "III_m_corbe" },
      { label: "Marcher un moment avec Lisandre", hide: { any: [{ seen: "III_m_lisandre" }, { not: { present: "lisandre" } }, { not: { seen: "III_marcheurs" } }] }, to: "III_m_lisandre" },
      { label: "Suivre Givre, qui trotte devant", hide: { any: [{ seen: "III_m_givre" }, { not: { present: "givre" } }, { not: { seen: "III_marcheurs" } }] }, to: "III_m_givre" },
      { label: "Une tour de guet en ruine, au milieu du blanc", hide: { any: [{ seen: "III_p_tour_guet" }, { not: { seen: "III_marcheurs" } }] }, to: "III_p_tour_guet" },
      { label: "Des clochettes, dans le blanc", hide: { any: [{ seen: "III_B_bergere" }, { not: { seen: "III_marcheurs" } }] }, to: "III_B_bergere" },
      { label: "Un village entier qui marche, avec ses maisons", hide: { any: [{ seen: "III_p_village" }, { not: { seen: "III_marcheurs" } }] }, to: "III_p_village" },
      { label: "Une barque, posée sur la neige", hide: { any: [{ seen: "III_p_passeur" }, { not: { seen: "III_marcheurs" } }] }, to: "III_p_passeur" },
      { label: "Un homme en livrée bleue, qui marche penché", hide: { any: [{ seen: "III_p_courrier" }, { not: { seen: "III_marcheurs" } }] }, to: "III_p_courrier" },
      { label: "Une maison à colombages, au milieu du blanc, avec une enseigne", hide: { any: [{ seen: "III_r_salle" }, { not: { seen: "III_marcheurs" } }] }, to: "III_r_salle" },
      { label: "Faire halte, et parler avec ceux qui sont là", hide: { any: [NOBODY, { seen: "III_halte" }] }, to: "III_halte" },
    ] }),

  III_marcheurs: P({ title: "Ceux qui marchent", place: "plaine",
    text: [
      "Tu rejoins la file. Personne ne te chasse. Personne ne te parle non plus, d'abord. Il y a de tout : des paysans en sabots, une dame dans une robe d'il y a cent ans, un soldat avec une cuirasse d'un modèle que tu n'as jamais vu, un enfant qui pousse un cerceau. Un petit dieu de bois, haut comme un chien, qui marche sur ses jambes sculptées et que personne ne prie plus.",
      "Tu demandes à une femme où ils vont. Elle te regarde, étonnée qu'on lui parle. « On rentre, dit-elle. La porte est ouverte. On l'a sentie s'ouvrir. On rentre chez nous. »",
      { if: { has: "corbe:rite_ii" }, text: "Puis elle fronce les sourcils. « Elle s'est refermée, la porte. Quelqu'un est entré, et elle s'est refermée. Mais elle va se rouvrir. Elle se rouvre toujours. »" },
      { if: { has: "corbe:ouvre" }, text: "« Quelqu'un a chanté nos noms, ajoute-t-elle. Tous. On l'a entendu jusqu'ici. »" },
      "Tu demandes d'où elle vient. Elle cherche. Elle ne sait plus. Elle sait seulement qu'elle y retourne.",
    ],
    choices: [{ fx: { flag: "acte3:marcheurs" }, back: "III_plaine" }] }),

  III_halte: P({ title: "La halte", place: "plaine",
    text: [
      "Vous vous asseyez en cercle, dans le blanc. Il n'y a pas de feu à faire. Il n'y a rien à manger, et vous n'avez pas faim. Personne ne sait combien de temps a passé depuis la chute. Une heure, un jour.",
      { if: avec("ysolde"), text: "Ysolde dit : « Les autres. Ceux qu'on n'a pas tenus. » Elle ne finit pas sa phrase. Elle n'en a pas besoin." },
      { if: avec("pie"), text: "Pie dit : « Linette était au col. » Il ne dit rien d'autre de toute la halte." },
      { if: avec("hylas"), text: "Hylas regarde ses mains. Il les voit. Il les regarde depuis une heure. « Elles sont vieilles », dit-il, étonné." },
      { if: avec("corbe"), text: "Corbe regarde vers les tours blanches. « Ma mère est là-bas, peut-être. Ou moi. »" },
      { if: avec("lisandre"), text: "Lisandre essaie de chanter, tout bas. Le blanc avale la première note, puis la deuxième. À la troisième, elle s'arrête, et elle rit, d'un rire nerveux, et le rire, lui, résonne." },
    ],
    choices: [{ fx: { conf: { ysolde: 5, pie: 5, hylas: 5, corbe: 5, lisandre: 5 } }, back: "III_plaine" }] }),
};
