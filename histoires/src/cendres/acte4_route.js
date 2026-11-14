// Act IV · events on the roads of the year after (regions iv_nord, iv_sud, iv_est in base.js): Fanchon the pedlar,
// the cairn of names, a lost little Gleaner; the sellers of false tokens, the grey men who look at eyes, the family
// with a hole in it; the deserters' camp, the crows of the old war, the queen's messenger.
var A = { act: "IV", noLead: true, place: null };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  // ---------------------------------------------------------------- iv_nord
  E4_fanchon: P({ title: "La colporteuse",
    text: [
      "Une carriole bâchée, une mule pelée, et sur le siège, une femme en châle rouge qui chante faux. Fanchon la colporteuse. Elle passait à Sauvelune deux fois l'an avec des aiguilles et des nouvelles fausses.",
      "« Toi ! dit-elle. Je te connais ! Je ne sais pas d'où, mais je te connais ! » Elle saute de la carriole. « J'ai tout ce qu'il faut pour l'année blanche. Des craies pour écrire son nom sur les portes. Des colliers à graver pour les enfants. Et des almanachs de l'an passé : ils sont vrais, cette fois, j'ai vérifié. »",
    ],
    choices: [
      { label: "Lui acheter des nouvelles, pour deux sous", fx: { gold: -2, flag: "fanchon:iv" }, to: "E4_fanchon_nouvelles" },
      { label: "Lui demander si elle est passée à Sauvelune", to: "E4_fanchon_sv" },
    ] }),

  E4_fanchon_nouvelles: P({ title: "Les nouvelles",
    text: ["Elle compte les sous, les mord, les range. « La reine est malade d'un livre, dit-elle. Le Greffier-Majeur ne dort plus. À Corvanne, ils ont une margrave qui a été soldat quarante ans et qui en a assez. Et au moutier des Veilleurs, il y a un frère qui retrouve les gens. » Elle cligne de l'œil. « Trois sont fausses. Une est vraie. » Tu ne sauras jamais laquelle."],
    choices: [{ back: "@route" }] }),

  E4_fanchon_sv: P({ title: "Sauvelune",
    text: [
      { if: { has: "nord:rendu=sauvelune" }, text: "« Sauvelune ? Bien sûr. Ils m'ont acheté trois cents craies. Tout le village écrit son nom partout, même sur les vaches. Une fille de forgeron m'a demandé si j'avais vu passer quelqu'un avec des yeux gris, presque blancs. » Elle te regarde. « Tiens. Comme les tiens. »" },
      { if: { not: { has: "nord:rendu=sauvelune" } }, text: "« Sauvelune ? » Elle cherche. Elle fronce les sourcils. « Il y a un pré, là-haut, au-dessus de Pont-de-Saule. Ma mule s'arrête toujours devant. Elle ne veut pas passer. Je ne sais pas pourquoi. » Elle caresse la mule. « Elle se souvient de quelque chose, elle. »" },
    ],
    choices: [{ back: "@route" }] }),

  E4_cairn: P({ title: "Le cairn",
    text: [
      "Au passage d'un petit col, un cairn plus haut qu'un homme. Chacune porte un nom, gravé ou peint. Des centaines. Les gens de la montagne en ajoutent une en passant, pour quelqu'un qu'ils ont perdu dans l'année blanche, ou pour eux-mêmes, au cas où.",
      "Au pied du cairn, des pierres plates, et un clou rouillé pour graver.",
    ],
    choices: [
      { label: "Graver le nom de Sauvelune", fx: { flag: "cairn:sauvelune", ep: ["perso", 400] }, to: "E4_cairn_grave" },
      { label: "Graver ton autre nom, celui de Valcendre", fx: { flag: "cairn:aelan", ep: ["perso", 400] }, to: "E4_cairn_grave" },
      { label: "Ne rien graver. Passer", to: "@route" },
    ] }),

  E4_cairn_grave: P({ title: "Une pierre de plus",
    text: ["Ça prend une demi-heure, avec le clou. Tu poses ta pierre sur le cairn, tout en haut, en équilibre. Elle tient. Quand tu te retournes, plus bas sur le chemin, tu ne la distingues déjà plus des autres. Elle est faite pour ça."],
    choices: [{ back: "@route" }] }),

  E4_petit_glaneur: P({ title: "Le petit Glaneur",
    text: [
      "Dans un pierrier, une chose blanche, grosse comme un chien, qui tourne en rond. Un Glaneur. Un petit, sans sceau au front, perdu. Il a dû tomber du col la nuit de la Rupture et errer toute l'année. Il n'a rien glané depuis longtemps. Il est presque transparent.",
      "Il te voit. Il ne fuit pas. Il s'approche, en titubant, comme un chiot affamé.",
      { with: "gaspard", text: "Gaspard s'agenouille devant lui. « Il ne sait pas ce qu'il est, dit-il. Moi non plus, je ne savais pas, au début. »" },
    ],
    choices: [
      { label: "Lui donner une miette. Un petit oubli, sans importance", fx: { flag: "glaneur_petit:nourri", ep: ["perso", 800] }, to: "E4_petit_glaneur_nourri" },
      { label: "Le chasser", to: "E4_petit_glaneur_combat" },
    ] }),

  E4_petit_glaneur_nourri: P({ title: "Une miette",
    text: [
      "Tu penses à quelque chose sans importance : la couleur d'une écuelle, au moutier. Tu la lui tends. Il la mange. Il devient un peu plus blanc, un peu plus net.",
      { with: "givre", text: "Givre grogne, pour la forme. Puis il va renifler le petit Glaneur, et ils restent un moment nez à nez, le renard de neige et la chose de neige. Givre lui lèche le front, là où il n'y a pas de sceau." },
      "Le petit Glaneur s'en va vers le nord, vers le col, sans se presser. Il sait où il va, maintenant.",
    ],
    choices: [{ back: "@route" }] }),

  E4_petit_glaneur_combat: P({ title: "Le pierrier",
    combat: { title: "Le petit Glaneur", enemies: ["glaneur_petit"], terrain: "nature", range: "contact",
      flee: { dom: "nature", label: "Le laisser là et contourner le pierrier", to: "@route" },
      win: { fx: { ep: ["seance", 500] }, to: "@route" }, lose: { fx: { pv: -2 }, to: "@route" } },
    text: ["Tu lèves la main. Il comprend. Et comme il n'a plus rien à perdre, il attaque."],
    choices: [] }),

  // ---------------------------------------------------------------- iv_sud
  E4_faux_jetons: P({ title: "Les faux jetons",
    text: [
      "Au bord de la route, sous un auvent, deux hommes en robe grise vendent des jetons de plomb. « Plus besoin d'aller à la tour ! Écrit ici, même prix, même jeton ! » Une file s'est formée. Des familles qui comptent leurs sous.",
      "Tu regardes un jeton. Le plomb est mou, la gravure baveuse, la plume et la clé à l'envers. Ce ne sont pas des greffiers.",
      { with: "pie", text: "Pie prend un jeton, le soupèse, le mord. « Travail de cochon, dit-il, outré. Même moi, à douze ans, je faisais mieux. »" },
    ],
    choices: [
      { label: "Les démasquer devant la file", test: { dom: "social", label: "Démasquer", help: [{ if: { present: "pie" }, v: 20 }, { if: { present: "hylas" }, v: 10 }] },
        win: { fx: { flag: "faux_jetons:demasques", ep: ["perso", 800] }, to: "E4_faux_jetons_ok" }, lose: { to: "E4_faux_jetons_combat" } },
      { label: "Les laisser. Un faux jeton protège autant qu'un vrai", fx: { flag: "faux_jetons:laisses" }, to: "E4_faux_jetons_laisse" },
    ] }),

  E4_faux_jetons_ok: P({ title: "La file",
    text: ["Tu montres le jeton à l'envers, le plomb qui plie sous l'ongle. La file comprend. Les deux hommes ramassent leur caisse et filent à travers champs. Une femme te demande alors, très sérieusement, si le vrai jeton protège vraiment de la neige. Les mots te manquent. Tu lui dis la vérité : non."],
    choices: [{ back: "@route" }] }),

  E4_faux_jetons_laisse: P({ title: "Le plomb",
    text: ["Tu passes. Derrière toi, les familles paient. Elles repartent avec leurs jetons à l'envers, rassurées. Tu te dis qu'un faux jeton ne protège de rien, et qu'un vrai non plus, et qu'au moins le faux ne met pas leur nom dans le Grand Livre. Tu n'es pas sûr que ce soit un raisonnement."],
    choices: [{ back: "@route" }] }),

  E4_faux_jetons_combat: P({ title: "L'auvent",
    combat: { title: "Les faux greffiers", enemies: [{ id: "brigand", n: 2 }], terrain: "nature", range: "contact",
      win: { fx: { ep: ["seance", 800], gold: 6 }, to: "@route" }, lose: { fx: { gold: -3 }, to: "@route" } },
    text: ["La file ne te croit pas. Les deux hommes, eux, savent que tu as raison. Ils sortent des gourdins de sous la caisse."],
    choices: [] }),

  E4_gris: P({ title: "Les hommes en gris",
    text: [
      "Un barrage, au pont d'un ruisseau. Deux gardes noirs et un greffier en gris, assis derrière une table, qui regarde les yeux des passants. Pas leurs papiers : leurs yeux. Il tient une lanterne, en plein jour, et il la lève devant chaque visage.",
      "Tu as les yeux gris presque blancs.",
    ],
    choices: [
      { label: "Passer à gué, plus haut, sans être vu", test: { dom: "discretion", label: "Le gué", help: [{ if: { present: "givre" }, v: 10 }, { if: { present: "corbe" }, v: 10 }] },
        win: { fx: { ep: ["perso", 600] }, to: "@route" }, lose: { to: "E4_gris_combat" } },
      { label: "Passer devant lui, les yeux baissés", test: { dom: "social", label: "Les yeux baissés", help: [{ if: { present: "lisandre" }, v: 15 }] },
        win: { fx: { ep: ["perso", 600] }, to: "E4_gris_passe" }, lose: { to: "E4_gris_combat" } },
    ] }),

  E4_gris_passe: P({ title: "La lanterne",
    text: ["Le greffier lève la lanterne. Tu regardes tes pieds. Il hésite. Derrière toi, un enfant pleure, une charrette se met en travers. Il baisse la lanterne et fait signe de passer. Vingt pas plus loin, tu te rends compte que tu n'as pas respiré."],
    choices: [{ back: "@route" }] }),

  E4_gris_combat: P({ title: "Le barrage",
    combat: { title: "Le barrage du ruisseau", enemies: [{ id: "garde_noir", n: 2 }], terrain: "nature", range: "contact",
      flee: { dom: "nature", label: "Sauter dans le ruisseau et descendre le courant", fx: { flag: "gris:vu" }, to: "@route" },
      win: { fx: { ep: ["seance", 1200], flag: "gris:vu" }, to: "@route" }, lose: { fx: { pv: -3, flag: "gris:vu" }, to: "@route" } },
    text: ["Le greffier lâche la lanterne. « C'est lui ! » Les gardes noirs tirent l'épée. Le greffier, lui, s'enfuit vers Pallanche, à toutes jambes, pour prévenir."],
    choices: [] }),

  E4_famille: P({ title: "La famille",
    text: [
      "Une famille assise au bord de la route, autour d'une charrette. Un père, une mère, deux garçons. Et une place vide, sur le banc de la charrette, où personne ne s'assied. Ils la contournent sans y penser.",
      "La mère te demande de l'eau. Pendant qu'elle boit, elle regarde la place vide. Elle dit : « Il y a quelque chose qui manque. Je ne sais pas quoi. Depuis l'hiver. On met une écuelle de trop, le soir. On ne sait pas pour qui. »",
    ],
    choices: [
      { label: "Lui donner une cuillère de miel blanc", hide: { not: { item: "miel_blanc" } }, fx: { drop: "miel_blanc", flag: "famille_route:miel", ep: ["perso", 1200] }, to: "E4_famille_miel" },
      { label: "Lui dire de continuer à mettre l'écuelle", fx: { ep: ["perso", 300] }, to: "E4_famille_ecuelle" },
    ] }),

  E4_famille_miel: P({ title: "Le miel",
    text: ["Elle goûte. Elle ferme les yeux. Pendant un long moment, rien. Puis elle dit, tout doucement : « Rose. » Elle regarde la place vide. Elle se met à pleurer, et son mari ne comprend pas, et puis il comprend aussi. Ils ne retrouvent pas leur fille. Ils retrouvent qu'ils en avaient une. C'est tout ce que le miel peut faire."],
    choices: [{ back: "@route" }] }),

  E4_famille_ecuelle: P({ title: "L'écuelle",
    text: ["Elle hoche la tête, comme si tu avais dit quelque chose d'important. Peut-être. Quand tu repars, elle a posé une écuelle sur le banc vide, et elle la remplit d'eau, pour personne."],
    choices: [{ back: "@route" }] }),

  // ---------------------------------------------------------------- iv_est
  E4_deserteurs: P({ title: "Le camp dans le bois",
    text: [
      "Dans un bois de hêtres, la fumée d'un feu mal éteint. Une vingtaine d'hommes, en uniforme d'Esquarre sans les insignes. Des déserteurs. Ils se lèvent en vous voyant, la main sur l'épée, et ils sont trop fatigués pour faire peur.",
      "« On ne retourne pas à la Lisse, dit le plus vieux. On y était, il y a trois ans. On sait ce que c'est, un pont. »",
      { with: "ysolde", text: "Il reconnaît Ysolde. Tous la reconnaissent. Ils baissent les yeux. Le plus vieux dit : « Capitaine. » Il ne sait pas s'il doit la saluer ou s'enfuir." },
    ],
    choices: [
      { label: "Leur donner à manger, et passer", fx: { food: -2, flag: "deserteurs:nourris", ep: ["perso", 600] }, to: "E4_deserteurs_pain" },
      { label: "Leur dire qu'à la Lisse, cette fois, on aura besoin de gens qui savent ce qu'est un pont", test: { dom: "social", label: "Convaincre", help: [{ if: { present: "ysolde" }, v: 25 }] },
        win: { fx: { flag: "deserteurs:reviennent", ep: ["perso", 1200] }, to: "E4_deserteurs_viennent" }, lose: { to: "E4_deserteurs_pain" } },
    ] }),

  E4_deserteurs_pain: P({ title: "Le bois",
    text: [
      { after: "deserteurs:nourris", text: "Ils mangent en silence. Le plus vieux te remercie d'un signe de tête. Quand tu repars, ils éteignent le feu, cette fois correctement, et ils prennent la direction du sud, loin de la rivière." },
      { before: "deserteurs:nourris", text: "Ils t'écoutent jusqu'au bout. Le plus vieux secoue la tête, sans colère. « On sait ce que c'est, un pont », répète-t-il. Quand tu repars, ils éteignent le feu, cette fois correctement, et ils prennent la direction du sud, loin de la rivière." },
    ],
    choices: [{ back: "@route" }] }),

  E4_deserteurs_viennent: P({ title: "Vingt",
    text: ["Ils se regardent. Le plus vieux remet ses insignes, qu'il gardait dans sa poche. « Pas pour la reine, dit-il. Pour le pont. » Ils prennent la route de l'est, derrière vous, à une heure de distance, pour qu'on ne les voie pas arriver ensemble. Ils arriveront."],
    choices: [{ back: "@route" }] }),

  E4_corbeaux: P({ title: "Les corbeaux",
    text: [
      "Un champ, au bord de la route. Rien de remarquable, sinon que des centaines de corbeaux y sont posés, silencieux, tournés tous dans la même direction. Vers l'est. Vers la Lisse.",
      { with: "corbe", text: "Corbe s'arrête. Elle écoute. « Ils savent, dit-elle. Ils savent toujours où il va y avoir des morts. Ils attendent. » Elle frappe son tambour, une fois. Tous les corbeaux s'envolent en même temps, et le ciel est noir pendant une minute, et puis ils se reposent, un peu plus loin, toujours tournés vers l'est." },
      { without: "corbe", text: "Tu frappes dans tes mains. Aucun ne bouge. Ils ne te regardent même pas. Tu repars avec l'impression d'avoir été compté." },
    ],
    choices: [{ back: "@route" }] }),

  E4_messager: P({ title: "Le messager",
    text: [
      "Un cheval sans cavalier, au bord de la route, qui broute. Il porte le harnais bleu et argent des messagers de la reine. Plus loin, dans le fossé, le cavalier. Il est vivant. Il est assis. Il regarde la sacoche qu'il tient sur ses genoux, et il ne sait plus à qui il devait la porter.",
      "Dans la sacoche, une lettre cachetée, adressée au Greffier-Majeur, à Pallanche. Le sceau de la reine.",
    ],
    choices: [
      { label: "Lire la lettre", fx: { flag: "messager:lu", clue: "n_lettre_reine_iv", ep: ["perso", 800] }, to: "E4_messager_lu" },
      { label: "Remettre la lettre au messager, et lui dire où il allait", fx: { flag: "messager:aide" }, to: "E4_messager_aide" },
    ] }),

  E4_messager_lu: P({ title: "La lettre",
    text: ["*Monsieur le Greffier-Majeur. Je vous ai déclaré traître, et je vous écris. Vous savez ce que je vais vous demander, puisque vous savez tout. Je vous le demanderai seulement si à l'aube du jour fixé, il n'y a rien. Tenez-vous prêt. Je prie pour qu'il y ait quelque chose. Isaure.* Tu recachettes la lettre avec la cire d'une chandelle. La reine ne te pardonnerait pas de l'avoir lue. Toi, tu lui pardonnes de l'avoir écrite."],
    choices: [{ label: "Remettre la lettre au messager", fx: { flag: "messager:aide" }, to: "E4_messager_aide" }] }),

  E4_messager_aide: P({ title: "Pallanche",
    text: ["Tu lui dis : « Pallanche. Le Greffier-Majeur. » Il répète, comme une leçon. Il remonte à cheval, et il repart vers l'ouest, au trot, en répétant à voix haute le nom de la ville et celui de l'homme, pour ne pas les perdre en route."],
    choices: [{ back: "@route" }] }),
};
