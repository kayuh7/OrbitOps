export default function ProjectCard({ projectName, projectStatus }: { projectName: string; projectStatus: string }) {
    return (
        <div>
            <h2>Project Name: {projectName}</h2>
            <p>Status: {projectStatus}</p>
        </div>
    )
}