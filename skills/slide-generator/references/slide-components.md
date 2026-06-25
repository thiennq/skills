# Slide Types & Component Guidelines

This document details the layout specifications, content limits, and concept illustration rules for each type of slide.

---

## 1. Content Density Limits

To prevent visual clutter, each slide must strictly fit within the 1280x720px container. If content exceeds these limits, split it into multiple slides.

| Slide Type | Maximum Content Capacity |
| :--- | :--- |
| **Title Slide** | 1 large heading + 1 subtitle + optional metadata |
| **Content Slide** | 1 heading + 4-6 bullet points OR 1 heading + 2 short paragraphs |
| **Feature Grid** | 1 heading + max 6 cards (2x3 or 3x2 grid) |
| **Chart Slide** | 1 heading + 1 chart (Recharts) |
| **Quote Slide** | 1 quote (max 3 lines) + attribution |
| **Image Slide** | 1 heading + 1 image (max 60% slide height) |

---

## 2. Concept Illustration Metaphor Rule

Purely decorative illustrations are **strictly banned**. Every concept illustration must serve as a specific metaphor for the concept being discussed.

* **Metaphor Mapping Examples:**
  - *Isolated LLM* → Luminous brain trapped inside a glass dome.
  - *System Integration* → Interlocking chain links merging on a blueprint.
  - *Security Boundary* → Steel vault door with biometric lock.
  - *Token Limit* → A funnel overflowing at the neck.
* **Target Visual Ratio:** At least **50% of the slides** in a presentation deck must have a visual element (illustration, chart, or diagram).
* **Generation Formula:** Compose prompts for the `generate_image` tool by combining the content description, style keywords from Section 10 of the theme's `DESIGN.md`, and default constraints (16:9, simple composition, no text overlay).

---

## 3. Component Details

### b. Chart Slide
- Use **Recharts** (BarChart, LineChart, PieChart, AreaChart).
- Style charts using the chosen theme's CSS variables (never use default Recharts colors).
- Animate the chart entrance using a Framer Motion wrapper.

### c. Quote / Callout Slide
- Large text using `clamp(1.5rem, 3vw, 2.5rem)`.
- Left-aligned or centered, max 3 lines.
- Left-side accent line: `border-l border-muted/20` (never solid thick colors).

### d. Metadata Footer
For formal or training documents, include a subtle bottom metadata footer:
- **Left:** Module/Section name.
- **Center:** Tags.
- **Right:** Version or date.
- **Style:** Small monospace text using `clamp(0.5rem, 0.8vw, 0.7rem)` in `var(--text-ghost)` color. Hidden on the Title and Closing slides.
