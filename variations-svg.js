/* Tableaux de variations SVG au style tkz-tab, adaptables au thème. */
(() => {
'use strict';
const NS='http://www.w3.org/2000/svg';
function diagram({up,label,extremum,alpha='α',name='P(x)'}) {
  const svg=document.createElementNS(NS,'svg');
  svg.setAttribute('viewBox','0 0 340 150');
  svg.setAttribute('class','tkz-inspired');
  svg.setAttribute('role','img');
  svg.setAttribute('aria-label','Tableau de variations : '+name+' '+(up?'croît puis décroît, maximum ':'décroît puis croît, minimum ')+extremum+' en '+alpha+'.');
  const node=(tag,attrs={},txt)=>{
    const el=document.createElementNS(NS,tag);
    Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,String(v)));
    if(txt!==undefined)el.textContent=txt;
    svg.append(el);return el;
  };
  node('rect',{x:1,y:1,width:338,height:148,rx:7,class:'tkz-frame'});
  node('line',{x1:61,y1:1,x2:61,y2:149,class:'tkz-rule'});
  node('line',{x1:1,y1:42,x2:339,y2:42,class:'tkz-rule'});
  const text=(x,y,value,cls)=>node('text',{x,y,'text-anchor':'middle',class:cls},value);
  text(31,26,'x','tkz-text tkz-symbol');
  text(31,103,name,'tkz-text tkz-name');
  text(94,26,'−∞','tkz-text');
  text(200,26,alpha,'tkz-text tkz-symbol');
  text(306,26,'+∞','tkz-text');
  const drawArrow=(x1,y1,x2,y2)=>{
    node('line',{x1,y1,x2,y2,class:'tkz-arrow'});
    const angle=Math.atan2(y2-y1,x2-x1),len=8;
    const xa=x2-len*Math.cos(angle-.43),ya=y2-len*Math.sin(angle-.43);
    const xb=x2-len*Math.cos(angle+.43),yb=y2-len*Math.sin(angle+.43);
    node('path',{d:'M '+xa+' '+ya+' L '+x2+' '+y2+' L '+xb+' '+yb,class:'tkz-arrowhead'});
  };
  if(up) {drawArrow(92,132,158,70);drawArrow(242,70,307,132);}
  else {drawArrow(92,68,158,123);drawArrow(242,123,307,68);}
  text(200,up?70:115,extremum,'tkz-text tkz-extremum');
  text(200,up?88:134,label,'tkz-text tkz-extremum-caption');
  return svg;
}
window.secondDegreVariationSVG = diagram;
document.querySelectorAll('.var-mini').forEach((table,i)=>{
  const row=i>=3?-1:1;
  table.replaceWith(diagram({up:row<0,label:row<0?'max':'min',extremum:'β'}));
});
const sample=document.querySelector('.negative-variation-table table');
if(sample)sample.replaceWith(diagram({up:true,label:'max',extremum:'5',alpha:'−1',name:'Q(x)'}));
const initial=document.querySelector('.variation-scheme');
if(initial)initial.replaceWith(diagram({up:false,label:'min',extremum:'1',alpha:'3',name:'P(x)'}));
})();
