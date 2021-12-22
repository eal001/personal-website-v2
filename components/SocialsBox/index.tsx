import Github from '../../public/GitHub_logo.png';
import LinkedIn from '../../public/LinkedIn_logo.png';
import Devpost from '../../public/DevPost_logo.png';
import Instagram from '../../public/Instagram_Logo.png';

const SocialsBox = () => {

    return (
        <div id='socials'>
            <div id='center-container'>
                <div id='container'>
                    <div id='container'>
                        <a>
                            <img src={LinkedIn.src} alt='LinkedIn'></img>
                        </a>
                    </div>
                    <div id='container'>
                        <a>
                            <img src={Github.src} alt='Github'></img>
                        </a>
                    </div>
                    <div id='container'>
                        <a>
                            <img src={Devpost.src} alt='Devpost'></img>
                        </a>
                    </div>
                    <div id='container'>
                        <a>
                            <img src={Instagram.src} alt='Instagram'></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialsBox;