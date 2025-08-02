---
layout: modern-default
title: Research
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

## Publications

{% for pub in publications %}
### {{ pub.title }}
**{{ pub.authors }}**  
*{{ pub.venue }}* ({{ pub.year }})  
{% if pub.doi %}[DOI: {{ pub.doi }}](https://doi.org/{{ pub.doi }}){% endif %}  
{% if pub.pdf %}[PDF]({{ pub.pdf }}){% endif %}

{{ pub.abstract }}

---
{% endfor %}

## Research Interests

- Computer Vision and Image Processing
- Machine Learning and Deep Learning
- Pattern Recognition
- Computer Graphics

For a complete list of my publications, please visit my [Google Scholar profile](https://scholar.google.com/citations?user=cQhsN6IAAAAJ&hl=en).
