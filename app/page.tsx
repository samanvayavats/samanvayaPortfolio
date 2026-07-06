import MenuStrip from "@/components/ui/menu-strip"
import Hero from "@/components/ui/hero"
import Skills from "@/components/ui/skills"
import Experience from "@/components/ui/experience"
import Projects from "@/components/ui/projects"
import Education from "@/components/ui/education"
import StatusBar from "@/components/ui/status-bar"
import * as React from "react"


export default function Home() {
  return (
    <>
      <div className="border-2 border-white outline-2 outline-white outline-offset-3 p-4 my-5.5 mx-3 relative">
        <MenuStrip/>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </div>
      <StatusBar />
    </>
  )
}
