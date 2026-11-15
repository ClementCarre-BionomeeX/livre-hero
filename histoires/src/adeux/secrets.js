// Le Pli de Brumefond · what each hero tells the other (the `aveu` scenes of story.secrets, offered on the passages
// marked aparte), and the four interludes, each told from someone else's point of view, a different one for each role.
// An aveu scene has no act and no place: it is played where the two heroes are alone (the relay, the refuge, the
// ferry), and ends with back: true. The other player learns the secret at the next rendezvous (src/multi.js).
module.exports = {
  // ---------------------------------------------------------------- confessions
  S_aveu_pere: { title: "Le Marché-aux-Sels", back: true,
    text: [
      "Tu le dis d'abord au plafond, puis à {autre}. Ton père s'appelait Aymon Cabrol. Il vendait du sel de la Sorgue à Brumefond et il rapportait des lettres à Vérenne. Un jour de printemps, on l'a arrêté sur le quai aux Sels, et à la Saint-Clair on l'a pendu sur la place du marché, comme espion du duché.",
      "Tu avais neuf ans. Ta mère a brûlé ses habits et gardé ses affaires. Tu as gardé l'affiche de la prévôté, celle qu'un roulier a rapportée de Brumefond, pliée en huit dans un livre.",
      { if: { place: "pontgele" }, text: "« J'ai demandé ce pli pour voir cette place », dis-tu. La chandelle grésille. {autre} t'écoute jusqu'au bout, et la chambre reste silencieuse longtemps après." },
      { if: { place: "col" }, text: "Dehors, le vent cogne contre la porte du refuge. « J'ai demandé ce pli pour voir cette place. » Le feu de genévrier craque. {autre} te tend la gourde, et tu bois." },
      { if: { place: "brumefond" }, text: "Le bac glisse sur l'eau noire. Devant vous, les lumières de Brumefond. « C'est là. J'ai demandé ce pli pour voir cette place. » {autre} regarde les lumières avec toi." },
    ] },
  S_aveu_vu: { title: "La porte du cabinet", back: true,
    text: [
      "Tu racontes la nuit dans l'antichambre. Le trait de lumière sous la porte, le chancelier en chemise, la plume qui recopie lentement, le sable sur l'encre, le cachet. Et l'autre lettre, celle qu'il a tenue dans la flamme jusqu'à se brûler les doigts.",
      { if: { clue: "cygne_brule" }, text: "« Elle était fermée de cire blanche, avec un cygne. » Tu poses la main sur l'étui du pli, sous ta chemise. « Celle-ci est fermée de cire rouge. »" },
      { if: { clue: "pli_cire" }, text: "« Et sur celle que je porte, la cire a coulé deux fois. Deux rouges l'un sur l'autre. »" },
      "Tu te tais. Tu viens de dire à quelqu'un rencontré hier que le pli de la duchesse est peut-être un mensonge. Un courrier qui dit cela, à Vérenne, perd sa place. Ou sa tête.",
    ] },
  S_aveu_argent: { title: "La bourse au cor de chasse", back: true,
    text: [
      "Tu poses la bourse entre vous deux. Tu racontes la femme en gris à la Corne, son manteau, sa bague au cor de chasse. Quinze écus maintenant, quinze au Cygne. Un jour de retard. Que le pli arrive entier et que personne ne soit blessé.",
      { if: { has: "monde:retard_mule" }, text: "« Le caillou sous le fer de Brunette, c'est moi. » Tu le dis vite, avant de changer d'avis." },
      "« Je ne sais pas pour qui elle travaille. Elle a dit : la même dame que toi. » Tu regardes {autre} en face pour la première fois depuis Vérenne. « J'avais besoin de l'argent. »",
    ] },
  S_aveu_offre: { title: "La femme de la Corne", back: true,
    text: [
      "Tu racontes la femme en gris à la Corne, la bourse qui sonnait sur la table, le marché qu'elle t'a proposé : un jour de retard pour trente écus. Tu as repoussé la bourse.",
      "« Elle a dit qu'elle trouverait un autre moyen. Elle portait le cor de chasse des postes, à la bague. » Tu hausses les épaules. « Quelqu'un, à Vérenne, veut que ton pli arrive en retard. Ou veut savoir si on peut nous acheter. »",
    ] },
  S_aveu_hiver: { title: "Onze étés", back: true,
    text: [
      "« J'ai menti au clerc. » Tu le dis tout de suite, comme on saute dans l'eau froide. « J'ai passé l'Ourse onze fois. L'été. Entre la Saint-Jean et la Saint-Michel. Jamais sous la neige. »",
      { if: { place: "pontgele" }, text: "« Demain soir on sera à Sorgue, et après-demain là-haut. Je connais le chemin. Ce qu'il devient quand il est blanc, je l'ignore. » {autre} regarde le vasistas, où la nuit est claire et froide." },
      { if: { place: "col" }, text: "« Aujourd'hui, j'ai cherché les cairns sous la neige comme on cherche ses mots. » Le vent pousse la porte du refuge. {autre} met une bûche de plus dans le feu." },
      { if: { place: "brumefond" }, text: "« C'est fait, maintenant. On a passé le col. Je voulais que tu le saches quand même. » L'eau clapote contre le bac." },
    ] },

  // ---------------------------------------------------------------- interludes (act II)
  I_hesme: { title: "La maison des postes", interlude: { who: "hesme", where: "Vérenne, la nuit de votre départ" }, back: true,
    text: [
      "La maison des postes de Vérenne est derrière l'écurie ducale, et à minuit une seule fenêtre y est éclairée. Dame Hesmé de Laudes y est assise en manteau gris, devant une carte des Dents de Sorgue épinglée au mur, piquée d'épingles à tête rouge le long de la gorge.",
      "Le garçon qui entre a vingt ans, des bottes de cavalier et la peau tannée des gens qui dorment dehors. Il s'appelle Gaut, et il est le meilleur courrier des postes depuis que les postes ont cessé de servir.",
      "« Tu pars cette nuit. Par la gorge de l'Ourse, le chemin des contrebandiers. Tu laisses le col à ta gauche, tu passes Sorgue de nuit, et tu gardes ta bouche fermée jusqu'au bac de Brume. » Elle lui tend une lettre fermée de cire blanche. Le cygne de la duchesse, aux ailes ouvertes. « À la présidente Aude Lorge, en main propre, avant que l'Assemblée entende la réponse de la chancellerie. »",
      "Gaut tourne la lettre. « Il y a deux réponses ? »",
      "« Sa Grâce a écrit une réponse, et l'a donnée au chancelier pour qu'il la fasse partir. Ensuite je lui ai demandé de l'écrire une seconde fois, pour moi. Elle a fait ce que je demandais, sans question. Elle me connaît. » Dame Hesmé regarde la carte. « Maître Oriel a choisi lui-même le courrier, lui qui délègue toujours ce choix. Et il a choisi un Cabrol. »",
      { if: { has: "monde:argent_pris" }, text: "« Le muletier a pris l'argent. Leur pli arrivera un jour après toi. Tu as un jour d'avance, Gaut. Ne le perds pas. »" },
      { if: { has: "monde:argent_refuse" }, text: "« Le muletier a refusé l'argent. Honnête. » Elle a un petit rire sans joie. « Leur pli arrivera le cinquième au matin. Tu dois y être avant. Tu as une nuit d'avance, Gaut. Une seule. »" },
      "« Et si on m'arrête ? »",
      "« Le chancelier a fait partir un homme ce matin, un homme à lui, en manteau vert. Il suit le courrier. Il ignore ton existence. » Elle se lève. « Pour l'instant. »",
    ] },
  I_oriel: { title: "Le cabinet du chancelier", interlude: { who: "oriel", where: "Vérenne, la veille de votre départ" }, back: true,
    text: [
      "Le cabinet du chancelier, la veille au soir. Le feu est bas. Maître Oriel Daumas tient une lettre fermée de cire blanche, au cygne de la duchesse, et devant lui se tient un homme en manteau vert, la barbe courte, une cicatrice qui lui ferme à moitié l'œil gauche.",
      "« Sa Grâce dit oui, Ancelin. » Le chancelier a la voix de quelqu'un qui annonce un deuil. « Les salines partagées, une commission, un traité sur dix ans. J'ai sept cents muids de sel engagés sur la Sorgue, au nom de mon frère. Partager les salines, c'est partager ce qui me revient. »",
      "« Et Varrache ? »",
      "« Varrache veut sa guerre, et les salines de la rive nord, et il les aura, si l'Assemblée entend un non. Elle l'entendra. » Il pose la main sur une feuille blanche, à côté de la lettre au cygne. « J'écris bien comme Sa Grâce. J'ai écrit pour elle pendant vingt ans. »",
      "« Le courrier lira peut-être. »",
      "« Le courrier est un enfant d'Aymon Cabrol. Son père est mort pendu à Brumefond. Ce pli, l'enfant l'a demandé en personne, deux fois. Quand on hait une ville, on accepte sans examen une bonne raison de la haïr. »",
      "Ancelin hoche la tête. « Et moi ? »",
      "« Tu les suis jusqu'au lac. Dame Hesmé tient les postes, et Dame Hesmé ne m'aime pas. Si un autre cavalier part vers Brumefond, avec une autre lettre, il n'arrive pas. » Le chancelier prend sa plume. « Va. J'ai à écrire. »",
    ] },

  // ---------------------------------------------------------------- interludes (act III)
  I_ancelin: { title: "Le cheval dans la gorge", interlude: { who: "ancelin", where: "La gorge de l'Ourse, la nuit" }, back: true,
    text: [
      "Le cheval des postes est couché dans la neige, au bord du torrent, un carreau d'arbalète dans le poitrail. Ancelin s'accroupit près de lui et ouvre les fontes une à une avec son couteau. Du pain, de l'avoine, une couverture, une gourde. Pas de lettre.",
      "Le cavalier est tombé avec le cheval. Il s'est relevé, il a couru, et il a disparu entre les rochers, là où la gorge se resserre. Il y a du sang sur la neige, des taches de la taille d'une pièce, qui montent vers le noir.",
      "Ancelin regarde le noir un long moment. Un homme blessé, sans cheval, dans la gorge de l'Ourse, en hiver, la nuit : le lac est trop loin pour lui. Et pour sa lettre aussi.",
      { if: { has: "monde:menti_vert" }, text: "Il pense aux deux voyageurs de la route du nord, qui allaient voir de la famille à Sorgue. Il sourit dans sa barbe." },
      "Il essuie son couteau sur la housse du cheval mort. Le chemin du col et celui de la gorge se rejoignent au pont de Brume, au-dessus du lac. Tout ce qui descend de la montagne passe par ce pont. Il ira les y attendre, avec ses deux hommes, au chaud, dans la maison du péager.",
    ] },
  I_varrache: { title: "La salle de l'Assemblée", interlude: { who: "lorge", where: "Brumefond, deux jours avant le vote" }, back: true,
    text: [
      "La séance est levée. La salle de l'Assemblée se vide de ses quarante délégués, et Aude Lorge reste assise sous les armes des Ligues, les mains à plat sur la table, parce que ses genoux lui font mal quand elle se lève trop vite.",
      "Odo Varrache, capitaine-général, s'arrête à sa hauteur, les gants à la main. « Vérenne dira non, présidente. Vous le savez comme moi. »",
      "« Vous le savez bien tôt, capitaine. » Elle garde les yeux sur la table. « La réponse n'est pas encore partie de Vérenne, qu'on sache. »",
      "Varrache sourit. « Elle est partie ce matin. Ils envoient un enfant d'Aymon Cabrol pour la porter. Le chancelier Daumas a de l'humour. »",
      "Quand il est sorti, Aude Lorge reste longtemps immobile. Elle se souvient du procès d'Aymon Cabrol. Elle y était, jeune déléguée de Port-Sauge. Cabrol a emporté sous la corde le nom de qui l'envoyait. Mais dans ses affaires, on a trouvé des lettres signées d'un clerc de la chancellerie de Vérenne, un certain O. Daumas, et le prévôt a écrit ce nom dans son registre. Vérenne a renié Cabrol. Daumas l'a laissé pendre.",
      "Et Daumas, aujourd'hui, est chancelier. Elle appelle son secrétaire. « Les lettres de la duchesse Ysaure, celles des années de paix. Montrez-moi comment elles sont scellées. »",
      "Le secrétaire revient avec une liasse. Chaque lettre porte au dehors le sceau rouge de la chancellerie, et au dedans, sur le pli intérieur, un petit cygne de cire blanche.",
    ] },
};
