// L'Île Folle-Aiguille · side story « La rempailleuse » (owes its question to Maupassant's La Rempailleuse: what is a
// lifetime of love worth to the one who never asked for it, and who should carry the savings of a nobody?). Act III,
// Victorine at Lannoz: an old chair-mender is dying in her cart at the edge of the moor. She has loved the village
// mercer since she was eight, followed his life from the roadside for fifty years, and saved, sou by sou, a purse for
// him. She asks the doctor to bring it to him after her death, and to tell him why. Victorine delivers money and story
// (tx:remet), delivers the money without the story (tx:tait), or gives the purse to the poor of Lannoz (tx:pauvres).
// Wired in A3x_lannoz.
module.exports = {
  passages: {
    TX_charrette: { act: "III", title: "La rempailleuse", place: "lannoz", ambiance: "village",
      fx: { meet: "gwenn" },
      text: [
        "Au bord de la lande, à l'entrée du village, il y a une charrette à bras sous une bâche rapiécée, avec un âne maigre attaché à un ajonc, et autour, par terre, des bottes de paille de seigle et trois chaises dépaillées qui attendent. Un garçon court chercher la médecin du navire : la rempailleuse est malade, elle crache rouge, elle demande quelqu'un qui sache.",
        "Sous la bâche, sur un lit de paille, une vieille femme. Petite, toute ridée, brune comme une noix, avec des mains déformées par cinquante ans de paille tressée, des doigts tordus en crochets, et des yeux noirs, encore vifs, qui regardent Victorine monter dans la charrette avec une sorte de soulagement.",
        "On l'appelle la Gwenn. Elle n'a pas d'autre nom, ou elle l'a oublié. Elle passe à Lannoz deux fois par an depuis cinquante ans, au printemps et à l'automne, avec son âne et ses bottes de paille, et elle rempaille les chaises de tout le pays.",
        "Victorine l'examine. C'est le poumon, et c'est la fin : quelques jours, peut-être moins. Elle le lui dit, parce que la vieille le lui demande, et parce qu'il y a des visages auxquels on ne ment pas. La Gwenn hoche la tête. « C'est bien, dit-elle. J'ai le temps de vous raconter. Asseyez-vous sur la paille. Ça ne pique pas, quand on a l'habitude. »"
      ],
      choices: [
        { label: "S'asseoir sur la paille et l'écouter", to: "TX_recit" }
      ] },
    TX_heureuse: { act: "III", title: "La rempailleuse", place: "lannoz", ambiance: "village",
      text: [
        "La Gwenn réfléchit. Elle réfléchit longtemps, avec sérieux, comme on vérifie un compte.",
        "« Oui, dit-elle enfin. Deux fois par an. » Elle rit, et le rire la fait tousser. « Le reste du temps, j'étais sur la route. La route, c'est long, mais on a de quoi penser. Je pensais à lui. Je me demandais ce qu'il mangeait, s'il avait froid, si sa femme était gentille. Je me faisais des histoires. Il était malade, et je le soignais. Il était ruiné, et je lui donnais ma bourse. Il était veuf, et il me cherchait sur les routes. »",
        "Elle tapote la bourse, sous la paille. « Ça occupe, vous savez. Plus qu'un mari. Un mari, ça vous dit ce qu'il mange. Ça ne laisse rien à imaginer. »",
        "Victorine pense à Hector, au portrait tourné contre le mur. Elle pense que la vieille rempailleuse a peut-être aimé plus commodément qu'elle, et pas moins. Elle garde cette pensée pour elle, comme on garde une pièce trop petite pour être dépensée."
      ],
      choices: [
        { label: "Revenir à la bourse qu'elle tend", back: "TX_recit" }
      ] },
    TX_recit: { act: "III", title: "La rempailleuse", place: "lannoz", ambiance: "village",
      text: [
        { first: true, text: "« J'avais huit ans. Mes parents étaient rempailleurs avant moi, sur les routes. On passait à Lannoz. Il y avait un petit garçon, le fils du mercier, Fañch Le Cozic, qui pleurait derrière la mercerie, parce que deux grands lui avaient volé deux sous. Moi, j'avais sept sous, que j'avais gagnés en tressant. Je les lui ai donnés. Tous. Il a arrêté de pleurer. Il les a pris. Il m'a laissée l'embrasser. Une fois, sur la joue." },
        { first: true, text: "« Alors l'année d'après, je suis revenue avec des sous. Je les avais gardés toute l'année, je les avais volés à mes parents. Je les lui ai donnés. Il m'a laissée l'embrasser. L'année d'après, pareil. Ça a duré quatre ans. Puis il est parti au collège, à Morlenc. Il est revenu avec un chapeau. Il ne m'a plus regardée. »" },
        { first: true, text: "Elle tousse. Elle s'essuie. Elle sourit." },
        { first: true, text: "« Je ne lui en veux pas. Il est devenu mercier, comme son père. Il a épousé la fille du notaire. Il a deux enfants. Je passe devant sa boutique deux fois par an. Je le regarde par la vitre. Il ne me voit pas. Il a grossi. Il est très bien. »" },
        { first: true, text: "Elle tire de sous la paille, avec ses doigts en crochets, une bourse de cuir, lourde, rapiécée, nouée trois fois. « Ce sont mes économies. Cinquante ans. J'ai gardé tout ce que je n'ai pas mangé. Je veux que vous les lui portiez, quand je serai morte. À lui. Et que vous lui disiez pourquoi. Je veux qu'il sache, une fois. Rien qu'une fois. Que quelqu'un l'a aimé toute sa vie. »" },
        { again: true, text: "La Gwenn tient la bourse de cuir sur sa poitrine, avec ses doigts en crochets, et attend." }
      ],
      choices: [
        { label: "Lui demander si elle a été heureuse", to: "TX_heureuse", hide: { seen: "TX_heureuse" } },
        { label: "Prendre la bourse, et veiller avec elle", to: "TX_veille" }
      ] },
    TX_charrette_vide: { act: "III", title: "La rempailleuse", place: "lannoz", ambiance: "village",
      text: [
        "Victorine range la charrette. Elle plie la bâche, elle met les bottes de paille en tas, elle détache l'âne et lui donne à boire. C'est un âne gris, très vieux, aux oreilles déchirées, qui la regarde faire avec une indifférence de philosophe.",
        "Sous le lit de paille, dans une caisse, il y a tout ce que possédait la Gwenn. Une chemise de rechange. Un peigne. Des aiguilles à rempailler, longues comme des poinçons, polies par cinquante ans de doigts. Un chapelet sans croix. Et, enveloppé dans un mouchoir, un dessin au fusain, sur un papier jauni, très naïf : un petit garçon qui pleure derrière une boutique, avec, au-dessus de la porte, une enseigne où l'on a écrit, en lettres maladroites, COZIC.",
        "Elle avait payé un dessinateur de foire, peut-être, pour le faire de mémoire. Ou elle l'avait fait elle-même, une nuit, sous la bâche, à la chandelle, en s'appliquant.",
        "Victorine remet le dessin dans le mouchoir. Elle le met dans sa poche, à côté de la bourse. Elle ne sait pas encore ce qu'elle en fera. L'âne la regarde, et retourne à son seau."
      ],
      choices: [
        { label: "Revenir sur le bord de la lande", back: "TX_veille" }
      ] },
    TX_veille: { act: "III", title: "La rempailleuse", place: "lannoz", ambiance: "nuit",
      text: [
        { first: true, text: "Victorine reste la nuit sous la bâche, sur la paille, à tenir la main en crochet. La Gwenn parle encore un peu, des chaises surtout. Elle dit qu'une chaise bien rempaillée dure quarante ans, et qu'elle a rempaillé des chaises où se sont assis des gens qui sont morts depuis, et que les chaises, elles, sont toujours là, solides, à attendre d'autres derrières. Elle trouve ça consolant." },
        { first: true, text: "Elle meurt avant l'aube, sans bruit, en tressant dans le vide, avec ses doigts, une paille qu'elle seule voit." },
        { first: true, text: "Au matin, Victorine ouvre la bourse. Il y a dedans deux cent trente-sept livres, en sous, en liards, en pièces d'argent noircies, une petite fortune pour une femme qui couchait sous une bâche. Et, au fond, sept sous anciens, très usés, enveloppés à part dans un chiffon, avec un brin de paille noué autour." },
        { first: true, text: "Elle va voir la mercerie. C'est la plus belle boutique de Lannoz, avec une vitrine peinte et une enseigne dorée : *LE COZIC, MERCERIE, NOUVEAUTÉS*. Derrière le comptoir, un gros homme rose de soixante ans, à favoris, qui mesure un ruban pour une cliente. Sa femme, à la caisse, sèche, pointue, compte la monnaie avec des yeux de pie." },
        { again: true, text: "La charrette, la bâche, la paille où la Gwenn est morte, et l'âne qui attend." }
      ],
      choices: [
        { label: "Ranger la charrette, avant que les gens du village ne viennent", to: "TX_charrette_vide", hide: { seen: "TX_charrette_vide" } },
        { label: "Entrer dans la mercerie", to: "TX_mercerie" }
      ] },
    TX_mercerie: { act: "III", title: "La rempailleuse", place: "lannoz", ambiance: "village",
      fx: { meet: "lecozic" },
      text: [
        "Elle entre. Elle demande à parler à monsieur Le Cozic, en particulier. On la fait passer dans l'arrière-boutique, entre les cartons de boutons et les pièces de drap. Madame Le Cozic vient aussi, sans y être invitée.",
        "Victorine dit d'abord qu'une femme est morte cette nuit, au bord de la lande, la rempailleuse. Monsieur Le Cozic fronce les sourcils. Il cherche. « La Gwenn ? dit sa femme. La vieille à l'âne ? Elle avait rempaillé nos chaises de salle à manger, l'an dernier. Mal, d'ailleurs. Elles grincent. »",
        "Victorine regarde le mercier. Il est gros, rose, honnête, satisfait, un peu bête. Il a un pli de contrariété entre les sourcils, parce qu'on le dérange un jour de marché. Il ne se souvient de rien. Il a oublié une enfant de huit ans et sept sous derrière une boutique, comme on oublie un parapluie.",
        "Elle a, dans sa poche, la bourse de cuir rapiécée, lourde comme un cœur."
      ],
      choices: [
        { label: "Poser la bourse sur la table et tout lui raconter", fx: { flag: "tx:remet" }, to: "TX_remet" },
        { label: "Poser la bourse sur la table, et dire seulement que c'est un legs", fx: { flag: "tx:tait" }, to: "TX_tait" },
        { label: "Garder la bourse, et la porter au recteur, pour les pauvres de Lannoz", fx: { flag: "tx:pauvres" }, to: "TX_pauvres" }
      ] },
    TX_remet: { act: "III", title: "La rempailleuse", place: "lannoz", ambiance: "village",
      text: [
        "Elle pose la bourse sur la table, entre les boutons. Elle raconte tout. Les sept sous. Le baiser sur la joue. Les quatre ans. Le chapeau. Les cinquante ans de passages devant la vitre. La bourse. Elle le raconte simplement, sans rien ajouter, comme la Gwenn l'a raconté.",
        "Monsieur Le Cozic devient rouge, puis cramoisi. Il a l'air d'un homme qu'on accuse d'un vol. « Une rempailleuse ! dit-il. Une vagabonde ! Elle m'a... toute sa vie... Mais c'est indécent ! Si ça se savait ! » Madame Le Cozic, elle, dit qu'on aurait dû la faire arrêter, cette femme, pour vagabondage, qu'elle rôdait devant la boutique, qu'elle l'avait toujours trouvée bizarre.",
        "Puis ils regardent la bourse. Ils se taisent. Madame Le Cozic dénoue les trois nœuds. Elle compte, très vite, du bout des doigts. Deux cent trente-sept livres.",
        "« Enfin, dit le mercier, après un long silence, puisque c'était sa volonté. On ne peut pas refuser la volonté d'une morte. Ce serait un manque de respect. » Sa femme approuve. Ils prennent l'argent. Ils proposent même de garder l'âne, et la charrette, pour les livraisons.",
        "Victorine sort. Elle a dans sa poche les sept sous anciens, enveloppés de chiffon, avec leur brin de paille. Elle les a gardés hors de la bourse, sans savoir pourquoi. Elle les pose, en partant, sur la tombe fraîche que le fossoyeur creuse, au bout du cimetière, pour une femme sans nom."
      ],
      choices: [
        { label: "Rentrer à bord", fx: { quest: "TX" }, back: "A3x_lannoz" }
      ] },
    TX_tait: { act: "III", title: "La rempailleuse", place: "lannoz", ambiance: "village",
      text: [
        "Elle pose la bourse sur la table. Elle dit que la rempailleuse a laissé ses économies à monsieur Le Cozic, par testament verbal, devant témoin, et qu'elle est ce témoin. Le pourquoi, elle le garde. Elle dit qu'elle l'ignore. Que les vieilles femmes ont des idées.",
        "Le mercier est stupéfait. Sa femme compte. Deux cent trente-sept livres. Ils se regardent. Monsieur Le Cozic dit qu'elle était peut-être reconnaissante, pour une chaise qu'il lui avait payée un bon prix, autrefois. Sa femme dit que c'est sûrement ça. Ils sont contents. Ils trouvent la vieille très convenable, finalement, pour une vagabonde.",
        "Victorine sort. Elle a gardé l'histoire pour elle. Elle se dit qu'elle a trahi la morte, qui voulait qu'on sache, une fois. Elle se dit aussi qu'elle l'a protégée, qu'elle a évité à cinquante ans d'amour d'être traités d'indécents dans une arrière-boutique, entre deux cartons de boutons. Laquelle de ces deux pensées est la vraie, elle l'ignore.",
        "Le lendemain, elle voit, en passant devant la mercerie, monsieur Le Cozic qui regarde, par la vitre, la route de la lande, avec un air perplexe, comme un homme qui cherche un nom qu'il a sur le bout de la langue. Puis une cliente entre, et il sourit, et il mesure un ruban."
      ],
      choices: [
        { label: "Rentrer à bord", fx: { quest: "TX" }, back: "A3x_lannoz" }
      ] },
    TX_pauvres: { act: "III", title: "La rempailleuse", place: "lannoz", ambiance: "village",
      text: [
        "Elle garde la bourse dans sa poche. Elle dit au mercier qu'elle voulait seulement le prévenir de la mort de la rempailleuse, qui avait réparé ses chaises. Il dit que c'est bien triste, d'un ton distrait, et il retourne à son ruban.",
        "Elle monte chez le recteur, au milieu de ses ruches. Elle lui donne la bourse. Elle lui raconte tout, à lui, sous le sceau du secret, et elle lui demande d'en faire du pain, des sabots, des couvertures, pour les pauvres de Lannoz, l'hiver, au nom de la Gwenn. Rien qu'au nom de la Gwenn.",
        "Le recteur l'écoute, les mains pleines de cire. Il dit qu'elle n'a pas le droit. Que c'était la volonté de la morte. Qu'on ne détourne pas un legs. Victorine dit que la morte voulait qu'un homme sache qu'on l'avait aimé, et que cet homme-là ne méritait ni l'argent ni la nouvelle. Le recteur la regarde longtemps. Puis il soupire, et il range la bourse dans un tiroir.",
        "« Vous êtes dure, dit-il. Elle était plus généreuse que vous. » Victorine dit que oui. Elle dit que c'est justement pour ça qu'il faut que quelqu'un, une fois, soit dur à sa place.",
        "Avant de partir, elle met les sept sous anciens, enveloppés de chiffon, dans le tronc de l'église. Ils y tombent avec un petit bruit sec, comme sept grains de seigle."
      ],
      choices: [
        { label: "Rentrer à bord", fx: { quest: "TX" }, back: "A3x_lannoz" }
      ] }
  },
  extras: {
    people: {
      gwenn: { name: "la Gwenn", aka: ["la rempailleuse"], f: true, qui: "Vieille rempailleuse des routes, qui passait à Lannoz deux fois l'an depuis cinquante ans, avec son âne et ses bottes de seigle." },
      lecozic: { name: "Fañch Le Cozic", aka: ["le mercier de Lannoz"], qui: "Mercier de Lannoz, soixante ans, gros, rose, honnête, marié à la fille du notaire." }
    },
    quests: [
      { id: "TX", act: "III", kind: "annexe", title: "La rempailleuse", start: "TX_charrette", doit: "rempailleuse", echo: ["tx:remet", "tx:tait", "tx:pauvres"] }
    ]
  }
};
