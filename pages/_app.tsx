/**
 * this is a the setup of the background of the main website page
 * all components will be contained within this page, and imported like objects
 */

import '../styles/globals.css'
import Intro from '../components/IntroCard'
import {Particle} from '../components/Particle/index'
import internal from 'stream'
import { useState } from 'react'

//create all the particles
const TOTAL = 100; 
let particles: Particle[] = [];
for(let i = 0; i < TOTAL; i++){
    particles.push(new Particle('100%', (i/TOTAL*100)+'%', i));
}
// console.log(TOTAL);
// console.log(particles);

const App  = () => {

    return (
        <div>
            
            <div id='background'>

            <div id='overlay'>
                <div id='card'></div>
                <div id='card'></div>
                <div id='card'></div>
                <div id='card'></div>
                <div id='card'></div>
                <div id='card'></div>
                <div id='card'></div>
                <div id='card'></div>
                <div id='card'></div>
            </div>

                {
                    particles.map(particle => {
                        return particle.render()
                    })
                }
            </div>
        </div>
    )
}

export default App