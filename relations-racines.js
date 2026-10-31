/* Relations coefficients–racines : laboratoire entier, validation et quatre QCM. */
(() => {
'use strict';
const section = document.getElementById('coefficients-racines');
if (!section) return;
const selectA=section.querySelector('#rr-a');
const selectU=section.querySelector('#rr-x1');
const selectV=section.querySelector('#rr-x2');
const svg=section.querySelector('#rr-graph');
const ns='http://www.w3.org/2000/svg';
const fmt=n=>String(n).replace(/-/g,'−');
function frac(n,d) {
 return '<span class="math-frac" role="math" aria-label="'+fmt(n)+' sur '+fmt(d)+'"><span class="math-frac-top">'+fmt(n)+'</span><span class="math-frac-bottom">'+fmt(d)+'</span></span>';
}
function signed(n,suffix) {
 if (!n) return '';
 return (n>0?' + ':' − ')+(Math.abs(n)===1 && suffix?'':Math.abs(n))+suffix;
}
function polynomial(a,b,c){
 const ax=(a===-1?'−':a===1?'':fmt(a))+'x²';
 return ax+signed(b,'x')+signed(c,'');
}
function factor(r){
 return r===0?'x':r<0?'(x + '+Math.abs(r)+')':'(x − '+r+')';
}
function factored(a,r1,r2){
 if(r1===0 && r2===0) return 'P(x) = '+(a===-1?'−':a===1?'':fmt(a))+'x²';
 return 'P(x) = '+(a===-1?'−':a===1?'':fmt(a))+factor(r1)+factor(r2);
}
function node(tag,attrs={},value){
 const n=document.createElementNS(ns,tag);
 for(const [name,val] of Object.entries(attrs)) n.setAttribute(name,String(val));
 if(value!==undefined) n.textContent=value;
 svg.append(n);
 return n;
}
function render(){
 const a=Number(selectA.value),u=Number(selectU.value),v=Number(selectV.value);
 const x1=Math.min(u,v),x2=Math.max(u,v);
 const sum=x1+x2,product=x1*x2,b=-a*sum,c=a*product;
 section.querySelector('#rr-x1-display').textContent=fmt(u);
 section.querySelector('#rr-x2-display').textContent=fmt(v);
 section.querySelector('#rr-live-expanded').textContent='P(x) = '+polynomial(a,b,c);
 section.querySelector('#rr-live-factored').textContent=factored(a,x1,x2);
 section.querySelector('#rr-live-sum').innerHTML='<strong>Somme :</strong> x₁ + x₂ = '+fmt(x1)+' + ('+fmt(x2)+') = '+fmt(sum)+' = '+frac(-b,a);
 section.querySelector('#rr-live-product').innerHTML='<strong>Produit :</strong> x₁ × x₂ = '+fmt(x1)+' × ('+fmt(x2)+') = '+fmt(product)+' = '+frac(c,a);
 section.querySelector('#rr-live-explain').textContent=x1===x2?'Les deux racines sont confondues : la parabole touche l’axe horizontal. La racine '+fmt(x1)+' est double.':'Les racines ordonnées sont x₁ = '+fmt(x1)+' et x₂ = '+fmt(x2)+'. Le signe de a change l’orientation de la parabole, pas les racines.';
 const w=720,h=360,left=54,right=24,top=28,bottom=42,spanX=left+w-left-right;
 const lowX=-5,highX=5,absY=Math.max(12,Math.abs(a)*20);
 const X=x=>left+(x-lowX)/(highX-lowX)*spanX;
 const Y=y=>top+(absY-y)/(2*absY)*(h-top-bottom);
 const dark=document.documentElement.classList.contains('dark');
 const grid=dark?'#404c69':'#e3e7ee',ink=dark?'#d1d9f0':'#647089';
 const axis=dark?'#bdc8df':'#74859b';
 const curve=dark?(a>0?'#bba8ff':'#ffc48f'):(a>0?'#7056bf':'#ce7540');
 svg.replaceChildren();
 const title=node('title',{id:'rr-graph-title'},'Parabole du trinôme '+polynomial(a,b,c)+'. Racines '+fmt(x1)+' et '+fmt(x2)+'.');
 svg.setAttribute('aria-labelledby',title.id);
 node('rect',{x:left,y:top,width:spanX,height:h-top-bottom,fill:dark?'#282e47':'#fcfcff'});
 for(const x of [-4,-2,0,2,4]){
  node('line',{x1:X(x),y1:top,x2:X(x),y2:h-bottom,stroke:grid,'stroke-width':1});
  node('text',{x:X(x),y:Y(0)+20,'text-anchor':'middle','font-size':13,fill:ink},String(x).replace('-','−'));
 }
 for(const y of [-absY/2,0,absY/2]){
  node('line',{x1:left,y1:Y(y),x2:w-right,y2:Y(y),stroke:grid,'stroke-width':1});
  if(y!==0)node('text',{x:left-8,y:Y(y)+5,'text-anchor':'end','font-size':12,fill:ink},fmt(y));
 }
 node('line',{x1:left,y1:Y(0),x2:w-right,y2:Y(0),stroke:axis,'stroke-width':2});
 node('line',{x1:X(0),y1:top,x2:X(0),y2:h-bottom,stroke:axis,'stroke-width':2});
 node('text',{x:w-right-6,y:Y(0)-8,'font-size':15,fill:ink},'x');
 node('text',{x:X(0)+10,y:top+12,'font-size':15,fill:ink},'y');
 const f=x=>a*(x-x1)*(x-x2);
 const plot=Array.from({length:301},(_,i)=>{const x=lowX+(highX-lowX)*i/300;return(i?'L':'M')+X(x).toFixed(2)+' '+Y(f(x)).toFixed(2)}).join(' ');
 const clip='rr-plot-clip';
 const defs=node('defs');const box=document.createElementNS(ns,'clipPath');box.id=clip;
 const clipRect=document.createElementNS(ns,'rect');Object.entries({x:left,y:top,width:spanX,height:h-top-bottom}).forEach(([k,val])=>clipRect.setAttribute(k,String(val)));
 box.append(clipRect);defs.append(box);
 node('path',{d:plot,fill:'none',stroke:curve,'stroke-width':4,'stroke-linecap':'round','clip-path':'url(#'+clip+')'});
 for(const [idx,x] of [...new Set([x1,x2])].entries()){
  node('circle',{cx:X(x),cy:Y(0),r:6.5,fill:dark?'#ffd68d':'#e6a24d',stroke:dark?'#252b44':'#fff','stroke-width':2});
  node('text',{x:X(x),y:Y(0)-13,'font-size':15,'text-anchor':'middle','font-weight':800,fill:dark?'#ffdcaa':'#8c5d20'},x1===x2?'x₀ = '+fmt(x):(x===x1?'x₁ = ':'x₂ = ')+fmt(x));
 }
 const alpha=sum/2,vertex=f(alpha);
 node('circle',{cx:X(alpha),cy:Y(vertex),r:4.6,fill:dark?'#c6b1ff':'#8568c8'});
}
for(const el of [selectA,selectU,selectV])el.addEventListener('input',render);
section.querySelector('#rr-reset').addEventListener('click',()=>{selectA.value='1';selectU.value='1';selectV.value='3';render()});
const questions=[
 {id:'rr1',title:'Lire somme et produit',q:'Pour <span class="math">P(x) = −2x² + 10x − 12</span>, quelles sont la somme et le produit des racines ?',opt:['Somme −5 ; produit 6.','Somme 5 ; produit 6.','Somme 5 ; produit −6.'],right:'b',good:'La somme vaut −10 divisé par −2, soit 5, et le produit vaut −12 divisé par −2, soit 6.',wrong:['Le coefficient b doit être pris avec le signe opposé.','La division par a négatif change aussi le signe du produit.']},
 {id:'rr2',title:'Une racine déjà connue',q:'On sait que <span class="math">3</span> est racine de <span class="math">Q(x) = 2x² − 7x + 3</span>. Quelle est la seconde racine ?',opt:['<span class="math-frac" role="math" aria-label="un sur deux"><span class="math-frac-top">1</span><span class="math-frac-bottom">2</span></span>','2','<span class="math-frac" role="math" aria-label="trois sur deux"><span class="math-frac-top">3</span><span class="math-frac-bottom">2</span></span>'],right:'a',good:'Le produit des racines vaut trois demis. Comme la première est 3, la seconde vaut un demi. Leur somme vaut sept demis.',wrong:['Avec 2, le produit vaudrait 6, et non trois demis.','Attention : trois demis est le produit des racines, pas la seconde racine.']},
 {id:'rr3',title:'Le coefficient a est négatif',q:'Quelles sont les racines de <span class="math">−3x² + 3x + 6</span> ?',opt:['−1 et 2.','−2 et 1.','−1 et −2.'],right:'a',good:'On cherche deux nombres de somme 1 et de produit −2. Les nombres −1 et 2 conviennent ; on vérifie aussi en factorisant −3(x + 1)(x − 2).',wrong:['La somme de −2 et 1 vaut −1, et non 1.','Le produit de −1 et −2 vaut +2, alors que c divisé par a vaut −2.']},
 {id:'rr4',title:'Quand le discriminant est négatif',q:'Que peut-on affirmer pour <span class="math">x² + 2x + 5</span> ?',opt:['Il a deux racines réelles de somme −2.','Il possède une racine réelle double.','Il n’a aucune racine réelle.'],right:'c',good:'Le discriminant vaut 4 − 20 = −16 : aucune racine réelle. On ne peut pas chercher une paire de racines réelles ayant la somme et le produit annoncés.',wrong:['Les valeurs de la somme et du produit ne garantissent pas l’existence de racines réelles.','Une racine double exigerait un discriminant nul ; ici il est négatif.']}
];
function one(q,i){
 return '<article class="extra-question"><div class="extra-index">Question '+i+' · Relations coefficients-racines</div><h4>'+q.title+'</h4><p class="question-statement">'+q.q+'</p><div class="answers" data-single="'+q.id+'" role="group" aria-label="'+q.title+'">'+q.opt.map((val,j)=>'<button type="button" class="choice" aria-pressed="false" data-option="'+['a','b','c'][j]+'"><span class="letter">'+['A','B','C'][j]+'</span><span>'+val+'</span></button>').join('')+'</div><div id="feedback-'+q.id+'" class="feedback" role="status" aria-live="polite"></div></article>';
}
section.querySelector('#rr-questions').innerHTML=questions.map((q,i)=>one(q,i+1)).join('');
const previousCorrect=window.SUPPLEMENTAL_CORRECT||{},previousResponses=window.SUPPLEMENTAL_RESPONSES||{};
const correct={...previousCorrect},responses={...previousResponses};
for(const q of questions){
 correct[q.id]=q.right;
 const other=['a','b','c'].filter(s=>s!==q.right);
 responses[q.id]={};
 ['a','b','c'].forEach(s=>{responses[q.id][s]=s===q.right?['Exact : méthode correctement appliquée.',q.good]:['Pas encore : vérifie les deux relations.',q.wrong[other.indexOf(s)]]});
}
window.SUPPLEMENTAL_CORRECT=correct;
window.SUPPLEMENTAL_RESPONSES=responses;
window.SUPPLEMENTAL_QUESTION_IDS=[...(window.SUPPLEMENTAL_QUESTION_IDS||[]),...questions.map(q=>q.id)];
render();
})();