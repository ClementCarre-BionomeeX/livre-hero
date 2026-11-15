// Les Fils de la Marée · act III, Oriane's night, at the palace from eight to eleven. Her pact with Morvan (oriane=pacte),
// broken (rompu), or her own road (seule, enquete) decides the start; the poison of the ball may still be in her blood.
// Then three things before eleven (clock o3): Renaud (the silver key back from Morvan: clef1=oriane), Morvan (the pact
// kept, broken, or turned against him with Drenn's letter), the Grand Priest (anselme=ouvre | retire), the President of
// the Council (helis=allie), the captain of the Guet (ysabeau=allie, the chain guarded). Midnight decides the rest.
var PACTE = { has: "oriane=pacte" };
var FIN = { label: "Fin de la nuit d'Oriane", fx: { flag: "ch3:oriane" }, back: "C3" };
var MORVAN_CLEF = { any: [{ has: "clef1=morvan" }, { has: "clef3=morvan" }] };
module.exports = {
  O3: { branch: [
    { if: { has: "oriane_malade=oui" }, fx: { until: 19 }, to: "O3_malade" },
    { if: PACTE, fx: { until: 19 }, to: "O3_pacte" },
    { fx: { until: 19 }, to: "O3_seule" },
  ] },

  // ================================================================ openings
  O3_malade: { act: "III", title: "Le vin d'orange", place: "saules", ambiance: "ville",
    fx: { pv: -3 },
    text: [
      "Tu te réveilles à sept heures du soir, dans ton lit des Saules, avec un goût de cuivre dans la bouche. Tu as dormi toute la journée. Ta femme de chambre dit que tu as parlé en dormant : de sel, de ta tante, et d'une chaîne.",
      "Tes mains sont froides. À la base de chaque ongle court une petite ligne blanche, très fine. Tu la regardes longtemps à la lumière de la lanterne.",
      "Tu t'habilles quand même. Ce soir, on vote.",
    ],
    choices: [{ label: "Faire préparer la barque", to: "O3_arrivee" }] },
  O3_pacte: { act: "III", title: "Quatorze voix", place: "saules", ambiance: "ville",
    text: [
      "À sept heures, un valet de la Maison des Sels t'apporte une boîte de velours. Dedans, un collier de perles d'eau douce, quarante-deux perles d'un blanc un peu gris, et un billet : *Pour la future Doyenne. Le Conseil aime les femmes qui brillent. M.*",
      "Tu as quatorze voix dans la manche de Morvan, et ce que tu lui as donné pour les avoir.",
      { if: { has: "chaine_ordre=signe" }, text: "Tu as signé un ordre. Il est dans la poche de Morvan. À minuit, ou à une heure, on le portera à la tour de la Chaîne." },
      { if: { has: "chaine_ordre=faux" }, text: "Tu as signé un ordre du nom de ton mari, avec un sceau posé à l'envers. Il est dans la poche de Morvan, et il vaut exactement le prix du papier. Morvan l'ignore encore." },
      "Tu mets le collier. Puis tu l'enlèves. Puis tu le remets.",
    ],
    choices: [{ label: "Faire préparer la barque", to: "O3_arrivee" }] },
  O3_seule: { act: "III", title: "La liste", place: "saules", ambiance: "ville",
    text: [
      "À sept heures, tu refais ta liste, à ton écritoire. Quarante sièges, vingt et une voix.",
      { if: { clock: "voix", min: 15 }, text: "Tu en comptes quinze, peut-être seize. C'est plus que tu n'espérais, et moins qu'il n'en faut." },
      { if: { clock: "voix", max: 14 }, text: "Tu en comptes peu : assez pour qu'on t'écoute, trop peu pour qu'on te choisisse." },
      { if: { has: "oriane=rompu" }, text: "Morvan t'a retiré ses quatorze voix hier soir. En les perdant, tu as découvert leur poids. Tu as découvert aussi que tu dormais mieux." },
      { if: { has: "oriane=enquete" }, text: "Hier, tu as passé ta journée à chercher un empoisonneur plutôt que des voix. Tu l'as fait de bon cœur. Reste à savoir si c'était sage." },
      { if: { has: "oriane:coupe_evitee" }, text: "Hier, au bal, un serviteur t'a tendu une coupe de vin d'orange, et tu l'as reposée. Ce soir, tu as glissé dans ta manche une gourde d'eau de ta propre cuisine." },
      { if: { has: "oriane:brule_lettres" }, text: "Dans la cheminée de ton bureau reste la cendre des lettres de Tomas Gouge. Tu les as lues avant de les brûler, et tu t'en souviens mot pour mot." },
      { if: { item: "lettres_tomas" }, text: "Dans ton corsage, la liasse des lettres de Tomas Gouge. Lues à voix haute, elles changeraient les votes." },
    ],
    choices: [{ label: "Faire préparer la barque", to: "O3_arrivee" }] },
  O3_arrivee: { act: "III", title: "Le palais aux lanternes", place: "palais", ambiance: "chateau",
    text: [
      "À sept heures, ta barque accoste aux marches du palais. L'eau couvre la deuxième. Les conseillers arrivent déjà, les chausses retroussées, en se plaignant de la marée comme chaque année, avec les mêmes mots que l'an dernier.",
      "Tu es la secrétaire du Conseil. Tu as la clef de la Chambre des Sceaux, l'ordre du jour, et le droit d'aller partout. Pendant quatre heures, tout le palais passe par toi.",
      { if: { has: "renaud=vole" }, text: "Renaud est dans la grande galerie, avec les clients de la Maison des Sels. Il évite ton regard depuis le matin. Tu sais pourquoi : tu as vu le tiroir vide." },
      { if: { has: "renaud=aveu" }, text: "Renaud t'attend au bas de l'escalier. Il t'a tout dit cette nuit : la dette, Morvan, la clef qu'on lui demandait. Il a le visage reposé d'un homme qui a dormi pour la première fois depuis un an." },
      { if: { has: "renaud=fidele" }, text: "Renaud t'offre son bras sur les marches. Il tait la nuit dernière. Ses yeux disent qu'il s'en souvient." },
    ],
    choices: [{ label: "Commencer", to: "O3_palais" }] },

  // ================================================================ three things before eleven
  O3_palais: { act: "III", title: "Le palais", hub: true, noLead: true, backName: "les galeries",
    text: [
      { first: true, text: "Les galeries du palais sont pleines de conseillers qui se parlent à l'oreille. On t'arrête toutes les trois marches. On te félicite, on te plaint, on te demande où tu en es. Tu as quatre heures." },
      { if: { clock: "o3", min: 1, max: 1 }, text: "Huit heures. Il te reste du temps pour trois choses." },
      { if: { clock: "o3", min: 2, max: 2 }, text: "Neuf heures. Il te reste du temps pour deux choses." },
      { if: { clock: "o3", min: 3, max: 3 }, text: "Dix heures. Il te reste le temps d'une chose." },
      { if: { has: "sevan:oriane3" }, text: "Le médecin est passé ce soir. Ce qu'il t'a dit est encore dans tes mains." },
      { if: { has: "leonce=temoin" }, text: "Un huissier te glisse à l'oreille qu'un apothicaire tremblant attend sur un banc de l'antichambre, gardé par un prêtre. Il demande à parler au Conseil." },
      { if: { has: "leonce=mort" }, text: "Un huissier t'apprend qu'on a retrouvé l'apothicaire de la Maison des Sels. Mort. Il le dit à voix basse, comme une affaire de famille." },
      { if: { has: "bp3=palais" }, text: "Par les grandes fenêtres, la lagune devant le palais se couvre de barques. Des centaines de lanternes, posées sur l'eau, immobiles. Les conseillers les regardent en silence." },
      { if: { has: "bp3=digue" }, text: "Par les grandes fenêtres, on voit une ligne de lanternes sur la digue, en face. Bas-Port est venu regarder, de loin." },
    ],
    choices: [
      { label: "Renaud", if: { not: { is: { renaud: null } } }, hide: { any: [{ has: "oriane:renaud3" }, { is: { renaud: null } }] }, to: "O3_renaud" },
      { label: "Morvan, dans le salon des Sels", hide: { has: "oriane:morvan3" }, to: "O3_morvan" },
      { label: "Le père Anselme", hide: { has: "oriane:anselme3" }, to: "O3_anselme" },
      { label: "Dame Hélis, la présidente", hide: { has: "oriane:helis3" }, to: "O3_helis" },
      { label: "La capitaine du Guet", hide: { has: "oriane:ysabeau3" }, to: "O3_ysabeau" },
    ] },
  O3_suite: { branch: [
    { if: { clock: "o3", min: 4 }, fx: { until: 23 }, to: "O3_fin" },
    { if: { clock: "o3", min: 3 }, fx: { until: 22 }, to: "O3_palais" },
    { if: { clock: "o3", min: 2 }, fx: { until: 21 }, to: "O3_palais" },
    { fx: { until: 20 }, to: "O3_palais" },
  ] },

  // ---------------------------------------------------------------- Renaud
  O3_renaud: { branch: [
    { if: { has: "renaud=vole" }, fx: { clock: { o3: 1 }, flag: "oriane:renaud3" }, to: "O3R_vole" },
    { fx: { clock: { o3: 1 }, flag: "oriane:renaud3" }, to: "O3R_fidele" },
  ] },
  O3R_vole: { act: "III", title: "La galerie", place: "palais",
    fx: { meet: "renaud" },
    text: [
      "Tu prends Renaud par le bras, au milieu des clients de la Maison des Sels, et tu l'emmènes dans l'embrasure d'une fenêtre. Il se laisse faire.",
      "« Je sais, Renaud. Le tiroir. La clef. »",
      "Il ferme les yeux. « Trois mille ducats, Oriane. Il avait mes billets. Il m'a dit que tu serais Doyenne de toute façon, que ça ne changeait rien. » Il ouvre les yeux. « Ça change tout, n'est-ce pas ? »",
    ],
    choices: [
      { label: "« Va la reprendre. Ce soir. Il te fait confiance. »", test: { dom: "social", diff: 0, label: "Social" },
        win: { fx: { set: { renaud: "rachete" } }, to: "O3R_reprend" }, lose: { to: "O3R_refuse" } },
      { label: "« Va-t'en. Je ne veux plus te voir ce soir. »", fx: { set: { renaud: "chasse" } }, to: "O3R_chasse" },
    ] },
  O3R_reprend: { act: "III", title: "Le salon des Sels", place: "palais",
    text: [
      "Renaud te regarde longtemps. Puis il redresse le dos, comme un homme qui se lève d'un banc après une longue attente.",
      "Il revient trois quarts d'heure plus tard, pâle, le pourpoint déchiré à l'épaule. Il te met dans la main une clef d'argent sur un ruban noir. « Il l'avait dans sa cassette. La cassette était dans le salon. Le salon était plein de monde. Je l'ai fait tomber. » Il rit. Ses mains tremblent. « Avant hier, je n'avais jamais rien volé de ma vie. Ça devient facile. »",
    ],
    choices: [{ label: "La garder contre toi", fx: { set: { clef1: "oriane" }, item: "clef_argent", regard: { renaud: "redevable" } }, to: "O3_suite" }] },
  O3R_refuse: { act: "III", title: "La fenêtre", place: "palais",
    text: [
      "« Je ne peux pas, Oriane. Il me tient. Il me tiendra toujours. » Il regarde la lagune. « Toi, il ne te tient pas. C'est ce que je n'ai jamais supporté. »",
      "Il retourne vers les clients de la Maison des Sels. Certains hommes restent hors d'atteinte, même quand on leur demande d'être braves.",
    ],
    choices: [{ label: "Le laisser", to: "O3_suite" }] },
  O3R_chasse: { act: "III", title: "Les marches", place: "palais",
    text: [
      "Renaud s'incline, très bas, comme devant une Doyenne. Puis il descend les marches du palais, dans l'eau jusqu'aux mollets, et prend une barque de louage.",
      "Où il va, tu découvres que tu préfères l'ignorer.",
    ],
    choices: [{ label: "Remonter", to: "O3_suite" }] },
  O3R_fidele: { act: "III", title: "L'escalier", place: "palais",
    fx: { meet: "renaud" },
    text: [
      "Renaud t'attend au bas de l'escalier d'honneur, appuyé à la rampe.",
      "« Dis-moi ce que je peux faire. Une seule chose. Je la ferai bien. »",
    ],
    choices: [
      { label: "« Garde la porte de la Chambre des Sceaux. Personne n'y entre avant minuit. »", fx: { set: { renaud3: "sceaux" } }, to: "O3R_porte" },
      { label: "« Va parler aux vieilles maisons. Ce sont tes cousins, pas les miens. »", test: { dom: "social", diff: 0, label: "Social" },
        win: { fx: { clock: { voix: 3 }, set: { renaud3: "voix" } }, to: "O3R_voix" }, lose: { to: "O3R_voix_rate" } },
    ] },
  O3R_porte: { act: "III", title: "La porte", place: "palais",
    text: [
      "Renaud s'installe sur une chaise devant la porte de la Chambre des Sceaux, son épée de parade sur les genoux. L'épée a une poignée dorée et une lame qui n'a jamais quitté son fourreau. Il a l'air ridicule et il le sait. Il reste.",
      "À dix heures, deux hommes de la Maison des Sels viennent demander à voir le coffre. Il leur répond que la secrétaire l'a interdit. Ils repartent. Il te le raconte ensuite avec une fierté d'enfant.",
    ],
    choices: [{ label: "Le remercier", to: "O3_suite" }] },
  O3R_voix: { act: "III", title: "Les cousins", place: "palais",
    text: [
      "Renaud revient au bout d'une heure, le rouge aux joues. « Les Ferrier, les Masquelier et la vieille Ondine. Trois. Je leur ai dit que tu étais la seule personne honnête de cette famille. » Il sourit. « Ils m'ont cru, puisque c'est moi qui le disais. »",
    ],
    choices: [{ label: "Le remercier", to: "O3_suite" }] },
  O3R_voix_rate: { act: "III", title: "Les cousins", place: "palais",
    text: [
      "Renaud revient au bout d'une heure, défait. « Ils savent pour mes dettes. Ils m'ont demandé si c'était Morvan qui m'envoyait. » Il s'assied. « Je t'ai fait perdre une heure. »",
    ],
    choices: [{ label: "Le rassurer", to: "O3_suite" }] },

  // ---------------------------------------------------------------- Morvan
  O3_morvan: { act: "III", title: "Le salon des Sels", place: "palais", ambiance: "chateau",
    fx: { meet: "morvan", clock: { o3: 1 }, flag: "oriane:morvan3" },
    text: [
      "Le salon des Sels est la pièce que la Maison loue au palais à l'année, pour ses clients. Morvan y reçoit debout, au milieu d'une cour de conseillers. Quand tu entres, la cour s'écarte, comme une eau.",
      { if: PACTE, text: "« Notre Doyenne. » Il te baise la main. Il remarque le collier. « Vous l'avez mis. » Il baisse la voix. « À minuit, vous ouvrirez le coffre. Vous lirez ce qu'il y a à lire. Ce qui ne doit pas être lu, vous me le donnerez. »" },
      { if: { not: PACTE }, text: "« Madame la secrétaire. » Il garde ses mains derrière le dos. « Vous avez encore deux heures pour revenir. Je suis un homme patient. Quatorze voix, toujours. Le prix a un peu monté. »" },
      { if: { has: "leonce=mort" }, text: "Il a l'air reposé. Très reposé : l'air d'un homme dont un souci s'est réglé ce soir." },
    ],
    choices: [
      { label: "« Je tiendrai parole. »", if: PACTE, hide: { not: PACTE }, fx: { set: { oriane3: "fidele" }, regard: { morvan: "allie" } }, to: "O3M_tient" },
      { label: "« Gardez vos voix. Le pacte est rompu. »", if: PACTE, hide: { not: PACTE }, fx: { set: { oriane: "rompu" }, clock: { voix: -14 }, regard: { morvan: "hostile" } }, to: "O3M_rompt", big: true },
      { label: "« Quel prix ? »", hide: PACTE, to: "O3M_prix" },
      { label: "Poser sur la table la lettre de l'amiral Drenn", if: { item: "lettre_drenn" }, why: "Il te faudrait une preuve de ce qu'il a promis à Orcanne.", to: "O3M_drenn", big: true },
    ] },
  O3M_tient: { act: "III", title: "Parole", place: "palais",
    text: [
      "Morvan sourit. « Je n'en ai jamais douté. Votre tante non plus ne revenait jamais sur sa parole. C'est ce qui la rendait si facile à prévoir. »",
      "Tu ressors du salon des Sels avec quatorze voix et l'impression d'avoir signé une deuxième fois.",
    ],
    choices: [{ label: "Sortir", to: "O3_suite" }] },
  O3M_rompt: { act: "III", title: "Le collier", place: "palais",
    text: [
      "Tu dégrafes le collier de perles et tu le poses sur la table, entre deux verres.",
      "Morvan le regarde. Puis il te regarde. Puis il dit, très doucement : « Vous ne comprenez pas ce que vous venez de faire, madame. Je vous protégeais. »",
      { if: { has: "chaine_ordre=signe" }, text: "Il tapote sa poche, à l'endroit où il garde l'ordre que tu as signé. « Et votre nom reste au bas de ceci. »" },
    ],
    choices: [{ label: "Sortir", to: "O3_suite" }] },
  O3M_prix: { act: "III", title: "Le prix", place: "palais",
    text: [
      "« Votre clef d'argent, à minuit, dans ma main. Un ordre pour la chaîne des Passes, signé de vous ce soir. Et vous lirez le testament seule, sans témoin, avant de le lire au Conseil. »",
      "Il te tend une plume, déjà trempée.",
    ],
    choices: [
      { label: "Accepter. Quatorze voix", fx: { set: { oriane: "pacte", oriane3: "fidele", chaine_ordre: "signe" }, clock: { voix: 14 }, regard: { morvan: "allie" } }, to: "O3M_signe", big: true },
      { label: "Refuser", to: "O3M_non" },
    ] },
  O3M_signe: { act: "III", title: "La plume", place: "palais",
    text: [
      "Tu signes. Ta signature est la même que d'habitude. Tu t'attendais à la voir trembler.",
      "Morvan plie l'ordre en quatre et le glisse dans sa poche. « Bienvenue, madame la Doyenne. »",
    ],
    choices: [{ label: "Sortir", to: "O3_suite" }] },
  O3M_non: { act: "III", title: "La plume", place: "palais",
    text: [
      "Tu reposes la plume dans l'encrier. Une goutte d'encre tombe sur la table, entre vous deux.",
      "« Alors à minuit, madame. » Morvan se tourne vers sa cour. La cour se referme.",
    ],
    choices: [{ label: "Sortir", to: "O3_suite" }] },
  O3M_drenn: { act: "III", title: "La lettre de l'amiral", place: "palais",
    text: [
      "Tu déplies la lettre sur la table, entre les verres, de sorte qu'il voie le sceau d'Orcanne et la signature, et que la cour ne voie rien.",
      "Morvan la lit à l'envers, sans y toucher. Il pâlit, à peine. À cinquante-huit ans, Hugues Morvan apprend à pâlir, et il n'est pas doué.",
      "« Que voulez-vous ? »",
    ],
    choices: [
      { label: "« Les clefs que vous tenez. Toutes. Ici. »", if: MORVAN_CLEF, why: "Il ne tient aucune clef du coffre.", test: { dom: "social", diff: 0, label: "Social" },
        win: { fx: { set: { morvan3: "cede" } }, to: "O3M_cles" }, lose: { fx: { set: { morvan3: "averti" } }, to: "O3M_rit" } },
      { label: "« Rien. Je voulais voir votre visage. Le Conseil le verra à minuit. »", fx: { set: { morvan3: "averti" }, clock: { preuves: 1 } }, to: "O3M_visage" },
    ] },
  O3M_cles: { act: "III", title: "La cassette", place: "palais",
    text: [
      "Morvan fait un signe à son secrétaire. On apporte la cassette. Il l'ouvre lui-même et pose sur la table, à côté de la lettre, ce qu'il gardait.",
      { if: { has: "clef1=morvan" }, text: "Ta clef d'argent, sur son ruban noir." },
      { if: { has: "clef3=morvan" }, text: "Un ruban de soie usé, lesté de quelque chose de lourd cousu dedans : la clef de bronze." },
      "« Et la lettre ? — La lettre reste avec moi. »",
      "Il hoche la tête. Il savait. Il voulait seulement l'entendre.",
    ],
    choices: [{ label: "Prendre les clefs, et sortir", fx: { set: { clef1: "oriane" } }, to: "O3M_cles_br" }] },
  O3M_cles_br: { branch: [
    { if: { has: "clef3=morvan" }, fx: { set: { clef3: "oriane" } }, to: "O3_suite" },
    { to: "O3_suite" },
  ] },
  O3M_rit: { act: "III", title: "Le rire", place: "palais",
    text: [
      "Morvan rit. Il replie lui-même la lettre et te la rend. « Un amiral étranger qui écrit des bêtises à un marchand. Le Conseil adore les bêtises, madame, mais pas celles-là. Ils ont tous une lettre de Drenn dans un tiroir. »",
      "Tu sors. Derrière toi, tu l'entends donner des ordres à voix basse.",
    ],
    choices: [{ label: "Sortir", to: "O3_suite" }] },
  O3M_visage: { act: "III", title: "Le visage", place: "palais",
    text: [
      "Tu reprends la lettre et tu la ranges. Tu le regardes encore un instant, comme on regarde un tableau dans un musée avant de passer au suivant.",
      "Puis tu sors du salon des Sels. Derrière toi, la cour tarde à se refermer.",
    ],
    choices: [{ label: "Sortir", to: "O3_suite" }] },

  // ---------------------------------------------------------------- the Grand Priest
  O3_anselme: { act: "III", title: "La sacristie", place: "palais", ambiance: "temple",
    fx: { meet: "anselme", clock: { o3: 1 }, flag: "oriane:anselme3" },
    text: [
      "Le Temple a sa sacristie au palais, une petite pièce verte où le Grand Prêtre se change avant les séances. Anselme est assis, la mitre sur les genoux, comme un homme qui attend son tour chez le barbier.",
      { if: { any: [{ has: "clef2=anselme" }, { has: "clef3=anselme" }] }, text: "« Madame. Vous venez pour la clef. » Il sourit. « Tout le monde vient pour ma clef, depuis hier. »" },
      { if: { has: "oriane:promet_temple" }, text: "« Vous m'avez promis hier ce que le Temple voulait. Je vous ai promis six voix. Nous verrons à minuit qui tient ses promesses. »" },
      { if: { has: "anselme:refus" }, text: "« Le médecin m'a refusé sa clef, hier, au nom de la Doyenne. Vous allez me refuser quelque chose aussi, je suppose, au nom de quelqu'un. »" },
      { if: { not: { any: [{ has: "clef2=anselme" }, { has: "clef3=anselme" }, { has: "oriane:promet_temple" }] } }, text: "« Madame. Six voix, c'est peu. Mais six voix, ce soir, font une Doyenne. Vous êtes venue les compter ? »" },
    ],
    choices: [
      { label: "« Ouvrez le coffre avec moi à minuit. En échange, si je perds, je vous donne mes voix. »", if: { any: [{ has: "clef2=anselme" }, { has: "clef3=anselme" }] }, why: "Il n'a aucune clef du coffre.",
        fx: { set: { anselme: "ouvre" }, flag: "oriane:promet_anselme", regard: { anselme: "cordial" } }, to: "O3A_ouvre", big: true },
      { label: "« Retirez-vous pour moi. Vous n'aurez jamais vingt et une voix. Moi, je peux les avoir. »", test: { dom: "social", diff: -10, label: "Social" },
        win: { fx: { set: { anselme: "retire" }, clock: { voix: 6 } }, to: "O3A_retire" }, lose: { to: "O3A_non" } },
      { label: "« Le Temple a enfermé un médecin pour lui faire dire ce qu'il voulait. Je le sais. Le Conseil le saura. »", if: { not: { is: { sevan_temple: null } } }, why: "Rien ne te permet de l'accuser de quoi que ce soit.",
        fx: { set: { anselme: "menace" }, regard: { anselme: "hostile" } }, to: "O3A_menace" },
    ] },
  O3A_ouvre: { act: "III", title: "L'accord", place: "palais",
    text: [
      "Anselme réfléchit le temps de tourner deux fois sa bague. « Le coffre ouvert. Le testament lu. Et si la Doyenne vous désigne, vous serez Doyenne et je me tairai. Si elle ne désigne personne, vous me soutiendrez. »",
      "Il tend la main. Tu la serres. Elle est sèche et chaude.",
      { if: { has: "sevan_temple=soumis" }, text: "« Je vais libérer le médecin, ajoute-t-il, puisque nous n'avons plus de secret à garder ensemble. »" },
    ],
    choices: [{ label: "Sortir", to: "O3_suite" }] },
  O3A_retire: { act: "III", title: "La mitre", place: "palais",
    text: [
      "Anselme te regarde longtemps. Puis il pose sa mitre sur la table, à côté de lui, comme un homme qui pose un sac trop lourd.",
      "« J'ai soixante-dix ans. J'ai voulu ce siège pendant trente. » Il soupire. « Le Temple votera pour vous. Mais vous direz, dans votre premier discours, que la Marée vous a guidée. — Je le dirai. »",
    ],
    choices: [{ label: "Sortir", to: "O3_suite" }] },
  O3A_non: { act: "III", title: "La mitre", place: "palais",
    text: [
      "Anselme remet sa mitre. « Vous me demandez de m'effacer devant une secrétaire de trente-quatre ans. » Il se lève. « Je vous demanderai la même chose à minuit, madame. Devant tout le monde. »",
    ],
    choices: [{ label: "Sortir", to: "O3_suite" }] },
  O3A_menace: { act: "III", title: "Le médecin", place: "palais",
    text: [
      "Anselme reste immobile. Il pose lentement ses mains sur sa mitre.",
      "« Le médecin a endormi votre tante, madame. Avec son pavot. Si vous le voulez à la barre, vous l'aurez. Tout entier. » Il se lève. « Pensez-y, avant minuit. »",
    ],
    choices: [{ label: "Sortir", fx: { flag: "oriane:sait_pavot" }, to: "O3_suite" }] },

  // ---------------------------------------------------------------- the President
  O3_helis: { act: "III", title: "Le règlement", place: "palais", ambiance: "chateau",
    fx: { meet: "helis", clock: { o3: 1 }, flag: "oriane:helis3" },
    text: [
      "Dame Hélis Arnaud relit le règlement du Conseil dans son cabinet, à la lumière d'une lanterne, avec une loupe. Elle a soixante-quinze ans et le connaît par cœur. Elle le relit quand même, chaque Nuit des Lanternes, au cas où il aurait changé pendant l'année.",
      { if: { has: "oriane:promet_coffre" }, text: "« Vous m'avez promis hier que le coffre serait ouvert, et la loi tenue. » Elle pose sa loupe. « Je compte sur vous, madame. Et vous comptez sur moi. »" },
    ],
    choices: [
      { label: "« Faites lire le testament avant le vote, et laissez parler qui le testament nommera, même sans siège. »", fx: { set: { helis: "allie" }, regard: { helis: "admiratif" } }, to: "O3H_parole", big: true },
      { label: "« Repoussez le vote jusqu'au dernier moment avant le reflux. J'ai besoin de chaque minute. »", fx: { set: { helis: "allie" } }, to: "O3H_temps" },
    ] },
  O3H_parole: { act: "III", title: "L'article quarante", place: "palais",
    text: [
      "Hélis Arnaud tourne trois pages et pose son doigt noueux sur un paragraphe. « Article quarante. *Le testament du Doyen défunt est lu avant toute délibération. Quiconque y est nommé a droit de parole au Conseil pour la durée de la lecture.* » Elle relève les yeux. « La dernière invocation date de cent douze ans. Je l'invoquerai. »",
      { if: { has: "oriane:article40" }, text: "« Vous m'en aviez parlé hier. J'ai vérifié : il est toujours en vigueur. »" },
    ],
    choices: [{ label: "La remercier", to: "O3_suite" }] },
  O3H_temps: { act: "III", title: "Le sablier", place: "palais",
    text: [
      "Hélis Arnaud sort de son tiroir un sablier d'une heure et le pose devant elle. « Je le retournerai à minuit, quand la lanterne s'allumera. On votera quand le sable sera presque passé. » Elle sourit. « Le règlement dit *avant le reflux*. Il se tait sur le nombre de minutes. »",
    ],
    choices: [{ label: "La remercier", fx: { clock: { voix: 2 } }, to: "O3_suite" }] },

  // ---------------------------------------------------------------- the captain
  O3_ysabeau: { act: "III", title: "La capitaine", place: "palais", ambiance: "chateau",
    fx: { meet: "ysabeau", clock: { o3: 1 }, flag: "oriane:ysabeau3" },
    text: [
      "Ysabeau Dorne inspecte ses gardes dans le vestibule, un par un, comme pour une revue. Elle redresse un baudrier, fait resserrer une boucle, renvoie un homme qui sent le vin.",
      { if: { has: "ysabeau=allie" }, text: "« Madame la secrétaire. On m'a déjà parlé, ce soir. J'ai mis vingt hommes au palais. » Elle te regarde. « Vous avez quelque chose à ajouter ? »" },
      { if: { not: { has: "ysabeau=allie" } }, text: "« Madame la secrétaire. Le Guet veille sur le Conseil. Il n'en fait pas partie. » C'est sa phrase. Elle la sert à tout le monde." },
    ],
    choices: [
      { label: "Lui montrer ce que tu as contre Morvan", if: { any: [{ clock: "preuves", min: 3 }, { has: "ysabeau=allie" }] }, why: "Tu n'as pas assez de preuves pour l'émouvoir.",
        fx: { set: { ysabeau: "allie" }, regard: { ysabeau: "allie" } }, to: "O3Y_oui", big: true },
      { label: "Lui parler de l'ordre pour la chaîne des Passes", if: { any: [{ has: "chaine_ordre=signe" }, { has: "chaine_ordre=faux" }, { clue: "chaine_ordre" }] }, why: "Tu ne sais rien de la chaîne.",
        fx: { flag: "ysabeau:chaine_oriane" }, to: "O3Y_chaine", big: true },
      { label: "La saluer, et passer", to: "O3_suite" },
    ] },
  O3Y_oui: { act: "III", title: "Les pièces", place: "palais",
    text: [
      "Ysabeau Dorne lit tout, debout. Puis elle rend les papiers. « Quatre gardes devant le coffre. Vingt dans la salle. Si le Conseil entend ce que vous avez là, et si le Conseil le croit, j'arrêterai qui il faut. Même dans l'enceinte. »",
    ],
    choices: [{ label: "La remercier", to: "O3_suite" }] },
  O3Y_chaine: { act: "III", title: "La chaîne", place: "palais",
    text: [
      "Tu dis l'ordre, la flotte, les quarante voiles au large.",
      { if: { has: "chaine_ordre=signe" }, text: "Tu dis aussi que c'est ta signature, au bas. Tu le dis les yeux droits. Ysabeau Dorne te regarde comme on regarde quelqu'un qui se dénonce. La chose est rare, et elle en a vu deux en trois jours." },
      "« Personne ne touchera au treuil cette nuit, madame. Quel que soit l'ordre et quel que soit le sceau. » Elle appelle son lieutenant. Six hommes partent vers la tour de la Chaîne.",
    ],
    choices: [{ label: "La remercier", fx: { set: { chaine: "gardee" } }, to: "O3_suite" }] },

  // ================================================================ eleven o'clock
  O3_fin: { act: "III", title: "Onze heures", place: "palais", ambiance: "chateau",
    text: [
      "Onze heures. Tu entres seule dans la Chambre des Sceaux. Le coffre est là, sur sa table de pierre, ses trois serrures en ligne : une d'argent, une de fer, une de bronze. Tu poses la main sur le couvercle. Il est froid comme une pierre tombale.",
      { if: { has: "clef1=oriane" }, text: "Ta clef d'argent est contre ta peau. La première serrure t'attend." },
      { if: { all: [{ has: "oriane:reprend_clef" }, { has: "clef1=oriane" }] }, text: "Tu l'as reprise hier soir dans le cabinet de Morvan, sous son nez, pendant qu'il regardait danser ses invités." },
      { if: { has: "clef1=morvan" }, text: "Ta clef d'argent est dans la cassette de Morvan. La première serrure restera fermée, sauf s'il l'ouvre lui-même." },
      { if: { has: "clef2=oriane" }, text: "La clef de fer du médecin est dans ta manche." },
      { if: { has: "clef3=oriane" }, text: "La clef de bronze, sur son ruban usé, aussi." },
      { if: { all: [{ has: "oriane:sait_ruban" }, { not: { has: "clef3=oriane" } }] }, text: "Tu penses au ruban que Nella portait au poignet, la veille de la mort. Tu sais maintenant ce qu'il cachait. Tu ignores où il est ce soir." },
      { if: { has: "renaud3=sceaux" }, text: "Renaud est toujours sur sa chaise, devant la porte, son épée de parade sur les genoux. Il s'est endormi. La porte est restée close." },
      "Dans une heure, tu seras debout devant quarante personnes, avec la ville entière à la fenêtre.",
    ],
    choices: [FIN] },
};
