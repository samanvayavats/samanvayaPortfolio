import * as React from "react"

const MENU_ITEMS = [
  "File",
  "Edit",
  "Search",
  "Run",
  "Compile",
  "Debug",
  "Project",
  "Window",
  "Help",
]

export function MenuStrip() {
  return (
    <div className="w-full bg-turbo-light-gray text-turbo-black text-sm sm:text-base px-3 py-1 flex gap-3 sm:gap-5 overflow-x-auto whitespace-nowrap border-b-2 border-turbo-black mb-2  ">
      {MENU_ITEMS.map((item, i) => (
        <span key={item} className={i === 6 ? "underline text-turbo-red" : ""}>
          {item}
        </span>
      ))}
    </div>
  )
}

export default MenuStrip
