import React from 'react'

function Project({project, isDarkMode, index}) {

    const isEven = (index % 2 === 0 || index === 0) ? true : false

    return (
    <div className={`shadow-expand shadow-2xl dark:shadow-lg rounded-2xl overflow-hidden mx-4 my-8 md:m-8 ${isEven ? "dark:shadow-slate-700" : "dark:shadow-slate-700"}`}>
        <div className="border-white border-2 dark:border-0 relative rounded-t-2xl">
            <div class={`rounded-t-2xl p-6 flex flex-col items-center justify-center absolute opacity-0 hover:opacity-100 bg-transparent w-full h-full z-10 ${isEven ? "hover:bg-pink/90" : "hover:bg-blue/90"}`}>
                {project.github ? <a className="hover:underline text-white font-bold text-2xl" target="_blank" rel="noreferrer" href={project.github}>GitHub</a> : null}
                {project.deployment ? <a className="hover:underline text-white font-bold text-2xl" target="_blank" rel="noreferrer" href={project.deployment}>Deployment</a> : null}
                {project.walkthrough ? <a className="hover:underline text-white font-bold text-2xl" target="_blank" rel="noreferrer" href={project.walkthrough}>Walkthrough</a> : null}
                {project.wireframe ? <a className="hover:underline text-white font-bold text-2xl" target="_blank" rel="noreferrer" href={project.wireframe}>Wireframe</a> : null}
            </div>
            <img className="rounded-t-2xl" src={project.image} alt={project.name} />
        </div>
        <div className="px-7 md:px-10 py-8 bg-white dark:bg-black mb-9">
            <h2 className="text-black text-3xl font-bold mb-2 dark:text-white">{project.name}</h2>
            <p className="text-black mb-6 dark:text-white">{project.summary}</p>
            <div className="flex flex-wrap">
                {project.tech.map(single => (
                    <div index={single} className="py-1 px-3 bg-black m-1 rounded-full dark:bg-white">
                        <p className="text-sm font-bold text-white dark:text-black">{single}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Project