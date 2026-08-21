import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

interface AudioPlayerProps {
  autoPlayTrigger?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userMutedRef = useRef(false);

  // Audio source file in public folder
  const audioSrc = '/Wedding%20Invitation%20Music.mp3';

  // Toggle play/pause directly
  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      userMutedRef.current = true;
      audio.pause();
      setIsPlaying(false);
    } else {
      userMutedRef.current = false;
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Audio play error:', err));
    }
  };

  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.volume = 0.85;
    audioRef.current = audio;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    // Initial play attempt
    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        // Unlock on first interaction anywhere on page only if user hasn't chosen to mute
        const handleFirstInteraction = (ev: Event) => {
          // If clicked the music toggle button itself, do not auto-unmute here
          const target = ev.target as HTMLElement;
          if (target && target.closest('#wedding-music-toggle')) {
            return;
          }

          if (!userMutedRef.current && audio.paused) {
            audio.play().then(() => setIsPlaying(true)).catch(() => {});
          }
          removeListeners();
        };

        const removeListeners = () => {
          window.removeEventListener('click', handleFirstInteraction);
          window.removeEventListener('touchstart', handleFirstInteraction);
        };

        window.addEventListener('click', handleFirstInteraction, { passive: true });
        window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
      });

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.pause();
      audio.src = '';
    };
  }, []);

  // When user opens the invitation book, trigger audio play if not muted by user
  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !userMutedRef.current && audioRef.current.paused) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  }, [autoPlayTrigger]);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center">
      <motion.button
        id="wedding-music-toggle"
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMusic}
        className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full backdrop-blur-md shadow-lg border transition-all duration-300 cursor-pointer select-none ${
          isPlaying
            ? 'bg-gradient-to-r from-[#731A1D] via-[#8C2024] to-[#731A1D] text-[#FFFDF8] border-[#E8D39F] shadow-[0_4px_20px_rgba(115,26,29,0.45)]'
            : 'bg-[#FAF5EC]/95 text-[#5C3B28] border-[#C5A059]/50 hover:border-[#731A1D]'
        }`}
        aria-label={isPlaying ? "Music is ON (click to mute)" : "Music is OFF (click to play)"}
      >
        <span className="relative flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-[#FDE08B] animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 text-[#731A1D]/70" />
          )}
        </span>

        <span className={`text-[11px] sm:text-xs font-montserrat font-bold tracking-wider ${isPlaying ? 'text-[#FFF6DF]' : 'text-[#5C3B28]'}`}>
          {isPlaying ? 'Music: ON' : 'Music: OFF'}
        </span>

        {/* Animated equalizer bars when active */}
        {isPlaying && (
          <span className="flex items-end gap-[3px] h-3.5 ml-0.5">
            <span className="w-[2.5px] h-2 bg-[#FDE08B] rounded-full animate-[pulse_0.6s_ease-in-out_infinite]" />
            <span className="w-[2.5px] h-3.5 bg-[#FDE08B] rounded-full animate-[bounce_0.8s_ease-in-out_infinite]" />
            <span className="w-[2.5px] h-1.5 bg-[#FDE08B] rounded-full animate-[pulse_0.4s_ease-in-out_infinite]" />
            <span className="w-[2.5px] h-3 bg-[#FDE08B] rounded-full animate-[bounce_0.7s_ease-in-out_infinite]" />
          </span>
        )}
      </motion.button>
    </div>
  );
};
