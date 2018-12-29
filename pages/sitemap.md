---
layout: default
title: Mappa del sito
excerpt: Usa la mappa del sito per orientarti su giardiniere-potasiepe.fvg.it. Acquista i nostri attrezzi da giardino, prenota i nostri servizi di giardinaggio.
permalink: /sitemap.html
sitemap: false
---
# Mappa del sito Potasiepe

<br/>

{% capture site_url %}{% if site.url %}{{ site.url | append: site.baseurl }}{% else %}{{ site.github.url }}{% endif %}{% endcapture %}

<ul>
  <li><h3>POTASIEPE</h3></li>
  <li>
    <h4>
      	<a class="page-link" href="/chi-sono/"> Chi sono </a>
    </h4>
  </li>
  <li>
    <h4>
        <a class="page-link" href="/gallery/"> Gallery </a>
    </h4>
  </li>
  <li>
    <h4>
        <a class="page-link" href="/prezzi/"> Prezzi </a>
    </h4>
  </li>
  <li>
    <h4>
        <a class="page-link" href="/contatti/"> Contatti</a>
    </h4>
  </li>
  <li>
    <h4>
        <a class="page-link" href="/condizioni-generali-di-vendita/"> Vendite e rimborsi </a>
    </h4>
  </li>
  <li>
    <h4>
        <a class="page-link" href="/cookie/"> Norme sulla privacy </a>
    </h4>
  </li>
</ul>

<br/>

<ul>
  <li><h3>I SERVIZI</h3></li>
	{% for servizi_giardinaggio in site.servizi_giardinaggio %}
		<li>
      <h4>
			<a class="page-link" href="{{ site.baseurl }}{{ servizi_giardinaggio.url }}">{{ servizi_giardinaggio.name }}</a>
      </h4>
    </li>
	{% endfor %}
</ul>

<br/>

<ul>
  <li><h3>SCOPRI E ACQUISTA</h3></li>
		<li>
      <h4>
			<a class="page-link" href="/vendita-online-prodotti-per-giardinaggio/"> Attrezzi da giardino </a>
      </h4>
    </li>
</ul>

<br/>

<ul class="post-list" style="text-align:left;">
  <li><h3>CONSIGLI DI GIARDINAGGIO</h3></li>
{% for post in site.posts %}{% unless post.sitemap == false %}
  <li>
    <h4>
      <a class="page-link" href="{{ post.url | prepend: site_url | normalize_url }}">{{ post.title }}</a>
    </h4>
  </li>
{% endunless %}{% endfor %}
</ul>
