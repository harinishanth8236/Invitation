import React from 'react';

interface CoupleIllustrationProps {
  type: 'formal' | 'candid';
  className?: string;
}

export const CoupleIllustration: React.FC<CoupleIllustrationProps> = ({ type, className = '' }) => {
  if (type === 'candid') {
    return (
      <div className={`relative w-full h-full flex flex-col items-center justify-between p-6 text-center bg-gradient-to-b from-[#FDFBF7] via-[#F6ECE0] to-[#EBDAC8] overflow-hidden ${className}`}>
        {/* Soft Background Rings & Glow */}
        <div className="absolute inset-4 rounded-full border border-dashed border-[#C5A059]/40 opacity-70" />
        <div className="absolute inset-8 rounded-full border border-[#C5A059]/20" />
        
        {/* Ambient Top Motif */}
        <div className="relative z-10 pt-2 text-[#9A7B38]">
          <svg viewBox="0 0 40 16" className="w-10 h-4 mx-auto fill-current opacity-80">
            <path d="M20 0 C25 6 35 8 40 8 C35 8 25 10 20 16 C15 10 5 8 0 8 C5 8 15 6 20 0 Z" />
          </svg>
        </div>

        {/* Candid Couple Iconography & Intimate Portrait */}
        <div className="relative z-10 my-auto flex flex-col items-center">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#EFE3D3] via-[#E4D0BD] to-[#D5BAA0] border-2 border-[#C5A059] flex items-center justify-center shadow-xl p-2 mb-3">
            <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
              {/* Couple silhouette with warm tone fills */}
              <ellipse cx="60" cy="95" rx="42" ry="25" fill="#4B3020" fillOpacity="0.15" />
              
              {/* Bride (Left) */}
              <ellipse cx="42" cy="48" rx="16" ry="18" fill="#F0CEB0" />
              {/* Bride Hair */}
              <path d="M24 50 C22 30 35 24 50 25 C58 26 62 34 60 48 C56 42 50 38 42 38 C32 38 26 44 24 50 Z" fill="#1C140E" />
              <path d="M24 50 C20 70 26 90 35 100 C30 85 28 65 24 50 Z" fill="#1C140E" />
              {/* Bindi & Smile */}
              <circle cx="42" cy="42" r="1.5" fill="#991B1B" />
              <path d="M38 54 Q42 58 46 54" stroke="#991B1B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              {/* Teal Saree & Maroon Blouse */}
              <path d="M26 80 C26 66 48 66 50 80 L48 115 L26 115 Z" fill="#6DA6B8" />
              <path d="M24 75 C22 85 28 92 34 92 C36 82 32 75 24 75 Z" fill="#6A1F30" />

              {/* Groom (Right) */}
              <ellipse cx="78" cy="46" rx="17" ry="19" fill="#E6BF9E" />
              {/* Groom Hair */}
              <path d="M62 38 C64 24 76 22 88 24 C96 26 98 35 96 46 C92 36 84 32 76 32 C68 32 64 35 62 38 Z" fill="#18110D" />
              {/* Groom Beard & Glasses */}
              <path d="M66 50 C68 62 74 65 78 65 C82 65 88 62 90 50 C86 58 82 60 78 60 C74 60 70 58 66 50 Z" fill="#1C140E" />
              <rect x="66" y="42" width="10" height="7" rx="1.5" stroke="#1C140E" strokeWidth="1.8" fill="none" />
              <rect x="80" y="42" width="10" height="7" rx="1.5" stroke="#1C140E" strokeWidth="1.8" fill="none" />
              <line x1="76" y1="45" x2="80" y2="45" stroke="#1C140E" strokeWidth="1.5" />
              {/* Smile */}
              <path d="M74 54 Q78 57 82 54" stroke="#1C140E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              {/* Sky Blue Shirt */}
              <path d="M54 82 C56 68 98 68 102 82 L102 115 L54 115 Z" fill="#7FA7C4" />
            </svg>
          </div>

          <h4 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C1A11] tracking-wide">
            Anand &amp; Subhashini
          </h4>
          <p className="font-serif italic text-sm text-[#7A5B49] mt-1 max-w-xs">
            “Blessed with love, laughter &amp; forever”
          </p>
        </div>

        {/* Bottom subtle date badge */}
        <div className="relative z-10 pb-1">
          <span className="font-cinzel text-[10px] tracking-[0.25em] text-[#9A7B38] font-bold uppercase">
            September 2026 • Karur
          </span>
        </div>
      </div>
    );
  }

  // Formal Wedding Seated Portrait Caricature (Exact representation of uploaded image)
  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-between bg-[#FBF8F3] overflow-hidden ${className}`}>
      
      {/* Background Soft Watercolor Parchment Aura */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9F5EE] via-[#F4ECE1] to-[#E9DAC8] opacity-90 pointer-events-none" />
      
      {/* Delicate Gold Leaf Filigree Border */}
      <div className="absolute inset-2 sm:inset-3 rounded-t-[140px] rounded-b-[24px] border border-[#C5A059]/40 pointer-events-none" />
      <div className="absolute inset-3.5 sm:inset-4.5 rounded-t-[130px] rounded-b-[20px] border border-dashed border-[#C5A059]/30 pointer-events-none" />

      {/* SVG Canvas Matching the Uploaded Couple Portrait */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-2 sm:p-3">
        <svg
          viewBox="0 0 400 530"
          className="w-full h-full max-h-full drop-shadow-sm select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients for Saree, Shirt, Florals & Skin */}
            <linearGradient id="bgWatercolorGlow" x1="200" y1="30" x2="200" y2="480" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F5ECE0" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#EEDDC9" stopOpacity="0.9" />
              <stop offset="85%" stopColor="#E2CDB6" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#D8BEA3" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="goldZariGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F7E7B4" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#997819" />
            </linearGradient>

            <linearGradient id="tealSareeGrad" x1="100" y1="180" x2="200" y2="380" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#82BDCF" />
              <stop offset="40%" stopColor="#5E9DB0" />
              <stop offset="100%" stopColor="#3F7686" />
            </linearGradient>

            <linearGradient id="maroonBlouseGrad" x1="50" y1="150" x2="130" y2="240" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8A2E44" />
              <stop offset="60%" stopColor="#661E30" />
              <stop offset="100%" stopColor="#4A1221" />
            </linearGradient>

            <linearGradient id="blueShirtGrad" x1="180" y1="150" x2="350" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A4CDE7" />
              <stop offset="35%" stopColor="#7EAFD0" />
              <stop offset="85%" stopColor="#5B8CAE" />
              <stop offset="100%" stopColor="#467394" />
            </linearGradient>

            <linearGradient id="navyPantsGrad" x1="180" y1="300" x2="350" y2="440" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2A374A" />
              <stop offset="100%" stopColor="#17202C" />
            </linearGradient>

            <radialGradient id="rosePinkGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FCE7E6" />
              <stop offset="60%" stopColor="#F3B6B3" />
              <stop offset="100%" stopColor="#DA8986" />
            </radialGradient>

            <radialGradient id="peonyWhiteGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#FAF2E8" />
              <stop offset="100%" stopColor="#E9DAC8" />
            </radialGradient>
          </defs>

          {/* Oval Background Arch Silhouette */}
          <ellipse cx="200" cy="240" rx="165" ry="210" fill="url(#bgWatercolorGlow)" />
          
          {/* Fine Gold Oval Outline with Foliage */}
          <ellipse cx="200" cy="235" rx="155" ry="200" stroke="#C5A059" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="6 3" />
          <ellipse cx="200" cy="235" rx="159" ry="204" stroke="#E8D39F" strokeWidth="0.75" strokeOpacity="0.8" />

          {/* Upper Botanical Vines along the Arch */}
          <g id="upper-vines" opacity="0.75">
            {/* Top Right Leaves */}
            <path d="M310 120 Q335 150 345 190" stroke="#7A8D6E" strokeWidth="2" fill="none" />
            <ellipse cx="320" cy="130" rx="12" ry="7" transform="rotate(-35 320 130)" fill="#8A9E7E" />
            <ellipse cx="338" cy="155" rx="14" ry="8" transform="rotate(-20 338 155)" fill="#788C6C" />
            <ellipse cx="348" cy="185" rx="13" ry="7" transform="rotate(5 348 185)" fill="#96AA8A" />
            
            {/* Top Left Leaves */}
            <path d="M90 120 Q65 150 55 190" stroke="#7A8D6E" strokeWidth="2" fill="none" />
            <ellipse cx="80" cy="130" rx="12" ry="7" transform="rotate(35 80 130)" fill="#8A9E7E" />
            <ellipse cx="62" cy="155" rx="14" ry="8" transform="rotate(20 62 155)" fill="#788C6C" />
            <ellipse cx="52" cy="185" rx="13" ry="7" transform="rotate(-5 52 185)" fill="#96AA8A" />
          </g>

          {/* ======================================================== */}
          {/* SUBHASHINI (BRIDE - SEATED LEFT) */}
          {/* ======================================================== */}
          <g id="bride-subhashini">
            {/* Back Hair Cascading */}
            <path
              d="M70 160 C50 190 55 260 85 300 C75 250 80 200 95 170 Z"
              fill="#1C140E"
            />
            
            {/* Teal/Sky-Blue Saree Lower Pleats & Drape */}
            <path
              d="M75 250 C55 310 70 410 155 415 C140 350 120 280 75 250 Z"
              fill="url(#tealSareeGrad)"
            />
            {/* Saree Pleat Shadows & Zari Patterns */}
            <path d="M85 290 Q110 350 120 410" stroke="#3A6A78" strokeWidth="2" fill="none" />
            <path d="M100 280 Q125 340 140 412" stroke="#3A6A78" strokeWidth="2" fill="none" />
            <path d="M72 330 Q100 370 125 410" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" fill="none" />
            <path d="M85 370 Q110 395 145 414" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" fill="none" />

            {/* Maroon Silk Blouse with Rich Brocade Sleeve */}
            <path
              d="M60 195 C50 225 65 265 92 265 C95 235 90 205 60 195 Z"
              fill="url(#maroonBlouseGrad)"
            />
            {/* Blouse Gold Border */}
            <path d="M66 250 Q80 262 90 258" stroke="url(#goldZariGrad)" strokeWidth="3" fill="none" />

            {/* Saree Pallu crossing over left shoulder across torso */}
            <path
              d="M95 200 C110 240 135 320 158 375 C175 375 165 310 135 240 C125 210 110 195 95 200 Z"
              fill="url(#tealSareeGrad)"
              stroke="#D4AF37"
              strokeWidth="1"
            />
            {/* Brocade Pallu Detailed Floral Texture */}
            <path d="M108 225 Q130 280 150 350" stroke="#F7E7B4" strokeWidth="1.2" strokeDasharray="4 2" fill="none" />
            <path d="M118 240 Q140 295 156 365" stroke="#F7E7B4" strokeWidth="1.2" strokeDasharray="4 2" fill="none" />

            {/* Bride Left Arm & Hand with Henna/Mehndi on Lap */}
            <path
              d="M80 250 C88 280 102 315 125 325 C122 335 105 328 85 290 Z"
              fill="#EAC2A1"
            />
            {/* Hands Gently Resting */}
            <ellipse cx="132" cy="328" rx="16" ry="12" fill="#E8BD9A" />
            {/* Mehndi / Henna Motifs on Hand */}
            <path d="M125 322 Q132 328 138 322" stroke="#8A3D24" strokeWidth="1.5" fill="none" />
            <circle cx="132" cy="328" r="3" fill="#8A3D24" fillOpacity="0.8" />
            <path d="M122 326 Q132 333 140 326" stroke="#8A3D24" strokeWidth="1" strokeDasharray="1.5 1.5" fill="none" />

            {/* Traditional Gold Bangles Stack on Wrists */}
            <g id="bride-bangles">
              <rect x="110" y="308" width="14" height="4" rx="1.5" fill="url(#goldZariGrad)" transform="rotate(-35 110 308)" />
              <rect x="114" y="313" width="14" height="3" rx="1" fill="#991B1B" transform="rotate(-35 114 313)" />
              <rect x="117" y="317" width="14" height="4" rx="1.5" fill="url(#goldZariGrad)" transform="rotate(-35 117 317)" />
            </g>

            {/* Neck & Royal Gold Mango Haram Jewelry */}
            <path d="M102 165 L102 200 L124 200 L124 165 Z" fill="#E8BD9A" />
            {/* Choker Necklace */}
            <path d="M102 175 Q113 185 124 175" stroke="url(#goldZariGrad)" strokeWidth="4" fill="none" />
            {/* Long Traditional Mango Haram Necklace */}
            <path d="M98 185 Q113 218 128 185" stroke="url(#goldZariGrad)" strokeWidth="4.5" fill="none" />
            <circle cx="113" cy="214" r="5" fill="url(#goldZariGrad)" />
            <circle cx="113" cy="214" r="2.5" fill="#991B1B" />

            {/* Bride Face & Head */}
            <ellipse cx="114" cy="135" rx="27" ry="32" fill="#F2CDAC" />

            {/* Bride Luxurious Hair Styling */}
            <path
              d="M78 135 C75 90 95 70 120 70 C145 70 155 95 152 135 C146 100 135 88 116 88 C95 88 84 105 78 135 Z"
              fill="#1C140E"
            />
            {/* Hair swept gracefully behind left ear and over left shoulder */}
            <path
              d="M78 135 C72 165 74 210 92 245 C86 200 84 160 84 135 Z"
              fill="#1C140E"
            />

            {/* Auspicious Round Red Bindi */}
            <circle cx="114" cy="115" r="3" fill="#A81D1D" />

            {/* Delicate Arching Eyebrows */}
            <path d="M98 120 Q106 114 113 120" stroke="#2C1A11" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M117 120 Q124 114 132 120" stroke="#2C1A11" strokeWidth="2.2" strokeLinecap="round" fill="none" />

            {/* Expressive Warm Eyes with Eyeliner */}
            <ellipse cx="104" cy="127" rx="5" ry="3.5" fill="#2C1A11" />
            <ellipse cx="126" cy="127" rx="5" ry="3.5" fill="#2C1A11" />
            <circle cx="106" cy="126" r="1.5" fill="#FFFFFF" />
            <circle cx="128" cy="126" r="1.5" fill="#FFFFFF" />

            {/* Refined Nose line */}
            <path d="M114 125 L113 137 Q117 139 120 137" stroke="#D19C75" strokeWidth="1.5" strokeLinecap="round" fill="none" />

            {/* Radiant Beaming Smile & Lips */}
            <path d="M103 146 Q114 158 125 146" fill="#C53030" />
            <path d="M105 147 Q114 152 123 147" fill="#FFFFFF" />
            <path d="M103 146 Q114 158 125 146" stroke="#991B1B" strokeWidth="1.5" fill="none" />

            {/* Traditional Gold Jhumka Earrings */}
            <g id="bride-jhumka">
              <circle cx="86" cy="142" r="3" fill="url(#goldZariGrad)" />
              <path d="M82 147 L90 147 L86 156 Z" fill="url(#goldZariGrad)" />
              <circle cx="86" cy="158" r="1.5" fill="#F7E7B4" />
            </g>
          </g>

          {/* ======================================================== */}
          {/* ANAND (GROOM - SEATED RIGHT) */}
          {/* ======================================================== */}
          <g id="groom-anand">
            {/* Groom Navy Blue Trousers */}
            <path
              d="M175 350 C160 380 165 440 220 445 C280 445 350 440 345 350 Z"
              fill="url(#navyPantsGrad)"
            />

            {/* Crisp Light Blue Button-Down Shirt */}
            <path
              d="M170 205 C150 240 155 330 160 385 C220 395 300 395 350 385 C355 330 365 240 340 205 C310 190 280 192 255 192 C230 192 195 190 170 205 Z"
              fill="url(#blueShirtGrad)"
            />
            {/* Shirt Collar Structure */}
            <path d="M236 195 L255 220 L248 195 Z" fill="#5F8EAة" fillOpacity="0.9" />
            <path d="M274 195 L255 220 L262 195 Z" fill="#5F8EAة" fillOpacity="0.9" />
            {/* Center Placket & Mother-of-Pearl Buttons */}
            <line x1="255" y1="220" x2="255" y2="380" stroke="#4B7797" strokeWidth="2" />
            <circle cx="255" cy="245" r="2.5" fill="#FFFFFF" stroke="#6C97B8" strokeWidth="0.8" />
            <circle cx="255" cy="280" r="2.5" fill="#FFFFFF" stroke="#6C97B8" strokeWidth="0.8" />
            <circle cx="255" cy="315" r="2.5" fill="#FFFFFF" stroke="#6C97B8" strokeWidth="0.8" />
            <circle cx="255" cy="350" r="2.5" fill="#FFFFFF" stroke="#6C97B8" strokeWidth="0.8" />

            {/* Groom's Forearms and Interlaced Hands in Lap */}
            {/* Left Arm & Right Arm coming together */}
            <path d="M165 270 C165 315 210 360 235 365" stroke="url(#blueShirtGrad)" strokeWidth="32" strokeLinecap="round" fill="none" />
            <path d="M345 270 C345 315 300 360 275 365" stroke="url(#blueShirtGrad)" strokeWidth="32" strokeLinecap="round" fill="none" />
            
            {/* Forearm skin */}
            <ellipse cx="230" cy="350" rx="16" ry="14" fill="#DBAE8A" />
            <ellipse cx="280" cy="350" rx="16" ry="14" fill="#DBAE8A" />

            {/* Interlaced Hands in Lap */}
            <g id="groom-clasped-hands">
              <ellipse cx="245" cy="358" rx="20" ry="15" fill="#E2BA98" />
              <ellipse cx="265" cy="358" rx="20" ry="15" fill="#E2BA98" />
              {/* Fingers intertwined */}
              <path d="M235 352 Q255 365 275 352" stroke="#B88A68" strokeWidth="2" fill="none" />
              <path d="M240 360 Q255 372 270 360" stroke="#B88A68" strokeWidth="2" fill="none" />
            </g>

            {/* Modern Black Smartwatch on Left Wrist */}
            <rect x="278" y="338" width="13" height="18" rx="3.5" fill="#1C1C1E" stroke="#3A3A3C" strokeWidth="1" />
            <rect x="281" y="342" width="7" height="10" rx="1.5" fill="#000000" />
            <line x1="278" y1="347" x2="291" y2="347" stroke="#48484A" strokeWidth="1" />

            {/* Sacred Red Thread / Kaappu on Wrist */}
            <path d="M222 342 Q230 348 238 344" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Groom Neck */}
            <path d="M242 175 L242 205 L268 205 L268 175 Z" fill="#E2BA98" />

            {/* Groom Face & Head */}
            <ellipse cx="255" cy="135" rx="32" ry="36" fill="#E8C3A4" />

            {/* Groom Neatly Styled Short Dark Hair */}
            <path
              d="M220 125 C216 75 240 60 270 60 C298 60 306 85 304 125 C295 90 275 80 255 80 C235 80 225 95 220 125 Z"
              fill="#18110D"
            />

            {/* Trimmed Full Beard & Mustache */}
            <path
              d="M225 138 C228 172 245 180 255 180 C265 180 282 172 285 138 C278 165 268 170 255 170 C242 170 232 165 225 138 Z"
              fill="#221713"
            />
            {/* Mustache Line */}
            <path
              d="M236 148 Q255 144 274 148 C266 156 244 156 236 148 Z"
              fill="#221713"
            />

            {/* Stylish Rectangular Black Eyeglasses */}
            <g id="groom-glasses">
              {/* Left Lens Frame */}
              <rect x="228" y="120" width="22" height="17" rx="4" stroke="#18181B" strokeWidth="3.5" fill="#FFFFFF" fillOpacity="0.15" />
              {/* Right Lens Frame */}
              <rect x="258" y="120" width="22" height="17" rx="4" stroke="#18181B" strokeWidth="3.5" fill="#FFFFFF" fillOpacity="0.15" />
              {/* Bridge */}
              <line x1="250" y1="127" x2="258" y2="127" stroke="#18181B" strokeWidth="3.5" strokeLinecap="round" />
              {/* Temples */}
              <line x1="228" y1="125" x2="222" y2="128" stroke="#18181B" strokeWidth="3" />
              <line x1="280" y1="125" x2="286" y2="128" stroke="#18181B" strokeWidth="3" />
            </g>

            {/* Groom Eyes behind glasses */}
            <circle cx="239" cy="128" r="4" fill="#2C1A11" />
            <circle cx="269" cy="128" r="4" fill="#2C1A11" />
            <circle cx="240.5" cy="126.5" r="1.5" fill="#FFFFFF" />
            <circle cx="270.5" cy="126.5" r="1.5" fill="#FFFFFF" />

            {/* Confident, Warm Smile */}
            <path d="M245 156 Q255 163 265 156" stroke="#2C1A11" strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>

          {/* ======================================================== */}
          {/* LUSH BOTTOM FLORAL WREATH & GOLD LEAVES (FOREGROUND) */}
          {/* ======================================================== */}
          <g id="bottom-florals" transform="translate(0, 370)">
            {/* Deep Sage & Olive Leaves Base */}
            <g id="greenery" opacity="0.95">
              <ellipse cx="60" cy="50" rx="28" ry="14" transform="rotate(-30 60 50)" fill="#6B8060" />
              <ellipse cx="90" cy="70" rx="32" ry="16" transform="rotate(20 90 70)" fill="#586E4E" />
              <ellipse cx="330" cy="50" rx="28" ry="14" transform="rotate(30 330 50)" fill="#6B8060" />
              <ellipse cx="300" cy="70" rx="32" ry="16" transform="rotate(-20 300 70)" fill="#586E4E" />
              
              {/* Golden Sprigs */}
              <path d="M40 70 Q70 40 100 65" stroke="url(#goldZariGrad)" strokeWidth="2" fill="none" />
              <circle cx="50" cy="62" r="3.5" fill="url(#goldZariGrad)" />
              <circle cx="75" cy="48" r="3.5" fill="url(#goldZariGrad)" />
              <circle cx="95" cy="60" r="3.5" fill="url(#goldZariGrad)" />

              <path d="M360 70 Q330 40 300 65" stroke="url(#goldZariGrad)" strokeWidth="2" fill="none" />
              <circle cx="350" cy="62" r="3.5" fill="url(#goldZariGrad)" />
              <circle cx="325" cy="48" r="3.5" fill="url(#goldZariGrad)" />
              <circle cx="305" cy="60" r="3.5" fill="url(#goldZariGrad)" />
            </g>

            {/* Left Blush Pink Garden Rose */}
            <g id="rose-left" transform="translate(100, 50)">
              <circle cx="0" cy="0" rx="26" ry="24" fill="url(#rosePinkGrad)" />
              {/* Petal Layering Swirls */}
              <path d="M-15 -10 Q0 -22 15 -10 Q20 5 10 16 Q-8 22 -18 10 Z" fill="#ECA29F" />
              <path d="M-10 -5 Q0 -14 10 -5 Q14 6 6 12 Q-6 16 -12 6 Z" fill="#E28986" />
              <circle cx="0" cy="2" r="5" fill="#D37370" />
            </g>

            {/* Center Large White Peony / Lotus Blossom */}
            <g id="peony-center" transform="translate(195, 60)">
              <ellipse cx="0" cy="0" rx="42" ry="34" fill="url(#peonyWhiteGrad)" stroke="#E8D39F" strokeWidth="1" />
              {/* Inner Petals */}
              <ellipse cx="-15" cy="-6" rx="20" ry="16" transform="rotate(-15 -15 -6)" fill="#FFFFFF" fillOpacity="0.9" />
              <ellipse cx="15" cy="-6" rx="20" ry="16" transform="rotate(15 15 -6)" fill="#FFFFFF" fillOpacity="0.9" />
              <ellipse cx="0" cy="8" rx="22" ry="16" fill="#FDFBF7" />
              <ellipse cx="0" cy="-2" rx="14" ry="12" fill="#F7EDE1" />
              {/* Golden Stamen Pistils */}
              <circle cx="-4" cy="-3" r="2.5" fill="#D4AF37" />
              <circle cx="4" cy="-3" r="2.5" fill="#D4AF37" />
              <circle cx="0" cy="2" r="2.5" fill="#D4AF37" />
            </g>

            {/* Right Romantic Pink Rose */}
            <g id="rose-right" transform="translate(290, 48)">
              <circle cx="0" cy="0" rx="25" ry="23" fill="url(#rosePinkGrad)" />
              {/* Petal Swirls */}
              <path d="M-14 -9 Q0 -20 14 -9 Q18 4 9 15 Q-7 20 -16 9 Z" fill="#ECA29F" />
              <path d="M-9 -4 Q0 -12 9 -4 Q12 5 5 10 Q-5 14 -10 5 Z" fill="#E28986" />
              <circle cx="0" cy="2" r="4.5" fill="#D37370" />
            </g>
          </g>
        </svg>
      </div>

      {/* Couple Name and Celebration Banner */}
      <div className="relative z-10 text-center pb-3 pt-1">
        <h4 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C1A11] tracking-wide">
          Anand &amp; Subhashini
        </h4>
        <div className="flex items-center justify-center gap-2 mt-1">
          <span className="h-px w-6 bg-[#C5A059]/60" />
          <span className="font-cinzel text-[10px] tracking-[0.25em] text-[#9A7B38] font-bold uppercase">
            12 &amp; 13 September 2026
          </span>
          <span className="h-px w-6 bg-[#C5A059]/60" />
        </div>
      </div>

    </div>
  );
};
