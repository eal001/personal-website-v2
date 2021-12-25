import HEADSHOT from './../../public/headshot.JPG';

const AboutCard = () => {
    return (
        <div id='about'>
            <div id='card'>
                <h1>About Me</h1>
                <div id='center-container'>
                    <div id='face-container'>
                        <img src={HEADSHOT.src} alt='headshot'></img>
                        {/* <a id='wrapper'>
                            <h3>Its Me!</h3>
                            <p>
                                I dont have anything to say about myself
                            </p>
                        </a> */}
                    </div>
                </div>

                <div id='center-container'>
                    <div id='container'>
                        <div id='text-container'>
                            <h2>
                                I work
                            </h2>
                            <p>
                                as a software development intern at <a href='https://www.novelly.org/'>Novelly</a>, an Ed-Tech Nonprofit that aims to empower young readers and writers. 
                                You can also find me working at UC San Diego as a gym assistant! 
                            </p>
                            <p>
                                I'm also very proud to announce that I have accepted an offer to work as a software development intern for 
                                <a href='https://www.amazon.com/'>
                                    Amazon
                                </a> 
                                in the summer of 2022!
                            </p>
                        </div>
                        <div id='text-container'>
                            <h2>
                                My interests
                            </h2>
                            <p>
                                besides coding include martial arts, weight lifting, and video games.
                                My favorite games are <a href='https://www.hollowknight.com/'>Hollow Knight</a> and Super Smash Brothers.
                            </p>
                            <p>
                                I also love listening to 
                                <a href='https://open.spotify.com/user/zp6uicnu9gam6w207ha1dpe9q?si=ksjmXGv0RTWIp7IWTioH_A'>
                                    rock and pop music
                                </a>
                                by artists like Kanye West and the Strokes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutCard;