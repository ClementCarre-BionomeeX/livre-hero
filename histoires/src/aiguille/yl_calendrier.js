// L'Île Folle-Aiguille · side story « Le calendrier » (owes its question to Robinson Crusoe: what does a man alone keep
// of the world, once he has kept the count of its days?). The posts of the hut under the Table are notched from top to
// bottom, one notch a day, a deeper one for Sundays, over more than twenty years. The old man asks the child the date.
// He is wrong by nine days, lost in a fever long ago; the Doux keep his Sunday on a Tuesday. The child tells him the
// true date (yl:dit) or lets him keep his own (yl:garde). Wired in A4n_jours.
module.exports = {
  passages: {
    YL_poteaux: { act: "IV", title: "Le calendrier", place: "cabane", ambiance: "nature",
      text: [
        "Il pleut, ce matin-là, une de ces pluies d'île qui tombent d'un bloc, sans vent, si drues qu'on ne voit plus la cascade à vingt pas et qu'on l'entend seulement, plus fort que d'habitude, comme une foule qui gronde derrière un mur. Sauveur a rentré ses graines. Il est assis sur son tabouret, au milieu de la hutte, et il ne lit pas. Il regarde les poteaux.",
        "Tu les as vus cent fois sans les voir. La hutte tient sur six poteaux de bois dur, gros comme des cuisses d'homme, plantés en cercle, et ces six poteaux sont couverts d'entailles, de haut en bas, serrées comme les dents d'un peigne. Une entaille par jour. Une plus profonde, en travers, tous les sept. Une encoche ronde, au couteau, au début de chaque mois. Le premier poteau, celui de la porte, est noir de fumée et de mains, et ses entailles sont si vieilles que l'écorce a recouvert les premières ; le sixième, à côté de la couchette, n'est entaillé que jusqu'à la hauteur d'une poitrine.",
        "Tu fais le compte, sans le vouloir, du bout des yeux. Six poteaux. Trois ans et demi par poteau, à peu près. Un vertige te prend, comme au bord de la falaise de la Pointe, chez toi : tu regardes la vie d'un homme, couchée là en petits traits, et elle est plus longue que la tienne.",
        "« Tu comptes, dit Sauveur, sans se retourner. Tout le monde compte, la première fois. Les Doux, eux, ont cessé. Ils croient que ce sont des prières. » Il tend le bras, et pose un doigt sur la dernière entaille, toute fraîche, encore blanche. « Dis-moi, toi qui viens du monde. Quel jour sommes-nous ? »",
      ],
      choices: [{ label: "Compter sur tes doigts depuis Lannoz", to: "YL_date" }] },
    YL_date: { act: "IV", title: "Le calendrier", place: "cabane", ambiance: "nature",
      text: [
        "Tu comptes. Le départ de Morlenc, la Saint-Sylvestre en mer, les jours de calme qu'on a cessé de compter et que le livre de bord compte pour tout le monde, l'aiguade de Lannoz un dimanche, puisque la capitaine y a fait dire les prières sur le pont. Tu tombes sur un chiffre, tu recomptes, tu retombes dessus. On est le jeudi. Le seizième jour de février.",
        "Le vieil homme écoute. Puis il recompte à son tour, sur le poteau, du bout de l'ongle, en remuant les lèvres, et son ongle s'arrête neuf entailles plus loin que le tien, sur une entaille profonde, en travers. Pour lui, nous sommes le vingt-cinq. Et c'est dimanche.",
        "« Neuf jours, dit-il doucement. J'ai eu une fièvre, il y a longtemps. La première année, ou la deuxième. Je suis resté couché, je ne sais combien. Quand je me suis relevé, j'ai compté ce qui me paraissait juste, d'après la lune. » Il rit, un petit rire sec. « La lune ment aussi, comme les compas. Tout ment, ici. Il faudrait le faire graver au-dessus de l'anse. »",
        "Il se tait. Tu comprends, à sa figure, ce que ces neuf jours veulent dire. Depuis vingt ans, il fait dimanche le mardi. Il se lave, ce jour-là, il met la seule chemise qu'il garde pour ça, il lit à voix haute un livre de prières aux arbres. Et les Doux, là-haut, au Haut-Verger, qui ont appris de lui la semaine, se reposent le même jour que lui, endimanchés, en chantant, depuis vingt ans, un mardi.",
        "« Alors ? dit-il. Toi qui es sûr{e} de ton compte. Qu'est-ce que je fais de mes neuf jours ? »",
      ],
      choices: [
        { label: "Lui dire de les rattraper : le monde est là, dans l'anse, il faut se remettre à son heure", fx: { flag: "yl:dit" }, to: "YL_dit" },
        { label: "Lui dire de les garder : ici, c'est son compte qui fait foi", fx: { flag: "yl:garde" }, to: "YL_garde" },
      ] },
    YL_dit: { act: "IV", title: "Le calendrier", place: "cabane", ambiance: "nature",
      text: [
        "Il t'écoute jusqu'au bout. Puis il prend son couteau, et sur le sixième poteau, à côté de la dernière entaille, il en taille neuf autres d'un coup, très vite, comme on arrache une dent. Neuf petits traits blancs, serrés, plus courts que les autres, qui ne ressemblent à aucun jour.",
        "« Voilà. Je suis à l'heure du monde. » Il regarde les neuf traits. « C'est curieux. J'ai l'impression de les avoir vécus d'un seul coup, et qu'ils n'étaient pas bons. »",
        "Le lendemain, il monte au Haut-Verger annoncer aux Doux que le dimanche est désormais le jeudi. Tu le sais parce qu'il revient le soir avec une figure de prédicateur lapidé. Mère Aubépine, leur ancienne, lui a répondu devant tout le village, que Dieu avait sûrement l'habitude de ses mardis, après vingt ans, et qu'il n'allait pas changer de jour pour faire plaisir à un enfant de passage.",
        "« Elle a raison, dit-il en s'asseyant. C'est ce qui est vexant. »",
      ],
      choices: [{ label: "Rentrer le bois avant la nuit", back: "A4n_jours" }] },
    YL_garde: { act: "IV", title: "Le calendrier", place: "cabane", ambiance: "nature",
      text: [
        "Il te regarde longtemps, de ses yeux pâles, comme s'il cherchait sur ta figure si tu te moquais. Puis il hoche la tête, et passe la main, à plat, sur le sixième poteau, sur toutes ses entailles justes et fausses à la fois, comme on caresse un chien qu'on vient de gronder pour rien.",
        "« Tu as raison. Ce sont mes jours. Ils sont faux, mais je les ai tous faits. » Il remet son couteau à sa ceinture. « Et puis, entre nous, le monde peut bien attendre neuf jours. Il m'a bien fait attendre vingt ans. »",
        "Le lendemain est un jeudi pour toi. Pour la hutte, c'est le vingt-six, un lundi. Il se lève comme d'habitude, avant l'aube, grille ses graines, se baigne dans la vasque avec son grand bruit d'éléphant. Mardi, il mettra sa chemise blanche. Tu te surprends à penser que tu la mettrais aussi, si tu en avais une.",
      ],
      choices: [{ label: "Rentrer le bois avant la nuit", back: "A4n_jours" }] },
  },
  extras: {
    quests: [
      { id: "YL", act: "IV", kind: "annexe", title: "Le calendrier", start: "YL_poteaux", doit: "robinson", echo: ["yl:dit", "yl:garde"] },
    ],
  },
};
