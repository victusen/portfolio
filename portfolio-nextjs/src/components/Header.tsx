import Link from "next/link";

function Header() {

    return (
        <>
            <nav className="nav" id="nav">
            <div className="nav-inner">
                <a href="#hero" className="nav-logo">Mr. <span>Vic</span></a>
                <ul className="nav-links">
                <li><Link href="#about">About</Link></li>
                <li><Link href="#skills">Skills</Link></li>
                <li><Link href="#projects">Projects</Link></li>
                </ul>
                <div className="nav-right">
                <Link href="#contact" className="btn btn-primary">Get In Touch</Link>
                <button className="hamburger" id="hamburger" aria-label="Open menu">
                    <span></span><span></span><span></span>
                </button>
                </div>
            </div>
            </nav>

            {/* Mobile Menu */}
            <div className="mobile-menu" id="mobileMenu">
                <button className="mobile-close" id="mobileClose" aria-label="Close menu">✕</button>
                <Link href="#about">About</Link>
                <Link href="#skills">Skills</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
            </div>
        </>
    )
}

export default Header;