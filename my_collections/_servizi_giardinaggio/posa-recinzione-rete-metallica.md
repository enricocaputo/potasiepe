---
layout: page
name: Posa recinzioni
subtitle: Recinzioni in rete
title: Recinzioni in rete metallica
excerpt: 'Posa in opera di recinzioni in rete metallica con pali in legno o ferro, rete plastificata atossica per animali, zincata, elettrosaldata. Udine e Gorizia.'
image_path: /img/servizi/recinzione-rete-pali-legno.jpg
order: 7
---
<img src="{{ page.image_path }}" alt="{{ page.name}}" title="{{ page.name }}"/>

Potasiepe si occupa della realizzazione di **staccionate in legno** e recinzioni con **rete elettrosaldata** e a  **maglia sciolta**, rete **plastificata atossica per animali**, rete **zincata** e recinzioni **in pvc**.

**[Prezzi onesti e trasparenti](/prezzi/ "prezzi economici e onesti")**: costo del materiale più manodopera.
Vengono servite le province di **[Udine](/giardinaggio-udine-giardiniere/ "Potasiepe è giardiniere a Udine")** e **[Gorizia](/giardinaggio-gorizia-giardiniere/ "Potasiepe è giardiniere a Gorizia")**.

Affidarti a noi significa scegliere qualità e professionalità. Ci occupiamo della tua richiesta in modo rapido e soddisfacente. Ci occupiamo della tua recinzione chiavi in mano, con cura e passione.

## Recinzione con pali in legno e rete metallica

Per una recinzione con pali in legno e rete metallica, senza opere murarie, **non è necessaria la DIA**
(Dichiarazione Inizio Attività) né la SCIA (Segnalazione certificata inizio attività), il permesso di costruire o
altro titolo edilizio: rientra nel diritto dominicale di delimitare la proprietà privata per la propria sicurezza.

Al contrario, la realizzazione di muri di cinta, cordoli in calcestruzzo o simili necessitano di un
titolo edilizio (CILA/SCIA o permesso di costruire), a seconda della loro entità e dell’impatto, per dimensioni e
tipologia, che generano sull’ambiente circostante in termini di trasformazione urbanistica o edilizia.


## Staccionate e steccati in legno di pino nordico impregnato in autoclave

Si eseguono interventi di riparazione, rinforzo e rifacimento delle **staccionate in legno** a delimitazione della proprietà e di sponde fluviali e collinari. Si tratta di recinzione rustica in legno installata a regola d'arte, nel pieno rispetto dell'ambiente. Per **allungare la vita** della staccionata potete richiedere che la testa e la porzione di palo conficcata nella suolo vengano trattati con **catramina** bituminosa liquida.

## Innalzamento e riparazione della recinzione in rete

Sostituzione totale e parziale di vecchie recinzioni in rete metallica e in PVC. Innalzamento della recinzione con
aggiunta e sostituzione di pali, cavi, tendi cavi ecc.

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
