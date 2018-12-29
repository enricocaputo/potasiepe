---
layout: page
title: Giardinaggio in provincia di Gorizia
excerpt: 'Impresa di giardinaggio a Gorizia, progettazione giardini e aiuole, manutenzione programmata delle aree a verde aziendale, sistemazione giardini privati e potatura siepe.'
permalink: /giardinaggio-gorizia/
last_modified_at: 2018-12-29
---
<img src="/img/gorizia.jpg" alt="Giardiniere a Gorizia per tutti i lavori di giardinaggio di cui hai bisogno" title="Giardiniere a Gorizia per tutti i lavori di giardinaggio di cui hai bisogno">

Offro i miei servizi di giardinaggio a Gorizia, Monfalcone, Cormons, Grado, San Pier D’Isonzo, Staranzano, Ronchi dei Legionari, Capriva e in tutti i comuni della Provincia.

## La mia specialità è tagliare le siepi e curare i giardini
Chi sono? Uno che fin da bambino amava i fiori e le piante!

Sono un giardiniere professionista e qualificato al vostro servizio.

Progetto giardini, realizzo aiuole, poso impianti di irrigazione interrati e fuori terra. Cerco di proporre soluzioni originali e creative tenendo d'occhio i prezzi, nel rispetto del budget e delle scelte dei miei clienti.

## Come lavoro:
Sia che stabiliamo un prezzo forfettario sia che decidiamo per un compenso orario e a metro, cerco di lavorare alacremente, con precisione, rapidamente e con la massima pulizia.
Cerco di essere sempre reperibile e, impegni precedenti permettendo, cerco di soddisfare le esigenze di orario dei miei clienti. **Offro supporto e consulenza continui nel tempo**.

## Quali attrezzature utilizzo:
Che si tratti di curare un giardino privato, di manutenere un parco e di livellare e fresare un appezzamento di terra incolto ed abbandonato, mi avvalgo di macchine moderne ed efficienti. Decespugliatore, tagliaerba e trattorino per lo sfalcio hanno un motore a quattro tempi a benzina in regola con le nuove normative sull'inquinamento. Inoltre, dispongo di bio-trituratore per macinare i residui delle potature in maniera ecocompatibile ed eco-sostenibile nel rispetto dell'ambiente.

## Arrivo direttamente a casa vostra:
 Mi sposto in tutta la provincia di Gorizia, entro un raggio di 40 km circa da Cervignano del Friuli.


## Perchè scegliermi?
Ho <a href="/prezzi/" title="Quanto costa il giardiniere? Quanto costa tagliare la siepe? Scopri il prezzo che ti interessa, scarica il listino prezzi">prezzi onesti</a>.
Lavoro con competenza di giardinaggio. Sono un giardiniere professionista e offro una gamma di
servizi di giardinaggio a Gorizia a 360 gradi:

<div class="page-content">
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
</div>
<br/><br/>
<section>
<div class="comuni">
  <h3>Consigli di Giardinaggio</h3>
  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h4>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h4>
      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

</div>
</section>
