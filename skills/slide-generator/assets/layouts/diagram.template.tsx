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
          className="slide-title mb-6"
          variants={animations.item}
          initial="hidden"
          animate="show"
        >
          {{TITLE}}
        </motion.h2>

        {/* Diagram container */}
        <div className="flex-1 flex items-center justify-center min-h-[350px] rounded-lg border border-[var(--text-ghost)] bg-[var(--bg-secondary)] overflow-hidden">
          {{DIAGRAM_CODE}}
        </div>
        
        {{#if DESCRIPTION}}
        <motion.p 
          className="slide-body mt-4 text-center t-muted"
          variants={animations.item}
          initial="hidden"
          animate="show"
        >
          {{DESCRIPTION}}
        </motion.p>
        {{/if}}
      </div>
    </SlideLayout>
  );
}
