// Act II · the tournament camp at Vasselin on the night before the mêlée, for the southern company (Lisandre leads,
// "tu" feminine). Three more sights off II_S3_soir: the herald who rehearses the arms and has lost one; an old beaten
// knight unarming alone (sud3:conseil helps the mêlée); the children who play at tournament and keep forgetting one of
// their knights. Each returns to the camp.
var S = { act: "II", place: "vasselin", noLead: true };
function P(o) { return Object.assign({}, S, o); }
var BACK = [{ back: "II_S3_soir" }];
module.exports = {
  II_S3_heraut: P({ title: "Le héraut",
    text: [
      "Derrière la tribune, à la lueur d'une lanterne, le héraut d'armes répète pour demain. Un gros homme en tabard bariolé, la voix énorme, qui récite les blasons des trente champions de la mêlée, sans papier, en se balançant d'un pied sur l'autre. *D'azur au lion d'or. De gueules à trois tours d'argent. De sable au...* Il s'arrête. Il recommence.",
      "*De sable au...* Il s'arrête encore. Il se tourne vers toi, désemparé. « Le vingt-troisième, dit-il. Je le savais ce matin. Je le sais depuis vingt ans, c'est un vieux de la mêlée. Je vois le bouclier. Je ne vois plus ce qu'il y a dessus. »",
    ],
    choices: [
      { label: "Aller voir le bouclier du vingt-troisième, devant sa tente", fx: { ep: ["perso", 300], flag: "sud3:heraut" }, to: "II_S3_heraut_bouclier" },
      { label: "Lui dire d'inventer", to: "II_S3_heraut_invente" },
    ] }),
  II_S3_heraut_bouclier: P({ title: "Le bouclier",
    text: ["Tu trouves la tente. Le bouclier est appuyé contre le piquet. Il est noir. Tout noir. Il y avait quelque chose dessus, on voit encore la trace, plus brillante, là où était la peinture. Elle est partie. Le chevalier qui dort sous la tente ne s'en est pas aperçu. Tu reviens le dire au héraut. Il réfléchit. « De sable plein », dit-il enfin, à voix haute, pour essayer. Ça sonne bien. Ça sonne comme un deuil. Il le garde."],
    choices: BACK }),
  II_S3_heraut_invente: P({ title: "Inventer",
    text: ["Il te regarde, scandalisé. Puis il réfléchit. Personne, dans la foule, ne connaît les blasons. Personne ne vérifiera. « De sable au corbeau d'argent », dit-il, en essayant. Il hoche la tête. « C'est beau. » Il le répète trois fois pour le retenir. Demain, un vieux chevalier entrera dans la mêlée sous les armes d'un autre, à l'insu de tous et de lui-même."],
    choices: BACK }),
  II_S3_vaincu: P({ title: "Le vaincu",
    text: [
      "Devant une tente rapiécée, un vieux chevalier se débat seul avec les courroies de son armure. Il a perdu aux joutes, au premier tour, contre un garçon de dix-huit ans. Son écuyer est parti avec l'écuyer du garçon, pour boire à la victoire. Il n'arrive pas à atteindre la boucle de l'épaulière.",
      "Il te voit. Il a honte. Il ne demande rien.",
    ],
    choices: [
      { label: "L'aider à se désarmer", fx: { ep: ["perso", 300] }, to: "II_S3_vaincu_aide" },
      { label: "Passer sans le regarder, pour lui laisser sa honte", to: "II_S3_soir" },
    ] }),
  II_S3_vaincu_aide: P({ title: "Messire Enguerrand",
    text: [
      "Tu défais les courroies, une à une, comme on te l'a appris à la cour pour les chevaliers de la reine, les soirs de fête. Il se laisse faire. Il s'appelle Enguerrand de Valtorte. Il a fait quarante tournois. Celui-ci est le dernier ; il le savait en arrivant.",
      "Quand il est en chemise, il s'assied sur un tabouret, et il te dit, sans que tu demandes : « Demain, dans la mêlée, dis à ton champion de ne jamais se laisser tourner face au soleil. Ils attendent ça. À midi, ils poussent tous pour vous mettre le sud en face. Celui qui a le soleil dans les yeux tombe le premier. » Il tend la main vers une gourde. « Quarante tournois. Il faut bien que ça serve à quelqu'un. »",
    ],
    choices: [{ fx: { flag: "sud3:conseil" }, back: "II_S3_soir" }] }),
  II_S3_enfants: P({ title: "Les enfants du tournoi",
    text: [
      "Entre les tentes, à la lueur des feux, une bande d'enfants joue au tournoi. Des épées de bois, des couvercles pour boucliers, des bâtons pour chevaux. Ils se sont distribué les champions : « Moi, je suis le Lion d'or ! — Moi, les Trois Tours ! »",
      "Il en reste un, le plus petit, qui n'a pas de nom. Il porte un masque de papier blanc. « Et toi, tu es qui ? » demandent les autres. « Le chevalier masqué. » Ils jouent. Au bout d'un moment, ils s'arrêtent. « Il manque quelqu'un, non ? » Ils comptent. Ils regardent le petit au masque blanc, au milieu d'eux. Ils ne le voient pas. Ils recommencent à compter.",
    ],
    choices: [
      { label: "Dire aux autres qu'il est là", fx: { ep: ["perso", 300], flag: "sud3:enfants" }, to: "II_S3_enfants_la" },
      { label: "Regarder le petit, et ne rien dire", to: "II_S3_enfants_masque" },
    ] }),
  II_S3_enfants_la: P({ title: "Il est là",
    text: ["« Il est là », dis-tu, en montrant le petit au masque. Les enfants le regardent. Ils le voient. Ils rient. « Ah oui ! » Le petit enlève son masque, tout content d'avoir été trouvé, et ils reprennent le jeu. Cinq minutes plus tard, tu entends de nouveau, de loin : « Il manque quelqu'un, non ? » Le petit a remis son masque. Il aime ça, être cherché. Tu le comprends. Tu ne sais pas si tu devrais."],
    choices: BACK }),
  II_S3_enfants_masque: P({ title: "Le masque de papier",
    text: ["Tu te tais. Le petit au masque blanc s'assied à l'écart, sur une caisse, et regarde jouer les autres, qui l'ont oublié. Il a les yeux secs. Il a l'habitude, on dirait. Au bout d'un moment, il enlève son masque, le plie en quatre, le met dans sa poche, et va rejoindre les autres, à visage nu. Ils lui font une place sans discuter. Sans masque, on ne l'oublie pas. C'était ça, le jeu."],
    choices: BACK }),
};
