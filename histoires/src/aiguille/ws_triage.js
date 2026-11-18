// L'Île Folle-Aiguille · side story « Trois brancards » (owes its question to the Sevastopol Sketches: what does a doctor
// become in the hour when she must choose which wounded man will wait?). Act IV, the siege: a powder keg catches fire in
// the chapel's porch during a night alarm. Three men are brought in at once: an old sailmaker with a crushed leg, whom
// an hour's amputation would save; a boy of seventeen choking on the blood of a throat wound, whom a quick cut might
// save or kill; a topman with his belly open, who will die whatever she does and screams. She has two hands and one
// lantern. She takes the sailmaker first (ws:voilier), the boy (ws:garcon), or kneels first by the dying man (ws:mourant).
// Wired in A4w_jours.
module.exports = {
  passages: {
    WS_poudre: { act: "IV", title: "Trois brancards", place: "misericorde", ambiance: "nuit",
      text: [
        "L'alerte vient à deux heures du matin, une ombre sur la plage, un cri de sentinelle, et tout le monde court aux murs, dans le noir, en se cognant. Sous le porche, quelqu'un renverse une lanterne sur un baril de poudre qu'on avait monté là, la veille, pour être prêt. Victorine est dans la sacristie quand la porte du porche entre dans la nef, d'un seul coup, avec un bruit qu'elle sent dans ses dents avant de l'entendre.",
        "On les lui apporte presque ensemble, sur trois portes arrachées qui servent de brancards, et on les pose devant l'autel, dans la lumière d'une seule lanterne, parce que les autres sont éteintes ou cassées. Ensuite, les porteurs retournent aux murs, parce que l'alerte n'est pas finie, et que dehors on tire. Elle reste seule avec eux, et avec un matelot blessé au bras, qui tient la lanterne de sa main valide et qui tremble si fort que la lumière danse.",
        "Le premier est Gwénolé Trébaol, le voilier, soixante ans, qui a cousu toutes les voiles de la Cormorane : la jambe droite écrasée sous le genou, en bouillie, le sang qui pisse par saccades. Le garrot tiendra une heure. Il faut couper, maintenant, proprement, et ça prend une heure, et alors il vivra. Il le sait. Il la regarde. Il serre les dents sur un morceau de cuir qu'il a pris tout seul, comme un vieux qui connaît le métier.",
        "Le deuxième est un garçon de dix-sept ans, un mousse de Morlenc dont elle ne sait pas le nom, avec un éclat de bois planté dans le cou. Il ne crie pas. Il ne peut pas. Il étouffe, le visage bleuissant, en faisant un bruit de soufflet crevé, dans son propre sang. Une incision dans la trachée, sous la pomme d'Adam, et une plume d'oie pour qu'il respire : elle l'a fait deux fois dans sa vie, une fois avec succès. Il a quatre minutes.",
        "Le troisième crie. C'est un gabier, Le Dorz, trente ans, qu'elle a soigné la semaine dernière pour une main brûlée et qui lui a fait des compliments sur ses yeux. Il a le ventre ouvert d'un côté à l'autre. Elle voit ce qu'elle voit. Il mourra cette nuit, quoi qu'on fasse, mais lentement, en hurlant, et il hurle déjà, et il l'appelle, *docteur, docteur*, et il tend la main vers elle.",
      ],
      choices: [
        { label: "Couper la jambe du voilier, qui vivra sûrement", fx: { flag: "ws:voilier" }, to: "WS_voilier" },
        { label: "Ouvrir la gorge du garçon, qui vivra peut-être", fx: { flag: "ws:garcon" }, to: "WS_garcon" },
        { label: "S'agenouiller d'abord près de Le Dorz, et lui donner le laudanum", fx: { flag: "ws:mourant" }, to: "WS_mourant" },
      ] },
    WS_voilier: { act: "IV", title: "Trois brancards", place: "misericorde", ambiance: "nuit",
      text: [
        "Elle prend la scie. Elle dit au matelot de mettre la lanterne à droite, et de ne regarder que la lanterne. Elle coupe. Le voilier mord son cuir et ne crie pas, et au bout d'un moment il s'évanouit, ce qui est un soulagement pour tout le monde. Derrière elle, le bruit de soufflet crevé continue, puis il ralentit, puis il s'arrête. Elle ne se retourne pas. Elle continue de couper. Ensuite, la ligature, les lambeaux, le pansement. Ses mains font ce qu'elles savent.",
        "Pendant tout ce temps, Le Dorz hurle, et l'appelle, et elle ne répond pas. Puis il cesse de l'appeler. Il appelle sa mère. Puis il cesse de hurler. Il gémit seulement. Quand elle se relève, une heure plus tard, couverte de sang jusqu'aux coudes, elle lui donne le laudanum, une grosse dose, et elle reste à côté de lui, à lui tenir la main, et il est trop tard pour qu'il la reconnaisse. Il meurt à l'aube, au moment où la fusillade s'arrête.",
        "Le voilier vit. Il coudra encore des voiles, assis, avec une jambe de bois que lui taillera le charpentier. Il l'appellera *ma sauveuse* jusqu'à la fin de ses jours, devant tout le monde, d'une voix forte, et chaque fois elle aura envie de lui dire de se taire. Le garçon, on l'enterre sans nom. Elle demande son nom, le lendemain, à tout le monde. Quelqu'un finit par le lui donner. Elle l'écrit dans son carnet. C'est tout ce qu'elle peut faire pour lui, et elle le fait avec une application féroce.",
      ],
      choices: [{ label: "Retourner aux blessés", fx: { quest: "WS" }, back: "A4w_jours" }] },
    WS_garcon: { act: "IV", title: "Trois brancards", place: "misericorde", ambiance: "nuit",
      text: [
        "Elle prend le garçon par les cheveux, lui renverse la tête en arrière, tâte la gorge sous le sang, trouve l'anneau, enfonce le bistouri, et le sang lui gicle au visage, chaud, et elle cherche, à l'aveugle, la plume d'oie dans sa sacoche, la trouve, l'enfonce. Il y a un sifflement. Le garçon prend une respiration énorme, rauque, par la plume, et ses yeux s'ouvrent, et il la regarde, et il respire. Ça a pris trois minutes. C'est la deuxième fois que ça marche.",
        "Puis elle se jette sur la jambe du voilier. Le garrot a glissé ; il a perdu beaucoup de sang pendant ces trois minutes, pâle comme un linge, mais il serre encore son cuir. Elle coupe. Elle coupe trop vite, parce qu'elle a peur, et elle le sait, et ça se verra au moignon. Pendant tout ce temps, Le Dorz hurle, appelle, puis gémit, puis se tait, et quand elle peut enfin aller vers lui, il ne la voit plus.",
        "Le voilier meurt deux jours plus tard, de la fièvre du moignon, en lui disant que ce n'est pas sa faute, ce qui est pire. Le garçon vit. Il s'appelle Yannick. Il ne parlera plus jamais qu'avec une voix rauque, à demi soufflée, une voix de vieux. Il vient s'asseoir à côté d'elle, le soir, dans la sacristie, et il la regarde écrire. Elle pense qu'elle a échangé un vieil homme contre un jeune, et qu'elle l'a fait en trois minutes, sans réfléchir, avec ses mains, et que ses mains ont choisi l'âge. Elle ne sait pas si elle doit leur en vouloir.",
      ],
      choices: [{ label: "Retourner aux blessés", fx: { quest: "WS" }, back: "A4w_jours" }] },
    WS_mourant: { act: "IV", title: "Trois brancards", place: "misericorde", ambiance: "nuit",
      text: [
        "Elle ne le décide pas. Ses genoux le décident, qui la jettent à côté de Le Dorz, parce qu'il hurle son nom, et qu'elle est un être humain avant d'être une médecin, et qu'elle le découvre là, à la pire minute pour le découvrir. Elle lui verse le laudanum dans la bouche. Elle lui tient la tête. Elle lui dit des choses, n'importe quoi, que tout va bien, qu'elle est là. Il cesse de hurler. Il la regarde. Il dit : « Vos yeux, docteur. » Puis il ferme les siens.",
        "Ça a pris une minute. Peut-être deux. Quand elle se retourne, le bruit de soufflet crevé s'est arrêté. Le garçon est immobile, bleu, les yeux ouverts. Elle le regarde un moment, sans pouvoir bouger. Puis le matelot à la lanterne dit, d'une voix cassée, *madame, madame*, en montrant le voilier, dont le garrot glisse. Elle se lève. Elle prend la scie. Elle coupe, une heure, avec une précision glacée, parfaite, la meilleure amputation de sa vie, et elle s'en rend compte en la faisant, et ça lui donne envie de vomir.",
        "Le voilier vit. Le Dorz meurt à l'aube, sans souffrir, en dormant. Le garçon est mort en trois minutes, pendant qu'elle disait des choses tendres à un homme qui mourrait de toute façon. Elle refait le calcul cent fois, dans les jours qui suivent. Le calcul est simple. Il donne toujours le même résultat. Ce qu'elle ne parvient pas à calculer, c'est ce qu'elle serait devenue si elle avait laissé Le Dorz hurler son nom pendant une heure, sans se retourner. Elle soupçonne que la réponse est : une meilleure médecin.",
      ],
      choices: [{ label: "Retourner aux blessés", fx: { quest: "WS" }, back: "A4w_jours" }] },
  },
  extras: {
    quests: [
      { id: "WS", act: "IV", kind: "annexe", title: "Trois brancards", start: "WS_poudre", doit: "sebastopol", echo: ["ws:voilier", "ws:garcon", "ws:mourant"] },
    ],
  },
};
