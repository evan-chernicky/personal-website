import React from 'react'
import {skills} from "./data/SkillsData.js"
import DownArrowBlack from '../assets/down-arrow-black.svg'
import DownArrowWhite from '../assets/down-arrow-white.svg'



function Skills({isDarkMode}) {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-black dark:text-white relative">
        <div className="md:mx-32 mx-10 text-center p-2 rounded-xl border-draw">
            <div className="bg-white dark:bg-black p-6 md:py-14 md:px-24 max-w-screen-xl rounded-xl">
                <h2 className="text-6xl uppercase tracking-wider tracking-in-expand opacity-0">Skills</h2>
                    <div className="flex flex-row flex-wrap justify-center fade-in-bottom opacity-0">
                        {skills.map(skill => (
                            <div key={skill.name} className="relative flex flex-col justify-center items-center w-12 md:w-18 xl:w-20 m-6 cursor-default mt-8 mb-8 md:mb-16">
                                <img className="max-h-24" src={isDarkMode ? skill.imageWhite : skill.imageBlack} alt={skill.name}/>
                                <figcaption className="absolute -bottom-6 md:-bottom-12">{skill.name}</figcaption>
                            </div>
                        )
                        )}
                </div>
            </div>
        </div>
        <a className="flex flex-col items-center justify-center md:bottom-0 my-8 z-20 max-w-min xl:absolute" href="#projects">
              <span className="text-black hover:text-pink dark:text-white mb-2 text-xl dark:hover:text-blue">Projects</span>
              <img className="w-3 animate-bounce" src={isDarkMode ? DownArrowWhite : DownArrowBlack} alt="Go to projects" />
            </a>
    </div>
  )
}

export default Skills