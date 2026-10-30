/* Seconde exploration : a variable, b=0 et c=1 fixes. */
(() => {
'use strict';
const anchor=document.getElementById('explorateur-abc');if(!anchor)return;
const section=document.createElement('section');
section.className='a-slider-lab';section.id='applet-a-curseur';
section.innerHTML=`
  <p class="eyebrow">Laboratoire complémentaire · Une seule chose à la fois</p>
  <h2>Et si je ne faisais varier que <span class="math">a</span> ?</h2>
  <p>Cette fois, on garde <span class="math">b = 0</span> et <span class="math">c = 1</span> : seule l'ouverture de la parabole change. Pars de <span class="math">a = 1</span>, puis explore les valeurs positives et négatives.</p>
  <div class="a-slider-control">
    <label for="slider-a-only">Coefficient <span class="math">a</span></label>
    <input id="slider-a-only" type="range" min="-3" max="3" step="0.25" value="1" aria-describedby="a-only-help">
    <output id="slider-a-only-value" for="slider-a-only">+1</output>
    <button type="button" id="reset-a-only">Revenir à a = 1</button>
  </div>
  <p class="a-slider-hint" id="a-only-help">Le curseur passe aussi par 0 : tu verras alors pourquoi la condition <span class="math">a ≠ 0</span> est nécessaire.</p>
  <div class="a-slider-layout">
    <svg id="a-only-svg" viewBox="0 0 710 345" role="img" aria-label="Courbe de f(x) = a x carré plus un, avec un coefficient a variable"></svg>
    <div id="a-only-readout" class="a-only-readout" role="status" aria-live="polite"></div>
  </div>
`;
anchor.insertAdjacentElement('afterend',section);
const slider=document.getElementById('slider-a-only'),output=document.getElementById('slider-a-only-value'),readout=document.getElementById('a-only-readout'),svg=document.getElementById('a-only-svg');
const NS='http://www.w3.org/2000/svg',fmt=n=>Number(n.toFixed(2)).toLocaleString('fr-FR',{maximumFractionDigits:2});
const X=x=>62+(x+3.2)*570/6.4,Y=y=>300-(y+5)*248/13;
const make=(tag,attrs={},content)=>{const n=document.createElementNS(NS,tag);Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,String(v)));if(content!==undefined)n.textContent=content;svg.append(n);return n};
function render(){
  const a=Number(slider.value),dark=document.documentElement.classList.contains('dark');
  const sign=a>0?'positif':a<0?'négatif':'nul';
  output.textContent=(a>0?'+':'')+fmt(a);
  const grid=dark?'#4d5775':'#dde1ed',ink=dark?'#d4ddf1':'#5f667c';
  svg.replaceChildren();
  const defs=document.createElementNS(NS,'defs'),clip=document.createElementNS(NS,'clipPath'),rect=document.createElementNS(NS,'rect');
  clip.setAttribute('id','a-only-clip');rect.setAttribute('x','62');rect.setAttribute('y','52');rect.setAttribute('width','570');rect.setAttribute('height','248');clip.append(rect);defs.append(clip);svg.append(defs);
  for(const y of [-4,0,4,8]){
    make('line',{x1:62,x2:632,y1:Y(y),y2:Y(y),stroke:grid,'stroke-width':1});
    make('text',{x:52,y:Y(y)+4,'text-anchor':'end','font-size':13,fill:ink},String(y));
  }
  for(const x of [-3,-2,-1,0,1,2,3]){
    make('line',{x1:X(x),x2:X(x),y1:52,y2:300,stroke:grid,'stroke-width':1});
    make('text',{x:X(x),y:320,'text-anchor':'middle','font-size':13,fill:ink},String(x));
  }
  make('line',{x1:62,y1:Y(0),x2:632,y2:Y(0),stroke:ink,'stroke-width':1.5});
  make('line',{x1:X(0),y1:52,x2:X(0),y2:300,stroke:ink,'stroke-width':1.5});
  const d=Array.from({length:201},(_,i)=>{
    const x=-3.2+i*6.4/200;
    return(i?'L':'M')+X(x).toFixed(2)+' '+Y(a*x*x+1).toFixed(2);
  }).join(' ');
  make('path',{d,fill:'none',stroke:a>0?'#7664dc':a<0?'#e4778b':'#57baa8','stroke-width':4,'stroke-linecap':'round','clip-path':'url(#a-only-clip)'});
  make('circle',{cx:X(0),cy:Y(1),r:6,fill:'#e9b05c',stroke:dark?'#232941':'#fff','stroke-width':2});
  make('text',{x:X(0)+13,y:Y(1)-13,'font-size':14,fill:ink,'font-weight':'bold'},'S(0 ; 1)');
  if(a===0){
    readout.innerHTML='<strong>f(x) = 1</strong><p>Pour <span class="math">a = 0</span>, la courbe devient une <b>droite horizontale</b>. La fonction est constante : <b>ce n’est plus un trinôme du second degré</b>.</p><p>Le sommet au sens d’une parabole et le sens « décroît puis croît » n’ont alors plus de sens.</p>';
  }else{
    const formula=a===1?'x² + 1':a===-1?'−x² + 1':fmt(a)+'x² + 1';
    readout.innerHTML='<strong>f(x) = '+formula+'</strong><p><b>a '+(a>0?'&gt;':'&lt;')+' 0</b> : la parabole est tournée vers le '+(a>0?'haut':'bas')+'.</p><p>Son sommet est <span class="math">S(0 ; 1)</span> : '+(a>0?'minimum':'maximum')+' égal à 1.</p><p>Elle '+(a>0?'décroît sur ]−∞ ; 0], puis croît sur [0 ; +∞[.':'croît sur ]−∞ ; 0], puis décroît sur [0 ; +∞[.')+'</p><p>Plus la valeur absolue de <span class="math">a</span> augmente, plus la parabole se resserre.</p>';
  }
}
slider.addEventListener('input',render);
document.getElementById('reset-a-only').addEventListener('click',()=>{slider.value='1';render();slider.focus()});
document.getElementById('theme-toggle').addEventListener('click',()=>requestAnimationFrame(render));
render();
})();
