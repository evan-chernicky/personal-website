import React, {useState, useEffect, useContext} from 'react'
import AboutNav from './AboutNav'
import {PageContext} from './PageContext'
import space from '../assets/space-lighter.jpg'


function About() {

  const [isScrollUp, setIsScrollUp] = useState(true)
  const [showMobileNav, setShowMobileNav] = useState(false)
  //follows width
  const [width, setWidth] = useState(window.innerWidth)
  function updateDimensions () {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  //unfortunate fix for annoying scroll for mobile nav
  const body = document.querySelector('body')
    if (showMobileNav) {
      body.style.overflowY = "hidden"
    } else {
      body.style.overflowY = "scroll"
    }

  //if scrolling up or, near top of page, add scrollbar
      window.onscroll = function() {
          setIsScrollUp(this.oldScroll > this.scrollY || this.scrollY < 25);
          this.oldScroll = this.scrollY;
      }

      const {setNewLocation, setTransistionStage} = useContext(PageContext)

      function renderPageTransition(e) {
        e.preventDefault()
        setShowMobileNav(false)
        setTransistionStage("fadeOut")
        setNewLocation("/")
    }

  return (
    <>
    <header className={`dark:bg-black/70 bg-white/70 dark:lg:bg-transparent lg:bg-transparent text-black dark:text-white duration-700 flex py-5 justify-between w-full right-0 left-0 fixed px-8 items-center z-10 ${isScrollUp ? 'translate-y-0' : '-translate-y-full'}`}>
    <a onClick={(e) => renderPageTransition(e)} className="hover:text-blue" href="/">&larr; Back Home</a>
    {width < 976 ? (
    <button onClick={() => setShowMobileNav(!showMobileNav)} className={`menu + ${showMobileNav ? "opened" : null}`} aria-label="Main Menu">
      <svg className="stroke-black dark:stroke-white" width="30" height="30" viewBox="0 0 100 100">
          <path className="line line1 stroke-black dark:stroke-white" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"></path>
          <path className="line line2 stroke-black dark:stroke-white" d="M 20,50 H 80"></path>
          <path className="line line3 stroke-black dark:stroke-white" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"></path>
      </svg>
    </button> 
    ) : null} 
    </header>
    <div className={`bg-white dark:bg-black ${!showMobileNav ? "page" : null} ${showMobileNav ? "overflow-y-hidden" : null}`}>
    <div className="min-h-screen m-auto flex flex-row relative">
      <div className="grid grid-cols-5">
        <div className="col-span-5 lg:col-span-4 grid grid-cols-1 lg:grid-cols-3">
      <div className="relative visible mt-36 col-span-1 lg:px-0">
            <div className="image-line h-full expand-line opacity-0"></div>
            <img src={space} alt="Evan Chernicky" />
        </div>
        <div className="px-8 lg:px-24 flex flex-col col-span-2">
        <section id="story" className="flex overflow-hidden mt-14 lg:mt-36" >
                <div className="text-left text-black dark:text-white slide-in-right opacity-0">
                    <h2  style={{animationDelay: ".6s"}} className="mb-8 text-6xl uppercase tracking-wider tracking-in-expand opacity-0">My Story</h2>
                    <div className="max-w-2xl">
                        <p className="text-black dark:text-white mb-3">From my earliest memories, I have been captivated by stories. In 2005, I went to see the Space Shuttle take off and became curious about the motivation of an explorer risking their life to discover the last frontier. This same fascination led me daydream about adventures in faraway places, listen to podcasts about the rise and fall of the Roman empire, dive into the deep fictional lore of the Halo video game franchise, and occasionally even sketch out ideas for novels on sheets of papers. Years later, this same passion for storytelling would lead me to graduate with a degree from Denison University with a degree in Communication.</p>
                        <p className="text-black dark:text-white mb-8">Meanwhile, computers were always a fun tool for me to express myself. I created my first personal website on Weebly when I was in 8th grade, and remember being impressed to understand basic HTML. I later took an AP Java class in high school where I began to understand how far the programming rabbit hole went. While throughout college I helped my dad’s small business by managing his WordPress website, I never truly considered a career in web development until I started creating custom WordPress themes while working as an intern at an adverting agency called Model B.</p>
                        <p className="text-black dark:text-white mb-8">It was while I was at Model B, I discovered that I could help others create stories for companies to help sell their products using web development technologies. Advancing from intern, to Creative Technologist, and eventually to team manager, I learned the basics of the web, HTML, CSS, and JavaScript while also customizing WordPress templates with PHP.  After three years, I left to attend Flatiron School which helped me solidify my basics, expand my knowledge by learning React, Ruby, Rails, and SQL, and become more confident in my ability to create visually compelling stories for clients.</p>
                        <p className="text-black dark:text-white mb-8">Today, I am excited to take my new skills and passion for both code and storytelling to the next chapter of my life working for Shift7 Digital.</p>
                    </div>
                </div>
            </section>
            <section id="experience" className="flex flex-row overflow-hidden" >
                <div className="mt-14 text-left text-black dark:text-white slide-in-right opacity-0 w-full">
                    <h2 style={{animationDelay: ".6s"}} className="mb-8 text-6xl uppercase tracking-wider tracking-in-expand opacity-0">Experience</h2>
                    <div className="max-w-2xl">
                    <div className="mb-10">
                        <h3 className="text-2xl"><strong>Front-End Developer</strong> | Freelance</h3>
                        <h4 className="text-lg mb-4">May 2022 - Jul 2023</h4>
                        <ul className="list-disc space-y-1 dark:marker:text-blue marker:text-pink">
                          <li>Developer at a digital agency specializing in providing web expertise for manufacturers and distributors.</li>
                          <li>Lead developer of a front-end team of 3 tasked with the creation of a dynamic and responsive web app. Use expertise in semantic HTML, SCSS, JS, and React to integrate web applications with Bloomreach CMS.</li>
                          <li>Perform code reviews to ensure code quality and help to teach team members about best practices.</li>
                          <li>Collaborate with the design team to ensure that web compositions are modular and conform to responsive design.</li>
                          <li>Head search integration for Fortune 500 company specializing in construction materials using Lucidworks Fusion.</li>
                          <li>Create web responsive components with interactive features in major redesign of petrochemical company website.</li>
                        </ul>
                      </div>
                    <div className="mb-10">
                        <h3 className="text-2xl"><strong>Front-End Developer</strong> | Shift7 Digital</h3>
                        <h4 className="text-lg mb-4">Sept 2022 - Jul 2023</h4>
                        <ul className="list-disc space-y-1 dark:marker:text-blue marker:text-pink">
                          <li>Developer at a digital agency specializing in providing web expertise for manufacturers and distributors.</li>
                          <li>Lead developer of a front-end team of 3 tasked with the creation of a dynamic and responsive web app. Use expertise in semantic HTML, SCSS, JS, and React to integrate web applications with Bloomreach CMS.</li>
                          <li>Perform code reviews to ensure code quality and help to teach team members about best practices.</li>
                          <li>Collaborate with the design team to ensure that web compositions are modular and conform to responsive design.</li>
                          <li>Head search integration for Fortune 500 company specializing in construction materials using Lucidworks Fusion.</li>
                          <li>Create web responsive components with interactive features in major redesign of petrochemical company website.</li>
                        </ul>
                      </div>
                      <div className="mb-10">
                        <h3 className="text-2xl"><strong>Creative Technologist</strong> | Model B</h3>
                        <h4 className="text-lg mb-4">May 2019 - Nov 2021</h4>
                        <ul className="list-disc space-y-1 dark:marker:text-blue marker:text-pink">
                          <li>Headed web department at a tech startup. Managed team of two and several contractors in creating web solutions.</li>
                          <li>Developed over 40 custom, responsive, and ADA compliant WordPress websites using HTML, CSS, JS, and PHP. </li>
                          <li>Supervised managed web services for 25 websites which included both development and monthly reporting.</li>
                          <li>Directed managed web tasks and ensured sites remained up-to-date, using SEO optimization and quality assurance tools such as Moz, BrowserStack, and Silktide reporting.</li>
                          <li>Directed web team by performing code reviews, ensuring QA, and teaching new technologies when applicable.</li>
                          <li>Interacted with clients in face-to-face meetings and phone calls to ensure product satisfaction and to enhance sites as needed. Performed client-facing presentations after site completion to instruct clients how to manage their CMS.</li>
                          <li>Implemented custom data-driven monitoring solutions using Google Analytics and Google Tag Manager, to gather insight into user activities on client websites and landing pages.</li>
                          <li>Collaborated with advertising team to implement ad campaign tracking throughout sites to determine effectiveness.</li>
                        </ul>
                      </div>
                      <div className="mb-10">
                        <h3 className="text-2xl"><strong>Special Projects/ Media</strong> | Lilliput Play Homes</h3>
                        <h4 className="text-lg mb-4">May 2010 - Present <i className="text-sm">(Part-time)</i></h4>
                        <ul className="list-disc space-y-1 dark:marker:text-blue marker:text-pink">
                          <li>Manage, design, and edit official WordPress websites. Collaborate with leadership to implement features.</li>
                          <li>Create and implement digital advertising campaigns with Google Ads, Facebook, and Pinterest.</li>
                          <li>Track target audience data using Google Analytics and Tag Manager to ensure site effectiveness.</li>
                          <li>Develop and manage social media content to realize company goals to reach target demographics.</li>
                        </ul>
                      </div>
                      <div className="mb-10">
                        <h3 className="text-2xl"><strong>Business Development Coordinator</strong> | RealClear Media Group</h3>
                        <h4 className="text-lg mb-4">Jul 2018 - Nov 2018</h4>
                        <ul className="list-disc space-y-1 dark:marker:text-blue marker:text-pink">
                          <li>Tracked legislative issues and provide updates to team weekly.</li>
                          <li>Prepared reports, metrics, and updates to track progress for online ad campaigns.</li>
                          <li>Prepared billing and finance reports for national campaigns.</li>
                          <li>Monitored use of all national and local ad operations systems.</li>
                          <li>Assisted in monitoring inventory use for all digital inventory.</li>
                          <li>Assisted in managing CRM system and developing sales pipeline.</li>
                          <li>Created marketing materials using InDesign.</li>
                        </ul>
                      </div>
                      <div className="mb-10">
                        <h3 className="text-2xl"><strong>Winter Internship</strong> | Higher Images Inc.</h3>
                        <h4 className="text-lg mb-4">Jan 2018</h4>
                        <p className="space-y-1">
                          Interned for Google Partnered marketing firm that specializes in online commercial marketing including search engine optimization (SEO), AdWords, website design, and social media management. Wrote Business Highlights for the Pittsburgh Business Show.
                        </p>
                      </div>
                      <div className="mb-10">
                        <h3 className="text-2xl"><strong>Utopia 500 Project - US Intern</strong> | Universidade do Porto</h3>
                        <h4 className="text-lg mb-4">Jan 2018</h4>
                        <p className="mb-4">
                          Worked as sole U.S. member of an international team of interns helping to create, edit, and manage news entries for a non-governmental organization seeking to promote peace and inspire innovation in science and technology.
                        </p>
                        <ul className="list-disc space-y-1 dark:marker:text-blue marker:text-pink">
                          <li>Organized Multiculturalism Day, a day where hundreds of kids from Valongo, Portugal gathered to learn about other cultures.</li>
                          <li>Conducted interviews with organizers, students, and the mayor of Valongo to gather quotes about multiculturalism day.</li>
                          <li>Created blog article on Multiculturalism Day.</li>
                          <li>Organized information to create one of the largest databases in the world in Utopian thought.</li>
                          <li>Headed, managed, and organized the creation of a video on multiculturalism for the Guestbook Project. Interviewed 5 different people from different cultures, religions, races, gender identities, and sexual orientations on their unique experiences living in a foreign country.</li>
                          <li>Uploaded and managed article entries onto Utopia 500 Facebook page.</li>
                          <li>Created marketing materials using InDesign.</li>
                          <li>Collaborated to create a guide for future interns.</li>
                        </ul>
                      </div>
                    </div>
                </div>
            </section>
            <section id="education" className="flex flex-row overflow-hidden" >
                <div className="mt-14 text-left text-black dark:text-white slide-in-right opacity-0 w-full">
                    <h2 style={{animationDelay: ".6s"}} className="mb-8 text-6xl uppercase tracking-wider tracking-in-expand opacity-0">Education</h2>
                    <div className="max-w-2xl">
                    <div className="mb-10">
                        <h3 className="text-2xl"><strong>Flatiron School</strong> | Software Engineering Certificate</h3>
                        <h4 className="text-lg mb-4">Jan 2022 - May 2022</h4>
                        <p className="mb-4">
                        Attended 5 month Software Engineering bootcamp. Learned JavaScript, React.js, Ruby, Ruby on Rails, and SQL.
                        </p>
                    </div>
                    <div className="mb-10">
                        <h3 className="text-2xl"><strong>Denison Unviersity</strong> | B.A. Communication</h3>
                        <h4 className="text-lg mb-4">Aug 2014 - May 2018</h4>
                        <ul className="list-disc space-y-1 dark:marker:text-blue marker:text-pink">
                          <li>Lambda Pi Eta (National Communication Honrary Society)</li>
                          <li>Denison Campus Governance Association Senator</li>
                          <li>CIEE Study Abroad Student - Universidade Nova de Lisboa (Feb - May 2017)</li>
                          <li>Beta Theta Pi Member/Chapter Historian</li>
                          <li>Denison Men’s Rugby Club </li>
                          <li>Disc Jockey for 91.1 WDUB</li>
                          <li>Big Brothers Big Sisters of America</li>
                        </ul>
                    </div>
                    </div>
                  </div>
            </section>
            <section id="interests" className="flex flex-row overflow-hidden mb-36" >
                <div className="mt-14 text-left text-black dark:text-white slide-in-right opacity-0 w-full">
                    <h2 style={{animationDelay: ".6s"}} className="mb-8 text-6xl uppercase tracking-wider tracking-in-expand opacity-0">Interests</h2>
                    <ul className="list-disc space-y-1 dark:marker:text-blue marker:text-pink">
                          <li>Traveling (16 countries and counting)</li>
                          <li>Rock Climbing/ Bouldering</li>
                          <li>Entering Wikipedia rabbit holes</li>
                          <li>Finding a place to tie up my hammock</li>
                          <li>Podcasts about ancient history, philosophy, economics, and current events.</li>
                          <li>iPhone Photography</li>
                          <li>Music that makes weird noises </li>
                          <li>Biking to everywhere in DC </li>
                        </ul>
                </div>
            </section>
            </div>
            </div>
          <AboutNav showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} width={width}/>
          </div>
    </div>
    </div>
    </>
  )
}

export default About