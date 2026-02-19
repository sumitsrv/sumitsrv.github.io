# Visitor Counter Setup Guide

This guide explains how to set up and configure the unique visitors counter with country tracking for your GitHub Pages site.

## Overview

The visitor counter feature has been integrated into your site's footer and supports multiple third-party services:

1. **Flag Counter** (Recommended) - Simple, visual, shows country flags
2. **ClustrMaps** - Interactive world map with visitor locations
3. **GoatCounter** - Privacy-friendly, open-source analytics
4. **Custom** - Use any other service with custom HTML

## Quick Start (Flag Counter)

### Step 1: Get Your Flag Counter ID

1. Visit [https://flagcounter.com/](https://flagcounter.com/)
2. Click "Get your Flag Counter" button
3. Customize the appearance:
   - Choose background color
   - Set text color
   - Select border style
   - Set number of columns
   - Choose how many flags to display
   - Customize the label text
4. Copy the generated code
5. Extract the ID from the URL in the code:
   - Look for: `https://s01.flagcounter.com/count2/aBcD/...`
   - Your ID is: `aBcD` (the part after `count2/` and before the next `/`)

### Step 2: Update Configuration

Edit `_config.yml` and update the visitor counter settings:

```yaml
visitor_counter:
  enabled: true
  service: 'flagcounter'
  flagcounter_id: 'aBcD'  # Replace with your actual ID
  columns: 3              # Number of columns (2-8)
  maxflags: 12            # Max flags to show (1-255)
  label: 'Visitors'       # Label text
```

### Step 3: Deploy

Commit and push your changes to GitHub. The counter will appear in your site's footer once the site is rebuilt.

## Alternative Services

### Option 2: ClustrMaps

ClustrMaps provides an interactive world map showing visitor locations.

1. Visit [https://clustrmaps.com/](https://clustrmaps.com/)
2. Sign up for a free account
3. Add your website URL
4. Get your widget ID from the dashboard
5. Update `_config.yml`:

```yaml
visitor_counter:
  enabled: true
  service: 'clustrmaps'
  clustrmaps_id: 'your-clustrmaps-id'
```

### Option 3: GoatCounter

GoatCounter is privacy-friendly and doesn't use cookies or track personal data.

1. Visit [https://www.goatcounter.com/](https://www.goatcounter.com/)
2. Sign up for a free account
3. Choose your site code (e.g., `mysite`)
4. Update `_config.yml`:

```yaml
visitor_counter:
  enabled: true
  service: 'goatcounter'
  goatcounter_id: 'mysite'  # Your chosen site code
```

### Option 4: Custom Service

If you prefer a different service, you can use custom HTML:

```yaml
visitor_counter:
  enabled: true
  service: 'custom'
  custom_html: '<your custom counter code here>'
```

## Customization

### Adjusting Appearance

The visitor counter styling can be customized in `/assets/css/custom.css`:

```css
.visitor-counter-container {
    margin: 1.5rem 0;
    text-align: center;
}

.visitor-counter-container img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### Flag Counter Customization

You can customize Flag Counter directly in `_config.yml`:

- `columns`: Number of columns to display flags (2-8)
- `maxflags`: Maximum number of country flags to show (1-255)
- `label`: Custom label text (e.g., 'Visitors', 'Views', 'Countries')

## Disabling the Counter

To temporarily disable the counter without removing the configuration:

```yaml
visitor_counter:
  enabled: false
```

## Testing Locally

When testing with Jekyll locally (`bundle exec jekyll serve`), the counter will still display, but it will track localhost visits. The actual visitor count will only be accurate when deployed to your live GitHub Pages site.

## Privacy Considerations

- **Flag Counter**: Collects basic visitor statistics and country information
- **ClustrMaps**: Shows approximate visitor locations on a map
- **GoatCounter**: Privacy-focused, no personal data collected
- All services are GDPR-compliant when configured properly

## Troubleshooting

### Counter Not Showing

1. Verify `enabled: true` in `_config.yml`
2. Check that your service ID is correct
3. Clear your browser cache
4. Wait a few minutes for GitHub Pages to rebuild your site

### Counter Shows Zero Visitors

- Counters start from zero and increment with each unique visitor
- It may take a few hours/days to accumulate visible statistics
- Make sure the ID is correct (test by clicking on the counter to see if it redirects to the service's page)

### Layout Issues

- Check the CSS in `/assets/css/custom.css`
- Adjust `max-width` and `margin` values if needed
- Test on different screen sizes (mobile/tablet/desktop)

## Files Modified

The following files contain the visitor counter implementation:

- `_config.yml` - Configuration settings
- `_includes/visitor-counter.html` - Counter widget template
- `_layouts/modern-default.html` - Footer integration
- `assets/css/custom.css` - Styling

## Support

If you encounter any issues:

1. Check the service's documentation (flagcounter.com, clustrmaps.com, etc.)
2. Verify your configuration in `_config.yml`
3. Check the browser console for errors
4. Ensure your GitHub Pages site is building successfully

## Example Configuration

Here's a complete example configuration for Flag Counter:

```yaml
visitor_counter:
  enabled: true
  service: 'flagcounter'
  flagcounter_id: 'aBcD'
  columns: 3
  maxflags: 12
  label: 'Visitors'
```

After setting this up, your footer will display a visitor counter showing unique visitors from different countries with their flags!
