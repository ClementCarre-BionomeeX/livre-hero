// L'Île Folle-Aiguille · side story « La soupe du baron » (owes its question to Molière's The Bourgeois Gentleman: what
// does one owe a pupil who pays, the truth or the flattery he is paying for?). Act III, Fargue in the Sargasso calm:
// bored to death, the baron Clavières decides that a gentleman must know everything, and that he will learn to cook,
// from Fargue, in the galley, in an apron. He is very bad at it and very proud. On the third day he means to serve his
// soup at the captain's table. Fargue flatters him and secretly saves the soup (uk:flatte), tells him the truth about it
// (uk:verite), or lets him serve it as it is and face the table (uk:table). Wired in A3f_jours.
module.exports = {
  passages: {
    UK_soute: { act: "III", title: "La soupe du baron", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Fargue dit qu'un cuisinier commence par connaître ce qu'il a. Il prend une lanterne et descend, devant le baron, l'échelle raide de la soute aux vivres, sous la ligne de flottaison, là où l'air est épais, chaud, et sent le saloir, le moisi, la cale et quelque chose de plus vivant. Le baron suit, en robe de chambre de soie, en tenant le bas de sa robe comme une dame tient sa traîne.",
        "Fargue lui montre. Les barils de bœuf salé, où la viande baigne dans une saumure brune, dure comme du bois, qu'il faut dessaler trois jours avant de la cuire. Les sacs de pois secs, que les charançons ont transformés en dentelle. Les barriques de biscuit. Les tonneaux d'eau, dont l'eau est verte. Les rats, qui s'écartent de la lanterne sans se presser, avec l'air de propriétaires dérangés pendant leur sieste.",
        "Le baron regarde tout, en silence, avec une expression que Fargue ne lui a jamais vue. Il demande si c'est ça que mange l'équipage. Fargue dit oui. Il demande si c'est ça qu'on lui sert, à lui, à la table de la capitaine, sous les plats d'argent. Fargue dit : la même chose, en mieux présentée. Le baron reste un long moment silencieux, la main sur un tonneau.",
        "Puis il dit, très bas, qu'il comprend maintenant pourquoi le cuisinier est l'homme le plus important d'un navire. Il dit qu'il avait cru que c'était le capitaine. Fargue ne répond rien. Il remonte l'échelle. Le baron remonte derrière lui, et, en haut, il lâche le bas de sa robe de chambre, qui traîne désormais dans la poussière de la cambuse, et il ne la relève plus."
      ],
      choices: [
        { back: "UK_tablier", label: "Remonter à la cambuse" }
      ] },
    UK_carnet: { act: "III", title: "La soupe du baron", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Le baron a apporté un carnet relié de maroquin rouge, avec un crayon d'argent, et il l'a posé sur le billot, ouvert, pour prendre des notes. Pendant qu'il pleure sur son oignon, en se plaignant de la cruauté des légumes, Fargue jette un œil sur la page. Puis sur la précédente. Puis il tourne les pages, d'un doigt, sans bruit.",
        "Les premières pages sont des notes de cuisine, d'une écriture élégante et penchée : l'oignon se tient de la main gauche ; le couteau ne se lève pas plus haut que le pouce ; le sel en dernier. Puis, au milieu des recettes, d'autres notes, de la même écriture, sur d'autres sujets. Le cuisinier sourit quand il ment ; c'est-à-dire souvent. Le cuisinier joue aux échecs comme un homme qui a appris en prison. Le cuisinier regarde l'enfant du Fanal comme on regarde une dette.",
        "Fargue tourne encore une page. Elle est blanche, sauf une ligne, au milieu, soulignée deux fois : Apprendre la cuisine, pour voir de près ce qu'il fait de ses mains.",
        "Il referme le carnet, doucement, et le remet exactement où il était, à l'angle exact du billot. Le baron renifle, s'essuie les yeux avec un mouchoir de batiste, et demande si l'oignon est bien coupé. Fargue regarde l'oignon, massacré. Il dit qu'il est parfait. Il pense que c'est la première fois qu'il sous-estime un Clavières, et qu'il faudra que ce soit la dernière."
      ],
      choices: [
        { back: "UK_tablier", label: "Revenir au fourneau, près du baron" }
      ] },
    UK_tablier: { act: "III", title: "La soupe du baron", place: "sargues", ambiance: "mer", second: true,
      text: [
        { first: true, text: "Le cinquième jour du calme, le baron Clavières descend à la cambuse, en robe de chambre de soie, ce qui ne s'est jamais vu. Il regarde le fourneau, les marmites, les couteaux, les oignons pendus, avec l'intérêt d'un voyageur qui visite un pays sauvage. Puis il annonce à Fargue qu'il a décidé d'apprendre la cuisine. Il dit qu'un gentilhomme accompli doit tout savoir, et que ses ancêtres ont su faire la guerre, la chasse et le négoce, mais qu'aucun n'a su faire une soupe, et que c'est une lacune de la famille qu'il entend combler. Il paiera. Bien." },
        { first: true, text: "Fargue le regarde. Il pense à la grand-chambre, aux échecs, au jeu fragile qu'il joue avec cet homme depuis Morlenc. Il pense qu'un baron dans sa cambuse, c'est un baron qu'il a sous la main, et sous les yeux, et qui parlera. Il pense aussi que c'est la chose la plus drôle qui lui soit arrivée depuis vingt ans. Il garde son visage de bois. Il dit que ce sera un honneur. Il lui tend un tablier." },
        { first: true, text: "Le baron noue le tablier par-dessus sa robe de chambre, avec la solennité d'un chevalier qu'on adoube. Il demande par quoi l'on commence. Fargue lui met dans les mains un couteau et un oignon." },
        { again: true, text: "Le baron Clavières, en tablier par-dessus sa robe de chambre de soie, attend ses ordres avec la solennité d'un chevalier qu'on adoube." }
      ],
      choices: [
        { label: "Descendre d'abord avec lui à la soute aux vivres", to: "UK_soute", hide: { seen: "UK_soute" } },
        { label: "Jeter un œil, pendant qu'il pleure sur l'oignon, au carnet qu'il a posé sur le billot", to: "UK_carnet", hide: { seen: "UK_carnet" } },
        { label: "Lui apprendre à couper un oignon", to: "UK_oignon" }
      ] },
    UK_oignon: { act: "III", title: "La soupe du baron", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Il faut une heure pour l'oignon. Le baron le tient comme un boulet encore chaud, le coupe comme on signe un traité, en pesant chaque geste, et pleure toutes les larmes de son corps, ce qui l'indigne. Il demande s'il n'existe pas des oignons qui ne font pas pleurer. Fargue dit qu'il en existe, mais qu'ils n'ont pas de goût. Le baron dit que c'est exactement comme les gens. Fargue pense que c'est la première chose sensée qu'il ait entendue dans la bouche d'un Clavières.",
        "Le lendemain, il y a le lard, le bouillon, les pois. Le baron brûle le lard, noie les pois, oublie le sel, puis le met deux fois. Il goûte. Il fronce les sourcils. Il dit que c'est très bon. Il le dit avec la certitude d'un homme qui a toujours entendu dire que tout ce qu'il faisait était très bon, par des gens qu'il payait. Petit-Jules, qui passe la tête par la porte, goûte à son tour, et se sauve en se tenant la gorge. Le baron ne remarque rien.",
        "Le troisième jour, il annonce sa grande idée. Ce soir, à la table de la capitaine, c'est lui qui servira la soupe. Sa soupe. Il l'a dit à la capitaine, à la médecin, au professeur, au second. Ils sont prévenus. Il rayonne. Il demande à Fargue, en ami, en égal presque, si sa soupe est digne de cette table.",
        "Fargue regarde la marmite. La soupe du baron est grise, épaisse, salée comme une saumure, avec des morceaux de lard carbonisés qui flottent comme des épaves. Elle est imbuvable. Le baron le regarde avec des yeux d'enfant qui a fait un dessin.",
      ],
      choices: [
        { label: "Dire qu'elle est parfaite, et la refaire en cachette pendant qu'il s'habille", fx: { flag: "uk:flatte" }, to: "UK_flatte" },
        { label: "Lui dire la vérité, en face : elle est imbuvable", fx: { flag: "uk:verite" }, to: "UK_verite" },
        { label: "Ne rien dire, et le laisser servir sa soupe telle quelle", fx: { flag: "uk:table" }, to: "UK_table" },
      ] },
    UK_flatte: { act: "III", title: "La soupe du baron", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Fargue dit qu'elle est parfaite. Il dit qu'il n'aurait pas fait mieux. Le baron rougit de plaisir et remonte s'habiller pour le dîner, en sifflotant. Dès qu'il a passé l'écoutille, Fargue vide la marmite par le hublot, dans les herbes, où un poisson curieux vient la goûter et repart, outré. Puis il refait une soupe, en une heure, une vraie, au lard, aux pois, à l'oignon, avec une pointe de vinaigre, la meilleure qu'il ait faite depuis Morlenc. Il la fait un peu ratée. Exprès. Juste assez pour qu'on y croie.",
        "Au dîner, le baron sert lui-même, avec une louche d'argent apportée de sa cabine. On goûte. La capitaine lève un sourcil. Le professeur dit que c'est remarquable. La médecin regarde le baron, puis la soupe, puis la porte de la cambuse, et ne dit rien, avec un petit sourire. Le baron, ravi, raconte l'oignon, le lard, les larmes, en héros d'une campagne militaire. On l'applaudit. Il est heureux, d'un bonheur que Fargue ne lui a jamais vu, simple, presque enfantin.",
        "Le lendemain, le baron revient à la cambuse, et le surlendemain, et tous les jours du calme. Il est persuadé d'avoir du talent. Il fait des soupes infâmes, et Fargue les refait toutes, en cachette, une par une, un peu ratées. C'est un travail double, et Fargue le fait sans se plaindre. Il s'aperçoit qu'il y prend un plaisir étrange : le plaisir d'avoir, au creux de la main, la vanité d'un homme puissant, et de la nourrir chaque jour, comme on nourrit un animal qu'on apprivoise. Il se demande si c'est de la bonté. Il sait que ce n'en est pas tout à fait.",
      ],
      choices: [{ label: "Retourner à la cambuse", fx: { quest: "UK" }, back: "A3f_jours" }] },
    UK_verite: { act: "III", title: "La soupe du baron", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Fargue dit, de sa voix de quartier-maître, que la soupe est imbuvable. Il dit pourquoi : le lard brûlé, le sel deux fois, les pois noyés, le feu trop fort. Il le dit sans méchanceté, et sans rien adoucir, comme on fait un rapport de quart. Il dit qu'un mousse qui lui servirait ça serait privé de dessert pour une semaine. Il ajoute que monsieur le baron ne lui paie pas ses leçons pour s'entendre dire que tout est parfait, puisqu'il trouve ça partout ailleurs gratuitement.",
        "Le baron devient pourpre. Il ouvre la bouche. Il la referme. Il arrache son tablier et le jette sur le fourneau, où il roussit. Il remonte. Fargue pense qu'il a perdu, en une phrase, trois semaines de patience, une table d'échecs, et peut-être davantage. Le dîner se passe sans soupe du baron. Le baron n'y paraît pas. On dit qu'il a la migraine.",
        "Le lendemain, à six heures du matin, quelqu'un frappe à la porte de la cambuse. C'est le baron, en robe de chambre, avec le tablier roussi à la main. Il dit, très raide, qu'il a réfléchi. Il dit qu'on ne lui a jamais dit, de sa vie, qu'une chose qu'il avait faite était mauvaise. Il dit qu'il a trouvé ça très désagréable, et très instructif. Il demande s'il peut recommencer l'oignon.",
        "Ils recommencent. Le baron pleure sur l'oignon, et le coupe mieux. À la fin du calme, il sait faire une soupe aux pois honnête, qu'il sert à la table de la capitaine, en disant qu'elle est passable. Elle est passable. La capitaine en reprend. Le baron rougit comme une jeune fille. Fargue se dit qu'il a appris quelque chose à un homme qu'on n'avait jamais osé contredire, et qu'il l'a fait par orgueil de cuisinier plus que par vertu. Il se dit que le résultat est le même. Il se méfie de cette pensée-là aussi.",
      ],
      choices: [{ label: "Retourner à la cambuse", fx: { quest: "UK" }, back: "A3f_jours" }] },
    UK_table: { act: "III", title: "La soupe du baron", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Fargue hoche la tête, d'une façon qui peut vouloir dire n'importe quoi. Le baron la prend pour un oui. Il remonte s'habiller. Fargue reste devant la marmite. Il pourrait la refaire. Il pourrait courir après lui. Il ne fait ni l'un ni l'autre. Il veut voir. Il veut savoir ce que vaut, à une vraie table, devant des gens qui ne sont pas payés, la soupe d'un homme à qui personne n'a jamais dit non.",
        "Au dîner, le baron sert lui-même, avec une louche d'argent. On goûte. Il y a un silence. Le professeur Gaudrémont avale, devient rouge, puis violet, et boit un verre d'eau entier, une ration de deux jours. La capitaine Ribaud pose sa cuillère, regarde le baron droit dans les yeux, et dit, de sa voix sèche, qu'elle a mangé du cuir bouilli pendant un siège, et que c'était meilleur. La médecin, elle, finit son assiette, lentement, en silence, par charité ou par curiosité clinique.",
        "Le baron reste debout, la louche à la main, au milieu de la grand-chambre. Puis, contre toute attente, il éclate de rire. Un vrai rire, énorme, qui le plie en deux. Il goûte sa propre soupe, et il rit plus fort, et il dit qu'elle est abominable, que c'est la chose la plus abominable qu'il ait jamais mise dans sa bouche, et que personne, de toute sa vie, ne le lui avait jamais dit, pas même sa mère. Il remercie la capitaine. Il remercie le professeur pour son verre d'eau. Il dit qu'il recommencera demain.",
        "Le soir, il descend à la cambuse. Il dit à Fargue qu'il savait, bien sûr, que Fargue savait. Il dit qu'il lui est reconnaissant de l'avoir laissé faire. Il dit qu'un homme qui vous laisse vous ridiculiser devant les autres vous fait un cadeau qu'aucun flatteur ne vous fera jamais. Puis il le regarde un moment, avec ses yeux de négociant, et il dit qu'il se souviendra aussi que Fargue l'a laissé faire. Il le dit aimablement. Fargue comprend qu'il vient de perdre et de gagner quelque chose, et qu'il ne sait pas encore quoi.",
      ],
      choices: [{ label: "Retourner à la cambuse", fx: { quest: "UK" }, back: "A3f_jours" }] },
  },
  extras: {
    quests: [
      { id: "UK", act: "III", kind: "annexe", title: "La soupe du baron", start: "UK_tablier", doit: "bourgeoisgentilhomme", echo: ["uk:flatte", "uk:verite", "uk:table"] },
    ],
  },
};
