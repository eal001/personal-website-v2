/**
 * this is a the setup of the background of the main website page
 * all components will be contained within this page, and imported like objects
 */

import '../styles/globals.css'
import Intro from '../components/IntroCard'
import {Particle} from '../components/Particle/index'
import internal from 'stream'
import { useState } from 'react'

const App  = () => {
    // const [particles, setParticles] = useState<Particle[]>([]);
    // let x = 0;
    // let y = 100;
    // let speed = 0;
    // let temp: Particle[] = particles
    // //generate particle objects
    // for(let i = 0; i < 100 ; i++){
    //     x = i + (Math.random() - 0.5)
    //     y = 100;
    //     speed = Math.random()*10
    //     let temp = particles
    //     temp.push(new Particle(x, y, speed, 'black'))
    //     setParticles( temp )
    // }


    return (
        <div>
            <div id='overlay'>
                <div id='content'>
                    <Intro/>
                    <div id='card'></div>
                    <div id='card'></div>
                </div>
            </div>
            <div id='background'>
                <div id='particle' style={ { backgroundColor: 'black', top: "100%", left: "10px"} }></div>
            </div>
        </div>
    )
}

export default App