// Act I, « L'appareillage » (days 1 to 3): the hiring at Corbière's, a day in Port-Aubier before the evening tide (the
// manifest, the Chamber of Insurance, the apothecary, Lerac, the chandler), the departure, the first day at sea, and the
// call at Gavre (the pilot, the chart-seller, the chapel of the drowned).
module.exports = {
  A_comptoir: {
    act: "I", title: "Le comptoir Corbière", place: "aubier_comptoir",
    text: [
      "Le comptoir de la maison Corbière occupe le rez-de-chaussée d'une haute maison de la ville haute. Des commis y écrivent debout à des pupitres, sous des maquettes de navires posées sur des consoles. On te fait traverser la salle, puis monter un escalier, et l'on te laisse devant une porte capitonnée de cuir vert.",
      "Maître Anselme Corbière est un homme rond, en habit de drap gris, qui parle doucement en regardant ses mains posées à plat sur son bureau. Derrière lui, par la fenêtre, on voit toute la rade, et tout au bout du quai des Morutiers, un trois-mâts noir à bande jaune.",
      "« La Sterne, dit-il sans se retourner. Elle part ce soir, à la marée de sept heures, pour Marbecq. Mon subrécargue, Lerac, s'est cassé la jambe avant-hier dans l'escalier de mon entrepôt. À son âge, ces choses arrivent. Il me faut quelqu'un pour répondre de la cargaison, signer le manifeste, tenir le coffre de bord et me rendre des comptes au retour. On m'a dit que tu savais compter et que tu n'avais pas d'attaches ici. »",
      { if: { has: "passe:marin" }, text: "Il ajoute, sans lever les yeux : « Et que tu as le pied marin. C'est rare, chez les gens qui savent compter. »" },
      { if: { has: "passe:commis" }, text: "Il ajoute, sans lever les yeux : « Et que tu as tenu les livres d'une maison de Valcourt. Ils disent du bien de toi, à Valcourt. »" },
      { if: { has: "passe:garde" }, text: "Il ajoute, sans lever les yeux : « Et que tu as escorté des convois. Un coffre de bord, c'est un convoi qui flotte. »" },
      "Il pousse vers toi un manifeste de trois feuilles et une clé de fer au bout d'un lacet. « Deux écus par jour de mer, payés à Marbecq par mon comptoir, et une prime si la cargaison arrive entière. »",
      "On frappe. Un garçon de quinze ans entre sans attendre la réponse : maigre, des cheveux trop longs, un livre sous le bras et un manteau de voyage déjà boutonné. Corbière ne se lève pas. « Mon neveu, Gabin. Il embarque aussi. Il va apprendre le métier au comptoir de Marbecq. Tu veilleras sur lui. »",
      "Gabin te salue d'un signe de tête poli, et regarde la rade par la fenêtre, comme son oncle.",
    ],
    fx: { meet: "corbiere", item: ["manifeste", "cle_coffre"], join: "gabin", set: { escale: "aubier", rations: "pleine", mer: "port" }, ep: ["seance", 300] },
    choices: [
      { label: "Accepter, et descendre en ville avec Gabin", takes: 1, to: "H_ville" },
      { label: "Accepter, en demandant une avance sur tes gages", takes: 1, test: { dom: "social", diff: -10, label: "Social", help: [{ if: { has: "passe:commis" }, v: 15 }] }, win: { to: "A_avance" }, lose: { to: "A_avance_non" } },
    ],
  },
  A_avance: {
    title: "L'avance", place: "aubier_comptoir",
    text: [
      "Corbière lève enfin les yeux sur toi. Il a des yeux gris pâle, sans cils. Il ouvre un tiroir, compte dix écus en piles de deux et les pousse vers toi du bout des doigts. « On ne part pas en mer les poches vides. C'est juste. »",
      "Dans l'escalier, Gabin te dit à voix basse : « Il ne m'a jamais donné dix écus. »",
    ],
    fx: { gold: 200 },
    choices: [{ label: "Descendre dans la ville basse", to: "H_ville" }],
  },
  A_avance_non: {
    title: "L'avance", place: "aubier_comptoir",
    text: [
      "Corbière sourit sans desserrer les lèvres. « Mon comptoir de Marbecq paie à l'arrivée. C'est l'usage de la maison, et c'est une bonne raison d'arriver. »",
      "Il a déjà repris sa plume.",
    ],
    fx: { regard: { corbiere: "mefiant" } },
    choices: [{ label: "Descendre dans la ville basse", to: "H_ville" }],
  },
  A_bord: {
    act: "I", title: "À bord", place: "pont",
    text: [
      "Tu montes la planche avec le manifeste sous le bras. Sur le pont, tout le monde travaille et personne ne te regarde, sauf un homme debout près de la barre : soixante ans passés, barbe blanche taillée court, une tache de vin sur la tempe, un chapeau noir enfoncé jusqu'aux sourcils. Le capitaine Ysembart Coët te détaille de la tête aux pieds, puis te tourne le dos.",
      "« Le subrécargue, dit-il au vent. Vous logerez à l'arrière. Vous ne touchez pas aux manœuvres, vous ne parlez pas aux hommes de quart, et vous ne descendez pas dans ma cale sans me prévenir. »",
      "Un autre homme vient à toi la main tendue : trente-huit ans, beau, une fine cicatrice au menton, des yeux très bleus, une veste de drap bleu à boutons de corne. « Morvan Le Hir, le second. Ne fais pas attention au capitaine, il est comme ça avec tout le monde. Avec moi aussi, depuis douze ans. » Il rit, et les matelots autour de lui sourient.",
      { with: "gabin", text: "Le second aperçoit Gabin derrière toi, et son visage change. Il le prend aux épaules. « Le fils d'Hervé. Tu as grandi. » Gabin rougit, et ne trouve rien à répondre. Plus tard, il te dira que Morvan Le Hir était le second de son père, et qu'il a été le dernier à le voir vivant." },
      "Morvan te présente l'équipage comme on présente sa famille : Guénolé Le Bihan, le maître d'équipage, les bras couverts d'ancres tatouées ; Yves Kerlo, le timonier, qui touche son bonnet en silence ; Rozenn Le Dû, la cuisinière, qui passe la tête par l'écoutille de la cambuse et la retire aussitôt ; Maître Daoulas, le chirurgien, des lunettes cerclées de fer, qui te serre la main d'une main moite. En haut des haubans, un gamin roux vous regarde, assis sur une vergue, les jambes dans le vide.",
      "« Et la charpentière, Armelle, est en bas, dit le second. Elle se dispute avec une pompe. Ne la dérange pas. »",
    ],
    fx: { meet: ["coet", "morvan", "guenole", "kerlo", "rozenn", "daoulas"], regard: { morvan: "cordial" } },
    choices: [{ label: "Faire le tour du pont", to: "H_pont" }],
  },
  A_caisses: {
    act: "I", title: "Les portefaix", place: "aubier_quai",
    text: [
      "Les portefaix montent la planche deux par deux, une caisse sur les épaules, en soufflant. Les caisses sont toutes pareilles : du sapin blanc, cerclé de fer, avec au pochoir le sceau de la maison Corbière et le mot DRAPS.",
      "Tu regardes passer la dixième, la vingtième. Les porteurs plient les genoux sous chacune, le cou gonflé. L'un d'eux pose la sienne sur le quai pour souffler, et tu aides à la relever : il faut s'y mettre à deux, et encore.",
      "« Des draps, dit le portefaix en crachant dans ses mains. Ils doivent être tissés en plomb, à Flandre. »",
      { with: "armelle", text: "Armelle regarde la caisse, puis les mains du portefaix, puis toi. Elle se tait." },
    ],
    fx: { clue: "m_poids" },
    choices: [{ back: "H_quai" }],
  },
  A_armelle: {
    act: "I", title: "La charpentière", place: "cale",
    text: [
      "Au pied du grand mât, une femme d'une quarantaine d'années, les manches roulées sur des avant-bras de forgeron, a démonté le piston de la grande pompe sur un sac étalé par terre. Elle tient entre deux doigts une rondelle de cuir qui s'effrite comme du pain sec.",
      "« Armelle Kerbrat, charpentière. C'est toi qui remplaces Lerac ? » Elle te tend la rondelle. « Regarde-moi ça. J'ai regarni ces pompes moi-même au retour du dernier voyage, avec du cuir de Morlaix, le meilleur. Ce matin, je trouve ça à la place. Du cuir de savetier, brûlé à la chaux. Ça tiendra trois jours de pompage, et le quatrième on se noie. »",
      "Elle jette la rondelle dans le sac. « J'ai demandé au second l'argent pour en racheter. Il dit que l'armateur ne paiera pas deux fois la même chose, et qu'il n'a pas le temps. Et il m'interdit de descendre à terre avant le départ. »",
      "Elle te regarde. « Toi, tu tiens le coffre. Et toi, tu peux descendre à terre. »",
    ],
    fx: { meet: [], met: "armelle" },
    choices: [
      { label: "Lui proposer de venir choisir elle-même les cuirs chez l'accastilleur", fx: { join: "armelle", conf: { armelle: 10 } }, back: "H_cale" },
      { label: "Lui dire de voir cela avec le second", fx: { conf: { armelle: -5 } }, back: "H_cale" },
    ],
  },
  A_signer: {
    act: "I", title: "Le manifeste", place: "aubier_quai",
    text: [
      "Le second t'attend au pied de la planche avec une écritoire portative, un encrier de corne et une plume déjà taillée. La dernière caisse vient de passer. Il te tend le manifeste ouvert sur la dernière feuille, là où manque ta signature.",
      "« Quatre-vingt-dix caisses de draps, soixante d'outils, quarante barriques, douze balles de toile, vingt sacs de clous. J'ai tout coché moi-même. » Il sourit. « Une formalité. Lerac signait les yeux fermés. »",
      { with: "gabin", text: "Gabin, à côté de toi, lit le manifeste par-dessus ton épaule, en remuant les lèvres." },
    ],
    choices: [
      { label: "Signer", fx: { flag: "manifeste:signe", quest: "I_manifeste", regard: { morvan: "cordial" } }, to: "A_signe" },
      { label: "Signer, en ajoutant : « sous réserve de vérification à Marbecq »", test: { dom: "social", diff: 0, label: "Social" }, win: { fx: { flag: ["manifeste:signe", "manifeste:reserve"], quest: "I_manifeste" }, to: "A_reserve" }, lose: { fx: { flag: "manifeste:signe", quest: "I_manifeste" }, to: "A_reserve_non" } },
      { label: "Demander d'abord qu'on ouvre une caisse devant toi", to: "A_ouvrir" },
    ],
  },
  A_signe: {
    title: "Le manifeste", place: "aubier_quai",
    text: [
      "Tu signes. Le second souffle sur l'encre, plie les feuilles, et les glisse dans sa veste. « Je le garde avec le livre de bord. Tu le reverras à Marbecq. » Il te tape sur l'épaule. « Bienvenue sur la Sterne. »",
    ],
    choices: [{ back: "H_quai" }],
  },
  A_reserve: {
    title: "Le manifeste", place: "aubier_quai",
    text: [
      "Tu écris ta réserve en petites lettres serrées sous ta signature. Le second la lit, et son sourire reste exactement le même. « Prudent. C'est bien. » Il souffle sur l'encre, plie les feuilles et les glisse dans sa veste.",
    ],
    choices: [{ back: "H_quai" }],
  },
  A_reserve_non: {
    title: "Le manifeste", place: "aubier_quai",
    text: [
      "Tu commences à écrire ta réserve. Le second pose deux doigts sur la feuille. « Une réserve sur un manifeste, à Port-Aubier, ça veut dire qu'on accuse l'armateur de mentir. Tu veux commencer ta carrière comme ça ? Signe, et vérifie à Marbecq tant que tu voudras. »",
      "Tu signes sans rien ajouter. Il souffle sur l'encre et range les feuilles dans sa veste.",
    ],
    choices: [{ back: "H_quai" }],
  },
  A_ouvrir: {
    title: "Une caisse", place: "aubier_quai",
    text: [
      "Le second hausse les épaules avec bonne grâce. « Comme tu voudras. » Il siffle un portefaix, qui redescend la planche avec la caisse du haut de la dernière pile, et fait sauter le couvercle à la pince.",
      "Dedans, des pièces de drap de Flandre, gris et bleu, pliées serré, qui sentent le suint et la teinture. Tu en soulèves une : c'est du beau drap, épais et doux.",
      "« Satisfait{e} ? » Le second fait refermer la caisse. Derrière lui, sur la dunette, le capitaine Coët vous regarde, les mains dans le dos. « La marée n'attend pas les comptables », dit-il assez fort pour qu'on l'entende sur le quai.",
    ],
    choices: [
      { label: "Signer", fx: { flag: "manifeste:signe", quest: "I_manifeste" }, to: "A_signe" },
      { label: "Exiger une seconde caisse, prise au hasard dans la cale", test: { dom: "social", diff: -10, label: "Social", help: [{ with: "armelle", v: 10 }] }, win: { to: "A_ouvrir2" }, lose: { to: "A_ouvrir_non" } },
      { label: "Refuser de signer tant que tu n'as pas tout vu", fx: { flag: "manifeste:refuse", quest: "I_manifeste", regard: { morvan: "mefiant" } }, to: "A_refus" },
    ],
  },
  A_ouvrir2: {
    title: "La seconde caisse", place: "cale",
    text: [
      "Tu descends dans la cale avec le second et un portefaix. Tu montres une caisse du rang du bas, au milieu d'une pile. Il faut défaire deux cordages et déplacer trois caisses pour l'atteindre. Le second se tait. Il tient la lanterne.",
      "Le couvercle saute. Du drap, gris et bleu, plié serré. Tu enfonces la main entre deux pièces, jusqu'au poignet. C'est dur, sous le drap, et froid.",
      "« Attention, tu vas tout froisser. » Le second a rabattu le couvercle du bout de la botte, sans brusquerie. « Tu as vu du drap. On a perdu une heure. On signe ? »",
    ],
    choices: [
      { label: "Signer", fx: { flag: "manifeste:signe", quest: "I_manifeste" }, to: "A_signe" },
      { label: "Refuser de signer", fx: { flag: "manifeste:refuse", quest: "I_manifeste", regard: { morvan: "mefiant" } }, to: "A_refus" },
    ],
  },
  A_ouvrir_non: {
    title: "Le manifeste", place: "aubier_quai",
    text: [
      "« Non », dit le capitaine depuis la dunette. Il descend sur le quai, lentement. « Une cargaison arrimée ne se désarrime pas pour les beaux yeux d'un subrécargue. Vous signez, ou vous ne signez pas, et dans ce cas vous restez à terre et j'en trouve un autre au cabaret. »",
      "Le second écarte les mains, désolé, comme s'il n'y était pour rien.",
    ],
    choices: [
      { label: "Signer", fx: { flag: "manifeste:signe", quest: "I_manifeste" }, to: "A_signe" },
      { label: "Refuser de signer, et embarquer quand même", fx: { flag: "manifeste:refuse", quest: "I_manifeste", regard: { morvan: "mefiant", coet: "mefiant" } }, to: "A_refus" },
    ],
  },
  A_refus: {
    title: "Le manifeste", place: "aubier_quai",
    text: [
      "Le second referme l'écritoire. Son sourire a disparu, mais sa voix reste aimable. « Maître Corbière ne va pas aimer ça. Un navire qui part sans manifeste signé, la Chambre des Assurances ne le couvre qu'à moitié. »",
      "« Alors elle le couvrira à moitié », dit le capitaine Coët, qui passe à côté de vous sans s'arrêter. C'est la première fois que tu l'entends presque rire.",
    ],
    fx: { ep: ["seance", 500] },
    choices: [{ back: "H_quai" }],
  },

  // ------------------------------------------------------------------ the town
  V_assurances: {
    act: "I", title: "La Chambre des Assurances", place: "aubier_ville",
    text: [
      "La Chambre des Assurances de Port-Aubier tient dans une grande salle dallée de noir et de blanc, où des messieurs en perruque discutent à voix basse devant un tableau noir couvert de noms de navires et de chiffres. Sur un mur, une cloche de bronze, qu'on sonne une fois quand un navire est perdu.",
      "Derrière un grillage de cuivre, une greffière d'une trentaine d'années, lunettes et manchettes de lustrine, recopie un registre. Une plaque de bois porte son nom : P. Dornac.",
      "Tu te présentes : le subrécargue de la Sterne. Elle lève les yeux. « La Sterne, de la maison Corbière. » Elle répond sans même ouvrir son registre.",
    ],
    fx: { meet: "dornac" },
    choices: [
      { label: "Lui demander pour combien la Sterne est assurée", test: { dom: "social", diff: -10, label: "Social", help: [{ if: { has: "passe:commis" }, v: 20 }, { with: "gabin", v: 10 }] }, win: { to: "V_police" }, lose: { to: "V_police_non" } },
      { label: "Demander une copie de la police, frais de copie compris (deux écus)", fx: { gold: -40 }, to: "V_police" },
    ],
  },
  V_police: {
    title: "La police", place: "aubier_ville",
    text: [
      "La greffière hésite, puis tire un registre de dessous le grillage et l'ouvre à une page cornée. Elle te montre une ligne du doigt, sans la lire à voix haute.",
      "Quarante mille écus. Le corps du navire pour douze mille, la cargaison pour vingt-huit mille, selon le manifeste signé du subrécargue.",
      "« La Sterne a vingt-deux ans, dit Pélagie Dornac à voix très basse. On me l'aurait proposée à vendre la semaine dernière, je n'en aurais pas donné dix mille. Mais ce ne sont pas mes affaires. » Elle recopie la police d'une écriture rapide, la sable, la signe, et te la glisse sous le grillage. « Ni les vôtres, sans doute. »",
      { with: "gabin", text: "Gabin regarde la copie par-dessus ton bras. « Douze mille écus pour la Sterne ? Mon père disait qu'elle ne valait plus que son bois. »" },
    ],
    fx: { item: "police", clue: "m_police", ep: ["seance", 400] },
    choices: [{ label: "Ressortir sur la place du Change", back: "H_ville" }],
  },
  V_police_non: {
    title: "La Chambre des Assurances", place: "aubier_ville",
    text: [
      "« Les polices sont l'affaire de l'assuré et de la Chambre, dit la greffière. Si Maître Corbière veut vous en parler, il vous en parlera. » Elle reprend sa plume. Derrière toi, un des messieurs en perruque te regarde avec curiosité.",
    ],
    choices: [{ label: "Ressortir sur la place du Change", back: "H_ville" }],
  },
  V_haudry: {
    act: "I", title: "L'apothicairerie", place: "aubier_ville", shop: "haudry", back: true,
    text: [
      { first: true, text: "L'apothicairerie de Maître Haudry est une boutique tapissée de bocaux de faïence bleue, de pots de grès et de tiroirs étiquetés en latin. Ça sent le camphre, la cire et la réglisse. Maître Haudry, gros et barbu, broie quelque chose dans un mortier en chantonnant." },
      { first: true, text: "« Pour la mer ? De l'onguent, de l'eau-de-vie, du sel de corne de cerf pour les évanouissements. » Il s'interrompt. « Vous êtes de quel navire ? La Sterne ? Ah ! Votre second est passé avant-hier. Un homme charmant. Une once de feuilles de digitale séchées, pour le cœur de son capitaine. Dites-lui bien, au capitaine, une pincée dans un bol, pas plus, et pas tous les jours. La digitale, c'est le remède et le poison dans la même feuille. » Il rit, et reprend son mortier." },
      { again: true, text: "Maître Haudry lève la tête de son mortier et te salue d'un geste de son pilon." },
    ],
    fx: { meet: "haudry", clue: "c_digitale" },
  },
  V_lerac: {
    act: "I", title: "Chez Thibaut Lerac", place: "aubier_ville",
    text: [
      { first: true, text: "Thibaut Lerac habite deux pièces au-dessus d'une boutique de chandelles. Il t'ouvre lui-même, en sautillant sur une béquille, la jambe droite prise dans une attelle de planchettes. C'est un vieil homme maigre au crâne chauve, aux lunettes rondes, qui sent le tabac froid." },
      { first: true, text: "Quand tu lui dis qui tu es, il te laisse sur le seuil. Il reste dans l'embrasure, la main sur la porte. « C'est donc vous qui me remplacez sur la Sterne. Eh bien. Bon voyage. »" },
      { again: true, text: "Lerac t'ouvre de nouveau, toujours sur sa béquille. Il soupire en te voyant, mais il ne referme pas la porte." },
    ],
    fx: { meet: "lerac" },
    choices: [
      { label: "Lui montrer le manifeste qu'on t'a confié", if: { item: "manifeste" }, to: "V_lerac_ok" },
      { label: "Lui demander comment il s'est cassé la jambe", test: { dom: "social", diff: -10, label: "Social", help: [{ with: "gabin", v: 15 }] }, win: { to: "V_lerac_ok" }, lose: { to: "V_lerac_non" } },
      { label: "Le laisser tranquille", back: "H_ville" },
    ],
  },
  V_lerac_ok: {
    title: "Chez Thibaut Lerac", place: "aubier_ville",
    text: [
      "Lerac regarde longuement dans l'escalier, en bas, puis te fait entrer. Il s'assoit dans un fauteuil percé, la jambe allongée sur un tabouret, et prend le manifeste. Il le lit deux fois, en remuant ses lèvres sèches.",
      "« Quatre-vingt-dix caisses de draps de Flandre, pour une colonie de pêcheurs qui s'habille en toile à voile. » Il te rend les feuilles. « Corbière m'a demandé de signer ça il y a trois jours. J'ai dit que je signerais quand j'aurais ouvert les caisses, toutes, une par une. Il a dit : comme vous voudrez, Lerac, vous avez toujours été un homme soigneux. »",
      "Il tapote son attelle. « Le lendemain matin, je suis descendu à l'entrepôt avant le jour, pour commencer. Dans l'escalier, quelqu'un est passé derrière moi. Je n'ai rien vu. Je me suis réveillé en bas, avec la jambe dans le mauvais sens. »",
      "Il te regarde par-dessus ses lunettes. « Je ne dis pas qu'on m'a poussé. Je dis que je suis tombé au bon moment. »",
      { with: "gabin", text: "Gabin est devenu très pâle. Lerac le regarde, et sa voix se fait plus douce. « Vous êtes le fils d'Hervé. Votre père était un honnête homme. Méfiez-vous des escaliers, mon garçon. »" },
    ],
    fx: { clue: "m_lerac", flag: "lerac:parle", quest: "I_lerac", regard: { lerac: "cordial" }, ep: ["seance", 500] },
    choices: [{ label: "Le remercier, et redescendre", back: "H_ville" }],
  },
  V_lerac_non: {
    title: "Chez Thibaut Lerac", place: "aubier_ville",
    text: [
      "« Dans un escalier, dit Lerac. Comme tout le monde. » Il te ferme la porte au nez, doucement, comme on ferme une porte sur un malade. Tu l'entends tirer le verrou.",
    ],
    choices: [{ back: "H_ville" }],
  },

  // ------------------------------------------------------------------ the departure
  A_appareillage: {
    act: "I", title: "L'appareillage", place: "pont",
    text: [
      { if: { is: { terre: "oui" } }, text: "Pierrick, le mousse, vient te chercher en courant : « La marée ! Le capitaine fait rentrer la planche ! » Tu le suis à bord au moment où deux matelots la tirent sur le pont." },
      "Sept heures. La marée est haute, étale, brillante comme une plaque de cuivre sous le soleil bas. On largue les amarres. Deux canots à rames prennent la Sterne en remorque et la tirent, lentement, au milieu de la rade.",
      "Puis tout se passe très vite. Guénolé siffle. Les gabiers, sur les vergues, lâchent les voiles qui tombent d'un coup, claquent, se gonflent. Le navire s'incline et prend de la vitesse. Les canots larguent la remorque. Kerlo met la barre dessous, et la Sterne passe entre les deux tours du port, si près de la tour du nord que tu pourrais toucher ses pierres avec une gaffe.",
      "Sur le quai des Morutiers, un homme en habit gris regarde partir le navire, son chapeau à la main. Il ne fait pas de signe.",
      { with: "gabin", text: "Gabin, accoudé au bastingage, regarde son oncle devenir un point gris, puis plus rien. Il a gardé son livre sous le bras." },
      { if: { not: { any: [{ has: "manifeste:signe" }, { has: "manifeste:refuse" }] } }, text: "Le second vient s'accouder à côté de toi, l'écritoire sous le bras. « Tu as oublié quelque chose, à terre. » Il ouvre le manifeste à la dernière page. « Il est encore temps. »" },
    ],
    fx: { set: { escale: null, mer: "cote" }, meteo: "brise", ep: ["seance", 300] },
    choices: [
      { label: "Signer le manifeste", if: { not: { any: [{ has: "manifeste:signe" }, { has: "manifeste:refuse" }] } }, hide: { any: [{ has: "manifeste:signe" }, { has: "manifeste:refuse" }] }, fx: { flag: "manifeste:signe", quest: "I_manifeste" }, to: "H_pont" },
      { label: "Refuser de signer sans avoir tout vu", if: { not: { any: [{ has: "manifeste:signe" }, { has: "manifeste:refuse" }] } }, hide: { any: [{ has: "manifeste:signe" }, { has: "manifeste:refuse" }] }, fx: { flag: "manifeste:refuse", quest: "I_manifeste", regard: { morvan: "mefiant" } }, to: "H_pont" },
      { label: "Regarder la côte s'éloigner", hide: { not: { any: [{ has: "manifeste:signe" }, { has: "manifeste:refuse" }] } }, to: "H_pont" },
    ],
  },

  // ------------------------------------------------------------------ Gavre
  G_arrivee: {
    act: "I", title: "Gavre", place: "pont",
    text: [
      "Le troisième jour au matin, la vigie annonce un clocher blanc sur une pointe noire. La Sterne entre au port de Gavre à neuf heures, toutes voiles serrées sauf le petit hunier, et vient s'amarrer au môle sous les yeux de la moitié du village.",
      "Le capitaine Coët rassemble l'équipage sur le pont. « On remplit six tonneaux à la fontaine du môle. On embarque le pilote Tréguer pour les Dents. On repart à six heures, à la marée du soir. Celui qui n'est pas à bord à six heures restera à Gavre jusqu'au prochain navire, et le prochain navire passe au printemps. »",
      "Le second descend le premier sur le môle. « Je vais chercher le pilote, capitaine. Je sais où il loge. »",
    ],
    fx: { set: { escale: "gavre", mer: "port" }, stock: { eau: 6 }, reveal: "gavre", ep: ["seance", 300] },
    choices: [{ label: "Descendre à terre", to: "H_gavre" }, { label: "Rester sur le pont", to: "H_pont" }],
  },
  G_auberge: {
    act: "I", title: "L'auberge du Cormoran", place: "gavre", back: true, rumeur: "gavre", taverne: { mise: 3, adversaire: "un pêcheur de homards" },
    text: [
      { first: true, text: "Le Cormoran est une salle basse au plafond noirci, où des pêcheurs en vareuse boivent du cidre chaud autour d'une cheminée qui fume. Derrière le comptoir, une grande femme aux cheveux gris tressés, Mère Ozanne, essuie des bols sans les regarder." },
      { again: true, text: "Le Cormoran, sa fumée, ses pêcheurs, Mère Ozanne à son comptoir." },
    ],
    choices: [
      { label: "Demander où est le pilote Tréguer", hide: { seen: "G_treguer" }, to: "G_treguer" },
    ],
  },
  G_treguer: {
    act: "I", title: "Le pilote", place: "gavre",
    text: [
      "Mère Ozanne te montre le fond de la salle, d'un coup de menton. Sur un banc, contre le mur, un vieil homme dort la bouche ouverte, une jambe par terre, la barbe blanche tachée de vin. Un de ses yeux, mi-clos, est voilé de blanc.",
      "« Joachim Tréguer, dit-elle. Le meilleur pilote des Dents. Ça fait dix ans qu'il ne boit plus que le dimanche. Hier soir, un homme de votre navire lui a payé à boire jusqu'au matin, une bouteille après l'autre. Un bel homme, en veste bleue. Il m'a donné un écu pour que je continue à servir. » Elle repose un bol. « Ce matin, le même est revenu, il l'a regardé dormir, et il est reparti en riant. »",
    ],
    fx: { meet: "treguer", clue: "m_pilote" },
    choices: [
      { label: "Le dégriser : de l'eau froide, du café, et le grand air", takes: 2, test: { dom: "nature", diff: -10, label: "Nature", help: [{ with: "armelle", v: 15 }, { if: { has: "passe:marin" }, v: 15 }] }, win: { to: "G_treguer_ok" }, lose: { to: "G_treguer_non" } },
      { label: "Le laisser dormir", back: "G_auberge" },
    ],
  },
  G_treguer_ok: {
    title: "Le pilote", place: "gavre",
    text: [
      "Il faut deux seaux d'eau du puits, un pot de café noir, et une heure de marche sur le môle, Tréguer pendu à ton épaule. Il vomit deux fois dans le port. Puis il s'arrête, regarde la Sterne, et dit d'une voix enrouée : « C'est le navire de Corbière, ça. Le jaune. »",
      "Il se tait longtemps. « Mon fils était gabier sur la Bergeronnette. » Il crache. « Je viens. Je passerai ta Sterne entre les Dents, et je la poserai à Marbecq comme un œuf dans un panier. Et je veux voir la tête de ton second quand je monterai la planche. »",
    ],
    fx: { flag: ["treguer:abord", "dents:passe"], quest: "I_pilote", regard: { treguer: "redevable" }, ep: ["seance", 800] },
    choices: [{ label: "Le ramener à bord", to: "G_treguer_bord" }],
  },
  G_treguer_bord: {
    title: "La planche", place: "pont",
    text: [
      "Tréguer monte la planche en s'aidant des deux mains, et se plante sur le pont, les jambes écartées. Le capitaine Coët vient à lui et lui serre la main en silence.",
      "Le second arrive de l'arrière. Il voit le pilote. Pendant un instant, son visage reste figé, le sourire et les yeux avec. Puis il ouvre les bras. « Joachim ! On m'avait dit que tu refusais de rembarquer. Je suis content de m'être trompé. »",
      "« Tu t'es trompé de beaucoup de choses », dit Tréguer, et il va s'asseoir près de la barre.",
    ],
    fx: { regard: { morvan: "mefiant" } },
    choices: [{ label: "Faire le tour du pont", to: "H_pont" }],
  },
  G_treguer_non: {
    title: "Le pilote", place: "gavre",
    text: [
      "Tu lui jettes de l'eau au visage. Il ouvre un œil, te regarde, et se met à pleurer tout bas. Puis il se rendort. Mère Ozanne hausse les épaules. « Il en a pour jusqu'à demain. »",
      "Au moment où tu repars, Tréguer t'attrape la manche. Sa voix est pâteuse. « Mon routier… chez la Guivarc'h… en gage. Les passes, toutes les passes. Le prends pas, il est à Yann. » Il retombe sur son banc.",
    ],
    choices: [{ back: "G_auberge" }],
  },
  G_nolwenn: {
    act: "I", title: "Cartes et instruments", place: "gavre", back: true, shop: "gavre",
    text: [
      { first: true, text: "La boutique de Nolwenn Guivarc'h est tapissée de cartes marines, du sol au plafond. Sur les tables, des compas, des sextants, des sabliers, des sondes, et partout des rouleaux de papier. Nolwenn elle-même, rousse et grave, nettoie une lunette de vue avec un chiffon de soie." },
      { first: true, text: "« Mon mari faisait les relevés des Dents pour la marine du roi, dit-elle. Je vends ses cartes, et celles des autres. Et j'achète ce que les marins me laissent quand ils ont soif. »" },
      { again: true, text: "Nolwenn lève les yeux de sa lunette et te sourit." },
      { before: "dents:passe", text: "Sur une étagère, derrière elle, un carnet de cuir gonflé d'humidité porte une étiquette : « J. Tréguer, en gage, douze écus »." },
    ],
    fx: { meet: "nolwenn" },
    choices: [
      { label: "Racheter le routier de Tréguer (douze écus)", hide: { any: [{ item: "routier" }, { has: "treguer:abord" }] }, fx: { gold: -240, item: "routier", flag: "dents:passe", quest: "I_pilote" }, to: "G_routier" },
      { label: "Racheter le routier sur l'argent du coffre de bord (douze écus)", if: { stock: "coffre", min: 12 }, hide: { any: [{ item: "routier" }, { has: "treguer:abord" }] }, fx: { stock: { coffre: -12 }, item: "routier", flag: ["dents:passe", "coffre:routier"], quest: "I_pilote" }, to: "G_routier" },
    ],
  },
  G_routier: {
    title: "Le routier", place: "gavre",
    text: [
      "Nolwenn te tend le carnet. Il est lourd, gondolé, et sent le sel. Les pages sont couvertes de croquis de côtes, de flèches, de chiffres serrés, d'une écriture penchée qui va jusqu'au bord.",
      "« Les Dents, dit-elle, il y a une seule passe, la Passe des Veuves. Tout est là-dedans. Il faut savoir le lire, et il faut un ciel clair, ou de la chance. » Elle te regarde. « Joachim viendra le reprendre un jour. Vous le lui rendrez, s'il est encore en vie. »",
    ],
    fx: { ep: ["seance", 500] },
    choices: [{ back: "G_nolwenn" }],
  },
  G_chapelle: {
    act: "I", title: "La chapelle des noyés", place: "gavre",
    text: [
      "La chapelle est une nef basse blanchie à la chaux, sans autre ornement que ses ex-voto : des maquettes de navires pendues à la voûte par des fils, des tableaux naïfs de tempêtes, des béquilles, une ancre rouillée. Le long des murs, des plaques de bois peint portent des listes de noms, navire par navire.",
      "Une plaque récente, encore claire, attire ton regard. *La Bergeronnette, trois-mâts de la maison Corbière, perdue corps et biens sur les Dents de Morgue, la nuit du 3e jour de l'équinoxe, il y a deux ans.* Vingt-six noms de noyés.",
      "En dessous, plus petit : *Rescapés, arrivés à Marbecq en chaloupe le 6e jour.* Cinq noms. Le premier est *M. Le Hir, second*.",
      { with: "gabin", text: "Gabin s'est arrêté devant la même plaque. Il pose le doigt sur un nom, au milieu de la liste des noyés : *Hervé Corbière, armateur, passager*. Il reste un long moment ainsi, en silence, puis il retire sa main et l'essuie sur son manteau." },
    ],
    fx: { clue: "m_bergeronnette", ep: ["seance", 400] },
    choices: [
      { label: "Laisser Gabin seul un moment", with: "gabin", fx: { conf: { gabin: 5 } }, back: "H_gavre" },
      { label: "Ressortir", back: "H_gavre" },
    ],
  },
  G_depart: {
    act: "I", title: "Le départ de Gavre", place: "pont",
    text: [
      { if: { is: { terre: "oui" } }, text: "Le coup de canon du départ te rappelle à bord. Tu montes la planche en courant, et on la tire derrière toi." },
      "À six heures, la Sterne quitte Gavre. La chapelle blanche reste longtemps en vue sur sa pointe, puis la nuit l'efface. Devant, il n'y a plus que le large, et au bout du large, la mer des Brumes.",
      { if: { has: "treguer:abord" }, text: "Tréguer s'est installé sur un rouleau de cordage près de la barre, et ne quittera plus cette place. Il regarde les étoiles sortir une à une, et les nomme à mi-voix." },
      { if: { not: { has: "treguer:abord" } }, text: "Le capitaine Coët fait le tour du pont, la mâchoire serrée. Le pilote n'est pas à bord. Le second a dit qu'il refusait de rembarquer, et qu'il connaissait la passe aussi bien que lui." },
    ],
    fx: { set: { escale: null, mer: "large" }, quest: "I_manifeste", ep: ["histoire", 1500] },
    choices: [{ label: "Prendre le large", to: "D_large" }],
  },
};
