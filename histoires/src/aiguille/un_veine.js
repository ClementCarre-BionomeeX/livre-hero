// L'Île Folle-Aiguille · side story « Le marié de la veine morte » (owes its question to Hoffmann's The Mines of Falun:
// is it a mercy to show someone, after a lifetime, the face she has waited for?). Act IV, the mousse in the Puits: the
// pale children lead the child into the dead vein, an old flooded gallery no one works any more. In the green water,
// under a skin of salts, lies a young man, intact, as if asleep, with a silver ring in his fist. The children know who
// he is: the betrothed of the third Mother, the one who never speaks, drowned there on the morning of their wedding,
// twenty-seven years ago, when he went down alone to cut the silver for the ring. The child brings the Mother to see him
// (un:montre), keeps the secret and lets the vein keep him (un:tait), or brings her only the ring (un:anneau).
// Wired in XD_forge.
module.exports = {
  passages: {
    UN_enfants: { act: "IV", title: "Le marié de la veine morte", place: "puits", ambiance: "souterrain",
      text: [
        "Les enfants pâles reviennent te chercher, un soir, en groupe, avec des airs de conspirateurs. La fille hardie, celle qui t'a demandé comment était le soleil, te prend par la main. Elle dit qu'ils vont te montrer une chose que les grands ne montrent pas. Ici, on n'a honte de rien, mais il y a des choses dont on ne parle pas : ce n'est pas pareil, t'explique-t-elle, très sérieuse, comme une grande personne qui explique la politesse.",
        "Ils te mènent par des galeries de plus en plus étroites, de plus en plus anciennes, où les étais de bois sont noirs et doux comme du velours, où la roche pleure une eau verte qui laisse des traînées de sel sur les parois. Ils marchent sans lanterne : ils voient dans le noir, ou ils connaissent le chemin par cœur avec leurs pieds. Toi, tu as une chandelle, qu'ils trouvent ridicule. On descend. On descend encore. Puis la galerie s'arrête au bord d'une eau.",
        "La veine morte. Une ancienne galerie, que l'eau a prise il y a longtemps, et qu'on a abandonnée. L'eau est immobile, verte, si claire qu'on voit le fond, couvert de cristaux blancs comme du givre. Elle sent le fer et le vitriol. La fille hardie s'accroupit au bord et te fait signe de baisser ta chandelle.",
      ],
      choices: [{ label: "Baisser la chandelle vers l'eau", to: "UN_marie" }] },
    UN_marie: { act: "IV", title: "Le marié de la veine morte", place: "puits", ambiance: "souterrain",
      text: [
        "Il est là, à deux brasses sous la surface, couché sur le dos dans les cristaux, les bras le long du corps. Un jeune homme. Vingt ans, peut-être. Des cheveux noirs qui flottent à peine. Un visage intact, lisse, paisible, aux yeux fermés, à la bouche entrouverte, comme quelqu'un qui dort après une longue journée. Il porte une chemise blanche, une chemise de fête, avec une fleur de fer forgé à la boutonnière. Sa main droite est fermée sur quelque chose qui brille.",
        "Il n'a pas changé. L'eau de la veine, chargée de sels, l'a gardé comme on garde un fruit dans le sucre. Tu le regardes longtemps. Tu as vu des morts. Tu n'en as jamais vu un qui ait l'air si vivant, et si seul.",
        "La fille hardie raconte, à voix basse. Il s'appelait Brieg. C'était le premier hiver, après la descente. Il devait épouser Enored, la troisième Mère, qui n'était pas encore une Mère, mais une fille de dix-huit ans. Le matin des noces, il est descendu seul dans la veine, avant l'aube, pour tailler l'argent de l'anneau, parce qu'il voulait que ce soit lui qui le taille, et pas un autre. La poche a crevé. L'eau a pris la galerie. On n'a jamais pu le sortir. Enored l'a attendu toute la journée, dans sa robe, devant la forge. Elle n'a plus jamais parlé, depuis. Vingt-sept ans.",
        "Les enfants viennent le voir en cachette. Ils lui apportent des cailloux brillants, qu'ils jettent dans l'eau, et qui descendent lentement vers lui. Les grands savent qu'il est là. Personne n'a jamais dit à Enored qu'on pouvait le voir. On a pensé que ce serait trop cruel. Ou pas assez. Personne ne sait. La fille hardie te regarde. Elle dit que toi, tu viens d'en haut, et que tu sauras peut-être.",
      ],
      choices: [
        { label: "Aller chercher la troisième Mère, et la mener jusqu'à l'eau", fx: { flag: "un:montre" }, to: "UN_montre" },
        { label: "Remonter sans rien dire, et laisser la veine garder son marié", fx: { flag: "un:tait" }, to: "UN_tait" },
        { label: "Plonger chercher ce qu'il tient dans la main, et le lui porter", fx: { flag: "un:anneau" }, to: "UN_anneau" },
      ] },
    UN_montre: { act: "IV", title: "Le marié de la veine morte", place: "puits", ambiance: "souterrain",
      text: [
        "La troisième Mère tricote près du foyer, avec ses aiguilles de clou. Tu t'agenouilles devant elle. Tu lui dis, très bas, qu'il y a quelqu'un dans la veine morte qu'on peut voir, et qu'il n'a pas changé. Ses aiguilles s'arrêtent. Elle te regarde longtemps, avec des yeux d'une couleur que tu n'avais pas remarquée, gris très clair, presque blancs. Puis elle pose son tricot. Elle se lève. Les deux autres Mères la regardent partir et ne disent rien.",
        "Elle marche devant toi, dans les galeries, sans chandelle, plus vite que les enfants. Elle connaît le chemin. Elle l'a pris, comprends-tu, bien des fois, autrefois, jusqu'au bord de l'eau trouble, avant que l'eau devienne claire. Elle arrive au bord. Elle s'agenouille. Tu baisses la chandelle.",
        "Elle le voit. Elle a quarante-cinq ans, des cheveux gris, des mains noircies de forge, un visage de pierre usée. Il en a vingt, pour toujours, une fleur de fer à la boutonnière. Elle reste à genoux, sans un geste, sans un son, pendant que ta chandelle brûle jusqu'à tes doigts. Puis elle dit un mot. Un seul. Son nom. « Brieg. » C'est la première fois depuis vingt-sept ans qu'on entend sa voix. Elle est rauque, cassée, et douce.",
        "Elle revient le lendemain, seule. Et le jour d'après. Elle s'assied au bord de l'eau, avec son tricot, et elle tricote en lui parlant, à voix basse, sans arrêt, de tout ce qu'il a manqué : la forge, les enfants, la roue, les morts, Hugon, la laine de chèvre. Elle a vingt-sept ans à lui raconter. Les enfants disent qu'elle rit, quelquefois. Tu ne sais pas si tu lui as rendu la vie ou si tu l'as enfermée au bord d'une eau. Tu sais qu'elle parle.",
      ],
      choices: [{ label: "Revenir vers la forge", fx: { quest: "UN" }, back: "XD_forge" }] },
    UN_tait: { act: "IV", title: "Le marié de la veine morte", place: "puits", ambiance: "souterrain",
      text: [
        "Tu relèves la chandelle. Tu dis aux enfants que tu ne sais pas, et que c'est sans doute pour ça que les grands n'ont rien dit : parce qu'ils ne savaient pas non plus. Tu dis qu'une femme qui a attendu vingt-sept ans a peut-être fini par trouver un endroit, en elle, où l'attente ne fait plus mal, et que tu n'as pas le droit d'y descendre avec une chandelle. La fille hardie hoche la tête, très grave, comme si tu venais de dire une chose importante. Tu ne sais pas si c'en est une.",
        "Avant de partir, tu jettes dans l'eau, comme les enfants, un caillou. Le plus brillant que tu aies : un éclat de la roche rouge de l'Écueil, ou un bouton de ta vareuse, n'importe quoi. Il descend lentement, en tournoyant, et se pose près de la main fermée. Le marié dort. Il dormira, sans doute, plus longtemps que vous tous.",
        "En remontant, tu passes devant le foyer. La troisième Mère tricote. Elle lève les yeux vers toi, une seconde, et tu as l'impression absurde qu'elle sait d'où tu viens, et que ça lui est égal, ou que ça ne lui est pas égal du tout, et qu'elle te remercie de ne pas lui avoir demandé de choisir. Puis elle baisse les yeux. Les aiguilles reprennent. Tu ne sauras jamais ce que voulait dire ce regard.",
      ],
      choices: [{ label: "Revenir vers la forge", fx: { quest: "UN" }, back: "XD_forge" }] },
    UN_anneau: { act: "IV", title: "Le marié de la veine morte", place: "puits", ambiance: "souterrain",
      text: [
        "Tu ôtes ta vareuse. Les enfants te regardent avec effroi : personne ne descend dans la veine morte. L'eau est glacée, et elle brûle, à cause des sels. Tu prends ta respiration et tu plonges. Deux brasses. Tes yeux piquent. Il est là, sous toi, intact, la bouche entrouverte. Tu touches sa main. Elle est dure comme une pierre, froide comme une pierre. Tu ouvres ses doigts, un par un. Ils cèdent. Dans sa paume, un anneau d'argent brut, mal poli, taillé au burin, avec une petite fleur gravée dessus. Tu le prends. Tu remontes.",
        "Tu sors de l'eau en toussant, la peau rouge de sel, les yeux en feu. Les enfants te frottent avec leurs tabliers. Tu tiens l'anneau. Il est si petit. Il a été fait pour un doigt de dix-huit ans. Tu remontes à la forge, trempé{e}, frissonnant{e}, et tu t'agenouilles devant la troisième Mère, et tu ouvres la main.",
        "Elle regarde l'anneau. Elle ne pose pas de question. Elle sait d'où il vient, et ce que ça veut dire, qu'il ait été taillé, et qu'il ait été retrouvé, et que tu sois mouillé{e}. Elle le prend. Elle essaie de le passer à son doigt. Il ne passe pas : ses doigts ont vingt-sept ans de forge. Elle le passe au petit doigt. Il entre jusqu'à la deuxième phalange. Elle le regarde là, longtemps.",
        "Puis elle te prend la tête entre ses mains noires et elle t'embrasse sur le front, très fort, comme on embrasse un enfant qui revient d'un endroit dangereux. Elle ne dit rien. Elle reprend son tricot. Mais ses aiguilles, maintenant, font un petit bruit de plus, à chaque maille : le cliquetis de l'argent contre le fer. Les deux autres Mères le remarquent. Elles se regardent. L'une d'elles sourit. Tu as rendu à une femme ce qu'on lui devait, sans lui montrer ce qu'elle avait perdu. Tu ne sais pas si c'était de la délicatesse ou de la lâcheté. Elle semble penser que c'était de la délicatesse.",
      ],
      choices: [{ label: "Revenir vers la forge", fx: { quest: "UN" }, back: "XD_forge" }] },
  },
  extras: {
    quests: [
      { id: "UN", act: "IV", kind: "annexe", title: "Le marié de la veine morte", start: "UN_enfants", doit: "falun", echo: ["un:montre", "un:tait", "un:anneau"] },
    ],
  },
};
