import React, {useEffect} from 'react'

function AboutNav() {

          //observes sections and adds visibile class based on what section user is viewing
          useEffect(() => { 
            const sections = document.querySelectorAll("section")
            const navItems = document.querySelectorAll(".about-items li a")
            const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                  console.log(entry)
                    if (entry.isIntersecting) {
                        for (let item of navItems) {
                            if(item.hash.includes(entry.target.id)) {
                                item.classList.add("visible")
                            }
                            else {
                                item.classList.remove("visible")
                            }
                        }
                    }
              })
            }, {
                rootMargin: '-100px',
                trackVisibility: true,
                delay: 500
              }
            )
            sections.forEach(section => {
              observer.observe(section)
            })
        
          },[])

  return (
    <nav className="text-black dark:text-white flex flex-row top-0 sticky h-screen items-center justify-center py-24" style={{width: "30%"}}>
        <ul className="about-items flex flex-col h-full justify-evenly items-end pr-10 relative">
        <li className="relative">
            <a href="#story">My Story</a>
        </li>
        <li className="relative">
            <a href="#experience">Experience</a>
        </li>
        <li className="relative">
            <a href="#skills">Skills</a>
        </li>
        <li className="relative">
            <a href="#school">School</a>
        </li>
        <li className="relative">
            <a href="#interests">Interests</a>
        </li>
        </ul>
        <div style={{width: "1px"}} className="bg-white h-full"></div>
    </nav>
  )
}

export default AboutNav