# I Think Blah

A personal blog by **Sumit** — thoughts on philosophy, education, intelligence, and life in general.

> *"Hi, I am Sumit, and I think sometimes, often blah, I hope you like it!"*

🌐 **Live site:** [ithinkblah.com](https://www.ithinkblah.com)

---

## About

**I Think Blah** is a Jekyll-powered blog featuring essays and reflections. Topics range from philosophy and privilege to education and the charm of old cities.

## Tech Stack

- [Jekyll](https://jekyllrb.com/) — static site generator
- [GitHub Pages](https://pages.github.com/) — hosting (via the `github-pages` gem)
- **Theme:** Based on [Mundana by WowThemes.net](https://github.com/wowthemesnet/mundana-theme-jekyll) (MIT license)
- **Plugins:** jekyll-feed, jekyll-sitemap, jekyll-paginate, jekyll-seo-tag

## Local Development

### Prerequisites

- Ruby (with Bundler)
- Git

### Run locally

```bash
git clone https://github.com/<your-username>/ithinkblah.git
cd ithinkblah
bundle install
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

### Using Docker

```bash
docker-compose up
```

This starts a Jekyll server at `http://localhost:4000` with live-reload via polling.

## Writing a New Post

Create a Markdown file in `_posts/` following the naming convention:

```
YYYY-MM-DD-your-post-title.md
```

Front matter template:

```yaml
---
layout: post
title: "Your Post Title"
author: sumit
categories: [ philosophy ]
image: assets/images/your-image.png
tags: [featured]
---
Your content here...
```

## Project Structure

```
_posts/       # Blog posts (Markdown)
_pages/       # Static pages (About, Contact, etc.)
_layouts/     # HTML layout templates
_includes/    # Reusable HTML partials
assets/       # CSS, JS, and images
_config.yml   # Site configuration
```

## License

Theme originally by [Sal / WowThemes.net](https://www.wowthemes.net), released under the [MIT License](https://opensource.org/licenses/MIT).
