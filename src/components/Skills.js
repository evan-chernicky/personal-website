import React from 'react'
import ReactBlack from '../assets/skills/black/react-black.svg'
import ReactWhite from '../assets/skills/white/react-white.svg'
import JavascriptBlack from '../assets/skills/black/javascript-black.svg'
import JavascriptWhite from '../assets/skills/white/javascript-white.svg'
import BootstrapBlack from '../assets/skills/black/bootstrap-black.svg'
import BootstrapWhite from '../assets/skills/white/bootstrap-white.svg'
import RubyWhite from '../assets/skills/white/ruby-white.svg'
import RubyBlack from '../assets/skills/black/ruby-black.svg'
import RailsWhite from '../assets/skills/white/rails-white.svg'
import RailsBlack from '../assets/skills/black/rails-black.svg'
import PHPWhite from '../assets/skills/white/php-white.svg'
import PHPBlack from '../assets/skills/black/php-black.svg'
import PostgreWhite from '../assets/skills/white/postgre-white.svg'
import PostgreBlack from '../assets/skills/black/postgre-black.svg'
import WordpressWhite from '../assets/skills/white/wordpress-white.svg'
import WordpressBlack from '../assets/skills/black/wordpress-black.svg'
import TailwindWhite from '../assets/skills/white/tailwind-white.svg'
import TailwindBlack from '../assets/skills/black/tailwind-black.svg'
import SASSWhite from '../assets/skills/white/sass-white.svg'
import SASSBlack from '../assets/skills/black/sass-black.svg'
import HTMLWhite from '../assets/skills/white/html-white.svg'
import HTMLBlack from '../assets/skills/black/html-black.svg'
import CSSWhite from '../assets/skills/white/css-white.svg'
import CSSBlack from '../assets/skills/black/css-black.svg'
import XDWhite from '../assets/skills/white/xd-white.svg'
import XDBlack from '../assets/skills/black/xd-black.svg'








function Skills({isDarkMode}) {

    const skills = [
        {
            name: "JavaScript",
            imageWhite: JavascriptWhite,
            imageBlack: JavascriptBlack
        },
        {
            name: "React.js",
            imageWhite: ReactWhite,
            imageBlack: ReactBlack
        },
        {
            name: "Ruby",
            imageWhite: RubyWhite,
            imageBlack: RubyBlack
        },
        {
            name: "Rails",
            imageWhite: RailsWhite,
            imageBlack: RailsBlack
        },
        {
            name: "PHP",
            imageWhite: PHPWhite,
            imageBlack: PHPBlack
        },
        {
            name: "PostgreSQL",
            imageWhite: PostgreWhite,
            imageBlack: PostgreBlack
        },
        {
            name: "WordPress",
            imageWhite: WordpressWhite,
            imageBlack: WordpressBlack
        },
        {
            name: "Tailwind",
            imageWhite: TailwindWhite,
            imageBlack: TailwindBlack
        },
        {
            name: "SASS",
            imageWhite: SASSWhite,
            imageBlack: SASSBlack
        },
        {
            name: "Bootstrap",
            imageWhite: BootstrapWhite,
            imageBlack: BootstrapBlack
        },
        {
            name: "HTML",
            imageWhite: HTMLWhite,
            imageBlack: HTMLBlack
        },
        {
            name: "CSS",
            imageWhite: CSSWhite,
            imageBlack: CSSBlack
        },
        {
            name: "XD",
            imageWhite: XDWhite,
            imageBlack: XDBlack
        },
    ]


  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-black dark:text-white">
        <div className="md:m-32 m-10 text-center p-1 bg-black dark:bg-white shadow-xl shadow-pink dark:shadow-blue rounded-xl">
            <div className="bg-white dark:bg-black p-6 md:py-14 md:px-24 max-w-screen-xl rounded-xl">
                <h2 className="text-6xl font-bold uppercase">Skills</h2>
                    <div className="flex flex-row flex-wrap pb-12 justify-center">
                        {skills.map(skill => (
                            <div className="relative flex flex-col justify-center items-center w-12 md:w-20 m-6 cursor-default mt-8 mb-8 md:mb-16">
                                <img className="max-h-24" src={isDarkMode ? skill.imageWhite : skill.imageBlack} alt={skill.name}/>
                                <figcaption className="absolute -bottom-6 md:-bottom-12">{skill.name}</figcaption>
                            </div>
                        )
                        )}
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Skills