// L'Île Folle-Aiguille · side story « La femme du Puits » (owes its question to The Country Doctor: can one doctor change
// a forsaken place, and what does she owe it when she leaves?). On the last morning, a woman of the Fondeurs climbs up to
// the chapel in full daylight, which burns her eyes, carrying a boy of six who coughs black. Forge lung. Nobody on the
// island can do anything once the ship is gone. Victorine gives her what the satchel holds and one hour of teaching (zr:sacoche),
// tells her the only remedy, which is the light, knowing what it means for a people of the night (zr:lumiere), or
// promises to come back with a ship (zr:promesse). Wired in A5x_debut.
module.exports = {
  passages: {
    ZR_porte: { act: "V", title: "La femme du Puits", place: "misericorde", ambiance: "nature",
      fx: { meet: "fondeuse" },
      text: [
        "La sentinelle crie à la porte, un cri de surprise plus que d'alarme. Victorine sort. Sur le seuil de la chapelle, en plein soleil, à l'heure où les gens du Puits dorment depuis longtemps sous la terre, il y a une femme des Fondeurs.",
        "Elle est grande, voûtée, d'une pâleur de champignon, avec des bras couverts de petites brûlures rondes, anciennes et neuves, comme des taches de rousseur faites au fer. Elle a noué devant ses yeux un chiffon noir, troué de deux fentes, et derrière le chiffon on voit ses yeux qui pleurent, à cause de la lumière, sans arrêt, de grosses larmes qui tracent des sillons dans la suie de ses joues. Elle porte un enfant sur la hanche. Un garçon de six ans, maigre, à la peau grise, qui tousse.",
        "Il tousse d'une toux que Victorine reconnaît avant de l'avoir entendue en entier : une toux sèche, longue, qui finit par un crachat noir, comme de l'encre. Elle a vu cette toux chez les verriers de Morlenc, chez les mineurs de charbon du Vallon-Roux, une fois, en voyage. Les poumons des forges. On ne la guérit pas. On la soulage, un peu. On l'arrête, si l'on arrête la forge.",
        "« On dit que tu pars, dit la femme, d'une voix rauque, mal habituée au jour. On dit que tu sais faire. Fais. »",
      ],
      choices: [{ label: "Examiner l'enfant", to: "ZR_examen" }] },
    ZR_examen: { act: "V", title: "La femme du Puits", place: "misericorde", ambiance: "nature",
      text: [
        "Elle l'examine à l'ombre du porche, pour la mère. L'enfant ne pleure pas. Il regarde le ciel, la bouche ouverte, avec une stupeur immense ; il n'en a jamais vu autant à la fois. Victorine pose l'oreille sur sa poitrine. Elle entend ce qu'elle redoutait : un crépitement fin, des deux côtés, comme du sel jeté sur des braises.",
        "La femme lui dit, quand Victorine l'interroge, qu'il travaille aux soufflets depuis l'an dernier, comme tous les enfants du Puits, parce qu'ils sont petits et que les galeries des soufflets sont basses. Qu'il y en a d'autres qui toussent. Onze. Que trois sont morts l'hiver dernier, si c'est un hiver, ce qu'ils ont ici. Que le maître de puits dit que c'est la forge qui prend sa part, et qu'il faut la lui donner, sinon elle s'éteint.",
        "Victorine pense au vent de retour, qui n'attendra pas. Elle pense à la sacoche, sur l'autel, avec ce qu'il lui reste : du laudanum, de l'ipéca, du sirop de pavot, une lancette, trois livres de médecine dont un est en latin. Elle pense à Varnèse, où l'on a besoin d'elle aussi, et où elle a une maison, des livres, une pendule, un manteau sur un crochet. Elle pense qu'on lui a déjà posé cette question, sous une autre forme, toute sa vie, et qu'elle a toujours répondu en partant.",
        "La femme du Puits attend, debout, les yeux ruisselants derrière son chiffon, l'enfant sur la hanche. Elle ne supplie pas. Elle attend qu'on fasse.",
      ],
      choices: [
        { label: "Lui donner tout ce que contient la sacoche, et une heure pour apprendre à s'en servir", fx: { flag: "zr:sacoche" }, to: "ZR_sacoche" },
        { label: "Lui dire le seul remède, qui est de sortir les enfants des forges et de les mettre au jour", fx: { flag: "zr:lumiere" }, to: "ZR_lumiere" },
        { label: "Lui promettre de revenir, avec un navire, et des remèdes", fx: { flag: "zr:promesse" }, to: "ZR_promesse" },
      ] },
    ZR_sacoche: { act: "V", title: "La femme du Puits", place: "misericorde", ambiance: "nature",
      text: [
        "Elle la fait asseoir dans la sacristie, dans le noir, les volets clos, ce qui soulage ses yeux. Elle vide la sacoche sur le coffre aux chasubles. Elle lui montre. Le sirop de pavot : une cuillère le soir, pour la toux, pas plus, sinon l'enfant ne se réveille pas. L'ipéca : quand ça étouffe. La lancette : jamais. Les livres : elle les lui laisse quand même, pour les planches, parce que les planches, on n'a pas besoin de savoir lire pour les regarder.",
        "La femme apprend vite. D'une rapidité qui fait peur. Elle répète chaque geste une fois, et ne se trompe plus. Elle a des mains de forgeronne, sûres, précises, des mains qui savent doser un feu à la couleur d'une flamme. Victorine se dit qu'en d'autres temps, dans un autre monde, cette femme aurait été chirurgien. Elle se dit aussi qu'elle lui laisse de quoi soulager onze enfants pour un an, pas davantage, et qu'au bout de l'an il n'y aura plus rien dans les fioles.",
        "Quand c'est fini, la femme du Puits noue les fioles et les livres dans un pan de son tablier de cuir, reprend l'enfant, et s'en va, sans un merci, vers la forêt, en rasant l'ombre des arbres. Au bord de la Sylve, elle se retourne, et elle ôte le chiffon de ses yeux, une seconde, en plein soleil, et elle regarde Victorine. Puis elle le remet, et disparaît. Victorine comprend que c'était le merci, et ce qu'il lui a coûté.",
      ],
      choices: [{ label: "Regagner la nef, les mains vides", fx: { quest: "ZR" }, back: "A5x_debut" }] },
    ZR_lumiere: { act: "V", title: "La femme du Puits", place: "misericorde", ambiance: "nature",
      text: [
        "Elle le lui dit. Qu'il n'y a pas de remède dans une fiole. Que le seul remède, c'est l'air. Sortir les enfants des galeries des soufflets. Les mettre au jour, au soleil, au vent de la mer, des heures, chaque jour, jusqu'à ce que la toux s'éclaircisse. Et ne plus jamais les y remettre. Que la forge, s'il faut lui donner sa part, la prenne aux adultes, qui choisissent.",
        "La femme du Puits l'écoute en silence. Derrière le chiffon noir, ses yeux pleurent toujours. Elle dit, lentement : « Au jour, on devient des Doux. On oublie. On sourit. On ne fait plus rien de ses mains. Mon père le disait, et son père. Le jour, c'est l'écorce. » Victorine répond que le jour, c'est le jour, et que l'écorce, c'est l'écorce. Qu'on peut vivre en haut et garder ses mains. Qu'elle le sait, elle, qui a les mains pleines de cals et le visage au soleil depuis quarante ans.",
        "La femme la regarde longtemps. Puis elle pose l'enfant par terre, dans l'herbe du parvis, en plein soleil, et elle s'assied à côté de lui, et elle reste là, les yeux ruisselants, le visage tourné vers le sol, à attendre que le soleil fasse son œuvre ou qu'il la tue. L'enfant, lui, regarde le ciel. Il a cessé de tousser, une minute. Il rit, de surprise, en voyant passer un oiseau. Quand Victorine descend vers l'anse, une heure plus tard, ils sont encore là, tous les deux, et la femme a ôté le chiffon.",
      ],
      choices: [{ label: "Regagner la nef", fx: { quest: "ZR" }, back: "A5x_debut" }] },
    ZR_promesse: { act: "V", title: "La femme du Puits", place: "misericorde", ambiance: "nature",
      text: [
        "Elle promet. Elle s'entend promettre, d'une voix ferme, qu'elle reviendra, qu'elle trouvera un navire à Morlenc, un armateur, une société savante, n'importe qui, qu'elle reviendra avec des remèdes, un médecin, deux, des livres, et qu'elle s'occupera des onze. Elle le croit en le disant. C'est le pire : elle le croit.",
        "La femme du Puits ne dit rien. Elle a l'habitude des promesses, sans doute, celles du Vieux, celles du maître de puits, celles de la forge. Elle hoche la tête, une fois, comme on prend acte. Puis elle tend la main, et Victorine, sans comprendre, y pose la sienne, et la femme la retourne, paume en l'air, et regarde les cals, longtemps, du bout de ses doigts brûlés, comme on lit un contrat.",
        "« Tu as des mains qui travaillent, dit-elle enfin. Ça tient parole, des mains qui travaillent. Quelquefois. » Elle reprend l'enfant, et s'en va vers la Sylve en rasant l'ombre. Victorine reste sur le seuil, la main encore ouverte. Elle compte, dans sa tête, ce que coûte un navire, un équipage, un an de mer. Elle compte jusqu'au bout. Puis elle ferme la main.",
      ],
      choices: [{ label: "Regagner la nef", fx: { quest: "ZR" }, back: "A5x_debut" }] },
  },
  extras: {
    people: {
      fondeuse: { name: "La femme du Puits", aka: ["la Fondeuse"], f: true, qui: "Une femme des Fondeurs, montée au jour avec un enfant qui tousse noir." },
    },
    quests: [
      { id: "ZR", act: "V", kind: "annexe", title: "La femme du Puits", start: "ZR_porte", doit: "medecincampagne", echo: ["zr:sacoche", "zr:lumiere", "zr:promesse"] },
    ],
  },
};
