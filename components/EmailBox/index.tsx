import emailjs, { init } from 'emailjs-com';
import { useState } from 'react';

const SERVICE_ID = process.env.NEXT_PUBLIC_EJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EJS_TEMPLATE_ID;
const USER_ID = process.env.NEXT_PUBLIC_EJS_USER_ID;

const EmailBox = () => {

    const [email, setEmail] = useState({
        name: "",
        address: "",
        message: ""
    });

    const handleNameChange = (e) => {
        setEmail({
            name: e.target.value, 
            address: email.address,
            message: email.message
        });
    }

    const handleEmailChange = (e) => {
        setEmail({
            name: email.name, 
            address: e.target.value,
            message: email.message
        });
    }

    const handleMessageChange = (e) => {
        setEmail({
            name: email.name, 
            address: email.address,
            message: e.target.value
        });
    }

    const handleSubmit = () => {
        console.log(email)

        const email_details = {
            from_name: email.name,
            from_email: email.address,
            message: email.message
        }

        emailjs.send(SERVICE_ID, TEMPLATE_ID, email_details, USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        console.log("submitted email");
    }

    return (
        <div id='email-box'>
            <input type='text' placeholder='Your Email Here' value={email.address} onChange={handleEmailChange}></input>
            <input type='text' placeholder='Your Name Here' value={email.name} onChange={handleNameChange}></input>
            <input type='text' placeholder='Your Name Here' value={email.message} onChange={handleMessageChange}></input>
            <button id='submit' onClick={handleSubmit}>Send</button>
        </div>
    )
}

export default EmailBox