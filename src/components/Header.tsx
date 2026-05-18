"use client";
import Link from "next/link";
import useLenisScroll from "../lib/useLenisScroll";
import { useState } from "react";

function Header() {
    const scrollToElement = useLenisScroll();

    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        scrollToElement(id);
    };

    return (
        <>
            <nav className="nav" id="hero">
                <div className="nav-inner">
                    <Link href="/#hero" className="nav-logo">Mr. <span>Vic</span></Link>
                    <ul className="nav-links">
                    <li><Link href="/#about" onClick={(e) => handleSmoothScroll(e, "about")}>About</Link></li>
                    <li><Link href="/#skills" onClick={(e) => handleSmoothScroll(e, "skills")}>Skills</Link></li>
                    <li><Link href="/#projects" onClick={(e) => handleSmoothScroll(e, "projects")}>Projects</Link></li>
                    </ul>
                    <div className="nav-right">
                    <Link href="/#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="btn btn-primary">Get In Touch</Link>
                    <button onClick={toggle} className="hamburger" id="hamburger" aria-label="Open menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu reveal ${open ? 'open' : ''}`} id="mobile-menu">
                <button onClick={toggle} className="mobile-close" id="mobileClose" aria-label="Close menu">✕</button>
                <Link href="/#about" onClick={(e) => { handleSmoothScroll(e, "about"); toggle(); }}>About</Link>
                <Link href="/#skills" onClick={(e) => { handleSmoothScroll(e, "skills"); toggle(); }}>Skills</Link>
                <Link href="/#projects" onClick={(e) => { handleSmoothScroll(e, "projects"); toggle(); }}>Projects</Link>
                <Link href="/#contact" onClick={(e) => { handleSmoothScroll(e, "contact"); toggle(); }}>Contact</Link>
            </div>
        </>
    )
}

export default Header;