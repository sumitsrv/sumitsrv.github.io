---
layout: modern-default
title: About Me
permalink: /about/
---

<div class="container">
<div class="about-header">
  <img src="{{ site.baseurl }}/assets/images/picofme5.png" alt="Sumit Srivastava" class="profile-image">
  <div class="social-links">
    <a href="{{ site.social.linkedin }}" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
    <a href="{{ site.social.github }}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
    <a href="{{ site.social.google_scholar }}" target="_blank" title="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
    <a href="{{ site.social.instagram }}" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
  </div>
</div>

<div class="about-content">
    <h1>Hello, I'm Sumit Srivastava</h1>

    <p>I am a researcher and software developer with a passion for solving complex problems through technology. My work spans across computer vision, machine learning, and software development. Beyond the world of technology, I enjoy exploring philosophical ideas and culinary adventures.</p>

    <h2>What I Do</h2>

    <ul>
        <li><strong>Research</strong>: Focus on computer vision and machine learning applications</li>
        <li><strong>Software Development</strong>: Building scalable and efficient solutions</li>
        <li><strong>Philosophy</strong>: Writing about perspectives on life and society</li>
        <li><strong>Food</strong>: Experimenting with recipes and sharing culinary experiences</li>
    </ul>

    <h2>Recent Activity</h2>

    <div class="recent-activity">
        <div class="section">
            <h3>Latest Research</h3>
            {% assign latest_pubs = site.data.publications | sort: "year" | reverse | limit: 1 %}
            {% if latest_pubs.size > 0 %}
            {% for pub in latest_pubs %}
            <p><strong>{{ pub.title }}</strong><br>
            <em>{{ pub.venue }}</em> ({{ pub.year }})</p>
            {% endfor %}
            {% else %}
            <p>Research publications are being updated.</p>
            {% endif %}
        </div>

        <div class="section">
            <h3>Latest Blog Post</h3>
            {% for post in site.posts limit:1 %}
            <p><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><br>
            <small>{{ post.date | date: "%B %d, %Y" }}</small></p>
            {% endfor %}
        </div>
    </div>

    <div class="resume-section">
        <p><a href="{{ site.baseurl }}/assets/resume.pdf" class="btn btn-primary">Download Resume</a></p>
    </div>
</div>
