# Pastel Geometry — Slide Deck Design System

> Friendly, approachable, modern. Rounded cards with pastel pills and soft shadows.

---

## 1. Visual Theme & Atmosphere

- **Mood:** Calm / Focused (Friendly)
- **Mode:** Light
- **Density:** Medium — open and breathable
- **Philosophy:** Friendliness through soft shapes and pastel tones. Rounded cards contain content cleanly. Vertical pastel pills create categorical grouping. Everything feels approachable and modern — like a well-designed mobile app.

---

## 2. Color Palette & Roles

```css
:root {
  /* Backgrounds */
  --bg-primary: #c8d9e6;
  --bg-secondary: #faf9f7;

  /* Accent */
  --accent: #6c8ebf;
  --accent-glow: rgba(108, 142, 191, 0.3);

  /* Pastel pills */
  --pill-blue: #b8d4e8;
  --pill-pink: #f0d4d8;
  --pill-green: #c8e6c8;
  --pill-amber: #f0e4c8;

  /* Text scale — 5 levels */
  --text-primary:   #1a1a1a;
  --text-secondary: rgba(26, 26, 26, 0.85);
  --text-muted:     rgba(26, 26, 26, 0.55);
  --text-subtle:    rgba(26, 26, 26, 0.35);
  --text-ghost:     rgba(26, 26, 26, 0.15);

  /* Accent scale */
  --accent-text:  #6c8ebf;
  --accent-dim:   rgba(108, 142, 191, 0.60);
  --accent-ghost: rgba(108, 142, 191, 0.25);
}
```

| Token | Hex | Role |
|-------|-----|------|
| `--bg-primary` | `#c8d9e6` | Soft blue-grey background |
| `--bg-secondary` | `#faf9f7` | Warm white card surface |
| `--pill-*` | various | Pastel category pills |

---

## 3. Typography Rules

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display / Headings | Plus Jakarta Sans | 700 | `clamp(2rem, 6vw, 4rem)` |
| Body / Supporting | Plus Jakarta Sans | 400 | `clamp(0.75rem, 1.2vw, 1rem)` |
| Labels / Captions | Plus Jakarta Sans | 600 | `clamp(0.75rem, 1vw, 0.9rem)` |

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap');
```

- Single font family — Plus Jakarta Sans is modern, geometric, and inherently friendly.
- Bold weight for display, regular for body.

---

## 4. Component Stylings

### Signature Element — Rounded Card
- Content sits inside a warm white rounded card (`--bg-secondary`)
- Card: `border-radius: 16px`, subtle shadow: `box-shadow: 0 2px 12px rgba(0,0,0,0.06)`
- Card floats on `--bg-primary` background

### Vertical Pastel Pills
- Pill-shaped indicators for categories or list items
- Vertical or horizontal orientation
- Each pill uses one of the `--pill-*` colors
- Border-radius: full (pill shape)
- Used for tagging, categorizing, or visual grouping

### Buttons
- Primary: `background: var(--accent)`, white text
- Border-radius: 12px (rounded, friendly)
- Padding: `style={{ padding: '12px 24px' }}`

---

## 5. Layout Principles

- Rounded card as main content container
- Pastel pills for categorical grouping
- Generous rounded corners everywhere (12-16px)
- Soft, breathable layout — max 60% content

---

## 6. Depth & Elevation

- Soft shadow on card: `0 2px 12px rgba(0,0,0,0.06)` — this is the ONE exception to the no-shadow rule
- No hard shadows, no glass effects
- Depth through surface color layering (bg → card → content)

---

## 7. Do's and Don'ts

### Do
- Use rounded corners consistently (12-16px)
- Apply pastel pills for categorization
- Keep the shadow very subtle on cards

### Don't
- Use sharp corners — this theme is all about softness
- Mix in dark/bold accent colors
- Stack multiple cards — one card per slide

---

## 8. Responsive Behavior

- Fixed 1280×720 with transform scaling
- Card has internal padding that scales with content

---

## 9. Agent Prompt Guide

**Quick palette:** bg `#c8d9e6`, card `#faf9f7`, pills (blue/pink/green/amber pastels), text `#1a1a1a`
**Font:** Plus Jakarta Sans (400/600/700)
**Signature:** Rounded card on soft background, vertical pastel pills, friendly rounded corners

---

## 10. Image Prompt Style Guide

When generating illustrations for slides using this theme:

**Style keywords:** soft geometric illustration, pastel, friendly, rounded shapes, flat design
**Color guidance:** soft blues, pinks, greens, warm whites `#faf9f7` on soft blue `#c8d9e6`, low saturation
**Avoid:** sharp edges, dark/moody, neon, high contrast, complex detail

**Example prompts:**
- Concept: "Soft geometric illustration of [concept], pastel colors, rounded friendly shapes, flat design, warm white and soft blue, 16:9, no text"
- Decorative: "Abstract pastel geometric pattern, rounded shapes, soft blues and pinks on warm white, friendly minimal, 16:9, no text"

---

## 11. Layout Compatibility

- **Tương thích tốt:** Hầu hết mọi layouts (`center`, `image-left`, `image-right`, `two-column`, `grid`, `full-image`).
- **Ghi chú:** Phân bổ chữ thoáng đãng để giữ chiều sâu của nền.
