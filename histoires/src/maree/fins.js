// Les Fils de la Marée · the ten dénouements of the city, at one in the morning, when the tide turns. Each one is an
// ending (fx flag fin:<id>); the fates of Oriane, Jasse, Sévan, Nella and Morvan (destins.js) follow it, and together
// they make the ending the reader finds.
function fin(id, title, text) {
  return { act: "III", title: title, place: "palais", ambiance: "nuit", end: true, epilogue: true, fx: { flag: "fin:" + id }, text: text };
}
module.exports = {
  F_orcanne: fin("orcanne", "Les voiles d'Orcanne", [
    "À une heure, la marée tourne. Dans la tour de la Chaîne, six hommes pèsent sur le treuil, et la grande chaîne des Passes descend dans l'eau noire, maillon par maillon, avec un bruit que toute la ville entend.",
    { if: { has: "morvan=fui" }, text: "C'est Morvan lui-même qui a donné l'ordre, debout dans la tour, son manteau trempé, l'ordre signé à la main. Les gardes de la Chaîne obéissent au papier. Ils ont toujours obéi au papier." },
    { if: { has: "elu=morvan" }, text: "Le nouveau Doyen a signé son premier ordre avant même de s'asseoir. On l'a porté en barque à la tour, avec la grande lanterne encore fumante." },
    { if: { all: [{ has: "chaine_ordre=signe" }, { not: { has: "elu=morvan" } }, { not: { has: "morvan=fui" } }] }, text: "L'ordre était signé. Le nom au bas était celui d'une secrétaire. Personne, à la tour, n'avait songé à demander qui elle était devenue entre-temps." },
    "Les quarante lanternes du large se mettent en mouvement. À l'aube, les vaisseaux d'Orcanne sont mouillés dans le bassin de Saint-Marc, les canons tournés vers le palais, et l'amiral Vasco Drenn débarque sur les marches avec une escorte et un sourire de visiteur.",
    "Il ne prend rien. Il n'en a pas besoin. Il présente au Conseil un traité de protection et une liste de péages. Le Conseil signe. Le Conseil signe toujours, quand les canons sont assez près.",
    "Escalombre garde son nom, son Doyen, ses lanternes. Elle a perdu ses Passes.",
  ]),
  F_incendie: fin("incendie", "La nuit du feu", [
    "À une heure, la marée tourne, et c'est à ce moment que la première flèche part. Personne ne saura jamais de quel côté.",
    { if: { has: "elu=morvan" }, text: "Bas-Port a vu les mains se lever pour Morvan. Bas-Port a compris ce que ça voulait dire pour la servante, pour les péages, pour les dix sièges qu'on ne lui donnerait jamais." },
    { if: { has: "nella=prison" }, text: "Bas-Port a attendu toute la nuit qu'on lui rende la servante. On ne la lui a pas rendue." },
    { if: { has: "jasse3=pris" }, text: "La rumeur a couru de barque en barque : le passeur Ferrant est pris, à la Tour, et on le pendra avec sa sœur." },
    "Une gaffe frappe un garde. Un garde tire. Une lanterne tombe dans une barque pleine de goudron de calfat. En dix minutes, la lagune devant le palais est un champ de feu, et le feu monte par les pontons jusqu'aux greniers du quai des Sels.",
    "Les entrepôts de la Maison des Sels brûlent jusqu'à l'aube. Le sel fond et coule dans les canaux en ruisseaux blancs. Bas-Port perd quarante barques et dix-sept des siens. Le Guet perd neuf hommes. La ville, au matin, sent la cendre mouillée.",
    "Sur la tour du palais, la grande lanterne est restée allumée toute la nuit, au-dessus de l'incendie. Personne n'a pensé à l'éteindre.",
  ]),
  F_guet: fin("guet", "La loi de la capitaine", [
    "À une heure, la marée tourne. Personne n'a vingt et une voix. Le sable du sablier est passé.",
    "Ysabeau Dorne monte à l'estrade. Elle ne s'assied pas dans le siège. Elle reste debout à côté, la main sur la garde de son épée.",
    "« Le Doyen est mort assassiné. Le Grand Argentier est sous les verrous. Le Conseil n'a pas su choisir. Jusqu'aux prochaines Hautes-Eaux, le Guet tiendra le palais, au nom de la loi et de rien d'autre. »",
    "Hélis Arnaud la regarde longtemps par-dessus ses lunettes. Puis elle referme son règlement. « Il n'y a pas d'article pour ça, capitaine. — Alors on en écrira un. »",
    "Pendant un an, Escalombre est gouvernée par une femme qui n'a jamais voulu gouverner. Les canaux sont propres, les péages justes, les procès rapides. Les conseillers s'ennuient. Les marchands se plaignent. La ville, pour la première fois depuis longtemps, dort.",
  ]),
  F_lanternes: fin("lanternes", "Le Conseil ouvert", [
    "À une heure, la marée tourne, et le Conseil des Lanternes compte quarante-cinq personnes au lieu de quarante. Dix d'entre elles ont les pieds mouillés depuis toujours.",
    "On ne vote pas le Doyen, cette nuit. On le votera à la prochaine lune, à quarante-cinq, et on se battra pendant un mois pour les voix des bateliers, qui se feront prier.",
    "Sur la lagune, les barques de Bas-Port restent jusqu'à l'aube devant le palais, les lanternes allumées, sans un cri. Au matin, elles rentrent. On dit qu'une vieille femme, en descendant les marches, a craché dans l'eau du Grand Canal en disant : « Voilà. Elle est à nous aussi, maintenant. »",
    "Les historiens d'Escalombre dateront de cette nuit le début de quelque chose. Ils ne seront jamais d'accord sur le nom à lui donner.",
  ]),
  F_nella: fin("nella", "La fille de l'eau", [
    "À une heure, la marée tourne, et une servante de dix-neuf ans s'assied dans le siège du Doyen.",
    "Elle s'y assied mal, au bord, comme sur une chaise de cuisine. Puis elle se souvient de sa mère qui la reprenait sur sa façon de tenir la tasse, et elle se redresse.",
    "Dehors, Bas-Port chante jusqu'au matin. Dans la salle, les conseillers des vieilles maisons se regardent sans rien dire. Ils ont voté pour une légende, et ils viennent de comprendre qu'une légende a dix-neuf ans, des mains de lingère, et pas la moindre intention de leur obéir.",
    "Les gazettes de Lisse appellent Escalombre « la ville de la servante ». Elles en rient pendant un an. Puis elles cessent d'en rire.",
  ]),
  F_valcor: fin("valcor", "La Doyenne Valcor", [
    "À une heure, la marée tourne, et Oriane Valcor est Doyenne d'Escalombre.",
    "Elle n'a promis la chaîne à personne. Elle n'a vendu sa clef à personne. Elle a, pour gouverner, vingt et une voix, ses propres phrases, et la liste de tous ceux qui ont tenté de l'acheter.",
    "Dans ses premières semaines, elle fait ce que sa tante faisait : elle écrit beaucoup, elle dort peu, elle reçoit tout le monde. Puis elle fait ce que sa tante ne faisait pas : elle publie ses lettres.",
    "On dit qu'elle garde dans le tiroir de son écritoire une page manuscrite, pliée en quatre, qu'elle relit les soirs de mauvais Conseil. Personne n'a jamais su ce qu'il y avait dessus.",
  ]),
  F_fils: fin("fils", "Les fils de Morvan", [
    "À une heure, la marée tourne, et Oriane Valcor est Doyenne d'Escalombre.",
    "Morvan est le premier à lui baiser la main. Il le fait longuement, devant tout le Conseil, pour que chacun voie.",
    "Les premiers mois sont doux. Les péages baissent pour les marchands de sel. La Maison des Sels obtient le monopole des huiles. Le Grand Argentier dîne au palais le jeudi. Chaque jeudi, il apporte un petit cadeau, et une petite demande.",
    "Oriane apprend que les fils qu'on tient ne se coupent pas. On les allonge. On les embrouille. On s'y habitue. Un soir d'hiver, en signant un décret qu'elle n'a pas lu, elle se surprend à tenir sa plume exactement comme sa tante.",
  ]),
  F_maree: fin("maree", "La Marée a choisi", [
    "À une heure, la marée tourne, et le père Anselme est Doyen d'Escalombre.",
    "Il gouverne comme il a gouverné le Temple : avec patience, avec de l'encens, et avec la mémoire de ce que chacun lui a confié. Les conseillers apprennent vite à se confesser à quelqu'un d'autre.",
    "La coupole verte est redorée. Les processions doublent. La Maison des Sels paie une dîme. Bas-Port reçoit des aumônes, beaucoup d'aumônes, et aucun siège.",
    "Il meurt quatre ans plus tard, dans son lit, d'une fièvre ordinaire. On fouille ses papiers. On y trouve des centaines de pages, classées, cachetées, avec des noms. On les brûle sans les lire, par prudence, dans la cour du Temple. La fumée est verte.",
  ]),
  F_morvan: fin("morvan", "Le Doyen du sel", [
    "À une heure, la marée tourne, et Hugues Morvan est Doyen d'Escalombre.",
    "La chaîne des Passes reste levée. Quelqu'un, cette nuit, a fait en sorte que personne ne puisse la baisser. Morvan l'apprend à deux heures du matin, dans son nouveau cabinet. Il casse un verre. Puis il en demande un autre.",
    "La flotte d'Orcanne attend trois jours au large. Puis elle lève l'ancre, sans un salut. L'amiral Drenn n'aime pas les associés qui ne livrent pas.",
    "Morvan gouverne bien. C'est le plus terrible. Les comptes sont justes, les canaux curés, les péages raisonnables. Il fait de la ville une maison bien tenue. Il en garde toutes les clefs.",
  ]),
  F_reflux: fin("reflux", "Le reflux", [
    "À une heure, la marée tourne. Personne n'a vingt et une voix.",
    "Hélis Arnaud frappe trois coups de marteau. « Le siège reste vide jusqu'aux prochaines Hautes-Eaux. » On éteint la grande lanterne. C'est la première fois en cent douze ans qu'on l'éteint avant l'aube.",
    "Pendant un an, Escalombre est gouvernée par personne, c'est-à-dire par tout le monde. Les factions se disputent les bureaux, les péages, les clefs. Les marchands de Lisse en profitent. Les contrebandiers aussi.",
    "La lagune, elle, monte et descend comme toujours. Elle n'a jamais eu besoin de Doyen.",
  ]),
};
