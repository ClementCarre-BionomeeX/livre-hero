// Act III · « La cloche du soir »: the hearing at the Échevinage, where the hero names a culprit, a motive and a proof
// (the engine's `accuse` tag), keeps silent, or pleads only for the bargeman; then the dawn on the port, when the barge
// leaves; and the seven endings (the seventh, « Le Pot d'Étain », is in act I). The endings read what the side quests
// left: the money-changer's testimony (ecus:verite) and the words carried to the cell (amants:mot).

function endFx(id, more) {
  var fx = { flag: ["fin:" + id], quest: "III_audience", ep: ["histoire", 1500] };
  Object.keys(more || {}).forEach(function (k) { fx[k] = [].concat(fx[k] || [], more[k]); });
  return fx;
}
var GOT = { all: [{ has: "accuse:M:qui" }, { has: "accuse:M:preuve" }] };

// What becomes of the others, told in every ending where the truth came out (or did not).
var ECUS = { if: { has: "ecus:verite" }, text: "Une semaine plus tard, Dame Isaline Veillon se présente à l'Échevinage avec sa plaque de marbre, sa balance, deux écus et la feuille de Théophane. Elle fait sonner les deux pièces devant les échevins assemblés, l'une après l'autre, puis elle se tait et les laisse écouter. On refond les écus de dix années. Il faut deux ans. À Basse-Aune, on recommence à les prendre au compte et non plus au poids." };
var AMANTS = { if: { has: "amants:mot" }, text: "Au printemps, une barge de sel descend l'Aune vers la mer avec deux passagers tournés vers l'aval. Gervaise Maupas, sur le pont des Lavandières, agite son tablier jusqu'à ce que la barge ait disparu. Le batelier, en passant sous le pont, lève la main pour la saluer." };
var AMANTS_NON = { if: { all: [{ not: { has: "amants:mot" } }, { not: { has: "fin:condamne" } }] }, text: "Hugon Maupas reprend les barges. On le voit parfois, le soir, au pont des Lavandières. Il ne s'y arrête pas. Oriane Ombreuil part en pension chez des cousines, à Vieux-Gué, avant la fin de l'automne ; on dit qu'elle en veut encore à Hugon de son silence, ou que Hugon s'en veut, selon qui raconte." };

