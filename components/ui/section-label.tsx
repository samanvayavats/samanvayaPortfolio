import * as React from "react"

type SectionLabelProps = {
  index: string
  title: string
}

export function SectionLabel({ index, title }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-turbo-yellow text-xl sm:text-2xl">{index}</span>
      <span className="text-turbo-cyan text-xl sm:text-2xl">{title}</span>
      <span className="flex-1 border-t-2 border-dotted border-turbo-light-blue ml-2" />
    </div>
  )
}

export default SectionLabel
