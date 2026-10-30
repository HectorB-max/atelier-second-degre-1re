/* Questions complémentaires avec corrections pédagogiques. Le moteur principal conserve les résultats. */
(() => {
'use strict';
const bank=[
{ id:'rac2',part:'racines',title:'Pas de factorisation évidente ?',q:'Pour <span class="math">R(x) = x² + 4x + 7</span>, combien y a-t-il de racines réelles ?',opt:['Deux racines distinctes.','Une racine double.','Aucune racine réelle.'],right:'c',
why:'Le discriminant vaut 16 − 28 = −12 : il est négatif, donc aucune racine réelle.',
wrong:['Un discriminant négatif interdit deux racines réelles.','Il y a une racine double seulement si le discriminant est nul.']},
{ id:'rac3',part:'racines',title:'Une racine double',q:'Résous <span class="math">x² − 6x + 9 = 0</span>.',opt:['Une seule racine réelle : 3, double.','Deux racines distinctes : −3 et 3.','Aucune racine réelle.'],right:'a',
why:'Le discriminant est nul et x² − 6x + 9 = (x − 3)². La seule racine est 3, de multiplicité deux.',
wrong:['Le nombre 3 est bien racine, mais −3 ne l’est pas : en remplaçant x par −3, on obtient 36, et non 0.','Le carré (x − 3)² s’annule bien pour x = 3.']},
{ id:'rac4',part:'racines',title:'Deux racines',q:'Quelles sont les racines de <span class="math">x² − x − 6</span> ?',opt:['−3 et 2.','−2 et 3.','−1 et 6.'],right:'b',
why:'On obtient (x + 2)(x − 3) : les racines sont −2 et 3. On pouvait aussi calculer Δ = 25.',
wrong:['−3 et 2 donnent la mauvaise somme.','Le produit convient (−1 × 6 = −6), mais la somme vaut 5 et non 1. Il faut vérifier les deux conditions.']}
];
bank.push(
{ id:'can2',part:'canonique',title:'Sommet ou maximum ?',q:'Pour <span class="math">f(x) = −(x − 2)² + 4</span>, quelle affirmation est correcte ?',opt:['Son minimum est 4.','Son maximum est 4, atteint en 2.','Son maximum est 2, atteint en 4.'],right:'b',
why:'Le coefficient a est négatif ; le sommet S(2 ; 4) donne donc un maximum de 4 en x = 2.',
wrong:['La parabole est tournée vers le bas : il s’agit d’un maximum.','Tu as échangé les coordonnées du sommet.']},
{ id:'can3',part:'canonique',title:'Un minimum négatif',q:'Pour <span class="math">g(x) = 3(x + 1)² − 5</span>, quel est le minimum ?',opt:['−5, atteint pour x = −1.','−1, atteint pour x = −5.','5, atteint pour x = 1.'],right:'a',
why:'Le carré est positif ou nul ; multiplié par 3 puis diminué de 5, il est minimal lorsqu’il est nul, pour x = −1.',
wrong:['−1 est l’abscisse du sommet, pas la valeur minimale.','Le carré s’annule en −1 et on ajoute −5.']},
{ id:'can4',part:'canonique',title:'Sur quel intervalle croît-elle ?',q:'Pour <span class="math">h(x) = (x − 3)² + 2</span>, où h est-elle strictement croissante ?',opt:['Sur ]−∞ ; 3].','Sur tout ℝ.','Sur [3 ; +∞[.'],right:'c',
why:'Avec a > 0, la fonction décroît jusqu’au sommet d’abscisse 3 puis croît sur [3 ; +∞[.',
wrong:['À gauche de 3, elle décroît.','Elle change de sens au sommet : elle ne croît pas sur tout ℝ.']},
{ id:'can5',part:'canonique',title:'Attention à la parenthèse',q:'Quelle est l’abscisse du sommet de <span class="math">k(x) = −2(x + 4)² + 1</span> ?',opt:['4.','−4.','1.'],right:'b',
why:'Le carré (x + 4)² est nul pour x = −4. Le sommet a donc pour abscisse −4.',
wrong:['Le signe de l’abscisse est opposé à celui écrit dans la parenthèse.','1 est l’ordonnée du sommet, pas son abscisse.']},
{ id:'can6',part:'canonique',title:'Retrouve l’écriture canonique',q:'Quelle est la forme canonique de <span class="math">P(x) = 2x² − 8x + 1</span> ?',opt:['2(x − 2)² + 7.','2(x + 2)² − 7.','2(x − 2)² − 7.'],right:'c',
why:'2x² − 8x + 1 = 2[(x − 2)² − 4] + 1 = 2(x − 2)² − 7.',
wrong:['Avec +7, le terme constant devient 15.','La parenthèse x + 2 donne le terme linéaire +8x.']},
{ id:'can7',part:'canonique',title:'La symétrie du sommet',q:'Pour <span class="math">q(x) = −(x − 1)² + 3</span>, compare q(0) et q(2).',opt:['q(0) = q(2).','q(0) < q(2).','q(0) > q(2).'],right:'a',
why:'0 et 2 sont à égale distance du sommet d’abscisse 1. Donc q(0) = q(2) = 2.',
wrong:['Les deux abscisses sont symétriques par rapport à 1 ; leurs images sont égales.','Les deux abscisses sont symétriques par rapport à 1 ; leurs images sont égales.']}
);
bank.push(
{ id:'sig2',part:'signe',title:'Discriminant négatif',q:'Quel est le signe de <span class="math">x² + 2x + 5</span> sur ℝ ?',opt:['Strictement positif partout.','Strictement négatif partout.','Négatif entre deux racines.'],right:'a',
why:'Δ = 4 − 20 = −16 < 0 et a = 1 > 0 : le trinôme est strictement positif sur ℝ.',
wrong:['Avec a > 0 et Δ < 0, le trinôme ne peut être négatif.','Le discriminant est négatif : il n’y a aucune racine réelle.']},
{ id:'sig3',part:'signe',title:'Le cas de la racine double',q:'Pour <span class="math">g(x) = −(x − 3)²</span>, quelle affirmation est vraie ?',opt:['g(x) est strictement négative partout.','g(x) ≤ 0 partout, avec égalité en x = 3.','g(x) est positive à droite de 3.'],right:'b',
why:'Le carré est positif ou nul et son opposé est négatif ou nul ; il s’annule en 3, racine double.',
wrong:['L’expression vaut 0 en x = 3 : elle n’est pas strictement négative partout.','Même à droite de 3, on prend l’opposé d’un carré : le résultat reste négatif.']},
{ id:'sig4',part:'signe',title:'Inégalité stricte',q:'Résous <span class="math">(x − 1)(x − 4) < 0</span>.',opt:['x ∈ ]−∞ ; 1[ ∪ ]4 ; +∞[.','x ∈ [1 ; 4].','x ∈ ]1 ; 4[.'],right:'c',
why:'Le coefficient a est positif : le produit est négatif entre ses deux racines, exclues car l’inégalité est stricte.',
wrong:['À l’extérieur, le produit est positif.','La stricte inégalité exclut les racines 1 et 4.']},
{ id:'sig5',part:'signe',title:'Inégalité large avec a négatif',q:'Résous <span class="math">−2(x + 1)(x − 2) ≥ 0</span>.',opt:['x ∈ [−1 ; 2].','x ∈ ]−∞ ; −1] ∪ [2 ; +∞[.','x ∈ ]−1 ; 2[.'],right:'a',
why:'a < 0 : le trinôme est positif entre les racines −1 et 2, et l’égalité autorise les deux bornes.',
wrong:['À l’extérieur, le signe est négatif puisque a < 0.','Avec ≥, les racines sont incluses : il faut les crochets fermés.']}
);
bank.push(
{ id:'bil1',part:'bilan',title:'Racines ou sommet ?',q:'Pour <span class="math">P(x) = −(x − 2)² + 4</span>, quelles sont les racines ?',opt:['Une racine double 2.','Deux racines 0 et 4.','Aucune racine réelle.'],right:'b',
why:'P(x) = 0 équivaut à (x − 2)² = 4, donc x − 2 = −2 ou x − 2 = 2 : racines 0 et 4.',
wrong:['2 est l’abscisse du sommet, ce n’est pas une racine.','La parabole coupe l’axe horizontal en 0 et en 4.']},
{ id:'bil2',part:'bilan',title:'Du sommet au signe',q:'Pour <span class="math">Q(x) = 2(x + 1)² + 3</span>, quel est le signe de Q ?',opt:['Q(x) > 0 pour tout réel.','Q(x) < 0 pour tout réel.','Q(x) s’annule en −1.'],right:'a',
why:'2(x + 1)² ≥ 0, donc Q(x) ≥ 3 > 0 : la fonction possède un minimum égal à 3 et ne s’annule donc jamais.',
wrong:['Le carré et le coefficient sont positifs et on ajoute 3.','En −1, le carré s’annule mais Q(−1) = 3.']},
{ id:'bil3',part:'bilan',title:'Relier les trois formes',q:'Pour <span class="math">R(x) = x² − 4x + 3</span>, quelle affirmation est exacte ?',opt:['Elle est négative sur ]−∞ ; 1[.','Elle possède un maximum égal à −1.','Elle est négative sur ]1 ; 3[ et son minimum vaut −1.'],right:'c',
why:'R(x) = (x − 1)(x − 3) = (x − 2)² − 1 : racines 1 et 3, minimum −1 au sommet et signe négatif entre les racines.',
wrong:['Avec a > 0, le trinôme est positif à l’extérieur des racines 1 et 3.','La forme canonique donne un minimum, pas un maximum, car a > 0.']}
);
// Insérer les nouvelles questions avant l'initialisation du moteur QCM historique.
const extraCorrect={},extraResponses={};
const esc=t=>String(t).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
function card(q,index){
 const title='<div class="extra-index">Exercice '+index+' · '+(q.part==='bilan'?'Synthèse':q.part==='canonique'?'Sommet et variations':q.part==='racines'?'Les racines':'Le signe')+'</div>';
 const buttons=q.opt.map((answer,i)=>'<button type="button" class="choice" data-option="'+['a','b','c'][i]+'" aria-pressed="false"><span class="letter">'+['A','B','C'][i]+'</span><span>'+answer+'</span></button>').join('');
 return '<div class="extra-question">'+title+'<h4>'+q.title+'</h4><p class="question-statement">'+q.q+'</p>'+
 '<div class="answers" data-single="'+q.id+'" role="group" aria-label="'+esc(q.title)+'">'+buttons+'</div>'+
 '<div class="feedback" id="feedback-'+q.id+'" role="status" aria-live="polite"></div></div>';
}
for(const section of ['racines','canonique','signe']){
 const target=document.querySelector('#'+section+' .right-panel');
 const list=bank.filter(q=>q.part===section);
 const wrapper=document.createElement('div');wrapper.className='extra-questions';
 wrapper.innerHTML='<div class="extra-questions-heading">Pour aller plus loin · '+(list.length+1)+' questions au total</div>'+list.map((q,i)=>card(q,i+2)).join('');
 target.append(wrapper);
}
const synthesis=document.createElement('section');
synthesis.id='bilan-plus';synthesis.className='bilan-plus';
synthesis.innerHTML='<div class="bilan-plus-head"><p class="eyebrow">Bilan · Utiliser plusieurs idées</p><h2>Trois nouvelles situations à démêler</h2><p>Une équation, un sommet, un signe : décide d’abord quelle question est posée, puis choisis l’outil utile.</p></div>'+
 '<div class="bilan-plus-grid">'+bank.filter(q=>q.part==='bilan').map((q,i)=>card(q,i+1)).join('')+'</div>';
document.querySelector('.closing').before(synthesis);
for(const q of bank){
 extraCorrect[q.id]=q.right;
 const wrongKeys=['a','b','c'].filter(x=>x!==q.right);
 const fb={};
 q.opt.forEach((_,i)=>{
  const key=['a','b','c'][i],isRight=key===q.right;
  fb[key]=isRight?['Exact !',q.why]:['À revoir : '+q.title.toLowerCase()+'.',q.wrong[wrongKeys.indexOf(key)]];
 });
 extraResponses[q.id]=fb;
}
window.SUPPLEMENTAL_CORRECT=extraCorrect;
window.SUPPLEMENTAL_RESPONSES=extraResponses;
window.SUPPLEMENTAL_QUESTION_IDS=Object.keys(extraCorrect);
})();
