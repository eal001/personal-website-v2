import { useState } from "react";
import RESUME from './../../Resume_ElliotLee.pdf';

const ResumeBox = () => {
    const [message, setMessage] = useState("View Resume");
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen);

        if(isOpen) {
            setMessage('View Resume');
        } else {
            setMessage('Hide Resume');
        }
    }

    return(
        <div id='resume'>
            <div id='center-container'>
                <button onClick={handleClick}>{message}</button>
                <a href={RESUME} target='_blank' rel='noreferror'>RESUME</a>
                <embed type='asset/resource' style={{"width": "500px", "height": "1000px"}} src={RESUME}></embed>
            </div>
        </div>
    )
}
export default ResumeBox;