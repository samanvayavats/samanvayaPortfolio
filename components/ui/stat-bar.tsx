"use client"

import { useEffect, useState } from "react"

type StatBarProps = {
  seed?: number
}

export default function StatBar({ seed = 0 }: StatBarProps) {
  const total = 10

  const [filled, setFilled] = useState(seed % (total + 1))
  const [forward, setForward] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setFilled((prev) => {
        if (forward) {
          if (prev >= total) {
            setForward(false)
            return total - 1
          }
          return prev + 1
        } else {
          if (prev <= 0) {
            setForward(true)
            return 1
          }
          return prev - 1
        }
      })
    }, 120)

    return () => clearInterval(id)
  }, [forward])

  return (
    <span className="flex items-center gap-2 font-mono text-sm whitespace-nowrap">
      <span className="text-green-400">[</span>

      <span className="flex">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`transition-all duration-150 ${
              i < filled
                ? "text-green-500 drop-shadow-[0_0_6px_#39ff14]"
                : "text-[#2b2b2b]"
            }`}
          >
            █
          </span>
        ))}
      </span>

      <span className="text-green-400">]</span>

      <span
        className="
          text-[#39ff14]
          font-bold
          animate-pulse
          tracking-wider
        "
      >
        OK
      </span>
    </span>
  )
}