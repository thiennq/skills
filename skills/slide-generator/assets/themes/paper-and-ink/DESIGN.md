# Paper & Ink — Slide Deck Design System

> Editorial, elegant, literary. Cream paper with serif typography, drop caps, and pull quotes.

---

## 1. Visual Theme & Atmosphere

- **Mood:** Inspired / Moved (Editorial)
- **Mode:** Light
- **Density:** Low-medium — generous margins, reading-optimized
- **Philosophy:** The printed page as inspiration. This is a literary deck — content is king, and typography is the primary design tool. Drop caps open sections. Pull quotes emphasize key ideas. Elegant horizontal rules create breathing points. The deck should feel like reading a beautifully typeset essay.

---

## 2. Color Palette & Roles

```css
:root {
  /* Backgrounds */
  --bg-primary: #faf9f7;
  --bg-secondary: #ffffff;

  /* Accent */
  --accent: #c41e3a;
  --accent-glow: rgba(196, 30, 58, 0.3);

  /* Text scale — 5 levels */
  --text-primary:   #1a1a1a;
  --text-secondary: rgba(26, 26, 26, 0.85);
  --text-muted:     rgba(26, 26, 26, 0.55);
  --text-subtle:    rgba(26, 26, 26, 0.35);
  --text-ghost:     rgba(26, 26, 26, 0.15);

  /* Accent scale */
  --accent-text:  #c41e3a;
  --accent-dim:   rgba(196, 30, 58, 0.60);
  --accent-ghost: rgba(196, 30, 58, 0.25);
}
```

| Token | Hex | Role |
|-------|-----|------|
| `--bg-primary` | `#faf9f7` | Warm cream paper |
| `--accent` | `#c41e3a` | Deep crimson — editorial accent |
| `--text-primary` | `#1a1a1a` | Charcoal text (not pure black) |

---

## 3. Typography Rules

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display / Headings | Cormorant Garamond | 600 | `clamp(2rem, 6vw, 5rem)` |
| Body / Supporting | Source Serif 4 | 400 | `clamp(0.75rem, 1.2vw, 1rem)` |
| Labels / Captions | Source Serif 4 | 600 | `clamp(0.75rem, 1vw, 0.9rem)` |
| Drop Cap | Cormorant Garamond | 700 | `clamp(3rem, 8vw, 6rem)` |

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Source+Serif+4:wght@400;600&display=swap');
```

- **Both fonts are serif** — this is an editorial deck, sans-serif would undermine the mood.
- Cormorant Garamond: elegant high-contrast display serif with classical proportions.
- Source Serif 4: readable, modern text serif — Google's answer to a proper reading font.
- Exception: this is the only preset that uses two serif families.

---

## 4. Component Stylings

### Signature Element — Drop Caps
- First letter of opening paragraphs styled as drop cap:
  ```css
  .drop-cap::first-letter {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 8vw, 6rem);
    float: left;
    line-height: 0.8;
    padding-right: 8px;
    color: var(--accent);
  }
  ```
- Use on 2-3 slides max — opening/section transitions
- Drop cap in crimson accent color

### Pull Quotes
- Important quotes extracted into visually distinct blocks:
  ```css
  .pull-quote {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-style: italic;
    border-left: 3px solid var(--accent);
    padding-left: 24px;
    color: var(--text-secondary);
  }
  ```
- Positioned as focal points on content slides
- Always italic, always with left accent border

### Elegant Horizontal Rules
- Decorative section dividers:
  ```css
  .hr-elegant {
    border: none;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--text-subtle),
      transparent
    );
    margin: 32px 0;
  }
  ```
- Fading gradient rules that feel like printed page section breaks

### Buttons
- Primary: `border: 2px solid var(--accent)`, crimson text
- Hover: fill with `var(--accent)`, white text
- Border-radius: 0 — editorial sharpness
- Padding: `style={{ padding: '12px 24px' }}`

---

## 5. Layout Principles

- **Reading-optimized** — wide margins, optimal line length (~60 characters)
- Text-heavy slides are OK in this theme (it's editorial)
- Drop caps and pull quotes create visual variety
- Horizontal rules separate sections within slides
- Max 55% content area

---

## 6. Depth & Elevation

- Flat — no shadows, no elevation
- Depth through typography scale and crimson accents
- Horizontal rules create visual breathing points

---

## 7. Do's and Don'ts

### Do
- Use drop caps to open important sections
- Include pull quotes for key takeaways
- Let serif typography carry the visual weight
- Use crimson accent sparingly but boldly

### Don't
- Use any sans-serif fonts — this is a serif-only deck
- Overuse drop caps — 2-3 per deck is enough
- Add geometric shapes or illustrations — let text be the art
- Use more than one accent color

---

## 8. Responsive Behavior

- Fixed 1280×720 with transform scaling
- Drop cap sizing uses `clamp()` for proportional scaling

---

## 9. Agent Prompt Guide

**Quick palette:** cream `#faf9f7`, charcoal `#1a1a1a`, crimson `#c41e3a`
**Fonts:** Cormorant Garamond (display serif) + Source Serif 4 (body serif) — all serif
**Signature:** Drop caps in crimson, pull quotes with left accent border, elegant fading horizontal rules, literary/editorial feel

---

## 10. Image Prompt Style Guide

When generating illustrations for slides using this theme:

**Style keywords:** ink illustration, engraving style, literary, classical, pen and ink, crosshatch
**Color guidance:** cream paper `#faf9f7`, charcoal ink `#1a1a1a`, crimson `#c41e3a` accent sparingly
**Avoid:** bright colors, neon, digital look, flat vector, gradients

**Example prompts:**
- Concept: "Pen and ink engraving illustration of [concept], classical crosshatch style, charcoal on cream paper, crimson accent, literary aesthetic, 16:9, no text"
- Decorative: "Abstract ink engraving pattern, crosshatch lines and flourishes, charcoal on cream, classical literary decoration, 16:9, no text"

---

## 11. Layout Compatibility

- **Tương thích tốt:** Hầu hết mọi layouts (`center`, `image-left`, `image-right`, `two-column`, `grid`, `full-image`).
- **Ghi chú:** Phân bổ chữ thoáng đãng để giữ chiều sâu của nền.
