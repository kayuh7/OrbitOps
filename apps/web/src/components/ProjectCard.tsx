import Link from "next/link";

export default function ProjectCard({ id, projectName, projectStatus, dockerImage }: { id: string; projectName: string; projectStatus: string; dockerImage: string }) {
    return (
        <div>
            <h2>Project Name: {projectName}</h2>
            <p>Status: {projectStatus}</p>
            <p>Docker Image: {dockerImage} </p>
            <Link href={`/projects/${id}/edit`}>Edit Project</Link>
        </div>
    )
}