// Les Fils de la Marée · act II, Jasse's day of masks. Where Nella is decides the morning: hidden (nella=libre, and
// perhaps sold by Corentin for the reward), or in the Tour (nella=prison). Then three things in the day (clock j2):
// the Mère Gouge (a break-out on the third night: evasion, or the boats on the dyke: basport), the secretary, the
// Temple (sanctuary for the key: clef3=anselme), Morvan (the key for a pardon: clef3=morvan), the Tour, the passage of
// the reeds (fuite), and in the evening the masked ball of the Maison des Sels, where Corentin sells the key and where
// one hears what the fleet of Orcanne waits for (jasse:sait_chaine).
var LIBRE = { has: "nella=libre" }, PRISON = { has: "nella=prison" };
var KEY = { item: "clef_bronze" };
var FIN = { label: "Fin de la journée de Jasse", fx: { flag: "ch2:jasse" }, back: "C2" };
module.exports = {
  J2: { branch: [
    { if: { all: [LIBRE, { has: "cache=corentin" }, { has: "corentin=tente" }] }, fx: { until: 7 }, to: "J2L_corentin" },
    { if: LIBRE, fx: { until: 7 }, to: "J2L_matin" },
    { fx: { until: 7 }, to: "J2K_matin" },
  ] },

  // ================================================================ Nella hidden
  J2L_matin: { act: "II", title: "Les crieurs", place: "basport", ambiance: "eau",
    text: [
      "Tu te réveilles dans la *Pimprenelle* au son des crieurs. Il y en a un à chaque pont, en masque de coq, une feuille à la main. *Nella Ferrant, servante, en fuite. Cinq cents ducats à qui la livrera au Guet, offerts par la Maison des Sels.*",
      "Cinq cents ducats. À Bas-Port, c'est une maison. C'est dix ans de passeur.",
      { if: { has: "canal:attaque" }, text: "Le crieur ajoute : *Et cent ducats pour le passeur de la Pimprenelle, qui a attaqué la barque de la prison.* Tu repeins le nom de ta barque avec de la suie avant d'avoir fini ton pain." },
      { if: { has: "cache=gouge" }, text: "Chez la Mère Gouge, Nella a dormi. La vieille femme a mis deux neveux au pied de l'échelle, avec des gaffes. « À Bas-Port, dit-elle, personne ne livre personne. Pas pour cinq cents ducats. Pour mille, je ne dis pas. » Elle rit. Elle est la seule." },
      { if: { is: { cache: null } }, text: "Nella a dormi au fond de ta barque, sous la bâche, contre toi. Ce matin, elle a les yeux de quelqu'un qui a compté toute la nuit les gens qui pourraient la vendre." },
      { if: { has: "mo_pris=j1" }, text: "Vers huit heures, Mo revient, les mains dans les poches. La capitaine l'a relâché à l'aube, après lui avoir donné du pain et une claque sur la tête. « Elle m'a demandé où tu étais. J'ai dit à Orcanne. Elle a ri. »" },
    ],
    choices: [{ label: "Réfléchir à la journée", fx: { set: { mo_pris: null } }, to: "J2_jour" }] },

  J2L_corentin: { act: "II", title: "Cinq cents ducats", place: "basport", ambiance: "eau",
    text: [
      "Tu te réveilles au son des crieurs. Il y en a un à chaque pont, en masque de coq. *Nella Ferrant, servante, en fuite. Cinq cents ducats à qui la livrera au Guet, offerts par la Maison des Sels.*",
      "Tu vas à l'entrepôt de Corentin. Il est là, assis sur une caisse, à tailler un bout de bois avec son couteau. Il te dit bonjour. Il dit que la petite dort. Il ne te regarde pas.",
      "Corentin te regarde toujours, d'habitude. Il te regarde quand il ment, surtout. C'est comme ça que tu sais quand il ment.",
    ],
    choices: [
      { label: "« Qu'est-ce qu'il y a, Cor ? »", test: { dom: "social", diff: 0, label: "Social" },
        win: { to: "J2L_cor_aveu" }, lose: { to: "J2L_cor_ment" } },
      { label: "Monter voir Nella, et l'emmener ailleurs sans rien lui dire", test: { dom: "discretion", diff: -10, label: "Discrétion" },
        win: { fx: { set: { cache: "gouge", corentin: "traitre" } }, to: "J2L_cor_fuite" }, lose: { to: "J2L_cor_ment" } },
    ] },
  J2L_cor_aveu: { act: "II", title: "Corentin", place: "basport",
    text: [
      "Il pose son couteau. Il regarde ses mains.",
      "« Un homme de la Maison des Sels est venu cette nuit. Il savait qu'elle était ici. Je ne sais pas comment. Il m'a dit : cinq cents ducats, et personne ne saura que c'est toi. Ou bien le Guet trouve la fille ici tout seul, et toi avec, et tu pends avec elle. » Il relève la tête. « Je n'ai pas dit oui. Je n'ai pas dit non. J'ai dit : demain midi. »",
      "« Il est huit heures, Jasse. »",
    ],
    choices: [
      { label: "« Merci de me l'avoir dit. Aide-moi à la sortir d'ici. »", fx: { set: { corentin: "repenti", cache: "gouge" }, regard: { corentin: "redevable" } }, to: "J2L_cor_sauve" },
      { label: "Le frapper. Une fois, de toutes tes forces", fx: { set: { corentin: "chasse", cache: "gouge" }, regard: { corentin: "rancunier" } }, to: "J2L_cor_coup" },
    ] },
  J2L_cor_sauve: { act: "II", title: "La trappe", place: "basport",
    text: [
      "Corentin soulève la trappe. Il descend Nella lui-même, sur son dos, par l'échelle de derrière, jusqu'à une barque à fond plat qu'il garde pour les marchandises qui n'aiment pas le jour. Il vous mène chez la Mère Gouge par des canaux que tu ne connaissais pas, alors que tu es né ici.",
      "En vous quittant, il dit : « À midi, je dirai à l'homme que la fille s'est enfuie. Il me croira, ou il ne me croira pas. » Il sourit, de travers. « Je t'en dois une, Jasse. Ou c'est toi qui m'en dois une. Je ne sais plus. »",
    ],
    choices: [{ label: "Penser à la journée", to: "J2_jour" }] },
  J2L_cor_coup: { act: "II", title: "Le coup", place: "basport",
    text: [
      "Ton poing lui ouvre la lèvre. Il tombe de sa caisse. Il reste assis par terre, la main sur la bouche, à te regarder.",
      "Tu montes chercher Nella. Tu l'emmènes chez la Mère Gouge par le chemin le plus long. Corentin ne vous suit pas.",
      "En partant, tu l'entends dire, derrière toi, pas fort : « Tu as raison. »",
    ],
    choices: [{ label: "Penser à la journée", to: "J2_jour" }] },
  J2L_cor_fuite: { act: "II", title: "Par les toits", place: "basport",
    text: [
      "Tu dis à Corentin que tu vas chercher du pain. Tu fais le tour par la ruelle, tu montes par la gouttière, tu ouvres la lucarne du grenier. Nella est réveillée. Tu poses un doigt sur tes lèvres.",
      "Une heure plus tard, elle est dans la soupente de la Mère Gouge. À midi, des gardes du Guet enfoncent la porte de l'entrepôt de Corentin, avec un homme de la Maison des Sels. Ils ne trouvent qu'une couverture.",
      "Tu ne revois pas Corentin de la journée. Tu sais ce que tu sais.",
    ],
    choices: [{ label: "Penser à la journée", to: "J2_jour" }] },
  J2L_cor_ment: { act: "II", title: "Midi", place: "basport",
    fx: { set: { nella: "prison", corentin: "traitre", nella_reprise: "corentin", cache: null }, regard: { corentin: "craintif" } },
    text: [
      "Corentin rit, te tape sur l'épaule, dit que tu t'inquiètes trop. Il te propose de partir chercher du pain et des harengs pour la petite. Tu y vas.",
      "Quand tu reviens, à midi passé, la porte de l'entrepôt est ouverte. Il y a des traces de bottes sur le plancher mouillé, la trappe du grenier pend, et la couverture est par terre.",
      "Une voisine, sur son balcon, en masque de poule, te dit ce qu'elle a vu : quatre gardes du Guet, un homme en manteau de la Maison des Sels, et la petite, qui ne criait pas. Corentin, lui, était sur le seuil. Il regardait ailleurs.",
      "Nella est à la Tour du Guet. Corentin a disparu, avec cinq cents ducats.",
    ],
    choices: [{ label: "Penser à la journée", to: "J2_jour" }] },

  // ================================================================ Nella in the Tour
  J2K_matin: { act: "II", title: "Les crieurs", place: "basport", ambiance: "eau",
    text: [
      "Tu te réveilles dans la *Pimprenelle* au son des crieurs, un à chaque pont, en masque de coq.",
      { if: { is: { rapport: "poison" } }, text: "*Nella Ferrant, servante, accusée d'avoir empoisonné la Doyenne, sera jugée par le Conseil la troisième nuit, avant les lanternes.* Le crieur ajoute la suite, celle que tout le monde connaît : l'empoisonneur est pendu à la digue, au reflux." },
      { if: { not: { is: { rapport: "poison" } } }, text: "*Nella Ferrant, servante, retenue au Guet pour le vol d'une clef de la Doyenne.* Un vol, ce n'est pas la corde. Les gens de Bas-Port qui t'ont vu passer hier soir te tapent sur l'épaule : elle sortira dans un mois." },
      { if: { has: "jasse_blesse=canal" }, text: "Ta tempe a gonflé pendant la nuit. Tu as un œil qui voit trouble. Tu mets un masque de chouette, qui cache la moitié du visage." },
      { if: { not: { is: { gouge: null } } }, text: "Vers huit heures, un neveu de la Mère Gouge vient te dire ce que sa cousine des cuisines de la Tour a vu : la petite a mangé un peu de pain, elle n'a pas touché la soupe, elle dort mal. Le gardien du deuxième étage s'appelle Matthieu, il boit." },
      { if: { has: "mo_pris=j1" }, text: "Mo revient vers neuf heures, les mains dans les poches. La capitaine l'a relâché à l'aube, avec du pain et une claque sur la tête. Il a vu Nella dans le couloir. Elle lui a fait un signe : pouce levé." },
    ],
    choices: [{ label: "Réfléchir à la journée", fx: { set: { mo_pris: null } }, to: "J2_jour" }] },

  // ================================================================ the day: three things
  J2_jour: { act: "II", title: "Bas-Port masqué", place: "basport", hub: true, noLead: true, backName: "Bas-Port masqué",
    text: [
      { first: true, text: "Bas-Port masqué ressemble à une basse-cour qui aurait appris à ramer : des têtes de poule, de canard, de cochon, sur des barques chargées de vin. Personne ne te reconnaît. C'est le seul jour de l'année où un homme recherché peut aller partout. Tu as le temps de trois choses avant le soir." },
      { again: true, if: { clock: "j2", max: 1 }, text: "Le soleil monte. Il te reste deux choses à faire avant le soir." },
      { again: true, if: { clock: "j2", min: 2 }, text: "Le soleil descend vers les Passes. Il te reste une chose à faire. Le bal masqué de la Maison des Sels commence au coucher du soleil." },
      { if: { has: "clef3=corentin" }, text: "Quelque part dans la ville, Corentin a ta clef. Un gamin de la Morue t'a dit qu'il a acheté un masque de renard et un habit de fête, et qu'il a demandé l'heure du bal de la Maison des Sels." },
      { if: { all: [{ has: "ch2:oriane" }, { has: "oriane=enquete" }, { has: "oriane:cherche_jasse" }] }, text: "Un billet est arrivé à l'Ancre Basse pour toi, d'une écriture de clerc : *La secrétaire de la Doyenne voudrait parler au frère de Nella Ferrant. Quai des Saules, la maison au saule. Sans armes. O. V.*" },
    ],
    choices: [
      { label: "La Mère Gouge : préparer la troisième nuit", to: "J2_gouge", fx: { clock: { j2: 1 } }, hide: { seen: "J2_gouge" } },
      { label: "La Tour du Guet : voir Nella sous un masque", if: PRISON, to: "J2_tour", fx: { clock: { j2: 1 } }, hide: { seen: "J2_tour" } },
      { label: "Le quai des Saules : parler à la secrétaire de la Doyenne", to: "J2_oriane", fx: { clock: { j2: 1 } }, hide: { seen: "J2_oriane" } },
      { label: "Le Temple : demander la protection du Grand Prêtre", to: "J2_temple", fx: { clock: { j2: 1 } }, hide: { seen: "J2_temple" } },
      { label: "La Maison des Sels : proposer un marché au Grand Argentier", if: KEY, why: "Tu n'as rien à lui vendre.", to: "J2_morvan", fx: { clock: { j2: 1 } }, hide: { seen: "J2_morvan" } },
      { label: "Les roseaux du nord : trouver un passage vers le large, pour Nella et toi", if: LIBRE, to: "J2_fente", fx: { clock: { j2: 1 } }, hide: { seen: "J2_fente" } },
      { label: "Le bal masqué de la Maison des Sels, au coucher du soleil", if: { clock: "j2", min: 2 }, why: "Le bal commence au coucher du soleil.", to: "J2_bal", fx: { clock: { j2: 1 } }, hide: { seen: "J2_bal" }, big: true },
    ] },
  J2_suite: { branch: [
    { if: { clock: "j2", min: 3 }, to: "J2_soir" },
    { to: "J2_jour" },
  ] },

  // ---------------------------------------------------------------- the Mère Gouge
  J2_gouge: { act: "II", title: "L'Ancre Basse", place: "basport",
    fx: { meet: "gouge" },
    text: [
      "La Mère Gouge tient séance sur sa table posée sur des tonneaux. Elle ne porte pas de masque. Elle dit qu'à soixante-dix ans, la peste la connaît assez pour ne pas se tromper.",
      { if: { has: "gouge=allie" }, text: "« Hier soir, deux cents barques sur la digue. Ce soir, trois cents. Demain soir, toutes. » Elle frappe sur le tonneau. « Ils pendront la petite devant tout Bas-Port, ou ils ne la pendront pas. »" },
      { if: { has: "gouge=prudente" }, text: "« Sans bruit, je t'avais dit. Mais le bruit vient tout seul. Les gens de Bas-Port ont entendu les crieurs. Ils parlent de la digue. »" },
      { if: { is: { gouge: null } }, text: "« Le passeur Ferrant. » Elle t'examine. « Je connaissais ton père. Et ta sœur, je l'ai vue sur le ponton quand elle avait trois mois. L'hiver de la grande passe. » Elle dit « ta sœur » avec une petite hésitation, comme on enjambe une flaque." },
      { if: { has: "sevan_cache=gouge" }, text: "Elle désigne le plafond d'un coup de menton. « J'ai un médecin du Temple dans mon grenier, ce soir. Bas-Port devient à la mode. »" },
    ],
    choices: [
      { label: "« Demain soir, pendant les lanternes, on sort Nella de la Tour. Par l'eau. Il me faut des barques et des bras. »", if: PRISON, to: "J2_gouge_evasion", big: true },
      { label: "« Demain soir, je veux tout Bas-Port devant le palais du Conseil. Qu'ils voient pour qui ils votent. »", to: "J2_gouge_palais", big: true },
      { label: "« Qui était Tomas Gouge ? »", if: { clue: "eau" }, why: "Il faudrait une raison de le demander.", to: "J2_gouge_tomas", hide: { seen: "J2_gouge_tomas" } },
    ] },
  J2_gouge_evasion: { act: "II", title: "Par l'eau", place: "basport",
    text: [
      "La Mère Gouge réfléchit en tapotant le tonneau.",
      "« La Tour a une porte d'eau, côté lagune, pour les barques de ravitaillement. Le gardien de nuit de la porte d'eau, c'est le mari de ma nièce. Les lanternes s'allument à minuit. À minuit, tout le Guet regarde le palais. » Elle sourit. « Il me faut quelque chose en échange, passeur. Pas pour moi. Pour Bas-Port. »",
      "« Quoi ? »",
      "« Que la petite, une fois dehors, dise devant tout le monde qui l'a mise dedans. Bas-Port ne fait pas évader une servante. Bas-Port fait évader une témoin. »",
    ],
    choices: [
      { label: "« Elle le dira. Je te le promets. »", fx: { set: { evasion: "prevue", gouge: "allie" }, regard: { gouge: "allie" } }, to: "J2_suite" },
      { label: "« Je ne promets rien pour elle. »", test: { dom: "social", diff: -10, label: "Social" },
        win: { fx: { set: { evasion: "prevue", gouge: "allie" }, regard: { gouge: "admiratif" } }, to: "J2_gouge_franc" }, lose: { fx: { set: { gouge: "prudente" } }, to: "J2_gouge_non" } },
    ] },
  J2_gouge_franc: { act: "II", title: "La franchise", place: "basport",
    text: [
      "La vieille femme te regarde longtemps. Puis elle rit, un rire de mouette. « Bon. Au moins, tu ne mens pas. Ton père mentait tout le temps, avec des yeux d'ange. » Elle tend la main par-dessus le tonneau. « Demain, à minuit, la porte d'eau. »",
    ],
    choices: [{ label: "Lui serrer la main", to: "J2_suite" }] },
  J2_gouge_non: { act: "II", title: "Non", place: "basport",
    text: [
      "« Alors je ne promets rien non plus. » Elle reprend sa pipe. « Bas-Port n'est pas ta barque, petit. Tu ne la mènes pas où tu veux. »",
    ],
    choices: [{ label: "Partir", to: "J2_suite" }] },
  J2_gouge_palais: { act: "II", title: "Devant le palais", place: "basport",
    fx: { set: { basport: "souleve", gouge: "allie" }, regard: { gouge: "allie" } },
    text: [
      "La Mère Gouge se lève. Elle prend son maillet et frappe trois coups sur le tonneau, plus fort qu'hier.",
      "« Demain soir, toutes les barques de Bas-Port devant l'île du Phare. Avec des lanternes, puisque c'est la nuit des lanternes. Le Conseil élira son Doyen avec nous sous les fenêtres. » Elle se tourne vers toi. « Tu sais ce que tu fais, passeur ? Trois mille barques devant un palais, ça ne se tient pas avec une gaffe. Si quelqu'un lance une pierre, ou si le Guet charge, je ne réponds de rien. »",
      "Tu ne sais pas ce que tu fais. Tu le dis. Elle hoche la tête, comme si c'était la bonne réponse.",
    ],
    choices: [{ label: "Partir", to: "J2_suite" }] },
  J2_gouge_tomas: { act: "II", title: "Tomas", place: "basport",
    fx: { clue: "gouge_fils" },
    text: [
      "La Mère Gouge pose sa pipe. Elle ne répond pas tout de suite.",
      "« Mon fils. Le plus beau batelier de la lagune. Il savait lire, il écrivait mal, il nageait comme un phoque. Il s'est noyé dans la passe de Sainte-Agathe, l'hiver de la grande passe, il y a dix-neuf ans. » Elle te regarde. « Pourquoi tu me demandes ça ? »",
      "Tu lui répètes la phrase de ta mère. *Nella n'est pas à nous. Elle est à l'eau.*",
      "La vieille femme ferme les yeux. Elle reste comme ça longtemps, une main sur le tonneau. Quand elle les rouvre, ils sont mouillés. « Il avait une dame. Une dame du haut. Il ne m'a jamais dit qui. Il disait : *maman, si tu savais.* » Elle se mouche dans son foulard. « Va-t'en, petit. Laisse une vieille réfléchir. »",
    ],
    choices: [{ label: "La laisser", fx: { flag: "gouge:sait_nella" }, to: "J2_gouge" }] },

  // ---------------------------------------------------------------- the Tour, under a mask
  J2_tour: { act: "II", title: "Sous le masque", place: "tour", ambiance: "chateau",
    text: [
      "Le jour des masques, la Tour du Guet laisse entrer les familles une heure, à midi. C'est une vieille coutume : on ne peut pas refuser un visage qu'on ne voit pas. Tu passes la porte en masque de chouette, avec un panier de pain, derrière une grand-mère qui vient voir son petit-fils voleur de poules.",
      { if: { has: "jasse_blesse=canal" }, text: "Un garde te regarde un peu trop longtemps, à cause de ta tempe gonflée sous le masque. Puis une barque de vin arrive dans la cour, et il regarde la barque." },
      "Nella est dans une cellule du deuxième étage. On te laisse lui parler à travers la grille du judas.",
      { if: { has: "nella_sait=sevan" }, text: "Elle a changé depuis hier. Elle se tient plus droite. « Le médecin est venu. Il m'a dit des choses. Sur elle, et sur moi. » Elle ne dit pas lesquelles. Elle te regarde à travers la grille comme si elle voulait vérifier que tu es toujours son frère." },
      { if: { not: { has: "nella_sait=sevan" } }, text: "« Jasse. » Elle colle son front contre la grille. « J'ai peur de la soupe. J'ai peur de dormir. » Puis, plus bas : « La clef. Tu l'as ? »" },
    ],
    choices: [
      { label: "Lui dire la phrase de votre mère", if: { not: { has: "jasse:dit_eau" } }, fx: { flag: "jasse:dit_eau", set: { nella_sait: "jasse" } }, to: "J2_tour_eau" },
      { label: "« Tiens bon. Demain soir, je te sors d'ici. »", to: "J2_tour_promesse" },
    ] },
  J2_tour_eau: { act: "II", title: "À l'eau", place: "tour",
    text: [
      "Tu lui dis. *Nella n'est pas à nous. Elle est à l'eau.* Tu lui dis que tu as cru à la fièvre, et que tu n'y crois plus.",
      "Elle se tait. Ses doigts serrent la grille.",
      "« Elle disait que j'avais les yeux de quelqu'un qui savait nager », dit-elle enfin. Elle te regarde. « Tu es mon frère quand même. Tu es mon frère plus que tout. Dis-le. »",
      "Tu le dis.",
    ],
    choices: [{ label: "Partir avant que le garde ne revienne", to: "J2_suite" }] },
  J2_tour_promesse: { act: "II", title: "Une promesse", place: "tour",
    fx: { flag: "jasse:promis" },
    text: [
      "« Demain soir, je te sors d'ici. »",
      "Elle sourit pour la première fois. Elle ne te croit pas, mais elle sourit. « Ne fais pas de bêtise, Jasse. Tu en fais toujours. »",
      "Le garde frappe sur la porte du bout de sa hallebarde. Fin de l'heure.",
    ],
    choices: [{ label: "Partir", to: "J2_suite" }] },

  // ---------------------------------------------------------------- the secretary
  J2_oriane: { act: "II", title: "Le quai des Saules", place: "saules", ambiance: "ville",
    text: [
      "La maison au saule est au bout du quai, derrière un mur couvert de lierre. Une servante en masque de colombe t'ouvre la porte du jardin, te regarde des pieds à la tête, et va chercher sa maîtresse.",
      "Oriane Valcor descend l'escalier sans masque. Trente-quatre ans, une robe noire, des cheveux châtains tirés en chignon, des yeux gris qui te détaillent comme une lettre à classer. Le même gris que celui de Nella. Tu le remarques, et tu ne sais pas pourquoi tu le remarques.",
      { if: { has: "oriane=pacte" }, text: "« Le frère de la servante. » Elle a seulement l'air fatiguée. « Asseyez-vous. Je n'ai que dix minutes. Le Grand Argentier m'attend à midi. »" },
      { if: { has: "oriane=seule" }, text: "« Le frère de la servante. » Elle te fait asseoir dans le jardin, sous le saule. « Je me présente au siège de ma tante, et je n'ai que huit voix. Tout ce qui touche à sa mort me touche. Parlez. »" },
      { if: { has: "oriane=enquete" }, text: "« Le frère de Nella Ferrant. » Elle te fait asseoir dans le jardin, sous le saule. « Le Conseil m'a confié une enquête sur la mort de ma tante, avec le Guet. Votre sœur dit qu'elle n'a rien fait. Je commence à la croire. Aidez-moi à le prouver. »" },
    ],
    choices: [
      { label: "Lui montrer la clef de bronze", if: KEY, why: "Tu ne l'as pas.", to: "J2_oriane_clef", big: true },
      { label: "Lui demander ce qu'elle sait de la mort de la Doyenne", to: "J2_oriane_parle" },
    ] },
  J2_oriane_clef: { act: "II", title: "La clef de bronze", place: "saules",
    text: [
      "Tu poses le ruban bleu sur la table de jardin et tu le déroules. La clef brille au soleil. Le billet est à côté : *Le jour de ma mort, porte-la au Conseil. E.*",
      "Oriane ne la touche pas. Elle lit le billet. Elle reconnaît l'écriture, ça se voit à sa bouche.",
      { if: { has: "oriane=pacte" }, text: "« Morvan dit au Conseil que cette clef a disparu avec une voleuse. » Elle relève les yeux vers toi. « Morvan me soutient pour le siège. Si je lui apporte cette clef, il n'aura plus rien à craindre du coffre. » Elle se tait. Elle te laisse comprendre ce qu'elle vient de te dire, et pourquoi elle te le dit." },
      { if: { not: { has: "oriane=pacte" } }, text: "« Avec celle-ci et la mienne, il n'en manque qu'une. » Elle effleure le ruban du bout des doigts. « Le coffre s'ouvrira avant les lanternes. Ce qu'il y a dedans dira peut-être qui a fait ça à ma tante. Et peut-être pourquoi elle a donné cette clef à votre sœur. »" },
    ],
    choices: [
      { label: "La lui confier", fx: { drop: "clef_bronze", set: { clef3: "oriane" }, regard: { oriane: "redevable" } }, to: "J2_oriane_confie", big: true },
      { label: "La garder, et la porter toi-même au Conseil demain soir", fx: { set: { jasse_plan: "conseil" }, regard: { oriane: "curieux" } }, to: "J2_oriane_garde" },
    ] },
  J2_oriane_confie: { act: "II", title: "Le ruban", place: "saules",
    text: [
      "Oriane prend le ruban. Elle l'enroule autour de la clef, soigneusement, et glisse le tout dans sa manche.",
      { if: { has: "oriane=pacte" }, text: "« Vous venez de me faire très riche, ou très seule, dit-elle. Je ne sais pas encore lequel. »" },
      { if: { not: { has: "oriane=pacte" } }, text: "« Elle ira au Conseil. Je vous le jure sur le nom de ma tante. » Puis, après un temps : « Et votre sœur aussi, si je peux. Libre. »" },
    ],
    choices: [{ label: "Partir", to: "J2_suite" }] },
  J2_oriane_garde: { act: "II", title: "Ta clef", place: "saules",
    text: [
      "Tu enroules le ruban et tu le remets sous ta chemise. Oriane ne proteste pas.",
      "« C'est votre droit. Elle l'a donnée à votre sœur, pas à moi. » Elle se lève. « Demain soir, la séance s'ouvre à dix heures. Le coffre est dans la Chambre des Sceaux, derrière la salle du Conseil. Un passeur de Bas-Port n'entre pas au Conseil. Un porteur de clef, si. Dites à l'huissier votre nom et ce que vous portez. »",
    ],
    choices: [{ label: "Partir", to: "J2_suite" }] },
  J2_oriane_parle: { act: "II", title: "Ce qu'elle sait", place: "saules",
    text: [
      { if: { has: "oriane=pacte" }, text: "Elle te dit ce que dit le Conseil : le poison, le sel, la servante qui le portait. Elle le dit d'une voix plate, comme on lit un procès-verbal. Puis elle ajoute, sans te regarder : « Le Grand Argentier tient beaucoup à ce que le coffre reste fermé. Je ne sais pas pourquoi. Si j'étais vous, je me le demanderais. »" },
      { if: { not: { has: "oriane=pacte" } }, text: "Elle te dit ce qu'elle sait : le carnet de sa tante, *N. — le ruban*. L'apothicaire de la Maison des Sels, que ta sœur a vu dans la cuisine. Le Grand Argentier, qui a menti au Conseil sur la clef de bronze." },
      "Elle te regarde. « Votre sœur. Depuis quand sert-elle au palais ? »",
      "« Depuis ses quinze ans. La Doyenne l'a fait venir. On ne sait pas pourquoi. »",
      "Oriane hoche la tête. Elle a l'air de ranger cette réponse dans un tiroir qui contient déjà quelque chose.",
    ],
    choices: [{ label: "Partir", to: "J2_suite" }] },

  // ---------------------------------------------------------------- the Temple
  J2_temple: { act: "II", title: "La coupole verte", place: "temple", ambiance: "temple",
    fx: { meet: "anselme" },
    text: [
      "Le Temple de la Marée est le seul endroit d'Escalombre où l'on entre sans masque le jour des masques. On te fait ôter ta chouette à la porte. Tu attends une heure sous la coupole verte, à regarder l'eau entrer par les bouches de bronze du pavement, comme chaque marée.",
      "Le père Anselme te reçoit dans une petite salle aux murs couverts de coquillages. Il est aimable. Il te demande ton nom, ta barque, ta mère. Il sait déjà tout.",
      { if: LIBRE, text: "« Ta sœur est en danger, mon fils. Le Temple a le droit d'asile. Une fois sous la coupole, nul ne la touche, pas même le Guet. Je peux la recevoir cette nuit. »" },
      { if: PRISON, text: "« Ta sœur est en danger, mon fils. Le Temple peut demander au Conseil qu'une accusée soit gardée sous la coupole jusqu'à son jugement, plutôt qu'à la Tour. Le Conseil ne refuse rien au Temple, la veille d'une élection. »" },
      { if: KEY, text: "Il se penche. « On dit que ta sœur avait une clef. Le Temple saurait la garder, cette clef. Mieux qu'une barque. »" },
    ],
    choices: [
      { label: "Accepter : la clef au Temple, et la protection du Temple pour Nella", if: KEY, why: "Tu n'as pas de clef à donner.", fx: { drop: "clef_bronze", set: { clef3: "anselme", nella: "temple" }, regard: { anselme: "cordial" } }, to: "J2_temple_oui", big: true },
      { label: "Accepter l'asile pour Nella, sans donner de clef", if: { not: KEY }, test: { dom: "social", diff: -15, label: "Social" },
        win: { fx: { set: { nella: "temple" } }, to: "J2_temple_asile" }, lose: { to: "J2_temple_non" } },
      { label: "Refuser poliment, et partir", to: "J2_temple_non" },
    ] },
  J2_temple_oui: { act: "II", title: "L'asile", place: "temple",
    text: [
      "Anselme prend le ruban bleu sans le regarder, comme on prend une offrande, et le passe à un acolyte.",
      { if: { has: "evasion=prevue" }, text: "Il te bénit. Puis il envoie deux prêtres à la Tour avec une lettre scellée. À cinq heures, une barque du Temple ramène Nella sous la coupole, entre deux prêtres en vert. La porte d'eau de la Tour ne servira à rien demain soir. Il faudra le dire à la Mère Gouge." },
      { if: { not: { has: "evasion=prevue" } }, text: "Il te bénit. Puis il envoie deux prêtres chercher ta sœur, avec une lettre scellée. À cinq heures, Nella est sous la coupole verte, dans une cellule de novice, avec une cruche d'eau et une fenêtre grillagée." },
      "Tu la vois de loin, à travers une grille. Elle te fait un signe. Elle est vivante, et personne ne la pendra au reflux. Elle n'est plus libre non plus.",
    ],
    choices: [{ label: "Partir", fx: { set: { evasion: null } }, to: "J2_suite" }] },
  J2_temple_asile: { act: "II", title: "Pour rien", place: "temple",
    text: [
      "Anselme sourit. « Le Temple ne fait pas commerce de sa pitié. » C'est presque vrai. Il envoie deux prêtres chercher ta sœur.",
      "À cinq heures, Nella est sous la coupole verte, dans une cellule de novice. Elle est vivante, et personne ne la pendra au reflux. Elle n'est plus libre non plus.",
    ],
    choices: [{ label: "Partir", to: "J2_suite" }] },
  J2_temple_non: { act: "II", title: "Le Temple", place: "temple",
    text: [
      "Le père Anselme te raccompagne lui-même jusqu'à la porte. « Le Temple reste ouvert, mon fils. Jusqu'à demain soir. »",
    ],
    choices: [{ label: "Partir", to: "J2_suite" }] },

  // ---------------------------------------------------------------- Morvan
  J2_morvan: { act: "II", title: "La Maison des Sels", place: "sels", ambiance: "ville",
    fx: { meet: "morvan" },
    text: [
      "On ne te fait pas attendre. C'est ce qui te fait peur. Un commis en masque de héron te mène jusqu'au cabinet du Grand Argentier, au dernier étage de l'entrepôt de marbre, au-dessus des montagnes de sel gris.",
      "Chez lui, Hugues Morvan va le visage nu. Il te fait asseoir. Il te sert lui-même un verre de vin, et ne boit pas le sien.",
      "« Le passeur Ferrant. Tu as quelque chose à me vendre, je crois. » Il sourit. « Je suis marchand. J'écoute. »",
    ],
    choices: [
      { label: "« La clef contre Nella. Libre, sans accusation, avant demain soir. »", to: "J2_morvan_marche", big: true },
      { label: "Te raviser, et partir sans rien dire de la clef", to: "J2_morvan_part" },
    ] },
  J2_morvan_marche: { act: "II", title: "Le marché", place: "sels",
    text: [
      "Morvan réfléchit, ou fait semblant. « Libre. C'est cher, libre. Le Conseil l'accuse. » Il fait tourner son verre. « Mais un Conseil change d'avis. Une accusée qu'on retrouve innocente au matin, ça s'est vu. » Il tend la main. « La clef. Demain soir, avant le reflux, ta sœur sort de la Tour par la grande porte. Tu as ma parole de marchand. »",
      "Sur son bureau, une plume, de l'encre, et un acte de grâce en blanc, avec le sceau de la Maison des Sels déjà posé. Il le remplit devant toi. Il le signe. Il te le tend.",
    ],
    choices: [
      { label: "Lui donner la clef contre l'acte signé", fx: { drop: "clef_bronze", set: { clef3: "morvan", marche_morvan: "fait" }, item: "acte_grace", regard: { morvan: "cordial" } }, to: "J2_morvan_fait", big: true },
      { label: "Reprendre la clef au dernier moment, et partir", fx: { regard: { morvan: "hostile" } }, to: "J2_morvan_refus" },
    ] },
  J2_morvan_fait: { act: "II", title: "Une parole de marchand", place: "sels",
    text: [
      "Morvan prend le ruban. Il le déroule, regarde la clef, lit le billet. Il se tait. Il le glisse dans un tiroir qu'il ferme à clef.",
      "« Bonne journée, passeur. »",
      "Tu redescends l'escalier, l'acte de grâce contre la poitrine, à la place de la clef. Il est bien écrit. Il a un sceau. Tu ne sais pas lire assez vite pour savoir s'il dit vraiment ce que Morvan a dit.",
    ],
    choices: [{ label: "Sortir de la Maison des Sels", to: "J2_suite" }] },
  J2_morvan_refus: { act: "II", title: "Non", place: "sels",
    text: [
      "Ta main se referme sur le ruban avant la sienne. Morvan reste immobile, la main toujours tendue.",
      "« Tu fais une erreur, passeur. Tu la paieras, ou ta sœur la paiera. » Il le dit sans colère. « Le commis va te raccompagner. »",
      "Le commis te raccompagne jusqu'au quai. En bas de l'escalier, deux hommes en manteau de la Maison des Sels se lèvent quand tu passes, et te suivent des yeux.",
    ],
    choices: [{ label: "Partir vite", fx: { flag: "jasse:suivi" }, to: "J2_suite" }] },
  J2_morvan_part: { act: "II", title: "Le vin", place: "sels",
    text: [
      "Tu poses ton verre sans y avoir touché. « Je me suis trompé de porte. »",
      "Morvan rit, franchement. « Tout le monde se trompe de porte, à Escalombre. Reviens quand tu auras trouvé la bonne. »",
    ],
    choices: [{ label: "Partir", to: "J2_suite" }] },

  // ---------------------------------------------------------------- the reeds
  J2_fente: { act: "II", title: "Les roseaux du nord", place: "ponton", ambiance: "eau",
    fx: { clue: "voiles" },
    text: [
      "Au nord de Bas-Port, après les marais salants, la lagune se perd dans les roseaux. Les contrebandiers y ont des chemins d'eau que les cartes ignorent. L'un d'eux, la Fente, passe sous les murs de la tour de la Chaîne et rejoint le large sans toucher la chaîne. Il faut une barque plate, une nuit sans lune, et de la chance.",
      "Tu la remontes dans la *Pimprenelle* jusqu'à voir la mer. Au large, les quarante voiles d'Orcanne. De près, on voit leurs sabords, tous ouverts. On ne salue pas une fête avec des sabords ouverts.",
      { if: { any: [{ has: "corentin=ami" }, { has: "corentin=repenti" }] }, text: "Corentin connaît la Fente mieux que personne. Il a dit qu'il viendrait, si tu le lui demandais." },
    ],
    choices: [
      { label: "Repérer le passage, et cacher des provisions dans une cabane de saunier", fx: { set: { fuite: "prete" } }, to: "J2_fente_ok" },
      { label: "Laisser tomber : on ne quitte pas sa ville comme un voleur", to: "J2_suite" },
    ] },
  J2_fente_ok: { act: "II", title: "Une cabane", place: "ponton",
    text: [
      "Tu caches dans une cabane de saunier une outre d'eau, du pain dur, deux couvertures, une rame de rechange. Tu marques le chemin avec des brins de roseau noués, que seuls les gens de Bas-Port savent lire.",
      "Demain soir, si tout tourne mal, Nella et toi pourrez partir par là. Vers où, tu ne sais pas. Ailleurs. Le monde est grand, dit-on, de l'autre côté des Passes.",
    ],
    choices: [{ label: "Revenir à Bas-Port", to: "J2_suite" }] },

  // ---------------------------------------------------------------- the masked ball
  J2_bal: { act: "II", title: "Le bal de la Maison des Sels", place: "sels", ambiance: "ville",
    fx: { until: 20 },
    text: [
      "Le bal masqué de la Maison des Sels se donne chaque année dans le grand entrepôt, entre les montagnes de sel gris qu'on a couvertes de draps blancs. Trois cents masques, des musiciens sur une estrade, des lanternes de papier accrochées aux poutres. On entre si l'on a un masque et un habit. Tu as un masque de chouette et l'habit de ton père, qui sent la naphtaline.",
      { if: { has: "clef3=corentin" }, text: "Tu cherches un renard. Il y en a onze. Un seul a des mains de batelier, une barbe rousse qui dépasse, et la façon de se tenir de quelqu'un qui attend qu'on le paie." },
      { if: { not: { has: "clef3=corentin" } }, text: "Tu ne sais pas très bien ce que tu cherches. Tu écoutes. Dans un bal masqué, les gens parlent comme s'ils étaient seuls." },
      { if: { has: "oriane=pacte" }, text: "Au fond de la salle, une femme en robe noire et loup de velours parle avec le Grand Argentier. Tu reconnais le chignon. Oriane Valcor." },
    ],
    choices: [
      { label: "Suivre le renard roux", if: { has: "clef3=corentin" }, to: "J2_bal_renard" },
      { label: "Te glisser derrière la tenture, près de l'estrade, où le maître de maison reçoit", to: "J2_bal_tenture" },
    ] },
  J2_bal_renard: { act: "II", title: "Le renard", place: "sels",
    text: [
      "Le renard traverse la salle, monte un escalier de bois, frappe à une porte. Un commis en masque de héron lui ouvre. Tu montes derrière lui, à pas de chat.",
      "Par la porte entrouverte, tu vois Corentin poser le ruban bleu sur un bureau. Le commis pose à côté une bourse. Corentin ne prend pas la bourse tout de suite. Il regarde la clef.",
    ],
    choices: [
      { label: "Entrer et prendre la clef sur le bureau, vite", test: { dom: "discretion", diff: 0, label: "Vitesse" },
        win: { fx: { item: "clef_bronze", set: { clef3: "jasse" }, ep: 300 }, to: "J2_bal_pris" }, lose: { to: "J2_bal_combat" } },
      { label: "Appeler Corentin par son nom, doucement, depuis la porte", to: "J2_bal_appel" },
    ] },
  J2_bal_pris: { act: "II", title: "Le ruban", place: "sels",
    text: [
      "Tu entres, tu prends le ruban, tu ressors. Le commis crie. Corentin se tait. Il te regarde passer, il te reconnaît sous la chouette, et il ne bouge pas.",
      "Tu dévales l'escalier, tu traverses la salle de bal entre les danseurs, tu sors par la porte des quais. Personne ne court après une chouette dans un bal masqué. Il y en a trente.",
      "Dehors, tu t'arrêtes pour respirer. Tu as la clef. Tu as aussi, dans la tête, le visage de Corentin qui ne bougeait pas.",
    ],
    choices: [{ label: "Repartir vers Bas-Port", fx: { set: { corentin: "honte" } }, to: "J2_suite" }] },
  J2_bal_combat: { act: "II", title: "Le bureau", place: "sels",
    combat: { title: "Le bureau du commis", enemies: [{ id: "corentin" }], terrain: "bati",
      win: { fx: { item: "clef_bronze", set: { clef3: "jasse", corentin: "battu" } }, to: "J2_bal_victoire" },
      lose: { fx: { set: { clef3: "morvan", corentin: "traitre", jasse_blesse: "bal" } }, to: "J2_bal_defaite" },
      flee: { label: "Sauter par la fenêtre dans le canal", dom: "nature", diff: 0, fx: { set: { clef3: "morvan", corentin: "traitre" } }, to: "J2_bal_defaite" } },
    text: [
      "Le commis crie. Corentin se retourne, voit la chouette, voit ta main sur le ruban, et il te saute dessus comme sur les quais, quand vous aviez douze ans et que vous vous battiez pour une pomme.",
    ] },
  J2_bal_victoire: { act: "II", title: "Corentin", place: "sels",
    text: [
      "Corentin est par terre, le nez en sang. Le commis s'est enfui en criant au voleur. Tu as le ruban dans ton poing.",
      "Corentin te regarde d'en bas. « Cinq cents ducats, Jasse. Pour une clef. Tu sais ce que c'est, cinq cents ducats ? » Il rit, et le rire lui fait mal. « Va-t'en. Ils arrivent. »",
    ],
    choices: [{ label: "T'en aller", to: "J2_suite" }] },
  J2_bal_defaite: { act: "II", title: "Le canal", place: "sels",
    text: [
      "Corentin te frappe avec un presse-papier de marbre. Tu tombes contre la fenêtre, tu passes au travers, et le canal t'accueille, noir et froid, deux étages plus bas.",
      "Quand tu remontes à la surface, la fenêtre est fermée. Là-haut, quelque part, un commis compte cinq cents ducats dans la main de ton ami d'enfance, et range une clef de bronze dans un tiroir.",
    ],
    choices: [{ label: "Nager jusqu'à Bas-Port", to: "J2_suite" }] },
  J2_bal_appel: { act: "II", title: "Cor", place: "sels",
    text: [
      "« Cor. »",
      "Corentin se retourne. Il voit la chouette, il voit tes yeux dedans. Le commis ne comprend pas.",
      "Vous restez comme ça, tous les deux. Puis Corentin reprend le ruban sur le bureau, sans un mot, et le fourre dans sa poche. « Je me suis trompé, dit-il au commis. Ce n'est pas la bonne. » Il passe devant toi. Dans l'escalier, il te glisse le ruban dans la main.",
      "« Je n'aurais pas pu, de toute façon, dit-il sans te regarder. J'ai essayé toute la journée. Je n'aurais pas pu. »",
    ],
    choices: [{ label: "Sortir avec lui", fx: { item: "clef_bronze", set: { clef3: "jasse", corentin: "repenti" }, regard: { corentin: "redevable" } }, to: "J2_suite" }] },
  J2_bal_tenture: { act: "II", title: "Derrière la tenture", place: "sels",
    text: [
      "Derrière la tenture de l'estrade, il y a un réduit plein de chaises empilées, et une odeur de poussière. De l'autre côté, Hugues Morvan parle avec un homme qui a l'accent d'Orcanne, un accent qui roule les r comme des galets.",
      "« L'amiral s'impatiente. » « L'amiral attendra demain minuit, comme convenu. Dès que je serai élu, la chaîne descend. Quarante voiles entrent saluer le nouveau Doyen. Après, nous parlerons des péages. » « Et si vous n'êtes pas élu ? » Un silence. Puis Morvan : « Alors la chaîne descendra quand même. Il suffit d'un ordre scellé du Doyen élu. Celle que j'aurai fait élire signera. »",
      "L'homme d'Orcanne rit. « Les femmes signent ce qu'on leur dit, chez vous ? » « Celle-là signera. Elle a un mari qui me doit trois mille ducats. »",
    ],
    choices: [{ label: "Repartir sans bruit", fx: { flag: "jasse:sait_chaine", clue: ["voiles", "chaine_ordre"] }, to: "J2_suite" }] },

  // ---------------------------------------------------------------- the evening
  J2_soir: { act: "II", title: "La nuit tombe", place: "basport", ambiance: "eau",
    fx: { until: 21 },
    text: [
      "Les masques tombent sur la lagune. Bas-Port retrouve ses visages, rouges de vin et de soleil.",
      { if: { has: "nella=temple" }, text: "Nella dort sous la coupole verte, gardée par des prêtres. Tu ne sais pas si tu l'as sauvée ou si tu l'as vendue." },
      { if: { all: [LIBRE, { has: "cache=gouge" }] }, text: "Nella dort chez la Mère Gouge, dans la soupente, au-dessus des tonneaux. Tu montes lui dire bonsoir. Elle te demande ce que tu as fait de ta journée. Tu lui racontes." },
      { if: { all: [LIBRE, { is: { cache: null } }] }, text: "Nella dort au fond de ta barque, sous la bâche, comme hier. Tu restes éveillé, la gaffe en travers des genoux." },
      { if: PRISON, text: "Nella dort à la Tour du Guet. Demain soir, les lanternes." },
      { if: KEY, text: "Tu dors la main sur ta poitrine, sur le ruban." },
      { if: { has: "jasse:sait_chaine" }, text: "Tu ne dors pas. Tu penses à quarante voiles et à une chaîne qui descend à minuit." },
    ],
    choices: [FIN] },
};
