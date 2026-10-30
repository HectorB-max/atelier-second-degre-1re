/* Laboratoire : un graphe exact pour toute combinaison autorisée a,b,c. */
(() => {
'use strict';
const host=document.getElementById('quiz-variations');if(!host)return;
const section=document.createElement('section');section.className='abc-lab';section.id='explorateur-abc';
section.innerHTML='<p class="eyebrow">Laboratoire interactif · Coefficients</p><h2>Que devient la parabole si je change a, b ou c ?</h2>'+
'<p>Fais varier les coefficients du trinôme. Les racines, le sommet et les variations s’adaptent. Le coefficient a reste non nul pour conserver un polynôme du second degré.</p>'+
'<div class="abc-controls"><label for="abc-a">Coefficient a<select id="abc-a"><option value="-3">−3</option><option value="-2">−2</option><option value="-1">−1</option><option value="1" selected>+1</option><option value="2">+2</option><option value="3">+3</option></select></label>'+
'<label for="abc-b">Coefficient b<input id="abc-b" type="range" min="-6" max="6" value="-4" step="1"><output id="abc-out-b" for="abc-b">−4</output></label>'+
'<label for="abc-c">Coefficient c<input id="abc-c" type="range" min="-6" max="6" value="3" step="1"><output id="abc-out-c" for="abc-c">3</output></label></div>'+
'<div class="abc-layout"><svg id="abc-graph" viewBox="0 0 700 340" role="img" aria-label="Parabole manipulable : sommet et intersections avec l’axe horizontal"></svg>'+
'<div class="abc-report"><strong id="abc-expression"></strong><p id="abc-discriminant"></p><p id="abc-roots"></p><p id="abc-vertex"></p><p id="abc-factor"></p></div></div>';
host.before(section);
const el=id=>document.getElementById(id),fmt=n=>Number(n.toFixed(3)).toLocaleString('fr-FR',{maximumFractionDigits:3});
const svg=el('abc-graph');
const poly=(a,b,c)=>{
 let out=(a===1?'':a===-1?'−':fmt(a))+'x²';
 if(b!==0)out+=' '+(b<0?'− ':'+ ')+(Math.abs(b)===1?'':fmt(Math.abs(b)))+'x';
 if(c!==0)out+=' '+(c<0?'− ':'+ ')+fmt(Math.abs(c));
 return out;
};
function render(){
 const a=Number(el('abc-a').value),b=Number(el('abc-b').value),c=Number(el('abc-c').value);
 el('abc-out-b').textContent=fmt(b);el('abc-out-c').textContent=fmt(c);
 const delta=b*b-4*a*c,alpha=-b/(2*a),beta=c-b*b/(4*a);
 const roots=delta<0?[]:delta===0?[alpha]:[(-b-Math.sqrt(delta))/(2*a),(-b+Math.sqrt(delta))/(2*a)].sort((x,y)=>x-y);
 const span=Math.max(3,Math.abs(alpha)+.8,...roots.map(x=>Math.abs(x-alpha)+1));
 const xmin=alpha-span,xmax=alpha+span;
 const f=x=>a*x*x+b*x+c;
 const values=Array.from({length:161},(_,i)=>f(xmin+(xmax-xmin)*i/160));
 const low=Math.min(0,...values),high=Math.max(0,...values),pad=Math.max(.7,(high-low)*.13);
 const ymin=low-pad,ymax=high+pad;
 const X=x=>48+600*(x-xmin)/(xmax-xmin),Y=y=>282-240*(y-ymin)/(ymax-ymin);
 const path=Array.from({length:161},(_,i)=>{
   const x=xmin+(xmax-xmin)*i/160;
   return(i?'L':'M')+X(x).toFixed(2)+','+Y(f(x)).toFixed(2);
 }).join(' ');
 const dark=document.documentElement.classList.contains('dark');
 const grid=dark?'#515b7e':'#d8ddee',labels=dark?'#dde1f3':'#666f89';
 const ticksX=Array.from({length:7},(_,i)=>xmin+(xmax-xmin)*i/6);
 const ticksY=Array.from({length:5},(_,i)=>ymin+(ymax-ymin)*i/4);
 svg.replaceChildren();
 const ns='http://www.w3.org/2000/svg';
 const make=(tag,attrs,text)=>{const n=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,String(v)));if(text!==undefined)n.textContent=text;svg.append(n);return n};
 ticksY.forEach(y=>{make('line',{x1:48,x2:648,y1:Y(y),y2:Y(y),stroke:grid});make('text',{x:42,y:Y(y)+4,'text-anchor':'end','font-size':11,fill:labels},fmt(y))});
 ticksX.forEach(x=>{make('line',{x1:X(x),x2:X(x),y1:42,y2:282,stroke:grid});make('text',{x:X(x),y:304,'text-anchor':'middle','font-size':11,fill:labels},fmt(x))});
 if(xmin<=0&&xmax>=0)make('line',{x1:X(0),x2:X(0),y1:42,y2:282,stroke:labels,'stroke-width':1.5});
 make('line',{x1:48,x2:648,y1:Y(0),y2:Y(0),stroke:labels,'stroke-width':1.5});
 make('path',{d:path,fill:'none',stroke:a>0?'#7660d5':'#df6b84','stroke-width':3.5});
 roots.forEach(x=>make('circle',{cx:X(x),cy:Y(0),r:6,fill:'#f4b552',stroke:dark?'#343149':'#fff','stroke-width':2}));
 make('circle',{cx:X(alpha),cy:Y(beta),r:6,fill:'#4bbda1',stroke:dark?'#343149':'#fff','stroke-width':2});
 el('abc-expression').textContent='P(x) = '+poly(a,b,c);
 el('abc-discriminant').textContent='Δ = '+fmt(delta)+' : '+(delta<0?'négatif':delta===0?'nul':'positif')+'.';
 el('abc-roots').textContent=delta<0?'Aucune racine réelle.':delta===0?'Racine double : x₀ = '+fmt(alpha)+'.':'Deux racines : x₁ ≈ '+fmt(roots[0])+' et x₂ ≈ '+fmt(roots[1])+'.';
 el('abc-vertex').textContent='Sommet S('+fmt(alpha)+' ; '+fmt(beta)+') : '+(a>0?'minimum':'maximum')+' '+fmt(beta)+'. La fonction '+(a>0?'décroît puis croît.':'croît puis décroît.')+' Le sens change en x = '+fmt(alpha)+'.';
 el('abc-factor').textContent=delta<0?'Pas de factorisation en facteurs réels du premier degré.':delta===0?'P(x) = a(x − x₀)².':'P(x) = a(x − x₁)(x − x₂), avec les racines ci-dessus.';
}
['abc-a','abc-b','abc-c'].forEach(id=>el(id).addEventListener('input',render));
document.getElementById('theme-toggle').addEventListener('click',()=>requestAnimationFrame(render));
render();
})();
