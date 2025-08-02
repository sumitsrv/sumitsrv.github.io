---
layout: modern-default
title: "Contact"
permalink: "/contact/"
---

<div class="container">
    <div class="contact-form">
        <h1>Get in Touch</h1>
        <p>Please send your message to {{ site.name }}. I will reply as soon as possible!</p>
        
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