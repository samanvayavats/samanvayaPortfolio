import * as React from "react"
import { WindowFrame } from "@/components/ui/window-frame"
import { SectionLabel } from "@/components/ui/section-label"
import StatBar from "@/components/ui/stat-bar"
import { SKILLS } from "@/components/data"

export default function Skills() {
  return (
    <section>
      <SectionLabel index="01" title="WATCH — SKILLS" />

      <WindowFrame
        title="WATCH.LOG"
        barColor="bg-turbo-light-gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-5">
          {SKILLS.map((group) => (
            <div key={group.label}>
              <p className="text-shadow-turbo-cyan text-2xl mb-2 ">
                {group.label} :=
              </p>

              <ul className="space-y-2">
                {group.items.map((item, index) => (
  <li key={item} className="flex justify-between items-center gap-4">
    <span>{item}</span>

    <StatBar seed={index} />
  </li>
))}
</ul>
            </div>
          ))}
        </div>
      </WindowFrame>
    </section>
  )
}