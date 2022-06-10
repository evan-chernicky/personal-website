import React, {useEffect, useState, useContext} from 'react'
import {Routes, Route, useNavigate} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import {PageContext} from './components/PageContext'
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


  const {setNewLocation, newLocaiton, transitionStage, setTransistionStage} = useContext(PageContext)
  const navigate = useNavigate()

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
