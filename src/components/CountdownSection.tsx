import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { WEDDING_DATA, generateGoogleCalendarUrl, downloadIcsFile } from '../data/weddingData';
import { Sparkles, CalendarPlus, MessageCircle, Copy, Check } from 'lucide-react';

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const target = new Date(WEDDING_DATA.countdownTarget).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const googleCalUrl = generateGoogleCalendarUrl();

  const handleDownloadIcs = () => {
    downloadIcsFile();
  };

  const handleCopyInvitationLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `💐 *Wedding Invitation: Anand & Subhashini* 💐\n\n` +
      `We joyfully invite you to celebrate our wedding on 12 & 13 September 2026 at K.P. Mahal, Pallapatti, Karur District.\n\n` +
      `View our wedding invitation: ${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      className="relative py-6 sm:py-10 px-3 sm:px-6 w-full max-w-3xl mx-auto text-center"
    >
      {/* Background Subtle Radial Gold Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C5A059]/15 to-transparent blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#24130A] via-[#1D0F08] to-[#120804] text-[#FAF6F0] p-5 sm:p-8 shadow-2xl border border-[#C5A059]/60 overflow-hidden"
      >
        {/* Inset Gold Border */}
        <div className="absolute inset-2.5 sm:inset-3 rounded-[22px] sm:rounded-[30px] border border-[#C5A059]/30 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-center gap-1.5 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#F3E3B6]" />
            <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#F3E3B6] font-bold">
              COUNTING DOWN TO FOREVER
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#F3E3B6]" />
          </div>

          <h3 className="font-playfair text-2xl sm:text-3xl font-bold tracking-wide text-[#FAF6F0] mb-1">
            The Wedding Day
          </h3>

          <p className="font-serif italic text-xs sm:text-sm text-[#E8D39F] mb-5 font-normal">
            Sunday, 13 September 2026 • 7:00 AM to 8:15 AM
          </p>

          {/* 4 Countdown Blocks - Compact & Crisp */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3.5 max-w-md mx-auto mb-6">
            {timeBlocks.map((block, idx) => (
              <div
                key={idx}
                className="relative rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#3D2214] to-[#24130A] border border-[#C5A059]/50 p-2 sm:p-3 shadow-md flex flex-col items-center justify-center group"
              >
                <span className="font-playfair text-xl sm:text-3xl font-bold text-[#F3E3B6] drop-shadow-xs">
                  {String(block.value).padStart(2, '0')}
                </span>
                
                <span className="font-montserrat text-[8px] sm:text-[9px] tracking-[0.2em] text-[#C5A059] font-bold mt-0.5 uppercase">
                  {block.label}
                </span>
              </div>
            ))}
          </div>

          {/* Unified Save the Date & Sharing Buttons */}
          <div className="pt-4 border-t border-[#C5A059]/25 max-w-md mx-auto">
            <p className="text-[11px] font-montserrat tracking-widest text-[#E8D39F] uppercase font-semibold mb-3">
              Add to Calendar &amp; Share
            </p>

            <div className="grid grid-cols-3 gap-2 mb-3">
              {/* Google Calendar */}
              <a
                href={googleCalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-[#FAF6F0] hover:bg-white text-[11px] font-montserrat font-bold text-[#24130A] border border-[#C5A059]/60 shadow-xs transition-all cursor-pointer"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-[#8C6928]" />
                <span>Google</span>
              </a>

              {/* Apple iCal */}
              <button
                type="button"
                onClick={handleDownloadIcs}
                className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-[#FAF6F0] hover:bg-white text-[11px] font-montserrat font-bold text-[#24130A] border border-[#C5A059]/60 shadow-xs transition-all cursor-pointer"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-[#731A1D]" />
                <span>Apple/iCal</span>
              </button>

              {/* WhatsApp Share */}
              <button
                type="button"
                onClick={handleWhatsAppShare}
                className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[11px] font-montserrat font-bold text-white shadow-xs transition-all cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Copy Link Button */}
            <button
              type="button"
              onClick={handleCopyInvitationLink}
              className="inline-flex items-center gap-1.5 text-[11px] font-montserrat text-[#E8D39F] hover:text-white transition-colors cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-[#C5A059]" />
                  <span>Copy Invitation Link</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
