(()=>{
const signs=(d)=>d<0?['Sg(a)']:d===0?['Sg(a)','0','Sg(a)']:['Sg(a)','0','−Sg(a)','0','Sg(a)'];
const xx=(d)=>d<0?['ℝ']:d===0?['x < x₀','x₀','x > x₀']:['x < x₁','x₁','x₁ < x < x₂','x₂','x > x₂'];
const table=(headers,values,a)=>'<table class="tiny-chart"><tr><th>x</th>'+headers.map(t=>'<td>'+t+'</td>').join('')+'</tr><tr><th>P(x)<small>a '+(a>0?'>':'<')+' 0</small></th>'+values.map(t=>'<td>'+t+'</td>').join('')+'</tr></table>';
function curve(a,d){
const c=d<0?a:d===0?0:-a,poly=Array.from({length:81},(_,i)=>{let x=-2+i*.05;return (i?'L':'M')+(99+41*x).toFixed(1)+','+(63-20*(a*x*x+c)).toFixed(1)}).join(' ');
return '<svg viewBox="0 0 200 125" class="case-curve" role="img" aria-label="Parabole '+(a>0?'ouverte vers le haut':'ouverte vers le bas')+'"><line x1="10" x2="190" y1="63" y2="63" stroke="currentColor"/><line x1="99" x2="99" y1="5" y2="120" stroke="currentColor" opacity=".4"/><path d="'+poly+'" fill="none" stroke="'+(a>0?'#7761d2':'#d9697b')+'" stroke-width="3"/></svg>';
}
function cell(a,d){
const outside='x ∈ ]−∞ ; x₁[ ∪ ]x₂ ; +∞[',inside='x ∈ ]x₁ ; x₂[';
const val=d<0?(a>0?['x ∈ ℝ','x ∈ ∅']:['x ∈ ∅','x ∈ ℝ']):d===0?(a>0?['x ≠ x₀','x ∈ ∅']:['x ∈ ∅','x ≠ x₀']):(a>0?[outside,inside]:[inside,outside]);
const factor=d<0?'Non factorisable sur ℝ en facteurs du premier degré.':d===0?'P(x) = a(x − x₀)²':'P(x) = a(x − x₁)(x − x₂)';
return '<div class="case-content">'+curve(a,d)+'<strong>'+(d<0?'Aucune racine':d===0?'Une racine double':'Deux racines distinctes')+'</strong><p>P(x) > 0 ⇔ '+val[0]+'</p><p>P(x) < 0 ⇔ '+val[1]+'</p><h4>Signe</h4>'+table(xx(d),signs(d),a)+'<h4>Variations</h4>'+table(['−∞','α','+∞'],[a>0?'↘':'↗',a>0?'min β':'max β',a>0?'↗':'↘'],a)+'<p>'+factor+'</p></div>';
}
const m=document.createElement('section');m.className='matrix-section';m.id='tableau-synthese';m.innerHTML='<p class="eyebrow">Tableau de synthèse</p><h2>Six cas à comparer</h2><p>Sur chaque tableau, Sg(a) désigne le signe de a et −Sg(a) son opposé. Les racines annulent P(x).</p><div class="matrix-scroll" tabindex="0"><table class="six-matrix"><thead><tr><th>a / Δ</th><th>Δ < 0</th><th>Δ = 0</th><th>Δ > 0</th></tr></thead><tbody>'+[1,-1].map(a=>'<tr><th>a '+(a>0?'>':'<')+' 0</th>'+[-1,0,1].map(d=>'<td>'+cell(a,d)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div><p>Les variations utilisent le sommet S(α ; β), sans inventer de valeurs aux infinis.</p>';
const forms=document.createElement('section');
forms.id='trois-formes';forms.className='forms-overview';
forms.innerHTML='<p class="eyebrow">Trois écritures, un même polynôme</p><h2>Quelle forme choisir ?</h2><p>Ces écritures sont complémentaires : on choisit celle qui rend visible ce que l’on cherche.</p>'+
'<div class="forms-grid">'+
'<article><h3>Forme développée</h3><p class="math formula-nowrap">ax² + bx + c</p><p><b>Toujours disponible.</b> On identifie les coefficients, calcule le discriminant et cherche les racines.</p></article>'+
'<article><h3>Forme canonique</h3><p class="math formula-nowrap">a(x − α)² + β</p><p><b>Toujours disponible.</b> On lit le sommet, l’extremum, l’axe de symétrie et les variations.</p></article>'+
'<article><h3>Forme factorisée réelle</h3><p class="math formula-nowrap">a(x − x₁)(x − x₂)</p><p><b>Si Δ ≥ 0.</b> On lit les racines et on étudie facilement le signe. Pour Δ = 0, les facteurs coïncident.</p></article>'+
'</div><p class="form-note">Si Δ < 0, aucune factorisation en facteurs du premier degré réels n’existe. Les formes développée et canonique sont toujours possibles.</p>';
const t=document.getElementById('methode');if(t)t.before(m,forms);
})();