"use client"
import { useState, useEffect } from "react";

export default function FormSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setMessage(e.target.value);
    }

    const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        
    }

    return (
        <>
            <div className="modal-content" id="modalContent">
                <div className="modal-header">
                    {/* <span className="modal-eyebrow">Get In Touch</span> */}
                    <h2 id="modalTitle" className="modal-title">Let's talk about you.</h2>
                    <p className="modal-subtext">Please state everything in the form. I'll get back soon.</p>
                </div>

                <form id="contactForm" className="modal-form">
                    <div className="form-group">
                        <input onChange={handleNameChange} type="text" name="name" value={name} id="userName" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                        <input onChange={handleEmailChange} type="email" name="email" value={email} id="userEmail" placeholder="your@email.com" required />
                    </div>
                    <div className="form-group">
                        <textarea onChange={handleMessageChange} name="message" value={message} id="userMessage" placeholder="What's your project?" rows={5} required></textarea>
                    </div>
                    
                    {/* <div id="formError" className="form-error hidden modal-error" >
                        Something went wrong. Try emailing me directly at <a href="mailto:usenvictor40@gmail.com">usenvictor40@gmail.com</a>
                    </div> */}

                    <button  type="submit" className="btn btn-primary btn-full" id="submitBtn">
                        <span>Send Message</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{marginLeft: "8px", }}>
                            <path d="M14 2L2 7.5L7 9L14 2Z" fill="currentColor"/>
                            <path d="M14 2L7 9L8.5 14L14 2Z" fill="currentColor"/>
                        </svg>
                    </button>
                </form>
            </div>

            {/* Success State (Hidden by default)  */}
            <div className="text-center py-4 flex flex-col items-center justify-center animate-[modalFadeIn_0.5s_cubic-bezier(0.16,1,0.30,1)_forwards]" id="modalSuccess" >
                <div className="success-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <h2 className="modal-title">Message sent.</h2>
                <p className="modal-subtext">Thanks for writing me. I've received your mail.</p>
            </div>
        </>
    )
}