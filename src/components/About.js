import React from 'react'
import space from '../assets/space.jpg'


function About() {
  return (
    <div className="page">
    <section className="min-h-screen m-auto flex flex-col items-center overflow-hidden">
      <div className="flex flex-row mt-36">
              <div className="relative" style={{width: "20%"}}>
                  <div className="image-line expand-line opacity-0"></div>
                  <img src={space} alt="Evan Chernicky" />
              </div>
              <div className="px-24 text-left text-black dark:text-white slide-in-right opacity-0" style={{width: "50%"}}>
                  <h2  style={{animationDelay: ".6s"}} className="mb-8 text-6xl uppercase tracking-wider tracking-in-expand opacity-0">My Story</h2>
                  <div className="max-w-2xl">
                      <p className="text-black dark:text-white mb-3">From my earliest memories, I remember always being captivated by stories. In 2005, I went to see the Space Shuttle take off (pictured left) and being consumed by these explorers risking their life to discover the last frontier. This same fascination led me daydream about adventures in faraway places, listen to podcasts about the rise and fall of the Roman empire, dive into the deep fictional lore of the Halo video game franchise, and occasionally even sketch out ideas for novels on sheets of papers. Eventually, this same passion would lead me to graduate in a degree from Denison University with a degree in Communication.</p>
                      <p className="text-black dark:text-white mb-8">At the same time, computers were always a fun tool for me to express myself. I created my first personal website on Weebly when I was in 8th grade and remember being impressed to understand basic HTML. I later took an AP Java class in high school where I began to understand how far the programming rabbit hole went.  While throughout college I helped my dad’s small business by managing his WordPress website, I never truly considered a career in web development until I started creating custom WordPress themes while at an internship at a adverting agency called Model B.</p>
                  </div>
              </div>
          </div>
    </section>
    </div>
  )
}

export default About