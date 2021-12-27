/**
 * this is a the setup of the background of the main website page
 * all components will be contained within this page, and imported like objects
 */

import '../styles/globals.css'
import Head from 'next/head';
import FAVICON from '../public/favicon.ico';
import Intro from '../components/IntroCard'
import {Particle} from '../components/Particle/index'
import NavBar from '../components/NavBar';
import Skills from '../components/SkillCard';
import About from '../components/AboutCard';
import Projects from '../components/ProjectsCard';
import Contact from '../components/ContactCard';
import Footer from '../components/Footer';
const aos = require( 'aos' );
import "aos/dist/aos.css";
import { useEffect } from 'react';

//create all the particles
const TOTAL = 100; 
let particles: Particle[] = [];
for(let i = 0; i < TOTAL; i++){
    particles.push(new Particle((i/TOTAL*100)+'%', '100%', i));
}

const App  = () => {

    useEffect( ()=> {
        aos.init({duration: 2000})
    }, [])

    return (
        <div>
            <Head>
                <title>Elliot Lee: Student Developer</title>
                <link rel='shortcut icon' href={FAVICON.src} />
            </Head>
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
                    <Skills />
                    <About />
                    <Projects />
                    <Contact />
                    <Footer />
                </div>
        </div>
    )
}

export default App