import React from 'react';

// Elegant Gold Botanical Festoon / Foliage Garland Swag
export const BotanicalGarland: React.FC<{ className?: string }> = ({ className = "w-full h-10 text-[#C5A059]" }) => (
  <div className={`w-full overflow-hidden select-none pointer-events-none ${className}`}>
    <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="goldGradGarland" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8C6928" stopOpacity="0.2" />
          <stop offset="25%" stopColor="#C5A059" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#F3E3B6" stopOpacity="1" />
          <stop offset="75%" stopColor="#C5A059" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8C6928" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Gentle Gold Swag Cords */}
      <path d="M0 12 Q150 38 300 12 Q450 38 600 12 Q750 38 900 12 Q1050 38 1200 12" stroke="url(#goldGradGarland)" strokeWidth="1.5" fill="none" />
      <path d="M0 12 Q150 48 300 12 Q450 48 600 12 Q750 48 900 12 Q1050 48 1200 12" stroke="url(#goldGradGarland)" strokeWidth="0.8" strokeDasharray="3 3" fill="none" opacity="0.6" />

      {/* Delicate Leaf Nodes */}
      {[150, 450, 750, 1050].map((cx, idx) => (
        <g key={idx}>
          <path d={`M${cx - 10} 26 Q${cx} 42 ${cx} 48 Q${cx} 42 ${cx + 10} 26 Z`} fill="#C5A059" fillOpacity="0.6" />
          <circle cx={cx} cy="30" r="2.5" fill="#F3E3B6" />
          <circle cx={cx - 6} cy="24" r="1.5" fill="#C5A059" />
          <circle cx={cx + 6} cy="24" r="1.5" fill="#C5A059" />
        </g>
      ))}

      {/* Peak Nodes */}
      {[0, 300, 600, 900, 1200].map((cx, idx) => (
        <g key={`node-${idx}`}>
          <circle cx={cx} cy="12" r="3" fill="#C5A059" />
          <circle cx={cx} cy="12" r="1.5" fill="#FFF8E1" />
        </g>
      ))}
    </svg>
  </div>
);

// Royal Indian Wedding Auspicious Crest & Mandala
export const RoyalWeddingCrest: React.FC<{ className?: string }> = ({ className = "w-16 h-16 text-[#C5A059]" }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="crestGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F7E7C4" />
        <stop offset="30%" stopColor="#D4AF37" />
        <stop offset="70%" stopColor="#AA7A1E" />
        <stop offset="100%" stopColor="#7A5312" />
      </linearGradient>
      <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#F7E7C4" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#AA7A1E" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Center Glow */}
    <circle cx="60" cy="60" r="45" fill="url(#sunGlow)" />

    {/* Outer Radiating Petals / Rays */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
      <path
        key={deg}
        d="M60 12 C58 20 62 20 60 28"
        stroke="url(#crestGoldGrad)"
        strokeWidth="1.2"
        strokeLinecap="round"
        transform={`rotate(${deg} 60 60)`}
      />
    ))}

    {/* Outer Dotted Filigree Ring */}
    <circle cx="60" cy="60" r="48" stroke="url(#crestGoldGrad)" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
    <circle cx="60" cy="60" r="42" stroke="url(#crestGoldGrad)" strokeWidth="1.2" />
    <circle cx="60" cy="60" r="38" stroke="url(#crestGoldGrad)" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />

    {/* Auspicious Sacred Diya / Kalash / Lotus Center Silhouette */}
    <path
      d="M60 38 C54 44 48 52 48 60 C48 68 53 74 60 76 C67 74 72 68 72 60 C72 52 66 44 60 38 Z"
      stroke="url(#crestGoldGrad)"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Lotus Petals */}
    <path d="M60 52 C56 57 52 64 52 70 C56 68 60 62 60 52 Z" fill="url(#crestGoldGrad)" fillOpacity="0.75" />
    <path d="M60 52 C64 57 68 64 68 70 C64 68 60 62 60 52 Z" fill="url(#crestGoldGrad)" fillOpacity="0.75" />
    <path d="M60 44 C58 50 58 60 60 68 C62 60 62 50 60 44 Z" fill="url(#crestGoldGrad)" />

    {/* Sacred Crown / Bindu Dot */}
    <circle cx="60" cy="34" r="2.5" fill="url(#crestGoldGrad)" />
    <circle cx="60" cy="82" r="2" fill="url(#crestGoldGrad)" />
  </svg>
);


