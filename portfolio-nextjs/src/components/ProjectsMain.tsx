import Footer from "./Footer";
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
                <div className="project-grid" id="projectGrid"></div>
            </div>

            <Footer />
        </>
    );
}

export default ProjectsMain;