"use client";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/types/project";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        async function fetchProjects(){
            const response = await fetch("/api/projects")

            if (!response.ok){
                alert("Failed to fetch projects");
                return;
            }

            const data = await response.json();
            setProjects(data);
        }

        fetchProjects();
    }, []);

    return(
        <>
            <h1>My Projects!</h1>
            { projects.map((project) => (
                <ProjectCard 
                    key={project.id}
                    projectName = {project.projectName}
                    projectStatus = {project.status}
                    dockerImage = {project.dockerImage}
                />
            )) }
            <Link href="/projects/new"> + New Project</Link>
        </>
    )
}