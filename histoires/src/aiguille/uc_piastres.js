// L'Île Folle-Aiguille · side story « Les piastres dans le sable » (owes its question to Conrad's Typhoon: what is a
// fair share when nobody can prove what was his?). Act IV, Fargue at the mutineers' camp: in the surf of the landing,
// the canoe carrying the sea-chests of Malandain's watch overturned; the chests burst, and the men's savings, piastres,
// livres and sous, lie mixed in the wet sand. Eleven men claim, and their claims add up to twice what was found. Fargue,
// who holds the pot, must divide. He splits it in equal shares (uc:egal), pays each man what he swears to, down to the
// last coin (uc:parole), or keeps it all as a common chest in his own keeping (uc:caisse). Wired in A4f_jours.
module.exports = {
  passages: {
    UC_ressac: { act: "IV", title: "Les piastres dans le sable", place: "plage", ambiance: "nature", second: true,
      text: [
        "Le canot des coffres a chaviré dans le ressac, le premier soir, à vingt pas de la plage, sous le poids de onze coffres de matelots entassés trop haut. On a repêché les hommes. On a repêché les coffres, aussi, ou ce qu'il en restait : du bois fendu, des charnières tordues, des chemises mouillées. Et dans le sable de la laisse, sur trente pas de long, l'argent. Les économies de toute une bordée, éparpillées par la vague comme des coquillages, piastres d'argent, livres, sous de cuivre, une bague, une montre qui ne marche plus.",
        "On a ramassé à genoux, toute la nuit, à la lanterne, en tamisant le sable entre ses doigts. Au matin, il y a sur une voile étendue devant la cuisine de Fargue un tas brillant et sale, que personne n'ose toucher, et onze hommes assis en rond autour, qui se regardent comme des chiens autour d'un os. Fargue compte. Il compte deux fois, à voix haute. Trois cent douze livres, en tout, au change de Morlenc.",
        "Puis il demande à chacun combien il avait. Boucaut dit soixante. Coquerel dit quarante. Le petit Le Duff, qui n'a jamais rien eu, dit trente, et rougit. Les autres disent leur chiffre. Fargue fait l'addition, dans le sable, avec un bâton. Six cent vingt livres. Il regarde le tas. Il regarde les onze. Il y en a qui mentent, et beaucoup. Il le sait. Eux aussi.",
      ],
      choices: [{ label: "Demander à Lagadec, qui a vu les coffres à bord, ce qu'il en pense", to: "UC_lagadec" }] },
    UC_lagadec: { act: "IV", title: "Les piastres dans le sable", place: "plage", ambiance: "nature", second: true,
      text: [
        "Lagadec fume sa pipe en regardant le tas. Il dit que Boucaut n'a jamais eu soixante livres de sa vie, qu'il boit sa paie avant de la toucher, mais que Boucaut avait une bague, celle-là, sa mère, et qu'elle vaut plus que sa parole. Il dit que Coquerel a dit vrai, c'est un avare, il couche avec son coffre. Il dit que le petit Le Duff a menti aussi, mais à l'envers : il avait cinquante livres, cousues dans la doublure de sa vareuse, l'argent de sa sœur, qu'il voulait lui rapporter, et il n'a pas osé dire un chiffre si gros devant les autres.",
        "Il dit que les autres, il ne sait pas. Il dit qu'on ne saura jamais. Il dit que la mer a fait comme elle fait toujours : elle a tout mélangé, le vrai et le faux, le juste et le voleur, et qu'elle a gardé la moitié pour elle, pour sa peine. Il dit qu'il ne voudrait pas être à la place de Fargue. Puis il ajoute, plus bas, que tout le camp regarde cette voile, que Malandain regarde aussi, et que la façon dont Fargue va partager trois cents livres dira à chacun comment il partagera le reste, plus tard, quand il y aura vraiment quelque chose à partager.",
        "Fargue n'a pas besoin qu'on le lui dise. Il le sait depuis le premier coup d'œil. Il tient la marmite, et la marmite, c'est le partage. Il s'accroupit devant le tas. Les onze se taisent.",
      ],
      choices: [
        { label: "Faire onze parts égales, et la bague à Boucaut, sans discussion", fx: { flag: "uc:egal" }, to: "UC_egal" },
        { label: "Payer à chacun ce qu'il jure, au prorata, en lui faisant jurer devant tous", fx: { flag: "uc:parole" }, to: "UC_parole" },
        { label: "Tout garder dans une caisse commune, sous sa garde, jusqu'au retour", fx: { flag: "uc:caisse" }, to: "UC_caisse" },
      ] },
    UC_egal: { act: "IV", title: "Les piastres dans le sable", place: "plage", ambiance: "nature", second: true,
      text: [
        "Il fait onze tas, avec ses mains, pièce par pièce, comme on sert la soupe : le même fond de louche pour chacun. Vingt-huit livres et quelques sous par homme. La bague, il la met de côté et la tend à Boucaut, sans un mot. La montre, il la jette à la mer, parce qu'elle ne marche plus et qu'on se battrait pour elle. Puis il dit que celui qui avait plus a perdu, que celui qui avait moins a gagné, que la mer ne fait pas de comptes, et que lui non plus.",
        "Coquerel, l'avare, qui avait vraiment quarante livres, proteste, pâle de rage. Deux autres le suivent. Fargue leur tend sa louche. Il dit que s'ils veulent faire les comptes, ils n'ont qu'à les faire avec la mer, et qu'il leur prêtera un canot. On rit. Coquerel prend ses vingt-huit livres. Il ne pardonne pas. Le petit Le Duff, qui en avait cinquante et en reçoit vingt-huit, ne dit rien. Il prend sa part et va s'asseoir à l'écart, et Fargue le voit compter et recompter, en remuant les lèvres, ce qu'il manque pour sa sœur.",
        "Le soir, Fargue va le trouver. Il lui donne, de sa propre bourse, vingt-deux livres, en lui disant que c'est une avance sur sa solde, et qu'il ne veut plus en entendre parler. Le Duff le regarde sans comprendre. Personne ne le saura. Fargue a fait la justice des onze en public et celle d'un seul en cachette, et il sait que ce n'est pas la même justice. Il pense que c'est la seule qu'il connaisse : celle de la louche, égale pour tous, et celle de la main, sous la table, pour ceux qu'on a vus.",
      ],
      choices: [{ label: "Retourner à la marmite", fx: { quest: "UC" }, back: "A4f_jours" }] },
    UC_parole: { act: "IV", title: "Les piastres dans le sable", place: "plage", ambiance: "nature", second: true,
      text: [
        "Il dit que chacun aura ce qu'il a dit, réduit de moitié, puisque la mer a pris la moitié. Mais qu'il jurera, d'abord, debout devant les dix autres, sur ce qu'il a de plus cher, que son chiffre est vrai. Il plante un aviron dans le sable, au milieu du cercle. On jurera la main sur l'aviron. Il dit que ceux qui veulent changer leur chiffre avant de jurer peuvent le faire maintenant. Il attend.",
        "Il y a un long silence. Puis Boucaut se lève et dit, la tête basse, que ce n'était pas soixante. Vingt. Et la bague. Un autre dit trente au lieu de cinquante. Un autre encore. Les chiffres fondent un par un, comme du lard dans la poêle. Le petit Le Duff se lève à son tour, rouge jusqu'aux oreilles, et dit que ce n'était pas trente, mais cinquante, l'argent de sa sœur, et qu'il avait eu honte. Les autres le regardent, stupéfaits. Personne ne se moque.",
        "Au bout du compte, il reste deux hommes qui maintiennent un chiffre que tout le monde sait faux. Ils jurent quand même, la main sur l'aviron, devant les dix, en regardant ailleurs. Fargue les paie. Il les paie exactement ce qu'ils ont juré, et il le fait lentement, pièce par pièce, devant tous, en disant le chiffre à voix haute à chaque fois. Le total tombe juste, à quelques sous près. La mer avait pris moins qu'on ne croyait.",
        "Les deux parjures ont l'argent. Ils ont aussi, désormais, les yeux du camp sur eux, chaque fois qu'on parle de partage. Fargue sait qu'il a fait payer deux menteurs en monnaie de honte, ce qui ne vaut rien et ce qui coûte cher. Il sait aussi qu'il a appris, en une heure, qui ment au camp et qui dit vrai, et que cela vaut plus que trois cents livres pour un homme qui prépare ce qu'il prépare. Il range cette pensée-là, comme il range toutes les autres. Elle ne lui fait pas honneur.",
      ],
      choices: [{ label: "Retourner à la marmite", fx: { quest: "UC" }, back: "A4f_jours" }] },
    UC_caisse: { act: "IV", title: "Les piastres dans le sable", place: "plage", ambiance: "nature", second: true,
      text: [
        "Il dit qu'on ne partagera rien ici. Pas sur une plage, pas au milieu d'un siège, pas entre hommes qui ont un couteau à la ceinture et du rhum dans le sang. Il ramasse le tas, tout, avec la voile, et il en fait un ballot qu'il noue, et il le met dans le tonneau à biscuit de sa cuisine, sous le biscuit. Il dit que l'argent est à la bordée, à toute la bordée, et qu'il le gardera, et qu'on le partagera au retour, à Morlenc, devant un notaire, avec les livres de bord. Il dit que celui qui veut sa part avant devra passer par la marmite.",
        "On gronde. Malandain s'approche, les pouces dans la ceinture, et demande de quel droit. Fargue répond : du droit de celui qui fait la soupe. Il dit qu'un homme qui garde l'argent de tous et celui qui garde la soupe de tous, c'est le même homme, ou ce sont deux hommes qui se battront bientôt. Malandain le regarde longtemps. Puis il rit, et il dit que le cuisinier a raison, et il s'en va. Les autres le suivent. Personne n'ose toucher au tonneau.",
        "La nuit, Fargue dort contre le tonneau, la tête sur le couvercle. Il sait ce qu'il a fait. Il a pris à onze hommes ce qu'ils avaient, au nom de tous, et il a pris en même temps le seul pouvoir qui compte sur cette plage, après les fusils. Il se dit que c'est pour éviter qu'ils s'entretuent. C'est vrai. Il se dit aussi que c'est pour tenir le camp quand il faudra le tenir. C'est vrai aussi. Il ne sait pas laquelle des deux vérités est la vraie.",
        "Le petit Le Duff vient le trouver, à l'aube. Il ne réclame rien. Il demande seulement si l'argent de sa sœur est dans le tonneau. Fargue dit que oui. Le Duff dit merci, et que c'est bien qu'il soit gardé par quelqu'un. Puis il s'en va. Fargue reste avec ce merci-là sur les bras, et un tonneau plein, et la certitude qu'on ne lui fera jamais plus confiance qu'à cet instant, ni plus imprudemment.",
      ],
      choices: [{ label: "Retourner à la marmite", fx: { quest: "UC" }, back: "A4f_jours" }] },
  },
  extras: {
    quests: [
      { id: "UC", act: "IV", kind: "annexe", title: "Les piastres dans le sable", start: "UC_ressac", doit: "typhon", echo: ["uc:egal", "uc:parole", "uc:caisse"] },
    ],
  },
};
