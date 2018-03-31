---
layout: page
name: Disinfestazioni
subtitle: disinfestazioni da zanzare e insetti
title: Trattamenti contro insetti e zanzare
excerpt: 'Disinfestazioni da insetti e zanzare. Prodotti atossici per prevenire e contrastare le infestazioni da zanzare e da altri insetti. Metodo efficace.'
image_path: /img/servizi/servizio-disinfestazione-insetti.jpg
---
<img src="{{ page.image_path }}" alt="{{ page.name}}" title="{{ page.name }}"/>


## Da ripetersi ogni 3 / 4 settimane

Il giardiniere PotaSiepe adotta un metodo di lotta alla zanzara moderno che si basa sulla corretta esecuzione di specifici interventi contro gli stadi larvali.

**La lotta antilarvale consente infatti di eliminare in breve tempo un grande numero di “potenziali” zanzare adulte**, agendo in aree limitate ed impiegando quantità modeste di specifici insetticidi antilarvali. Si tratta pertanto di una forma di lotta caratterizzata da un impatto ambientale minore rispetto a quello che accompagna la lotta contro le zanzare adulte.

Per eseguire una corretta disinfestazione antilarvale del giardino è necessario esaminare con attenzione l’area oggetto dell’intervento, registrando la presenza di tutti i siti di ristagno dell’acqua, ovvero i potenziali focolai di sviluppo larvale. In questi luoghi l’esecuzione di specifici campionamenti farà capire quando iniziare gli interventi antilarvali, con che cadenza ripeterli e quali sono i livelli di controllo ottenibili.

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
