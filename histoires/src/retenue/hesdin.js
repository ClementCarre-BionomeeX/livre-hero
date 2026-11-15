// Dame Bérangère Hesdin, the eighth night, opened late: by the three things a reader must know to understand her
// (the secret session, Tassin's report, the water at the foot of the wall). She voted against three years ago and
// kept silent. Her night: the dam seen with her own hand, four houses woken to make a Council at two in the morning,
// or the forge men sent against the guard. Seven endings.
var A = "I";
// The houses gathered: Rouvray and Hesdin always; Pons unless he refused; Garnier if he said yes; four make a Council.
var PONS = { not: { has: "voix:pons_non" } }, GARNIER = { has: "voix:garnier" };
var COMPTE = [
  { label: "Réunir la petite salle de l'Hôtel", hide: { count: [PONS, GARNIER], max: 1 }, to: "H_seance" },
  { label: "Descendre au Chat Ferré chercher Malzieu", hide: { not: { count: [PONS, GARNIER], min: 1, max: 1 } }, test: { dom: "social", diff: -10, label: "Faire voter un ivrogne" }, win: { to: "H_seance", fx: { flag: "voix:malzieu" } }, lose: { to: "H_trois_voix" } },
  { label: "Rentrer chez toi", hide: { count: [PONS, GARNIER], min: 2 }, to: "H_trois_voix" },
];
module.exports = {
  _base: {
    voies: {
      forges: { label: "Maîtresse de forges", tip: "Le fer, les hommes qui le battent, et une voix au Conseil.", like: "guerrier", bonus: { social: 30, savoir: 25, combat: 15, nature: 5, discretion: 0, magie: 0 } },
    },
    heroes: {
      hesdin: { arch: "guerrier", time: 21, place: "hauteville", level: 1 },
    },
    companions: {
      hesdin: { name: "Bérangère Hesdin", aspect: { allure: "vieille dame appuyée sur une canne", visage: "foulard sur les cheveux", habits: "robe noire", signe: "canne à la main" }, f: true, desc: "Maîtresse des forges Hesdin, soixante-dix ans. Une voix au Conseil.", face: { age: "ancien", coif: "foulard" } },
    },
    leads: {
      hesdin: { name: "Dame Hesdin", desc: "maîtresse de forges, 21 h, rue Haute", start: "H_forges", fx: { voie: "forges" },
        if: { all: [{ savoir: "proces_verbal" }, { savoir: "tassin" }, { savoir: "veine_vue" }] },
        hint: "Quelqu'un a voté contre, il y a trois ans, puis s'est tu. Il faudra savoir trois choses avant de la suivre." },
    },
  },

  H_forges: { act: A, title: "La maison à l'enclume", place: "hauteville", skip: { to: "H_choix", label: "Tu connais la suite : la roue des forges tourne trop vite", fx: { time: 0.5 } },
    text: [
      "Ta maison est au bout de la rue Haute, contre le rempart. Une enclume de fer sur le linteau, seule, sans autre ornement. Ton bureau est au premier, au-dessus de la cour des forges. Le feu de chêne. Tes deux chiens couchés devant. Tes registres.",
      "Sur ton bureau, l'invitation d'Enguerrand Corlay, à souper ce soir. Tu ne l'as pas ouverte. Tu sais ce qu'il veut : ta voix demain à huit heures, pour la Charge des Vannes. Quatre contre trois, s'il l'a.",
      "Tu as soixante-dix ans. Tu fais travailler cent quarante hommes. Il y a trois ans, dans la petite salle de l'Hôtel, tu as voté contre le secret de la digue. Seule. Puis tu es rentrée chez toi, et tu t'es tue, comme les six autres. Tu te répètes depuis que tu as eu raison de voter contre. Tu évites de te répéter le reste.",
      "Barthélemy, ton maître fondeur, frappe à la porte. Il a les cheveux mouillés.",
      "« Madame. La roue de la forge tourne trop vite. Le canal est plein jusqu'au bord. J'ai jamais vu ça en novembre. Les gars disent que le lac est haut comme au printemps. »",
    ],
    choices: [{ label: "Descendre voir la roue", to: "H_choix", fx: { time: 0.5 } }] },
  H_choix: { act: A, title: "La roue de la forge", place: "hauteville",
    text: [
      "Dans la cour, la roue à aubes tourne dans son coursier, plus vite que tu ne l'as jamais vue tourner, en projetant de l'eau sur les pavés. Le canal des Moulins déborde par-dessus la vanne de la forge.",
      "Au mur de la cour, la vieille échelle de crue de ton père, peinte en rouge. L'eau est au trait du printemps de la grande crue, il y a vingt ans.",
      "Tu penses à la petite salle de l'Hôtel. À la fissure. Au mot de Corlay ce jour-là : *suintement*. Au rapport de Tassin, signé cette semaine, que tu as lu sans le croire.",
      "Il est neuf heures et demie. Dans dix heures et demie, on vote.",
    ],
    choices: [
      { label: "Faire atteler, et monter voir la digue toi-même", to: "H_voiture" },
      { label: "Réveiller trois maisons du Conseil, et en faire quatre avant le jour", to: "H_rouvray" },
      { label: "Rester. Corlay viendra bien te parler, ce soir", to: "H_corlay" },
      { label: "Ouvrir le tiroir où tu ranges ce que tu as noté, il y a trois ans", hide: { has: "hesdin:notes" }, to: "H_notes" },
    ] },
  H_notes: { act: A, title: "Ce que tu as noté", place: "hauteville", fx: { flag: "hesdin:notes" },
    text: [
      "Une feuille, une seule, de ton écriture de comptable. Tu l'as écrite le soir de la séance, en rentrant, et tu ne l'as jamais relue.",
      "*2 octobre. Vellard : fissure, galerie basse, deux mètres. Vider le lac = un an sans moulins. Corlay : mortier. Six pour. Moi contre. Les dettes du fils payées par le Conseil. Vellard a dit merci.*",
      "En bas de la feuille, une ligne que tu avais oubliée : *Je n'ai rien dit en sortant. Pourquoi ?*",
      "Tu as la réponse, maintenant, trois ans après. Tu avais peur de perdre ta place au Conseil, et le marché des hallebardes du guet que Corlay t'avait fait donner l'année d'avant.",
    ],
    choices: [{ label: "Replier la feuille", back: "H_choix" }] },

  // ------------------------------------------------------------------ Corlay comes
  H_corlay: { act: A, title: "Le premier drapier", place: "hauteville", fx: { time: 0.75 },
    text: [
      "Il vient à dix heures et demie, comme tu le pensais, en laissant ses invités au dessert. Tu le reçois dans ton bureau, devant le feu. Tu le laisses debout.",
      "Il parle. Il parle bien : la stabilité, les tisserands, la Charge en de bonnes mains, la digue reprise dans les règles. Tu l'écoutes jusqu'au bout. Tu as toujours écouté les hommes jusqu'au bout. C'est souvent à la fin qu'ils se trahissent.",
      "« Une seule question, Corlay. Vous êtes descendu dans la galerie, vous ? Une fois, dans votre vie ? »",
      "Il ouvre la bouche. Tu le vois chercher. Il a soixante et un ans, une fabrique, neuf cents tisserands, et la réponse lui manque.",
    ],
    choices: [
      { label: "« Ne répondez pas. Montrez-moi quelque chose. » Et le laisser partir", to: "H_corlay_part" },
      { label: "« Montez-y avec moi. Cette nuit. Ma voiture est prête. »", test: { dom: "social", diff: -15, label: "Entraîner Corlay" }, win: { to: "H_voiture", via: "corlay", fx: { flag: "hesdin:corlay" } }, lose: { to: "H_corlay_part" } },
    ] },
  H_corlay_part: { act: A, title: "La porte refermée", place: "hauteville", fx: { time: 0.5 },
    text: [
      "Corlay s'en va. Tu l'entends descendre l'escalier, puis la porte de la rue. Ses pas remontent la rue Haute, vers ses fenêtres allumées.",
      "Barthélemy est resté dans le couloir. Il a tout entendu. Il attend.",
      "Il est onze heures. Tu as attendu qu'on vienne te parler, et on est venu, et tu n'as rien appris que tu ne savais déjà.",
    ],
    choices: [
      { label: "Faire atteler, et monter voir la digue toi-même", to: "H_voiture" },
      { label: "Réveiller trois maisons du Conseil", to: "H_rouvray" },
      { label: "Envoyer Barthélemy et vingt hommes chez Corlay, reprendre ce qu'il garde", if: { savoir: "cle" }, to: "H_force" },
    ] },

  // ------------------------------------------------------------------ to the dam
  H_voiture: { act: A, title: "La voiture des forges", place: "pont", fx: { time: 0.75 },
    text: [
      { via: "corlay", text: "Corlay monte dans ta voiture sans un mot, en habit de soirée. Il regarde par la portière. Tu le regardes, lui." },
      "Ta voiture descend à la porte Saint-Rieul, qu'on t'ouvre, puis le raidillon. Barthélemy est sur le siège à côté du cocher, une corde et une lanterne sur les genoux.",
      "Au milieu du pont des Moulins, un sergent du guet lève la main devant tes chevaux. Il lève sa lanterne vers la portière. Il voit l'enclume peinte. Il voit une vieille dame en noir.",
      "« Ordre du capitaine, Madame. Rien ne monte vers la digue. »",
      "« Je suis le Conseil, sergent. Qui donne les ordres à votre capitaine. »",
      "Il hésite une seconde. Puis il retire sa hallebarde et s'écarte.",
    ],
    choices: [{ label: "Monter à la Maison des Vannes", to: "H_maison_vannes", fx: { time: 1 } }] },
  H_maison_vannes: { act: A, title: "Deux cents marches", place: "digue", fx: { time: 0.5 },
    text: [
      "Deux cents marches. Tu les montes au bras de Barthélemy, avec ta canne, en t'arrêtant tous les vingt pas. Il te faut vingt minutes. Tu ne te plains pas.",
      "Anselme Vellard t'ouvre lui-même, une couverture sur les épaules. Il te reconnaît. Il recule d'un pas, comme devant une apparition.",
      "« Dame Hesdin. »",
      "« Vellard. Il y a trois ans, vous avez dit merci. Moi, je n'ai rien dit du tout. Montrez-moi. »",
      "Il te regarde longtemps. Puis il te dit, d'une voix sans colère, que sa clé est partie à sept heures avec l'apothicaire, qu'elle n'est pas arrivée, et qu'il sait pourquoi.",
    ],
    choices: [
      { label: "Descendre avec lui dans la galerie", to: "H_galerie" },
      { label: "Attendre la clé avec lui, dans sa cuisine", to: "H_attente_vannes" },
    ] },
  H_galerie: { act: A, title: "La main de la dame", place: "digue", fx: { time: 0.75 },
    text: [
      "Barthélemy porte le vieux dans l'escalier de service. Tu descends derrière, une main sur la paroi glacée, ta robe noire relevée dans l'autre.",
      { if: { has: "hesdin:corlay" }, text: "Corlay descend le dernier. Tu l'entends souffler dans l'escalier étroit, et jurer à mi-voix quand l'eau lui prend les jambes." },
      "En bas, l'eau à la taille. Tu entres dedans. Le froid te coupe le souffle. Tu avances jusqu'à la lanterne que le vieux lève.",
      "La veine. Une fente du sol à la voûte, qui pleure une eau trouble. Tu enlèves ton gant. Tu poses ta main nue sur la pierre.",
      "Elle vibre. Un bourdonnement très bas, continu, que tu sens jusque dans les dents. La pierre chante.",
      "« Le pointeau, dit Vellard à Barthélemy. Sous l'eau, à deux pas. Vingt tours à gauche. Et tenir quand il lâche. »",
      "Barthélemy te regarde.",
    ],
    choices: [{ label: "Hocher la tête", test: { dom: "combat", diff: -5, label: "Tenir la corde" }, win: { to: "H_main" }, lose: { to: "H_main", fx: { flag: "barthelemy:blesse" } } }] },
  H_main: { act: A, title: "La dame au gant mouillé", place: "hauteville", end: true, fx: { flag: "foulons:leves", time: 6.5 },
    text: [
      "Barthélemy plonge. Tu tiens la corde avec lui, dans l'eau, à soixante-dix ans, les pieds calés contre la paroi. Au vingtième tour, la vanne se lève avec un bruit de canon, et la corde te brûle les mains.",
      { if: { has: "barthelemy:blesse" }, text: "Barthélemy ressort avec l'épaule démise, le pointeau dans l'autre main. Il serre les dents, comme toujours." },
      { if: { not: { has: "barthelemy:blesse" } }, text: "Barthélemy ressort avec le pointeau dans le poing, en riant comme un homme qui vient de couler une cloche." },
      "Tu envoies ta voiture aux Foulons, avec ordre au cocher de réveiller toutes les maisons au nom des forges Hesdin. À deux heures et demie, le quartier monte.",
      { if: { has: "hesdin:corlay" }, text: "Corlay reste assis sur la dernière marche de l'escalier de service, trempé jusqu'à la poitrine, en habit de soirée. Il regarde ses mains. Tu le laisses à ses mains. Il a compris seul." },
      "À huit heures, tu entres au Conseil dans ta robe noire encore mouillée jusqu'à la taille. Tu ne t'es pas changée. Tu poses ton gant sur la table ovale, taché de sable.",
      "« J'ai mis la main sur la fissure, cette nuit. Il y a trois ans, j'ai voté contre et je me suis tue. Je propose qu'on vide le lac au printemps, et qu'on nomme un garde-vannes qui ne doive rien à personne dans cette salle. »",
      { if: { has: "hesdin:corlay" }, text: "Corlay lève la main le premier." },
      "Le vieux Vellard meurt à midi. Tu fais porter des fleurs de fer forgé sur sa tombe : une roue à douze rayons, que Barthélemy a coulée lui-même.",
    ] },
  H_attente_vannes: { act: A, title: "La cuisine du garde-vannes", place: "digue", fx: { time: 4.5 },
    text: [
      "Tu t'assois dans la cuisine, en face de lui. Il te sert son vin. Vous attendez la clé.",
      "Il te raconte la digue. Ferréol, la pierre, les quarante ans de mesures. Tu lui racontes tes forges. Vous avez le même âge à quatre ans près, et vous ne vous êtes jamais parlé plus de dix minutes en trente ans de Conseil.",
      "Minuit. Une heure. Une rousse trempée monte par l'escalier intérieur, les mains vides. Elle te regarde comme une erreur.",
      "Deux heures. Trois heures. Rien. Une seule lanterne à la fenêtre.",
      "« Il y a un autre moyen, dit le vieux à trois heures et demie. En bas. Il faut un homme qui n'a pas peur de l'eau. »",
      "Barthélemy dort sur une chaise, dans le couloir, la tête contre le mur.",
    ],
    choices: [
      { label: "Réveiller Barthélemy, et descendre", to: "H_galerie_tard" },
      { label: "Rester assise. Tu es venue pour voir", to: "H_temoin" },
    ] },
  H_galerie_tard: { act: A, title: "Quatre heures moins le quart", place: "digue", end: true, fx: { time: 4 },
    text: [
      "Vous descendez tous les quatre. L'eau de la galerie est plus haute qu'à minuit : elle te monte à la poitrine. La veine est plus large. Elle ne pleure plus, elle coule.",
      "Barthélemy plonge. La rousse tient la corde. Tu tiens la lanterne. Vellard compte. Au vingtième tour, la vanne s'ouvre, et le courant manque d'emporter tout le monde.",
      "À quatre heures, la pluie. Le lac descend. Au jour, la Sorge est dans les Foulons jusqu'aux fenêtres, et personne n'a fait lever le quartier. On monte sur les toits. L'eau monte lentement. On a le temps, presque toujours.",
      "Presque. Deux vieux de la rue des Cardeurs, qu'on n'a pas pu sortir à temps. Tu apprends leurs noms à midi, sur le parvis. Tu les écris sur ta feuille de la séance, sous la ligne *Pourquoi ?*.",
      "À huit heures, au Conseil, tu dis tout. On t'écoute. On remet le vote. Tu sais qu'une heure plus tôt, cette nuit, tu aurais pu réveiller Barthélemy. Tu as attendu une clé, par habitude d'attendre que les choses viennent par la bonne porte.",
    ] },
  H_temoin: { act: A, title: "Le témoin", place: "digue", end: true, fx: { time: 2.5 },
    text: [
      "Tu restes assise. Vellard te regarde. Il ne te demande rien. Il retourne à sa fenêtre.",
      "À quatre heures, la pluie. À cinq heures, le sol se met à trembler sous la cuisine, très doucement. Les tasses tintent sur le buffet.",
      "À cinq heures et demie, la digue s'ouvre, au milieu, à trois cents pas de la Maison des Vannes. Tu le vois de la fenêtre. Le mur se fend en long, puis il s'ouvre comme une porte, et tout le lac passe par là, en une seule vague brune qui descend la vallée.",
      "La Maison des Vannes est sur la culée de rocher. Elle tient. Vous êtes debout tous les trois devant la fenêtre, le vieux, la rousse et toi, et vous regardez la ville en bas.",
      "Tu voulais voir. Tu as vu. Tu as la seule chose qui compte devant un tribunal : un témoignage, de tes yeux, au bon endroit, à la bonne heure. Au procès de Corlay, au printemps, on te le demandera, et tu le donneras. On te demandera aussi pourquoi tu as attendu, cette nuit-là, assise, avec ton maître fondeur endormi dans le couloir. Tu donneras la même réponse qu'il y a trois ans. Elle te fera le même effet.",
    ] },

  // ------------------------------------------------------------------ a Council at two in the morning
  H_rouvray: { act: A, title: "Le vieux Rouvray", place: "hauteville", fx: { time: 0.75 },
    text: [
      "La règle des Sept Maisons date de Ferréol : *Quatre maisons réunies font le Conseil, à toute heure, si la ville est en péril.* Personne ne s'en est servi depuis quarante ans. Tu la connais par cœur.",
      "Tu commences par Rouvray, au coin de la rue des Cordiers. Il a quatre-vingts ans. Il vient t'ouvrir lui-même, en bonnet de nuit, une bougie à la main. Tu lui dis la roue de ta forge, l'échelle de crue, la séance d'il y a trois ans.",
      "Le vieux Rouvray pleure. Il pleure comme un enfant, sans cacher son visage. Puis il va chercher son manteau.",
      "« J'ai voté avec Corlay, dit-il. J'ai dit merci à Vellard dans le couloir. Je vais avec vous. »",
    ],
    choices: [{ label: "Aller chez Pons", to: "H_pons", fx: { time: 0.5 } }] },
  H_pons: { act: A, title: "Pons, qui compte", place: "hauteville",
    text: [
      "Pons, le marchand de laines, te reçoit en robe de chambre de soie, dans son salon, avec un verre de cognac à la main. Il écoute. Pons, lui, compte.",
      "« Si on vote cette nuit l'ouverture de la vanne, dit-il, on reconnaît qu'on savait. Il y a trois ans. Nous tous. Moi aussi. » Il fait tourner son cognac. « Vous voulez que je signe ma propre faute, Bérangère. »",
      "« Je veux que vous la signiez avant qu'elle tue quelqu'un. Après, elle aura un autre nom. »",
      "Pons te regarde par-dessus son verre.",
    ],
    choices: [
      { label: "« Ma voix est déjà dedans. La première. »", test: { dom: "social", diff: -5, label: "Décider Pons" }, win: { to: "H_garnier" }, lose: { to: "H_pons_non" } },
    ] },
  H_pons_non: { act: A, title: "Pons refuse", place: "hauteville", fx: { flag: "voix:pons_non", time: 0.25 },
    text: [
      "« Non, dit Pons. Je vous aime bien, Bérangère. Mais non. Demain, à huit heures, je verrai. »",
      "Il te raccompagne à la porte avec une politesse parfaite. Rouvray t'attend dans la rue, sous la lanterne, en se frottant les mains.",
      "Deux voix. Il en faut quatre.",
    ],
    choices: [{ label: "Aller chez Garnier quand même", to: "H_garnier" }] },
  H_garnier: { act: A, title: "Le jeune Garnier", place: "hauteville", fx: { time: 0.5 },
    text: [
      { if: { not: { has: "voix:pons_non" } }, text: "Pons s'habille en jurant contre les vieilles femmes et leurs forges. Vous êtes trois, maintenant, dans la rue Haute, sous une seule lanterne." },
      "Garnier a trente-cinq ans. Il a hérité la maison de son père l'an dernier, et des dettes avec. Il t'ouvre en chemise. Il voit Rouvray derrière toi, il voit l'heure, et il pâlit.",
      "« Madame. Corlay tient mes billets. Mille écus. S'il apprend que j'ai voté cette nuit contre lui… »",
      "Tu le connais depuis qu'il marche. Tu as tenu son père par le bras à l'enterrement de sa mère.",
    ],
    choices: [
      { label: "« Je rachète tes billets demain. Ce soir, tu votes. »", test: { dom: "social", diff: 0, label: "Rassurer Garnier" }, win: { to: "H_garnier_oui", fx: { flag: "voix:garnier" } }, lose: { to: "H_garnier_non" } },
    ] },
  H_garnier_non: { act: A, title: "La porte de Garnier", place: "hauteville", fx: { time: 0.25 },
    text: [
      "Garnier secoue la tête. Il a les larmes aux yeux. « Pardon, Madame. Pardon. » Il referme sa porte. Tu l'entends pousser le verrou.",
      "Tu restes dans la rue Haute, sous la lanterne, avec Rouvray en bonnet de nuit.",
      { if: { not: { has: "voix:pons_non" } }, text: "Et Pons, qui regarde le ciel en attendant que tu décides." },
      { if: { not: { has: "voix:pons_non" } }, text: "Vous êtes trois. Il en faut quatre. Il est une heure. Au Chat Ferré, rue des Orfèvres, on joue encore. Malzieu y descend tous les soirs après les soupers de Corlay. Il signe n'importe quoi quand il a bu." },
      { if: { has: "voix:pons_non" }, text: "Vous êtes deux. Il est une heure du matin, et il n'y a plus de porte où frapper." },
    ],
    choices: COMPTE },
  H_garnier_oui: { act: A, title: "Garnier s'habille", place: "hauteville", fx: { time: 0.25 },
    text: [
      "Garnier te regarde longtemps. Puis il dit : « Demain. Vous les rachetez demain. » Il rentre s'habiller. Il ressort avec son chapeau de travers et ses souliers mal lacés.",
      { if: { has: "voix:pons_non" }, text: "Vous êtes trois, avec Rouvray. Il en faut quatre. Il est une heure. Au Chat Ferré, rue des Orfèvres, on joue encore. Malzieu y descend tous les soirs après les soupers de Corlay. Il signe n'importe quoi quand il a bu." },
      { if: { not: { has: "voix:pons_non" } }, text: "Vous êtes quatre. Rouvray, Pons, Garnier et toi. Quatre maisons." },
    ],
    choices: COMPTE },
  H_seance: { act: A, title: "La petite salle, à deux heures", place: "hauteville", fx: { time: 0.75 },
    text: [
      "La petite salle de l'Hôtel du Conseil, au premier étage. La même table ovale qu'il y a trois ans. Le concierge allume les chandelles en bâillant, en chemise sous sa livrée.",
      { if: { has: "voix:malzieu" }, text: "Malzieu sent le vin. Il s'assoit de travers. Il demande deux fois ce qu'on vote. Tu le lui dis deux fois. Il signe. Tu sais ce que vaut une voix d'ivrogne, et tu sais que la règle de Ferréol n'en demande pas davantage." },
      { if: { has: "voix:garnier" }, text: "Garnier signe le dernier, d'une main qui tremble. Il regarde sa signature comme une dette de plus." },
      "Quatre maisons. Le Conseil. Tu dictes l'ordre toi-même au concierge, qui écrit mieux que vous tous : *Le Conseil des Sept Maisons, réuni en péril, ordonne l'ouverture immédiate de la vanne de fond de la Grande Digue, la levée du quartier des Foulons par le guet, et la remise au garde-vannes de la clé des vannes, en quelque main qu'elle se trouve.*",
      "Tu fais appeler le capitaine Rambert.",
    ],
    choices: [{ label: "Attendre le capitaine", to: "H_rambert" }] },
  H_rambert: { act: A, title: "Le capitaine du guet", place: "hauteville", fx: { time: 0.5 },
    text: [
      "Rambert arrive en tunique mal boutonnée, les yeux gonflés. Il voit la salle, les chandelles, les quatre signatures. Il lit l'ordre. Il le relit.",
      "« Madame. La clé des vannes est chez Monsieur Corlay. »",
      "« Je sais, capitaine. C'est vous qui la lui avez portée. » Tu poses la main sur l'ordre. « Monsieur Corlay est une maison du Conseil. Le Conseil, ce soir, c'est nous. Vous êtes payé par le Conseil. Le reste, on en parlera demain. »",
      "Rambert regarde l'ordre, puis tes mains, puis les trois hommes autour de la table. Il fait ses comptes, lui aussi.",
      "« À vos ordres, Madame. »",
    ],
    choices: [{ label: "Monter avec lui chez Corlay", to: "H_cle_corlay" }] },
  H_cle_corlay: { act: A, title: "La porte de la rue Haute", place: "hauteville", fx: { flag: "foulons:leves", time: 0.75 },
    text: [
      "Rambert frappe à la porte de la maison Corlay avec le pommeau de son épée. Un valet ouvre. Puis Corlay descend, en robe de chambre, Aude derrière lui sur le palier.",
      "Rambert lit l'ordre à voix haute, dans le vestibule, sous le baromètre.",
      "Corlay te regarde. Il comprend tout d'un coup : la règle de Ferréol, les quatre maisons, l'heure. Il a les mains vides et une robe de chambre.",
      "« Vous m'avez battu en pleine nuit, Bérangère. »",
      "« J'ai arrêté de me taire, Enguerrand. Pour vous, ça revient au même. »",
      "C'est Aude qui va chercher la clé au coffre. Elle la met dans les mains de Barthélemy, pas dans celles de Rambert. Barthélemy part à cheval, avec deux hommes du guet. À la même heure, aux Foulons, les hallebardes frappent aux portes.",
    ],
    choices: [{ label: "Attendre le jour à l'Hôtel", to: "H_quatre_voix", fx: { time: 3 } }] },
  H_quatre_voix: { act: A, title: "Quatre maisons", place: "hauteville", end: true, fx: { time: 2 },
    text: [
      "À trois heures et demie, de la fenêtre de la petite salle, tu vois trois lanternes s'allumer au bout de la vallée. À quatre heures, la pluie. Au jour, la Sorge est dans les Foulons jusqu'aux fenêtres basses, le quartier est sur le parvis, et la digue tient.",
      "À huit heures, le Conseil se réunit pour le vote de la Charge. Il y a sept maisons autour de la table, et une nuit entre elles.",
      "Corlay se lève le premier. Il retire sa candidature à la Charge. Il dit qu'il demandera au printemps que le Conseil rende public le procès-verbal d'il y a trois ans. Il le dit d'une voix égale, sans te regarder.",
      { if: { has: "voix:malzieu" }, text: "Malzieu, dégrisé, demande qu'on retire son nom de l'ordre de la nuit. On le lui refuse. Il dira toute sa vie qu'il était ivre, et toute sa vie on lui répondra qu'il a bien voté." },
      { if: { has: "voix:garnier" }, text: "Garnier vient te voir à midi, avec ses billets. Tu les rachètes, comme promis. Tu les brûles devant lui. Tu lui dis que tu les lui rendras quand il aura voté une fois contre toi. Il rit, pour la première fois depuis un an." },
      "On donne la Charge au fils Vellard, à cinq voix contre deux, sous la tutelle d'un ingénieur qui descendra dans la galerie. Le vieux est mort à midi, sans le savoir. Tu sors de l'Hôtel sous la pluie. Tu as soixante-dix ans, et tu as fait, une nuit, ce que tu aurais dû faire un après-midi d'octobre. Les trois ans, tu les laisses de côté ce matin. Tu sais déjà qu'ils reviendront.",
    ] },
  H_trois_voix: { act: A, title: "Il en fallait quatre", place: "hauteville", end: true, fx: { time: 4.5 },
    text: [
      "Tu rentres chez toi à deux heures, au bras de Rouvray, qui pleure encore un peu. Tu le raccompagnes jusqu'à sa porte. Il te serre la main longtemps.",
      "Dans ton bureau, le feu est mort. Tu ne le rallumes pas. Tu t'assois à la fenêtre qui donne sur la vallée.",
      "Barthélemy frappe à trois heures. « Madame. Je peux prendre vingt gars et aller chez Corlay. » Tu lui dis non. Tu lui dis : sans le Conseil, ce sont des forgerons qui enfoncent la porte d'un drapier, et demain on pendra des forgerons. Il s'en va. Tu sais que tu as raison, et tu sais que ça ne suffit pas.",
      "À cinq heures et demie, la digue cède. La vague passe sur les Foulons, sur la rue des Cardeurs, sur le lavoir. Tu la regardes de ta fenêtre. Elle s'arrête au pied du rocher, comme toutes les crues.",
      "À huit heures, le Conseil se réunit dans une ville qui compte ses morts. Tu poses sur la table l'ordre de la nuit, avec ses signatures, et la place vide de la quatrième. Tu dis qui a refusé. Tu le dis sans colère, puisque tu as refusé aussi, il y a trois ans.",
      "Ce que tu as fait cette nuit servira au procès. Ça ne sert à rien d'autre. La règle de Ferréol demandait quatre maisons. Tu en as trouvé trois, et la tienne a trois ans de retard.",
    ] },

  // ------------------------------------------------------------------ the forge men
  H_force: { act: A, title: "Vingt hommes en tablier", place: "hauteville", fx: { time: 0.5 },
    text: [
      "Tu fais sonner la cloche des forges. À onze heures et demie, vingt hommes sont dans ta cour, en tablier de cuir, avec des torches et des barres de fer. Barthélemy devant.",
      "« La maison Corlay garde cette nuit une clé de fer, longue comme un avant-bras, qui appartient au garde-vannes. Allez la chercher. Ne touchez à personne si personne ne vous touche. »",
      "Barthélemy te regarde. « Et si le guet est là, Madame ? »",
      "« Le guet porte vos hallebardes. Il sait ce qu'elles pèsent. »",
    ],
    choices: [{ label: "Les suivre jusqu'à la rue Haute", to: "H_rambert_face" }] },
  H_rambert_face: { act: A, title: "Devant la maison Corlay", place: "hauteville", fx: { time: 0.5 },
    text: [
      "Devant la maison Corlay, six hommes du guet, le capitaine Rambert à leur tête, en manteau. Quelqu'un l'a prévenu. Tes vingt forgerons s'arrêtent à dix pas, les torches levées. Aux fenêtres de la rue Haute, des bonnets de nuit.",
      "« Dame Hesdin, dit Rambert de sa voix douce. Rentrez chez vous. Ceci n'est pas digne d'une maison du Conseil. »",
      "Corlay est à sa fenêtre, au premier étage. Il se tait. Il regarde.",
    ],
    choices: [
      { label: "« Barthélemy. La porte. »", test: { dom: "combat", diff: -10, label: "Forcer la maison" }, win: { to: "H_force_fin" }, lose: { to: "H_force_perdue" } },
    ] },
  H_force_fin: { act: A, title: "La clé prise", place: "digue", end: true, fx: { flag: "foulons:leves", time: 6 },
    text: [
      "Les forgerons passent. Un garde tombe, un forgeron saigne de l'arcade. La porte de la maison Corlay cède au deuxième coup de barre. Barthélemy monte au cabinet, renverse la carte de la vallée, et trouve le coffre fermé. Il le porte dans l'escalier, sur son épaule, comme un sac de charbon.",
      "Dans ta cour, il le force au burin. Dedans, une clé de fer sur une liasse attachée d'un ruban noir. Tu prends les deux.",
      "Barthélemy part à cheval avec la clé. Tu envoies dix hommes aux Foulons, frapper aux portes. À trois heures et demie, au bout de la vallée, trois lanternes. La digue tient.",
      "À huit heures, tu entres au Conseil avec la liasse au ruban noir. Tu la lis. Personne ne t'interrompt.",
      "Puis on t'arrête, parce qu'une maison du Conseil a forcé la porte d'une autre avec vingt hommes et des barres de fer. Tu le savais en sonnant la cloche. On te juge au printemps, en même temps que Corlay. Vous êtes assis sur le même banc, à deux pas l'un de l'autre. Tu es condamnée à une amende que tu paies le jour même. Lui, à tout le reste.",
      "Barthélemy vient te chercher à la sortie du tribunal avec ta voiture. Il a une cicatrice neuve à la main. En silence, il t'aide à monter.",
    ] },
  H_force_perdue: { act: A, title: "Les hallebardes", place: "hauteville", end: true, fx: { time: 5.5 },
    text: [
      "Les forgerons avancent. Le guet baisse ses hallebardes. Rambert crie un ordre. Un forgeron tombe, la cuisse ouverte. Les autres reculent, portant le blessé. Barthélemy reste le dernier, seul devant la porte, une barre de fer à la main. Rambert le fait désarmer et lier.",
      "On te raccompagne chez toi avec des égards. On te laisse ta canne.",
      "Barthélemy passe la nuit au poste, dans la cellule d'à côté d'une courrière des Foulons qu'on a arrêtée sur le pont à neuf heures et demie.",
      "À cinq heures et demie, la digue cède. Tu le vois de ta fenêtre. Le Conseil de huit heures ne parle que de la vague. Corlay parle le premier. Il dit qu'une maison du Conseil, cette nuit, a voulu forcer sa porte. Il dit pourquoi. Il dit que le garde-vannes a caché la fissure trois ans.",
      "Tu te lèves pour répondre. Tu as voté contre, il y a trois ans. Tu t'es tue. Cette nuit, tu as envoyé des forgerons au lieu d'y aller toi-même. Tu cherches par quoi commencer.",
    ] },
};
