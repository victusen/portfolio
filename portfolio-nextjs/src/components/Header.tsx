"use client";
import Link from "next/link";
import { useState } from "react";

function Header() {

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    return (
        <>
            <nav className="nav" id="hero">
                <div className="nav-inner">
                    <Link href="#hero" className="nav-logo">Mr. <span>Vic</span></Link>
                    <ul className="nav-links">
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#skills">Skills</Link></li>
                    <li><Link href="#projects">Projects</Link></li>
                    </ul>
                    <div className="nav-right">
                    <Link href="#contact" className="btn btn-primary">Get In Touch</Link>
                    <button onClick={toggle} className="hamburger" id="hamburger" aria-label="Open menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {open && <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-200 flex justify-center items-center flex-col gap-10" id="">
                <button onClick={toggle} className="mobile-close" id="mobileClose" aria-label="Close menu">✕</button>
                <Link href="#about">About</Link>
                <Link href="#skills">Skills</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
            </div>}
        </>
    )
}

export default Header;