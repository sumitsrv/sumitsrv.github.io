# Migration Plan: Current Site → Academic Pages Theme

## Current State Analysis
Your current Jekyll site has:
- Personal blog with posts in `_posts/`
- Custom layouts and includes
- Navigation setup
- Social media integration
- Modern theme elements

## Academic Pages Theme Benefits
- Professional academic layout
- CV/Resume generation
- Publications management
- Teaching portfolio
- Talks/presentations tracking
- Research-focused design

## Migration Options

### Option 1: Complete Fork Migration (Recommended for full academic site)
1. Fork https://github.com/academicpages/academicpages.github.io
2. Rename to your GitHub username
3. Copy your content to new structure
4. Update `_config.yml` with your details

### Option 2: Gradual Feature Integration (Recommended for preserving current content)
Gradually adopt academicpages features while maintaining your current structure:

#### Step 1: Fix Current Issues
- ✅ Updated exclude patterns in `_config.yml`
- ✅ Added template file exclusions
- ✅ Fixed CSS layout issues and missing styles
- ✅ Cleaned up navigation (removed broken links)
- ✅ Consolidated philosophy and food content into blog
- ✅ Fixed homepage layout and image overflow issues
- ✅ Fixed About and Contact page layouts and navigation
- ✅ Made homepage posts section dynamic (shows actual number of posts up to 6)
- ✅ Added proper CSS styling for About and Contact pages
- ✅ Added `include: ["_pages"]` to _config.yml to fix page processing
- ✅ Fixed Research and Software pages markdown rendering issues
- ✅ Converted mixed HTML/Markdown to pure HTML for consistent processing

#### Step 2: Add Academic Pages Collections (Optional)
```yaml
# Add to _config.yml
collections:
  publications:
    output: true
    permalink: /:collection/:name/
  talks:
    output: true
    permalink: /:collection/:name/
  teaching:
    output: true
    permalink: /:collection/:name/
  portfolio:
    output: true
    permalink: /:collection/:name/
```

#### Step 3: Create Academic Directories
```
mkdir _publications
mkdir _talks
mkdir _teaching
mkdir _portfolio
```

#### Step 4: Update Layouts
- Add academic page layouts
- Implement CV generation
- Add publication listing features

#### Step 5: Enhanced Author Profile
Update your author configuration to match academicpages format.

## Recommended Approach

Given your existing content and setup, I recommend **Option 2** - gradual integration:

1. Keep your current working site
2. Add academic features incrementally
3. Test each change
4. Preserve your existing posts and content

## Next Steps

1. **Immediate**: Test current site with fixed exclude patterns
2. **Short-term**: Add academic collections if needed
3. **Long-term**: Gradually adopt academicpages layouts and features

## Files to Create/Modify

### Essential Academic Features
- `_layouts/cv.html` - CV layout
- `_includes/archive-single-cv.html` - CV entries
- `_pages/cv.md` - Your CV page
- Publication templates and data structure

### Optional Enhancements
- Research project tracking
- Teaching portfolio
- Conference presentations
- Academic social links

Would you like me to start with any specific academic features, or should we test the current fix first?
