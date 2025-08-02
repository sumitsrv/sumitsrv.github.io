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

# Hello, I'm Sumit Srivastava

I am a researcher and software developer with a passion for solving complex problems through technology. My work spans across computer vision, machine learning, and software development. Beyond the world of technology, I enjoy exploring philosophical ideas and culinary adventures.

## What I Do

- **Research**: Focus on computer vision and machine learning applications
- **Software Development**: Building scalable and efficient solutions
- **Philosophy**: Writing about perspectives on life and society
- **Food**: Experimenting with recipes and sharing culinary experiences

## Recent Activity

<div class="recent-activity">
  <div class="section">
    <h3>Latest Research</h3>
    {% assign latest_pubs = site.data.publications | sort: "year" | reverse | limit: 1 %}
    {% for pub in latest_pubs %}
    <p><strong>{{ pub.title }}</strong><br>
    <em>{{ pub.venue }}</em> ({{ pub.year }})</p>
    {% endfor %}
  </div>

  <div class="section">
    <h3>Latest Blog Post</h3>
    {% for post in site.posts limit:1 %}
    <p><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><br>
    <small>{{ post.date | date: "%B %d, %Y" }}</small></p>
    {% endfor %}
  </div>
</div>

[Download Resume]({{ site.baseurl }}/assets/resume.pdf){: .button}
</div>
