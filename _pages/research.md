---
layout: modern-default
title: "Research"
description: "My research work and publications in computer science and related fields"
permalink: /research/
---

<div class="container">
    <div class="section-header">
        <h1>Research</h1>
        <p>My research sits at the intersection of natural language processing, human-computer interaction, and psycholinguistics. The central question is how conversational AI systems should adapt their language to the people they talk to, and what happens, in terms of trust, comprehension, persuasion, and cognitive load, when they do or do not. My doctoral work at the University of Twente has focused on one specific mechanism, lexical alignment, i.e., the tendency of dialogue partners to reuse each other's words. I have looked at lexical alignment as a measurement problem, i.e., how it should be quantified in dialogue data, as an implementation problem, i.e., how it can be controlled in LLM-based dialogue generation, and as a user-experience problem, i.e., how it affects the people on the other side of the conversation.</p>
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

</div>
