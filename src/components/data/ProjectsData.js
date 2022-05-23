import HoboTracks from '../../assets/projects/hobo-tracks.png'
import ModelB from '../../assets/projects/model-b.png'
import Jeopardy from '../../assets/projects/jeopardy.png'
import PersonalWebsite from '../../assets/projects/personal-website.png'




export const projects = [
    {
        name: "HoboTracks",
        summary: "Created HoboTracks which allows users to create a personal journal of a trip, follow other travelers' journeys, and see what messages they left behind all over the globe.",
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
        deployment: "https://hobotracks.herokuapp.com/",
        github: "https://github.com/evan-chernicky/hobo-tracks",
        walkthrough: "https://www.youtube.com/watch?v=X4t8KVCbkYU",
        wireframe: "https://xd.adobe.com/view/1d53b445-b557-4d10-8bfe-dc95ff8388b7-4800/"
    },
    {
        name: "Model B",
        summary: "Model B is a full-service advertising agency which integrates creativity and technology. For three years, I developed and managed over 90 distinctive and responsive websites for a wide range of businesses.",
        image: ModelB,
        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "WordPress",
            "Bootstrap",
            "Foundation",
            "SASS",
            "XD",
        ],
        deployment: "https://www.modelb.com/",
    },
    {
        name: "Personal Website",
        summary: "Created and designed personal website. Built using React and Tailwind. Integrated EmailJS for email services.",
        image: PersonalWebsite,
        tech: [
            "React",
            "Tailwind",
            "EmailJS",
            "JavaScript",
            "CSS",
            "HTML",
        ],
        deployment: "https://evanchernicky.com/",
        github: "https://github.com/evan-chernicky/personal-website",

    },
    {
        name: "Jeopardy Game Show",
        summary: "App allows users to interact with a Jeopardy game board to select questions based on a chosen category and answer trivia questions.",
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
