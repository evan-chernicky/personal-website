import React, {useEffect, useState} from 'react'
import './App.css';
import Intro from './components/Intro.js'
import Header from './components/Header.js'
import foam from './assets/foam.svg'



function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)
  const html = document.querySelector('html')

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

  return (
    <div  id="site" className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="bg-white dark:bg-black">
          <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
          <section id="home" className="pb-10">
            <div className="w-full bg-no-repeat absolute bg-cover bg-center foam" style={{top: "-10vh", height: "120vh", backgroundSize: "200vh 121vh", backgroundImage: `url(${foam})`}}></div>
            <Intro />
          </section>
          <section id="skills">
            <Intro />
          </section>
      </div>
    </div>
  );
}

export default App;
