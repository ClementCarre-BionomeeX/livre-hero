// Act II · two more sights in the cirque of the Moissons (Corbe leads, "tu" feminine), off II_N4_cirque: a small
// Glaneur carrying a rag doll with a name stitched on its apron, who hesitates at the giant's mouth (nord:poupee); and
// the tents of the clan of the Hare, whose name the giant ate whole, where Corbe paints a sign (nord:lievre=adoptes,
// read in IV_clan, or =vent).
var N = { act: "II", noLead: true, place: "cirque" };
function P(o) { return Object.assign({}, N, o); }
var BACK = [{ back: "II_N4_cirque" }];
module.exports = {
  II_c_poupee: P({ title: "La poupée",
    text: [
      "Dans une des files, un Glaneur plus petit que les autres, la taille d'un enfant de six ans, porte dans ses bras une poupée de chiffon. Une vraie poupée, avec des cheveux de laine jaune, des boutons pour les yeux, et sur le tablier, brodé au point de croix, en rouge : *BERTHILLE*.",
      "Il avance avec la file. Il arrive près de la bouche du géant. Les autres versent ce qu'ils portent. Lui s'arrête. Il regarde la poupée. Il ne la donne pas. Il recule d'un pas, et la file le pousse, et il revient, et il recule encore, comme un enfant qui retarde l'heure du coucher.",
    ],
    choices: [
      { label: "Te glisser jusqu'à lui, et lui prendre la poupée", test: { dom: "discretion", label: "La file des Glaneurs", help: [{ if: { present: "pie" }, v: 15 }, { if: { present: "gaspard" }, v: 10 }] },
        win: { fx: { flag: "nord:poupee", ep: ["perso", 800] }, to: "II_c_poupee_prise" }, lose: { fx: { pv: -2 }, to: "II_c_poupee_rate" } },
      { label: "Le regarder faire", to: "II_c_poupee_regarder" },
    ] }),
  II_c_poupee_prise: P({ title: "Berthille",
    text: [
      "Tu descends la pente à plat ventre, dans la neige, entre deux files. Personne ne te voit. Tu arrives derrière lui. Tu tends la main. Il se retourne. Il te regarde, de ses yeux sans couleur, et il te tend la poupée, de lui-même, comme on tend quelque chose qu'on n'a pas le courage de jeter et pas le droit de garder.",
      "Tu la prends. Il repart, les mains vides, vers la bouche du géant. Ses mains sont vides. Il fait demi-tour et remonte la pente, seul, à contre-courant. Tu remontes avec la poupée sous ta peau de renne. *Berthille.* Quelque part, une petite fille a eu ce nom-là, ou cette poupée-là, ou les deux. Ce nom-là, au moins, n'a pas été mangé.",
    ],
    choices: BACK }),
  II_c_poupee_rate: P({ title: "La file",
    text: ["Tu descends. À dix pas, une file se détourne. Les Glaneurs ne t'attaquent pas : ils te bousculent, sans te voir, comme une foule bouscule un enfant au marché. Tu roules dans la neige. Quand tu te relèves, le petit Glaneur est au bord de la bouche. Il tient la poupée contre lui. Puis la file avance, et il avance avec elle, et tu ne vois plus rien."],
    choices: BACK }),
  II_c_poupee_regarder: P({ title: "Le dernier de la file",
    text: ["Tu regardes. Il recule, il revient, il recule. La file finit de passer. Il reste seul devant la bouche, la poupée dans les bras. Le géant ne le regarde pas. Il attend, comme on attend un enfant qui traîne. Au bout d'un long moment, le petit Glaneur s'assied dans la neige, au pied du géant, la poupée sur les genoux, et il reste là. Il la gardera, et il restera."],
    choices: BACK }),
  II_c_lievre: P({ title: "Les tentes du Lièvre",
    text: [
      "Sur un replat, au bord du cirque, des tentes. Pas celles du Corbeau : d'autres peaux, d'autres coutures, des tentes basses, rondes, couleur de terre. Le clan du Lièvre. Vous échangiez du sel et des aiguilles avec eux, autrefois, à la foire d'automne. Ils chassaient les cirques du nord, là où le Corbeau ne va pas.",
      "Ils sont là. Assis devant leurs tentes, les femmes, les hommes, les vieux, les enfants. Ils te regardent arriver. Ils ne se lèvent pas. Les signes peints sur leurs tentes ont pâli jusqu'au blanc. Une femme te demande, dans la langue des clans, très poliment, si tu sais qui ils sont. Le géant a mangé leur nom. Tout entier. Il ne leur reste que les tentes.",
    ],
    choices: [
      { label: "Peindre sur leurs tentes le corbeau avec un trait : le signe du clan", fx: { flag: ["nord:lievre", "nord:lievre=adoptes"], ep: ["perso", 800] }, to: "II_c_lievre_corbeau" },
      { label: "Peindre la spirale : le vent, et le chemin", fx: { flag: ["nord:lievre", "nord:lievre=vent"], ep: ["perso", 600] }, to: "II_c_lievre_vent" },
      { label: "Leur dire leur nom, simplement, et partir", fx: { ep: ["perso", 400] }, to: "II_c_lievre_nom" },
    ] }),
  II_c_lievre_corbeau: P({ title: "Le corbeau avec un trait",
    text: ["Tu prends l'ocre et la suie dans ta bourse. Tu peins, tente après tente, un corbeau, et sous le corbeau, un trait. Le clan. Ils te regardent faire sans comprendre. Quand tu as fini, la femme qui t'a parlé pose le doigt sur le signe, sur sa tente à elle, et elle demande ce qu'il veut dire. Tu dis : *celui-là est des nôtres*. Elle répète, dans la langue des clans, avec un accent que tu ne connais pas. Ils ne sont plus le Lièvre. Ils seront le Corbeau, s'ils montent jusqu'au camp. Hrodna criera. Elle criera moins fort que si tu les avais laissés là."],
    choices: BACK }),
  II_c_lievre_vent: P({ title: "La spirale",
    text: ["Tu peins une spirale sur chaque tente. Le vent. Ce qui va, ce qui passe, ce qui ne reste pas. La femme regarde le signe. Elle a l'air de le reconnaître, de loin, comme on reconnaît une chanson. Le lendemain matin, quand tu regardes vers le replat, les tentes sont pliées. Le clan qui n'a plus de nom marche vers l'est, en file, sur la crête, vers des cirques où personne ne le connaît. Il en trouvera un autre, de nom. Le vent en a."],
    choices: BACK }),
  II_c_lievre_nom: P({ title: "Le Lièvre",
    text: ["« Le Lièvre, dis-tu. Vous êtes le clan du Lièvre. » La femme répète. *Le Lièvre.* Elle se tourne vers les autres, et elle le leur dit. Ils le répètent, un par un, comme on goûte un plat étranger. Ils ne le reconnaissent pas. Ils le gardent quand même, par politesse. Tu repars. Derrière toi, un enfant rit, et dit à un autre, en le poussant : *lièvre*. C'est un début."],
    choices: BACK }),
};
