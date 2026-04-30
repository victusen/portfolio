import Image from "next/image";
import pfp from "../../public/assets/pfp/vics-picture.png";

export default function About() {
    return (
        <>
            <section className="section" id="about">
                <div className="container">
                    <div className="about-grid">

                        <div className="about-left reveal">
                            <span className="section-label">About Me</span>
                            <h2 className="display-lg">Obsessed with the<br/>details that matter.</h2>
                            <p className="about-body">
                            I value maintainable code, solid fundamentals, and the kind of attention to craft that separates good interfaces from truly great ones. When I'm not building, I'm studying design systems and obsessing over typography.
                            </p>
                        </div>

                        <div className="about-pfp-card reveal">
                            <Image src={ pfp } alt="Victor R. Usen" loading="eager" decoding="async" width={1080} height={1080} className="rounded-lg" />
                        </div>

                        <div className="about-right">
                            <div className="about-card reveal reveal-delay-1">
                            <div className="about-card-label">My Journey</div>
                                <div className="experience-timeline">
                                    <div className="timeline-item">
                                        <span className="timeline-year">2024</span>
                                        <div className="timeline-desc">
                                            <strong>Started Web development</strong>
                                            HTML & CSS
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <span className="timeline-year">2025</span>
                                        <div className="timeline-desc">
                                            <strong>Joined Africinnovate</strong>
                                            Learnt JavaScript/React/Tailwind, Typescript & Firebase
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <span className="timeline-year">2025</span>
                                        <div className="timeline-desc">
                                            <strong>Coached Children at Kids-Code-Kamp</strong>
                                            HTML/CSS
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <span className="timeline-year">2026</span>
                                        <div className="timeline-desc">
                                            <strong>Teaching Web development</strong>
                                            Fulltime
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};