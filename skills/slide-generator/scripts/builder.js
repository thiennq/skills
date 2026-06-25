const fs = require('fs');
const path = require('path');

// Đọc tham số dòng lệnh
const args = process.argv.slice(2);
const outlinePath = args[0] || 'slides/outline.md';
const outputDir = args[1] || 'src/slides';
const cssPath = args[2] || 'src/index.css';

console.log(`🚀 Starting programmatic slide generator...`);
console.log(`📖 Reading outline: ${outlinePath}`);

if (!fs.existsSync(outlinePath)) {
  console.error(`❌ Error: Outline file not found at ${outlinePath}`);
  process.exit(1);
}

// 1. Phân tích cú pháp outline.md
function parseOutline(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const slides = [];
  
  // Trích xuất metadata
  const themeMatch = content.match(/\*\*Theme:\*\*\s*(.*)/);
  const theme = themeMatch ? themeMatch[1].trim() : 'technical-blueprint';
  
  const languageMatch = content.match(/\*\*Language:\*\*\s*(.*)/);
  const language = languageMatch ? languageMatch[1].trim() : 'Tiếng Việt';

  // Tách slide theo ký tự phân tách "---"
  const blocks = content.split('\n---\n');
  const slideBlocks = blocks.slice(1); // Bỏ qua header đầu tiên
  
  slideBlocks.forEach((block) => {
    if (!block.trim()) return;
    
    const lines = block.split('\n');
    const slide = { bullets: [] };
    
    lines.forEach((line) => {
      const cleanLine = line.trim();
      if (cleanLine.startsWith('[//]: #')) {
        slide.index = cleanLine.match(/\((.*)\)/)[1];
      } else if (cleanLine.startsWith('## ')) {
        slide.shortName = cleanLine.replace('## ', '').trim();
      } else if (cleanLine.startsWith('**Title:**')) {
        slide.title = cleanLine.replace('**Title:**', '').trim();
      } else if (cleanLine.startsWith('**Layout:**')) {
        slide.layout = cleanLine.replace('**Layout:**', '').trim();
      } else if (cleanLine.startsWith('**Subtitle:**')) {
        slide.subtitle = cleanLine.replace('**Subtitle:**', '').trim();
      } else if (cleanLine.startsWith('**Description:**')) {
        slide.description = cleanLine.replace('**Description:**', '').trim();
      } else if (cleanLine.startsWith('- ')) {
        slide.bullets.push(cleanLine.replace('- ', '').trim());
      } else if (cleanLine.startsWith('[img-gen]')) {
        slide.imagePrompt = cleanLine.replace('[img-gen]', '').replace('[/img-gen]', '').trim();
      } else if (cleanLine.startsWith('[diagram]')) {
        slide.diagramRaw = cleanLine.replace('[diagram]', '').replace('[/diagram]', '').trim();
      }
    });
    
    if (slide.index) {
      slides.push(slide);
    }
  });
  
  return { theme, language, slides };
}

const { theme, language, slides } = parseOutline(outlinePath);
console.log(`🎨 Detected Theme: ${theme}`);
console.log(`🗣️ Detected Language: ${language}`);
console.log(`📊 Total Slides parsed: ${slides.length}`);

// 2. Đọc cấu hình Theme và Layouts mẫu
const skillDir = path.dirname(__dirname); // Thư mục slide-generator
const themesDir = path.join(skillDir, 'assets', 'themes');
const layoutsDir = path.join(skillDir, 'assets', 'layouts');

const themeTokenPath = path.join(themesDir, theme, 'design-tokens.json');

if (!fs.existsSync(themeTokenPath)) {
  console.error(`❌ Error: design-tokens.json not found for theme '${theme}' at ${themeTokenPath}`);
  process.exit(1);
}

const currentTheme = JSON.parse(fs.readFileSync(themeTokenPath, 'utf-8'));

