"use client"

import * as React from "react"

import { useTheme } from "next-themes"
import { useState } from "react";

export function ModeToggle() {

    const { setTheme } = useTheme()
    const [Toggle, setToggle] = useState(false)
    function helper() {
        setToggle(!Toggle)
        Toggle ? setTheme('light') : setTheme('dark')
    }
    return (
        // <div >
            <div className= {`${Toggle ?'bg-turboblue ':'bg-primary'} flex justify-center items-center px-2 absolute bottom-5 left-10 `}>
                <span className="text-white text-2xl font-bold mb-1">[</span>
                <button
                    onClick={helper}
                    className="bg-green-400 w-4 h-3 mx-1 hover:bg-green-500"
                ></button>
                <span className="text-white text-2xl font-bold mb-1">]</span>
            </div>
        // </div>
    )
}

