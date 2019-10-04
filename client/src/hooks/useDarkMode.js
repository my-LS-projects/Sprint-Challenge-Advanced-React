import React, { useState, useEffect } from "react"


const useDarkMode = () => {
    const [ darkMode, setDarkMode ] = useState('dark')
    useEffect(() => {
        darkMode 
        ? document.querySelector("body").classList.add("dark-mode")
        : document.querySelector("body").classList.remove("dark-mode")
    } ,[darkMode])
    return [ darkMode, setDarkMode ]
}

export default useDarkMode