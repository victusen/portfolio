// import Image from "next/image";
// import vicsPhoto from "../../public/assets/pfp/vics-photo.png";
"use client";
import Link from "next/link";
import useLenisScroll from "../lib/useLenisScroll";
import React from "react";

function Hero() {
  const scrollToElement = useLenisScroll();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToElement(id);
  }
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-grid"></div>
        <div className="hero-line"></div>

        <div className="hero-content">
          <div className="hero-status">
          {/* <div className="status-dot"></div> */}
          <span className="eyebrow">available to work</span>
          </div>

          <div className="hero-name-wrap">
          <h1 className="hero-name">
            Victor R.<br /><span className="last">Usen</span>
          </h1>
          </div>

          <div className="hero-meta">
          <p className="hero-role">
            <strong>Fullstack Developer</strong> — I build clean, scalable,<br />
            and performant websites with React &amp; some modern web tools.
          </p>
          <div className="hero-cta-group">
            <Link 
              href="/#projects" 
              className="btn btn-primary"
              onClick={(e) => handleLinkClick(e, "projects")}
            >
              View My Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3.5 10.5l7-7M5.5 3.5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link 
              href="/#contact" 
              className="btn btn-ghost"
              onClick={(e) => handleLinkClick(e, "contact")}
            >
            Say Hello
            </Link>
          </div>
          </div>

          <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">2<span className="unit">+</span></div>
            <div className="stat-label">Years Coding</div>
          </div>
          <div className="stat">
            <div className="stat-number">8<span className="unit"></span></div>
            <div className="stat-label">Tools Mastered</div>
          </div>
          <div className="stat">
            <div className="stat-number">12<span className="unit">+</span></div>
            <div className="stat-label">Projects Done</div>
          </div>
          </div>
        </div>

        {/* <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div> */}
      </section>
    </>
  )
}

export default Hero;