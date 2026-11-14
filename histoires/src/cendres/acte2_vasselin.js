// Act II · more of Vasselin for the southern company, off II_S_vasselin: the woman fished out of the harbour who has
// no name left, old Maître Fabien who made Lisandre's lute and no longer knows how, and the night crier who calls the
// dead of the week and has begun to skip names. Lisandre leads ("tu", feminine).
var S = { act: "II", noLead: true };
function P(o) { return Object.assign({}, S, o); }
module.exports = {
  // ---------------------------------------------------------------- La femme du bassin
  II_Q_bassin: P({ title: "La femme du bassin", place: "vasselin",
    fx: { questSeen: "II_Q_bassin" },
    text: [
      "Sur le quai du bassin aux galères, un attroupement. Deux pêcheurs viennent de tirer une femme de l'eau, entre deux coques. Elle n'est pas noyée. Elle est assise sur les pavés, trempée, une algue dans les cheveux, et elle regarde les gens autour d'elle avec une politesse parfaite.",
      "« Elle était debout dans l'eau jusqu'au cou, dit un pêcheur. Elle flottait, tranquille. Elle attendait. » Personne ne la connaît. On lui demande son nom. Elle sourit, comme à une bonne plaisanterie, et se tait.",
      "Elle porte une robe de laine brune, des sabots, et au cou une petite croix d'étain. Une femme de la campagne. Pas d'ici.",
    ],
    choices: [
      { label: "T'asseoir à côté d'elle", to: "II_Q_bassin_parler" },
      { label: "La laisser aux pêcheurs", refuse: true, to: "II_S_vasselin" },
    ] }),
  II_Q_bassin_parler: P({ title: "Sur le quai", place: "vasselin",
    text: [
      "Tu t'assieds sur les pavés, dans ta robe de cour, ce qui fait reculer la moitié des badauds. Elle te regarde. « Vous êtes très bien habillée », dit-elle. Elle a l'accent des vallées du nord, celui qui avale les fins de mots.",
      "Tu lui demandes d'où elle vient. Elle réfléchit, sérieusement. « Je suis venue à pied, dit-elle. Il y avait une route. Et puis la mer. On m'avait dit que la mer lave tout. » Elle touche sa robe mouillée. « Elle n'a rien lavé. Ou alors tout. Je ne sais pas. »",
      { with: "hylas", text: "Hylas, derrière toi, dit très bas : « On ne cède pas tout d'un coup. On cède un morceau, puis un autre, pour payer le premier. Et un jour, on n'a plus rien à donner que le reste. »" },
    ],
    choices: [
      { label: "Lui chanter des chansons des vallées, pour voir laquelle elle connaît", test: { dom: "social", label: "Les chansons", help: [{ if: { item: "luth" }, v: 10 }, { if: { present: "enfant" }, v: 15 }, { if: { present: "rodric" }, v: 5 }] },
        win: { fx: { flag: "sud:bassin=nom", ep: ["perso", 900] }, to: "II_Q_bassin_chanson" }, lose: { to: "II_Q_bassin_rien" } },
      { label: "Fouiller ses poches, sans qu'elle le sente", test: { dom: "discretion", label: "Les poches", help: [{ if: { present: "pie" }, v: 20 }] },
        win: { fx: { flag: "sud:bassin=lettre", ep: ["perso", 700] }, to: "II_Q_bassin_lettre" }, lose: { to: "II_Q_bassin_rien" } },
    ] }),
  II_Q_bassin_chanson: P({ title: "La chanson des fenaisons", place: "vasselin",
    text: [
      "Tu chantes. Une ronde de Pont-de-Saule, rien. Une complainte des bergers de l'Ourse, rien. Une chanson à boire des Combes, elle sourit, poliment. Puis une chanson de fenaison, celle qu'on chante à trois voix dans les prés au-dessus de la Sauve, et qu'on t'a apprise au palais comme une curiosité de province.",
      "Au deuxième couplet, elle chante avec toi. Pas les paroles. La deuxième voix, celle du dessous, celle des femmes qui râtellent. Elle la chante juste, sans y penser, comme on respire.",
      "« Rossignol, dit-elle à la fin. On m'appelait Rossignol, aux fenaisons. Parce que je faisais la voix du dessous. » Elle fronce les sourcils. « Ce n'était pas mon nom. Mais c'est un nom. Je vais le garder. »",
      "La patronne de l'Ancre, qui a tout vu depuis la halle, s'approche, s'essuie les mains sur son tablier. « J'ai besoin de quelqu'un pour la plonge, dit-elle. Et qui chante, ça ne gâte rien. »",
    ],
    choices: [{ fx: { quest: "II_Q_bassin", conf: { lisandre: 5 } }, back: "II_S_vasselin" }] }),
  II_Q_bassin_lettre: P({ title: "La lettre mouillée", place: "vasselin",
    text: [
      "Dans la poche de sa robe, un papier plié, détrempé, dont l'encre a coulé. Tu le déplies sur les pavés, au soleil. On lit encore : *... de Roncière, au prieuré de ... ma sœur ... si tu ne te souviens plus, va voir ...* et un nom de couvent, à Vasselin, le couvent des Filles-Dieu, sur la colline.",
      "Tu la mènes là-bas, à pied, la main dans la main, elle trempée, toi en robe de cour, toute la ville qui vous regarde passer. La sœur portière la regarde, longtemps. Puis elle ouvre les bras. « Agnès, dit-elle. Ma petite Agnès. »",
      "La femme du bassin se laisse embrasser, très polie, et demande : « C'est moi, Agnès ? » La sœur dit oui. Elle répond : « D'accord. » Et elle entre.",
    ],
    choices: [{ fx: { quest: "II_Q_bassin" }, back: "II_S_vasselin" }] }),
  II_Q_bassin_rien: P({ title: "Le quai", place: "vasselin",
    text: [
      "Rien ne prend. Elle te regarde, gentiment, et elle attend que tu aies fini. Au bout d'un moment, les pêcheurs l'emmènent à l'hospice du port, où l'on garde les gens qu'on repêche, et qui sont de plus en plus nombreux, depuis l'été.",
      "En partant, elle se retourne. « Vous chantez bien, dit-elle. Je crois que je chantais, moi aussi. » Puis elle suit les pêcheurs, en sabots mouillés, et tu ne la revois pas.",
    ],
    choices: [{ fx: { quest: "II_Q_bassin" }, back: "II_S_vasselin" }] }),

  // ---------------------------------------------------------------- Le luthier
  II_Q_luthier: P({ title: "Le luthier de la rue Basse", place: "vasselin",
    fx: { questSeen: "II_Q_luthier" },
    text: [
      "Rue Basse, sous l'enseigne d'une vielle de bois peint, l'atelier de Maître Fabien, qui a fait ton luth il y a dix ans, quand tu es arrivée à la cour avec une voix et rien d'autre. Il t'avait fait crédit. Tu l'as remboursé en trois ans, et il t'a dit, le dernier jour : « Maintenant tu me dois une chanson. » Tu ne la lui as jamais écrite.",
      "L'atelier est plein. Des luths, des vielles, des rebecs, accrochés aux poutres, posés sur les établis, sur les chaises, par terre. Aucun n'est fini. À l'un il manque le manche, à l'autre la table, au troisième les cordes. Il y en a des dizaines.",
      "Fabien est au milieu, avec un rabot, devant une table de sapin qu'il rabote depuis si longtemps qu'elle est devenue transparente.",
    ],
    choices: [
      { label: "« Maître Fabien. C'est moi. »", to: "II_Q_luthier_parler" },
      { label: "Ressortir sans te faire voir", refuse: true, back: "II_S_vasselin" },
    ] }),
  II_Q_luthier_parler: P({ title: "Les luths sans cordes", place: "vasselin",
    text: [
      "Il lève les yeux. Il ne te reconnaît pas. Il reconnaît le luth, sur ton dos. Il pose son rabot. « Celui-là, dit-il, je l'ai fait. Le poirier. La rosace en nacre. » Il le prend, sans demander, le retourne, frappe la caisse du doigt. « Je l'ai fait. » Il te le rend. « Je ne sais plus comment. »",
      "Il montre l'atelier. « Je commence. Je sais commencer. Et puis, au milieu, je ne sais plus ce qui vient après. Le manche ? Les barres ? Le vernis ? Alors j'en commence un autre. »",
      "Il a cédé quelque chose. Il ne sait pas quoi. Toi, tu crois deviner : pas le métier, qui est dans ses mains, mais l'ordre des gestes, qui était dans sa tête.",
    ],
    choices: [
      { label: "Lui jouer quelque chose, pour qu'il entende ce que ses mains ont fait", test: { dom: "social", label: "Maître Fabien", help: [{ if: { item: "luth" }, v: 15 }, { if: { has: "lisandre:ballade=double" }, v: 5 }, { if: { present: "linette" }, v: 5 }] },
        win: { fx: { flag: "sud:luthier", ep: ["perso", 1000] }, to: "II_Q_luthier_ok" }, lose: { to: "II_Q_luthier_rate" } },
      { label: "Lui proposer de finir un luth avec lui, geste par geste", fx: { ep: ["perso", 500] }, to: "II_Q_luthier_finir" },
    ] }),
  II_Q_luthier_ok: P({ title: "La chanson due", place: "vasselin",
    text: [
      "Tu t'assieds sur l'établi, entre deux luths sans manche. Tu accordes. Tu joues. Pas une chanson de cour. Une chanson que tu n'as jamais jouée à personne, parce que tu l'as commencée il y a dix ans et jamais finie : la sienne. Celle que tu lui devais.",
      "Tu la finis, là, en la jouant. Les deux derniers couplets viennent tout seuls. Tu ne sais pas d'où.",
      "Fabien écoute, la tête penchée, les yeux fermés, comme on écoute une caisse pour savoir si le bois est bon. À la fin, il ouvre les yeux. Il prend un luth sans cordes, sur l'établi, et il dit, très lentement, comme on récite : « Les barres. Puis la table. Puis le manche. Puis le vernis. Six couches. Puis les cordes. » Il te regarde. « Merci, mademoiselle. Je crois que je vous dois une chanson. »",
      "Tu ne le corriges pas.",
    ],
    choices: [{ fx: { quest: "II_Q_luthier", conf: { lisandre: 10 } }, back: "II_S_vasselin" }] }),
  II_Q_luthier_rate: P({ title: "Le rabot", place: "vasselin",
    text: [
      "Tu joues. Il écoute, poliment, comme on écoute un client. À la fin, il hoche la tête. « Le luth est bon, dit-il. Celui qui l'a fait savait son métier. » Il reprend son rabot. La table de sapin est si mince qu'on voit la lumière au travers.",
      "Tu ressors. Derrière toi, le bruit du rabot reprend, régulier, comme une horloge.",
    ],
    choices: [{ fx: { quest: "II_Q_luthier" }, back: "II_S_vasselin" }] }),
  II_Q_luthier_finir: P({ title: "Un luth", place: "vasselin",
    text: [
      "Tu restes l'après-midi. Tu ignores le métier de luthier. Mais tu as regardé un luth, le tien, tous les jours pendant dix ans, et tu sais dans quel ordre il est fait, parce qu'il te l'avait expliqué, le jour où tu l'as emporté, et que tu écoutais tout, à l'époque, tout ce qu'on disait, pour faire oublier la petite chanteuse du port.",
      "Tu dis : les barres. Il les colle. Tu dis : la table. Il la pose. Tu dis : le manche. Il hésite, puis ses mains le savent. Au soir, il y a un luth sans vernis sur l'établi, et Fabien le regarde comme on regarde un enfant qu'on vient d'avoir.",
      "« Il faut six couches de vernis, dit-il. Six jours. » Il sourit. « Revenez dans six jours. » Tu ne seras plus là dans six jours. Tu dis que tu reviendras.",
    ],
    choices: [{ fx: { quest: "II_Q_luthier", flag: "sud:luthier", conf: { lisandre: 5 } }, back: "II_S_vasselin" }] }),

  // ---------------------------------------------------------------- Le crieur des morts
  II_Q_crieur: P({ takes: "evening", title: "Le crieur des morts", place: "vasselin",
    fx: { questSeen: "II_Q_crieur" },
    text: [
      "À Vasselin, chaque samedi soir, le crieur des morts fait le tour des paroisses avec sa clochette et sa lanterne, et il dit les noms des morts de la semaine, à chaque carrefour, pour que ceux qui ne le savaient pas le sachent. Ça se fait depuis la grande peste. Tu l'entendais passer sous ta fenêtre, enfant, et tu comptais les noms.",
      "Ce soir, il passe sous la fenêtre de l'Ancre. Le vieux Gauthier, avec sa clochette fêlée. Il dit trois noms. Puis il s'arrête. Il regarde son papier. Il le retourne. Il repart, sans dire le quatrième.",
      "Une femme, en bas, sur le pas de sa porte, crie : « Et Jacquemin ? Vous avez oublié Jacquemin ! » Le crieur ne se retourne pas. Ce n'est pas la première fois, dit-elle à sa voisine. La semaine dernière, il en a sauté deux.",
    ],
    choices: [
      { label: "Le suivre dans la nuit", to: "II_Q_crieur_suivre" },
      { label: "Fermer la fenêtre", refuse: true, to: "II_S_vasselin" },
    ] }),
  II_Q_crieur_suivre: P({ title: "La clochette", place: "vasselin",
    text: [
      "Tu le suis de carrefour en carrefour. Il crie, il saute des noms, il repart. Au carrefour des Tanneurs, deux hommes sortent d'une porte cochère et l'attendent. Ils ne sont pas en gris. Ils ont des gourdins.",
      "« Le papier, vieux », dit l'un. Gauthier le tend, sans discuter, comme quelqu'un qui a l'habitude. L'homme le lit à la lanterne, raye un nom au charbon, le lui rend. « Celui-là, tu ne le dis pas. Ni ce soir, ni jamais. Tu ne l'as jamais connu. »",
      "Gauthier hoche la tête. Il reprend sa clochette. Il a l'air de ne plus savoir pourquoi il s'est arrêté.",
    ],
    choices: [
      { label: "Leur tomber dessus", to: "II_Q_crieur_combat" },
      { label: "Suivre les deux hommes, plutôt", test: { dom: "discretion", label: "Filature", help: [{ if: { present: "pie" }, v: 20 }, { if: { present: "ysolde" }, v: -5 }] },
        win: { fx: { flag: "sud:crieur", ep: ["perso", 1100] }, to: "II_Q_crieur_cave" }, lose: { to: "II_Q_crieur_combat" } },
    ] }),
  II_Q_crieur_combat: P({ title: "Le carrefour des Tanneurs",
    combat: { title: "Les gourdins", enemies: ["brigand", "brigand"], terrain: "ville", range: "contact",
      flee: { dom: "discretion", label: "Prendre le crieur par le bras et filer", to: "II_Q_crieur_fuite" },
      win: { fx: { ep: ["seance", 900] }, to: "II_Q_crieur_papier" }, lose: { fx: { pv: -3 }, to: "II_Q_crieur_fuite" } },
    text: ["La clochette de Gauthier tombe sur les pavés et sonne toute seule, fêlée, pendant toute la bagarre."],
    choices: [] }),
  II_Q_crieur_papier: P({ title: "Les noms rayés", place: "vasselin",
    text: [
      "Les deux hommes s'enfuient en laissant un gourdin. Tu ramasses la clochette, et le papier. Sept noms de la semaine, dont deux rayés au charbon. Tu les lis à la lanterne. Ils ne te disent rien. Gauthier non plus.",
      "De la poche de l'un d'eux, dans la bagarre, un jeton est tombé : du plomb, frappé d'une plume et d'une clé. Ce ne sont pas des brigands. Ce sont des gens qu'on paie.",
      "Tu lis les deux noms rayés à haute voix, au carrefour, devant les fenêtres fermées. Une fenêtre s'ouvre. Puis une autre. Personne se tait. Mais on a entendu.",
    ],
    choices: [{ label: "Raccompagner Gauthier chez lui", fx: { quest: "II_Q_crieur", flag: "sud:crieur_noms" }, to: "II_S_vasselin" }] }),
  II_Q_crieur_fuite: P({ title: "La ruelle", place: "vasselin",
    text: ["Vous filez par une ruelle, le crieur essoufflé, ta robe déchirée un peu plus. Quand vous vous arrêtez, il te regarde, puis regarde sa clochette, qu'il a gardée. « Je dois faire le tour, dit-il. C'est samedi. » Il repart. Tu le laisses aller. Tu ne sais pas quels noms il dira."],
    choices: [{ fx: { quest: "II_Q_crieur" }, back: "II_S_vasselin" }] }),
  II_Q_crieur_cave: P({ title: "La cave aux noms", place: "vasselin",
    text: [
      "Les deux hommes descendent vers le port, entrent dans une cave sous une maison de change, et ressortent sans leurs gourdins. Tu attends. Tu descends.",
      "La cave est petite. Une table, une lampe, et des papiers. Les papiers de tous les crieurs de Vasselin, de toutes les paroisses, depuis le printemps, recopiés, avec des noms rayés. Et une liste, à part, des noms rayés, avec en face de chacun une somme. Payée par qui, le registre le tait. À qui, si : *Pour la Tour.*",
      "Les noms rayés sont des noms de gens morts dans leur lit, de vieillesse, de fièvre. Mais ce sont tous des gens qui savaient écrire. Des notaires, des maîtres d'école, des clercs, une sage-femme qui tenait un registre des naissances. Ceux qui se souviennent sur le papier.",
      "Tu prends la liste. Tu remontes. Personne ne t'a vue.",
    ],
    choices: [{ fx: { quest: "II_Q_crieur", flag: "sud:crieur_noms" }, back: "II_S_vasselin" }] }),
};
