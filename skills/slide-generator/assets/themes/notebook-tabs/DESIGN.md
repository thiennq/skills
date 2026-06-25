# Notebook Tabs — Slide Deck Design System

> Organized, structured, warm. Paper card on dark background with colored section tabs.

---

## 1. Visual Theme & Atmosphere

- **Mood:** Calm / Focused (Organized)
- **Mode:** Light (paper card on dark outer frame)
- **Density:** Medium — well-organized and readable
- **Philosophy:** A notebook metaphor — warm paper card floats on a dark background. Colored section tabs create chapter divisions. Content feels curated and categorized, like a well-organized journal.

---

## 2. Color Palette & Roles

```css
:root {
  /* Backgrounds */
  --bg-primary: #f8f6f1;
  --bg-secondary: #ffffff;
  --bg-outer: #2d2d2d;

  /* Accent — tab colors (rotate per section) */
  --accent: #4a90d9;
  --accent-glow: rgba(74, 144, 217, 0.3);
  --tab-red: #e74c3c;
  --tab-blue: #4a90d9;
  --tab-green: #27ae60;
  --tab-amber: #f39c12;
  --tab-purple: #9b59b6;

  /* Text scale — 5 levels */
  --text-primary:   #1a1a1a;
  --text-secondary: rgba(26, 26, 26, 0.85);
  --text-muted:     rgba(26, 26, 26, 0.55);
  --text-subtle:    rgba(26, 26, 26, 0.35);
  --text-ghost:     rgba(26, 26, 26, 0.15);

  /* Accent scale */
  --accent-text:  #4a90d9;
  --accent-dim:   rgba(74, 144, 217, 0.60);
  --accent-ghost: rgba(74, 144, 217, 0.25);
}
```

| Token | Hex | Role |
|-------|-----|------|
| `--bg-primary` | `#f8f6f1` | Warm paper surface |
| `--bg-outer` | `#2d2d2d` | Dark outer frame |
| `--tab-*` | various | Colored section tabs |
| `--text-primary` | `#1a1a1a` | Dark text on paper |

---

## 3. Typography Rules

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display / Headings | Bodoni Moda | 700 | `clamp(2rem, 6vw, 5rem)` |
| Body / Supporting | DM Sans | 400 | `clamp(0.75rem, 1.2vw, 1rem)` |
| Labels / Captions | DM Sans | 500 | `clamp(0.75rem, 1vw, 0.9rem)` |

```css
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@700&family=DM+Sans:wght@400;500&display=swap');
```

- Bodoni Moda: elegant high-contrast serif for display — gives a journal/editorial feel.
- DM Sans: clean geometric sans-serif body — readable and modern.

---

## 4. Component Stylings

### Signature Element — Paper Card on Dark Background
- The entire slide content sits inside a warm paper-colored card (`--bg-primary`)
- The card floats on `--bg-outer` dark background with subtle margin
- Card has no border-radius or very minimal (4px)
- No shadow — depth comes from color contrast

### Section Tabs
- Colored tab indicators at the top or side of slides
- One color per major section (rotate through `--tab-*` palette)
- Tab: small rectangle (`40px × 6px`) or text label with colored background
- Helps audience track progress through the presentation

### Buttons
- Primary: `background: var(--accent)`, white text
- Border-radius: 4px
- Padding: `style={{ padding: '12px 24px' }}`

---

## 5. Layout Principles

- Paper card as central container (with outer dark margin)
- Section tabs visible for chapter navigation
- Content left-aligned within the paper card
- Max 60% of card area used for content

---

## 6. Depth & Elevation

- Depth from paper-on-dark contrast — no shadows needed
- Tabs sit on the edge of the paper card
- No glassmorphism, no blur

---

## 7. Do's and Don'ts

### Do
- Maintain the paper/dark frame metaphor consistently
- Use section tabs for clear chapter structure
- Keep warm, off-white tones for the paper surface

### Don't
- Use pure white (`#ffffff`) for the paper — keep it warm
- Add shadows to the paper card
- Use more than 5 tab colors

---

## 8. Responsive Behavior

- Fixed 1280×720 with transform scaling
- Paper card has fixed margins within the frame

---

## 9. Agent Prompt Guide

**Quick palette:** paper `#f8f6f1`, outer `#2d2d2d`, tabs (red/blue/green/amber/purple), text `#1a1a1a`
**Fonts:** Bodoni Moda 700 (display) + DM Sans 400 (body)
**Signature:** Paper card floating on dark background, colored section tabs for chapter navigation

---

## 10. Image Prompt Style Guide

When generating illustrations for slides using this theme:

**Style keywords:** notebook sketch, hand-drawn, stationery, pencil lines, doodle style
**Color guidance:** warm paper tones `#f8f6f1`, colorful tab accents (red, blue, green, amber), charcoal lines
**Avoid:** digital/vector look, neon, dark backgrounds, photorealistic

**Example prompts:**
- Concept: "Hand-drawn notebook sketch illustration of [concept], pencil lines on warm paper, doodle style, colorful tab accents, 16:9, no text"
- Decorative: "Notebook paper texture with hand-drawn doodles, pencil sketches, warm paper tones, stationery aesthetic, 16:9, no text"

---

## 11. Layout Compatibility

- **Tương thích tốt:** Hầu hết mọi layouts (`center`, `image-left`, `image-right`, `two-column`, `grid`, `full-image`).
- **Ghi chú:** Phân bổ chữ thoáng đãng để giữ chiều sâu của nền.
