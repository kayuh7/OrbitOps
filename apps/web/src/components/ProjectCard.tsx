export default function ProjectCard({ projectName, projectStatus, dockerImage }: { projectName: string; projectStatus: string; dockerImage: string }) {
    return (
        <div>
            <h2>Project Name: {projectName}</h2>
            <p>Status: {projectStatus}</p>
            <p>Docker Image: {dockerImage} </p>
        </div>
    )
}