import Link from "next/link";

function Sidebar() {
    return (
        <>
            <aside className="sidebar">
                <Link href="/" className="sidebar-logo">Mr.<span>Vic</span></Link>

                <ul className="sidebar-nav">
                    <li><Link href="/index#about">About</Link></li>
                    <li><Link href="/index#skills">Skills</Link></li>
                    <li><Link href="/index#projects" className="active">Projects</Link></li>
                    <li><Link href="/index#contact">Contact</Link></li>
                </ul>

                <div className="sidebar-spacer"></div>

                <Link href="/" className="back-link">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M8 2L3 6.5 8 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Back to home
                </Link>
            </aside>
        </>
    );
}

export default Sidebar;