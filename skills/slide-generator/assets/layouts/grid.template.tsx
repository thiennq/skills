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

        <motion.div 
          className="grid grid-cols-3 gap-6"
          variants={animations.container}
          initial="hidden"
          animate="show"
        >
          {{GRID_ITEMS}}
        </motion.div>
      </div>
    </SlideLayout>
  );
}
