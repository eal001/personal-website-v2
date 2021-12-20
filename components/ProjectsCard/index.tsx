const Projects = () => {
    return(
        <div id='projects'>
            <div id="card">
                <h1>My Work</h1>
            </div>
        </div>
    )
}

const Project = ({image, name, description}) => {
    <div id={'project '+name}>
        <img src={image} alt={name}></img>
    </div>
}

export default Projects;