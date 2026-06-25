# thiennq/skills

> Bộ kỹ năng cá nhân (Agent Skills) tự động hóa quy trình phát triển dự án và quản lý tác vụ dành cho các AI Coding Agents.

Các kỹ năng này tương thích hoàn toàn với các Agent hàng đầu hiện nay như **Antigravity**, **Claude Code**, **Cursor**, **Copilot**... thông qua công cụ quản lý kỹ năng [skills.sh](https://skills.sh).

---

## 🚀 Cài đặt

Bạn có thể dễ dàng cài đặt toàn bộ các kỹ năng của kho lưu trữ này vào thư mục cấu hình của Agent cục bộ bằng lệnh:

```bash
npx skills add thiennq/skills
```

### Cài đặt một kỹ năng cụ thể
Nếu chỉ muốn cài đặt riêng biệt một kỹ năng, hãy thêm cờ `--skill`:

```bash
npx skills add thiennq/skills --skill create-task
```

### Cài đặt toàn cục (Global)
Để cài đặt cho mọi dự án trên máy tính của bạn:

```bash
npx skills add thiennq/skills --global
```

---

| Lệnh Kích hoạt / Tên Skill | Kỹ năng | Mô tả |
| :--- | :--- | :--- |
| `/create-task` | **Tạo Task qua Interview** | Đóng vai trò là Tech Lead/PM AI, thực hiện phỏng vấn người dùng từ 3-5 câu hỏi trắc nghiệm tương tác để tinh chỉnh yêu cầu mơ hồ thành một tệp mô tả công việc (task file) có cấu trúc chuẩn hóa lưu tại `tasks/backlog/`. |
| `/implement-task` | **Thực thi Task từ Backlog** | Đóng vai trò là Senior Engineer AI, quét và tự động thực thi từng checklist trong tệp mô tả công việc ở backlog, tự động đánh dấu hoàn thành và di chuyển tệp kết quả sang thư mục lưu trữ `tasks/done/`. |
| `/create-walkthrough` | **Nhật ký kỹ thuật Session** | Đóng vai trò là Tech Writer, thu thập dữ liệu lịch sử hội thoại (Chat History) và lịch sử Git (Git Log) để tự động viết tệp nhật ký kỹ thuật ghi nhận chi tiết, chân thực các bước làm việc và bài học rút ra của phiên làm việc. |
| `content-writer` | **Biên soạn Nội dung & Kịch bản** | Tự động kích hoạt khi người dùng muốn biên soạn nội dung, kịch bản slide thuyết trình nghệ thuật, bài viết blog, tài liệu đào tạo hoặc tài liệu kỹ thuật chất lượng cao (hỗ trợ các bộ giọng kể / tone giọng phong phú). |
| `slide-generator` | **Sinh Slide Thuyết trình React** | Tự động kích hoạt khi người dùng muốn biên dịch kịch bản slide thành mã nguồn React + Vite + Framer Motion. Tự động áp dụng design system của theme, tối ưu hóa bố cục visual layout và hiệu ứng chuyển động ấn tượng. |

---

## 📄 Bản quyền (License)

Dự án này được cấp phép theo các điều khoản của [Giấy phép MIT (MIT License)](LICENSE).
