---
layout: page
name: Progettazione giardini
subtitle: Progetti di giardini e terrazzi
title: Affidati a Potasiepe per progettare il tuo giardino
excerpt: 'Categoria: giardinaggio. Servizio: progettazione di giardini. Un giardiniere competente e pronto ad ascoltarti per realizzare l’area verde che hai sempre sognato.'
image_path: /img/servizi/progettazione-giardini-Udine-Gorizia.jpg
order: 3
---
<img src="{{ page.image_path }}" alt="{{ page.name}}" title="{{ page.name }}"/>

## Servizio di giardinaggio: Progettazione giardini

Potasiepe è un giardiniere competente e pronto ad ascoltarti per realizzare l’area verde che hai sempre sognato, così da valorizzare gli spazi esterni della tua villa e trasformare il tuo giardino in un angolo di natura che rappresenti il più possibile la tua personalità e le tue esigenze.
I nostri giardinieri possono realizzare nuovi prati erbosi sia con il fresatura del terreno e la semina tradizionale che con la posa di prato a rotoli. Il risultato è lo stesso: un giardino bello da vedere e su misura per ogni tua necessità.

<br/>
<div class="text-center">
  <h2>Preventivo Gratuito</h2>
  <a title="numero di telefono di Potasiepe Giardiniere +393889005888" href="tel:+393889005888" class="button">&#9742; 388 9005888</a>
</div>
<br/><br/>

## Scopri tutti i servizi offerti da Potasiepe:

<div class="list-collection">
<ul>
  {% assign servizi_giardinaggio = site.servizi_giardinaggio | sort: 'order' %}
  {% for servizi_giardinaggio in servizi_giardinaggio %}
		<li>
      <img src="{% include relative-src.html src=servizi_giardinaggio.image_path %}" alt="{{ servizi_giardinaggio.url }}">
			<h3>{{ servizi_giardinaggio.name }}</h3>
      <p>{{ servizi_giardinaggio.subtitle }}</p>
			<a href="{{ site.baseurl }}{{ servizi_giardinaggio.url }}" title="{{ servizi_giardinaggio.url }}"><strong>SCOPRI E PRENOTA</strong> &gt;</a>
		</li>
	{% endfor %}
</ul>
</div>
