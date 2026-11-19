// Le Grand Raccordement · the angel on the scales (shared), and the six dénouements. Z_branch reads how the angel
// appears at dawn (aube, the game master's choice), Basile's last sentence (basile), what Salée does (salee), and the
// convoy (convoi). Every dénouement keeps the Héraut under the butter, on the scales of the Carrefour, as La Grande
// Fonte finds it thirty-one years later. Each is an ending (fx flag fin:<id>); the fates (destins.js) follow it.
function fin(id, title, text) {
  return { act: "III", title: title, place: "carrefour", end: true, epilogue: true, fx: { flag: "fin:" + id }, text: text };
}
var GENOUX = { has: "salee=genoux" };
var PAIRES = require("./paires.js").ALL;
module.exports = {
  Z_bascule: { act: "III", title: "La bascule", place: "carrefour",
    text: [
      "Ils le portent une dernière fois sur les barres, de l'Entrepôt au milieu du Carrefour. Quarante pas. Ce sont les plus longs de la nuit.",
      "La vieille bascule du marché attend, noire de suie, une plate-forme de fonte grande comme une table, où l'on ne pesait plus que des enfants, pour rire, le dimanche. Ils y posent l'ange. L'aiguille du cadran tremble, monte, et s'arrête sur un chiffre que personne ne lira avant longtemps.",
      { if: { has: "beurre=moule" }, text: "L'ange de beurre se tient debout sur la bascule, doré, lisse, parfait, la trompette aux lèvres, un pied levé au-dessus de la ville. On dirait qu'il vient d'atterrir, ou qu'il va repartir." },
      { if: { has: "beurre=trompette" }, text: "L'ange de beurre se tient debout sur la bascule, un peu épais aux genoux, une trompette d'or trop grande pointée vers le ciel. On dirait qu'il va annoncer quelque chose à la ville, et qu'il cherche ses mots." },
      { if: { has: "beurre=mains" }, text: "La forme de beurre se tient debout sur la bascule, bosselée, de travers, avec ses deux ailes qui sont peut-être des ailes et son bras levé. On dirait un enfant qu'on a habillé trop vite pour une fête, et qui attend qu'on lui dise ce qu'il est." },
      "Ils posent les barres de fer au pied de la bascule. Ils ouvrent les mains. Sur leurs quatre paumes, en travers, la même brûlure : deux lignes nettes, rouges, de la forme exacte du fer.",
      { if: { count: PAIRES, min: 6 }, text: "Ils ne se sont pas quittés de la journée, même à une nuit de distance, même au bout d'un talkie qui grésille. Chaque porte de cette journée, ils l'ont ouverte à deux mains. Ils ne le savent pas. Ils ont les mêmes brûlures : c'est leur façon de le savoir." },
      { if: { count: PAIRES, max: 2 }, text: "Ils se connaissent depuis ce matin. Ils ont passé la journée chacun de son côté, à une nuit l'un de l'autre, et la nuit l'un derrière l'autre, sans se voir, à cause de l'ange entre eux. Ils se regardent maintenant pour la première fois, vraiment, comme deux inconnus qui se reconnaissent." },
      "Puis ils s'asseyent sur le rebord de la fontaine, côte à côte, et ils regardent ce qu'ils ont fait.",
    ],
    choices: [{ label: "Attendre l'aube", to: "C5" }] },
  Z_branch: { act: "III", title: "Ce qui arriva", place: "carrefour",
    branch: [
      { if: { has: "aube=soleil" }, to: "F_soleil" },
      { if: { all: [{ has: "aube=trompette" }, GENOUX] }, to: "F_idole" },
      { if: { all: [GENOUX, { any: [{ has: "convoi=guide" }, { has: "convoi=deguise" }] }] }, to: "F_route" },
      { if: { has: "basile=garde" }, to: "F_inaccessible" },
      { if: { all: [{ has: "basile=serment" }, { has: "aube=silence" }] }, to: "F_serment" },
      { to: "F_ange" },
    ] },

  F_soleil: fin("soleil", "Le centre", [
    "Le point d'acier, au bout de la trompette, pas plus gros qu'un ongle, attrape le premier rayon du jour et le jette par-dessus les toits brûlés de Mirevaux, par-dessus la route et les champs de panneaux, droit sur la tour de verre du Consortium des Panneaux Réunis, qui tourne lentement sur elle-même pour suivre le soleil.",
    "Au sommet de la tour, il y a un capteur. Il attend un centre depuis la veille. Il le reçoit : un éclat parfait, la réflectance la plus pure du pays, quatre-vingt-dix-neuf virgule quatre-vingt-dix-sept pour cent, venu de très loin. Le capteur fait ce pour quoi on l'a construit. Il vise.",
    "Tous les panneaux du pays se redressent d'un coup, une dernière fois, et tournent la tête vers ce centre-là. Vers la tour.",
    "On voit la lumière depuis Mirevaux : un trait blanc, droit, qui monte de l'horizon comme une colonne, puis la tour de verre qui s'allume de l'intérieur, étage par étage, comme une lanterne qu'on remplit. Puis plus rien. Puis, une minute plus tard, le bruit, très étouffé, d'une chose très grande qui s'effondre.",
    "Gaspard Zénith était au dernier étage. Il avait réservé le petit déjeuner. On le retrouve le soir, au milieu des décombres, assis sur un fauteuil de cuir intact, ses lunettes miroir fondues sur le nez, vivant, muet, regardant le soleil sans cligner. Il ne cligne plus jamais.",
    "Le Consortium des Panneaux Réunis n'existe plus. Le Grand Raccordement non plus : tous les panneaux du pays, privés de centre, baissent la tête en même temps, et ne la relèvent pas. Le pays est en ruines. Mais il n'appartient plus à personne. Au Carrefour de Mirevaux, devant un ange de beurre sur une bascule, deux cents motards à genoux ne savent pas ce qui s'est passé. Ils savent seulement que l'ange a sonné vers l'horizon, et que l'horizon s'est éteint.",
    { if: { has: "salee=genoux" }, text: "Parmi eux, une rousse aux mains brûlées, à genoux, ne dit rien." },
    { if: { has: "salee=mere" }, text: "Une rousse aux mains brûlées vend du beurre très salé à la porte d'une cave. Elle ne dit rien." },
    { if: { has: "basile=serment" }, text: "Sur le rebord de la fontaine, un garçon qui ne parle plus regarde l'horizon éteint, et il pose deux doigts à sa visière." },
    { if: { has: "basile=garde" }, text: "Sur la route du Domaine, un garde sans voix marche vers un socle vide, et il ne se retourne pas quand l'horizon s'éteint. Il a compris en voyant son ombre devenir plus nette." },
  ]),

  F_idole: fin("idole", "Il a sonné", [
    "L'éclat de la trompette tombe sur la foule comme une note. Deux cents motards le reçoivent dans les yeux en même temps. Le grand barbu du premier rang dit : « Il a sonné. » Et tous répètent : *il a sonné*.",
    "Ils restent à genoux jusqu'à midi. Le soleil monte, l'ange luit, le beurre coule un peu de la trompette, goutte à goutte, et quelqu'un, dans la foule, le recueille dans le creux d'un casque. À midi, quand le beurre a assez coulé pour remplir le casque, ils le font passer de main en main, et chacun y trempe un doigt, et se le passe sur le front. Personne ne leur a dit de le faire. Personne ne rit.",
    "Le soir, ils ont un nom. Ils s'appellent entre eux les Demi-Sel, à cause d'une crémière rousse qui leur vend son beurre plus salé que tous les autres, et qui leur a dit que le sel faisait tenir le beurre au chaud. Ils ont un signe : deux doigts tendus, qui tartinent l'air. Ils ont un dieu, qui a sonné.",
    "La rousse est parmi eux, à genoux, au premier rang. On la regarde comme on regarde quelqu'un qui était là la première. Elle ne dit rien. On prend son silence pour de la sainteté. C'est commode, et ce n'est pas tout à fait faux.",
    "Le Consortium envoie, la semaine suivante, une camionnette blanche au Carrefour, avec un projecteur et un réflectomètre. Le réflectomètre, devant l'ange, affiche *0,4 %*. Les techniciens repartent. Les motards ne se sont pas levés.",
    { if: { has: "basile=serment" }, text: "Sur le rebord de la fontaine, un garçon qui ne parle plus regarde les motards prier son travail. Il a juré de ne rien dire. Il tient sa promesse. C'est ce qu'il fait le mieux." },
    { if: { has: "basile=garde" }, text: "Sur la route du Domaine, un garde sans voix entend derrière lui, très loin, une ville entière dire *il a sonné*. Il ne se retourne pas." },
  ]),

  F_inaccessible: fin("inaccessible", "L'Inaccessible", [
    "Il arrive au Domaine le surlendemain, à pied, les mains bandées, l'uniforme de son père en lambeaux. Les grilles dorées sont toujours ouvertes, figées à mi-course. Les Ferrailleurs ont emporté les gouttières, les rampes, les poignées de porte et les couverts en argent. Ils ont laissé les tableaux, qu'ils n'ont pas su peser.",
    "La Salle froide est vide, à part les cloches de verre sur leurs flaques de beurre sec et, au milieu, le socle de marbre noir, nu. Basile se place devant, à un mètre cinquante. Il se met au garde-à-vous. Il n'a plus de voix pour réciter le règlement. Il le récite en dedans.",
    "C'est là que Mademoiselle Vernis le trouve, une semaine plus tard. Elle a été nommée, par défaut, directrice des Mentions légales : tous les autres sont partis. Elle regarde le socle vide. Elle regarde le garde. Elle regarde le registre, ouvert sur le pupitre, à la ligne du Héraut, avec, dans la colonne des sorties, *Sorti le soir même. Destination :*, et dans la marge, deux initiales.",
    { if: { has: "vernis:allie" }, text: "Elle a vu ces mains-là, violettes d'encre, le matin de la visite. Elle les reconnaît, bandées. Elle ne pose aucune question. Elle referme le registre doucement." },
    "« La Maison, dit-elle, n'a plus rien à vendre. Le beurre fond, et il n'y a plus de froid. Le pain se mange, et il n'y a plus de farine. » Elle regarde le socle. « Il nous reste une chose que personne d'autre au monde ne possède : l'absence du Héraut d'inox. »",
    "Elle sort son stylo à plume de derrière son oreille. Elle écrit, sur la première page d'un carnet neuf : *L'Inaccessible.* Puis, en dessous, en tout petit, la première mention légale d'une très longue série.",
    "Onze ans plus tard, la Salle de l'Inaccessible ouvre au public le plus riche du pays. On y admire un socle vide sous une lumière bleutée, pour un prix qui finit par neuf. Un garde y veille, en smoking, muet, d'un âge qu'on ne lui demande pas. Au revers, il porte un petit insigne d'émail : un couteau qui tartine, sur fond noir. Personne au Domaine ne sait ce qu'il veut dire. Personne ne le lui demande. Il ne répondrait pas.",
  ]),

  F_serment: fin("serment", "Le serment de beurre", [
    "Le soleil touche la trompette et ne rencontre que du beurre. L'ange luit, doux, mat. Il ne fait rien. Il se tait, et il veille.",
    "Les motards s'agenouillent devant lui, sans signe, sans miracle, parce qu'il est la seule chose fraîche du pays et qu'il a un visage. C'est assez. Les dieux qui ne font rien durent plus longtemps que les autres : on ne peut pas leur reprocher d'avoir mal fait.",
    "Sur le rebord de la fontaine, deux jeunes gens aux mains brûlées regardent la foule s'agenouiller. Ils se sont juré de ne rien dire. Ils ne disent rien.",
    "Ils tiennent parole trente et un ans. Elle devient la cheffe des motards du Carrefour, les Demi-Sel, et la gardienne de leur ange, et elle raconte à qui veut l'entendre qu'au matin il était là, descendu du ciel, et qu'elle dormait. Il devient le gardien d'un socle vide, au Domaine, de l'autre côté du désert, et il ne raconte rien à personne, puisqu'il ne parle plus.",
    "Une fois par an, le jour de l'Effondrement, une moto rouge traverse le désert jusqu'aux grilles dorées du Domaine, qui ne s'ouvrent plus. Une rousse descend. Derrière les grilles, un vieil homme noir en smoking s'approche. Ils ne se parlent pas. Ils posent leurs mains à plat sur les barreaux, de part et d'autre, paume contre paume, à travers l'or, et ils restent ainsi une minute.",
    "Puis elle remonte sur sa moto, et lui retourne à son socle. Leurs cicatrices ont la forme exacte de deux barres de fer. Ce sont les seules preuves. Elles ne parleront pas non plus.",
  ]),

  F_route: fin("route", "Born to ride", [
    "Ripaille est à genoux au dernier rang, ses chaînes posées sur le pavé à côté d'elle. Elle regarde l'ange. Puis elle regarde la rousse qui l'a guidée, cette nuit, à travers le Domaine, et qui est là, à genoux aussi, au premier rang, les mains brûlées.",
    "Elle ne pose pas de question. Elle a reçu du Consortium une enveloppe pour une statue d'acier, et elle n'a pas livré de statue. Le Consortium enverra quelqu'un. Elle s'en moque. Elle a compris, pendant la nuit, en voyant deux jeunes gens porter un ange sur des barres brûlantes, qu'il y a des métaux qu'on ne fond pas.",
    "Le soir, elle réunit ses gens autour du fourneau, au camp, et elle éteint le fourneau. C'est la première fois depuis qu'il existe. Elle dit : « On ne fond plus. On roule. » Ils démontent les camions, gardent les motos, cousent sur leurs blousons, au milieu des capsules, un petit ange doré découpé dans les papiers de motte.",
    "Les Ferrailleurs deviennent le premier clan de la route. Ils escortent les convois de beurre de la crèmerie Salée à travers le désert, puis les convois de pain, puis les convois de tout. Leur cri de route est une vieille réclame de la Maison qu'ils ont trouvée sur un mur : *Born to ride.* Ils ne savent pas ce que ça veut dire. Ils trouvent que ça sonne.",
    "La rousse roule en tête. Elle ne dit jamais ce qu'il y a dans l'ange. Ripaille ne le lui demande jamais. Entre elles, c'est un contrat sans papier, le seul que Ripaille ait jamais respecté.",
    { if: { has: "basile=serment" }, text: "Au Carrefour, sur le rebord de la fontaine, un garçon qui ne parle plus regarde partir le convoi, et il lève la main, deux doigts tendus." },
    { if: { has: "basile=garde" }, text: "Sur la route du Domaine, un garde sans voix entend passer, très loin, vingt motos. Il ne se retourne pas. Il reconnaît le moteur de tête, qui tousse deux fois." },
  ]),

  F_ange: fin("ange", "L'ange de Mirevaux", [
    "Le soleil se lève sur Mirevaux, et l'ange de beurre luit sur sa bascule, au milieu du Carrefour, dans une ville qui fume.",
    "Les motards sont à genoux. Ils ne savent pas ce qu'ils prient. Ils prient ce qu'ils ont sous la main : un visage doré, frais, qui sent la crème, dans un pays qui sent le brûlé. Le jeune Gaston, au premier rang, s'est déjà nommé gardien. Il a apporté un seau et une louche, au cas où l'ange fondrait. L'ange fond, un peu. Gaston recueille.",
    "La rousse aux mains brûlées ne dit rien. Le garçon qui ne parle plus ne dit rien. L'ange ne dit rien. C'est, au fond, une très bonne façon de fonder une religion.",
    "Le Consortium cherche le Héraut d'inox pendant des mois. Ses techniciens passent au Carrefour avec leurs projecteurs, leurs visières et leurs réflectomètres. Ils n'y voient qu'un ange de beurre, à zéro virgule quatre pour cent de réflectance. Ils repartent. Le Grand Raccordement tient encore quelque temps, sans centre, de travers, comme un troupeau sans berger, puis les panneaux tombent en panne les uns après les autres, et personne ne sait plus les réparer, et personne ne paie plus l'Abonnement Lumière.",
    "On appellera cela l'Effondrement. On cessera vite d'en dire la cause : elle est trop bête, et il y a trop de gens à qui elle a rapporté.",
  ]),
};
