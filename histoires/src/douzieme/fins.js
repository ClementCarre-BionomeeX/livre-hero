// Le Douzième Coup · the endings (titles), the epilogue lines and the fates. Six dénouements, each flagged
// `fin:<id>` by its end passages : defaire (noon rings in 541), reveil (noon rings in 601), partage (both named it),
// garder (nobody named it : the note is held), fuite (the two walked out past the seventh poplar), immobile (the lever
// was left to the old man). After the dénouement, the epilogue tells what became of some of the people met on the
// way (one line per mark), then the fates of the five the book follows to the end : Line, Lison, the Maître des
// Sables, the Régente Odeline, the Grand Maître Coudrier. Conditions read `fin:` and `monde:` marks only, so that the
// two readers see the same lines. A fate's `dens` names the dénouements it can follow (the count of endings).
var F = function (id) { return { has: "fin:" + id }; };
var M = function (id) { return { has: "monde:" + id }; };
var ET = function () { return { all: [].slice.call(arguments) }; };

var extras = {
  endings: {
    defaire: { title: "Midi, en 541" },
    reveil: { title: "Midi, soixante ans plus tard" },
    partage: { title: "Sur la tranche" },
    garder: { title: "La note tenue" },
    fuite: { title: "La troisième porte" },
    immobile: { title: "À ce qui dure" },
  },

  epilogue: [
    // ----- the young Aubespin, judged in 541 (defaire, partage)
    { if: { any: [ET(F("defaire"), M("d_jeune_guilde")), ET(F("partage"), M("p_jeune_etabli"))] },
      text: "Melchior Aubespin, celui de trente ans, fait des goupilles au dernier établi, sous la fenêtre du nord. Il descend chaque matin écouter le puits. Au bout de onze ans, la Guilde lui rend ses manchettes. Il demande à garder l'établi." },
    { if: { any: [ET(F("defaire"), M("d_jeune_banni")), ET(F("partage"), M("p_jeune_banni"))] },
      text: "Melchior Aubespin, celui de trente ans, sort par la porte d'Occident, sans tablier. On signale plus tard, dans un port du Levant, un horloger aux belles mains, qui règle tout ce qu'on lui apporte et qui se récuse pour les cloches." },
    { if: ET(F("defaire"), M("d_jeune_reine")),
      text: "Melchior Aubespin, celui de trente ans, redit devant la Reine le prix qu'il avait fait d'elle. Elle l'écoute jusqu'au bout. Il garde sa tête et perd le reste, ce qu'il trouve, à la réflexion, mesuré." },
    // ----- the remedy
    { if: ET(F("defaire"), M("d_remede_dit")),
      text: "Maugras, rue des Teinturiers, vend à la Couronne toutes ses balles de fièvrier, et la Couronne les donne. Aélis boit ses dix-neuf jours en les comptant. Elle a huit ans. Elle régnera, et l'on dira d'elle qu'elle lisait les marges." },
    { if: ET(F("reveil"), M("v_ecorce")),
      text: "En ville basse, la rue de trois couleurs boit dix-neuf jours une écorce qu'on lui donne pour rien. Sous l'arche des Trois-Chandelles, une petite se remet à courir, et son frère range sa lame pour de bon." },
    // ----- the gleaners
    { if: ET(F("reveil"), M("v_glane_rendue")),
      text: "Rouget rend une montre à un homme en habit puce, qui lui dit merci. La glane devient en un été le plus grand garde-meuble qu'on ait vu au royaume. La Courtepaille en tient les registres, et elle les tient justes : elle a toujours su ce que chaque chose valait." },
    // ----- the empty city of 601 (partage)
    { if: ET(F("partage"), M("p_ville_heritiers")),
      text: "La ville vide est partagée entre les familles, nom par nom, sous la main de la Doyenne Ysoline. On y plaide trois ans pour des armoires. Les armoires y gagnent d'être cirées." },
    { if: ET(F("partage"), M("p_ville_ouverte")),
      text: "La ville vide reçoit ceux des cercles à qui l'on avait vendu le toit pendant leur sommeil. Tous ses habitants ont perdu quelque chose. On s'y prête volontiers une échelle." },
    { if: ET(F("partage"), M("p_ville_close")),
      text: "La ville vide reste fermée, sous la garde des Veilleurs. On y entre un jour par an, à midi, pour sonner. La soupe est dans les écuelles, et elle attend ses gens." },
    // ----- the note held
    { if: ET(F("garder"), M("g_abbaye")),
      text: "À Sainte-Aure-des-Heures, les sœurs apprennent une note de deux personnes venues à pied, et la chantent bouche fermée, aux heures. On les appelle bientôt les Heurières. Elles tiennent le ton pour le jour où la cloche le redemandera." },
    { if: ET(F("garder"), M("g_avis_perrine")),
      text: "Perrine, la colporteuse, a deux doigts en l'air, au bord du parvis, et sa hotte au dos. On lui a demandé son avis pour une pincée. Elle l'a donné comme elle donne tout : au juste prix, avec la monnaie." },
    { if: ET(F("garder"), { not: M("noyers_sortis") }),
      text: "Josse Noyer est debout sur sa borne, rue aux Oies, la main à demi baissée. Il a quarante-quatre ans. Il regardait une cloche. Sa fille sait où il est, et qui le garde." },
    // ----- the flight
    { if: ET(F("fuite"), M("f_abbaye_sortie")),
      text: "Trente charrettes ont quitté Sainte-Aure la veille du vingt et un juin 555, avec les malades, les converses et les livres. Une complainte en vingt et un couplets court encore les foires. On y parle d'un âne." },
  ],

  fates: [
    { who: "line", label: "Line Noyer", list: [
      { id: "l_recousu", title: "Line, le Cahier recousu", dens: "defaire", if: ET(F("defaire"), M("d_route")),
        text: "**Line Noyer** défait onze fois le Cahier au fil gris, et le recoud douze. À trente ans, elle en coud deux de sa façon, qui portent plus loin. Elle répète que les premiers étaient mal faits, sans jamais apprendre de qui elle dit du mal." },
      { id: "l_tour", title: "Line, dans la Tour", dens: "defaire", if: F("defaire"),
        text: "**Line Noyer** monte à Méridane à quinze ans, pour voir comment la Tour est faite dedans. On la lui montre. Elle y trouve deux défauts, les signale au Grand Maître, et il la garde. Elle vieillit dans un pays sans lisière, avec de l'ouvrage plein les mains et personne à attendre." },
      { id: "l_ete", title: "Line, un été", dens: "reveil", if: F("reveil"),
        text: "**Line Noyer** voit gauler les noix. Elle meurt avant l'hiver, dans son fauteuil, ses lunettes sur le front, la main dans celle de son père, qui a vingt-cinq ans de moins qu'elle. Elle avait payé cet été de soixante ans. Elle a dit que le compte était juste." },
      { id: "l_deux", title: "Les deux Line", dens: "partage", if: F("partage"),
        text: "Il y a deux **Line Noyer**. La première meurt à la Saint-Michel de 601, chez elle, en disant qu'on avait mis le temps. La seconde a neuf ans en 541 ; elle démonte l'horloge du curé, et la Guilde la reçoit jurée quarante ans plus tard, avec une montre de neuf pièces." },
      { id: "l_boite", title: "Line, la boîte de fer", dens: "garder", if: ET(F("garder"), M("g_reserve_une")),
        text: "**Line Noyer** garde dans sa boîte de fer, sous une vis, un ruban et un caillou de pont, de quoi rouvrir une ville. Elle sait le mot. Elle a promis d'attendre, et elle remplit des cahiers de toile en attendant." },
      { id: "l_cherche", title: "Line, le milieu", dens: "garder", if: ET(F("garder"), M("g_dehors")),
        text: "**Line Noyer** taille une encoche par Grand Midi sur une latte. Elle devient horlogère, puis meilleure horlogère que son maître. Elle cherche un milieu qu'on lui a dit introuvable, avec la tranquillité de quelqu'un à qui l'on a dit la même chose de tous ses ouvrages." },
      { id: "l_enjambee", title: "Line, l'enjambée", dens: "garder", if: F("garder"),
        text: "**Line Noyer** achève son enjambée, se retourne, et regarde une ville grise qui gardera sa taille. Elle a neuf ans, une boîte de fer, et tout le dehors. Elle range dans la boîte le premier jour de son attente." },
      { id: "l_vieux", title: "Line, les Cahiers donnés", dens: "fuite", if: ET(F("fuite"), M("f_chaine_rompue")),
        text: "**Line Noyer** avait cousu pour des jambes de seize ans, et elle a donné ses Cahiers à deux vieilles gens. Elle passe le vingt et un juin tournée vers la ville, sa toux dans son mouchoir. Elle attend midi. Elle n'a rien fait d'autre depuis un pont." },
      { id: "l_parole", title: "Line, parole tenue", dens: "fuite", if: F("fuite"),
        text: "**Line Noyer** avait dit, à neuf ans, sur un pont : *je trouverai quelqu'un.* Elle a trouvé. Elle passe le vingt et un juin tournée vers la Tour, sa toux dans son mouchoir, et elle attend midi." },
      { id: "l_chaise", title: "Line, la chaise", dens: "immobile",
        text: "**Line Noyer** est sur une chaise de malade, à quarante pas de la porte de bronze, grise. Elle avait envoyé quelqu'un. Elle regarde la Tour, et sa figure garde l'air d'attendre encore." },
    ] },

    { who: "lison", label: "Lison", list: [
      { id: "s_generation", title: "Lison, une par génération", dens: "defaire", if: F("defaire"),
        text: "**Lison**, celle de 541, a neuf mois, un berceau d'osier, et un père qui cherche son bleu. L'autre, celle qui avait cinq ans la nuit du Bond, n'a plus de nuit du Bond où se retourner. Le potier dit qu'il y en a une par génération. On verra." },
      { id: "s_reveil", title: "Lison, le souffle achevé", dens: "reveil", if: F("reveil"),
        text: "**Lison** achève son souffle, six ans après l'avoir commencé. Elle a cinq ans. Elle trouve que tout le monde a beaucoup grandi sans la prévenir, et elle siffle, sur les épaules de quelqu'un, à faire lever les corbeaux." },
      { id: "s_rattrape", title: "Lison, un an tous les ans", dens: "partage", if: F("partage"),
        text: "**Lison** se réveille à cinq ans, et rattrape le monde d'un an tous les ans, en le faisant remarquer. Elle garde toute sa vie, au cou, un sifflet de terre verte." },
      { id: "s_aucune", title: "Lison, d'aucune année", dens: "garder", if: F("garder"),
        text: "**Lison** n'est d'aucune année. Dans l'un des deux mots qu'on peut dire à la cloche, elle a cinq ans et elle dort ; dans l'autre, elle est encore à naître. Tant que personne ne parle, elle garde les deux." },
      { id: "s_octobre", title: "Lison, une nuit d'octobre", dens: "fuite", if: F("fuite"),
        text: "**Lison** dort rue des Potiers, tournée vers la vitre, ou bien elle a onze ans à Sainte-Luce et des billes plein ses poches. Cela s'est joué une nuit d'octobre, dans une rue, et la personne qui en a décidé n'en parle qu'en regardant ailleurs." },
      { id: "s_vitre", title: "Lison, la vitre", dens: "immobile",
        text: "**Lison** est tournée vers une vitre, sous un toit de Roquebise, au milieu d'un souffle. Elle a cinq ans. Midi est sur elle, et il y restera." },
    ] },

    { who: "aubespin_vieux", label: "Le Maître des Sables", list: [
      { id: "m_bras", title: "Le Maître, au bras du jeune", dens: "defaire", if: ET(F("defaire"), M("d_vieux_jeune")),
        text: "**Melchior Aubespin**, le vieux, meurt à la Saint-Jean, au bras de l'homme qu'il a été. Le jeune lui ferme les yeux, qui sont les siens. Il sait désormais ce que pèse une vie quand on vous la donne à porter d'avance." },
      { id: "m_fenetre", title: "Le Maître, une chambre avec fenêtre", dens: "defaire", if: ET(F("defaire"), M("d_vieux_reine")),
        text: "**Melchior Aubespin**, le vieux, meurt à la Saint-Jean, dans une chambre du Palais qui a une fenêtre. La Reine est montée deux fois. Elle avait ses questions ; il a répondu à toutes, sans ornement, comme on lit un inventaire." },
      { id: "m_banc", title: "Le Maître, une ville debout", dens: "defaire", if: F("defaire"),
        text: "**Melchior Aubespin**, le vieux, passe trois jours au soleil, sur un banc du parvis, à regarder marcher une ville. On le trouve à la Saint-Jean, les deux mains sur sa canne. Les enfants de la foire lui avaient laissé un beignet sur les genoux." },
      { id: "m_role", title: "Le Maître, le Rôle", dens: "reveil", if: ET(F("reveil"), M("v_vieux_compte")),
        text: "**Melchior Aubespin** ouvre le Rôle à la ligne des Noyer, et il écrit jusqu'à la Saint-Jean. Il laisse trois cent soixante lignes, d'une main exacte. Frère Macaire met neuf ans à finir le compte, et il le finit." },
      { id: "m_estrade", title: "Le Maître, le mémoire", dens: "reveil", if: ET(F("reveil"), M("v_vieux_reine")),
        text: "**Melchior Aubespin** lit son mémoire sur l'estrade, d'un bout à l'autre, devant quarante mille personnes. La Reine exige qu'on le laisse finir. Sur ce que la place fait ensuite, les chroniques tiennent en une ligne, et elles ont raison d'être brèves." },
      { id: "m_brucelles", title: "Le Maître, les brucelles", dens: "reveil", if: F("reveil"),
        text: "**Melchior Aubespin** passe ses derniers jours au pied d'une chaise de malade, à tenir les brucelles pour une horlogère de village. Elle lui fait remonter une pendule de cuisine. Il meurt à la Saint-Jean, l'ouvrage fini. Elle dit que c'était propre." },
      { id: "m_jarres", title: "Le Maître, dix jarres rendues", dens: "partage", if: ET(F("partage"), M("p_jarres")),
        text: "**Melchior Aubespin** donne dix jarres aux Lents de la lisière, et garde la onzième. Il met un an à rendre ses comptes. C'est le premier ouvrage qu'il ait fini sans y gagner, et il le signe." },
      { id: "m_onze", title: "Le Maître, onze jarres", dens: "partage", if: F("partage"),
        text: "**Melchior Aubespin** garde onze jarres de verre vert, rue du Cadran, et aucun acheteur. Il a de quoi vivre vingt ans dans une ville qui lui a tout rendu en partant." },
      { id: "m_pris", title: "Le prêteur, pris", dens: "garder", if: F("garder"),
        text: "**Melchior Aubespin** est pris, dans la Chambre basse, les deux mains sur sa canne, à trois pas de celui qu'il était. Ils regardent le même puits. On dirait un portrait et son esquisse." },
      { id: "m_neuf", title: "Le Maître, neuf grains", dens: "fuite", if: F("fuite"),
        text: "**Melchior Aubespin** est resté dans la note, sur un berceau, avec neuf grains et un puits. Il avait dit qu'il ne perdait rien. Il a eu le temps de refaire le compte, lui qui n'en avait jamais manqué un." },
      { id: "m_table", title: "Le Maître, à table", dens: "immobile",
        text: "**Melchior Aubespin** préside sa table, et verse le sable le dimanche, de sa main. Il a ce qu'il voulait : plus rien ne s'abîme. Il lui reste mille ans pour apprendre ce que cela vaut." },
    ] },

    { who: "odeline", label: "La Régente Odeline", list: [
      { id: "o_sans", title: "Odeline, rien à jurer", dens: "defaire", if: F("defaire"),
        text: "**Odeline** n'a aucune Régence à tenir : la Reine s'est levée de son lit le soir même. Elle naîtra peut-être, dans trente-deux ans, avec le nez de l'oncle, et le loisir d'en faire ce qu'elle voudra." },
      { id: "o_sceaux", title: "Odeline, la chaîne des sceaux", dens: "reveil", if: ET(F("reveil"), M("v_couronne_rendue")),
        text: "**La Régente Odeline** porte la chaîne des sceaux, que la Reine lui a remise au cou. L'une règne, l'autre gouverne. Elles s'entendent mieux que deux femmes qui se devraient moins." },
      { id: "o_pluie", title: "Odeline, un matin de pluie", dens: "reveil", if: F("reveil"),
        text: "**La Régente Odeline** tient des mois la cour du Palais contre la cour de la rue, de bonne foi, un Conseil dans le dos. Elle signe un matin de pluie. Elle assure ensuite qu'elle n'a jamais rien signé d'aussi bon cœur." },
      { id: "o_fait", title: "Odeline, reine de fait", dens: "partage", if: F("partage"),
        text: "**Odeline** se trouve reine de fait d'un royaume qui se réveille cercle après cercle. Elle a cessé d'acheter sa jeunesse à la pincée. Elle vieillit à partir de ce soir-là, et l'on trouve que cela lui va." },
      { id: "o_aucune", title: "Odeline, à venir", dens: "garder", if: F("garder"),
        text: "**Odeline** est à venir. Un duc gouverne au nom d'une reine tenue, et il se sait surveillé. S'il a un jour une petite-fille, elle aura le nez de l'oncle, et un serment tout prêt." },
      { id: "o_midi", title: "Odeline, avant midi", dens: "fuite", if: F("fuite"),
        text: "**La Régente Odeline** attend midi, le vingt et un juin 601, avec tout le royaume. Elle ignore que cela se décide, à cette heure, entre un escalier et un levier." },
      { id: "o_jure", title: "Odeline, je jure", dens: "immobile",
        text: "**La Régente Odeline** est sur l'estrade, grise, un rouleau à la main, la bouche ouverte sur *je jure.* Elle jurait de rendre un royaume. Il est rendu : à personne, et pour toujours." },
    ] },

    { who: "coudrier", label: "Le Grand Maître Coudrier", list: [
      { id: "c_ligne", title: "Coudrier, la première ligne", dens: "defaire", if: F("defaire"),
        text: "**Barnabé Coudrier** range le coin de bronze dans son coffre, avec une étiquette. Le quarantième chapitre du Livre a désormais une première ligne. Il meurt à quatre-vingt-quinze ans, les talons joints, en corrigeant un apprenti." },
      { id: "c_ancre", title: "Coudrier, soixante ans de retard", dens: "reveil", if: F("reveil"),
        text: "**Barnabé Coudrier** se réveille les mains à la barre, dans une Guilde qui a pris soixante ans d'avance sur lui. Il demande qu'on lui apporte une montre à ancre. Il la démonte le soir même, et il y trouve à redire." },
      { id: "c_signe", title: "Signé Coudrier", dens: "partage", if: F("partage"),
        text: "**Barnabé Coudrier** a jugé un homme sur une vie qu'il n'avait pas faite, et il a signé. Il meurt à quatre-vingt-quinze ans, en corrigeant un apprenti." },
      { id: "c_barre", title: "Coudrier, à la barre", dens: "garder", if: F("garder"),
        text: "**Barnabé Coudrier** a les deux mains à la barre, dans la Chambre basse, la moustache en bataille. Il tient depuis le onzième coup. Il tiendra tant qu'on lui gardera sa note." },
      { id: "c_soixante", title: "Coudrier, soixante ans debout", dens: "fuite", if: F("fuite"),
        text: "**Barnabé Coudrier** tient la barre depuis soixante ans, les talons joints, au milieu d'un coup de cloche. Il attend qu'on le lui rende." },
      { id: "c_ours", title: "Coudrier, à sa place", dens: "immobile",
        text: "**Barnabé Coudrier** est à sa place, gris, dans la Chambre basse. On a renoncé à le déplacer. Les quarante descendent le voir, quelquefois, comme on va voir un ours." },
    ] },
  ],
};

module.exports = { passages: {}, extras: extras };
