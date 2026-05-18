import Sidebar from "../../components/Sidebar";
import ProjectsMain from "../../components/ProjectsMain";
import "./project-page.css";
import "./projects.css"; // Added for paco-inspired card styles
import "../globals.css";

function ProjectsPage() {
    return (
        <main className="shell">
            <Sidebar />
            <div className="main">
                <ProjectsMain />
            </div>
        </main>
    );
}

export default ProjectsPage;