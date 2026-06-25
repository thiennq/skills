# Swiss Modern — Slide Deck Design System

> Focused, precise, confident. Pure white, pure black, and a single red accent with visible grid structure.

---

## 1. Visual Theme & Atmosphere

- **Mood:** Calm / Focused
- **Mode:** Light
- **Density:** Medium — structured by visible grid
- **Philosophy:** International Typographic Style adapted for slides. The grid is the design. Asymmetric layouts break monotony while the grid provides underlying order. A single red accent punctuates the black-and-white palette with surgical precision.

---

## 2. Color Palette & Roles

```css
:root {
  /* Backgrounds */
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;

  /* Accent */
  --accent: #ff3300;
  --accent-glow: rgba(255, 51, 0, 0.3);

  /* Text scale — 5 levels */
  --text-primary:   #000000;
  --text-secondary: rgba(0, 0, 0, 0.85);
  --text-muted:     rgba(0, 0, 0, 0.55);
  --text-subtle:    rgba(0, 0, 0, 0.35);
  --text-ghost:     rgba(0, 0, 0, 0.10);

  /* Accent scale */
  --accent-text:  #ff3300;
  --accent-dim:   rgba(255, 51, 0, 0.60);
  --accent-ghost: rgba(255, 51, 0, 0.25);
}
```

| Token | Hex | Role |
|-------|-----|------|
| `--bg-primary` | `#ffffff` | Pure white background |
| `--accent` | `#ff3300` | Signal red accent — used sparingly |
| `--text-primary` | `#000000` | Pure black text |

---

## 3. Typography Rules

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display / Headings | Archivo | 800 | `clamp(2rem, 6vw, 5rem)` |
| Body / Supporting | Nunito | 400 | `clamp(0.75rem, 1.2vw, 1rem)` |
| Labels / Captions | Archivo | 600 | `clamp(0.75rem, 1vw, 0.9rem)` |

```css
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@600;800&family=Nunito:wght@400&display=swap');
```

- Archivo: geometric grotesque with a strong presence — clean but not sterile.
- Nunito: rounded sans for body — softens the rigidity of the grid system.

---

## 4. Component Stylings

### Signature Element — Visible Grid
- A CSS grid pattern visible in the background:
  ```css
  background-image:
    linear-gradient(var(--text-ghost) 1px, transparent 1px),
    linear-gradient(90deg, var(--text-ghost) 1px, transparent 1px);
  background-size: 64px 64px;
  ```
- Grid provides underlying structure — content aligns to it
- Grid lines are very subtle (`--text-ghost` at 10% opacity)

### Asymmetric Layouts
- Content deliberately breaks the grid for visual interest
- One element per slide placed "off-grid" as a focal point
- The tension between grid structure and asymmetric content creates dynamism

### Geometric Shapes
- Red accent shapes: circle, rectangle, triangle
- Used as punctuation marks in the layout — never as content containers
- Example: a red circle marks the current section

### Buttons
- Primary: `background: var(--text-primary)`, white text
- Accent: `background: var(--accent)`, white text
- Border-radius: 0 — sharp edges
- Padding: `style={{ padding: '14px 28px' }}`

---

## 5. Layout Principles

- **Visible grid** as the foundational structure
- Asymmetric content placement within the grid
- Red accent used on ONE element per slide max
- Strong black-white contrast as primary hierarchy tool

---

## 6. Depth & Elevation

- Flat — zero depth effects
- Hierarchy through size, weight, and color (black/white/red)
- Grid lines provide visual structure without elevation

---

## 7. Do's and Don'ts

### Do
- Show the grid — it IS the design
- Place content asymmetrically for visual interest
- Use red accent as a single punctuation per slide

### Don't
- Use red on more than one element per slide
- Hide the grid — it should be subtly visible
- Center everything — asymmetry is key to this style

---

## 8. Responsive Behavior

- Fixed 1280×720 with transform scaling
- Grid pattern uses fixed size for consistent appearance

---

## 9. Agent Prompt Guide

**Quick palette:** bg `#ffffff`, text `#000000`, accent `#ff3300`
**Fonts:** Archivo 800 (display) + Nunito 400 (body)
**Signature:** Visible grid background, asymmetric layouts, single red accent per slide, geometric shapes

---

## 10. Image Prompt Style Guide

When generating illustrations for slides using this theme:

**Style keywords:** Swiss graphic design, geometric, Bauhaus, strict grid, high contrast, rational
**Color guidance:** pure black `#000000`, white `#ffffff`, red `#ff3300` only — strictly 3 colors
**Avoid:** organic shapes, gradients, soft edges, multiple colors, decorative elements

**Example prompts:**
- Concept: "Swiss graphic design illustration of [concept], geometric shapes, strict composition, black white and red only, Bauhaus style, 16:9, no text"
- Decorative: "Abstract geometric composition in Swiss design style, intersecting grid lines, black white and red, rational layout, 16:9, no text"

---

## 11. Layout Compatibility

- **Tương thích tốt:** `image-left`, `two-column`, lệch trái.
- **Tránh sử dụng:** `center`, `image-right` (tránh đè lên chi tiết màu đỏ ở góc phải và chừa negative space).
