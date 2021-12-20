const AboutCard = () => {

    return (
        <div id='about'>
            <div id='card'>
                <h1>About Me</h1>
                <h2 style={{}}>
                    I create 
                    <br/><a>fullstack applications</a>, 
                    <br/><a>responsive websites</a>, 
                    <br/>and I love <a>team projects</a>! 
                </h2>

                <h2>
                    I use
                    <div id='container'>
                        <a style={{"float": "left"}}>Node.js</a>
                        <a style={{"float": "left"}}>React & Next.js</a>
                        <a style={{"float": "left"}}>Git</a>
                        <a style={{"float": "left"}}>Express.js</a>
                        <a style={{"float": "left"}}>Google Firebase</a>
                        <a style={{"float": "left"}}>Javascript</a>
                        <a style={{"float": "left"}}>HTML</a>
                        <a style={{"float": "left"}}>CSS & SCSS</a>
                        <a style={{"float": "left"}}>Java</a>
                        <a style={{"float": "left"}}>Python</a>
                        <a style={{"float": "left"}}>Swift</a>
                        <a style={{"float": "left"}}>C++</a>
                        <a style={{"float": "left"}}>C</a>
                        <a style={{"float": "left"}}>ARM</a>
                    </div>
                </h2>

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