"use client"
import { useState } from "react"

type Project = {
    projectName: string;
    projectStatus: string;
}

export default function Page() {
    const [projectName, setProjectName] = useState("");
    const [projectStatus, setProjectStatus] = useState("");
    const [projects, setProjects] = useState<Project[]>([]);

    function addProject() {
        if (projectName.length === 0){
            alert("Project name cannot be empty!");
        } else if (projectStatus.length === 0){
            alert("Project status cannot be empty!");
        } else {
            const newProject: Project = { projectName, projectStatus };
            setProjects([...projects, newProject]);
            setProjectName("");
            setProjectStatus("");
        }
    }

    return(
        <>
            <h1>Create a New Project!</h1>
            <input type = "text" placeholder = "Project Name" value = {projectName} onChange = {(e) => setProjectName(e.target.value)}/>
            <input type = "text" placeholder = "Project Status" value = {projectStatus} onChange = {(e) => setProjectStatus(e.target.value)}/>
            <button onClick={addProject}>Create Project</button>
        </>
    )
}