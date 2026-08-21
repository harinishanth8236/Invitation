import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { WEDDING_DATA } from '../data/weddingData';
import { RoyalWeddingCrest, StationeryCorner, BotanicalGarland, BotanicalAmpersand } from './Motifs';
import { Sparkles, Calendar, MapPin } from 'lucide-react';

interface EnvelopeCoverProps {
  onOpen: () => void;
  isOpen: boolean;
  isOpening?: boolean;
}

export const EnvelopeCover: React.FC<EnvelopeCoverProps> = ({ onOpen, isOpen, isOpening = false }) => {
  const [internalAnimating, setInternalAnimating] = useState(false);

  const isBusy = isOpen || isOpening || internalAnimating;

  const handleOpenClick = () => {
    if (isBusy) return;
    setInternalAnimating(true);

    // Multi-stage celebratory gold, burgundy & champagne confetti burst
    try {
      confetti({
        particleCount: 75,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#C5A059', '#F3E3B6', '#E8D39F', '#FFFFFF', '#D4AF37'],
        disableForReducedMotion: true,
      });
      setTimeout(() => {
        confetti({
          particleCount: 45,
          angle: 60,
          spread: 65,
          origin: { x: 0.1, y: 0.65 },
          colors: ['#C5A059', '#F3E3B6', '#E8D39F'],
        });
        confetti({
          particleCount: 45,
          angle: 120,
          spread: 65,
          origin: { x: 0.9, y: 0.65 },
          colors: ['#C5A059', '#F3E3B6', '#FFFFFF'],
        });
      }, 250);
    } catch {
      // ignore
    }

    // Trigger book cover opening immediately
    onOpen();
  };

  return (
    <div className="relative min-h-[100svh] w-full flex flex-col items-center justify-center p-3 sm:p-6 bg-[#160B06] text-[#FAF6F0] overflow-hidden select-none">
      
      {/* Full-screen Uploaded Wedding Invitation Artwork Backdrop (Crisp Native Quality) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none bg-[#2A080C]">
        {/* Soft background ambient fill */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C0508] via-[#350A0E] to-[#1C0508]" />
        
        {/* Crisp Artwork in true aspect ratio without overstretching or blur */}
        <img
          src="/Wedding%20invitation%20cover.png"
          alt="Wedding Invitation Cover Artwork"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.indexOf('wedding-invitation-cover.png') === -1) {
              target.src = '/wedding-invitation-cover.png';
            }
          }}
          className="w-full h-full object-cover object-center max-w-[900px] opacity-95 select-none"
          loading="eager"
          decoding="sync"
        />
        
        {/* Subtle edge-fade vignette (No blur) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Top Botanical Festoon Garland */}
      <div className="absolute top-0 inset-x-0 z-20 pointer-events-none">
        <BotanicalGarland className="w-full h-10 sm:h-14 opacity-85" />
      </div>

      {/* Subtle Warm Lighting Glow Orbs */}
      <div className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#C5A059]/20 blur-3xl pointer-events-none -top-10 left-1/4 animate-pulse" />
      <div className="absolute w-80 sm:w-[30rem] h-80 sm:h-[30rem] rounded-full bg-[#731A1D]/25 blur-3xl pointer-events-none -bottom-10 right-1/4" />

      {/* Main Luxury Wedding Card Cover (The Pristine Parchment Card) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-lg mx-auto z-10 my-auto py-2 sm:py-4"
      >
        {/* Royal Card with Gold Foil Border & Parchment Layer */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EA] to-[#F3ECE0] text-[#24130A] p-6 sm:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.7)] border-2 border-[#E8D39F] overflow-hidden select-none">
          
          {/* Subtle Traditional Indian Paisley & Lotus Floral Damask Background Watermark */}
          <div className="absolute inset-0 opacity-[0.09] pointer-events-none mix-blend-multiply flex items-center justify-center">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="indianWeddingPattern" width="70" height="70" patternUnits="userSpaceOnUse">
                  {/* Central Lotus Motif */}
                  <path d="M35,15 C42,24 48,28 55,35 C48,42 42,46 35,55 C28,46 22,42 15,35 C22,28 28,24 35,15 Z" fill="#8C6928" fillOpacity="0.3" stroke="#731A1D" strokeWidth="1.2" />
                  <circle cx="35" cy="35" r="4.5" fill="#FAF5EA" stroke="#731A1D" strokeWidth="1" />
                  <circle cx="35" cy="35" r="1.8" fill="#731A1D" />
                  
                  {/* Graceful Curved Vine Connections */}
                  <path d="M0,0 Q18,8 35,15 Q52,8 70,0" fill="none" stroke="#C5A059" strokeWidth="1" />
                  <path d="M0,70 Q18,62 35,55 Q52,62 70,70" fill="none" stroke="#C5A059" strokeWidth="1" />
                  <path d="M0,0 Q8,18 15,35 Q8,52 0,70" fill="none" stroke="#C5A059" strokeWidth="1" />
                  <path d="M70,0 Q62,18 55,35 Q62,52 70,70" fill="none" stroke="#C5A059" strokeWidth="1" />

                  {/* Corner Diamond Accents */}
                  <rect x="-3" y="-3" width="6" height="6" transform="rotate(45 0 0)" fill="#C5A059" />
                  <rect x="67" y="-3" width="6" height="6" transform="rotate(45 70 0)" fill="#C5A059" />
                  <rect x="-3" y="67" width="6" height="6" transform="rotate(45 0 70)" fill="#C5A059" />
                  <rect x="67" y="67" width="6" height="6" transform="rotate(45 70 70)" fill="#C5A059" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#indianWeddingPattern)" />
            </svg>
          </div>

          {/* Soft Central Warm Ambient Glow for Readability */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,253,249,0.85)_0%,rgba(250,245,234,0.45)_55%,rgba(243,236,224,0)_90%)]" />

          {/* Dual Inset Golden Foil Borders */}
          <div className="absolute inset-2.5 sm:inset-3 rounded-[24px] sm:rounded-[32px] border border-[#C5A059]/60 pointer-events-none" />
          <div className="absolute inset-3.5 sm:inset-4 rounded-[20px] sm:rounded-[28px] border border-[#C5A059]/35 border-dashed pointer-events-none" />

          {/* Side Floral Border Trim Guides */}
          <div className="absolute top-1/4 bottom-1/4 left-3.5 w-px bg-gradient-to-b from-transparent via-[#C5A059]/40 to-transparent pointer-events-none" />
          <div className="absolute top-1/4 bottom-1/4 right-3.5 w-px bg-gradient-to-b from-transparent via-[#C5A059]/40 to-transparent pointer-events-none" />

          {/* Top & Bottom Arch Architrave Flourishes */}
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-36 h-3 flex items-center justify-center opacity-40 pointer-events-none">
            <svg viewBox="0 0 140 12" className="w-full h-full text-[#8C6928]">
              <path d="M0,6 Q35,0 70,6 Q105,0 140,6" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="70" cy="6" r="2.5" fill="#731A1D" stroke="#C5A059" strokeWidth="0.8" />
              <circle cx="35" cy="3.5" r="1.5" fill="#C5A059" />
              <circle cx="105" cy="3.5" r="1.5" fill="#C5A059" />
            </svg>
          </div>
          <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 w-36 h-3 flex items-center justify-center opacity-40 pointer-events-none rotate-180">
            <svg viewBox="0 0 140 12" className="w-full h-full text-[#8C6928]">
              <path d="M0,6 Q35,0 70,6 Q105,0 140,6" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="70" cy="6" r="2.5" fill="#731A1D" stroke="#C5A059" strokeWidth="0.8" />
              <circle cx="35" cy="3.5" r="1.5" fill="#C5A059" />
              <circle cx="105" cy="3.5" r="1.5" fill="#C5A059" />
            </svg>
          </div>

          {/* Ornamental Stationery Corners */}
          <StationeryCorner position="top-left" className="absolute top-2.5 left-2.5 w-10 h-10 text-[#C5A059]" />
          <StationeryCorner position="top-right" className="absolute top-2.5 right-2.5 w-10 h-10 text-[#C5A059]" />
          <StationeryCorner position="bottom-left" className="absolute bottom-2.5 left-2.5 w-10 h-10 text-[#C5A059]" />
          <StationeryCorner position="bottom-right" className="absolute bottom-2.5 right-2.5 w-10 h-10 text-[#C5A059]" />

          {/* Content Stack */}
          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Invocation Header */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-2 flex flex-col items-center"
            >
              <img
                src="/ganesha.png"
                alt="Lord Ganesha"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.indexOf('Ganesha.png') === -1) {
                    target.src = '/Ganesha.png';
                  }
                }}
                className="w-16 h-16 sm:w-18 sm:h-18 object-contain mb-1.5 drop-shadow-xs select-none"
              />
              
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F4E9D8] border border-[#C5A059]/50 shadow-xs">
                <span className="font-montserrat text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#731A1D] font-bold">
                  WEDDING INVITATION
                </span>
              </div>
            </motion.div>

            {/* Families Invocation Text */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-serif italic text-[14px] leading-[22px] text-[#5C3B28] mt-2 mb-1 max-w-[300px] sm:max-w-xs mx-auto"
            >
              With great joy, together with our families, cordially invite you to celebrate the wedding of
            </motion.p>

            {/* Couple Names — Matching the Custom Artwork Typography */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="my-3 space-y-0 flex flex-col items-center"
            >
              <h1 className="font-serif text-[38px] text-[#731A1D] font-bold not-italic tracking-[0.02em] leading-tight select-none drop-shadow-xs">
                Anand
              </h1>
              
              <BotanicalAmpersand className="my-0.5" />
              
              <h1 className="font-serif text-[38px] text-[#731A1D] font-bold not-italic tracking-[0.02em] leading-tight select-none drop-shadow-xs">
                Subhashini
              </h1>
            </motion.div>

            {/* Key Wedding Date & Venue Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="my-3 space-y-1.5 flex flex-col items-center text-[11px]"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FBF5EC] via-[#F4E9D8] to-[#FBF5EC] border border-[#C5A059]/60 shadow-xs text-[11px]">
                <Calendar className="w-3.5 h-3.5 text-[#731A1D]" />
                <span className="font-montserrat text-[10px] font-bold tracking-[0.18em] text-[#24130A]">
                  12 &amp; 13 SEPTEMBER 2026
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-[11px] text-[#5C3B28] font-sans">
                <MapPin className="w-3.5 h-3.5 text-[#8C6928]" />
                <span className="text-[11px]">K.P. Mahal • Pallapatti, Karur</span>
              </div>
            </motion.div>

            {/* Sole Primary Interactable: Grand Tap to Open Invitation Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="w-full mt-3 pt-2"
            >
              <motion.button
                id="open-invitation-btn"
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleOpenClick}
                disabled={isBusy}
                className="w-full max-w-xs sm:max-w-sm mx-auto relative group overflow-hidden px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#731A1D] via-[#521315] to-[#731A1D] text-[#FAF6F0] font-montserrat font-bold text-[10px] tracking-[0.2em] shadow-xl border-2 border-[#F3E3B6]/80 hover:border-[#FFF3D6] hover:shadow-[0_6px_28px_rgba(115,26,29,0.5)] transition-all cursor-pointer select-none"
              >
                {/* Dynamic light reflection sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F3E3B6] group-hover:rotate-12 transition-transform duration-300" />
                  <span>{isBusy ? 'OPENING INVITATION...' : 'TAP TO OPEN INVITATION'}</span>
                  <Sparkles className="w-4 h-4 text-[#F3E3B6] group-hover:-rotate-12 transition-transform duration-300" />
                </span>
              </motion.button>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

