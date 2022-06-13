import React, {useEffect} from 'react'

function AboutNav() {

          //observes sections and adds visibile class based on what section user is viewing
          useEffect(() => { 
            const sections = document.querySelectorAll("section")
            const navItems = document.querySelectorAll(".about-items li a")
            const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                  console.log(entry)
                for (let item of navItems) {
                    if(item.hash.includes(entry.target.id)) {
                        item.classList.toggle("visible", entry.isIntersecting)
                    }
                }
              })
            }, {
                trackVisibility: true,
                delay: 250,
                rootMargin: '-50% 0% -50% 0%'
              }
            )
            sections.forEach(section => {
              observer.observe(section)
            })
        
          },[])

  return (
    <nav className="text-black dark:text-white flex flex-row top-0 sticky h-screen items-center justify-center py-36" style={{width: "30%"}}>
        <ul className="about-items flex flex-col h-full justify-between items-end pr-10 relative">
        <li className="relative">
            <a className="hover:text-blue duration-300" href="#story">My Story</a>
        </li>
        <li className="relative">
            <a className="hover:text-blue duration-300" href="#experience">Experience</a>
        </li>
        <li className="relative">
            <a className="hover:text-blue duration-300" href="#education">Education</a>
        </li>
        <li className="relative">
            <a className="hover:text-blue duration-300" href="#interests">Interests</a>
        </li>
        </ul>
        <div style={{width: "1px", height: "97%"}} className="bg-black dark:bg-white"></div>
    </nav>
  )
}

export default AboutNav