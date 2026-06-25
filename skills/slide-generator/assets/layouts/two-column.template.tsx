import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import { animations } from '../lib/animations';

export default function Slide{{SLIDE_INDEX}}() {
  return (
    <SlideLayout>
      <div 
        className="flex flex-col justify-center h-full" 
        style={{ padding: '{{PADDING}}' }}
      >
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
          className="slide-title mb-8"
          variants={animations.item}
          initial="hidden"
          animate="show"
        >
          {{TITLE}}
        </motion.h2>

        <div className="grid grid-cols-2 gap-12">
          {/* Cột trái */}
          <motion.div 
            className="space-y-4"
            variants={animations.container}
            initial="hidden"
            animate="show"
          >
            {{COLUMN_ONE_CONTENT}}
          </motion.div>

          {/* Cột phải */}
          <motion.div 
            className="space-y-4"
            variants={animations.container}
            initial="hidden"
            animate="show"
          >
            {{COLUMN_TWO_CONTENT}}
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}
