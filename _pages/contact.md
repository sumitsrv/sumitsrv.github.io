---
layout: modern-default
title: "Contact"
permalink: "/contact/"
---

<div class="container">
    <div class="contact-form">
        <h1>Get in Touch</h1>
        <p>Please send your message to {{ site.name }}. I will reply as soon as possible!</p>

        <div style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--border); border-radius: 8px; background: var(--card-bg, #f9f9f9);">
            <h3 style="margin-top: 0;">Reach me directly</h3>
            <p style="margin-bottom: 0.5rem;"><i class="fas fa-envelope" style="width: 1.5em;"></i> <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
            <p style="margin-bottom: 0.5rem;"><i class="fab fa-linkedin" style="width: 1.5em;"></i> <a href="{{ site.social.linkedin }}" target="_blank">LinkedIn</a></p>
            <p style="margin-bottom: 0.5rem;"><i class="fab fa-github" style="width: 1.5em;"></i> <a href="{{ site.social.github }}" target="_blank">GitHub</a></p>
            <p style="margin-bottom: 0;"><i class="fab fa-twitter" style="width: 1.5em;"></i> <a href="{{ site.social.twitter }}" target="_blank">Twitter / X</a></p>
        </div>

        <h3>Or send a message</h3>
        <form action="https://formspree.io/{{ site.email }}" method="POST">    
            <div class="form-row">
                <div class="form-group">
                    <input class="form-control" type="text" name="name" placeholder="Name*" required>
                </div>
                <div class="form-group">
                    <input class="form-control" type="email" name="_replyto" placeholder="E-mail Address*" required>
                </div>
            </div>
            <div class="form-group">
                <textarea rows="8" class="form-control" name="message" placeholder="Message*" required></textarea>
            </div>
            <div class="form-group">
                <input class="btn btn-primary" type="submit" value="Send Message">
            </div>
        </form>
    </div>
</div>