// 3. Xử lý padding ăn khớp (Theme-Layout compatibility)
function getPaddingForSlide(themeName, layout) {
  // Swiss Modern và Bold Signal có chi tiết trang trí đặc biệt lệch phải
  const isRightHeavyTheme = ['swiss-modern', 'bold-signal'].includes(themeName);
  
  if (isRightHeavyTheme) {
    if (layout === 'image-left' || layout === 'two-column' || layout === 'grid') {
      // Dịch toàn bộ nội dung sang trái để chừa khoảng trống bên phải
      return '40px 160px 40px 40px';
    }
  }
  return '40px';
}

// Hàm render bullet points sang React component
function renderBullets(bullets) {
  return bullets.map(b => `            <motion.p className="t-secondary" variants={animations.item}>${b}</motion.p>`).join('\n');
}

// Helper giải quyết logic block {{#if KEY}} ... {{/if}}
function resolveIfBlocks(template, data) {
  return template.replace(/\{\{#if (\w+)\}\}([\s\S]*?)\{\{\/if\}\}/g, (match, key, blockContent) => {
    if (data[key]) {
      return blockContent;
    }
    return '';
  });
}

function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
  str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
  str = str.replace(/đ/g,"d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|E|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  return str;
}

// 4. Tạo thư mục output slides
fs.mkdirSync(outputDir, { recursive: true });

const generatedFiles = [];

// 5. Sinh mã nguồn slide components
slides.forEach((slide) => {
  const layout = slide.layout || 'center';
  const templatePath = path.join(layoutsDir, `${layout}.template.tsx`);
  
  if (!fs.existsSync(templatePath)) {
    console.warn(`⚠️ Warning: Template not found for layout '${layout}'. Falling back to 'center'.`);
  }
  
  const actualTemplatePath = fs.existsSync(templatePath) ? templatePath : path.join(layoutsDir, 'center.template.tsx');
  let template = fs.readFileSync(actualTemplatePath, 'utf-8');
  
  // Thiết lập đường dẫn hình ảnh mặc định hoặc tuỳ biến
  const slideNum = slide.index === 'title' ? '00' : slide.index.padStart(2, '0');
  const kebabName = slide.shortName ? removeVietnameseTones(slide.shortName).toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'slide';
  const imgName = `slide-${slideNum}-${kebabName}.webp`;
  const imagePath = `/images/${imgName}`;
  
  // Tính toán padding ăn khớp
  const padding = getPaddingForSlide(theme, layout);
  
  // Chuẩn bị dữ liệu thay thế
  const data = {
    SLIDE_INDEX: slide.index === 'title' ? 'Title' : slide.index,
    TITLE: slide.title || '',
    SUBTITLE: slide.subtitle || '',
    DESCRIPTION: slide.description || '',
    IMAGE_PATH: imagePath,
    PADDING: padding
  };
  
  // Xử lý block điều kiện trước
  template = resolveIfBlocks(template, data);
  
  // Thay thế các token tiêu chuẩn
  let code = template
    .replace(/\{\{SLIDE_INDEX\}\}/g, data.SLIDE_INDEX)
    .replace(/\{\{TITLE\}\}/g, data.TITLE)
    .replace(/\{\{SUBTITLE\}\}/g, data.SUBTITLE)
    .replace(/\{\{DESCRIPTION\}\}/g, data.DESCRIPTION)
    .replace(/\{\{IMAGE_PATH\}\}/g, data.IMAGE_PATH)
    .replace(/\{\{PADDING\}\}/g, data.PADDING);
    
  // Xử lý các placeholder đặc thù từng layout
  if (layout === 'two-column') {
    const half = Math.ceil(slide.bullets.length / 2);
    const col1 = slide.bullets.slice(0, half);
    const col2 = slide.bullets.slice(half);
    code = code
      .replace(/\{\{COLUMN_ONE_CONTENT\}\}/g, renderBullets(col1))
      .replace(/\{\{COLUMN_TWO_CONTENT\}\}/g, renderBullets(col2));
  } else if (layout === 'grid') {
    const gridItems = slide.bullets.map(b => {
      return `          <motion.div 
            className="p-6 rounded-lg border border-[var(--text-ghost)] bg-[var(--bg-secondary)]" 
            variants={animations.item}
            style={{ padding: '24px 32px' }}
          >
            <p className="t-secondary font-medium">${b}</p>
          </motion.div>`;
    }).join('\n');
    code = code.replace(/\{\{GRID_ITEMS\}\}/g, gridItems);
  } else if (layout === 'diagram') {
    // Sơ đồ mặc định đơn giản bằng CSS/SVG nếu không có mô tả diagram chi tiết
    const defaultDiagram = `
          <div className="flex flex-col items-center justify-center p-8 space-y-4">
            <div className="px-6 py-3 rounded-lg border border-[var(--accent-dim)] bg-[var(--bg-primary)] t-accent font-medium">Input</div>
            <div className="w-0.5 h-8 bg-[var(--text-ghost)]"></div>
            <div className="px-6 py-3 rounded-lg border border-[var(--accent-secondary-dim)] bg-[var(--bg-primary)] t-primary font-medium">Processing</div>
            <div className="w-0.5 h-8 bg-[var(--text-ghost)]"></div>
            <div className="px-6 py-3 rounded-lg border border-[var(--accent-dim)] bg-[var(--bg-primary)] t-accent font-medium">Output</div>
          </div>
    `;
    code = code.replace(/\{\{DIAGRAM_CODE\}\}/g, defaultDiagram);
  } else {
    // Các layout thông thường (center, image-left, image-right)
    code = code.replace(/\{\{BULLET_POINTS\}\}/g, renderBullets(slide.bullets));
  }
  
  // Ghi tệp Component React ra đĩa
  const fileName = `${slideNum}-${kebabName}.tsx`;
  const fileFullPath = path.join(outputDir, fileName);
  fs.writeFileSync(fileFullPath, code, 'utf-8');
  console.log(`  ✓ Generated slide: ${fileName}`);
  
  generatedFiles.push({
    index: slide.index,
    componentName: `Slide${data.SLIDE_INDEX}`,
    fileName: `./${slideNum}-${kebabName}`
  });
});

// 6. Sinh tệp export index.ts
let indexCode = `// Generated by programmatic slide builder. Do not edit manually.
`;
generatedFiles.forEach(f => {
  indexCode += `import ${f.componentName} from '${f.fileName}';\n`;
});
indexCode += `\nexport const slides = [\n`;
generatedFiles.forEach(f => {
  indexCode += `  ${f.componentName},\n`;
});
indexCode += `];\n`;

const indexFullPath = path.join(outputDir, 'index.ts');
fs.writeFileSync(indexFullPath, indexCode, 'utf-8');
console.log(`  ✓ Generated index export: ${indexFullPath}`);

// 7. Ghi đè tệp index.css để đồng bộ Theme Variables & Fonts
fs.mkdirSync(path.dirname(cssPath), { recursive: true });

let cssCode = `/* Theme Variables & Fonts (Sync from ${theme}) */
${currentTheme.fonts}

:root {
`;

Object.keys(currentTheme.variables).forEach((key) => {
  cssCode += `  ${key}: ${currentTheme.variables[key]};\n`;
});

cssCode += `}

/* Base style utilities */
.t-primary   { color: var(--text-primary);   }
.t-secondary { color: var(--text-secondary); }
.t-muted     { color: var(--text-muted);     }
.t-subtle    { color: var(--text-subtle);    }
.t-ghost     { color: var(--text-ghost);     }

.t-accent       { color: var(--accent-text);  }
.t-accent-dim   { color: var(--accent-dim);   }
.t-accent-ghost { color: var(--accent-ghost); }

.slide-title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.15;
  color: var(--text-primary);
}

.slide-label {
  font-size: clamp(0.7rem, 1vw, 0.9rem);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
}

.slide-body {
  font-size: clamp(0.85rem, 1.3vw, 1.1rem);
  color: var(--text-secondary);
  line-height: 1.6;
}
`;

fs.writeFileSync(cssPath, cssCode, 'utf-8');
console.log(`  ✓ Synced index.css variables: ${cssPath}`);

console.log(`🎉 Programmatic slide generation completed successfully!`);
