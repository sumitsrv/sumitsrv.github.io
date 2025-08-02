---
layout: modern-default
title: About Me
permalink: /about/
---

<div class="about-page-container">
  <aside class="about-sidebar">
    <img src="{{ site.baseurl }}/assets/images/picofme5.png" alt="Sumit Srivastava" class="profile-image">
    <div class="social-links">
      <a href="{{ site.social.linkedin }}" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="{{ site.social.github }}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
      <a href="{{ site.social.google_scholar }}" target="_blank" title="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
      <a href="{{ site.social.instagram }}" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="{{ site.social.twitter }}" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a>
    </div>
  </aside>

  <main class="about-main-content">
    <div class="about-content">
      <h2>Sumit Srivastava</h2>
      <h3 class="tagline">Computer Scientist, AI Researcher & Engineering Leader</h3>

      <p>I am a computer scientist and AI researcher with over four years of academic research experience in Artificial Intelligence, specializing in Natural Language Processing, Explainable AI, and Human-Computer Interaction. My research background is complemented by more than seven years of industry experience in software engineering and technical leadership roles.</p>

      <h3>Academic Research</h3>
      <p>My doctoral research at the University of Twente focuses on conversational AI, particularly investigating the personalization of explanations in chatbots through lexical alignment techniques. This work examines how personalized dialogue affects user trust, cognitive load, and comprehension in human-AI interactions. I have published research findings in prestigious venues including ACM IUI, ACM UMAP, CUI, and the Computer Speech & Language journal, with additional work under review at Cognitive Science.</p>

      <p>Throughout my academic career, I have supervised multiple MSc and BSc students, contributing to their research projects and resulting publications. This mentorship experience has strengthened my ability to guide complex technical projects and communicate sophisticated concepts effectively.</p>

      <h3>Industry Experience</h3>
      <p>Currently, I serve as Senior Backend Engineer at Tibo Energy, where I develop intelligent, data-driven solutions for the energy sector. In my concurrent role as Chief Technology Officer (part-time) at BrainBite.ai, I define the technical vision and architecture for AI-powered content generation systems.</p>

      <p>Previously, at MiQ Digital, I led the development of large-scale, low-latency systems capable of handling over one million requests per second with sub-millisecond response times. This role involved redesigning critical infrastructure components and managing cross-functional engineering teams.</p>

      <h3>Technical Expertise</h3>
      <p>My technical specializations include Large Language Models (LLMs), Natural Language Generation (NLG), scalable backend architectures, and distributed systems design. I possess extensive experience in cross-functional leadership, having managed technical teams and coordinated complex software development projects across multiple organizations.</p>

      <div class="cta-buttons" style="margin:1.5em 0;">
        <a href="{{ site.social.linkedin }}" class="btn btn-secondary" target="_blank">LinkedIn</a>
        <a href="{{ site.baseurl }}/research" class="btn btn-secondary">Research</a>
        <a href="{{ site.baseurl }}/assets/resume.pdf" class="btn btn-primary">Curriculum Vitae</a>
      </div>

      <h3>Research Interests</h3>
      <ul>
        <li><strong>Natural Language Processing</strong>: Conversational AI, lexical alignment, and dialogue systems</li>
        <li><strong>Explainable AI</strong>: Personalized explanations and user trust in AI systems</li>
        <li><strong>Human-Computer Interaction</strong>: Cognitive load and user experience in AI interfaces</li>
        <li><strong>Software Engineering</strong>: Scalable architectures and distributed systems</li>
      </ul>

      <h3>Recent Publications & Activities</h3>
      <div class="recent-activity">
        <div class="section">
          <h4>Latest Research Publication</h4>
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
          <h4>Recent Blog Post</h4>
          {% for post in site.posts limit:1 %}
          <p><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><br>
          <small>{{ post.date | date: "%B %d, %Y" }}</small></p>
          {% endfor %}
        </div>
      </div>

    </div>
  </main>
</div>
