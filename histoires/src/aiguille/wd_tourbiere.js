// L'Île Folle-Aiguille · side story « La nuit des tourbières » (owes its question to Master and Man: who gives his warmth
// to whom, when the night is cold enough to erase the ranks?). At Lannoz, Gobert, against the captain's order, drags
// the child across the moor to buy the shepherds' heather brandy and sell it on board at three times the price. The
// bruine falls, the night with it; they lose the path; Gobert sinks to the waist in a bog. The child pulls him out. Then
// it is night, wet, cold, and the old man shakes. The child lies against him until dawn (wd:chaleur), obeys him and goes
// alone for help (wd:part), or follows the black sheep, who know the firm ground (wd:moutons). Wired in A3o_lannoz.
module.exports = {
  passages: {
    WD_affaire: { act: "III", title: "La nuit des tourbières", place: "lannoz", ambiance: "nature",
      text: [
        "Maître Gobert a un commerce. Tout le monde à bord le sait, et la capitaine fait semblant de l'ignorer, parce qu'un bosco sans commerce est un bosco qui s'ennuie, et qu'un bosco qui s'ennuie fait plus de dégâts qu'un boulet. Il achète dans les escales ce que les hommes regretteront en mer, du tabac, du sucre, des aiguilles, de l'eau-de-vie, et il le leur revend, au milieu de l'océan, au prix qu'il veut. Il appelle ça « rendre service ».",
        "« Les bergers de l'autre versant, dit-il en t'attrapant par le col au bord du ruisseau, font une eau-de-vie de bruyère qui vous retourne un homme comme une crêpe. Ils la vendent quatre sous la cruche. À bord, dans un mois, sous le Tropique, elle en vaudra quinze. Tu portes les cruches. Tu te tais. On est revenus avant la soupe. »",
        "Tu lui rappelles que la capitaine a interdit qu'on s'éloigne du ruisseau. Il te regarde avec une stupeur sincère, comme on regarde un chien qui se mettrait à citer la Bible. « La capitaine, dit-il, a interdit qu'on se perde. Moi, je ne me perds pas. Quarante-six ans de mer, morveux. J'ai traversé des brumes où tu n'aurais pas retrouvé ta main au bout de ton bras. »",
      ],
      choices: [{ label: "Porter les cruches", to: "WD_bruine" }] },
    WD_bruine: { act: "III", title: "La nuit des tourbières", place: "lannoz", ambiance: "nuit",
      text: [
        "Les bergers sont où il a dit. L'eau-de-vie est ce qu'il a dit : elle sent le miel brûlé et la terre, et Gobert en goûte trois fois pour s'assurer de la marchandise. On marchande longtemps. On repart tard, quatre cruches pendues à une corde sur ton épaule, et la bruine se lève derrière vous, sur la lande, comme un drap qu'on secoue. En un quart d'heure, elle a mangé les collines. En une demi-heure, elle a mangé le jour.",
        "Gobert marche devant, d'un pas sûr, en sifflant. Puis il siffle moins. Puis il s'arrête, et tourne la tête à droite, et à gauche, et renifle le vent comme une bête. Le vent n'a plus d'odeur ; il vient de partout. Les flaques des tourbières luisent autour de vous, toutes pareilles, avec la même herbe trop verte au bord, et le même ciel gris dedans, si bien qu'on croirait marcher au milieu de cent miroirs posés à plat, dont chacun montre le même rien. « Par là », dit Gobert. Il le dit d'une voix que tu ne lui connais pas.",
        "C'est par là qu'il s'enfonce. L'herbe verte cède sous lui avec un bruit de bouche. En trois secondes, il est dans l'eau noire jusqu'aux cuisses, puis jusqu'à la taille. Il jure. Il se débat, et plus il se débat, plus la tourbe l'avale, avec une patience de bête repue. Tu lâches les cruches. Tu te couches à plat ventre au bord, sur la mousse qui tremble, et tu lui tends la corde.",
        "Il te faut un temps infini. Tu tires, il tire, la tourbe tire. Il sort enfin, d'un coup, avec un bruit obscène de succion, et il reste couché sur la mousse à côté de toi, noir de vase jusqu'à la poitrine, à haleter comme un phoque échoué. Une seule cruche a survécu. La nuit est tombée.",
      ],
      choices: [{ label: "Attendre qu'il reprenne son souffle", to: "WD_nuit" }] },
    WD_nuit: { act: "III", title: "La nuit des tourbières", place: "lannoz", ambiance: "nuit",
      text: [
        "Vous trouvez une butte de bruyère un peu plus haute que le reste, à tâtons, et vous vous y asseyez. Le vent se lève. Il souffle de la mer, mouillé, glacé, et il passe à travers les vêtements trempés comme à travers une dentelle. Tu entends, quelque part dans le noir, très loin, une cloche, ou quelque chose qui lui ressemble, une seule note, qui revient, et puis plus. Tu ne sauras jamais si c'était le village, la mer, ou l'idée que tu te faisais d'une cloche.",
        "Gobert tremble. Il tremble d'abord un peu, puis beaucoup, de tout le corps, à grands frissons qui lui font claquer les dents comme des castagnettes. Il a soixante ans. Il a été dans l'eau noire jusqu'à la taille, et ses habits pèsent sur lui comme une armure de glace. Il ouvre la cruche qui reste, boit, et te la tend. Tu bois. C'est du feu, une minute, et puis le froid revient, plus profond, comme s'il avait profité de la minute pour s'installer.",
        "« Écoute-moi, morveux, dit-il entre ses dents. Tu as des jambes de seize ans. Tu pars vers le bas, toujours vers le bas, et tu trouveras le ruisseau, et le ruisseau te mènera au village. Moi, je reste là. Je suis trop lourd pour marcher dans le noir sur ces saloperies. Ils viendront me chercher à l'aube. » Il rit, un rire qui ressemble à une toux. « Si je suis encore là. Les vieux bosco, ça ne meurt pas. Ça sèche. »",
        "Autour de vous, dans le noir, quelque chose bouge. Des souffles, des petits bruits de sabots, une odeur chaude de laine mouillée. Les moutons noirs de Lannoz, qui paissent sans berger sur toute l'île et qui ne se noient jamais.",
      ],
      choices: [
        { label: "Rester, et te coucher contre lui pour le tenir chaud jusqu'à l'aube", fx: { flag: "wd:chaleur", penche: { gobert: 1 } }, to: "WD_chaleur" },
        { label: "Lui obéir, et partir seul{e} vers le bas, chercher le ruisseau", fx: { flag: "wd:part" }, to: "WD_part" },
        { label: "Le remettre debout, et suivre les moutons, qui savent où la terre tient", fx: { flag: "wd:moutons" }, to: "WD_moutons" },
      ] },
    WD_chaleur: { act: "III", title: "La nuit des tourbières", place: "lannoz", ambiance: "nuit",
      text: [
        "Tu te couches contre lui. Il grogne, il proteste, il t'appelle de tous les noms de sa collection, qui est vaste ; puis il se tait, et tu sens son dos se tasser contre ta poitrine, et ses frissons passer de son corps dans le tien, comme une marée qui monte. Tu ouvres ta vareuse et tu la refermes sur vous deux, autant qu'elle veut bien. Tu serres. Il sent la vase, le tabac et la vieillesse. Il est énorme et il tremble comme un enfant.",
        "La nuit dure mille ans. Tu dors, peut-être, par moments, et tu rêves du Fanal, de la salle commune, du feu, de ton père qui remet une bûche ; tu te réveilles, et c'est la lande, et le vent, et le dos du vieil homme. Une fois, au milieu de la nuit, il parle. Il dit un nom de femme, deux fois, très doucement. Tu ne le connais pas. Tu ne demandes rien. Une autre fois, il dit, d'une voix tout à fait claire : « Ta mère, morveux. De quoi elle est morte ? » Tu le lui dis. Il ne répond rien, et sa main trouve la tienne, dans le noir, et la serre, une fois, fort, et la lâche.",
        "À l'aube, la bruine s'est levée. Le village est à un quart de lieue, en contrebas, et vous voyez fumer ses toits. Gobert se lève, raide comme un vieil arbre, et descend devant toi sans un mot, la cruche à la main. À bord, il paie une amende à la capitaine sans discuter et revend l'eau-de-vie à quinze sous, sous le Tropique, comme prévu. Il t'appelle toujours « morveux ». Mais il ne t'envoie plus jamais en haut du grand mât par gros temps, et quand quelqu'un d'autre le fait, il gueule.",
      ],
      choices: [{ label: "Redescendre au village, derrière lui", fx: { quest: "WD" }, back: "A3o_lannoz" }] },
    WD_part: { act: "III", title: "La nuit des tourbières", place: "lannoz", ambiance: "nuit",
      text: [
        "Tu pars. Vers le bas, toujours vers le bas, comme il a dit. Tu tâtes le sol du pied avant chaque pas, comme un aveugle avec sa canne. Deux fois, la terre cède, et tu te rejettes en arrière juste à temps, le cœur dans la gorge. Tu tombes. Tu te relèves. Le vent t'arrache les larmes des yeux, et tu ne sais plus si tu pleures. Tu entends l'eau avant de la voir : le ruisseau, qui bavarde dans le noir comme une vieille femme qui ne sait pas qu'il est tard.",
        "Tu le suis. Tu arrives au village à deux heures du matin, et tu cognes à la première porte, et tu ne sais pas dire en langue de Lannoz ce qui se passe, alors tu cries *Gobert*, et *tourbière*, et tu montres la lande. On comprend. Les hommes partent avec des lanternes et des perches, en riant et en jurant, comme des gens pour qui c'est la troisième fois de l'année.",
        "On le ramène à l'aube, couché sur une claie, blanc, gris, les lèvres violettes, vivant. Il garde la fièvre deux jours, dans son hamac, et la médecin le soigne en le traitant de vieil imbécile, ce qu'il accepte d'elle comme d'aucun autre. Quand il se lève, il passe près de toi sur le pont et dit, sans s'arrêter : « Tu as bien fait. » Tu sais qu'il a raison, et tu sais aussi que tu l'as laissé seul dans le noir, et ces deux choses te tiennent compagnie longtemps, l'une à droite, l'autre à gauche, comme deux gardiens.",
      ],
      choices: [{ label: "Retourner au village", fx: { quest: "WD" }, back: "A3o_lannoz" }] },
    WD_moutons: { act: "III", title: "La nuit des tourbières", place: "lannoz", ambiance: "nuit",
      text: [
        "Tu le mets debout. C'est un travail de cabestan. Il jure, il dit que tu es fou, que les moutons ne savent rien, que ce sont des bêtes, que les bêtes se noient comme les gens. Tu lui réponds que les moutons de Lannoz ne se noient pas, que tout le village le dit, et que c'est pour ça qu'il n'y a pas de berger. Il te regarde dans le noir, sans doute ; tu ne le vois pas. Puis il dit : « Bon. » Et il pose sa grosse main sur ton épaule, de tout son poids.",
        "Tu suis les souffles, les petits bruits de sabots, l'odeur de laine. Les moutons ne vous attendent pas ; ils vont où ils vont, de leur pas tranquille, de touffe en touffe, en contournant des choses que tu ne vois pas. Là où ils passent, la terre tient. Une fois, Gobert veut couper au plus court ; tu le retiens par la manche. L'eau noire, à droite, fait un petit bruit, comme une bouche qui se referme.",
        "Les moutons vous mènent, au bout de deux heures, à un enclos de pierres sèches au bord d'un champ, sous le village. Ils s'y couchent, serrés les uns contre les autres, et vous vous couchez avec eux, contre la laine chaude et grasse, comme deux bêtes de plus, et vous dormez jusqu'au jour. Gobert ne raconte jamais cette nuit à personne. Mais il raconte, souvent, au gaillard d'avant, que les moutons sont plus intelligents que les gabiers, et il rit, et il te regarde, et toi seul{e} sais de quoi il rit.",
      ],
      choices: [{ label: "Redescendre au village, au jour", fx: { quest: "WD" }, back: "A3o_lannoz" }] },
  },
  extras: {
    quests: [
      { id: "WD", act: "III", kind: "annexe", title: "La nuit des tourbières", start: "WD_affaire", doit: "maitreserviteur", echo: ["wd:chaleur", "wd:part", "wd:moutons"] },
    ],
  },
};
