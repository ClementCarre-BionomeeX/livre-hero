// Anselme, second pass: Ferréol's stone, the boy of the afternoon errand sent off with the key before the guard is
// set (and what Bastien hears of it), and Dame Hesdin called by letter, who comes up with her master founder.
// Three new endings.
var A = "I";
module.exports = {
  _add: {
    A_galerie: [
      { label: "Lever la lanterne vers la clé de voûte", hide: { has: "anselme:ferreol" }, to: "A_ferreol" },
    ],
    A_fauteuil: [
      { label: "Appeler le gamin qui se chauffe dans la cuisine", if: { lu: "M_tard" }, to: "A_tibo" },
      { label: "Écrire à Dame Hesdin", if: { lu: "J_preuve" }, hide: { has: "anselme:hesdin" }, to: "A_lettre_hesdin" },
    ],
    A_vide: [
      { label: "Ouvrir à la voiture qui monte la route de la Digue", if: { has: "anselme:hesdin" }, to: "A_hesdin_arrive" },
    ],
  },

  A_ferreol: { act: A, title: "La clé de voûte", place: "digue", fx: { flag: "anselme:ferreol" },
    text: [
      "Tu lèves la lanterne. Au sommet de la voûte, au-dessus de la veine, la clé de voûte porte une inscription que tu as lue dix mille fois. Ferréol l'a fait graver de sa main, l'été où il a fermé la digue.",
      "*CE QUE JE RETIENS, QU'UN AUTRE LE RELÂCHE À TEMPS.*",
      "Tu avais huit ans. Tu lui as demandé ce que cela voulait dire. Il a ri. Il a dit : *Ça veut dire que l'eau gagne toujours. Le métier, c'est de choisir le jour où on la laisse gagner.*",
      "La fente de la veine passe à un pied de la clé de voûte. Elle monte vers elle.",
    ],
    choices: [{ label: "Baisser la lanterne", back: "A_galerie" }] },

  // ------------------------------------------------------------------ the boy of the afternoon errand
  A_tibo: { act: A, title: "Le gamin de quatre sous", place: "digue", fx: { time: 0.25 },
    text: [
      "Le gamin qui a porté ton mot à Jacquette cet après-midi est revenu à six heures te dire que c'était fait. Tu l'as laissé se chauffer devant ton poêle, avec du pain et un bol de lait. Il est encore là. Il lit ton almanach, le doigt sous les lignes.",
      "Il s'appelle Tibo. Douze ans. Une sœur courrière, aux Foulons, qui court les rues la nuit pour quatre sous la lettre. Il a des yeux noirs qui regardent tout et gardent leurs questions.",
      "Il est six heures et demie. Le pont est libre. La route est libre. Ce que tu as prévu pour sept heures, avec Ilde, pourrait partir maintenant.",
    ],
    choices: [
      { label: "Lui donner la clé, pour la pierre bleue devant la cabane des Loutres", to: "A_tibo_part" },
      { label: "Le payer, et le renvoyer chez lui", back: "A_fauteuil" },
    ] },
  A_tibo_part: { act: A, title: "Un paquet trop lourd pour un gamin", place: "digue", fx: { time: 0.5 },
    text: [
      "Tu roules la clé dans la toile cirée. Tu la lui mets dans les bras. Il plie un peu les genoux sous le poids, et il se redresse aussitôt, vexé.",
      "« La cabane des Loutres, en bas, au pied de la digue. La pierre peinte en bleu, devant la porte. Tu mets ça dessous, dans la paille. Tu ne le dis à personne. À personne, Tibo. Pas même à ta sœur. »",
      "Il hoche la tête. Il demande : « C'est quoi ? »",
      "« La clé de la digue. »",
      "Il serre le paquet plus fort. Il descend l'escalier de la digue en comptant les marches à voix haute. Tu l'entends jusqu'à cent douze. Puis le vent couvre sa voix.",
      "À sept heures, on frappe. Ilde, son panier, ses genoux. Dans la pièce d'à côté, la porte est entrouverte. Bastien dort sur le banc, la respiration trop régulière.",
    ],
    choices: [
      { label: "Tout dire à Ilde, à voix haute, comme d'habitude", to: "A_dit_haut" },
      { label: "Lui écrire sur l'ardoise du baromètre, et effacer", to: "A_ardoise" },
    ] },
  A_dit_haut: { act: A, title: "Tout haut", place: "digue", fx: { time: 3 },
    text: [
      "Tu dis tout à Ilde, dans l'ordre, de ta voix de garde-vannes, celle qui porte au-dessus du bruit de l'eau. La veine. L'orage. La clé partie avec le gamin, sous la pierre bleue. Jacquette qui la trouvera en rentrant. Trois heures, la vanne. Deux heures, les Foulons.",
      "Ilde t'écoute. Ses yeux vont une fois vers la porte entrouverte. Tu es trop occupé à parler pour le remarquer.",
      "Elle redescend à huit heures moins le quart. Tu restes seul. Tu prépares tes lanternes. Le banc, dans la pièce d'à côté, est vide. Il est parti sans un bruit.",
      "À dix heures, par ta fenêtre, tu vois deux lanternes descendre la route de la Digue depuis le pont, vite, et s'arrêter au pied du mur, devant la cabane. Elles restent là longtemps. Puis elles remontent vers la ville.",
    ],
    choices: [{ label: "Attendre Jacquette", to: "A_cabane_gardee" }] },
  A_cabane_gardee: { act: A, title: "La pierre retournée", place: "digue", end: true, fx: { time: 4 },
    text: [
      "Jacquette monte à minuit. Elle a le visage blanc. Elle a trouvé la pierre bleue retournée, la paille éparpillée, et des empreintes de bottes partout devant sa porte.",
      "« Le guet, dit-elle. Ils savaient où chercher. »",
      "Tu regardes la porte de la pièce d'à côté. Le banc vide. Tu comprends, et Jacquette te voit comprendre. Elle détourne les yeux, par pitié.",
      "Vous restez dans la cuisine. Elle parle d'un autre moyen. Tu lui parles du pointeau. Elle veut descendre. Tu sais ce que coûte cette descente pour qui la fait la première fois, avec l'eau à la taille, à deux pas de la veine.",
      "Ce que vous déciderez à trois heures, et ce que le gamin de quatre sous fera quand il saura que sa cachette a servi pour rien, la nuit le dira à d'autres. Toi, tu as dit ton secret tout haut, une fois de trop, dans une maison où ton fils écoutait. Quarante ans de digue t'ont appris à mesurer l'eau. Pour mesurer un fils, tu n'as eu aucun maître.",
    ] },
  A_ardoise: { act: A, title: "L'ardoise", place: "digue", fx: { time: 0.5 },
    text: [
      "Tu dis tout haut : la veine, l'orage, la vanne à trois heures, les Foulons à deux. Tu dis tout haut : « La clé est ici. Jacquette viendra la chercher. »",
      "Puis tu prends la craie, et sur l'ardoise pendue sous le baromètre, là où tu notes la pression chaque matin, tu écris en petites lettres : *Partie avec le gamin. Pierre bleue.* Tu tournes l'ardoise vers Ilde.",
      "Elle lit. Elle lève les yeux vers la porte entrouverte de la pièce d'à côté. Puis vers toi. Tu effaces avec ta manche.",
      "« Bien, dit Ilde tout haut. Je ferai lever les Foulons. »",
      "Elle redescend à huit heures moins le quart. À huit heures, le banc d'à côté est vide.",
    ],
    choices: [{ label: "Préparer les lanternes, et attendre", to: "A_tibo_nuit", fx: { time: 3.5 } }] },
  A_tibo_nuit: { act: A, title: "Les gardes cherchent", place: "digue", fx: { time: 3 },
    text: [
      "À onze heures et demie, deux gardes du guet frappent à ta porte. Ils ont un ordre du capitaine Rambert : saisir une clé de fer, dans la Maison des Vannes. Ils fouillent la cuisine, le buffet, le coffre à bois, la chambre, le banc vide. Ils soulèvent ta couverture en s'excusant.",
      "Tu les laisses faire. Tu leur sers du vin. Ils repartent à une heure, bredouilles, pour aller dire au capitaine qu'il s'est trompé.",
      "Une heure et demie. On gratte à la porte de l'escalier intérieur. Jacquette, trempée, la toile cirée dans les bras. Derrière elle, à moitié caché dans sa jupe de passeuse, un gamin de douze ans qui claque des dents.",
      "« Il était dans mes roseaux, dit Jacquette. Il gardait sa pierre. Il a attendu six heures, dans le froid, sans bouger. Il dit qu'on lui a dit : à personne. »",
    ],
    choices: [{ label: "Descendre à la vanne, tous les trois", to: "A_tibo_fin" }] },
  A_tibo_fin: { act: A, title: "Le troisième rayon", place: "digue", end: true, fx: { flag: "foulons:leves", time: 5 },
    text: [
      "Tu tournes la clé dans le moyeu. Jacquette prend un rayon. Tu prends l'autre, avec tes mains qui tremblent. Tibo prend le troisième, de ses deux mains d'enfant, et il pousse de tout son poids.",
      "Au quinzième tour, la digue rugit. Tibo crie de peur, puis de joie. Au quarantième, il s'endort par terre, contre la roue, avant que tu aies lâché ton rayon.",
      "À deux heures, en bas, la cloche du lavoir sonne. Ilde a fait lever les Foulons.",
      "Au jour, il pleut. Le lac descend. Tu allumes les deux autres lanternes, pour la forme, parce que tu l'avais promis. Puis tu regardes le gamin dormir sur le banc de la pièce d'à côté, sous ta couverture, à la place de ton fils.",
      "Bastien remonte à huit heures. Il voit la clé dans le moyeu, le lac qui baisse, le gamin sur son banc. Il comprend ce qu'il a vendu, et ce qui a échappé à la vente. Il s'assoit par terre, dans l'embrasure de la porte.",
      "Tu meurs à midi. Avant, tu donnes à Tibo ta règle de laiton, celle de quarante ans de mesures. Tu lui dis qu'il s'en servira mieux que toi. Tu dis à Bastien de le ramener chez lui, aux Foulons, à pied, par la route. Tu sais que la route est longue, et qu'il faudra bien se parler.",
    ] },

  // ------------------------------------------------------------------ Dame Hesdin
  A_lettre_hesdin: { act: A, title: "À Dame Hesdin", place: "digue", fx: { flag: "anselme:hesdin", time: 0.5 },
    text: [
      "Tu prends ton écritoire sur tes genoux. Ta main tremble. Tu écris lentement, en appuyant.",
      "*Madame,*",
      "*Il y a trois ans, vous avez voté contre. Vous êtes la seule. Ce soir, la fissure que vous avez refusé de taire va céder. J'ouvrirai la vanne cette nuit, si on me laisse faire. Si on m'en empêche, il faudra quelqu'un pour voir. Montez. Je ne vous ai jamais rien demandé.*",
      "*A. V.*",
      "Tu plies la lettre. Tu la cachettes de cire verte. Tu la confies au charretier du moulin Brûlé, qui remonte à la Haute-Ville avant la fermeture de la porte. Il la portera rue Haute, à la maison à l'enclume.",
      "Tu sais comment est Dame Hesdin. Elle lit une lettre trois fois. Elle attend la réponse de sa conscience comme celle d'un fournisseur. Elle viendra tard, si elle vient.",
    ],
    choices: [{ label: "Revenir au flacon", back: "A_fauteuil" }] },
  A_hesdin_arrive: { act: A, title: "La voiture des forges", place: "digue", fx: { time: 0.25 },
    text: [
      "Une voiture monte la route de la Digue, deux lanternes à la caisse, avec une enclume peinte sur la portière. Elle s'arrête au pied des deux cents marches.",
      "Dame Hesdin monte. Elle a soixante-dix ans et une canne. Elle met vingt minutes. Derrière elle, un colosse en tablier de cuir porte une lanterne et une corde : Barthélemy, son maître fondeur.",
      "Elle entre dans ta cuisine sans frapper. Elle voit Jacquette, trempée, les mains vides. Elle te voit, toi.",
      "« Votre lettre, Vellard. Je l'ai lue trois fois. Montrez-moi. »",
    ],
    choices: [{ label: "Descendre avec eux à la galerie", to: "A_hesdin_galerie" }] },
  A_hesdin_galerie: { act: A, title: "La dame dans l'eau", place: "digue", fx: { time: 1 },
    text: [
      "Barthélemy te porte dans l'escalier de service comme un enfant. Dame Hesdin descend derrière, une main sur la paroi, la robe noire relevée. Jacquette ferme la marche.",
      "En bas, l'eau à la taille. Dame Hesdin y entre sans un cri. Elle avance jusqu'à la veine. Tu lèves la lanterne. Elle pose sa main gantée sur la pierre qui pleure, et elle l'y laisse.",
      "« Le pointeau, dis-tu à Barthélemy. Sous l'eau, à deux pas. Un volant de bronze. Il faut tourner à gauche, vingt tours, et tenir quand il lâche. »",
      "Barthélemy regarde sa maîtresse. Elle hoche la tête. Il ôte son tablier.",
    ],
    choices: [
      { label: "Le guider, la corde passée dans l'anneau", test: { dom: "savoir", diff: 0, label: "Guider un plongeur" }, win: { to: "A_forgeron" }, lose: { to: "A_forgeron", fx: { flag: "barthelemy:blesse" } } },
    ] },
  A_forgeron: { act: A, title: "Le témoin", place: "digue", end: true, fx: { flag: "foulons:leves", time: 4.5 },
    text: [
      "Barthélemy plonge. Jacquette tient la corde. Toi, tu comptes les tours à voix haute, à mesure qu'il remonte pour respirer. Au vingtième, la vanne se lève avec un bruit de canon. L'eau de la galerie part d'un coup vers le fond.",
      { if: { not: { has: "barthelemy:blesse" } }, text: "La corde tient. Barthélemy ressort de l'eau, le pointeau dans le poing, en riant comme un homme qui vient de couler une cloche." },
      { if: { has: "barthelemy:blesse" }, text: "La corde file. Barthélemy est jeté contre la paroi. Jacquette le rattrape par le col. Il ressort avec l'épaule démise et le pointeau dans l'autre main, sans un cri." },
      "Dame Hesdin est restée immobile. Elle a toujours la main sur la veine. Elle sent la pierre changer de chant sous son gant.",
      "Elle envoie sa voiture aux Foulons, à deux heures et demie, avec ordre à son cocher de réveiller toutes les maisons au nom des forges Hesdin. Puis elle s'assoit dans ta cuisine, trempée jusqu'à la poitrine, et elle accepte un verre de ton vin.",
      "Au jour, le lac descend. Les Foulons sont dans l'eau, et le quartier sur le parvis. À huit heures, Dame Hesdin entre au Conseil avec sa robe noire encore mouillée jusqu'à la taille, telle qu'elle est sortie de la galerie. Elle dit qu'elle a mis la main sur la fissure, cette nuit, et elle montre son gant, taché de sable.",
      "Tu meurs à midi. Avant, tu as le temps d'apprendre que le vote est remis, et que le lac sera vidé au printemps. Ferréol l'avait écrit dans la pierre. Tu as choisi le jour.",
    ] },
};
