---
layout: modern-default
title: "Software Development"
description: "My software development projects and professional experience"
permalink: /software/
---

<div class="container">
    <div class="section-header">
        <h1>Software Development</h1>
        <p class="lead">A showcase of my software development journey, projects, and professional experience.</p>
    </div>

    <section class="experience-section">
        <h2>Professional Experience</h2>
        {% assign experiences = site.data.experiences %}
        {% if experiences.size > 0 %}
        {% for exp in experiences %}
        <div class="experience-item">
            <h3>{{ exp.title }} at {{ exp.company }}</h3>
            <p><em>{{ exp.start_date }} – {{ exp.end_date }}</em></p>
            <p>{{ exp.description }}</p>
            <h4>Technologies used:</h4>
            <ul>
            {% for tech in exp.technologies %}
            <li>{{ tech }}</li>
            {% endfor %}
            </ul>
        </div>
        <hr>
        {% endfor %}
        {% else %}
        <p>Experience data is being updated. Please check back soon.</p>
        {% endif %}
    </section>

    <section class="projects-section">
        <h2>Open Source Projects</h2>
        {% assign projects = site.data.projects %}
        {% if projects.size > 0 %}
        {% for project in projects %}
        <div class="project-item">
            <h3><a href="{{ project.url }}">{{ project.name }}</a></h3>
            <p>{{ project.description }}</p>
            <p><strong>Technologies:</strong> {{ project.technologies | join: ", " }}</p>
            {% if project.github %}<p><a href="{{ project.github }}">View on GitHub</a></p>{% endif %}
        </div>
        <hr>
        {% endfor %}
        {% else %}
        <p>Projects data is being updated. Please check back soon.</p>
        {% endif %}
    </section>

    <section class="skills-section">
        <h2>Technical Skills</h2>
        <ul>
            <li><strong>Programming Languages:</strong> Java, Python, TypeScript, JavaScript, Ruby</li>
            <li><strong>AI & NLP:</strong> PyTorch, Rasa, spaCy, NLTK, Large Language Models, Google DialogFlow</li>
            <li><strong>Backend & Web Servers:</strong> Vert.x, Node.js, Nginx, Apache Tomcat, Ruby on Rails</li>
            <li><strong>Databases:</strong> PostgreSQL, MySQL, Cassandra, MongoDB, AWS Redshift</li>
            <li><strong>Cloud & Infrastructure:</strong> AWS (S3, Redshift), Google Cloud, Docker, Git, Linux</li>
            <li><strong>Research:</strong> Experiment Design, Statistical Analysis, Scientific Writing, User Studies</li>
        </ul>
        
        <p>For more details about my professional experience, please visit my <a href="https://www.linkedin.com/in/sumit-srv">LinkedIn profile</a>.</p>
    </section>
</div>
