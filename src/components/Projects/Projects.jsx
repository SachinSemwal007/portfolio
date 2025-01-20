
import Shopping from "./projectImages/Shopping.png"
import Midha from "./projectImages/Midha.png"
import Movies from "./projectImages/Movies.png"
import Midhafin from "./projectImages/Midhafin.png"
import ToDo from "./projectImages/ToDo.png"
import StopWatch from "./projectImages/StopWatch.png"
import weather from "./projectImages/weather.png"
import jssps from "./projectImages/jssps.png"
import image from "./projectImages/image.png"
import "./Project.css"

const data = [
    {
        img: jssps,
        projectTitle: "Jharkhand State Sports Promotion Society careers Portal",
        techStack: ["Next.js", "Tailwind-CSS", "Express.js", "Node.js", "MongoDB", "AWS"],
        description: "In this project, I developed and hosted a comprehensive career portal for JSSPS to streamline the recruitment process for coaching positions. The portal allowed users to sign up, verify their email through a secure verification link, and log in to access the application system. Key highlights of this project include: User Registration and Verification: Implemented a robust user registration system with email verification to ensure authenticity.Vacancy Management: Designed a structured interface allowing applicants to view and apply for three roles—Coach, Assistant Coach, and Head Coach.Application Process: Developed a dynamic dashboard where applicants could fill out and submit their application forms, which were then available for download directly from the dashboard.Admin Dashboard: Built an intuitive admin panel to manage applicants efficiently, with features to view the number of submissions and download application forms in real time.Full-Stack Development: Handled the entire backend independently, ensuring secure data handling, while collaborating with a teammate on the frontend to deliver a user-friendly interface.Hosting and Deployment: Managed the hosting process, deploying the frontend on AWS Amplify and the backend on AWS Lambda using a serverless architecture, ensuring scalability and reliability.This project demonstrates my expertise in full-stack development, authentication systems, serverless architecture, cloud deployment, and creating user-centric features for a seamless experience",
        githubLink: "https://github.com/SachinSemwal007/carreer-job-portal",
        appLink: "https://www.jsspscareers.com/",
    },
    {
        img: image,
        projectTitle: "Product-Cart",
        techStack: ["React.js", "Vite", "Chakra-Ui", "Node.js", "Express.js", "MongoDB", "Render"],
        description: "In this project, I developed a user-friendly Product Cart application with features to manage products dynamically in real-time. The application is designed to provide a seamless user experience with modern UI/UX practices. Key highlights of this project include:Frontend Development:Built the frontend using Vite for its fast build and development capabilities and Chakra UI for creating a visually appealing and responsive design.Backend Development: Implemented the backend using Node.js and Express to handle API endpoints and business logic.Database Integration: Used MongoDB as the database to store and manage product data efficiently.Dynamic Product Management: Added features for real-time product updates, allowing users to add , update or delete products instantly, ensuring a smooth experience.Dark Mode: Integrated a dark mode feature to enhance usability and cater to user preferences.User-Friendly Interface: Designed the application to be intuitive and easy to navigate, prioritizing the end-user experience.Hosting and Deployment: Deployed the application on Render.com, ensuring reliable performance and availability.This project showcases my skills in modern frontend and backend development, database management, real-time functionality implementation, and deploying production-ready applications on cloud platforms.",
        githubLink: "https://github.com/SachinSemwal007/mern-product-cart",
        appLink: "https://mern-product-cart.onrender.com/",
    },
    {
        img: Midha,
        projectTitle: "Midha Guru [MG]",
        techStack: ["Next.js", "Tailwind-CSS", "W3Forms", "MongoDB", "AWS"],
        description: "At MidhaGuru, our mission is to empower students in grades 6 to 10 with the knowledge, skills and confidence needed to excel academically and personally. We are committed to providing high-quality education and fostering a nurturing learning environment that inspires curiosity, critical thinking and a lifelong love for learning. We have collaborated with India's best faculties to create a structured and student-friendly platform which gives high-end technological exposure to our students.",
        githubLink: "https://github.com/midhadomains/midha_guru_nextjs",
        appLink: "https://www.midha.guru/",
        backendLink: "https://github.com/1ashutoshverma/wood-fans-backend"
    },
    {
        img: Midhafin,
        projectTitle: "Midhafin [MF]",
        techStack: ["Next.js", "Tailwind-CSS", "AWS", "TypeScript", "Node.js", "Express.js", "MongoDB"],
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
        projectTitle: "Weather App - Web Application",
        techStack: ["Next.js", "Tailwind-CSS", "TypeScript" , "API"],
        description: "In this Next.js project, a weather app is developed with Tailwind CSS and Open-Meteo APIs for weather and search related data. It includes current, daily, and hourly weather data (temperature, high/low, feels-like, wind, precip) sourced from the open-meteo API. The app detects the user's city automatically through browser geolocation and allows manual city search.",
        githubLink: "https://github.com/SachinSemwal007/New-Weather-App-",
        appLink: "https://new-weather-app-blue.vercel.app/"
    },
    {
        img: ToDo,
        projectTitle: "To Do List : Fully Responsive",
        techStack: ["React","vite", "Tailwind-CSS", "Jsx" , "JavaScript"],
        description: "For the To-Do List React Application: Developed a To-Do list application using React, JSX, and tailwind-CSS, equipped with features for adding, deleting, and prioritizing tasks by enabling users to move items up and down the list. Demonstrated proficiency in React development, JSX syntax, and CSS styling to create a seamless user experience for task management, showcasing strong problem-solving skills and a keen eye for interactive web application design.",
        githubLink: "https://github.com/SachinSemwal007/React_ToDoLIst",
        appLink: "https://react-to-do-l-ist.vercel.app/"
    },
    {
        img: StopWatch,
        projectTitle: "The Dynamic real Time Stop-Watch",
        techStack: ["React", "Vite", "Tailwind-CSS", "Jsx"],
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
                                    <img src={e.img} alt=""/>
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