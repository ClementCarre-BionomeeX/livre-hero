// L'Île Folle-Aiguille · act IV, chapter IV.3 followed by the child: the privateer in the bay. Seen from the chapel
// (mousse:chapelle) or from the hermit's side; the diggers with the stolen copy, who dig where the needle lies (if
// sabran:copie); then the night swim. If the mutineers hold the ship: cut her cable and bring her into the Creek of
// Rays (cormorane:reprise), or fire her powder (cormorane:sabotee). If the captain's men hold her: warn the boatswain,
// and warp her into the creek before the brigantine's guns can take her (cormorane:cachee). The hermit may steer.
var SHIP_MUTINS = { has: "cormorane:mutins" };
var AVEC_DAGREL = { all: [{ has: "dagrel:demasque" }, { not: { has: "mousse:chapelle" } }] };
module.exports = {
  passages: {
    A4o_debut: { act: "IV", title: "Le brigantin", place: "sylve", ambiance: "nature",
      text: [
        { if: { has: "mousse:chapelle" }, text: "Tu le vois entrer depuis le mur de la chapelle, ou depuis les vergers, à côté de la capitaine, qui le regarde à la lunette sans rien dire, la mâchoire serrée. Il mouille en travers de l'anse, et sa batterie, quatorze sabords ouverts d'un seul coup, fait face à la Cormorane comme une rangée de dents." },
        { if: { not: { has: "mousse:chapelle" } }, text: "Tu le vois entrer depuis la lisière de la Sylve, à côté du vieil homme, qui le regarde longtemps, appuyé sur un bâton, son tricorne sans bord sur les yeux. Il mouille en travers de l'anse, et sa batterie, quatorze sabords ouverts d'un seul coup, fait face à la Cormorane comme une rangée de dents." },
        { if: AVEC_DAGREL, text: "« Un corsaire, dit Dagrel. Un vrai. Regardez comme il mouille : en travers, pour fermer la porte. J'ai fait la même chose, ici, il y a vingt et un ans. » Il sourit. « Les jeunes gens n'inventent jamais rien. Ils ont seulement de plus jolis navires. »" },
        { if: { all: [{ not: { has: "mousse:chapelle" } }, { not: { has: "dagrel:demasque" } }] }, text: "« Encore un qui vient creuser, dit le vieil homme. Ils creusent tous. » Il se gratte la barbe. « Celui-là a des canons. C'est une façon de creuser plus vite. »" },
        "Sur la plage, les mutins ont vu, eux aussi. Ils courent, ils crient, ils traînent le canot sous les arbres. Sur la Cormorane, quelqu'un hisse et rentre trois fois de suite un pavillon, sans savoir lequel montrer.",
        "Au crépuscule, une chaloupe du brigantin débarque des hommes avec des pelles.",
      ],
      choices: [
        { label: "Aller voir où ils creusent", hide: { not: { has: "sabran:copie" } }, to: "A4o_creuseurs" },
        { label: "Penser au navire", to: "A4o_plan" },
      ] },
    A4o_creuseurs: { act: "IV", title: "Les creuseurs", place: "sylve", ambiance: "nature",
      text: [
        "Tu les suis par la forêt, de loin, à plat ventre dans les fougères pour finir.",
        "Ils sont dix, avec des pelles, des pioches, des lanternes, et un homme qui marche devant, une boussole à la main, en comptant ses pas à voix haute. Un homme au visage grêlé, à la dent d'or. Sabran Quéru. Tu l'as vu pour la dernière fois dans la salle du Fanal, face au fusil de ton père.",
        "Il compte. Il s'arrête. Il regarde la boussole, qui tourne. Il jure. Il la secoue. Il recommence à compter. Derrière lui, la vieille femme à l'œil blanc, courbée sous sa hotte, qui suit en trottinant, lui dit des choses à voix basse, et il la repousse, et elle revient.",
        { if: { has: "hulotte:renseignee" }, text: "La Mère Hulotte. Elle est venue au Fanal un jour de pluie, avec sa hotte et ses questions, et tu lui as dit où logeait le Gabier. Tu as la gorge sèche, tout à coup." },
        "Ils arrivent au bord d'un marais, au pied d'une petite colline, à un endroit où il n'y a rien du tout. Sabran plante un bâton dans la vase. « Ici », dit-il.",
        "Ils creusent. L'eau remplit le trou à mesure. Ils creusent dans l'eau. Ils en sortent de la vase, des racines, une tortue furieuse, des crabes, et à minuit, un pot de terre cassé, qui ne contient rien, et qui a dû appartenir à un colon qui cultivait des courges.",
        "Sabran regarde le pot. Puis il le jette contre un arbre. Puis il sort un papier plié de sa poche, la copie, et il la regarde à la lanterne, et il la retourne, et il dit, très lentement : « Larrouy. Vieux salaud. Elle est fausse. »",
        { if: { has: "correction:parchemin" }, text: "Toi, tu sais qu'elle est vraie. Elle est seulement lue de travers. Trois quarts au couchant. Tu restes à plat ventre dans les fougères, avec ce secret qui te brûle la langue comme un piment." },
      ],
      choices: [{ label: "Repartir avant l'aube", fx: { flag: "creuseurs:vus" }, to: "A4o_plan" }] },

    A4o_plan: { act: "IV", title: "Le navire", place: "sylve", ambiance: "nuit",
      text: [
        { if: SHIP_MUTINS, text: "La Cormorane est aux mutins. Le brigantin la tient sous ses canons. Demain, ou après-demain, l'un des deux la prendra à l'autre, et ceux de la chapelle n'auront plus de navire pour rentrer, quoi qu'il arrive. Ce soir, la plupart des mutins sont à terre, sur la plage, à regarder le brigantin en buvant ce qui reste. À bord, il n'y a que trois ou quatre hommes, et du rhum." },
        { if: { not: SHIP_MUTINS }, text: "La Cormorane est à la capitaine, gardée par Gobert et quatre hommes. Mais le brigantin la tient sous ses quatorze canons, à une encablure. Il suffit d'une bordée pour qu'elle coule, ou d'une chaloupe d'abordage, la nuit, pour qu'elle change de maître. Et Gobert ne peut pas bouger : à cinq, on ne lève pas une ancre de quatre cents tonneaux sous le nez d'un corsaire." },
        "À l'est de l'anse, il y a une crique. Tu l'as vue d'en haut, de l'arbre, ou de la Table : une crique étroite, profonde au milieu, bordée de palétuviers qui se referment au-dessus de l'eau comme une voûte, où un navire pourrait se cacher, si quelqu'un savait l'y mettre.",
        { if: AVEC_DAGREL, text: "« La Crique-aux-Raies, dit le vieil homme, qui a suivi ton regard. J'y ai caché la Maraude, pendant trois semaines, il y a vingt et un ans, quand les gens de la colonie ne savaient pas encore que nous étions là. Il y a cinq brasses au milieu, et un banc de vase à l'entrée qu'on passe à marée haute en rasant la pointe. » Il te regarde. « Je pourrais la mener là-dedans les yeux fermés. Je l'ai déjà fait. »" },
        { if: { has: "xi:espion" }, text: "Tu sais, par Fenouillet, ce qu'il y a à bord et ce qu'il n'y a pas : trois ou quatre hommes, du vin, personne au câble, et tous les yeux tournés vers le brigantin. Un homme invisible a compté pour toi les bouteilles et les sentinelles. Il a compté juste." },
        { if: { has: "xi:brigantin" }, text: "Et tu sais, par Fenouillet, que le brigantin se dispute sur la date : demain, après-demain, ce soir pour la vieille à l'œil blanc. Si quelqu'un doit mettre la Cormorane hors de portée, c'est cette nuit, ou jamais." },
        { if: { has: "mousse:chapelle" }, text: "Tu le dis à la capitaine. Elle te regarde longtemps. « Tu nages bien ? » demande-t-elle. Tu dis que tu as appris dans l'anse des Corneilles, l'hiver, pour les paris. Elle ferme les yeux une seconde. « Va. Je n'ai personne d'autre qui puisse passer sans qu'on le voie. »" },
      ],
      choices: [
        { label: "Y aller seul{e}, cette nuit, à la nage", to: "A4o_nage" },
        { label: "Y aller avec le vieil homme, qui connaît la crique", hide: { not: AVEC_DAGREL }, fx: { flag: "dagrel:aide_navire" }, to: "A4o_nage" },
      ] },
    A4o_nage: { act: "IV", title: "La nage", place: "anse_morte", ambiance: "nuit",
      text: [
        "Tu te glisses dans l'eau à minuit, sous les palétuviers de la pointe, en chemise. L'eau est tiède comme un bain. Elle s'allume autour de toi à chaque mouvement : des milliers de petites lueurs vertes, froides, qui naissent dans ton sillage et meurent derrière toi. La mer brille. Tu nages dans une poussière d'étoiles, et chaque brasse te trahit.",
        "Tu nages lentement, sous l'eau autant que tu peux, en remontant juste ce qu'il faut pour respirer. Au-dessus de toi, la masse noire du brigantin, ses fanaux, ses voix, un violon. Puis la Cormorane.",
        { with: "chien", text: "Le chien nage à côté de toi, la tête haute, les oreilles couchées, sans un bruit. Il brille, lui aussi, comme un loup de légende." },
        { if: { has: "dagrel:aide_navire" }, text: "Le vieil homme nage derrière toi. Il nage comme un phoque, sans effort, sa barbe blanche flottant autour de lui, et il rit tout bas, de temps en temps, d'un rire d'enfant. Il a soixante-trois ans. Il n'a pas nagé dans cette anse depuis vingt et un ans." },
        "Tu touches la coque. Le cuivre, sous ta main, couvert d'algues. Tu fais le tour, jusqu'à l'avant, jusqu'au câble de l'ancre, qui plonge dans l'eau noire, gros comme ta cuisse.",
      ],
      choices: [
        { label: "Monter à bord par le câble", hide: { not: SHIP_MUTINS }, to: "A4o_bord" },
        { label: "Monter à bord par le câble et réveiller Gobert", hide: SHIP_MUTINS, to: "A4o_gobert" },
      ] },

    // ---- the ship held: warn the boatswain, warp her into the creek
    A4o_gobert: { act: "IV", title: "Gobert", place: "anse_morte", ambiance: "nuit",
      text: [
        "Tu enjambes la lisse. Un pistolet se pose sur ta tempe.",
        "« Un pas, et tu es mort, dit la voix de Gobert. Un deuxième, et je te reconnais. » Il baisse le pistolet. « Bon sang de bon sang. Le mousse. On te croyait mangé par les crabes. »",
        "Tu lui expliques. La crique, la vase, la marée haute. Il écoute, en mâchant sa chique, les yeux sur le brigantin.",
        "« À cinq, dit-il, on ne lève pas l'ancre. Mais on peut la laisser. On file le câble, on le bouée, et on se hale sur une ancre à jet, qu'on mouille devant nous, avec le canot, et qu'on remonte, et qu'on remouille. Ça s'appelle touer. C'est long. C'est silencieux. Ça vous met les bras en charpie. » Il crache. « Il faut quelqu'un dans le canot pour mouiller l'ancre à jet devant nous, dans le noir, au bon endroit. Quelqu'un qui sache où est la passe. »",
        { if: { has: "dagrel:aide_navire" }, text: "Le vieil homme enjambe la lisse à son tour, ruisselant, superbe. Gobert le regarde, et lève à nouveau le pistolet. « Et ça ? » Le vieil homme s'incline. « Ça, dit-il, c'est le pilote. »" },
      ],
      choices: [
        { label: "Mener le canot toi-même, à l'estime", test: { dom: "nature", diff: 0, label: "La passe de la crique, de nuit" }, win: { to: "A4o_touer" }, lose: { to: "A4o_touer_rate" } },
        { label: "Laisser le vieil homme mener le canot", hide: { not: { has: "dagrel:aide_navire" } }, to: "A4o_touer" },
      ] },
    A4o_touer: { act: "IV", title: "Touer", place: "crique", ambiance: "nuit",
      text: [
        "Toute la nuit. Le canot part devant, avec l'ancre à jet, glisse dans le noir sur l'eau qui s'allume, mouille, revient. À bord, cinq hommes et toi halent sur le cabestan, à l'aussière, sans un mot, sans chanter, et la Cormorane avance, d'une longueur, d'une autre, comme un animal énorme qu'on tire par le licol. On file l'ancre de poste, on la bouée d'un baril vide. On passe au ras de la pointe, si près des palétuviers que les branches griffent la coque. On sent la quille toucher la vase, frotter, gémir. Puis l'eau redevient profonde.",
        "À l'aube, la Cormorane est au fond de la Crique-aux-Raies, sous une voûte de palétuviers si épaisse qu'on ne voit pas ses mâts depuis l'anse. L'eau est noire, immobile. Des raies passent dessous, larges comme des tables, en ondulant.",
        "Gobert s'assied sur le pont, les mains en sang, et rit, tout seul, longtemps.",
        { if: { has: "dagrel:aide_navire" }, text: "Le vieil homme est debout à la proue. Il regarde la crique, les palétuviers, l'eau noire. Il pleure, sans bruit, et ne s'essuie pas. Puis il se retourne, et sourit à Gobert, et lui dit : « Votre navire est moins bon que le mien. Mais il est mieux tenu. »" },
      ],
      choices: [{ label: "Dormir sur le pont", fx: { flag: "cormorane:cachee", regard: { gobert: "admiratif" } }, to: "A4o_fin" }] },
    A4o_touer_rate: { act: "IV", title: "La vase", place: "crique", ambiance: "nuit",
      text: [
        "Tu mouilles l'ancre à jet trop à droite. La Cormorane, halée, vient s'échouer sur le banc de vase de l'entrée, avec un long gémissement de membrures, et s'y couche, doucement, sur le flanc.",
        "À l'aube, elle est là, à l'entrée de la crique, inclinée, à moitié cachée par les palétuviers, à moitié visible depuis l'anse. Le brigantin la voit. Il ne tire pas. Il n'a pas besoin : à marée basse, elle est à sec.",
        "Gobert la regarde, les mains en sang. « Elle remontera, dit-il. À la grande marée, dans six jours, si on l'allège. Elle remontera. » Il le dit comme on le dit d'un malade.",
      ],
      choices: [{ label: "Dormir sur le pont penché", fx: { flag: "cormorane:echouee" }, to: "A4o_fin" }] },

    // ---- the ship held by mutineers: retake or fire her
    A4o_bord: { act: "IV", title: "À bord", place: "anse_morte", ambiance: "nuit",
      text: [
        "Tu montes le long du câble, main sur main, jusqu'à l'écubier, et tu te glisses sur le pont par-dessus le gaillard d'avant.",
        "La Cormorane est méconnaissable. Le pont est jonché de bouteilles, de linge, de restes de repas. Des hamacs pendent n'importe où. Une lanterne brûle au pied du grand mât, et autour, quatre hommes dorment, ronflent, ou font semblant.",
        "Boucaut, le voilier, couché sur une voile pliée, une bouteille dans les bras. Deux autres, que tu connais mal. Et assis sur le cabestan, les jambes croisées, éveillé, une fiole à la main, quelqu'un qui te regarde.",
        { if: { has: "vauclair:gris" }, text: "Monsieur Gris. L'aide-chirurgien. Il te sourit avec toutes ses dents. Il pose un doigt sur ses lèvres, comme Malandain dans le canot, et il rit sans bruit, et ses épaules tremblent." },
        { if: { not: { has: "vauclair:gris" } }, text: "Coquerel, le rieur, qui ne rit pas. Il a les yeux rouges. Il te regarde comme on regarde un fantôme, sans bouger." },
      ],
      choices: [
        { label: "Lui faire signe de se taire, et aller au câble avec ton couteau", to: "A4o_cable" },
        { label: "Descendre à la soute à poudre", to: "A4o_poudre" },
      ] },
    A4o_cable: { act: "IV", title: "Le câble", place: "anse_morte", ambiance: "nuit",
      text: [
        { if: { has: "vauclair:gris" }, text: "Monsieur Gris ne bouge pas. Il te regarde faire. Il chuchote, avec un ravissement d'enfant : « Oh, oui. Oh, oui. Coupez. C'est tellement mieux que ce qu'ils avaient prévu. »" },
        { if: { not: { has: "vauclair:gris" } }, text: "Coquerel ne bouge pas. Il te regarde faire, longtemps. Puis il dit, très bas, d'une voix enrouée : « J'avais un petit frère, à Morlenc. Il avait ton âge. » Et il se retourne contre le mât, et ferme les yeux." },
        "Le câble est énorme, dur, goudronné. Ton couteau de pêche n'y entre qu'à peine. Tu scies, fibre par fibre, à genoux près de l'écubier, en écoutant les ronflements. La sueur te coule dans les yeux.",
      ],
      choices: [
        { label: "Scier jusqu'au bout", test: { dom: "discretion", diff: 0, label: "Sans réveiller Boucaut" }, win: { to: "A4o_derive" }, lose: { to: "A4o_boucaut" } },
      ] },
    A4o_boucaut: { act: "IV", title: "Boucaut", place: "anse_morte", ambiance: "nuit",
      text: [
        "Le dernier toron cède avec un claquement de fouet. Boucaut se dresse sur sa voile, la bouteille à la main, les yeux ronds.",
        "Il te voit. Il voit le câble. Il ouvre la bouche pour crier.",
        { with: "chien", text: "Il ne crie pas. Le chien-loup est sur lui avant qu'il ait fini d'inspirer, les pattes sur sa poitrine, les crocs à un pouce de sa gorge, et Boucaut, qui est un lâche, et qui le sait, et qui l'a toujours dit, s'évanouit." },
        { if: { not: { present: "chien" } }, text: "Tu te jettes sur lui. Il est mou, ivre, terrifié. Il ne se défend pas. Il pleure. Il dit qu'il n'a jamais voulu, qu'on l'a forcé, qu'il a une mère à Morlenc. Tu le ligotes avec une drisse, et tu lui fourres un bas dans la bouche, et il se laisse faire avec une gratitude abjecte." },
      ],
      choices: [{ label: "Le navire dérive", to: "A4o_derive" }] },
    A4o_derive: { act: "IV", title: "La dérive", place: "crique", ambiance: "nuit",
      text: [
        "Le câble coupé file par l'écubier et disparaît dans l'eau noire avec un bruit de serpent. La Cormorane, libérée, frémit, et commence à tourner, lentement, sur le courant de la marée descendante, qui l'emporte vers l'est.",
        "Personne ne se réveille. Personne, sur le brigantin, ne voit rien : un navire qui évite sur son ancre, la nuit, c'est la chose la plus banale du monde.",
        { if: { has: "dagrel:aide_navire" }, text: "Le vieil homme est à la barre. Tu ne l'as pas vu monter. Il tient la roue d'une main, du bout des doigts, comme on tient la main d'une danseuse, et il mène le navire à la dérive, sans une voile, avec le seul courant et le gouvernail, vers la pointe de l'est, droit sur la crique, au ras des palétuviers. Il chantonne. Le navire lui obéit comme un cheval qui reconnaît son ancien maître." },
        { if: { not: { has: "dagrel:aide_navire" } }, text: "Tu cours à la barre. Tu n'as jamais tenu la roue d'un navire de quatre cents tonneaux. Tu sais seulement, pour l'avoir vu faire à Lemerle, de quel côté on tourne pour aller où." },
      ],
      choices: [
        { label: "Mener le navire dans la crique", hide: { has: "dagrel:aide_navire" }, test: { dom: "nature", diff: 0, label: "La passe de la crique, à la dérive" }, win: { to: "A4o_crique" }, lose: { to: "A4o_echoue" } },
        { label: "Le laisser faire", hide: { not: { has: "dagrel:aide_navire" } }, to: "A4o_crique" },
      ] },
    A4o_crique: { act: "IV", title: "La Crique-aux-Raies", place: "crique", ambiance: "nuit",
      text: [
        "La Cormorane entre dans la crique comme une main entre dans un gant. Les palétuviers se referment au-dessus des mâts, griffent les vergues, et se rejoignent derrière la poupe. L'eau devient noire, profonde, immobile. Le navire s'arrête de lui-même, au fond, contre la vase molle, avec un soupir de bois.",
        "Tu laisses tomber l'ancre de rechange, celle de l'arrière. Elle plonge dans cinq brasses d'eau sans un bruit.",
        "À l'aube, les mutins de la plage se réveillent et regardent l'anse. La Cormorane n'y est plus. Le brigantin non plus ne la voit pas. Pendant une heure, sur la plage et sur la Désinvolte, des hommes courent dans tous les sens en criant que le navire a coulé.",
        { if: { has: "dagrel:aide_navire" }, text: "Le vieil homme est assis à l'arrière, sur le couronnement, les pieds pendant au-dessus de l'eau noire, et il regarde les raies passer. « Tu sais ce que tu as fait ? dit-il, sans se retourner, et c'est la première fois qu'il te tutoie. Tu as pris un navire. Avec un couteau de pêche. » Il rit. « Il m'a fallu deux ans et trente hommes, la première fois. »" },
        "Boucaut, ligoté, et les deux autres, réveillés par le silence, te regardent comme on regarde le diable.",
      ],
      choices: [{ label: "Attendre le jour", fx: { flag: "cormorane:reprise" }, to: "A4o_fin" }] },
    A4o_echoue: { act: "IV", title: "La vase", place: "crique", ambiance: "nuit",
      text: [
        "Tu tournes trop tôt. La quille rencontre le banc de vase de l'entrée, monte dessus, glisse, s'arrête. La Cormorane se couche sur le flanc, doucement, avec un gémissement immense.",
        "À l'aube, elle est là, échouée à l'entrée de la crique, à moitié cachée par les palétuviers, inclinée comme une vieille femme qui s'est assise par terre. À marée basse, elle est à sec. Personne ne pourra la prendre, ni les mutins, ni le brigantin. Personne ne pourra non plus la faire partir avant la grande marée.",
        "Tu as volé un navire. Tu l'as posé dans la vase. C'est déjà beaucoup.",
      ],
      choices: [{ label: "Attendre le jour", fx: { flag: ["cormorane:reprise", "cormorane:echouee"] }, to: "A4o_fin" }] },
    A4o_poudre: { act: "IV", title: "La soute à poudre", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu descends l'échelle de l'entrepont, puis celle du faux-pont, dans le noir, à tâtons, jusqu'à la petite porte doublée de cuivre de la soute à poudre, à l'arrière, sous la grand-chambre. Elle n'est pas fermée. Personne ne ferme plus rien, à bord.",
        "Dedans, dans l'odeur de soufre et de salpêtre, les barils. Vingt, trente. Assez pour envoyer la Cormorane rejoindre le Saint-Fiacre au fond des mers, avec tous ceux qui sont dessus.",
        "Tu as le briquet. Ou de l'amadou, ou une lanterne, au pied de l'échelle. Il suffirait d'une traînée de poudre jusqu'à l'échelle, et de courir.",
        { if: { has: "vauclair:gris" }, text: "Au-dessus de toi, sur le pont, Monsieur Gris chantonne. Il sait où tu es allé{e}. Il ne vient pas. Il attend la suite, comme au théâtre." },
        "Quatre hommes dorment sur le pont. Ce sont des mutins. Ce sont aussi Boucaut, qui pleure quand il a peur, et deux autres dont tu ne sais pas le nom.",
      ],
      choices: [
        { label: "Faire la traînée, réveiller les dormeurs en criant au feu, et sauter", fx: { flag: ["cormorane:sabotee", "mousse:feu"] }, to: "A4o_explosion" },
        { label: "Remonter, et couper le câble plutôt", to: "A4o_cable" },
      ] },
    A4o_explosion: { act: "IV", title: "Le feu", place: "anse_morte", ambiance: "nuit",
      text: [
        "Tu verses la poudre d'un baril en traînée, de la soute à l'échelle, puis le long de l'entrepont. Tu remontes. Tu cries « Au feu ! Au feu ! À la mer ! » de toute ta voix, en courant sur le pont, en secouant les dormeurs. Ils se réveillent, ils te voient, ils ne comprennent pas, ils voient la lueur qui monte de l'écoutille, ils comprennent. Ils sautent.",
        "Tu sautes.",
        "Tu es à vingt brasses quand la Cormorane explose.",
        "Ce n'est pas un bruit. C'est un coup de poing dans toute l'île à la fois. La mer se soulève sous toi, te jette, te roule. Le ciel devient blanc, puis rouge. Des morceaux de navire passent au-dessus de toi en sifflant, des vergues, des planches, des tonneaux en flammes, qui retombent dans l'anse en grêle de feu. Les palétuviers s'embrasent sur la pointe. Les perroquets crient dans toute la forêt.",
        "Quand tu rouvres les yeux, il n'y a plus, à la place de la Cormorane, qu'une fumée immense, rougeoyante, et des débris qui brûlent sur l'eau, et le brigantin, qui a coupé son câble et s'éloigne à toute vitesse vers l'entrée de la baie.",
        "Tu nages vers la rive. Tu as dans les oreilles un sifflement qui ne partira pas avant des jours. Tu ne sais pas si les quatre dormeurs ont nagé assez vite. Tu ne le sauras jamais.",
      ],
      choices: [{ label: "Atteindre la rive", to: "A4o_fin" }] },
    A4o_fin: { act: "IV", title: "Le matin", place: "crique", ambiance: "nature",
      text: [
        "Au matin, tu dors. Tu dors comme on dort après une nuit pareille, d'un sommeil sans rêve, sur le pont d'un navire ou dans le sable d'une rive, avec du sel séché sur la peau.",
        { if: { has: "cormorane:sabotee" }, text: "Il n'y a plus de navire dans l'anse. Il n'y en a plus qu'un sur toute l'île, le brigantin du Chevalier, qui est revenu mouiller à l'entrée de la baie, prudemment, loin des débris. Ceux qui voudront rentrer chez eux devront s'entendre avec lui, ou attendre le prochain navire qui passera, dans un an, dans dix, jamais." },
        { if: { any: [{ has: "cormorane:reprise" }, { has: "cormorane:cachee" }] }, text: "La Cormorane est dans la crique, sous les palétuviers. On ne la voit pas depuis l'anse. Elle attend. C'est la seule porte de sortie de l'île qui ne soit à personne d'autre que vous." },
        { if: { has: "cormorane:echouee" }, text: "La Cormorane est couchée sur la vase, à l'entrée de la crique. Il faudra six jours et une grande marée pour la remettre à flot. D'ici là, elle n'est à personne." },
        { if: { has: "dagrel:aide_navire" }, text: "Le vieil homme est reparti dans la forêt sans dire au revoir. Il a laissé, sur le pont, son tricorne sans bord, posé sur la roue, comme un homme qui va revenir." },
      ],
      choices: [{ label: "La nuit des trois pavillons", to: "C4c_fin" }] },
  },
  extras: {},
};
