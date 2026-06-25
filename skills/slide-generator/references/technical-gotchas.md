# Technical Gotchas & Fixes

This document details common development pitfalls and configuration rules that cause build errors or TypeScript failures during slide generation.

---

## 1. Framer Motion Imports

Do not import Framer Motion elements from the wrong package.
* ❌ `import { motion } from 'motion/react';`
* ✅ `import { motion, AnimatePresence } from 'framer-motion';`

---

## 2. TypeScript Easing Array Bug

TypeScript will throw errors when compiling Framer Motion `ease` array configurations because it infers the type as `number[]` instead of a typed 4-tuple.
* **Problem Code:**
  ```typescript
  const EASE = [0.25, 0.1, 0.25, 1]; // inferred as number[]
  ```
* **Fix Code:**
  ```typescript
  const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number];
  ```

Ensure all custom animations typed as `Variants` are explicitly imported:
```typescript
import type { Variants } from 'framer-motion';

export const animations: Record<string, Variants> = {
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } }
  }
};
```

---

## 3. Deployment Configuration

Always configure Vite to build assets with relative path prefixing to support subpath hosting.
* **In `vite.config.ts`:**
  ```typescript
  export default defineConfig({
    base: './',
    plugins: [tailwindcss(), react()],
  });
  ```

---

## 4. Light vs. Dark Background Variables

Ensure progress bars, borders, and general layout overlays consume the theme color variables instead of hardcoded white/black.
* ❌ `<div className="bg-white/5 ...">` (fails on light themes)
* ✅ `<div className="bg-[var(--text-ghost)] ...">` (adapts dynamically)
* ❌ `<div className="bg-[#0a0a0a] min-h-screen">` (hardcoded dark background)
* ✅ `<div className="bg-[var(--bg-primary)] min-h-screen">`
