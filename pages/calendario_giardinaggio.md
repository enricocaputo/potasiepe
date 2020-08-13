---
title: Calendario Orto e Giardino
excerpt: "Calendario dei lavori in orto e giardino 2020: calendario lunare, consigli per semina, trapianto, potatura. Scaricalo gratuitamente in formato PDF"
permalink: /calendario-di-giardinaggio/
---
Il **calendario e lunario 2020** è un regalo che il *Giardiniere Potasiepe* dedica a tutti gli appassionati di giardinaggio. Un promemoria dei lavori in giardino, orto e frutteto. I segreti del mestiere e le cure da riservare alle piante, agli alberi e al prato.

___

<h2>
<a href="/download/calendari/2020/calendario-e-lunario-2020.pdf"
download="calendario-e-lunario-2020.pdf"
title="Calendario e lunario 2020">Calendario 2020 da stampare</a>
</h2>

<p>
<a href="/download/calendari/2020/calendario-e-lunario-2020.pdf"
download="calendario-e-lunario-2020.pdf"
title="Calendario e lunario 2020"><img src="/img/posts/calendario-e-lunario-2020.jpg" alt="Calendario e lunario 2020" title="calendario e lunario 2020"></a>
</p>

<p>
<strong>Scarica gratuitamente</strong> in formato PDF il calendario del giardiniere 2020 completo di lunario, con i promemoria dei lavori in giardino, orto e frutteto <strong>oppure
<a href="/contatti/" title="acquista il calendario da parete stampato">
RICHIEDI LA VERSIONE STAMPATA al prezzo di EUR 14,00 </a> Spedizione GRATUITA</strong>.
Il calendario da parete stampato a colori su preziosa carta patinata da 200 gr. ti sarà recapitato nel giro di 3-4 gg.
</p>

___


<div class="list-collection">
<ul>
	{% for calendario in site.calendario %}
		<li>
		  <img src="{% include relative-src.html src=calendario.image %}" alt="{{ calendario.title }}">
			<div>
			<h2><span class="name">{{ calendario.title }}</span></h2>
			<a href="{{ site.baseurl }}{{ calendario.url }}"><strong>SCOPRI I CONSIGLI DEL MESE</strong> &gt;</a>
			</div>
		</li>
	{% endfor %}
</ul>
</div>
