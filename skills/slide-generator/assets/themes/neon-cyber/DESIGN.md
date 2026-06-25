# Neon Cyber — Slide Deck Design System

> Techy, futuristic, electric. Neon glow on deep navy with grid patterns and particle-like effects.

---

## 1. Visual Theme & Atmosphere

- **Mood:** Excited / Energized (Techy)
- **Mode:** Dark
- **Density:** Medium — structured by grid, energized by neon
- **Philosophy:** Cyberpunk-meets-data-visualization. The deep navy canvas is a void that neon light cuts through. Grid patterns provide structural backbone. Particle-like dot effects suggest digital data in motion. This theme commands attention and signals cutting-edge technology.

---

## 2. Color Palette & Roles

```css
:root {
  /* Backgrounds */
  --bg-primary: #0a0f1c;
  --bg-secondary: #111827;

  /* Accent */
  --accent: #00ffcc;
  --accent-secondary: #ff00aa;
  --accent-glow: rgba(0, 255, 204, 0.3);

  /* Text scale — 5 levels */
  --text-primary:   #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.85);
  --text-muted:     rgba(255, 255, 255, 0.55);
  --text-subtle:    rgba(255, 255, 255, 0.35);
  --text-ghost:     rgba(255, 255, 255, 0.15);

  /* Accent scale */
  --accent-text:  #00ffcc;
  --accent-dim:   rgba(0, 255, 204, 0.60);
  --accent-ghost: rgba(0, 255, 204, 0.25);
  --magenta:      #ff00aa;
  --magenta-dim:  rgba(255, 0, 170, 0.60);
  --magenta-ghost: rgba(255, 0, 170, 0.25);
}
```

| Token | Hex | Role |
|-------|-----|------|
| `--bg-primary` | `#0a0f1c` | Deep navy void |
| `--accent` | `#00ffcc` | Neon cyan — primary light |
| `--accent-secondary` / `--magenta` | `#ff00aa` | Magenta — secondary energy |

---

## 3. Typography Rules

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display / Headings | Clash Display | 700 | `clamp(2rem, 6vw, 5rem)` |
| Body / Supporting | Satoshi | 400 | `clamp(0.75rem, 1.2vw, 1rem)` |
| Labels / Captions | Satoshi | 500 | `clamp(0.75rem, 1vw, 0.9rem)` |

```css
/* Fontshare imports */
@import url('https://api.fontshare.com/v2/css?f[]=clash-display@700&f[]=satoshi@400,500&display=swap');
```

- Clash Display: sharp geometric display font with futuristic character — available from Fontshare.
- Satoshi: clean, modern sans-serif body — pairs well with geometric display.
- **Fallback:** If Fontshare unavailable, use `Space Grotesk` (display) + `Inter` (body) from Google Fonts.

---

## 4. Component Stylings

### Signature Element — Neon Glow
- Key elements get neon glow effect:
  ```css
  box-shadow: 0 0 20px var(--accent-glow), 0 0 60px rgba(0, 255, 204, 0.1);
  border: 1px solid var(--accent-dim);
  ```
- Apply to: accent borders, key data points, highlighted text underlines
- Use cyan glow as primary, magenta as secondary/contrast

### Grid Pattern Background
- Subtle grid on slide background:
  ```css
  background-image:
    linear-gradient(rgba(0, 255, 204, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 204, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  ```
- Grid uses accent color at very low opacity

### Particle-Like Effects
- Small dots (2-4px) scattered in patterns
- Use `radial-gradient` circles at low opacity
- Suggest data points or digital particles in motion
- Static positioning — NOT animated particles (performance)

### Buttons
- Primary: `border: 1px solid var(--accent)`, cyan text, transparent bg, neon glow on hover
- Padding: `style={{ padding: '14px 28px' }}`
- Border-radius: 4px

---

## 5. Layout Principles

- Grid pattern as visual foundation
- Neon accent creates focal hierarchy
- Cyan for primary information, magenta for secondary/contrast
- Max 60% content area — the dark void is part of the design

---

## 6. Depth & Elevation

- Neon glow creates depth: `box-shadow: 0 0 20px var(--accent-glow)`
- Multiple glow layers for intensity variation
- No traditional shadows — only light-based depth

---

## 7. Do's and Don'ts

### Do
- Use neon glow sparingly — on 2-3 key elements per slide
- Let cyan and magenta create complementary tension
- Keep grid pattern very subtle (5% opacity max)

### Don't
- Glow everything — defeats the purpose
- Use equal amounts of cyan and magenta — one leads
- Add particle animations — static dots only (performance)

---

## 8. Responsive Behavior

- Fixed 1280×720 with transform scaling
- Grid and glow effects use fixed values for consistency

---

## 9. Agent Prompt Guide

**Quick palette:** bg `#0a0f1c`, cyan `#00ffcc`, magenta `#ff00aa`, text white
**Fonts:** Clash Display (Fontshare) or Space Grotesk fallback (display) + Satoshi or Inter fallback (body)
**Signature:** Neon glow effects, subtle grid pattern background, particle-like dot effects, cyan+magenta dual accent

---

## 10. Image Prompt Style Guide

When generating illustrations for slides using this theme:

**Style keywords:** cyberpunk digital art, neon glow, futuristic, circuit patterns, glitch aesthetic
**Color guidance:** cyan `#00ffcc` and magenta `#ff00aa` on navy `#0a0f1c`, neon glow effects
**Avoid:** warm tones, organic/natural, hand-drawn, muted palettes

**Example prompts:**
- Concept: "Cyberpunk digital art illustration of [concept], neon glow effects, cyan and magenta on dark navy, futuristic, 16:9, no text"
- Decorative: "Abstract circuit pattern with neon glow, cyan and magenta lights on dark navy, cyberpunk atmosphere, 16:9, no text"

---

## 11. Layout Compatibility

- **Tương thích tốt:** Hầu hết mọi layouts (`center`, `image-left`, `image-right`, `two-column`, `grid`, `full-image`).
- **Ghi chú:** Phân bổ chữ thoáng đãng để giữ chiều sâu của nền.
