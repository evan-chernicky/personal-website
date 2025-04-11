
import React from 'react'

function SingleFilter({projectType, currentFilter, setCurrentFilter}) {
    const activeClasses = (projectType === currentFilter) ? 'dark:border-white border-black' : ''

  return (
    <button onClick={() => setCurrentFilter(projectType)} className={`${activeClasses} border border-transparent py-2 px-4 rounded-xl`}>{projectType}</button>
  )
}

export default SingleFilter