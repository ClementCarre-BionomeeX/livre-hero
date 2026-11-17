// L'Île Folle-Aiguille · side story « Le cercle de Monsieur Gris » (owes its question to Demons: is a group bound by a
// crime committed together, and what does the one who lets it happen become?). Act IV, the mutineers' camp, only if
// Monsieur Gris has joined it: young Tudal Nédélec, carpenter's mate, has spoken of going up to the chapel to give
// himself up. Gris, by the fire, offers the camp a remedy against doubt: kill him together, every man a blow, so that
// no one can ever leave. Fargue forbids it before everyone (vd:interdit), lets it happen (vd:laisse), or warns the boy
// and sends him into the forest at night (vd:previent). Wired in A4f_jours.
module.exports = {
  passages: {
    VD_feu: { act: "IV", title: "Le cercle de Monsieur Gris", place: "plage", ambiance: "nuit", second: true,
      fx: { meet: "nedelec" },
      text: [
        "Il y a, au camp, un garçon de vingt ans qui ne dort plus. Tudal Nédélec, aide-charpentier, des mains d'artisan, une figure de séminariste, une mère à Morlenc à qui il envoie toute sa solde. Il a suivi la mutinerie comme on suit une procession, parce que tout le monde marchait. Depuis trois jours, il regarde la chapelle, là-haut, sur l'éperon. Hier soir, au feu, il a dit tout haut ce que d'autres pensent tout bas : qu'il irait peut-être se rendre, et qu'on pend moins volontiers ceux qui se rendent.",
        "Ce soir, quand Fargue revient de la forêt avec un sac de crabes, il trouve le camp assis en rond autour du grand feu, dans un silence d'église, et au milieu du cercle, debout, les mains dans les poches de son habit d'aide-chirurgien, Monsieur Gris. Nédélec n'est pas dans le cercle. Il dort, ou fait semblant, sous sa voile, à vingt pas. Gris parle bas, d'une voix douce, raisonnable, presque tendre, et les hommes l'écoutent comme on écoute un médecin annoncer un traitement pénible.",
        "« Vous êtes vingt, dit-il. Vingt hommes qui ont chacun une raison de rentrer chez eux et de raconter que c'étaient les autres. Ça, mes amis, c'est une maladie, et elle est mortelle. Je connais le remède. On le connaît depuis qu'il y a des hommes. Un homme qu'on a tué ensemble lie mieux que tous les serments. Chacun un coup. Personne ne pourra plus jamais rien dire à personne, et vous serez frères, vraiment, pour toujours. » Il se tourne vers Fargue, dans l'ombre, avec un sourire d'enfant ravi. « Le petit charpentier. Ce soir. Qu'en pense notre cuisinier ? »",
      ],
      choices: [{ label: "Regarder les visages, autour du feu", to: "VD_visages" }] },
    VD_visages: { act: "IV", title: "Le cercle de Monsieur Gris", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Fargue regarde les visages. Tous fixent le feu, et seulement le feu : ni Gris, ni la voile, à vingt pas, sous laquelle Nédélec respire. Il voit sur ces figures de matelots qu'il a nourris pendant des mois une chose qu'il connaît, pour l'avoir vue sur la Maraude, il y a vingt ans, une nuit qu'il s'est juré d'oublier : le soulagement des hommes à qui l'on propose un crime qui les dispensera de penser.",
        "Gris a raison, et c'est ce qui l'effraie. Fargue a besoin de ces hommes soudés. Un seul qui monte à la chapelle, et la capitaine saura combien ils sont, où ils dorment, ce qu'ils veulent ; un deuxième suivra, puis un troisième. Il le sait. Il l'a calculé lui-même, cet après-midi, en grattant des crabes. Il a même pensé, une seconde, à une solution. Elle ressemblait beaucoup à celle de Gris, avec moins de phrases.",
        "Gris attend, les sourcils levés, avec une politesse infinie. Il a tout son temps. Il sait déjà, semble-t-il, ce que Fargue va répondre, et il trouve ça délicieux.",
      ],
      choices: [
        { label: "Entrer dans le cercle, et l'interdire devant tous", fx: { flag: "vd:interdit" }, to: "VD_interdit" },
        { label: "Poser les crabes, et aller marcher au bord de l'eau", fx: { flag: "vd:laisse" }, to: "VD_laisse" },
        { label: "Faire semblant de réfléchir, et aller réveiller le garçon", fx: { flag: "vd:previent" }, to: "VD_previent" },
      ] },
    VD_interdit: { act: "IV", title: "Le cercle de Monsieur Gris", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Il entre dans le cercle. Il pose son sac de crabes aux pieds de Gris, comme on pose une pièce à conviction. Il dit, sans élever la voix, que le premier qui touche au petit charpentier ne mangera plus jamais rien de sa main, et que sur cette île, sans sa main, on mange des racines. Il dit que s'ils ont besoin d'un crime pour être frères, ils n'ont qu'à aller tuer quelqu'un dans la chapelle, ce sera au moins un crime utile. Puis il regarde Gris, longtemps. « Et toi, docteur, tu tiendras le couteau le dernier. Comme d'habitude. »",
        "Les hommes baissent les yeux. Gris rit, s'incline, ôte un chapeau qu'il ne porte pas, et s'en va dormir en sifflotant. Le cercle se défait. Fargue fait cuire les crabes. Chacun mange en silence. Il a gagné ce soir. Il le sent. Il sent aussi, à la manière dont on lui tend les écuelles, que les hommes lui en veulent un peu de les avoir empêchés d'être lâches tous ensemble, ce qui est un plaisir dont on prive difficilement un groupe.",
        "À l'aube, la voile de Nédélec est vide. Il est parti dans la nuit, vers la chapelle, avec ses outils. Personne ne le poursuit. Fargue regarde les traces dans le sable, qui montent vers l'éperon, et il pense que la capitaine saura désormais combien ils sont, où ils dorment, ce qu'ils veulent. Il a payé ça. Il trouve le prix juste. Gris, à côté de lui, regarde les mêmes traces, et dit, d'un air innocent : « Un de moins. Le prochain, vous le garderez comment ? »",
      ],
      choices: [{ label: "Retourner à la marmite", fx: { quest: "VD" }, back: "A4f_jours" }] },
    VD_laisse: { act: "IV", title: "Le cercle de Monsieur Gris", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Il pose le sac de crabes près du feu. Il ne dit rien. Il s'en va marcher au bord de l'eau, très loin, jusqu'aux rochers du bout de la plage, là où le ressac couvre tout. Il s'assied. Il bourre sa pipe. Il la bourre longtemps, avec un soin d'horloger. Le vent vient de la mer. Il emporte les bruits du camp vers la forêt. C'est ce qu'il a choisi : un endroit où le vent soufflerait dans le bon sens.",
        "Il revient à minuit. Le feu a baissé. Les hommes dorment, ou font semblant, chacun sous sa voile. La voile de Nédélec n'est plus là. Il y a, au bord de la forêt, un endroit où le sable a été retourné et lissé, avec soin, à la pelle, et plusieurs paires de mains qui ont fini par se laver dans le ruisseau. Gris est assis près du feu, seul, et il chantonne. Il lève les yeux vers Fargue. Il dit : « Vous voyez. Ils dorment. Ils dorment tous comme des enfants. Sauf nous deux. »",
        "Le lendemain, le camp est parfait. Les hommes obéissent au premier mot. Ils se tiennent les coudes. Ils évitent de parler de la chapelle, et ils évitent aussi de se regarder dans les yeux ; quand l'un rit, les autres se retournent, et le rire s'arrête. Fargue a ce qu'il voulait : une bande. Il fait la cuisine. Il sert les écuelles, une par une. Il en compte une de trop, chaque soir, pendant des jours, et chaque soir il la vide dans le sable, sans que personne lui demande pourquoi.",
      ],
      choices: [{ label: "Retourner à la marmite", fx: { quest: "VD" }, back: "A4f_jours" }] },
    VD_previent: { act: "IV", title: "Le cercle de Monsieur Gris", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Il dit qu'il faut réfléchir, qu'on ne fait pas ces choses-là le ventre vide, et il met les crabes à cuire. Gris sourit et se rassied. Les hommes, soulagés d'un sursis, sortent leurs écuelles. Pendant que la marmite chante, Fargue va chercher du bois derrière les abris. Il s'accroupit près de la voile de Nédélec. Le garçon ne dort pas. Il a tout entendu. Il tremble si fort que la voile tremble avec lui.",
        "Fargue lui met dans les mains un pain, une gourde, et son propre couteau. Il lui montre, dans l'obscurité, le sentier de la forêt qui fait le grand tour par le ruisseau et monte à l'éperon par le nord, là où la garnison ne tire pas. Il lui dit de crier son nom de loin, les mains en l'air, et de dire tout ce qu'il sait, tout, puisque ça n'a plus d'importance. Le garçon lui saisit la main, et la baise, à la manière des gens de la campagne. Fargue la retire. « File. »",
        "Au matin, on découvre la voile vide. Les hommes jurent. Gris ne jure pas. Il vient s'asseoir près de la marmite, pendant que Fargue fait le café, et dit à voix basse, sans le regarder : « Vous l'avez fait pour vous, bien sûr. Pour pouvoir encore vous regarder dans votre cuillère. Le garçon vous a servi de miroir. » Puis, plus haut, pour les autres : « Le cuisinier a mal surveillé ses crabes, cette nuit. » Plusieurs têtes se tournent. Fargue sert le café. Il a sauvé un garçon. Il vient de perdre un peu de ce qui lui permettait de garder les autres.",
      ],
      choices: [{ label: "Retourner à la marmite", fx: { quest: "VD" }, back: "A4f_jours" }] },
  },
  extras: {
    people: {
      nedelec: { name: "Tudal Nédélec", aka: ["le petit charpentier"], qui: "Aide-charpentier de la Cormorane, passé avec les mutins, qui songe à se rendre." },
    },
    quests: [
      { id: "VD", act: "IV", kind: "annexe", title: "Le cercle de Monsieur Gris", start: "VD_feu", doit: "demons", echo: ["vd:interdit", "vd:laisse", "vd:previent"] },
    ],
  },
};
