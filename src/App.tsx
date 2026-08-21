import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { EnvelopeCover } from './components/EnvelopeCover';
import { MainInvitation } from './components/MainInvitation';
import { WeddingDetails } from './components/WeddingDetails';
import { VenueSection } from './components/VenueSection';
import { CountdownSection } from './components/CountdownSection';
import { ClosingSection } from './components/ClosingSection';
import { AudioPlayer } from './components/AudioPlayer';
import { PetalCanvas } from './components/PetalCanvas';
import { RoyalWeddingCrest } from './components/Motifs';
import { Mail, ArrowUp } from 'lucide-react';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleOpenInvitation = () => {
    if (isOpening || isEnvelopeOpen) return;
    setIsOpening(true);
    setIsEnvelopeOpen(true);

    // After the cover animation finishes, remove the cover from DOM
    setTimeout(() => {
      setIsOpening(false);
    }, 1200);
  };

  useEffect(() => {
    if (!isEnvelopeOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isEnvelopeOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className={`relative bg-[#FAF6F0] text-[#24130A] selection:bg-[#E8D39F] selection:text-[#24130A] font-sans overflow-x-hidden ${
        !isEnvelopeOpen ? 'h-[100svh] overflow-hidden' : 'min-h-screen'
      }`}
      style={{ perspective: '2200px' }}
    >
      {/* Floating Gentle Petal Particles */}
      <PetalCanvas />

      {/* Floating Ambient Music Player */}
      <AudioPlayer autoPlayTrigger={isEnvelopeOpen || isOpening} />

      {/* 1. DESTINATION PAGE (Placed Underneath the Cover) */}
      <main
        key="invitation-content"
        className={`relative w-full overflow-x-hidden pb-4 sm:pb-6 transition-opacity duration-300 ${
          !isEnvelopeOpen && !isOpening ? 'hidden' : 'opacity-100'
        }`}
      >
        {/* Backmost Portrait Artwork Background (Naturally Scrolling, Crisp & Clearly Visible) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center">
          <div
            className="w-full max-w-2xl h-full min-h-full opacity-60 select-none pointer-events-none"
            style={{
              backgroundImage: `url('/Main%20invitation%20background.png')`,
              backgroundRepeat: 'repeat-y',
              backgroundSize: '100% auto',
              backgroundPosition: 'top center',
            }}
          />
        </div>

        {/* Dynamic Book Spine Lighting & Shadow during opening */}
        {isOpening && (
          <motion.div
            initial={{ opacity: 0.75 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 3.6, ease: [0.25, 1, 0.4, 1] }}
            className="absolute inset-y-0 left-0 w-36 sm:w-64 bg-gradient-to-r from-black/45 via-black/15 to-transparent z-20 pointer-events-none"
          />
        )}

        {/* Top Navigation Bar */}
        <div className="relative z-10 pt-4 px-4 max-w-3xl mx-auto flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={() => {
              setIsEnvelopeOpen(false);
              setIsOpening(false);
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] hover:bg-[#F4E9D8] transition-all cursor-pointer border border-[#C5A059]/50 shadow-xs text-[#731A1D] font-montserrat font-bold"
          >
            <Mail className="w-3.5 h-3.5 text-[#8C6928]" />
            <span className="text-[10px] tracking-wider uppercase">Envelope Cover</span>
          </button>

          <span className="font-montserrat text-[11px] tracking-widest text-[#8C6928] font-bold bg-[#FAF6F0] px-3.5 py-1.5 rounded-full border border-[#C5A059]/40 shadow-xs">
            12 &amp; 13 SEPT 2026
          </span>
        </div>

        {/* SECTION 1: Main Invitation (with Seated Formal Caricature) */}
        <div className="relative z-10">
          <MainInvitation />
        </div>

        {/* SECTION 2: Wedding Details (Reception & Ceremony Cards) */}
        <div className="relative z-10">
          <WeddingDetails />
        </div>

        {/* SECTION 3: Venue & Directions ("Celebrate With Us") */}
        <div className="relative z-10">
          <VenueSection />
        </div>

        {/* SECTION 4: Countdown & Save The Dates (WhatsApp + Calendar) */}
        <div className="relative z-10">
          <CountdownSection />
        </div>

        {/* SECTION 5: Closing Section (with Candid Selfie Caricature & Blessings) */}
        <div className="relative z-10">
          <ClosingSection />
        </div>

        {/* Scroll to Top Floating Button */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            type="button"
            onClick={scrollToTop}
            className="fixed bottom-6 right-4 z-40 p-3 rounded-full bg-[#731A1D] text-[#FAF6F0] shadow-2xl border-2 border-[#F3E3B6] hover:bg-[#4A1012] hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-[#F3E3B6]" />
          </motion.button>
        )}
      </main>

      {/* 2. 3D PHYSICAL BOOK COVER (Rotating around its LEFT vertical edge) */}
      {(!isEnvelopeOpen || isOpening) && (
        <motion.div
          id="wedding-book-cover"
          className={`fixed inset-0 w-full h-[100svh] z-30 select-none ${
            isOpening ? 'pointer-events-none' : 'pointer-events-auto'
          }`}
          style={{
            transformOrigin: 'left center',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
          initial={{ rotateY: 0, opacity: 1 }}
          animate={isOpening ? { rotateY: -160, opacity: 0 } : { rotateY: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1], // Soft, swift opening curve
          }}
        >
          {/* FRONT FACE OF COVER (Existing EnvelopeCover design unchanged) */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <EnvelopeCover
              onOpen={handleOpenInvitation}
              isOpen={isEnvelopeOpen}
              isOpening={isOpening}
            />
          </div>

          {/* BACK FACE OF COVER (Inside Left Book Flap in Indian Wedding Burgundy & Gold) */}
          <div
            className="absolute inset-0 w-full h-full bg-[#1A0608] border-r-4 border-[#C5A059]/50 overflow-hidden"
            style={{
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            {/* Rich Velvet & Gold Inner Folio Texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#29080C] via-[#140305] to-[#29080C]" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/70 to-transparent pointer-events-none" />
            <div className="absolute inset-4 sm:inset-8 rounded-[28px] border border-[#C5A059]/30 pointer-events-none" />
            <div className="absolute inset-6 sm:inset-10 rounded-[22px] border border-[#C5A059]/20 border-dashed pointer-events-none" />

            {/* Center Auspicious Crest & Monogram on Inner Flap */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-6 text-[#FAF6F0]">
              <RoyalWeddingCrest className="w-16 h-16 sm:w-20 sm:h-20 text-[#C5A059] mb-4 opacity-85" />
              <h2 className="font-serif text-2xl sm:text-3xl text-[#E8D39F] font-bold tracking-wider">
                Anand &amp; Subhashini
              </h2>
              <p className="font-serif italic text-xs sm:text-sm text-[#F3E3B6]/80 mt-2 tracking-wide">
                12 &amp; 13 September 2026 • Karur
              </p>
            </div>
          </div>

          {/* Dynamic Book Spine Crease & Shadow */}
          <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none z-40" />
        </motion.div>
      )}
    </div>
  );
}
