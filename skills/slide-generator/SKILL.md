---
name: slide-generator
description: Use when building browser-based presentation slide decks, creating React+Vite presentation slides with animations, or generating professional presentations from an outline. Triggers on slide deck, presentation, Vite slides, React slides, Framer Motion slides.
metadata:
  author: "thiennq"
  version: "1.0.0"
---

# Slide Generator — Technical Instructions

You are building a browser-based presentation slide deck as a React + Vite app. Your job is to produce slides that feel handcrafted, premium, and intentional.

---

## 1. Project Structure

Ensure the React+Vite project uses the following directory layout:
```
slides/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── src/
│   ├── main.tsx
│   ├── App.tsx          # Slide deck shell, navigation, keyboard controls
│   ├── index.css        # Tailwind imports + custom fonts + base styles
│   ├── slides/
│   │   ├── index.ts     # Export ordered array of all slides
│   │   └── ...          # Slide page components
│   ├── components/
│   │   ├── SlideLayout.tsx      # Viewport scale & padding wrapper
│   │   └── ...
│   └── lib/
│       ├── useSlideScale.ts # Hook for scaling the fixed 1280x720 container
│       └── ...
```

---

## 2. Refined Reference Manuals

Before coding or formatting the layout, you **MUST** consult these specialized guidebooks:
- [theme-voice-discovery.md](file:///Users/thiennq/workspace/personal/skills-dev/src/skills/slide-generator/references/theme-voice-discovery.md) — Ask user questions, choose theme/voice design variables.
- [outline-spec.md](file:///Users/thiennq/workspace/personal/skills-dev/src/skills/slide-generator/examples/outline-spec.md) — Dàn ý kịch bản chuẩn cho slide.
- [anti-slop-design-rules.md](file:///Users/thiennq/workspace/personal/skills-dev/src/skills/slide-generator/references/anti-slop-design-rules.md) — Quy tắc thiết kế typography (`clamp()`), layout, animation.
- [slide-components.md](file:///Users/thiennq/workspace/personal/skills-dev/src/skills/slide-generator/references/slide-components.md) — Các loại slide, metadata, ảnh ẩn dụ (metaphors).
- [technical-gotchas.md](file:///Users/thiennq/workspace/personal/skills-dev/src/skills/slide-generator/references/technical-gotchas.md) — Sửa lỗi TypeScript (ease array type) và thư viện Framer Motion/Recharts.

---

## 3. Workflow — 2-Phase Generation

### Phase 1: Planning & Outline
0. **Content Check:** Nếu người dùng chưa có kịch bản slide hoặc nội dung chữ thô đã được chuẩn bị tốt, hãy khuyên họ sử dụng skill `content-writer` trước: *"Để kịch bản slide có chiều sâu và giọng điệu cuốn hút, bạn nên dùng skill `content-writer` để soạn thảo nội dung thô trước khi tôi tiến hành thiết kế layout."*
1. **Ask the User** for theme, topic, and language (consult [theme-voice-discovery.md](file:///Users/thiennq/workspace/personal/skills-dev/src/skills/slide-generator/references/theme-voice-discovery.md)).
2. **Write `slides/outline.md`** following the format in [outline-spec.md](file:///Users/thiennq/workspace/personal/skills-dev/src/skills/slide-generator/examples/outline-spec.md). Mark AI-generated illustrations with `[img-gen]`. Do **NOT** generate images yet.
3. **Present the Approval Flow:**
   ```
   Outline đã sẵn sàng tại `slides/outline.md`.
   📋 Tóm tắt:
   - Tổng số slide: [N]
   - Theme: [theme-name]
   - Ngôn ngữ: [language]

   Bạn muốn:
   1. ✅ Review outline trước — Tôi dừng lại để bạn chỉnh sửa outline.md. Khi xong hãy nhắn "code" để tôi tiến hành pha 2.
   2. 🚀 Tiếp tục code ngay — Tôi generate ảnh và build slides theo outline hiện tại.
   ```
   **STOP.** Wait for the user's input.

### Phase 2: Implementation (Automated Slide Generation)
Phase này yêu cầu AI đóng vai trò làm **Developer** thực thi cơ học bằng cách chạy script tự động để đảm bảo tính trung thực tuyệt đối 1:1 với dàn ý:
4. **Generate images:** Cho mỗi tag `[img-gen]` trong outline, gọi công cụ `generate_image` với đúng prompt và lưu vào `public/images/slide-{N}-{description}.webp`.
5. **Execute Builder Script:** Thay vì viết code JSX thủ công, chạy lệnh Node.js sau để tự động biên dịch kịch bản thành slide components và đồng bộ theme CSS:
   ```bash
   node scripts/builder.js
   ```
6. **Custom/Fine-tune (Optional):** Chỉ mở các file slide component (trong `src/slides/`) để tinh chỉnh hoặc thêm mã custom (ví dụ: chèn mã SVG custom cho slide diagram hoặc logic tương tác nâng cao) nếu người dùng yêu cầu rõ ràng. Do not touch structural style/padding unless modifying layouts.

---

## 4. Build & Run

```bash
npm install
npm run dev
```

---

## 5. Quality Checklist

- [ ] `npm run dev` and `npx vite build` pass without errors.
- [ ] TypeScript compiles cleanly without errors (`npx tsc --noEmit`).
- [ ] Slide container fixed at `1280x720` and scaled uniformly via hook (no scrollbars).
- [ ] No inline text color definitions — all color classes use theme-defined CSS variables (`.t-primary`, etc.).
- [ ] All text font sizes use responsive `clamp()` functions.
- [ ] Spacing for backgrounds uses inline px styles (`style={{ padding: '...' }}`) to prevent layout shrinking.
- [ ] All concept images exist in `public/images/` and represent a clear metaphor.
- [ ] All slides are rendered strictly 1:1 with `outline.md` contents without any text modifications or structural deviations.
