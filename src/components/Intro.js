import React from 'react'
import GitHub from '../assets/socials/github-white.svg'
import LinkedIn from '../assets/socials/linkedin-white.svg'
import Medium from '../assets/socials/medium-white.svg'
import Instagram from '../assets/socials/instagram-white.svg'
import foam from '../assets/foam.svg'




function Header() {

  return (
    <div className="App-header h-screen flex flex-col justify-center items-center w-full h-screen">
        <div className="w-full bg-no-repeat absolute bg-cover bg-center foam" style={{top: "-10vh", height: "120vh", backgroundSize: "200vh 121vh", backgroundImage: `url(${foam})`}}></div>
        <div className="z-10 flex flex-col text-center text-white">
        <div style={{maxWidth: '60%'}} className="m-auto opacity-0 text-focus-in">
          <h1 className="text-4xl mb-3">Hello, my name is <strong>Evan Chernicky</strong>.</h1>
          <h2 className="text-2xl mb-6">I am a Washington, DC front-end developer with experience in JavaScript, React, Ruby, Ruby on Rails, and more.</h2>
          <div className="flex flex-row justify-center mb-6">
            <a className="px-1 hover:scale-95" target="_blank" rel="noreferrer" href="https://github.com/evan-chernicky">
              <img className="w-8" src={GitHub} alt="GitHub" />
            </a>
            <a className="px-1 hover:scale-95" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/echernicky/">
              <img className="w-8" src={LinkedIn} alt="LinkedIn" />
            </a>
            <a className="px-1 hover:scale-95" target="_blank" rel="noreferrer" href="https://medium.com/@echernicky">
              <img className="w-8" src={Medium} alt="Medium" />
            </a>
            <a className="px-1 hover:scale-95" target="_blank" rel="noreferrer" href="https://www.instagram.com/shaken_not_cherned/">
              <img className="w-8" src={Instagram} alt="Instagram" />
            </a>

          </div>          
          <a className="text-xl border border-white inline-block w-34 py-3 px-5 m-auto hover:bg-white hover:text-black duration-500" href="#skills">LEARN MORE</a>
        </div>
        </div>
    </div>
  )
}

export default Header