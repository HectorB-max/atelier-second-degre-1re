/* Tableau croisé : lignes = signe de a, colonnes = signe de Delta. */
(() => {
'use strict';
const signs=d=>d<0?['Sg(a)']:d===0?['Sg(a)','0','Sg(a)']:['Sg(a)','0','−Sg(a)','0','Sg(a)'];
const xheads=d=>d<0?['ℝ']:d===0?['x < x₀','x₀','x > x₀']:['x < x₁','x₁','x₁ < x < x₂','x₂','x > x₂'];
const cells=a=>a.map(v=>'<td><span class="math-nowrap">'+v+'</span></td>').join('');
const signTable=(a,d)=>'<div class="sign-mini-scroll" role="region" aria-label="Tableau de signes défilable"><table class="sign-mini"><tbody><tr><th>x</th>'+cells(xheads(d))+'</tr><tr><th>P(x)<small>a '+(a>0?'&gt;':'&lt;')+' 0</small></th>'+cells(signs(d))+'</tr></tbody></table></div>';
const varTable=a=>'<table class="var-mini"><tbody><tr><th>x</th><td>−∞</td><td></td><td>α</td><td></td><td>+∞</td></tr><tr><th>P(x)</th><td></td><td class="var-arrow">'+(a>0?'↘':'↗')+'</td><td class="var-extreme"><b>β</b><small>'+(a>0?'min.':'max.')+'</small></td><td class="var-arrow">'+(a>0?'↗':'↘')+'</td><td></td></tr></tbody></table>';
function curve(a,d){
 const c=d<0?a:d===0?0:-a;
 const X=x=>108+46*x,Y=y=>72-21*y;
 const path=Array.from({length:101},(_,i)=>{const x=-2+i*.04;return(i?'L':'M')+X(x).toFixed(2)+','+Y(a*x*x+c).toFixed(2)}).join(' ');
 const roots=d>0?[-1,1]:d===0?[0]:[];
 return '<svg class="matrix-curve" viewBox="0 0 216 145" role="img" aria-label="Parabole et racines"><line x1="12" x2="205" y1="72" y2="72" stroke="currentColor" opacity=".55"/><line x1="108" x2="108" y1="8" y2="136" stroke="currentColor" opacity=".35"/><path d="'+path+'" fill="none" stroke="'+(a>0?'#7761d2':'#d96c7e')+'" stroke-width="3.5"/>'+roots.map(x=>'<circle cx="'+X(x)+'" cy="72" r="4.5" fill="#f0b14e"/>').join('')+'</svg>';
}
function equations(a,d){
 const outside='x ∈ ]−∞ ; x₁[ ∪ ]x₂ ; +∞[',inside='x ∈ ]x₁ ; x₂[';
 if(d<0)return a>0?['x ∈ ℝ','x ∈ ∅']:['x ∈ ∅','x ∈ ℝ'];
 if(d===0)return a>0?['x ≠ x₀','x ∈ ∅']:['x ∈ ∅','x ≠ x₀'];
 return a>0?[outside,inside]:[inside,outside];
}
function caseHtml(a,d){
 const eq=equations(a,d);
 const rootLabel=d<0?'Aucune racine réelle':d===0?'Une racine double':'Deux racines distinctes';
 const factor=d<0?'Pas de factorisation en facteurs du premier degré sur ℝ.':d===0?'P(x) = a(x − x₀)²':'P(x) = a(x − x₁)(x − x₂)';
 return '<div class="matrix-case">'+curve(a,d)+'<strong>'+rootLabel+'</strong>'+
 '<p class="matrix-ineq">P(x) &gt; 0 ⇔ '+eq[0]+'</p><p class="matrix-ineq">P(x) &lt; 0 ⇔ '+eq[1]+'</p>'+
 '<h4>Tableau de signes</h4>'+signTable(a,d)+
 '<h4>Variations</h4>'+varTable(a)+
 '<p class="matrix-factor">'+(factor.startsWith('P(x)')?'<span class="math-nowrap">'+factor+'</span>':factor)+'</p></div>';
}
const matrix=document.createElement('section');
matrix.id='tableau-synthese';matrix.className='matrix-section';
matrix.innerHTML='<p class="eyebrow">Pour faire le point · Le second degré</p><h2>Six situations, un même raisonnement</h2>'+
'<p>Le signe de <span class="math">a</span> détermine l’orientation de la parabole ; le signe de <span class="math">Δ</span> indique le nombre de racines réelles. Dans les tableaux, <b>Sg(a)</b> est le signe de <span class="math">a</span> et <b>−Sg(a)</b> le signe opposé.</p>'+
'<p class="matrix-help">Sur écran étroit, fais défiler ce tableau horizontalement pour comparer les trois colonnes.</p>'+
'<div class="matrix-scroll" tabindex="0" role="region" aria-label="Six configurations d’un trinôme">'+
'<table class="six-matrix"><thead><tr><th scope="col">a / Δ</th><th scope="col">Δ &lt; 0</th><th scope="col">Δ = 0</th><th scope="col">Δ &gt; 0</th></tr></thead><tbody>'+
[1,-1].map(a=>'<tr><th scope="row" class="matrix-row-label">a '+(a>0?'&gt;':'&lt;')+' 0<small>'+(a>0?'Vers le haut':'Vers le bas')+'</small></th>'+
[-1,0,1].map(v=>'<td>'+caseHtml(a,v)+'</td>').join('')+'</tr>').join('')+
'</tbody></table></div>'+
'<p class="matrix-foot">On note <span class="math">S(α ; β)</span> le sommet, avec <span class="math">α = −b/(2a)</span> et <span class="math">β = P(α)</span>. La forme factorisée réelle n’existe que lorsque <span class="math">Δ ≥ 0</span>.</p>';
const forms=document.createElement('section');
forms.id='trois-formes';forms.className='forms-overview';
forms.innerHTML='<p class="eyebrow">Trois écritures · Trois usages</p><h2>Quelle forme est la plus utile ?</h2>'+
'<p>Ce sont trois présentations complémentaires d’un même polynôme. Elles n’offrent pas exactement les mêmes informations d’un seul regard.</p>'+
'<div class="forms-grid">'+
'<article><h3>Forme développée</h3><p class="math formula-nowrap">ax² + bx + c</p><p><b>Toujours disponible.</b> On repère les coefficients, on calcule le discriminant et on cherche les racines.</p></article>'+
'<article><h3>Forme canonique</h3><p class="math formula-nowrap">a(x − α)² + β</p><p><b>Toujours disponible.</b> On lit le sommet, l’extremum et les variations.</p></article>'+
'<article><h3>Forme factorisée réelle</h3><p class="math formula-nowrap">a(x − x₁)(x − x₂)</p><p><b>Si Δ ≥ 0.</b> Elle permet de lire les racines et de déterminer le signe. Pour Δ = 0, on écrit <span class="math-nowrap">a(x − x₀)²</span>.</p></article>'+
'</div><p class="form-note"><b>Si Δ &lt; 0</b>, aucune factorisation en facteurs réels du premier degré n’existe. Les deux autres formes restent disponibles.</p>';
const anchor=document.getElementById('methode');
if(anchor)anchor.before(matrix,forms);
})();
