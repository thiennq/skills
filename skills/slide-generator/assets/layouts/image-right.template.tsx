import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import { animations } from '../lib/animations';

export default function Slide{{SLIDE_INDEX}}() {
  return (
    <SlideLayout>
      <div 
        className="grid grid-cols-12 gap-8 h-full items-center" 
        style={{ padding: '{{PADDING}}' }}
      >
        {/* Cột trái: Nội dung chữ */}
        <div className="col-span-7 flex flex-col justify-center">
          {{#if SUBTITLE}}
          <motion.span 
            className="slide-label mb-2"
            variants={animations.item}
            initial="hidden"
            animate="show"
          >
            {{SUBTITLE}}
          </motion.span>
          {{/if}}
          
          <motion.h2 
            className="slide-title mb-6"
            variants={animations.item}
            initial="hidden"
            animate="show"
          >
            {{TITLE}}
          </motion.h2>

          <motion.div 
            className="slide-body space-y-4"
            variants={animations.container}
            initial="hidden"
            animate="show"
          >
            {{BULLET_POINTS}}
          </motion.div>
        </div>

        {/* Cột phải: Hình ảnh */}
        <motion.div 
          className="col-span-5 h-[420px] rounded-lg overflow-hidden border border-[var(--text-ghost)]"
          variants={animations.item}
          initial="hidden"
          animate="show"
        >
          <img 
            src="{{IMAGE_PATH}}" 
            alt="{{TITLE}}" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </SlideLayout>
  );
}
