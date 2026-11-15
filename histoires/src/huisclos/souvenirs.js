// The remembrances, played in the past (`souvenir`: the clock stands still, « Revenir au présent » brings back the hour
// one left), and the dreams of the three nights (base.js `dreams`: nothing in them is explained).
var PAST = "Il y a douze ans";
module.exports = {
  // ------------------------------------------------------------------ la promesse
  S1_promesse: {
    title: "La promesse", souvenir: PAST,
    text: [
      "Le soir du quatorze janvier. Tu as dix-sept ans, et tu laces tes souliers sur la dernière marche de l'escalier, en faisant le moins de bruit possible. Lucien est assis deux marches plus haut, en chemise de nuit, ses patins neufs sur les genoux. Il les a graissés lui-même. Il en a mis partout.",
      "« Emmène-moi, chuchote-t-il. La glace est prise jusqu'à la source, Baptiste l'a dit. Juste une fois. La nuit, avec la lune. Tu avais promis à Noël. »",
      "Tu as promis à Noël. Tu avais oublié. Ce soir, quelqu'un t'attend à la cabane, et tu as mis le manteau de ton père pour avoir l'air d'un homme.",
    ],
    choices: [
      { label: "Lui promettre « demain », en lui ébouriffant les cheveux", fx: { set: { promesse: "tendre" } }, to: "S1_demain" },
      { label: "Lui dire de remonter se coucher, que tu as à faire", fx: { set: { promesse: "sec" } }, to: "S1_demain" },
    ],
    silence: { to: "S1_demain", fx: { set: { promesse: "silence" } } },
  },
  S1_demain: {
    title: "La promesse", souvenir: PAST, back: true,
    text: [
      { if: { is: { promesse: "tendre" } }, text: "« Demain, dis-tu. Promis. Demain soir, toi et moi, jusqu'à la source. » Il te regarde avec une confiance totale, celle des enfants de neuf ans pour les gens de dix-sept, et il remonte l'escalier en serrant ses patins contre lui." },
      { if: { is: { promesse: "sec" } }, text: "« Remonte, dis-tu. J'ai à faire. » Sa bouche se tord. Il remonte, une marche à la fois, en traînant ses patins, pour que tu l'entendes bien." },
      { if: { is: { promesse: "silence" } }, text: "Tu ne réponds pas. Tu finis de lacer ton soulier, tu te lèves, tu lui mets la main sur la tête une seconde, et tu sors. Derrière toi, il ne dit rien non plus." },
      "C'est la dernière fois que tu l'as vu vivant. Tu as passé douze ans à rejouer cette marche d'escalier. Selon les nuits, tu lui as dit oui, tu l'as emmené, tu l'as tenu par la main jusqu'à la source et retour. Selon les nuits, tu as été l'aîné{e} qu'il méritait, ou l'aîné{e} qui l'a laissé sur la marche. Aucune de ces nuits ne change la suivante.",
    ],
  },

  // ------------------------------------------------------------------ la cabane
  S2_cabane: {
    title: "La cabane", souvenir: PAST,
    text: [
      "La cabane aux barques, il y a douze ans, avec un toit entier et une barque dedans, retournée sur des tréteaux. Jeanne est assise sur le banc de rameur, enveloppée dans une couverture de cheval qu'elle a volée à l'écurie de son père. Elle a seize ans, les joues rouges de froid, et elle rit parce que tu as l'air ridicule dans le manteau de ton père.",
      { tendre: true, text: "Tu t'assois à côté d'elle, sous la couverture. Elle sent le foin et le savon noir. Vous ne dites rien pendant longtemps, et c'est le plus beau moment de ta vie jusque-là, et pendant longtemps, après.", else: "Tu t'assois à côté d'elle. Vous parlez bas, de tout et de rien, du printemps, de la ville, de partir." },
      "Tu sors ton couteau et tu graves vos initiales dans la poutre, au-dessus du banc. Elle te regarde faire. « Mon père te tuerait, dit-elle. » « La cabane s'en souviendra, dis-tu. Même s'ils nous séparent. »",
      "Dehors, sur la glace, un bruit léger, régulier, comme un frottement. Tu lèves la tête.",
    ],
    choices: [
      { label: "Sortir voir ce que c'est", fx: { set: { cabane: "sorti" } }, to: "S2_cris" },
      { label: "Te dire que c'est un renard, et rester sous la couverture", tendre: true, fx: { set: { cabane: "reste" } }, to: "S2_cris" },
    ],
    silence: { to: "S2_cris", fx: { set: { cabane: "reste" } } },
  },
  S2_cris: {
    title: "La cabane", souvenir: PAST, back: true,
    text: [
      { if: { is: { cabane: "sorti" } }, text: "Tu entrouvres la porte. La lune est derrière les nuages. Tu ne vois rien, rien que la plaque grise de l'étang et les saules. Le bruit s'est arrêté. Tu refermes la porte en riant de toi-même." },
      { if: { is: { cabane: "reste" } }, text: "Un renard, dis-tu. Jeanne se serre contre toi. Le bruit continue un moment, puis s'éloigne vers le nord, vers la source." },
      "Un quart d'heure plus tard, la glace craque. Un bruit sec, comme une branche qu'on casse sur le genou. Puis un cri d'enfant, un seul, aigu, que tu reconnaîtrais entre mille, et qui s'arrête au milieu.",
      "Tu es dehors avant d'avoir pensé, sans le manteau de ton père. Derrière toi, Jeanne crie ton nom.",
      "Le souvenir s'arrête là. Il s'est toujours arrêté là.",
    ],
  },

  // ------------------------------------------------------------------ la glace (ta version)
  S3_glace: {
    title: "La glace", souvenir: PAST, back: true, fx: { recit: "v_hero_etang" },
    text: [
      "Tu cours sur la glace. Elle est noire, lisse, et la lune revient juste à ce moment, et tu vois le trou, près de la source, une bouche d'eau noire aux bords déchiquetés. Tu cours vers le trou en criant son nom.",
      "La glace cède sous toi à trois pas du bord. Le froid te prend d'un coup, partout, comme une main. Tu remontes. Tu craches. Tu t'accroches au bord, et le bord casse, et tu t'accroches plus loin.",
      "Tu as attrapé Lucien par le col. C'est ce que tu te répètes depuis douze ans : tu l'as attrapé et tu l'as tenu, longtemps, les bras dans l'eau noire, et il pesait, et tu tenais.",
      { trouble: true, text: "Sur la berge, il y a Odile, avec une lanterne à la main. Elle te regarde. Elle ne bouge pas. Elle reste là, debout, la lanterne levée, sans un geste, pendant que tu tiens, et tu tiens, et tu lâches." },
      { calme: true, text: "Sur la berge, une lanterne posée sur la glace. Une silhouette entre dans l'eau, avec une perche. Derrière, deux autres, couchées à plat ventre, qui tirent sur une corde. L'une des deux crie, sans arrêt, d'une voix de fille." },
      "Puis un crochet de fer se prend dans ta chemise, et quelqu'un te tire, et la glace te racle la poitrine, et c'est tout.",
    ],
  },

  // ------------------------------------------------------------------ le départ
  S4_depart: {
    title: "Le départ", souvenir: PAST,
    text: [
      "Un lundi de janvier, trois semaines après l'enterrement de Lucien. La malle est fermée, ficelée, chargée sur la carriole du valet. Tu as encore la toux de ta fièvre, et une écharpe de Mariette autour du cou.",
      "Ta mère est sur le seuil de la cuisine. Elle a les deux avant-bras bandés jusqu'aux coudes, et elle tient ses mains loin de son corps, comme deux choses qui ne lui appartiennent pas. Elle ne descend pas les marches.",
      "« Ton oncle t'attend à Varenne, dit-elle. Il t'a trouvé une place chez un notaire, ou ailleurs. Tu écriras. » Elle regarde par-dessus ta tête, vers l'étang. « Tu n'as pas besoin de revenir. »",
      "Tu attends qu'elle dise autre chose. Elle attend que tu montes dans la carriole.",
    ],
    choices: [
      { label: "Lui demander pourquoi", fx: { set: { depart: "pourquoi" } }, to: "S4_carriole" },
      { label: "Lui dire « Adieu, maman »", fx: { set: { depart: "adieu" } }, to: "S4_carriole" },
    ],
    silence: { to: "S4_carriole", fx: { set: { depart: "silence" } } },
  },
  S4_carriole: {
    title: "Le départ", souvenir: PAST, back: true,
    text: [
      { if: { is: { depart: "pourquoi" } }, text: "« Pourquoi ? » Ta mère ouvre la bouche. Tu vois qu'elle va répondre. Puis elle la referme, et elle dit seulement : « Monte. Il fait froid. »" },
      { if: { is: { depart: "adieu" } }, text: "« Adieu, maman. » Elle fait oui de la tête, une fois. Elle ne dit pas adieu. Tu as mis des années à remarquer qu'elle ne l'avait pas dit." },
      { if: { is: { depart: "silence" } }, text: "Tu ne dis rien. Tu montes dans la carriole. C'est ce que tu sais faire de mieux, dans cette famille : te taire au bon moment, et partir." },
      "La carriole s'ébranle. Tu te retournes une seule fois, au tournant de la chapelle. Ta mère est toujours sur le seuil, les bras écartés du corps, et à la fenêtre de l'étage, derrière la vitre, il y a le visage pâle d'Odile.",
      { after: "etang:verite", text: "Tu sais maintenant à quoi elle pensait, ta mère, en regardant l'étang par-dessus ta tête." },
    ],
  },

  // ------------------------------------------------------------------ la fièvre
  S5_fievre: {
    title: "La fièvre", souvenir: PAST, back: true,
    text: [
      "Trois jours de fièvre, après l'étang. Tu es dans ton lit d'enfant, et ton lit est un bateau, et le plafond se rapproche et s'éloigne. Des visages passent au-dessus de toi, des mains te frottent la poitrine avec de l'eau-de-vie. On parle, dans la chambre, et dans le couloir, et sous le plancher.",
      { trouble: true, text: "Tu entends des voix qui disent ton nom, et le nom de Lucien, et « la glace », et « la faute ». Tu entends Odile qui ne dit rien. Tu la vois, debout au pied du lit, la lanterne à la main, qui te regarde sans bouger, comme sur la berge. Tu cries : pourquoi tu ne bouges pas ? Pourquoi ?" },
      { calme: true, text: "Sous le plancher, dans la cuisine, une voix de fille, cassée par les larmes : « Je l'ai vu partir. De ma fenêtre. Je l'ai vu, et j'ai laissé faire. C'est moi, maman, c'est moi. » Et la voix de ta mère, très basse, très dure : « Relève-toi. Relève-toi, et ne le redis jamais. À personne. »" },
      "Quelqu'un te tient la main, tout le temps. Une main rêche, aux paumes écorchées, entourées de linge. Tu as cru pendant douze ans que c'était Mariette.",
    ],
  },

  // ------------------------------------------------------------------ les rêves
  R_glace: {
    title: "Un rêve", place: "etage", back: true,
    text: [
      "Tu marches sur l'étang, et la glace est transparente comme une vitre. Dessous, l'eau est claire, éclairée d'en bas, et Lucien est là, debout sur le fond, les cheveux flottants, en chemise de nuit. Il te fait signe de descendre.",
      "Tu t'agenouilles. Tu frappes la glace de tes poings. Elle ne casse pas. Lucien frappe aussi, de l'autre côté, trois petits coups, puis il se retourne et s'en va vers la source en sautant d'un pied sur l'autre, comme sur des traces trop grandes.",
      "Tu te réveilles les poings serrés.",
    ],
  },
  R_mere: {
    title: "Un rêve", place: "etage", back: true,
    text: [
      "Ta mère est assise au secrétaire du bureau, en robe bleue, comme une jeune fille. Elle écrit très vite, avec une plume attachée à sa main par un ruban. Elle ne lève pas la tête.",
      "« J'ai presque fini, dit-elle. Attends. » Tu attends. Elle écrit, page après page, et les pages tombent par terre, et elles sont toutes blanches.",
      "Quand tu te réveilles, tu as encore dans l'oreille le grattement de la plume.",
    ],
  },
  R_fiole: {
    title: "Un rêve", place: "etage", back: true,
    text: [
      "Tu es sous le lit de ta mère, à plat ventre dans la poussière, et le lit est immense, haut comme une église. Tout autour, des pieds passent : des bottes cirées, des sabots, des souliers de femme, des pantoufles.",
      "Une petite fiole roule vers toi sur le plancher, lentement, et s'arrête contre ta joue. Elle est pleine. Le bouchon tourne tout seul.",
      "Au-dessus de toi, à travers le matelas, la voix de ta mère dit : « Tout. » Tu te réveilles.",
    ],
  },
  R_cabane: {
    title: "Un rêve", place: "etage", back: true,
    text: [
      { tendre: true, text: "Tu es dans la cabane, sous la couverture de cheval, et Jeanne dort contre toi. Elle a dix-sept ans et elle en a vingt-huit, les deux en même temps.", else: "Tu es dans la cabane, et Jeanne est assise sur le banc de rameur. Elle a dix-sept ans et elle en a vingt-huit, les deux en même temps." },
      "Quelqu'un frappe à la porte. Trois petits coups. Vous laissez frapper.",
      "Tu te réveilles avant de savoir qui frappait, et tu le sais quand même.",
    ],
  },
};
