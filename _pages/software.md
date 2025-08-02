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
        {% assign experiences = site.data.experiences | sort: "start_date" | reverse %}
        {% if experiences.size > 0 %}
        {% for exp in experiences %}
        <div class="experience-item">
            <h3>{{ exp.title }} at {{ exp.company }}</h3>
            <p><em>{{ exp.start_date | date: "%B %Y" }} - {{ exp.end_date | date: "%B %Y" }}</em></p>
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
        {% assign projects = site.data.projects | sort: "featured" | reverse %}
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
            <li><strong>Programming Languages:</strong> Python, JavaScript, Java, C++</li>
            <li><strong>Web Technologies:</strong> HTML5, CSS3, React, Node.js, Django</li>
            <li><strong>Machine Learning:</strong> TensorFlow, PyTorch, Scikit-learn</li>
            <li><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB</li>
            <li><strong>Tools & Platforms:</strong> Git, Docker, AWS, Linux</li>
        </ul>
        
        <p>For more details about my professional experience, please visit my <a href="https://www.linkedin.com/in/sumit-srv">LinkedIn profile</a>.</p>
    </section>
</div>
