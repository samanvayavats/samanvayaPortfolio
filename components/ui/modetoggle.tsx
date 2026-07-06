"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-1">
      <span
        className={`text-2xl font-bold ${
          isDark ? "text-turbo-red" : "text-black"
        }`}
      >
        [
      </span>

      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle Theme"
        className={`
          relative
          w-4
          h-4
          rounded-[3px]
          transition-all
          duration-300
          hover:scale-110
          active:scale-90
          ${
            isDark
            ? "bg-[#00c853]"
              : "bg-green-500"
              
          }
        `}
      >
        <span className="absolute inset-x-0 top-0 h-1/3 rounded-t-[3px] bg-white/40" />
      </button>

      <span
        className={`text-2xl font-bold ${
          isDark ? "text-turbo-red" : "text-black"
        }`}
      >
        ]
      </span>
    </div>
  );
}