import * as React from "react"
import { WindowFrame } from "@/components/ui/window-frame"
import { SectionLabel } from "@/components/ui/section-label"
import { EXPERIENCE } from "@/components/data"

export function Experience() {
  return (
    <section>
      <SectionLabel index="02" title="CALL STACK — EXPERIENCE" />
      <div className="space-y-4">
        {EXPERIENCE.map((job, i) => (
          <WindowFrame
            key={job.org + i}
            title={`#${i} ${job.org}::${job.role.replace(/\s/g, "")}`}
            barColor="bg-turbo-light-gray"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-turbo-yellow text-xl sm:text-2xl">
                {job.role} <span className="text-turbo-cyan">@ {job.org}</span>
              </p>
              <p className="text-turbo-light-green text-lg">{job.period}</p>
            </div>
            <ul className="mt-2 space-y-1">
              {job.points.map((p, j) => (
                <li key={j} className="text-turbo-white/90 text-lg flex gap-2">
                  <span className="text-turbo-red shrink-0">{">"}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </WindowFrame>
        ))}
      </div>
    </section>
  )
}

export default Experience
