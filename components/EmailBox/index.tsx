import emailjs, { init } from 'emailjs-com';
import React, { useState } from 'react';

const SERVICE_ID = process.env.NEXT_PUBLIC_EJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EJS_TEMPLATE_ID!;
const USER_ID = process.env.NEXT_PUBLIC_EJS_USER_ID!;

const EmailBox = () => {

    const [email, setEmail] = useState({
        name: "",
        address: "",
        message: ""
    });

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail({
            name: e.target.value, 
            address: email.address,
            message: email.message
        });
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail({
            name: email.name, 
            address: e.target.value,
            message: email.message
        });
    }

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEmail({
            name: email.name, 
            address: email.address,
            message: e.target.value
        });
    }

    const handleSubmit = () => {
        console.log(email)
        if(email.name == '' || email.address == '' || email.message == ''){
            console.error('Did not submit email, one of the fields is empty')
            return ;
        }

        const email_details = {
            from_name: email.name,
            from_email: email.address,
            message: email.message
        }

        //comment out for development
        emailjs.send(SERVICE_ID, TEMPLATE_ID, email_details, USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        console.log("submitted email");
        setEmail({
            name: "",
            address: "",
            message: ""
        })
    }

    return (
        <div id='center-container'>
            <div id='email-box'>
                <input type='text' placeholder='Your Email Here' value={email.address} onChange={handleEmailChange}></input>
                <input type='text' placeholder='Your Name Here' value={email.name} onChange={handleNameChange}></input>
                <textarea placeholder='Your Message Here' value={email.message} onChange={handleMessageChange}></textarea>
                <div>
                    <button id='submit' onClick={handleSubmit}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default EmailBox