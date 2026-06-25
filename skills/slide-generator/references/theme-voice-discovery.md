# Theme & Voice Discovery

This guide helps you ask the user for presentation requirements and choose the appropriate design systems.

---

## 1. Step 1: Clarifying Mood & Theme

Before generating any code, ask the user these questions:
1. **Mood (Visual):** What feeling should the audience have?
   - *Impressed / Confident* (Professional, trustworthy)
   - *Excited / Energized* (Innovative, bold)
   - *Calm / Focused* (Clear, minimal)
   - *Inspired / Moved* (Memorable, elegant)
2. **Voice (Storytelling):** What storytelling style should drive the narrative?
   - *NotebookLM* (Pedagogical Sense-Maker, analogical)
   - *Kurzgesagt* (Optimistic Nihilist, dramatic setup)
   - *Neutral* (Straightforward summary, no narrative reshaping)

---

## 2. Theme Catalog Reference

Suggest 2-3 of these options based on the chosen mood. All theme files live in `assets/themes/`.

| Theme | Mode | Mood | Typography Display & Body |
| :--- | :--- | :--- | :--- |
| `bold-signal` | Dark | Confident | Archivo Black + Space Grotesk |
| `electric-studio` | Dark | Confident | Manrope, two-panel vertical split |
| `creative-voltage` | Dark | Energized | Syne + Space Mono |
| `dark-botanical` | Dark | Inspired | Cormorant serif + IBM Plex Sans |
| `notebook-tabs` | Light | Organized | Bodoni Moda + DM Sans |
| `pastel-geometry` | Light | Friendly | Plus Jakarta Sans, soft shadow |
| `vintage-editorial` | Light | Inspired | Fraunces serif + Work Sans |
| `swiss-modern` | Light | Focused | Archivo + Nunito |
| `technical-blueprint` | Light | Technical | Cormorant italic + Source Sans 3 |

---

## 3. Workflow for Theme Application

Once the theme is selected:
1. Read the theme's `DESIGN.md` file using `view_file`.
2. Copy the CSS variables from the theme into `src/index.css`.
3. Load the fonts specified in the theme's Typography section via `@import` in `src/index.css`.
4. Apply the theme's **Signature Element** on the Title Slide and section dividers.

---

## 4. Theme-Layout Matching Rules (For the Director Role)

Khi lên dàn ý ở Pha 1, Agent với tư cách là **Director** phải đảm bảo sự ăn khớp tuyệt đối giữa bố cục nội dung (Layout) và đặc tính trực quan của chủ đề (Theme Background/Decorations):

| Đặc trưng Visual của Theme | Bố cục Layout khuyến nghị | Quy tắc bố cục (Layout constraints) |
| :--- | :--- | :--- |
| **Two-Panel Vertical Split**<br>(Ví dụ: `electric-studio`) | `image-left`, `image-right`, `two-column` | Nội dung phải được phân bổ đều vào 2 nửa màn hình đứng. Tránh layout `center` (nội dung nằm giữa ranh giới chia đôi trông rất mất cân đối). |
| **Right-side Detail / Off-center Accent**<br>(Ví dụ: `swiss-modern` có chi tiết góc phải, `bold-signal` nhấn lệch phải) | `image-left`, hoặc nội dung lệch trái | Sử dụng các layout có văn bản chiếm 50-60% bên trái để chừa khoảng trống trực quan (negative space) cho các điểm nhấn góc phải của theme. |
| **Grid Paper / Dot Matrix Background**<br>(Ví dụ: `technical-blueprint`, `terminal-green`) | `diagram`, `grid`, `two-column` | Các thành phần nội dung phải được sắp xếp thẳng hàng, vuông vức bám sát lưới kẻ ô. Cực kỳ phù hợp cho sơ đồ quy trình và bảng so sánh. |
| **Soft Gradient Spheres / Minimal Cream**<br>(Ví dụ: `dark-botanical`, `vintage-editorial`) | `center` (với quote), `full-image` | Thích hợp cho các layout thoáng đãng, chữ lớn đặt ở tâm hoặc lệch nhẹ để giữ nguyên chiều sâu của các lớp gradient nền phía sau. |

**Quy tắc bất di bất dịch:** Cấm đặt chữ đè lên các hoạ tiết đặc trưng (signature elements) hoặc góc nhấn có độ tương phản cao của Theme. Luôn chừa tối thiểu 40% diện tích slide làm khoảng trống trực quan (negative space).
