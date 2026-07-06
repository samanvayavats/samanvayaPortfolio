import * as React from "react"
import {
  ExternalLink,
  Play,
} from "lucide-react"

import { WindowFrame } from "@/components/ui/window-frame"
import { SectionLabel } from "@/components/ui/section-label"
import CRTScreen from "@/components/ui/crt-screen"
import MemoryBar from "@/components/ui/memory-bar"
import { PROJECTS } from "@/components/data"

export default function Projects() {
  return (
    <section>
      <SectionLabel index="03" title="PROJECT EXPLORER" />

      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((proj) => (
          <WindowFrame
            key={proj.name}
            title={`${proj.name}.exe`}
            className="transition-all duration-300 hover:-translate-y-1 "
          >
            {/* Screenshot */}
            <div className="aspect-[16/9]">
              <CRTScreen
                src={proj.image}
                alt={proj.name}
                className="h-full w-full"
              />
            </div>

            {/* Description */}
            <p className="mt-4 text-turbo-white leading-relaxed">
              {proj.description}
            </p>

            {/* Terminal */}
            <div className="mt-5 rounded border-2 border-turbo-light-gray bg-black p-3 font-mono text-sm">
              <div className="text-green-400">
                C:\Projects\{proj.name}&gt; project-info
              </div>

              <div className="mt-2 space-y-1 text-turbo-white">
                <p>
                  <span className="text-turbo-cyan">STATUS</span>
                  {" : "}
                  <span className="text-green-400">
                    {proj.status}
                  </span>
                </p>

                <p>
                  <span className="text-turbo-cyan">BUILD</span>
                  {" : "}
                  <span className="text-green-400">
                    {proj.build}
                  </span>
                </p>

                <p>
                  <span className="text-turbo-cyan">VERSION</span>
                  {" : "}
                  {proj.version}
                </p>

                <p>
                  <span className="text-turbo-cyan">UPDATED</span>
                  {" : "}
                  {proj.updated}
                </p>

                <p className="pt-2">
                  <span className="text-turbo-cyan">STACK</span>
                  {" : "}
                  {proj.stack.join(" • ")}
                </p>
              </div>
            </div>

            {/* Memory */}
            <div className="mt-4 flex items-center justify-between">
              <span className="font-mono text-turbo-cyan">
                MEMORY
              </span>

              <MemoryBar />
            </div>

            {/* Buttons */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href={proj.live}
                target="_blank"
                rel="noreferrer"
                className="
                  border-2
                  border-white
                  bg-[#c0c0c0]
                  px-3
                  py-2
                  text-center
                  font-mono
                  text-black
                  shadow-[2px_2px_0_#000]
                  active:translate-x-[2px]
                  active:translate-y-[2px]
                  active:shadow-none
                "
              >
                <div className="flex items-center justify-center gap-2">
                  <Play size={16} />
                  EXECUTE.EXE
                </div>
              </a>

              <a
                href={proj.src}
                target="_blank"
                rel="noreferrer"
                className="
                  border-2
                  border-white
                  bg-[#c0c0c0]
                  px-3
                  py-2
                  text-center
                  font-mono
                  text-black
                  shadow-[2px_2px_0_#000]
                  active:translate-x-[2px]
                  active:translate-y-[2px]
                  active:shadow-none
                "
              >
                <div className="flex items-center justify-center gap-2">
                  <ExternalLink size={16} />
                  SOURCE.CPP
                </div>
              </a>
            </div>

            {/* DOS Prompt */}
            <div className="mt-5 border-t border-dashed border-turbo-light-gray pt-3 font-mono text-green-400">
              C:\Projects\{proj.name}&gt;
              <span className="animate-pulse">_</span>
            </div>
          </WindowFrame>
        ))}
      </div>
    </section>
  )
}