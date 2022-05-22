import React, {useState} from 'react'
import emailjs from '@emailjs/browser';
import wave from '../assets/wave-bottom.svg'
import LightAvatar from '../assets/light-avatar.png'


function Contact({isDarkMode}) {

const [isEmailSent, setIsEmailSent] = useState(false)
const fadeIn = isEmailSent ? "opacity-100" : "opacity-0"

function handleSubmit(e) {
    e.preventDefault()

    emailjs.sendForm("service_ikx0j64", "template_98bodus", e.target,"5cJ8SpL2cm7Z8mIlc")
    .then((result) => {
        if(result.text === "OK") {
            setIsEmailSent(true)
            setTimeout(() => {
                setIsEmailSent(false)
            }, 5000)
        }
    })
    e.target.reset()
}


  return (
    <div className="min-h-screen w-full bg-no-repeat bg-cover flex items-center" style={{backgroundImage: `url(${wave})`, backgroundPosition: '50% 32vh'}}>
        <div className="max-w-5xl flex m-auto bg-white/90 dark:bg-black/90 p-12 dark:text-white text-black rounded-2xl">
            <div className="px-12">
                <h2 className="mb-8 text-left text-black dark:text-white text-6xl uppercase tracking-wider tracking-in-expand opacity-0">Contact Me</h2>
                <div className="flex items-center">
                    <div className="pr-6">
                        <img src={LightAvatar} alt="avatar"/>
                    </div>
                    <p className="text-black dark:text-white">With more than 3 years of web development experience, I constantly strive to produce light-weight, responsive, intuitive websites that both the client and I can be proud of. Consider contacting me to see how I can help you achieve your mission.</p>            
                </div>
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col pl-12" style={{minWidth: "35%"}}>
                <label htmlFor="name" className="dark:text-white font-medium text-left pb-2">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 mb-4 outline outline-2 border-orange text-left bg-transparent dark:text-white px-2 focus:outline-pink"
                />
                <label htmlFor="email" className="dark:text-white font-medium text-left pb-2">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 mb-4 outline outline-2  border-orange text-left bg-transparent dark:text-white px-2 focus:outline-pink"
                />
                <label htmlFor="message" className="dark:text-white font-medium text-left pb-2">Message:</label>
                <textarea
                    type="text"
                    required
                    name="message"
                    id="message"
                    className="mt-1 mb-4  outline outline-2 border-orange text-left bg-transparent dark:text-white px-2 focus:outline-pink"
                    style={{minHeight: "100px"}}
                />
                <div className="flex items-center">
                  <input className="outline hover:text-pink dark:hover:text-blue outline-1 outline-black dark:outline-white dark:hover:outline-blue hover:outline-pink text-left cursor-pointer  max-w-min py-2 px-6" type="submit" value="Submit"/>
                   <p className={`ml-6 text-green-400 ${fadeIn}`}>Email Sent!</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact