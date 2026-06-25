# Terminal Green — Slide Deck Design System

> Hacker aesthetic, raw, technical. Monospace everything on dark terminal with scan lines and blinking cursors.

---

## 1. Visual Theme & Atmosphere

- **Mood:** Excited / Energized (Hacker)
- **Mode:** Dark
- **Density:** Medium — code-like structure with deliberate spacing
- **Philosophy:** The terminal IS the presentation. Every element echoes a command-line interface. Scan lines add CRT texture. A blinking cursor signals liveness. Content reads like well-formatted terminal output — monospace, green-on-black, structured by indentation and whitespace.

---

## 2. Color Palette & Roles

```css
:root {
  /* Backgrounds */
  --bg-primary: #0d1117;
  --bg-secondary: #161b22;

  /* Accent */
  --accent: #39d353;
  --accent-glow: rgba(57, 211, 83, 0.3);

  /* Text scale — 5 levels */
  --text-primary:   #39d353;
  --text-secondary: rgba(57, 211, 83, 0.85);
  --text-muted:     rgba(57, 211, 83, 0.55);
  --text-subtle:    rgba(57, 211, 83, 0.35);
  --text-ghost:     rgba(57, 211, 83, 0.15);

  /* Accent scale */
  --accent-text:  #39d353;
  --accent-dim:   rgba(57, 211, 83, 0.60);
  --accent-ghost: rgba(57, 211, 83, 0.25);

  /* Secondary text (for contrast when needed) */
  --text-white:   #ffffff;
}
```

**NOTE:** This theme is unique — `--text-primary` is green, NOT white. All text renders in green tones by default, matching the terminal aesthetic. Use `--text-white` sparingly for maximum-contrast moments.

| Token | Hex | Role |
|-------|-----|------|
| `--bg-primary` | `#0d1117` | GitHub Dark terminal background |
| `--accent` / `--text-primary` | `#39d353` | Terminal green — primary text AND accent |

---

## 3. Typography Rules

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display / Headings | JetBrains Mono | 700 | `clamp(1.5rem, 4vw, 3rem)` |
| Body / Supporting | JetBrains Mono | 400 | `clamp(0.75rem, 1.2vw, 1rem)` |
| Labels / Captions | JetBrains Mono | 400 | `clamp(0.7rem, 1vw, 0.85rem)` |

```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
```

- **Single font: JetBrains Mono** — everything is monospace.
- Display sizes are smaller than other themes to respect terminal proportions.
- Content can include terminal prompt prefixes (`$`, `>`, `#`) for flavor.

---

## 4. Component Stylings

### Signature Element — Scan Lines
- CRT scan line overlay:
  ```css
  .scan-lines::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.15) 2px,
      rgba(0, 0, 0, 0.15) 4px
    );
    pointer-events: none;
  }
  ```
- Apply to the slide container — a subtle CRT texture overlay
- Very subtle — should not impede readability

### Blinking Cursor
- CSS-only blinking cursor for interactive feel:
  ```css
  .cursor::after {
    content: '█';
    animation: blink 1s step-end infinite;
    color: var(--accent);
  }
  @keyframes blink {
    50% { opacity: 0; }
  }
  ```
- Place on the title slide or at the end of key headings
- This is the ONE exception to the "no continuous animations" rule

### Terminal Prompt Style
- Prefix content with terminal symbols: `$ `, `> `, `# `
- Use for section headings or list items
- Adds flavor without being gimmicky

### Buttons / Interactive Elements
- Border: `1px solid var(--accent)`
- Green text, transparent background
- Hover: fill with `var(--accent-ghost)`
- Border-radius: 0 — terminals don't have rounded corners

---

## 5. Layout Principles

- **Left-aligned, monospace grid** — like a terminal window
- Content aligned to character grid (monospace naturally creates this)
- Generous line-height (1.7-1.8) for readability
- Max 50% content area — terminal windows have margins

---

## 6. Depth & Elevation

- Scan lines create a subtle texture layer
- No shadows, no elevation
- Depth through text opacity (green at various alpha levels)

---

## 7. Do's and Don'ts

### Do
- Keep everything monospace — no exceptions
- Use terminal prompt prefixes (`$`, `>`) for flavor
- Apply scan lines subtly across the deck
- Use green text at varying opacities for hierarchy

### Don't
- Use any serif or sans-serif fonts — ONLY monospace
- Use white text as default — green is the primary text color
- Make scan lines too visible — they should be barely perceptible
- Overuse the blinking cursor — once or twice per deck

---

## 8. Responsive Behavior

- Fixed 1280×720 with transform scaling
- Monospace grid naturally maintains alignment

---

## 9. Agent Prompt Guide

**Quick palette:** bg `#0d1117`, text green `#39d353` (all levels), white for emphasis only
**Font:** JetBrains Mono only (400/700)
**Signature:** CRT scan lines overlay, blinking cursor, terminal prompt prefixes, green-on-black everything

---

## 10. Image Prompt Style Guide

When generating illustrations for slides using this theme:

**Style keywords:** ascii art, pixel art, retro terminal, monochrome, CRT scanline, matrix
**Color guidance:** green `#39d353` on black `#0d1117`, strictly monochrome green
**Avoid:** color, organic, watercolor, photorealistic, soft edges

**Example prompts:**
- Concept: "Pixel art retro terminal illustration of [concept], monochrome green on black, CRT scanline effect, ascii aesthetic, 16:9, no text"
- Decorative: "Matrix-style falling characters pattern, green glowing text on black, retro terminal atmosphere, 16:9, no text"

---

## 11. Layout Compatibility

- **Tương thích tốt:** `diagram`, `grid`, `two-column`.
- **Tránh sử dụng:** Các layout bo tròn hoặc chuyển màu không theo khối.
