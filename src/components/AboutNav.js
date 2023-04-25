import React, {useEffect} from 'react'

function AboutNav({showMobileNav, setShowMobileNav, width}) {

    const menuHidden = (showMobileNav === false && width < 976) ? "hidden" : null

          //observes sections and adds visibile class based on what section user is viewing
          useEffect(() => { 
            const sections = document.querySelectorAll("section")
            const navItems = document.querySelectorAll(".about-items li a")
            const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => {
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
    <nav className={`${menuHidden} fixed lg:sticky text-black dark:text-white flex flex-row top-0 h-screen items-center justify-center py-36 bg-white dark:bg-black lg:bg-transparent w-full`}>
        <ul className="about-items flex flex-col h-full justify-between items-end pr-10 relative">
        <li className="relative">
            <a onClick={() => setShowMobileNav(false)} className="hover:text-blue duration-300" href="#story">My Story</a>
        </li>
        <li className="relative">
            <a onClick={() => setShowMobileNav(false)} className="hover:text-blue duration-300" href="#experience">Experience</a>
        </li>
        <li className="relative">
            <a onClick={() => setShowMobileNav(false)} className="hover:text-blue duration-300" href="#education">Education</a>
        </li>
        <li className="relative">
            <a onClick={() => setShowMobileNav(false)} className="hover:text-blue duration-300" href="#interests">Interests</a>
        </li>
        </ul>
        <div style={{width: "1px", height: "calc(100% - 10px)"}} className="bg-black dark:bg-white"></div>
    </nav>
  )
}

export default AboutNav