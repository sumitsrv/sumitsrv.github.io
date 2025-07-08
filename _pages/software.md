layout: single
title: "Software Development"
description: "My software development projects and professional experience"
permalink: /software/
author_profile: true
sidebar:
  nav: "main_nav"
---

<div class="container">
    <div class="section-header">
        <h1>Software Development</h1>
        <p class="lead">A showcase of my software development journey, projects, and professional experience.</p>
    </div>

    <section class="experience-section">
        <h2>Professional Experience</h2>

{% assign experiences = site.data.experiences | sort: "start_date" | reverse %}

{% for exp in experiences %}
### {{ exp.title }} at {{ exp.company }}
*{{ exp.start_date | date: "%B %Y" }} - {{ exp.end_date | date: "%B %Y" }}*

{{ exp.description }}

**Technologies used:**
{% for tech in exp.technologies %}
- {{ tech }}
{% endfor %}

---
{% endfor %}

## Open Source Projects

{% assign projects = site.data.projects | sort: "featured" | reverse %}

{% for project in projects %}
### [{{ project.name }}]({{ project.url }})

{{ project.description }}

**Technologies:** {{ project.technologies | join: ", " }}

{% if project.github %}[View on GitHub]({{ project.github }}){% endif %}

---
{% endfor %}

For more details about my professional experience, please visit my [LinkedIn profile](https://www.linkedin.com/in/sumit-srv).
