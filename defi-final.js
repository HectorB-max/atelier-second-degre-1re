/* Épreuve de synthèse sans QCM, correction dépliante. */
(() => {
'use strict';
const section=document.createElement('section');
section.id='defi-final';
section.className='defi-final';
section.setAttribute('aria-labelledby','defi-final-titre');
section.innerHTML=`
<div class="defi-final-head">
  <p class="eyebrow">Après les ateliers · À faire sur papier</p>
  <h2 id="defi-final-titre">Et maintenant, sans les réponses proposées ?</h2>
  <p>Une seule épreuve pour relier les trois regards : <strong>racines, sommet et signe</strong>. Prends une feuille, rédige tes justifications et n’ouvre le corrigé qu’une fois ta recherche terminée. Ici, aucun choix de réponse ne te guide.</p>
  <div class="defi-badges"><span>Sans calculatrice</span><span>Rédaction et justification</span><span>Deux approfondissements</span><span>Un défi ★</span></div>
</div>
<div class="defi-parts">
<article class="defi-part">
  <span class="defi-part-number">PARTIE I · UN TRINÔME, TROIS ÉCRITURES</span>
  <h3>Étudier complètement une fonction</h3>
  <p>On considère la fonction polynôme <span class="math">P</span> définie sur ℝ par :</p>
  <p class="defi-equation"><span class="math">P(x) = −2x² + 8x − 6</span>.</p>
  <ol>
    <li>Calculer le discriminant, déterminer les racines réelles de <span class="math">P</span>, puis écrire sa forme factorisée.</li>
    <li>Écrire <span class="math">P</span> sous forme canonique. Donner les coordonnées du sommet, l’axe de symétrie et l’extremum de <span class="math">P</span>.</li>
    <li>Construire les <strong>tableaux de variations et de signes</strong> de <span class="math">P</span> sur ℝ.</li>
    <li>Résoudre dans ℝ les inéquations <span class="math">P(x) ≥ 0</span> et <span class="math">P(x) &gt; −6</span>.</li>
  </ol>
</article>
<article class="defi-part">
  <span class="defi-part-number">PARTIE II · POSITIONS RELATIVES</span>
  <h3>Quand une parabole rencontre-t-elle une droite ?</h3>
  <p>Dans un même repère orthonormé, on considère les courbes <span class="math">C<sub>f</sub></span> et <span class="math">C<sub>g</sub></span> des fonctions :</p>
  <p class="defi-equation"><span class="math">f(x) = x² − x + 2</span> <span class="defi-and">et</span> <span class="math">g(x) = x + 3</span>.</p>
  <ol>
    <li>Déterminer <strong>exactement</strong> les abscisses des points d’intersection de <span class="math">C<sub>f</sub></span> et <span class="math">C<sub>g</sub></span>, puis leurs coordonnées. Les résultats comportent des radicaux.</li>
    <li>Étudier les <strong>positions relatives</strong> des deux courbes pour toutes les valeurs réelles de <span class="math">x</span>. Justifier chaque intervalle.</li>
    <li>Déterminer le milieu du segment joignant les deux points d’intersection, puis calculer <strong>exactement</strong> la longueur de ce segment.</li>
  </ol>
</article>
<article class="defi-part defi-star">
  <span class="defi-part-number">PARTIE III · DÉFI ★ · RECHERCHE PERSONNELLE</span>
  <h3>Deux droites, un seul point commun chacune ?</h3>
  <p>On reprend la parabole <span class="math">C<sub>f</sub></span> de la partie II et l’origine <span class="math">O(0 ; 0)</span>.</p>
  <p><strong>Démontrer qu’il existe exactement deux droites <strong>non verticales</strong> passant par <span class="math">O</span> et ayant chacune <strong>un unique point commun</strong> avec <span class="math">C<sub>f</sub></span>.</strong> Déterminer leurs équations cartésiennes ainsi que les coordonnées exactes de leurs points communs avec la parabole.</p>
  <p>Il faudra justifier qu’il n’existe pas d’autres droites possédant cette propriété.</p>
</article>
</div>
<details class="defi-correction" id="defi-corrige">
  <summary><span class="defi-correction-icon">▸</span>Afficher le corrigé détaillé <small>— seulement après avoir cherché</small></summary>
  <div class="defi-correction-body">
    <p class="defi-correction-intro">Les trois parties se résolvent avec les outils du chapitre. Il n’est pas nécessaire d’utiliser une calculatrice pour les racines irrationnelles.</p>
    <article class="defi-solution">
      <h3>Corrigé de la partie I — Un trinôme sous trois formes</h3>
      <h4>1. Discriminant, racines, factorisation</h4>
      <p>On identifie <span class="math">a = −2</span>, <span class="math">b = 8</span> et <span class="math">c = −6</span>. Alors :</p>
      <p class="defi-solution-math"><span class="math">Δ = 8² − 4 × (−2) × (−6) = 64 − 48 = 16 &gt; 0</span>.</p>
      <p>Il existe donc deux racines réelles distinctes. Comme <span class="math">√Δ = 4</span> et que le dénominateur est négatif, <strong>on les range ensuite dans l’ordre croissant</strong> :</p>
      <p class="defi-solution-math"><span class="math">x₁ = <span class="math-frac" role="math" aria-label="moins huit plus quatre sur moins quatre"><span class="math-frac-top">−8 + 4</span><span class="math-frac-bottom">−4</span></span> = 1</span> et <span class="math">x₂ = <span class="math-frac" role="math" aria-label="moins huit moins quatre sur moins quatre"><span class="math-frac-top">−8 − 4</span><span class="math-frac-bottom">−4</span></span> = 3</span>.</p>
      <p>La forme factorisée est donc :</p>
      <p class="defi-solution-math"><span class="math math-nowrap">P(x) = −2(x − 1)(x − 3)</span>.</p>
      <h4>2. Forme canonique, sommet et extremum</h4>
      <p>On met le coefficient de <span class="math">x²</span> en facteur puis on complète le carré :</p>
      <p class="defi-solution-math"><span class="math">P(x) = −2(x² − 4x + 3) = −2[(x − 2)² − 1]</span>.</p>
      <p class="defi-solution-math"><span class="math math-nowrap">P(x) = −2(x − 2)² + 2</span>.</p>
      <p>Le sommet est <span class="math">S(2 ; 2)</span> et l’axe de symétrie est la droite <span class="math">x = 2</span>. Comme <span class="math">a &lt; 0</span>, <span class="math">P</span> possède un <strong>maximum égal à 2</strong>, atteint en <span class="math">x = 2</span>.</p>
      <h4>3. Variations et signe</h4>
      <p>La fonction <span class="math">P</span> est strictement croissante sur <span class="math">]−∞ ; 2]</span> puis strictement décroissante sur <span class="math">[2 ; +∞[</span>. Sa forme factorisée et le signe négatif de <span class="math">a</span> donnent un signe négatif à l’extérieur de <span class="math">[1 ; 3]</span>, positif à l’intérieur et nul aux deux racines.</p>
      <div class="defi-diagrams"><div><h5>Tableau de variations</h5><div id="defi-variation-P"></div></div><div><h5>Tableau de signes</h5><div id="defi-signe-P"></div></div></div>
      <h4>4. Résolution des inéquations</h4>
      <p>On lit d’abord le tableau de signes : <span class="math">P(x) ≥ 0 ⇔ x ∈ [1 ; 3]</span>. Les racines sont incluses, puisque l’égalité est autorisée.</p>
      <p>Pour la seconde inéquation, on transforme :</p>
      <p class="defi-solution-math"><span class="math">P(x) &gt; −6 ⇔ −2x² + 8x &gt; 0 ⇔ −2x(x − 4) &gt; 0</span>.</p>
      <p>Le produit est positif strictement entre ses racines <span class="math">0</span> et <span class="math">4</span>, car son coefficient dominant est négatif. Ainsi <span class="math">P(x) &gt; −6 ⇔ x ∈ ]0 ; 4[</span>.</p>
    </article>
    <article class="defi-solution">
      <h3>Corrigé de la partie II — Les positions relatives</h3>
      <h4>1. Intersections exactes et coordonnées</h4>
      <p>Les courbes se rencontrent lorsque <span class="math">f(x) = g(x)</span>. On étudie donc leur différence :</p>
      <p class="defi-solution-math"><span class="math">h(x) = f(x) − g(x) = x² − 2x − 1 = (x − 1)² − 2</span>.</p>
      <p>Le discriminant est <span class="math">Δ = (−2)² − 4 × 1 × (−1) = 8 &gt; 0</span>. L’équation équivaut aussi à <span class="math">(x − 1)² = 2</span>, donc ses deux solutions exactes, irrationnelles, sont :</p>
      <p class="defi-solution-math"><span class="math">x₁ = 1 − √2</span> et <span class="math">x₂ = 1 + √2</span>, avec <span class="math">x₁ &lt; x₂</span>.</p>
      <p>En reportant dans <span class="math">g(x) = x + 3</span>, on trouve les points d’intersection :</p>
      <p class="defi-solution-math"><span class="math">A(1 − √2 ; 4 − √2)</span> et <span class="math">B(1 + √2 ; 4 + √2)</span>.</p>
      <h4>2. Positions relatives des deux courbes</h4>
      <p>Le signe de <span class="math">h(x) = f(x) − g(x)</span> détermine quelle courbe est au-dessus de l’autre. Comme son coefficient dominant est positif et ses racines sont <span class="math">x₁</span> et <span class="math">x₂</span> :</p>
      <div class="defi-diagrams"><div class="defi-one-diagram"><h5>Tableau de signes de f − g</h5><div id="defi-signe-h"></div></div></div><figure class="defi-figure"><figcaption><strong>Positions relatives :</strong> les surfaces colorées correspondent aux intervalles où la parabole est au-dessus ou au-dessous de la droite.</figcaption><div id="defi-figure-positions"></div><div class="defi-legend"><span class="defi-legend-positive">Zone verte : f(x) &gt; g(x)</span><span class="defi-legend-negative">Zone orangée : f(x) &lt; g(x)</span></div></figure>
      <p>Pour <span class="math">x &lt; 1 − √2</span> ou <span class="math">x &gt; 1 + √2</span>, <span class="math">f(x) &gt; g(x)</span> : <span class="math">C<sub>f</sub></span> est <strong>au-dessus</strong> de <span class="math">C<sub>g</sub></span>.</p>
      <p>Pour <span class="math">1 − √2 &lt; x &lt; 1 + √2</span>, <span class="math">f(x) &lt; g(x)</span> : <span class="math">C<sub>f</sub></span> est <strong>au-dessous</strong> de <span class="math">C<sub>g</sub></span>.</p>
      <p>Aux deux abscisses <span class="math">1 − √2</span> et <span class="math">1 + √2</span>, les deux courbes se coupent.</p>
      <h4>3. Milieu et distance exacte</h4>
      <p>Les coordonnées du milieu de <span class="math">[AB]</span> sont les moyennes de celles de <span class="math">A</span> et <span class="math">B</span>. Les termes en <span class="math">√2</span> se compensent : <strong>le milieu est <span class="math">M(1 ; 4)</span></strong>.</p>
      <p>La différence des abscisses comme celle des ordonnées vaut <span class="math">2√2</span>. Par le théorème de Pythagore :</p>
      <p class="defi-solution-math"><span class="math">AB² = (2√2)² + (2√2)² = 8 + 8 = 16</span>, d’où <strong><span class="math">AB = 4</span></strong>.</p>
      <p class="defi-key-point">Un résultat remarquable : bien que les coordonnées des points d’intersection soient irrationnelles, leur distance est exactement égale à 4.</p>
    </article>
    <article class="defi-solution defi-solution-star">
      <h3>Corrigé du défi ★ — Deux droites à intersection unique</h3>
      <h4>1. Transformer la géométrie en algèbre</h4>
      <p>Conformément à l’énoncé, on cherche uniquement des droites <strong>non verticales</strong> passant par <span class="math">O(0 ; 0)</span>. Chacune possède une équation de la forme <span class="math">y = mx</span>, où <span class="math">m</span> est réel.</p>
      <p>Les intersections entre la droite et la parabole vérifient :</p>
      <p class="defi-solution-math"><span class="math">x² − x + 2 = mx ⇔ x² − (m + 1)x + 2 = 0</span>.</p>
      <p>Pour cette parabole et une droite non verticale, demander <strong>un seul point commun</strong> revient à imposer une <strong>racine double</strong> à l’équation d’intersection, donc un discriminant nul. Nous montrerons ensuite pourquoi les droites obtenues sont tangentes.</p>
      <h4>2. Déterminer les pentes possibles</h4>
      <p>Le discriminant dépend maintenant de <span class="math">m</span> :</p>
      <p class="defi-solution-math"><span class="math">Δ(m) = (m + 1)² − 8</span>.</p>
      <p>Pour qu’il y ait un seul point commun, on impose <span class="math">Δ(m) = 0</span>, ce qui équivaut successivement à <span class="math">(m + 1)² = 8</span> et <span class="math">m + 1 = ±2√2</span>.</p>
      <p>L’équation a exactement deux solutions réelles : il existe donc deux droites non verticales, et seulement deux, ayant l’unique point commun recherché :</p>
      <p class="defi-solution-math"><span class="math">D₁ : (1 + 2√2)x + y = 0</span> et <span class="math">D₂ : (1 − 2√2)x + y = 0</span>.</p><p>Ce sont les <strong>équations cartésiennes</strong> demandées, de la forme <span class="math">Ax + By + C = 0</span>. Le nom de chaque droite est écrit devant deux-points. Les formes réduites correspondantes sont <span class="math">y = (−1 − 2√2)x</span> et <span class="math">y = (−1 + 2√2)x</span>.</p>
      <h4>3. Vérifier la tangence et trouver les points de contact</h4>
      <p>Pour la première droite, l’équation d’intersection devient <span class="math">(x + √2)² = 0</span>. Son unique abscisse de contact est <span class="math">−√2</span> ; le point correspondant est <span class="math">K₁(−√2 ; 4 + √2)</span>.</p>
      <p>Pour la seconde, on obtient <span class="math">(x − √2)² = 0</span>, d’où le point <span class="math">K₂(√2 ; 4 − √2)</span>.</p><figure class="defi-figure"><figcaption><strong>Les deux droites issues de O :</strong> chacune rencontre la parabole en un seul point. Leurs noms et leurs équations cartésiennes sont indiqués au voisinage des droites.</figcaption><div id="defi-figure-contact"></div><div class="defi-legend"><span class="defi-legend-contact1">D₁ : (1 + 2√2)x + y = 0</span><span class="defi-legend-contact2">D₂ : (1 − 2√2)x + y = 0</span></div></figure>
      <p>La vérification est explicite pour chacune des deux droites :</p><p class="defi-solution-math"><span class="math">f(x) − (−1 − 2√2)x = (x + √2)²</span>.</p><p class="defi-solution-math"><span class="math">f(x) − (−1 + 2√2)x = (x − √2)²</span>.</p><p>Dans chaque cas, la différence est un <strong>carré parfait</strong> : le contact est double, et la parabole reste du même côté de la droite au voisinage du point commun. On obtient ici les deux <strong>tangentes</strong> à la parabole passant par l’origine. Aucune autre droite non verticale ayant un seul point commun ne peut exister, puisque le discriminant ne s’annule que pour ces deux valeurs de <span class="math">m</span>.</p><p class="defi-vocabulaire"><strong>Attention au vocabulaire :</strong> « avoir un seul point commun avec une courbe » n’est <strong>pas</strong> une définition générale de la tangence. Par exemple, la droite verticale <span class="math">x = 0</span> n’a qu’un point commun avec la parabole <span class="math">y = x²</span>, mais sa tangente en <span class="math">O</span> est la droite horizontale <span class="math">y = 0</span>. Notre critère de racine double caractérise le contact tangent <strong>dans la situation particulière étudiée ici</strong>.</p>
      <p class="defi-key-point"><strong>L’idée inventive :</strong> introduire une droite inconnue <span class="math">y = mx</span>, puis transformer la tangence en condition <span class="math">Δ(m) = 0</span>. Le problème géométrique devient une équation du second degré portant sur la pente.</p>
    </article>
  </div>
</details>
<p class="defi-final-foot">Ce défi est indépendant du compteur des QCM : tu peux le refaire sur papier sans effacer ta progression.</p>
`;
const anchor=document.querySelector('.closing');
if(anchor)anchor.before(section);
if(typeof window.secondDegreVariationSVG==='function'){
 document.getElementById('defi-variation-P').append(window.secondDegreVariationSVG({up:true,label:'max',extremum:'2',alpha:'2',name:'P(x)'}));
}
function showSignDiagram(where,a,roots,normal,between,name){
 if(typeof window.secondDegreSigneSVG!=='function')return;
 const svg=window.secondDegreSigneSVG(a,1);
 svg.querySelector('.tkz-sign-name').textContent=name;
 const symbols=[...svg.querySelectorAll('.tkz-symbol')];
 if(symbols.length>=3){symbols[1].textContent=roots[0];symbols[2].textContent=roots[1];}
 [...svg.querySelectorAll('.tkz-sign-value')].forEach(node=>{
    node.textContent=node.textContent==='Sg(a)'?normal:between;
 });
 svg.setAttribute('aria-label','Tableau de signes de '+name+' : zéros en '+roots[0]+' et '+roots[1]+', signe '+normal+' à l’extérieur et '+between+' entre les deux.');
 document.getElementById(where).append(svg);
}
showSignDiagram('defi-signe-P',-1,['1','3'],'−','+','P(x)');
showSignDiagram('defi-signe-h',1,['1 − √2','1 + √2'],'+','−','h(x)');
})();
