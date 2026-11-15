// The house: eight places (the hall, the kitchen, your mother's room, the study, the upstairs corridor, the attic, the
// yard with the sawmill, the pond), what one finds there, the morning, and panic. These passages carry no act: the act
// in progress stays the one the story is in.
var GO = {
  salle: { label: "Passer dans la grande salle", to: "H_salle" },
  cuisine: { label: "Passer à la cuisine", to: "H_cuisine" },
  bureau: { label: "Entrer dans le bureau", to: "H_bureau" },
  etage: { label: "Monter à l'étage", to: "H_etage" },
  grenier: { label: "Monter au grenier", to: "H_grenier" },
  cour: { label: "Passer dans la cour", to: "H_cour" },
};
// The doors of each place.
var NEAR = { salle: ["cuisine", "bureau", "etage", "cour"], cuisine: ["salle", "cour"], bureau: ["salle"], etage: ["salle", "grenier"], grenier: [], cour: ["salle", "cuisine"], chambre: [], etang: [] };
function go(here) {
  var out = NEAR[here].map(function (k) { return { label: GO[k].label, to: GO[k].to }; });
  // Your mother's room is upstairs: by night, going in costs something.
  if (here === "etage") {
    out.push({ label: "Entrer dans la chambre de ta mère", when: "day", to: "H_chambre" });
    out.push({ label: "Entrer dans la chambre de ta mère", when: "night", fx: { angoisse: 1 }, to: "H_chambre" });
  }
  if (here === "grenier") out.push({ label: "Descendre à l'étage", to: "H_etage" });
  if (here === "chambre") out.push({ label: "Passer dans le couloir", to: "H_etage" });
  if (here === "cour") {
    out.push({ label: "Descendre à l'étang par le sentier des saules", when: "day", to: "H_etang" });
    out.push({ label: "Descendre à l'étang dans le noir", when: "night", fx: { angoisse: 1 }, to: "H_etang" });
  }
  if (here === "etang") out.push({ label: "Prendre le sentier vers la maison", to: "H_cour" });
  return out;
}
var SLEEP = { label: "Monter te coucher", when: "night", takes: "morning", to: "N_matin" };
var HAS_LETTER = { item: "lettre" };
module.exports = {
  // ------------------------------------------------------------------ la grande salle
  H_salle: {
    title: "La grande salle", place: "salle", hub: true, backName: "la grande salle",
    text: [
      { first: true, text: "La grande salle tient tout le rez-de-chaussée côté vallée : un plafond bas à poutres noires, une cheminée où l'on entrerait debout, la longue table où l'on a mangé à douze les jours de battage. Contre le mur, la pendule de ton grand-père a les aiguilles arrêtées sur minuit vingt. Le miroir au-dessus du buffet est couvert d'un drap noir." },
      { again: true, when: "day", text: "La grande salle, le feu, la table. Par les fenêtres, la neige efface la vallée." },
      { again: true, when: "night", text: "La grande salle à la nuit : le feu baisse, la lampe à huile fait un rond jaune sur la table, et tout le reste de la pièce appartient aux ombres." },
      { after: "B_lampe", before: "C_matin", once: true, text: "Depuis la tempête, on a remplacé la lampe par des chandelles. Il en coule sur la table, en petites flaques blanches." },
      { after: "M_cheminee_brule", text: "Dans la cheminée, au fond, un reste de papier noirci s'est pris dans les cendres." },
    ],
    choices: [
      { label: "Regarder la pendule arrêtée", once: true, to: "K_pendule" },
      { label: "Soulever le drap noir du miroir", hide: { seen: "K_miroir" }, to: "K_miroir" },
      { label: "Fouiller le manteau de Germain, pendu près de la porte", hide: { any: [{ seen: "K_manteau" }, { item: "acte_vente" }] }, takes: 1,
        test: { dom: "discretion", diff: -10, label: "Discrétion" }, win: { to: "K_manteau" }, lose: { to: "K_manteau_pris" } },
      { label: "Jeter la lettre de ta mère au feu", if: HAS_LETTER, hide: { not: HAS_LETTER }, after: "M_lettre_lue", to: "M_cheminee" },
      SLEEP,
    ].concat(go("salle")),
  },
  K_pendule: {
    title: "La pendule", place: "salle", back: true,
    text: [
      "Une pendule comtoise, haute comme un homme, avec un balancier de cuivre repoussé où l'on voit un coq et des épis. Ton grand-père l'a achetée à la foire de Saint-Amans l'année de son mariage. Les aiguilles sont arrêtées sur minuit vingt, et le balancier pend, immobile, derrière la vitre.",
      "C'est la coutume : on arrête la pendule à l'heure de la mort, et on ne la remet en marche qu'au retour du cimetière. Quelqu'un l'a fait avec soin. La petite clef est restée dans la serrure de la caisse.",
      { calme: true, text: "Sur le cadran, près du chiffre douze, une trace de doigt dans la poussière. Un doigt fin." },
    ],
  },
  K_miroir: {
    title: "Le miroir voilé", place: "salle", back: true, fx: { angoisse: 1 },
    text: [
      "Tu soulèves un coin du drap. On dit, ici, qu'un miroir découvert garde l'âme du mort dans la maison. Tu n'y crois pas, et ta main hésite quand même.",
      { calme: true, text: "Le miroir te montre un visage fatigué, la buée de ton souffle, et derrière toi la salle vide, la table, le feu." },
      { trouble: true, text: "Le miroir te montre ton visage, et derrière ton épaule, une seconde, un enfant en chemise de nuit, les cheveux collés au front. Tu te retournes. Il n'y a que la table et le feu." },
      "Tu laisses retomber le drap.",
    ],
  },
  K_manteau: {
    title: "Le manteau de Germain", place: "salle", back: true, fx: { item: "acte_vente" },
    text: [
      "Un manteau de drap fin, trop fin pour la montagne, avec un col de loutre. Tu passes la main dans les poches pendant que la salle est vide. Un mouchoir, un briquet d'amadou, de la menue monnaie.",
      "Dans la poche intérieure, un papier plié en quatre, d'un beau papier de notaire.",
    ],
  },
  K_manteau_pris: {
    title: "Le manteau de Germain", place: "salle", back: true, fx: { regard: { germain: "mefiant" } },
    text: [
      "Ta main est dans la poche du manteau quand la porte s'ouvre. Germain secoue la neige de ses bottes, te voit, et sourit.",
      "« Il fait froid, hein ? dit-il. Tu cherchais tes gants ? Les tiens sont sur le banc. » Il reprend son manteau, l'enfile, et ressort sans se presser. Il n'a rien dit d'autre. Il n'en avait pas besoin.",
    ],
  },
  M_cheminee: {
    title: "Le feu", place: "salle",
    text: [
      "Tu tiens la lettre au-dessus du feu. Le papier est encore tiède de ta poche. Personne d'autre que toi, maintenant, ne sait ce qu'il y a dedans, ou personne qui le dira.",
    ],
    choices: [
      { label: "La lâcher", fx: { drop: "lettre", geste: "g_brule", flag: "lettre:brulee" }, to: "M_cheminee_brule" },
      { label: "La remettre dans ta poche", back: "H_salle" },
    ],
  },
  M_cheminee_brule: {
    title: "Le feu", place: "salle", back: true,
    text: [
      "Le papier noircit d'abord sur les bords, se recroqueville, et l'écriture de ta mère brille une seconde en lettres d'or avant de disparaître. Puis il n'y a plus qu'une feuille de cendre qui garde sa forme, et que le tirage de la cheminée emporte.",
    ],
  },

  // ------------------------------------------------------------------ la cuisine
  H_cuisine: {
    title: "La cuisine", place: "cuisine", hub: true, backName: "la cuisine",
    text: [
      { first: true, text: "La cuisine est la seule pièce chaude de la maison. Le fourneau de fonte ronfle jour et nuit, la table de bois blanc a été frottée au sable si souvent qu'elle est creuse au milieu, et les jambons pendent aux poutres dans leurs sacs de toile. Ça sent la soupe, le lard et le bois mouillé. Ça sent ton enfance." },
      { again: true, text: "La cuisine, sa chaleur, le fourneau, l'odeur de soupe." },
      { when: "night", text: "La nuit, Mariette couvre le feu et ne laisse qu'une chandelle sur la table. La porte du fond donne sur la cour et sur le noir." },
    ],
    choices: [
      { label: "T'asseoir près du fourneau, les mains tendues vers la chaleur", takes: 1, fx: { angoisse: -1 }, to: "K_fourneau" },
      SLEEP,
    ].concat(go("cuisine")),
  },
  K_fourneau: {
    title: "Le fourneau", place: "cuisine", back: true, seul: true,
    text: [
      { first: true, text: "Tu tires le tabouret contre le fourneau, celui où tu t'asseyais enfant pour regarder lever la pâte. Il est trop bas pour toi, maintenant. Tes genoux touchent presque la fonte." },
      "La chaleur entre dans tes mains, puis dans tes bras. Le fourneau fait de petits bruits de métal qui travaille. Pendant une heure, tu n'es nulle part, et c'est bien.",
    ],
  },

  // ------------------------------------------------------------------ la chambre d'Armance
  H_chambre: {
    title: "La chambre de ta mère", place: "chambre", hub: true, backName: "la chambre de ta mère",
    text: [
      { first: true, text: "La chambre de ta mère est au-dessus de la grande salle, et tu ne la reconnais pas. On a poussé les meubles contre les murs. Le grand lit à colonnes est au milieu, et sur le lit, ta mère, en robe noire, les mains jointes sur un chapelet qu'elle n'a jamais dit. Quatre cierges brûlent aux coins. Les volets sont fermés, et il fait froid exprès : on a laissé le poêle éteint." },
      { again: true, when: "day", text: "La chambre, les cierges, le lit. Le jour passe entre les lames des volets et dessine des barres pâles sur le drap." },
      { again: true, when: "night", text: "La chambre, la nuit. Les cierges font bouger les ombres sur le visage de ta mère, et chaque fois, une seconde, on croirait qu'elle va parler." },
      { trouble: true, text: "La flamme des cierges tremble. Tu as l'impression que le drap, sur la poitrine de ta mère, s'est soulevé." },
    ],
    choices: [
      { label: "T'approcher du lit", hide: { seen: "A_lit" }, to: "A_lit" },
      { label: "Regarder ta mère", hide: { not: { seen: "A_lit" } }, to: "K_mere" },
      { label: "Ouvrir le tiroir de la table de nuit", hide: { seen: "K_table" }, to: "K_table" },
      { label: "Regarder sous le lit, sans que personne te voie", hide: { any: [{ clue: "n_fiole" }, { seen: "K_sous_lit_pris" }] }, takes: 1,
        test: { dom: "discretion", diff: -10, label: "Discrétion", help: [{ when: "night", v: 10 }] }, win: { to: "K_sous_lit" }, lose: { to: "K_sous_lit_pris" } },
      { label: "Ouvrir les volets", when: "day", once: true, to: "K_volets" },
    ].concat(go("chambre")),
  },
  K_mere: {
    title: "Ta mère", place: "chambre", back: true, seul: true,
    text: [
      { first: true, text: "Tu t'approches encore. De près, son visage est plus petit que dans ton souvenir. La bouche a été fermée avec une bande de linge, qu'on a cachée sous le menton. Les cheveux sont tirés, peignés, nattés. Quelqu'un l'a faite belle avec beaucoup de soin." },
      { again: true, text: "Tu restes debout près du lit. Ta mère a l'air de quelqu'un qui écoute." },
      "Ses mains, sur le chapelet, sont nouées comme des racines de saule. Les doigts ne se plient plus qu'à moitié, les jointures sont grosses comme des noix.",
      { after: "etang:verite", text: "Tu regardes ses bras. Tu sais, maintenant, d'où viennent les marques blanches." },
    ],
  },
  K_table: {
    title: "La table de nuit", place: "chambre", back: true,
    text: [
      "Sur la table de nuit, un bougeoir, un verre propre retourné sur une soucoupe, un livre d'heures fermé par un ruban, et la boîte de pastilles à la réglisse que ta mère suçait déjà quand tu étais petit{e}.",
      { calme: true, text: "Derrière le bougeoir, contre le mur, une petite cuiller d'argent, comme on en donne aux malades. Son creux est brun et sec. Tu la portes à ton nez : le clou de girofle, et quelque chose d'amer en dessous." },
      { trouble: true, text: "Tes mains tremblent en ouvrant le tiroir. Dedans, des mouchoirs, des épingles, un chapelet de rechange. Tu refermes trop vite, et le bougeoir vacille." },
    ],
    choices: [
      { label: "Garder ce que tu as vu pour toi", calme: true, fx: { clue: "n_cuiller" }, back: "H_chambre" },
      { label: "Laisser la table comme elle était", back: "H_chambre" },
    ],
  },
  K_sous_lit: {
    title: "Sous le lit", place: "chambre", back: true, fx: { clue: "n_fiole" },
    text: [
      "Tu t'agenouilles comme pour prier. Sous le lit, la poussière, le pot de chambre de faïence, une pantoufle seule. Tu glisses le bras derrière le pot.",
      "Tes doigts rencontrent du verre. Une petite fiole brune, bouchée, avec une étiquette de pharmacien : « Laudanum de Sydenham. Dix gouttes au plus. » Elle est vide. Quelqu'un l'a poussée là, loin du bord, et le pot a fait le reste.",
      "Tu la remets où elle était.",
    ],
  },
  K_sous_lit_pris: {
    title: "Sous le lit", place: "chambre", back: true, fx: { regard: { odile: "mefiant" } },
    text: [
      "Tu t'es à peine penché{e} qu'une voix dit derrière toi : « Tu as perdu quelque chose ? »",
      "Odile est sur le seuil, un broc d'eau à la main. Tu te relèves. Elle traverse la chambre, pose le broc sur la commode et te garde à l'œil pendant qu'elle remplace un cierge. Tu n'as plus rien à faire ici, pas cette fois.",
    ],
  },
  K_volets: {
    title: "Les volets", place: "chambre", back: true,
    text: [
      "Tu ouvres un volet. La lumière de neige entre d'un coup, blanche et crue, et la chambre a soudain l'air d'une pièce ordinaire, avec ses meubles poussés, sa poussière, son lit.",
      "Par la fenêtre, on voit l'étang : un ovale gris entre les saules noirs, et la cabane aux barques, à demi enterrée sous la neige.",
      "Tu refermes. Les morts aiment le noir, dit-on ici, et pour une fois tu es d'accord.",
    ],
  },

  // ------------------------------------------------------------------ le bureau
  H_bureau: {
    title: "Le bureau", place: "bureau", hub: true, backName: "le bureau",
    text: [
      { first: true, text: "Le bureau est une petite pièce froide derrière la salle, où ton père faisait les comptes et où ta mère les a faits après lui pendant vingt ans. Un secrétaire à cylindre, des registres reliés de toile verte sur trois rayons, un poêle éteint, une fenêtre sur la scierie. Rien n'a changé, sauf le fauteuil : on a mis un coussin dessus, pour une femme qui avait mal au dos." },
      { again: true, text: "Le bureau, les registres verts, le secrétaire." },
      { after: "B_testament", text: "Le cylindre du secrétaire est resté ouvert, et les tiroirs ne sont pas tout à fait refermés. Quelqu'un a cherché, et a laissé voir qu'il cherchait." },
    ],
    choices: [
      { label: "Ouvrir le secrétaire de ta mère", hide: { seen: "K_secretaire" }, before: "B_testament", to: "K_secretaire" },
      { label: "Feuilleter les registres de la scierie", hide: { seen: "K_registres" }, takes: 1,
        test: { dom: "savoir", diff: 0, label: "Savoir", help: [{ if: "passe:copiste", v: 20 }] }, win: { to: "K_registres" }, lose: { to: "K_registres_rien" } },
      SLEEP,
    ].concat(go("bureau")),
  },
  K_secretaire: {
    title: "Le secrétaire", place: "bureau", back: true, fx: { flag: "testament:vu" },
    text: [
      "Le cylindre glisse avec un bruit de bois sec. Dedans, tout est rangé comme ta mère rangeait : les factures à gauche, les lettres à droite, la cire et le sceau au milieu, et l'encrier, sec.",
      "Dans le petit tiroir du milieu, sous un ruban, une feuille de sa main, raturée, avec en haut le mot « Brouillon » souligné deux fois. Ce sont ses dernières volontés : la maison et ses meubles à Odile, « qui l'a gagnée » ; la scierie partagée entre ses deux enfants ; et le bois des Fayards, quarante arpents de hêtres et de sapins, « à {hero}, pour qu'il y ait encore quelque chose de son père qui pousse ».",
      "Tu remets la feuille sous son ruban. Sur le côté, la place d'une lettre qu'on aurait posée là : un rectangle plus clair dans la poussière du bois.",
    ],
  },
  K_registres: {
    title: "Les registres", place: "bureau", back: true, fx: { flag: "germain:comptes" },
    text: [
      "Tu prends le registre de l'année. L'écriture de ta mère jusqu'en juin, puis une autre, plus ronde et plus large : Germain a tenu les comptes à sa place.",
      { if: "passe:copiste", text: "Tu as passé douze ans à lire des comptes chez un notaire, et ceux-là ne tiennent pas debout : les planches vendues à Vernet sont notées au prix de l'an passé, et l'écart part chaque mois dans une colonne « frais divers » qui n'existait pas avant juin." },
      { if: { not: "passe:copiste" }, text: "Il te faut une heure pour comprendre. Depuis juin, une colonne nouvelle, « frais divers », mange chaque mois une part des ventes. Elle grossit à mesure que les mois passent." },
      "Trois cents livres, à peu près, depuis l'été. Ta mère ne pouvait plus tenir une plume. Elle ne l'a sans doute jamais su.",
    ],
  },
  K_registres_rien: {
    title: "Les registres", place: "bureau", back: true,
    text: [
      "Des colonnes de chiffres, des noms de marchands, des stères et des toises. Tu tournes les pages pendant une heure. Les chiffres se brouillent. Tu refermes le registre sans avoir rien appris d'autre que le prix du sapin.",
    ],
  },

  // ------------------------------------------------------------------ l'étage
  H_etage: {
    title: "Le couloir de l'étage", place: "etage", hub: true, backName: "le couloir de l'étage",
    text: [
      { first: true, text: "L'escalier de bois tourne deux fois et débouche sur le long couloir de l'étage, celui où vous couriez en chaussettes, Lucien et toi, pour glisser jusqu'au bout. Six portes : la chambre de ta mère, au fond ; la chambre d'Odile et de Germain ; la chambre d'amis, où l'on a mis le docteur ; la petite chambre de couture, où dort Jeanne ; ta chambre d'enfant ; et la chambre de Lucien, fermée à clef." },
      { again: true, text: "Le couloir de l'étage, ses six portes, le plancher qui craque à la troisième latte." },
      { when: "night", text: "Une veilleuse brûle au bout du couloir, devant la porte de ta mère. Partout ailleurs, le noir." },
    ],
    choices: [
      { label: "Entrer dans ta chambre d'enfant", to: "K_ma_chambre" },
      { label: "Essayer la porte de Lucien", if: { not: { item: "cle_lucien" } }, hide: { any: [{ item: "cle_lucien" }, "lucien:ouverte"] }, to: "K_porte_lucien" },
      { label: "Ouvrir la chambre de Lucien", if: { any: [{ item: "cle_lucien" }, "lucien:ouverte"] }, hide: { not: { any: [{ item: "cle_lucien" }, "lucien:ouverte"] } }, to: "K_lucien" },
      { label: "Entrer dans la chambre de couture", when: "day", to: "K_couture" },
      { label: "Entrer dans la chambre d'Odile et de Germain, pendant qu'ils sont en bas", when: "day", hide: { seen: "K_fond" }, takes: 1,
        test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: "passe:guet", v: 10 }] }, win: { to: "K_fond" }, lose: { to: "K_fond_pris" } },
      { label: "Entrer dans la chambre d'amis, pendant que le docteur est en bas", hide: { seen: "K_amis" }, to: "K_amis" },
      SLEEP,
    ].concat(go("etage")),
  },
  K_ma_chambre: {
    title: "Ta chambre d'enfant", place: "etage", back: true, seul: true,
    text: [
      { first: true, text: "Mariette a fait le lit, mis une bouillotte de grès sous l'édredon et posé une bougie neuve sur la table. Le reste n'a pas bougé depuis douze ans : la carte de la vallée punaisée au mur, le fusil de bois, la pile de livres d'aventures dont la moitié vient de la bibliothèque de l'instituteur et n'y est jamais retournée." },
      { again: true, text: "Ta chambre d'enfant. Le lit trop court, la bougie, la carte de la vallée au mur." },
      "Au pied du lit, ta vieille malle, celle qu'on a remplie pour Varenne. Tu ne te souviens pas de l'avoir vidée. Quelqu'un l'a vidée pour toi, et l'a laissée là.",
    ],
    choices: [
      { label: "Ouvrir la malle", hide: { seen: "S4_depart" }, to: "S4_depart" },
    ],
  },
  K_porte_lucien: {
    title: "La porte de Lucien", place: "etage",
    text: [
      "La porte de la chambre de Lucien est fermée à clef. La poignée de laiton a été astiquée récemment : elle brille, alors que celle de ta chambre est ternie. Quelqu'un vient ici. Quelqu'un l'ouvre et la referme.",
    ],
    choices: [
      { label: "Forcer la serrure avec la pointe de ton couteau", takes: 1, test: { dom: "discretion", diff: -10, label: "Discrétion" },
        win: { to: "K_lucien", fx: { flag: "lucien:ouverte", geste: "g_crochete" } }, lose: { back: "H_etage", fx: { angoisse: 1 } } },
      { label: "Laisser la porte comme elle est", back: "H_etage" },
    ],
  },
  K_lucien: {
    title: "La chambre de Lucien", place: "etage", fx: { flag: "lucien:chambre", quest: "III_lucien", angoisse: 1 }, seul: true,
    text: [
      { first: true, text: "La chambre de Lucien sent la lavande et le renfermé. Le lit est fait au carré, l'édredon rouge tiré sans un pli. Ses habits du dimanche sont pliés sur la chaise, comme pour le lendemain. Sur l'étagère, ses soldats de plomb sont rangés en ordre de bataille, et la poussière a été faite autour d'eux, soldat par soldat." },
      { first: true, text: "On a gardé cette chambre comme on garde une plaie ouverte, en la nettoyant tous les jours." },
      { again: true, text: "La chambre de Lucien. L'édredon rouge, les soldats, l'odeur de lavande." },
      "Pendus à un clou, derrière la porte, ses patins.",
      { after: "lettre:boite", before: "lettre:trouvee", text: "Sur la commode, la petite boîte à musique de Lucien a été déplacée : elle n'est plus dans son rond de poussière." },
    ],
    choices: [
      { label: "Décrocher les patins", hide: { seen: "S1_promesse" }, to: "K_patins" },
      { label: "Ouvrir la boîte à musique", hide: { any: [{ seen: "K_boite" }, "lettre:trouvee"] }, to: "K_boite" },
      { label: "Ouvrir de nouveau la boîte à musique", after: ["K_boite", "lettre:boite"], hide: "lettre:trouvee", to: "K_boite_lettre" },
      { back: "H_etage" },
    ],
  },
  K_patins: {
    title: "Les patins", place: "etage",
    text: [
      "Des patins de fer à lames recourbées, qu'on attache sur les souliers avec des courroies de cuir. Ton père les avait faits forger à Saint-Amans pour les huit ans de Lucien. Ils sont propres, huilés, sans une tache de rouille.",
      "La courroie du pied droit a été tranchée net, d'un coup de lame. Le cuir a gardé la forme du soulier.",
      "Tu les tiens dans tes mains, et la chambre se met à reculer.",
    ],
    fx: { clue: "e_patins" }, back: true,
    choices: [{ label: "Te laisser emporter", hide: { seen: "S1_promesse" }, to: "S1_promesse" }],
  },
  K_boite: {
    title: "La boîte à musique", place: "etage", back: true,
    text: [
      "Une boîte de bois peint, grande comme une main, avec une danseuse de papier sur le couvercle. Tu tournes la petite clef. L'air sort, grêle et faux : « Au clair de la lune », que Lucien faisait jouer jusqu'à ce qu'on la lui confisque.",
      { before: "lettre:boite", text: "Dedans, sur le velours rouge, une mèche de cheveux blonds nouée d'un fil, et un soldat de plomb à qui il manque la tête." },
      { after: "lettre:boite", text: "Dedans, sur le velours rouge, une mèche de cheveux blonds nouée d'un fil, et une lettre pliée en quatre, cachetée de cire noire, à ton nom." },
    ],
    choices: [
      { label: "Prendre la lettre", after: "lettre:boite", fx: { item: "lettre", flag: "lettre:trouvee" }, to: "M_lettre" },
      { label: "Refermer la boîte", back: "K_lucien" },
    ],
  },
  K_boite_lettre: {
    title: "La boîte à musique", place: "etage",
    text: [
      "Tu rouvres la boîte. L'air reprend où il s'était arrêté. Sur le velours rouge, à côté de la mèche de cheveux, il y a maintenant une lettre pliée en quatre, cachetée de cire noire, à ton nom.",
    ],
    choices: [
      { label: "Prendre la lettre", fx: { item: "lettre", flag: "lettre:trouvee" }, to: "M_lettre" },
      { label: "Refermer la boîte", back: "K_lucien" },
    ],
  },
  K_couture: {
    title: "La chambre de couture", place: "etage", back: true, fx: { clue: "e_fenetre" },
    text: [
      { first: true, text: "La petite chambre de couture était la chambre d'Odile quand vous étiez enfants. Il y reste son lit de jeune fille, où dort Jeanne en ce moment, une machine à coudre sous sa housse, des coupons de drap noir sur la table. Le sac de Jeanne est posé au pied du lit, bien fermé." },
      { again: true, text: "La chambre de couture, le lit étroit, le drap noir sur la table." },
      "Tu t'approches de la fenêtre. Elle donne sur le derrière de la maison. On voit, en descendant, le jardin sous la neige, la barrière, et tout le sentier des saules jusqu'à la cabane aux barques, au bord de l'étang. D'ici, on verrait passer n'importe qui, même de nuit, avec la lune.",
    ],
  },
  K_fond: {
    title: "La chambre d'Odile et de Germain", place: "etage", back: true, fx: { geste: "g_fouille_odile", item: "lettre_vernet" },
    text: [
      "Une chambre propre et nue. Deux lits jumeaux séparés par une table de nuit, ce qui te surprend, puis ne te surprend plus. Côté Odile, une Bible, un chapelet, une boîte à couture. Côté Germain, un rasoir, une brosse à habits, une pile de journaux de la ville.",
      "Tu ouvres le tiroir d'Odile. Des mouchoirs pliés en quatre, des bas reprisés, et tout au fond, enveloppé dans du papier de soie, un petit bonnet de nouveau-né en toile fine, brodé d'un S. Le papier de soie a jauni. Le bonnet est neuf.",
      "Tu refermes le tiroir.",
      "Dans celui de Germain, sous les journaux, une lettre décachetée, d'une écriture pressée. Tu la prends.",
    ],
  },
  K_fond_pris: {
    title: "La chambre d'Odile et de Germain", place: "etage", back: true, fx: { regard: { odile: "hostile" }, attache: { odile: -1 }, geste: "g_fouille_odile" },
    text: [
      "Tu as la main sur le tiroir d'Odile quand le plancher craque derrière toi. Odile est dans l'encadrement de la porte.",
      "« Ferme ce tiroir », dit-elle. Tu le fermes. Elle reste immobile et muette. Elle attend que tu sois sorti{e}, et quand tu passes près d'elle, elle tourne la tête pour ne pas te voir passer.",
    ],
  },
  K_amis: {
    title: "La chambre d'amis", place: "etage",
    text: [
      "La chambre d'amis sent le tabac et l'eau-de-vie. Le docteur a jeté son manteau sur le lit et posé sa sacoche de cuir noir sur la chaise. Le fermoir n'est pas bouclé.",
    ],
    choices: [
      { label: "Ouvrir la sacoche", fx: { geste: "g_fouille_fabre", item: "carnet_fabre" }, to: "K_sacoche" },
      { label: "Laisser la sacoche", back: "H_etage" },
    ],
  },
  K_sacoche: {
    title: "La sacoche du docteur", place: "etage", back: true,
    text: [
      "Des instruments roulés dans une toile, un stéthoscope de bois, des flacons de toutes les tailles bien calés dans leurs logements de feutre. Un logement est vide : la place d'une fiole brune, à côté d'une autre, pleine, qui porte l'étiquette « Laudanum de Sydenham ».",
      "Au fond, un carnet de visites relié de cuir, épais, tenu depuis des années. Tu cherches l'hiver de tes dix-sept ans. Tu trouves la page.",
      "Tu glisses le carnet dans ta poche. Tu le rendras. Peut-être.",
    ],
  },

  // ------------------------------------------------------------------ le grenier
  H_grenier: {
    title: "Le grenier", place: "grenier", hub: true, backName: "le grenier",
    text: [
      { first: true, text: "Le grenier court sous tout le toit. Il y fait aussi froid que dehors, et la lumière entre par deux lucarnes couvertes de neige, grise comme de l'eau de vaisselle. Des malles, des chaises cassées, des bocaux vides, un berceau, et contre la cheminée, la luge rouge de Lucien, debout, les patins en l'air." },
      { again: true, text: "Le grenier, les malles, la luge rouge, ton souffle qui fume." },
    ],
    choices: [
      { label: "Ouvrir les malles de ta mère", hide: { clue: "e_firmin" }, takes: 1, to: "K_malles" },
      { label: "Toucher la luge de Lucien", once: true, fx: { angoisse: 1 }, to: "K_luge" },
    ].concat(go("grenier")),
  },
  K_malles: {
    title: "Les malles", place: "grenier", back: true, fx: { clue: "e_firmin" },
    text: [
      "La première malle contient des robes d'avant ta naissance. La deuxième, des draps. La troisième, du papier : des liasses de lettres classées par années, chacune nouée d'une ficelle.",
      "Ce sont les lettres de ton oncle Firmin, de Varenne. Une par mois, pendant douze ans. Tu en ouvres une au hasard, puis une autre, puis dix.",
      "« Tu me demandes encore comment il va. Il va. Il a eu sa place chez le notaire. » « Tu me demandes encore comment il va. Il a été malade en mars, rien de grave. » « Tu me demandes encore comment il va. Il ne parle jamais de toi. Je ne sais pas si c'est bon signe. »",
      "Firmin écrivait « il » dans toutes les lettres, quel que fût le sujet, à la manière des vieux. Cela n'a pas d'importance. Ce qui en a, c'est qu'elle demandait. Cent quarante-quatre fois.",
    ],
  },
  K_luge: {
    title: "La luge", place: "grenier", back: true,
    text: [
      "La peinture rouge s'écaille. Sur la planche, gravé au couteau par une main d'enfant appliquée, un L et un S entrelacés, et à côté, plus petit, un dessin qui doit être un cheval.",
      { calme: true, text: "Tu passes le pouce sur le cheval. Tu te souviens de lui, couché à plat ventre sur cette luge, criant de joie dans la pente du pré." },
      { trouble: true, text: "Tu passes le pouce sur le cheval, et le bois est mouillé, glacé, comme s'il sortait de l'eau. Tu retires ta main. Le bois est sec." },
    ],
  },

  // ------------------------------------------------------------------ la cour et la scierie
  H_cour: {
    title: "La cour et la scierie", place: "cour", hub: true, backName: "la cour",
    text: [
      { first: true, text: "La cour est un carré de neige piétinée entre la maison, la grange et le bûcher. En contrebas, sur le ruisseau, la scierie : un long hangar de planches noires, la grande roue à aubes prise dans la glace, les piles de grumes sous leur capuchon blanc. Plus loin, derrière le jardin, un sentier descend entre les saules vers l'étang." },
      { again: true, when: "day", text: "La cour, la neige, la scierie muette sur le ruisseau gelé." },
      { again: true, when: "night", text: "La cour, la nuit. La neige éclaire un peu d'elle-même. Les fenêtres de la maison sont des carrés jaunes, et au-delà, plus rien." },
      { after: "C_matin", text: "Le ciel s'est dégagé. On entend, très loin dans la vallée, des voix d'hommes et des pelles : on dégage la route, depuis Saint-Amans." },
    ],
    choices: [
      { label: "Descendre jusqu'à la scierie", when: "day", once: true, to: "K_scierie" },
      { label: "Entrer dans le bûcher", hide: { seen: "K_bucher" }, to: "K_bucher" },
      SLEEP,
    ].concat(go("cour")),
  },
  K_scierie: {
    title: "La scierie", place: "cour", back: true,
    text: [
      "Le hangar sent la résine gelée. La grande scie est arrêtée au milieu d'un tronc de sapin, sa lame prise dans le bois comme dans une mâchoire. Les courroies pendent. Sur l'établi, une boîte de fer pleine de bons de livraison au nom de Vernet, avec des sommes au crayon, raturées, corrigées.",
      "Ton père est mort ici, il y a vingt ans, d'une grume qui a roulé. Tu avais neuf ans, l'âge de Lucien. C'est une chose à laquelle tu n'avais jamais pensé.",
    ],
  },
  K_bucher: {
    title: "Le bûcher", place: "cour", back: true,
    text: [
      "Le bûcher, sous son auvent, est plein jusqu'au toit : des stères de hêtre fendu, rangés comme un mur. Contre la paroi du fond, des outils pendus à des clous. Une hache, des scies, une fourche.",
      "Et une gaffe : une longue perche de frêne terminée par un crochet de fer, comme en ont les bateliers. Elle n'a rien à faire ici, à trois cents pas de toute barque.",
      { calme: true, text: "Le frêne, à un mètre du crochet, est poli par l'usure, comme si des mains l'avaient serré très fort, une fois, longtemps." },
    ],
  },

  // ------------------------------------------------------------------ l'étang
  H_etang: {
    title: "L'étang des Saules", place: "etang", hub: true, backName: "l'étang",
    text: [
      { first: true, text: "L'étang est un ovale de glace grise, grand comme deux prés, fermé par des saules qui laissent tomber leurs branches jusqu'au sol. La neige le recouvre à demi. À l'autre bout, la cabane aux barques, son toit effondré d'un côté. Et près de la berge du nord, là où sort la source, une tache sombre que la neige ne couvre jamais : l'eau qui bouge sous la glace, et la glace plus mince." },
      { first: true, text: "Tu ne voulais pas descendre ici. Tes jambes l'ont fait sans toi." },
      { again: true, when: "day", text: "L'étang, la glace grise, la tache sombre de la source." },
      { when: "night", text: "La nuit, l'étang n'est plus qu'une plaque pâle sous les saules noirs. La glace craque de temps en temps, un bruit long qui court d'une rive à l'autre." },
      { trouble: true, text: "Tu entends, très loin sous la glace, quelque chose qui frappe. Trois petits coups. Tu retiens ton souffle. Plus rien." },
    ],
    fx: { angoisse: 1 },
    choices: [
      { label: "Marcher sur la glace, jusqu'à la source", hide: { seen: "S3_glace" }, to: "K_glace" },
      { label: "Entrer dans la cabane aux barques", to: "K_cabane" },
    ].concat(go("etang")),
  },
  K_glace: {
    title: "La glace", place: "etang", back: true, fx: { angoisse: 1 },
    text: [
      "Tu poses un pied, puis l'autre. La glace tient. Elle est épaisse ici, près de la rive, opaque, pleine de bulles prises comme des perles. Tu avances vers la source. À chaque pas, la glace devient plus claire, plus noire, et tu commences à voir l'eau dessous.",
      "À trois pas de la tache sombre, la glace gémit sous toi.",
    ],
    choices: [
      { label: "T'arrêter et écouter", hide: { seen: "S3_glace" }, to: "S3_glace" },
    ],
  },
  K_cabane: {
    title: "La cabane aux barques", place: "etang", back: true,
    text: [
      { first: true, text: "La cabane aux barques n'abrite plus de barque depuis longtemps. Il reste des cordages pourris, un banc de rameur, une paire d'avirons cassés, et de la neige qui entre par le toit crevé et fait un petit tas pointu au milieu du plancher." },
      { again: true, text: "La cabane, le toit crevé, le petit tas de neige." },
      "Pendue à un clou, au-dessus de la porte, une vieille lanterne de tempête. Son verre est fêlé de haut en bas. Sur le socle de fer, deux lettres marquées au fer chaud : A. S.",
    ],
    fx: { clue: "e_lanterne" },
    choices: [
      { label: "Regarder la poutre au-dessus du banc", hide: { clue: "e_poutre" }, to: "K_poutre" },
    ],
  },
  K_poutre: {
    title: "La poutre", place: "etang",
    text: [
      "Tu la cherchais sans le savoir. La poutre maîtresse, au-dessus du banc, à hauteur de main. Gravées au couteau, profondément, deux initiales : la tienne et un J. Et sous elles, une date. L'hiver de tes dix-sept ans. Le mois de janvier.",
      "Tu poses la main dessus. Le bois est froid, et sous ta paume les lettres sont nettes comme au premier jour.",
    ],
    fx: { clue: "e_poutre" },
    choices: [{ label: "Fermer les yeux", to: "S2_cabane" }, { back: "H_etang" }],
  },

  // ------------------------------------------------------------------ le matin
  N_matin: {
    title: "Le matin", place: "etage", reveil: true, backName: "ta chambre",
    text: [
      { if: { day: 2 }, text: "Tu te réveilles dans ton lit d'enfant, les pieds contre le bois du bout, et pendant une seconde tu as dix ans et tu sens l'odeur du pain. Puis tu te rappelles. Dehors, le vent siffle sous les tuiles. Il neige si fort qu'on ne voit plus la grange." },
      { if: { day: 3 }, text: "Tu te réveilles avant le jour. La maison est silencieuse d'un silence neuf. Tu mets un moment à comprendre : le vent est tombé. Par la fenêtre, le ciel est d'un bleu dur, et la neige brille." },
      { if: { day: { min: 4 } }, text: "Tu te réveilles au son d'une cloche, très loin dans la vallée : celle de Saint-Amans. La route est ouverte. Aujourd'hui, on enterre ta mère." },
    ],
    fxEvery: { rest: true },
    choices: [
      { label: "Descendre", if: { day: { max: 3 } }, hide: { day: { min: 4 } }, to: "H_salle" },
      { label: "T'habiller de noir, et descendre rejoindre les autres", if: { day: { min: 4 } }, hide: { day: { max: 3 } }, fx: { until: 10 }, to: "X_enterrement" },
    ],
  },

  // ------------------------------------------------------------------ panique
  P_panique: {
    title: "La panique",
    text: [
      "Ça vient d'un coup. Ton cœur cogne dans ta gorge, l'air manque, les murs se rapprochent. La maison entière pèse sur ta poitrine : les morts, les vivants, les portes fermées, la neige contre les fenêtres. Il faut sortir. Il faut que tu sortes, tout de suite, n'importe où.",
    ],
    fxEvery: { angoisse: -3 },
    choices: [
      { label: "Pousser la porte et marcher dans la neige, droit devant, loin de cette maison", to: "P_neige" },
      { label: "T'adosser au mur, fermer les yeux, compter tes respirations jusqu'à cent", takes: 1, fx: { angoisse: -2 }, to: "P_respirer" },
    ],
  },
  P_respirer: {
    title: "Cent respirations",
    text: [
      "Une. Deux. Trois. À vingt, tes mains tremblent encore. À cinquante, tu sens le mur dans ton dos, la pierre froide à travers ta chemise. À quatre-vingts, tu entends de nouveau les bruits de la maison : le fourneau, une porte, quelqu'un qui tousse.",
      "À cent, tu ouvres les yeux. Rien n'a changé. Tu peux de nouveau le regarder.",
    ],
    choices: [{ label: "Passer à la cuisine, près du feu", to: "H_cuisine" }],
  },
  P_neige: {
    title: "La neige",
    text: [
      "Tu traverses la cour sans manteau. La neige t'arrive aux genoux, puis aux cuisses. Derrière toi, quelqu'un crie ton nom, une fois. Tu ne te retournes pas.",
      "Le chemin de Saint-Amans a disparu sous la neige, alors tu suis la ligne des poteaux. Tu tombes, tu te relèves. Tu ne sens plus tes pieds au bout d'une heure, ni tes mains au bout de deux. Tu marches.",
    ],
    choices: [{ label: "Marcher encore", to: "F_neige" }],
  },
};
