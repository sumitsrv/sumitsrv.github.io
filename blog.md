---
layout: modern-default
permalink: /blog/
title: "Blog"
description: "All my thoughts on research, software, philosophy, food, and life"
---

<div class="container">
    <section class="blog-header">
        <h1>Blog</h1>
        <p>Thoughts on research, software development, philosophy, food, and life in general.</p>
    </section>

    <section class="all-posts-section">
        <div class="posts-grid">
            {% for post in site.posts %}
            <article class="post-card">
                {% if post.image %}
                <div class="post-image">
                    <a href="{{ site.baseurl }}{{ post.url }}">
                        <img src="{% if post.image contains "://" %}{{ post.image }}{% else %}{{ site.baseurl }}/{{ post.image }}{% endif %}" alt="{{ post.title }}">
                    </a>
                </div>
                {% endif %}
                <div class="post-content">
                    <div class="post-meta">
                        <span class="post-date">{{ post.date | date: '%b %d, %Y' }}</span>
                        {% if post.categories.size > 0 %}
                        <span class="post-category">{{ post.categories.first }}</span>
                        {% endif %}
                    </div>
                    <h3 class="post-title">
                        <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
                    </h3>
                    <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
                </div>
            </article>
            {% endfor %}
        </div>
    </section>
</div>
