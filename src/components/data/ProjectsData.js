import HoboTracks from '../../assets/projects/hobo-tracks.png'
import Jeopardy from '../../assets/projects/jeopardy.png'
import RecycleQuest from '../../assets/projects/ecohacks.png'
import NithyaRaman from '../../assets/projects/Nithya-Raman-homepage.png'
import SFVX from '../../assets/projects/SFVX.gif'
import Lilliput from '../../assets/projects/lilliput-screengrab.gif'


export const projects = [
    {
        name: "Lilliput Play Homes",
        summary: "Designed and developed elegant and interactive ecommerce website for client creating bespoke luxury children's playhouses.",
        projectType: "Professional",
        image: Lilliput,
        tech: [
            "JavaScript",
            "PHP",
            "WordPress",
            "Green Sock",
            "Ecommerce",
            "Google Maps API",
            "Tailwind",
            "XD"
        ],
        deployment: "https://lilliputplayhomes.com/",
    },
    {
        name: "HoboTracks",
        summary: "Created HoboTracks which allows users to create a personal journal of a trip, follow other travelers' journeys, and see what messages they left behind all over the globe.",
        projectType: "Personal",
        image: HoboTracks,
        tech: [
            "Rails",
            "Ruby",
            "JavaScript",
            "React",
            "PostgreSQL",
            "Google Maps API",
            "Tailwind",
            "AWS",
            "XD"
        ],
        deployment: "https://hobo-tracks.com/",
        github: "https://github.com/evan-chernicky/hobo-tracks",
        walkthrough: "https://www.youtube.com/watch?v=X4t8KVCbkYU",
        wireframe: "https://xd.adobe.com/view/1d53b445-b557-4d10-8bfe-dc95ff8388b7-4800/"
    },
    {
        name: "Nithya Raman",
        summary: "Built site for LA City Councilmember Nithya Raman. Features custom Wordpress <-> Nationbuilder API integration which allows users to be added to NB newsletters and update NB events.",
        projectType: "Professional",
        image: NithyaRaman,
        tech: [
            "PHP",
            "JavaScript",
            "WordPress",
            "Nationbuilder API",
            "ACF Pro",
            "Splide JS",
        ],
        deployment: "https://cd4.lacity.gov/",
    },
    {
        name: "Skyefox Ventures",
        summary: "Created site for New York based digital marketing company. Uses custom GSAP animations.",
        projectType: "Professional",
        image: SFVX,
        tech: [
            "Webflow",
            "JavaScript",
            "GSAP",
            "Lenis",
        ],
        deployment: "https://www.skyefoxventures.com/",
    },
    {
        name: "Recycle Quest",
        summary: "Competed in 2.5 day hackathon (EcoHacks 2022). Collaborated with 3 person team to create app that allows companies and organizations to compete with each other by scanning barcodes of recycled items.",
        projectType: "Personal",
        image: RecycleQuest,
        tech: [
            "Rails",
            "Ruby",
            "JavaScript",
            "React",
            "PostgreSQL",
            "Scandit API",
            "Tailwind",
            "XD",
        ],
        github: "https://github.com/agubernikoff/ecohack",
        walkthrough: "https://www.youtube.com/watch?v=jAx4Gip3KZw",
        wireframe: "https://xd.adobe.com/view/620099e6-7dbd-4fee-9a05-799b6aa00137-3753/"
    },
    {
        name: "Jeopardy Game Show",
        summary: "App allows users to interact with a Jeopardy game board to select questions based on a chosen category and answer trivia questions.",
        projectType: "Personal",
        image: Jeopardy,
        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "XD",
        ],
        deployment: "https://evan-chernicky.github.io/Jeopardy-Game/",
        github: "https://github.com/evan-chernicky/Jeopardy-Game",
        wireframe: "https://xd.adobe.com/view/bed08911-10b5-42f7-ad6f-4a348e03b49c-eb83/"
    },
]
