// Le Douzième Coup · what each hero tells the other (the `aveu` scenes of story.secrets, offered on the passages marked
// aparte). In act I the two heroes are in the same room and the thing is said aloud; from the Gate onward it is written
// in the twin notebook at an hour-stone, and the other reads it at the next rendezvous. An aveu scene has no act and no
// place, and ends with back: true.
var VOIX = { not: { seen: "B03" } }, ECRIT = { seen: "B03" };

module.exports = {
  passages: {
    // ------------------------------------------------------------ the one who passes
    S_aveu_malade: { title: "Le mouchoir de Line", back: true,
      text: [
        { if: VOIX, text: "Tu attends que Line soit descendue à la cave. Tu le dis vite et bas, les yeux sur l'établi : le mouchoir, le rouge frais sur le brun, la Saint-Martin, le compte qu'elle a fait. « Elle verra le Grand Midi, ou elle le manquera de peu. Elle m'a fait jurer de te le taire. »" },
        { if: VOIX, text: "{autre} garde le silence. En bas, on entend Line déplacer un pot de grès, tousser, et s'en excuser auprès du pot. « Elle dit qu'il lui faut des jambes, et qu'elle trouvera toujours assez de pleureurs. » Tu viens de manquer à ta parole pour la première fois de ta vie, et tu constates avec surprise que tu respires mieux." },
        { if: ECRIT, text: "Tu écris petit, en bas de page, comme on écrit ce qu'on voudrait pouvoir nier. *Line est malade. Elle crache du sang depuis la Saint-Martin. Elle a fait son compte : elle verra le Grand Midi, ou elle le manquera de peu. Elle m'a fait jurer de te le taire, pour que tu marches sans te retourner.*" },
        { if: ECRIT, text: "Tu ajoutes une ligne : *Je te le dis parce que tu es de son côté du temps, et moi plus.* L'encre boit, pâlit, s'en va vers l'autre Cahier. De vous deux, {autre} est désormais {autre:le} seul{autre:e} qui puisse encore lui tenir la main, et tu viens de lui en donner la charge sans lui demander son avis." },
      ] },
    S_aveu_rester: { title: "Le pain blanc", back: true,
      text: [
        "Tu tailles ta plume plus longtemps qu'il ne faut. Puis tu écris, d'un trait, pour ne pas te relire : *Ici, les villages sont pleins. On entend des cloches d'un clocher à l'autre. Le pain est blanc, et l'on m'a gardé une place à table. Je pense à rentrer un peu moins chaque jour.*",
        "*Je ferai ce que je suis venu{e} faire. Je te le dois, et à Line. Après, je ne sais plus.* Tu regardes la phrase s'effacer de ton côté. Elle était vraie tant qu'elle était dans ta tête ; écrite, elle a l'air d'une désertion, et elle part quand même.",
      ] },
    S_aveu_reine: { title: "Une parole donnée au Palais", back: true,
      text: [
        "*J'ai vu la reine.* Tu t'arrêtes là un moment, parce que la phrase suivante est difficile. *Elle a une petite fille qui meurt. Elle veut arrêter l'heure de l'enfant jusqu'à ce qu'on sache la guérir. Elle m'a demandé mon aide, et j'ai dit oui.*",
        "*Je sais ce que tu vas penser : tu marches dedans. Je le savais en donnant ma parole.* Tu soulignes le mot *oui*, d'un trait qui crève presque le papier, pour qu'au moins {autre} n'ait pas à douter de ce qu'{autre:il} lit.",
      ] },
    S_aveu_efface: { title: "Ce que coûte le douzième coup", back: true,
      text: [
        "Tu recopies les mots de maître Coudrier comme il les a dits, parce que tu n'en as pas trouvé de plus doux. *Si le douzième coup sonne de mon côté, la Dormante n'aura jamais existé. Ni la lisière, ni les glaneurs, ni les Trois-Noyers tels que tu les connais. Soixante ans s'écriront autrement.*",
        "*Il dit que personne ne peut savoir qui naîtra dans ces soixante ans-là. Il dit que toi, peut-être, non.* Ta main reste en l'air. Tu ajoutes : *Je ne ferai rien sans toi.* La ligne s'en va. Il te reste à attendre une borne entière la réponse de quelqu'un à qui tu viens d'écrire qu'{autre:il} pourrait n'avoir jamais été.",
      ] },

    // ------------------------------------------------------------ the one who stays
    S_aveu_vol: { title: "Le soupirail", back: true,
      text: [
        { if: VOIX, text: "Tu poses ton sac. Tu le dis d'abord au mur, parce que le mur a la bonté de ne pas te regarder. « Le sable de la cave. En janvier. C'est moi. »" },
        { if: VOIX, text: "Le reste vient tout seul, comme vient une dent une fois qu'elle branle : le soupirail à charbon, la barre ôtée et remise, les pieds nus dans la neige, trois mesures dans une taie, quarante écus de la Courtepaille. « Je croyais qu'elle le gardait comme les vieux gardent tout. Je ne savais pas à quoi il servait. » Tu regardes {autre} en face. « Maintenant je le sais. Il servait à te ramener. »" },
        { if: ECRIT, text: "Tu écris en lettres bâtons, les seules que tu saches bien faire. *Le sable de la cave, en janvier, c'est moi. Par le soupirail à charbon. Trois mesures, vendues quarante écus à la Courtepaille.*" },
        { if: ECRIT, text: "*Je croyais que la vieille le gardait comme les vieux gardent tout. Je ne savais pas à quoi il servait. Il servait à te ramener.* Tu restes la plume levée. Il faudrait ajouter quelque chose, des excuses, une promesse ; tu n'as jamais su écrire ces mots-là, et tu refermes le Cahier sur ce qui est vrai." },
      ] },
    S_aveu_garde: { title: "Cinq écus au sablier", back: true,
      text: [
        { if: VOIX, text: "Tu sors les cinq écus de ta poche et tu les poses sur le plancher, entre vous deux, en ligne, comme le capitaine les avait posés sur la margelle. « Ceux-là viennent de la Garde. Il voulait savoir où la vieille va cette nuit. Je le lui ai dit. »" },
        { if: VOIX, text: "Dit tout haut, cela tient en trois phrases et cela pèse beaucoup plus que cinq écus. « Ils auront des lanternes. Ils attendront qu'elle soit devant sa porte. » Tu repousses les pièces du bout du pied. « Je te le dis pendant qu'on peut encore changer de chemin. »" },
        { if: ECRIT, text: "*Le matin du départ, le capitaine de la Garde m'a payé{e} pour savoir où Line allait cette nuit-là. Cinq écus. J'ai dit : la Ferme-Vieille.* Tu appuies si fort que la plume crache. *C'est par moi qu'ils sont venus à la grange. Tu as passé de justesse, et c'est ma faute si ce fut de justesse.*" },
        { if: ECRIT, text: "Tu regardes les lettres s'en aller. Dans ta poche, il reste un de ces écus-là, que tu n'arrives ni à dépenser ni à jeter." },
      ] },
    S_aveu_soeur: { title: "Lison", back: true,
      text: [
        { if: VOIX, text: "« J'ai une sœur. » Tu n'avais dit cette phrase à personne depuis six ans, et elle sort au présent, toute seule. « Lison. Elle avait cinq ans la nuit du Bond. On habitait Roquebise, la rue des Potiers. Moi, j'étais chez mon oncle aux Hautes-Bordes, pour les foins. Elle, non. »" },
        { if: VOIX, text: "« Elle les a toujours, ses cinq ans. Je vais la regarder de loin, de la croix, presque toutes les nuits : c'est pour cela que je ne rapporte rien. » Tu hausses une épaule. « La vieille veut que j'aille à Méridane. J'irai. Seulement, sur la route de Méridane, il y a Roquebise, et à Roquebise je m'arrête. Autant que tu le saches. »" },
        { if: ECRIT, text: "*J'ai une sœur. Elle s'appelle Lison. Elle avait cinq ans la nuit du Bond, à Roquebise, rue des Potiers, et elle les a toujours.* Tu écris son nom une seconde fois, plus gros, sans raison, pour le voir." },
        { if: ECRIT, text: "*La reine, la ville, le royaume : je marche pour Lison. Autant que tu le saches. Si tu passes par Roquebise, de ton côté, la troisième maison après la fontaine, la porte bleue : c'est chez nous, avant nous.* Tu refermes le Cahier. C'est la plus longue lettre de ta vie, et elle part pour une année où ta mère n'était pas née." },
      ] },
    S_aveu_chronique: { title: "Une ligne de la Chronique", back: true,
      text: [
        "Tu as le livre ouvert sur un genou et le Cahier sur l'autre. Tu recopies la ligne mot pour mot, avec ses majuscules, parce que tu ne veux rien y mettre de toi. *Fut aussi vu ce jour-là, sur les degrés de la Tour, un Étranger de jeune âge que nul ne connaissait, complice du Maudit ; lequel Étranger fut mis à mort par les gardes au onzième coup, et c'est justice.*",
        "*C'est la Chronique de la Régence. Line dit qu'elle ment une ligne sur deux. Je ne sais pas si c'est celle-ci.* Tu ajoutes, en lettres bâtons : *NE MONTE PAS SUR CES MARCHES SANS ME L'ÉCRIRE D'ABORD.* Puis tu regardes l'encre pâlir, et tu te demandes ce qu'on fait d'un avertissement qui arrive soixante ans avant la chose.",
      ] },
  },
};
