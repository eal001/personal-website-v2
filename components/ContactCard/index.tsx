import EmailBox from "../EmailBox";
import SocialsBox from "../SocialsBox";
import Particles from "react-particles-js";

const ContactCard = () => {
    return (
        <div id='contact'>
            <div id='vertical-container'>
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
                <h1>Let's Talk!</h1>
                <EmailBox />
                <SocialsBox />
            </div>
        </div>
    )
}


export default ContactCard;