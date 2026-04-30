import RenderedProjects from "./RenderedProjects";

export default function Work() {
    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="projects-header reveal">
                <div>
                    <span className="section-label">Featured Projects</span>
                    <h2 className="display-lg">Work that speaks<br/>for itself.</h2>
                </div>
                <p className="body-lg" style={{maxWidth: '360px'}}>
                    A curated selection of projects that represent my craft, problem-solving, and attention to detail.
                </p>
                </div>

                <div className="projects-grid" id="projectsGrid">
                    <RenderedProjects onlyFeatured={true} />
                </div>

                <div className="projects-more reveal">
                <div className="hairline"></div>
                <a href="projects/" className="btn btn-ghost">
                    See All Projects
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 10.5l7-7M5.5 3.5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <div className="hairline"></div>
                </div>

            </div>
        </section>
    );
}