// Refined Botanical Laurel & Monogram Crest
export const MonogramWreath: React.FC<{ className?: string }> = ({ className = "w-12 h-12 text-[#C5A059]" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F3E3B6" />
        <stop offset="50%" stopColor="#C5A059" />
        <stop offset="100%" stopColor="#8C6928" />
      </linearGradient>
    </defs>
    
    {/* Outer Dotted Filigree Ring */}
    <circle cx="50" cy="50" r="44" stroke="url(#crestGold)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
    <circle cx="50" cy="50" r="40" stroke="url(#crestGold)" strokeWidth="1.2" opacity="0.85" />
    
    {/* Laurel Leaves (Left) */}
    <path d="M48 20 C36 24 26 36 26 52 C26 68 36 78 48 80" stroke="url(#crestGold)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M36 32 Q28 30 32 24 Q38 30 36 32 Z" fill="url(#crestGold)" />
    <path d="M30 46 Q22 46 26 38 Q32 44 30 46 Z" fill="url(#crestGold)" />
    <path d="M30 60 Q22 62 26 70 Q32 62 30 60 Z" fill="url(#crestGold)" />
    
    {/* Laurel Leaves (Right) */}
    <path d="M52 20 C64 24 74 36 74 52 C74 68 64 78 52 80" stroke="url(#crestGold)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M64 32 Q72 30 68 24 Q62 30 64 32 Z" fill="url(#crestGold)" />
    <path d="M70 46 Q78 46 74 38 Q68 44 70 46 Z" fill="url(#crestGold)" />
    <path d="M70 60 Q78 62 74 70 Q68 62 70 60 Z" fill="url(#crestGold)" />

    {/* Center Botanical Flourish */}
    <circle cx="50" cy="50" r="2.5" fill="url(#crestGold)" />
    <path d="M50 36 L50 44" stroke="url(#crestGold)" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M50 56 L50 64" stroke="url(#crestGold)" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// Delicate Floral / Blossom Accent
export const BlossomMotif: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-[#C5A059]" }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <circle cx="30" cy="30" r="3" fill="currentColor" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <path
        key={i}
        d="M30 30 Q27 15 30 10 Q33 15 30 30"
        fill="currentColor"
        fillOpacity="0.45"
        transform={`rotate(${angle} 30 30)`}
      />
    ))}
  </svg>
);

// Flanked Botanical Leaf Sprigs with Elegant Ampersand (as in official invitation artwork)
export const BotanicalAmpersand: React.FC<{ className?: string }> = ({ className = "my-1" }) => (
  <div className={`flex items-center justify-center gap-2.5 sm:gap-3.5 select-none ${className}`} aria-hidden="true">
    {/* Left Leaf Sprig */}
    <svg viewBox="0 0 70 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 sm:w-14 h-5 text-[#C5A059]">
      <path d="M68 14 C48 14 30 14 6 14" stroke="#8C6928" strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />
      {/* Top Leaf Cluster */}
      <path d="M48 14 C44 7 34 6 28 10 C36 13 42 14 48 14 Z" fill="#C5A059" stroke="#8C6928" strokeWidth="0.5" />
      {/* Bottom Leaf Cluster */}
      <path d="M42 14 C38 21 28 22 22 18 C30 15 36 14 42 14 Z" fill="#C5A059" stroke="#8C6928" strokeWidth="0.5" />
      {/* Outer Leaf Cluster */}
      <path d="M26 14 C22 9 14 8 10 12 C16 13 20 14 26 14 Z" fill="#C5A059" stroke="#8C6928" strokeWidth="0.5" />
      <path d="M22 14 C18 19 10 20 6 16 C12 15 16 14 22 14 Z" fill="#C5A059" stroke="#8C6928" strokeWidth="0.5" />
      {/* Terminal Bud */}
      <circle cx="5" cy="14" r="1.5" fill="#8C6928" />
    </svg>

    {/* Center Calligraphic Gold Ampersand */}
    <span className="font-serif italic font-normal text-3xl sm:text-4xl text-[#8C6928] leading-none px-0.5 transform -translate-y-0.5 select-none drop-shadow-xs">
      &amp;
    </span>

    {/* Right Leaf Sprig (Mirrored) */}
    <svg viewBox="0 0 70 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 sm:w-14 h-5 text-[#C5A059] transform -scale-x-100">
      <path d="M68 14 C48 14 30 14 6 14" stroke="#8C6928" strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />
      <path d="M48 14 C44 7 34 6 28 10 C36 13 42 14 48 14 Z" fill="#C5A059" stroke="#8C6928" strokeWidth="0.5" />
      <path d="M42 14 C38 21 28 22 22 18 C30 15 36 14 42 14 Z" fill="#C5A059" stroke="#8C6928" strokeWidth="0.5" />
      <path d="M26 14 C22 9 14 8 10 12 C16 13 20 14 26 14 Z" fill="#C5A059" stroke="#8C6928" strokeWidth="0.5" />
      <path d="M22 14 C18 19 10 20 6 16 C12 15 16 14 22 14 Z" fill="#C5A059" stroke="#8C6928" strokeWidth="0.5" />
      <circle cx="5" cy="14" r="1.5" fill="#8C6928" />
    </svg>
  </div>
);

