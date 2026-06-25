# Image Prompt Templates for Slide Illustrations

Thư viện prompt templates để agent compose prompt cho `generate_image` tool.
Mỗi prompt = **[Content]** + **[Style từ DESIGN.md]** + **[Constraints]**.

---

## Prompt Formula

```
[content description], [theme style keywords], [color guidance], [constraints]
```

**Constraints (LUÔN append vào cuối prompt):**
```
16:9 aspect ratio, simple composition, no text overlay, no watermarks,
suitable as slide illustration, clean edges, no stock photo feel
```

---

## By Concept Type

### Technology / Architecture
```
Minimalist [style] illustration of [concept],
clean composition, no text, [color guidance]
```
**Ví dụ:**
- "Minimalist line art illustration of microservices architecture, interconnected nodes, clean composition, no text, orange accent on dark background"
- "Flat vector illustration of a neural network, layered nodes with connections, cyan and magenta on navy background"

### Process / Workflow
```
[style] illustration showing [process metaphor],
sequential flow, [color guidance]
```
**Ví dụ:**
- "Editorial illustration showing a conveyor belt of data transformation, sequential flow, cream and warm brown tones"
- "Bold graphic illustration of a pipeline with stages, left to right flow, electric blue on dark"

### Comparison / Before-After
```
Split composition [style], left side [before], right side [after],
clear visual separator, [color guidance]
```
**Ví dụ:**
- "Split composition illustration, left side chaotic tangled wires, right side clean organized cables, warm palette on cream background"

### Abstract / Metaphor
```
Abstract [style] representation of [metaphor],
symbolic, minimal detail, [color guidance]
```
**Ví dụ:**
- "Abstract geometric representation of scalability, expanding circles, soft pastel blues and pinks"
- "Symbolic illustration of security as a vault door, monochrome green on black"

### Problem / Challenge
```
[style] illustration depicting [problem metaphor],
visual tension, [color guidance]
```
**Ví dụ:**
- "Sketch style illustration of information overload as a funnel overflow, visual tension, warm terracotta on cream"

### Human / Team
```
[style] silhouette illustration of [scenario],
no facial details, abstract figures, [color guidance]
```
**Ví dụ:**
- "Minimalist silhouette illustration of team collaboration, abstract figures around a table, white figures on dark background"

---

## By Theme Style Reference

Dùng bảng này để chọn style keywords phù hợp theme đang dùng.
Chi tiết đầy đủ nằm trong mỗi theme DESIGN.md Section 10.

| Theme | Style Keywords |
|-------|---------------|
| `bold-signal` | bold graphic design, strong contrast, modern, flat shapes |
| `electric-studio` | clean modern vector, minimal, geometric, electric |
| `creative-voltage` | bold pop art, high energy, halftone, electric |
| `dark-botanical` | watercolor, botanical, organic, ethereal, soft edges |
| `notebook-tabs` | notebook sketch, hand-drawn, stationery, pencil lines |
| `pastel-geometry` | soft geometric, pastel, friendly, rounded shapes |
| `vintage-editorial` | editorial illustration, woodcut, engraving, warm |
| `swiss-modern` | Swiss graphic design, geometric, Bauhaus, strict grid |
| `neon-cyber` | cyberpunk digital art, neon glow, futuristic, circuit |
| `terminal-green` | ascii art, pixel art, retro terminal, monochrome |
| `paper-and-ink` | ink illustration, engraving, literary, classical |
| `technical-blueprint` | technical drawing, blueprint sketch, line art, engineering diagram, warm tones |

---

## Technical Concept → Metaphor Mapping

Khi gặp nội dung kỹ thuật / architecture, dùng bảng này để tìm metaphor phù hợp.
Agent PHẢI tham khảo bảng này trước khi quyết định "concept này không cần illustration".

| Concept | Metaphor | Prompt hint |
|---------|----------|-------------|
| Isolated LLM / no tools | Brain in glass dome, trapped genius | brain enclosed in glass jar, isolated from environment |
| Safety guards / permissions | Vault door, shield, lock mechanism | vault safe door with security mechanism |
| Token overflow / context limit | Funnel overflowing, cup running over | funnel with liquid overflowing, too much input |
| Agent Skills + MCP hybrid | Interlocking chain links, puzzle pieces | two interlocking chain links merging together |
| Architecture layers / stack | Layered platform, building floors | stacked platform layers, architectural |
| ReAct loop | Circular gear mechanism, cycle wheel | mechanical gear cycle with 3-4 phases |
| Function Call / translation | Translation bridge, signal converter | translator device converting speech to structured data |
| Tool Use — dual capability | Magnifying glass + lightning bolt | dual symbol: lens for perceiving, bolt for acting |
| Pipeline / multi-step process | Conveyor belt, assembly line | conveyor belt with stages of transformation |
| Evolution / progression | Staircase, ascending path | staircase with stages, each higher than previous |
| Connection / protocol | USB cable, bridge, highway | cable or bridge connecting two separate systems |
| Multi-agent collaboration | Orchestra, team relay race | multiple figures passing a baton or playing instruments |
| Data flow | River, pipes, aqueduct | water flowing through connected pipes |
| Sandboxing / isolation | Container, jar, fenced garden | object contained within protective boundary |

> **Cách dùng:** Tìm concept trong cột 1 → chọn metaphor cột 2 → compose prompt dùng hint cột 3 + style keywords từ DESIGN.md Section 10.

---

## Anti-Patterns — DO NOT include in prompt

- ❌ "photorealistic" — clashes with slide aesthetic
- ❌ "3D render" — too heavy for slide illustrations
- ❌ "clipart" — feels cheap
- ❌ "text" or "words" — AI text in images is unreliable
- ❌ "busy", "detailed", "complex" — illustrations should be simple
- ❌ "watermark", "logo" — obvious

