---
layout: page
name: Progettazione giardini
subtitle: Regalati un progetto originale, bello da vedere e unico.
title: Affidati a Potasiepe per progettare il tuo giardino
excerpt: 'Categoria: giardinaggio. Servizio: progettazione di giardini. Un giardiniere competente e pronto ad ascoltarti per realizzare l’area verde che hai sempre sognato.'
image_path: /img/servizi/progettazione-giardini-Udine-Gorizia.jpg
order: 3
last_modified_at: 2020-04-05T7:08
---
<picture>
 <source media="(max-width: 768px)" srcset="/img/servizi/progettazione-giardini-Udine-Gorizia.jpg">
 <img src="/img/servizi/progettazione-giardini-garden-designer.jpg" alt="{{ page.name }}" title="{{ page.name }}">
</picture>

## Servizio di giardinaggio: Progettazione giardini

Potasiepe è un giardiniere competente e pronto ad ascoltarti per realizzare l’area verde che hai sempre sognato, così da valorizzare gli spazi esterni della tua villa e trasformare il tuo giardino in un angolo di natura che rappresenti il più possibile la tua personalità e le tue esigenze.

>> ### "Come il giardino in cui s’iscrive, il progetto è un’opera in fieri, aperta, ferma nelle intenzioni, anche se variabile nei dettagli."
>
>> -- <cite> Tatiana Bilbao </cite>

A seguito del nostro primo incontro preparerò una **bozza di progetto**. L'obiettivo di questa fase sarà definire i punti fermi e le caratteristiche più significative che il giardino dovrà avere: la suddivisione degli spazi e le relative funzioni.

Il **progetto definitivo** terrà conto dalle indicazioni approvate durante la discussione del progetto preliminare. Per ciascuna zona del giardino ti proporrò una lista di piante tra cui scegliere.

Infine, grazie a tutti questi dati sarò in grado di preparare il **computo metrico** e il **preventivo dettagliato**.

>> ### "Bisogna accettare che il ruolo del giardiniere è di pari dignità a quello dell'architetto."
>
>> -- <cite> Brian Eno </cite>

Assieme ai miei collaboratori metto a dimora alberi anche di grandi dimensioni, realizzo aiuole, bordure, impianti di irrigazione e prati erbosi di tipo tradizionale (a mezzo fresatura del terreno e semina), e a rotoli (posa di zolle già pronte). Il risultato è sempre lo stesso: un giardino bello da vedere e su misura per ogni tua necessità.

<br/>
<div class="text-center">
  <p class="h3">PREVENTIVO GRATUITO</p>
  <a title="Chiama adesso per un preventivo gratuito e senza impegno" href="tel:+393889005888" class="button">&#9742; 388 9005888</a>
</div>
<br/><br/>

## Scopri tutti i servizi offerti da Potasiepe:

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
