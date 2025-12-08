# Content Structure Templates

This document provides ready-to-use content templates for your ReFi node website. Copy these templates and customize them with your own content.

---

## Table of Contents

1. [Homepage Template](#homepage-template)
2. [Section Templates](#section-templates)
   - [Hero Section](#hero-section)
   - [What We Do Section](#what-we-do-section)
   - [Featured Project Section](#featured-project-section)
   - [Events Section](#events-section)
   - [Team Section](#team-section)
   - [Partners Section](#partners-section)
   - [Get Involved Section](#get-involved-section)
   - [What is ReFi Section](#what-is-refi-section)
3. [Additional Page Templates](#additional-page-templates)
4. [Multi-language Structure](#multi-language-structure)

---

## Homepage Template

### Basic Homepage Structure

Copy this template to `content/index.md`:

```markdown
---
title: "Your Node Name"
description: "Your tagline or brief description for SEO and social sharing"
---

<div class="hero-section">
  <div class="hero-inner">
    <div class="hero-top">
      <div class="hero-title">
        <h1>Your main headline here</h1>
      </div>
      <div class="hero-image">
        <img src="/static/hero_home.png" alt="Hero illustration"/>
      </div>
    </div>
    <div class="hero-bottom">
      <p class="hero-text">
        Your introductory paragraph that explains what your node does 
        and why visitors should care.
      </p>
      <a href="#about" class="cta-button">Learn More</a>
    </div>
  </div>
</div>

<!-- Add more sections below -->
```

### Complete Homepage Example

Based on ReFi Barcelona's homepage:

```markdown
---
title: "ReFi Barcelona"
description: "Connecting Catalonia's regenerative movements with global innovations in finance, technology, and governance to accelerate the transition toward a life-centered economy."
---

<div class="hero-section">
  <div class="hero-inner">
    <div class="hero-top">
      <div class="hero-title">
        <h1>Seeding pathways toward just and resilient economies</h1>
      </div>
      <div class="hero-image">
        <img src="/static/hero_home.png" alt="ReFi BCN hero illustration"/>
      </div>
    </div>
    <div class="hero-bottom">
      <p class="hero-text">
        We connect Catalonia's regenerative movements with global innovations in finance, 
        technology, and governance to accelerate the transition toward a life-centered economy.
      </p>
      <a href="#about" class="cta-button">Learn More</a>
    </div>
  </div>
</div>

<div id="about" class="section-container">
  <!-- What We Do content -->
</div>

<div id="featured" class="callout-section">
  <!-- Featured project content -->
</div>

<div id="events" class="section-container">
  <!-- Events content -->
</div>

<div class="section-container section-container-tinted">
  <!-- Team content -->
</div>

<div id="contact" class="section-container section-container-tinted">
  <!-- Get Involved content -->
</div>
```

---

## Section Templates

### Hero Section

#### Standard Hero with Image

```markdown
<div class="hero-section">
  <div class="hero-inner">
    <div class="hero-top">
      <div class="hero-title">
        <h1>Your main headline here</h1>
      </div>
      <div class="hero-image">
        <img src="/static/your-hero-image.png" alt="Descriptive alt text"/>
      </div>
    </div>
    <div class="hero-bottom">
      <p class="hero-text">
        Your introductory paragraph. Keep it concise but compelling.
        2-3 sentences is ideal.
      </p>
      <a href="#about" class="cta-button">Learn More</a>
    </div>
  </div>
</div>
```

#### Hero without Image (Text Only)

```markdown
<div class="hero-section">
  <div class="hero-top">
    <div class="hero-title">
      <h1>A network society to regenerate the earth</h1>
    </div>
  </div>
  <div class="hero-bottom">
    <p class="hero-text">
      ReFi DAO is a network society focused on developing strategic services and public goods 
      for the Regenerative Finance ecosystem.
    </p>
    <a href="#about" class="cta-button">Learn More</a>
  </div>
</div>
```

---

### What We Do Section

```markdown
<div id="about" class="section-container">
  <div class="section-content-centered">
    <h2>What We Do</h2>
    <p>
      Brief overview of your node's activities and purpose.
      Keep this to 2-3 sentences.
    </p>
  </div>

  <div class="feature-grid">
    <div class="feature-item">
      <dt>💶 Activity Name</dt>
      <dd>Brief description of this activity (one sentence)</dd>
    </div>
    <div class="feature-item">
      <dt>🛠️ Activity Name</dt>
      <dd>Brief description of this activity (one sentence)</dd>
    </div>
    <div class="feature-item">
      <dt>🤝 Activity Name</dt>
      <dd>Brief description of this activity (one sentence)</dd>
    </div>
    <div class="feature-item">
      <dt>🌀 Activity Name</dt>
      <dd>Brief description of this activity (one sentence)</dd>
    </div>
    <div class="feature-item">
      <dt>📚 Activity Name</dt>
      <dd>Brief description of this activity (one sentence)</dd>
    </div>
    <div class="feature-item">
      <dt>🌍 Activity Name</dt>
      <dd>Brief description of this activity (one sentence)</dd>
    </div>
  </div>
</div>
```

#### Example Activities

| Activity Type | Emoji | Example Description |
|---------------|-------|---------------------|
| Funding | 💶 💰 | Channeling resources to regenerative projects |
| Technology | 🛠️ 💻 | Piloting tools that strengthen local ecosystems |
| Events | 🤝 🎪 | Convening movements, communities, and innovators |
| Education | 📚 🎓 | Sharing knowledge and practices around ReFi |
| Community | 🌍 🤲 | Weaving connections across local and global movements |
| Research | 🔬 📊 | Mapping and analyzing regenerative initiatives |
| Advocacy | 📢 🗣️ | Amplifying voices for systemic change |
| Facilitation | 🌀 🎯 | Supporting collective decision-making |

---

### Featured Project Section

Use this for highlighting a key initiative or program.

```markdown
<div id="featured-project" class="callout-section">

## Project Name

*Brief tagline or description in italics.*

Longer description of the project. Explain what it is, who's involved, 
and what impact it aims to create. Include any relevant numbers or 
partnerships to build credibility.

Together with **Partner Name** and **Another Partner**, this initiative 
will deliver **specific outcomes** for **target beneficiaries**.

<a href="/project-page" class="cta-button">Learn More</a>

</div>
```

#### Example: Regenerant Catalunya

```markdown
<div id="regenerant-catalunya" class="callout-section">

## Regenerant Catalunya 2025

*Regenerant Catalunya is an upcoming collective effort to channel resources into the organizations and networks regenerating life in the Catalan bioregion.*

Together with local partners like **Miceli Social** and **La Fundició**, and global sponsors including **Gitcoin**, **Celo**, and the **Ethereum Foundation**, nearly **€30,000** will be allocated directly to regenerative projects — from restoring the **Fluvià river** to strengthening **solidarity-based community infrastructures** in Barcelona.

<a href="https://regenerant.refibcn.cat/" class="cta-button">Learn More</a>

</div>
```

---

### Events Section

```markdown
<div id="events" class="section-container">
  <div class="section-content-centered">
    <h2>Past Events</h2>
    <p>
      Brief intro about your events and gatherings.
    </p>
  </div>

  <div class="event-grid">
    <div class="event-item">
      <img src="/static/event-1.jpg" alt="Event 1 Name"/>
      <h3>🌍 Event Name (Year)</h3>
      <p>Description of the event and its significance. What happened? Who attended? What was the outcome?</p>
    </div>
    <div class="event-item">
      <img src="/static/event-2.jpg" alt="Event 2 Name"/>
      <h3>🌱 Event Name (Year)</h3>
      <p>Description of the event and its significance. What happened? Who attended? What was the outcome?</p>
    </div>
  </div>
</div>
```

#### Example: ReFi Barcelona Events

```markdown
<div id="events" class="section-container">
  <div class="section-content-centered">
    <h2>Past Events</h2>
    <p>
      The first chapter of ReFi BCN has been about creating spaces where regenerative projects, technologists, 
      funders, and community organizers could meet and begin shaping something bigger together.
    </p>
  </div>

  <div class="event-grid">
    <div class="event-item">
      <img src="/static/refi_unconference.jpg" alt="ReFi Unconference 2024"/>
      <h3>🌍 ReFi Unconference (2024)</h3>
      <p>Our first large gathering brought together local eco-social movements and global ReFi builders in a unique mix of talks, co-created sessions, and community-driven experiments.</p>
    </div>
    <div class="event-item">
      <img src="/static/biofi_barcelona.jpg" alt="BioFi Barcelona 2025"/>
      <h3>🌱 BioFi Barcelona (2025)</h3>
      <p>In the spring of 2025, we convened this conversation on the future of bioregional finance, blending global insights with Catalonia's traditions of cooperation and mutual aid.</p>
    </div>
  </div>
</div>
```

---

### Team Section

```markdown
<div class="section-container section-container-tinted">
  <div class="section-content-centered">
    <h2>About Us</h2>
    <p>Brief intro about your team or collective.</p>
  </div>

  <div class="team-grid">
    <div class="team-member">
      <img src="/static/member-1.jpg" alt="Member Name"/>
      <p class="team-name"><a href="https://linkedin.com/in/username">Member Name</a></p>
      <p class="team-role">Role / Title</p>
      <p class="team-bio">Brief bio describing their background and what they bring to the team. 2-3 sentences.</p>
    </div>
    <div class="team-member">
      <img src="/static/member-2.jpg" alt="Member Name"/>
      <p class="team-name"><a href="https://linkedin.com/in/username">Member Name</a></p>
      <p class="team-role">Role / Title</p>
      <p class="team-bio">Brief bio describing their background and what they bring to the team. 2-3 sentences.</p>
    </div>
    <div class="team-member">
      <img src="/static/member-3.jpg" alt="Member Name"/>
      <p class="team-name"><a href="https://linkedin.com/in/username">Member Name</a></p>
      <p class="team-role">Role / Title</p>
      <p class="team-bio">Brief bio describing their background and what they bring to the team. 2-3 sentences.</p>
    </div>
  </div>
</div>
```

#### Example Roles

| Role | Description |
|------|-------------|
| Founder & Strategy Lead | Overall vision and strategic direction |
| Operations Lead | Day-to-day operations and coordination |
| Community Lead | Community building and engagement |
| Communications Lead | Content, social media, external communications |
| Program Lead | Program design and management |
| Partnerships Lead | Partner relationships and collaborations |
| Tech Lead | Technical infrastructure and tools |

---

### Partners Section

```markdown
<div class="section-container">
  <div class="section-content-centered">
    <h2>Our Partners</h2>
    <p>We collaborate with organizations across the regenerative ecosystem.</p>
  </div>

  <div class="logo-grid">
    <img src="/static/partner-1.png" alt="Partner 1"/>
    <img src="/static/partner-2.png" alt="Partner 2"/>
    <img src="/static/partner-3.png" alt="Partner 3"/>
    <img src="/static/partner-4.png" alt="Partner 4"/>
  </div>
</div>
```

---

### Get Involved Section

```markdown
<div id="contact" class="section-container section-container-tinted">

<div class="section-content-centered">

## Get Involved

We're building the connections that make regeneration possible, but we can't do it alone! Here's how you can participate:

<div class="get-involved-grid">

<ul>
<li>Collaborate as a local project or funder</li>
<li>Join our events and workshops</li>
</ul>

<ul>
<li>Reach out for partnerships and support</li>
<li>Contribute to our knowledge base</li>
</ul>

</div>

Get in touch at <a href="mailto:contact@yournode.org">contact@yournode.org</a>

</div>

</div>
```

#### Alternative: Multiple CTAs

```markdown
<div class="section-container section-container-tinted">
  <div class="section-content-centered">
    <h2>Join Us</h2>
    <p>
      Ready to get involved? Whether you're interested in starting a project, 
      joining our community, or exploring partnerships, there's a place for you.
    </p>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; margin-top: 1.5rem;">
      <a href="/projects" class="cta-button">Explore Projects</a>
      <a href="/community" class="cta-button">Join Community</a>
      <a href="/contact" class="cta-button">Contact Us</a>
    </div>
  </div>
</div>
```

---

### What is ReFi Section

Include this if your audience may not know about ReFi.

```markdown
<div class="section-container">

<div class="hero-section">

<div>

## What is ReFi?

**Regenerative Finance** (ReFi) is a movement rethinking how money, technology, and governance can serve holistic socioecological regeneration. [Your Node Name] is a local node of **ReFi DAO**, a global organization nurturing the ReFi ecosystem.

<a href="https://www.refidao.com/">→ About ReFi DAO</a>

</div>

<div class="hero-image">

<img src="/static/refi-illustration.jpg" alt="ReFi illustration"/>

</div>

</div>

</div>
```

---

### Two-Column Section with Image

Use for sections that pair text with an image side by side.

```markdown
<div id="section-id" class="section-container">
  <div class="hero-section">
    <div>
      <h2>Section Title</h2>
      <p>Your content here. This could be multiple paragraphs.</p>
      <p><a href="/link">→ Call to action</a></p>
    </div>
    <div class="hero-image">
      <img src="/static/your-image.jpg" alt="Description"/>
    </div>
  </div>
</div>
```

---

## Additional Page Templates

### About Page

Create `content/about/index.md`:

```markdown
---
title: "About Us"
description: "Learn more about [Your Node Name] and our mission"
---

# About [Your Node Name]

## Our Mission

Brief mission statement (1-2 paragraphs).

## Our Story

How did your node start? What problem are you solving?

## Our Values

- **Value 1**: Description
- **Value 2**: Description
- **Value 3**: Description

## Our Team

[Team section content here, or link to dedicated team page]

## Join Us

How can people get involved?
```

### Resources Page

Create `content/resources/index.md`:

```markdown
---
title: "Resources"
description: "Documentation, guides, and tools for [Your Node Name]"
---

# Resources

Welcome to our resource hub. Find documentation, guides, and tools to help you participate in our community.

## Getting Started

- [Onboarding Guide](/resources/onboarding)
- [Community Guidelines](/resources/guidelines)
- [FAQ](/resources/faq)

## Documentation

- [Governance Framework](/resources/governance)
- [Project Guidelines](/resources/projects)
- [Partner Handbook](/resources/partners)

## Tools & Links

- [Tool 1](https://link-to-tool)
- [Tool 2](https://link-to-tool)
```

### Contact Page

Create `content/contact.md`:

```markdown
---
title: "Contact"
description: "Get in touch with [Your Node Name]"
---

# Contact Us

We'd love to hear from you! Here's how to reach us:

## Email

📧 [contact@yournode.org](mailto:contact@yournode.org)

## Social Media

- 🐦 [Twitter/X](https://twitter.com/yournode)
- 💬 [Discord](https://discord.gg/yournode)
- 📱 [Telegram](https://t.me/yournode)

## Office Hours

We hold community office hours every [day/time]. Join us to ask questions, share ideas, or just say hello.

[Link to office hours calendar or registration]
```

---

## Multi-language Structure

For multi-language support, organize content by language:

```
content/
├── index.md              # Default/fallback homepage
├── en/                   # English content
│   ├── index.md
│   ├── about/
│   └── resources/
├── es/                   # Spanish content
│   ├── index.md
│   ├── about/
│   └── resources/
├── ca/                   # Catalan content
│   ├── index.md
│   ├── about/
│   └── resources/
└── fr/                   # French content
    ├── index.md
    ├── about/
    └── resources/
```

### Language-Specific Homepage Example

`content/es/index.md`:

```markdown
---
title: "ReFi Barcelona"
description: "Conectando los movimientos regenerativos de Cataluña con las innovaciones globales en finanzas, tecnología y gobernanza."
---

<div class="hero-section">
  <div class="hero-inner">
    <div class="hero-top">
      <div class="hero-title">
        <h1>Sembrando caminos hacia economías justas y resilientes</h1>
      </div>
      <!-- ... rest of content in Spanish ... -->
    </div>
  </div>
</div>
```

---

## Content Checklist

Before launching, ensure you have:

### Homepage
- [ ] Hero title and description
- [ ] Hero image
- [ ] What We Do section (3-6 activities)
- [ ] At least one featured section
- [ ] Contact/Get Involved section

### Assets
- [ ] Logo and favicon
- [ ] Hero image(s)
- [ ] Team photos (if using team section)
- [ ] Event photos (if using events section)
- [ ] Partner logos (if using partners section)

### Metadata
- [ ] Page titles for all pages
- [ ] Descriptions for all pages
- [ ] Alt text for all images

### Links
- [ ] All internal links working
- [ ] External links opening in new tabs
- [ ] Contact email correct
- [ ] Social media links correct

---

## Tips for Writing Content

1. **Keep it concise**: Visitors scan, not read. Use short paragraphs.
2. **Lead with value**: What's in it for the visitor?
3. **Use active voice**: "We connect" not "Connections are made"
4. **Be specific**: "€30,000 for 12 projects" not "funding for projects"
5. **Include calls to action**: Tell visitors what to do next
6. **Show, don't tell**: Use examples, numbers, and stories

---

*This guide is part of the [Quartz ReFi Template](https://github.com/ReFiDAO/quartz-refi-template) documentation.*

