'use client'
import { Volume2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ModeToggle from "@/components/ui/modetoggle";

type NavbarProps = {
  type?: string;
};

const audioSrc = "/kathlagda.mpeg";

const Navbar = ({ type }: NavbarProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      void audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  if (type === 'header') {
    return (
      <div className="bg-turbo-light-gray p-3 w-full flex items-center justify-center relative">
        {/* Left: Mode toggle, vertically centered */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <ModeToggle />
        </div>

        {/* Center: Logo Text */}
        <div className="text-center">
          <span className="text-turbo-red text-2xl font-turbo">S</span>
          <span className="text-turbo-black text-2xl font-turbo">AMANVAYA.ERR</span>
        </div>

        {/* Right: Audio button */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-turbo-red px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            aria-label={isPlaying ? "Pause turbo compiler audio" : "Play turbo compiler audio"}
            aria-pressed={isPlaying}
            onClick={() => setIsPlaying((prev) => !prev)}
          >
            <Volume2 className="h-4 w-4" />
            <span>{isPlaying ? "Pause " : "Play "}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-turbo-light-gray text-center p-3">
      <span className="sm:text-2xl text-xl text-turbo-red">©</span>
      <span className="sm:text-2xl text-xl text-turbo-black">2025 Samanvaya vats All rights reserved</span>
    </div>
  );
};

export default Navbar;