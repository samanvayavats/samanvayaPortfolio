import * as React from "react"
import { GraduationCap } from "lucide-react"
import { WindowFrame } from "@/components/ui/window-frame"
import { SectionLabel } from "@/components/ui/section-label"
import { EDUCATION } from "@/components/data"

export function Education() {
  return (
    <section>
      <SectionLabel index="04" title="EDUCATION.DAT" />
      <div className="space-y-3">
        {EDUCATION.map((ed, i) => (
          <WindowFrame key={i} title="record.dat" barColor="bg-turbo-light-gray">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-6 h-6 text-turbo-yellow shrink-0 mt-1" />
              <div>
                <p className="text-turbo-yellow text-xl sm:text-2xl">
                  {ed.school}
                </p>
                <p className="text-turbo-cyan text-lg sm:text-xl">{ed.degree}</p>
                <p className="text-turbo-white/80 text-base sm:text-lg">
                  {ed.period} · {ed.note}
                </p>
              </div>
            </div>
          </WindowFrame>
        ))}
      </div>
    </section>
  )
}

export default Education
