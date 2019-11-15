---
layout: page
name: Verde condominiale
subtitle: Manutenzione giardini condominiali
title: Manutenzione giardini condominiali a Udine e Gorizia
excerpt: 'Manutenzione di giardini condominiali a Udine e Gorizia. Chiedici un sopralluogo e un preventivo gratuito per la manutenzione del verde condominiale.'
image_path: /img/servizi/servizio-manutenzione-verde-condominiale.jpg
order: 2
---
<img src="{{ page.image_path }}" alt="{{ page.name}}" title="{{ page.name }}"/>

Potasiepe è specializzato nella **manutenzione di giardini condominiali a Udine e Gorizia**, e relative province. La nostra esperienza nella **manutenzione del verde condominiale** ci permette di offrire un servizio misurato alle necessità, spesso complesse e articolate, di piccoli e grandi complessi residenziali. Grazie all’accurata selezione del nostro personale, garantiamo sicurezza e un ottimo rapporto con tutti i componenti della proprietà.
Forniamo tutti i servizi per il verde, contratti annuali e interventi di manutenzione straordinaria: diserbi, sfalci, disinfestazione zanzare. Ci occupiamo anche della potatura di siepi e di alberature a medio fusto.

Il nostro team è regolarmente assicurato e qualificato con certificazione per l'uso della motosega e patentino per l'acquisto e l'uso di prodotti fitosanitari rilasciato dall'ERSA.

Il preventivo è gratuito. Al termine di ogni intervento presenteremo al referente condominiale l’elenco delle operazione svolte al fine di dare la possibilità a chi investe nella manutenzione del giardino condominiale un servizio trasparente e senza sorprese.

Contattaci per **un sopralluogo e un preventivo gratuito** presso il tuo condominio.

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
			<a href="{{ site.baseurl }}{{ servizi_giardinaggio.url }}">

				<div class="name">{{ servizi_giardinaggio.name }}</div>

				<img src="{% include relative-src.html src=servizi_giardinaggio.image_path %}" alt="{{ person.name }}">


					<div class="position">{{ servizi_giardinaggio.subtitle }}</div>

			</a>
		</li>
	{% endfor %}

</ul>
</div>
