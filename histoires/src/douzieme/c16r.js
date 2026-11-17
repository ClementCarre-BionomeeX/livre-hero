// Le Douzième Coup · chapter 16, the one who stays (act V, the walk inside the eleventh stroke).
// Three districts, reached from the hubs of c16.js. Lower town (`K16_bas`) : the herring-seller (`r:hareng_paye`), the
// yellow gable, the barrel at the top of its fall (`r:debardeur_sauve`), the arch (`monde:brindille_remede`), the
// Tannerie (`r:compte_tannerie`), the mercer who will be the Comptoir (`r:ruban_achete`), the wedding (`r:noce_ruban`),
// the loft (`r:vu_soupente`). The square (`K16_place`) : the baker (`r:pain_donne`), behind the twelfth door, the rue
// aux Oies (`monde:josse_nomme` | `r:josse_tu`), the rue de la Poulie (`r:hurel_dit`), the place of the strapped chair
// (`r:vu_chaise`), the old church, the glass-carters of Roquebise (`r:vu_verriers`). The hill (`K16_colline`) : the
// copper men and the running messenger, the reader of the dean (`r:lecteur`), the thirteenth face (`r:sait_nommer`),
// the rose (`r:rose_rendue` | `r:rose_laissee`), the sundial.
var P = {};
var GRAIN = { stock: "sable", min: 1 };
var SORTIS = { has: "monde:noyers_sortis" };
var ATTELE = { has: "monde:girard_attele" };
var PIECE = { has: "monde:florizel_piece" };
var P_SORTIE = { has: "monde:perrine_sortie" };
var P_DEBOUT = { all: [{ has: "monde:perrine_debout" }, { not: { has: "monde:perrine_sortie" } }] };
var P_PRISE = { not: { any: [{ has: "monde:perrine_sortie" }, { has: "monde:perrine_debout" }] } };
var B_SORTIE = { has: "monde:brindille_sortie" };
var AVERTIE = { has: "monde:perrine_avertie" };
var H_DEBOUT = { has: "monde:hurel_debout" };
var H_LETTRE = { all: [{ has: "monde:hurel_lettre" }, { not: { has: "monde:hurel_debout" } }] };
var H_RIEN = { not: { any: [{ has: "monde:hurel_lettre" }, { has: "monde:hurel_debout" }] } };
var JOSSE_BORNE = { all: [{ not: SORTIS }, ATTELE] };
var JOSSE_COURT = { all: [{ not: SORTIS }, { not: ATTELE }] };

