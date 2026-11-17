// L'Île Folle-Aiguille · side story « L'homme du hamac » (owes its question to The Children of the Sea (Conrad's « Narcissus »): what does
// a crew do with a man who says he is dying, and what does the pity of the many cost the work of all?). Act III, in the
// calm: Hinault, a topman from the Basse-Fosse, has taken to his hammock and announces that he is dying of the chest.
// Gobert calls him a shirker. Half the forecastle carries his soup; the other half wants to throw him overboard. He
// makes the child his servant. In private, the child sees him spit blood, then laugh and say he's shamming, that it's
// red wine. The child keeps playing his game (wq:joue), fetches the ship's doctor (wq:medecin), or tells him to his face
// that he is dying (wq:dit). Wired in A3n_jours.
module.exports = {
  passages: {
    WQ_hamac: { act: "III", title: "L'homme du hamac", place: "sargues", ambiance: "mer",
      text: [
        "Hinault s'est couché un matin, au début du calme, et il ne s'est plus relevé. C'est un gabier de la Basse-Fosse, long, maigre, noir de poil, avec une voix magnifique, grave et cuivrée, qui remplit l'entrepont comme un orgue. Il dit qu'il est poitrinaire. Il dit qu'il va mourir. Il le dit à qui veut l'entendre, du fond de son hamac, d'un ton de défi, comme on annonce qu'on va gagner aux cartes.",
        "Gobert dit que c'est un tire-au-flanc, qu'il l'a vu grimper aux haubans comme un singe le jour du départ, et qu'il lui donnera de la poitrine à coups de garcette. Mais Gobert n'ose pas. Personne n'ose. Il y a autour du hamac de Hinault une sorte de cercle invisible que personne ne franchit, fait de pitié, de peur, et d'une gêne sans nom, comme autour d'un cercueil qui parlerait. La moitié de la bordée lui porte sa soupe, ses couvertures, son tabac. L'autre moitié fait son quart à sa place et le hait.",
        "Il t'a choisi{e}. Dès le deuxième jour, c'est à toi qu'il demande sa soupe, son eau, sa pipe, d'une voix de roi malade. Tu y vas. Il t'appelle « mon page ». Il te raconte des histoires de la Basse-Fosse, des filles, des rixes, des naufrages, toutes fausses, toutes admirables. Il rit. Il tousse. Il rit encore, plus fort que sa toux, pour la couvrir.",
      ],
      choices: [{ label: "Lui porter sa soupe, à la nuit", to: "WQ_sang" }] },
    WQ_sang: { act: "III", title: "L'homme du hamac", place: "sargues", ambiance: "nuit",
      text: [
        "L'entrepont dort. Une seule lanterne, au pied de l'échelle, qui se balance à peine dans le calme plat. Tu t'approches du hamac avec l'écuelle. Hinault est penché par-dessus le bord, une main sur la bouche, le dos secoué de spasmes muets. Il a mis un mouchoir sur sa bouche. Le mouchoir, quand il le retire, à la lueur de la lanterne, est d'un rouge si sombre qu'il en paraît noir, et il luit.",
        "Il te voit. Il fourre le mouchoir sous sa couverture, très vite. Puis il rit, de sa voix d'orgue, à mi-voix. « Du vin, mon page, dit-il. Du vin rouge, que je garde caché pour moi seul. J'en ai renversé. Ne le dis pas à Gobert. » Il te fait un clin d'œil. « Tu sais bien que je fais semblant. Tout le monde le sait. Je suis fainéant comme une couleuvre. Je vais rester couché jusqu'aux îles, et puis je me lèverai, guéri, et je danserai la gigue sur la tête de Gobert. »",
        "Il prend sa soupe. Il la mange, avec un appétit forcé, en te regardant par-dessus l'écuelle. Ses yeux sont très brillants, dans son visage creux, et ce qu'il y a dans ces yeux, tu le reconnais, parce que tu l'as vu une fois, six ans plus tôt, dans d'autres yeux, au-dessus d'un autre drap, dans une chambre du Fanal où l'on t'interdisait d'entrer. La peur. Une peur énorme, nue, d'animal pris, qu'il couvre avec son rire comme on jette une voile sur un incendie.",
        "« Tu ne diras rien, hein, mon page ? » dit-il, doucement.",
      ],
      choices: [
        { label: "« Je ne dirai rien. Vous faites semblant. Tout le monde le sait. »", fx: { flag: "wq:joue" }, to: "WQ_joue" },
        { label: "Aller réveiller la médecin du bord, à l'arrière", fx: { flag: "wq:medecin" }, to: "WQ_medecin" },
        { label: "« Vous ne faites pas semblant. Vous êtes en train de mourir. »", fx: { flag: "wq:dit" }, to: "WQ_dit" },
      ] },
    WQ_joue: { act: "III", title: "L'homme du hamac", place: "sargues", ambiance: "nuit",
      text: [
        "Il sourit. Il te tape sur l'épaule. Il dit que tu es un{e} vrai{e} marin, que tu iras loin, qu'il te présentera aux filles de la Basse-Fosse quand vous rentrerez. Tu continues de lui porter sa soupe. Chaque soir, il te raconte une histoire nouvelle, plus folle que la veille, et chaque soir, il crache un peu plus de vin rouge dans son mouchoir, et chaque soir, tu fais semblant de ne pas voir, et il fait semblant de ne pas savoir que tu vois.",
        "La bordée, elle, se fatigue. Les quarts de Hinault pèsent. Un soir, un homme crie dans l'entrepont qu'il en a assez de se casser les reins pour un comédien, et il secoue le hamac, et Hinault tombe sur le pont, et ne se relève pas tout de suite, et quand il se relève, il rit, plus fort que jamais, en disant qu'il a trébuché sur sa paresse. Le lendemain, il demande à monter sur le pont, voir la mer. On l'y porte. Il regarde l'horizon plat, les herbes jaunes, le ciel de cuivre. Il dit que les îles sont tout près, qu'il les sent.",
        "Il meurt la nuit suivante, dans son hamac, sans bruit, entre deux histoires. C'est toi qui le trouves, le matin, avec la soupe. Il a le mouchoir dans la main. Il sourit encore. Une brise se lève à midi, la première depuis des jours, au moment où on le jette à la mer, cousu dans sa toile, avec un boulet aux pieds, et les vieux marins se regardent, et disent que c'est lui qui la retenait. Tu ne le crois pas. Tu le crois un peu.",
      ],
      choices: [{ label: "Reprendre ta place dans la marmite", fx: { quest: "WQ" }, back: "A3n_jours" }] },
    WQ_medecin: { act: "III", title: "L'homme du hamac", place: "sargues", ambiance: "nuit",
      text: [
        "Tu vas frapper à la cabine de la médecin. Elle ouvre en chemise, une chandelle à la main, avec l'air de quelqu'un qu'on réveille toutes les nuits. Elle t'écoute, elle prend sa sacoche, elle te suit dans l'entrepont. Hinault la voit arriver. Il pâlit. Il se tourne contre la cloison. Il dit qu'il n'a pas besoin de médecin, qu'il fait semblant, que c'est une farce, que le mousse est un idiot. Elle ne discute pas. Elle pose l'oreille contre son dos, longtemps.",
        "Puis elle se relève. Elle dit, pour toute la bordée qui s'est réveillée et qui écoute dans l'ombre, d'une voix claire et sans réplique : « Cet homme a les deux poumons pris. Il ne fait pas semblant. Il ne travaillera plus. Le premier qui le secoue aura affaire à moi. » Il y a un silence énorme. Puis, dans l'ombre, des hommes qui se retournent dans leurs hamacs, honteux, et un qui dit, tout bas, *pauvre bougre*.",
        "Hinault ne te parle plus. Il prend la soupe que d'autres lui portent. Il ne raconte plus d'histoires. Il est devenu, en une nuit, un mourant comme les autres, qu'on plaint, qu'on soigne, qu'on évite, et il n'a plus rien pour couvrir sa peur, et tu la vois, à présent, nue, dans ses yeux, chaque fois que tu passes. Il meurt au bout de cinq jours, doucement, avec du laudanum. La médecin te dit que tu as bien fait. Tu sais qu'elle a raison. Tu sais aussi que tu lui as pris sa dernière histoire, la seule qui le tenait debout, et qu'il ne te l'a pas pardonné.",
      ],
      choices: [{ label: "Reprendre ta place dans la marmite", fx: { quest: "WQ" }, back: "A3n_jours" }] },
    WQ_dit: { act: "III", title: "L'homme du hamac", place: "sargues", ambiance: "nuit",
      text: [
        "Tu le dis. Doucement, comme on pose une écuelle. Il te regarde. Son visage reste figé, le sourire encore aux lèvres, pendant un long moment, comme un masque que le vent aurait oublié d'emporter. Puis le sourire tombe. Ce qu'il y a dessous est très vieux, très fatigué, et beaucoup plus jeune que tu ne croyais. Il a, peut-être, vingt-cinq ans.",
        "« Je sais, dit-il. Je le sais depuis Morlenc. J'ai signé pour mourir en mer. C'est plus propre que l'hospice. » Il rit, sans voix, cette fois. « Je faisais semblant de faire semblant. C'est plus facile, comme ça. Les autres te haïssent, ça te tient chaud. Et toi, tu y crois à moitié, que tu fais semblant. » Il ferme les yeux. « Tu m'as ôté ça, mon page. Ce n'est rien. Reste un peu. »",
        "Tu restes. Tu restes toutes les nuits, jusqu'à la fin, assis{e} par terre à côté du hamac, et il ne raconte plus d'histoires fausses. Il raconte des vraies. Une mère, à la Basse-Fosse, qui vendait des moules. Une sœur morte à six ans. Une fille qu'il n'a pas osé embrasser, sur le quai, la veille du départ. Ce sont des histoires très ordinaires. Il les raconte avec sa voix d'orgue, et elles deviennent, dans l'entrepont noir, plus belles que les autres. Il meurt la quatrième nuit, en te tenant la main. Tu la tiens encore un moment après. C'est la première fois que tu tiens la main d'un mort. Tu t'aperçois qu'elle reste tiède longtemps.",
      ],
      choices: [{ label: "Reprendre ta place dans la marmite", fx: { quest: "WQ" }, back: "A3n_jours" }] },
  },
  extras: {
    quests: [
      { id: "WQ", act: "III", kind: "annexe", title: "L'homme du hamac", start: "WQ_hamac", doit: "narcisse", echo: ["wq:joue", "wq:medecin", "wq:dit"] },
    ],
  },
};
