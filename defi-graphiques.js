/* Figures explicatives du corrigé : zones colorées et droites étiquetées. */
(() => {
'use strict';
const NS='http://www.w3.org/2000/svg';
const create=(tag,attrs={},parent,value)=>{
 const el=document.createElementNS(NS,tag);
 Object.entries(attrs).forEach(([key,val])=>el.setAttribute(key,String(val)));
 if(value!==undefined)el.textContent=value;
 parent.append(el);return el;
};
function graph(holder,id,{xmin,xmax,ymin,ymax,caption}){
 const svg=create('svg',{viewBox:'0 0 850 420',class:'defi-plot',role:'img','aria-label':caption},holder);
 const left=67,right=805,top=25,bottom=350;
 const X=x=>left+(x-xmin)/(xmax-xmin)*(right-left),Y=y=>bottom-(y-ymin)/(ymax-ymin)*(bottom-top);
 const defs=create('defs',{},svg),clip=create('clipPath',{id:'clip-'+id},defs);
 create('rect',{x:left,y:top,width:right-left,height:bottom-top},clip);
 create('rect',{x:left,y:top,width:right-left,height:bottom-top,class:'defi-plot-bg'},svg);
 for(let x=Math.ceil(xmin);x<=xmax;x++){
   create('line',{x1:X(x),x2:X(x),y1:top,y2:bottom,class:'defi-plot-grid'},svg);
   create('text',{x:X(x),y:374,'text-anchor':'middle',class:'defi-plot-tick'},svg,String(x));
 }
 for(let y=Math.ceil(ymin/2)*2;y<=ymax;y+=2){
   create('line',{x1:left,x2:right,y1:Y(y),y2:Y(y),class:'defi-plot-grid'},svg);
   create('text',{x:56,y:Y(y)+5,'text-anchor':'end',class:'defi-plot-tick'},svg,String(y));
 }
 if(xmin<=0&&xmax>=0)create('line',{x1:X(0),x2:X(0),y1:top,y2:bottom,class:'defi-plot-axis'},svg);
 if(ymin<=0&&ymax>=0)create('line',{x1:left,x2:right,y1:Y(0),y2:Y(0),class:'defi-plot-axis'},svg);
 create('text',{x:818,y:Y(0)-8,class:'defi-plot-tick'},svg,'x');
 create('text',{x:X(0)+11,y:20,class:'defi-plot-tick'},svg,'y');
 return {svg,X,Y,left,right,top,bottom,clip:'url(#clip-'+id+')'};
}
function path(f,from,to,X,Y,n=120){
 return Array.from({length:n+1},(_,i)=>{
  const x=from+(to-from)*i/n;
  return(i?'L':'M')+X(x).toFixed(2)+' '+Y(f(x)).toFixed(2);
 }).join(' ');
}
function region(f,g,from,to,X,Y,n=110){
 const forward=path(f,from,to,X,Y,n);
 const reverse=Array.from({length:n+1},(_,i)=>{
  const x=to-(to-from)*i/n;
  return 'L'+X(x).toFixed(2)+' '+Y(g(x)).toFixed(2);
 }).join(' ');
 return forward+reverse+'Z';
}
function lineTag(svg,x,y,text,cls){
 create('text',{x,y,class:'defi-plot-label '+cls},svg,text);
}
function curveTag(svg,x,y,sub,equation,cls){
 const t=create('text',{x,y,class:'defi-plot-label '+cls},svg);
 create('tspan',{},t,'C');
 create('tspan',{'font-size':'70%','baseline-shift':'sub'},t,sub);
 create('tspan',{'baseline-shift':'baseline'},t,' : '+equation);
}
function dot(svg,X,Y,x,y,label,dx=8,dy=-11){
 create('circle',{cx:X(x),cy:Y(y),r:6,class:'defi-point'},svg);
 lineTag(svg,X(x)+dx,Y(y)+dy,label,'defi-point-label');
}
function positions(){
 const holder=document.getElementById('defi-figure-positions');if(!holder)return;
 holder.classList.add('defi-figure-scroll');
 const {svg,X,Y,clip}=graph(holder,'positions',{
   xmin:-1.2,xmax:3.3,ymin:-.7,ymax:10.0,
   caption:'Positions relatives des courbes de f et g : zones vertes à gauche de 1 moins racine de deux et à droite de 1 plus racine de deux lorsque f est au-dessus de g ; zone orange entre ces deux abscisses lorsque f est au-dessous de g.'
 });
 const f=x=>x*x-x+2,g=x=>x+3,a=1-Math.SQRT2,b=1+Math.SQRT2;
 for(const [lo,hi,cls] of [[-1.2,a,'defi-fill-band defi-fill-band-outside'],[a,b,'defi-fill-band defi-fill-band-inside'],[b,3.3,'defi-fill-band defi-fill-band-outside']]){
  create('path',{d:region(f,g,lo,hi,X,Y),class:cls,'clip-path':clip},svg);
 }
 create('path',{d:path(f,-1.2,3.3,X,Y),class:'defi-curve-f','clip-path':clip},svg);
 create('path',{d:path(g,-1.2,3.3,X,Y),class:'defi-curve-g','clip-path':clip},svg);
 for(const x of [a,b])create('line',{x1:X(x),x2:X(x),y1:Y(0),y2:Y(g(x)),class:'defi-projection'},svg);
 dot(svg,X,Y,a,g(a),'A',-22,-12);
 dot(svg,X,Y,b,g(b),'B',10,-11);
 curveTag(svg,X(1.12),Y(f(1.12))+22,'f','y = x² − x + 2','defi-label-f');
 curveTag(svg,X(.32)+4,Y(g(.32))-22,'g','y = x + 3','defi-label-g');
 lineTag(svg,X(-1),Y(3.15),'f > g','defi-zone-sign');
 lineTag(svg,X(1.0),Y(3.4),'f < g','defi-zone-sign');
 lineTag(svg,X(2.7),Y(6.6),'f > g','defi-zone-sign');
 create('text',{x:435,y:397,'text-anchor':'middle',class:'defi-plot-note'},svg,'La surface turquoise matérialise les régions comprises entre les deux courbes.');
}
function contacts(){
 const holder=document.getElementById('defi-figure-contact');if(!holder)return;
 holder.classList.add('defi-figure-scroll');
 const {svg,X,Y,clip}=graph(holder,'contacts',{
   xmin:-2.65,xmax:3.0,ymin:-1.0,ymax:12.6,
   caption:'Courbe de la parabole f et deux droites non verticales D1 et D2 passant par O. D1 a un contact double K1 d’abscisse moins racine de deux ; D2 a un contact double K2 d’abscisse racine de deux. Sur les deux parties, la surface colorée montre que la parabole reste au-dessus de la droite.'
 });
 const f=x=>x*x-x+2,m1=-1-2*Math.SQRT2,m2=-1+2*Math.SQRT2;
 const d1=x=>m1*x,d2=x=>m2*x;
 create('path',{d:region(f,d1,-2.65,0,X,Y),class:'defi-fill-contact-band','clip-path':clip},svg);
 create('path',{d:region(f,d2,0,3,X,Y),class:'defi-fill-contact-band','clip-path':clip},svg);
 create('path',{d:path(f,-2.65,3,X,Y),class:'defi-curve-f','clip-path':clip},svg);
 create('path',{d:path(d1,-2.65,3,X,Y),class:'defi-curve-d1','clip-path':clip},svg);
 create('path',{d:path(d2,-2.65,3,X,Y),class:'defi-curve-d2','clip-path':clip},svg);
 dot(svg,X,Y,-Math.SQRT2,4+Math.SQRT2,'K₁',-30,-18);
 dot(svg,X,Y,Math.SQRT2,4-Math.SQRT2,'K₂',15,-14);
 dot(svg,X,Y,0,0,'O',-22,22);
 lineTag(svg,78,58,'D₁ : (1 + 2√2)x + y = 0','defi-label-d1');
 create('text',{x:796,y:217,'text-anchor':'end',class:'defi-plot-label defi-label-d2'},svg,'D₂ : (1 − 2√2)x + y = 0');
 curveTag(svg,610,183,'f','y = x² − x + 2','defi-label-f');
 create('text',{x:435,y:397,'text-anchor':'middle',class:'defi-plot-note'},svg,'Les zones turquoise occupent les régions comprises entre la parabole et chacune des deux droites.');
}
positions();
contacts();
})();
