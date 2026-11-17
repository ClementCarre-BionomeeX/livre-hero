// L'Île Folle-Aiguille · side story « Le rayon vert » (owes its question to Verne's Le Rayon vert: does one chase the
// sign that promises to make you see clearly, or look at what is beside you?). Act III, the ship's boy at the Shaper's
// islet: old Cariou, a topman retired from the yards, wants to climb the hill at sunset to see the green flash, which,
// he says, cures those who see it from ever being wrong about a heart. He has been wrong about one for forty years. On
// the climb the boy understands that the old man's eyes are going. Two evenings: clouds, then a clear sky. The boy
// lies and says he saw it too (tl:ment), tells him the truth about his eyes (tl:verite), or describes to him the sunset
// as it happens, colour by colour (tl:raconte). Wired in A3n_ilot.
module.exports = {
  passages: {
    TL_tabouret: { act: "III", title: "Le rayon vert", place: "ilot", ambiance: "nature",
      fx: { meet: "cariou" },
      text: [
        "Le père Cariou t'arrête sur la plage, en fin d'après-midi, d'une main sur l'épaule. Un vieux gabier qui ne monte plus aux vergues depuis des années et que la capitaine garde à bord pour des raisons qu'elle ne donne pas : il épisse mieux que personne, il connaît tous les nuages par leur nom, et il fume, contre le guindeau, une pipe vide depuis Morlenc, faute de tabac, avec la même application que si elle était pleine.",
        "« Toi, dit-il. Tu as des jambes. Moi, j'ai un tabouret. On va les mettre ensemble et les monter là-haut. » Il montre le sommet de la colline, rond, chauve, déjà doré par le soir.",
        "Tu lui demandes pourquoi. Il te regarde de ses petits yeux de goéland, cerclés de rouge, et il dit, comme on annonce le menu : « Pour voir le rayon vert. »",
        "Il explique, puisque tu ne connais pas. Quand le soleil se couche sur une mer bien nette, sans un nuage, sans une brume, il arrive, une fois sur cent, qu'au tout dernier instant, juste quand le bord du soleil s'enfonce, il jette une lueur verte. Un éclair. Le vert le plus pur qu'on puisse voir sur la terre, plus vert que l'émeraude, plus vert que l'herbe du premier jour. Et celui qui le voit, disent les vieux, ne se trompe plus jamais sur les cœurs. Ni le sien, ni celui des autres.",
        "« Ça fait cinquante ans que je le cherche, dit-il. Je l'ai raté onze fois, à cause d'un nuage, d'une brume, d'un éternuement. Ici, la mer est plate comme une table, et le ciel est propre. Je n'aurai pas de meilleure occasion. Prends le tabouret. »"
      ],
      choices: [
        { label: "Prendre le tabouret et monter avec lui", to: "TL_montee" }
      ] },
    TL_montee: { act: "III", title: "Le rayon vert", place: "ilot", ambiance: "nature",
      text: [
        "Il monte lentement, en soufflant, une main sur ton épaule, l'autre sur un bâton de palmier. Il raconte, pour se donner du souffle, les nuages qu'on voit à travers les arbres : ceux-là, ce sont des queues de chat, ça veut dire du vent dans deux jours ; ceux-là, des moutons, ça veut dire rien du tout, ce sont des menteurs.",
        "À mi-pente, une racine barre le sentier, grosse comme un bras, en plein soleil. Il marche dessus sans la voir. Il tombe. Tu le rattrapes à moitié. Il se relève en jurant, se frotte le genou, et dit que c'est la faute de l'ombre. L'endroit est en plein soleil.",
        "Plus haut, tu lui montres un oiseau rouge, sur une branche, rouge vif, comme une goutte de cire à cacheter. Il plisse les yeux. « Le gris, là ? dit-il. Oui. Joli. »",
        "Tu comprends à ce moment-là, et tu gardes ça pour toi, parce qu'il recommence à parler des nuages, très vite, en regardant devant lui."
      ],
      choices: [
        { label: "Arriver au sommet", to: "TL_premier" }
      ] },
    TL_premier: { act: "III", title: "Le rayon vert", place: "ilot", ambiance: "nature",
      text: [
        "Au sommet, il pose le tabouret sur le rocher, face à l'ouest, l'ajuste trois fois, s'assied comme un amiral sur sa dunette. Le soleil descend vers la mer des Sargues, énorme, orange, et la mer jaune devient rouge, puis violette, et les chenaux d'eau entre les herbes s'allument comme des rues de ville où l'on allume les réverbères un par un.",
        "Et puis, juste avant que le soleil touche l'eau, un nuage. Un seul, petit, tout seul dans le ciel, venu d'on ne sait où, qui se place juste devant, comme un huissier à une porte.",
        "« Moutons, dit le père Cariou. Menteurs. »",
        "Il ne se lève pas. Il reste assis dans la nuit tombante, la pipe vide aux dents. Puis il raconte, sans que tu demandes, comme on raconte à un mousse parce qu'un mousse, demain, aura oublié.",
        "Il y a cinquante ans, à Kervellec, il y avait une fille, Anna-Vari. Il lui a demandé de l'attendre, avant sa première campagne aux baleines. Elle a gardé le silence. Il est parti en se disant qu'un silence de fille, c'est un non qui a de l'éducation. Il a fait les baleines, les glaces, les Mers chaudes, et il a laissé passer cinquante ans sans une lettre et sans un retour. Il a appris sa mort l'an dernier, par un pays qu'il a croisé dans une taverne de Morlenc. Elle était restée fille. Elle avait gardé, sur sa cheminée, cinquante ans, un morceau de fanon de baleine qu'il lui avait donné à dix-sept ans, pour rire.",
        "« Je me suis trompé une fois, dit-il. Une seule. Elle a duré toute la vie. Je voudrais ne plus me tromper, pour le temps qui reste. Demain, on remonte. »"
      ],
      choices: [
        { label: "Le redescendre à la nuit, et remonter le lendemain soir", to: "TL_second" }
      ] },
    TL_second: { act: "III", title: "Le rayon vert", place: "ilot", ambiance: "nature",
      text: [
        "Le lendemain, le ciel est d'une propreté de vitre. Pas un nuage, pas un fil de brume, d'un bord à l'autre. La mer des Sargues est si plate, si immobile, qu'on la dirait tendue sur un métier. Le père Cariou monte plus vite que la veille, en te tirant par la manche. Il s'installe sur son tabouret, face à l'ouest. Il ne parle plus des nuages.",
        "Le soleil descend. Il touche la mer. Il s'écrase un peu, comme une orange qu'on pose sur une table. Il s'enfonce, moitié, trois quarts, il n'en reste qu'un fil, un ongle, une braise.",
        "Et au moment où la braise s'éteint, il jette une lueur. Une seule. Courte comme un clin d'œil. D'un vert si pur, si neuf, que tu en as mal aux yeux, que tu en as la gorge serrée, et que tu te demandes, une seconde, s'il existe vraiment, ce vert-là, ou s'il vient d'être inventé pour toi.",
        "Puis rien. Le ciel orange. La mer violette. Le silence.",
        "À côté de toi, le père Cariou n'a pas bougé. Il a les yeux grands ouverts, plissés, tendus vers l'horizon, avec cette intensité de chien d'arrêt qu'ont les très vieux marins.",
        "« Alors ? » dit-il tout bas, sans se tourner. « C'était maintenant ? Tu l'as vu, toi ? Moi, je crois que... C'était gris. C'était tout gris. »"
      ],
      choices: [
        { label: "Lui dire qu'il l'a vu, qu'il était vert, que c'était le rayon", fx: { flag: "tl:ment" }, to: "TL_ment" },
        { label: "Lui dire la vérité sur ses yeux, et sur l'oiseau rouge", fx: { flag: "tl:verite" }, to: "TL_verite" },
        { label: "Lui raconter ce que tu as vu, couleur par couleur", fx: { flag: "tl:raconte" }, to: "TL_raconte" }
      ] },
    TL_ment: { act: "III", title: "Le rayon vert", place: "ilot", ambiance: "nature",
      text: [
        "Tu dis oui. Tu dis qu'il l'a vu, qu'il était vert, que c'était lui, qu'il l'a vu en même temps que toi, puisqu'il était là, et qu'il ne faut pas confondre un éclair vert avec un éclair gris, quand on a cinquante ans de mer : c'est l'éblouissement, après, qui fait gris.",
        "Il se tourne vers toi. Il te regarde longtemps, dans la lumière qui baisse, de ses petits yeux rouges qui voient mal. Tu soutiens le regard. Tu crois le soutenir.",
        "« Bon, dit-il enfin. Alors ça y est. » Il se lève, plie son tabouret. « Alors je ne me tromperai plus. »",
        "Il descend devant toi, sans s'appuyer sur ton épaule, en tâtant le sentier du bout du bâton. À mi-pente, sans se retourner, il dit : « Tu mens bien, mousse. Tu mens gentiment. Elle aussi, elle mentait gentiment. Elle disait toujours que mes baleines étaient les plus grosses. » Il rit, un rire de crécelle, dans la nuit. Tu ne sais pas s'il a vu le rayon dans ta voix, ou le mensonge, ou les deux. Peut-être que c'est la même chose."
      ],
      choices: [
        { label: "Redescendre vers la crique", fx: { quest: "TL" }, back: "A3n_ilot" }
      ] },
    TL_verite: { act: "III", title: "Le rayon vert", place: "ilot", ambiance: "nature",
      text: [
        "Tu lui dis que tu l'as vu. Qu'il était vert, oui, le vert le plus pur du monde. Et que lui, il ne pouvait pas le voir, parce que l'oiseau d'hier était rouge, rouge comme une goutte de cire, et qu'il l'a vu gris, et que la racine était en plein soleil.",
        "Il ne répond pas tout de suite. Il regarde l'horizon, là où le soleil est tombé. Il passe sa main devant ses yeux, lentement, plusieurs fois, comme on essuie une vitre.",
        "« Je m'en doutais, dit-il. Depuis Morlenc. Les drisses rouges, je les prends pour les blanches. La capitaine le sait, je crois. Elle me garde pour mes nuages. Les nuages, je les vois encore. C'est gris, un nuage. »",
        "Il se lève. Il te tend le tabouret. « Merci, mousse. Tu as raison de me le dire. Il y avait une fille qui aurait dû me le dire, elle aussi, quand j'avais dix-sept ans, ce qu'elle pensait. Elle s'est tue. Moi aussi. Ça fait deux muets et une vie perdue. Toi, tu parles. Garde ça. »",
        "Il descend en s'appuyant sur ton épaule, cette fois, de tout son poids, et sans faire semblant."
      ],
      choices: [
        { label: "Redescendre vers la crique", fx: { quest: "TL" }, back: "A3n_ilot" }
      ] },
    TL_raconte: { act: "III", title: "Le rayon vert", place: "ilot", ambiance: "nature",
      text: [
        "Tu t'assieds par terre, à côté du tabouret, et tu racontes. Tu racontes depuis le début, comme si c'était à refaire. Le soleil qui touche l'eau et s'écrase comme une orange. La mer qui passe du rouge au violet. Les chenaux qui s'allument comme des rues. L'ongle, la braise. Et le vert, à la fin, tu cherches comment le dire, et tu dis : le vert de la première feuille de hêtre, au printemps, quand on la regarde par en dessous avec le soleil derrière. Le vert d'une bouteille de cidre qu'on lève à la chandelle. Le vert que tu n'as jamais vu ailleurs.",
        "Il écoute, les yeux fermés. Il hoche la tête à chaque couleur, comme on coche une liste.",
        "« Recommence, dit-il. Le vert. »",
        "Tu recommences. Tu l'inventes un peu, la deuxième fois. Il le sait sûrement.",
        "Il reste longtemps silencieux. Puis il dit : « Elle avait les yeux de cette couleur-là, Anna-Vari. Je ne m'en étais pas souvenu depuis quarante ans. Je viens de m'en souvenir. Le rayon, il est peut-être là, après tout. Dans ce qu'on se rappelle quand quelqu'un vous le dit. »",
        "Il se lève, plie son tabouret, et descend devant toi, en tâtant le sentier, en fredonnant un air de Kervellec que tu ne connais pas."
      ],
      choices: [
        { label: "Redescendre vers la crique", fx: { quest: "TL" }, back: "A3n_ilot" }
      ] }
  },
  extras: {
    quests: [
      { id: "TL", act: "III", kind: "annexe", title: "Le rayon vert", start: "TL_tabouret", doit: "rayonvert", echo: ["tl:ment", "tl:verite", "tl:raconte"] }
    ]
  }
};
