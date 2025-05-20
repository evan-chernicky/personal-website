
import React, {useState} from 'react'
import {projects} from "./data/ProjectsData.js"
import Project from './Project'
import SingleFilter from './SingleFilter'
import DownArrowBlack from '../assets/down-arrow-black.svg'
import DownArrowWhite from '../assets/down-arrow-white.svg'

function Projects({isDarkMode}) {

  const [currentFilter, setCurrentFilter] = useState('All')

  const projectTypes = ['All', ...[...new Set(projects.map(project => project.projectType))]];

  return (
    <div className="min-h-screen p-6 max-w-screen-xl m-auto flex flex-col items-center">
        <h2 className="mb-8 text-center text-black dark:text-white text-6xl uppercase tracking-wider tracking-in-expand opacity-0">Projects</h2>
        <div className="flex align-center justify-center gap-2 dark:text-white text-black mb-3 fade-in-bottom opacity-0">
          {
              projectTypes.map((projectType) => {
                return <SingleFilter key={projectType} projectType={projectType} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter}/> 
            })
          }
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 fade-in-bottom opacity-0">
            {projects.filter(project => (project.projectType.toLowerCase() === currentFilter.toLowerCase()) || currentFilter === 'All')
                      .map((project, index) => {
                    return <Project key={project.name} index={index} project={project} isDarkMode={isDarkMode}/> 
                })
            }
        </div>
        <a className="flex flex-col items-center justify-center my-8 z-20 max-w-min" href="#contact">
              <span className="text-black hover:text-pink dark:text-white mb-2 text-xl dark:hover:text-blue">Contact</span>
              <img className="w-3 animate-bounce" src={isDarkMode ? DownArrowWhite : DownArrowBlack} alt="Go to contact" />
        </a>
    </div>
  )
}

export default Projects