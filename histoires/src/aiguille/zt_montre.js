// L'Île Folle-Aiguille · side story « La montre d'argent » (owes its question to Mateo Falcone: what is a betrayal worth,
// when it is paid with a trinket?). On the moor of Lannoz, a young man runs out of the heather, bleeding at the thigh,
// and begs the child to hide him: he deserted the guard-ship of the Amirauté. The child hides him in a peat stack. Half
// an hour later, two guards come, and the sergeant, kind, tired, takes out a silver watch that chimes the hours. The
// child points to the stack (zt:montre), sends them the wrong way (zt:cache), or says nothing at all, neither way
// (zt:rien). Wired in A3o_lannoz.
module.exports = {
  passages: {
    ZT_lande: { act: "III", title: "La montre d'argent", place: "lannoz", ambiance: "nature",
      fx: { meet: "jaffre" },
      text: [
        "Il sort de la bruyère à dix pas de toi, d'un coup, comme un lièvre levé par un chien, et il tombe à genoux dans la tourbe. Un garçon de dix-huit ans, en culotte de toile goudronnée et chemise de matelot, tête nue, les pieds en sang, avec une longue estafilade à la cuisse qui a trempé le pantalon jusqu'au genou. Il est hors d'haleine. Il a des yeux d'animal pris.",
        "« Cache-moi, dit-il. Je t'en supplie. Les gardes. Je me suis sauvé de la *Vigilante*, le garde-côte, en rade. On m'a pris de force à Morlenc il y a deux ans, à la sortie d'un bal, avec une corde. Deux ans sans descendre à terre. Ma mère est à Lannoz, à trois lieues. Je voulais la voir. Une fois. Après, je me rends, je le jure. S'ils me prennent avant, c'est cent coups de garcette, et le fer pour la vie. »",
        "Il te montre, dans son dos, sous la chemise déchirée, ce qu'il a déjà reçu. Tu détournes les yeux.",
        "Il y a, à vingt pas, une meule de tourbe, haute comme une maison, que les tourbiers ont laissée sécher pour l'hiver, avec un trou à la base, pour l'air.",
      ],
      choices: [{ label: "Le pousser dans le trou, et refermer avec des mottes", to: "ZT_gardes" }] },
    ZT_gardes: { act: "III", title: "La montre d'argent", place: "lannoz", ambiance: "nature",
      text: [
        "Tu le caches. Tu refermes avec des mottes, en effaçant le sang sur la bruyère avec ta manche. Tu t'assieds sur une pierre, à côté, avec un brin d'herbe dans la bouche, comme un enfant qui garde des moutons qu'il n'a pas.",
        "Une demi-heure plus tard, deux gardes de l'Amirauté sortent de la bruyère, essoufflés, en habit bleu à boutons de cuivre, le mousqueton à la bretelle. Un jeune, maigre, l'air méchant. Et un sergent de cinquante ans, gros, rouge, la moustache grise, qui s'éponge le front avec un mouchoir à carreaux, et qui te regarde avec une bonhomie lasse de grand-père.",
        "« Dis donc, l'enfant, dit le sergent. Tu n'aurais pas vu passer un gars, par ici ? Un matelot, qui saigne ? » Il tire de son gousset une montre. Une montre d'argent, ronde, épaisse, avec un couvercle gravé d'une ancre, et une chaîne. Il presse un bouton. La montre sonne l'heure, trois petits coups clairs, comme une cloche de chapelle pour les fées. « Elle est à toi, si tu me dis où il est. Je ne la donne pas souvent. »",
        "Tu n'as jamais eu de montre. À la Pointe, personne n'a de montre ; on lit l'heure à la marée. Tu la regardes, dans la grosse main rouge, qui brille. Tu entends encore les trois petits coups clairs. Derrière toi, dans la meule de tourbe, tu entends, très bas, quelqu'un qui retient sa respiration.",
      ],
      choices: [
        { label: "Montrer la meule du menton, et tendre la main", fx: { flag: "zt:montre" }, to: "ZT_montre" },
        { label: "Montrer, de l'autre côté, le chemin des tourbières", fx: { flag: "zt:cache" }, to: "ZT_cache" },
        { label: "Hausser les épaules, et ne rien montrer du tout", fx: { flag: "zt:rien" }, to: "ZT_rien" },
      ] },
    ZT_montre: { act: "III", title: "La montre d'argent", place: "lannoz", ambiance: "nature",
      text: [
        "Tu montres la meule. Le sergent hoche la tête, avec une tristesse sincère, et te donne la montre. Le jeune garde défait les mottes à coups de crosse. On sort le garçon par les pieds, comme un furet d'un terrier. Il ne se débat pas. Il te regarde, pendant qu'on lui lie les mains, avec une sorte d'étonnement, sans colère, comme on regarde une marche d'escalier qui a cédé.",
        "On l'emmène vers la côte. Le sergent, en passant, te tapote la tête. « Tu as bien fait, mon enfant. La loi, c'est la loi. » Le garçon, lui, se retourne une fois, au bord de la bruyère, et dit, assez fort pour que tu entendes : « Ma mère s'appelle Jaffré. Au bourg. La maison avec le figuier. Dis-lui que je suis venu jusqu'ici. Dis-lui que j'ai presque vu le clocher. »",
        "Tu restes seul{e} sur la lande avec la montre. Tu la remontes. Tu presses le bouton. Elle sonne trois petits coups clairs. Tu restes loin du bourg, et de la maison au figuier. Le soir, à bord, dans ton hamac, tu presses le bouton encore, dans le noir, pour entendre l'heure. Elle sonne. Elle sonnera toujours. C'est une très bonne montre.",
      ],
      choices: [{ label: "Regagner l'anse", fx: { quest: "ZT" }, back: "A3o_lannoz" }] },
    ZT_cache: { act: "III", title: "La montre d'argent", place: "lannoz", ambiance: "nature",
      text: [
        "Tu montres l'autre côté, le chemin des tourbières, vers l'est. Tu dis que tu as vu passer quelqu'un, en courant, qui boitait. Le sergent te regarde une seconde de trop. Puis il range la montre dans son gousset, sans te la donner, et fait signe au jeune. Ils s'en vont vers l'est, dans la bruyère, au pas de course.",
        "Tu attends qu'ils aient disparu. Tu défais les mottes. Le garçon sort, gris de tourbe, en tremblant. Il te serre dans ses bras, très fort, en sentant la sueur et la peur, et il pleure, et il ne dit rien. Puis il s'en va vers l'ouest, vers le bourg, en boitant, en se courbant dans la bruyère.",
        "Une heure plus tard, tu entends, très loin, vers l'est, un coup de mousqueton. Un seul. Tu ne sais pas sur quoi ils ont tiré. Sur un lièvre, peut-être. Le soir, sur la grève, le sergent remonte vers son canot, seul avec le jeune, les mains vides. En passant devant toi, il s'arrête. Il tire la montre de son gousset, presse le bouton. Trois petits coups clairs. « Tu vois, mon enfant, dit-il, elle sonne aussi pour les menteurs. » Et il s'en va, sans colère, en s'épongeant le front.",
      ],
      choices: [{ label: "Regagner l'anse", fx: { quest: "ZT" }, back: "A3o_lannoz" }] },
    ZT_rien: { act: "III", title: "La montre d'argent", place: "lannoz", ambiance: "nature",
      text: [
        "Tu hausses les épaules. Tu ne montres rien. Ni la meule, ni l'autre côté. Tu regardes le sergent, et tu mâches ton brin d'herbe, et tu attends. Le sergent te regarde. Il regarde la meule. Il regarde le sang, sur ta manche, que tu n'as pas pensé à cacher. Il soupire.",
        "Il range la montre. Il dit au jeune garde : « On fouille la lande à l'est. » Le jeune proteste, montre la meule, dit qu'il y a du sang, là, sur la manche du petit. Le sergent répète : « À l'est. » Sa voix ne change pas. Le jeune obéit, en crachant par terre. Le sergent part derrière lui, lourd, essoufflé, et en passant à côté de la meule, sans s'arrêter, sans tourner la tête, il dit à voix haute, pour la bruyère : « Le bourg, c'est à l'ouest. Le figuier, c'est la troisième maison. Après, tu te rends. Tu as juré. »",
        "Quand ils ont disparu, le garçon sort de la tourbe. Il te regarde. Tu le regardes. Vous ne dites rien. Il s'en va vers l'ouest. Tu restes sur ta pierre, longtemps, à comprendre que le sergent a tout su depuis le début, et qu'il voulait seulement savoir ce que tu ferais, et qu'il n'a pas eu à se servir de sa montre.",
      ],
      choices: [{ label: "Regagner l'anse", fx: { quest: "ZT" }, back: "A3o_lannoz" }] },
  },
  extras: {
    people: {
      jaffre: { name: "Le fils Jaffré", aka: ["le déserteur"], qui: "Un matelot de dix-huit ans, déserteur du garde-côte de l'Amirauté, dont la mère vit au bourg de Lannoz." },
    },
    quests: [
      { id: "ZT", act: "III", kind: "annexe", title: "La montre d'argent", start: "ZT_lande", doit: "mateofalcone", echo: ["zt:montre", "zt:cache", "zt:rien"] },
    ],
  },
};
