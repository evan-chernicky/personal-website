import React, {useEffect, useState} from 'react'
import './App.css';
import Intro from './components/Intro.js'
import Header from './components/Header.js'


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  },[])

  console.log(isDarkMode)

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
      <Intro />
    </div>
  );
}

export default App;
