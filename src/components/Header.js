import React, {useState} from 'react'
import LightBulbWhite from '../assets/light-bulb-white.svg'
import LightBulbBlack from '../assets/light-bulb-black.svg'


function Header({setIsDarkMode, isDarkMode}) {

    const [isScrollUp, setIsScrollUp] = useState(true)

    //if scrolling up or, near top of page, add scrollbar
        window.onscroll = function() {
            setIsScrollUp(this.oldScroll > this.scrollY || this.scrollY < 25);
            this.oldScroll = this.scrollY;
        }

        console.log(isScrollUp)

  return (
    <header className={`duration-700 flex py-5 justify-between w-11/12 right-0 left-0 m-auto fixed items-center z-10 ${isScrollUp ? 'translate-y-0' : '-translate-y-full'}`}>
        {isDarkMode ? (
        <button onClick={() => setIsDarkMode(false)} style={{width: "50px", height: "50px"}} className="flex justify-center items-center hover:bg-pink rounded-full">
            <img src={LightBulbWhite} alt="light mode" />
        </button>
        ) : (
        <button onClick={() => setIsDarkMode(true)} style={{width: "50px", height: "50px"}} className="flex justify-center items-center hover:bg-blue rounded-full">
            <img src={LightBulbBlack} alt="dark mode" />
        </button>         
        )}
        <nav>
            <ul className="flex flex-row text-black dark:text-white duration-75 text-sm md:text-md">
                <li className="md:px-3 px-2">
                    <a className="hover:text-pink dark:hover:text-blue" href="#about">About</a>
                </li>
                <li className="md:px-3 px-2">
                    <a className="hover:text-pink dark:hover:text-blue" href="#skills">Skills</a>
                </li>
                <li className="md:px-3 px-2">
                    <a className="hover:text-pink dark:hover:text-blue" href="#projects">Projects</a>
                </li>
                <li className="md:px-3 px-2">
                    <a className="hover:text-pink dark:hover:text-blue" href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header