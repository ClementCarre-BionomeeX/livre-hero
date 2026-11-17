// L'Île Folle-Aiguille · side story « La dernière nuit de Brisegrève » (owes its question to The Last Day of a Condemned
// Man: what is a man's last night worth, and to whom does it belong?). At Brisegrève a deserter of twenty-two, Aubin
// Kerrien, is to be shot at dawn on the glacis of the fort. The governor Lebihan asks the doctor to certify him fit to
// die. The young man asks her to stay the night with him, and to carry his words to a girl in Varnèse. She gives him
// a dose of laudanum to sleep through the night (yy:dort), stays awake with him to the end (yy:veille), or writes
// down the last night word for word (yy:ecrit). Wired in A3v_brisegreve.
module.exports = {
  passages: {
    YY_billet: { act: "III", title: "La dernière nuit", place: "brisegreve", ambiance: "chateau",
      text: [
        "Le billet du gouverneur Lebihan arrive à bord au coucher du soleil, porté par un sergent qui reste au garde-à-vous sur le pont pendant que Victorine le lit, comme si le papier lui-même était un officier. *Le gouverneur présente ses compliments au médecin de la Cormorane et le prie de bien vouloir, en l'absence du chirurgien du fort, malade, venir constater ce soir l'état de santé d'un condamné, dont l'exécution est fixée à demain, six heures.*",
        "« L'état de santé, dit Victorine au sergent. Pour quoi faire ? »",
        "Le sergent rougit jusqu'aux oreilles. « Le règlement, madame. On ne fusille pas un homme malade. Il faut qu'il soit en état. Sinon on attend qu'il guérisse. » Il réfléchit. « Ça fait des frais de geôle. Le gouverneur n'aime pas les frais. »",
      ],
      choices: [{ label: "Prendre ta trousse", to: "YY_cellule" }] },
    YY_cellule: { act: "III", title: "La dernière nuit", place: "brisegreve", ambiance: "souterrain",
      text: [
        "La cellule est au pied de la tour du nord, à fleur d'eau. Les murs suintent. On entend la mer, de l'autre côté, battre contre la roche avec une régularité d'horloge, et l'on comprend vite qu'on l'entendra toute la nuit, et qu'on comptera les coups. Il y a une paillasse, une cruche, un seau, une chandelle neuve, qu'on a donnée au condamné par faveur, pour qu'il puisse voir sa dernière nuit.",
        "Il s'appelle Aubin Kerrien. Il a vingt-deux ans, une figure d'enfant de chœur, des taches de rousseur, des cheveux roux coupés court pour le peloton. Soldat de la garnison, il a déserté au printemps, dans un canot volé, pour retourner à Varnèse, où une fille l'attendait. On l'a repris à Lannoz, au bout de trois jours, en train de dormir sous la barque. Le Conseil de guerre a délibéré onze minutes.",
        "« Vous êtes de Varnèse, dit-il, quand elle lui prend le pouls. Le sergent me l'a dit. Vous êtes le médecin de Varnèse. » Il sourit. Il a un sourire terrible, parce qu'il est content. « Vous connaissez Jeannette Guillou ? La fille du tonnelier, rue des Fours ? »",
        "Victorine la connaît. Elle l'a soignée d'une rougeole à six ans, et elle l'a vue se marier, l'automne dernier, avec le fils du meunier, à l'église de Varnèse, en robe de dentelle, enceinte de trois mois. Elle se tait. Le pouls d'Aubin Kerrien bat sous ses doigts, régulier, solide, celui d'un garçon de vingt-deux ans en parfaite santé, qui sera mort demain à six heures et cinq minutes.",
        "« Restez un peu, docteur, dit-il. Le sergent a dit que vous pourriez rester, si vous vouliez. Il est minuit dans six heures. Non, je veux dire, il est six heures dans six heures. » Il rit, de son erreur. « C'est long, six heures. C'est court aussi. Je ne sais pas encore. »",
      ],
      choices: [{ label: "Rester", to: "YY_nuit" }] },
    YY_nuit: { act: "III", title: "La dernière nuit", place: "brisegreve", ambiance: "souterrain",
      text: [
        "Elle reste. Il parle. Il parle de Jeannette, de la rue des Fours, de l'odeur de la tonnellerie, du pardon de Varnèse où ils ont dansé, de la barque qu'il comptait acheter. Il parle du canot volé, de la nuit en mer, des étoiles. Il parle du Conseil de guerre, du colonel qui bâillait. Puis il ne parle plus. Il regarde la chandelle, qui a baissé d'un pouce.",
        "Vers une heure, il tremble. Ce n'est pas le froid. Ça commence par les mains, et ça gagne les épaules, puis les dents, et il serre les dents pour que ça ne s'entende pas, et ça s'entend quand même. « Je n'ai pas peur, dit-il. C'est mon corps. Il ne sait pas. Il croit qu'il va vivre encore cinquante ans, il ne comprend pas pourquoi je l'empêche. »",
        "Dans la trousse de Victorine, il y a la fiole de laudanum. Une dose forte, et il dormira jusqu'à ce qu'on vienne le chercher, et se réveillera à peine, et marchera jusqu'au glacis dans un brouillard, et ne sentira presque rien. Il y a aussi l'encre et le papier. Et il y a elle, qui peut rester, les yeux ouverts, jusqu'au bout.",
        "Il voit qu'elle regarde la fiole. Il la regarde aussi. « C'est ma nuit, docteur, dit-il doucement. La dernière. Je ne sais pas ce qu'il faut en faire. Vous, vous savez peut-être. Vous en avez vu, des gens qui finissent. »",
      ],
      choices: [
        { label: "Lui donner le laudanum, pour qu'il dorme jusqu'à l'aube", fx: { flag: "yy:dort" }, to: "YY_dort" },
        { label: "Garder la fiole fermée, et veiller avec lui jusqu'au bout", fx: { flag: "yy:veille" }, to: "YY_veille" },
        { label: "Prendre le papier, et lui proposer d'écrire sa nuit, mot pour mot", fx: { flag: "yy:ecrit" }, to: "YY_ecrit" },
      ] },
    YY_dort: { act: "III", title: "La dernière nuit", place: "brisegreve", ambiance: "souterrain",
      text: [
        "Il boit la cuillère, puis une seconde, en faisant la grimace, comme un enfant qui prend de l'huile de foie de morue. Il se couche sur la paillasse. Il tient la main de Victorine. Au bout d'un quart d'heure, ses doigts se desserrent. Il dort, la bouche ouverte, avec un petit ronflement d'enfant.",
        "Elle reste à côté de lui jusqu'à l'aube, à écouter la mer contre la tour. Quand le sergent ouvre la porte, à cinq heures et demie, Aubin Kerrien se lève, les yeux vagues, docile, aimable, et demande s'il a manqué la soupe. Il marche jusqu'au glacis entre deux soldats qui le soutiennent un peu. Il sourit aux mouettes. Il ne voit pas le peloton. Victorine, sur le rempart, a vu des gens mourir de cent façons. Elle n'a jamais vu personne mourir avec tant de politesse.",
        "Le gouverneur Lebihan la remercie de son certificat. *Condamné en état.* Il dit qu'elle a rendu les choses beaucoup plus faciles pour tout le monde. Elle se demande, en redescendant au canot, pour qui exactement.",
      ],
      choices: [{ label: "Regagner la Cormorane", back: "A3v_brisegreve" }] },
    YY_veille: { act: "III", title: "La dernière nuit", place: "brisegreve", ambiance: "souterrain",
      text: [
        "Elle range la fiole au fond de la trousse, et elle s'assied sur la paillasse, à côté de lui, l'épaule contre son épaule, et elle ne dit rien. Il tremble. Elle le laisse trembler. Elle compte les coups de la mer avec lui, à voix basse, à partir d'un moment, parce que c'est lui qui a commencé à les compter, et qu'il ne faut pas laisser quelqu'un compter seul.",
        "Vers quatre heures, le tremblement s'arrête. Il dit : « Ça y est. Il a compris. » Il parle encore de Jeannette, mais autrement, comme d'une chose passée, finie, très belle, qu'il regarde de loin. Il demande à Victorine si elle croit en Dieu. Elle répond qu'elle ne sait pas. Il dit : « Moi non plus. C'est drôle. J'aurais cru qu'on savait, la dernière nuit. »",
        "À six heures, il marche jusqu'au glacis seul, sans qu'on le tienne, les yeux ouverts, et il regarde le peloton, et il regarde la mer, et il dit, très haut, d'une voix qui tremble à peine, « Bonjour, la mer », comme on salue quelqu'un de connaissance. Victorine, sur le rempart, ne détourne pas les yeux. Elle le lui avait promis, vers cinq heures. Il le lui avait demandé.",
      ],
      choices: [{ label: "Regagner la Cormorane", back: "A3v_brisegreve" }] },
    YY_ecrit: { act: "III", title: "La dernière nuit", place: "brisegreve", ambiance: "souterrain",
      text: [
        "Il ne comprend pas d'abord. Puis il comprend, et il rit. « Un livre ? Moi ? Je ne sais même pas écrire mon nom en entier. — Moi, je sais. Parlez. » Elle trempe la plume.",
        "Il parle. Elle écrit. Tout : le tremblement des mains, la chandelle qui baisse, la mer qui compte, la peur qui monte et qui redescend comme une marée, les souvenirs qui viennent dans le désordre, l'odeur du pardon de Varnèse, le colonel qui bâillait, la honte d'avoir envie de pleurer et l'envie de pleurer quand même. Il parle de plus en plus vite. Il découvre, en parlant, des choses qu'il ne savait pas qu'il pensait. Vers quatre heures, il dit : « Écrivez que je ne pardonne pas au colonel. Non. Écrivez que je lui pardonne. Non. Écrivez les deux. » Elle écrit les deux.",
        "À six heures, il y a quatorze feuillets couverts de l'écriture serrée de Victorine. Il les regarde, avant de sortir. « C'est moi, ça ? — C'est votre nuit. » Il hoche la tête. « Donnez-les à qui vous voudrez. Pas à Jeannette. Elle a dû se marier, à l'heure qu'il est ; elle a toujours été pressée. » Il le savait. Il sourit. Il sort.",
        "Sur le rempart, pendant la salve, Victorine tient les quatorze feuillets contre sa poitrine, sous son châle, à deux mains. Elle ne sait pas encore ce qu'elle en fera. Elle sait qu'elle ne les brûlera pas.",
      ],
      choices: [{ label: "Regagner la Cormorane", back: "A3v_brisegreve" }] },
  },
  extras: {
    quests: [
      { id: "YY", act: "III", kind: "annexe", title: "La dernière nuit de Brisegrève", start: "YY_billet", doit: "condamne", echo: ["yy:dort", "yy:veille", "yy:ecrit"] },
    ],
  },
};