module.exports = {
  // ------------------------------------------------------------------ the hearing
  C_audience: { act: "III", title: "L'audience", place: "haute",
    accuse: { mystery: "M", label: "Te lever et accuser",
      to: [
        { if: { all: [{ has: "accuse:M:qui" }, { has: "gaspard:pris" }] }, to: "C_verite_pris" },
        { if: { has: "gaspard:pris" }, to: "C_confusion" },
        { if: GOT, to: "C_ordre" },
        { if: { has: "accuse:M:qui" }, to: "C_rire" },
        { if: { is: { "accuse-M-qui": "malestroit" } }, to: "C_malestroit" },
        { if: { is: { "accuse-M-qui": "theophane" } }, to: "C_theophane" },
        { to: "C_echec" },
      ] },
    text: [
      "La grande salle de l'Échevinage est haute comme une église, avec des poutres peintes d'étoiles et des fenêtres où brûle encore le couchant. Au fond, sur une estrade, douze échevins en robe rouge, assis en demi-cercle. Au milieu, le premier échevin, très vieux, qui somnole déjà. À sa droite, Évrard Malestroit, maître de la Monnaie. À sa gauche, l'échevin Brisson, qui tient le registre et mène les débats, et qui sourit à la salle comme un hôte à ses invités.",
      "On amène Hugon Maupas entre deux gardes, les mains liées devant lui. Il cherche quelqu'un des yeux dans la foule, et il le trouve, et il baisse la tête. Sa mère ne pleure pas.",
      "La sergente Hallard témoigne de l'arrestation, debout, les mains dans le dos, d'une voix sans couleur : la bague sur le comptoir de la changeuse, la menace à la Lanterne Sourde, la nuit sans alibi.",
      { if: { has: "malestroit:menace" }, text: "Sur l'estrade, Malestroit t'a vu{e} entrer. Il fait un petit signe de la main, et au fond de la salle, deux hommes sans livrée se rapprochent de la porte." },
      { if: { has: "hallard:allie" }, text: "Puis elle ajoute, sans changer de ton : « Je dois dire au conseil que j'ai, depuis, des doutes. Je demande qu'on entende la personne que la mère de l'accusé a engagée. » Un murmure parcourt la salle. Brisson lève un sourcil, et note." },
      { if: { has: "gaspard:pris" }, text: "Puis elle ajoute : « J'ai aussi, dans ma cellule du rez-de-chaussée, un homme arrêté cette nuit aux Teinturiers. Je demande au conseil d'entendre d'abord ce qu'on a à lui dire à son sujet. » Malestroit fronce les sourcils. Brisson se penche en avant." },
      { if: { not: { has: "hallard:allie" } }, text: "Brisson se tourne vers la salle. « La mère de l'accusé a, paraît-il, engagé quelqu'un pour fouiller la ville. C'est son droit. Si cette personne a quelque chose à dire au conseil, qu'elle le dise maintenant. Après, il sera trop tard. »" },
      "Tous les yeux se tournent vers toi.",
    ],
    choices: [
      { label: "Dire au moins ce que Hugon t'a raconté de sa nuit", if: { has: "hugon:aveu" }, hide: { not: { has: "hugon:aveu" } }, to: "C_plaidoirie" },
      { label: "Te taire", to: "C_silence" },
    ] },

  // ------------------------------------------------------------------ the right name, the man in the cell
  C_verite_pris: { act: "III", title: "L'homme du rez-de-chaussée", place: "haute",
    text: [
      "Tu dis le nom. Dans la salle, quelqu'un rit, nerveusement, et se tait aussitôt. Brisson ouvre la bouche, la referme.",
      "Alors la sergente Hallard fait un signe, et deux de ses hommes amènent un homme grand, voûté, rasé, en habit de drap brun, les mains liées. Il marche droit. Il garde les yeux au sol. Au premier rang, quelqu'un pousse un cri : Dame Sibylle Ombreuil, qui s'est levée, et qui reste debout, une main sur la bouche.",
      { if: { all: [{ has: "sibylle:mains" }, { not: { has: "sibylle:aveu" } }] }, text: "Elle ne regarde pas son visage. Elle regarde ses mains liées." },
      { if: { has: "accuse:M:preuve" }, text: "Tu poses devant le conseil ce que tu as : les preuves, une à une, dans l'ordre où tu les as trouvées. Personne ne t'interrompt. Brisson a cessé d'écrire." },
      { if: { not: { has: "accuse:M:preuve" } }, text: "Tu n'as pas grand-chose à poser devant le conseil. Mais tu peux t'en passer : la veuve, au premier rang, reconnaît d'elle-même le grain de beauté sous l'œil gauche, la façon de se tenir, les mains." },
      { if: { has: "accuse:M:mobile" }, text: "Quand tu as fini, Gaspard Ombreuil lève les yeux vers toi, pour la première fois. « Oui, dit-il. Disparaître. Qu'on enterre l'essayeur, et qu'on oublie ce qu'il avait signé. C'était un bon calcul. Il n'y manquait qu'une chose. » Il ne dit pas laquelle." },
      { if: { not: { has: "accuse:M:mobile" } }, text: "Quand tu as fini, Gaspard Ombreuil secoue la tête, lentement. « Vous n'avez pas compris pourquoi, dit-il. Le petit allait parler, oui. Mais j'aurais pu l'acheter, ou le chasser. Je voulais *disparaître*. Qu'on enterre l'essayeur, et qu'on oublie ce qu'il avait signé. » Il se tait. Il a l'air presque déçu." },
    ],
    choices: [{ label: "Regarder les gardes l'emmener", big: true, to: "E_verite" }] },
  C_confusion: { act: "III", title: "L'homme du rez-de-chaussée", place: "haute",
    text: [
      "Tu dis un nom. Ce n'est pas celui de l'homme que la sergente garde dans sa cellule, et elle te regarde, longtemps, avec une sorte de fatigue.",
      "Puis elle fait un signe à ses hommes, et l'on amène dans la salle un homme grand, voûté, rasé, en habit de drap brun. Au premier rang, Dame Sibylle Ombreuil se lève, et crie, et le nom qu'elle crie n'est pas celui que tu as dit.",
      "Ce soir-là, la vérité sort quand même. Elle ne sort pas de ta bouche.",
    ],
    choices: [{ label: "Laisser la salle s'emballer", to: "E_verite" }] },

  // ------------------------------------------------------------------ the right name, with proof: the dawn
  C_ordre: { act: "III", title: "L'ordre", place: "haute",
    text: [
      "Tu dis le nom. La salle rit, puis cesse de rire, parce que tu continues de parler, et que ce que tu poses devant le conseil, une chose après l'autre, ne fait plus rire personne. Au premier rang, Dame Sibylle Ombreuil s'est mise à trembler.",
      { if: { has: "accuse:M:mobile" }, text: "Quand tu dis pourquoi, Malestroit ferme les yeux." },
      "Le vieux premier échevin s'est réveillé. Il te regarde, il regarde la sergente, et il dit, d'une voix cassée qui porte jusqu'au fond : « Si ce que dit cette personne est vrai, cet homme est encore en ville. Où ? »",
      "Tu le dis : le Bassin Bleu, la Vouivre, trois tonneaux marqués d'un G., et l'aube du quatrième jour.",
      "« Sergente, dit le premier échevin. Demain à l'aube, vous saisirez cette barge. Le batelier reste en cellule jusqu'à ce que nous sachions. » Il se lève. « La séance est levée. »",
      "La sergente Hallard te fait signe. « Vous venez, dit-elle. C'est votre gibier. »",
    ],
    choices: [{ label: "Attendre l'aube sur le quai des Teinturiers", big: true, takes: "morning", fx: { flag: "aube:guet" }, to: "C_aube" }] },
  C_rire: { act: "III", title: "Un mort", place: "haute",
    text: [
      "Tu dis le nom. La salle éclate de rire.",
      "« Gaspard Ombreuil ? dit Brisson, ravi. L'essayeur ? Que nous avons enterré hier, à trois heures, en présence de sa veuve et de tout le conseil ? Il a donc tué un autre, puis il s'est noyé lui-même, puis il est sorti de l'eau pour assister à son enterrement ? » Il prend la salle à témoin. Elle rit encore.",
      "Tu n'as rien, ou rien qui tienne, à poser devant le conseil. Ta parole contre un mort enterré.",
      { if: { has: "hallard:allie" }, text: "La sergente Hallard, seule, ne rit pas. Elle demande la parole, et elle dit que le conseil ferait bien de repousser son jugement d'une semaine, le temps qu'elle vérifie. Le vieux premier échevin, à moitié endormi, dit oui, pour en finir. Hugon retourne en cellule." },
      { if: { not: { has: "hallard:allie" } }, text: "Le vieux premier échevin, à moitié endormi, dit que l'on jugera le batelier demain, à la même heure, quand le conseil aura retrouvé son sérieux. Hugon retourne en cellule." },
    ],
    choices: [
      { label: "Aller seul{e} au port, avant l'aube, pour voir partir la Vouivre", if: { any: [{ clue: "m_passage" }, { clue: "m_declaration" }, { clue: "d_tonneaux" }, { has: "ganse:connu" }] }, hide: { not: { any: [{ clue: "m_passage" }, { clue: "m_declaration" }, { clue: "d_tonneaux" }, { has: "ganse:connu" }] } }, takes: "morning", fx: { flag: "aube:seul" }, to: "C_aube" },
      { label: "Rentrer au Pot d'Étain", takes: "morning", to: "E_enfui" },
    ] },
  C_aube: { act: "III", title: "L'aube", place: "teinturiers",
    text: [
      { if: { has: "aube:guet" }, text: "La sergente Hallard et six hommes du guet, en manteau, attendent avec toi derrière les piles de bois du port. Le ciel pâlit à l'est. Tous se taisent. On entend l'eau." },
      { if: { has: "aube:seul" }, text: "Tu attends seul{e}, derrière les piles de bois du port, emmitouflé{e} dans ton manteau. Le ciel pâlit à l'est. Personne ne viendra t'aider : le guet dort, et le conseil rit encore." },
      "Sur la Vouivre, on largue les amarres d'arrière. Les passagers montent un par un, avec leurs malles : des marchands, une famille avec des enfants qui bâillent. Le patron compte, sur le roof.",
      "Et le dernier, un homme grand, voûté, en habit de drap brun, un large chapeau rabattu sur les yeux, qui ne porte rien, et qui monte à bord en tenant la rambarde de sa main gauche, enveloppée d'un linge.",
      "Sur les tonneaux, à l'avant, le colosse se lève.",
    ],
    choices: [
      { label: "Sauter à bord", fight: { title: "La Vouivre", enemies: [{ id: "passeur", n: 1 }], terrain: "ville", spare: true,
        win: { to: "C_quai_pris" }, lose: { fx: { pv: -3 }, to: "C_quai_perdu" },
        flee: { label: "Reculer sur le quai", dom: "discretion", diff: 0, to: "C_quai_perdu" } } },
    ] },
  C_quai_pris: { act: "III", title: "Le quai", place: "teinturiers",
    text: [
      "Le colosse tombe entre les tonneaux, et il ne se relève pas.",
      { if: { has: "aube:guet" }, text: "Les hommes du guet sont déjà sur le pont. L'homme au chapeau n'essaie pas de fuir : il n'y a nulle part où fuir, sur une barge. Il ôte son chapeau, de lui-même, et il le tient contre sa poitrine, comme à un enterrement. La sergente Hallard le regarde, et dit son nom." },
      { if: { has: "aube:seul" }, text: "L'homme au chapeau n'essaie pas de fuir : il n'y a nulle part où fuir, sur une barge, et les passagers le regardent. Il ôte son chapeau, de lui-même, et te le tend, comme on rend les armes. Le patron de la Vouivre, qui n'aime pas les histoires, fait chercher le guet." },
      "Un portefaix soulève, avec une barre, le couvercle d'un des tonneaux marqués G. Il n'y a pas d'indigo. Il y a, serrés, les uns contre les autres, des lingots d'argent fin, gros comme des briques, qui luisent dans le petit jour.",
    ],
    choices: [{ label: "Regarder le soleil se lever sur l'Aune", big: true, fx: { flag: ["gaspard:aube", "d:argent"] }, to: "E_verite" }] },
  C_quai_perdu: { act: "III", title: "Le quai", place: "teinturiers",
    text: [
      "Le colosse te repousse sur le quai d'une seule main, comme on chasse un chien. Tu tombes sur les planches. Quand tu te relèves, la Vouivre a largué ses dernières amarres, et le courant la prend.",
      { if: { has: "aube:guet" }, text: "Les hommes du guet courent le long du quai, en criant. Une barque se détache, trop tard. La Vouivre est déjà au milieu du fleuve, là où le courant de l'Aune file vers les rapides." },
      "Sur le roof, l'homme au chapeau ne se retourne pas.",
    ],
    choices: [{ label: "Regarder la barge s'éloigner", to: "E_enfui" }] },

  // ------------------------------------------------------------------ the wrong names
  C_malestroit: { act: "III", title: "Le maître de la Monnaie", place: "haute",
    text: [
      "Tu dis le nom. Il y a un silence, puis un bruit de chaises : tous les échevins se sont tournés vers Malestroit. Lui reste immobile.",
      { if: { any: [{ has: "r:aveu" }, { clue: "r_contra" }, { clue: "r_herault" }] }, text: "Tu dis ce que tu sais : le banquet quitté avant onze heures, le retour à minuit, les souliers mouillés ; la Monnaie, juste en face de la Maison de l'Essai, la nuit même où l'essayeur est mort. L'échevin Brisson confirme, d'une voix forte, chaque mot. Malestroit pâlit." },
      { if: { has: "brisson:paye" }, text: "Brisson te regarde une seconde, une seule, avec la satisfaction d'un homme qui a bien placé son argent." },
      { if: { not: { any: [{ has: "r:aveu" }, { clue: "r_contra" }, { clue: "r_herault" }] } }, text: "Tu n'as presque rien. Mais Brisson se lève, et il a, lui, tout ce qu'il faut : il a vu, dit-il, Malestroit quitter le banquet. La salle gronde." },
      "Malestroit se lève. « J'étais à la Monnaie, dit-il. Je ne l'ai pas tué. Je n'ai tué personne. » Il le dit d'une voix si fatiguée qu'on ne le croit pas.",
    ],
    choices: [{ label: "Le regarder se rasseoir", to: "E_malestroit" }] },
  C_theophane: { act: "III", title: "Le second", place: "haute",
    text: [
      "Tu dis le nom de Théophane Lescot, le second qui a disparu la nuit de la fête avec l'argent de la Monnaie. La salle approuve, avant même que tu aies fini : c'est le nom qu'elle attendait sans le savoir, celui d'un homme qui n'est pas là pour se défendre.",
      "Brisson hoche la tête, Malestroit aussi, avec un empressement qui ne leur ressemble pas. Le voleur a été surpris par son maître, il l'a tué, il a fui. Le batelier n'a fait que trouver le corps. Tout s'arrange. Tout le monde est content.",
      "Le conseil condamne Théophane Lescot, absent, à être pendu en effigie, et ordonne qu'on le recherche dans toutes les villes du fleuve.",
    ],
    choices: [{ label: "Sortir de la salle", to: "E_fugitif" }] },
  C_echec: { act: "III", title: "L'accusation", place: "haute",
    text: [
      { if: { is: { "accuse-M-qui": "hugon" } }, text: "Tu dis le nom de Hugon Maupas. Au premier rang, Gervaise se lève à moitié, et retombe sur son banc, comme si on l'avait frappée. Hugon ne lève même pas la tête. Brisson sourit : « Voilà qui simplifie les choses. »" },
      { if: { is: { "accuse-M-qui": "sibylle" } }, text: "Tu dis le nom de Dame Sibylle Ombreuil. La veuve reste immobile. Elle te regarde, et dans ses yeux il y a quelque chose qui ressemble à de la pitié. Brisson demande, poliment, comment une femme de quarante-cinq ans aurait porté un homme de son poids jusqu'à l'écluse. Tu n'as pas de réponse qui tienne." },
      { if: { is: { "accuse-M-qui": "oriane" } }, text: "Tu dis le nom d'Oriane Ombreuil. Contre son pilier, la jeune fille en noir devient blanche. Hugon, entre ses gardes, se jette en avant, et il faut trois hommes pour le retenir ; il hurle que c'est faux, que c'est lui, que c'est lui qui a tout fait, qu'on la laisse. Brisson note, ravi : « L'accusé avoue. »" },
      { if: { not: { is: { "accuse-M-qui": ["hugon", "sibylle", "oriane"] } } }, text: "Tu dis un nom, et ce que tu poses devant le conseil ne tient pas. Brisson démonte ton accusation en trois phrases, sans même hausser la voix, et la salle rit." },
    ],
    choices: [
      { label: "Dire au moins ce que Hugon t'a raconté de sa nuit", if: { all: [{ has: "hugon:aveu" }, { not: { is: { "accuse-M-qui": ["hugon", "oriane"] } } }] }, hide: { not: { all: [{ has: "hugon:aveu" }, { not: { is: { "accuse-M-qui": ["hugon", "oriane"] } } }] } }, to: "C_plaidoirie" },
      { label: "Rester là, à attendre le verdict", to: "E_condamne" },
    ] },
  C_silence: { act: "III", title: "Le silence", place: "haute",
    text: [
      "Tu te tais. Tu sens le regard de Gervaise Maupas sur ta nuque, et tu gardes les yeux droit devant toi.",
      "Brisson attend, par politesse, le temps de compter jusqu'à cinq. Puis il se tourne vers le conseil.",
    ],
    choices: [{ label: "Attendre le verdict", to: "E_condamne" }] },
  C_plaidoirie: { act: "III", title: "La nuit de Hugon", place: "haute",
    text: [
      "Tu racontes la nuit de Hugon Maupas, telle qu'il te l'a dite dans sa cellule : la Chandelle jusqu'à onze heures et demie, le sac porté à la barge de sel, la place payée pour deux, l'écluse à une heure, le corps déjà dans l'eau, la bague qui a glissé toute seule, la honte, le silence.",
      "Quand tu dis *pour deux*, la salle se retourne d'un seul mouvement vers le pilier des arcades. Oriane Ombreuil s'avance. Elle traverse toute la salle, seule, dans sa robe de deuil trop grande, jusqu'au pied de l'estrade, et elle dit, d'une voix qui tremble à peine : « C'est vrai. Il devait partir avec moi. Je l'ai attendu au pont des Lavandières jusqu'à quatre heures. »",
      { if: { has: "oriane:soulagee" }, text: "Elle ne tremble plus du tout quand elle ajoute : « Et à dix heures, il n'était pas chez mon père. Il jouait à la Lanterne Sourde. Je le sais. »" },
      "Sa mère, au premier rang, ferme les yeux.",
      "Les échevins délibèrent à voix basse, longtemps. Puis Brisson se lève. Un vol sur un mort, dit-il, n'est pas un meurtre. Mais c'est un vol, et un vol sacrilège.",
    ],
    choices: [{ label: "Écouter le verdict", to: "E_pilori" }] },

  // ------------------------------------------------------------------ the endings
  E_verite: { act: "III", title: "Le noyé de l'écluse", place: "haute", end: true,
    fx: endFx("verite", { flag: ["m:verite", "d:argent"] }),
    text: [
      "On ouvre les tonneaux marqués G. devant le conseil assemblé : dix ans d'argent fin, pris un demi-denier à la fois sur chaque écu d'Orbeval, fondu en lingots dans le fourneau de la salle des essais, les nuits où personne ne descendait.",
      "On exhume le corps enterré sous le nom de Gaspard Ombreuil, et on lui rend le sien. Théophane Lescot est enterré une seconde fois, sous la bonne pierre, à côté de sa mère. Maître Faverge paie la pierre. La mère Garnaude revient de chez sa sœur pour l'enterrement, et elle pose sur la tombe un petit portrait peint sur bois, dans un cadre de cuivre.",
      "Gaspard Ombreuil est jugé un mois plus tard. Il ne nie rien. Il répond à toutes les questions avec une exactitude parfaite, comme on remplit un registre. On le pend un matin de pluie, sur la place de la Haute-Ville, et l'on dit qu'il a demandé, avant de monter, quelle heure il était, précisément.",
      { if: { has: "sibylle:aveu" }, text: "Dame Sibylle Ombreuil quitte Orbeval avant le procès. Elle laisse une lettre à l'Échevinage, d'une écriture droite et calme, où elle dit ce qu'elle a entendu la nuit de la fête, et ce qu'elle a choisi de ne pas voir le lendemain. Personne ne la poursuit." },
      { if: { has: "r:aveu" }, text: "Évrard Malestroit n'est pas réélu. Il n'est pas poursuivi non plus : il a seulement su, et s'est tu, et cela, à Orbeval, n'est pas un crime. Il vit encore longtemps, dans son hôtel de la Haute-Ville, et ne sort plus beaucoup." },
      ECUS,
      "Hugon Maupas sort de la tour du Guet le lendemain de l'audience, à neuf heures, l'heure des visites. Sa mère est en bas depuis six heures, avec son panier.",
      AMANTS, AMANTS_NON,
      { if: { has: "hallard:allie" }, text: "La sergente Hallard t'offre une place au guet. Tu prends ton temps pour répondre. Elle dit qu'elle a tout son temps, qu'elle a appris, cette semaine, à le prendre." },
      { if: { has: "brisson:paye" }, text: "Les dix écus de Brisson, tu les laisses sur le comptoir de Gervaise Maupas, en silence, le matin de ton départ." },
    ] },
  E_enfui: { act: "III", title: "La Vouivre", place: "teinturiers", end: true,
    fx: endFx("enfui"),
    text: [
      "La Vouivre descend l'Aune, passe les rapides avec la crue, et arrive à Basse-Aune trois jours plus tard, où un homme grand et voûté, rasé de près, débarque avec trois tonneaux d'indigo et disparaît dans le port. On ne le reverra jamais.",
      "Hugon Maupas n'est pas pendu. Le conseil, ébranlé par ce que tu as dit, et peut-être par ce que la ville commence à murmurer, n'ose plus le juger pour meurtre. Il le garde trois mois en cellule pour le vol de la bague, puis le relâche un matin, sans explication.",
      "On ne rouvre pas la tombe de l'essayeur. Sous le nom de Gaspard Ombreuil, Théophane Lescot dort dans le caveau d'une famille qui n'était pas la sienne, et à Orbeval on continue à dire que le second de l'essayeur était un voleur qui a filé avec l'argent de la Monnaie.",
      ECUS,
      AMANTS, AMANTS_NON,
      "Toi, tu sais. C'est peu. C'est ce que tu emportes, quand tu quittes Orbeval par la route du sud.",
    ] },
  E_malestroit: { act: "III", title: "Un coupable commode", place: "haute", end: true,
    fx: endFx("malestroit"),
    text: [
      "Évrard Malestroit est arrêté le soir même, dans la salle, par la sergente Hallard, muette, les yeux ailleurs. Hugon Maupas sort de la tour le lendemain matin.",
      "On juge Malestroit un mois plus tard. On ne peut pas prouver qu'il a tué l'essayeur, mais on prouve tout le reste : le rendez-vous, la bourse, le silence acheté, les écus légers, l'année de mensonges. Cela suffit pour la ville. On ne le pend pas ; on le bannit, et on vend ses biens. L'échevin Brisson devient maître de la Monnaie à la Saint-Martin.",
      { if: { has: "brisson:paye" }, text: "Il t'envoie, le jour de sa nomination, une seconde bourse de dix écus, avec un billet de remerciements très aimable. Tu te tais." },
      "Le lendemain de l'audience, à l'aube, une barge chargée de trois tonneaux d'indigo quitte le port des Teinturiers pour Basse-Aune. Personne ne la regarde partir.",
      ECUS,
      AMANTS, AMANTS_NON,
      { if: { clue: "m_corps_tete" }, text: "Il arrive encore, la nuit, que tu penses à la plaie carrée sur la tempe du noyé. Malestroit avait apporté une bourse, pas un marteau. Tu ne sais pas qui l'a faite." },
    ] },
  E_fugitif: { act: "III", title: "Le mort qui avait fui", place: "haute", end: true,
    fx: endFx("fugitif"),
    text: [
      "On pend Théophane Lescot en effigie, un mannequin de paille habillé de vieux habits, sur la place de la Haute-Ville, devant une foule qui jette des choux. On envoie son signalement dans toutes les villes du fleuve. Personne ne le retrouvera, et pour cause.",
      "Hugon Maupas sort de la tour le lendemain, libre. Gervaise t'embrasse sur les deux joues, sur le pas de sa porte, et te donne tout ce qu'elle a dans sa boîte à sel.",
      { if: { has: "gervaise:gratuit" }, text: "Tu repousses la boîte vers elle. Elle insiste, tu refuses, elle pleure, et vous restez là un moment, chacun une main sur la boîte, sans savoir qui l'emportera." },
      "Maître Faverge, au Pont des Changeurs, a fermé sa boutique le jour de l'effigie. La mère Garnaude, à Vieux-Gué, ne revient pas.",
      ECUS,
      AMANTS, AMANTS_NON,
      "Le lendemain de l'audience, à l'aube, une barge chargée de trois tonneaux d'indigo quitte le port des Teinturiers pour Basse-Aune. Un homme grand et voûté, sur le roof, regarde la ville s'éloigner, et il a, dit le patron plus tard, l'air d'un homme qui a fait ses comptes, et qui les a trouvés justes.",
    ] },
  E_condamne: { act: "III", title: "La cloche du soir", place: "haute", end: true,
    fx: endFx("condamne"),
    text: [
      "Le conseil délibère le temps qu'il faut pour vider un pichet. Hugon Maupas est condamné à être pendu, le lendemain, à l'aube, pour le meurtre de Gaspard Ombreuil, essayeur-juré de la Monnaie d'Orbeval.",
      "Il se tait, comme il s'est toujours tu. On l'emmène.",
      "Le lendemain, à l'aube, pendant qu'on dresse la potence sur la place, une barge chargée de trois tonneaux d'indigo quitte le port des Teinturiers et descend l'Aune vers la mer.",
      "Gervaise Maupas t'épargne les reproches. Elle a simplement cessé de te parler. Quand tu la croises, au coin du pont des Lavandières, elle regarde ailleurs, comme on regarde ailleurs quand passe quelqu'un qu'on a connu autrefois.",
    ] },
  E_pilori: { act: "III", title: "Le pilori", place: "haute", end: true,
    fx: endFx("pilori"),
    text: [
      "Hugon Maupas est condamné pour vol sur un mort : trois jours au pilori sur la place de la Haute-Ville, puis le bannissement d'Orbeval pour dix ans. On ne le pend pas. Sa mère t'embrasse les mains, dans la salle, devant tout le monde.",
      "Pendant trois jours, il reste debout au pilori, la tête et les mains prises dans le bois, sous la pluie. Les gens passent. Certains lui jettent des choses. Le troisième jour, une jeune fille en noir vient s'asseoir au pied du pilori, avec un panier, et elle y reste jusqu'au soir. Personne n'ose rien jeter.",
      "Le premier matin du pilori, à l'aube, pendant qu'on lui passe le cou dans le bois, une barge chargée de trois tonneaux d'indigo descend l'Aune vers Basse-Aune. Le quatrième jour, Hugon quitte la ville par la route du sud.",
      "On n'a jamais su, à Orbeval, qui avait tué l'essayeur. On ne l'a d'ailleurs pas beaucoup cherché.",
      ECUS,
      { if: { has: "amants:mot" }, text: "Au printemps, on dit qu'une jeune fille de la Haute-Ville a pris la route du sud, elle aussi, seule, avec un sac de toile. Sa mère n'a pas porté plainte." },
    ] },
};
