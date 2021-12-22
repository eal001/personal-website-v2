import { useState } from "react";
import RESUME from '../../public/Resume_ElliotLee.pdf'

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
            </div>
        </div>
    )
}
export default ResumeBox;