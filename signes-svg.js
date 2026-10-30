/* Tableaux de signes SVG, même style que les variations. */
(() => {
'use strict';
const NS='http://www.w3.org/2000/svg';
function signDiagram(a,delta) {
 const svg=document.createElementNS(NS,'svg');
 svg.setAttribute('viewBox','0 0 360 140');
 svg.setAttribute('class','tkz-inspired tkz-sign');
 svg.setAttribute('role','img');
 const detail=delta<0?'aucune racine réelle':delta===0?'racine double x₀':'deux racines x₁ et x₂';
 const explanation=delta<0?'P a le signe de a sur tout ℝ.':delta===0?'P s’annule en x₀ et possède le signe de a ailleurs.':'P possède le signe de a à l’extérieur de x₁ et x₂, le signe opposé entre ces racines, et vaut zéro en x₁ et x₂.';
 svg.setAttribute('aria-label','Tableau de signes : a '+(a>0?'positif':'négatif')+', '+detail+'. '+explanation);
 const node=(tag,attrs={},value)=>{
   const e=document.createElementNS(NS,tag);
   Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,String(v)));
   if(value!==undefined)e.textContent=value;
   svg.append(e);return e;
 };
 const label=(x,y,value,cls='tkz-text')=>node('text',{x,y,'text-anchor':'middle',class:cls},value);
 node('rect',{x:1,y:1,width:358,height:138,rx:7,class:'tkz-frame'});
 node('line',{x1:72,y1:1,x2:72,y2:139,class:'tkz-rule'});
 node('line',{x1:1,y1:46,x2:359,y2:46,class:'tkz-rule'});
 label(36,29,'x','tkz-text tkz-symbol');
 label(36,83,'P(x)','tkz-text tkz-sign-name');
 label(36,106,a>0?'a > 0':'a < 0','tkz-text tkz-sign-condition');
 label(105,30,'−∞');
 label(326,30,'+∞');
 const same='Sg(a)', opposite='−Sg(a)';
 if(delta<0){
   label(216,103,same,'tkz-text tkz-sign-value');
 }else if(delta===0){
   label(215,30,'x₀','tkz-text tkz-symbol');
   node('line',{x1:215,x2:215,y1:46,y2:139,class:'tkz-sign-root'});
   label(140,103,same,'tkz-text tkz-sign-value');
   label(215,103,'0','tkz-text tkz-sign-zero');
   label(294,103,same,'tkz-text tkz-sign-value');
 }else{
   label(167,30,'x₁','tkz-text tkz-symbol');
   label(270,30,'x₂','tkz-text tkz-symbol');
   for(const x of [167,270])node('line',{x1:x,x2:x,y1:46,y2:139,class:'tkz-sign-root'});
   label(115,103,same,'tkz-text tkz-sign-value');
   label(167,103,'0','tkz-text tkz-sign-zero');
   label(219,103,opposite,'tkz-text tkz-sign-value');
   label(270,103,'0','tkz-text tkz-sign-zero');
   label(318,103,same,'tkz-text tkz-sign-value');
 }
 return svg;
}
window.secondDegreSigneSVG = signDiagram;
document.querySelectorAll('.six-matrix > tbody > tr').forEach((tr,row)=>{
 const a=row===0?1:-1;
 [...tr.children].filter(e=>e.tagName==='TD').forEach((td,col)=>{
   const old=td.querySelector('.sign-mini-scroll');
   if(old)old.replaceWith(signDiagram(a,col-1));
 });
});
})();
