import React, {useContext} from 'react'
import {PageContext} from './PageContext'
import ProfilePic from '../assets/profile_pic.jpg'
import DownArrowBlack from '../assets/down-arrow-black.svg'
import DownArrowWhite from '../assets/down-arrow-white.svg'

function HomeAbout({isDarkMode}) {

    const {setNewLocation, setTransistionStage} = useContext(PageContext)

    function renderPageTransition(e) {
        e.preventDefault()
        setTransistionStage("fadeOut")
        setNewLocation("/about")
    }

  return (
    <div className="min-h-screen m-auto items-center relative flex items-center overflow-hidden flex-col">
        <div className="grid grid-cols-1 md:grid-cols-5 pt-10">
            <div className="relative md:col-span-2">
                <div className="image-line expand-line opacity-0"></div>
                <img src={ProfilePic} alt="Evan Chernicky" />
            </div>
            <div className="mt-10 px-8 md:px-24 md:col-span-3 text-left text-black dark:text-white slide-in-right opacity-0">
                <h2  style={{animationDelay: ".6s"}} className="mb-8 text-6xl uppercase tracking-wider tracking-in-expand opacity-0">About</h2>
                <div className="max-w-2xl">
                    <p className="text-black dark:text-white mb-5">I am an experienced JavaScript and Ruby on Rails developer, with a background in digital advertising. I possess strong skills in front-end and back-end development with practice in web-team management, and strive to produce light-weight, responsive, and intuitive websites for technology stakeholders.  It is my belief that the end user is best captivated with websites and digital experiences which employ pragmatic, personal and creative storytelling, incorporated with intelligent ideas and innovative technology.</p>
                    <p className="text-black dark:text-white mb-10">Currently developing custom websites for businesses at <a className="underline hover:no-underline" href="https://pigeonwirecreative.com/" target="_blank">Pigeonwire</a>.</p>
                    <a href="/about" onClick={(e) => renderPageTransition(e)} className="text-xl border border-black dark:border-white inline-block w-34 py-3 px-7 m-auto hover:border-pink hover:text-pink dark:hover:border-blue dark:hover:text-blue duration-500">MY STORY</a>
                </div>
            </div>
        </div>
        <a className="flex flex-col items-center justify-center my-8 z-20 max-w-min" href="#skills">
              <span className="text-black hover:text-pink dark:text-white mb-2 text-xl dark:hover:text-blue">Skills</span>
              <img className="w-3 animate-bounce" src={isDarkMode ? DownArrowWhite : DownArrowBlack} alt="Go to skills" />
        </a>
    </div>
  )
}

export default HomeAbout