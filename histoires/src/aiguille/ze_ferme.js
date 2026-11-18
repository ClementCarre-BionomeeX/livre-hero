// L'Île Folle-Aiguille · side story « La ferme du haut de la lande » (owes its question to Wuthering Heights: can a love
// outlive death, and the one who is left?). Caught by a storm on the moor of Lannoz, the child asks shelter at a lone
// farm. The farmer, Kerbrat, grey, hard, puts the child in a box-bed in a shut room. At night a hand knocks at the
// window, a girl's voice asks to come in, Rozenn, Rozenn. In the morning the child tells Kerbrat (ze:dit) or keeps it
// (ze:tu). Wired in A3o_lannoz.
module.exports = {
  passages: {
    ZE_orage: { act: "III", title: "La ferme du haut de la lande", place: "lannoz", ambiance: "nuit",
      text: [
        "L'orage te prend sur la lande de Lannoz, à deux heures de l'anse, en revenant des tourbières. Il arrive de l'ouest comme une armée, un mur noir qui avale les collines une à une, et quand il te rattrape, il fait nuit en plein après-midi, une nuit violette, zébrée, où la pluie tombe de côté, si dure qu'elle fait mal aux joues.",
        "Tu cours. Tu ne sais pas où. Puis une lumière, au sommet d'une colline, une seule, jaune, carrée : une fenêtre. Une ferme. Une longue maison de pierre grise, basse, accroupie dans le vent comme une bête, avec trois sapins tordus qui se penchent tous du même côté, celui où le vent les pousse depuis cent ans.",
        "Tu frappes. Un chien aboie. La porte s'ouvre sur un homme. Grand, voûté, grisonnant, avec une figure dure et belle, brûlée de soleil et de colère, et des yeux noirs qui te regardent de haut en bas sans aucune bienveillance. Derrière lui, une salle basse, un feu de tourbe, une vieille servante qui file dans un coin.",
        "« Un mousse du navire, dit-il, dans la langue du Ponant, avec l'accent de Lannoz. Tu as de la chance que je ne sois pas un chien. Entre. Tu dormiras ici. Tu repartiras à l'aube. Tu ne toucheras à rien. »",
      ],
      choices: [{ label: "Entrer", to: "ZE_lit" }] },
    ZE_lit: { act: "III", title: "La ferme du haut de la lande", place: "lannoz", ambiance: "nuit",
      text: [
        "Il ne te parle pas de la soirée. Il mange sa soupe en regardant le feu. La servante te donne la tienne, du pain, un bol de lait, et, quand Kerbrat monte se coucher, te conduit à l'étage par un escalier de pierre, une chandelle à la main. Elle ouvre une porte au bout d'un couloir. « La chambre d'en haut, dit-elle à voix basse. Le maître ne veut pas qu'on y dorme. Mais il n'y a qu'elle. Ne lui dis pas. »",
        "C'est une petite chambre nue, glacée, avec un lit clos de chêne noir, sculpté, fermé par des volets à coulisse, comme une armoire où l'on se coucherait. Dans le lit clos, sur la tablette, il y a de vieux livres de prières, moisis, et sur le bois, à l'intérieur, gravés au couteau, partout, cent fois, un nom. *Rozenn.* *Rozenn Kerbrat.* *Rozenn Le Bourhis.* *Rozenn.* Une écriture de fille, appliquée, puis rageuse, puis appliquée encore.",
        "Tu te couches. Tu fermes les volets du lit. Il y a une petite fenêtre carrée à l'intérieur, derrière la tête, qui donne sur la lande. L'orage gronde, tourne autour de la maison, revient. Une branche de sapin frotte contre la vitre, à chaque rafale, avec un bruit de doigts.",
        "Tu t'endors.",
      ],
      choices: [{ label: "Te réveiller", to: "ZE_vitre" }] },
    ZE_vitre: { act: "III", title: "La ferme du haut de la lande", place: "lannoz", ambiance: "nuit",
      text: [
        "Tu te réveilles parce que la branche frappe. Elle frappe autrement. Pas au hasard des rafales : trois coups, un silence, trois coups. Tu tends la main, dans le noir, pour ouvrir la petite fenêtre et casser la branche. Tes doigts ne trouvent pas de branche.",
        "Ils trouvent une main.",
        "Petite, glacée, mouillée, une main de fille, qui se referme sur la tienne avec une force terrible, à travers le carreau ouvert, dans la nuit et la pluie. Et une voix, tout près, contre la vitre, une voix d'enfant qui pleure et qui grelotte : « Laisse-moi entrer. Laisse-moi entrer. Je me suis perdue sur la lande. Ça fait vingt ans que je marche. Laisse-moi entrer. »",
        "Tu tires ta main. Elle ne lâche pas. Tu tires encore, de toutes tes forces, et le froid te monte jusqu'au coude, et tu cries, enfin, un cri qui t'arrache la gorge. La main lâche. La fenêtre claque. Il n'y a plus que la pluie, et la branche de sapin, qui frotte contre la vitre, au hasard des rafales.",
        "La porte de la chambre s'ouvre à la volée. Kerbrat est là, en chemise, une chandelle à la main, la figure blanche comme la cire. Il ne te regarde pas. Il regarde la petite fenêtre du lit clos.",
        "« Qu'est-ce que tu as vu ? dit-il d'une voix que tu ne lui connaissais pas. Qu'est-ce que tu as entendu ? Dis-le. »",
      ],
      choices: [
        { label: "Lui dire la main, la voix, et vingt ans sur la lande", fx: { flag: "ze:dit" }, to: "ZE_dit" },
        { label: "« Un cauchemar. La branche. Rien. »", fx: { flag: "ze:tu" }, to: "ZE_tu" },
      ] },
    ZE_dit: { act: "III", title: "La ferme du haut de la lande", place: "lannoz", ambiance: "nuit",
      text: [
        "Tu le dis. Il écoute sans bouger. Quand tu as fini, il pose la chandelle sur la tablette du lit clos, à côté des livres moisis, et il te pousse dehors, dans le couloir, sans brutalité, comme on écarte une chaise. Il entre dans le lit clos. Il ouvre la petite fenêtre, en grand, sur la nuit et la pluie.",
        "« Rozenn, dit-il. Rozenn. Entre. Je suis là. Entre, je t'en supplie, une fois, une seule. Rozenn. » Il pleure. Cet homme dur, gris, terrible, pleure à genoux dans le lit d'une morte, la tête dehors, sous l'averse, en appelant un nom dans la nuit comme on appelle un chien perdu. Le vent entre par la fenêtre et éteint la chandelle. Rien ne répond. Rien que la pluie et la branche.",
        "Au matin, la servante te sert ton lait en silence. Kerbrat est assis dans la salle, devant le feu éteint, trempé, les cheveux collés au front, et il ne te regarde pas. Quand tu pars, il dit seulement, sans se retourner : « Elle avait seize ans. Comme toi. Son père l'a mariée au fils Le Bourhis, à cause des terres. Elle est revenue ici, pour mourir, l'hiver d'après. Je n'étais pas là. J'étais en mer. » Il se tait. « Depuis, je l'attends. Elle frappe chez les autres. Jamais chez moi. »",
      ],
      choices: [{ label: "Redescendre vers l'anse", fx: { quest: "ZE" }, back: "A3o_lannoz" }] },
    ZE_tu: { act: "III", title: "La ferme du haut de la lande", place: "lannoz", ambiance: "nuit",
      text: [
        "Il te regarde longtemps, à la lueur de la chandelle. Il voit que tu mens. Tu le vois voir. Il voit aussi, sur le dos de ta main, les marques rouges de quatre doigts fins, comme une brûlure de froid, qui commencent déjà à bleuir.",
        "Il pose la chandelle sur la tablette du lit clos, il ferme la petite fenêtre, il pousse le loquet, et il reste là, debout, la main à plat sur le carreau, longtemps, comme on pose la main sur la vitre d'une voiture qui s'en va. Puis il sort, et referme la porte derrière lui, doucement.",
        "Au matin, la servante te sert ton lait en silence. Kerbrat n'est pas là. Elle te dit qu'il est parti sur la lande avant l'aube, sans manger, comme il le fait quelquefois, vers le cimetière de la chapelle des landes, à trois lieues, où il n'entre jamais, et devant le mur duquel il reste assis jusqu'au soir. « Vous avez dormi dans la chambre d'en haut, dit-elle. Je n'aurais pas dû. Pardonnez-moi. » Elle regarde ta main. « Elle aussi. Elle ne fait pas exprès. Elle a froid. »",
      ],
      choices: [{ label: "Redescendre vers l'anse", fx: { quest: "ZE" }, back: "A3o_lannoz" }] },
  },
  extras: {
    quests: [
      { id: "ZE", act: "III", kind: "annexe", title: "La ferme du haut de la lande", start: "ZE_orage", doit: "hurlevent", echo: ["ze:dit", "ze:tu"] },
    ],
  },
};
