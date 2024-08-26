
import Shopping from "./projectImages/Shopping.png"
import Midha from "./projectImages/Midha.png"
import Movies from "./projectImages/Movies.png"
import Midhafin from "./projectImages/Midhafin.png"
import ToDo from "./projectImages/ToDo.png"
import StopWatch from "./projectImages/StopWatch.png"
import weather from "./projectImages/weather.png"
import "./Project.css"

const data = [
    {
        img: Midha,
        projectTitle: "Midha Guru",
        techStack: ["Next.js", "React", "Tailwind", "W3Forms", "AWS"],
        description: "At MidhaGuru, our mission is to empower students in grades 6 to 10 with the knowledge, skills and confidence needed to excel academically and personally. We are committed to providing high-quality education and fostering a nurturing learning environment that inspires curiosity, critical thinking and a lifelong love for learning. We have collaborated with India's best faculties to create a structured and student-friendly platform which gives high-end technological exposure to our students.",
        githubLink: "https://github.com/midhadomains/midha_guru_nextjs",
        appLink: "https://www.midha.guru/",
        backendLink: "https://github.com/1ashutoshverma/wood-fans-backend"
    },
    {
        img: Midhafin,
        projectTitle: "Midhafin",
        techStack: ["Next.js", "React", "Tailwind","AWS","TypeScript", "Node.js", "Express", "MongoDB"],
        description: "MidhaFin was established in December 2011 (under the brand name FINATEE and later renamed to MidhaFin) with the main goal of providing excellent training for FRM®, CFA®, PRM, and several other courses.One of the hallmarks of MidhaFin is our status as one of the pioneering training providers in India to secure authorization from GARP in 2018",
        githubLink: "https://github.com/midhadomains/frm_midhafin_nextjs",
        appLink: "https://www.midhafin.com/",
        backendLink: "https://github.com/1ashutoshverma/chat-app-backend"
    },
   
    {
        img: Movies,
        projectTitle: "Movie catalogue - Web Application",
        techStack: ["HTML", "CSS", "JavaScript", "API"],
        description: "In this project, I developed a user-centric web-based movie catalog using HTML, CSS, and JavaScript, focusing on enhancing the user experience and managing data dynamically, with key highlights including crafting an engaging user interface with HTML and CSS, implementing interactive features such as movie search, genre-based filtering, and dynamic movie details display using JavaScript, and proficiently handling asynchronous tasks with callback functions for real-time data retrieval and updates, showcasing expertise in frontend development and asynchronous programming techniques, resulting in a polished and responsive movie catalog.",
        githubLink: "https://github.com/SachinSemwal007/Projects",
        appLink: "https://664335d47ca2dd009eee7d86--inspiring-squirrel-16798c.netlify.app/"
    },
    {
        img: Shopping,
        projectTitle: "Shopping List - Web Application",
        techStack: ["HTML", "CSS", "JavaScript"],
        description: "For the Shopping List Web Application project: Designed and developed a dynamic shopping list application utilizing HTML, CSS, and JavaScript, incorporating features like item addition, editing, and deletion alongside real-time updates through JavaScript. Styled the user interface with a responsive and visually appealing design using CSS, showcasing strong problem-solving and programming skills through the creation of an interactive web application.",
        githubLink: "https://github.com/SachinSemwal007/Shopping-List",
        appLink: "https://shopping-list-alpha-two.vercel.app/"
    },
    {
        img: weather,
        projectTitle: "Weather App Web Application",
        techStack: ["Next.js", "Tailwind-css", "TypeScript" , "API"],
        description: "In this Next.js project, a weather app is developed with Tailwind CSS and Open-Meteo APIs for weather and search related data. It includes current, daily, and hourly weather data (temperature, high/low, feels-like, wind, precip) sourced from the open-meteo API. The app detects the user's city automatically through browser geolocation and allows manual city search.",
        githubLink: "https://github.com/SachinSemwal007/New-Weather-App-",
        appLink: "https://new-weather-app-blue.vercel.app/"
    },
    {
        img: ToDo,
        projectTitle: "To Do List : Fully Responsive",
        techStack: ["React","vite", "CSS", "Jsx" , "javascript"],
        description: "For the To-Do List React Application: Developed a To-Do list application using React, JSX, and CSS, equipped with features for adding, deleting, and prioritizing tasks by enabling users to move items up and down the list. Demonstrated proficiency in React development, JSX syntax, and CSS styling to create a seamless user experience for task management, showcasing strong problem-solving skills and a keen eye for interactive web application design.",
        githubLink: "https://github.com/SachinSemwal007/React_ToDoLIst",
        appLink: "https://react-to-do-l-ist.vercel.app/"
    },
    {
        img: StopWatch,
        projectTitle: "The Dynamic real Time Stop-Watch",
        techStack: ["React","vite", "Tailwind-css", "Jsx"],
        description: "Crafted a Stopwatch application with React, JSX, and Vite, providing real-time updates and versatile functionalities like pausing, stopping, and resetting. Employed visually appealing CSS styling to enhance the user interface, ensuring a seamless and captivating experience. Demonstrated adept problem-solving skills and attention to detail in creating an interactive and visually appealing stopwatch application, showcasing proficiency in React development, JSX syntax, and modern tooling with Vite for rapid development and optimization.",
        githubLink: "https://github.com/SachinSemwal007/StopWatch",
        appLink: "https://stop-watch-rho-blond.vercel.app/"
    },
   
]




function Projects() {
    return (
        <div id='projects'>
            <h1>My Projects</h1>

            {
                data.map((e, index) => {
                    return (

                        index % 2 == 0 ? (
                            <div className="project-card proCard1" key={index}>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className={e.backendLink ? "projectButtons2" : "projectButtons1"}>
                                        <a href={e.githubLink} target="_blank"  rel="noreferrer"  className="project-github-link">{e.backendLink ? "Github Link" : "View Code"}</a>
                                       
                                        <a href={e.appLink} target="_blank"  rel="noreferrer"  className="project-deployed-link">View Live</a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="project-card proCard2" key={index}>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className={e.backendLink ? "projectButtons2" : "projectButtons1"}>
                                        <a href={e.githubLink} target="_blank" rel="noreferrer" className="project-github-link">{e.backendLink ? "Github Link" : "View Code"}</a>
                                        
                                        <a href={e.appLink} target="_blank" rel="noreferrer" className="project-deployed-link">View Live</a>
                                    </div>
                                </div>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                            </div>
                        )
                    )
                })
            }
        </div>
    )
}

export default Projects