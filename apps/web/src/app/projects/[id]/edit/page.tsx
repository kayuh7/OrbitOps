"use client"
import { useEffect, useState } from "react"
import { redirect, useParams, useRouter } from "next/navigation";

export default function Page() {
    const [projectName, setProjectName] = useState("");
    const [status, setStatus] = useState("");
    const [dockerImage, setDockerImage] = useState("");
    const params = useParams<{id: string}>();
    const router = useRouter();
    
    useEffect(() => {
        async function fetchProject() {
            if (params.id) {
                const response = await fetch(`/api/projects/${params.id}`);
                
                if (!response.ok) {
                    alert("Failed to fetch project");
                    return;
                }

                const data = await response.json();
                setProjectName(data.projectName);
                setStatus(data.status);
                setDockerImage(data.dockerImage);

                console.log("Data:" + JSON.stringify(data));
            }
        }

        fetchProject();
    }, []);

    async function editProject(){
        if (
            projectName.length === 0 ||
            status.length === 0 ||
            dockerImage.length === 0
        ){
            alert("Please fill in all fields");
            return;
        }

        const updatedProject = { projectName, status, dockerImage };

        const response = await fetch(`/api/projects/${params.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProject),
        });
        
        if (!response.ok){
            alert("Failed to update project");
            return;
        }
        
        alert("Project updated successfully!");
        router.push("/projects");
    }

    async function deleteProject(){
        const response = await fetch(`/api/projects/${params.id}`, {
            method: "DELETE",
        });

        if (!response.ok){
            alert("Failed to delete project");
            return;
        }

        alert("Project deleted successfully!");
        router.push("/projects");
    }

    return(
        <>
            <h1>Edit Project!</h1>
            <input type = "text" placeholder = "Project Name" value = {projectName} onChange = {(e) => setProjectName(e.target.value)}/>
            <select value = {status} onChange = {(e) => setStatus(e.target.value)}>
                <option value="">Select Project Status</option>
                <option value="development">Development</option>
                <option value="notDeployed">Not Deployed</option>
                <option value="archived">Archived</option>
            </select>
            <input type="text" value = {dockerImage} onChange = {(e) => setDockerImage(e.target.value)}/>
            <button onClick={editProject}>Update Project</button>
            <button onClick={deleteProject}>Delete Project</button>
        </>
    )
}