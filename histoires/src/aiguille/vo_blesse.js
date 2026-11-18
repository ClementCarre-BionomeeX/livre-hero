// L'Île Folle-Aiguille · side story « Celui qui te cherchait » (owes its question to Tolstoy's The Three Questions:
// what is the right moment, who is the person who matters, and what is the thing to do?). Act IV, the hermit's hut: the
// child, alone at the pool while the old man is away, finds at the foot of the Table a young mutineer, Gurvan Bertel,
// sent by Malandain to find the child, fallen into a ravine, his leg broken. The child makes him talk about the camp before giving
// him water (vo:livre), leaves him water and goes away (vo:laisse), or carries him to the hut (VO_hutte). Then, healed enough
// to walk, he asks to go back to the camp, which means the hut will be known: the child lets him go (vo:libre) or keeps
// him until the end (vo:garde). Wired in A4n_jours.
module.exports = {
  passages: {
    VO_ravin: { act: "IV", title: "Celui qui te cherchait", place: "cabane", ambiance: "nature",
      fx: { meet: "bertel" },
      text: [
        "Le vieil homme est parti à l'aube vers le nord, avec son sac et son bâton, sans dire où, comme il le fait quelquefois. Tu descends seul{e} à la vasque, au pied de la Table, pour remplir les calebasses. C'est là que tu entends le gémissement, dans les fougères, au fond de la ravine qui longe la falaise : un bruit de bête prise au piège, avec des mots dedans.",
        "C'est un homme. Un garçon plutôt, vingt ans à peine, en vareuse de la Cormorane, couché sur les pierres au fond de la ravine, la jambe gauche tordue sous lui dans un angle qui fait mal à regarder. Il est tombé de la falaise, la nuit sans doute. Il a un pistolet à la ceinture, mouillé, inutile, et un couteau. Tu le reconnais. Gurvan Bertel, un matelot de la bordée de Malandain, qui riait toujours un peu trop fort quand Malandain riait.",
        "Il te voit. Il a d'abord peur, puis il a honte, puis il a de nouveau peur. Il dit, la voix cassée par la soif : « C'est toi qu'on cherche. Malandain m'a envoyé. Avec deux autres, qui sont rentrés. Moi, j'ai voulu couper par la falaise. » Il rit, d'un rire affreux. « Je t'ai trouvé{e}, hein ? » Puis il pleure, parce qu'il a vingt ans, une jambe cassée, et soif depuis la veille. Il demande de l'eau. Tu as deux calebasses pleines.",
      ],
      choices: [{ label: "Descendre dans la ravine, avec l'eau", to: "VO_choix" }] },
    VO_choix: { act: "IV", title: "Celui qui te cherchait", place: "cabane", ambiance: "nature",
      text: [
        "Tu lui donnes à boire. Il boit comme un chien, à longues gorgées, et s'étrangle, et boit encore. Tu prends son pistolet et son couteau, et il te laisse faire. Tu regardes la jambe : l'os n'a pas percé la peau, mais il est cassé net, sous le genou. Tu as vu, un hiver, au Fanal, le rebouteux de Varnèse remettre la jambe d'un pêcheur tombé de sa barque, sur la table de la salle. Tu te souviens de chaque geste, et du cri.",
        "Tu réfléchis. Si tu le laisses là, il mourra peut-être, ou peut-être pas : ses camarades finiront par le chercher, ou ne le chercheront pas. Si tu le portes à la hutte, il saura où vit le vieil homme, où tu dors, ce qu'il y a dans la hutte, et il ne pourra pas l'oublier. Et il sait, lui, des choses sur le camp que tu donnerais cher pour savoir : combien ils sont à te chercher, et par où ils passent.",
        "Gurvan te regarde réfléchir. Il comprend tout ce que tu penses, au fur et à mesure, à la façon dont ton regard va de sa jambe à la falaise, de la falaise au sentier de la hutte. Il ne supplie pas. Il dit seulement, d'une petite voix d'enfant : « Fais ce que tu dois. Mais fais-le maintenant, s'il te plaît. Ça fait mal. »",
      ],
      choices: [
        { label: "Le porter, comme tu peux, jusqu'à la hutte", to: "VO_hutte" },
        { label: "Reprendre la calebasse, et le faire parler du camp avant de lui rendre à boire", fx: { flag: "vo:livre" }, to: "VO_livre" },
        { label: "Lui laisser l'eau et un abri de branches, et repartir", fx: { flag: "vo:laisse" }, to: "VO_laisse" },
      ] },
    VO_hutte: { act: "IV", title: "Celui qui te cherchait", place: "cabane", ambiance: "nature",
      text: [
        "Il te faut deux heures pour le remonter jusqu'à la hutte, à moitié porté, à moitié traîné, sur une civière de branches que tu tires comme un cheval de halage, en t'arrêtant tous les vingt pas. Il serre les dents. Il ne crie qu'une fois, quand la civière bascule dans le ruisseau. À la hutte, tu lui remets la jambe comme tu as vu faire, en tirant d'un coup, et il s'évanouit, et tu poses deux attelles de bambou, bien serrées, avec des lianes. Tu vomis derrière la hutte. Puis tu reviens lui faire boire du bouillon.",
        "Le vieil homme rentre à la nuit. Il regarde le garçon couché sur sa propre paillasse, la jambe éclissée, le pistolet du garçon accroché à côté du sien, au-dessus de la porte. Il regarde les attelles, longuement, en connaisseur. Il hoche la tête. Puis il fait cuire ses graines, en en mettant pour trois. Le lendemain, il taille au garçon une béquille dans une branche fourchue, en sifflotant, sans lui adresser un mot.",
        "Gurvan guérit vite, comme on guérit à vingt ans. Au bout de quatre jours, il marche avec la béquille. Il t'aide à porter l'eau. Il raconte le camp : la peur, la faim, Malandain qui frappe, le cuisinier qui tient tout avec sa louche. Il dit qu'il n'a jamais voulu de la mutinerie, qu'il a suivi. Un soir, devant le feu, il dit qu'il voudrait rentrer, qu'il a là-bas un frère de lait, qu'on le croira mort. Il ne promet rien. Il sait qu'il ne pourrait pas tenir une promesse de silence devant Malandain. Il le dit. C'est la chose la plus honnête qu'il ait dite.",
      ],
      choices: [
        { label: "Le laisser partir, avec sa béquille et sans son pistolet", fx: { flag: "vo:libre" }, to: "VO_libre" },
        { label: "Lui dire qu'il restera à la hutte jusqu'à ce que tout soit fini", fx: { flag: "vo:garde" }, to: "VO_garde" },
      ] },
    VO_libre: { act: "IV", title: "Celui qui te cherchait", place: "cabane", ambiance: "nature",
      text: [
        "Tu le raccompagnes jusqu'à la vasque, à l'aube. Il s'appuie sur sa béquille. Il te serre la main, maladroitement, comme on fait entre hommes sur le port, et il te dit merci, et il ajoute qu'il dira qu'il est tombé, et qu'il s'est soigné tout seul, dans une grotte, et qu'il espère qu'on le croira. Il ne te regarde pas en le disant. Puis il part, en boitant, vers le sud, vers la plage, et la forêt le reprend.",
        "Le vieil homme, qui vous a suivis de loin, s'assied à côté de toi sur une pierre. Il te demande si tu sais ce que tu viens de faire. Tu dis que oui. Il dit que non, et que lui non plus, et que c'est pour ça que c'était la bonne chose : on ne sait jamais ce qu'on fait au moment où on le fait, on sait seulement qui est en face de soi. Il dit que le seul moment qui compte, c'est celui-là, et que la seule personne qui compte, c'est celle-là, et que tout le reste, c'est de la stratégie, pour les capitaines. Puis il se lève et va déplacer, sans se presser, ses deux livres les plus précieux dans une cachette que tu ne connaissais pas.",
        "Personne ne vient. Pas ce jour-là, ni le lendemain, ni jamais. Tu ne sauras pas si Gurvan a tenu sa langue, ou si on ne l'a pas cru, ou si Malandain avait autre chose en tête. Tu sais seulement qu'un matin, près de la vasque, sur la pierre où tu remplis les calebasses, tu trouves une béquille de bois fourchue, posée là, la poignée polie par une main. Il l'a rapportée lui-même, de nuit, à travers la forêt. Sans elle.",
      ],
      choices: [{ label: "Rentrer à la hutte", fx: { quest: "VO" }, back: "A4n_jours" }] },
    VO_garde: { act: "IV", title: "Celui qui te cherchait", place: "cabane", ambiance: "nature",
      text: [
        "Tu lui dis qu'il restera. Que ce n'est pas une prison, qu'il n'y a pas de porte, mais que s'il part, tu le suivras, et que tu sais marcher dans la forêt mieux que lui, et que tu as son pistolet. Il te regarde longtemps. Puis il rit, pour la première fois, un vrai rire, sans Malandain dedans. Il dit que c'est la première fois qu'on le garde quelque part parce qu'on tient à lui, même si c'est pour de mauvaises raisons. Il reste.",
        "Il reste jusqu'à la fin, à la hutte, avec sa béquille, à porter l'eau, à fendre le bois, à apprendre du vieil homme le nom des arbres et la manière de griller les graines. Le vieil homme le fait lire, le soir, dans ses livres gonflés, et Gurvan, qui ne savait pas lire, ânonne, et le vieil homme le corrige sans jamais se lasser. Ils s'entendent bien, tous les deux. Tu en ressens presque de la jalousie, et tu t'en veux.",
        "Le dernier soir, avant que tu redescendes vers les tiens, Gurvan te dit qu'il ne retournera pas au camp. Il dit que là-bas, il était un des hommes de Malandain, et qu'ici, il a été quelqu'un d'autre pendant quelques jours, quelqu'un qu'il ne connaissait pas, et qu'il voudrait le rester encore un peu. Il dit que tu lui as volé sa liberté et que c'est le plus beau vol dont il ait jamais été victime. Il le dit en riant. Il a les larmes aux yeux.",
      ],
      choices: [{ label: "Rentrer à la hutte", fx: { quest: "VO" }, back: "A4n_jours" }] },
    VO_livre: { act: "IV", title: "Celui qui te cherchait", place: "cabane", ambiance: "nature",
      text: [
        "Tu reprends la calebasse. Tu la poses sur une pierre, à un pas de lui, hors de portée. Tu lui dis qu'il boira quand il aura parlé. Il te regarde, et il comprend, et ce qu'il y a dans ses yeux, à ce moment-là, tu mettras longtemps à l'oublier : sans haine, une sorte de compréhension fatiguée, comme s'il avait toujours su que le monde finirait par lui faire ça, et qu'il s'étonnait seulement que ce soit toi.",
        "Il parle. Très vite, sans qu'il faille insister, les yeux sur la calebasse. Ils sont trois à te chercher, chaque jour, deux qui rentrent le soir et lui qui a voulu faire le malin. Ils passent par le ruisseau et par le col de l'est. Malandain veut te prendre vivant{e}, pour savoir ce que tu as vu. Le cuisinier ne sait rien de ces battues, ou fait semblant. Ils n'ont jamais trouvé la hutte. Ils pensent que tu dors dans les grottes de la côte. Puis il se tait, et tu lui rends l'eau, et il boit, et il pleure en buvant.",
        "Tu lui laisses l'eau, ton pain, un abri de branches, et les mains libres. Tu remontes à la hutte et tu racontes tout au vieil homme, qui t'écoute en fumant. Il dit que ce que tu as appris vous servira : vous éviterez le ruisseau et le col pendant quelques jours, et la hutte restera ce qu'elle est, un endroit que personne ne trouve. Puis il ajoute, sans te regarder : « Tu l'as payé avec sa soif. C'est une monnaie qui a cours, ici. Rappelle-toi le prix. » Le lendemain, l'abri de branches est vide, et des traces de civière partent vers la plage.",
      ],
      choices: [{ label: "Rentrer à la hutte", fx: { quest: "VO" }, back: "A4n_jours" }] },
    VO_laisse: { act: "IV", title: "Celui qui te cherchait", place: "cabane", ambiance: "nature",
      text: [
        "Tu lui laisses les deux calebasses, ton morceau de pain, et tu lui coupes des branches pour faire un abri contre le soleil. Tu lui dis que tu ne peux rien faire d'autre. Il hoche la tête. Il dit que c'est déjà beaucoup, que les siens n'en auraient pas fait autant. Tu emportes son pistolet et son couteau. Tu remontes vers la hutte, et pendant toute la montée, tu entends sa voix, qui ne t'appelle pas, qui ne dit rien, et c'est pire.",
        "Le lendemain, tu redescends. Malgré toi. L'abri de branches est vide. Les calebasses sont vides. Il y a, dans la terre de la ravine, des traces de pas, plusieurs hommes, et les marques d'une civière qu'on a traînée. Ses camarades sont venus. Ou d'autres. Tu ne sais pas lesquels. Tu suis les traces un moment. Elles vont vers le sud, vers la plage. Elles ne vont pas vers la chapelle.",
        "Tu ne le revois jamais, ni au camp, ni sur la plage, ni dans les récits. Peut-être est-il vivant. Tu as fait la moitié de ce qu'il fallait, ou le double, selon le jour où tu y penses. Le vieil homme, quand tu lui racontes, te demande seulement si tu as laissé le pain. Tu dis oui. Il dit : « Alors tu as laissé quelque chose. » Et il retourne à son livre. Tu restes longtemps devant le feu à te demander si le pain suffisait.",
      ],
      choices: [{ label: "Rentrer à la hutte", fx: { quest: "VO" }, back: "A4n_jours" }] },
  },
  extras: {
    people: {
      bertel: { name: "Gurvan Bertel", aka: ["le matelot à la jambe cassée"], qui: "Jeune matelot de la Cormorane, passé avec les mutins, de la bordée de Malandain." },
    },
    quests: [
      { id: "VO", act: "IV", kind: "annexe", title: "Celui qui te cherchait", start: "VO_ravin", doit: "troisquestions", echo: ["vo:livre", "vo:laisse", "vo:libre", "vo:garde"] },
    ],
  },
};
