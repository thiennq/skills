# Vintage Editorial — Slide Deck Design System

> Inspired, warm, intentional. Cream canvas with geometric shapes and bold serif display.

---

## 1. Visual Theme & Atmosphere

- **Mood:** Inspired / Moved
- **Mode:** Light
- **Density:** Medium — editorial spacing with intentional structure
- **Philosophy:** Print-inspired design on a digital canvas. Geometric shapes (circles, lines, dots) create visual interest without illustration. Bold borders frame content. The deck should feel like a beautifully typeset magazine spread.

---

## 2. Color Palette & Roles

```css
:root {
  /* Backgrounds */
  --bg-primary: #f5f3ee;
  --bg-secondary: #ffffff;

  /* Accent */
  --accent: #e8d4c0;
  --accent-glow: rgba(232, 212, 192, 0.4);

  /* Text scale — 5 levels */
  --text-primary:   #1a1a1a;
  --text-secondary: rgba(26, 26, 26, 0.85);
  --text-muted:     rgba(26, 26, 26, 0.55);
  --text-subtle:    rgba(26, 26, 26, 0.35);
  --text-ghost:     rgba(26, 26, 26, 0.15);

  /* Accent scale */
  --accent-text:  #a67c52;
  --accent-dim:   rgba(166, 124, 82, 0.60);
  --accent-ghost: rgba(166, 124, 82, 0.25);
}
```

| Token | Hex | Role |
|-------|-----|------|
| `--bg-primary` | `#f5f3ee` | Warm cream canvas |
| `--accent` | `#e8d4c0` | Warm beige accent |
| `--accent-text` | `#a67c52` | Readable accent on light bg |
| `--text-primary` | `#1a1a1a` | Dark text |

---

## 3. Typography Rules

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display / Headings | Fraunces | 700 | `clamp(2rem, 6vw, 5rem)` |
| Body / Supporting | Work Sans | 400 | `clamp(0.75rem, 1.2vw, 1rem)` |
| Labels / Captions | Work Sans | 600 | `clamp(0.75rem, 1vw, 0.9rem)` |

```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700&family=Work+Sans:wght@400;600&display=swap');
```

- Fraunces: optical-size variable serif with a vintage, soft-serif feel — distinctive without being stuffy.
- Work Sans: clean, humanist sans-serif for body — pairs naturally with serif headings.

---

## 4. Component Stylings

### Signature Element — Geometric Shapes
- Simple geometric decorations: circle, line, dot
- Example circle: `width: 40px; height: 40px; border-radius: 50%; background: var(--accent);`
- Example line: `width: 60px; height: 2px; background: var(--text-subtle);`
- Example dot: `width: 8px; height: 8px; border-radius: 50%; background: var(--text-muted);`
- Placed decoratively near headings or as section markers
- Arranged in deliberate compositions (e.g., circle + line + dot pattern)

### Bold Borders
- Border: `3px solid var(--text-primary)` for emphasis frames
- Used sparingly — on title slide or section transition frames
- Creates strong visual structure against the soft cream background

### Buttons
- Primary: `background: var(--text-primary)`, cream text
- Border-radius: 0 — sharp, editorial
- Padding: `style={{ padding: '14px 28px' }}`

---

## 5. Layout Principles

- Editorial grid — asymmetric but deliberate
- Geometric shapes as compositional accents
- Bold borders for framing key sections
- Cream canvas breathes — max 55% content area

---

## 6. Depth & Elevation

- Flat design — no shadows
- Depth through typography scale and bold borders
- Geometric shapes add visual layering without elevation

---

## 7. Do's and Don'ts

### Do
- Use geometric shapes (circle + line + dot) as decorative system
- Apply bold borders sparingly for emphasis
- Maintain the cream/warm tone throughout

### Don't
- Use more than 3 geometric shape types
- Apply borders to every element — save for emphasis moments
- Mix in cold/blue tones — keep everything warm

---

## 8. Responsive Behavior

- Fixed 1280×720 with transform scaling
- Geometric shapes use absolute positioning for decorative placement

---

## 9. Agent Prompt Guide

**Quick palette:** cream `#f5f3ee`, accent `#e8d4c0`, accent-text `#a67c52`, text `#1a1a1a`
**Fonts:** Fraunces 700 (display serif) + Work Sans 400 (body)
**Signature:** Geometric shapes (circle + line + dot), bold borders, warm cream editorial canvas

---

## 10. Image Prompt Style Guide

When generating illustrations for slides using this theme:

**Style keywords:** editorial illustration, woodcut style, warm, engraving, linocut, classical composition
**Color guidance:** cream `#f5f3ee`, warm brown `#e8d4c0`, accent `#a67c52`, minimal palette
**Avoid:** neon, digital/tech, cold blues, photorealistic, 3D

**Example prompts:**
- Concept: "Editorial woodcut illustration of [concept], warm engraving style, cream and brown tones, classical composition, 16:9, no text"
- Decorative: "Abstract linocut pattern, geometric shapes and lines, warm cream and brown, editorial aesthetic, 16:9, no text"

---

## 11. Layout Compatibility

- **Tương thích tốt:** Hầu hết mọi layouts (`center`, `image-left`, `image-right`, `two-column`, `grid`, `full-image`).
- **Ghi chú:** Phân bổ chữ thoáng đãng để giữ chiều sâu của nền.
