"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, FileDown ,Send  } from "lucide-react"
import { WindowFrame } from "@/components/ui/window-frame"
import { PROFILE } from "@/components/data"
import CRTScreen from "./crt-screen"

export function Hero() {
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const id = setInterval(() => setShowCursor((c) => !c), 530)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5 sm:gap-6">
  <WindowFrame
  title="PROFILE.BMP"
  className="flex flex-col h-full"
>
  {/* CRT Image */}
  <div className="flex-1">
    <div className="w-full aspect-square bg-turbo-black/30 border-2 border-turbo-light-gray overflow-hidden">
      <CRTScreen
        src={PROFILE.photo}
        alt={PROFILE.name}
        className="h-full w-full"
      />
    </div>
  </div>

  {/* Contact Section */}
  <div className="mt-4 border-t-2 border-turbo-light-gray pt-3">
     <a
            href={`${PROFILE.contact}`}
            className="inline-flex items-center gap-1.5 bg-turbo-cyan text-turbo-black px-3 py-1 text-lg border-2 border-turbo-black hover:bg-turbo-light-cyan transition-colors"
          >
            <Send  className="w-4 h-4" /> Contact.me
          </a>

  </div>
</WindowFrame>

      <WindowFrame title="SUMMARY.TXT">
        <p className="text-turbo-light-green text-2xl sm:text-3xl leading-none">
          &gt; whoami
        </p>
        <h1 className="text-turbo-yellow text-3xl sm:text-5xl mt-2 leading-tight">
          {PROFILE.name}
          <span className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>
            _
          </span>
        </h1>
        <h2 className="text-turbo-cyan text-xl sm:text-2xl mt-1">
          {PROFILE.role} · {PROFILE.location}
        </h2>
        <p className="text-turbo-white/90 text-lg sm:text-xl mt-3 leading-snug">
          {PROFILE.summary}
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-1.5 bg-turbo-light-gray text-turbo-black px-3 py-1 text-lg border-2 border-turbo-black hover:bg-turbo-yellow transition-colors"
          >
            <Mail className="w-4 h-4" /> mail
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            className="inline-flex items-center gap-1.5 bg-turbo-light-gray text-turbo-black px-3 py-1 text-lg border-2 border-turbo-black hover:bg-turbo-yellow transition-colors"
          >
            <Github className="w-4 h-4" /> github
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            className="inline-flex items-center gap-1.5 bg-turbo-light-gray text-turbo-black px-3 py-1 text-lg border-2 border-turbo-black hover:bg-turbo-yellow transition-colors"
          >
            <Linkedin className="w-4 h-4" /> linkedin
          </a>
          <a
            href={PROFILE.resumeFile}
            download
            className="inline-flex items-center gap-1.5 bg-turbo-red text-turbo-white px-3 py-1 text-lg border-2 border-turbo-black hover:bg-turbo-light-red transition-colors"
          >
            <FileDown className="w-4 h-4" /> resume.pdf
          </a>
        </div>
      </WindowFrame>
    </section>
  )
}

export default Hero
