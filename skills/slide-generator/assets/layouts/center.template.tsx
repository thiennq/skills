import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import { animations } from '../lib/animations';

export default function Slide{{SLIDE_INDEX}}() {
  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full text-center" style={{ padding: '40px' }}>
        {/* Subtitle / Category Label */}
        {{#if SUBTITLE}}
        <motion.span 
          className="slide-label mb-4"
          variants={animations.item}
          initial="hidden"
          animate="show"
        >
          {{SUBTITLE}}
        </motion.span>
        {{/if}}

        {/* Display Title */}
        <motion.h1 
          className="slide-title mb-6 max-w-4xl"
          variants={animations.item}
          initial="hidden"
          animate="show"
        >
          {{TITLE}}
        </motion.h1>

        {/* Supporting Description / Tagline */}
        {{#if DESCRIPTION}}
        <motion.p 
          className="slide-body max-w-2xl t-secondary"
          variants={animations.item}
          initial="hidden"
          animate="show"
        >
          {{DESCRIPTION}}
        </motion.p>
        {{/if}}

        {/* Image / Icon if applicable */}
        {{#if IMAGE_PATH}}
        <motion.div 
          className="mt-8 max-h-[300px] rounded-lg overflow-hidden border border-[var(--text-ghost)]"
          variants={animations.item}
          initial="hidden"
          animate="show"
        >
          <img src="{{IMAGE_PATH}}" alt="{{TITLE}}" className="max-h-[300px] object-contain" />
        </motion.div>
        {{/if}}
      </div>
    </SlideLayout>
  );
}
