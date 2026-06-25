import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import { animations } from '../lib/animations';

export default function Slide{{SLIDE_INDEX}}() {
  return (
    <SlideLayout>
      <div className="relative w-full h-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="{{IMAGE_PATH}}" 
            alt="{{TITLE}}" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Foreground Content */}
        <div className="absolute bottom-0 left-0 right-0 p-12 text-white flex flex-col justify-end min-h-[300px]">
          {{#if SUBTITLE}}
          <motion.span 
            className="slide-label mb-2 text-white/70"
            variants={animations.item}
            initial="hidden"
            animate="show"
          >
            {{SUBTITLE}}
          </motion.span>
          {{/if}}
          
          <motion.h2 
            className="slide-title text-white mb-4 max-w-4xl"
            style={{ color: '#ffffff' }}
            variants={animations.item}
            initial="hidden"
            animate="show"
          >
            {{TITLE}}
          </motion.h2>

          {{#if DESCRIPTION}}
          <motion.p 
            className="slide-body text-white/80 max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.8)' }}
            variants={animations.item}
            initial="hidden"
            animate="show"
          >
            {{DESCRIPTION}}
          </motion.p>
          {{/if}}
        </div>
      </div>
    </SlideLayout>
  );
}
