import React, { useState } from 'react';
import { motion } from 'motion/react';
import { WEDDING_DATA } from '../data/weddingData';
import { StationeryCorner, FloralDivider } from './Motifs';
import { MapPin, Navigation, ExternalLink, Copy, Check, Sparkles } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(WEDDING_DATA.venue.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="venue"
      className="relative py-6 sm:py-10 px-3 sm:px-6 w-full max-w-4xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-5 sm:mb-7">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F4E9D8] border border-[#C5A059]/50 mb-2 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#731A1D]" />
            <span className="font-montserrat text-[10px] tracking-[0.25em] text-[#731A1D] uppercase font-bold">
              VENUE &amp; LOCATION
            </span>
            <Sparkles className="w-3 h-3 text-[#731A1D]" />
          </div>

          <h2 className="font-playfair text-2xl sm:text-4xl text-[#24130A] font-bold tracking-wide">
            Celebrate With Us
          </h2>

          <FloralDivider className="max-w-xs mx-auto my-2" />
        </motion.div>
      </div>

      {/* Main Venue Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#F3ECE1] p-5 sm:p-8 shadow-royal-card border border-[#E8D39F]/90 overflow-hidden"
      >
        <StationeryCorner position="top-left" className="absolute top-2.5 left-2.5 w-8 h-8 text-[#C5A059]" />
        <StationeryCorner position="bottom-right" className="absolute bottom-2.5 right-2.5 w-8 h-8 text-[#C5A059]" />

        <div className="text-center max-w-xl mx-auto mb-5">
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-[#731A1D] to-[#4A1012] text-[#F3E3B6] mb-3 shadow-xs border border-[#F3E3B6]/50">
            <MapPin className="w-5 h-5 text-[#F3E3B6]" />
          </div>

          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#24130A] mb-1.5 tracking-wide">
            {WEDDING_DATA.venue.name}
          </h3>

          <p className="font-sans text-xs sm:text-sm text-[#5C3B28] max-w-md mx-auto mb-4 leading-relaxed">
            Pallapatti Main Road, Pallapatti, Karur District, Tamil Nadu – 639205
          </p>

          {/* Quick Copy Address Button */}
          <button
            type="button"
            onClick={handleCopyAddress}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F4E9D8] hover:bg-[#EAD9C2] text-[11px] text-[#24130A] font-montserrat font-bold tracking-wider transition-all border border-[#C5A059]/60 shadow-xs cursor-pointer active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span className="text-emerald-800 font-bold">ADDRESS COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#8C6928]" />
                <span>COPY FULL ADDRESS</span>
              </>
            )}
          </button>
        </div>

        {/* Embedded Map Frame with Royal Border Ring - Compact height */}
        <div className="relative w-full h-48 sm:h-64 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C5A059]/60 shadow-inner bg-[#EFE7DC] mb-5">
          <iframe
            title="K.P. Mahal Pallapatti Location Map"
            src="https://maps.google.com/maps?q=KP+Mahal+Pallapatti+Karur+Tamil+Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 filter contrast-[98%] saturate-[95%]"
            loading="lazy"
            allowFullScreen
          />
          
          {/* Map Overlay Badge */}
          <div className="absolute top-2.5 left-2.5 bg-[#FAF6F0]/95 backdrop-blur-xs px-3 py-1 rounded-lg border border-[#C5A059]/60 shadow-xs flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#731A1D] animate-ping" />
            <span className="font-montserrat text-[10px] font-bold text-[#24130A]">K.P. Mahal • Pallapatti</span>
          </div>
        </div>

        {/* Action Buttons: GET DIRECTIONS & OPEN IN MAPS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          {/* GET DIRECTIONS BUTTON */}
          <a
            id="get-directions-btn"
            href={WEDDING_DATA.venue.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#731A1D] via-[#591416] to-[#731A1D] text-[#FAF6F0] font-montserrat font-bold text-xs tracking-wider shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all border border-[#F3E3B6]/50"
          >
            <Navigation className="w-3.5 h-3.5 text-[#F3E3B6]" />
            <span>GET DIRECTIONS</span>
          </a>

          {/* OPEN IN MAPS BUTTON */}
          <a
            id="open-in-maps-btn"
            href={WEDDING_DATA.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF6F0] text-[#24130A] border-2 border-[#C5A059] font-montserrat font-bold text-xs tracking-wider shadow-xs hover:bg-[#F4E9D8] hover:scale-102 active:scale-98 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#8C6928]" />
            <span>OPEN IN MAPS</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
