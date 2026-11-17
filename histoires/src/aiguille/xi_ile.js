// L'Île Folle-Aiguille · side story « Le passager qu'on ne voit pas », on the island. The transparent man came ashore
// with the water party, and the sun he crossed the ocean for has burned him: blisters hang in the air by the waterfall.
// The child may bring him to the hermit, who knows something about not being seen (xi:sauveur), or cake him in clay so
// that he can be seen again for an hour (xi:boue). Then what he can do, since nobody sees him: listen at the beach camp
// (xi:espion), or aboard the brigantine (xi:brigantin), read on the night of the swim. At the end, the dawn when he
// walks toward the sea: he goes into it (xi:mer), or he stays, under the hermit's roof (xi:reste).
module.exports = {
  passages: {
    XI_i_traces: { act: "IV", title: "Des pieds nus", place: "cabane", ambiance: "nature",
      text: [
        "Au bord de la vasque, sous la cascade, là où tu vas te laver le matin, il y a des traces de pas dans la vase. Des pieds nus, longs, maigres, aux orteils écartés. Elles vont jusqu'à l'eau, et s'arrêtent, et reviennent. Il n'y a personne.",
        "Puis tu entends quelqu'un gémir. Un petit gémissement aigu, retenu, comme celui d'un chien qu'on a battu et qui ne veut pas qu'on l'entende.",
        "Dans l'ombre d'un rocher, à hauteur d'homme, flottant dans l'air, il y a des taches. Des cloques. Des dizaines de cloques rouges, gonflées, luisantes, qui dessinent dans le vide la forme d'une épaule, d'un dos, d'une nuque, d'un front, comme une carte de géographie en relief d'un pays qui n'existe pas.",
        "« N'aie pas peur, dit la voix de Fenouillet. C'est moi. Enfin, c'est ce qu'il en reste. »",
      ],
      choices: [{ label: "« Qu'est-ce qui vous est arrivé ? »", to: "XI_i_brule" }] },
    XI_i_brule: { act: "IV", title: "Le soleil", place: "cabane", ambiance: "nature",
      text: [
        "« Le soleil, dit-il. Le soleil, mon petit. J'ai traversé l'océan pour lui. J'ai eu froid quatre ans, à Morlenc, à grelotter dans mes greniers, à rêver de lui. Et il est là. Et il me traverse. »",
        "Il rit, et le rire lui fait mal, et les cloques tremblent dans l'air.",
        "« Une peau sans couleur, vois-tu, ne se défend pas. La couleur, c'est une armure. Je l'ai enlevée, la mienne, pour qu'on ne me voie plus, et je n'avais pas pensé que le soleil, lui, me verrait. Il me voit très bien. Il me cuit. Je suis descendu à terre avec la corvée d'eau, je me suis couché sur le sable, nu, les bras en croix, pour la première fois depuis quatre ans, et je me suis endormi. Quand je me suis réveillé, je brûlais. »",
        "Une cloque, sur ce qui doit être son épaule, crève, et une goutte de liquide clair coule dans l'air, et tombe dans la vase.",
        "« Je ne peux pas rester au soleil. Je ne peux pas rester à l'ombre : j'ai froid. Je suis le seul homme au monde qui ait réussi à se rendre invisible, et je ne sais pas où me mettre. »",
      ],
      choices: [
        { label: "L'emmener à la hutte de Sauveur", fx: { flag: "xi:sauveur" }, to: "XI_i_hutte" },
        { label: "Le couvrir de la boue fraîche de la vasque", fx: { flag: "xi:boue" }, to: "XI_i_boue" },
      ] },
    XI_i_hutte: { act: "IV", title: "Deux hommes qu'on ne voit pas", place: "cabane", ambiance: "nature",
      text: [
        "Tu le guides par la main jusqu'à la hutte. Sa main est brûlante, rêche, et tremble dans la tienne. Sauveur lève les yeux de son livre latin, voit ta main tendue dans le vide, la referme sur rien, et comprend. Il ne pose pas de question. Il ne s'étonne pas. Il ferme son livre.",
        "« Asseyez-vous, monsieur, dit-il, en désignant un tabouret, comme à un visiteur ordinaire. Là, à l'ombre, près du feu. » Il va à une étagère, en revient avec une jarre, et commence, à tâtons, à enduire les cloques d'une gelée verte, épaisse, qui sent la plante coupée. « L'aloès. Il en pousse derrière la hutte. Je m'en sers pour mes propres coups de soleil. J'en ai beaucoup, des coups de soleil. J'ai la peau des gens du Nord, et le soleil d'ici la déteste. »",
        "Fenouillet se laisse faire. Peu à peu, sous la gelée verte, une forme apparaît, assise sur le tabouret : un dos maigre, des épaules, une nuque, comme une statue qu'on sortirait de l'eau.",
        "« On ne vous voit plus, vous non plus, dit Fenouillet, au bout d'un moment. Je le sens. Vous parlez comme quelqu'un qu'on ne regarde plus. »",
        "Sauveur sourit, en étalant la gelée. « Depuis vingt et un ans, dit-il. C'est un choix. Je l'ai fait sans chimie. » Il essuie ses mains. « On s'y habitue. On finit même par en avoir besoin. C'est le seul inconvénient. »",
      ],
      choices: [{ label: "Les laisser parler, tous les deux", to: "XI_i_offre" }] },
    XI_i_boue: { act: "IV", title: "La statue", place: "cabane", ambiance: "nature",
      text: [
        "Tu plonges les mains dans la vase grise de la vasque, fraîche, lisse, et tu la plaques sur les cloques, une poignée après l'autre. Il pousse un soupir de délivrance si profond que tu continues.",
        "Les épaules apparaissent. Le dos. Les bras. Le torse, maigre, les côtes. Les jambes. Le cou. Et enfin, quand tu lui passes la boue sur le visage, du bout des doigts, en évitant les yeux, un visage. Un visage gris, lisse, aux traits fins, au nez long, avec deux trous noirs à la place des yeux, et une bouche qui s'ouvre, et qui sourit.",
        "Il y a, debout au bord de la vasque, sous la cascade, une statue d'homme en argile grise, qui se regarde les mains, et qui pleure, et les larmes tracent dans la boue deux sillons par où l'on voit, derrière, le rocher.",
        "« On me voit, dit Fenouillet. Tu me vois. » Il fait un pas, puis un autre, maladroit, comme un homme qui réapprend à marcher. « Je pèse quelque chose. »",
        "La boue sèche en une heure, et craque, et tombe par plaques, et il disparaît morceau par morceau, en commençant par les mains. Il te demande de recommencer. Tu recommences, trois fois, jusqu'au soir.",
      ],
      choices: [{ label: "Le ramener à la hutte, à la nuit", to: "XI_i_offre" }] },
    XI_i_offre: { act: "IV", title: "Ce qu'il sait faire", place: "cabane", ambiance: "nuit",
      text: [
        { if: { has: "xi:boue" }, text: "Sauveur, quand tu le lui as amené, couvert de boue sèche qui tombait par plaques, n'a pas posé de question. Il a regardé la statue grise qui parlait sur le seuil, et il a dit : « Entrez, monsieur. Vous salissez, mais vous êtes le bienvenu. » Puis il a sorti sa jarre d'aloès." },
        { if: { has: "xi:sauveur" }, text: "Sauveur lit, de l'autre côté du feu. Il ne lève pas les yeux. Il écoute tout." },
        "Le soir, il est couché sur une natte, près du feu, couvert de gelée verte ou de plaques de boue, et il parle. Il a toujours parlé. C'est la seule chose qui reste visible de lui, à coup sûr, à toute heure : la voix.",
        "« Je te dois deux choses, dit-il, maintenant. Le biscuit, sur le navire. Et ça. » Une main de boue se lève et désigne la gelée, le feu, le toit. « Je ne sais rien faire de mes mains. J'ai fait une chose de génie, une seule, et elle m'a ruiné. Mais il y a une chose que je fais mieux que personne au monde : être là où l'on ne me voit pas. »",
        "« Dis-moi où aller. La plage, où boivent tes mutins ? Le grand brigantin, qui a de si jolies lanternes ? J'y vais, cette nuit, j'écoute, et je reviens. Ça ne me coûte rien. Personne ne regarde jamais où je suis. »",
      ],
      choices: [
        { label: "« Allez au camp de la plage. »", fx: { flag: "xi:espion" }, to: "XI_i_plage" },
        { label: "« Allez à bord du brigantin. »", fx: { flag: "xi:brigantin" }, to: "XI_i_brigantin" },
        { label: "« Restez ici. Reposez-vous. Vous ne me devez rien. »", to: "XI_i_rien" },
      ] },
    XI_i_plage: { act: "IV", title: "Ce qu'il a entendu", place: "cabane", ambiance: "nuit",
      text: [
        "Il revient avant l'aube, essoufflé, grelottant, et se roule dans la couverture près des braises, et parle en claquant des dents.",
        "« Ils boivent. Ils boivent tout. Ils ont trouvé, dans la cale, les tonneaux de vin du baron, et ils les finissent. Le cuisinier n'est pas content. Il ne boit pas, lui. Il les regarde boire, de loin, comme un berger regarde ses moutons manger une herbe qui les rendra malades. » Il tousse. « La nuit, à bord de ton navire, il ne reste que trois ou quatre hommes. Le voilier, qui dort avec une bouteille. Deux autres, qui jouent. Et un qui ne dort jamais. Je ne l'ai pas vu de près. Il riait tout seul. »",
        "« Les fusils sont à terre, dans la tente. La poudre aussi, sauf la soute du navire, qu'on n'a pas vidée. Personne ne garde le câble de l'ancre. Personne ne regarde la mer. Ils regardent tous le brigantin. »",
        "Il se tait, puis ajoute : « Je me suis assis à côté du cuisinier, un long moment. Il parlait tout seul, lui aussi. Il disait un nom. Le tien, mon petit. Il le disait comme on dit une prière, ou une malédiction. Je n'ai pas su laquelle. »",
      ],
      choices: [{ label: "Le laisser dormir", to: "XI_i_aube" }] },
    XI_i_brigantin: { act: "IV", title: "Ce qu'il a entendu", place: "cabane", ambiance: "nuit",
      text: [
        "Il revient avant l'aube, trempé, frissonnant, avec dans les cheveux qu'on ne voit pas des brins d'algue qu'on voit très bien, et qui flottent dans l'air au-dessus de la natte.",
        "« J'ai nagé, dit-il. Et j'ai grimpé par la chaîne de l'ancre. Et je me suis assis dans la grand-chambre, sur une banquette de velours, à côté d'une femme à l'œil blanc qui sentait le tabac à chiquer, pendant que le beau capitaine et son ami au visage grêlé buvaient du Madère. » Il rit. « Il y avait une nappe. Une nappe ! »",
        "« Ils attendent. Le beau capitaine dit qu'il ne faut rien faire tant que les bourgeois et les mutins ne se sont pas usés les uns contre les autres. Le grêlé veut aborder ton navire, la nuit, avec une chaloupe et vingt hommes, et le prendre pendant que les mutins cuvent. Ils se sont disputés. Le beau capitaine a dit : après-demain. Le grêlé a dit : demain. La vieille a dit : ce soir, si c'était moi. Personne ne l'a écoutée. Moi, si. »",
        "Il se roule dans la couverture. « Après-demain, ou demain, ou ce soir. Ton navire n'a pas beaucoup de nuits devant lui. »",
      ],
      choices: [{ label: "Le laisser dormir", to: "XI_i_aube" }] },
    XI_i_rien: { act: "IV", title: "Le repos", place: "cabane", ambiance: "nuit",
      text: [
        "Il ne répond pas tout de suite. Puis un rire, très doux, sort de la natte.",
        "« Personne ne m'a jamais dit ça, dit-il. Tu ne me dois rien. On m'a toujours dû quelque chose, ou je devais quelque chose, à l'Académie, au propriétaire, au boulanger, au monde. » Il se tourne vers le feu. « Je vais dormir, alors. Pour rien. C'est un luxe. »",
        "Il dort jusqu'à midi, roulé dans sa couverture, et Sauveur marche autour de lui sur la pointe des pieds, en lui rajoutant de la gelée sur les épaules quand elle sèche, comme on borde un enfant.",
      ],
      choices: [{ label: "Le laisser dormir", to: "XI_i_aube" }] },
    XI_i_aube: { act: "IV", title: "L'aube", place: "cabane", ambiance: "nature",
      text: [
        "Le lendemain, à l'aube, tu te réveilles et la natte est vide. La couverture est pliée en quatre. La jarre d'aloès est rangée sur l'étagère.",
        "Des traces de pieds nus partent de la hutte, dans la rosée, vers le sud. Vers la mer. Elles sont régulières, tranquilles, les traces de quelqu'un qui sait où il va.",
      ],
      choices: [
        { label: "Courir derrière elles", test: { dom: "nature", diff: 0, label: "Le rattraper avant la plage" }, win: { to: "XI_i_plage_aube" }, lose: { fx: { flag: "xi:mer" }, to: "XI_i_mer" } },
        { label: "Les regarder partir, sans le suivre", fx: { flag: "xi:mer" }, to: "XI_i_mer" },
      ] },
    XI_i_plage_aube: { act: "IV", title: "La plage", place: "plage", ambiance: "mer",
      text: [
        "Tu le rattrapes au bord de l'eau, sur une petite plage de galets, au sud, à l'écart de l'anse. Les traces s'arrêtent là où la vague mouille les galets. Tu entends sa respiration, devant toi, à deux pas.",
        "« Je voulais voir le soleil se lever sur la mer, dit-il. Une fois. Sans qu'il me brûle. À l'aube, il ne brûle pas. »",
        "Le soleil se lève. Il est rouge, énorme, et il fait sur l'eau un chemin de cuivre qui vient jusqu'à vos pieds. Et dans la lumière rasante, pour une minute, tu vois quelque chose : une ombre, très légère, une ombre d'homme sur les galets, à côté de la tienne. La sienne. Le soleil le traverse, mais pas tout à fait. Il reste un peu de lui, assez pour faire une ombre, à l'aube, quand la lumière est basse.",
        "« Tu la vois ? demande-t-il, très bas.",
        "— Je la vois. »",
        "Il se tait longtemps.",
        "« Alors je reste, dit-il. Je rentre avec toi. Le vieil homme a de l'aloès pour des années, et il ne pose pas de questions. Je ferai l'ombre tous les matins, à l'aube, sur cette plage. Il faut bien que quelqu'un la fasse. »",
      ],
      choices: [{ label: "Rentrer à la hutte, côte à côte", fx: { flag: "xi:reste" }, back: "A4n_jours" }] },
    XI_i_mer: { act: "IV", title: "La mer", place: "plage", ambiance: "mer",
      text: [
        "Quand tu arrives sur la petite plage de galets, au sud, il n'y a plus de traces. Juste la vague qui monte et descend, et efface.",
        "Tu restes là jusqu'à ce que le soleil soit haut. Tu ne vois rien. Une fois, il te semble qu'une vague se creuse, au large, comme autour d'une épaule qui nage. Puis plus rien.",
        "Sur un galet plat, au-dessus de la ligne de la marée, il y a une petite pierre posée, blanche, comme on pose une pierre sur une tombe juive. Tu ne sais pas s'il l'a posée, ou si elle était là.",
      ],
      choices: [{ label: "Rentrer à la hutte", back: "A4n_jours" }] },
  },
  extras: {},
};
