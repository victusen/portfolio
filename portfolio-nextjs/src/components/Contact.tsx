

export default function Contact() {
    return (
        <section className="section contact-section" id="contact">
            <div className="container" >
                <div className="contact-layout" >

                <div className="contact-left reveal">
                    <span className="section-label">Get In Touch</span>
                    <h2 className="display-lg">Let's build<br />something <span className="accent">great.</span></h2>
                    <p className="body-lg">
                    Have a project in mind, or just want to talk? I'm always open.
                    </p>
                    <a href="#" className="btn btn-primary js-open-modal" style={{fontSize: '0.9375rem', padding: '0.875rem 2rem'}}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4l6 5 6-5M2 4h12v8H2V4z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Send Me a Message
                    </a>
                    <div className="contact-socials">
                     {/* GitHub */}
                    <a href="https://github.com/victusen" target="_blank" className="btn btn-icon" aria-label="GitHub">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </a>
                    {/* LinkedIn  */}
                    <a href="https://www.linkedin.com/in/victor-usen-81a5a63a4/" target="_blank" className="btn btn-icon" aria-label="LinkedIn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    {/* Twitter/X */}
                    <a href="https://x.com/__victorusen" target="_blank" className="btn btn-icon" aria-label="Twitter">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.736-8.835L1.254 2.25H8.08l4.213 5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    </div>
                </div>

                <div className="contact-right reveal reveal-delay-2">
                    <a href="mailto:usenvictor40@gmail.com?subject=Web&body=I saw your website, and I'd like to..." className="contact-item">
                    <div className="contact-item-left">
                        <span className="contact-item-label">Email</span>
                        <span className="contact-item-value">usenvictor40@gmail.com</span>
                    </div>
                    <span className="contact-item-arrow">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4.5 13.5l9-9M7 4.5h6.5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    </a>

                    <a href="https://wa.me/qr/6UTN22Z45CWDL1" target="_blank" className="contact-item">
                    <div className="contact-item-left">
                        <span className="contact-item-label">whatsapp</span>
                        <span className="contact-item-value">(+234) 708 095 2597</span>
                    </div>
                    <span className="contact-item-arrow">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4.5 13.5l9-9M7 4.5h6.5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=61562599393792" target="_blank" className="contact-item">
                    <div className="contact-item-left">
                        <span className="contact-item-label">facebook</span>
                        <span className="contact-item-value">Very Active</span>
                    </div>
                    <span className="contact-item-arrow">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4.5 13.5l9-9M7 4.5h6.5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    </a>

                    <a href="#" className="contact-item js-open-modal">
                    <div className="contact-item-left">
                        <span className="contact-item-label">Availability</span>
                        <span className="contact-item-value">Open to freelance &amp; full-time</span>
                    </div>
                    <div style={{ display: 'flex',alignItems: 'center',gap: '0.5rem' }}>
                        {/* <div className="status-dot"></div> */}
                        <span style={{ fontSize: '0.75rem',color: 'var(--cyan)' }} >Available</span>
                    </div>
                    </a>
                </div>

                </div>
            </div>
        </section>
    );
}