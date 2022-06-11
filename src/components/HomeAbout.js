import React, {useContext} from 'react'
import {PageContext} from './PageContext'
import ProfilePic from '../assets/profile_pic.jpg'

function HomeAbout() {

    const {setNewLocation, setTransistionStage} = useContext(PageContext)

    function renderPageTransition(e) {
        e.preventDefault()
        setTransistionStage("fadeOut")
        setNewLocation("/about")
    }

  return (
    <div className="min-h-screen m-auto items-center relative flex items-center overflow-hidden">
        <div className="flex flex-row">
            <div className="relative" style={{width: "40%"}}>
                <div className="image-line expand-line opacity-0"></div>
                <img src={ProfilePic} alt="Evan Chernicky" />
            </div>
            <div className="px-24 text-left text-black dark:text-white slide-in-right opacity-0" style={{width: "60%"}}>
                <h2  style={{animationDelay: ".6s"}} className="mb-8 text-6xl uppercase tracking-wider tracking-in-expand opacity-0">About</h2>
                <div className="max-w-2xl">
                    <p className="text-black dark:text-white mb-3">Experienced JavaScript and Ruby on Rails developer, with a background in digital advertising. Possesses strong skills in front-end and back-end development with experience in web-team management to produce light-weight, responsive, and intuitive websites for technology stakeholders. Implements pragmatic, personal and creative storytelling, incorporated with intelligent ideas and innovative technology to develop websites and digital experiences that both resonate with, and captivate the end user.</p>
                    <p className="text-black dark:text-white mb-8">When I’m not behind a computer you will find me biking, hiking, skiing or planning my next backpacking trip around the globe.</p>
                    <a href="/about" onClick={(e) => renderPageTransition(e)} className="text-xl border border-black dark:border-white inline-block w-34 py-3 px-7 m-auto hover:border-pink hover:text-pink dark:hover:border-blue dark:hover:text-blue duration-500">MY STORY</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeAbout