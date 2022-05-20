import React from 'react'
import LightBulbWhite from '../assets/light-bulb-white.svg'
import LightBulbBlack from '../assets/light-bulb-black.svg'


function Header({setIsDarkMode, isDarkMode}) {
  return (
    <div className="flex py-4 justify-between w-10/12 right-0 left-0 m-auto fixed items-center">
        {isDarkMode ? (
        <button onClick={() => setIsDarkMode(false)}>
            <img src={LightBulbWhite} alt="light mode" />
        </button>
        ) : (
        <button onClick={() => setIsDarkMode(true)}>
            <img src={LightBulbBlack} alt="dark mode" />
        </button>         
        )}
        <nav>
            <ul className="flex flex-row text-black dark:text-white">
                <li className="px-3">
                    <a href="#skills">Skills</a>
                </li>
                <li className="px-3">
                    <a href="#projectes">Projects</a>
                </li>
                <li className="px-3">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header