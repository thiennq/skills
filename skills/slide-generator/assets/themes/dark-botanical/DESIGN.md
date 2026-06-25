# Dark Botanical — Slide Deck Design System

> Inspired, emotional, elegant. Abstract gradient circles on deep black with warm botanical accents.

---

## 1. Visual Theme & Atmosphere

- **Mood:** Inspired / Moved
- **Mode:** Dark
- **Density:** Low — lots of breathing room, sparse content
- **Philosophy:** Beauty through restraint. Serif display type adds editorial weight. Blurred gradient circles create atmosphere without distraction. Thin accent lines provide structure. The deck should feel like an art exhibition — each slide a carefully composed frame.

---

## 2. Color Palette & Roles

```css
:root {
  /* Backgrounds */
  --bg-primary: #0f0f0f;
  --bg-secondary: #1a1a1a;

  /* Accent */
  --accent: #d4a574;
  --accent-secondary: #e8b4b8;
  --accent-glow: rgba(212, 165, 116, 0.3);

  /* Text scale — 5 levels */
  --text-primary:   #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.85);
  --text-muted:     rgba(255, 255, 255, 0.55);
  --text-subtle:    rgba(255, 255, 255, 0.35);
  --text-ghost:     rgba(255, 255, 255, 0.15);

  /* Accent scale */
  --accent-text:  #d4a574;
  --accent-dim:   rgba(212, 165, 116, 0.60);
  --accent-ghost: rgba(212, 165, 116, 0.25);
  --pink:         #e8b4b8;
  --pink-dim:     rgba(232, 180, 184, 0.60);
  --pink-ghost:   rgba(232, 180, 184, 0.25);
}
```

| Token | Hex | Role |
|-------|-----|------|
| `--bg-primary` | `#0f0f0f` | Near-black background |
| `--accent` | `#d4a574` | Warm gold/botanical accent |
| `--accent-secondary` / `--pink` | `#e8b4b8` | Soft pink secondary accent |

---

## 3. Typography Rules

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display / Headings | Cormorant | 400 (regular) | `clamp(2.5rem, 6vw, 5rem)` |
| Body / Supporting | IBM Plex Sans | 300 (light) | `clamp(0.75rem, 1.2vw, 1rem)` |
| Labels / Captions | IBM Plex Sans | 400 | `clamp(0.75rem, 1vw, 0.9rem)` |

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500&family=IBM+Plex+Sans:wght@300;400&display=swap');
```

- Cormorant at regular weight — the elegance comes from the serif form, not from bolding.
- IBM Plex Sans light — airy and precise, doesn't compete with the display font.
- **Avoid bold weights.** This theme is about lightness and elegance.

---

## 4. Component Stylings

### Signature Element — Abstract Blurred Gradient Circles
- Large, soft radial gradients positioned off-center:
  ```css
  background:
    radial-gradient(ellipse at 25% 75%, rgba(212, 165, 116, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 75% 25%, rgba(232, 180, 184, 0.10) 0%, transparent 50%),
    var(--bg-primary);
  ```
- Use warm gold and soft pink gradients
- These create atmosphere, not focal points — keep blur high, opacity low

### Thin Accent Lines
- Horizontal or vertical lines: `1px solid var(--accent-ghost)`
- Used as section dividers and decorative framing
- Never thick borders — always 1px

### Buttons
- Primary: `border: 1px solid var(--accent)`, accent text, transparent bg
- Hover: fill with `var(--accent-ghost)`
- Padding: `style={{ padding: '12px 24px' }}`
- Border-radius: 0 — sharp edges match editorial tone

---

## 5. Layout Principles

- **Sparse** — max 40-50% content area (lower than other presets)
- Left-aligned text with generous margins
- Thin accent lines for structure, not boxes
- Let gradient circles fill the empty space with atmosphere

---

## 6. Depth & Elevation

- Depth via gradient circles — they create an ambient sense of space
- No shadows, no elevation
- Thin 1px lines for surface separation

---

## 7. Do's and Don'ts

### Do
- Use serif at regular weight for elegance
- Let gradient circles create atmospheric backgrounds
- Keep content extremely sparse — this theme needs breathing room
- Use thin lines for all structural elements

### Don't
- Bold the display font — the beauty is in lightness
- Use more than 2-3 gradient circles per slide
- Add any solid background cards or boxes
- Use thick borders or heavy visual weight

---

## 8. Responsive Behavior

- Fixed 1280×720 with transform scaling
- Gradient circles use percentage positioning for consistent placement

---

## 9. Agent Prompt Guide

**Quick palette:** bg `#0f0f0f`, warm `#d4a574`, pink `#e8b4b8`, text white
**Fonts:** Cormorant serif 400 (display) + IBM Plex Sans 300 (body)
**Signature:** Abstract blurred gradient circles, thin accent lines, sparse editorial layout, no bold weights

---

## 10. Image Prompt Style Guide

When generating illustrations for slides using this theme:

**Style keywords:** watercolor, botanical, organic, ethereal, soft edges, painterly
**Color guidance:** warm gold `#d4a574` and soft pink `#e8b4b8` on dark `#0f0f0f`, muted warm tones
**Avoid:** hard edges, geometric, neon, digital/tech aesthetic

**Example prompts:**
- Concept: "Watercolor botanical illustration of [concept], organic forms, soft edges, warm gold and pink on dark background, ethereal, 16:9, no text"
- Decorative: "Abstract watercolor blurred circles, warm gold and soft pink, ethereal atmosphere, dark background, 16:9, no text"

---

## 11. Layout Compatibility

- **Tương thích tốt:** Hầu hết mọi layouts (`center`, `image-left`, `image-right`, `two-column`, `grid`, `full-image`).
- **Ghi chú:** Phân bổ chữ thoáng đãng để giữ chiều sâu của nền.
