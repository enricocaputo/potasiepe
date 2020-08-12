---
layout: default
title: Mappa del sito
excerpt: "Usa la mappa per orientarti all'interno del sito Giardiniere Potasiepe. Trova gli argomenti che cercavi, ottieni supporto per i nostri servizi di giardinaggio."
permalink: /sitemap/
---
# Mappa del sito Potasiepe

<br/>

{% capture site_url %}{% if site.url %}{{ site.url | append: site.baseurl }}{% else %}{{ site.github.url }}{% endif %}{% endcapture %}

<ul>
  <li><h3>POTASIEPE</h3></li>
  <li>
    <h4>
      	<a class="page-link" href="/chi-sono/" title="Chi sono"> Chi sono </a>
    </h4>
  </li>
  <li>
    <h4>
        <a class="page-link" href="/gallery/" title="Foto Gallery"> Gallery </a>
    </h4>
  </li>
  <li>
    <h4>
        <a class="page-link" href="/prezzi/" title="Prezzi"> Prezzi </a>
    </h4>
  </li>
  <li>
    <h4>
        <a class="page-link" href="/contatti/" title="Contatti"> Contatti </a>
    </h4>
  </li>
  <li>
    <h4>
        <a class="page-link" href="/lavora-con-noi/" title="Opportunità di lavoro"> Lavora con noi </a>
    </h4>
  </li>
  <li>
    <h4>
        <a class="page-link" href="/cookie/" title="Privacy e cookie"> Privacy e cookie </a>
    </h4>
  </li>
  <li>
    <h4>
        <a class="page-link" href="/consigli-di-giardinaggio/" title="Blog"> Consigli di giardinaggio </a>
    </h4>
  </li>
  <li>
    <h4>
        <a class="page-link" href="/calendario-di-giardinaggio/" title="Calendario orto e giardino"> Calendario orto e giardino </a>
    </h4>
  </li>
</ul>

<br/>

<ul>
  <li><h3>I SERVIZI</h3></li>
	{% for servizi_giardinaggio in site.servizi_giardinaggio %}
		<li>
      <h4>
			<a class="page-link" href="{{ site.baseurl }}{{ servizi_giardinaggio.url }}" title="{{ servizi_giardinaggio.name }}">{{ servizi_giardinaggio.name }}</a>
      </h4>
    </li>
	{% endfor %}
</ul>

<br/>

<ul>
  <li><h3>SCOPRI E ACQUISTA</h3></li>
    <li>
      <h4>
      <a class="page-link" href="/vivaio/" title="Vivaio"> Vivaio </a>
      </h4>
    </li>
    <li>
      <h4>
      <a class="page-link" href="/prato-a-rotoli/" title=" Prato a rotoli"> Prato a rotoli </a>
      </h4>
    </li>
    <li>
      <h4>
      <a class="page-link" href="/progettazione-giardini/" title="Progettazione giardini"> Progettazione giardini </a>
      </h4>
    </li>
    <li>
      <h4>
      <a class="page-link" href="/impianti-di-irrigazione/" title="Impianti di irrigazione"> Impianti di irrigazione </a>
      </h4>
    </li>
</ul>

<br/>
