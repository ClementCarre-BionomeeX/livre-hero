// The people of the college and of the port: what they say when one comes to them (at their hours, see base.js
// `people.at`), what they do when one shows them a document (`confront`), the rumours of the refectory and of the quays,
// and the two ways of being caught at night.
module.exports = { rumors: {
  refectoire: [
    { id: "r_salvanhac", true: true, text: "Un élève de troisième année raconte que Maître Salvanhac était, il y a dix ans, le plus grand maître de l'Encre du royaume, que le roi lui-même lui écrivait, et qu'il a commencé à oublier il y a trois ans, d'un coup, comme une maison qui perd ses tuiles." },
    { id: "r_the", true: true, text: "« Le Recteur est un saint, dit une fille de deuxième année. Il a repris le thé du jeudi pour les vieux maîtres il y a trois ans, et il le sert lui-même. »" },
    { id: "r_cabinet", true: false, text: "On jure, à la table des deuxièmes années, que le cabinet scellé de la bibliothèque garde la tête d'un ancien recteur dans un bocal d'alcool, et qu'elle parle les nuits de pleine lune." },
    { id: "r_valerien", true: true, text: "On dit que Valérien de Vaucombe a quitté l'académie de la capitale après un duel où il a crevé l'œil d'un fils de duc, et que son oncle l'a pris au collège pour étouffer l'affaire." },
    { id: "r_vilmorin", true: false, text: "Un garçon assure que Maître Vilmorin vend les sujets d'examen aux élèves riches pour payer ses dettes de jeu. Son voisin lui dit qu'il a lu ça dans un roman." },
    { id: "r_jodoc", true: true, text: "« Le grand roux ? dit quelqu'un. C'est sa troisième première année. Il grave mieux que Mère Fage, mais le jour de l'examen, il pleure comme un veau. »" },
    { id: "r_examen", true: true, if: { day: { min: 7 } }, text: "Un élève de quatrième année raconte que l'examen sur la digue est une idée du Recteur, et que Dame Castagnet s'y est opposée en conseil, la seule voix contre." },
    { id: "r_concert", true: false, if: { day: { min: 9 } }, text: "On dit que la tempête a été envoyée par un collège rival, qui voudrait voir Hautsignes sous l'eau." },
  ],
  port: [
    { id: "p_noyee", true: true, text: "Un vieux pêcheur dit que la digue a coûté une vie, la nuit de la première épreuve : une fille du port, une élève du collège, que la mer a prise au pied des blocs. « On n'en parle pas, ajoute-t-il. Ça porte malheur aux barques. »" },
    { id: "p_maud", true: true, text: "Une marchande de moules raconte que Maud, la poissonnière, descend chaque semaine au pied de la digue, par tous les temps, et revient les yeux rouges." },
    { id: "p_recteur", true: false, text: "On raconte sur les quais que le Recteur a refusé la main d'une princesse pour rester au collège, et qu'il garde son portrait dans un médaillon." },
    { id: "p_signes", true: true, if: { seen: "B_tempete" }, text: "Les pêcheurs disent que les signes s'usent, que la Tête a lâché la première, et que la digue ne passera pas trois hivers de plus si personne ne sait la refaire." },
    { id: "p_vilmorin", true: true, text: "Le droguiste dit que Maître Vilmorin lui doit quarante livres depuis la Saint-Martin, et qu'il paiera « au printemps », comme tous les ans." },
  ],
}, passages: {
  // ------------------------------------------------------------------ Valérien
  T_valerien: {
    title: "Valérien de Vaucombe", back: true, montrer: "valerien",
    text: [
      { first: true, text: "Valérien referme son livre sur un doigt et te regarde de bas en haut, comme on regarde une bête au marché. « Le berger. Tu t'es perdu ? Les moutons sont en bas, vers le port. »" },
      { again: true, before: "A_defi", text: "Valérien garde son livre ouvert. « Encore toi. Tu as quelque chose à me dire, ou tu aimes mon profil ? »" },
      { after: "val:battu", before: "B_duel", text: "Valérien te regarde venir avec une haine tranquille. « Une fois, dit-il. Une fois, avec de la chance et une baguette de village. »" },
      { after: "A_duel_perdu", before: "B_duel", text: "Valérien sourit en te voyant. « Tu viens prendre une autre leçon ? Je suis bon prince : je ne fais pas payer. »" },
      { after: "B_duel", before: "C_valerien", text: "Valérien lève les yeux de son livre, et pour une fois, il garde ses méchancetés pour lui. Il a l'air fatigué. « Qu'est-ce que tu veux ? »" },
      { again: true, after: "A_refus", before: "B_duel", text: "Valérien te regarde passer comme on regarde un meuble qu'on a déjà vu. « Tiens. Le berger prudent. »" },
      { after: "C_valerien", if: { not: { has: "valerien:allie" } }, text: "Valérien ferme son livre quand tu approches. « On a tout dit, toi et moi, dit-il. Le reste se dira sur la digue. »" },
      { if: { has: "valerien:allie" }, text: "Valérien te fait de la place sur le banc du puits. Il parle peu, ces soirs-là. Il regarde la fenêtre éclairée du logis de son oncle, et parfois, il te demande de lui lire une page du cahier de Solène." },
      { after: "B_duel_neveu", before: "C_valerien", once: true, text: "Il ajoute, sans te regarder : « Ce que tu as vu, après le duel. Tu le gardes pour toi. »" },
    ],
    choices: [
      { label: "Lui demander s'il compte te battre un jour", if: { trait: "audace", min: 2 }, hide: { any: [{ seen: "B_duel" }, { seen: "K_val_provoque" }] }, fx: { trait: { audace: 1 } }, to: "K_val_provoque" },
      { label: "Lui parler de son oncle", after: "B_duel", hide: { any: [{ seen: "K_val_oncle" }, { seen: "C_valerien" }] }, to: "K_val_oncle" },
    ],
  },
  K_val_provoque: {
    title: "Valérien de Vaucombe", back: true,
    text: [
      "Valérien pose son livre sur le rebord de la fenêtre, très lentement. « Me battre ? » Il rit, d'un rire bref et sans gaieté. « Le berger me lance un défi. Ce collège tombe vraiment bien bas. »",
      "Tout le couloir s'est tu. Il se penche vers toi et parle plus bas, pour toi seul{e}. « Garde ta langue pour le jour où tu sauras t'en servir. Ce jour-là, je serai là. »",
    ],
    fx: { regard: { valerien: "hostile" } },
  },
  K_val_oncle: {
    title: "Valérien de Vaucombe", back: true,
    text: [
      "Tu lui demandes, simplement, ce que c'est d'être le neveu du Recteur.",
      "Valérien te regarde longtemps. « Mon père est mort quand j'avais six ans. Mon oncle m'a élevé. Il m'a appris à lire dans le livre de la digue. Il m'a appris le Verre, l'escrime, le latin, et à ne jamais montrer qu'on a peur. » Il tourne une page de son livre sans la lire. « Tout le monde ici l'aime. Moi aussi, je l'aime. C'est un grand homme. »",
      "Il le dit comme une leçon apprise par cœur, très vite, et il retourne à sa lecture.",
    ],
    fx: { regard: { valerien: "neutre" } },
  },
  K_valerien_verite: {
    title: "Ce que lit Valérien", back: true,
    text: [
      "Valérien prend le document du bout des doigts, prêt à rire. Il lit. Il ne rit plus.",
      { if: { item: "cahier" }, text: "Il tourne les pages du cahier une à une, lentement, d'abord avec méfiance, puis avec une sorte d'avidité. Il connaît ces signes : il les a appris enfant, sur les genoux de son oncle, dans le grand livre de la digue. Ici, ils sont tracés d'une autre main, avec des ratures, des essais manqués, des notes en marge. Des brouillons. Les brouillons de quelqu'un d'autre." },
      { if: { item: "page" }, text: "Il lit la page recollée trois fois. Son doigt s'arrête sur la dernière ligne, sur le nom de son oncle, écrit là comme témoin, en petit, sous celui d'une élève de quatrième année." },
      "Il te rend le document. Ses mains tremblent. « Il me racontait la nuit de la première épreuve, dit-il. La tempête, le chant, les pierres qui s'éveillent. Je la connais par cœur, cette histoire. Il ne m'a jamais parlé d'une fille. »",
      "Il se lève. Il marche jusqu'à la fenêtre, revient. « Qu'est-ce que tu veux faire de ça ? » Tu le lui dis. Il hoche la tête plusieurs fois, comme quelqu'un qui accepte un coup.",
      "« Alors je serai à côté de toi, dit-il. Mon oncle doit l'apprendre de ma bouche autant que de la tienne. »",
    ],
    fx: { flag: "valerien:allie", regard: { valerien: "allie" }, quest: "III_valerien", ep: ["histoire", 800] },
  },
  K_valerien_doute: {
    title: "Valérien de Vaucombe", back: true,
    text: [
      "Valérien lit la ligne déchiffrée, puis te regarde. « Le cabinet scellé. C'est tout ? Un vieux maître qui perd la tête écrit deux mots dans un carnet, et toi, tu en fais une histoire. » Il te rend le papier. « Va dormir, berger. »",
    ],
  },

  // ------------------------------------------------------------------ Maître Salvanhac
  T_salvanhac: {
    title: "Maître Salvanhac", back: true, montrer: "salvanhac",
    text: [
      { first: true, text: "Maître Salvanhac est assis à son bureau, au fond de la salle de l'Encre, une plume à la main au-dessus d'une feuille blanche. Le merle est perché sur l'encrier. Le vieux maître lève vers toi des yeux d'un bleu très pâle, très doux. « Entrez, entrez. Vous êtes de quelle année ? Pardonnez-moi, j'ai si mauvaise mémoire des visages. »" },
      { first: true, text: "Il t'écoute avec une attention extrême, la tête un peu penchée, comme s'il voulait garder chacun de tes mots. Puis il parle de l'Encre, longtemps, et tu ne vois pas passer l'heure. Quand tu pars, il te demande ton nom pour la troisième fois." },
      { again: true, before: "B_hiver", text: "Le vieux maître te reconnaît, ou fait semblant. « Ah, vous voilà. Asseyez-vous. Le merle vous aime bien : regardez, il ne s'envole pas. »" },
      { again: true, after: "B_hiver", before: "salvanhac:protege", text: "Maître Salvanhac te regarde entrer avec une politesse inquiète. Il a sur la table trois feuilles couvertes du même début de phrase. « Je cherchais quelque chose, dit-il. Vous ne savez pas quoi, par hasard ? »" },
      { again: true, after: "salvanhac:protege", text: "Maître Salvanhac te reconnaît dès la porte. Il a meilleure mine. « Je dors mieux, dit-il. Et je me souviens de mes rêves, ce qui ne m'était pas arrivé depuis longtemps. »" },
    ],
    choices: [
      { label: "Lui proposer de porter ses livres jusqu'à sa chambre", hide: { seen: "K_chambre_salvanhac" }, takes: 1, to: "K_chambre_salvanhac" },
    ],
  },
  K_chambre_salvanhac: {
    title: "La chambre du maître", place: "salles", back: true,
    text: [
      "La chambre de Maître Salvanhac est au dernier étage de l'escalier des maîtres, une pièce mansardée encombrée de livres, de papiers et de cages ouvertes. Une seule fenêtre donne sur la mer et, tout en bas, sur la digue entière, de la ville jusqu'à la Tête.",
      "Aux murs, des dizaines de portraits au fusain, des visages de jeunes gens et de jeunes filles, chacun avec une date dans un coin. « Mes élèves, dit le vieux maître. Les meilleurs. Je les dessine le jour où ils me dépassent. » Il en touche un, puis un autre. « Celui-ci est maître à Valcourt. Celle-ci… » Il s'arrête, le doigt levé. « Celle-ci, je ne sais plus. »",
      "C'est une jeune fille aux cheveux tirés, au visage mince, qui sourit à moitié comme quelqu'un qui va dire une insolence. Pas de nom. Une date : l'an trente du collège.",
      "Le merle se pose sur le cadre, penche la tête, et siffle deux notes claires, toujours les mêmes, qui ressemblent à un nom : « So-lè. So-lè. » Le vieux maître le regarde avec tendresse. « Il siffle ça depuis toujours. Je ne sais pas où il l'a appris. »",
    ],
    fx: { clue: "o_merle", regard: { salvanhac: "cordial" } },
  },
  K_salvanhac_cahier: {
    title: "Maître Salvanhac et le cahier", back: true,
    text: [
      "Tu poses le document devant le vieux maître. Il chausse ses lunettes, se penche, et reste ainsi un long moment, immobile.",
      { if: { has: "salvanhac:protege" }, text: "Puis ses épaules se mettent à trembler. Il pose la main à plat sur la page, comme on pose la main sur l'épaule de quelqu'un. « Solène, dit-il. Solène Arlaud. Elle avait dix-sept ans et elle était meilleure que moi. Je l'ai laissé prendre ça. Je l'ai laissé faire, trente ans. » Il relève la tête, et ses yeux pâles sont pleins de larmes et parfaitement clairs. « Je parlerai. Le jour où il faudra, je serai debout. »" },
      { if: { not: { has: "salvanhac:protege" } }, text: "Puis il sourit, d'un sourire égaré et doux. « Quelle belle main, dit-il. Une main de quatrième année, au moins. Qui est-ce ? Je devrais le savoir. » Il cherche, les sourcils froncés. Le merle saute sur la page et siffle. Le vieux maître secoue la tête. « Non. C'est parti. Pardonnez-moi. »" },
    ],
  },
  K_salvanhac_main: {
    title: "Maître Salvanhac et le traité", back: true,
    text: [
      "Tu lis au vieux maître la page que tu as recopiée. Il écoute, poliment, en hochant la tête aux bons endroits.",
      "Quand tu as fini, il regarde le dos de sa main gauche, longuement, la peau fine et tachée, les veines bleues. Il le frotte avec le pouce. « Le Recteur est mon ami, dit-il. Mon plus vieux ami. Il me sert le thé lui-même, chaque jeudi. » Il frotte encore. « J'ai écrit quelque chose, un jour, à propos du thé. Je ne sais plus quoi. »",
    ],
  },

  // ------------------------------------------------------------------ Dame Castagnet
  T_castagnet: {
    title: "Dame Castagnet", back: true, montrer: "castagnet",
    text: [
      { first: true, text: "Dame Castagnet te reçoit dans son bureau, une pièce nue avec une table, deux chaises et un diapason d'argent posé sur un coussin. Elle te laisse debout. Elle écoute ce que tu as à dire, les mains croisées, les yeux dans les tiens." },
      { first: true, text: "« Bien, dit-elle quand tu as fini. Vous êtes ici grâce à votre bourse, donc grâce à la ville, donc grâce à la digue. Souvenez-vous-en. Travaillez. Ne vous faites pas remarquer. Ce sera tout. »" },
      { again: true, before: "B_tempete", text: "Dame Castagnet lève les yeux de son registre et attend. Elle a toujours l'air d'attendre." },
      { again: true, after: "B_tempete", text: "Dame Castagnet a encore la voix voilée depuis la nuit de la tempête. Elle te fait signe d'entrer, et pour la première fois, elle te désigne une chaise." },
      { after: "marche:the3", once: true, text: "« Maître Salvanhac m'a demandé ce matin où était sa mère, dit-elle d'une voix sans expression. Sa mère est morte il y a cinquante ans. J'ai repris ses cours. Personne ne le remplacera. »" },
    ],
  },
  K_castagnet_preuve: {
    title: "Dame Castagnet", back: true,
    text: [
      "Dame Castagnet prend le document que tu lui tends, le lit, et le pose sur la table, bien à plat, d'un seul doigt.",
      { if: { all: [{ item: "cahier" }, { item: "page" }] }, text: "Elle reste longtemps silencieuse. Puis elle se lève, va à la fenêtre, et regarde la digue. « J'étais en deuxième année, dit-elle sans se retourner. Je chantais dans le chœur, la nuit de la première épreuve. Je me souviens d'une fille de quatrième année qui courait sur les blocs avec une lanterne, sous la pluie. Le lendemain, on nous a dit qu'elle était tombée. Le surlendemain, on nous a dit qu'Évariste avait tout dessiné. Je n'ai pas fait le lien. J'avais quinze ans. » Elle se retourne. « J'en ai soixante. Faites ce que vous avez à faire. Je serai sur l'estrade, et je ne vous laisserai pas couper la parole. »" },
      { if: { not: { all: [{ item: "cahier" }, { item: "page" }] } }, text: "« Écoutez-moi bien, dit-elle. Ce que vous me montrez là, c'est un soupçon. Un élève qui accuse le Recteur sur un soupçon est renvoyé le soir même, et il a de la chance si on ne le poursuit pas. Vous avez peut-être raison. Il vous faut des pièces indiscutables. Des pièces écrites. » Elle te rend le document. « Et maintenant, sortez. Je ne vous ai pas vu{e}. »" },
    ],
    choices: [
      { label: "La remercier", if: { all: [{ item: "cahier" }, { item: "page" }] }, hide: { not: { all: [{ item: "cahier" }, { item: "page" }] } }, fx: { flag: "castagnet:allie", regard: { castagnet: "allie" } }, back: "H_salles" },
    ],
  },

  // ------------------------------------------------------------------ Maître Vilmorin
  T_vilmorin: {
    title: "Maître Vilmorin", back: true, montrer: "vilmorin",
    text: [
      { first: true, text: "Maître Vilmorin t'accueille comme un vieil ami. Il fait asseoir tout le monde, offre des dragées d'un cornet froissé, raconte trois histoires de cour qui font rire même ceux qui ne les comprennent pas. « Le Verre, dit-il, c'est l'art de montrer aux gens ce qu'ils veulent voir. Le plus difficile, c'est de savoir ce qu'ils veulent. »" },
      { again: true, text: "Maître Vilmorin te salue d'un reflet : ton propre visage apparaît une seconde dans la vitre derrière lui, et te fait un clin d'œil." },
      { after: "B_duel", once: true, text: "« Ton duel contre le jeune Vaucombe, dit-il. Je l'ai regardé deux fois en pensée. Tu sais ce qui m'a frappé ? Il ne joue plus contre toi. Il joue contre ce que tu as fait la fois d'avant. Un jour, il faudra que tu le surprennes. »" },
    ],
  },
  K_vilmorin_cahier: {
    title: "Maître Vilmorin", back: true,
    text: [
      "Vilmorin feuillette le document en sifflotant, puis il s'arrête de siffler. Il te regarde par-dessus, et pour une fois, il a le visage grave.",
      "« Je suis arrivé au collège il y a dix ans, dit-il. Je ne sais rien de ce qui s'est passé ici avant moi. Je sais seulement une chose : notre Recteur, le jour où un signe de la digue a cédé, est resté planté devant comme un illettré devant une affiche. » Il te rend le document. « Je dois de l'argent à tout le monde. Je n'ai pas le courage d'un lion. Mais pour l'examen, je peux t'apprendre à voir la lumière dans la pierre. Viens après les cours. Le reste, tu le feras seul{e}. »",
    ],
    fx: { flag: "vilmorin:aide", pratique: { magie: 2 } },
  },

  // ------------------------------------------------------------------ Sœur Mélisande
  T_melisande: {
    title: "Sœur Mélisande", back: true, montrer: "melisande",
    text: [
      { first: true, text: "Sœur Mélisande tourne vers toi son oreille droite, celle qui entend. Elle est petite, voûtée, vêtue de gris, et ses mains de colleuse sentent la colle de peau. « Qu'est-ce que vous cherchez ? Personne ne vient ici sans chercher quelque chose. Les uns le savent, les autres pas. »" },
      { again: true, text: "Sœur Mélisande lève la tête de sa reliure. « Vous, dit-elle. Le rayon des vents, troisième galerie. Ou autre chose, aujourd'hui ? »" },
      { after: "A_the", once: true, text: "« Les encres défendues ? dit-elle, quand tu poses la question l'air de rien. Le cabinet scellé, mon enfant. Les maîtres en ont la clé, ou le chiffre. Moi, je garde la porte. » Elle ajoute, en se penchant de nouveau sur sa reliure : « Bien sûr, les livres voyagent, dans une bibliothèque. Ils ne restent pas toujours où on les range. »" },
      { after: "Z_frag_1", before: "Z_frag_3", once: true, text: "« L'Herbier de Maître Ancel ? Il est rangé aux sciences naturelles, deuxième étage. Ou alors on l'a encore mis à côté des herbiers de cuisine, au fond. Les élèves confondent tout. »" },
    ],
  },
  K_melisande_page: {
    title: "Sœur Mélisande", back: true,
    text: [
      "Sœur Mélisande prend le document, le porte sous la lampe, le tourne, le gratte de l'ongle. « Papier du collège, dit-elle. De l'ancien moulin, celui qui a brûlé. Trente ans, au moins. »",
      "Elle lit, et son visage change. « Arlaud. » Elle répète le nom de son oreille sourde à son oreille qui entend, en tournant la tête. « Elle lisait debout entre les rayons, cette petite. Elle ne s'asseyait jamais. Elle disait qu'on pense mieux debout. » Elle te rend le document avec précaution. « Si on me demande, je dirai que ce papier est du collège, et que cette écriture est celle de la petite Arlaud. J'ai vu ses fiches de prêt pendant quatre ans. »",
    ],
    fx: { flag: "melisande:temoin" },
  },

  // ------------------------------------------------------------------ Nanon
  T_nanon: {
    title: "La loge de Nanon", back: true,
    text: [
      { first: true, text: "La loge de la portière est une petite pièce surchauffée, avec un poêle, un fauteuil, un tableau des clés, un registre des sorties ouvert sur la table, et des pots de confiture alignés sur une étagère. Nanon t'y fait entrer, t'installe sur un tabouret et te regarde avec ses petits yeux vifs. « Toi, tu as la tête de quelqu'un qui n'a pas mangé assez. Tiens. »" },
      { again: true, text: "Nanon lève le nez de son tricot. « Entre, entre. Ferme la porte, tu fais partir le chaud. »" },
      { after: "K_stele", once: true, text: "Tu lui parles de la petite stèle, au pied de la digue. Nanon pose son tricot. « J'avais vingt ans, cette nuit-là. Je gardais déjà le portail. Le chœur était sur la digue, tous les élèves aussi, avec des lanternes. Vers minuit, deux élèves de la Tête sont revenus au collège avant les autres, en courant sous la pluie. Deux. » Elle reprend son tricot. « Un seul a passé le portail. L'autre, on l'a trouvée le lendemain, sur la grève. »" },
      { after: "avertissement", once: true, text: "« On m'a dit qu'on t'avait pris{e} dehors la nuit, dit Nanon sans lever les yeux. Fais attention, petit. La seconde fois, c'est le portail, et le portail, je le ferme derrière toi. »" },
    ],
    choices: [
      { label: "Accepter le pot de confiture de coings", hide: { any: [{ seen: "K_confiture" }] }, fx: { item: "confiture" }, to: "K_confiture" },
    ],
  },
  K_confiture: {
    title: "La loge de Nanon", back: true,
    text: [
      "Nanon te met dans les mains un pot de confiture de coings, ferme et orange, couvert d'un papier noué. « Pour les jours où ça ne va pas. Il y en a toujours. »",
    ],
  },

  // ------------------------------------------------------------------ Maud Arlaud
  T_maud: {
    title: "L'étal de Maud", back: true, montrer: "maud",
    text: [
      { first: true, text: "L'étal de Maud Arlaud est le plus beau de la halle : des soles, des rougets, des seiches, des langoustines encore vivantes sur un lit d'algues. La poissonnière est une grande femme carrée, les mains rouges de froid et d'eau salée, avec une tache de vin sur la joue et une voix qui couvre celle de ses voisines." },
      { first: true, text: "Elle te toise. « Une robe du collège. Vous n'achetez jamais rien, vous autres. Vous regardez. » Elle te tend quand même une crevette grise à goûter, sans sourire." },
      { again: true, text: "Maud te reconnaît d'un coup de menton et continue de vider un maquereau." },
    ],
    choices: [
      { label: "Lui parler de Maître Salvanhac", after: "B_perdu", hide: { seen: "K_maud_soeur" }, takes: 1, to: "K_maud_soeur" },
    ],
  },
  K_maud_soeur: {
    title: "La sœur", back: true,
    text: [
      "Maud fait signe à sa voisine de garder l'étal, et t'emmène derrière la halle, sur un banc qui sent la marée. Elle s'essuie les mains longtemps avant de parler.",
      "« Il venait ici, avant, dit-elle. Le vieux maître. Il venait chercher ma sœur, le dimanche, pour l'emmener travailler sur la digue. Ma sœur, Solène. Elle était au collège, comme toi. Boursière, comme toi. Elle dessinait des signes pour la mer depuis l'âge de quinze ans, sur tout ce qu'elle trouvait, sur les murs, sur la table, sur le dos de mes mains. »",
      "« Elle s'est noyée la nuit où la digue a chanté pour la première fois. Elle avait dix-sept ans. » Maud regarde la mer. « Trois jours après, un garçon du collège est venu à la maison. Un camarade de Solène, poli, bien habillé. Il a dit qu'il venait chercher ses cahiers, pour les rendre au collège. Ma mère les lui a donnés. Je ne les ai jamais revus. Je n'ai jamais rien eu d'elle, à part une couronne de fleurs, et un nom sur une pierre que la mer mange un peu plus chaque hiver. »",
    ],
    fx: { clue: "s_maud", meet: "maud" },
  },
  K_maud_cahier: {
    title: "Le cahier de Solène", back: true,
    text: [
      "Tu poses le document sur l'étal, entre les soles et les rougets. Maud le regarde sans comprendre, puis elle comprend. Elle essuie ses mains sur son tablier, très lentement, avant d'y toucher.",
      "Elle tourne les pages. Elle reconnaît l'écriture tout de suite, tu le vois à sa bouche. Elle ne pleure pas. Elle reste debout derrière son étal, au milieu des cris de la halle, le cahier contre la poitrine, les yeux fermés.",
      "« Le jour de votre examen, dit-elle enfin, sans ouvrir les yeux. Sur la digue. Je serai là. Et cette fois, ils m'entendront. »",
    ],
    fx: { flag: "maud:viendra", quest: "III_maud", ep: ["histoire", 600] },
  },

  // ------------------------------------------------------------------ the Rector's window, and being caught
  K_logis: {
    title: "La fenêtre du Recteur", place: "cour", back: true,
    text: [
      "Le logis du Recteur occupe l'angle de l'aile nord, au-dessus du réfectoire. Tu te glisses le long du mur jusqu'à la gouttière, puis jusqu'au rebord de la fenêtre éclairée, et tu regardes entre les rideaux mal tirés.",
      "Le Recteur est assis à son bureau, en robe de chambre, sous une lampe. Devant lui, le grand livre de la digue est ouvert au signe de la Tête. Il essaie de le recopier. Tu le vois tracer une courbe, s'arrêter, froisser la feuille. Recommencer. Froisser. À ses pieds, la corbeille déborde de boules de papier.",
      "Sur un coin du bureau, à côté de la théière de porcelaine, un petit godet d'argent fermé d'un couvercle.",
      "Au bout d'un moment, le Recteur pose sa plume, ôte ses lunettes et se prend le visage dans les mains. Il reste ainsi longtemps. Tu redescends sans bruit.",
    ],
    fx: { flag: "logis:vu" },
  },
  S_pris_logis: {
    title: "Pris{e}", place: "cour",
    text: [
      "Ton pied glisse sur l'ardoise mouillée. Une tuile part et éclate sur les pavés. Une fenêtre s'ouvre au premier étage, puis une autre. Quand tu touches le sol, Dame Castagnet est sur le seuil du réfectoire, une lanterne à la main, en robe de nuit et châle noir.",
      "Elle ne te demande pas ce que tu faisais. Elle te regarde, puis elle regarde la fenêtre du Recteur. « Au dortoir, dit-elle. Demain, votre nom sera au registre. C'est un avertissement. Il n'y en aura pas d'autre. »",
    ],
    fx: { flag: "avertissement", trait: { audace: 1 } },
    choices: [{ back: "H_dortoir" }],
  },
  S_pris: {
    title: "Pris{e}", place: "bibliotheque",
    text: [
      "Une lumière s'allume au fond de la bibliothèque. Sœur Mélisande, en bonnet de nuit, une chandelle à la main, avance entre les tables. Derrière elle, Dame Castagnet, qu'elle a fait réveiller.",
      "« Un élève de première année, dit la vice-rectrice, dans la bibliothèque, la nuit, près du cabinet des maîtres. » Elle te regarde comme on regarde une phrase mal construite. « Votre nom sera au registre demain matin. C'est un avertissement. La prochaine fois, vous rentrez à votre village par la première diligence. »",
      "Sœur Mélisande tourne vers toi son oreille droite, en silence.",
    ],
    fx: { flag: "avertissement", trait: { audace: 1 } },
    choices: [{ back: "H_dortoir" }],
  },
  S_renvoi: {
    title: "La seconde fois", place: "cour",
    text: [
      "Cette fois, c'est Nanon qui te trouve, sa lanterne à la main, son châle sur la tête. Elle te regarde en silence, avec une grande tristesse, et elle va chercher Dame Castagnet.",
      "La vice-rectrice ne dit qu'une phrase : « Je vous avais prévenu{e}. »",
    ],
    choices: [{ label: "Faire ta malle", to: "F_renvoi" }],
  },
} };
