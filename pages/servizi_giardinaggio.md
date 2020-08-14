---
layout: page
title: "Servizi di Giardinaggio"
excerpt: "Per la cura del verde affidati ai servizi di giardinaggio di POTASIEPE: gestione giardini privati e spazi verdi aziendali, irrigazione. Servizi di giardinaggio."
image: /img/servizi/servizi-giardinaggio.jpg
permalink: /servizi-di-giardinaggio/
---
<br/>
<div class="carousel">
<img src="{{ page.image }}" alt="{{ page.name }}" title="{{ page.name }}"/>
</div>

<br/>

<p>Per la cura del verde affidati ai servizi di giardinaggio di <a href="/chi-sono/" aria-label="Chi sono"><strong>Giardiniere Potasiepe</strong></a>: manutenzione giardini privati, gestione di spazi verdi aziendali, pulizia del giardino, raccolta foglie, trattamenti anti zanzare, disinfestazioni blatte e altri insetti, realizzazione aiuole e terrazzi, ripristino impianti di irrigazione, recinzioni, potature, bordure in tufo, e ogni altro servizio di giardinaggio di cui puoi avere bisogno.</p>

<p>Tutti i servizi di giardinaggio sono svolti con la massima <strong>serietà</strong>, <strong>competenza</strong> e <strong>puntualità</strong>, e vengono offerti a <strong><a href="/prezzi/" aria-label="Scopri i prezzi"> prezzi onesti e trasparenti</a></strong>.</p>

<div class="text-center">
<h2>Desideri un preventivo gratuito?</h2>
<br/>
<a title="Richiedi un preventivo gratuito" href="/contatti/" class="button">&#9993; &nbsp; SCRIVI</a>
</div>

<div class="list-collection">
<ul>
  {% assign servizi_giardinaggio = site.servizi_giardinaggio | sort: 'order' %}
  {% for servizi_giardinaggio in servizi_giardinaggio %}
		<li>
      <img src="{% include relative-src.html src=servizi_giardinaggio.image_path %}" alt="{{ servizi_giardinaggio.url }}">
      <div>
      <h2 class="h3">{{ servizi_giardinaggio.name }}</h2>
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
