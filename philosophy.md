---
layout: modern-default
title: Philosophy Blog
description: "My thoughts and musings on various philosophical topics"
permalink: /philosophy/
---

# Philosophy Blog

{% assign philosophy_posts = site.posts | where_exp: "post", "post.categories contains 'philosophy'" %}

<div class="posts">
  {% for post in philosophy_posts %}
    <article class="post">
      <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
      
      <div class="meta">
        <span class="date">{{ post.date | date: "%B %d, %Y" }}</span>
        {% if post.categories %}
        <span class="categories">
          {% for category in post.categories %}
            <a href="{{ site.baseurl }}/categories#{{ category | slugify }}">{{ category }}</a>
          {% endfor %}
        </span>
        {% endif %}
      </div>

      <div class="entry">
        {{ post.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div>
