---
layout: default
title: Foto Gallery
excerpt: "Una gallery di fotografie: realizzazione e sistemazione di aree verdi e giardini, impianti di irrigazione e altri interventi svolti da giardiniere Potasiepe"
permalink: /gallery/
last_modified_at: 2019-11-13

images:
  - image_path: /img/gallery/1.jpg
    title: Verniciatura casetta da giardino in legno
  - image_path: /img/gallery/2.jpg
    title: Progettazione giardini
  - image_path: /img/gallery/3.jpg
    title: Impianto di irrigazione, particolare di una elettrovalvola
  - image_path: /img/gallery/4.jpg
    title: Lavori di preparazione alla semina del prato
  - image_path: /img/gallery/5.jpg
    title: Posa del prato a rotoli, erba naturale
  - image_path: /img/gallery/6.jpg
    title: Realizzazione di aiuola con fiori perenni
  - image_path: /img/gallery/7.jpg
    title: Taglio siepe di tuia
  - image_path: /img/gallery/8.jpg
    title: Sfalcio tappeto erboso con trattore tosaerba
  - image_path: /img/gallery/9.jpg
    title: Potatura di una siepe alta 4 metri
  - image_path: /img/gallery/10.jpg
    title: Potatura cipressi
  - image_path: /img/gallery/11.jpg
    title: Potatura photinia
  - image_path: /img/gallery/12.jpg
    title: Potatura cipresso leylandii
  - image_path: /img/gallery/13.jpg
    title: Utensili manuali per giardino
  - image_path: /img/gallery/14.jpg
    title: Riparazione tosaerba, servizio di ritiro a domicilio
  - image_path: /img/gallery/15.jpg
    title: Fresatura di un prato con motozappa
  - image_path: /img/gallery/16.jpg
    title: Potatura siepe lauro
  - image_path: /img/gallery/17.jpg
    title: Potatura di contenimento siepi
  - image_path: /img/gallery/18.jpg
    title: Sfalcio con trattore e trincia
  - image_path: /img/gallery/19.jpg
    title: Realizzazione aiuole con irrigazione
  - image_path: /img/gallery/20.jpg
    title: Come creare un magnifico giardino sul terrazzo di casa
  - image_path: /img/gallery/21.jpg
    title: Fornitura, movimentazione e trasporto terra
  - image_path: /img/gallery/22.jpg
    title: Lotta ai parassiti delle piante, trattamenti fitosanitari
  - image_path: /img/gallery/23.jpg
    title: Carrello da giardinaggio
  - image_path: /img/gallery/24.jpg
    title: Giardiniere Potasiepe spiana e livella il terreno con escavatore
  - image_path: /img/gallery/25.jpg
    title: Disinfestazione zanzare con atomizzatore
  - image_path: /img/gallery/26.jpg
    title: Tosaerba con tecnologia mulching
  - image_path: /img/gallery/27.jpg
    title: Potatura alberi da frutto, ciliegio
  - image_path: /img/gallery/28.jpg
    title: Pulizia muretto in cemento e muro in pietra con idropulitrice
  - image_path: /img/gallery/29.jpg
    title: Biotrituratore e cippato, gestione green delle biomasse residue
  - image_path: /img/gallery/30.jpg
    title: Realizzazione giardini aziende e ristoranti, aumenta la brand reputation e riduce lo stress dei lavoratori


---
# Fotogallery

Foto e immagini di alcuni lavori di realizzazione, rinnovo e sistemazione di aree verdi e giardini, impianti di irrigazione e altri interventi svolti da giardiniere Potasiepe.

<div class="list-collection">
<ul class="photo-gallery">
  {% for image in page.images %}
    <li><img src="{{ image.image_path }}" alt="{{ image.title}}" title="{{ image.title}}"/></li>
  {% endfor %}
</ul>
</div>
