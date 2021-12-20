/**
 * this is a the setup of the background of the main website page
 * all components will be contained within this page, and imported like objects
 */

import '../styles/globals.css'
import Intro from '../components/IntroCard'
import {Particle} from '../components/Particle/index'
import NavBar from '../components/NavBar';
import About from '../components/AboutCard'
import Projects from '../components/ProjectsCard';

//create all the particles
const TOTAL = 100; 
let particles: Particle[] = [];
for(let i = 0; i < TOTAL; i++){
    particles.push(new Particle((i/TOTAL*100)+'%', '100%', i));
}

const App  = () => {
    return (
        <div>
            <div id='background'>
                {
                    particles.map(particle => {
                        return particle.render()
                    })
                }
            </div>
            <div id='overlay'>
                    <Intro/>
                    <NavBar/>
                    <About />
                    <Projects />
                </div>
        </div>
    )
}

export default App