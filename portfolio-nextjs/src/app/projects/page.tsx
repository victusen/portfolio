import Sidebar from "../../components/Sidebar";
import ProjectsMain from "../../components/ProjectsMain";
import "./project-page.css";
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