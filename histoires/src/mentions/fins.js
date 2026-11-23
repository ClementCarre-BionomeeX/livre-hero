// « Émotions vendues séparément » · the launch at seven, and the five endings. Z_salon reads what the reader did
// downstairs: spoke aloud to the subscriber (the contract is broken at the speaker's expense), or brought a mention,
// his or their own.
function fin(id, title, place, text) { return { act: "I", title: title, place: place, end: true, fx: { flag: "fin:" + id }, text: text }; }
module.exports = {
  Z_salon: { act: "I", title: "Le lancement", place: "salon",
    branch: [
      { if: { has: "corps8:parle" }, to: "F_resiliation" },
      { if: { has: "mention:tienne" }, to: "F_ta_mention" },
      { to: "F_sa_mention" },
    ] },

  F_sa_mention: fin("sa_mention", "Silence garanti", "salon", [
    "Madame Vernis prend la carte de Corps-Huit, la lit une fois, et pour la première fois de la journée, quelque chose bouge sur son visage : le coin gauche de la bouche, d'un millimètre, puis plus rien. Elle pose la carte sur le pupitre, sous la lampe, et la lit à voix haute, de sa voix de notaire :",
    "« *Silence garanti. Solitude offerte.* »",
    "Les quarante membres du Club des Inaccessibles ne réagissent pas, ce qui chez eux est une ovation. Les bons de souscription circulent sur des plateaux d'argent. À dix-neuf heures quarante, les quarante sont signés. À dix-neuf heures quarante et une, personne, dans le salon, n'a plus le droit d'adresser la parole à personne, et la soirée se poursuit ainsi, dans un silence de cathédrale, jusqu'à minuit.",
    "Madame Vernis te raccompagne jusqu'à l'ascenseur. « *Offerte* », dit-elle à voix basse, devant la grille. « L'article quatre de la Charte : le mot est toléré s'il est faux. Il a payé sa solitude trois cent trente-trois mille euros, et il l'a déclarée offerte. » Elle capuchonne son stylo. « Vous commencez demain à huit heures. Prenez le bureau du premier rang. Il ne remontera pas. »",
    "Au troisième sous-sol, sous la lampe verte, un petit homme rond tourne une page, et boit son tilleul, et personne ne lui demande de virgule.",
  ]),
  F_ta_mention: fin("ta_mention", "Ta mention", "salon", [
    "Madame Vernis prend la carte, la lit, et la relit. Tu as le temps de compter jusqu'à onze. Puis elle la pose sur le pupitre, sous la lampe, et la lit à voix haute, de sa voix de notaire :",
    "« *{nom:mention}* »",
    "Quarante membres du Club des Inaccessibles ne réagissent pas, ce qui est leur manière d'applaudir. Les bons circulent sur des plateaux d'argent. Ils sont signés, tous, en sept minutes.",
    "« Votre phrase sera imprimée à quarante mille exemplaires, dit Madame Vernis devant la grille de l'ascenseur. Elle sera dans tous les écrins de l'Abonnement au Silence™, en corps huit, et personne ne la lira. C'est le plus grand honneur de cette maison. » Elle capuchonne son stylo. « Vous commencez demain à huit heures. Bureau du premier rang. »",
    { if: { item: "carte_mention" }, text: "Dans ta poche, la carte de Corps-Huit, que tu n'as pas donnée, reste à toi. Tu la gardes. Une mention refusée ; il en tient le cahier." },
    "Au troisième sous-sol, Monsieur Corps-Huit ne saura jamais ce que tu as écrit, puisque personne n'a le droit de le lui dire. Il te semble qu'il préfère cela.",
  ]),
  F_resiliation: fin("resiliation", "Aux torts de celui qui parle", "salon", [
    "Madame Vernis ne prend aucune carte. Elle regarde au-dessus de ta tête, l'horloge du salon, et dit, de sa voix de notaire, assez haut pour que les quarante inaccessibles l'entendent sans en avoir l'air :",
    "« Le contrat numéro un de l'Abonnement au Silence™ a été résilié à l'essai, cet après-midi, aux torts de celui qui a parlé. La Maison constate que le produit fonctionne : il suffit d'un mot pour qu'il cesse. Le produit est donc retiré. Nous vous présentons nos regrets, que vous ne pouvez pas acheter. »",
    "Les quarante membres du Club repartent vers leurs voitures, chacun par une porte différente, sans s'être vus. Le salon se vide en neuf minutes.",
    "Monsieur Corps-Huit, lui, est remonté au septième. Il a repris sa place au premier rang, rangé son sac de voyage sous le bureau, remis du buvard vert, et il tape. Sur un coin de son bureau, il a posé, bien en vue, la facture : trois cent trente-trois mille trois cent trente-trois euros, aux torts de celui qui parle. Ton nom est dessus.",
    "Madame Vernis te remet ton contrat de travail, avec un avenant de quarante pages. « Votre salaire sera retenu à la source, dit-elle. Trente ans, environ. Considérez cela comme une titularisation. » Elle capuchonne son stylo. « Bienvenue à la Tour des Mentions. »",
  ]),
  F_vernis: fin("vernis", "Vous êtes en retard", "notes", [
    "Madame Vernis descend les cent onze marches sans lampe, d'un pas égal, la main sur la pierre, et l'obscurité semble s'écarter devant elle par pure déférence. Tu as la sensation, dans ce noir épais, de suivre une règle graduée. La porte de la Salle des Notes s'ouvre sous sa main, du premier coup : elle connaît le code. Elle connaît tous les codes.",
    "Monsieur Corps-Huit lève les yeux de son livre, et la voit. Elle se tient sur le seuil, très droite, le stylo à la main. Elle dit, d'une voix parfaitement neutre :",
    "« Monsieur Corps-Huit. Vous êtes en retard. »",
    "Très loin, au-dessus, la sonnette de résiliation retentit. Monsieur Corps-Huit ferme son livre. Ils se regardent un long moment, comme deux virgules de part et d'autre d'une incise.",
    "« Aux torts de celui qui parle, dit-il enfin, doucement. C'est vous qui avez parlé, Clarisse. » « C'est moi, dit-elle. La Maison paiera. » Elle reprend son stylo. « La mention, Hilaire. »",
    "Il la lui donne. *Silence garanti. Solitude offerte.* Elle la lit, et la plie en deux, dans sa poche. « Le produit sera lancé ce soir. Sans vous, puisque vous êtes riche, désormais, et que les riches ne vont nulle part. »",
    "Le lendemain, Monsieur Corps-Huit quitte le Domaine avec trois cent trente-trois mille euros et un sac de voyage, par les grilles, à pied. On dit qu'il vit dans le désert, chez des motards qui ne lisent rien et parlent fort, et qu'il est très heureux. On dit aussi qu'il leur écrit leurs slogans, gratuitement, ce qui est contraire à l'article quatre.",
    "Toi, tu prends son bureau, au premier rang, sous la fenêtre.",
  ]),
  F_vide: fin("vide", "Vendu sans mention", "salon", [
    "La grille s'ouvre sur le Salon des Lancements, ses lustres, ses miroirs, et quarante membres du Club des Inaccessibles qui regardent fixement des points différents de la pièce. Madame Vernis te voit arriver les mains vides. Elle ne dit rien. Elle capuchonne son stylo.",
    "À dix-neuf heures, l'Abonnement au Silence™ est présenté sans mention légale, pour la première fois dans l'histoire de la Maison. Les quarante membres du Club signent leurs bons sans les lire, comme toujours, et l'écrin part dans le monde avec une place vide là où devait tenir la petite ligne en corps huit. Pas un regard ne la cherche.",
    "C'est, de l'avis de Madame Vernis, la pire nouvelle de la soirée. Elle te le dit devant la grille de l'ascenseur, à voix basse, avec une sorte de tristesse : « Ils n'ont rien vu. Trente-sept ans de corps huit, et ils n'ont rien vu. » Elle te tend une enveloppe. Ton premier salaire, et ton congé. « Ce n'est pas votre faute. C'est pire : c'est la nôtre. »",
    "Quelque part sous la Tour, un homme qui ne veut plus qu'on lui parle n'a appris la nouvelle de personne. On peut supposer qu'il l'a sentie, comme on sent une page qui manque à un livre.",
  ]),
};
