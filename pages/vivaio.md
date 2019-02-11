---
layout: page
title: Vivaio
excerpt: "Visita Potasiepe per trovare una vasta selezione di piante per il giardino. Scopri il vivaio: olivi, olivi bonsai, arte topiaria, piante da siepe."
permalink: /vivaio/
---
<div class="list-collection">
<h2>Acquista olivi e topiaria</h2>
<ul>
{% for item in site.data.plants.items %}
<li>

    <h3><span class="name">{{ item.name }}</span></h3>
    <img src="{% include relative-src.html src=item.image %}" alt="{{ item.name }}">
    <p>{{ item.excerpt }}</p>
    <p><strong>EUR {{ item.price }},00 <em>consegna gratuita</em>.</strong></p>

</li>
{% endfor %}
</ul>
</div>

<div>
<p>
<strong>Piante per giardini formali.</strong> Le piante sagomate, sia in siepi potate e squadrate sia in forme topiarie, sono un elemento importante del giardino formale. I profili sorprendenti delle sculture sempreverdi danno slancio verticale e forme di intensità drammatica al disegno, altrimenti bidimensionale.

Le piante sempreverdi a crescita lenta, come il tasso (Taxus baccata), il bosso
(Buxus sempervirens), l'agrifoglio (Ilex aquifolium) e il leccio (Quercus ilex), sopportano una potatura ripetuta per molti anni.
</p>

<p>
<strong>L'arte topiaria</strong> è un insieme di tecniche studiate per sagomare
alberi e arbusti in forme artificiali molto decorative. Apprezzata sin dal tempo dei Romani, è sempre stata usata per ottenere forme geometriche di forte
impatto architettonico o figure particolari come uccelli, animali ecc.
</p>

<p>
<strong>Stili diversi. </strong> Nell'arte topiaria  si eseguono stili diversi a seconda dell'effetto che si vuole ottenere.

Le forme come coni, obelischi e colonne fungono da forti elementi strutturali. Questo genere di topiaria si addice sia ai giardini formali, ad esempio per incorniciare una veduta o un viale, sia ai giardini informali per creare un contrasto con le forme libere degli altri vegetali.

In alcuni giardini la parte superiore delle siepi viene trattata come una scultura verde, ritagliandovi sfere e cubi.

L'arte topiaria dà interessanti risultati anche con le piante in vaso: usate una sola pianta scolpita come elemento decorativo centrale, o due ai lati di una porta, o molte disposte lungo un percorso.
</p>

<p>
<strong>Olivi</strong>, o ulivi (Olea europaea) sono alberi sempreverdi secolari a crescita lenta che, se non vengono potati, raggiungono anche 9 - 12 metri di altezza e 7 - 9 metri di chioma. Con l'età aumenta la nodosità del tronco e con essa la bellezza e il fascino dell'olivo.

A seconda dello stile di potatura e del clima possono produrre frutti, le olive.

Gli olivi vanno potati appena piantati, eliminando il germoglio portante quando l'albero è alto circa 1,5 m; si scelgono tre o quattro forti rami laterali per creare la struttura portante dei rami dell'albero. La potatura seguente consiste nel rimuovere i rami più vecchi per favorire la crescita di nuovi germogli, dal momento che le olive sono prodotte su legno nuovo di un anno, soprattutto alle estremità dei rami.
</p>

<p>
<strong>Vivaio e prezzi. </strong> Disponiamo di um'ampia selezione di piante da siepe di ogni dimensione a partire da 10 euro. I prezzi dipendono dalla grandezza e dall'età degli esemplari e includono sempre le spese di consegna.
</p>

</div>
