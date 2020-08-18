---
layout: page
title: Giardiniere a Gorizia
excerpt: Giardiniere a Gorizia, Cormons, Grado, San Pier D'Isonzo, Staranzano, Ronchi dei Legionari e in tutta la Provincia.
image: /img/gorizia.jpg
permalink: /gorizia/
---
# Giardiniere a Gorizia

<img src="/img/gorizia.jpg" alt="Giardiniere a Gorizia" title="Giardiniere a Gorizia">

Giardiniere a Gorizia, Cormons, Grado, San Pier D'Isonzo, Staranzano, Ronchi dei Legionari e in tutti i comuni della Provincia.

## La mia specialità è tagliare la siepe e curare i giardini
Sono un giardiniere professionista e qualificato. Offro i miei servizi di giardinaggio a Gorizia, Monfalcone, Cormons, Grado, San Pier D'Isonzo, Staranzano, Ronchi dei Legionari, Capriva e in tutti i comuni della Provincia.

[Progetto giardini](/progettazione-giardini/ "Affida a Potasiepe il progetto del tuo giardino"), realizzo aiuole, poso [impianti di irrigazione](/impianti-di-irrigazione/ "Ottieni un impianto di irrigazione a regola d'arte") interrati e fuori terra. Cerco di proporre soluzioni originali e creative tenendo d'occhio i prezzi, nel rispetto del budget e delle scelte dei miei clienti.

**[Scopri di più &gt;](/chi-sono/ "Chi sono")**

## Metodo di lavoro
Sia che stabiliamo un [prezzo](/prezzi/ "Scopri i prezzi di giardiniere Potasiepe") forfettario sia che decidiamo per un compenso orario e a metro, cerco di lavorare alacremente, con precisione, rapidamente e con la massima pulizia.
Cerco di essere sempre reperibile e, impegni precedenti permettendo, cerco di soddisfare le esigenze di orario dei miei clienti. **Offro supporto e consulenza continui nel tempo**.

## Attrezzature adeguate e moderne
Che si tratti di curare un giardino privato, di manutenere un parco e di livellare e fresare un appezzamento di terra incolto ed abbandonato, **mi avvalgo di macchine moderne ed efficienti**. Decespugliatore, tagliaerba e trattorino per lo sfalcio hanno un **motore a quattro tempi** a benzina in regola con le nuove normative sull'inquinamento. Inoltre, dispongo di **bio-trituratore per macinare i residui delle potature** in maniera ecocompatibile ed eco-sostenibile nel rispetto dell'ambiente.
Quando lavoro nei centri urbani sono equipaggiato con **attrezzature a batteria**.

## Arrivo direttamente a casa vostra
Mi sposto in tutta la provincia di Gorizia, entro un raggio di 40 km circa da Cervignano del Friuli.


## Perchè scegliermi?
Ho **prezzi onesti**. Lavoro con **competenza di giardinaggio**. Sono un giardiniere professionista e offro **una gamma di [servizi di giardinaggio](/servizi-di-giardinaggio/ "Scopri i servizi di giardinaggio di giardiniere Potasiepe") a Gorizia a 360 gradi**:

<div class="page-content">
<div class="list-collection">
<ul>
  {% assign servizi_giardinaggio = site.servizi_giardinaggio | sort: 'order' %}
  {% for servizi_giardinaggio in servizi_giardinaggio %}
		<li>
      <img src="{% include relative-src.html src=servizi_giardinaggio.image_path %}" alt="{{ servizi_giardinaggio.url }}">
      <div>
      <h3>{{ servizi_giardinaggio.name }}</h3>
      <p>{{ servizi_giardinaggio.subtitle }}</p>
			<a href="{{ site.baseurl }}{{ servizi_giardinaggio.url }}" title="{{ servizi_giardinaggio.url }}"><strong>SCOPRI E PRENOTA</strong> &gt;</a>
      </div>
    </li>
	{% endfor %}
</ul>
</div>
</div>
<br/><br/>
<section>
<br/>
<div>
  <h2><a href="/consigli-di-giardinaggio/" title="blog di giardinaggio, orto e giardino">Per l'orto e il giardino</a></h2>
  Le ultimissime notizie dal blog:
  <ul class="post-list">
    {% for post in site.posts limit: 5 %}
      <li>
      <article>
        <h3>
          &#9752; <mark>{{ post.title }}</mark> <a class="post-link" href="{{ post.url | prepend: site.baseurl }}"> .. continua </a>
        </h3>
      </article>
      </li>
    {% endfor %}
  </ul>
</div>
<br/>
</section>
