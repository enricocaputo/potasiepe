---
layout: page
name: Manutenzione verde condominiale
subtitle: contratti di manutenzione programmata
title: Contratti annuali e stagionali per aree verde condominiali
excerpt: 'Categoria: giardinaggio. Servizio: manutenzione giardini a Udine e Gorizia. Affida la manutenzione del tuo giardino a un giardiniere esperto che si occuperà di tutto!'
image_path: /img/servizi/servizio-manutenzione-verde-condominiale.jpg
---
<img src="{{ page.image_path }}" alt="{{ page.name}}" title="{{ page.name }}"/>

## Servizio di giardinaggio: Manutenzione di giardini

**Non falci il tuo giardino da mesi? Le piante della tua terrazza hanno fatto fatica a superare l’inverno?**

Da oggi puoi rivolgerti a giardiniere PotaSiepe! Un giardiniere esperto che si occuperà di tutto: dalla potatura di siepi alla falciatura stagionale dell’erba fino ai piccoli e grandi interventi di manutenzione del giardino, con particolare attenzione alla diffusione di flora infestante e alla cura delle malattie comuni che affliggono le piante di casa.
Ti garantiamo un servizio professionale e un costo sempre in linea con l’alta qualità che proponiamo!

## Scopri tutti i servizi offerti da Potasiepe:

<div class="list-collection">
<ul>
	{% for servizi_giardinaggio in site.servizi_giardinaggio %}
		<li>
			<a href="{{ site.baseurl }}{{ servizi_giardinaggio.url }}">

				<div class="name">{{ servizi_giardinaggio.name }}</div>

				<img src="{% include relative-src.html src=servizi_giardinaggio.image_path %}" alt="{{ person.name }}">


					<div class="position">{{ servizi_giardinaggio.subtitle }}</div>

			</a>
		</li>
	{% endfor %}

</ul>
</div>
