---
layout: default
title:  "hrstsh pages"
date:   2024-05-30 00:00:00 +0900
categories: blog
index: true
follow: true
---

備忘録的なもの。

{% assign doclist = site.pages | sort: 'date' | reverse %}
{% for doc in doclist %}
{% if doc.url contains 'blog/' and doc.url != '/blog/'%}
- [{{ doc.title }}]({{ site.baseurl }}{{ doc.url }})
{% endif %}
{% endfor %}