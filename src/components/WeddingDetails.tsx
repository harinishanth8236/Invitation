import React from 'react';
import { motion } from 'motion/react';
import { WEDDING_DATA } from '../data/weddingData';
import { StationeryCorner, FloralDivider } from './Motifs';
import { Calendar, Clock, Sparkles, Navigation } from 'lucide-react';

export const WeddingDetails: React.FC = () => {
  return (
    <section
      id="wedding-details"
      className="relative py-6 sm:py-10 px-3 sm:px-6 w-full max-w-4xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-6 sm:mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F4E9D8] border border-[#C5A059]/50 mb-2 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#731A1D]" />
            <span className="font-montserrat text-[10px] tracking-[0.25em] text-[#731A1D] uppercase font-bold">
              CELEBRATION SCHEDULE
            </span>
            <Sparkles className="w-3 h-3 text-[#731A1D]" />
          </div>

          <h2 className="font-playfair text-2xl sm:text-4xl text-[#24130A] font-bold tracking-wide">
            Wedding Celebrations
          </h2>

          <FloralDivider className="max-w-xs mx-auto my-2" />
        </motion.div>
      </div>

      {/* Two Distinct Event Cards — Compact & Elegant */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        
        {/* CARD 1: RECEPTION */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-[#FFFDF9] to-[#F8F3EA] p-5 sm:p-7 shadow-royal-card border border-[#E8D39F]/90 overflow-hidden flex flex-col justify-between hover:shadow-gold-glow transition-all duration-300"
        >
          <StationeryCorner position="top-right" className="absolute top-2 right-2 w-8 h-8 text-[#C5A059]" />
          <StationeryCorner position="bottom-left" className="absolute bottom-2 left-2 w-8 h-8 text-[#C5A059]" />

          <div>
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-0.5 rounded-full bg-[#731A1D]/10 text-[10px] font-montserrat font-bold tracking-widest text-[#731A1D] border border-[#731A1D]/20">
                EVENING GALA
              </span>
              <span className="text-[11px] font-montserrat font-bold text-[#8C6928]">DAY 1</span>
            </div>

            {/* Event Title */}
            <h3 className="font-playfair text-xl sm:text-2xl text-[#24130A] font-bold tracking-wide mb-0.5">
              Reception
            </h3>
            <p className="font-serif italic text-xs sm:text-sm text-[#731A1D] font-medium mb-4">
              An evening of love, laughter &amp; celebration.
            </p>

            {/* Date & Time block */}
            <div className="space-y-3 py-3 border-y border-[#C5A059]/30 bg-[#FAF6F0]/80 rounded-xl p-3">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-[#F4E9D8] text-[#731A1D]">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] font-montserrat font-semibold uppercase tracking-wider text-[#8C6928] block">Date</span>
                  <p className="font-serif font-bold text-sm sm:text-base text-[#24130A]">
                    Saturday, 12 September 2026
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-[#F4E9D8] text-[#731A1D]">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] font-montserrat font-semibold uppercase tracking-wider text-[#8C6928] block">Time</span>
                  <p className="font-montserrat font-bold text-xs sm:text-sm text-[#3D2214]">
                    6:30 PM onwards
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs text-[#5C3B28] leading-relaxed">
              An evening of love, laughter, and cherished moments<br className="hidden sm:inline" /> as we celebrate the newlyweds with family and friends
            </p>
          </div>
        </motion.div>

        {/* CARD 2: WEDDING CEREMONY */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F5EBDE] p-5 sm:p-7 shadow-royal-card border-2 border-[#C5A059] overflow-hidden flex flex-col justify-between hover:shadow-gold-glow transition-all duration-300"
        >
          <StationeryCorner position="top-left" className="absolute top-2 left-2 w-8 h-8 text-[#C5A059]" />
          <StationeryCorner position="bottom-right" className="absolute bottom-2 right-2 w-8 h-8 text-[#C5A059]" />

          <div>
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-0.5 rounded-full bg-[#731A1D] text-[10px] font-montserrat font-bold tracking-widest text-[#FAF6F0] border border-[#F3E3B6]">
                MAIN CEREMONY
              </span>
              <span className="text-[11px] font-montserrat font-bold text-[#731A1D]">DAY 2</span>
            </div>

            {/* Event Title */}
            <h3 className="font-playfair text-xl sm:text-2xl text-[#24130A] font-bold tracking-wide mb-0.5">
              Wedding Ceremony
            </h3>
            <p className="font-serif italic text-xs sm:text-sm text-[#731A1D] font-medium mb-4">
              Sacred vows, cherished traditions &amp; blessings.
            </p>

            {/* Date & Time block */}
            <div className="space-y-3 py-3 border-y border-[#C5A059]/40 bg-[#FAF6F0]/80 rounded-xl p-3">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-[#731A1D] text-[#F3E3B6]">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] font-montserrat font-semibold uppercase tracking-wider text-[#731A1D] block">Date</span>
                  <p className="font-serif font-bold text-sm sm:text-base text-[#24130A]">
                    Sunday, 13 September 2026
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-[#731A1D] text-[#F3E3B6]">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] font-montserrat font-semibold uppercase tracking-wider text-[#731A1D] block">Ceremony Time</span>
                  <p className="font-montserrat font-bold text-xs sm:text-sm text-[#731A1D]">
                    7:00 AM – 8:15 AM
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs text-[#5C3B28] leading-relaxed">
              Witness the sacred union of two hearts and two families,<br className="hidden sm:inline" /> followed by cherished traditions, blessings, and a festive feast.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Direct link to map */}
      <div className="mt-5 text-center">
        <a
          href="#venue"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF6F0] hover:bg-white text-[#24130A] border border-[#C5A059]/50 text-xs font-montserrat font-semibold tracking-wider shadow-xs hover:shadow-sm transition-all cursor-pointer"
        >
          <Navigation className="w-3 h-3 text-[#731A1D]" />
          <span>View Venue Location &amp; Directions</span>
        </a>
      </div>
    </section>
  );
};

