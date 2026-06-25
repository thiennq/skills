# Creative Voltage — Slide Deck Design System

> Energized, innovative, bold. Electric blue meets neon yellow with halftone textures.

---

## 1. Visual Theme & Atmosphere

- **Mood:** Excited / Energized
- **Mode:** Dark
- **Density:** Medium-high — bold visual energy without clutter
- **Philosophy:** Electric contrast drives attention. Blue anchors structure, neon yellow disrupts it. Halftone textures add a raw, creative edge that separates from polished corporate decks.

---

## 2. Color Palette & Roles

```css
:root {
  /* Backgrounds */
  --bg-primary: #1a1a2e;
  --bg-secondary: #16213e;

  /* Accent */
  --accent: #0066ff;
  --accent-secondary: #d4ff00;
  --accent-glow: rgba(0, 102, 255, 0.4);

  /* Text scale — 5 levels */
  --text-primary:   #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.85);
  --text-muted:     rgba(255, 255, 255, 0.55);
  --text-subtle:    rgba(255, 255, 255, 0.35);
  --text-ghost:     rgba(255, 255, 255, 0.15);

  /* Accent scale */
  --accent-text:  #0066ff;
  --accent-dim:   rgba(0, 102, 255, 0.60);
  --accent-ghost: rgba(0, 102, 255, 0.25);
  --neon:         #d4ff00;
  --neon-dim:     rgba(212, 255, 0, 0.60);
  --neon-ghost:   rgba(212, 255, 0, 0.25);
}
```

| Token | Hex | Role |
|-------|-----|------|
| `--bg-primary` | `#1a1a2e` | Deep navy dark background |
| `--accent` | `#0066ff` | Primary electric blue |
| `--accent-secondary` / `--neon` | `#d4ff00` | Neon yellow disruption accent |

---

## 3. Typography Rules

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display / Headings | Syne | 700 | `clamp(2rem, 6vw, 5rem)` |
| Body / Code-like | Space Mono | 400 | `clamp(0.75rem, 1.2vw, 1rem)` |
| Labels / Captions | Syne | 600 | `clamp(0.75rem, 1vw, 0.9rem)` |

```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=Space+Mono:wght@400&display=swap');
```

- Syne: geometric, slightly experimental display font — matches the creative energy.
- Space Mono: monospace body adds a tech/raw texture to pair with halftone.

---

## 4. Component Stylings

### Signature Element — Halftone Textures
- CSS halftone dot pattern as background texture on select slides:
  ```css
  background-image: radial-gradient(circle, var(--neon-ghost) 1px, transparent 1px);
  background-size: 8px 8px;
  ```
- Use sparingly — on 2-3 slides max, not as universal background
- Pair with neon yellow accent for maximum pop

### Color Interaction
- Blue for structural elements (borders, bars, icons)
- Neon yellow for highlights and emphasis (keywords, data points)
- Never use both at equal weight — one leads, the other punctuates

### Buttons
- Primary: `background: var(--accent)`, white text
- Secondary: `border: 2px solid var(--neon)`, neon text
- Padding: `style={{ padding: '14px 28px' }}`

---

## 5. Layout Principles

- Asymmetric layouts — avoid centering everything
- Mix grid and free-form positioning for creative energy
- Halftone textures as subtle background, not foreground
- Max 60% content area

---

## 6. Depth & Elevation

- Neon glow effect: `box-shadow: 0 0 20px var(--accent-glow)` for key elements
- No traditional shadows
- Color contrast creates depth hierarchy

---

## 7. Do's and Don'ts

### Do
- Let blue and neon yellow play off each other with clear hierarchy
- Use halftone texture sparingly for texture
- Keep monospace body text for raw creative feel

### Don't
- Use blue and yellow at equal visual weight
- Over-apply halftone — 2-3 slides max
- Mix in additional accent colors

---

## 8. Responsive Behavior

- Fixed 1280×720 with transform scaling
- Halftone patterns use fixed `background-size` for consistency

---

## 9. Agent Prompt Guide

**Quick palette:** bg `#1a1a2e`, blue `#0066ff`, neon `#d4ff00`, text white
**Fonts:** Syne (display) + Space Mono (body)
**Signature:** Electric blue + neon yellow contrast, halftone dot textures, asymmetric layouts

---

## 10. Image Prompt Style Guide

When generating illustrations for slides using this theme:

**Style keywords:** bold pop art, high energy, halftone texture, electric, vibrant contrast
**Color guidance:** blue `#0066ff` and neon yellow `#d4ff00` on navy `#1a1a2e`, high saturation
**Avoid:** muted tones, soft/pastel, minimalist, classical

**Example prompts:**
- Concept: "Bold pop art illustration of [concept], halftone dots, electric blue and neon yellow on navy background, high energy, 16:9, no text"
- Decorative: "Abstract halftone burst pattern, electric blue and neon yellow, pop art energy, dark background, 16:9, no text"

---

## 11. Layout Compatibility

- **Tương thích tốt:** Hầu hết mọi layouts (`center`, `image-left`, `image-right`, `two-column`, `grid`, `full-image`).
- **Ghi chú:** Phân bổ chữ thoáng đãng để giữ chiều sâu của nền.
