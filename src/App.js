import React, {useEffect, useState} from 'react'
import './App.css';
import Intro from './components/Intro.js'
import Header from './components/Header.js'
import Skills from './components/Skills.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'
import DownArrowWhite from './assets/down-arrow-white.svg'


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)
  const html = document.querySelector('html')

  //set default color scheme based on browser settings
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  },[])

  //set styling for scrollbar based on theme
  if (isDarkMode) {
    html.style.setProperty('--scrollbar-background', '#fff')
    html.style.setProperty('--scrolltrack-background', '#1e1e1e')
    html.style.setProperty('background', '#1e1e1e')

  }
  else {
    html.style.setProperty('--scrollbar-background', '#1e1e1e')
    html.style.setProperty('--scrolltrack-background', '#fff')
    html.style.setProperty('background', '#fff')
  }


  //observes sections and adds visibile class based on what section user is viewing
  useEffect(() => { 
    const sections = document.querySelectorAll("section")
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setTimeout(() => { //added slight delay to 
          if (entry.isIntersecting) {
            entry.target.classList.toggle("visible", entry.isIntersecting)
            observer.unobserve(entry.target)
          }
        }, 500)
      })
    }, {
        rootMargin: '-100px',
        trackVisibility: true,
        delay: 1000
      }
    )
    sections.forEach(section => {
      observer.observe(section)
    })

  },[])


  return (
    <div  id="site" className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="bg-white dark:bg-black">
          <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
          <section id="home" className="pb-10 relative">
            <Intro />
            <a className="flex flex-col items-center justify-center absolute bottom-16 right-0 left-0 m-auto z-20 max-w-min" href="#skills">
              <span className="text-white hover:text-blue dark:text-white mb-2 text-xl dark:hover:text-blue">Skills</span>
              <img className="w-3 animate-bounce" src={DownArrowWhite} alt="Go to skills" />
            </a>
          </section>
          <section id="skills" className="my-24 relative">
            <Skills isDarkMode={isDarkMode}/>
          </section>
          <section id="projects" className="py-10 relative">
            <Projects isDarkMode={isDarkMode}/>
          </section>
          <section id="contact" className="relative">
            <Contact isDarkMode={isDarkMode}/>
          </section>
      </div>
    </div>
  );
}

export default App;
