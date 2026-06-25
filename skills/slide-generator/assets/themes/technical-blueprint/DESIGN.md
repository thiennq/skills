# Technical Blueprint — Slide Deck Design System

> Engineering precision meets warm craftsmanship. A light technical theme inspired by architectural blueprints and engineering drawings, with grid paper texture and warm accent tones.

---

## 1. Visual Theme & Atmosphere

- **Mood:** Focused / Technical
- **Mode:** Light
- **Density:** Medium — generous whitespace with structured grid elements
- **Philosophy:** Every slide looks like a page from an engineer's notebook. Grid paper provides structure, serif headings add authority, and warm accents (terracotta + navy) provide hierarchy without coldness. Content is precise and methodical.

---

## 2. Color Palette & Roles

```css
:root {
  /* Backgrounds */
  --bg-primary: #f5f0e8;
  --bg-secondary: #ece7dd;

  /* Accent */
  --accent: #c45a28;
  --accent-glow: rgba(196, 90, 40, 0.3);

  /* Secondary accent */
  --accent-secondary: #2d4a7a;
  --accent-secondary-dim: rgba(45, 74, 122, 0.4);

  /* Text scale — 5 levels */
  --text-primary:   #1a1a1a;
  --text-secondary: rgba(26, 26, 26, 0.80);
  --text-muted:     rgba(26, 26, 26, 0.55);
  --text-subtle:    rgba(26, 26, 26, 0.35);
  --text-ghost:     rgba(26, 26, 26, 0.15);

  /* Accent text */
  --accent-text:  #c45a28;
  --accent-dim:   rgba(196, 90, 40, 0.50);
  --accent-ghost: rgba(196, 90, 40, 0.15);
}
```

| Token | Hex | Role |
|-------|-----|------|
| `--bg-primary` | `#f5f0e8` | Main slide background (cream / aged paper) |
| `--bg-secondary` | `#ece7dd` | Secondary surfaces, callout boxes |
| `--accent` | `#c45a28` | Primary accent — terracotta |
| `--accent-secondary` | `#2d4a7a` | Secondary accent — navy blue (borders, labels) |
| `--text-primary` | `#1a1a1a` | Headings, key content |

---

## 3. Typography Rules

