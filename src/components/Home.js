import React, {useEffect, useState} from 'react'
import Intro from './Intro.js'
import Header from './Header.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import HomeAbout from './HomeAbout.js'
import DownArrowWhite from '../assets/down-arrow-white.svg'


function App({isDarkMode, setIsDarkMode}) {



  return (
    <>
    <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
      <div className="bg-white dark:bg-black page">
          <section id="home" className="pb-10 relative">
            <Intro />
            <a className="flex flex-col items-center justify-center absolute bottom-16 right-0 left-0 m-auto z-20 max-w-min" href="#about">
              <span className="text-white hover:text-blue dark:text-white mb-2 text-xl dark:hover:text-blue">About</span>
              <img className="w-3 animate-bounce" src={DownArrowWhite} alt="Go to about" />
            </a>
          </section>
          <section id="about" className="my-24 relative">
            <HomeAbout isDarkMode={isDarkMode}/>
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
      </>
  );
}

export default App;
