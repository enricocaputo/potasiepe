---
layout: page
title: "Servizi di Giardinaggio"
excerpt: "Progettazione giardini, potatura alberi e siepi, lotta alle zanzare, realizzazione impianti di irrigazione, manutenzione aree verdi commerciali e industriali."
image: /img/potatura-siepe-1.jpg
permalink: /servizi-di-giardinaggio/
last_modified_at: 2019-11-18
---
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

<br/>

## Le opinioni dei clienti
<p class="h3">Il Giardiniere Potasiepe</p>
Viale Stazione, 28, Cervignano del Friuli UD

<span class="rtng">5,0</span> <img src="/img/5-stars.png" class="img-inline" alt="5 stelle recensioni clienti" title="5 stelle recensioni Google"/> 16 recensioni Google

<hr/>

<img src="/img/user.jpg" class="img-inline" alt="avatar cliente 1" title="avatar cliente"/> **Irma Simona Guarracino**
- <img src="/img/5-stars.png" class="img-inline" alt="recensione a 5 stelle" title="recensione a 5 stelle"/>
- "Precisissimo, puntuale, veloce, competente! Il lavoro di potatura è stato eseguito benissimo, Enrico ha lasciato il giardino in ordine e ci ha dato tantissimi consigli su come sistemarlo al meglio! Consigliatissimo. Noi sicuramente ci rivolgeremo ancora a lui! Grazie Enrico!"

<img src="/img/user1.jpg" class="img-inline" alt="avatar cliente 2" title="avatar cliente"/> **Xenia Mosetti**
- <img src="/img/5-stars.png" class="img-inline" alt="recensione a 5 stelle" title="recensione a 5 stelle"/>
- "Dopo una serie di brutte esperienze, finalmente ho trovato un serio professionista.Ho visitato il suo sito, dove è ben chiaro anche un listino prezzi!!! ho chiamato e sono state ricontattata subito!E’ organizzato e puntuale, ma soprattutto molto preparato, su potature, trattamenti, prodotti.....davvero molto bravo!!!!!"

<img src="/img/user2.jpg" class="img-inline" alt="avatar cliente 3" title="avatar cliente"/> **Marco Butelli**
- <img src="/img/5-stars.png" class="img-inline" alt="recensione a 5 stelle" title="recensione a 5 stelle"/>
- "Persona seria, affidabile e molto scrupolosa nel lavoro. Prezzi più che onesti per il servizio professionale che offre. Lo consiglio vivamente a tutti, basta chiamare e arriva. Top!"

<br/>

<a href="https://www.google.com/maps/place/Il+Giardiniere+Potasiepe/@45.8232958,13.3407708,17z/data=!3m1!4b1!4m5!3m4!1s0x477ba4bc0a323cfb:0x1bdade2ecb278885!8m2!3d45.8232958!4d13.3429595" aria-label="recensioni Google" target="_blank" rel="noopener"> Visualizza le altre recensioni </a>
