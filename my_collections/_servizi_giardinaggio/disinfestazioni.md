---
layout: page
name: Disinfestazioni
subtitle: disinfestazioni da zanzare e insetti
title: Trattamenti contro insetti e zanzare
excerpt: 'Disinfestazioni da insetti e zanzare. Prodotti atossici per prevenire e contrastare le infestazioni da zanzare e da altri insetti. Metodo efficace.'
image_path: /img/servizi/servizio-disinfestazione-insetti.jpg
last_modified_at: 2018-12-29
---
<img src="{{ page.image_path }}" alt="{{ page.name}}" title="{{ page.name }}"/>

Il giardiniere PotaSiepe adotta un metodo di lotta alla zanzara moderno che si basa sulla corretta esecuzione di specifici interventi contro gli stadi larvali.

## Disinfestazione contro le zanzare


**La lotta antilarvale consente infatti di eliminare in breve tempo un grande numero di “potenziali” zanzare adulte**, agendo in aree limitate ed impiegando quantità modeste di specifici insetticidi antilarvali. Si tratta pertanto di una forma di lotta caratterizzata da un impatto ambientale minore rispetto a quello che accompagna la lotta contro le zanzare adulte.

### Una corretta disinfestazione, da ripetersi ogni 3 / 4 settimane

Per eseguire una corretta disinfestazione antilarvale del giardino è necessario esaminare con attenzione l’area oggetto dell’intervento, registrando la presenza di tutti i siti di ristagno dell’acqua, ovvero i potenziali focolai di sviluppo larvale. In questi luoghi l’esecuzione di specifici campionamenti farà capire quando iniziare gli interventi antilarvali, con che cadenza ripeterli e quali sono i livelli di controllo ottenibili.

## Disinfestazione contro la cimice verde

Negli ultimi anni abbiamo subito una vera e propria invasione da parte della cimice verde asiatica. Un insetto quanto mai sgradevole!

Per debellare la presenza delle cimici verdi si usano delle emulsioni ad altissimo concentrato di piretro.

Con uno-due cicli di disinfestazione il problema viene risolto quasi del tutto.

## Disinfestzioni contro la cocciniglia e altri insetti delle piante da giardinaggio

Cocciniglia, afidi e vari parassiti possono colpire le piante e gli alberi del giardino. Spesso è sufficiente un unico intervento: con alcune pennellate e la nebulizzazione di prodotti specifici le infestazioni vengono debellate immediatamente e le piante tornano a sorridere.

## Trattamenti del frutteto

Gommosi, cocciniglia e mancanza di nutrienti possono essere la causa di uno sviluppo lento, di ingiallimento, di fogliame malato. Anche in questo caso con la nebulizzazione della poltiglia adatta e con alcune pennellate di olio bianco minerale si ottiene gli alberi ritornano sani.

<br/>
<div class="text-center">
  <h2>Preventivo Gratuito</h2>
  <a title="numero di telefono di Potasiepe Giardiniere +393889005888" href="tel:+393889005888" class="button">&#9742; 388 9005888</a>
</div>
<br/><br/>

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
