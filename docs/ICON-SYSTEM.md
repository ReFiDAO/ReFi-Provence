# Icon System Documentation

## Overview

This document outlines the plan to replace emoji placeholders with a custom icon library for the ReFi Provence website, as specified in Section 7.5 of the questionnaire.

**IMPORTANT NOTE:** Emojis are currently used as intentional placeholders throughout the website. They will remain in place until a custom icon library is designed and developed that matches ReFi Provence's visual identity. This is a deliberate design decision to wait for proper custom icons rather than using generic icon libraries.

## Current State

### Emoji Usage

The website currently uses emojis in the "What We Do" section on the homepage:

**French Version** (`content/fr/index.md`):
- 💶 Rondes de financement
- 🛠️ Implémentation technologique
- 🤝 Organisation d'événements
- 🌀 Ateliers et facilitation
- 📚 Recherche et développement
- 🌍 Mouvement ReFi

**English Version** (`content/en/index.md`):
- 💶 Funding Rounds
- 🛠️ Tech Implementation
- 🤝 Event Organizing
- 🌀 Workshops & Facilitation
- 📚 Research & Development
- 🌍 ReFi Movement

### Why Replace Emojis?

As noted in the questionnaire (Section 7.5), emojis should be replaced with icons for:
1. **Consistent visual identity** - Custom icons match brand guidelines
2. **Better control** - Emojis render differently across platforms/browsers
3. **Professional appearance** - Custom icons provide a more cohesive design
4. **Accessibility** - SVG icons can be better optimized for screen readers

## Migration Plan

### Phase 1: Icon Library Creation (Future)

Create a custom icon set that matches ReFi Provence's visual identity:

**Icon Requirements:**
- Format: SVG (scalable, accessible, lightweight)
- Size: 48x48px base artboard
- Style: Should complement the brand's visual language
- Color: Support for brand colors (#1fb5cb, #024b5a, #f8f6e2)

**Icons Needed:**
1. **Finance/Funding** - Replacing 💶
2. **Technology/Tools** - Replacing 🛠️
3. **Community/Collaboration** - Replacing 🤝
4. **Process/Facilitation** - Replacing 🌀
5. **Knowledge/Research** - Replacing 📚
6. **Global/Network** - Replacing 🌍

### Phase 2: Technical Implementation

Once icon library is created, implement as follows:

#### Option A: Inline SVG (Recommended)
```html
<div class="feature-item">
  <dt>
    <svg class="feature-icon" width="24" height="24" viewBox="0 0 48 48">
      <!-- SVG path data -->
    </svg>
    Funding Rounds
  </dt>
  <dd>Channeling resources to regenerative projects and networks</dd>
</div>
```

**Advantages:**
- No additional HTTP requests
- Easy to style with CSS
- Best for small number of icons

#### Option B: Icon Component System
Create a React component for icons:

```typescript
// quartz/components/Icon.tsx
interface IconProps {
  name: string
  size?: number
  className?: string
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, className = "" }) => {
  const icons = {
    funding: "<!-- SVG path -->",
    tech: "<!-- SVG path -->",
    community: "<!-- SVG path -->",
    // ... etc
  }
  
  return (
    <svg 
      className={`icon ${className}`} 
      width={size} 
      height={size} 
      viewBox="0 0 48 48"
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    />
  )
}
```

**Advantages:**
- Reusable across site
- Centralized icon management
- Easy to update/replace icons

#### Option C: Icon Font
Create custom icon font using tools like IcoMoon or Fontello.

**Advantages:**
- Familiar implementation (like Font Awesome)
- Easy to style like text

**Disadvantages:**
- Less flexible than SVG
- Additional font file to load

### Phase 3: Styling

Add CSS for consistent icon display:

```scss
// quartz/styles/custom.scss

.feature-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  vertical-align: middle;
  
  // Apply brand colors
  fill: var(--blue-medium); // #1fb5cb
  
  // Hover effects
  .feature-item:hover & {
    fill: var(--blue-light); // #4dd4e8
  }
}
```

### Phase 4: Content Migration

Update content files to use new icon system:

**Before:**
```html
<dt>💶 Rondes de financement</dt>
```

**After (inline SVG):**
```html
<dt>
  <svg class="feature-icon"><!-- SVG path --></svg>
  Rondes de financement
</dt>
```

**After (component system):**
```html
<dt>
  <Icon name="funding" />
  Rondes de financement
</dt>
```

## Files to Update

When implementing the icon system:

### Content Files
- `content/fr/index.md` - Replace emojis in "What We Do" section
- `content/en/index.md` - Replace emojis in "What We Do" section

### Style Files
- `quartz/styles/custom.scss` - Add icon styling

### Component Files (if using Option B)
- `quartz/components/Icon.tsx` (new) - Icon component
- `quartz/components/index.ts` - Export Icon component

## Temporary State

**Current Status:** Emojis remain as placeholders until the custom icon library is created.

**Action Required:** Create or commission icon designs that match the ReFi Provence visual identity.

## Resources

### Icon Design Tools
- **Figma** - Vector design (recommended for collaboration)
- **Adobe Illustrator** - Professional vector editing
- **Inkscape** - Free, open-source alternative

### Icon Libraries (for inspiration)
- [Heroicons](https://heroicons.com/) - Clean, modern SVG icons
- [Lucide](https://lucide.dev/) - Extensible icon library
- [Phosphor Icons](https://phosphoricons.com/) - Flexible icon family

### SVG Optimization
- [SVGO](https://github.com/svg/svgo) - SVG optimizer
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Web-based SVG optimizer

## Next Steps

1. **Design Phase:** Create custom icon designs that match brand identity
2. **Review Phase:** Validate icons with ReFi Provence team
3. **Export Phase:** Export as optimized SVG files
4. **Implementation Phase:** Follow technical implementation plan above
5. **Testing Phase:** Verify icons display correctly across browsers/devices
6. **Deployment Phase:** Update content files and push to production

## Related Documentation

- [QUESTIONNAIRE.md](./QUESTIONNAIRE.md) - Original requirements (Section 7.5)
- [ASSETS-CHECKLIST.md](./ASSETS-CHECKLIST.md) - Asset management guide
- [Custom Styles](../quartz/styles/custom.scss) - Current styling implementation

## Notes

- Icons should maintain the same semantic meaning as the emojis they replace
- Consider accessibility: ensure icons have appropriate ARIA labels
- Test icon visibility on both light and dark backgrounds
- Consider adding animation/hover effects for interactive feel
- Maintain consistent line weight and style across all icons
