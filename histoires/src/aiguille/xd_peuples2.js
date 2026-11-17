// L'Île Folle-Aiguille · side story « Les deux peuples », second part: the days in the High Orchard and the life of the
// Wells. Above: the children who gather the fallen fruit and the school of the Company, where a girl learns to write
// her name (xd:ecole); the spring where flowers are laid every dawn (xd:liseron); the hall of the Company and its
// charter, with the seventh article and its vote (xd:charte); the feast of flowers, where the child may take a flower
// name (set fleur=…), and Pâquerette remembers hers for one evening (xd:paquerette). Below, once Hugon has spoken:
// the children of the Wells who have never seen the sun (xd:soleil_dit, xd:mousse_donnee); the flooded gallery
// (xd:sauve_mineur); the melting of the silver and the last chalice (item calice_compagnie); the Mothers of the forge,
// who will not leave (xd:meres); the egg-hunters met on the Table (xd:machefer). A debt or a friend may then open the
// pact without a test.
var DECIDER = [
  { label: "« Si vous rendez ceux de la roue, je vous trouverai un navire. »", test: { dom: "social", diff: 0, label: "Convaincre Hugon" }, win: { fx: { flag: ["xd:pacte", "xd:galerie_vue"], regard: { hugon: "allie" } }, to: "XD_pacte" }, lose: { fx: { regard: { hugon: "mefiant" } }, to: "XD_refus" } },
  { label: "Laisser Mâchefer parler pour toi", hide: { not: { any: [{ has: "xd:machefer" }, { has: "xt:puits_dette" }] } }, fx: { flag: ["xd:pacte", "xd:galerie_vue"], regard: { hugon: "allie" } }, to: "XD_p_parole" },
  { label: "Courir à la roue et libérer les marcheurs", test: { dom: "combat", diff: 0, label: "Forcer la roue" }, win: { fx: { flag: ["xd:libere", "xd:guerre"], regard: { hugon: "hostile" } }, to: "XD_roue" }, lose: { to: "XD_refus" } },
  { label: "« Montrez-moi ce mur. »", fx: { flag: "xd:galerie_vue" }, to: "XD_mur" },
];
module.exports = {
  passages: {
    // ---------------------------------------------------------------- the children and the school
    XD_enfants: { act: "IV", title: "Les ramasseurs", place: "haut_verger", ambiance: "village",
      text: [
        "Les enfants du verger ne mâchent pas encore. On leur donne l'écorce à dix ans, t'explique-t-on, le jour de leur couronne, comme ailleurs on donne la première communion ou le premier couteau. D'ici là, ils courent.",
        "Ils sont une douzaine, de quatre à neuf ans, nus ou presque, bruns comme des noisettes, et ils ramassent les fruits tombés dans de grands paniers d'osier qu'ils traînent à deux. Ils te suivent dès que tu fais un pas. Ils ont une gaieté de chiots, et une absence totale de questions : on dirait qu'ils ignorent qu'on peut en poser.",
        "Une seule fait exception. Une petite fille de sept ans, maigre, les genoux écorchés, qui marche à côté de toi en te regardant de biais, avec une concentration d'avare qui compte sa monnaie.",
        "« Capucine, dit-elle, en se frappant la poitrine. Et toi, tu as des signes. »",
        "Elle désigne ta manche. Tu y as noué, au Fanal, un bout de ruban où ta mère avait brodé tes initiales. Elle ne sait pas ce que c'est. Elle sait que ça veut dire quelque chose.",
      ],
      choices: [
        { label: "Lui demander où elle a déjà vu des signes", to: "XD_ecole" },
        { label: "La laisser courir avec les autres", back: "XD_verger" },
      ] },
    XD_ecole: { act: "IV", title: "L'école", place: "haut_verger", ambiance: "village",
      text: [
        "Elle te prend par la main et t'entraîne au bout du verger, sous un rideau de vigne vierge, jusqu'à une maison longue, aux murs de planches, la seule du verger qui ait une porte. La porte est fermée par une ficelle. Capucine la dénoue avec le respect qu'on met à ouvrir une tombe.",
        "Dedans, la pénombre, l'odeur de bois moisi et de souris. Des bancs, en rangs. Des pupitres, avec chacun son encrier de corne, sec depuis trente ans. Au mur, un tableau noir, et sur le tableau, à la craie, d'une belle écriture ronde de maîtresse, une phrase que l'humidité a respectée :",
        "« Le 14 mai. Leçon : la règle de trois. Si six hommes font un mur en quatre jours, combien d'hommes faut-il pour le faire en deux ? »",
        "Personne n'a effacé. Personne n'a répondu. Sur les bancs, des noms d'enfants gravés au couteau, avec l'application maladroite des noms gravés au couteau : Yves, Mathurin, Anne-Marie, Corentin. Et sur les pupitres, des ardoises, empilées, couvertes de poussière.",
        "Capucine prend une ardoise, un bout de craie qui traîne, et te les tend.",
        "« Les signes, dit-elle. Fais. »",
      ],
      choices: [
        { label: "Écrire son nom sur l'ardoise", to: "XD_lecon1" },
        { label: "Répondre à la question du tableau", to: "XD_tableau" },
      ] },
    XD_tableau: { act: "IV", title: "La règle de trois", place: "haut_verger", ambiance: "village",
      text: [
        "Tu prends la craie. Sous la phrase de la maîtresse, sous le 14 mai d'il y a trente ans, tu écris : « Douze. »",
        "La craie crisse. Capucine sursaute, puis regarde le chiffre avec une méfiance émerveillée, comme on regarde une bête qui vient de naître.",
        "Il y a quelque chose d'insupportable à répondre à une question que plus personne n'attend, et quelque chose de juste aussi. Le mur dont parlait la maîtresse, tu l'as vu, peut-être : il ferme une galerie, sous la colline. Il aura fallu plus de six hommes, et plus de quatre jours, et personne ne l'aura fait à la règle de trois.",
      ],
      choices: [{ label: "Écrire son nom sur l'ardoise", to: "XD_lecon1" }] },
    XD_lecon1: { act: "IV", title: "Capucine", place: "haut_verger", ambiance: "village",
      text: [
        "Tu écris CAPUCINE, en capitales, sur l'ardoise, et tu lui montres les lettres une à une, en les nommant. Elle répète. Elle répète tout, avec une attention de chat devant un trou de souris.",
        "Puis elle prend la craie et recopie, en tirant la langue. Ça lui prend un temps infini. Le résultat ressemble à une rangée de clôtures qu'un orage aurait couchées. Il y a un S à la place du C du milieu, et le E regarde vers la gauche.",
        "Elle lève l'ardoise vers toi, et attend ton jugement comme une condamnée.",
      ],
      choices: [
        { label: "Lui montrer ses fautes, une par une", to: "XD_lecon2" },
        { label: "Lui dire que c'est très bien", to: "XD_lecon2" },
      ] },
    XD_lecon2: { act: "IV", title: "L'école", place: "haut_verger", ambiance: "village",
      text: [
        "Le lendemain, elle revient. Avec trois autres. Le surlendemain, ils sont sept, assis sur les bancs d'Yves et de Mathurin, chacun son ardoise, et ils te regardent comme on regarde un sorcier.",
        "Tu leur apprends l'alphabet, à la façon dont on te l'a appris, au Fanal, avec une chanson. Ils ne connaissent aucune chanson. Ils apprennent celle-là en une matinée, et la chantent ensuite dans tout le verger, en ramassant les fruits, si bien que vers midi les adultes eux-mêmes la fredonnent en mâchant, sans savoir ce qu'ils chantent.",
        "C'est Liseron qui vient te trouver, le soir. Le grand homme maigre se tient sur le seuil de l'école sans oser entrer, et il tord sa couronne entre ses mains.",
        "« Sauveur dit que les signes font mal, dit-il, très doucement. Que c'est par les signes que le malheur est arrivé. Les signes sur les pièces. » Il regarde les ardoises. « Je ne me rappelle pas. Mais il le dit. »",
      ],
      choices: [
        { label: "Continuer la leçon, demain", fx: { flag: "xd:ecole" }, to: "XD_lecon3" },
        { label: "Rendre la ficelle à la porte, et ne plus revenir", fx: { flag: "xd:ecole_fermee" }, to: "XD_lecon_fin" },
      ] },
    XD_lecon3: { act: "IV", title: "Les noms", place: "haut_verger", ambiance: "village",
      text: [
        "Le troisième jour, Capucine écrit son nom sans faute, et le E regarde dans le bon sens. Alors elle demande à écrire celui de sa mère.",
        "Sa mère s'appelle Bruyère. Capucine l'écrit. Puis elle reste là, la craie levée, et demande, de sa voix d'avare qui compte : « Et avant ? Avant Bruyère ? Elle avait un autre nom. Tout le monde avait un autre nom. On dit qu'on les a mâchés. »",
        { if: { has: "xd:noms" }, text: "Tu as dans ta poche le carnet de la Mère Aubépine. Tu cherches avec elle, page après page, en lisant les métiers et les villages à voix haute. Il y a, au milieu du carnet, une Marthe Kerbiriou, de Plouvenec, fileuse, née l'année de la comète, sans croix. « Marthe », dit Capucine, et elle l'écrit sur l'ardoise, sous Bruyère, en appuyant si fort que la craie casse." },
        { if: { not: { has: "xd:noms" } }, text: "Tu n'en sais rien. Quelqu'un, dans ce verger, le sait peut-être : une vieille femme qui ne mâche pas, sous un figuier. Capucine hoche la tête, et écrit sous Bruyère un trait, un long trait horizontal, pour garder la place." },
        "Le soir, elle rentre chez elle avec l'ardoise sous le bras, et elle ne la lâche plus. Tu la vois, plus tard, assise à côté de sa mère qui mâche en regardant le ciel, et lui montrer les lettres, une à une, avec une patience terrible.",
      ],
      choices: [{ label: "Revenir dans le verger", back: "XD_verger" }] },
    XD_lecon_fin: { act: "IV", title: "La porte", place: "haut_verger", ambiance: "village",
      text: [
        "Tu rends à Liseron la ficelle de la porte. Il la renoue lui-même, avec un soin infini, en faisant trois nœuds.",
        "Capucine te regarde faire, de loin, sous un oranger. Elle a gardé son ardoise. Elle te regarde comme on regarde quelqu'un qui vous a montré une porte et l'a refermée, ce qui est exactement ce que tu as fait.",
        "La chanson de l'alphabet court encore dans le verger quelques jours. Puis on l'oublie, comme le reste.",
      ],
      choices: [{ label: "Revenir dans le verger", back: "XD_verger" }] },

    // ---------------------------------------------------------------- the spring
    XD_source: { act: "IV", title: "La source", place: "haut_verger", ambiance: "nature",
      text: [
        "Tout en haut des terrasses, là où les derniers arbres s'accrochent à la roche, une source sort de la colline dans un bassin de pierre taillée. Le bassin est rond, large comme une table, plein d'une eau si claire qu'on en voit le fond, couvert de petits cailloux blancs, comme des dents de lait.",
        "Sur le rebord, des fleurs. Des fleurs fraîches, cueillies du matin, déposées en couronne tout autour de l'eau, sans un trou.",
        "Personne ne vient boire ici. Les gens du verger boivent au ruisseau, plus bas, qui sort de cette même source et qui a la même eau, mais après trois cents pas de chemin. Un sentier mène jusqu'au bassin, bien tracé, entretenu. Personne ne le prend, sauf celui qui apporte les fleurs.",
        "Il fait très calme. Une libellule bleue se pose sur l'eau, et repart.",
      ],
      choices: [
        { label: "Boire dans le bassin", to: "XD_source_boire" },
        { label: "Revenir à l'aube, pour voir qui apporte les fleurs", fx: { flag: "xd:liseron" }, to: "XD_source_fleurs" },
        { label: "Laisser l'eau tranquille", back: "XD_verger" },
      ] },
    XD_source_boire: { act: "IV", title: "La source", place: "haut_verger", ambiance: "nature",
      text: [
        "Tu t'agenouilles et tu bois dans tes mains. L'eau est froide à faire mal aux dents, et douce.",
        "Un cri, derrière toi. Une femme du verger, que tu n'avais pas entendue venir, se tient au bout du sentier, un panier de figues renversé à ses pieds. Elle a les deux mains sur la bouche. Ses yeux sont pleins d'une horreur si ancienne, si lisse, qu'elle a dû la porter vingt ans sans jamais savoir ce que c'était.",
        "Puis elle cligne. L'horreur s'en va de ses yeux comme une ride sur l'eau. Elle regarde ses figues par terre avec étonnement, les ramasse, te sourit, et redescend en fredonnant.",
        { if: { has: "xd:noms" }, text: "Le soir, tu ouvres le carnet d'Aubépine. Tu trouves, sans le chercher, une ligne où deux enfants portent le même nom de famille que leur mère, et la même croix, et le même jour, qui ne tombe pas le jour de la chapelle." },
      ],
      choices: [{ label: "Revenir dans le verger", back: "XD_verger" }] },
    XD_source_fleurs: { act: "IV", title: "Les fleurs", place: "haut_verger", ambiance: "nature",
      text: [
        "Tu dors au pied des terrasses, roulé{e} dans une natte, et tu te réveilles dans le gris d'avant l'aube, quand tout le verger dort encore.",
        "C'est Liseron. Le grand homme maigre monte le sentier, les bras chargés de fleurs, sans bruit, pieds nus dans la rosée. Il retire les fleurs d'hier, une à une, et les remplace, une à une, avec des gestes de sacristain. Puis il reste là, debout, les mains vides, à regarder l'eau.",
        "Tu t'approches. Il ne sursaute pas.",
        "« Pourquoi les fleurs, Liseron ? »",
        "Il réfléchit, longtemps, avec une bonne volonté qui fait mal à voir. « Mes mains le font, dit-il enfin. Tous les matins. Je me réveille, et mes mains ont envie de fleurs, et mes pieds montent. » Il regarde ses mains, en effet, comme deux bêtes familières dont il ignorerait les intentions. « La tête a oublié. Les mains, non. Elles sont plus lentes. »",
        "Il redescend. Il ne t'a pas demandé ce que tu faisais là. Il ne le demande à personne.",
      ],
      choices: [{ label: "Revenir dans le verger", back: "XD_verger" }] },

    // ---------------------------------------------------------------- the hall and the charter
    XD_maison: { act: "IV", title: "La maison commune", place: "haut_verger", ambiance: "village",
      text: [
        "Au milieu du verger, il y a ce qui fut une grande maison. Une halle de bois, longue de vingt toises, dont le toit s'est effondré vers le milieu et où pousse à présent un figuier, qui est passé à travers le plancher, à travers les poutres, à travers tout, et qui donne de l'ombre aux deux moitiés.",
        "Les gens du verger n'y entrent pas. Ils en font le tour, comme on fait le tour d'une flaque.",
        "Dedans, entre les poutres tombées : des bancs, une estrade, une chaire de bois sculpté où un pigeon a fait son nid. Des cadres au mur, qui ont tenu des portraits, et que l'humidité a mangés jusqu'à ne laisser que des cols blancs, des mains jointes, un bout de menton ici ou là, une ganse de chapeau. Une assemblée de fantômes réduits à leurs accessoires.",
        "Au-dessus de la porte, sur le linteau, du côté intérieur, des lignes sont gravées au ciseau, en belles capitales.",
      ],
      choices: [
        { label: "Lire le linteau", fx: { flag: "xd:charte" }, to: "XD_charte" },
        { label: "Fouiller la chaire", to: "XD_chaire" },
      ] },
    XD_charte: { act: "IV", title: "La charte", place: "haut_verger", ambiance: "village",
      text: [
        "LA COMPAGNIE DE LA MISÉRICORDE, ASSEMBLÉE SUR CETTE TERRE, SE DONNE LES RÈGLES QUI SUIVENT.",
        "I. NUL ICI NE POSSÉDERA RIEN QU'IL NE PUISSE PORTER SUR SON DOS.",
        "II. LE FRUIT DE LA TERRE EST À TOUS ; LA PEINE AUSSI.",
        "III. NUL NE PORTERA ARME HORS DE LA CHASSE.",
        "IV. NUL NE COMMANDERA PLUS D'UNE ANNÉE.",
        "V. LES ENFANTS APPRENDRONT À LIRE AVANT D'APPRENDRE À OBÉIR.",
        "VI. NUL NE FRAPPERA MONNAIE.",
        "Et puis, plus bas, d'une autre main, sur une planche clouée après coup, avec des lettres moins belles, plus serrées, taillées plus vite :",
        "VII. PAR DÉROGATION À LA SIXIÈME, ON FRAPPERA MONNAIE POUR LE SEUL COMMERCE DES NAVIRES. VOTÉ EN ASSEMBLÉE, CENT DOUZE VOIX CONTRE CENT CINQ.",
        "Sept voix. Tu fais le compte, debout dans la poussière, sous le figuier qui a crevé le toit. Il a suffi de sept voix. Quelqu'un avait parlé, ce jour-là, très bien sans doute, de l'outillage qui manquait, des médicaments, des semences, et du commerce qui est une forme honnête de l'amitié entre les peuples. Quatre hommes de plus, ce jour-là, auraient trouvé l'argument moins bon, et les braves gens dormiraient dans leurs lits, avec leurs noms.",
      ],
      choices: [{ label: "Fouiller la chaire", to: "XD_chaire", hide: { seen: "XD_chaire" } }, { label: "Sortir sous le figuier", back: "XD_verger" }] },
    XD_chaire: { act: "IV", title: "La chaire", place: "haut_verger", ambiance: "village",
      text: [
        "Le pigeon s'envole en t'insultant. Sous son nid, dans le coffre de la chaire, il y a un registre.",
        "Le registre des assemblées. Relié de toile, gonflé, tacheté de moisissure, mais lisible, d'une écriture de greffier appliqué. Tu le feuillettes. La distribution des semences. Une querelle de bornage entre deux familles, réglée par un arbitre. Le mariage d'Yves Le Bihan et d'Anne-Marie Coat. La décision de creuser le premier puits, au nord, où l'on a trouvé du minerai. La décision de frapper monnaie.",
        "La dernière séance tient en trois lignes. Ordre du jour : un navire est en vue, qui demande à commercer. L'intendant propose de le recevoir à la chapelle, pour lui faire honneur. Adopté à l'unanimité.",
        "Après, les pages sont blanches. Toutes. Sauf la toute dernière, où quelqu'un a écrit, longtemps après, au crayon, d'une main qui tremblait : « Pardon. »",
      ],
      choices: [
        { label: "Lire le linteau", fx: { flag: "xd:charte" }, to: "XD_charte", hide: { seen: "XD_charte" } },
        { label: "Remettre le registre dans la chaire", back: "XD_verger" },
      ] },

    // ---------------------------------------------------------------- the feast of flowers
    XD_fete: { act: "IV", title: "La fête des fleurs", place: "haut_verger", ambiance: "nuit",
      text: [
        "Le soir, on allume des feux sous les arbres, et l'on danse.",
        "Ce sont des danses lentes, en rond, sans musique, ou plutôt avec une musique que les danseurs fredonnent bouche fermée, tous ensemble, un bourdonnement de ruche qui monte et redescend. On se tient par les mains. On tourne. Les visages passent dans la lueur des feux, l'un après l'autre, tous heureux, tous pareils, comme les figures d'une horloge.",
        "Puis on vient te chercher. Deux femmes te prennent par les bras, te conduisent au milieu du rond, et une troisième te pose sur la tête une couronne de fleurs fraîches.",
        "« Il faut un nom, dit Pâquerette, gravement. Tout le monde a un nom de fleur. Le tien, de la mer, il est trop lourd. On va te le porter. »",
        "Tout le verger attend. Il n'y a aucune menace dans cette attente. Il y a quelque chose de pire : une immense bonne volonté.",
      ],
      choices: [
        { label: "« Chardon. »", fx: { set: { fleur: "chardon" } }, to: "XD_fete_nom" },
        { label: "« Ortie. »", fx: { set: { fleur: "ortie" } }, to: "XD_fete_nom" },
        { label: "« Bruyère. »", fx: { set: { fleur: "bruyere" } }, to: "XD_fete_nom" },
        { label: "Garder ton nom", fx: { set: { fleur: "aucune" } }, to: "XD_fete_refus" },
      ] },
    XD_fete_nom: { act: "IV", title: "La fête des fleurs", place: "haut_verger", ambiance: "nuit",
      text: [
        { if: { has: "fleur=chardon" }, text: "« Chardon », répète le verger, avec une joie d'enfants à qui l'on offre un mot neuf. Quelques-uns rient : un chardon, ça pique. Aubépine, sous son figuier, hoche la tête, comme si tu avais réussi un examen." },
        { if: { has: "fleur=ortie" }, text: "« Ortie », répète le verger, avec un petit frisson ravi, comme on prononce un juron à l'église. Aubépine, sous son figuier, rit tout bas." },
        { if: { has: "fleur=bruyere" }, text: "« Bruyère », répète le verger. Une femme, dans le rond, s'arrête de tourner. C'est son nom. Elle te regarde, longuement, avec une sorte de jalousie douce, puis elle te prend la main, et vous dansez ensemble, sous le même nom, comme deux sœurs de lait." },
        "On danse avec toi jusqu'au milieu de la nuit. Tu ne sais pas les pas. Personne ne les sait : on tourne, c'est tout. À un moment, tu t'aperçois que tu fredonnes, bouche fermée, avec les autres, et que tu tournes depuis longtemps, et que tu ne pensais à rien.",
      ],
      choices: [{ label: "Sortir du rond", to: "XD_paquerette" }] },
    XD_fete_refus: { act: "IV", title: "La fête des fleurs", place: "haut_verger", ambiance: "nuit",
      text: [
        "Tu dis ton nom. Ton vrai nom, celui de ton baptême, avec celui de ton père derrière.",
        "Le verger se tait. Le bourdonnement s'arrête. Les visages, autour du feu, ne se fâchent pas : ils se troublent, comme une eau qu'on remue, et quelque chose, au fond, essaie de remonter, et n'y arrive pas. Un homme se met à pleurer, sans savoir pourquoi, et s'excuse.",
        "Puis Pâquerette reprend la couronne sur ta tête, doucement, et la pose sur la sienne, par-dessus l'autre. « Alors tu la porteras plus tard », dit-elle. Et la danse reprend, sans toi.",
      ],
      choices: [{ label: "Regarder danser", to: "XD_paquerette" }] },
    XD_paquerette: { act: "IV", title: "Pâquerette", place: "haut_verger", ambiance: "nuit",
      text: [
        "Plus tard, quand les feux sont bas, Pâquerette vient s'asseoir à côté de toi. Elle a ses deux couronnes sur la tête. Elle a les cheveux blancs et quarante ans. Elle ne mâche pas, ce soir. Elle a oublié sa chique, peut-être, dans la danse.",
        "Elle regarde les braises, longtemps.",
        "« Anne, dit-elle tout à coup. Je m'appelais Anne. Anne-Marie. » Elle a l'air surprise, comme quelqu'un qui retrouve une clef dans une poche qu'il croyait vide. « J'avais un mari. Yves. Il est à la chapelle. » Elle se tourne vers toi, et ses yeux sont parfaitement clairs, et parfaitement désespérés. « Il est à la chapelle depuis vingt ans. Il n'est jamais revenu. Pourquoi est-ce qu'on ne va pas le chercher ? »",
        "Tu ouvres la bouche.",
        "Elle fouille sa poche, trouve un morceau d'écorce, et le met dans sa bouche, d'un geste machinal, en fronçant les sourcils. Elle mâche. Ses yeux se brouillent, lentement, comme une vitre où l'on souffle. Elle te sourit.",
        "« Il fait bon, dit-elle. Tu ne trouves pas ? »",
      ],
      choices: [{ label: "« Il fait bon. »", fx: { flag: "xd:paquerette" }, back: "XD_verger" }] },

    // ---------------------------------------------------------------- the Wells: a hub, once Hugon has spoken
    XD_forge: { act: "IV", title: "Les Puits", place: "puits", hub: true, noLead: true, backName: "la forge", ambiance: "nuit",
      text: [
        { first: true, text: "Hugon te regarde un moment, en plissant ses yeux blancs, puis il hausse ses énormes épaules. « Regarde, dit-il. Tout ce que tu veux. Personne ne te touchera. Ici, on montre. On a honte de rien. » Il retourne à son enclume, et le marteau reprend." },
        { first: true, text: "La salle de la forge est le cœur des Puits ; les galeries en partent comme des artères. Il y fait la chaleur d'un four à pain et la lumière d'un soir d'orage, rouge et noire. Les gens passent devant toi sans te regarder, ce qui est leur manière d'être polis. Ils parlent peu, et toujours à voix basse, à cause des échos." },
        { again: true, text: "La forge, la roue qui bat comme un cœur, la lueur rouge, et les galeries noires tout autour." },
      ],
      choices: [
        { label: "Suivre les enfants pâles", to: "XD_p_enfants", hide: { seen: "XD_p_enfants" } },
        { label: "Descendre dans la galerie basse, où l'on entend l'eau", to: "XD_p_galerie", hide: { seen: "XD_p_galerie" } },
        { label: "Regarder fondre l'argent", to: "XD_p_fonte", hide: { seen: "XD_p_fonte" } },
        { label: "Écouter le garçon aux cheveux blancs, dans la galerie des fondeurs", to: "WN_riwal", hide: { seen: "WN_riwal" } },
        { label: "Chercher les chasseurs d'œufs", to: "XD_p_chasseurs", hide: { any: [{ seen: "XD_p_chasseurs" }, { not: { seen: "XT_chasseurs" } }] } },
        { label: "Suivre les enfants pâles vers une chose que les grands ne montrent pas", to: "UN_enfants", hide: { seen: "UN_enfants" }, if: { seen: "XD_p_enfants" }, why: "Les enfants pâles ne te font pas encore confiance." },
        { label: "Saluer les trois vieilles femmes, près du foyer", to: "XD_p_meres", hide: { seen: "XD_p_meres" } },
      ].concat(DECIDER) },
    XD_p_enfants: { act: "IV", title: "Les enfants des Puits", place: "puits", ambiance: "nuit",
      text: [
        "Ils te suivent depuis ton arrivée, à distance, en groupe, comme une volée de moineaux pâles. Quand tu te retournes, ils s'égaillent dans les recoins. Quand tu t'assieds, ils reviennent.",
        "Ils ont la peau blanche des racines qu'on déterre, des yeux immenses, et des mains d'adultes, déjà, calleuses, noircies, avec des ongles cassés. Ils portent des tabliers de cuir à leur taille. Les plus grands ont des marteaux à leur ceinture, des marteaux d'enfant, qu'on a forgés pour eux.",
        "Une vieille aveugle, assise sur un tabouret, leur fait la classe. Elle tient dans ses mains un outil, une tenaille, une lime, et le passe de main en main, et chaque enfant doit dire ce que c'est, les yeux fermés, à quoi ça sert, et de quel métal c'est fait. Ils le savent au toucher. Au poids. Au goût, parfois : un petit garçon lèche une lame et dit « fer de la troisième veine », et la vieille approuve.",
        "Puis l'une des filles, la plus hardie, vient se planter devant toi.",
        "« Le soleil, dit-elle. C'est comment ? »",
      ],
      choices: [
        { label: "Lui décrire le soleil", fx: { flag: "xd:soleil_dit" }, to: "XD_p_soleil" },
        { label: "Lui montrer la mousse qui luit", hide: { not: { item: "mousse_luisante" } }, fx: { flag: "xd:mousse_donnee", drop: "mousse_luisante" }, to: "XD_p_mousse" },
      ] },
    XD_p_soleil: { act: "IV", title: "Le soleil", place: "puits", ambiance: "nuit",
      text: [
        "Tu essaies. Tu dis que c'est comme la forge, mais très loin, et très haut, et tellement plus grand qu'on n'en voit pas les bords. Qu'il chauffe sans brûler, sauf l'été. Qu'il monte tous les matins d'un côté et descend tous les soirs de l'autre, et que personne ne le pousse.",
        "« Personne ne le pousse ? » répète-t-elle, incrédule. Pour eux, tout ce qui tourne a quelqu'un dedans.",
        "Tu dis aussi qu'il fait mal aux yeux, si on le regarde. Ça, ils le savent. Ils hochent la tête, tous ensemble, avec une sagesse de vieillards. Ils sont montés, une fois, chacun, pour voir. Ils sont redescendus en pleurant. La vieille aveugle sourit, sur son tabouret, et ne dit rien. Elle l'a regardé trop longtemps, elle, le jour des clefs, en remontant de la mine.",
      ],
      choices: [{ label: "Revenir vers la forge", back: "XD_forge" }] },
    XD_p_mousse: { act: "IV", title: "La lumière froide", place: "puits", ambiance: "nuit",
      text: [
        "Tu sors la calebasse de mousse du bois sombre, tu l'ouvres, et tu la poses dans l'ombre d'un recoin.",
        "Elle luit. Bleue, froide, douce, une lumière de lune au fond d'un puits.",
        "Les enfants s'approchent, un à un. Ils ne plissent pas les yeux. Pour la première fois depuis que tu es là, tu vois des yeux des Puits grands ouverts sur une lumière. Ils regardent la mousse comme on regarde la mer quand on la voit la première fois. La fille hardie avance la main, touche, retire la main, regarde ses doigts, qui luisent un peu, et rit.",
        "« C'est le soleil d'en haut ? demande un garçon.",
        "— C'est un petit soleil, dit la fille, avec autorité. Pour nous. »",
        "Tu leur laisses la calebasse. Le lendemain, tu la retrouveras au milieu de la salle de classe, sur un socle de fer forgé exprès dans la nuit, avec une petite grille autour, comme un reliquaire.",
      ],
      choices: [{ label: "Revenir vers la forge", fx: { regard: { hugon: "cordial" } }, back: "XD_forge" }] },
    XD_p_galerie: { act: "IV", title: "La galerie basse", place: "puits", ambiance: "nuit",
      text: [
        "La galerie basse s'enfonce sous la forge, en pente, et l'on y entend l'eau. Elle suinte des parois, coule dans une rigole, au milieu, vers un puisard où plonge le tuyau des pompes de la roue. Plus loin, la galerie s'élargit en une salle où quatre hommes attaquent la roche au pic, à la lueur d'une seule lanterne.",
        { if: { item: "mousse_luisante" }, text: "Dans ta poche, la mousse du bois sombre s'est mise à luire, à travers la calebasse. À sa lumière bleue, tu vois dans la paroi ce que la lanterne ne montre pas : une veine pâle, qui court en diagonale, et qui brille un peu." },
        "Le bruit change. Tu ne sais pas tout de suite ce qui a changé. Puis tu comprends : l'eau ne suinte plus. Elle coule. Elle sort de la paroi, au fond, en un jet mince, sifflant, qui grossit à vue d'œil.",
        "« La poche ! » crie un des hommes. Les quatre lâchent leurs pics et courent vers toi, vers la pente. Trois passent. Le quatrième, le plus vieux, glisse dans la rigole, et sa jambe se coince sous une pierre que l'eau a fait rouler.",
      ],
      choices: [
        { label: "Redescendre le dégager", test: { dom: "nature", diff: 0, label: "Contre l'eau qui monte" }, win: { fx: { flag: "xd:sauve_mineur", regard: { hugon: "redevable" } }, to: "XD_p_crue" }, lose: { to: "XD_p_crue_rate" } },
        { label: "Courir chercher des hommes et une barre", to: "XD_p_crue_rate" },
      ] },
    XD_p_crue: { act: "IV", title: "L'eau", place: "puits", ambiance: "nuit",
      text: [
        "Tu redescends dans l'eau qui t'arrive aux genoux, puis à la taille, glacée, noire, avec un bruit de bête qui gronde au fond de la galerie. Tu glisses tes deux mains sous la pierre. Elle ne bouge pas. Tu cales ton épaule contre la paroi, ton pied contre la rigole, et tu pousses, et quelque chose en toi craque, et la pierre roule.",
        "L'homme se dégage. Vous remontez la pente à quatre pattes, l'un tirant l'autre, avec l'eau aux trousses. En haut, les trois autres vous attrapent par les bras et vous hissent sur le palier de la forge.",
        "Derrière vous, la galerie basse se remplit jusqu'à la voûte en un quart d'heure. La roue, au-dessus, se met à tourner deux fois plus vite. Les marcheurs, dedans, sourient toujours.",
        "Le vieil homme que tu as tiré de l'eau s'appelle Thégonnec. Il ne te remercie pas. Il te prend la main, la retourne, regarde la paume, les ampoules, la boue, et la referme lui-même, comme on ferme une boîte où l'on a vu ce qu'on voulait voir. Le soir, toute la forge sait ton nom.",
      ],
      choices: [{ label: "Revenir vers la forge", back: "XD_forge" }] },
    XD_p_crue_rate: { act: "IV", title: "L'eau", place: "puits", ambiance: "nuit",
      text: [
        "Le temps de revenir avec des hommes et une barre de fer, l'eau a monté jusqu'à la poitrine du vieux mineur. On le dégage à six, sous l'eau, à l'aveugle. On le remonte. Il vit. Il a bu la moitié de la galerie et il tousse à fendre l'âme, assis contre la forge, une couverture sur les épaules.",
        "Personne ne te reproche rien. Personne ne te regarde non plus. Tu étais là quand c'est arrivé ; les autres aussi ; eux sont redescendus, et ils sont des Puits. Ici, la différence se voit.",
      ],
      choices: [{ label: "Revenir vers la forge", back: "XD_forge" }] },
    XD_p_fonte: { act: "IV", title: "La fonte", place: "puits", ambiance: "nuit",
      text: [
        "Dans un coin de la forge, à l'écart, un creuset. Un vieil homme au tablier troué y fait fondre de l'argent, lentement, en remuant avec une baguette de fer. Il a des lunettes de corne aux verres noircis à la fumée, qui lui donnent l'air d'une chouette.",
        "À côté de lui, sur un établi, ce qui reste des vases de la Compagnie. Un plateau d'offrande, plié en deux. Un encensoir dont on a coupé les chaînes. Des burettes. Et un calice. Un seul. Haut, simple, d'un argent terni, avec sur le pied, gravées, une ancre et une croix.",
        "« Le dernier, dit le vieux sans lever les yeux. Demain, il devient des clous. Dix-huit clous, à peu près. On a besoin de clous. » Il remue. « J'ai fondu la patène la semaine dernière. Ça m'a fait de la peine. C'était de la belle ouvrage. Mais un clou, ça sert. »",
      ],
      choices: [
        { label: "Lui demander le calice", test: { dom: "social", diff: 1, label: "Contre dix-huit clous" }, win: { fx: { item: "calice_compagnie" }, to: "XD_p_calice" }, lose: { to: "XD_p_calice_non" } },
        { label: "Le regarder fondre", to: "XD_p_calice_non" },
      ] },
    XD_p_calice: { act: "IV", title: "Le calice", place: "puits", ambiance: "nuit",
      text: [
        "Il t'écoute, la baguette immobile. Tu parles de la chapelle. Des deux cent dix-sept. De ceux du verger qui ont oublié, et de ceux d'ici qui se souviennent trop, et de ceux de là-bas, au loin, qui ne savent rien. Qu'il faudrait que quelque chose de la Compagnie sorte de l'île, entier, pour qu'on y croie.",
        "Il retire ses lunettes. Ses yeux, dessous, sont presque blancs.",
        "« Mon frère servait la messe avec, dit-il. Il avait neuf ans. » Il prend le calice et te le tend, le pied en avant, sans le regarder. « Prends. Je ferai des clous avec autre chose. On trouve toujours de quoi faire des clous. »",
      ],
      choices: [{ label: "Revenir vers la forge", back: "XD_forge" }] },
    XD_p_calice_non: { act: "IV", title: "Le calice", place: "puits", ambiance: "nuit",
      text: [
        "Il hoche la tête, poliment, et reprend sa baguette.",
        "Le lendemain, tu repasses. Le creuset est froid. Sur l'établi, dix-huit clous, alignés, brillants, d'un argent plus clair que celui qu'on voit d'habitude, avec une ancre minuscule, à peine visible, sur la tête du dernier. Le vieux n'a pas pu s'en empêcher.",
      ],
      choices: [{ label: "Revenir vers la forge", back: "XD_forge" }] },
    XD_p_chasseurs: { act: "IV", title: "Les chasseurs d'œufs", place: "puits", ambiance: "nuit",
      text: [
        "Tu les retrouves dans une galerie latérale, où l'on sèche les peaux. Mâchefer, Étincelle, et Soufflet assis sur un tas de cuirs.",
        { if: { has: "xt:chasseurs_abandonnes" }, text: "Soufflet a la jambe raide, tendue devant lui, dans une gouttière de fer. Il ne marchera plus droit. Mâchefer te voit, et se lève, lentement, et vient se planter devant toi, si près que tu sens son haleine de fumée. Elle ne dit rien. Elle crache par terre, à tes pieds, et retourne s'asseoir. Étincelle détourne les yeux." },
        { if: { has: "xt:chasseurs_mefiants" }, text: "Soufflet boite, un peu. Mâchefer te reconnaît. « La mer, dit-elle. Celle qui lève les troncs de travers. » Elle ne sourit pas, mais elle te fait une place sur les cuirs, ce qui est déjà beaucoup." },
        { if: { has: "xt:chasseurs" }, text: "Soufflet se lève d'un bond en te voyant et manque de retomber, et rit. Étincelle te tape dans le dos. Mâchefer te regarde, longuement, puis elle te tend sa gourde, ce qui, aux Puits, à ce que tu comprends ensuite, équivaut à peu près à une demande en adoption." },
        { if: { item: "sou_forge" }, text: "Tu sors le sou de forge. Mâchefer le reconnaît, le fait sauter dans sa main, et te le rend. « Garde. Tu l'as montré. C'est fait. Quand tu parleras à Hugon, je serai à côté. »" },
        { if: { has: "xt:puits_dette" }, text: "« Le gros, dit Mâchefer. Il va bien ? » Tu dis que oui. Elle hoche la tête. « Alors c'est le moment. Tu as une dette. On va voir Hugon, et tu vas parler, et moi, je vais dire que tu paies. »" },
      ],
      choices: [
        { label: "Revenir vers la forge, avec elle", hide: { not: { has: "xt:chasseurs" } }, fx: { flag: "xd:machefer" }, back: "XD_forge" },
        { label: "Revenir vers la forge", hide: { has: "xt:chasseurs" }, back: "XD_forge" },
      ] },
    XD_p_meres: { act: "IV", title: "Les Mères de forge", place: "puits", ambiance: "nuit",
      text: [
        "Elles sont trois, assises près du foyer, sur des tabourets de fer, à tricoter de la laine de chèvre avec des aiguilles qui sont des clous. On t'a dit leur nom en passant : les Mères. On les appelle comme ça, sans autre nom. Elles décident qui marie qui, qui descend à la veine, qui marche dans la roue. Hugon commande la forge. Elles commandent Hugon.",
        "Elles te font asseoir. Elles t'offrent un bouillon. Elles te posent des questions sur le monde, précises, pratiques : le prix du sel, la mode des tabliers, si les rois sont toujours aussi bêtes.",
        "Puis la plus vieille pose son tricot.",
        "« Hugon veut un navire, dit-elle. Il veut partir. Les jeunes aussi. Ils veulent voir un jour qui ne leur rappelle rien. » Elle regarde le feu. « Nous, on ne partira pas. On est descendues ici le jour où le jour a tué nos hommes. On y restera. Le soleil, c'est là-haut qu'il a éclairé ça. Ici, il n'y a jamais eu que du feu, et le feu, au moins, on sait d'où il vient. »",
        "« Prends nos jeunes, si tu as un navire, dit la deuxième. Prends Hugon. Laisse-nous les vieux, la roue, et la forge. Quelqu'un doit garder la forge. »",
        "La troisième ne dit rien. Elle tricote.",
      ],
      choices: [{ label: "Revenir vers la forge", fx: { flag: "xd:meres" }, back: "XD_forge" }] },
    XD_p_parole: { act: "IV", title: "La parole de Mâchefer", place: "puits", ambiance: "nuit",
      text: [
        "Mâchefer ne demande pas la permission. Elle se plante devant Hugon, entre lui et toi, les poings sur les hanches, et parle à voix haute, dans la langue enfouie, très vite, pour que toute la forge entende.",
        { if: { has: "xt:puits_dette" }, text: "Tu comprends des morceaux. La Table. Un gros, avec une jambe cassée. Le filet. Trois sifflets. Une dette. Et un mot qu'elle répète en frappant du poing sur sa paume : « Paie. Paie. Paie. »" },
        { if: { not: { has: "xt:puits_dette" } }, text: "Tu comprends des morceaux. La Table. Un tronc. Soufflet. Une jambe qui aurait dû casser. Et un mot qu'elle répète en frappant du poing sur sa paume, en te montrant du menton : « Aide. Aide. Aide. »" },
        "Hugon l'écoute jusqu'au bout. Puis il te regarde, et tu vois quelque chose céder dans ses épaules, comme une poutre qui accepte enfin la charge.",
        "« Chez nous, dit-il, une parole donnée devant la forge, elle pèse. Mâchefer a parlé pour toi. Si tu mens, c'est elle qui paie. » Il te tend la main. « Un navire. Et ceux de la roue remontent ce soir. »",
      ],
      choices: [{ label: "Lui serrer la main", to: "XD_pacte" }] },
  },
  extras: {
    items: {
      calice_compagnie: { name: "Le calice de la Compagnie", kind: "divers", keep: true, price: 0, desc: "Un calice d'argent terni, haut, simple, avec une ancre et une croix gravées sur le pied. Le dernier des vases de la chapelle, sauvé du creuset des Puits." },
    },
  },
};
