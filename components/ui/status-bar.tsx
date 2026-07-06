import * as React from "react"
import { PROFILE } from "@/components/data"

export function StatusBar() {
  return (
    <div className="w-full bg-turbo-light-gray text-turbo-black text-sm sm:text-base px-3 py-1.5 flex flex-wrap gap-x-4 gap-y-1 border-t-2 border-turbo-black">
      <a href={`mailto:${PROFILE.email}`} className="hover:text-turbo-red">
        F1-Mail
      </a>
      <a href={PROFILE.github} target="_blank" className="hover:text-turbo-red">
        F2-GitHub
      </a>
      <a href={PROFILE.linkedin} target="_blank" className="hover:text-turbo-red">
        F3-LinkedIn
      </a>
      <a href={PROFILE.resumeFile} download className="hover:text-turbo-red">
        F4-Resume
      </a>
      <span className="ml-auto">F10-Menu</span>
    </div>
  )
}

export default StatusBar