Object.assign(P, {
  // ===== the lower town
  K16r_hareng: { act: "V", title: "Trois liards, d'avance", place: "basse", ambiance: "eau",
    text: [
      "Elle est sur sa borne d'amarrage, son baril entre les genoux, un hareng dans chaque main, levés comme des preuves. Elle crie. Tu passes devant sa bouche, par habitude, pour lui faire dire son prix : *...liards la douzaine !* Elle le dit. Dans cette note-ci comme dans l'autre, on la fait crier en marchant.",
      "Tu la reconnais mieux que ta tante. L'alliance de cuivre, le tablier propre, la dent de moins sur le devant.",
      { if: { has: "r:hareng" }, text: "Chez toi, tu as plongé la main dans son baril ; tu as mangé la moitié d'un hareng de soixante ans, debout devant elle, et tu as posé trois liards sur le bord." },
      { if: { has: "r:hareng" }, text: "Tu regardes le bord du baril. Il est nu. Tes trois liards y viendront dans soixante ans. Tu les as posés, et ils sont encore à venir. Tu restes un moment sur cette idée, qui est de celles où l'on se tord la cheville." },
      { if: { has: "r:hareng" }, text: "Le baril est plein jusqu'au cercle. Il y a dedans, quelque part, le hareng que tu mangeras." },
      { if: { not: { has: "r:hareng" } }, text: "Chez toi, tu es passé{e} devant ce baril les mains dans le dos : la Courtepaille dit que manger chez les pris porte malheur. Il sentait pourtant le hareng du matin, à soixante ans de son sel." },
      { if: { not: { has: "r:hareng" } }, text: "Il est plein jusqu'au cercle. La saumure a un œil de graisse, rond, où tient tout le quai. Tu as faim. Tu as toujours faim, mais d'ordinaire tu sais ce que tu vas en faire." },
    ],
    choices: [
      { label: "Poser trois liards sur le bord, dès aujourd'hui", hide: { has: "r:hareng_paye" }, fx: { flag: "r:hareng_paye", ep: ["perso", 300] }, to: "K16r_hareng_paye" },
      { back: "K16_bas" },
    ] },

  K16r_hareng_paye: { act: "V", title: "L'effigie d'un homme qu'elle ignore", place: "basse", ambiance: "eau",
    text: [
      "Tu fouilles ta ceinture. Il te reste de la monnaie de chez toi : des liards au sablier, frappés à la tête d'un Régent. Tu en poses trois sur le cercle du baril, en pile, bien d'aplomb.",
      { if: { has: "r:hareng" }, text: "Cela fait six, à présent, dans ta tête : trois de l'autre jour, trois d'aujourd'hui, pour un seul hareng. Tu as perdu le fil de ceux qui sont les vrais. Tu décides qu'elle les aura tous, et que le hareng les valait." },
      { if: { not: { has: "r:hareng" } }, text: "Puis tu prends un hareng, un seul, par la queue. Tu le manges debout devant elle, jusqu'à l'arête. Il est gras, raide de sel, et il est du matin." },
      "C'est la première fois que tu paies quelque chose dans cette ville avant de l'avoir pris. Tu attends de te sentir volé{e}. Il vient autre chose, de plus léger, qui ressemble à l'aise qu'on a dans des sabots à sa pointure.",
      "Elle baissera les yeux, quand l'heure repartira. Elle verra trois pièces à la tête d'un inconnu. Elle les mordra. Elles sont bonnes.",
    ],
    choices: [{ back: "K16_bas" }] },

  K16r_pignon: { act: "V", title: "Le crépi nu", place: "basse", ambiance: "eau",
    text: [
      "Le pignon de l'auberge, à gauche de la porte, à hauteur d'épaule. Le crépi jaune, où les mariniers s'adossent pour fumer : il y a la marque grasse de leurs vestes, et rien d'autre.",
      { if: P_DEBOUT, text: "Ce matin, chez toi, ce mur était écrit. Deux cent trente et un traits, par cinq, à la pointe d'un couteau d'étal. Tu poses la main où commençait la première ligne. Le crépi est lisse. Elle n'a pas commencé." },
      { if: P_DEBOUT, text: "Elle est là. Elle est contre ce mur, à ta gauche, debout, les bras croisés, un drap rouge sur les oreilles. Tu ne l'avais jamais vue. Tu la connaissais par une entaille : *celui-ci, c'est moi, je sors la dernière.* Elle est plus petite que tu ne croyais. Elle a du soleil sur le nez. Elle a des yeux qui ont compris, et une bouche qui a déjà décidé." },
      { if: P_DEBOUT, text: "Tu la regardes longtemps. C'est donc elle. {autre} ne t'en avait écrit que deux fois, de biais, comme on parle d'une dent qui fait mal. Tu t'aperçois que tu lui en as voulu, à cette fille, sans la connaître, pendant neuf jours : elle marchait à côté de {autre}, et toi derrière, à soixante ans. Devant le mur, cela s'en va. On n'en veut pas à quelqu'un qui va sortir deux cent trente personnes par un bief, et rester." },
      { if: P_SORTIE, text: "Chez toi, ce mur est resté nu. Tu t'y es adossé{e} plus d'une fois. La fille aux almanachs est sortie à temps, par le halage, et personne n'a compté personne sur ce crépi. Elle est vivante, quelque part de l'autre côté de l'arbre grêle. Tu te demandes si les sourds du bas quartier, sans elle, ont trouvé le bief tout seuls." },
      { if: P_PRISE, text: "Chez toi, ce mur est resté nu. Personne n'y a rien compté. La fille aux almanachs est là-haut, au bord de la place, deux doigts en l'air ; tu es passé{e} devant sa hotte, et tu as regardé le prix. Tu regardes le crépi. Il y avait de la place, sur ce mur, pour un compte que personne n'a fait." },
      "Tu ôtes ta main. Elle a laissé sur le jaune cinq doigts de charbon.",
    ],
    choices: [{ back: "K16_bas" }] },

  K16r_tonneau: { act: "V", title: "Le haut de la chute", place: "basse", ambiance: "eau",
    text: [
      "La grande grue, sa roue, son bras. Chez toi, il y a là un carré de corde et un écriteau : *Défense de passer. Péril.* Ici, le pavé est libre.",
      "Tu lèves la tête. La barrique est tout en haut, contre la poulie, grosse comme un veau. Elle vient de quitter son élingue : le chanvre a rompu il y a un instant, et les brins ne se sont pas encore écartés. Elle est encore à toute sa hauteur. Chez toi, elle a fait le tiers du chemin : il y a soixante ans de glaneurs dans ce tiers-là, un pied par imbécile.",
      "Dans la roue, l'homme a commencé de tourner la tête. Sur le quai, juste dessous, un débardeur roule un tonnelet. Il regarde son tonnelet. Il lèvera les bras dans le temps d'un soupir, en ouvrant la bouche, et c'est ainsi que tu l'as connu, soixante ans, les bras en l'air, sous une chose qui venait.",
      "Tu mesures. Si tu entres sous la barrique, elle tombera le temps que tu y seras. Tu connais la règle : ce qui est pris reste où il est tant que personne n'approche. Il faudrait approcher l'homme sans approcher la barrique. Il est à une longueur de bras du bord de cette ombre.",
    ],
    choices: [
      { label: "Allonger le bras, de loin, et lui poser un grain sur la nuque", hide: { seen: "K16r_tonneau_eveil" }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "r:debardeur_sauve", ep: ["histoire", 600] }, to: "K16r_tonneau_eveil" },
      { back: "K16_bas" },
    ] },

  K16r_tonneau_eveil: { act: "V", title: "Trois pas", place: "basse", ambiance: "eau",
    text: [
      "Tu te mets à plat ventre, hors de l'ombre. Tu tends le bras. Tu tiens le grain au bout de ton couteau, sur le plat de la lame, comme on tend une miette à un oiseau. Il touche la nuque, entre le col et les cheveux.",
      "L'homme achève sa poussée. Le tonnelet roule d'un tour. Tu cries. Tu cries ce qu'on crie sur tous les quais du monde, et qui n'a pas changé en soixante ans : « GARE DESSOUS ! »",
      "Il a obéi avant de comprendre. C'est sa chance : il a vingt ans de port dans les jambes. Il a lâché le tonnelet, il a sauté de côté sans lever la tête, trois pas, quatre, les épaules rentrées. Alors seulement il regarde en l'air. Il voit la barrique, contre la poulie, le chanvre rompu. Il voit qu'elle reste où elle est.",
      "« Nom d'un chien. » Il te voit, par terre, ton couteau à la main. « C'est toi qui as gueulé ? » Tu dis oui. « Elle tient à quoi ? — À rien. Elle tombera tout à l'heure. Restez où vous êtes. » Il regarde l'endroit qu'il vient de quitter. Il se signe, d'une grosse main.",
      "« Je te dois un pot. » Il le dit comme on signe un billet. Le gris lui prend les bottes. Il veut te demander ton nom ; il a la bouche ouverte sur la question, et il est à quatre pas de l'ombre.",
      "Tu te relèves. Chez toi, il y a un carré de corde, un écriteau, et sous la barrique un homme les bras en l'air. Il n'y sera plus. Tu ignores ce que cela fait à un écriteau. Tu sais ce que cela fait à un homme.",
    ],
    choices: [{ back: "K16_bas" }] },

  K16r_arche: { act: "V", title: "Sous l'arche, en couleurs", place: "basse", ambiance: "eau",
    text: [
      "Tu descends par les crampons : tes mains savent où ils sont. Sous l'arche, l'ombre est bleue. Tu la connaissais grise.",
      { if: B_SORTIE, text: "Les paillasses sont roulées, les écuelles rangées par taille. Personne. Chez toi, il y avait deux enfants sous cette voûte ; puis ton Cahier a pris une ligne à une borne, et il n'y en a plus eu. Trente gueux sont sortis par le bief, une petite sur un dos. Tu regardes la meilleure paillasse, roulée, ficelée. Tu ne lui as jamais rien donné, à cette petite-là, et tu te souviens pourtant de lui avoir tenu le poignet." },
      { if: { not: B_SORTIE }, text: "Ils sont là, tous les deux. La petite sous sa couverture de cheval, les mains sur la laine. Le gamin maigre, assis par terre, qui lui tient le poignet. Tu les as vus gris et poudrés. Ils ont des couleurs : lui, des taches de son et une croûte au genou ; elle, des cheveux roux, que la poussière t'avait cachés." },
      { if: { all: [{ not: B_SORTIE }, { has: "r:promesse_brindille" }] }, text: "Il t'a fait jurer, ce gamin. *Tu la fais boire d'abord, et après ils sonnent ce qu'ils veulent.* Il te le fera jurer dans soixante ans, la lame au poing. Il ne te connaît pas encore." },
      { if: { all: [{ not: B_SORTIE }, { has: "r:brindille_soignee" }] }, text: "Tu lui as donné sa demi-dose ce matin, chez toi, dans cette ombre. Elle a fait la grimace sans se réveiller. C'était ce matin, et c'est dans soixante ans : elle a aujourd'hui les lèvres grises d'une enfant qui n'a rien bu. Les deux sont vrais. Tu commences à t'y faire." },
      { if: { all: [{ not: B_SORTIE }, { has: "monde:brindille_ecorce" }] }, text: "Elle a les lèvres roses. Quelqu'un lui a fait boire de l'écorce cette nuit : il y a une tasse ébréchée près de sa tête. C'est {autre}. Tu connais sa façon : faire porter une chose, et ne pas rester pour le merci." },
    ],
    choices: [
      { label: "Lui donner une prise de la fiole, pour un grain", hide: { any: [B_SORTIE, { not: { item: "decoction_fievrier" } }, { has: "monde:brindille_remede" }] }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "monde:brindille_remede", ep: ["histoire", 800] }, to: "K16r_arche_dose" },
      { back: "K16_bas" },
    ] },

  K16r_arche_dose: { act: "V", title: "D'abord", place: "basse", ambiance: "eau",
    text: [
      "Tu t'agenouilles. Tu poses le grain sur la petite main, et tu débouches la fiole de grès.",
      "Elle ouvre les yeux. Elle a quatre ans, et elle a dormi un mois : elle ne sait plus très bien ce que c'est que d'ouvrir les yeux. Elle regarde la voûte. Elle te regarde. Elle garde ses larmes : il faut de la force pour pleurer.",
      "« T'es qui ? » Elle a une voix de rien. Tu dis : quelqu'un du pont. C'est presque vrai : tu as dormi sous assez de ponts. Tu lui soulèves la tête. « Bois. C'est mauvais. Tu bois quand même. » Elle boit. Elle fait une grimace qui lui prend toute la figure, et elle avale : les enfants de dessous les ponts avalent ce qu'on leur donne.",
      "Tu regardes le gamin, à côté, aveugle, les yeux sur la place où était le poignet. Tu lui as juré *d'abord.* C'est fait, d'abord. Il l'ignorera : il dort assis, à un pied de ce qu'il voulait.",
      { if: { has: "monde:aelis_remede" }, text: "Il en restait dix-huit dans le poing d'une princesse. Tu en avais gardé une demi-mesure, au fond, que le médecin avait comptée à part, pour *l'enfant du pont.* Tu ne savais pas qu'il t'avait écouté{e} jusque-là." },
      { if: { not: { has: "monde:aelis_remede" } }, text: "Tu regardes ce qui reste dans le grès. Il y en avait dix-neuf, pour une enfant de reine, et le médecin avait dit : une demi-dose pour celle du pont, elle est plus petite. Tu en as versé une. Il en reste dix-huit, et tu ne sais plus très bien à qui." },
      "« C'est tout ? demande-t-elle. — C'est tout pour aujourd'hui. » Elle referme les yeux, vexée d'avoir été dérangée pour si peu. Le gris ne lui reprend que les doigts. Il te semble que ses lèvres en ont gardé moins qu'avant.",
    ],
    choices: [{ back: "K16r_arche" }] },

  K16r_tannerie: { act: "V", title: "Quatre fois dix-neuf", place: "basse", ambiance: "ville",
    text: [
      "Le bras de rivière, ses trois bandes de couleur, les peaux aux galeries. Tu avais vu tout cela brun. Il y a un rouge, un bleu d'encre, et un jaune vif, presque gai, qui vient de l'écorce : {autre} te l'a dit, ou un médecin. On teint des bas avec le remède.",
      "Les quatre seuils. Les quatre fichus noirs.",
      { if: { has: "monde:tannerie_partage" }, text: "Elles sont autour de la table, toutes les quatre, les coudes sur le bois, devant quatre bols. Tu les as vues chez toi dans cette pose, grises, et tu avais compris l'arithmétique. Aujourd'hui tu vois leurs figures. Il y en a une très jeune. Il y en a une qui sourit à moitié : elle venait de dire quelque chose aux autres, pour les faire tenir." },
      { if: { all: [{ has: "monde:ecorce_donnee" }, { not: { has: "monde:tannerie_partage" } }] }, text: "Trois femmes assises, les mains vides, qui regardent la quatrième porte. Par la fenêtre, une mère penchée, un bol, une enfant qui boit. Tu les as vues grises. Aujourd'hui tu vois ce qu'il y a sur la figure des trois : une fatigue trop grande pour que la haine y trouve sa place." },
      { if: { not: { has: "monde:ecorce_donnee" } }, text: "Sur chacun, une femme assise, les mains vides, qui regarde par-dessus son épaule dans sa maison. Tu les as vues grises. Aujourd'hui tu vois qu'elles ont pleuré ce matin, toutes, à la même heure : on a les yeux rouges de la même façon sur les quatre seuils." },
      "Tu fais le compte. Tu sais compter depuis neuf jours : on apprend vite, avec un sablier au cou. Il y a quatre petites dans ces quatre maisons. Il faut dix-neuf prises à chacune. Quatre fois dix-neuf.",
      { if: { item: "decoction_fievrier" }, text: "Tu as une fiole. Tu la soupèses. Elle fait une fois dix-neuf, tout juste. Elle a un nom dessus, que le médecin y a mis de sa main : celui d'une cinquième enfant." },
      "Chez toi, l'arbre pousse derrière la troisième maison de ta rue. On en remplit un sac en un matin. Si ces quatre portes se rouvraient là-bas, dans soixante ans, il y aurait une apothicaire à dix lieues, et tu saurais le chemin.",
      "Si elles se rouvrent ici, aujourd'hui, il y a un an de mer.",
      "Tu remontes la rue avec ce compte-là. C'est le premier, de tous ceux que tu as faits, où le résultat dépend de toi.",
    ],
    choices: [{ label: "Garder le compte", fx: { flag: "r:compte_tannerie", ep: ["histoire", 600] }, back: "K16_bas" }] },

  K16r_comptoir: { act: "V", title: "Avant la balance", place: "basse", ambiance: "ville",
    text: [
      "Tu la reconnais aux volets, qui sont verts. Chez toi, on les a peints en noir. Il y a une enseigne : une aune et une bobine. *Mauger, mercier.* Tu ne savais pas qu'il avait un nom.",
      "C'est la boutique. Tu y es entré{e} dix fois, la tête basse, ton sachet à la main, pour le faire peser. Il y avait une balance à plateaux de corne sous une cage de verre, un commis chauve, et l'odeur des endroits où l'on vous vole avec un poinçon. Il y a un comptoir de chêne, des tiroirs à boutons de cuivre, des rubans de toutes les couleurs qui pendent d'une tringle, et cela sent le drap neuf.",
      "Le mercier est dans son coin, où tu l'as toujours vu. Chez toi, on a mis un paravent devant lui. C'est un petit homme à lunettes, une aune de bois dans une main, un ruban dans l'autre, qu'il mesurait contre son bras : il est resté à sa boutique : un jour de fête, on vend des rubans.",
      "Tu regardes le ruban. Il est bleu, d'un bleu de ciel, large de deux doigts. Dans cette boutique, tu as toujours vendu.",
    ],
    choices: [
      { label: "Poser un grain sur sa main, et lui demander le prix du ruban", hide: { seen: "K16r_mercier" }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 } }, to: "K16r_mercier" },
      { back: "K16_bas" },
    ] },

  K16r_mercier: { act: "V", title: "Maître Mauger fait crédit", place: "basse", ambiance: "ville",
    text: [
      "« ...une aune et un quart. » Il achève de mesurer. Il lève le nez, te voit dans sa boutique, et son œil fait le tour de toi, des sabots à la tête, avec la vitesse des marchands. « C'est pour quoi ? »",
      "Tu montres le ruban. « Le bleu ? Deux sous l'aune. C'est du Hautgué, il ne déteint pas. » Il a déjà pris ses ciseaux. « Combien d'aunes ? »",
      "Tu dis : une. Tu cherches dans ta ceinture. Tu poses deux liards au sablier sur son chêne. Il les prend, il les approche de ses lunettes, il les retourne.",
      "« Qu'est-ce que c'est que cette tête-là ? » Il est outré. « *Oderic, Régent.* Il n'y a pas de régent. Il y a une Reine, Dieu la garde, et son beau-frère, qui chasse. C'est de la fausse monnaie, et mal imitée encore : le faussaire a inventé le prince. » Il te les repousse du bout de l'aune. « Je ne te dénonce pas, parce que tu as une bonne figure et de mauvais sabots. Mais je ne prends pas cela. »",
      "C'est tout ce que tu as. Tu le lui dis. Tu attends qu'il te mette dehors : c'est ce qu'on fait, dans cette boutique.",
      "Il te regarde encore. Il coupe le ruban, une aune juste, d'un coup de ciseaux, et il le roule sur deux doigts. « Tiens. Tu me paieras à la Saint-Jean. J'ai fait crédit à pire. » Il te le met dans la main. « C'est pour une fille ? — C'est pour ma sœur. Elle a cinq ans. — Alors noue-le serré. À cet âge, elles les perdent. »",
      "Le gris lui prend l'aune. Tu sors avec ton ruban. Tu as une dette, dans cette boutique, pour la première fois. C'est la seule que tu aies envie de payer.",
    ],
    choices: [{ label: "Rouler le ruban dans ta chemise", fx: { item: "ruban_bleu", flag: "r:ruban_achete", ep: ["perso", 500] }, back: "K16_bas" }] },

  K16r_noce: { act: "V", title: "Le blé, avant qu'il tombe", place: "basse", ambiance: "temple",
    text: [
      "La chapelle a sept marches, et la noce les occupe toutes. Le marié en haut, rouge, le chapeau de travers. La mariée, dix-huit ans, sa couronne de fleurs d'oranger, la tête renversée, qui rit.",
      "Le blé est en l'air. Chez toi, quand tu es monté{e} de deux marches, il en est tombé une petite pluie sur ton épaule. Ici, tu restes en bas. La poignée s'ouvre au-dessus d'eux, entière, grain à grain, et il y a du soleil dans chacun. Tu la laisses comme elle est : c'est leur blé.",
      "Le père est là, en habit puce, la main au gousset. Il en tire une bague. Tu regardes la bague. Tu la regardes de l'œil dont tu regardes ces choses depuis l'âge de dix ans : de l'or, une pierre, pas de poinçon de la Maîtrise, cela se vend en une heure.",
      { if: { has: "r:rouget_bague" }, text: "Chez toi, il y a eu à cette place, le temps de trois pas, un bouton de cuivre. Puis Rouget est remonté, furieux, et la bague y était de nouveau. Il a dit que c'était le blé." },
      { if: { has: "r:rouget_retenu" }, text: "Chez toi, Rouget a noué un bout de ruban rouge au poignet de cette mariée-là, par-dessus le gant. *Comme ça elle aura eu un cadeau de quelqu'un d'après.* Son poignet est nu : Rouget viendra dans soixante ans." },
      "Tu mets tes mains dans ton dos. Tu t'aperçois qu'elles y sont allées toutes seules.",
    ],
    choices: [
      { label: "Nouer ton ruban bleu au poignet de la mariée", hide: { any: [{ not: { item: "ruban_bleu" } }, { has: "r:noce_ruban" }] }, fx: { drop: "ruban_bleu", flag: "r:noce_ruban", ep: ["perso", 400] }, to: "K16r_noce_ruban" },
      { back: "K16_bas" },
    ] },

  K16r_noce_ruban: { act: "V", title: "De quelqu'un d'après", place: "basse", ambiance: "temple",
    text: [
      "Tu montes par le bord des marches, sous le blé, sans le toucher. Tu lui prends le poignet, qui est tiède, ganté de fil. Tu y noues le ruban du mercier, serré, deux fois, comme il t'a dit.",
      "Il était pour ta sœur. Ta sœur a cinq ans, elle dort depuis six ans dans une cuisine de Roquebise, et elle est née dans un temps où cette mariée aura soixante-sept ans, si elle les a. Tu ne sais plus très bien à qui l'on doit donner quoi. Tu donnes à celle qui est là.",
      "Elle rit toujours, la tête en arrière. Elle trouvera cela en baissant le bras. Elle croira à une farce du garçon d'honneur. Elle le gardera peut-être : c'est du Hautgué, il ne déteint pas.",
      "Tu redescends. Tu dois toujours deux sous à un mercier.",
    ],
    choices: [{ back: "K16_bas" }] },

  K16r_soupente: { act: "V", title: "Le même lit, encore chaud", place: "basse", ambiance: "ville",
    text: [
      { if: AVERTIE, text: "L'auberge est fermée pour lessive. Tu passes par la cour, par la cuisine, dont le loquet cède : tu l'as déjà fait céder. La clef est sur le comptoir, le papier dessous. *Pour le rat de cave.* L'encre est noire. Chez toi, elle était rousse." },
      { if: { not: AVERTIE }, text: "La salle est pleine, les trente mariniers devant leur poisson, la grosse femme à son comptoir, qui tourne le dos à la fenêtre. Tu passes entre les bancs. Tu lui as parlé, à cette femme, le temps d'un Pater. Elle t'a dit : *montez, c'est par l'échelle, derrière le four.*" },
      "Tu montes. Des glènes de chanvre jusqu'aux chevrons, une paillasse sur un rouleau de grelin, une lucarne que la Tour remplit d'un bord à l'autre.",
      "Tu as dormi ici. Deux nuits. Dans le creux de quelqu'un de ta taille, qui dormait sur le côté gauche, la main sous la joue. Tu poses la main dans le creux.",
      "Il est tiède.",
      "Tu la retires, comme d'un poêle. Puis tu la remets. {autre} s'est levé{autre:e} de là ce matin. La paillasse n'a pas eu le temps de refroidir : il s'est passé, depuis, une matinée, et onze coups de cloche. Sur la solive, les trois gouttes de suif sont blanches, molles sous l'ongle. Il y a une miette de pain sur le grelin.",
      "Pendant neuf jours, tu as marché derrière quelqu'un. Tu trouvais ses traces froides : un feu éteint depuis soixante ans, une entaille grise dans une poutre, un nom sur un registre. Tu t'y étais fait{e}. Tu pensais à {autre} comme on pense aux gens des complaintes. Tu as la main dans un lit chaud. Cela change la personne.",
    ],
    choices: [{ label: "Garder cette chaleur dans la main", fx: { flag: "r:vu_soupente", ep: ["perso", 500] }, back: "K16_bas" }] },

  // ===== the square and its streets
  K16r_boulanger: { act: "V", title: "La moustache rousse", place: "tour", ambiance: "ville",
    text: [
      "Tu les retrouves sans chercher : tes genoux connaissent le chemin. À quarante pas de la porte de bronze, un gros homme en tablier blanc ; à sa droite, une jeune femme en robe de noces, d'une autre noce que celle du bas, car on se marie beaucoup le matin du Grand Midi. Entre les deux, à hauteur de mollet, il y a un creux où le vent s'arrête.",
      "Tu t'y es tenu{e} ce matin, chez toi, à quatre pattes, pendant que deux noirs tournaient le dos. Tu connais de lui deux mollets, des bas de laine chinée, une paire de galoches blanchies de farine. D'elle, tu connais un ourlet, sous lequel tu es rentré{e} deux fois. Tu lèves la tête.",
      "Il a une moustache rousse, un nez comme une brioche, et il rit. Il a une couronne de pain passée au bras, comme un panier. Il tient par la main une petite fille que tu découvres : de dos, son tablier la cachait.",
      "Tu regardes la mariée, à côté. Elle a vingt ans. Elle pleure, de joie, en regardant la Tour : il y a une larme arrêtée sur sa joue, ronde, avec le cadran dedans.",
      "Ces deux-là t'ont caché{e} ce matin sans le savoir. Tu les avais pris pour un mur et pour un rideau, et l'on se demande rarement quelle figure a un mur.",
    ],
    choices: [
      { label: "Poser un grain sur la main du boulanger", hide: { seen: "K16r_boulanger_eveil" }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "r:pain_donne", ep: ["perso", 600] }, to: "K16r_boulanger_eveil" },
      { back: "K16_place" },
    ] },

  K16r_boulanger_eveil: { act: "V", title: "T'as l'air d'avoir faim", place: "tour", ambiance: "ville",
    text: [
      "Le rire s'achève, énorme, un rire de four. « ...et de onze ! Tu as entendu, ma puce ? Encore une, et on rentre manger la... » Il baisse les yeux vers la petite. Elle se tait. Il lui secoue la main. Il te voit, à sa place, plus bas.",
      "« Qu'est-ce qu'elle a ? » La peur est encore loin. Il regarde autour. Sa moustache retombe. « Qu'est-ce qu'ils ont tous ? »",
      "Tu lui dis. Tu as dit cela, chez toi, à des gens réveillés pour un renseignement, en regardant ailleurs. Tu regardes sa figure. Tu choisis des mots. Que c'est un sommeil. Qu'il ne fait pas mal. Que la petite dort au milieu de son rire, et qu'elle a toujours sa main dans la sienne.",
      "Il serre la petite main. « Et toi ? Tu dors pas, toi ? — Je suis d'après. — D'après quoi ? » C'est tout ce que tu sais en dire. Il te considère : les sabots, le charbon, les côtes qu'on devine. Il a la figure des gens dont le métier est de nourrir, et qui font le compte d'un corps comme d'autres celui d'une bourse.",
      "« T'as l'air d'avoir faim. » Il décroche la couronne de son bras. Il te la tend. « Prends. Elle est de ce matin. Je la portais à ma belle-sœur, elle attendra. » Tu restes les bras le long du corps. Il insiste, de tout son bras. « Prends, je te dis ! Un boulanger qui laisse un gosse maigre devant lui un jour de fête, il peut fermer son four. »",
      "Tu la prends. Elle est tiède. Tu as glané six ans au pied de quarante mille personnes, par petits morceaux, et c'est la première fois qu'une d'elles te donne quelque chose.",
      "« Merci », dis-tu. C'est un mot dont tu te sers mal. Il rit, déjà plus lent. « De rien. Tu repasseras. Rue des Fourniers, à l'Épi... » Sa moustache s'arrête.",
      "Tu manges la moitié de la couronne, assis{e} entre ses mollets et la robe de noces, à ta place de ce matin. Tu gardes l'autre moitié pour {autre}.",
    ],
    choices: [{ back: "K16_place" }] },

  K16r_douzieme: { act: "V", title: "L'envers", place: "tour", ambiance: "ville",
    text: [
      "Tu en refais le tour. Des lattes, des clous, des cordes, un seau. Au dos de la toile, les comédiens ont écrit à la craie le nom des villes et ce qu'elles ont rendu. *Arvoise : 3 écus, un pont. Sainte-Aure : bénis, non payés.* Tu cherches. Tu trouves. *Roquebise : sifflés.*",
      "Tu ris tout seul. On les a sifflés, chez toi. Cela te paraît juste : à Roquebise, on a toujours préféré les montreurs d'ours.",
      { if: PIECE, text: "La fille est derrière sa porte, sur sa planche, dans sa robe sans couleur. Trois épingles, la main à plat, les yeux fermés. Tu l'as vue ce matin, exactement ainsi, poudrée de gris, et tu avais pensé : c'est la seule qui sache qu'il lui reste quelque chose à faire." },
      { if: PIECE, text: "Le gris l'a quittée. Elle a au cou une veine arrêtée entre deux battements. Elle a dix-huit ans depuis un instant. Chez toi, elle les a depuis soixante ans, et tu trouvais déjà qu'elle attendait bien." },
      { if: { not: PIECE }, text: "Derrière la douzième, la planche noire, l'araignée, la corde. La fille en manteau bleu, la main sur la corde. Tu regardes l'araignée. Elle est au milieu de sa toile, vivante, arrêtée, une patte levée. C'est elle, le douzième personnage. On la montre depuis trente ans, sans le savoir, à des gens qui se signent." },
      "Par une fente de la toile, tu vois la place à l'endroit : cinq mille figures. Tu comprends ce que voient les comédiens. Toi, tu as toujours vu les gens par-derrière, et ils t'ont semblé faciles. De face, il y en a trop.",
    ],
    choices: [{ back: "K16_place" }] },

  K16r_oies: { act: "V", title: "Le registre de la Deuxième", place: "tour", ambiance: "ville",
    text: [
      "La rue qui tombe entre le cirier et le marchand de peignes. La borne.",
      { if: SORTIS, text: "Un mitron est dessus, la bouche pleine. Chez toi aussi. Tu t'étais demandé ce qu'il avait de spécial, pour que {autre} ne t'en ait rien écrit. Il a la place d'un autre. Tu le regardes mâcher. Il ignore qu'il est la meilleure nouvelle de la ville." },
      { if: JOSSE_BORNE, text: "Josse Noyer, debout, une main en visière, l'autre à plat sur son épaule gauche. Tu lui as tenu cette main-là, ce matin, chez toi, et il a fini de compter : *...onze.* Il a quarante-quatre ans, le front large, les sourcils d'un seul trait. Tu connais ces sourcils. Tu les as vus six ans, par une fenêtre, sur une vieille penchée à son établi." },
      { if: JOSSE_COURT, text: "La borne est vide, le chapeau au pied. Tu descends jusqu'au second coude. Il est là, en pleine foulée, la bouche ouverte sur le nom. Tu lui as tenu la main ce matin, chez toi, et le nom est sorti. Il a le front large, les sourcils d'un seul trait. Tu les as vus six ans, par une fenêtre, sur une vieille penchée à son établi." },
      { if: { not: SORTIS }, text: "*Noyer Josse, laboureur, quarante-quatre ans. Ville-Haute, parvis de la Tour, présumé.* Le registre des Veilleurs a trois mille pages. Il se trompe pour celui-ci, de peu. Ils ont promené leurs lampes soixante ans dans un champ de charrettes, à la Foire, en appelant ce nom. Il était ici." },
      { if: { not: SORTIS }, text: "La vieille le savait, et elle s'est tue soixante ans. Un ruban, pour elle, c'est un mort qu'on a rangé. Tu as ton charbon. Tu regardes la pierre de la borne, lisse, qui prendrait bien l'écriture." },
    ],
    choices: [
      { label: "Écrire son nom sur la borne, en bâtons, pour ceux qui cherchent", hide: { any: [SORTIS, { has: "monde:josse_nomme" }, { has: "r:josse_tu" }] }, fx: { flag: "monde:josse_nomme", ep: ["perso", 400] }, to: "K16r_oies_nom" },
      { label: "Laisser la pierre nue, comme elle l'a voulu", hide: { any: [SORTIS, { has: "monde:josse_nomme" }, { has: "r:josse_tu" }] }, fx: { flag: "r:josse_tu", ep: ["perso", 400] }, to: "K16r_oies_nom" },
      { back: "K16_place" },
    ] },

  K16r_oies_nom: { act: "V", title: "Un ruban, ou rien", place: "tour", ambiance: "ville",
    text: [
      { after: "monde:josse_nomme", text: "Tu t'accroupis. Tu écris, gros, sur la face qui regarde la place : *NOYER JOSSE. IL ÉTAIT AU BORD.* Tu repasses chaque bâton deux fois, pour que le charbon morde." },
      { after: "monde:josse_nomme", text: "Les Veilleurs passeront. Ils liront. Ils corrigeront leur registre, à la page mille et quelque, d'une encre neuve : ce sont des gens que cela console, d'avoir la bonne rue. Ils lui mettront un ruban. La vieille dira que tu t'es mêlé{e} de ce qui ne te regardait pas. Elle aura raison. Tu l'as fait quand même : il y a un fils, sur un halage, qui est revenu pour quelqu'un, et tu trouves qu'un homme pour qui l'on est revenu mérite qu'on sache où il se tenait." },
      { after: "r:josse_tu", text: "Tu rempoches ton charbon. Elle a eu soixante ans pour le dire aux Veilleurs, et elle s'est tue. Elle a ses raisons. Elle les a toujours, et elle ne les donne pas. Tu as volé du sable à cette femme, l'hiver dernier ; tu ne vas pas, en plus, lui voler un silence." },
      { after: "r:josse_tu", text: "La borne reste nue. Trois personnes au monde savent ce qu'elle porte : une vieille, {autre}, et toi. Cela fait une petite paroisse. Elle suffit." },
    ],
    choices: [{ back: "K16_place" }] },

  K16r_poulie: { act: "V", title: "Cinquante rouets", place: "tour", ambiance: "ville",
    text: [
      "La rue de la Poulie, ses maisons qui se touchent du front. Les rouets sont aux fenêtres, arrêtés sur un tour ; les fileuses ont la tête levée vers le peu de ciel où l'on devine la Tour. Tu avais vu cela gris. Les laines sont de toutes les couleurs, en écheveaux, aux appuis : la rue a l'air d'un étal.",
      { if: H_DEBOUT, text: "Sous l'enseigne du Dé, elle est sur son seuil, debout, une femme maigre, de la cire aux oreilles. Elle regarde sa rue. Elle voit cinquante voisines la tête en l'air, et qui la gardent ainsi. Elle a cru une chose incroyable, ce matin, sur la parole de quelqu'un de l'âge de son fils ; elle vient de voir qu'elle avait bien fait de la croire, et elle en a la figure de quelqu'un qu'on a giflé." },
      { if: H_DEBOUT, text: "Chez toi, la maison était vide, le fil coupé au couteau, deux boulettes de cire dans une soucoupe. Elle partira tout à l'heure, quand l'heure reprendra pour ceux de la cire. Tu la vois avant." },
      { if: H_LETTRE, text: "Sous l'enseigne du Dé, elle est sur son seuil, la tête levée comme les autres. Elle tient contre sa poitrine, à deux mains, un papier plié en quatre. Il est blanc. Chez toi, il était jaune et cassant. C'est la lettre du petit : tu l'as tenue dans un dortoir, tu l'as glissée dans un Cahier, elle a remonté soixante ans, et {autre} la lui a portée hier." },
      { if: H_RIEN, text: "Sous l'enseigne du Dé, le volet est tiré. Par la fente, une femme maigre, à son rouet, le pied sur la pédale, la tête baissée. Elle seule, dans la rue, garde les yeux baissés. Elle filait pour s'épargner de compter les coups. Son fil vient de casser : on voit les deux bouts, qui ne se sont pas encore quittés." },
      "Son fils a treize ans. Il est sous la Tour, à l'heure qu'il est, un maillet à la main, de la cire aux oreilles, une montre neuve dans sa poche. Il a les yeux de sa mère.",
    ],
    choices: [
      { label: "Poser un grain sur sa main, et lui dire où est le petit", hide: { seen: "K16r_hurel" }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "r:hurel_dit", ep: ["histoire", 600] }, to: "K16r_hurel" },
      { back: "K16_place" },
    ] },

  K16r_hurel: { act: "V", title: "La veuve Hurel", place: "tour", ambiance: "ville",
    text: [
      { if: H_DEBOUT, text: "Elle te voit. La cire lui garde les oreilles. Elle recule d'un pas dans sa porte, la main à la gorge. Tu montres tes oreilles, puis les siennes, et tu fais non : qu'elle garde tout. Tu t'accroupis. Tu écris sur son seuil, au charbon, en bâtons. *ANSEL VIT.*" },
      { if: H_DEBOUT, text: "Elle lit. Elle sait lire : une veuve qui a mis son garçon à la Guilde sait lire. Elle tombe à genoux sur sa pierre, devant les deux mots, et elle y met les mains à plat, comme sur un front. Tu écris la suite. *SOUS LA TOUR. IL A DE LA CIRE. IL SORTIRA PAR LA PORTE DE FER, AVEC HUIT AUTRES.* Tu ne sais pas quand. Tu écris : *QUAND ÇA SONNERA.*" },
      { if: H_LETTRE, text: "« ...nze. » Elle baisse la tête. Elle te voit. Elle serre la lettre plus fort, comme si tu venais la reprendre. Tu dis vite : « Ansel vit. Il est sous la Tour. Il a de la cire aux oreilles, lui : il a pas été pris. Il sortira par la porte de fer. » Elle ouvre la bouche. Rien ne sort. Elle te tend la lettre, pour que tu voies qu'elle sait déjà quelque chose, et tu vois l'écriture d'un enfant qui tire la langue en formant ses *g.*" },
      { if: H_RIEN, text: "Le pied achève d'appuyer ; le rouet fait un demi-tour à vide. Elle regarde ses deux bouts de fil. Puis elle te voit, dans sa chambre, et elle se lève à moitié. Tu dis vite : « C'est pour Ansel. Il vit. Il est sous la Tour, il a de la cire aux oreilles, il a pas été pris. Il sortira par la porte de fer. » Elle se rassoit. Elle se passe de savoir qui tu es : on reçoit cela de n'importe quelle main." },
      "Tu gardes le reste. Qu'il sortira peut-être dans une heure, et peut-être dans soixante ans, selon la porte qu'on ouvrira. Qu'elle sera là, ou qu'elle n'y sera plus. Tu as un grain, et elle a un fils : tu donnes ce qui tient dans le grain.",
      { if: H_DEBOUT, text: "Elle te prend la main, la charbonneuse, et elle la porte à sa joue. Elle dit quelque chose, trop fort, comme les sourds. « IL A FROID AUX PIEDS, LA NUIT. DITES-LE-LEUR. » Tu fais oui. Elle se relève. Elle se remet sur son seuil, droite, à regarder sa rue, et le gris la trouve ainsi." },
      { if: { not: H_DEBOUT }, text: "« Il a froid aux pieds, la nuit, dit-elle. Dites-le-leur, là-bas. Ils ne savent pas, ce sont des hommes. » Sa voix ralentit. Elle a repris son fil, par les deux bouts, et elle cherche à les renouer. Elle y est presque." },
    ],
    choices: [{ back: "K16_place" }] },

  K16r_chaise: { act: "V", title: "À quarante pas de la porte", place: "tour", ambiance: "ville",
    text: [
      "Tu cherches l'endroit. L'estrade manque encore : on la bâtira dans un an, pour le premier Serment. Tu comptes tes pas depuis la porte de bronze, comme tu les as comptés ce matin. Quarante. Tu y es.",
      "C'est un bout de pavé comme un autre. Une marchande d'oublies y a posé son tambour de fer-blanc. Chez toi, il y avait une chaise à sangles, et dans la chaise une vieille de soixante-neuf ans, un cahier neuf sur les genoux. Elle t'a dit : *tu as mis le temps.* Elle t'a regardé les mains.",
      "Tu te mets où elle était. Tu te baisses à la hauteur d'une personne assise. Tu regardes ce qu'elle regardait.",
      "On l'avait tournée vers la Tour, pour la cérémonie. Elle avait la tête droite. Mais d'ici, en glissant les yeux à main droite, sans bouger le cou, entre l'épaule d'un archer et le coin du cirier, on voit le débouché d'une rue qui tombe. On voit une borne.",
      { if: JOSSE_BORNE, text: "On voit un homme debout dessus, une main en visière. Elle avait son père dans le coin de l'œil. Elle l'a eu tout le matin, sanglée, à cent pas, sans tourner la tête, pendant que des noirs lui tournaient le dos. Elle remuait les lèvres. Tu avais cru qu'elle comptait leurs battements." },
      { if: JOSSE_COURT, text: "On voit une borne vide, et un chapeau au pied. Elle avait cela dans le coin de l'œil. Tout le matin, sanglée, sans tourner la tête : la place où son père n'était plus, parce qu'elle avait couru. Elle remuait les lèvres. Tu avais cru qu'elle comptait des battements." },
      { if: SORTIS, text: "On voit un mitron, la bouche pleine. Elle avait cela dans le coin de l'œil, tout le matin : un garçon boulanger, sur la borne où elle aurait dû être. Tu comprends pourquoi elle avait presque l'air de rire, par moments, du coin où l'on tient les vis." },
      "Quelqu'un avait choisi la place, à quarante pas de la porte, pour qu'elle voie bien. C'est un homme qui a des attentions.",
    ],
    choices: [{ label: "Te relever, avec ce coin d'œil-là", fx: { flag: "r:vu_chaise", ep: ["perso", 400] }, back: "K16_place" }] },

  K16r_gnomon: { act: "V", title: "L'étoile, à son heure", place: "tour", ambiance: "temple",
    text: [
      "La vieille église, sans clocher. Tu y as passé la nuit, chez toi, sur l'étoile de cuivre, avec trois cents Veilleurs qui chantaient bas. Il y avait des lampes à ruban, une odeur de laine mouillée, et une Doyenne qui t'a regardé{e} comme on regarde un outil dont on n'est pas sûr.",
      "Elle est vide. Elle est noire, sauf le rayon qui tombe de la voûte. Au bout du rayon, la pièce de soleil est sur l'étoile, juste, sans déborder. Un bedeau, debout sur un banc, lève le doigt, la bouche ouverte.",
      "Tu as dormi sur cette étoile. Elle était froide. Elle est chaude : tu y poses la paume, dans le rond blanc, et le soleil d'un jour de juin te vient dans la main, par un trou percé il y a trois cents ans pour cette seconde.",
      "Les Veilleurs disent que la ville dort dans la main de saint Gnomon. Tu les trouvais bêtes. Tu as la main dans la sienne, à peu près. Tu les trouves toujours bêtes, et tu comprends qu'on ait besoin de le dire.",
      { if: { has: "monde:oderic_affiche" }, text: "Sous le porche, une feuille clouée, et une vieille en coiffe qui la lit, le doigt sur la troisième ligne. Chez toi, la feuille est tombée en poussière, et la vieille a toujours le doigt levé, sur un mur nu. Tu t'étais demandé ce qu'elle montrait. Elle lisait. Elle est la seule de quarante mille à avoir su, et elle l'a su jusqu'à la troisième ligne." },
      "Derrière l'autel, la dalle à anneau. Tu es sorti{e} par là, ce matin, ou tu y es entré{e}. Elle est scellée, ici : on voit le mortier, propre, d'avant-hier.",
    ],
    choices: [{ back: "K16_place" }] },

  K16r_verriers: { act: "V", title: "Ceux de la Bise", place: "tour", ambiance: "ville",
    text: [
      "Tu les trouves sans les avoir cherchés, à l'angle de la place et de la ruelle, près de leurs chevaux dételés : trois hommes en blouse bleue, le fouet au cou, la pipe à la main, qui regardent la Tour avec la figure de gens qui ont livré et qu'on a payés.",
      "Ce sont les charretiers des cuves. Tu le sais à la blouse : c'est le bleu de chez toi, celui qu'on teint au pastel de la Bise, et qui tourne au vert sous les bras. Tu le sais à leurs mains, qui ont toutes, au pouce, la brûlure ronde que fait la canne du souffleur. Ils sont de Roquebise. Ils ont mis quatre jours à venir, avec douze panses de verre dans la paille, et ils sont restés pour la fête.",
      "C'est la première fois que tu vois des gens de chez toi debout. Tu les as vus pris, depuis la nuit du Bond, dans leurs cuisines. Ceux-ci ont été pris soixante ans plus tôt, ailleurs, en visite.",
      "Tu les regardes un par un. Le vieux a les oreilles décollées. Le gros a une fossette au menton. Le jeune, qui n'a pas vingt ans, a les sourcils qui se rejoignent, et une façon de tenir la tête de côté.",
      "Ta mère tient la tête ainsi, dans sa cuisine, depuis six ans. Tu ignores le nom de ce garçon, et s'il est quelque chose à ta mère, ou s'il y a seulement à Roquebise une façon de pencher la tête, comme il y a un bleu. Il a une alliance neuve. Il a laissé là-bas, il y a quatre jours, une femme qui attendait peut-être quelque chose.",
      "Si l'heure repart ici, il rentrera chez lui dans quatre jours. Il aura des enfants, qui en auront. Il y aura, dans soixante ans, une cuisine à Roquebise, sans Bond, sans lisière, sans glane, et tu ignores ce qu'il y aura dans la cuisine à ta place.",
      "Si l'heure repart chez toi, il se réveillera devant une Tour, soixante ans après sa femme.",
      "Tu restes devant lui. Il a de la paille dans les cheveux.",
    ],
    choices: [{ label: "Lui ôter le brin de paille", fx: { flag: "r:vu_verriers", ep: ["histoire", 800] }, back: "K16_place" }] },

  // ===== the hill of the Jurors
  K16r_cuivres: { act: "V", title: "Rouges", place: "guilde", ambiance: "chateau",
    text: [
      "Ils sont douze, hauts comme des armoires, en cuivre rouge. Tu les as connus verts, avec de la mousse aux jointures et une lueur grise au cœur. Ceux-ci sont astiqués : on voit la marque du chiffon. Ils ont trois doigts à chaque main, et tu sais ce que pèsent ces doigts sur une épaule.",
      "Celui qui faisait le tour des arcades a un pied en l'air. Tu passes devant lui. Tu passes exprès, à portée, les épaules rentrées. Il te laisse passer. La cloche prend par les oreilles, et ils en sont dépourvus : ils sont arrêtés comme une montre dans la note, et ils repartiront avec elle.",
      { if: { item: "baguette_bronze" }, text: "Tu as à la ceinture une baguette de buis, ferrée de bronze, qui les délie. Tu l'as prise sous un sablier, chez toi, avec un papier noué d'un fil. Elle est là-haut, à cette heure, sous ce même sablier, neuve, à t'attendre. Tu en as donc deux, d'une certaine façon, et une seule. Tu t'épargnes d'aller vérifier." },
      "Sur la rampe, en descendant, il y en a un petit. Il a la taille d'un garçon de dix ans, une tête ronde, une bouche en fente. Il court. Il est arrêté en pleine course, penché, un pied loin derrière : *ils ne courent jamais*, t'a dit un vieillard. Celui-ci courait.",
    ],
    choices: [
      { label: "T'accroupir devant le petit", hide: { seen: "K16r_carillon" }, to: "K16r_carillon" },
      { back: "K16_colline" },
    ] },

  K16r_carillon: { act: "V", title: "Le troisième, à son départ", place: "guilde", ambiance: "chateau",
    text: [
      "C'est lui. Tu le reconnais à une bosse, au coude gauche, qu'un apprenti lui a faite un jour avec une porte.",
      { if: { has: "r:carillon" }, text: "Il a marché avec toi. Tu l'as trouvé dans une rue, la coupelle vide, la manche d'un notaire entre deux doigts ; tu l'as remonté de ton sable, et il t'a suivi{e} en sonnant les heures. Il est resté chez toi, tout à l'heure, au pied d'un escalier. Il est aussi ici, et il ne te connaît pas." },
      { if: { not: { has: "r:carillon" } }, text: "Tu l'as trouvé dans une rue, chez toi, la coupelle vide, la manche d'un notaire entre deux doigts. Il avait tiré quarante et une personnes par la manche, poliment, dans une ville couchée. Tu l'as laissé où il était." },
      "Sa coupelle est pleine. Derrière la grille en forme de cœur, sous la clochette, il y a une mesure de sable qui luit. On l'a rempli ce matin, pour une longue course. Entre deux côtes de cuivre, un papier plié, de la grosse main qui appuie.",
      "Il a quitté la table du vieux à onze heures. *Descends, et fais vite.* Il descend. Il lui reste une rampe, une barrière, vingt rues. Dans un instant, la cloche prendra toute la ville, et lui continuera ; il arrivera en bas, sa lettre au cœur, parmi des mains fermées. Il les tirera par la manche. Il est fait pour remettre un pli à quelqu'un qui dit merci.",
      "Ton sable n'y peut rien : il a déjà le sien. Tu lui redresses le papier, qui glissait.",
    ],
    choices: [{ back: "K16r_cuivres" }] },

  K16r_lunel: { act: "V", title: "Reprendre où l'on s'est arrêté", place: "guilde", ambiance: "chateau",
    text: [
      "La fenêtre du premier, au logis de l'est. Le vieillard en bonnet de velours, sa couverture aux genoux, la figure levée vers le soleil. Il a les yeux fermés, et il sourit. Tu l'as connu ainsi, sous soixante ans de poussière. Il a le même sourire : il le tenait d'aujourd'hui.",
      { if: { has: "r:lunel_eveille" }, text: "Tu lui as parlé, chez toi. Il t'a pris{e} pour le petit Foliot. Il t'a dit qu'il en manquait un, et qu'il savait aller jusqu'à douze. À la fin, il a pesé sur ton poignet : *dites au lecteur de reprendre où il s'est arrêté. C'était le chapitre des...*" },
      { if: { not: { has: "r:lunel_eveille" } }, text: "Tu es passé{e} devant lui, chez toi, en gardant ton sable. Tu t'étais dit qu'un homme qui sourit à ce point n'a besoin de personne." },
      "Près de lui, la chaise, et sur la chaise le livre ouvert, le signet pendant. Le lecteur est à la fête. La page a une heure de moins que lui : elle est blanche, et l'encre du titre courant est grasse. Tu te penches. Tu lis les imprimés, à présent, quand ils sont gros. *Des Échappements.*",
      { if: { has: "r:lunel_eveille" }, text: "C'était donc le chapitre des échappements. Il te l'a demandé dans soixante ans, la bouche ouverte sur le mot ; tu l'as sous le nez, soixante ans plus tôt, et le lecteur court les rues." },
    ],
    choices: [
      { label: "Poser un grain sur sa main, et reprendre la lecture toi-même", hide: { seen: "K16r_lecteur" }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "r:lecteur", ep: ["perso", 500] }, to: "K16r_lecteur" },
      { back: "K16_colline" },
    ] },

  K16r_lecteur: { act: "V", title: "Le chapitre des échappements", place: "guilde", ambiance: "chateau",
    text: [
      "Un œil s'ouvre, très bleu, puis l'autre. « ...onze. » Il a compté dans son soleil, les yeux fermés. Il attend la suite, un doigt levé. Le doigt reste en l'air.",
      "« Vous êtes le petit Foliot ? Non. Vous êtes trop maigre. » Il regarde la chaise. « Où est mon lecteur ? — À la fête. — Naturellement. Quinze ans. J'y serais aussi. » Il soupire. « Il s'était arrêté au milieu d'une phrase. C'est une cruauté, à mon âge : on ignore si l'on aura la fin. »",
      "Tu prends le livre. Il pèse comme un pain de six livres. Tu t'assois sur la chaise, tu le cales sur tes genoux, et tu mets le doigt sous le signet.",
      "Tu lis. Tu lis comme tu as appris, en neuf jours, dans un Cahier : en bâtons, une syllabe après l'autre, la langue entre les dents. « *Et l'an-cre, à cha-que bat-te-ment, lais-se é-chap-per une dent, et une seu-le...* » Tu butes sur *échapper.* Il te souffle le mot, sans regarder : il sait la page par cœur depuis soixante-dix ans, et il se la fait lire pour le plaisir d'être d'accord.",
      "« *...en quoi con-sis-te tout l'art, qui est de re-te-nir et de lâ-cher à me-sure.* »",
      "« À mesure, répète-t-il. Voilà. Tout est là, et personne n'écoute. Retenir, on sait. Les jeunes gens retiennent très bien. C'est lâcher qui s'apprend tard. » Il a refermé les yeux. « Vous lisez mal. Vous lisez comme on marche sur des pierres. Cela me plaît : on entend chaque mot. »",
      { if: { has: "r:lunel_eveille" }, text: "Tu as fait une commission. On te l'avait donnée dans soixante ans, et tu l'as portée toi-même, faute de lecteur. Tu remets le signet une ligne plus bas." },
      { if: { not: { has: "r:lunel_eveille" } }, text: "Tu remets le signet une ligne plus bas. C'est la première page que tu lis tout haut à quelqu'un, et il a fallu que ce soit à un doyen." },
      "Sa main retombe sur la couverture, ouverte. Le sourire revient par-dessus, tout seul, comme l'eau reprend son niveau.",
    ],
    choices: [{ back: "K16_colline" }] },

  K16r_serrure: { act: "V", title: "La face lisse", place: "guilde", ambiance: "chateau",
    text: [
      "L'escalier du nord, le palier. La porte du cabinet est de chêne clair, ciré, sans une blessure. Chez toi, elle est noire, et labourée : soixante ans de pinces, de mèches, de fer rouge et d'eau-forte, autour d'un tambour de bronze gros comme un pain.",
      "Le tambour est là, neuf. Douze anneaux sur un même axe, et une petite fenêtre où chacun montre une face. Tu poses le pouce sur le premier. Il tourne avec un cliquet doux. Un, deux, trois, jusqu'à douze ; puis une treizième face, où l'on n'a rien gravé. Elle est lisse, polie comme un miroir, et l'on s'y voit le bout du nez.",
      { if: { has: "r:sait_treize" }, text: "Tu as vu l'épure, rue des Aiguilliers, clouée au mur d'un vieil homme. Treize cases, douze chiffres. *Lisse. B. y tient.*" },
      { if: { all: [{ has: "r:gobin_eveille" }, { not: { has: "r:sait_treize" } }] }, text: "Le vieil horloger du bas, qui l'a dessinée, te l'a dit avant que ton grain finisse : *il y a une face de trop. Elle est là pour la dernière. Celle qu'on ne...*" },
      "Celle qu'on se garde de nommer. Tu connais cela : c'est la religion des Douze Heures. On dit sainte Aure pour la première, saint Gnomon pour midi. Pour la douzième, les vieilles se signent, et les enfants disent *l'autre.* Ici, on lui a fait une face sans chiffre.",
      { if: { any: [{ has: "monde:combinaison" }, { has: "monde:combinaison_midi" }] }, text: "Tu sais comment elle s'ouvre : {autre} te l'a écrit. Onze anneaux sur leur heure, et le douzième sur le miroir." },
      "Tu comprends la porte. On entre chez cet homme en sachant onze chiffres, et en taisant le douzième. Toute sa maison est faite ainsi, tout son Livre : la dernière heure y tient par le silence qu'on fait autour.",
      "Tu remets l'anneau où il était. Tu descends l'escalier avec une idée venue d'un tambour de bronze : si l'on a pris tant de peine, pendant quatre cents ans, pour taire ce nom-là, c'est que le dire fait quelque chose. Le jour où il faudra que la Douzième sonne, quelqu'un devra l'appeler.",
    ],
    choices: [{ label: "Garder l'idée", fx: { flag: "r:sait_nommer", ep: ["histoire", 800] }, back: "K16_colline" }] },

  K16r_rose: { act: "V", title: "Trois traits", place: "guilde", ambiance: "chateau",
    text: [
      "La pièce blanche, le marbre, la cloche de verre. La rose.",
      "Elle est rouge, à demi ouverte, avec sa goutte. Elle est telle que chez toi : c'est la seule chose de toute la colline qui ait gardé sa couleur d'un monde à l'autre. Elle était déjà hors du temps quand le temps s'est arrêté.",
      "Autour de la cloche, sur le marbre, à la pointe de diamant : trois traits. Pâques, mai, juin. Chez toi, il y en a sept cent vingt et un, rangés par fagots, qui font tout le tour de la table. Celui-ci, le troisième, sera le troisième de la première ligne.",
      "Sous la cloche, la petite trappe de laiton, la coupelle. Une pincée y luit, presque entière : il l'a changée ce matin, avant de descendre. Il a pensé à sa rose, un jour pareil.",
      "Tu regardes la goutte, au bord du pétale. Elle est ronde. Elle a la fenêtre dedans. Elle attend depuis Pâques la permission de tomber.",
      "Il suffirait de lever la cloche. La pincée, tu sais la prendre. La rose aurait son heure : elle achèverait de s'ouvrir, la goutte tomberait, et dans trois jours il y aurait sur ce marbre un peu de brun. C'est tout ce qu'une rose demande.",
    ],
    choices: [
      { label: "Lever la cloche, et prendre la pincée", hide: { any: [{ has: "r:rose_rendue" }, { has: "r:rose_laissee" }] }, fx: { flag: "r:rose_rendue", stock: { sable: 1 }, ep: ["perso", 600] }, to: "K16r_rose_fin" },
      { label: "La laisser sous son verre", hide: { any: [{ has: "r:rose_rendue" }, { has: "r:rose_laissee" }] }, fx: { flag: "r:rose_laissee", ep: ["perso", 300] }, to: "K16r_rose_fin" },
      { back: "K16_colline" },
    ] },

  K16r_rose_fin: { act: "V", title: "Une chose tenue avec soin", place: "guilde", ambiance: "chateau",
    text: [
      { after: "r:rose_rendue", text: "La cloche est lourde. Tu la poses sur le marbre, à côté. Tu ouvres la trappe ; tu vides la coupelle dans ta paume, d'un geste que tu as fait mille fois au pied des murs, et tu la verses dans ton sachet." },
      { after: "r:rose_rendue", text: "Rien ne se passe. Elle est dans la note, à présent, comme la ville : arrêtée par autre chose. Mais la goutte a changé. Elle s'est allongée d'un rien, en poire : elle avait commencé de tomber, dans le rond de ton sablier, avant que tu recules." },
      { after: "r:rose_rendue", text: "Elle tombera quand l'heure repartira. Un homme rentrera peut-être dans cette pièce ; il trouvera sa cloche à côté, et trois traits pour tout compte. Tu lui as pris soixante ans de rose. C'est le seul vol de ta vie dont tu sois content{e}." },
      { after: "r:rose_laissee", text: "Tu gardes les mains dans le dos. Tu as pris assez de choses dans cette ville, et celle-ci demande seulement d'être comprise. Un homme a mis une fleur sous verre, à Pâques, pour voir. Il a vu que cela tenait. Il a pensé à une enfant, puis à une reine, puis à douze cuves. Tout est parti de cette table." },
      { after: "r:rose_laissee", text: "Tu la laisses à celui qui l'a arrêtée. S'il doit la rendre, qu'il la rende lui-même, de sa main. Certains gestes reviennent à celui qui a fait le premier." },
      "Dans l'escalier, tu te retournes. Par la porte ouverte, on voit la table, la fenêtre, la Tour. C'est une pièce propre. C'est ce qu'elle a de terrible.",
    ],
    choices: [{ back: "K16_colline" }] },

  K16r_cadran: { act: "V", title: "Pour mémoire", place: "guilde", ambiance: "chateau",
    text: [
      "Le cadran solaire, sur ses trois marches, au milieu de la cour. Une table de marbre, un style de bronze, douze heures gravées en éventail. *POUR MÉMOIRE.*",
      "Tu t'es assis{e} là, chez toi, sur la seconde marche, un midi qui ne finissait pas, le Cahier sur les genoux. Tu as écrit à {autre}. Tu as écrit que la cour était sous un drap, et qu'un homme de cuivre tournait. De l'autre côté du papier, à soixante ans, quelqu'un était assis sur cette marche, et lisait.",
      "Tu t'y rassois. La pierre est tiède. Tu regardes le style : son ombre est rentrée sous lui, toute, comme un chat sous un meuble. Tu mets la main à plat sur le marbre, à côté. Ta main a rentré la sienne aussi. Vous êtes, le style et toi, deux choses debout dans un midi juste.",
      "Les Fondateurs ont mis ce cadran dans la cour des gens qui fabriquent l'heure. Tu avais trouvé cela drôle. Tu comprends : c'est le seul instrument de la maison qu'on ne peut ni avancer, ni retarder, ni retenir. Il dit ce que fait le soleil. On l'a mis là pour leur rappeler que le soleil est un autre.",
      "Ils l'ont oublié, sauf un. Celui-là est en bas, la main sur un levier.",
    ],
    choices: [{ back: "K16_colline" }] },
});

var extras = {
  items: {
    ruban_bleu: { name: "Ruban bleu de Hautgué", desc: "Une aune de ruban, d'un bleu de ciel. Maître Mauger, mercier, t'en a fait crédit jusqu'à la Saint-Jean." },
  },
};

module.exports = { passages: P, extras: extras };
