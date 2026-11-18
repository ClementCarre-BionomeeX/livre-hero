// L'Île Folle-Aiguille · side story « Le tour de terre » (owes its question to Tolstoy's How Much Land Does a Man Need?:
// how far will greed walk, and who should hold the hat?). Act IV, Fargue in the mutineers' camp: the men quarrel over
// the land they will own on the island once rich, and a greedy topman claims the best valley. Malandain lays down a
// rule for a laugh: as much as a man can stake out between dawn and dusk, if he is back at the fire before the sun
// goes down; otherwise, nothing. He wants the cook as judge. Fargue refuses and the quarrel goes to the knives
// (tw:refus); or he holds the hat on the hill all day, as a judge must (tw:juge); or at noon he goes after the walker
// with a gourd of water (tw:eau). Wired in A4f_jours.
module.exports = {
  passages: {
    TW_querelle: { act: "IV", title: "Le tour de terre", place: "plage", ambiance: "nuit", second: true,
      fx: { meet: "ledreau" },
      text: [
        "Autour du feu, le soir, on partage l'île. L'île reste à prendre, le trésor à trouver, le navire à garder. On partage quand même. C'est la conversation favorite du camp, plus que les femmes et plus que le rhum : qui aura quoi, quand on sera riche et qu'on s'établira ici, en seigneurs, avec des cases et des esclaves et des cochons.",
        "Bénézet Le Dréau veut la vallée de la cascade. Toute. C'est un gabier de quarante ans, sec, noueux, avec des bras de singe et des yeux de fouine, qui a eu toute sa vie un peu moins que les autres et qui en a gardé une faim de chien maigre. Il dit qu'il a vu la vallée le premier, de la hune. Jaffrézic, un grand gabier taciturne, dit qu'il l'a vue le premier, du canot. Le ton monte. Les couteaux sortent à moitié des ceintures.",
        "Malandain rit. Il lève la main. « Une règle, dit-il. Une vieille règle de mon pays. Demain, à l'aube, Le Dréau part du feu avec des piquets et une pelle. Il marche. Il plante un piquet à chaque coin. Tout ce qu'il a entouré avant le coucher du soleil est à lui. À une condition : être revenu au feu avant que le soleil touche la mer. S'il est en retard d'une minute, il n'a rien. Pas un pouce. »",
        "Les hommes rient. Le Dréau ne rit pas. Il a les yeux qui brillent.",
        "« Et il faut un juge, dit Malandain. Quelqu'un qui ne creuse pas, qui ne veut pas de terre, et qui sait l'heure. » Il se tourne vers le fourneau. « Le cuisinier. »"
      ],
      choices: [
        { label: "Accepter d'être le juge", to: "TW_juge" },
        { label: "Refuser, et dire qu'il fait la soupe, pas la loi", fx: { flag: "tw:refus" }, to: "TW_couteaux" }
      ] },
    TW_paris: { act: "IV", title: "Le tour de terre", place: "plage", ambiance: "nature", second: true,
      text: [
        "Malandain tient les paris sur un tonneau renversé, avec une ardoise et un bout de craie. On parie des parts de trésor qu'on n'a pas, des bouteilles qu'on a bues, des chemises. Les cotes changent toutes les heures, au gré des rapports de la longue-vue. Le Dréau rentrera. Le Dréau ne rentrera pas. Le Dréau rentrera mort.",
        "« Tu veux jouer, cuisinier ? dit Malandain. Non, c'est vrai, tu es juge. » Il rit. Il efface un chiffre avec son pouce. « Tu sais pourquoi j'ai inventé cette règle ? Pour qu'ils se battent contre le soleil plutôt que les uns contre les autres. Le soleil, au moins, on sait qu'il gagne. Ça les calme de le voir gagner. »",
        "Il regarde vers la butte, où le chapeau de Fargue fait une tache noire sur le rocher plat. « Et puis, un homme qui veut trop de terre, sur une île, c'est dangereux. Il finit par vouloir la tienne. Autant qu'il marche. »",
        "Fargue le regarde écrire sur son ardoise. Il pense que Malandain joue aux échecs sans échiquier, avec des hommes, et qu'il est meilleur qu'il n'en a l'air. Il remonte sur la butte, auprès de son chapeau."
      ],
      choices: [
        { label: "Remonter près du chapeau", back: "TW_juge" }
      ] },
    TW_juge: { act: "IV", title: "Le tour de terre", place: "plage", ambiance: "nature", second: true,
      text: [
        { first: true, text: "À l'aube, tout le camp est sur la butte qui domine la plage, au bord de la forêt. Fargue pose son chapeau sur un rocher plat, au sommet. C'est le point de départ et d'arrivée. Le Dréau part en courant, avec six piquets de bambou sur l'épaule, une pelle, une gourde, et un morceau de biscuit." },
        { first: true, text: "Fargue le regarde partir. Il marche vite, droit vers l'est, vers la vallée. Il plante son premier piquet à une demi-lieue, au bord du ruisseau. Puis il continue, parce que, plus loin, il y a un bosquet de cocotiers. Puis plus loin encore, parce qu'il y a une prairie." },
        { first: true, text: "Fargue s'assied à côté de son chapeau, avec une marmite de café et une longue-vue. Les autres retournent à leurs tamis, à leurs pelles, à leur rhum. Ils reviendront au coucher du soleil, pour voir. Ça leur fera un spectacle." },
        { first: true, text: "Le soleil monte. Il fait chaud, sur l'île, d'une chaleur d'étuve qui monte du sol mouillé. Dans la longue-vue, Le Dréau est un petit point qui court, qui s'arrête, qui plante, qui repart, toujours plus loin." },
        { again: true, text: "Le chapeau sur le rocher plat, la marmite de café, la longue-vue. Au loin, un point qui court." }
      ],
      choices: [
        { label: "Descendre voir Malandain, qui prend les paris au bord du feu", to: "TW_paris", hide: { seen: "TW_paris" } },
        { label: "Attendre midi, et regarder où il en est", to: "TW_midi" }
      ] },
    TW_rival: { act: "IV", title: "Le tour de terre", place: "plage", ambiance: "nature", second: true,
      text: [
        "Jaffrézic monte sur la butte en s'essuyant le front. C'est lui qui voulait la vallée, hier soir, couteau à moitié sorti. Il prend la longue-vue, regarde longtemps, la rend.",
        "« Il va trop loin, dit-il. Il ne rentrera pas. » Il ne sourit pas. Il s'assied à côté de Fargue, sur le rocher, et il reste là, à regarder vers le nord, avec une drôle de figure.",
        "« On était mousses ensemble, dit-il au bout d'un moment. Sur un baleinier. Il avait faim, déjà. Il volait le biscuit des autres, la nuit, et il le cachait dans son hamac, et il ne le mangeait pas. Il le gardait. Il en avait des kilos, à la fin, tout moisi. On l'a battu pour ça. Il a recommencé. » Il crache. « Je la lui laisse, sa vallée. Qu'il rentre. »",
        "Il redescend vers le camp sans attendre de réponse. Fargue le regarde partir, et se dit que la seule personne au monde qui souhaite sincèrement le retour de Le Dréau est celle à qui il voulait prendre la vallée."
      ],
      choices: [
        { label: "Revenir à la longue-vue", back: "TW_midi" }
      ] },
    TW_midi: { act: "IV", title: "Le tour de terre", place: "plage", ambiance: "nature", second: true,
      text: [
        { first: true, text: "À midi, Fargue fait le compte. Le Dréau a planté trois piquets. Le troisième est à deux lieues de la butte, au fond de la vallée, au pied de la cascade. Il vient de tourner vers le nord. Il devrait déjà revenir. Il continue." },
        { first: true, text: "Dans la longue-vue, on le voit s'arrêter, boire à sa gourde, la secouer, la jeter. Elle est vide. Il repart. Il court moins vite." },
        { first: true, text: "Fargue sait ce qu'il fait. Il le voit dans la longue-vue comme il le verrait dans une partie d'échecs : un joueur qui prend un pion, puis un autre, puis un autre, et qui ne voit pas que son roi est seul au milieu de l'échiquier. Le Dréau a vu, au nord, un plateau de terre rouge, plat, magnifique. Il le veut. Il ira le chercher, et le soleil ne l'attendra pas." },
        { first: true, text: "Le juge doit rester près du chapeau. C'est la règle. Fargue regarde la gourde pleine, à côté de lui, sous le rocher. Puis il regarde le point qui court." },
        { again: true, text: "Le soleil a passé midi. Dans la longue-vue, le point s'éloigne toujours." }
      ],
      choices: [
        { label: "Prêter la longue-vue à Jaffrézic, qui monte voir où en est son rival", to: "TW_rival", hide: { seen: "TW_rival" } },
        { label: "Rester près du chapeau, comme le juge doit le faire", fx: { flag: "tw:juge" }, to: "TW_soir" },
        { label: "Prendre la gourde, et partir à sa rencontre", fx: { flag: "tw:eau" }, to: "TW_course" }
      ] },
    TW_soir: { act: "IV", title: "Le tour de terre", place: "plage", ambiance: "nature", second: true,
      text: [
        "Il reste. Il boit son café. Il regarde.",
        "À quatre heures, Le Dréau plante son cinquième piquet, au nord, au bord du plateau rouge, et il se retourne enfin vers la butte. Il est à trois lieues. Le soleil est bas sur la mer. Il se met à courir.",
        "Le camp revient sur la butte, en riant, pour le spectacle. On parie. On crie. On voit, dans la longue-vue qui passe de main en main, un homme qui court en titubant, sans chapeau, sans gourde, la pelle jetée, la chemise arrachée, les bras battant l'air comme des ailes cassées. Il plante son sixième piquet en tombant à genoux, à mi-chemin, et se relève, et court.",
        "Le soleil touche l'eau. Le Dréau arrive au pied de la butte. Il monte. Il monte à quatre pattes, en râlant, avec un bruit de soufflet de forge crevé. Les hommes crient, l'encouragent, rient. Il tend la main vers le chapeau. Le bord du soleil s'enfonce dans la mer. Sa main touche le chapeau.",
        "Il reste là, la main sur le chapeau, face contre terre. Il ne bouge plus. Le sang lui sort de la bouche.",
        "Fargue le retourne. Il est mort. Le cœur, sans doute, ou ce qui en tient lieu chez les avares.",
        "Malandain regarde le corps, longtemps. Puis il prend la pelle d'un des hommes et la tend à Fargue. « Tu es le juge, dit-il. Donne-lui sa terre. » Fargue creuse. Six pieds de long, deux de large, quatre de profondeur, au sommet de la butte, à côté du rocher plat. C'est tout ce qu'il lui fallait."
      ],
      choices: [
        { label: "Redescendre au camp", fx: { quest: "TW" }, back: "A4f_jours" }
      ] },
    TW_course: { act: "IV", title: "Le tour de terre", place: "sylve", ambiance: "nature", second: true,
      text: [
        "Il laisse le chapeau sur le rocher. Il prend la gourde. Il descend la butte, entre dans la forêt, et marche vers le nord, à travers la chaleur, sur la piste que Le Dréau a laissée, une piste de branches cassées et de piquets plantés de travers.",
        "Il le trouve à trois heures, au bord du plateau rouge, assis sur une pierre, la bouche ouverte, les lèvres fendues, les yeux vitreux. Il a encore deux piquets sur l'épaule. Il veut se lever quand il voit Fargue. Il dit que le juge n'a pas le droit. Que c'est de la triche. Que Jaffrézic l'a payé.",
        "Fargue lui met la gourde dans les mains. Il boit. Il boit tout. Puis Fargue lui dit, d'une voix de cuisinier qui annonce que la soupe est trop salée, qu'il est à trois lieues du chapeau, que le soleil se couche dans trois heures, et qu'un homme dans son état fait une lieue à l'heure, s'il ne meurt pas avant. Il lui dit de planter ses deux derniers piquets ici, maintenant, et de revenir en ligne droite, en marchant. Il aura un petit carré. Il sera vivant dessus.",
        "Le Dréau le regarde avec haine. Il regarde le plateau rouge. Il regarde le soleil. Il pleure, un peu, de rage. Puis il plante ses deux piquets, là, à ses pieds, et il revient avec Fargue, en marchant, en s'appuyant sur son épaule.",
        "Il touche le chapeau une demi-heure avant le coucher du soleil. Le camp siffle, se moque, crie qu'il s'est dégonflé. Il a un champ de cailloux en forme de trapèze, au bord d'un ruisseau. Il garde pour Fargue un silence de rancune. Mais il mange sa soupe, le soir, à côté du feu, et il est vivant pour la manger."
      ],
      choices: [
        { label: "Rentrer au camp avec lui", fx: { quest: "TW" }, back: "A4f_jours" }
      ] },
    TW_couteaux: { act: "IV", title: "Le tour de terre", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Fargue dit qu'il fait la soupe, pas la loi. Qu'un cuisinier qui juge finit toujours par se faire servir dans sa propre marmite. Qu'ils se débrouillent. Il tourne le dos et remue son ragoût.",
        "Malandain hausse les épaules. Sans juge, la règle tombe. La querelle reprend, plus fort. Le Dréau et Jaffrézic se lèvent. Quelqu'un rit. Quelqu'un dit : à la loyale. Un cercle se fait, au bord du feu. Les couteaux sortent pour de bon.",
        "C'est court. C'est toujours court. Le Dréau est plus rapide, Jaffrézic plus lourd. Une estafilade, une autre, un cri. Jaffrézic tombe assis, la main sur le flanc, avec du sang qui coule entre ses doigts. Le Dréau essuie sa lame sur sa cuisse, et dit que la vallée est à lui.",
        "Personne ne le conteste. Fargue pose sa louche, prend une aiguille, du fil, une bouteille de rhum, et va recoudre Jaffrézic à la lueur du feu, à genoux dans le sable, pendant que le blessé jure et que les autres reprennent leurs conversations sur les cochons et les esclaves.",
        "Le Dréau, le lendemain, part seul vers la vallée, avec six piquets. Il en plante partout. Il dort au milieu, le couteau à la main, pour qu'on ne les lui vole pas. Fargue pense que la règle de Malandain aurait au moins eu l'avantage de lui donner une heure pour rentrer."
      ],
      choices: [
        { label: "Revenir au fourneau", fx: { quest: "TW" }, back: "A4f_jours" }
      ] }
  },
  extras: {
    people: {
      ledreau: { name: "Bénézet Le Dréau", aka: ["le gabier aux bras de singe"], qui: "Gabier mutin de la Cormorane, quarante ans, qui a eu toute sa vie un peu moins que les autres et veut la vallée de la cascade." }
    },
    quests: [
      { id: "TW", act: "IV", kind: "annexe", title: "Le tour de terre", start: "TW_querelle", doit: "combienterre", echo: ["tw:refus", "tw:juge", "tw:eau"] }
    ]
  }
};
