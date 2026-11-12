var s=require("/mnt/project-files/livre-heros/histoires/"+(process.argv[2]||"cendres")+".json"),P=s.passages;
function doneBy(fx,q){return fx&&[].concat(fx.quest||[]).indexOf(q)>=0;}
function tos(to,out){ if(Array.isArray(to)) to.forEach(function(x){tos(x.to,out);}); else if(to!=null) out.push(to); return out;}
function exits(p,q){var out=[];(p.choices||[]).forEach(function(c){
  if(!doneBy(c.fx,q)) tos(c.to,out);
  ["win","lose"].forEach(function(o){ if(c[o]&&!doneBy(c[o].fx,q)) tos(c[o].to,out); });
  if(c.fight) ["win","lose","flee","calm"].forEach(function(o){ if(c.fight[o]&&!doneBy(c.fight[o].fx,q)) tos(c.fight[o].to,out); });
});
 if(p.combat) ["win","lose","flee","calm"].forEach(function(o){ if(p.combat[o]&&!doneBy(p.combat[o].fx,q)) tos(p.combat[o].to,out); });
 return out;}
var n=0;(s.quests||[]).forEach(function(q){ if(!q.start||!P[q.start])return;
 Object.keys(P).forEach(function(h){(P[h].choices||[]).forEach(function(c){
  if(tos(c.to,[]).indexOf(q.start)<0||!/"seen"/.test(JSON.stringify(c.hide||null)))return;
  var seen={},todo=[q.start],from={},hit=null;seen[q.start]=1;
  while(todo.length&&!hit){var id=todo.shift(),p=P[id];if(!p||doneBy(p.fx,q.id))continue;
   exits(p,q.id).forEach(function(t){ if(t===h||t==="@ret"){ if(!hit) hit=id; return;} if(!seen[t]){seen[t]=1;from[t]=id;todo.push(t);} });}
  if(hit){n++;var path=[hit];while(from[path[0]])path.unshift(from[path[0]]);console.log(q.id+" | carrefour "+h+" | caché par "+JSON.stringify(c.hide)+" | sortie sans fin : "+path.join(" > "));}
 });});});console.log(n);
