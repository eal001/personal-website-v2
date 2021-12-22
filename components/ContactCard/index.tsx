import EmailBox from "../EmailBox";
import ResumeBox from "../ResumeBox";
import SocialsBox from "../SocialsBox";

const ContactCard = () => {
    return (
        <div id='contact'>
            <h1>Let's Talk!</h1>
            <EmailBox />
            <ResumeBox />
            <SocialsBox />
        </div>
    )
}


export default ContactCard;