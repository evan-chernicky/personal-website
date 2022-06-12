import React, {useEffect, useState, useContext} from 'react'
import {Routes, Route, useNavigate, useLocation} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import {PageContext} from './components/PageContext'
import './App.css';


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)
  const html = document.querySelector('html')
  const location = useLocation()

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




  const {newLocaiton, transitionStage, setTransistionStage} = useContext(PageContext)
  const navigate = useNavigate()

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
    
      },[location.pathname])

      //Fixes bug where React Router starts you in middle of page if you scrolled down in previous page
      useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'instant'
        })
      },[location.pathname])


  return (
    <div  id="site" className={`App ${isDarkMode ? 'dark' : 'light'}`}>
        <div className={`${transitionStage}`} onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn")
            navigate(newLocaiton)
          }
        }}
      >
      <Routes>
        <Route path="*" exact element={<Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/about" exact element={<About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
