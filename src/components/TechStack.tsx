export default function TechStack() {
    return (
        <section className="section skills-section" id="skills">
            <div className="container">
                <div className="skills-layout">

                    <div className="skills-intro reveal">
                        <span className="section-label">Tech Stack</span>
                        <h2 className="display-lg">Tools I build<br/>daily with.</h2>
                        <p className="body-lg" style={{marginTop: '1.25rem'}}>
                        The technologies I reach for when turning ideas into polished, production-ready interfaces.
                        </p>
                    </div>

                    <div className="skills-grid">
                        {/* HTML5 */}
                        <div className="skill-card reveal">
                            <div className="skill-icon-wrap">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="icon-html" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
                            </div>
                            <div>
                                <div className="skill-name">HTML</div>
                                <div className="skill-level">Proficient</div>
                            </div>
                        </div>

                        {/* CSS3 */}
                        <div className="skill-card reveal reveal-delay-1">
                            <div className="skill-icon-wrap">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="icon-css" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>
                            </div>
                            <div>
                                <div className="skill-name">CSS</div>
                                <div className="skill-level">Proficient</div>
                            </div>
                        </div>

                        {/* Tailwind */}
                        <div className="skill-card reveal reveal-delay-1">
                            <div className="skill-icon-wrap">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="icon-tailwind" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
                            </div>
                            <div>
                                <div className="skill-name">Tailwind</div>
                                <div className="skill-level">Proficient</div>
                            </div>
                        </div>

                        {/* Git */}
                        <div className="skill-card reveal reveal-delay-4">
                            <div className="skill-icon-wrap">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="icon-git" d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 011.935 3.0 1.838 1.838 0 01-2.308-2.504l-2.484-2.481v6.53a1.836 1.836 0 01-.487 3.607 1.836 1.836 0 01-1.844-1.83 1.837 1.837 0 011.214-1.73V9.703a1.834 1.834 0 01-.996-2.404L8.698 4.617 2.380 10.976a1.549 1.549 0 000 2.187l10.48 10.478a1.55 1.55 0 002.186 0l10.48-10.48a1.55 1.55 0 000-2.23" /></svg>
                            </div>
                            <div>
                                <div className="skill-name">Git</div>
                                <div className="skill-level">Proficient</div>
                            </div>
                        </div>

                        {/* JavaScript */}
                        <div className="skill-card reveal reveal-delay-2">
                        <div className="skill-icon-wrap">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.704-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" className="icon-js"/></svg>
                        </div>
                        <div>
                            <div className="skill-name">JavaScript</div>
                            <div className="skill-level">Proficient</div>
                        </div>
                        </div>

                        {/* React */}
                        <div className="skill-card reveal reveal-delay-3">
                            <div className="skill-icon-wrap">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.76" className="icon-react" /></svg>
                            </div>
                            <div>
                                <div className="skill-name">React</div>
                                <div className="skill-level">Proficient</div>
                            </div>
                        </div>

                        {/* Next.js */}
                        {/* <div className="skill-card reveal reveal-delay-2">
                            <div className="skill-icon-wrap">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path 
                                        className="icon-nextjs" 
                                        fill="currentColor"
                                        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17l-5-6.25v6.25h-1.5v-9h1.25l5.25 6.5v-6.5h1.5v9h-1.5z" 
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="skill-name">Next.js</div>
                                <div className="skill-level">Advanced</div>
                            </div>
                        </div> */}

                        {/* Next.js */}
                        <div className="skill-card reveal reveal-delay-2">
                            <div className="skill-icon-wrap">
                                <svg 
                                    // 1. Adjusted ViewBox to reduce internal padding and make the icon 'taller'
                                    viewBox="10 10 160 160" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <linearGradient
                                            id="nextjs-gradient"
                                            gradientUnits="userSpaceOnUse"
                                            x1="103"
                                            y1="103"
                                            x2="144"
                                            y2="144"
                                        >
                                            <stop stopColor="white" />
                                            <stop offset="1" stopColor="white" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    {/* The Circle Background - Now fills almost the entire ViewBox */}
                                    {/* <circle cx="90" cy="90" r="90" fill="black" /> */}
                                    
                                    {/* The "N" Paths (Preserved, just sitting on a bigger stage) */}
                                    <path
                                        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                                        fill="url(#nextjs-gradient)"
                                    />
                                    <path
                                        d="M115.893 54H128V125.97H115.893V54Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="skill-name">Next.js</div>
                                <div className="skill-level">Advanced</div>
                            </div>
                        </div>

                        {/* Supabase */}
                        <div className="skill-card reveal reveal-delay-2">
                            <div className="skill-icon-wrap">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="icon-supabase" d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.015.985 1.259 1.408 1.874.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.58L11.9 1.036z" /></svg>
                            </div>
                            <div>
                                <div className="skill-name">Supabase</div>
                                <div className="skill-level">Intermediate</div>
                            </div>
                        </div>

                        {/* Firebase */}
                        <div className="skill-card reveal reveal-delay-3">
                            <div className="skill-icon-wrap">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="icon-firebase" d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.73 6.2L13.37 1.472a.542.542 0 00-1.035-.026L8.561 15.551z" /></svg>
                            </div>
                            <div>
                                <div className="skill-name">Firebase</div>
                                <div className="skill-level">Intermediate</div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    )
}