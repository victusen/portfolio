import Footer from "./Footer";
import RenderedProjects from "./RenderedProjects"

function ProjectsMain() {
    return (
        <>
            {/* Topbar  */}
            <div className="topbar">
                <span className="topbar-title">All Projects</span>
                <span className="topbar-count" id="topbarCount"></span>
            </div>

            {/* Padded grid area */}
            <div className="grid-wrap">
                <div className="project-grid" id="projectGrid">
                    <RenderedProjects onlyFeatured={false} /> 
                </div>
            </div>

            <Footer />
        </>
    );
}

export default ProjectsMain;