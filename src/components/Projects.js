
import React from 'react'
import Project from './Project'
import {projects} from "./data/ProjectsData.js"

function Projects({isDarkMode}) {
  return (
    <div className="min-h-screen p-6 max-w-screen-xl m-auto">
        <h2 className="mb-8 text-center text-black dark:text-white text-6xl uppercase tracking-wider tracking-in-expand opacity-0">Projects</h2>
        <div className="grid lg:grid-cols-2 fade-in-bottom opacity-0">
            {projects.map(project => {
                    const index = projects.indexOf(project)
                    return <Project index={index} project={project} isDarkMode={isDarkMode}/> 
                })
            }
        </div>
    </div>
  )
}

export default Projects