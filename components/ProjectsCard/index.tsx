import projects from  "../../projects.config.js"

const Projects = () => {
    return (
        <div data-aos='fade-up' data-aos-duration='1000' id='projects'>
            <div id="card">
                <h1>My Work</h1>
                <div id='center-container'>
                    <div id='container'>
                        {
                            projects.map(project => {
                                return (
                                    <Project key={project.name} image={project.image} name={project.name} description={project.description} link={project.link}/>   
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        
    )
}


const Project = ({ image, name, description, link} : {image: StaticImageData, name: string, description: string, link: string}) => {

    return (
        <div key={'key '+name} id={'container'}>
            <div id={'project'} >
                <img src={image.src} alt={name}></img>
                <a id='wrapper' href={link}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </a>
            </div>
        </div>
    )
}

export default Projects;