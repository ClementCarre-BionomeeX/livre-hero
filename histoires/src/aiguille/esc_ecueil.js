// L'Île Folle-Aiguille · the port of call of the Red Reef, beyond the monk and his stone. For the child: the water
// found where the needles point away (ecueil:eau), the tide pools and a black drop of sky-glass (item larme_ciel), the
// black streaks down to a sea cave and the burnt boat inside (ecueil:barque), and a night of falling stars on the rim
// (ecueil:etoiles). For the doctor: the salt crust that bites like a cautery (item sel_ecueil, read among the chapel's
// wounded), the second grave behind the monk's house (xp:anselme), the captain at the binnacle while the ship swings
// at anchor (ecueil:ribaud_compas).
module.exports = {
  passages: {
    // ---------------------------------------------------------------- the child
    XQ_m_eau: { act: "III", title: "L'aiguade", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "La corvée d'eau a trouvé une fissure, au bord du récif, d'où suinte un filet d'eau. Lagadec y trempe le doigt, le porte à sa bouche, et crache. « Chaude, dit-il. Et elle a un goût de clou. » On remplit quand même un baril, en jurant, parce qu'à bord il n'en reste que trois.",
        "Tu t'écartes. Tu te souviens de ce que disait le père Pochon, au Fanal, sur les sources des îles de roche : l'eau chaude vient d'en bas, l'eau froide vient d'en haut, et l'eau d'en haut se cache là où la roche est la plus fendue. Le récif est fendu partout.",
        "Tu marches le long du bord, en touchant la pierre, en écoutant. Et tu remarques une chose : partout sur l'Écueil, les petites boussoles du moine pointent vers le cratère. Sauf une, plantée au bout d'une langue de roche, à l'est, qui pointe ailleurs. Vers le bas. Vers la mer.",
      ],
      choices: [{ label: "Descendre là où pointe l'aiguille", test: { dom: "nature", diff: 0, label: "L'eau d'en haut" }, win: { fx: { flag: "ecueil:eau" }, to: "XQ_m_eau_ok" }, lose: { to: "XQ_m_eau_rate" } }] },
    XQ_m_eau_ok: { act: "III", title: "L'eau froide", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Sous la langue de roche, à marée basse, il y a une petite grotte, à peine plus haute que toi. Le plancher est de sable noir, et au fond, sous une voûte d'où pendent de petites stalactites rouges, une vasque.",
        "L'eau y est froide. Froide à faire mal aux dents. Claire. Elle a un goût de pierre, et de rien d'autre.",
        "Tu cries. La corvée arrive. Lagadec boit dans ses mains, longtemps, et se relève, et te regarde avec quelque chose qui ressemble à du respect. « Hersant, dit-il aux autres. L'enfant de l'aubergiste, qui trouve de l'eau où il n'y en a pas. » On vide le baril d'eau de clou dans la mer, et l'on en remplit six de l'eau de la grotte.",
      ],
      choices: [{ label: "Revenir sur la roche rouge", back: "A3n_ecueil" }] },
    XQ_m_eau_rate: { act: "III", title: "La langue de roche", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Tu descends. La roche, sous la langue, est lisse, mouillée, couverte d'une algue rouge qui glisse comme du savon. Tu glisses. Tu te rattrapes à une arête, qui t'entaille la paume, et tu restes là, suspendu{e} au-dessus de l'eau qui monte, jusqu'à ce que Lagadec te hisse par le col en jurant.",
        "« L'eau, dit-il, elle est dans le baril. Elle a un goût de clou. Elle se boit quand même. » Il te regarde ta main. « Et toi, tu as un goût de sel, maintenant. »",
      ],
      choices: [{ label: "Revenir sur la roche rouge, en suçant ta paume", back: "A3n_ecueil" }] },
    XQ_m_mares: { act: "III", title: "Les mares", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "La marée basse découvre, au pied du récif, des mares. Des dizaines de mares, rondes, profondes, creusées dans la roche rouge comme des bénitiers, pleines d'une eau tiède et immobile.",
        "Dans les mares vivent des choses. Des anémones rouge sombre, qui se referment quand ton ombre passe. Des crabes violets, aux pinces inégales, qui te menacent de la grande en reculant. Des oursins noirs aux épines longues comme des aiguilles à tricoter. Et des étoiles. De petites étoiles de mer transparentes, de la couleur du verre, qu'on ne voit que lorsqu'elles bougent, et qui bougent très lentement.",
        "Tout est plus rouge qu'ailleurs, plus violet, plus étrange, comme si la pierre du ciel avait donné à la vie d'ici une autre idée de ce qu'elle devait être.",
        "Au fond de la plus grande mare, entre deux anémones, quelque chose brille. Une goutte noire, luisante, de la taille d'une noisette, en forme de larme.",
      ],
      choices: [
        { label: "Plonger le bras, et la prendre", fx: { item: "larme_ciel" }, to: "XQ_m_larme" },
        { label: "La laisser où elle est", back: "A3n_ecueil" },
      ] },
    XQ_m_larme: { act: "III", title: "La larme", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "L'anémone se referme sur tes doigts, avec une douceur collante, puis te lâche. Tu remontes la larme noire.",
        "C'est du verre. Un verre noir, lourd, parfaitement lisse, comme poli à la main, avec une pointe d'un côté et un ventre rond de l'autre, et sur le ventre, si on le tourne au soleil, de minuscules rides, comme celles d'une goutte qui aurait refroidi en tombant. Ce qui est exactement ce qu'elle a fait.",
        "La pierre, en tombant, a fait fondre la roche, et la roche fondue a giclé, et chaque goutte a refroidi en l'air, et elles sont retombées partout, en pluie noire, dans la mer et les mares. Tu tiens dans ta main une goutte de la nuit où le ciel est tombé.",
        "Elle est froide. Elle reste froide, même au soleil, même dans ta poche.",
      ],
      choices: [{ label: "Revenir sur la roche rouge", back: "A3n_ecueil" }] },
    XQ_m_trainees: { act: "III", title: "Les traînées noires", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Les traînées noires, vitrifiées, descendent du cratère vers la mer, comme les coulures d'une bougie sur un chandelier. Tu en suis une. Elle passe sous tes pieds, lisse, cassante, avec des bulles prises dedans comme des mouches dans l'ambre, et elle plonge, au bord du récif, dans une fente.",
        "La fente s'ouvre sur une grotte marine. On y descend par des marches naturelles, glissantes. L'eau y entre et en sort avec un bruit de soufflet, régulier, une respiration énorme, et à chaque respiration, l'air de la grotte souffle sur ton visage une haleine froide, salée, qui sent l'algue pourrie et la chose morte.",
        "Au fond, sur un banc de galets noirs, au-dessus de la ligne des hautes eaux, il y a une barque.",
        "Une barque de pêche, à moitié brûlée. La proue est intacte, peinte en bleu, avec un œil dessiné de chaque côté, à la mode des pêcheurs du Levant, pour qu'elle voie son chemin. L'arrière n'est plus qu'un squelette de membrures noircies. Dans la barque, sous le banc de nage, enveloppés dans une toile goudronnée qui s'en va en lambeaux, il y a des os.",
        "Les os d'un homme. Couché sur le côté, les genoux repliés, comme quelqu'un qui dort et qui a froid. Autour du cou, sur les vertèbres, un chapelet de buis.",
        "La grotte respire. L'œil peint sur la proue te regarde. Tu as l'impression, absurde et précise, que tu n'es pas la première personne à te tenir là, à regarder ces os, et que l'autre, celle d'avant, a pleuré.",
      ],
      choices: [{ label: "Remonter au jour", fx: { flag: "ecueil:barque" }, back: "A3n_ecueil" }] },
    XQ_m_nuit: { act: "III", title: "La pluie d'étoiles", place: "ecueil_rouge", ambiance: "nuit",
      text: [
        "La capitaine accorde la nuit à terre à ceux qui le veulent, parce qu'il fait trop chaud à bord. Tu montes sur le bord du cratère avec une couverture. Frère Calixte est déjà là, assis sur une pierre, la tête levée vers un ciel qu'il ne voit presque plus.",
        "« Restez, dit-il. Cette nuit, il en tombe. C'est l'époque. Tous les ans, à cette lune, le ciel se vide un peu de ce qu'il a en trop. »",
        "Tu te couches sur le dos, sur la roche encore chaude du jour. Et le ciel tombe.",
        "Une étoile file, d'abord, lente, blanche, qui traverse la moitié du ciel avant de s'éteindre. Puis une autre. Puis trois ensemble. Puis on ne peut plus compter. Elles tombent de partout, dans tous les sens, des longues, des courtes, des vertes, une rouge qui se brise en deux. Le ciel est une grêle silencieuse. Il n'y a pas un bruit. Seulement, de temps en temps, la voix du moine aveugle, qui compte à mi-voix, à l'oreille, en écoutant ta respiration.",
        "« Vous avez retenu votre souffle, dit-il. Une grosse. Vers l'ouest. Je l'ai entendue dans votre gorge. Cent quatre. » Puis, plus bas : « La mienne est tombée là, il y a six ans, dans un bruit de fin du monde. Les autres ne tombent jamais. Elles brûlent en route. C'est leur politesse. »",
        "Tu t'endors avant l'aube, et dans ton rêve, les étoiles tombent dans les mares, et deviennent des larmes noires.",
      ],
      choices: [{ label: "Redescendre au matin", fx: { flag: "ecueil:etoiles" }, back: "A3n_ecueil" }] },

    // ---------------------------------------------------------------- the doctor
    XQ_v_sel: { act: "III", title: "Le sel de la pierre", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Autour du cratère, sur la roche rouge, là où la fumée blanche retombe quand le vent tourne, il y a une croûte. Un dépôt blanc-jaune, cristallin, en petites aiguilles, comme du givre au soleil. Victorine s'accroupit, en gratte un peu avec la lame de son scalpel, le flaire. Cela sent le soufre, l'œuf, et quelque chose de piquant qu'elle ne connaît pas.",
        "Elle en dépose une pincée sur le dos de sa main, mouillée. La peau rougit d'un coup, comme sous une brûlure, et la brûlure s'arrête net au bord de la pincée, en un cercle parfait. Elle essuie. Dessous, la peau est sèche, propre, durcie, comme cautérisée.",
        "Un caustique. Un caustique naturel, qui mord et s'arrête. Elle en connaît deux ou trois, à Varnèse, qui coûtent les yeux de la tête chez les apothicaires de la Haute-Ville, et dont aucun ne s'arrête aussi net.",
      ],
      choices: [
        { label: "En remplir un flacon", fx: { item: "sel_ecueil" }, to: "XQ_v_sel_fin" },
        { label: "Le laisser à la pierre", back: "A3w_ecueil" },
      ] },
    XQ_v_sel_fin: { act: "III", title: "Le sel de la pierre", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Elle gratte pendant une heure, à genoux dans la cendre, avec une cuillère de bois, et remplit un flacon de verre bouché à l'émeri. Elle étiquette : *Sel de l'Écueil. Caustique. Ne pas avaler. Ne pas laisser à Gaudrémont.*",
        "Frère Calixte, qui l'a entendue gratter, vient s'asseoir à côté d'elle. « Vous prenez de la pierre, dit-il. Je le sens à l'odeur. Elle vous le rendra. Tout ce qui vient du ciel finit par rendre quelque chose. Parfois, ce qu'on espérait. »",
      ],
      choices: [{ label: "Revenir au bord du récif", back: "A3w_ecueil" }] },
    XQ_v_tombe: { act: "III", title: "La seconde croix", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Derrière la maison de pierres sèches, à l'abri du vent, il y a une tombe. Un tertre de cailloux rouges, une croix de bois flotté, deux branches attachées avec une corde goudronnée, et sur la branche horizontale, gravé au couteau : *FR. ANSELME. LE CIEL L'A PRIS.*",
        "Frère Calixte la rejoint, guidé par sa voix quand elle lit à haute voix, sans le vouloir.",
        "« Nous étions deux, dit-il. Envoyés par l'abbaye pour fonder un ermitage sur un îlot du Levant. Une barque, un pêcheur qui nous y menait, deux moines, une caisse de livres, et un vent qui n'a pas voulu. Il nous a portés ici, en dix jours, comme on porte un paquet. Nous avons tiré la barque dans une grotte. Nous dormions dedans. » Il s'arrête. « La nuit où la pierre est tombée, je priais dehors, sur le bord. Anselme dormait dans la barque. Le pêcheur aussi. La roche a fondu. Elle a coulé jusqu'à la mer. Elle a coulé dans la grotte. »",
        "Il touche la croix, du bout des doigts.",
        "« Je n'ai pas pu descendre les chercher. Je suis resté six ans au-dessus d'eux. On dit que je mesure les aiguilles. Je mesure, oui. Je fais aussi autre chose. Je garde. »",
      ],
      choices: [{ label: "Rester un moment près de lui, en silence", fx: { flag: "xp:anselme", regard: { calixte: "cordial" } }, back: "A3w_ecueil" }] },
    XQ_v_compas: { act: "III", title: "L'habitacle", place: "cormorane", ambiance: "mer",
      text: [
        "Victorine reste à bord, l'après-midi, à cause de la chaleur. Elle trouve la capitaine Ribaud à l'habitacle, penchée sur le compas, un crayon derrière l'oreille et un carnet à la main, qui regarde l'aiguille comme on regarde un homme qui ment.",
        "La Cormorane évite sur son ancre. Elle tourne, lentement, au gré du courant, et la proue fait le tour de l'horizon en une heure. Et à chaque quart de tour, l'aiguille saute. Elle ne suit pas le navire : elle hésite, elle tremble, elle repart en arrière, elle revient, elle cherche.",
        "« Elle ne sait plus où est le nord, dit la capitaine, sans lever les yeux. Elle sait où est la pierre. Elle hésite entre les deux. » Elle note un chiffre. « Toute ma vie, docteur, j'ai fait confiance à ce bout de fer aimanté plus qu'à aucun homme. Plus qu'à mon père. Plus qu'à moi-même, quand j'ai bu. » Elle note un autre chiffre. « Il suffit d'une pierre tombée du ciel pour qu'il se mette à mentir. Je me demande ce qu'il faut à un homme. »",
        "Elle referme son carnet.",
        "« Moins que ça, sans doute, dit-elle. Mais avec un homme, on ne sait pas où est la pierre. »",
      ],
      choices: [{ label: "Remonter sur le pont", fx: { flag: "ecueil:ribaud_compas" }, back: "A3w_ecueil" }] },
  },
  extras: {
    items: {
      larme_ciel: { name: "Une larme noire", kind: "divers", keep: true, price: 0, desc: "Une goutte de verre noir, lisse, en forme de larme, ramassée dans une mare de l'Écueil-Rouge. Elle reste froide, même au soleil." },
      sel_ecueil: { name: "Un flacon de sel de l'Écueil", kind: "remede", keep: true, price: 0, desc: "Un caustique naturel, gratté autour du cratère de l'Écueil-Rouge. Il mord la chair, et s'arrête net." },
    },
  },
};
