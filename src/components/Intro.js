import React from 'react'

function Header() {

  return (
    <div className="App-header h-screen flex flex-col justify-center items-center w-full h-screen">
        <div className="z-10 flex flex-col text-center text-white">
        <div style={{maxWidth: '60%'}} className="m-auto">
          <h1 className="text-4xl mb-3">Hello, my name is <strong>Evan Chernicky</strong>.</h1>
          <h2 className="text-2xl mb-6">I am a Washington, DC frontend developer with experience in JavaScript, React, Ruby, Ruby on Rails, and more.</h2>
          <a className="border border-white inline-block w-34 py-3 px-5 m-auto hover:bg-white hover:text-black duration-500" href="#skills">LEARN MORE</a>
        </div>
        </div>
    </div>
  )
}

export default Header