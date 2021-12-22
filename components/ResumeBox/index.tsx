import { useState } from "react";
import RESUME from './../../Resume_ElliotLee.pdf';

const ResumeBox = () => {
    const [message, setMessage] = useState("View Resume");
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen);

        const resume = document.getElementById('resume-viewer');

        if(isOpen) {
            // previously it was open, it has been closed, we have to set everything as if it will open resume again
            setMessage('View Resume');
            resume.style.height = '0px';
        } else {
            // previously it was closed, it has been opened, we have to set everything as if it will close resume again
            setMessage('Hide Resume');
            resume.style.height = '800px';
        }
    }

    return(
        <div id='resume'>
            <div id='vertical-container'>
                <button onClick={handleClick}>{message}</button>
                <embed id='resume-viewer' src={RESUME} ></embed>
            </div>
        </div>
    )
}
export default ResumeBox;