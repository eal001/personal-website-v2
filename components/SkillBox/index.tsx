const SkillBox = ({skill, projects}) => {

    const handleEnter = () => {
        // console.log('entered')
        // we want to trigger the start of an animation
    }

    const handleLeave = () => {
        // console.log('left')
        // we want to reset the words to just the skill
    }

    return (
        <div id='skill-box' >
            <a href='#projects' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <div id={'skill-'+skill}><span>{skill}</span></div>
                {
                    // let i = -1;
                    projects.map(project => {
                        // i++;
                        return (
                            <div key={project + ' ' + skill} id={skill}><span>{project}</span></div>
                        );
                    })
                }
            </a>
        </div>
    )
}

export default SkillBox;