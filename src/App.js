import React, {useEffect, useState} from 'react'
import './App.css';
import Intro from './components/Intro.js'
import Header from './components/Header.js'
import Skills from './components/Skills.js'
import Projects from './components/Projects.js'
import foam from './assets/foam.svg'



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
  }
  else {
    html.style.setProperty('--scrollbar-background', '#1e1e1e')
    html.style.setProperty('--scrolltrack-background', '#fff')
  }


  //observes sections and adds visibile class based on what section user is viewing
  useEffect(() => { 
    const thresholdSettings = (window.innerWidth >= 540) ? 0.75 : 0.3 //change threshold based on if on phone or not
    const sections = document.querySelectorAll("section")
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setTimeout(() => { //added slight delay to 
          entry.target.classList.toggle("visible", entry.isIntersecting)
        }, 500)
      })
    }, {
        threshold: thresholdSettings,
        trackVisibility: true,
        delay: 100 //slight delay to account for fast scrolling weirdness
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
          <section id="home" className="pb-10">
            <div className="w-full bg-no-repeat absolute bg-cover bg-center foam" style={{top: "-10vh", height: "120vh", backgroundSize: "200vh 121vh", backgroundImage: `url(${foam})`}}></div>
            <Intro />
          </section>
          <section id="skills">
            <Skills isDarkMode={isDarkMode}/>
          </section>
          <section id="projects">
            <Projects isDarkMode={isDarkMode}/>
          </section>
      </div>
    </div>
  );
}

export default App;
