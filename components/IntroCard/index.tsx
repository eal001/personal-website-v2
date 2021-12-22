import Particles from 'react-particles-js';

const IntroCard = () => {
    return (
            <div id='intro'>
                <Particles params={{
                    "particles":{
                        "number": {
                            "value": 200,
                            "density": {
                                "enable": true,
                                "value_area": 1000
                            }
                        },
                        "color": {
                            "value": "#EDDFEF"
                        },
                        "opacity": {
                            "value": 0.3,
                            "anim": {
                                "enable": true
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 3
                            }
                        },
                        "line_linked":{
                            "enable": true,
                            "distance": 150,
                            "color": "#EDDFEF",
                            "width": 1,
                            "opacity": 0.2
                        },
                        "move": {
                            "speed": 1
                        }
                    },
                    "interactivity":{
                        "detect_on": "canvas",
                        "events":{
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "grab":{
                                "distance": 150,
                                "line_linked":{
                                    "opacity": 0.2
                                }
                            },
                            "push": {
                                "particles_nb": 3
                            }
                        }
                    }
                }}/>
                <div id='center-container'>
                    <div id='vertical-container'>
                        <h1>Hey, I'm <span id='highlight'>Elliot Lee</span>! <br/>I'm a student software engineer</h1>
                        <button><a href='#projects'>Check Out My Work</a></button>
                    </div>
                </div>
            </div>
    )
}

export default IntroCard