// Elegant Stationery Corner Flourish
export const StationeryCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = "w-14 h-14 text-[#C5A059]" }) => {
  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <div className={`pointer-events-none select-none ${rotation} ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M6 6H40C58 6 68 16 68 34V38C68 56 78 66 94 66" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        <path d="M6 6V40C6 58 16 68 34 68H38C56 68 66 78 66 94" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        <circle cx="6" cy="6" r="3" fill="currentColor" />
        <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.8" />
        <path d="M8 8C20 8 30 18 30 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 8C8 20 18 30 30 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 14L34 34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      </svg>
    </div>
  );
};

// Refined Hairline Golden Divider
export const FloralDivider: React.FC<{ className?: string; text?: string }> = ({ className = "w-full max-w-sm text-[#C5A059]", text }) => (
  <div className={`flex items-center justify-center gap-3 my-6 select-none ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059] to-[#8C6928]" />
    {text ? (
      <span className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-[#8C6928] font-bold px-3 py-0.5 rounded-full border border-[#C5A059]/40 bg-[#FAF6F0]">
        {text}
      </span>
    ) : (
      <div className="flex items-center gap-1.5 text-[#C5A059]">
        <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
        <BlossomMotif className="w-4 h-4 text-[#C5A059]" />
        <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
      </div>
    )}
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C5A059] to-[#8C6928]" />
  </div>
);

// Wax Seal with Initials "A & S"
export const WaxSeal: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}> = ({ size = 'md', onClick, className = '' }) => {
  const sizeClasses = {
    sm: 'w-14 h-14 text-sm',
    md: 'w-22 h-22 text-base sm:w-24 sm:h-24',
    lg: 'w-28 h-28 text-xl',
  }[size];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-105 active:scale-95 group focus:outline-none ${sizeClasses} ${className}`}
      aria-label="Wax seal Anand and Subhashini"
    >
      {/* Deep Burgundy/Maroon Wax Luster */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8E2522] via-[#661614] to-[#3B0A0C] shadow-2xl border-2 border-[#E8D39F]/60 group-hover:border-[#FFF3D6] group-hover:shadow-[0_0_25px_rgba(232,211,159,0.5)] transition-all" />
      
      {/* Outer Dotted Gold Ring */}
      <div className="absolute inset-2 rounded-full border border-dashed border-[#E8D39F]/70 flex items-center justify-center pointer-events-none" />
      
      {/* Inner Fine Ring */}
      <div className="absolute inset-3 rounded-full border border-[#C5A059]/40 pointer-events-none" />
      
      {/* Embossed Monogram */}
      <div className="relative z-10 flex flex-col items-center justify-center font-cinzel-dec font-bold tracking-widest text-[#F5E6C4] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
        <span className="text-sm sm:text-base font-bold">A &amp; S</span>
        <span className="text-[8px] tracking-[0.2em] font-sans font-semibold text-[#E8D39F]/80 uppercase -mt-0.5">2026</span>
      </div>
    </button>
  );
};

