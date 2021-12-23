import SkillBox from "../SkillBox";

const AboutCard = () => {

    return (
        <div id='skills'>
            <div id='card'>
                <h1>What I Do</h1>
                <h2>
                    I create 
                </h2>
                <div id='center-container'>
                    <SkillBox skill={"fullstack applications"} projects={["BiasML", "Rate My Lease"]} />
                    <SkillBox skill={"team projects"} projects={["BiasML", "Rate My Lease", "Data Science in Practice"]}/>
                    <SkillBox skill={"responsive websites"} projects={["BiasML", "Novelly Maketing Website"]}/>
                </div>
                <h2>I use</h2>
                <p>
                    <a >Node.js</a>
                    <a >React & Next.js</a>
                    <a >Git</a>
                    <a >Express.js</a>
                    <a >Google Firebase</a>
                    <a >Javascript</a>
                    <a >HTML</a>
                    <a >CSS & SCSS</a>
                    <a >Java</a>
                    <a >Python</a>
                    <a >Swift</a>
                    <a >C++</a>
                    <a >C</a>
                    <a >ARM</a>
                </p>

                <h2>
                    I study
                    <div id='container'>
                        <a style={{"float":"left"}}>Algorithm Design</a>
                        <a style={{"float":"left"}}>Object Oriented Programming</a>
                        <a style={{"float":"left"}}>Machine Learning</a>
                        <a style={{"float":"left"}}>Sentiment Analysis</a>
                        <a style={{"float":"left"}}>Dynamic Programming</a>
                    </div>
                </h2>
                
            </div>
        </div>
    )

}

export default AboutCard;