"use client"

import { useEffect, useState } from "react"

export default function MemoryBar() {
  const total = 10

  const [filled, setFilled] = useState(0)
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
        }

        if (prev <= 0) {
          setForward(true)
          return 1
        }

        return prev - 1
      })
    }, 120)

    return () => clearInterval(id)
  }, [forward])

  return (
    <div className="flex items-center gap-2 font-mono">
      <span className="text-green-400">[</span>

      <div className="flex">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`transition-all duration-150 ${
              i < filled
                ? "text-[#39ff14] drop-shadow-[0_0_6px_#39ff14]"
                : "text-[#3a3a3a]"
            }`}
          >
            █
          </span>
        ))}
      </div>

      <span className="text-green-400">]</span>

      <span className="text-green-400 font-bold animate-pulse">
        OK
      </span>
    </div>
  )
}