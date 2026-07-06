"use client"

import Image from "next/image"

type CRTScreenProps = {
  src: string
  alt: string
  className?: string
}

export default function CRTScreen({
  src,
  alt,
  className = "",
}: CRTScreenProps) {
  return (
    <div
      className={`
        group
        relative
        w-full
        h-full
        overflow-hidden
        rounded-sm
        border-2
        border-black
        bg-black
        ${className}
      `}
    >
      {/* Image */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width:768px) 100vw, 220px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_3px,rgba(255,255,255,.08)_4px)] opacity-20" />

      {/* Reflection */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,.85)]" />

      {/* Green tint */}
      <div className="pointer-events-none absolute inset-0 bg-green-400/5" />

      {/* Hover */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="font-mono text-green-400 animate-pulse">
          PROFILE.BMP
        </span>
      </div>
    </div>
  )
}