// L'Île Folle-Aiguille · act V, chapter V.3 followed by the doctor: the last morning round in the nave, before going
// down to the cove. A gabier dying of the marsh fever who confesses a Morlenc murder another man hanged for; the sailors'
// wills, dictated all at once; a girl of the Gentle who brings fruit and the bark that makes one forget. Wired in
// A5x_debut (made a hub).
module.exports = {
  passages: {
    XZ_fievre: { act: "V", title: "La fièvre", place: "misericorde", ambiance: "temple",
      text: [
        "Au fond de la nef, sous le vitrail crevé où pend une liane, Mathurin Le Bris, gabier de misaine, brûle depuis trois jours de la fièvre des marais. Il l'a prise dans la mangrove, une nuit de corvée d'eau, avec un millier de moustiques et pas une plainte. Victorine lui a donné tout son quinquina, et le quinquina a perdu.",
        "Il a les yeux grands ouverts, très brillants, et il voit des choses au plafond. Des choses qui le regardent aussi, à en juger par la manière dont il leur répond. Puis, vers l'aube, la fièvre se retire un moment, comme la mer avant la grande vague, et il la reconnaît.",
        "« Docteur. Il y a pas de curé, ici. — Il y a moi. — Vous ferez l'affaire. Vous savez écrire, et Dieu, il paraît, sait lire. »",
        "Il lui prend le poignet, avec une force de mourant, qui est la plus grande force du monde, et il raconte. Morlenc, il y a dix-neuf ans. Une nuit d'hiver, une rixe à la sortie de la Truie-qui-file, rue du Bas-Port. Un marchand de toile, pour une bourse de neuf livres, un coup de couteau de trop. Il s'est enfui. On a pris un autre, un portefaix ivre qui dormait sous le porche, du sang plein la chemise, le sang du marchand, sur lequel il était tombé. On l'a pendu à la Croix-des-Marées six semaines plus tard. Le Bris était dans la foule. Il a regardé jusqu'au bout. Il s'appelait Corentin Le Floch, le portefaix. Il criait qu'il n'avait rien fait, et c'était vrai, et personne ne l'a cru, parce que c'est ce que crient tous ceux qu'on pend.",
        "« Il avait une mère, dit Le Bris. Rue des Tonneliers. Elle doit être morte. »",
      ],
      choices: [
        { label: "Écrire l'aveu, mot pour mot, et le lui faire signer d'une croix", to: "XZ_fievre_ecrit" },
        { label: "Lui dire qu'il est pardonné, et lui fermer les yeux quand ce sera l'heure", to: "XZ_fievre_absous" },
      ] },
    XZ_fievre_ecrit: { act: "V", title: "L'aveu", place: "misericorde", ambiance: "temple",
      text: [
        "Victorine écrit sur la dernière page blanche de son carnet de bord, à la lueur d'une lanterne qui pâlit à mesure que le jour entre par le vitrail. Elle écrit le nom, la date, la rue, les neuf livres, le couteau, le portefaix. Elle relit à voix haute. Le Bris approuve chaque phrase d'un battement de paupières.",
        "Il trace la croix. Elle fait signer comme témoins les deux hommes les plus proches, qui ne savent pas ce qu'ils signent et le font par respect pour la médecin. Elle date, elle signe, elle sèche l'encre en soufflant dessus.",
        "« Ça servira à quoi, docteur ? Il est mort, Hamon. — À ce qu'on ôte son nom du registre de la Prévôté. À ce que sa mère, si elle vit, puisse se promener rue des Tonneliers la tête haute. Aux morts, on ne rend que leur nom. C'est peu. C'est déjà ça. »",
        "Le Bris sourit, de toute sa figure creusée, et la fièvre revient le chercher. Il meurt à midi, tranquille, en répétant le nom de Le Floch, comme on récite une leçon qu'on a enfin apprise.",
      ],
      choices: [{ label: "Fermer le carnet, et fermer ses yeux", fx: { flag: "xz:aveu_ecrit" }, back: "A5x_debut" }] },
    XZ_fievre_absous: { act: "V", title: "L'absolution", place: "misericorde", ambiance: "temple",
      text: [
        "Victorine pose la main sur le front brûlant, comme elle l'a vu faire à l'abbé Morisseau mille fois, et elle dit les mots. Elle les sait par cœur ; elle les a entendus au chevet de tous ses mourants depuis quinze ans, prononcés la bouche pleine. Elle les dit mieux que lui.",
        "Le Bris ferme les yeux. Ses mains se détendent sur la couverture. La peur s'en va de sa figure, d'un coup, comme une marée basse qui découvre une plage lisse.",
        "Il meurt à midi, en paix. Victorine reste assise à côté de lui longtemps après, sans bouger, dans la lumière verte du vitrail. Elle a donné la paix à un assassin. Elle a gardé pour elle le nom d'un pendu innocent, rue des Tonneliers, et elle ne sait plus très bien, maintenant, lequel des deux elle a trahi. Les curés, pense-t-elle, doivent avoir un estomac solide.",
      ],
      choices: [{ label: "Se lever, et continuer la tournée", fx: { flag: "xz:absous" }, back: "A5x_debut" }] },

    XZ_testaments: { act: "V", title: "Les testaments", place: "misericorde", ambiance: "temple",
      text: [
        "La rumeur a couru dans la nef pendant la nuit : la médecin sait écrire, et l'on part demain sur une mer qui a déjà mangé assez de monde. Au matin, ils font la queue devant la table de la sacristie, le bonnet à la main, en se poussant du coude, pour dicter leurs dernières volontés.",
        "Les dernières volontés d'un matelot tiennent en général en trois lignes et une dette. Victorine écrit. Le premier lègue son couteau à son frère, et sa part de trésor à une femme de Lannoz dont il ne connaît que le prénom et la maison, la troisième après la fontaine. Le second lègue tout à sa mère, sauf sa chemise rouge, qu'il lègue à une autre femme de Lannoz, la troisième après la fontaine. Ils se regardent. Ils ne disent rien. Victorine non plus. Elle écrit.",
        "Un vieux matelot lègue son âme à Dieu, son corps à la mer et ses dettes au baron, « qui a les moyens ». Un jeune lègue un perroquet qu'il n'a pas encore attrapé. Un autre dicte, très pâle, une seule phrase, qui ne concerne aucun bien : *Dire à mon père que je ne lui en veux pas.* Il demande qu'on souligne *pas*. Victorine souligne deux fois.",
        { if: { marin: "arnoult", is: ["loyal", "hesitant"] }, text: "Le dernier de la file est Petit-Jules, le novice, qui n'a rien. Il réfléchit très fort, le front plissé, et finit par léguer à la médecin elle-même « la chanson que le maître-coq m'a chantée la nuit de l'épaule, vu que je ne sais pas à qui d'autre la donner »." },
        { if: { not: { marin: "arnoult", is: ["loyal", "hesitant"] } }, text: "Le dernier de la file n'a rien à léguer et ne sait pas pourquoi il a fait la queue. Il reste planté devant la table, le bonnet tordu entre les mains, puis il dit qu'il voulait seulement voir quelqu'un écrire son nom, une fois, en entier. Victorine l'écrit, en belles lettres, sur une feuille à part, et la lui donne. Il la plie en huit et la met dans son soulier." },
      ],
      choices: [{ label: "Plier les testaments, et les ranger dans la trousse", fx: { flag: "victorine:testaments" }, back: "A5x_debut" }] },

    XZ_ecorce: { act: "V", title: "L'écorce", place: "misericorde", ambiance: "nature",
      text: [
        "Chaque matin, une fille des Doux monte du Haut-Verger jusqu'à la porte de la chapelle, un panier de fruits sur la hanche, le pied nu, une fleur de frangipanier derrière l'oreille. Elle s'appelle Pervenche, comme toutes les filles là-haut s'appellent d'une fleur, et elle sourit à tout, aux sentinelles, aux mousquets, aux morts, avec la même douceur égale, comme le soleil sourit sur un champ de bataille.",
        "Ce matin, au fond du panier, sous les mangues, il y a autre chose : une poignée de lanières d'écorce brune, roulées comme du tabac. Pervenche en prend une, la tend à Victorine, et mime le geste de mâcher, puis celui de dormir, la joue sur ses mains jointes, avec un air de grande bonté.",
        "Victorine sait ce que c'est. Elle a vu les Doux la mâcher, au Haut-Verger : ils oublient. Pas tout à coup. Un peu chaque jour, la veille, l'avant-veille, l'année d'avant, jusqu'à ce qu'ils ne gardent plus que le matin présent, la mangue, le soleil, le nom de fleur qu'on leur a donné. Ils sont heureux. Ils ont l'air de fantômes heureux.",
        "Elle tient la lanière entre deux doigts. Elle pense à Hector, au portrait contre le mur, au tiroir aux mauvaises nouvelles, à quinze ans de dettes ; elle pense à tous les mourants dont elle sait le nom de la mère. Une seule lanière, pense-t-elle, pour une seule nuit sans rêver. Hector aurait compris.",
        { if: { seen: "XL_cave" }, text: "Hector a écrit la même chose sur une étiquette, autrefois, de sa main penchée : *Pour dormir sans rêver de V.* Elle n'avait jamais pensé qu'un jour elle aurait envie de lui donner raison." },
      ],
      choices: [
        { label: "Mâcher la lanière, une seule, ce soir", to: "XZ_ecorce_machee" },
        { label: "La rendre à Pervenche, et garder tout ce qu'elle se rappelle", to: "XZ_ecorce_rendue" },
      ] },
    XZ_ecorce_machee: { act: "V", title: "L'écorce", place: "misericorde", ambiance: "nature",
      text: [
        "L'écorce est amère, puis sucrée, puis plus rien. Victorine s'endort sur sa paillasse de la sacristie comme on tombe dans un puits sans fond, sans rien voir défiler sur les parois.",
        "Elle se réveille deux heures plus tard, reposée comme elle ne l'a pas été depuis des années. Il lui manque quelque chose. Elle cherche longtemps. Elle ne sait plus la couleur des yeux d'Hector. Elle sait qu'ils étaient beaux ; elle sait qu'elle les a regardés pendant douze ans. La couleur est partie, comme une étiquette qu'on décolle de travers, et il ne reste qu'un morceau de papier blanc.",
        "Elle reste assise, les mains sur les genoux, à se demander si c'est une perte ou un cadeau. Elle conclut, en médecin, qu'on ne peut pas encore se prononcer, et qu'il faudra revoir la malade dans quelques années.",
      ],
      choices: [{ label: "Reprendre la tournée", fx: { flag: "victorine:ecorce_machee" }, back: "A5x_debut" }] },
    XZ_ecorce_rendue: { act: "V", title: "L'écorce", place: "misericorde", ambiance: "nature",
      text: [
        "Victorine remet la lanière dans le panier, sous les mangues, et referme la main de Pervenche dessus. La fille la regarde sans comprendre, puis sourit quand même, parce qu'elle sourit à tout.",
        "« Je garde mes morts, dit Victorine. C'est mon métier. Il faut bien que quelqu'un les garde. »",
        "Pervenche hoche la tête, poliment, comme on approuve un étranger qui parle une langue inconnue, et redescend vers le verger en chantant. Victorine prend une mangue. Elle est mûre à éclater, chaude de soleil, d'un sucre presque écœurant. Elle la mange jusqu'au noyau, debout sur le seuil, en se rappelant tout.",
      ],
      choices: [{ label: "Reprendre la tournée", fx: { flag: "victorine:ecorce_rendue" }, back: "A5x_debut" }] },
  },
  extras: {},
};
