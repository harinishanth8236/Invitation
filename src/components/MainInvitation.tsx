import React from 'react';
import { motion } from 'motion/react';
import { WEDDING_DATA } from '../data/weddingData';
import { MonogramWreath, FloralDivider, StationeryCorner, BotanicalAmpersand } from './Motifs';
import { CaricatureFrame } from './CaricatureFrame';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

export const MainInvitation: React.FC = () => {
  return (
    <section
      id="main-invitation"
      className="relative py-8 sm:py-12 px-3 sm:px-6 w-full max-w-3xl mx-auto flex flex-col items-center text-center"
    >
      {/* Main Luxury Parchment Invitation Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#F3ECE1] p-5 sm:p-10 shadow-royal-card border border-[#E8D39F]/90 overflow-hidden"
      >
        {/* Ornamental Stationery Corners */}
        <StationeryCorner position="top-left" className="absolute top-2.5 left-2.5 w-10 h-10 text-[#C5A059]" />
        <StationeryCorner position="top-right" className="absolute top-2.5 right-2.5 w-10 h-10 text-[#C5A059]" />
        <StationeryCorner position="bottom-left" className="absolute bottom-2.5 left-2.5 w-10 h-10 text-[#C5A059]" />
        <StationeryCorner position="bottom-right" className="absolute bottom-2.5 right-2.5 w-10 h-10 text-[#C5A059]" />

        {/* Dual Decorative Inner Hairline Borders */}
        <div className="absolute inset-2.5 sm:inset-3.5 rounded-[26px] sm:rounded-[34px] border border-[#C5A059]/40 pointer-events-none" />
        <div className="absolute inset-3.5 sm:inset-4.5 rounded-[22px] sm:rounded-[30px] border border-[#C5A059]/20 border-dashed pointer-events-none" />

        {/* Monogram Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3 flex flex-col items-center"
        >
          <img
            src="/Cover%20Page%20Icon.png"
            alt="Wedding Emblem"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.indexOf('cover-page-icon.png') === -1) {
                target.src = '/cover-page-icon.png';
              }
            }}
            className="w-[45px] h-[44px] object-contain mb-1 drop-shadow-xs select-none"
          />
        </motion.div>

        {/* Opening Invitation Lines - Unified Classic Serif Styling */}
        <div className="mb-6 max-w-sm sm:max-w-md mx-auto">
          <p className="font-serif italic text-sm sm:text-base text-[#5C3B28] leading-relaxed">
            With great joy, together with our families,<br />
            cordially invite you to celebrate the wedding of
          </p>
        </div>

        {/* Couple Names — Exquisite Wedding Typography */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="my-3 space-y-1"
        >
          {/* Groom */}
          <div className="flex flex-col items-center">
            <h1 className="font-serif text-3xl sm:text-5xl text-[#731A1D] font-bold tracking-[0.04em] leading-tight select-none drop-shadow-xs">
              {WEDDING_DATA.groom.name}
            </h1>
            <p className="font-montserrat text-[9px] sm:text-[10px] tracking-[0.16em] text-[#8C6928] font-medium mt-1 uppercase">
              {WEDDING_DATA.groom.degree}
            </p>
          </div>

          {/* Botanical Leaf Sprigs & Gold Ampersand */}
          <BotanicalAmpersand className="my-1.5" />

          {/* Bride */}
          <div className="flex flex-col items-center">
            <h1 className="font-serif text-3xl sm:text-5xl text-[#731A1D] font-bold tracking-[0.04em] leading-tight select-none drop-shadow-xs">
              {WEDDING_DATA.bride.name}
            </h1>
            <p className="font-montserrat text-[9px] sm:text-[10px] tracking-[0.16em] text-[#8C6928] font-medium mt-1 uppercase">
              {WEDDING_DATA.bride.degree}
            </p>
          </div>
        </motion.div>

        {/* Poetic Verse */}
        <div className="my-4 max-w-md mx-auto">
          <p className="font-serif italic text-[15px] text-[#5C3B28] leading-relaxed">
            “Two lives, two hearts, joined together in friendship,<br className="hidden sm:inline" />
            united forever in love.”
          </p>
        </div>

        <FloralDivider className="my-4 max-w-xs" text="September 2026" />

        {/* 
          CRITICAL IMAGE PLACEMENT 1: 
          The formal seated couple portrait of Anand & Subhashini.
          Compact & gracefully proportioned.
        */}
        <div className="my-4 w-full flex justify-center">
          <CaricatureFrame
            type="formal"
            altText="Anand and Subhashini formal wedding portrait"
            caption="Celebrating love, laughter, and a lifetime together"
          />
        </div>

        {/* Quick Date & Venue Pill Bar (Compact Overview) */}
        <div className="mt-5 py-3 px-4 rounded-2xl bg-[#FAF6F0]/90 border border-[#C5A059]/40 max-w-lg mx-auto flex flex-wrap items-center justify-around gap-3 text-left">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#731A1D] shrink-0" />
            <div>
              <span className="text-[10px] font-montserrat uppercase font-semibold text-[#8C6928] block">Date</span>
              <span className="text-xs sm:text-sm font-serif font-bold text-[#24130A]">12 &amp; 13 Sept 2026</span>
            </div>
          </div>

          <div className="h-6 w-[1px] bg-[#C5A059]/30 hidden sm:block" />

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#731A1D] shrink-0" />
            <div>
              <span className="text-[10px] font-montserrat uppercase font-semibold text-[#8C6928] block">Venue</span>
              <span className="text-xs sm:text-sm font-serif font-bold text-[#24130A]">K.P. Mahal, Pallapatti</span>
            </div>
          </div>
        </div>

        {/* Closing Note from Families */}
        <div className="mt-5 pt-4 border-t border-[#C5A059]/30 text-center max-w-md mx-auto">
          <p className="font-serif italic text-xs sm:text-sm text-[#7A5741] leading-relaxed">
            We request the pleasure of your company to grace this joyful occasion with your presence and blessings.
          </p>
        </div>

      </motion.div>
    </section>
  );
};
