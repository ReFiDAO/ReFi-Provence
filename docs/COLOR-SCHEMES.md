# Color Scheme Reference Guide

This document provides detailed color schemes from existing ReFi node websites. Use these as starting points or inspiration for your own website customization.

---

## How Colors Work in Quartz

The template uses a semantic color system with both **light mode** and **dark mode** variants. Each color serves a specific purpose:

| Color Name | Purpose |
|------------|---------|
| `light` | Main background color |
| `lightgray` | Secondary background, card surfaces |
| `gray` | Muted text, borders |
| `darkgray` | Body text |
| `dark` | Headings, strong text |
| `secondary` | Links, primary accent |
| `tertiary` | Hover states, secondary accent |
| `highlight` | Selection backgrounds, subtle highlights |
| `textHighlight` | Text selection, emphasis backgrounds |

---

## Existing Color Schemes

### 1. Ocean Blue (ReFi Barcelona)

A professional, trustworthy palette built around deep navy blue and warm sand tones.

**Live example**: [refibcn.cat](https://refibcn.cat)

#### Light Mode
```scss
light: #E6DFD7        // Warm sand background
lightgray: #D8D0C8    // Slightly darker sand
gray: #8F9A9E         // Subtle gray
darkgray: #092045     // Dark navy (main text)
dark: #092045         // Dark navy (headings)
secondary: #1A3A6B    // Medium blue (links)
tertiary: #2E5491     // Light blue (hover)
highlight: rgba(9, 32, 69, 0.15)
textHighlight: rgba(9, 32, 69, 0.25)
```

#### Dark Mode
```scss
light: #0A0F1A        // Very dark navy
lightgray: #151D2E    // Light surface
gray: #6B7A8F         // Muted gray
darkgray: #B8C2D0     // Light gray (main text)
dark: #E6DFD7         // Warm sand (headings)
secondary: #5E7A9F    // Light blue (links)
tertiary: #7A93B5     // Lighter blue (hover)
highlight: rgba(94, 122, 159, 0.15)
textHighlight: rgba(94, 122, 159, 0.25)
```

#### Brand Accent Colors
```scss
--brand-purple: #6B4EA3
--brand-purple-light: #8B6EC3
--brand-orange: #E67E50
--brand-orange-light: #F49870
--blue-dark: #092045
--blue-medium: #1A3A6B
--blue-light: #2E5491
```

**Best for**: General ReFi nodes, finance-focused communities, professional organizations

---

### 2. Forest Green (Regenerant Catalunya)

An earthy, ecological palette built around forest green tones, perfect for bioregional and environmental focus.

**Live example**: [regenerant.refibcn.cat](https://regenerant.refibcn.cat)

#### Light Mode
```scss
light: #E6DFD7        // Warm sand background
lightgray: #D8D0C8    // Slightly darker sand
gray: #8F9A9E         // Subtle gray
darkgray: #214033     // Forest green (main text)
dark: #214033         // Forest green (headings)
secondary: #3A6655    // Medium green (links)
tertiary: #568F79     // Light green (hover)
highlight: rgba(33, 64, 51, 0.15)
textHighlight: rgba(33, 64, 51, 0.25)
```

#### Dark Mode
```scss
light: #0F1A1A        // Very dark forest
lightgray: #1A2828    // Light surface
gray: #6B7F7F         // Muted gray
darkgray: #B8C5C5     // Light gray (main text)
dark: #E6DFD7         // Warm sand (headings)
secondary: #568F79    // Light green (links)
tertiary: #7AAE95     // Lighter green (hover)
highlight: rgba(86, 143, 121, 0.15)
textHighlight: rgba(86, 143, 121, 0.25)
```

**Best for**: Bioregional initiatives, environmental projects, nature-focused communities

---

### 3. Mediterranean Blue (ReFi Mediterranean)

A coastal palette inspired by Mediterranean seas, sandy beaches, and golden sunsets.

**Live example**: ReFi Mediterranean

#### Light Mode
```scss
light: #F5F5DC        // Warm beige (sand)
lightgray: #E8E8D8    // Light stone gray
gray: #7A8A9A         // Medium gray (stone)
darkgray: #2C3E50     // Dark slate (text)
dark: #0D4A6B         // Deep blue (headings - ocean depths)
secondary: #1E7A9F    // Mediterranean blue (links)
tertiary: #D4A574     // Warm gold (hover - sunset)
highlight: rgba(30, 122, 159, 0.15)
textHighlight: rgba(30, 122, 159, 0.25)
```

#### Dark Mode
```scss
light: #0F1F2E        // Deep navy (night ocean)
lightgray: #1A2B3D    // Dark blue-gray surface
gray: #6B7F8F         // Muted gray-blue
darkgray: #C8D4E0     // Light blue-gray (text)
dark: #4AB3D9         // Light aqua (headings - shallow water)
secondary: #1E7A9F    // Mediterranean blue (links)
tertiary: #D4A574     // Warm gold (hover - sunset)
highlight: rgba(74, 179, 217, 0.15)
textHighlight: rgba(74, 179, 217, 0.25)
```

**Best for**: Coastal/island communities, Mediterranean region, water-focused initiatives

---

### 4. Clean Blue (ReFi DAO Global)

A minimal, modern palette with clean whites and blues for a professional, global organization feel.

**Live example**: [refidao.com](https://refidao.com)

#### Light Mode
```scss
light: #ffffff        // Pure white
lightgray: #f5f5f5    // Very light gray
gray: #888888         // Medium gray
darkgray: #333333     // Dark gray (text)
dark: #1a1a1a         // Near black (headings)
secondary: #4a9eff    // Bright blue (links)
tertiary: #6bb3ff     // Light blue (hover)
highlight: rgba(74, 158, 255, 0.15)
textHighlight: rgba(74, 158, 255, 0.25)
```

#### Dark Mode
```scss
light: #0d1117        // GitHub-style dark
lightgray: #161b22    // Dark surface
gray: #8b949e         // Muted gray
darkgray: #c9d1d9     // Light gray (text)
dark: #f0f6fc         // Near white (headings)
secondary: #58a6ff    // Blue (links)
tertiary: #79c0ff     // Light blue (hover)
highlight: rgba(88, 166, 255, 0.15)
textHighlight: rgba(88, 166, 255, 0.25)
```

**Best for**: Global organizations, tech-forward communities, minimalist aesthetic

---

## Custom Color Schemes (Templates)

### Earth Tones

A grounded, organic palette for rural and agricultural communities.

#### Light Mode
```scss
light: #F5F0E6        // Cream
lightgray: #E8E0D5    // Light tan
gray: #9A8F82         // Warm gray
darkgray: #4A3F35     // Brown (text)
dark: #2D241D         // Dark brown (headings)
secondary: #8B5A2B    // Sienna (links)
tertiary: #A67C52     // Tan (hover)
highlight: rgba(139, 90, 43, 0.15)
textHighlight: rgba(139, 90, 43, 0.25)
```

#### Dark Mode
```scss
light: #1A1512        // Very dark brown
lightgray: #2A241F    // Dark surface
gray: #7A6F65         // Muted brown
darkgray: #C8BEB4     // Light tan (text)
dark: #E8DFD5         // Cream (headings)
secondary: #C49A6C    // Light sienna (links)
tertiary: #D4B896     // Tan (hover)
highlight: rgba(196, 154, 108, 0.15)
textHighlight: rgba(196, 154, 108, 0.25)
```

---

### Sunset Coral

A warm, energetic palette for community-focused and social initiatives.

#### Light Mode
```scss
light: #FFF8F5        // Warm white
lightgray: #F5EBE6    // Light peach
gray: #A0908A         // Warm gray
darkgray: #4A3A35     // Dark warm brown (text)
dark: #2D1F1A         // Deep brown (headings)
secondary: #E67E50    // Coral (links)
tertiary: #F4A27C     // Light coral (hover)
highlight: rgba(230, 126, 80, 0.15)
textHighlight: rgba(230, 126, 80, 0.25)
```

#### Dark Mode
```scss
light: #1A1210        // Very dark
lightgray: #2A201D    // Dark surface
gray: #8A7A75         // Muted warm gray
darkgray: #D4C4BE     // Light warm gray (text)
dark: #F5E8E0         // Warm white (headings)
secondary: #F4A27C    // Light coral (links)
tertiary: #F5B899     // Lighter coral (hover)
highlight: rgba(244, 162, 124, 0.15)
textHighlight: rgba(244, 162, 124, 0.25)
```

---

### Lavender Purple

A creative, expressive palette for innovative and artistic communities.

#### Light Mode
```scss
light: #F8F6FC        // Lavender white
lightgray: #EDE8F5    // Light lavender
gray: #9590A5         // Purple gray
darkgray: #3D3850     // Dark purple (text)
dark: #2A2540         // Deep purple (headings)
secondary: #7B5EA7    // Purple (links)
tertiary: #9B7EC7     // Light purple (hover)
highlight: rgba(123, 94, 167, 0.15)
textHighlight: rgba(123, 94, 167, 0.25)
```

#### Dark Mode
```scss
light: #15121A        // Very dark purple
lightgray: #201D28    // Dark surface
gray: #756F85         // Muted purple
darkgray: #C8C2D5     // Light purple gray (text)
dark: #E8E2F0         // Light lavender (headings)
secondary: #9B7EC7    // Light purple (links)
tertiary: #B89EDB     // Lighter purple (hover)
highlight: rgba(155, 126, 199, 0.15)
textHighlight: rgba(155, 126, 199, 0.25)
```

---

## How to Apply Colors

### In quartz.config.ts

```typescript
theme: {
  colors: {
    lightMode: {
      light: "#E6DFD7",
      lightgray: "#D8D0C8",
      gray: "#8F9A9E",
      darkgray: "#092045",
      dark: "#092045",
      secondary: "#1A3A6B",
      tertiary: "#2E5491",
      highlight: "rgba(9, 32, 69, 0.15)",
      textHighlight: "rgba(9, 32, 69, 0.25)",
    },
    darkMode: {
      light: "#0A0F1A",
      lightgray: "#151D2E",
      gray: "#6B7A8F",
      darkgray: "#B8C2D0",
      dark: "#E6DFD7",
      secondary: "#5E7A9F",
      tertiary: "#7A93B5",
      highlight: "rgba(94, 122, 159, 0.15)",
      textHighlight: "rgba(94, 122, 159, 0.25)",
    },
  },
},
```

### In custom.scss (for additional brand colors)

```scss
:root {
  // Primary brand colors
  --brand-primary: #092045;
  --brand-secondary: #1A3A6B;
  --brand-accent: #E67E50;
  
  // Derived colors
  --brand-highlight: rgba(9, 32, 69, 0.15);
}
```

---

## Color Selection Tips

1. **Start with your brand**: If you have existing brand colors, build the palette around them
2. **Consider contrast**: Ensure text is readable against backgrounds (WCAG 2.1 AA minimum)
3. **Test both modes**: Dark mode isn't just inverted — it needs careful consideration
4. **Use the warm sand**: The `#E6DFD7` background works well with most accent colors
5. **Keep it consistent**: Use the semantic color names consistently across your site

### Accessibility Checklist

- [ ] Text color has at least 4.5:1 contrast ratio with background
- [ ] Links are distinguishable from regular text
- [ ] Interactive elements have visible focus states
- [ ] Color isn't the only way to convey information

> **Tool**: Check contrast ratios at [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## Need Help?

If you're unsure about colors:
1. Pick the closest existing scheme to your vision
2. Note any specific changes you'd like
3. We can refine together during the customization process

---

*This guide is part of the [Quartz ReFi Template](https://github.com/ReFiDAO/quartz-refi-template) documentation.*

