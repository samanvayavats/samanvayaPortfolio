import * as React from "react"

type WindowFrameProps = {
  title: string
  barColor?: string
  className?: string
  children: React.ReactNode
}

export function WindowFrame({
  title,
  barColor = "bg-turbo-light-gray",
  className = "",
  children,
}: WindowFrameProps) {
  return (
    <div
      className={`border-2 border-turbo-white ${className}`}
      style={{ boxShadow: "3px 3px 0 rgba(0,0,0,0.35)" }}
    >
      <div
        className={`${barColor} flex items-center justify-between px-2 py-1 border-b-2 border-turbo-white`}
      >
        <span className="text-turbo-black text-lg sm:text-xl leading-none truncate">
          {title}
        </span>
        <span className="flex gap-1 shrink-0 ml-2">
          <span className="w-3 h-3 border border-turbo-black inline-block" />
        </span>
      </div>
      <div className="p-3 sm:p-4">{children}</div>
    </div>
  )
}

export default WindowFrame
