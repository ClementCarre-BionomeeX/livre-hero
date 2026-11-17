// L'Île Folle-Aiguille · side story « C'est écrit là-haut » (owes its question to Diderot's Jacques the Fatalist: does
// believing that everything is written set a man free, or excuse him?). Act IV, Victorine at the chapel: Jobard Le
// Moigne, a gabier who believes that everything is written up there, stands on the wall in full view to smoke his
// pipe, and the younger men begin to copy him. When a ball takes him in the forearm, he refuses to be treated: if it is
// written that he lives, he will live. Victorine treats him by force under laudanum (uh:force), beats him at his own
// game, since it was surely written that she would treat him (uh:argument), or leaves him to his fate as he asks
// (uh:laisse). Wired in A4w_jours.
module.exports = {
  passages: {
    UH_histoire: { act: "IV", title: "C'est écrit là-haut", place: "misericorde", ambiance: "nature",
      text: [
        "Victorine monte sur le mur, un soir, à côté de lui, et s'assied, les jambes dans le vide, du côté de la chapelle, ce qui est une manière de compromis. Le Moigne la regarde avec un plaisir évident. Il lui offre sa blague à tabac. Elle refuse. Il dit qu'elle a tort, que ce qui est écrit pour le tabac est écrit aussi, et il commence une histoire.",
        "C'est l'histoire de son premier capitaine, un homme qui croyait que tout était écrit, et qui l'avait appris dans un livre, chez un marchand de vin de Morlenc qui l'avait gagné aux cartes contre un philosophe. Le capitaine avait une jambe de bois, qu'il avait perdue d'une façon qui mérite qu'on la raconte, et Le Moigne commence à raconter la jambe, puis s'interrompt pour raconter le philosophe, puis le marchand de vin, qui avait une fille, et la fille, qui avait un amoureux à Varnèse.",
        "Une balle siffle, frappe la pierre à deux pieds d'eux, fait voler un éclat. Le Moigne ne se retourne pas. Il dit que celle-là était pour l'amoureux de Varnèse, qui est mort depuis vingt ans d'une indigestion de moules, et qu'elle a dû se tromper d'époque. Il reprend l'histoire de la fille. Il ne revient jamais à la jambe du capitaine.",
        "Au bout d'une heure, la nuit tombe. Il a raconté onze histoires, dont aucune n'a de fin. Victorine lui demande comment se termine celle de la jambe. Il dit qu'il ne sait pas. Il dit que c'est écrit quelque part, mais qu'il n'a jamais eu le temps de le lire, parce qu'une autre histoire commençait toujours avant. Il dit que c'est peut-être ça, la vie : une histoire qu'on interrompt pour en raconter une autre, et qui finit quand on ne regarde pas."
      ],
      choices: [
        { back: "UH_mur", label: "Redescendre dans la cour de la chapelle" }
      ] },
    UH_jeune: { act: "IV", title: "C'est écrit là-haut", place: "misericorde", ambiance: "nature",
      text: [
        "Le plus jeune des garçons du mur s'appelle Yannick, il a seize ans, il est novice, et il a des taches de rousseur jusque sur les paupières. Victorine le trouve dans la cour, au pied du mur, en train de se rouler une cigarette avec des mains qui tremblent, parce qu'il a vu Le Moigne fumer et qu'il veut faire pareil.",
        "Elle lui demande pourquoi il monte. Il rougit. Il dit que c'est pour montrer qu'il n'a pas peur. Elle lui demande à qui. Il réfléchit. Il dit : à Le Moigne. Puis : aux autres. Puis : à lui-même. Puis il avoue qu'il a très peur, tout le temps, sur le mur, qu'il serre les fesses à chaque balle, et qu'il monte justement pour ça, pour que la peur s'en aille, parce que Le Moigne dit qu'elle s'en va quand on sait que tout est écrit.",
        "Elle lui demande si elle s'en va. Il dit que non. Pas encore. Il dit que Le Moigne dit qu'il faut du temps. Il roule sa cigarette, la rate, la recommence. Il dit qu'il a écrit à sa mère, le premier soir, avant de monter, une lettre où il lui dit adieu, au cas où, et qu'il l'a cachée dans sa vareuse. Il demande à Victorine, s'il lui arrive quelque chose, de l'envoyer.",
        "Victorine prend la lettre qu'il lui tend. Elle la met dans sa trousse. Elle lui dit qu'elle l'enverra, le jour venu, si c'est écrit. Il sourit, soulagé. Puis elle ajoute que, à son avis, ce qui est écrit sur ce mur, c'est surtout l'adresse de sa mère. Il ne comprend pas. Il comprendra plus tard, ou pas."
      ],
      choices: [
        { back: "UH_mur", label: "Retourner dans la cour de la chapelle" }
      ] },
    UH_mur: { act: "IV", title: "C'est écrit là-haut", place: "misericorde", ambiance: "nature",
      fx: { meet: "lemoigne" },
      text: [
        { first: true, text: "Chaque soir, à l'heure où les mutins tirent le plus, Jobard Le Moigne monte sur le mur de la chapelle, s'assied les jambes dans le vide, côté plage, et bourre sa pipe. Il la bourre lentement. Il l'allume au briquet, en s'y reprenant à trois fois à cause du vent. Il fume. Les balles sifflent autour de lui, frappent la pierre, font voler des éclats. Il ne baisse pas la tête. Quand on lui crie de descendre, il répond, de sa voix tranquille de Morlenc : « Ce qui est écrit là-haut est écrit. La balle qui me tuera est fondue depuis longtemps. Celles-là, ce sont celles des autres. »" },
        { first: true, text: "C'est un gabier d'une quarantaine d'années, maigre, gai, bavard comme une pie, qui a passé sa vie à raconter des histoires qu'il ne finit jamais, parce qu'une autre histoire le prend en chemin. Il tient sa philosophie de son ancien capitaine, qui la tenait d'un livre, qu'il n'a jamais lu. Elle lui a réussi : trois naufrages, deux abordages, une fièvre jaune, et pas une égratignure. Il dit que c'est la preuve. Les autres disent que c'est de la chance. Il dit que la chance, c'est le nom que les ignorants donnent à ce qui est écrit." },
        { first: true, text: "Le troisième soir, il n'est plus seul sur le mur. Deux jeunes l'ont rejoint, pour faire les braves. Le quatrième, ils sont cinq. La capitaine Ribaud les fait descendre à coups de gueule. Ils remontent dès qu'elle a le dos tourné. Victorine compte, chaque soir, les têtes alignées sur le mur, et elle sait ce qu'elle comptera bientôt dans la sacristie." },
        { again: true, text: "Le Moigne fume sur le mur de la chapelle, les jambes dans le vide, et les balles des mutins font voler la pierre autour de lui." }
      ],
      choices: [
        { label: "Monter s'asseoir sur le mur, un soir, à côté de Le Moigne, et écouter son histoire", to: "UH_histoire", hide: { seen: "UH_histoire" } },
        { label: "Parler au plus jeune des garçons qui montent sur le mur", to: "UH_jeune", hide: { seen: "UH_jeune" } },
        { label: "Attendre ce qui doit arriver", to: "UH_balle" }
      ] },
    UH_balle: { act: "IV", title: "C'est écrit là-haut", place: "misericorde", ambiance: "nature",
      text: [
        "Ça arrive le cinquième soir. Une balle, plus heureuse que les autres, traverse l'avant-bras gauche de Le Moigne, entre les deux os, et ressort par-derrière. Il ne tombe pas du mur. Il regarde son bras avec intérêt, comme un passant regarde une vitrine. Puis il descend, tout seul, en tenant sa pipe de la main droite pour ne pas la renverser. Les quatre autres descendent derrière lui, beaucoup plus vite qu'ils ne sont montés.",
        "À la sacristie, Victorine examine la plaie. Un os est touché, peut-être les deux. Il faut ouvrir, nettoyer, retirer les esquilles, et remettre l'os, ou le bras pourrira, et il faudra couper au coude. Elle le lui dit. Il écoute poliment. Puis il dit qu'il ne veut pas. Il dit que si c'est écrit qu'il garde son bras, il le gardera, et que si c'est écrit qu'il le perd, il le perdra, et qu'aucun bistouri n'y changera rien. Il dit qu'il ne va pas faire souffrir pour rien une médecin si occupée.",
        "Il le dit sans bravade, avec une sérénité parfaite, en rallumant sa pipe. Il dit qu'il n'a pas peur. C'est vrai. Il dit qu'il n'est pas malheureux. C'est vrai aussi. Il demande s'il peut retourner sur le mur, ce soir, avec son bras en écharpe, puisque la balle d'aujourd'hui n'était visiblement pas la bonne. Autour, les quatre jeunes écoutent, bouche bée, et Victorine voit leurs yeux briller d'une admiration qui va les tuer.",
      ],
      choices: [
        { label: "Le faire tenir, l'endormir au laudanum, et opérer quand même", fx: { flag: "uh:force" }, to: "UH_force" },
        { label: "Lui démontrer que c'était écrit, qu'elle l'opérerait ce soir", fx: { flag: "uh:argument" }, to: "UH_argument" },
        { label: "Respecter sa volonté, panser seulement, et le laisser à son destin", fx: { flag: "uh:laisse" }, to: "UH_laisse" },
      ] },
    UH_force: { act: "IV", title: "C'est écrit là-haut", place: "misericorde", ambiance: "nature",
      text: [
        "Elle fait signe à Benoît Quémeneur et à Fréville. Ils le tiennent. Il ne se débat pas : il trouve la chose très intéressante. Elle lui fait boire trente gouttes de laudanum dans un fond de rhum, et il les boit, par politesse. Il s'endort en commençant l'histoire d'un perroquet qu'il a connu dans un port des longues routes dont il cherche encore le nom, et qu'il ne finit pas. Elle opère. Deux esquilles. Une artère qu'elle ligature. L'os remis, l'attelle, le bandage. Elle travaille une heure.",
        "Il se réveille le lendemain matin, le bras en écharpe, et il demande ce qui s'est passé. Elle le lui dit. Il réfléchit. Puis il éclate de rire, et il dit que c'était donc écrit qu'il serait opéré malgré lui, et qu'il ne s'en serait pas douté, et que le destin a de l'humour. Il la remercie. Il n'est pas fâché du tout. Il est ravi. Elle vient de lui fournir la meilleure histoire de sa vie, et il la commence aussitôt, aux blessés de la sacristie, et il ne la finit pas.",
        "Le bras guérit. Le Moigne remonte sur le mur, avec son écharpe, le soir même où il peut tenir debout. Les quatre jeunes, eux, ne remontent pas : ils ont entendu le bruit de la scie qu'on n'a pas utilisée, et vu le sang dans la cuvette. Victorine pense qu'elle a sauvé un bras contre la volonté de son propriétaire, et qu'elle n'a pas converti l'homme. Elle pense que sa philosophie à lui est à l'épreuve des balles et des bistouris. Elle pense qu'elle aurait dû l'attacher au mur du bas.",
      ],
      choices: [{ label: "Retourner aux blessés", fx: { quest: "UH" }, back: "A4w_jours" }] },
    UH_argument: { act: "IV", title: "C'est écrit là-haut", place: "misericorde", ambiance: "nature",
      text: [
        "Elle s'assied en face de lui. Elle lui dit qu'elle est d'accord. Tout est écrit. Le jour de sa naissance, cette balle, ce bras. Et donc, forcément, cette médecin, ici, ce soir, avec ce bistouri, dans cette sacristie. Elle n'est pas venue par hasard sur cette île. Si c'est écrit qu'il garde son bras, c'est peut-être écrit qu'il le gardera par elle. Et s'il refuse, c'est peut-être écrit aussi qu'il refusera, et qu'il le perdra, et que le grand rouleau, là-haut, n'attendait que son refus pour s'accomplir. Elle demande comment il compte savoir lequel des deux est écrit, avant de choisir.",
        "Le Moigne la regarde, la pipe à la main. Il ne s'attendait pas à rencontrer, à la sacristie, un adversaire de sa force. Il réfléchit. Il dit que l'argument est bon, très bon même, et que son capitaine n'aurait pas mieux dit. Il dit qu'on ne peut jamais savoir ce qui est écrit avant que ce soit arrivé, et que c'est bien là toute la difficulté de la chose. Il dit qu'en attendant, il faut bien choisir quelque chose, comme si rien n'était écrit, et que c'est très ennuyeux. Puis il tend son bras.",
        "Elle opère. Il reste éveillé tout du long, en mordant un bâton, et quand il peut parler, entre deux esquilles, il commente le destin, en latin de cuisine, pour les quatre jeunes, qui regardent, livides. Il leur explique que même un fataliste doit tendre le bras quand on lui montre le bistouri, parce que c'est peut-être écrit qu'il le tende. Les quatre jeunes ne comprennent pas tout. Ils comprennent qu'il ne faut pas monter sur le mur. Ils ne montent plus.",
        "Le Moigne garde son bras, et sa philosophie, qu'il a perfectionnée. Il remonte sur le mur, mais en se baissant quand une balle siffle, et il explique à qui veut l'entendre que c'était écrit, qu'il se baisserait. Victorine se dit qu'elle l'a battu avec ses propres armes, et qu'il en est ressorti plus fort, et que les gens qui ont une philosophie gagnent toujours, même quand ils perdent. Elle se dit qu'elle l'envie un peu.",
      ],
      choices: [{ label: "Retourner aux blessés", fx: { quest: "UH" }, back: "A4w_jours" }] },
    UH_laisse: { act: "IV", title: "C'est écrit là-haut", place: "misericorde", ambiance: "nature",
      text: [
        "Elle dit qu'elle respecte sa volonté. Elle nettoie la plaie, en surface, sans ouvrir. Elle bande. Elle met le bras en écharpe. Elle lui dit ce qui risque d'arriver, et à quoi il le verra : la rougeur, la chaleur, l'odeur. Il la remercie. Il dit qu'elle est la première médecin qui l'écoute, et que si c'est écrit qu'il meure, il mourra en disant du bien d'elle. Il remonte sur le mur le soir même, avec son écharpe. Les quatre jeunes le suivent.",
        "Le bras rougit le troisième jour. Il chauffe le quatrième. Le cinquième, il sent, et Le Moigne vient trouver Victorine à la sacristie, de lui-même, pâle, en sueur, et il tend le bras. Il dit que ça doit être écrit qu'il vienne. Elle coupe au coude. Il n'y a plus d'autre choix. Il ne crie pas. Il raconte, pendant l'opération, une histoire de baleine qu'il ne finit pas, et s'évanouit au milieu.",
        "Il vit. Il a un bras. Il dit que c'était écrit. Il le dit avec la même sérénité, et Victorine ne sait pas s'il faut l'admirer ou le secouer. Les quatre jeunes, eux, ont vu la scie, et la cuvette, et le bras sur la table. Ils ne remontent plus sur le mur. L'un d'eux vient même lui dire merci, sans savoir pourquoi.",
        "Victorine se dit qu'elle a laissé un homme payer un bras pour sa philosophie, et que cela a sauvé quatre têtes. Elle se dit que ce n'était peut-être pas son droit de faire ce compte-là, ni avec le bras d'un autre. Elle se dit aussi que c'était son bras à lui, et sa philosophie à lui, et qu'elle l'a respecté jusqu'à la scie. Le Moigne, lui, n'a aucun regret. Il dit que tout est bien, puisque tout est écrit. Il le dit d'une seule main.",
      ],
      choices: [{ label: "Retourner aux blessés", fx: { quest: "UH" }, back: "A4w_jours" }] },
  },
  extras: {
    people: {
      lemoigne: { name: "Jobard Le Moigne", aka: ["le fataliste"], qui: "Gabier de la Cormorane, resté à la chapelle, qui croit que tout est écrit là-haut." },
    },
    quests: [
      { id: "UH", act: "IV", kind: "annexe", title: "C'est écrit là-haut", start: "UH_mur", doit: "jacques", echo: ["uh:force", "uh:argument", "uh:laisse"] },
    ],
  },
};
