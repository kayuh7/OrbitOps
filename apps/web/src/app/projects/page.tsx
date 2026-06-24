import ProjectCard from "@/components/ProjectCard";
import Link from "next/dist/client/link";

export default function Page() {
    const projects = [
        { projectId: 1, projectName: "Project 1", projectStatus: "Active" },
        { projectId: 2, projectName: "Project 2", projectStatus: "Completed" },
        { projectId: 3, projectName: "Project 3", projectStatus: "On Hold" }
    ];  
    return(
        <>
            <h1>My Projects!</h1>
            { projects.map((project) => (
                <ProjectCard 
                    key={project.projectId}
                    projectName = {project.projectName}
                    projectStatus = {project.projectStatus}
                />
            )) }
            <Link href="/projects/new"> + New Project</Link>
        </>
    )
}