// Act III, the last vigil: the snow stops, Odile breaks (or not), everyone says one true thing about the dead, the last
// night by the bed is Odile's (gens.js), and the burial at ten. Seven endings, and the epilogue.
function endFx(id, more) { return Object.assign({ flag: "fin:" + id }, more || {}); }
var STAY = { any: [{ attache: "jeanne", min: 3 }, { attache: "odile", min: 3 }, { attache: "mariette", min: 3 }] };
module.exports = { passages: {
  C_matin: {
    act: "III", title: "Le troisième matin", place: "salle",
    text: [
      "Le vent est tombé dans la nuit, et le troisième matin se lève sur un ciel d'un bleu dur, sans un nuage ; la neige étincelle à faire mal aux yeux. Très loin dans la vallée monte le bruit des pelles : les hommes de Saint-Amans ouvrent la route.",
      "Au café, Germain annonce que le curé montera demain matin, avec les porteurs, et qu'on enterrera à dix heures. Il le dit avec soulagement. Personne ne lui en veut.",
      "Odile pose sa tasse. « Ce soir, c'est la dernière veillée, dit-elle. On fera comme on a toujours fait. Chacun dira une chose vraie sur elle. Une seule. » Elle regarde la table, un visage après l'autre, et s'arrête sur le tien. « Une chose vraie. Ce n'est pas difficile. »",
      "« Et demain, au cimetière, ajoute-t-elle, c'est l'aîné qui dit la parole. C'est moi. » Elle reprend sa tasse. « On verra. »",
    ],
    choices: [{ label: "Finir ton café", to: "H_salle" }],
  },

  // ------------------------------------------------------------------ Odile craque
  C_odile: {
    act: "III", title: "La chambre de Lucien", place: "etage",
    text: [
      "Au milieu de l'après-midi, en passant dans le couloir de l'étage, tu entends un bruit derrière la porte de Lucien. Un bruit que tu mets un moment à reconnaître, parce que tu ne l'as jamais entendu : Odile qui pleure.",
      "Cette fois, la porte est entrouverte d'un doigt. Par la fente, tu vois Odile assise sur le lit de Lucien, sur l'édredon rouge, la boîte à musique ouverte sur les genoux, les épaules secouées. Elle tient un des patins contre sa poitrine, comme on tient un enfant.",
    ],
    choices: [
      { label: "Entrer, et t'asseoir à côté d'elle", fx: { attache: { odile: 1 } }, to: "C_odile_aveu" },
      { label: "Rester sur le seuil, puis redescendre sans bruit", fx: { geste: "g_tu_odile", flag: "odile:refuge" }, to: "H_salle" },
    ],
    silence: { fx: { geste: "g_tu_odile", flag: "odile:refuge" }, to: "H_salle", label: "Te taire, et refermer la porte" },
  },
  C_odile_aveu: {
    act: "III", title: "La chambre de Lucien", place: "etage", devant: "odile", fx: { flag: ["odile:aveu", "odile:fenetre"], quest: "III_nuit" },
    text: [
      "Tu t'assois à côté d'elle sur l'édredon rouge. Elle ne te chasse pas. Elle parle vers le patin qu'elle tient, comme on parle à un enfant pour qu'il s'endorme.",
      "« Je l'ai vu partir, ce soir-là. De ma fenêtre. Une heure après toi, ses patins sur l'épaule, dans tes traces. J'avais la main sur la crémone. Je n'ai pas ouvert. J'en avais assez d'être celle qui garde. Je l'ai dit à maman la nuit même, à genoux dans la cuisine. Elle m'a dit de me relever et de ne jamais le redire. »",
      "« Et l'autre nuit, elle m'a appelée. Après Germain et ses papiers. Elle m'a demandé la fiole sur la cheminée. Elle a dit : “Tout. Je ne veux pas du printemps.” Ses mains ne pouvaient plus rien ouvrir. J'ai versé. Je lui ai tenu le verre. Je suis restée jusqu'à minuit vingt. »",
      "Elle se tourne vers toi. « Elle m'a demandé ça à moi. Pas à toi, pas au docteur, pas à Mariette. À celle qui n'avait pas ouvert la fenêtre. Je ne sais pas si c'était un pardon ou une punition. Je ne le saurai jamais. »",
      { if: { not: { any: ["lettre:trouvee", { item: "lettre" }, "lettre:brulee"] } }, text: "Elle ouvre la boîte à musique sur ses genoux. Sur le velours rouge, à côté d'une mèche de cheveux blonds, il y a une lettre cachetée de cire noire, à ton nom. « Elle est pour toi. Je l'ai lue. Je n'ai pas pu la brûler. »" },
    ],
    choices: [
      { label: "Prendre la lettre", if: { not: { any: ["lettre:trouvee", { item: "lettre" }, "lettre:brulee"] } }, hide: { any: ["lettre:trouvee", { item: "lettre" }, "lettre:brulee"] }, fx: { item: "lettre", flag: "lettre:trouvee" }, to: "M_odile_suite" },
      { label: "La prendre dans tes bras", fx: { flag: "soeurs:pardon", attache: { odile: 2 }, trait: { coeur: 1 } }, to: "M_odile_suite" },
      { label: "Lui dire qu'elle a tué votre mère, et votre frère avec", fx: { flag: "soeurs:accuse", attache: { odile: -2 }, trait: { coeur: -2 } }, to: "M_odile_suite" },
    ],
    silence: { who: "odile", fx: { flag: "soeurs:silence" }, to: "M_odile_suite" },
  },

  // ------------------------------------------------------------------ la dernière veillée
  C_veillee: {
    act: "III", title: "La dernière veillée", place: "chambre", urgent: 45,
    text: [
      "À huit heures, tout le monde monte. On se tient debout autour du lit, dans la chambre froide, avec une bougie chacun. C'est la coutume des Lisières, et personne ne sait plus d'où elle vient : la dernière nuit, chacun dit une chose vraie sur le mort, une seule, et on ne la discute pas.",
      { if: { seen: "V_mariette" }, text: "Mariette commence, parce qu'elle est la plus ancienne. « Elle riait fort, à vingt ans. Elle avait peur des vaches. » Personne ne rit, et tout le monde la voit, une seconde, la grande fille en robe bleue.", else: "Mariette commence, parce qu'elle est la plus ancienne. « Elle a appris à lire à quarante ans, toute seule, la nuit, pour tenir les comptes après la mort d'Aimé. Personne ne l'a jamais su. »" },
      "Le docteur Fabre a bu, mais il parle net. « Elle m'a dit non deux fois. Elle a eu raison les deux fois. »",
      { if: { has: "germain:dette" }, text: "Germain hésite longtemps. « Elle ne m'a jamais fait confiance, dit-il enfin. Elle avait raison. » Odile tourne la tête vers lui, lentement.", else: "Germain toussote. « Elle tenait la scierie mieux qu'un homme. » C'est vrai, et c'est ce qu'on dit de toutes les veuves." },
      { if: { has: "jeanne:aveu" }, text: "Jeanne parle d'une voix claire. « Elle savait que j'étais là, le soir de l'étang. Elle ne l'a jamais dit à personne. Elle m'a dit bonjour à la messe tous les dimanches, pendant douze ans. »", else: "Jeanne dit : « Elle me disait bonjour à la messe, tous les dimanches. Même quand personne ne me le disait. »" },
      "Odile parle la dernière, avant toi. « Elle n'a jamais dit le prénom de Lucien, en douze ans. Mais la nuit, elle le disait. Je l'entendais à travers le mur. »",
      "Puis tout le monde te regarde. C'est ton tour.",
    ],
    choices: [
      { label: "Dire qu'elle t'a tiré{e} de l'eau, et qu'elle ne se l'est jamais pardonné", if: { has: "etang:verite" }, hide: { not: { has: "etang:verite" } }, fx: { set: { veillee: "etang" }, flag: "veillee:vrai", trait: { aveu: 2 } }, to: "C_veillee_fin" },
      { label: "Dire qu'elle a demandé de tes nouvelles cent quarante-quatre fois", if: { clue: "e_firmin" }, hide: { not: { clue: "e_firmin" } }, fx: { set: { veillee: "firmin" }, flag: "veillee:vrai", trait: { aveu: 1 } }, to: "C_veillee_fin" },
      { label: "Dire qu'elle ne voulait pas du printemps", if: { has: "odile:aveu" }, hide: { not: { has: "odile:aveu" } }, fx: { set: { veillee: "printemps" }, flag: "veillee:vrai", trait: { aveu: 1 } }, to: "C_veillee_fin" },
      { label: "Dire qu'elle avait les mains les plus fortes de la vallée", fx: { set: { veillee: "mains" }, flag: "veillee:vrai" }, to: "C_veillee_fin" },
      { label: "Dire qu'elle t'aimait, même si tu n'en sais rien", fx: { set: { veillee: "faux" }, trait: { aveu: -1 } }, to: "C_veillee_fin" },
    ],
    silence: { fx: { set: { veillee: "tu" }, trait: { aveu: -1 } }, to: "C_veillee_fin" },
  },
  C_veillee_fin: {
    act: "III", title: "La dernière veillée", place: "chambre",
    text: [
      { if: { is: { veillee: "etang" } }, text: "Tu le dis. « Elle m'a tiré{e} de l'eau, cette nuit-là, et pas Lucien. Elle ne se l'est jamais pardonné. Elle m'a éloigné{e} pour ne plus me voir, et elle a demandé de mes nouvelles tous les mois. » Le silence qui suit est le plus long de ta vie. Odile ferme les yeux. Mariette fait un signe de croix. Personne ne discute. C'est la coutume." },
      { if: { is: { veillee: "firmin" } }, text: "« Elle a écrit à l'oncle Firmin tous les mois, pendant douze ans, pour demander comment j'allais. Cent quarante-quatre fois. Elle ne me l'a jamais dit. » Odile te regarde, surprise. Elle ne le savait pas non plus." },
      { if: { is: { veillee: "printemps" } }, text: "« Elle ne voulait pas du printemps. » Tu le dis doucement. Odile devient très blanche, puis elle te regarde, et elle comprend ce que tu viens de faire : dire la chose, et la garder. Le docteur, lui, boit d'un trait." },
      { if: { is: { veillee: "mains" } }, text: "« Elle avait les mains les plus fortes de la vallée. » C'est vrai, et c'était vrai avant. Tout le monde regarde, malgré soi, les mains nouées sur le chapelet." },
      { if: { is: { veillee: "faux" } }, text: "« Elle m'aimait. » Tu le dis bien, comme on te l'a appris sur les planches ou devant les juges. Mariette baisse les yeux. Odile te regarde avec une sorte de pitié. Ce n'est pas une chose vraie, c'est une chose qu'on voudrait vraie, et dans cette chambre, tout le monde connaît la différence." },
      { if: { is: { veillee: "tu" } }, text: "Tu gardes le silence. La coutume n'a rien prévu pour ça. On attend. Puis Odile souffle sa bougie, et les autres font comme elle, un par un, et la veillée est finie." },
      "On redescend. Dans l'escalier, quelqu'un pose la main sur ton épaule, une seconde, et la retire. Tu ne sais pas qui.",
    ],
    choices: [{ label: "Descendre avec les autres", to: "H_salle" }],
  },

  // ------------------------------------------------------------------ l'enterrement
  X_enterrement: {
    act: "III", title: "L'enterrement", place: "cour", ambiance: "neige", fx: { quest: "III_parole" },
    text: [
      "Le curé est monté à neuf heures, avec quatre porteurs du bourg et un traîneau. On a remis la pendule en marche, ôté le drap du miroir, cloué le cercueil ; le bruit des clous a résonné dans toute la maison, et Mariette est allée s'asseoir dans la cuisine pendant ce temps-là.",
      "On porte ta mère à travers la neige jusqu'à l'enclos des Sorlin, derrière la chapelle des Lisières. La fosse a été creusée hier par les hommes de la vallée, au pic, dans la terre gelée, à côté de ton père et de Lucien. Le ciel est bleu, et il fait un froid à fendre les pierres.",
      "Le curé dit ses prières. Puis il se tourne vers la famille. C'est le moment de la parole.",
      { if: { any: [{ has: "odile:aveu" }, { attache: "odile", min: 2 }] }, text: "Odile fait un pas en arrière. Elle te regarde, et d'un signe de tête, elle te cède la place. « Toi, dit-elle. C'est toi qu'elle attendait. »", else: "Odile fait un pas en avant, comme c'est son droit. Elle a préparé ce qu'elle va dire, tu le vois à ses lèvres qui bougent." },
    ],
    choices: [
      { label: "Dire ce qui s'est passé sur l'étang, il y a douze ans", if: { has: "etang:verite" }, hide: { not: { has: "etang:verite" } }, fx: { trait: { aveu: 2 } }, to: "X_parole" },
      { label: "Dire les mots d'usage : une femme droite, une mère, une veuve courageuse", if: { any: [{ has: "odile:aveu" }, { attache: "odile", min: 2 }] }, hide: { not: { any: [{ has: "odile:aveu" }, { attache: "odile", min: 2 }] } }, fx: { set: { parole: "usage" } }, to: "X_apres" },
      { label: "Laisser Odile parler", if: { not: { any: [{ has: "odile:aveu" }, { attache: "odile", min: 2 }] } }, hide: { any: [{ has: "odile:aveu" }, { attache: "odile", min: 2 }] }, fx: { set: { parole: "odile" } }, to: "X_apres" },
    ],
    silence: { fx: { set: { parole: "tu" }, trait: { aveu: -1 } }, to: "X_apres" },
  },
  X_parole: {
    act: "III", title: "La parole", place: "cour",
    text: [
      "Tu t'avances au bord de la fosse et tu dis tout, d'une voix qui te surprend par son calme : la cabane et Jeanne ; Lucien dans tes traces ; la glace, la gaffe ; le choix de ta mère, qui n'en était pas un ; l'oncle Firmin, enfin, et les lettres de chaque mois.",
      "Le curé a ouvert la bouche pour t'arrêter, puis il l'a refermée. Les porteurs regardent leurs souliers, Jeanne pleure sans bruit, et Mariette te regarde comme on regarde quelqu'un qui marche sur un toit.",
      { if: { has: "odile:fenetre" }, text: "Odile sait que tu sais pour la fenêtre. Elle te l'a dit elle-même." },
      "Il reste une chose à dire, ou à garder. Odile est à côté de toi, et elle attend, elle aussi.",
    ],
    choices: [
      { label: "Dire aussi la fenêtre d'Odile", fx: { set: { fenetre: "dite" }, trait: { aveu: 1, coeur: -1 } }, to: "F_parole" },
      { label: "Garder la fenêtre d'Odile pour toi", fx: { set: { fenetre: "tue" }, trait: { coeur: 1 } }, to: "F_parole" },
    ],
  },
  X_apres: {
    act: "III", title: "Après", place: "cour",
    text: [
      { if: { is: { parole: "usage" } }, text: "Tu dis les mots d'usage. Une femme droite. Une mère. Une veuve courageuse, qui a tenu la scierie vingt ans. Le curé hoche la tête à chaque phrase. Tout est vrai, et rien n'est dit." },
      { if: { is: { parole: "odile" } }, text: "Odile parle. Elle dit les mots d'usage, d'une voix nette, sans une larme : une femme droite, une mère, une veuve courageuse. Elle ne dit pas un mot de Lucien. Le curé hoche la tête à chaque phrase." },
      { if: { is: { parole: "tu" } }, text: "Tu ne dis rien. Le silence dure. Le curé s'éclaircit la gorge, ouvre son livre, et dit à ta place les mots que l'Église prévoit pour ceux qui n'en ont pas." },
      "On jette la terre gelée sur le cercueil, une pelletée chacun. Elle sonne sur le bois comme des pierres. Puis tout le monde redescend vers la maison, en file, dans la trace du traîneau.",
      "Dans la cour, la route est ouverte. La diligence de Saint-Amans passe à midi au bas de la côte. Odile s'est arrêtée sur le seuil de la cuisine, à l'endroit exact où ta mère se tenait le jour de ton départ.",
    ],
    choices: [
      { label: "Aller trouver le curé et le brigadier, et leur dire ce qu'Odile a fait", if: { has: "odile:aveu" }, hide: { not: { has: "odile:aveu" } }, fx: { set: { denonce: "odile" } }, to: "F_denonce" },
      { label: "Aller trouver le curé et le brigadier, et leur dire que Germain est monté cette nuit-là", if: { has: "germain:monte" }, hide: { not: { has: "germain:monte" } }, fx: { set: { denonce: "germain" } }, to: "F_denonce" },
      { label: "Rendre les Fayards à Odile, et emporter son secret", if: { all: [{ has: "odile:aveu" }, { not: { has: "vente:signee" } }] }, hide: { not: { all: [{ has: "odile:aveu" }, { not: { has: "vente:signee" } }] } }, to: "F_soeurs" },
      { label: "Rester aux Lisières", if: { all: [STAY, { not: { has: "vente:signee" } }] }, hide: { not: { all: [STAY, { not: { has: "vente:signee" } }] } }, to: "F_rester" },
      { label: "Descendre prendre la diligence, avec l'argent de Vernet", if: { has: "vente:signee" }, hide: { not: { has: "vente:signee" } }, to: "F_vente" },
      { label: "Descendre prendre la diligence", if: { not: { has: "vente:signee" } }, hide: { has: "vente:signee" }, to: "F_silence" },
    ],
  },

  // ------------------------------------------------------------------ les fins
  F_parole: {
    act: "III", title: "Ce qui fut dit", place: "cour", end: true, epilogue: true, fx: endFx("parole"),
    text: [
      { if: { is: { fenetre: "dite" } }, text: "Tu dis la fenêtre. Odile ne bouge pas. Elle se tient droite au bord de la fosse, et quand tu as fini, elle dit, assez fort pour que les porteurs l'entendent : « C'est vrai. » Puis elle jette sa pelletée de terre la première, et elle redescend seule vers la maison." },
      { if: { is: { fenetre: "tue" } }, text: "Tu t'arrêtes là. Tu ne dis pas la fenêtre. À côté de toi, Odile a fermé les yeux, et quand tu reviens près d'elle, sa main cherche la tienne, et la trouve, et la garde jusqu'à la fin des prières." },
      "Le soir même, toute la vallée le sait. Le père Pradel ne descend plus au cabaret de tout l'hiver. On te regarde autrement, au bourg. On regarde autrement ta mère aussi, dans sa tombe neuve : une femme qui a choisi, une nuit de janvier, et qui a porté son choix comme elle portait ses manches longues.",
      "Tu repars trois jours plus tard, quand la route est sèche. Tu n'as rien emporté de la maison, sauf la lettre. Elle est dans ta poche intérieure, contre toi, et elle pèse exactement ce qu'elle pèse.",
    ],
  },
  F_silence: {
    act: "III", title: "Ce qui fut tu", place: "cour", end: true, epilogue: true, fx: endFx("silence"),
    text: [
      "Tu descends la côte à pied, ta malle sur l'épaule, dans la trace du traîneau des porteurs. Personne ne t'accompagne. Mariette t'a donné un pain et un morceau de lard enveloppés dans un torchon, et Odile t'a dit « Bon voyage » depuis le seuil, sans descendre les marches.",
      { if: { item: "lettre" }, text: "La lettre de ta mère est dans ta poche. Tu ne l'as montrée à personne. Tu la reliras à Varenne, ou tu ne la reliras jamais. Tu ne sais pas encore." },
      { if: { has: "lettre:brulee" }, text: "La lettre de ta mère est en cendres dans la cheminée de la grande salle. Ce qu'elle disait, il n'y a plus que toi pour le savoir, et tu as décidé de ne pas le savoir." },
      { if: { not: { any: [{ item: "lettre" }, "lettre:brulee"] } }, text: "La lettre de ta mère est quelque part dans la maison, dans une poche ou dans une boîte. Tu es reparti{e} sans elle." },
      "Au tournant de la chapelle, tu te retournes une fois. La maison est là, grise sur la neige. À la fenêtre de l'étage, derrière la vitre, il y a un visage pâle. Douze ans plus tôt, c'était le même.",
      "La diligence passe à midi, et tu y montes. Le cocher fait claquer son fouet, et les Lisières disparaissent derrière la forêt des Fayards.",
    ],
  },
  F_soeurs: {
    act: "III", title: "La part d'Odile", place: "cour", end: true, epilogue: true, fx: endFx("soeurs", { flag: ["fin:soeurs", "bois:odile", "bois:decide"], quest: "III_bois" }),
    text: [
      "Le soir, chez maître Combaz, qui est monté avec le curé, tu signes une donation. Les Fayards, quarante arpents de hêtres et de sapins, à Odile Rouvière, née Sorlin. Germain, à côté, devient rouge, puis blanc, puis rien du tout.",
      "« Ils ne seront pas coupés, dit Odile, sans le regarder. Pas de mon vivant. » C'est la phrase de ta mère. Elle s'en rend compte en la disant, et elle sourit, pour la première fois depuis ton arrivée, d'un vrai sourire.",
      "Tu gardes la fiole pour toi, sans un mot au curé, à Combaz ou à Germain. Le docteur, en partant, te serre la main un peu plus longtemps qu'il ne faudrait. Il sait ce que tu as choisi de garder.",
      "Le lendemain, à la diligence, Odile t'accompagne jusqu'au bas de la côte. Elle porte ta malle, toute seule, et refuse que tu l'aides. « Tu écriras, dit-elle. Pas quatre fois en douze ans. Tous les mois. » Ce n'est pas une prière. C'est un ordre, et tu sais que tu y obéiras.",
    ],
  },
  F_denonce: {
    act: "III", title: "La lettre au curé", place: "cour", end: true, epilogue: true, fx: endFx("denonce"),
    text: [
      { if: { is: { denonce: "odile" } }, text: "Tu dis tout au curé et au brigadier, dans le bureau, porte fermée : la fiole sous le lit, la cuiller, le mot de ta mère, et la main de ta sœur qui a versé. Le brigadier écrit lentement, en tirant la langue. Le curé écoute en silence. À la fin, il te demande si tu es bien sûr{e} que c'est ce que ta mère aurait voulu. Tu laisses la question sans réponse." },
      { if: { all: [{ is: { denonce: "odile" } }, { has: "secret:promis" }] }, text: "Tu lui avais promis, la dernière nuit, que cela resterait entre vous. Tu le sais pendant tout le temps où tu parles." },
      { if: { is: { denonce: "odile" } }, text: "On emmène Odile le soir même, dans le traîneau du brigadier, sous une couverture. Elle ne résiste pas. Sur le seuil, elle se retourne vers toi et dit seulement : « Elle aussi, elle a choisi. » Le procès a lieu à Saint-Amans au printemps ; le docteur témoigne, et le jury l'acquitte en une heure. Elle ne revient jamais aux Lisières." },
      { if: { is: { denonce: "germain" } }, text: "Tu dis au curé et au brigadier que Germain est monté chez ta mère à onze heures, avec un acte de vente, qu'elle a refusé, et qu'il a menti sur sa soirée. Le brigadier écrit. Germain jure, nie, puis avoue qu'il est monté, puis jure encore qu'elle était vivante quand il est redescendu." },
      { if: { all: [{ is: { denonce: "germain" } }, { has: "germain:soupcon" }] }, text: "Il te regarde pendant tout ce temps sans surprise : depuis le soir où tu lui as parlé du brigadier, il t'attendait." },
      { if: { is: { denonce: "germain" } }, text: "On l'emmène à Saint-Amans, où l'on ouvre une enquête. Le docteur, interrogé, maintient : le cœur. On relâche Germain au bout d'un mois, faute de preuve, et ruiné : Vernet a eu sa coupe autrement, par le tribunal. Il ne t'adresse plus jamais la parole. Odile non plus. Elle seule sait que tu as accusé le mauvais, et pourquoi elle ne le dira pas." },
      "Tu reprends la diligence trois jours plus tard. La neige fond déjà sur les bords de la route. Tu as fait ce que tu croyais juste. Pendant tout le trajet jusqu'à Varenne, tu essaies de retrouver ce que tu croyais exactement.",
    ],
  },
  F_vente: {
    act: "III", title: "Le bois des Fayards", place: "cour", end: true, epilogue: true, fx: endFx("vente", { flag: ["fin:vente", "bois:decide"], quest: "III_bois" }),
    text: [
      "Germain te raccompagne lui-même jusqu'à la diligence, dans le traîneau de la scierie, avec une couverture sur tes genoux. Il a dans la poche une lettre de change de Vernet, et il te la remet devant le cocher, pour qu'il y ait un témoin : six cents livres, payables à Varenne.",
      "« Tu as bien fait, dit-il. Tu verras. » Il te serre la main entre les deux siennes.",
      "Au printemps, les bûcherons de Vernet montent aux Fayards. Tu n'es pas là pour les entendre. On t'écrit, plus tard, que la coupe a duré tout l'été, et qu'on voyait, de la maison, le versant nord devenir gris, puis brun, puis nu.",
      "Avec les six cents livres, à Varenne, tu t'achètes un an. Tu ne sais pas encore à quoi tu l'emploieras. Le soir, parfois, tu fermes les yeux et tu entends ton père dire le nom des arbres.",
    ],
  },
  F_neige: {
    title: "La nuit blanche", end: true, epilogue: true, fx: endFx("neige"),
    text: [
      "Tu marches toute la nuit. Tu tombes, tu te relèves, tu tombes. À un moment, tu t'assois dans la neige parce qu'il fait si bon, tout à coup, et tu sais que c'est le froid qui ment, et tu te relèves quand même, parce qu'une voix, dans ta tête, te dit de te relever. C'est la voix de ta mère. Elle ne dit rien d'autre.",
      "À l'aube, un charretier de Saint-Amans te trouve au bord de la route, à genoux contre une borne, et te charge sur ses sacs de farine. Tu te réveilles à l'auberge du Lion d'Or, les pieds dans une bassine d'eau tiède, avec trois doigts de pied qui ne guériront pas.",
      "On enterre ta mère sans toi. Tu l'apprends par une lettre d'Odile, trois lignes, qui t'attend à Varenne : « Elle est en terre. Tu n'as pas besoin de revenir. » C'est la phrase de ta mère, le jour de ton départ. Odile ne le sait peut-être pas.",
      "Tu ne reviens pas.",
    ],
  },
  F_rester: {
    act: "III", title: "Ce qui reste", place: "cour", end: true, epilogue: true, fx: endFx("rester", { flag: ["fin:rester", "bois:decide"], quest: "III_bois" }),
    text: [
      "Tu ne descends pas à la diligence. Tu la regardes passer d'en haut, à midi, une petite boîte noire sur la route blanche, et elle s'en va sans toi.",
      "Le lendemain, tu descends à la scierie avec Germain, et tu passes la journée à regarder la grande scie, les courroies, la roue prise dans la glace. Le surlendemain, tu ouvres les registres. Au dégel, la roue tourne de nouveau, et c'est toi qui tiens les comptes, avec une colonne de moins.",
      "Les Fayards restent debout. Tu y montes le dimanche, sans hache.",
      { if: { attache: "jeanne", min: 3 }, tendre: true, text: "Le jeudi, l'institutrice de Saint-Amans monte aux Lisières faire la classe aux enfants des trois fermes. Elle reste souper. Elle repart tard. On en parle au bourg, et on en parlera longtemps, et vous laissez dire, elle et toi.", else: "Le jeudi, l'institutrice de Saint-Amans monte aux Lisières faire la classe aux enfants des trois fermes. Elle reste souper avant de redescendre." },
      { if: { attache: "odile", min: 3 }, text: "Odile et toi, vous vous disputez tous les jours, pour la scierie, pour le bois, pour la façon de couper le pain. Le soir, vous faites ensemble la chambre de Lucien. Un jour de mai, vous en ouvrez les fenêtres." },
      { if: { attache: "mariette", min: 3 }, text: "Mariette ne dit rien de ton retour. Le premier soir, elle met ton couvert à la place où tu t'asseyais enfant, et c'est tout ce qu'elle dira, et c'est beaucoup." },
    ],
  },
},

epilogue: [
  { if: { has: "odile:aveu" }, text: "**Odile.** Elle a gardé la maison, comme le voulait sa mère. Elle a fait refaire la fenêtre de la chambre de couture, avec des vitres neuves, et elle l'ouvre tous les matins, même l'hiver." },
  { if: { not: { has: "odile:aveu" } }, text: "**Odile.** Elle a gardé la maison et ses secrets. On la voit à la messe de Saint-Amans, droite, en noir. Elle ne parle à personne de ce qui s'est passé les trois nuits de la veillée." },
  { if: { has: "germain:dette" }, text: "**Germain Rouvière.** Vernet a fini par se payer. Germain a vendu ses bottes fauves et ses cartes, et il descend à Saint-Amans le samedi pour vendre des planches, pas pour jouer." },
  { if: { not: { has: "germain:dette" } }, text: "**Germain Rouvière.** Il tient toujours la scierie, ou il fait comme s'il la tenait. Il parle beaucoup, au cabaret, du bois des Fayards." },
  { if: { has: "mariette:fiole" }, text: "**Mariette Coulon.** Elle a fait dire une messe pour Armance chaque année, le jour de sa mort, et une autre, le même jour, « pour quelqu'un de la maison », sans dire qui." },
  { text: "**Mariette Coulon.** Elle a servi aux Lisières jusqu'à sa mort, à quatre-vingt-un ans, debout devant son fourneau, une louche à la main." },
  { if: { has: "fabre:sait" }, text: "**Le docteur Fabre.** Il a arrêté de boire au printemps, puis il a recommencé à la Toussaint. Il monte tous les ans aux Lisières le jour de la mort d'Armance, et il reste un moment devant la tombe, son chapeau à la main." },
  { if: { not: { has: "fabre:sait" } }, text: "**Le docteur Fabre.** Il a signé encore beaucoup de certificats. Sur aucun il n'a écrit autre chose que la vérité, ou presque." },
  { if: { has: "jeanne:aveu" }, text: "**Jeanne Gerbaud.** Elle a raconté aux enfants de l'école, un jour de dégel, l'histoire d'une fille qui avait vu quelque chose et ne l'avait pas dit. Elle ne leur a pas dit comment l'histoire finissait." },
  { if: { not: { has: "jeanne:aveu" } }, text: "**Jeanne Gerbaud.** Elle fait toujours l'école dans la même salle, avec les lunettes de Bessière. Elle évite le sentier des saules." },
  { if: { has: "lucien:chambre" }, text: "**La chambre de Lucien.** Elle n'est plus fermée à clef. Les soldats de plomb sont allés aux enfants des fermes voisines, un par un, à chaque Noël." },
  { if: { not: { has: "lucien:chambre" } }, text: "**La chambre de Lucien.** Elle est restée fermée, et propre, et quelqu'un continue d'en astiquer la poignée." },
  { if: { has: "lettre:lue" }, text: "**La lettre d'Armance.** Tu la sais par cœur. Il y a une phrase que tu te répètes plus que les autres, et ce n'est pas celle que tu aurais crue." },
  { if: { all: [{ not: { has: "lettre:lue" } }, { not: { has: "lettre:brulee" } }] }, text: "**La lettre d'Armance.** Personne ne l'a lue jusqu'au bout, sinon celle qui l'a cachée." },
  { if: { has: "lettre:brulee" }, text: "**La lettre d'Armance.** Il n'en reste rien. Certaines nuits, tu crois pourtant te souvenir d'une phrase." },
  { if: { has: "bois:odile" }, text: "**Les Fayards.** Ils sont toujours debout. Odile y monte le dimanche, sans hache." },
  { if: { has: "vente:signee" }, text: "**Les Fayards.** Le versant nord a repoussé en taillis, des noisetiers et des ronces. Il faudra quatre-vingts ans pour que ce soient de nouveau des hêtres." },
  { if: { all: [{ has: "bois:decide" }, { any: ["vente:refusee", "fin:rester"] }, { not: { any: ["bois:odile", "vente:signee"] } }] }, text: "**Les Fayards.** Ils sont à toi. Ils poussent. Tu n'as jamais su quoi en faire d'autre." },
  { if: { trait: "aveu", min: 3 }, text: "**Toi.** Tu dis les choses, maintenant, même celles qui coûtent. On t'en veut parfois. On te croit toujours." },
  { if: { trait: "aveu", max: -3 }, text: "**Toi.** Tu as appris, dans la maison de ta mère, que se taire est aussi une façon de parler. Tu le parles très bien." },
  { if: { trait: "coeur", min: 3 }, text: "**Toi.** Tu as pardonné à beaucoup de monde. À toi, c'est plus long." },
  { if: { trait: "coeur", max: -3 }, text: "**Toi.** Tu tiens les comptes, ceux des autres et les tiens, au sou près." },
] };
