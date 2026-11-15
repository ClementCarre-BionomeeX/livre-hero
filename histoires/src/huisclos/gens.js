// The people of the house: what they say when one comes to them (at their hours, see base.js `people.at`), the version
// each one gives (accounts, heard in front of them: `devant`), what they do when one puts that version in doubt (the
// `belie` passages D_*), what they do when one shows them a clue or a document (`confront`, the M_* passages), and the
// three vigils by the bed. Keeping silent is offered wherever someone waits for an answer (`silence`).
function hush(who, more) { return Object.assign({ who: who, back: true }, more || {}); }
module.exports = {
  // ------------------------------------------------------------------ Odile
  T_odile: {
    title: "Odile", back: true, devant: "odile", montrer: "odile", silence: hush("odile"),
    text: [
      { first: true, text: "Odile lève les yeux vers toi et attend. Elle a toujours attendu comme ça, depuis l'enfance : le menton un peu haut, la bouche fermée, comme si la conversation était une dette que tu devais régler le premier." },
      { again: true, before: "odile:aveu", text: "Odile te regarde venir. « Oui ? »" },
      { after: "odile:aveu", text: "Odile te regarde venir sans se raidir. Elle a l'air plus petite, depuis qu'elle a parlé, ou plus fatiguée, ou les deux." },
      { after: "odile:bluff", before: "odile:aveu", once: true, text: "Elle garde les yeux sur ses mains. Depuis que tu lui as parlé de la lettre, elle te regarde le moins possible." },
      { when: "night", text: "La chambre sent la cire chaude. Odile a tiré la chaise contre le lit, tout près, comme on s'assoit près d'un malade qui pourrait encore demander à boire." },
    ],
    choices: [
      { label: "Lui demander où elle était, le soir de l'étang", hide: { seen: "K_odile_etang" }, to: "K_odile_etang" },
      { label: "Lui demander comment s'est passée la dernière nuit de maman", hide: { seen: "K_odile_nuit" }, to: "K_odile_nuit" },
      { label: "Lui demander où est la lettre de maman", after: "B_lettre", hide: { any: [{ seen: "K_odile_lettre" }, "lettre:trouvee"] }, to: "K_odile_lettre" },
      { label: "Lui dire que tu as trouvé la lettre, alors que tu la cherches encore", after: "B_lettre", hide: { any: [{ seen: "K_odile_bluff" }, "lettre:trouvee", "odile:aveu"] }, to: "K_odile_bluff" },
      { label: "Lui parler de Lucien", hide: { seen: "K_odile_lucien" }, to: "K_odile_lucien" },
      { label: "Lui demander ce qui s'est passé cette nuit-là, vraiment", after: "odile:refuge", hide: "odile:aveu", to: "C_odile_aveu" },
      { label: "Veiller avec elle jusqu'au matin", when: "night", if: { day: { min: 3 } }, hide: { not: { day: { min: 3 } } }, to: "V_odile" },
    ],
  },
  K_odile_etang: {
    title: "Odile", back: true, devant: "odile", silence: hush("odile"), fx: { recit: "v_odile_etang" },
    text: [
      "Odile pose ce qu'elle tenait. Elle met un long moment à répondre, et quand elle répond, elle parle à la table, pas à toi.",
      "« J'étais couchée. Maman m'avait envoyée au lit à neuf heures, comme une enfant, alors que j'avais vingt-deux ans. Je n'ai rien vu, rien entendu avant les cris. » Elle reprend son ouvrage. « Voilà. Tu voulais l'entendre, tu l'as entendu. »",
    ],
  },
  D_odile_etang: {
    title: "Odile", back: true, devant: "odile", silence: hush("odile"),
    text: [
      "« Tu ne dormais pas, dis-tu. Personne ne dormait, ce soir-là. »",
      "Odile te regarde enfin. Ses yeux sont secs et très clairs. « Et toi, tu dormais ? Non. Tu étais à la cabane. » Elle s'arrête net, comme quelqu'un qui a posé le pied sur une marche qui manque.",
      "Personne, dans cette maison, ne t'a jamais dit qu'on savait pour la cabane.",
    ],
    choices: [
      { label: "Lui parler de la fenêtre de sa chambre de jeune fille", if: { clue: "e_fenetre" }, hide: { not: { clue: "e_fenetre" } }, to: "M_odile_fenetre" },
    ],
  },
  M_odile_fenetre: {
    title: "La fenêtre", back: true, devant: "odile", silence: hush("odile"), fx: { flag: "odile:fenetre" },
    text: [
      "Tu lui dis ce qu'on voit, de la fenêtre de la chambre de couture : le jardin, la barrière, et tout le sentier des saules jusqu'à la cabane.",
      "Odile ne bouge pas. Puis ses mains se mettent à lisser sa jupe, à petits gestes, du genou vers la hanche, encore et encore.",
      "« Je t'ai vu partir, dit-elle. À neuf heures et demie. Tu avais mis le manteau de papa. Et une heure après, je l'ai vu, lui, sur le sentier, avec ses patins sur l'épaule. Il marchait dans tes traces, en sautant de l'une à l'autre, parce que tes pas étaient trop grands. »",
      "Elle respire. « J'avais la main sur la crémone. Je n'ai pas ouvert. J'étais fatiguée d'être celle qui rappelle, celle qui garde, celle qui dit non. Je me suis dit : qu'ils aient des ennuis, tous les deux, pour une fois. »",
      "« Voilà. Ça aussi, tu voulais l'entendre. »",
    ],
    choices: [
      { label: "Lui dire qu'une fenêtre fermée ne noie personne", fx: { trait: { coeur: 1 }, attache: { odile: 1 } }, back: true },
      { label: "Lui dire qu'un mot aurait suffi", fx: { trait: { coeur: -1 }, attache: { odile: -1 } }, back: true },
    ],
  },
  K_odile_nuit: {
    title: "Odile", back: true, devant: "odile", silence: hush("odile"), fx: { recit: "v_odile_nuit" },
    text: [
      "« Je l'ai veillée jusqu'à onze heures, dit Odile. Comme tous les soirs depuis trois ans. Elle dormait quand je suis partie. Je suis revenue à une heure, parce que je reviens toujours à une heure, et elle était froide. »",
      "Elle dit ça très vite, d'un seul souffle, comme une leçon de catéchisme. Puis elle tire sur sa manche gauche, pour la descendre sur son poignet.",
      { calme: true, text: "La manche est raide, au bord, d'une tache brun-jaune qu'on a frottée sans parvenir à l'enlever." },
      { if: "passe:guet", text: "Au guet, tu as vu ce geste cent fois : celui de quelqu'un qui cache son poignet avant qu'on le lui prenne." },
    ],
    choices: [
      { label: "Retenir son poignet, et regarder la tache", calme: true, hide: { clue: "n_manche" }, fx: { clue: "n_manche" }, back: true },
    ],
  },
  D_odile_nuit: {
    title: "Odile", back: true, devant: "odile", silence: hush("odile"),
    text: [
      "« Elle ne dormait pas, quand tu es partie », dis-tu.",
      "Odile se lève. Elle est plus grande que dans ton souvenir, ou c'est toi qui t'es tassé{e}. « Qu'est-ce que tu sais de ses nuits ? Trois ans. Trois ans à la tourner dans son lit, à lui couper sa viande, à lui ouvrir ses fioles, à lui tenir le pot. Toi, à Varenne, tu dormais. »",
    ],
    choices: [
      { label: "Lui montrer ce que tu as trouvé dans la chambre", if: { any: [{ clue: "n_fiole" }, { clue: "n_cuiller" }, { clue: "n_manche" }] }, hide: { not: { any: [{ clue: "n_fiole" }, { clue: "n_cuiller" }, { clue: "n_manche" }] } }, to: "M_odile_fiole" },
    ],
  },
  M_odile_fiole: {
    title: "Ce qu'Odile a fait", devant: "odile", fx: { flag: "odile:aveu", quest: "III_nuit" },
    text: [
      "Odile regarde ce que tu lui montres. Elle se rassoit, très lentement, comme une vieille femme. Elle ne nie pas. Tu comprends qu'elle attendait ce moment depuis trois jours, et qu'elle a presque l'air soulagée.",
      "« Germain est monté vers onze heures, avec ses papiers. Je l'ai entendu crier, et elle plus fort que lui. Il est redescendu. Après minuit, elle a sonné. Je suis montée. »",
      "« Elle m'a dit : “La fiole, sur la cheminée.” Le docteur l'avait mise là-haut exprès, hors de ses mains. Ses mains ne pouvaient plus rien déboucher, tu les as vues. Je lui ai demandé combien de gouttes. Elle a dit : “Tout. Je ne veux pas du printemps.” »",
      "« J'ai versé la fiole dans le verre, avec un peu d'eau et du sirop de girofle, parce que c'est amer. Je lui ai tenu le verre. Je lui ai tenu la tête. Je suis restée assise. Elle m'a parlé de toi, un peu, et puis de papa, et puis de rien. À minuit vingt, elle a arrêté de respirer. J'ai arrêté la pendule. J'ai lavé le verre. » Elle regarde ses mains. « J'ai oublié la cuiller. Trois ans que je n'oublie rien, et j'ai oublié la cuiller. »",
      { if: { not: { any: ["lettre:trouvee", { item: "lettre" }, "lettre:brulee"] } }, text: "« Elle m'a dit aussi : “La lettre est sur le bureau. Elle est pour l'autre. Donne-la-lui.” L'autre, c'est toi. Je l'ai prise, et je l'ai gardée. » Elle sort de sa poche une lettre pliée en quatre, cachetée de cire noire, et la pose sur la table entre vous." },
    ],
    choices: [
      { label: "Prendre la lettre", if: { not: { any: ["lettre:trouvee", { item: "lettre" }, "lettre:brulee"] } }, hide: { any: ["lettre:trouvee", { item: "lettre" }, "lettre:brulee"] }, fx: { item: "lettre", flag: "lettre:trouvee" }, to: "M_odile_suite" },
      { label: "La prendre dans tes bras", fx: { flag: "soeurs:pardon", attache: { odile: 2 }, trait: { coeur: 1 } }, to: "M_odile_suite" },
      { label: "Lui dire qu'elle a tué votre mère", fx: { flag: "soeurs:accuse", attache: { odile: -2 }, trait: { coeur: -2 } }, to: "M_odile_suite" },
    ],
    silence: { who: "odile", fx: { flag: "soeurs:silence" }, to: "M_odile_suite" },
  },
  M_odile_suite: {
    title: "Ce qu'Odile a fait", back: true, seul: true, fx: { angoisse: -1 },
    text: [
      { if: { has: "soeurs:pardon" }, text: "Tu la prends dans tes bras. Elle reste raide une seconde, puis elle s'abandonne d'un coup, tout son poids, et elle pleure contre ton épaule sans un bruit, comme pleurent les gens qui ont appris à le faire dans une maison où l'on entend tout." },
      { if: { all: [{ has: "soeurs:accuse" }, { not: { has: "soeurs:pardon" } }] }, text: "Odile encaisse le mot sans ciller. « Oui, dit-elle. Si tu veux. Elle l'a voulu, et je l'ai fait. Va le dire à qui tu veux. Le curé monte demain. » Elle se lève et sort." },
      { if: { all: [{ has: "soeurs:silence" }, { not: { any: ["soeurs:pardon", "soeurs:accuse"] } }] }, text: "Tu ne dis rien. Odile attend, puis elle hoche la tête, comme si ton silence était une réponse qu'elle connaissait déjà. Elle se lève et sort sans refermer la porte." },
      { if: { not: { any: ["soeurs:pardon", "soeurs:accuse", "soeurs:silence"] } }, text: "Tu prends la lettre. Odile te regarde la glisser dans ta poche, et elle se lève, et elle sort sans un mot." },
      "Tu restes seul{e} avec ce qu'elle t'a dit. Dehors, la neige continue de tomber sur la cour, en gros flocons lents.",
    ],
  },
  M_odile_lettre: {
    title: "La lettre", back: true, devant: "odile", silence: hush("odile"), fx: { flag: "odile:lettre" },
    text: [
      "Odile reconnaît le papier avant même que tu l'aies déplié. Elle ne cherche pas à mentir.",
      "« Je l'ai lue, dit-elle. Le premier matin. Je voulais la brûler, et je n'ai pas pu. Alors je l'ai mise dans la boîte de Lucien, pour que tu la trouves sans moi. C'était lâche. C'était tout ce que je pouvais. »",
      { after: "M_lettre_lue", text: "« Elle t'a raconté la fenêtre. » Ce n'est pas une question. « Elle t'a demandé de ne pas me la faire payer. Elle ne m'a jamais demandé, à moi, de lui pardonner la gaffe. Elle a tiré celui qui était le plus près, et elle a passé douze ans à se demander si c'était vrai. Moi aussi. »" },
    ],
  },
  K_odile_lettre: {
    title: "Odile", back: true, devant: "odile", silence: hush("odile"),
    text: [
      "« Quelle lettre ? » Odile coupe son fil avec les dents. « Maman n'écrivait plus. Elle ne tenait plus une plume depuis la Saint-Michel. »",
      "Elle dit ça sans te regarder, et sans s'arrêter de coudre. Le fil, pourtant, est coupé.",
    ],
  },
  K_odile_bluff: {
    title: "Odile", back: true, devant: "odile", fx: { geste: "g_mensonge", attache: { odile: -1 }, flag: "odile:bluff" },
    text: [
      "« J'ai trouvé la lettre de maman », dis-tu, d'une voix calme, la voix que tu prends à Varenne pour les choses fausses.",
      "Odile devient très pâle. Elle te regarde longtemps, et tu tiens son regard.",
      "« Alors tu sais, dit-elle enfin. Alors tu n'as pas besoin de moi. » Elle plie son ouvrage, se lève et sort. Tu entends son pas dans l'escalier, puis une porte, à l'étage, qu'on referme doucement.",
    ],
  },
  K_odile_lucien: {
    title: "Odile", back: true, devant: "odile", silence: hush("odile"), fx: { attache: { odile: 1 } },
    text: [
      "Tu lui dis que tu penses à Lucien depuis que tu es descendu{e} de la diligence. Tu dis son prénom à voix haute, dans cette maison, pour la première fois depuis douze ans.",
      "Odile ne répond pas tout de suite. « C'est moi qui fais sa chambre, dit-elle. Tous les jours. La poussière, les soldats, les draps une fois par mois. Personne d'autre n'y entre. Maman n'y est jamais entrée. Elle disait que ça lui faisait mal aux jambes, l'escalier. »",
      "Elle sourit, d'un sourire qui ne lui ressemble pas. « Il disait que tu étais le plus fort du monde, tu te souviens ? Il le disait à tout le monde. Même au curé. »",
    ],
  },
  V_odile: {
    title: "La dernière veille", place: "chambre", devant: "odile", takes: "morning", fx: { attache: { odile: 1 } },
    text: [
      "Tu tires une chaise près de celle d'Odile. Elle te fait de la place sur le châle, sans un mot. C'est la troisième nuit, la dernière. Demain, on viendra chercher ta mère.",
      { if: { has: "odile:aveu" }, text: "Vous parlez à voix basse, comme lorsque vous étiez petits et que la mère dormait de l'autre côté de la cloison. Vous parlez de Lucien. Tu racontes la luge, et elle raconte le jour où il a mis le chat dans le pétrin. Vous riez, une fois, très bas, et vous vous arrêtez, effrayés, en regardant le lit." },
      { if: { not: { has: "odile:aveu" } }, text: "Vous ne parlez pas. Odile égrène un chapelet qu'elle ne dit pas, et toi tu regardes les cierges baisser. Une fois, elle ouvre la bouche, et la referme. Tu fais semblant de n'avoir rien vu." },
      { if: { has: "odile:lettre" }, text: "Elle parle de la lettre, une fois. « Elle a écrit “la plus laide”, dit-elle. Elle a toujours su choisir ses mots, même pour se faire mal. »" },
      { if: { attache: "odile", min: 3 }, text: "Vers trois heures, elle s'endort contre ton épaule. Tu ne bouges pas jusqu'au jour." },
      "Au matin, la neige a cessé tout à fait. Le soleil se lève derrière la forêt des Fayards, rouge, et touche d'abord la cime des hêtres.",
    ],
    choices: [
      { label: "Lui promettre que ce qu'elle a fait restera entre vous", if: { has: "odile:aveu" }, hide: { not: { has: "odile:aveu" } }, fx: { flag: "secret:promis", attache: { odile: 1 }, trait: { aveu: -1 } }, to: "N_matin" },
      { label: "Lui dire que tu ne sais pas encore ce que tu feras", if: { has: "odile:aveu" }, hide: { not: { has: "odile:aveu" } }, fx: { trait: { aveu: 1 } }, to: "N_matin" },
      { label: "Laisser venir le matin", to: "N_matin" },
    ],
  },

  // ------------------------------------------------------------------ Germain
  T_germain: {
    title: "Germain Rouvière", back: true, devant: "germain", montrer: "germain", silence: hush("germain"),
    text: [
      { first: true, text: "Germain te serre la main entre les deux siennes, longtemps, à la manière des marchands de bestiaux. « Ah ! Le Varennois. Tu as bonne mine, malgré tout. La ville réussit aux gens. » Il a des bottes de cuir fauve, cirées de frais, qu'il a dû apporter de Saint-Amans exprès pour l'enterrement." },
      { again: true, text: "Germain t'accueille avec un sourire, comme un hôte. C'est sa maison, maintenant, ou il fait comme si." },
      { after: "germain:monte", text: "Germain te regarde venir avec prudence. Depuis que tu sais qu'il est monté chez ta mère ce soir-là, il sourit moins." },
      { after: "vente:signee", text: "Germain te tape sur l'épaule. Il est d'excellente humeur. Il a déjà écrit à Vernet." },
    ],
    choices: [
      { label: "Lui demander ce qu'on raconte de l'étang, au bourg", hide: { seen: "K_germain_bourg" }, to: "K_germain_bourg" },
      { label: "Lui demander ce qu'il a fait, le soir où ta mère est morte", hide: { seen: "K_germain_soir" }, to: "K_germain_soir" },
      { label: "Lui parler du bois des Fayards", after: "B_germain", hide: "bois:decide", to: "K_germain_bois" },
      { label: "Lui parler de la colonne « frais divers » du registre", after: "germain:comptes", hide: { seen: "M_germain_vernet" }, to: "M_germain_vernet" },
    ],
  },
  K_germain_bourg: {
    title: "Germain Rouvière", back: true, devant: "germain", silence: hush("germain"), fx: { recit: "v_germain_etang" },
    text: [
      "Germain se gratte la nuque. « Moi, je n'étais pas encore de la famille, tu sais. Je descendais de Vaumoise, je ne connaissais Odile que de la messe. »",
      "« Mais au bourg, on dit que c'est toi qui l'as emmené sur la glace, ce soir-là. Que tu voulais lui apprendre à patiner de nuit, et que tu l'as lâché. » Il lève les mains. « Je répète. Je ne juge pas. Les gens ont besoin d'une histoire, quand un enfant meurt. »",
    ],
  },
  D_germain_etang: {
    title: "Germain Rouvière", back: true, devant: "germain", silence: hush("germain"), fx: { flag: "germain:pradel" },
    text: [
      "« Qui dit ça, au bourg ? Qui, exactement ? »",
      "Germain hausse les épaules, puis, voyant que tu attends, il réfléchit pour de bon. « Le premier qui l'a dit… Le père Pradel, au cabaret, l'hiver même. Le meunier, enfin, l'ancien meunier. Le père de Jeanne. Il le disait à qui voulait l'entendre, et il voulait qu'on l'entende. »",
      "Il ajoute, plus bas : « C'est drôle qu'il ait été si sûr. Il n'était pas aux Lisières, lui, ce soir-là. »",
    ],
  },
  K_germain_soir: {
    title: "Germain Rouvière", back: true, devant: "germain", silence: hush("germain"), fx: { recit: "v_germain_nuit" },
    text: [
      "« Ce soir-là ? » Germain sort sa pipe, la regarde, la remet dans sa poche. « Je suis monté me coucher à dix heures, comme tous les soirs. La scierie, ça vous lève à cinq heures. Je ne l'ai pas revue. C'est Odile qui m'a réveillé, vers une heure. Elle était calme. Elle m'a dit : “C'est fini.” »",
      "Il secoue la tête. « Elle a toujours été calme, ta sœur. Il y a des jours où ça me fait peur. »",
    ],
  },
  D_germain_nuit: {
    title: "Germain Rouvière", back: true, devant: "germain", silence: hush("germain"),
    text: [
      "« Tu ne dormais pas à dix heures », dis-tu.",
      "Germain rit, d'un rire bien rond. « Demande à Odile. Je ronfle, paraît-il, comme une scie de long. » Il te regarde par-dessus son rire, et ses yeux, eux, ne rient pas.",
    ],
    choices: [
      { label: "Lui dire que Mariette a entendu une voix d'homme chez ta mère, à onze heures", if: { clue: "n_voix" }, hide: { not: { clue: "n_voix" } }, to: "M_germain_acte" },
    ],
  },
  M_germain_acte: {
    title: "Ce que Germain a fait", back: true, devant: "germain", fx: { flag: "germain:monte" },
    text: [
      "Germain ne rit plus. Il regarde la porte, puis toi.",
      "« Bon. Je suis monté. Vers onze heures. Avec l'acte de Combaz, pour le bois. Vernet me tient à la gorge, tu dois le savoir, maintenant que tu fouilles partout. Je lui ai expliqué. Je lui ai mis la plume dans la main. »",
      "« Elle l'a jetée. Elle a dit : “Pas de mon vivant.” Et elle m'a dit d'autres choses, que je ne répéterai pas. » Il se frotte la joue. « Elle était vivante quand je suis redescendu, je te le jure sur ce que tu veux. Vivante et furieuse, à se lever de son lit si elle avait pu. »",
      "« Je n'ai rien dit parce que ça avait l'air vilain. Un gendre qui monte avec un acte de vente, une heure avant. Tu vois bien comme ça a l'air vilain. »",
    ],
    choices: [
      { label: "Lui dire que le brigadier aimerait entendre ça", fx: { flag: "germain:soupcon", regard: { germain: "hostile" }, trait: { coeur: -1 } }, back: true },
      { label: "Lui dire que tu le crois", fx: { regard: { germain: "neutre" }, trait: { coeur: 1 } }, back: true },
    ],
  },
  M_germain_vernet: {
    title: "Les dettes de Germain", back: true, devant: "germain", silence: hush("germain"), fx: { flag: "germain:dette" },
    text: [
      "Germain lit la lettre de Vernet, et son visage se défait d'un coup, comme un drap qu'on lâche.",
      "« Où as-tu pris ça ? » Puis, plus bas : « Ça n'a pas d'importance. » Il s'assoit. « J'ai joué. À Saint-Amans, chez Vernet, justement, le samedi. J'ai perdu, j'ai voulu me refaire, j'ai pris dans la caisse de la scierie pour rembourser, et j'ai perdu ça aussi. Trois cents livres. Les “frais divers”, tu les as vus, je suppose. »",
      "« Si le bois se vend, tout se règle. Vernet a sa coupe, la scierie a son argent, et ta sœur ne saura jamais rien. Elle a eu assez de peine. » Il te regarde. « Tout dépend de ta signature, maintenant. Ta mère t'a laissé les Fayards. Tu le savais ? »",
    ],
  },
  K_germain_bois: {
    title: "Le bois des Fayards", devant: "germain", silence: hush("germain"),
    text: [
      "Germain sort l'acte de Combaz de sa poche intérieure et le déplie sur la table, en le lissant du plat de la main. Il a fait recopier ton nom à la place de celui de ta mère, sur la ligne de la venderesse. L'encre est fraîche.",
      "« Neuf cents livres, dit-il. Trois cents pour Vernet, et le reste pour toi. Six cents livres, tu te rends compte ? À Varenne, tu vis un an avec ça. Deux, si tu es économe. Et nous, ici, on respire. »",
      "Les Fayards, ce sont quarante arpents de hêtres et de sapins sur le versant nord, au-dessus de la scierie. Ton père y montait le dimanche, sans hache, pour regarder les arbres pousser. Il les appelait par leurs noms.",
      { after: "testament:vu", text: "Tu te rappelles le brouillon, dans le secrétaire : « pour qu'il y ait encore quelque chose de son père qui pousse »." },
      { after: "germain:comptes", before: "germain:dette", text: "Tu penses à la colonne des « frais divers », dans le registre vert. Trois cents livres. Tu gardes ça pour toi, pour l'instant." },
      { after: "germain:dette", text: "Il n'ajoute rien sur Vernet ni sur les cartes. Il sait que tu sais." },
    ],
    choices: [
      { label: "Signer l'acte", fx: { geste: "g_signe", flag: ["vente:signee", "bois:decide"], quest: "III_bois", regard: { germain: "cordial" } }, to: "K_germain_signe" },
      { label: "Refuser de vendre les Fayards", fx: { flag: ["vente:refusee", "bois:decide"], quest: "III_bois", regard: { germain: "hostile" } }, to: "K_germain_refus" },
      { label: "Lui dire que les Fayards iront à Odile, et qu'elle en fera ce qu'elle voudra", fx: { flag: ["bois:odile", "bois:decide"], quest: "III_bois", attache: { odile: 1 } }, to: "K_germain_odile" },
      { label: "Lui dire que tu décideras après l'enterrement", back: true },
    ],
  },
  K_germain_signe: {
    title: "Le bois des Fayards", back: true, seul: true,
    text: [
      "Germain te tend sa propre plume, une belle plume d'acier dans un manche d'os. Tu signes. Ta signature est nette, appliquée, celle d'une personne qui a appris à signer pour d'autres.",
      "Germain souffle sur l'encre, plie l'acte en quatre et le range contre son cœur. « Tu ne le regretteras pas, dit-il. Le bois, c'est fait pour être coupé. »",
      "Par la fenêtre, on voit le versant des Fayards, gris et noir sous la neige.",
    ],
  },
  K_germain_refus: {
    title: "Le bois des Fayards", back: true,
    text: [
      "Germain replie l'acte lentement, en suivant les plis. « Tu as tort, dit-il sans hausser le ton. Tu repartiras dans quatre jours, et nous, on restera ici avec Vernet. Tu ne sais pas ce que tu fais. »",
      "Il range l'acte. Il a encore la politesse de te sourire en sortant.",
    ],
  },
  K_germain_odile: {
    title: "Le bois des Fayards", back: true,
    text: [
      "Germain te regarde comme on regarde un fou. Puis il comprend, et il rit, un rire sans gaieté.",
      "« À Odile. Bien sûr. Tu crois qu'elle me le signera, elle ? » Il replie l'acte. « Tu ne connais pas ta sœur. Elle préférera voir la forêt brûler. »",
      "Ce n'est pas tout à fait ce qu'il voulait dire, et il le sait. Il sort.",
    ],
  },

  // ------------------------------------------------------------------ Mariette
  T_mariette: {
    title: "Mariette", back: true, devant: "mariette", montrer: "mariette", silence: hush("mariette"),
    text: [
      { first: true, text: "Mariette se retourne enfin. Elle te regarde des pieds à la tête, longtemps, et tu as de nouveau dix ans et de la boue jusqu'aux genoux. « Tu as maigri, dit-elle. Assieds-toi. » C'est tout. C'est tout ce qu'elle dira de ton retour, et c'est beaucoup." },
      { again: true, when: "day", text: "Mariette pousse un bol vers toi sur la table, sans demander si tu as faim." },
      { when: "night", text: "Mariette veille dans la chambre de ta mère, droite sur sa chaise paillée. Ses lèvres bougent sur des prières qu'elle ne dit pas à voix haute." },
    ],
    choices: [
      { label: "Lui demander comment Lucien est mort", hide: { seen: "K_mariette_etang" }, to: "K_mariette_etang" },
      { label: "Lui demander ce qu'elle a entendu, la dernière nuit", hide: { seen: "K_mariette_nuit" }, to: "K_mariette_nuit" },
      { label: "Lui demander pourquoi la chambre de Lucien est fermée à clef", hide: { any: [{ seen: "Q_mariette_lucien" }, "lucien:chambre"] }, to: "Q_mariette_lucien" },
      { label: "Lui demander comment allait ta mère, ces derniers mois", hide: { seen: "K_mariette_mains" }, to: "K_mariette_mains" },
      { label: "Lui demander si elle a vu la lettre de ta mère", after: "B_lettre", hide: { any: [{ seen: "K_mariette_lettre" }, "lettre:trouvee"] }, to: "K_mariette_lettre" },
      { label: "Manger la soupe qu'elle te sert", when: "day", once: true, takes: 1, fx: { angoisse: -1, attache: { mariette: 1 } }, to: "K_mariette_soupe" },
      { label: "Veiller avec elle jusqu'au matin", when: "night", to: "V_mariette" },
    ],
  },
  K_mariette_etang: {
    title: "Mariette", back: true, devant: "mariette", silence: hush("mariette"), fx: { recit: "v_mariette_etang" },
    text: [
      "Mariette essuie ses mains à son tablier, une fois, deux fois, bien qu'elles soient sèches.",
      "« Le petit est sorti seul, dit-elle. Avec ses patins sur l'épaule. Il voulait patiner la nuit, il ne parlait que de ça depuis Noël. C'est la glace qui l'a pris, près de la source, là où elle ne tient jamais. » Elle reprend sa cuiller. « La glace, et personne d'autre. Mets-toi ça dans la tête une bonne fois. »",
    ],
  },
  D_mariette_etang: {
    title: "Mariette", back: true, devant: "mariette", silence: hush("mariette"),
    text: [
      "« Seul ? Personne ne l'a vu sortir ? »",
      "Mariette tourne sa soupe un long moment. « Personne qui l'ait rappelé », dit-elle enfin.",
      "Elle lève les yeux vers le plafond, vers l'étage, une seconde à peine, puis elle les baisse sur la marmite et les y garde.",
    ],
  },
  K_mariette_nuit: {
    title: "Mariette", back: true, devant: "mariette", silence: hush("mariette"), fx: { recit: "v_mariette_nuit", clue: "n_voix", angoisse: -1 },
    text: [
      "« J'ai le sommeil léger, dit Mariette. Ma chambre est sous la sienne. »",
      "« Il y a eu des voix, tard, vers onze heures. Une voix d'homme, qui parlait bas et vite, comme on parle pour vendre. Et elle, plus fort. Puis une porte. Puis plus rien. » Elle hésite. « Et puis, après minuit, quelqu'un dans l'escalier, qui montait. Un pas de femme. J'ai reconnu le pas. »",
      "Elle ne dit pas lequel. Dans cette maison, il n'y a que trois pas de femme, et l'un d'eux est le sien.",
    ],
  },
  K_mariette_mains: {
    title: "Mariette", back: true, devant: "mariette", silence: hush("mariette"), fx: { clue: "n_mains" },
    text: [
      "« Mal, dit Mariette. Le cœur, les jambes, et surtout les mains. Depuis la Saint-Michel, elle ne pouvait plus tenir une plume. Depuis la Toussaint, plus tourner une clef ni déboucher un flacon. Il fallait tout lui ouvrir, tout lui couper, tout lui tenir. »",
      "« Elle avait honte. Elle disait qu'elle avait tenu une scierie vingt ans avec ces mains-là, et qu'à présent elle ne pouvait plus tenir sa cuiller. Elle ne voulait pas que tu la voies comme ça. Et puis, il y a huit jours, elle a voulu que tu viennes. »",
    ],
  },
  K_mariette_lettre: {
    title: "Mariette", back: true, devant: "mariette", silence: hush("mariette"),
    text: [
      "« La lettre ? » Mariette hoche la tête. « Elle l'a écrite l'après-midi d'avant, en quatre heures, avec la plume attachée à la main par un ruban. Elle a voulu que je reste à côté pour lui tenir la feuille. Je n'ai pas lu, je ne sais pas lire l'écriture penchée. »",
      "« C'est moi qui l'ai posée sur le bureau, sous l'encrier, à ton nom. Le lendemain matin, elle n'y était plus. » Elle repose son couteau. « Je n'ai pas vu qui l'a prise. Et j'ai bien fait de ne rien voir. »",
    ],
  },
  K_mariette_soupe: {
    title: "La soupe", back: true, seul: true,
    text: [
      "Une soupe de pain, de lard et de chou, épaisse à y planter la cuiller, comme elle la faisait les jours de battage. Mariette s'assoit en face de toi pour te regarder manger, les mains croisées sur la table.",
      "Tu manges tout. Elle remplit le bol une seconde fois. Tu manges encore. Pendant tout ce temps, vous vous taisez tous les deux, et pour la première fois depuis ton arrivée ta gorge se desserre.",
    ],
  },
  M_mariette_bras: {
    title: "Ce que Mariette a vu", back: true, devant: "mariette", silence: hush("mariette"), fx: { flag: "mariette:corde" },
    text: [
      "Mariette regarde ce que tu lui montres, et elle s'assoit, ce qu'elle ne fait jamais dans la journée.",
      "« Ta mère est entrée dans l'eau jusqu'aux coudes, dit-elle. Avec la gaffe du bateau, et la lanterne qu'elle avait posée sur la glace. Elle avait une corde nouée à la taille. On tenait la corde, ta sœur et moi, couchées à plat ventre sur la berge. »",
      "« Ta sœur pleurait si fort qu'elle n'y voyait plus. Elle tirait quand même. Elle avait les mains en sang, après, à cause du chanvre. » Elle te regarde. « Tu ne te souviens pas de ça, hein ? Tu avais la tête sous l'eau, la moitié du temps. »",
    ],
  },
  M_mariette_fiole: {
    title: "Ce que Mariette sait", back: true, devant: "mariette", silence: hush("mariette"), fx: { flag: "mariette:fiole" },
    text: [
      "Mariette regarde. Elle pose la main dessus, pour que personne d'autre ne le voie, même dans cette cuisine vide.",
      "« Range ça, dit-elle. Range ça tout de suite. »",
      "Puis, au bout d'un moment, sans lever les yeux : « En novembre, ta mère m'a demandé si j'aurais le courage. J'ai dit non. J'ai soixante-dix ans de confession derrière moi, et le bon Dieu, j'aime mieux l'avoir avec moi le jour où il faudra. Elle n'a plus jamais redemandé. À moi. »",
    ],
  },
  Q_mariette_lucien: {
    title: "La chambre fermée", back: true, devant: "mariette", silence: hush("mariette"), fx: { item: "cle_lucien" },
    text: [
      "« C'est Odile qui ferme, dit Mariette. Depuis douze ans. Elle y monte tous les jours avec son chiffon, et elle referme. Ta mère n'y entrait pas. »",
      "Elle fouille dans la poche de son tablier, sous le chapelet, et pose sur la table une petite clef de fer, brillante d'usure. « Moi, j'ai le double. On a toujours le double, quand on sert. » Elle pousse la clef vers toi du bout du doigt. « Ne lui dis pas que c'est moi. »",
    ],
  },
  V_mariette: {
    title: "La première veille", place: "chambre", devant: "mariette", silence: hush("mariette", { to: "N_matin", back: null, takes: "morning" }), takes: "morning", fx: { attache: { mariette: 1 } },
    text: [
      "Tu prends l'autre chaise, de l'autre côté du lit. Mariette, sans un mot, pousse vers toi la chaufferette qu'elle avait sous les pieds.",
      "Vers une heure, elle parle, sans te regarder. Elle raconte ta mère à vingt ans, quand elle est arrivée de la vallée pour épouser Aimé Sorlin : une grande fille en robe bleue, qui riait fort, qui menait les bûcherons à la voix, et qui avait peur des vaches. « Personne ne s'en souvient, de ça. Qu'elle riait. Il n'y a plus que moi. »",
      "« Elle t'attendait, ajoute-t-elle. Elle a demandé trois fois l'heure de la diligence, ce dernier jour. Elle savait bien qu'elle ne passait plus en décembre. »",
      { trouble: true, text: "Vers quatre heures, la flamme d'un cierge se couche d'un coup, comme sous un souffle. Mariette ne lève pas les yeux. Toi, tu ne regardes plus que ça." },
      "Le jour se lève, gris, derrière les volets.",
    ],
    choices: [
      { label: "Lui demander de te raconter la nuit de l'étang", hide: { seen: "K_mariette_etang" }, fx: { recit: "v_mariette_etang" }, to: "N_matin" },
      { label: "T'endormir sur ta chaise, la tête contre le montant du lit", to: "N_matin" },
    ],
  },

  // ------------------------------------------------------------------ le docteur Fabre
  T_fabre: {
    title: "Le docteur Fabre", back: true, devant: "fabre", montrer: "fabre", silence: hush("fabre"),
    text: [
      { first: true, text: "Le docteur Fabre se lève à demi, puis se rassoit, ce qui doit être une politesse. « Te voilà. Je t'ai soigné{e} une rougeole et une fièvre de froid, et je t'ai vu{e} partir dans la diligence avec une malle plus grosse que toi. Tu ne te souviens sans doute pas de moi. » Il se ressert. « Moi, je me souviens de tout. C'est mon malheur. »" },
      { again: true, before: "B_lampe", text: "Le docteur pose son almanach sur son genou. « Encore toi. Tu as une question, ou tu as froid ? »" },
      { after: "B_lampe", text: "Le docteur a les yeux rouges et la main moins sûre. Il te regarde arriver comme on regarde venir la pluie." },
    ],
    choices: [
      { label: "Lui demander de quoi ta mère est morte", hide: { seen: "K_fabre_nuit" }, to: "K_fabre_nuit" },
      { label: "Lui demander ce dont il se souvient, le soir de l'étang", hide: { seen: "K_fabre_etang" }, to: "K_fabre_etang" },
      { label: "Lui reparler de la fiole sur la cheminée", after: "B_lampe", hide: { any: [{ seen: "Q_fabre_nuit" }, "fabre:sait"] }, to: "Q_fabre_nuit" },
      { label: "Le menacer : un certificat faux, ça s'appelle un faux", if: { clue: "n_fiole" }, hide: { any: [{ not: { clue: "n_fiole" } }, "fabre:sait"] }, to: "K_fabre_menace" },
      { label: "Boire un verre avec lui", once: true, takes: 1, fx: { angoisse: -1 }, to: "K_fabre_verre" },
    ],
  },
  K_fabre_nuit: {
    title: "Le docteur Fabre", back: true, devant: "fabre", silence: hush("fabre"), fx: { recit: "v_fabre_nuit" },
    text: [
      "« Le cœur. » Fabre fait tourner son verre. « Il était usé depuis deux ans, je le lui avais dit, elle m'avait ri au nez. Elle s'est endormie vers minuit et ne s'est pas réveillée. C'est une belle mort, crois-moi. J'en ai vu de bien pires. »",
      "Il boit. « J'ai écrit “le cœur” sur le certificat, et le curé l'écrira dans son registre, et ce sera vrai pour toujours. »",
    ],
  },
  D_fabre_nuit: {
    title: "Le docteur Fabre", back: true, devant: "fabre", silence: hush("fabre"), fx: { flag: "fabre:sait" },
    text: [
      "Fabre te regarde par-dessus ses lunettes, longtemps. Il pose son verre.",
      "« Le cœur s'est arrêté, dit-il. Tous les cœurs s'arrêtent, à la fin. Je n'ai pas écrit de mensonge. »",
      "« En octobre, ta mère m'a demandé de l'aider à partir avant le printemps. Elle savait ce qui l'attendait : les mains, puis les bras, puis le reste, et des mois couchée à se faire tourner comme une bûche. J'ai dit non. J'ai laissé une fiole de laudanum, pour la douleur, sur la cheminée, là-haut, hors de portée de ses mains à elle. » Il insiste sur le mot. « De ses mains à elle. »",
      "« Le matin, la fiole n'était plus sur la cheminée. J'ai écrit “le cœur”. Je n'ai pas cherché la fiole. Je ne chercherai pas qui l'a ouverte. Ce n'était pas un crime. C'était une grâce qu'elle avait demandée, et que moi, je n'ai pas eu le courage de lui faire. »",
    ],
  },
  K_fabre_menace: {
    title: "Le docteur Fabre", back: true, devant: "fabre", fx: { geste: "g_menace", flag: "fabre:sait", regard: { fabre: "hostile" } },
    text: [
      "Tu te penches vers lui, assez près pour sentir l'eau-de-vie. Tu lui dis où tu as trouvé la fiole, et ce qu'un procureur penserait d'un médecin qui écrit « le cœur » sur un certificat avec une fiole vide sous le lit.",
      "Les mains de Fabre se mettent à trembler sur son verre. Il pose le verre pour qu'on ne le voie pas trembler.",
      "« En octobre, elle me l'a demandé, dit-il très bas. J'ai refusé. J'ai laissé la fiole sur la cheminée, hors de ses mains. Le matin, elle était vide. J'ai écrit le cœur. Voilà. Va chercher ton procureur. » Il te regarde. « Mais demande-toi d'abord quelles mains ont débouché ce flacon. Parce que ce ne sont pas les miennes, et ce ne sont pas les siennes. »",
    ],
  },
  K_fabre_etang: {
    title: "Le docteur Fabre", back: true, devant: "fabre", silence: hush("fabre"), fx: { recit: "v_fabre_etang" },
    text: [
      "Fabre ferme les yeux. « Le valet est venu me chercher au bourg à dix heures et demie. J'ai crevé un cheval. Quand je suis monté, l'enfant était mort depuis une heure. On l'avait couché sur la table de la cuisine. Personne n'y pouvait plus rien. »",
      "« Ta mère avait des engelures jusqu'aux coudes et elle refusait qu'on la touche. Toi, tu avais quarante de fièvre. Trois jours de délire. Tu as dit beaucoup de choses. » Il rouvre les yeux. « On dit n'importe quoi, dans la fièvre. Il ne faut pas croire tout ce qu'on s'y raconte. »",
    ],
  },
  K_fabre_verre: {
    title: "Le docteur Fabre", back: true, seul: true,
    text: [
      "Fabre te sert un verre d'eau-de-vie de prune, très pâle, qui sent la cave et l'été. Vous buvez sans parler, chacun du côté du feu.",
      "Au bout d'un moment, il dit, à personne : « Je lui ai demandé de m'épouser, il y a vingt ans, six mois après la mort de ton père. Elle m'a dit que c'était trop tôt. Je lui ai redemandé dix ans plus tard. Elle m'a dit que c'était trop tard. » Il boit. « Elle avait raison les deux fois. Elle avait souvent raison. »",
    ],
  },
  M_fabre_carnet: {
    title: "Le carnet", back: true, devant: "fabre", silence: hush("fabre"), fx: { flag: "fabre:carnet" },
    text: [
      "Fabre reconnaît son carnet. Il ne demande pas d'où tu le tiens, et c'est pire.",
      { if: { item: "carnet_fabre" }, text: "« Tu as ouvert ma sacoche, dit-il. Bon. » Il reprend le carnet, le soupèse, le pose sur ses genoux." },
      "Il trouve la page sans chercher. « Tiré de l'eau par la mère, à la gaffe. C'est ce que j'ai écrit, et c'est ce que j'ai vu en arrivant : sa manche, ta manche, et la gaffe jetée sur la berge. »",
      "« Ta sœur était trempée jusqu'à la taille. Elle avait tenu la corde dans l'eau. Elle n'a pas dit un mot de la nuit. » Il te regarde. « Dans ta fièvre, tu criais son nom. Tu demandais pourquoi elle ne bougeait pas. Elle était à côté de ton lit, à te tenir la main. »",
    ],
    choices: [
      { label: "Lui laisser son carnet", if: { item: "carnet_fabre" }, hide: { not: { item: "carnet_fabre" } }, fx: { drop: "carnet_fabre", regard: { fabre: "neutre" } }, back: true },
    ],
  },
  M_fabre_bras: {
    title: "Les bras de ta mère", back: true, devant: "fabre", silence: hush("fabre"),
    text: [
      "« Les engelures ? » Fabre hoche la tête. « Elle est entrée dans l'étang jusqu'aux coudes, une nuit de janvier, et elle y est restée assez longtemps pour que la peau gèle. Elle n'a jamais voulu que je la soigne. Elle a gardé ses bras comme ça. »",
      "Il ajoute, plus bas : « Elle portait des manches longues, même en août. Tu ne l'as jamais remarqué, parce que tu étais parti{e}. »",
    ],
  },
  Q_fabre_nuit: {
    title: "La fiole", back: true, devant: "fabre", silence: hush("fabre"),
    text: [
      "Dans le noir, Fabre parle tout seul, ou à toi, ou à la bouteille. Sa voix est pâteuse et très douce.",
      "« Je l'ai laissée sur la cheminée, dit-il. Pleine. Le soir d'avant. Hors de ses mains. Je savais. On sait toujours, dans mon métier. On laisse une fiole sur une cheminée, et on rentre chez soi, et on se dit qu'on n'a rien fait. »",
      "« Le matin, elle n'y était plus. Je ne l'ai pas cherchée. Cherche-la si tu veux, toi. » Il boit. « Moi, je n'ai pas voulu savoir où elle était. »",
    ],
  },

  // ------------------------------------------------------------------ Jeanne
  T_jeanne: {
    title: "Jeanne", back: true, devant: "jeanne", montrer: "jeanne", silence: hush("jeanne"),
    text: [
      { first: true, text: "Jeanne pose son ouvrage. Elle a toujours les mêmes taches de rousseur, plus pâles, et une ride entre les sourcils qui n'y était pas. Elle te regarde comme on regarde une maison où l'on a habité. « Bonjour », dit-elle. Rien d'autre. Vous aviez des mots à vous, autrefois. Ils sont restés à la cabane." },
      { again: true, before: "jeanne:aveu", text: "Jeanne te sourit avec prudence, comme si tu pouvais la blesser rien qu'en parlant." },
      { after: "jeanne:aveu", text: "Jeanne te regarde en face, depuis qu'elle t'a parlé. Elle n'a plus rien à te cacher, et cela lui donne l'air plus jeune." },
      { when: "night", text: "Les cierges lui font des ombres sous les yeux. Elle a posé son châle sur ses genoux et tient la main de ta mère, sur le drap, comme on tient celle d'une enfant." },
    ],
    choices: [
      { label: "Lui demander où elle était, le soir de l'étang", hide: { seen: "K_jeanne_etang" }, to: "K_jeanne_etang" },
      { label: "Lui demander comment était ta mère, le matin de la toilette", hide: { seen: "K_jeanne_nuit" }, to: "K_jeanne_nuit" },
      { label: "Lui parler d'autrefois", hide: { seen: "K_jeanne_autrefois" }, to: "K_jeanne_autrefois" },
      { label: "Lui demander des nouvelles de son mari", hide: { seen: "K_jeanne_mari" }, to: "K_jeanne_mari" },
      { label: "Lui parler de la cabane aux barques", hide: { seen: "Q_jeanne_cabane" }, to: "Q_jeanne_cabane" },
      { label: "Lui redemander ce qui s'est passé à la cabane", after: "jeanne:cabane", hide: "jeanne:aveu", to: "K_jeanne_aveu" },
      { label: "Veiller avec elle", when: "night", to: "V_jeanne" },
    ],
  },
  K_jeanne_etang: {
    title: "Jeanne", back: true, devant: "jeanne", silence: hush("jeanne"), fx: { recit: "v_jeanne_etang" },
    text: [
      "Jeanne pique son aiguille dans le drap et l'y laisse.",
      "« Je n'étais pas aux Lisières, ce soir-là, dit-elle. Mon père me l'avait défendu depuis la Toussaint, tu te souviens ? À cause de toi. J'ai su le lendemain, à la messe. Tout le monde pleurait. » Elle reprend l'aiguille. « J'ai pleuré aussi. »",
      "Elle a dit tout cela d'une voix égale, en regardant le linceul.",
    ],
  },
  D_jeanne_etang: {
    title: "Jeanne", back: true, devant: "jeanne", silence: hush("jeanne"),
    text: [
      "« Tu étais là », dis-tu.",
      "Jeanne secoue la tête, trop vite. « Tu veux que j'y aie été. Ça t'arrangerait, quelqu'un d'autre sur cette berge, quelqu'un à qui en vouloir. » Elle se lève, range ses ciseaux, et ses mains cherchent quoi faire.",
    ],
    choices: [
      { label: "Lui dire que c'est son père qui a lancé la rumeur, au cabaret", if: "germain:pradel", hide: { not: "germain:pradel" }, to: "K_jeanne_aveu" },
      { label: "Lui dire que tu te souviens de la cabane, et d'elle dedans", if: { any: [{ seen: "S2_cabane" }, { clue: "e_poutre" }] }, hide: { not: { any: [{ seen: "S2_cabane" }, { clue: "e_poutre" }] } }, to: "K_jeanne_aveu" },
    ],
  },
  K_jeanne_nuit: {
    title: "Jeanne", back: true, devant: "jeanne", silence: hush("jeanne"), fx: { recit: "v_jeanne_nuit" },
    text: [
      "« Odile est venue me chercher à l'école à sept heures, avec le traîneau de Germain. Quand je suis arrivée, elle avait déjà fait la toilette. Seule. »",
      "« D'habitude, on s'y met à deux ou trois. C'est lourd, un mort, et c'est long. Elle n'avait voulu personne. Elle avait lavé, habillé, peigné, tressé. Il ne me restait que le linceul à coudre. » Jeanne hésite. « Elle avait les yeux d'une femme qui n'a pas dormi depuis des années. Ce qui est vrai, je suppose. »",
    ],
  },
  K_jeanne_autrefois: {
    title: "Autrefois", back: true, devant: "jeanne", silence: hush("jeanne"), fx: { attache: { jeanne: 1 } },
    text: [
      "Tu lui parles de l'école, de l'instituteur Bessière et de ses lunettes rafistolées au fil de laiton, des myrtilles du col, du bal de la Saint-Jean où vous aviez dansé la bourrée avec tant de sérieux que tout le monde avait ri.",
      "Jeanne rit aussi, malgré elle, et puis elle s'arrête. « C'est moi qui fais l'école, maintenant, dit-elle. Dans la même salle. Bessière m'a laissé ses lunettes. » Elle te regarde. « Je raconte aux enfants des histoires de la ville. Je ne suis jamais allée à la ville. »",
    ],
  },
  K_jeanne_mari: {
    title: "Jeanne", back: true, devant: "jeanne", silence: hush("jeanne"),
    text: [
      "« Paulin va bien, dit Jeanne. Le moulin va bien. Il a fait réparer la roue cet automne. » Elle tourne son alliance autour de son doigt. « Il est bon. Il ne boit pas. Il ne me bat pas. Il parle de la farine, et moi de l'école, et le dimanche on va chez sa mère. »",
      "Elle dit tout ça comme on récite les qualités d'une maison qu'on n'a pas choisie.",
    ],
  },
  Q_jeanne_cabane: {
    title: "La cabane", back: true, devant: "jeanne", fx: { flag: "jeanne:cabane" },
    text: [
      "Au mot « cabane », Jeanne pâlit d'un coup, comme si tu l'avais touchée.",
      "« Pas ici, dit-elle très vite. Pas devant elle. » Elle regarde vers la porte, vers l'escalier, vers la maison entière. « Pas devant eux tous. »",
      "Elle reprend son ouvrage et ne lève plus les yeux. Mais avant de se taire, elle a dit « pas ici ». Elle n'a pas dit « pas toi ».",
    ],
  },
  K_jeanne_aveu: {
    title: "Ce que Jeanne a vu", devant: "jeanne", fx: { flag: "jeanne:aveu", quest: "III_jeanne", angoisse: -1 },
    text: [
      "Jeanne parle à voix si basse que tu dois te pencher.",
      "« J'étais à la cabane. Tu le sais, puisque tu y étais aussi. On a entendu la glace. Un bruit sec, comme une branche. Et puis rien, puis Lucien qui criait. Tu es sorti{e} en courant, sans ton manteau. Je t'ai vu{e} courir sur la glace vers la source, et la glace a cédé sous toi aussi. »",
      "« J'ai couru à la maison. J'ai tapé à la porte de la cuisine. Ta sœur est descendue, elle était tout habillée. Elle a réveillé ta mère et Mariette. Moi, je suis restée en haut du sentier. Je les ai vues descendre avec la lanterne. »",
      "« Ta mère est entrée dans l'eau. Odile et Mariette tenaient la corde, couchées sur la glace. Odile hurlait. Ta mère a sorti quelqu'un. C'était toi. Elle est retournée dans l'eau, et elle est ressortie seule. »",
      "« Mon père m'attendait à la maison avec sa ceinture. Je lui ai dit que j'étais restée chez la couturière. Le lendemain, il disait au cabaret que c'était toi qui avais emmené le petit sur la glace. Je n'ai rien dit. Ni ce jour-là, ni après. » Elle te regarde enfin. « Douze ans. J'ai tellement l'habitude de ne pas avoir été là que je ne sais plus le dire autrement. »",
    ],
    choices: [
      { label: "La prendre dans tes bras", tendre: true, if: { attache: "jeanne", min: 2 }, to: "K_jeanne_baiser" },
      { label: "Lui dire que tu ne lui en veux pas", fx: { attache: { jeanne: 1 }, trait: { coeur: 1 } }, back: true },
      { label: "Lui dire qu'elle t'a laissé{e} seul{e} avec ça pendant douze ans", fx: { attache: { jeanne: -1 }, trait: { coeur: -1 } }, back: true },
    ],
    silence: hush("jeanne"),
  },
  K_jeanne_baiser: {
    title: "Jeanne", back: true, seul: true, tendre: true, fx: { geste: "g_baiser", attache: { jeanne: 1 } },
    text: [
      { tendre: true, text: "Tu la prends dans tes bras. Elle se laisse faire, puis elle lève le visage, et c'est elle qui t'embrasse, comme à dix-sept ans, avec la même maladresse et la même hâte. Sa bouche a un goût de sel et de fumée de bois. Son alliance est froide contre ta nuque.", else: "Tu la prends dans tes bras, et vous restez ainsi un long moment." },
      "Puis elle se détache. Elle remet une mèche sous son bonnet. « Ça ne change rien, dit-elle. Je suis mariée, et toi tu repars. » Elle a les joues rouges. « Ça ne change rien, et je suis contente que ce soit arrivé. »",
    ],
  },
  M_jeanne_poutre: {
    title: "La poutre", devant: "jeanne", silence: hush("jeanne"),
    text: [
      "Tu lui décris la poutre de la cabane : les deux initiales, et la date.",
      "Jeanne pose son ouvrage. Elle met les mains sur son visage, et elle reste comme ça, longtemps. Quand elle les retire, elle a les yeux secs et la bouche qui tremble.",
      "« C'est toi qui l'as gravée, dit-elle. Avec le couteau de ton père. Tu disais que comme ça, même si on nous séparait, la cabane s'en souviendrait. »",
    ],
    choices: [
      { label: "La laisser parler", to: "K_jeanne_aveu" },
    ],
  },
  M_jeanne_lettre: {
    title: "La lettre", devant: "jeanne", silence: hush("jeanne"),
    text: [
      "Tu tends la lettre à Jeanne, pliée à l'endroit où ta mère parle de la cabane. Elle lit. Tu la vois arriver aux mots « la petite Pradel ».",
      "« Elle savait, dit Jeanne. Elle savait depuis le premier jour. Elle ne m'a jamais rien dit. Elle me disait bonjour à la messe, tous les dimanches, pendant douze ans. » Elle te rend la lettre. Ses doigts laissent une trace humide sur le papier.",
    ],
    choices: [
      { label: "Attendre qu'elle parle", if: { not: { has: "jeanne:aveu" } }, hide: "jeanne:aveu", to: "K_jeanne_aveu" },
      { label: "Lui prendre la main", if: { has: "jeanne:aveu" }, hide: { not: { has: "jeanne:aveu" } }, fx: { attache: { jeanne: 1 } }, back: true },
    ],
  },
  V_jeanne: {
    title: "La deuxième veille", place: "chambre", devant: "jeanne", silence: hush("jeanne", { back: null, to: "N_matin", takes: "morning" }),
    text: [
      "Tu prends la chaise en face d'elle. La tempête cogne aux volets, et les cierges se couchent à chaque rafale. Jeanne, sans un mot, te tend un bout du linceul, et une aiguille, et tu couds avec elle, mal, comme tu cousais tes boutons à Varenne.",
      { tendre: true, text: "Vos genoux se touchent sous le drap. Vous les laissez se toucher.", else: "Vous cousez côte à côte, en silence, jusqu'au bout du drap." },
      { trouble: true, text: "Une fois, il te semble que ta mère, sur le lit, a tourné la tête vers vous. Tu lâches ton aiguille. Jeanne la ramasse, et pose la main sur ton poignet jusqu'à ce que ça passe." },
    ],
    choices: [
      { label: "Lui demander, cette nuit, ce qu'elle a vu ce soir-là", after: "jeanne:cabane", hide: "jeanne:aveu", to: "K_jeanne_aveu" },
      { label: "Poser ta main sur la sienne", tendre: true, if: { attache: "jeanne", min: 2 }, hide: { seen: "K_jeanne_baiser" }, to: "K_jeanne_baiser" },
      { label: "Coudre avec elle jusqu'au matin", takes: "morning", fx: { attache: { jeanne: 1 } }, to: "N_matin" },
    ],
  },

  // ------------------------------------------------------------------ ta propre version
  D_moi_etang: {
    title: "Ce dont tu te souviens", back: true, seul: true,
    text: [
      "Tu reprends ta propre histoire, celle que tu te racontes depuis douze ans, mot par mot. Tu as couru sur la glace. Tu as attrapé Lucien par le col. Tu l'as tenu longtemps. Odile, sur la berge, avec la lanterne, n'a pas bougé.",
      "Tu cherches la sensation du col dans ton poing, le poids d'un enfant de neuf ans dans l'eau. Tu ne la trouves pas. Tu trouves le froid, le noir, et une lumière jaune au-dessus de toi. Rien dans ta main.",
      { if: { any: ["mariette:corde", "fabre:carnet", "jeanne:aveu"] }, text: "Et les autres disent une autre chose, chacun avec ses mots : la corde, la gaffe, ta sœur couchée sur la glace, qui hurlait." },
      { if: { has: "etang:verite" }, text: "Et ta mère l'a écrit : « Tu n'as rien tenu. Si tu te souviens d'autre chose, c'est la fièvre. »" },
    ],
    choices: [
      { label: "Fermer les yeux et redescendre dans la fièvre", hide: { seen: "S5_fievre" }, to: "S5_fievre" },
    ],
  },

  // ------------------------------------------------------------------ la lettre
  M_lettre: {
    title: "La lettre de ta mère", place: "etage", seul: true,
    text: [
      "Une feuille pliée en quatre, cachetée de cire noire, et sur le dessus ton prénom, d'une écriture penchée, tremblée, qui s'y est reprise à trois fois pour la première lettre.",
      "Tu tiens la lettre, et tu ne l'ouvres pas encore. Douze ans, quatre lettres, et voici la cinquième. La dernière.",
    ],
    choices: [
      { label: "Briser le cachet et lire", to: "M_lettre_lue" },
      { label: "La garder fermée dans ta poche pour l'instant", back: true },
    ],
  },
  M_lettre_lue: {
    title: "Ce qu'elle t'a écrit", place: "etage", back: true, seul: true, fx: { flag: ["etang:verite", "lettre:lue"], quest: "III_lettre", angoisse: -2 },
    text: [
      "Tu lis la lettre une fois, très vite, comme on avale un remède. Puis une deuxième fois, lentement. Puis tu la poses sur tes genoux et tu regardes le mur.",
      "« Je t'ai tendu{e} la gaffe parce que tu étais le plus près. » « Tu n'as rien tenu, tu étais à moitié mort{e}. » « Je t'ai envoyé{e} chez Firmin pour ces deux raisons, et la première est la plus laide. »",
      "Douze ans, tu as cru qu'elle t'avait chassé{e} pour l'avoir tué. Elle t'a éloigné{e} parce qu'elle t'avait choisi{e}, et qu'elle ne le supportait pas. Ce n'est pas plus doux. C'est vrai, et cela suffit à changer le poids de tout le reste.",
      "Tu replies la lettre. Dans la maison, quelqu'un met une bûche dans le fourneau, et le bruit monte par l'escalier comme n'importe quel autre jour.",
    ],
  },
};
