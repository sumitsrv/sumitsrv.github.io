---
layout: modern-default
title: "Research"
description: "My research work and publications in computer science and related fields"
permalink: /research/
---

<div class="container">
    <div class="section-header">
        <h1>Research</h1>
        <p class="lead">Exploring the frontiers of computer vision and machine learning through academic research.</p>
    </div>

    <section class="publications-section">
        <h2>Publications</h2>
        {% assign publications = site.data.publications | sort: "year" | reverse %}
        {% if publications.size > 0 %}
        {% for pub in publications %}
        <div class="publication-item">
            <h3>{{ pub.title }}</h3>
            <p><strong>{{ pub.authors }}</strong></p>
            <p><em>{{ pub.venue }}</em> ({{ pub.year }})</p>
            {% if pub.doi %}<p><a href="https://doi.org/{{ pub.doi }}">DOI: {{ pub.doi }}</a></p>{% endif %}
            {% if pub.pdf %}<p><a href="{{ pub.pdf }}">PDF</a></p>{% endif %}
            <p>{{ pub.abstract }}</p>
        </div>
        <hr>
        {% endfor %}
        {% else %}
        <p>Publications data is being updated. Please check back soon.</p>
        {% endif %}
    </section>

    <section class="research-interests">
        <h2>Research Interests</h2>
        <ul>
            <li>Computer Vision and Image Processing</li>
            <li>Machine Learning and Deep Learning</li>
            <li>Pattern Recognition</li>
            <li>Computer Graphics</li>
        </ul>
        
        <p>For a complete list of my publications, please visit my <a href="https://scholar.google.com/citations?user=cQhsN6IAAAAJ&hl=en">Google Scholar profile</a>.</p>
    </section>
</div>
