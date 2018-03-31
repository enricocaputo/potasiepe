---
layout: default
title: 'Fotogallery: Lavori di giardinaggio e trattamenti fitosanitari - POTASIEPE'
excerpt: Una gallery di fotografie che mostra i servizi di giardinaggio svolti da giardiniere PotaSiepe nei giardini della provincia di Udine, di Trieste e in Friuli
permalink: /gallery/
sitemap:
    priority: 0.61
    changefreq: 'weekly'
    lastmod: 2017-11-09

images:
  - image_path: /img/gallery/1.jpg
    title: Verniciatura di casetta da giardino - casette da esterno in legno, resina e pvc
  - image_path: /img/gallery/2.jpg
    title: Progettazione giardini e realizzazione aiuole - vari tipi di fiori e di piante
  - image_path: /img/gallery/3.jpg
    title: Interramento di impianto di irrigazione (particolare dell'elettrovalvola)
  - image_path: /img/gallery/4.jpg
    title: Fresatura e livellatura di un terreno - preparazione alla semina del prato
  - image_path: /img/gallery/5.jpg
    title: lavoro di posa del prato a rotoli di erba naturale
  - image_path: /img/gallery/6.jpg
    title: Realizzazione di aiuole di fiori perenni
  - image_path: /img/gallery/7.jpg
    title: Potatura di siepe di lauro esterna - taglio di siepe di tuia interna al giardino
  - image_path: /img/gallery/8.jpg
    title: Sfalcio tappeto erboso con trattore tosaerba
  - image_path: /img/gallery/9.jpg
    title: Potatura di una siepe alta 4 metri
---
# Giardiniere a Udine, Gorizia, Trieste e in Friuli-Venezia Giulia - Fotogallery

### Particolari di sistemazioni di giardini
<div class="list-collection">
<ul class="photo-gallery">
  {% for image in page.images %}
    <li><img src="{{ image.image_path }}" alt="{{ image.title}}" title="{{ image.title}}"/></li>
  {% endfor %}
</ul>
</div>
