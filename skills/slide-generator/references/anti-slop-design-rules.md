# Design System & Anti-Slop Rules

This document defines the mandatory visual, typography, and layout rules for slide decks. You must strictly follow these constraints to ensure slides feel premium and handcrafted.

---

## 1. Typography

- **Font Pairing:** Always use the font pairing specified in the chosen theme's `DESIGN.md`. Load from Google Fonts or Fontshare via `@import` in CSS.
- **Maximum Fonts:** No more than 2 font families (1 display, 1 body/label).
- **Alignment:** Never center-align body paragraphs. Always left-align or use deliberate, structured layouts.
- **Responsive Sizing:** All font sizes **MUST** use `clamp(min, preferred, max)` instead of fixed `px` or `rem` values.
  ```css
  --title-size: clamp(2rem, 6vw, 5rem);
  --subtitle-size: clamp(0.875rem, 2vw, 1.25rem);
  --body-size: clamp(0.75rem, 1.2vw, 1rem);
  ```

---

## 2. Color & Background Atmosphere

- **No Inline Colors:** Every text, border, or background color in components **MUST** be defined in CSS variables and accessed via utility classes. Opacity variants like `text-white/30` are banned.
  - ❌ `className="text-white"` → ✅ `className="t-primary"`
  - ❌ `className="border-white/10"` → ✅ `className="border-[var(--text-ghost)]"`
- **Layered Gradients:** Use layered gradients and patterns for background depth rather than flat background colors:
  ```css
  background:
    radial-gradient(ellipse at 20% 80%, rgba(120, 0, 255, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(0, 255, 200, 0.1) 0%, transparent 50%),
    var(--bg-primary);
  ```
- **Atmosphere Pattern:** Dot matrix or grid lines must be very subtle (~5-15% opacity) and consistent across all slides in the deck.

---

## 3. Layout & Scaled Container

- **Fixed Aspect Ratio:** Authored slides are fixed at `1280×720px`. The wrapper co-scales via CSS `transform: scale()` to fit the viewport.
- **Padding Spacing:** Since rem-based spacing is scaled down, elements with visible backgrounds (cards, buttons, tags) **MUST** use inline `style={{ padding: '...' }}` with px values instead of Tailwind padding classes.
  - Minimum horizontal padding for tags/chips: `20px 48px`
  - Minimum padding for content cards: `24px 32px`
- **Generous Whitespace:** Maximum **60%** of the slide area should contain content. The remaining 40% must be empty space to let the content breathe.

---

## 4. Animation Guidelines

- **Default Easing:** Decelerate smoothly using `[0.25, 0.1, 0.25, 1]` (equivalent to `ease-out-expo`).
- **Timing:** 0.4s to 0.6s. Do not exceed 0.8s unless aiming for a specific cinematic transition.
- **Stagger:** Stagger child animations by 0.08s to 0.12s.
- **Banned Animation Styles:** 
  - No high-bounce spring animations.
  - No rotate/spin animations on text.
  - No loop animations unless extremely subtle.
- **Prefers-Reduced-Motion:** Wrap all motion elements with media query checks:
  ```tsx
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const item = prefersReducedMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
  ```
