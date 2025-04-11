
import React from 'react'

function SingleFilter({projectType, currentFilter, setCurrentFilter}) {
    const activeClasses = (projectType === currentFilter) ? 'dark:border-white border-black' : 'border-transparent'

  return (
    <button onClick={() => setCurrentFilter(projectType)} className={`border py-2 px-4 rounded-xl ${activeClasses}`}>{projectType}</button>
  )
}

export default SingleFilter