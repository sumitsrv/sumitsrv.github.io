---
layout: modern-default
title: Food Blog
description: "Recipes, food adventures, and culinary experiences"
permalink: /food/
---

# Food Blog

{% assign food_posts = site.posts | where_exp: "post", "post.categories contains 'food'" %}

<div class="posts">
  {% for post in food_posts %}
    <article class="post">
      {% if post.image %}
      <div class="post-image">
        <img src="{{ site.baseurl }}/{{ post.image }}" alt="{{ post.title }}">
      </div>
      {% endif %}

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
