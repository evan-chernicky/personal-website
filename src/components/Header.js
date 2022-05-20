import React from 'react'
import foam from '../assets/foam.svg'

function Header() {
  return (
    <header className="App-header h-screen flex flex-col justify-center items-center" style={{backgroundImage: `url('${foam})`}}>
        <div className="z-10 flex flex-col text-center text-white">
            <h1 className="text-2xl m-auto mb-6" style={{maxWidth: '60%'}}>
                Hello, my name is Evan Chernicky.<br/>
                I am a Washington, DC frontend developer with experience in JavaScript, React, Ruby, Ruby on Rails, and more.
            </h1>
            <a className="border border-white inline-block w-34 p-3 m-auto" href="#skills">LEARN MORE</a>
        </div>
        <img className="absolute h-screen w-100 inset-0 m-auto" src={foam} alt="background" />
    </header>
  )
}

export default Header