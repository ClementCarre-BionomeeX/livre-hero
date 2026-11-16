// Les Fils de la Marée · act I, the evening: Oriane Valcor at the Palais des Lanternes, the first session of the
// Council. She reads the echoes of the morning (Sévan's report, Nella taken or gone, the barge attacked, Bas-Port on the
// dyke) and makes the choice that sends her act II to one of three books: Morvan's pact (oriane=pacte, and maybe her
// silver key in his hands: clef1), her own candidacy (seule), or the inquiry with the Guet (enquete).
var LIBRE = { has: "nella=libre" }, PRISON = { has: "nella=prison" };
var R = function (v) { return { is: { rapport: v } }; };
module.exports = {
  O1_bureau: { act: "I", title: "Le cabinet de la Doyenne", place: "palais", ambiance: "chateau",
    fx: { meet: "renaud" },
    text: [
      "Tu as passé la journée dans le cabinet d'Ermesinde, porte fermée, à faire ce que tu fais depuis douze ans : trier. Les lettres à répondre, les lettres à brûler, les lettres à garder. Trois tas sur la table, et le troisième est toujours le plus mince. Ta tante est morte cette nuit ; le courrier continue d'arriver à la même cadence, avec des condoléances en tête et la même demande en bas de page.",
      "Tu as trente-quatre ans. Tu es sa nièce, la fille de son frère mort, et sa secrétaire. Tu as écrit sous sa dictée quelque vingt mille lettres, à raison de cinq par jour ouvrable. Tu connais sa façon de raturer, ses tics de syntaxe, les mots qu'elle bannissait. Personne ne la connaissait mieux que toi. Entre vous deux, le mot « aimer » est resté au fond de l'encrier, des deux côtés.",
      "La clef d'argent du coffre pend à une chaîne sous ton col. Tu la sens chaque fois que tu te penches sur la table.",
      "Cinq heures sonnent. La porte s'ouvre sans qu'on frappe : c'est Renaud, ton mari, en habit de conseiller, le sourire déjà en place. « Morvan t'attend dans la salle des Cartes. Avant la séance. Il dit que c'est important. »",
    ],
    choices: [
      { label: "Feuilleter d'abord le carnet de rendez-vous de la Doyenne", to: "O1_carnet", hide: { seen: "O1_carnet" } },
      { label: "Ouvrir le tiroir des lettres personnelles, celui qu'elle fermait à clef", to: "O1_tiroir", hide: { seen: "O1_tiroir" } },
      { label: "Demander à Renaud pourquoi il fait les commissions de Morvan", to: "O1_renaud", hide: { seen: "O1_renaud" } },
      { label: "Aller voir Morvan", to: "O1_morvan" },
    ] },
  O1_carnet: { act: "I", title: "Le carnet", place: "palais",
    fx: { clue: "agenda" },
    text: [
      "C'est un carnet de cuir rouge, couvert de l'écriture serrée d'Ermesinde : les audiences, les séances, les dîners. Tu remontes les pages vers l'automne, une semaine après l'autre.",
      "Il y a dix jours, entre une audience des verriers et un dîner avec le consul de Lisse : *Sévan — les ongles.* Et plus bas, d'une encre plus pâle : *N. — le ruban.*",
      "N. Le palais compte trois N. : un valet, une lingère, et la servante qui portait ses plateaux.",
    ],
    choices: [{ back: "O1_bureau" }] },
  O1_tiroir: { act: "I", title: "Le tiroir", place: "palais",
    fx: { clue: "tomas" },
    text: [
      "La clef du tiroir était dans la boîte à plumes, là où ta tante cachait toutes ses clefs avec la candeur des gens puissants. Dedans : des lettres de ton père, des lettres d'un poète mort, des comptes, et une liasse nouée d'un ruban bleu passé.",
      "Une vingtaine de lettres, vieilles de vingt ans. L'écriture d'une main qui a appris tard et qui appuie trop ; le papier en garde le relief au dos. Des fautes, beaucoup. *Je t'attendrai au ponton quand la lune sera grosse. Je t'apprendrai à nager pour de vrai.* Une seule lettre en guise de signature : *T.*",
      "Tu découvres ta tante à trente ans, amoureuse d'un homme qui écrivait « nagé » avec un accent. L'image refuse de se fixer. Tu remets la liasse dans le tiroir et tu refermes à clef.",
    ],
    choices: [{ back: "O1_bureau" }] },
  O1_renaud: { act: "I", title: "Renaud", place: "palais",
    text: [
      "Renaud de Querelle est beau, aimable, et conseiller des Lanternes par héritage : trois qualités qui dispensent d'ordinaire d'en acquérir une quatrième. Vous êtes mariés depuis neuf ans. Il te fait rire quand il est heureux. Depuis un an, il dort mal.",
      "« Je ne fais les commissions de personne. Morvan m'a croisé dans la galerie, c'est tout. » Il ajuste ses manchettes. Il les ajuste toujours quand il ment.",
    ],
    choices: [
      { label: "« Combien lui dois-tu, Renaud ? »", test: { dom: "social", diff: 0, label: "Social" },
        win: { fx: { set: { renaud: "aveu" } }, to: "O1_renaud_aveu" }, lose: { fx: { set: { renaud: "ment" } }, to: "O1_renaud_ment" } },
      { label: "Le laisser à ses manchettes", fx: { set: { renaud: "ment" } }, back: "O1_bureau" },
    ] },
  O1_renaud_aveu: { act: "I", title: "Trois mille ducats", place: "palais",
    text: [
      "Il tarde à répondre. Puis il s'assied sur le bord de la table, comme un homme qui s'assied sur un banc après avoir couru. « Trois mille. Les navires de Lisse, l'an dernier. Deux ont coulé, le troisième a été pris. Morvan a racheté mes dettes à la banque. Il ne les réclame pas. Il ne les réclamera pas, tant que… » La phrase reste en l'air.",
      "Trois mille ducats. La maison du quai des Saules en vaut deux mille. Tu fais le calcul sans le vouloir, par métier, et il tombe juste.",
      "« Je ne t'ai rien dit parce que j'avais honte, Oriane. Et parce que tu l'aurais dit à ta tante. »",
    ],
    choices: [{ back: "O1_bureau" }] },
  O1_renaud_ment: { act: "I", title: "Les manchettes", place: "palais",
    text: [
      "Il rit. « Rien du tout. Qu'est-ce que tu vas chercher ? » Il t'embrasse sur le front, du baiser qui clôt une conversation, et s'en va vers la salle du Conseil.",
    ],
    choices: [{ back: "O1_bureau" }] },

  O1_morvan: { act: "I", title: "La salle des Cartes", place: "palais",
    fx: { meet: "morvan" },
    text: [
      "La salle des Cartes est une longue pièce dont les murs portent la lagune entière : chaque île, chaque canal, chaque banc de sable, peints il y a deux cents ans et restés tels depuis. Trois bancs ont disparu depuis sous la marée, et deux autres sont nés, que la carte ignore ; le Conseil gouverne d'après la carte, ce qui explique bien des naufrages. Hugues Morvan se tient devant la carte des Passes, les mains dans le dos.",
      "« Madame. Mes condoléances. Vraiment. » Il le dit bien ; Morvan sait dire les choses. « Je vais être bref, parce que nous avons peu de temps. Le Conseil élira quelqu'un dans deux nuits. Si c'est moi, la moitié de la ville me haïra. Si c'est le père Anselme, nous serons gouvernés par des sermons. Si c'est vous, la ville pleurera sa Doyenne en applaudissant sa nièce. »",
      "« Mes quatorze sièges sont à vous. Avec vos amis des vieilles maisons, vous passez au premier tour. En échange, deux petites choses. Le coffre reste fermé jusqu'après les lanternes : les testaments de mourants sont des humeurs, et la ville n'a pas besoin d'humeurs cette semaine. Et vous me confiez votre clef, en gage, jusqu'à l'élection. »",
    ],
    choices: [
      { label: "« Pourquoi tenez-vous tant à ce que le coffre reste fermé ? »", to: "O1_morvan_coffre", hide: { seen: "O1_morvan_coffre" } },
      { label: "« Et après l'élection, que voudrez-vous ? »", to: "O1_morvan_apres", hide: { seen: "O1_morvan_apres" } },
      { label: "« Je vous répondrai en séance. »", to: "O1_seance" },
    ] },
  O1_morvan_coffre: { act: "I", title: "Les humeurs", place: "palais",
    text: [
      "« Parce que je connaissais votre tante. » Il se retourne vers la carte. « Ces derniers mois, elle n'était plus elle-même. Elle parlait de donner le sel aux barques, d'ouvrir le Conseil aux poissonniers. Elle avait peur, et la peur fait écrire des choses. Je ne veux pas qu'on lise devant quarante personnes ce qu'une malade a écrit un soir de fièvre. Pour elle. Pour sa mémoire. »",
      "De ta vie, tu as entendu Hugues Morvan parler de prix, de tonnages et de droits de passe. La mémoire de quelqu'un, c'est la première fois.",
    ],
    choices: [{ back: "O1_morvan" }] },
  O1_morvan_apres: { act: "I", title: "Après", place: "palais",
    text: [
      "Il sourit. « Après ? Rien. Que vous gouverniez bien. Que la Maison des Sels ait sa place, comme toujours. Et que vous écoutiez mes conseils sur la mer. » Il pose un doigt sur la carte, sur les Passes, là où la chaîne est peinte en noir. « Orcanne est une grande puissance, madame. On ne la reçoit pas en lui fermant la porte au nez. »",
    ],
    choices: [{ back: "O1_morvan" }] },

  // ---------------------------------------------------------------- the session
  O1_seance: { act: "I", title: "Le Conseil des Lanternes", place: "palais",
    fx: { meet: ["helis", "anselme", "ysabeau"], until: 19 },
    text: [
      "La salle du Conseil est ronde, sous une coupole de verre où le soir met un ciel couleur d'encre. Quarante fauteuils s'étagent en gradins, chacun avec sa lanterne éteinte, qu'on allumera la troisième nuit. Au centre, le fauteuil de la Doyenne reste vide, un crêpe noir sur le dossier ; quarante regards l'évitent avec soin et y reviennent sans cesse. Tu es assise au premier rang, à ta place de secrétaire, la plume à la main, comme toujours.",
      "Dame Hélis Arnaud préside. Elle a soixante-quinze ans, des tresses blanches, et une voix qui reste basse et qu'on entend jusqu'au dernier rang ; elle sait le règlement comme d'autres savent leurs péchés, et le cite plus volontiers. Elle ouvre la séance par le règlement : le siège est vide ; on élira la troisième nuit, avant le reflux ; et la loi veut que le testament d'un Doyen soit lu avant les lanternes, tiré du coffre aux trois serrures.",
      "Puis on lit le rapport du médecin.",
      { if: R("naturelle"), text: "Ysabeau Dorne le lit d'une voix neutre. *Morte de la maladie de langueur qui la minait depuis l'automne. Dans le sommeil, sans souffrance.* Un murmure de soulagement. Au troisième rang, Morvan fronce les sourcils, un seul instant. Tu le vois parce que tu regardes toujours les gens qui écoutent." },
      { if: R("poison"), text: "Ysabeau Dorne le lit d'une voix neutre. *Empoisonnée. Une poudre d'arsenic, chaque jour, depuis l'automne, dans ce qu'elle mangeait.* La salle se lève à moitié. Puis la capitaine annonce que la servante qui portait les plateaux a été arrêtée, et la salle se rassoit, comme une marmite dont on remet le couvercle." },
      { if: R("temple"), text: "C'est le père Anselme qui se lève. *Le Temple de la Marée a recueilli le témoignage de son médecin. La Doyenne a été rappelée à la Marée. Les causes de sa mort seront dites en temps voulu, quand le Temple aura achevé son examen.* Hélis Arnaud demande où est le médecin. « En retraite, dans nos murs. Il prie. » Tu notes : *en retraite*. Tu notes aussi le sourire d'Anselme quand il se rassoit." },
      { if: R("public"), text: "Ysabeau Dorne le lit debout, et la coupole elle-même semble retenir son souffle. *Empoisonnée, depuis l'automne, par une poudre d'arsenic dans son sel.* Puis : *Cette nuit, à sa demande, la Doyenne a reçu de moi une dose de lait de pavot dont elle ne s'est pas réveillée.* Quelqu'un crie « Assassin ! » au fond. La capitaine annonce que maître Aldric est à la Tour du Guet et qu'il s'est livré lui-même. Morvan se tait. Il regarde ses mains." },
      { if: { all: [PRISON, { not: R("poison") }] }, text: "La capitaine ajoute qu'une servante, Nella Ferrant, est retenue à la Tour du Guet pour ses réponses : elle portait le sel." },
      { if: { all: [LIBRE, { has: "canal:attaque" }] }, text: "La capitaine ajoute, les mâchoires serrées, que la servante qui portait le sel a été arrachée à la barque de la prison, à une heure, sous le pont des Sels, par des gens de Bas-Port. Deux gardes sont blessés. La salle gronde. Morvan dit : « Voilà ce que nous coûte la faiblesse. »" },
      { if: { all: [LIBRE, { not: { has: "canal:attaque" } }] }, text: "La capitaine ajoute que la servante qui portait le sel s'est enfuie du palais ce matin, avant qu'on l'interroge. « Une innocente ne s'enfuit pas », dit Morvan, doucement. La salle hoche la tête." },
      { if: { has: "basport=agite" }, text: "Par les hautes fenêtres monte un bruit d'eau et de voix. Un huissier vient parler à l'oreille de la capitaine : deux cents barques de Bas-Port, lanternes allumées, sont amarrées devant la digue des Pendus." },
    ],
    choices: [{ label: "Écouter la question des clefs", to: "O1_clefs" }] },
  O1_clefs: { act: "I", title: "Les trois clefs", place: "palais",
    text: [
      "« Qui tient les clefs du coffre ? » demande Hélis Arnaud.",
      "Tu te lèves. « La clef d'argent est à moi, comme secrétaire. » Tu sors la chaîne de ton col et tu la montres. Quarante paires d'yeux suivent la clef dans la lumière.",
      { if: { not: R("public") }, text: "Le père Anselme se lève à son tour. « La clef de fer est au Temple de la Marée depuis cent ans. »" },
      { if: { all: [{ not: R("public") }, { not: R("temple") }] }, text: "Dans le silence qui suit, quelqu'un tousse. Un conseiller des verriers rappelle, d'une voix timide, que la Doyenne a fait retirer la clef du tabernacle à la Saint-Martin. Anselme se rassoit sans répondre. La salle se demande où est la clef. Toi, tu penses à une ligne d'un carnet : *Sévan — les ongles.*" },
      { if: R("temple"), text: "Anselme tait qu'elle est dans la poche d'un médecin en retraite. Il tait tout, et il sourit." },
      { if: R("public"), text: "Ysabeau Dorne prend la parole avant lui : « La clef de fer est au Guet, sous scellés. Maître Aldric la portait. La Doyenne la lui avait confiée. » Le visage d'Anselme reste immobile. Ses mains, elles, se crispent." },
      "« Et la clef de bronze ? »",
      "Morvan se lève lentement. « La clef de bronze, dame présidente, était portée par la Doyenne à son cou, depuis toujours. On ne l'a pas retrouvée sur son corps. » Il laisse passer un temps. « On ne l'a pas retrouvée non plus dans la chambre de la servante qui la servait. »",
      "C'est faux. Ta tante portait au cou une croix de nacre, et rien d'autre. Tu as fait sa toilette de ville cent fois. Tu le sais, Morvan sait que tu le sais, et il te regarde en le disant.",
      "Hélis Arnaud se tourne vers toi. « Madame la secrétaire. Vous étiez la plus proche de la Doyenne. Le Conseil vous écoute. »",
    ],
    choices: [
      { label: "Annoncer que tu te présentes au siège, avec le soutien de la Maison des Sels, et que le coffre attendra l'élection", to: "O1_pacte", fx: { set: { oriane: "pacte" } }, big: true },
      { label: "Annoncer que tu te présentes au siège, seule, et que le coffre sera ouvert avant les lanternes comme le veut la loi", to: "O1_seule", fx: { set: { oriane: "seule" } }, big: true },
      { label: "Refuser de te présenter, et demander une enquête du Guet sur la mort de la Doyenne", to: "O1_enquete", fx: { set: { oriane: "enquete" } }, big: true },
    ] },

  O1_pacte: { act: "I", title: "La Maison des Sels", place: "palais",
    fx: { regard: { morvan: "allie", helis: "distant" }, clock: { voix: 14 } },
    text: [
      "Tu annonces ta candidature. Tu dis que la ville a besoin de continuité, et que la Maison des Sels t'a fait l'honneur de son soutien. Tu dis que le coffre sera ouvert, bien sûr, après les lanternes, quand la ville aura retrouvé son calme.",
      "Les quatorze sièges de Morvan applaudissent ensemble, comme une seule main ; c'est du reste ce qu'ils sont. Les vieilles maisons hésitent, puis applaudissent aussi, plus mollement. Hélis Arnaud te regarde longtemps par-dessus ses lunettes et note quelque chose.",
      "Après la séance, dans la galerie, Morvan te rejoint. « Bien parlé. » Il tend la main, paume ouverte. « La clef, madame. Comme convenu. »",
    ],
    choices: [
      { label: "Lui donner la clef d'argent", fx: { drop: "clef_argent", set: { clef1: "morvan" }, regard: { morvan: "cordial" } }, to: "O1_pacte_clef" },
      { label: "« Je la garde. Vous avez ma parole ; elle vaut une clef. »", fx: { set: { clef1: "oriane" }, regard: { morvan: "mefiant" } }, to: "O1_pacte_parole" },
    ] },
  O1_pacte_clef: { act: "I", title: "La clef d'argent", place: "palais",
    text: [
      "Tu détaches la chaîne. La clef est tiède de ta peau. Morvan la soupèse, la glisse dans son gilet et te baise la main.",
      "« Vous ne le regretterez pas. »",
      "Ton cou est léger. Tu as porté cette clef douze ans, et ta nuque en garde la marque, une petite ligne rouge que tu sens encore.",
    ],
    choices: [{ label: "Quitter la galerie", to: "O1_nuit" }] },
  O1_pacte_parole: { act: "I", title: "Une parole", place: "palais",
    text: [
      "Morvan retire sa main, sans hâte. « Votre parole. » Il sourit. « Votre tante aussi avait une parole. » Il s'incline. « Gardez votre clef, madame. Gardez-la bien. »",
      "Il s'en va. Derrière toi, Renaud a pâli.",
    ],
    choices: [{ label: "Quitter la galerie", to: "O1_nuit" }] },

  O1_seule: { act: "I", title: "Seule", place: "palais",
    fx: { regard: { morvan: "hostile", helis: "curieux" }, clock: { voix: 8 } },
    text: [
      "Tu annonces ta candidature. Tu dis que tu te présentes seule, et que tu demanderas des soutiens après avoir lu, avec eux, ce que la Doyenne a laissé. Le coffre s'ouvrira avant les lanternes. C'est la loi. Tu la cites de mémoire, article et alinéa.",
      "Un silence. Puis huit fauteuils applaudissent : les vieilles maisons qui ont connu ton père. Les quatorze de Morvan croisent les bras. Le Temple attend de voir d'où souffle le vent, exercice où il a une longue pratique.",
      "Huit voix. Il en faut vingt et une. Tu as deux jours, et tu sais compter.",
      "Dans la galerie, après la séance, Morvan passe près de toi sans s'arrêter. « Dommage », dit-il, à la cantonade.",
    ],
    choices: [{ label: "Quitter la galerie", to: "O1_nuit" }] },

  O1_enquete: { act: "I", title: "L'enquête", place: "palais",
    fx: { regard: { morvan: "mefiant", ysabeau: "cordial", helis: "admiratif" } },
    text: [
      "Tu annonces que tu attendras pour te présenter : d'abord savoir comment ta tante est morte. Tu demandes au Conseil d'ordonner une enquête du Guet, avec pouvoir d'entrer partout, au palais, au Temple, à la Maison des Sels. Tu demandes que le coffre soit ouvert avant les lanternes, avec ses trois clefs, comme le veut la loi.",
      "Hélis Arnaud met la motion aux voix sur-le-champ, pendant que Morvan est encore à mi-chemin de se lever. Vingt-trois mains. L'enquête est ordonnée. La capitaine Dorne la conduira.",
      "Morvan applaudit poliment, trois fois. Il est le seul à applaudir une motion contre laquelle il a voté.",
      "Dans la galerie, Ysabeau Dorne vient vers toi. « Madame. Vous m'avez donné du travail. » Elle hésite. « Demain matin, à la Tour. J'aurai des questions à vous poser. Et vous en aurez peut-être à me poser aussi. »",
    ],
    choices: [{ label: "Quitter la galerie", to: "O1_nuit" }] },

  // ---------------------------------------------------------------- the night
  O1_nuit: { act: "I", title: "Onze heures", place: "palais", fx: { until: 23 },
    text: [
      "La séance est levée à dix heures et demie. Les conseillers rentrent chez eux en barque, sous les lanternes de la fête, chacun avec son rameur, son manteau et son opinion de rechange. La musique de Bas-Port arrive par bouffées sur l'eau.",
      { if: { has: "basport=agite" }, text: "Du côté de la digue des Pendus brille une ligne de lumières immobiles : les barques de Bas-Port, à l'ancre, qui attendent. Elles attendent en silence, et ce silence de deux cents barques s'entend de plus loin que la musique." },
      "Tu as la fatigue d'une nuit blanche, et c'est la deuxième.",
    ],
    choices: [
      { label: "Aller à la Tour du Guet voir la servante, Nella Ferrant", if: PRISON, to: "O1_tour", big: true },
      { label: "Rentrer au quai des Saules, avec Renaud", to: "O1_saules" },
    ] },
  O1_tour: { act: "I", title: "La cellule", place: "tour",
    fx: { meet: "nella" },
    text: [
      "La capitaine Dorne te laisse entrer parce que tu es la secrétaire de la Doyenne et qu'il est trop tard pour discuter. L'escalier de la Tour tourne sur lui-même entre deux murs qui suintent ; à chaque palier, une porte ferrée, et derrière chaque porte, quelqu'un qui écoute monter ton pas. La cellule est au deuxième étage, propre, avec une fenêtre sur la lagune. Nella est assise sur le lit, les genoux contre la poitrine.",
      "Elle se lève quand tu entres. Elle te connaît : elle a servi ton thé cent fois, et pendant ces cent fois tu as regardé ta tasse.",
      "Tu la regardes maintenant. Dix-neuf ans, des tresses noires, des taches de son. Des yeux gris, très clairs, qui soutiennent les tiens. Tu as vu ce gris-là toute ta vie, chaque matin, au-dessus d'une table de travail.",
    ],
    choices: [
      { label: "« N. — le ruban. Elle t'a donné un ruban. Qu'y avait-il dedans ? »", if: { clue: "agenda" }, why: "Il faudrait savoir de quoi parler.", to: "O1_tour_ruban" },
      { label: "« As-tu tué ma tante ? »", to: "O1_tour_question" },
    ] },
  O1_tour_ruban: { act: "I", title: "Le ruban", place: "tour",
    fx: { flag: "oriane:sait_ruban", regard: { nella: "curieux" } },
    text: [
      "Nella pâlit. Elle regarde la porte, puis toi. « Une clef. Cousue. Elle m'a dit de la porter au Conseil le jour de sa mort. Je ne savais pas ce que c'était. »",
      "« Où est-elle ? »",
      "Nella se tait. Elle te regarde comme on éprouve une marche pourrie, avant d'y mettre son poids. Puis : « Chez quelqu'un qui me la gardera. Pas chez vous, madame. Je ne vous connais pas. »",
      "C'est juste. Elle ne te connaît pas, et tu ne la connais pas davantage.",
    ],
    choices: [{ label: "Partir", to: "O1_saules" }] },
  O1_tour_question: { act: "I", title: "La question", place: "tour",
    text: [
      "« Non. » Elle le dit sans hausser la voix. « Elle me lisait des vers, le soir. Elle me reprenait sur ma façon de tenir la tasse. Je ne l'ai pas tuée. »",
      "Elle hésite. « L'apothicaire de la Maison des Sels était dans la cuisine, à onze heures, la nuit où elle est morte. Je l'ai dit à la capitaine. Elle l'a écrit. Elle ne m'a pas crue, je crois. »",
    ],
    choices: [{ label: "Partir", fx: { clue: "leonce_cuisine" }, to: "O1_saules" }] },
  O1_saules: { act: "I", title: "Le quai des Saules", place: "saules",
    text: [
      "La maison du quai des Saules est fraîche et sombre, avec son jardin clos et son vieux saule qui trempe ses branches dans le canal. Ta tante y est née. Tu y vis depuis ton mariage ; et ce soir, pour la première fois, chaque marche de l'escalier craque comme sous un pas qui précéderait le tien.",
      { if: { has: "renaud=aveu" }, text: "Renaud t'attend dans la chambre, assis sur le lit, en chemise. Il se tait ; toi aussi. Tu t'allonges à côté de lui. Il prend ta main dans le noir, et vous restez ainsi, avec trois mille ducats entre vous." },
      { if: { not: { has: "renaud=aveu" } }, text: "Renaud dort déjà, ou fait semblant. Il a laissé sa veste sur une chaise. En la rangeant, tu sens dans la poche un papier plié. Tu le remets tel quel." },
      { if: { has: "clef1=morvan" }, text: "Tu passes la main à ton cou, par habitude. Tes doigts trouvent la peau nue." },
      { if: { has: "clef1=oriane" }, text: "Tu glisses la clef d'argent sous ton oreiller, comme une petite fille, et tu t'en veux de le faire." },
      "Demain, c'est le jour des masques. Toute la ville sera déguisée. Toi aussi.",
    ],
    choices: [{ label: "Dormir", to: "C2", big: true }] },
};
