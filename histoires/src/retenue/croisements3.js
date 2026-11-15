// Last crossings: Jacquette in the old man's kitchen with the lady of the forges, Corlay when Malzieu comes to confess
// the dice, Anselme opening his door to the first drapier, and Dame Hesdin writing to Pernelle Daguet. Five new endings.
var A = "I";
module.exports = {
  _add: {
    J_pied: [
      { label: "Monter : une voiture à l'enclume attend au pied des marches", if: { lu: "H_maison_vannes" }, to: "J_dame", fx: { time: 1 } },
    ],
    C_vote_nuit: [
      { label: "Ouvrir à Malzieu, qui frappe à trois heures", if: { lu: "B_gagne" }, to: "C_malzieu", fx: { time: 2.5 } },
    ],
    A_vide: [
      { label: "Ouvrir à la voiture de drapier qui monte la route", if: { lu: "C_maison" }, to: "A_corlay" },
    ],
    H_choix: [
      { label: "Écrire un mot à Pernelle Daguet, la secrétaire de Corlay", if: { lu: "O_pernelle" }, to: "H_pernelle" },
    ],
  },

  // ------------------------------------------------------------------ Jacquette and the lady
  J_dame: { act: A, title: "Une dame dans la cuisine", place: "digue", fx: { time: 0.5 },
    text: [
      "Au pied des marches, une voiture, deux lanternes, une enclume peinte sur la portière. Le cocher dort sur son siège. Tu montes les deux cents marches avec ta lanterne sourde, sans le réveiller.",
      "Dans la cuisine du vieux, il y a une vieille dame en noir, une canne entre les genoux, un verre de vin devant elle. Derrière elle, dans le couloir, un colosse en tablier de cuir qui dort sur une chaise. Le vieux est dans son fauteuil.",
      "« Jacquette, dit le vieux. Dame Hesdin, des forges. » Puis à la dame : « La Loutre. Elle passe le sel sous le nez de l'octroi depuis six ans. Elle est la seule personne de la vallée qui soit venue chaque fois que je l'ai appelée. »",
      "La dame te regarde. Elle voit tes mains vides.",
      "« Le paquet n'est pas venu », dis-tu.",
      "Le vieux ferme les yeux. La dame pose son verre.",
    ],
    choices: [
      { label: "« Il y a la pierre bleue. Quelqu'un a pu le laisser dessous. Je redescends voir. »", if: { savoir: "pierre_bleue" }, to: "J_dame_pierre" },
      { label: "« Il y a le pointeau. Réveillez votre colosse, Madame. Je tiendrai la corde. »", to: "J_dame_pointeau" },
    ] },
  J_dame_pierre: { act: A, title: "La pierre bleue, à une heure", place: "berge", end: true, fx: { flag: "foulons:leves", time: 6 },
    text: [
      "Tu redescends les deux cents marches en courant. Devant ta cabane, la planche à craie est vide. Tu soulèves la pierre bleue. Dans le creux de paille, une toile cirée ficelée en croix, froide, humide, longue comme un avant-bras.",
      "Tu remontes avec. Tu la poses sur la table de la cuisine, devant la dame, plus vite que le vieux n'arrive à se lever.",
      "À trois heures, vous êtes quatre dans la chambre de la vanne : le vieux à la clé, toi et le colosse aux rayons, et la dame contre le mur, la lanterne levée, qui compte les tours à voix haute avec le vieux. Au quinzième, la digue rugit. La dame continue de compter.",
      "Elle envoie sa voiture aux Foulons, avec son cocher, au nom des forges. Au jour, le quartier est vivant sur le parvis.",
      "À dix heures, un valet des forges vient te trouver sur ton ponton. Dame Hesdin te fait dire que le vote est remis, que le lac sera vidé au printemps, et que la Charge aura besoin d'une batelière qui connaisse le canal. Elle te fait dire aussi qu'elle a vu tes sacs de sel dans les roseaux, et qu'elle n'en parlera à personne.",
      "Tu ris tellement que le valet recule.",
    ] },
  J_dame_pointeau: { act: A, title: "La corde et le colosse", place: "digue", end: true, fx: { flag: "foulons:leves", time: 6 },
    text: [
      "Le colosse s'appelle Barthélemy. Il descend l'escalier de service en portant le vieux sur son dos. La dame descend derrière, une main sur la paroi. Toi, devant, avec la lanterne et la corde.",
      "En bas, l'eau à la taille. Tu passes la corde dans l'anneau du mur. Barthélemy plonge. Le vieux compte. La dame s'est avancée jusqu'à la veine, dans l'eau froide, et elle a posé sa main nue sur la pierre.",
      "Au vingtième tour, la vanne s'ouvre avec un bruit de canon. La corde te brûle les paumes. Tu tiens. Barthélemy ressort en riant, le pointeau dans le poing.",
      "La dame envoie sa voiture aux Foulons. Au jour, le quartier est sur le parvis, la Sorge dans les rues, la digue debout.",
      "Le vieux meurt à midi. Tu l'apprends sur le quai. Tu remontes ta barque, tu t'assois dedans, sous la pluie.",
      "Le soir, un valet des forges t'apporte une paire de gants de cuir neufs, à ta taille, sans un mot. Dans le gant droit, un billet : *Pour les cordes. B. H.* Tu les mets. Ils sont trop beaux pour une passeuse. Tu les gardes pour les nuits où il faudra tenir.",
    ] },

  // ------------------------------------------------------------------ Corlay and Malzieu at three in the morning
  C_malzieu: { act: A, title: "Malzieu, à trois heures", place: "hauteville", fx: { time: 0.25 },
    text: [
      "Le valet de nuit te réveille. Malzieu est en bas, dans le vestibule, sous le baromètre, le chapeau à la main, dégrisé, livide.",
      "« Corlay. J'ai perdu mille écus au Chat Ferré. Contre le fils Vellard. Sur parole. » Il avale sa salive. « Il ne veut pas l'argent. Il veut ma voix, demain. »",
      "Tu comptes. Toi, Aubrac. Rouvray, Pons, Garnier pour le fils. Malzieu, maintenant. Quatre contre deux. Dame Hesdin n'y changera rien.",
      "Malzieu attend. Il t'a toujours suivi. Il te demande quoi faire, comme toujours.",
    ],
    choices: [
      { label: "« Je rachète ta dette au garçon. Cette nuit. » Et descendre au Chat Ferré", to: "C_rachat" },
      { label: "« Vote pour lui. Une Charge gagnée aux dés, ça se défait au printemps. »", to: "C_des" },
    ] },
  C_rachat: { act: A, title: "Le fils, à la table du fond", place: "hauteville", end: true, fx: { time: 3 },
    text: [
      "Tu descends au Chat Ferré à trois heures et demie, en manteau sur ta robe de chambre. La salle est presque vide. Le fils Vellard est à la table du fond, seul, devant une chandelle, avec la reconnaissance de dette de Malzieu.",
      "Tu poses une bourse sur la table. « Mille écus. Rendez-lui sa parole. »",
      "Le garçon regarde la bourse. Puis toi. Il a les yeux de son père, et tu ne l'avais jamais remarqué.",
      "« À huit heures hier soir, dit-il, vous m'avez payé quatre cents écus pour mon père. Maintenant vous m'en offrez mille pour un ivrogne. » Il pousse la bourse vers toi. « Gardez-les. Vous en aurez besoin. »",
      "À quatre heures, la pluie. À cinq heures et demie, le Chat Ferré tremble. Le garçon se lève d'un coup, renverse la chandelle, et monte l'escalier en courant. Tu restes assis devant ta bourse, dans le noir.",
      "À huit heures, le Conseil se réunit dans une ville qui compte ses morts. Malzieu vote pour le fils Vellard. Le fils n'est pas là pour l'entendre. Il est au bout de la vallée, à chercher son père dans ce qui reste de la Maison des Vannes. Tu as la présidence, ta bourse, et quatre voix contre toi.",
    ] },
  C_des: { act: A, title: "Une Charge aux dés", place: "hauteville", end: true, fx: { time: 4.5 },
    text: [
      "Malzieu repart soulagé. Tu remontes te coucher. Aude ne dort pas.",
      "« Qui était-ce ? »",
      "« Malzieu. Il a perdu sa voix aux dés. Le fils Vellard aura la Charge. »",
      "Aude allume la bougie. Elle te regarde. « Et toi, tu dors ? »",
      "« Au printemps, on prouvera qu'une voix jouée aux dés ne vaut rien. Le garçon tiendra six mois. »",
      "À cinq heures et demie, la maison tremble. De la fenêtre du salon, dans le petit jour, tu vois la digue ouverte en son milieu, et le lac qui passe. Le garçon aura la Charge d'une digue qui n'existe plus. Toi, tu as la clé, dans ton coffre, sur la liasse au ruban noir. Tu l'avais oubliée en comptant les voix.",
    ] },

  // ------------------------------------------------------------------ Anselme opens to Corlay
  A_corlay: { act: A, title: "Le camarade d'école", place: "digue", fx: { time: 0.25 },
    text: [
      "Une voiture de drapier, une couronne brodée sur la portière. Un homme en habit de soirée monte tes deux cents marches, lentement, avec une lanterne. Derrière lui, une femme en gris avec une écritoire.",
      "Enguerrand Corlay. Vous étiez à l'école ensemble, chez les frères de Saint-Rieul. Tu étais meilleur que lui en calcul. Il était meilleur que toi en tout le reste.",
      "Il a ta clé dans la main.",
      "« Tu es venu », dis-tu.",
      "« J'ai vu le mur. »",
    ],
    choices: [{ label: "Prendre la clé", to: "A_corlay_roue" }] },
  A_corlay_roue: { act: A, title: "Deux vieux hommes à la roue", place: "digue", end: true, fx: { flag: "foulons:leves", time: 5.5 },
    text: [
      "Tu prends la clé. Tu ne le remercies pas. Il ne s'y attend pas.",
      "Dans la chambre de la vanne, tu tournes la clé dans le moyeu, de tes deux mains qui tremblent. La rousse prend un rayon. Corlay enlève son habit et prend l'autre. Il pousse comme un homme qui n'a rien poussé depuis ses vingt ans, avec les bras, puis avec le ventre, puis avec la rage.",
      "Au dixième tour, il a les mains en sang. Au quinzième, la digue rugit, et il crie avec elle. Au quarantième, il s'assoit par terre, à côté de toi, contre le mur.",
      "Vous restez là tous les deux, dans le bruit de l'eau. Il dit : « Il y a trois ans, j'aurais pu descendre. » Tu dis : « Il y a trois ans, j'aurais pu refuser ton argent. » Vous vous taisez. C'est la plus longue conversation que vous ayez eue depuis l'école.",
      "Au jour, le lac descend. La femme en gris a écrit toute la nuit. Le guet a fait lever les Foulons, sur l'ordre de Corlay.",
      "Tu meurs à midi, dans ton fauteuil. Corlay est encore là. Il a dormi sur le banc de ton fils. Avant de partir pour le Conseil, il te ferme les yeux. Tu ne le vois pas faire. Tu l'aurais laissé faire.",
    ] },

  // ------------------------------------------------------------------ Dame Hesdin writes to Pernelle
  H_pernelle: { act: A, title: "Un mot à la secrétaire", place: "hauteville", fx: { time: 0.5 },
    text: [
      "Tu connais Pernelle Daguet. Elle vient chaque trimestre régler les comptes de la maison Corlay avec tes forges, et elle trouve tes erreurs avant ton commis. Elle est la seule personne de la rue Haute dont tu admires le travail.",
      "Tu écris trois lignes. *Mademoiselle. On dit que votre maître garde cette nuit une clé qui n'est pas à lui. Si vous le savez aussi, ma porte du jardin est ouverte jusqu'au jour. B. H.*",
      "Tu fais porter le mot par ta femme de chambre, qui connaît la cuisinière de Corlay. Puis tu attends, devant ton feu, tes chiens à tes pieds.",
    ],
    choices: [{ label: "Attendre minuit", to: "H_pernelle_jardin", fx: { time: 2.25 } }] },
  H_pernelle_jardin: { act: A, title: "La porte du jardin", place: "hauteville", end: true, fx: { flag: "foulons:leves", time: 6 },
    text: [
      "À minuit et quart, ta femme de chambre frappe. Pernelle Daguet est dans ta cuisine, en manteau gris, une toile cirée ficelée en croix dans les bras.",
      "« Le coffre a deux clés, Madame. Monsieur en garde une. L'autre est dans mon pupitre depuis douze ans. » Elle te tend le paquet. « Je ne sais pas qui le portera. Moi, je dois être à mon pupitre à sept heures. »",
      "Barthélemy part à cheval à minuit et demi, avec la clé et deux de tes hommes. Ta voiture descend aux Foulons réveiller les rues au nom des forges.",
      "À trois heures et quart, de ta fenêtre, trois lanternes au bout de la vallée. À quatre heures, la pluie. Au jour, la digue tient.",
      "À huit heures, au Conseil, Corlay est à sa place, frais, rasé. Il ne sait encore rien. Tu poses la clé sur la table ovale. Tu dis qu'elle a passé la nuit dans la digue, où elle devait être. On te demande d'où tu la tiens. Tu réponds : d'une personne qui fait son travail.",
      "Corlay pâlit. Il regarde la porte, derrière laquelle Pernelle Daguet attend avec ses registres. Il comprend. Tu le vois comprendre. La semaine suivante, Pernelle entre à ton service. Elle trouve trois erreurs dans tes comptes le premier jour.",
    ] },
};
