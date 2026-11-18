// L'Île Folle-Aiguille · side story « La pêche de Guyader et Cadiou » (owes its question to Maupassant's Two Friends:
// what is a silence worth when it costs a life, and who has the right to break it for someone else?). Act IV, the
// chapel: two old sailors of the garrison, Guyader and Cadiou, friends for forty years, slip down at dawn to the rocks
// under the spur to catch fresh fish for Victorine's wounded, because she said fresh food would save two of them. They
// are taken by mutineers, who shout up to the chapel: the number of men and of kegs of powder, or the two old men die.
// The two refuse to speak. Victorine goes down under a white rag to offer herself as a surgeon for their camp
// (vr:descend), asks the captain to have the captors fired on (vr:feu), or keeps silent and respects theirs
// (vr:silence). Wired in A4w_jours.
module.exports = {
  passages: {
    VR_aube: { act: "IV", title: "La pêche de Guyader et Cadiou", place: "misericorde", ambiance: "mer",
      fx: { meet: "guyader" },
      text: [
        "Elle l'a dit la veille, au feu du chœur, sans y penser, comme on dit une chose de médecin : deux des blessés ne guériront pas au biscuit et au lard ; il leur faudrait du frais, du poisson, du bouillon. Elle l'a dit à voix haute. Deux vieux l'ont entendue. Guyader et Cadiou, deux vieux gabiers de la Cormorane restés fidèles à la capitaine, soixante ans chacun, amis depuis quarante, qui pêchent ensemble sur le pont de la Cormorane chaque fois qu'elle est en panne, en se disputant sur l'appât, et qui ne parlent jamais de rien d'autre que de pêche.",
        "À l'aube, ils ne sont pas à l'appel. On les voit du clocher, très loin en bas, sur les rochers noirs au pied de l'éperon, côté mer, là où les mutins ne vont pas d'habitude : deux silhouettes voûtées, chacune avec sa ligne, assises côte à côte, comme sur le quai de Morlenc un dimanche. Ils ont descendu la falaise par la nuit, avec des cordes. Ils ont déjà un panier plein. Le soleil se lève. La mer est d'argent. C'est très beau, et c'est insensé.",
        "Puis, de la lisière de la forêt, sortent six hommes armés, qui descendent vers les rochers, sans courir. Les deux vieux les voient venir. Ils ne fuient pas. Où fuiraient-ils ? Ils posent leurs lignes. Ils se lèvent. On les emmène sur la plage, en contrebas de la chapelle, à portée de voix. Un des mutins, une tête que Victorine reconnaît, un matelot de la bordée de Malandain, met ses mains en porte-voix et crie vers le clocher : « Combien vous êtes là-haut, et combien de barils de poudre ! Ou on les fusille, vos pêcheurs ! »",
      ],
      choices: [{ label: "Monter au clocher, auprès de la capitaine", to: "VR_clocher" }] },
    VR_clocher: { act: "IV", title: "La pêche de Guyader et Cadiou", place: "misericorde", ambiance: "mer",
      text: [
        "Au clocher, la capitaine Ribaud regarde la plage à la longue-vue. Elle la passe à Victorine. En bas, les deux vieux sont debout côte à côte, devant les six fusils, avec leur panier de poissons à leurs pieds. On les interroge. Ils secouent la tête. On les bouscule. Cadiou tombe ; Guyader le relève. Ils secouent la tête encore. Ils ne savent peut-être même pas les chiffres. Ils les savent, sûrement : tout le monde les sait, dans une chapelle de quarante pas. Ils se taisent.",
        "La capitaine dit, d'une voix plate, qu'elle ne donnera pas les chiffres. Elle dit qu'elle ne fera pas tirer non plus, à cette distance, sur six hommes groupés autour de deux des siens : ses tireurs sont médiocres, et le premier mort serait sans doute Guyader. Elle dit qu'ils sont descendus sans ordre, qu'ils le savaient, qu'ils sont des hommes, et qu'elle ne peut rien. Puis elle regarde Victorine. « C'est pour vos blessés qu'ils sont descendus, docteur. Vous l'aviez dit tout haut. »",
        "Victorine le sait. Elle regarde, par la longue-vue, les deux vieux visages, gris, fermés, têtus, et le panier de poissons, qui brillent encore au soleil, qui frétillent peut-être. Elle pense qu'un mot d'elle, à voix haute, devant un feu, les a menés là. Elle pense qu'il lui reste quelques minutes pour dire autre chose.",
      ],
      choices: [
        { label: "Descendre sous un chiffon blanc, et proposer ses soins à leur camp en échange", fx: { flag: "vr:descend" }, to: "VR_descend" },
        { label: "Supplier la capitaine de faire tirer quand même, au-dessus de leurs têtes", fx: { flag: "vr:feu" }, to: "VR_feu" },
        { label: "Rester au clocher, et respecter leur silence jusqu'au bout", fx: { flag: "vr:silence" }, to: "VR_silence" },
      ] },
    VR_descend: { act: "IV", title: "La pêche de Guyader et Cadiou", place: "plage", ambiance: "mer",
      text: [
        "Elle descend le sentier, seule, sa sacoche à la main, un mouchoir blanc noué au bout d'une baguette de fusil. Les mutins la regardent arriver sans tirer. Elle s'arrête à dix pas. Elle dit qu'elle n'a pas les chiffres, ce qui est faux, et qu'elle ne les donnerait pas, ce qui est vrai. Elle dit qu'elle a autre chose : elle sait que leur camp a des blessés, des fièvres, des plaies qui pourrissent, puisque personne, en bas, ne sait soigner. Elle propose une journée. Une journée de chirurgien, dans leur camp, contre deux vieux et un panier de poissons.",
        "Le matelot hésite. Les autres se regardent. L'un d'eux a le bras en écharpe, une écharpe noire de sang. Ils l'emmènent, les yeux bandés, avec les deux vieux, jusqu'à leur camp. Elle passe la journée à genoux dans le sable, à ouvrir des abcès, à recoudre, à couper un doigt gangrené, à donner ses dernières gouttes de laudanum à des hommes qui ont tiré sur la chapelle. Elle ne pose aucune question. On ne lui en pose aucune. À la nuit, on lui rend ses deux vieux, et on la reconduit au pied de l'éperon. On lui rend même le panier.",
        "Elle remonte avec Guyader et Cadiou, qui ne disent rien de tout le chemin, puis, en arrivant à la porte, se mettent à se disputer sur le meilleur moyen de cuire les poissons, qui ont attendu toute la journée au soleil et ne sentent plus très bon. On en fait un bouillon quand même. Les deux blessés en boivent. L'un des deux guérit. Victorine ne saura jamais si c'est le bouillon. La capitaine lui dit, le soir, qu'elle a fait une chose insensée, et qu'elle a perdu une journée de soins à la chapelle, et qu'elle a bien fait. Elle dit les trois choses dans la même phrase.",
      ],
      choices: [{ label: "Remonter à la chapelle", fx: { quest: "VR" }, back: "A4w_jours" }] },
    VR_feu: { act: "IV", title: "La pêche de Guyader et Cadiou", place: "misericorde", ambiance: "mer",
      text: [
        "Elle supplie. Elle dit qu'on peut tirer haut, pour faire peur, pour qu'ils se dispersent, pour donner aux deux vieux une chance de courir. La capitaine la regarde longtemps. Puis elle donne l'ordre. Quatre fusils tirent du mur, au-dessus des têtes. En bas, les six hommes se jettent à plat ventre. Les deux vieux, eux, ne courent pas. Ils ne savent plus courir. Ils restent debout, au milieu de la plage, au milieu des balles, côte à côte, comme deux piquets.",
        "Un mutin, à plat ventre, tire vers le clocher, au hasard. Un autre tire vers les deux vieux, de peur ou de rage. Cadiou tombe. Guyader se penche sur lui. Les mutins s'enfuient vers la forêt, en tirant encore. Quand la fumée se dissipe, il ne reste sur la plage que deux vieux, l'un couché, l'autre à genoux, et un panier renversé, avec des poissons qui sautent dans le sable. On descend les chercher. Cadiou a une balle dans la cuisse. Il vivra. Guyader le porte jusqu'à la chapelle sur son dos, sans laisser personne l'aider.",
        "Victorine retire la balle, le soir, dans la sacristie. Cadiou jure pendant toute l'opération, contre les mutins, contre la capitaine, contre elle, et surtout contre Guyader, qui a ramassé les poissons avant de le ramasser, lui. Guyader, assis à côté, dit que les poissons étaient pour les blessés, et que Cadiou en est un, maintenant, alors il aura sa part. Victorine les écoute se disputer et pense qu'elle a fait tirer sur deux hommes pour les sauver. Elle pense que ça a marché à moitié. Elle pense que la moitié qui n'a pas marché, c'est elle qui la portera.",
      ],
      choices: [{ label: "Remonter à la chapelle", fx: { quest: "VR" }, back: "A4w_jours" }] },
    VR_silence: { act: "IV", title: "La pêche de Guyader et Cadiou", place: "misericorde", ambiance: "mer",
      text: [
        "Elle reste au clocher. Elle regarde. Elle ne dit rien. Les deux vieux non plus. Le soleil monte. Les mutins crient, menacent, mettent en joue, baissent les fusils, remettent en joue. Une heure passe. Guyader, à un moment, se baisse, prend un poisson dans le panier, le regarde, le remet dans le panier, en hochant la tête, comme pour dire qu'il est beau. Cadiou rit. On l'entend rire, du clocher, très faiblement. C'est le son le plus étrange que Victorine ait jamais entendu.",
        { if: { not: { has: "fargue:depose" } }, text: "Puis un homme sort de la forêt et descend sur la plage. Un homme carré, sans arme, en tablier. Le maître-coq. Il parle aux six, à voix basse. Il les engueule, à ce qu'il semble, en montrant la chapelle, la mer, les deux vieux. Les fusils s'abaissent. Le maître-coq ramasse le panier de poissons, l'examine, en prend un, le soupèse, et dit quelque chose qui fait rire Cadiou de nouveau. Puis il rend le panier à Guyader, et il fait un geste vers le sentier de l'éperon. On les laisse remonter." },
        { if: { has: "fargue:depose" }, text: "Puis un homme sort de la forêt et descend sur la plage. Un homme carré, sans arme, en tablier, que les autres n'écoutent plus, dit-on, depuis quelques jours. Le maître-coq. Il ne donne pas d'ordre. Il s'assied sur une pierre, à côté des deux vieux, sort sa pipe, et attend avec eux, comme s'il était le troisième pêcheur. Les six se regardent. Un fusil s'abaisse, puis un autre. Personne ne veut fusiller trois hommes dont un qui les a nourris pendant des mois. Au bout d'un moment, le maître-coq rend le panier à Guyader et fait un geste vers le sentier de l'éperon. On les laisse remonter." },
        "Ils remontent, très lentement, avec leur panier, en se tenant par le bras. À la porte, on les accueille comme des héros. Ils n'en ont pas l'air. Guyader dit seulement à Victorine, en lui tendant le panier : « Le cuisinier dit qu'il faut les vider tout de suite, à cause du soleil. Il a raison, ce salaud. » Elle fait le bouillon. Les deux blessés en boivent. Elle pense que deux vieux ont mis leur vie dans leur silence, et qu'elle a eu raison de ne pas le briser à leur place, et qu'elle aurait eu raison aussi de le faire. Elle sait que le choix était le leur. Elle découvre que ça ne rend pas l'attente plus courte.",
      ],
      choices: [{ label: "Remonter à la chapelle", fx: { quest: "VR" }, back: "A4w_jours" }] },
  },
  extras: {
    people: {
      guyader: { name: "Guyader", aka: ["le vieux pêcheur"], qui: "Vieux gabier de la Cormorane, pêcheur obstiné, ami de Cadiou depuis quarante ans." },
    },
    quests: [
      { id: "VR", act: "IV", kind: "annexe", title: "La pêche de Guyader et Cadiou", start: "VR_aube", doit: "deuxamis", echo: ["vr:descend", "vr:feu", "vr:silence"] },
    ],
  },
};