| Role | Font | Weight | Size | Style |
|------|------|--------|------|-------|
| Display / Headings | Cormorant | 600 | `clamp(2rem, 5vw, 4rem)` | italic |
| Body / Supporting | Source Sans 3 | 400 | `clamp(0.75rem, 1.2vw, 1rem)` | normal |
| Labels / Tags / Meta | JetBrains Mono | 500 | `clamp(0.6rem, 0.9vw, 0.8rem)` | uppercase |

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;1,600&family=Source+Sans+3:wght@400;600&family=JetBrains+Mono:wght@500&display=swap');
```

- **Headlines:** Cormorant italic — elegant serif with engineering authority. Use italic for title slides only; regular weight for section headings.
- **Body:** Source Sans 3 regular — clean sans-serif for optimal readability. NOT monospace (lesson from NotebookLM: monospace body reduces reading speed).
- **Labels/Tags:** JetBrains Mono uppercase — monospace ONLY for metadata, tags, labels, annotations. Never for body text.
- **Max 3 font families** (display serif + body sans + label mono).

---

## 4. Component Stylings

### Signature Element — Grid Paper Background

The defining visual: a CSS grid paper pattern that appears on every slide.

```css
.slide {
  background-color: #f5f0e8;
  background-image:
    linear-gradient(rgba(26, 26, 26, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26, 26, 26, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

Grid lines must be very subtle (~5% opacity) — they provide structure without interfering with content.

### Callout Boxes
- Border-left: `3px solid var(--accent-secondary)` (navy)
- Background: `var(--bg-secondary)`
- Padding: `style={{ padding: '20px 24px' }}`
- Key terms within callouts: highlighted with `var(--accent)` (terracotta)

### Section Labels
- Uppercase monospace (JetBrains Mono)
- Color: `var(--accent-secondary)` (navy)
- Small tracking/letter-spacing: `0.15em`
- Positioned above headings as category markers

### Accent Underlines
- Selective use of terracotta underlines (`border-bottom: 2px solid var(--accent)`) on key terms
- Not decorative — only on terms being defined or emphasized

---

## 5. Layout Principles

- **Structured grid** — content aligns to the visible grid paper pattern
- Generous whitespace — max 65% content area
- Asymmetric arrangements — content sits left or right, not always centered
- Callout boxes and annotations sit at the margins, like engineering notes
- Diagrams and flowcharts feel hand-drawn but precise

---

## 6. Depth & Elevation

- No drop shadows
- Depth via layering: callout boxes have subtle bg-secondary background against bg-primary
- Borders: `1px solid rgba(26, 26, 26, 0.1)` for containers
- Navy accent borders for important callouts (`border-left: 3px solid var(--accent-secondary)`)

---

## 7. Do's and Don'ts

### Do
- Use the grid paper pattern on every slide for consistency
- Use terracotta for key terms and navy for structural elements
- Use monospace labels sparingly — for tags, dates, metadata only
- Keep the "engineer's notebook" feeling — precise, methodical

### Don't
- Use monospace for body text or paragraphs
- Add colorful decorations or illustrations that break the blueprint aesthetic
- Use more than 4 colors (cream, charcoal, terracotta, navy)
- Add drop shadows or glassmorphism

---

## 8. Responsive Behavior

- Slides are fixed 1280×720, scaled via `transform: scale()`
- All font sizes use `clamp()` for internal consistency
- Grid pattern scales proportionally with slide transform

---

## 9. Agent Prompt Guide

**Quick palette:** bg `#f5f0e8`, accent `#c45a28` (terracotta), secondary `#2d4a7a` (navy), text `#1a1a1a`
**Fonts:** Cormorant italic (display) + Source Sans 3 (body) + JetBrains Mono (labels only)
**Signature:** Grid paper CSS background on every slide, navy callout borders, terracotta accent underlines, monospace section labels

---

## 10. Image Prompt Style Guide

When generating illustrations for slides using this theme:

**Style keywords:** technical drawing, blueprint sketch, line art, engineering diagram, architectural illustration, warm tones
**Color guidance:** charcoal `#1a1a1a` line art on cream `#f5f0e8` paper, terracotta `#c45a28` accent highlights, navy `#2d4a7a` annotations
**Avoid:** bright colors, neon, photorealistic, digital/futuristic, soft/organic watercolor

**Example prompts:**
- Concept: "Technical blueprint sketch illustration of [concept], line art on cream paper, engineering drawing style, terracotta accent, warm tones, 16:9, no text"
- Decorative: "Abstract technical drawing pattern, grid paper with blueprint lines, architectural sketch elements, cream and charcoal, 16:9, no text"

**Technical concept examples (for AI/engineering content):**
- "Blueprint sketch of a brain enclosed in a glass dome, isolated from surrounding tools and data, engineering drawing style, charcoal line art on cream paper, terracotta accent highlights, 16:9, no text"
- "Technical illustration of a 3-layered platform architecture, stacked horizontal layers connected by vertical pipes, architectural blueprint style, navy and terracotta on cream, 16:9, no text"
- "Engineering drawing of two interlocking chain links merging together, representing system integration, line art on grid paper, warm charcoal tones, 16:9, no text"
- "Blueprint sketch of a circular gear mechanism with 3 phases (think → act → observe), mechanical engineering style, terracotta accents, cream background, 16:9, no text"
- "Technical drawing of a vault safe door with lock mechanism, representing security guards, architectural illustration, charcoal and navy on cream paper, 16:9, no text"


---

## 11. Layout Compatibility

- **Tương thích tốt:** `diagram`, `grid`, `two-column`.
- **Tránh sử dụng:** Các layout bất đối xứng không theo ô lưới.
