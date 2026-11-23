// « Le Cuir de Gras-Double » · the five endings: the water shared, the secret kept, the Maison told, the cellar found
// by Lardon, and the camp lifted with the leather unread.
function fin(id, title, place, text) { return { act: "I", title: title, place: place, end: true, fx: { flag: "fin:" + id }, text: text }; }
module.exports = {
  F_partage: fin("partage", "Trente bouteilles", "camp", [
    "Tu remontes trente bouteilles, une par motard, dans des sacoches, dans le cuir, dans tes bras. Tu les arrimes à ta moto avec ce que tu trouves. Elle roule comme une charrette de verre, en tintant à chaque bosse, et tu rentres au campement à midi, sous un soleil de plomb, en faisant le bruit d'un lustre qui traverse le désert.",
    { if: { has: "lardon:devant" }, text: "Lardon roule à côté de toi, quinze bouteilles sur le dos. Il ne dit rien de tout le trajet. À l'entrée du campement, il te laisse passer devant." },
    "Le clan sort des tentes. Mama Salée ouvre la première bouteille, d'un coup de dents, recrache le bouchon d'or dans le sable, et boit. Elle boit longtemps. Puis elle sale le reste de la bouteille, par principe, et la passe au suivant.",
    "Le soir, on chante le cent huitième couplet du *Chant du Demi-Sel*, qu'on ne chantait plus. Mama Salée coud sur ton cuir, à la suite des six autres, un septième écusson, à l'endroit, en fil de coton du clan : un ange qui souffle dans une trompette, et en dessous, en capitales droites, *SOURCE*.",
    "Il y a de l'eau pour trois ans, si on la sale. Le clan déménage à côté de l'ange. La Maison, qui a vendu ces bouteilles à personne, ne s'en aperçoit jamais.",
  ]),
  F_secret: fin("secret", "Une bouteille par mois", "ange", [
    "Tu remontes une seule bouteille. Tu refermes la plaque de fer, tu la recouvres de sable, tu effaces tes traces avec le cuir, comme on efface un tableau.",
    { if: { has: "lardon:devant" }, text: "Lardon te regarde faire. Tu lui tends la bouteille. Il la prend, il boit, et il comprend : c'est le prix. Il ne dira rien. Il roulera seul, une fois par mois, lui aussi, et il reviendra avec sa gourde pleine, et on dira au campement qu'il est devenu bizarre, depuis la mort du vieux." },
    "Au campement, le puits donne de la vase. Tu partages ta bouteille avec Mama Salée, sans dire d'où elle vient. Elle la boit, la sale, te regarde longtemps, et ne pose pas de question. Elle a compris que tu avais lu le cuir. Elle a compris aussi ce que tu en as fait.",
    "Le surlendemain, le clan lève le camp, vers le puits suivant, à six jours. Tu roules en queue de colonne, avec ton cuir à six écussons, et une gourde pleine que tu partages, chaque soir, avec ceux qui n'en peuvent plus. On ne sera pas tous au prochain puits. On y sera presque tous. C'est déjà plus que prévu.",
    "Une fois par mois, désormais, tu partiras seul{e} vers le nord-est, et tu reviendras avec de l'eau qui ne sent rien. Tu deviens, petit à petit, Gras-Double. Le cuir, un jour, ne sera plus trop grand.",
  ]),
  F_maison: fin("maison", "Le stock", "route", [
    "Tu roules jusqu'au kilomètre 66, avec une bouteille d'Eau de Passage™ dans ta sacoche, jusqu'à la boutique Hell's Butter™, marbre et verre, seule au milieu du désert, avec sa pompe dorée et sa vendeuse impeccable.",
    "La vendeuse examine la bouteille avec une attention infinie. Elle consulte un registre de cuir. Elle sourit. « Lot 1987-B, dit-elle. Dépôt du désert. Inscrit en perte depuis l'Effondrement. Vous l'avez retrouvé ? La Maison vous en remercie infiniment. »",
    "Elle remplit un formulaire. « Ce stock appartient à la Maison. Il sera rapatrié dans la semaine. Vous avez droit, pour votre honnêteté, à une remise de dix pour cent sur une bouteille. Elle coûte deux mille euros. » Elle sourit encore. « Elle est délicieuse. »",
    "Trois jours plus tard, des camions blindés à l'angelot doré viennent vider la cave de l'ange. Les Demi-Sel les regardent passer depuis la crête, la gorge sèche, en silence. Le campement lève le camp le soir même, vers le puits suivant, à six jours.",
    "Au Domaine, l'Eau de Passage™ fait un retour remarqué dans le Catalogue : *Eau de source retrouvée dans le désert, au péril d'une vie. Édition limitée.* C'est vrai, pour une fois. Elle se vend très bien.",
  ]),
  F_lardon: fin("lardon", "Le cuir trop grand", "ange", [
    "Sous la plaque de fer, un escalier, une cave fraîche, et des milliers de bouteilles d'Eau de Passage™, pleines, à bouchon d'or, oubliées par la Maison sous le sable. Lardon descend le premier. Il remonte avec une bouteille dans chaque main, et il boit, assis sur la dernière marche, en riant comme un enfant qui a trouvé la clef du garde-manger.",
    "Il rentre au campement à midi, sa moto chargée de bouteilles, et il en tend une à chaque motard. Mama Salée boit, sale, et coud sur son gilet, le soir même, son premier écusson : un ange à la trompette, avec en dessous *SOURCE*.",
    "Personne ne t'en veut. Tout le monde boit. Tu avais lu le cuir, la carte, les écussons ; il a lu la trompette de l'ange, et il a creusé au bon endroit, ce qui, dans le désert, est la seule lecture qui compte.",
    "Le soir, autour du feu, Mama Salée te fait signe de garder le cuir de Gras-Double. « Il est encore trop grand pour toi, dit-elle. Tant mieux. Tu as de quoi grandir. »",
  ]),
  F_exode: fin("exode", "Six jours de route", "camp", [
    { if: { not: { has: "renonce" } }, text: "Tu dors, enroulé{e} dans le cuir de Gras-Double, qui sent le sel, l'essence et le vieil homme, et tu rêves d'un ange qui souffle de l'eau par sa trompette." },
    { if: { has: "renonce" }, text: "Tu rentres au campement à midi, la gourde vide, le cuir couvert de sable. Le soir, tu dors enroulé{e} dedans, et tu rêves d'un ange qui souffle de l'eau par sa trompette, vers un endroit où tu n'as pas creusé." },
    "Le lendemain, le puits donne de la boue. Le surlendemain, il ne donne plus rien. Le clan lève le camp, vers le puits suivant, à six jours de route. Tu roules en queue de colonne, avec ton cuir à six écussons, qu'on regarde comme on regarde une énigme que personne n'a résolue, c'est-à-dire de moins en moins.",
    "Le quatrième jour, Lardon disparaît, seul, vers le nord-est, et revient le soir avec une bouteille de verre à bouchon d'or, pleine d'une eau qui ne sent rien. Il ne dit pas d'où elle vient. Il te regarde, toi et ton cuir, et il sourit, comme Gras-Double souriait, rarement.",
    "On arrive presque tous au puits suivant. Tu y apprends à coudre. Tu recouds, un soir, l'écusson du bas, celui qui était à l'envers, et tu le remets à l'endroit. Personne ne remarque que le cuir, désormais, ne dit plus la même chose.",
  ]),
};
