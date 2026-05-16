#!/bin/bash

# ============================================================
# new-post.sh — Quick blog post creator for I Think Blah
# ============================================================
#
# Usage:
#   ./new-post.sh "My Post Title"
#   ./new-post.sh "My Post Title" philosophy
#   ./new-post.sh "My Post Title" food --draft
#
# Categories: philosophy, food, software, research, life
# ============================================================

set -e

TITLE="${1:?Usage: ./new-post.sh \"Post Title\" [category] [--draft]}"
CATEGORY="${2:-thoughts}"
DRAFT_FLAG="${3:-}"

# Move to repo root (works from any subdirectory)
REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$REPO_DIR"

# Generate slug from title
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//')

DATE=$(date +%Y-%m-%d)
FILENAME="${DATE}-${SLUG}.markdown"

if [ "$DRAFT_FLAG" = "--draft" ]; then
    DIR="_drafts"
    mkdir -p "$DIR"
else
    DIR="_posts"
fi

FILEPATH="${DIR}/${FILENAME}"

if [ -f "$FILEPATH" ]; then
    echo "⚠️  File already exists: $FILEPATH"
    exit 1
fi

cat > "$FILEPATH" << EOF
---
layout: modern-post
title: "${TITLE}"
author: sumit
categories: [ ${CATEGORY} ]
tags: []
image:
description: ""
---

Write your post here...
EOF

echo "✅ Created: $FILEPATH"
echo ""
echo "  📂 Category:  ${CATEGORY}"
echo "  📝 File:      ${FILEPATH}"
echo ""
echo "Quick tips:"
echo "  • Add tags:        tags: [featured, research]"
echo "  • Add an image:    image: assets/images/my-image.jpg"
echo "  • Add description for SEO"
echo "  • Categories:      philosophy | food | software | research | life"
echo ""
if [ "$DRAFT_FLAG" = "--draft" ]; then
    echo "  📌 This is a draft. Preview with:"
    echo "     bundle exec jekyll serve --drafts --no-watch"
    echo ""
    echo "  When ready to publish, move it:"
    echo "     mv ${FILEPATH} _posts/${FILENAME}"
else
    echo "  🚀 Post is live. Rebuild to see it:"
    echo "     bundle exec jekyll serve --no-watch"
fi
