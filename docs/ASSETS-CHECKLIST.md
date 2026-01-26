# ReFi Provence Assets Checklist

This document tracks the status of visual assets for the ReFi Provence website.

## Integration Status

### ✅ Integrated Assets

#### Favicons (Complete Set)
- **Status:** Integrated ✓
- **Location:** `quartz/static/`
- **Files:**
  - `favicon.ico` - Main favicon
  - `favicon-16x16.png` - 16x16 icon
  - `favicon-32x32.png` - 32x32 icon
  - `apple-touch-icon.png` - Apple touch icon (180x180)
  - `android-chrome-192x192.png` - Android icon (192x192)
  - `android-chrome-512x512.png` - Android icon (512x512)
  - `site.webmanifest` - Web app manifest

#### Logo
- **Status:** Integrated ✓
- **Location:** `quartz/static/refi-provence-logo.png`
- **Source:** `assets/LOGOS and Banner/PFP 2_ Color.png`
- **Usage:** Footer logo
- **Alt Text:** "ReFi Provence"

#### Hero Banner
- **Status:** Integrated ✓
- **Location:** `quartz/static/hero-banner.png`
- **Source:** `assets/LOGOS and Banner/Social Media Header 3_ ReFi Provence 9jan26.png`
- **Usage:** Homepage hero section
- **Pages:** `content/fr/index.md`, `content/en/index.md`

### 📋 Available Assets (Not Yet Integrated)

Additional logo variations are available in `assets/LOGOS and Banner/`:
- `PFP 2_ white.png` - White version (for dark backgrounds)
- `PFP 2_ DARK.png` - Dark version
- `PFP 2_ LIGHT.png` - Light version
- `logo blanc sur fond photo.png` - White on photo background
- `Logo creme banniere.png` - Cream banner alternative
- `qualité améliorée _ .png` - Enhanced quality version

### ⏳ Still Needed

#### Team Photos
- **Priority:** High
- **Required for:** "Who We Are" section on homepage
- **Team members:**
  - Flora (co-founder) - LinkedIn: https://www.linkedin.com/in/flora-event/
  - Alejandra (co-founder) - LinkedIn: https://www.linkedin.com/in/alejandra-verde-medina/

#### Partner Logos
- **Priority:** Medium
- **Required for:** Partners page (`content/*/partners.md`)
- **Status:** To be collected as partnerships are formalized

#### Event Photos
- **Priority:** Medium
- **Required for:** Events page (`content/*/events.md`)
- **Status:** To be collected as events occur

#### ReFi Ecosystem Illustration
- **Priority:** Low
- **Required for:** "ReFi Movement" section on homepage
- **Status:** Placeholder comment exists in content

## Asset Guidelines

### Image Specifications

#### Logos
- Format: PNG with transparency
- Minimum size: 200px width for footer
- Color variations: Maintain for different background contexts

#### Hero Images
- Recommended size: 1920x1080px or similar widescreen ratio
- Format: PNG or JPG
- Optimization: Compress for web (aim for <500KB)

#### Team Photos
- Recommended size: 400x400px (square)
- Format: JPG or PNG
- Style: Professional headshots with consistent background treatment

#### Partner Logos
- Format: PNG with transparency preferred
- Size: Variable, but maintain aspect ratio
- Quality: High resolution for scaling

## Source Assets

All source assets are available in:
- **Google Drive:** https://drive.google.com/drive/folders/1KA-tpEZbULovccXibwb2T_osQ7-PlRyE
- **Local repository:** `assets/LOGOS and Banner/`

## Adding New Assets

When adding new assets to the website:

1. **Place source files** in appropriate subdirectory of `assets/`
2. **Copy to static folder** for web use: `quartz/static/`
3. **Optimize for web** before copying (compress images, appropriate format)
4. **Update this checklist** with integration status
5. **Reference in content** using path `/static/filename.ext`
6. **Test locally** with `npm run build:multilang`
7. **Update alt text** for accessibility

## Notes

- Favicons were pre-generated from the logo and are ready to use
- Additional logo variations are available for future use cases (dark mode, different contexts)
- The favicon set includes all modern device requirements (iOS, Android, desktop browsers)
- All integrated assets use relative paths starting with `/static/` for proper resolution
