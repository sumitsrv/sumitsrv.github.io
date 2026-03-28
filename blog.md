---
layout: modern-default
permalink: /blog/
title: "Blog"
description: "All my thoughts on research, software, philosophy, food, and life"
---

<div class="container blog-page">
    <section class="blog-header">
        <h1>Blog</h1>
        <p class="blog-lead">Thoughts on research, software development, philosophy, food, and life in general.</p>
    </section>

    <!-- Category Filter Tabs -->
    <nav class="category-filters" aria-label="Filter by category">
        <button class="filter-btn active" data-category="all">All</button>
        {% assign categories = "" | split: "" %}
        {% for post in site.posts %}
          {% for cat in post.categories %}
            {% unless categories contains cat %}
              {% assign categories = categories | push: cat %}
            {% endunless %}
          {% endfor %}
        {% endfor %}
        {% assign categories = categories | sort %}
        {% for cat in categories %}
        <button class="filter-btn" data-category="{{ cat | downcase }}">{{ cat | capitalize }}</button>
        {% endfor %}
    </nav>

    <section class="all-posts-section">
        <div class="posts-grid">
            {% for post in site.posts %}
            <article class="post-card" data-categories="{{ post.categories | join: ' ' | downcase }}">
                {% if post.image %}
                <div class="post-image">
                    <a href="{{ site.baseurl }}{{ post.url }}">
                        <img src="{% if post.image contains '://' %}{{ post.image }}{% else %}{{ site.baseurl }}/{{ post.image }}{% endif %}" alt="{{ post.title }}" loading="lazy">
                    </a>
                </div>
                {% endif %}
                <div class="post-content">
                    <div class="post-meta">
                        <span class="post-date">{{ post.date | date: '%b %d, %Y' }}</span>
                        {% if post.categories.size > 0 %}
                        <span class="post-category">{{ post.categories | first | capitalize }}</span>
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

        <p class="no-posts-message" style="display: none; text-align: center; color: var(--text-muted); padding: 3rem 0;">No posts in this category yet. Check back soon!</p>
    </section>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.post-card');
    const noPostsMsg = document.querySelector('.no-posts-message');

    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            buttons.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');

            var category = btn.getAttribute('data-category');
            var visibleCount = 0;

            cards.forEach(function(card) {
                var cardCats = card.getAttribute('data-categories').split(' ');
                if (category === 'all' || cardCats.indexOf(category) !== -1) {
                    card.style.display = '';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            noPostsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
        });
    });

    // Activate filter from URL hash (e.g., /blog/#philosophy)
    var hash = window.location.hash.replace('#', '');
    if (hash) {
        var target = document.querySelector('.filter-btn[data-category="' + hash + '"]');
        if (target) target.click();
    }
});
</script>
