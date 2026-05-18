"use client"
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser"
import { config } from "../lib/config";

export default function FormSection({ isOpen = true }: { isOpen?: boolean }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [formSent, setFormSent] = useState(false);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value.toUpperCase());
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

    useEffect(() => {
        emailjs.init(config.EMAILJS_PUBLIC_KEY);
    }, []);

    // Reset form and success state after the modal close transition (400ms) completes
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                setFormSent(false);
                setName("");
                setEmail("");
                setMessage("");
            }, 400);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        // console.log("Form is submitting...");

        await emailjs.send(
            config.EMAILJS_SERVICE_ID,
            config.EMAILJS_TEMPLATE_ID,
            {
                name,
                email,
                message,
            }
        ).then((response) => {
            console.log("Message sent successfully!", response.status, response.text);
            setFormSent(true);
            setMessage("");
        }).catch((error) => {
            console.log("Message failed to send", error);
        }).finally(() => {
            setSubmitting(false);
        });

    };

    return (
        <>
            {!formSent ? ( <div className="modal-dialog" id="modalDialog" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                <div className="modal-header" id="modalHeader">
                    {/* <span className="modal-eyebrow">Get In Touch</span> */}
                    <h2 id="modalTitle" className="modal-title">Let's talk about you.</h2>
                    <p className="modal-subtext">Please state everything in the form. I'll get back soon.</p>
                </div>

                <form onSubmit={handleSubmit} id="contactForm" className="modal-form">
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

                    <button type="submit" className="btn btn-primary btn-full" id="submitBtn" disabled={submitting}>
                        <span>{submitting ? "Sending..." : "Send Message"}</span>
                        {!submitting && (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{marginLeft: "8px", }}>
                                <path d="M14 2L2 7.5L7 9L14 2Z" fill="currentColor"/>
                                <path d="M14 2L7 9L8.5 14L14 2Z" fill="currentColor"/>
                            </svg>
                        )}
                    </button>
                </form>
            </div>) : ( <FormSuccess setFormSent={setFormSent} /> )}
        </>
    )
}

function FormSuccess({ setFormSent}: { setFormSent: (value: boolean) => void }) {
    return (
        <div className="text-center py-4 flex flex-col gap-2 items-center justify-center animate-[modalFadeIn_0.5s_cubic-bezier(0.16,1,0.30,1)_forwards]" id="modalSuccess" >
            <div className="success-icon" onClick={() => { setFormSent(false); }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <h2 className="modal-title">Message sent.</h2>
            <p className="modal-subtext">Thanks for writing. I've gotten your message and will get back shortly.</p>
        </div>
    );
};