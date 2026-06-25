# Outline Specification & Example

The file `slides/outline.md` is the **single source of truth** for Phase 2 (Code implementation). It must be self-contained so that Phase 2 does not need to re-read any original source document.

---

## 1. Specification Header

The header must specify the meta configurations:
```markdown
# [Presentation Title]

**Theme:** [theme-slug]
**Voice:** [voice-slug | neutral]
**Language:** [e.g., Tiếng Việt | English]
**Total slides:** [N]
```

* **Important:** `Total slides` must match the exact number of slides listed below the header (excluding the title slide).

---

## 2. Per-Slide Structure

Each slide is separated by `---` and must contain the following block structure:

```markdown
[//]: # (N)
## Short Name

**Title:** [Display Title]
**Layout:** [Layout Keyword]
**Subtitle:** [Optional - Divider/Title slides only]
**Description:** [Optional - Key message summary]

- Bullet Point 1
- Bullet Point 2
- ...

[img-gen] [Visual metaphor prompt text with style modifiers] [/img-gen]
```

### Layout Keywords:
* `center` — Content centered (Title slide, Closing, Quotes)
* `image-left` / `image-right` — Text content side-by-side with illustration
* `two-column` — Two equal-width text columns
* `grid` — 2x2 or 2x3 cards layout
* `diagram` — Reserved for SVG/CSS flowchart code
* `full-image` — Full screen image background
* `absolute` — Custom absolute coordinate layout. Requires using `[textbox top="..." left="..." width="..."]...[/textbox]` block tags to place text boxes at arbitrary positions. Support multi-line texts and custom coordinates.

---

## 3. Full Example Outline

```markdown
# Architectures for AI Agent Capabilities

**Theme:** technical-blueprint
**Voice:** notebooklm
**Language:** Tiếng Việt
**Total slides:** 3

---

[//]: # (title)
## Title Slide

**Title:** Bản Thiết Kế Động Cơ AI Agent
**Subtitle:** Từ Function Calling đến Tích hợp Hệ thống Tiêu chuẩn
**Layout:** center

[img-gen] A glowing CPU chip labeled "LLM Core" on a blueprint grid paper, connected to database cylinders and terminal screens via golden circuit traces, warm terracotta and navy palette, technical illustration style, 16:9, no text overlay [/img-gen]

---

[//]: # (1)
## Nghịch lý LLM

**Title:** Nghịch lý của LLM: Một bộ não thiên tài bị cô lập
**Layout:** image-left
**Description:** LLM cực giỏi suy luận nhưng hoàn toàn thụ động — không thể đọc file hay gửi email.

- Chỉ nhận Text-in và xuất Text-out
- Chỉ có dữ liệu huấn luyện tĩnh
- Không thể tương tác với thế giới thực

[img-gen] A luminous brain trapped inside a glass dome on a wooden desk, surrounded by unreachable objects (files, clouds, envelopes, databases) floating outside, warm terracotta accents, hand-drawn sketch style on grid paper, 16:9, no text [/img-gen]

---

[//]: # (2)
## Hành trình tiến hoá

**Title:** Công cụ đầu tiên: Khi LLM học cầm chìa khoá
**Layout:** diagram
**Description:** Function Calling là bước đột phá đầu tiên — LLM không còn chỉ nói, nó bắt đầu làm.

[diagram] Flowchart: User → LLM → Tool Selection → Execution → Result → LLM → Response [/diagram]

---

[//]: # (3)
## Bố cục tự do absolute
**Title:** Sơ đồ tương tác Phức hợp
**Layout:** absolute

[textbox top="120px" left="100px" width="300px"]
**Khối điều khiển chính**
- Nhận input trực tiếp từ người dùng
- Kiểm tra tính hợp lệ dữ liệu
[/textbox]

[textbox top="250px" left="480px" width="320px"]
**Động cơ suy luận (LLM Core)**
Phân tích ngữ cảnh,
Đưa ra quyết định gọi Tool
[/textbox]

[textbox top="400px" left="860px" width="300px"]
**Bộ nhớ đệm (Cache)**
Tối ưu hóa thời gian phản hồi
[/textbox]

[img-gen] Abstract system architecture blueprint showing interconnected nodes, navy blue and copper accents, high-tech engineering drawing style, 16:9 [/img-gen]
```
