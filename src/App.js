import React, {useEffect, useState} from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import './App.css';


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
    <Routes>
      <Route path="*" exact element={<Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
      <Route path="/about" exact element={<About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
    </Routes>
    </div>
  );
}

export default App;
