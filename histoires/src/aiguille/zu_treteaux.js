// L'Île Folle-Aiguille · side story « Les tréteaux » (owes its question to Captain Fracasse: does wearing a braver man's
// costume make you braver?). At the fair of the Quai-aux-Harengs, the troupe of the widow Brisquet has lost its page:
// he has the mumps. The widow hires the child for one night, two sous and supper, to wear the page's doublet and cross
// a wooden sword with the Matamore. In the middle of the play, a gang paid by the rival troupe climbs onto the stage.
// The child stays in the part and declaims (zu:tirade), stays in the part and fights with the wooden sword (zu:combat),
// or drops the part and runs into the wings (zu:coulisse). Wired in A2m_jours.
module.exports = {
  passages: {
    ZU_veuve: { act: "II", title: "Les tréteaux", place: "champ_foire", ambiance: "ville",
      fx: { meet: "brisquet" },
      text: [
        "La veuve Brisquet t'attrape par le col au moment où tu passes devant sa roulotte, comme on attrape un poulet au marché, et te tourne vers la lumière, et te regarde sous toutes les coutures. C'est une femme énorme, fardée jusqu'aux yeux, en robe de velours cerise râpée aux coudes, avec une voix de basse et une perruque de reine qui a connu des cours meilleures. « Tu as la taille, dit-elle. Tu as la figure. Sais-tu lire ? Sais-tu te tenir debout sans te gratter ? Bon. Tu joues ce soir. »",
        "Son page a les oreillons. Il est couché dans la roulotte, avec une tête de citrouille, et il ne peut pas paraître ; la pièce, sans page, n'a plus de fin. C'est *Le Matamore puni*, en cinq actes et en vers, que la troupe Brisquet joue depuis trente ans sur toutes les foires du Ponant. Le page n'a que douze répliques et un duel, au cinquième acte, à l'épée de bois, contre le Matamore, qui se fait rosser par un enfant et s'enfuit sous les huées. C'est le clou. Le public vient pour ça.",
        "Deux sous et le souper. Tu dis oui avant d'avoir réfléchi, parce que la veuve ne t'a pas laissé le temps de réfléchir.",
      ],
      choices: [{ label: "Enfiler le pourpoint du page", to: "ZU_scene" }] },
    ZU_scene: { act: "II", title: "Les tréteaux", place: "champ_foire", ambiance: "ville",
      text: [
        "Le pourpoint est de satin bleu, avec des crevés jaunes, trop grand aux épaules, qui sent la sueur de trente pages successifs et la poudre de riz. Il y a une toque à plume, des chausses, et une épée de bois peinte en argent, avec une garde de fer-blanc. Quand tu t'habilles, dans la roulotte, à la chandelle, devant un bout de miroir, tu ne te reconnais pas. Quelqu'un d'autre te regarde, de l'autre côté, avec une plume sur la tête et une main sur la garde. Quelqu'un de plus fier que toi.",
        "La salle est une grange, au bout du quai, pleine à craquer : des matelots, des poissonnières, des apprentis, des soldats, deux bourgeois égarés, et une odeur de friture, de bière et de laine mouillée. Les quatre premiers actes passent comme dans un rêve. Tu dis tes répliques. On t'applaudit, la première fois, parce que tu ne t'es pas trompé{e}. Le Matamore, un grand maigre qui s'appelle Cabassol dans la vie et qui a une voix de trompette, te fait des clins d'œil entre deux tirades.",
        "Au cinquième acte, au moment où tu tires l'épée de bois, où le Matamore recule en roulant des yeux, et où la grange retient son souffle, la porte du fond s'ouvre à la volée. Six gaillards entrent, des gourdins à la main, en criant que c'est une pièce volée, que la troupe Brisquet est une troupe de voleurs, et qu'on va lui apprendre. On reconnaît, derrière eux, dans l'ombre de la porte, la silhouette du directeur de la troupe d'en face, celle qui joue *Le Matamore vengé*.",
        "Ils montent sur les tréteaux. Cabassol, le Matamore, lâche son épée de bois et saute dans la salle, par réflexe, comme un homme qui a joué les poltrons trop longtemps pour s'en défaire. Tu restes seul{e} au milieu de la scène, avec ton pourpoint bleu, ta plume, ton épée de bois, et six gourdins.",
      ],
      choices: [
        { label: "Rester le page, lever l'épée, et leur dire les vers du cinquième acte", fx: { flag: "zu:tirade" }, to: "ZU_tirade" },
        { label: "Rester le page, et taper, avec l'épée de bois", fx: { flag: "zu:combat" }, to: "ZU_combat" },
        { label: "Ôter la toque, et filer en coulisse", fx: { flag: "zu:coulisse" }, to: "ZU_coulisse" },
      ] },
    ZU_tirade: { act: "II", title: "Les tréteaux", place: "champ_foire", ambiance: "ville",
      text: [
        "Tu lèves l'épée de bois, et tu dis les vers. Ceux que le page dit au Matamore, au cinquième acte, et que tu as appris l'après-midi dans la roulotte, en les répétant à la veuve qui hochait la tête : *Arrière, fanfaron ! Ton bras n'est que du vent, / Et ta lame un hareng qui sent le hareng blanc…* Tu les dis aux six gourdins, bien en face, d'une voix qui tremble au premier vers et qui ne tremble plus au troisième.",
        "Les six s'arrêtent, interloqués. Ils ne savent pas quoi faire d'un enfant qui leur parle en vers. La salle, elle, a compris avant eux. Un matelot, au premier rang, crie *Bravo, le page !* Une poissonnière enchaîne. Puis toute la grange se lève, et reprend avec toi, par cœur, parce que tout Morlenc connaît *Le Matamore puni* : *Et ta lame un hareng qui sent le hareng blanc !*",
        "Les six gaillards, devant trois cents personnes qui leur crient des vers à la figure, en tapant du pied, reculent. Ils descendent des tréteaux. On les reconduit à la porte, à coups de chapeau, sous les huées, exactement comme le Matamore. La veuve Brisquet, en coulisse, pleure de rire dans sa perruque. Le soir, au souper, elle te donne quatre sous au lieu de deux, et une phrase : « Le brave, ce soir, c'était le page, et tu l'as laissé faire. Au théâtre, ça suffit. Ailleurs aussi, souvent. »",
      ],
      choices: [{ label: "Rendre le pourpoint", fx: { quest: "ZU" }, back: "A2m_jours" }] },
    ZU_combat: { act: "II", title: "Les tréteaux", place: "champ_foire", ambiance: "ville",
      text: [
        "Tu tapes. Le premier gourdin arrive, tu te baisses, et tu donnes au gaillard un grand coup d'épée de bois sur le tibia, là où ça fait le plus mal, comme Gobert t'a montré qu'on se défend dans une rixe. Il hurle. Le deuxième trébuche sur lui. La salle rugit de joie. Pour elle, c'est la pièce qui continue, en mieux.",
        "Ça dure peut-être une minute. Tu prends un coup de gourdin sur l'épaule, qui te jette à genoux, et un autre qui te fend la lèvre. L'épée de bois casse en deux. Mais à ce moment-là les matelots du premier rang, qui n'attendaient qu'un prétexte, montent sur les tréteaux, et les poissonnières derrière eux, et les six gaillards disparaissent sous une avalanche de poings, de sabots et de harengs.",
        "La veuve Brisquet te recoud la lèvre elle-même, dans la roulotte, avec une aiguille à costume et du fil rouge, en te traitant d'imbécile, d'ange, de héros, de petite brute, et de futur grand comédien. Elle te donne quatre sous, et l'épée de bois cassée, en souvenir. « Tu as été brave, dit-elle. Mais retiens ça : le page, lui, ne saigne jamais ; le comédien saigne pour deux. Le costume, ça ne protège que de la honte. »",
      ],
      choices: [{ label: "Rendre le pourpoint", fx: { quest: "ZU" }, back: "A2m_jours" }] },
    ZU_coulisse: { act: "II", title: "Les tréteaux", place: "champ_foire", ambiance: "ville",
      text: [
        "Tu ôtes la toque. Tu jettes l'épée de bois. Tu files en coulisse, entre les toiles peintes, derrière un château en carton, et tu te tapis dans un coffre à costumes, sous des robes de reine, le cœur à tout rompre. Tu entends, sur la scène, les gourdins qui cassent le décor, les cris, la salle qui hurle, puis les matelots qui montent, la bagarre générale.",
        "Quand tout est fini, la veuve Brisquet ouvre le coffre et te regarde, sans colère. Elle t'aide à sortir. Elle ramasse la toque, la plume cassée, l'épée de bois, et les range. « Tu as eu raison, dit-elle. Six gourdins, c'est six gourdins. Le page ne pèse pas lourd devant. » Elle te donne tes deux sous. « Seulement, ne t'y trompe pas. Celui qui avait peur, ce soir, c'était toi, sous le pourpoint. Le page, tu ne lui as pas laissé le temps d'arriver. Ça vient. Il faut le porter longtemps. »",
        "En rentrant au navire, tu passes devant la troupe d'en face, qui fête sa victoire. Tu reconnais, parmi eux, un des six gourdins. Il a un œil au beurre noir et une écaille de hareng collée sur la joue. Il te reconnaît aussi. Il te fait, en riant, le salut du Matamore.",
      ],
      choices: [{ label: "Rendre le pourpoint", fx: { quest: "ZU" }, back: "A2m_jours" }] },
  },
  extras: {
    people: {
      brisquet: { name: "La veuve Brisquet", aka: ["la directrice de la troupe"], f: true, qui: "Directrice d'une troupe de comédiens qui joue sur les foires du Ponant depuis trente ans." },
    },
    quests: [
      { id: "ZU", act: "II", kind: "annexe", title: "Les tréteaux", start: "ZU_veuve", doit: "fracasse", echo: ["zu:tirade", "zu:combat", "zu:coulisse"] },
    ],
  },
};
