# Electric Studio — Slide Deck Design System

> Confident, sleek. A two-panel vertical split with electric blue accents.

---

## 1. Visual Theme & Atmosphere

- **Mood:** Impressed / Confident
- **Mode:** Dark
- **Density:** Medium — clean and structured
- **Philosophy:** Two-panel vertical split creates visual tension. An accent bar on the edge anchors attention. Minimal but intentional.

---

## 2. Color Palette & Roles

```css
:root {
  /* Backgrounds */
  --bg-primary: #0a0a0a;
  --bg-secondary: #141414;

  /* Accent */
  --accent: #4361ee;
  --accent-glow: rgba(67, 97, 238, 0.4);

  /* Text scale — 5 levels */
  --text-primary:   #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.85);
  --text-muted:     rgba(255, 255, 255, 0.55);
  --text-subtle:    rgba(255, 255, 255, 0.35);
  --text-ghost:     rgba(255, 255, 255, 0.15);

  /* Accent scale */
  --accent-text:  #4361ee;
  --accent-dim:   rgba(67, 97, 238, 0.60);
  --accent-ghost: rgba(67, 97, 238, 0.25);
}
```

| Token | Hex | Role |
|-------|-----|------|
| `--bg-primary` | `#0a0a0a` | Pure dark background |
| `--accent` | `#4361ee` | Electric blue accent |
| `--text-primary` | `#ffffff` | White headings |

---

## 3. Typography Rules

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display / Headings | Manrope | 800 | `clamp(2rem, 6vw, 5rem)` |
| Body / Supporting | Manrope | 400 | `clamp(0.75rem, 1.2vw, 1rem)` |
| Labels / Captions | Manrope | 600 | `clamp(0.75rem, 1vw, 0.9rem)` |

```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&display=swap');
```

- Single font family at multiple weights — unified and clean.
- ExtraBold (800) for display creates strong hierarchy without a second font.

---

## 4. Component Stylings

### Signature Element — Two-Panel Vertical Split
- Slide divided into two vertical panels (e.g. 40/60 or 50/50)
- One panel for text content, the other for visual/data
- A thin accent bar (`4px solid var(--accent)`) on the dividing edge

### Accent Bar
- Thin vertical or horizontal line in `--accent`
- Used as visual separator and attention anchor
- Placed on panel edges or as section dividers

### Buttons
- Primary: `background: var(--accent)`, white text
- Border-radius: 6px
- Padding: `style={{ padding: '14px 28px' }}`

---

## 5. Layout Principles

- **Two-panel vertical split** as primary layout pattern
- Clean edges and precise alignment
- Content breathes — max 60% content area
- Accent bar on the dividing edge creates visual tension

---

## 6. Depth & Elevation

- Minimal depth — rely on color contrast
- Accent bar creates implicit layering
- No shadows, no glassmorphism

---

## 7. Do's and Don'ts

### Do
- Use the two-panel split consistently
- Place accent bars deliberately on edges
- Keep one font family, vary weights

### Don't
- Use more than one accent color
- Create busy multi-column layouts
- Add decorative elements beyond the accent bar

---

## 8. Responsive Behavior

- Slides are fixed 1280×720, scaled via `transform: scale()`
- Panels rebalance within the fixed frame

---

## 9. Agent Prompt Guide

**Quick palette:** bg `#0a0a0a`, accent `#4361ee`, text white
**Font:** Manrope (400/600/800)
**Signature:** Two-panel vertical split, thin accent bar on dividing edge

---

## 10. Image Prompt Style Guide

When generating illustrations for slides using this theme:

**Style keywords:** clean modern vector, minimal, geometric, electric blue accents, two-panel composition
**Color guidance:** electric blue `#4361ee` on dark `#0a0a0a` background, monochrome with single blue accent
**Avoid:** warm tones, organic shapes, hand-drawn, busy compositions

**Example prompts:**
- Concept: "Clean modern vector illustration of [concept], minimal geometric shapes, electric blue accent on dark background, 16:9, no text"
- Decorative: "Abstract geometric split composition, clean lines, electric blue and dark gray, minimal, 16:9, no text"

---

## 11. Layout Compatibility

- **Tương thích tốt:** `image-left`, `image-right`, `two-column`.
- **Tránh sử dụng:** `center` (nội dung nằm giữa ranh giới chia đôi màn hình đứng sẽ mất cân đối).
- **Ghi chú:** Phân bổ đều nội dung vào 2 nửa màn hình.
