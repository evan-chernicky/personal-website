import React from 'react'
import AboutNav from './AboutNav'
import space from '../assets/space.jpg'



function About() {
  return (
    <div className="bg-white dark:bg-black page">
    <div className="min-h-screen m-auto flex flex-row relative">
      <div className="flex flex-col">
        <section id="story" className="flex flex-row overflow-hidden" style={{width: "70%"}}>
                <div className="relative mt-36" style={{width: "30%"}}>
                    <div className="image-line expand-line opacity-0"></div>
                    <img src={space} alt="Evan Chernicky" />
                </div>
                <div className="px-24 mt-36 text-left text-black dark:text-white slide-in-right opacity-0" style={{width: "70%"}}>
                    <h2  style={{animationDelay: ".6s"}} className="mb-8 text-6xl uppercase tracking-wider tracking-in-expand opacity-0">My Story</h2>
                    <div className="max-w-2xl">
                        <p className="text-black dark:text-white mb-3">From my earliest memories, I remember always being captivated by stories. In 2005, I went to see the Space Shuttle take off (pictured left) and being consumed by these explorers risking their life to discover the last frontier. This same fascination led me daydream about adventures in faraway places, listen to podcasts about the rise and fall of the Roman empire, dive into the deep fictional lore of the Halo video game franchise, and occasionally even sketch out ideas for novels on sheets of papers. Eventually, this same passion for storytelling would lead me to graduate in a degree from Denison University with a degree in Communication.</p>
                        <p className="text-black dark:text-white mb-8">Meanwhile, computers were always a fun tool for me to express myself. I created my first personal website on Weebly when I was in 8th grade and remember being impressed to understand basic HTML. I later took an AP Java class in high school where I began to understand how far the programming rabbit hole went.  While throughout college I helped my dad’s small business by managing his WordPress website, I never truly considered a career in web development until I started creating custom WordPress themes while at an internship at a adverting agency called Model B.</p>
                        <p className="text-black dark:text-white mb-8">It was while I was at Model B, I discovered that I could help others create stories for their products to help sell their products using web development technologies. Advancing from Intern to eventually to eventually Creative Technologist and manager of a team of two, I learned the basics of the web, HTML, CSS, and JavaScript while also customizing WordPress templates with PHP. After 3 years, I left to attend Flatiron School which helped me solidify my basics, expand my knowledge by learning React, Ruby, Rails, and SQL and become more confident in my ability to create visually compelling stories for clients.</p>
                        <p className="text-black dark:text-white mb-8">Today, I am excited to take my new skills and passion for both code and storytelling to the next chapter of my life.</p>
                    </div>
                </div>
            </section>
            <section id="experience" className="flex flex-row overflow-hidden" style={{width: "70%"}}>
                <div className="relative mt-36" style={{width: "30%"}}>
                    <div className="image-line expand-line opacity-0"></div>
                    <img src={space} alt="Evan Chernicky" />
                </div>
                <div className="px-24 mt-36 text-left text-black dark:text-white slide-in-right opacity-0" style={{width: "70%"}}>
                    <h2  style={{animationDelay: ".6s"}} className="mb-8 text-6xl uppercase tracking-wider tracking-in-expand opacity-0">My Story</h2>
                    <div className="max-w-2xl">
                        <p className="text-black dark:text-white mb-3">From my earliest memories, I remember always being captivated by stories. In 2005, I went to see the Space Shuttle take off (pictured left) and being consumed by these explorers risking their life to discover the last frontier. This same fascination led me daydream about adventures in faraway places, listen to podcasts about the rise and fall of the Roman empire, dive into the deep fictional lore of the Halo video game franchise, and occasionally even sketch out ideas for novels on sheets of papers. Eventually, this same passion for storytelling would lead me to graduate in a degree from Denison University with a degree in Communication.</p>
                        <p className="text-black dark:text-white mb-8">Meanwhile, computers were always a fun tool for me to express myself. I created my first personal website on Weebly when I was in 8th grade and remember being impressed to understand basic HTML. I later took an AP Java class in high school where I began to understand how far the programming rabbit hole went.  While throughout college I helped my dad’s small business by managing his WordPress website, I never truly considered a career in web development until I started creating custom WordPress themes while at an internship at a adverting agency called Model B.</p>
                        <p className="text-black dark:text-white mb-8">It was while I was at Model B, I discovered that I could help others create stories for their products to help sell their products using web development technologies. Advancing from Intern to eventually to eventually Creative Technologist and manager of a team of two, I learned the basics of the web, HTML, CSS, and JavaScript while also customizing WordPress templates with PHP. After 3 years, I left to attend Flatiron School which helped me solidify my basics, expand my knowledge by learning React, Ruby, Rails, and SQL and become more confident in my ability to create visually compelling stories for clients.</p>
                        <p className="text-black dark:text-white mb-8">Today, I am excited to take my new skills and passion for both code and storytelling to the next chapter of my life.</p>
                    </div>
                </div>
            </section>
          </div>
          <AboutNav />
    </div>
    </div>
  )
}

export default About