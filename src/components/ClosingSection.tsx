import React from 'react';
import { motion } from 'motion/react';
import { CaricatureFrame } from './CaricatureFrame';
import { FloralDivider } from './Motifs';

export const ClosingSection: React.FC = () => {
  return (
    <section
      id="closing-section"
      className="relative pt-4 pb-2 sm:pt-6 sm:pb-3 px-3 sm:px-6 w-full max-w-3xl mx-auto flex flex-col items-center text-center"
    >
      {/* 
        CRITICAL IMAGE PLACEMENT 2: 
        The candid selfie portrait caricature of Anand & Subhashini.
        Used EXACTLY ONCE here across the entire application.
      */}
      <div className="mb-4 w-full flex justify-center">
        <CaricatureFrame
          type="candid"
          altText="Anand and Subhashini candid warm portrait caricature"
          caption="Blessed with love, laughter &amp; forever"
        />
      </div>

      {/* Warm Closing Message */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-2 max-w-xl mb-2"
      >
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#24130A] leading-snug">
          We Look Forward to Celebrating With You
        </h2>

        <p className="font-serif italic text-sm sm:text-base text-[#5C3B28] leading-relaxed max-w-md mx-auto">
          “Your presence, heartfelt wishes and warm blessings will make our wedding celebration truly unforgettable.”
        </p>

        <FloralDivider className="my-2.5 max-w-xs mx-auto" />

        <div className="pt-0.5">
          <p className="font-pinyon text-[28px] text-[#731A1D] mb-0.5 select-none">
            With warm regards,
          </p>
          <p className="font-playfair text-xl sm:text-2xl font-bold text-[#24130A] tracking-wider">
            Anand &amp; Subhashini
          </p>
          <p className="font-montserrat text-xs text-[#8C6928] mt-0.5 font-semibold uppercase tracking-wider">
            &amp; Their Families
          </p>
        </div>
      </motion.div>
    </section>
  );
};
