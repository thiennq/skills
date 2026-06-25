import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import { animations } from '../lib/animations';

export default function Slide{{SLIDE_INDEX}}() {
  return (
    <SlideLayout>
      <div 
        className="relative w-full h-full overflow-hidden" 
        style={{ padding: '{{PADDING}}' }}
      >
        {/* Background Image if exists */}
        {{#if IMAGE_PATH}}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src="{{IMAGE_PATH}}" alt="{{TITLE}}" className="w-full h-full object-cover opacity-30" />
        </div>
        {{/if}}

        {/* Floating Text Title */}
        <motion.h2 
          className="slide-title z-10 relative mb-6" 
          variants={animations.item}
          initial="hidden"
          animate="show"
        >
          {{TITLE}}
        </motion.h2>

        {/* Absolute Floating items */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {{ABSOLUTE_ITEMS}}
        </div>
      </div>
    </SlideLayout>
  );
}
