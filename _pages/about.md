---
layout: modern-default
title: About Me
permalink: /about/
---

<div class="about-page-container">
  <aside class="about-sidebar">
    <img src="{{ site.baseurl }}/assets/images/sumit-srivastava-profile.jpg" alt="Sumit Srivastava" class="profile-image" />
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
      <h3 class="tagline">Researcher · Engineer · Curious Human</h3>

      <p>The LinkedIn version of me is not a lie, but it is a highlight reel. It does not show what I love, what I cannot stand, what keeps me up at night, or what made me the person I am today. Not one thing. Not one person. A long, messy, beautiful chain of moments. Here are some of them.</p>

      <h3>The Cats That Changed Me</h3>
      <p>I used to hate animals. I am not proud of it, but it is the truth. Then in 2015, I got married, and my wife started bringing home stray kittens and cats, whether I liked it or not. One of them, a kitten named Dharmu, bonded with me when I rescued her. More cats followed. Five were born to Dharmu in our living room.</p>
      <p>Slowly, something shifted. I started noticing their innocence, their instincts, the quiet intelligence in how they navigated the world. I began seeing them as living beings, not lesser, just different. And then the word <em>animal</em>, used casually to describe a bad human, started to sting. Why are we so ignorant? So arrogant? Every life is precious. After all, <a href="{{ site.baseurl }}/everything-is-relative/">everything is relative</a>. So <a href="{{ site.baseurl }}/question-everything/">question everything</a>, and be compassionate, and passionate.</p>

      <h3>The School That Opened My Eyes</h3>
      <p>In 2018, I visited children from lower socio-economic homes at a school and spent time learning about their dreams and passions. It broke something open in me. I realised how privileged I was, not in some abstract way, but in the very specific sense that my father could take a loan to fund my education. Yes, even being <em>able</em> to take and pay back a loan is a privilege.</p>
      <p>I was never a great student, yet I had enough chances to course-correct my life. And I did. But these children, bright, hungry to learn, did not even have enough to live their dream of going to high school. That was the turning point. I left my industry job and moved to research, determined to do something useful in AI for education.</p>

      <h3>What Research Taught Me</h3>
      <p>Did I change the world? Honestly, no, not in any grand way. But my PhD changed <em>me</em>. I fell in love with language research, the sheer depth of it. How language shaped civilisations, cultures, food, relationships, world views. How it sits at the core of evolution. How it connects to game theory, to power, to identity.</p>
      <p>Research also taught me the value of perspective. Everyone carries a different world view, and so everything is relative. We do not need to go to war over our differences, we just need to sit around a table, eat food, and talk. With respect. With an open mind. Peace is possible. But world leaders do not seem to care. We are hurtling towards climate disasters. Religion, which at its core is meant to give people hope, is wielded as a weapon instead. And so it goes.</p>
      <p>There is so much more to talk about. It will come sooner than later.</p>

      <h3>And Yes, Food</h3>
      <p>I love food. Everyone should. It is such a beautiful thing, to make it, smell it, share it. Some of my happiest moments are in the kitchen, experimenting with recipes that are kind to the body and generous to the soul. You will find some of that here too.</p>

      <hr style="margin: 2em 0;" />

      <h3>The Professional Me</h3>
      <p>I am a computer scientist and AI researcher. My doctoral research, at the University of Twente, focuses on personalisation in human–AI dialogue, using NLP and HCI methods grounded in psycholinguistics and cognitive science. The PhD defence is pending. Alongside the research, I bring more than eight years of industry experience leading engineering teams and delivering large-scale production systems.</p>

      <h4>Academic Research</h4>
      <p>My doctoral research at the University of Twente focuses on conversational AI, specifically, how personalised explanations in chatbots, through lexical alignment, affect user trust, cognitive load, and comprehension. The PhD is funded by a Marie Skłodowska-Curie fellowship under the EU-funded NL4XAI project. I have published in venues including ACM IUI, ACM UMAP, and the Computer Speech & Language journal, with further work under review at SigDial 2026 and being revised for resubmission to Cognitive Science. I have supervised eight MSc and BSc students.</p>

      <h4>Industry Experience</h4>
      <p>Currently, I am Senior Backend Engineer at Tibo Energy, where I design and maintain features for an industrial energy management platform. Previously, I served as Chief Technology Officer (part-time) at BrainBite.ai, defining the technical vision and architecture for AI-powered content generation. Earlier, at MiQ Digital, I led a team of seven engineers and revamped a real-time ad bidding platform handling 1.5M requests per second with sub-2ms p99 latency, using event-driven architecture and database optimisations.</p>

      <div class="cta-buttons" style="margin:1.5em 0;">
        <a href="{{ site.social.linkedin }}" class="btn btn-secondary" target="_blank">LinkedIn</a>
        <a href="{{ site.baseurl }}/research" class="btn btn-secondary">Research</a>
        <a href="{{ site.baseurl }}/CV_Sumit_Srivastava_NLP_Research-12.pdf" class="btn btn-primary" target="_blank">Curriculum Vitae</a>
      </div>


      <h3>Recent Publications & Activities</h3>
      <div class="recent-activity">
        <div class="section">
          <h4>Latest Research Publication</h4>
          {% for pub in site.data.publications limit:1 %}
          <p><strong>{{ pub.title }}</strong><br/>
          <em>{{ pub.venue }}</em> ({{ pub.year }}){% if pub.status %}, <em>{{ pub.status }}</em>{% endif %}</p>
          {% endfor %}
        </div>

        <div class="section">
          <h4>Recent Blog Post</h4>
          {% for post in site.posts limit:1 %}
          <p><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><br/>
          <small>{{ post.date | date: "%B %d, %Y" }}</small></p>
          {% endfor %}
        </div>
      </div>

    </div>
  </main>
</div>
