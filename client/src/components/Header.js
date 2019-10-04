import React from "react"
import useDarkMode from "./../hooks/useDarkMode"

const logo = 'https://cdn-images-1.medium.com/fit/c/120/120/1*iTABE417EkZDwRv9Uj91Qg.png'


const Header = () => {
    const [ darkMode, setDarkMode ] = useDarkMode(false);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    }

    return (
        <header>
            <div className="logo-wrapper"><img className="logo" src={logo}></img></div>
            <h1 className="title">Women's World Cup</h1>
            <button onClick={toggleMode}>Lights</button>
        </header>   
    )
}

export default Header