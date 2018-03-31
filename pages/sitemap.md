---
layout: default
title: Mappa del sito Giardiniere PotaSiepe
excerpt: Con la Sitemap puoi scoprire i link tra le pagine e orientarti mentre stai navigando sul sito web Giardiniere PotaSiepe.
permalink: /sitemap.html
sitemap: false
---
{% capture site_url %}{% if site.url %}{{ site.url | append: site.baseurl }}{% else %}{{ site.github.url }}{% endif %}{% endcapture %}
<br/><br/>
<h2>POSTS</h2>

<ul class="post-list" style="text-align:left;">
{% for post in site.posts %}{% unless post.sitemap == false %}
<li>
  <h4>
    <a class="page-link" href="{{ post.url | prepend: site_url | normalize_url }}">{{ post.title }}</a>
  </h4>
</li>
{% endunless %}{% endfor %}
</ul>
<br/><br/>

<h2>PAGINE</h2>

<ul class="post-list" style="text-align:left;">
{% for page in site.html_pages %}
  {% unless page.sitemap == false%}
<li>
  <h4>
    <a class="page-link" href="{{ page.url | replace:'/index.html','/' | prepend: site_url | normalize_url }}">{{ page.url | prepend:'home' }}</a>
  </h4>
</li>
  {% endunless %}
{% endfor %}
</ul>
