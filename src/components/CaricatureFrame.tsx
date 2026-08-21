import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CoupleIllustration } from './CoupleIllustration';
import { ZoomIn, X, Heart, Sparkles } from 'lucide-react';

interface CaricatureFrameProps {
  type: 'formal' | 'candid';
  caption?: string;
  altText: string;
  className?: string;
}

export const CaricatureFrame: React.FC<CaricatureFrameProps> = ({
  type,
  caption,
  altText,
  className = '',
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Robust image candidates
  const candidateImages = type === 'formal' 
    ? ['/couple.png', '/ChatGPT%20Image%20Aug%2018%2C%202026%2C%2011_19_15%20PM.png', '/couple-candid.png', '/Media%20(2).jpg']
    : ['/couple-candid.png', '/couple-candid.jpg', '/Media%20(2).jpg', '/couple.png'];

  const [currentCandidateIdx, setCurrentCandidateIdx] = useState(0);
  const imageSrc = candidateImages[currentCandidateIdx] || '';

  const handleImageError = () => {
    if (currentCandidateIdx < candidateImages.length - 1) {
      setCurrentCandidateIdx(prev => prev + 1);
    } else {
      setImgError(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`relative mx-auto w-full max-w-[240px] sm:max-w-[280px] select-none ${className}`}
      >
        {/* Soft Golden Ambient Glow */}
        <div className="absolute -inset-3 bg-gradient-to-b from-[#C5A059]/20 via-[#E8D39F]/10 to-transparent rounded-[36px] blur-xl pointer-events-none" />

        {/* Outer Fine Arch Frame Container */}
        <div className="relative p-2 sm:p-2.5 rounded-t-[130px] sm:rounded-t-[150px] rounded-b-[24px] sm:rounded-b-[28px] bg-gradient-to-b from-[#FFF2CC] via-[#C5A059] to-[#8C6928] shadow-royal-card transition-all duration-300 hover:shadow-gold-glow">
          
          {/* Inner Textured Parchment Card */}
          <div className="relative rounded-t-[122px] sm:rounded-t-[142px] rounded-b-[20px] sm:rounded-b-[24px] p-1 bg-[#FAF7F2] border border-[#F3E3B6]/80 shadow-inner">
            
            {/* Top Crown Emblem */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
              <div className="px-3 py-0.5 rounded-full bg-gradient-to-r from-[#731A1D] via-[#4A1012] to-[#731A1D] border border-[#F3E3B6] text-[#FAF6F0] text-[8px] font-montserrat tracking-[0.25em] uppercase font-bold shadow-xs flex items-center gap-1">
                <Sparkles className="w-2 h-2 text-[#F3E3B6]" />
                <span>A &amp; S</span>
                <Sparkles className="w-2 h-2 text-[#F3E3B6]" />
              </div>
            </div>

            {/* Main Portrait Canvas */}
            <div 
              onClick={() => setIsZoomed(true)}
              className="relative aspect-[3.2/4] w-full rounded-t-[116px] sm:rounded-t-[136px] rounded-b-[16px] sm:rounded-b-[20px] overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#F1E8D9] flex items-center justify-center cursor-pointer group shadow-xs"
            >
              {!imgError ? (
                <>
                  <img
                    src={imageSrc}
                    alt={altText}
                    referrerPolicy="no-referrer"
                    onError={handleImageError}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-103"
                  />
                  
                  {/* Subtle Blended Soft Edge Gradient */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#24130A]/20 via-transparent to-[#24130A]/5 mix-blend-multiply" />
                </>
              ) : (
                /* Fallback illustration */
                <div className="w-full h-full">
                  <CoupleIllustration type={type} />
                </div>
              )}

              {/* Tap to Zoom Indicator */}
              <div className="absolute bottom-2 right-2 z-20 opacity-70 group-hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(true);
                  }}
                  className="p-1.5 rounded-full bg-[#FAF6F0]/90 text-[#24130A] shadow-xs backdrop-blur-xs hover:bg-white transition-all cursor-pointer border border-[#C5A059]/40"
                  title="View full portrait"
                  aria-label="View full portrait"
                >
                  <ZoomIn className="w-3 h-3 text-[#8C6928]" />
                </button>
              </div>

              {/* Decorative Arch Inset Border Line */}
              <div className="absolute inset-1.5 pointer-events-none rounded-t-[110px] sm:rounded-t-[130px] rounded-b-[12px] border border-[#C5A059]/30 border-dashed" />
            </div>
          </div>
        </div>

        {caption && (
          <div className="mt-2.5 flex items-center justify-center gap-1.5">
            <span className="w-3 h-[1px] bg-[#C5A059]" />
            <p className="font-serif italic text-xs text-[#5C3B28] tracking-wide text-center">
              {caption}
            </p>
            <span className="w-3 h-[1px] bg-[#C5A059]" />
          </div>
        )}
      </motion.div>

      {/* Fullscreen Lightbox Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 bg-[#140A05]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#FAF6F0] rounded-[36px] p-4 sm:p-6 shadow-2xl border-2 border-[#C5A059]/60 text-center"
            >
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#24130A] text-[#FAF6F0] hover:bg-[#3D2214] transition-all cursor-pointer border border-[#C5A059]/50"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 text-[#F3E3B6]" />
              </button>

              <div className="relative aspect-[3/4] w-full rounded-[26px] overflow-hidden bg-[#F4EDE2] mb-4 border border-[#C5A059]/30 shadow-inner">
                {!imgError ? (
                  <img
                    src={imageSrc}
                    alt={altText}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <CoupleIllustration type={type} />
                )}
              </div>

              <h4 className="font-cinzel-dec text-xl sm:text-2xl font-bold tracking-wide text-[#24130A]">
                Anand &amp; Subhashini
              </h4>
              <p className="font-serif italic text-sm text-[#731A1D] mt-1 flex items-center justify-center gap-1.5 font-medium">
                <Heart className="w-3.5 h-3.5 fill-[#731A1D]" />
                <span>{caption || 'Wedding Celebration • September 2026'}</span>
                <Heart className="w-3.5 h-3.5 fill-[#731A1D]" />
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
