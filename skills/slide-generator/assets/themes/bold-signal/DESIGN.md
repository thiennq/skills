# Bold Signal — Slide Deck Design System

> Confident, professional, trustworthy. A bold dark theme with colored card focal points.

---

## 1. Visual Theme & Atmosphere

- **Mood:** Impressed / Confident
- **Mode:** Dark
- **Density:** Medium — generous whitespace with bold focal elements
- **Philosophy:** Let one strong visual anchor each slide. Large section numbers create rhythm. Grid layouts provide structure without rigidity.

---

## 2. Color Palette & Roles

```css
:root {
  /* Backgrounds */
  --bg-primary: #1a1a1a;
  --bg-secondary: #242424;

  /* Accent */
  --accent: #FF5722;
  --accent-glow: rgba(255, 87, 34, 0.4);

  /* Text scale — 5 levels */
  --text-primary:   #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.85);
  --text-muted:     rgba(255, 255, 255, 0.55);
  --text-subtle:    rgba(255, 255, 255, 0.35);
  --text-ghost:     rgba(255, 255, 255, 0.15);

  /* Accent scale */
  --accent-text:  #FF5722;
  --accent-dim:   rgba(255, 87, 34, 0.60);
  --accent-ghost: rgba(255, 87, 34, 0.25);
}
```

| Token | Hex | Role |
|-------|-----|------|
| `--bg-primary` | `#1a1a1a` | Main slide background |
| `--bg-secondary` | `#242424` | Secondary surfaces |
| `--accent` | `#FF5722` | Primary accent — deep orange |
| `--text-primary` | `#ffffff` | Headings, important labels |

---

## 3. Typography Rules

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display / Headings | Archivo Black | 900 | `clamp(2rem, 6vw, 5rem)` |
| Body / Supporting | Space Grotesk | 400 | `clamp(0.75rem, 1.2vw, 1rem)` |
| Labels / Captions | Space Grotesk | 600 | `clamp(0.75rem, 1vw, 0.9rem)` |

```css
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;600&display=swap');
```

- Headlines: large, black-weight Archivo. Maximum visual impact.
- Body: Space Grotesk at regular weight for clean readability.
- **Max 2 font families.**

---

## 4. Component Stylings

### Signature Element — Colored Card as Focal
- One card per slide uses `--accent` as solid background
- Card contains the key message or data point
- White text on accent background
- All other content sits directly on `--bg-primary` without card wrappers

### Buttons
- Primary: `background: var(--accent)`, white text, no border-radius beyond 4px
- Hover: brightness increase to 1.1
- Padding: `style={{ padding: '16px 32px' }}`

### Section Numbers
- Large oversized numbers (clamp(4rem, 10vw, 8rem)) in `--text-ghost`
- Positioned as background decoration, not inline with content
- Creates visual rhythm across slide transitions

---

## 5. Layout Principles

- **Grid layout** — use CSS Grid for structured, aligned content
- Large section numbers as decorative anchors
- Generous whitespace — max 60% content area
- Asymmetric arrangements preferred over centered stacks

---

## 6. Depth & Elevation

- No drop shadows
- Depth via color contrast: accent card pops against dark background
- Subtle border: `1px solid rgba(255, 255, 255, 0.1)` for secondary containers

---

## 7. Do's and Don'ts

### Do
- Use the accent card as a single focal point per slide
- Let section numbers create visual rhythm
- Maintain strong contrast between accent and background

### Don't
- Wrap every text block in a card
- Use multiple accent colors
- Add shadows or glassmorphism

---

## 8. Responsive Behavior

- Slides are fixed 1280×720, scaled via `transform: scale()`
- All font sizes use `clamp()` for internal consistency

---

## 9. Agent Prompt Guide

**Quick palette:** bg `#1a1a1a`, accent `#FF5722`, text white
**Fonts:** Archivo Black (display) + Space Grotesk (body)
**Signature:** One colored accent card per slide, large ghost section numbers, grid layout

---

## 10. Image Prompt Style Guide

When generating illustrations for slides using this theme:

**Style keywords:** bold graphic design, strong contrast, modern, flat shapes, minimal detail
**Color guidance:** orange `#FF5722` accent on dark `#1a1a1a` background, high contrast, limited palette
**Avoid:** soft/pastel tones, watercolor, hand-drawn, overly detailed

**Example prompts:**
- Concept: "Bold graphic design illustration of [concept], strong contrast, flat shapes, orange accent on dark background, 16:9, no text"
- Decorative: "Abstract geometric composition, bold intersecting planes, orange and dark gray, minimal, 16:9, no text"

---

## 11. Layout Compatibility

- **Tương thích tốt:** `image-left`, `two-column`, lệch trái.
- **Tránh sử dụng:** `center`, `image-right` (tránh đè lên thẻ tiêu điểm lệch phải).
