"use client"
import { useState } from "react"
import type {Project} from "@/types/project";

export default function Page() {
    const [projectName, setProjectName] = useState("");
    const [status, setStatus] = useState("");
    const [dockerImage, setDockerImage] = useState("");

    async function addProject() {
        
        if (
            projectName.length === 0 ||
            status.length === 0 ||
            dockerImage.length === 0
        ){
            alert("Please fill in all fields");
            return;
        }
            
        const createProject: Project = { projectName, status, dockerImage };
            
        const response = await fetch("/api/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(createProject),
        });

        if (!response.ok){
            alert("Failed to create project");
            return;
        }
        
        alert("Project created successfully!");
        setProjectName("");
        setStatus("");
        setDockerImage("");
    }

    return(
        <>
            <h1>Create a New Project!</h1>
            <input type = "text" placeholder = "Project Name" value = {projectName} onChange = {(e) => setProjectName(e.target.value)}/>
            <select value = {status} onChange = {(e) => setStatus(e.target.value)}>
                <option value="">Select Project Status</option>
                <option value="development">Development</option>
                <option value="notDeployed">Not Deployed</option>
                <option value="archived">Archived</option>
            </select>
            <input type = "text" placeholder = "Docker Image" value = {dockerImage} onChange = {(e) => setDockerImage(e.target.value)}/>
            <button onClick={addProject}>Create Project</button>
        </>
    )
}