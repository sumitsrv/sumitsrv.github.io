---
layout: modern-default
title: "Research"
description: "My research work and publications in computer science and related fields"
permalink: /research/
---

<div class="container">
    <div class="section-header">
        <h1>Research</h1>
        <p class="lead">Exploring personalization, dialogue, and explainability in AI systems through academic research.</p>
    </div>

    <section class="publications-section">
        <h2>Publications</h2>
        {% for pub in site.data.publications %}
        <div class="publication-item">
            <h3>{{ pub.title }}</h3>
            <p><strong>{{ pub.authors }}</strong></p>
            <p><em>{{ pub.venue }}</em> ({{ pub.year }}){% if pub.status %}, <span class="pub-status">{{ pub.status }}</span>{% endif %}</p>
            {% if pub.doi %}<p><a href="https://doi.org/{{ pub.doi }}">DOI: {{ pub.doi }}</a></p>{% endif %}
            {% if pub.pdf %}<p><a href="{{ pub.pdf }}">PDF</a></p>{% endif %}
            <p>{{ pub.abstract }}</p>
        </div>
        <hr>
        {% endfor %}
    </section>

    <section class="research-interests">
        <h2>Research Interests</h2>
        <ul>
            <li>Natural Language Processing: Conversational AI, lexical alignment, and dialogue systems</li>
            <li>Explainable AI: Personalized explanations and user trust in AI systems</li>
            <li>Human-Computer Interaction: Cognitive load, persuasion, and user experience in AI interfaces</li>
            <li>Psycholinguistics: Language adaptation and alignment in human-AI dialogue</li>
            <li>Large Language Models: Controllable generation and dialogue management</li>
        </ul>
        
        <p>For a complete list of my publications, please visit my <a href="https://scholar.google.com/citations?user=cQhsN6IAAAAJ&hl=en">Google Scholar profile</a>.</p>
    </section>
</div>
